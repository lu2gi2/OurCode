import { Fm } from "/$bunfs/root/chunk-52bcnmbr.js";
import { Ne, vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { nCo, WGn } from "/$bunfs/root/chunk-x47nahfr.js";
import { Wle } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { $W } from "/$bunfs/root/chunk-4r6b8efh.js";
const ZWt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE";
const ezt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL";
const O_t = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED";
const tzt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON";
function f4o(e) {
    if (e.toolPermissionContext.proactivityBaseline === undefined) {
        return undefined;
    }
    return e;
}
function vbn({ toolPermissionContext }) {
    let toolPermissionContext_proactivityBaseline = toolPermissionContext.proactivityBaseline;
    if (toolPermissionContext_proactivityBaseline === undefined) {
        return {};
    }
    return {
        [ZWt]: toolPermissionContext_proactivityBaseline.mode
    };
}
function Ebn({ proactivityLevel, toolPermissionContext }) {
    let n = {
        [ezt]: proactivityLevel
    };
    if (toolPermissionContext.startupModeDecidedByProactivityLevel !== undefined) {
        n[O_t] = "1";
    }
    if ($W()) {
        n[tzt] = "1";
    }
    return n;
}
function m4o({ toolPermissionContext }) {
    if (toolPermissionContext.startupModeDecidedByProactivityLevel === undefined) {
        return {
            [O_t]: "0"
        };
    }
    return {};
}
function g4o(e) {
    return WGn(e) !== "fresh" || nCo(e).some((t)=>t === "--permission-mode" || t.startsWith("--permission-mode="));
}
function h4o(e) {
    let a_CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE = a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE;
    a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE");
    let n = Fm(a_CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE);
    if (n === "bypassPermissions" && !e) {
        return;
    }
    return n;
}
function y4o() {
    let a_CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL = a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL;
    a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL");
    if (Wle(a_CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL)) {
        return a_CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL;
    }
    a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED");
    a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON");
}
function _4o() {
    let a_CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON = a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON;
    a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON");
    return Ne(a_CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON);
}
function b4o() {
    return Wle(a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL) && Ne(a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON);
}
function kbn() {
    let a_CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED = a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED;
    a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED");
    if (Ne(a_CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED)) {
        return true;
    }
    if (vs(a_CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED)) {
        return false;
    }
}
export { ZWt, ezt, O_t, tzt, f4o, vbn, Ebn, m4o, g4o, h4o, y4o, _4o, b4o, kbn };
