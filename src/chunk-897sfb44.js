import { Gr } from "/$bunfs/root/chunk-0ycjphb5.js";
const TBr = true;
const ABr = ()=>Gr("tengu_agents_md_mod", TBr);
const pWe = "cc-plugin-agents-md";
const cQe = "claude-md-or-agents-md";
const hmn = [
    "claude-md",
    "claude-md-or-agents-md",
    "claude-md-and-agents-md",
    "managed-only"
];
function mmn(t, o) {
    let e = new Set([
        t.path
    ]);
    let { path, parent } = t;
    while(parent !== undefined && !e.has(parent)){
        e.add(parent);
        path = parent;
        parent = o.get(parent)?.parent;
    }
    return path;
}
const L8n = [
    "project",
    "local",
    "user"
];
const sQe = (t)=>t.flatMap((o)=>o.parts.map((e, n)=>({
                path: e.path,
                kind: "project",
                content: e.content,
                ...n > 0 && {
                    parent: o.parts[0]?.path ?? e.path
                }
            })));
function FWo(t, o, e) {
    if ((t === "~" || t.startsWith("~/")) && e !== undefined) {
        let r = e.replace(/(?<=.)[\\/]+$/, "");
        if (t === "~") {
            return r;
        }
        return `${r}${c(r)}${t.slice(2)}`;
    }
    if (/^(?:[A-Za-z]:)?[\\/]/.test(t)) {
        return t;
    }
    return `${o}${c(o)}${t}`;
}
var c = (t)=>{
    if (t.includes("\\")) {
        return "\\";
    }
    return "/";
};
const lme = (t)=>t.replaceAll("\\", "/").replace(/(?<=.)\/+$/, "");
const gmn = (t, o)=>lme(t).startsWith(`${lme(o)}/`);
const CBr = (t, o)=>lme(t.path) === lme(o);
const RBr = (t)=>`Contents of ${t.path}:

${t.content}`;
function N8n(t, o) {
    let e = new Set(o.map((n)=>n.dir));
    return t.filter((n)=>!e.has(n.dir));
}
const xBr = (t, o)=>[
        ...t ?? [],
        ...o.map(RBr)
    ];
const iQe = (t)=>t.kind === "project" || t.kind === "local";
function Aht(t) {
    let o = lme(t);
    let e = o.lastIndexOf("/.claude/");
    let n = e === -1 ? o.lastIndexOf("/") : e;
    if (n <= 0) {
        return "/";
    }
    return o.slice(0, n);
}
function PBr(t, o) {
    let e = new Map(t.map((s)=>[
            s.path,
            s
        ]));
    let n = t.findIndex((s)=>iQe(s) && gmn(Aht(mmn(s, e)), o));
    if (n !== -1) {
        return n;
    }
    let r = t.findLastIndex(iQe);
    if (r !== -1) {
        return r + 1;
    }
    let i = t.findIndex((s)=>s.kind === "memory");
    if (i === -1) {
        return t.length;
    }
    return i;
}
const CBt = [
    "AGENTS.md",
    ".claude/AGENTS.md"
];
const aQe = [
    "CLAUDE.md",
    ".claude/CLAUDE.md",
    "CLAUDE.local.md"
];
const lQe = "main";
const UWo = [
    "clear",
    "compact",
    "resume"
];
function $8n(t, o) {
    if (!(iQe(t) && t.parent === undefined && aQe.some((i)=>lme(t.path).endsWith(`/${i}`)))) {
        return false;
    }
    let n = Aht(t.path);
    let r = lme(o);
    return n === r || gmn(r, n);
}
const BWo = (t)=>!L8n.includes(t.kind);
function RBt(t, o) {
    let e = new Set(o.map((i)=>lme(i.path)));
    let n = new Set(o.filter(iQe).map((i)=>i.content.trim()));
    let r = [];
    for (let i of t){
        let s = lme(i.path);
        let m = i.content.trim();
        if (!(e.has(s) || m !== "" && n.has(m))) {
            e.add(s);
            r.push(i);
        }
    }
    return r;
}
function F8n(t, o) {
    if (o.length === 0) {
        return t;
    }
    let e = [
        ...t
    ];
    let n = new Map(o.map((i)=>[
            i.path,
            i
        ]));
    let r = new Map;
    for (let i of o){
        let s = Aht(mmn(i, n));
        r.set(s, [
            ...r.get(s) ?? [],
            i
        ]);
    }
    for (let [i, s] of r){
        e.splice(PBr(e, i), 0, ...s);
    }
    return e;
}
const x = {
    none: "managed-only",
    claude: "claude-md",
    "agents-fallback": "claude-md-or-agents-md",
    both: "claude-md-and-agents-md"
};
function jWo(t) {
    if (t === undefined) {
        return;
    }
    return (typeof t === "string" ? x[t] : undefined) ?? "claude-md";
}
const WWo = (t)=>hmn.find((o)=>o === t) ?? cQe;
export { TBr, ABr, pWe, mmn, L8n, sQe, FWo, lme, gmn, CBr, RBr, N8n, xBr, iQe, Aht, PBr, CBt, aQe, lQe, UWo, $8n, BWo, RBt, F8n, cQe, jWo, hmn, WWo };
