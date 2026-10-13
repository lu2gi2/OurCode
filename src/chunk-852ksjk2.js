import { Wpe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { k6e } from "/$bunfs/root/chunk-0ycjphb5.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { E, De, U } from "/$bunfs/root/chunk-smx21d0k.js";
const u = new Set([
    "interrupt",
    "stop_task",
    "send_task_message",
    "set_permission_mode",
    "set_model",
    "set_max_thinking_tokens",
    "set_color",
    "mcp_toggle",
    "message_rated",
    "side_question",
    "ui_press",
    "ui_input",
    "ui_select",
    "ui_client_press",
    "ui_pane_show",
    "ui_close",
    "ui_scroll",
    "ui_prompt_edit"
]);
const _ = new Set([
    "can_use_tool",
    "request_user_dialog",
    "elicitation"
]);
const a = new Set([
    "set_model",
    "set_permission_mode",
    "set_max_thinking_tokens"
]);
function $vn(e) {
    return i(e.request) && !a.has(e.request.subtype);
}
function r5o() {
    Wpe(true);
}
function f6r(e, n) {
    switch(e.type){
        case "user":
            return !(n?.hostOwnsOrigin === true && k6e(e.origin, e.isSynthetic));
        case "bash_command":
            return true;
        case "control_request":
            return i(e.request);
        default:
            return false;
    }
}
function i(request) {
    let n = request?.subtype;
    return typeof n === "string" && u.has(n) && request?.by !== "app";
}
function RGe(e) {
    return _.has(e.request.subtype);
}
const m6r = "x-ccr-session-writers";
const o5o = p(()=>De({
        writers: U([
            "owner_account_only",
            "not_owner_only"
        ]),
        statedAtMs: E()
    }));
function s5o(e) {
    if (e === null || e.includes(",")) {
        return;
    }
    let n = new Map;
    for (let o of e.split(";")){
        let t = o.trim();
        let s = t.indexOf("=");
        let r = s === -1 ? "" : t.slice(0, s);
        if (r === "") {
            continue;
        }
        if (n.has(r)) {
            return;
        }
        n.set(r, t.slice(s + 1));
    }
    if (n.get("v") !== "1") {
        return;
    }
    switch(n.get("owner_account_only")){
        case "true":
            return "owner_account_only";
        case "false":
            return "not_owner_only";
        default:
            return;
    }
}
function NZe(e) {
    return e === "owner_account_only";
}
function ntr({ frameCreatedAt, sessionWriters, maxFrameAgeMs, maxStatementAgeMs, now }) {
    if (frameCreatedAt === undefined) {
        return "no_frame_stamp";
    }
    if (now - frameCreatedAt > maxFrameAgeMs) {
        return "stale_frame";
    }
    if (sessionWriters === undefined) {
        return "session_writers_unknown";
    }
    if (!NZe(sessionWriters.writers)) {
        return "session_not_owner_only";
    }
    if (maxStatementAgeMs === undefined) {
        return;
    }
    let r = now - sessionWriters.statedAtMs;
    if (r >= 0 && r <= maxStatementAgeMs) {
        return undefined;
    }
    return "session_writers_stale";
}
export { $vn, r5o, f6r, RGe, m6r, o5o, s5o, NZe, ntr };
