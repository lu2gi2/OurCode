import { Ke, x, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { $m } from "/$bunfs/root/chunk-ph7a449e.js";
import { Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
const N = 8;
const F = /^v?\d+(?:[._-]\d+)*$/i;
const S = new RegExp("^[A-Za-z0-9._~+/=%-]+$");
const I = new RegExp("[^A-Za-z0-9._~+/=%-]+");
const K = /^(?=.{1,32}$)(?:[a-z]+|[A-Z][a-z]{2,}|[A-Z]+|\d+)(?:[-_](?:[a-z]+|[A-Z][a-z]{2,}|[A-Z]+|\d+))*$/;
function p(t) {
    return /[a-z]/i.test(t) && (/\d/.test(t) || /[a-z]/.test(t) && /[A-Z]/.test(t));
}
function h(t) {
    return t.length >= 24 && S.test(t) && !F.test(t) && !K.test(t) && p(t);
}
function E(t) {
    try {
        return decodeURIComponent(t);
    } catch  {
        return t.replace(/%[0-9A-Fa-f]{2}/g, (e)=>String.fromCharCode(parseInt(e.slice(1), 16)));
    }
}
const Z = /^(?:\*|application|audio|font|example|haptics|image|message|model|multipart|text|video)\/(?:\*|[a-z0-9](?:[a-z0-9!#$&^_.+-])*)(?:\s*;\s*[a-z0-9!#$&^_.-]+=[\w!#$&^_.+-]*)*$/i;
const q = /^(?:gzip|x-gzip|deflate|br|zstd|compress|identity|\*)(?:\s*;\s*q=[\d.]+)?$/i;
const G = /^charset=[\w.:-]+$/i;
const V = /(?<![;,\s])[;,\s]+$/;
function L(t) {
    let e = t.replace(V, "").split(",").map((n)=>n.trim()).filter(Boolean);
    if (e.length === 0) {
        return false;
    }
    return e.every((n)=>Z.test(n) || q.test(n) || G.test(n));
}
const v = new Set([
    "accept",
    "accept-encoding",
    "content-length",
    "content-type",
    "user-agent"
]);
const Q = /^\d+$/;
const W = /(?:^|[^A-Za-z0-9_-])[A-Za-z][A-Za-z0-9_-]{1,31}\s+[A-Za-z0-9._~+/=%-]{8,}(?![A-Za-z0-9._~+/=%-])/;
const Y = /([;,&\s]+)/;
const J = /[a-z0-9+.-]+/gi;
const X = /^(?:https?|wss?|ftp)$/i;
const tt = /[;,&=]/;
const et = /[\t\n\r]/g;
function w(t) {
    return t.length >= N && p(t) && !L(t);
}
function b(t) {
    return w(t) || t.includes("+") && t.split("+").some(w);
}
function nt(t) {
    return t.split(/\s+/).some((e)=>e.includes("+") && e.split("+").some(w)) || t.split(/[;,&\s]+/).some((e)=>{
        let n = e.indexOf("=");
        if (n === -1) {
            return b(e);
        }
        return b(e.slice(0, n)) || b(e.slice(n + 1));
    });
}
function rt(t, e) {
    if (t === "user-agent") {
        return !W.test(e);
    }
    return Q.test(e) || L(e) && !nt(e);
}
function Nie(t) {
    let e = {};
    for (let [n, o] of Object.entries(t)){
        let r = n.toLowerCase();
        e[n] = v.has(r) && rt(r, o) ? o : "[REDACTED]";
    }
    return e;
}
function P(t, e = false) {
    let n = t.replace(et, "");
    if (!n.includes(":")) {
        return false;
    }
    let o = e ? -1 : n.lastIndexOf("?");
    for (let r of n.matchAll(J)){
        let c = r.index + r[0].length;
        if (n[c] !== ":" || !/[a-z]/i.test(r[0])) {
            continue;
        }
        if (/[/\\]/.test(n[c + 1] ?? "") || !e && X.test(r[0]) || o > c) {
            return true;
        }
    }
    return false;
}
function R(t) {
    let e = t;
    for(let n = 0;; n++){
        if (P(e)) {
            return true;
        }
        let o = n < 3 ? E(e) : e;
        if (o === e) {
            return false;
        }
        e = o;
    }
}
function _(t) {
    let e = t.length < 2 ? -1 : t.lastIndexOf("@", t.length - 2);
    let n = t.indexOf(":");
    if (n !== -1 && e > n + 1) {
        return e;
    }
    return -1;
}
function d(t, e = true) {
    for (let n of D([
        t,
        t.replaceAll(" ", "+")
    ])){
        let o = n;
        for(let r = 0;; r++){
            if (h(o) || P(o) || _(o) !== -1 || e && A(o)) {
                return true;
            }
            let c = r < 3 ? E(o) : o;
            if (c === o) {
                break;
            }
            o = c;
        }
    }
    return false;
}
function y(t, e) {
    if (!e || d(t)) {
        return "REDACTED";
    }
    return t;
}
function m(t) {
    return h(t) || h(E(t));
}
function A(t) {
    return t.replace(/\s+/g, "+").split(I).some(m);
}
const ot = new Map([
    [
        "state",
        "sensitive"
    ],
    [
        "nonce",
        "sensitive"
    ],
    [
        "code_challenge",
        "sensitive"
    ],
    [
        "code_verifier",
        "sensitive"
    ],
    [
        "code",
        "sensitive"
    ],
    [
        "redirect_uri",
        "url"
    ],
    [
        "resource",
        "url"
    ],
    [
        "audience",
        "url"
    ],
    [
        "scope",
        "judged"
    ],
    [
        "client_id",
        "judged"
    ],
    [
        "response_type",
        "judged"
    ],
    [
        "response_mode",
        "judged"
    ],
    [
        "code_challenge_method",
        "judged"
    ],
    [
        "prompt",
        "judged"
    ],
    [
        "access_type",
        "judged"
    ],
    [
        "display",
        "judged"
    ]
]);
function Ygn(t) {
    let e = new URLSearchParams;
    for (let [o, r] of t.searchParams){
        let c = y(o, r !== "");
        e.append(c, c === "REDACTED" ? "REDACTED" : ik(o, r));
    }
    let n = e.toString();
    if (n === "") {
        return "";
    }
    return `?${n}`;
}
function ik(t, e) {
    let n = ot.get(t);
    if (n === undefined) {
        return "REDACTED";
    }
    switch(n){
        case "sensitive":
            return "[REDACTED]";
        case "url":
            if (R(e) || R(e.replaceAll(" ", "+"))) {
                return qr(e);
            }
            return "REDACTED";
        case "judged":
            return st(e);
    }
}
function st(t) {
    let e = [];
    let n = [];
    let o = ()=>{
        if (n.length > 0) {
            e.push(...it(n));
            n = [];
        }
    };
    for (let r of t.split(" ")){
        if (R(r)) {
            o();
            e.push(qr(r));
        } else {
            n.push(r);
        }
    }
    o();
    return e.join(" ");
}
function it(t) {
    if (d(t.join(" "), false)) {
        return [
            "REDACTED"
        ];
    }
    let e = [];
    let n = [];
    let o = ()=>{
        if (n.length > 0) {
            e.push(...d(n.join("+")) ? [
                "REDACTED"
            ] : n.map((r)=>{
                if (d(r)) {
                    return "REDACTED";
                }
                return r;
            }));
            n = [];
        }
    };
    for (let r of t){
        if (r === "" || S.test(r)) {
            n.push(r);
        } else {
            o();
            e.push(d(r) || A(r) ? "REDACTED" : r);
        }
    }
    o();
    return e;
}
function qr(t) {
    let e;
    try {
        e = new URL(t);
    } catch  {
        return "[unparseable url]";
    }
    let n = e.host === "" && !e.href.startsWith(`${e.protocol}//`);
    if (e.username !== "") {
        e.username = "REDACTED";
    }
    if (e.password !== "") {
        e.password = "REDACTED";
    }
    let o = (s)=>{
        let i = s.indexOf("=");
        if (i === -1 || /^=*$/.test(s.slice(i + 1))) {
            if (m(s)) {
                return "REDACTED";
            }
            return s;
        }
        let a = s.slice(0, i);
        return `${m(a) || m(s) && p(a) ? "REDACTED" : a}=REDACTED`;
    };
    let r = (s)=>s.split(Y).map((i, a)=>{
            if (a % 2 === 1) {
                return i;
            }
            return o(i);
        }).join("");
    let c = (s)=>{
        let i = r(s);
        if (R(i) || A(i)) {
            return "REDACTED";
        }
        let a = i;
        for(let g = 0; g < 3; g++){
            let u = E(a);
            if (u === a) {
                break;
            }
            if (r(u) !== u || _(u) !== -1 || A(u)) {
                return "REDACTED";
            }
            a = u;
        }
        return i;
    };
    let C = `${n ? e.protocol : ""}${e.pathname}`;
    let M = _(C);
    let f;
    if (P(e.pathname, true)) {
        let s = e.pathname.indexOf("/");
        let i = `${e.protocol}${s === -1 ? e.pathname : e.pathname.slice(0, s)}`;
        f = n && _(i) !== -1 ? "REDACTED" : `${n ? e.protocol : ""}${e.pathname.startsWith("/") ? "/" : ""}REDACTED`;
    } else {
        let s = e.pathname.split("/").map(c);
        if (n) {
            s[0] = `${e.protocol}${s[0] ?? ""}`;
        }
        if (M !== -1) {
            let i = (B)=>Lt(C.slice(0, B), "/");
            let a = i(C.indexOf(":"));
            let g = i(M);
            let u = s[g] ?? "";
            let U = u.includes("@") ? u.slice(u.lastIndexOf("@")) : "";
            s.splice(a, g - a + 1, `REDACTED${U}`);
        }
        f = s.join("/");
    }
    if (!n) {
        e.pathname = f;
        if (tt.test(e.hostname)) {
            e.hostname = "REDACTED";
        }
    }
    let z = D(e.searchParams.keys());
    let j = new Set([
        ...e.searchParams.entries()
    ].filter(([, s])=>s === "").map(([s])=>s));
    let O = new URLSearchParams;
    for (let s of z){
        O.append(y(s, !j.has(s)), "REDACTED");
    }
    e.search = O.toString();
    e.hash = "";
    if (n) {
        return `${f}${e.search}`;
    }
    return e.href;
}
function H(t) {
    try {
        let e = new URL(t);
        return e.username !== "" || e.password !== "";
    } catch  {
        return true;
    }
}
function T(t) {
    return Ke(t) || t instanceof Error && (t.name === "TimeoutError" || t.name === "AuthenticationCancelledError") || t instanceof x;
}
function at(t, e) {
    let n = String(e);
    if (H(n) && !T(t)) {
        return `${t instanceof Error ? t.name : typeof t} fetching ${qr(n)}`;
    }
    return l(t);
}
function ct(t) {
    try {
        return qr(t) === new URL(t).href;
    } catch  {
        return false;
    }
}
function nD(t, e) {
    return k(t, String(e), "from the MCP SDK for");
}
function k(t, e, n) {
    if (T(t) || ct(e)) {
        return l(t);
    }
    let o = t instanceof Error ? /\bHTTP (\d{3})\b/.exec(t.message)?.[1] : undefined;
    let r = $m(t)?.code;
    return `${o ? `HTTP ${o}` : t instanceof Error ? t.name : typeof t} ${n} ${qr(e)}${r ? ` (${r})` : ""}`;
}
function NG(t) {
    if (T(t)) {
        return l(t);
    }
    let e = $m(t)?.code;
    return `${t instanceof Error ? t.name : typeof t}${e ? ` (${e})` : ""}`;
}
function Fo(t, e) {
    switch(e.type){
        case "ws":
        case "ws-ide":
        case "sse":
        case "sse-ide":
        case "http":
        case "claudeai-proxy":
            return k(t, e.url, "dialing");
        case undefined:
        case "stdio":
        case "sdk":
            return l(t);
        default:
            return e;
    }
}
function nEe(t, e) {
    let n = Fo(t, e);
    if (n === l(t)) {
        return t;
    }
    return n;
}
function rD(t, e) {
    if (T(t)) {
        throw t;
    }
    if (H(String(e))) {
        let code = $m(t)?.code;
        throw Object.assign(TypeError(at(t, e)), code === undefined ? {} : {
            code
        });
    }
    throw t;
}
export { Nie, Ygn, ik, qr, nD, NG, Fo, nEe, rD };
