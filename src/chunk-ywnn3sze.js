import { mr } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Qh } from "/$bunfs/root/chunk-347xejxn.js";
function Cd() {
    return Qh().backgroundTasksDisabled || a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || mr();
}
function EPt() {
    let n = Qh();
    return n.backgroundTasksDisabled && n.backgroundLaunchRule === undefined || n.backgroundAgentLaunchDisabled || a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || mr();
}
function e7() {
    return Cd() || Qh().backgroundAgentLaunchDisabled;
}
function zat() {
    let n = Qh();
    if (!n.foregroundAgentMovesAdmitted) {
        return e7();
    }
    return n.backgroundAgentLaunchDisabled || a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || mr();
}
function ASs() {
    return Qh().backgroundLaunchRule !== undefined && !EPt();
}
export { Cd, EPt, e7, zat, ASs };
