import { Ne, vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { Xc, sU } from "/$bunfs/root/chunk-ctt36bn8.js";
import { k, Gr, Nl } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Dd } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { sA, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { tvo, XFe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ie, vi } from "/$bunfs/root/chunk-nj0630nv.js";
import { vF, EF } from "/$bunfs/root/chunk-6dwnw6av.js";
import { ea } from "/$bunfs/root/chunk-75wzvwyz.js";
import { Dn } from "/$bunfs/root/chunk-77t63btp.js";
function _hr(e, r) {
    let o = /^claude-([a-z]+)-(\d+(?:-\d+)*)$/.exec(e);
    let i = o?.[1];
    let u = o?.[2];
    if (!i || !u) {
        return false;
    }
    let n = r.find(([s])=>s === i)?.[1];
    if (!n) {
        return false;
    }
    let c = u.split("-").map(Number);
    for(let s = 0; s < Math.max(c.length, n.length); s++){
        let f = (c[s] ?? 0) - (n[s] ?? 0);
        if (f !== 0) {
            return f > 0;
        }
    }
    return true;
}
const d = "force";
function l() {
    try {
        if (EF()) {
            return false;
        }
        if (Ie() !== "firstParty") {
            return false;
        }
        let e = XFe("ENABLE_TOOL_SEARCH");
        if (e === d) {
            return true;
        }
        if (tvo() !== d) {
            return false;
        }
        if (Ne(XFe("CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS"))) {
            return false;
        }
        return e === undefined || !_(e);
    } catch (error) {
        t(`isToolSearchForceOverride: settings read failed: ${error}`, {
            level: "error"
        });
        return false;
    }
}
function _(e) {
    if (e.startsWith("auto:")) {
        let r = Dd(e.slice(5));
        return !isNaN(r) && r >= 100;
    }
    return vs(e);
}
function Z9t() {
    return vF() && !l();
}
function Ico(e) {
    if (!e.startsWith("auto:")) {
        return null;
    }
    let r = e.slice(5);
    let o = Dd(r);
    if (isNaN(o)) {
        t(`Invalid ENABLE_TOOL_SEARCH value "${e}": expected auto:N where N is a number.`);
        return null;
    }
    return Math.max(0, Math.min(100, o));
}
function g(ENABLE_TOOL_SEARCH) {
    if (!ENABLE_TOOL_SEARCH) {
        return false;
    }
    return ENABLE_TOOL_SEARCH === "auto" || ENABLE_TOOL_SEARCH.startsWith("auto:");
}
function cNe() {
    if (Z9t()) {
        return "standard";
    }
    if (l()) {
        return "tst";
    }
    let ENABLE_TOOL_SEARCH = process.env.ENABLE_TOOL_SEARCH;
    let r = ENABLE_TOOL_SEARCH ? Ico(ENABLE_TOOL_SEARCH) : null;
    if (r === 0) {
        return "tst";
    }
    if (r === 100) {
        return "standard";
    }
    if (g(ENABLE_TOOL_SEARCH)) {
        return "tst-auto";
    }
    if (Ne(ENABLE_TOOL_SEARCH)) {
        return "tst";
    }
    if (vs(ENABLE_TOOL_SEARCH)) {
        return "standard";
    }
    return "tst";
}
const E = [
    "claude-3-opus",
    "claude-3-sonnet",
    "claude-3-haiku",
    "claude-3-5-sonnet",
    "claude-3-5-haiku",
    "claude-3-7-sonnet"
];
const S = [
    [
        "opus",
        [
            4,
            5
        ]
    ],
    [
        "sonnet",
        [
            4,
            5
        ]
    ],
    [
        "haiku",
        [
            4,
            5
        ]
    ]
];
function Fre(e) {
    if (Ie() !== "vertex") {
        return false;
    }
    let r = Dn(e).replace(/[@-]\d{8}$/, "");
    if (/^claude-3(-|$)/.test(r)) {
        return true;
    }
    return /^claude-(opus|sonnet|haiku)-\d/.test(r) && !_hr(r, S);
}
function y() {
    try {
        let e = k("tengu_tool_search_unsupported_models", null);
        if (Array.isArray(e)) {
            return e;
        }
    } catch  {}
    return E;
}
const p = [];
function h(e) {
    if (e === null || Array.isArray(e) || typeof e !== "object") {
        return e;
    }
    let r = e;
    let o = Xc();
    let i = o !== undefined ? o : sU();
    if (typeof i === "string") {
        let u = i.toLowerCase();
        for (let n of Object.keys(r)){
            if (n !== "*" && n.length > 0 && u.includes(n.toLowerCase())) {
                return r[n];
            }
        }
    }
    return r["*"];
}
function VI() {
    let e = new Set;
    try {
        let r = h(k("tengu_non_deferrable_builtins", null));
        if (Array.isArray(r)) {
            for (let o of r){
                if (typeof o === "string") {
                    e.add(o);
                }
            }
        }
    } catch  {}
    try {
        let r = Nl()?.non_deferrable_builtins;
        if (Array.isArray(r)) {
            for (let o of r){
                if (typeof o === "string") {
                    e.add(o);
                }
            }
        }
    } catch  {}
    if (e.size === 0) {
        return p;
    }
    return [
        ...e
    ];
}
function zfs() {
    return Gr("tengu_shiny_stardust", false);
}
function m() {
    let e = Gr("tengu_quirky_kazoo", p);
    if (typeof e === "object" && e !== null) {
        return e;
    }
    return {};
}
function Gfs() {
    let e = m();
    if (Array.isArray(e)) {
        return e;
    }
    return Object.keys(e);
}
function Vfs(e) {
    let r = m();
    let o = Array.isArray(r) ? undefined : r[e];
    if (typeof o === "string") {
        return sA(o.replace(/\s+/g, " ").trim()) || undefined;
    }
}
const A = "tengu_drifting_heron";
function qfs() {
    return Gr(A, true) !== false;
}
function Ure(e) {
    let r = e.toLowerCase();
    let o = y();
    for (let i of o){
        if (r.includes(i.toLowerCase())) {
            return false;
        }
    }
    return true;
}
function Vh() {
    let e = cNe();
    if (e === "standard") {
        if (ea().claim("tool_search_optimistic_decision")) {
            t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${a.ENABLE_TOOL_SEARCH}, result=false`);
        }
        return false;
    }
    if (!a.ENABLE_TOOL_SEARCH && !l() && Ie() === "firstParty" && !vi()) {
        if (ea().claim("tool_search_optimistic_decision")) {
            t(`[ToolSearch:optimistic] disabled: ANTHROPIC_BASE_URL=${a.ANTHROPIC_BASE_URL} is not a first-party Anthropic host. Set ENABLE_TOOL_SEARCH=true (or auto / auto:N) if your proxy forwards tool_reference blocks.`);
        }
        return false;
    }
    if (ea().claim("tool_search_optimistic_decision")) {
        t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${a.ENABLE_TOOL_SEARCH}, result=true`);
    }
    return true;
}
function bhr() {
    return k("tengu_surface_failed_mcp_servers", true);
}
function nit() {
    return k("tengu_sorted_otter", false);
}
export { Z9t, _hr, Ico, cNe, Fre, VI, zfs, Gfs, Vfs, qfs, Ure, Vh, bhr, nit };
