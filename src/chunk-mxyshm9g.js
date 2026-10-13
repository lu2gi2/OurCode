import { kb } from "/$bunfs/root/chunk-b6xdb1m9.js";
import { rde, B4e, Rit, Pyr, Iyr, Oyr, ext, txt, WLn, zLn, Myr, VLn, CNe } from "/$bunfs/root/chunk-6sdmsz4f.js";
function p8t(e) {
    return Iyr.test(e) || aHn(e);
}
function aHn(e) {
    return Rit.test(e) || Pyr.test(e) || Oyr.test(e) || WLn.test(e) || zLn.test(e) || Myr.test(e);
}
function RKe(e) {
    return e.type === "ERROR" || e.children.some(RKe);
}
const m = new Set([
    "program",
    "list",
    "pipeline"
]);
const E = new Set([
    "&&",
    "||",
    "|",
    ";",
    "&",
    "|&",
    `
`
]);
const OM = 10000;
const P = 65536;
const U = 16;
function Vg(e) {
    if (!e) {
        return [];
    }
    if (e.length > OM) {
        return [
            e
        ];
    }
    let t = kb().parse(e);
    if (!t) {
        return [
            e
        ];
    }
    let r = [];
    let s = (i)=>{
        if (E.has(i.type) || i.type === "comment") {
            return;
        }
        if (i.type === "redirected_statement") {
            for (let n of i.children){
                if (!n.type.endsWith("_redirect")) {
                    s(n);
                }
            }
            return;
        }
        if (m.has(i.type)) {
            for (let n of i.children){
                s(n);
            }
            return;
        }
        r.push(i.text);
    };
    s(t.type === "ERROR" && t.children[0]?.type === "program" ? t.children[0] : t);
    return r;
}
function cio(e) {
    if (e.length > OM) {
        return true;
    }
    let t = kb().parse(e);
    if (t?.type !== "program") {
        return true;
    }
    let r = t;
    while(r !== undefined && (m.has(r.type) || r.type === "redirected_statement")){
        let s = r.children.findLastIndex((i)=>!E.has(i.type) && i.type !== "comment" && !i.type.endsWith("_redirect"));
        if (r.type === "list" && r.children[s - 1]?.type === "&&") {
            return true;
        }
        r = r.children[s];
    }
    return false;
}
function Xot(e) {
    if (!e || e.length > OM) {
        return [];
    }
    let t = kb().parse(e);
    if (t) {
        return emr(t);
    }
    return [];
}
function emr(e) {
    let t = [];
    let r = P;
    let s = U;
    let i = false;
    let n = (o)=>{
        if (i) {
            return;
        }
        if (o.type === "command") {
            t.push(o.text);
            r -= o.text.length;
        }
        let u = tmr(o);
        if (u !== null) {
            s -= 1;
            r -= u.length;
        }
        if (r < 0 || s < 0) {
            i = true;
            return;
        }
        if (u !== null) {
            let f = kb()?.parse(u);
            if (f) {
                n(f);
            }
            return;
        }
        for (let f of o.children){
            n(f);
        }
    };
    n(e);
    if (i) {
        return [];
    }
    return t;
}
function tmr(e) {
    if (e.type !== "expansion" && e.type !== "ERROR") {
        return null;
    }
    let e_text = e.text;
    if (!/^\$\{[ \t\n|]/.test(e_text)) {
        return null;
    }
    let r = e_text.endsWith("}") ? e_text.length - 1 : e_text.length;
    return e_text.slice(2, r).trim().replace(/^\|/, "").replace(/;$/, "").trim();
}
function f8t(e) {
    if (!e || e.length > OM) {
        return null;
    }
    let t = kb().parse(e);
    if (!t) {
        return null;
    }
    return W(t);
}
function nmr(e) {
    if (!e || e.length > OM) {
        return null;
    }
    let t = kb().parse(e);
    if (!t) {
        return null;
    }
    if (RKe(t) || VLn(t) !== null || I(t) || O(t) || rmr(e)) {
        return null;
    }
    if (e.includes("`")) {
        return null;
    }
    let r = W(t);
    if (r === null) {
        return null;
    }
    if (r.some(X)) {
        return null;
    }
    return r;
}
const D = /(?<!\$)\{|(?<=[$\\]\$)\{|\$'|\$"/;
const k = /[;&|<>\n]/;
const B = /(?:^|[ \t])[-/]/;
const F = /[()]/;
function H(e) {
    let t = e.search(/(?<!\$)\{|(?<=[$\\]\$)\{/);
    return t === -1 || /['"\\]/.test(e.slice(t));
}
function X(e) {
    if (D.test(e) && L(e)) {
        return true;
    }
    let t = CNe(e);
    let r = e.replace(/['"\\]/g, "");
    if (D.test(t) && (k.test(t) || F.test(t) || B.test(r) && H(e))) {
        return true;
    }
    return Y.test(e) || G(e);
}
var Y = /\$\(|`|<\(|>\(|\$\[|\$\{[ \t\n|]/;
function G(e) {
    let t;
    for(let r = 0; r < e.length; r++){
        let s = e[r];
        if (t !== undefined) {
            if (t === '"' && s === "\\") {
                r++;
            } else if (s === t) {
                t = undefined;
            }
            continue;
        }
        if (s === "\\") {
            r++;
            continue;
        }
        if (s === "'" || s === '"') {
            t = s;
            continue;
        }
        if (s === "$" && e[r + 1] === '"') {
            return true;
        }
    }
    return false;
}
const Z = new Set([
    "file_descriptor",
    "number",
    ">&",
    "<&"
]);
function O(e) {
    if (e.type.endsWith("_redirect")) {
        if (!q(e)) {
            return true;
        }
    }
    return e.children.some(O);
}
function q(e) {
    let t = e.children.map((s)=>s.type);
    if (!(t.length === 2 && t[0] !== "file_descriptor" || t.length === 3 && t[0] === "file_descriptor")) {
        return false;
    }
    return e.children.every((s)=>{
        if (!Z.has(s.type) || s.children.length !== 0) {
            return false;
        }
        if (s.type === "number" || s.type === "file_descriptor") {
            return /^\d+$/.test(s.text);
        }
        return true;
    });
}
function W(e) {
    let t = [];
    let r = true;
    let s = (i)=>{
        if (!r) {
            return;
        }
        if (E.has(i.type) || i.type === "comment") {
            return;
        }
        if (i.type === "redirected_statement") {
            for (let n of i.children){
                if (n.type.endsWith("_redirect")) {
                    if (R(n)) {
                        r = false;
                        return;
                    }
                    continue;
                }
                s(n);
            }
            return;
        }
        if (m.has(i.type)) {
            for (let n of i.children){
                s(n);
            }
            return;
        }
        if (i.type === "negated_command") {
            for (let n of i.children){
                if (n.type !== "!") {
                    s(n);
                }
            }
            return;
        }
        if (i.type === "command" || i.type === "variable_assignment") {
            if (R(i)) {
                r = false;
                return;
            }
            t.push(i.text);
            return;
        }
        r = false;
    };
    s(e);
    if (r) {
        return t;
    }
    return null;
}
function R(e) {
    let t = e.type === "command" || e.type === "variable_assignment";
    for (let r of e.children){
        if (r.type === "subshell" && t) {
            return true;
        }
        if (R(r)) {
            return true;
        }
    }
    return false;
}
function rmr(e) {
    if (!e) {
        return false;
    }
    if (e.length > OM) {
        return true;
    }
    let t = kb()?.parse(e);
    if (!t) {
        return true;
    }
    let r = false;
    let s = (i)=>{
        if (r) {
            return;
        }
        if (i.type === "expansion" && i.text.includes("(")) {
            r = true;
            return;
        }
        for (let n of i.children){
            s(n);
        }
    };
    s(t);
    return r;
}
function _v(e) {
    if (!e || e.length > OM) {
        return [];
    }
    let t = kb().parse(e);
    if (!t) {
        return [];
    }
    let r = rde(t, null);
    if (!r) {
        return [];
    }
    return B4e(r);
}
const x = new Set([
    "command_substitution",
    "process_substitution",
    "expansion",
    "simple_expansion",
    "arithmetic_expansion"
]);
function S(e) {
    if (x.has(e.type)) {
        return true;
    }
    return e.children.some(S);
}
const M = new Set([
    "command_substitution",
    "process_substitution",
    "arithmetic_expansion",
    "subshell"
]);
function I(e) {
    if (M.has(e.type)) {
        return true;
    }
    return e.children.some(I);
}
const z = new Set([
    "ansi_c_string",
    "translated_string"
]);
function N(e) {
    if (z.has(e.type)) {
        return true;
    }
    return e.children.some(N);
}
const v = new Set([
    "<",
    ">",
    ">>",
    "<<",
    "<<-",
    "<<<",
    "<&",
    ">&",
    "&>",
    "&>>",
    ">|",
    ">&-",
    "<&-",
    "file_descriptor",
    "heredoc_start",
    "heredoc_body",
    "heredoc_content",
    "heredoc_end"
]);
function A(e) {
    if (e.type.endsWith("_redirect")) {
        let t = e.children.filter((n)=>!v.has(n.type));
        let r = e.children.some((n)=>n.type === ">&-" || n.type === "<&-");
        let s = !r && e.children.some((n)=>n.type === ">&" || n.type === "<&") && t.some((n)=>y(n).startsWith("-"));
        let i = e.type === "heredoc_redirect" || r || s ? 0 : 1;
        if (t.length > i) {
            return true;
        }
    }
    return e.children.some(A);
}
function b(e) {
    if (e.type === "heredoc_redirect") {
        let r = e.children.find((i)=>i.type === "heredoc_start")?.text ?? "";
        if (!(r.length >= 2 && (r.startsWith("'") && r.endsWith("'") || r.startsWith('"') && r.endsWith('"'))) || r.includes("\\")) {
            return true;
        }
    }
    return e.children.some(b);
}
function dio(e, t) {
    if (!e) {
        return false;
    }
    if (e.length > OM || p8t(e)) {
        return true;
    }
    let r = kb().parse(e);
    if (!r || RKe(r)) {
        return true;
    }
    let s = (o)=>A(o) || b(o) || S(o) || N(o) || o.type !== "heredoc_redirect" && L(o.text) || o.type !== "heredoc_redirect" && !o.children.every((u)=>v.has(u.type) || w(u, /\s/.test(u.text))) || o.type !== "heredoc_redirect" && o.children.some((u)=>u.type === "word" && u.text.startsWith("="));
    let i = (o)=>{
        if (x.has(o.type)) {
            return;
        }
        if (o.type === "command") {
            return o;
        }
        let u;
        for (let f of o.children){
            if (f.type.endsWith("_redirect")) {
                continue;
            }
            let l = i(f);
            if (l) {
                u = l;
            }
        }
        return u;
    };
    let n = (o)=>{
        if (x.has(o.type)) {
            return false;
        }
        if (o.type === "redirected_statement") {
            let u = o.children.find((l)=>l.type === "command") ?? i(o);
            let f = u ? t(u.text) : true;
            for (let l of o.children){
                if (l.type.endsWith("_redirect")) {
                    if (f && s(l)) {
                        return true;
                    }
                } else if (n(l)) {
                    return true;
                }
            }
            return false;
        }
        if (o.type === "command") {
            let u = t(o.text);
            for (let f of o.children){
                if (f.type.endsWith("_redirect")) {
                    if (u && s(f)) {
                        return true;
                    }
                } else if (n(f)) {
                    return true;
                }
            }
            return false;
        }
        if (o.type.endsWith("_redirect")) {
            return s(o);
        }
        return o.children.some(n);
    };
    return n(r);
}
const K = new Set([
    "word",
    "string",
    "raw_string",
    "number"
]);
const Q = /(?:^|[^\\])(?:\\\\)*[;|&<>]/;
const j = /(?:^|[^\\])(?:\\\\)*\\$/;
function w(e, t = false) {
    if (e.type === "concatenation") {
        return e.children.every((r)=>w(r, t));
    }
    if (e.type === "word") {
        if (ext.test(e.text)) {
            return false;
        }
        if (Q.test(e.text) || j.test(e.text)) {
            return false;
        }
        if (t && txt.test(e.text)) {
            return false;
        }
        return true;
    }
    if (e.type === "string" || e.type === "raw_string") {
        let r = e.type === "raw_string" ? "'" : '"';
        return e.text.length >= 2 && e.text.startsWith(r) && e.text.endsWith(r);
    }
    return K.has(e.type);
}
function L(e) {
    let t = null;
    let r = false;
    let s = false;
    for(let i = 0; i < e.length; i++){
        let n = e[i];
        if (t === "'") {
            if (n === "'") {
                t = null;
            }
            continue;
        }
        if (t === '"') {
            if (n === "\\" && i + 1 < e.length && '$`"\\'.includes(e[i + 1])) {
                i++;
                continue;
            }
            if (n === "`") {
                return true;
            }
            if (n === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[i + 1] ?? "")) {
                return true;
            }
            if (n === '"') {
                t = null;
            }
            continue;
        }
        if (n === "\\") {
            i++;
            continue;
        }
        if (n === "`") {
            return true;
        }
        if (n === "$" && (e[i + 1] === "'" || e[i + 1] === '"')) {
            return true;
        }
        if (n === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[i + 1] ?? "")) {
            return true;
        }
        if (n === "=" && e[i + 1] === "(") {
            return true;
        }
        if (n === "*" || n === "?" || n === "[") {
            return true;
        }
        if (n === "'" || n === '"') {
            t = n;
            continue;
        }
        if (n === `
`) {
            return false;
        }
        if (n === " " || n === "\t") {
            r = false;
            s = false;
            continue;
        }
        if (n === "{") {
            r = true;
            continue;
        }
        if (r && (n === "," || n === "." && e[i + 1] === ".")) {
            s = true;
            continue;
        }
        if (n === "}" && r && s) {
            return true;
        }
    }
    return t !== null;
}
function lHn(e) {
    if (!e || e.length > OM) {
        return true;
    }
    if (p8t(e)) {
        return true;
    }
    if (L(e)) {
        return true;
    }
    let t = kb().parse(e);
    if (!t || RKe(t)) {
        return true;
    }
    let r = t.children.filter((i)=>i.type !== "comment");
    if (r.length !== 1 || r[0].type !== "command" && !(r[0].type === "redirected_statement" && r[0].children.some((i)=>i.type === "command"))) {
        return true;
    }
    if (S(t) || N(t) || A(t) || b(t)) {
        return true;
    }
    let s = rde(t, null);
    if (!s) {
        return true;
    }
    for (let i of s.children){
        if (i.type === "command_name" || i.type === "variable_assignment") {
            continue;
        }
        if (i.type.endsWith("_redirect")) {
            continue;
        }
        if (!w(i, /\s/.test(i.text))) {
            return true;
        }
    }
    return false;
}
function y(e) {
    switch(e.type){
        case "raw_string":
            return e.text.slice(1, -1);
        case "string":
            return e.text.slice(1, -1).replace(/\\([$`"\\\n])/g, (t, r)=>{
                if (r === `
`) {
                    return "";
                }
                return r;
            });
        case "word":
            return e.text.replace(/\\([\s\S])/g, (t, r)=>{
                if (r === `
`) {
                    return "";
                }
                return r;
            });
        default:
            return e.text;
    }
}
function l_e(commandWithoutRedirections) {
    let t = {
        commandWithoutRedirections,
        redirections: [],
        hasDangerousRedirection: false,
        dangerousRedirectionReason: undefined
    };
    if (!commandWithoutRedirections || commandWithoutRedirections.length > OM) {
        return t;
    }
    let r = kb().parse(commandWithoutRedirections);
    if (!r) {
        return t;
    }
    let redirections = [];
    let hasDangerousRedirection = false;
    let dangerousRedirectionReason;
    let o = (l)=>{
        if (l.type === "file_redirect") {
            let operator = null;
            let g = false;
            let a = null;
            let C = 0;
            for (let c of l.children){
                if (c.type === ">" || c.type === "&>" || c.type === ">|") {
                    operator = ">";
                } else if (c.type === ">>" || c.type === "&>>" || c.type === ">>|") {
                    operator = ">>";
                } else if (c.type === ">&") {
                    operator = ">";
                    g = true;
                } else if (c.type === "<&") {
                    let _ = l.children.filter((p)=>p !== c && p.type !== "file_descriptor");
                    if (_.length > 1 || _.some((p)=>y(p).startsWith("-"))) {
                        hasDangerousRedirection = true;
                        if (dangerousRedirectionReason !== "network_device") {
                            dangerousRedirectionReason = "shell_expansion";
                        }
                    }
                    return;
                } else if (c.type === ">&-" || c.type === "<&-") {
                    if (l.children.filter((p)=>p !== c && p.type !== "file_descriptor").length > 0) {
                        hasDangerousRedirection = true;
                        if (dangerousRedirectionReason !== "network_device") {
                            dangerousRedirectionReason = "shell_expansion";
                        }
                    }
                    return;
                } else if (c.type === "<") {
                    let _ = l.children.filter((T)=>T !== c && T.type !== "file_descriptor");
                    if (_.length > 1) {
                        hasDangerousRedirection = true;
                        if (dangerousRedirectionReason !== "network_device") {
                            dangerousRedirectionReason = "shell_expansion";
                        }
                        return;
                    }
                    let p = _[0];
                    if (p) {
                        let T = y(p);
                        if (/^\/dev\/(tcp|udp)\//.test(T)) {
                            hasDangerousRedirection = true;
                            dangerousRedirectionReason = "network_device";
                        }
                    }
                    return;
                } else if (c.type !== "file_descriptor") {
                    a = c;
                    C++;
                }
            }
            if (!operator || !a) {
                return;
            }
            if (C > 1) {
                hasDangerousRedirection = true;
                if (dangerousRedirectionReason !== "network_device") {
                    dangerousRedirectionReason = "shell_expansion";
                }
                return;
            }
            if (g && y(a).startsWith("-")) {
                hasDangerousRedirection = true;
                if (dangerousRedirectionReason !== "network_device") {
                    dangerousRedirectionReason = "shell_expansion";
                }
                return;
            }
            if (a.type === "number" && a.children.length === 0 && g) {
                return;
            }
            if (!(a.type === "word" && a.children.length === 0 || a.type === "number" && a.children.length === 0 || a.type === "raw_string" || a.type === "string" && !a.children.some((c)=>c.type !== "string_content" && c.type !== '"'))) {
                hasDangerousRedirection = true;
                if (dangerousRedirectionReason !== "network_device") {
                    dangerousRedirectionReason = "shell_expansion";
                }
                return;
            }
            let target = y(a);
            if (/^~|[*?[]/.test(target)) {
                hasDangerousRedirection = true;
                if (dangerousRedirectionReason !== "network_device") {
                    dangerousRedirectionReason = "shell_expansion";
                }
                return;
            }
            if (target.startsWith("!") || target.startsWith("=")) {
                hasDangerousRedirection = true;
                if (dangerousRedirectionReason !== "network_device") {
                    dangerousRedirectionReason = "shell_expansion";
                }
                return;
            }
            if (g && !/^[A-Za-z0-9./_-]+$/.test(target)) {
                hasDangerousRedirection = true;
                if (dangerousRedirectionReason !== "network_device") {
                    dangerousRedirectionReason = "shell_expansion";
                }
                return;
            }
            if (/^\/dev\/(tcp|udp)\//.test(target)) {
                hasDangerousRedirection = true;
                dangerousRedirectionReason = "network_device";
                return;
            }
            redirections.push({
                target,
                operator
            });
            return;
        }
        for (let d of l.children){
            o(d);
        }
    };
    o(r);
    let u = [];
    let f = (l)=>{
        if (l.type === "comment") {
            return;
        }
        if (l.type === "redirected_statement") {
            for (let d of l.children){
                if (!d.type.endsWith("_redirect")) {
                    f(d);
                }
            }
            return;
        }
        if (m.has(l.type)) {
            for (let d of l.children){
                f(d);
            }
            return;
        }
        u.push(l.text);
    };
    f(r.type === "ERROR" && r.children[0]?.type === "program" ? r.children[0] : r);
    return {
        commandWithoutRedirections: u.length > 0 ? u.join(" ") : commandWithoutRedirections,
        redirections,
        hasDangerousRedirection,
        dangerousRedirectionReason
    };
}
export { p8t, aHn, RKe, OM, Vg, cio, Xot, emr, tmr, f8t, nmr, rmr, _v, dio, lHn, l_e };
