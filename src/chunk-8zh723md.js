import { we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Kdt } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { hpt } from "/$bunfs/root/chunk-bd805sh6.js";
import { _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { fe as read } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { s0 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Be } from "/$bunfs/root/chunk-6dwnw6av.js";
import { LLn } from "/$bunfs/root/chunk-tn496ms6.js";
import { KDn, nCe, RQ } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { isAbsolute } from "path";
function S() {
    return {
        sources: m(),
        read,
        rules: nCe
    };
}
var m = ()=>{
    let { gateProject } = KDn();
    let e = s0({
        onIndeterminate: "tracked"
    });
    return [
        ...gateProject ? [
            [
                "projectSettings",
                ".claude/settings.json"
            ]
        ] : [],
        ...e ? [
            [
                "localSettings",
                ".claude/settings.local.json"
            ]
        ] : []
    ];
};
function t3n(t) {
    if (t === null) {
        return false;
    }
    if (t.statusLine) {
        return true;
    }
    if (t.fileSuggestion) {
        return true;
    }
    if (t.subagentStatusLine) {
        return true;
    }
    if (!t.hooks) {
        return false;
    }
    for (let e of Object.values(t.hooks)){
        if (e.length > 0) {
            return true;
        }
    }
    return false;
}
function dNr(t = {
    sources: [
        [
            "projectSettings",
            ".claude/settings.json"
        ],
        [
            "localSettings",
            ".claude/settings.local.json"
        ]
    ],
    read,
    rules: nCe
}, e = we()) {
    let s = [];
    for (let [n, c] of t.sources){
        if (t3n(t.read(n))) {
            s.push(c);
        }
    }
    let r = LLn(e);
    if (r !== null) {
        s.push(RQ(r));
    }
    return s;
}
function l(t) {
    return t.some((e)=>e.ruleBehavior === "allow" && (e.ruleValue.toolName === Be || e.ruleValue.toolName.startsWith(`${Be}(`)));
}
const j = /[\x00-\x1f\x7f-\x9f\u2028\u2029]|\p{Cf}/gu;
const a = 60;
function n3n(t) {
    let e = hpt(t).replace(j, "").trim();
    if (e.length > a) {
        return `${ne(e, a)}\u2026`;
    }
    return e;
}
const R = new Set([
    Be,
    "PowerShell",
    "Write",
    "Edit",
    "MultiEdit",
    "NotebookEdit",
    "WebFetch",
    "WebSearch"
]);
function g(t) {
    let { toolName, ruleContent } = t.ruleValue;
    let r = R.has(toolName) || toolName.startsWith("mcp__");
    let n = ruleContent === undefined;
    if (r) {
        if (n) {
            return 0;
        }
        return 1;
    }
    if (n) {
        return 2;
    }
    return 3;
}
function vgt(t = S()) {
    let e = [];
    let s = [];
    for (let [i, o] of t.sources){
        let u = t.rules(i).filter((d)=>d.ruleBehavior === "allow");
        if (u.length > 0) {
            e.push(o);
            s.push(...u);
        }
    }
    let s_length = s.length;
    s.sort((i, o)=>g(i) - g(o));
    let n = new Set;
    let rules = [];
    for (let i of s){
        let o = n3n(_n(i.ruleValue));
        if (o.length > 0 && !n.has(o)) {
            n.add(o);
            rules.push(o);
        }
    }
    return {
        rules,
        sources: e,
        rawCount: s_length
    };
}
function p(t) {
    if (isAbsolute(t) || t.startsWith("~")) {
        return 0;
    }
    if (t.includes("..")) {
        return 1;
    }
    return 2;
}
function Egt(t = S()) {
    let e = [];
    let s = [];
    for (let [i, o] of t.sources){
        let u = t.read(i)?.permissions?.additionalDirectories ?? [];
        if (u.length > 0) {
            e.push(o);
            s.push(...u);
        }
    }
    let s_length = s.length;
    let n = new Set;
    let dirs = [];
    for (let i of s){
        let o = n3n(i);
        if (o.length > 0 && !n.has(o)) {
            n.add(o);
            dirs.push(o);
        }
    }
    dirs.sort((i, o)=>p(i) - p(o));
    return {
        dirs,
        sources: e,
        rawCount: s_length
    };
}
function uNr() {
    let t = [];
    let e = nCe("projectSettings");
    if (l(e)) {
        t.push(".claude/settings.json");
    }
    let s = nCe("localSettings");
    if (l(s)) {
        t.push(".claude/settings.local.json");
    }
    return t;
}
function A_(t, e) {
    if (t.length === 0) {
        return "";
    }
    let s = e === 0 ? undefined : e;
    if (!s || t.length <= s) {
        if (t.length === 1) {
            return t[0];
        }
        if (t.length === 2) {
            return `${t[0]} and ${t[1]}`;
        }
        let c = t.at(-1);
        return `${t.slice(0, -1).join(", ")}, and ${c}`;
    }
    let r = t.slice(0, s);
    let n = t.length - s;
    if (r.length === 1) {
        return `${r[0]} and ${n} more`;
    }
    return `${r.join(", ")}, and ${n} more`;
}
function r3n(t) {
    return !!t?.otelHeadersHelper;
}
function pNr() {
    let t = [];
    let e = read("projectSettings");
    if (r3n(e)) {
        t.push(".claude/settings.json");
    }
    let s = read("localSettings");
    if (r3n(s)) {
        t.push(".claude/settings.local.json");
    }
    return t;
}
function IFt() {
    let t = [];
    if (read("projectSettings")?.autoMemoryDirectory !== undefined) {
        t.push(".claude/settings.json");
    }
    if (read("localSettings")?.autoMemoryDirectory !== undefined) {
        t.push(".claude/settings.local.json");
    }
    return t;
}
function o3n(t) {
    return !!t?.apiKeyHelper;
}
function fNr() {
    let t = [];
    let e = read("projectSettings");
    if (o3n(e)) {
        t.push(".claude/settings.json");
    }
    let s = read("localSettings");
    if (o3n(s)) {
        t.push(".claude/settings.local.json");
    }
    return t;
}
function s3n(t) {
    return !!(t?.awsAuthRefresh || t?.awsCredentialExport);
}
function mNr() {
    let t = [];
    let e = read("projectSettings");
    if (s3n(e)) {
        t.push(".claude/settings.json");
    }
    let s = read("localSettings");
    if (s3n(s)) {
        t.push(".claude/settings.local.json");
    }
    return t;
}
function i3n(t) {
    return !!t?.gcpAuthRefresh;
}
function gNr() {
    let t = [];
    let e = read("projectSettings");
    if (i3n(e)) {
        t.push(".claude/settings.json");
    }
    let s = read("localSettings");
    if (i3n(s)) {
        t.push(".claude/settings.local.json");
    }
    return t;
}
function a3n(t) {
    return !!t?.proxyAuthHelper;
}
function hNr() {
    let t = [];
    let e = read("projectSettings");
    if (a3n(e)) {
        t.push(".claude/settings.json");
    }
    let s = read("localSettings");
    if (a3n(s)) {
        t.push(".claude/settings.local.json");
    }
    return t;
}
function f(t) {
    if (!t?.env) {
        return false;
    }
    return Object.entries(t.env).some(([e, s])=>!Kdt(e, s));
}
function OFt() {
    let t = [];
    let e = read("projectSettings");
    if (f(e)) {
        t.push(".claude/settings.json");
    }
    let s = read("localSettings");
    if (f(s)) {
        t.push(".claude/settings.local.json");
    }
    return t;
}
export { t3n, dNr, n3n, vgt, Egt, uNr, A_, r3n, pNr, IFt, o3n, fNr, s3n, mNr, i3n, gNr, a3n, hNr, OFt };
