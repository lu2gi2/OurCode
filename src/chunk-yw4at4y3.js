import { QIt, Hks, k, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Zk, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Rh } from "/$bunfs/root/chunk-nj0630nv.js";
import { rs } from "/$bunfs/root/chunk-6dwnw6av.js";
import { fC, cf, ly } from "/$bunfs/root/chunk-55x53sfe.js";
import { Qg } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { Xs } from "/$bunfs/root/chunk-4jkyvhbj.js";
import { o, E, u, A } from "/$bunfs/root/chunk-smx21d0k.js";
const w = "tengu_atomic_ocean";
const L = "tengu_gzip_request_bodies";
const D = "tengu_gentle_hammock";
const j = "tengu_golden_popcorn";
const M = 4096;
const U = 1024;
const N = 604800000;
const H = 8192;
function Q(e) {
    if (e === "ccr_worker") {
        return k(D, false);
    }
    return k(w, false) || k(L, false);
}
function Pps() {
    let e = a.CLAUDE_CODE_GZIP_REQUEST_BODY_LEVEL ?? k(j, 0);
    if (Number.isInteger(e) && e >= 1 && e <= 9) {
        return e;
    }
}
function O(e) {
    if (e === "ccr_worker") {
        return a.CLAUDE_CODE_GZIP_CCR_REQUEST_BODIES;
    }
    return a.CLAUDE_CODE_GZIP_REQUEST_BODIES;
}
function Y(e) {
    if (e === "ccr_worker") {
        return U;
    }
    return M;
}
function Z(e) {
    if (a.ANTHROPIC_UNIX_SOCKET) {
        return "unix_socket";
    }
    if (cf() !== undefined && !ly(e)) {
        return "proxy";
    }
    let n = fC();
    if (n?.cert !== undefined || n?.key !== undefined) {
        return "mtls";
    }
    if (a.NODE_EXTRA_CA_CERTS) {
        let r = Qg();
        if (!(rs() || a.CLAUDE_CODE_ENTRYPOINT === "local-agent" && (r === undefined || r.NODE_EXTRA_CA_CERTS !== undefined))) {
            return "custom_ca";
        }
    }
}
function _Ct(e, n, r, s = "api") {
    if (!Rh(e)) {
        return;
    }
    let bodyChars = typeof n === "string" ? n.length : undefined;
    let l = O(s);
    if (l === false) {
        return {
            gzip: false,
            reason: "env_off",
            bodyChars
        };
    }
    if (!Zk()) {
        return {
            gzip: false,
            reason: "not_bun_runtime",
            bodyChars
        };
    }
    if (bodyChars === undefined) {
        return {
            gzip: false,
            reason: "non_string_body",
            bodyChars
        };
    }
    if (bodyChars < Y(s)) {
        return {
            gzip: false,
            reason: "below_min_size",
            bodyChars
        };
    }
    if (l === true) {
        if (Xs().gzipRequestBody.rejectedThisProcess) {
            return {
                gzip: false,
                reason: "latched_off",
                bodyChars
            };
        }
        return {
            gzip: true,
            bodyChars
        };
    }
    let reason = Z(e);
    if (reason !== undefined) {
        return {
            gzip: false,
            reason,
            bodyChars
        };
    }
    if (!Q(s)) {
        return {
            gzip: false,
            reason: "flag_off",
            bodyChars
        };
    }
    if (oe(r)) {
        return {
            gzip: false,
            reason: "latched_off",
            bodyChars
        };
    }
    return {
        gzip: true,
        bodyChars
    };
}
const J = p(()=>u({
        type: A("error"),
        error: u({
            type: o(),
            message: o()
        })
    }));
const v = p(()=>u({
        latchedAt: E().finite(),
        status: E()
    }));
const K = p(()=>u({
        error: o(),
        reason: o()
    }));
