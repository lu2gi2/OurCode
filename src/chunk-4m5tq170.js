import { fa, zP, Ld, $H } from "/$bunfs/root/chunk-xgw72tt1.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { delimiter, isAbsolute, resolve } from "path";
const B8n = "CLAUDE_CODE_PLUGIN_DIRS";
const OBr = "Unset CLAUDE_CODE_PLUGIN_DIRS (in the environment, or in the settings `env` block that sets it) to run without those folders.";
function j8n() {
    let n = (a.CLAUDE_CODE_PLUGIN_DIRS ?? "").split(delimiter).map((e)=>Ld(e.trim())).filter((e)=>e !== "");
    let i = n.filter((e)=>!s(e));
    if (i.length > 0) {
        t(`${B8n}: skipped ${i.join(", ")}: a plugin folder here is an absolute local path or starts with ~`, {
            level: "warn"
        });
    }
    return n.filter(s).map((e)=>resolve(e));
}
function MBr() {
    let n = j8n();
    if (a.CLAUDE_CODE_PLUGIN_DIRS !== undefined) {
        a.set("CLAUDE_CODE_PLUGIN_DIRS", n.join(delimiter));
    }
    return n;
}
function wj(...n) {
    let i = new Map;
    for (let e of n.flat()){
        let r = resolve(e);
        if (!i.has(r)) {
            i.set(r, e);
        }
    }
    return [
        ...i.values()
    ];
}
function PBt(n, i) {
    let e = new Set(i.map((r)=>resolve(r)));
    return n.filter((r)=>!e.has(resolve(r)));
}
function s(n) {
    return isAbsolute(n) && !$H(n) && !fa(n) && !zP(n);
}
export { B8n, OBr, j8n, MBr, wj, PBt };
