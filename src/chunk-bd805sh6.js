import { x, v, z, H9, lj } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { On, Bn, my, gy, Qa, FN, lA, iw, Jse, XZ, UN, fa, Va, zPe, Wb, zO, zP, ll, ks, sT, $H, Qse } from "/$bunfs/root/chunk-xgw72tt1.js";
import { Bpt, j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, cs, K, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { tj } from "/$bunfs/root/chunk-24agvrd9.js";
import { Ei, Ca, ne, Ww, Qe, Nr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import * as E from "fs";
import { realpath, writeFileSync } from "fs";
import { appendFile, chmod, copyFile, link, lstat, mkdir, open, readdir, readFile, readlink, realpath as realpath_1, rename, rmdir, rm, stat, symlink, unlink } from "fs/promises";
import { homedir } from "os";
import * as g from "path";
import { dirname, isAbsolute, join, resolve } from "path";
const nr = (path)=>new Promise((resolvePromise, rejectPromise)=>{
        realpath(path, (s, i)=>{
            if (s === null) {
                return resolvePromise(i);
            }
            return rejectPromise(s);
        });
    });
const rr = 0xffffffffffffffffn;
function Hg(e) {
    let n = BigInt(e);
    return n === 0n || n === -1n || n === rr || n === 1n << 64n;
}
function oh(e) {
    return {
        ok: true,
        value: e
    };
}
function mp(error) {
    return {
        ok: false,
        error
    };
}
class _t extends Error {
    constructor(e){
        super("Result was an error (see .error)");
        this.name = "ResultError";
        Object.defineProperty(this, "error", {
            value: e,
            enumerable: false
        });
    }
}
function YOs(e) {
    if (e.ok) {
        return e.value;
    }
    throw new _t(e.error);
}
const ff = {
    home: (e)=>({
            space: "home",
            path: e
        }),
    workspace: (e)=>({
            space: "workspace",
            path: e
        }),
    system: (e)=>({
            space: "system",
            path: e
        }),
    userNamed: (e)=>({
            space: "userNamed",
            path: e
        })
};
function ICo(e) {
    if (typeof e !== "object" || e === null) {
        return false;
    }
    let n = Reflect.get(e, "code");
    let r = Reflect.get(e, "telemetryCode");
    return n === "Failed" && typeof r === "string" && (lj(r) !== undefined || /^ERR_[A-Z0-9_]+$/.test(r));
}
function XOs(cause) {
    if (ICo(cause)) {
        if (cause.cause instanceof Error) {
            return cause.cause;
        }
        return Object.assign(new x(gt(cause), "host file operation refused by the storage backend"), {
            code: cause.telemetryCode,
            cause
        });
    }
    return Object.assign(new x(gt(cause), "host file operation could not be performed by the storage backend"), {
        cause
    });
}
const Be = globalThis.process?.getBuiltinModule?.("async_hooks");
const vt = Be !== undefined;
const Me = Be ? new Be.AsyncLocalStorage : {
    run: (e, n)=>n(),
    getStore: ()=>{}
};
function Ue({ writeBatch, sizeOf, flushIntervalMs = 1000, maxBufferSize = 100, maxBufferBytes = Infinity, immediateMode = false }) {
    let a = [];
    let u = 0;
    let l = null;
    let c = null;
    function d() {
        if (l) {
            clearTimeout(l);
            l = null;
        }
    }
    function p(f) {
        try {
            writeBatch(f);
        } catch  {}
    }
    function flush() {
        if (c) {
            p(c);
            c = null;
        }
        if (a.length === 0) {
            return;
        }
        p(a);
        a = [];
        u = 0;
        d();
    }
    function h() {
        if (!l) {
            l = setTimeout(flush, flushIntervalMs);
        }
    }
    function k() {
        if (c) {
            c.push(...a);
            a = [];
            u = 0;
            d();
            return;
        }
        let f = a;
        a = [];
        u = 0;
        d();
        c = f;
        setImmediate(()=>{
            let y = c;
            c = null;
            if (y) {
                p(y);
            }
        });
    }
    return {
        write (f) {
            if (immediateMode) {
                p([
                    f
                ]);
                return;
            }
            a.push(f);
            u += sizeOf(f);
            h();
            if (a.length >= maxBufferSize || u >= maxBufferBytes) {
                k();
            }
        },
        flush,
        dispose () {
            flush();
        }
    };
}
function JOs({ writeFn, flushIntervalMs, maxBufferSize, maxBufferBytes, immediateMode }) {
    return Ue({
        writeBatch: (o)=>writeFn(o.join("")),
        sizeOf: (o)=>o.length,
        flushIntervalMs,
        maxBufferSize,
        maxBufferBytes,
        immediateMode
    });
}
function sr(e) {
    if (typeof e === "function") {
        return e;
    }
    if (Symbol.asyncDispose in e) {
        return ()=>e[Symbol.asyncDispose]();
    }
    return ()=>e[Symbol.dispose]();
}
class We {
    #e = new Set;
    #t = false;
    get drainStarted() {
        return this.#t;
    }
    register(e) {
        let n = sr(e);
        this.#e.add(n);
        let r = ()=>{
            this.#e.delete(n);
        };
        return Object.assign(r, {
            [Symbol.dispose]: r
        });
    }
    async drain() {
        this.#t = true;
        let e = Array.from(this.#e);
        this.#e.clear();
        let r = (await Promise.allSettled(e.map(async (s)=>s()))).find((s)=>s.status === "rejected");
        if (r !== undefined) {
            throw r.reason;
        }
    }
    async [Symbol.asyncDispose]() {
        await this.drain();
    }
    get sizeForTesting() {
        return this.#e.size;
    }
}
class Ot {
    cleanup = new We;
    preExitFlush = new We;
}
const ir = new q(()=>new Ot);
function ge() {
    return cs(ir);
}
const IZ = 2000;
function St(e) {
    return ge().cleanup.register(e);
}
async function upt() {
    await ge().cleanup.drain();
}
function TS() {
    return ge().cleanup.drainStarted;
}
function $P(e) {
    return ge().preExitFlush.register(e);
}
async function i2n() {
    await ge().preExitFlush.drain();
}
class Tt {
    parsed = new Map;
    lookup(e) {
        return this.parsed.get(e);
    }
    remember(e, n) {
        this.parsed.set(e, n);
    }
    reset() {
        this.parsed.clear();
    }
}
const Lt = new Tt;
function It(e) {
    let n = Lt.lookup(e);
    if (n !== undefined) {
        return n;
    }
    let r = or(e);
    Lt.remember(e, r);
    return r;
}
function or(e) {
    if (!e || e.trim() === "") {
        return null;
    }
    let n = e.split(",").map((o)=>o.trim()).filter(Boolean);
    if (n.length === 0) {
        return null;
    }
    let isExclusive = n.some((o)=>o.startsWith("!"));
    let s = n.some((o)=>!o.startsWith("!"));
    if (isExclusive && s) {
        return null;
    }
    let i = n.map((o)=>o.replace(/^!/, "").toLowerCase());
    return {
        include: isExclusive ? [] : i,
        exclude: isExclusive ? i : [],
        isExclusive
    };
}
function ar(e) {
    let n = [];
    let r = e.match(/^MCP server ["']([^"']+)["']/);
    if (r && r[1]) {
        n.push("mcp");
        n.push(r[1].toLowerCase());
    } else {
        let o = e.match(/^([^:[]+):/);
        if (o && o[1]) {
            n.push(o[1].trim().toLowerCase());
        }
    }
    let s = e.match(/^\[([^\]]+)]/);
    if (s && s[1]) {
        n.push(s[1].trim().toLowerCase());
    }
    if (e.toLowerCase().includes("1p event:")) {
        n.push("1p");
    }
    let i = e.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
    if (i && i[1]) {
        let o = i[1].trim().toLowerCase();
        if (o.length < 30 && !o.includes(" ")) {
            n.push(o);
        }
    }
    return Array.from(new Set(n));
}
function ur(e, filter) {
    if (!filter) {
        return true;
    }
    if (e.length === 0) {
        return false;
    }
    if (filter.isExclusive) {
        return !e.some((r)=>filter.exclude.includes(r));
    } else {
        return e.some((r)=>filter.include.includes(r));
    }
}
function Ct(e, filter) {
    if (!filter) {
        return true;
    }
    let r = ar(e);
    return ur(r, filter);
}
const lr = new RegExp("[\\p{M}\\uFF9E\\uFF9F]{32,}", "gu");
const cr = new RegExp("[\\p{M}\\uFF9E\\uFF9F]", "u");
const Ke = new Map;
const oe = [];
const Ge = new Map;
function ye(e, n) {
    return e !== n && (e + n).normalize("NFD") === n + e;
}
function Ft(e) {
    let n = Ke.get(e);
    if (n !== undefined) {
        return n;
    }
    let sample = String.fromCodePoint(e);
    let s = null;
    if (sample === "̴" || ye(sample, "̴") || ye("ͅ", sample)) {
        let order = 0;
        let o = oe.length;
        while(order < o && s === null){
            let a = order + o >> 1;
            let u = oe[a];
            if (ye(sample, u.sample)) {
                order = a + 1;
            } else if (ye(u.sample, sample)) {
                o = a;
            } else {
                s = u;
            }
        }
        if (s === null) {
            s = {
                order,
                sample
            };
            oe.splice(order, 0, s);
            for(let a = order + 1; a < oe.length; a++){
                oe[a].order = a;
            }
        }
    }
    Ke.set(e, s);
    return s;
}
function Nt(e) {
    let n = Ge.get(e);
    if (n === undefined) {
        n = Array.from(String.fromCodePoint(e).normalize("NFKD"), (r)=>r.codePointAt(0));
        Ge.set(e, n);
    }
    return n;
}
const Pt = 4096;
function dr(e, n) {
    let r = "";
    for(let s = 0; s < n; s += Pt){
        r += String.fromCodePoint(...e.subarray(s, Math.min(s + Pt, n)));
    }
    return r;
}
function fr(e) {
    let n = new Int32Array(e.length + 16);
    let r = 0;
    for(let a = 0; a < e.length;){
        let u = e.codePointAt(a);
        a += u > 65535 ? 2 : 1;
        for (let l of Nt(u)){
            if (r === n.length) {
                let c = new Int32Array(n.length * 2);
                c.set(n);
                n = c;
            }
            n[r++] = l;
            Ft(l);
        }
    }
    let s = new Int16Array(r);
    for(let a = 0; a < r; a++){
        s[a] = Ke.get(n[a])?.order ?? -1;
    }
    let i = n.slice(0, r);
    let o = new Int32Array(oe.length);
    for(let a = 0; a < r;){
        let u = a;
        let l = true;
        while(u < r && s[u] >= 0){
            l &&= u === a || s[u - 1] <= s[u];
            u++;
        }
        if (l) {
            a = u + 1;
            continue;
        }
        o.fill(0);
        for(let d = a; d < u; d++){
            o[s[d]]++;
        }
        let c = a;
        for(let d = 0; d < o.length; d++){
            let p = o[d];
            o[d] = c;
            c += p;
        }
        for(let d = a; d < u; d++){
            i[o[s[d]]++] = n[d];
        }
        a = u;
    }
    return dr(i, r);
}
function NCo(e) {
    if (e.length < 32) {
        return e;
    }
    return e.replace(lr, fr);
}
const Dt = 128;
function $t(e) {
    if (e < 768) {
        return true;
    }
    let n = Ge.get(e);
    if (n === undefined && !cr.test(String.fromCodePoint(e))) {
        return true;
    }
    return Ft((n ?? Nt(e))[0]) === null;
}
function gr(e, n) {
    let r = n;
    if (r < e.length && (e.charCodeAt(r) & 64512) === 56320 && (e.charCodeAt(r - 1) & 64512) === 55296) {
        r++;
    }
    while(r < e.length){
        let s = e.codePointAt(r);
        if ($t(s)) {
            break;
        }
        r += s > 65535 ? 2 : 1;
    }
    return Math.min(r, e.length);
}
function pr(e) {
    let e_length = e.length;
    while(e_length > 0){
        e_length--;
        if (e_length > 0 && (e.charCodeAt(e_length) & 64512) === 56320 && (e.charCodeAt(e_length - 1) & 64512) === 55296) {
            e_length--;
        }
        if ($t(e.codePointAt(e_length))) {
            return e_length;
        }
    }
    return 0;
}
function Ht(e, n) {
    let r = NCo(e);
    if (r.length <= Dt) {
        return r.normalize(n);
    }
    let s = [];
    let i = "";
    for(let o = 0; o < r.length;){
        let a = gr(r, o + Dt);
        let u = (i + r.slice(o, a)).normalize(n);
        let l = a === r.length ? u.length : pr(u);
        s.push(u.slice(0, l));
        i = u.slice(l);
        o = a;
    }
    return s.join("");
}
function MZ(e) {
    return Ht(e, "NFKC");
}
function QOs(e) {
    return Ht(e, "NFKD");
}
const hr = /[\x00-\x1f\x7f-\x9f\u2028\u2029]/g;
const y9 = 256;
const d2n = /[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;
function mr(e) {
    return e.length <= 256 && !d2n.test(e);
}
function HZ(e) {
    return e.length > 0 && mr(e);
}
function E8e(e) {
    return e.length <= 256 && /^[A-Za-z0-9_:.-]+$/.test(e);
}
function ZOs(e) {
    return e.length <= 256 && /^[\p{L}\p{M}\p{N}_:.-]+$/u.test(e);
}
function $Co(e) {
    return e.length <= 256 && /^(?:\/(?!\.\.?(?:\/|$))[A-Za-z0-9._+@-]+)+$/.test(e);
}
function sA(e) {
    return Hd(e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
}
function Hd(e) {
    return e.replace(hr, (n)=>`&#${n.charCodeAt(0)};`);
}
function ej(e) {
    return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function su(e) {
    return Hd(ej(String(e ?? "")));
}
function JRr(e) {
    return su(e).replaceAll('"', "&quot;");
}
function un(e) {
    return Bun.stripANSI(e);
}
function hpt(e) {
    return Ww(un(Ww(String(e))));
}
function DN(e) {
    return e.replace(/[^\n\r\v\f\x85\u2028\u2029]+/g, (n)=>un(n));
}
const Bt = "\\p{Default_Ignorable_Code_Point}\\u2800";
const qy = `\\p{Cc}\\p{Cf}\\p{Cs}\\p{Co}\\p{Cn}\\u2028\\u2029${Bt}`;
const TPe = String.raw`\u00ad\u034f\u061c\u115f\u1160\u17b4\u17b5\u180b-\u180f\u200b-\u200f\u202a-\u202e\u2060-\u206f\u2800\u3164\ufe00-\ufe0f\uffa0\ufff0-\ufffb\uDC00-\uDFFF\uDB40-\uDB43`;
const Mt = String.raw`\u0600-\u0605\u06dd\u070f\u0890\u0891\u08e2`;
const k8e = `[${TPe}${Mt}\\ufeff]*`;
const eMs = new RegExp(`[${TPe}${Mt}\\ufeff]`);
function gBe(e) {
    return e.replace(/([a-z)])(?=[a-z(\[])/gi, `$1${k8e}`).replace(/\[_-\]\?/g, `(?:[_-]${k8e})?`);
}
const Ut = new RegExp(`[${qy}]+`, "gu");
const ze = "\\u200D\\uFE0E\\uFE0F";
const yr = new RegExp(`(?:(?![${ze}])[${qy}])+`, "gu");
const br = new RegExp(`(?:(?![${ze}\\n])[${qy}])+`, "gu");
const Er = new RegExp(`(?<!\\S)[${ze}]+`, "gu");
const Sr = /\p{Cs}/gu;
function LO(e, n, r) {
    let s = r?.keepNewlines === true || r?.keepEmojiJoiners === true;
    let i = un(e.replace(Sr, "\u200B")).replace(r?.keepNewlines ? br : s ? yr : Ut, n);
    if (s) {
        return i.replace(Er, "");
    }
    return i;
}
const xr = new RegExp(`[${qy}]`, "u");
const kr = /(?! )\p{Zs}|[\uFFFC\u{1D159}\u{13441}\u{13442}\u{16FE4}]|^ | $/u;
const be = "[\\p{M}\\u1160-\\u11FF\\uD7B0-\\uD7FF]";
const wr = new RegExp(`(?<![\\p{L}\\p{N}\\p{M}])${be}|${be}{9}|\\p{Soft_Dotted}\\p{M}*\\u0307|[\\u0131\\u0237]\\p{M}|(?<=[\\p{sc=Latin}\\p{sc=Common}]${be}*)(?!\\p{sc=Inherited})${be}`, "u");
function tMs(e) {
    return Ar(e) && !e.includes("  ") && !wr.test(e);
}
function Ar(e) {
    return HZ(e) && !xr.test(e) && !kr.test(e);
}
const Rr = new RegExp(`[\\p{Cf}\\p{Co}\\p{Cn}\\u2028\\u2029\\u007F-\\u009F${Bt}]`, "gu");
function _r(e) {
    let n = e.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, "");
    n = n.replace(/[\u200B-\u200F]/g, "").replace(/[\u202A-\u202E]/g, "").replace(/[\u2066-\u2069]/g, "").replace(/[\uFEFF]/g, "").replace(/[\uE000-\uF8FF]/g, "");
    return n;
}
function gf(e) {
    let n = Ww(e);
    for(let r = 0; r < 10; r++){
        let s = _r(n);
        if (s === n) {
            return n;
        }
        n = s;
    }
    return n;
}
const vr = /\p{Default_Ignorable_Code_Point}/gu;
function Dg(e) {
    return Nr(gf(e).replace(vr, ""));
}
function FCo(e) {
    return !/[^\0-\x7f]/.test(e);
}
function kon(e) {
    if (FCo(e)) {
        return e;
    }
    let n = e;
    let r = "";
    let s = 0;
    let i = 10;
    while(n !== r && s < i){
        r = n;
        n = MZ(n);
        n = gf(n);
        s++;
    }
    if (s >= i) {
        throw Error(`Unicode sanitization reached maximum iterations (${i}) for input: ${e.slice(0, 100)}`);
    }
    return n;
}
function NO(e) {
    if (typeof e === "string") {
        return kon(e);
    }
    if (Array.isArray(e)) {
        return e.map(NO);
    }
    if (e !== null && typeof e === "object") {
        let n = {};
        for (let [r, s] of Object.entries(e)){
            let i = NO(r);
            if (i !== "__proto__") {
                n[i] = NO(s);
            }
        }
        return n;
    }
    return e;
}
function Hc(e) {
    return T8e(e.replace(/\\(?=u[0-9a-fA-F]{4})/g, "\\u005c"));
}
function T8e(e) {
    return e.replace(/[^\x20-\x7e]/g, a6);
}
function Rn(e) {
    return e.replace(/[\p{Cc}\p{Cf}\u2028\u2029]+/gu, " ");
}
function OH(e) {
    return e.replace(Rr, (n)=>Array.from({
            length: n.length
        }, (r, s)=>`\\u${n.charCodeAt(s).toString(16).padStart(4, "0")}`).join(""));
}
function Hse(e) {
    return Ww(un(e)).replace(Ut, " ");
}
function ei(e, n) {
    let r = Hse(e);
    if (n?.drop) {
        r = r.replace(n.drop, "");
    }
    r = r.replace(/\s+/g, " ").trim();
    if (n?.maxCodeUnits !== undefined) {
        r = ne(r, n.maxCodeUnits).trim();
    }
    return r;
}
function nMs(e) {
    return ei(e) === e;
}
const A8e = 255;
function vC(e) {
    let n = ei(e, {
        drop: /[`<>]/g
    }).replace(/\]\(/g, "] (").replace(/!\[/g, "! [").replace(/\]\[/g, "] [").replace(/\]:/g, "] :");
    return ne(n, A8e).trim();
}
const Ton = 2048;
const u2n = /[`\[\]<>]/g;
function DZ(e) {
    let n = ei(e).replace(/\]\(/g, "] (").replace(/!\[/g, "! [").replace(/\]\[/g, "] [").replace(/\]:/g, "] :").replace(/</g, "< ").replace(/\s+/g, " ").trim();
    return ne(n, Ton).trim();
}
function ypt(e) {
    return e.replace(/[\u007F-\u009F\u2028\u2029\p{Cf}]/gu, a6);
}
function a6(e) {
    return e.split("").map((n)=>`\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`).join("");
}
function Wt(e) {
    let n = new Int32Array(e.length);
    for(let r = 0; r < e.length; r++){
        n[r] = r;
    }
    return {
        text: e,
        origin: n
    };
}
function Kt(e, n, r) {
    let s = [];
    for (let i of e.text.matchAll(n)){
        let { keep, insert, keepEnd = 0 } = r(i);
        let l = i.index ?? 0;
        let c = i[0].length;
        let d = Math.min(Math.max(keep | 0, 0), c);
        let p = Math.min(Math.max(keepEnd | 0, 0), c - d);
        s.push([
            l + d,
            l + c - p,
            insert
        ]);
    }
    return Ee(e, s);
}
function Ee(e, n) {
    if (n.length === 0) {
        return e;
    }
    let { text, origin } = e;
    let text_length = text.length;
    for (let [c, d, p] of n){
        text_length += p.length - (d - c);
    }
    let o = new Int32Array(text_length);
    let a = [];
    let u = 0;
    let l = 0;
    for (let [c, d, p] of n){
        a.push(text.slice(u, c));
        o.set(origin.subarray(u, c), l);
        l += c - u;
        a.push(p);
        o.fill(-1, l, l + p.length);
        l += p.length;
        u = d;
    }
    a.push(text.slice(u));
    o.set(origin.subarray(u), l);
    return {
        text: a.join(""),
        origin: o
    };
}
function Ve(e, n, r) {
    return {
        text: e.text.slice(n, r),
        origin: e.origin.slice(n, r)
    };
}
function nU(e) {
    let n = 0;
    while(n < e.length && e.charCodeAt(n) <= 32){
        n++;
    }
    let r = e.slice(n);
    let s = /^([A-Za-z0-9][A-Za-z0-9+.-]*):\/\//.exec(r);
    let i = s?.[1]?.toLowerCase();
    let o = s ? r.slice(s[0].length) : r;
    let a = o.indexOf(":");
    let u = o.indexOf("/");
    if (!(i !== undefined ? i !== "file" : a !== -1 && (u === -1 || a < u) && !/^[A-Za-z]:/.test(o))) {
        let m = s ? pe(o) : o;
        return m.includes("@[") || m.startsWith("[");
    }
    let c = pe(o);
    let d = s ? /^(?:[^@/?#\\[\]]+@)?(\[[0-9A-Fa-f:.]+\])(?::\d*)?(?=\/|$)/.exec(c) : /^[^@:/[\]]+@(\[[0-9A-Fa-f:.]+\])(?=:)/.exec(c);
    let p = d !== null && !!APe(`ssh://${d[1]}/`)?.hostname;
    return /[[\]]/.test(c.slice(p ? d[0].length : 0));
}
function APe(e) {
    try {
        return new URL(e);
    } catch  {
        return null;
    }
}
function pe(e) {
    return e.replace(/%([0-9A-Fa-f]{2})/g, (n, r)=>{
        let s = parseInt(r, 16);
        if (s === 0) {
            return n;
        }
        return String.fromCharCode(s);
    });
}
function Dse(e, { asRewritten = false } = {}) {
    let r = e.trimStart();
    let s = /^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(r);
    if (s) {
        let i = s[1]?.toLowerCase();
        if (i === "file") {
            return null;
        }
        if (i === "http" || i === "https") {
            let o = APe(r);
            if (o?.hostname) {
                return {
                    host: o.hostname,
                    path: o.pathname
                };
            }
            return null;
        }
        return Gt(IDt(r.slice(s[0].length)), "/");
    }
    return Gt(asRewritten ? IDt(r) : r, ":");
}
function Vt(e, n) {
    let r = e.indexOf("@[");
    let s = r === -1 ? 0 : r + 1;
    let open_1 = e[s] === "[" ? s : -1;
    let close = open_1 === -1 ? -1 : e.indexOf("]", open_1 + 1);
    let cut = e.indexOf(n, close === -1 ? 0 : close + 1);
    return {
        open: open_1,
        close,
        cut
    };
}
function Gt(e, n) {
    let { open, close, cut } = Vt(e, n);
    let o = open === -1 ? 0 : open;
    let a = e.indexOf("/");
    if (n === ":" && (cut === -1 || a !== -1 && a < e.indexOf(":"))) {
        return null;
    }
    let u = cut === -1 ? "" : e.slice(n === ":" ? cut + 1 : cut);
    if (close !== -1) {
        let p = e.slice(close + 1, cut === -1 ? e.length : cut);
        let m = e.slice(0, o) + e.slice(o + 1, close);
        let h = zt(p) !== p ? m : zt(m);
        let k = h.slice(h.lastIndexOf("@") + 1);
        let f = APe(`ssh://[${k}]/`)?.hostname;
        if (k) {
            return {
                host: f || k,
                path: u
            };
        }
        return null;
    }
    let l = cut === -1 ? e : e.slice(0, cut);
    let c = l.slice(l.lastIndexOf("@") + 1);
    if (c.startsWith("[")) {
        return null;
    }
    let host = n === "/" ? c.replace(/:\d*$/, "") : c;
    if (host) {
        return {
            host,
            path: u
        };
    }
    return null;
}
function jt(e) {
    let { text, from } = Or(e);
    let { close, cut } = Vt(text, "/");
    let o = cut === -1 ? text.length : cut;
    let a = [];
    let u = (l, c)=>{
        let d = text.lastIndexOf("@", c - 1);
        if (d >= l) {
            a.push([
                from(l),
                from(d)
            ]);
        }
    };
    if (close === -1) {
        u(0, o);
    } else {
        u(0, close);
        u(close + 1, o);
    }
    return a;
}
function IDt(e) {
    return e.replace(/(?:%(?!00)[0-9A-Fa-f]{2})+/g, (n)=>{
        try {
            return decodeURIComponent(n);
        } catch  {
            return pe(n);
        }
    });
}
function Or(e) {
    if (!e.includes("%")) {
        return {
            text: e,
            from: (i)=>i
        };
    }
    let n = [];
    let r = "";
    let s = 0;
    for (let i of e.matchAll(/(?:%(?!00)[0-9A-Fa-f]{2})+/g)){
        for(let c = s; c < i.index; c++){
            n.push(c);
        }
        r += e.slice(s, i.index);
        let o;
        let a;
        try {
            o = decodeURIComponent(i[0]);
            a = Array.from(o, (c)=>{
                let d = c.codePointAt(0);
                if (d < 128) {
                    return 1;
                }
                if (d < 2048) {
                    return 2;
                }
                if (d < 65536) {
                    return 3;
                }
                return 4;
            });
        } catch  {
            o = pe(i[0]);
            a = Array.from(o, ()=>1);
        }
        let u = i.index;
        let l = 0;
        for (let c of a){
            let d = o.codePointAt(l) > 65535 ? 2 : 1;
            for(let p = 0; p < d; p++){
                n.push(u);
            }
            l += d;
            u += 3 * c;
        }
        r += o;
        s = i.index + i[0].length;
    }
    for(let i = s; i <= e.length; i++){
        n.push(i);
    }
    return {
        text: r + e.slice(s),
        from: (i)=>n[i]
    };
}
function zt(e) {
    let n = e.indexOf(":");
    let r = e.slice(n + 1);
    if (n === -1 || !/^[ \t\n\v\f\r]*[+-]?\d+$/.test(r)) {
        return e;
    }
    let s = Number.parseInt(r.trim(), 10);
    if (s >= 0 && s < 65536) {
        return e.slice(0, n);
    }
    return e;
}
const Lr = /\s/g;
const Tr = /[\n\r\u2028\u2029]/g;
const Ir = /(?:@|%40)(?:\[|%5B)/gi;
const Cr = /^(?:\[|%5B)/i;
const Pr = /\]|%5D/gi;
const UCo = /(?:^|[^A-Za-z0-9+.-])(?:https?|wss?|ftps?)$/i;
const Xt = /(?:^|[^A-Za-z0-9+.-])(?:ssh|git|git\+ssh|ssh\+git)$/i;
const Dr = /[,;|&]/g;
const Fr = /(?:^|[^A-Za-z0-9+.-])[A-Za-z][A-Za-z0-9+.-]{0,31}$/;
const $r = /["'`|,;&<>()[\]\\@/?#]|%40|%5B/i;
const Hr = /["'`]/;
const Br = /[;|&\n]/g;
const Mr = 64;
const Ur = 2048;
const Wr = /[\s"'`]/g;
function je(e) {
    let n = [];
    let r = C(e, Wr);
    let s = 0;
    for(let i = e.indexOf("://"); i !== -1;){
        let o = i + 3;
        if (i >= s && Xt.test(e.slice(Math.max(0, i - 8), i))) {
            s = Math.min(r(o), o + Ur);
            for (let [a, u] of jt(e.slice(o, s))){
                n.push([
                    o + a,
                    o + u
                ]);
            }
        }
        i = e.indexOf("://", o);
    }
    return n;
}
function rMs(e) {
    return Qt(e).spans;
}
function Qt(e) {
    let spans = [];
    let hostParts = [];
    let s = C(e, Lr);
    let i = C(e, /\//g);
    let o = Ze(e, Ir);
    let a = C(e, Pr);
    let u = C(e, /\//g);
    let l = C(e, Br);
    let c = C(e, /[/?#]/g);
    let d = C(e, Dr);
    let p = C(e, /@/g);
    let m = C(e, /%40/gi);
    let h = C(e, /\[REDACTED|\*\*\*:\*\*\*/g);
    let k = C(e, /[:%]/g);
    let f = C(e, /["'`,;|&<>{}()]/g);
    let y = Yt(e, false);
    let b = Yt(e, true);
    for(let R = e.indexOf("://"); R !== -1;){
        let start = R + 3;
        let bracketClose;
        let I = e.indexOf("://", start);
        let w = s(start);
        let ee = p(start);
        let end;
        if (UCo.test(e.slice(Math.max(0, R - 8), R))) {
            let O = Math.min(c(start), w);
            let H = Math.min(d(start), O);
            end = ee < O ? Math.max(y(start, O), b(ee, O)) : Math.max(y(start, Math.min(i(start), w)), b(start, H));
            if (end <= start) {
                let G = Math.min(O, l(start));
                hostParts.push({
                    start,
                    fieldEnd: Math.min(H, G),
                    lastEncodedAt: b(start, G)
                });
            }
        } else {
            let O = Math.min(i(start), w);
            let H = Math.min(w, I === -1 ? e.length : I);
            let G = Xt.test(e.slice(Math.max(0, R - 8), R));
            let T = G ? o(start) : null;
            let A = G ? Cr.exec(e.slice(start, start + 3)) : null;
            let L = [
                [
                    A !== null ? start + A[0].length : -1,
                    H
                ],
                [
                    T !== null && T.index < H ? T.index + T[0].length : -1,
                    w
                ]
            ];
            for (let [B, V] of L){
                let se = B === -1 ? w : a(B);
                if (se < V) {
                    bracketClose = Math.max(bracketClose ?? se, se);
                    O = Math.max(O, Math.min(u(se), w));
                }
            }
            end = Math.max(y(start, O), b(start, O));
        }
        if (end > start) {
            spans.push({
                start,
                end,
                separatorEnd: end + (e[end] === "@" ? 1 : 3),
                loginEnd: ee <= end ? ee : Math.min(m(start), end),
                bracketClose
            });
        } else {
            let O = h(start);
            if (O > start && O < Math.min(w, i(start), f(start)) && k(start) < O) {
                spans.push({
                    start,
                    end: O,
                    separatorEnd: O,
                    loginEnd: O
                });
            }
        }
        R = I;
    }
    return {
        spans,
        hostParts
    };
}
function qt(e, n) {
    let { spans, hostParts } = Qt(e);
    if (spans.length === 0 && hostParts.length === 0) {
        return [];
    }
    let i = C(e, /[\s"'>}|,;&`)\]]/g);
    let o = C(e, /\s/g);
    let a = [];
    let u = [];
    for (let userinfo of spans){
        a.push({
            start: userinfo.start,
            end: userinfo.end,
            loginEnd: userinfo.loginEnd
        });
        u.push({
            ...userinfo,
            userinfo
        });
    }
    let l = Se(e, n);
    for (let h of hostParts){
        let k = l(h.start)[0];
        if (k && k.keyStart < h.fieldEnd && e.slice(h.start, k.keyStart).includes("%")) {
            let f = h.lastEncodedAt > k.keyStart ? h.lastEncodedAt : k.valueStart;
            a.push({
                start: h.start,
                end: f,
                loginEnd: f
            });
            u.push(f > k.valueStart ? {
                start: h.start,
                end: f,
                userinfo: {
                    start: h.start,
                    end: f,
                    separatorEnd: f + 3,
                    loginEnd: f
                }
            } : {
                start: h.start,
                end: f
            });
        }
    }
    if (u.length === 0) {
        return [];
    }
    a.sort((h, k)=>h.start - k.start);
    let c = Se(e, n);
    let d = 0;
    for(let h = 0, k = c(h); k[0] !== undefined;){
        let f;
        let y = null;
        for (let R of k){
            y = R.valueEnd();
            if (y !== null) {
                f = R;
                break;
            }
        }
        if (f === undefined || y === null) {
            h = k[0].keyStart + 1;
            k = c(h);
            continue;
        }
        while(d < a.length && a[d].start <= f.keyStart){
            d++;
        }
        let b = a[d];
        if (b !== undefined && b.start < y) {
            let R = e[f.valueStart] ?? "";
            let end = (R === '"' || R === "'") && y - 1 > f.valueStart && e[y - 1] === R ? Math.max(y, b.end) : o(Math.max(y, b.end, i(b.loginEnd + 1)));
            u.push({
                start: f.valueStart,
                end
            });
        }
        h = y;
        k = c(h);
    }
    let p = {
        nextKey: Se(e, n),
        plainKeys: Se(e, n),
        nextLineEnd: C(e, Tr),
        span: 0,
        lineEnd: -1,
        resumeAt: 0,
        overflowEnd: zr(e, ()=>p.lineEnd)
    };
    let m = [];
    for (let h of jr(u)){
        let k = m.at(-1);
        m.push(k !== undefined && h.start < k.end ? Jt(e, {
            start: m.pop().start,
            end: Math.max(k.end, h.end)
        }, p) : Jt(e, h, p));
    }
    return m.map((h)=>{
        if (h.userinfo) {
            return h;
        }
        return Vr(e, h);
    });
}
const Zt = new WeakMap;
function Kr(e) {
    let n = Zt.get(e);
    if (!n) {
        n = {
            word: new RegExp(e.word, "gi"),
            notTail: new RegExp(`(?!${e.tail})[^]`, "gi"),
            separator: new RegExp(e.separator, "iy"),
            value: new RegExp(e.value, "iy")
        };
        Zt.set(e, n);
    }
    return n;
}
function Se(e, n) {
    let r = n.map((s)=>{
        let { word, notTail, separator, value } = Kr(s);
        let l = Ze(e, word);
        let c = C(e, notTail);
        let d = -1;
        let p = -1;
        let m = -1;
        let h = null;
        let k = (valueStart)=>{
            if (valueStart !== m) {
                m = valueStart;
                value.lastIndex = valueStart;
                h = value.test(e) ? value.lastIndex : null;
            }
            return h;
        };
        let f = (R)=>{
            if (R !== d) {
                d = R;
                separator.lastIndex = R;
                p = separator.test(e) ? separator.lastIndex : -1;
            }
            return p;
        };
        let y = -1;
        let b = null;
        return (R)=>{
            if (y !== -1 && R >= y && (b === null || R <= b.keyStart)) {
                return b;
            }
            y = R;
            b = null;
            for(let S = l(R); S !== null;){
                let F = S.index + S[0].length;
                let valueStart = f(s.tail ? c(F) : F);
                if (valueStart !== -1) {
                    b = {
                        keyStart: S.index,
                        valueStart,
                        valueEnd: ()=>k(valueStart)
                    };
                    break;
                }
                S = l(S.index + 1);
            }
            return b;
        };
    });
    return (s)=>{
        let i = [];
        for (let o of r){
            let a = o(s);
            if (a && (!i[0] || a.keyStart <= i[0].keyStart)) {
                i = i[0] && a.keyStart === i[0].keyStart ? [
                    ...i,
                    a
                ] : [
                    a
                ];
            }
        }
        return i;
    };
}
function Jt(e, n, r) {
    if (n.userinfo && Gr(e, n.userinfo, r)) {
        return n;
    }
    let n_end = n.end;
    r.resumeAt = Math.max(r.resumeAt, n.start);
    for(let i = r.nextKey(r.resumeAt); i[0] !== undefined && i[0].keyStart < n_end;){
        let o = i[0].keyStart;
        if (o > r.lineEnd) {
            let c = r.nextLineEnd(o);
            r.span = Mr * (c - r.lineEnd);
            r.lineEnd = c;
        }
        let a = null;
        let u = i[0];
        for (let c of i){
            a = c.valueEnd();
            if (a !== null) {
                u = c;
                break;
            }
        }
        let l = a ?? u.valueStart;
        r.span -= l - o;
        if (r.span < 0) {
            return {
                start: n.start,
                end: Math.max(n_end, r.overflowEnd(n.start))
            };
        }
        n_end = Math.max(n_end, l);
        r.resumeAt = u.valueStart;
        i = r.nextKey(r.resumeAt);
    }
    if (n_end === n.end) {
        return n;
    }
    return {
        start: n.start,
        end: n_end
    };
}
function Gr(e, userinfo, r) {
    if (e[userinfo.end] !== "@" || $r.test(e.slice(userinfo.start, userinfo.end)) || !Fr.test(e.slice(Math.max(0, userinfo.start - 36), userinfo.start - 3))) {
        return false;
    }
    for(let s = r.plainKeys(userinfo.start); s[0] !== undefined && s[0].keyStart < userinfo.end; s = r.plainKeys(s[0].keyStart + 1)){
        if (s.some((i)=>i.valueStart === userinfo.end)) {
            return false;
        }
    }
    return true;
}
function zr(e, n) {
    let r = C(e, /["'`]/g);
    let s = -1;
    let e_length = e.length;
    return (o)=>{
        if (n() !== s) {
            s = n();
            e_length = r(o) < s ? e.length : s;
        }
        return e_length;
    };
}
function Vr(e, n) {
    let r = e[n.end - 1];
    if (r === undefined || !Hr.test(r)) {
        return n;
    }
    if ((e.slice(n.start, n.end).split(r).length - 1) % 2 === 1) {
        return {
            start: n.start,
            end: n.end - 1
        };
    }
    return n;
}
function jr(e) {
    e.sort((r, s)=>r.start - s.start || s.end - r.end);
    let n = [];
    for (let r of e){
        let s = n.at(-1);
        if (s === undefined || r.start >= s.end) {
            n.push(r);
        } else {
            n[n.length - 1] = {
                start: s.start,
                end: Math.max(s.end, r.end)
            };
        }
    }
    return n;
}
function C(e, n) {
    let r = Ze(e, n);
    return (s)=>r(s)?.index ?? e.length;
}
function Ze(e, n) {
    let r = -1;
    let s = null;
    return (i)=>{
        if (r === -1 || i < r || s !== null && i > s.index) {
            n.lastIndex = i;
            s = n.exec(e);
            r = i;
        }
        return s;
    };
}
function Yt(e, n) {
    let r = null;
    return (s, i)=>{
        if (r === null) {
            r = new Int32Array(e.length + 1);
            let a = -1;
            for(let u = 0; u <= e.length; u++){
                if (n) {
                    if (u >= 3 && e.startsWith("%40", u - 3)) {
                        a = u - 3;
                    }
                } else if (u >= 1 && e[u - 1] === "@") {
                    a = u - 1;
                }
                r[u] = a;
            }
        }
        let o = r[Math.min(i, e.length)];
        if (o >= s) {
            return o;
        }
        return -1;
    };
}
const st = new RegExp(gBe(String.raw`api[_-]?key|secret|token|password|passwd|credential|bearer|authorization|auth[_-]?header|cookie|session[_-]?(?:id|key)|connection[_-]?string|(?:private|ssh|encryption|signing|access|deploy|master|license)[_-]?key|client[_-]?secret`), "i");
const le = `[\\s\\u0085${TPe}]`;
const te = `(?:${gBe("Bearer|Basic")})[${TPe}]*[\\s\\u0085]+`;
const en = "[^\\s\\u0085,;&}\\])]+";
const tn = "(?![\\w\\[({$/+=~!@%^?\\\\-])";
const Ae = "\\n\\r\\x0b\\x0c\\u0085\\u2028\\u2029";
const J = "[\\s\\u0085]";
const BCo = new RegExp(le);
const oMs = new RegExp(`(?:[=:]|["']|\\b(?:${gBe("bearer|basic")}))$`, "i");
const Zr = `\\\\+(?:"[^"${Ae}]*(?<!\\\\)(?=\\\\+")|'[^'${Ae}]*(?<!\\\\)(?=\\\\+'))`;
const nn = `[^\\s\\u0085,;&})"'\\\\]+`;
const Le = `"[^"${Ae}]*"|'[^'${Ae}]*'|"[^"]*"${tn}|'[^']*'${tn}|[^\\s-]{0,4}\\[REDACTED\\]['"\`]?|${te}(?:\\[REDACTED\\]|${en})|${en}`;
const Jr = {
    word: "\\b(?:Bearer|Basic)",
    tail: "",
    separator: `${J}+`,
    value: "[A-Za-z0-9+/=._~-]{20,}"
};
const Yr = {
    word: `(?:${st.source})`,
    tail: "[\\w.-]",
    separator: `["']?${J}*[=:]${J}*`,
    value: Le
};
const Xr = {
    word: "\\b(?:AWS|GOOGLE|GCP|GCLOUD|AZURE)_\\w",
    tail: "\\w",
    separator: `${J}*[=:]${J}*`,
    value: Le
};
const Qr = [
    Yr,
    Xr,
    Jr
];
const qr = [
    "sk",
    "ant",
    "api"
].join("-");
const displayRun = "[\\w=-]";
const U = `${displayRun}{20,}(?:\\.[0-9a-z]{9})?`;
const es = "[\\w.-]{0,256}(?![\\w.-])";
const cn = `${J}*(?!${J})`;
const it = `(?:${st.source})${es}`;
const dn = `\\b(?:${gBe("AWS|GOOGLE|GCP|GCLOUD|AZURE")})${k8e}_\\w+`;
const qe = `${it}(?:${k8e}["'])?${le}*[=:]${cn}(${Le})`;
const et = `${dn}${le}*[=:]${J}*(${Le})`;
const prefilter = /\\["']/;
const gn = `${it}${k8e}\\\\+["']${le}*[=:]${cn}(${Zr}|${te}${nn}|${nn}|\\\\+["'][^\\s\\u0085,;&})"'\\\\]*)`;
const Z = `[^\\s\\u0085,;&}\\])"']{0,64}?(?:${it}|${dn})`;
const ts = `(?:${te})?(?:[{[(]{0,8}(?:"${Z}"|'${Z}')|${Z})${le}*[=:]`;
const ns = `(?:${te})?(?:[{[(]{0,8}(?:"${Z}"|'${Z}'|\\\\+"${Z}\\\\+"|\\\\+'${Z}\\\\+')|${Z})${le}*[=:]`;
const pn = "\\][^\\s\"'>}|,;&`)\\]]*";
const me = "[A-Za-z0-9_-]";
const tt = `${me}{10}${me}*`;
const rn = `\\.${tt}\\.${tt}`;
const ot = `(?<!${me})(?=${me}+${rn})(?:${me}*?-)??(eyJ${tt}${rn})`;
const hn = [
    {
        id: "url-userinfo",
        source: `:\\/\\/((["'])[^/@\\s]*\\2(?=@)|(?:[^/@\\s"'|,;&\`]+(?=@))|[^/@\\s"'|,;&\`]*["'|,;&\`][^/@\\s]*@)@?`,
        confidence: "low"
    },
    {
        id: "gcp-service-account",
        source: "\\b([a-z0-9-]{1,64}@[a-z0-9-]+\\.iam\\.gserviceaccount\\.com)\\b",
        flags: "i",
        confidence: "low"
    },
    {
        id: "loose-anthropic-key",
        source: "\\b(sk-ant-?[\\w-]{10,})",
        confidence: "low"
    },
    {
        id: "http-auth-scheme",
        source: `\\b${te}([A-Za-z0-9+/=._~-]{20,})`,
        flags: "i",
        confidence: "low"
    },
    {
        id: "loose-jwt",
        prefilter: /eyJ/,
        source: ot,
        confidence: "low"
    },
    {
        id: "sensitive-assign",
        source: qe,
        flags: "i",
        confidence: "low"
    },
    {
        id: "cloud-env-var",
        source: et,
        flags: "i",
        confidence: "low"
    },
    {
        id: "url-userinfo-tail",
        source: ":\\/\\/(\\[REDACTED\\](?!@|%40[^\\s\"'>}|,;&`)\\]@/]*(?:[\\s\"'>}|,;&`)\\]/]|$))[^\\s\"'>}|,;&`)\\]]*?(?=[\\s\"'>}|,;&`)\\]]|:\\/\\/|$))",
        confidence: "low"
    },
    {
        id: "url-userinfo-later-at",
        source: ":\\/\\/(\\[REDACTED\\]@(?:[^\\s:/?#\"'>}|,;&`)\\]]|:(?!\\/\\/)){0,256})(?=@|%40)",
        confidence: "low"
    },
    {
        id: "url-userinfo-encoded",
        source: ":\\/\\/((?:\\[REDACTED\\]@)?(?:(?:[^/?#@\\s\"',;&<>|)\\]{}`[]*[\"'`<>{}[\\]][^/?#@\\s,;&|{}\"'`<>[\\]()]*(?=%40))|[^/?#@\\s\"',;&<>|)\\]}`[]+(?=%40)|(?=[^/?#@\\s\"',;&<>|)\\]}`[]*?(?:%|:[^/?#@\\s\"',;&<>|)\\]}`[]))[^/?#@\\s\"',;&<>|)\\]}`[]+(?=\\[REDACTED\\])))",
        confidence: "low"
    },
    {
        id: "masked-value-rest",
        source: `\\[REDACTED\\](${pn})`,
        confidence: "low"
    },
    {
        id: "sensitive-assign-escaped",
        redactOnly: true,
        prefilter,
        source: gn,
        flags: "i",
        confidence: "low"
    },
    {
        id: "aws-access-token",
        source: "\\b((?:A3T[A-Z0-9]|AKIA|ASIA|ABIA|ACCA)[A-Z2-7]{16})\\b",
        confidence: "high"
    },
    {
        id: "gcp-api-key",
        source: "\\b(AIza[\\w-]{35})(?![\\w-])",
        confidence: "high"
    },
    {
        id: "google-oauth-client-secret",
        source: "\\bGOCSPX-[\\w-]{28}(?![\\w-])",
        confidence: "high"
    },
    {
        id: "azure-ad-client-secret",
        source: `(?:^|[\\\\'"\\x60\\s>=:(,)])([a-zA-Z0-9_~.]{3}\\dQ~[a-zA-Z0-9_~.-]{31,34})(?:$|[\\\\'"\\x60\\s<),])`,
        confidence: "high"
    },
    {
        id: "digitalocean-pat",
        source: `\\b(dop_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "digitalocean-access-token",
        source: `\\b(doo_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "anthropic-api-key",
        source: `\\b(${qr}03-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "anthropic-admin-api-key",
        source: `\\b(sk-ant-admin01-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "anthropic-oauth-token",
        source: `\\b(sk-ant-(?:oat|ort)\\d{2}-[\\w-]{20,})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        run: "[\\w-]",
        confidence: "high"
    },
    {
        id: "openai-api-key",
        source: "sk-[A-Za-z0-9_-]{8,200}T3BlbkFJ[A-Za-z0-9_-]{8,200}",
        confidence: "high"
    },
    {
        id: "openai-legacy-api-key",
        source: "\\bsk-[a-zA-Z0-9]{48}(?![a-zA-Z0-9])",
        confidence: "high"
    },
    {
        id: "huggingface-access-token",
        source: `\\b(hf_[a-zA-Z]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "supabase-secret-key",
        source: "\\bsb_secret_[A-Za-z0-9_-]{20,}",
        confidence: "high"
    },
    {
        id: "supabase-access-token",
        source: "\\bsbp_[a-z0-9]{40,}",
        confidence: "high"
    },
    {
        id: "github-pat",
        source: "ghp_[0-9a-zA-Z]{36}",
        confidence: "high"
    },
    {
        id: "github-fine-grained-pat",
        source: "github_pat_\\w{82}",
        confidence: "high"
    },
    {
        id: "github-app-token",
        source: "(?:ghu|ghs)_[0-9a-zA-Z]{36}",
        confidence: "high"
    },
    {
        id: "github-oauth",
        source: "gho_[0-9a-zA-Z]{36}",
        confidence: "high"
    },
    {
        id: "github-refresh-token",
        source: "ghr_[0-9a-zA-Z]{36}",
        confidence: "high"
    },
    {
        id: "gitlab-pat",
        source: `glpat-${U}`,
        displayRun,
        confidence: "high"
    },
    {
        id: "gitlab-deploy-token",
        source: `gldt-${U}`,
        displayRun,
        confidence: "high"
    },
    {
        id: "gitlab-runner-authentication-token",
        source: `glrt-${U}`,
        displayRun,
        confidence: "high"
    },
    {
        id: "gitlab-oauth-app-secret",
        source: `gloas-${U}`,
        displayRun,
        confidence: "high"
    },
    {
        id: "gitlab-pipeline-trigger-token",
        source: `glptt-${U}`,
        displayRun,
        confidence: "high"
    },
    {
        id: "gitlab-kubernetes-agent-token",
        source: `glagent-${U}`,
        displayRun,
        confidence: "high"
    },
    {
        id: "gitlab-incoming-mail-token",
        source: `glimt-${U}`,
        displayRun,
        confidence: "high"
    },
    {
        id: "gitlab-scim-oauth-token",
        source: `glsoat-${U}`,
        displayRun,
        confidence: "high"
    },
    {
        id: "gitlab-ci-build-token",
        source: `glcbt-${U}`,
        displayRun,
        confidence: "high"
    },
    {
        id: "gitlab-feed-token",
        source: `glft-${U}`,
        displayRun,
        confidence: "high"
    },
    {
        id: "gitlab-feature-flag-client-token",
        source: `glffct-${U}`,
        displayRun,
        confidence: "high"
    },
    {
        id: "slack-bot-token",
        source: "xoxb-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*",
        confidence: "high"
    },
    {
        id: "slack-user-token",
        source: "xox[a-z](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34}",
        confidence: "high"
    },
    {
        id: "slack-rotation-token",
        source: "xoxe(?:\\.xox[a-z])?-[0-9]-[A-Za-z0-9-]{28,}",
        confidence: "high"
    },
    {
        id: "slack-app-token",
        source: "xapp-\\d-[A-Z0-9]+-\\d+-[a-z0-9]+",
        flags: "i",
        confidence: "high"
    },
    {
        id: "slack-workflow-token",
        source: "\\bxwfp-[a-zA-Z0-9-]{20,}",
        confidence: "high"
    },
    {
        id: "slack-webhook-url",
        source: "(?:https?://)?hooks\\.slack\\.com/(?:services|workflows|triggers)/[A-Za-z0-9+/_-]{40,}",
        flags: "i",
        confidence: "high"
    },
    {
        id: "twilio-api-key",
        source: "SK[0-9a-fA-F]{32}",
        confidence: "high"
    },
    {
        id: "sendgrid-api-token",
        source: `\\b(SG\\.[a-zA-Z0-9=_\\-.]{66})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "npm-access-token",
        source: `\\b(npm_[a-zA-Z0-9]{36})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "pypi-upload-token",
        source: "pypi-AgEIcHlwaS5vcmc[\\w-]{50,1000}",
        confidence: "high"
    },
    {
        id: "databricks-api-token",
        source: `\\b(dapi[a-f0-9]{32}(?:-\\d)?)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "hashicorp-tf-api-token",
        source: "[a-zA-Z0-9]{14}\\.atlasv1\\.[a-zA-Z0-9\\-_=]{60,70}",
        confidence: "high"
    },
    {
        id: "pulumi-api-token",
        source: `\\b(pul-[a-f0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "postman-api-token",
        source: `\\b(PMAK-[a-fA-F0-9]{24}-[a-fA-F0-9]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "grafana-api-key",
        source: `\\b(eyJrIjoi[A-Za-z0-9+/]{70,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "grafana-cloud-api-token",
        source: `\\b(glc_[A-Za-z0-9+/]{32,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "grafana-service-account-token",
        source: `\\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "sentry-user-token",
        source: `\\b(sntryu_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "sentry-org-token",
        source: "\\bsntrys_eyJpYXQiO[a-zA-Z0-9+/]{10,200}(?:LCJyZWdpb25fdXJs|InJlZ2lvbl91cmwi|cmVnaW9uX3VybCI6)[a-zA-Z0-9+/]{10,200}={0,2}_[a-zA-Z0-9+/]{43}",
        confidence: "high"
    },
    {
        id: "stripe-access-token",
        source: `\\b((?:sk|rk)_(?:test|live|prod)_[a-zA-Z0-9]{10,99})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high"
    },
    {
        id: "shopify-access-token",
        source: "shpat_[a-fA-F0-9]{32}",
        confidence: "high"
    },
    {
        id: "shopify-shared-secret",
        source: "shpss_[a-fA-F0-9]{32}",
        confidence: "high"
    }
];
const rs = 64;
function nt(e, n) {
    let r = /-----BEGIN[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi;
    let s = /-----END[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi;
    r.lastIndex = n;
    let i = r.exec(e);
    if (!i) {
        return null;
    }
    s.lastIndex = i.index + i[0].length + rs;
    let o = s.exec(e);
    if (!o) {
        return null;
    }
    return {
        start: i.index,
        end: o.index + o[0].length
    };
}
function ss(e) {
    return nt(e, 0) !== null;
}
function jCo(e) {
    let n = mn(e);
    if (n.length === 0) {
        return e;
    }
    let r = "";
    let s = 0;
    for (let i of n){
        r += `${e.slice(s, i.start)}[REDACTED]`;
        s = i.end;
    }
    return r + e.slice(s);
}
function mn(e) {
    let n = e.indexOf("-----");
    while(n !== -1){
        while(e.charCodeAt(n + 5) === 45){
            n++;
        }
        if ((e.charCodeAt(n + 5) | 32) === 98 && (e.charCodeAt(n + 6) | 32) === 101 && (e.charCodeAt(n + 7) | 32) === 103 && (e.charCodeAt(n + 8) | 32) === 105 && (e.charCodeAt(n + 9) | 32) === 110) {
            break;
        }
        n = e.indexOf("-----", n + 5);
    }
    let r = [];
    if (n === -1) {
        return r;
    }
    for(let s = nt(e, n); s; s = nt(e, s.end)){
        r.push(s);
    }
    return r;
}
const rt = `(?:[\\x60'"\\s;]|\\\\[nr]|$)`;
const Je = "(?=[^a-zA-Z0-9_\\-+=]|$)";
const sn = "(?<![a-zA-Z0-9_\\-])";
function is() {
    return hn.map(({ id, confidence, source, flags = "", displayRun })=>{
        let o = {
            id,
            confidence
        };
        let a = `${flags.replace("g", "")}g`;
        if (confidence !== "high") {
            return {
                ...o,
                re: new RegExp(source, a)
            };
        }
        let u = yn(source);
        if (displayRun === undefined) {
            return {
                ...o,
                re: new RegExp(sn + u + Je, a)
            };
        }
        return {
            ...o,
            prefilter: new RegExp(u, flags.replace("g", "")),
            re: new RegExp(`(?<!${displayRun})(?=${displayRun}+${Je})${displayRun}*?${sn}(${u})${Je}`, a)
        };
    });
}
function he(e) {
    return hn.map((n)=>{
        let r = (n.flags ?? "").replace("g", "");
        let s = {
            id: n.id,
            confidence: n.confidence,
            ...n.redactOnly === true && {
                redactOnly: n.redactOnly
            },
            ...n.prefilter !== undefined && {
                prefilter: n.prefilter
            }
        };
        if (n.run === undefined) {
            return {
                ...s,
                re: new RegExp(n.source, e ? `${r}g` : n.flags ?? "")
            };
        }
        return {
            ...s,
            prefilter: new RegExp(yn(n.source), r),
            re: new RegExp(`(?:(?<!${n.run})|(?<=\\\\[nr]))(?=${n.run}+${rt})${n.run}*?${n.source}`, e ? `${r}g` : r)
        };
    });
}
function yn(source) {
    if (source.endsWith(rt)) {
        return source.slice(0, -rt.length);
    }
    return source;
}
function xe(e, n) {
    if (typeof n !== "string") {
        return "[REDACTED]";
    }
    let r = n.length >= 2 && (n[0] === '"' || n[0] === "'") && n.at(-1) === n[0] ? n[0] : "";
    let s = e.lastIndexOf(n);
    return `${e.slice(0, s)}${r}[REDACTED]${r}${e.slice(s + n.length)}`;
}
function os(e) {
    let n = e[1];
    if (typeof n !== "string") {
        return {
            keep: 0,
            insert: "[REDACTED]"
        };
    }
    let r = n.length >= 2 && (n[0] === '"' || n[0] === "'") && n.at(-1) === n[0] ? 1 : 0;
    let s = e[0].lastIndexOf(n);
    return {
        keep: s + r,
        insert: "[REDACTED]",
        keepEnd: e[0].length - s - n.length + r
    };
}
function Re(e) {
    let n = qt(e, Qr).map(({ start, end })=>{
        let a = /^(["'])[^]*\1$/.test(e.slice(start, end)) ? 1 : 0;
        return [
            start + a,
            end - a
        ];
    });
    let r = je(e);
    let s = ls(e);
    if (r.length === 0 && s.length === 0) {
        return n;
    }
    return bn([
        ...n,
        ...r,
        ...s
    ]);
}
let Ye;
const as = new RegExp(pn, "y");
const us = 512;
function ls(e) {
    Ye ??= {
        plain: {
            assign: new RegExp(`${qe}|${et}`, "gi"),
            nextKey: new RegExp(ts, "iy"),
            valueWithWhitespace: new RegExp(`["']|${te}`, "iy"),
            skipsStrays: false
        },
        escaped: {
            assign: new RegExp(`${qe}|${et}|${gn}`, "gi"),
            nextKey: new RegExp(ns, "iy"),
            valueWithWhitespace: new RegExp(`\\\\*["']|${te}`, "iy"),
            skipsStrays: true
        }
    };
    let n = on(e, Ye.plain);
    if (prefilter.test(e)) {
        return [
            ...n,
            ...on(e, Ye.escaped)
        ];
    }
    return n;
}
function on(e, { assign, nextKey, valueWithWhitespace, skipsStrays }) {
    let o = [];
    let a;
    let u = 0;
    let l = as;
    assign.lastIndex = 0;
    for(let c = assign.exec(e); c !== null; c = assign.exec(e)){
        let d = c[1] ?? c[2] ?? c[3];
        let p = c.index + c[0].length;
        let m = p - d.length;
        nextKey.lastIndex = m;
        let h = d.length <= us && nextKey.test(e) ? nextKey.lastIndex : undefined;
        if (h !== undefined && h < p) {
            valueWithWhitespace.lastIndex = h;
            if (!valueWithWhitespace.test(e)) {
                h = undefined;
            }
        }
        if (skipsStrays && a !== undefined && c.index >= a && c.index < u && h === undefined) {
            a = undefined;
            assign.lastIndex = u;
            continue;
        }
        if (a !== undefined && c.index < a) {
            let k = /^(["'])[^]*\1$/.test(d);
            let f = k && u <= m ? 1 : 0;
            l.lastIndex = p;
            o.push([
                m + f,
                !k && l.test(e) ? l.lastIndex : p - f
            ]);
        }
        u = p;
        a = h;
        if (a !== undefined) {
            assign.lastIndex = m;
        }
    }
    return o;
}
function bn(e) {
    let n = e.filter(([s, i])=>i > s).sort((s, i)=>s[0] - i[0]);
    let r = [];
    for (let [s, i] of n){
        let o = r.at(-1);
        if (o !== undefined && s <= o[1]) {
            o[1] = Math.max(o[1], i);
        } else {
            r.push([
                s,
                i
            ]);
        }
    }
    return r;
}
function ue(e, n) {
    let { text, origin } = e;
    let i = [];
    let o = 0;
    for(let a = 0; a < text.length;){
        let u = origin[a];
        while(o < n.length && n[o][1] <= u){
            o++;
        }
        let l = n[o];
        if (u < 0 || l === undefined || u < l[0]) {
            a++;
            continue;
        }
        let c = a;
        while(c > 0 && origin[c - 1] < 0){
            c--;
        }
        while(a < text.length && (origin[a] < 0 || origin[a] >= l[0] && origin[a] < l[1])){
            a++;
        }
        let d = i.at(-1);
        if (d !== undefined && d[1] >= c) {
            d[1] = a;
        } else {
            i.push([
                c,
                a,
                "[REDACTED]"
            ]);
        }
    }
    return Ee(e, i);
}
const ds = 512;
const fs = 512;
class En {
    testRules = null;
    redactRules = null;
    displayRules = null;
    resultCache = new Map;
    scan(e) {
        this.testRules ??= he(false);
        let n = [];
        for (let r of this.testRules){
            if (r.confidence === "high" && r.prefilter?.test(e) !== false && r.re.test(e)) {
                n.push({
                    ruleId: r.id,
                    label: r.id.split("-").map((s)=>Bs[s] ?? Ca(s)).join(" ")
                });
            }
        }
        if (ss(e)) {
            n.push({
                ruleId: "private-key",
                label: "Private Key"
            });
        }
        return n;
    }
    redactContext(e, n = false) {
        this.redactRules ??= he(true);
        let r = jCo(e);
        for (let s of this.redactRules){
            if (s.confidence === "low" && Xe(s, n, r)) {
                r = r.replace(s.re, xe);
            }
        }
        return r;
    }
    redactTokens(e) {
        this.redactRules ??= he(true);
        let n = e;
        for (let r of this.redactRules){
            if (r.confidence === "high" && r.prefilter?.test(n) !== false) {
                n = n.replace(r.re, xe);
            }
        }
        return n;
    }
    trackedByRules(e, n = false) {
        return this.trackedTokens(this.trackedContext(e, n));
    }
    trackedContext(e, n = false) {
        let r = Ee(Wt(e), mn(e).map(({ start, end })=>[
                start,
                end,
                "[REDACTED]"
            ]));
        return this.trackedRules(r, "low", n);
    }
    redactOnlyRules(e) {
        this.redactRules ??= he(true);
        let n = e;
        for (let r of this.redactRules){
            if (r.redactOnly === true && Xe(r, true, n)) {
                n = n.replace(r.re, xe);
            }
        }
        return n;
    }
    trackedTokens(e) {
        return this.trackedRules(e, "high");
    }
    trackedRules(e, n, r = false) {
        this.redactRules ??= he(true);
        let s = e;
        for (let i of this.redactRules){
            if (i.confidence === n && Xe(i, r, s.text)) {
                i.re.lastIndex = 0;
                s = Kt(s, i.re, os);
            }
        }
        return s;
    }
    redactWithUrlRanges(e) {
        let n = Re(e);
        if (n.length === 0) {
            return this.redactTokens(this.redactContext(e, true));
        }
        return ue(this.trackedByRules(e, true), n).text;
    }
    redactTracked(e) {
        return ue(this.trackedByRules(e, true), Re(e));
    }
    redact(e) {
        let n = e.length <= ds;
        if (n) {
            let s = this.resultCache.get(e);
            if (s !== undefined) {
                return s;
            }
        }
        let r = this.redactWithUrlRanges(e);
        if (n) {
            if (this.resultCache.size >= fs) {
                this.resultCache.delete(this.resultCache.keys().next().value);
            }
            this.resultCache.set(e, r);
        }
        return r;
    }
    redactForDisplay(e) {
        this.displayRules ??= is();
        let n = e;
        for (let r of this.displayRules){
            if (r.confidence !== "high" || r.prefilter?.test(n) === false) {
                continue;
            }
            n = n.replace(r.re, ms);
        }
        return n;
    }
}
const D = new En;
function p2n(e) {
    return D.scan(e);
}
function ps(e) {
    return D.redact(e);
}
function _9(e) {
    return D.redactTokens(D.redactContext(e));
}
function WCo(e) {
    return D.redactContext(e);
}
function f2n(e) {
    return D.redactTokens(e);
}
const oo = new RegExp(ot);
const ao = new RegExp(ot, "g");
const hBe = 16384;
function QRr(e, n) {
    let r = Re(e);
    if (r.length === 0) {
        return Hs(D.redactContext(e, true), n);
    }
    let s = D.trackedContext(e, true);
    for(let i = n + 2 * hBe;; i *= 2){
        if (s.text.length <= i) {
            return ue(D.trackedTokens(s), r).text;
        }
        let o = D.trackedTokens(Ve(s, 0, i));
        let a = o.text.length - hBe;
        if (a >= n) {
            let u = ne(o.text, a).length;
            let l = ue(Ve(o, 0, u), r);
            if (l.text.length >= n) {
                return l.text;
            }
        }
    }
}
var gs = /[$\x60|;&<>()\s]/;
var hs = /[/.@:~*?\\]/;
function ms(e, n) {
    let r = typeof n === "string" ? n : e;
    if (gs.test(r) || hs.test(r)) {
        return e;
    }
    return xe(e, n);
}
function CPe(e) {
    return D.redactForDisplay(e);
}
function b9(e, n = ps) {
    if (typeof e === "string") {
        return n(e);
    }
    if (Array.isArray(e)) {
        return e.map((r)=>b9(r, n));
    }
    if (e !== null && typeof e === "object") {
        let r = Object.create(null);
        let s = Object.entries(e);
        let i = n === ps ? ys(s.map(([o])=>o)) : undefined;
        for (let [o, [a, u]] of s.entries()){
            let l = i ? i[o] : a;
            if (typeof u === "string") {
                if (n === ps) {
                    r[l] = zCo(a, u);
                    continue;
                }
                let c = `${a}: `;
                let d = n(c + u);
                r[l] = d.startsWith(c) ? d.slice(c.length) : n(u);
            } else {
                r[l] = b9(u, n);
            }
        }
        return r;
    }
    return e;
}
function zCo(e, n) {
    let r = `${e}: `;
    let s = r + n;
    let i = Re(s);
    if (i.length === 0) {
        let l = ps(s);
        if (l.startsWith(r)) {
            return l.slice(r.length);
        }
        let c = _9(s);
        if (c.startsWith(r)) {
            return D.redactOnlyRules(c.slice(r.length));
        }
        return ps(n);
    }
    let o = [];
    for (let [l, c] of i){
        if (c > r.length) {
            o.push([
                Math.max(l, r.length),
                c
            ]);
        }
    }
    let a = D.trackedByRules(s, true);
    if (a.text.startsWith(r)) {
        return ue(a, o).text.slice(r.length);
    }
    let u = D.trackedByRules(s);
    if (u.text.startsWith(r)) {
        return D.redactOnlyRules(ue(u, o).text.slice(r.length));
    }
    return ps(n);
}
function ys(e) {
    let n = e.map((i)=>ps(i));
    if (n.every((i, o)=>i === e[o])) {
        return n;
    }
    let r = new Set(n.filter((i, o)=>i === e[o]));
    let s = new Map;
    return n.map((i, o)=>{
        if (i === e[o]) {
            return i;
        }
        let a = i;
        let u = s.get(i) ?? 2;
        while(r.has(a)){
            a = `${i} (${u})`;
            u++;
        }
        s.set(i, u);
        r.add(a);
        return a;
    });
}
function Aon(e) {
    let n = Object.create(null);
    for (let [r, s] of Object.entries(e)){
        n[r] = st.test(r) ? "[REDACTED]" : s;
    }
    return n;
}
const tT = "[redacted URL]";
function an(e) {
    let n = N(e);
    if (!/%(?:40|3a|5c)/i.test(n)) {
        return e;
    }
    let r = /^(?:https?|wss?|ftp|file):/i.test(n);
    return n.replace(r ? /%(40|3a)/gi : /%(40|3a|5c)/gi, (s, i)=>String.fromCharCode(parseInt(i, 16)));
}
function at(e, n, r) {
    let s = n(e);
    let i = an(e);
    if (s === r || i === e) {
        return s;
    }
    if (s !== null && an(s) === n(i)) {
        return s;
    }
    return r;
}
function Con(e) {
    return at(e, bs, null);
}
function bs(e) {
    try {
        let n = new URL(e);
        if (!n.host || ct(e) || lt(n) || ft(e, n) || kn(e)) {
            return null;
        }
        n.username = "";
        n.password = "";
        n.search = "";
        n.hash = "";
        return n.toString().replace(/\/$/, "");
    } catch  {
        return null;
    }
}
const GCo = /[@:]|\/\//;
function ZRr(e) {
    let n = Con(e);
    if (n === null) {
        return null;
    }
    let { protocol, host, pathname } = new URL(n);
    if (!GCo.test(pathname)) {
        return n;
    }
    let o = pathname.replace(/@/g, "%40").replace(/:/g, "%3A").replace(/\/{2,}/g, (a)=>`/${Ei("%2F", a.length - 1)}`);
    return `${protocol}//${host}${o}`;
}
function m2n(e) {
    let n = [];
    let r = 0;
    for (let [s, i] of bn(je(e))){
        n.push(e.slice(r, s), "[REDACTED]");
        r = i;
    }
    n.push(e.slice(r));
    return n.join("").replace(/:\/\/[^/?#]*(@|%40)/g, (s, i)=>{
        if (i === "@") {
            return "://";
        }
        return "://[REDACTED]%40";
    });
}
function Ky(e) {
    return at(e, ke, tT);
}
function ke(e) {
    if (!e) {
        return e;
    }
    if (Oe(e) || xn(e) || ct(e)) {
        return tT;
    }
    try {
        let n = new URL(e);
        if (!n.host) {
            throw TypeError("opaque");
        }
        if ((n.username !== "" || n.password !== "") && `${n.pathname}${n.search}${n.hash}`.includes("@") || lt(n) || ft(e, n)) {
            return tT;
        }
        n.username = "";
        n.password = "";
        n.search = "";
        n.hash = "";
        return n.toString().replace(/\/$/, "");
    } catch  {
        let n = N(e);
        let r = pt(n);
        let s = n.slice(r);
        let i = ht(s);
        let o = s.search(/[?#]/);
        if (i !== -1 && o !== -1 && o < i) {
            return tT;
        }
        let a = i === -1 ? s : s.slice(i + 1);
        let u = a.search(/[?#]/);
        if (u !== -1 && a.includes("@", u) && (i !== -1 || !Ps(a, u, r !== 0))) {
            return tT;
        }
        let l = Qe(Qe(i === -1 ? n : n.slice(r + i + 1), "?"), "#");
        let c = l.lastIndexOf("@");
        let d = c === -1 ? l : l.slice(c + 1);
        if (ae(d) && !ae(n) && !/^:\d+\/?$/.test(d.startsWith("[") ? d.slice(d.indexOf("]") + 1) : d.slice(d.indexOf(":")))) {
            return tT;
        }
        return d;
    }
}
const ut = /^(?:(?:file:\/\/)?[a-z]:(?:\\|\/(?!\/))|\\\\)/i;
function hf(e) {
    return at(e, Es, tT);
}
function Es(e) {
    if (Oe(e) || ct(e)) {
        return tT;
    }
    if (ut.test(e)) {
        let i = e.indexOf("?", e.startsWith("\\\\?\\") ? 4 : 0);
        if (i === -1) {
            return e;
        }
        return e.slice(0, i);
    }
    if (xn(e) && !Cs(e)) {
        return tT;
    }
    let n;
    try {
        n = new URL(e);
    } catch  {
        return we(e, ln(e) ? ke(e) : e);
    }
    if (!n.host) {
        return we(e, n.search || n.hash || ln(e) ? ke(e) : e);
    }
    if (ft(e, n)) {
        return tT;
    }
    let r = n.username !== "" && dt(n.protocol.slice(0, -1));
    let s = n.username !== "" && !/^[^:]*:\//.test(N(e));
    return we(e, r || s || n.password || Te(n.username) || lt(n) || n.search || n.hash ? ke(e) : e);
}
function C8e(e) {
    return we(e, Ky(e));
}
function Dpe(e, n, r) {
    if (n === "" || n === r) {
        return e;
    }
    return e.split(n).join(r);
}
function S9(e, n) {
    let r = typeof n === "string" || n === undefined ? [
        n
    ] : n;
    for (let s of r){
        let i = Ss(s);
        let o = s && i.length > 0 ? hf(s) : "";
        for (let a of i){
            e = Dpe(e, a, o);
        }
    }
    return iA(e);
}
function Ss(e) {
    if (!e || !wn.test(e) || hf(e) === e) {
        return [];
    }
    let n = [
        e
    ];
    let r = pt(e);
    let s = e.slice(r);
    let i = s.indexOf("/");
    for (let o of new Set([
        s.indexOf("@"),
        ht(s)
    ])){
        if (r !== 0 && o !== -1 && (i === -1 || o < i)) {
            n.push(e.slice(0, r) + s.slice(o + 1));
        }
    }
    return n;
}
function xs(e) {
    let n = N(e);
    let r = pt(n);
    let s = r !== 0;
    let i = n.indexOf("#");
    if (n.includes("?") || i !== -1 && (s || n.includes("@", i))) {
        return true;
    }
    let o = n.slice(r);
    let a = ht(o);
    if (a === -1) {
        return false;
    }
    let u = n.slice(0, r - 3);
    let l = /^(?:ftps?|wss?)$/i.test(u) ? o.slice(0, a).replace(/^[/\\]+/, "") : o.slice(0, a);
    return Te(l) || s && (/https?$/i.test(u) || !l.includes("/") && dt(u));
}
const Ron = /:|%3a/i;
function lt(e) {
    return !e.hostname.startsWith("[") && /%3a/i.test(e.hostname) && `${e.pathname}${e.search}${e.hash}`.includes("@");
}
function Te(e) {
    return Ron.test(e);
}
function ct(e) {
    let n = N(e);
    let r = n.indexOf(":");
    let s = r === -1 ? "" : n.slice(0, r);
    if (!/^[a-z][a-z0-9+.-]*$/i.test(s) || !/(?:ssh|git\+ssh|ssh\+git|git|file)$/i.test(s) || ut.test(n)) {
        return false;
    }
    let i = n.slice(r + 1);
    let o = Qe(i.slice(/^\/*/.exec(i)[0].length), "/");
    let a = o.search(/[?#]/);
    if (!(/%40/i.test(o) || a !== -1 && o.includes("@", a))) {
        return false;
    }
    let u = o.replace(/%([0-9a-f]{2})/gi, (c, d)=>String.fromCharCode(parseInt(d, 16)));
    let l = u.lastIndexOf("@");
    return l !== -1 && u.slice(0, l).includes(":");
}
function ae(e) {
    let n = e.indexOf(":");
    let r = e.indexOf("/");
    return n > 0 && !e.includes("://") && (r === -1 || n < r);
}
function we(e, n) {
    let r = (i, o)=>{
        let a = N(i);
        return ws(i) || /^(?:ssh|git|git\+ssh|ssh\+git|file):\/\//i.test(a) && o !== i && !o.toLowerCase().startsWith(a.slice(0, a.indexOf("://") + 3).toLowerCase()) || ae(i) && (As(i) || /[\t\n\r]/.test(i) || Rs(i, o));
    };
    if (n !== e && ae(n) && !ae(e) || r(e, n) || r(n, n)) {
        return tT;
    }
    return n;
}
function ws(e) {
    let n = e.replace(/^[\u0000-\u0020]+/, "");
    let r = /^[a-z+\t\n\r]*:[\t\n\r]*\/[\t\n\r]*\//i.exec(n);
    let s = r !== null && /^(?:ssh|git|git\+ssh|ssh\+git|file):\/\/$/i.test(r[0].replace(/[\t\n\r]/g, "")) ? r : null;
    if (!s && !ae(e)) {
        return false;
    }
    let i = s ? /^(?:[\w.~+-]+(?::[^@/?#%\s[\]]*)?@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\])?(?::[\w~-]*)?(?:\/|$)/i : /^(?:[\w.~+-]+@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\]):/i;
    let o = s ? n.slice(s[0].length) : e;
    let a = s ? o.slice(Math.max(o.indexOf("/"), 0)) : "";
    return !i.test(o) || /(?:@|%40)(?:\[|%5b)/i.test(a);
}
function As(e) {
    try {
        return new URL(e).host !== "";
    } catch  {
        return false;
    }
}
function Rs(e, n) {
    let r = N(e);
    let s = r.indexOf(":");
    let i = r.slice(0, s);
    if (s <= 0 || /[/?#]/.test(i) || e.includes("://")) {
        return false;
    }
    let o = i.lastIndexOf("@");
    let a = r.indexOf("@[");
    let u = a !== -1 ? a + 1 : r.startsWith("[") ? 0 : -1;
    let l = i.slice(o + 1);
    if (u !== -1) {
        let c = r.indexOf("]", u);
        if (u !== o + 1 || r[c + 1] !== ":" || /[/?#@\\]/.test(r.slice(u + 1, c))) {
            return true;
        }
        l = r.slice(u, c + 1);
    }
    return n !== e && n !== tT && !n.startsWith(`${l}:`);
}
function ln(e) {
    return xs(e) || _s(e);
}
function _s(e) {
    let n = e.replace(/^[\u0000-\u0020]+/, "");
    let r = n.indexOf("://");
    if (r !== -1 && /[?#]/.test(n)) {
        return true;
    }
    let s = Qe(r === -1 ? n : n.slice(r + 3), "/");
    let i = s.lastIndexOf("@");
    return i !== -1 && (Te(s.slice(0, i)) || r !== -1 && dt(n.slice(0, r)));
}
function dt(e) {
    return !/^(?:ssh|git\+ssh|ssh\+git)$/i.test(e);
}
function N(e) {
    return e.replace(/^[\u0000-\u0020]+/, "").replace(/[\t\n\r]/g, "");
}
const _e = "(^|[^a-z0-9+.-]|%[0-9a-f]{2})";
const vs = "https?|wss?|ftps?";
const Sn = "ssh\\+git|git\\+ssh|ssh|git";
const Os = new RegExp(`[a-z](?:[a-z0-9+.-]{1,31}:\\/+|:\\/\\/)|(?:https?|ftps?):(?!\\/)|${_e}(?:wss?|file):(?!\\/)|${_e}(?:${Sn}):(?!\\/)(?=[^@/?#\\s]*?(?::|%3a))`, "i");
function Oe(e, { forDestination = false } = {}) {
    let r = N(e).replace(/\\/g, "/");
    let s = r.search(/[?#]/);
    let i = s === -1 ? r : r.slice(0, s);
    let o = (forDestination ? /^[a-z][a-z0-9+.-]*:\/*/i.exec(i) : null) ?? /:\/+/.exec(i);
    if (!o) {
        return false;
    }
    let a = o.index + o[0].length;
    let u = (forDestination ? Os : /[a-z][a-z0-9+.-]{1,31}:\/+/i).exec(i.slice(a));
    let l = a + (u?.index ?? 0) + (u?.[0].length ?? 0);
    return u !== null && (r.includes("@", l) || /%40/i.test(Qe(r.slice(l), "/")));
}
function xn(e) {
    let n = N(e);
    if (ut.test(n) || /^file:/i.test(n)) {
        return false;
    }
    return kn(e);
}
function kn(e) {
    let n = N(e);
    let r = n.search(/[?#]/);
    let i = (r === -1 ? n : n.slice(0, r)).indexOf("\\");
    return i !== -1 && n.includes("@", i);
}
function Ls(e) {
    let n = N(e);
    let r = /(?:ssh|git\+ssh|ssh\+git|git):\/\//i.exec(n);
    if (!r) {
        return false;
    }
    let s = n.slice(r.index + r[0].length).replace(/%40/gi, "@").replace(/%5b/gi, "[");
    let i = s.search(/[/?#]/);
    return i !== -1 && s.includes("@[", i);
}
function Ts(e, n) {
    if (!/^(?:ssh|git|git\+ssh|ssh\+git):$/i.test(n.protocol)) {
        return false;
    }
    let r = Dse(N(e))?.host;
    return r !== undefined && r.toLowerCase() !== IDt(n.hostname).toLowerCase();
}
function ft(e, n) {
    return Oe(e, {
        forDestination: true
    }) || Oe(n.href, {
        forDestination: true
    }) || Ls(e) || Ts(e, n) || n.protocol === "file:" && Is(e);
}
function Is(e) {
    let n = N(e);
    let r = n.search(/[?#]/);
    let i = (r === -1 ? n : n.slice(0, r)).indexOf("\\");
    let o = n.lastIndexOf("@");
    return i !== -1 && o > i && /:|%3a/i.test(n.slice(i, o));
}
function Cs(e) {
    return /^[\w .+~@\\/-]*$/.test(e) && !/\\(?:[^A-Za-z0-9@]|$)| $|\.[_~+]*\.|(?:^|\/)[_~+]*\.[_~+]*$/.test(e) && !/(?:^|[^\\])@|@[^\\/ ]*(?:[/ ]|$)/.test(e);
}
function pt(e) {
    let n = e.indexOf("://");
    if (n !== -1 && /^[a-z][a-z0-9+.-]*$/i.test(e.slice(0, n))) {
        return n + 3;
    }
    return 0;
}
function ht(e) {
    let n = e.indexOf("@");
    if (n === -1) {
        return -1;
    }
    let r = e.search(/[?#]/);
    if (r !== -1 && r < n && e.lastIndexOf("/", r) !== -1) {
        return -1;
    }
    let s = e.indexOf("/", n);
    return e.lastIndexOf("@", s === -1 ? e.length : s);
}
function Ps(e, n, r) {
    let s = e.indexOf("/");
    if (s <= 0 || s > n) {
        return false;
    }
    let i = e.slice(0, s).replace(/^\[[^\]]*\]/, "");
    return !Te(r ? i.replace(/:\d+$/, "") : i);
}
const Ds = /[a-z][a-z0-9+.-]{0,31}:\/\/[^\s'"`<>]+/gi;
var wn = /[\s'"`<>]/;
const sMs = "whitespace, quotes, backticks or angle brackets";
function iMs(e) {
    return /^https?:\/\//i.test(e) && !wn.test(e);
}
const Fs = /(^|[\s'"`<>])([^\s'"`<>]*(?:@|%40)[^\s'"`<>]*)/gi;
const Ns = new RegExp(`${_e}(?:${vs}):(?!\\/\\/)|${_e}(?:${Sn}):(?!\\/\\/)`, "gi");
function $s(e) {
    let n = e.toLowerCase();
    let r = Math.max(n.lastIndexOf("@"), n.lastIndexOf("%40"));
    for (let s of e.matchAll(Ns)){
        let i = s.index + s[0].length;
        if (r < i) {
            return -1;
        }
        let o = s.index + (s[1] ?? s[2] ?? "").length;
        if (s[2] === undefined) {
            return o;
        }
        let a = n.indexOf(":", i);
        let u = Math.min(a === -1 ? r : a, r);
        if (a !== -1 && a < r || n.slice(i, u).includes("%3a")) {
            return o;
        }
    }
    return -1;
}
function iA(e) {
    if (!e) {
        return e;
    }
    return e.replace(Ds, (n)=>hf(n)).replace(Fs, (n, r, s)=>{
        let i = $s(s);
        if (i === -1) {
            return r + s;
        }
        return r + s.slice(0, i) + hf(s.slice(i));
    });
}
function Xe(e, n, r) {
    return (n || e.redactOnly !== true) && (e.prefilter === undefined || e.prefilter.test(r));
}
function Hs(e, n) {
    for(let r = n + 2 * hBe;; r *= 2){
        if (e.length <= r) {
            return f2n(e);
        }
        let s = f2n(e.slice(0, r));
        let i = s.length - hBe;
        if (i >= n) {
            return ne(s, i);
        }
    }
}
var Bs = {
    aws: "AWS",
    gcp: "GCP",
    api: "API",
    pat: "PAT",
    ad: "AD",
    tf: "TF",
    oauth: "OAuth",
    npm: "NPM",
    pypi: "PyPI",
    jwt: "JWT",
    ci: "CI",
    scim: "SCIM",
    github: "GitHub",
    gitlab: "GitLab",
    openai: "OpenAI",
    digitalocean: "DigitalOcean",
    huggingface: "HuggingFace",
    hashicorp: "HashiCorp",
    sendgrid: "SendGrid"
};
const Et = {
    verbose: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4
};
const Ks = new RegExp(`(?!\\t)[${qy}]`, "gu");
const Gs = 10485760;
function zs(e) {
    return Object.hasOwn(Et, e);
}
function vn(e) {
    if ($H(e)) {
        return null;
    }
    return resolve(e);
}
function Ln() {}
const Vs = {
    sessionId: "",
    fromBackend: false
};
function Tn(e, configHome, r, s) {
    let i = join(configHome, "debug");
    let o = join(i, `${e.sessionId}.txt`);
    let target;
    if (r === null) {
        target = o;
    } else if (s !== null && r === s) {
        target = join(s, `${e.sessionId}.txt`);
    } else {
        target = r;
    }
    let arm = !e.fromBackend && target === o ? "v5" : "raw";
    return {
        target,
        arm,
        configHome,
        rotate: arm === "raw" && !(dirname(target) === i && target.endsWith(".txt")),
        pointLatest: arm === "raw" && target !== o
    };
}
function bt(e) {
    return ff.userNamed(isAbsolute(e) ? e : resolve(e));
}
function js(error) {
    return error.code === "Failed" && error.telemetryCode === "ENOENT";
}
function Zs(storageV5, n = vt) {
    if (n) {
        return storageV5;
    }
}
async function In(e, sessionId, data, s) {
    let i = {
        namespace: "log",
        sessionId,
        channel: "debug"
    };
    let o = await Me.run(true, ()=>e.append(i, [
            {
                data
            }
        ], s ? {
            markLatest: true
        } : undefined));
    if (o.ok) {
        return "landed";
    }
    if (s && o.error.code === "InvalidArgument" && o.error.argument === "opts.markLatest") {
        return "refused";
    }
    return "dropped";
}
class Pn {
    deps;
    minLevel;
    filter;
    toStderr;
    filePath;
    runtimeDebugEnabled = false;
    hasFormattedOutput = false;
    debugFromLaunch;
    storageV5;
    writer = null;
    redirect = null;
    pendingWrite = Promise.resolve();
    unflushedChunks = [];
    backendLinesLogged = 0;
    exiting = false;
    exitHandlerRegistered = false;
    successor = null;
    writtenBytes = -1;
    rotating = false;
    resolvedLogPath = null;
    overrideDirectory = null;
    rotationTarget = null;
    latestMarked = false;
    latestRefused = false;
    constructor(e){
        this.deps = e;
        this.storageV5 = Zs(e.storageV5);
        if (e.launchIdentity !== undefined) {
            this.minLevel = e.launchIdentity.minLevel;
            this.filter = e.launchIdentity.filter;
            this.toStderr = e.launchIdentity.toStderr;
            this.filePath = e.launchIdentity.filePath;
            this.debugFromLaunch = e.launchIdentity.debugFromLaunch;
            return;
        }
        let n = Array.isArray(e.argv) ? e.argv : [];
        let r = n.indexOf("--");
        let s = r === -1 ? n : n.slice(0, r);
        let i = e.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
        this.minLevel = i && zs(i) ? i : "debug";
        let o = s.find((u)=>u.startsWith("--debug="));
        this.filter = o ? It(o.substring(8)) : null;
        this.toStderr = s.includes("--debug-to-stderr") || s.includes("-d2e");
        let a = null;
        for(let u = 0; u < s.length; u++){
            let l = s[u];
            if (l.startsWith("--debug-file=")) {
                a = vn(l.substring(13));
                break;
            }
            if (l === "--debug-file" && u + 1 < s.length) {
                a = vn(s[u + 1]);
                break;
            }
        }
        this.filePath = a;
        this.debugFromLaunch = Ne(e.env.DEBUG) || Ne(e.env.DEBUG_SDK) || s.includes("--debug") || s.includes("-d") || this.toStderr || o !== undefined || this.filePath !== null;
    }
    isDebugMode() {
        return this.runtimeDebugEnabled || this.debugFromLaunch;
    }
    drainsSyncAtExit() {
        return !(j() && this.storageV5 !== undefined && this.deps.syncExitDrain === false);
    }
    launchIdentity() {
        return {
            minLevel: this.minLevel,
            filter: this.filter,
            toStderr: this.toStderr,
            filePath: this.filePath,
            debugFromLaunch: this.debugFromLaunch,
            isAnt: this.deps.isAnt,
            isTestEnvironment: this.deps.isTestEnvironment
        };
    }
    enableDebugLogging() {
        let e = this.isDebugMode() || this.deps.isAnt;
        this.runtimeDebugEnabled = true;
        return e;
    }
    logPath() {
        return this.filePath ?? (this.overrideDirectory !== null && this.overrideDirectory === this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ? join(this.overrideDirectory, `${this.deps.sessionId()}.txt`) : null) ?? this.resolvedLogPath ?? this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? this.defaultLogPath();
    }
    defaultLogPath(e = this.deps.sessionId()) {
        return join(this.deps.configHomeDir(), "debug", `${e}.txt`);
    }
    learnedOverrideDirectory() {
        return this.overrideDirectory;
    }
    isArmed() {
        return this.storageV5 !== undefined;
    }
    log(e, { level } = {
        level: "debug"
    }) {
        if (Et[level] < Et[this.minLevel]) {
            return;
        }
        let r = this.deps.limits?.();
        if (r === undefined) {
            this.emit(e, level);
            return;
        }
        let s = e.length > r.maxMessageLength ? `debug message not logged: it has ${e.length} characters, over this log's fixed limit of ${r.maxMessageLength} per message` : e;
        let { admitted, leftOutBefore } = r.admit(s.length);
        if (!admitted) {
            return;
        }
        r.timed(()=>{
            if (leftOutBefore > 0) {
                this.emit(`debug messages not logged: ${leftOutBefore} since this log's last line, over its fixed limit on how much it logs at a time`, level);
            }
            this.emit(s, level);
        });
    }
    emit(e, n) {
        if (!this.shouldLog(e)) {
            return;
        }
        let r = ps(e.trim());
        r = r.includes(`
`) ? OH(_(r)) : r.replace(Ks, a6);
        let i = `${new Date().toISOString()} [${n.toUpperCase()}] ${r}
`;
        if (this.toStderr) {
            this.deps.writeToStderr(i);
            return;
        }
        this.write(i);
    }
    write(content) {
        let n = this.getWriter();
        let r = Vs;
        if (this.storageV5 !== undefined) {
            r = {
                sessionId: this.deps.sessionId(),
                fromBackend: Me.getStore() === true
            };
            if (r.fromBackend) {
                this.backendLinesLogged++;
            }
        }
        n.write({
            origin: r,
            content
        });
        if (this.exiting) {
            n.flush();
        }
    }
    async flush() {
        let backendLinesLogged = this.backendLinesLogged;
        this.writer?.flush();
        await this.pendingWrite;
        if (this.storageV5 !== undefined && this.successor) {
            return this.successor.flush();
        }
        for(let n = 0; this.backendLinesLogged !== backendLinesLogged && n < 3; n++){
            backendLinesLogged = this.backendLinesLogged;
            this.writer?.flush();
            await this.pendingWrite;
        }
    }
    dispose(e) {
        this.redirect = e;
        try {
            this.writer?.dispose();
        } finally{
            this.redirect = null;
            this.writer = null;
        }
    }
    succeed(e) {
        this.runtimeDebugEnabled = e.runtimeDebugEnabled;
        this.hasFormattedOutput = e.hasFormattedOutput;
        this.pendingWrite = e.pendingWrite;
        this.unflushedChunks = e.unflushedChunks;
        this.exitHandlerRegistered = e.exitHandlerRegistered;
        e.successor = this;
        e.dispose((n)=>{
            this.write(n);
        });
    }
    handleExit() {
        if (this.successor) {
            this.successor.handleExit();
            return;
        }
        this.exiting = true;
        this.writer?.flush();
        this.drainSync();
    }
    async maybeRotate(e, n, r = Gs) {
        let s = j() && this.storageV5 !== undefined ? this.storageV5.hostFiles : undefined;
        if (this.writtenBytes < 0) {
            if (s) {
                let i = await s.stat(bt(e));
                this.writtenBytes = i.ok && i.value.kind !== "absent" ? i.value.size : 0;
            } else {
                this.writtenBytes = await stat(e).then((i)=>i.size).catch(()=>0);
            }
        } else {
            this.writtenBytes += n;
        }
        if (this.writtenBytes <= r || this.rotating) {
            return;
        }
        this.rotating = true;
        try {
            let i = e.endsWith(".txt") ? `${e.slice(0, -4)}.1.txt` : `${e}.1`;
            if (s) {
                let o = bt(e);
                let a = bt(i);
                let u = await s.rename(o, a);
                if (!u.ok && !js(u.error)) {
                    await s.delete(a, {
                        missingOk: true
                    });
                    if (!(await s.rename(o, a)).ok) {
                        await s.delete(o, {
                            missingOk: true
                        });
                    }
                }
            } else {
                try {
                    await rename(e, i);
                } catch (error) {
                    if (!z(error)) {
                        await unlink(i).catch(()=>{});
                        await rename(e, i).catch(()=>unlink(e).catch(()=>{}));
                    }
                }
            }
            this.writtenBytes = 0;
        } finally{
            this.rotating = false;
        }
    }
    shouldLog(e) {
        if (this.deps.isTestEnvironment && !this.toStderr && this.filePath === null) {
            return false;
        }
        if (!this.deps.isAnt && !this.isDebugMode()) {
            return false;
        }
        if (typeof process === "undefined" || typeof process.versions === "undefined" || typeof process.versions.node === "undefined") {
            return false;
        }
        return Ct(e, this.filter);
    }
    resolveDirToFile(e) {
        this.resolvedLogPath = join(e, `${this.deps.sessionId()}.txt`);
        return this.resolvedLogPath;
    }
    async appendGroup(e, n, r, s) {
        if (this.storageV5 !== undefined && e.arm === "v5") {
            await this.appendV5AndMark(this.storageV5, n, r);
            return;
        }
        if (!this.writesFiles()) {
            return;
        }
        if (s) {
            await mkdir(dirname(e.target), {
                recursive: true
            }).catch(()=>{});
        }
        let i = e;
        try {
            await appendFile(e.target, r);
        } catch (error) {
            if (!H9(error)) {
                throw error;
            }
            if (this.storageV5 === undefined) {
                i = {
                    ...e,
                    target: this.resolveDirToFile(e.target)
                };
                await appendFile(i.target, r);
            } else {
                this.overrideDirectory = e.target;
                i = Tn(n, e.configHome, e.target, e.target);
                if (i.arm === "v5") {
                    await this.appendV5AndMark(this.storageV5, n, r);
                    return;
                }
                await mkdir(dirname(i.target), {
                    recursive: true
                }).catch(()=>{});
                try {
                    await appendFile(i.target, r);
                } catch  {
                    return;
                }
            }
        }
        if (i.rotate) {
            if (this.storageV5 !== undefined && i.target !== this.rotationTarget) {
                this.rotationTarget = i.target;
                this.writtenBytes = -1;
            }
            await this.maybeRotate(i.target, Buffer.byteLength(r)).catch(Ln);
        }
        if (i.pointLatest) {
            this.markLatestSymlink();
        }
    }
    async appendV5AndMark(e, n, r) {
        let s = j();
        let i = s && !this.latestMarked && !this.latestRefused;
        let o = await In(e, n.sessionId, r, i);
        if (o === "refused") {
            this.latestRefused = true;
            o = await In(e, n.sessionId, r, false);
            this.log("debug log: the storage backend refused markLatest; <debug folder>/latest is not pointed in this process", {
                level: "warn"
            });
        }
        if (o !== "landed") {
            return;
        }
        if (i && !this.latestRefused) {
            this.latestMarked = true;
        } else if (!s) {
            this.markLatestSymlink();
        }
    }
    markLatestSymlink() {
        if (!this.latestMarked && this.writesFiles()) {
            this.latestMarked = true;
            this.updateLatestSymlink();
        }
    }
    writesFiles() {
        try {
            return this.deps.diskless?.() !== true && (this.deps.defaultFile?.() !== false || this.filePath !== null || this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR !== undefined);
        } catch  {
            return false;
        }
    }
    shiftUnflushedChunk() {
        this.unflushedChunks.shift();
    }
    drainSync() {
        if (this.unflushedChunks.length === 0) {
            return;
        }
        if (!this.drainsSyncAtExit() || !this.writesFiles()) {
            this.unflushedChunks.length = 0;
            return;
        }
        let e = [];
        for (let n of this.unflushedChunks.splice(0)){
            let r = e.at(-1);
            if (r !== undefined && r.armed === n.armed && (!n.armed || r.target === n.target)) {
                r.parts.push(n);
            } else {
                e.push({
                    target: n.target,
                    armed: n.armed,
                    parts: [
                        n
                    ]
                });
            }
        }
        for (let { target, armed, parts } of e){
            let i = armed ? target : this.logPath();
            let o = parts.map((a)=>a.content).join("");
            try {
                ie().mkdirSync(dirname(i));
            } catch  {}
            try {
                ie().appendFileSync(i, o);
            } catch (error) {
                if (H9(error)) {
                    try {
                        if (!armed) {
                            ie().appendFileSync(this.resolveDirToFile(i), o);
                        } else {
                            let u = (d, p)=>{
                                try {
                                    ie().appendFileSync(join(i, `${d}.txt`), p);
                                } catch  {}
                            };
                            let l = parts[0]?.sessionId;
                            let c = "";
                            for (let d of parts){
                                if (d.sessionId !== l) {
                                    u(l, c);
                                    l = d.sessionId;
                                    c = "";
                                }
                                c += d.content;
                            }
                            u(l, c);
                        }
                    } catch  {}
                }
            }
        }
    }
    groupLines(lines) {
        let n = lines[0];
        if (n === undefined) {
            return [];
        }
        if (this.storageV5 === undefined) {
            return [
                {
                    decision: {
                        target: this.logPath(),
                        arm: "raw",
                        configHome: "",
                        rotate: true,
                        pointLatest: true
                    },
                    origin: n.origin,
                    lines
                }
            ];
        }
        let r = [];
        for (let s of lines){
            let i = r.at(-1);
            if (i !== undefined && i.origin.sessionId === s.origin.sessionId && i.origin.fromBackend === s.origin.fromBackend) {
                i.lines.push(s);
            } else {
                r.push({
                    decision: Tn(s.origin, this.deps.configHomeDir(), this.filePath ?? this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? null, this.overrideDirectory),
                    origin: s.origin,
                    lines: [
                        s
                    ]
                });
            }
        }
        return r;
    }
    getWriter() {
        if (this.writer) {
            return this.writer;
        }
        let e = null;
        let armed = this.storageV5 !== undefined;
        this.writer = Ue({
            writeBatch: (r)=>{
                if (this.redirect) {
                    this.redirect(r.map((i)=>i.content).join(""));
                    return;
                }
                if (this.exiting) {
                    for (let i of this.groupLines(r)){
                        this.unflushedChunks.push({
                            target: i.decision.target,
                            sessionId: i.origin.sessionId,
                            armed,
                            content: i.lines.map((o)=>o.content).join("")
                        });
                    }
                    this.drainSync();
                    return;
                }
                let s = this.writesFiles();
                for (let i of this.groupLines(r)){
                    if (i.decision.arm === "raw" && !s) {
                        continue;
                    }
                    let content = i.lines.map((l)=>l.content).join("");
                    let a = dirname(i.decision.target);
                    let u = i.decision.arm === "raw" && (i.origin.fromBackend || e !== a);
                    if (i.decision.arm === "raw") {
                        e = a;
                    }
                    this.unflushedChunks.push({
                        target: i.decision.target,
                        sessionId: i.origin.sessionId,
                        armed,
                        content
                    });
                    this.pendingWrite = this.pendingWrite.then(this.appendGroup.bind(this, i.decision, i.origin, content, u)).catch(Ln).then(this.shiftUnflushedChunk.bind(this));
                }
            },
            sizeOf: (r)=>r.content.length,
            flushIntervalMs: 1000,
            maxBufferSize: 100,
            immediateMode: this.isDebugMode()
        });
        this.deps.registerCleanup(async ()=>{
            this.writer?.dispose();
            await this.pendingWrite;
        });
        if (!this.exitHandlerRegistered) {
            this.exitHandlerRegistered = true;
            this.deps.onExit(this.handleExit.bind(this));
        }
        return this.writer;
    }
    async updateLatestSymlink() {
        try {
            let e = this.logPath();
            let n = join(dirname(e), "latest");
            await unlink(n).catch(()=>{});
            await symlink(e, n);
        } catch  {}
    }
}
class Dn {
    instance = undefined;
    init = {};
    defaultFile = true;
    limits = undefined;
    setInstance(e) {
        this.instance = e;
    }
    setInit(e) {
        this.init = e;
    }
    disableDefaultFile() {
        this.defaultFile = false;
    }
    setLimits(e) {
        this.limits = e;
    }
}
const Js = new q(()=>new Dn);
function Ie() {
    return cs(Js);
}
function xt(e, launchIdentity) {
    return new Pn({
        argv: process.argv,
        env: process.env,
        sessionId: ()=>K(),
        configHomeDir: ()=>ve(),
        onExit: (r)=>{
            process.on("exit", r);
        },
        registerCleanup: (r)=>{
            St(r);
        },
        writeToStderr: (r)=>{
            tj(r);
        },
        isAnt: launchIdentity?.isAnt ?? false,
        isTestEnvironment: launchIdentity?.isTestEnvironment ?? false,
        launchIdentity,
        storageV5: e.init.storageV5 !== undefined && e.init.configHome === ve() ? e.init.storageV5 : undefined,
        syncExitDrain: e.init.syncExitDrain,
        diskless: ()=>Ce(),
        defaultFile: ()=>e.defaultFile,
        limits: ()=>e.limits
    });
}
function Tq(e) {
    let n = Ie();
    n.setInit({
        storageV5: e.storageV5,
        configHome: ve(),
        syncExitDrain: e.syncExitDrain
    });
    let n_instance = n.instance;
    if (n_instance) {
        let s = xt(n, n_instance.launchIdentity());
        n.setInstance(s);
        s.succeed(n_instance);
    }
    if (e.syncExitDrain === false && !W().drainsSyncAtExit()) {
        t("Sync exit drain off for this process: debug lines still queued at exit are dropped, so this log may end short");
    }
}
function W() {
    let e = Ie();
    let e_instance = e.instance;
    if (e_instance) {
        return e_instance;
    }
    let r = xt(e);
    e.setInstance(r);
    return r;
}
function xon() {
    return W().minLevel;
}
function w9() {
    return W().isDebugMode();
}
function l6() {
    return W().toStderr;
}
function VCo() {
    return W().filePath;
}
function qCo() {
    return W().enableDebugLogging();
}
function KCo() {
    let e = Ie();
    let e_instance = e.instance;
    if (!e_instance) {
        return;
    }
    let r = xt(e);
    e.setInstance(r);
    r.succeed(e_instance);
}
function RPe(e) {
    W().hasFormattedOutput = e;
}
function YCo() {
    return W().hasFormattedOutput;
}
async function pwe() {
    await Ie().instance?.flush();
}
function t(e, n = {
    level: "debug"
}) {
    W().log(e, n);
}
function Aq() {
    return W().logPath();
}
function XCo(e, n) {
    return e === W().defaultLogPath(n);
}
function LZ(e, n) {}
const No = (()=>{
    let CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
    if (CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS !== undefined) {
        let n = Number(CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS);
        if (!Number.isNaN(n) && n >= 0) {
            return n;
        }
    }
    return Infinity;
})();
const Xs = {
    [Symbol.dispose] () {}
};
function Qs() {
    return Xs;
}
const sh = Qs;
function _(e, n, r) {
    using s = sh`JSON.stringify(${Pe(e)})`;
    return JSON.stringify(e, n, r);
}
function ON(e) {
    return JSON.stringify(e) + `
`;
}
function Oi(e) {
    return JSON.stringify(e);
}
function a2n(e) {
    using n = sh`jsonlJoin(${e.length})`;
    let r = "";
    for(let s = 0; s < e.length; s++){
        r += JSON.stringify(e[s]) + `
`;
    }
    return r;
}
const X = (e, n)=>{
    using r = sh`JSON.parse(${Pe(e)})`;
    if (typeof n === "undefined") {
        return JSON.parse(e);
    }
    return JSON.parse(e, n);
};
function $o(e) {
    return JSON.parse(e);
}
function wd(e, n) {
    using r = sh`structuredClone(${Pe(e)})`;
    return structuredClone(e, n);
}
function S8e(e, n, r) {
    using s = sh`fs.writeFileSync(${e}, ${Pe(n)})`;
    writeFileSync(e, n, r);
}
function Pe(e) {
    if (typeof e === "string") {
        return e.length;
    }
    return e;
}
const pi = "→";
function hi() {
    return E.constants.O_NOFOLLOW | E.constants.O_NONBLOCK;
}
function h9() {
    return E.constants.O_RDONLY | E.constants.O_NONBLOCK | E.constants.O_NOCTTY;
}
const de = /\/+/;
function PDt(e, n) {
    let r = (u)=>u.split(de).filter(Boolean);
    let s = g.resolve(e);
    let i = g.resolve(n);
    let o = r(s);
    let a = r(i);
    return g.parse(s).root === g.parse(i).root && o.length < a.length && o.every((u, l)=>u === a[l]);
}
function Hn(e) {
    let n = "";
    for (let s of e.split(/([\\/]+)/)){
        if (s === "." || s === "..") {
            break;
        }
        n += s;
    }
    let r = n.replace(/(?<=[^\\/])[\\/]+$/, "");
    if (r === "") {
        return e;
    }
    return r;
}
function mi(e) {
    if (e.startsWith("\\\\")) {
        return Hn(e);
    }
    let n = e.replace(/^\/+/, "/");
    let r = zPe(n);
    if (r !== null) {
        return r;
    }
    return Hn(e);
}
const yi = mi;
function Fe(e, n, r) {
    let s = Qa(e);
    if (n.length === 0 || s || n.some((i)=>i === "." || i === "..")) {
        if (r !== undefined && (n.length > 0 || s)) {
            r(g.join(e, ...n));
        }
        if (s) {
            return yi(e);
        }
        return e;
    }
    return g.join(e, ...n);
}
const Dh = "\x00unverified-ancestry";
const w8e = "\x00opaque-link-text";
function At(e) {
    return my(g.isAbsolute(e) ? e : e.replace(/^(?:\.\.(?:[\\/]+|$))+/, ""));
}
function l2n(e, n = false) {
    return e.includes("\uFFFD") || At(e) || n && (/^(?:[A-Za-z]:(?![\\/])|[\\/](?![\\/]))/.test(e) || /^[\\/]{2}\?[\\/]/.test(e) && !/^[\\/]{2}\?[\\/](?:[A-Za-z]:[\\/]|UNC[\\/])/i.test(e) || e.split(/[\\/]/).some((r)=>r !== "." && r !== ".." && /[. ]$/.test(r)));
}
function OCo(e) {
    return e !== undefined && e !== Dh;
}
function c2n(e) {
    return Object.assign(Error("ELOOP: symbolic link chain too long to vet"), {
        code: "ELOOP",
        path: e
    });
}
function Mn(e, n, r = false, s = false, i = false) {
    if (n?.unreadableAncestry !== "unverified") {
        return;
    }
    let o = e !== undefined && typeof e === "object" && "errno" in e ? e.errno : undefined;
    if (o === "ENOENT" || o === "ENOTDIR") {
        return;
    }
    if (o === "ENAMETOOLONG" && !r && !s && !i) {
        return;
    }
    return Dh;
}
function re(e) {
    return zO(e);
}
function De(e, n) {
    return n !== undefined && n.some((r)=>zO(r) && !UN(e, r) && (Gn(e, r) || fa(e)));
}
function Un(e, n) {
    return n !== undefined && n.some((r)=>zO(r) && Gn(r, e));
}
function Gn(e, n) {
    let r = (o)=>{
        if (o.length > 1) {
            return o.replace(/\/+$/, "");
        }
        return o;
    };
    let [s, i] = [
        r(e),
        r(n)
    ];
    return s === i || s.startsWith(i === "/" ? i : `${i}/`);
}
function fe(e, n) {
    return n === undefined || n.every((r)=>UN(e, r));
}
function $e(e, n) {
    return n === undefined || n.every((r)=>Jse(e, r));
}
function Wn(e, n, r) {
    let s = fa(e) ? zPe(e) : null;
    if (s === null || !fe(s, n)) {
        return;
    }
    let i = g.join(e);
    if (fa(i) && XZ(i) === XZ(s)) {
        return i;
    }
    return Fe(e, [], r);
}
function zn(e) {
    if (e?.anchors !== undefined && e.anchors.length > 0) {
        return e.anchors;
    }
    if (e?.anchor !== undefined) {
        return [
            e.anchor
        ];
    }
}
function DO(e) {
    return my(e) || ks(e) || Va(e) || Wb(e) || mf(Vy, e) !== undefined;
}
async function ppt(e) {
    return my(e) || ks(e) || Va(e) || Wb(e) || await MN(Vy, e) !== undefined;
}
function MCo(e, n = Vy) {
    return my(e) || ks(e) || Va(e) || Wb(e) || mf(n, e, {
        surfaceNetworkRaw: true,
        unreadableAncestry: "unverified"
    }) !== undefined;
}
async function kPe(e, n = Vy) {
    return my(e) || ks(e) || Va(e) || Wb(e) || await MN(n, e, {
        surfaceNetworkRaw: true,
        unreadableAncestry: "unverified"
    }) !== undefined;
}
async function dwe(e, n, fsImpl = Vy) {
    if (my(e)) {
        return true;
    }
    if (ks(e)) {
        return true;
    }
    if (Va(e)) {
        let s = XZ(e);
        if (s === null || n === null || s !== XZ(n)) {
            return true;
        }
    }
    if (Wb(e)) {
        return true;
    }
    return (await qRr(e, n, {
        fsImpl
    })).verdict !== "clean";
}
async function qRr(e, anchor, { fsImpl = Vy, signal } = {}) {
    let reaches = await MN(fsImpl, e, {
        ...anchor === null ? {} : {
            anchor
        },
        unreadableAncestry: "unverified",
        surfaceNetworkRaw: true
    }, signal);
    if (reaches === undefined) {
        return {
            verdict: "clean"
        };
    }
    if (reaches === Dh) {
        return {
            verdict: "unverified"
        };
    }
    return {
        verdict: "network",
        reaches
    };
}
function mf(e, n, r) {
    return Vn(He(n, r), (s)=>{
        if (s.kind === "lstat") {
            return e.lstatSync(s.path);
        }
        if (s.kind === "opendirNofollow") {
            e.openDirNoFollowSync(s.path);
            return "ok";
        }
        return e.readlinkSync(s.path);
    });
}
function MN(e, n, r, s, i) {
    return bi(He(n, r), s, async (o)=>{
        if (o.kind === "lstat") {
            if (i === undefined) {
                return e.lstat(o.path);
            }
            let a;
            try {
                a = await e.lstatBigint(o.path);
            } catch (error) {
                i(o.path, undefined);
                throw error;
            }
            i(o.path, a);
            return a;
        }
        if (o.kind === "opendirNofollow") {
            await e.openDirNoFollow(o.path);
            return "ok";
        }
        return e.readlink(o.path);
    });
}
function Vn(e, n) {
    let r;
    while(true){
        let s = e.next(r);
        if (s.done) {
            return s.value;
        }
        try {
            r = n(s.value);
        } catch (error) {
            r = {
                errno: v(error)
            };
        }
    }
}
async function bi(e, n, r) {
    let s;
    while(true){
        let i = e.next(s);
        if (i.done) {
            return i.value;
        }
        if (n?.aborted === true) {
            return Dh;
        }
        try {
            s = await r(i.value);
        } catch (error) {
            s = {
                errno: v(error)
            };
        }
    }
}
async function Si(e, n, r, s) {
    let i = Symbol("cut short");
    let o;
    let a = n === undefined ? undefined : new Promise((resolvePromise)=>{
        o = ()=>resolvePromise(i);
        n.addEventListener("abort", o, {
            once: true
        });
    });
    let u;
    try {
        while(true){
            let l = e.next(u);
            if (l.done) {
                return l.value;
            }
            if (n?.aborted === true) {
                return s;
            }
            let c = r(l.value).catch((p)=>({
                    errno: v(p)
                }));
            let d = await (a === undefined ? c : Promise.race([
                c,
                a
            ]));
            if (d === i) {
                return s;
            }
            u = d;
        }
    } finally{
        if (o !== undefined) {
            n?.removeEventListener("abort", o);
        }
    }
}
function* He(e, n) {
    let r = zn(n);
    if (re(e) && !De(e, r)) {
        return e;
    }
    if (Bn(e) && !ll(e) && $e(e, r) || fa(e) && fe(e, r)) {
        return;
    }
    let s = g.resolve(e);
    let root = g.parse(s).root;
    let o = root;
    let a = s.slice(root.length).split(de).filter(Boolean);
    let u = 0;
    let a_length = a.length;
    let c = false;
    let d = false;
    let p;
    let m = 64;
    let h = ()=>a.some((f)=>Qa(f));
    let k = ()=>/[. ]$/.test(a[0]);
    while(a.length > 0 && u < m){
        if (c && Qa(a[0])) {
            return Dh;
        }
        let f = g.join(o, a[0]);
        if (fa(f) && fe(f, r) || re(f) && !(De(f, r) || Un(f, r))) {
            return Fe(f, a.slice(1), n?.onCollapsedLanding);
        }
        if (iw(f)) {
            if (n?.surfaceNetworkRaw === true || n?.unreadableAncestry === "unverified") {
                return Dh;
            }
            return Fe(f, a.slice(1), n?.onCollapsedLanding);
        }
        let y = false;
        if (y && g.dirname(f) === "/dev/fd" && a.some((T, A)=>A > 0 && (T === ".." || T === "."))) {
            a.shift();
            while(a[0] === "." && a.length > 1){
                a.shift();
            }
            o = f;
            continue;
        }
        let b = y ? {
            errno: "ENOENT"
        } : yield {
            kind: "lstat",
            path: f
        };
        if (b === undefined || typeof b === "string" || "errno" in b) {
            if (typeof b === "object" && "errno" in b && b.errno !== undefined && b.errno !== "ENOENT" && b.errno !== "ENOTDIR" && b.errno !== "ENAMETOOLONG") {
                if (typeof (yield {
                    kind: "opendirNofollow",
                    path: f
                }) === "string") {
                    d = true;
                    a.shift();
                    o = f;
                    continue;
                }
            }
            if (n?.launchAncestry && !d && typeof b === "object" && "errno" in b && (b.errno === "EPERM" || b.errno === "EACCES") && PDt(f, n.launchAncestry)) {
                c = true;
                a.shift();
                o = f;
                continue;
            }
            if (typeof b === "object" && "errno" in b && (b.errno === "ENOENT" || b.errno === "ENOTDIR")) {
                n?.onOutcome?.({
                    kind: "absent",
                    at: o,
                    remaining: [
                        ...a
                    ],
                    fromLinkTarget: a.length > a_length,
                    ...b.errno === "ENOTDIR" && {
                        notAFolder: true
                    }
                });
            }
            return Mn(b, n, u > 0, h(), k());
        }
        let R = b;
        d = true;
        if (!R.isSymbolicLink()) {
            a.shift();
            o = f;
            continue;
        }
        u++;
        let S = `${f} ${a.join("\x00")}`;
        if ((p ??= new Set).has(S)) {
            return;
        }
        p.add(S);
        let F = yield {
            kind: "readlink",
            path: f
        };
        if (typeof F !== "string") {
            return Mn(F, n, u > 0, h(), k());
        }
        let I = F;
        if (n?.literalLinkText === "opaque" && l2n(I)) {
            return w8e;
        }
        if (!g.isAbsolute(I)) {
            let T = I.split(de).filter(Boolean);
            if (n?.surfaceNetworkRaw === true) {
                let A = Wn((o.endsWith(g.sep) ? o : o + g.sep) + [
                    ...T,
                    ...a.slice(1)
                ].join(g.sep), r, n?.onCollapsedLanding);
                if (A !== undefined) {
                    return A;
                }
            }
            a.shift();
            n?.onHop?.({
                composed: g.resolve(o, I, ...a),
                leaf: a.length === 0,
                text: I
            });
            a_length = Math.min(a_length, a.length);
            a = [
                ...T,
                ...a
            ];
            continue;
        }
        let w = I;
        if (n?.surfaceNetworkRaw === true && a.length > 1 && Wb(w)) {
            let T = Wn([
                w,
                ...a.slice(1)
            ].join(g.sep), r, n?.onCollapsedLanding);
            if (T !== undefined) {
                return T;
            }
        }
        if (Bn(w) && !ll(w) && $e(w, r) || fa(w) && fe(w, r) || re(w) && !(De(w, r) || a.length > 1 && Un(w, r))) {
            a.shift();
            return Fe(w, a, n?.onCollapsedLanding);
        }
        if (n?.surfaceNetworkRaw === true && Qa(w) && (Bn(w) || Va(w) || zO(w) || Wb(w))) {
            a.shift();
            if (a.length === 0) {
                return w;
            }
            return w + g.sep + a.join(g.sep);
        }
        a.shift();
        let P = g.parse(w).root || g.sep;
        let O = g.parse(f).root;
        let H = /^[\\/]$/.test(P) && O !== "" && !/^[\\/]$/.test(O);
        if (H && (n?.surfaceNetworkRaw === true || n?.unreadableAncestry === "unverified")) {
            return Dh;
        }
        n?.onHop?.({
            composed: a.length === 0 ? w : g.resolve(w, ...a),
            leaf: a.length === 0,
            text: I
        });
        o = H ? O : P;
        d = false;
        a_length = Math.min(a_length, a.length);
        a = [
            ...w.slice(P.length).split(de).filter(Boolean),
            ...a
        ];
    }
    if (a.length > 0 && n?.literalLinkText === "opaque") {
        return w8e;
    }
    if (a.length > 0) {
        return Dh;
    }
    if (u > 0 && Wb(o)) {
        return o;
    }
    if (re(o) && !De(o, r)) {
        return o;
    }
    if (a.length === 0) {
        n?.onOutcome?.({
            kind: "resolved",
            path: o
        });
    }
}
function yo(e, n) {
    if (Bn(n) && !ll(n) || fa(n) || zP(n)) {
        return {
            resolvedPath: n,
            isSymlink: false,
            isCanonical: false
        };
    }
    let r = mf(e, n);
    if (r === Dh) {
        return {
            resolvedPath: n,
            isSymlink: false,
            isCanonical: false
        };
    }
    if (r !== undefined) {
        return {
            resolvedPath: r,
            isSymlink: true,
            isCanonical: false
        };
    }
    try {
        let s = OZ(e, n);
        return {
            resolvedPath: s,
            isSymlink: s !== n,
            isCanonical: true
        };
    } catch (s) {
        return {
            resolvedPath: n,
            isSymlink: false,
            isCanonical: false
        };
    }
}
function uwe(e) {
    let n = Bpt();
    if (n === null) {
        return null;
    }
    try {
        let r = g.resolve(n);
        let s = g.resolve(e.cwd());
        let i = g.parse(r).root;
        if (i !== g.parse(s).root) {
            return null;
        }
        let o = r.slice(i.length).split(de).filter(Boolean);
        let a = s.slice(i.length).split(de).filter(Boolean);
        let u = 0;
        while(u < o.length && u < a.length && o[u] === a[u]){
            u++;
        }
        if (u > 0) {
            return g.join(i, ...o.slice(0, u));
        }
        return null;
    } catch  {
        return null;
    }
}
function OZ(e, n) {
    try {
        return e.realpathSync(n);
    } catch (error) {
        let s = v(error);
        if (s !== "EPERM" && s !== "EACCES") {
            throw error;
        }
        let i;
        let o = uwe(e);
        if (mf(e, n, {
            unreadableAncestry: "unverified",
            surfaceNetworkRaw: true,
            launchAncestry: o,
            onOutcome: (u)=>{
                i = u;
            }
        }) !== undefined || i === undefined) {
            throw error;
        }
        if (i.kind === "absent") {
            throw Object.assign(Error("ENOENT: no such file or directory"), {
                code: "ENOENT",
                syscall: "realpath",
                path: n
            });
        }
        return On(i.path);
    }
}
const fpt = "ERR_SYMLINK_TO_NETWORK_PATH";
function kq(e, n, r) {
    let { asWritten, opts } = Jn(e, n, r);
    let o;
    let a;
    Xn(mf(e, asWritten, {
        ...opts,
        onOutcome: (u)=>{
            o = jn(u);
            a = Zn(u);
        }
    }), n, asWritten);
    return {
        ...Yn(asWritten),
        linksResolvedPath: o,
        absentAt: a
    };
}
async function Z1(e, n, r) {
    let { asWritten, opts, ownHost } = Jn(e, n, r);
    let a;
    let u;
    let identity;
    let endStats;
    let d = !ownHost;
    let p = false;
    let m;
    let linksFollowed = [];
    let k = {
        ...opts,
        onOutcome: (f)=>{
            p = true;
            a = jn(f);
            u = Zn(f);
            let y = m;
            let b = f.kind === "resolved" && y?.path === f.path;
            d = !b;
            endStats = b ? y.stats : undefined;
            identity = b && !Hg(y.stats.ino) ? {
                dev: y.stats.dev,
                ino: y.stats.ino,
                ctimeNs: y.stats.ctimeNs
            } : undefined;
        }
    };
    Xn(await MN(e, asWritten, k, undefined, r?.fileIdentity === true ? (f, y)=>{
        m = y === undefined ? undefined : {
            path: f,
            stats: y
        };
        if (y?.isSymbolicLink() === true) {
            linksFollowed.push(y);
        }
    } : undefined), n, asWritten);
    if (!p && m?.stats.isSymbolicLink() === true) {
        d = true;
    }
    return {
        ...Yn(asWritten),
        linksResolvedPath: a,
        absentAt: u,
        ...identity !== undefined && {
            identity
        },
        ...endStats !== undefined && {
            endStats
        },
        ...r?.fileIdentity === true && {
            linksFollowed
        },
        ...r?.fileIdentity === true && d && {
            noFileSeen: true
        }
    };
}
function jn(e) {
    if (e.kind === "resolved") {
        return On(e.path);
    }
}
function Zn(e) {
    if (e.kind === "absent") {
        return {
            at: e.at,
            remaining: e.remaining,
            fromLinkTarget: e.fromLinkTarget,
            ...e.notAFolder && {
                notAFolder: true
            }
        };
    }
}
function Jn(e, n, r) {
    let s = sT(n);
    if (lA(s) || gy(s)) {
        throw Object.assign(Error("Refusing to read a file whose path could not be vetted (a device-namespace spelling; use the plain drive or share path)"), {
            code: fpt,
            path: n,
            reason: "unexamined"
        });
    }
    let i = g.isAbsolute(s) ? g.resolve(s) : g.resolve(process.cwd(), s);
    let asWritten = sT(i);
    if (lA(asWritten) || gy(asWritten)) {
        throw Object.assign(Error("Refusing to read a file whose path could not be vetted (a device-namespace spelling; use the plain drive or share path)"), {
            code: fpt,
            path: n,
            reason: "unexamined"
        });
    }
    let ownHost = re(asWritten) || fa(asWritten) || Bn(asWritten) && !ll(asWritten);
    return {
        asWritten,
        ownHost,
        opts: {
            ...ownHost && {
                anchors: [
                    asWritten
                ]
            },
            surfaceNetworkRaw: true,
            ...(!ownHost || r?.failClosed) && {
                unreadableAncestry: "unverified",
                launchAncestry: uwe(e)
            }
        }
    };
}
function Yn(resolvedPath) {
    return {
        resolvedPath,
        isSymlink: false,
        isCanonical: false
    };
}
function Xn(e, n, asWritten) {
    if (e === undefined) {
        return;
    }
    let s = (reason)=>Object.assign(Error("Refusing to read a file whose path could not be vetted (a component that could not be examined, or a symbolic link chain too long to follow)"), {
            code: fpt,
            path: n,
            reason
        });
    if (e === Dh) {
        throw s("unexamined");
    }
    if (re(asWritten) && e === asWritten) {
        return;
    }
    if (!(Bn(e) || Va(e) || re(e) || Wb(e))) {
        throw s("unexamined");
    }
    throw Object.assign(Error("Refusing to read a file through a symbolic link that leads onto a network share or automount path; replace the link with a regular file to use it"), {
        code: fpt,
        path: n,
        reason: "network"
    });
}
function KRr(e) {
    return v(e) === fpt;
}
function HCo(e) {
    if (!KRr(e)) {
        return;
    }
    let e_reason = e.reason;
    if (e_reason === "network" || e_reason === "unexamined") {
        return e_reason;
    }
}
function Hpe(e, n, r) {
    let { resolvedPath } = yo(e, n);
    if (r.has(resolvedPath)) {
        return true;
    }
    r.add(resolvedPath);
    return false;
}
const wt = /(^|[\\/])\.\.([\\/]|$)/;
function xi(e, n = "linux") {
    let r = e.replace(n === "win32" ? /[\\/]\.(?=[\\/]|$)/g : /\/\.(?=\/|$)/g, "");
    if (r === "") {
        return e[0];
    }
    if (n === "win32" && /^[A-Za-z]:$/.test(r)) {
        return r + e[2];
    }
    return r;
}
function HN(e, n, r) {
    let anchors = zn(r);
    if (Bn(n) && !ll(n) || fa(n) || zP(n)) {
        if (anchors !== undefined && (fa(n) && !fe(n, anchors) || Bn(n) && !ll(n) && !$e(n, anchors))) {
            let c = mf(e, n, {
                anchors,
                surfaceNetworkRaw: r?.surfaceNetworkRaw
            });
            if (c === Dh && r?.surfaceNetworkRaw !== true) {
                if (r?.surfaceDotDotTargets === true) {
                    throw c2n(n);
                }
                return n;
            }
            return c;
        }
        return n;
    }
    let i = mf(e, n, r?.surfaceNetworkRaw === true ? {
        surfaceNetworkRaw: true,
        anchors
    } : undefined);
    if (i === Dh && r?.surfaceNetworkRaw !== true) {
        if (r?.surfaceDotDotTargets === true) {
            throw c2n(n);
        }
        return;
    }
    if (i !== undefined) {
        return i;
    }
    let o = n;
    let a = [];
    let u = r?.surfaceDotDotTargets === true;
    let l = (c)=>{
        if (a.length === 0) {
            return c;
        }
        if (u && wt.test(c)) {
            return [
                c,
                ...a
            ].join(g.sep);
        }
        return g.join(c, ...a);
    };
    while(o !== g.dirname(o)){
        let c;
        let d;
        try {
            c = e.readlinkSync(o);
        } catch (error) {
            d = v(error);
        }
        if (c !== undefined) {
            if (u && wt.test(c)) {
                return l(g.isAbsolute(c) ? c : g.dirname(o) + g.sep + c);
            }
            let p = g.isAbsolute(c) ? c : g.resolve(g.dirname(o), c);
            if (Bn(p) && !ll(p) || fa(p) || zP(p) || iw(p) || r?.surfaceNetworkRaw === true && Qa(p)) {
                if (r?.surfaceNetworkRaw === true && a.length > 0) {
                    return p + g.sep + a.join(g.sep);
                }
                return l(p);
            }
            try {
                let m = OZ(e, o);
                return l(m);
            } catch  {
                let m = o;
                let h = 0;
                let k = 64;
                while(h < k){
                    let f;
                    try {
                        f = e.readlinkSync(m);
                    } catch  {
                        break;
                    }
                    if (u && wt.test(f)) {
                        m = g.isAbsolute(f) ? f : g.dirname(m) + g.sep + f;
                        break;
                    }
                    let y = g.isAbsolute(f) ? u ? xi(f) : f : g.resolve(g.dirname(m), f);
                    if (Bn(y) && !ll(y) && $e(y, anchors) || fa(y) && fe(y, anchors) || zP(y) || iw(y) || r?.surfaceNetworkRaw === true && Qa(y)) {
                        m = y;
                        break;
                    }
                    let b;
                    try {
                        b = e.lstatSync(y);
                    } catch  {
                        m = y;
                        break;
                    }
                    if (!b.isSymbolicLink()) {
                        m = y;
                        break;
                    }
                    m = y;
                    h++;
                }
                if (h >= k && r?.surfaceNetworkRaw === true) {
                    return Dh;
                }
                if (r?.surfaceNetworkRaw === true && a.length > 0 && (Bn(m) && !ll(m) || fa(m) || zP(m) || iw(m) || Qa(m))) {
                    return m + g.sep + a.join(g.sep);
                }
                return l(m);
            }
        }
        if (d === "ENOENT") {
            a.unshift(g.basename(o));
            o = g.dirname(o);
            continue;
        }
        try {
            let p = OZ(e, o);
            if (p !== o) {
                return l(p);
            }
        } catch (error) {
            if (u) {
                throw error;
            }
        }
        return;
    }
}
function Kn(e) {
    return Bn(e) && !ll(e) || Va(e) || lA(e);
}
function YRr(e) {
    return Qn(e, false) ?? e;
}
function DCo(e) {
    return Qn(e, true);
}
function Qn(e, n) {
    if (Kn(e)) {
        return e;
    }
    let r = e;
    let s = "";
    while(true){
        if (!Qa(r)) {
            let o = Qse(r);
            if (o !== null) {
                let a = s === "" ? o : o.endsWith(g.sep) ? o + s : o + g.sep + s;
                if (Kn(a)) {
                    if (n) {
                        return a;
                    }
                    return e;
                }
                return a;
            }
            if (n) {
                try {
                    E.lstatSync(r);
                    return null;
                } catch (error) {
                    if (!z(error)) {
                        return null;
                    }
                }
            }
        }
        let i = g.dirname(r);
        if (i === r) {
            return e;
        }
        s = s === "" ? g.basename(r) : g.basename(r) + g.sep + s;
        r = i;
    }
}
function di(e) {
    return qn(e, "permission");
}
function mpt(e, n) {
    let r = ie();
    return Si(er(e, "permission"), n, async (s)=>{
        switch(s.kind){
            case "lstat":
                return r.lstat(s.path);
            case "opendirNofollow":
                await r.openDirNoFollow(s.path);
                return "ok";
            case "readlink":
                return r.readlink(s.path);
            case "realpath":
                if (r === Vy) {
                    return On(await nr(s.path));
                }
                return r.realpath(s.path);
        }
    }, {
        unresolved: true,
        requested: e,
        spellings: [
            e
        ],
        stoppedAt: e,
        leafIsSymlink: false,
        reason: "cut-short"
    });
}
function i6(e) {
    let n = qn(e, "screen");
    return {
        paths: n.spellings,
        vetted: !n.unresolved
    };
}
function qn(e, n) {
    let r = ie();
    return Vn(er(e, n), (s)=>{
        switch(s.kind){
            case "lstat":
                return r.lstatSync(s.path);
            case "opendirNofollow":
                r.openDirNoFollowSync(s.path);
                return "ok";
            case "readlink":
                return r.readlinkSync(s.path);
            case "realpath":
                return r.realpathSync(s.path);
        }
    });
}
function* er(e, n) {
    let requested = e;
    if (requested === "~") {
        requested = homedir().normalize("NFC");
    } else if (requested.startsWith("~/")) {
        requested = g.join(homedir().normalize("NFC"), requested.slice(2));
    }
    let s = new Set([
        requested
    ]);
    let i = (landing, leafIsSymlink = false)=>({
            unresolved: false,
            requested,
            spellings: Array.from(s),
            landing,
            leafIsSymlink
        });
    if (Bn(requested) && !ll(requested) || fa(requested) || zP(requested)) {
        return i(requested);
    }
    let o = ie();
    let a = uwe(o);
    let u;
    let l;
    let leafIsSymlink = false;
    let d = false;
    let p = false;
    let m = false;
    let h = [];
    let k = new Set;
    let f = (composed)=>{
        let L = g.resolve(composed);
        if (!k.has(L)) {
            k.add(L);
            h.push(composed);
        }
    };
    let stoppedAt = requested;
    let b;
    let R = function*(A) {
        let L;
        while(true){
            let B = A.next(L);
            if (B.done) {
                return B.value;
            }
            let V = B.value;
            stoppedAt = V.path;
            if (V.kind === "readlink") {
                d = true;
            } else {
                b = undefined;
            }
            L = yield V;
            if (typeof L === "object" && "errno" in L) {
                if (V.kind === "readlink") {
                    p = true;
                } else {
                    b = L.errno;
                    m ||= V.kind === "opendirNofollow" && L.errno === "ELOOP";
                }
            }
        }
    };
    let S = yield* R(He(requested, {
        unreadableAncestry: "unverified",
        launchAncestry: a,
        ...false,
        onCollapsedLanding: (A)=>{
            u = A;
        },
        onOutcome: (A)=>{
            l = A;
        },
        onHop: ({ composed, leaf, text })=>{
            if (leaf) {
                s.add(composed);
                leafIsSymlink = true;
            }
            if (n === "screen" && At(text)) {
                f(composed);
            }
        }
    }));
    let F = n === "permission" && !d && (b === "ENAMETOOLONG" || b === "EACCES" || b === "EPERM");
    let I = ()=>{
        let A = On(requested);
        s.add(A);
        return i(A);
    };
    let w = ()=>{
        if (F) {
            return I();
        }
        return {
            unresolved: true,
            requested,
            spellings: Array.from(s),
            stoppedAt,
            leafIsSymlink,
            reason: d || m ? "past-a-link" : "unexamined"
        };
    };
    let ee = 8;
    let P = function*() {
        for(let A = 0; A < h.length; A++){
            if (A >= ee) {
                return false;
            }
            let L = h[A];
            if (Bn(L) && !ll(L) || fa(L) || zP(L)) {
                s.add(L);
                continue;
            }
            let B = yield* R(He(L, {
                unreadableAncestry: "unverified",
                launchAncestry: a,
                onHop: ({ composed, text })=>{
                    if (At(text)) {
                        f(composed);
                    }
                }
            }));
            if (B === Dh || p) {
                return false;
            }
            if (B !== undefined) {
                s.add(B);
            }
        }
        return true;
    };
    if (S === Dh || S === w8e) {
        return w();
    }
    if (S !== undefined) {
        if (n === "screen" && !(yield* P())) {
            return w();
        }
        if (u !== undefined) {
            s.add(u);
        }
        s.delete(S);
        s.add(S);
        return i(S, leafIsSymlink);
    }
    if (l === undefined) {
        if (n === "screen" && !p) {
            if (yield* P()) {
                return I();
            }
            return w();
        }
        return w();
    }
    if (l.kind === "absent" && (n === "screen" ? l.remaining.some((A)=>Qa(A)) : d && l.remaining.some((A)=>FN(A)))) {
        return w();
    }
    let O = l.kind === "absent" ? l.at : l.path;
    let H = l.kind === "absent" ? l.remaining.join(g.sep) : "";
    let G = On(H === "" ? O : g.join(O, H));
    if (d || O !== g.parse(O).root) {
        s.add(G);
    }
    let T = ki((yield {
        kind: "realpath",
        path: O
    }), O, H);
    if (T !== undefined && T !== G) {
        s.delete(T);
        s.add(T);
    }
    if (n === "screen" && !(yield* P())) {
        return w();
    }
    return i(G, leafIsSymlink);
}
function ki(e, n, r) {
    if (typeof e !== "string" || e === n) {
        return;
    }
    if (r === "") {
        return e;
    }
    return g.join(e, r);
}
function gpt(e) {
    return {
        unresolved: false,
        requested: e,
        spellings: [
            e
        ],
        landing: e,
        leafIsSymlink: false
    };
}
function _o(e) {
    return XRr(di(e));
}
function XRr(e) {
    if (!e.unresolved) {
        return e.spellings;
    }
    let { resolvedPath, isCanonical, isSymlink } = yo(ie(), e.requested);
    if ((isCanonical || isSymlink) && !e.spellings.includes(resolvedPath)) {
        return [
            ...e.spellings,
            resolvedPath
        ];
    }
    return e.spellings;
}
var Vy = {
    cwd () {
        return process.cwd();
    },
    existsSync (e) {
        using n = sh`fs.existsSync(${e})`;
        return E.existsSync(e);
    },
    async stat (e) {
        return stat(e);
    },
    async lstat (e) {
        return lstat(e);
    },
    async openDirNoFollow (e) {
        await (await open(e, E.constants.O_DIRECTORY | E.constants.O_NOFOLLOW)).close();
    },
    openDirNoFollowSync (e) {
        let n = E.openSync(e, E.constants.O_DIRECTORY | E.constants.O_NOFOLLOW);
        E.closeSync(n);
    },
    async lstatBigint (e) {
        return lstat(e, {
            bigint: true
        });
    },
    async statBigint (e) {
        return stat(e, {
            bigint: true
        });
    },
    async readdir (e) {
        return readdir(e, {
            withFileTypes: true
        });
    },
    async unlink (e) {
        return unlink(e);
    },
    async rmdir (e) {
        return rmdir(e);
    },
    async rm (e, n) {
        return rm(e, n);
    },
    async mkdir (e, n) {
        try {
            await mkdir(e, {
                recursive: true,
                ...n
            });
        } catch (error) {
            if (v(error) !== "EEXIST") {
                throw error;
            }
        }
    },
    async readFile (e, n) {
        return readFile(e, {
            encoding: n.encoding
        });
    },
    async rename (e, n) {
        return rename(e, n);
    },
    async realpath (e) {
        return On(await realpath_1(e));
    },
    async readlink (e) {
        return readlink(e);
    },
    async copyFile (e, n) {
        return copyFile(e, n);
    },
    async appendFile (e, n, r) {
        if (r?.mode !== undefined) {
            try {
                let s = await open(e, "ax", r.mode);
                try {
                    await s.appendFile(n);
                } finally{
                    await s.close();
                }
                return;
            } catch (error) {
                if (v(error) !== "EEXIST") {
                    throw error;
                }
            }
        }
        return appendFile(e, n);
    },
    async symlink (e, n, r) {
        return symlink(e, n, r);
    },
    async link (e, n) {
        return link(e, n);
    },
    async chmod (e, n) {
        return chmod(e, n);
    },
    statSync (e) {
        using n = sh`fs.statSync(${e})`;
        return E.statSync(e);
    },
    lstatSync (e) {
        using n = sh`fs.lstatSync(${e})`;
        return E.lstatSync(e);
    },
    readFileSync (e, n) {
        using r = sh`fs.readFileSync(${e})`;
        return E.readFileSync(e, {
            encoding: n.encoding
        });
    },
    readSync (e, n) {
        using r = sh`fs.readSync(${e}, ${n.length} bytes)`;
        let s;
        try {
            s = E.openSync(e, "r");
            let i = [];
            let o = 0;
            while(o < n.length){
                let u = Buffer.allocUnsafe(Math.min(65536, n.length - o));
                let l = E.readSync(s, u, 0, u.length, o);
                if (l === 0) {
                    break;
                }
                i.push(u.subarray(0, l));
                o += l;
            }
            return {
                buffer: Buffer.concat(i, o),
                bytesRead: o
            };
        } finally{
            if (s !== undefined) {
                E.closeSync(s);
            }
        }
    },
    appendFileSync (e, n, r) {
        using s = sh`fs.appendFileSync(${e}, ${n.length} chars)`;
        if (r?.mode !== undefined) {
            try {
                let i = E.openSync(e, "ax", r.mode);
                try {
                    E.appendFileSync(i, n);
                } finally{
                    E.closeSync(i);
                }
                return;
            } catch (error) {
                if (v(error) !== "EEXIST") {
                    throw error;
                }
            }
        }
        E.appendFileSync(e, n);
    },
    unlinkSync (e) {
        using n = sh`fs.unlinkSync(${e})`;
        E.unlinkSync(e);
    },
    renameSync (e, n) {
        using r = sh`fs.renameSync(${e} ${pi} ${n})`;
        E.renameSync(e, n);
    },
    readlinkSync (e) {
        using n = sh`fs.readlinkSync(${e})`;
        return E.readlinkSync(e);
    },
    realpathSync (e) {
        using n = sh`fs.realpathSync(${e})`;
        return On(E.realpathSync(e));
    },
    mkdirSync (e, n) {
        using r = sh`fs.mkdirSync(${e})`;
        let s = {
            recursive: true
        };
        if (n?.mode !== undefined) {
            s.mode = n.mode;
        }
        try {
            E.mkdirSync(e, s);
        } catch (error) {
            if (v(error) !== "EEXIST") {
                throw error;
            }
        }
    },
    readdirSync (e) {
        using n = sh`fs.readdirSync(${e})`;
        return E.readdirSync(e, {
            withFileTypes: true
        });
    },
    rmSync (e, n) {
        using r = sh`fs.rmSync(${e})`;
        E.rmSync(e, n);
    },
    createWriteStream (e) {
        return E.createWriteStream(e);
    },
    async readFileBytes (e, n) {
        if (n === undefined) {
            return readFile(e);
        }
        let r = await open(e, h9());
        try {
            if (!(await r.stat()).isFile()) {
                return Buffer.alloc(0);
            }
            return await R0(r, n, "file");
        } finally{
            await r.close();
        }
    },
    async readFileFdGated (e, n) {
        try {
            let r = hi();
            if (r === 0) {
                if (!(await lstat(e)).isFile()) {
                    return null;
                }
            }
            let s = await open(e, E.constants.O_RDONLY | r);
            try {
                let i = await s.stat();
                if (!i.isFile() || i.size > n) {
                    return null;
                }
                let o = Number(i.size);
                let a = Buffer.allocUnsafe(o);
                let u = 0;
                while(u < o){
                    let { bytesRead } = await s.read(a, u, o - u, u);
                    if (bytesRead === 0) {
                        break;
                    }
                    u += bytesRead;
                }
                return {
                    content: (u < o ? a.subarray(0, u) : a).toString("utf8"),
                    stats: i
                };
            } finally{
                await s.close();
            }
        } catch  {
            return null;
        }
    }
};
function ie() {
    return Vy;
}
function Gm(e) {
    process.chdir(e);
    try {
        process.cwd();
    } catch  {}
}
async function mBe(e, n, r) {
    await using s = typeof e === "string" ? await open(e, "r") : null;
    let i = typeof e === "string" ? s : e;
    let size = (await i.stat()).size;
    if (size <= n) {
        return null;
    }
    let a = Math.min(size - n, r);
    let u = Buffer.allocUnsafe(a);
    let l = 0;
    while(l < a){
        let { bytesRead } = await i.read(u, l, a - l, n + l);
        if (bytesRead === 0) {
            break;
        }
        l += bytesRead;
    }
    return {
        content: u.toString("utf8", 0, l),
        bytesRead: l,
        bytesTotal: size
    };
}
async function R0(e, n, r) {
    let s = r !== undefined ? r === "file" : (await e.stat()).isFile();
    let i = [];
    let o = 0;
    while(o < n){
        let a = Buffer.allocUnsafe(Math.min(65536, n - o));
        let { bytesRead } = await e.read(a, 0, a.length, s ? o : null);
        if (bytesRead === 0) {
            break;
        }
        i.push(a.subarray(0, bytesRead));
        o += bytesRead;
    }
    return Buffer.concat(i, o);
}
async function oA(e, n) {
    await using r = typeof e === "string" ? await open(e, "r") : null;
    let s = typeof e === "string" ? r : e;
    let size = (await s.stat()).size;
    if (size === 0) {
        return {
            content: "",
            bytesRead: 0,
            bytesTotal: 0
        };
    }
    let o = Math.max(0, size - n);
    let a = size - o;
    let u = Buffer.allocUnsafe(a);
    let l = 0;
    while(l < a){
        let { bytesRead } = await s.read(u, l, a - l, o + l);
        if (bytesRead === 0) {
            break;
        }
        l += bytesRead;
    }
    return {
        content: u.toString("utf8", 0, l),
        bytesRead: l,
        bytesTotal: size
    };
}
async function* LCo(e, n = 65536) {
    let r = await open(e, "r");
    let s = Buffer.alloc(n);
    let i = 0;
    let o = [];
    let a = 0;
    try {
        while(true){
            let { bytesRead } = await r.read(s, 0, n, i);
            if (bytesRead === 0) {
                break;
            }
            i += bytesRead;
            let l = s.subarray(0, bytesRead);
            let c = 0;
            while(c < bytesRead){
                let d = l.indexOf(10, c);
                if (d === -1) {
                    o.push(Buffer.from(l.subarray(c)));
                    a += bytesRead - c;
                    break;
                }
                if (a === 0) {
                    yield l.subarray(c, d);
                } else {
                    yield Buffer.concat([
                        ...o,
                        l.subarray(c, d)
                    ], a + (d - c));
                    o = [];
                    a = 0;
                }
                c = d + 1;
            }
        }
    } finally{
        await r.close();
    }
    if (a > 0) {
        yield o.length === 1 ? o[0] : Buffer.concat(o, a);
    }
}
async function* v8e(e) {
    let r = await open(e, "r");
    try {
        let i = (await r.stat()).size;
        let o = Buffer.alloc(0);
        let a = Buffer.alloc(4096);
        while(i > 0){
            let u = Math.min(4096, i);
            i -= u;
            await r.read(a, 0, u, i);
            let l = Buffer.concat([
                a.subarray(0, u),
                o
            ]);
            let c = l.indexOf(10);
            if (c === -1) {
                o = l;
                continue;
            }
            o = Buffer.from(l.subarray(0, c));
            let d = l.toString("utf8", c + 1).split(`
`);
            for(let p = d.length - 1; p >= 0; p--){
                let m = d[p];
                if (m) {
                    yield m;
                }
            }
        }
        if (o.length > 0) {
            yield o.toString("utf8");
        }
    } finally{
        await r.close();
    }
}
export { oh, mp, YOs, ff, ICo, XOs, JOs, IZ, St, upt, TS, $P, i2n, Hg, sh, _, ON, Oi, a2n, X, $o, wd, S8e, h9, PDt, Dh, w8e, l2n, OCo, c2n, DO, ppt, MCo, kPe, dwe, qRr, mf, MN, yo, uwe, OZ, fpt, kq, Z1, KRr, HCo, Hpe, HN, YRr, DCo, di, mpt, i6, gpt, _o, XRr, Vy, ie, Gm, mBe, R0, oA, LCo, v8e, NCo, MZ, QOs, y9, d2n, HZ, E8e, ZOs, $Co, sA, Hd, ej, su, JRr, un, hpt, DN, qy, TPe, k8e, eMs, gBe, LO, tMs, gf, Dg, FCo, kon, NO, Hc, T8e, Rn, OH, Hse, ei, nMs, A8e, vC, Ton, u2n, DZ, ypt, a6, nU, APe, Dse, IDt, UCo, rMs, BCo, oMs, jCo, p2n, ps, _9, WCo, f2n, hBe, QRr, CPe, b9, zCo, Aon, tT, Con, GCo, ZRr, m2n, Ky, hf, C8e, Dpe, S9, Ron, sMs, iMs, iA, Tq, xon, w9, l6, VCo, qCo, KCo, RPe, YCo, pwe, t, Aq, XCo, LZ };
