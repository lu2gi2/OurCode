import { wn, Si as model, FTs, ibo, X6e, dH } from "/$bunfs/root/chunk-6dwnw6av.js";
import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Ke, $r, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ut, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Fm, spe } from "/$bunfs/root/chunk-52bcnmbr.js";
import { apt } from "/$bunfs/root/chunk-etbngzss.js";
import { sue, ey, HRe } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Et } from "/$bunfs/root/chunk-r3z1chqx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { no } from "/$bunfs/root/chunk-c56kpkt7.js";
import { Cd } from "/$bunfs/root/chunk-ywnn3sze.js";
import { Yt } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { o, E, T, u, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { uf, l8e, RZ, QF } from "/$bunfs/root/chunk-srmqtve7.js";
import { randomUUID } from "crypto";
const Xbr = 32;
function poe(e) {
    if (!Array.isArray(e)) {
        return [];
    }
    return e.filter((r)=>typeof r === "string" && r.length > 0 && r.length <= 64).slice(0, 32);
}
const _mo = "display_only";
function Qbr(e) {
    return (e.type === "user" || e.type === "assistant" || e.type === "system") && e.historical === true && e.display_only === true;
}
const Vbr = 8000;
async function pe({ verdict, deadlineMs, respond, inform }) {
    let d = (b)=>{
        if (Array.isArray(b)) {
            inform(b.filter((w)=>typeof w === "string").map(Yt));
        }
    };
    let v = verdict.then((b)=>b ?? {
            ok: true
        });
    let I;
    try {
        I = await Ge(v, deadlineMs);
    } catch (error) {
        t(`set_model verdict rejected: ${l(error)}`, {
            level: "error"
        });
        return respond({
            subtype: "error",
            error: "set_model failed"
        });
    }
    if (I === undefined) {
        v.then((b)=>d(b.ok ? [
                ...Array.isArray(b.notices) ? b.notices : [],
                "The pending model switch was applied"
            ] : ue(b.error)), (b)=>{
            t(`set_model verdict rejected after the deadline reply: ${l(b)}`, {
                level: "error"
            });
            d([
                "The pending model switch failed"
            ]);
        });
        return respond({
            subtype: "error",
            error: "This model switch is still pending (an earlier model request or a PreModelSwitch hook has not finished); it will apply when that completes unless it is refused"
        });
    }
    if (I.ok) {
        if (I.notices) {
            d(I.notices);
        }
        return respond({
            subtype: "success"
        });
    }
    let I_code = I.code;
    let error_code = ibo.find((b)=>b === I_code);
    return respond({
        subtype: "error",
        error: ue(I.error).map(Yt).join(`
`),
        ...error_code !== undefined && {
            error_code
        }
    });
}
function ue(error) {
    if (typeof error === "string") {
        return error.split(`
`);
    }
    return [
        ""
    ];
}
function qbr(toolUseId) {
    if (toolUseId == null || toolUseId === "") {
        return {
            valid: true,
            toolUseId: undefined
        };
    }
    if (typeof toolUseId === "string") {
        return {
            valid: true,
            toolUseId
        };
    }
    return {
        valid: false
    };
}
const Kbr = "Background tasks are disabled in this session.";
const Ybr = "background_tasks: tool_use_id must be a string";
function bPt(e) {
    if (e === null || typeof e !== "object") {
        return e;
    }
    let r = e;
    le(r);
    if ("response" in r && r.response !== null && typeof r.response === "object") {
        le(r.response);
    }
    return e;
}
function le(e) {
    if ("requestId" in e && !("request_id" in e)) {
        let r = j(e);
        delete e.requestId;
        if (r !== undefined) {
            e.request_id = r;
        }
    }
}
function j(e) {
    if ("request_id" in e) {
        return e.request_id;
    }
    let r = "requestId" in e ? e.requestId : undefined;
    if (typeof r === "string" && r.toLowerCase().startsWith("late-bind-")) {
        return undefined;
    }
    return r;
}
function SPt(e) {
    return xe().safeParse(e).success;
}
var xe = p(()=>u({
        max_thinking_tokens: E().refine((e)=>Number.isInteger(e)).nullable().optional(),
        thinking_display: U(X6e).nullable().optional()
    }));
const Jbr = `set_max_thinking_tokens: max_thinking_tokens must be an integer or null and thinking_display must be ${X6e.map((e)=>`"${e}"`).join(", ")}, or null`;
function Zbr(e) {
    return e !== null && typeof e === "object" && "type" in e && typeof e.type === "string";
}
function Ne(e) {
    return e !== null && typeof e === "object" && "type" in e && e.type === "control_response" && "response" in e && e.response != null;
}
function Pe(e) {
    return e !== null && typeof e === "object" && "type" in e && e.type === "control_request" && "request_id" in e && "request" in e && e.request != null;
}
function fSs(e) {
    no().bridgeStateFramesGate = e;
}
function foe(e) {
    if ((e.type === "user" || e.type === "assistant") && e.isVirtual) {
        return false;
    }
    if (e.type === "attachment") {
        if (e.attachment.type === "hook_system_message") {
            return true;
        }
        if (e.attachment.type === "tool_host_result_lines") {
            return true;
        }
        return e.attachment.type === "queued_command" && e.attachment.commandMode === "prompt" && !e.attachment.isMeta && ey(e.attachment.origin);
    }
    return e.type === "user" || e.type === "assistant" || e.type === "system" && (e.subtype === "local_command" || e.subtype === "model_consent_fallback" || e.subtype === "compact_boundary" && (no().bridgeStateFramesGate?.() ?? true));
}
function TQt(e) {
    return e.type === "user" && !e.isCompactSummary && !FTs(e);
}
function eSr(e) {
    return e.type === "attachment" || e.type === "system" && e.subtype === "model_consent_fallback";
}
function Q$n(e) {
    return e.type === "conversation_reset" || e.type === "stream_event" || e.type === "system" && e.subtype === "status" || e.subtype === "task_started" || e.subtype === "task_progress" || e.subtype === "task_updated" || e.subtype === "task_notification" || e.subtype === "background_tasks_changed" || e.subtype === "thinking_tokens" || e.subtype === "code_change_published" || e.subtype === "vcs_state_changed";
}
function Z$n(e) {
    if (!HRe(e)) {
        return;
    }
    let content = e.message.content;
    let n;
    if (typeof content === "string") {
        n = content;
    } else {
        for (let d of content){
            if (d.type === "text") {
                n = d.text;
                break;
            }
        }
    }
    if (!n) {
        return;
    }
    return apt(n) || undefined;
}
function mSs(e, r, n, s, d, v, I, h) {
    try {
        let y = bPt(X(e));
        if (Ne(y)) {
            t("[bridge:repl] Ingress message type=control_response");
            d?.(y);
            return;
        }
        if (Pe(y)) {
            t(`[bridge:repl] Inbound control_request subtype=${y.request.subtype}`);
            v?.(y);
            return;
        }
        if (Zbr(y) && y.type === "control_cancel_request" && "request_id" in y && typeof y.request_id === "string") {
            t(`[bridge:repl] Inbound control_cancel_request request_id=${y.request_id}`);
            I?.(y.request_id);
            return;
        }
        if (Je(y)) {
            let w = Ze(y.notification);
            if (w === undefined) {
                if (h) {
                    t("[bridge:repl] Ingress message type=queued_notification");
                    h({
                        type: "queued_notification",
                        notification: y.notification
                    });
                } else {
                    t("[bridge:repl] Ignoring queued_notification: host has no notification buffer");
                }
                return;
            }
            t("[bridge:repl] Ingress queued_notification from another session: delivering as its user frame");
            y = w;
        }
        if (!Zbr(y)) {
            return;
        }
        let b = "uuid" in y && typeof y.uuid === "string" ? y.uuid : undefined;
        if (b && r.has(b)) {
            t(`[bridge:repl] Ignoring echo: type=${y.type} uuid=${b}`);
            return;
        }
        if (b && n.has(b)) {
            t(`[bridge:repl] Ignoring re-delivered inbound: type=${y.type} uuid=${b}`);
            return;
        }
        t(`[bridge:repl] Ingress message type=${y.type}${b ? ` uuid=${b}` : ""}`);
        if (y.type === "user") {
            if ("isReplay" in y && y.isReplay === true) {
                t(`[bridge:repl] Ignoring replay echo: uuid=${b ?? "none"}`);
                return;
            }
            if ("parent_tool_use_id" in y && y.parent_tool_use_id != null) {
                t(`[bridge:repl] Ignoring parented user frame at ingress (echo/replay of a subagent frame): uuid=${b}`);
                return;
            }
            if (Qbr(y)) {
                t(`[bridge:repl] Ignoring fork display frame at ingress: uuid=${b ?? "none"}`);
                return;
            }
            if (b) {
                n.add(b);
            }
            i("tengu_bridge_message_received", {
                is_repl: true
            });
            g("bridge_message_receive");
            s?.(y);
        } else {
            t(`[bridge:repl] Ignoring non-user inbound message: type=${y.type}`);
        }
    } catch (error) {
        t(`[bridge:repl] Failed to parse ingress message: ${l(error)}`);
        m("bridge_message_receive", "bridge_message_receive_parse_failed");
    }
}
const Me = new Set([
    "effortLevel",
    "ultracode"
]);
const Oe = 5;
const Ue = 40;
const $e = "This session is outbound-only. Enable Remote Control locally to allow inbound control.";
const Fe = 8000;
const z = "get_workspace_diff timed out: the workspace diff is still being computed; retry shortly";
const Le = 660000;
const H = "side_question timed out: the host did not answer in time";
const Ve = "(No answer available for this side question. Try again, or ask in the main conversation.)";
function bmo(e) {
    if (e.response !== null && e.synthetic !== false) {
        return {
            ...e,
            response: Ve,
            synthetic: true
        };
    }
    return e;
}
const Be = p(()=>u({
        question: o(),
        history: T(u({
            question: o(),
            response: o(),
            fallback_notice: o().optional()
        })).optional()
    }));
const We = "This session is shutting down.";
const Ye = new Set([
    "initialize",
    "file_suggestions",
    "read_file",
    "get_workspace_diff",
    "get_context_usage",
    "get_usage",
    "mcp_status"
]);
function ge(e, r) {
    if (r instanceof $r) {
        return Yt(l(r));
    }
    if (Ke(r)) {
        return Yt(l(r));
    }
    t(`${e} failed: ${l(r)}`, {
        level: "error"
    });
    return `${e} failed`;
}
function gSs(e) {
    if (e.type === "connected") {
        return;
    }
    if (e.type === "failed") {
        if (e.error) {
            t(`mcp_reconnect failed: ${e.error}`, {
                level: "error"
            });
        }
        throw new $r("Connection failed");
    }
    throw new $r(`Server status: ${e.type}`);
}
function N(e, r, sessionId, s) {
    Q(e, r, sessionId, s.then((d)=>({
            subtype: "success",
            response: d ?? {}
        })));
}
function Q(e, r, sessionId, s) {
    s.catch((d)=>({
            subtype: "error",
            error: ge(e.request.subtype, d)
        })).then((d)=>{
        let I = {
            ...d.subtype === "error" ? QF(e.request_id, d.error, "error_code" in d ? d.error_code : undefined) : RZ(e.request_id, d.response ?? {}),
            session_id: sessionId
        };
        r(I);
        t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${d.subtype}`);
    });
}
function _e(request_id, r) {
    if (r && r.ok === false) {
        return {
            type: "control_response",
            response: {
                subtype: "error",
                request_id,
                error: Yt(r.error)
            }
        };
    }
    return {
        type: "control_response",
        response: {
            subtype: "success",
            request_id
        }
    };
}
function hSs(e, r) {
    let { transport, sessionId, outboundOnly, getInitializeState, claudeCodeVersion, getCommands, reportsInboundReadReceipts, getPendingPrompts, onInterrupt, onStopTask, onBackgroundTasks, onCancelAsyncMessage, onDialogKindsDeclared, onClientInitialize, onSetModel, onSetMaxThinkingTokens, onSetPermissionMode, onApplyFlagSettings, onRenameSession, onSetColor, onFileSuggestions, onReadFile, onGetWorkspaceDiff, onGetContextUsage, onMcpAuthenticate, onMcpOauthCallbackUrl, onMcpReconnect, onMcpSetServers, onForkConversation, hasPendingPrompts, onSideQuestion, cancellableRequests } = r;
    if (!transport) {
        t("[bridge:repl] Cannot respond to control_request: transport not configured");
        return;
    }
    let q = r.writeFrame ?? ((a)=>{
        transport.write(a);
    });
    let _;
    if (wn() && !Ye.has(e.request.subtype)) {
        t(`[bridge] refusing ${e.request.subtype}: this process is exiting`);
        _ = {
            type: "control_response",
            response: {
                subtype: "error",
                request_id: e.request_id,
                error: We
            }
        };
        let a = {
            ..._,
            session_id: sessionId
        };
        transport.write(a);
        return;
    }
    if (outboundOnly && e.request.subtype !== "initialize") {
        _ = {
            type: "control_response",
            response: {
                subtype: "error",
                request_id: e.request_id,
                error: $e
            }
        };
        let a = {
            ..._,
            session_id: sessionId
        };
        transport.write(a);
        t(`[bridge:repl] Rejected ${e.request.subtype} (outbound-only) request_id=${e.request_id}`);
        return;
    }
    let M = r.answerSharedControlRequest?.(e.request);
    if (M instanceof Promise) {
        Q(e, q, sessionId, M);
        return;
    }
    if (M !== undefined) {
        let c = {
            ...M.subtype === "error" ? {
                type: "control_response",
                response: {
                    subtype: "error",
                    request_id: e.request_id,
                    error: M.error
                }
            } : {
                type: "control_response",
                response: {
                    subtype: "success",
                    request_id: e.request_id,
                    ...M.response !== undefined && {
                        response: M.response
                    }
                }
            },
            session_id: sessionId
        };
        transport.write(c);
        t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${M.subtype}`);
        return;
    }
    switch(e.request.subtype){
        case "initialize":
            {
                try {
                    let D = poe(e.request.supportedDialogKinds);
                    if (D.length > 0) {
                        onDialogKindsDeclared?.(D);
                    }
                } catch (error) {
                    t(`[bridge:repl] dialog-kind capture failed; acking initialize anyway: ${l(error)}`);
                }
                let commands = [];
                if (!outboundOnly) {
                    try {
                        commands = getCommands?.() ?? [];
                    } catch (error) {
                        m("bridge_initialize_commands", "get_commands_threw");
                        t(`[bridge:repl] getCommands failed; acking initialize with commands: []: ${l(error)}`);
                    }
                }
                let c = getPendingPrompts?.() ?? [];
                let pending_permission_requests = c.filter((D)=>D.request.subtype === "can_use_tool");
                let pending_user_dialog_requests = c.filter((D)=>D.request.subtype === "request_user_dialog");
                _ = {
                    type: "control_response",
                    response: {
                        subtype: "success",
                        request_id: e.request_id,
                        response: {
                            commands,
                            agents: [],
                            output_style: "normal",
                            available_output_styles: [
                                "normal"
                            ],
                            models: [],
                            account: {},
                            pid: process.pid,
                            ...claudeCodeVersion !== undefined && {
                                claude_code_version: claudeCodeVersion
                            },
                            ...!outboundOnly && reportsInboundReadReceipts?.() === true && {
                                inbound_read_receipts: true
                            },
                            ...getInitializeState?.()
                        },
                        pending_permission_requests,
                        pending_user_dialog_requests
                    }
                };
                try {
                    onClientInitialize?.();
                } catch (error) {
                    t(`[bridge:repl] onClientInitialize failed; acking initialize anyway: ${l(error)}`);
                }
                break;
            }
        case "set_model":
            {
                let a = e.request.model;
                if (a != null && typeof a !== "string") {
                    m("model_switch", "invalid_model_type");
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "set_model: model must be a string"
                        }
                    };
                    break;
                }
                let c = e.request.only_if_model_is_current;
                if (c !== undefined && c !== false) {
                    m("model_switch", "only_if_model_is_current_unserved");
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "set_model: Remote Control does not implement only_if_model_is_current. The request changed nothing."
                        }
                    };
                    break;
                }
                let verdict = onSetModel?.(e.request.model ?? undefined);
                if (verdict && "then" in verdict) {
                    pe({
                        verdict,
                        deadlineMs: r.setModelVerdictDeadlineMs ?? Vbr,
                        respond: (k)=>{
                            let we = {
                                ...{
                                    type: "control_response",
                                    response: {
                                        ...k,
                                        request_id: e.request_id
                                    }
                                },
                                session_id: sessionId
                            };
                            q(we);
                            t(`[bridge:repl] Sent control_response for set_model request_id=${e.request_id} result=${k.subtype}`);
                        },
                        inform: (k)=>{
                            for (let content of k){
                                q({
                                    type: "system",
                                    subtype: "informational",
                                    content,
                                    level: "notice",
                                    uuid: randomUUID(),
                                    session_id: sessionId
                                });
                            }
                        }
                    });
                    return;
                }
                if (verdict && !verdict.ok) {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: Yt(verdict.error)
                        }
                    };
                } else {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "success",
                            request_id: e.request_id
                        }
                    };
                }
                break;
            }
        case "set_max_thinking_tokens":
            {
                if (!SPt(e.request)) {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: Jbr
                        }
                    };
                    break;
                }
                let a = onSetMaxThinkingTokens?.(e.request.max_thinking_tokens, e.request.thinking_display);
                if (a && "then" in a) {
                    let request_id = e.request_id;
                    let S = e.request.subtype;
                    a.then((k)=>_e(request_id, k), (k)=>({
                            type: "control_response",
                            response: {
                                subtype: "error",
                                request_id,
                                error: ge(S, k)
                            }
                        })).then((k)=>{
                        let D = {
                            ...k,
                            session_id: sessionId
                        };
                        q(D);
                        t(`[bridge:repl] Sent control_response for set_max_thinking_tokens request_id=${request_id} result=${k.response.subtype}`);
                    });
                    return;
                }
                _ = _e(e.request_id, a);
                break;
            }
        case "set_permission_mode":
            {
                let a = Fm(e.request.mode);
                let c = a === undefined ? {
                    ok: false,
                    error: spe
                } : onSetPermissionMode?.(a) ?? {
                    ok: false,
                    error: "set_permission_mode is not supported in this context (onSetPermissionMode callback not registered)"
                };
                if (c.ok) {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "success",
                            request_id: e.request_id
                        }
                    };
                } else {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: Yt(c.error)
                        }
                    };
                }
                break;
            }
        case "rename_session":
            {
                if (typeof e.request.title !== "string") {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "rename_session: title must be a string"
                        }
                    };
                    break;
                }
                let c = onRenameSession?.(e.request.title) ?? {
                    ok: false,
                    error: "rename_session is not supported in this context (onRenameSession callback not registered)"
                };
                if (c.ok) {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "success",
                            request_id: e.request_id
                        }
                    };
                } else {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: Yt(c.error)
                        }
                    };
                }
                break;
            }
        case "set_color":
            {
                let a = onSetColor?.(e.request.color) ?? {
                    ok: false,
                    error: "set_color is not supported in this context (onSetColor callback not registered)"
                };
                if (a.ok) {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "success",
                            request_id: e.request_id
                        }
                    };
                } else {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: Yt(a.error)
                        }
                    };
                }
                break;
            }
        case "file_suggestions":
            {
                if (!onFileSuggestions) {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "file_suggestions is not supported in this context (onFileSuggestions callback not registered)"
                        }
                    };
                    break;
                }
                N(e, q, sessionId, onFileSuggestions(e.request.query).then((suggestions)=>({
                        suggestions
                    })));
                return;
            }
        case "read_file":
            {
                if (!onReadFile) {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "read_file is not supported in this context (onReadFile callback not registered)"
                        }
                    };
                    break;
                }
                N(e, q, sessionId, onReadFile(e.request.path, e.request.max_bytes, e.request.encoding, e.request.anchor).then(((absPath)=>(c)=>({
                            ...c,
                            absPath
                        }))(e.request.path)));
                return;
            }
        case "get_workspace_diff":
            {
                if (!onGetWorkspaceDiff) {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "get_workspace_diff is not supported in this context (onGetWorkspaceDiff callback not registered)"
                        }
                    };
                    break;
                }
                let a = new AbortController;
                Q(e, q, sessionId, Ut(onGetWorkspaceDiff(a.signal), Fe, z).then((c)=>({
                        subtype: "success",
                        response: c
                    }), (c)=>{
                    a.abort();
                    if (l(c) === z) {
                        return {
                            subtype: "error",
                            error: z,
                            error_code: "workspace_diff_pending"
                        };
                    }
                    throw c;
                }));
                return;
            }
        case "get_context_usage":
            {
                if (!onGetContextUsage) {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "get_context_usage is not supported in this context (onGetContextUsage callback not registered)"
                        }
                    };
                    break;
                }
                N(e, q, sessionId, onGetContextUsage({
                    detail: e.request.detail
                }).then((a)=>({
                        ...a,
                        memoryFiles: []
                    })));
                return;
            }
        case "get_usage":
            _ = {
                type: "control_response",
                response: {
                    subtype: "error",
                    request_id: e.request_id,
                    error: "get_usage is not supported in this context"
                }
            };
            break;
        case "mcp_status":
            _ = {
                type: "control_response",
                response: {
                    subtype: "success",
                    request_id: e.request_id,
                    response: {
                        mcpServers: []
                    }
                }
            };
            break;
        case "mcp_authenticate":
        case "mcp_oauth_callback_url":
        case "mcp_reconnect":
            {
                let a = e.request;
                let { subtype, serverName } = a;
                let k = a.subtype === "mcp_authenticate" ? onMcpAuthenticate && ((D)=>onMcpAuthenticate(D, a.redirectUri)) : a.subtype === "mcp_oauth_callback_url" ? onMcpOauthCallbackUrl && ((D)=>onMcpOauthCallbackUrl(D, a.callbackUrl)) : onMcpReconnect;
                if (!k) {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: `${subtype} is not supported in this context (callback not registered)`
                        }
                    };
                    break;
                }
                N(e, q, sessionId, k(serverName));
                return;
            }
        case "interrupt":
            onInterrupt?.();
            _ = {
                type: "control_response",
                response: {
                    subtype: "success",
                    request_id: e.request_id
                }
            };
            break;
        case "apply_flag_settings":
            {
                let a = He(e.request.settings);
                let c;
                if (!a.ok) {
                    c = a;
                } else if (!onApplyFlagSettings) {
                    m("bridge_flag_settings", "not_registered");
                    c = {
                        ok: false,
                        error: "apply_flag_settings is not supported in this context (onApplyFlagSettings callback not registered)"
                    };
                } else {
                    c = onApplyFlagSettings(a.settings);
                }
                if (c.ok) {
                    g("bridge_flag_settings");
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "success",
                            request_id: e.request_id
                        }
                    };
                } else {
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: c.error
                        }
                    };
                }
                break;
            }
        case "mcp_set_servers":
            {
                let a = e.request.servers;
                let c = "hint" in e.request ? e.request.hint : undefined;
                let S;
                if (a === undefined && typeof c === "string") {
                    t("[bridge:repl] mcp_set_servers carried an advisory hint and no servers; acknowledged, nothing to apply");
                    S = {
                        ok: true,
                        added: [],
                        removed: [],
                        errors: {},
                        unknownServerCount: 0
                    };
                } else if (!fe(a)) {
                    S = {
                        ok: false,
                        error: "mcp_set_servers: servers must be an object"
                    };
                } else if (!onMcpSetServers) {
                    S = {
                        ok: false,
                        error: "mcp_set_servers is not supported in this context (onMcpSetServers callback not registered)"
                    };
                } else {
                    try {
                        S = onMcpSetServers(a);
                    } catch (error) {
                        t(`[bridge:repl] mcp_set_servers handler threw: ${l(error)}`, {
                            level: "error"
                        });
                        S = {
                            ok: false,
                            error: "mcp_set_servers failed to apply"
                        };
                    }
                }
                _ = S.ok ? {
                    type: "control_response",
                    response: {
                        subtype: "success",
                        request_id: e.request_id,
                        response: {
                            added: S.added,
                            removed: S.removed,
                            errors: ze(S.errors, S.unknownServerCount)
                        }
                    }
                } : {
                    type: "control_response",
                    response: {
                        subtype: "error",
                        request_id: e.request_id,
                        error: Yt(S.error)
                    }
                };
                break;
            }
        case "stop_task":
            {
                let a = e.request.task_id;
                if (typeof a !== "string") {
                    m("task_stop_user", "invalid_task_id");
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "stop_task: task_id must be a string"
                        }
                    };
                    break;
                }
                let c = a;
                if (!onStopTask) {
                    m("task_stop_user", "not_supported");
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "stop_task is not supported in this context (callback not registered)"
                        }
                    };
                    break;
                }
                N(e, q, sessionId, onStopTask(c));
                return;
            }
        case "background_tasks":
            {
                let a = qbr(e.request.tool_use_id);
                if (!a.valid) {
                    m("task_local_shell_background_all", "invalid_tool_use_id");
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: Ybr
                        }
                    };
                    break;
                }
                let { toolUseId } = a;
                if (!onBackgroundTasks) {
                    m("task_local_shell_background_all", "not_supported");
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "background_tasks is not supported in this context (callback not registered)"
                        }
                    };
                    break;
                }
                if (Cd()) {
                    m("task_local_shell_background_all", "disabled");
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: Kbr
                        }
                    };
                    break;
                }
                N(e, q, sessionId, Promise.resolve().then(()=>onBackgroundTasks(toolUseId)).then((backgrounded)=>{
                    if (toolUseId === undefined) {
                        return {};
                    }
                    return {
                        backgrounded
                    };
                }));
                return;
            }
        case "cancel_async_message":
            {
                let a = e.request.message_uuid;
                if (typeof a !== "string") {
                    m("bridge_cancel_queued_message", "invalid_message_uuid");
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "cancel_async_message: message_uuid must be a string"
                        }
                    };
                    break;
                }
                if (!onCancelAsyncMessage) {
                    m("bridge_cancel_queued_message", "not_supported");
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "cancel_async_message is not supported in this context (callback not registered)"
                        }
                    };
                    break;
                }
                N(e, q, sessionId, Promise.resolve().then(()=>onCancelAsyncMessage(a)).then((cancelled)=>{
                    if (cancelled) {
                        g("bridge_cancel_queued_message");
                    } else {
                        f("bridge_cancel_queued_message", "not_queued");
                    }
                    return {
                        cancelled
                    };
                }, (c)=>{
                    m("bridge_cancel_queued_message", "failed");
                    throw c;
                }));
                return;
            }
        case "side_question":
            {
                let a = Be().safeParse(e.request);
                if (!a.success) {
                    m("bridge_side_question", "invalid_request");
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "side_question: question must be a string and history an array of {question, response} strings"
                        }
                    };
                    break;
                }
                if (!onSideQuestion) {
                    m("bridge_side_question", "not_registered");
                    _ = {
                        type: "control_response",
                        response: {
                            subtype: "error",
                            request_id: e.request_id,
                            error: "side_question is not supported in this context (onSideQuestion callback not registered)"
                        }
                    };
                    break;
                }
                if (cancellableRequests?.has(e.request_id)) {
                    t(`[bridge:repl] side_question request_id=${e.request_id} already in flight \u2014 ignoring duplicate delivery`);
                    return;
                }
                let c = new AbortController;
                cancellableRequests?.set(e.request_id, c);
                let S = Promise.resolve().then(()=>onSideQuestion(a.data, {
                        signal: c.signal,
                        onProgress: (k)=>{
                            q({
                                type: "system",
                                subtype: "control_request_progress",
                                request_id: e.request_id,
                                ...k,
                                uuid: randomUUID(),
                                session_id: sessionId
                            });
                        }
                    }));
                N(e, q, sessionId, Ut(S, r.sideQuestionDeadlineMs ?? Le, H).then((k)=>{
                    if (k.response === null) {
                        f("bridge_side_question", "no_response");
                    } else if (k.synthetic !== false) {
                        f("bridge_side_question", "synthetic");
                    } else {
                        g("bridge_side_question");
                    }
                    return bmo(k);
                }, (k)=>{
                    if (l(k) === H) {
                        c.abort();
                        m("bridge_side_question", "deadline");
                        throw new $r(H);
                    }
                    if (Ke(k)) {
                        f("bridge_side_question", "cancelled");
                    } else {
                        m("bridge_side_question", "failed");
                    }
                    throw k;
                }).finally(()=>{
                    if (cancellableRequests?.get(e.request_id) === c) {
                        cancellableRequests.delete(e.request_id);
                    }
                }));
                return;
            }
        case "fork_conversation":
            {
                if (onForkConversation) {
                    N(e, q, sessionId, onForkConversation(e.request, {
                        promptPending: hasPendingPrompts?.() ?? false,
                        requestId: e.request_id
                    }));
                    return;
                }
                let a = {
                    forked: false,
                    error: "unsupported",
                    reason: "requires_remote_control_server"
                };
                _ = {
                    type: "control_response",
                    response: {
                        subtype: "success",
                        request_id: e.request_id,
                        response: a
                    }
                };
                break;
            }
        default:
            _ = {
                type: "control_response",
                response: {
                    subtype: "error",
                    request_id: e.request_id,
                    error: `REPL bridge does not handle control_request subtype: ${Yt(String(e.request.subtype))}`
                }
            };
    }
    let Te = {
        ..._,
        session_id: sessionId
    };
    transport.write(Te);
    t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${_.response.subtype}`);
}
function fe(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
}
const je = "(servers not adopted)";
function ze(errors, unknownServerCount) {
    if (unknownServerCount <= 0) {
        return errors;
    }
    return {
        ...errors,
        [je]: `${unknownServerCount} server(s) not adopted: a Remote Control bridge only honors the injected Project servers`
    };
}
function He(e) {
    if (!fe(e)) {
        m("bridge_flag_settings", "invalid_shape");
        return {
            ok: false,
            error: "apply_flag_settings: settings must be an object"
        };
    }
    let r = Object.keys(e).filter((s)=>!Me.has(s));
    if (r.length > 0) {
        m("bridge_flag_settings", "unsupported_key");
        let s = r.slice(0, Oe).map((v)=>Et(v, Ue));
        let d = r.length > s.length ? ` (+${r.length - s.length} more)` : "";
        return {
            ok: false,
            error: `apply_flag_settings: ${s.join(", ")}${d} cannot be changed over Remote Control (only effortLevel and ultracode can)`
        };
    }
    let settings = {};
    if ("effortLevel" in e) {
        let s = e.effortLevel;
        if (s !== null && typeof s !== "string") {
            m("bridge_flag_settings", "invalid_type");
            return {
                ok: false,
                error: "apply_flag_settings: effortLevel must be a string or null"
            };
        }
        settings.effortLevel = s;
    }
    if ("ultracode" in e) {
        let s = e.ultracode;
        if (typeof s !== "boolean") {
            m("bridge_flag_settings", "invalid_type");
            return {
                ok: false,
                error: "apply_flag_settings: ultracode must be a boolean"
            };
        }
        settings.ultracode = s;
    }
    if (!("effortLevel" in settings) && !("ultracode" in settings)) {
        m("bridge_flag_settings", "nothing_to_apply");
        return {
            ok: false,
            error: "apply_flag_settings: nothing to apply — only effortLevel and ultracode can be changed over Remote Control"
        };
    }
    return {
        ok: true,
        settings
    };
}
function eFn(e, r) {
    let n = r?.outcome;
    let s = n !== undefined && dH(n.terminal_reason);
    let d = {
        type: "result",
        ...!s && r?.userMessageUuid && {
            user_message_uuid: r.userMessageUuid
        },
        duration_ms: 0,
        duration_api_ms: 0,
        total_cost_usd: 0,
        usage: {
            ...uf
        },
        modelUsage: {},
        permission_denials: [],
        session_id: e,
        uuid: randomUUID()
    };
    if (n === undefined || s) {
        return {
            ...d,
            subtype: "success",
            is_error: false,
            num_turns: 0,
            result: "",
            stop_reason: null
        };
    }
    let v = {
        is_error: n.is_error,
        num_turns: n.num_turns,
        stop_reason: n.stop_reason,
        ...n.terminal_reason !== undefined && {
            terminal_reason: n.terminal_reason
        }
    };
    if (n.subtype === "success") {
        return {
            ...d,
            ...v,
            subtype: "success",
            result: n.is_error && n.structured_output === undefined ? n.result ?? "" : "",
            ...n.api_error_status != null && {
                api_error_status: n.api_error_status
            },
            ...n.api_error_code !== undefined && {
                api_error_code: n.api_error_code
            },
            ...n.api_error !== undefined && {
                api_error: n.api_error
            }
        };
    }
    return {
        ...d,
        ...v,
        subtype: n.subtype,
        errors: []
    };
}
function Smo(e, reason) {
    return {
        type: "system",
        subtype: "worker_shutting_down",
        reason,
        session_id: e,
        uuid: randomUUID()
    };
}
const name = "PushNotification";
function ySs(message, r) {
    return {
        type: "assistant",
        message: {
            diagnostics: null,
            id: randomUUID(),
            container: null,
            model,
            role: "assistant",
            stop_details: null,
            stop_reason: "tool_use",
            stop_sequence: null,
            type: "message",
            usage: {
                ...uf
            },
            content: [
                {
                    type: "tool_use",
                    id: randomUUID(),
                    name,
                    input: {
                        message,
                        status: "proactive"
                    }
                }
            ],
            context_management: null
        },
        parent_tool_use_id: null,
        is_meta: true,
        session_id: r,
        uuid: randomUUID()
    };
}
function tSr(text, r) {
    return {
        type: "assistant",
        message: {
            diagnostics: null,
            id: randomUUID(),
            container: null,
            model,
            role: "assistant",
            stop_details: null,
            stop_reason: "stop_sequence",
            stop_sequence: "",
            type: "message",
            usage: {
                ...uf
            },
            content: [
                {
                    type: "text",
                    text,
                    citations: null
                }
            ],
            context_management: null
        },
        parent_tool_use_id: null,
        session_id: r,
        uuid: randomUUID(),
        timestamp: new Date().toISOString()
    };
}
class moe {
    capacity;
    ring;
    set = new Set;
    writeIdx = 0;
    constructor(e){
        this.capacity = e;
        this.ring = Array(e);
    }
    add(e) {
        if (this.set.has(e)) {
            return;
        }
        let r = this.ring[this.writeIdx];
        if (r !== undefined) {
            this.set.delete(r);
        }
        this.ring[this.writeIdx] = e;
        this.set.add(e);
        this.writeIdx = (this.writeIdx + 1) % this.capacity;
    }
    has(e) {
        return this.set.has(e);
    }
    clear() {
        this.set.clear();
        this.ring.fill(undefined);
        this.writeIdx = 0;
    }
}
const Xe = p(()=>u({
        notification_id: o().min(1),
        origin: A(sue),
        content: o()
    }));
function Ze(notification) {
    let r = Xe().safeParse(notification);
    if (!r.success) {
        return;
    }
    return {
        type: "user",
        uuid: r.data.notification_id,
        message: {
            role: "user",
            content: r.data.content
        },
        parent_tool_use_id: null,
        isSynthetic: true,
        inbound_origin: sue
    };
}
function Je(e) {
    return typeof e === "object" && e !== null && "type" in e && e.type === "queued_notification";
}
const et = [
    "UNSPECIFIED",
    "ABSENT",
    "VERIFIED",
    "VERIFIED_BY_GATE",
    "INVALID",
    "UNCHECKED",
    "VERIFIED_KEYLESS_DEVICE",
    "SERVICE_VOUCHED",
    "SERVER_AUTHORED",
    "SERVER_REPLAYED",
    "TRANSITIVELY_VOUCHED"
];
const ye = "DEVICE_ATTESTATION_STATUS_";
const tt = [
    "UNSPECIFIED",
    "ABSENT",
    "VERIFIED",
    "VERIFIED_BY_GATE",
    "INVALID",
    "UNCHECKED"
];
function l$e(e) {
    if (e === undefined || e === null) {
        return "UNSPECIFIED";
    }
    if (typeof e === "number") {
        return tt[e] ?? "UNSPECIFIED";
    }
    if (typeof e !== "string") {
        return "UNSPECIFIED";
    }
    if (e === "server_authored") {
        return "SERVER_AUTHORED";
    }
    if (e === "server_replayed") {
        return "SERVER_REPLAYED";
    }
    if (e === "transitively_vouched") {
        return "TRANSITIVELY_VOUCHED";
    }
    let r = e.startsWith(ye) ? e.slice(ye.length) : e;
    return et.find((n)=>n === r) ?? "UNSPECIFIED";
}
const V = [
    "VERIFIED",
    "VERIFIED_KEYLESS_DEVICE",
    "VERIFIED_BY_GATE"
];
function _Ss(e, r) {
    if (V.indexOf(e) <= V.indexOf(r)) {
        return e;
    }
    return r;
}
function nSr(e, r) {
    if (e === "SERVICE_VOUCHED") {
        return true;
    }
    let n = V.findIndex((s)=>s === e);
    return n !== -1 && n <= V.indexOf(r);
}
const rSr = {
    enforce: false,
    acceptLevel: "VERIFIED",
    acceptStatuses: new Set
};
const rt = [
    "UNSPECIFIED",
    "ABSENT",
    "INVALID",
    "UNCHECKED"
];
const ot = p(()=>u({
        accept_level: U(V).default("VERIFIED"),
        accept_statuses: T(U(rt)).default([])
    }));
function oSr(e) {
    let attestation = no().attestation;
    let n = ot().safeParse(e);
    if (!n.success && !attestation.malformedConfigReported) {
        attestation.malformedConfigReported = true;
        try {
            t(`[bridge:attestation] malformed enforce config \u2014 failing closed to accept_level=VERIFIED with no accept_statuses: ${n.error.message}`, {
                level: "error"
            });
            f("bridge_event_attestation", "malformed_config");
        } catch (error) {
            t(`[bridge:attestation] malformed-config report threw: ${l(error)}`, {
                level: "error"
            });
        }
    }
    return {
        enforce: true,
        acceptLevel: n.success ? n.data.accept_level : "VERIFIED",
        acceptStatuses: new Set(n.success ? n.data.accept_statuses : [])
    };
}
function bSs(e) {
    try {
        let r = no().attestation.reportedCloudWorkerCodes;
        if (r.has(e)) {
            return;
        }
        r.add(e);
        t(`${C(true)} the attestation policy header could not be read whole (${e})`, {
            level: "error"
        });
        f("ccr_worker_attestation_policy", e);
    } catch (error) {
        t(`${C(true)} policy-fault report threw: ${l(error)}`, {
            level: "error"
        });
    }
}
function Wat(e) {
    no().attestation.filterPolicy = e;
}
function AQt(e) {
    no().attestation.dropNotifier = e;
}
function SSs(e) {
    let attestation = no().attestation;
    if (attestation.dropNotifier === e) {
        attestation.dropNotifier = undefined;
    }
}
function tFn(e) {
    no().attestation.senderDropWriter = e;
}
function nFn(e) {
    let attestation = no().attestation;
    if (attestation.senderDropWriter === e) {
        attestation.senderDropWriter = undefined;
    }
}
const wPt = "[remote-io] warning: ";
function sSr({ status, payloadType, subtype, isCloud }) {
    let d = isCloud ? "The app that sent it doesn't sign its activity. Use an app that does." : "The app that sent it doesn't sign its activity. Use the terminal or an app that does.";
    return {
        what: payloadType === "control_response" ? "permission response" : payloadType === "control_request" ? `remote command (${subtype})` : "message",
        hint: isCloud && status === "ABSENT" ? "If you sent it, try again or sign in again." : isCloud && status === "VERIFIED_BY_GATE" ? "If you sent it, signing in again may fix this." : status === "ABSENT" || status === "INVALID" ? "Re-pair the sending device in Trusted Devices." : status === "VERIFIED_BY_GATE" || status === "VERIFIED_KEYLESS_DEVICE" ? d : status === "TRANSITIVELY_VOUCHED" ? "It came from an automated cloud session, not from a person." : undefined
    };
}
function vPt(e) {
    let r = e.isCloud ? "This session" : "Remote Control";
    if (e.windowCapped) {
        return `${r} is rejecting a burst of unsigned remote activity; further warnings for this burst are suppressed.`;
    }
    let { what, hint } = sSr(e);
    return `${r} ignored a ${what} that arrived without a valid device signature (attestation: ${e.status}).${hint ? ` ${hint}` : ""}`;
}
function PYe(e) {
    let { what, hint } = sSr(e);
    return `This ${what} arrived without a valid device signature (attestation: ${e.status}) and was ignored.${hint ? ` ${hint}` : ""}`;
}
function nt(e) {
    if (e.payloadType === "control_request") {
        return;
    }
    return tSr(e.windowCapped ? vPt(e) : PYe(e), K());
}
const st = new Set([
    "set_model",
    "set_permission_mode",
    "interrupt",
    "stop_task",
    "background_tasks",
    "cancel_async_message",
    "set_max_thinking_tokens",
    "rename_session",
    "set_color",
    "mcp_authenticate",
    "mcp_oauth_callback_url",
    "mcp_reconnect",
    "apply_flag_settings",
    "side_question",
    "reload_plugins"
]);
function c$e(e) {
    let r = j(e);
    if (typeof r === "string") {
        return r;
    }
}
function Ee(e) {
    let subtype = ke(e);
    if (subtype === undefined || !st.has(subtype)) {
        return;
    }
    return {
        subtype,
        requestId: e.payload ? c$e(e.payload) : undefined
    };
}
function ke(e) {
    let r = e.payload?.request;
    let n = typeof r === "object" && r !== null && "subtype" in r ? r.subtype : undefined;
    if (typeof n === "string") {
        return n;
    }
}
const it = new Set([
    "interrupt",
    "end_session"
]);
const at = 2000;
const Y = 200;
const he = 128;
const dt = 256;
function O(e, r, n) {
    e.delete(n);
    e.add(n);
    if (e.size > r) {
        for (let s of e){
            e.delete(s);
            break;
        }
    }
}
function CQt(e) {
    let attestation = no().attestation;
    return e.length > he || attestation.knownInboundRequestIds.has(e) || attestation.knownOutboundRequestIds.has(e) || attestation.elicitationOutboundRequestIds.has(e) || attestation.hostAskOutboundRequestIds.has(e);
}
function wSs(e) {
    let attestation = no().attestation;
    return attestation.knownOutboundRequestIds.has(e) || attestation.elicitationOutboundRequestIds.has(e);
}
function rFn(e, { automated }) {
    let attestation = no().attestation;
    O(attestation.knownOutboundRequestIds, Y, e);
    if (automated) {
        O(attestation.automatedOutboundRequestIds, Y, e);
    }
}
const ut = 512;
function vSs(e) {
    O(no().attestation.deviceOutboundRequestIds, ut, e);
}
function ESs(e) {
    O(no().attestation.elicitationOutboundRequestIds, Y, e);
}
function kSs(e) {
    O(no().attestation.hostAskOutboundRequestIds, Y, e);
}
function pt(e) {
    let r = e.payload?.response;
    if (typeof r !== "object" || r === null) {
        return false;
    }
    let n = c$e(r);
    let attestation = no().attestation;
    return n !== undefined && (attestation.automatedOutboundRequestIds.has(n) || attestation.deviceOutboundRequestIds.has(n) || attestation.hostAskOutboundRequestIds.has(n));
}
const lt = 200;
function oFn(e) {
    O(no().attestation.resolvedPromptRequestIds, lt, e);
}
function ct(e) {
    let r = e.payload?.response;
    if (typeof r !== "object" || r === null) {
        return false;
    }
    let n = c$e(r);
    return n !== undefined && no().attestation.resolvedPromptRequestIds.has(n);
}
const _t = 60000;
const me = 10;
function be(e, event_id) {
    let attestation = no().attestation;
    if (attestation.dropNotifier === undefined && attestation.senderDropWriter === undefined) {
        return;
    }
    if (attestation.recentDropEventIds.has(event_id)) {
        return;
    }
    O(attestation.recentDropEventIds, dt, event_id);
    let s = e.payloadType === "control_request" ? attestation.commandDropNoticeWindow : attestation.messageDropNoticeWindow;
    let d = Date.now();
    if (d - s.start >= _t) {
        s.start = d;
        s.count = 0;
    }
    s.count++;
    if (s.count <= me) {
        Se(e);
    } else if (s.count === me + 1) {
        Se({
            status: e.status,
            payloadType: e.payloadType,
            ...e.subtype !== undefined && {
                subtype: e.subtype
            },
            windowCapped: true,
            ...e.isCloud && {
                isCloud: true
            }
        });
    }
}
function Se(e) {
    let attestation = no().attestation;
    if (attestation.dropNotifier !== undefined) {
        try {
            attestation.dropNotifier(e);
        } catch (error) {
            t(`${C(e.isCloud === true)} drop notifier threw: ${l(error)}`, {
                level: "error"
            });
        }
    }
    if (attestation.senderDropWriter !== undefined) {
        try {
            let n = nt(e);
            if (n) {
                attestation.senderDropWriter(n);
            }
        } catch (error) {
            t(`${C(e.isCloud === true)} drop sender writer threw: ${l(error)}`, {
                level: "error"
            });
        }
    }
}
function iSr(e) {
    let n = (typeof e.payload?.type === "string" ? e.payload.type : e.event_type) === "control_request" && e.payload ? c$e(e.payload) : undefined;
    if (n !== undefined && n.length <= he) {
        O(no().attestation.knownInboundRequestIds, at, n);
    }
}
function Z(e, payloadType, isCloudWorker) {
    if (payloadType !== "control_request") {
        return;
    }
    iSr(e);
    if (Ee(e) !== undefined) {
        g(isCloudWorker ? "ccr_worker_control_request_attestation" : "bridge_control_request_attestation");
    }
}
const gt = new Set([
    "bash_command",
    "update_environment_variables",
    "assistant",
    "system"
]);
function ft(e, status, payloadType, isCloudWorker) {
    try {
        let d = no().attestation;
        let v = isCloudWorker ? d.reportedCloudWorkerCodes : d.reportedStrayDropCodes;
        let I = payloadType === "control_request" ? "control_request_other" : gt.has(payloadType) ? payloadType : "other_payload_type";
        let h = `${status.toLowerCase()}_${I}`;
        if (v.has(h)) {
            return;
        }
        v.add(h);
        t(`${C(isCloudWorker)} DROPPING unverified ${payloadType} event_id=${e.event_id} status=${status} (stray payload class ${h}; counted once per process)`, {
            level: "warn"
        });
        m(isCloudWorker ? "ccr_worker_stray_event_attestation" : "bridge_stray_event_attestation", h);
    } catch (error) {
        t(`${C(isCloudWorker)} stray-drop report threw: ${l(error)}`, {
            level: "error"
        });
    }
}
function C(e) {
    if (e) {
        return "[ccr-worker:attestation]";
    }
    return "[bridge:attestation]";
}
function RQt(e, r, { isCloudWorker, vouchWithheld = false }) {
    let status = !isCloudWorker && (e === "SERVER_AUTHORED" || e === "SERVER_REPLAYED") ? "UNSPECIFIED" : e;
    let v = !isCloudWorker && status === "TRANSITIVELY_VOUCHED" && nSr("VERIFIED_KEYLESS_DEVICE", r.acceptLevel) && !vouchWithheld;
    return {
        status,
        meetsLevel: v || nSr(status, r.acceptLevel),
        configException: r.acceptStatuses.has(status) || status === "TRANSITIVELY_VOUCHED" && r.acceptStatuses.has("UNSPECIFIED")
    };
}
function ve(e, r, isCloudWorker) {
    let payloadType = typeof e.payload?.type === "string" ? e.payload.type : e.event_type;
    let d = payloadType === "user" || payloadType === "control_response";
    let v = l$e(e.device_attestation_status);
    let vouchWithheld = v === "TRANSITIVELY_VOUCHED" && payloadType === "user" && !(typeof e.payload.inbound_origin === "string" && e.payload.inbound_origin !== "");
    let { status, meetsLevel, configException } = RQt(v, r, {
        isCloudWorker,
        vouchWithheld
    });
    let w = `${status.toLowerCase()}_${payloadType}${vouchWithheld ? "_unstamped" : ""}`;
    let L = e.payload?.request;
    let B = isCloudWorker && status === "SERVICE_VOUCHED" && payloadType === "control_request" && (!it.has(ke(e) ?? "") || typeof L === "object" && L !== null && l8e(L));
    if (meetsLevel && !B) {
        if (d) {
            g(isCloudWorker ? "ccr_worker_event_attestation" : "bridge_event_attestation");
        }
        Z(e, payloadType, isCloudWorker);
        return false;
    }
    if (!r.enforce) {
        Z(e, payloadType, isCloudWorker);
        if (status === "UNSPECIFIED") {
            return false;
        }
        if (d) {
            t(`${C(isCloudWorker)} accepting unverified ${payloadType} event_id=${e.event_id} status=${status}`, {
                level: "info"
            });
            f(isCloudWorker ? "ccr_worker_event_attestation" : "bridge_event_attestation", w);
        }
        return false;
    }
    let x = configException;
    let F = false;
    if (d) {
        let R = w;
        t(`${C(isCloudWorker)} ${x ? "accepting (config exception)" : "DROPPING"} unverified ${payloadType} event_id=${e.event_id} status=${status}`, {
            level: x ? "info" : "warn"
        });
        if (x) {
            f(isCloudWorker ? "ccr_worker_event_attestation" : "bridge_event_attestation", R);
        } else if (payloadType === "control_response" && pt(e)) {
            F = true;
            t(`${C(isCloudWorker)} dropped ${payloadType} event_id=${e.event_id} status=${status} answers an automated outbound request; notice suppressed`, {
                level: "info"
            });
            m(isCloudWorker ? "ccr_worker_event_attestation" : "bridge_event_attestation", `${R}_automated_reply`);
        } else if (payloadType === "control_response" && ct(e)) {
            F = true;
            t(`${C(isCloudWorker)} dropped ${payloadType} event_id=${e.event_id} status=${status} is a duplicate answer to an already-resolved prompt; notice suppressed`, {
                level: "info"
            });
            m(isCloudWorker ? "ccr_worker_event_attestation" : "bridge_event_attestation", `${R}_resolved_duplicate`);
        } else {
            F = true;
            m(isCloudWorker ? "ccr_worker_event_attestation" : "bridge_event_attestation", R);
            be({
                status,
                payloadType,
                ...isCloudWorker && {
                    isCloud: true
                }
            }, e.event_id);
        }
    } else if (payloadType === "control_request" && !x) {
        let R = Ee(e);
        if (R) {
            F = true;
            let requestId = R.requestId !== undefined && CQt(R.requestId) ? undefined : R.requestId;
            t(`${C(isCloudWorker)} DROPPING unverified control_request subtype=${R.subtype} event_id=${e.event_id} status=${status}${requestId === undefined && R.requestId !== undefined ? " (forged-id refusal suppressed, or the id is too long)" : ""}`, {
                level: "warn"
            });
            m(isCloudWorker ? "ccr_worker_control_request_attestation" : "bridge_control_request_attestation", `${status.toLowerCase()}_${R.subtype}`);
            be({
                status,
                payloadType,
                subtype: R.subtype,
                requestId,
                ...isCloudWorker && {
                    isCloud: true
                }
            }, e.event_id);
        }
    }
    if (!x && !F) {
        ft(e, status, payloadType, isCloudWorker);
    }
    if (x) {
        Z(e, payloadType, isCloudWorker);
    }
    return !x;
}
function sFn(e) {
    return ve(e, no().attestation.filterPolicy?.() ?? rSr, false);
}
function TSs(e, r) {
    if (e.source !== "client") {
        try {
            let n = no().attestation.reportedCloudWorkerCodes;
            if (!n.has("source_not_client")) {
                n.add("source_not_client");
                t(`${C(true)} ${r.enforce ? "DROPPING" : "would drop"} event_id=${e.event_id}: not marked client-written (counted once per process)`, {
                    level: "warn"
                });
                m("ccr_worker_stray_event_attestation", "source_not_client");
            }
        } catch (error) {
            t(`${C(true)} source-drop report threw: ${l(error)}`, {
                level: "error"
            });
        }
        if (!r.enforce) {
            iSr(e);
        }
        return r.enforce;
    }
    return ve(e, r, true);
}
export { bPt, Vbr, qbr, Kbr, Ybr, Xbr, poe, SPt, Jbr, _mo, Qbr, Zbr, fSs, foe, TQt, eSr, Q$n, Z$n, mSs, bmo, gSs, hSs, eFn, Smo, ySs, tSr, moe, l$e, _Ss, nSr, rSr, oSr, bSs, Wat, AQt, SSs, tFn, nFn, wPt, sSr, vPt, PYe, c$e, CQt, wSs, rFn, vSs, ESs, kSs, oFn, iSr, RQt, sFn, TSs };
