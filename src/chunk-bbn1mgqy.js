import { d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { v, z, ti } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { Ut, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { R7t, Bk, hRe, Nvs, P7t, Bp, jvs, hho, jwr, NUn, kIt, o6e, _F, iH, Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ay, xP, Tnn, $b } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { il, U3e, Dr } from "/$bunfs/root/chunk-nj0630nv.js";
import { Qnt, P2, Dxn, Lxn, Znt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { CQn, RQn, MGr, aMe, Kme, xQn, E7e, zWt, PQn, HGr, GWt, NKo, $Ko, k7e, AEe, T7e, Sze, AX, G6 } from "/$bunfs/root/chunk-nh7p29db.js";
import { Q_n, KWt, GKo, S_t, Z_n, CEe, wze, MQn, w_t, ebn, v_t } from "/$bunfs/root/chunk-6k0jn8aw.js";
import { w3n, NNr, LUo, $Nr, v3n, FNr, NUo, $Uo, UNr, Uje, E3n, k3n, FFt, BNr } from "/$bunfs/root/chunk-108s606z.js";
import { PSn, cbt } from "/$bunfs/root/chunk-cgerwwzw.js";
import { KA } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { zy } from "/$bunfs/root/chunk-7qc48pza.js";
const timeout = 5000;
const fe = [
    "not_permitted",
    "ip_restricted",
    "lane_unavailable"
];
function M(e) {
    return fe.some((o)=>o === e);
}
async function B(scope, surface, { etag } = {}) {
    let i = aMe(scope);
    try {
        let s = ce(scope, surface);
        let headers = {
            ...s.headers,
            ...etag !== undefined && {
                "If-None-Match": etag
            }
        };
        let r = await Gt.get(s.path, {
            auth: s.auth,
            isBackground: true,
            timeout,
            maxContentLength: Qnt,
            validateStatus: ()=>true,
            ...Object.keys(headers).length > 0 && {
                headers
            }
        });
        if (!r.ok) {
            t(`[servedCatalog] fetch (${i}) skipped: ${r.reason}${r.reason === "no-auth" ? ` (${r.detail})` : ""}`);
            return {
                status: "skipped",
                reason: r.reason
            };
        }
        let m = r.status;
        if (m === 304 && etag !== undefined) {
            t(`[servedCatalog] fetch (${i}): not modified`);
            return {
                status: "not_modified",
                httpStatus: m
            };
        }
        if (m < 200 || m >= 300) {
            let u = I(scope, m, r.data);
            t(`[servedCatalog] fetch (${i}): HTTP ${m}${ge(u)}`);
            return u ?? {
                status: "error",
                reason: "http_status",
                httpStatus: m
            };
        }
        let k = Lxn().safeParse(r.data);
        if (!k.success) {
            t(`[servedCatalog] fetch (${i}): response failed validation`);
            return {
                status: "error",
                reason: "parse_failed",
                httpStatus: m
            };
        }
        let etag_1 = xe(r.response?.headers);
        let l = i === "orgless" ? he(k.data) : {};
        let catalog = Znt(k.data, surface);
        if (catalog === null) {
            t(`[servedCatalog] fetch (${i}) ok: surface not served${L(l)}`);
            return {
                status: "empty",
                etag: etag_1,
                httpStatus: m,
                ...l
            };
        }
        if (P7t(catalog)) {
            t(`[servedCatalog] fetch (${i}) ok: ${catalog.config.models?.length ?? 0} rows kept after row validation dropped others; etag withheld, full refetch next refresh${L(l)}`);
            return {
                status: "ok",
                catalog,
                etag: undefined,
                httpStatus: m,
                ...l
            };
        }
        t(`[servedCatalog] fetch (${i}) ok: ${catalog.config.models?.length ?? 0} rows${L(l)}`);
        return {
            status: "ok",
            catalog,
            etag: etag_1,
            httpStatus: m,
            ...l
        };
    } catch (error) {
        let { kind, status } = ti(error);
        t(`[servedCatalog] fetch (${i}) failed: ${kind}${status !== undefined ? ` ${status}` : ""}`);
        switch(kind){
            case "timeout":
                return {
                    status: "error",
                    reason: "timeout"
                };
            case "network":
                return {
                    status: "error",
                    reason: "network"
                };
            case "auth":
            case "http":
                if (status === undefined) {
                    return {
                        status: "error",
                        reason: "network"
                    };
                }
                return I(scope, status, be(error)) ?? {
                    status: "error",
                    reason: "http_status",
                    httpStatus: status
                };
            case "other":
                return {
                    status: "error",
                    reason: "exception"
                };
        }
    }
}
function ce(scope, surface) {
    switch(scope.kind){
        case "account":
            return {
                path: `/api/organizations/:orgUUID/model_selector/${surface}`,
                auth: "teleport-org",
                headers: {}
            };
        case "token":
            return {
                path: `/api/model_selector/${surface}`,
                auth: "claude-ai-oauth",
                headers: {
                    "anthropic-client-platform": zy()
                }
            };
        case "api_key":
            return {
                path: `/api/model_selector/${surface}`,
                auth: "required",
                headers: {
                    "anthropic-client-platform": zy()
                }
            };
        case "profile":
        case "federation":
            return {
                path: `/api/model_selector/${surface}`,
                auth: "async",
                headers: {
                    "anthropic-client-platform": zy()
                }
            };
    }
}
function he(data) {
    let o = Jt(data.organization_uuid)?.toLowerCase();
    let resolution = Dxn.find((i)=>i === data.resolution);
    return {
        ...o !== undefined && {
            organizationUuid: o
        },
        ...resolution !== undefined && {
            resolution
        }
    };
}
function L(e) {
    if (e.resolution === undefined) {
        return "";
    }
    return ` (resolution ${e.resolution})`;
}
const j = [
    "oauth_scope_insufficient",
    "oauth_token_narrowed"
];
const T = "ip_not_in_allowed_range";
const K = [
    "not_found",
    "account_session_invalid",
    "organization_not_visible"
];
const lt = [
    ...j,
    T,
    ...K
];
function V(e, o) {
    let a = q(o);
    return e.find((i)=>i === a);
}
function I(scope, o, a) {
    return _e(o, a) ?? ke(o, a) ?? ye(scope, o, a);
}
function ge(e) {
    if (e === undefined || !M(e.reason)) {
        return "";
    }
    return `${e.errorCode !== undefined ? ` ${e.errorCode}` : ""} (${U(e.reason)})`;
}
function U(e) {
    switch(e){
        case "not_permitted":
            return "this credential cannot read the served list";
        case "ip_restricted":
            return "the organization's IP allowlist refuses this network";
        case "lane_unavailable":
            return "the server has not enabled the org-less route for this session";
    }
}
function _e(e, o) {
    let a = V(j, o);
    if (e === 403 && a !== undefined) {
        return {
            status: "error",
            reason: "not_permitted",
            httpStatus: e,
            errorCode: a
        };
    }
}
function ke(e, o) {
    if (e === 403 && q(o) === T) {
        return {
            status: "error",
            reason: "ip_restricted",
            httpStatus: e,
            errorCode: T
        };
    }
}
function ye(e, o, a) {
    if (aMe(e) !== "orgless") {
        return;
    }
    let i = V(K, a);
    if (o === 404 || o === 403 && i === "account_session_invalid" || o === 401 && i === "organization_not_visible" && Kme(e) === "profile") {
        return {
            status: "error",
            reason: "lane_unavailable",
            httpStatus: o,
            ...i !== undefined && {
                errorCode: i
            }
        };
    }
}
function q(e) {
    let o = F(e, "error");
    let a = F(F(o, "details"), "error_code");
    if (typeof a === "string" && a.length > 0) {
        return a;
    }
}
function F(e, o) {
    if (typeof e === "object" && e !== null && o in e) {
        return e[o];
    }
}
function be(error) {
    return F(F(error, "response"), "data");
}
function xe(e) {
    let o = e?.etag;
    if (P2(o)) {
        return o;
    }
}
const ve = 30000;
const CQn_1 = CQn;
const we = 256;
function W(e) {
    return `${e.replace(/\.json$/, "")}.headless-failed.json`;
}
function Se(failures, o = Math.random()) {
    return MGr(G(failures), o);
}
function G(failures) {
    return Math.min(ve * 2 ** (Math.max(1, failures) - 1), CQn_1);
}
function Ce(failures) {
    return G(failures) * (1 + RQn);
}
async function $Ft(e, o = Date.now(), a = Math.random()) {
    let i = await Y(e);
    if (i === undefined || i.failedAt > o) {
        return true;
    }
    return o - i.failedAt >= Se(i.failures, a);
}
async function Y(e) {
    let o;
    try {
        o = (await _F().readRange(W(e), 0, we)).toString("utf8");
    } catch (error) {
        if (!z(error)) {
            t(`[servedCatalog] headless retry marker read failed: ${v(error) ?? "unknown"}`);
        }
        return;
    }
    let a = mt(o, false);
    if (typeof a !== "object" || a === null) {
        return;
    }
    let i = "failedAt" in a ? a.failedAt : undefined;
    if (typeof i !== "number" || !Number.isFinite(i)) {
        return;
    }
    let s = "failures" in a ? a.failures : undefined;
    return {
        failedAt: i,
        failures: typeof s === "number" && Number.isSafeInteger(s) && s >= 1 ? s : 1
    };
}
function Re(e, o) {
    return e.failedAt <= o && o - e.failedAt < Ce(e.failures) + CQn_1;
}
async function ipn(e, o, a = Date.now()) {
    let i = _F();
    let s = W(e);
    try {
        if (o === "clear") {
            await i.delete(s);
            return;
        }
        let n = o === "back_off" ? await Y(e) : undefined;
        let r = {
            failedAt: a,
            failures: n !== undefined && Re(n, a) ? n.failures + 1 : 1
        };
        await i.mkdir(iH());
        await i.atomicWrite(s, _(r), 384);
    } catch (error) {
        if (!z(error)) {
            t(`[servedCatalog] headless retry marker write failed: ${v(error) ?? "unknown"}`);
        }
    }
}
async function S3n(e, o) {
    let servedCatalogSettledRefreshes = Dr().servedCatalogSettledRefreshes;
    if (servedCatalogSettledRefreshes.has(o)) {
        return;
    }
    servedCatalogSettledRefreshes.add(o);
    switch(o.fetchStatus){
        case "error":
        case "skipped":
            await ipn(e, Me(o) ? "retry_soon" : "back_off");
            return;
        case "ok":
        case "empty":
        case "not_modified":
            await ipn(e, o.entry === undefined || k7e(o.entry) ? "back_off" : "clear");
            return;
        default:
            return;
    }
}
function Me(e) {
    return e.prior === undefined && e.fetchStatus === "error" && !M(e.fetchReason);
}
function apn({ allowNetwork }) {
    let mode = AEe();
    let surface = G6();
    let i = AX();
    if (mode === "off" || i === null) {
        return Promise.resolve({
            mode: "off",
            surface,
            fetchStatus: "off",
            entry: undefined,
            prior: undefined
        });
    }
    let servedCatalogRefreshes = Dr().servedCatalogRefreshes;
    let n = zWt(i, surface);
    let r = servedCatalogRefreshes.get(n);
    if (r) {
        return r;
    }
    let m = Ee({
        mode,
        surface,
        scope: i,
        allowNetwork
    }).finally(()=>{
        servedCatalogRefreshes.delete(n);
    });
    servedCatalogRefreshes.set(n, m);
    return m;
}
async function Ee({ mode, surface, scope, allowNetwork }) {
    let s;
    let fetchMs;
    let route = aMe(scope);
    let credential = Kme(scope);
    let k = (l)=>({
            mode,
            surface,
            route,
            credential,
            ...l?.resolution !== undefined && {
                resolution: l.resolution
            },
            prior: s,
            ...fetchMs !== undefined && {
                fetchMs
            }
        });
    let h = ()=>k(s);
    try {
        s = await PQn(scope, surface);
        if (s && !k7e(s)) {
            return {
                ...h(),
                fetchStatus: "cache_fresh",
                entry: s
            };
        }
        if (!allowNetwork) {
            return {
                ...h(),
                fetchStatus: "cache_only",
                entry: s
            };
        }
        let fetchReason = Dr().servedCatalogRefusal;
        if (fetchReason !== undefined) {
            return {
                ...h(),
                fetchStatus: "cache_only",
                fetchReason,
                entry: s
            };
        }
        let b = performance.now();
        let u = await B(scope, surface, {
            etag: s?.etag
        });
        fetchMs = Math.round(performance.now() - b);
        if (!xQn(AX(), scope)) {
            t("[servedCatalog] scope changed during fetch; answer dropped");
            return {
                ...h(),
                fetchStatus: "error",
                fetchReason: "scope_changed",
                entry: undefined
            };
        }
        switch(u.status){
            case "ok":
            case "empty":
                {
                    let y = NKo({
                        catalog: u.status === "ok" ? u.catalog : null,
                        etag: u.etag,
                        organizationUuid: u.organizationUuid,
                        resolution: u.resolution
                    });
                    await GWt(scope, surface, y);
                    if (u.status === "ok") {
                        NUn(u.catalog);
                    }
                    return {
                        ...h(),
                        resolution: u.resolution,
                        fetchStatus: u.status,
                        httpStatus: u.httpStatus,
                        entry: y
                    };
                }
            case "not_modified":
                {
                    let y = s ? $Ko(s) : undefined;
                    if (y) {
                        await GWt(scope, surface, y);
                    }
                    return {
                        ...h(),
                        fetchStatus: "not_modified",
                        httpStatus: u.httpStatus,
                        entry: y
                    };
                }
            case "skipped":
                return {
                    ...h(),
                    fetchStatus: "skipped",
                    fetchReason: u.reason,
                    entry: s
                };
            case "error":
                {
                    if (M(u.reason)) {
                        Dr().servedCatalogRefusal = u.reason;
                    }
                    let y = s;
                    if (u.reason === "lane_unavailable" && s !== undefined) {
                        t("[servedCatalog] org-less route not enabled; cached entry discarded");
                        await HGr(scope, surface);
                        y = undefined;
                    }
                    return {
                        ...k(y),
                        fetchStatus: "error",
                        fetchReason: u.reason,
                        httpStatus: u.httpStatus,
                        ...u.errorCode !== undefined && {
                            errorCode: u.errorCode
                        },
                        entry: y
                    };
                }
        }
    } catch (error) {
        c(error);
        return {
            ...h(),
            fetchStatus: "error",
            fetchReason: "exception",
            entry: s
        };
    }
}
const Oe = 1750;
const Fe = 1500;
const Pe = 4500;
function He(headless) {
    if (G6() === "ccr") {
        return Pe;
    }
    if (headless) {
        return Fe;
    }
    return Oe;
}
const budgetMs = 2000;
async function Z({ headless }) {
    if (Dr().servedCatalogActive !== undefined) {
        return;
    }
    try {
        if (AEe() !== "primary" || Le()) {
            Te(headless);
            return;
        }
        let o = AX();
        if (o === null) {
            E("no_scope", "no cache scope");
            return;
        }
        let a = G6();
        let i = await PQn(o, a);
        let s = "cache";
        let n;
        let r = {};
        let timing;
        let k = false;
        let h;
        if (i === undefined) {
            let x = headless ? E7e(o, a) : null;
            if (x !== null && !await $Ft(x)) {
                k = true;
            } else {
                let w = apn({
                    allowNetwork: true
                });
                if (x !== null) {
                    w = w.then(async (O)=>{
                        await S3n(x, O);
                        return O;
                    });
                }
                let S = await X(w, {
                    wait: "first_fetch",
                    headless,
                    budgetMs: He(headless),
                    scope: o
                });
                timing = S.timing;
                h = S.outcome;
                i = S.outcome?.entry;
                n = S.outcome === undefined ? "timeout" : S.outcome.fetchStatus;
                r = Q(S.outcome);
                s = `fetch:${n}`;
            }
        } else if (!headless && k7e(i)) {
            let x = await X(apn({
                allowNetwork: true
            }), {
                wait: "stale_refresh",
                headless,
                budgetMs,
                scope: o
            });
            timing = x.timing;
            h = x.outcome;
            n = x.outcome === undefined ? "timeout" : x.outcome.fetchStatus;
            if (x.outcome?.fetchReason === "lane_unavailable") {
                i = undefined;
            } else {
                i = x.outcome?.entry ?? i;
                s = `stale cache: waited ${timing.wait_ms}ms for refresh \u2192 ${k7e(i) ? "kept stale" : "refreshed"} (fetch:${n})`;
            }
        }
        if (Dr().servedCatalogActive !== undefined || !xQn(AX(), o)) {
            return;
        }
        let l = i?.catalog ?? null;
        let b = i?.resolution ?? h?.resolution;
        let lane = ee(o, b);
        if (l === null) {
            if (i !== undefined) {
                E("surface_not_served", "server serves this surface no rows", {
                    ...lane,
                    ...timing
                }, o);
            } else if (k) {
                E("headless_held_off", "nothing cached, and a recent headless request failed, so this run does not ask again", lane, o);
            } else if (h !== undefined && De(h)) {
                Be(h, {
                    headless,
                    timing,
                    lane,
                    scope: o
                });
            } else {
                E(`${headless ? "headless_" : ""}fetch_${n ?? "none"}`, `nothing cached, ${s} produced no rows`, {
                    ...lane,
                    ...r,
                    ...timing
                }, o);
            }
            return;
        }
        if (o6e(l).length === 0) {
            E(hRe(l).length === 0 ? "no_selectable_rows" : "no_offered_rows", `served rows hold no model this build offers (${Bk(l).length} rows via ${s})`, {
                ...lane,
                ...timing
            }, o);
            return;
        }
        let y = i !== undefined && k7e(i);
        jvs(l, i?.fetchedAt, y, {
            route: aMe(o),
            credential: Kme(o),
            organizationUuid: i?.organizationUuid,
            resolution: i?.resolution
        });
        g("model_catalog_primary", {
            decision: d("served"),
            ...lane,
            ...timing
        });
        t(`[servedCatalog] primary: using served rows (${Bk(l).length} rows via ${s} over the ${aMe(o)} route${Ue(Kme(o))}, fetched ${Math.max(0, Math.round((Date.now() - (i?.fetchedAt ?? Date.now())) / 1000))}s ago${y ? ", stale" : ""}); the served list replaces the compiled picker for this session`);
    } catch (error) {
        c(error);
        if (Dr().servedCatalogActive === undefined && AEe() === "primary") {
            E("exception", "exception");
        }
    }
}
async function RUo() {}
function Le() {
    return false;
}
function Te(e) {}
function Q(e) {
    let fetch_reason = pe(e?.fetchReason);
    let http_status = e?.httpStatus;
    return {
        ...fetch_reason !== undefined && {
            fetch_reason
        },
        ...http_status !== undefined && {
            http_status
        }
    };
}
function ee(e, o) {
    let a = aMe(e);
    return {
        route: d(a),
        credential: d(Kme(e)),
        auth_kind: d(Sze()),
        ...a === "orgless" && {
            resolution: d(o ?? "unknown")
        }
    };
}
function Ue(e) {
    switch(e){
        case "oauth":
            return "";
        case "api_key":
            return " with the API key";
        case "profile":
            return " with the Console profile";
        case "federation":
            return " with the federation credential";
    }
}
function te(e) {
    return {
        route: aMe(e),
        credential: Kme(e)
    };
}
async function X(e, o) {
    let { budgetMs } = o;
    let i = performance.now();
    let outcome = await Ut(e, budgetMs, `served catalog ${o.wait}`).catch(()=>{});
    if (outcome === undefined) {
        e.then((r)=>$e(r, o)).catch((r)=>c(r));
    }
    let fetch_ms = outcome?.fetchMs;
    J(outcome === undefined ? "warn" : "info", "model_catalog_refresh_wait", {
        budget_ms: budgetMs,
        waited_ms: Math.round(performance.now() - i),
        timed_out: outcome === undefined,
        first_fetch: o.wait === "first_fetch"
    });
    return {
        outcome,
        timing: {
            wait_ms: Math.round(performance.now() - i),
            wait_budget_ms: budgetMs,
            wait_timed_out: outcome === undefined,
            ...fetch_ms !== undefined && {
                fetch_ms
            },
            startup_ms: Math.round(i)
        }
    };
}
function $e(e, { wait, headless, budgetMs, scope }) {
    let n = e.fetchStatus === "error" || e.fetchStatus === "skipped";
    let r = {
        wait: d(wait),
        headless,
        wait_budget_ms: budgetMs,
        ...ee(scope, e.resolution),
        ...e.fetchMs !== undefined && {
            fetch_ms: e.fetchMs
        },
        fetch_status: d(e.fetchStatus),
        ...Q(e),
        cache_written: !n && e.fetchStatus !== "cache_fresh" && e.fetchStatus !== "cache_only" && e.entry !== undefined
    };
    if (n) {
        f("model_catalog_late_fetch", `fetch_${e.fetchStatus}`, r);
    } else {
        g("model_catalog_late_fetch", r);
    }
    t(`[servedCatalog] ${wait} settled after its ${budgetMs}ms wait: fetch:${e.fetchStatus}, request took ${e.fetchMs ?? "?"}ms`);
}
function De(e) {
    return M(e.fetchReason);
}
const Ie = {
    not_permitted: "credential_scope",
    ip_restricted: "ip_restricted",
    lane_unavailable: "lane_unavailable"
};
function Be(e, { headless, timing, lane, scope }) {
    let n = Ie[e.fetchReason];
    hho(n, te(scope));
    g("model_catalog_primary", {
        decision: d("off"),
        off_reason: d(n),
        ...oe(n),
        headless,
        ...lane,
        ...e.httpStatus !== undefined && {
            http_status: e.httpStatus
        },
        ...e.errorCode !== undefined && {
            refusal_code: d(e.errorCode)
        },
        ...timing
    });
    let r = `${e.httpStatus ?? "?"}${e.errorCode !== undefined ? ` ${e.errorCode}` : ""}`;
    t(`[servedCatalog] primary: served rows unavailable (${U(e.fetchReason)}: ${r}); using compiled behavior`);
}
function E(e, o, a, i, s) {
    hho(e, {
        ...i !== undefined && te(i),
        ...s !== undefined && {
            organizationUuid: s
        }
    });
    f("model_catalog_primary", e, {
        ...oe(e),
        ...a
    });
    t(`[servedCatalog] primary: served rows unavailable (${o}); using compiled behavior`);
}
function oe(e) {
    return {};
}
const ae = {
    $schema: "https://downloads.claude.ai/model-catalog/v1/schema.json",
    schema_version: 1,
    version: 1893,
    issued_at: "2026-10-09T01:05:57Z",
    expires_at: "2026-10-16T01:05:57Z",
    key_id: "claude-code-release-signing-key",
    surfaces: {
        cc: {
            model_selector_state: [
                {
                    id: "cc",
                    model: "claude-opus-5",
                    thinking: {
                        type: "effort",
                        effort: "high"
                    },
                    thinking_by_model: [
                        {
                            id: "claude-fable-5-1",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-opus-5-5",
                            thinking: {
                                type: "effort",
                                effort: "medium"
                            }
                        },
                        {
                            id: "claude-sonnet-5-5",
                            thinking: {
                                type: "effort",
                                effort: "medium"
                            }
                        },
                        {
                            id: "claude-haiku-5-5",
                            thinking: {
                                type: "effort",
                                effort: "medium"
                            }
                        },
                        {
                            id: "claude-fable-5",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-opus-5",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-opus-4-8",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-opus-4-7",
                            thinking: {
                                type: "effort",
                                effort: "xhigh"
                            }
                        },
                        {
                            id: "claude-opus-4-6",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-sonnet-5",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-sonnet-4-6",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        }
                    ],
                    selection_source: "global_default"
                }
            ],
            model_selector_config: [
                {
                    id: "cc",
                    models: [
                        {
                            id: "claude-opus-5-5",
                            name: "Opus 5.5",
                            short_name: "Opus",
                            description: "For complex work and everyday tasks",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            min_claude_code_version: "2.1.280",
                            quick_select: true,
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "medium",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-sonnet-5-5",
                            name: "Sonnet 5.5",
                            short_name: "Sonnet",
                            description: "Most efficient for simpler tasks",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            quick_select: true,
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "medium",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "sonnet"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-fable-5-1",
                            name: "Fable 5.1",
                            short_name: "Fable",
                            description: "For your toughest challenges",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            min_claude_code_version: "2.1.251",
                            quick_select: true,
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "fable"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-haiku-5-5",
                            name: "Haiku 5.5",
                            short_name: "Haiku",
                            description: "Fastest for quick answers",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            quick_select: true,
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "medium",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "haiku"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-haiku-4-5-20251001",
                            name: "Haiku 4.5",
                            short_name: "Haiku",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "none"
                            },
                            auto_permission_mode: "unavailable",
                            runtime: {
                                max_input_tokens: 200000,
                                max_output_tokens: 64000,
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 1568,
                                    max_height: 1568,
                                    max_image_tokens: 1568
                                },
                                family: "haiku"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-sonnet-5",
                            name: "Sonnet 5",
                            short_name: "Sonnet",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "sonnet"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-5",
                            name: "Opus 5",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            fast_mode: {
                                type: "toggle",
                                name: "Fast mode",
                                options: [
                                    {
                                        id: "fast",
                                        name: "Enable fast mode",
                                        selector_label: "Fast"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-fable-5",
                            name: "Fable 5",
                            short_name: "Fable",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "fable"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-4-8",
                            name: "Opus 4.8",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            fast_mode: {
                                type: "toggle",
                                name: "Fast mode",
                                options: [
                                    {
                                        id: "fast",
                                        name: "Enable fast mode",
                                        selector_label: "Fast"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-4-7",
                            name: "Opus 4.7",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "xhigh",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-4-6",
                            name: "Opus 4.6",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            fast_mode: {
                                type: "toggle",
                                name: "Fast mode",
                                options: [
                                    {
                                        id: "fast",
                                        name: "Enable fast mode",
                                        selector_label: "Fast"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 1568,
                                    max_height: 1568,
                                    max_image_tokens: 1568
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-sonnet-4-6",
                            name: "Sonnet 4.6",
                            short_name: "Sonnet",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 1568,
                                    max_height: 1568,
                                    max_image_tokens: 1568
                                },
                                family: "sonnet"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-4-1-20250805",
                            name: "Opus 4.1",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "none"
                            },
                            auto_permission_mode: "unavailable",
                            runtime: {
                                max_input_tokens: 200000,
                                max_output_tokens: 32000,
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 1568,
                                    max_height: 1568,
                                    max_image_tokens: 1568
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "bedrock",
                                "vertex"
                            ]
                        }
                    ],
                    settings_vocabulary: {
                        create_mode: {
                            default: 1
                        },
                        effort_level: {
                            high: 3,
                            low: 1,
                            max: 5,
                            medium: 2,
                            xhigh: 4
                        },
                        thinking_mode: {
                            auto: 2,
                            extended: 1,
                            off: 3
                        }
                    },
                    provider_alias_targets: {
                        fable: {
                            default: "claude-fable-5-1",
                            per_provider: {
                                gateway: "claude-fable-5"
                            }
                        },
                        haiku: {
                            default: "claude-haiku-4-5-20251001"
                        },
                        opus: {
                            default: "claude-opus-5",
                            per_provider: {
                                anthropic_aws: "claude-opus-5",
                                bedrock: "claude-opus-5",
                                foundry: "claude-opus-4-6",
                                gateway: "claude-opus-4-7",
                                mantle: "claude-opus-5",
                                vertex: "claude-opus-5"
                            }
                        },
                        sonnet: {
                            default: "claude-sonnet-5",
                            per_provider: {
                                anthropic_aws: "claude-sonnet-4-6",
                                gateway: "claude-sonnet-4-6"
                            }
                        }
                    }
                }
            ]
        },
        ccd: {
            model_selector_state: [
                {
                    id: "ccd",
                    model: "claude-opus-5",
                    thinking: {
                        type: "effort",
                        effort: "high"
                    },
                    thinking_by_model: [
                        {
                            id: "claude-fable-5-1",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-opus-5-5",
                            thinking: {
                                type: "effort",
                                effort: "medium"
                            }
                        },
                        {
                            id: "claude-sonnet-5-5",
                            thinking: {
                                type: "effort",
                                effort: "medium"
                            }
                        },
                        {
                            id: "claude-haiku-5-5",
                            thinking: {
                                type: "effort",
                                effort: "medium"
                            }
                        },
                        {
                            id: "claude-fable-5",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-opus-5",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-opus-4-8",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-opus-4-7",
                            thinking: {
                                type: "effort",
                                effort: "xhigh"
                            }
                        },
                        {
                            id: "claude-opus-4-6",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-sonnet-5",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-sonnet-4-6",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        }
                    ],
                    selection_source: "global_default"
                }
            ],
            model_selector_config: [
                {
                    id: "ccd",
                    models: [
                        {
                            id: "claude-opus-5-5",
                            name: "Opus 5.5",
                            short_name: "Opus",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            min_claude_code_version: "2.1.280",
                            quick_select: true,
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "medium",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-sonnet-5-5",
                            name: "Sonnet 5.5",
                            short_name: "Sonnet",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            quick_select: true,
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "medium",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "sonnet"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-fable-5-1",
                            name: "Fable 5.1",
                            short_name: "Fable",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            min_claude_code_version: "2.1.251",
                            quick_select: true,
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "fable"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-haiku-5-5",
                            name: "Haiku 5.5",
                            short_name: "Haiku",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            quick_select: true,
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "medium",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "haiku"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-haiku-4-5-20251001",
                            name: "Haiku 4.5",
                            short_name: "Haiku",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "none"
                            },
                            auto_permission_mode: "unavailable",
                            runtime: {
                                max_input_tokens: 200000,
                                max_output_tokens: 64000,
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 1568,
                                    max_height: 1568,
                                    max_image_tokens: 1568
                                },
                                family: "haiku"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-sonnet-5",
                            name: "Sonnet 5",
                            short_name: "Sonnet",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "sonnet"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-5",
                            name: "Opus 5",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            fast_mode: {
                                type: "toggle",
                                name: "Fast mode",
                                options: [
                                    {
                                        id: "fast",
                                        name: "Enable fast mode",
                                        selector_label: "Fast"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-fable-5",
                            name: "Fable 5",
                            short_name: "Fable",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "fable"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-4-8",
                            name: "Opus 4.8",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            fast_mode: {
                                type: "toggle",
                                name: "Fast mode",
                                options: [
                                    {
                                        id: "fast",
                                        name: "Enable fast mode",
                                        selector_label: "Fast"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-4-7",
                            name: "Opus 4.7",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "xhigh",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-4-6",
                            name: "Opus 4.6",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            fast_mode: {
                                type: "toggle",
                                name: "Fast mode",
                                options: [
                                    {
                                        id: "fast",
                                        name: "Enable fast mode",
                                        selector_label: "Fast"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 1568,
                                    max_height: 1568,
                                    max_image_tokens: 1568
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-sonnet-4-6",
                            name: "Sonnet 4.6",
                            short_name: "Sonnet",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 1568,
                                    max_height: 1568,
                                    max_image_tokens: 1568
                                },
                                family: "sonnet"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-4-1-20250805",
                            name: "Opus 4.1",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "none"
                            },
                            auto_permission_mode: "unavailable",
                            runtime: {
                                max_input_tokens: 200000,
                                max_output_tokens: 32000,
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 1568,
                                    max_height: 1568,
                                    max_image_tokens: 1568
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "bedrock",
                                "vertex"
                            ]
                        }
                    ],
                    settings_vocabulary: {
                        create_mode: {
                            default: 1
                        },
                        effort_level: {
                            high: 3,
                            low: 1,
                            max: 5,
                            medium: 2,
                            xhigh: 4
                        },
                        thinking_mode: {
                            auto: 2,
                            extended: 1,
                            off: 3
                        }
                    },
                    provider_alias_targets: {
                        fable: {
                            default: "claude-fable-5-1",
                            per_provider: {
                                gateway: "claude-fable-5"
                            }
                        },
                        haiku: {
                            default: "claude-haiku-4-5-20251001"
                        },
                        opus: {
                            default: "claude-opus-5",
                            per_provider: {
                                anthropic_aws: "claude-opus-5",
                                bedrock: "claude-opus-5",
                                foundry: "claude-opus-4-6",
                                gateway: "claude-opus-4-7",
                                mantle: "claude-opus-5",
                                vertex: "claude-opus-5"
                            }
                        },
                        sonnet: {
                            default: "claude-sonnet-5",
                            per_provider: {
                                anthropic_aws: "claude-sonnet-4-6",
                                gateway: "claude-sonnet-4-6"
                            }
                        }
                    }
                }
            ]
        },
        ccr: {
            model_selector_state: [
                {
                    id: "ccr",
                    model: "claude-opus-5",
                    thinking: {
                        type: "effort",
                        effort: "high"
                    },
                    thinking_by_model: [
                        {
                            id: "claude-fable-5-1",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-opus-5-5",
                            thinking: {
                                type: "effort",
                                effort: "medium"
                            }
                        },
                        {
                            id: "claude-sonnet-5-5",
                            thinking: {
                                type: "effort",
                                effort: "medium"
                            }
                        },
                        {
                            id: "claude-haiku-5-5",
                            thinking: {
                                type: "effort",
                                effort: "medium"
                            }
                        },
                        {
                            id: "claude-fable-5",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-opus-5",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-opus-4-8",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-opus-4-7",
                            thinking: {
                                type: "effort",
                                effort: "xhigh"
                            }
                        },
                        {
                            id: "claude-opus-4-6",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-sonnet-5",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        },
                        {
                            id: "claude-sonnet-4-6",
                            thinking: {
                                type: "effort",
                                effort: "high"
                            }
                        }
                    ],
                    selection_source: "global_default"
                }
            ],
            model_selector_config: [
                {
                    id: "ccr",
                    models: [
                        {
                            id: "claude-opus-5-5",
                            name: "Opus 5.5",
                            short_name: "Opus",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            min_claude_code_version: "2.1.280",
                            quick_select: true,
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "medium",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-sonnet-5-5",
                            name: "Sonnet 5.5",
                            short_name: "Sonnet",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            quick_select: true,
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "medium",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "sonnet"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-fable-5-1",
                            name: "Fable 5.1",
                            short_name: "Fable",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            min_claude_code_version: "2.1.251",
                            quick_select: true,
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "fable"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-haiku-5-5",
                            name: "Haiku 5.5",
                            short_name: "Haiku",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            quick_select: true,
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "medium",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "haiku"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-haiku-4-5-20251001",
                            name: "Haiku 4.5",
                            short_name: "Haiku",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "none"
                            },
                            auto_permission_mode: "unavailable",
                            runtime: {
                                max_input_tokens: 200000,
                                max_output_tokens: 64000,
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 1568,
                                    max_height: 1568,
                                    max_image_tokens: 1568
                                },
                                family: "haiku"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-sonnet-5",
                            name: "Sonnet 5",
                            short_name: "Sonnet",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "sonnet"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-5",
                            name: "Opus 5",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            fast_mode: {
                                type: "toggle",
                                name: "Fast mode",
                                options: [
                                    {
                                        id: "fast",
                                        name: "Enable fast mode",
                                        selector_label: "Fast"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-fable-5",
                            name: "Fable 5",
                            short_name: "Fable",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "fable"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-4-8",
                            name: "Opus 4.8",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            fast_mode: {
                                type: "toggle",
                                name: "Fast mode",
                                options: [
                                    {
                                        id: "fast",
                                        name: "Enable fast mode",
                                        selector_label: "Fast"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-4-7",
                            name: "Opus 4.7",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "xhigh",
                                    "max"
                                ],
                                default_effort: "xhigh",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 2576,
                                    max_height: 2576,
                                    max_image_tokens: 4784
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-opus-4-6",
                            name: "Opus 4.6",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            fast_mode: {
                                type: "toggle",
                                name: "Fast mode",
                                options: [
                                    {
                                        id: "fast",
                                        name: "Enable fast mode",
                                        selector_label: "Fast"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 1568,
                                    max_height: 1568,
                                    max_image_tokens: 1568
                                },
                                family: "opus"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        },
                        {
                            id: "claude-sonnet-4-6",
                            name: "Sonnet 4.6",
                            short_name: "Sonnet",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ]
                            },
                            runtime: {
                                max_input_tokens: 1000000,
                                max_output_tokens: 128000,
                                effort_levels: [
                                    "low",
                                    "medium",
                                    "high",
                                    "max"
                                ],
                                default_effort: "high",
                                capabilities: [
                                    "compass",
                                    "gsuite_tools",
                                    "mm_images",
                                    "mm_pdf",
                                    "web_search"
                                ],
                                image_limits: {
                                    max_width: 1568,
                                    max_height: 1568,
                                    max_image_tokens: 1568
                                },
                                family: "sonnet"
                            },
                            offered_on: [
                                "first_party",
                                "anthropic_aws",
                                "bedrock",
                                "vertex",
                                "foundry",
                                "mantle",
                                "gateway"
                            ]
                        }
                    ],
                    settings_vocabulary: {
                        create_mode: {
                            default: 1
                        },
                        effort_level: {
                            high: 3,
                            low: 1,
                            max: 5,
                            medium: 2,
                            xhigh: 4
                        },
                        thinking_mode: {
                            auto: 2,
                            extended: 1,
                            off: 3
                        }
                    },
                    provider_alias_targets: {
                        fable: {
                            default: "claude-fable-5-1",
                            per_provider: {
                                gateway: "claude-fable-5"
                            }
                        },
                        haiku: {
                            default: "claude-haiku-4-5-20251001"
                        },
                        opus: {
                            default: "claude-opus-5",
                            per_provider: {
                                anthropic_aws: "claude-opus-5",
                                bedrock: "claude-opus-5",
                                foundry: "claude-opus-4-6",
                                gateway: "claude-opus-4-7",
                                mantle: "claude-opus-5",
                                vertex: "claude-opus-5"
                            }
                        },
                        sonnet: {
                            default: "claude-sonnet-5",
                            per_provider: {
                                anthropic_aws: "claude-sonnet-4-6",
                                gateway: "claude-sonnet-4-6"
                            }
                        }
                    }
                }
            ]
        },
        chat: {
            model_selector_state: [
                {
                    id: "chat",
                    model: "claude-sonnet-4-6",
                    thinking: {
                        type: "effort_and_mode",
                        effort: "low",
                        mode: "off"
                    },
                    thinking_by_model: [
                        {
                            id: "claude-fable-5-1",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "medium",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-opus-5-5",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "medium",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-sonnet-5-5",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "medium",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-haiku-5-5",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "medium",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-fable-5",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "high",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-opus-5",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "high",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-opus-4-8",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "high",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-opus-4-7",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "xhigh",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-opus-4-6",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "medium",
                                mode: "extended"
                            }
                        },
                        {
                            id: "claude-sonnet-5",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "medium",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-sonnet-4-6",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "low",
                                mode: "off"
                            }
                        },
                        {
                            id: "claude-haiku-4-5-20251001",
                            thinking: {
                                type: "mode",
                                mode: "extended"
                            }
                        }
                    ],
                    selection_source: "global_default"
                }
            ],
            model_selector_config: [
                {
                    id: "chat",
                    models: [
                        {
                            id: "claude-fable-5-1",
                            name: "Fable 5.1",
                            short_name: "Fable",
                            description: "For your toughest challenges",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    }
                                ]
                            },
                            hard_limit: 950000,
                            voice_model: "claude-opus-5",
                            min_claude_code_version: "2.1.251",
                            quick_select: true
                        },
                        {
                            id: "claude-opus-5-5",
                            name: "Opus 5.5",
                            short_name: "Opus",
                            description: "For complex work and everyday tasks",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    }
                                ]
                            },
                            hard_limit: 950000,
                            supports_fast_mode: true,
                            voice_model: "claude-opus-5",
                            min_claude_code_version: "2.1.280",
                            quick_select: true
                        },
                        {
                            id: "claude-sonnet-5-5",
                            name: "Sonnet 5.5",
                            short_name: "Sonnet",
                            description: "Most efficient for simpler tasks",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    }
                                ],
                                always_on: true
                            },
                            hard_limit: 950000,
                            voice_model: "claude-sonnet-5",
                            quick_select: true
                        },
                        {
                            id: "claude-haiku-5-5",
                            name: "Haiku 5.5",
                            short_name: "Haiku",
                            description: "Fastest for quick answers",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    }
                                ],
                                always_on: true
                            },
                            hard_limit: 950000,
                            voice_model: "claude-haiku-4-5-20251001",
                            quick_select: true
                        },
                        {
                            id: "claude-fable-5",
                            name: "Fable 5",
                            short_name: "Fable",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    }
                                ]
                            },
                            hard_limit: 449000,
                            voice_model: "claude-opus-5"
                        },
                        {
                            id: "claude-opus-5",
                            name: "Opus 5",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    }
                                ],
                                always_on: true
                            },
                            hard_limit: 950000,
                            supports_fast_mode: true
                        },
                        {
                            id: "claude-opus-4-8",
                            name: "Opus 4.8",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            hard_limit: 950000,
                            supports_fast_mode: true,
                            voice_model: "claude-opus-5"
                        },
                        {
                            id: "claude-opus-4-7",
                            name: "Opus 4.7",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            hard_limit: 449000,
                            voice_model: "claude-opus-5"
                        },
                        {
                            id: "claude-opus-4-6",
                            name: "Opus 4.6",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "extended",
                                        name: "Extended",
                                        description: "Always uses deep reasoning"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            hard_limit: 449000,
                            supports_fast_mode: true,
                            voice_model: "claude-opus-5"
                        },
                        {
                            id: "claude-sonnet-5",
                            name: "Sonnet 5",
                            short_name: "Sonnet",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            hard_limit: 950000
                        },
                        {
                            id: "claude-sonnet-4-6",
                            name: "Sonnet 4.6",
                            short_name: "Sonnet",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            hard_limit: 449000,
                            voice_model: "claude-sonnet-5"
                        },
                        {
                            id: "claude-haiku-4-5-20251001",
                            name: "Haiku 4.5",
                            short_name: "Haiku",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "mode",
                                mode_options: [
                                    {
                                        id: "extended",
                                        name: "Extended",
                                        description: "Always uses deep reasoning"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            hard_limit: 190000,
                            auto_permission_mode: "unavailable"
                        },
                        {
                            id: "claude-opus-4-5-20251101",
                            name: "Opus 4.5",
                            short_name: "Opus",
                            section: "deprecated",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "extended",
                                        name: "Extended",
                                        description: "Always uses deep reasoning"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            hard_limit: 190000,
                            auto_permission_mode: "unavailable",
                            voice_model: "claude-opus-5",
                            disabled: true
                        }
                    ],
                    settings_vocabulary: {
                        create_mode: {
                            default: 1
                        },
                        effort_level: {
                            high: 3,
                            low: 1,
                            max: 5,
                            medium: 2,
                            xhigh: 4
                        },
                        thinking_mode: {
                            auto: 2,
                            extended: 1,
                            off: 3
                        }
                    }
                }
            ]
        },
        cowork: {
            model_selector_state: [
                {
                    id: "cowork",
                    model: "claude-sonnet-4-6",
                    thinking: {
                        type: "effort_and_mode",
                        effort: "medium",
                        mode: "auto"
                    },
                    thinking_by_model: [
                        {
                            id: "claude-fable-5-1",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "medium",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-opus-5-5",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "medium",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-sonnet-5-5",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "medium",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-haiku-5-5",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "medium",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-fable-5",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "high",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-opus-5",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "high",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-opus-4-8",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "high",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-opus-4-7",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "xhigh",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-opus-4-6",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "medium",
                                mode: "extended"
                            }
                        },
                        {
                            id: "claude-sonnet-5",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "high",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-sonnet-4-6",
                            thinking: {
                                type: "effort_and_mode",
                                effort: "medium",
                                mode: "auto"
                            }
                        },
                        {
                            id: "claude-haiku-4-5-20251001",
                            thinking: {
                                type: "mode",
                                mode: "extended"
                            }
                        }
                    ],
                    selection_source: "global_default"
                }
            ],
            model_selector_config: [
                {
                    id: "cowork",
                    models: [
                        {
                            id: "claude-fable-5-1",
                            name: "Fable 5.1",
                            short_name: "Fable",
                            description: "For your toughest challenges",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    }
                                ]
                            },
                            hard_limit: 950000,
                            min_claude_code_version: "2.1.251",
                            quick_select: true
                        },
                        {
                            id: "claude-opus-5-5",
                            name: "Opus 5.5",
                            short_name: "Opus",
                            description: "For complex work and everyday tasks",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    }
                                ]
                            },
                            hard_limit: 950000,
                            supports_fast_mode: true,
                            min_claude_code_version: "2.1.280",
                            quick_select: true
                        },
                        {
                            id: "claude-sonnet-5-5",
                            name: "Sonnet 5.5",
                            short_name: "Sonnet",
                            description: "Most efficient for simpler tasks",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    }
                                ],
                                always_on: true
                            },
                            hard_limit: 950000,
                            quick_select: true
                        },
                        {
                            id: "claude-haiku-5-5",
                            name: "Haiku 5.5",
                            short_name: "Haiku",
                            description: "Fastest for quick answers",
                            section: "main",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    }
                                ],
                                always_on: true
                            },
                            hard_limit: 950000,
                            quick_select: true
                        },
                        {
                            id: "claude-fable-5",
                            name: "Fable 5",
                            short_name: "Fable",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    }
                                ]
                            },
                            hard_limit: 449000
                        },
                        {
                            id: "claude-opus-5",
                            name: "Opus 5",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    }
                                ],
                                always_on: true
                            },
                            hard_limit: 950000,
                            supports_fast_mode: true
                        },
                        {
                            id: "claude-opus-4-8",
                            name: "Opus 4.8",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            hard_limit: 950000,
                            supports_fast_mode: true
                        },
                        {
                            id: "claude-opus-4-7",
                            name: "Opus 4.7",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            hard_limit: 449000
                        },
                        {
                            id: "claude-opus-4-6",
                            name: "Opus 4.6",
                            short_name: "Opus",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "extended",
                                        name: "Extended",
                                        description: "Always uses deep reasoning"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            hard_limit: 449000,
                            supports_fast_mode: true
                        },
                        {
                            id: "claude-sonnet-5",
                            name: "Sonnet 5",
                            short_name: "Sonnet",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium"
                                    },
                                    {
                                        id: "high",
                                        name: "High",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "xhigh",
                                        name: "Extra"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            hard_limit: 950000
                        },
                        {
                            id: "claude-sonnet-4-6",
                            name: "Sonnet 4.6",
                            short_name: "Sonnet",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "effort_and_mode",
                                description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
                                effort_options: [
                                    {
                                        id: "low",
                                        name: "Low"
                                    },
                                    {
                                        id: "medium",
                                        name: "Medium",
                                        recommended: true,
                                        badge: {
                                            message: "Recommended",
                                            variant: "neutral"
                                        }
                                    },
                                    {
                                        id: "high",
                                        name: "High"
                                    },
                                    {
                                        id: "max",
                                        name: "Max",
                                        tooltip: {
                                            content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
                                        }
                                    }
                                ],
                                mode_options: [
                                    {
                                        id: "auto",
                                        name: "Thinking",
                                        description: "Can think for more complex tasks"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            hard_limit: 449000
                        },
                        {
                            id: "claude-haiku-4-5-20251001",
                            name: "Haiku 4.5",
                            short_name: "Haiku",
                            section: "overflow",
                            capabilities: {
                                compass: true,
                                gsuite_tools: true,
                                mm_images: true,
                                mm_pdf: true,
                                web_search: true
                            },
                            thinking: {
                                type: "mode",
                                mode_options: [
                                    {
                                        id: "extended",
                                        name: "Extended",
                                        description: "Always uses deep reasoning"
                                    },
                                    {
                                        id: "off",
                                        name: "Off"
                                    }
                                ]
                            },
                            hard_limit: 190000,
                            auto_permission_mode: "unavailable"
                        }
                    ],
                    settings_vocabulary: {
                        create_mode: {
                            default: 1
                        },
                        effort_level: {
                            high: 3,
                            low: 1,
                            max: 5,
                            medium: 2,
                            xhigh: 4
                        },
                        thinking_mode: {
                            auto: 2,
                            extended: 1,
                            off: 3
                        }
                    }
                }
            ]
        }
    }
};
const Ke = p(()=>{
    let e = wze().safeParse(ae);
    if (!e.success) {
        c(Error("published model-catalog seed does not parse"));
    }
    return {
        document: e.success ? e.data : null
    };
});
function se() {
    return Ke().document;
}
function ne() {
    return se()?.version ?? 0;
}
function re(e) {
    let o = se();
    if (o === null) {
        return null;
    }
    return w_t(o, e);
}
function ie(e) {
    return Bp(e).replace(/-\d{8}$/, "");
}
function de(catalog) {
    let o = new Set(Bk(catalog).map((i)=>ie(i.id)));
    let a = Nvs(catalog);
    for (let family of R7t){
        let seed = a[family];
        let compiled = U3e(family, "first_party");
        if (seed === undefined || compiled === undefined) {
            continue;
        }
        if (o.has(compiled)) {
            continue;
        }
        if (il(ie(seed)) === undefined) {
            continue;
        }
        return {
            family,
            compiled,
            seed
        };
    }
    return null;
}
async function P(source) {
    if (source.trust.kind === "untrusted") {
        return;
    }
    let o = await w3n(source.cacheKey);
    if (o === undefined) {
        return;
    }
    let a = await Ve(o, source);
    if (!a.ok) {
        if (a.reason === "unknown_key" && source.kind !== "hosted" && KWt()) {
            t("[publishedCatalog] cached document names a key this session does not hold while server-managed settings are unconfirmed; not using it this session, keeping the file");
            LUo(source.cacheKey);
            return;
        }
        t(`[publishedCatalog] cached document not re-established (${a.reason}); discarding`);
        await NNr(source.cacheKey);
        return;
    }
    let a_entry = a.entry;
    await v3n(source.cacheKey, a_entry, {
        verified: true
    });
    return a_entry;
}
async function Ve(e, source) {
    let o_trust = source.trust;
    if (o_trust.kind === "untrusted") {
        return {
            ok: false,
            reason: "untrusted_source"
        };
    }
    let documentBytes = qe(e.documentBytes);
    if (documentBytes === undefined) {
        return {
            ok: false,
            reason: "undecodable_bytes"
        };
    }
    let s = await v_t({
        documentBytes,
        sidecar: e.sidecar,
        roots: o_trust.roots
    });
    if (!s.ok) {
        return {
            ok: false,
            reason: s.reason
        };
    }
    let document = Ne(documentBytes);
    if (document === undefined) {
        return {
            ok: false,
            reason: "unparseable_document"
        };
    }
    let r = await D(document, source, undefined, s.rootId);
    if (r !== undefined) {
        return {
            ok: false,
            reason: r
        };
    }
    await cbt(source.cacheKey, document);
    return {
        ok: true,
        entry: {
            ...e,
            document,
            rootId: s.rootId,
            source: source.kind
        }
    };
}
function qe(documentBytes) {
    let o = Buffer.from(documentBytes, "base64");
    if (o.toString("base64") !== documentBytes) {
        return;
    }
    if (o.length > 0 && o.length <= CEe) {
        return new Uint8Array(o);
    }
}
function Ne(documentBytes) {
    let o = mt(Buffer.from(documentBytes).toString("utf8"), false);
    if (MQn(o) !== Z_n) {
        return;
    }
    let a = wze().safeParse(o);
    if (a.success) {
        return a.data;
    }
}
function We(e, o, rootId) {
    let i = e.kind === "hosted" || Q_n(rootId) === "compiled_roots";
    return Math.max(o?.document.version ?? 0, i ? ne() : 0);
}
async function D(e, o, a, rootId) {
    if (e.version < We(o, a, rootId)) {
        return "replayed_version";
    }
    if (e.version < await PSn(o.cacheKey)) {
        return "catalog_version_rollback";
    }
}
function lpn({ allowNetwork }) {
    let mode = T7e("published");
    if (!FFt()) {
        return Promise.resolve({
            mode,
            source: undefined,
            fetchStatus: "off",
            expired: false,
            entry: undefined
        });
    }
    let a = S_t();
    if (!a.ok) {
        return Promise.resolve({
            mode,
            source: undefined,
            fetchStatus: "invalid_url",
            expired: false,
            entry: undefined
        });
    }
    let { source } = a;
    let publishedCatalogRefreshes = Dr().publishedCatalogRefreshes;
    let n = publishedCatalogRefreshes.get(source.cacheKey);
    if (n) {
        return n;
    }
    let r = ze({
        mode,
        source,
        allowNetwork
    }).finally(()=>{
        publishedCatalogRefreshes.delete(source.cacheKey);
    });
    publishedCatalogRefreshes.set(source.cacheKey, r);
    return r;
}
async function ze({ mode, source, allowNetwork }) {
    let i = {
        mode,
        source
    };
    let s;
    let n = (r)=>r !== undefined && UNr(r.document);
    try {
        if (source.trust.kind === "untrusted") {
            t(`[publishedCatalog] ${source.kind} source skipped: ${source.trust.reason}`);
            return {
                ...i,
                fetchStatus: "skipped",
                fetchReason: source.trust.reason,
                expired: false,
                entry: undefined
            };
        }
        s = await P(source);
        if (s && !Uje(s)) {
            return {
                ...i,
                fetchStatus: "cache_fresh",
                expired: false,
                entry: s
            };
        }
        if (s && n(s)) {
            t("[publishedCatalog] cached document is past its expires_at; refreshing");
        }
        if (!allowNetwork && source.kind !== "file") {
            return {
                ...i,
                fetchStatus: "cache_only",
                expired: n(s),
                entry: s
            };
        }
        let result = await ebn(source, {
            etag: s?.etag
        });
        switch(result.status){
            case "not_modified":
                {
                    let m = s ? $Uo(s) : undefined;
                    if (m) {
                        await $Nr(source.cacheKey, m);
                    }
                    return {
                        ...i,
                        fetchStatus: "not_modified",
                        httpStatus: result.httpStatus,
                        expired: n(m),
                        entry: m
                    };
                }
            case "error":
                return {
                    ...i,
                    fetchStatus: "error",
                    fetchReason: result.reason,
                    httpStatus: result.httpStatus,
                    expired: n(s),
                    entry: s
                };
            case "ok":
                {
                    let m = await Ye({
                        source,
                        cached: s,
                        result
                    });
                    if (!m.ok) {
                        t(`[publishedCatalog] document rejected: ${m.reason}; keeping ${s ? "last good document" : "nothing"}`);
                        return {
                            ...i,
                            fetchStatus: "rejected",
                            fetchReason: m.reason,
                            httpStatus: result.httpStatus,
                            expired: n(s),
                            entry: s
                        };
                    }
                    let k = NUo({
                        document: m.document,
                        documentBytes: result.documentBytes,
                        sidecar: result.sidecar,
                        etag: result.etag,
                        source: source.kind,
                        rootId: m.rootId
                    });
                    await $Nr(source.cacheKey, k);
                    let expired = n(k);
                    t(`[publishedCatalog] accepted ${source.kind} document v${m.document.version} (verified by ${m.rootId})${expired ? ", past its expires_at" : ""}`);
                    return {
                        ...i,
                        fetchStatus: "ok",
                        httpStatus: result.httpStatus,
                        expired,
                        entry: k
                    };
                }
        }
    } catch (error) {
        c(error);
        return {
            ...i,
            fetchStatus: "error",
            fetchReason: "exception",
            expired: n(s),
            entry: s
        };
    }
}
async function Ye({ source, cached, result }) {
    let source_trust = source.trust;
    if (source_trust.kind === "untrusted") {
        return {
            ok: false,
            reason: "unsigned"
        };
    }
    if (!result.hasSidecar) {
        return {
            ok: false,
            reason: "unsigned"
        };
    }
    let s = await v_t({
        documentBytes: result.documentBytes,
        sidecar: result.sidecar,
        roots: source_trust.roots
    });
    if (!s.ok) {
        return {
            ok: false,
            reason: s.reason
        };
    }
    let n = mt(Buffer.from(result.documentBytes).toString("utf8"), false);
    let r = MQn(n);
    if (r === undefined) {
        return {
            ok: false,
            reason: "parse_failed"
        };
    }
    if (r !== Z_n) {
        return {
            ok: false,
            reason: "unsupported_schema"
        };
    }
    let m = wze().safeParse(n);
    if (!m.success) {
        return {
            ok: false,
            reason: "parse_failed"
        };
    }
    let m_data = m.data;
    let h = await D(m_data, source, cached, s.rootId);
    if (h !== undefined) {
        await FNr(m_data);
        return {
            ok: false,
            reason: h
        };
    }
    await cbt(source.cacheKey, m_data);
    return {
        ok: true,
        document: m_data,
        rootId: s.rootId
    };
}
const me = 2000;
async function ue({ allowNetwork }) {
    try {
        let o = kIt();
        if (o !== undefined && !k3n(o)) {
            return;
        }
        let a = Date.now() + (allowNetwork ? me : 0);
        let i = Ze() && T7e("published") === "primary" && await Xe(a);
        let s = {
            ...H(),
            ...i && {
                remote_settings_unconfirmed: true
            }
        };
        let n = E3n();
        if (n !== null) {
            if (i && n === "essential_traffic") {
                f("model_catalog_published", "essential_traffic", s);
                t("[publishedCatalog] primary: nonessential traffic is disabled and the server-managed catalog source is not yet confirmed by the server; published path off this session");
            }
            return;
        }
        let r = BNr();
        let m = S_t();
        if (!m.ok) {
            if (r === "primary") {
                R(m.reason, "configured catalog URL is unusable", s);
            }
            return;
        }
        let { source } = m;
        if (source.trust.kind === "untrusted") {
            if (r === "primary") {
                R(source.trust.reason, `custom source is untrusted (${source.trust.reason})`, s);
            }
            return;
        }
        if (r !== "primary") {
            await w3n(source.cacheKey);
            return;
        }
        let h = G6();
        let l = await P(source);
        let b = "cache";
        let u;
        let y = allowNetwork || source.kind === "file";
        let x = ()=>{
            if (allowNetwork) {
                return Math.max(0, a - Date.now());
            }
            return me;
        };
        if (l === undefined && y) {
            b = "fetch";
            let C = await Ut(lpn({
                allowNetwork
            }), x(), "published catalog first fetch").catch(()=>{});
            l = C?.entry;
            u = C === undefined ? "timeout" : C.fetchStatus;
            b = `fetch:${u}`;
        } else if (l !== undefined && y && Uje(l)) {
            let C = Date.now();
            let A = await Ut(lpn({
                allowNetwork
            }), x(), "published catalog stale refresh").catch(()=>{});
            u = A === undefined ? "timeout" : A.fetchStatus;
            l = A?.entry ?? l;
            b = `stale cache: waited ${Date.now() - C}ms for refresh \u2192 ${Uje(l) ? "kept stale" : "refreshed"} (fetch:${u})`;
        }
        if (kIt() !== o) {
            return;
        }
        let { catalog, kind } = Je(l, h);
        if (catalog === null) {
            if (l !== undefined) {
                R("surface_not_served", "document serves this surface no rows", s);
            } else if (y) {
                R(`fetch_${u ?? "none"}`, `nothing cached and no seed, ${b} produced no rows`, s);
            } else {
                R("headless_no_cache", "nothing cached, headless launch does not fetch, no seed", s);
            }
            return;
        }
        if (kind === "seed") {
            let C = de(catalog);
            if (C !== null) {
                R("seed_stale", `compiled seed resolves ${C.family} to ${C.seed}, this build to ${C.compiled}`, s);
                return;
            }
        }
        if (o6e(catalog).length === 0) {
            R(hRe(catalog).length === 0 ? "no_selectable_rows" : "no_offered_rows", `published rows hold no model this build offers (${Bk(catalog).length} rows via ${kind})`, s);
            return;
        }
        let O = l !== undefined && Uje(l);
        jwr(catalog, l?.fetchedAt, O);
        if (kind === "seed") {
            f("model_catalog_published", "seed", s);
        } else if (i) {
            f("model_catalog_published", "remote_settings_unconfirmed", H());
        } else {
            g("model_catalog_published", H());
        }
        t(`[publishedCatalog] primary: using ${kind} rows (${Bk(catalog).length} rows via ${b}${O ? ", stale" : ""})`);
    } catch (error) {
        c(error);
        let a = kIt();
        if ((a === undefined || k3n(a)) && BNr() === "primary") {
            R("exception", "exception", H());
        }
    }
}
function Je(e, o) {
    if (e !== undefined) {
        return {
            catalog: w_t(e.document, o),
            kind: e.source
        };
    }
    return {
        catalog: re(o),
        kind: "seed"
    };
}
async function Xe(e) {
    if (Qe()) {
        let o = e - Date.now();
        if (o > 0) {
            t(`[publishedCatalog] waiting up to ${o}ms for server-managed settings to be confirmed`);
            await et(o);
        }
    }
    if (!KWt()) {
        return false;
    }
    t("[publishedCatalog] server-managed settings name managed model-catalog source settings the server has not confirmed; deciding this session without them");
    return true;
}
function Ze() {
    let e = E3n();
    return e === null || e === "essential_traffic" && (GKo() || $b() === null);
}
function Qe() {
    if (!KA() || ay() || xP() !== undefined) {
        return false;
    }
    return KWt() || $b() === null;
}
async function et(e) {
    let o = ()=>{};
    let a = new Promise((resolve)=>{
        o = Tnn((s)=>{
            if (s !== undefined) {
                resolve();
            }
        });
        if (xP() !== undefined) {
            resolve();
        }
    });
    try {
        await Ge(a, e);
    } finally{
        o();
    }
}
function H() {
    return {
        auth_kind: d(Sze())
    };
}
function R(e, o, a) {
    jwr(null);
    f("model_catalog_published", e, a);
    t(`[publishedCatalog] primary: published rows unavailable (${o}); using compiled behavior`);
}
function cpn({ headless }) {
    let o = Dr();
    if (o.catalogDecision === undefined) {
        o.catalogDecision = tt(headless).catch((a)=>c(a));
    }
    return o.catalogDecision;
}
async function tt(headless) {
    await Z({
        headless
    });
    await ue({
        allowNetwork: !headless
    });
}
export { $Ft, ipn, S3n, apn, lpn, RUo, cpn };
