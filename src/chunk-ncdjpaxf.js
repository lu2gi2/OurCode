import { q, B, cs, RS } from "/$bunfs/root/chunk-ctt36bn8.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { IRe, Zi, co, Jr, CY, Fn } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ZY, up } from "/$bunfs/root/chunk-x47nahfr.js";
import { Mc, kCs, kp, Wjn } from "/$bunfs/root/chunk-xb9cceab.js";
import { ws } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Ul, uZ, Lz, VE, Nz, Tut, Mzn, Un, _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { Cvo } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { si, ht, Xt, Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Af } from "/$bunfs/root/chunk-4r6b8efh.js";
import { yt } from "/$bunfs/root/chunk-f41czxrs.js";
import { AB } from "/$bunfs/root/chunk-6kvd67n5.js";
import { Pl } from "/$bunfs/root/chunk-9t51q67t.js";
import { Ro } from "/$bunfs/root/chunk-5aqxznmv.js";
import { pr } from "/$bunfs/root/chunk-e00q6jpd.js";
import { Or, TCe } from "/$bunfs/root/chunk-b7w13qrv.js";
import { mwr } from "/$bunfs/root/chunk-qhgrdyz1.js";
import { rt } from "/$bunfs/root/chunk-xx1j2680.js";
import { go, ii, zp, kut, zko } from "/$bunfs/root/chunk-2dp0fzyb.js";
const j = "bot_protected_tengu_atomic_magpie";
const K = new Set([
    "session",
    "cliArg"
]);
const x = new q(()=>({
        value: false
    }));
