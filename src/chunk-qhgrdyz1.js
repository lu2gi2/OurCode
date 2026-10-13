const oRe = [
    "anthropic-skills"
];
const f7t = "anthropic-skills";
function sRe(n) {
    if (n.startsWith("anthropic-skills:")) {
        return n;
    }
    return `anthropic-skills:${n}`;
}
function cUn(n) {
    return oRe.some((e)=>n.startsWith(`${e}:`));
}
function zde(n) {
    return /^[A-Za-z0-9._-]+$/.test(n);
}
function sIt(n) {
    return zde(n) && n !== "." && n !== "..";
}
function pR(n) {
    if (n.startsWith("anthropic-skills:")) {
        return n.slice(17);
    }
    return n;
}
function r(n) {
    return n.userFacingName?.() ?? n.name;
}
function Hws(n) {
    if (n.loadedFrom !== "plugin") {
        return [];
    }
    let e = s(n.name) ?? s(r(n));
    if (e === undefined) {
        return [];
    }
    let i = n.name.slice(n.name.indexOf(":") + 1);
    return [
        mwr(`${e}:${e}`),
        e,
        ...[
            ...n.aliases ?? [],
            ...n.shedAliases ?? []
        ].filter((t)=>t !== e).map((t)=>`anthropic-skills:${t}`),
        ...i !== e && !i.includes(":") ? [
            `anthropic-skills:${i}`,
            i
        ] : []
    ];
}
function s(n) {
    let e = n.indexOf(":");
    if (e <= 0) {
        return;
    }
    let i = n.slice(0, e);
    let t = n.slice(e + 1);
    if (t === i && !oRe.includes(i)) {
        return t;
    }
}
function mwr(n) {
    let e = s(n);
    if (e !== undefined) {
        return `anthropic-skills:${e}`;
    }
    if (!n.startsWith("anthropic-skills:")) {
        return;
    }
    let i = n.slice(17);
    if (i && !i.includes(":")) {
        return `${i}:${i}`;
    }
}
function Dws(n) {
    if (n.loadedFrom !== "syncedSkills" && n.loadedFrom !== "plugin" || !n.name.startsWith("anthropic-skills:")) {
        return [];
    }
    let e = n.name.slice(17);
    let i = r(n);
    let t = i.startsWith("anthropic-skills:") ? i.slice(17) : undefined;
    if (!e || e.includes(":")) {
        return [];
    }
    return [
        mwr(n.name),
        ...t !== undefined && t !== e && !t.includes(":") ? [
            `${t}:${t}`,
            `${t}:${e}`,
            t
        ] : []
    ];
}
export { oRe, f7t, sRe, cUn, zde, sIt, pR, Hws, mwr, Dws };
