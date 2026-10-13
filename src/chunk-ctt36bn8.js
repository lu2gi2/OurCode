import { So, lG, Jt } from "/$bunfs/root/chunk-dn762950.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { iOo, q2n, Bpt, j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { zPr } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Awe, zpt, OPr, dU, cG, Yse, oT, g0t, e9e, Xse, Gpt, h0t, po, On } from "/$bunfs/root/chunk-xgw72tt1.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
import { homedir } from "os";
import { sep, basename, dirname } from "path";
import { randomUUID } from "crypto";
const Z = "3ab19d7e-9f35-45c2-926e-75e271cc60b3";
function mMs(e) {
    return lG(e.trim(), Z);
}
function _2n() {
    let e = process.env.CLAUDE_CODE_REMOTE_SESSION_ID?.trim();
    if (e) {
        return lG(e, Z);
    }
    return null;
}
function oRo(e) {
    if (e.toLowerCase().endsWith(".jsonl")) {
        return {
            sessionId: randomUUID(),
            ingressUrl: null,
            isUrl: false,
            jsonlFile: e,
            isJsonlFile: true
        };
    }
    if (Jt(e)) {
        return {
            sessionId: e,
            ingressUrl: null,
            isUrl: false,
            jsonlFile: null,
            isJsonlFile: false
        };
    }
    try {
        let t = new URL(e);
        return {
            sessionId: _2n() ?? lG(t.href, Z),
            ingressUrl: t.href,
            isUrl: true,
            jsonlFile: null,
            isJsonlFile: false
        };
    } catch  {}
    return null;
}
function Pn() {
    this.__data__ = new zpt;
    this.size = 0;
}
const Ze = Pn;
function An(e) {
    const __data__ = this.__data__;
    const o = __data__.delete(e);
    this.size = __data__.size;
    return o;
}
const et = An;
function Mn(e) {
    return this.__data__.get(e);
}
const tt = Mn;
function wn(e) {
    return this.__data__.has(e);
}
const nt = wn;
const Ln = 200;
function In(e, t) {
    let __data__ = this.__data__;
    if (__data__ instanceof zpt) {
        const r = __data__.__data__;
        if (!Gpt || r.length < Ln - 1) {
            r.push([
                e,
                t
            ]);
            this.size = ++__data__.size;
            return this;
        }
        __data__ = this.__data__ = new h0t(r);
    }
    __data__.set(e, t);
    this.size = __data__.size;
    return this;
}
const ot = In;
function P(e) {
    const t = this.__data__ = new zpt(e);
    this.size = t.size;
}
P.prototype.clear = Ze;
P.prototype.delete = et;
P.prototype.get = tt;
P.prototype.has = nt;
P.prototype.set = ot;
const _Be = P;
const Fn = "__lodash_hash_undefined__";
function En(e) {
    this.__data__.set(e, Fn);
    return this;
}
const rt = En;
function Dn(e) {
    return this.__data__.has(e);
}
const it = Dn;
function E(e) {
    let t = -1;
    const o = e == null ? 0 : e.length;
    this.__data__ = new h0t;
    while(++t < o){
        this.add(e[t]);
    }
}
E.prototype.add = E.prototype.push = rt;
E.prototype.has = it;
const oxr = E;
function Hn(e, t) {
    let o = -1;
    const r = e == null ? 0 : e.length;
    while(++o < r){
        if (t(e[o], o, e)) {
            return true;
        }
    }
    return false;
}
const st = Hn;
function Bn(e, t) {
    return e.has(t);
}
const sxr = Bn;
const Un = 1;
const _n = 2;
function qn(e, t, o, r, i, s) {
    const a = o & Un;
    const e_length = e.length;
    const t_length = t.length;
    if (e_length != t_length && !(a && t_length > e_length)) {
        return false;
    }
    const p = s.get(e);
    const m = s.get(t);
    if (p && m) {
        return p == t && m == e;
    }
    let c = -1;
    let f = true;
    const u = o & _n ? new oxr : undefined;
    s.set(e, t);
    s.set(t, e);
    while(++c < e_length){
        var g = e[c];
        const v = t[c];
        if (r) var b = a ? r(v, g, c, t, e, s) : r(g, v, c, e, t, s);
        if (b !== undefined) {
            if (b) {
                continue;
            }
            f = false;
            break;
        }
        if (u) {
            if (!st(t, function(C, x) {
                if (!sxr(u, x) && (g === C || i(g, C, o, r, s))) {
                    return u.push(x);
                }
            })) {
                f = false;
                break;
            }
        } else if (!(g === v || i(g, v, o, r, s))) {
            f = false;
            break;
        }
    }
    s.delete(e);
    s.delete(t);
    return f;
}
const D = qn;
const dU_Uint8Array = dU.Uint8Array;
const $on = dU_Uint8Array;
function Nn(e) {
    let t = -1;
    const o = Array(e.size);
    e.forEach((r, i)=>{
        o[++t] = [
            i,
            r
        ];
    });
    return o;
}
const at = Nn;
function Gn(e) {
    let t = -1;
    const o = Array(e.size);
    e.forEach((r)=>{
        o[++t] = r;
    });
    return o;
}
const Fon = Gn;
const Kn = 1;
const Jn = 2;
const zn = "[object Boolean]";
const Qn = "[object Date]";
const Xn = "[object Error]";
const Yn = "[object Map]";
const $n = "[object Number]";
const Zn = "[object RegExp]";
const to = "[object Set]";
const no = "[object String]";
const ro = "[object Symbol]";
const io = "[object ArrayBuffer]";
const so = "[object DataView]";
const dt = cG ? cG.prototype : undefined;
const ee = dt ? dt.valueOf : undefined;
function ao(e, t, o, r, i, s, a) {
    switch(o){
        case so:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
                return false;
            }
            e = e.buffer;
            t = t.buffer;
        case io:
            if (e.byteLength != t.byteLength || !s(new $on(e), new $on(t))) {
                return false;
            }
            return true;
        case zn:
        case Qn:
        case $n:
            return Awe(+e, +t);
        case Xn:
            return e.name == t.name && e.message == t.message;
        case Zn:
        case no:
            return e == `${t}`;
        case Yn:
            var l = at;
        case to:
            const d = r & Kn;
            if (!l) {
                l = Fon;
            }
            if (e.size != t.size && !d) {
                return false;
            }
            const p = a.get(e);
            if (p) {
                return p == t;
            }
            r |= Jn;
            a.set(e, t);
            const m = D(l(e), l(t), r, i, s, a);
            a.delete(e);
            return m;
        case ro:
            if (ee) {
                return ee.call(e) == ee.call(t);
            }
    }
    return false;
}
const ut = ao;
function lo(e, t) {
    let o = -1;
    const t_length = t.length;
    const e_length = e.length;
    while(++o < t_length){
        e[e_length + o] = t[o];
    }
    return e;
}
const NDt = lo;
const Array_isArray = Array.isArray;
function co(e, t, o) {
    const r = t(e);
    if (Array_isArray(e)) {
        return r;
    }
    return NDt(r, o(e));
}
const ixr = co;
function fo(e, t) {
    let o = -1;
    const r = e == null ? 0 : e.length;
    let i = 0;
    const s = [];
    while(++o < r){
        const a = e[o];
        if (t(a, o, e)) {
            s[i++] = a;
        }
    }
    return s;
}
const axr = fo;
function go() {
    return [];
}
const lxr = go;
const propertyIsEnumerable_1 = Object.prototype.propertyIsEnumerable;
const vo = !Object.getOwnPropertySymbols ? lxr : function(e) {
    if (e == null) {
        return [];
    }
    e = Object(e);
    return axr(Object.getOwnPropertySymbols(e), function(t) {
        return propertyIsEnumerable_1.call(e, t);
    });
};
const $Dt = vo;
function yo(e, t) {
    let o = -1;
    const r = Array(e);
    while(++o < e){
        r[o] = t(o);
    }
    return r;
}
const pt = yo;
function ko(e) {
    return e != null && typeof e === "object";
}
const tG = ko;
const Co = "[object Arguments]";
function xo(e) {
    return tG(e) && Yse(e) == Co;
}
const te = xo;
const { hasOwnProperty, propertyIsEnumerable } = Object.prototype;
const Po = te(function() {
    return arguments;
}()) ? te : function(e) {
    return tG(e) && hasOwnProperty.call(e, "callee") && !propertyIsEnumerable.call(e, "callee");
};
const I8e = Po;
const U = {};
Mr(U, {
    default: ()=>bBe
});
function Ao() {
    return false;
}
const gt = Ao;
const St = typeof U === "object" && U && !U.nodeType && U;
const ht = St && typeof H === "object" && H && !H.nodeType && H;
const Mo = ht && ht.exports === St;
const mt = Mo ? dU.Buffer : undefined;
const wo = mt ? mt.isBuffer : undefined;
const Lo = wo || gt;
var bBe = Lo;
const Oo = 9007199254740991;
const Io = /^(?:0|[1-9]\d*)$/;
function Fo(e, t) {
    const o = typeof e;
    t = t ?? Oo;
    return !!t && (o == "number" || o != "symbol" && Io.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
const O8e = Fo;
const Eo = 9007199254740991;
function Do(e) {
    return typeof e === "number" && e > -1 && e % 1 == 0 && e <= Eo;
}
const A = Do;
const Ho = "[object Arguments]";
const Bo = "[object Array]";
const Uo = "[object Boolean]";
const jo = "[object Date]";
const _o = "[object Error]";
const qo = "[object Function]";
const Wo = "[object Map]";
const No = "[object Number]";
const Go = "[object Object]";
const Ko = "[object RegExp]";
const Vo = "[object Set]";
const Jo = "[object String]";
const zo = "[object WeakMap]";
const Qo = "[object ArrayBuffer]";
const Xo = "[object DataView]";
const Yo = "[object Float32Array]";
const $o = "[object Float64Array]";
const Zo = "[object Int8Array]";
const er = "[object Int16Array]";
const tr = "[object Int32Array]";
const nr = "[object Uint8Array]";
const or = "[object Uint8ClampedArray]";
const rr = "[object Uint16Array]";
const ir = "[object Uint32Array]";
const S = {};
S[Yo] = S[$o] = S[Zo] = S[er] = S[tr] = S[nr] = S[or] = S[rr] = S[ir] = true;
S[Ho] = S[Bo] = S[Qo] = S[Uo] = S[Xo] = S[jo] = S[_o] = S[qo] = S[Wo] = S[No] = S[Go] = S[Ko] = S[Vo] = S[Jo] = S[zo] = false;
function sr(e) {
    return tG(e) && A(e.length) && !!S[Yse(e)];
}
const vt = sr;
function ar(e) {
    return function(t) {
        return e(t);
    };
}
const Uon = ar;
const W = {};
Mr(W, {
    default: ()=>SBe
});
const yt = typeof W === "object" && W && !W.nodeType && W;
const L = yt && typeof _ === "object" && _ && !_.nodeType && _;
const lr = L && L.exports === yt;
const ne = lr && OPr.process;
const dr = (()=>{
    try {
        const e = L && L.require && L.require("util").types;
        if (e) {
            return e;
        }
        return ne && ne.binding && ne.binding("util");
    } catch (t) {}
})();
var SBe = dr;
const bt = SBe && SBe.isTypedArray;
const ur = bt ? Uon(bt) : vt;
const Bon = ur;
const hasOwnProperty_1 = Object.prototype.hasOwnProperty;
function gr(e, t) {
    const o = Array_isArray(e);
    const r = !o && I8e(e);
    const i = !o && !r && bBe(e);
    const s = !o && !r && !i && Bon(e);
    const a = o || r || i || s;
    const l = a ? pt(e.length, String) : [];
    const l_length = l.length;
    for(const p in e){
        if ((t || hasOwnProperty_1.call(e, p)) && !(a && (p == "length" || i && (p == "offset" || p == "parent") || s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || O8e(p, l_length)))) {
            l.push(p);
        }
    }
    return l;
}
const cxr = gr;
function mr(e) {
    const t = e && e.constructor;
    const o = typeof t === "function" && t.prototype || Object.prototype;
    return e === o;
}
const FDt = mr;
function Sr(e, t) {
    return function(o) {
        return e(t(o));
    };
}
const dxr = Sr;
const vr = dxr(Object.keys, Object);
const kt = vr;
const hasOwnProperty_2 = Object.prototype.hasOwnProperty;
function kr(e) {
    if (!FDt(e)) {
        return kt(e);
    }
    const t = [];
    for(const o in Object(e)){
        if (hasOwnProperty_2.call(e, o) && o != "constructor") {
            t.push(o);
        }
    }
    return t;
}
const Ct = kr;
function Cr(e) {
    return e != null && A(e.length) && !g0t(e);
}
const mwe = Cr;
function xr(e) {
    if (mwe(e)) {
        return cxr(e);
    }
    return Ct(e);
}
const $pe = xr;
function Rr(e) {
    return ixr(e, $pe, $Dt);
}
const b2n = Rr;
const Tr = 1;
const hasOwnProperty_3 = Object.prototype.hasOwnProperty;
function wr(e, t, o, r, i, s) {
    const a = o & Tr;
    const l = b2n(e);
    const l_length = l.length;
    const p = b2n(t);
    const p_length = p.length;
    if (l_length != p_length && !a) {
        return false;
    }
    let c = l_length;
    while(c--){
        var f = l[c];
        if (!(a ? f in t : hasOwnProperty_3.call(t, f))) {
            return false;
        }
    }
    const u = s.get(e);
    const g = s.get(t);
    if (u && g) {
        return u == t && g == e;
    }
    let v = true;
    s.set(e, t);
    s.set(t, e);
    let b = a;
    while(++c < l_length){
        f = l[c];
        const C = e[f];
        const x = t[f];
        if (r) var $e = a ? r(x, C, f, t, e, s) : r(C, x, f, e, t, s);
        if (!($e === undefined ? C === x || i(C, x, o, r, s) : $e)) {
            v = false;
            break;
        }
        if (!b) {
            b = f == "constructor";
        }
    }
    if (v && !b) {
        const I = e.constructor;
        const F = t.constructor;
        if (I != F && "constructor" in e && "constructor" in t && !(typeof I === "function" && I instanceof I && typeof F === "function" && F instanceof F)) {
            v = false;
        }
    }
    s.delete(e);
    s.delete(t);
    return v;
}
const xt = wr;
const Lr = Xse(dU, "DataView");
const N = Lr;
const Or = Xse(dU, "Promise");
const G = Or;
const Ir = Xse(dU, "Set");
const bpt = Ir;
const Fr = Xse(dU, "WeakMap");
const V = Fr;
const Rt = "[object Map]";
const Er = "[object Object]";
const Tt = "[object Promise]";
const Pt = "[object Set]";
const At = "[object WeakMap]";
const Mt = "[object DataView]";
const Dr = e9e(N);
const Hr = e9e(Gpt);
const Br = e9e(G);
const Ur = e9e(bpt);
const jr = e9e(V);
let R = Yse;
if (N && R(new N(new ArrayBuffer(1))) != Mt || Gpt && R(new Gpt) != Rt || G && R(G.resolve()) != Tt || bpt && R(new bpt) != Pt || V && R(new V) != At) {
    R = function(e) {
        const t = Yse(e);
        const o = t == Er ? e.constructor : undefined;
        const r = o ? e9e(o) : "";
        if (r) {
            switch(r){
                case Dr:
                    return Mt;
                case Hr:
                    return Rt;
                case Br:
                    return Tt;
                case Ur:
                    return Pt;
                case jr:
                    return At;
            }
        }
        return t;
    };
}
const M8e = R;
const _r = 1;
const wt = "[object Arguments]";
const Lt = "[object Array]";
const J = "[object Object]";
const hasOwnProperty_4 = Object.prototype.hasOwnProperty;
function Wr(e, t, o, r, i, s) {
    let a = Array_isArray(e);
    const l = Array_isArray(t);
    let d = a ? Lt : M8e(e);
    let p = l ? Lt : M8e(t);
    d = d == wt ? J : d;
    p = p == wt ? J : p;
    let m = d == J;
    const c = p == J;
    const f = d == p;
    if (f && bBe(e)) {
        if (!bBe(t)) {
            return false;
        }
        a = true;
        m = false;
    }
    if (f && !m) {
        if (!s) {
            s = new _Be;
        }
        if (a || Bon(e)) {
            return D(e, t, o, r, i, s);
        }
        return ut(e, t, d, o, r, i, s);
    }
    if (!(o & _r)) {
        const u = m && hasOwnProperty_4.call(e, "__wrapped__");
        const g = c && hasOwnProperty_4.call(t, "__wrapped__");
        if (u || g) {
            const v = u ? e.value() : e;
            const b = g ? t.value() : t;
            if (!s) {
                s = new _Be;
            }
            return i(v, b, o, r, s);
        }
    }
    if (!f) {
        return false;
    }
    if (!s) {
        s = new _Be;
    }
    return xt(e, t, o, r, i, s);
}
const It = Wr;
function Ft(e, t, o, r, i) {
    if (e === t) {
        return true;
    }
    if (e == null || t == null || !tG(e) && !tG(t)) {
        return e !== e && t !== t;
    }
    return It(e, t, o, r, Ft, i);
}
const M = Ft;
function Nr(e, t) {
    return M(e, t);
}
const Vn = Nr;
class q {
    #e;
    #t = new WeakMap;
    constructor(e){
        this.#e = e;
    }
    of(e) {
        let t = this.#t.get(e);
        if (t !== undefined) {
            return t;
        }
        let o = this.#e();
        this.#t.set(e, o);
        return o;
    }
}
function UP(e) {
    return {
        subscribe (t) {
            return e().subscribe(t);
        },
        emit (...t) {
            e().emit(...t);
        },
        clear () {
            e().clear();
        }
    };
}
class oe {
    walked = new Map;
    folderIsLink = new Map;
    managedMcp = null;
    clearWalk() {
        this.walked.clear();
        this.folderIsLink.clear();
    }
    noteWalked(e, t) {
        if (!this.walked.has(e)) {
            this.walked.set(e, t());
        }
    }
    all() {
        return [
            ...this.walked.values(),
            this.managedMcp
        ].filter((e)=>e !== null);
    }
}
class re {
    holders = 0;
    tiers;
    baseline;
    lingering;
    tier(e) {
        if (this.holders === 0 && this.lingering !== undefined) {
            let t = this.lingering();
            if (t === undefined) {
                this.lingering = undefined;
            }
            this.tiers = t;
        }
        return this.tiers?.get(e);
    }
    engage(e, t) {
        let o;
        if (this.holders === 0) {
            let i = e();
            let s = t?.() ?? i;
            if (this.lingering !== undefined) {
                o = {
                    tiers: this.tiers,
                    lingering: this.lingering
                };
                this.lingering = undefined;
            }
            this.tiers = i;
            this.baseline = s;
        }
        this.holders++;
        let r = false;
        return {
            release: ()=>{
                if (r) {
                    return {
                        last: false
                    };
                }
                r = true;
                this.holders--;
                if (this.holders > 0) {
                    return {
                        last: false
                    };
                }
                this.tiers = undefined;
                this.lingering = undefined;
                this.baseline = undefined;
                return {
                    last: true
                };
            },
            abandon: ()=>{
                if (r) {
                    return;
                }
                r = true;
                this.holders--;
                if (this.holders === 0) {
                    this.tiers = o?.tiers;
                    this.lingering = o?.lingering;
                    this.baseline = undefined;
                }
            }
        };
    }
    whileLive(e) {
        let tiers = this.tiers;
        let lingering = this.lingering;
        this.tiers = undefined;
        this.lingering = undefined;
        try {
            return e();
        } finally{
            this.tiers = tiers;
            this.lingering = lingering;
        }
    }
    baselineTier(e) {
        return this.baseline?.get(e);
    }
    differingTiers(e) {
        if (this.baseline === undefined) {
            return [];
        }
        return Gr(this.baseline, e);
    }
    rebaseline(e, t) {
        if (this.baseline === undefined) {
            return;
        }
        let o = new Map(this.baseline);
        for (let r of t){
            let i = e.get(r);
            if (i === undefined) {
                o.delete(r);
            } else {
                o.set(r, i);
            }
        }
        this.baseline = o;
    }
    linger(e, t) {
        if (this.holders === 0) {
            this.tiers = e;
            this.lingering = t;
            this.baseline = undefined;
        }
    }
    isHeld() {
        return this.holders > 0;
    }
}
function UDt(e) {
    if (e !== null && Object.keys(e).length === 0) {
        return null;
    }
    return e;
}
function Et(e) {
    return {
        ...e,
        settings: UDt(e.settings),
        unfiltered: UDt(e.unfiltered),
        ...e.legacy !== undefined && {
            legacy: UDt(e.legacy)
        }
    };
}
function Gr(baseline, t) {
    return [
        ...baseline.keys(),
        ...[
            ...t.keys()
        ].filter((o)=>!baseline.has(o))
    ].filter((o)=>{
        let r = baseline.get(o);
        let i = t.get(o);
        return !Vn(r && Et(r), i && Et(i));
    });
}
class H8e {
    mergedSettings = null;
    perSource = new Map;
    parsedFiles = new Map;
    managedDocumentLinks = new oe;
    folderListings = new Map;
    managedFileReads = new Map;
    primedFiles = new Set;
    policyWalks = 0;
    walkedFolders = new Map;
    policy = {};
    lastPolicyEnvComposition = null;
    isLoadingFromDisk = false;
    autoModeUntrustedSourceWarned = false;
    changed = Oe();
    internalWrites = new Map;
    enabledSources;
    inlineFlagParse;
    repoTierFreeze = new re;
    pluginBase;
    epoch = 0;
    systemSpaceServingLogged = false;
    systemAttestationContradicted = false;
    backendReadResetTail = Promise.resolve();
    backgroundWorkTail = Promise.resolve();
    invalidated = Oe();
    pluginBaseLoaded = false;
    primer;
    localStoreProbes = new Ht;
    retained = new Map;
    retainedListings = new Map;
    setPluginBase(e) {
        this.pluginBase = e;
        this.pluginBaseLoaded = true;
    }
    clearPluginBase() {
        this.pluginBase = undefined;
    }
    invalidateAll(e) {
        this.epoch++;
        this.mergedSettings = null;
        this.perSource.clear();
        this.parsedFiles.clear();
        this.managedDocumentLinks.clearWalk();
        this.primedFiles.clear();
        this.policyWalks = 0;
        this.walkedFolders.clear();
        this.folderListings.clear();
        this.policy = {};
        if (e?.userLayer === "retain" && j() && this.primer !== undefined) {
            for (let [t, o] of this.retained){
                this.parsedFiles.set(t, o.parsed);
                this.primedFiles.add(t);
            }
            for (let [t, o] of this.retainedListings){
                this.folderListings.set(t, o.names);
            }
        } else {
            this.retained.clear();
            this.retainedListings.clear();
        }
        this.invalidated.emit();
    }
    invalidatePolicyLayer() {
        this.mergedSettings = null;
        this.perSource.delete("policySettings");
        this.policy = {};
    }
    onInvalidate(e) {
        return this.invalidated.subscribe(e);
    }
    seedParsedFile(e, t, o, r) {
        if (r !== this.epoch) {
            return false;
        }
        let i = this.parsedFiles.get(e);
        let s = i === undefined || !Vn(i, o);
        this.parsedFiles.set(e, o);
        if (s || this.primedFiles.has(e)) {
            this.primedFiles.add(e);
        }
        let a = this.retained.get(e);
        if (a !== undefined) {
            a.parsed = o;
        }
        if (s) {
            this.dropDerivedCaches(t);
        }
        return true;
    }
    walkReadDiffers(e, t) {
        let o = this.parsedFiles.get(e);
        return o !== undefined && !this.primedFiles.has(e) && !Vn(o, t);
    }
    unseedParsedFile(e, t, o) {
        if (o !== this.epoch) {
            return;
        }
        this.retained.delete(e);
        if (!this.primedFiles.has(e) || t === "policySettings" && this.policyWalks > 0) {
            return;
        }
        this.primedFiles.delete(e);
        this.parsedFiles.delete(e);
        this.dropDerivedCaches(t);
    }
    dropDerivedCaches(e) {
        this.perSource.delete(e);
        this.mergedSettings = null;
        if (e === "policySettings") {
            this.policy = {};
        }
    }
    primedFolderListing(e) {
        if (j()) {
            return this.folderListings.get(e);
        }
    }
    folderListingForPolicyWalk(e) {
        if (!j()) {
            return;
        }
        this.policyWalks++;
        let t = this.folderListings.get(e);
        if (!this.walkedFolders.has(e) || t !== undefined) {
            this.walkedFolders.set(e, t ?? null);
        }
        return t;
    }
    noteWalkListing(e, t) {
        if (!j()) {
            return;
        }
        this.walkedFolders.set(e, t);
    }
    get policyWalkCount() {
        return this.policyWalks;
    }
    policyInstallVerdict(e, t, o) {
        let r = this.parsedFiles.get(e);
        if (r === undefined || Vn(r, t)) {
            return "install";
        }
        if (!this.primedFiles.has(e)) {
            return "raced";
        }
        if (this.policyWalks === 0) {
            return "install";
        }
        if (this.policyWalks > o) {
            return "raced";
        }
        return "deferred";
    }
    folderInstallVerdict(e, t, o) {
        if (!this.walkedFolders.has(e)) {
            if (this.hasParsedDropInOutside(e, t)) {
                return "raced";
            }
            return "install";
        }
        let r = this.walkedFolders.get(e);
        if (r !== null && r !== undefined && Vn(r, t)) {
            return "install";
        }
        if (this.policyWalks > o) {
            return "raced";
        }
        return "deferred";
    }
    seedFolderListing(e, t, o) {
        if (o !== this.epoch) {
            return false;
        }
        let r = this.folderListings.get(e);
        this.folderListings.set(e, t);
        let i = this.retainedListings.get(e);
        if (i !== undefined) {
            i.names = t;
        }
        if (r !== undefined && !Vn(r, t)) {
            this.dropDerivedCaches("policySettings");
        }
        return true;
    }
    walkReadManagedFileIn(e, t) {
        for (let [o, r] of this.parsedFiles){
            if (!o.includes("\x00") && !this.primedFiles.has(o) && (r.settings !== null || r.errors.length > 0) && (o === e || dirname(o) === t)) {
                return true;
            }
        }
        return false;
    }
    walkRead(e) {
        return this.parsedFiles.has(e) && !this.primedFiles.has(e);
    }
    hasParsedDropInOutside(e, t) {
        for (let o of this.parsedFiles.keys()){
            if (!o.includes("\x00") && !this.primedFiles.has(o) && dirname(o) === e && !t.includes(basename(o))) {
                return true;
            }
        }
        return false;
    }
    clearFolderListing(e, t) {
        if (t !== this.epoch) {
            return;
        }
        this.retainedListings.delete(e);
        if (!this.folderListings.has(e) || this.walkedFolders.has(e)) {
            return;
        }
        this.folderListings.delete(e);
        this.dropDerivedCaches("policySettings");
    }
    retainLayer(e, parsed) {
        let o = {
            parsed
        };
        this.retained.set(e, o);
        return ()=>{
            if (this.retained.get(e) === o) {
                this.retained.delete(e);
            }
        };
    }
    dropRetainedLayer(e) {
        this.retained.delete(e);
    }
    retainFolderListing(e, names) {
        let o = {
            names
        };
        this.retainedListings.set(e, o);
        return ()=>{
            if (this.retainedListings.get(e) === o) {
                this.retainedListings.delete(e);
            }
        };
    }
}
class Ht {
    ownerUidsByRoot = new Map;
    realHomeDir = undefined;
    canonicalRootOwnerUids(e, t) {
        let o = this.ownerUidsByRoot.get(e);
        if (o !== undefined) {
            return o;
        }
        let r = t(e);
        this.ownerUidsByRoot.set(e, r);
        return r;
    }
    hasCanonicalRootOwnerUids(e) {
        return this.ownerUidsByRoot.has(e);
    }
    primeCanonicalRootOwnerUids(e, t) {
        if (this.ownerUidsByRoot.has(e)) {
            return false;
        }
        this.ownerUidsByRoot.set(e, t);
        return true;
    }
    clearCanonicalRootOwnerUids() {
        this.ownerUidsByRoot.clear();
    }
    normalizedRealHomeDir(e) {
        this.realHomeDir ??= e();
        return this.realHomeDir;
    }
    clearNormalizedRealHomeDir() {
        this.realHomeDir = undefined;
    }
}
const uxr = new q(()=>new H8e);
function $Z() {
    return {
        sent: new Set,
        rejected: new Set,
        declaredTools: undefined,
        noChannelTools: undefined,
        declaredToolsDecided: false,
        nameOnlyAnnouncements: new Set,
        surfacedOnWire: new Set,
        definedByValue: new Set,
        inlineToolsRefusal: {
            rejectedHeader: undefined,
            announcementsByName: new Set
        },
        advisorHeld: undefined,
        wireShapeSeed: undefined,
        webSearchHistoryRejected: false,
        mediaItemCap: undefined,
        systemMessagesAcceptedBy: new Set,
        nameOnlyEntries: {
            held: new Set,
            refused: false,
            reported: undefined
        }
    };
}
function aA(e) {
    return {
        sent: new Set(e.sent),
        rejected: new Set(e.rejected),
        declaredTools: undefined,
        noChannelTools: undefined,
        declaredToolsDecided: false,
        nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements),
        surfacedOnWire: new Set(e.surfacedOnWire),
        definedByValue: new Set(e.definedByValue),
        inlineToolsRefusal: {
            rejectedHeader: e.inlineToolsRefusal.rejectedHeader,
            announcementsByName: new Set(e.inlineToolsRefusal.announcementsByName)
        },
        advisorHeld: e.advisorHeld,
        wireShapeSeed: e.wireShapeSeed,
        webSearchHistoryRejected: e.webSearchHistoryRejected,
        mediaItemCap: e.mediaItemCap,
        systemMessagesAcceptedBy: new Set(e.systemMessagesAcceptedBy),
        nameOnlyEntries: {
            ...e.nameOnlyEntries,
            held: new Set(e.nameOnlyEntries.held)
        }
    };
}
function Spt(e) {
    return {
        sent: new Set(e.sent),
        rejected: new Set(e.rejected),
        declaredTools: e.declaredTools,
        noChannelTools: e.noChannelTools,
        declaredToolsDecided: e.declaredToolsDecided,
        nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements),
        surfacedOnWire: new Set(e.surfacedOnWire),
        definedByValue: new Set(e.definedByValue),
        inlineToolsRefusal: {
            rejectedHeader: e.inlineToolsRefusal.rejectedHeader,
            announcementsByName: new Set(e.inlineToolsRefusal.announcementsByName)
        },
        advisorHeld: e.advisorHeld,
        wireShapeSeed: e.wireShapeSeed,
        webSearchHistoryRejected: e.webSearchHistoryRejected,
        mediaItemCap: e.mediaItemCap,
        systemMessagesAcceptedBy: new Set(e.systemMessagesAcceptedBy),
        nameOnlyEntries: {
            ...e.nameOnlyEntries,
            held: new Set(e.nameOnlyEntries.held)
        }
    };
}
function S2n(e) {
    sRo(e);
    e.nameOnlyEntries.held.clear();
    e.nameOnlyEntries.refused = false;
    e.nameOnlyEntries.reported = undefined;
}
function sRo(e) {
    e.declaredTools = undefined;
    e.noChannelTools = undefined;
    e.declaredToolsDecided = false;
}
function wpt(e) {
    e.systemMessagesAcceptedBy.clear();
    let e_wireShapeSeed = e.wireShapeSeed;
    if (e_wireShapeSeed === undefined) {
        return;
    }
    for (let o of e_wireShapeSeed.sent){
        e.sent.delete(o);
    }
    for (let o of e_wireShapeSeed.rejected){
        e.rejected.delete(o);
    }
    e.wireShapeSeed = undefined;
}
function iRo(e, t) {
    for (let o of t.sent){
        x0(e, o);
    }
    for (let o of t.rejected){
        qm(e, o);
    }
    e.wireShapeSeed = t;
}
function vpt(e) {
    e.advisorHeld = undefined;
}
function w2n(e) {
    let { rejectedHeader, announcementsByName } = e.inlineToolsRefusal;
    if (rejectedHeader !== undefined) {
        e.rejected.delete(rejectedHeader);
        e.inlineToolsRefusal.rejectedHeader = undefined;
    }
    for (let r of announcementsByName){
        e.nameOnlyAnnouncements.delete(r);
    }
    announcementsByName.clear();
}
function gMs(e) {
    e.advisorHeld = undefined;
    return e;
}
function Ept(e) {
    e.declaredToolsDecided = true;
}
function z(e) {
    let t = $Z();
    t.declaredTools = e.declaredTools;
    t.noChannelTools = e.noChannelTools;
    t.declaredToolsDecided = e.declaredToolsDecided;
    t.advisorHeld = e.advisorHeld;
    if (e.wireShapeSeed !== undefined) {
        iRo(t, e.wireShapeSeed);
    }
    let { rejectedHeader, announcementsByName } = e.inlineToolsRefusal;
    if (rejectedHeader !== undefined) {
        aRo(t, rejectedHeader);
    }
    lRo(t, announcementsByName);
    t.webSearchHistoryRejected = e.webSearchHistoryRejected;
    t.mediaItemCap = e.mediaItemCap;
    t.nameOnlyEntries.refused = e.nameOnlyEntries.refused;
    t.nameOnlyEntries.reported = e.nameOnlyEntries.reported;
    return t;
}
function aRo(e, t) {
    qm(e, t);
    e.inlineToolsRefusal.rejectedHeader = t;
}
function lRo(e, t) {
    for (let o of t){
        e.inlineToolsRefusal.announcementsByName.add(o);
        e.nameOnlyAnnouncements.add(o);
    }
}
function jon(e, t) {
    if (e.declaredTools === undefined) {
        e.declaredTools = t;
    }
    Ept(e);
}
function pxr(e) {
    if (e.definedByValue.size === 0) {
        return e.surfacedOnWire;
    }
    return new Set([
        ...e.surfacedOnWire,
        ...e.definedByValue
    ]);
}
function x0(e, t) {
    if (!e.rejected.has(t)) {
        e.sent.add(t);
    }
}
function Z_(e, t) {
    return e.sent.has(t) && !e.rejected.has(t);
}
function qm(e, t) {
    e.sent.delete(t);
    e.rejected.add(t);
}
function Lf(e, t) {
    return e.rejected.has(t);
}
function fxr(e, t) {
    e.sent.delete(t);
    e.rejected.delete(t);
}
function hMs(e) {
    e.webSearchHistoryRejected = true;
}
function v2n(e) {
    e.webSearchHistoryRejected = false;
}
function mxr(e, t) {
    if (e.mediaItemCap?.model === t) {
        return e.mediaItemCap;
    }
}
function gxr(e, t) {
    e.mediaItemCap = t;
}
function kpt(e) {
    e.mediaItemCap = undefined;
}
class ie {
    spawner = undefined;
    pairings = new Map;
    mainEnsureInFlight = false;
    mainSlotBlocked = false;
}
class se {
    #e = $Z();
    #t = undefined;
    #n;
    stickyBetas() {
        return this.#e;
    }
    unlatchStickyBetas() {
        this.#e = z(this.#e);
    }
    atisLatch() {
        return this.#t;
    }
    replaceAtisLatch(e) {
        this.#t = e;
        this.#n?.(e);
    }
    watchAtisLatch(e) {
        this.#n = e;
    }
    reset() {
        this.#e = $Z();
        this.#t = undefined;
    }
}
const Jr = (()=>{
    try {
        const e = Xse(Object, "defineProperty");
        e({}, "", {});
        return e;
    } catch (t) {}
})();
const Won = Jr;
function zr(e, t, o) {
    if (t == "__proto__" && Won) {
        Won(e, t, {
            configurable: true,
            enumerable: true,
            value: o,
            writable: true
        });
    } else {
        e[t] = o;
    }
}
const FZ = zr;
function Qr(e) {
    return function(t, o, r) {
        let i = -1;
        const s = Object(t);
        const a = r(t);
        let a_length = a.length;
        while(a_length--){
            const d = a[e ? a_length : ++i];
            if (o(s[d], d, s) === false) {
                break;
            }
        }
        return t;
    };
}
const Xr = Qr();
const hxr = Xr;
function Yr(e, t) {
    return e && hxr(e, t, $pe);
}
const BDt = Yr;
const $r = 1;
const Zr = 2;
function ei(e, t, o, r) {
    let o_length = o.length;
    const s = o_length;
    const a = !r;
    if (e == null) {
        return !s;
    }
    e = Object(e);
    while(o_length--){
        var l = o[o_length];
        if (a && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) {
            return false;
        }
    }
    while(++o_length < s){
        l = o[o_length];
        const d = l[0];
        const p = e[d];
        const m = l[1];
        if (a && l[2]) {
            if (p === undefined && !(d in e)) {
                return false;
            }
        } else {
            const c = new _Be;
            if (r) var f = r(p, m, d, e, t, c);
            if (!(f === undefined ? M(m, p, $r | Zr, r, c) : f)) {
                return false;
            }
        }
    }
    return true;
}
const Ut = ei;
function ti(e) {
    return e === e && !oT(e);
}
const Q = ti;
function ni(e) {
    const t = $pe(e);
    let t_length = t.length;
    while(t_length--){
        const r = t[t_length];
        const i = e[r];
        t[t_length] = [
            r,
            i,
            Q(i)
        ];
    }
    return t;
}
const jt = ni;
function oi(e, t) {
    return function(o) {
        if (o == null) {
            return false;
        }
        return o[e] === t && (t !== undefined || e in Object(o));
    };
}
const X = oi;
function ri(e) {
    const t = jt(e);
    if (t.length == 1 && t[0][2]) {
        return X(t[0][0], t[0][1]);
    }
    return function(o) {
        return o === e || Ut(o, e, t);
    };
}
const _t = ri;
const ii = "[object Symbol]";
function si(e) {
    return typeof e === "symbol" || tG(e) && Yse(e) == ii;
}
const Nse = si;
const ai = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const di = /^\w*$/;
function ui(e, t) {
    if (Array_isArray(e)) {
        return false;
    }
    const o = typeof e;
    if (o == "number" || o == "symbol" || o == "boolean" || e == null || Nse(e)) {
        return true;
    }
    return di.test(e) || !ai.test(e) || t != null && e in Object(t);
}
const w = ui;
const ci = 500;
function pi(e) {
    const t = po(e, function(r) {
        if (t_cache.size === ci) {
            t_cache.clear();
        }
        return r;
    });
    var t_cache = t.cache;
    return t;
}
const qt = pi;
const fi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const gi = /\\(\\)?/g;
const hi = qt(function(e) {
    const t = [];
    if (e.charCodeAt(0) === 46) {
        t.push("");
    }
    e.replace(fi, (o, r, i, s)=>{
        t.push(i ? s.replace(gi, "$1") : r || o);
    });
    return t;
});
const Wt = hi;
function mi(e, t) {
    let o = -1;
    const r = e == null ? 0 : e.length;
    const i = Array(r);
    while(++o < r){
        i[o] = t(e[o], o, e);
    }
    return i;
}
const wBe = mi;
const Si = Infinity;
const Nt = cG ? cG.prototype : undefined;
const Gt = Nt ? Nt.toString : undefined;
function Kt(e) {
    if (typeof e === "string") {
        return e;
    }
    if (Array_isArray(e)) {
        return `${wBe(e, Kt)}`;
    }
    if (Nse(e)) {
        if (Gt) {
            return Gt.call(e);
        }
        return "";
    }
    const t = `${e}`;
    if (t == "0" && 1 / e == -Si) {
        return "-0";
    }
    return t;
}
const Vt = Kt;
function vi(e) {
    if (e == null) {
        return "";
    }
    return Vt(e);
}
const Fpe = vi;
function yi(e, t) {
    if (Array_isArray(e)) {
        return e;
    }
    if (w(e, t)) {
        return [
            e
        ];
    }
    return Wt(Fpe(e));
}
const Upe = yi;
const bi = Infinity;
function ki(e) {
    if (typeof e === "string" || Nse(e)) {
        return e;
    }
    const t = `${e}`;
    if (t == "0" && 1 / e == -bi) {
        return "-0";
    }
    return t;
}
const $se = ki;
function Ci(e, t) {
    t = Upe(t, e);
    let o = 0;
    const t_length = t.length;
    while(e != null && o < t_length){
        e = e[$se(t[o++])];
    }
    if (o && o == t_length) {
        return e;
    }
}
const D8e = Ci;
function xi(e, t, o) {
    const r = e == null ? undefined : D8e(e, t);
    if (r === undefined) {
        return o;
    }
    return r;
}
const yxr = xi;
function Ri(e, t) {
    return e != null && t in Object(e);
}
const zt = Ri;
function Ti(e, t, o) {
    t = Upe(t, e);
    let r = -1;
    let t_length = t.length;
    let s = false;
    while(++r < t_length){
        var a = $se(t[r]);
        if (!(s = e != null && o(e, a))) {
            break;
        }
        e = e[a];
    }
    if (s || ++r != t_length) {
        return s;
    }
    t_length = e == null ? 0 : e.length;
    return !!t_length && A(t_length) && O8e(a, t_length) && (Array_isArray(e) || I8e(e));
}
const Qt = Ti;
function Pi(e, t) {
    return e != null && Qt(e, t, zt);
}
const _xr = Pi;
const Ai = 1;
const Mi = 2;
function wi(e, t) {
    if (w(e) && Q(t)) {
        return X($se(e), t);
    }
    return function(o) {
        const r = yxr(o, e);
        if (r === undefined && r === t) {
            return _xr(o, e);
        }
        return M(t, r, Ai | Mi);
    };
}
const Xt = wi;
function Li(e) {
    return e;
}
const L8e = Li;
function Oi(e) {
    return function(t) {
        return t?.[e];
    };
}
const Yt = Oi;
function Ii(e) {
    return function(t) {
        return D8e(t, e);
    };
}
const $t = Ii;
function Fi(e) {
    if (w(e)) {
        return Yt($se(e));
    }
    return $t(e);
}
const Zt = Fi;
function Ei(e) {
    if (typeof e === "function") {
        return e;
    }
    if (e == null) {
        return L8e;
    }
    if (typeof e === "object") {
        if (Array_isArray(e)) {
            return Xt(e[0], e[1]);
        }
        return _t(e);
    }
    return Zt(e);
}
const oU = Ei;
function Di(e, t) {
    const o = {};
    t = oU(t, 3);
    BDt(e, function(r, i, s) {
        FZ(o, i, t(r, i, s));
    });
    return o;
}
const oo = Di;
function Hi(e, t) {
    let o;
    let r = -1;
    const e_length = e.length;
    while(++r < e_length){
        const s = t(e[r]);
        if (s !== undefined) {
            o = o === undefined ? s : o + s;
        }
    }
    return o;
}
const en = Hi;
function Bi(e, t) {
    if (e && e.length) {
        return en(e, oU(t, 2));
    }
    return 0;
}
const Fse = Bi;
const tn = {
    inputTokens: 0,
    outputTokens: 0,
    cacheReadInputTokens: 0,
    cacheCreationInputTokens: 0
};
function Y(e) {
    let t = Object.create(null);
    return Object.assign(t, e);
}
class ae {
    #e = 0;
    #t = 0;
    #n = 0;
    #o = 0;
    #r = Date.now();
    #i = undefined;
    #a = 0;
    #u = 0;
    #l = 0;
    #d = tn;
    #c = false;
    #p = 0;
    #s = Y();
    #f = null;
    #h = null;
    #g = null;
    totalCostUSD() {
        return this.#e;
    }
    restoredCostUSD() {
        return this.#l;
    }
    restoredTokens() {
        return this.#d;
    }
    totalAPIDuration() {
        return this.#t;
    }
    totalAPIDurationWithoutRetries() {
        return this.#n;
    }
    totalToolDuration() {
        return this.#o;
    }
    totalDuration() {
        return Math.max(0, Date.now() - this.#r);
    }
    sessionStartTime() {
        return this.#i ?? this.#r;
    }
    totalLinesAdded() {
        return this.#a;
    }
    totalLinesRemoved() {
        return this.#u;
    }
    hasUnknownModelCost() {
        return this.#c;
    }
    safetyStops() {
        return this.#p;
    }
    modelUsage() {
        return this.#s;
    }
    usageForModel(e) {
        return this.#s[e];
    }
    totalInputTokens() {
        return Fse(Object.values(this.#s), "inputTokens");
    }
    totalOutputTokens() {
        return Fse(Object.values(this.#s), "outputTokens");
    }
    totalCacheReadInputTokens() {
        return Fse(Object.values(this.#s), "cacheReadInputTokens");
    }
    totalCacheCreationInputTokens() {
        return Fse(Object.values(this.#s), "cacheCreationInputTokens");
    }
    totalWebSearchRequests() {
        return Fse(Object.values(this.#s), "webSearchRequests");
    }
    recordApiDuration(e, t) {
        this.#t += e;
        this.#n += t;
    }
    recordCost(e, t, o) {
        this.#s[o] = t;
        this.#e += e;
    }
    recordToolDuration(e) {
        this.#o += e;
    }
    recordLinesChanged(e, t) {
        this.#a += e;
        this.#u += t;
    }
    markUnknownModelCost() {
        this.#c = true;
    }
    recordSafetyStop() {
        this.#p += 1;
    }
    zeroDurationsAndCostForTests() {
        this.#t = 0;
        this.#n = 0;
        this.#e = 0;
        this.#l = 0;
    }
    restartClock() {
        this.#r = Date.now();
        this.anchorLogicalStart(undefined);
    }
    anchorLogicalStart(e) {
        this.#i = e === undefined ? undefined : Math.min(e, this.#r);
    }
    restore({ totalCostUSD, totalAPIDuration, totalAPIDurationWithoutRetries, totalToolDuration, totalLinesAdded, totalLinesRemoved, lastDuration, startTime, modelUsage, hasUnknownModelCost }, m) {
        this.#g = m;
        this.#e = totalCostUSD;
        this.#l = totalCostUSD;
        this.#t = totalAPIDuration;
        this.#n = totalAPIDurationWithoutRetries;
        this.#o = totalToolDuration;
        this.#a = totalLinesAdded;
        this.#u = totalLinesRemoved;
        this.#c = hasUnknownModelCost ?? false;
        if (modelUsage) {
            this.#s = Y(modelUsage);
        }
        this.#d = {
            inputTokens: this.totalInputTokens(),
            outputTokens: this.totalOutputTokens(),
            cacheReadInputTokens: this.totalCacheReadInputTokens(),
            cacheCreationInputTokens: this.totalCacheCreationInputTokens()
        };
        if (lastDuration !== undefined) {
            this.#r = Date.now() - lastDuration;
        }
        this.anchorLogicalStart(startTime);
    }
    registerSaver(e) {
        this.#f = e;
    }
    runSaver(e, t) {
        (this.#f ?? (t ? t.#f : null))?.(e);
    }
    registerTranscriptRecorder(e) {
        this.#h = e;
    }
    runTranscriptRecorder(e, t, o) {
        (this.#h ?? (o ? o.#h : null))?.(e, t);
    }
    snapshot() {
        return {
            ownerSessionId: this.#g,
            totalCostUSD: this.#e,
            totalAPIDuration: this.#t,
            totalAPIDurationWithoutRetries: this.#n,
            totalToolDuration: this.#o,
            startTime: this.#r,
            sessionLogicalStartTime: this.#i,
            totalLinesAdded: this.#a,
            totalLinesRemoved: this.#u,
            restoredCostUSD: this.#l,
            restoredTokens: this.#d,
            hasUnknownModelCost: this.#c,
            safetyStops: this.#p,
            modelUsage: oo(this.#s, (e)=>({
                    ...e
                }))
        };
    }
    restoreSnapshot(e) {
        this.#g = e.ownerSessionId;
        this.#e = e.totalCostUSD;
        this.#t = e.totalAPIDuration;
        this.#n = e.totalAPIDurationWithoutRetries;
        this.#o = e.totalToolDuration;
        this.#r = e.startTime;
        this.#i = e.sessionLogicalStartTime;
        this.#a = e.totalLinesAdded;
        this.#u = e.totalLinesRemoved;
        this.#l = e.restoredCostUSD;
        this.#d = e.restoredTokens;
        this.#c = e.hasUnknownModelCost;
        this.#p = e.safetyStops;
        this.#s = Y(oo(e.modelUsage, (t)=>({
                ...t
            })));
    }
    claim(e) {
        this.#g ??= e;
    }
    scopeTo(e) {
        this.#g = e;
    }
    ownerSessionId() {
        return this.#g;
    }
    belongsTo(e) {
        return this.#g === e;
    }
    reset(e) {
        this.#g = e;
        this.#e = 0;
        this.#l = 0;
        this.#d = tn;
        this.#t = 0;
        this.#n = 0;
        this.#o = 0;
        this.#r = Date.now();
        this.anchorLogicalStart(undefined);
        this.#a = 0;
        this.#u = 0;
        this.#c = false;
        this.#p = 0;
        this.#s = Y();
    }
}
class le {
    #e = new Set;
    #t = new Map;
    consentSessionFallback(e) {
        return this.#e.has(e);
    }
    replaceConsentSessionFallback(e, t) {
        if (t) {
            this.#e.add(e);
        } else {
            this.#e.delete(e);
        }
    }
    sessionConsentKey(e) {
        return this.#t.get(e) ?? null;
    }
    replaceSessionConsentKey(e, t) {
        if (t === null) {
            this.#t.delete(e);
        } else {
            this.#t.set(e, t);
        }
    }
    reset() {
        this.#e.clear();
        this.#t.clear();
    }
}
class de {
    #e = {
        registeredHooks: null
    };
    #t = undefined;
    #n = undefined;
    holder() {
        return this.#e;
    }
    mainThreadAgentType() {
        return this.#t;
    }
    replaceMainThreadAgentType(e) {
        this.#t = e;
    }
    mainThreadAgentHooks() {
        return this.#n;
    }
    replaceMainThreadAgentHooks(e) {
        this.#n = e;
    }
    reset() {
        this.#e = {
            registeredHooks: null
        };
        this.#t = undefined;
        this.#n = undefined;
    }
}
class ue {
    #e = new Map;
    skills() {
        return this.#e;
    }
    lookup(e) {
        return this.#e.get(e);
    }
    record(e, t) {
        this.#e.set(e, t);
    }
    forget(e) {
        this.#e.delete(e);
    }
    forgetAll() {
        this.#e.clear();
    }
    reset() {
        this.#e = new Map;
    }
}
class ce {
    #e = [];
    #t;
    #n;
    #o;
    #r;
    approvedServers() {
        return this.#e;
    }
    approveServers(workspaceKey, t) {
        for (let o of t){
            if (!this.#e.some((r)=>r.name === o && r.workspaceKey === workspaceKey)) {
                this.#e.push({
                    name: o,
                    workspaceKey
                });
            }
        }
    }
    registerClientsAccessor(e) {
        this.#t = e;
    }
    acquireClientsAccessor(e) {
        if (this.#t) {
            return ()=>{};
        }
        this.#t = e;
        return ()=>{
            if (this.#t === e) {
                this.#t = undefined;
            }
        };
    }
    clientsFromAccessor() {
        return this.#t?.();
    }
    registerConnectedClientWiring(e) {
        this.#n = e;
    }
    connectedClientWiring() {
        return this.#n;
    }
    registerToolsSwapper(e) {
        this.#o = e;
    }
    acquireToolsSwapper(e) {
        if (this.#o) {
            return ()=>{};
        }
        this.#o = e;
        return ()=>{
            if (this.#o === e) {
                this.#o = undefined;
            }
        };
    }
    swapServerTools(e, t, o) {
        if (!this.#o) {
            return false;
        }
        return this.#o(e, t, o);
    }
    registerConnections(e) {
        this.#r = e;
    }
    acquireConnections(e) {
        if (this.#r) {
            return ()=>{};
        }
        this.#r = e;
        return ()=>{
            if (this.#r === e) {
                this.#r = undefined;
            }
        };
    }
    connections() {
        return this.#r;
    }
    reset() {
        this.#e = [];
        this.#t = undefined;
    }
}
class pe {
    #e = undefined;
    #t = undefined;
    #n = undefined;
    #o = undefined;
    #r = undefined;
    #i = undefined;
    #a = false;
    #u = false;
    #l = undefined;
    #d = false;
    #c = undefined;
    #p = undefined;
    #s = undefined;
    mainLoopModelOverride() {
        return this.#e;
    }
    overrideMainLoopModel(e) {
        this.#e = e;
    }
    mainLoopEffortState() {
        return this.#t;
    }
    replaceMainLoopEffortState(e) {
        this.#t = e;
    }
    initialMainLoopModel() {
        return this.#n;
    }
    replaceInitialMainLoopModel(e) {
        this.#n = e;
    }
    initialModelSettingLayer() {
        return this.#o;
    }
    replaceInitialModelSettingLayer(e) {
        this.#o = e;
    }
    resolvedOrgDefault() {
        return this.#r;
    }
    replaceResolvedOrgDefault(e) {
        this.#r = e;
    }
    initialEnvDefaultModel() {
        return this.#i;
    }
    replaceInitialEnvDefaultModel(e) {
        this.#i = e;
    }
    refusalFallbackOccurred() {
        return this.#a;
    }
    markRefusalFallbackOccurred(e) {
        this.#a = true;
        this.#l ??= e;
    }
    refusalFallbackHeaderArmed() {
        return this.#u;
    }
    armRefusalFallbackHeader(e) {
        this.#u = true;
        this.#l ??= e;
    }
    refusalFallbackLatchOriginRequestId() {
        return this.#l;
    }
    silentLaneServerArmed() {
        return this.#d;
    }
    armSilentLaneFromServer() {
        this.#d = true;
    }
    forgetRefusalFallbackOccurred() {
        this.#a = false;
        this.#u = false;
        this.#d = false;
        this.#l = undefined;
    }
    refusalFallbackModelLatch() {
        return this.#c;
    }
    replaceRefusalFallbackModelLatch(e, t = "superseded") {
        if (this.#c?.carriedEffort !== undefined && e?.carriedEffort === undefined) {
            this.#p = t;
        }
        this.#c = e;
    }
    unlatchRefusalFallbackModel(e) {
        this.replaceRefusalFallbackModelLatch(undefined, e);
    }
    takeCarriedEffortEnd() {
        let e = this.#p;
        this.#p = undefined;
        return e;
    }
    availabilityFallbackChain() {
        return this.#s;
    }
    replaceAvailabilityFallbackChain(e) {
        this.#s = e;
    }
    reset() {
        this.#e = undefined;
        this.#t = undefined;
        this.#n = undefined;
        this.#o = undefined;
        this.#r = undefined;
        this.#i = undefined;
        this.#a = false;
        this.#u = false;
        this.#d = false;
        this.#l = undefined;
        this.#c = undefined;
        this.#p = undefined;
        this.#s = undefined;
    }
}
class fe {
    #e = new Map;
    #t = 0;
    #n = undefined;
    sections() {
        return this.#e;
    }
    recordSection(e, t) {
        this.#e.set(e, t);
    }
    forgetAllSections() {
        this.#e.clear();
    }
    noteInvalidation(e = "other") {
        this.#t += 1;
        this.#n = e;
    }
    epoch() {
        return this.#t;
    }
    lastInvalidationReason() {
        return this.#n;
    }
    reset() {
        this.#e = new Map;
    }
}
class ge {
    #e = null;
    #t = null;
    #n = null;
    #o = null;
    #r = null;
    #i = 0;
    #a = null;
    #u = undefined;
    #l = 0;
    #d = null;
    #c = null;
    #p = null;
    #s = null;
    #f = null;
    #h = false;
    #g = null;
    #v = null;
    #S = false;
    lastAPIRequest() {
        return this.#e;
    }
    replaceLastAPIRequest(e) {
        this.#e = e;
    }
    lastCancelledAPIMessageId() {
        return this.#t;
    }
    replaceLastCancelledAPIMessageId(e) {
        this.#t = e;
    }
    lastAPIRequestMessages() {
        return this.#n;
    }
    replaceLastAPIRequestMessages(e) {
        this.#n = e;
    }
    lastClassifierRequests() {
        return this.#o;
    }
    replaceLastClassifierRequests(e) {
        this.#o = e;
    }
    promptId() {
        return this.#r;
    }
    replacePromptId(e) {
        this.#r = e;
    }
    promptIndex() {
        return this.#i;
    }
    replacePromptIndex(e) {
        this.#i = e;
    }
    incrementPromptIndex() {
        this.#i++;
        return this.#i;
    }
    lastPersonPrompt() {
        return this.#a;
    }
    replaceLastPersonPrompt(e) {
        this.#a = e;
    }
    lastMainRequestId() {
        return this.#u;
    }
    replaceLastMainRequestId(e) {
        this.#u = e;
        if (e === undefined) {
            this.#l += 1;
        }
    }
    mainChainReleaseCount() {
        return this.#l;
    }
    lastMainThreadCacheTtlMs() {
        return this.#d;
    }
    replaceLastMainThreadCacheTtlMs(ttlMs, model, o = false) {
        this.#d = ttlMs;
        this.#s = Date.now();
        this.#p = {
            ttlMs,
            model,
            requestAt: this.#s,
            askedAt: o ? this.#p?.askedAt ?? this.#s : this.#s
        };
        this.#f = this.#s;
        this.#h = true;
    }
    isLastMainThreadAskLive(e, t) {
        let o = this.#p;
        return o !== null && o.requestAt === this.#s && o.ttlMs === e && o.model === t && Date.now() - o.askedAt < e;
    }
    adjustLastMainThreadCacheTtlMs(e) {
        this.#d = e;
    }
    recordLastMainThreadCacheRenewal(e) {
        if (this.#s !== null) {
            this.#c = {
                requestAt: this.#s,
                at: Math.max(e, this.lastMainThreadCacheRenewedAt() ?? -Infinity)
            };
        }
    }
    lastMainThreadCacheRenewedAt() {
        let e = this.#c;
        if (e !== null && e.requestAt === this.#s) {
            return e.at;
        }
        return null;
    }
    lastLiveMainThreadRequestAt() {
        return this.#f;
    }
    lastMainThreadRequestAt() {
        return this.#s;
    }
    mainThreadRequestedInProcess() {
        return this.#h;
    }
    recordMainThreadTurnStart() {
        this.#h = true;
    }
    replaceLastMainThreadRequest(e, t) {
        this.#s = e;
        this.#d = t;
    }
    lastMainThreadContextTokens() {
        return this.#g;
    }
    replaceLastMainThreadContextTokens(e) {
        this.#g = e;
    }
    stageResumeSeed(e) {
        this.#m = e;
    }
    applyResumeSeed(e) {
        this.#m = null;
        this.#d = e.ttlMs;
        this.#s = e.requestAt;
        this.#g = e.contextTokens;
    }
    #m = null;
    clearLastMainThreadRequest(e) {
        let t = e !== undefined && this.#m?.sessionId === e ? this.#m : null;
        this.#m = null;
        this.#d = t?.ttlMs ?? null;
        this.#s = t?.requestAt ?? null;
        this.#g = t?.contextTokens ?? null;
        this.#f = null;
        this.#h = false;
    }
    lastApiCompletionTimestamp() {
        return this.#v;
    }
    replaceLastApiCompletionTimestamp(e) {
        this.#v = e;
    }
    pendingPostCompaction() {
        return this.#S;
    }
    replacePendingPostCompaction(e) {
        this.#S = e;
    }
    reset() {
        this.#e = null;
        this.#t = null;
        this.#n = null;
        this.#o = null;
        this.#r = null;
        this.#i = 0;
        this.#a = null;
        this.#u = undefined;
        this.#l += 1;
        this.#d = null;
        this.#s = null;
        this.#f = null;
        this.#h = false;
        this.#g = null;
        this.#m = null;
        this.#v = null;
        this.#S = false;
    }
}
class he {
    #e = [];
    #t = Object.create(null);
    #n = null;
    #o = 0;
    #r = false;
    #i = 0;
    changed = Oe();
    pendingLoopWakeup = Oe();
    tasks() {
        return this.#e;
    }
    schedule(e) {
        this.#e.push(e);
    }
    replaceTasks(e) {
        this.#e = e;
    }
    chainStartedAt(e) {
        return this.#t[e];
    }
    recordChainStart(e, t) {
        this.#t[e] = t;
    }
    forgetChainStart(e) {
        delete this.#t[e];
    }
    tickInFlightPrompt() {
        return this.#n;
    }
    replaceTickInFlightPrompt(e) {
        this.#n = e;
    }
    consecutiveKeepalives() {
        return this.#o;
    }
    replaceConsecutiveKeepalives(e) {
        this.#o = e;
    }
    ended() {
        return this.#r;
    }
    replaceEnded(e) {
        this.#r = e;
    }
    wakeFires() {
        return this.#i;
    }
    recordWakeFire() {
        this.#i++;
    }
    resetWakeFires() {
        this.#i = 0;
    }
    reset() {
        this.#e = [];
        this.#t = Object.create(null);
        this.#n = null;
        this.#o = 0;
        this.#r = false;
        this.#i = 0;
    }
}
class me {
    #e = false;
    #t = false;
    #n = false;
    #o = false;
    #r = false;
    #i = false;
    #a = false;
    #u = false;
    #l = false;
    #d = false;
    #c = undefined;
    #p = false;
    #s = undefined;
    #f = false;
    #h = false;
    #g = null;
    #v = null;
    #S = null;
    #m = false;
    #C = null;
    #b = false;
    #y = false;
    #R = false;
    #k = false;
    #T = false;
    #x = undefined;
    #A = undefined;
    #M = undefined;
    #P = null;
    #w = null;
    onboardingShownThisSession() {
        return this.#e;
    }
    replaceOnboardingShownThisSession(e) {
        this.#e = e;
    }
    lspRecommendationShownThisSession() {
        return this.#t;
    }
    replaceLspRecommendationShownThisSession(e) {
        this.#t = e;
    }
    sessionTrustAccepted() {
        return this.#n;
    }
    replaceSessionTrustAccepted(e) {
        this.#n = e;
    }
    homeTrustDialogAccepted() {
        return this.#o;
    }
    replaceHomeTrustDialogAccepted(e) {
        this.#o = e;
    }
    hasExitedPlanMode() {
        return this.#r;
    }
    replaceHasExitedPlanMode(e) {
        this.#r = e;
    }
    needsPlanModeExitAttachment() {
        return this.#i;
    }
    replaceNeedsPlanModeExitAttachment(e) {
        this.#i = e;
    }
    needsAutoModeExitAttachment() {
        return this.#a;
    }
    replaceNeedsAutoModeExitAttachment(e) {
        this.#a = e;
    }
    memoryToggledOff() {
        return this.#u;
    }
    replaceMemoryToggledOff(e) {
        this.#u = e;
    }
    autoMemoryOffThisSession() {
        return this.#l;
    }
    replaceAutoMemoryOffThisSession(e) {
        this.#l = e;
    }
    accountMemorySessionMode() {
        return this.#c;
    }
    replaceAccountMemorySessionMode(e, t = false) {
        this.#c = e;
        this.#p = t && e !== undefined;
    }
    accountMemorySessionModeRestored() {
        return this.#p;
    }
    accountMemoryLaunchMode() {
        return this.#s;
    }
    replaceAccountMemoryLaunchMode(e) {
        this.#s = e;
    }
    restoredMemoryPause() {
        return this.#f;
    }
    replaceRestoredMemoryPause(e) {
        this.#f = e;
    }
    restoredAutoMemoryOff() {
        return this.#d;
    }
    replaceRestoredAutoMemoryOff(e) {
        this.#d = e;
    }
    teardownUnwindRequested() {
        return this.#m;
    }
    replaceTeardownUnwindRequested(e) {
        this.#m = e;
    }
    backgroundAutoModeSetupInFlight() {
        return this.#h;
    }
    replaceBackgroundAutoModeSetupInFlight(e) {
        this.#h = e;
    }
    deferredToolStubGateLatch() {
        return this.#g;
    }
    replaceDeferredToolStubGateLatch(e) {
        this.#g = e;
    }
    verifySkillRolloutGateLatch() {
        return this.#v;
    }
    replaceVerifySkillRolloutGateLatch(e) {
        this.#v = e;
    }
    commitSkillRolloutGateLatch() {
        return this.#S;
    }
    replaceCommitSkillRolloutGateLatch(e) {
        this.#S = e;
    }
    memoryToolsShapeLatch() {
        return this.#C;
    }
    replaceMemoryToolsShapeLatch(e) {
        this.#C = e;
    }
    proposeGoalAvailabilityLogged() {
        return this.#b;
    }
    markProposeGoalAvailabilityLogged() {
        this.#b = true;
    }
    activeRoutine() {
        return this.#A;
    }
    replaceActiveRoutine(e) {
        this.#A = e;
    }
    inheritedTeamName() {
        return this.#M;
    }
    replaceInheritedTeamName(e) {
        this.#M = e;
    }
    teleportedSessionInfo() {
        return this.#P;
    }
    replaceTeleportedSessionInfo(e) {
        this.#P = e;
    }
    markFirstTeleportMessageLogged() {
        if (this.#P) {
            this.#P.hasLoggedFirstMessage = true;
        }
    }
    cachedClaudeMdContent() {
        return this.#w;
    }
    replaceCachedClaudeMdContent(e) {
        this.#w = e;
    }
    accountSkillsSyncEnabled() {
        return this.#y;
    }
    replaceAccountSkillsSyncEnabled(e) {
        this.#y = e;
    }
    skillsSyncVetoed() {
        return this.#R;
    }
    replaceSkillsSyncVetoed(e) {
        this.#R = e;
    }
    accountPluginsSyncEnabled() {
        return this.#k;
    }
    replaceAccountPluginsSyncEnabled(e) {
        this.#k = e;
    }
    pluginsSyncVetoed() {
        return this.#T;
    }
    replacePluginsSyncVetoed(e) {
        this.#T = e;
    }
    armPendingContextCompacted(e) {
        this.#x = e;
    }
    consumePendingContextCompacted() {
        let e = this.#x;
        this.#x = undefined;
        return e;
    }
    forgetPendingContextCompacted() {
        this.#x = undefined;
    }
    reset() {
        this.#y = false;
        this.#R = false;
        this.#k = false;
        this.#T = false;
        this.#e = false;
        this.#t = false;
        this.#n = false;
        this.#o = false;
        this.#r = false;
        this.#i = false;
        this.#a = false;
        this.#u = false;
        this.#l = false;
        this.#c = undefined;
        this.#p = false;
        this.#s = undefined;
        this.#f = false;
        this.#d = false;
        this.#m = false;
        this.#h = false;
        this.#g = null;
        this.#v = null;
        this.#S = null;
        this.#C = null;
        this.#b = false;
        this.#A = undefined;
        this.#M = undefined;
        this.#P = null;
        this.#w = null;
        this.#x = undefined;
    }
}
function nn() {
    return {
        messagesArriving: 0,
        lastInLine: Promise.resolve(),
        gaveUpOn: undefined,
        besideLine: 0,
        lastBesideLine: Promise.resolve(),
        gaveUpOnBeside: undefined,
        pathsArrivingBeside: new Map,
        toolCallsWaiting: 0,
        pathsArriving: new Map
    };
}
class Se {
    #e = new Map;
    #t = new Map;
    #n = null;
    #o = new Map;
    #r = new Set;
    #i = new Set;
    #a = new Set;
    #u = new Set;
    #l = new Set;
    #d = new Set;
    #c = new Set;
    #p = new Set;
    #s = new Set;
    #f = new Set;
    #h = new Map;
    #g = new Map;
    #v = new Map;
    #S;
    #m = {
        byFileUuid: new Map,
        recentPrefetchStarts: []
    };
    #C = nn();
    #b = new Set;
    #y = undefined;
    #R = undefined;
    #k = undefined;
    #T = undefined;
    #x = undefined;
    planSlugCache() {
        return this.#e;
    }
    forgetPlanSlug(e) {
        this.#e.delete(e);
    }
    pendingBranchLinks() {
        return this.#t;
    }
    replacePendingBranchLinks() {
        this.#t = new Map;
    }
    vimSharedState() {
        return this.#n;
    }
    replaceVimSharedState(e) {
        this.#n = e;
    }
    agentColorMap() {
        return this.#o;
    }
    sessionCreatedTeams() {
        return this.#r;
    }
    sessionSpawnedTeammatePanes() {
        return this.#i;
    }
    surfacedHookSpawnFailures() {
        return this.#a;
    }
    bareMcpServerMatchersWarned() {
        return this.#u;
    }
    pendingConversationEditKinds() {
        return this.#l;
    }
    clientTruncatedAssistantIds() {
        return this.#d;
    }
    heldStatelessReplyIds() {
        return this.#c;
    }
    unsupportedThreadKeys() {
        return this.#p;
    }
    pendingPrLinks() {
        return this.#s;
    }
    policyPredicateTelemetryEmitted() {
        return this.#f;
    }
    humanAttachmentDigests() {
        return this.#h;
    }
    inboundAttachmentFiles() {
        return this.#g;
    }
    filesPlacedByName() {
        return this.#v;
    }
    filesPlacedByNameRead() {
        return this.#S;
    }
    setFilesPlacedByNameRead(e) {
        this.#S = e;
    }
    inboundAttachmentDownloads() {
        return this.#m;
    }
    arrivingInboundFiles() {
        return this.#C;
    }
    chromeAvailabilityStagesLogged() {
        return this.#b;
    }
    replaceChromeAvailabilityStagesLogged(e) {
        this.#b = new Set;
        if (e) {
            this.#y = Date.now();
        }
    }
    chromeAvailabilityAnchorMs() {
        return this.#y;
    }
    pendingGoalIdleCheckin() {
        return this.#R;
    }
    replacePendingGoalIdleCheckin(e) {
        this.#R = e;
    }
    pendingGoalReprompt() {
        return this.#k;
    }
    replacePendingGoalReprompt(e) {
        this.#k = e;
    }
    goalInterruptionStreak() {
        return this.#T;
    }
    replaceGoalInterruptionStreak(e) {
        this.#T = e;
    }
    workerCheckin() {
        return this.#x;
    }
    replaceWorkerCheckin(e) {
        this.#x = e;
    }
    reset() {
        this.#e = new Map;
        this.#t = new Map;
        this.#n = null;
        this.#o = new Map;
        this.#r = new Set;
        this.#i = new Set;
        this.#a = new Set;
        this.#u = new Set;
        this.#l = new Set;
        this.#d = new Set;
        this.#c = new Set;
        this.#p = new Set;
        this.#s = new Set;
        this.#f = new Set;
        this.#h = new Map;
        this.#g = new Map;
        this.#v = new Map;
        this.#S = undefined;
        for (let e of this.#m.byFileUuid.values()){
            clearTimeout(e.expiry);
            e.abort.abort();
        }
        this.#m = {
            byFileUuid: new Map,
            recentPrefetchStarts: []
        };
        this.#C = nn();
        this.#b = new Set;
        this.#y = undefined;
        clearTimeout(this.#R);
        this.#R = undefined;
        clearTimeout(this.#k);
        this.#k = undefined;
        this.#T = undefined;
        clearInterval(this.#x?.timer);
        this.#x = undefined;
    }
}
const on = {
    renderTarget: "ink",
    workspace: "local",
    canDrive: true,
    transcriptSource: "local-jsonl",
    remote: null
};
class ve {
    #e = false;
    #t = undefined;
    #n = undefined;
    #o = undefined;
    #r = undefined;
    #i = undefined;
    #a = undefined;
    #u = null;
    #l = false;
    #d = undefined;
    #c = on;
    #p = false;
    #s = "idle";
    attacherCapsChanged = Oe();
    rvSupervisorLinkChanged = Oe();
    sdkDialogHostActive() {
        return this.#e;
    }
    markSdkDialogHostActive(e) {
        this.#e = e;
    }
    sdkSupportedDialogKinds() {
        return this.#t;
    }
    sdkSupportedDialogKindsSource() {
        return this.#n;
    }
    declareDialogKinds(e, t) {
        this.#t = e;
        this.#n = e === undefined ? undefined : t;
    }
    sdkPerTaskStopAffordance() {
        return this.#o;
    }
    declarePerTaskStopAffordance(e) {
        this.#o = e;
    }
    sdkRapidFollowupPreempt() {
        return this.#r;
    }
    declareRapidFollowupPreempt(e) {
        this.#r = e;
    }
    sdkForwardNestedSubagentToolCalls() {
        return this.#i;
    }
    declareForwardNestedSubagentToolCalls(e) {
        this.#i = e;
    }
    hostRendersChromeSetupOffer() {
        return this.#a;
    }
    declareHostRendersChromeSetupOffer(e) {
        this.#a = e;
    }
    attacherCaps() {
        return this.#u;
    }
    replaceAttacherCaps(e) {
        this.#u = e;
        this.attacherCapsChanged.emit();
    }
    rvSupervisorLinkLive() {
        return this.#l;
    }
    replaceRvSupervisorLinkLive(e) {
        if (this.#l === e) {
            return;
        }
        this.#l = e;
        this.rvSupervisorLinkChanged.emit();
    }
    sdkBetas() {
        return this.#d;
    }
    replaceSdkBetas(e) {
        this.#d = e;
    }
    caps() {
        return this.#c;
    }
    replaceCaps(e) {
        this.#c = e;
    }
    markRemote(e) {
        this.#c = {
            ...this.#c,
            workspace: e ? "remote" : "local"
        };
    }
    replBridgeActive() {
        return this.#p;
    }
    replaceReplBridgeActive(e) {
        if (this.#p === e) {
            return;
        }
        this.#p = e;
    }
    mainLoopBusy() {
        return this.#s !== "idle";
    }
    mainQueryRunning() {
        return this.#s === "running";
    }
    replaceMainLoopStatus(e) {
        this.#s = e;
    }
    reset() {
        this.#e = false;
        this.#t = undefined;
        this.#n = undefined;
        this.#o = undefined;
        this.#r = undefined;
        this.#i = undefined;
        this.#a = undefined;
        this.#u = null;
        this.#d = undefined;
        this.#c = on;
        this.#p = false;
        this.#s = "idle";
        this.#l = false;
        this.attacherCapsChanged.clear();
        this.rvSupervisorLinkChanged.clear();
    }
}
const rn = 150;
class ye {
    #e = Date.now();
    #t = false;
    #n = 0;
    interactionFired = Oe();
    #o = undefined;
    terminalFocusFired = Oe();
    #r = false;
    #i;
    lastInteractionTime() {
        return this.#e;
    }
    lastSubmitTime() {
        return this.#n;
    }
    recordSubmit() {
        this.#n = Date.now();
    }
    recordInteraction(e) {
        if (e) {
            this.#a();
        } else {
            this.#t = true;
        }
    }
    flushIfDirty() {
        if (this.#t) {
            this.#a();
        }
    }
    #a() {
        this.#e = Date.now();
        this.#t = false;
        this.interactionFired.emit();
    }
    resetBaseline() {
        this.#e = Date.now();
        this.#t = false;
    }
    terminalFocus() {
        return this.#o;
    }
    updateTerminalFocus(e) {
        this.#o = e;
        this.terminalFocusFired.emit();
    }
    scrollDraining() {
        return this.#r;
    }
    markScrollActivity() {
        this.#r = true;
        if (this.#i) {
            clearTimeout(this.#i);
        }
        this.#i = setTimeout(()=>{
            this.#r = false;
            this.#i = undefined;
        }, rn);
        this.#i.unref?.();
    }
    async waitForScrollIdle() {
        while(this.#r){
            await new Promise((resolve)=>setTimeout(resolve, rn));
        }
    }
    reset() {
        this.#e = Date.now();
        this.#n = 0;
        this.#o = undefined;
        this.interactionFired.clear();
        this.terminalFocusFired.clear();
    }
}
const Ui = [
    "sdk_single_prompt_gate",
    "subagent_estimate",
    "subagent_final_turn",
    "rows_unreadable"
];
class be {
    byAgent = new Map;
    attemptsByAgent = new Map;
    cappedFailuresByAgent = new Map;
    armGateEventEmitted = new Set;
    vetoedUnderPrompt = new Map;
    sidecarIo = Promise.resolve();
    rehydrateAttemptedSessions = new Set;
    sidecarReadsAhead = new Map;
    get(e) {
        return this.byAgent.get(e);
    }
    has(e) {
        return this.byAgent.has(e);
    }
    put(e, t) {
        this.byAgent.set(e, t);
    }
    remove(e) {
        this.byAgent.delete(e);
    }
    nextAttemptNumber(e) {
        let t = (this.attemptsByAgent.get(e) ?? 0) + 1;
        this.attemptsByAgent.set(e, t);
        return t;
    }
    consecutiveCountedFailures(e) {
        return this.cappedFailuresByAgent.get(e) ?? 0;
    }
    recordCountedFailure(e) {
        let t = (this.cappedFailuresByAgent.get(e) ?? 0) + 1;
        this.cappedFailuresByAgent.set(e, t);
        return t;
    }
    clearCountedFailures(e) {
        this.cappedFailuresByAgent.delete(e);
    }
    recordVeto(e, t) {
        this.vetoedUnderPrompt.set(e, t);
    }
    isVetoedUnder(e, t) {
        return this.vetoedUnderPrompt.get(e) === t;
    }
    latchArmGateEvent(e) {
        if (this.armGateEventEmitted.has(e)) {
            return false;
        }
        this.armGateEventEmitted.add(e);
        return true;
    }
    enqueueSidecarIo(e, t) {
        this.sidecarIo = this.sidecarIo.then(e, e).catch(t);
        return this.sidecarIo;
    }
    sidecarIoSettled() {
        return this.sidecarIo;
    }
    hasAttemptedRehydrate(e) {
        return this.rehydrateAttemptedSessions.has(e);
    }
    markRehydrateAttempted(e) {
        this.rehydrateAttemptedSessions.add(e);
    }
    keepSidecarReadAhead(e, t) {
        this.sidecarReadsAhead.delete(e);
        while(this.sidecarReadsAhead.size >= 8){
            let o = this.sidecarReadsAhead.keys().next().value;
            if (o === undefined) {
                break;
            }
            this.sidecarReadsAhead.delete(o);
        }
        this.sidecarReadsAhead.set(e, t);
    }
    takeSidecarReadAhead(e) {
        let t = this.sidecarReadsAhead.get(e);
        this.sidecarReadsAhead.delete(e);
        return t;
    }
    dropSidecarReadAhead(e) {
        this.sidecarReadsAhead.delete(e);
    }
    forgetSubagentTelemetry(e) {
        this.attemptsByAgent.delete(e);
        this.cappedFailuresByAgent.delete(e);
        this.vetoedUnderPrompt.delete(e);
        for (let t of Ui){
            this.armGateEventEmitted.delete(`${e}:${t}`);
        }
    }
}
function N8e(e) {
    return e ?? "main";
}
function cRo({ messages, rowUuids }, lastUuid) {
    return {
        lastUuid,
        seenUuids: new Set(messages.map((r)=>r.uuid)),
        rowUuids
    };
}
function bxr({ coverage, kept, sent, received, instructions, fit }) {
    let a = ({ uuid })=>coverage.seenUuids.has(uuid);
    let l = new Set(sent.messages.map((u)=>u.uuid));
    if (!l.has(coverage.lastUuid)) {
        return {
            kind: "refuse",
            reason: "boundary_uuid_missing"
        };
    }
    if (!coverage.rowUuids.every((u)=>l.has(u))) {
        return {
            kind: "refuse",
            reason: "covered_messages_changed"
        };
    }
    if (kept.some((u)=>a(u) && !l.has(u.uuid))) {
        return {
            kind: "refuse",
            reason: "kept_message_missing"
        };
    }
    if (sent.messages.slice(0, sent.messages.findLastIndex(a)).some((u)=>u.type === "assistant" && !a(u))) {
        return {
            kind: "refuse",
            reason: "unseen_reply"
        };
    }
    let p = sent.rowUuids.slice(0, sent.rowUuids.findLastIndex((u)=>coverage.seenUuids.has(u)) + 1);
    if (instructions || !received.messages.some(({ uuid })=>uuid === coverage.lastUuid) || !sn(received.rowUuids, p)) {
        return {
            kind: "refuse",
            reason: "hook_rewrite"
        };
    }
    let m = (u)=>u.type !== "progress" && !a(u);
    let tail = received.messages.filter(m);
    let f = fit && ji(fit, received.messages, [
        ...kept,
        ...tail
    ]);
    if (f?.givesWay) {
        return {
            kind: "refuse",
            reason: "would_not_fit",
            sizes: f.sizes
        };
    }
    return {
        kind: "reuse",
        tail,
        earlyTailCount: received.messages.slice(0, received.messages.findLastIndex(a)).reduce((acc, item)=>acc + (m(item) ? 1 : 0), 0),
        headReordered: !sn(received.rowUuids, coverage.rowUuids),
        sizes: f?.sizes
    };
}
function ji({ thresholdTokens, windowTokens, liveTokens, madeFromTokens, summary, sizeOf }, messages, l) {
    let d = new Set(l.map((g)=>g.uuid));
    let p = new Set(messages.map((g)=>g.uuid));
    let m = messages.filter((g)=>!d.has(g.uuid));
    let c = messages.filter((g)=>d.has(g.uuid));
    let f = l.filter((g)=>!p.has(g.uuid));
    let postSwapTokens = Math.max(liveTokens - sizeOf(m), sizeOf(c)) + sizeOf([
        ...summary,
        ...f
    ]);
    return {
        sizes: {
            postSwapTokens,
            thresholdTokens,
            windowTokens
        },
        givesWay: postSwapTokens >= thresholdTokens && madeFromTokens < windowTokens
    };
}
function sn(rowUuids, t) {
    return t.every((o, r)=>rowUuids[r] === o);
}
function dRo(e) {
    return e.findLast((o)=>o.type === "user" && !o.isMeta && o.toolUseResult === undefined && (typeof o.message.content === "string" || !o.message.content.some((r)=>r.type === "tool_result")))?.uuid ?? "";
}
function yMs(e, t, o) {
    e.recordVeto(N8e(t), dRo(o));
}
class ke {
    #e = undefined;
    get current() {
        return this.#e;
    }
    adopt(e) {
        this.#e = e;
    }
}
class xe {
    #e = null;
    #t = null;
    mainAgentId(e) {
        this.#e ??= So(e);
        return this.#e;
    }
    projectDir() {
        return this.#t;
    }
    replaceProjectDir(e) {
        this.#t = e;
    }
}
class Re {
    openToolUseId;
    answeredThisSession = false;
    get answered() {
        return this.answeredThisSession;
    }
    markAnswered() {
        this.answeredThisSession = true;
    }
    isOpenElsewhere(e) {
        return this.openToolUseId !== undefined && this.openToolUseId !== e;
    }
    open(e) {
        this.openToolUseId = e;
    }
    closeFor(e) {
        if (e !== undefined && this.openToolUseId === e) {
            this.openToolUseId = undefined;
        }
    }
}
class Te {
    granted = false;
    isGranted() {
        return this.granted;
    }
    grant() {
        this.granted = true;
    }
}
class Pe {
    inFlight = null;
    startedForTurnEnd = false;
    reset() {
        this.inFlight?.abort();
        this.inFlight = null;
        this.startedForTurnEnd = false;
    }
}
class Ae {
    firstSyncPromise = null;
    accountListing = "pending";
    syncErrors = [];
    lastRoundListed = false;
    lastCompleteList = null;
    syncedLaneOpened = false;
    removalsDeferredHere = new Set;
    pendingTrashRemovals = [];
    ensureBucketRoot = null;
    deferredRelist = null;
    missingEntry = {
        resync: null,
        resyncAt: -Infinity,
        swept: false
    };
    settingsInstall = {
        current: null,
        next: null,
        loaded: null
    };
}
class Me {
    abortController = null;
    eligibleTurns = 0;
    unusedInARow = 0;
    askOnNextTurn() {
        this.eligibleTurns = 0;
    }
    reset() {
        this.abortController?.abort();
        this.abortController = null;
    }
    arm() {
        let e = new AbortController;
        this.abortController = e;
        return e;
    }
}
class Le {
    #e = undefined;
    #t = undefined;
    ccrSessionID() {
        return this.#e;
    }
    latchCcrSessionID(e) {
        this.#e = e;
    }
    syncEnabled() {
        return this.#t;
    }
    latchSyncEnabled(e) {
        this.#t = e;
        return e;
    }
}
class Ie {
    autonomousPreambleDelivered = false;
    lastLoopFileDelivered = null;
    reset() {
        this.autonomousPreambleDelivered = false;
        this.lastLoopFileDelivered = null;
    }
}
class Fe {
    exchanges = [];
    replace(e) {
        this.exchanges = e;
    }
    append(question, response, fallbackNotice) {
        this.exchanges = [
            ...this.exchanges,
            {
                question,
                response,
                ...fallbackNotice && {
                    fallbackNotice
                }
            }
        ].slice(-20);
    }
    pendingReopen = null;
    reopenAway = false;
    get reopenPending() {
        return this.pendingReopen !== null;
    }
    armReopen(e, t) {
        if (this.pendingReopen) {
            this.pendingReopen.owners.add(e);
            return;
        }
        this.pendingReopen = {
            owners: new Set([
                e
            ]),
            cancel: t()
        };
    }
    clearPendingReopen(e) {
        let pendingReopen = this.pendingReopen;
        if (!pendingReopen) {
            this.reopenAway = false;
            return;
        }
        if (e !== undefined) {
            pendingReopen.owners.delete(e);
            if (pendingReopen.owners.size > 0) {
                return;
            }
        }
        pendingReopen.cancel();
        this.pendingReopen = null;
        this.reopenAway = false;
    }
    reopener = null;
    setReopener(e) {
        this.reopener = e;
    }
    get hasReopener() {
        return this.reopener !== null;
    }
    reopenNow() {
        return this.reopener?.() ?? false;
    }
    inFlightQuestions = [];
    get inFlight() {
        return this.inFlightQuestions.at(-1) ?? null;
    }
    pendingBesidesTop() {
        return this.inFlightQuestions.slice(0, -1);
    }
    setInFlight(e) {
        if (!this.inFlightQuestions.includes(e)) {
            this.inFlightQuestions = [
                ...this.inFlightQuestions,
                e
            ];
        }
    }
    clearInFlight(e) {
        if (this.inFlightQuestions.includes(e)) {
            this.inFlightQuestions = this.inFlightQuestions.filter((t)=>t !== e);
        }
    }
}
const _i = 16;
class De {
    pending = null;
    shownThisSession = false;
    changed = Oe();
    submitted = [];
    submittedChanged = Oe();
    subscribe = this.changed.subscribe;
    getSnapshot = ()=>this.pending;
    subscribeSubmitted = this.submittedChanged.subscribe;
    submit(e) {
        if (this.shownThisSession) {
            return;
        }
        if (this.submitted.length >= _i) {
            this.submitted.shift();
        }
        this.submitted.push(e);
        this.submittedChanged.emit();
    }
    takeSubmitted() {
        let submitted = this.submitted;
        this.submitted = [];
        return submitted;
    }
    offer(e) {
        if (this.shownThisSession) {
            return;
        }
        this.pending = e;
        this.changed.emit();
    }
    dismiss() {
        if (this.pending !== null) {
            this.pending = null;
            this.changed.emit();
        }
    }
    markShown() {
        this.shownThisSession = true;
    }
}
class E2n {
    lastEmittedAt = new Map;
    shouldEmit(e, t, o) {
        let r = this.lastEmittedAt.get(e) || 0;
        if (t - r < o) {
            return false;
        }
        if (this.lastEmittedAt.size >= 100) {
            let i = this.lastEmittedAt.keys().next().value;
            if (i !== undefined) {
                this.lastEmittedAt.delete(i);
            }
        }
        this.lastEmittedAt.set(e, t);
        return true;
    }
}
const $8e = Symbol("permission-stash-evicted");
class Be {
    entriesCap;
    evictedKeysCap;
    lanes = {
        write: new Map,
        read: new Map
    };
    evicted = {
        write: new Set,
        read: new Set
    };
    poisoned = {
        write: false,
        read: false
    };
    identities = new Map;
    identitiesEvicted = new Set;
    identitiesPoisoned = false;
    constructor(e = 256, t = 1048576){
        this.entriesCap = e;
        this.evictedKeysCap = t;
    }
    stash(e, t, o, r = "write") {
        if (e === undefined) {
            return;
        }
        let i = this.lanes[r];
        let s = this.evicted[r];
        let a = He(e, t);
        if (s.has(a)) {
            return;
        }
        let l = i.get(a);
        if (l !== undefined) {
            let d = new Set(o);
            i.set(a, l.filter((p)=>d.has(p)));
            return;
        }
        if (i.size >= this.entriesCap) {
            let d = i.keys().next().value;
            if (d !== undefined) {
                i.delete(d);
                s.add(d);
                if (s.size > this.evictedKeysCap) {
                    this.poisoned[r] = true;
                    let p = s.values().next().value;
                    if (p !== undefined) {
                        s.delete(p);
                    }
                }
            }
        }
        i.set(a, o);
    }
    holds(e, t, o = "write") {
        return e !== undefined && this.lanes[o].has(He(e, t));
    }
    stashIdentity(e, t, o) {
        if (e === undefined) {
            return;
        }
        let r = this.identities.get(e);
        let i = r?.get(t);
        if (r !== undefined && i !== undefined) {
            if (i === null || o === null || i.dev !== o.dev || i.ino !== o.ino) {
                r.set(t, null);
            }
            return;
        }
        let s = this.identitiesEvicted.has(e) || this.identitiesPoisoned;
        if (r === undefined) {
            if (!s && this.identities.size >= this.entriesCap) {
                let a = this.identities.keys().next().value;
                if (a !== undefined) {
                    this.identities.delete(a);
                    this.identitiesEvicted.add(a);
                    if (this.identitiesEvicted.size > this.evictedKeysCap) {
                        this.identitiesPoisoned = true;
                        let l = this.identitiesEvicted.values().next().value;
                        if (l !== undefined) {
                            this.identitiesEvicted.delete(l);
                        }
                    }
                }
            }
            r = new Map;
            this.identities.set(e, r);
        }
        r.set(t, s ? null : o);
    }
    takeIdentity(e, t) {
        if (e === undefined) {
            return;
        }
        let o = this.identities.get(e);
        let r = o?.get(t);
        if (o?.delete(t) && o.size === 0) {
            this.identities.delete(e);
        }
        return r;
    }
    consume(e, t, o = "write") {
        if (e === undefined) {
            return;
        }
        let r = this.lanes[o];
        let i = He(e, t);
        let s = r.get(i);
        let a = s === undefined && (this.evicted[o].delete(i) || this.poisoned[o]);
        let l = `${e}\x00`;
        for (let d of r.keys()){
            if (d.startsWith(l)) {
                r.delete(d);
            }
        }
        if (o === "read") {
            this.identities.delete(e);
            this.identitiesEvicted.delete(e);
        }
        if (a) {
            return $8e;
        }
        return s;
    }
}
function He(e, t) {
    return `${e}\x00${t}`;
}
const an = "NoProjectDirectoryError";
class BP extends Error {
    name = an;
    constructor(){
        super("This session has no working directory.");
    }
}
function Sxr(e) {
    try {
        return e instanceof Error && e.name === an;
    } catch  {
        return false;
    }
}
function bo({ project }) {
    if (project === null) {
        throw new BP;
    }
    return project;
}
function wxr(e) {
    return ln({
        kind: "root",
        host: e.host,
        id: e.id,
        parentId: e.parentId
    }, e.project, e.project?.isolationRoot);
}
function O(e, t) {
    let o = t.originalCwd ?? e?.originalCwd;
    let r = t.projectRoot ?? e?.projectRoot;
    let i = t.cwd ?? e?.cwd;
    if (o === undefined && r === undefined && i === undefined) {
        return null;
    }
    if (o === undefined || r === undefined || i === undefined) {
        throw new BP;
    }
    return {
        originalCwd: On(o),
        projectRoot: On(r),
        cwd: On(i)
    };
}
function ln(e, t, o) {
    let r = {
        project: t === null ? null : O(null, t)
    };
    let isolationRoot = o;
    let s = Oe();
    let observers = e.kind === "fork" ? e.root.observers : new ie;
    let autonomousLoopPreamble = e.kind === "fork" ? e.root.autonomousLoopPreamble : new Ie;
    let precompute = e.kind === "fork" ? e.root.precompute : new be;
    let p = {
        get originalCwd () {
            return bo(r).originalCwd;
        },
        get projectRoot () {
            return bo(r).projectRoot;
        },
        get cwd () {
            return bo(r).cwd;
        },
        get isolationRoot () {
            return isolationRoot;
        }
    };
    let m = {
        host: e.kind === "fork" ? e.root.host : e.host,
        get id () {
            if (e.kind === "fork") {
                return e.root.id;
            }
            return e.id;
        },
        get parentId () {
            if (e.kind === "fork") {
                return e.root.parentId;
            }
            return e.parentId;
        },
        get root () {
            if (e.kind === "fork") {
                return e.root;
            }
            return m;
        },
        get project () {
            if (r.project === null) {
                return null;
            }
            return p;
        },
        observers,
        autonomousLoopPreamble,
        btwHistory: e.kind === "fork" ? e.root.btwHistory : new Fe,
        ccrRecap: e.kind === "fork" ? e.root.ccrRecap : new Pe,
        conversationLatches: e.kind === "fork" ? e.root.conversationLatches : new se,
        costLedger: e.kind === "fork" ? e.root.costLedger : new ae,
        engineStore: e.kind === "fork" ? e.root.engineStore : new ke,
        usageCreditsOnlyModelConsentSlots: e.kind === "fork" ? e.root.usageCreditsOnlyModelConsentSlots : new le,
        hookRegistry: e.kind === "fork" ? e.root.hookRegistry : new de,
        identity: e.kind === "fork" ? e.root.identity : new xe,
        invokedSkills: e.kind === "fork" ? e.root.invokedSkills : new ue,
        mcpSessionWiring: e.kind === "fork" ? e.root.mcpSessionWiring : new ce,
        modelSelection: e.kind === "fork" ? e.root.modelSelection : new pe,
        promptAssembly: e.kind === "fork" ? e.root.promptAssembly : new fe,
        promptSuggestion: e.kind === "fork" ? e.root.promptSuggestion : new Me,
        pendingHint: e.kind === "fork" ? e.root.pendingHint : new De,
        pluginsSync: e.kind === "fork" ? e.root.pluginsSync : new Ae,
        precompute,
        requestJournal: e.kind === "fork" ? e.root.requestJournal : new ge,
        sessionCron: e.kind === "fork" ? e.root.sessionCron : new he,
        sessionFlags: e.kind === "fork" ? e.root.sessionFlags : new me,
        sessionRefsGate: e.kind === "fork" ? e.root.sessionRefsGate : new Le,
        sessionScratch: e.kind === "fork" ? e.root.sessionScratch : new Se,
        surfaceCapabilities: e.kind === "fork" ? e.root.surfaceCapabilities : new ve,
        toolProgressThrottle: e.kind === "fork" ? e.root.toolProgressThrottle : new E2n,
        userPresence: e.kind === "fork" ? e.root.userPresence : new ye,
        workflowUsageConsent: e.kind === "fork" ? e.root.workflowUsageConsent : new Te,
        outsideReadPrompt: e.kind === "fork" ? e.root.outsideReadPrompt : new Re,
        writePermissionStash: e.kind === "fork" ? e.root.writePermissionStash : new Be,
        subscribe (c) {
            let f = s.subscribe(c);
            if (e.kind !== "fork") {
                return f;
            }
            let e_root = e.root;
            let { id, parentId } = e_root;
            let b = e_root.subscribe(()=>{
                if (e_root.id === id && e_root.parentId === parentId) {
                    return;
                }
                id = e_root.id;
                parentId = e_root.parentId;
                c();
            });
            return ()=>{
                f();
                b();
            };
        },
        setCwd (c) {
            m.update({
                project: {
                    cwd: c
                }
            });
        },
        setIsolationRoot (c) {
            if (c !== isolationRoot) {
                isolationRoot = c;
                s.emit();
            }
        },
        withProject (c) {
            return ln({
                kind: "fork",
                root: m.root
            }, O(r.project, c), c.isolationRoot ?? isolationRoot);
        },
        update (c) {
            let f = c.project === undefined ? r.project : c.project === null ? null : O(r.project, c.project);
            let u = false;
            if (c.id !== undefined || "parentId" in c) {
                if (e.kind === "fork") {
                    throw Error("A withProject fork cannot re-identify the session — update the root session instead");
                }
                if (c.id !== undefined && c.id !== e.id) {
                    e.id = c.id;
                    u = true;
                }
                if ("parentId" in c && c.parentId !== e.parentId) {
                    e.parentId = c.parentId;
                    u = true;
                }
            }
            if (f?.originalCwd !== r.project?.originalCwd || f?.projectRoot !== r.project?.projectRoot || f?.cwd !== r.project?.cwd) {
                r.project = f;
                u = true;
            }
            let g = c.project?.isolationRoot;
            if (g !== undefined && g !== isolationRoot) {
                isolationRoot = g;
                u = true;
            }
            if (u) {
                s.emit();
            }
        }
    };
    return m;
}
class lt {
    #e;
    #t = new WeakMap;
    constructor(e){
        this.#e = e;
    }
    peek(e) {
        return this.#t.get(e.root);
    }
    of({ root }) {
        let o = this.#t.get(root);
        if (o !== undefined) {
            return o;
        }
        let r = this.#e();
        this.#t.set(root, r);
        return r;
    }
    drop(e) {
        this.#t.delete(e.root);
    }
}
class Ue {
    #e = false;
    #t = null;
    #n = false;
    #o = undefined;
    #r = false;
    #i = false;
    #a = false;
    #u = false;
    #l = undefined;
    #d = false;
    #c = false;
    #p = null;
    #s = null;
    #f = new Map;
    #h = "cli";
    #g = "fresh";
    #v = undefined;
    #S = false;
    #m = false;
    #C = [];
    #b = false;
    #y = false;
    #R = false;
    #k = new Set;
    #T = false;
    #x = "none";
    #A = false;
    #M = false;
    #P = false;
    #w = false;
    #L = false;
    #I = undefined;
    #F = undefined;
    #E = undefined;
    #D = false;
    #H = false;
    #B = false;
    #U = null;
    #j = true;
    #_ = null;
    #O = false;
    #z = Oe();
    #q = null;
    #W = false;
    #N = false;
    #G = {};
    #K = null;
    #V = "none";
    #J = undefined;
    isInteractive() {
        return this.#e;
    }
    replaceIsInteractive(e) {
        this.#e = e;
    }
    printOutputFormat() {
        return this.#t;
    }
    replacePrintOutputFormat(e) {
        this.#t = e;
    }
    thinkingDisplayExplicit() {
        return this.#n;
    }
    replaceThinkingDisplayExplicit(e) {
        this.#n = e;
    }
    permissionPromptToolName() {
        return this.#o;
    }
    replacePermissionPromptToolName(e) {
        this.#o = e;
    }
    hasStreamingInput() {
        return this.#r;
    }
    replaceHasStreamingInput(e) {
        this.#r = e;
    }
    singleShotPrintSession() {
        return this.#i;
    }
    replaceSingleShotPrintSession(e) {
        this.#i = e;
    }
    printInputClosed() {
        return this.#a;
    }
    markPrintInputClosed() {
        this.#a = true;
    }
    modelOverrideOptOutForSession() {
        return this.#u;
    }
    replaceModelOverrideOptOutForSession(e) {
        this.#u = e;
    }
    rendererMode() {
        return this.#l;
    }
    replaceRendererMode(e) {
        this.#l = e;
    }
    strictToolResultPairing() {
        return this.#d;
    }
    replaceStrictToolResultPairing(e) {
        this.#d = e;
    }
    restrictedSession() {
        return this.#c;
    }
    replaceRestrictedSession(e) {
        this.#c = e;
    }
    workspaceRestrictionState() {
        return this.#p;
    }
    replaceWorkspaceRestrictionState(e) {
        this.#p = e;
    }
    replaceWorkspaceRestrictionUnsubscribe(e) {
        this.#s?.();
        this.#s = e;
    }
    restrictedWorkspaceRoots() {
        return this.#f;
    }
    addRestrictedWorkspaceRoot(e, t) {
        this.#f.set(e, t);
    }
    clearRestrictedWorkspaceRoots() {
        this.#f = new Map;
    }
    clientType() {
        return this.#h;
    }
    replaceClientType(e) {
        this.#h = e;
    }
    sessionStartType() {
        return this.#g;
    }
    replaceSessionStartType(e) {
        this.#g = e;
    }
    questionPreviewFormat() {
        return this.#v;
    }
    replaceQuestionPreviewFormat(e) {
        this.#v = e;
    }
    extendedQuestionsEnabled() {
        return this.#S;
    }
    replaceExtendedQuestionsEnabled(e) {
        this.#S = e;
    }
    questionOptionDescriptionsOptional() {
        return this.#m;
    }
    replaceQuestionOptionDescriptionsOptional(e) {
        this.#m = e;
    }
    replConfigArgv() {
        return this.#C;
    }
    replaceReplConfigArgv(e) {
        this.#C = e;
    }
    userMsgOptIn() {
        return this.#b;
    }
    replaceUserMsgOptIn(e) {
        this.#b = e;
    }
    searchToolsOptIn() {
        return this.#y;
    }
    replaceSearchToolsOptIn(e) {
        this.#y = e;
    }
    todoToolsOptIn() {
        return this.#R;
    }
    replaceTodoToolsOptIn(e) {
        this.#R = e;
    }
    toolsOmittedByLaunchList() {
        return this.#k;
    }
    replaceToolsOmittedByLaunchList(e) {
        this.#k = e;
    }
    wizardOperatorToolsEnabled() {
        return this.#T;
    }
    replaceWizardOperatorToolsEnabled(e) {
        this.#T = e;
    }
    pollEventIngress() {
        return this.#x;
    }
    markPollEventIngress(e) {
        this.#x = e;
    }
    ownEventDeliveryRequested() {
        return this.#A && !this.#M;
    }
    replaceOwnEventDeliveryHeld(e) {
        this.#M = e;
    }
    markOwnEventDeliveryRequested() {
        this.#A = true;
    }
    sdkAgentProgressSummariesEnabled() {
        return this.#P;
    }
    replaceSdkAgentProgressSummariesEnabled(e) {
        this.#P = e;
    }
    sessionPersistenceDisabled() {
        return this.#w;
    }
    replaceSessionPersistenceDisabled(e) {
        this.#w = e;
    }
    diskless() {
        return this.#L;
    }
    replaceDiskless(e) {
        this.#L = e;
    }
    ccrSessionUrl() {
        return this.#I;
    }
    replaceCcrSessionUrl(e) {
        this.#I = e;
    }
    ccrDerivedSurface() {
        return this.#F;
    }
    replaceCcrDerivedSurface(e) {
        this.#F = e;
    }
    toolsMachine() {
        return this.#E;
    }
    replaceToolsMachine(e) {
        this.#E = e;
    }
    sessionBypassPermissionsMode() {
        return this.#D;
    }
    replaceSessionBypassPermissionsMode(e) {
        this.#D = e;
    }
    disableSlashCommands() {
        return this.#H;
    }
    replaceDisableSlashCommands(e) {
        this.#H = e;
    }
    disableFileMentions() {
        return this.#B;
    }
    replaceDisableFileMentions(e) {
        this.#B = e;
    }
    sessionUploadsDir() {
        return this.#U;
    }
    replaceSessionUploadsDir(e) {
        this.#U = e;
    }
    mayForwardHomeSettings() {
        return this.#j;
    }
    replaceMayForwardHomeSettings(e) {
        this.#j = e;
    }
    homeSettingsHostConsent() {
        return this.#_;
    }
    replaceHomeSettingsHostConsent(e) {
        this.#_ = e;
    }
    scheduledTasksEnabled() {
        return this.#O;
    }
    replaceScheduledTasksEnabled(e) {
        let t = e && !this.#O;
        this.#O = e;
        if (t) {
            this.#z.emit();
        }
    }
    onScheduledTasksEnabled(e) {
        return this.#z.subscribe(e);
    }
    initJsonSchema() {
        return this.#q;
    }
    replaceInitJsonSchema(e) {
        this.#q = e;
    }
    cliSessionConfigCarried() {
        return this.#W;
    }
    replaceCliSessionConfigCarried(e) {
        this.#W = e;
    }
    forkRestrictedLaunchConfig() {
        return this.#N;
    }
    replaceForkRestrictedLaunchConfig(e) {
        this.#N = e;
    }
    forkReplayLaunchConfig() {
        return this.#G;
    }
    spareClaimState() {
        return this.#V;
    }
    replaceSpareClaimState(e) {
        this.#V = e;
    }
    spareParkedAtMs() {
        return this.#J;
    }
    replaceSpareParkedAtMs(e) {
        this.#J = e;
    }
    replaceForkReplayLaunchConfig(e) {
        this.#G = e;
    }
    projectConfigRoot() {
        return this.#K;
    }
    replaceProjectConfigRoot(e) {
        this.#K = e;
    }
    reset() {
        this.#e = false;
        this.#t = null;
        this.#V = "none";
        this.#J = undefined;
        this.#n = false;
        this.#o = undefined;
        this.#r = false;
        this.#i = false;
        this.#a = false;
        this.#u = false;
        this.#l = undefined;
        this.#d = false;
        this.#c = false;
        this.#p = null;
        this.replaceWorkspaceRestrictionUnsubscribe(null);
        this.#f = new Map;
        this.#h = "cli";
        this.#g = "fresh";
        this.#v = undefined;
        this.#S = false;
        this.#m = false;
        this.#C = [];
        this.#b = false;
        this.#y = false;
        this.#R = false;
        this.#k = new Set;
        this.#T = false;
        this.#x = "none";
        this.#A = false;
        this.#M = false;
        this.#P = false;
        this.#w = false;
        this.#L = false;
        this.#I = undefined;
        this.#F = undefined;
        this.#E = undefined;
        this.#D = false;
        this.#H = false;
        this.#B = false;
        this.#U = null;
        this.#j = true;
        this.#_ = null;
        this.#O = false;
        this.#q = null;
        this.#W = false;
        this.#N = false;
        this.#G = {};
        this.#K = null;
    }
}
class je {
    #e = undefined;
    #t = [];
    #n = undefined;
    #o = undefined;
    #r = null;
    #i = null;
    #a = false;
    #u = dn();
    #l = null;
    #d = false;
    flagSettingsPath() {
        return this.#e;
    }
    replaceFlagSettingsPath(e) {
        this.#e = e;
    }
    flagAgentsFilePaths() {
        return this.#t;
    }
    replaceFlagAgentsFilePaths(e) {
        this.#t = e;
    }
    flagSettingsExpectedContent() {
        return this.#n;
    }
    replaceFlagSettingsExpectedContent(e) {
        this.#n = e;
    }
    flagSettingsFilePinnedContent() {
        return this.#o;
    }
    replaceFlagSettingsFilePinnedContent(e) {
        this.#o = e;
    }
    flagSettingsInline() {
        return this.#r;
    }
    replaceFlagSettingsInline(e) {
        this.#r = e;
    }
    parentManagedSettings() {
        return this.#i;
    }
    replaceParentManagedSettings(e) {
        this.#i = e;
    }
    parentManagedSettingsInvalid() {
        return this.#a;
    }
    replaceParentManagedSettingsInvalid(e) {
        this.#a = e;
    }
    allowedSettingSources() {
        return this.#u;
    }
    replaceAllowedSettingSources(e) {
        this.#u = e;
    }
    allowedSettingSourcesWithoutRepoDirSources() {
        let of = this.#u;
        if (this.#l?.of !== of) {
            this.#l = {
                of,
                result: of.filter((t)=>t !== "projectSettings" && t !== "localSettings")
            };
        }
        return this.#l.result;
    }
    useCoworkPlugins() {
        return this.#d;
    }
    replaceUseCoworkPlugins(e) {
        this.#d = e;
    }
    reset() {
        this.#e = undefined;
        this.#t = [];
        this.#n = undefined;
        this.#o = undefined;
        this.#r = null;
        this.#i = null;
        this.#a = false;
        this.#u = dn();
        this.#l = null;
        this.#d = false;
    }
}
function dn() {
    return [
        "userSettings",
        "projectSettings",
        "localSettings",
        "flagSettings",
        "policySettings"
    ];
}
class _e {
    #e = [];
    #t = [];
    #n = [];
    #o = undefined;
    #r = new Map;
    #i = new Map;
    #a = [];
    #u = [];
    #l = false;
    #d = undefined;
    #c = undefined;
    #p = undefined;
    inlinePlugins() {
        return this.#e;
    }
    replaceInlinePlugins(e) {
        this.#e = e;
    }
    inlinePluginsNoMcp() {
        return this.#t;
    }
    replaceInlinePluginsNoMcp(e) {
        this.#t = e;
    }
    inlinePluginUrls() {
        return this.#n;
    }
    replaceInlinePluginUrls(e) {
        this.#n = e;
    }
    syncedPluginDirs() {
        return this.#o ?? [];
    }
    syncedPluginDirsRegistered() {
        return this.#o !== undefined;
    }
    syncedPluginAttestation(e) {
        return this.#r.get(e);
    }
    replaceSyncedPluginDirs(e, t = new Map) {
        this.#o = e;
        this.#r = t;
        this.#i = this.#s(this.#i);
    }
    clearSyncedPluginDirs() {
        this.#o = undefined;
        this.#r = new Map;
        this.#i = new Map;
    }
    attestedOfficialPluginMarketplace(e) {
        return this.#i.get(e);
    }
    replaceAttestedOfficialPluginIds(e) {
        this.#i = this.#s(e);
    }
    #s(e) {
        let t = new Set([
            ...this.#r.values()
        ].map((o)=>`${o.pluginName}@${o.marketplace}`));
        return new Map([
            ...e
        ].filter(([o, r])=>t.has(`${o.slice(0, o.lastIndexOf("@"))}@${r}`)));
    }
    additionalDirectoriesForClaudeMd() {
        return this.#a;
    }
    replaceAdditionalDirectoriesForClaudeMd(e) {
        this.#a = e;
    }
    allowedChannels() {
        return this.#u;
    }
    replaceAllowedChannels(e) {
        this.#u = e;
    }
    hasDevChannels() {
        return this.#l;
    }
    replaceHasDevChannels(e) {
        this.#l = e;
    }
    sessionSkillAllowlist() {
        return this.#d;
    }
    replaceSessionSkillAllowlist(e) {
        this.#d = e;
    }
    chromeFlagOverride() {
        return this.#c;
    }
    replaceChromeFlagOverride(e) {
        this.#c = e;
    }
    teammateAgentId() {
        return this.#p;
    }
    replaceTeammateAgentId(e) {
        this.#p = e;
    }
    reset() {
        this.#e = [];
        this.#t = [];
        this.#n = [];
        this.clearSyncedPluginDirs();
        this.#a = [];
        this.#u = [];
        this.#l = false;
        this.#d = undefined;
        this.#c = undefined;
        this.#p = undefined;
    }
}
class qe {
    #e = null;
    #t = null;
    modelStrings() {
        return this.#e;
    }
    replaceModelStrings(e) {
        this.#e = e;
    }
    invalidate() {
        this.#e = null;
    }
    admin3PSteeringSnapshot() {
        return this.#t;
    }
    recordAdmin3PSteeringSnapshot(e) {
        this.#t = e;
    }
    reset() {
        this.#e = null;
        this.#t = null;
    }
}
const un = [];
class We {
    #e = [];
    #t = [];
    #n = undefined;
    errorLog() {
        return this.#e;
    }
    recordError(e) {
        if (this.#e.length >= 100) {
            this.#e.shift();
        }
        this.#e.push(e);
    }
    recordSlowOperation(e, t) {}
    slowOperations() {
        if (this.#t.length === 0) {
            return un;
        }
        let e = Date.now();
        if (this.#t.some((t)=>e - t.timestamp >= 10000)) {
            this.#t = this.#t.filter((t)=>e - t.timestamp < 10000);
            if (this.#t.length === 0) {
                return un;
            }
        }
        return this.#t;
    }
    recordDevBarAlert(e) {}
    devBarAlert() {
        let e = this.#n;
        if (e && Date.now() - e.timestamp >= 60000) {
            this.#n = undefined;
            return;
        }
        return e;
    }
    reset() {
        this.#e = [];
        this.#t = [];
        this.#n = undefined;
    }
}
const _Ms = 100;
function cn() {
    return {
        rateTokens: null,
        rateLastRefillMs: null,
        featureOkLogged: false,
        reportedDropReasons: new Set
    };
}
class Ne {
    #e = null;
    #t = null;
    #n = null;
    #o = null;
    #r = null;
    #i = null;
    #a = null;
    #u = null;
    #l = null;
    #d = null;
    #c = null;
    #p = null;
    #s = null;
    #f = [];
    #h = null;
    #g = cn();
    #v = null;
    #S = null;
    #m = null;
    #C = {
        direct: null,
        proxied: null
    };
    #b = null;
    #y = null;
    installMeter(e, t, { omitUnits = false } = {}) {
        this.#e = e;
        let r = (i)=>{
            if (omitUnits) {
                return undefined;
            }
            return i;
        };
        this.#t = t("claude_code.session.count", {
            description: "Count of CLI sessions started"
        });
        this.#n = t("claude_code.lines_of_code.count", {
            description: "Count of lines of code modified, with the 'type' attribute indicating whether lines were added or removed and the 'model' attribute indicating which model made the change"
        });
        this.#o = t("claude_code.pull_request.count", {
            description: "Number of pull requests created"
        });
        this.#r = t("claude_code.commit.count", {
            description: "Number of git commits created"
        });
        this.#i = t("claude_code.cost.usage", {
            description: "Cost of the Claude Code session",
            unit: r("USD")
        });
        this.#a = t("claude_code.token.usage", {
            description: "Number of tokens used",
            unit: r("tokens")
        });
        this.#u = t("claude_code.code_edit_tool.decision", {
            description: "Count of code editing tool permission decisions (accept/reject) for Edit, Write, and NotebookEdit tools"
        });
        this.#l = t("claude_code.active_time.total", {
            description: "Total active time in seconds",
            unit: r("s")
        });
    }
    meter() {
        return this.#e;
    }
    sessionCounter() {
        return this.#t;
    }
    locCounter() {
        return this.#n;
    }
    prCounter() {
        return this.#o;
    }
    commitCounter() {
        return this.#r;
    }
    costCounter() {
        return this.#i;
    }
    tokenCounter() {
        return this.#a;
    }
    codeEditToolDecisionCounter() {
        return this.#u;
    }
    activeTimeCounter() {
        return this.#l;
    }
    statsStore() {
        return this.#d;
    }
    replaceStatsStore(e) {
        this.#d = e;
    }
    loggerProvider() {
        return this.#c;
    }
    replaceLoggerProvider(e) {
        this.#c = e;
    }
    eventLogger() {
        return this.#p;
    }
    eventLoggerOwner() {
        return this.#s;
    }
    attachEventLogger(e, t) {
        this.#p = e;
        this.#s = e ? t : null;
        if (!e) {
            return;
        }
        let o = this.#f;
        this.#f = null;
        if (o) {
            for (let r of o){
                e.emit(r);
            }
        }
    }
    bufferPendingEvent(e) {
        if (this.#f === null || this.#f.length >= 100) {
            return false;
        }
        this.#f.push(e);
        return true;
    }
    closeWindow(e) {
        this.#f = null;
        this.#h = e;
    }
    windowCloseCause() {
        return this.#h;
    }
    isWindowOpen() {
        return this.#f !== null;
    }
    hostOtel() {
        return this.#g;
    }
    meterProvider() {
        return this.#v;
    }
    replaceMeterProvider(e) {
        this.#v = e;
    }
    tracerProvider() {
        return this.#S;
    }
    replaceTracerProvider(e) {
        this.#S = e;
    }
    cachedTelemetryResource() {
        return this.#m;
    }
    replaceCachedTelemetryResource(e) {
        this.#m = e;
    }
    cachedOtlpHttpAgentFactory(e) {
        return this.#C[e ? "proxied" : "direct"];
    }
    replaceCachedOtlpHttpAgentFactory(e, t) {
        this.#C[e ? "proxied" : "direct"] = t;
    }
    inClusterOtlpTrustRoots() {
        return this.#b;
    }
    replaceInClusterOtlpTrustRoots(e) {
        this.#b = e;
    }
    inClusterOtlpAgentFactory() {
        return this.#y;
    }
    replaceInClusterOtlpAgentFactory(e) {
        this.#y = e;
    }
    reset() {
        this.#e = null;
        this.#t = null;
        this.#n = null;
        this.#o = null;
        this.#r = null;
        this.#i = null;
        this.#a = null;
        this.#u = null;
        this.#l = null;
        this.#d = null;
        this.#c = null;
        this.#p = null;
        this.#s = null;
        this.#f = [];
        this.#h = null;
        this.#g = cn();
        this.#v = null;
        this.#S = null;
        this.#m = null;
        this.#C = {
            direct: null,
            proxied: null
        };
        this.#b = null;
        this.#y = null;
    }
}
class Ge {
    #e = undefined;
    #t = undefined;
    #n = false;
    #o = undefined;
    #r = undefined;
    #i = new Set;
    #a = undefined;
    #u = null;
    #l = null;
    #d = 0;
    #c = false;
    #p = ()=>false;
    #s = null;
    #f = undefined;
    #h = null;
    #g = null;
    sessionIngressToken() {
        return this.#e;
    }
    replaceSessionIngressToken(e) {
        this.#e = e;
    }
    oauthTokenFromFd() {
        return this.#t;
    }
    replaceOauthTokenFromFd(e) {
        this.#t = e;
    }
    oauthTokenFromBgSnapshot() {
        return this.#n;
    }
    replaceOauthTokenFromBgSnapshot(e) {
        this.#n = e;
    }
    oauthScopesFromFd() {
        return this.#o;
    }
    replaceOauthScopesFromFd(e) {
        this.#o = e;
    }
    apiKeyFromFd() {
        return this.#r;
    }
    replaceApiKeyFromFd(e) {
        this.#r = e;
    }
    descriptorAnnouncementConsumed(e) {
        return this.#i.has(e);
    }
    markDescriptorAnnouncementConsumed(e) {
        this.#i.add(e);
    }
    gatewayTokenFromDescriptor() {
        return this.#a;
    }
    replaceGatewayTokenFromDescriptor(e) {
        this.#a = e;
    }
    resetFdCredentialState() {
        this.#e = undefined;
        this.#t = undefined;
        this.#n = false;
        this.#o = undefined;
        this.#r = undefined;
    }
    gatewayAuth() {
        return this.#u;
    }
    replaceGatewayAuth(e) {
        this.#u = e;
    }
    gatewayServerProcess() {
        return this.#c;
    }
    replaceGatewayServerProcess(e) {
        this.#c = e;
    }
    gatewayRequiredByHostPolicy() {
        return this.#p();
    }
    replaceGatewayRequiredByHostPolicyReader(e) {
        this.#p = e;
    }
    authenticatedAccount() {
        return this.#l;
    }
    authenticatedAccountEpoch() {
        return this.#d;
    }
    stampAuthenticatedAccount(e) {
        let t = this.#l;
        if (e !== null && t !== null && e.accountUuid === t.accountUuid && e.emailAddress === t.emailAddress && e.organizationUuid === t.organizationUuid) {
            return;
        }
        this.#d += 1;
        this.#l = e;
    }
    startupPolicySnapshot() {
        return this.#f;
    }
    replaceStartupPolicySnapshot(e) {
        this.#f = e;
    }
    gatewayRefreshInFlight() {
        return this.#s;
    }
    replaceGatewayRefreshInFlight(e) {
        this.#s = e;
    }
    sdkOAuthTokenRefreshCallback() {
        return this.#h;
    }
    replaceSdkOAuthTokenRefreshCallback(e) {
        this.#h = e;
    }
    hostAuthTokenRefreshCallback() {
        return this.#g;
    }
    replaceHostAuthTokenRefreshCallback(e) {
        this.#g = e;
    }
    resetForTests() {
        this.#e = null;
        this.#t = null;
        this.#n = false;
        this.#o = undefined;
        this.#r = null;
        this.#i.clear();
        this.#a = undefined;
        this.#u = null;
        this.#l = null;
        this.#d = 0;
        this.#c = false;
        this.#p = ()=>false;
        this.#s = null;
        this.#f = undefined;
        this.#h = null;
        this.#g = null;
    }
}
class Ke {
    #e = undefined;
    #t = false;
    #n = false;
    #o;
    directConnectServerUrl() {
        return this.#e;
    }
    replaceDirectConnectServerUrl(e) {
        this.#e = e;
    }
    connectNonBlocking() {
        return this.#t;
    }
    replaceConnectNonBlocking(e) {
        this.#t = e;
    }
    strictConfig() {
        return this.#n;
    }
    replaceStrictConfig(e) {
        this.#n = e;
    }
    registerEnsureConnectedClient(e) {
        this.#o = e;
    }
    ensureConnectedClient() {
        return this.#o;
    }
    reset() {
        this.#e = undefined;
        this.#t = false;
        this.#n = false;
    }
}
class Ve {
    #e = null;
    #t = new Map;
    #n = new Map;
    #o = new Set;
    #r = new Set;
    #i = new Set;
    #a = new Map;
    #u = false;
    #l = false;
    #d = false;
    #c = false;
    #p = false;
    #s = false;
    #f = false;
    #h = false;
    #g = false;
    #v = new Set;
    #S = false;
    #m = new Set;
    #C = false;
    #b = false;
    #y = false;
    #R = false;
    #k = new Map;
    #T = undefined;
    #x = undefined;
    #A = false;
    #M = undefined;
    #P = undefined;
    #w = new Map;
    #L = new Map;
    promptCache1hAllowlist() {
        return this.#e;
    }
    replacePromptCache1hAllowlist(e) {
        this.#e = e;
    }
    thinkingTypeOverrides() {
        return this.#t;
    }
    recordThinkingTypeOverride(e, t) {
        this.#t.set(e, t);
    }
    servedModelsByRequestedModel() {
        return this.#n;
    }
    recordServedModels(e, t) {
        this.#n.set(e, t);
    }
    effortUnsupportedModels() {
        return this.#o;
    }
    markEffortUnsupported(e) {
        this.#o.add(e);
    }
    structuredOutputsUnsupportedModels() {
        return this.#r;
    }
    markStructuredOutputsUnsupported(e) {
        this.#r.add(e);
    }
    clearStructuredOutputsUnsupported() {
        this.#r = new Set;
    }
    context1mRefusedModels() {
        return this.#i;
    }
    markContext1mRefused(e) {
        this.#i.add(e);
    }
    clearContext1mRefused() {
        this.#i = new Set;
    }
    refusedBetas(e) {
        return this.#a.get(e) ?? [];
    }
    markBetaRefused(e, t) {
        let o = this.#a.get(e);
        if (o) {
            o.add(t);
        } else {
            this.#a.set(e, new Set([
                t
            ]));
        }
    }
    midConvCachePromotionRejected() {
        return this.#u;
    }
    markMidConvCachePromotionRejected() {
        this.#u = true;
    }
    perTurnEffortOkEmitted() {
        return this.#l;
    }
    markPerTurnEffortOkEmitted() {
        this.#l = true;
    }
    lateToolAdditionsOkEmitted() {
        return this.#d;
    }
    markLateToolAdditionsOkEmitted() {
        this.#d = true;
    }
    toolResultScreeningOkEmitted() {
        return this.#c;
    }
    markToolResultScreeningOkEmitted() {
        this.#c = true;
    }
    toolChangeHeaderRefused() {
        return this.#p;
    }
    markToolChangeHeaderRefused() {
        this.#p = true;
    }
    promptEndMarkRefused() {
        return this.#s;
    }
    markPromptEndMarkRefused() {
        this.#s = true;
    }
    inlineToolsRefused() {
        return this.#f;
    }
    markInlineToolsRefused() {
        this.#f = true;
    }
    inlineToolsOkEmitted() {
        return this.#h;
    }
    markInlineToolsOkEmitted() {
        this.#h = true;
    }
    thinkingResumptionRefused() {
        return this.#g;
    }
    markThinkingResumptionRefused() {
        this.#g = true;
    }
    refusedBetaHeaders() {
        return this.#v;
    }
    markBetaHeaderRefused(e) {
        this.#v.add(e);
    }
    thinkingHighlightsRefused() {
        return this.#S;
    }
    markThinkingHighlightsRefused() {
        this.#S = true;
    }
    toolChangeUnsupportedModels() {
        return this.#m;
    }
    markToolChangeUnsupportedModel(e) {
        this.#m.add(e);
    }
    internalModelFieldsRefused() {
        return this.#C;
    }
    markInternalModelFieldsRefused() {
        this.#C = true;
    }
    internalModelFieldsRefusalAnnounced() {
        return this.#b;
    }
    markInternalModelFieldsRefusalAnnounced() {
        this.#b = true;
    }
    thirdPartyServerClassifierRefused() {
        return this.#y;
    }
    markThirdPartyServerClassifierRefused() {
        this.#y = true;
    }
    threadsHeldForServerClassifier() {
        return this.#R;
    }
    markThreadsHeldForServerClassifier() {
        this.#R = true;
    }
    autoModeUnavailableResponse(e) {
        return this.#k.get(e);
    }
    autoModeUnavailableResponsesInARow(e) {
        let t = 0;
        for (let o of this.#k.values()){
            if (o.runKey === e) {
                t++;
            }
        }
        return t;
    }
    noteAutoModeUnavailableResponse(e, t) {
        this.#k.set(e, t);
    }
    clearAutoModeUnavailableResponses(e) {
        for (let [t, o] of this.#k){
            if (o.runKey === e) {
                this.#k.delete(t);
            }
        }
    }
    setAutoModeUnavailableStopNotice(e) {
        this.#T = e;
    }
    autoModeUnavailableStopNotice() {
        return this.#T;
    }
    setLocalCommandExitCode(e) {
        this.#x = e;
    }
    localCommandExitCode() {
        return this.#x;
    }
    observedGateway() {
        return this.#M;
    }
    serverClassifierFallbackChoice() {
        return this.#P;
    }
    setServerClassifierFallbackChoice(e) {
        this.#P = e;
    }
    clearServerClassifierFallbackChoice() {
        this.#P = undefined;
    }
    noteObservedGateway(e) {
        this.#M ??= e;
    }
    takeServerClassifierFallbackAnnouncement() {
        if (!this.#y || this.#A) {
            return false;
        }
        this.#A = true;
        return true;
    }
    inferenceProfileBackingModels() {
        return this.#w;
    }
    recordInferenceProfileBackingModel(e, t) {
        this.#w.set(e, t);
    }
    foundryDeploymentCapabilities() {
        return this.#L;
    }
    reset() {
        this.#e = null;
        this.#t = new Map;
        this.#n = new Map;
        this.#o = new Set;
        this.#r = new Set;
        this.#i = new Set;
        this.#a = new Map;
        this.#u = false;
        this.#l = false;
        this.#d = false;
        this.#c = false;
        this.#p = false;
        this.#s = false;
        this.#f = false;
        this.#h = false;
        this.#g = false;
        this.#v = new Set;
        this.#S = false;
        this.#m = new Set;
        this.#C = false;
        this.#b = false;
        this.#y = false;
        this.#R = false;
        this.#k.clear();
        this.#T = undefined;
        this.#x = undefined;
        this.#A = false;
        this.#M = undefined;
        this.#P = undefined;
        this.#w = new Map;
        this.#L = new Map;
    }
}
class Je {
    #e = false;
    #t = false;
    longContext1mCreditsBlocked() {
        return this.#e;
    }
    replaceLongContext1mCreditsBlocked(e) {
        this.#e = e;
    }
    usageCreditsRequired() {
        return this.#t;
    }
    replaceUsageCreditsRequired(e) {
        this.#t = e;
    }
    reset() {
        this.#e = false;
        this.#t = false;
    }
}
class ze {
    #e = false;
    #t = false;
    #n = pn;
    #o = Oe();
    selectorGate() {
        return this.#e;
    }
    selectorGateEverOn() {
        return this.#t;
    }
    replaceSelectorGate(e) {
        this.#e = e;
        this.#t ||= e;
    }
    inheritSelectorGateEverOn() {
        this.#t = true;
    }
    resampleSelectorGate(e) {
        let t = this.#e;
        this.#e = e;
        this.#t ||= e;
        if (t !== e) {
            this.#o.emit(e);
        }
    }
    subscribeSelectorGateChanged(e) {
        return this.#o.subscribe(e);
    }
    replaceHostGateSubscription(e) {
        let t = this.#n;
        this.#n = e;
        t();
    }
    dropHostGateSubscription() {
        this.replaceHostGateSubscription(pn);
    }
}
function pn() {}
class Qe {
    started = false;
    stagingReaped = false;
    claim() {
        if (this.started) {
            return false;
        }
        this.started = true;
        return true;
    }
    claimStagingReap() {
        if (this.stagingReaped) {
            return false;
        }
        this.stagingReaped = true;
        return true;
    }
}
class Ye {
    clock;
    backgroundHousekeeping;
    launchOptions;
    settingsSource;
    extensionsConfig;
    modelStringsCache;
    diagnostics;
    telemetryHandles;
    credentialSlots;
    mcpProcessWiring;
    requestLatches;
    accountCreditLatches;
    proactivity;
    constructor(e){
        this.clock = e.clock;
        this.backgroundHousekeeping = e.backgroundHousekeeping;
        this.launchOptions = e.launchOptions;
        this.settingsSource = e.settingsSource;
        this.extensionsConfig = e.extensionsConfig;
        this.modelStringsCache = e.modelStringsCache;
        this.diagnostics = e.diagnostics;
        this.telemetryHandles = e.telemetryHandles;
        this.credentialSlots = e.credentialSlots;
        this.mcpProcessWiring = e.mcpProcessWiring;
        this.requestLatches = e.requestLatches;
        this.accountCreditLatches = e.accountCreditLatches;
        this.proactivity = e.proactivity;
    }
}
function fn() {
    return new Ye({
        clock: new zPr,
        backgroundHousekeeping: new Qe,
        launchOptions: new Ue,
        settingsSource: new je,
        extensionsConfig: new _e,
        modelStringsCache: new qe,
        diagnostics: new We,
        telemetryHandles: new Ne,
        credentialSlots: new Ge,
        mcpProcessWiring: new Ke,
        requestLatches: new Ve,
        accountCreditLatches: new Je,
        proactivity: new ze
    });
}
function Wi(e = iOo()) {
    return wxr({
        host: fn(),
        id: _2n() ?? randomUUID(),
        project: {
            originalCwd: e,
            projectRoot: e,
            cwd: e
        }
    });
}
const y = Wi(q2n);
function B() {
    return n();
}
function n() {
    return k()?.session ?? y;
}
function cs(e) {
    return e.of(y.host);
}
function h() {
    let e = k();
    if (e?.session) {
        return undefined;
    }
    return e;
}
var k = ()=>{};
function nVs(e) {
    k = e;
}
function K() {
    return h()?.sessionId ?? n().id;
}
function Xe() {
    let e = h()?.sessionId;
    if (e) {
        return So(e);
    }
    let t = n();
    return t.identity.mainAgentId(t.id);
}
function hn() {
    let e = n();
    return e.requestJournal.promptIndex() > 0 || e.sessionScratch.chromeAvailabilityStagesLogged().size > 0;
}
function uRo(e = {}) {
    let t = n();
    let parentId = t.id;
    t.sessionScratch.forgetPlanSlug(parentId);
    t.identity.replaceProjectDir(null);
    let r = hn();
    t.requestJournal.replacePromptIndex(0);
    t.requestJournal.replaceLastPersonPrompt(null);
    t.requestJournal.replaceLastCancelledAPIMessageId(null);
    t.requestJournal.clearLastMainThreadRequest();
    t.requestJournal.replaceLastMainRequestId(undefined);
    t.modelSelection.forgetRefusalFallbackOccurred();
    t.sessionFlags.forgetPendingContextCompacted();
    t.sessionScratch.replacePendingBranchLinks();
    t.sessionScratch.replaceChromeAvailabilityStagesLogged(r);
    let i = vn();
    let s = randomUUID();
    t.costLedger.scopeTo(s);
    t.update({
        id: s,
        ...e.setCurrentAsParent && {
            parentId
        }
    });
    mn(t, "clear", i);
    return t.id;
}
function mn(e, t, o) {
    let r = yn.of(e);
    if (o) {
        r.emit(e.id, t, o);
    } else {
        r.emit(e.id, t);
    }
}
function Sn(e) {
    kn.of(e).emit(bo(e).originalCwd);
}
function IPe() {
    let e = h();
    if (e) {
        return e.parentSessionId;
    }
    return n().parentId;
}
function k_(e, t, o = null, r) {
    let i = n();
    let project = r ? O(i.project, bn(r)) : r;
    let a;
    let i_parentId = i.parentId;
    if (i.id !== e) {
        i.sessionScratch.forgetPlanSlug(i.id);
        i.requestJournal.replaceLastCancelledAPIMessageId(null);
        i.requestJournal.replaceLastPersonPrompt(null);
        i.requestJournal.clearLastMainThreadRequest(e);
        if (t !== "fork") {
            i.requestJournal.replaceLastMainRequestId(undefined);
        }
        i.modelSelection.forgetRefusalFallbackOccurred();
        i.sessionFlags.forgetPendingContextCompacted();
        i.sessionScratch.replacePendingBranchLinks();
        i.sessionScratch.replaceChromeAvailabilityStagesLogged(hn());
        a = vn();
        i_parentId = undefined;
    }
    i.identity.replaceProjectDir(o);
    i.update({
        id: e,
        parentId: i_parentId,
        ...project !== undefined && {
            project
        }
    });
    mn(i, t, a);
    if (r?.originalCwd !== undefined) {
        Sn(i);
    }
}
function vn() {
    let e = n();
    let t = e.modelSelection.refusalFallbackModelLatch();
    e.modelSelection.unlatchRefusalFallbackModel("session_transition");
    if (!t || e.modelSelection.mainLoopModelOverride() !== t.fallbackModel) {
        return;
    }
    e.modelSelection.overrideMainLoopModel(t.previousOverride);
    return {
        appStateModel: t.previousAppStateModel,
        forSessionValue: t.previousModelForSession,
        overrideValue: t.previousOverride,
        restoredToExplicitOverride: t.previousOverride !== undefined,
        fallbackModel: t.fallbackModel
    };
}
var yn = new lt(()=>Oe());
function vd(e) {
    return yn.of(n()).subscribe(e);
}
function vxr() {
    return n().sessionScratch.humanAttachmentDigests();
}
function pRo() {
    return n().sessionScratch.inboundAttachmentFiles();
}
function OPe() {
    return n().sessionScratch.filesPlacedByName();
}
function k2n() {
    return n().sessionScratch.filesPlacedByNameRead();
}
function Exr(e) {
    n().sessionScratch.setFilesPlacedByNameRead(e);
}
function zon() {
    return n().sessionScratch.inboundAttachmentDownloads();
}
function jDt() {
    return n().sessionScratch.arrivingInboundFiles();
}
function Bpe() {
    let e = h();
    if (e) {
        return e.sessionProjectDir;
    }
    return n().identity.projectDir();
}
function we() {
    return h()?.originalCwd ?? bo(n()).originalCwd;
}
function Vl() {
    if (h()?.originalCwd === undefined && n().project === null) {
        return null;
    }
    return we();
}
function u6() {
    return Bpt();
}
function BR() {
    return we() === homedir();
}
function cr() {
    return h()?.projectRoot ?? bo(n()).projectRoot;
}
function AS() {
    if (h()?.projectRoot === undefined && n().project === null) {
        return null;
    }
    return cr();
}
function bn(e) {
    return e;
}
function Gon(e) {
    let t = n();
    t.update({
        project: bn(e)
    });
    if (e.originalCwd !== undefined) {
        Sn(t);
    }
}
function jR(originalCwd) {
    Gon({
        originalCwd
    });
}
var kn = new lt(()=>Oe());
function fRo(e) {
    return kn.of(n()).subscribe(e);
}
function gwe(projectRoot) {
    Gon({
        projectRoot
    });
}
function WR() {
    return bo(n()).cwd;
}
function F8e(e) {
    Gon({
        cwd: e
    });
}
function Von() {
    n().costLedger.restartClock();
}
function vBe() {
    return n().costLedger.sessionStartTime();
}
function mRo() {
    return n().host.mcpProcessWiring.directConnectServerUrl();
}
function Use() {
    return n().host.mcpProcessWiring.connectNonBlocking();
}
function gRo(e) {
    n().host.mcpProcessWiring.replaceConnectNonBlocking(e);
}
function hRo() {
    return n().sessionFlags.teardownUnwindRequested();
}
function kxr(e) {
    n().sessionFlags.replaceTeardownUnwindRequested(e);
}
function yRo() {
    return n().sessionFlags.backgroundAutoModeSetupInFlight();
}
function Txr(e) {
    n().sessionFlags.replaceBackgroundAutoModeSetupInFlight(e);
}
function _Ro() {
    return n().sessionFlags.deferredToolStubGateLatch();
}
function bRo(e) {
    n().sessionFlags.replaceDeferredToolStubGateLatch(e);
}
function SRo() {
    return n().sessionFlags.verifySkillRolloutGateLatch();
}
function wRo(e) {
    n().sessionFlags.replaceVerifySkillRolloutGateLatch(e);
}
function vRo() {
    return n().sessionFlags.commitSkillRolloutGateLatch();
}
function ERo(e) {
    n().sessionFlags.replaceCommitSkillRolloutGateLatch(e);
}
function kRo() {
    return n().sessionFlags.memoryToolsShapeLatch();
}
function T2n(e) {
    n().sessionFlags.replaceMemoryToolsShapeLatch(e);
}
function qon(e) {
    n().sessionFlags.armPendingContextCompacted(e);
}
function TRo() {
    return n().sessionFlags.consumePendingContextCompacted();
}
function ARo() {
    n().sessionFlags.forgetPendingContextCompacted();
}
function qv() {
    return n().host.mcpProcessWiring.strictConfig();
}
function Kon(e) {
    n().host.mcpProcessWiring.replaceStrictConfig(e);
}
function Yon() {
    return n().host.launchOptions.cliSessionConfigCarried();
}
function Xon(e) {
    n().host.launchOptions.replaceCliSessionConfigCarried(e);
}
function P0() {
    return n().host.launchOptions.forkRestrictedLaunchConfig();
}
function CRo(e) {
    n().host.launchOptions.replaceForkRestrictedLaunchConfig(e);
}
function E9() {
    return n().host.launchOptions.forkReplayLaunchConfig();
}
function RRo(e) {
    n().host.launchOptions.replaceForkReplayLaunchConfig(e);
}
function Jon() {
    return n().mcpSessionWiring.approvedServers();
}
function A2n(e, t) {
    n().mcpSessionWiring.approveServers(e, t);
}
function xRo(e, t) {
    n().costLedger.recordApiDuration(e, t);
}
function PRo(e, t, o) {
    n().costLedger.recordCost(e, t, o);
}
function uy() {
    return n().costLedger.totalCostUSD();
}
function I0() {
    return n().costLedger.totalAPIDuration();
}
function jpe() {
    return n().costLedger.totalDuration();
}
function Axr() {
    return n().costLedger.totalAPIDurationWithoutRetries();
}
function Cxr() {
    return n().costLedger.totalToolDuration();
}
function Rxr(e) {
    n().costLedger.recordToolDuration(e);
}
function Tpt() {
    return n().host.telemetryHandles.statsStore();
}
function IRo(e) {
    n().host.telemetryHandles.replaceStatsStore(e);
}
function Wpe(e) {
    n().userPresence.recordInteraction(e);
}
function zpe() {
    n().userPresence.flushIfDirty();
}
function Rq(e) {
    return n().userPresence.interactionFired.subscribe(e);
}
function ORo() {
    n().userPresence.resetBaseline();
}
function MRo(e, t) {
    n().costLedger.recordLinesChanged(e, t);
}
function MPe() {
    return n().costLedger.totalLinesAdded();
}
function HPe() {
    return n().costLedger.totalLinesRemoved();
}
function WDt() {
    return n().costLedger.totalInputTokens();
}
function Lg() {
    return n().costLedger.totalOutputTokens();
}
function zDt() {
    return n().costLedger.totalCacheReadInputTokens();
}
function GDt() {
    return n().costLedger.totalCacheCreationInputTokens();
}
function HRo() {
    return n().costLedger.totalWebSearchRequests();
}
function DRo() {
    n().costLedger.markUnknownModelCost();
}
function xxr() {
    return n().costLedger.hasUnknownModelCost();
}
function Pxr() {
    n().costLedger.recordSafetyStop();
}
function k9() {
    return n().costLedger.safetyStops();
}
function nG() {
    return n().requestJournal.lastMainRequestId();
}
function LRo(e) {
    n().requestJournal.replaceLastMainRequestId(e);
}
function hwe() {
    n().requestJournal.replaceLastMainRequestId(undefined);
}
function U8e() {
    return n().requestJournal.mainChainReleaseCount();
}
function p6() {
    return n().requestJournal.lastMainThreadCacheTtlMs();
}
function NRo(e, t) {
    return n().requestJournal.isLastMainThreadAskLive(e, t);
}
function xq() {
    return n().requestJournal.lastMainThreadRequestAt();
}
function Qon() {
    return n().requestJournal.lastLiveMainThreadRequestAt();
}
function $Ro(e, t, o) {
    n().requestJournal.replaceLastMainThreadCacheTtlMs(e, t, o);
}
function FRo(e) {
    n().requestJournal.adjustLastMainThreadCacheTtlMs(e);
}
function URo(e) {
    n().requestJournal.recordLastMainThreadCacheRenewal(e);
}
function Apt() {
    return n().requestJournal.lastMainThreadCacheRenewedAt();
}
function DPe() {
    return n().requestJournal.lastMainThreadContextTokens();
}
function LPe(e) {
    n().requestJournal.replaceLastMainThreadContextTokens(e);
}
function BRo(e) {
    let t = n();
    if (e.sessionId !== undefined && e.sessionId === t.id) {
        t.requestJournal.applyResumeSeed(e);
    } else {
        t.requestJournal.stageResumeSeed(e);
    }
}
function UZ() {
    return n().requestJournal.lastApiCompletionTimestamp();
}
function C2n(e) {
    n().requestJournal.replaceLastApiCompletionTimestamp(e);
}
function VDt(e, { keepsCachedPrefix = false } = {}) {
    let requestJournal = n().requestJournal;
    requestJournal.replacePendingPostCompaction(true);
    requestJournal.replaceLastMainThreadContextTokens(e);
    if (!keepsCachedPrefix) {
        requestJournal.replaceLastMainThreadRequest(null, null);
    }
}
function jRo() {
    let e = n();
    let t = e.requestJournal.pendingPostCompaction();
    e.requestJournal.replacePendingPostCompaction(false);
    return t;
}
function Ip() {
    return n().userPresence.lastInteractionTime();
}
function Ixr() {
    return n().userPresence.lastSubmitTime();
}
function B8e() {
    n().userPresence.recordSubmit();
}
const j8e = 60000;
function WRo(e) {
    n().userPresence.updateTerminalFocus(e);
}
function NPe() {
    return n().userPresence.terminalFocus();
}
function zRo(e) {
    return n().userPresence.terminalFocusFired.subscribe(e);
}
function GRo() {
    let e = NPe();
    if (e !== undefined) {
        return e;
    }
    return Date.now() - Ip() < j8e;
}
function Oxr() {
    n().userPresence.markScrollActivity();
}
function Cpt() {
    return n().userPresence.scrollDraining();
}
async function Zon() {
    return n().userPresence.waitForScrollIdle();
}
function FO() {
    return n().costLedger.modelUsage();
}
function VRo(e) {
    return n().costLedger.usageForModel(e);
}
function Xc() {
    return n().modelSelection.mainLoopModelOverride();
}
function sU() {
    return n().modelSelection.initialMainLoopModel();
}
function gp(e) {
    n().modelSelection.overrideMainLoopModel(e);
}
function esn() {
    return n().modelSelection.mainLoopEffortState();
}
function tsn(e) {
    n().modelSelection.replaceMainLoopEffortState(e);
}
function qRo(e) {
    n().modelSelection.markRefusalFallbackOccurred(e);
}
function rG() {
    return n().modelSelection.refusalFallbackOccurred();
}
function qDt(e) {
    n().modelSelection.armRefusalFallbackHeader(e);
}
function EBe() {
    return n().modelSelection.refusalFallbackHeaderArmed();
}
function KRo() {
    n().modelSelection.armSilentLaneFromServer();
}
function Mxr() {
    return n().modelSelection.silentLaneServerArmed();
}
function YRo() {
    return n().modelSelection.refusalFallbackLatchOriginRequestId();
}
function KDt(e) {
    let t = n();
    let o = t.modelSelection.refusalFallbackModelLatch();
    if (o && t.modelSelection.mainLoopModelOverride() === o.fallbackModel) {
        t.modelSelection.replaceRefusalFallbackModelLatch({
            ...o,
            fallbackModel: e.fallbackModel,
            carriedEffort: e.carriedEffort ?? o.carriedEffort
        });
        return;
    }
    t.modelSelection.replaceRefusalFallbackModelLatch(e);
}
function Gpe() {
    n().modelSelection.unlatchRefusalFallbackModel("model_pick");
}
function nj() {
    return n().modelSelection.refusalFallbackModelLatch();
}
function nsn(e) {
    let { modelSelection } = n();
    let o = modelSelection.refusalFallbackModelLatch();
    if (o !== undefined) {
        modelSelection.replaceRefusalFallbackModelLatch({
            ...o,
            carriedEffort: undefined
        }, e);
    }
}
function XRo() {
    return n().modelSelection.takeCarriedEffortEnd();
}
function JRo(previousOverride) {
    let t = n();
    let o = t.modelSelection.refusalFallbackModelLatch();
    if (o) {
        t.modelSelection.replaceRefusalFallbackModelLatch({
            ...o,
            previousOverride
        });
    }
}
function QRo() {
    n().modelSelection.forgetRefusalFallbackOccurred();
}
function ZRo(e) {
    n().surfaceCapabilities.markSdkDialogHostActive(e);
}
function Pq() {
    return n().surfaceCapabilities.sdkDialogHostActive();
}
function Hxr(e, t) {
    n().surfaceCapabilities.declareDialogKinds(e, t);
}
function Bse() {
    return n().surfaceCapabilities.sdkSupportedDialogKinds();
}
function exo() {
    let e = n();
    if (e.surfaceCapabilities.sdkSupportedDialogKinds() === undefined) {
        return "none";
    }
    return e.surfaceCapabilities.sdkSupportedDialogKindsSource() ?? "none";
}
function txo(e) {
    n().surfaceCapabilities.declarePerTaskStopAffordance(e);
}
function rsn() {
    return n().surfaceCapabilities.sdkPerTaskStopAffordance() === true;
}
function nxo(e) {
    n().surfaceCapabilities.declareRapidFollowupPreempt(e);
}
function rxo() {
    return n().surfaceCapabilities.sdkRapidFollowupPreempt() === true;
}
function oxo(e) {
    n().surfaceCapabilities.declareForwardNestedSubagentToolCalls(e);
}
function R2n(e) {
    n().surfaceCapabilities.declareHostRendersChromeSetupOffer(e);
}
function Rpt() {
    return n().surfaceCapabilities.hostRendersChromeSetupOffer() === true;
}
function oG() {
    return n().host.launchOptions.replConfigArgv();
}
function kBe(e) {
    n().host.launchOptions.replaceReplConfigArgv(e);
}
function sxo(e) {
    n().modelSelection.replaceInitialMainLoopModel(e);
}
function ixo() {
    return n().modelSelection.availabilityFallbackChain();
}
function axo(e) {
    n().modelSelection.replaceAvailabilityFallbackChain(e);
}
function osn() {
    return n().modelSelection.initialModelSettingLayer();
}
function lxo(e) {
    n().modelSelection.replaceInitialModelSettingLayer(e);
}
function cxo() {
    return n().modelSelection.resolvedOrgDefault();
}
function W8e(e) {
    n().modelSelection.replaceResolvedOrgDefault(e);
}
function dxo() {
    return n().modelSelection.initialEnvDefaultModel();
}
function uxo(e) {
    n().modelSelection.replaceInitialEnvDefaultModel(e);
}
function Xf() {
    return h()?.sdkBetas ?? n().surfaceCapabilities.sdkBetas();
}
function pxo(e) {
    n().surfaceCapabilities.replaceSdkBetas(e);
}
function YDt() {
    return n().host.accountCreditLatches.longContext1mCreditsBlocked();
}
function fxo(e) {
    n().host.accountCreditLatches.replaceLongContext1mCreditsBlocked(e);
}
function mxo() {
    return n().host.accountCreditLatches.usageCreditsRequired();
}
function ssn(e) {
    n().host.accountCreditLatches.replaceUsageCreditsRequired(e);
}
function Dxr(e) {
    return n().usageCreditsOnlyModelConsentSlots.consentSessionFallback(e);
}
function Lxr(e, t) {
    n().usageCreditsOnlyModelConsentSlots.replaceConsentSessionFallback(e, t);
}
function gxo(e) {
    return n().usageCreditsOnlyModelConsentSlots.sessionConsentKey(e);
}
function Nxr(e, t) {
    n().usageCreditsOnlyModelConsentSlots.replaceSessionConsentKey(e, t);
}
function ywe() {
    return n().host.credentialSlots.sdkOAuthTokenRefreshCallback();
}
function XDt(e) {
    n().host.credentialSlots.replaceSdkOAuthTokenRefreshCallback(e);
}
function TBe() {
    return n().host.credentialSlots.hostAuthTokenRefreshCallback();
}
function isn(e) {
    n().host.credentialSlots.replaceHostAuthTokenRefreshCallback(e);
}
function hxo(e) {
    y.costLedger.registerSaver(e);
}
function yxo(e) {
    n().costLedger.runSaver(e, y.costLedger);
}
function _xo(e) {
    y.costLedger.registerTranscriptRecorder(e);
}
function bxo(e, t) {
    n().costLedger.runTranscriptRecorder(e, t, y.costLedger);
}
function Sxo() {
    let e = n();
    return e.costLedger.belongsTo(e.id);
}
function asn() {
    let e = n();
    e.costLedger.claim(e.id);
}
function wxo() {
    let e = n();
    e.costLedger.scopeTo(e.id);
}
function z8e() {
    let e = n();
    e.costLedger.reset(e.id);
    e.requestJournal.replacePromptId(null);
}
function vxo(e) {
    let t = n();
    t.costLedger.restore(e, t.id);
}
function Kr() {
    return n().host.launchOptions.projectConfigRoot();
}
function Exo(e) {
    n().host.launchOptions.replaceProjectConfigRoot(e);
}
function JDt() {
    return n().host.modelStringsCache.modelStrings();
}
function x2n(e) {
    n().host.modelStringsCache.replaceModelStrings(e);
}
function kxo() {
    n().host.modelStringsCache.invalidate();
}
function Txo(e) {
    n().host.modelStringsCache.recordAdmin3PSteeringSnapshot(e);
}
function Axo() {
    return n().host.modelStringsCache.admin3PSteeringSnapshot();
}
function xpt() {
    return n().host.telemetryHandles.loggerProvider();
}
function $xr(e) {
    n().host.telemetryHandles.replaceLoggerProvider(e);
}
function ABe() {
    return n().host.telemetryHandles.eventLogger();
}
function Fxr() {
    return n().host.telemetryHandles.eventLoggerOwner();
}
function Uxr(e, t = "org") {
    n().host.telemetryHandles.attachEventLogger(e, t);
}
function Cxo(e) {
    return n().host.telemetryHandles.bufferPendingEvent(e);
}
function Bxr(e) {
    n().host.telemetryHandles.closeWindow(e);
}
function Rxo() {
    return n().host.telemetryHandles.windowCloseCause();
}
function lsn() {
    return n().host.telemetryHandles.isWindowOpen();
}
function QDt() {
    return n().host.telemetryHandles.hostOtel();
}
function G8e() {
    return n().host.telemetryHandles.tracerProvider();
}
function jxr(e) {
    n().host.telemetryHandles.replaceTracerProvider(e);
}
function P2n() {
    return n().host.requestLatches.foundryDeploymentCapabilities();
}
function xxo() {
    return n().host.telemetryHandles.cachedTelemetryResource();
}
function Pxo(e) {
    n().host.telemetryHandles.replaceCachedTelemetryResource(e);
}
function Wxr(e) {
    return n().host.telemetryHandles.cachedOtlpHttpAgentFactory(e);
}
function Ixo(e, t) {
    n().host.telemetryHandles.replaceCachedOtlpHttpAgentFactory(e, t);
}
function Ee() {
    return !n().host.launchOptions.isInteractive();
}
function ZDt() {
    return n().host.launchOptions.spareClaimState();
}
function zR() {
    return n().host.launchOptions.spareClaimState() === "parked";
}
function Oxo() {
    let launchOptions = n().host.launchOptions;
    launchOptions.replaceSpareClaimState("parked");
    launchOptions.replaceSpareParkedAtMs(Date.now());
}
function Mxo() {
    let launchOptions = n().host.launchOptions;
    let t = launchOptions.spareParkedAtMs();
    launchOptions.replaceSpareClaimState("claiming");
    if (t === undefined) {
        return undefined;
    }
    return Date.now() - t;
}
function Hxo() {
    n().host.launchOptions.replaceSpareClaimState("claimed");
}
function Dxo() {
    n().host.launchOptions.replaceSpareClaimState("failed");
}
function e0t() {
    let e = n().host.launchOptions.spareClaimState();
    return e === "parked" || e === "claiming" || e === "failed";
}
function Op() {
    return n().host.launchOptions.isInteractive();
}
function Lxo(e) {
    n().host.launchOptions.replaceIsInteractive(e);
}
function T9() {
    return n().host.launchOptions.printOutputFormat();
}
function Nxo(e) {
    n().host.launchOptions.replacePrintOutputFormat(e);
}
function V8e() {
    return n().host.launchOptions.thinkingDisplayExplicit();
}
function q8e(e) {
    n().host.launchOptions.replaceThinkingDisplayExplicit(e);
}
function UO() {
    return n().host.launchOptions.permissionPromptToolName();
}
function $xo(e) {
    n().host.launchOptions.replacePermissionPromptToolName(e);
}
function bu() {
    return n().surfaceCapabilities.attacherCaps();
}
function Fxo(e) {
    n().surfaceCapabilities.replaceAttacherCaps(e);
}
function O0(e) {
    return n().surfaceCapabilities.attacherCapsChanged.subscribe(e);
}
function Uxo() {
    return n().surfaceCapabilities.rvSupervisorLinkLive();
}
function csn(e) {
    n().surfaceCapabilities.replaceRvSupervisorLinkLive(e);
}
function Bxo(e) {
    return n().surfaceCapabilities.rvSupervisorLinkChanged.subscribe(e);
}
function Ppt() {
    return n().host.launchOptions.hasStreamingInput();
}
function jxo(e) {
    n().host.launchOptions.replaceHasStreamingInput(e);
}
function Wxo({ hasStreamingInput, sdkUrl }) {
    return !hasStreamingInput && !sdkUrl;
}
function Ni(e) {
    if (e.entrypoint === "terminal") {
        if (e.ownEventsRequested) {
            return "terminal";
        }
        return "none";
    }
    if (e.ownEventsOnly) {
        return "evals";
    }
    if (e.hasStreamingInput || e.sdkUrl) {
        return "host";
    }
    if (e.ownEventsRequested) {
        return "evals";
    }
    return "none";
}
function zxo(e) {
    n().host.launchOptions.replaceSingleShotPrintSession(e);
}
function Iq() {
    return n().host.launchOptions.singleShotPrintSession();
}
function Gxo() {
    n().host.launchOptions.markPrintInputClosed();
}
function $Pe() {
    return n().host.launchOptions.printInputClosed();
}
function dsn() {
    return n().host.launchOptions.clientType();
}
function Vxo(e) {
    n().host.launchOptions.replaceClientType(e);
}
function CBe() {
    return n().host.launchOptions.sdkAgentProgressSummariesEnabled();
}
function usn(e) {
    n().host.launchOptions.replaceSdkAgentProgressSummariesEnabled(e);
}
function psn() {
    return n().host.launchOptions.rendererMode();
}
function qxo(e) {
    n().host.launchOptions.replaceRendererMode(e);
}
function fsn() {
    return n().host.launchOptions.strictToolResultPairing();
}
function sw() {
    return n().host.launchOptions.restrictedSession();
}
function msn(e) {
    n().host.launchOptions.replaceRestrictedSession(e);
}
function gsn() {
    return n().host.launchOptions.workspaceRestrictionState()?.restriction ?? null;
}
function EC() {
    return gsn() !== null;
}
function Gi(e) {
    for (let [t, o] of n().host.launchOptions.restrictedWorkspaceRoots()){
        if (e === t || e.startsWith(t.endsWith(sep) ? t : t + sep)) {
            return o;
        }
    }
    return null;
}
function Kxo(e) {
    return Gi(e) !== null;
}
function Yxo(e) {
    if (gsn()?.gateKeys.includes(e)) {
        return true;
    }
    for (let t of n().host.launchOptions.restrictedWorkspaceRoots().values()){
        if (t.gateKeys.includes(e)) {
            return true;
        }
    }
    return false;
}
function Xxo() {
    return n().sessionFlags.accountMemoryLaunchMode();
}
function kC() {
    return n().sessionFlags.memoryToggledOff();
}
function BZ(e) {
    let t = n();
    if (t.sessionFlags.memoryToggledOff() === e) {
        return;
    }
    t.sessionFlags.replaceMemoryToggledOff(e);
    Cn.of(t).emit(e);
}
var Cn = new lt(()=>Oe());
function t0t(e, t = n()) {
    return Cn.of(t).subscribe(e);
}
function jse() {
    return n().sessionFlags.autoMemoryOffThisSession();
}
function K8e(e) {
    let t = n();
    if (t.sessionFlags.autoMemoryOffThisSession() === e) {
        return;
    }
    t.sessionFlags.replaceAutoMemoryOffThisSession(e);
    xn.of(t).emit(e);
}
var xn = new lt(()=>Oe());
function n0t(e, t = n()) {
    return xn.of(t).subscribe(e);
}
function zxr() {
    return n().sessionFlags.restoredMemoryPause();
}
function r0t(e) {
    n().sessionFlags.replaceRestoredMemoryPause(e);
}
function Jxo() {
    return n().sessionFlags.restoredAutoMemoryOff();
}
function Y8e(e) {
    n().sessionFlags.replaceRestoredAutoMemoryOff(e);
}
function Qxo(e) {
    if (e === false) {
        throw Error("setWizardOperatorToolsEnabled(false) is test-only: the wizard latch is one-way in production");
    }
    n().host.launchOptions.replaceWizardOperatorToolsEnabled(e);
}
function Zxo() {
    return n().host.launchOptions.wizardOperatorToolsEnabled();
}
function Ipt() {
    return n().host.launchOptions.pollEventIngress();
}
function ePo() {
    return Ipt() !== "none";
}
function Ki(e) {
    n().host.launchOptions.markPollEventIngress(e);
}
function Vi() {
    n().host.launchOptions.markOwnEventDeliveryRequested();
}
function tPo(e) {
    let t = Ni(e);
    if (t !== "none" && !(t === "host" && Ipt() === "evals")) {
        Ki(t);
    }
    if (e.ownEventsRequested) {
        Vi();
    }
}
function rj() {
    return n().host.launchOptions.userMsgOptIn();
}
function FPe(e) {
    n().host.launchOptions.replaceUserMsgOptIn(e);
}
function nPo() {
    return n().host.launchOptions.searchToolsOptIn();
}
function rPo(e) {
    n().host.launchOptions.replaceSearchToolsOptIn(e);
}
function oPo() {
    return n().host.launchOptions.todoToolsOptIn();
}
function sPo(e) {
    n().host.launchOptions.replaceTodoToolsOptIn(e);
}
function iPo() {
    return n().host.launchOptions.toolsOmittedByLaunchList();
}
function aPo(e) {
    n().host.launchOptions.replaceToolsOmittedByLaunchList(new Set(e));
}
function lPo() {
    return n().host.launchOptions.sessionStartType();
}
function hsn(e) {
    n().host.launchOptions.replaceSessionStartType(e);
}
function Gxr() {
    return n().host.launchOptions.questionPreviewFormat();
}
function Vxr(e) {
    n().host.launchOptions.replaceQuestionPreviewFormat(e);
}
function _we() {
    return n().host.launchOptions.extendedQuestionsEnabled();
}
function cPo(e) {
    n().host.launchOptions.replaceExtendedQuestionsEnabled(e);
}
function dPo() {
    return n().host.launchOptions.questionOptionDescriptionsOptional();
}
function uPo(e) {
    n().host.launchOptions.replaceQuestionOptionDescriptionsOptional(e);
}
function qxr() {
    return n().sessionScratch.agentColorMap();
}
function BO() {
    return n().host.settingsSource.flagSettingsPath();
}
function pPo(e) {
    n().host.settingsSource.replaceFlagSettingsPath(e);
}
function Vpe() {
    return n().host.settingsSource.flagAgentsFilePaths();
}
function fPo(e) {
    n().host.settingsSource.replaceFlagAgentsFilePaths(e);
}
function ek() {
    return n().host.settingsSource.flagSettingsExpectedContent();
}
function mPo(e) {
    n().host.settingsSource.replaceFlagSettingsExpectedContent(e);
}
function jZ() {
    return n().host.settingsSource.flagSettingsFilePinnedContent();
}
function gPo(e) {
    n().host.settingsSource.replaceFlagSettingsFilePinnedContent(e);
}
function py() {
    return n().host.settingsSource.flagSettingsInline();
}
function iU(e) {
    n().host.settingsSource.replaceFlagSettingsInline(e);
}
function Opt() {
    return n().host.settingsSource.parentManagedSettings();
}
function hPo(e) {
    n().host.settingsSource.replaceParentManagedSettings(e);
}
function WZ() {
    return n().host.settingsSource.parentManagedSettingsInvalid();
}
function yPo(e) {
    n().host.settingsSource.replaceParentManagedSettingsInvalid(e);
}
function RBe() {
    let e = k();
    if (e) {
        return e.secrets.sessionIngressToken;
    }
    return n().host.credentialSlots.sessionIngressToken();
}
function xBe(e) {
    let t = k();
    if (t) {
        t.secrets.sessionIngressToken = e;
    } else {
        n().host.credentialSlots.replaceSessionIngressToken(e);
    }
}
function Oq() {
    return n().host.credentialSlots.oauthTokenFromFd();
}
function LN(e) {
    n().host.credentialSlots.replaceOauthTokenFromFd(e);
}
function Mq() {
    return n().host.credentialSlots.oauthTokenFromBgSnapshot();
}
function o0t(e) {
    n().host.credentialSlots.replaceOauthTokenFromBgSnapshot(e);
}
function _Po() {
    return n().host.credentialSlots.oauthScopesFromFd();
}
function s0t(e) {
    n().host.credentialSlots.replaceOauthScopesFromFd(e);
}
function Kxr() {
    return n().host.credentialSlots.apiKeyFromFd();
}
function Yxr(e) {
    n().host.credentialSlots.replaceApiKeyFromFd(e);
}
function bPo(e) {
    return n().host.credentialSlots.descriptorAnnouncementConsumed(e);
}
function Mpt(e) {
    n().host.credentialSlots.markDescriptorAnnouncementConsumed(e);
}
function Xxr() {
    return n().host.credentialSlots.gatewayTokenFromDescriptor();
}
function I2n(e) {
    n().host.credentialSlots.replaceGatewayTokenFromDescriptor(e);
}
function SPo() {
    n().host.credentialSlots.resetFdCredentialState();
}
function eo() {
    return n().host.credentialSlots.gatewayAuth();
}
function wPo() {
    let e = n().host.credentialSlots.gatewayAuth();
    return !!e && e.expiresAt <= Date.now();
}
function DH(e) {
    return !!e && !e.unpinned;
}
function O2n(e) {
    let t = e?.hostVerdict;
    return t !== undefined && "verified" in t && t.verified;
}
function vPo(e) {
    return DH(e) || O2n(e);
}
function EPo(e) {
    n().host.credentialSlots.replaceGatewayServerProcess(e);
}
function ysn() {
    return n().host.credentialSlots.gatewayServerProcess();
}
function X8e(e) {
    n().host.credentialSlots.replaceGatewayRequiredByHostPolicyReader(e);
}
function _sn() {
    return n().host.credentialSlots.gatewayRequiredByHostPolicy();
}
function zZ(e) {
    n().host.credentialSlots.replaceGatewayAuth(e);
}
function kPo() {
    return n().host.credentialSlots.authenticatedAccount();
}
function bwe(e) {
    n().host.credentialSlots.stampAuthenticatedAccount(e);
}
function qpe() {
    return n().host.credentialSlots.authenticatedAccountEpoch();
}
function TPo() {
    return n().host.credentialSlots.startupPolicySnapshot();
}
function APo(e) {
    n().host.credentialSlots.replaceStartupPolicySnapshot(e);
}
function UPe() {
    return n().host.credentialSlots.gatewayRefreshInFlight();
}
function Jxr(e) {
    n().host.credentialSlots.replaceGatewayRefreshInFlight(e);
}
function CPo(e) {
    n().requestJournal.replaceLastAPIRequest(e);
}
function bsn() {
    return n().requestJournal.lastAPIRequest();
}
function M2n(e) {
    n().requestJournal.replaceLastCancelledAPIMessageId(e);
}
function BPe() {
    return n().requestJournal.lastCancelledAPIMessageId();
}
function RPo(e) {
    n().requestJournal.replaceLastAPIRequestMessages(e);
}
function H2n(e) {
    n().requestJournal.replaceLastClassifierRequests(e);
}
function Qxr() {
    return n().requestJournal.lastClassifierRequests();
}
function Ssn(e) {
    let t = h();
    if (t) {
        t.cachedClaudeMdContent = e;
    } else {
        n().sessionFlags.replaceCachedClaudeMdContent(e);
    }
}
function xPo() {
    let e = h();
    if (e) {
        return e.cachedClaudeMdContent;
    }
    return n().sessionFlags.cachedClaudeMdContent();
}
function PBe() {
    let { settingsSource, launchOptions } = n().host;
    if (launchOptions.workspaceRestrictionState()?.restriction) {
        return settingsSource.allowedSettingSourcesWithoutRepoDirSources();
    }
    return settingsSource.allowedSettingSources();
}
function Kpe() {
    return n().host.settingsSource.allowedSettingSources();
}
function Zxr(e) {
    n().host.settingsSource.replaceAllowedSettingSources(e);
}
function wsn() {
    return Ee() && n().host.launchOptions.clientType() !== "claude-vscode";
}
function f6(e) {
    n().host.extensionsConfig.replaceInlinePlugins(e);
}
function nT() {
    return n().host.extensionsConfig.inlinePlugins();
}
function vsn(e) {
    n().host.extensionsConfig.replaceInlinePluginsNoMcp(e);
}
function aU() {
    return n().host.extensionsConfig.inlinePluginsNoMcp();
}
function PPo(e) {
    n().host.extensionsConfig.replaceInlinePluginUrls(e);
}
function IBe() {
    return n().host.extensionsConfig.inlinePluginUrls();
}
function Hpt(e, t) {
    n().host.extensionsConfig.replaceSyncedPluginDirs(e, t);
}
function Esn(e) {
    return n().host.extensionsConfig.syncedPluginAttestation(e);
}
function IPo(e) {
    n().host.extensionsConfig.replaceAttestedOfficialPluginIds(e);
}
function OPo(e) {
    return n().host.extensionsConfig.attestedOfficialPluginMarketplace(e);
}
function D2n() {
    return n().host.extensionsConfig.syncedPluginDirsRegistered();
}
function OBe() {
    return n().pluginsSync.syncedLaneOpened;
}
function MPo() {
    n().pluginsSync.syncedLaneOpened = true;
}
function HPo() {
    return n().pluginsSync.lastCompleteList;
}
function DPo() {
    n().host.extensionsConfig.clearSyncedPluginDirs();
    n().pluginsSync.syncedLaneOpened = false;
    n().pluginsSync.removalsDeferredHere.clear();
}
function J8e() {
    return n().host.extensionsConfig.syncedPluginDirs();
}
function ksn(e) {
    n().sessionFlags.replaceAccountSkillsSyncEnabled(e);
}
function Tsn() {
    return n().sessionFlags.accountSkillsSyncEnabled();
}
function Asn(e) {
    n().sessionFlags.replaceSkillsSyncVetoed(e);
}
function rT() {
    return n().sessionFlags.skillsSyncVetoed();
}
function LPo(e) {
    n().sessionFlags.replaceAccountPluginsSyncEnabled(e);
}
function Dpt() {
    return n().sessionFlags.accountPluginsSyncEnabled();
}
function NPo(e) {
    n().sessionFlags.replacePluginsSyncVetoed(e);
}
function GZ() {
    return n().sessionFlags.pluginsSyncVetoed();
}
function $Po(e) {
    n().host.extensionsConfig.replaceChromeFlagOverride(e);
}
function Wse() {
    return n().host.extensionsConfig.chromeFlagOverride();
}
function FPo(e) {
    n().host.extensionsConfig.replaceTeammateAgentId(e);
}
function eb() {
    return n().host.extensionsConfig.teammateAgentId();
}
function UPo(e) {
    n().sessionFlags.replaceOnboardingShownThisSession(e);
}
function BPo() {
    return n().sessionFlags.onboardingShownThisSession();
}
function sG(e) {
    let t = n();
    t.host.settingsSource.replaceUseCoworkPlugins(e);
    uxr.of(t.host).invalidateAll();
}
function Csn() {
    return n().host.settingsSource.useCoworkPlugins();
}
function jPo(e) {
    n().host.launchOptions.replaceDisableSlashCommands(e);
}
function Lh() {
    return n().host.launchOptions.disableSlashCommands();
}
function WPo() {
    return n().host.launchOptions.disableFileMentions();
}
function MBe() {
    return n().host.launchOptions.sessionUploadsDir();
}
function Rsn(e) {
    n().host.launchOptions.replaceSessionBypassPermissionsMode(e);
}
function A9() {
    return n().host.launchOptions.sessionBypassPermissionsMode();
}
function lU(e) {
    n().host.launchOptions.replaceScheduledTasksEnabled(e);
}
function L2n() {
    return n().host.launchOptions.scheduledTasksEnabled();
}
function zPo(e) {
    return n().host.launchOptions.onScheduledTasksEnabled(e);
}
function Km() {
    return h()?.sessionCronTasks ?? n().sessionCron.tasks();
}
function Swe(e) {
    let t = h();
    if (t) {
        t.sessionCronTasks.push(e);
    } else {
        n().sessionCron.schedule(e);
    }
    n().sessionCron.changed.emit();
}
function GPo(e) {
    return n().sessionCron.chainStartedAt(e);
}
function ePr(e, t) {
    n().sessionCron.recordChainStart(e, t);
}
function xsn(e) {
    n().sessionCron.forgetChainStart(e);
}
function Ype() {
    return n().sessionCron.tickInFlightPrompt();
}
function Lpt(e) {
    n().sessionCron.replaceTickInFlightPrompt(e);
}
function tPr() {
    return n().sessionCron.consecutiveKeepalives();
}
function Psn(e) {
    n().sessionCron.replaceConsecutiveKeepalives(e);
}
function Isn() {
    return n().sessionCron.ended();
}
function i0t() {
    return n().sessionCron.wakeFires();
}
function Osn() {
    n().sessionCron.recordWakeFire();
}
function a0t() {
    n().sessionCron.resetWakeFires();
}
function N2n(e) {
    n().sessionCron.replaceEnded(e);
    if (e) {
        n().sessionCron.changed.emit();
    }
}
function m6(e, { handOff = false } = {}) {
    if (e.length === 0) {
        return 0;
    }
    let o = new Set(e);
    let r = h();
    let i = r ? r.sessionCronTasks : n().sessionCron.tasks();
    let s = i.filter((d)=>!o.has(d.id));
    let a = i.length - s.length;
    if (a === 0) {
        return 0;
    }
    let l = !handOff && i.some((d)=>d.kind === "loop" && o.has(d.id));
    if (r) {
        r.sessionCronTasks.length = 0;
        r.sessionCronTasks.push(...s);
    } else {
        n().sessionCron.replaceTasks(s);
    }
    if (l) {
        n().sessionCron.pendingLoopWakeup.emit(undefined);
    }
    n().sessionCron.changed.emit();
    return a;
}
function Msn(e) {
    return n().sessionCron.changed.subscribe(e);
}
function VPo(e) {
    return n().sessionCron.pendingLoopWakeup.subscribe(e);
}
function l0t(e) {
    n().sessionCron.pendingLoopWakeup.emit(e);
}
function M0(e) {
    n().sessionFlags.replaceSessionTrustAccepted(e);
}
function wwe() {
    return n().sessionFlags.sessionTrustAccepted();
}
function HBe(e) {
    n().sessionFlags.replaceHomeTrustDialogAccepted(e);
}
function vwe() {
    return n().sessionFlags.homeTrustDialogAccepted();
}
function qPo(e) {
    n().host.launchOptions.replaceSessionPersistenceDisabled(e);
}
function jP() {
    return n().host.launchOptions.sessionPersistenceDisabled();
}
function Ce() {
    return oj();
}
function oj() {
    return n().host.launchOptions.diskless();
}
function CS() {
    return y.host.launchOptions.diskless();
}
function Hsn() {
    return n().host.launchOptions.ccrSessionUrl();
}
function DBe() {
    return n().host.launchOptions.ccrDerivedSurface();
}
function Dsn() {
    return n().host.launchOptions.toolsMachine();
}
function Lsn() {
    return n().sessionFlags.hasExitedPlanMode();
}
function NN(e) {
    n().sessionFlags.replaceHasExitedPlanMode(e);
}
function nPr() {
    return n().host.proactivity.selectorGate();
}
function KPo() {
    return n().host.proactivity.selectorGateEverOn();
}
function YPo() {
    n().host.proactivity.inheritSelectorGateEverOn();
}
function rPr(e) {
    n().host.proactivity.replaceSelectorGate(e);
}
function XPo(e) {
    n().host.proactivity.resampleSelectorGate(e);
}
function c0t(e) {
    return n().host.proactivity.subscribeSelectorGateChanged(e);
}
function JPo(e) {
    n().host.proactivity.replaceHostGateSubscription(e);
}
function QPo() {
    return n().sessionFlags.needsPlanModeExitAttachment();
}
function Hq(e) {
    n().sessionFlags.replaceNeedsPlanModeExitAttachment(e);
}
function Xpe(e, t) {
    if (t === "plan" && e !== "plan") {
        n().sessionFlags.replaceNeedsPlanModeExitAttachment(false);
    }
    if (e === "plan" && t !== "plan") {
        n().sessionFlags.replaceNeedsPlanModeExitAttachment(true);
    }
}
function ZPo() {
    return n().sessionFlags.needsAutoModeExitAttachment();
}
function H0(e) {
    n().sessionFlags.replaceNeedsAutoModeExitAttachment(e);
}
function eIo(e, t) {
    if (e === "auto" && t === "plan" || e === "plan" && t === "auto") {
        return;
    }
    let o = e === "auto";
    let r = t === "auto";
    if (r && !o) {
        n().sessionFlags.replaceNeedsAutoModeExitAttachment(false);
    }
    if (o && !r) {
        n().sessionFlags.replaceNeedsAutoModeExitAttachment(true);
    }
}
function oPr() {
    return n().sessionFlags.lspRecommendationShownThisSession();
}
function sPr(e) {
    n().sessionFlags.replaceLspRecommendationShownThisSession(e);
}
function tIo(e) {
    n().host.launchOptions.replaceInitJsonSchema(e);
}
function iPr() {
    return n().host.launchOptions.initJsonSchema();
}
function nIo(e) {
    n().mcpSessionWiring.registerClientsAccessor(e);
}
function aPr(e) {
    return n().mcpSessionWiring.acquireClientsAccessor(e);
}
function RS() {
    return n().mcpSessionWiring.clientsFromAccessor();
}
function Nsn(e) {
    n().host.mcpProcessWiring.registerEnsureConnectedClient(e);
}
function g6() {
    return n().host.mcpProcessWiring.ensureConnectedClient();
}
function Npt(e) {
    n().mcpSessionWiring.registerConnectedClientWiring(e);
}
function $sn() {
    return n().mcpSessionWiring.connectedClientWiring();
}
function rIo(e) {
    n().mcpSessionWiring.registerToolsSwapper(e);
}
function lPr(e) {
    return n().mcpSessionWiring.acquireToolsSwapper(e);
}
function Fsn(e, t, o) {
    return n().mcpSessionWiring.swapServerTools(e, t, o);
}
function T() {
    return h() ?? n().hookRegistry.holder();
}
function h6(e) {
    let t = T();
    if (!t.registeredHooks) {
        t.registeredHooks = {};
    }
    for (let [o, r] of Object.entries(e)){
        let i = o;
        if (!t.registeredHooks[i]) {
            t.registeredHooks[i] = [];
        }
        t.registeredHooks[i].push(...r);
    }
    C9();
}
function $N() {
    return T().registeredHooks;
}
function oIo() {
    return y.hookRegistry.holder().registeredHooks;
}
function Usn() {
    let e = T();
    e.registeredHooks = null;
    e.sdkHostOutOfReachNoted = undefined;
    C9();
}
function sIo() {
    let e = T();
    if (e.sdkHostOutOfReachNoted) {
        return false;
    }
    e.sdkHostOutOfReachNoted = true;
    return true;
}
function cPr() {
    T().sdkHostOutOfReachNoted = undefined;
}
function iG() {
    return T().pluginHookRunner;
}
function dPr(e) {
    let t = iG();
    Ji();
    let o = {};
    for (let [r, i] of Object.entries(e)){
        o[r] = i.filter((s)=>!("pluginRoot" in s) || t?.holds(s.pluginId) !== true);
    }
    h6(o);
}
function Ji() {
    let e = T();
    if (!e.registeredHooks) {
        return;
    }
    let e_pluginHookRunner = e.pluginHookRunner;
    let o = {};
    for (let [r, i] of Object.entries(e.registeredHooks)){
        let s = i.filter((a)=>!("pluginRoot" in a) || e_pluginHookRunner?.holds(a.pluginId) === true);
        if (s.length > 0) {
            o[r] = s;
        }
    }
    e.registeredHooks = Object.keys(o).length > 0 ? o : null;
    C9();
}
const Rn = new q(()=>Oe());
function C9() {
    cs(Rn).emit();
}
function iIo(e) {
    return cs(Rn).subscribe(e);
}
function Ewe() {
    return n().sessionScratch.planSlugCache();
}
function uPr() {
    return h()?.sessionCreatedTeams ?? n().sessionScratch.sessionCreatedTeams();
}
function pPr() {
    return h()?.sessionSpawnedTeammatePanes ?? n().sessionScratch.sessionSpawnedTeammatePanes();
}
function aIo() {
    return h()?.surfacedHookSpawnFailures ?? n().sessionScratch.surfacedHookSpawnFailures();
}
function fPr() {
    return k()?.pendingConversationEditKinds ?? y.sessionScratch.pendingConversationEditKinds();
}
function mPr() {
    return k()?.clientTruncatedAssistantIds ?? y.sessionScratch.clientTruncatedAssistantIds();
}
function gPr() {
    return k()?.heldStatelessReplyIds ?? y.sessionScratch.heldStatelessReplyIds();
}
function hPr() {
    return k()?.unsupportedThreadKeys ?? y.sessionScratch.unsupportedThreadKeys();
}
function lIo() {
    return h()?.bareMcpServerMatchersWarned ?? n().sessionScratch.bareMcpServerMatchersWarned();
}
function $2n() {
    return h()?.pendingBranchLinks ?? n().sessionScratch.pendingBranchLinks();
}
function yPr() {
    return n().sessionScratch.pendingPrLinks();
}
function cIo() {
    return n().sessionScratch.policyPredicateTelemetryEmitted();
}
function $pt() {
    return h()?.chromeAvailabilityStagesLogged ?? n().sessionScratch.chromeAvailabilityStagesLogged();
}
function dIo() {
    return n().sessionScratch.chromeAvailabilityAnchorMs();
}
function uIo() {
    return n().sessionFlags.proposeGoalAvailabilityLogged();
}
function pIo() {
    n().sessionFlags.markProposeGoalAvailabilityLogged();
}
function _Pr() {
    return n().sessionFlags.inheritedTeamName();
}
function fIo(e) {
    n().sessionFlags.replaceInheritedTeamName(e);
}
function d0t(e) {
    n().sessionFlags.replaceTeleportedSessionInfo({
        isTeleported: true,
        hasLoggedFirstMessage: false,
        sessionId: e.sessionId
    });
}
function u0t() {
    return n().sessionFlags.teleportedSessionInfo();
}
function bPr() {
    n().sessionFlags.markFirstTeleportMessageLogged();
}
function VZ(skillName, skillPath, o, agentId = null) {
    let i = `${agentId ?? ""}:${skillName}`;
    n().invokedSkills.record(i, {
        skillName,
        skillPath,
        content: o,
        invokedAt: Date.now(),
        agentId
    });
}
function R9() {
    return n().invokedSkills.skills();
}
function SPr(e, t) {
    let o = n();
    let r = o.invokedSkills.lookup(e);
    if (r) {
        o.invokedSkills.record(e, {
            ...r,
            content: t
        });
    }
}
function mIo(e) {
    let t = e ?? null;
    let o = new Map;
    for (let [r, i] of n().invokedSkills.skills()){
        if (i.agentId === t) {
            o.set(r, i);
        }
    }
    return o;
}
function gIo(e) {
    let t = n();
    if (!e || e.size === 0) {
        t.invokedSkills.forgetAll();
        return;
    }
    for (let [o, r] of t.invokedSkills.skills()){
        if (r.agentId === null || !e.has(r.agentId)) {
            t.invokedSkills.forget(o);
        }
    }
}
function Q8e(e) {
    let t = n();
    for (let [o, r] of t.invokedSkills.skills()){
        if (r.agentId === e) {
            t.invokedSkills.forget(o);
        }
    }
}
function rVs(e, t) {
    n().host.diagnostics.recordSlowOperation(e, t);
}
function oVs() {
    return n().host.diagnostics.slowOperations();
}
function sVs() {
    return n().host.diagnostics.devBarAlert();
}
function Kv() {
    let e = h();
    if (e) {
        return e.mainThreadAgentType;
    }
    return n().hookRegistry.mainThreadAgentType();
}
function zse(e) {
    let t = h();
    if (t) {
        t.mainThreadAgentType = e;
    } else {
        n().hookRegistry.replaceMainThreadAgentType(e);
    }
}
function Gse() {
    let e = h();
    if (e) {
        return e.mainThreadAgentHooks;
    }
    return n().hookRegistry.mainThreadAgentHooks();
}
function hIo() {
    return y.hookRegistry.mainThreadAgentHooks();
}
function F2n(e) {
    let t = h();
    if (t) {
        t.mainThreadAgentHooks = e;
    } else {
        n().hookRegistry.replaceMainThreadAgentHooks(e);
    }
    C9();
}
function aG() {
    return n().host.extensionsConfig.sessionSkillAllowlist();
}
function yIo(e) {
    n().host.extensionsConfig.replaceSessionSkillAllowlist(e);
}
function jO() {
    return n().surfaceCapabilities.caps();
}
function Bsn(e) {
    n().surfaceCapabilities.replaceCaps(e);
}
function jn() {
    return n().surfaceCapabilities.caps().workspace === "remote";
}
function x9(e) {
    n().surfaceCapabilities.markRemote(e);
}
function Fpt() {
    return n().promptAssembly.sections();
}
function _Io(e, t) {
    n().promptAssembly.recordSection(e, t);
}
function jsn(e) {
    n().promptAssembly.forgetAllSections();
    WP(e);
}
function WP(e) {
    n().promptAssembly.noteInvalidation(e);
}
function Vse() {
    return n().promptAssembly.epoch();
}
function iVs() {
    return n().promptAssembly.lastInvalidationReason();
}
function bIo() {
    return n().sessionScratch.vimSharedState();
}
function SIo(e) {
    n().sessionScratch.replaceVimSharedState(e);
}
function od() {
    if (Ce()) {
        return [];
    }
    return n().host.extensionsConfig.additionalDirectoriesForClaudeMd();
}
function cU(e) {
    n().host.extensionsConfig.replaceAdditionalDirectoriesForClaudeMd(e);
}
function fy() {
    return n().host.extensionsConfig.allowedChannels();
}
function LBe(e) {
    n().host.extensionsConfig.replaceAllowedChannels(e);
}
function Wsn() {
    return n().host.extensionsConfig.hasDevChannels();
}
function wIo(e) {
    n().host.extensionsConfig.replaceHasDevChannels(e);
}
function vIo() {
    return n().host.requestLatches.promptCache1hAllowlist();
}
function EIo(e) {
    n().host.requestLatches.replacePromptCache1hAllowlist(e);
}
function NBe(e) {
    return n().host.requestLatches.thinkingTypeOverrides().get(e);
}
function kIo(e, t) {
    n().host.requestLatches.recordThinkingTypeOverride(e, t);
}
function zsn(e) {
    return n().host.requestLatches.servedModelsByRequestedModel().get(e);
}
function wPr(e, t) {
    if (e === t) {
        return;
    }
    let requestLatches = n().host.requestLatches;
    let r = requestLatches.servedModelsByRequestedModel().get(e);
    if (r) {
        r.add(t);
    } else {
        requestLatches.recordServedModels(e, new Set([
            t
        ]));
    }
}
function U2n(e) {
    return n().host.requestLatches.effortUnsupportedModels().has(e);
}
function Gsn(e) {
    n().host.requestLatches.markEffortUnsupported(e);
}
function TIo(e) {
    return n().host.requestLatches.structuredOutputsUnsupportedModels().has(e);
}
function AIo(e) {
    n().host.requestLatches.markStructuredOutputsUnsupported(e);
}
function CIo() {
    n().host.requestLatches.clearStructuredOutputsUnsupported();
}
function RIo(e) {
    return n().host.requestLatches.context1mRefusedModels().has(e);
}
function xIo(e) {
    n().host.requestLatches.markContext1mRefused(e);
}
function vPr() {
    n().host.requestLatches.clearContext1mRefused();
}
function PIo(e) {
    return n().host.requestLatches.refusedBetas(e);
}
function IIo(e, t) {
    n().host.requestLatches.markBetaRefused(e, t);
}
function OIo() {
    return n().host.requestLatches.midConvCachePromotionRejected();
}
function MIo() {
    n().host.requestLatches.markMidConvCachePromotionRejected();
}
function qse() {
    return n().host.requestLatches.thirdPartyServerClassifierRefused();
}
function Vsn() {
    n().host.requestLatches.markThirdPartyServerClassifierRefused();
}
function B2n() {
    return n().host.requestLatches.threadsHeldForServerClassifier();
}
function HIo() {
    n().host.requestLatches.markThreadsHeldForServerClassifier();
}
function DIo(e) {
    return n().host.requestLatches.autoModeUnavailableResponse(e);
}
function EPr(e) {
    return n().host.requestLatches.autoModeUnavailableResponsesInARow(e);
}
function kPr(e, t) {
    n().host.requestLatches.noteAutoModeUnavailableResponse(e, t);
}
function TPr(e) {
    n().host.requestLatches.clearAutoModeUnavailableResponses(e);
}
function APr(e) {
    n().host.requestLatches.setAutoModeUnavailableStopNotice(e);
}
function j2n() {
    return n().host.requestLatches.autoModeUnavailableStopNotice();
}
function LIo(e) {
    n().host.requestLatches.setLocalCommandExitCode(e);
}
function NIo() {
    return n().host.requestLatches.localCommandExitCode();
}
function $Io() {
    return n().host.requestLatches.observedGateway();
}
function FIo(e) {
    n().host.requestLatches.noteObservedGateway(e);
}
function W2n() {
    return n().host.requestLatches.serverClassifierFallbackChoice();
}
function UIo(e) {
    n().host.requestLatches.setServerClassifierFallbackChoice(e);
}
function CPr() {
    n().host.requestLatches.clearServerClassifierFallbackChoice();
}
function BIo() {
    return n().host.requestLatches.takeServerClassifierFallbackAnnouncement();
}
function jIo() {
    return n().host.requestLatches.perTurnEffortOkEmitted();
}
function WIo() {
    n().host.requestLatches.markPerTurnEffortOkEmitted();
}
function zIo() {
    return n().host.requestLatches.lateToolAdditionsOkEmitted();
}
function GIo() {
    n().host.requestLatches.markLateToolAdditionsOkEmitted();
}
function VIo() {
    return n().host.requestLatches.toolChangeHeaderRefused();
}
function qIo() {
    n().host.requestLatches.markToolChangeHeaderRefused();
}
function KIo() {
    return n().host.requestLatches.promptEndMarkRefused();
}
function YIo() {
    n().host.requestLatches.markPromptEndMarkRefused();
}
function z2n() {
    return n().host.requestLatches.inlineToolsRefused();
}
function RPr() {
    n().host.requestLatches.markInlineToolsRefused();
}
function XIo() {
    return n().host.requestLatches.inlineToolsOkEmitted();
}
function JIo() {
    n().host.requestLatches.markInlineToolsOkEmitted();
}
function xPr() {
    return n().host.requestLatches.thinkingResumptionRefused();
}
function QIo() {
    n().host.requestLatches.markThinkingResumptionRefused();
}
function ZIo() {
    return n().host.requestLatches.refusedBetaHeaders();
}
function Upt(e) {
    n().host.requestLatches.markBetaHeaderRefused(e);
}
function qsn() {
    return n().host.requestLatches.thinkingHighlightsRefused();
}
function eOo() {
    n().host.requestLatches.markThinkingHighlightsRefused();
}
function tOo(e) {
    return n().host.requestLatches.toolChangeUnsupportedModels().has(e);
}
function nOo(e) {
    n().host.requestLatches.markToolChangeUnsupportedModel(e);
}
function kwe(e) {
    return n().host.requestLatches.inferenceProfileBackingModels().get(e);
}
function rOo(e, t) {
    n().host.requestLatches.recordInferenceProfileBackingModel(e, t);
}
function li() {
    return h()?.stickyBetas ?? n().conversationLatches.stickyBetas();
}
function P9() {
    let e = h();
    if (e) {
        return e.conversationAtisLatch;
    }
    return n().conversationLatches.atisLatch();
}
function $Be(e) {
    let t = h();
    if (t) {
        t.conversationAtisLatch = e;
    } else {
        n().conversationLatches.replaceAtisLatch(e);
    }
}
function G2n() {
    let e = h();
    if (e) {
        e.stickyBetas = z(e.stickyBetas);
    } else {
        n().conversationLatches.unlatchStickyBetas();
    }
    vPr();
}
function jPe() {
    return n().requestJournal.promptId();
}
function p0t(e) {
    n().requestJournal.replacePromptId(e);
}
function oOo() {
    return n().requestJournal.incrementPromptIndex();
}
function Dq() {
    return n().requestJournal.promptIndex();
}
function Ksn(uuid, timestamp) {
    let requestJournal = n().requestJournal;
    let r = requestJournal.lastPersonPrompt();
    let i = Date.parse(timestamp);
    if (r === null || !Number.isNaN(i) && !(i < Date.parse(r.timestamp))) {
        requestJournal.replaceLastPersonPrompt({
            uuid,
            timestamp
        });
    }
}
function V2n() {
    return n().requestJournal.lastPersonPrompt();
}
function sd() {
    return n().surfaceCapabilities.replBridgeActive();
}
function FBe(e) {
    n().surfaceCapabilities.replaceReplBridgeActive(e);
}
function Twe() {
    return n().surfaceCapabilities.mainLoopBusy();
}
function Ysn() {
    return n().surfaceCapabilities.mainQueryRunning();
}
function sOo(e) {
    n().surfaceCapabilities.replaceMainLoopStatus(e);
}
export { randomUUID as fwe, mMs, _2n, oRo, _Be, oxr, sxr, $on, Fon, NDt, Array_isArray as zw, ixr, axr, lxr, $Dt, tG, I8e, bBe, O8e, Uon, SBe, Bon, cxr, FDt, dxr, mwe, $pe, b2n, bpt, M8e, Vn, q, UP, UDt, H8e, uxr, $Z, aA, Spt, S2n, sRo, wpt, iRo, vpt, w2n, gMs, Ept, aRo, lRo, jon, pxr, x0, Z_, qm, Lf, fxr, hMs, v2n, mxr, gxr, kpt, Won, FZ, hxr, BDt, Nse, wBe, Fpe, Upe, $se, D8e, yxr, _xr, L8e, oU, oo, Fse, N8e, cRo, bxr, dRo, yMs, E2n, $8e, BP, Sxr, bo, wxr, lt, _Ms, B, cs, nVs, K, Xe, uRo, IPe, k_, vd, vxr, pRo, OPe, k2n, Exr, zon, jDt, Bpe, we, Vl, u6, BR, cr, AS, Gon, jR, fRo, gwe, WR, F8e, Von, vBe, mRo, Use, gRo, hRo, kxr, yRo, Txr, _Ro, bRo, SRo, wRo, vRo, ERo, kRo, T2n, qon, TRo, ARo, qv, Kon, Yon, Xon, P0, CRo, E9, RRo, Jon, A2n, xRo, PRo, uy, I0, jpe, Axr, Cxr, Rxr, Tpt, IRo, Wpe, zpe, Rq, ORo, MRo, MPe, HPe, WDt, Lg, zDt, GDt, HRo, DRo, xxr, Pxr, k9, nG, LRo, hwe, U8e, p6, NRo, xq, Qon, $Ro, FRo, URo, Apt, DPe, LPe, BRo, UZ, C2n, VDt, jRo, Ip, Ixr, B8e, j8e, WRo, NPe, zRo, GRo, Oxr, Cpt, Zon, FO, VRo, Xc, sU, gp, esn, tsn, qRo, rG, qDt, EBe, KRo, Mxr, YRo, KDt, Gpe, nj, nsn, XRo, JRo, QRo, ZRo, Pq, Hxr, Bse, exo, txo, rsn, nxo, rxo, oxo, R2n, Rpt, oG, kBe, sxo, ixo, axo, osn, lxo, cxo, W8e, dxo, uxo, Xf, pxo, YDt, fxo, mxo, ssn, Dxr, Lxr, gxo, Nxr, ywe, XDt, TBe, isn, hxo, yxo, _xo, bxo, Sxo, asn, wxo, z8e, vxo, Kr, Exo, JDt, x2n, kxo, Txo, Axo, xpt, $xr, ABe, Fxr, Uxr, Cxo, Bxr, Rxo, lsn, QDt, G8e, jxr, P2n, xxo, Pxo, Wxr, Ixo, Ee, ZDt, zR, Oxo, Mxo, Hxo, Dxo, e0t, Op, Lxo, T9, Nxo, V8e, q8e, UO, $xo, bu, Fxo, O0, Uxo, csn, Bxo, Ppt, jxo, Wxo, zxo, Iq, Gxo, $Pe, dsn, Vxo, CBe, usn, psn, qxo, fsn, sw, msn, gsn, EC, Kxo, Yxo, Xxo, kC, BZ, t0t, jse, K8e, n0t, zxr, r0t, Jxo, Y8e, Qxo, Zxo, Ipt, ePo, tPo, rj, FPe, nPo, rPo, oPo, sPo, iPo, aPo, lPo, hsn, Gxr, Vxr, _we, cPo, dPo, uPo, qxr, BO, pPo, Vpe, fPo, ek, mPo, jZ, gPo, py, iU, Opt, hPo, WZ, yPo, RBe, xBe, Oq, LN, Mq, o0t, _Po, s0t, Kxr, Yxr, bPo, Mpt, Xxr, I2n, SPo, eo, wPo, DH, O2n, vPo, EPo, ysn, X8e, _sn, zZ, kPo, bwe, qpe, TPo, APo, UPe, Jxr, CPo, bsn, M2n, BPe, RPo, H2n, Qxr, Ssn, xPo, PBe, Kpe, Zxr, wsn, f6, nT, vsn, aU, PPo, IBe, Hpt, Esn, IPo, OPo, D2n, OBe, MPo, HPo, DPo, J8e, ksn, Tsn, Asn, rT, LPo, Dpt, NPo, GZ, $Po, Wse, FPo, eb, UPo, BPo, sG, Csn, jPo, Lh, WPo, MBe, Rsn, A9, lU, L2n, zPo, Km, Swe, GPo, ePr, xsn, Ype, Lpt, tPr, Psn, Isn, i0t, Osn, a0t, N2n, m6, Msn, VPo, l0t, M0, wwe, HBe, vwe, qPo, jP, Ce, oj, CS, Hsn, DBe, Dsn, Lsn, NN, nPr, KPo, YPo, rPr, XPo, c0t, JPo, QPo, Hq, Xpe, ZPo, H0, eIo, oPr, sPr, tIo, iPr, nIo, aPr, RS, Nsn, g6, Npt, $sn, rIo, lPr, Fsn, h6, $N, oIo, Usn, sIo, cPr, iG, dPr, C9, iIo, Ewe, uPr, pPr, aIo, fPr, mPr, gPr, hPr, lIo, $2n, yPr, cIo, $pt, dIo, uIo, pIo, _Pr, fIo, d0t, u0t, bPr, VZ, R9, SPr, mIo, gIo, Q8e, rVs, oVs, sVs, Kv, zse, Gse, hIo, F2n, aG, yIo, jO, Bsn, jn, x9, Fpt, _Io, jsn, WP, Vse, iVs, bIo, SIo, od, cU, fy, LBe, Wsn, wIo, vIo, EIo, NBe, kIo, zsn, wPr, U2n, Gsn, TIo, AIo, CIo, RIo, xIo, vPr, PIo, IIo, OIo, MIo, qse, Vsn, B2n, HIo, DIo, EPr, kPr, TPr, APr, j2n, LIo, NIo, $Io, FIo, W2n, UIo, CPr, BIo, jIo, WIo, zIo, GIo, VIo, qIo, KIo, YIo, z2n, RPr, XIo, JIo, xPr, QIo, ZIo, Upt, qsn, eOo, tOo, nOo, kwe, rOo, li, P9, $Be, G2n, jPe, p0t, oOo, Dq, Ksn, V2n, sd, FBe, Twe, Ysn, sOo };
