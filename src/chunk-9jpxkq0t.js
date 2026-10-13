import { z7 } from "/$bunfs/root/chunk-1ej05ybf.js";
import { mEo, aAr, lAr, gEo } from "/$bunfs/root/chunk-qk3m4n8a.js";
const t = {
    marks: [
        "claude",
        "anthropic",
        "anthropics"
    ],
    builtinLead: "cc-plugin",
    products: [
        "claude-code",
        "claude-mods"
    ]
};
const d = [
    ...t.marks,
    t.builtinLead
];
const c = [
    ...t.marks,
    ...t.products
];
const E = (e)=>new Set(e.map((s)=>lAr(s).join("")));
const l = E(d);
const p = E(c);
const _ = Math.max(...[
    ...l,
    ...p
].map((e)=>e.length));
const R = (e)=>new Intl.ListFormat("en", {
        type: "disjunction"
    }).format(e.map((s)=>`"${s}"`));
const g = R(d.map((e)=>`${e}-`));
const m = `A third party's plugin name cannot start with ${g}, be ${R(c)}, or put "official" beside "claude" or "anthropic".`;
const a = "Name it for what it does.";
const Hjo = "If this is one of Anthropic's own plugins, validate the marketplace that lists it.";
function lWe(e) {
    let s = aAr.test(e);
    let n = (s ? z7(e) : e).toLowerCase();
    let r = s ? `"${e}" (read as "${n}")` : `"${e}"`;
    let i = lAr(n);
    if ([
        ...gEo(n, _)
    ].some(({ joined, isWhole })=>(isWhole ? p : l).has(joined)) || mEo.test(n) || mEo.test(i.join(""))) {
        return {
            severity: "error",
            message: `Plugin name ${r} is reserved: it passes as one of Anthropic's own. ${m} ` + a
        };
    }
    if (t.marks.some((o)=>i.includes(o))) {
        return {
            severity: "warning",
            message: `Plugin name ${r} reads as one of Anthropic's own. ` + a
        };
    }
}
export { Hjo, lWe };
