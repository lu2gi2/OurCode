import { Ept, aRo, jon, x0, Z_, qm, Lf, lt, B, iPo, VIo, qIo, z2n, RPr, Upt, nOo, li } from "/$bunfs/root/chunk-ctt36bn8.js";
import { pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _, MZ, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ml, ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { of, mIt, vUn, as, We, Ube, Ln, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Mb, q_, h_, vF, Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { da, ctn, PCs } from "/$bunfs/root/chunk-xb9cceab.js";
import { Ynn, jxe } from "/$bunfs/root/chunk-6gk7mpsm.js";
import { dnn, wxs, sUe, unn, uEo, RP } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Ul, TUe, Ozn } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { Ta } from "/$bunfs/root/chunk-nj0630nv.js";
import { ea } from "/$bunfs/root/chunk-75wzvwyz.js";
import { sl } from "/$bunfs/root/chunk-pp3y3t61.js";
import { wo } from "/$bunfs/root/chunk-6s83kxfy.js";
import { It, Qce, fV } from "/$bunfs/root/chunk-4r6b8efh.js";
import { L4e, OB } from "/$bunfs/root/chunk-e0hrcpx7.js";
import { Lhs } from "/$bunfs/root/chunk-f41czxrs.js";
import { Wye, Gne } from "/$bunfs/root/chunk-716kq0mx.js";
import { Lre, Bc, Go, mco, gco, qce, y4e } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { va, yh, xM } from "/$bunfs/root/chunk-7aeb6f08.js";
import { VHn, mst, UKe, gst } from "/$bunfs/root/chunk-gd43pmvk.js";
import { FW } from "/$bunfs/root/chunk-5aqxznmv.js";
import { Sl } from "/$bunfs/root/chunk-qbxhbxwh.js";
import { pr } from "/$bunfs/root/chunk-e00q6jpd.js";
import { Gjn } from "/$bunfs/root/chunk-5mfg4ngf.js";
import { go, Bo, ii } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { In } from "/$bunfs/root/chunk-xwkmkvm4.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { isDeepStrictEqual } from "util";
const SYMBOL_CLAUDE_CODE_HOST_ONLY_NATIVE_TOOL = Symbol.for("claude-code.hostOnlyNativeTool");
function _as(e) {
    Object.defineProperty(e, SYMBOL_CLAUDE_CODE_HOST_ONLY_NATIVE_TOOL, {
        value: true,
        enumerable: true
    });
    return e;
}
function j2(e) {
    return SYMBOL_CLAUDE_CODE_HOST_ONLY_NATIVE_TOOL in e;
}
function US(e) {
    if (e.name.startsWith(FW)) {
        return "skill_tool";
    }
    let n = String(Ln(e.name));
    if (n !== e.name) {
        return n;
    }
    if (e.mcpInfo !== undefined) {
        return "mcp_tool";
    }
    if (e.name.startsWith("eval_registered__")) {
        return "eval_registered";
    }
    if (e.uiTableKey !== undefined || e.name.includes("__")) {
        return "dynamic_tool";
    }
    return e.name;
}
const Uro = "bypassPermissions not supported in restricted mode";
function Tas(e) {
    if (e.restricted && (e.permissionMode === "bypassPermissions" || e.allowDangerouslySkipPermissions)) {
        return Uro;
    }
}
function Aas(e) {
    if (e.some((n)=>n.startsWith("preset:"))) {
        return new Set;
    }
    return new Set(e);
}
function e5t(e, n) {
    let o = [
        ...e,
        pr
    ].filter((s)=>!n.has(s));
    let r = [
        ...n.has(Be) ? [] : [
            TUe
        ],
        ...n.has(pr) ? [] : [
            Ozn
        ]
    ];
    let d = [
        ...[
            ...dnn
        ].map((s)=>ii(s, Gjn)),
        ...wxs.map((s)=>ii(da, `${s}${Gjn}`)),
        ii(sUe, `${unn}${Gjn}`)
    ];
    return [
        ...o,
        ...r,
        ctn,
        PCs,
        ...d
    ];
}
const Ze = [
    "default"
];
function Dpr(e) {
    let n = e.toLowerCase();
    if (!Ze.includes(n)) {
        return null;
    }
    return n;
}
function pOn(e) {
    return new Set([
        ...e.filter((n)=>n.enablesCodeExecution).map((n)=>n.name),
        Ct
    ]);
}
function Lpr(e) {
    return e.filter((n)=>n.isEnabled()).map((n)=>n.name);
}
function i5(e, n) {
    let o = [
        ...Bc(n),
        ...en(e, n)
    ];
    let r = gco(n, o);
    return e.filter((d)=>{
        if (Ce(n, d, o, r) || d.mcpInfo?.effectiveMaxPermission === "blocked") {
            return false;
        }
        if (!dAt(n, d)) {
            return true;
        }
        if (ea().claim(`tool_outside_launch_list:${d.name}`)) {
            t(`${US(d)} is not on this session's --tools list and no deny rule names it; withheld. Name it in --tools to offer it`, {
                level: "warn"
            });
            i("tengu_tool_withheld_outside_launch_list", {
                toolName: Ln(US(d))
            });
        }
        return false;
    });
}
function dAt({ toolsKeptByLaunchList }, n) {
    return !(toolsKeptByLaunchList === undefined || yh(n) || n.mcpInfo !== undefined || j2(n) || Lre(n) || toolsKeptByLaunchList.includes(n.name) || n.familyParentToolName !== undefined && toolsKeptByLaunchList.includes(n.familyParentToolName));
}
function Jqe(e, n, o = Bc(e), r) {
    return Ce(e, n, o, r);
}
function Ce(e, n, o, r) {
    let d = (s)=>{
        if (r !== undefined) {
            return y4e(e, r, s);
        }
        return Go(e, s, o) !== null;
    };
    if (d(n)) {
        return true;
    }
    if (n.underlyingV1ToolName && d({
        name: n.underlyingV1ToolName
    })) {
        return true;
    }
    if (n.mcpInfo === undefined) {
        let s = Wye(n.name);
        if (s !== undefined && d(s) && s.isEnabled()) {
            return true;
        }
    }
    if (j2(n) && Je(e, o)) {
        return true;
    }
    {
        let { APPIFACT_REPL_TOOL_NAME } = import.meta.require("/$bunfs/root/chunk-0b8kae07.js");
        if (n.mcpInfo === undefined && n.name === APPIFACT_REPL_TOOL_NAME && fOn(e, o.filter((l)=>l.source !== "toolsNarrowing")) !== null) {
            return true;
        }
    }
    return false;
}
function uAt(e, n) {
    if (!iPo().has(n.name)) {
        return false;
    }
    if (sl("hipaa")) {
        return false;
    }
    let o = Bc(e).filter((r)=>r.source !== "toolsNarrowing");
    return !Jqe(e, n, o);
}
function Je(e, n) {
    return n.some((o)=>o.ruleValue.toolName === Be);
}
function fOn(e, n) {
    let o = e.toolAliases?.[Be];
    let r = [
        Be,
        ...o !== undefined ? [
            o
        ] : []
    ];
    for (let d of r){
        let s = Go(e, {
            name: d
        }, n);
        if (s !== null) {
            return s;
        }
    }
    return n.find((d)=>r.includes(d.ruleValue.toolName) && d.ruleValue.ruleContent !== undefined && mco(d.ruleValue.ruleContent)) ?? null;
}
function en(e, { restricted, toolsKeptByLaunchList }) {
    if (!(restricted === true && toolsKeptByLaunchList === undefined)) {
        return [];
    }
    let r = new Set([
        ...e.filter((d)=>d.enablesCodeExecution).map((d)=>d.name),
        Ct
    ]);
    return e5t(r, new Set).map((toolName)=>({
            source: "toolsNarrowing",
            ruleBehavior: "deny",
            ruleValue: {
                toolName
            }
        }));
}
function pas(e) {
    return at(_(RP(e))).slice(0, 16);
}
function nn(surfacedDefinitions) {
    if (!Array.isArray(surfacedDefinitions)) {
        return [];
    }
    return surfacedDefinitions.filter((n)=>typeof n === "object" && n !== null && typeof n.name === "string" && typeof n.listing === "string" && (typeof n.definition === "object" && n.definition !== null || typeof n.sameAs === "string"));
}
function Xqe(e, n = new Set) {
    let o = new Map;
    for (let r of e){
        if (r.type !== "attachment" || r.attachment?.type !== "deferred_tools_delta" || typeof r.uuid !== "string" || n.has(r.uuid)) {
            continue;
        }
        let d = new Map;
        for (let s of nn(r.attachment.surfacedDefinitions)){
            if ("definition" in s) {
                d.set(s.name, {
                    definition: s.definition,
                    listing: s.listing,
                    definedIn: r.uuid
                });
                continue;
            }
            let l = o.get(s.sameAs)?.get(s.name);
            if (l !== undefined) {
                d.set(s.name, l);
            }
        }
        if (d.size > 0) {
            o.set(r.uuid, d);
        }
    }
    return o;
}
function fas(e, n = new Set) {
    let o = new Set;
    for (let r of Xqe(e, n).values()){
        for (let d of r.keys()){
            o.add(d);
        }
    }
    return o;
}
function cAt(e, n) {
    if (e !== undefined && Object.hasOwn(e, n)) {
        return e[n];
    }
}
function mas(e, n = new Set) {
    return new Set(Xqe(e, n).keys());
}
const Y3t = "authenticate";
const X3t = "complete_authentication";
function Opr(e) {
    if (typeof e !== "object" || e === null) {
        return false;
    }
    let n = e;
    return typeof n.name === "string" && (n.errorCode === undefined || typeof n.errorCode === "string") && (n.error === undefined || typeof n.error === "string");
}
const on = 200;
function ao(e, n = 64) {
    if (typeof e !== "string") {
        return "";
    }
    return nl(MZ(e).replace(/['`]/g, " "), n, "none");
}
function gas(e, n = 1024) {
    return nl(e, n);
}
function nl(e, n = on, o = "all") {
    if (typeof e !== "string") {
        return "";
    }
    let r = uEo(MZ(e)).replaceAll(/[<>";\u2018\u2019\u201A\u201C\u201D\u201E\u00AB\u00BB\u2039\u203A\u2329\u232A\u27E8\u27E9\u27EA\u27EB\u3008\u3009\u300A\u300B]/g, " ").replaceAll(/\s+/g, " ").trim();
    let d = Math.max(se, n + we);
    let s = r.length > d;
    let l = J3t(s ? ne(r, d) : r, o);
    if (s || l.length > n) {
        return `${ne(l, n)}\u2026`;
    }
    return l;
}
const xe = 500;
function _b(e) {
    let n = uEo(e).replaceAll(/\s+/g, " ").trim();
    let o = J3t(n.length > se ? ne(n, se) : n);
    if (o.length > xe) {
        return `${ne(o, xe)}\u2026`;
    }
    return o;
}
const J = String.raw`(?:access[-_ ]?|refresh[-_ ]?|id[-_ ]?|client[-_ ]?|api[-_ ]?|x[-_]api[-_ ]?|session[-_ ]?|auth[-_ ]?)?(?:token|key|secret|password|authorization|credential)s?`;
const tn = String.raw`\b${J}(?:\\*["']|\\+)?\s*[:=\uFF1A\uFF1D]\s*(?:\\*["']|\\+)?\s*(?!=*${J}=*(?![A-Za-z0-9._~+/=%-]))(?=[A-Za-z0-9._~+/=%-]{8})[A-Za-z]*[0-9._~+/=%-]`;
const Ae = String.raw`(?:[A-Za-z0-9._~+/=%-]+?(?=${tn})|[A-Za-z0-9._~+/=%-]{8,})`;
const rn = new RegExp(String.raw`(?:\b|(?<=\\[A-Za-z"']))(bearer|basic)(?![\s:=\uFF1A\uFF1D]+(?:(?:\\*["']|\\+)\s*)?${J}=*(?![A-Za-z0-9._~+/=%-]))[\s:=\uFF1A\uFF1D]+(?:(?:\\*["']|\\+)\s*)?(${Ae})`, "gi");
const sn = new RegExp(String.raw`(?:\b|(?<=\\[A-Za-z"']))(${J})(?:\\*["']|\\+)?\s*[:=\uFF1A\uFF1D]\s*(?:\\*["']|\\+)?\s*(?!=*${J}=*(?![A-Za-z0-9._~+/=%-]))(${Ae})`, "gi");
function De(e, n, o, r, d) {
    if (!/[0-9._~+/=%-]/.test(o)) {
        return e;
    }
    if (/\w/.test(d[r + e.length] ?? "")) {
        return `${n} [redacted] `;
    }
    return `${n} [redacted]`;
}
function J3t(e, n = "all") {
    if (n === "none") {
        return e;
    }
    return e.replace(rn, De).replace(sn, De);
}
const an = /^(?:bearer|basic|(?:access|refresh|id|client|api|x[-_]api|session|auth)?[-_ ]?(?:token|key|secret|password|authorization|credential)s?)$/i;
const dn = /(?:^|[^A-Za-z0-9_\s])(?:bearer|basic|token|key|secret|password|authorization|credential)s?$/i;
function ln(e) {
    let n = e.split(/[:=\uFF1A\uFF1D]+/).map((r)=>r.trim());
    let o = 0;
    for (let [r, d] of n.entries()){
        if (d === "") {
            continue;
        }
        let s = r < n.length - 1 || d.startsWith("-");
        if (!an.test(d) && !(s && dn.test(d))) {
            return false;
        }
        o++;
    }
    return o > 0;
}
var se = 2000;
var we = 512;
const Oe = se + we;
const cn = 32;
const fn = 262144;
const un = 131072;
const pn = 8192;
const mn = 65536;
const gn = /^(?:[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs})$/u;
function Mpr(e) {
    let n = e.errorCode ? ` (${e.errorCode})` : "";
    let o = e.error ? `: "${e.error}"` : "";
    return `${e.name}${n}${o}`;
}
const _W = "Blocked by enterprise managed policy";
const Lro = "Disabled by disableClaudeAiConnectors setting";
const has = "Not approved for this project - approve it via /mcp first";
const dOn = "Account changed while connecting - reconnect to use it";
const lot = "Disabled in /mcp";
const yn = new Set([
    _W,
    Lro
]);
function cot(e) {
    return e !== undefined && yn.has(e);
}
function Hx(e) {
    return e.type === "failed" && e.errorCode === "UNCONFIGURED";
}
function Hpr(e, n = ()=>false) {
    return e.filter((o)=>o.type === "failed").filter((o)=>!Hx(o)).filter((o)=>true).map((o)=>({
            name: nl(o.name),
            ...o.errorCode !== undefined && {
                errorCode: nl(o.errorCode)
            },
            ...(o.error !== undefined || o.displayDetail !== undefined) && {
                error: [
                    o.error,
                    o.displayDetail
                ].filter((r)=>Boolean(r)).map((r)=>nl(r)).join(" ")
            },
            ...n(o) && {
                willRetry: true
            }
        }));
}
function hn(e, n) {
    if (!e || !n || !e.includes("${")) {
        return [];
    }
    let o = Ynn(e);
    if (o.length < 2) {
        return [];
    }
    if (n.length > 2000 || o.length > 9) {
        return [];
    }
    let r = o.map(ml);
    let d = [];
    if (o.length === 2) {
        let [s = "", l = ""] = o;
        if (n.length >= s.length + l.length && n.startsWith(s) && n.endsWith(l)) {
            d.push(n.slice(s.length, n.length - l.length));
        }
    } else if (o.length === 3) {
        let [s = "", l = "", u = ""] = o;
        if (n.startsWith(s) && n.endsWith(u)) {
            let h = n.slice(s.length, n.length - u.length);
            if (l === "") {
                d.push(h);
            } else {
                let p = [];
                for(let x = h.indexOf(l); x !== -1 && p.length <= 64; x = h.indexOf(l, x + 1)){
                    p.push(x);
                }
                let y = p.length > 64 ? [
                    p[0] ?? 0,
                    h.lastIndexOf(l)
                ] : p;
                for (let x of y){
                    d.push(h.slice(0, x), h.slice(x + l.length));
                }
            }
        }
    } else {
        for(let u = 1; u < o.length - 1; u++){
            if (o[u] === "") {
                return [];
            }
        }
        let s = "^";
        for(let u = 0; u < r.length; u++){
            s += r[u];
            if (u < r.length - 1) {
                let h = o[u + 1] ?? "";
                if (h === "") {
                    s += "([\\s\\S]*)";
                } else {
                    let p = h.charAt(0).replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
                    s += `([^${p}]*)`;
                }
            }
        }
        let l = n.match(new RegExp(`${s}\$`));
        if (l) {
            d.push(...l.slice(1).filter((u)=>u !== ""));
        }
    }
    return D(d);
}
function Tn(e, n) {
    if (!e) {
        return [];
    }
    let o = [];
    let r = (d, s)=>{
        if (typeof d === "string" && typeof s === "string") {
            o.push(...hn(d, s));
        }
    };
    if ("url" in e && "url" in n) {
        r(e.url, n.url);
    }
    if ("command" in e && "command" in n) {
        r(e.command, n.command);
        let d = Array.isArray(e.args) ? e.args : [];
        let s = Array.isArray(n.args) ? n.args : [];
        for(let l = 0; l < Math.min(d.length, s.length); l++){
            r(d[l], s[l]);
        }
    }
    for (let d of [
        "headers",
        "env"
    ]){
        let s = d in e ? e[d] : undefined;
        let l = d in n ? n[d] : undefined;
        if (s && l && typeof s === "object" && typeof l === "object") {
            for (let [u, h] of Object.entries(s)){
                r(h, l[u]);
            }
        }
    }
    return o;
}
function _n(e, n) {
    for (let o of n){
        if (o.length <= e.length) {
            return false;
        }
        if (o.startsWith(e)) {
            return true;
        }
    }
    return false;
}
function yas(e, n, o, r) {
    let d = o ?? "[mcp-endpoint]";
    let s = new TextDecoder("utf-8", {
        fatal: false
    });
    let l = (T)=>T.replace(/(?:%[0-9A-Fa-f]{2})+/g, (S)=>s.decode(Uint8Array.from(S.match(/[0-9A-Fa-f]{2}/g) ?? [], (E)=>parseInt(E, 16))));
    let u = new Map;
    let h = (T)=>{
        if (T === `
` || T === "\t") {
            return false;
        }
        if (T.length === 1) {
            let E = T.charCodeAt(0);
            if (E >= 55296 && E <= 57343) {
                return true;
            }
        }
        let S = u.get(T);
        if (S === undefined) {
            S = gn.test(T);
            u.set(T, S);
        }
        return S;
    };
    let p = (T)=>{
        let S = "";
        let E = 0;
        while(E < T.length){
            if (T[E] !== "%") {
                S += T[E];
                E++;
                continue;
            }
            let w = [];
            let M = E + 1;
            let U = false;
            while(M < T.length && w.length < 2){
                let j = String.fromCodePoint(T.codePointAt(M) ?? 0);
                if (/^[0-9A-Fa-f]$/.test(j)) {
                    w.push(j);
                    M += j.length;
                } else if (h(j) && !/[\n\t]/.test(j) || /^\p{M}$/u.test(j)) {
                    U = true;
                    M += j.length;
                } else {
                    break;
                }
            }
            if (w.length === 2 && U) {
                S += `%${w.join("")}`;
                E = M;
            } else {
                S += "%";
                E++;
            }
        }
        return S;
    };
    let y = 0;
    let x = (T)=>{
        let S = T;
        let E = 0;
        for(let w = 0; w <= cn; w++){
            E += S.length;
            y += w === 0 ? 0 : S.length;
            if (E > fn || y > un) {
                break;
            }
            let M = MZ(l(p(S)));
            if (M === S) {
                return S;
            }
            S = M;
        }
        throw Error("MCP error text or config too long or too deeply encoded");
    };
    let R = new Map;
    let b = (T)=>{
        let S = R.get(T);
        if (S === undefined) {
            S = /\p{M}/u.test(T.normalize("NFD")) ? [
                ...T.normalize("NFD")
            ].filter((E)=>!/\p{M}/u.test(E)).join("") : T;
            R.set(T, S);
        }
        return S;
    };
    let O = new Map;
    let C = (T)=>{
        let S = O.get(T);
        if (S === undefined) {
            S = [
                ...x(T)
            ].filter((E)=>!h(E)).map(b).join("");
            O.set(T, S);
        }
        return S;
    };
    let A = e.length > Oe;
    let P = /%[%0-9A-Fa-f]{0,11}$/;
    let L = A ? x(ne(e, Oe).replace(P, "")).replace(P, "").replace(/\uFFFD+$/, "") : x(e);
    if (L.length > pn) {
        throw Error("MCP error text too long once decoded");
    }
    let v = "";
    let K = "";
    let Z = [];
    for (let T of L){
        if (h(T)) {
            K += " ";
            continue;
        }
        let S = b(T);
        for(let E = 0; E < S.length; E++){
            Z.push(K.length + Math.min(E, T.length - 1));
        }
        v += S;
        K += T;
    }
    Z.push(K.length);
    let q = [];
    let z = (T, S, E)=>{
        let w = T === undefined ? undefined : C(T);
        if (!w || w.length < 4) {
            return;
        }
        if (S !== "[redacted]" && S.includes(w)) {
            return;
        }
        q.push([
            w,
            S,
            E?.wordBoundary === true
        ]);
    };
    let Q = (T, S = d)=>{
        let E = T === undefined ? undefined : C(T);
        if (E && (S.includes(E) || ln(E.trim()))) {
            return;
        }
        z(E, "[redacted]");
    };
    let V = (T, S = d)=>{
        if (!T) {
            return;
        }
        Q(T, S);
        if (T.includes("+")) {
            Q(T.replaceAll("+", " "), S);
        }
        if (T.includes(" ")) {
            Q(T.replaceAll(" ", "+"), S);
        }
        for (let E of [
            T,
            T.replaceAll("+", " ")
        ]){
            let w = E.split(/\s+/);
            if (w.length > 1) {
                for (let M of w){
                    Q(M, S);
                }
            }
        }
    };
    let _e = (T, S)=>{
        z(T, S);
        let E = URL.parse(T);
        if (E === null) {
            return;
        }
        z(E.href, S);
        if (E.origin !== "null") {
            z(E.origin, S);
        }
        z(E.host, S);
        z(E.hostname, S);
        let w = E.hostname.replace(/^\[|\]$/g, "");
        if (w !== E.hostname) {
            z(w, S);
        }
        V(E.username, S);
        V(E.password, S);
        Q(E.pathname !== "/" ? E.pathname : undefined, S);
        for (let M of E.pathname.split("/")){
            V(M, S);
        }
        Q(E.search, S);
        for (let [M, U] of E.searchParams.entries()){
            V(M, S);
            V(U, S);
        }
        for (let M of E.search.replace(/^\?/, "").split("&")){
            let U = M.indexOf("=");
            if (U === -1) {
                V(M, S);
            } else {
                V(M.slice(0, U), S);
                V(M.slice(U + 1), S);
            }
        }
    };
    for (let T of Tn(r, n)){
        V(T);
    }
    if ("url" in n && typeof n.url === "string") {
        _e(n.url, d);
    }
    if ("oauth" in n && typeof n.oauth?.authServerMetadataUrl === "string") {
        let T = n.oauth.authServerMetadataUrl;
        let S = "[redacted]";
        try {
            let E = new URL(T).origin;
            if (E !== "null") {
                S = E;
            }
        } catch  {}
        _e(T, S);
    }
    if ("command" in n && typeof n.command === "string") {
        let T = r && "command" in r && typeof r.command === "string" ? jxe(r.command) : undefined;
        z(n.command, T ?? d, {
            wordBoundary: true
        });
        if (Array.isArray(n.args)) {
            for (let S of n.args){
                V(S);
            }
        }
    }
    if ("headers" in n && n.headers) {
        for (let T of Object.values(n.headers)){
            V(T);
        }
    }
    if ("env" in n && n.env) {
        for (let T of Object.values(n.env)){
            V(T);
        }
    }
    if ("authToken" in n && typeof n.authToken === "string") {
        V(n.authToken);
    }
    if (q.length === 0) {
        if (A) {
            return `${K}\u2026`;
        }
        return e;
    }
    q.sort((T, S)=>S[0].length - T[0].length);
    let te = new Map;
    for (let [T, S, E] of q){
        let w = te.get(T);
        if (!w) {
            te.set(T, {
                replacement: S,
                wordBoundary: E
            });
        } else if (w.replacement === "[redacted]" && S !== "[redacted]") {
            te.set(T, {
                replacement: S,
                wordBoundary: w.wordBoundary && E
            });
        }
    }
    let ue = new Int32Array(v.length);
    let Re = [];
    let Se = new Set;
    let qe = 0;
    let Qe = v.toUpperCase();
    for (let [T, S] of te){
        if (!Qe.includes(T.toUpperCase())) {
            continue;
        }
        let E = S.wordBoundary && /^[\w-]+$/.test(T);
        let w = `${E}:${T.replace(/[a-z]+/g, (I)=>I.toUpperCase())}`;
        if (Se.has(w)) {
            continue;
        }
        Se.add(w);
        let M = ml(T);
        let U = E ? `(?<![\\w:.-])${M}(?![\\w:.-])` : M;
        let j = new RegExp(U, "gi");
        for(let I = j.exec(v); I !== null; I = j.exec(v)){
            if (++qe > mn) {
                throw Error("MCP error text repeats too much of the config");
            }
            let N = I.index + I[0].length;
            if (N > (ue[I.index] ?? 0)) {
                ue[I.index] = N;
                Re[I.index] = S.replacement;
            }
            j.lastIndex = I.index + 1;
        }
    }
    let me = [];
    for (let [T, S] of ue.entries()){
        if (S === 0) {
            continue;
        }
        let E = me.at(-1);
        if (E && T < E.end) {
            E.end = Math.max(E.end, S);
        } else {
            me.push({
                start: T,
                end: S,
                replacement: Re[T] ?? ""
            });
        }
    }
    let v_length = v.length;
    if (A) {
        let T = v_length;
        let S = 12;
        while(T > 0 && v_length - T < S && /[%0-9A-Fa-f\uFFFD]/.test(v[T - 1] ?? "")){
            T--;
        }
        if (T < v_length && /[%\uFFFD]/.test(v.slice(T, v_length))) {
            let N = v.slice(T, v_length).search(/[%\uFFFD]/);
            v_length = T + N;
        }
        let E = q[0]?.[0].length ?? 0;
        let w = Math.max(0, v_length - (E - 1));
        let M = D(q.map(([N])=>N.toUpperCase())).sort((N, ie)=>ie.length - N.length);
        let U = v.slice(w, v_length);
        let j = [];
        let I = "";
        for (let N of U){
            j.push(I.length, ...N.length === 2 ? [
                -1
            ] : []);
            I += N.toUpperCase();
        }
        for(let N = 0; N < U.length; N++){
            let ie = j[N] ?? 0;
            let Xe = ie === -1 ? U.charAt(N) + I.slice(j[N + 1] ?? I.length) : I.slice(ie);
            if (_n(Xe, M)) {
                v_length = w + N;
                break;
            }
        }
    }
    let be = (T)=>{
        if (T === 0) {
            return 0;
        }
        return (Z[T - 1] ?? 0) + 1;
    };
    let Y = "";
    let re = 0;
    for (let T of me){
        if (T.start >= v_length) {
            break;
        }
        Y += K.slice(be(re), Z[T.start]) + T.replacement;
        re = T.end;
    }
    if (re < v_length) {
        Y += K.slice(be(re), Z[v_length]);
    }
    let Ee = Y.charCodeAt(Y.length - 1);
    if (Ee >= 55296 && Ee <= 56319) {
        Y = Y.slice(0, -1);
    }
    if (A) {
        return `${Y}\u2026`;
    }
    return Y;
}
const Ie = [
    "betas",
    "tool_choice",
    "thinking",
    "context_management",
    "output_config",
    "speed",
    "temperature",
    "max_tokens"
];
function cas(e) {
    return {
        model: e.model,
        tools: e.tools.map((body, o)=>({
                key: Fe(body, o),
                deferred: q3t(body),
                bound: q3t(body),
                cacheControl: undefined,
                body
            })),
        system: e.system.map((body)=>({
                preamble: false,
                cacheControl: undefined,
                body
            })),
        messages: [],
        envelope: {},
        seeded: true
    };
}
function Hro(e, n = {}) {
    let o = n.boundDeferredToolNames ?? (n.bindReferencedDeferredTools === true ? Cn(e.messages) : undefined);
    let r = typeof e.system === "string" ? [
        {
            type: "text",
            text: e.system
        }
    ] : e.system ?? [];
    let envelope = {};
    for (let s of Ie){
        let l = s === "betas" ? En(e.betas) : e[s];
        if (l !== undefined) {
            envelope[s] = l;
        }
    }
    return {
        model: e.model,
        envelope,
        tools: (e.tools ?? []).map((s, l)=>({
                key: Fe(s, l),
                deferred: s.defer_loading === true,
                bound: s.defer_loading === true && typeof s.name === "string" && o?.has(s.name) === true,
                cacheControl: ge(s),
                body: ye(s)
            })),
        system: r.map((s)=>({
                preamble: OB(s),
                cacheControl: ge(s),
                body: ye(s)
            })),
        messages: e.messages.map((s, l, u)=>({
                role: s.role,
                turnScopedSystem: s.role === "system" && l === u.length - 1,
                blocks: typeof s.content === "string" ? [
                    {
                        thinking: false,
                        cacheControl: undefined,
                        body: {
                            type: "text",
                            text: s.content
                        }
                    }
                ] : s.content.map((h)=>({
                        thinking: h.type === "thinking" || h.type === "redacted_thinking",
                        cacheControl: ge(h),
                        body: xn(ye(h))
                    }))
            }))
    };
}
function V3t(e) {
    return {
        model: e.model,
        tools: e.tools.filter(kn).map((n)=>n.body),
        system: e.system.filter((n)=>!n.preamble).map((n)=>n.body),
        messages: e.messages.filter((n)=>!n.turnScopedSystem).map((n)=>({
                role: n.role,
                content: n.blocks.filter((o)=>!o.thinking).map((o)=>o.body)
            }))
    };
}
function das(e) {
    return e.part === "tool" || e.part === "system" || e.part === "message";
}
const ae = 16;
function Dro(e, n) {
    if (e.seeded) {
        return Me(e, n);
    }
    return [
        ...Me(e, n),
        ...Rn(e, n),
        ...Sn(e, n),
        ...bn(e, n)
    ];
}
function Me(e, n) {
    let o = V3t(e);
    let r = V3t(n);
    let d = [];
    let s = (R)=>{
        d.push(R);
        return d.length < ae;
    };
    let l = (tools)=>new Map([
            ...tools.filter((b)=>!b.deferred),
            ...tools.filter((b)=>b.bound)
        ].map((b)=>[
                b.key,
                b
            ]));
    let u = l(e.tools);
    let h = l(n.tools);
    let p = [];
    let y = false;
    for (let [R, b] of u){
        let O = b.body;
        let C = h.get(R);
        if (C === undefined) {
            if (b.deferred) {
                if (!e.seeded) {
                    p.push({
                        part: "tool",
                        id: R,
                        kind: "removed",
                        prev: O
                    });
                }
                continue;
            }
            y = true;
            if (!s({
                part: "tool",
                id: R,
                kind: "removed",
                prev: O
            })) {
                return d;
            }
        } else if (b.deferred !== C.deferred) {
            y = true;
            let A = b.deferred ? {
                part: "tool",
                id: R,
                kind: "added",
                next: C.body
            } : {
                part: "tool",
                id: R,
                kind: "removed",
                prev: O
            };
            if (!s(A)) {
                return d;
            }
        } else if (!isDeepStrictEqual(O, C.body)) {
            y ||= !b.deferred;
            let A = C.body;
            let field = [
                ...Object.keys(O),
                ...Object.keys(A)
            ].find((L)=>!isDeepStrictEqual(XC(O, L), XC(A, L))) ?? "?";
            if (!s({
                part: "tool",
                id: R,
                kind: "changed",
                field,
                prev: O,
                next: A
            })) {
                return d;
            }
        }
    }
    for (let [R, b] of h){
        if (!u.has(R) && !b.deferred) {
            y = true;
            if (!s({
                part: "tool",
                id: R,
                kind: "added",
                next: b.body
            })) {
                return d;
            }
        }
    }
    if (!y) {
        let R = (A)=>[
                ...A.values()
            ].flatMap((P)=>{
                if (P.deferred) {
                    return [];
                }
                return [
                    P.key
                ];
            });
        let b = R(u);
        let id = R(h).filter((A)=>u.has(A)).find((A, P)=>b[P] !== A);
        if (id !== undefined) {
            s({
                part: "tool",
                id,
                kind: "reordered"
            });
        }
    }
    let x = Math.max(o.system.length, r.system.length);
    for(let R = 0; R < x; R++){
        let b = o.system[R];
        let O = r.system[R];
        let kind = b === undefined ? "added" : O === undefined ? "removed" : "changed";
        if (kind !== "changed" || !isDeepStrictEqual(b, O)) {
            if (!s({
                part: "system",
                index: R,
                kind,
                prev: b,
                next: O
            })) {
                return d;
            }
        }
    }
    for(let R = 0; R < o.messages.length; R++){
        let message = o.messages[R];
        let O = r.messages[R];
        if (O !== undefined && isDeepStrictEqual(message, O)) {
            continue;
        }
        let C = {
            part: "message",
            index: R,
            role: message.role,
            kind: O === undefined ? "removed" : "changed",
            prev: message,
            next: O
        };
        if (!s(C)) {
            return d;
        }
    }
    for (let R of p){
        if (!s(R)) {
            break;
        }
    }
    return d;
}
function Rn(e, n) {
    let o = [];
    let r = Math.min(e.messages.length, n.messages.length);
    for(let d = 0; d < r && o.length < ae; d++){
        let s = Pe(e.messages[d]);
        let l = Pe(n.messages[d]);
        if (s.length === 0 && l.length === 0) {
            continue;
        }
        if (s.length === l.length && s.every((h, p)=>h === l[p])) {
            continue;
        }
        let u = s.slice(0, l.length).every((h, p)=>h === l[p]) || l.slice(0, s.length).every((h, p)=>h === s[p]);
        o.push({
            part: "thinking",
            index: d,
            kind: !u ? "changed" : l.length < s.length ? "dropped" : "added",
            prevCount: s.length,
            nextCount: l.length
        });
    }
    return o;
}
function Pe(e) {
    return e.blocks.flatMap((n)=>{
        if (!n.thinking) {
            return [];
        }
        let o = XC(n.body, "signature");
        let r = XC(n.body, "data");
        return [
            typeof o === "string" ? o : typeof r === "string" ? r : "?"
        ];
    });
}
function Sn(e, n) {
    let o = ve(e, e.messages.length);
    let r = ve(n, e.messages.length);
    let d = [];
    for (let [s, { at, marker }] of o){
        if (d.length >= ae) {
            return d;
        }
        let h = r.get(s);
        if (h === undefined) {
            d.push({
                part: "cache",
                at,
                kind: "dropped",
                prev: marker,
                next: undefined
            });
        } else if (!isDeepStrictEqual(marker, h.marker)) {
            d.push({
                part: "cache",
                at,
                kind: "changed",
                prev: marker,
                next: h.marker
            });
        }
    }
    for (let [s, { at, marker }] of r){
        if (d.length >= ae) {
            return d;
        }
        if (!o.has(s)) {
            d.push({
                part: "cache",
                at,
                kind: "added",
                prev: undefined,
                next: marker
            });
        }
    }
    return d;
}
function ve(e, n) {
    let o = new Map;
    for (let r of e.tools){
        if (r.cacheControl !== undefined) {
            o.set(`tools:${r.key}`, {
                at: {
                    segment: "tools",
                    key: r.key
                },
                marker: r.cacheControl
            });
        }
    }
    e.system.forEach((r, d)=>{
        if (r.cacheControl !== undefined) {
            o.set(`system:${d}`, {
                at: {
                    segment: "system",
                    index: d
                },
                marker: r.cacheControl
            });
        }
    });
    e.messages.slice(0, n).forEach((r, d)=>{
        r.blocks.forEach((s, block)=>{
            if (s.cacheControl !== undefined) {
                o.set(`messages:${d}.${block}`, {
                    at: {
                        segment: "messages",
                        index: d,
                        block
                    },
                    marker: s.cacheControl
                });
            }
        });
    });
    return o;
}
function bn(e, n) {
    return [
        [
            "model",
            e.model,
            n.model
        ],
        [
            "attribution_header",
            Ne(e),
            Ne(n)
        ],
        [
            "deferred_tools",
            Le(e),
            Le(n)
        ],
        ...Ie.map((r)=>[
                r,
                e.envelope[r],
                n.envelope[r]
            ])
    ].filter(([, r, d])=>!isDeepStrictEqual(r, d)).map(([id, prev, next])=>({
            part: "envelope",
            id,
            kind: "changed",
            prev,
            next
        }));
}
function En(betas) {
    return betas && [
        ...betas
    ].sort();
}
function Ne(e) {
    for (let n of e.system){
        let o = XC(n.body, "text");
        if (typeof o === "string" && o.startsWith(L4e)) {
            return o;
        }
    }
    return "";
}
function Le(e) {
    return e.tools.filter((n)=>n.deferred).map((n)=>n.key).sort().join(",");
}
function kn(e) {
    return !e.deferred || e.bound;
}
function q3t(e) {
    return XC(e, "defer_loading") === true;
}
function Cn(messages) {
    let n = new Set;
    for (let o of messages){
        if (typeof o.content === "string") {
            continue;
        }
        if (o.role === "system") {
            for (let d of o.content){
                let s = XC(d, "tool");
                let l = XC(d, "type") === "tool_addition" && typeof s === "object" && s !== null ? XC(s, "name") : undefined;
                if (typeof l === "string") {
                    n.add(Ul(l));
                }
            }
            continue;
        }
        if (o.role !== "user") {
            continue;
        }
        for (let d of o.content){
            if (!UKe(d)) {
                continue;
            }
            for (let s of d.content){
                if (mst(s)) {
                    n.add(Ul(s.tool_name));
                }
            }
        }
    }
    return n;
}
function ge(e) {
    if ("cache_control" in e) {
        return e.cache_control;
    }
}
function ye(e) {
    if (!("cache_control" in e)) {
        return e;
    }
    let { cache_control, ...rest } = e;
    return rest;
}
function xn(e) {
    if (!("safeguards" in e)) {
        return e;
    }
    let { safeguards, ...rest } = e;
    return rest;
}
function XC(e, n) {
    if (e === undefined) {
        return;
    }
    return Object.entries(e).find(([o])=>o === n)?.[1];
}
function Fe(e, n) {
    let o = XC(e, "name");
    if (typeof o === "string") {
        return o;
    }
    let r = XC(e, "type");
    if (typeof r === "string") {
        return r;
    }
    return `tools[${n}]`;
}
function Ipr() {
    return a.CLAUDE_CODE_WEBSEARCH_CITATIONS_DECLARED && Ta() && !vF();
}
function K3t(e) {
    let n = XC(e, "type");
    return typeof XC(e, "name") === "string" && XC(e, "defer_loading") === true && (n === undefined || n === "custom") && je(XC(e, "input_schema")) && !("cache_control" in e);
}
function uas(e) {
    let n = XC(e, "type");
    let o = XC(e, "description");
    return typeof XC(e, "name") === "string" && (o === undefined || typeof o === "string") && XC(e, "defer_loading") !== true && (n === undefined || n === "custom") && je(XC(e, "input_schema")) && !("cache_control" in e);
}
const de = [
    "strict",
    "eager_input_streaming",
    "citations"
];
function le(e) {
    return e.some((n)=>XC(n, "eager_input_streaming") === true);
}
function ee(e, { strict, eager }) {
    let r = {
        ...e
    };
    if (!strict && "strict" in r) {
        let { strict: strict_1, ...rest } = r;
        r = rest;
    }
    if (!eager && "eager_input_streaming" in r) {
        let { eager_input_streaming, ...rest } = r;
        r = rest;
    }
    if (!Ipr() && "citations" in r) {
        let { citations, ...rest } = r;
        r = rest;
    }
    return r;
}
function je(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e) && XC(e, "type") === "object";
}
function Ve() {
    if (!of()) {
        return false;
    }
    return !(a.CLAUDE_CODE_SIMPLE || a.CLAUDE_CODE_DISABLE_ATTACHMENTS);
}
function fAe() {
    let e = wo();
    e.keptDeferredToolsEnabled ??= Ve();
    return e.keptDeferredToolsEnabled;
}
function Nro() {
    return wo().keptDeferredToolsEnabled ?? Ve();
}
const Dn = 5000;
function G(e) {
    return VHn(e.toolUseId, e.toolName);
}
class He {
    #e = new Map;
    #n = new Set;
    #o = new Map;
    #t = false;
    #r = 0;
    get(e) {
        return this.#e.get(G(e));
    }
    set(e, n) {
        let o = G(e);
        if (!this.#e.delete(o) && this.#e.size >= Dn) {
            let r = this.#e.keys().next().value;
            if (r !== undefined) {
                this.#e.delete(r);
            }
        }
        this.#e.set(o, n);
        this.#n.add(e.toolName);
    }
    hasTool(e) {
        return this.#n.has(e);
    }
    get size() {
        return this.#e.size;
    }
    telemetrySignatureChanged(e, n) {
        if (n === this.#o.get(e)) {
            return false;
        }
        this.#o.set(e, n);
        return true;
    }
    get generation() {
        return this.#r;
    }
    noteRetractionFailure() {
        let e = !this.#t;
        this.#t = true;
        return e;
    }
    clear() {
        this.#e.clear();
        this.#n.clear();
        this.#o.clear();
        this.#r++;
    }
}
const Q3t = new lt(()=>new He);
function W2() {
    return Q3t.of(B());
}
function $e(e, n, o, r = true, d) {
    let s = new Set(o.map((y)=>y.name));
    let l = new Map;
    for (let y of n){
        let x = Ul(y.toolName);
        if (l.has(x)) {
            continue;
        }
        let R = e.get(y);
        if (R?.kind === "sent" && (r || !R.entry.isMcp)) {
            l.set(x, R.entry);
        }
    }
    let strippedReferenceKeys = new Set;
    let resolvedAgainstKept = [];
    let unrecordedDepartures = [];
    for (let reference of n){
        let x = e.get(reference);
        if (x?.kind === "stripped") {
            strippedReferenceKeys.add(G(reference));
            continue;
        }
        if (x?.kind === "sent") {
            continue;
        }
        let R = Ul(reference.toolName);
        let b = l.get(R);
        if (b) {
            resolvedAgainstKept.push({
                reference,
                entry: b
            });
        } else if (!s.has(R) && !d?.keeps(R)) {
            unrecordedDepartures.push(reference);
        }
    }
    return {
        kept: l,
        strippedReferenceKeys,
        resolvedAgainstKept,
        unrecordedDepartures
    };
}
function $ro(e, n, querySource, { keepMcp = true, surfacedOnWire, declaredInline } = {}) {
    try {
        if (!fAe()) {
            return;
        }
        let references = gst(e, {
            surfacedOnWire
        });
        if (references.length === 0) {
            return;
        }
        let u = W2();
        let generation = u.generation;
        let category = as(querySource);
        let writes = he(category, querySource);
        let { kept, strippedReferenceKeys, resolvedAgainstKept, unrecordedDepartures } = $e(u, references, n, keepMcp, declaredInline);
        if (writes) {
            for (let { reference, entry } of resolvedAgainstKept){
                u.set(reference, {
                    kind: "sent",
                    entry
                });
            }
            for (let C of unrecordedDepartures){
                u.set(C, {
                    kind: "stripped"
                });
            }
        }
        return {
            references,
            kept,
            strippedReferenceKeys,
            writes,
            category,
            querySource,
            generation
        };
    } catch (error) {
        c(error);
        m("mcp_kept_deferred_tools", "plan_failed");
        return;
    }
}
function bas(e, n, { keepMcp = true, surfacedOnWire } = {}) {
    try {
        let d = W2();
        if (!fAe()) {
            return;
        }
        let { kept } = $e(d, gst(e, {
            surfacedOnWire
        }), n, keepMcp);
        let l = new Set(n.map((u)=>u.name));
        return [
            ...kept.keys()
        ].filter((u)=>!l.has(u));
    } catch (error) {
        Z3t(error);
        return;
    }
}
function Sas(e) {
    let n = W2();
    let o = new Set;
    for (let r of e?.references ?? []){
        if (n.get(r)?.kind === "stripped") {
            o.add(G(r));
        }
    }
    return o;
}
function Z3t(e) {
    c(e);
    if (W2().noteRetractionFailure()) {
        m("mcp_kept_deferred_tools", "retraction_failed");
    }
}
function was(e, n, o, { requestCarriesStructuredOutputs }) {
    try {
        let d = Math.max(n.length - 1, 0);
        let s = W2();
        let l = s.generation !== e.generation;
        let u = {
            strict: requestCarriesStructuredOutputs,
            eager: le(n)
        };
        let h = [];
        let p = [];
        for (let [R, b] of e.kept){
            let O = n.findIndex((A)=>"name" in A && It(A, R));
            let C = n[O];
            if (C !== undefined) {
                if ("defer_loading" in C && C.defer_loading && !l) {
                    n[O] = ee(b.schema, u);
                }
                continue;
            }
            p.push([
                R,
                b
            ]);
            h.push(ee(b.schema, u));
        }
        n.splice(d, 0, ...h);
        if (!e.writes || l) {
            return;
        }
        let y = e.querySource ?? "";
        if (p.length === 0 && e.strippedReferenceKeys.size === 0) {
            s.telemetrySignatureChanged(y, "");
        } else {
            t(`Dynamic tool loading: keeping ${p.length} departed deferred tool(s) declared; ${e.strippedReferenceKeys.size} reference(s) held stripped`);
            let R = `${p.map(([b])=>b).sort().join(",")}|${e.strippedReferenceKeys.size}`;
            if (s.telemetrySignatureChanged(y, R)) {
                let query_source_category = pe(e.category);
                g("mcp_kept_deferred_tools", {
                    kept_count: p.length,
                    kept_mcp_count: F(p, ([, O])=>O.isMcp),
                    stripped_reference_count: e.strippedReferenceKeys.size,
                    ...query_source_category !== undefined && {
                        query_source_category
                    }
                });
            }
        }
        let x = new Map;
        for (let R of e.references){
            if (e.strippedReferenceKeys.has(G(R))) {
                continue;
            }
            let b = Ul(R.toolName);
            let O = o.get(b);
            if (e.kept.has(b) || !O || !("defer_loading" in O.schema) || O.schema.defer_loading !== true) {
                continue;
            }
            let C = x.get(b);
            if (C === undefined) {
                C = {
                    schema: O.schema,
                    isMcp: O.isMcp
                };
                x.set(b, C);
            }
            s.set(R, {
                kind: "sent",
                entry: C
            });
        }
    } catch (error) {
        c(error);
        m("mcp_kept_deferred_tools", "record_failed");
    }
}
function uOn(e, n, o) {
    try {
        let r = o?.strippedReferences ?? new Set;
        if (n.length === 0 && r.size === 0 || !Nro()) {
            return 0;
        }
        let d = W2();
        let s = new Map;
        for (let p of n){
            if (K3t(p) && !s.has(p.name)) {
                s.set(p.name, {
                    schema: p,
                    isMcp: p.name.startsWith("mcp__")
                });
            }
        }
        let l;
        if (o?.surfacedCarrier !== undefined) {
            l = new Set;
            for (let p of e){
                if (p.type !== "attachment" || p.attachment.type !== "deferred_tools_delta" || o.surfacedCarrier.nameOnlyAnnouncements.has(p.uuid)) {
                    continue;
                }
                let y = p.attachment.surfacedNames;
                for (let x of Array.isArray(y) ? y : []){
                    if (typeof x === "string" && s.has(x)) {
                        l.add(x);
                    }
                }
            }
            for (let p of l){
                o.surfacedCarrier.surfacedOnWire.add(p);
            }
        }
        let u = 0;
        let h = new Set;
        for (let p of gst(e, {
            surfacedOnWire: l
        })){
            let y = d.get(p);
            if (r.has(G(p))) {
                if (y?.kind !== "stripped") {
                    d.set(p, {
                        kind: "stripped"
                    });
                    u++;
                }
                continue;
            }
            if (y !== undefined) {
                continue;
            }
            let x = Ul(p.toolName);
            let R = s.get(x);
            if (R === undefined) {
                continue;
            }
            d.set(p, {
                kind: "sent",
                entry: R
            });
            h.add(x);
            u++;
        }
        if (u > 0) {
            t(`Dynamic tool loading: seeded ${u} tool reference(s) to ${h.size} deferred tool(s) the previous process sent`);
        }
        return u;
    } catch (error) {
        c(error);
        m("mcp_kept_deferred_tools", "seed_failed");
        return 0;
    }
}
function On(schema, n) {
    if (isDeepStrictEqual(schema, n)) {
        return true;
    }
    let o = {
        ...schema
    };
    for (let r of de){
        if (!(r in n)) {
            delete o[r];
        }
    }
    return isDeepStrictEqual(o, n);
}
function vas(e, n, o, r, d, s) {
    try {
        if (n.size === 0 || !fAe()) {
            return;
        }
        let l = W2();
        if (l.generation !== s) {
            return;
        }
        if (!he(as(d), d)) {
            return;
        }
        let u = new Map;
        for (let h of gst(e, {
            surfacedOnWire: n
        })){
            if (l.get(h) !== undefined) {
                continue;
            }
            let p = Ul(h.toolName);
            let y = r?.kept.get(p) ?? o.get(p);
            if (!y || !("defer_loading" in y.schema) || y.schema.defer_loading !== true) {
                continue;
            }
            let x = u.get(p);
            if (x === undefined) {
                x = {
                    schema: y.schema,
                    isMcp: y.isMcp
                };
                u.set(p, x);
            }
            l.set(h, {
                kind: "sent",
                entry: x
            });
        }
    } catch (error) {
        c(error);
        m("mcp_kept_deferred_tools", "record_failed");
    }
}
function Eas(e, n) {
    try {
        let o = Ke(n);
        for(let r = 0; r < e.length; r++){
            let d = o.get(e[r].name);
            if (d !== undefined && K3t(d)) {
                e[r] = d;
            }
        }
    } catch (error) {
        c(error);
    }
}
function kas(e, n) {
    try {
        let o = W2();
        if (!e.writes || o.generation !== e.generation) {
            return;
        }
        let r = Ke(n);
        let d = new Map;
        for (let s of e.references){
            if (e.strippedReferenceKeys.has(G(s))) {
                continue;
            }
            let l = Ul(s.toolName);
            let u = r.get(l);
            let h = o.get(s);
            if (u === undefined || h?.kind !== "sent" || On(h.entry.schema, u)) {
                continue;
            }
            let p = d.get(l);
            if (p === undefined) {
                p = {
                    schema: u,
                    isMcp: h.entry.isMcp
                };
                d.set(l, p);
            }
            o.set(s, {
                kind: "sent",
                entry: p
            });
        }
    } catch (error) {
        c(error);
        m("mcp_kept_deferred_tools", "record_failed");
    }
}
function he(e, n) {
    return e === "main" || e === "subagent" && n !== Lhs;
}
function Fro(e) {
    return he(as(e), e);
}
function Ke(e) {
    let n = new Map;
    for (let o of e){
        if ("defer_loading" in o && o.defer_loading === true && "name" in o && typeof o.name === "string") {
            if ("cache_control" in o) {
                let { cache_control, ...rest } = o;
                n.set(o.name, rest);
            } else {
                n.set(o.name, o);
            }
        }
    }
    return n;
}
function pAt(e) {
    switch(e.kind){
        case "policy_blocked":
        case "org_blocked":
        case "denied":
        case "disabled":
        case "switched_off":
        case "not_configured":
            return true;
        case "reconnecting":
        case "needs_auth":
        case "disconnected":
        case "auth_completed":
        case "not_offered":
        case "withdrawn":
            return false;
    }
}
function Bye(e, n, o, r, d = qce(o)) {
    let mcpInfo = r?.mcpInfo;
    if (mcpInfo === undefined && go(e) === null) {
        let y = {
            ...r,
            name: e,
            underlyingV1ToolName: Gne(e),
            familyParentToolName: r?.familyParentToolName
        };
        if (Jqe(o, y, d.rules, d.index) && !uAt(o, y)) {
            return {
                kind: "denied",
                serverName: undefined
            };
        }
        return {
            kind: "withdrawn"
        };
    }
    let l = mcpInfo === undefined ? y4e(o, d.index, {
        name: e
    }) : Jqe(o, {
        name: e,
        mcpInfo
    }, d.rules, d.index);
    let h = ze(e, n, mcpInfo).map(({ row, upstream })=>An(row, upstream, l));
    let p = h.find(pAt) ?? h.find((y)=>y.kind === "not_offered" || y.kind === "auth_completed") ?? h[0];
    if (p) {
        return p;
    }
    if (l) {
        return {
            kind: "denied",
            serverName: undefined
        };
    }
    return {
        kind: "not_configured"
    };
}
function Cas(e, n) {
    return ze(e, n, undefined).filter(({ row })=>row.type === "pending").map(({ row })=>row.name);
}
function ze(e, n, o) {
    if (o !== undefined) {
        let upstream = In(o.toolName);
        return n.filter((l)=>l.name === o.serverName).map((row)=>({
                row,
                upstream
            }));
    }
    let r = n.map((row)=>({
            row,
            prefix: Bo(row.name)
        })).filter(({ prefix })=>e.startsWith(prefix));
    let d = Math.max(0, ...r.map(({ prefix })=>prefix.length));
    return r.filter(({ prefix })=>prefix.length === d).map(({ row, prefix })=>({
            row,
            upstream: e.slice(prefix.length)
        }));
}
function An(row, upstream, o) {
    let serverName = nl(row.name);
    if (o) {
        return {
            kind: "denied",
            serverName
        };
    }
    if (wn(row, upstream)) {
        return {
            kind: "org_blocked",
            serverName
        };
    }
    switch(row.type){
        case "pending":
            return {
                kind: "reconnecting",
                serverName
            };
        case "needs-auth":
            return {
                kind: "needs_auth",
                serverName
            };
        case "failed":
            if (cot(row.error)) {
                return {
                    kind: "policy_blocked",
                    serverName
                };
            }
            if (Hx(row)) {
                return {
                    kind: "not_configured"
                };
            }
            return {
                kind: "disconnected",
                serverName
            };
        case "disabled":
            return {
                kind: row.config.type === "sdk" ? "switched_off" : "disabled",
                serverName
            };
        case "connected":
        case "cached":
            if (upstream === Y3t || upstream === X3t) {
                return {
                    kind: "auth_completed",
                    serverName
                };
            }
            return {
                kind: "not_offered",
                serverName
            };
    }
}
function wn(row, upstream) {
    if (!("toolPermissions" in row.config)) {
        return false;
    }
    let toolPermissions = row.config.toolPermissions;
    if (!toolPermissions) {
        return false;
    }
    return Object.entries(toolPermissions).some(([r, d])=>d === "blocked" && In(r) === upstream);
}
function $0e() {
    return of();
}
class jye {
    names;
    recordedOnly;
    recordOrder;
    #e;
    constructor(e, n = {
        only: new Map,
        order: []
    }){
        this.names = n.names ?? [
            ...e.map((o)=>o.name),
            ...n.only.keys()
        ];
        this.recordedOnly = n.only;
        this.recordOrder = n.order;
        this.#e = new Map(e.map((o)=>[
                o.name,
                o
            ]));
    }
    has(e) {
        return this.#e.has(e) || this.recordedOnly.has(e);
    }
    keeps(e) {
        return this.has(e) && e !== va;
    }
    toolFor(e) {
        return this.#e.get(e);
    }
    without(e) {
        return new jye([
            ...this.#e.values()
        ].filter((n)=>!e.has(n.name)), {
            only: new Map([
                ...this.recordedOnly
            ].filter(([n])=>!e.has(n))),
            order: this.recordOrder.filter((n)=>!e.has(n)),
            names: this.names.filter((n)=>!e.has(n))
        });
    }
    sourceFor(e) {
        let n = this.#e.get(e);
        let o = this.recordedOnly.get(e)?.server;
        if (n !== undefined || o === undefined) {
            return n;
        }
        return Ye(e, o);
    }
}
function Bro(e) {
    return e ?? li();
}
function fAt({ declaredTools }) {
    if (declaredTools instanceof jye) {
        return declaredTools;
    }
}
function t5t({ noChannelTools }) {
    if (noChannelTools instanceof jye) {
        return noChannelTools;
    }
}
function jro(e, n, o) {
    if (n) {
        e.noChannelTools = undefined;
        return;
    }
    if (e.noChannelTools === undefined && !$0e()) {
        return;
    }
    let r = o();
    e.noChannelTools = r;
    return r;
}
function Wro(e, n, o) {
    let r = new Set([
        ...n,
        ...e
    ].map((y)=>y.name));
    let d = new Map([
        ...o ?? []
    ].filter(([y])=>!r.has(y)));
    if (d.size === 0) {
        return new jye(e);
    }
    let s = (y)=>y.isMcp === true || go(y.name) !== null;
    let l = e.findIndex(s);
    let u = (y, x)=>!s(y) && (y.name === va && x === e.length - 1 || l !== -1 && x > l);
    let h = [
        ...e.filter(s).map((y)=>y.name),
        ...d.keys()
    ].sort((y, x)=>Qce({
            name: y
        }, {
            name: x
        }));
    let p = [
        ...e.filter((y, x)=>!s(y) && !u(y, x)).map((y)=>y.name),
        ...h,
        ...e.filter(u).map((y)=>y.name)
    ];
    return new jye(e, {
        only: d,
        order: p,
        names: p
    });
}
const Mn = new Set([
    "name",
    "description",
    "input_schema",
    "type",
    ...de
]);
async function Ras({ recordedToolDescriptions, recordedToolServers, recordedToolEntries, mcpClients = [], getToolPermissionContext }, s, l) {
    if (recordedToolDescriptions === undefined || recordedToolDescriptions.has(Sl) || !$0e()) {
        return;
    }
    let u = new Set(s.map((R)=>R.name));
    let h = [];
    for (let R of recordedToolDescriptions.keys()){
        let b = recordedToolEntries?.get(R);
        let O = recordedToolServers?.get(R);
        if (!u.has(R) && l?.has(R) !== true && b !== undefined && O !== undefined && R.startsWith(Bo(O)) && b.name === R && /^[a-zA-Z0-9_-]+$/.test(R) && Object.keys(b).every((C)=>Mn.has(C))) {
            h.push({
                name: R,
                entry: b,
                server: O
            });
        }
    }
    if (h.length === 0) {
        return;
    }
    let p = await getToolPermissionContext();
    let y = new Map;
    let x;
    for (let { name, entry, server } of h){
        try {
            x ??= qce(p);
            if (Bye(name, mcpClients, p, Ye(name, server), x).kind === "reconnecting") {
                y.set(name, {
                    entry,
                    server
                });
            }
        } catch (error) {
            c(W(error));
        }
    }
    if (y.size === 0) {
        return undefined;
    }
    return y;
}
async function xas(e, n, { mcpClients, getPermissionContext, byValue }) {
    let s = gOn(e, n, true);
    if (s.length === 0) {
        return {
            kept: e,
            unread: 0
        };
    }
    let l = sl("hipaa");
    let u = (b)=>l && !fe(b, e.sourceFor(b)?.mcpInfo?.serverName);
    let h = (b)=>byValue?.has(b) === true || u(b);
    let p;
    try {
        p = await getPermissionContext();
    } catch (error) {
        c(W(error));
        let O = new Set(s.filter(h));
        return {
            kept: O.size === 0 ? e : e.without(O),
            unread: 0
        };
    }
    let unread = 0;
    let x;
    let R = new Set(s.filter((b)=>{
        if (h(b)) {
            return true;
        }
        try {
            x ??= qce(p);
            return pAt(Bye(b, mcpClients, p, e.sourceFor(b), x));
        } catch (error) {
            c(W(error));
            unread++;
            return true;
        }
    }));
    return {
        kept: R.size === 0 ? e : e.without(R),
        unread
    };
}
function dot(e) {
    if (e.agentId && !e.stickyBetas) {
        return;
    }
    return Bro(e.stickyBetas);
}
function F0e(e) {
    let n = dot(e);
    if (n === undefined) {
        return undefined;
    }
    return fAt(n);
}
function mOn(e) {
    let n = dot(e);
    if (n === undefined) {
        return undefined;
    }
    return t5t(n);
}
function Pas(e, n) {
    Ept(e);
    if (e.declaredTools !== undefined || !$0e()) {
        return false;
    }
    jon(e, new jye(n));
    return true;
}
function Pn(names, n, { servers, entries } = vn, permissionContext) {
    let s = new Map(n.map((C)=>[
            C.name,
            C
        ]));
    let l;
    let u = ()=>{
        l ??= fV() ?? null;
        return l ?? undefined;
    };
    let h = (C)=>{
        let A = u()?.find((P)=>It(P, C))?.underlyingV1ToolName;
        if (A === undefined) {
            return undefined;
        }
        return s.get(A);
    };
    let p = new Map;
    let y = new Map;
    let gateOff = 0;
    let needsUser = 0;
    let launchOmitted = 0;
    let order = [
        ...names
    ];
    for (let C of order){
        let A = s.get(C) ?? h(C);
        if (A === undefined) {
            let L = entries?.get(C);
            let v = servers?.get(C);
            if (L === undefined || Vn(C, v, u())) {
                continue;
            }
            if (Bn(C, v, u(), n)) {
                y.set(C, {
                    entry: L,
                    server: v
                });
            } else {
                let K = Nn(C, u(), permissionContext);
                if (K === "launch_omitted") {
                    y.set(C, {
                        entry: L,
                        server: v
                    });
                    launchOmitted++;
                } else if (K === "gate_off") {
                    y.set(C, {
                        entry: L,
                        server: v
                    });
                    gateOff++;
                    if (Fn(C, u())) {
                        needsUser++;
                    }
                }
            }
            continue;
        }
        p.set(A.name, A);
        let P = A.underlyingV1ToolName === undefined ? undefined : s.get(A.underlyingV1ToolName);
        if (P !== undefined) {
            p.set(P.name, P);
        }
    }
    for (let C of n){
        if (C.underlyingV1ToolName !== undefined && p.has(C.underlyingV1ToolName)) {
            p.set(C.name, C);
        }
    }
    for (let C of p.keys()){
        y.delete(C);
    }
    if (p.size === 0 && y.size === 0) {
        return undefined;
    }
    return {
        held: new jye(n.filter((C)=>p.has(C.name)), {
            only: y,
            order
        }),
        recorded: order.length,
        gateOff,
        needsUser,
        launchOmitted
    };
}
function Npr(e, n, o, { latch, permissionContext }) {
    let s = fAt(e);
    if (s !== undefined || e.declaredToolsDecided) {
        return s;
    }
    if (latch) {
        Ept(e);
    }
    if (e.declaredTools !== undefined || !$0e()) {
        return;
    }
    let l = n();
    let u = l === undefined ? undefined : Pn(l.names, o, l, permissionContext);
    if (u === undefined || !latch) {
        return u?.held;
    }
    jon(e, u.held);
    i("tengu_declared_tool_set_from_record", {
        recorded: u.recorded,
        held: u.held.names.length - u.held.recordedOnly.size,
        heldByName: u.held.recordedOnly.size,
        heldGateOff: u.gateOff,
        heldNeedsUser: u.needsUser,
        heldLaunchOmitted: u.launchOmitted
    });
    return u.held;
}
function zro(e, n) {
    if (n === undefined) {
        return {
            tools: e,
            redeclared: []
        };
    }
    let o = new Set(e.map((l)=>l.name));
    let r = (l)=>{
        if (o.has(l) || !n.keeps(l)) {
            return undefined;
        }
        return n.toolFor(l);
    };
    if (n.names.every((l)=>r(l) === undefined)) {
        return {
            tools: e,
            redeclared: []
        };
    }
    let d = [
        ...e
    ];
    let redeclared = [];
    n.names.forEach((l, u)=>{
        let h = r(l);
        if (!h) {
            return;
        }
        let p = -1;
        for(let y = u - 1; y >= 0 && p === -1; y--){
            let x = n.names[y];
            p = d.findIndex((R)=>R.name === x);
        }
        if (p !== -1) {
            d.splice(p + 1, 0, h);
        } else {
            let y = d.findIndex((x)=>n.has(x.name));
            d.splice(y === -1 ? 0 : y, 0, h);
        }
        o.add(l);
        redeclared.push(l);
    });
    if (redeclared.length === 0) {
        return {
            tools: e,
            redeclared
        };
    }
    return {
        tools: d,
        redeclared
    };
}
function Ias(e, n) {
    let o = fAt(e);
    if (o === undefined || n.length === 0) {
        return;
    }
    e.declaredTools = o.without(new Set(n));
    i("tengu_declared_tools_dropped_at_compaction", {
        dropped: n.length,
        noDeferredChannel: false
    });
}
function Oas(e, n) {
    let o = e === undefined ? undefined : t5t(e);
    return gOn(o, n, true);
}
function Mas(e, n) {
    let o = t5t(e);
    if (o === undefined || n.length === 0) {
        return;
    }
    e.noChannelTools = o.without(new Set(n));
    i("tengu_declared_tools_dropped_at_compaction", {
        dropped: n.length,
        noDeferredChannel: true
    });
}
function gOn(e, n, o) {
    if (e === undefined) {
        return [];
    }
    let r = new Set(n.map((d)=>d.name));
    return e.names.filter((d)=>{
        if (r.has(d) || !e.keeps(d)) {
            return false;
        }
        let s = e.sourceFor(d)?.mcpInfo;
        return o || !fe(d, s?.serverName);
    });
}
var vn = {
    servers: undefined,
    entries: undefined
};
function Bn(e, n, o, r) {
    if (e === va) {
        return false;
    }
    if (n !== undefined) {
        return true;
    }
    if (go(e) !== null) {
        return false;
    }
    if (e === xM && !r.some((d)=>It(d, Sl))) {
        return true;
    }
    return o !== undefined && !o.some((d)=>It(d, e));
}
function Nn(e, n, permissionContext) {
    if (permissionContext === undefined || n === undefined) {
        return;
    }
    if (e === va || e === xM || go(e) !== null) {
        return;
    }
    let r = n.find((d)=>d.name === e);
    if (r === undefined || r.isMcp === true) {
        return;
    }
    if (!Un() || sl("hipaa")) {
        return;
    }
    if (Jqe(permissionContext, r)) {
        if (uAt(permissionContext, r)) {
            return "launch_omitted";
        }
        return undefined;
    }
    if (dAt(permissionContext, r)) {
        if (permissionContext.builtInToolsDisabled === true || permissionContext.restricted === true && e5t(pOn([
            r
        ]), new Set).includes(r.name)) {
            return undefined;
        }
        return "launch_omitted";
    }
    if (r.isEnabled()) {
        return;
    }
    return "gate_off";
}
function Fn(e, n) {
    return n?.find((o)=>o.name === e)?.requiresUserInteraction?.() === true;
}
const jn = "tengu_gleaming_cupcake";
function Un() {
    return k(jn, true);
}
const Wn = "tengu_joyful_anchor";
function Vn(e, n, o) {
    if (fe(e, n)) {
        return false;
    }
    let r = k(Wn, null);
    if (!Array.isArray(r) || r.length === 0) {
        return false;
    }
    let d = o?.find((s)=>It(s, e));
    return r.some((s)=>typeof s === "string" && (s === e || d !== undefined && It(d, s)));
}
function Ye(e, serverName) {
    let o = Bo(serverName);
    return {
        mcpInfo: {
            serverName,
            toolName: e.startsWith(o) ? e.slice(o.length) : e
        }
    };
}
function fe(e, n) {
    return n !== undefined || go(e) !== null;
}
function Has(e, n, { pool, keptDeferred, keepMcp, requestCarriesStructuredOutputs, recordedEntries }) {
    let u = new Set(Gro(n, {
        pool,
        keptDeferred,
        keepMcp
    }));
    if (u.size === 0) {
        return [];
    }
    let h = new Set(e.map(ce));
    let n_recordOrder = n.recordOrder;
    let y = {
        strict: requestCarriesStructuredOutputs,
        eager: le(e)
    };
    let x = [];
    n_recordOrder.forEach((R, b)=>{
        let O = n.recordedOnly.get(R);
        if (O === undefined || h.has(R) || !u.has(R)) {
            return;
        }
        let C = recordedEntries?.get(R) ?? O.entry;
        let A = -1;
        for(let P = b - 1; P >= 0 && A === -1; P--){
            let L = n_recordOrder[P];
            if (h.has(L)) {
                A = e.findIndex((v)=>ce(v) === L) + 1;
            }
        }
        if (A === -1) {
            let P = new Set(n_recordOrder);
            let L = e.findIndex((v)=>P.has(ce(v) ?? ""));
            A = L === -1 ? 0 : L;
        }
        e.splice(A, 0, ee(C, y));
        h.add(R);
        x.push(R);
    });
    return x;
}
function Gro(e, { pool, keptDeferred, keepMcp }) {
    let d = new Set([
        ...pool.map((s)=>s.name),
        ...keptDeferred
    ]);
    return e.recordOrder.filter((s)=>{
        let l = e.recordedOnly.get(s);
        return l !== undefined && !d.has(s) && (keepMcp || !fe(s, l.server));
    });
}
function ce(e) {
    if ("name" in e && typeof e.name === "string") {
        return e.name;
    }
}
function Das() {
    return fAe();
}
function Las(e) {
    let n = new Set;
    for (let o of e){
        let r = ce(o);
        if (r !== undefined) {
            n.add(r);
        }
    }
    return n;
}
function Nas(e) {
    if (e.deferredLate === 0 && e.redeclared === 0 && e.fromRecord === 0 && e.unclassifiedDepartures === 0) {
        return;
    }
    i("tengu_declared_tool_set_held", {
        deferredLate: e.deferredLate,
        redeclared: e.redeclared,
        fromRecord: e.fromRecord,
        ...e.queryDepth !== undefined && {
            queryDepth: e.queryDepth
        },
        toolSearchAbsent: e.toolSearchAbsent,
        noDeferredChannel: e.noDeferredChannel,
        unclassifiedDepartures: e.unclassifiedDepartures
    });
}
function oe(e, n) {
    return Qqe(e) && Ube(n);
}
function Qqe(e) {
    return Z_(e, q_) && !Te(e);
}
function Te(e) {
    return Lf(e, Mb) || VIo() || !fAe();
}
function mAe(e, n) {
    return (Z_(e, q_) || vUn() && !Lf(e, q_)) && !Te(e) && Ube(n);
}
function $as(e, n) {
    return hOn(e) && oe(e, n);
}
function hOn(e) {
    return Z_(e, h_) && !z2n() && Qqe(e);
}
function Fas(e, n) {
    if (z2n() || Lf(e, h_)) {
        return false;
    }
    if (Z_(e, h_)) {
        return mAe(e, n);
    }
    return !Z_(e, q_) && mIt() && mAe(e, n);
}
function $pr(e, n, { toolSearchToolFilteredOut, toolPoolRefreshes, aheadOfRequest }) {
    return toolSearchToolFilteredOut && (aheadOfRequest ? mAe(e, n) : oe(e, n)) && (fAt(e) !== undefined || toolPoolRefreshes && $0e());
}
function Uas(e, n, o) {
    let r = !Z_(e, q_);
    if (n.includes(q_) && !Te(e)) {
        x0(e, q_);
        if (r && n.includes(h_) && !z2n() && !Lf(e, h_)) {
            x0(e, h_);
        }
    }
    let d = oe(e, o);
    let s = d && hOn(e);
    let l = n;
    if (d && !l.includes(q_)) {
        l = [
            ...l,
            q_
        ];
    }
    if (!d && l.includes(q_)) {
        l = l.filter((u)=>u !== q_);
    }
    if (s && !l.includes(h_)) {
        l = [
            ...l,
            h_
        ];
    }
    if (!s && l.includes(h_)) {
        l = l.filter((u)=>u !== h_);
    }
    return l;
}
function Bas(e, n, o, r) {
    if (oe(e, o) && Ube(r)) {
        let d = n.includes(q_) ? n : [
            ...n,
            q_
        ];
        let s = hOn(e);
        if (s && !d.includes(h_)) {
            return [
                ...d,
                h_
            ];
        }
        if (s) {
            return d;
        }
        return d.filter((l)=>l !== h_);
    }
    return n.filter((d)=>d !== q_ && d !== h_);
}
function jas(e, n, { mintModel, retryModel, advisorEntryMoved, deferredEntriesMoved, hasDeferredChannel }) {
    try {
        if (!oe(e, mintModel) || Ube(retryModel)) {
            return;
        }
        let u = {
            advisor_entry: advisorEntryMoved,
            deferred_entries: deferredEntriesMoved,
            announcement_blocks: hasDeferredChannel && n.some((h)=>Hn(e, h))
        };
        if (Object.values(u).some(Boolean)) {
            return u;
        }
        return undefined;
    } catch (error) {
        c(W(error));
        return;
    }
}
function Hn(e, n) {
    if (n.type !== "attachment" || n.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(n.uuid)) {
        return false;
    }
    let surfacedNames = n.attachment.surfacedNames;
    return Array.isArray(surfacedNames) && surfacedNames.some((r)=>typeof r === "string" && (e.surfacedOnWire.has(r) || e.definedByValue.has(r)));
}
function Was(e, n, o, r, d = new Set) {
    if (!r) {
        return;
    }
    let s = !Qqe(e);
    for (let l of n){
        if (l.type !== "attachment" || l.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(l.uuid)) {
            continue;
        }
        let u = l.attachment.surfacedNames;
        if (Array.isArray(u) && u.length > 0 && (s || u.some((h)=>typeof h !== "string" || !o.has(h) && !d.has(h)))) {
            e.nameOnlyAnnouncements.add(l.uuid);
        }
    }
}
function Vro(e, n, o, { useToolSearch, toolSearchAbsent, blocksEligible, byValueNames = new Set }) {
    if (!useToolSearch && !toolSearchAbsent) {
        return;
    }
    if (!blocksEligible) {
        if (!Qqe(e)) {
            e.surfacedOnWire.clear();
            e.definedByValue.clear();
        }
        return;
    }
    e.surfacedOnWire.clear();
    e.definedByValue.clear();
    let u = new Set;
    for (let h of o){
        if (h.type === "api_system") {
            for (let p of h.toolRemovals ?? []){
                e.definedByValue.delete(p);
            }
            for (let p of h.toolAdditions ?? []){
                if (cAt(h.toolDefinitions, p) !== undefined) {
                    u.add(p);
                    e.definedByValue.add(p);
                } else {
                    e.surfacedOnWire.add(p);
                }
            }
        }
    }
    if (toolSearchAbsent) {
        return;
    }
    for (let h of n){
        if (h.type !== "attachment" || h.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(h.uuid)) {
            continue;
        }
        let p = h.attachment.surfacedNames;
        if (Array.isArray(p) && p.some((y)=>typeof y === "string" && !e.surfacedOnWire.has(y) && !u.has(y) && !byValueNames.has(y))) {
            e.nameOnlyAnnouncements.add(h.uuid);
        }
    }
}
function zas(e, n, o, r) {
    qro(e);
    if (n === "header_rejected" || n === "block_type_unknown") {
        qIo();
        if (n === "header_rejected") {
            Upt(q_);
            if (r) {
                RPr();
                Upt(h_);
            }
        }
    } else if (n === "model_unsupported") {
        nOo(We(o));
    }
    t(`[late-tool-additions] tool_addition rejected (${n}) \u2014 falling back to the ToolSearch announcement (or to inline tools where there is no ToolSearch), sticky-rejecting the beta until /clear or /compact`, {
        level: "warn"
    });
    f("mcp_late_tool_additions", `rejected_${n}`);
}
function qro(e) {
    if (Z_(e, q_)) {
        qm(e, q_);
    }
    Ge(e);
    e.surfacedOnWire.clear();
}
function Ge(e) {
    if (Z_(e, h_)) {
        aRo(e, h_);
    }
    e.definedByValue.clear();
}
function Gas(e, n) {
    Ge(e);
    if (n === "header_rejected" || n === "unsupported_on_platform") {
        RPr();
        if (n === "header_rejected") {
            Upt(h_);
        }
    }
    t(`[inline-tools] tool_definition rejected (${n}) \u2014 falling back to declaring late tools in tools[] and showing them by reference, off for the rest of this conversation (carried through a compaction; /clear starts afresh)`, {
        level: "warn"
    });
    f("mcp_inline_tools", `rejected_${n}`);
}
function Vas(text, n, cache_control, r = [], d = {}) {
    let s = [
        ...text ? [
            {
                type: "text",
                text
            }
        ] : [],
        ...r.map((l)=>({
                type: "tool_removal",
                tool: {
                    type: "tool_reference",
                    name: l
                }
            })),
        ...n.map((l)=>{
            let definition = cAt(d, l);
            if (definition === undefined) {
                return {
                    type: "tool_addition",
                    tool: {
                        type: "tool_reference",
                        name: l
                    }
                };
            }
            return {
                type: "tool_addition",
                tool: {
                    type: "tool_definition",
                    definition
                }
            };
        })
    ];
    if (cache_control !== undefined && s.length > 0) {
        s.push({
            ...s.pop(),
            cache_control
        });
    }
    return s;
}
export { cas, Hro, V3t, das, Dro, q3t, XC, Ipr, K3t, uas, pas, Xqe, fas, cAt, mas, Y3t, X3t, Opr, ao, gas, nl, _b, J3t, Mpr, _W, Lro, has, dOn, lot, cot, Hx, Hpr, yas, _as, j2, fAe, Nro, Q3t, W2, $ro, bas, Sas, Z3t, was, uOn, vas, Eas, kas, Fro, US, Uro, Tas, Aas, e5t, Dpr, pOn, Lpr, i5, dAt, Jqe, uAt, fOn, pAt, Bye, Cas, $0e, jye, Bro, fAt, t5t, jro, Wro, Ras, xas, dot, F0e, mOn, Pas, Npr, zro, Ias, Oas, Mas, gOn, Has, Gro, Das, Las, Nas, Qqe, mAe, $as, hOn, Fas, $pr, Uas, Bas, jas, Was, Vro, zas, qro, Gas, Vas };
