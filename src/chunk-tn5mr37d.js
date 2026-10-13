import { oCr, p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { r5o, f6r, RGe, NZe, ntr } from "/$bunfs/root/chunk-852ksjk2.js";
import { dRe, aP, Rks, Ea, Fn, k, Gr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { K, cPr } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ye, nc, Ke, W, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ut, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _, X, ei, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ar, LDt } from "/$bunfs/root/chunk-24agvrd9.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { J, rPe } from "/$bunfs/root/chunk-tchztk88.js";
import { Io } from "/$bunfs/root/chunk-63xa24b4.js";
import { Vv, aOs } from "/$bunfs/root/chunk-x47nahfr.js";
import { Lb } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { dZ } from "/$bunfs/root/chunk-52bcnmbr.js";
import { f0 } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { wn, Qu, rs, C1n, WTs, zTs, mbo, cen, gbo, hbo, ybo, den, Ebo } from "/$bunfs/root/chunk-6dwnw6av.js";
import { bde } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Nen } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { wo } from "/$bunfs/root/chunk-6s83kxfy.js";
import { P3r, wnr, O3r, hke, Jte } from "/$bunfs/root/chunk-kasbfbhj.js";
import { GI, kB } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { pgs } from "/$bunfs/root/chunk-4r6b8efh.js";
import { L4 } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { rCt, R4, mLe, qe } from "/$bunfs/root/chunk-46dhek9m.js";
import { LI } from "/$bunfs/root/chunk-j6dkn7h7.js";
import { Pne } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Jo } from "/$bunfs/root/chunk-62g69mqc.js";
import { hst, rDn } from "/$bunfs/root/chunk-ypkrahyx.js";
import { F7r, Tcr, _E } from "/$bunfs/root/chunk-6xvcnbea.js";
import { bPt, rFn, vSs, ESs, kSs, oFn } from "/$bunfs/root/chunk-xpqgtv5j.js";
import { Kss, Hur } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { KBo } from "/$bunfs/root/chunk-wdayd23w.js";
import { ggn } from "/$bunfs/root/chunk-d8r8k9zm.js";
import { p5n, qje, m5n, XBo } from "/$bunfs/root/chunk-14hkpzw0.js";
import { cze, mK } from "/$bunfs/root/chunk-566pera2.js";
import { Zfe } from "/$bunfs/root/chunk-2p4yvg7n.js";
import { mjt, gjt, tWr, hjt } from "/$bunfs/root/chunk-qwmd9wje.js";
import { V8t } from "/$bunfs/root/chunk-nvz50x4x.js";
import { zs } from "/$bunfs/root/chunk-k1zxadxf.js";
import { Lps } from "/$bunfs/root/chunk-bcy16nn4.js";
import { pr as toolName } from "/$bunfs/root/chunk-e00q6jpd.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
import { IR, K8, oe, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { randomUUID } from "crypto";
const ie = "tengu_ccr_sdk_mcp_remote_manifests";
function i5n() {
    return Gr("tengu_sdk_mcp_manifests", true);
}
const H = "sdk_mcp_tools_list_changed";
const ae = "sdk_mcp_manifests";
function $Bo(e) {
    if (!k("tengu_sdk_mcp_manifests", true)) {
        return [];
    }
    if (e?.isRemoteTransport() !== true || NZe(e.sessionWriters()) && N()) {
        return [
            H,
            ae
        ];
    }
    return [
        H
    ];
}
function FBo(e) {
    if (e.includes("sdkMcpServerManifests")) {
        return F(e, 0);
    }
}
const x = [
    "payload",
    "request",
    "sdkMcpServerManifests"
];
function F(e, s) {
    return Lps(e, (n, r)=>{
        if (n !== x[s]) {
            return r;
        }
        if (s === x.length - 1) {
            return "{}";
        }
        return F(r, s + 1) ?? r;
    });
}
function N() {
    return k(ie, false);
}
const maxFrameAgeMs = 300000;
const IJe = 300000;
function ue({ origin, frameCreatedAt, sessionWriters, now = Date.now() }) {
    if (origin !== "host_per_send") {
        return "no_origin_marker";
    }
    let o = ntr({
        frameCreatedAt,
        sessionWriters,
        maxFrameAgeMs,
        maxStatementAgeMs: IJe,
        now
    });
    if (o !== undefined) {
        return o;
    }
}
async function UBo(e) {
    let s = ue(e);
    if (s !== undefined) {
        return s;
    }
    if (N()) {
        return;
    }
    if (await Ge(Ea().catch(()=>null), 0) !== undefined) {
        return "flag_off";
    }
    return "flag_unsettled";
}
const j = false;
function le() {
    let e = wo();
    let s = Fn(Rks, j);
    e.servedOnFacts ??= s.value === true && s.source === "payload";
    return e.servedOnFacts;
}
const ce = "ui_";
const z = "ui_detach";
const G = "remote_cowork";
const pe = new Set([
    G,
    "remote_mobile"
]);
function Xpn(e) {
    let s = Vv();
    return !e.redactsWhatItPersists && (!e.isRemoteTransport || rs() && Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) && (pe.has(s ?? "") || aOs.has(s ?? "") && le()));
}
function qIe(e) {
    return LI() && Xpn(e) && (!e.isRemoteTransport || NZe(e.sessionWriters));
}
function BBo(e, s) {
    return e.isRemoteTransport && !s && LI() && Xpn(e);
}
function L$r() {
    return k("tengu_calm_osprey", true);
}
function OJe(e) {
    return typeof e === "string" && e.startsWith(ce);
}
function jBo(e) {
    try {
        let s = e();
        return s.isRemoteTransport && s.leavesBelowFloor;
    } catch (error) {
        c(W(error));
        return true;
    }
}
function Jpn(e, now) {
    return ntr({
        frameCreatedAt: e.createdAt,
        sessionWriters: e.sessionWriters,
        maxFrameAgeMs,
        maxStatementAgeMs: IJe,
        now
    });
}
function a5n(e, s, n = Date.now) {
    if (!OJe(e)) {
        return false;
    }
    try {
        let r = s();
        let o = !r.isRemoteTransport || (r.isAtFloor || r.leavesBelowFloor && e === z) && Jpn(r, n()) === undefined;
        let m = e === z && r.isAnySurfaceAttached;
        return !(Xpn(r) && o && (m || LI()));
    } catch (error) {
        c(W(error));
        return true;
    }
}
function WBo(e, s) {
    return e.isRemoteTransport && s && LI() && !NZe(e.sessionWriters);
}
function l5n(e) {
    try {
        let s = e();
        if (qIe(s) && (!s.isRemoteTransport || Vv() === G)) {
            return [
                KBo
            ];
        }
        return [];
    } catch (error) {
        c(error);
        return [];
    }
}
const fe = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function KIe(e) {
    if (typeof e === "string" && fe.test(e)) {
        return e;
    }
}
const me = [
    "interrupt",
    "can_use_tool",
    "initialize",
    "set_permission_mode",
    "set_model",
    "set_max_thinking_tokens",
    "rename_session",
    "set_color",
    "mcp_status",
    "get_context_usage",
    "get_session_cost",
    "list_models",
    "get_usage",
    "get_memory_dialog",
    "get_skills_dialog",
    "get_chrome_dialog",
    "get_chrome_browsers",
    "select_chrome_browser",
    "get_sandbox_dialog",
    "get_status",
    "export_conversation",
    "get_binary_version",
    "mcp_call",
    "file_suggestions",
    "hook_callback",
    "mcp_message",
    "rewind_files",
    "cancel_async_message",
    "read_file",
    "list_directory",
    "get_workspace_diff",
    "get_plan",
    "seed_read_state",
    "mcp_set_servers",
    "register_repo_root",
    "reload_plugins",
    "reload_skills",
    "reload_output_styles",
    "mcp_reconnect",
    "mcp_toggle",
    "set_mcp_permission_mode_override",
    "set_chrome_browser_hints",
    "set_prompt_suggestions_paused",
    "set_cwd",
    "claim_session",
    "register_device_hooks",
    "upload_device_hook_template",
    "message_rated",
    "oauth_token_refresh",
    "host_auth_token_refresh",
    "stop_task",
    "background_tasks",
    "get_task_output",
    "apply_flag_settings",
    "get_settings",
    "get_hooks_listing",
    "update_settings",
    "elicitation",
    "request_user_dialog",
    "submit_feedback",
    "remote_tools_announce",
    "remote_tool_call",
    "remote_plumbing_call",
    "remote_tools_probe",
    "remote_tools_reannounce",
    "ui_attach",
    "ui_detach",
    "ui_render",
    "ui_press",
    "ui_client_module",
    "ui_client_press",
    "ui_message",
    "ui_client_fault",
    "remote_control_work_secret",
    "turn_handoff",
    "list_permission_rules",
    "mcp_read_resource",
    "ui_input",
    "ui_select",
    "ui_panes",
    "ui_pane_show",
    "ui_pane_focus",
    "ui_close",
    "ui_scroll",
    "ui_focus",
    "ui_prompt_edit",
    "ui_prompt_autocomplete",
    "ui_copy",
    "ui_prompt_read",
    "ui_prompt_fill",
    "ui_prompt_suggest",
    "ui_read_selection"
];
const he = new Set(me);
function Vgt(e) {
    if (typeof e === "string" && he.has(e)) {
        return e;
    }
}
function YIe(e, s) {
    return {
        [`${e}_${s}`]: true
    };
}
function c5n(e) {
    let s = Array.isArray(e?.updatedPermissions) ? e.updatedPermissions : [];
    let answer_kind = e?.behavior === "deny" ? "deny" : e?.behavior !== "allow" ? "other" : s.length === 0 ? "allow_once" : "allow_with_updates";
    let r = (o)=>answer_kind === "allow_with_updates" && s.some((m)=>typeof m === "object" && m !== null && o(m));
    return {
        answer_kind,
        ...YIe("answer_kind", answer_kind),
        ...r((o)=>(o.type === "addRules" || o.type === "replaceRules") && o.behavior === "allow") && {
            answer_updates_add_allow_rule: true
        },
        ...r((o)=>o.type === "setMode") && {
            answer_updates_set_mode: true
        },
        ...r((o)=>o.type === "addDirectories") && {
            answer_updates_add_directories: true
        }
    };
}
function qgt(e) {
    return Math.round(performance.now() - e);
}
const O = (request)=>den().options.some((s)=>s === request.subtype);
const _e = 30000;
const ge = 30000;
const Se = 45000;
const Y = new Set([
    "CLAUDE_CODE_SESSION_ACCESS_TOKEN",
    "CLAUDE_CODE_OAUTH_TOKEN"
]);
const Re = 300000;
const ye = 70000;
const ke = 0.01;
const be = 262144;
const ve = 1000;
const we = p(()=>Kss(Ebo()));
const Ae = 268435456;
function V(maxLineChars) {
    return `Error: stream-json input carried over ${Math.round(maxLineChars / 1024 / 1024)}M characters with no newline. Each stream-json message must be a single newline-terminated JSON line: either the producer is not newline-terminating its messages, or one message exceeded this budget.`;
}
const De = 64;
const Pe = 1048576;
const M = '"control_response"';
const Q = 512;
function Z(e) {
    let s = Pne().safeParse(e);
    if (!s.success) {
        return null;
    }
    if ((typeof e === "object" && e !== null ? Object.keys(e).length : 0) > 0 && Object.keys(s.data).length === 0) {
        return null;
    }
    return s.data;
}
function ee(e) {
    let s = ei(ne(e, 4096), {
        maxCodeUnits: 512
    });
    if (e.length > 512) {
        return `${s}\u2026 [${e.length} chars total]`;
    }
    return s;
}
function I(error) {
    if (typeof error === "string") {
        return ei(ne(error, 4096), {
            maxCodeUnits: 200
        });
    }
    return "a non-string error field";
}
function Ce(delivery, s) {
    if (delivery === "delivered" || s === "accepted") {
        return "delivered";
    }
    if (delivery === "indeterminate" || s === "indeterminate") {
        return "indeterminate";
    }
    if (s === "sending") {
        return "sending";
    }
    return "queued";
}
function Ee(request) {
    if (typeof request === "object" && request !== null && "subtype" in request) {
        return request.subtype;
    }
}
function Ue(delivery) {
    switch(delivery){
        case "delivered":
            return "delivered";
        case "queued":
            return "queued";
        case "sending":
            return "in_flight";
        case "indeterminate":
            return "indeterminate";
    }
}
function te(e, s) {
    if (e instanceof nc) {
        return "stream_closed";
    }
    if (e instanceof IR) {
        return "parse_failed";
    }
    if (s.aborted) {
        return "timeout";
    }
    return "aborted";
}
class Qfe {
    input;
    replayUserMessages;
    maxLineChars;
    isRemoteTransport() {
        return false;
    }
    uiSurfaceFrameOf(e, isAnySurfaceAttached) {
        let redactsWhatItPersists = this.redactsWhatItPersists();
        if (this.isRemoteTransport()) {
            return {
                isRemoteTransport: true,
                redactsWhatItPersists,
                isAnySurfaceAttached,
                createdAt: undefined,
                sessionWriters: undefined,
                isAtFloor: false,
                leavesBelowFloor: false
            };
        }
        return {
            isRemoteTransport: false,
            redactsWhatItPersists,
            isAnySurfaceAttached
        };
    }
    surfaceRequestJudgedAt(e) {
        let s = this.surfaceRequestsJudgedAt.get(e) ?? Date.now();
        this.surfaceRequestsJudgedAt.set(e, s);
        return s;
    }
    surfaceRequestsJudgedAt = new WeakMap;
    redactsWhatItPersists() {
        return C1n({
            hostedWorker: this.isHostedWorker,
            transportPersists: this.persistsOutboundFrames
        });
    }
    uiSurfaceChannel() {
        return {
            redactsWhatItPersists: this.redactsWhatItPersists(),
            isRemoteTransport: this.isRemoteTransport(),
            sessionWriters: this.sessionWriters()
        };
    }
    sessionWriters() {}
    surfaceClientAttached(e, s) {
        return true;
    }
    controlRequestEnded(e) {}
    answersSurfaceRefusal(e) {
        return true;
    }
    surfaceSenderStands(e) {
        return true;
    }
    setSurfaceRoster(e) {}
    setSubscribersReportedListener(e) {}
    taskHoldSince() {}
    structuredInput;
    pendingRequests = new Map;
    requestPending = Oe();
    sdkHostHookGeneration = 0;
    retiredHostHookAnswer;
    deviceRequests = new Map;
    publishedPendingActionDetails = new Map;
    backgroundPromptIds = new Set;
    flipBackLeftToUnpublishedAsk = false;
    streamCloseInterruptRequestIds = new Set;
    hostDialogAttestations = new Map;
    timedOutUserDialogs = new Map;
    unansweredSettleHandlers = new Map;
    restoredWorkerState = Promise.resolve(null);
    rereadWorkerState() {
        return Promise.resolve(null);
    }
    readProjectsBinding() {
        return Promise.resolve({
            read: true,
            assertion: undefined
        });
    }
    workerEpoch() {
        return 0;
    }
    hydratePrefetch = Promise.resolve(null);
    inputClosed = false;
    hasUnconsumedInput = false;
    answerLinesWritten = 0;
    answerLinesRead = 0;
    receivedAnswersRead;
    tracksRequestDelivery = false;
    unexpectedResponseCallback;
    unclaimedResponseObserver;
    resolvedToolUseIds = new Set;
    prependedLines = [];
    locallyPrependedMessages = new WeakSet;
    prependWaker = null;
    stallTimer;
    stallFired = false;
    sdkSchemaStretchSampled;
    sdkSchemaKept = new Map;
    sdkSchemaResultWritten = false;
    sdkSchemaCheckTimer;
    createdAt = Date.now();
    onControlRequestSent;
    onControlRequestResolved;
    onStreamClosedWithParkedQuestion;
    onUserDialogParked;
    hostAnswersElicitations = true;
    onCommandLifecycle;
    resultDelivery;
    commandLifecycleForwarderInstalled = false;
    hostOwnsStdinOrigin = true;
    persistsOutboundFrames = false;
    get isHostedWorker() {
        return false;
    }
    sessionState;
    outbound = new _E;
    heldUntilInit = [];
    constructor(e, s, n, r = Ae){
        this.input = e;
        this.replayUserMessages = s;
        this.maxLineChars = r;
        this.input = e;
        this.sessionState = n ?? new V8t;
        this.sessionState.getPendingActionDetails = (o)=>{
            let m = [];
            for (let [h, S] of this.publishedPendingActionDetails){
                if (this.pendingRequests.has(h) || h === o) {
                    m.push(S);
                }
            }
            return m;
        };
        this.sessionState.stateChanged.subscribe((o)=>{
            if (o !== "requires_action") {
                this.flipBackLeftToUnpublishedAsk = false;
            }
            if (o === "idle") {
                this.endSdkSchemaStretch();
            }
        });
        this.structuredInput = this.read();
    }
    trackResolvedToolUseId(e) {
        if (e.request.subtype === "can_use_tool") {
            this.resolvedToolUseIds.add(e.request.tool_use_id);
        }
        if (RGe(e)) {
            oFn(e.request_id);
        }
    }
    flushInternalEvents() {
        return Promise.resolve();
    }
    watchInternalEventPosts() {}
    droppedInternalEventBatches() {
        return 0;
    }
    sessionServiceNow() {}
    readStreamFrameAt() {}
    newestSessionStreamCreatedAt() {}
    withdrawQueuedRequest(e) {
        return false;
    }
    flushDeliveryAcks() {
        return Promise.resolve();
    }
    flushDeliveryAcksConfirmed() {
        return Promise.resolve(true);
    }
    flushClientEvents() {
        return Promise.resolve(true);
    }
    flushInternalEventsConfirmed() {
        return Promise.resolve(true);
    }
    flushSessionState() {
        return Promise.resolve(true);
    }
    get internalEventsPending() {
        return 0;
    }
    repliesLeftForNextProcess = 0;
    prependUserMessage(content) {
        this.prependedLines.push({
            line: _({
                type: "user",
                session_id: "",
                message: {
                    role: "user",
                    content
                },
                parent_tool_use_id: null
            }),
            hostLocal: true
        });
        this.prependWaker?.();
    }
    readAgain(e) {
        this.prependedLines.push({
            line: _(e),
            hostLocal: false
        });
        this.prependWaker?.();
    }
    noteInputWritten(e) {
        let s = e.indexOf(M);
        while(s !== -1){
            let n = e.indexOf(`
`, s);
            if (n === -1) {
                return;
            }
            this.answerLinesWritten++;
            s = e.indexOf(M, n);
        }
    }
    whenReceivedAnswersRead() {
        if (this.answerLinesWritten <= this.answerLinesRead) {
            return;
        }
        this.receivedAnswersRead ??= Promise.withResolvers();
        return this.receivedAnswersRead.promise;
    }
    noteAnswerLinesRead(e) {
        this.answerLinesRead = e;
        if (this.answerLinesWritten <= e) {
            this.receivedAnswersRead?.resolve();
            this.receivedAnswersRead = undefined;
        }
    }
    isLocallyPrependedMessage(e) {
        return this.locallyPrependedMessages.has(e);
    }
    takeUserFrameReceivedWallMs(e) {}
    userFrameStartedAtMs(e) {}
    userFrameReceivedAtMs(e) {}
    async *read() {
        let e = "";
        let s = [];
        let n = 0;
        let r = false;
        let o = 0;
        let m = 0;
        let h = false;
        function S(w) {
            o++;
            m += w.length;
            if (h) {
                return;
            }
            h = true;
            Lb().then(()=>{
                o = 0;
                m = 0;
                h = false;
            });
        }
        let v = (async function*() {
            while(true){
                if (o >= De || m >= Pe) {
                    await Lb();
                    o = 0;
                    m = 0;
                }
                let w = false;
                while(this.prependedLines.length > 0){
                    let { line, hostLocal } = this.prependedLines.shift();
                    w = true;
                    S(line);
                    let U = await this.processLine(line);
                    if (U) {
                        if (hostLocal) {
                            this.locallyPrependedMessages.add(U);
                        }
                        J("info", "cli_stdin_message_parsed", se(U));
                        yield U;
                    }
                }
                if (w) {
                    continue;
                }
                let q = e.indexOf(`
`);
                if (q === -1) {
                    break;
                }
                let C = e.slice(0, q);
                e = e.slice(q + 1);
                S(C);
                let E = await this.processLine(C);
                if (E) {
                    J("info", "cli_stdin_message_parsed", se(E));
                    this.hasUnconsumedInput = e.trim().length > 0;
                    yield E;
                }
                if (this.answerLinesRead < this.answerLinesWritten && C.includes(M)) {
                    this.noteAnswerLinesRead(this.answerLinesRead + 1);
                }
            }
            this.hasUnconsumedInput = e.trim().length > 0;
        }).bind(this);
        let y = this.input[Symbol.asyncIterator]();
        let R = null;
        let A = false;
        try {
            while(true){
                if (r || this.prependedLines.length > 0) {
                    if (s.length > 0) {
                        e += s.join("");
                        s = [];
                    }
                    yield* v();
                    n = e.length;
                    if (n > this.maxLineChars) {
                        J("warn", "cli_stream_json_line_budget", {
                            at: "tail"
                        });
                        await this.exitOnFatalInput(V(this.maxLineChars));
                    }
                    r = false;
                }
                R ??= y.next();
                let w = await Promise.race([
                    R.then(()=>false),
                    new Promise((resolve)=>{
                        this.prependWaker = ()=>resolve(true);
                    })
                ]);
                this.prependWaker = null;
                if (w) {
                    continue;
                }
                let q = await R;
                R = null;
                if (q.done) {
                    A = true;
                    break;
                }
                n += q.value.length;
                let C = q.value.includes(`
`);
                if (!C && n > this.maxLineChars) {
                    J("warn", "cli_stream_json_line_budget", {
                        at: "block"
                    });
                    await this.exitOnFatalInput(V(this.maxLineChars));
                }
                s.push(q.value);
                if (C) {
                    r = true;
                } else if (!this.hasUnconsumedInput && /\S/.test(q.value)) {
                    this.hasUnconsumedInput = true;
                }
            }
        } finally{
            this.prependWaker = null;
            this.noteAnswerLinesRead(Number.POSITIVE_INFINITY);
            if (!A) {
                await y.return?.();
            }
        }
        if (s.length > 0) {
            e += s.join("");
            s = [];
        }
        if (e) {
            let w = await this.processLine(e);
            if (w) {
                yield w;
            }
        }
        this.inputClosed = true;
        let P = wn();
        if (!P && p5n()) {
            for (let [w, q] of this.pendingRequests.entries()){
                if (!q.forwarded && q.request.request.subtype === "can_use_tool" && q.request.request.tool_name === Jo) {
                    this.streamCloseInterruptRequestIds.add(w);
                }
            }
            if (this.streamCloseInterruptRequestIds.size > 0) {
                this.onStreamClosedWithParkedQuestion?.();
            }
        }
        for (let w of this.pendingRequests.values()){
            if (P && this.asksOurHuman(w)) {
                continue;
            }
            w.reject(new nc(F7r));
        }
    }
    hasPendingRequests() {
        return this.pendingRequests.size > 0;
    }
    onRequestPending(e) {
        return this.requestPending.subscribe(e);
    }
    getPendingPermissionRequests() {
        return Array.from(this.pendingRequests.values()).map((e)=>e.request).filter((e)=>e.request.subtype === "can_use_tool");
    }
    getPendingUserDialogRequests() {
        return Array.from(this.pendingRequests.values()).map((e)=>e.request).filter((e)=>e.request.subtype === "request_user_dialog");
    }
    hasPendingPrompt() {
        for (let { request } of this.pendingRequests.values()){
            if (RGe(request)) {
                return true;
            }
        }
        return false;
    }
    hasStandingPrompt() {
        if (this.sessionState.getState() !== "requires_action") {
            return false;
        }
        if (this.flipBackLeftToUnpublishedAsk) {
            return this.hasPendingPrompt();
        }
        for (let e of this.publishedPendingActionDetails.keys()){
            if (this.pendingRequests.has(e)) {
                return true;
            }
        }
        return false;
    }
    hasTurnPrompt() {
        for (let e of this.publishedPendingActionDetails.keys()){
            if (!this.backgroundPromptIds.has(e)) {
                return true;
            }
        }
        return false;
    }
    listTurnPrompts() {
        return [
            ...this.publishedPendingActionDetails.keys()
        ].filter((e)=>!this.backgroundPromptIds.has(e));
    }
    retireSdkHostHookCallbacks(e) {
        this.sdkHostHookGeneration++;
        this.retiredHostHookAnswer = e;
        let s = 0;
        for (let [n, r] of Array.from(this.pendingRequests)){
            let o = r.request.request;
            if (o.subtype !== "hook_callback") {
                continue;
            }
            let m = e(o.input);
            let h = r.schema ? r.schema.parse(m) : m;
            this.pendingRequests.delete(n);
            this.enqueueCancelRequest(n);
            r.resolve(h);
            s++;
        }
        return s;
    }
    republishSurvivingPendingAction() {
        let e;
        for (let [s, n] of this.publishedPendingActionDetails){
            if (this.pendingRequests.has(s)) {
                e = n;
            }
        }
        if (!e) {
            this.flipBackLeftToUnpublishedAsk = this.sessionState.getState() === "requires_action";
            return;
        }
        this.sessionState.republishPendingAction(e);
        i("tengu_pending_action_republished", {
            survivor_kind: d(e.tool_name === hst ? "elicitation" : e.tool_name.startsWith("dialog:") ? "dialog" : "permission"),
            pending_permission_requests: this.getPendingPermissionRequests().length,
            pending_dialog_requests: this.getPendingUserDialogRequests().length
        });
    }
    cancelPendingUserDialogs(e, s) {
        let n = 0;
        for (let { request } of Array.from(this.pendingRequests.values())){
            if (request.request.subtype !== "request_user_dialog" || request.request.dialog_kind !== e) {
                continue;
            }
            if (!this.cancelDialogByMachine(request.request_id, "moved_on")) {
                continue;
            }
            i("tengu_request_user_dialog_implicit_cancel", {
                dialog_kind: ln(e),
                reason: d(s)
            });
            n += 1;
        }
        return n;
    }
    cancelDialogByMachine(e, s) {
        if (!this.pendingRequests.has(e) || wn()) {
            return false;
        }
        let n = this.injectControlResponse({
            type: "control_response",
            response: {
                subtype: "success",
                request_id: e,
                response: {
                    behavior: "cancelled"
                }
            }
        });
        if (n) {
            this.unansweredSettleHandlers.get(e)?.(s);
        }
        return n;
    }
    setUnexpectedResponseCallback(e) {
        this.unexpectedResponseCallback = e;
    }
    setUnclaimedResponseObserver(e) {
        this.unclaimedResponseObserver = e;
    }
    setMainLoopLiveness(e) {
        this.mainLoopLiveness = e;
    }
    mainLoopLiveness;
    ignoresErrorShapedDialogResponse(e, s) {
        if (s.subtype !== "error" || e.request.request.subtype !== "request_user_dialog" || e.forwarded) {
            return false;
        }
        i("tengu_request_user_dialog_response_ignored", {
            shape: d("error"),
            dialog_kind: ln(e.request.request.dialog_kind)
        });
        t(`Ignoring error-shaped control_response for parked request_user_dialog request_id=${s.request_id} \u2014 not a human choice; dialog stays parked (error: ${I(s.error)})`);
        return true;
    }
    ignoresErrorShapedUiHostResponse(e, s) {
        let { subtype } = e.request.request;
        if (s.subtype !== "error" || !O(e.request.request)) {
            return false;
        }
        t(`Ignoring error-shaped control_response for ${subtype} request_id=${s.request_id} - not the named client's answer; still waiting (error: ${I(s.error)})`);
        return true;
    }
    asksOurHuman(e) {
        return !e.forwarded && RGe(e.request);
    }
    get pendingHumanRequestCount() {
        let e = 0;
        for (let s of this.pendingRequests.values()){
            if (this.asksOurHuman(s)) {
                e++;
            }
        }
        return e;
    }
    ignoresResponseAtShutdown(e, s) {
        if (!this.asksOurHuman(e) || !wn()) {
            return false;
        }
        t(`Leaving control_response for request_id=${s.request_id} to the next process \u2014 this one is shutting down and settles no question`);
        this.repliesLeftForNextProcess++;
        return true;
    }
    ignoresUnsettlingDeviceResponse(e, s) {
        let n = this.deviceRequests.get(s.request_id);
        if (!n) {
            return false;
        }
        let subtype = e.request.request.subtype;
        if (s.subtype === "error") {
            n.errorRepliesIgnored += 1;
            t(`Ignoring error-shaped control_response for device ${subtype} request_id=${s.request_id} \u2014 not the device's answer; still waiting (error: ${I(s.error)})`);
            return true;
        }
        if (!n.accepts(s.response)) {
            n.malformedRepliesIgnored += 1;
            t(`Ignoring malformed control_response for device ${subtype} request_id=${s.request_id} \u2014 not an answer to it; still waiting`);
            return true;
        }
        return false;
    }
    hasCanUseToolNameMismatch(e, s) {
        let request = e.request.request;
        if (request.subtype !== "can_use_tool" || s.subtype !== "success") {
            return false;
        }
        return cze(s.response?.toolName, request.tool_name, s.request_id);
    }
    injectControlResponse(e) {
        let s = this.blankedPromptDenyTarget(e.response) ?? e.response?.request_id;
        if (!s) {
            return false;
        }
        let n = this.pendingRequests.get(s);
        if (!n) {
            i("tengu_inject_control_response_unknown_id", {
                pending_control_requests: this.pendingRequests.size
            });
            return false;
        }
        if (this.ignoresErrorShapedDialogResponse(n, e.response)) {
            return false;
        }
        if (this.ignoresErrorShapedUiHostResponse(n, e.response)) {
            return false;
        }
        if (this.ignoresResponseAtShutdown(n, e.response)) {
            return false;
        }
        if (this.ignoresUnsettlingDeviceResponse(n, e.response)) {
            return false;
        }
        if (this.hasCanUseToolNameMismatch(n, e.response)) {
            return false;
        }
        this.trackResolvedToolUseId(n.request);
        this.pendingRequests.delete(s);
        if (s !== e.response?.request_id) {
            this.onControlRequestResolved?.(s);
        }
        if (this.outbound.ended) {
            this.write({
                type: "control_cancel_request",
                request_id: s
            }).catch((r)=>{
                t(`control_cancel_request for request_id=${s} not written: ${l(r)}`, {
                    level: "error"
                });
            });
        } else {
            this.enqueueCancelRequest(s);
        }
        if (e.response.subtype === "error") {
            n.reject(Error(e.response.error));
        } else {
            let r = e.response.response;
            if (n.schema) {
                try {
                    n.resolve(n.schema.parse(r));
                } catch (error) {
                    n.reject(error);
                }
            } else {
                n.resolve({});
            }
        }
        return true;
    }
    setOnControlRequestSent(e) {
        this.onControlRequestSent = e;
    }
    setOnControlRequestResolved(e) {
        this.onControlRequestResolved = e;
    }
    setOnStreamClosedWithParkedQuestion(e) {
        this.onStreamClosedWithParkedQuestion = e;
    }
    async processLine(e) {
        if (!e.trim()) {
            return;
        }
        e = Io(e);
        try {
            let s = bPt(X(e));
            if (s.type === "keep_alive") {
                return;
            }
            if (s.type === "update_environment_variables") {
                if (!this.acceptsInboundEnvUpdates()) {
                    let m = s.variables;
                    let h = typeof m === "object" && m !== null ? Object.keys(m) : [];
                    let S = h.filter((R)=>Y.has(R));
                    let v = h.length - S.length;
                    let y = v > 0 ? S.concat(`${v} other`) : S;
                    t(`[structuredIO] refused update_environment_variables: this worker does not take environment updates from its inbound stream (keys: ${y.join(", ") || "none"})`, {
                        level: "warn"
                    });
                    this.retireDroppedFrame("uuid" in s ? s.uuid : undefined);
                    return;
                }
                let n = s.variables;
                if (typeof n !== "object" || n === null || Array.isArray(n) || Object.values(n).some((m)=>typeof m !== "string")) {
                    t("[structuredIO] dropped update_environment_variables: variables must be an object of string values");
                    if (typeof s.request_id === "string" && s.request_id) {
                        this.writeActivityLine(_({
                            type: "control_response",
                            response: {
                                subtype: "error",
                                request_id: s.request_id,
                                error: "update_environment_variables: variables must be an object of string values"
                            }
                        }) + `
`);
                    }
                    return;
                }
                let r = [];
                let o = [];
                for (let [m, h] of Object.entries(s.variables)){
                    if (!Y.has(m)) {
                        o.push(m);
                        continue;
                    }
                    process.env[m] = h;
                    r.push(m);
                }
                if (o.length > 0) {
                    t(`[structuredIO] refused update_environment_variables for non-allowlisted keys: ${o.join(", ")}`);
                }
                if (r.includes("CLAUDE_CODE_OAUTH_TOKEN")) {
                    aP();
                } else {
                    dRe();
                }
                t(`[structuredIO] applied update_environment_variables: ${r.join(", ")}`);
                if (typeof s.request_id === "string" && s.request_id) {
                    this.writeActivityLine(_({
                        type: "control_response",
                        response: {
                            subtype: "success",
                            request_id: s.request_id
                        }
                    }) + `
`);
                }
                return;
            }
            if (s.type === "control_response") {
                let n = "uuid" in s && typeof s.uuid === "string" ? s.uuid : undefined;
                let r = s.response;
                if (typeof r !== "object" || r === null || Array.isArray(r)) {
                    if (n) {
                        this.onCommandLifecycle?.(n, "completed");
                    }
                    t("[structuredIO] dropped control_response with malformed response payload");
                    return;
                }
                let o = this.blankedPromptDenyTarget(s.response) ?? s.response.request_id;
                let m = this.pendingRequests.get(o);
                if (!m) {
                    let S = this.settleUnknownResponse(s, n);
                    if (S !== undefined) {
                        await S;
                    }
                    return;
                }
                if (wn() && this.asksOurHuman(m)) {
                    t(`Leaving control_response for request_id=${o} to the next process \u2014 this one is shutting down and settles no question`);
                    this.repliesLeftForNextProcess++;
                    return;
                }
                if (n) {
                    this.onCommandLifecycle?.(n, "completed");
                }
                if (this.ignoresErrorShapedDialogResponse(m, s.response)) {
                    return;
                }
                if (this.ignoresErrorShapedUiHostResponse(m, s.response)) {
                    return;
                }
                if (this.ignoresUnsettlingDeviceResponse(m, s.response)) {
                    return;
                }
                if (this.hasCanUseToolNameMismatch(m, s.response)) {
                    return;
                }
                this.trackResolvedToolUseId(m.request);
                this.pendingRequests.delete(o);
                if (this.hostOwnsStdinOrigin && !m.forwarded && this.hostDialogAttestations.has(o) && m.request.request.subtype === "can_use_tool" && s.response.subtype === "success" && pgs(s.response.response)) {
                    this.hostDialogAttestations.set(o, true);
                }
                if (m.request.request.subtype === "can_use_tool" && this.onControlRequestResolved) {
                    this.onControlRequestResolved(o);
                }
                if (o !== s.response.request_id) {
                    this.enqueueCancelRequest(o);
                }
                if (RGe(m.request) && !(m.forwarded && s.response.subtype === "error")) {
                    this.recordUserDrivenInbound(s);
                    this.recordAnsweredPrompt(s, m.request.request.subtype);
                }
                if (s.response.subtype === "error") {
                    m.reject(Error(s.response.error));
                    return;
                }
                let h = s.response.response;
                if (m.schema) {
                    try {
                        m.resolve(m.schema.parse(h));
                    } catch (error) {
                        m.reject(error);
                    }
                } else {
                    m.resolve({});
                }
                if (this.replayUserMessages) {
                    return s;
                }
                return;
            }
            if (s.type !== "workflow_launch" && s.type !== "user" && !(s.type === "control_request" && a5n(Ee(s.request), ()=>this.uiSurfaceFrameOf(s, false), ()=>this.surfaceRequestJudgedAt(s))) && f6r(s, {
                hostOwnsOrigin: this.hostOwnsStdinOrigin
            })) {
                this.recordUserDrivenInbound(s);
            }
            if (s.type !== "user" && s.type !== "bash_command" && s.type !== "control_request" && s.type !== "control_cancel_request" && s.type !== "assistant" && s.type !== "system" && s.type !== "queued_notification" && s.type !== "session_notice" && s.type !== "workflow_launch") {
                let n = s.type;
                t(`Ignoring unknown message type: ${typeof n === "string" ? ee(n) : `(a value of JSON type ${typeof n})`}`, {
                    level: "warn"
                });
                this.retireDroppedFrame(typeof s === "object" && s !== null && "uuid" in s ? s.uuid : undefined);
                return;
            }
            if (s.type === "workflow_launch") {
                return s;
            }
            if (s.type === "control_request") {
                if (this.isRemoteTransport()) {
                    let n = s.request;
                    let r = typeof n !== "object" || n === null || Array.isArray(n);
                    if (r || !("subtype" in n) || typeof n.subtype !== "string") {
                        i("tengu_sdk_malformed_input", {
                            message_type: b("control_request"),
                            reason: d(r ? "missing_request" : "subtype_not_string"),
                            transport: b("remote"),
                            outcome: b("dropped"),
                            has_event_uuid: "uuid" in s && Jt(s.uuid) !== null
                        });
                        t("Dropping control_request: missing request object or non-string subtype", {
                            level: "warn"
                        });
                        this.retireDroppedFrame("uuid" in s ? s.uuid : undefined);
                        return;
                    }
                } else if (!s.request) {
                    return this.exitOnFatalInput("Error: Missing request on control_request");
                }
                return s;
            }
            if (s.type === "control_cancel_request") {
                if (typeof s.request_id === "string") {
                    return s;
                }
                return undefined;
            }
            if (s.type === "assistant" || s.type === "system") {
                return s;
            }
            if (s.type === "bash_command") {
                return s;
            }
            if (s.type === "queued_notification") {
                return s;
            }
            if (s.type === "session_notice") {
                return s;
            }
            if (s.message?.role !== "user") {
                if (!this.isRemoteTransport()) {
                    return this.exitOnFatalInput(`Error: Expected message role 'user', got '${ee(String(s.message?.role))}'`);
                }
                let n = He(s.message);
                let outcome = n === undefined ? "dropped" : !n.plain ? "unwrap_refused" : a.CLAUDE_CODE_DISABLE_NESTED_USER_REPAIR ? "repair_disabled" : "repaired";
                let wire_shape = Le(s.message);
                let has_event_uuid = Jt(s.uuid) !== null;
                i("tengu_sdk_malformed_input", {
                    message_type: b("user"),
                    reason: b("invalid_message_role"),
                    transport: b("remote"),
                    outcome: d(outcome),
                    wire_shape: d(wire_shape),
                    has_event_uuid
                });
                J("warn", "cli_malformed_user_message", {
                    outcome,
                    wire_shape,
                    has_event_uuid
                });
                if (n === undefined || outcome !== "repaired") {
                    t(`Dropping malformed user message (${outcome}, ${wire_shape}, event uuid ${has_event_uuid ? "present" : "absent"}): expected message role 'user'`, {
                        level: "warn"
                    });
                    this.retireDroppedFrame(s.uuid);
                    return;
                }
                let h = s;
                h.message = n.inner;
                t("Repaired a nested user message (one level)");
            }
            if (f6r(s, {
                hostOwnsOrigin: this.hostOwnsStdinOrigin
            })) {
                this.recordUserDrivenInbound(s);
            }
            return s;
        } catch (error) {
            return this.exitOnFatalInput(xe(e, error));
        }
    }
    blankedPromptDenyTarget(e) {
        if (e?.subtype !== "success" || e.response?.behavior !== "deny") {
            return;
        }
        let toolUseID = e.response.toolUseID;
        if (typeof toolUseID !== "string" || toolUseID === "" || e.request_id !== toolUseID || this.pendingRequests.has(toolUseID)) {
            return;
        }
        for (let [n, r] of this.publishedPendingActionDetails){
            if (r.request_id === "" && r.suppressed_request_id === n && r.tool_use_id === toolUseID && this.pendingRequests.get(n)?.request.request.subtype === "can_use_tool") {
                t(`[structuredIO] deny keyed on toolUseID=${toolUseID} settles its blanked prompt request_id=${n}`);
                return n;
            }
        }
    }
    settleUnknownResponse(e, s) {
        if (wn()) {
            t(`Leaving control_response for request_id=${e.response.request_id} to the next process \u2014 this one is shutting down and settles no question`);
            return;
        }
        if (s) {
            this.onCommandLifecycle?.(s, "completed");
        }
        let n = this.timedOutUserDialogs.get(e.response.request_id);
        if (n) {
            this.timedOutUserDialogs.delete(e.response.request_id);
            let m = e.response.subtype === "success" ? e.response.response?.behavior : undefined;
            let h = e.response.subtype;
            i("tengu_request_user_dialog_late_answer", {
                dialog_kind: ln(n.dialogKind),
                lateness_ms: Date.now() - n.timedOutAt,
                response_subtype: d(h === "success" || h === "error" ? h : "other"),
                behavior: d(m === "completed" || m === "cancelled" ? m : m === undefined ? "absent" : "other")
            });
            t(`Ignoring late request_user_dialog answer for request_id=${e.response.request_id}: the park deadline already settled this dialog as cancelled ${Date.now() - n.timedOutAt}ms ago`);
            return;
        }
        let r = e.response.subtype === "success" ? e.response.response : undefined;
        let o = r?.toolUseID;
        if (typeof o === "string" && this.resolvedToolUseIds.has(o)) {
            t(`Ignoring duplicate control_response for already-resolved toolUseID=${o} request_id=${e.response.request_id}`);
            return;
        }
        if (this.unexpectedResponseCallback === undefined) {
            try {
                this.unclaimedResponseObserver?.({
                    answerKind: e.response.subtype === "success" ? c5n(r) : {},
                    toolUseId: typeof o === "string" ? o : undefined
                });
            } catch (error) {
                c(error);
            }
            return;
        }
        return this.unexpectedResponseCallback(e);
    }
    resetStallWatchdog() {
        this.stallFired = false;
    }
    recordUserDrivenInbound(e) {
        r5o();
    }
    recordAnsweredPrompt(e, s) {}
    retireDroppedFrame(e) {
        let s = Jt(e);
        if (s) {
            this.onCommandLifecycle?.(s, "completed");
        }
    }
    trackWrite(e) {
        if (this.stallTimer) {
            clearTimeout(this.stallTimer);
        }
        if (e.type !== "result" && !this.stallFired) {
            this.stallTimer = setTimeout((n)=>{
                if (this.sessionState.getState() !== "running") {
                    return;
                }
                this.stallFired = true;
                i("tengu_sdk_stall", {
                    session_age_ms: Date.now() - this.createdAt,
                    session_state: d(this.sessionState.getState()),
                    last_message_type: d(n),
                    pending_control_requests: this.pendingRequests.size
                });
            }, Re, e.type);
            this.stallTimer.unref();
        }
        let s = e.type === "result" && this.resultDelivery ? this.resultDelivery.stamp(e) : e;
        if (s.type !== "system") {
            this.sampleForSdkSchemaCheck(s);
        }
        if (s.type === "result") {
            this.sdkSchemaResultWritten = true;
            this.armSdkSchemaCheck();
        }
        return s;
    }
    sampleForSdkSchemaCheck(e) {
        this.sdkSchemaStretchSampled ??= Math.random() < ke;
        if (!this.sdkSchemaStretchSampled) {
            return;
        }
        let s = this.sdkSchemaKept.get(e.type) ?? {
            frames: 0,
            json: undefined
        };
        s.frames += 1;
        this.sdkSchemaKept.set(e.type, s);
        if (Math.random() >= 1 / s.frames) {
            return;
        }
        try {
            let n = _(e);
            if (n.length <= be) {
                s.json = n;
            }
        } catch  {}
    }
    sdkSchemaFramesKept() {
        for (let e of this.sdkSchemaKept.values()){
            if (e.json !== undefined) {
                return true;
            }
        }
        return false;
    }
    endSdkSchemaStretch() {
        if (this.sdkSchemaFramesKept()) {
            this.armSdkSchemaCheck();
            return;
        }
        this.sdkSchemaStretchSampled = undefined;
        this.sdkSchemaKept.clear();
    }
    armSdkSchemaCheck() {
        if (!this.sdkSchemaFramesKept() || !this.sdkSchemaResultWritten) {
            return;
        }
        clearTimeout(this.sdkSchemaCheckTimer);
        this.sdkSchemaCheckTimer = setTimeout(()=>{
            if (this.sessionState.getState() !== "idle" || this.inputClosed || wn()) {
                return;
            }
            let e = [
                ...this.sdkSchemaKept.entries()
            ];
            this.sdkSchemaKept.clear();
            this.sdkSchemaStretchSampled = undefined;
            let s = oCr.builtCount();
            try {
                let n = Ebo();
                for (let [r, { json }] of e){
                    if (json === undefined) {
                        continue;
                    }
                    let m = X(json);
                    let h = n.safeParse(m);
                    if (!h.success) {
                        i("tengu_sdk_schema_violation", {
                            message_type: d(r),
                            error_path: Hur(h.error.issues[0]?.path, we)
                        });
                    }
                }
            } catch (error) {
                t(`Could not check the sampled frames against the SDK output schema; they are dropped: ${l(error)}`);
            } finally{
                oCr.releaseBuiltSince(s);
            }
        }, ve);
        this.sdkSchemaCheckTimer.unref();
    }
    writeActivityLine(e) {
        Ar(e);
    }
    acceptsInboundEnvUpdates() {
        return true;
    }
    exitOnFatalInput(e) {
        return Te(e);
    }
    async write(e) {
        let s = this.heldDueBefore(e);
        if (s.length > 0) {
            await this.writeHeld(s);
        }
        let n = this.trackWrite(e);
        Ar(Zfe(n) + `
`);
        let r = this.heldDueAfter(n);
        if (r.length > 0) {
            await this.writeHeld(r);
        }
    }
    writeAfterInit(e) {
        this.heldUntilInit.push(e);
    }
    heldDueBefore(e) {
        if (e.type === "result") {
            return this.heldUntilInit.splice(0);
        }
        return [];
    }
    heldDueAfter(e) {
        if (e.type === "system" && e.subtype === "init") {
            return this.heldUntilInit.splice(0);
        }
        return [];
    }
    async writeHeld(e) {
        for (let s of e){
            try {
                await this.write(s);
            } catch (error) {
                t(`held frame write failed: ${error}`, {
                    level: "warn"
                });
            }
        }
    }
    passControlRequestToHost(e, { requestId, schema, signal }) {
        if (this.pendingRequests.has(requestId)) {
            return Promise.reject(new Ye("a control request with this request_id is already pending"));
        }
        return this.sendRequest(e, schema, signal, {
            requestId,
            forwarded: true
        });
    }
    async sendRequest(request, schema, n, { requestId = randomUUID(), forwarded = false, deviceHook = false } = {}) {
        let h = {
            type: "control_request",
            request_id: requestId,
            request
        };
        let S = !forwarded && RGe(h);
        if (S && wn() && !n?.aborted) {
            return Qu();
        }
        if (request.subtype === "elicitation" && !forwarded) {
            ESs(requestId);
        } else if (O(request) && !forwarded) {
            kSs(requestId);
        } else if (!forwarded && !deviceHook) {
            rFn(requestId, {
                automated: !S
            });
        } else if (deviceHook) {
            vSs(requestId);
        }
        if (this.inputClosed) {
            throw new nc(Tcr);
        }
        if (n?.aborted) {
            throw new Ye("Request aborted");
        }
        this.outbound.enqueue(h);
        if (request.subtype === "can_use_tool" && this.onControlRequestSent) {
            this.onControlRequestSent(h);
        }
        if (S) {
            this.sessionState.beginUserDecision();
        }
        let v = ()=>{
            if (S && wn()) {
                return;
            }
            if (h.request.subtype === "can_use_tool" && n !== undefined && Nen(n)) {
                this.answerOwnWithdrawnAsk(requestId, h.request.tool_use_id);
            }
            this.enqueueCancelRequest(requestId);
            let R = this.pendingRequests.get(requestId);
            if (R) {
                this.trackResolvedToolUseId(R.request);
                if (R.request.request.subtype === "can_use_tool" && this.onControlRequestResolved) {
                    this.onControlRequestResolved(requestId);
                }
                this.pendingRequests.delete(requestId);
                R.reject(new Ye);
            }
        };
        if (n) {
            n.addEventListener("abort", v, {
                once: true
            });
        }
        let y;
        try {
            return await new Promise((resolve, reject)=>{
                y = {
                    request: {
                        type: "control_request",
                        request_id: requestId,
                        request
                    },
                    resolve: (P)=>{
                        resolve(P);
                    },
                    reject,
                    schema,
                    ...forwarded && {
                        forwarded
                    }
                };
                this.pendingRequests.set(requestId, y);
                this.requestPending.emit();
            });
        } finally{
            if (n) {
                n.removeEventListener("abort", v);
            }
            if (this.pendingRequests.get(requestId) === y) {
                this.pendingRequests.delete(requestId);
            }
            if (S) {
                this.sessionState.endUserDecision();
            }
        }
    }
    emitPermissionDenied(tool_name, tool_use_id, agent_id, r) {
        let r_decisionReason = r.decisionReason;
        this.outbound.enqueue({
            type: "system",
            subtype: "permission_denied",
            tool_name,
            tool_use_id,
            agent_id,
            decision_reason_type: r_decisionReason?.type,
            decision_reason_code: dZ(r_decisionReason),
            decision_reason: hke(r_decisionReason),
            message: r.message,
            uuid: randomUUID(),
            session_id: K()
        });
    }
    createCanUseTool(e, s) {
        return XBo(e, this.permissionPromptHost(e.kind, s));
    }
    permissionPromptHost(e, s) {
        return {
            request: (n, r, o)=>{
                this.hostDialogAttestations.set(o, false);
                return this.sendRequest(n, qje(e), r, {
                    requestId: o
                });
            },
            isPending: (n)=>this.pendingRequests.has(n),
            interruptedAtStreamClose: (n)=>this.streamCloseInterruptRequestIds.has(n),
            answeredAtHostDialog: (n)=>{
                let r = this.hostDialogAttestations.get(n) === true;
                if (r) {
                    this.hostDialogAttestations.set(n, false);
                }
                return r;
            },
            emitPermissionDenied: (n, r, o, m)=>this.emitPermissionDenied(n, r, o, m),
            promptShown: s && ((n, r, o, m)=>{
                this.publishedPendingActionDetails.set(n, r);
                if (m !== undefined) {
                    this.backgroundPromptIds.add(n);
                }
                if (o !== undefined) {
                    this.sessionState.notifyNestedPromptBlocking(o);
                }
                s(r);
            }),
            promptSettled: (n, r)=>this.settlePermissionPrompt(n, r)
        };
    }
    settlePermissionPrompt(e, s) {
        if (s !== undefined) {
            this.sessionState.notifyNestedPromptUnblocking(s);
        }
        this.hostDialogAttestations.delete(e);
        this.settlePublishedPrompt(e, true);
    }
    settlePublishedPrompt(e, s) {
        this.publishedPendingActionDetails.delete(e);
        this.backgroundPromptIds.delete(e);
        if (!this.hasPendingPrompt()) {
            this.flipBackFromRequiresAction();
            return;
        }
        if (s) {
            this.sessionState.reteeWaitingOnUser();
        }
        this.republishSurvivingPendingAction();
    }
    flipBackFromRequiresAction() {
        if (wn()) {
            return;
        }
        let e = this.sessionState.heldRequiresAction?.();
        if (e) {
            this.flipBackLeftToUnpublishedAsk = false;
            this.sessionState.notifyStateChanged("requires_action", e);
            return;
        }
        this.sessionState.notifyStateChanged(this.mainLoopLiveness?.() === false ? "idle" : "running");
    }
    createHookCallback(callback_id, timeout) {
        let sdkHostHookGeneration = this.sdkHostHookGeneration;
        return {
            type: "callback",
            timeout,
            callback: async (input, o, m)=>{
                if (sdkHostHookGeneration !== this.sdkHostHookGeneration && this.retiredHostHookAnswer) {
                    return this.retiredHostHookAnswer(input);
                }
                try {
                    let h = await this.sendRequest({
                        subtype: "hook_callback",
                        callback_id,
                        input,
                        tool_use_id: o || undefined
                    }, Pne(), m);
                    cPr();
                    return h;
                } catch (error) {
                    if (Ke(error)) {
                        throw error;
                    }
                    cPr();
                    console.error(`Error in hook callback ${callback_id}:`, error);
                    return {};
                }
            }
        };
    }
    async sendUiHostRequest(e, s, n) {
        if (!qIe(this.uiSurfaceChannel())) {
            return;
        }
        let r = this.isRemoteTransport();
        let o = randomUUID();
        if (r) {
            this.trackDeviceRequest(o, "host_ask", ()=>true);
        }
        let m = AbortSignal.timeout(n);
        let h = await this.sendRequest(e, s, m, {
            requestId: o
        }).then((answer)=>({
                answer,
                failure: undefined
            }), (S)=>({
                answer: undefined,
                failure: te(S, m)
            })).finally(()=>this.deviceRequests.delete(o));
        if (r && h.failure === undefined) {
            g("plugin_function_hooks_host_ask");
        } else if (r && h.failure !== undefined) {
            f("plugin_function_hooks_host_ask", h.failure);
        }
        return h.answer;
    }
    takesUiHostAsks() {
        return !this.isRemoteTransport() || NZe(this.sessionWriters());
    }
    async sendUiHostAsk(e, s, n) {
        if (!qIe(this.uiSurfaceChannel())) {
            return {
                answer: undefined,
                cause: "not_asked"
            };
        }
        let r = AbortSignal.timeout(n);
        try {
            return {
                answer: await this.sendRequest(e, s, r),
                cause: undefined
            };
        } catch (error) {
            return {
                answer: undefined,
                cause: te(error, r)
            };
        }
    }
    sendDeviceHookCallback(e) {
        let s = randomUUID();
        let n = this.trackDeviceRequest(s, "hook", (h)=>Z(h) !== null);
        let r = new AbortController;
        let o = e.signal ? AbortSignal.any([
            e.signal,
            r.signal
        ]) : r.signal;
        let m = this.sendRequest({
            subtype: "hook_callback",
            callback_id: e.callbackId,
            input: e.input,
            tool_use_id: e.toolUseID || undefined,
            issued_at: Math.trunc(e.issuedAt),
            deadline_ms: Math.max(1, Math.ceil(e.deadlineMs))
        }, oe(), o, {
            requestId: s,
            deviceHook: true
        }).then((h)=>{
            let answer = Z(h);
            if (answer === null) {
                return {
                    malformed: true
                };
            }
            return {
                answer
            };
        }, (h)=>{
            if (Ke(h)) {
                throw h;
            }
            t(`Device hook_callback request_id=${s} settled with a non-answer; treating as no opinion`, {
                level: "warn"
            });
            return {
                malformed: true
            };
        }).finally(()=>{
            this.deviceRequests.delete(s);
        });
        return {
            requestId: s,
            reply: m,
            cancel: ()=>r.abort(),
            errorRepliesIgnored: ()=>n.errorRepliesIgnored,
            malformedRepliesIgnored: ()=>n.malformedRepliesIgnored
        };
    }
    trackDeviceRequest(e, kind, accepts, instanceId, onUpload) {
        if (this.deviceRequests.size >= Q) {
            t(`Device request bookkeeping past its expected ceiling (${Q} live requests); keeping all of them`, {
                level: "warn"
            });
        }
        let m = {
            kind,
            errorRepliesIgnored: 0,
            malformedRepliesIgnored: 0,
            delivery: "queued",
            instanceId,
            accepts,
            onUpload
        };
        this.deviceRequests.set(e, m);
        return m;
    }
    waitsOnHostAsk() {
        for (let e of this.deviceRequests.values()){
            if (e.kind === "host_ask") {
                return true;
            }
        }
        return false;
    }
    liveDeviceRequestKind(e) {
        return this.deviceRequests.get(e)?.kind;
    }
    abandonServedCalls(e, s) {
        let n = 0;
        for (let [r, o] of this.deviceRequests){
            if (o.kind !== "served_call" || o.instanceId !== e) {
                continue;
            }
            let m = this.pendingRequests.get(r);
            if (!m) {
                continue;
            }
            this.enqueueCancelRequest(r);
            this.pendingRequests.delete(r);
            m.reject(new mjt(s));
            n++;
        }
        return n;
    }
    withdrawStandingServedCall(e) {
        if (this.pendingRequests.has(e)) {
            return false;
        }
        this.enqueueCancelRequest(e);
        return true;
    }
    noteRequestsUpload(e, s) {
        let n = 0;
        for (let r of e){
            let o = this.deviceRequests.get(r);
            if (o === undefined) {
                continue;
            }
            let m = Ce(o.delivery, s);
            if (m !== o.delivery) {
                o.delivery = m;
                n++;
            }
            try {
                o.onUpload?.(s);
            } catch (error) {
                t(`A served call's upload listener threw (${s}); the delivery ledger is unaffected: ${l(error)}`, {
                    level: "warn"
                });
            }
        }
        return n;
    }
    rejectUndeliveredRequests(e, s) {
        let n = 0;
        for (let r of e){
            let o = this.deviceRequests.get(r);
            if (o?.kind !== "served_call") {
                continue;
            }
            let m = this.pendingRequests.get(r);
            if (!m) {
                continue;
            }
            this.pendingRequests.delete(r);
            m.reject(this.tracksRequestDelivery && o.delivery === "queued" ? new hjt(s) : new gjt(s));
            n++;
        }
        return n;
    }
    sendServedCallRequest(e) {
        let s = randomUUID();
        if (this.inputClosed) {
            let h = Promise.reject(new nc(Tcr));
            h.catch(()=>{});
            return {
                requestId: s,
                sent: false,
                delivery: ()=>"queued",
                withdraw: ()=>false,
                reply: h,
                cancel: ()=>{},
                errorRepliesIgnored: ()=>0
            };
        }
        let n = this.trackDeviceRequest(s, "served_call", e.accepts, e.request.instance_id, e.onUpload);
        let r = new AbortController;
        let o = e.signal ? AbortSignal.any([
            e.signal,
            r.signal
        ]) : r.signal;
        let m = this.sendRequest(e.request, oe(), o, {
            requestId: s,
            deviceHook: true
        }).finally(()=>{
            this.deviceRequests.delete(s);
        });
        return {
            requestId: s,
            sent: true,
            delivery: ()=>{
                if (this.tracksRequestDelivery) {
                    return Ue(n.delivery);
                }
                return "untracked";
            },
            withdraw: ()=>this.withdrawUnsentServedCall(s),
            reply: m,
            cancel: ()=>{
                if (this.pendingRequests.has(s)) {
                    r.abort();
                    return;
                }
                this.enqueueCancelRequest(s);
            },
            errorRepliesIgnored: ()=>n.errorRepliesIgnored
        };
    }
    askToAnnounce(e, s) {
        this.sendRequest(e, oe(), s, {
            deviceHook: true
        }).catch(()=>{});
    }
    withdrawUnsentServedCall(e) {
        let s = this.deviceRequests.get(e);
        let n = this.pendingRequests.get(e);
        if (!this.tracksRequestDelivery || n === undefined || s?.kind !== "served_call" || s.delivery !== "queued") {
            return false;
        }
        if (!this.withdrawQueuedRequest(e)) {
            return false;
        }
        this.pendingRequests.delete(e);
        n.reject(new tWr);
        return true;
    }
    async handleElicitation(mcp_server_name, message, requested_schema, r, mode, url, elicitation_id, S, v = false) {
        if (!this.hostAnswersElicitations) {
            return {
                action: "cancel"
            };
        }
        if (wn()) {
            if (r?.aborted) {
                return {
                    action: "cancel"
                };
            }
            return Qu();
        }
        if (this.inputClosed || r?.aborted) {
            return {
                action: "cancel"
            };
        }
        let y = randomUUID();
        let R = {
            tool_name: hst,
            display_tool_name: "Claude needs your input",
            action_description: "Answer the MCP server's question to continue",
            tool_use_id: "",
            request_id: y
        };
        this.publishedPendingActionDetails.set(y, R);
        if (v) {
            this.backgroundPromptIds.add(y);
        }
        this.sessionState.notifyStateChanged("requires_action", R);
        this.onUserDialogParked?.(R);
        try {
            return await this.sendRequest({
                subtype: "elicitation",
                mcp_server_name,
                message,
                mode,
                url,
                elicitation_id,
                requested_schema,
                title: S?.title,
                display_name: S?.displayName,
                description: S?.description
            }, mbo(), r, {
                requestId: y
            });
        } catch  {
            return {
                action: "cancel"
            };
        } finally{
            this.settlePublishedPrompt(y, !r?.aborted);
        }
    }
    async requestUserDialog(dialog_kind, payload, n) {
        if (wn()) {
            if (n?.signal?.aborted) {
                return {
                    behavior: "cancelled"
                };
            }
            return Qu();
        }
        let r = randomUUID();
        let o = rDn(dialog_kind, payload, r, n?.toolUseId);
        this.publishedPendingActionDetails.set(r, o);
        this.sessionState.notifyStateChanged("requires_action", o);
        this.onUserDialogParked?.(o);
        i("tengu_request_user_dialog_requires_action", {
            dialog_kind: ln(dialog_kind)
        });
        if (n?.onSettledUnanswered) {
            this.unansweredSettleHandlers.set(r, n.onSettledUnanswered);
        }
        let m = bde();
        let h;
        if (m > 0) {
            h = setTimeout((S, dialogKind, timeout_ms)=>{
                this.timedOutUserDialogs.set(S, {
                    dialogKind,
                    timedOutAt: Date.now()
                });
                if (!this.cancelDialogByMachine(S, "deadline")) {
                    this.timedOutUserDialogs.delete(S);
                    return;
                }
                i("tengu_request_user_dialog_timeout", {
                    dialog_kind: ln(dialogKind),
                    timeout_ms
                });
            }, m, r, dialog_kind, m);
            h.unref();
        }
        try {
            return await this.sendRequest({
                subtype: "request_user_dialog",
                dialog_kind,
                payload,
                tool_use_id: n?.toolUseId
            }, cen(), n?.signal, {
                requestId: r
            });
        } catch  {
            return {
                behavior: "cancelled"
            };
        } finally{
            if (h !== undefined) {
                clearTimeout(h);
            }
            this.unansweredSettleHandlers.delete(r);
            this.settlePublishedPrompt(r, !this.timedOutUserDialogs.has(r));
        }
    }
    createSandboxAskCallback(e, s, n, r) {
        let o = new Map;
        let m = async (host)=>{
            if (R4(host)) {
                t(`[StructuredIO] Refusing a sandbox network ask for a host srt would re-spell: ${_(host)}`, {
                    level: "warn"
                });
                return false;
            }
            try {
                let S = {
                    type: "addRules",
                    rules: [
                        {
                            toolName,
                            ruleContent: `domain:${mLe(host)}`
                        }
                    ],
                    behavior: "allow",
                    destination: rCt() ?? "session"
                };
                let v = m5n(mK(Jte), n, r);
                let y;
                try {
                    y = await this.sendRequest({
                        subtype: "can_use_tool",
                        tool_name: Jte,
                        display_name: mK(Jte),
                        input: {
                            host
                        },
                        permission_suggestions: [
                            S
                        ],
                        tool_use_id: randomUUID(),
                        description: `Allow network connection to ${host}?`
                    }, qje(e.kind));
                } finally{
                    v();
                    if (this.flipBackLeftToUnpublishedAsk && !this.hasPendingPrompt()) {
                        this.flipBackFromRequiresAction();
                    }
                }
                if (y.behavior !== "allow") {
                    return false;
                }
                let R = y.updatedPermissions;
                switch(e.kind){
                    case "launcher":
                        if (R && R.length > 0) {
                            let A = L4(R, undefined);
                            s?.((P)=>{
                                A = L4(R, undefined, P);
                                return GI(P, A);
                            });
                            await kB(A, n);
                        }
                        break;
                    case "strict":
                        if ((s ? O3r(e, P3r(R, e.limits), Jte, s, wnr(R, e.limits.ruleLength)) : wnr(R, e.limits.ruleLength).length) > 0) {
                            t("refused a sandbox network answer: a deny or ask rule that the answer added, or may have added, is not among the session's rules", {
                                level: "warn"
                            });
                            return false;
                        }
                        break;
                }
                qe.addSessionAllowedHost(host);
                return true;
            } catch  {
                return false;
            }
        };
        return (h)=>{
            let h_host = h.host;
            let v = o.get(h_host);
            if (v) {
                return v;
            }
            let y = m(h_host).finally(()=>{
                o.delete(h_host);
            });
            o.set(h_host, y);
            return y;
        };
    }
    async sendMcpMessage(server_name, message, timeoutMs = ye) {
        let o = ggn(message) ? undefined : zs(undefined, {
            timeoutMs,
            refTimer: true
        });
        try {
            return (await this.sendRequest({
                subtype: "mcp_message",
                server_name,
                message
            }, u({
                mcp_response: K8().optional()
            }), o?.signal)).mcp_response;
        } finally{
            o?.cleanup();
        }
    }
    async requestOAuthTokenRefresh() {
        let e = Date.now();
        let s;
        try {
            s = await this.sendRequest({
                subtype: "oauth_token_refresh"
            }, hbo(), AbortSignal.timeout(_e));
        } catch (error) {
            i("tengu_sdk_oauth_refresh_unfulfilled", {
                outcome: d(error instanceof nc ? "stream_closed" : Ke(error) ? "timeout" : error instanceof IR ? "invalid_response" : "error"),
                reason: d("none"),
                duration_ms: Date.now() - e
            });
            throw error;
        }
        if (typeof s.accessToken === "string" && s.accessToken) {
            zTs();
            return s.accessToken;
        }
        let s_reason = s.reason;
        if (s_reason !== undefined) {
            WTs(s_reason);
        }
        i("tengu_sdk_oauth_refresh_unfulfilled", {
            outcome: d(s_reason !== undefined ? "declined" : "null"),
            reason: d(s_reason ?? "none"),
            duration_ms: Date.now() - e
        });
        return null;
    }
    async requestRemoteControlWorkSecret(session_id) {
        try {
            return (await this.sendRequest({
                subtype: "remote_control_work_secret",
                session_id
            }, gbo(), AbortSignal.timeout(Se))).work_secret || null;
        } catch (error) {
            t(`[bridge:work-secret] host work-secret request failed (${error instanceof Error ? error.name : "unknown"})`, {
                level: "warn"
            });
            return null;
        }
    }
    async requestHostAuthTokenRefresh(e = ge) {
        return this.sendRequest({
            subtype: "host_auth_token_refresh"
        }, ybo(), AbortSignal.timeout(e));
    }
    enqueueCancelRequest(request_id) {
        this.outbound.enqueue({
            type: "control_cancel_request",
            request_id
        });
    }
    answerOwnWithdrawnAsk(e, s) {}
}
async function Te(e) {
    console.error(e);
    let s = Date.now() + 2000;
    await Ut(f0(), 2000, "write queue drain timeout (exit)").catch(()=>{});
    await Ut(rPe(), Math.max(0, s - Date.now()), "diagnostic log flush timeout (exit)").catch(()=>{});
    await LDt(Math.max(0, s - Date.now()), {
        scaleBudgetToQueue: false
    });
    process.exit(1);
}
const Me = new Set([
    "type",
    "message",
    "uuid",
    "session_id",
    "parent_tool_use_id",
    "timestamp"
]);
function Ie([e, s]) {
    return Me.has(e) || e === "isSynthetic" && s === false || e === "shouldQuery" && s === true;
}
function Le(message) {
    if (message === undefined || message === null) {
        return "no_message";
    }
    if (typeof message !== "object" || Array.isArray(message)) {
        return "non_object_message";
    }
    if (!("role" in message)) {
        return "no_role";
    }
    let e_role = message.role;
    if (e_role === undefined) {
        return "no_role";
    }
    if (e_role === null) {
        return "role_null";
    }
    if (Array.isArray(e_role)) {
        return "role_array";
    }
    switch(typeof e_role){
        case "object":
            return "role_object";
        case "string":
            return "role_string";
        default:
            return "role_other";
    }
}
function He(message) {
    if (typeof message !== "object" || message === null || !("message" in message)) {
        return;
    }
    let e_message = message.message;
    if (typeof e_message !== "object" || e_message === null || !("role" in e_message) || e_message.role !== "user" || !("content" in e_message) || typeof e_message.content !== "string" && !Array.isArray(e_message.content)) {
        return;
    }
    return {
        inner: e_message,
        plain: (!("type" in message) || message.type === "user") && Object.entries(message).every(Ie)
    };
}
function xe(e, error) {
    return `Error parsing streaming input line (type=${/"type"\s*:\s*"([\w-]{1,40})"/.exec(e)?.[1] ?? "unknown"}, ${e.length} chars): ${error instanceof Error ? error.name : typeof error}`;
}
function se(e) {
    return ()=>({
            type: e.type,
            ...e.type === "user" && {
                uuid: KIe(e.uuid)
            },
            ...e.type === "control_request" && {
                subtype: Vgt(e.request.subtype)
            }
        });
}
export { i5n, $Bo, FBo, IJe, UBo, Xpn, qIe, BBo, L$r, OJe, jBo, Jpn, a5n, WBo, l5n, KIe, Vgt, YIe, c5n, qgt, Qfe };
