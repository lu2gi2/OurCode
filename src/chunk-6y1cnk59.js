import { Fn, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Qh } from "/$bunfs/root/chunk-347xejxn.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
function xi() {
    if (Qh().messagingBeyondOwnAgentsDisabled) {
        return false;
    }
    let a_CLAUDE_CODE_HARBOR_KITE = a.CLAUDE_CODE_HARBOR_KITE;
    if (a_CLAUDE_CODE_HARBOR_KITE !== undefined) {
        return Ne(a_CLAUDE_CODE_HARBOR_KITE);
    }
    if (O() === "windows" && !k("tengu_harbor_kite_win", true)) {
        return false;
    }
    return k("tengu_harbor_kite", true);
}
function Fce(e) {
    if (e?.flagsSettled === false && Fn("tengu_cuddly_willow", true).source === "fallback") {
        return false;
    }
    return k("tengu_cuddly_willow", true);
}
const f9t = "Cross-session messaging is not available in this session.";
export { xi, Fce, f9t };
