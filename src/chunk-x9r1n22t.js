import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Cp } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { vh } from "/$bunfs/root/chunk-fbhagmpx.js";
import { xp } from "/$bunfs/root/chunk-qk3m4n8a.js";
function y_n(o) {
    if (!o || Object.keys(o).length === 0) {
        return false;
    }
    for (let n of xp){
        let e = o[n];
        if (!e || e.length === 0) {
            continue;
        }
        for (let r of e){
            if ((r.hooks?.length ?? 0) > 0) {
                return true;
            }
        }
    }
    return false;
}
function kqo(o, n, e, r, l = false, personal = false, checkout = false) {
    if (!e || Object.keys(e).length === 0) {
        return;
    }
    let s = 0;
    for (let i of xp){
        let f = e[i];
        if (!f || f.length === 0) {
            continue;
        }
        let a = i;
        if (l && i === "Stop") {
            a = "SubagentStop";
            t(`Converting Stop hook to SubagentStop for ${r} (subagents trigger SubagentStop)`);
        }
        for (let c of f){
            let S = c.matcher ?? "";
            let g = c.hooks;
            if (!g || g.length === 0) {
                continue;
            }
            for (let h of g){
                o.add(n, a, S, h, {
                    personal,
                    checkout
                });
                s++;
            }
        }
    }
    if (s > 0) {
        t(`Registered ${s} frontmatter hook(s) from ${r} for session ${n}`);
    }
}
function m7e(o) {
    return vh() && o !== undefined && Cp.has(o);
}
export { y_n, kqo, m7e };