function y0n(e, n) {
    if (e === Mc && !kp(n) && "url" in n && typeof n.url === "string" && Wjn(n.url)) {
        cs(x).value = true;
    }
}
function Hre(e) {
    if (e !== pr && e !== Af || !(cs(x).value || a.CLAUDE_CODE_PROJECTS_SESSION || IRe(RS()))) {
        return false;
    }
    let n = Fn(j, false);
    return !(n.value === true && n.source === "payload" && !CY());
}
function p(toolName) {
    let n = typeof toolName !== "string";
    let o = !n && VE(toolName);
    return [
        pr,
        Af
    ].some((t)=>(n || o || Ul(toolName) === t) && Hre(t) && (!o || Tut(toolName, t)));
}
function E(e, toolName) {
    return !K.has(e) && Hre(toolName);
}
function w() {
    return Hre(pr) || Hre(Af);
}
function k(e) {
    if (typeof e !== "object" || e === null) {
        return true;
    }
    if (e.type !== "addRules" && e.type !== "replaceRules" && e.type !== "removeRules") {
        return false;
    }
    let n = "rules" in e ? e.rules : undefined;
    return !Array.isArray(n) || n.some((o)=>typeof o !== "object" || o === null || !("toolName" in o) || typeof o.toolName !== "string" || "ruleContent" in o && o.ruleContent !== undefined && typeof o.ruleContent !== "string");
}
function I(e, n) {
    if (e.type !== "removeRules" && e.type !== "replaceRules" || e.behavior === "allow") {
        return;
    }
    if (e.type === "replaceRules") {
        if (n === undefined) {
            if (e.rules.length === 0) {
                return [];
            }
            return [
                {
                    type: "addRules",
                    rules: e.rules,
                    behavior: e.behavior,
                    destination: e.destination
                }
            ];
        }
        let t = (e.behavior === "deny" ? n.alwaysDenyRules : n.alwaysAskRules) ?? {};
        let r = Object.hasOwn(t, e.destination) ? t[e.destination] : undefined;
        let s = Array.isArray(r) ? r : [];
        let l = (m)=>_n(Un(m));
        let i = new Set(e.rules.map((m)=>l(_n(m))));
        let u = s.map((m)=>Un(m)).filter((m)=>p(m.toolName) && !i.has(l(_n(m))));
        if (u.length === 0) {
            return undefined;
        }
        return [
            {
                ...e,
                rules: [
                    ...e.rules,
                    ...u
                ]
            }
        ];
    }
    let o = e.rules.filter((t)=>!p(t.toolName));
    if (o.length === e.rules.length) {
        return;
    }
    if (o.length === 0) {
        return [];
    }
    return [
        {
            ...e,
            rules: o
        }
    ];
}
function _0n(e, n) {
    if (!w()) {
        return e;
    }
    let o = false;
    let t = e.flatMap((r)=>{
        if (k(r)) {
            o = true;
            return [];
        }
        let s = I(r, n);
        if (s !== undefined) {
            o = true;
            return s;
        }
        if (r.type !== "addRules" && r.type !== "replaceRules" || r.behavior !== "allow") {
            return [
                r
            ];
        }
        let l = r.rules.filter((i)=>!p(i.toolName));
        if (l.length === r.rules.length) {
            return [
                r
            ];
        }
        o = true;
        if (l.length === 0) {
            return [];
        }
        return [
            {
                ...r,
                rules: l
            }
        ];
    });
    if (o) {
        return t;
    }
    return e;
}
function mRt(e, n) {
    let toolName = zp(e);
    if (toolName === Af) {
        return {
            toolName
        };
    }
    let t = typeof n === "object" && n !== null && "url" in n ? n.url : undefined;
    if (toolName !== pr || typeof t !== "string") {
        return;
    }
    try {
        let r = new URL(t).hostname;
        if (r.includes("*")) {
            return undefined;
        }
        return {
            toolName,
            ruleContent: `domain:${r}`
        };
    } catch  {
        return;
    }
}
function L4(e, n, o) {
    if (!w()) {
        return e;
    }
    let t = false;
    let r = e.flatMap((s)=>{
        if (k(s)) {
            t = true;
            return [];
        }
        let l = I(s, o);
        if (l !== undefined) {
            t = true;
            return l;
        }
        if (s.type !== "addRules" && s.type !== "replaceRules" || s.behavior !== "allow") {
            return [
                s
            ];
        }
        let i = s.rules.filter((f)=>p(f.toolName));
        if (i.length === 0) {
            return [
                s
            ];
        }
        t = true;
        let u = s.rules.filter((f)=>!p(f.toolName));
        let m = s.type === "addRules" && n !== undefined ? i.filter((f)=>Ul(f.toolName) === n.toolName && f.ruleContent === n.ruleContent) : [];
        return [
            ...u.length > 0 ? [
                {
                    ...s,
                    rules: u
                }
            ] : [],
            ...m.length > 0 ? [
                {
                    ...s,
                    destination: "session",
                    rules: m
                }
            ] : []
        ];
    });
    if (t) {
        return r;
    }
    return e;
}
const Y = new q(()=>new Set);
function pco(e, n) {
    for (let o of n){
        M().add(ii(e, o));
    }
}
function h(e) {
    if (!e.startsWith("mcp__")) {
        return false;
    }
    for (let n of M()){
        if (e === n || kut(e, n)) {
            return true;
        }
    }
    return false;
}
function M() {
    return Y.of(B().host);
}
const z = [];
const b0n = [
    ...z,
    "python",
    "python3",
    "python2",
    "node",
    "deno",
    "tsx",
    "ruby",
    "perl",
    "php",
    "lua",
    "npx",
    "bunx",
    "npm run",
    "yarn run",
    "pnpm run",
    "bun run",
    "bash",
    "sh",
    "ssh"
];
const fco = [
    ...b0n,
    "zsh",
    "fish",
    "eval",
    "exec",
    "env",
    "xargs",
    "sudo"
];
const dhr = [
    "curl",
    "wget",
    "kubectl",
    "aws",
    "gcloud",
    "gsutil"
];
const uhr = [];
const v = new Set([
    ...dhr,
    ...uhr
]);
const L = {
    kubectl: new Set([
        "exec",
        "apply",
        "create",
        "delete",
        "run",
        "cp",
        "port-forward",
        "proxy",
        "patch",
        "edit",
        "replace",
        "attach",
        "debug",
        "scale",
        "rollout",
        "drain",
        "cordon",
        "taint"
    ]),
    ...false
};
const D = [
    ...fco,
    ...[]
];
function phr(e, n) {
    if (e !== Be) {
        return false;
    }
    if (n === undefined || n === "") {
        return true;
    }
    if (/^[\s*]+$/.test(n)) {
        return true;
    }
    return S0n(n, D);
}
function S0n(e, n) {
    let o = e.trim().toLowerCase();
    if (o === "*") {
        return true;
    }
    for (let t of n){
        let r = t.toLowerCase();
        if (o === r) {
            return true;
        }
        if (o === `${r}:*` || o === `${r} *`) {
            return true;
        }
        if (o === `${r}*`) {
            return true;
        }
        if (o.startsWith(`${r} `) && o.endsWith("*")) {
            let s = o.slice(r.length + 1);
            if (v.has(r)) {
                if (/[$`]/.test(s)) {
                    return true;
                }
                let l = L[r];
                if (l === "all") {
                    return true;
                }
                let i = s.replace(/[\s:*]+$/, "").split(/\s+/).filter(Boolean);
                let u = 0;
                for(; u < i.length; u++){
                    let f = i[u];
                    if (!f.startsWith("-")) {
                        break;
                    }
                    if (!f.includes("=") && u + 1 < i.length && !i[u + 1].startsWith("-")) {
                        u++;
                    }
                }
                let m = i[u];
                if (m === undefined) {
                    if ((r === "curl" || r === "wget") && i.some((f)=>f.includes("://"))) {
                        continue;
                    }
                    return true;
                }
                if (l?.has(m)) {
                    return true;
                }
                continue;
            }
            if (s.startsWith("-")) {
                let l = s.slice(0, -1);
                if (!(/^python[\d.]*$/.test(r) && /^-m\s+\w+\.[\w.]+(\s*:|\s+)$/.test(l))) {
                    return true;
                }
            }
        }
    }
    return false;
}
function fhr(e, n) {
    if (e !== Ct) {
        return false;
    }
    if (n === undefined || n === "") {
        return true;
    }
    if (/^[\s*]+$/.test(n)) {
        return true;
    }
    let o = n.trim().toLowerCase();
    if (o === "*") {
        return true;
    }
    let t = [
        ...b0n,
        "pwsh",
        "powershell",
        "cmd",
        "wsl",
        "iex",
        "invoke-expression",
        "icm",
        "invoke-command",
        "start-process",
        "saps",
        "start",
        "start-job",
        "sajb",
        "start-threadjob",
        "invoke-wmimethod",
        "iwmi",
        "invoke-cimmethod",
        "icim",
        "wmic",
        "register-objectevent",
        "register-engineevent",
        "register-wmievent",
        "register-scheduledjob",
        "new-pssession",
        "nsn",
        "enter-pssession",
        "etsn",
        "add-type",
        "new-object"
    ];
    for (let r of t){
        if (o === r) {
            return true;
        }
        if (o === `${r}:*`) {
            return true;
        }
        if (o === `${r}*`) {
            return true;
        }
        if (o === `${r} *`) {
            return true;
        }
        if (o.startsWith(`${r} -`) && o.endsWith("*")) {
            return true;
        }
        let s = r.indexOf(" ");
        let l = s === -1 ? `${r}.exe` : `${r.slice(0, s)}.exe${r.slice(s)}`;
        if (o === l) {
            return true;
        }
        if (o === `${l}:*`) {
            return true;
        }
        if (o === `${l}*`) {
            return true;
        }
        if (o === `${l} *`) {
            return true;
        }
        if (o.startsWith(`${l} -`) && o.endsWith("*")) {
            return true;
        }
    }
    return false;
}
function gNs(e, n) {
    return Ul(e) === yt;
}
function X(e) {
    return e === Pl;
}
class F {
    verdicts = new Map;
    lookup(e) {
        return this.verdicts.get(e);
    }
    remember(e, n) {
        this.verdicts.set(e, n);
    }
    reset() {
        this.verdicts.clear();
    }
}
const U = new F;
function sNe() {
    return ZY() || Cvo();
}
function gRt(e, n) {
    let o = `${e}\x00${n ?? ""}`;
    let t = U.lookup(o);
    if (t !== undefined) {
        return t;
    }
    let r = phr(e, n) || fhr(e, n) || gNs(e, n) || X(e) || e === import.meta.require("/$bunfs/root/chunk-0b8kae07.js").APPIFACT_REPL_TOOL_NAME;
    U.remember(o, r);
    return r;
}
function Hfs(e) {
    return h(zp(e)) || ZY() && gRt(e.name, undefined);
}
function Dre(e, n) {
    if ((e === Be || e === Ct) && sNe()) {
        return true;
    }
    if (h(e)) {
        return true;
    }
    return gRt(e, n);
}
function Dfs(e) {
    if (e === Be || e === Ct) {
        if (sNe()) {
            return undefined;
        }
        return e;
    }
    if (AB(e) || Dre(e, undefined) || w0n(e)) {
        return;
    }
    if (e === Xt || e === Zi) {
        return ht;
    }
    return e;
}
const Q = new Set(Array.from(kCs, (e)=>ii(Mc, e)));
function w0n(e) {
    return Q.has(e);
}
const TB = [
    ...ws,
    "cliArg",
    "command",
    "session",
    "toolsNarrowing",
    "mcpServerPolicy",
    "hostCredential"
];
const iNe = [
    "toolsNarrowing",
    "command"
];
const Z = new Set([
    import.meta.require("/$bunfs/root/chunk-2k674bxp.js").END_CONVERSATION_TOOL_NAME
]);
function Lre(e) {
    return !e.mcpInfo && Z.has(e.name);
}
function NM(e) {
    if (si(e.mode, e.servedCall === true)) {
        let t = a.CLAUDE_CODE_EVAL_CONFINED ? {
            cliArg: e.alwaysAllowRules.cliArg
        } : e.alwaysAllowRules;
        let r = [];
        for (let s of TB){
            let l = t[s];
            if (l === undefined) {
                continue;
            }
            for (let i of l){
                let ruleValue = Un(i);
                if (Dre(ruleValue.toolName, ruleValue.ruleContent)) {
                    continue;
                }
                if (w0n(ruleValue.toolName)) {
                    continue;
                }
                if (E(s, ruleValue.toolName)) {
                    continue;
                }
                r.push({
                    source: s,
                    ruleBehavior: "allow",
                    ruleValue
                });
            }
        }
        return r;
    }
    if (a.CLAUDE_CODE_EVAL_CONFINED) {
        return aNe({
            cliArg: e.alwaysAllowRules.cliArg
        }, "allow");
    }
    let n = aNe(e.alwaysAllowRules, "allow");
    let o;
    for (let [t, r] of n.entries()){
        if (E(r.source, r.ruleValue.toolName)) {
            o ??= n.slice(0, t);
        } else {
            o?.push(r);
        }
    }
    return o ?? n;
}
function aNe(e, ruleBehavior) {
    let o = [];
    for (let t of TB){
        let r = e[t];
        if (r === undefined) {
            continue;
        }
        for (let s of r){
            o.push({
                source: t,
                ruleBehavior,
                ruleValue: Un(s)
            });
        }
    }
    return o;
}
function Bc(e) {
    return aNe(e.alwaysDenyRules, "deny");
}
function xm(e) {
    return aNe(e.alwaysAskRules, "ask");
}
function V9t(e, n, o = {}) {
    if (n.ruleValue.ruleContent !== undefined) {
        return false;
    }
    return P(e, n, o);
}
function P(e, n, { proxyExpansion = false, globMatching = false, toolAliases } = {}, s = O(n), l = R(e, toolAliases)) {
    let l_name = l.name;
    if (n.ruleValue.toolName === l_name) {
        return true;
    }
    let u = "familyParentToolName" in e ? e.familyParentToolName : undefined;
    if (u !== undefined && e.mcpInfo === undefined && n.ruleValue.toolName === u) {
        return true;
    }
    if (proxyExpansion && uZ(n.ruleValue.toolName, toolAliases).includes(l_name)) {
        return true;
    }
    let { matchesGlob } = s;
    if (globMatching && matchesGlob !== undefined && (matchesGlob(l_name) || proxyExpansion && l.aliasSources().some(matchesGlob))) {
        return true;
    }
    return s.coversMcpTool(l.mcpInfo());
}
function O({ ruleValue: { toolName } }) {
    let n;
    let o;
    return {
        matchesGlob: VE(toolName) ? (t)=>(n ??= Mzn(toolName))(t) : undefined,
        coversMcpTool: (t)=>(o ??= zko(toolName))(t)
    };
}
function R(e, toolAliases) {
    let o = zp(e);
    let t;
    let r;
    return {
        name: o,
        mcpInfo: ()=>{
            if (r === undefined) {
                return r = go(o);
            }
            return r;
        },
        aliasSources: ()=>t ??= Lz(o, toolAliases)
    };
}
function x5(e, n) {
    return NM(e).find((o)=>V9t(n, o)) || null;
}
function T(e) {
    return e.source !== "cliArg" && e.source !== "toolsNarrowing";
}
function Wx(e, n, o, t = O(o), r) {
    let s = {
        proxyExpansion: T(o),
        globMatching: true,
        toolAliases: e.toolAliases
    };
    if (P(n, o, s, t, r)) {
        return true;
    }
    if (("aliasSkillToolNames" in n ? n.aliasSkillToolNames : undefined)?.some((u)=>P({
            name: u
        }, o, s, t))) {
        return true;
    }
    let i = "packagingAliasSkillToolNames" in n ? n.packagingAliasSkillToolNames : undefined;
    if (i === undefined || VE(o.ruleValue.toolName) && !up()) {
        return false;
    }
    return i.some((u)=>P({
            name: u
        }, o, s, t));
}
function Go(e, n, o) {
    if (Lre(n)) {
        return null;
    }
    let t;
    return (o ?? Bc(e)).find((r)=>S(n, r, e, undefined, t ??= R(n, e.toolAliases))) || null;
}
function mco(e) {
    return /^[\s*]+$/.test(e);
}
function ee(ruleContent) {
    return ruleContent.startsWith("//") && /^\/(?:\*\*\/)?\*+(?:\/\*\*)?$/.test(ruleContent.replace(/\/{2,}/g, "/"));
}
const V = [
    ht,
    Xt,
    Zi
];
const ask = [
    rt,
    Jr,
    co
];
const ne = new Map([
    [
        rt,
        {
            deny: [
                ...ask,
                ht,
                Xt
            ],
            ask
        }
    ],
    [
        ht,
        {
            deny: V,
            ask: V
        }
    ]
]);
function y({ ruleBehavior, ruleValue: { toolName, ruleContent } }, t) {
    if (ruleContent === undefined || ruleBehavior === "allow") {
        return false;
    }
    if (toolName === Be) {
        return t === Be && mco(ruleContent);
    }
    return ee(ruleContent) && (ne.get(toolName)?.[ruleBehavior] ?? []).includes(t);
}
function S(e, n, o, t, r) {
    if (n.ruleValue.ruleContent === undefined) {
        return Wx(o, e, n, t, r);
    }
    let { name, aliasSources } = r ?? R(e, o.toolAliases);
    let i = n.ruleValue.toolName === name;
    let u = T(n);
    return aliasSources().some((m)=>m !== name && (u && y(n, m) || i && y(H(m, n), m)));
}
function H(toolName, n) {
    return {
        ...n,
        ruleValue: {
            ...n.ruleValue,
            toolName
        }
    };
}
function oe(toolName) {
    if (VE(toolName)) {
        return true;
    }
    let n = go(toolName);
    return n !== null && n.toolName === undefined;
}
function gco(e, n) {
    let names = new Set;
    let parentNames = new Set;
    let patterns = [];
    let withContent = [];
    for (let rule of n){
        let { toolName, ruleContent } = rule.ruleValue;
        if (ruleContent !== undefined) {
            if (Object.entries(e.toolAliases ?? {}).some(([f, c])=>y(rule, f) || c === toolName && y(H(f, rule), f))) {
                withContent.push(rule);
            }
            continue;
        }
        if (oe(toolName)) {
            patterns.push({
                rule,
                ruleName: O(rule)
            });
            continue;
        }
        parentNames.add(toolName);
        let m = T(rule) ? uZ(toolName, e.toolAliases) : [
            toolName
        ];
        for (let f of m){
            names.add(f);
        }
    }
    return {
        names,
        parentNames,
        patterns,
        withContent
    };
}
function qce(e) {
    let n = Bc(e);
    return {
        rules: n,
        index: gco(e, n)
    };
}
function y4e(e, n, o) {
    if (Lre(o) || n.names.size === 0 && n.patterns.length === 0 && n.withContent.length === 0) {
        return false;
    }
    let t = R(o, e.toolAliases);
    if (n.names.has(t.name)) {
        return true;
    }
    let r = "familyParentToolName" in o ? o.familyParentToolName : undefined;
    if (r !== undefined && o.mcpInfo === undefined && n.parentNames.has(r)) {
        return true;
    }
    if (("aliasSkillToolNames" in o ? o.aliasSkillToolNames : undefined)?.some((i)=>n.names.has(i))) {
        return true;
    }
    if (("packagingAliasSkillToolNames" in o ? o.packagingAliasSkillToolNames : undefined)?.some((i)=>n.names.has(i))) {
        return true;
    }
    return n.patterns.some(({ rule, ruleName })=>S(o, rule, e, ruleName, t)) || t.aliasSources().length > 0 && n.withContent.some((i)=>S(o, i, e, undefined, t));
}
function Lfs(e, n) {
    if (!Lre(n)) {
        return false;
    }
    if (NM(e).some((t)=>t.ruleValue.toolName === n.name)) {
        return false;
    }
    return Bc(e).some((t)=>V9t(n, t, {
            proxyExpansion: T(t),
            globMatching: true,
            toolAliases: e.toolAliases
        }));
}
function Nre(e, n, o) {
    return Bc(e).find((t)=>t.ruleValue.toolName === n && t.ruleValue.ruleContent === o) || null;
}
function Nfs(e, n, o) {
    return xm(e).find((t)=>t.ruleValue.toolName === n && t.ruleValue.ruleContent === o) || null;
}
function $fs(e, n, o) {
    let t = new Set;
    for (let r of Bc(n)){
        if (r.ruleValue.toolName === o && r.ruleValue.ruleContent !== undefined) {
            t.add(r.ruleValue.ruleContent);
        }
    }
    return e.filter((r)=>!t.has(r.agentType));
}
function lc(e, n, o) {
    if (Lre(n)) {
        return null;
    }
    let t;
    return (o ?? xm(e)).find((r)=>S(n, r, e, undefined, t ??= R(n, e.toolAliases))) || null;
}
function re(e) {
    if (e === undefined || e === null) {
        return null;
    }
    if (typeof e !== "object") {
        return String(e);
    }
    return null;
}
function te(e) {
    let n = e.indexOf(":");
    if (n <= 0) {
        return null;
    }
    let o = e.slice(0, n).trim();
    let expected = e.slice(n + 1).trim();
    if (o === "" || expected === "") {
        return null;
    }
    return {
        key: o,
        expected
    };
}
function eit(e, n) {
    return `Permission to use ${e} with ${n.ruleValue.ruleContent} has been denied.`;
}
function Sh(e, n, o, t) {
    let r = zp(n);
    let s = [
        ..."aliasSkillToolNames" in n ? n.aliasSkillToolNames ?? [] : [],
        ..."packagingAliasSkillToolNames" in n ? n.packagingAliasSkillToolNames ?? [] : []
    ];
    let l = [
        [
            r,
            false
        ],
        ...s.map((u)=>[
                u,
                false
            ]),
        ...Lz(r, e.toolAliases).map((u)=>[
                u,
                true
            ])
    ];
    for (let [u, m] of l){
        let f = D_e(e, u, t).filter((c)=>!m || T(c));
        for (let [c = "", C] of new Map(f.map((d)=>[
                d.ruleValue.ruleContent,
                d
            ]))){
            let d = te(c);
            if (d === null) {
                continue;
            }
            let { key, expected } = d;
            if (key === n.ruleContentField) {
                continue;
            }
            let A = key === TCe && !Object.hasOwn(o, key) && Object.hasOwn(o, Or) ? Or : key;
            if (!Object.hasOwn(o, A)) {
                continue;
            }
            let _ = re(o[A]);
            if (_ === null) {
                continue;
            }
            if (Nz(expected, _.trim())) {
                return C;
            }
            if (r === Ro && A === "skill") {
                let W = _.trim();
                let b = mwr(W);
                if (b !== undefined) {
                    if ((!expected.includes("*") || up()) && Nz(expected, b)) {
                        return C;
                    }
                }
            }
        }
    }
    let i = "familyParentToolName" in n ? n.familyParentToolName : undefined;
    if (i !== undefined && n.mcpInfo === undefined && n.toFamilyParentInput !== undefined) {
        return Sh(e, {
            name: i,
            ruleContentField: n.ruleContentField
        }, n.toFamilyParentInput(o), t);
    }
    return null;
}
function $re(e, n, o) {
    return jD(e, zp(n), o);
}
function jD(e, n, o) {
    let t = new Map;
    for (let r of D_e(e, n, o)){
        if (r.ruleValue.ruleContent !== undefined) {
            t.set(r.ruleValue.ruleContent, r);
        }
    }
    return t;
}
function D_e(e, n, o) {
    let t = [];
    switch(o){
        case "allow":
            t = NM(e);
            break;
        case "deny":
            t = Bc(e);
            break;
        case "ask":
            t = xm(e);
            break;
    }
    let r = [];
    for (let s of t){
        if (s.ruleValue.toolName === n && s.ruleValue.ruleContent !== undefined && s.ruleBehavior === o) {
            r.push(s);
        }
    }
    return r;
}
export { y0n, Hre, _0n, mRt, L4, pco, b0n, fco, dhr, uhr, phr, S0n, fhr, gNs, sNe, gRt, Hfs, Dre, Dfs, w0n, TB, iNe, Lre, NM, aNe, Bc, xm, V9t, x5, Wx, Go, mco, gco, qce, y4e, Lfs, Nre, Nfs, $fs, lc, eit, Sh, $re, jD, D_e };
