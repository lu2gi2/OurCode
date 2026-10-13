import { Se, C, Mr, Le } from "/$bunfs/root/chunk-cj4xndke.js";
import mc from "crypto";
import hc from "url";
import Kf from "http";
import Xf from "https";
import gi from "http2";
import Ei from "util";
import { resolve } from "path";
import ye from "zlib";
import se, { Readable } from "stream";
import { EventEmitter } from "events";
const gn = C(function(Al, bn) {
    const Stream = Le("stream").Stream;
    const Ca = Le("util");
    bn.exports = oe;
    function oe() {
        this.source = null;
        this.dataSize = 0;
        this.maxDataSize = 1048576;
        this.pauseStream = true;
        this._maxDataSizeExceeded = false;
        this._released = false;
        this._bufferedEvents = [];
    }
    Ca.inherits(oe, Stream);
    oe.create = function(e, t) {
        const r = new this;
        t = t || {};
        for(const n in t){
            r[n] = t[n];
        }
        r.source = e;
        const e_emit = e.emit;
        e.emit = function() {
            r._handleEmit(arguments);
            return e_emit.apply(e, arguments);
        };
        e.on("error", function() {});
        if (r.pauseStream) {
            e.pause();
        }
        return r;
    };
    Object.defineProperty(oe.prototype, "readable", {
        configurable: true,
        enumerable: true,
        get: function() {
            return this.source.readable;
        }
    });
    oe.prototype.setEncoding = function() {
        return this.source.setEncoding.apply(this.source, arguments);
    };
    oe.prototype.resume = function() {
        if (!this._released) {
            this.release();
        }
        this.source.resume();
    };
    oe.prototype.pause = function() {
        this.source.pause();
    };
    oe.prototype.release = function() {
        this._released = true;
        this._bufferedEvents.forEach((e)=>{
            this.emit(...e);
        });
        this._bufferedEvents = [];
    };
    oe.prototype.pipe = function() {
        const e = Stream.prototype.pipe.apply(this, arguments);
        this.resume();
        return e;
    };
    oe.prototype._handleEmit = function(e) {
        if (this._released) {
            this.emit(...e);
            return;
        }
        if (e[0] === "data") {
            this.dataSize += e[1].length;
            this._checkIfMaxDataSizeExceeded();
        }
        this._bufferedEvents.push(e);
    };
    oe.prototype._checkIfMaxDataSizeExceeded = function() {
        if (this._maxDataSizeExceeded) {
            return;
        }
        if (this.dataSize <= this.maxDataSize) {
            return;
        }
        this._maxDataSizeExceeded = true;
        const e = `DelayedStream#maxDataSize of ${this.maxDataSize} bytes exceeded.`;
        this.emit("error", Error(e));
    };
});
const xn = C(function(Ol, wn) {
    const va = Le("util");
    const Stream = Le("stream").Stream;
    const En = gn();
    wn.exports = L;
    function L() {
        this.writable = false;
        this.readable = true;
        this.dataSize = 0;
        this.maxDataSize = 2097152;
        this.pauseStreams = true;
        this._released = false;
        this._streams = [];
        this._currentStream = null;
        this._insideLoop = false;
        this._pendingNext = false;
    }
    va.inherits(L, Stream);
    L.create = function(e) {
        const t = new this;
        e = e || {};
        for(const r in e){
            t[r] = e[r];
        }
        return t;
    };
    L.isStreamLike = function(e) {
        return typeof e !== "function" && typeof e !== "string" && typeof e !== "boolean" && typeof e !== "number" && !Buffer.isBuffer(e);
    };
    L.prototype.append = function(e) {
        const t = L.isStreamLike(e);
        if (t) {
            if (!(e instanceof En)) {
                const r = En.create(e, {
                    maxDataSize: Infinity,
                    pauseStream: this.pauseStreams
                });
                e.on("data", this._checkDataSize.bind(this));
                e = r;
            }
            this._handleErrors(e);
            if (this.pauseStreams) {
                e.pause();
            }
        }
        this._streams.push(e);
        return this;
    };
    L.prototype.pipe = function(e, t) {
        Stream.prototype.pipe.call(this, e, t);
        this.resume();
        return e;
    };
    L.prototype._getNext = function() {
        this._currentStream = null;
        if (this._insideLoop) {
            this._pendingNext = true;
            return;
        }
        this._insideLoop = true;
        try {
            do {
                this._pendingNext = false;
                this._realGetNext();
            }while (this._pendingNext)
        } finally{
            this._insideLoop = false;
        }
    };
    L.prototype._realGetNext = function() {
        const e = this._streams.shift();
        if (typeof e === "undefined") {
            this.end();
            return;
        }
        if (typeof e !== "function") {
            this._pipeNext(e);
            return;
        }
        e((function(r) {
            const n = L.isStreamLike(r);
            if (n) {
                r.on("data", this._checkDataSize.bind(this));
                this._handleErrors(r);
            }
            this._pipeNext(r);
        }).bind(this));
    };
    L.prototype._pipeNext = function(e) {
        this._currentStream = e;
        const t = L.isStreamLike(e);
        if (t) {
            e.on("end", this._getNext.bind(this));
            e.pipe(this, {
                end: false
            });
            return;
        }
        this.write(e);
        this._getNext();
    };
    L.prototype._handleErrors = function(e) {
        const t = this;
        e.on("error", function(r) {
            t._emitError(r);
        });
    };
    L.prototype.write = function(e) {
        this.emit("data", e);
    };
    L.prototype.pause = function() {
        if (!this.pauseStreams) {
            return;
        }
        if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause === "function") {
            this._currentStream.pause();
        }
        this.emit("pause");
    };
    L.prototype.resume = function() {
        if (!this._released) {
            this._released = true;
            this.writable = true;
            this._getNext();
        }
        if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume === "function") {
            this._currentStream.resume();
        }
        this.emit("resume");
    };
    L.prototype.end = function() {
        this._reset();
        this.emit("end");
    };
    L.prototype.destroy = function() {
        this._reset();
        this.emit("close");
    };
    L.prototype._reset = function() {
        this.writable = false;
        this._streams = [];
        this._currentStream = null;
    };
    L.prototype._checkDataSize = function() {
        this._updateDataSize();
        if (this.dataSize <= this.maxDataSize) {
            return;
        }
        const e = `DelayedStream#maxDataSize of ${this.maxDataSize} bytes exceeded.`;
        this._emitError(Error(e));
    };
    L.prototype._updateDataSize = function() {
        this.dataSize = 0;
        const e = this;
        this._streams.forEach((t)=>{
            if (!t.dataSize) {
                return;
            }
            e.dataSize += t.dataSize;
        });
        if (this._currentStream && this._currentStream.dataSize) {
            this.dataSize += this._currentStream.dataSize;
        }
    };
    L.prototype._emitError = function(e) {
        this._reset();
        this.emit("error", e);
    };
});
const Sn = C(function(Cl, _n) {
    const Ze = (e)=>()=>{
            throw Error(`mime-types.${e}() is stubbed in this build. Do not rely on axios auto-multipart serialization (plain object + Content-Type: multipart/form-data). Use native FormData or hand-roll the multipart body instead. See scripts/build-plugins.ts stubMimeTypes plugin.`);
        };
    _n.exports = {
        lookup: Ze("lookup"),
        contentType: Ze("contentType"),
        extension: Ze("extension"),
        charset: Ze("charset"),
        extensions: Object.create(null),
        types: Object.create(null),
        charsets: {
            lookup: Ze("charsets.lookup")
        }
    };
});
const On = C(function(vl, An) {
    An.exports = Ta;
    function Ta(e) {
        const t = typeof setImmediate === "function" ? setImmediate : typeof process === "object" && typeof process.nextTick === "function" ? process.nextTick : null;
        if (t) {
            t(e);
        } else {
            setTimeout(e, 0);
        }
    }
});
const Jt = C(function(Tl, vn) {
    const Cn = On();
    vn.exports = Pa;
    function Pa(e) {
        let t = false;
        Cn(function() {
            t = true;
        });
        return function(n, o) {
            if (t) {
                e(n, o);
            } else {
                Cn(function() {
                    e(n, o);
                });
            }
        };
    }
});
const Kt = C(function(Pl, Tn) {
    Tn.exports = Fa;
    function Fa(e) {
        Object.keys(e.jobs).forEach(La.bind(e));
        e.jobs = {};
    }
    function La(e) {
        if (typeof this.jobs[e] === "function") {
            this.jobs[e]();
        }
    }
});
const Xt = C(function(Fl, Fn) {
    const Pn = Jt();
    const Ba = Kt();
    Fn.exports = Na;
    function Na(e, t, r, n) {
        const o = r.keyedList ? r.keyedList[r.index] : r.index;
        r.jobs[o] = Da(t, o, e[o], function(s, i) {
            if (!(o in r.jobs)) {
                return;
            }
            delete r.jobs[o];
            if (s) {
                Ba(r);
            } else {
                r.results[o] = i;
            }
            n(s, r.results);
        });
    }
    function Da(e, t, r, n) {
        let o;
        if (e.length == 2) {
            o = e(r, Pn(n));
        } else {
            o = e(r, t, Pn(n));
        }
        return o;
    }
});
const Yt = C(function(Ll, Ln) {
    Ln.exports = Ua;
    function Ua(e, t) {
        const r = !Array.isArray(e);
        const n = {
            index: 0,
            keyedList: r || t ? Object.keys(e) : null,
            jobs: {},
            results: r ? {} : [],
            size: r ? Object.keys(e).length : e.length
        };
        if (t) {
            n.keyedList.sort(r ? t : (o, s)=>t(e[o], e[s]));
        }
        return n;
    }
});
const Qt = C(function(Bl, Bn) {
    const qa = Kt();
    const Ia = Jt();
    Bn.exports = ka;
    function ka(e) {
        if (!Object.keys(this.jobs).length) {
            return;
        }
        this.index = this.size;
        qa(this);
        Ia(e)(null, this.results);
    }
});
const Dn = C(function(Nl, Nn) {
    const ja = Xt();
    const Ma = Yt();
    const Ha = Qt();
    Nn.exports = za;
    function za(e, t, r) {
        const n = Ma(e);
        while(n.index < (n.keyedList || e).length){
            ja(e, t, n, function(o, s) {
                if (o) {
                    r(o, s);
                    return;
                }
                if (Object.keys(n.jobs).length === 0) {
                    r(null, n.results);
                    return;
                }
            });
            n.index++;
        }
        return Ha.bind(n, r);
    }
});
const Zt = C(function(Dl, xt) {
    const Un = Xt();
    const $a = Yt();
    const Va = Qt();
    xt.exports = Wa;
    xt.exports.ascending = qn;
    xt.exports.descending = Ga;
    function Wa(e, t, r, n) {
        const o = $a(e, r);
        Un(e, t, o, function s(i, a) {
            if (i) {
                n(i, a);
                return;
            }
            o.index++;
            if (o.index < (o.keyedList || e).length) {
                Un(e, t, o, s);
                return;
            }
            n(null, o.results);
        });
        return Va.bind(o, n);
    }
    function qn(e, t) {
        if (e < t) {
            return -1;
        }
        if (e > t) {
            return 1;
        }
        return 0;
    }
    function Ga(e, t) {
        return -1 * qn(e, t);
    }
});
const kn = C(function(Ul, In) {
    const Ja = Zt();
    In.exports = Ka;
    function Ka(e, t, r) {
        return Ja(e, t, null, r);
    }
});
const Mn = C(function(ql, jn) {
    jn.exports = {
        parallel: Dn(),
        serial: kn(),
        serialOrdered: Zt()
    };
});
const er = C(function(Il, Hn) {
    Hn.exports = Object;
});
const $n = C(function(kl, zn) {
    zn.exports = Error;
});
const Wn = C(function(jl, Vn) {
    Vn.exports = EvalError;
});
const Jn = C(function(Ml, Gn) {
    Gn.exports = RangeError;
});
const Xn = C(function(Hl, Kn) {
    Kn.exports = ReferenceError;
});
const Qn = C(function(zl, Yn) {
    Yn.exports = SyntaxError;
});
const _t = C(function($l, Zn) {
    Zn.exports = TypeError;
});
const to = C(function(Vl, eo) {
    eo.exports = URIError;
});
const no = C(function(Wl, ro) {
    ro.exports = Math.abs;
});
const so = C(function(Gl, oo) {
    oo.exports = Math.floor;
});
const ao = C(function(Jl, io) {
    io.exports = Math.max;
});
const co = C(function(Kl, uo) {
    uo.exports = Math.min;
});
const lo = C(function(Xl, fo) {
    fo.exports = Math.pow;
});
const ho = C(function(Yl, po) {
    po.exports = Math.round;
});
const yo = C(function(Ql, mo) {
    mo.exports = Number.isNaN || function(t) {
        return t !== t;
    };
});
const go = C(function(Zl, bo) {
    const Xa = yo();
    bo.exports = function(t) {
        if (Xa(t) || t === 0) {
            return t;
        }
        if (t < 0) {
            return -1;
        }
        return 1;
    };
});
const Ro = C(function(ep, Eo) {
    Eo.exports = Object.getOwnPropertyDescriptor;
});
const tr = C(function(tp, wo) {
    let St = Ro();
    if (St) {
        try {
            St([], "length");
        } catch (e) {
            St = null;
        }
    }
    wo.exports = St;
});
const _o = C(function(rp, xo) {
    let Ot = Object.defineProperty || false;
    if (Ot) {
        try {
            Ot({}, "a", {
                value: 1
            });
        } catch (e) {
            Ot = false;
        }
    }
    xo.exports = Ot;
});
const rr = C(function(np, So) {
    So.exports = function() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
            return false;
        }
        if (typeof Symbol.iterator === "symbol") {
            return true;
        }
        const t = {};
        const r = Symbol("test");
        const n = Object(r);
        if (typeof r === "string") {
            return false;
        }
        if (Object.prototype.toString.call(r) !== "[object Symbol]") {
            return false;
        }
        if (Object.prototype.toString.call(n) !== "[object Symbol]") {
            return false;
        }
        const o = 42;
        t[r] = o;
        for(const s in t){
            return false;
        }
        if (typeof Object.keys === "function" && Object.keys(t).length !== 0) {
            return false;
        }
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(t).length !== 0) {
            return false;
        }
        const i = Object.getOwnPropertySymbols(t);
        if (i.length !== 1 || i[0] !== r) {
            return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(t, r)) {
            return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
            const a = Object.getOwnPropertyDescriptor(t, r);
            if (a.value !== o || a.enumerable !== true) {
                return false;
            }
        }
        return true;
    };
});
const Co = C(function(op, Oo) {
    const Ao = typeof Symbol !== "undefined" && Symbol;
    const Ya = rr();
    Oo.exports = function() {
        if (typeof Ao !== "function") {
            return false;
        }
        if (typeof Symbol !== "function") {
            return false;
        }
        if (typeof Ao("foo") !== "symbol") {
            return false;
        }
        if (typeof Symbol("bar") !== "symbol") {
            return false;
        }
        return Ya();
    };
});
const nr = C(function(sp, vo) {
    vo.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
});
const or = C(function(ip, To) {
    const Qa = er();
    To.exports = Qa.getPrototypeOf || null;
});
const Lo = C(function(ap, Fo) {
    const Za = "Function.prototype.bind called on incompatible ";
    const toString = Object.prototype.toString;
    const ru = "[object Function]";
    const Po = (t, r)=>{
        const n = [];
        for(let o = 0; o < t.length; o += 1){
            n[o] = t[o];
        }
        for(let s = 0; s < r.length; s += 1){
            n[s + t.length] = r[s];
        }
        return n;
    };
    const nu = (t, r)=>{
        const n = [];
        for(let o = r || 0, s = 0; o < t.length; o += 1, s += 1){
            n[s] = t[o];
        }
        return n;
    };
    const ou = (e, t)=>{
        let r = "";
        for(let n = 0; n < e.length; n += 1){
            r += e[n];
            if (n + 1 < e.length) {
                r += t;
            }
        }
        return r;
    };
    Fo.exports = function(t) {
        const r = this;
        if (typeof r !== "function" || toString.apply(r) !== ru) {
            throw TypeError(Za + r);
        }
        const n = nu(arguments, 1);
        let o;
        const s = function() {
            if (this instanceof o) {
                const c = r.apply(this, Po(n, arguments));
                if (Object(c) === c) {
                    return c;
                }
                return this;
            }
            return r.apply(t, Po(n, arguments));
        };
        const i = Math.max(0, r.length - n.length);
        const a = [];
        for(let l = 0; l < i; l++){
            a[l] = `\$${l}`;
        }
        o = Function("binder", `return function (${ou(a, ",")}){ return binder.apply(this,arguments); }`)(s);
        if (r.prototype) {
            const f = function() {};
            f.prototype = r.prototype;
            o.prototype = new f;
            f.prototype = null;
        }
        return o;
    };
});
const Ee = C(function(up, Bo) {
    const su = Lo();
    Bo.exports = Function.prototype.bind || su;
});
const Ct = C(function(cp, No) {
    No.exports = Function.prototype.call;
});
const sr = C(function(fp, Do) {
    Do.exports = Function.prototype.apply;
});
const qo = C(function(lp, Uo) {
    Uo.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
});
const ko = C(function(pp, Io) {
    const iu = Ee();
    const au = sr();
    const uu = Ct();
    const cu = qo();
    Io.exports = cu || iu.call(uu, au);
});
const Mo = C(function(dp, jo) {
    const fu = Ee();
    const lu = _t();
    const pu = Ct();
    const du = ko();
    jo.exports = function(t) {
        if (t.length < 1 || typeof t[0] !== "function") {
            throw new lu("a function is required");
        }
        return du(fu, pu, t);
    };
});
const Go = C(function(hp, Wo) {
    const hu = Mo();
    const Ho = tr();
    let $o;
    try {
        $o = [].__proto__ === Array.prototype;
    } catch (error) {
        if (!error || typeof error !== "object" || !("code" in error) || error.code !== "ERR_PROTO_ACCESS") {
            throw error;
        }
    }
    const ir = !!$o && Ho && Ho(Object.prototype, "__proto__");
    const Object_getPrototypeOf = Object.getPrototypeOf;
    Wo.exports = ir && typeof ir.get === "function" ? hu([
        ir.get
    ]) : typeof Object_getPrototypeOf === "function" ? function(t) {
        return Object_getPrototypeOf(t == null ? t : Object(t));
    } : false;
});
const Qo = C(function(mp, Yo) {
    const Jo = nr();
    const Ko = or();
    const Xo = Go();
    Yo.exports = Jo ? function(t) {
        return Jo(t);
    } : Ko ? function(t) {
        if (!t || typeof t !== "object" && typeof t !== "function") {
            throw TypeError("getProto: not an object");
        }
        return Ko(t);
    } : Xo ? function(t) {
        return Xo(t);
    } : null;
});
const es = C(function(yp, Zo) {
    const call = Function.prototype.call;
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const bu = Ee();
    Zo.exports = bu.call(call, hasOwnProperty);
});
const is = C(function(bp, ss) {
    let _;
    const gu = er();
    const Eu = $n();
    const Ru = Wn();
    const wu = Jn();
    const xu = Xn();
    const je = Qn();
    const ke = _t();
    const _u = to();
    const Su = no();
    const Au = so();
    const Ou = ao();
    const Cu = co();
    const vu = lo();
    const Tu = ho();
    const Pu = go();
    const ar = (e)=>{
        try {
            return Function(`"use strict"; return (${e}).constructor;`)();
        } catch (t) {}
    };
    const et = tr();
    const Fu = _o();
    const ur = function() {
        throw new ke;
    };
    const Lu = et ? function() {
        try {
            arguments.callee;
            return ur;
        } catch (e) {
            try {
                return et(arguments, "callee").get;
            } catch (t) {
                return ur;
            }
        }
    }() : ur;
    const qe = Co()();
    const M = Qo();
    const Bu = or();
    const Nu = nr();
    const os = sr();
    const tt = Ct();
    const Ie = {};
    const Du = typeof Uint8Array === "undefined" || !M ? _ : M(Uint8Array);
    const Re = {
        __proto__: null,
        "%AggregateError%": typeof AggregateError === "undefined" ? _ : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? _ : ArrayBuffer,
        "%ArrayIteratorPrototype%": qe && M ? M([][Symbol.iterator]()) : _,
        "%AsyncFromSyncIteratorPrototype%": _,
        "%AsyncFunction%": Ie,
        "%AsyncGenerator%": Ie,
        "%AsyncGeneratorFunction%": Ie,
        "%AsyncIteratorPrototype%": Ie,
        "%Atomics%": typeof Atomics === "undefined" ? _ : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? _ : BigInt,
        "%BigInt64Array%": typeof BigInt64Array === "undefined" ? _ : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array === "undefined" ? _ : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? _ : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Eu,
        "%eval%": eval,
        "%EvalError%": Ru,
        "%Float16Array%": typeof Float16Array === "undefined" ? _ : Float16Array,
        "%Float32Array%": typeof Float32Array === "undefined" ? _ : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? _ : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? _ : FinalizationRegistry,
        "%Function%": Function,
        "%GeneratorFunction%": Ie,
        "%Int8Array%": typeof Int8Array === "undefined" ? _ : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? _ : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? _ : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": qe && M ? M(M([][Symbol.iterator]())) : _,
        "%JSON%": typeof JSON === "object" ? JSON : _,
        "%Map%": typeof Map === "undefined" ? _ : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !qe || !M ? _ : M(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": gu,
        "%Object.getOwnPropertyDescriptor%": et,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? _ : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? _ : Proxy,
        "%RangeError%": wu,
        "%ReferenceError%": xu,
        "%Reflect%": typeof Reflect === "undefined" ? _ : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? _ : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !qe || !M ? _ : M(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? _ : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": qe && M ? M(""[Symbol.iterator]()) : _,
        "%Symbol%": qe ? Symbol : _,
        "%SyntaxError%": je,
        "%ThrowTypeError%": Lu,
        "%TypedArray%": Du,
        "%TypeError%": ke,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? _ : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? _ : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? _ : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? _ : Uint32Array,
        "%URIError%": _u,
        "%WeakMap%": typeof WeakMap === "undefined" ? _ : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? _ : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? _ : WeakSet,
        "%Function.prototype.call%": tt,
        "%Function.prototype.apply%": os,
        "%Object.defineProperty%": Fu,
        "%Object.getPrototypeOf%": Bu,
        "%Math.abs%": Su,
        "%Math.floor%": Au,
        "%Math.max%": Ou,
        "%Math.min%": Cu,
        "%Math.pow%": vu,
        "%Math.round%": Tu,
        "%Math.sign%": Pu,
        "%Reflect.getPrototypeOf%": Nu
    };
    if (M) {
        try {
            null.error;
        } catch (error) {
            cr = M(M(error));
            Re["%Error.prototype%"] = cr;
        }
    }
    var cr;
    const Uu = function e(t) {
        let r;
        if (t === "%AsyncFunction%") {
            r = ar("async function () {}");
        } else if (t === "%GeneratorFunction%") {
            r = ar("function* () {}");
        } else if (t === "%AsyncGeneratorFunction%") {
            r = ar("async function* () {}");
        } else if (t === "%AsyncGenerator%") {
            const n = e("%AsyncGeneratorFunction%");
            if (n) {
                r = n.prototype;
            }
        } else if (t === "%AsyncIteratorPrototype%") {
            const o = e("%AsyncGenerator%");
            if (o && M) {
                r = M(o.prototype);
            }
        }
        Re[t] = r;
        return r;
    };
    const ts = {
        __proto__: null,
        "%ArrayBufferPrototype%": [
            "ArrayBuffer",
            "prototype"
        ],
        "%ArrayPrototype%": [
            "Array",
            "prototype"
        ],
        "%ArrayProto_entries%": [
            "Array",
            "prototype",
            "entries"
        ],
        "%ArrayProto_forEach%": [
            "Array",
            "prototype",
            "forEach"
        ],
        "%ArrayProto_keys%": [
            "Array",
            "prototype",
            "keys"
        ],
        "%ArrayProto_values%": [
            "Array",
            "prototype",
            "values"
        ],
        "%AsyncFunctionPrototype%": [
            "AsyncFunction",
            "prototype"
        ],
        "%AsyncGenerator%": [
            "AsyncGeneratorFunction",
            "prototype"
        ],
        "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype"
        ],
        "%BooleanPrototype%": [
            "Boolean",
            "prototype"
        ],
        "%DataViewPrototype%": [
            "DataView",
            "prototype"
        ],
        "%DatePrototype%": [
            "Date",
            "prototype"
        ],
        "%ErrorPrototype%": [
            "Error",
            "prototype"
        ],
        "%EvalErrorPrototype%": [
            "EvalError",
            "prototype"
        ],
        "%Float32ArrayPrototype%": [
            "Float32Array",
            "prototype"
        ],
        "%Float64ArrayPrototype%": [
            "Float64Array",
            "prototype"
        ],
        "%FunctionPrototype%": [
            "Function",
            "prototype"
        ],
        "%Generator%": [
            "GeneratorFunction",
            "prototype"
        ],
        "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype"
        ],
        "%Int8ArrayPrototype%": [
            "Int8Array",
            "prototype"
        ],
        "%Int16ArrayPrototype%": [
            "Int16Array",
            "prototype"
        ],
        "%Int32ArrayPrototype%": [
            "Int32Array",
            "prototype"
        ],
        "%JSONParse%": [
            "JSON",
            "parse"
        ],
        "%JSONStringify%": [
            "JSON",
            "stringify"
        ],
        "%MapPrototype%": [
            "Map",
            "prototype"
        ],
        "%NumberPrototype%": [
            "Number",
            "prototype"
        ],
        "%ObjectPrototype%": [
            "Object",
            "prototype"
        ],
        "%ObjProto_toString%": [
            "Object",
            "prototype",
            "toString"
        ],
        "%ObjProto_valueOf%": [
            "Object",
            "prototype",
            "valueOf"
        ],
        "%PromisePrototype%": [
            "Promise",
            "prototype"
        ],
        "%PromiseProto_then%": [
            "Promise",
            "prototype",
            "then"
        ],
        "%Promise_all%": [
            "Promise",
            "all"
        ],
        "%Promise_reject%": [
            "Promise",
            "reject"
        ],
        "%Promise_resolve%": [
            "Promise",
            "resolve"
        ],
        "%RangeErrorPrototype%": [
            "RangeError",
            "prototype"
        ],
        "%ReferenceErrorPrototype%": [
            "ReferenceError",
            "prototype"
        ],
        "%RegExpPrototype%": [
            "RegExp",
            "prototype"
        ],
        "%SetPrototype%": [
            "Set",
            "prototype"
        ],
        "%SharedArrayBufferPrototype%": [
            "SharedArrayBuffer",
            "prototype"
        ],
        "%StringPrototype%": [
            "String",
            "prototype"
        ],
        "%SymbolPrototype%": [
            "Symbol",
            "prototype"
        ],
        "%SyntaxErrorPrototype%": [
            "SyntaxError",
            "prototype"
        ],
        "%TypedArrayPrototype%": [
            "TypedArray",
            "prototype"
        ],
        "%TypeErrorPrototype%": [
            "TypeError",
            "prototype"
        ],
        "%Uint8ArrayPrototype%": [
            "Uint8Array",
            "prototype"
        ],
        "%Uint8ClampedArrayPrototype%": [
            "Uint8ClampedArray",
            "prototype"
        ],
        "%Uint16ArrayPrototype%": [
            "Uint16Array",
            "prototype"
        ],
        "%Uint32ArrayPrototype%": [
            "Uint32Array",
            "prototype"
        ],
        "%URIErrorPrototype%": [
            "URIError",
            "prototype"
        ],
        "%WeakMapPrototype%": [
            "WeakMap",
            "prototype"
        ],
        "%WeakSetPrototype%": [
            "WeakSet",
            "prototype"
        ]
    };
    const rt = Ee();
    const vt = es();
    const qu = rt.call(tt, Array.prototype.concat);
    const Iu = rt.call(os, Array.prototype.splice);
    const rs = rt.call(tt, String.prototype.replace);
    const Tt = rt.call(tt, String.prototype.slice);
    const ku = rt.call(tt, RegExp.prototype.exec);
    const ju = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    const Mu = /\\(\\)?/g;
    const Hu = (t)=>{
        const r = Tt(t, 0, 1);
        const n = Tt(t, -1);
        if (r === "%" && n !== "%") {
            throw new je("invalid intrinsic syntax, expected closing `%`");
        } else if (n === "%" && r !== "%") {
            throw new je("invalid intrinsic syntax, expected opening `%`");
        }
        const o = [];
        rs(t, ju, function(s, i, a, l) {
            o[o.length] = a ? rs(l, Mu, "$1") : i || s;
        });
        return o;
    };
    const zu = (t, r)=>{
        let n = t;
        let alias;
        if (vt(ts, n)) {
            alias = ts[n];
            n = `%${alias[0]}%`;
        }
        if (vt(Re, n)) {
            let s = Re[n];
            if (s === Ie) {
                s = Uu(n);
            }
            if (typeof s === "undefined" && !r) {
                throw new ke(`intrinsic ${t} exists, but is not available. Please file an issue!`);
            }
            return {
                alias,
                name: n,
                value: s
            };
        }
        throw new je(`intrinsic ${t} does not exist!`);
    };
    ss.exports = function(t, r) {
        if (typeof t !== "string" || t.length === 0) {
            throw new ke("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof r !== "boolean") {
            throw new ke('"allowMissing" argument must be a boolean');
        }
        if (ku(/^%?[^%]*%?$/, t) === null) {
            throw new je("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        }
        const n = Hu(t);
        let o = n.length > 0 ? n[0] : "";
        const s = zu(`%${o}%`, r);
        let { name, value } = s;
        let l = false;
        const s_alias = s.alias;
        if (s_alias) {
            o = s_alias[0];
            Iu(n, qu([
                0,
                1
            ], s_alias));
        }
        for(let c = 1, p = true; c < n.length; c += 1){
            const d = n[c];
            const b = Tt(d, 0, 1);
            const m = Tt(d, -1);
            if ((b === '"' || b === "'" || b === "`" || m === '"' || m === "'" || m === "`") && b !== m) {
                throw new je("property names with quotes must have matching quotes");
            }
            if (d === "constructor" || !p) {
                l = true;
            }
            o += `.${d}`;
            name = `%${o}%`;
            if (vt(Re, name)) {
                value = Re[name];
            } else if (value != null) {
                if (!(d in value)) {
                    if (!r) {
                        throw new ke(`base intrinsic for ${t} exists, but the property is not available.`);
                    }
                    return;
                }
                if (et && c + 1 >= n.length) {
                    const g = et(value, d);
                    p = !!g;
                    if (p && "get" in g && !("originalValue" in g.get)) {
                        value = g.get;
                    } else {
                        value = value[d];
                    }
                } else {
                    p = vt(value, d);
                    value = value[d];
                }
                if (p && !l) {
                    Re[name] = value;
                }
            }
        }
        return value;
    };
});
const us = C(function(gp, as) {
    const $u = rr();
    as.exports = function() {
        return $u() && !!Symbol.toStringTag;
    };
});
const fs = C(function(Ep, cs) {
    const call = Function.prototype.call;
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const Gu = Ee();
    cs.exports = Gu.call(call, hasOwnProperty);
});
const ds = C(function(Rp, ps) {
    const Ju = is();
    const ls = Ju("%Object.defineProperty%", true);
    const Ku = us()();
    const Xu = fs();
    const Yu = _t();
    const Pt = Ku ? Symbol.toStringTag : null;
    ps.exports = function(t, r) {
        const n = arguments.length > 2 && !!arguments[2] && arguments[2].force;
        const o = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
        if (typeof n !== "undefined" && typeof n !== "boolean" || typeof o !== "undefined" && typeof o !== "boolean") {
            throw new Yu("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
        }
        if (Pt && (n || !Xu(t, Pt))) {
            if (ls) {
                ls(t, Pt, {
                    configurable: !o,
                    enumerable: false,
                    value: r,
                    writable: false
                });
            } else {
                t[Pt] = r;
            }
        }
    };
});
const ms = C(function(wp, hs) {
    const call = Function.prototype.call;
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const ec = Ee();
    hs.exports = ec.call(call, hasOwnProperty);
});
const bs = C(function(xp, ys) {
    ys.exports = function(e, t) {
        Object.keys(t).forEach((r)=>{
            e[r] = e[r] || t[r];
        });
        return e;
    };
});
const Rs = C(function(_p, Es) {
    const dr = xn();
    const tc = Le("util");
    const fr = Le("path");
    const rc = Le("http");
    const nc = Le("https");
    const parse = Le("url").parse;
    const sc = Le("fs");
    const Stream = Le("stream").Stream;
    const ac = Le("crypto");
    const lr = Sn();
    const uc = Mn();
    const cc = ds();
    const pe = ms();
    const pr = bs();
    function gs(e) {
        return String(e).replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/"/g, "%22");
    }
    class S extends dr {
        constructor(e){
            if (!(this instanceof S)) {
                return new S(e);
            }
            this._overheadLength = 0;
            this._valueLength = 0;
            this._valuesToMeasure = [];
            super();
            e = e || {};
            for(const t in e){
                this[t] = e[t];
            }
        }
        append(e, t, filename) {
            filename = filename || {};
            if (typeof filename === "string") {
                filename = {
                    filename
                };
            }
            const n = dr.prototype.append.bind(this);
            if (typeof t === "number" || t == null) {
                t = String(t);
            }
            if (Array.isArray(t)) {
                this._error(Error("Arrays are not supported."));
                return;
            }
            const o = this._multiPartHeader(e, t, filename);
            const s = this._multiPartFooter();
            n(o);
            n(t);
            n(s);
            this._trackLength(o, t, filename);
        }
        _trackLength(e, t, r) {
            let n = 0;
            if (r.knownLength != null) {
                n += Number(r.knownLength);
            } else if (Buffer.isBuffer(t)) {
                n = t.length;
            } else if (typeof t === "string") {
                n = Buffer.byteLength(t);
            }
            this._valueLength += n;
            this._overheadLength += Buffer.byteLength(e) + S.LINE_BREAK.length;
            if (!t || !t.path && !(t.readable && pe(t, "httpVersion")) && !(t instanceof Stream)) {
                return;
            }
            if (!r.knownLength) {
                this._valuesToMeasure.push(t);
            }
        }
        _lengthRetriever(e, t) {
            if (pe(e, "fd")) {
                if (e.end != null && e.end != Infinity && e.start != null) {
                    t(null, e.end + 1 - (e.start ? e.start : 0));
                } else {
                    sc.stat(e.path, function(r, n) {
                        if (r) {
                            t(r);
                            return;
                        }
                        const o = n.size - (e.start ? e.start : 0);
                        t(null, o);
                    });
                }
            } else if (pe(e, "httpVersion")) {
                t(null, Number(e.headers["content-length"]));
            } else if (pe(e, "httpModule")) {
                e.on("response", function(r) {
                    e.pause();
                    t(null, Number(r.headers["content-length"]));
                });
                e.resume();
            } else {
                t("Unknown stream");
            }
        }
        _multiPartHeader(e, t, r) {
            if (typeof r.header === "string") {
                return r.header;
            }
            const n = this._getContentDisposition(t, r);
            const o = this._getContentType(t, r);
            let s = "";
            const i = {
                "Content-Disposition": [
                    "form-data",
                    `name="${gs(e)}"`
                ].concat(n || []),
                "Content-Type": [].concat(o || [])
            };
            if (typeof r.header === "object") {
                pr(i, r.header);
            }
            let a;
            for(const l in i){
                if (pe(i, l)) {
                    a = i[l];
                    if (a == null) {
                        continue;
                    }
                    if (!Array.isArray(a)) {
                        a = [
                            a
                        ];
                    }
                    if (a.length) {
                        s += `${l}: ${a.join("; ")}${S.LINE_BREAK}`;
                    }
                }
            }
            return `--${this.getBoundary()}${S.LINE_BREAK}${s}${S.LINE_BREAK}`;
        }
        _getContentDisposition(e, t) {
            let r;
            if (typeof t.filepath === "string") {
                r = fr.normalize(t.filepath).replace(/\\/g, "/");
            } else if (t.filename || e && (e.name || e.path)) {
                r = fr.basename(t.filename || e && (e.name || e.path));
            } else if (e && e.readable && pe(e, "httpVersion")) {
                r = fr.basename(e.client._httpMessage.path || "");
            }
            if (r) {
                return `filename="${gs(r)}"`;
            }
        }
        _getContentType(e, t) {
            let t_contentType = t.contentType;
            if (!t_contentType && e && e.name) {
                t_contentType = lr.lookup(e.name);
            }
            if (!t_contentType && e && e.path) {
                t_contentType = lr.lookup(e.path);
            }
            if (!t_contentType && e && e.readable && pe(e, "httpVersion")) {
                t_contentType = e.headers["content-type"];
            }
            if (!t_contentType && (t.filepath || t.filename)) {
                t_contentType = lr.lookup(t.filepath || t.filename);
            }
            if (!t_contentType && e && typeof e === "object") {
                t_contentType = S.DEFAULT_CONTENT_TYPE;
            }
            return t_contentType;
        }
        _multiPartFooter() {
            return (function(e) {
                let S_LINE_BREAK = S.LINE_BREAK;
                const r = this._streams.length === 0;
                if (r) {
                    S_LINE_BREAK += this._lastBoundary();
                }
                e(S_LINE_BREAK);
            }).bind(this);
        }
        _lastBoundary() {
            return `--${this.getBoundary()}--${S.LINE_BREAK}`;
        }
        getHeaders(e) {
            let t;
            const r = {
                "content-type": `multipart/form-data; boundary=${this.getBoundary()}`
            };
            for(t in e){
                if (pe(e, t)) {
                    r[t.toLowerCase()] = e[t];
                }
            }
            return r;
        }
        setBoundary(e) {
            if (typeof e !== "string") {
                throw TypeError("FormData boundary must be a string");
            }
            this._boundary = e;
        }
        getBoundary() {
            if (!this._boundary) {
                this._generateBoundary();
            }
            return this._boundary;
        }
        getBuffer() {
            let e = new Buffer.alloc(0);
            const t = this.getBoundary();
            for(let r = 0, n = this._streams.length; r < n; r++){
                if (typeof this._streams[r] !== "function") {
                    if (Buffer.isBuffer(this._streams[r])) {
                        e = Buffer.concat([
                            e,
                            this._streams[r]
                        ]);
                    } else {
                        e = Buffer.concat([
                            e,
                            Buffer.from(this._streams[r])
                        ]);
                    }
                    if (typeof this._streams[r] !== "string" || this._streams[r].substring(2, t.length + 2) !== t) {
                        e = Buffer.concat([
                            e,
                            Buffer.from(S.LINE_BREAK)
                        ]);
                    }
                }
            }
            return Buffer.concat([
                e,
                Buffer.from(this._lastBoundary())
            ]);
        }
        _generateBoundary() {
            this._boundary = `--------------------------${ac.randomBytes(12).toString("hex")}`;
        }
        getLengthSync() {
            let e = this._overheadLength + this._valueLength;
            if (this._streams.length) {
                e += this._lastBoundary().length;
            }
            if (!this.hasKnownLength()) {
                this._error(Error("Cannot calculate proper length in synchronous way."));
            }
            return e;
        }
        hasKnownLength() {
            let e = true;
            if (this._valuesToMeasure.length) {
                e = false;
            }
            return e;
        }
        getLength(e) {
            let t = this._overheadLength + this._valueLength;
            if (this._streams.length) {
                t += this._lastBoundary().length;
            }
            if (!this._valuesToMeasure.length) {
                process.nextTick(e.bind(this, null, t));
                return;
            }
            uc.parallel(this._valuesToMeasure, this._lengthRetriever, function(r, n) {
                if (r) {
                    e(r);
                    return;
                }
                n.forEach((o)=>{
                    t += o;
                });
                e(null, t);
            });
        }
        submit(e, t) {
            let r;
            let n;
            const o = {
                method: "post"
            };
            if (typeof e === "string") {
                e = parse(e);
                n = pr({
                    port: e.port,
                    path: e.pathname,
                    host: e.hostname,
                    protocol: e.protocol
                }, o);
            } else {
                n = pr(e, o);
                if (!n.port) {
                    n.port = n.protocol === "https:" ? 443 : 80;
                }
            }
            n.headers = this.getHeaders(e.headers);
            if (n.protocol === "https:") {
                r = nc.request(n);
            } else {
                r = rc.request(n);
            }
            this.getLength((function(s, i) {
                if (s && s !== "Unknown stream") {
                    this._error(s);
                    return;
                }
                if (i) {
                    r.setHeader("Content-Length", i);
                }
                this.pipe(r);
                if (t) {
                    let a;
                    const l = function(f, c) {
                        r.removeListener("error", l);
                        r.removeListener("response", a);
                        return t.call(this, f, c);
                    };
                    a = l.bind(this, null);
                    r.on("error", l);
                    r.on("response", a);
                }
            }).bind(this));
            return r;
        }
        _error(e) {
            if (!this.error) {
                this.error = e;
                this.pause();
                this.emit("error", e);
            }
        }
        toString() {
            return "[object FormData]";
        }
    }
    S.LINE_BREAK = `\r
`;
    S.DEFAULT_CONTENT_TYPE = "application/octet-stream";
    cc(S.prototype, "FormData");
    Es.exports = S;
});
const bTo = C(function(Od, Us) {
    const ze = 1000;
    const $e = ze * 60;
    const Ve = $e * 60;
    const _e = Ve * 24;
    const Dc = _e * 7;
    const Uc = _e * 365.25;
    Us.exports = function(e, t) {
        t = t || {};
        const r = typeof e;
        if (r === "string" && e.length > 0) {
            return qc(e);
        } else if (r === "number" && isFinite(e)) {
            if (t.long) {
                return kc(e);
            }
            return Ic(e);
        }
        throw Error(`val is not a non-empty string or a valid number. val=${JSON.stringify(e)}`);
    };
    function qc(e) {
        e = String(e);
        if (e.length > 100) {
            return;
        }
        const t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
        if (!t) {
            return;
        }
        const r = parseFloat(t[1]);
        const n = (t[2] || "ms").toLowerCase();
        switch(n){
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
                return r * Uc;
            case "weeks":
            case "week":
            case "w":
                return r * Dc;
            case "days":
            case "day":
            case "d":
                return r * _e;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
                return r * Ve;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
                return r * $e;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
                return r * ze;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
                return r;
            default:
                return;
        }
    }
    function Ic(e) {
        const t = Math.abs(e);
        if (t >= _e) {
            return `${Math.round(e / _e)}d`;
        }
        if (t >= Ve) {
            return `${Math.round(e / Ve)}h`;
        }
        if (t >= $e) {
            return `${Math.round(e / $e)}m`;
        }
        if (t >= ze) {
            return `${Math.round(e / ze)}s`;
        }
        return `${e}ms`;
    }
    function kc(e) {
        const t = Math.abs(e);
        if (t >= _e) {
            return Nt(e, t, _e, "day");
        }
        if (t >= Ve) {
            return Nt(e, t, Ve, "hour");
        }
        if (t >= $e) {
            return Nt(e, t, $e, "minute");
        }
        if (t >= ze) {
            return Nt(e, t, ze, "second");
        }
        return `${e} ms`;
    }
    function Nt(e, t, r, n) {
        const o = t >= r * 1.5;
        return `${Math.round(e / r)} ${n}${o ? "s" : ""}`;
    }
});
const Cr = C(function(Cd, qs) {
    function jc(e) {
        r.debug = r;
        r.default = r;
        r.coerce = l;
        r.disable = i;
        r.enable = o;
        r.enabled = a;
        r.humanize = bTo();
        r.destroy = f;
        Object.keys(e).forEach((c)=>{
            r[c] = e[c];
        });
        r.names = [];
        r.skips = [];
        r.formatters = {};
        function t(c) {
            let p = 0;
            for(let d = 0; d < c.length; d++){
                p = (p << 5) - p + c.charCodeAt(d);
                p |= 0;
            }
            return r.colors[Math.abs(p) % r.colors.length];
        }
        r.selectColor = t;
        function r(c) {
            let p;
            let d = null;
            let b;
            let m;
            function g(...h) {
                if (!g.enabled) {
                    return;
                }
                let E = g;
                let N = Number(new Date);
                let v = N - (p || N);
                E.diff = v;
                E.prev = p;
                E.curr = N;
                p = N;
                h[0] = r.coerce(h[0]);
                if (typeof h[0] !== "string") {
                    h.unshift("%O");
                }
                let x = 0;
                h[0] = h[0].replace(/%([a-zA-Z%])/g, (G, T)=>{
                    if (G === "%%") {
                        return "%";
                    }
                    x++;
                    let J = r.formatters[T];
                    if (typeof J === "function") {
                        let D = h[x];
                        G = J.call(E, D);
                        h.splice(x, 1);
                        x--;
                    }
                    return G;
                });
                r.formatArgs.call(E, h);
                (E.log || r.log).apply(E, h);
            }
            g.namespace = c;
            g.useColors = r.useColors();
            g.color = r.selectColor(c);
            g.extend = n;
            g.destroy = r.destroy;
            Object.defineProperty(g, "enabled", {
                enumerable: true,
                configurable: false,
                get: ()=>{
                    if (d !== null) {
                        return d;
                    }
                    if (b !== r.namespaces) {
                        b = r.namespaces;
                        m = r.enabled(c);
                    }
                    return m;
                },
                set: (h)=>{
                    d = h;
                }
            });
            if (typeof r.init === "function") {
                r.init(g);
            }
            return g;
        }
        function n(c, p) {
            let d = r(this.namespace + (typeof p === "undefined" ? ":" : p) + c);
            d.log = this.log;
            return d;
        }
        function o(c) {
            r.save(c);
            r.namespaces = c;
            r.names = [];
            r.skips = [];
            let p = (typeof c === "string" ? c : "").trim().replace(" ", ",").split(",").filter(Boolean);
            for (let d of p){
                if (d[0] === "-") {
                    r.skips.push(d.slice(1));
                } else {
                    r.names.push(d);
                }
            }
        }
        function s(c, p) {
            let d = 0;
            let b = 0;
            let m = -1;
            let g = 0;
            while(d < c.length){
                if (b < p.length && (p[b] === c[d] || p[b] === "*")) {
                    if (p[b] === "*") {
                        m = b;
                        g = d;
                        b++;
                    } else {
                        d++;
                        b++;
                    }
                } else if (m !== -1) {
                    b = m + 1;
                    g++;
                    d = g;
                } else {
                    return false;
                }
            }
            while(b < p.length && p[b] === "*"){
                b++;
            }
            return b === p.length;
        }
        function i() {
            let c = [
                ...r.names,
                ...r.skips.map((p)=>`-${p}`)
            ].join(",");
            r.enable("");
            return c;
        }
        function a(c) {
            for (let p of r.skips){
                if (s(c, p)) {
                    return false;
                }
            }
            for (let p of r.names){
                if (s(c, p)) {
                    return true;
                }
            }
            return false;
        }
        function l(c) {
            if (c instanceof Error) {
                return c.stack || c.message;
            }
            return c;
        }
        function f() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        r.enable(r.load());
        return r;
    }
    qs.exports = jc;
});
const Is = C(function(vr, Ut) {
    vr.formatArgs = Hc;
    vr.save = zc;
    vr.load = $c;
    vr.useColors = Mc;
    vr.storage = Vc();
    vr.destroy = (()=>{
        let e = false;
        return ()=>{
            if (!e) {
                e = true;
                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
            }
        };
    })();
    vr.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
    ];
    function Mc() {
        if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
            return true;
        }
        if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
            return false;
        }
        let e;
        return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function Hc(e) {
        e[0] = `${(this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ")}+${Ut.exports.humanize(this.diff)}`;
        if (!this.useColors) {
            return;
        }
        let t = `color: ${this.color}`;
        e.splice(1, 0, t, "color: inherit");
        let r = 0;
        let n = 0;
        e[0].replace(/%[a-zA-Z%]/g, (o)=>{
            if (o === "%%") {
                return;
            }
            r++;
            if (o === "%c") {
                n = r;
            }
        });
        e.splice(n, 0, t);
    }
    vr.log = console.debug || console.log || (()=>{});
    function zc(e) {
        try {
            if (e) {
                vr.storage.setItem("debug", e);
            } else {
                vr.storage.removeItem("debug");
            }
        } catch (t) {}
    }
    function $c() {
        let e;
        try {
            e = vr.storage.getItem("debug");
        } catch (t) {}
        if (!e && typeof process !== "undefined" && "env" in process) {
            e = process.env.DEBUG;
        }
        return e;
    }
    function Vc() {
        try {
            return localStorage;
        } catch (e) {}
    }
    Ut.exports = Cr()(vr);
    const { formatters } = Ut.exports;
    formatters.j = function(e) {
        try {
            return JSON.stringify(e);
        } catch (error) {
            return `[UnexpectedJSONParseError]: ${error.message}`;
        }
    };
});
const hCr = C(function(Td, ks) {
    ks.exports = (e, t = process.argv)=>{
        let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--";
        let n = t.indexOf(r + e);
        let o = t.indexOf("--");
        return n !== -1 && (o === -1 || n < o);
    };
});
const Ms = C(function(Fd, js) {
    const Pd = Le("os");
    const qt = Le("tty");
    const ee = hCr();
    const { env } = process;
    let It;
    if (ee("no-color") || ee("no-colors") || ee("color=false") || ee("color=never")) {
        It = 0;
    } else if (ee("color") || ee("colors") || ee("color=true") || ee("color=always")) {
        It = 1;
    }
    function ef() {
        if ("FORCE_COLOR" in env) {
            if (env.FORCE_COLOR === "true") {
                return 1;
            }
            if (env.FORCE_COLOR === "false") {
                return 0;
            }
            if (env.FORCE_COLOR.length === 0) {
                return 1;
            }
            return Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
        }
    }
    function tf(level) {
        if (level === 0) {
            return false;
        }
        return {
            level,
            hasBasic: true,
            has256: level >= 2,
            has16m: level >= 3
        };
    }
    function rf(e, { streamIsTTY, sniffFlags = true } = {}) {
        let n = ef();
        if (n !== undefined) {
            It = n;
        }
        let o = sniffFlags ? It : n;
        if (o === 0) {
            return 0;
        }
        if (sniffFlags) {
            if (ee("color=16m") || ee("color=full") || ee("color=truecolor")) {
                return 3;
            }
            if (ee("color=256")) {
                return 2;
            }
        }
        if (e && !streamIsTTY && o === undefined) {
            return 0;
        }
        let s = o || 0;
        if (env.TERM === "dumb") {
            return s;
        }
        if ("CI" in env) {
            if ([
                "TRAVIS",
                "CIRCLECI",
                "APPVEYOR",
                "GITLAB_CI",
                "GITHUB_ACTIONS",
                "BUILDKITE",
                "DRONE"
            ].some((i)=>i in env) || env.CI_NAME === "codeship") {
                return 1;
            }
            return s;
        }
        if ("TEAMCITY_VERSION" in env) {
            if (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION)) {
                return 1;
            }
            return 0;
        }
        if (env.COLORTERM === "truecolor") {
            return 3;
        }
        if ("TERM_PROGRAM" in env) {
            let i = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
            switch(env.TERM_PROGRAM){
                case "iTerm.app":
                    if (i >= 3) {
                        return 3;
                    }
                    return 2;
                case "Apple_Terminal":
                    return 2;
            }
        }
        if (/-256(color)?$/i.test(env.TERM)) {
            return 2;
        }
        if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
            return 1;
        }
        if ("COLORTERM" in env) {
            return 1;
        }
        return s;
    }
    function supportsColor(e, t = {}) {
        let r = rf(e, {
            streamIsTTY: e && e.isTTY,
            ...t
        });
        return tf(r);
    }
    js.exports = {
        supportsColor,
        stdout: supportsColor({
            isTTY: qt.isatty(1)
        }),
        stderr: supportsColor({
            isTTY: qt.isatty(2)
        })
    };
});
const Vs = C(function(Pr, kt) {
    const Hs = Le("tty");
    const me = Le("util");
    Pr.init = ff;
    Pr.log = af;
    Pr.formatArgs = of;
    Pr.save = uf;
    Pr.load = cf;
    Pr.useColors = nf;
    Pr.destroy = me.deprecate(()=>{}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    Pr.colors = [
        6,
        2,
        3,
        4,
        5,
        1
    ];
    try {
        let e = Ms();
        if (e && (e.stderr || e).level >= 2) {
            Pr.colors = [
                20,
                21,
                26,
                27,
                32,
                33,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                56,
                57,
                62,
                63,
                68,
                69,
                74,
                75,
                76,
                77,
                78,
                79,
                80,
                81,
                92,
                93,
                98,
                99,
                112,
                113,
                128,
                129,
                134,
                135,
                148,
                149,
                160,
                161,
                162,
                163,
                164,
                165,
                166,
                167,
                168,
                169,
                170,
                171,
                172,
                173,
                178,
                179,
                184,
                185,
                196,
                197,
                198,
                199,
                200,
                201,
                202,
                203,
                204,
                205,
                206,
                207,
                208,
                209,
                214,
                215,
                220,
                221
            ];
        }
    } catch (e) {}
    Pr.inspectOpts = Object.keys(process.env).filter((e)=>/^debug_/i.test(e)).reduce((acc, key)=>{
        let r = key.substring(6).toLowerCase().replace(/_([a-z])/g, (o, s)=>s.toUpperCase());
        let n = process.env[key];
        if (/^(yes|on|true|enabled)$/i.test(n)) {
            n = true;
        } else if (/^(no|off|false|disabled)$/i.test(n)) {
            n = false;
        } else if (n === "null") {
            n = null;
        } else {
            n = Number(n);
        }
        acc[r] = n;
        return acc;
    }, {});
    function nf() {
        if ("colors" in Pr.inspectOpts) {
            return Boolean(Pr.inspectOpts.colors);
        }
        return Hs.isatty(process.stderr.fd);
    }
    function of(e) {
        let { namespace, useColors } = this;
        if (useColors) {
            let n = this.color;
            let o = `[3${n < 8 ? n : `8;5;${n}`}`;
            let s = `  ${o};1m${namespace} \x1B[0m`;
            e[0] = s + e[0].split(`
`).join(`
` + s);
            e.push(`${o}m+${kt.exports.humanize(this.diff)}[0m`);
        } else {
            e[0] = `${sf() + namespace} ${e[0]}`;
        }
    }
    function sf() {
        if (Pr.inspectOpts.hideDate) {
            return "";
        }
        return `${new Date().toISOString()} `;
    }
    function af(...e) {
        return process.stderr.write(me.formatWithOptions(Pr.inspectOpts, ...e) + `
`);
    }
    function uf(e) {
        if (e) {
            process.env.DEBUG = e;
        } else {
            delete process.env.DEBUG;
        }
    }
    function cf() {
        return process.env.DEBUG;
    }
    function ff(e) {
        e.inspectOpts = {};
        let t = Object.keys(Pr.inspectOpts);
        for(let r = 0; r < t.length; r++){
            e.inspectOpts[t[r]] = Pr.inspectOpts[t[r]];
        }
    }
    kt.exports = Cr()(Pr);
    const { formatters } = kt.exports;
    formatters.o = function(e) {
        this.inspectOpts.colors = this.useColors;
        return me.inspect(e, this.inspectOpts).split(`
`).map((t)=>t.trim()).join(" ");
    };
    formatters.O = function(e) {
        this.inspectOpts.colors = this.useColors;
        return me.inspect(e, this.inspectOpts);
    };
});
const frn = C(function(Bd, Fr) {
    if (typeof process === "undefined" || process.type === "renderer" || false || process.__nwjs) {
        Fr.exports = Is();
    } else {
        Fr.exports = Vs();
    }
});
const Gs = C(function(Nd, Ws) {
    let at;
    Ws.exports = function() {
        if (!at) {
            try {
                at = frn()("follow-redirects");
            } catch (e) {}
            if (typeof at !== "function") {
                at = function() {};
            }
        }
        at(...arguments);
    };
});
const Qs = C(function(Dd, $r) {
    const ct = Le("url");
    const ct_URL = ct.URL;
    const gf = Le("http");
    const https_1 = Le("https");
    const Writable = Le("stream").Writable;
    const qr = Le("assert");
    const Js = Gs();
    (()=>{
        const t = typeof process !== "undefined";
        const r = typeof window !== "undefined" && typeof document !== "undefined";
        const n = Ce(Error.captureStackTrace);
        if (!t && (r || !n)) {
            console.warn("The follow-redirects package should be excluded from browser builds.");
        }
    })();
    let Ir = false;
    try {
        qr(new ct_URL(""));
    } catch (error) {
        Ir = error.code === "ERR_INVALID_URL";
    }
    const Rf = [
        "Authorization",
        "Proxy-Authorization",
        "Cookie"
    ];
    const wf = [
        "auth",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "hash"
    ];
    const kr = [
        "abort",
        "aborted",
        "connect",
        "error",
        "socket",
        "timeout"
    ];
    const jr = Object.create(null);
    kr.forEach((e)=>{
        jr[e] = function(t, r, n) {
            this._redirectable.emit(e, t, r, n);
        };
    });
    const Br = ft("ERR_INVALID_URL", "Invalid URL", TypeError);
    const Nr = ft("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
    const xf = ft("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", Nr);
    const _f = ft("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
    const Sf = ft("ERR_STREAM_WRITE_AFTER_END", "write after end");
    const Af = Writable.prototype.destroy || Xs;
    class Y extends Writable {
        constructor(e, t){
            super();
            this._sanitizeOptions(e);
            this._options = e;
            this._ended = false;
            this._ending = false;
            this._redirectCount = 0;
            this._redirects = [];
            this._requestBodyLength = 0;
            this._requestBodyBuffers = [];
            if (t) {
                this.on("response", t);
            }
            const r = this;
            this._onNativeResponse = function(n) {
                try {
                    r._processResponse(n);
                } catch (cause) {
                    r.emit("error", cause instanceof Nr ? cause : new Nr({
                        cause
                    }));
                }
            };
            this._headerFilter = new RegExp(`^(?:${Rf.concat(e.sensitiveHeaders).map(Ff).join("|")})\$`, "i");
            this._performRequest();
        }
        abort() {
            zr(this._currentRequest);
            this._currentRequest.abort();
            this.emit("abort");
        }
        destroy(e) {
            zr(this._currentRequest, e);
            Af.call(this, e);
            return this;
        }
        write(e, encoding, r) {
            if (this._ending) {
                throw new Sf;
            }
            if (!Oe(e) && !Tf(e)) {
                throw TypeError("data should be a string, Buffer or Uint8Array");
            }
            if (Ce(encoding)) {
                r = encoding;
                encoding = null;
            }
            if (e.length === 0) {
                if (r) {
                    r();
                }
                return;
            }
            if (this._requestBodyLength + e.length <= this._options.maxBodyLength) {
                this._requestBodyLength += e.length;
                this._requestBodyBuffers.push({
                    data: e,
                    encoding
                });
                this._currentRequest.write(e, encoding, r);
            } else {
                this.emit("error", new _f);
                this.abort();
            }
        }
        end(e, t, r) {
            if (Ce(e)) {
                r = e;
                t = null;
                e = null;
            } else if (Ce(t)) {
                r = t;
                t = null;
            }
            if (!e) {
                this._ended = this._ending = true;
                this._currentRequest.end(null, null, r);
            } else {
                const n = this;
                const o = this._currentRequest;
                this.write(e, t, function() {
                    n._ended = true;
                    o.end(null, null, r);
                });
                this._ending = true;
            }
        }
        setHeader(e, t) {
            this._options.headers[e] = t;
            this._currentRequest.setHeader(e, t);
        }
        removeHeader(e) {
            delete this._options.headers[e];
            this._currentRequest.removeHeader(e);
        }
        setTimeout(e, t) {
            const r = this;
            function n(i) {
                i.setTimeout(e);
                i.removeListener("timeout", i.destroy);
                i.addListener("timeout", i.destroy);
            }
            function o(i) {
                if (r._timeout) {
                    clearTimeout(r._timeout);
                }
                r._timeout = setTimeout(()=>{
                    r.emit("timeout");
                    s();
                }, e);
                n(i);
            }
            function s() {
                if (r._timeout) {
                    clearTimeout(r._timeout);
                    r._timeout = null;
                }
                r.removeListener("abort", s);
                r.removeListener("error", s);
                r.removeListener("response", s);
                r.removeListener("close", s);
                if (t) {
                    r.removeListener("timeout", t);
                }
                if (!r.socket) {
                    r._currentRequest.removeListener("socket", o);
                }
            }
            if (t) {
                this.on("timeout", t);
            }
            if (this.socket) {
                o(this.socket);
            } else {
                this._currentRequest.once("socket", o);
            }
            this.on("socket", n);
            this.on("abort", s);
            this.on("error", s);
            this.on("response", s);
            this.on("close", s);
            return this;
        }
        _sanitizeOptions(e) {
            if (!e.headers) {
                e.headers = {};
            }
            if (!vf(e.sensitiveHeaders)) {
                e.sensitiveHeaders = [];
            }
            if (e.host) {
                if (!e.hostname) {
                    e.hostname = e.host;
                }
                delete e.host;
            }
            if (!e.pathname && e.path) {
                const t = e.path.indexOf("?");
                if (t < 0) {
                    e.pathname = e.path;
                } else {
                    e.pathname = e.path.substring(0, t);
                    e.search = e.path.substring(t);
                }
            }
        }
        _performRequest() {
            const protocol = this._options.protocol;
            const t = this._options.nativeProtocols[protocol];
            if (!t) {
                throw TypeError(`Unsupported protocol ${protocol}`);
            }
            if (this._options.agents) {
                const r = protocol.slice(0, -1);
                this._options.agent = this._options.agents[r];
            }
            const n = this._currentRequest = t.request(this._options, this._onNativeResponse);
            n._redirectable = this;
            for (const o of kr){
                n.on(o, jr[o]);
            }
            this._currentUrl = /^\//.test(this._options.path) ? ct.format(this._options) : this._options.path;
            if (this._isRedirect) {
                let s = 0;
                const i = this;
                const a = this._requestBodyBuffers;
                (function l(f) {
                    if (n === i._currentRequest) {
                        if (f) {
                            i.emit("error", f);
                        } else if (s < a.length) {
                            const c = a[s++];
                            if (!n.finished) {
                                n.write(c.data, c.encoding, l);
                            }
                        } else if (i._ended) {
                            n.end();
                        }
                    }
                })();
            }
        }
        _processResponse(e) {
            const e_statusCode = e.statusCode;
            if (this._options.trackRedirects) {
                this._redirects.push({
                    url: this._currentUrl,
                    headers: e.headers,
                    statusCode: e_statusCode
                });
            }
            const location = e.headers.location;
            if (!location || this._options.followRedirects === false || e_statusCode < 300 || e_statusCode >= 400) {
                e.responseUrl = this._currentUrl;
                e.redirects = this._redirects;
                this.emit("response", e);
                this._requestBodyBuffers = [];
                return;
            }
            zr(this._currentRequest);
            e.destroy();
            if (++this._redirectCount > this._options.maxRedirects) {
                throw new xf;
            }
            let headers;
            const beforeRedirect = this._options.beforeRedirect;
            if (beforeRedirect) {
                headers = {
                    Host: e.req.getHeader("host"),
                    ...this._options.headers
                };
            }
            const method = this._options.method;
            if ((e_statusCode === 301 || e_statusCode === 302) && this._options.method === "POST" || e_statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
                this._options.method = "GET";
                this._requestBodyBuffers = [];
                Lr(/^content-/i, this._options.headers);
            }
            const i = Lr(/^host$/i, this._options.headers);
            const a = Hr(this._currentUrl);
            const host = i || a.host;
            const f = /^\w+:/.test(location) ? this._currentUrl : ct.format(Object.assign(a, {
                host
            }));
            const c = Of(location, f);
            Js("redirecting to", c.href);
            this._isRedirect = true;
            Dr(c, this._options);
            if (c.protocol !== a.protocol && c.protocol !== "https:" || c.host !== host && !Cf(c.host, host)) {
                Lr(this._headerFilter, this._options.headers);
            }
            if (Ce(beforeRedirect)) {
                const p = {
                    headers: e.headers,
                    statusCode: e_statusCode
                };
                const d = {
                    url: f,
                    method,
                    headers
                };
                beforeRedirect(this._options, p, d);
                this._sanitizeOptions(this._options);
            }
            this._performRequest();
        }
    }
    [
        "flushHeaders",
        "getHeader",
        "setNoDelay",
        "setSocketKeepAlive"
    ].forEach((e)=>{
        Y.prototype[e] = function(t, r) {
            return this._currentRequest[e](t, r);
        };
    });
    [
        "aborted",
        "connection",
        "socket"
    ].forEach((e)=>{
        Object.defineProperty(Y.prototype, e, {
            get: function() {
                return this._currentRequest[e];
            }
        });
    });
    function Ks(e) {
        const t = {
            maxRedirects: 21,
            maxBodyLength: 10485760
        };
        const r = {};
        Object.keys(e).forEach((n)=>{
            const o = `${n}:`;
            const s = r[o] = e[n];
            const i = t[n] = Object.create(s);
            function a(f, c, p) {
                if (Pf(f)) {
                    f = Dr(f);
                } else if (Oe(f)) {
                    f = Dr(Hr(f));
                } else {
                    p = c;
                    c = Ys(f);
                    f = {
                        protocol: o
                    };
                }
                if (Ce(c)) {
                    p = c;
                    c = null;
                }
                c = {
                    maxRedirects: t.maxRedirects,
                    maxBodyLength: t.maxBodyLength,
                    ...f,
                    ...c
                };
                c.nativeProtocols = r;
                if (!Oe(c.host) && !Oe(c.hostname)) {
                    c.hostname = "::1";
                }
                qr.equal(c.protocol, o, "protocol mismatch");
                Js("options", c);
                return new Y(c, p);
            }
            function l(f, c, p) {
                const d = i.request(f, c, p);
                d.end();
                return d;
            }
            Object.defineProperties(i, {
                request: {
                    value: a,
                    configurable: true,
                    enumerable: true,
                    writable: true
                },
                get: {
                    value: l,
                    configurable: true,
                    enumerable: true,
                    writable: true
                }
            });
        });
        return t;
    }
    function Xs() {}
    function Hr(input) {
        let t;
        if (Ir) {
            t = new ct_URL(input);
        } else {
            t = Ys(ct.parse(input));
            if (!Oe(t.protocol)) {
                throw new Br({
                    input
                });
            }
        }
        return t;
    }
    function Of(location, t) {
        if (Ir) {
            return new ct_URL(location, t);
        }
        return Hr(ct.resolve(t, location));
    }
    function Ys(e) {
        if (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname)) {
            throw new Br({
                input: e.href || e
            });
        }
        if (/^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host)) {
            throw new Br({
                input: e.href || e
            });
        }
        return e;
    }
    function Dr(e, t) {
        const r = t || {};
        for (const n of wf){
            r[n] = e[n];
        }
        if (r.hostname.startsWith("[")) {
            r.hostname = r.hostname.slice(1, -1);
        }
        if (r.port !== "") {
            r.port = Number(r.port);
        }
        r.path = r.search ? r.pathname + r.search : r.pathname;
        return r;
    }
    function Lr(e, headers) {
        let r;
        for(const n in headers){
            if (e.test(n)) {
                r = headers[n];
                delete headers[n];
            }
        }
        if (r === null || typeof r === "undefined") {
            return undefined;
        }
        return String(r).trim();
    }
    function ft(e, t, r) {
        function n(o) {
            if (Ce(Error.captureStackTrace)) {
                Error.captureStackTrace(this, this.constructor);
            }
            Object.assign(this, o || {});
            this.code = e;
            this.message = this.cause ? `${t}: ${this.cause.message}` : t;
        }
        n.prototype = Object.create((r || Error).prototype);
        Object.defineProperties(n.prototype, {
            constructor: {
                value: n,
                enumerable: false
            },
            name: {
                value: `Error [${e}]`,
                enumerable: false
            }
        });
        return n;
    }
    function zr(_currentRequest, t) {
        for (const r of kr){
            _currentRequest.removeListener(r, jr[r]);
        }
        _currentRequest.on("error", Xs);
        _currentRequest.destroy(t);
    }
    function Cf(host, t) {
        qr(Oe(host) && Oe(t));
        const r = host.length - t.length - 1;
        return r > 0 && host[r] === "." && host.endsWith(t);
    }
    function vf(sensitiveHeaders) {
        return sensitiveHeaders instanceof Array;
    }
    function Oe(e) {
        return typeof e === "string" || e instanceof String;
    }
    function Ce(e) {
        return typeof e === "function";
    }
    function Tf(e) {
        return typeof e === "object" && "length" in e;
    }
    function Pf(e) {
        return ct_URL && e instanceof ct_URL;
    }
    function Ff(e) {
        return e.replace(/[\]\\/()*+?.$]/g, "\\$&");
    }
    $r.exports = Ks({
        http: gf,
        https: https_1
    });
    $r.exports.wrap = Ks;
});
function Ke(e, t) {
    return function() {
        return e.apply(t, arguments);
    };
}
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;
const kindOf = ((e)=>(t)=>{
        let r = toString.call(t);
        return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (e)=>{
    e = e.toLowerCase();
    return (t)=>kindOf(t) === e;
};
const wt = (e)=>(t)=>typeof t === e;
const { isArray } = Array;
const isUndefined = wt("undefined");
function isBuffer(e) {
    return e !== null && !isUndefined(e) && e.constructor !== null && !isUndefined(e.constructor) && isFunction_1(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(e) {
    let t;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        t = ArrayBuffer.isView(e);
    } else {
        t = e && e.buffer && isArrayBuffer(e.buffer);
    }
    return t;
}
const isString = wt("string");
var isFunction_1 = wt("function");
const isNumber = wt("number");
const isObject = (e)=>e !== null && typeof e === "object";
const isBoolean = (e)=>e === true || e === false;
const isPlainObject = (e)=>{
    if (kindOf(e) !== "object") {
        return false;
    }
    let t = getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(toStringTag in e) && !(iterator in e);
};
const isEmptyObject = (e)=>{
    if (!isObject(e) || isBuffer(e)) {
        return false;
    }
    try {
        return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
    } catch (t) {
        return false;
    }
};
const isDate = kindOfTest("Date");
const isFile = kindOfTest("File");
const isReactNativeBlob = (e)=>!!(e && typeof e.uri !== "undefined");
const isReactNative = (e)=>e && typeof e.getParts !== "undefined";
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (e)=>isObject(e) && isFunction_1(e.pipe);
function Xi() {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    return {};
}
const sn = Xi();
const an = typeof sn.FormData !== "undefined" ? sn.FormData : undefined;
const isFormData = (e)=>{
    if (!e) {
        return false;
    }
    if (an && e instanceof an) {
        return true;
    }
    let t = getPrototypeOf(e);
    if (!t || t === Object.prototype) {
        return false;
    }
    if (!isFunction_1(e.append)) {
        return false;
    }
    let r = kindOf(e);
    return r === "formdata" || r === "object" && isFunction_1(e.toString) && e.toString() === "[object FormData]";
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = [
    "ReadableStream",
    "Request",
    "Response",
    "Headers"
].map(kindOfTest);
const trim = (e)=>{
    if (e.trim) {
        return e.trim();
    }
    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
function forEach(e, t, { allOwnKeys = false } = {}) {
    if (e === null || typeof e === "undefined") {
        return;
    }
    let n;
    let o;
    if (typeof e !== "object") {
        e = [
            e
        ];
    }
    if (isArray(e)) {
        n = 0;
        for(o = e.length; n < o; n++){
            t.call(null, e[n], n, e);
        }
    } else {
        if (isBuffer(e)) {
            return;
        }
        let s = allOwnKeys ? Object.getOwnPropertyNames(e) : Object.keys(e);
        let i = s.length;
        let a;
        for(n = 0; n < i; n++){
            a = s[n];
            t.call(null, e[a], a, e);
        }
    }
}
function findKey(e, t) {
    if (isBuffer(e)) {
        return null;
    }
    t = t.toLowerCase();
    let r = Object.keys(e);
    let r_length = r.length;
    let o;
    while(r_length-- > 0){
        o = r[r_length];
        if (t === o.toLowerCase()) {
            return o;
        }
    }
    return null;
}
const global_1 = (()=>{
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    return global;
})();
const isContextDefined = (e)=>!isUndefined(e) && e !== global_1;
function merge(...args) {
    let { caseless, skipUndefined } = isContextDefined(this) && this || {};
    let r = {};
    let n = (o, s)=>{
        if (s === "__proto__" || s === "constructor" || s === "prototype") {
            return;
        }
        let i = caseless && findKey(r, s) || s;
        if (isPlainObject(r[i]) && isPlainObject(o)) {
            r[i] = merge(r[i], o);
        } else if (isPlainObject(o)) {
            r[i] = merge({}, o);
        } else if (isArray(o)) {
            r[i] = o.slice();
        } else if (!skipUndefined || !isUndefined(o)) {
            r[i] = o;
        }
    };
    for(let o = 0, s = args.length; o < s; o++){
        if (args[o]) {
            forEach(args[o], n);
        }
    }
    return r;
}
const extend = (e, t, r, { allOwnKeys } = {})=>{
    forEach(t, (o, s)=>{
        if (r && isFunction_1(o)) {
            Object.defineProperty(e, s, {
                value: Ke(o, r),
                writable: true,
                enumerable: true,
                configurable: true
            });
        } else {
            Object.defineProperty(e, s, {
                value: o,
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
    }, {
        allOwnKeys
    });
    return e;
};
const stripBOM = (e)=>{
    if (e.charCodeAt(0) === 65279) {
        e = e.slice(1);
    }
    return e;
};
const inherits = (e, t, r, n)=>{
    e.prototype = Object.create(t.prototype, n);
    Object.defineProperty(e.prototype, "constructor", {
        value: e,
        writable: true,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "super", {
        value: t.prototype
    });
    if (r) {
        Object.assign(e.prototype, r);
    }
};
const toFlatObject = (e, t, r, n)=>{
    let o;
    let s;
    let i;
    let a = {};
    t = t || {};
    if (e == null) {
        return t;
    }
    do {
        o = Object.getOwnPropertyNames(e);
        s = o.length;
        while(s-- > 0){
            i = o[s];
            if ((!n || n(i, e, t)) && !a[i]) {
                t[i] = e[i];
                a[i] = true;
            }
        }
        e = r !== false && getPrototypeOf(e);
    }while (e && (!r || r(e, t)) && e !== Object.prototype)
    return t;
};
const endsWith = (e, t, r)=>{
    e = String(e);
    if (r === undefined || r > e.length) {
        r = e.length;
    }
    r -= t.length;
    let n = e.indexOf(t, r);
    return n !== -1 && n === r;
};
const toArray = (e)=>{
    if (!e) {
        return null;
    }
    if (isArray(e)) {
        return e;
    }
    let e_length = e.length;
    if (!isNumber(e_length)) {
        return null;
    }
    let r = Array(e_length);
    while(e_length-- > 0){
        r[e_length] = e[e_length];
    }
    return r;
};
const isTypedArray = ((e)=>(t)=>e && t instanceof e)(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (e, t)=>{
    let n = (e && e[iterator]).call(e);
    let o;
    while((o = n.next()) && !o.done){
        let s = o.value;
        t.call(e, s[0], s[1]);
    }
};
const matchAll = (e, t)=>{
    let r;
    let n = [];
    while((r = e.exec(t)) !== null){
        n.push(r);
    }
    return n;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (e)=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (r, n, o)=>n.toUpperCase() + o);
const un = (({ hasOwnProperty })=>(t, r)=>hasOwnProperty.call(t, r))(Object.prototype);
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (e, t)=>{
    let r = Object.getOwnPropertyDescriptors(e);
    let n = {};
    forEach(r, (o, s)=>{
        let i;
        if ((i = t(o, s, e)) !== false) {
            n[s] = i || o;
        }
    });
    Object.defineProperties(e, n);
};
const freezeMethods = (e)=>{
    reduceDescriptors(e, (t, r)=>{
        if (isFunction_1(e) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(r) !== -1) {
            return false;
        }
        let n = e[r];
        if (!isFunction_1(n)) {
            return;
        }
        t.enumerable = false;
        if ("writable" in t) {
            t.writable = false;
            return;
        }
        if (!t.set) {
            t.set = ()=>{
                throw Error(`Can not rewrite read-only method '${r}'`);
            };
        }
    });
};
const toObjectSet = (e, t)=>{
    let r = {};
    let n = (o)=>{
        o.forEach((s)=>{
            r[s] = true;
        });
    };
    if (isArray(e)) {
        n(e);
    } else {
        n(String(e).split(t));
    }
    return r;
};
const noop = ()=>{};
const toFiniteNumber = (e, t)=>{
    if (e != null && Number.isFinite(e = +e)) {
        return e;
    }
    return t;
};
function isSpecCompliantForm(e) {
    return !!(e && isFunction_1(e.append) && e[toStringTag] === "FormData" && e[iterator]);
}
const toJSONObject = (e)=>{
    let t = [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        , 
    ];
    let r = (n, o)=>{
        if (isObject(n)) {
            if (t.indexOf(n) >= 0) {
                return;
            }
            if (isBuffer(n)) {
                return n;
            }
            if (!("toJSON" in n)) {
                t[o] = n;
                let s = isArray(n) ? [] : {};
                forEach(n, (i, a)=>{
                    let l = r(i, o + 1);
                    if (!isUndefined(l)) {
                        s[a] = l;
                    }
                });
                t[o] = undefined;
                return s;
            }
        }
        return n;
    };
    return r(e, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (e)=>e && (isObject(e) || isFunction_1(e)) && isFunction_1(e.then) && isFunction_1(e.catch);
const setImmediate_1 = ((e, t)=>{
    if (e) {
        return setImmediate;
    }
    if (t) {
        return ((r, n)=>{
            global_1.addEventListener("message", ({ source, data })=>{
                if (source === global_1 && data === r) {
                    if (n.length) {
                        n.shift()();
                    }
                }
            }, false);
            return (o)=>{
                n.push(o);
                global_1.postMessage(r, "*");
            };
        })(`axios@${Math.random()}`, []);
    }
    return (r)=>setTimeout(r);
})(typeof setImmediate === "function", isFunction_1(global_1.postMessage));
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(global_1) : typeof process !== "undefined" && process.nextTick || setImmediate_1;
const isIterable = (e)=>e != null && isFunction_1(e[iterator]);
const u = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isEmptyObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isReactNativeBlob,
    isReactNative,
    isBlob,
    isRegExp,
    isFunction: isFunction_1,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty: un,
    hasOwnProp: un,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: global_1,
    isContextDefined,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: setImmediate_1,
    asap,
    isIterable
};
class W extends Error {
    static from(e, t, r, n, o, s) {
        let i = new W(e.message, t || e.code, r, n, o);
        i.cause = e;
        i.name = e.name;
        if (e.status != null && i.status == null) {
            i.status = e.status;
        }
        if (s) {
            Object.assign(i, s);
        }
        return i;
    }
    constructor(e, t, r, n, o){
        super(e);
        Object.defineProperty(this, "message", {
            value: e,
            enumerable: true,
            writable: true,
            configurable: true
        });
        this.name = "AxiosError";
        this.isAxiosError = true;
        if (t) {
            this.code = t;
        }
        if (r) {
            this.config = r;
        }
        if (n) {
            this.request = n;
        }
        if (o) {
            this.response = o;
            this.status = o.status;
        }
    }
    toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: u.toJSONObject(this.config),
            code: this.code,
            status: this.status
        };
    }
}
W.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
W.ERR_BAD_OPTION = "ERR_BAD_OPTION";
W.ECONNABORTED = "ECONNABORTED";
W.ETIMEDOUT = "ETIMEDOUT";
W.ERR_NETWORK = "ERR_NETWORK";
W.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
W.ERR_DEPRECATED = "ERR_DEPRECATED";
W.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
W.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
W.ERR_CANCELED = "ERR_CANCELED";
W.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
W.ERR_INVALID_URL = "ERR_INVALID_URL";
W.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const y = W;
const ws = Se(Rs(), 1);
const ws_default = ws.default;
function isVisitable(e) {
    return u.isPlainObject(e) || u.isArray(e);
}
function xs(e) {
    if (u.endsWith(e, "[]")) {
        return e.slice(0, -2);
    }
    return e;
}
function hr(e, t, r) {
    if (!e) {
        return t;
    }
    return e.concat(t).map((o, s)=>{
        o = xs(o);
        if (!r && s) {
            return `[${o}]`;
        }
        return o;
    }).join(r ? "." : "");
}
function fc(e) {
    return u.isArray(e) && !e.some(isVisitable);
}
const lc = u.toFlatObject(u, {}, null, function(t) {
    return /^is[A-Z]/.test(t);
});
function pc(e, t, r) {
    if (!u.isObject(e)) {
        throw TypeError("target must be an object");
    }
    t = t || new (ws_default || FormData);
    r = u.toFlatObject(r, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function(h, E) {
        return !u.isUndefined(E[h]);
    });
    let r_metaTokens = r.metaTokens;
    let o = r.visitor || defaultVisitor;
    let r_dots = r.dots;
    let r_indexes = r.indexes;
    let a = r.Blob || typeof Blob !== "undefined" && Blob;
    let l = r.maxDepth === undefined ? 100 : r.maxDepth;
    let f = a && u.isSpecCompliantForm(t);
    if (!u.isFunction(o)) {
        throw TypeError("visitor must be a function");
    }
    function convertValue(g) {
        if (g === null) {
            return "";
        }
        if (u.isDate(g)) {
            return g.toISOString();
        }
        if (u.isBoolean(g)) {
            return g.toString();
        }
        if (!f && u.isBlob(g)) {
            throw new y("Blob is not supported. Use a Buffer instead.");
        }
        if (u.isArrayBuffer(g) || u.isTypedArray(g)) {
            if (f && typeof Blob === "function") {
                return new Blob([
                    g
                ]);
            }
            return Buffer.from(g);
        }
        return g;
    }
    function defaultVisitor(g, h, E) {
        let N = g;
        if (u.isReactNative(t) && u.isReactNativeBlob(g)) {
            t.append(hr(E, h, r_dots), convertValue(g));
            return false;
        }
        if (g && !E && typeof g === "object") {
            if (u.endsWith(h, "{}")) {
                h = r_metaTokens ? h : h.slice(0, -2);
                g = JSON.stringify(g);
            } else if (u.isArray(g) && fc(g) || (u.isFileList(g) || u.endsWith(h, "[]")) && (N = u.toArray(g))) {
                h = xs(h);
                N.forEach((x, k)=>{
                    if (!(u.isUndefined(x) || x === null)) {
                        t.append(r_indexes === true ? hr([
                            h
                        ], k, r_dots) : r_indexes === null ? h : `${h}[]`, convertValue(x));
                    }
                });
                return false;
            }
        }
        if (isVisitable(g)) {
            return true;
        }
        t.append(hr(E, h, r_dots), convertValue(g));
        return false;
    }
    let d = [];
    let b = Object.assign(lc, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function m(g, h, E = 0) {
        if (u.isUndefined(g)) {
            return;
        }
        if (E > l) {
            throw new y(`Object is too deeply nested (${E} levels). Max depth: ${l}`, y.ERR_FORM_DATA_DEPTH_EXCEEDED);
        }
        if (d.indexOf(g) !== -1) {
            throw Error(`Circular reference detected in ${h.join(".")}`);
        }
        d.push(g);
        u.forEach(g, function(v, x) {
            if ((!(u.isUndefined(v) || v === null) && o.call(t, v, u.isString(x) ? x.trim() : x, h, b)) === true) {
                m(v, h ? h.concat(x) : [
                    x
                ], E + 1);
            }
        });
        d.pop();
    }
    if (!u.isObject(e)) {
        throw TypeError("data must be an object");
    }
    m(e);
    return t;
}
const de = pc;
function _s(e) {
    let t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20/g, (n)=>t[n]);
}
function Ss(e, t) {
    this._pairs = [];
    if (e) {
        de(e, this, t);
    }
}
const Ss_prototype = Ss.prototype;
Ss_prototype.append = function(t, r) {
    this._pairs.push([
        t,
        r
    ]);
};
Ss_prototype.toString = function(t) {
    let r = t ? function(n) {
        return t.call(this, n, _s);
    } : _s;
    return this._pairs.map((o)=>`${r(o[0])}=${r(o[1])}`, "").join("&");
};
const Os = Ss;
function dc(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function we(e, params, serialize) {
    if (!params) {
        return e;
    }
    let n = serialize && serialize.encode || dc;
    let o = u.isFunction(serialize) ? {
        serialize
    } : serialize;
    let s = o && o.serialize;
    let i;
    if (s) {
        i = s(params, o);
    } else {
        i = u.isURLSearchParams(params) ? params.toString() : new Os(params, o).toString(n);
    }
    if (i) {
        let a = e.indexOf("#");
        if (a !== -1) {
            e = e.slice(0, a);
        }
        e += (e.indexOf("?") === -1 ? "?" : "&") + i;
    }
    return e;
}
class Cs {
    constructor(){
        this.handlers = [];
    }
    use(fulfilled, rejected, r) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: r ? r.synchronous : false,
            runWhen: r ? r.runWhen : null
        });
        return this.handlers.length - 1;
    }
    eject(e) {
        if (this.handlers[e]) {
            this.handlers[e] = null;
        }
    }
    clear() {
        if (this.handlers) {
            this.handlers = [];
        }
    }
    forEach(e) {
        u.forEach(this.handlers, function(r) {
            if (r !== null) {
                e(r);
            }
        });
    }
}
const yr = Cs;
const transitional_1 = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false,
    legacyInterceptorReqResOrdering: true
};
const hc_URLSearchParams = hc.URLSearchParams;
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (e = 16, t = ALPHABET.ALPHA_DIGIT)=>{
    let r = "";
    let { length } = t;
    let o = new Uint32Array(e);
    mc.randomFillSync(o);
    for(let s = 0; s < e; s++){
        r += t[o[s] % length];
    }
    return r;
};
const Fs = {
    isNode: true,
    classes: {
        URLSearchParams: hc_URLSearchParams,
        FormData: ws_default,
        Blob: typeof Blob !== "undefined" && Blob || null
    },
    ALPHABET,
    generateString,
    protocols: [
        "http",
        "https",
        "file",
        "data"
    ]
};
const Rr = {};
Mr(Rr, {
    hasBrowserEnv: ()=>Er,
    hasStandardBrowserEnv: ()=>bc,
    hasStandardBrowserWebWorkerEnv: ()=>gc,
    navigator: ()=>gr,
    origin: ()=>Ec
});
var Er = typeof window !== "undefined" && typeof document !== "undefined";
var gr = typeof navigator === "object" && navigator || undefined;
var bc = Er && (!gr || [
    "ReactNative",
    "NativeScript",
    "NS"
].indexOf(gr.product) < 0);
var gc = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
var Ec = Er && window.location.href || "http://localhost";
const A = {
    ...Rr,
    ...Fs
};
function wr(e, t) {
    return de(e, new A.classes.URLSearchParams, {
        visitor: function(r, n, o, s) {
            if (A.isNode && u.isBuffer(r)) {
                this.append(n, r.toString("base64"));
                return false;
            }
            return s.defaultVisitor.apply(this, arguments);
        },
        ...t
    });
}
function Rc(e) {
    return u.matchAll(/\w+|\[(\w*)]/g, e).map((t)=>{
        if (t[0] === "[]") {
            return "";
        }
        return t[1] || t[0];
    });
}
function wc(e) {
    let t = {};
    let r = Object.keys(e);
    let n;
    let r_length = r.length;
    let s;
    for(n = 0; n < r_length; n++){
        s = r[n];
        t[s] = e[s];
    }
    return t;
}
function xc(e) {
    function t(r, n, o, s) {
        let i = r[s++];
        if (i === "__proto__") {
            return true;
        }
        let a = Number.isFinite(+i);
        let l = s >= r.length;
        i = !i && u.isArray(o) ? o.length : i;
        if (l) {
            if (u.hasOwnProp(o, i)) {
                o[i] = u.isArray(o[i]) ? o[i].concat(n) : [
                    o[i],
                    n
                ];
            } else {
                o[i] = n;
            }
            return !a;
        }
        if (!o[i] || !u.isObject(o[i])) {
            o[i] = [];
        }
        if (t(r, n, o[i], s) && u.isArray(o[i])) {
            o[i] = wc(o[i]);
        }
        return !a;
    }
    if (u.isFormData(e) && u.isFunction(e.entries)) {
        let r = {};
        u.forEachEntry(e, (n, o)=>{
            t(Rc(n), o, r, 0);
        });
        return r;
    }
    return null;
}
const Lt = xc;
const Me = (e, t)=>{
    if (e != null && u.hasOwnProp(e, t)) {
        return e[t];
    }
};
function _c(e, t, r) {
    if (u.isString(e)) {
        try {
            (t || JSON.parse)(e);
            return u.trim(e);
        } catch (error) {
            if (error.name !== "SyntaxError") {
                throw error;
            }
        }
    }
    return (r || JSON.stringify)(e);
}
var xr = {
    transitional: transitional_1,
    adapter: [
        "xhr",
        "http",
        "fetch"
    ],
    transformRequest: [
        function(t, r) {
            let n = r.getContentType() || "";
            let o = n.indexOf("application/json") > -1;
            let s = u.isObject(t);
            if (s && u.isHTMLForm(t)) {
                t = new FormData(t);
            }
            if (u.isFormData(t)) {
                if (o) {
                    return JSON.stringify(Lt(t));
                }
                return t;
            }
            if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t)) {
                return t;
            }
            if (u.isArrayBufferView(t)) {
                return t.buffer;
            }
            if (u.isURLSearchParams(t)) {
                r.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return t.toString();
            }
            let a;
            if (s) {
                let l = Me(this, "formSerializer");
                if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                    return wr(t, l).toString();
                }
                if ((a = u.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
                    let f = Me(this, "env");
                    let c = f && f.FormData;
                    return de(a ? {
                        "files[]": t
                    } : t, c && new c, l);
                }
            }
            if (s || o) {
                r.setContentType("application/json", false);
                return _c(t);
            }
            return t;
        }
    ],
    transformResponse: [
        function(t) {
            let r = Me(this, "transitional") || xr.transitional;
            let n = r && r.forcedJSONParsing;
            let o = Me(this, "responseType");
            let s = o === "json";
            if (u.isResponse(t) || u.isReadableStream(t)) {
                return t;
            }
            if (t && u.isString(t) && (n && !o || s)) {
                let a = !(r && r.silentJSONParsing) && s;
                try {
                    return JSON.parse(t, Me(this, "parseReviver"));
                } catch (error) {
                    if (a) {
                        if (error.name === "SyntaxError") {
                            throw y.from(error, y.ERR_BAD_RESPONSE, this, null, Me(this, "response"));
                        }
                        throw error;
                    }
                }
            }
            return t;
        }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: A.classes.FormData,
        Blob: A.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300;
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": undefined
        }
    }
};
u.forEach([
    "delete",
    "get",
    "head",
    "post",
    "put",
    "patch"
], (e)=>{
    xr.headers[e] = {};
});
const He = xr;
const Sc = u.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
const Ls = (e)=>{
    let t = {};
    let r;
    let n;
    let o;
    if (e) {
        e.split(`
`).forEach((i)=>{
            o = i.indexOf(":");
            r = i.substring(0, o).trim().toLowerCase();
            n = i.substring(o + 1).trim();
            if (!r || t[r] && Sc[r]) {
                return;
            }
            if (r === "set-cookie") {
                if (t[r]) {
                    t[r].push(n);
                } else {
                    t[r] = [
                        n
                    ];
                }
            } else {
                t[r] = t[r] ? `${t[r]}, ${n}` : n;
            }
        });
    }
    return t;
};
const Bs = Symbol("internals");
const Ac = /[^\x09\x20-\x7E\x80-\xFF]/g;
function Oc(e) {
    let t = 0;
    let e_length = e.length;
    while(t < e_length){
        let n = e.charCodeAt(t);
        if (n !== 9 && n !== 32) {
            break;
        }
        t += 1;
    }
    while(e_length > t){
        let n = e.charCodeAt(e_length - 1);
        if (n !== 9 && n !== 32) {
            break;
        }
        e_length -= 1;
    }
    if (t === 0 && e_length === e.length) {
        return e;
    }
    return e.slice(t, e_length);
}
function nt(e) {
    return e && String(e).trim().toLowerCase();
}
function Cc(e) {
    return Oc(e.replace(Ac, ""));
}
function Bt(e) {
    if (e === false || e == null) {
        return e;
    }
    if (u.isArray(e)) {
        return e.map(Bt);
    }
    return Cc(String(e));
}
function vc(e) {
    let t = Object.create(null);
    let r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let n;
    while(n = r.exec(e)){
        t[n[1]] = n[2];
    }
    return t;
}
const Tc = (e)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function _r(e, t, r, n, o) {
    if (u.isFunction(n)) {
        return n.call(this, t, r);
    }
    if (o) {
        t = r;
    }
    if (!u.isString(t)) {
        return;
    }
    if (u.isString(n)) {
        return t.indexOf(n) !== -1;
    }
    if (u.isRegExp(n)) {
        return n.test(t);
    }
}
function Pc(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n)=>r.toUpperCase() + n);
}
function Fc(e, t) {
    let r = u.toCamelCase(` ${t}`);
    [
        "get",
        "set",
        "has"
    ].forEach((n)=>{
        Object.defineProperty(e, n + r, {
            value: function(o, s, i) {
                return this[n].call(this, t, o, s, i);
            },
            configurable: true
        });
    });
}
class ot {
    constructor(e){
        if (e) {
            this.set(e);
        }
    }
    set(e, t, r) {
        let n = this;
        function o(i, a, l) {
            let f = nt(a);
            if (!f) {
                throw Error("header name must be a non-empty string");
            }
            let c = u.findKey(n, f);
            if (!c || n[c] === undefined || l === true || l === undefined && n[c] !== false) {
                n[c || a] = Bt(i);
            }
        }
        let s = (i, a)=>u.forEach(i, (l, f)=>o(l, f, a));
        if (u.isPlainObject(e) || e instanceof this.constructor) {
            s(e, t);
        } else if (u.isString(e) && (e = e.trim()) && !Tc(e)) {
            s(Ls(e), t);
        } else if (u.isObject(e) && u.isIterable(e)) {
            let i = {};
            let a;
            let l;
            for (let f of e){
                if (!u.isArray(f)) {
                    throw TypeError("Object iterator must return a key-value pair");
                }
                i[l = f[0]] = (a = i[l]) ? u.isArray(a) ? [
                    ...a,
                    f[1]
                ] : [
                    a,
                    f[1]
                ] : f[1];
            }
            s(i, t);
        } else {
            if (e != null) {
                o(t, e, r);
            }
        }
        return this;
    }
    get(e, t) {
        e = nt(e);
        if (e) {
            let r = u.findKey(this, e);
            if (r) {
                let n = this[r];
                if (!t) {
                    return n;
                }
                if (t === true) {
                    return vc(n);
                }
                if (u.isFunction(t)) {
                    return t.call(this, n, r);
                }
                if (u.isRegExp(t)) {
                    return t.exec(n);
                }
                throw TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(e, t) {
        e = nt(e);
        if (e) {
            let r = u.findKey(this, e);
            return !!(r && this[r] !== undefined && (!t || _r(this, this[r], r, t)));
        }
        return false;
    }
    delete(e, t) {
        let r = this;
        let n = false;
        function o(s) {
            s = nt(s);
            if (s) {
                let i = u.findKey(r, s);
                if (i && (!t || _r(r, r[i], i, t))) {
                    delete r[i];
                    n = true;
                }
            }
        }
        if (u.isArray(e)) {
            e.forEach(o);
        } else {
            o(e);
        }
        return n;
    }
    clear(e) {
        let t = Object.keys(this);
        let t_length = t.length;
        let n = false;
        while(t_length--){
            let o = t[t_length];
            if (!e || _r(this, this[o], o, e, true)) {
                delete this[o];
                n = true;
            }
        }
        return n;
    }
    normalize(e) {
        let t = this;
        let r = {};
        u.forEach(this, (n, o)=>{
            let s = u.findKey(r, o);
            if (s) {
                t[s] = Bt(n);
                delete t[o];
                return;
            }
            let i = e ? Pc(o) : String(o).trim();
            if (i !== o) {
                delete t[o];
            }
            t[i] = Bt(n);
            r[i] = true;
        });
        return this;
    }
    concat(...e) {
        return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
        let t = Object.create(null);
        u.forEach(this, (r, n)=>{
            if (r != null && r !== false) {
                t[n] = e && u.isArray(r) ? r.join(", ") : r;
            }
        });
        return t;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, t])=>`${e}: ${t}`).join(`
`);
    }
    getSetCookie() {
        return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(e) {
        if (e instanceof this) {
            return e;
        }
        return new this(e);
    }
    static concat(e, ...t) {
        let r = new this(e);
        t.forEach((n)=>r.set(n));
        return r;
    }
    static accessor(e) {
        let accessors = (this[Bs] = this[Bs] = {
            accessors: {}
        }).accessors;
        let prototype = this.prototype;
        function o(s) {
            let i = nt(s);
            if (!accessors[i]) {
                Fc(prototype, s);
                accessors[i] = true;
            }
        }
        if (u.isArray(e)) {
            e.forEach(o);
        } else {
            o(e);
        }
        return this;
    }
}
ot.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
u.reduceDescriptors(ot.prototype, ({ value }, t)=>{
    let r = t[0].toUpperCase() + t.slice(1);
    return {
        get: ()=>value,
        set (n) {
            this[r] = n;
        }
    };
});
u.freezeMethods(ot);
const F = ot;
function st(e, t) {
    let r = this || He;
    let n = t || r;
    let o = F.from(n.headers);
    let n_data = n.data;
    u.forEach(e, function(a) {
        n_data = a.call(r, n_data, o.normalize(), t ? t.status : undefined);
    });
    o.normalize();
    return n_data;
}
function it(e) {
    return !!(e && e.__CANCEL__);
}
class Ns extends y {
    constructor(e, t, r){
        super(e ?? "canceled", y.ERR_CANCELED, t, r);
        this.name = "CanceledError";
        this.__CANCEL__ = true;
    }
}
const Q = Ns;
function ue(e, t, r) {
    let validateStatus = r.config.validateStatus;
    if (!r.status || !validateStatus || validateStatus(r.status)) {
        e(r);
    } else {
        t(new y(`Request failed with status code ${r.status}`, [
            y.ERR_BAD_REQUEST,
            y.ERR_BAD_RESPONSE
        ][Math.floor(r.status / 100) - 4], r.config, r.request, r));
    }
}
function Sr(e) {
    if (typeof e !== "string") {
        return false;
    }
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ar(e, t) {
    if (t) {
        return `${e.replace(/\/?\/$/, "")}/${t.replace(/^\/+/, "")}`;
    }
    return e;
}
function xe(e, t, r) {
    let n = !Sr(t);
    if (e && (n || r === false)) {
        return Ar(e, t);
    }
    return t;
}
const Lc = {
    ftp: 21,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
function Bc(e) {
    try {
        return new URL(e);
    } catch  {
        return null;
    }
}
function Ds(e) {
    const t = (typeof e === "string" ? Bc(e) : e) || {};
    let { protocol, host, port } = t;
    if (typeof host !== "string" || !host || typeof protocol !== "string") {
        return "";
    }
    protocol = protocol.split(":", 1)[0];
    host = host.replace(/:\d*$/, "");
    port = parseInt(port) || Lc[protocol] || 0;
    if (!Nc(host, port)) {
        return "";
    }
    let s = Or(`${protocol}_proxy`) || Or("all_proxy");
    if (s && s.indexOf("://") === -1) {
        s = `${protocol}://${s}`;
    }
    return s;
}
function Nc(host, port) {
    const r = Or("no_proxy").toLowerCase();
    if (!r) {
        return true;
    }
    if (r === "*") {
        return false;
    }
    return r.split(/[,\s]/).every((n)=>{
        if (!n) {
            return true;
        }
        const o = n.match(/^(.+):(\d+)$/);
        let s = o ? o[1] : n;
        const i = o ? parseInt(o[2]) : 0;
        if (i && i !== port) {
            return true;
        }
        if (!/^[.*]/.test(s)) {
            return host !== s;
        }
        if (s.charAt(0) === "*") {
            s = s.slice(1);
        }
        return !host.endsWith(s);
    });
}
function Or(e) {
    return process.env[e.toLowerCase()] || process.env[e.toUpperCase()] || "";
}
const Ri = Se(Qs(), 1);
const ve = "1.15.2";
function lt(e) {
    let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || "";
}
const Lf = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function Vr(e, t, r) {
    let n = r && r.Blob || A.classes.Blob;
    let o = lt(e);
    if (t === undefined && n) {
        t = true;
    }
    if (o === "data") {
        e = o.length ? e.slice(o.length + 1) : e;
        let s = Lf.exec(e);
        if (!s) {
            throw new y("Invalid URL", y.ERR_INVALID_URL);
        }
        let type = s[1];
        let a = s[2];
        let l = s[3];
        let f = Buffer.from(decodeURIComponent(l), a ? "base64" : "utf8");
        if (t) {
            if (!n) {
                throw new y("Blob is not supported", y.ERR_NOT_SUPPORT);
            }
            return new n([
                f
            ], {
                type
            });
        }
        return f;
    }
    throw new y(`Unsupported protocol ${o}`, y.ERR_NOT_SUPPORT);
}
const Wr = Symbol("internals");
class Zs extends se.Transform {
    constructor(e){
        e = u.toFlatObject(e, {
            maxRate: 0,
            chunkSize: 65536,
            minChunkSize: 100,
            timeWindow: 500,
            ticksRate: 2,
            samplesCount: 15
        }, null, (r, n)=>!u.isUndefined(n[r]));
        super({
            readableHighWaterMark: e.chunkSize
        });
        let t = this[Wr] = {
            timeWindow: e.timeWindow,
            chunkSize: e.chunkSize,
            maxRate: e.maxRate,
            minChunkSize: e.minChunkSize,
            bytesSeen: 0,
            isCaptured: false,
            notifiedBytesLoaded: 0,
            ts: Date.now(),
            bytes: 0,
            onReadCallback: null
        };
        this.on("newListener", (r)=>{
            if (r === "progress") {
                if (!t.isCaptured) {
                    t.isCaptured = true;
                }
            }
        });
    }
    _read(e) {
        let t = this[Wr];
        if (t.onReadCallback) {
            t.onReadCallback();
        }
        return super._read(e);
    }
    _transform(e, t, r) {
        let n = this[Wr];
        let n_maxRate = n.maxRate;
        let readableHighWaterMark = this.readableHighWaterMark;
        let n_timeWindow = n.timeWindow;
        let a = 1000 / n_timeWindow;
        let l = n_maxRate / a;
        let f = n.minChunkSize !== false ? Math.max(n.minChunkSize, l * 0.01) : 0;
        let c = (d, b)=>{
            let m = Buffer.byteLength(d);
            n.bytesSeen += m;
            n.bytes += m;
            if (n.isCaptured) {
                this.emit("progress", n.bytesSeen);
            }
            if (this.push(d)) {
                process.nextTick(b);
            } else {
                n.onReadCallback = ()=>{
                    n.onReadCallback = null;
                    process.nextTick(b);
                };
            }
        };
        let p = (d, b)=>{
            let m = Buffer.byteLength(d);
            let g = null;
            let h = readableHighWaterMark;
            let E;
            let N = 0;
            if (n_maxRate) {
                let v = Date.now();
                if (!n.ts || (N = v - n.ts) >= n_timeWindow) {
                    n.ts = v;
                    E = l - n.bytes;
                    n.bytes = E < 0 ? -E : 0;
                    N = 0;
                }
                E = l - n.bytes;
            }
            if (n_maxRate) {
                if (E <= 0) {
                    return setTimeout(()=>{
                        b(null, d);
                    }, n_timeWindow - N);
                }
                if (E < h) {
                    h = E;
                }
            }
            if (h && m > h && m - h > f) {
                g = d.subarray(h);
                d = d.subarray(0, h);
            }
            c(d, g ? ()=>{
                process.nextTick(b, null, g);
            } : b);
        };
        p(e, function d(b, m) {
            if (b) {
                return r(b);
            }
            if (m) {
                p(m, d);
            } else {
                r(null);
            }
        });
    }
}
const Gr = Zs;
const { asyncIterator } = Symbol;
const Nf = async function*(e) {
    if (e.stream) {
        yield* e.stream();
    } else if (e.arrayBuffer) {
        yield await e.arrayBuffer();
    } else if (e[asyncIterator]) {
        yield* e[asyncIterator]();
    } else {
        yield e;
    }
};
const jt = Nf;
const qf = `${A.ALPHABET.ALPHA_DIGIT}-_`;
const pt = typeof TextEncoder === "function" ? new TextEncoder : new Ei.TextEncoder;
const Te = `\r
`;
const If = pt.encode(Te);
const kf = 2;
class ti {
    constructor(e, t){
        let { escapeName } = this.constructor;
        let n = u.isString(t);
        let o = `Content-Disposition: form-data; name="${escapeName(e)}"${!n && t.name ? `; filename="${escapeName(t.name)}"` : ""}${Te}`;
        if (n) {
            t = pt.encode(String(t).replace(/\r?\n|\r\n?/g, Te));
        } else {
            let s = String(t.type || "application/octet-stream").replace(/[\r\n]/g, "");
            o += `Content-Type: ${s}${Te}`;
        }
        this.headers = pt.encode(o + Te);
        this.contentLength = n ? t.byteLength : t.size;
        this.size = this.headers.byteLength + this.contentLength + kf;
        this.name = e;
        this.value = t;
    }
    async *encode() {
        yield this.headers;
        let { value } = this;
        if (u.isTypedArray(value)) {
            yield value;
        } else {
            yield* jt(value);
        }
        yield If;
    }
    static escapeName(e) {
        return String(e).replace(/[\r\n"]/g, (t)=>({
                "\r": "%0D",
                "\n": "%0A",
                '"': "%22"
            })[t]);
    }
}
const jf = (e, t, r)=>{
    let { tag = "form-data-boundary", size = 25, boundary = `${tag}-${A.generateString(size, qf)}` } = r || {};
    if (!u.isFormData(e)) {
        throw TypeError("FormData instance required");
    }
    if (boundary.length < 1 || boundary.length > 70) {
        throw Error("boundary must be 10-70 characters long");
    }
    let i = pt.encode(`--${boundary}${Te}`);
    let a = pt.encode(`--${boundary}--${Te}`);
    let a_byteLength = a.byteLength;
    let f = Array.from(e.entries()).map(([p, d])=>{
        let b = new ti(p, d);
        a_byteLength += b.size;
        return b;
    });
    a_byteLength += i.byteLength * f.length;
    a_byteLength = u.toFiniteNumber(a_byteLength);
    let c = {
        "Content-Type": `multipart/form-data; boundary=${boundary}`
    };
    if (Number.isFinite(a_byteLength)) {
        c["Content-Length"] = a_byteLength;
    }
    if (t) {
        t(c);
    }
    return Readable.from(async function*() {
        for (let p of f){
            yield i;
            yield* p.encode();
        }
        yield a;
    }());
};
const ri = jf;
class ni extends se.Transform {
    __transform(e, t, r) {
        this.push(e);
        r();
    }
    _transform(e, t, r) {
        if (e.length !== 0) {
            this._transform = this.__transform;
            if (e[0] !== 120) {
                let n = Buffer.alloc(2);
                n[0] = 120;
                n[1] = 156;
                this.push(n, t);
            }
        }
        this.__transform(e, t, r);
    }
}
const oi = ni;
const Hf = (e, t)=>{
    if (u.isAsyncFn(e)) {
        return function(...r) {
            let n = r.pop();
            e.apply(this, r).then((o)=>{
                try {
                    if (t) {
                        n(null, ...t(o));
                    } else {
                        n(null, o);
                    }
                } catch (error) {
                    n(error);
                }
            }, n);
        };
    }
    return e;
};
const si = Hf;
const zf = new Set([
    "localhost"
]);
const ui = (e)=>{
    let t = e.split(".");
    if (t.length !== 4) {
        return false;
    }
    if (t[0] !== "127") {
        return false;
    }
    return t.every((r)=>/^\d+$/.test(r) && Number(r) >= 0 && Number(r) <= 255);
};
const $f = (e)=>{
    if (e === "::1") {
        return true;
    }
    let t = e.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
    if (t) {
        return ui(t[1]);
    }
    let r = e.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
    if (r) {
        let o = parseInt(r[1], 16);
        return o >= 32512 && o <= 32767;
    }
    let n = e.split(":");
    if (n.length === 8) {
        for(let o = 0; o < 7; o++){
            if (!/^0+$/.test(n[o])) {
                return false;
            }
        }
        return /^0*1$/.test(n[7]);
    }
    return false;
};
const ii = (e)=>{
    if (!e) {
        return false;
    }
    if (zf.has(e)) {
        return true;
    }
    if (ui(e)) {
        return true;
    }
    return $f(e);
};
const Vf = {
    http: 80,
    https: 443,
    ws: 80,
    wss: 443,
    ftp: 21
};
const Wf = (e)=>{
    let t = e;
    let r = 0;
    if (t.charAt(0) === "[") {
        let s = t.indexOf("]");
        if (s !== -1) {
            let i = t.slice(1, s);
            let a = t.slice(s + 1);
            if (a.charAt(0) === ":" && /^\d+$/.test(a.slice(1))) {
                r = Number.parseInt(a.slice(1), 10);
            }
            return [
                i,
                r
            ];
        }
    }
    let n = t.indexOf(":");
    let o = t.lastIndexOf(":");
    if (n !== -1 && n === o && /^\d+$/.test(t.slice(o + 1))) {
        r = Number.parseInt(t.slice(o + 1), 10);
        t = t.slice(0, o);
    }
    return [
        t,
        r
    ];
};
const ai = (e)=>{
    if (!e) {
        return e;
    }
    if (e.charAt(0) === "[" && e.charAt(e.length - 1) === "]") {
        e = e.slice(1, -1);
    }
    return e.replace(/\.+$/, "");
};
function Jr(e) {
    let t;
    try {
        t = new URL(e);
    } catch (s) {
        return false;
    }
    let r = (process.env.no_proxy || process.env.NO_PROXY || "").toLowerCase();
    if (!r) {
        return false;
    }
    if (r === "*") {
        return true;
    }
    let n = Number.parseInt(t.port, 10) || Vf[t.protocol.split(":", 1)[0]] || 0;
    let o = ai(t.hostname.toLowerCase());
    return r.split(/[\s,]+/).some((s)=>{
        if (!s) {
            return false;
        }
        let [i, a] = Wf(s);
        i = ai(i);
        if (!i) {
            return false;
        }
        if (a && a !== n) {
            return false;
        }
        if (i.charAt(0) === "*") {
            i = i.slice(1);
        }
        if (i.charAt(0) === ".") {
            return o.endsWith(i);
        }
        return o === i || ii(o) && ii(i);
    });
}
function Gf(e, t) {
    e = e || 10;
    let r = Array(e);
    let n = Array(e);
    let o = 0;
    let s = 0;
    let i;
    t = t !== undefined ? t : 1000;
    return function(l) {
        let f = Date.now();
        let c = n[s];
        if (!i) {
            i = f;
        }
        r[o] = l;
        n[o] = f;
        let p = s;
        let d = 0;
        while(p !== o){
            d += r[p++];
            p = p % e;
        }
        o = (o + 1) % e;
        if (o === s) {
            s = (s + 1) % e;
        }
        if (f - i < t) {
            return;
        }
        let b = c && f - c;
        if (b) {
            return Math.round(d * 1000 / b);
        }
    };
}
const ci = Gf;
function Jf(e, t) {
    let r = 0;
    let n = 1000 / t;
    let o;
    let s;
    let i = (f, c = Date.now())=>{
        r = c;
        o = null;
        if (s) {
            clearTimeout(s);
            s = null;
        }
        e(...f);
    };
    return [
        (...f)=>{
            let c = Date.now();
            let p = c - r;
            if (p >= n) {
                i(f, c);
            } else {
                o = f;
                if (!s) {
                    s = setTimeout(()=>{
                        s = null;
                        i(o);
                    }, n - p);
                }
            }
        },
        ()=>o && i(o)
    ];
}
const fi = Jf;
const le = (e, t, r = 3)=>{
    let n = 0;
    let o = ci(50, 250);
    return fi((event)=>{
        let s_loaded = event.loaded;
        let a = event.lengthComputable ? event.total : undefined;
        let loaded = a != null ? Math.min(s_loaded, a) : s_loaded;
        let bytes = Math.max(0, loaded - n);
        let c = o(bytes);
        n = Math.max(n, loaded);
        let p = {
            loaded,
            total: a,
            progress: a ? loaded / a : undefined,
            bytes,
            rate: c ? c : undefined,
            estimated: c && a ? (a - loaded) / c : undefined,
            event,
            lengthComputable: a != null,
            [t ? "download" : "upload"]: true
        };
        e(p);
    }, r);
};
const We = (e, t)=>{
    let lengthComputable = e != null;
    return [
        (loaded)=>t[0]({
                lengthComputable,
                total: e,
                loaded
            }),
        t[1]
    ];
};
const Ge = (e)=>(...t)=>u.asap(()=>e(...t));
function Kr(e) {
    if (!e || typeof e !== "string") {
        return 0;
    }
    if (!e.startsWith("data:")) {
        return 0;
    }
    let t = e.indexOf(",");
    if (t < 0) {
        return 0;
    }
    let r = e.slice(5, t);
    let n = e.slice(t + 1);
    if (/;base64/i.test(r)) {
        let { length, length: length_1 } = n;
        for(let d = 0; d < length_1; d++){
            if (n.charCodeAt(d) === 37 && d + 2 < length_1) {
                let b = n.charCodeAt(d + 1);
                let m = n.charCodeAt(d + 2);
                if ((b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102) && (m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102)) {
                    length -= 2;
                    d += 2;
                }
            }
        }
        let a = 0;
        let l = length_1 - 1;
        let f = (d)=>d >= 2 && n.charCodeAt(d - 2) === 37 && n.charCodeAt(d - 1) === 51 && (n.charCodeAt(d) === 68 || n.charCodeAt(d) === 100);
        if (l >= 0) {
            if (n.charCodeAt(l) === 61) {
                a++;
                l--;
            } else if (f(l)) {
                a++;
                l -= 3;
            }
        }
        if (a === 1 && l >= 0) {
            if (n.charCodeAt(l) === 61) {
                a++;
            } else if (f(l)) {
                a++;
            }
        }
        let p = Math.floor(length / 4) * 3 - (a || 0);
        if (p > 0) {
            return p;
        }
        return 0;
    }
    return Buffer.byteLength(n, "utf8");
}
const pi = {
    flush: ye.constants.Z_SYNC_FLUSH,
    finishFlush: ye.constants.Z_SYNC_FLUSH
};
const Qf = {
    flush: ye.constants.BROTLI_OPERATION_FLUSH,
    finishFlush: ye.constants.BROTLI_OPERATION_FLUSH
};
const di = u.isFunction(ye.createBrotliDecompress);
const { http, https } = Ri.default;
const tl = /https:?/;
const hi = Symbol("axios.http.socketListener");
const Mt = Symbol("axios.http.currentReq");
const mi = A.protocols.map((e)=>`${e}:`);
const yi = (e, [t, r])=>{
    e.on("end", r).on("error", r);
    return t;
};
class wi {
    constructor(){
        this.sessions = Object.create(null);
    }
    getSession(e, t) {
        t = {
            sessionTimeout: 1000,
            ...t
        };
        let r = this.sessions[e];
        if (r) {
            let f = r.length;
            for(let c = 0; c < f; c++){
                let [p, d] = r[c];
                if (!p.destroyed && !p.closed && Ei.isDeepStrictEqual(d, t)) {
                    return p;
                }
            }
        }
        let n = gi.connect(e, t);
        let o;
        let s = ()=>{
            if (o) {
                return;
            }
            o = true;
            let f = r;
            let f_length = f.length;
            let p = f_length;
            while(p--){
                if (f[p][0] === n) {
                    if (f_length === 1) {
                        delete this.sessions[e];
                    } else {
                        f.splice(p, 1);
                    }
                    if (!n.closed) {
                        n.close();
                    }
                    return;
                }
            }
        };
        let n_request = n.request;
        let { sessionTimeout } = t;
        if (sessionTimeout != null) {
            let f;
            let c = 0;
            n.request = function() {
                let p = n_request.apply(this, arguments);
                c++;
                if (f) {
                    clearTimeout(f);
                    f = null;
                }
                p.once("close", ()=>{
                    if (!--c) {
                        f = setTimeout(()=>{
                            f = null;
                            s();
                        }, sessionTimeout);
                    }
                });
                return p;
            };
        }
        n.once("close", s);
        let l = [
            n,
            t
        ];
        if (r) {
            r.push(l);
        } else {
            r = this.sessions[e] = [
                l
            ];
        }
        return n;
    }
}
const rl = new wi;
function beforeRedirect(e, t) {
    if (e.beforeRedirects.proxy) {
        e.beforeRedirects.proxy(e);
    }
    if (e.beforeRedirects.config) {
        e.beforeRedirects.config(e, t);
    }
}
function xi(e, t, r) {
    let proxy = t;
    if (!proxy && proxy !== false) {
        let o = Ds(r);
        if (o) {
            if (!Jr(r)) {
                proxy = new URL(o);
            }
        }
    }
    if (proxy) {
        if (proxy.username) {
            proxy.auth = `${proxy.username || ""}:${proxy.password || ""}`;
        }
        if (proxy.auth) {
            if (Boolean(proxy.auth.username || proxy.auth.password)) {
                proxy.auth = `${proxy.auth.username || ""}:${proxy.auth.password || ""}`;
            } else if (typeof proxy.auth === "object") {
                throw new y("Invalid proxy authorization", y.ERR_BAD_OPTION, {
                    proxy
                });
            }
            let i = Buffer.from(proxy.auth, "utf8").toString("base64");
            e.headers["Proxy-Authorization"] = `Basic ${i}`;
        }
        e.headers.host = e.hostname + (e.port ? `:${e.port}` : "");
        let o = proxy.hostname || proxy.host;
        e.hostname = o;
        e.host = o;
        e.port = proxy.port;
        e.path = r;
        if (proxy.protocol) {
            e.protocol = proxy.protocol.includes(":") ? proxy.protocol : `${proxy.protocol}:`;
        }
    }
    e.beforeRedirects.proxy = function(s) {
        xi(s, t, s.href);
    };
}
const ol = typeof process !== "undefined" && u.kindOf(process) === "process";
const sl = (e)=>new Promise((resolvePromise, rejectPromise)=>{
        let n;
        let o;
        let s = (l, f)=>{
            if (o) {
                return;
            }
            o = true;
            if (n) {
                n(l, f);
            }
        };
        let i = (l)=>{
            s(l);
            resolvePromise(l);
        };
        let a = (l)=>{
            s(l, true);
            rejectPromise(l);
        };
        e(i, a, (l)=>n = l).catch(a);
    });
const il = ({ address, family })=>{
    if (!u.isString(address)) {
        throw TypeError("address must be a string");
    }
    return {
        address,
        family: family || (address.indexOf(".") < 0 ? 6 : 4)
    };
};
const bi = (address, t)=>il(u.isObject(address) ? address : {
        address,
        family: t
    });
const al = {
    request (e, t) {
        let r = `${e.protocol}//${e.hostname}:${e.port || (e.protocol === "https:" ? 443 : 80)}`;
        let { http2Options, headers } = e;
        let s = rl.getSession(r, http2Options);
        let { HTTP2_HEADER_SCHEME, HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH, HTTP2_HEADER_STATUS } = gi.constants;
        let c = {
            [HTTP2_HEADER_SCHEME]: e.protocol.replace(":", ""),
            [HTTP2_HEADER_METHOD]: e.method,
            [HTTP2_HEADER_PATH]: e.path
        };
        u.forEach(headers, (d, b)=>{
            if (b.charAt(0) !== ":") {
                c[b] = d;
            }
        });
        let p = s.request(c);
        p.once("response", (d)=>{
            let b = p;
            d = {
                ...d
            };
            let m = d[HTTP2_HEADER_STATUS];
            delete d[HTTP2_HEADER_STATUS];
            b.headers = d;
            b.statusCode = +m;
            t(b);
        });
        return p;
    }
};
const _i = ol && function(t) {
    return sl(async (n, o, s)=>{
        let i = (w)=>{
            if (u.hasOwnProp(t, w)) {
                return t[w];
            }
        };
        let a = i("data");
        let l = i("lookup");
        let f = i("family");
        let c = i("httpVersion");
        if (c === undefined) {
            c = 1;
        }
        let http2Options = i("http2Options");
        let d = i("responseType");
        let b = i("responseEncoding");
        let m = t.method.toUpperCase();
        let g;
        let h = false;
        let E;
        c = +c;
        if (Number.isNaN(c)) {
            throw TypeError(`Invalid protocol version: '${t.httpVersion}' is not a number`);
        }
        if (c !== 1 && c !== 2) {
            throw TypeError(`Unsupported protocol version '${c}'`);
        }
        let N = c === 2;
        if (l) {
            let w = si(l, (R)=>{
                if (u.isArray(R)) {
                    return R;
                }
                return [
                    R
                ];
            });
            l = (R, O, B)=>{
                w(R, O, (P, K, fe)=>{
                    if (P) {
                        return B(P);
                    }
                    let q = u.isArray(K) ? K.map((Ne)=>bi(Ne)) : [
                        bi(K, fe)
                    ];
                    if (O.all) {
                        B(P, q);
                    } else {
                        B(P, q[0].address, q[0].family);
                    }
                });
            };
        }
        let v = new EventEmitter;
        function x(w) {
            try {
                v.emit("abort", !w || w.type ? new Q(null, t, E) : w);
            } catch (error) {
                console.warn("emit error", error);
            }
        }
        v.once("abort", o);
        let k = ()=>{
            if (t.cancelToken) {
                t.cancelToken.unsubscribe(x);
            }
            if (t.signal) {
                t.signal.removeEventListener("abort", x);
            }
            v.removeAllListeners();
        };
        if (t.cancelToken || t.signal) {
            if (t.cancelToken) {
                t.cancelToken.subscribe(x);
            }
            if (t.signal) {
                if (t.signal.aborted) {
                    x();
                } else {
                    t.signal.addEventListener("abort", x);
                }
            }
        }
        s((w, R)=>{
            g = true;
            if (R) {
                h = true;
                k();
                return;
            }
            let { data } = w;
            if (data instanceof se.Readable || data instanceof se.Duplex) {
                let B = se.finished(data, ()=>{
                    B();
                    k();
                });
            } else {
                k();
            }
        });
        let G = xe(t.baseURL, t.url, t.allowAbsoluteUrls);
        let T = new URL(G, A.hasBrowserEnv ? A.origin : undefined);
        let J = T.protocol || mi[0];
        if (J === "data:") {
            if (t.maxContentLength > -1) {
                let R = String(t.url || G || "");
                if (Kr(R) > t.maxContentLength) {
                    return o(new y(`maxContentLength size of ${t.maxContentLength} exceeded`, y.ERR_BAD_RESPONSE, t));
                }
            }
            let w;
            if (m !== "GET") {
                return ue(n, o, {
                    status: 405,
                    statusText: "method not allowed",
                    headers: {},
                    config: t
                });
            }
            try {
                w = Vr(t.url, d === "blob", {
                    Blob: t.env && t.env.Blob
                });
            } catch (error) {
                throw y.from(error, y.ERR_BAD_REQUEST, t);
            }
            if (d === "text") {
                w = w.toString(b);
                if (!b || b === "utf8") {
                    w = u.stripBOM(w);
                }
            } else if (d === "stream") {
                w = se.Readable.from(w);
            }
            return ue(n, o, {
                data: w,
                status: 200,
                statusText: "OK",
                headers: new F,
                config: t
            });
        }
        if (mi.indexOf(J) === -1) {
            return o(new y(`Unsupported protocol ${J}`, y.ERR_BAD_REQUEST, t));
        }
        let D = F.from(t.headers).normalize();
        D.set("User-Agent", `axios/${ve}`, false);
        let { onUploadProgress, onDownloadProgress } = t;
        let t_maxRate = t.maxRate;
        let ae;
        let Z;
        if (u.isSpecCompliantForm(a)) {
            let w = D.getContentType(/boundary=([-_\w\d]{10,70})/i);
            a = ri(a, (R)=>{
                D.set(R);
            }, {
                tag: `axios-${ve}-boundary`,
                boundary: w && w[1] || undefined
            });
        } else if (u.isFormData(a) && u.isFunction(a.getHeaders) && a.getHeaders !== Object.prototype.getHeaders) {
            D.set(a.getHeaders());
            if (!D.hasContentLength()) {
                try {
                    let w = await Ei.promisify(a.getLength).call(a);
                    if (Number.isFinite(w) && w >= 0) {
                        D.setContentLength(w);
                    }
                } catch (w) {}
            }
        } else if (u.isBlob(a) || u.isFile(a)) {
            if (a.size) {
                D.setContentType(a.type || "application/octet-stream");
            }
            D.setContentLength(a.size || 0);
            a = se.Readable.from(jt(a));
        } else if (a && !u.isStream(a)) {
            if (Buffer.isBuffer(a)) ;
            else if (u.isArrayBuffer(a)) {
                a = Buffer.from(new Uint8Array(a));
            } else if (u.isString(a)) {
                a = Buffer.from(a, "utf-8");
            } else {
                return o(new y("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", y.ERR_BAD_REQUEST, t));
            }
            D.setContentLength(a.length, false);
            if (t.maxBodyLength > -1 && a.length > t.maxBodyLength) {
                return o(new y("Request body larger than maxBodyLength limit", y.ERR_BAD_REQUEST, t));
            }
        }
        let yt = u.toFiniteNumber(D.getContentLength());
        if (u.isArray(t_maxRate)) {
            ae = t_maxRate[0];
            Z = t_maxRate[1];
        } else {
            Z = t_maxRate;
            ae = t_maxRate;
        }
        if (a && (onUploadProgress || ae)) {
            if (!u.isStream(a)) {
                a = se.Readable.from(a, {
                    objectMode: false
                });
            }
            a = se.pipeline([
                a,
                new Gr({
                    maxRate: u.toFiniteNumber(ae)
                })
            ], u.noop);
            if (onUploadProgress) {
                a.on("progress", yi(a, We(yt, le(Ge(onUploadProgress), false, 3))));
            }
        }
        let auth;
        let Be = i("auth");
        if (Be) {
            let w = Be.username || "";
            let R = Be.password || "";
            auth = `${w}:${R}`;
        }
        if (!auth && T.username) {
            let { username, password } = T;
            auth = `${username}:${password}`;
        }
        if (auth) {
            D.delete("authorization");
        }
        let path;
        try {
            path = we(T.pathname + T.search, t.params, t.paramsSerializer).replace(/^\?/, "");
        } catch (error) {
            let R = Error(error.message);
            R.config = t;
            R.url = t.url;
            R.exists = true;
            return o(R);
        }
        D.set("Accept-Encoding", `gzip, compress, deflate${di ? ", br" : ""}`, false);
        let z = Object.assign(Object.create(null), {
            path,
            method: m,
            headers: D.toJSON(),
            agents: {
                http: t.httpAgent,
                https: t.httpsAgent
            },
            auth,
            protocol: J,
            family: f,
            beforeRedirect,
            beforeRedirects: Object.create(null),
            http2Options
        });
        if (!u.isUndefined(l)) {
            z.lookup = l;
        }
        if (t.socketPath) {
            if (typeof t.socketPath !== "string") {
                return o(new y("socketPath must be a string", y.ERR_BAD_OPTION_VALUE, t));
            }
            if (t.allowedSocketPaths != null) {
                let w = Array.isArray(t.allowedSocketPaths) ? t.allowedSocketPaths : [
                    t.allowedSocketPaths
                ];
                let R = resolve(t.socketPath);
                if (!w.some((B)=>typeof B === "string" && resolve(B) === R)) {
                    return o(new y(`socketPath "${t.socketPath}" is not permitted by allowedSocketPaths`, y.ERR_BAD_OPTION_VALUE, t));
                }
            }
            z.socketPath = t.socketPath;
        } else {
            z.hostname = T.hostname.startsWith("[") ? T.hostname.slice(1, -1) : T.hostname;
            z.port = T.port;
            xi(z, t.proxy, `${J}//${T.hostname}${T.port ? `:${T.port}` : ""}${z.path}`);
        }
        let be;
        let V = tl.test(z.protocol);
        z.agent = V ? t.httpsAgent : t.httpAgent;
        if (N) {
            be = al;
        } else {
            let w = i("transport");
            if (w) {
                be = w;
            } else if (t.maxRedirects === 0) {
                be = V ? Xf : Kf;
            } else {
                if (t.maxRedirects) {
                    z.maxRedirects = t.maxRedirects;
                }
                let R = i("beforeRedirect");
                if (R) {
                    z.beforeRedirects.config = R;
                }
                be = V ? https : http;
            }
        }
        if (t.maxBodyLength > -1) {
            z.maxBodyLength = t.maxBodyLength;
        } else {
            z.maxBodyLength = Infinity;
        }
        z.insecureHTTPParser = Boolean(i("insecureHTTPParser"));
        E = be.request(z, function(R) {
            if (E.destroyed) {
                return;
            }
            let O = [
                R
            ];
            let B = u.toFiniteNumber(R.headers["content-length"]);
            if (onDownloadProgress || Z) {
                let q = new Gr({
                    maxRate: u.toFiniteNumber(Z)
                });
                if (onDownloadProgress) {
                    q.on("progress", yi(q, We(B, le(Ge(onDownloadProgress), true, 3))));
                }
                O.push(q);
            }
            let P = R;
            let K = R.req || E;
            if (t.decompress !== false && R.headers["content-encoding"]) {
                if (m === "HEAD" || R.statusCode === 204) {
                    delete R.headers["content-encoding"];
                }
                switch((R.headers["content-encoding"] || "").toLowerCase()){
                    case "gzip":
                    case "x-gzip":
                    case "compress":
                    case "x-compress":
                        O.push(ye.createUnzip(pi));
                        delete R.headers["content-encoding"];
                        break;
                    case "deflate":
                        O.push(new oi);
                        O.push(ye.createUnzip(pi));
                        delete R.headers["content-encoding"];
                        break;
                    case "br":
                        if (di) {
                            O.push(ye.createBrotliDecompress(Qf));
                            delete R.headers["content-encoding"];
                        }
                }
            }
            P = O.length > 1 ? se.pipeline(O, u.noop) : O[0];
            let fe = {
                status: R.statusCode,
                statusText: R.statusMessage,
                headers: new F(R.headers),
                config: t,
                request: K
            };
            if (d === "stream") {
                if (t.maxContentLength > -1) {
                    let q = t.maxContentLength;
                    let Ne = P;
                    async function* Je() {
                        let j = 0;
                        for await (let on of Ne){
                            j += on.length;
                            if (j > q) {
                                throw new y(`maxContentLength size of ${q} exceeded`, y.ERR_BAD_RESPONSE, t, K);
                            }
                            yield on;
                        }
                    }
                    P = se.Readable.from(Je(), {
                        objectMode: false
                    });
                }
                fe.data = P;
                ue(n, o, fe);
            } else {
                let q = [];
                let Ne = 0;
                P.on("data", function(j) {
                    q.push(j);
                    Ne += j.length;
                    if (t.maxContentLength > -1 && Ne > t.maxContentLength) {
                        h = true;
                        P.destroy();
                        x(new y(`maxContentLength size of ${t.maxContentLength} exceeded`, y.ERR_BAD_RESPONSE, t, K));
                    }
                });
                P.on("aborted", function() {
                    if (h) {
                        return;
                    }
                    let j = new y("stream has been aborted", y.ERR_BAD_RESPONSE, t, K);
                    P.destroy(j);
                    o(j);
                });
                P.on("error", function(j) {
                    if (E.destroyed) {
                        return;
                    }
                    o(y.from(j, null, t, K));
                });
                P.on("end", function() {
                    try {
                        let j = q.length === 1 ? q[0] : Buffer.concat(q);
                        if (d !== "arraybuffer") {
                            j = j.toString(b);
                            if (!b || b === "utf8") {
                                j = u.stripBOM(j);
                            }
                        }
                        fe.data = j;
                    } catch (error) {
                        return o(y.from(error, null, t, fe.request, fe));
                    }
                    ue(n, o, fe);
                });
            }
            v.once("abort", (q)=>{
                if (!P.destroyed) {
                    P.emit("error", q);
                    P.destroy();
                }
            });
        });
        v.once("abort", (w)=>{
            if (E.close) {
                E.close();
            } else {
                E.destroy(w);
            }
        });
        E.on("error", function(R) {
            o(y.from(R, null, t, E));
        });
        E.on("socket", function(R) {
            R.setKeepAlive(true, 60000);
            if (!R[hi]) {
                R.on("error", function(B) {
                    let P = R[Mt];
                    if (P && !P.destroyed) {
                        P.destroy(B);
                    }
                });
                R[hi] = true;
            }
            R[Mt] = E;
            E.once("close", function() {
                if (R[Mt] === E) {
                    R[Mt] = null;
                }
            });
        });
        if (t.timeout) {
            let w = parseInt(t.timeout, 10);
            if (Number.isNaN(w)) {
                x(new y("error trying to parse `config.timeout` to int", y.ERR_BAD_OPTION_VALUE, t, E));
                return;
            }
            E.setTimeout(w, function() {
                if (g) {
                    return;
                }
                let O = t.timeout ? `timeout of ${t.timeout}ms exceeded` : "timeout exceeded";
                let B = t.transitional || transitional_1;
                if (t.timeoutErrorMessage) {
                    O = t.timeoutErrorMessage;
                }
                x(new y(O, B.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED, t, E));
            });
        } else {
            E.setTimeout(0);
        }
        if (u.isStream(a)) {
            let w = false;
            let R = false;
            a.on("end", ()=>{
                w = true;
            });
            a.once("error", (B)=>{
                R = true;
                E.destroy(B);
            });
            a.on("close", ()=>{
                if (!w && !R) {
                    x(new Q("Request stream has been aborted", t, E));
                }
            });
            let O = a;
            if (t.maxBodyLength > -1 && t.maxRedirects === 0) {
                let B = t.maxBodyLength;
                let P = 0;
                O = se.pipeline([
                    a,
                    new se.Transform({
                        transform (K, fe, q) {
                            P += K.length;
                            if (P > B) {
                                return q(new y("Request body larger than maxBodyLength limit", y.ERR_BAD_REQUEST, t, E));
                            }
                            q(null, K);
                        }
                    })
                ], u.noop);
                O.on("error", (K)=>{
                    if (!E.destroyed) {
                        E.destroy(K);
                    }
                });
            }
            O.pipe(E);
        } else {
            if (a) {
                E.write(a);
            }
            E.end();
        }
    });
};
const Si = A.hasStandardBrowserEnv ? ((e, t)=>(r)=>{
        r = new URL(r, A.origin);
        return e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port);
    })(new URL(A.origin), A.navigator && /(msie|trident)/i.test(A.navigator.userAgent)) : ()=>true;
const Ai = A.hasStandardBrowserEnv ? {
    write (e, t, r, n, o, s, i) {
        if (typeof document === "undefined") {
            return;
        }
        let a = [
            `${e}=${encodeURIComponent(t)}`
        ];
        if (u.isNumber(r)) {
            a.push(`expires=${new Date(r).toUTCString()}`);
        }
        if (u.isString(n)) {
            a.push(`path=${n}`);
        }
        if (u.isString(o)) {
            a.push(`domain=${o}`);
        }
        if (s === true) {
            a.push("secure");
        }
        if (u.isString(i)) {
            a.push(`SameSite=${i}`);
        }
        document.cookie = a.join("; ");
    },
    read (e) {
        if (typeof document === "undefined") {
            return null;
        }
        let t = document.cookie.match(new RegExp(`(?:^|; )${e}=([^;]*)`));
        if (t) {
            return decodeURIComponent(t[1]);
        }
        return null;
    },
    remove (e) {
        this.write(e, "", Date.now() - 86400000, "/");
    }
} : {
    write () {},
    read () {
        return null;
    },
    remove () {}
};
const Oi = (e)=>{
    if (e instanceof F) {
        return {
            ...e
        };
    }
    return e;
};
function ie(e, t) {
    t = t || {};
    let r = Object.create(null);
    Object.defineProperty(r, "hasOwnProperty", {
        value: Object.prototype.hasOwnProperty,
        enumerable: false,
        writable: true,
        configurable: true
    });
    function n(f, c, p, caseless) {
        if (u.isPlainObject(f) && u.isPlainObject(c)) {
            return u.merge.call({
                caseless
            }, f, c);
        } else if (u.isPlainObject(c)) {
            return u.merge({}, c);
        } else if (u.isArray(c)) {
            return c.slice();
        }
        return c;
    }
    function o(f, c, p, d) {
        if (!u.isUndefined(c)) {
            return n(f, c, p, d);
        } else if (!u.isUndefined(f)) {
            return n(undefined, f, p, d);
        }
    }
    function s(f, c) {
        if (!u.isUndefined(c)) {
            return n(undefined, c);
        }
    }
    function i(f, c) {
        if (!u.isUndefined(c)) {
            return n(undefined, c);
        } else if (!u.isUndefined(f)) {
            return n(undefined, f);
        }
    }
    function validateStatus(f, c, p) {
        if (u.hasOwnProp(t, p)) {
            return n(f, c);
        } else if (u.hasOwnProp(e, p)) {
            return n(undefined, f);
        }
    }
    let l = {
        url: s,
        method: s,
        data: s,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        allowedSocketPaths: i,
        responseEncoding: i,
        validateStatus,
        headers: (f, c, p)=>o(Oi(f), Oi(c), p, true)
    };
    u.forEach(Object.keys({
        ...e,
        ...t
    }), function(c) {
        if (c === "__proto__" || c === "constructor" || c === "prototype") {
            return;
        }
        let p = u.hasOwnProp(l, c) ? l[c] : o;
        let d = u.hasOwnProp(e, c) ? e[c] : undefined;
        let b = u.hasOwnProp(t, c) ? t[c] : undefined;
        let m = p(d, b, c);
        if (!(u.isUndefined(m) && p !== validateStatus)) {
            r[c] = m;
        }
    });
    return r;
}
const Ht = (e)=>{
    let t = ie({}, e);
    let r = (d)=>{
        if (u.hasOwnProp(t, d)) {
            return t[d];
        }
    };
    let n = r("data");
    let o = r("withXSRFToken");
    let s = r("xsrfHeaderName");
    let i = r("xsrfCookieName");
    let a = r("headers");
    let l = r("auth");
    let f = r("baseURL");
    let c = r("allowAbsoluteUrls");
    let p = r("url");
    t.headers = a = F.from(a);
    t.url = we(xe(f, p, c), e.params, e.paramsSerializer);
    if (l) {
        a.set("Authorization", `Basic ${btoa(`${l.username || ""}:${l.password ? unescape(encodeURIComponent(l.password)) : ""}`)}`);
    }
    if (u.isFormData(n)) {
        if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv) {
            a.setContentType(undefined);
        } else if (u.isFunction(n.getHeaders)) {
            let d = n.getHeaders();
            let b = [
                "content-type",
                "content-length"
            ];
            Object.entries(d).forEach(([m, g])=>{
                if (b.includes(m.toLowerCase())) {
                    a.set(m, g);
                }
            });
        }
    }
    if (A.hasStandardBrowserEnv) {
        if (u.isFunction(o)) {
            o = o(t);
        }
        if (o === true || o == null && Si(t.url)) {
            let b = s && i && Ai.read(i);
            if (b) {
                a.set(s, b);
            }
        }
    }
    return t;
};
const ul = typeof XMLHttpRequest !== "undefined";
const xhr = ul && function(e) {
    return new Promise((resolvePromise, rejectPromise)=>{
        let o = Ht(e);
        let o_data = o.data;
        let i = F.from(o.headers).normalize();
        let { responseType, onUploadProgress, onDownloadProgress } = o;
        let c;
        let p;
        let d;
        let b;
        let m;
        function g() {
            if (b) {
                b();
            }
            if (m) {
                m();
            }
            if (o.cancelToken) {
                o.cancelToken.unsubscribe(c);
            }
            if (o.signal) {
                o.signal.removeEventListener("abort", c);
            }
        }
        let h = new XMLHttpRequest;
        h.open(o.method.toUpperCase(), o.url, true);
        h.timeout = o.timeout;
        function E() {
            if (!h) {
                return;
            }
            let headers = F.from("getAllResponseHeaders" in h && h.getAllResponseHeaders());
            let k = {
                data: !responseType || responseType === "text" || responseType === "json" ? h.responseText : h.response,
                status: h.status,
                statusText: h.statusText,
                headers,
                config: e,
                request: h
            };
            ue((T)=>{
                resolvePromise(T);
                g();
            }, (T)=>{
                rejectPromise(T);
                g();
            }, k);
            h = null;
        }
        if ("onloadend" in h) {
            h.onloadend = E;
        } else {
            h.onreadystatechange = function() {
                if (!h || h.readyState !== 4) {
                    return;
                }
                if (h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0)) {
                    return;
                }
                setTimeout(E);
            };
        }
        h.onabort = function() {
            if (!h) {
                return;
            }
            rejectPromise(new y("Request aborted", y.ECONNABORTED, e, h));
            h = null;
        };
        h.onerror = function(x) {
            let k = x && x.message ? x.message : "Network Error";
            let G = new y(k, y.ERR_NETWORK, e, h);
            G.event = x || null;
            rejectPromise(G);
            h = null;
        };
        h.ontimeout = function() {
            let x = o.timeout ? `timeout of ${o.timeout}ms exceeded` : "timeout exceeded";
            let k = o.transitional || transitional_1;
            if (o.timeoutErrorMessage) {
                x = o.timeoutErrorMessage;
            }
            rejectPromise(new y(x, k.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED, e, h));
            h = null;
        };
        if (o_data === undefined) {
            i.setContentType(null);
        }
        if ("setRequestHeader" in h) {
            u.forEach(i.toJSON(), function(x, k) {
                h.setRequestHeader(k, x);
            });
        }
        if (!u.isUndefined(o.withCredentials)) {
            h.withCredentials = !!o.withCredentials;
        }
        if (responseType && responseType !== "json") {
            h.responseType = o.responseType;
        }
        if (onDownloadProgress) {
            [d, m] = le(onDownloadProgress, true);
            h.addEventListener("progress", d);
        }
        if (onUploadProgress && h.upload) {
            [p, b] = le(onUploadProgress);
            h.upload.addEventListener("progress", p);
            h.upload.addEventListener("loadend", b);
        }
        if (o.cancelToken || o.signal) {
            c = (v)=>{
                if (!h) {
                    return;
                }
                rejectPromise(!v || v.type ? new Q(null, e, h) : v);
                h.abort();
                h = null;
            };
            if (o.cancelToken) {
                o.cancelToken.subscribe(c);
            }
            if (o.signal) {
                if (o.signal.aborted) {
                    c();
                } else {
                    o.signal.addEventListener("abort", c);
                }
            }
        }
        let N = lt(o.url);
        if (N && A.protocols.indexOf(N) === -1) {
            rejectPromise(new y(`Unsupported protocol ${N}:`, y.ERR_BAD_REQUEST, e));
            return;
        }
        h.send(o_data || null);
    });
};
const cl = (e, t)=>{
    let { length } = e = e ? e.filter(Boolean) : [];
    if (t || length) {
        let n = new AbortController;
        let o;
        let s = function(f) {
            if (!o) {
                o = true;
                a();
                let c = f instanceof Error ? f : this.reason;
                n.abort(c instanceof y ? c : new Q(c instanceof Error ? c.message : c));
            }
        };
        let i = t && setTimeout(()=>{
            i = null;
            s(new y(`timeout of ${t}ms exceeded`, y.ETIMEDOUT));
        }, t);
        let a = ()=>{
            if (e) {
                if (i) {
                    clearTimeout(i);
                }
                i = null;
                e.forEach((f)=>{
                    if (f.unsubscribe) {
                        f.unsubscribe(s);
                    } else {
                        f.removeEventListener("abort", s);
                    }
                });
                e = null;
            }
        };
        e.forEach((f)=>f.addEventListener("abort", s));
        let { signal } = n;
        signal.unsubscribe = ()=>u.asap(a);
        return signal;
    }
};
const vi = cl;
const fl = function*(e, t) {
    let e_byteLength = e.byteLength;
    if (!t || e_byteLength < t) {
        yield e;
        return;
    }
    let n = 0;
    let o;
    while(n < e_byteLength){
        o = n + t;
        yield e.slice(n, o);
        n = o;
    }
};
const ll = async function*(body, t) {
    for await (let r of pl(body)){
        yield* fl(r, t);
    }
};
var pl = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield* e;
        return;
    }
    let t = e.getReader();
    try {
        while(true){
            let { done, value } = await t.read();
            if (done) {
                break;
            }
            yield value;
        }
    } finally{
        await t.cancel();
    }
};
const Xr = (body, t, r, n)=>{
    let o = ll(body, t);
    let s = 0;
    let i;
    let a = (l)=>{
        if (!i) {
            i = true;
            if (n) {
                n(l);
            }
        }
    };
    return new ReadableStream({
        async pull (l) {
            try {
                let { done, value } = await o.next();
                if (done) {
                    a();
                    l.close();
                    return;
                }
                let p = value.byteLength;
                if (r) {
                    let d = s += p;
                    r(d);
                }
                l.enqueue(new Uint8Array(value));
            } catch (error) {
                a(error);
                throw error;
            }
        },
        cancel (l) {
            a(l);
            return o.return();
        }
    }, {
        highWaterMark: 2
    });
};
const Ti = 65536;
const { isFunction } = u;
const dl = (({ Request, Response })=>({
        Request,
        Response
    }))(u.global);
