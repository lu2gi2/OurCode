import { rj } from "/$bunfs/root/chunk-ctt36bn8.js";
import { k, hz } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Kf, Yen } from "/$bunfs/root/chunk-mvz09dzd.js";
import { bAe, Roo } from "/$bunfs/root/chunk-p13123xv.js";
const t = 300000;
function qOn() {
    return a.CLAUDE_CODE_BRIEF || hz("tengu_kairos_brief", false, t);
}
function azs(e) {
    if (!e.includes(Kf) && !e.includes(Yen)) {
        return false;
    }
    if (bAe()) {
        return false;
    }
    return qOn();
}
function jI() {
    return rj() && qOn() || Roo();
}
const r = `In brief mode, plain assistant text is hidden from the user \u2014 only ${Kf} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;
function lzs() {
    let e = k("tengu_kairos_brief_stop_hook_text", "");
    if (typeof e === "string" && e.length > 0) {
        return e;
    }
    return r;
}
export { qOn, azs, jI, lzs };
