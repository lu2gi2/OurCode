import { oO, eu, IEr, k, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { Rq } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Zv, Q, YR } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { LH } from "/$bunfs/root/chunk-6kc68p18.js";
import { IZ, St, _9, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { fl, Tt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { no, Gl, ar } from "/$bunfs/root/chunk-c56kpkt7.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { jo } from "/$bunfs/root/chunk-223dyewd.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { wn as processExiting, abo, I1n, Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Nm, Hw, Ny } from "/$bunfs/root/chunk-t0b6khh6.js";
import { Kf } from "/$bunfs/root/chunk-mvz09dzd.js";
import { dSe, Db } from "/$bunfs/root/chunk-k3tkc302.js";
import { L7 } from "/$bunfs/root/chunk-sk5bs87n.js";
import { _Pt, Gbr, gmo, hmo, xYe } from "/$bunfs/root/chunk-kpf6v0ta.js";
import { Sst } from "/$bunfs/root/chunk-yw4at4y3.js";
import { yt, zf } from "/$bunfs/root/chunk-f41czxrs.js";
import { Jo } from "/$bunfs/root/chunk-62g69mqc.js";
import { ECt, bgr, Uao, Tst, T_e, Sgr, Vao, AW } from "/$bunfs/root/chunk-2ya7enrh.js";
import { foe, TQt, eSr, Z$n, mSs, hSs, eFn, Smo, moe, rFn, oFn } from "/$bunfs/root/chunk-xpqgtv5j.js";
import { JA } from "/$bunfs/root/chunk-sfgejbsr.js";
import { Kus, mao, Yus, eps, tps, q8t, JHn, rDn, X8t, _st, AT } from "/$bunfs/root/chunk-ypkrahyx.js";
import { mSt, c6r, Lvn, u6r, p6r } from "/$bunfs/root/chunk-re9hv98n.js";
import { JX, KMe } from "/$bunfs/root/chunk-3r2wsxmc.js";
import { Zao, olo, slo, ilo, alo, llo, clo } from "/$bunfs/root/chunk-18a8x2hz.js";
import { Wvn } from "/$bunfs/root/chunk-kqhagdjn.js";
import { $vn, RGe } from "/$bunfs/root/chunk-852ksjk2.js";
import { ZKe, Yps } from "/$bunfs/root/chunk-0w84e1m6.js";
import { xde, J5, Rb as getTrustedDeviceToken, uoe, rN, gPt, fbe } from "/$bunfs/root/chunk-5s4qvyjz.js";
import { Pat, nPt, ooe, eN, Iat, x$n, cbr, tQt, dbr } from "/$bunfs/root/chunk-78511nt1.js";
import { $ce, NLe } from "/$bunfs/root/chunk-0xbdwcqr.js";
import { zMe, DZe } from "/$bunfs/root/chunk-r376y14q.js";
import { t5o } from "/$bunfs/root/chunk-qrh2wh6t.js";
import { LZe } from "/$bunfs/root/chunk-kv9h4ncr.js";
import { rke } from "/$bunfs/root/chunk-ekem2z7b.js";
import { pao } from "/$bunfs/root/chunk-nvz50x4x.js";
import { E5 } from "/$bunfs/root/chunk-g8vtprgy.js";
import { jx } from "/$bunfs/root/chunk-ae0vw9s3.js";
import { vw } from "/$bunfs/root/chunk-r8t1dcyg.js";
import { mu } from "/$bunfs/root/chunk-b7w13qrv.js";
import { QNe, ubr } from "/$bunfs/root/chunk-7jx57z43.js";
import { yct } from "/$bunfs/root/chunk-f0v3xmb1.js";
import { _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { ii } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
import { o, E, M, u, _t, U } from "/$bunfs/root/chunk-smx21d0k.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
const Xi = {
    init_retry_max_attempts: 3,
    init_retry_base_delay_ms: 500,
    init_retry_jitter_fraction: 0.25,
    init_retry_max_delay_ms: 4000,
    http_timeout_ms: 10000,
    uuid_dedup_buffer_size: 2000,
    heartbeat_interval_ms: 20000,
    heartbeat_jitter_fraction: 0.1,
    token_refresh_buffer_ms: 300000,
    teardown_archive_timeout_ms: 1500,
    connect_timeout_ms: 15000,
    oauth_retry_max_attempts: 3,
    oauth_retry_base_delay_ms: 2000,
    min_version: "0.0.0"
};
const Fa = p(()=>u({
        init_retry_max_attempts: E().int().min(1).max(10).default(3),
        init_retry_base_delay_ms: E().int().min(100).default(500),
        init_retry_jitter_fraction: E().min(0).max(1).default(0.25),
        init_retry_max_delay_ms: E().int().min(500).default(4000),
        http_timeout_ms: E().int().min(2000).default(10000),
        uuid_dedup_buffer_size: E().int().min(100).max(50000).default(2000),
        heartbeat_interval_ms: E().int().min(5000).max(30000).default(20000),
        heartbeat_jitter_fraction: E().min(0).max(0.5).default(0.1),
        token_refresh_buffer_ms: E().int().min(30000).max(1800000).default(300000),
        teardown_archive_timeout_ms: E().int().min(500).max(2000).default(1500),
        connect_timeout_ms: E().int().min(5000).max(60000).default(15000),
        oauth_retry_max_attempts: E().int().min(0).max(6).default(3),
        oauth_retry_base_delay_ms: E().int().min(100).max(10000).default(2000),
        min_version: o().refine((n)=>{
            try {
                oO(n, "0.0.0");
                return true;
            } catch  {
                return false;
            }
        }).default("0.0.0")
    }));
async function mo() {
    let n = await IEr("tengu_bridge_repl_v2_config", Xi);
    let h = Fa().safeParse(n);
    if (h.success) {
        return h.data;
    }
    return Xi;
}
async function Hvn() {
    let n = await mo();
    if (n.min_version && oO({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }.VERSION, n.min_version)) {
        return `Your version of Claude Code (${({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }).VERSION}) is too old for Remote Control.
Version ${n.min_version} or higher is required. Run \`claude update\` to update.`;
    }
    return null;
}
async function Zi({ heldEpoch, send, maySendAgain }) {
    let T = heldEpoch;
    let sessionEpoch;
    for(let followUps = 0;; followUps++){
        let V = [];
        let answer = await send(T, (K)=>{
            V.push(K);
        });
        if (V.length === 0) {
            return {
                ending: followUps === 0 ? "not_refused" : "followed_up",
                answer,
                followUps,
                sessionEpoch
            };
        }
        let w = V.at(-1);
        sessionEpoch = w ?? sessionEpoch;
        if (!maySendAgain()) {
            return {
                ending: "withheld",
                answer: null,
                followUps,
                sessionEpoch
            };
        }
        if (w === undefined || followUps === 2) {
            return {
                ending: "unfenced_fallback",
                answer: await send(undefined, ()=>{}),
                followUps,
                sessionEpoch,
                fallbackReason: w === undefined ? "no_session_epoch" : "follow_up_cap"
            };
        }
        T = w;
    }
}
const Ha = 50;
async function es(n, h) {
    let y = h.now ?? Date.now;
    let T = h.sleep ?? ((ne, _e)=>Q(ne, _e));
    let N = h.pollMs ?? Ha;
    let x = Number.isFinite(h.budgetMs) ? h.budgetMs : 0;
    let V = 0;
    let W = 0;
    let w = ()=>{
        try {
            return y() - V;
        } catch  {
            return 0;
        }
    };
    let K = [];
    let sessionKind = "live";
    let oe = "connect";
    let Le = (ne)=>{
        try {
            h.log?.(ne);
        } catch  {}
    };
    let Te = ()=>{
        if (h.signal?.aborted) {
            return "aborted";
        }
        if (n.isSessionOver()) {
            return "session_changed";
        }
        if (n.hasFailedForGood()) {
            return "bridge_failed";
        }
        if (y() >= W) {
            return "budget_passed";
        }
    };
    let et = (ne)=>{
        oe = ne;
        K.push(ne);
    };
    let ge = async (ne)=>{
        while(true){
            let _e = Te();
            if (_e === "aborted" || _e === "session_changed" || _e === "bridge_failed") {
                return _e;
            }
            if (ne()) {
                return;
            }
            if (_e !== undefined) {
                return _e;
            }
            await T(Math.min(N, W - y()), h.signal);
        }
    };
    let te = async (ne)=>{
        let _e = "pending";
        let G;
        let je = ne.then(()=>{
            _e = "settled";
        }, (Fe)=>{
            _e = "threw";
            G = Fe;
        });
        await Promise.race([
            je,
            Promise.resolve()
        ]);
        while(true){
            let Fe = _e;
            if (Fe === "threw") {
                throw G;
            }
            if (Fe === "settled") {
                return;
            }
            let it = Te();
            if (it !== undefined) {
                return it;
            }
            await Promise.race([
                je,
                T(Math.min(N, W - y()), h.signal)
            ]);
        }
    };
    let tt = (ne)=>{
        let _e = ne.ok ? "uploads handed over, queues empty" : `${ne.reason} on ${ne.waitingOn}`;
        Le(`[handoff-wait] end: ${_e} after ${ne.elapsedMs} ms; session kind ${ne.sessionKind}; awaited ${K.join(", ") || "nothing"}`);
        return ne;
    };
    let fe = (ne, waitingOn)=>{
        if (ne === "budget_passed") {
            try {
                h.onBudgetPassed?.(waitingOn);
            } catch  {}
        }
        return tt({
            ok: false,
            reason: ne,
            sessionKind,
            waitingOn,
            elapsedMs: w()
        });
    };
    let ot = ()=>T(Math.max(0, Math.min(N, W - y())), h.signal);
    let $e = async ()=>{
        sessionKind = n.sessionKind();
        if (sessionKind !== "deferred") {
            return;
        }
        let ne = Te();
        if (ne !== undefined) {
            return ne;
        }
        et("release");
        return te(n.release());
    };
    try {
        V = y();
        W = V + x;
        sessionKind = n.sessionKind();
        Le(`[handoff-wait] start: session kind ${sessionKind}, budget ${x} ms`);
        let ne = n.transport();
        let _e = n.droppedBatches(ne);
        let G = await $e();
        if (G !== undefined) {
            return fe(G, "release");
        }
        let je = n.transcriptCopy;
        while(true){
            G = Te();
            if (G !== undefined) {
                return fe(G, "connect");
            }
            let Fe = n.transport();
            let it = Fe === ne ? _e : 0;
            let st = ()=>{
                let Ke = n.droppedBatches(Fe) - it;
                if (Ke > 0) {
                    Le(`[handoff-wait] batches dropped during the wait: ${Ke}`);
                }
                return Ke > 0;
            };
            et("connect");
            G = await ge(n.isConnected);
            if (G !== undefined) {
                return fe(G, "connect");
            }
            G = await $e();
            if (G !== undefined) {
                return fe(G, "release");
            }
            if (je !== undefined) {
                et("transcript_copy_install");
                G = await ge(je.isInstalledOnCurrentTransport);
                if (G !== undefined) {
                    return fe(G, "transcript_copy_install");
                }
                et("transcript_copy_catch_up");
                let Ke = je.catchUp();
                je.wakeCatchUp();
                G = await te(Ke);
                if (G !== undefined) {
                    return fe(G, "transcript_copy_catch_up");
                }
                if (je.catchUp() !== Ke) {
                    if (st()) {
                        return fe("rows_dropped", "transcript_copy_catch_up");
                    }
                    await ot();
                    continue;
                }
            }
            oe = "first_history_flush";
            let at = n.firstHistoryFlush();
            if (at !== undefined) {
                K.push("first_history_flush");
                G = await te(at);
                if (G !== undefined) {
                    return fe(G, "first_history_flush");
                }
            }
            oe = "held_writes";
            if (n.holdsWrites()) {
                K.push("held_writes");
                G = await ge(()=>!n.holdsWrites());
                if (G !== undefined) {
                    return fe(G, "held_writes");
                }
            }
            et("upload_lanes");
            let Mt = false;
            G = await te(n.drainLanes(Math.max(0, W - y())).then((Ke)=>{
                Mt = Ke === false;
            }));
            if (G !== undefined || Mt) {
                return fe(G ?? "budget_passed", "upload_lanes");
            }
            if (st()) {
                return fe("rows_dropped", "upload_lanes");
            }
            if (n.transport() !== Fe || !n.isConnected() || n.holdsWrites()) {
                await ot();
                continue;
            }
            break;
        }
        if (h.signal?.aborted) {
            return fe("aborted", "upload_lanes");
        }
        if (n.isSessionOver()) {
            return fe("session_changed", "upload_lanes");
        }
        if (n.hasFailedForGood()) {
            return fe("bridge_failed", "upload_lanes");
        }
        return tt({
            ok: true,
            reason: "handed_over",
            sessionKind,
            elapsedMs: w()
        });
    } catch (error) {
        Le(`[handoff-wait] ${oe} threw: ${l(error)}`);
        try {
            h.onFault?.(oe);
        } catch  {}
        return fe("fault", oe);
    }
}
async function J3o() {}
function Ovn(n) {}
function Mvn(n, h) {}
const Kt = "[account memory withheld from Remote Control; shown in the terminal session]";
const go = "[tool result withheld from Remote Control; shown in the terminal session]";
const vn = "[message content withheld from Remote Control; shown in the terminal session]";
const xa = "[command output withheld from Remote Control: it may repeat the conversation summary, which can include account memory; shown in the terminal session]";
const La = "This session is being continued from a previous conversation that ran out of context. The summary of that conversation is not included here: it was withheld from Remote Control because it may include account memory, and can be read only in the terminal session where it was written. If you need details from the earlier conversation, ask the user.";
const Pr = 32768;
const $a = new Set([
    "assistant",
    "user",
    "stream_event",
    "attachment",
    "system",
    "control_request"
]);
const ts = new Set([
    "cowork_memory_context",
    "account_memory_recall"
]);
const Wa = "anthropic/memory.";
const rs = "account_memory_saved";
const qa = "account_memory";
const bo = [
    "type",
    "subtype",
    "uuid",
    "parentUuid",
    "logicalParentUuid",
    "timestamp",
    "sessionId",
    "cwd",
    "version",
    "gitBranch",
    "isSidechain",
    "agentId",
    "userType",
    "entrypoint",
    "teamName",
    "agentName",
    "promptId",
    "requestId",
    "isMeta",
    "isVirtual",
    "isCompactSummary",
    "repeatsCompactSummary",
    "isVisibleInTranscriptOnly",
    "sourceToolAssistantUUID"
];
const ns = [
    "role",
    "id",
    "type",
    "model",
    "stop_reason",
    "usage"
];
const Ga = {
    string: [
        "type",
        "toolUseID",
        "processId",
        "hookName",
        "hookEvent",
        "toolName",
        "permissionMode",
        "host",
        "decision",
        "disposition",
        "traceparent"
    ],
    number: [
        "exitCode",
        "durationMs",
        "timeoutMs"
    ],
    boolean: [
        "timedOut",
        "unverified",
        "heldForServedCall",
        "accountMemoryBatch"
    ]
};
const Va = [
    "content",
    "message",
    "stdout",
    "stderr",
    "lines"
];
const os = [
    "wireToolInputs",
    "wire_tool_inputs",
    "wireIngestContext",
    "wire_ingest_context"
];
const bn = new Set([
    "tool_use",
    "server_tool_use",
    "mcp_tool_use"
]);
const yo = new Set([
    "tool_result",
    "mcp_tool_result"
]);
const Ka = new Set([
    "PostToolBatch",
    "Elicitation",
    "ElicitationResult"
]);
const za = new Set([
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "PostToolBatch",
    "PermissionRequest",
    "PermissionDenied",
    "Elicitation",
    "ElicitationResult"
]);
const Ya = "PostCompact";
const Ja = new Set([
    "text",
    "thinking",
    "redacted_thinking"
]);
function ke(n) {
    return typeof n === "object" && n !== null;
}
class ht {
    max;
    ids = new Set;
    constructor(n){
        this.max = n;
    }
    has(n) {
        return this.ids.has(n);
    }
    add(n) {
        if (this.ids.has(n)) {
            return;
        }
        this.ids.add(n);
        if (this.ids.size > this.max) {
            let h = this.ids.values().next().value;
            if (h !== undefined) {
                this.ids.delete(h);
            }
        }
    }
    delete(n) {
        return this.ids.delete(n);
    }
}
function Ro(n) {
    for (let h of zMe){
        let y = n[h];
        if (!ke(y)) {
            continue;
        }
        let T = ke(y._meta) ? y._meta : y;
        if (Object.keys(T).some((N)=>N.startsWith(Wa))) {
            return true;
        }
    }
    return false;
}
function Xa(n) {
    if (typeof n.name !== "string") {
        return;
    }
    if (n.type !== "mcp_tool_use") {
        return n.name;
    }
    if (typeof n.server_name === "string") {
        return ii(n.server_name, n.name);
    }
}
function To(n, h) {
    if (n.subtype === "can_use_tool") {
        return typeof n.tool_name !== "string" || E5(n.tool_name, h, "live");
    }
    if (n.subtype === "request_user_dialog") {
        return typeof n.dialog_kind !== "string" || n.dialog_kind.includes(qa);
    }
    return false;
}
function Eo(n) {
    return n.isCompactSummary === true || n.is_compact_summary === true;
}
function is(n) {
    return n.repeatsCompactSummary === true || n.type === "user" && ke(n.message) && X8t(n.message.content);
}
function So({ content }) {
    if (Array.isArray(content)) {
        return content.filter(ke);
    }
}
function Qa(n) {
    if (ke(n.message)) {
        return So(n.message);
    }
}
function Za(n, h) {
    return h.some((y)=>n[y] !== undefined);
}
function Or(n, h) {
    let y = {};
    for (let T of h){
        if (n[T] !== undefined) {
            y[T] = n[T];
        }
    }
    return y;
}
function Jer(n) {
    let n_placeAccountMemoryTool = n.placeAccountMemoryTool;
    let y = new ht(Pr);
    let T = new ht(Pr);
    let N = new ht(Pr);
    let x = new ht(Pr);
    let V = new ht(Pr);
    let W = false;
    let w = new Map;
    let K = Symbol("drop");
    function Z(a, D) {
        let P = Xa(a);
        let Y = P === undefined || E5(P, n_placeAccountMemoryTool, "live");
        let q = !Y && P !== undefined && E5(P, n_placeAccountMemoryTool, "history");
        if (typeof a.id === "string") {
            if (Y) {
                y.add(a.id);
            } else if (q) {
                T.add(a.id);
            }
        }
        return Y || D === "history" && q;
    }
    function oe(a, D) {
        return y.has(a) || D === "history" && T.has(a);
    }
    function Le(a, D) {
        if (!ke(a)) {
            return;
        }
        if (a.type === "progress") {
            if (ke(a.data)) {
                Le(a.data.message, D);
            }
            return;
        }
        et(a);
        Te(a);
        for (let P of Qa(a) ?? []){
            if (!bn.has(P.type) || typeof P.id !== "string") {
                continue;
            }
            N.add(P.id);
            if (Z(P, D)) {
                W = true;
            }
        }
    }
    function Te(a) {
        if (a.type === "attachment" && ke(a.attachment) && ts.has(a.attachment.type) && a.attachment.content !== null || Ro(a)) {
            W = true;
        }
    }
    function et(a) {
        if (typeof a.uuid !== "string") {
            return;
        }
        if (Eo(a)) {
            x.add(a.uuid);
        } else if (is(a)) {
            V.add(a.uuid);
        }
    }
    function ge(a, D) {
        let P;
        try {
            P = D.type;
        } catch  {
            P = undefined;
        }
        try {
            n.onDropped?.(a, typeof P === "string" && $a.has(P) ? P : "other");
        } catch  {}
    }
    function te(a, D) {
        ge(a, D);
        return K;
    }
    function tt() {
        try {
            if (n.mode() === "drop") {
                return "drop";
            }
            return "redact";
        } catch  {
            return "redact";
        }
    }
    function fe(a) {
        if (typeof a === "string") {
            return a;
        }
        return Kt;
    }
    function ot(a, D) {
        return {
            type: a.type,
            id: fe(a.id),
            name: fe(a.name),
            ...a.server_name !== undefined && {
                server_name: fe(a.server_name)
            },
            input: D ? {} : q8t(a.input, 0, Kt, true)
        };
    }
    function $e(a, D) {
        return {
            type: a.type,
            tool_use_id: fe(a.tool_use_id),
            content: D,
            ...a.is_error === true && {
                is_error: true
            }
        };
    }
    function ne(a, D, P) {
        let Y = Ro(a);
        let q = ke(a.message) ? a.message : undefined;
        let se = q === undefined ? undefined : So(q);
        if (q === undefined || se === undefined) {
            if (Y) {
                W = true;
                if (D === "transcript") {
                    return je(a, []);
                }
                return te("memory_row", a);
            }
            let ue = [
                ...os,
                ...zMe
            ];
            if (!Za(a, ue)) {
                return a;
            }
            let We = {
                ...a
            };
            for (let rt of ue){
                delete We[rt];
            }
            return We;
        }
        let be = false;
        let Ne = false;
        let At = false;
        let Pt = false;
        let xr = new Set;
        let An = se.map((ue)=>{
            if (bn.has(ue.type)) {
                if (typeof ue.id === "string") {
                    N.add(ue.id);
                }
                if (!Z(ue, P)) {
                    if (typeof ue.id === "string") {
                        xr.add(ue.id);
                    }
                    return ue;
                }
                W = true;
                be = true;
                return ot(ue, false);
            }
            if (yo.has(ue.type)) {
                let We = ue.tool_use_id;
                let rt = Kt;
                if (typeof We === "string" && oe(We, P)) ;
                else if (typeof We === "string" && N.has(We)) {
                    At = true;
                    return ue;
                } else if (typeof We === "string" && Y) ;
                else {
                    rt = go;
                }
                if (rt === Kt) {
                    W = true;
                }
                Ne = true;
                return $e(ue, rt);
            }
            return ue;
        });
        if (Y && !Ne) {
            if (!At) {
                W = true;
                if (D === "transcript") {
                    return je(a, se);
                }
                return te("memory_row", a);
            }
            Pt = true;
        }
        if (!be && !Ne && !Pt) {
            return a;
        }
        if (tt() === "drop") {
            if (D === "transcript") {
                return je(a, se);
            }
            return te("kill_switch", a);
        }
        let mt = {
            ...a,
            message: {
                ...q,
                content: An
            }
        };
        for (let ue of DZe){
            delete mt[ue];
        }
        if (Ne || Pt) {
            for (let ue of zMe){
                delete mt[ue];
            }
        }
        if (be) {
            for (let ue of os){
                let We = mt[ue];
                if (!ke(We)) {
                    continue;
                }
                let rt = vo(We, (Do, Pn)=>xr.has(Pn));
                if (Object.keys(rt).length > 0) {
                    mt[ue] = rt;
                } else {
                    delete mt[ue];
                }
            }
        }
        return mt;
    }
    function _e(a, D, P) {
        let Y = Eo(a) || typeof a.uuid === "string" && x.has(a.uuid);
        et(a);
        if (!G()) {
            return ne(a, D, P);
        }
        let q = ke(a.message) ? a.message : undefined;
        if (tt() === "drop") {
            if (D === "transcript") {
                return je(a, q === undefined ? [] : So(q) ?? []);
            }
            return te("kill_switch", a);
        }
        let se = Y ? La : `<${fl}>${xa}</${fl}>`;
        let be = {
            ...a,
            message: {
                ...q === undefined ? {
                    role: "user"
                } : Or(q, ns),
                content: q !== undefined && typeof q.content === "string" ? se : [
                    {
                        type: "text",
                        text: se
                    }
                ]
            }
        };
        delete be.modelOnlyText;
        for (let Ne of [
            ...zMe,
            ...DZe
        ]){
            if (Ne !== "summarizeMetadata") {
                delete be[Ne];
            }
        }
        return be;
    }
    function G() {
        if (W) {
            return true;
        }
        try {
            return n.accountMemoryInPlay?.() !== false;
        } catch  {
            return true;
        }
    }
    function je(a, D) {
        let P = Or(a, bo);
        if (a.type === "system") {
            return P;
        }
        if (ke(a.attachment)) {
            P.attachment = {
                type: a.attachment.type,
                version: null,
                content: null
            };
            return P;
        }
        let Y = D.map((q)=>{
            if (bn.has(q.type)) {
                return ot(q, true);
            }
            if (yo.has(q.type)) {
                return $e(q, typeof q.tool_use_id === "string" && oe(q.tool_use_id, "history") ? Kt : go);
            }
            return {
                type: "text",
                text: vn
            };
        });
        P.message = {
            role: a.type === "assistant" ? "assistant" : "user",
            ...Or(ke(a.message) ? a.message : {}, ns),
            content: Y.length > 0 ? Y : [
                {
                    type: "text",
                    text: vn
                }
            ]
        };
        return P;
    }
    function Fe(attachment, D) {
        if (attachment.type === "async_hook_response") {
            if (typeof attachment.toolName === "string") {
                return E5(attachment.toolName, n_placeAccountMemoryTool, D);
            }
            if (typeof attachment.hookEvent !== "string") {
                return true;
            }
            if (attachment.hookEvent === Ya) {
                return G();
            }
            return za.has(attachment.hookEvent);
        }
        return Ka.has(attachment.hookEvent) && attachment.accountMemoryBatch !== false || typeof attachment.toolUseID === "string" && oe(attachment.toolUseID, D);
    }
    function it(attachment, D) {
        return typeof attachment.toolName === "string" && E5(attachment.toolName, n_placeAccountMemoryTool, D) || typeof attachment.toolUseID === "string" && oe(attachment.toolUseID, D);
    }
    function st(a, attachment) {
        let P = Or(a, bo);
        let Y = {};
        for (let [q, se] of Object.entries(Ga)){
            for (let be of se){
                if (typeof attachment[be] === q) {
                    Y[be] = attachment[be];
                }
            }
        }
        for (let q of Va){
            if (attachment[q] !== undefined) {
                Y[q] = Array.isArray(attachment[q]) ? [] : "";
            }
        }
        if (attachment.type === "hook_system_message") {
            Y.content = vn;
        }
        if (attachment.blockingError !== undefined) {
            Y.blockingError = {
                blockingError: "",
                command: ""
            };
        }
        if (attachment.response !== undefined) {
            Y.response = {};
        }
        if (attachment.toolInput !== undefined) {
            Y.toolInput = {};
        }
        P.attachment = Y;
        return P;
    }
    function at(a) {
        let D = w.get(a);
        if (D === undefined) {
            D = new Map;
            w.set(a, D);
        }
        return D;
    }
    function Mt(a, D, P, Y, q, se) {
        let P_tool_use_id = P.tool_use_id;
        let Ne = Kt;
        if (typeof P_tool_use_id === "string" && oe(P_tool_use_id, se)) ;
        else if (Ro(a)) ;
        else if (typeof P_tool_use_id === "string" && N.has(P_tool_use_id)) {
            if (q !== undefined) {
                at(Y).delete(q);
            }
            return a;
        } else {
            Ne = go;
        }
        if (q !== undefined) {
            at(Y).set(q, true);
        }
        if (Ne === Kt) {
            W = true;
        }
        if (tt() === "drop") {
            return te("kill_switch", a);
        }
        let At = {
            ...a,
            event: {
                ...D,
                content_block: $e(P, Ne)
            }
        };
        for (let Pt of [
            ...zMe,
            ...DZe
        ]){
            delete At[Pt];
        }
        return At;
    }
    function Ke(a, D) {
        let a_event = a.event;
        if (!ke(a_event)) {
            return a;
        }
        let Y = typeof a.parent_tool_use_id === "string" ? a.parent_tool_use_id : "";
        if (a_event.type === "message_start" || a_event.type === "message_stop") {
            w.delete(Y);
            return a;
        }
        let q = typeof a_event.index === "number" ? a_event.index : undefined;
        if (a_event.type === "content_block_start") {
            let se = ke(a_event.content_block) ? a_event.content_block : {};
            if (yo.has(se.type)) {
                return Mt(a, a_event, se, Y, q, D);
            }
            let be = bn.has(se.type);
            let Ne = be && Z(se, D);
            if (be && typeof se.id === "string") {
                N.add(se.id);
            }
            if (Ne) {
                W = true;
            }
            if (q !== undefined) {
                if (be || Ja.has(se.type)) {
                    at(Y).set(q, Ne);
                } else {
                    at(Y).delete(q);
                }
            }
            if (!Ne) {
                return a;
            }
            if (tt() === "drop") {
                return te("kill_switch", a);
            }
            return {
                ...a,
                event: {
                    ...a_event,
                    content_block: ot(se, false)
                }
            };
        }
        if (a_event.type === "content_block_stop" && q !== undefined) {
            w.get(Y)?.delete(q);
            return a;
        }
        if (a_event.type === "content_block_delta") {
            let se = q === undefined ? undefined : w.get(Y)?.get(q);
            if (se === true) {
                return te("memory_row", a);
            }
            if (se === undefined) {
                return te("untracked_delta", a);
            }
        }
        return a;
    }
    function Nr(a, D, P) {
        if (!ke(a)) {
            return;
        }
        switch(a.type){
            case "stream_event":
                return Ke(a, P);
            case "attachment":
                if (!ke(a.attachment)) {
                    return a;
                }
                if (ts.has(a.attachment.type)) {
                    if (a.attachment.content === null) {
                        return a;
                    }
                    W = true;
                    if (D === "transcript") {
                        return je(a, []);
                    }
                    return te("memory_row", a);
                }
                if (Fe(a.attachment, P)) {
                    if (it(a.attachment, P)) {
                        W = true;
                    }
                    if (D === "transcript") {
                        return st(a, a.attachment);
                    }
                    return te("memory_row", a);
                }
                return a;
            case "system":
                if (a.subtype !== rs && a.persist !== false && ![
                    a.tool_use_id,
                    a.toolUseID
                ].some((Y)=>typeof Y === "string" && oe(Y, P))) {
                    return a;
                }
                if (a.subtype === rs || a.persist !== false) {
                    W = true;
                }
                if (D === "transcript") {
                    return je(a, []);
                }
                return te("memory_row", a);
            case "control_request":
                if (ke(a.request) && To(a.request, n_placeAccountMemoryTool)) {
                    if (typeof a.request.tool_name === "string" || typeof a.request.dialog_kind === "string") {
                        W = true;
                    }
                    return te("memory_row", a);
                }
                return a;
            default:
                if (Eo(a) || is(a) || typeof a.uuid === "string" && (x.has(a.uuid) || V.has(a.uuid))) {
                    return _e(a, D, P);
                }
                return ne(a, D, P);
        }
    }
    function Ur(a, D) {
        if (D === "transcript") {
            try {
                let P = Or(a, bo);
                P.message = {
                    role: P.type === "assistant" ? "assistant" : "user",
                    content: [
                        {
                            type: "text",
                            text: vn
                        }
                    ]
                };
                ge("unreadable", a);
                return P;
            } catch  {}
        }
        return te("unreadable", a);
    }
    function Mn(a, D, P) {
        try {
            return Nr(a, D, P) ?? a;
        } catch  {
            if (ke(a)) {
                return Ur(a, D);
            }
            return K;
        }
    }
    function redact(a, D = "events", P = "history") {
        return a.flatMap((Y)=>{
            let q = Mn(Y, D, P);
            if (q === K) {
                return [];
            }
            return [
                q
            ];
        });
    }
    function note(a, D = "history") {
        for (let P of a){
            try {
                Le(P, D);
            } catch  {}
        }
    }
    return {
        note,
        redact,
        withoutMemoryCallAttachments (a, D = "history") {
            note(a, D);
            return a.filter((P)=>{
                if (!ke(P)) {
                    return true;
                }
                try {
                    if (P.type !== "attachment" || !ke(P.attachment) || !Fe(P.attachment, D)) {
                        return true;
                    }
                    if (it(P.attachment, D)) {
                        W = true;
                    }
                    ge("memory_row", P);
                    return false;
                } catch  {
                    ge("unreadable", P);
                    return false;
                }
            });
        },
        wrapInternalEventWriter (a, D = "history") {
            return (P, Y, q)=>{
                let [se] = redact([
                    Y
                ], "transcript", D);
                if (se === undefined) {
                    return Promise.resolve();
                }
                return a(P, se, q);
            };
        }
    };
}
const ed = new Set([
    "auto_default",
    "auto_settings",
    "explicit",
    "sdk"
]);
function wo(n) {
    return typeof n === "string" && ed.has(n);
}
const backfillMessages = 200;
const td = 50;
const rd = 500;
const Co = {
    scope: "off",
    backfillMessages,
    eagerResult: false
};
const nd = p(()=>u({
        scope: U([
            "off",
            "auto_default",
            "auto",
            "auto_and_sdk",
            "all"
        ]).catch("off"),
        backfill_messages: E().int().transform((n)=>Math.min(rd, Math.max(td, n))).catch(backfillMessages),
        eager_result: M().catch(false)
    }));
function od(n) {
    let h = nd().safeParse(n);
    if (!h.success) {
        return Co;
    }
    return {
        scope: h.data.scope,
        backfillMessages: h.data.backfill_messages,
        eagerResult: h.data.eager_result
    };
}
function as() {
    return od(k("tengu_noble_snowflake", null));
}
function Ir(scope, h) {
    if (h === undefined) {
        return false;
    }
    switch(scope){
        case "off":
            return false;
        case "auto_default":
            return h === "auto_default";
        case "auto":
            return h === "auto_default" || h === "auto_settings";
        case "auto_and_sdk":
            return h === "auto_default" || h === "auto_settings" || h === "sdk";
        case "all":
            return true;
    }
}
function ko(n) {
    return n.type === "assistant" && Array.isArray(n.message.content) && n.message.content.some((h)=>h.type === "tool_use" && (h.name === Kf || h.name === jx));
}
function yn(n) {
    return c6r(n) || n.type === "system" && "subtype" in n && (n.subtype === "post_turn_summary" || n.subtype === "task_started" || n.subtype === "task_updated" || n.subtype === "task_notification");
}
class Rn {
    _active = false;
    _pending = [];
    _evictedCount = 0;
    get active() {
        return this._active;
    }
    get pendingCount() {
        return this._pending.length;
    }
    get pending() {
        return this._pending;
    }
    get evictedCount() {
        return this._evictedCount;
    }
    start() {
        this._active = true;
    }
    end() {
        this._active = false;
        this._evictedCount = 0;
        return this._pending.splice(0);
    }
    enqueue(...n) {
        if (!this._active) {
            return false;
        }
        this._pending.push(...n);
        return true;
    }
    evictOldest(n, h) {
        let y = F(this._pending, n) - h;
        if (y <= 0) {
            return;
        }
        this._evictedCount += y;
        this._pending = this._pending.filter((T)=>!n(T) || y-- <= 0);
    }
    drop() {
        this._active = false;
        this._evictedCount = 0;
        let length = this._pending.length;
        this._pending.length = 0;
        return length;
    }
    deactivate() {
        this._active = false;
    }
}
const ds = 3;
const us = 3600000;
const ls = 24 * ds;
const id = 24 * us;
const sd = 600000;
const cs = 30000;
const Mo = 300000;
const fs = 5000;
const attempts = 14;
const exhaustedDetail = "could not reach the Remote Control server for about 30 minutes";
const _s = "the connection to the Remote Control server kept dropping after each reconnect";
const ps = `the connection to the Remote Control server dropped more than ${ls} times in 24 hours`;
const remintCap = {
    attempts,
    exhaustedDetail
};
function ms() {
    let n = [];
    let Number_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    return {
        charge (y, T) {
            n = n.filter((x)=>y - x < id);
            if (T && n.length >= ls) {
                return "daily_exhausted";
            }
            if (F(n, (x)=>y - x < us && (!T || x >= Number_NEGATIVE_INFINITY)) >= ds) {
                return "hourly_exhausted";
            }
            n.push(y);
            return "charged";
        },
        noteHealthyBeat (y) {
            let T = n.at(-1);
            if (T !== undefined && y - T >= sd) {
                Number_NEGATIVE_INFINITY = y;
            }
        }
    };
}
const ud = p(()=>_t({
        pid: E().int(),
        procStart: o().optional().catch(undefined),
        createdAt: E(),
        titleSha: o().optional(),
        usedAt: E().optional()
    }));
function jr(replBridgePlaceholders) {
    if (typeof replBridgePlaceholders !== "object" || replBridgePlaceholders === null || Array.isArray(replBridgePlaceholders)) {
        return [];
    }
    return Object.entries(replBridgePlaceholders).flatMap(([h, y])=>{
        let T = ud().safeParse(y);
        if (!T.success) {
            return [];
        }
        let { procStart, ...rest } = T.data;
        return [
            [
                h,
                procStart === undefined ? rest : {
                    ...rest,
                    procStart
                }
            ]
        ];
    });
}
const ld = 300000;
const cd = 2592000000;
const gs = 20;
const fd = 15000;
const _d = /^(session|cse)_[A-Za-z0-9_-]+$/;
async function bs() {
    if (Tt()) {
        return false;
    }
    let { getFeatureValue_CACHED_MAY_BE_STALE } = await import("/$bunfs/root/chunk-jv24m4k2.js");
    return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_placeholder_sweep", true);
}
function Ao(n) {
    let h = no();
    h.placeholderWriteChain = h.placeholderWriteChain.then(n, n);
    return h.placeholderWriteChain;
}
function ys(n, h, storageV5) {
    return Ao(async ()=>{
        if (!await bs()) {
            return;
        }
        let procStart = await Ny();
        let N = {
            pid: process.pid,
            procStart,
            createdAt: Date.now(),
            ...h !== undefined && {
                titleSha: ln(h)
            }
        };
        await Ae((x)=>{
            let V = jr(x.replBridgePlaceholders);
            let W = V.filter(([Z])=>!Dr(Z, n));
            let w = h === undefined ? V.find(([Z])=>Dr(Z, n))?.[1] : undefined;
            W.push([
                n,
                {
                    ...N,
                    ...w?.titleSha !== undefined && {
                        titleSha: w.titleSha
                    },
                    ...w?.usedAt !== undefined && {
                        usedAt: w.usedAt
                    }
                }
            ]);
            W.sort((Z, oe)=>oe[1].createdAt - Z[1].createdAt);
            let K = W.slice(gs);
            if (K.length > 0) {
                t(`[bridge:placeholder] evicting ${K.length} record(s) past cap: ${K.map(([Z])=>Z).join(", ")}`);
            }
            return {
                ...x,
                replBridgePlaceholders: Object.fromEntries(W.slice(0, gs))
            };
        }, storageV5);
    });
}
async function Q3o() {
    try {
        let n = jr(ce().replBridgePlaceholders).map(([, T])=>T);
        let h = 1;
        let y = new Set;
        for (let T of n){
            if (T.pid === process.pid || y.has(T.pid)) {
                continue;
            }
            if (T.procStart !== undefined ? _a(T.pid) && await Hw(T.pid, T.procStart) : _a(T.pid)) {
                y.add(T.pid);
                h++;
            }
        }
        return h;
    } catch  {
        return 0;
    }
}
function Br(n, storageV5) {
    return Ao(async ()=>{
        await Ae((y)=>{
            let T = Object.keys(y.replBridgePlaceholders ?? {}).filter((x)=>Dr(x, n));
            if (T.length === 0) {
                return y;
            }
            let N = {
                ...y.replBridgePlaceholders
            };
            for (let x of T){
                delete N[x];
            }
            return {
                ...y,
                replBridgePlaceholders: N
            };
        }, storageV5);
    });
}
function Rs(n, storageV5) {
    return Ao(async ()=>{
        await Ae((y)=>{
            let T = jr(y.replBridgePlaceholders).filter(([x, V])=>Dr(x, n) && V.usedAt === undefined);
            if (T.length === 0) {
                return y;
            }
            let N = {
                ...y.replBridgePlaceholders
            };
            for (let [x, V] of T){
                N[x] = {
                    ...V,
                    usedAt: Date.now()
                };
            }
            return {
                ...y,
                replBridgePlaceholders: N
            };
        }, storageV5);
    }).catch((y)=>{
        t(`[bridge:placeholder] use stamp failed: ${l(y)}`, {
            level: "error"
        });
    });
}
function Dr(n, h) {
    return ar(n) === ar(h);
}
async function pd(n) {
    if (Nm(n.pid)) {
        return true;
    }
    return _a(n.pid) && !await Hw(n.pid, n.procStart);
}
function Sn(n) {
    if (n === "invalid" || n === "skipped_superseded" || n === "skipped_owner_changed") {
        return true;
    }
    return typeof n === "number" && n < 500 && n !== 401 && n !== 408 && n !== 429;
}
function vs(n) {
    if (!n) {
        return;
    }
    let h = rke(n.replace(/\.\d+/, ""));
    if (Number.isNaN(h)) {
        return;
    }
    let y = /\.(\d+)/.exec(n)?.[1] ?? "";
    return `${h}.${y.replace(/0+$/, "")}`;
}
async function hd(n, h, y) {
    if (!await pd(h)) {
        return "keep";
    }
    if (h.usedAt !== undefined) {
        return En("used_marker");
    }
    let { session, notFound } = await _st(n, {
        baseUrl: y.baseUrl,
        getAccessToken: y.getAccessToken
    });
    if (notFound) {
        return "remove";
    }
    if (!session) {
        return "keep";
    }
    if (h.titleSha !== undefined) {
        if (typeof session.title !== "string") {
            t(`[bridge:placeholder] session GET carried no title for ${n}; keeping`);
            return "keep";
        }
        if (ln(session.title) !== h.titleSha) {
            return En("retitled");
        }
    }
    let session_connection_status = session.connection_status;
    if (session_connection_status !== undefined && session_connection_status !== "disconnected") {
        if (session_connection_status === "connected") {
            return "keep_connected";
        }
        return "keep_unreadable";
    }
    let V = vs(session.created_at);
    let W = vs(session.updated_at);
    if (V === undefined || W === undefined) {
        return "keep_unreadable";
    }
    if (W !== V) {
        En("updated_at");
        if (session_connection_status === undefined) {
            return "remove_active_no_connection_state";
        }
        return "remove_active_disconnected";
    }
    let w = jr(ce().replBridgePlaceholders).find(([Z])=>Dr(Z, n))?.[1];
    if (w === undefined) {
        return "remove";
    }
    if (w.pid !== h.pid || w.procStart !== h.procStart || w.createdAt !== h.createdAt) {
        return "keep";
    }
    if (w.usedAt !== undefined) {
        return En("used_marker");
    }
    let K = await y.archive(n);
    if (!Sn(K)) {
        m("bridge_placeholder_sweep", typeof K === "number" ? `http_${K}` : K);
        return "keep";
    }
    g("bridge_placeholder_sweep");
    t(`[bridge:placeholder] archived orphaned placeholder ${n} (status=${K})`);
    return "remove";
}
function Es(n) {
    let h = no();
    if (h.placeholderSweepStarted) {
        return Promise.resolve();
    }
    h.placeholderSweepStarted = true;
    return (async ()=>{
        await Q(n.startDelayMs ?? fd);
        if (!await bs()) {
            return;
        }
        let replBridgePlaceholders = ce().replBridgePlaceholders;
        if (!replBridgePlaceholders) {
            return;
        }
        let T = n.skipSessionId ? ar(n.skipSessionId) : undefined;
        let N = jr(replBridgePlaceholders);
        let x = new Set(N.map(([w])=>w));
        let V = Object.keys(replBridgePlaceholders).filter((w)=>!x.has(w));
        let W = {
            keep_connected: 0,
            keep_unreadable: 0,
            remove_active_disconnected: 0,
            remove_active_no_connection_state: 0
        };
        for (let [w, K] of N){
            let Z = Date.now() - K.createdAt;
            if (Math.abs(Z) < ld || ar(w) === T) {
                continue;
            }
            if (!_d.test(w)) {
                V.push(w);
                continue;
            }
            let oe = await hd(w, K, n);
            if (oe !== "remove" && oe !== "keep") {
                W[oe]++;
                t(`[bridge:placeholder] ${w}: ${oe}`);
            }
            if (!(oe === "keep" || oe === "keep_connected" || oe === "keep_unreadable") || Z > cd) {
                V.push(w);
            }
        }
        if (Object.values(W).some((w)=>w > 0)) {
            f("bridge_placeholder_sweep", "not_archived_on_server_state", W);
        }
        if (V.length > 0) {
            await Ae((w)=>{
                if (!w.replBridgePlaceholders) {
                    return w;
                }
                let K = {
                    ...w.replBridgePlaceholders
                };
                for (let Z of V){
                    delete K[Z];
                }
                return {
                    ...w,
                    replBridgePlaceholders: K
                };
            }, n.storageV5);
        }
    })().catch((y)=>{
        t(`[bridge:placeholder] sweep failed: ${l(y)}`, {
            level: "error"
        });
    });
}
function En(n) {
    i("tengu_bridge_placeholder_used_session", {
        signal: d(n)
    });
    return "remove";
}
function Po(n, h, y) {
    switch(n){
        case undefined:
            return "no close code received";
        case 4090:
            switch(h){
                case "superseded_by_worker":
                    return "another connection took over this session (usually another device or Claude Code session) — this device is standing down (code 4090)";
                case "session_not_active":
                    return "this session was ended or archived from another device or app (code 4090)";
                case "session_not_found":
                    return "the server no longer reports this session — it may have been deleted from another device or app (code 4090)";
                case "epoch_stale":
                    return "the session worker registration went stale — no active worker holds it (code 4090)";
                default:
                    return "this connection is no longer the active worker for the session (code 4090)";
            }
        case 4091:
            return "transport init failed (code 4091)";
        case 4092:
            return "connection dropped — no close reason from server (code 4092)";
        case 4093:
            return "presence heartbeats to the server kept failing (code 4093)";
        case 4094:
            return "worker credential expired or rejected (code 4094)";
        case 401:
            return "auth token expired (code 401)";
        case 403:
            {
                if (!QNe(y?.rejectSource)) {
                    return "server rejected connection (code 403)";
                }
                let T = ubr(y.rejectSource);
                if (y.streak === undefined) {
                    return T;
                }
                let N = Math.max(1, Math.round(y.streak.streakMs / 60000));
                return `${T}, and kept refusing for ${N} ${I(N, "minute")}`;
            }
        case 404:
            return "session not found on server (code 404)";
        case 1002:
            return "server rejected the connection handshake (code 1002)";
        case 4001:
            return "session expired or not found on server (code 4001)";
        case 4003:
            return "server rejected credentials (code 4003)";
        default:
            return `code ${n}`;
    }
}
const md = 5000;
const Ss = 300;
const gd = 200;
const js = 300;
const vd = 600;
const bd = IZ - js - vd;
const Ts = 2000;
const yd = 3000;
const Oo = 100;
const Rd = 5000;
const ws = 200;
const Cs = 20000;
const maxConsecutiveFailures = 8;
const maxBatchBytes = 1048576;
const requestTimeoutMs = 30000;
const wd = "tengu_encapsulated_dusk";
function a6r() {
    if (k(wd, false)) {
        return "drop";
    }
    return "redact";
}
async function Z3o(n) {
    let { baseUrl, orgUUID, title, reattachOrFail, reattachOrigin, reviveInitiated, neverArchive, onAuthProven, noHistoryBackfill, onReattachGoneBounce, neutralFallbackTitle, onReattachPointerDead, ownerPin, onOwnerChanged, getAccessToken, onAuth401, classifyFailedOAuthRefresh, onReadFreshOAuthToken, onClassifyMissingOAuthToken, onProactiveRefresh, toSDKMessages, initialHistoryCap, initialMessages, conversationForPairing, placeAccountMemoryTool, accountMemoryInPlay, onInboundMessage, onQueuedNotification, onUserMessage, onSessionEstablished, onBeforePushTriggeringState, onPermissionResponse, onInterrupt, onStopTask, onBackgroundTasks, onCancelAsyncMessage, getInitializeState, getCommands, isTurnLive, onDialogKindsDeclared, onClientInitialize, onSetModel, onSetMaxThinkingTokens, onSetPermissionMode, onApplyFlagSettings, onRenameSession, onSetColor, onFileSuggestions, onReadFile, onGetWorkspaceDiff, onSideQuestion, onGetContextUsage, answerSharedControlRequest, onMcpAuthenticate, onMcpOauthCallbackUrl, onMcpReconnect, onForkConversation, onStateChange, onBridgeInjectedMcp, onProjectsBindingHint, outboundOnly, tags, sessionGroupingId, requestedSessionGroupingId, gitRepoUrl = null, branch = "", defaultBranch = null, nameSourceForCreate, onTransportPersistenceReady, onTransportPersistenceTeardown, onTransportRebuilt, remoteControlOrigin, getBackfillMessages, reattachSessionId, reattachSequenceNum, credentialsStore, workSecretCredentials, storageV5 } = n;
    let Ye = Jer({
        mode: a6r,
        placeAccountMemoryTool,
        accountMemoryInPlay,
        onDropped: (e, r)=>{
            t(`[remote-bridge] Kept one '${r}' row's content out of the upload for account memory (reason: ${e})`);
            if (e === "unreadable") {
                m("bridge_account_memory_redaction", `unredactable_${r}_row`);
            }
        }
    });
    Ye.note(conversationForPairing?.() ?? initialMessages ?? []);
    let On = (e, r = "history")=>Ye.redact(toSDKMessages(Ye.withoutMemoryCallAttachments(e, r)), "events", r);
    let neverArchive_1 = workSecretCredentials !== undefined ? true : neverArchive;
    let In = title;
    let reattach = !!reattachSessionId;
    let z = await mo();
    let Fo = false;
    let $r = (e)=>{
        if (!workSecretCredentials) {
            ownerPin?.noteAcceptedToken(e);
        }
    };
    let Ho = "work-secret-lane";
    let xo = ()=>{
        if (workSecretCredentials) {
            return Ho;
        }
        return getAccessToken();
    };
    let Dn = workSecretCredentials ? ()=>{
        let e = Fo ? "refresh" : "initial";
        return workSecretCredentials.register(e, {
            stillWanted: ()=>!O && Oe === undefined,
            reuseHeldAboveS: Math.ceil(z.token_refresh_buffer_ms / 1000) + 60
        }).then((r)=>{
            if (r !== null && !ooe(r)) {
                Fo = true;
            }
            return r;
        });
    } : Md;
    let Wr = getAccessToken();
    if (!Wr) {
        t("[remote-bridge] No OAuth token");
        m("bridge_connect", "bridge_connect_no_token");
        return null;
    }
    let getAccessToken_1 = ()=>getAccessToken() ?? Wr;
    let Lo = ()=>ownerPin?.ownerToken() ?? getAccessToken() ?? Wr;
    let recoveryAttemptedTokens = new Set;
    let { getOriginalCwd } = await import("/$bunfs/root/chunk-q61sszgr.js");
    let { getMainLoopModel } = await import("/$bunfs/root/chunk-dqtmfe08.js");
    let qr = requestedSessionGroupingId ?? sessionGroupingId;
    let sessionGroupingId_1 = sessionGroupingId;
    let $o = false;
    async function Wo() {
        let repositoryUrl = gitRepoUrl ? undefined : await nameSourceForCreate?.();
        let r = repositoryUrl ? {
            repositoryUrl
        } : undefined;
        $o = r !== undefined;
        let s = {};
        let v = async ()=>{
            if (gitRepoUrl) {
                let { buildGitSessionContext } = await import("/$bunfs/root/chunk-fzajctya.js");
                let { reportGitSessionContext } = await import("/$bunfs/root/chunk-mrqd4x3h.js");
                let { report } = await buildGitSessionContext(gitRepoUrl, branch, defaultBranch ?? undefined);
                reportGitSessionContext(report);
            }
        };
        let b = (R)=>Io((j, H)=>nPt(baseUrl, j, In, z.http_timeout_ms, tags, gitRepoUrl ? {
                    gitRepoUrl,
                    branch,
                    defaultBranch: defaultBranch ?? undefined
                } : r, getOriginalCwd(), getMainLoopModel(), R, s, H).then((A)=>{
                    if (typeof A === "string") {
                        ownerPin?.noteAcceptedToken(j);
                    }
                    return A;
                }), "createCodeSession", z, {
                getAccessToken: getAccessToken_1,
                onAuth401,
                recoveryAttemptedTokens
            });
        let _ = await b(qr);
        if (Pat(_) && _.reason === "grouping_rejected" && requestedSessionGroupingId === undefined && qr !== undefined) {
            let R = await b(undefined);
            if (typeof R === "string") {
                sessionGroupingId_1 = undefined;
                await v();
                if (r) {
                    Ovn("connect");
                }
                J("info", "bridge_repl_v2_grouping_dropped", {
                    status: _.status
                });
                t("[bridge:core] persisted Project no longer available; recreated session outside it");
                t(`[remote-bridge] Created session ${R}`);
                J("info", "bridge_repl_v2_session_created");
                return R;
            }
            if (r && !eN(R)) {
                Mvn("connect", R);
            }
            return _;
        }
        if (typeof _ === "string") {
            sessionGroupingId_1 = qr;
            await v();
            if (r) {
                Ovn("connect");
            }
            t(`[remote-bridge] Created session ${_}`);
            J("info", "bridge_repl_v2_session_created");
        }
        return _;
    }
    function Ks(e) {
        if (e?.reason === "grouping_rejected" && qr !== undefined) {
            let r = e.detail ? `: ${e.detail}` : "";
            if (requestedSessionGroupingId !== undefined) {
                return `Couldn't create a session in the requested Project (server ${e.status}${r}). The Project may not exist or may not be available to you.`;
            }
            return `Couldn't recreate the session in its previous Project (server ${e.status}${r}) \u2014 the Project may have been deleted or is no longer available.`;
        }
        if (e?.reason === "request_rejected") {
            return `Session creation failed (server ${e.status}) \u2014 see debug log`;
        }
        if (e?.reason === "malformed_response") {
            return _Pt;
        }
        return "Session creation failed — see debug log";
    }
    function qo(e) {
        if (e !== null && e.terminal === false) {
            onStateChange?.("failed", Nn, "auth");
            JA("v2_session_create_oauth_rejected", undefined, true);
            m("bridge_connect", "bridge_connect_create_oauth_rejected");
            return;
        }
        if ($o) {
            Mvn("connect", Pat(e) ? e : null);
        }
        onStateChange?.("failed", Ks(Pat(e) ? e : null));
        JA("v2_session_create_failed", undefined, true);
        m("bridge_connect", "bridge_connect_session_create_failed");
    }
    let zs = "JWT refresh failed: no OAuth token — run /login";
    let Nn = "Claude.ai login was rejected — run /login, then /remote-control";
    let Ys = "Claude.ai login expired — run /login, then /remote-control";
    let Js = "Claude.ai login expired — run /login to restore Remote Control";
    let Xs = "Signed out of Claude — run /login, then /remote-control";
    let Un = false;
    let Vr = false;
    if (reattachSessionId && AT(reattachSessionId)) {
        if (reattachOrFail) {
            t(`[remote-bridge] Reattach-or-fail: ${reattachSessionId} is teleported; failing terminally instead of minting fresh`);
            J("info", "bridge_repl_v2_revive_reattach_teleported");
            onReattachPointerDead?.();
            onStateChange?.("failed", xYe, "terminal");
            JA("v2_revive_reattach_teleported", undefined, true);
            m("bridge_connect", "bridge_connect_reattach_teleported");
            return null;
        }
        t(`[remote-bridge] Reattach suppressed for teleported session ${reattachSessionId} \u2014 minting fresh`);
        Un = true;
        reattach = false;
    }
    let C;
    if (workSecretCredentials) {
        if (!reattachSessionId || Un) {
            t("[remote-bridge] Work-secret attach has no session to reattach; failing", {
                level: "error"
            });
            onStateChange?.("failed", "Remote Control could not attach: the host supplied a session credential but no session to attach to", "terminal");
            JA("v2_work_secret_no_session", undefined, true);
            m("bridge_connect", "bridge_connect_work_secret_no_session");
            return null;
        }
        C = reattachSessionId;
        t(`[remote-bridge] Attaching to session ${C} with the host's work secret`);
        J("info", "bridge_repl_v2_work_secret_attach");
    } else if (reattachSessionId && !Un) {
        C = reattachSessionId;
        t(`[remote-bridge] Reattaching to session ${C}`);
        J("info", "bridge_repl_v2_session_reattached");
        let e = await Io((r, s)=>Od(C, baseUrl, r, orgUUID, z.http_timeout_ms, s, credentialsStore), "unarchiveSession", z, {
            getAccessToken: getAccessToken_1,
            onAuth401,
            recoveryAttemptedTokens
        });
        if (e?.outcome === "elevated_auth") {
            t(`[remote-bridge] Reattach ${C}: unarchive elevated-auth (${e.reason}) \u2014 surfacing the failure, pointer preserved`);
            J("info", "bridge_repl_v2_reattach_elevated_auth");
            let r = e.reason === "untrusted_device" && !J5();
            let { outcome, ...rest } = e;
            let b = r ? {
                terminal: true,
                reason: "request_rejected",
                status: 403
            } : {
                terminal: true,
                ...rest
            };
            onStateChange?.("failed", nke(b), kt(b));
            JA("v2_reattach_elevated_auth", undefined, true);
            m("bridge_connect", "bridge_connect_reattach_elevated_auth");
            return null;
        }
        if (e?.outcome === "gone" && reattachOrFail) {
            t(`[remote-bridge] Reattach-or-fail: ${C} gone (unarchive ${e.status}); failing terminally instead of minting fresh`);
            J("info", "bridge_repl_v2_revive_reattach_gone");
            onReattachGoneBounce();
            onReattachPointerDead?.();
            onStateChange?.("failed", xYe, "terminal");
            JA("v2_revive_reattach_gone", undefined, true, {
                reattach_origin: pe(reattachOrigin),
                revive_initiated: reviveInitiated === true
            });
            m("bridge_connect", "bridge_connect_reattach_gone");
            return null;
        }
        if (e?.outcome === "gone") {
            t(`[remote-bridge] Reattach ${C} gone (unarchive ${e.status}); minting fresh session`);
            Vr = true;
            onReattachGoneBounce();
            In = neutralFallbackTitle ?? `${NLe()}-${L7()}`;
            J("info", "bridge_repl_v2_reattach_fallback", {
                via: "unarchive",
                status: e.status
            });
            i("tengu_bridge_repl_env_expired_fresh_session", {
                v2: true,
                via: d("unarchive"),
                status: typeof e.status === "number" ? e.status : d(e.status),
                reattach_origin: pe(reattachOrigin),
                revive_initiated: reviveInitiated === true
            });
            let r = await Wo();
            if (typeof r !== "string") {
                qo(r);
                return null;
            }
            C = r;
            reattach = false;
        }
    } else {
        if (reattachOrFail) {
            t("[remote-bridge] Reattach-or-fail: no reattach pointer for this init; failing terminally instead of minting fresh");
            J("info", "bridge_repl_v2_revive_fresh_refused");
            onReattachGoneBounce();
            onStateChange?.("failed", xYe, "terminal");
            JA("v2_revive_fresh_refused", undefined, true);
            m("bridge_connect", "bridge_connect_revive_fresh_refused");
            return null;
        }
        let e = await Wo();
        if (typeof e !== "string") {
            qo(e);
            return null;
        }
        C = e;
    }
    if (reattach && requestedSessionGroupingId !== undefined && requestedSessionGroupingId !== sessionGroupingId_1) {
        t("[bridge:core] --project ignored: reattached to existing session (Project is fixed at create)");
    }
    if (neverArchive_1 && reattach) {
        Br(C, storageV5);
    } else if (!outboundOnly) {
        ys(C, reattach ? undefined : In, storageV5);
    }
    Es({
        baseUrl,
        getAccessToken: getAccessToken_1,
        skipSessionId: C,
        archive: (e)=>zt(e, baseUrl, getAccessToken_1(), orgUUID, z.http_timeout_ms, undefined, storageV5),
        storageV5
    });
    let Qs = Mo + 60000;
    let lt;
    function Fn() {
        lt = undefined;
    }
    function Hn(e) {
        if (!ooe(e) || !kn(e)) {
            if (e !== null && !ooe(e) && !eN(e)) {
                Fn();
            }
            return e;
        }
        if (!bgr()) {
            return e;
        }
        let r = Date.now();
        if (lt === undefined || r - lt.lastAtMs > Qs) {
            lt = {
                startedAtMs: r,
                lastAtMs: r,
                refusals: 0
            };
        }
        lt.lastAtMs = r;
        lt.refusals++;
        let s = r - lt.startedAtMs;
        if (lt.refusals > 1 && s >= u6r) {
            t(`[remote-bridge] /bridge refused by ${e.source} ${lt.refusals}\xD7 over ${Math.round(s / 1000)}s with nothing reaching Anthropic since \u2014 treating as a verdict`);
            return e;
        }
        t(`[remote-bridge] /bridge 403 not written by Anthropic's origin (${e.source}) \u2014 treating as unreachable`);
        J("warn", "bridge_repl_v2_bridge_403_nonorigin", {
            source: e.source
        });
        return null;
    }
    function Kr(e, r) {
        if (O || Oe !== undefined || ie !== r) {
            return Promise.resolve(null);
        }
        let s = ()=>Ln(C, e).then((v)=>{
                if (ie !== r) {
                    return v;
                }
                let b = Hn(v);
                if (b !== null && !ooe(b) && !eN(b)) {
                    $r(e);
                    io();
                }
                return b;
            });
        if (!xt()) {
            return s();
        }
        return or("owner_changed_recovery").then((v)=>{
            if (v || O || Oe !== undefined || ie !== r) {
                return null;
            }
            return s();
        });
    }
    let Go = Wr;
    let de = await Io((e, r)=>{
        Go = e;
        return Dn(C, baseUrl, e, z.http_timeout_ms, r, credentialsStore);
    }, "fetchRemoteCredentials", z, {
        getAccessToken: getAccessToken_1,
        onAuth401,
        recoveryAttemptedTokens
    });
    if (reattach && de === null) {
        t(`[remote-bridge] Reattach ${C}: /bridge failed after unarchive; surfacing retry prompt`);
        J("info", "v2_remote_creds_reattach_transient");
    }
    if (!de || ooe(de) || eN(de)) {
        let e = de === null ? reattach ? "Couldn't reconnect to your Remote Control session. Retry, or start a fresh session without --resume." : "Remote credentials fetch failed — see debug log" : eN(de) ? Ys : nke(de);
        let r = de === null ? reviveInitiated ? "auth" : "terminal" : eN(de) ? "auth" : kt(de);
        let s = de === null ? reattach ? "v2_remote_creds_reattach_transient" : "v2_remote_creds_failed" : eN(de) ? "v2_remote_creds_oauth_rejected" : kn(de) ? `v2_remote_creds_request_rejected_${de.source}` : `v2_remote_creds_${de.reason}`;
        t(`[remote-bridge] Creds failed; onStateChange ${onStateChange ? "set" : "UNSET"}, msg="${e}"`);
        onStateChange?.("failed", e, r);
        JA(s, undefined, true);
        m("bridge_connect", "bridge_connect_creds_failed");
        if (!reattach) {
            Is(C, ()=>zt(C, baseUrl, Lo(), orgUUID, z.http_timeout_ms, undefined, storageV5));
        }
        return null;
    }
    t(`[remote-bridge] Fetched bridge credentials (expires_in=${de.expires_in}s)`);
    $r(Go);
    onSessionEstablished?.(C);
    let de_worker_epoch = de.worker_epoch;
    function Vo(e) {
        de_worker_epoch = Math.max(de_worker_epoch, e);
    }
    function Ln(e, r) {
        if (workSecretCredentials || !Uao()) {
            return Dn(e, baseUrl, r, z.http_timeout_ms, undefined, credentialsStore);
        }
        let s = de_worker_epoch;
        let v = ie;
        return Zi({
            heldEpoch: s,
            send: (expectedEpoch, onRefused)=>Dn(e, baseUrl, r, z.http_timeout_ms, undefined, credentialsStore, expectedEpoch === undefined ? undefined : {
                    expectedEpoch,
                    onRefused
                }),
            maySendAgain: ()=>{
                if (AT(C)) {
                    return false;
                }
                return !O && !ee && Oe === undefined && ie === v;
            }
        }).then((b)=>{
            let b_answer = b.answer;
            try {
                let R = b_answer !== null && !ooe(b_answer) && !eN(b_answer) ? b_answer.worker_epoch : undefined;
                if (R !== undefined && !O && ie === v) {
                    Vo(R);
                }
                if (b.ending !== "not_refused" && Ht()) {
                    let accepted = R !== undefined;
                    i("tengu_bridge_repl_attach_conflict", {
                        outcome: d(b.ending === "followed_up" ? accepted ? "resolved" : "unresolved" : b.ending),
                        accepted,
                        stated_epoch: s,
                        session_epoch: b.sessionEpoch,
                        follow_ups: b.followUps,
                        fallback_reason: pe(b.ending === "unfenced_fallback" ? b.fallbackReason : undefined)
                    });
                }
            } catch (error) {
                c(error);
                J("error", "bridge_repl_v2_attach_fence_failed");
            }
            return b_answer;
        });
    }
    let sessionUrl = KMe(de.api_base_url, C);
    t(`[remote-bridge] v2 session URL: ${sessionUrl}`);
    function Zs() {
        return k("tengu_bridge_selfheal_heartbeats", true);
    }
    function $n() {
        return k("tengu_bridge_recovery_patience", true);
    }
    function zo() {
        return k("tengu_dazzling_garden", true);
    }
    function Yo() {
        return k("tengu_ccr_stream_event_flush_ms", mSt);
    }
    function Xo() {
        return k("tengu_ccr_stream_first_flush_ms", 0);
    }
    function Qo() {
        return k("tengu_ccr_stream_flush_on_first_delta", false);
    }
    function Zo() {
        return k("tengu_ccr_no_subscriber_flush_ms", 0);
    }
    function Dt() {
        if (outboundOnly) {
            return 0;
        }
        return k("tengu_ccr_no_subscriber_hold_ms", 0);
    }
    function Yt() {
        return Dt() > 0 || transport.mayHoldUploads?.() === true;
    }
    function sseKeepaliveMaxIntervalSeconds() {
        return k("tengu_ccr_sse_keepalive_max_interval_s", 0);
    }
    function ei() {
        if (outboundOnly) {
            return false;
        }
        return k("tengu_ccr_drop_unwatched_stream_events", false);
    }
    function Xt() {
        if (outboundOnly) {
            return Co;
        }
        return as();
    }
    function ta() {
        return k("tengu_ccr_idle_heartbeat", false);
    }
    function ra() {
        return k("tengu_ccr_reconnect_beat", false);
    }
    function na() {
        return k("tengu_ccr_reactivation_beat", false);
    }
    function oa() {
        return k("tengu_ccr_skip_redundant_heartbeat", false);
    }
    let idleTracker = Lvn();
    let gzipRequestBodyFetch = Sst("ccr_worker", storageV5);
    function ti() {
        return {
            heartbeatIntervalMs: z.heartbeat_interval_ms,
            heartbeatJitterFraction: z.heartbeat_jitter_fraction,
            onRequestAuthOk,
            causeTypedCloseCodes: true,
            selfHealHeartbeats: Zs(),
            advertiseHeartbeatProbeSupport: ta(),
            beatOnStaleReconnect: ra(),
            idleTracker,
            beatOnReactivation: na(),
            skipRedundantHeartbeats: oa(),
            uploadTrim: ()=>k("tengu_ccr_upload_trim", {}),
            uploadHoldMarker: ()=>k("tengu_ccr_upload_hold_marker", false),
            eventHoldEnabled: ()=>k("tengu_ccr_event_hold_enabled", true),
            processExiting,
            streamEventFlushIntervalMs: Yo(),
            streamEventFirstFlushMs: Xo(),
            streamEventFlushOnFirstDelta: Qo(),
            sseConnectTimeoutMs: ()=>JX().sse_connect_timeout_ms,
            gzipRequestBodyFetch,
            noSubscriberStreamEventFlushIntervalMs: Zo(),
            noSubscriberUploadHoldMs: Dt(),
            dropUnwatchedStreamEvents: ei(),
            sseKeepaliveMaxIntervalSeconds,
            outboundOnly,
            nonOrigin403Retry: bgr(),
            inboundReadReceipts: Tst,
            onNonOriginRejectionRecovered,
            retainUndeliveredOnClose: true,
            internalEventUploader: {
                maxConsecutiveFailures,
                maxBatchBytes,
                requestTimeoutMs
            }
        };
    }
    let transport;
    try {
        transport = await p6r({
            ...ti(),
            sessionUrl,
            ingressToken: de.worker_jwt,
            sessionId: C,
            epoch: de.worker_epoch,
            initialSequenceNum: reattach ? reattachSequenceNum : undefined,
            getAuthToken: ()=>de.worker_jwt
        });
    } catch (error) {
        t(`[remote-bridge] v2 transport setup failed: ${l(error)}`, {
            level: "error"
        });
        onStateChange?.("failed", `Transport setup failed: ${l(error)}`);
        JA("v2_transport_setup_failed", undefined, true);
        m("bridge_connect", "bridge_connect_transport_failed");
        if (!reattach) {
            Is(C, ()=>zt(C, baseUrl, Lo(), orgUUID, z.http_timeout_ms, undefined, storageV5));
        }
        return null;
    }
    t(`[remote-bridge] v2 transport created (epoch=${de.worker_epoch})`);
    onStateChange?.("ready");
    let { worker_jwt, worker_epoch, api_base_url } = de;
    let jd = null;
    let Bd = new Set;
    let sa = new Set;
    let aa = false;
    let Nd = false;
    let zr = 0;
    function Ud() {
        zr++;
        aa = false;
        sa = new Set;
    }
    let da = null;
    function Fd(e, r = false) {}
    function Hd() {
        da = null;
    }
    function canAdoptInjectedMcp() {
        return false;
    }
    function xd(e, r, s = false) {
        return {
            added: [],
            removed: []
        };
    }
    function la(e, r = false) {}
    let onMcpSetServers = (e)=>{
        if (Object.keys(e).length === 0) {
            onProjectsBindingHint?.();
            return {
                ok: true,
                added: [],
                removed: [],
                errors: {},
                unknownServerCount: 0
            };
        }
        return {
            ok: false,
            error: "Server-injected MCP servers are disabled for this Remote Control session"
        };
    };
    let jt = 0;
    let Bt = false;
    function requestInjectedMcpReassert() {
        if (O) {
            return;
        }
        let e = Date.now();
        if (e - jt < md) {
            Bt = true;
            return;
        }
        jt = e;
        Bt = false;
        Rt.refreshNow(C);
    }
    function oi() {
        if (O || !Bt) {
            return;
        }
        Bt = false;
        jt = Date.now();
        Rt.refreshNow(C);
    }
    function Yr() {
        try {
            pa("withdrawn");
        } catch (error) {
            c(error);
            m("bridge_webagent_mcp_inject", "relinquish_threw");
        }
    }
    function pa(e) {}
    let Qt = new moe(z.uuid_dedup_buffer_size);
    let Jr = new Set;
    if (initialMessages) {
        for (let e of initialMessages){
            Jr.add(e.uuid);
            Qt.add(e.uuid);
        }
    }
    let ha = new moe(z.uuid_dedup_buffer_size);
    let cancellableRequests = new Map;
    let qn = new moe(z.uuid_dedup_buffer_size);
    let Me = new Rn;
    let he = new Rn;
    let Gn = 0;
    let Nt = false;
    let gt = false;
    let Zt = new Map;
    let ma = 64;
    let mr = reattach;
    let Vn;
    let gr;
    let Pe = !reattach && !noHistoryBackfill && !Vr && Ir(Xt().scope, remoteControlOrigin) ? "deferred" : "live";
    let Xr = remoteControlOrigin;
    let Qr = new moe(z.uuid_dedup_buffer_size);
    let vt;
    let vr = {};
    let O = false;
    let Zr;
    let recovery_in_flight = false;
    let ai = 0;
    let ie = 0;
    function di() {
        ai++;
        ie = ai;
        recovery_in_flight = true;
        er = Date.now();
        br = false;
        return ie;
    }
    function ui(e) {
        if (ie !== e) {
            return false;
        }
        ie = 0;
        recovery_in_flight = false;
        er = 0;
        li();
        return true;
    }
    let en = false;
    function li() {
        if (!en || O || ee) {
            en = false;
            return;
        }
        en = false;
        if (ct !== undefined || !transport.isConnectedStatus()) {
            return;
        }
        if (Me.active || he.active) {
            Wt();
        }
        fo();
    }
    function ci() {
        ie = 0;
        recovery_in_flight = false;
        er = 0;
        li();
    }
    let er = 0;
    let br = false;
    let fi = z.init_retry_max_attempts * z.http_timeout_ms + (z.init_retry_max_attempts - 1) * z.init_retry_max_delay_ms;
    let ga = z.oauth_retry_base_delay_ms * (2 ** z.oauth_retry_max_attempts - 1) + z.oauth_retry_max_attempts * fi;
    let _i = 2 * (15000 + fi + ga);
    let tr = 0;
    let pi = 3;
    let tn = 0;
    let hi = ms();
    function onRequestAuthOk() {
        tn = 0;
        hi.noteHealthyBeat(Date.now());
        Fn();
        onAuthProven?.();
    }
    let rn = false;
    let ct;
    function rr() {
        clearTimeout(ct);
        ct = undefined;
    }
    let Ut = false;
    function nn(e) {
        Ut = false;
        onStateChange?.("reconnecting", e);
    }
    function yr() {
        Ut = false;
        onStateChange?.("connected");
    }
    function me(e, r = "terminal") {
        Ut = true;
        rr();
        Xe = undefined;
        on();
        co?.end();
        onStateChange?.("failed", e, r);
    }
    function mi() {
        let retryNow = Yt();
        return Promise.all([
            transport.flush({
                retryNow
            }),
            retryNow && transport.flushInternalEvents?.({
                retryNow
            })
        ]).then(()=>{});
    }
    function Rr(e = Ss) {
        let r = Q(e);
        let s = Promise.race([
            mi().then(()=>true),
            r.then(()=>false)
        ]);
        let v = Promise.race([
            transport.flushDeliveryAcks?.({
                retryNow: true
            }),
            r
        ]);
        return Promise.all([
            s,
            v
        ]).then(([b])=>b);
    }
    async function gi(e, r = Date.now()) {
        let s = transport.getUploadBacklog?.();
        let hold_preflush_landed = await Rr(bd);
        let b = {
            hold_preflush_ms: Date.now() - r,
            hold_preflush_landed,
            hold_preflush_inflight_age_ms: s?.oldestInFlightMs,
            hold_preflush_lane_in_backoff: s?.backingOff
        };
        if (!hold_preflush_landed) {
            f("ccr_no_subscriber_hold", e);
        }
        return b;
    }
    function vi() {
        let e = transport.getUploadBacklog?.();
        return {
            unsent_client_events_at_close: e?.unsentClientEvents,
            unsent_internal_events_at_close: e?.unsentInternalEvents
        };
    }
    function on() {
        let e = Me.end();
        let r = he.end().map((s)=>s.frame);
        Nt = false;
        bi(e.length + r.length, r, transport.discardUndeliveredEvents?.() ?? []);
    }
    function bi(queued, r, s) {
        if (queued === 0 && s.length === 0) {
            return;
        }
        J("warn", "bridge_repl_v2_client_events_lost", {
            queued,
            undelivered: s.length
        });
        f("bridge_repl", "client_events_lost_at_dead_end", {
            queued,
            undelivered: s.length
        });
        let v = [
            ...s.map((R)=>R.payload.subtype),
            ...r.map((R)=>{
                if (R.type === "system" && "subtype" in R) {
                    return R.subtype;
                }
            })
        ];
        let has_terminal_bookend = v.includes("task_notification");
        let has_level = v.includes("background_tasks_changed");
        if (has_terminal_bookend || has_level) {
            f("ccr_task_status_publish", "status_events_lost_at_dead_end", {
                has_terminal_bookend,
                has_level
            });
        }
    }
    let ve;
    let Oe;
    let Ft = false;
    let nr;
    let bt;
    let Xe;
    let Ee = false;
    let ee = false;
    let Er;
    function Ht() {
        return true;
    }
    function ft(e, r, s = true) {
        if (s) {
            nr = undefined;
            bt = undefined;
        }
        if (!Ft || !Ht()) {
            return false;
        }
        if (r === undefined) {
            f("bridge_presence", e);
        } else {
            f("bridge_presence", e, r);
        }
        return true;
    }
    function we(e, r) {
        nr = undefined;
        bt = undefined;
        Ee = true;
        if (!Ht()) {
            return false;
        }
        if (!Ft) {
            m("bridge_connect", "bridge_connect_died_before_presence");
            return false;
        }
        if (r === undefined) {
            m("bridge_presence", e);
        } else {
            m("bridge_presence", e, r);
        }
        return true;
    }
    let sn = false;
    function onNonOriginRejectionRecovered(e) {
        if (O || ee || Ee) {
            return;
        }
        t(`[remote-bridge] SSE stream live again after ${e.attempts} non-origin 403(s) over ${Math.round(e.streakMs / 1000)}s (source=${e.source})`);
        if (ft(kd[e.source], {
            attempts: e.attempts,
            streak_s: Math.round(e.streakMs / 1000),
            first_in_episode: sn ? 0 : 1
        }, false)) {
            sn = true;
        }
    }
    function Kn(detail) {
        if (!QNe(detail?.rejectSource)) {
            we(ks(detail));
            return;
        }
        if (we(ks(detail), {
            ...detail.streak !== undefined && {
                attempts: detail.streak.attempts,
                streak_s: Math.round(detail.streak.streakMs / 1000)
            },
            first_in_episode: sn ? 0 : 1
        })) {
            sn = true;
        }
    }
    function yi(e) {
        if (AT(C)) {
            return;
        }
        let r = ve === undefined ? undefined : Ms(ve.code, ve.cause);
        if (Oe !== undefined || ve === undefined || r === undefined || br && As(r)) {
            return;
        }
        Oe = r;
        t(`[remote-bridge] ${e} latched a stashed supersession close (${ve.code}/${ve.cause ?? "uncaused"}) \u2014 archive suppressed`);
        if (!Ee) {
            if (ve.code === 403) {
                Kn(ve.detail);
            } else if (ve.code === 404) {
                we("transport_closed_404");
            } else {
                ft("transport_closed_4090");
                Ee = true;
            }
            Xe = undefined;
        }
    }
    function zn(e) {
        if (!Ht()) {
            return;
        }
        switch(e.leg){
            case "ok":
                g("bridge_token_refresh");
                return;
            case "sad":
                f("bridge_token_refresh", e.code);
                return;
            case "bad":
                m("bridge_token_refresh", e.code);
                return;
        }
    }
    function Ri(e) {
        if (!Sgr()) {
            return;
        }
        let r = abo();
        if (r === undefined || r.generation <= e) {
            return Si();
        }
        return Ei(r.reason);
    }
    function Ei(reason) {
        switch(reason){
            case "signed_out":
                return "host_signed_out";
            case "identity_changed":
                return "host_account_changed";
            case "transient":
            case "refresh_failed":
                return;
        }
    }
    function Si() {
        if (bt === undefined) {
            return;
        }
        if (bt.generation === I1n()) {
            return bt.code;
        }
        let e = abo();
        if (e === undefined) {
            return undefined;
        }
        return Ei(e.reason);
    }
    function Ti(e) {
        if (e === "host_signed_out") {
            return gmo;
        }
        return hmo;
    }
    function wi(e) {
        if (e === "host_signed_out") {
            return "auth";
        }
        return "terminal";
    }
    function Yn() {
        return ownerPin !== undefined && !O && !ee && T_e();
    }
    function xt() {
        return Yn() && ownerPin !== undefined && ownerPin.identityLooksChanged();
    }
    async function Ci(e, r) {
        if (ee) {
            return "changed";
        }
        if (!Yn() || ownerPin === undefined) {
            return "unchanged";
        }
        let s = await ownerPin.confirmChanged(r);
        if (s === "changed") {
            await ya(e);
            return "changed";
        }
        if (ee) {
            return "changed";
        }
        return s;
    }
    async function or(e) {
        return await Ci(e) === "changed";
    }
    async function Sr(e, r) {
        if (xt() && await or(e)) {
            return true;
        }
        return O || ie !== r;
    }
    async function ya(e) {
        if (O || ee || ownerPin === undefined) {
            return;
        }
        ee = true;
        Er?.();
        Er = undefined;
        Rt.cancelAll();
        ci();
        onOwnerChanged?.();
        rn = false;
        yi("owner_changed");
        ve = undefined;
        clearTimeout(sr);
        rr();
        dn?.();
        dn = undefined;
        Pi();
        Oi();
        mao(owner);
        if (AT(C)) {
            t(`[remote-bridge] Signed-in account changed under teleported session ${C} (${e}) \u2014 latched only`);
            on();
            hn();
            Yr();
            transport.close();
            return;
        }
        let episode_already_dead = Ee || Oe !== undefined;
        t(`[remote-bridge] Signed-in account changed under ${C} (${e}${episode_already_dead ? ", episode already dead" : ""}) \u2014 stopping`);
        J("info", "bridge_repl_v2_owner_changed");
        if (!episode_already_dead) {
            ft(e);
            Ee = true;
            me(Gbr, "terminal");
            transport.write(Smo(C, "account_changed"));
            await Rr(Yt() ? z.teardown_archive_timeout_ms : Ss).catch(()=>{});
        } else if (!Ut) {
            me(Gbr, "terminal");
        } else {
            on();
        }
        hn();
        Yr();
        if (!O) {
            transport.close();
        }
        if (Oe !== undefined) {
            return;
        }
        let s;
        if (neverArchive_1) {
            s = "skipped_host_owned";
            t(`[remote-bridge] Owner-changed settle left host-owned session ${C} unarchived`);
        } else {
            let v = await zt(C, baseUrl, ownerPin.ownerToken(), orgUUID, z.teardown_archive_timeout_ms, undefined, storageV5);
            s = Ps(v, Oe);
            t(`[remote-bridge] Owner-changed settle archived ${C} with the owner's credential (archive=${v})`);
        }
        if (Ht()) {
            i("tengu_bridge_owner_changed", {
                site: d(e),
                archive_status: d(s),
                episode_already_dead
            });
        }
    }
    function ki() {
        if (Oe !== undefined) {
            return Oe;
        }
        if (ee) {
            return "owner_changed";
        }
    }
    function Jn() {
        if (ownerPin !== undefined && T_e() && ownerPin.identityLooksChanged()) {
            return {
                token: ownerPin.ownerToken(),
                source: "pinned_owner"
            };
        }
        return {
            token: getAccessToken(),
            source: "current"
        };
    }
    let an = reattach;
    let Ie = new Map;
    let Lt = new Set;
    let Xn = new ht(256);
    let Mi = new ht(z.uuid_dedup_buffer_size);
    function Qn(request_id, r) {
        Lt.delete(request_id);
        if (Ie.delete(request_id) && r) {
            oFn(request_id);
        }
    }
    function Zn() {
        let e;
        let r = false;
        for (let [s, v] of Ie){
            if (Lt.has(s)) {
                continue;
            }
            r = true;
            e = v.details ?? e;
        }
        if (r) {
            He("requires_action", e);
        } else {
            He("running");
        }
    }
    let eo;
    let He = (e, pending_action)=>{
        if (onBeforePushTriggeringState && !ee && (e === "requires_action" || e === "idle")) {
            onBeforePushTriggeringState();
        }
        transport.reportState(e, pending_action);
        if (e === "requires_action" && pending_action) {
            an = true;
            let s = [
                ...Ie.values()
            ].flatMap((v)=>{
                if (v.details) {
                    return [
                        v.details
                    ];
                }
                return [];
            }).reverse();
            transport.reportMetadata({
                pending_action,
                pending_actions: pao(pending_action, s.filter((v)=>v !== pending_action))
            });
        } else if (an) {
            an = false;
            transport.reportMetadata({
                pending_action: null,
                pending_actions: null
            });
        }
        if (e === "running" && eo !== "running") {
            transport.reportMetadata({
                post_turn_summary: null,
                recap: null
            });
            slo();
            if (Pe === "deferred") {
                delete vr.post_turn_summary;
                delete vr.recap;
            }
        }
        eo = e;
    };
    function getPendingPrompts() {
        Lt.clear();
        return [
            ...Ie.values()
        ].map((e)=>e.request);
    }
    let dn;
    let Ai;
    let un;
    if (gitRepoUrl) {
        (async ()=>{
            let { isNestedGitLabProject, parseGitRemote, parseGitHubRepository } = await import("/$bunfs/root/chunk-1abjsa9q.js");
            let { addWatchedRepo, removeWatchedRepo, getCachedBranchForRepo, onRepoBranchChange, getRemoteUrlForDir } = await import("/$bunfs/root/chunk-q4j4feg3.js");
            let H = await import("/$bunfs/root/chunk-mx7mt0xm.js");
            let A = parseGitRemote(gitRepoUrl);
            if (A && isNestedGitLabProject(A)) {
                return;
            }
            let L = A ? `${A.owner}/${A.name}` : parseGitHubRepository(gitRepoUrl);
            if (!L) {
                return;
            }
            let ae = A ? `${A.host}/${A.owner}/${A.name}` : `github.com/${L}`;
            let B = getOriginalCwd();
            await addWatchedRepo(B);
            if (O || ee) {
                removeWatchedRepo(B);
                return;
            }
            let X;
            let Se = reattach;
            let le = reattach;
            let Je = 0;
            let Ze = false;
            let pt = false;
            let Ar = async ()=>{
                if (Ze) {
                    pt = true;
                    return;
                }
                Ze = true;
                try {
                    do {
                        pt = false;
                        let xe = Je;
                        if (O || ee) {
                            return;
                        }
                        let nt = getOriginalCwd();
                        if (nt !== B) {
                            removeWatchedRepo(B);
                            B = nt;
                            await addWatchedRepo(nt);
                            if (O || ee) {
                                removeWatchedRepo(nt);
                                return;
                            }
                        }
                        let Ce = await getCachedBranchForRepo(nt);
                        if (xe !== Je) {
                            pt = true;
                            continue;
                        }
                        if (O || Qe("branch_metadata")) {
                            return;
                        }
                        if (Ce === undefined) {
                            if (X !== null) {
                                X = null;
                                if (Se) {
                                    Se = false;
                                    transport.reportMetadata({
                                        current_branches: {
                                            [L]: null
                                        },
                                        worktree_state: {
                                            [L]: null
                                        }
                                    });
                                } else {
                                    transport.reportMetadata({
                                        current_branches: {
                                            [L]: null
                                        }
                                    });
                                }
                            }
                            continue;
                        }
                        if (k("tengu_ccr_handoff_metadata", false)) {
                            let [Ua, mn] = await Promise.all([
                                H.collectWorktreeState(nt, Ce),
                                H.withCollectTimeout(getRemoteUrlForDir(nt)).catch(()=>null)
                            ]);
                            if (xe !== Je) {
                                pt = true;
                                continue;
                            }
                            if (O || Qe("branch_metadata")) {
                                return;
                            }
                            let gn = mn ? parseGitRemote(mn) : null;
                            let zi = mn ? parseGitHubRepository(mn) : null;
                            let Yi = (gn ? `${gn.host}/${gn.owner}/${gn.name}` : zi ? `github.com/${zi}` : null) === ae;
                            let ho = Yi ? Ce : null;
                            let Ve = Yi ? Ua : null;
                            let Ji = Ve ? JSON.stringify([
                                ho,
                                Ve.head_sha,
                                Ve.unpushed_count,
                                Ve.is_dirty,
                                Ve.mid_operation,
                                Ve.upstream_exists,
                                Ve.has_submodules,
                                Ve.submodules_unverified,
                                Ve.has_lfs
                            ]) : JSON.stringify([
                                ho
                            ]);
                            if (Ji === X) {
                                continue;
                            }
                            X = Ji;
                            t(`[remote-bridge] worktree_state \u2192 ${L}: ${JSON.stringify(Ve)}`);
                            Se = Ve !== null;
                            if (Ve !== null) {
                                le = true;
                            }
                            transport.reportMetadata({
                                current_branches: {
                                    [L]: ho
                                },
                                worktree_state: {
                                    [L]: Ve
                                }
                            });
                            continue;
                        }
                        if (Se) {
                            Se = false;
                            X = Ce;
                            transport.reportMetadata({
                                current_branches: {
                                    [L]: Ce
                                },
                                worktree_state: {
                                    [L]: null
                                }
                            });
                            continue;
                        }
                        if (Ce === X) {
                            continue;
                        }
                        X = Ce;
                        transport.reportMetadata({
                            current_branches: {
                                [L]: Ce
                            }
                        });
                    }while (pt)
                } catch (error) {
                    t(`[remote-bridge] current_branches emit failed: ${l(error)}`);
                } finally{
                    Ze = false;
                }
            };
            Ai = ()=>{
                X = undefined;
                Se = le;
                Je++;
                if (Ze) {
                    pt = true;
                }
            };
            un = ()=>void Ar();
            let Vt = onRepoBranchChange(un);
            dn = ()=>{
                Vt();
                removeWatchedRepo(B);
            };
            Ar();
        })().catch((e)=>t(`[remote-bridge] current_branches setup failed: ${l(e)}`));
    }
    let Pi = Rq(()=>idleTracker.noteActivity());
    let Oi = eu(()=>{
        transport.setStreamEventFlushIntervalMs?.(Yo());
        transport.setStreamEventFirstFlushMs?.(Xo());
        transport.setStreamEventFlushOnFirstDelta?.(Qo());
        transport.setNoSubscriberStreamEventFlushIntervalMs?.(Zo());
        transport.setNoSubscriberUploadHoldMs?.(Dt());
        transport.setDropUnwatchedStreamEvents?.(ei());
        Ia();
    });
    let owner = {};
    Kus({
        owner,
        sessionId: C,
        report: (e, r)=>transport.reportDelivery(e, r)
    });
    let ir = new Map;
    let Ii = !onUserMessage;
    let Di = false;
    let cn = "initial";
    let ro = 0;
    let sr;
    function ji(e) {
        if (O) {
            return;
        }
        i("tengu_bridge_repl_connect_timeout", {
            v2: true,
            elapsed_ms: z.connect_timeout_ms,
            cause: d(e)
        });
        m("bridge_connect", "bridge_connect_timeout");
        if (Ee) ;
        else if (Object.values(Ge).some((r)=>r.cause === e)) {
            Xe = "recovery_connect_timeout";
        } else if (e === "proactive_refresh") {
            Xe = "refresh_connect_timeout";
        }
    }
    async function Ea(e) {
        if (!onAuth401) {
            return "rejected";
        }
        try {
            if (await onAuth401(e)) {
                return "recovered";
            }
        } catch (error) {
            t(`[remote-bridge] Proactive forced OAuth refresh threw: ${l(error)}`, {
                level: "error"
            });
        }
        if (!zo() || !classifyFailedOAuthRefresh) {
            return "rejected";
        }
        return classifyFailedOAuthRefresh();
    }
    let Sa = 3;
    let oo;
    let early_retry = 0;
    function io() {
        oo = undefined;
        early_retry = 0;
    }
    function Bi(e) {
        return e !== undefined && e === oo && zo();
    }
    let Rt = yct({
        refreshBufferMs: z.token_refresh_buffer_ms,
        onExhausted: (e)=>{
            if (!O && !Ee) {
                zn({
                    leg: "bad",
                    code: "chain_exhausted_no_oauth"
                });
            }
            if (recovery_in_flight || O) {
                return;
            }
            if (Ut) {
                t(`[remote-bridge] Token refresh chain exhausted for ${e} \u2014 terminal state already showing, not repainting`);
                return;
            }
            t(`[remote-bridge] Token refresh chain exhausted for ${e} \u2014 surfacing auth failure`, {
                level: "error"
            });
            onStateChange?.("failed", "OAuth token unavailable — run /login to restore Remote Control", "auth");
        },
        getAccessToken: async ()=>{
            if (ee) {
                return;
            }
            if (xt()) {
                let s = Ee;
                if (await or("owner_changed_refresh")) {
                    if (ee && !s) {
                        zn({
                            leg: "sad",
                            code: "owner_changed"
                        });
                    }
                    return;
                }
            }
            if (workSecretCredentials) {
                return Ho;
            }
            let e = getAccessToken();
            let r = Bi(e);
            try {
                if (r) {
                    await onReadFreshOAuthToken?.();
                } else {
                    await onProactiveRefresh?.();
                }
            } catch (error) {
                t(`[remote-bridge] scheduler token refresh failed: ${l(error)}`, {
                    level: "error"
                });
            }
            return getAccessToken() ?? e;
        },
        onRefresh: (e, r)=>{
            (async ()=>{
                if (Oe !== undefined || ee) {
                    t(`[remote-bridge] Proactive refresh skipped: session ${ee ? "stopped for an owner change" : "superseded"}`);
                    return;
                }
                if (recovery_in_flight || O) {
                    t("[remote-bridge] Recovery already in flight, skipping proactive refresh");
                    if (recovery_in_flight && jt !== 0) {
                        Bt = true;
                    }
                    return;
                }
                if (AT(e)) {
                    t(`[remote-bridge] Proactive refresh suppressed for teleported session ${e}`);
                    return;
                }
                let s = di();
                let v = Ee;
                let b = false;
                let _;
                let R;
                let j;
                let H;
                let A = false;
                function L(B, X, Se = "refresh_credentials_rejected", le) {
                    if (O) {
                        return;
                    }
                    if (Xe !== undefined && ve === undefined) {
                        we(Xe);
                        Xe = undefined;
                    } else if (!v) {
                        nr = Se;
                        bt = le === undefined ? undefined : {
                            code: le,
                            generation: I1n()
                        };
                    }
                    _ = B;
                    R = "refresh_credentials_rejected";
                    j = X;
                }
                async function ae() {
                    if (!await Sr("owner_changed_refresh", s)) {
                        return false;
                    }
                    if (ee) {
                        H = {
                            leg: "sad",
                            code: "owner_changed"
                        };
                    }
                    return true;
                }
                try {
                    if (await ae()) {
                        return;
                    }
                    let B = Bi(r);
                    if (!B) {
                        io();
                    }
                    let X = Date.now();
                    let Se = zr;
                    let le = await lr(()=>{
                        if (B) {
                            return Promise.resolve({
                                terminal: false,
                                reason: "oauth_rejected"
                            });
                        }
                        if (O || Oe !== undefined || ie !== s) {
                            return Promise.resolve(null);
                        }
                        return Ln(e, r).then((Ze)=>{
                            if (O || ie !== s) {
                                return Ze;
                            }
                            return Hn(Ze);
                        });
                    }, "fetchRemoteCredentials (proactive)", z);
                    if (O || ie !== s) {
                        return;
                    }
                    if (eN(le)) {
                        t(B ? "[remote-bridge] Proactive cycle: bearer already rejected by /bridge — retrying the forced OAuth refresh without re-registering" : "[remote-bridge] Proactive /bridge re-mint rejected (oauth_rejected) — attempting forced OAuth refresh");
                        if (!B) {
                            J("error", "bridge_repl_v2_proactive_oauth_rejected");
                        }
                        if (await ae()) {
                            return;
                        }
                        let Ze = I1n();
                        let pt = await Ea(r);
                        let Ar = getAccessToken() ?? r;
                        if (await ae()) {
                            return;
                        }
                        if (pt === "unreachable") {
                            t("[remote-bridge] Proactive forced OAuth refresh got no verdict (token endpoint unreachable); keeping transport, a later cycle retries the refresh");
                            if (!B) {
                                H = {
                                    leg: "sad",
                                    code: "refresh_deferred_transient"
                                };
                            }
                            oo = r;
                            let rearmed = early_retry < Sa;
                            if (AT(e)) {
                                rearmed = false;
                            }
                            if (rearmed) {
                                early_retry++;
                                Rt.scheduleFromExpiresIn(e, 0);
                            }
                            J("info", "bridge_repl_v2_proactive_refresh_unreachable", {
                                early_retry,
                                rearmed
                            });
                            return;
                        }
                        let Vt = pt === "recovered";
                        if (Vt) {
                            io();
                        }
                        let xe = Vt ? await lr(()=>{
                            if (O || Oe !== undefined || ie !== s) {
                                return Promise.resolve(null);
                            }
                            return Ln(e, Ar).then((Ce)=>{
                                if (O || ie !== s) {
                                    return Ce;
                                }
                                return Hn(Ce);
                            });
                        }, "fetchRemoteCredentials (proactive post-refresh)", z) : null;
                        if (O || ie !== s) {
                            return;
                        }
                        if (Vt && xe === null) {
                            t("[remote-bridge] Proactive post-refresh re-mint failed (transient); fallback refresh will retry");
                            if (Oe === undefined) {
                                H = {
                                    leg: "sad",
                                    code: "post_refresh_remint_null"
                                };
                            }
                            return;
                        }
                        if (ooe(xe)) {
                            H = {
                                leg: "bad",
                                code: `post_refresh_credentials_${kt(xe)}`
                            };
                            L(nke(xe), kt(xe), Tn("refresh", xe));
                            return;
                        }
                        if (xe === null || eN(xe)) {
                            let Ce = Vt ? undefined : Ri(Ze);
                            if (Ce !== undefined) {
                                H = {
                                    leg: "sad",
                                    code: Ce
                                };
                                J("info", "bridge_repl_v2_proactive_host_declined");
                                L(Ti(Ce), wi(Ce), "refresh_credentials_rejected", Ce);
                                return;
                            }
                            H = {
                                leg: "bad",
                                code: Vt ? "oauth_rejected_after_refresh" : onAuth401 ? "oauth_rejected_refresh_failed" : "oauth_rejected_no_refresh_path"
                            };
                            L(Js, "auth");
                            return;
                        }
                        $r(Ar);
                        let nt = await so(xe, "proactive_refresh", 0, X, Se);
                        if (nt === "suppressed_teleported") {
                            A = true;
                        }
                        if (nt === "rebuilt") {
                            b = true;
                            H = {
                                leg: "sad",
                                code: "oauth_rejected_recovered"
                            };
                            t("[remote-bridge] Transport rebuilt (proactive refresh after forced OAuth refresh)");
                        }
                        return;
                    }
                    if (!le) {
                        t("[remote-bridge] Proactive /bridge re-mint failed (transient); fallback refresh will retry");
                        J("warn", "bridge_repl_v2_proactive_remint_null");
                        if (Oe === undefined) {
                            H = {
                                leg: "sad",
                                code: "remint_null"
                            };
                        }
                        return;
                    }
                    if (ooe(le)) {
                        H = {
                            leg: "bad",
                            code: `credentials_${kt(le)}`
                        };
                        L(nke(le), kt(le), Tn("refresh", le));
                        return;
                    }
                    $r(r);
                    let Je = await so(le, "proactive_refresh", 0, X, Se);
                    if (Je === "suppressed_teleported") {
                        A = true;
                    }
                    if (Je === "rebuilt") {
                        b = true;
                        H = {
                            leg: "ok"
                        };
                        t("[remote-bridge] Transport rebuilt (proactive refresh)");
                    }
                } catch (error) {
                    t(`[remote-bridge] Proactive refresh rebuild failed: ${l(error)}`, {
                        level: "error"
                    });
                    J("error", "bridge_repl_v2_proactive_refresh_failed");
                    if (!O && !ee) {
                        _ = `Refresh failed: ${l(error)}`;
                        R = "refresh_rebuild_failed";
                        j = "terminal";
                        H = {
                            leg: "bad",
                            code: "rebuild_threw"
                        };
                    }
                } finally{
                    let B = A;
                    if (AT(e)) {
                        B = true;
                    }
                    if (H !== undefined && !v && !O && !(B && H.leg === "bad")) {
                        zn(H);
                    }
                    if (!ui(s)) {
                        return;
                    }
                    oi();
                    let X = ve;
                    ve = undefined;
                    if (B) {
                        if (X !== undefined && !O) {
                            me("Session teleported to cloud");
                        }
                    } else if (X !== undefined && !b && !O && !Ee) {
                        let Se = _n(X.code, X.cause, X.detail, true);
                        if (_ !== undefined && !Se && !O && !recovery_in_flight) {
                            me(_, j);
                        }
                    } else if (X !== undefined && b && !O) {
                        if (Fi(X.code) && !v) {
                            ft(Ge[X.code].recoveredCode);
                        }
                    } else if (_ !== undefined && !O) {
                        me(_, j);
                        if (R !== undefined && R !== "refresh_credentials_rejected" && !v) {
                            we(R);
                        }
                    }
                }
            })();
        },
        label: "remote"
    });
    Rt.scheduleFromExpiresIn(C, de.expires_in);
    Er = ownerPin?.subscribe(()=>{
        or("owner_changed");
    });
    if (xt()) {
        or("owner_changed");
    }
    let $t;
    function Ni() {
        transport.setOnConnect((v)=>{
            if (ee) {
                return;
            }
            clearTimeout(sr);
            tr = 0;
            Xe = undefined;
            Ee = false;
            nr = undefined;
            bt = undefined;
            Ut = false;
            Fn();
            Oe = undefined;
            if (Ie.size > 0) {
                let b = [
                    ...Ie.values()
                ].findLast((_)=>_.details !== undefined);
                He("requires_action", b?.details);
                Lt.clear();
            } else if (eo === "running" && Et(()=>true)) {
                He("running");
            }
            t("[remote-bridge] v2 transport connected");
            J("info", "bridge_repl_v2_transport_connected");
            tps();
            Aa(v);
            if (Pe === "deferred") {
                if (qt === undefined && !$i) {
                    pn(Xr, ()=>{
                        $i = true;
                    });
                }
            } else {
                if (dr) {
                    pn(null, ()=>{
                        dr = false;
                    });
                }
                fo();
            }
            i("tengu_bridge_repl_ws_connected", {
                v2: true,
                cause: d(cn),
                ...ro > 0 && {
                    remint_attempts: ro
                }
            });
            if (!Ft && Ht()) {
                Ft = true;
                g("bridge_presence");
            }
            if (Pe === "deferred") {
                if (!mr && Ie.size === 0) {
                    let b = initialMessages?.filter((_)=>foe(_)).findLast((_)=>!eSr(_));
                    if (Et(()=>b !== undefined && TQt(b) && !Cn(b))) {
                        He("running");
                    }
                }
                mr = true;
            }
            if (!mr && initialMessages && initialMessages.length > 0 && !Vr) {
                mr = true;
                let b = transport;
                let _ = Ma(initialMessages);
                let R = Promise.withResolvers();
                _.catch((j)=>t(`[remote-bridge] flushHistory failed: ${j}`)).finally(()=>{
                    R.resolve();
                    if (transport !== b || O || ee || recovery_in_flight) {
                        return;
                    }
                    Wt();
                    yr();
                });
                Vn = Promise.all([
                    _,
                    R.promise
                ]);
                Vn.catch(()=>{});
            } else if (wr) {
                yr();
            } else if ((Me.active || he.active) && !recovery_in_flight) {
                rr();
                Wt();
                yr();
            } else if (!Me.active) {
                yr();
            }
            Pa();
            gr = transport;
        });
        transport.setOnData((v)=>{
            if (ee) {
                return;
            }
            if ($t !== undefined) {
                $t.push(v);
                return;
            }
            if (!xt()) {
                s(v);
                return;
            }
            $t = [
                v
            ];
            r();
        });
        let e = transport;
        transport.setOnClose((v, b, _)=>{
            if (gr === e) {
                gr = undefined;
            }
            return _n(v, b, _);
        });
        function r() {
            or("owner_changed").then((v)=>{
                let b = $t;
                if (b === undefined) {
                    return;
                }
                if (v || O) {
                    $t = undefined;
                    return;
                }
                let b_length = b.length;
                while(b.length > 0){
                    if (ee || O) {
                        $t = undefined;
                        return;
                    }
                    if (b_length === 0 && xt()) {
                        r();
                        return;
                    }
                    b_length = Math.max(0, b_length - 1);
                    let R = b.shift();
                    if (R !== undefined) {
                        s(R);
                    }
                }
                $t = undefined;
            });
        }
        function s(v) {
            mSs(v, Qt, ha, (b)=>{
                if (Wvn(b, "bridge")) {
                    idleTracker.noteActivity();
                    wt("client_prompt");
                }
                let _ = onInboundMessage !== undefined && b.type === "user" && Tst() ? Jt(b.uuid) : null;
                if (_ === null) {
                    return onInboundMessage?.(b);
                }
                return Yus(_, ()=>onInboundMessage?.(b));
            }, onPermissionResponse ? (b)=>{
                if (onPermissionResponse(b)) {
                    let _ = b.response.subtype === "success" && !!b.response.response;
                    if (_) {
                        idleTracker.noteActivity();
                        wt("client_input");
                    }
                    Qn(b.response.request_id, _);
                    if (!gt) {
                        Zn();
                    }
                }
            } : undefined, (b)=>{
                if ($vn(b)) {
                    idleTracker.noteActivity();
                    wt("client_input");
                }
                hSs(b, {
                    transport,
                    sessionId: C,
                    onInterrupt,
                    onStopTask,
                    onBackgroundTasks,
                    onCancelAsyncMessage,
                    reportsInboundReadReceipts: ()=>onInboundMessage !== undefined && Tst(),
                    getInitializeState,
                    claudeCodeVersion: {
                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://code.claude.com/docs/en/overview",
                        VERSION: "2.1.296",
                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                        BUILD_TIME: "2026-10-09T01:31:52Z",
                        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                        DD_SOURCEMAP_GROUP: "default"
                    }.VERSION,
                    getCommands,
                    getPendingPrompts,
                    onDialogKindsDeclared,
                    onClientInitialize: onClientInitialize_1,
                    onSetModel,
                    onSetMaxThinkingTokens,
                    onSetPermissionMode,
                    onApplyFlagSettings,
                    onRenameSession,
                    onSetColor,
                    onFileSuggestions,
                    onReadFile,
                    onGetWorkspaceDiff,
                    onSideQuestion,
                    onGetContextUsage,
                    answerSharedControlRequest,
                    onMcpAuthenticate,
                    onMcpOauthCallbackUrl,
                    onMcpReconnect,
                    onMcpSetServers,
                    onForkConversation,
                    hasPendingPrompts: ()=>Ie.size > 0,
                    outboundOnly,
                    writeFrame: (_)=>{
                        if (Qe(_.type)) {
                            return;
                        }
                        Tr(_, _.type);
                    },
                    cancellableRequests
                });
            }, (b)=>cancellableRequests.get(b)?.abort(), onQueuedNotification);
        }
    }
    function _n(e, cause, detail, v = false) {
        let b = false;
        clearTimeout(sr);
        if (O || ee) {
            bi(0, [], transport.discardUndeliveredEvents?.() ?? []);
            return false;
        }
        if (!v) {
            t(`[remote-bridge] v2 transport closed (code=${e}${detail ? ` source=${detail.rejectSource}` : ""})`);
            i("tengu_bridge_repl_ws_closed", {
                code: e,
                v2: true,
                close_cause: pe(cause),
                recovery_in_flight,
                ...detail !== undefined && {
                    reject_source: d(detail.rejectSource)
                }
            });
        }
        if (recovery_in_flight) {
            let A = er ? Date.now() - er : 0;
            if (A <= _i) {
                ve = {
                    code: e ?? 4092,
                    cause,
                    detail
                };
                return false;
            }
            t(`[remote-bridge] authRecoveryInFlight held ${Math.round(A / 1000)}s (> ceiling ${Math.round(_i / 1000)}s) \u2014 treating as leaked, handling close directly`, {
                level: "error"
            });
            J("error", "bridge_repl_v2_recovery_flag_leaked");
            ci();
            ve = undefined;
            b = true;
        }
        if (Fi(e)) {
            if (tr >= pi) {
                t(`[remote-bridge] ${e} recovery exhausted after ${tr} attempts`, {
                    level: "error"
                });
                me(`Transport recovery exhausted (code ${e})`);
                if (!Ee) {
                    we("recovery_exhausted", {
                        close_code: e
                    });
                }
                return false;
            }
            if (e === 4094 && !v) {
                if (tn >= pi) {
                    t(`[remote-bridge] worker-credential recovery exhausted after ${tn} attempts with no successful heartbeat between them`, {
                        level: "error"
                    });
                    me("Transport recovery exhausted (worker credential failures)", "auth");
                    if (!Ee) {
                        we("cred_recovery_exhausted");
                    }
                    return false;
                }
                tn++;
            }
            if (e === 4093 && !v) {
                let A = hi.charge(Date.now(), $n());
                switch(A){
                    case "hourly_exhausted":
                    case "daily_exhausted":
                        {
                            let window_h = A === "hourly_exhausted" ? 1 : 24;
                            t(`[remote-bridge] heartbeat recovery budget exhausted (${window_h}h window)`, {
                                level: "error"
                            });
                            me(A === "hourly_exhausted" ? _s : ps);
                            if (!Ee) {
                                we("heartbeat_budget_exhausted", {
                                    window_h
                                });
                            }
                            return false;
                        }
                    case "charged":
                        break;
                }
            }
            tr++;
            Ca(e);
            return false;
        }
        let _ = (v || b) && br;
        let R = Ms(e, cause);
        if (R !== undefined && !(_ && As(R))) {
            Oe = R;
        }
        let j = _ && cause === "superseded_by_worker" ? undefined : cause;
        let H = e === 4090 && (j === "superseded_by_worker" || j === "session_not_active" || j === "session_not_found");
        me(H ? Po(e, j) : `Transport closed: ${Po(e, j, detail)}`, H ? "ended_elsewhere" : "terminal");
        if (Ee) {
            return H;
        }
        if (e === 4090) {
            if (v && br) {
                we("transport_closed_4090");
            } else {
                ft("transport_closed_4090");
                Ee = true;
            }
        } else if (e === 403) {
            Kn(detail);
        } else {
            we(e === 404 ? "transport_closed_404" : "transport_closed_other");
        }
        return H;
    }
    async function so(e, r, s, v, b) {
        Vo(e.worker_epoch);
        if (AT(C)) {
            t(`[remote-bridge] Rebuild suppressed for teleported session ${C}`);
            return "suppressed_teleported";
        }
        cn = r;
        ro = s;
        Oe = undefined;
        br = true;
        an = false;
        Ai?.();
        hn();
        Me.start();
        he.start();
        try {
            let _ = transport;
            let initialSequenceNum = _.getLastSequenceNum();
            gr = undefined;
            _.close({
                goodbye: false,
                retainUndelivered: true
            });
            transport = await p6r({
                ...ti(),
                sessionUrl: KMe(e.api_base_url, C),
                ingressToken: e.worker_jwt,
                sessionId: C,
                epoch: e.worker_epoch,
                initialSequenceNum,
                getAuthToken: ()=>e.worker_jwt
            });
            if (O) {
                transport.close();
                return "rebuilt";
            }
            if (ee) {
                transport.close();
                return "suppressed_owner_changed";
            }
            Ni();
            transport.connect();
            ka(_);
            un?.();
            Zao();
            olo();
            alo();
            clo();
            ilo();
            t5o();
            llo();
            onTransportRebuilt?.();
            sr = setTimeout(ji, z.connect_timeout_ms, cn);
            Rt.scheduleFromExpiresIn(C, e.expires_in);
            worker_jwt = e.worker_jwt;
            worker_epoch = e.worker_epoch;
            api_base_url = e.api_base_url;
            let j = jt !== 0 && (Bt || v < jt);
            jt = 0;
            let H = b < zr;
            Bt = j || H;
            try {
                la(e, H);
            } catch (error) {
                c(error);
                m("bridge_webagent_mcp_inject", "refresh_threw");
            }
            Wt();
        } finally{
            Me.deactivate();
            he.deactivate();
        }
        return "rebuilt";
    }
    async function Ui(e, r, s) {
        let v = !s && onClassifyMissingOAuthToken !== undefined && Ht() && Vao();
        let b = v ? await onClassifyMissingOAuthToken(e) : undefined;
        if (v && (O || ie !== r)) {
            return;
        }
        if (b === "signed_out") {
            t(`[remote-bridge] Signed out on this machine under ${C} (${e}) \u2014 stopping`);
            J("info", "bridge_repl_v2_signed_out");
            ft("signed_out");
            if (!Ft) {
                f("bridge_connect", "signed_out");
            }
            Ee = true;
            me(Xs, "auth");
            return;
        }
        me(zs, "auth");
        if (!s) {
            we("recovery_no_oauth_token");
        }
    }
    async function Ta(close_code, r, s, v) {
        let b = Date.now();
        J("info", "bridge_repl_v2_remint_loop_entered");
        rn = true;
        let _ = 0;
        try {
            let R = false;
            let j = 0;
            for(let attempts_1 = 1; !O; attempts_1++){
                if (ie !== r) {
                    return {
                        creds: null,
                        attempts: _
                    };
                }
                let A = Math.round((Date.now() - b) / 60000);
                nn(`${workSecretCredentials ? "Remote Control credentials unavailable" : "Remote Control server unreachable"} \u2014 retrying (attempt ${attempts_1}${A > 0 ? `, ${A}m elapsed` : ""})`);
                let L = Math.min(cs * 2 ** (attempts_1 - 1), Mo);
                await Q(Math.max(Math.random() * L, fs));
                if (O) {
                    break;
                }
                if (ie !== r) {
                    return {
                        creds: null,
                        attempts: _
                    };
                }
                er = Date.now();
                if (AT(C)) {
                    me("Session teleported to cloud");
                    J("info", "bridge_repl_v2_remint_loop_teleported");
                    return {
                        creds: null,
                        attempts: _
                    };
                }
                let ae = xo();
                if (!ae) {
                    J("info", "bridge_repl_v2_remint_loop_no_oauth");
                    await Ui("remint_loop", r, s);
                    return {
                        creds: null,
                        attempts: _
                    };
                }
                let creds = await Kr(ae, r);
                _ = attempts_1;
                if (O) {
                    break;
                }
                if (ie !== r) {
                    return {
                        creds: null,
                        attempts: _
                    };
                }
                if (creds === null) {
                    j++;
                    if (v === undefined || j < v.attempts) {
                        continue;
                    }
                    t(`[remote-bridge] Re-mint loop exhausted (code ${close_code}): ${j} unreachable attempts, ${Math.round((Date.now() - b) / 1000)}s`, {
                        level: "error"
                    });
                    J("info", "bridge_repl_v2_remint_loop_exhausted", {
                        attempts: _,
                        elapsed_ms: Date.now() - b,
                        queued_writes_dropped: Me.pendingCount + he.pendingCount + he.evictedCount
                    });
                    me(v.exhaustedDetail);
                    if (!s) {
                        we("recovery_exhausted", {
                            close_code,
                            remint_attempts: _
                        });
                    }
                    return {
                        creds: null,
                        attempts: _
                    };
                }
                if (eN(creds)) {
                    if (onAuth401 && !R) {
                        if (await Sr("owner_changed_recovery", r)) {
                            return {
                                creds: null,
                                attempts: _
                            };
                        }
                        R = true;
                        let X = false;
                        try {
                            X = await onAuth401(ae);
                        } catch (error) {
                            t(`[remote-bridge] Re-mint loop OAuth refresh threw: ${l(error)}`, {
                                level: "error"
                            });
                        }
                        if (O) {
                            break;
                        }
                        if (ie !== r) {
                            return {
                                creds: null,
                                attempts: _
                            };
                        }
                        if (X) {
                            t("[remote-bridge] Re-mint rejected after outage — OAuth refresh succeeded; retrying with the refreshed credential");
                            continue;
                        }
                    }
                    me(Nn, "auth");
                    if (!s) {
                        we("recovery_credentials_rejected");
                    }
                    J("info", "bridge_repl_v2_remint_loop_rejected");
                    return {
                        creds: null,
                        attempts: _
                    };
                }
                if (ooe(creds)) {
                    me(nke(creds), kt(creds));
                    if (!s) {
                        we(Tn("recovery", creds));
                    }
                    J("info", "bridge_repl_v2_remint_loop_denied");
                    return {
                        creds: null,
                        attempts: _
                    };
                }
                t(`[remote-bridge] Re-mint loop succeeded (code ${close_code}, attempt ${attempts_1}, ${Math.round((Date.now() - b) / 1000)}s)`);
                J("info", "bridge_repl_v2_remint_loop_recovered", {
                    attempts: attempts_1,
                    elapsed_ms: Date.now() - b
                });
                return {
                    creds,
                    attempts: _
                };
            }
            return {
                creds: null,
                attempts: _
            };
        } finally{
            if (ie === r) {
                rn = false;
            }
        }
    }
    let Ge = {
        401: {
            reconnectingDetail: "JWT expired — refreshing",
            cause: "auth_401_recovery",
            failureDiagnostic: "bridge_repl_v2_jwt_refresh_failed",
            fetchFailure: "terminal",
            remintCap: undefined,
            recoveredCode: "recovered_auth_401",
            needsOAuthRefresh: true
        },
        4091: {
            reconnectingDetail: "CCR init failed — retrying",
            cause: "init_4091_recovery",
            failureDiagnostic: "bridge_repl_v2_4091_recovery_failed",
            fetchFailure: "terminal",
            remintCap: undefined,
            recoveredCode: "recovered_init_4091",
            needsOAuthRefresh: false
        },
        4093: {
            reconnectingDetail: "presence heartbeats failing — reconnecting",
            cause: "heartbeat_4093_recovery",
            failureDiagnostic: "bridge_repl_v2_4093_recovery_failed",
            fetchFailure: "retry",
            remintCap,
            recoveredCode: "recovered_heartbeat_4093",
            needsOAuthRefresh: false
        },
        4094: {
            reconnectingDetail: "worker credential expired — re-minting",
            cause: "cred_4094_recovery",
            failureDiagnostic: "bridge_repl_v2_4094_recovery_failed",
            fetchFailure: "terminal",
            remintCap: undefined,
            recoveredCode: "recovered_cred_4094",
            needsOAuthRefresh: true
        }
    };
    function Fi(e) {
        if (e === 4094) {
            return ECt();
        }
        return e === 401 || e === 4091 || e === 4093;
    }
    let Hi = 30000;
    let wa = 5000;
    function xi(e, r) {
        if (Ge[e].fetchFailure === "terminal") {
            me(r);
            return;
        }
        Me.start();
        he.start();
        nn("presence recovery failed — retrying");
        t(`[remote-bridge] ${e} recovery fetch failed \u2014 retrying in ${Hi}ms`);
        rr();
        let s = transport;
        function v() {
            ct = undefined;
            if (O) {
                return;
            }
            if (tr === 0) {
                if (Me.active || he.active) {
                    if (recovery_in_flight) {
                        ct = setTimeout(v, wa);
                        return;
                    }
                    Wt();
                    yr();
                }
                return;
            }
            if (transport !== s) {
                return;
            }
            _n(e, undefined, undefined, true);
        }
        ct = setTimeout(v, Hi);
    }
    async function Ca(e) {
        let r = Ee;
        if (AT(C)) {
            me("Session teleported to cloud");
            return;
        }
        if (recovery_in_flight) {
            return;
        }
        let s = di();
        Me.start();
        he.start();
        nn(Ge[e].reconnectingDetail);
        t(`[remote-bridge] ${e} on transport \u2014 attempting credential refresh + rebuild`);
        try {
            if (await Sr("owner_changed_recovery", s)) {
                return;
            }
            let v = getAccessToken();
            let b = true;
            let _ = I1n();
            if (!workSecretCredentials && Ge[e].needsOAuthRefresh && onAuth401) {
                try {
                    b = await onAuth401(v ?? "");
                } catch (error) {
                    b = false;
                    t(`[remote-bridge] ${e} recovery OAuth refresh threw: ${l(error)}`, {
                        level: "error"
                    });
                }
            } else if (!workSecretCredentials && onProactiveRefresh) {
                try {
                    await onProactiveRefresh();
                } catch (error) {
                    t(`[remote-bridge] pre-recovery token refresh failed: ${l(error)}`, {
                        level: "error"
                    });
                }
            }
            if (ie !== s) {
                return;
            }
            let R = xo() ?? v;
            if (!R || O) {
                if (!O) {
                    await Ui("recovery", s, r);
                }
                return;
            }
            if (AT(C)) {
                me("Session teleported to cloud");
                return;
            }
            let j = Date.now();
            let H = zr;
            let A = await lr(()=>Kr(R, s), "fetchRemoteCredentials (recovery)", z);
            if (ie !== s) {
                return;
            }
            if ((!A || eN(A)) && !O && Ge[e].needsOAuthRefresh && onAuth401 && !b) {
                let B = false;
                for(let X = 1; X <= z.oauth_retry_max_attempts && !O; X++){
                    nn(`OAuth refresh failed \u2014 waiting for a fresh login (${X}/${z.oauth_retry_max_attempts})`);
                    await Q(Zv({
                        attempt: X,
                        baseMs: z.oauth_retry_base_delay_ms,
                        jitter: {
                            kind: "symmetric",
                            ratio: z.init_retry_jitter_fraction
                        }
                    }));
                    if (await Sr("owner_changed_recovery", s)) {
                        return;
                    }
                    let Se;
                    try {
                        Se = onReadFreshOAuthToken ? await onReadFreshOAuthToken() : await onAuth401(v ?? "") ? getAccessToken() : undefined;
                    } catch (error) {
                        t(`[remote-bridge] Adopt-loop token read threw (attempt ${X}): ${l(error)}`, {
                            level: "error"
                        });
                    }
                    if (O || ie !== s) {
                        return;
                    }
                    let le = Se !== undefined && Se !== (v ?? "") ? Se : undefined;
                    if (!le) {
                        continue;
                    }
                    B = true;
                    if (AT(C)) {
                        me("Session teleported to cloud");
                        return;
                    }
                    A = await lr(()=>Kr(le, s), "fetchRemoteCredentials (recovery re-poll)", z);
                    break;
                }
                if (ie !== s) {
                    return;
                }
                if (eN(A) && !B) {
                    if (!O) {
                        let X = Ri(_);
                        if (X !== undefined) {
                            J("info", "bridge_repl_v2_recovery_host_declined");
                            me(Ti(X), wi(X));
                            if (!r) {
                                if (Ft) {
                                    ft(X);
                                    Ee = true;
                                } else {
                                    we("recovery_reauth_required");
                                }
                            }
                            return;
                        }
                        me("OAuth token refresh failed — run /login to re-authenticate", "auth");
                        if (!r) {
                            we("recovery_reauth_required");
                        }
                    }
                    return;
                }
            }
            if (O) {
                return;
            }
            if (!A && Ge[e].fetchFailure === "retry" && !$n()) {
                xi(e, `could not fetch fresh session credentials after code ${e}`);
                return;
            }
            if (eN(A) && !Ge[e].needsOAuthRefresh && onAuth401) {
                if (await Sr("owner_changed_recovery", s)) {
                    return;
                }
                let B = false;
                try {
                    B = await onAuth401(v ?? "");
                } catch (error) {
                    t(`[remote-bridge] ${e} late OAuth refresh threw: ${l(error)}`, {
                        level: "error"
                    });
                }
                if (O || ie !== s) {
                    return;
                }
                if (B) {
                    A = await lr(()=>Kr(getAccessToken() ?? v ?? "", s), `fetchRemoteCredentials (${e} late refresh)`, z);
                    if (O || ie !== s) {
                        return;
                    }
                }
            }
            if (eN(A)) {
                me(Nn, "auth");
                if (!r) {
                    we("recovery_credentials_rejected");
                }
                return;
            }
            let L = 0;
            if (!A) {
                let B = await Ta(e, s, r, $n() ? Ge[e].remintCap : undefined);
                A = B.creds;
                L = B.attempts;
                if (!A || O || ie !== s) {
                    return;
                }
            }
            if (ooe(A)) {
                if (!O) {
                    me(nke(A), kt(A));
                    if (!r) {
                        we(Tn("recovery", A));
                    }
                }
                return;
            }
            if (ie !== s) {
                return;
            }
            let ae = await so(A, Ge[e].cause, L, j, H);
            if (ae === "suppressed_teleported") {
                me("Session teleported to cloud");
                return;
            }
            if (ae === "suppressed_owner_changed") {
                return;
            }
            t(`[remote-bridge] Transport rebuilt after ${e}`);
            if (!O) {
                if (!r) {
                    ft(Ge[e].recoveredCode, L > 0 ? {
                        remint_attempts: L
                    } : undefined);
                }
            }
        } catch (error) {
            t(`[remote-bridge] ${e} recovery failed: ${l(error)}`, {
                level: "error"
            });
            J("error", Ge[e].failureDiagnostic);
            if (!O && !ee) {
                xi(e, `Transport recovery failed (${e}): ${l(error)}`);
                if (Ge[e].fetchFailure === "terminal" && !r) {
                    we("recovery_failed");
                }
            }
        } finally{
            if (ui(s)) {
                oi();
                if (ct !== undefined && ve !== undefined) {
                    rr();
                    let v = ve;
                    ve = undefined;
                    _n(v.code, v.cause, v.detail, true);
                } else {
                    ve = undefined;
                }
                if (ct === undefined && !recovery_in_flight) {
                    Me.drop();
                    he.drop();
                    Nt = false;
                }
            }
        }
    }
    Ni();
    if (!reattach && initialMessages && initialMessages.length > 0) {
        Me.start();
        he.start();
    }
    transport.connect();
    sr = setTimeout(ji, z.connect_timeout_ms, cn);
    function Et(e) {
        if (isTurnLive) {
            return isTurnLive(e);
        }
        return e();
    }
    function Li(e) {
        return On(e, "live").map((r)=>{
            if (r.type !== "assistant" || r.parent_tool_use_id !== null || r.uuid === undefined) {
                return {
                    ...r,
                    session_id: C
                };
            }
            let user_message_uuid = Zt.get(r.uuid);
            if (user_message_uuid === undefined) {
                return {
                    ...r,
                    session_id: C
                };
            }
            Zt.delete(r.uuid);
            return {
                ...r,
                session_id: C,
                user_message_uuid,
                user_message_uuids: [
                    user_message_uuid
                ]
            };
        });
    }
    function Wt() {
        let e = Pe === "deferred";
        let r = e ? Me.end().filter((A)=>ko(A.message)) : Me.end();
        let s = e ? he.end().filter((A)=>!yn(A.frame)) : he.end();
        let v = Nt;
        Nt = false;
        if (r.length === 0 && s.length === 0) {
            if (e && Et(()=>v) && Ie.size === 0) {
                He("running");
            }
            return;
        }
        let b = [];
        let _ = [];
        let R = ()=>{
            if (_.length > 0) {
                b.push(...Li(_));
                _ = [];
            }
        };
        let j = 0;
        let H = 0;
        while(j < r.length || H < s.length){
            let A = r[j];
            let L = s[H];
            if (A && (!L || A.seq < L.seq)) {
                Qt.add(A.message.uuid);
                Qr.add(A.message.uuid);
                uo = true;
                _.push(A.message);
                j++;
            } else if (L) {
                R();
                let ae = L.frame;
                if ("uuid" in ae && typeof ae.uuid === "string") {
                    qn.add(ae.uuid);
                }
                b.push({
                    ...ae,
                    session_id: C
                });
                H++;
            }
        }
        R();
        if (Et(()=>v) && Ie.size === 0) {
            He("running");
        }
        t(`[remote-bridge] Drained ${r.length} queued message(s) and ${s.length} SDK event(s) / control frame(s) after flush`);
        transport.writeBatch(b);
    }
    function ka(e) {
        let r = e.takeUndeliveredEvents?.() ?? [];
        if (r.length === 0) {
            return;
        }
        t(`[remote-bridge] Carrying ${r.length} undelivered client event(s) over to the rebuilt transport`);
        J("info", "bridge_repl_v2_events_carried_over", {
            count: r.length
        });
        i("tengu_bridge_repl_events_carried_over", {
            count: r.length
        });
        transport.adoptUndeliveredEvents?.(r);
    }
    function Tr(e, r) {
        let s = e.type !== "result" && wr && !recovery_in_flight;
        let [v] = Ye.redact([
            e
        ], "events", "live");
        if (v === undefined) {
            return;
        }
        if (!s && he.enqueue({
            seq: Gn++,
            frame: v
        })) {
            t(`[remote-bridge] Queued ${r} during flush`);
            return;
        }
        transport.write(v);
        t(`[remote-bridge] Sent ${r}`);
    }
    async function Ma(initialMessages) {
        Ye.note(initialMessages);
        let r = initialMessages.filter(foe);
        let s = Qer(r, initialHistoryCap);
        if (s.length < r.length) {
            t(`[remote-bridge] Capped initial flush: ${r.length} -> ${s.length} (cap=${initialHistoryCap})`);
        }
        let v = On(s).map((_)=>({
                ..._,
                session_id: C,
                historical: true
            }));
        if (v.length === 0) {
            return;
        }
        let b = r.findLast((_)=>!eSr(_));
        if (Et(()=>b !== undefined && TQt(b) && !Cn(b)) && Ie.size === 0) {
            He("running");
        }
        t(`[remote-bridge] Flushing ${v.length} history events`);
        await transport.writeBatch(v);
    }
    let ao = false;
    let wr = false;
    let uo = false;
    let $i = false;
    let dr = false;
    function pn(transcript_upload_deferred, r) {
        let s = transport;
        let v = s.droppedWorkerStatePatchCount?.() ?? 0;
        s.reportInternalMetadata?.({
            transcript_upload_deferred
        });
        s.flushWorkerState?.().then((b)=>{
            if (b && (s.droppedWorkerStatePatchCount?.() ?? 0) === v) {
                r();
            }
        });
    }
    let Cr;
    function Aa(e) {
        if (ao) {
            return;
        }
        ao = true;
        if (Pe === "deferred") {
            transport.reportMetadata({
                transcript_mirror: "deferred"
            });
            Wi();
            return;
        }
        if (!reattach || remoteControlOrigin === undefined && !noHistoryBackfill) {
            return;
        }
        let r = e === undefined || e.readFailed === true;
        let s = r ? undefined : e.internal?.transcript_upload_deferred;
        if (wo(s) && (noHistoryBackfill || remoteControlOrigin === undefined)) {
            if (!ee) {
                transport.reportMetadata({
                    transcript_mirror: "live"
                });
            }
            dr = true;
            pn(null, ()=>{
                dr = false;
            });
        } else if (wo(s)) {
            Xr = s;
            Pe = "deferred";
            Wi();
            if (uo) {
                qt = "rows_already_live";
            } else if (!Ir(Xt().scope, Xr)) {
                qt = "flag_off";
            }
        } else if ((r || s !== undefined && s !== null) && Ir(Xt().scope, remoteControlOrigin)) {
            Pe = "deferred";
            qt = "marker_unreadable";
        }
    }
    let qt;
    function Pa() {
        if (qt === undefined) {
            return;
        }
        let e = qt;
        qt = undefined;
        wt(e);
    }
    function Wi() {
        Cr = Date.now();
        t("[remote-bridge] Transcript upload deferred until a client opens this session");
        J("info", "bridge_repl_transcript_deferred", {
            reattach
        });
        i("tengu_bridge_transcript_deferral", {
            phase: d("deferred"),
            reattach,
            hold_ms: Dt()
        });
    }
    let qi = false;
    function onClientInitialize_1() {
        if (Pe !== "deferred" || qi) {
            onClientInitialize?.();
            return;
        }
        qi = true;
        let e = Da();
        queueMicrotask(()=>{
            wt("client_open", e);
            try {
                onClientInitialize?.();
            } catch (error) {
                t(`[remote-bridge] onClientInitialize failed after transcript release: ${l(error)}`);
            }
        });
    }
    function Ia() {
        if (Pe === "deferred" && !Ir(Xt().scope, Xr)) {
            wt("flag_off");
        }
    }
    function wt(e, r = Promise.resolve()) {
        if (vt) {
            return vt;
        }
        if (O || Pe !== "deferred") {
            return Promise.resolve();
        }
        if (!ee) {
            transport.reportMetadata({
                ...vr,
                transcript_mirror: "live"
            });
        }
        vr = {};
        Pe = "live";
        mr = true;
        let s = Ie.size > 0;
        t(`[remote-bridge] Releasing deferred transcript (${e})`);
        wr = true;
        Me.start();
        he.start();
        kr = onTransportPersistenceReady ? lo() : Promise.resolve();
        let v = transport;
        vt = r.then(()=>ja(e, s)).catch((b)=>t(`[remote-bridge] Transcript back-fill failed: ${l(b)}`, {
                level: "error"
            })).finally(()=>{
            wr = false;
            if (transport !== v || O || ee || !ao) {
                return;
            }
            if (recovery_in_flight) {
                en = true;
                return;
            }
            Wt();
            fo();
        });
        return vt;
    }
    let Gt;
    let kr = Promise.resolve();
    let Gi = [];
    function lo() {
        return new Promise((resolve)=>{
            Gi.push(resolve);
        });
    }
    let Mr = false;
    let co;
    function Vi() {
        return Promise.resolve().then(()=>co?.runNow()).catch(c);
    }
    function hn() {
        if (Gt !== undefined) {
            Mr = true;
            kr = lo();
        }
        onTransportPersistenceTeardown?.();
    }
    function fo() {
        if (!onTransportPersistenceReady || Gt === transport) {
            return;
        }
        let e = transport.getInternalEventWriter?.();
        let r = e && Ye.wrapInternalEventWriter(e);
        let s = e && Ye.wrapInternalEventWriter(e, "live");
        let v = r && s && ((_, R, j)=>(typeof R.uuid === "string" && Mi.has(R.uuid) ? s : r)(_, R, j));
        let b = transport.getInternalEventReaders?.();
        if (r && b) {
            let _ = !reattach && Gt === undefined;
            let R = transport;
            Gt = R;
            Mr = true;
            kr = lo();
            co = onTransportPersistenceReady(r, b, C, _, (j)=>{
                if (j && Gt === R) {
                    Mr = false;
                    for (let H of Gi.splice(0)){
                        H();
                    }
                }
            }, Ye.note, v);
        }
    }
    function Da() {
        let e = transport;
        if (!e.setSubscribersReportedListener) {
            return Promise.resolve();
        }
        let r = new Promise((resolve)=>{
            e.setSubscribersReportedListener?.((v)=>{
                if (v) {
                    resolve();
                }
            });
        });
        return Promise.race([
            r,
            Q(yd, undefined, {
                unref: true
            })
        ]).finally(()=>e.setSubscribersReportedListener?.(undefined));
    }
    async function ja(e, r) {
        if (O) {
            return;
        }
        let s = Qe("transcript backfill") ? undefined : getBackfillMessages?.(C);
        Ye.note(s ?? []);
        let v = new Set(Me.pending.map((B)=>B.message.uuid));
        let b = (s ?? []).filter((B)=>foe(B) && !Qr.has(B.uuid) && !v.has(B.uuid));
        let _ = Qer(b, Xt().backfillMessages);
        t(`[remote-bridge] Back-filling ${_.length} of ${b.length} eligible message(s)${s === undefined ? " (history withheld by host)" : ""}`);
        J("info", "bridge_repl_transcript_released", {
            reason: e,
            backfilled: _.length,
            eligible: b.length,
            withheld: s === undefined
        });
        i("tengu_bridge_transcript_deferral", {
            phase: d("released"),
            reason: d(e),
            backfilled: _.length,
            eligible: b.length,
            history_withheld: s === undefined,
            deferred_ms: Cr === undefined ? undefined : Date.now() - Cr,
            hold_ms: Dt()
        });
        let R = On(_).map((B)=>({
                ...B,
                session_id: C,
                historical: true
            }));
        for (let B of b){
            Qt.add(B.uuid);
            Jr.add(B.uuid);
        }
        for (let B of _){
            Qr.add(B.uuid);
        }
        let j = b.findLast((B)=>!eSr(B));
        let H = r || Ie.size > 0 || Et(()=>j !== undefined && TQt(j) && !Cn(j));
        if (e !== "client_prompt" && !H && R.length > 0) {
            R.push(Object.assign(eFn(C), {
                historical: true
            }));
        }
        let A = transport.droppedDurableBatchCount?.() ?? 0;
        let L = transport;
        for(let B = 0; B < R.length; B += Oo){
            if (O || ee) {
                return;
            }
            if (transport !== L) {
                await transport.writeBatch(R.slice(B));
                break;
            }
            await transport.writeBatch(R.slice(B, B + Oo));
            if (B + Oo < R.length) {
                await Promise.race([
                    transport.flush(),
                    Q(Rd, undefined, {
                        unref: true
                    })
                ]);
            }
        }
        let ae = transport;
        ae.flush().then(()=>{
            if ((ae.droppedDurableBatchCount?.() ?? 0) > A) {
                J("warn", "bridge_repl_transcript_backfill_dropped");
                i("tengu_bridge_transcript_deferral", {
                    phase: d("backfill_dropped"),
                    reason: d(e),
                    hold_ms: Dt()
                });
            }
            if (O || ee) {
                return;
            }
            dr = true;
            pn(null, ()=>{
                dr = false;
            });
        });
    }
    let _o = neverArchive_1 === true;
    let ur;
    function teardown(e) {
        if (e?.skipArchive) {
            _o = true;
        }
        if (e?.reason) {
            ur = e.reason;
        }
        if (Zr) {
            return Zr;
        }
        O = true;
        Zr = Na();
        return Zr;
    }
    async function Na() {
        yi("teardown");
        if (Pe === "deferred") {
            i("tengu_bridge_transcript_deferral", {
                phase: d("exited_unopened"),
                deferred_ms: Cr === undefined ? undefined : Date.now() - Cr,
                hold_ms: Dt()
            });
        }
        let e = Xe ?? nr;
        if (e !== undefined) {
            if (!AT(C)) {
                let le = Xe === undefined ? Si() : undefined;
                if (le !== undefined && Ft && Sgr()) {
                    ft(le);
                } else {
                    we(e);
                }
            }
            Xe = undefined;
            nr = undefined;
            bt = undefined;
        } else if (!Ee && ve?.code === 403 && !AT(C)) {
            Kn(ve.detail);
        } else if (!Ee && (tr > 0 && (ct !== undefined || recovery_in_flight) || ve !== undefined && ve.code !== 4090) && !AT(C)) {
            we("recovery_abandoned_at_teardown");
        }
        dn?.();
        Pi();
        Oi();
        mao(owner);
        Er?.();
        Er = undefined;
        hn();
        Yr();
        Rt.cancelAll();
        clearTimeout(sr);
        rr();
        on();
        transport.writeBatch(ur !== undefined ? [
            Smo(C, ur),
            eFn(C)
        ] : [
            eFn(C)
        ]);
        He("idle");
        if (_o || rn && ur !== "remote_control_disabled") {
            let le = neverArchive_1 ? "skipped_host_owned" : _o ? "skipped_teleport" : "skipped_remint_loop";
            let Je;
            if (Yt()) {
                Je = await gi("skip_archive_flush_timeout");
            } else if (ur !== undefined) {
                await Rr();
            }
            let Ze = vi();
            transport.close();
            i("tengu_bridge_repl_teardown", {
                v2: true,
                archive_status: d(le),
                archive_ok: false,
                ...Je,
                ...Ze
            });
            await transport.flushGoodbye();
            t(`[remote-bridge] Teardown complete (skipArchive): session=${C}`);
            J("info", "bridge_repl_v2_teardown");
            Ki();
            return;
        }
        let z_teardown_archive_timeout_ms = z.teardown_archive_timeout_ms;
        let s = Date.now();
        let v = ki();
        let b;
        let _ = s;
        let archive_budget_ms = z_teardown_archive_timeout_ms;
        if (Yt() && v === undefined) {
            let le = s + IZ - js;
            b = await gi("exit_flush_timeout", s);
            _ = s + b.hold_preflush_ms;
            archive_budget_ms = Math.max(1, Math.min(z_teardown_archive_timeout_ms, le - _));
        }
        let j = _ + archive_budget_ms;
        let H = v === undefined ? Jn() : undefined;
        let A = H?.token;
        let L = await zt(C, baseUrl, A, orgUUID, archive_budget_ms, v, storageV5);
        let ae = j - Date.now();
        if (L === 401 && H?.source === "current" && onAuth401 && ae >= gd) {
            try {
                await Promise.race([
                    onAuth401(A ?? ""),
                    Q(ae)
                ]);
                H = Jn();
                A = H.token;
                L = await zt(C, baseUrl, A, orgUUID, Math.max(1, j - Date.now()), v, storageV5);
            } catch (error) {
                t(`[remote-bridge] Teardown 401 retry threw: ${l(error)}`, {
                    level: "error"
                });
            }
        }
        let archive_ms = Date.now() - _;
        if (ur !== undefined && b === undefined) {
            await Rr();
        }
        let X = vi();
        transport.close();
        let Se = Ps(L, Oe);
        i("tengu_bridge_repl_teardown", {
            v2: true,
            archive_status: d(Se),
            archive_credential: pe(H?.source),
            archive_ok: typeof L === "number" && L < 400,
            archive_http_status: typeof L === "number" ? L : L === "untrusted_device" ? 403 : undefined,
            archive_timeout: L === "timeout",
            archive_no_token: L === "no_token",
            ...b,
            archive_budget_ms,
            archive_ms,
            ...X
        });
        await transport.flushGoodbye();
        t(`[remote-bridge] Torn down (archive=${L})`);
        J("info", "bridge_repl_v2_teardown");
        Ki();
    }
    i("tengu_bridge_repl_started", {
        has_initial_messages: !!(initialMessages && initialMessages.length > 0),
        v2: true,
        ccr_session_id: ye(Gl(C)),
        expires_in_s: de.expires_in,
        inProtectedNamespace: LH(),
        ...LZe()
    });
    g("bridge_connect");
    function Qe(e) {
        if (!ee) {
            return false;
        }
        t(`[remote-bridge] Dropping ${e} after owner change`);
        return true;
    }
    let po = {
        bridgeSessionId: C,
        titleWriter: n.titleWriter,
        noHistoryBackfill: noHistoryBackfill || Vr,
        getJoinedProjectThread: undefined,
        requestInjectedMcpReassert,
        canAdoptInjectedMcp,
        detachForHandoff: ()=>{
            Rt.cancelAll();
            Yr();
        },
        sessionGroupingId: sessionGroupingId_1,
        outboundOnly: outboundOnly ?? false,
        environmentId: "",
        sessionIngressUrl: de.api_base_url,
        gitRepoUrl,
        ...workSecretCredentials && {
            getWorkerBearerToken: ()=>{
                if (O) {
                    return null;
                }
                return worker_jwt;
            },
            getWorkerEpoch: ()=>worker_epoch
        },
        getLastSequenceNum: ()=>transport.getLastSequenceNum(),
        settleUploadsBeforeHandoff: ()=>{
            if (vt !== undefined || Pe === "deferred" || Mr) {
                let e = async ()=>{
                    let r = Date.now() + Cs;
                    let s = async (v, b, _)=>{
                        let R = false;
                        await Promise.race([
                            v.finally(()=>{
                                R = true;
                            }),
                            Q(Math.max(0, _ - Date.now()), undefined, {
                                unref: true
                            })
                        ]);
                        if (!R) {
                            J("warn", "bridge_repl_handoff_wait_expired", {
                                what: b
                            });
                        }
                    };
                    await s(Gt === transport ? Vi() : kr, "transcript_copy_catch_up", r - Ts);
                    if (Mr) {
                        J("warn", "bridge_repl_handoff_transcript_copy_behind");
                    }
                    await s(Promise.all([
                        transport.flush({
                            retryNow: true
                        }),
                        transport.flushInternalEvents?.({
                            retryNow: true
                        })
                    ]), "upload_lanes", r);
                };
                return (vt ?? wt("handoff")).then(e).then(()=>{}, ()=>{});
            }
            if (Yt()) {
                return Rr(Ts).then(()=>{}, ()=>{});
            }
            return Promise.resolve();
        },
        awaitUploadsForHandoff: (e)=>es({
                sessionKind: ()=>{
                    if (vt !== undefined || Pe === "deferred") {
                        return "deferred";
                    }
                    if (Yt()) {
                        return "held";
                    }
                    if (onTransportPersistenceReady) {
                        return "live";
                    }
                    return "no_transcript_copy";
                },
                release: ()=>vt ?? (Pe === "deferred" ? wt("handoff") : Promise.resolve()),
                isSessionOver: ()=>O || ee,
                hasFailedForGood: ()=>Ut,
                transport: ()=>transport,
                droppedBatches: (r)=>(r.droppedDurableBatchCount?.() ?? 0) + (r.getInternalEventBacklog?.().droppedBatches ?? 0),
                isConnected: ()=>gr === transport && transport.isConnectedStatus(),
                transcriptCopy: onTransportPersistenceReady && {
                    isInstalledOnCurrentTransport: ()=>Gt === transport,
                    catchUp: ()=>kr,
                    wakeCatchUp: ()=>void Vi()
                },
                firstHistoryFlush: ()=>Vn,
                holdsWrites: ()=>Me.active || he.active || Me.pendingCount + he.pendingCount > 0,
                drainLanes: ()=>Promise.all([
                        transport.flush({
                            retryNow: true
                        }),
                        transport.flushInternalEvents?.({
                            retryNow: true
                        })
                    ]).then(()=>{})
            }, {
                budgetMs: e?.budgetMs ?? Cs,
                signal: e?.signal,
                log: (r)=>t(r),
                onBudgetPassed: (r)=>J("warn", "bridge_repl_handoff_upload_wait_expired", {
                        what: r
                    }),
                onFault: (r)=>J("warn", "bridge_repl_handoff_upload_wait_fault", {
                        what: r
                    })
            }),
        flush: ()=>{
            Wt();
            return mi();
        },
        writeMessages (e) {
            if (Qe("writeMessages")) {
                return;
            }
            Ye.note(e, "live");
            for (let _ of e){
                if (!Jr.has(_.uuid)) {
                    Mi.add(_.uuid);
                }
            }
            let r = e.filter((_)=>foe(_) && !Jr.has(_.uuid) && !Qt.has(_.uuid));
            if (r.length === 0) {
                return;
            }
            if (!Ii) {
                for (let _ of r){
                    let R = Z$n(_);
                    if (R !== undefined && onUserMessage?.(R, C)) {
                        Ii = true;
                        break;
                    }
                }
            }
            let s = r.some(gt ? Id : TQt);
            if (s) {
                gt = false;
            }
            if (!Di && s) {
                Di = true;
                Rs(C, storageV5);
            }
            let v = r;
            if (Pe === "deferred") {
                v = r.filter(ko);
                if (v.length === 0) {
                    if (Me.active) {
                        Nt ||= s;
                    } else if (Et(()=>s) && Ie.size === 0) {
                        He("running");
                    }
                    return;
                }
            }
            if (Me.enqueue(...v.map((message)=>({
                    seq: Gn++,
                    message
                })))) {
                if (s) {
                    Nt = true;
                }
                t(`[remote-bridge] Queued ${v.length} message(s) during flush`);
                return;
            }
            for (let _ of v){
                Qr.add(_.uuid);
                Qt.add(_.uuid);
            }
            uo = true;
            let b = Li(v);
            if (Et(()=>s) && Ie.size === 0) {
                He("running");
            }
            t(`[remote-bridge] Sending ${v.length} message(s)`);
            transport.writeBatch(b);
        },
        reportMetadata (e) {
            if (Qe("reportMetadata")) {
                return;
            }
            if (Pe === "deferred") {
                let { post_turn_summary, task_summary, recap, ...rest } = e;
                let _ = {
                    post_turn_summary,
                    task_summary,
                    recap
                };
                for (let j of Object.keys(_)){
                    if (j in e) {
                        vr[j] = _[j];
                    }
                }
                let R = rest;
                if ("post_turn_summary" in e) {
                    R.post_turn_summary = typeof post_turn_summary === "object" && post_turn_summary !== null && "status_category" in post_turn_summary ? {
                        status_category: post_turn_summary.status_category
                    } : null;
                }
                if (Object.keys(R).length === 0) {
                    return;
                }
                transport.reportMetadata(R);
                return;
            }
            transport.reportMetadata(e);
        },
        refreshGitBranch () {
            un?.();
        },
        writeSdkMessages (e) {
            if (Qe("writeSdkMessages")) {
                return;
            }
            Ye.note(e);
            let r = e.filter((_)=>!_.uuid || !qn.has(_.uuid));
            let s = Pe === "deferred" ? r.filter((_)=>!yn(_)) : r;
            let v = Ye.redact(s);
            if (v.length === 0) {
                return;
            }
            if (he.active) {
                let _ = v.filter((j)=>j.type !== "stream_event");
                let R = v.length - _.length;
                if (R > 0) {
                    t(`[remote-bridge] Dropped ${R} stream_event frame(s) during flush`);
                }
                if (_.length > 0) {
                    he.enqueue(..._.map((frame)=>({
                            seq: Gn++,
                            frame
                        })));
                    t(`[remote-bridge] Queued ${_.length} SDK event(s) during flush`);
                    try {
                        if (_.some(Ds)) {
                            let j = he.evictedCount > 0;
                            he.evictOldest((H)=>Ds(H.frame), ws);
                            if (!j && he.evictedCount > 0) {
                                t(`[remote-bridge] Over ${ws} subagent frames queued during flush; dropping the oldest until it drains`);
                            }
                        }
                    } catch (error) {
                        t(`[remote-bridge] Subagent frame cap failed: ${l(error)}`, {
                            level: "error"
                        });
                    }
                }
                return;
            }
            for (let _ of v){
                if (_.uuid) {
                    qn.add(_.uuid);
                }
            }
            let b = v.map((_)=>({
                    ..._,
                    session_id: C
                }));
            transport.writeBatch(b);
        },
        sendControlRequest (request) {
            rFn(request.request_id, {
                automated: !RGe(request)
            });
            let e_request = request.request;
            if (To(e_request, placeAccountMemoryTool)) {
                Xn.add(request.request_id);
                t(`[remote-bridge] Keeping an account memory prompt at the terminal (not sent to Remote Control): ${request.request_id}`);
                return false;
            }
            if (e_request.subtype === "can_use_tool" || e_request.subtype === "request_user_dialog") {
                Ie.delete(request.request_id);
                Ie.set(request.request_id, {
                    request
                });
                Lt.delete(request.request_id);
            }
            if (e_request.subtype === "request_user_dialog" && (he.active && !wr || recovery_in_flight)) {
                Lt.add(request.request_id);
                t(`[remote-bridge] Not forwarding request_user_dialog while writes are gated / transport recovering (local-only): ${request.request_id}`);
                return false;
            }
            if (Qe("control_request")) {
                return false;
            }
            let s = {
                ...request,
                session_id: C
            };
            if (e_request.subtype === "can_use_tool") {
                let v;
                if (k("tengu_bridge_requires_action_details", false)) {
                    let b = e_request.tool_name === Be || e_request.tool_name === Ct;
                    let _;
                    if (e_request.tool_name === Jo) {
                        let A = Array.isArray(e_request.input?.questions) ? e_request.input.questions : [];
                        let L = A[0];
                        let ae = L?.header || L?.question;
                        _ = {
                            label: "Question",
                            body: ae ? ae + (A.length > 1 ? ` (+${A.length - 1} more)` : "") : "Tap to answer"
                        };
                    } else if (e_request.tool_name === vw) {
                        _ = {
                            label: "Plan",
                            body: "Plan ready for review"
                        };
                    }
                    if (!_ && e_request.requires_user_interaction) {
                        _ = {
                            label: e_request.display_name ?? e_request.tool_name,
                            body: ""
                        };
                    }
                    let R = b && typeof e_request.input?.command === "string" ? _9(e_request.input.command) : undefined;
                    let j = b && (e_request.description === undefined || mu(e_request.input));
                    let H = b && typeof e_request.input?.description === "string" ? e_request.input.description : undefined;
                    v = {
                        tool_name: e_request.tool_name,
                        display_tool_name: _?.label ?? e_request.display_name ?? e_request.tool_name,
                        action_description: _?.body ?? _9(!j && (e_request.description || H) || R && jo(R, 120) || ""),
                        raw_command: _ ? undefined : R,
                        tool_use_id: e_request.tool_use_id,
                        request_id: _ ? "" : request.request_id,
                        ..._ && request.request_id && {
                            suppressed_request_id: request.request_id
                        },
                        input: e_request.input
                    };
                }
                if (v) {
                    Ie.set(request.request_id, {
                        request,
                        details: v
                    });
                }
                gt = false;
                He("requires_action", v);
            } else if (e_request.subtype === "request_user_dialog") {
                let v;
                if (k("tengu_bridge_requires_action_details", false)) {
                    v = rDn(e_request.dialog_kind, e_request.payload, request.request_id, e_request.tool_use_id);
                }
                if (v) {
                    Ie.set(request.request_id, {
                        request,
                        details: v
                    });
                }
                gt = false;
                He("requires_action", v);
            }
            Tr(s, `control_request request_id=${request.request_id}`);
            return true;
        },
        sendControlResponse (e, r) {
            if (Xn.has(e.response.request_id)) {
                return;
            }
            if (!r?.skipStateReport) {
                Qn(e.response.request_id, true);
            }
            if (Qe("control_response")) {
                return;
            }
            let s = {
                ...e,
                session_id: C
            };
            if (!r?.skipStateReport && !gt) {
                Zn();
            }
            Tr(s, "control_response");
        },
        sendControlCancelRequest (request_id) {
            if (Xn.delete(request_id)) {
                return;
            }
            if (Lt.delete(request_id)) {
                Ie.delete(request_id);
                t(`[remote-bridge] Local-only retract of a declined dialog forward request_id=${request_id}`);
                return;
            }
            Qn(request_id, true);
            if (Qe("control_cancel_request")) {
                return;
            }
            let r = {
                type: "control_cancel_request",
                request_id,
                session_id: C
            };
            if (!gt) {
                Zn();
            }
            Tr(r, `control_cancel_request request_id=${request_id}`);
        },
        sendResult (e) {
            Nt = false;
            gt = true;
            if (Qe("result")) {
                return;
            }
            eps();
            He("idle");
            if (Pe === "deferred" && !Xt().eagerResult) {
                t("[remote-bridge] Withheld result (transcript deferred)");
                return;
            }
            let r = eFn(C, Pe === "deferred" && e?.outcome !== undefined ? {
                ...e,
                outcome: {
                    ...e.outcome,
                    result: undefined
                }
            } : e);
            Tr(r, `result ${r.subtype} is_error=${r.is_error} num_turns=${r.num_turns}${r.user_message_uuid ? ` user_message_uuid=${r.user_message_uuid}` : ""}`);
        },
        stampReply ({ assistantUuid, userMessageUuid }) {
            Zt.set(assistantUuid, userMessageUuid);
            if (Zt.size > ma) {
                let s = Zt.keys().next().value;
                if (s !== undefined) {
                    Zt.delete(s);
                }
            }
        },
        async subscribePR (e, r, agentId) {
            if (ee) {
                return {
                    ok: false,
                    reason: "owner_changed"
                };
            }
            let v = `${e}#${r}`;
            let b = ir.get(v);
            if (agentId) {
                ir.set(v, {
                    agentId,
                    repo: e,
                    prNumber: r
                });
            }
            let _ = await ZKe("subscribe", {
                sessionId: C,
                repo: e,
                prNumber: r,
                baseUrl,
                getAccessToken,
                getTrustedDeviceToken
            });
            if (!_.ok && agentId) {
                if (b) {
                    ir.set(v, b);
                } else {
                    ir.delete(v);
                }
            }
            return _;
        },
        async unsubscribePR (e, r) {
            if (ee) {
                return {
                    ok: false,
                    reason: "owner_changed"
                };
            }
            let s = await ZKe("unsubscribe", {
                sessionId: C,
                repo: e,
                prNumber: r,
                baseUrl,
                getAccessToken,
                getTrustedDeviceToken
            });
            if (s.ok) {
                ir.delete(`${e}#${r}`);
            }
            return s;
        },
        async recordCreatedPR (e, timeoutMs) {
            if (O) {
                return {
                    ok: false,
                    skipped: "no_bridge"
                };
            }
            if (ee) {
                return {
                    ok: false,
                    skipped: "owner_changed"
                };
            }
            return Yps({
                sessionUrl: KMe(api_base_url, C),
                workerToken: worker_jwt,
                ...e,
                timeoutMs
            });
        },
        async fetchInboxMessage (fileId) {
            let r = (s)=>{
                m("bridge_inbox_fetch", s);
                return {
                    ok: false,
                    reason: s
                };
            };
            if (O) {
                return r("no_bridge");
            }
            if (ee) {
                return r("owner_changed");
            }
            {
                let s = async (j)=>{
                    if (O) {
                        return "no_bridge";
                    }
                    if (ee) {
                        return "owner_changed";
                    }
                    if (j?.fresh ? Yn() : xt()) {
                        let H = await Ci("owner_changed_inbox", j);
                        if (H === "changed") {
                            return "owner_changed";
                        }
                        if (H === "inconclusive") {
                            if (O) {
                                return "no_bridge";
                            }
                            return "owner_unverified";
                        }
                    }
                    if (O) {
                        return "no_bridge";
                    }
                };
                let v = await s();
                if (v) {
                    return r(v);
                }
                if (onProactiveRefresh) {
                    try {
                        await onProactiveRefresh();
                    } catch (error) {
                        t(`[remote-bridge] inbox fetch: token refresh failed: ${l(error)}`, {
                            level: "error"
                        });
                    }
                }
                let b = getAccessToken();
                let _ = await getTrustedDeviceToken();
                if (onProactiveRefresh) {
                    let j = await s({
                        fresh: true
                    });
                    if (j) {
                        return r(j);
                    }
                }
                let { fetchSessionInboxMessage } = import.meta.require("/$bunfs/root/chunk-32t593gy.js");
                return fetchSessionInboxMessage({
                    sessionId: C,
                    fileId,
                    baseUrl,
                    getAccessToken: ()=>b,
                    getTrustedDeviceToken: ()=>Promise.resolve(_)
                });
            }
            return r("feature_disabled");
        },
        getPRWebhookTargets () {
            return [
                ...ir.values()
            ];
        },
        teardown,
        neverArchive: neverArchive_1,
        async archive () {
            if (neverArchive_1) {
                return;
            }
            let e = ki();
            await zt(C, baseUrl, e === undefined ? Jn().token : undefined, orgUUID, z.teardown_archive_timeout_ms, e, storageV5);
        },
        [Symbol.asyncDispose] () {
            return po.teardown({
                reason: "host_exit"
            });
        }
    };
    if (neverArchive_1 && !reattach) {
        Br(C, storageV5);
    }
    let Ki = St(po);
    return po;
}
async function lr(n, h, y) {
    let y_init_retry_max_attempts = y.init_retry_max_attempts;
    for(let N = 1; N <= y_init_retry_max_attempts; N++){
        let x = await n();
        if (x !== null) {
            return x;
        }
        if (N < y_init_retry_max_attempts) {
            let V = Math.min(Zv({
                attempt: N,
                baseMs: y.init_retry_base_delay_ms,
                jitter: {
                    kind: "symmetric",
                    ratio: y.init_retry_jitter_fraction
                }
            }), y.init_retry_max_delay_ms);
            t(`[remote-bridge] ${h} failed (attempt ${N}/${y_init_retry_max_attempts}), retrying in ${Math.round(V)}ms`);
            await Q(V);
        }
    }
    return null;
}
async function Io(n, h, y, T) {
    let N = false;
    let x = false;
    let V = await lr(async ()=>{
        if (N) {
            x = true;
        }
        let W = T.getAccessToken();
        let w = false;
        let K = await n(W, ()=>{
            w = true;
        });
        let Z = eN(K);
        if ((K === null || Z) && w && T.onAuth401 && !N && !T.recoveryAttemptedTokens.has(W)) {
            T.recoveryAttemptedTokens.add(W);
            let refreshed = false;
            try {
                refreshed = await T.onAuth401(W);
            } catch (error) {
                t(`[remote-bridge] ${h} 401 \u2014 OAuth refresh threw: ${l(error)}`, {
                    level: "error"
                });
            }
            N = refreshed;
            t(`[remote-bridge] ${h} 401 \u2014 OAuth ${refreshed ? "refreshed; retrying with the fresh token" : "refresh unavailable"}`);
            J("info", "bridge_repl_v2_init_401_refresh", {
                refreshed
            });
            if (N && Z) {
                return null;
            }
        }
        return K;
    }, h, y);
    if (V === null && N && !x) {
        t(`[remote-bridge] ${h} refreshed on the final attempt; one extra try with the fresh token`);
        return n(T.getAccessToken(), ()=>{});
    }
    return V;
}
function Cd(n) {
    if (n.reason === "untrusted_device") {
        return n.refusal?.kind !== "signature_wanted" && !xde();
    }
    return n.reason === "session_stale_relogin";
}
function kt(n) {
    if (Cd(n)) {
        return "auth";
    }
    return "terminal";
}
function kn(n) {
    return n.reason === "request_rejected" && n.status === 403 && QNe(n.source);
}
function Tn(n, h) {
    if (kn(h)) {
        return `${n}_credentials_rejected_nonorigin`;
    }
    return `${n}_credentials_rejected`;
}
var kd = {
    nonorigin_cf: "recovered_403_nonorigin_cf",
    nonorigin_other: "recovered_403_nonorigin_other"
};
function ks(detail) {
    switch(detail?.rejectSource){
        case "nonorigin_cf":
            return "transport_closed_403_nonorigin_cf";
        case "nonorigin_other":
            return "transport_closed_403_nonorigin_other";
        case "origin":
        case undefined:
            return "transport_closed_403";
    }
}
function nke(n) {
    switch(n.reason){
        case "untrusted_device":
            return fbe(n.refusal);
        case "session_stale_relogin":
            return "session expired for trusted-device check — run /login to re-authenticate";
        case "invalid_session_id":
            return "session id contains unsupported characters — check the --session-id value";
        case "request_rejected":
            if (kn(n)) {
                return `${ubr(n.source)} \u2014 run /remote-control to retry`;
            }
            return `Remote Control server rejected the request (HTTP ${n.status}) \u2014 run /remote-control to retry`;
        case "malformed_response":
            return _Pt;
    }
}
async function Md(n, api_base_url, y, T, N, x, V) {
    let W = await getTrustedDeviceToken();
    let w = await cbr(n, api_base_url, y, T, W, N, V);
    let K = ooe(w) && w.reason === "untrusted_device" ? w.refusal : undefined;
    if (K !== undefined && Iat(K)) {
        w = await gPt(W, (Z)=>cbr(n, api_base_url, y, T, Z, N, V), x) ?? w;
    } else if (K !== undefined) {
        uoe("[remote-bridge]", K);
        rN();
    }
    if (!w) {
        return null;
    }
    if (eN(w)) {
        return w;
    }
    if (ooe(w)) {
        if (w.reason === "untrusted_device" && !J5()) {
            return {
                terminal: true,
                reason: "request_rejected",
                status: 403
            };
        }
        return w;
    }
    if ($ce()) {
        return {
            ...w,
            api_base_url
        };
    }
    return w;
}
function Ms(n, cause) {
    if (n === 403 || n === 404) {
        return "superseded_unknown";
    }
    if (n !== 4090) {
        return;
    }
    switch(cause){
        case "superseded_by_worker":
            return "superseded";
        case "session_not_active":
            return "session_archived";
        case "epoch_conflict":
        case undefined:
            return "superseded_unknown";
        case "epoch_stale":
        case "session_not_found":
        case "token_expired":
        case "auth_exhausted":
            return;
    }
}
function As(n) {
    return n !== "session_archived";
}
function Ps(n, h) {
    if (n === "skipped_superseded") {
        if (h === "session_archived") {
            return "skipped_archived";
        }
        return "skipped_superseded";
    }
    if (n === "skipped_owner_changed") {
        return "skipped_owner_changed";
    }
    if (n === "no_token") {
        return "skipped_no_token";
    }
    if (n === "invalid") {
        return "invalid_id";
    }
    if (n === "untrusted_device") {
        return "server_403_untrusted";
    }
    if (n === "timeout" || n === "error") {
        return "network_error";
    }
    if (n >= 500) {
        return "server_5xx";
    }
    if (n >= 400) {
        return "server_4xx";
    }
    return "ok";
}
async function zt(n, baseUrl, y, orgUUID, N, x, storageV5) {
    if (AT(n)) {
        t(`[remote-bridge] Archive suppressed for teleported session ${n}`);
        Br(n, storageV5);
        return 200;
    }
    if (x === "owner_changed") {
        t(`[remote-bridge] Archive suppressed for owner-changed session ${n}`);
        J("info", "bridge_repl_archive_suppressed_owner_changed");
        return "skipped_owner_changed";
    }
    if (x !== undefined) {
        t(`[remote-bridge] Archive suppressed for ${x} session ${n}`);
        J("info", x === "superseded" ? "bridge_repl_archive_suppressed_superseded" : x === "session_archived" ? "bridge_repl_archive_suppressed_archived" : "bridge_repl_archive_suppressed_superseded_unknown");
        return "skipped_superseded";
    }
    if (!y) {
        return "no_token";
    }
    let W = await getTrustedDeviceToken().catch(()=>{});
    let w = await tQt(baseUrl, y, n, N, {
        useV2: AW(),
        orgUUID,
        trustedDeviceToken: W
    });
    if (Sn(w)) {
        Br(n, storageV5);
    }
    return w;
}
const Os = 8;
const baseMs = 5000;
const floorMs = 2000;
async function Is(n, h) {
    for(let y = 0; y < Os; y++){
        if (y > 0) {
            await Q(YR({
                baseMs,
                floorMs,
                attempt: y - 1
            }), undefined, {
                unref: true
            });
        }
        let T = await h();
        if (Sn(T) || T === "untrusted_device") {
            return;
        }
        t(`[remote-bridge] Archive of abandoned session ${n} not confirmed (attempt ${y + 1}/${Os}, status=${T})`);
    }
}
async function Od(n, baseUrl, y, orgUUID, http_timeout_ms, x, credentialsStore) {
    if (!y) {
        return {
            outcome: "ok"
        };
    }
    let W = await getTrustedDeviceToken().catch(()=>{});
    let w = await dbr(baseUrl, y, n, http_timeout_ms, {
        useV2: AW(),
        orgUUID,
        trustedDeviceToken: W
    });
    if (w === "invalid") {
        J("info", "bridge_repl_v2_unarchive_invalid_id");
        return {
            outcome: "gone",
            status: "invalid"
        };
    }
    if (w === "untrusted_device" || w === "untrusted_device_no_enroll" || w === "session_stale_relogin") {
        if (w === "untrusted_device") {
            let Z = await gPt(W, (oe)=>dbr(baseUrl, y, n, http_timeout_ms, {
                    useV2: AW(),
                    orgUUID,
                    trustedDeviceToken: oe
                }), credentialsStore);
            if (typeof Z === "number" && (Z < 300 || Z === 409)) {
                J("info", "bridge_repl_v2_unarchive_ok");
                return {
                    outcome: "ok"
                };
            }
            if (Z === "untrusted_device_no_enroll") {
                J("info", "bridge_repl_v2_unarchive_elevated_auth");
                return {
                    outcome: "elevated_auth",
                    reason: "untrusted_device",
                    refusal: x$n
                };
            }
        }
        J("info", "bridge_repl_v2_unarchive_elevated_auth");
        if (w === "untrusted_device_no_enroll") {
            uoe("[remote-bridge]", x$n);
            rN();
            return {
                outcome: "elevated_auth",
                reason: "untrusted_device",
                refusal: x$n
            };
        }
        return {
            outcome: "elevated_auth",
            reason: w
        };
    }
    if (typeof w !== "number") {
        J("info", "bridge_repl_v2_unarchive_failed");
        return null;
    }
    let K = w < 300 || w === 409;
    J("info", K ? "bridge_repl_v2_unarchive_ok" : "bridge_repl_v2_unarchive_failed");
    if (K) {
        return {
            outcome: "ok"
        };
    }
    if (w === 400 || w === 403 || w === 404) {
        return {
            outcome: "gone",
            status: w
        };
    }
    if (w === 401) {
        x?.();
    }
    return null;
}
function Qer(n, h) {
    if (h <= 0 || n.length <= h) {
        return n;
    }
    let y = n.length - h;
    for (let { fromIdx, toIdx } of JHn(n)){
        if (y > fromIdx && y <= toIdx) {
            y = fromIdx;
            break;
        }
    }
    return n.slice(y);
}
function Id(n) {
    if (n.type !== "user" || !TQt(n) || Cn(n)) {
        return false;
    }
    let content = n.message.content;
    return typeof content === "string" || !content.some((y)=>y.type === "tool_result");
}
function Ds(n) {
    if (n.type !== "assistant" && n.type !== "user" || n.parent_tool_use_id == null || !yn(n)) {
        return false;
    }
    return n.type === "user" || !n.message.content.some((h)=>h.type === "tool_use" && (h.name === yt || h.name === zf));
}
function Cn(n) {
    if (n.type !== "user" || !Db(n)) {
        return false;
    }
    let content = n.message.content;
    if (typeof content === "string") {
        return dSe.includes(content);
    }
    return content.every((y)=>y.type !== "text" || dSe.includes(y.text));
}
export { J3o, Ovn, Mvn, Jer, Q3o, Hvn, a6r, Z3o, nke, Qer };
