import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { lstatSync, readFileSync, readlinkSync, realpathSync, statSync } from "fs";
import { readlink } from "fs/promises";
import { homedir } from "os";
import { basename, dirname, isAbsolute, join, parse, relative, resolve, sep } from "path";
import * as q from "path";
const Jt = typeof global === "object" && global && global.Object === Object && global;
const OPr = Jt;
const Kt = typeof self === "object" && self && self.Object === Object && self;
const Zt = OPr || Kt || Function("return this")();
const dU = Zt;
const dU_Symbol = dU.Symbol;
const cG = dU_Symbol;
const { hasOwnProperty, toString } = Object.prototype;
const E = cG ? cG.toStringTag : undefined;
function Qt(t) {
    const e = hasOwnProperty.call(t, E);
    const n = t[E];
    try {
        t[E] = undefined;
        var r = true;
    } catch (i) {}
    const o = toString.call(t);
    if (r) {
        if (e) {
            t[E] = n;
        } else {
            delete t[E];
        }
    }
    return o;
}
const st = Qt;
const toString_1 = Object.prototype.toString;
function ne(t) {
    return toString_1.call(t);
}
const at = ne;
const re = "[object Null]";
const oe = "[object Undefined]";
const ut = cG ? cG.toStringTag : undefined;
function ie(t) {
    if (t == null) {
        if (t === undefined) {
            return oe;
        }
        return re;
    }
    if (ut && ut in Object(t)) {
        return st(t);
    }
    return at(t);
}
const Yse = ie;
function se(t) {
    const e = typeof t;
    return t != null && (e == "object" || e == "function");
}
const oT = se;
const ae = "[object AsyncFunction]";
const ue = "[object Function]";
const le = "[object GeneratorFunction]";
const ce = "[object Proxy]";
function fe(t) {
    if (!oT(t)) {
        return false;
    }
    const e = Yse(t);
    return e == ue || e == le || e == ae || e == ce;
}
const g0t = fe;
const pe = dU["__core-js_shared__"];
const M = pe;
const lt = (()=>{
    const t = /[^.]+$/.exec(M && M.keys && M.keys.IE_PROTO || "");
    if (t) {
        return `Symbol(src)_1.${t}`;
    }
    return "";
})();
function de(t) {
    return !!lt && lt in t;
}
const ct = de;
const toString_2 = Function.prototype.toString;
function me(t) {
    if (t != null) {
        try {
            return toString_2.call(t);
        } catch (e) {}
        try {
            return `${t}`;
        } catch (e) {}
    }
    return "";
}
const e9e = me;
const xe = /[\\^$.*+?()[\]{}|]/g;
const we = /^\[object .+?Constructor\]$/;
const toString_3 = Function.prototype.toString;
const hasOwnProperty_1 = Object.prototype.hasOwnProperty;
const ve = RegExp(`^${toString_3.call(hasOwnProperty_1).replace(xe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}\$`);
function Te(t) {
    if (!oT(t) || ct(t)) {
        return false;
    }
    const e = g0t(t) ? ve : we;
    return e.test(e9e(t));
}
const ft = Te;
function Ae(t, e) {
    return t?.[e];
}
const pt = Ae;
function Oe(t, e) {
    const n = pt(t, e);
    if (ft(n)) {
        return n;
    }
}
const Xse = Oe;
const Ce = Xse(Object, "create");
const m = Ce;
function Ee() {
    this.__data__ = m ? m(null) : {};
    this.size = 0;
}
const dt = Ee;
function Ne(t) {
    const e = this.has(t) && delete this.__data__[t];
    this.size -= e ? 1 : 0;
    return e;
}
const gt = Ne;
const Pe = "__lodash_hash_undefined__";
const hasOwnProperty_2 = Object.prototype.hasOwnProperty;
function Le(t) {
    const __data__ = this.__data__;
    if (m) {
        const n = __data__[t];
        if (n === Pe) {
            return undefined;
        }
        return n;
    }
    if (hasOwnProperty_2.call(__data__, t)) {
        return __data__[t];
    }
}
const ht = Le;
const hasOwnProperty_3 = Object.prototype.hasOwnProperty;
function ke(t) {
    const __data__ = this.__data__;
    if (m) {
        return __data__[t] !== undefined;
    }
    return hasOwnProperty_3.call(__data__, t);
}
const mt = ke;
const $e = "__lodash_hash_undefined__";
function je(t, e) {
    const __data__ = this.__data__;
    this.size += this.has(t) ? 0 : 1;
    __data__[t] = m && e === undefined ? $e : e;
    return this;
}
const xt = je;
function v(t) {
    let e = -1;
    const n = t == null ? 0 : t.length;
    this.clear();
    while(++e < n){
        const r = t[e];
        this.set(r[0], r[1]);
    }
}
v.prototype.clear = dt;
v.prototype.delete = gt;
v.prototype.get = ht;
v.prototype.has = mt;
v.prototype.set = xt;
const B = v;
function He() {
    this.__data__ = [];
    this.size = 0;
}
const wt = He;
function We(t, e) {
    return t === e || t !== t && e !== e;
}
const Awe = We;
function Ue(t, e) {
    let t_length = t.length;
    while(t_length--){
        if (Awe(t[t_length][0], e)) {
            return t_length;
        }
    }
    return -1;
}
const b = Ue;
const splice = Array.prototype.splice;
function Ge(t) {
    const __data__ = this.__data__;
    const n = b(__data__, t);
    if (n < 0) {
        return false;
    }
    const r = __data__.length - 1;
    if (n == r) {
        __data__.pop();
    } else {
        splice.call(__data__, n, 1);
    }
    --this.size;
    return true;
}
const bt = Ge;
function Ve(t) {
    const __data__ = this.__data__;
    const n = b(__data__, t);
    if (n < 0) {
        return undefined;
    }
    return __data__[n][1];
}
const _t = Ve;
function Je(t) {
    return b(this.__data__, t) > -1;
}
const St = Je;
function Ke(t, e) {
    const __data__ = this.__data__;
    const r = b(__data__, t);
    if (r < 0) {
        ++this.size;
        __data__.push([
            t,
            e
        ]);
    } else {
        __data__[r][1] = e;
    }
    return this;
}
const yt = Ke;
function T(t) {
    let e = -1;
    const n = t == null ? 0 : t.length;
    this.clear();
    while(++e < n){
        const r = t[e];
        this.set(r[0], r[1]);
    }
}
T.prototype.clear = wt;
T.prototype.delete = bt;
T.prototype.get = _t;
T.prototype.has = St;
T.prototype.set = yt;
const zpt = T;
const Ze = Xse(dU, "Map");
const Gpt = Ze;
function Ye() {
    this.size = 0;
    this.__data__ = {
        hash: new B,
        map: new (Gpt || zpt),
        string: new B
    };
}
const vt = Ye;
function Xe(t) {
    const e = typeof t;
    if (e == "string" || e == "number" || e == "symbol" || e == "boolean") {
        return t !== "__proto__";
    }
    return t === null;
}
const Tt = Xe;
function qe({ __data__ }, e) {
    if (Tt(e)) {
        return __data__[typeof e === "string" ? "string" : "hash"];
    }
    return __data__.map;
}
const _ = qe;
function Qe(t) {
    const e = _(this, t).delete(t);
    this.size -= e ? 1 : 0;
    return e;
}
const At = Qe;
function tn(t) {
    return _(this, t).get(t);
}
const Ot = tn;
function en(t) {
    return _(this, t).has(t);
}
const Ct = en;
function nn(t, e) {
    const n = _(this, t);
    const n_size = n.size;
    n.set(t, e);
    this.size += n.size == n_size ? 0 : 1;
    return this;
}
const Et = nn;
function A(t) {
    let e = -1;
    const n = t == null ? 0 : t.length;
    this.clear();
    while(++e < n){
        const r = t[e];
        this.set(r[0], r[1]);
    }
}
A.prototype.clear = vt;
A.prototype.delete = At;
A.prototype.get = Ot;
A.prototype.has = Ct;
A.prototype.set = Et;
const h0t = A;
const rn = "Expected a function";
function G(t, e) {
    if (typeof t !== "function" || e != null && typeof e !== "function") {
        throw TypeError(rn);
    }
    const n = function() {
        const r = arguments;
        const o = e ? e.apply(this, r) : r[0];
        const n_cache = n.cache;
        if (n_cache.has(o)) {
            return n_cache.get(o);
        }
        const s = t.apply(this, r);
        n.cache = n_cache.set(o, s) || n_cache;
        return s;
    };
    n.cache = new (G.Cache || h0t);
    return n;
}
G.Cache = h0t;
const po = G;
function ze(t, e) {
    return t;
}
const WPe = /[.\s]+$/;
const cOo = /\.(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i;
const X2n = /~\d/;
function Xv(t) {
    let e = t.indexOf(".");
    let n = (e === -1 ? t : t.slice(0, e)).replace(/ +$/, "");
    return /^(con|prn|aux|nul|com[0-9\u00B9\u00B2\u00B3]|lpt[0-9\u00B9\u00B2\u00B3])$/i.test(n);
}
function J2n(t) {
    return WPe.test(t) || cOo.test(t);
}
function Qsn(t) {
    return /^(?=[^.]{3,8}(?:\.|$))[^.]{1,6}~[0-9]{1,6}(?:\.[^.]{1,3})?$/.test(t);
}
function Q2n(t) {
    return Qsn(t.replace(/\u0307/g, ""));
}
function t9e(t) {
    return Array.from(t, (e)=>{
        let n = e.toUpperCase();
        if ([
            ...n
        ].length === 1) {
            return n;
        }
        return e;
    }).join("").toLowerCase();
}
function Vpt(t) {
    let e = t9e(t);
    return e === "users" || e === "documents and settings" || e === "dokumente und einstellungen" || /^do[ck]ume~[0-9]+$/.test(e);
}
function on(t) {
    if (t.length < 3 || !Vpt(t[0])) {
        return;
    }
    let e = sn.get(t[2]) ?? an.find(([n])=>n.test(t[2]))?.[1];
    if (e === undefined) {
        return undefined;
    }
    return [
        ...t.slice(0, 2),
        ...e,
        ...t.slice(3)
    ];
}
function Z2n(t) {
    return t9e(t).split("/").filter(Boolean);
}
function MPr(t) {
    let e = Z2n(t);
    let n = on(e);
    if (n === undefined) {
        return [
            e
        ];
    }
    return [
        e,
        n
    ];
}
function eVn(t, e) {
    let n = MPr(e);
    return MPr(t).flatMap((r)=>n.flatMap((o)=>{
            if (r.length <= o.length && r.every((i, s)=>un(s, i, o[s]))) {
                return [
                    o.slice(r.length)
                ];
            }
            return [];
        }));
}
var sn = new Map([
    [
        "my documents",
        [
            "documents"
        ]
    ],
    [
        "application data",
        [
            "appdata",
            "roaming"
        ]
    ],
    [
        "local settings",
        [
            "appdata",
            "local"
        ]
    ]
]);
var an = [
    [
        /^mydocu~[0-9]+$/,
        [
            "documents"
        ]
    ],
    [
        /^applic~[0-9]+$/,
        [
            "appdata",
            "roaming"
        ]
    ],
    [
        /^locals~[0-9]+$/,
        [
            "appdata",
            "local"
        ]
    ]
];
function un(t, e, n) {
    return dOo(e, n) || t === 0 && Vpt(e) && Vpt(n);
}
function dOo(t, e) {
    return t === e || Q2n(t) || Q2n(e);
}
function qpt(t) {
    let e = /^[\\/]{2}(?:[?.][\\/]([A-Za-z]):|(?:localhost|127\.0\.0\.1)[\\/]([A-Za-z])\$)(?=$|[\\/])/i.exec(t);
    if (e === null) {
        return t;
    }
    let n = t.slice(e[0].length);
    return `${e[1] ?? e[2]}:${n === "" ? "\\" : n}`;
}
function On(t) {
    return t;
}
function Bn(t) {
    return /^[\\/]{2}/.test(t) || BN(t);
}
function my(t) {
    return /(^|[\\/])\.\.([\\/]|$)/.test(t);
}
function TC(t) {
    return t.includes("\\");
}
function gy(t) {
    return /^[\\/]\?\?[\\/]/.test(t);
}
function WO(t) {
    if (/^[\\/]{2}[?.][\\/](?!unc[\\/])/i.test(t)) {
        return null;
    }
    return t.match(/^[\\/]{2}(?:[?.][\\/]unc[\\/])?([^\\/]+)/i)?.[1]?.replace(/[A-Z]/g, (e)=>e.toLowerCase()) ?? null;
}
function Qa(t) {
    return /(^|[\\/])\.{1,2}[. ]*([\\/]|$)/.test(t);
}
function UBe(t) {
    return t.split(/[/\\]/).some((e)=>/^\.\. [ .]*$/.test(e));
}
function tVn(t, e = "linux") {
    if (e === "win32") {
        return /(^|[\\/])\.{1,2}([\\/]|$)/.test(t);
    }
    return /(^|\/)\.{1,2}(\/|$)/.test(t);
}
function FN(t) {
    return tVn(t);
}
function lA(t) {
    return /^[\\/]{2}[?.][\\/]/.test(t);
}
function iw(t) {
    if (!/\/\.(?:vol|file|nofollow|resolve)(?:\/|$)/i.test(t)) {
        return false;
    }
    if (!t.startsWith("/")) {
        return false;
    }
    let e = [];
    for (let n of t.split("/")){
        if (n === "" || n === ".") {
            continue;
        }
        if (n === "..") {
            e.pop();
            continue;
        }
        e.push(n);
        if (e.length === 1 && /^\.(?:vol|file|nofollow|resolve)$/i.test(n)) {
            return true;
        }
    }
    return false;
}
function HPr(t) {
    return /^[\\/](GLOBAL\?\?|GLOBALROOT|DosDevices|Device)[\\/]/i.test(t);
}
function Jse(t, e) {
    if (!Bn(t)) {
        return false;
    }
    if (lA(t) || BN(t)) {
        return true;
    }
    if (Qa(t)) {
        return true;
    }
    let n = WO(t);
    return n === null || n !== WO(e);
}
function C(t) {
    return t.length === 2 && GR(t[0]) === "net" || t.length === 3 && GR(t[0]) === "network" && GR(t[1]) === "servers";
}
function XZ(t) {
    if (!t.startsWith("/")) {
        return null;
    }
    let e = [];
    for (let n of t.split("/")){
        if (n === "" || n === ".") {
            continue;
        }
        if (n === "..") {
            e.pop();
            continue;
        }
        e.push(n);
        if (C(e)) {
            return O(n);
        }
    }
    return null;
}
function O(t) {
    return t.replace(/[A-Z]/g, (e)=>e.toLowerCase());
}
function GR(t) {
    return t.replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "").toUpperCase().toLowerCase();
}
function nVn(t, e = "linux") {
    let n = t.split("/");
    if (n[0] !== "") {
        return t;
    }
    let r;
    let o;
    if (e === "darwin" ? C(n.slice(1, 3)) : n[1] === "net" && n.length >= 3) {
        r = "/net/";
        o = 2;
    } else if (e === "darwin" && C(n.slice(1, 4))) {
        r = "/Network/Servers/";
        o = 3;
    } else {
        return t;
    }
    let i = n[o];
    if (i === undefined || i === "") {
        return t;
    }
    let s = n.slice(o + 1);
    return r + O(i).replace(/\.$/, "") + (s.length > 0 ? `/${s.join("/")}` : "");
}
function DPr(t) {
    let e = /^([\\/]{2,})([A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*)\.(?=[\\/]|$)/.exec(t);
    if (e === null || e[2].toLowerCase() === "wsl.localhost") {
        return t;
    }
    return e[1][0].repeat(2) + e[2] + t.slice(e[1].length + e[2].length + 1);
}
function UN(t, e) {
    if (iw(t)) {
        return true;
    }
    if (fa(t)) {
        let n = XZ(t);
        if (n === null || n !== XZ(e)) {
            return true;
        }
    }
    return LPr(t, e);
}
function Gi(t, e) {
    let n = resolve(e, t);
    if (Jse(t, e) || Jse(n, e)) {
        return true;
    }
    let r = XZ(e);
    for (let o of [
        t,
        n
    ]){
        if (fa(o)) {
            let i = XZ(o);
            if (i === null || i !== r) {
                return true;
            }
        }
        if (zO(o) || Wb(o) || iw(o) || LPr(o, e)) {
            return true;
        }
    }
    return false;
}
function LPr(t, e, n = "linux", r = n === "darwin" && true) {
    if (n !== "darwin" || !NH(t, n, r)) {
        return false;
    }
    let o = tt(e, n, r).complete[0] ?? null;
    let { complete, partial } = tt(t, n, r);
    if (complete.length === 0 && partial.length === 0) {
        return true;
    }
    if (o === null) {
        return true;
    }
    return complete.some((a)=>a !== o) || partial.some((a)=>!o.startsWith(a));
}
const To = ze({
    value: undefined
}, (t)=>{
    t.value = undefined;
});
const fn = 6;
function tt(t, e, n) {
    let complete = [];
    let partial = [];
    if (!t.startsWith("/")) {
        return {
            complete,
            partial
        };
    }
    let i = [];
    for (let s of t.split("/")){
        if (s === "" || s === ".") {
            continue;
        }
        if (s === "..") {
            i.pop();
            continue;
        }
        i.push(s);
        if (i.length > fn) {
            continue;
        }
        let a = `/${i.join("/")}`;
        let u = (e === "darwin" ? uG(a) : a).split("/").filter((w)=>w !== "");
        let h = u[0]?.toLowerCase();
        if (h === "network") {
            if (u.length === 1) {
                partial.push("/network/");
            } else if (u.length === 2) {
                partial.push(`/network/${O(u[1])}/`);
            } else if (u.length === 3) {
                complete.push(`/network/${O(u[1])}/${O(u[2])}`);
            }
        } else if (n && h === "home" && u.length === 2) {
            complete.push(`/home/${u[1]}`);
        }
    }
    return {
        complete,
        partial
    };
}
function fa(t) {
    return Va(t);
}
function dG(t) {
    if (!t.startsWith("/")) {
        return false;
    }
    let e = t.split("/").filter((r)=>r !== "" && r !== ".");
    if (e.length < 1 || e.length > 3 || e.includes("..")) {
        return false;
    }
    if (C(e) && (e.length === 2 || false)) {
        return true;
    }
    let n = e[0].toLowerCase();
    return e.length <= 2 && (n === "net" || false);
}
function Za(t) {
    return Bn(t) || fa(t) || zP(t) || iw(t);
}
function Xy(t) {
    return fa(t) || zP(t) || Wb(t) || iw(t);
}
function Va(t) {
    return zPe(t) !== null;
}
const Ht = 1024;
const Wt = 4096;
const I = new Map;
const k = new Map;
function zPe(t) {
    if (!t.startsWith("/")) {
        return null;
    }
    if (t.length > Wt) {
        return Nt(t);
    }
    let e = I.get(t);
    if (e === undefined) {
        e = Nt(t);
        if (I.size >= Ht) {
            I.clear();
        }
        I.set(t, e);
    }
    return e;
}
function Nt(t) {
    let e = [];
    for (let n of t.split("/")){
        if (n === "" || n === ".") {
            continue;
        }
        if (n === "..") {
            e.pop();
            continue;
        }
        e.push(n);
        if (C(e)) {
            return `/${e.join("/")}`;
        }
    }
    return null;
}
function TMs(t) {
    let e = zPe(t);
    if (e === null) {
        return null;
    }
    return e.slice(e.lastIndexOf("/") + 1);
}
const pn = /^([\\/]{2}(?:wsl\.localhost|wsl\$)[\\/]+[^\\/]+)((?:[\\/].*)?)$/i;
function y0t(t) {
    let e = pn.exec(t);
    if (e === null) {
        return undefined;
    }
    return {
        prefix: e[1],
        rest: e[2] ?? ""
    };
}
function Wb(t) {
    if (!t.startsWith("/")) {
        return false;
    }
    let e = [];
    for (let n of t.split("/")){
        if (n === "" || n === ".") {
            continue;
        }
        if (n === "..") {
            e.pop();
            continue;
        }
        e.push(n);
    }
    return e.length === 1 && e[0].toLowerCase() === "net";
}
function zO(t) {
    if (!t.startsWith("/")) {
        return false;
    }
    if (t.length > Wt) {
        return Pt(t);
    }
    let e = k.get(t);
    if (e === undefined) {
        e = Pt(t);
        if (k.size >= Ht) {
            k.clear();
        }
        k.set(t, e);
    }
    return e;
}
function Pt(t) {
    let e = [];
    for (let n of t.split("/")){
        if (n === "" || n === ".") {
            continue;
        }
        if (n === "..") {
            e.pop();
            continue;
        }
        e.push(n);
        if (e.length === 1 && e[0].toLowerCase() === "network") {
            return true;
        }
    }
    return false;
}
function zP(t) {
    return false;
}
function _m(t) {
    return Va(t) || Wb(t) || zO(t) || iw(t);
}
function Kpt(t, e, n = null) {
    let r = JZ(t);
    let o = JZ(e);
    if (!r && !o) {
        return false;
    }
    if (r && !o) {
        return true;
    }
    if (!r && o) {
        let u = n === null || Bn(n) ? null : XZ(n);
        let h = Bn(e) ? null : V(e);
        if (u !== null && h !== null && u === h) {
            return false;
        }
        if (n !== null && Bn(n) && Bn(e) && !Jse(e, n)) {
            return false;
        }
        return true;
    }
    let i = Bn(t) ? null : V(t);
    let s = Bn(e) ? null : V(e);
    if (i !== null || s !== null) {
        return i === null || s === null || i !== s;
    }
    let a = WO(t);
    let l = WO(e);
    if (a !== null || l !== null) {
        return a === null || l === null || a !== l;
    }
    return t !== e;
}
function V(t) {
    if (zO(t)) {
        return null;
    }
    return XZ(t);
}
function NH(t, e = "linux", n = e === "darwin" && true) {
    if (e !== "darwin") {
        return false;
    }
    if (zO(t) || iw(t)) {
        return true;
    }
    if (!t.startsWith("/")) {
        return false;
    }
    let { complete, partial } = tt(t, e, n);
    if (partial.length > 0) {
        return true;
    }
    if (complete.some((s)=>s.startsWith("/network/"))) {
        return true;
    }
    let i = complete.filter((s)=>s.startsWith("/home/"));
    if (i.length > 0) {
        let s = dn();
        if (i.some((a)=>a !== s)) {
            return true;
        }
    }
    return false;
}
function dn() {
    let t;
    try {
        t = homedir();
    } catch  {
        return null;
    }
    let e = /^\/home\/([^/]+)/.exec(uG(t));
    if (e) {
        return `/home/${e[1]}`;
    }
    return null;
}
function JZ(t) {
    return Zsn(t) || zO(t);
}
function Zsn(t) {
    return ks(t) || Va(t) || Wb(t) || lA(t) || BN(t) || HPr(t) || iw(t);
}
function ein(t) {
    let e = t.split("/").filter(Boolean);
    if (e.length === 0) {
        return t;
    }
    let n = e.at(-1);
    return `/${[
        ...e.slice(0, -1).map(GR),
        O(n)
    ].join("/")}`;
}
function n9e(t) {
    if (!t.startsWith("/")) {
        return [];
    }
    let e = [];
    let n = [];
    for (let r of t.split("/")){
        if (r === "" || r === ".") {
            continue;
        }
        if (r === "..") {
            n.pop();
            continue;
        }
        n.push(r);
        if (C(n)) {
            e.push(ein(`/${n.join("/")}`));
        }
    }
    return e;
}
function ll(t) {
    let e = /^[\\/]{2}wsl(?:\$|\.localhost)[\\/]([^\\/]*)/i.exec(t);
    return e !== null && !/^\.{0,2}[. ]*$/.test(e[1] ?? "");
}
function ks(t) {
    return Bn(t) && !ll(t);
}
function Ld(t) {
    if (Ut(t)) {
        return homedir() + t.slice(1);
    }
    return t;
}
function tin(t, e) {
    if (Ut(t)) {
        return e + t.slice(1);
    }
    return t;
}
function Ut(t) {
    return t === "~" || t.startsWith("~/") || false;
}
function GO(t) {
    for(let e = 0; e < t.length; e++){
        let n = t[e];
        if (n === "*" || n === "?") {
            return e;
        }
        if (n === "[" && t.indexOf("]", e + 1) !== -1) {
            return e;
        }
    }
    return -1;
}
function sT(t) {
    if (t.startsWith("\\\\?\\UNC\\")) {
        return `\\\\${t.slice(8)}`;
    }
    if (t.startsWith("\\\\?\\") && t.length >= 7 && t[5] === ":") {
        return t.slice(4);
    }
    return t;
}
function AC(t) {
    if ($H(t)) {
        let e = sT(t).replace(/^([\\/])[\\/]+/, "$1");
        for(let n = 0; n < gn && BN(e); n++){
            e = Vt(e).replace(/^([\\/])[\\/]+/, "$1");
            let r = 1;
            while(e[r] === "?" && e[r + 1] === "?" && (r + 2 === e.length || Rt(e[r + 2]))){
                r += 3;
                while(Rt(e[r])){
                    r++;
                }
            }
            e = e.slice(0, 1) + e.slice(r);
        }
        if (BN(e)) {
            return e.slice(0, 1);
        }
        return e;
    }
    return t;
}
var gn = 4;
function Rt(t) {
    return t === "\\" || t === "/";
}
function $H(t) {
    if (/^\\\\\?\\volume\{/i.test(t)) {
        return Dt(t);
    }
    if (BN(t)) {
        return true;
    }
    let e = sT(t);
    if (e !== t && Dt(e)) {
        return true;
    }
    return Bn(e) && !ll(e);
}
function Dt(t) {
    return Qa(t) || t.includes("/");
}
function Mp(t) {
    try {
        return sT(realpathSync.native(t));
    } catch  {
        return null;
    }
}
function AMs(t) {
    try {
        return realpathSync(t);
    } catch  {
        return null;
    }
}
const hn = 4;
const P = 50;
const NPr = P * (hn - 1);
function Qse(t) {
    return FPr(t).real ?? null;
}
function rVn(t, e) {
    let n = resolve(e).toLowerCase();
    let r = dirname(resolve(t)).toLowerCase();
    if (r === n || Mt(r, n) || It(r, n, "lexical")) {
        return true;
    }
    let o = Qse(e)?.toLowerCase();
    if (o == null) {
        return false;
    }
    let i = Qse(dirname(resolve(t)))?.toLowerCase();
    if (i == null) {
        return true;
    }
    return i === o || Mt(i, o) || It(i, o, "canonical");
}
const mn = new Set([
    "node_modules",
    ".venv",
    "venv",
    "env",
    ".env",
    "virtualenv",
    ".tox",
    ".nox",
    ".direnv",
    "__pypackages__"
]);
function Mt(t, e) {
    if (!t.startsWith(H(e) + sep)) {
        return false;
    }
    return t.split(sep).some((n)=>mn.has(n));
}
function H(t) {
    if (t.endsWith(sep)) {
        return t.slice(0, -1);
    }
    return t;
}
let J;
function It(t, e, n) {
    let r = homedir();
    let o = (process.env.LOCALAPPDATA ?? "").trim();
    if (n === "lexical") {
        return K(kt(r, o, (l)=>resolve(l).toLowerCase()), t, e);
    }
    let i = `${r} ${o}`;
    if (J?.key === i) {
        return K(J.aliasDirs, t, e);
    }
    let s = true;
    let aliasDirs = kt(r, o, (l)=>{
        if (!xn(l)) {
            return resolve(l).toLowerCase();
        }
        let u = Qse(l)?.toLowerCase();
        if (u == null) {
            s = false;
            return resolve(l).toLowerCase();
        }
        return u;
    });
    if (s) {
        J = {
            key: i,
            aliasDirs
        };
    }
    return K(aliasDirs, t, e);
}
function kt(t, e, n) {
    let r = [];
    if (t) {
        r.push(H(n(t)) + sep + [
            "appdata",
            "local",
            "microsoft",
            "windowsapps"
        ].join(sep));
    }
    if (e) {
        let o = H(n(e)) + sep + [
            "microsoft",
            "windowsapps"
        ].join(sep);
        if (!r.includes(o)) {
            r.push(o);
        }
    }
    return r;
}
function xn(t) {
    return t.startsWith("/") && !Bn(t);
}
function K(t, e, n) {
    let r = H(n);
    for (let o of t){
        if (!(o === r || o.startsWith(r + sep))) {
            continue;
        }
        if (e === o || e.startsWith(o + sep)) {
            return true;
        }
    }
    return false;
}
const wn = [
    "usr/local",
    "usr/libexec/cups",
    "usr/share/snmp",
    "AppleInternal",
    "Applications",
    "Library",
    "Users",
    "Volumes",
    "cores",
    "home",
    "media",
    "mnt",
    "opt",
    "pkg",
    "private",
    "sw"
];
function uG(t) {
    let e = t.split("/");
    if (e.length < 5 || e[0] !== "" || N(e[1] ?? "") !== "system" || N(e[2] ?? "") !== "volumes" || N(e[3] ?? "") !== "data") {
        return t;
    }
    let n = e.slice(4);
    for (let r of wn){
        let o = r.split("/");
        if (n.length < o.length) {
            continue;
        }
        if (o.every((i, s)=>N(n[s] ?? "") === N(i))) {
            return `/${n.join("/")}`;
        }
    }
    return t;
}
function N(t) {
    return t.toUpperCase().toLowerCase();
}
function pG(t) {
    if (basename(dirname(t)) === "worktrees" && basename(dirname(dirname(t))) === ".claude") {
        return dirname(dirname(dirname(t)));
    }
    return null;
}
function M9(t, { allowLocalWsl = false } = {}) {
    let n = (i)=>allowLocalWsl && oVn(i);
    if (n(t)) {
        return false;
    }
    if (Jv(t)) {
        return true;
    }
    let r = Qpe(t);
    if (!isAbsolute(r)) {
        return true;
    }
    if (BBe(r, {
        allowLocalWsl
    })) {
        return true;
    }
    let o = resolve(r);
    while(true){
        let i = FPr(o);
        if (i.real !== undefined) {
            return Jv(i.real) && !n(i.real);
        }
        if (i.code !== "ENOENT" && i.code !== "ENOTDIR") {
            return true;
        }
        let s = dirname(o);
        if (s === o) {
            return false;
        }
        o = s;
    }
}
function oVn(t) {
    return false;
}
function Ypt(t) {
    return t;
}
const bn = /^\/mnt\/[a-z](?:\/|$)/i;
function sVn(t, e, n = "") {
    if (!t.startsWith("/") || bn.test(t) || tVn(t, "linux")) {
        return;
    }
    let r = n === "" ? t : t.startsWith(`${n}/`) ? t.slice(n.length) : undefined;
    if (r === undefined) {
        return undefined;
    }
    return e.replace(/[\\/]+$/, "") + r.replace(/\//g, "\\");
}
function iVn(t, { exactDots = false } = {}) {}
function aVn(t, { exactDots = false } = {}) {
    let n = Qpe(t);
    if (exactDots ? tVn(n, "win32") : Qa(n)) {
        return;
    }
    let r = /^([A-Za-z]):[\\/]+(.*)$/.exec(n);
    let o = y0t(n)?.rest.replace(/^[\\/]+/, "");
    let i = (r?.[2] ?? o ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
    if (i === "") {
        return;
    }
    let s = r ? `/mnt/${r[1].toLowerCase()}/${i}` : `/${i}`;
    if (Jv(s)) {
        return undefined;
    }
    return s;
}
function CMs(t) {
    return Jv(t) && !oVn(t);
}
function Jv(t) {
    let e = Qpe(t);
    return uOo(e) || _m(e) || HPr(e);
}
function $Pr(t, { allowLocalWsl = false } = {}) {
    let n = Qpe(t);
    if (!isAbsolute(n)) {
        return true;
    }
    let { root } = parse(n);
    return y(root, S(n.slice(root.length)), 0, allowLocalWsl);
}
function _0t(t, e) {
    return y(t, S(e), 0, false, {
        trustedStart: true,
        trustedRoot: t
    });
}
function lVn(t, e = dirname(t)) {
    let n = R(()=>readlinkSync(t));
    if (n.value === undefined) {
        return n.code !== "ENOENT" && n.code !== "EINVAL";
    }
    let r = n.value.replace(/^\/{2,}/, "/");
    if (Ft(r)) {
        return true;
    }
    let o = false;
    if (o && Qa(r)) {
        return true;
    }
    let i = o ? join(parse(e).root, r) : r;
    let s = {
        trustedStart: true,
        trustedRoot: e
    };
    if (isAbsolute(i)) {
        let u = relative(e, i);
        if (!Qa(i) && u !== "" && !$t(u) && !isAbsolute(u)) {
            return y(e, S(u), 1, false, s);
        }
        return Jv(i) || BBe(i);
    }
    if (Jv(i)) {
        return true;
    }
    let a = relative(e, dirname(t));
    let l = !$t(a) && !isAbsolute(a);
    return y(l ? e : dirname(t), [
        ...l ? S(a) : [],
        ...S(i)
    ], 1, false, s);
}
function BBe(t, e = {}) {
    return $Pr(t, e) || Qa(t) && $Pr(resolve(t), e);
}
const _n = 40;
function S(t) {
    return t.split(/\/+/).filter(Boolean);
}
function j(t, e) {
    return Jv(t) && !(e && oVn(t));
}
function $t(t) {
    return t === ".." || /^\.\.[\\/]/.test(t);
}
function Ft(t) {
    return false;
}
function y(t, e, n, r, { trustedStart = false, trustedRoot = t } = {}) {
    let s = trustedRoot.endsWith(sep) ? trustedRoot : trustedRoot + sep;
    let a = (u)=>trustedStart && (u === trustedRoot || u.startsWith(s));
    let l = t;
    if (!a(l) && j(l, r)) {
        return true;
    }
    for(let u = 0; u < e.length; u++){
        let h = e[u];
        if (h === ".") {
            continue;
        }
        if (h === "..") {
            l = dirname(l);
            continue;
        }
        let w = join(l, h);
        if (!a(w) && j(w, r)) {
            return true;
        }
        let D = R(()=>lstatSync(w));
        if (D.value === undefined) {
            if (D.code !== "ENOENT" && D.code !== "ENOTDIR") {
                return true;
            }
            let g = w;
            for (let L of e.slice(u + 1)){
                g = L === ".." ? dirname(g) : L === "." ? g : join(g, L);
                if (!a(g) && j(g, r)) {
                    return true;
                }
            }
            return false;
        }
        let F;
        if (D.value.isSymbolicLink()) {
            if (n >= _n) {
                return true;
            }
            F = R(()=>readlinkSync(w)).value;
            if (F === undefined) {
                return true;
            }
        } else {
            l = w;
            continue;
        }
        let p = F.replace(/^\/{2,}/, "/");
        if (!(trustedStart && isAbsolute(p) && !Qa(p) && a(p)) && j(p, r)) {
            return true;
        }
        let z = e.slice(u + 1);
        if (Ft(p)) {
            return true;
        }
        if (isAbsolute(p)) {
            if (trustedStart && !Qa(p) && a(p)) {
                return y(trustedRoot, [
                    ...S(p.slice(s.length)),
                    ...z
                ], n + 1, r, {
                    trustedStart: true,
                    trustedRoot
                });
            }
            let g = parse(p).root;
            return y(g, [
                ...S(p.slice(g.length)),
                ...z
            ], n + 1, r);
        }
        return y(l, [
            ...S(p),
            ...z
        ], n + 1, r, {
            trustedStart: a(l),
            trustedRoot
        });
    }
    return false;
}
function FPr(t) {
    let e = R(()=>sT(realpathSync.native(t)));
    return {
        real: e.value,
        code: e.code
    };
}
function U(error) {
    if (error != null && typeof error === "object" && "code" in error && typeof error.code === "string") {
        return error.code;
    }
}
function R(t) {
    try {
        return {
            value: Sn(t)
        };
    } catch (error) {
        return {
            code: U(error)
        };
    }
}
function Sn(t) {
    return zt(t, ()=>true);
}
function UPr(t) {
    let e = 0;
    return (n)=>zt(n, ()=>{
            if (e + P > t) {
                return false;
            }
            e += P;
            return true;
        });
}
function zt(t, e) {
    for(let n = 0;; n++){
        try {
            return t();
        } catch (error) {
            let o = U(error);
            throw error;
        }
    }
}
function Bt(error) {
    let code = U(error);
    switch(code){
        case "EINVAL":
            return {
                kind: "directory"
            };
        case "ENOENT":
            return {
                kind: "absent"
            };
        default:
            return {
                kind: "error",
                code,
                error
            };
    }
}
function RMs(t) {
    let e;
    let n = R(()=>{
        try {
            return readlinkSync(t);
        } catch (error) {
            e = error;
            throw error;
        }
    });
    if (n.value !== undefined) {
        return {
            kind: "junction",
            target: n.value
        };
    }
    return Bt(e);
}
async function Cwe(t) {
    let e;
    let n = await yn(async ()=>{
        try {
            return await readlink(t);
        } catch (error) {
            e = error;
            throw error;
        }
    });
    if (n.value !== undefined) {
        return {
            kind: "junction",
            target: n.value
        };
    }
    return Bt(e);
}
async function yn(t) {
    for(let e = 0;; e++){
        try {
            return {
                value: await t()
            };
        } catch (error) {
            let code = U(error);
            return {
                code
            };
        }
    }
}
function uOo(t) {
    return ij(t) || Va(t);
}
function Gt(t) {
    return Qa(t) || /[. :](?=[\\/]|$)/.test(t) || t.split(/[\\/]/).some((e)=>Xv(e) || Xv(e.slice(0, Math.max(0, e.indexOf(":")))));
}
function Qpe(t) {
    let e = /^(?:\\\\[?.]\\|\\\?\?\\)(?=[A-Za-z]:[\\/])/.exec(t);
    if (!e) {
        return t;
    }
    let n = t.slice(e[0].length);
    let r = n.slice(2);
    if (e[0].includes("\\") && r.includes("/") || Gt(r)) {
        return t;
    }
    return n;
}
function Qv(t, { foldCase, knownNotSuspect = false } = {}) {
    foldCase ??= false;
    t = Qpe(t);
    if (ij(t) || Va(t)) {
        let a = Ypt(resolve(Ypt(t))).normalize("NFC");
        if (foldCase) {
            return a.toLowerCase();
        }
        return a;
    }
    if (!knownNotSuspect && BBe(isAbsolute(t) ? t : resolve(t))) {
        let a = resolve(t).normalize("NFC");
        if (foldCase) {
            return a.toLowerCase();
        }
        return a;
    }
    let r = resolve(t);
    let o = [];
    let i = Mp(r);
    while(i === null && dirname(r) !== r){
        o.unshift(basename(r));
        r = dirname(r);
        i = Mp(r);
    }
    i = o.length > 0 ? resolve(i ?? r, ...o) : i ?? r;
    let s = Ypt(i).normalize("NFC");
    if (foldCase) {
        return s.toLowerCase();
    }
    return s;
}
function ih(t, e, { alreadyComparable = false, foldCase } = {}) {
    let o = relative(alreadyComparable ? t : Qv(t, {
        foldCase
    }), alreadyComparable ? e : Qv(e, {
        foldCase
    }));
    return o === "" || !isAbsolute(o) && o !== ".." && !o.startsWith(`..${sep}`);
}
function Zpe(t, e) {
    let n = Mp(t);
    let r = Mp(e);
    return n !== null && r !== null && W(n) === W(r);
}
function pOo(t, e) {
    let n = Mp(t);
    let r = Mp(e);
    return n !== null && r !== null && vn(W(n), W(r), /\//);
}
function vn(t, e, n) {
    let r = new RegExp(`(?:${n.source})+$`);
    let o = t.replace(r, "").split(n);
    let i = e.replace(r, "").split(n);
    return o.length <= i.length && o.every((s, a)=>s === i[a]);
}
function W(t) {
    return On(Ypt(t));
}
function ij(t) {
    return Bn(t);
}
function BN(t) {
    return jt.test(t) || t.includes("??") && jt.test(Vt(t));
}
var jt = /^[\\/]\?\?[\\/]/;
function Vt(t) {
    if (q.win32) {
        return q.win32.normalize(t);
    }
    return t;
}
export { Awe, zpt, OPr, dU, cG, Yse, oT, g0t, e9e, Xse, Gpt, h0t, po, ze, WPe, cOo, X2n, Xv, J2n, Qsn, Q2n, t9e, Vpt, Z2n, MPr, eVn, dOo, qpt, On, Bn, my, TC, gy, WO, Qa, UBe, tVn, FN, lA, iw, HPr, Jse, XZ, GR, nVn, DPr, UN, Gi, LPr, fa, dG, Za, Xy, Va, zPe, TMs, y0t, Wb, zO, zP, _m, Kpt, NH, JZ, Zsn, ein, n9e, ll, ks, Ld, tin, GO, sT, AC, $H, Mp, AMs, NPr, Qse, rVn, uG, pG, M9, oVn, Ypt, sVn, iVn, aVn, CMs, Jv, $Pr, _0t, lVn, BBe, FPr, UPr, RMs, Cwe, uOo, Qpe, Qv, ih, Zpe, pOo, ij, BN };
