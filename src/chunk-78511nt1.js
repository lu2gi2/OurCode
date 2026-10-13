import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Et } from "/$bunfs/root/chunk-r3z1chqx.js";
import { cR, tN } from "/$bunfs/root/chunk-sfgejbsr.js";
import { rh, son, nu, Gl } from "/$bunfs/root/chunk-c56kpkt7.js";
import { rPt } from "/$bunfs/root/chunk-7jx57z43.js";
import { Ede } from "/$bunfs/root/chunk-5k3c7ad7.js";
import { Ko, zy } from "/$bunfs/root/chunk-7qc48pza.js";
const D = "2023-06-01";
function tPt(e) {
    return {
        Authorization: `Bearer ${e}`,
        "Content-Type": "application/json",
        "anthropic-version": D,
        "anthropic-client-platform": zy(),
        "User-Agent": Ko()
    };
}
function Pat(e) {
    return e !== null && typeof e === "object" && "terminal" in e && e.terminal === true;
}
function A(data) {
    if (data === null || typeof data !== "object" || !("error" in data) || data.error === null || typeof data.error !== "object") {
        return false;
    }
    let e_error = data.error;
    let r = "type" in e_error ? e_error.type : undefined;
    let f = "resource_type" in e_error ? e_error.resource_type : undefined;
    let o = "reason" in e_error ? e_error.reason : undefined;
    return r === "not_found_error" && f === "session_grouping" || o === "public_grouping_hosted_only" || o === "feature_disabled";
}
function U(status) {
    if (status === 401) {
        return "oauth_rejected";
    }
    if (status === 408 || status === 429 || status >= 500) {
        return "transient";
    }
    return "rejected";
}
async function nPt(e, n, title, f, tags, p, m, model, session_grouping_id, s, u) {
    let a = `${e}/v1/code/sessions`;
    let config = {
        cwd: m ?? se(),
        ...model && {
            model
        }
    };
    if (p && "gitRepoUrl" in p) {
        let { buildGitSessionContext } = await import("/$bunfs/root/chunk-fzajctya.js");
        let { sources, outcomes, report } = await buildGitSessionContext(p.gitRepoUrl, p.branch, p.defaultBranch);
        if (report.branchDropped && report.warnMessage) {
            let j = `${report.branchDropped}:${p.gitRepoUrl}:${p.branch}`;
            if (!s || s.lastKey !== j) {
                if (s) {
                    s.lastKey = j;
                }
                t(`[code-session] ${report.warnMessage}`);
            }
        } else if (s) {
            s.lastKey = null;
        }
        if (sources.length > 0 || outcomes.length > 0) {
            config.sources = sources;
            config.outcomes = outcomes;
            config.reuse_outcome_branches = true;
        }
    }
    let d;
    try {
        d = await At.post(a, {
            title,
            bridge: {},
            ...tags?.length && {
                tags
            },
            ...session_grouping_id && {
                session_grouping_id
            },
            config
        }, {
            headers: tPt(n),
            timeout: f,
            validateStatus: (h)=>h < 500
        });
    } catch (error) {
        t(`[code-session] Session create request failed: ${l(error)}`);
        return null;
    }
    if (d.status !== 200 && d.status !== 201) {
        let h = cR(d.data);
        t(`[code-session] Session create failed ${d.status}${h ? `: ${h}` : ""}`);
        let detail = tN(d.data);
        if (d.status === 401) {
            u?.();
        }
        if (d.status >= 400 && d.status < 500 && A(d.data)) {
            return {
                terminal: true,
                reason: "grouping_rejected",
                status: d.status,
                detail
            };
        }
        switch(U(d.status)){
            case "oauth_rejected":
                return {
                    terminal: false,
                    reason: "oauth_rejected"
                };
            case "transient":
                return null;
            case "rejected":
                return {
                    terminal: true,
                    reason: "request_rejected",
                    status: d.status,
                    detail
                };
        }
    }
    let d_data = d.data;
    if (!d_data || typeof d_data !== "object" || !("session" in d_data) || !d_data.session || typeof d_data.session !== "object" || !("id" in d_data.session) || typeof d_data.session.id !== "string" || !d_data.session.id.startsWith("cse_") || !son(d_data.session.id)) {
        t(`[code-session] No usable session.id (cse_*) in response: ${_(d_data).slice(0, 200)}`);
        return {
            terminal: true,
            reason: "malformed_response",
            status: d.status,
            detail: undefined
        };
    }
    return d_data.session.id;
}
function ooe(e) {
    return e !== null && "terminal" in e && e.terminal === true;
}
function eN(e) {
    return typeof e === "object" && e !== null && "terminal" in e && e.terminal === false;
}
function soe(e) {
    let n = R(e);
    if (n !== undefined && "resource" in n) {
        let r = n.resource;
        if (r === "untrusted_device" || r === "session_stale_relogin") {
            return r;
        }
    }
}
function Rzs(e) {
    let n = R(e);
    if (n !== undefined && "resource" in n && n.resource === "untrusted_device" && "sub_reason" in n && n.sub_reason === "bound_unattested") {
        return "bound_unattested";
    }
}
function wde(e) {
    if (soe(e) === "untrusted_device") {
        let n = R(e);
        let subReason = n !== undefined && "sub_reason" in n ? n.sub_reason : undefined;
        if (subReason === undefined || subReason === null || subReason === "") {
            return {
                kind: "token_refused"
            };
        }
        if (typeof subReason !== "string") {
            return {
                kind: "unrecognized",
                subReason: `(${typeof subReason}, not a string)`
            };
        }
        switch(subReason){
            case "bound_unattested":
                return {
                    kind: "token_refused"
                };
            case "served_call_unsigned":
                return {
                    kind: "signature_wanted",
                    subReason
                };
            default:
                if (Ede(subReason)) {
                    return {
                        kind: "unrecognized",
                        subReason
                    };
                }
                t(`[code-session] a 403's sub_reason is too long or not snake_case, so a placeholder is passed on. As sent (${subReason.length} characters; cleaned, first 64): ${Et(subReason, 64)}`);
                return {
                    kind: "unrecognized",
                    subReason: "(string, too long or not snake_case)"
                };
        }
    }
}
function eQt(e) {
    return e.kind === "token_refused";
}
function Iat(e) {
    return e.kind !== "signature_wanted";
}
const x$n = {
    kind: "signature_wanted",
    subReason: "served_call_unsigned"
};
function wfo(e) {
    let n = R(e);
    if (n === undefined) {
        return;
    }
    let r = {
        ...n
    };
    return {
        reason: w(r.reason),
        resource: w(r.resource),
        subReason: w(r.sub_reason)
    };
}
function w(e) {
    if (e === undefined || e === null || e === "") {
        return "";
    }
    if (typeof e === "string" && Ede(e)) {
        return e;
    }
}
function R(e) {
    if (e !== null && typeof e === "object" && "error" in e && e.error !== null && typeof e.error === "object") {
        return e.error;
    }
}
async function cbr(e, n, r, f, o, p, m) {
    if (!S(e, "/bridge")) {
        return {
            terminal: true,
            reason: "invalid_session_id"
        };
    }
    let b = `${n}/v1/code/sessions/${e}/bridge`;
    let headers = tPt(r);
    if (o) {
        headers["X-Trusted-Device-Token"] = o;
    }
    let s;
    try {
        s = await At.post(b, m === undefined ? {} : {
            expected_epoch: m.expectedEpoch
        }, {
            headers,
            timeout: f,
            validateStatus: (i)=>i < 500
        });
    } catch (error) {
        t(`[code-session] /bridge request failed: ${l(error)}`);
        return null;
    }
    if (s.status !== 200) {
        let i = cR(s.data);
        t(`[code-session] /bridge failed ${s.status}${i ? `: ${i}` : ""}`);
        if (s.status === 401) {
            p?.();
        }
        if (m !== undefined && s.status === 409) {
            let c = R(s.data);
            let h = m.expectedEpoch;
            let y = [
                x(c !== undefined && "expected_epoch" in c ? c.expected_epoch : undefined),
                x(c !== undefined && "actual_epoch" in c ? c.actual_epoch : undefined)
            ];
            m.onRefused(y.includes(h) ? y.find((v)=>v !== undefined && v > h) : undefined);
        }
        let source;
        if (s.status === 403) {
            let reason = soe(s.data);
            if (reason === "untrusted_device") {
                let refusal = wde(s.data);
                return {
                    terminal: true,
                    reason,
                    ...refusal && {
                        refusal
                    }
                };
            }
            if (reason) {
                return {
                    terminal: true,
                    reason
                };
            }
            source = rPt((h)=>s.headers?.[h]);
            t(`[code-session] /bridge 403 source=${source}`);
        }
        switch(U(s.status)){
            case "oauth_rejected":
                return {
                    terminal: false,
                    reason: "oauth_rejected"
                };
            case "transient":
                return null;
            case "rejected":
                return {
                    terminal: true,
                    reason: "request_rejected",
                    status: s.status,
                    ...source && {
                        source
                    }
                };
        }
    }
    let s_data = s.data;
    if (s_data === null || typeof s_data !== "object" || !("worker_jwt" in s_data) || typeof s_data.worker_jwt !== "string" || !("expires_in" in s_data) || typeof s_data.expires_in !== "number" || !("api_base_url" in s_data) || typeof s_data.api_base_url !== "string" || !("worker_epoch" in s_data)) {
        t(`[code-session] /bridge response malformed (need worker_jwt, expires_in, api_base_url, worker_epoch): ${_(s_data).slice(0, 200)}`);
        return {
            terminal: true,
            reason: "malformed_response",
            status: 200
        };
    }
    let worker_epoch = x(s_data.worker_epoch);
    if (worker_epoch === undefined) {
        t(`[code-session] /bridge worker_epoch invalid: ${_(s_data.worker_epoch)}`);
        return {
            terminal: true,
            reason: "malformed_response",
            status: 200
        };
    }
    return {
        worker_jwt: s_data.worker_jwt,
        api_base_url: s_data.api_base_url,
        expires_in: s_data.expires_in,
        worker_epoch,
        mcp_config: B(s_data),
        ...{}
    };
}
function S(e, n) {
    try {
        rh(e, "sessionId");
        return true;
    } catch (error) {
        t(`[code-session] ${n}: ${l(error)}`);
        return false;
    }
}
function k(e, n, r, f, o, p = "") {
    let m = o.trustedDeviceToken ? {
        "X-Trusted-Device-Token": o.trustedDeviceToken
    } : undefined;
    if (o.useV2) {
        let g = Gl(f);
        return {
            url: `${n}/v1/code/sessions/${g}${p}`,
            headers: {
                ...tPt(r),
                ...m
            },
            id: g
        };
    }
    if (!o.orgUUID) {
        t(`[code-session] ${e} ${f}: v1 compat path needs an org UUID`);
        return null;
    }
    let b = nu(f);
    return {
        url: `${n}/v1/sessions/${b}${p}`,
        headers: {
            ...tPt(r),
            "anthropic-beta": "ccr-byoc-2025-07-29",
            "x-organization-uuid": o.orgUUID,
            ...m
        },
        id: b
    };
}
async function xzs(e, n, r, f, o) {
    if (!S(r, "Get")) {
        return "invalid";
    }
    let p = k("Get", e, n, r, o);
    if (!p) {
        return "invalid";
    }
    let { url, headers, id } = p;
    try {
        let s = await At.get(url, {
            headers,
            timeout: f,
            validateStatus: (i)=>i < 500
        });
        if (s.status !== 200) {
            let i = cR(s.data);
            t(`[code-session] Get ${id} failed ${s.status}${i ? `: ${i}` : ""}`);
            return s.status;
        }
        if (!o.useV2) {
            let i = s.data;
            return {
                ...i,
                status: i?.status ?? i?.session_status,
                id: typeof i?.id === "string" ? i.id : id
            };
        }
        let u = s.data;
        let a = u?.response_shape ?? u?.session;
        if (a && typeof a.id === "string") {
            return {
                ...a,
                updated_at: "last_event_at" in a && typeof a.last_event_at === "string" ? a.last_event_at : undefined
            };
        }
        t(`[code-session] Get ${id}: no session.id in 200 response`);
        return s.status;
    } catch (error) {
        t(`[code-session] Get ${id} failed: ${l(error)}`);
        if (At.isAxiosError(error) && error.code === "ECONNABORTED") {
            return "timeout";
        }
        return "error";
    }
}
async function Pzs(e, n, r, f, o, p) {
    if (!S(r, "Update")) {
        return "invalid";
    }
    let m = k("Update", e, n, r, p);
    if (!m) {
        return "invalid";
    }
    let { url, headers, id } = m;
    let u = {
        headers,
        timeout: o,
        validateStatus: ()=>true
    };
    try {
        let a = p.useV2 ? await At.put(url, f, u) : await At.patch(url, f, u);
        if (a.status !== 200) {
            let i = cR(a.data);
            t(`[code-session] Update ${id} failed ${a.status}${i ? `: ${i}` : ""}`);
        }
        return a.status;
    } catch (error) {
        t(`[code-session] Update ${id} failed: ${l(error)}`);
        if (At.isAxiosError(error) && error.code === "ECONNABORTED") {
            return "timeout";
        }
        return "error";
    }
}
async function tQt(e, n, r, f, o) {
    return E("Archive", "/archive", e, n, r, f, o, "untrusted_device");
}
async function dbr(e, n, r, f, o) {
    return E("Unarchive", "/unarchive", e, n, r, f, o, "elevated_auth");
}
async function E(e, n, r, f, o, p, m, b) {
    if (!S(o, e)) {
        return "invalid";
    }
    let g = k(e, r, f, o, m, n);
    if (!g) {
        return "invalid";
    }
    let { url, headers, id } = g;
    try {
        let i = await At.post(url, {}, {
            headers,
            timeout: p,
            validateStatus: ()=>true
        });
        t(`[code-session] ${e} ${id} status=${i.status}`);
        if (i.status === 403) {
            let d = wde(i.data);
            if (d !== undefined) {
                if (b === "elevated_auth" && !Iat(d)) {
                    return "untrusted_device_no_enroll";
                }
                return "untrusted_device";
            }
            if (b === "elevated_auth" && soe(i.data) === "session_stale_relogin") {
                return "session_stale_relogin";
            }
        }
        return i.status;
    } catch (error) {
        t(`[code-session] ${e} ${id} failed: ${l(error)}`);
        if (At.isAxiosError(error) && error.code === "ECONNABORTED") {
            return "timeout";
        }
        return "error";
    }
}
function B(e) {
    if (!("mcp_config" in e)) {
        return;
    }
    let e_mcp_config = e.mcp_config;
    if (e_mcp_config !== null && typeof e_mcp_config === "object" && "content" in e_mcp_config && typeof e_mcp_config.content === "string" && e_mcp_config.content.length > 0) {
        return {
            content: e_mcp_config.content
        };
    }
}
function x(e) {
    let n = typeof e === "string" ? Number(e) : e;
    if (typeof n === "number" && Number.isSafeInteger(n)) {
        return n;
    }
}
export { tPt, Pat, nPt, ooe, eN, soe, Rzs, wde, eQt, Iat, x$n, wfo, cbr, xzs, Pzs, tQt, dbr };