const { ReadableStream: ReadableStream_1, TextEncoder: TextEncoder_1 } = u.global;
const Li = (e, ...t)=>{
    try {
        return !!e(...t);
    } catch (r) {
        return false;
    }
};
const hl = (e)=>{
    e = u.merge.call({
        skipUndefined: true
    }, dl, e);
    let { fetch: fetch_1, Request, Response } = e;
    let o = fetch_1 ? isFunction(fetch_1) : typeof fetch === "function";
    let s = isFunction(Request);
    let i = isFunction(Response);
    if (!o) {
        return false;
    }
    let a = o && isFunction(ReadableStream_1);
    let l = o && (typeof TextEncoder_1 === "function" ? ((m)=>(g)=>m.encode(g))(new TextEncoder_1) : async (m)=>new Uint8Array(await new Request(m).arrayBuffer()));
    let f = s && a && Li(()=>{
        let m = false;
        let g = new Request(A.origin, {
            body: new ReadableStream_1,
            method: "POST",
            get duplex () {
                m = true;
                return "half";
            }
        });
        let h = g.headers.has("Content-Type");
        if (g.body != null) {
            g.body.cancel();
        }
        return m && !h;
    });
    let c = i && a && Li(()=>u.isReadableStream(new Response("").body));
    let p = {
        stream: c && ((m)=>m.body)
    };
    if (o) {
        (()=>{
            [
                "text",
                "arrayBuffer",
                "blob",
                "formData",
                "stream"
            ].forEach((m)=>{
                if (!p[m]) {
                    p[m] = (g, h)=>{
                        let E = g && g[m];
                        if (E) {
                            return E.call(g);
                        }
                        throw new y(`Response type '${m}' is not supported`, y.ERR_NOT_SUPPORT, h);
                    };
                }
            });
        })();
    }
    let d = async (body)=>{
        if (body == null) {
            return 0;
        }
        if (u.isBlob(body)) {
            return body.size;
        }
        if (u.isSpecCompliantForm(body)) {
            return (await new Request(A.origin, {
                method: "POST",
                body
            }).arrayBuffer()).byteLength;
        }
        if (u.isArrayBufferView(body) || u.isArrayBuffer(body)) {
            return body.byteLength;
        }
        if (u.isURLSearchParams(body)) {
            body = `${body}`;
        }
        if (u.isString(body)) {
            return (await l(body)).byteLength;
        }
    };
    let b = async (headers, data)=>{
        let h = u.toFiniteNumber(headers.getContentLength());
        return h ?? d(data);
    };
    return async (m)=>{
        let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = "same-origin", fetchOptions } = Ht(m);
        let Fe = fetch_1 || fetch;
        responseType = responseType ? `${responseType}`.toLowerCase() : "text";
        let signal_1 = vi([
            signal,
            cancelToken && cancelToken.toAbortSignal()
        ], timeout);
        let ae = null;
        let Z = signal_1 && signal_1.unsubscribe && (()=>{
            signal_1.unsubscribe();
        });
        let yt;
        try {
            if (onUploadProgress && f && method !== "get" && method !== "head" && (yt = await b(headers, data)) !== 0) {
                let V = new Request(url, {
                    method: "POST",
                    body: data,
                    duplex: "half"
                });
                let w;
                if (u.isFormData(data) && (w = V.headers.get("content-type"))) {
                    headers.setContentType(w);
                }
                if (V.body) {
                    let [R, O] = We(yt, le(Ge(onUploadProgress)));
                    data = Xr(V.body, Ti, R, O);
                }
            }
            if (!u.isString(withCredentials)) {
                withCredentials = withCredentials ? "include" : "omit";
            }
            let U = s && "credentials" in Request.prototype;
            if (u.isFormData(data)) {
                let V = headers.getContentType();
                if (V && /^multipart\/form-data/i.test(V) && !/boundary=/i.test(V)) {
                    headers.delete("content-type");
                }
            }
            let Be = {
                ...fetchOptions,
                signal: signal_1,
                method: method.toUpperCase(),
                headers: headers.normalize().toJSON(),
                body: data,
                duplex: "half",
                credentials: U ? withCredentials : undefined
            };
            ae = s && new Request(url, Be);
            let re = await (s ? Fe(ae, fetchOptions) : Fe(url, Be));
            let z = c && (responseType === "stream" || responseType === "response");
            if (c && (onDownloadProgress || z && Z)) {
                let V = {};
                [
                    "status",
                    "statusText",
                    "headers"
                ].forEach((B)=>{
                    V[B] = re[B];
                });
                let w = u.toFiniteNumber(re.headers.get("content-length"));
                let [R, O] = onDownloadProgress && We(w, le(Ge(onDownloadProgress), true)) || [];
                re = new Response(Xr(re.body, Ti, R, ()=>{
                    if (O) {
                        O();
                    }
                    if (Z) {
                        Z();
                    }
                }), V);
            }
            responseType = responseType || "text";
            let be = await p[u.findKey(p, responseType) || "text"](re, m);
            if (!z && Z) {
                Z();
            }
            return await new Promise((resolvePromise, rejectPromise)=>{
                ue(resolvePromise, rejectPromise, {
                    data: be,
                    headers: F.from(re.headers),
                    status: re.status,
                    statusText: re.statusText,
                    config: m,
                    request: ae
                });
            });
        } catch (error) {
            if (Z) {
                Z();
            }
            if (error && error.name === "TypeError" && /Load failed|fetch/i.test(error.message)) {
                throw Object.assign(new y("Network Error", y.ERR_NETWORK, m, ae, error && error.response), {
                    cause: error.cause || error
                });
            }
            throw y.from(error, error && error.code, m, ae, error && error.response);
        }
    };
};
const ml = new Map;
const get = (e)=>{
    let t = e && e.env || {};
    let { fetch, Request, Response } = t;
    let s = [
        Request,
        Response,
        fetch
    ];
    let s_length = s.length;
    let a = s_length;
    let l;
    let f;
    let c = ml;
    while(a--){
        l = s[a];
        f = c.get(l);
        if (f === undefined) {
            c.set(l, f = a ? new Map : hl(t));
        }
        c = f;
    }
    return f;
};
const Cm = get();
const adapters = {
    http: _i,
    xhr,
    fetch: {
        get
    }
};
u.forEach(adapters, (e, t)=>{
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            });
        } catch (r) {}
        Object.defineProperty(e, "adapterName", {
            value: t
        });
    }
});
const Bi = (e)=>`- ${e}`;
const bl = (e)=>u.isFunction(e) || e === null || e === false;
function getAdapter_1(e, t) {
    e = u.isArray(e) ? e : [
        e
    ];
    let { length } = e;
    let n;
    let o;
    let s = {};
    for(let i = 0; i < length; i++){
        n = e[i];
        let a;
        o = n;
        if (!bl(n)) {
            o = adapters[(a = String(n)).toLowerCase()];
            if (o === undefined) {
                throw new y(`Unknown adapter '${a}'`);
            }
        }
        if (o && (u.isFunction(o) || (o = o.get(t)))) {
            break;
        }
        s[a || `#${i}`] = o;
    }
    if (!o) {
        let i = Object.entries(s).map(([l, f])=>`adapter ${l} ` + (f === false ? "is not supported by the environment" : "is not available in the build"));
        let a = length ? i.length > 1 ? `since :
` + i.map(Bi).join(`
`) : ` ${Bi(i[0])}` : "as no adapter specified";
        throw new y(`There is no suitable adapter to dispatch the request ${a}`, "ERR_NOT_SUPPORT");
    }
    return o;
}
const $t = {
    getAdapter: getAdapter_1,
    adapters
};
function Zr(e) {
    if (e.cancelToken) {
        e.cancelToken.throwIfRequested();
    }
    if (e.signal && e.signal.aborted) {
        throw new Q(null, e);
    }
}
function Vt(e) {
    Zr(e);
    e.headers = F.from(e.headers);
    e.data = st.call(e, e.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(e.method) !== -1) {
        e.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    return $t.getAdapter(e.adapter || He.adapter, e)(e).then((n)=>{
        Zr(e);
        n.data = st.call(e, e.transformResponse, n);
        n.headers = F.from(n.headers);
        return n;
    }, (n)=>{
        if (!it(n)) {
            Zr(e);
            if (n && n.response) {
                n.response.data = st.call(e, e.transformResponse, n.response);
                n.response.headers = F.from(n.response.headers);
            }
        }
        return Promise.reject(n);
    });
}
const validators = {};
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((e, t)=>{
    validators[e] = function(n) {
        return typeof n === e || `a${t < 1 ? "n " : " "}${e}`;
    };
});
const Ni = {};
validators.transitional = function(t, r, n) {
    function o(s, i) {
        return `[Axios v${ve}] Transitional option '${s}'${i}${n ? `. ${n}` : ""}`;
    }
    return (s, i, a)=>{
        if (t === false) {
            throw new y(o(i, ` has been removed${r ? ` in ${r}` : ""}`), y.ERR_DEPRECATED);
        }
        if (r && !Ni[i]) {
            Ni[i] = true;
            console.warn(o(i, ` has been deprecated since v${r} and will be removed in the near future`));
        }
        if (t) {
            return t(s, i, a);
        }
        return true;
    };
};
validators.spelling = function(t) {
    return (r, n)=>{
        console.warn(`${n} is likely a misspelling of ${t}`);
        return true;
    };
};
function assertOptions(e, t, r) {
    if (typeof e !== "object") {
        throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
    }
    let n = Object.keys(e);
    let n_length = n.length;
    while(n_length-- > 0){
        let s = n[n_length];
        let i = Object.prototype.hasOwnProperty.call(t, s) ? t[s] : undefined;
        if (i) {
            let a = e[s];
            let l = a === undefined || i(a, s, e);
            if (l !== true) {
                throw new y(`option ${s} must be ${l}`, y.ERR_BAD_OPTION_VALUE);
            }
            continue;
        }
        if (r !== true) {
            throw new y(`Unknown option ${s}`, y.ERR_BAD_OPTION);
        }
    }
}
const dt = {
    assertOptions,
    validators
};
const dt_validators = dt.validators;
class ht {
    constructor(e){
        this.defaults = e || {};
        this.interceptors = {
            request: new yr,
            response: new yr
        };
    }
    async request(e, t) {
        try {
            return await this._request(e, t);
        } catch (error) {
            if (error instanceof Error) {
                let n = {};
                if (Error.captureStackTrace) {
                    Error.captureStackTrace(n);
                } else {
                    n = Error();
                }
                let o = (()=>{
                    if (!n.stack) {
                        return "";
                    }
                    let s = n.stack.indexOf(`
`);
                    if (s === -1) {
                        return "";
                    }
                    return n.stack.slice(s + 1);
                })();
                try {
                    if (!error.stack) {
                        error.stack = o;
                    } else if (o) {
                        let s = o.indexOf(`
`);
                        let i = s === -1 ? -1 : o.indexOf(`
`, s + 1);
                        let a = i === -1 ? "" : o.slice(i + 1);
                        if (!String(error.stack).endsWith(a)) {
                            error.stack += `
` + o;
                        }
                    }
                } catch (s) {}
            }
            throw error;
        }
    }
    _request(e, t) {
        if (typeof e === "string") {
            t = t || {};
            t.url = e;
        } else {
            t = e || {};
        }
        t = ie(this.defaults, t);
        let { transitional, paramsSerializer, headers } = t;
        if (transitional !== undefined) {
            dt.assertOptions(transitional, {
                silentJSONParsing: dt_validators.transitional(dt_validators.boolean),
                forcedJSONParsing: dt_validators.transitional(dt_validators.boolean),
                clarifyTimeoutError: dt_validators.transitional(dt_validators.boolean),
                legacyInterceptorReqResOrdering: dt_validators.transitional(dt_validators.boolean)
            }, false);
        }
        if (paramsSerializer != null) {
            if (u.isFunction(paramsSerializer)) {
                t.paramsSerializer = {
                    serialize: paramsSerializer
                };
            } else {
                dt.assertOptions(paramsSerializer, {
                    encode: dt_validators.function,
                    serialize: dt_validators.function
                }, true);
            }
        }
        if (t.allowAbsoluteUrls !== undefined) ;
        else if (this.defaults.allowAbsoluteUrls !== undefined) {
            t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        } else {
            t.allowAbsoluteUrls = true;
        }
        dt.assertOptions(t, {
            baseUrl: dt_validators.spelling("baseURL"),
            withXsrfToken: dt_validators.spelling("withXSRFToken")
        }, true);
        t.method = (t.method || this.defaults.method || "get").toLowerCase();
        let s = headers && u.merge(headers.common, headers[t.method]);
        if (headers) {
            u.forEach([
                "delete",
                "get",
                "head",
                "post",
                "put",
                "patch",
                "common"
            ], (b)=>{
                delete headers[b];
            });
        }
        t.headers = F.concat(s, headers);
        let i = [];
        let a = true;
        this.interceptors.request.forEach((m)=>{
            if (typeof m.runWhen === "function" && m.runWhen(t) === false) {
                return;
            }
            a = a && m.synchronous;
            let g = t.transitional || transitional_1;
            if (g && g.legacyInterceptorReqResOrdering) {
                i.unshift(m.fulfilled, m.rejected);
            } else {
                i.push(m.fulfilled, m.rejected);
            }
        });
        let l = [];
        this.interceptors.response.forEach((m)=>{
            l.push(m.fulfilled, m.rejected);
        });
        let f;
        let c = 0;
        let p;
        if (!a) {
            let b = [
                Vt.bind(this),
                undefined
            ];
            b.unshift(...i);
            b.push(...l);
            p = b.length;
            f = Promise.resolve(t);
            while(c < p){
                f = f.then(b[c++], b[c++]);
            }
            return f;
        }
        p = i.length;
        let d = t;
        while(c < p){
            let b = i[c++];
            let m = i[c++];
            try {
                d = b(d);
            } catch (error) {
                m.call(this, error);
                break;
            }
        }
        try {
            f = Vt.call(this, d);
        } catch (error) {
            return Promise.reject(error);
        }
        c = 0;
        p = l.length;
        while(c < p){
            f = f.then(l[c++], l[c++]);
        }
        return f;
    }
    getUri(e) {
        e = ie(this.defaults, e);
        let t = xe(e.baseURL, e.url, e.allowAbsoluteUrls);
        return we(t, e.params, e.paramsSerializer);
    }
}
u.forEach([
    "delete",
    "get",
    "head",
    "options"
], function(t) {
    ht.prototype[t] = function(r, n) {
        return this.request(ie(n || {}, {
            method: t,
            url: r,
            data: (n || {}).data
        }));
    };
});
u.forEach([
    "post",
    "put",
    "patch"
], function(t) {
    function r(n) {
        return function(s, i, a) {
            return this.request(ie(a || {}, {
                method: t,
                headers: n ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: s,
                data: i
            }));
        };
    }
    ht.prototype[t] = r();
    ht.prototype[`${t}Form`] = r(true);
});
const mt = ht;
class en {
    constructor(e){
        if (typeof e !== "function") {
            throw TypeError("executor must be a function.");
        }
        let t;
        this.promise = new Promise((resolvePromise)=>{
            t = resolvePromise;
        });
        let r = this;
        this.promise.then((n)=>{
            if (!r._listeners) {
                return;
            }
            let length = r._listeners.length;
            while(length-- > 0){
                r._listeners[length](n);
            }
            r._listeners = null;
        });
        this.promise.then = (n)=>{
            let o;
            let s = new Promise((resolvePromise)=>{
                r.subscribe(resolvePromise);
                o = resolvePromise;
            }).then(n);
            s.cancel = function() {
                r.unsubscribe(o);
            };
            return s;
        };
        e(function(o, s, i) {
            if (r.reason) {
                return;
            }
            r.reason = new Q(o, s, i);
            t(r.reason);
        });
    }
    throwIfRequested() {
        if (this.reason) {
            throw this.reason;
        }
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return;
        }
        if (this._listeners) {
            this._listeners.push(e);
        } else {
            this._listeners = [
                e
            ];
        }
    }
    unsubscribe(e) {
        if (!this._listeners) {
            return;
        }
        let t = this._listeners.indexOf(e);
        if (t !== -1) {
            this._listeners.splice(t, 1);
        }
    }
    toAbortSignal() {
        let e = new AbortController;
        let t = (r)=>{
            e.abort(r);
        };
        this.subscribe(t);
        e.signal.unsubscribe = ()=>this.unsubscribe(t);
        return e.signal;
    }
    static source() {
        let cancel;
        return {
            token: new en(function(n) {
                cancel = n;
            }),
            cancel
        };
    }
}
const Di = en;
function tn(e) {
    return function(r) {
        return e(...r);
    };
}
function rn(e) {
    return u.isObject(e) && e.isAxiosError === true;
}
const nn = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(nn).forEach(([e, t])=>{
    nn[t] = e;
});
const Ui = nn;
function qi(e) {
    let t = new mt(e);
    let r = Ke(mt.prototype.request, t);
    u.extend(r, mt.prototype, t, {
        allOwnKeys: true
    });
    u.extend(r, t, null, {
        allOwnKeys: true
    });
    r.create = function(o) {
        return qi(ie(e, o));
    };
    return r;
}
const I = qi(He);
I.Axios = mt;
I.CanceledError = Q;
I.CancelToken = Di;
I.isCancel = it;
I.VERSION = ve;
I.toFormData = de;
I.AxiosError = y;
I.Cancel = I.CanceledError;
I.all = function(t) {
    return Promise.all(t);
};
I.spread = tn;
I.isAxiosError = rn;
I.mergeConfig = ie;
I.AxiosHeaders = F;
I.formToJSON = (e)=>Lt(u.isHTMLForm(e) ? new FormData(e) : e);
I.getAdapter = $t.getAdapter;
I.HttpStatusCode = Ui;
I.default = I;
const At = I;
const { Axios, AxiosError: T5e, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders: yCr, HttpStatusCode, formToJSON, getAdapter, mergeConfig } = At;
export { bTo, hCr, frn, At, T5e, isCancel as Oa, isAxiosError as dd, yCr };
