function jXt(e) {
    return (e.denyMatchNames ?? []).filter((a)=>a.includes(":"));
}
function Ygs(e, a) {
    let l;
    return e.map((n)=>{
        if (n.loadedFrom !== "mcp") {
            return n;
        }
        let i = jXt(n);
        if (i.length === 0) {
            return n;
        }
        l ??= new Set([
            ...a.map((r)=>r.name),
            ...e.map((r)=>r.name)
        ]);
        let t = i.filter((r)=>r !== n.name && l.has(r));
        let s = n.reservedLabels ?? [];
        if (t.length === s.length && t.every((r, d)=>r === s[d])) {
            return n;
        }
        return {
            ...n,
            reservedLabels: t.length === 0 ? undefined : t
        };
    });
}
const Ro = "Skill";
const FW = "skill__";
function bCe(e) {
    return FW + e.replaceAll(":", "__").replace(/[^a-zA-Z0-9_-]/g, "_");
}
function Xgs(e) {
    let a = [
        ...e.aliases ?? [],
        ...e.shedAliases ?? [],
        ...e.unqualifiedName != null ? [
            e.unqualifiedName
        ] : [],
        ...jXt(e)
    ];
    if (a.length) {
        return a.map(bCe);
    }
}
export { jXt, Ygs, Ro, FW, bCe, Xgs };
