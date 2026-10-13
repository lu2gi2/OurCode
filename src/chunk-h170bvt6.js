import { q, B, Oq } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ol, Wp, um, wt, If, Mn, pN, Jbe, hF, Ib, $V, Gt, Ae, ce, Pv } from "/$bunfs/root/chunk-0ycjphb5.js";
import { AZ } from "/$bunfs/root/chunk-svqqgdca.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
const S = 3600000;
const _ = 86400000;
const h = "/api/claude_code/organizations/metrics_enabled";
class o extends Error {
}
async function w() {
    let e = Jbe(await hF(), `${dn().BASE_API_URL}${h}`);
    if (e.error) {
        throw new o("Auth error: no credential usable for the metrics opt-out check");
    }
    let n = await Gt.get(h, {
        auth: "none",
        headers: e.headers,
        timeout: 5000,
        bypassEssentialTrafficOnly: true,
        maxRedirects: 0
    });
    if (!n.ok) {
        throw new o(`metrics_enabled unavailable: ${n.reason}`);
    }
    if (typeof n.data?.metrics_logging_enabled !== "boolean") {
        throw Error("metrics_enabled response missing metrics_logging_enabled");
    }
    return n.data;
}
async function M(e) {
    try {
        let n = await Ib(w, {
            also403Revoked: true,
            gateToSessionOAuthCredential: true,
            oauthRefreshLatch: e
        });
        e.attempted = false;
        t(`${$V} Metrics opt-out API response: enabled=${n.metrics_logging_enabled}`);
        g("api_metrics_opt_out_check");
        return {
            enabled: n.metrics_logging_enabled,
            hasError: false
        };
    } catch (error) {
        t(`${$V} Failed to check metrics opt-out status: ${l(error)}`, error instanceof o ? {
            level: "error"
        } : undefined);
        m("api_metrics_opt_out_check", "request_failed");
        return {
            enabled: false,
            hasError: true
        };
    }
}
const y = new q(()=>{
    let e = {
        attempted: false
    };
    return {
        memo: AZ(()=>M(e), S),
        oauthRefreshLatch: e
    };
});
const E = new q(()=>({
        identity: undefined
    }));
function d() {
    let { key, source } = Wp();
    if (key === null) {
        return null;
    }
    if (source === "apiKeyHelper") {
        let r = um();
        if (r) {
            return `key:helper:${at(r).slice(0, 16)}`;
        }
        return null;
    }
    return `key:${at(key).slice(0, 16)}`;
}
function u(e) {
    let n = pN();
    if (n !== undefined) {
        if (n.organizationUuid !== undefined) {
            return `acct:${n.accountUuid}/${n.organizationUuid}`;
        }
        return null;
    }
    if (!e?.accountUuid || !e.organizationUuid) {
        return null;
    }
    if (a.CLAUDE_CODE_OAUTH_TOKEN || Oq()) {
        return null;
    }
    return `acct:${e.accountUuid}/${e.organizationUuid}`;
}
function s() {
    let e = Mn();
    if (e !== undefined) {
        return u(e);
    }
    if (ol()) {
        return null;
    }
    return d();
}
async function p(e) {
    let n = Mn();
    if (n === undefined) {
        if (ol()) {
            return null;
        }
        return d();
    }
    if (pN() !== undefined) {
        return u(n);
    }
    return u(await Pv(e));
}
function P() {
    let e = Mn();
    if (e !== undefined || ol()) {
        let n = pN();
        if (n !== undefined) {
            return `acct:${n.accountUuid}/${n.organizationUuid ?? "?"}`;
        }
        if (e !== undefined) {
            return `acct:${e.accountUuid ?? "?"}/${e.organizationUuid ?? "?"}`;
        }
        return "oauth:no-record";
    }
    return d() ?? "none";
}
function I() {
    let host = B().host;
    let n = y.of(host);
    let r = E.of(host);
    let i = P();
    if (r.identity !== undefined && r.identity !== i) {
        n.memo.cache.clear();
        n.oauthRefreshLatch.attempted = false;
    }
    r.identity = i;
    return n.memo();
}
function r2o() {
    let host = B().host;
    let n = y.of(host);
    n.memo.cache.clear();
    n.oauthRefreshLatch.attempted = false;
    E.of(host).identity = undefined;
}
async function b(e) {
    let n = s() === null ? null : await p(e);
    let r = await I();
    if (r.hasError) {
        return r;
    }
    if (n === null) {
        return r;
    }
    if (await p(e) !== n) {
        m("api_metrics_opt_out_check", "principal_changed_mid_flight");
        return {
            enabled: false,
            hasError: true
        };
    }
    if (s() !== n) {
        return r;
    }
    let i = C(n);
    if (i !== undefined && i.enabled === r.enabled && Date.now() - i.timestamp < _) {
        return r;
    }
    await Ae((k)=>T(k, n, r.enabled), e);
    return r;
}
function T(e, n, enabled) {
    if (s() !== n || n.startsWith("acct:") && e.oauthAccount === undefined) {
        return e;
    }
    return {
        ...e,
        metricsStatusCache: undefined,
        metricsStatusCacheByPrincipal: O({
            ...e.metricsStatusCacheByPrincipal,
            [n]: {
                enabled,
                timestamp: Date.now()
            }
        })
    };
}
const F = 8;
function O(e) {
    let r = Object.entries(e).filter(([, i])=>A(i)).sort(([, i], [, f])=>f.timestamp - i.timestamp).slice(0, F);
    return Object.fromEntries(r);
}
function A(e) {
    return typeof e?.enabled === "boolean" && Number.isFinite(e.timestamp) && e.timestamp <= Date.now();
}
function C(e) {
    let n = ce().metricsStatusCacheByPrincipal?.[e];
    if (n !== undefined && A(n)) {
        return n;
    }
}
async function o2o(e) {
    if (wt() && !If()) {
        return {
            enabled: false,
            hasError: false
        };
    }
    let n = s();
    let r = n === null ? undefined : C(n);
    if (r !== undefined) {
        if (Date.now() - r.timestamp > _) {
            b(e).catch(c);
        }
        return {
            enabled: r.enabled,
            hasError: false
        };
    }
    return b(e);
}
export { r2o, o2o };