const W = [
    "The request body is not valid JSON",
    "Failed to parse request: could not parse request body as JSON"
];
const G = /^bad json: (?:invalid character |unexpected EOF$|unexpected end of JSON input$|EOF$)/;
function facts(e) {
    return {
        status: e.status,
        header: (n)=>e.headers.get(n) ?? undefined,
        bodyText: ()=>ee(e)
    };
}
function V(e) {
    return (e.header("request-id")?.startsWith("req_") ?? false) || e.header("cf-ray") !== undefined;
}
async function ee(e) {
    let n = e.clone().body?.getReader();
    if (!n) {
        return "";
    }
    let r = new TextDecoder;
    let s = "";
    let c = H;
    try {
        while(c > 0){
            let { done, value } = await n.read();
            if (done) {
                break;
            }
            let _ = value.subarray(0, c);
            c -= _.byteLength;
            s += r.decode(_, {
                stream: true
            });
        }
    } catch  {} finally{
        n.cancel().catch(()=>{});
    }
    return s;
}
function te(e) {
    let n;
    try {
        n = X(e);
    } catch  {
        return G.test(e.trimEnd());
    }
    let r = J().safeParse(n);
    if (r.success) {
        return W.some((c)=>r.data.error.message.startsWith(c));
    }
    let s = K().safeParse(n);
    return s.success && s.data.reason === "bad_json" && G.test(s.data.error);
}
async function q(e) {
    if (e.status !== 400 && e.status !== 403 && e.status !== 415) {
        return null;
    }
    if (!V(e)) {
        return "non_anthropic_rejection";
    }
    if (e.status === 400 && te(await e.bodyText())) {
        return "invalid_json_at_origin";
    }
    return null;
}
async function Oao(e) {
    if (e.ok) {
        return null;
    }
    return q(facts(e));
}
async function ne(e) {
    if (await q(e) !== null) {
        return "same_rejection";
    }
    if (e.header("request-id")?.startsWith("req_")) {
        return "api_response";
    }
    return "not_api_response";
}
function re() {
    let e;
    try {
        e = ce().gzipRequestBodiesLatchedOff;
    } catch  {
        return "unavailable";
    }
    if (e === undefined) {
        return;
    }
    let n = v().safeParse(e);
    if (n.success) {
        return n.data;
    }
    return "malformed";
}
function S(e, n) {
    Ae((r)=>{
        let s = v().safeParse(r.gzipRequestBodiesLatchedOff);
        if (s.success ? s.data.latchedAt === e : r.gzipRequestBodiesLatchedOff !== undefined) {
            return {
                ...r,
                gzipRequestBodiesLatchedOff: undefined
            };
        }
        return r;
    }, n);
}
function oe(e) {
    let gzipRequestBody = Xs().gzipRequestBody;
    if (gzipRequestBody.latchedOff) {
        return true;
    }
    if (gzipRequestBody.persistedLatchChecked) {
        return false;
    }
    let r = re();
    if (r === "unavailable") {
        return false;
    }
    gzipRequestBody.persistedLatchChecked = true;
    if (r === undefined) {
        return false;
    }
    if (r === "malformed") {
        S(undefined, e);
        i("tengu_gzip_request_body_latch_cleared", {
            reason: d("malformed")
        });
        return false;
    }
    let s = Date.now() - r.latchedAt;
    if (s >= 0 && s < N) {
        gzipRequestBody.latchedOff = true;
        gzipRequestBody.persistedLatchInEffect = true;
        return true;
    }
    S(r.latchedAt, e);
    i("tengu_gzip_request_body_latch_cleared", {
        reason: s < 0 ? d("malformed") : d("expired"),
        latchedStatus: r.status,
        latchedAgeHours: Math.max(0, Math.round(s / 3600000))
    });
    return false;
}
function h() {
    let gzipRequestBody = Xs().gzipRequestBody;
    gzipRequestBody.latchedOff = true;
    gzipRequestBody.rejectedThisProcess = true;
    gzipRequestBody.persistedLatchChecked = true;
}
function C({ persist, status, storageV5, rollout = "api" }) {
    h();
    let gzipRequestBody = Xs().gzipRequestBody;
    if (persist && !gzipRequestBody.persistedLatchInEffect && O(rollout) !== true) {
        gzipRequestBody.persistedLatchInEffect = true;
        Ae((l)=>({
                ...l,
                gzipRequestBodiesLatchedOff: {
                    latchedAt: Date.now(),
                    status
                }
            }), storageV5);
    }
    if (gzipRequestBody.persistedLatchInEffect) {
        return "persisted";
    }
    return "process";
}
function x(e, n) {
    switch(e){
        case "api":
            if (n === "fell_back") {
                f("api_gzip_request_body", "fell_back");
            } else if (Xs().once("gzip_request_body_ok")) {
                g("api_gzip_request_body");
            }
            return;
        case "ccr_worker":
            if (n === "fell_back") {
                f("ccr_worker_gzip_request_body", "fell_back");
            } else if (Xs().once("ccr_worker_gzip_request_body_ok")) {
                g("ccr_worker_gzip_request_body");
            }
            return;
        case "frame_publish":
            if (n === "fell_back") {
                f("artifact_publish_gzip_request_body", "fell_back");
            } else if (Xs().once("artifact_publish_gzip_request_body_ok")) {
                g("artifact_publish_gzip_request_body");
            }
            return;
    }
}
function Q8t(e = "api") {
    x(e, "sent");
}
function se(rollout, n) {
    if (rollout !== "ccr_worker") {
        return;
    }
    let ccrWorkerSkipReasonsLogged = Xs().gzipRequestBody.ccrWorkerSkipReasonsLogged;
    if (ccrWorkerSkipReasonsLogged.has(n.reason)) {
        return;
    }
    ccrWorkerSkipReasonsLogged.add(n.reason);
    i("tengu_gzip_request_body_skipped", {
        rollout: d(rollout),
        reason: d(n.reason),
        requestBodyChars: n.bodyChars
    });
}
function F({ rejection, status, viaCloudflare, retryOutcome, retryStatus, latched, bodyChars, rollout = "api" }) {
    x(rollout, "fell_back");
    t(`[API REQUEST] gzip request body rejected (rollout=${rollout} status=${status} kind=${rejection}); re-sent uncompressed \u2192 ${retryOutcome}${retryStatus !== undefined ? ` status=${retryStatus}` : ""}; gzip latched off: ${latched}`, {
        level: "warn"
    });
    i("tengu_gzip_request_body_fallback", {
        rollout: d(rollout),
        rejection: d(rejection),
        status,
        viaCloudflare,
        retryOutcome: d(retryOutcome),
        retryStatus,
        latched: d(latched),
        requestBodyChars: bodyChars
    });
}
async function T({ rejection, first, resend, facts, aborted, bodyChars, storageV5, rollout }) {
    let z = {
        rejection,
        status: first.status,
        viaCloudflare: first.header("cf-ray") !== undefined,
        bodyChars,
        rollout
    };
    let m;
    try {
        m = await resend();
    } catch (error) {
        F({
            ...z,
            retryOutcome: aborted() ? "aborted" : "network_error",
            retryStatus: undefined,
            latched: C({
                persist: false,
                status: first.status,
                storageV5,
                rollout
            })
        });
        throw error;
    }
    let R = facts(m);
    let retryOutcome = await ne(R);
    let latched = C({
        persist: rollout !== "ccr_worker" && rejection === "non_anthropic_rejection" && retryOutcome === "api_response",
        status: first.status,
        storageV5,
        rollout
    });
    F({
        ...z,
        retryOutcome,
        retryStatus: R.status,
        latched
    });
    return m;
}
async function Mao({ res, dispatch, finalInit, identityBody, clientRequestId, storageV5, rollout = "api" }) {
    let _ = await Oao(res);
    if (_ === null) {
        return res;
    }
    h();
    res.body?.cancel().catch(()=>{});
    let { compress, ...rest } = finalInit;
    let R = {
        ...rest,
        body: identityBody
    };
    if (clientRequestId !== undefined) {
        let B = Xs().gzipRequestBody.telemetryByClientRequestId.get(clientRequestId);
        Hao(clientRequestId, {
            requestBodyEncoding: "identity",
            requestBodyChars: identityBody.length,
            gzipFallbackStatus: res.status,
            ...B !== undefined && "gzipBlocks" in B && {
                gzipBlocks: B.gzipBlocks
            }
        });
    }
    return T({
        rejection: _,
        first: facts(res),
        resend: ()=>dispatch(R),
        facts,
        aborted: ()=>finalInit.signal?.aborted === true,
        bodyChars: identityBody.length,
        storageV5,
        rollout
    });
}
async function Ips({ answer, facts, resendIdentity, aborted, bodyChars, storageV5, rollout }) {
    let first = facts(answer);
    let z = await q(first);
    if (z === null) {
        return answer;
    }
    h();
    return T({
        rejection: z,
        first,
        resend: resendIdentity,
        facts,
        aborted,
        bodyChars,
        storageV5,
        rollout
    });
}
function Sst(rollout, storageV5) {
    return async (r, s, dispatch)=>{
        let l = _Ct(r, s.body, storageV5, rollout);
        if (!l?.gzip) {
            if (l !== undefined) {
                se(rollout, l);
            }
            return dispatch(s);
        }
        Q8t(rollout);
        let finalInit = {
            ...s,
            compress: "gzip",
            body: QIt(s.body)
        };
        let res = await dispatch(finalInit);
        return Mao({
            res,
            dispatch,
            finalInit,
            identityBody: s.body,
            clientRequestId: undefined,
            storageV5,
            rollout
        });
    };
}
function Hao(e, n) {
    Xs().gzipRequestBody.telemetryByClientRequestId.set(e, n);
}
function Z8t(e, n) {
    if (e === null) {
        return;
    }
    let telemetryByClientRequestId = Xs().gzipRequestBody.telemetryByClientRequestId;
    let s = telemetryByClientRequestId.get(e);
    if (s?.requestBodyEncoding !== "gzip") {
        return;
    }
    telemetryByClientRequestId.set(e, {
        ...s,
        gzipBlocks: s.gzipBlocks?.outcome === "as_blocks" ? {
            ...s.gzipBlocks,
            outcome: "rejected"
        } : n
    });
}
function Ops(e, n) {
    Xs().gzipRequestBody.dispatchAtByClientRequestId.set(e, n);
}
function Mps(e) {
    if (e === undefined) {
        return;
    }
    let dispatchAtByClientRequestId = Xs().gzipRequestBody.dispatchAtByClientRequestId;
    let r = dispatchAtByClientRequestId.get(e);
    dispatchAtByClientRequestId.delete(e);
    return r;
}
function bCt(e) {
    if (e === undefined) {
        return;
    }
    let telemetryByClientRequestId = Xs().gzipRequestBody.telemetryByClientRequestId;
    let r = telemetryByClientRequestId.get(e);
    telemetryByClientRequestId.delete(e);
    return r;
}
function fDn(e) {
    if (e === undefined) {
        return {};
    }
    return {
        requestBodyEncoding: d(e.requestBodyEncoding),
        requestBodyChars: e.requestBodyChars,
        ...e.requestBodyEncoding === "gzip" && e.requestBodyGzipLevel !== undefined && {
            requestBodyGzipLevel: e.requestBodyGzipLevel
        },
        ..."requestPrepareMs" in e && e.requestPrepareMs !== undefined && {
            requestPrepareMs: e.requestPrepareMs
        },
        ..."gzipBlocks" in e && e.gzipBlocks !== undefined && {
            requestBodyGzipBlocksMode: e.gzipBlocks.mode,
            requestBodyGzipBlocksOutcome: d(e.gzipBlocks.outcome),
            ...e.gzipBlocks.planned !== undefined && {
                requestBodyGzipBlockCount: e.gzipBlocks.planned.blockCount,
                requestBodyGzipReusedBlockCount: e.gzipBlocks.planned.reusedBlockCount,
                requestBodyGzipReusedBytes: e.gzipBlocks.planned.reusedBytes,
                requestBodyGzipBlocksMs: e.gzipBlocks.planned.spentMs,
                ...e.gzipBlocks.planned.gzippedBytes !== undefined && {
                    requestBodyGzippedBytes: e.gzipBlocks.planned.gzippedBytes
                },
                requestBodyGzipStoredBytes: e.gzipBlocks.planned.storedBytes,
                requestBodyGzipEvictedBlockCount: e.gzipBlocks.planned.evictedForSpaceCount
            }
        },
        ..."gzipSkipReason" in e && {
            gzipSkipReason: d(e.gzipSkipReason)
        },
        ..."gzipFallbackStatus" in e && {
            gzipFallback: true,
            gzipFallbackStatus: e.gzipFallbackStatus
        }
    };
}
Hks(_Ct);
export { Pps, _Ct, Oao, Q8t, Mao, Ips, Sst, Hao, Z8t, Ops, Mps, bCt, fDn };
