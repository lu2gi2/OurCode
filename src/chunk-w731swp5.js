import { uvt, btt, pvt, fvt } from "/$bunfs/root/chunk-kasbfbhj.js";
function h(e, o) {
    let p = pvt(e);
    let s = Math.min(p.length, uvt());
    return 2 + fvt(e, o).length + 2 + s + 1;
}
function umt(e, o, p) {
    let s = new Map;
    for (let n of e){
        if (n.type !== "prompt" || n.disableModelInvocation) {
            continue;
        }
        let t = n.pluginInfo?.pluginManifest.name;
        if (!t) {
            continue;
        }
        let a = h(n, e);
        let r = s.get(t) ?? [];
        r.push({
            name: n.name,
            chars: a,
            approxTokens: Math.round(a / o)
        });
        s.set(t, r);
    }
    let byPlugin = [
        ...s.entries()
    ].map(([pluginName, t])=>{
        t.sort((r, u)=>u.chars - r.chars);
        let a = t.reduce((acc, item)=>acc + item.chars, 0);
        return {
            pluginName,
            skillCount: t.length,
            chars: a,
            approxTokens: Math.round(a / o),
            skills: t
        };
    }).sort((n, t)=>t.chars - n.chars);
    let c = byPlugin.reduce((acc, item)=>acc + item.chars, 0);
    let i = btt(p, o);
    let overBudget = c > i;
    let totalChars = overBudget ? i : c;
    return {
        byPlugin,
        totalChars,
        totalTokens: Math.round(totalChars / o),
        overBudget,
        budgetTokens: Math.round(i / o)
    };
}
export { umt };
