import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Bf, ro, PD } from "/$bunfs/root/chunk-ghmnmzfd.js";
const r = "--inherit-permission-mode";
function s(e) {
    return e === r || e.startsWith(`${r}=`);
}
class m {
    mode;
}
const u = new q(()=>new m);
function f() {
    return u.of(B().host);
}
function yBo({ inheritPermissionModeCli, resolvedMode, storageV5 }) {
    if (!inheritPermissionModeCli) {
        return;
    }
    f().mode = resolvedMode;
    PD("--permission-mode", [
        r
    ], resolvedMode, undefined, storageV5).catch((o)=>c(o));
}
async function _Bo(e) {
    let n = f();
    let n_mode = n.mode;
    if (n_mode === undefined) {
        return;
    }
    let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!a_CLAUDE_JOB_DIR || a.CLAUDE_CODE_SESSION_KIND !== "bg") {
        n.mode = undefined;
        return;
    }
    let t = await ro(a_CLAUDE_JOB_DIR, e);
    if (!t?.respawnFlags) {
        return;
    }
    if (!t.respawnFlags.some(s)) {
        n.mode = undefined;
        return;
    }
    await PD("--permission-mode", [
        r
    ], n_mode, undefined, e, undefined, (p)=>p.some(s));
    Bf(a_CLAUDE_JOB_DIR);
    let d = await ro(a_CLAUDE_JOB_DIR, e);
    if (d?.respawnFlags && !d.respawnFlags.some(s)) {
        n.mode = undefined;
    }
}
export { yBo, _Bo };
