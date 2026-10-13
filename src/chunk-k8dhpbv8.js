import { d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W, l, v, z, ti, s9e } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B, cs, Rq, UZ, Ip, CS } from "/$bunfs/root/chunk-ctt36bn8.js";
import { St, _, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { lCo, pp, dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i, js } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { FSe } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Ie, af, Ktn } from "/$bunfs/root/chunk-nj0630nv.js";
import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { Wz, cf, ly } from "/$bunfs/root/chunk-55x53sfe.js";
import { Qws, fIt, Zws, kwr, _d, ZS, vl, J7t, FE, um, bn, m8, $T, fg, rZt, oZt, _6e, zIt, yl, aZt, joe, wt, qf as readStoredAccount, hF, GIt, VIt, Ib, yks, _ks, _Zt, qBn, KBn, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { MF } from "/$bunfs/root/chunk-ph7a449e.js";
import { Vk } from "/$bunfs/root/chunk-6g4165br.js";
import { GCs, VCs } from "/$bunfs/root/chunk-pp3y3t61.js";
import { cSe } from "/$bunfs/root/chunk-k3tkc302.js";
import { kde } from "/$bunfs/root/chunk-6rhcrh84.js";
import { Nat, Sbr, r$e, nSs, rSs, oSs, Cde, Rde, mQt, vbr, j$n, kYe, Wfo, iSs, Ebr, kbr, aSs, Abr, Cbr, Rbr, gQt, W$n, xbr, Fat, Gfo, aPt, Vfo, Pbr, coe, qfo, zCe, z$n, Obr, ZD, hQt, TYe, G$n, V$n, $k, KM, Yfo, Mbr, Jh, K5, cPt, Hbr, dY, Xfo, Dbr, Jfo, Lbr, dPt, q$n, Qfo, K$n, $br, CYe, emo, tmo, Fbr, uPt, Y$n, _Qt, pPt, Ubr, imo, dmo, mS } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { Ffo } from "/$bunfs/root/chunk-0hc5jd2w.js";
import { jbs, iPt, Lfo, e$e, cQt, dQt, Wbs, zbs, Gbs } from "/$bunfs/root/chunk-9s2mtk47.js";
import { aoe } from "/$bunfs/root/chunk-fjbdf210.js";
import { Xk } from "/$bunfs/root/chunk-sfqgx6er.js";
import { Ko } from "/$bunfs/root/chunk-7qc48pza.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { ZCo, gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { statSync } from "fs";
import { unlink, utimes, writeFile } from "fs/promises";
function Te(e, n, r = {}) {
    let o = setInterval(e, n);
    if (r.unref) {
        o.unref?.();
    }
    return {
        [Symbol.dispose]: ()=>clearInterval(o)
    };
}
const xt = 3;
function Gt() {
    let e = k("tengu_zippy_gosling", 0);
    if (typeof e === "number" && Number.isFinite(e)) {
        return e;
    }
    return 0;
}
function kfo(e) {
    let n = Math.max(Ip(), UZ() ?? 0);
    return !kde() && Date.now() - n > e;
}
function I$n(e, n, r = {}) {
    let o = 0;
    let s = null;
    let h = null;
    let p = Te(C, n, r);
    function y() {
        s?.();
        s = null;
        if (h !== null) {
            clearTimeout(h);
            h = null;
        }
    }
    function S() {
        o = 0;
        y();
        e();
    }
    function C() {
        let w = Gt();
        if (!(w > 0 && kfo(w)) || o >= xt) {
            S();
            return;
        }
        o++;
        s ??= Rq(()=>{
            h ??= setTimeout(()=>{
                p[Symbol.dispose]();
                p = Te(C, n, r);
                S();
            }, 0);
        });
    }
    return {
        [Symbol.dispose]: ()=>{
            p[Symbol.dispose]();
            y();
        }
    };
}
function rQt(e) {
    let n = e?.response?.data?.error;
    if (!n || typeof n !== "object") {
        return {};
    }
    let r = typeof n.type === "string" ? n.type : undefined;
    let o = n.details?.error_code;
    let s = typeof o === "string" ? o : typeof n.error_code === "string" ? n.error_code : typeof n.code === "string" ? n.code : undefined;
    let h = typeof n.message === "string" ? n.message : undefined;
    let serverAuthDenial = s === undefined && h !== undefined && (r === "authentication_error" || r === "permission_error") ? Nt(h) : undefined;
    return {
        serverErrorType: r === undefined ? undefined : rSs.includes(r) ? r : "other",
        serverErrorCode: s === undefined ? undefined : oSs.includes(s) ? s : "other",
        ...serverAuthDenial !== undefined && {
            serverAuthDenial
        }
    };
}
function Nt(e) {
    if (e.startsWith("Organization access has been revoked")) {
        return "org_access_revoked";
    }
    if (e.startsWith("Workspace access has been revoked")) {
        return "workspace_revoked";
    }
    if (/^OAuth (?:access )?token has been revoked\b/.test(e)) {
        return "token_revoked";
    }
    if (/^OAuth (?:access )?token has expired\b/.test(e)) {
        return "token_expired";
    }
    if (e.startsWith("OAuth access token is invalid") || e.startsWith("Invalid bearer token")) {
        return "token_invalid";
    }
    if (e.startsWith("OAuth token application has been deactivated")) {
        return "application_deactivated";
    }
    if (e.startsWith("Credential is invalid")) {
        return "credential_invalid";
    }
    return "other";
}
class rt {
    settings = undefined;
    policy = undefined;
    settingsBarrier = undefined;
    policyBarrier = undefined;
    isDefaultCommand = undefined;
    openStartupBlocks = 0;
    policyGate = undefined;
    settingsReader = undefined;
    orgGateShadow = undefined;
    logged = false;
    unregisterExitFlush = undefined;
}
const Ht = new q(()=>new rt);
function Le(e = performance.now()) {
    if (CS()) {
        return undefined;
    }
    return Math.round(e);
}
function tt(e, n) {
    if (e === undefined || n === undefined) {
        return undefined;
    }
    return Math.max(e, n);
}
function K(e) {
    try {
        let n = cs(Ht);
        if (n.logged) {
            return;
        }
        n.unregisterExitFlush ??= St(()=>K((r)=>Be(r, "exit")));
        e(n);
    } catch (error) {
        c(W(error));
    }
}
function Lbs(e) {
    K((n)=>{
        n.isDefaultCommand ??= e;
    });
}
function Me(e) {
    K((n)=>{
        n.policyGate ??= e;
    });
}
function Nbs(e) {
    K((n)=>{
        n.settingsReader ??= e;
    });
}
function $bs(e) {
    K((n)=>{
        n.orgGateShadow ??= e;
    });
}
const be = new Set([
    "ineligible",
    "superseded"
]);
function q5(e, n) {
    K((r)=>{
        let o = r[e];
        if (o !== undefined && !be.has(o.source)) {
            return;
        }
        r[e] = {
            ...n,
            settledMs: Le()
        };
        Fe(r);
    });
}
function _Ye(e, n, { since, supersede = false } = {}) {
    K((s)=>{
        ot(s, e, n, since, supersede);
        Fe(s);
    });
}
function fbr(e, { supersede = false } = {}) {
    let r = performance.now();
    let o = false;
    K((s)=>{
        s.openStartupBlocks++;
        o = true;
    });
    return (s)=>K((h)=>{
            if (!o) {
                return;
            }
            o = false;
            h.openStartupBlocks--;
            ot(h, e, s, r, supersede);
            Fe(h);
        });
}
function ot(e, n, r, o, supersede) {
    let h = n === "settings" ? "settingsBarrier" : "policyBarrier";
    if (e[h] !== undefined && !supersede) {
        return;
    }
    let p = performance.now();
    e[h] = {
        result: typeof r === "function" ? r() : r,
        waitMs: o === undefined ? 0 : Math.round(p - o),
        crossedMs: Le(p)
    };
}
function oQt() {
    let e = Promise.resolve();
    K((n)=>{
        let r = De(n.policyGate);
        e = js(st, dt(n, "exit", r)).catch((o)=>{
            c(W(o));
        });
        at(n, r);
    });
    return e;
}
function Fbs() {
    K((e)=>Be(e, "first_prompt"));
}
function Fe(e) {
    if (e.settings && e.policy && e.settingsBarrier && e.policyBarrier && !be.has(e.settings.source) && !be.has(e.policy.source) && e.openStartupBlocks === 0) {
        Be(e, "both_resolved");
    }
}
var st = "tengu_managed_config_ready";
const Wt = "tengu_org_config_gate_shadow";
function Be(e, n) {
    let r = De(e.policyGate);
    i(st, dt(e, n, r));
    at(e, r);
}
function at(e, policyGateFields) {
    if (e.orgGateShadow === undefined) {
        return;
    }
    try {
        i(Wt, e.orgGateShadow({
            settings: e.settings,
            policy: e.policy,
            policyGateFields
        }));
    } catch (error) {
        c(W(error));
    }
}
function dt(e, n, r) {
    e.logged = true;
    e.unregisterExitFlush?.();
    let { settings, policy, settingsBarrier, policyBarrier } = e;
    return {
        trigger: d(n),
        emitted_ms: Le(),
        is_default_command: e.isDefaultCommand,
        settled_ms: tt(settings?.settledMs, policy?.settledMs),
        barrier_crossed_ms: tt(settingsBarrier?.crossedMs, policyBarrier?.crossedMs),
        ...it("settings", settings),
        ...nt("settings", settingsBarrier),
        ...De(e.settingsReader),
        ...it("policy", policy),
        ...nt("policy", policyBarrier),
        ...r
    };
}
function De(e) {
    if (e === undefined) {
        return {};
    }
    try {
        return e();
    } catch (error) {
        c(W(error));
        return {};
    }
}
function it(e, n) {
    return {
        [`${e}_source`]: n ? d(n.source) : d("pending"),
        [`${e}_had_cache`]: n?.hadCache,
        [`${e}_awaited`]: n?.awaited,
        [`${e}_fetch_ms`]: n?.fetchMs,
        [`${e}_settled_ms`]: n?.settledMs
    };
}
function nt(e, n) {
    return {
        [`${e}_barrier`]: n ? d(n.result) : d("not_reached"),
        [`${e}_barrier_wait_ms`]: n?.waitMs
    };
}
function sQt(e) {
    let n = new AbortController;
    return {
        attempt: e(n.signal),
        abort: ()=>n.abort()
    };
}
function mbr({ first, send, isAnswer, delayMs = 3000, stillWanted = ()=>true, retryFollows = true }) {
    return new Promise((resolve, reject)=>{
        let S = false;
        let C;
        let w = 1;
        let A;
        let E;
        let L = (R)=>{
            S = true;
            clearTimeout(T);
            first.abort();
            C?.abort();
            if (R.ok) {
                resolve({
                    result: R.value,
                    hedged: C !== undefined
                });
            } else {
                reject(R.error);
            }
        };
        let I = (attempt)=>{
            attempt.then((value)=>x({
                    ok: true,
                    value
                }), (error)=>x({
                    ok: false,
                    error
                }));
        };
        let x = (R)=>{
            if (S) {
                return;
            }
            w--;
            let P = w > 0;
            if (R.ok && isAnswer(R.value, P)) {
                L(E && !isAnswer(R.value, true) ? E : R);
                return;
            }
            if (P) {
                if (R.ok && isAnswer(R.value, false)) {
                    A ??= {
                        value: R.value
                    };
                } else if (R.ok && retryFollows) {
                    E ??= R;
                }
                return;
            }
            L(A && !(R.ok && retryFollows) ? {
                ok: true,
                value: A.value
            } : R);
        };
        let T = setTimeout(()=>{
            if (S || !stillWanted()) {
                return;
            }
            w++;
            C = sQt(send);
            I(C.attempt);
        }, delayMs);
        I(first.attempt);
    });
}
class O$n {
    entry = null;
    set(key, n, r = ()=>true) {
        this.clear();
        let inFlight = sQt(n);
        let s = {
            key,
            inFlight,
            sentAtMs: Date.now(),
            failed: false
        };
        inFlight.attempt.then((h)=>{
            s.failed = !r(h);
        }, ()=>{
            s.failed = true;
        });
        this.entry = s;
    }
    get pending() {
        return this.entry !== null;
    }
    take(e) {
        let entry = this.entry;
        this.entry = null;
        if (entry === null) {
            return;
        }
        let r = Math.abs(Date.now() - entry.sentAtMs) <= 60000;
        if (!entry.failed && r && e(entry.key)) {
            return entry.inFlight;
        }
        entry.inFlight.abort();
    }
    clear() {
        this.entry?.inFlight.abort();
        this.entry = null;
    }
}
const Vt = {
    begin: "-----SIGNED-CACHE-ROOTS-BEGIN-----",
    roots: [
        {
            pem: `-----BEGIN CERTIFICATE-----
MIIB3TCCAYKgAwIBAgIUANUYY/tuc08yPd9Nsh7rY/zDEiwwCgYIKoZIzj0EAwIw
OjESMBAGA1UEChMJQW50aHJvcGljMSQwIgYDVQQDExtBbnRocm9waWMgQXBwcyBT
aWduaW5nIFJvb3QwHhcNMjYwOTAyMjMzNDMwWhcNNDEwODI5MjMzNDI5WjA6MRIw
EAYDVQQKEwlBbnRocm9waWMxJDAiBgNVBAMTG0FudGhyb3BpYyBBcHBzIFNpZ25p
bmcgUm9vdDBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABAsUtD9z65VTC61W8M40
B+bGEhcvb+8mLm/9aTh39H4lwLH0agHzBBqkt4dvqqGzo1J2pJN7L7UoX9nEEVbO
7rmjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEBMB0GA1Ud
DgQWBBQW+2L0kdDEOi+A6fBK5jpwNdtoCzAfBgNVHSMEGDAWgBQW+2L0kdDEOi+A
6fBK5jpwNdtoCzAKBggqhkjOPQQDAgNJADBGAiEA+vhhLCvaUT2ccO0ND0YZaUy0
e+zhUoJOBhE9hXPs+SkCIQCHdbMcFo/ZQEq/rVnaS8qv/BZvRfYoEm318TY0WBU4
XA==
-----END CERTIFICATE-----`,
            marker: "urn:anthropic:claude-code:signed-cache:production"
        }
    ],
    end: "-----SIGNED-CACHE-ROOTS-END-----"
};
const Vt_roots = Vt.roots;
const lt = {
    marker: "urn:anthropic:claude-code:signed-cache:production",
    issuingCommonName: "Claude Code Signed Cache Issuing CA"
};
let ae;
const ut = Object.freeze(Vt_roots.map((e)=>Object.freeze({
        ...e,
        issuingCommonName: ae !== undefined && e.marker === ae.marker ? ae.issuingCommonName : lt.issuingCommonName
    })));
function Kt() {
    if (ae !== undefined && lCo() && ut.some((e)=>e.marker === ae.marker)) {
        return ae.marker;
    }
    return lt.marker;
}
function jt(e, n) {
    return Object.freeze(e.filter((r)=>r.marker === n));
}
function ht() {
    return jt(ut, Kt());
}
async function pt({ kind, cachePath, bodySha, orgUuid, accountUuid, workspaceUuid }) {
    try {
        let p = {
            typ: kind,
            aud: orgUuid,
            sub: accountUuid,
            ws: workspaceUuid
        };
        let [y, highWaterIat] = await Promise.all([
            Wbs(cachePath),
            zbs(cachePath, p)
        ]);
        let nowMs = Date.now();
        let w = performance.now();
        let A = jbs({
            jws: y?.jws,
            kind,
            orgUuid,
            accountUuid,
            workspaceUuid,
            bodySha,
            highWaterIat,
            nowMs,
            roots: ht()
        });
        let verify_micros = Math.round((performance.now() - w) * 1000);
        if (A.result === "valid") {
            await Gbs(cachePath, p, Math.min(A.issuedAt, Math.floor(nowMs / 1000)));
        }
        i("tengu_signed_cache_shadow", {
            cache: d(kind),
            result: d(A.result),
            age_s: A.ageSeconds,
            cert_hours_left: A.certHoursLeft,
            verify_micros,
            has_org_uuid: orgUuid !== undefined,
            has_account_uuid: accountUuid !== undefined,
            has_workspace_uuid: workspaceUuid !== undefined,
            ws_unanchored: A.wsUnanchored === true,
            absence: A.absence === true,
            states_lifetime: A.statesLifetime === true
        });
    } catch (error) {
        t(`Signed cache: shadow check failed (${kind}) - ${l(error)}`);
    }
}
function gbr({ kind, cachePath, bodySha, readStoredAccount }) {
    try {
        let s = readStoredAccount();
        pt({
            kind,
            cachePath,
            bodySha,
            orgUuid: s?.organizationUuid || undefined,
            accountUuid: s?.accountUuid || undefined,
            workspaceUuid: s?.workspaceUuid || undefined
        }).catch(()=>{});
    } catch  {}
}
const Yt = [
    [
        "text/html",
        "html"
    ],
    [
        "application/json",
        "json"
    ],
    [
        "text/json",
        "json"
    ],
    [
        "text/",
        "text"
    ]
];
function xe(e) {
    let n = e.toLowerCase();
    return Yt.find(([r])=>n.includes(r))?.[1] ?? "other";
}
function Ge(e) {
    if (!e || typeof e !== "object") {
        return false;
    }
    return aoe(e["request-id"]);
}
function M$n(e) {
    if (!e || typeof e !== "object") {
        return {};
    }
    let n = e;
    return {
        requestIdPresent: Ge(n),
        responseContentType: xe(String(n["content-type"] ?? ""))
    };
}
function H$n(e) {
    let n = e?.response;
    if (!n || typeof n !== "object") {
        return {};
    }
    return M$n(n.headers);
}
const Qt = {
    "Cache-Control": "no-cache",
    Pragma: "no-cache"
};
function ft(e) {
    return `${e}${cSe}`;
}
async function Ne(e) {
    let n = await At.get(e.endpoint, {
        headers: {
            "User-Agent": Ko(),
            ...Qt,
            ...e.ifNoneMatch !== undefined && {
                "If-None-Match": `"${e.ifNoneMatch}"`
            },
            ...e.authHeaders
        },
        timeout: e.timeoutMs,
        validateStatus: e.acceptAny2xx ? (p)=>p >= 200 && p < 300 || p === 304 : (p)=>p === 200 || p === 304,
        ...e.socketPath !== undefined && {
            socketPath: e.socketPath
        },
        ...e.signal !== undefined && {
            signal: e.signal
        }
    });
    let r = n.headers ?? {};
    let signature = iPt(r);
    let s = r[fIt];
    let tunnelCredentialEpoch = kwr(typeof s === "string" ? s : undefined);
    if (n.status === 304) {
        return {
            kind: "not_modified",
            signature,
            tunnelCredentialEpoch
        };
    }
    return {
        kind: "ok",
        data: n.data,
        signature,
        contentType: String(r["content-type"] ?? "").toLowerCase(),
        requestIdPresent: Ge(r),
        tunnelCredentialEpoch
    };
}
function mt(error) {
    if (!At.isAxiosError(error)) {
        return;
    }
    let n = error.response?.headers?.[fIt];
    return kwr(typeof n === "string" ? n : undefined);
}
const $t = new Set([
    "oauth_not_allowed_for_organization",
    "organization_disabled",
    "organization_on_hold",
    "claude_code_key_creator_not_member",
    "ip_not_in_allowed_range"
]);
const qt = new Set([
    "org_access_revoked",
    "workspace_revoked",
    "application_deactivated"
]);
const zt = new Set([
    "token_expired",
    "token_revoked",
    "token_invalid",
    "credential_invalid"
]);
const Jt = new Set([
    "restricted_regime_endpoint",
    "oauth_scope_insufficient"
]);
const Xt = new Set([
    "known_dead_refresh_token",
    "no_refresh_token",
    "account_on_hold",
    "not_refreshable"
]);
const yt = new Set([
    "lock_timeout",
    "lock_busy",
    "lock_compromised",
    "lock_error",
    "refresh_failed"
]);
const Zt = new Set([
    "refreshed",
    "not_needed"
]);
function hbr(e) {
    let { errorCode, httpStatus, serverErrorType, serverErrorCode, serverAuthDenial, authUnavailableReason, authType, credentialOrigin } = e;
    let C = authType === undefined || authType === "oauth";
    let w = C ? e.tokenRefreshOutcome : undefined;
    let A = C ? e.forcedRefreshOutcome ?? e.tokenRefreshOutcome : undefined;
    if (errorCode === undefined) {
        return "unknown";
    }
    if (serverErrorCode !== undefined && $t.has(serverErrorCode) || serverAuthDenial !== undefined && qt.has(serverAuthDenial)) {
        return "dead";
    }
    if (serverErrorCode !== undefined && Jt.has(serverErrorCode)) {
        return "live";
    }
    if (errorCode === "network_error" || errorCode === "timeout" || errorCode === "parse_failed" || errorCode === "spurious_304" || errorCode === "stale_tunnel_credential" || errorCode === "request_failed" && httpStatus === undefined && e.noResponse === true) {
        return "live";
    }
    if (httpStatus === undefined) {
        if (authUnavailableReason === "no_oauth_token") {
            if (w !== undefined && yt.has(w)) {
                return "unknown";
            }
            return "dead";
        }
        return "unknown";
    }
    if (httpStatus >= 500 || httpStatus === 429 || serverErrorType === "rate_limit_error") {
        return "live";
    }
    if (httpStatus === 404 || httpStatus === 304) {
        return "live";
    }
    if (httpStatus === 401) {
        if (credentialOrigin === "proxy") {
            return "unknown";
        }
        if (authType === "api_key") {
            if (credentialOrigin === "helper_key") {
                return "unknown";
            }
            return "dead";
        }
        let E = serverErrorType === "authentication_error" || serverAuthDenial !== undefined && zt.has(serverAuthDenial);
        if (credentialOrigin === "injected_token" && E) {
            switch(e.injectedTokenRecovery){
                case "none":
                    return "dead";
                case "sdk_host_refresh":
                case "runner_rotation":
                    return "live";
                case undefined:
                    break;
            }
        }
        if (A === undefined) {
            return "unknown";
        }
        if (Xt.has(A)) {
            return "dead";
        }
        if (credentialOrigin === "injected_token") {
            return "unknown";
        }
        if (yt.has(A) || Zt.has(A)) {
            return "live";
        }
        return "unknown";
    }
    return "unknown";
}
const ei = new Set(nSs);
function ii(e) {
    return ei.has(e);
}
const ni = new Set([
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "CERT_HAS_EXPIRED",
    "CERT_NOT_YET_VALID",
    "CERT_UNTRUSTED",
    "CERT_REJECTED",
    "CERT_SIGNATURE_FAILURE",
    "ERR_TLS_CERT_ALTNAME_INVALID",
    "HOSTNAME_MISMATCH"
]);
const ri = new Set([
    "ECONNABORTED",
    "ERR_CANCELED"
]);
function _t(e) {
    if (e === undefined) {
        return;
    }
    if (ii(e)) {
        return e;
    }
    if (ni.has(e)) {
        return "CERT_ERROR";
    }
    if (ri.has(e)) {
        return "ABORTED";
    }
}
function Mat(e) {
    let n = e !== null && typeof e === "object" && "cause" in e ? e.cause : undefined;
    return _t(v(e)) ?? _t(v(n)) ?? "OTHER";
}
const oi = new q(()=>Oe());
function vt() {
    return oi.of(B().host);
}
function ybr() {
    vt().emit();
}
function Ct(e) {
    return vt().subscribe(e);
}
let stillWanted = ()=>a.CLAUDE_CODE_MANAGED_CONFIG_PREFETCH === true;
function Tfo(e) {
    stillWanted = e;
}
const timeoutMs_1 = 10000;
const Izs = timeoutMs_1 + 2000;
const Lt = 5;
const li = new Set([
    ...aZt
].filter((e)=>e !== "lock_error"));
const ui = 3600000;
const Et = [
    15000,
    15000,
    30000,
    60000,
    180000,
    600000
];
const Rt = 0.2;
function Ue() {
    return k("tengu_shimmying_stardust", false);
}
const Ubs = 60000;
function hi(e) {
    if (e === "load") {
        return "other";
    }
    return e;
}
function kt(e) {
    return e === "accelerated_retry" || e === "api_success_trigger";
}
const pi = 30000;
const oPt = 5000;
const bNs = 86400000;
function Pt() {
    if (Obr()) {
        return;
    }
    let e = tmo();
    if (e !== null) {
        return Math.max(0, Date.now() - e);
    }
    try {
        return Math.max(0, Date.now() - statSync($k()).mtimeMs);
    } catch  {
        return;
    }
}
const He = Date.now();
function Tt(e) {
    let n = ZD();
    if (!n) {
        return e;
    }
    Vfo(e.compliance_taints);
    let compliance_taints = D([
        ...n.compliance_taints,
        ...e.compliance_taints.filter((o)=>!GCs(o))
    ]).slice(0, Nat);
    if (compliance_taints.length === n.compliance_taints.length) {
        return n;
    }
    return {
        ...n,
        compliance_taints
    };
}
function Qe() {
    return ft(KM() ? "http://localhost" : dn().BASE_API_URL);
}
function he() {
    if (KM()) {
        return "local machine (via claude ssh tunnel)";
    }
    try {
        return new URL(dn().BASE_API_URL).host;
    } catch  {
        return "unknown host";
    }
}
function te(e) {
    return FSe(pPt(e));
}
function jCe() {
    return Jh() && cPt() === null;
}
function fi() {
    if (KM()) {
        return {
            authType: a.CLAUDE_CODE_OAUTH_TOKEN ? "oauth" : "api_key",
            apiKeyFromHelper: false
        };
    }
    let e = null;
    let n = "none";
    try {
        let s = FE({
            skipRetrievingKeyFromApiKeyHelper: true
        });
        e = s.key;
        n = s.source;
    } catch  {}
    let apiKeyFromHelper = n === "apiKeyHelper";
    let o = Boolean(e) || apiKeyFromHelper;
    if (!o && _d()) {
        return {
            authType: "wif",
            apiKeyFromHelper: false
        };
    }
    if (wt() && bn()?.accessToken) {
        return {
            authType: "oauth",
            apiKeyFromHelper: false
        };
    }
    if (o) {
        return {
            authType: "api_key",
            apiKeyFromHelper
        };
    }
    return {
        authType: "oauth",
        apiKeyFromHelper: false
    };
}
function mi(e, n) {
    if (KM()) {
        return "proxy";
    }
    switch(e.authType){
        case "api_key":
            if (e.apiKeyFromHelper) {
                return "helper_key";
            }
            return "static_key";
        case "oauth":
            if (n.sentStoredLogin === undefined) {
                return undefined;
            }
            if (n.sentStoredLogin) {
                return "stored_login";
            }
            return "injected_token";
        case "wif":
            return;
    }
}
function bt() {
    if (KM()) {
        if (a.CLAUDE_CODE_OAUTH_TOKEN) {
            return "CLAUDE_CODE_OAUTH_TOKEN";
        }
        return "none";
    }
    return vl().source;
}
function yi() {
    if (KM()) {
        return {
            proxy_in_use: false,
            proxy_is_loopback: false
        };
    }
    let e;
    let n = false;
    try {
        e = cf();
        n = e !== undefined && ly(Qe());
    } catch  {
        return {
            proxy_in_use: false,
            proxy_is_loopback: false
        };
    }
    if (e === undefined || n) {
        return {
            proxy_in_use: false,
            proxy_is_loopback: false
        };
    }
    let r = Wz(e);
    return {
        proxy_in_use: true,
        proxy_is_loopback: r !== undefined && Xk(r.hostname)
    };
}
async function gi(e, credentials, storageV5, signal, s, oauthRefreshLatch, p = Lt, { hedge = false, prefetched } = {}) {
    let C = null;
    let w = (E, L = false)=>Mt(e, credentials, storageV5, oauthRefreshLatch, E, L);
    let A = false;
    for(let E = 1; E <= p + 1; E++){
        let first = prefetched ?? sQt(w);
        prefetched = undefined;
        if (hedge && E === 1) {
            let x = await mbr({
                first,
                send: (T)=>w(T, true),
                isAnswer: (T, R)=>T.success || T.skipRetry === true && !(R && T.errorCode === "auth_failed" && T.httpStatus === 401),
                stillWanted,
                retryFollows: p > 0
            });
            C = x.result;
            A ||= x.hedged;
        } else {
            C = await first.attempt;
        }
        C.attempts = E;
        if (A) {
            C.hedged = true;
        }
        if (C.success || C.skipRetry || E > p) {
            return C;
        }
        s(C);
        let I = MF(E);
        t(`Policy limits: Retry ${E}/${p} after ${I}ms`);
        await Q(I, signal);
        if (signal?.aborted) {
            return C;
        }
    }
    return C;
}
async function Mt(etag, credentials, storageV5, oauthRefreshLatch, signal, h = false) {
    let tokenRefreshOutcome;
    let y;
    let sentStoredLogin = false;
    let C = 0;
    let w = GIt(oauthRefreshLatch.recoveries);
    let socketPath = KM();
    let principalKeyAtWire = null;
    let askedKeyAtWire = null;
    let principalMovedAtWire = false;
    let sentEnvBearerDigest = null;
    try {
        let T = Qe();
        let R = {};
        let P = async ()=>{
            await Dbr(storageV5, credentials);
            let M = Ke();
            let N = await hF(_Zt() ? {} : {
                envBearerFallbackFor: T
            });
            let X = ZS();
            sentEnvBearerDigest = X !== undefined && N.headers.Authorization === `Bearer ${X}` ? Rde(X) : null;
            if (N.error) {
                principalMovedAtWire = true;
                principalKeyAtWire = null;
                askedKeyAtWire = null;
                return N;
            }
            Xfo();
            let re = dY();
            let u = re === null ? null : ee(re);
            principalMovedAtWire = M !== u;
            principalKeyAtWire = principalMovedAtWire ? null : u;
            askedKeyAtWire = principalKeyAtWire !== null && fe(re) ? Pe(re) : null;
            return N;
        };
        if (!socketPath) {
            tokenRefreshOutcome = await joe({
                credentials
            });
            let M = await P();
            if (M.error) {
                return {
                    success: false,
                    error: "Authentication required for policy limits",
                    errorCode: "auth_failed",
                    authUnavailableReason: M.reasonCode,
                    tokenRefreshOutcome,
                    skipRetry: true
                };
            }
            R = M.headers;
            let N = bn();
            sentStoredLogin = Boolean(N?.accessToken && N.refreshToken && R.Authorization === `Bearer ${N.accessToken}`);
        }
        let ne = async ()=>{
            C++;
            if (C > 1) {
                w = GIt(oauthRefreshLatch.recoveries);
            }
            let authHeaders = C === 1 || socketPath ? R : (await P()).headers;
            return Ne({
                endpoint: T,
                authHeaders,
                ifNoneMatch: etag || undefined,
                timeoutMs: timeoutMs_1,
                socketPath,
                signal
            });
        };
        let O = socketPath ? await ne() : await Ib(ne, {
            credentials,
            gateToSessionOAuthCredential: true,
            oauthRefreshLatch,
            signal,
            onForcedRefreshOutcome: (outcome)=>{
                y = {
                    outcome
                };
                oauthRefreshLatch.lastOutcome = outcome;
            }
        });
        if (O.kind === "not_modified") {
            if (!etag) {
                t("Policy limits: 304 to an unconditional request");
                return {
                    success: false,
                    error: "Unexpected 304 Not Modified",
                    errorCode: "request_failed",
                    httpStatus: 304,
                    skipRetry: true,
                    principalKeyAtWire,
                    askedKeyAtWire,
                    principalMovedAtWire,
                    retriedAfter401: C > 1
                };
            }
            if (C === 1 && !h) {
                VIt(oauthRefreshLatch, w);
            }
            t("Policy limits: Using cached restrictions (304)");
            return {
                success: true,
                response: null,
                etag,
                signature: O.signature,
                principalKeyAtWire,
                askedKeyAtWire,
                principalMovedAtWire,
                retriedAfter401: C > 1,
                ...sentEnvBearerDigest !== null && C === 1 && {
                    sentEnvBearerDigest
                },
                ...O.tunnelCredentialEpoch !== undefined && {
                    tunnelCredentialEpoch: O.tunnelCredentialEpoch
                }
            };
        }
        let V = _Qt(O.data);
        if (!V.success) {
            let parseErrorField = _i(V.error.issues[0]?.path[0]);
            let N = xe(O.contentType);
            t(`Policy limits: Invalid response format - field=${parseErrorField} ct=${N} - ${V.error.message}`);
            return {
                success: false,
                error: "Invalid policy limits format",
                errorCode: "parse_failed",
                parseErrorField,
                parseErrorContentType: N,
                responseContentType: N,
                requestIdPresent: O.requestIdPresent,
                skipRetry: Ue(),
                principalKeyAtWire,
                askedKeyAtWire,
                principalMovedAtWire,
                retriedAfter401: C > 1
            };
        }
        VIt(oauthRefreshLatch, w);
        let Y = Sbr(O.data);
        if (Y > 0) {
            t(`Policy limits: Fetched with ${Y} malformed compliance_taints element(s) dropped`);
            return {
                success: true,
                response: V.data,
                parseErrorField: "compliance_taints",
                lossyComplianceTaints: true,
                signature: O.signature,
                principalKeyAtWire,
                askedKeyAtWire,
                principalMovedAtWire,
                retriedAfter401: C > 1,
                ...sentEnvBearerDigest !== null && {
                    sentEnvBearerDigest
                },
                ...O.tunnelCredentialEpoch !== undefined && {
                    tunnelCredentialEpoch: O.tunnelCredentialEpoch
                }
            };
        }
        t("Policy limits: Fetched successfully");
        return {
            success: true,
            response: V.data,
            signature: O.signature,
            principalKeyAtWire,
            askedKeyAtWire,
            principalMovedAtWire,
            retriedAfter401: C > 1,
            ...sentEnvBearerDigest !== null && {
                sentEnvBearerDigest
            },
            ...O.tunnelCredentialEpoch !== undefined && {
                tunnelCredentialEpoch: O.tunnelCredentialEpoch
            }
        };
    } catch (error) {
        let { kind, status, message } = ti(error);
        let O = {
            ...rQt(error),
            ...H$n(error)
        };
        let forcedRefreshOutcome = y !== undefined ? y.outcome : sentStoredLogin && oauthRefreshLatch.attempted ? oauthRefreshLatch.lastOutcome : undefined;
        let tunnelCredentialEpoch = mt(error);
        let M = {
            ...C > 0 && {
                principalKeyAtWire,
                askedKeyAtWire,
                principalMovedAtWire
            },
            ...tunnelCredentialEpoch !== undefined && {
                tunnelCredentialEpoch
            }
        };
        t(`Policy limits: fetch failed (${kind}${status ? ` ${status}` : ""}) from ${he()} \u2014 ${message}`);
        switch(kind){
            case "auth":
                return {
                    success: false,
                    error: "Not authorized for policy limits",
                    errorCode: "auth_failed",
                    httpStatus: status,
                    tokenRefreshOutcome,
                    skipRetry: !(status === 401 && sentStoredLogin && tokenRefreshOutcome !== undefined && li.has(tokenRefreshOutcome) && (y === undefined || y.outcome !== undefined && aZt.has(y.outcome))),
                    retriedAfter401: C > 1,
                    forcedRefreshOutcome,
                    sentStoredLogin,
                    ...O,
                    ...M
                };
            case "timeout":
                return {
                    success: false,
                    error: "Policy limits request timeout",
                    errorCode: "timeout",
                    errno: Mat(error),
                    retriedAfter401: C > 1,
                    ...M
                };
            case "network":
                return {
                    success: false,
                    error: "Cannot connect to server",
                    errorCode: "network_error",
                    errno: Mat(error),
                    retriedAfter401: C > 1,
                    ...M
                };
            default:
                return {
                    success: false,
                    error: message,
                    errorCode: "request_failed",
                    httpStatus: status,
                    skipRetry: s9e(status),
                    retriedAfter401: C > 1,
                    forcedRefreshOutcome,
                    ...kind === "http" && status === undefined && {
                        noResponse: true,
                        errno: Mat(error)
                    },
                    ...O,
                    ...M
                };
        }
    }
}
async function Afo(e, { timeoutMs = timeoutMs_1 } = {}) {
    if (Ie() !== "firstParty" || !af()) {
        return null;
    }
    try {
        let r = await Ne({
            endpoint: Qe(),
            authHeaders: {
                Authorization: `Bearer ${e}`,
                "anthropic-beta": pp
            },
            timeoutMs,
            acceptAny2xx: true
        });
        if (r.kind === "not_modified") {
            t("Policy limits (bearer read): 304 to an unconditional request");
            return null;
        }
        let o = _Qt(r.data);
        if (!o.success) {
            t(`Policy limits (bearer read): invalid response format \u2014 ${o.error.message}`);
            return null;
        }
        return o.data;
    } catch (error) {
        let { kind, status, message } = ti(error);
        t(`Policy limits (bearer read): fetch failed (${kind}${status ? ` ${status}` : ""}) \u2014 ${message}`);
        return null;
    }
}
function _i(e) {
    if (e === undefined) {
        return "root";
    }
    if (e === "restrictions" || e === "compliance_taints" || e === "defaults") {
        return e;
    }
    return "other";
}
function We() {
    return {
        has_custom_base_url: Ktn(),
        via_unix_socket: KM() !== undefined,
        has_unix_socket: a.ANTHROPIC_UNIX_SOCKET !== undefined,
        has_auth_token: Boolean(ZS()),
        has_api_key_helper: Boolean(um()),
        api_key_prefix: d(J7t())
    };
}
const vi = [
    "EACCES",
    "EPERM",
    "EROFS",
    "ENOSPC",
    "EDQUOT",
    "ENOENT",
    "ENOTDIR",
    "EISDIR",
    "EMFILE",
    "ENFILE",
    "EBUSY"
];
function Ot(e) {
    if (e !== undefined && vi.includes(e)) {
        return e;
    }
    return "other";
}
function Re(error) {
    return Ot(v(error));
}
function Ci(error) {
    let n = "telemetryCode" in error ? error.telemetryCode : undefined;
    return Ot(n === "UnexpectedAbsent" || n === ZCo ? "ENOENT" : n);
}
function ke() {
    return $e.state("policy-limits");
}
const Ve = 1048576;
async function Cfo(e) {
    if (!j() || e === undefined || !Jh() || zCe()) {
        return;
    }
    try {
        let n = Cbr();
        let r = await e.read([
            {
                key: ke(),
                offset: 0,
                length: Ve + 1
            }
        ]);
        if (!r.ok) {
            t(`Policy limits: prime read failed: ${r.error.code}; raw cache read stays`);
            return;
        }
        let o = r.value.items[0];
        if (!o.found) {
            Ubr(e, null);
            return;
        }
        if (o.totalBytes > Ve) {
            t("Policy limits: prime skipped (oversize cache); raw cache read stays");
            return;
        }
        let s = Y$n(Buffer.from(o.value).toString("utf-8"));
        Ubr(e, s === null ? null : Hbr(s, Rbr(n)));
    } catch (error) {
        t(`Policy limits: prime failed: ${l(error)}`);
    }
}
class Rfo {
    storageV5;
    credentials;
    used = false;
    constructor(e = {}){
        this.storageV5 = e.storageV5;
        this.credentials = e.credentials;
    }
    adoptStartupServices(e) {
        if (e.storageV5 === undefined && e.credentials === undefined) {
            return "nothing to adopt";
        }
        if (this.storageV5 !== undefined || this.credentials !== undefined) {
            return "already composed";
        }
        if (this.used) {
            return "already used";
        }
        this.storageV5 = e.storageV5;
        this.credentials = e.credentials;
        return "adopted";
    }
    oauthRefreshLatch = {
        attempted: false,
        recoveries: {
            begun: 0,
            running: 0
        }
    };
    prefetchSlot = new O$n;
    renewOAuthRefreshLatch() {
        this.oauthRefreshLatch = {
            attempted: false,
            lastOutcome: this.oauthRefreshLatch.lastOutcome,
            recoveries: {
                begun: 0,
                running: 0
            }
        };
    }
    prefetch() {
        if (!Jh()) {
            return;
        }
        let principalKey = Ke();
        if (principalKey === null) {
            return;
        }
        let n = V$n() ? null : cPt();
        let r = n === r$e ? null : n;
        let checksum = r ? te(r) : undefined;
        let { credentials, storageV5, oauthRefreshLatch } = this;
        this.prefetchSlot.set({
            checksum,
            generation: this.sessionGeneration,
            diskEpoch: TYe(),
            endpointHost: he(),
            storageV5,
            credentials,
            principalKey
        }, (y)=>Mt(checksum, credentials, storageV5, oauthRefreshLatch, y), (y)=>y.success || y.httpStatus === 404);
    }
    poller = null;
    cleanupRegistered = false;
    loadingCompletePromise = null;
    loadingCompleteResolve = null;
    loadingTimeoutId = null;
    abortController = new AbortController;
    firstPromptStateLogged = false;
    cacheWriteFailureLogged = false;
    sessionGeneration = 0;
    serverConfirmedGeneration = -1;
    verdictPrincipalIdentity = null;
    verdictKey = null;
    verdictPrincipalKind = null;
    askedKey = null;
    cyclesInFlight = 0;
    unsettledCycles = new Set;
    principalCheckOwed = false;
    unclassifiedRecheckTimer = null;
    stopCredentialWatch = null;
    stopTunnelEpochWatch = null;
    tunnelEpochSeen = undefined;
    tunnelVerdictEpoch = undefined;
    tunnelRepolledForEpoch = undefined;
    principalCheckQueued = false;
    signedCacheShadowChecked = false;
    cacheClearEpoch = 0;
    verdictlessRetry = null;
    verdictlessRetryStep = 0;
    stopNetworkWatch = null;
    verdictlessEpisode = null;
    startupLoadState = "not_started";
    startupLoadClaimed = false;
    prefetchAdmittedGeneration = -1;
    startupLoadErrorCode;
    startupLoadCredentialState;
    startupLoadOutcomeReason;
    startupLoadHttpStatus;
    startupLoadServerErrorType;
    startupAwaitResult = "not_awaited";
    gateSnapshotThisRun;
    coldStartFirstWaitAtMs = undefined;
    coldStartWaitedMs = 0;
    recordStartupAwaitResult(e) {
        this.startupAwaitResult = e;
    }
    get coldStartTimedOut() {
        return this.startupAwaitResult === "timed_out";
    }
    async awaitColdStartVerdict() {
        let e = performance.now();
        this.coldStartFirstWaitAtMs ??= e;
        let n = Math.max(0, Math.round(this.coldStartFirstWaitAtMs + oPt - e));
        let r;
        try {
            await Ut(this.waitForLoad(), n, "policy_limits_cold_await");
            r = "completed";
        } catch  {
            r = "timed_out";
        }
        this.coldStartWaitedMs += performance.now() - e;
        if (this.startupAwaitResult !== "timed_out") {
            this.recordStartupAwaitResult(r);
        }
        return r;
    }
    get coldStartVerdictWait() {
        if (this.coldStartFirstWaitAtMs === undefined) {
            return null;
        }
        return {
            waitedMs: this.coldStartWaitedMs,
            firstAtMs: this.coldStartFirstWaitAtMs
        };
    }
    async admitPrefetched(e) {
        let n = (refused)=>{
            t(`Policy limits: host prefetch not admitted (${refused})`);
            return {
                admitted: false,
                refused
            };
        };
        try {
            if (!Jh()) {
                return n("ineligible");
            }
            if (this.startupLoadClaimed || this.cyclesInFlight > 0 || this.serverConfirmedGeneration === this.sessionGeneration) {
                return n("already_loading");
            }
            if (this.prefetchAdmittedGeneration === this.sessionGeneration) {
                return n("already_admitted");
            }
            let r = dY();
            if (r === null || r.kind !== "org" || r.unclassified === true || r.descriptor !== `org:${e.orgUuid.toLowerCase()}` || r.bearerDigest === undefined || r.bearerDigest !== e.bearerDigest) {
                return n("principal_mismatch");
            }
            let o = he();
            if (e.endpointHost !== o) {
                return n("endpoint_mismatch");
            }
            let s = Date.now() - e.fetchedAtMs;
            if (!Number.isFinite(e.fetchedAtMs) || s < -Ubs || s > Ubs) {
                return n("stale");
            }
            let h = _Qt(e.data);
            if (!h.success) {
                return n("unparseable");
            }
            if (Sbr(e.data) > 0) {
                return n("lossy_taints");
            }
            let p = h.data;
            let y = this.sessionGeneration;
            let hadCache = ZD() !== null;
            this.used = true;
            this.prefetchAdmittedGeneration = y;
            Me(()=>this.managedConfigPolicyGateFields());
            W$n(p);
            this.recordVerdictPrincipal(r);
            let C = TYe();
            let w = await this.saveCachedResponse(p, y, Lfo(e.signature), r, "prior_evidence");
            if (this.sessionGeneration !== y) {
                q5("policy", {
                    source: "superseded",
                    hadCache,
                    awaited: false
                });
                if (w !== "stale" && w !== "skipped") {
                    await this.deleteCacheFile();
                    hQt();
                }
                this.dropUnconfirmedSessionCache();
                return n("superseded");
            }
            q5("policy", {
                source: "cache",
                hadCache,
                awaited: false
            });
            if (w === "saved" && TYe() === C) {
                G$n();
            }
            t(`Policy limits: admitted the host's prefetch as this session's prior-evidence verdict (${Object.keys(p.restrictions).length} restriction(s), ${p.compliance_taints?.length ?? 0} taint(s), persisted=${w})`);
            return {
                admitted: true
            };
        } catch (error) {
            c(error);
            return n("error");
        }
    }
    ensureLoadRequested(e) {
        let n = this.startupLoadClaimed && this.startupLoadState === "not_started" && !this.loadingCompletePromise && Jh();
        if (this.startupLoadClaimed && !n) {
            return false;
        }
        this.initializeLoadingPromise();
        this.load(e).catch((r)=>c(r));
        return true;
    }
    stop() {
        this.sessionGeneration++;
        this.prefetchSlot.clear();
        this.verdictPrincipalIdentity = null;
        this.verdictPrincipalKind = null;
        this.verdictKey = null;
        this.askedKey = null;
        this.cyclesInFlight = 0;
        this.principalCheckOwed = false;
        if (this.unclassifiedRecheckTimer !== null) {
            clearTimeout(this.unclassifiedRecheckTimer);
            this.unclassifiedRecheckTimer = null;
        }
        this.stopCredentialWatch?.();
        this.stopCredentialWatch = null;
        this.stopTunnelEpochWatch?.();
        this.stopTunnelEpochWatch = null;
        this.renewOAuthRefreshLatch();
        hQt();
        uPt();
        this.stopBackgroundPolling();
        this.abortController.abort();
        this.abortController = new AbortController;
        gQt(null);
        Pbr(null);
        qfo();
        this.releaseLoadingPromise();
    }
    releaseLoadingPromise() {
        this.loadingCompleteResolve?.();
        this.loadingCompletePromise = null;
        this.loadingCompleteResolve = null;
        if (this.loadingTimeoutId !== null) {
            clearTimeout(this.loadingTimeoutId);
            this.loadingTimeoutId = null;
        }
    }
    initializeLoadingPromise() {
        if (this.loadingCompletePromise) {
            return;
        }
        if (Jh()) {
            this.loadingCompletePromise = new Promise((resolve)=>{
                this.loadingCompleteResolve = resolve;
                this.loadingTimeoutId = setTimeout((n)=>{
                    if (this.loadingCompleteResolve === n) {
                        t("Policy limits: Loading promise timed out, resolving anyway");
                        this.loadingCompleteResolve();
                        this.loadingCompleteResolve = null;
                    }
                }, pi, resolve);
            });
        }
    }
    async waitForLoad() {
        if (this.loadingCompletePromise) {
            await this.loadingCompletePromise;
        }
    }
    async saveCachedResponse(e, n, r, o, s) {
        if (this.sessionGeneration !== n) {
            t("Policy limits: skipped saving a fetch that outlived the account session");
            return "stale";
        }
        if (zCe()) {
            return "skipped";
        }
        if (o === null) {
            t("Policy limits: no attributable principal for this credential; the verdict is used for the session and not persisted");
            return "skipped";
        }
        let h;
        try {
            h = await this.writeStampForSave(e, o, s);
        } catch (error) {
            this.recordCacheWriteFailure(error instanceof Error ? error.message : "unknown error", Re(error));
            return "failed";
        }
        if (h === null) {
            return "failed";
        }
        let p = te(e);
        if (j() && this.storageV5 !== undefined) {
            let y;
            let S;
            try {
                let C = await this.storageV5.write(ke(), _(pPt(e), null, 2), {
                    publishDiscipline: "inPlace",
                    mode: 384
                });
                if (C.ok) {
                    t(`Policy limits: Saved to ${$k()}`);
                    await e$e($k(), r);
                    return await this.sealSavedBody(h, p);
                }
                y = gt(C.error);
                S = Ci(C.error);
            } catch (error) {
                y = l(error);
                S = Re(error);
            }
            uPt();
            this.recordCacheWriteFailure(y, S);
            return "failed";
        }
        try {
            let y = $k();
            await writeFile(y, _(pPt(e), null, 2), {
                encoding: "utf-8",
                mode: 384
            });
            t(`Policy limits: Saved to ${y}`);
            await e$e(y, r);
        } catch (error) {
            uPt();
            this.recordCacheWriteFailure(error instanceof Error ? error.message : "unknown error", Re(error));
            return "failed";
        }
        return this.sealSavedBody(h, p);
    }
    async sealSavedBody(e, n) {
        try {
            await e.rewrite();
        } catch (error) {
            let o = await kYe($k());
            CYe(o);
            if (o.kind !== "ok" || o.stamp.identity !== e.identity || o.stamp.sha !== n) {
                if (o.kind !== "ok") {
                    let s = await this.readDiskBody();
                    if ((s.kind === "unreadable" || s.kind === "body" && s.checksum === n) && !await this.removeBodyLeavingStamp()) {
                        let p = await kYe($k());
                        CYe(p);
                        if (p.kind !== "ok") {
                            await e.vouch();
                        }
                    }
                }
                this.recordCacheWriteFailure(error instanceof Error ? error.message : "unknown error", Re(error));
                return "failed";
            }
        }
        $br(n, e.evidence, e.confirmedAt);
        return "saved";
    }
    async readDiskBody() {
        let e = false;
        let n;
        try {
            n = await Vk(ie(), $k(), Ve, (o)=>{
                e = o.isFile();
            });
        } catch (error) {
            return {
                kind: z(error) ? "none" : "unreadable"
            };
        }
        if (e) {
            return {
                kind: "unreadable"
            };
        }
        let r = n === null ? null : Y$n(n);
        if (r === null) {
            return {
                kind: "none"
            };
        }
        return {
            kind: "body",
            checksum: te(r)
        };
    }
    async removeBodyLeavingStamp() {
        uPt();
        await cQt($k());
        if (j() && this.storageV5 !== undefined) {
            try {
                await this.storageV5.delete(ke());
            } catch  {}
        }
        try {
            await unlink($k());
            return true;
        } catch (error) {
            return z(error);
        }
    }
    async removeUnstampedBody() {
        if (zCe()) {
            return;
        }
        let e = await kYe($k());
        CYe(e);
        if (e.kind === "absent") {
            await this.removeBodyLeavingStamp();
        }
    }
    async removeSupersededLegacyBody(e, n) {
        if (!imo(e)) {
            return;
        }
        let r = await kYe($k());
        CYe(r);
        if (r.kind !== "absent") {
            return;
        }
        let o = await this.readDiskBody();
        if (o.kind !== "body" || o.checksum !== n) {
            return;
        }
        t("Policy limits: removed an unstamped cache this credential cannot restamp after the server superseded it");
        await this.removeBodyLeavingStamp();
    }
    async writeStampForSave(e, principal, r) {
        let o = $k();
        let s = await kYe(o);
        CYe(s);
        if (j$n(s)) {
            t(`Policy limits: the cache stamp could not be read just now (${s.code}); nothing persisted this cycle`);
            return null;
        }
        let h = Wfo({
            principal,
            bodySha: te(e),
            confirmedAt: Date.now(),
            bodyTaints: e.compliance_taints,
            previous: vbr(s, K$n()),
            authority: r
        });
        await Ebr(o, h);
        return {
            identity: h.identity,
            evidence: mQt(h),
            confirmedAt: h.confirmed_at,
            rewrite: ()=>Ebr(o, h),
            vouch: async ()=>{
                await kbr(o, h);
            }
        };
    }
    async restampConfirmedCache(e, n, principal, o, s) {
        if (this.sessionGeneration !== o || principal === null || n === undefined || emo() !== n) {
            return;
        }
        let cacheClearEpoch = this.cacheClearEpoch;
        let p = await kYe($k());
        CYe(p);
        if (p.kind !== "absent" && !(p.kind === "ok" && p.stamp.sha === n)) {
            return;
        }
        let y = Wfo({
            principal,
            bodySha: n,
            confirmedAt: Date.now(),
            bodyTaints: e.compliance_taints,
            previous: vbr(p, K$n()),
            authority: s
        });
        await kbr($k(), y);
        if (this.cacheClearEpoch !== cacheClearEpoch) {
            await this.deleteCacheFile();
            return;
        }
        if (this.sessionGeneration !== o) {
            return;
        }
        $br(n, mQt(y), y.confirmed_at);
    }
    recordCacheWriteFailure(e, n) {
        t(`Policy limits: Failed to save - ${e}`);
        if (!this.cacheWriteFailureLogged) {
            this.cacheWriteFailureLogged = true;
            i("tengu_policy_limits_cache_write_failed", {
                errno: d(n)
            });
        }
    }
    async fetchAndLoad(e, n, r = false) {
        let sessionGeneration = this.sessionGeneration;
        this.cyclesInFlight++;
        let s = this.runFetchCycle(e, n, r);
        this.unsettledCycles.add(s);
        try {
            return await s;
        } finally{
            this.unsettledCycles.delete(s);
            this.endCycle(sessionGeneration);
        }
    }
    async _settleCyclesForTesting() {
        while(this.unsettledCycles.size > 0){
            await Promise.allSettled([
                ...this.unsettledCycles
            ]);
        }
    }
    endCycle(e) {
        if (this.sessionGeneration !== e) {
            return;
        }
        this.cyclesInFlight--;
        if (this.cyclesInFlight === 0 && this.principalCheckOwed) {
            this.principalCheckOwed = false;
            this.onCredentialMayHaveChanged();
        }
    }
    async runFetchCycle(e, n, awaited) {
        this.used = true;
        let o = e === "policy_limits_load" && !this.startupLoadClaimed;
        if (o) {
            this.startupLoadClaimed = true;
        }
        Me(()=>this.managedConfigPolicyGateFields());
        if (!Jh()) {
            this.prefetchSlot.clear();
            q5("policy", {
                source: "ineligible",
                hadCache: false,
                awaited
            });
            return null;
        }
        if (o) {
            this.startupLoadState = "in_flight";
        }
        let s = V$n() ? null : cPt();
        let h = s === r$e ? null : s;
        let p = TYe();
        let cache_age_ms = Pt();
        let S = dY();
        let C = S === null ? "" : Cde(S);
        let w = !kt(n);
        if (h && !ZD()) {
            aPt(h);
        }
        let A = ZD();
        if (h && A !== null && this.verdictPrincipalIdentity === null && this.serverConfirmedGeneration !== this.sessionGeneration) {
            if (fe(S) && q$n() === "match" && Qfo() === Cde(S) && te(A) === te(h)) {
                this.recordVerdictPrincipal(S);
            } else {
                this.ensureCredentialWatch();
            }
        }
        if (h) {
            q5("policy", {
                source: "cache",
                hadCache: true,
                awaited
            });
        }
        let E = h ? te(h) : undefined;
        let cacheClearEpoch = this.cacheClearEpoch;
        if (!this.signedCacheShadowChecked) {
            this.signedCacheShadowChecked = true;
            if (E !== undefined && !zCe()) {
                gbr({
                    kind: "policy-limits",
                    cachePath: $k(),
                    bodySha: E,
                    readStoredAccount
                });
            }
        }
        let I = fi();
        let I_authType = I.authType;
        let T = Date.now();
        let signal = this.abortController.signal;
        let sessionGeneration = this.sessionGeneration;
        let ne = coe();
        let O = ()=>{
            let u = coe();
            return u !== null && u.success && u !== ne;
        };
        let V = false;
        let Y = (u)=>{
            V = true;
            if (!u.success && O()) {
                return;
            }
            this.recordFetchOutcome(sessionGeneration, cacheClearEpoch, u, C, w);
        };
        let M = ()=>Y({
                success: false,
                errorCode: "request_failed",
                httpStatus: null,
                host: he(),
                retrying: false
            });
        if (e === "policy_limits_load" && this.prefetchSlot.pending) {
            let u = await fg(this.credentials);
            if (u !== "store") {
                m8();
            }
            if (oZt(u)) {
                await _6e(B().host, this.credentials);
            }
            S = dY();
        }
        let N = S === null ? null : ee(S);
        let host = he();
        let prefetched = e === "policy_limits_load" ? this.prefetchSlot.take((u)=>u.checksum === E && u.generation === sessionGeneration && u.diskEpoch === p && u.endpointHost === host && u.storageV5 === this.storageV5 && u.credentials === this.credentials && u.principalKey === N) : undefined;
        try {
            let u = await gi(E, this.credentials, this.storageV5, signal, (b)=>{
                if (coe()?.success) {
                    return;
                }
                this.recordFetchOutcome(sessionGeneration, cacheClearEpoch, {
                    success: false,
                    host,
                    httpStatus: b.httpStatus ?? null,
                    errorCode: b.errorCode ?? "request_failed",
                    retrying: true
                }, C, w);
            }, this.oauthRefreshLatch, kt(n) ? 0 : Lt, {
                hedge: awaited && stillWanted(),
                prefetched
            });
            if (this.sessionGeneration !== sessionGeneration || signal.aborted) {
                if (o && this.startupLoadState === "in_flight") {
                    this.startupLoadState = "failed";
                    this.startupLoadErrorCode = "session_changed";
                    this.startupLoadCredentialState = undefined;
                    this.startupLoadOutcomeReason = undefined;
                    this.startupLoadHttpStatus = undefined;
                    this.startupLoadServerErrorType = undefined;
                }
                q5("policy", {
                    source: "superseded",
                    hadCache: h !== null,
                    awaited
                });
                t("Policy limits: Discarding a fetch that outlived the account session");
                f(e, "cycle_aborted");
                return ZD();
            }
            let oe = dY();
            let se = oe === null ? null : ee(oe);
            let It = u.principalKeyAtWire === undefined ? se : u.principalKeyAtWire;
            let Ae = u.success && this.isStaleTunnelCredentialEpoch(u.tunnelCredentialEpoch);
            if (Ae) {
                t("Policy limits: this answer came back under an older claude ssh credential epoch than one already seen; not installing it");
            }
            let U = u.principalMovedAtWire === true || It !== se;
            if (!U && u.askedKeyAtWire !== undefined && u.askedKeyAtWire !== null) {
                this.askedKey = u.askedKeyAtWire;
            }
            if (U) {
                t("Policy limits: the credential changed principal during the fetch; this response is used for the session but not persisted or attributed");
                S = null;
            } else if (N !== se) {
                t("Policy limits: the credential changed principal before the request went out; attributing the response to the principal it authenticated as");
                S = oe;
            }
            if (TYe() !== p) {
                t("Policy limits: the disk snapshot predates an account-boundary hold; not installable");
                h = null;
            }
            let ye = u.success && u.response === null && !h;
            let success = u.success && !ye && !Ae;
            if (!success) {
                this.observeTunnelCredentialEpoch(u.tunnelCredentialEpoch, u.success ? "a stale policy answer" : "a refused policy request", false);
            }
            let errorCode = Ae ? "stale_tunnel_credential" : ye ? "spurious_304" : u.errorCode ?? "request_failed";
            let qe = success ? undefined : errorCode;
            let credentialOrigin = mi(I, u);
            let injectedTokenRecovery = credentialOrigin === "injected_token" ? zIt() : undefined;
            let de = hbr({
                errorCode,
                httpStatus: u.httpStatus,
                serverErrorType: u.serverErrorType,
                serverErrorCode: u.serverErrorCode,
                serverAuthDenial: u.serverAuthDenial,
                tokenRefreshOutcome: u.tokenRefreshOutcome,
                forcedRefreshOutcome: u.forcedRefreshOutcome,
                authUnavailableReason: u.authUnavailableReason,
                authType: I_authType,
                credentialOrigin,
                injectedTokenRecovery,
                noResponse: u.noResponse
            });
            let we = success ? undefined : de;
            let Xe = qBn(success ? {
                succeeded: true,
                responseKind: u.response === null ? "not_modified" : "body"
            } : {
                succeeded: false,
                failure: u.authUnavailableReason !== undefined ? "no_credentials" : errorCode === "timeout" ? "timeout" : errorCode === "network_error" || u.noResponse ? "network" : errorCode === "parse_failed" ? "parse" : u.httpStatus !== undefined ? "http" : "other",
                httpStatus: u.httpStatus,
                serverErrorType: u.serverErrorType,
                serverErrorCode: u.serverErrorCode,
                serverAuthDenial: u.serverAuthDenial,
                credentialState: we,
                tokenRefreshOutcome: u.tokenRefreshOutcome,
                forcedRefreshOutcome: u.forcedRefreshOutcome,
                errno: u.errno,
                responseContentType: u.responseContentType ?? u.parseErrorContentType,
                requestIdPresent: u.requestIdPresent
            });
            let ce = Date.now();
            let Ft = q$n();
            if (o) {
                this.startupLoadState = success ? "succeeded" : "failed";
                this.startupLoadErrorCode = qe;
                this.startupLoadCredentialState = we;
                this.startupLoadOutcomeReason = Xe;
                this.startupLoadHttpStatus = success ? undefined : u.httpStatus;
                this.startupLoadServerErrorType = success ? undefined : u.serverErrorType;
            }
            let ge = {
                source: success ? "fetch" : "error",
                hadCache: h !== null,
                awaited,
                fetchMs: ce - T
            };
            if (!success) {
                q5("policy", ge);
            }
            let _e;
            let verdictless_retry_scheduled = false;
            if (!u.success && (!u.skipRetry || u.errorCode === "parse_failed") && Ue()) {
                _e = this.staleFallbackSource();
                let b = n !== "api_success_trigger";
                if (_e === null) {
                    verdictless_retry_scheduled = this.armVerdictlessRetry();
                    if (b) {
                        this.armNetworkKick();
                    }
                } else if (!this.hasLiveVerdict() && b) {
                    this.armNetworkKick();
                }
            }
            let ve = success ? u.response ?? h : null;
            i("tengu_policy_limits_fetch", {
                duration_ms: ce - T,
                ms_since_startup: ce - He,
                success,
                had_cache: h !== null,
                cache_stamp: d(Ft),
                cache_age_ms,
                attempts: u.attempts,
                prefetched: prefetched !== undefined,
                hedged: u.hedged === true,
                restrictions_denied_count: ve ? F(Object.values(ve.restrictions), (b)=>!b.allowed) : undefined,
                compliance_taint_count: ve ? ve.compliance_taints?.length ?? 0 : undefined,
                is_load: e === "policy_limits_load",
                awaited,
                auth_type: d(I_authType),
                error_code: pe(qe),
                token_source: d(bt()),
                ...We(),
                auth_unavailable_reason: pe(u.authUnavailableReason),
                token_refresh_outcome: I_authType === "oauth" ? pe(u.tokenRefreshOutcome) : undefined,
                forced_refresh_outcome: I_authType === "oauth" ? pe(u.forcedRefreshOutcome) : undefined,
                retried_after_401: u.retriedAfter401 ?? false,
                http_status: u.httpStatus,
                parse_error_field: pe(u.parseErrorField),
                parse_error_content_type: pe(u.parseErrorContentType),
                server_error_type: pe(u.serverErrorType),
                server_error_code: pe(u.serverErrorCode),
                server_auth_denial: pe(u.serverAuthDenial),
                injected_token_recovery: pe(success ? undefined : injectedTokenRecovery),
                credential_state: pe(we),
                outcome_reason: d(Xe),
                response_kind: success ? d(u.response === null ? "not_modified" : "body") : undefined,
                request_id_present: u.requestIdPresent,
                response_content_type: pe(u.responseContentType),
                fetch_trigger: d(n),
                verdictless_retry_scheduled,
                error_errno: pe(u.errno),
                ...yi()
            });
            if (!success) {
                Y({
                    success: false,
                    host,
                    httpStatus: u.httpStatus ?? null,
                    errorCode,
                    retrying: false,
                    credentialState: de,
                    ...u.serverErrorCode !== undefined && {
                        serverErrorCode: u.serverErrorCode
                    }
                });
                let b = _e !== undefined ? _e : this.staleFallbackSource();
                if (b) {
                    t(ye ? "Policy limits: 304 with no outstanding ETag — using stale cache" : "Policy limits: Using stale cache after fetch failure");
                    let le = Tt(b);
                    aPt(le);
                    this.disposeVerdictlessRetryTimer();
                    if (!this.hasLiveVerdict()) {
                        this.noteUnverifiedCycle(errorCode, true);
                    }
                    f(e, ye ? "spurious_304" : "stale_cache_used", {
                        credential_state: d(de)
                    });
                    return le;
                }
                if ((u.httpStatus === 404 || u.httpStatus === 304) && ZD() === null && !z$n() && !k("tengu_rustling_orbit", false)) {
                    t(`Policy limits: ${u.httpStatus} with no cache, no restrictions for this session (not persisted)`);
                    dPt();
                    Gfo();
                    this.serverConfirmedGeneration = sessionGeneration;
                    this.disposeVerdictlessRetryTimer();
                    this.disarmNetworkKick();
                    this.recordVerdictPrincipal(S);
                    f(e, u.httpStatus === 404 ? "route_missing_fail_open" : "unsolicited_304_fail_open", {
                        credential_state: d(de)
                    });
                    return r$e;
                }
                this.noteUnverifiedCycle(errorCode, false);
                m(e, errorCode, {
                    credential_state: d(de)
                });
                return null;
            }
            let Ce = u.response;
            if (Ce === null || Ce === undefined) {
                if (!h) {
                    M();
                    q5("policy", {
                        ...ge,
                        source: "error"
                    });
                    m(e, "unexpected_error");
                    return null;
                }
                t("Policy limits: Cache still valid (304 Not Modified)");
                let b = h;
                let le = h.compliance_taints;
                let et = this.serverConfirmedGeneration === sessionGeneration ? ZD()?.compliance_taints ?? [] : [];
                let Ee = Sbr(pPt(h)) > 0;
                if (Ee && et.some((ue)=>!le.includes(ue))) {
                    b = {
                        ...h,
                        compliance_taints: D([
                            ...et,
                            ...le
                        ]).slice(0, Nat)
                    };
                    t("Policy limits: lossy cached compliance_taints — kept the session taint set");
                }
                if (U) {
                    dPt();
                } else {
                    Lbr();
                }
                if (U || Ee) {
                    W$n(b);
                } else {
                    gQt(b);
                }
                xbr(U ? null : u.sentEnvBearerDigest ?? null);
                this.settleTunnelCredentialEpoch(u.tunnelCredentialEpoch);
                this.serverConfirmedGeneration = sessionGeneration;
                this.onLiveVerdict(n);
                this.recordVerdictPrincipal(S);
                Y({
                    success: true,
                    host
                });
                if (!zCe()) {
                    try {
                        if (j() && this.storageV5 !== undefined) {
                            if ((await this.storageV5.touch(ke())).ok) {
                                await e$e($k(), u.signature);
                                if (!await dQt($k(), this.cacheClearEpoch !== cacheClearEpoch)) {
                                    Fbr(E, ce);
                                    if (!U) {
                                        await this.restampConfirmedCache(b, E, S, sessionGeneration, Ee ? "prior_evidence" : "confirmed");
                                    }
                                }
                            }
                        } else {
                            let ue = new Date;
                            await utimes($k(), ue, ue);
                            await e$e($k(), u.signature);
                            if (!await dQt($k(), this.cacheClearEpoch !== cacheClearEpoch)) {
                                Fbr(E, ce);
                                if (!U) {
                                    await this.restampConfirmedCache(b, E, S, sessionGeneration, Ee ? "prior_evidence" : "confirmed");
                                }
                            }
                        }
                    } catch  {}
                }
                q5("policy", ge);
                g(e);
                return b;
            }
            let J = Ce;
            if (u.lossyComplianceTaints) {
                let b = [
                    ...ZD()?.compliance_taints ?? [],
                    ...h?.compliance_taints ?? []
                ];
                if (b.length > 0) {
                    J = {
                        ...J,
                        compliance_taints: D([
                            ...J.compliance_taints,
                            ...b
                        ]).slice(0, Nat)
                    };
                    t("Policy limits: lossy compliance_taints — kept the known taint set");
                }
            }
            if (U) {
                dPt();
            } else {
                Lbr();
            }
            if (U || u.lossyComplianceTaints) {
                W$n(J);
            } else {
                gQt(J);
            }
            xbr(U ? null : u.sentEnvBearerDigest ?? null);
            this.settleTunnelCredentialEpoch(u.tunnelCredentialEpoch);
            this.serverConfirmedGeneration = sessionGeneration;
            this.onLiveVerdict(n);
            this.recordVerdictPrincipal(S);
            Y({
                success: true,
                host
            });
            let Bt = TYe();
            let Se = U ? "stale" : await this.saveCachedResponse(J, sessionGeneration, J === Ce ? u.signature : undefined, S, u.lossyComplianceTaints ? "prior_evidence" : "confirmed");
            q5("policy", ge);
            if (Se === "skipped" && S === null && !U && !zCe() && h !== null && E !== undefined && q$n() === "legacy" && E !== te(J)) {
                await this.removeSupersededLegacyBody(h, E);
            }
            if (this.sessionGeneration !== sessionGeneration) {
                if (Se !== "stale" && Se !== "skipped") {
                    let b = await this.deleteCacheFile();
                    hQt();
                    if (!b) {
                        t("Policy limits: could not remove a dead fetch's cache write; disk adoption suppressed until the next save");
                    }
                }
                this.dropUnconfirmedSessionCache();
                f(e, "cycle_aborted");
                return ZD();
            }
            if (Se === "saved" && TYe() === Bt) {
                G$n();
            }
            t(Object.keys(J.restrictions).length > 0 ? "Policy limits: Applied new restrictions successfully" : "Policy limits: No restrictions (cached empty)");
            if (u.lossyComplianceTaints) {
                f(e, "lossy_compliance_taints");
            } else {
                g(e);
            }
            return J;
        } catch  {
            let u = this.sessionGeneration !== sessionGeneration;
            if (o && this.startupLoadState === "in_flight") {
                this.startupLoadState = "failed";
                this.startupLoadErrorCode = u ? "session_changed" : "unexpected_error";
                this.startupLoadCredentialState = undefined;
                this.startupLoadOutcomeReason = undefined;
                this.startupLoadHttpStatus = undefined;
                this.startupLoadServerErrorType = undefined;
            }
            q5("policy", {
                source: u ? "superseded" : "error",
                hadCache: h !== null,
                awaited
            });
            if (u || signal.aborted) {
                f(e, "cycle_aborted");
                return ZD();
            }
            if (!V) {
                M();
            }
            let oe = this.staleFallbackSource();
            if (oe) {
                t("Policy limits: Using stale cache after error");
                let se = Tt(oe);
                aPt(se);
                this.disposeVerdictlessRetryTimer();
                if (!this.hasLiveVerdict()) {
                    this.noteUnverifiedCycle("unexpected_error", true);
                }
                f(e, "stale_cache_used");
                return se;
            }
            this.noteUnverifiedCycle("unexpected_error", false);
            m(e, "unexpected_error");
            return null;
        }
    }
    hasLiveVerdict() {
        let e = ZD();
        return e !== null && e !== r$e && this.serverConfirmedGeneration === this.sessionGeneration;
    }
    armVerdictlessRetry() {
        if (this.verdictlessRetry !== null) {
            return true;
        }
        let verdictlessRetryStep = this.verdictlessRetryStep;
        let n = Et[verdictlessRetryStep];
        if (n === undefined || !Jh()) {
            return false;
        }
        this.verdictlessRetryStep = verdictlessRetryStep + 1;
        let r = Math.round(n * (1 - Rt + 2 * Rt * Math.random()));
        let sessionGeneration = this.sessionGeneration;
        t(`Policy limits: no verdict \u2014 accelerated retry ${verdictlessRetryStep + 1}/${Et.length} in ${Math.round(r / 1000)}s`);
        let s = I$n(()=>{
            s[Symbol.dispose]();
            if (this.verdictlessRetry === s) {
                this.verdictlessRetry = null;
            }
            if (this.sessionGeneration !== sessionGeneration) {
                return;
            }
            if (ZD() !== null) {
                return;
            }
            this.poll("accelerated_retry").catch((h)=>c(h));
        }, r, {
            unref: true
        });
        this.verdictlessRetry = s;
        return true;
    }
    disposeVerdictlessRetryTimer() {
        this.verdictlessRetry?.[Symbol.dispose]();
        this.verdictlessRetry = null;
    }
    armNetworkKick() {
        if (this.stopNetworkWatch !== null) {
            return;
        }
        let sessionGeneration = this.sessionGeneration;
        let n = Ct(()=>{
            queueMicrotask(()=>{
                if (this.stopNetworkWatch !== n) {
                    return;
                }
                try {
                    this.kickOnNetworkSuccess(sessionGeneration);
                } catch (error) {
                    c(error);
                }
            });
        });
        this.stopNetworkWatch = n;
    }
    disarmNetworkKick() {
        this.stopNetworkWatch?.();
        this.stopNetworkWatch = null;
    }
    kickOnNetworkSuccess(e) {
        if (this.sessionGeneration !== e) {
            this.disarmNetworkKick();
            return;
        }
        if (this.cyclesInFlight > 0) {
            return;
        }
        this.disarmNetworkKick();
        if (!Jh() || this.hasLiveVerdict()) {
            return;
        }
        t("Policy limits: the API answered a request — re-fetching the org policy now");
        this.poll("api_success_trigger").catch((n)=>c(n));
    }
    resetAcceleratedRecovery() {
        this.disposeVerdictlessRetryTimer();
        this.verdictlessRetryStep = 0;
        this.disarmNetworkKick();
    }
    noteUnverifiedCycle(errorCode, staleServed) {
        if (this.verdictlessEpisode === null) {
            this.verdictlessEpisode = {
                sinceMs: Date.now(),
                errorCode,
                failedCycles: 1,
                staleServed
            };
        } else {
            this.verdictlessEpisode.failedCycles++;
        }
    }
    onLiveVerdict(e) {
        this.resetAcceleratedRecovery();
        let verdictlessEpisode = this.verdictlessEpisode;
        if (verdictlessEpisode === null) {
            return;
        }
        this.verdictlessEpisode = null;
        let r = Date.now();
        let o = hi(e);
        let n_errorCode = verdictlessEpisode.errorCode;
        i("tengu_policy_limits_verdict_recovered", {
            ms_since_startup: r - He,
            ms_verdictless: r - verdictlessEpisode.sinceMs,
            recovered_by: d(o),
            startup_error_code: d(n_errorCode),
            attempts_before_recovery: verdictlessEpisode.failedCycles,
            was_stale_served: verdictlessEpisode.staleServed,
            fast_retry_enabled: Ue()
        });
    }
    policyGateSnapshot() {
        if (this.gateSnapshotThisRun !== undefined) {
            return this.gateSnapshotThisRun;
        }
        let ineligibleReason = K5();
        let eligible = ineligibleReason === undefined;
        let eligibleIfBaseUrlGateRemoved = ineligibleReason === "custom_base_url" ? K5({
            skipBaseUrlCheck: true
        }) === undefined : eligible;
        let hasCache = mS() !== null;
        let cacheAgeMs = eligible ? Pt() : undefined;
        let liveVerdict = this.hasLiveVerdict();
        let p = {
            ineligibleReason,
            eligible,
            eligibleIfBaseUrlGateRemoved,
            hasCache,
            cacheAgeMs,
            liveVerdict,
            wouldFailClosed: eligible && !liveVerdict && (!hasCache || KM() === undefined && (cacheAgeMs ?? Infinity) > bNs),
            loadState: this.startupLoadState,
            loadErrorCode: this.startupLoadErrorCode,
            loadCredentialState: this.startupLoadCredentialState,
            loadOutcomeReason: eligible ? this.startupLoadOutcomeReason : KBn(rZt(ineligibleReason)),
            loadHttpStatus: this.startupLoadHttpStatus,
            loadServerErrorType: this.startupLoadServerErrorType,
            awaitResult: this.startupAwaitResult
        };
        this.gateSnapshotThisRun = p;
        queueMicrotask(()=>{
            this.gateSnapshotThisRun = undefined;
        });
        return p;
    }
    managedConfigPolicyGateFields() {
        let e = this.policyGateSnapshot();
        let n = We();
        return {
            policy_ineligible_reason: pe(e.ineligibleReason),
            policy_eligible_if_base_url_gate_removed: e.eligibleIfBaseUrlGateRemoved,
            policy_cache_age_ms: e.cacheAgeMs,
            policy_would_fail_closed: e.wouldFailClosed,
            policy_live_verdict: e.liveVerdict,
            policy_load_state: d(e.loadState),
            policy_error_code: pe(e.loadErrorCode),
            policy_credential_state: pe(e.loadCredentialState),
            policy_outcome_reason: pe(e.loadOutcomeReason),
            policy_has_auth_token: n.has_auth_token,
            policy_has_api_key_helper: n.has_api_key_helper,
            policy_has_custom_base_url: n.has_custom_base_url,
            policy_api_provider: d(Ie()),
            policy_http_status: e.loadHttpStatus,
            policy_server_error_type: pe(e.loadServerErrorType)
        };
    }
    logCacheStateAtFirstPrompt() {
        if (this.firstPromptStateLogged) {
            return;
        }
        this.firstPromptStateLogged = true;
        let e = this.policyGateSnapshot();
        let error_reporting_gate = d(Ffo());
        i("tengu_policy_limits_cache_state_at_first_prompt", {
            eligible: e.eligible,
            ineligible_reason: pe(e.ineligibleReason),
            eligible_if_base_url_gate_removed: e.eligibleIfBaseUrlGateRemoved,
            has_cache: e.hasCache,
            cache_age_ms: e.cacheAgeMs,
            would_fail_closed: e.wouldFailClosed,
            live_verdict: e.liveVerdict,
            token_source: d(bt()),
            ...We(),
            ms_since_startup: Date.now() - He,
            load_state: d(e.loadState),
            startup_fetch_error_code: pe(e.loadErrorCode),
            startup_credential_state: pe(e.loadCredentialState),
            outcome_reason: pe(e.loadOutcomeReason),
            startup_await_result: d(e.awaitResult),
            error_reporting_gate
        });
    }
    async load({ startupAwaited = false } = {}) {
        return this.loadFor("load", startupAwaited);
    }
    async loadFor(e, n = false) {
        this.used = true;
        this.ensureCredentialWatch();
        if (Jh() && !this.loadingCompletePromise) {
            this.loadingCompletePromise = new Promise((resolve)=>{
                this.loadingCompleteResolve = resolve;
            });
        }
        let loadingCompleteResolve = this.loadingCompleteResolve;
        try {
            await this.fetchAndLoad("policy_limits_load", e, n);
            if (Jh()) {
                this.startBackgroundPolling();
            }
        } finally{
            if (loadingCompleteResolve) {
                loadingCompleteResolve();
                if (this.loadingCompleteResolve === loadingCompleteResolve) {
                    this.loadingCompleteResolve = null;
                    if (this.loadingTimeoutId) {
                        clearTimeout(this.loadingTimeoutId);
                        this.loadingTimeoutId = null;
                    }
                }
            }
        }
    }
    async refresh({ observedBoundary = false } = {}) {
        this.used = true;
        this.stop();
        this.ensureCredentialWatch();
        this.initializeLoadingPromise();
        let n = Jh();
        if (observedBoundary) {
            await this.removeUnstampedBody();
        } else if (!await this.deleteCacheFile()) {
            t("Policy limits: could not remove the previous account's cache; disk adoption stays suppressed");
        }
        this.dropUnconfirmedSessionCache();
        if (!n) {
            return;
        }
        await this.loadFor("login_refresh");
        t("Policy limits: Refreshed after auth change");
    }
    async clearCache() {
        this.used = true;
        this.stop();
        this.verdictlessEpisode = null;
        this.ensureCredentialWatch();
        if (!await this.deleteCacheFile()) {
            t("Policy limits: could not remove the previous account's cache; disk adoption stays suppressed");
        }
        this.dropUnconfirmedSessionCache();
    }
    recordFetchOutcome(e, n, r, o, s) {
        if (this.sessionGeneration === e && this.cacheClearEpoch === n) {
            Pbr(r, o, s);
        }
    }
    staleFallbackSource() {
        if (V$n()) {
            return ZD();
        }
        return cPt() ?? ZD();
    }
    dropUnconfirmedSessionCache() {
        if (ZD() !== null && this.serverConfirmedGeneration !== this.sessionGeneration) {
            gQt(null);
        }
    }
    async deleteCacheFile() {
        this.cacheClearEpoch++;
        if (zCe()) {
            return false;
        }
        CYe(await kYe($k()));
        if (!await this.removeBodyLeavingStamp()) {
            return false;
        }
        let n = await kYe($k());
        if (n.kind === "unusable") {
            return true;
        }
        let r = vbr(n, K$n());
        if (r.seen.length === 0 && !r.incomplete) {
            await aSs($k());
        } else {
            await kbr($k(), iSs(r));
        }
        return true;
    }
    recordVerdictPrincipal(e) {
        if (e === null || fe(e)) {
            this.verdictPrincipalIdentity = e === null ? null : Cde(e);
            this.verdictPrincipalKind = e === null ? null : e.kind;
            this.verdictKey = e === null ? null : ee(e);
            if (e !== null) {
                this.askedKey = null;
            }
        } else {
            this.verdictKey = ee(e);
        }
        this.ensureCredentialWatch();
        this.onCredentialMayHaveChanged();
    }
    isVerdictOfLiveCredential() {
        return this.verdictKey !== null && Ke() === this.verdictKey;
    }
    ensureCredentialWatch() {
        if (this.stopCredentialWatch === null) {
            this.stopCredentialWatch = Qws(this.onCredentialMayHaveChanged);
        }
        if (this.stopTunnelEpochWatch === null) {
            this.stopTunnelEpochWatch = Zws(this.onTunnelCredentialEpoch);
        }
    }
    onTunnelCredentialEpoch = (e)=>{
        this.observeTunnelCredentialEpoch(e, "a model response", true);
    };
    observeTunnelCredentialEpoch(e, n, r) {
        if (e === undefined || KM() === undefined) {
            return;
        }
        let o = this.tunnelEpochSeen !== undefined;
        if (this.tunnelEpochSeen === undefined || e > this.tunnelEpochSeen) {
            this.tunnelEpochSeen = e;
        }
        if (this.tunnelVerdictEpoch !== undefined && e <= this.tunnelVerdictEpoch) {
            return;
        }
        if (!o && this.tunnelVerdictEpoch === undefined) {
            return;
        }
        let s = ZD() !== null;
        let h = r && this.tunnelRepolledForEpoch !== this.tunnelEpochSeen && this.cyclesInFlight === 0;
        if (!s && !h) {
            return;
        }
        t(`Policy limits: the claude ssh launcher injects a different credential than the one this policy was fetched with (${n}); ${s ? "withholding client-only keys" : "no verdict held"}${h ? ", re-polling" : ""}`);
        if (s) {
            dPt();
        }
        if (h) {
            this.tunnelRepolledForEpoch = this.tunnelEpochSeen;
            i("tengu_policy_limits_principal_changed", {
                next_kind: d("none"),
                reason: d("tunnel_credential")
            });
            this.fetchAndLoad("policy_limits_poll", "credential_change").catch((p)=>c(p));
        }
    }
    settleTunnelCredentialEpoch(e) {
        if (e === undefined || KM() === undefined) {
            return;
        }
        this.tunnelVerdictEpoch = e;
        if (this.tunnelEpochSeen === undefined || e > this.tunnelEpochSeen) {
            this.tunnelEpochSeen = e;
        }
    }
    isStaleTunnelCredentialEpoch(e) {
        return e !== undefined && this.tunnelEpochSeen !== undefined && e < this.tunnelEpochSeen && KM() !== undefined;
    }
    onCredentialMayHaveChanged = ()=>{
        if (this.principalCheckQueued) {
            return;
        }
        this.principalCheckQueued = true;
        queueMicrotask(()=>{
            this.checkPrincipal().catch((e)=>{
                c(e);
            });
        });
    };
    async checkPrincipal(e = "credential_change") {
        let sessionGeneration = this.sessionGeneration;
        try {
            if (this.verdictPrincipalIdentity === null && ZD() === null && Mbr() !== undefined) {
                return "unchanged";
            }
            try {
                await yl(this.credentials);
            } catch  {}
            if (Jfo() && $T() === "store") {
                try {
                    await Dbr(this.storageV5, this.credentials);
                } catch (error) {
                    t(`Policy limits: stored login origin or account record unreadable (${l(error)})`);
                }
            }
        } finally{
            this.principalCheckQueued = false;
        }
        if (this.sessionGeneration !== sessionGeneration) {
            return "superseded";
        }
        if (Fat() === false) {
            t("Policy limits: the env bearer the loaded policy was fetched with is no longer the wire credential; reloading as an account change");
            i("tengu_policy_limits_principal_changed", {
                next_kind: d("none"),
                reason: d("env_bearer")
            });
            this.refresh({
                observedBoundary: true
            }).catch((y)=>c(y));
            return "changed";
        }
        let r = dY();
        if (r !== null && !fe(r)) {
            this.scheduleUnclassifiedRecheck();
        }
        if (!fe(r)) {
            if (r !== null && ZD() !== null && ee(r) !== this.verdictKey && $T() === "store") {
                if (this.cyclesInFlight > 0) {
                    this.principalCheckOwed = true;
                    return "unchanged";
                }
                let y = Pe(r);
                if (y !== this.askedKey) {
                    t("Policy limits: the stored login in use is not the one the loaded policy was fetched with, and its account record has not settled; asking the server with it (keyed on the token until the record settles)");
                    return this.repollFor(r, y, "unattributed", e);
                }
            }
            return "unchanged";
        }
        let o = Cde(r);
        let s = this.verdictPrincipalKind === "token" && r.kind === "token";
        if (this.verdictPrincipalIdentity !== null && o !== this.verdictPrincipalIdentity && !s) {
            if (_ks()) {
                let y = Pe(r);
                let S = this.cyclesInFlight > 0;
                if (S && y === this.askedKey) {
                    this.principalCheckOwed = true;
                    return "unchanged";
                }
                if (!S && y !== this.askedKey) {
                    t(`Policy limits: the credential now belongs to a different principal than the loaded policy; ${yks} keeps the loaded verdict while the new principal's policy is fetched`);
                    i("tengu_policy_limits_principal_changed", {
                        next_kind: d(r.kind),
                        reason: d("identity_kept")
                    });
                    this.askedKey = y;
                    this.fetchAcrossBoundaryKeepingVerdict(e).catch((C)=>c(C));
                    return "changed";
                }
            }
            t("Policy limits: the credential now belongs to a different principal than the loaded policy; reloading as an account change");
            i("tengu_policy_limits_principal_changed", {
                next_kind: d(r.kind),
                reason: d("identity")
            });
            this.refresh({
                observedBoundary: true
            }).catch((y)=>c(y));
            return "changed";
        }
        if (this.cyclesInFlight > 0) {
            this.principalCheckOwed = true;
            return "unchanged";
        }
        let h = ee(r);
        let p = Pe(r);
        if (p === this.askedKey) {
            return "unchanged";
        }
        if (this.verdictPrincipalIdentity === null) {
            if (ZD() === null) {
                if (!Jh() || this.loadingCompleteResolve !== null) {
                    return "unchanged";
                }
                this.askedKey = p;
                this.releaseLoadingPromise();
                this.initializeLoadingPromise();
                this.loadFor(e).catch((y)=>c(y));
                return "started";
            }
            return this.repollFor(r, p, "unattributed", e);
        }
        if (h !== this.verdictKey) {
            t("Policy limits: a new bearer for the loaded policy (a declared organization's new bearer, one keyed on itself replacing another, a healed store); keeping the verdict and re-polling");
            return this.repollFor(r, p, r.bearerDigest !== undefined || s ? "bearer" : "reclassified", e);
        }
        return "unchanged";
    }
    scheduleUnclassifiedRecheck() {
        if (this.unclassifiedRecheckTimer !== null) {
            return;
        }
        this.unclassifiedRecheckTimer = setTimeout(()=>{
            this.unclassifiedRecheckTimer = null;
            this.onCredentialMayHaveChanged();
        }, Si);
        this.unclassifiedRecheckTimer.unref?.();
    }
    repollFor(e, n, r, o) {
        this.askedKey = n;
        i("tengu_policy_limits_principal_changed", {
            next_kind: d(e.kind),
            reason: d(r)
        });
        this.fetchAndLoad("policy_limits_poll", o).catch((s)=>c(s));
        return "repolled";
    }
    async fetchAcrossBoundaryKeepingVerdict(e) {
        let sessionGeneration = this.sessionGeneration;
        let verdictPrincipalIdentity = this.verdictPrincipalIdentity;
        hQt();
        uPt();
        dPt();
        this.prefetchSlot.clear();
        this.renewOAuthRefreshLatch();
        this.cyclesInFlight++;
        try {
            await this.removeUnstampedBody().catch((o)=>c(o));
            if (this.sessionGeneration === sessionGeneration) {
                await this.fetchAndLoad("policy_limits_poll", e).catch((o)=>c(o));
            }
        } finally{
            this.endCycle(sessionGeneration);
        }
        if (this.sessionGeneration !== sessionGeneration || this.verdictPrincipalIdentity !== verdictPrincipalIdentity) {
            return;
        }
        t("Policy limits: the new principal's fetch installed nothing; dropping the previous principal's verdict as an account change");
        await this.refresh({
            observedBoundary: true
        });
    }
    async poll(e = "hourly_poll") {
        if (!Jh()) {
            return;
        }
        let n = ZD();
        let r = n ? _(n) : null;
        try {
            if (await this.checkPrincipal(e) !== "unchanged") {
                return;
            }
            if (this.cyclesInFlight > 0) {
                return;
            }
            await this.fetchAndLoad("policy_limits_poll", e);
            let o = ZD();
            if ((o ? _(o) : null) !== r) {
                t("Policy limits: Changed during background poll");
            }
        } catch  {}
    }
    startBackgroundPolling() {
        this.used = true;
        if (this.poller !== null) {
            return;
        }
        if (!Jh()) {
            return;
        }
        this.poller = I$n(()=>void this.poll(), ui, {
            unref: true
        });
        if (!this.cleanupRegistered) {
            this.cleanupRegistered = true;
            St(()=>this.stopBackgroundPolling());
        }
    }
    stopBackgroundPolling() {
        this.poller?.[Symbol.dispose]();
        this.poller = null;
        this.resetAcceleratedRecovery();
    }
}
class Bbs {
    client = undefined;
}
const SNs = new q(()=>new Bbs);
function me() {
    return SNs.of(B().host);
}
function G() {
    let e = me();
    e.client ??= new Rfo;
    return e.client;
}
function xfo(e) {
    let n = me();
    if (n.client === undefined) {
        n.client = new Rfo(e);
        return;
    }
    let r = n.client.adoptStartupServices(e);
    switch(r){
        case "nothing to adopt":
            t("Policy limits: default client already constructed; start-up composition skipped");
            return;
        case "already used":
            t("Policy limits: start-up composition came after the bare default client was used; it keeps running without the backend and credentials store", {
                level: "warn"
            });
            i("tengu_policy_limits_late_composition", {});
            return;
        case "already composed":
            t("Policy limits: default client already composed; later start-up composition skipped");
            return;
        case "adopted":
            t("Policy limits: start-up services adopted by the default client");
            return;
        default:
    }
}
function Ozs(e) {
    G().recordStartupAwaitResult(e);
}
async function _br() {
    let e = performance.now();
    let n;
    try {
        let r = G();
        r.ensureLoadRequested({
            startupAwaited: true
        });
        n = await r.awaitColdStartVerdict();
    } catch (error) {
        c(error);
        n = "timed_out";
    }
    _Ye("policy", n, {
        since: e
    });
    return n;
}
function iQt() {
    return G().coldStartTimedOut;
}
function Pfo() {
    return G().coldStartVerdictWait;
}
function sPt() {
    _Ye("policy", "not_awaited");
    try {
        if (Jh()) {
            G().ensureLoadRequested({
                startupAwaited: false
            });
        }
    } catch (error) {
        c(error);
    }
}
async function Hat() {
    let e = performance.now();
    try {
        if (!jCe()) {
            sPt();
            return "skipped";
        }
    } catch (error) {
        c(error);
        _Ye("policy", "timed_out", {
            since: e
        });
        return "timed_out";
    }
    return _br();
}
function Mzs() {
    return G();
}
async function Hzs() {
    let client = me().client;
    if (client !== undefined) {
        await client._settleCyclesForTesting();
    }
}
function Dzs() {
    G().stop();
    G$n();
    me().client = undefined;
    VCs();
    dmo();
    Yfo();
}
function aQt() {
    G().initializeLoadingPromise();
}
function Aw() {
    return G().waitForLoad();
}
function Ifo() {
    G().logCacheStateAtFirstPrompt();
}
function Lzs(e) {
    return G().admitPrefetched(e);
}
function Ofo() {
    return me().client?.isVerdictOfLiveCredential() ?? false;
}
function Mfo(e = {}) {
    return G().load(e);
}
function Hfo() {
    G().prefetch();
}
function lQt() {
    return G().refresh();
}
function Dfo() {
    return G().clearCache();
}
function Nzs() {
    G().startBackgroundPolling();
}
function $zs() {
    G().stopBackgroundPolling();
}
function Fzs() {
    G().stop();
}
const Si = Abr + 1000;
function fe(e) {
    return e !== null && e.unclassified !== true;
}
function ee(e) {
    let n = Cde(e);
    if (e.bearerDigest === undefined) {
        return n;
    }
    return `${n}:${e.bearerDigest}`;
}
function Ke() {
    let e = dY();
    if (e === null) {
        return null;
    }
    return ee(e);
}
function Pe(e) {
    let n = bn()?.accessToken;
    return `${ee(e)}#${n ? Rde(n) : ""}`;
}
export { kfo, I$n, rQt, Lbs, Nbs, $bs, q5, _Ye, fbr, oQt, Fbs, sQt, mbr, O$n, gbr, M$n, H$n, hbr, Mat, ybr, Tfo, Izs, Ubs, oPt, bNs, jCe, Afo, Cfo, Rfo, Bbs, SNs, xfo, Ozs, _br, iQt, Pfo, sPt, Hat, Mzs, Hzs, Dzs, aQt, Aw, Ifo, Lzs, Ofo, Mfo, Hfo, lQt, Dfo, Nzs, $zs, Fzs };
