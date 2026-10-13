import { DOe } from "/$bunfs/root/chunk-wmhcfcyq.js";
import { Da, Of } from "/$bunfs/root/chunk-6dwnw6av.js";
import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const Ie = C(function(Pe) {
    Object.defineProperty(Pe, "__esModule", {
        value: true
    });
    Pe.OTLPExporterBase = undefined;
    class Ee {
        _delegate;
        constructor(l){
            this._delegate = l;
        }
        export(l, u) {
            this._delegate.export(l, u);
        }
        forceFlush() {
            return this._delegate.forceFlush();
        }
        shutdown() {
            return this._delegate.shutdown();
        }
    }
    Pe.OTLPExporterBase = Ee;
});
const xt = C(function(Ae) {
    Object.defineProperty(Ae, "__esModule", {
        value: true
    });
    Ae.OTLPExporterError = undefined;
    class _e extends Error {
        code;
        name = "OTLPExporterError";
        data;
        constructor(l, u, f){
            super(l);
            this.data = f;
            this.code = u;
        }
    }
    Ae.OTLPExporterError = _e;
});
const yt = C(function(De) {
    Object.defineProperty(De, "__esModule", {
        value: true
    });
    De.getSharedConfigurationDefaults = De.mergeOtlpSharedConfigurationWithDefaults = De.wrapStaticHeadersInFunction = De.validateTimeoutMillis = undefined;
    function ke(l) {
        if (Number.isFinite(l) && l > 0) {
            return l;
        }
        throw Error(`Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '${l}')`);
    }
    De.validateTimeoutMillis = ke;
    function Si(l) {
        if (l == null) {
            return;
        }
        return async ()=>l;
    }
    De.wrapStaticHeadersInFunction = Si;
    function gi(l, u, f) {
        return {
            timeoutMillis: ke(l.timeoutMillis ?? u.timeoutMillis ?? f.timeoutMillis),
            concurrencyLimit: l.concurrencyLimit ?? u.concurrencyLimit ?? f.concurrencyLimit,
            compression: l.compression ?? u.compression ?? f.compression
        };
    }
    De.mergeOtlpSharedConfigurationWithDefaults = gi;
    function Ni() {
        return {
            timeoutMillis: 10000,
            concurrencyLimit: 30,
            compression: "none"
        };
    }
    De.getSharedConfigurationDefaults = Ni;
});
const Ve = C(function(Ce) {
    Object.defineProperty(Ce, "__esModule", {
        value: true
    });
    Ce.CompressionAlgorithm = undefined;
    let Pi;
    ((l)=>{
        l.NONE = "none";
        l.GZIP = "gzip";
    })(Pi = Ce.CompressionAlgorithm || (Ce.CompressionAlgorithm = {}));
});
const Kt = C(function(qe) {
    Object.defineProperty(qe, "__esModule", {
        value: true
    });
    qe.createBoundedQueueExportPromiseHandler = undefined;
    class Be {
        _concurrencyLimit;
        _sendingPromises = [];
        constructor(l){
            this._concurrencyLimit = l;
        }
        pushPromise(l) {
            if (this.hasReachedLimit()) {
                throw Error("Concurrency Limit reached");
            }
            this._sendingPromises.push(l);
            let u = ()=>{
                let f = this._sendingPromises.indexOf(l);
                this._sendingPromises.splice(f, 1);
            };
            l.then(u, u);
        }
        hasReachedLimit() {
            return this._sendingPromises.length >= this._concurrencyLimit;
        }
        async awaitAll() {
            await Promise.all(this._sendingPromises);
        }
    }
    function Ui(l) {
        return new Be(l.concurrencyLimit);
    }
    qe.createBoundedQueueExportPromiseHandler = Ui;
});
const ze = C(function(Ke) {
    Object.defineProperty(Ke, "__esModule", {
        value: true
    });
    Ke.createLoggingPartialSuccessResponseHandler = undefined;
    const Fe = Da();
    function Ii(l) {
        return Object.prototype.hasOwnProperty.call(l, "partialSuccess");
    }
    function _i() {
        return {
            handleResponse (l) {
                if (l == null || !Ii(l) || l.partialSuccess == null || Object.keys(l.partialSuccess).length === 0) {
                    return;
                }
                Fe.diag.warn("Received Partial Success response:", JSON.stringify(l.partialSuccess));
            }
        };
    }
    Ke.createLoggingPartialSuccessResponseHandler = _i;
});
const jt = C(function(We) {
    Object.defineProperty(We, "__esModule", {
        value: true
    });
    We.createOtlpExportDelegate = undefined;
    const V = Of();
    const St = xt();
    const Je = ze();
    const Ge = Da();
    class Ye {
        _transport;
        _serializer;
        _responseHandler;
        _promiseQueue;
        _timeout;
        _diagLogger;
        constructor(l, u, f, d, i){
            this._transport = l;
            this._serializer = u;
            this._responseHandler = f;
            this._promiseQueue = d;
            this._timeout = i;
            this._diagLogger = Ge.diag.createComponentLogger({
                namespace: "OTLPExportDelegate"
            });
        }
        export(l, u) {
            this._diagLogger.debug("items to be sent", l);
            if (this._promiseQueue.hasReachedLimit()) {
                u({
                    code: V.ExportResultCode.FAILED,
                    error: Error("Concurrent export limit reached")
                });
                return;
            }
            let f = this._serializer.serializeRequest(l);
            if (f == null) {
                u({
                    code: V.ExportResultCode.FAILED,
                    error: Error("Nothing to send")
                });
                return;
            }
            this._promiseQueue.pushPromise(this._transport.send(f, this._timeout).then((d)=>{
                if (d.status === "success") {
                    if (d.data != null) {
                        try {
                            this._responseHandler.handleResponse(this._serializer.deserializeResponse(d.data));
                        } catch (error) {
                            this._diagLogger.warn("Export succeeded but could not deserialize response - is the response specification compliant?", error, d.data);
                        }
                    }
                    u({
                        code: V.ExportResultCode.SUCCESS
                    });
                    return;
                } else if (d.status === "failure" && d.error) {
                    u({
                        code: V.ExportResultCode.FAILED,
                        error: d.error
                    });
                    return;
                } else if (d.status === "retryable") {
                    u({
                        code: V.ExportResultCode.FAILED,
                        error: new St.OTLPExporterError("Export failed with retryable status")
                    });
                } else {
                    u({
                        code: V.ExportResultCode.FAILED,
                        error: new St.OTLPExporterError("Export failed with unknown error")
                    });
                }
            }, (d)=>u({
                    code: V.ExportResultCode.FAILED,
                    error: d
                })));
        }
        forceFlush() {
            return this._promiseQueue.awaitAll();
        }
        async shutdown() {
            this._diagLogger.debug("shutdown started");
            await this.forceFlush();
            this._transport.shutdown();
        }
    }
    function Ai(l, u) {
        return new Ye(l.transport, l.serializer, Je.createLoggingPartialSuccessResponseHandler(), l.promiseHandler, u.timeout);
    }
    We.createOtlpExportDelegate = Ai;
});
const er = C(function(Qe) {
    Object.defineProperty(Qe, "__esModule", {
        value: true
    });
    Qe.createOtlpNetworkExportDelegate = undefined;
    const Xe = Kt();
    const Ze = jt();
    function Li(l, u, transport) {
        return Ze.createOtlpExportDelegate({
            transport,
            serializer: u,
            promiseHandler: Xe.createBoundedQueueExportPromiseHandler(l)
        }, {
            timeout: l.timeoutMillis
        });
    }
    Qe.createOtlpNetworkExportDelegate = Li;
});
const uK = C(function(rt) {
    Object.defineProperty(rt, "__esModule", {
        value: true
    });
    rt.createOtlpNetworkExportDelegate = rt.CompressionAlgorithm = rt.getSharedConfigurationDefaults = rt.mergeOtlpSharedConfigurationWithDefaults = rt.OTLPExporterError = rt.OTLPExporterBase = undefined;
    const Ri = Ie();
    Object.defineProperty(rt, "OTLPExporterBase", {
        enumerable: true,
        get: function() {
            return Ri.OTLPExporterBase;
        }
    });
    const ki = xt();
    Object.defineProperty(rt, "OTLPExporterError", {
        enumerable: true,
        get: function() {
            return ki.OTLPExporterError;
        }
    });
    const rr = yt();
    Object.defineProperty(rt, "mergeOtlpSharedConfigurationWithDefaults", {
        enumerable: true,
        get: function() {
            return rr.mergeOtlpSharedConfigurationWithDefaults;
        }
    });
    Object.defineProperty(rt, "getSharedConfigurationDefaults", {
        enumerable: true,
        get: function() {
            return rr.getSharedConfigurationDefaults;
        }
    });
    const Di = Ve();
    Object.defineProperty(rt, "CompressionAlgorithm", {
        enumerable: true,
        get: function() {
            return Di.CompressionAlgorithm;
        }
    });
    const Mi = er();
    Object.defineProperty(rt, "createOtlpNetworkExportDelegate", {
        enumerable: true,
        get: function() {
            return Mi.createOtlpNetworkExportDelegate;
        }
    });
});
const sWr = C(function(cc, nr) {
    nr.exports = Vi;
    function Vi(l, u) {
        const f = Array(arguments.length - 1);
        let d = 0;
        let i = 2;
        let o = true;
        while(i < arguments.length){
            f[d++] = arguments[i++];
        }
        return new Promise((resolve, reject)=>{
            f[d] = function(c) {
                if (o) {
                    o = false;
                    if (c) {
                        reject(c);
                    } else {
                        const s = Array(arguments.length - 1);
                        let m = 0;
                        while(m < s.length){
                            s[m++] = arguments[m];
                        }
                        resolve(...s);
                    }
                }
            };
            try {
                l.apply(u || null, f);
            } catch (error) {
                if (o) {
                    o = false;
                    reject(error);
                }
            }
        });
    }
});
const lr = C(function(ur) {
    const gt = ur;
    gt.length = function(u) {
        let u_length = u.length;
        if (!u_length) {
            return 0;
        }
        let d = 0;
        while(--u_length % 4 > 1 && u.charAt(u_length) === "="){
            ++d;
        }
        return Math.ceil(u.length * 3) / 4 - d;
    };
    const pt = Array(64);
    const ir = Array(123);
    for(K = 0; K < 64;){
        ir[pt[K] = K < 26 ? K + 65 : K < 52 ? K + 71 : K < 62 ? K - 4 : K - 59 | 43] = K++;
    }
    var K;
    gt.encode = function(u, f, d) {
        let i = null;
        const o = [];
        let e = 0;
        let t = 0;
        let r;
        while(f < d){
            const n = u[f++];
            switch(t){
                case 0:
                    o[e++] = pt[n >> 2];
                    r = (n & 3) << 4;
                    t = 1;
                    break;
                case 1:
                    o[e++] = pt[r | n >> 4];
                    r = (n & 15) << 2;
                    t = 2;
                    break;
                case 2:
                    o[e++] = pt[r | n >> 6];
                    o[e++] = pt[n & 63];
                    t = 0;
                    break;
            }
            if (e > 8191) {
                (i || (i = [])).push(String.fromCharCode(...o));
                e = 0;
            }
        }
        if (t) {
            o[e++] = pt[r];
            o[e++] = 61;
            if (t === 1) {
                o[e++] = 61;
            }
        }
        if (i) {
            if (e) {
                i.push(String.fromCharCode(...o.slice(0, e)));
            }
            return i.join("");
        }
        return String.fromCharCode(...o.slice(0, e));
    };
    const or = "invalid encoding";
    gt.decode = function(u, f, d) {
        const i = d;
        let o = 0;
        let e;
        for(let t = 0; t < u.length;){
            let r = u.charCodeAt(t++);
            if (r === 61 && o > 1) {
                break;
            }
            if ((r = ir[r]) === undefined) {
                throw Error(or);
            }
            switch(o){
                case 0:
                    e = r;
                    o = 1;
                    break;
                case 1:
                    f[d++] = e << 2 | (r & 48) >> 4;
                    e = r;
                    o = 2;
                    break;
                case 2:
                    f[d++] = (e & 15) << 4 | (r & 60) >> 2;
                    e = r;
                    o = 3;
                    break;
                case 3:
                    f[d++] = (e & 3) << 6 | r;
                    o = 0;
                    break;
            }
        }
        if (o === 1) {
            throw Error(or);
        }
        return d - i;
    };
    gt.test = function(u) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(u);
    };
});
const ar = C(function(fc, cr) {
    class Nt {
        constructor(){
            this._listeners = {};
        }
        on(u, fn, d) {
            (this._listeners[u] || (this._listeners[u] = [])).push({
                fn,
                ctx: d || this
            });
            return this;
        }
        off(u, f) {
            if (u === undefined) {
                this._listeners = {};
            } else if (f === undefined) {
                this._listeners[u] = [];
            } else {
                const d = this._listeners[u];
                for(let i = 0; i < d.length;){
                    if (d[i].fn === f) {
                        d.splice(i, 1);
                    } else {
                        ++i;
                    }
                }
            }
            return this;
        }
        emit(u) {
            const f = this._listeners[u];
            if (f) {
                const d = [];
                let i = 1;
                while(i < arguments.length){
                    d.push(arguments[i++]);
                }
                for(i = 0; i < f.length;){
                    f[i].fn.apply(f[i++].ctx, d);
                }
            }
            return this;
        }
    }
    cr.exports = Nt;
});
const mr = C(function(pc, hr) {
    hr.exports = fr(fr);
    function fr(l) {
        if (typeof Float32Array !== "undefined") {
            (()=>{
                const u = new Float32Array([
                    -0
                ]);
                const f = new Uint8Array(u.buffer);
                const d = f[3] === 128;
                function i(r, n, c) {
                    u[0] = r;
                    n[c] = f[0];
                    n[c + 1] = f[1];
                    n[c + 2] = f[2];
                    n[c + 3] = f[3];
                }
                function o(r, n, c) {
                    u[0] = r;
                    n[c] = f[3];
                    n[c + 1] = f[2];
                    n[c + 2] = f[1];
                    n[c + 3] = f[0];
                }
                l.writeFloatLE = d ? i : o;
                l.writeFloatBE = d ? o : i;
                function e(r, n) {
                    f[0] = r[n];
                    f[1] = r[n + 1];
                    f[2] = r[n + 2];
                    f[3] = r[n + 3];
                    return u[0];
                }
                function t(r, n) {
                    f[3] = r[n];
                    f[2] = r[n + 1];
                    f[1] = r[n + 2];
                    f[0] = r[n + 3];
                    return u[0];
                }
                l.readFloatLE = d ? e : t;
                l.readFloatBE = d ? t : e;
            })();
        } else {
            (()=>{
                function u(d, i, o, e) {
                    const t = i < 0 ? 1 : 0;
                    if (t) {
                        i = -i;
                    }
                    if (i === 0) {
                        d(1 / i > 0 ? 0 : 2147483648, o, e);
                    } else if (isNaN(i)) {
                        d(2143289344, o, e);
                    } else if (i > 340282346638528860000000000000000000000) {
                        d((t << 31 | 2139095040) >>> 0, o, e);
                    } else if (i < 0.000000000000000000000000000000000000011754943508222875) {
                        d((t << 31 | Math.round(i / 0.000000000000000000000000000000000000000000001401298464324817)) >>> 0, o, e);
                    } else {
                        const r = Math.floor(Math.log(i) / Math.LN2);
                        const n = Math.round(i * 2 ** -r * 8388608) & 8388607;
                        d((t << 31 | r + 127 << 23 | n) >>> 0, o, e);
                    }
                }
                l.writeFloatLE = u.bind(null, pr);
                l.writeFloatBE = u.bind(null, sr);
                function f(d, i, o) {
                    const e = d(i, o);
                    const t = (e >> 31) * 2 + 1;
                    const r = e >>> 23 & 255;
                    const n = e & 8388607;
                    switch(r){
                        case 255:
                            if (n) {
                                return NaN;
                            }
                            return t * Infinity;
                        case 0:
                            return t * 0.000000000000000000000000000000000000000000001401298464324817 * n;
                        default:
                            return t * 2 ** (r - 150) * (n + 8388608);
                    }
                }
                l.readFloatLE = f.bind(null, dr);
                l.readFloatBE = f.bind(null, yr);
            })();
        }
        if (typeof Float64Array !== "undefined") {
            (()=>{
                const u = new Float64Array([
                    -0
                ]);
                const f = new Uint8Array(u.buffer);
                const d = f[7] === 128;
                function i(r, n, c) {
                    u[0] = r;
                    n[c] = f[0];
                    n[c + 1] = f[1];
                    n[c + 2] = f[2];
                    n[c + 3] = f[3];
                    n[c + 4] = f[4];
                    n[c + 5] = f[5];
                    n[c + 6] = f[6];
                    n[c + 7] = f[7];
                }
                function o(r, n, c) {
                    u[0] = r;
                    n[c] = f[7];
                    n[c + 1] = f[6];
                    n[c + 2] = f[5];
                    n[c + 3] = f[4];
                    n[c + 4] = f[3];
                    n[c + 5] = f[2];
                    n[c + 6] = f[1];
                    n[c + 7] = f[0];
                }
                l.writeDoubleLE = d ? i : o;
                l.writeDoubleBE = d ? o : i;
                function e(r, n) {
                    f[0] = r[n];
                    f[1] = r[n + 1];
                    f[2] = r[n + 2];
                    f[3] = r[n + 3];
                    f[4] = r[n + 4];
                    f[5] = r[n + 5];
                    f[6] = r[n + 6];
                    f[7] = r[n + 7];
                    return u[0];
                }
                function t(r, n) {
                    f[7] = r[n];
                    f[6] = r[n + 1];
                    f[5] = r[n + 2];
                    f[4] = r[n + 3];
                    f[3] = r[n + 4];
                    f[2] = r[n + 5];
                    f[1] = r[n + 6];
                    f[0] = r[n + 7];
                    return u[0];
                }
                l.readDoubleLE = d ? e : t;
                l.readDoubleBE = d ? t : e;
            })();
        } else {
            (()=>{
                function u(d, i, o, e, t, r) {
                    const n = e < 0 ? 1 : 0;
                    if (n) {
                        e = -e;
                    }
                    if (e === 0) {
                        d(0, t, r + i);
                        d(1 / e > 0 ? 0 : 2147483648, t, r + o);
                    } else if (isNaN(e)) {
                        d(0, t, r + i);
                        d(2146959360, t, r + o);
                    } else if (e > 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                        d(0, t, r + i);
                        d((n << 31 | 2146435072) >>> 0, t, r + o);
                    } else {
                        let c;
                        if (e < 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014) {
                            c = e / 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005;
                            d(c >>> 0, t, r + i);
                            d((n << 31 | c / 4294967296) >>> 0, t, r + o);
                        } else {
                            let s = Math.floor(Math.log(e) / Math.LN2);
                            if (s === 1024) {
                                s = 1023;
                            }
                            c = e * 2 ** -s;
                            d(c * 4503599627370496 >>> 0, t, r + i);
                            d((n << 31 | s + 1023 << 20 | c * 1048576 & 1048575) >>> 0, t, r + o);
                        }
                    }
                }
                l.writeDoubleLE = u.bind(null, pr, 0, 4);
                l.writeDoubleBE = u.bind(null, sr, 4, 0);
                function f(d, i, o, e, t) {
                    const r = d(e, t + i);
                    const n = d(e, t + o);
                    const c = (n >> 31) * 2 + 1;
                    const s = n >>> 20 & 2047;
                    const m = 4294967296 * (n & 1048575) + r;
                    switch(s){
                        case 2047:
                            if (m) {
                                return NaN;
                            }
                            return c * Infinity;
                        case 0:
                            return c * 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005 * m;
                        default:
                            return c * 2 ** (s - 1075) * (m + 4503599627370496);
                    }
                }
                l.readDoubleLE = f.bind(null, dr, 0, 4);
                l.readDoubleBE = f.bind(null, yr, 4, 0);
            })();
        }
        return l;
    }
    function pr(l, u, f) {
        u[f] = l & 255;
        u[f + 1] = l >>> 8 & 255;
        u[f + 2] = l >>> 16 & 255;
        u[f + 3] = l >>> 24;
    }
    function sr(l, u, f) {
        u[f] = l >>> 24;
        u[f + 1] = l >>> 16 & 255;
        u[f + 2] = l >>> 8 & 255;
        u[f + 3] = l & 255;
    }
    function dr(l, u) {
        return (l[u] | l[u + 1] << 8 | l[u + 2] << 16 | l[u + 3] << 24) >>> 0;
    }
    function yr(l, u) {
        return (l[u] << 24 | l[u + 1] << 16 | l[u + 2] << 8 | l[u + 3]) >>> 0;
    }
});
const OXn = C(function(ht, zt) {
    ((l, u)=>{
        function f(d) {
            return d.default || d;
        }
        if (typeof define === "function" && define.amd) {
            define([], function() {
                const d = {};
                u(d);
                return f(d);
            });
        } else if (typeof ht === "object") {
            u(ht);
            if (typeof zt === "object") {
                zt.exports = f(ht);
            }
        } else {
            (()=>{
                const d = {};
                u(d);
                l.Long = f(d);
            })();
        }
    })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : ht, function(l) {
        Object.defineProperty(l, "__esModule", {
            value: true
        });
        l.default = undefined;
        let u = null;
        try {
            u = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
                0,
                97,
                115,
                109,
                1,
                0,
                0,
                0,
                1,
                13,
                2,
                96,
                0,
                1,
                127,
                96,
                4,
                127,
                127,
                127,
                127,
                1,
                127,
                3,
                7,
                6,
                0,
                1,
                1,
                1,
                1,
                1,
                6,
                6,
                1,
                127,
                1,
                65,
                0,
                11,
                7,
                50,
                6,
                3,
                109,
                117,
                108,
                0,
                1,
                5,
                100,
                105,
                118,
                95,
                115,
                0,
                2,
                5,
                100,
                105,
                118,
                95,
                117,
                0,
                3,
                5,
                114,
                101,
                109,
                95,
                115,
                0,
                4,
                5,
                114,
                101,
                109,
                95,
                117,
                0,
                5,
                8,
                103,
                101,
                116,
                95,
                104,
                105,
                103,
                104,
                0,
                0,
                10,
                191,
                1,
                6,
                4,
                0,
                35,
                0,
                11,
                36,
                1,
                1,
                126,
                32,
                0,
                173,
                32,
                1,
                173,
                66,
                32,
                134,
                132,
                32,
                2,
                173,
                32,
                3,
                173,
                66,
                32,
                134,
                132,
                126,
                34,
                4,
                66,
                32,
                135,
                167,
                36,
                0,
                32,
                4,
                167,
                11,
                36,
                1,
                1,
                126,
                32,
                0,
                173,
                32,
                1,
                173,
                66,
                32,
                134,
                132,
                32,
                2,
                173,
                32,
                3,
                173,
                66,
                32,
                134,
                132,
                127,
                34,
                4,
                66,
                32,
                135,
                167,
                36,
                0,
                32,
                4,
                167,
                11,
                36,
                1,
                1,
                126,
                32,
                0,
                173,
                32,
                1,
                173,
                66,
                32,
                134,
                132,
                32,
                2,
                173,
                32,
                3,
                173,
                66,
                32,
                134,
                132,
                128,
                34,
                4,
                66,
                32,
                135,
                167,
                36,
                0,
                32,
                4,
                167,
                11,
                36,
                1,
                1,
                126,
                32,
                0,
                173,
                32,
                1,
                173,
                66,
                32,
                134,
                132,
                32,
                2,
                173,
                32,
                3,
                173,
                66,
                32,
                134,
                132,
                129,
                34,
                4,
                66,
                32,
                135,
                167,
                36,
                0,
                32,
                4,
                167,
                11,
                36,
                1,
                1,
                126,
                32,
                0,
                173,
                32,
                1,
                173,
                66,
                32,
                134,
                132,
                32,
                2,
                173,
                32,
                3,
                173,
                66,
                32,
                134,
                132,
                130,
                34,
                4,
                66,
                32,
                135,
                167,
                36,
                0,
                32,
                4,
                167,
                11
            ])), {}).exports;
        } catch  {}
        class f {
            constructor(v, y, O){
                this.low = v | 0;
                this.high = y | 0;
                this.unsigned = !!O;
            }
            static fromBytes(y, O, N) {
                if (N) {
                    return f.fromBytesLE(y, O);
                }
                return f.fromBytesBE(y, O);
            }
            static fromBytesLE(y, O) {
                return new f(y[0] | y[1] << 8 | y[2] << 16 | y[3] << 24, y[4] | y[5] << 8 | y[6] << 16 | y[7] << 24, O);
            }
            static fromBytesBE(y, O) {
                return new f(y[4] << 24 | y[5] << 16 | y[6] << 8 | y[7], y[0] << 24 | y[1] << 16 | y[2] << 8 | y[3], O);
            }
        }
        f.prototype.__isLong__;
        Object.defineProperty(f.prototype, "__isLong__", {
            value: true
        });
        function d(v) {
            return (v && v.__isLong__) === true;
        }
        function i(v) {
            const y = Math.clz32(v & -v);
            if (v) {
                return 31 - y;
            }
            return y;
        }
        f.isLong = d;
        const o = {};
        const e = {};
        function t(v, y) {
            let O;
            let N;
            let E;
            if (y) {
                v >>>= 0;
                if (E = v >= 0 && v < 256) {
                    N = e[v];
                    if (N) {
                        return N;
                    }
                }
                O = n(v, 0, true);
                if (E) {
                    e[v] = O;
                }
                return O;
            } else {
                v |= 0;
                if (E = v >= -128 && v < 128) {
                    N = o[v];
                    if (N) {
                        return N;
                    }
                }
                O = n(v, v < 0 ? -1 : 0, false);
                if (E) {
                    o[v] = O;
                }
                return O;
            }
        }
        f.fromInt = t;
        function r(v, y) {
            if (isNaN(v)) {
                if (y) {
                    return tt;
                }
                return G;
            }
            if (y) {
                if (v < 0) {
                    return tt;
                }
                if (v >= xe) {
                    return we;
                }
            } else {
                if (v <= -Se) {
                    return D;
                }
                if (v + 1 >= Se) {
                    return Te;
                }
            }
            if (v < 0) {
                return r(-v, y).neg();
            }
            return n(v % et | 0, v / et | 0, y);
        }
        f.fromNumber = r;
        function n(v, y, O) {
            return new f(v, y, O);
        }
        f.fromBits = n;
        function s(v, y, O) {
            if (v.length === 0) {
                throw Error("empty string");
            }
            if (typeof y === "number") {
                O = y;
                y = false;
            } else {
                y = !!y;
            }
            if (v === "NaN" || v === "Infinity" || v === "+Infinity" || v === "-Infinity") {
                if (y) {
                    return tt;
                }
                return G;
            }
            O = O || 10;
            if (O < 2 || O > 36) {
                throw RangeError("radix");
            }
            let N;
            if ((N = v.indexOf("-")) > 0) {
                throw Error("interior hyphen");
            } else if (N === 0) {
                return s(v.substring(1), y, O).neg();
            }
            const E = r(Math.pow(O, 8));
            let w = G;
            for(let A = 0; A < v.length; A += 8){
                const M = Math.min(8, v.length - A);
                const H = parseInt(v.substring(A, A + M), O);
                if (M < 8) {
                    const k = r(Math.pow(O, M));
                    w = w.mul(k).add(r(H));
                } else {
                    w = w.mul(E);
                    w = w.add(r(H));
                }
            }
            w.unsigned = y;
            return w;
        }
        f.fromString = s;
        function m(v, y) {
            if (typeof v === "number") {
                return r(v, y);
            }
            if (typeof v === "string") {
                return s(v, y);
            }
            return n(v.low, v.high, typeof y === "boolean" ? y : v.unsigned);
        }
        f.fromValue = m;
        const U = 65536;
        const Q = 16777216;
        var et = U * U;
        var xe = et * et;
        var Se = xe / 2;
        const ge = t(Q);
        var G = t(0);
        f.ZERO = G;
        var tt = t(0, true);
        f.UZERO = tt;
        const ft = t(1);
        f.ONE = ft;
        const Ne = t(1, true);
        f.UONE = Ne;
        const Ht = t(-1);
        f.NEG_ONE = Ht;
        var Te = n(-1, 2147483647, false);
        f.MAX_VALUE = Te;
        var we = n(-1, -1, true);
        f.MAX_UNSIGNED_VALUE = we;
        var D = n(0, -2147483648, false);
        f.MIN_VALUE = D;
        const f_prototype = f.prototype;
        f_prototype.toInt = function() {
            if (this.unsigned) {
                return this.low >>> 0;
            }
            return this.low;
        };
        f_prototype.toNumber = function() {
            if (this.unsigned) {
                return (this.high >>> 0) * et + (this.low >>> 0);
            }
            return this.high * et + (this.low >>> 0);
        };
        f_prototype.toString = function(y) {
            y = y || 10;
            if (y < 2 || y > 36) {
                throw RangeError("radix");
            }
            if (this.isZero()) {
                return "0";
            }
            if (this.isNegative()) {
                if (this.eq(D)) {
                    const O = r(y);
                    const N = this.div(O);
                    const E = N.mul(O).sub(this);
                    return N.toString(y) + E.toInt().toString(y);
                } else {
                    return `-${this.neg().toString(y)}`;
                }
            }
            const w = r(Math.pow(y, 6), this.unsigned);
            let A = this;
            let M = "";
            while(true){
                const H = A.div(w);
                const k = A.sub(H.mul(w)).toInt() >>> 0;
                let I = k.toString(y);
                A = H;
                if (A.isZero()) {
                    return I + M;
                } else {
                    while(I.length < 6){
                        I = `0${I}`;
                    }
                    M = `${I}${M}`;
                }
            }
        };
        f_prototype.getHighBits = function() {
            return this.high;
        };
        f_prototype.getHighBitsUnsigned = function() {
            return this.high >>> 0;
        };
        f_prototype.getLowBits = function() {
            return this.low;
        };
        f_prototype.getLowBitsUnsigned = function() {
            return this.low >>> 0;
        };
        f_prototype.getNumBitsAbs = function() {
            if (this.isNegative()) {
                if (this.eq(D)) {
                    return 64;
                }
                return this.neg().getNumBitsAbs();
            }
            const y = this.high != 0 ? this.high : this.low;
            for(var O = 31; O > 0; O--){
                if ((y & 1 << O) != 0) {
                    break;
                }
            }
            if (this.high != 0) {
                return O + 33;
            }
            return O + 1;
        };
        f_prototype.isSafeInteger = function() {
            const y = this.high >> 21;
            if (!y) {
                return true;
            }
            if (this.unsigned) {
                return false;
            }
            return y === -1 && !(this.low === 0 && this.high === -2097152);
        };
        f_prototype.isZero = function() {
            return this.high === 0 && this.low === 0;
        };
        f_prototype.eqz = f_prototype.isZero;
        f_prototype.isNegative = function() {
            return !this.unsigned && this.high < 0;
        };
        f_prototype.isPositive = function() {
            return this.unsigned || this.high >= 0;
        };
        f_prototype.isOdd = function() {
            return (this.low & 1) === 1;
        };
        f_prototype.isEven = function() {
            return (this.low & 1) === 0;
        };
        f_prototype.equals = function(y) {
            if (!d(y)) {
                y = m(y);
            }
            if (this.unsigned !== y.unsigned && this.high >>> 31 === 1 && y.high >>> 31 === 1) {
                return false;
            }
            return this.high === y.high && this.low === y.low;
        };
        f_prototype.eq = f_prototype.equals;
        f_prototype.notEquals = function(y) {
            return !this.eq(y);
        };
        f_prototype.neq = f_prototype.notEquals;
        f_prototype.ne = f_prototype.notEquals;
        f_prototype.lessThan = function(y) {
            return this.comp(y) < 0;
        };
        f_prototype.lt = f_prototype.lessThan;
        f_prototype.lessThanOrEqual = function(y) {
            return this.comp(y) <= 0;
        };
        f_prototype.lte = f_prototype.lessThanOrEqual;
        f_prototype.le = f_prototype.lessThanOrEqual;
        f_prototype.greaterThan = function(y) {
            return this.comp(y) > 0;
        };
        f_prototype.gt = f_prototype.greaterThan;
        f_prototype.greaterThanOrEqual = function(y) {
            return this.comp(y) >= 0;
        };
        f_prototype.gte = f_prototype.greaterThanOrEqual;
        f_prototype.ge = f_prototype.greaterThanOrEqual;
        f_prototype.compare = function(y) {
            if (!d(y)) {
                y = m(y);
            }
            if (this.eq(y)) {
                return 0;
            }
            const O = this.isNegative();
            const N = y.isNegative();
            if (O && !N) {
                return -1;
            }
            if (!O && N) {
                return 1;
            }
            if (!this.unsigned) {
                if (this.sub(y).isNegative()) {
                    return -1;
                }
                return 1;
            }
            if (y.high >>> 0 > this.high >>> 0 || y.high === this.high && y.low >>> 0 > this.low >>> 0) {
                return -1;
            }
            return 1;
        };
        f_prototype.comp = f_prototype.compare;
        f_prototype.negate = function() {
            if (!this.unsigned && this.eq(D)) {
                return D;
            }
            return this.not().add(ft);
        };
        f_prototype.neg = f_prototype.negate;
        f_prototype.add = function(y) {
            if (!d(y)) {
                y = m(y);
            }
            const O = this.high >>> 16;
            const N = this.high & 65535;
            const E = this.low >>> 16;
            const w = this.low & 65535;
            const A = y.high >>> 16;
            const M = y.high & 65535;
            const H = y.low >>> 16;
            const k = y.low & 65535;
            let I = 0;
            let F = 0;
            let L = 0;
            let q = 0;
            q += w + k;
            L += q >>> 16;
            q &= 65535;
            L += E + H;
            F += L >>> 16;
            L &= 65535;
            F += N + M;
            I += F >>> 16;
            F &= 65535;
            I += O + A;
            I &= 65535;
            return n(L << 16 | q, I << 16 | F, this.unsigned);
        };
        f_prototype.subtract = function(y) {
            if (!d(y)) {
                y = m(y);
            }
            return this.add(y.neg());
        };
        f_prototype.sub = f_prototype.subtract;
        f_prototype.multiply = function(y) {
            if (this.isZero()) {
                return this;
            }
            if (!d(y)) {
                y = m(y);
            }
            if (u) {
                const O = u.mul(this.low, this.high, y.low, y.high);
                return n(O, u.get_high(), this.unsigned);
            }
            if (y.isZero()) {
                if (this.unsigned) {
                    return tt;
                }
                return G;
            }
            if (this.eq(D)) {
                if (y.isOdd()) {
                    return D;
                }
                return G;
            }
            if (y.eq(D)) {
                if (this.isOdd()) {
                    return D;
                }
                return G;
            }
            if (this.isNegative()) {
                if (y.isNegative()) {
                    return this.neg().mul(y.neg());
                } else {
                    return this.neg().mul(y).neg();
                }
            } else if (y.isNegative()) {
                return this.mul(y.neg()).neg();
            }
            if (this.lt(ge) && y.lt(ge)) {
                return r(this.toNumber() * y.toNumber(), this.unsigned);
            }
            const N = this.high >>> 16;
            const E = this.high & 65535;
            const w = this.low >>> 16;
            const A = this.low & 65535;
            const M = y.high >>> 16;
            const H = y.high & 65535;
            const k = y.low >>> 16;
            const I = y.low & 65535;
            let F = 0;
            let L = 0;
            let q = 0;
            let Ot = 0;
            Ot += A * I;
            q += Ot >>> 16;
            Ot &= 65535;
            q += w * I;
            L += q >>> 16;
            q &= 65535;
            q += A * k;
            L += q >>> 16;
            q &= 65535;
            L += E * I;
            F += L >>> 16;
            L &= 65535;
            L += w * k;
            F += L >>> 16;
            L &= 65535;
            L += A * H;
            F += L >>> 16;
            L &= 65535;
            F += N * I + E * k + w * H + A * M;
            F &= 65535;
            return n(q << 16 | Ot, F << 16 | L, this.unsigned);
        };
        f_prototype.mul = f_prototype.multiply;
        f_prototype.divide = function(y) {
            if (!d(y)) {
                y = m(y);
            }
            if (y.isZero()) {
                throw Error("division by zero");
            }
            if (u) {
                if (!this.unsigned && this.high === -2147483648 && y.low === -1 && y.high === -1) {
                    return this;
                }
                const O = (this.unsigned ? u.div_u : u.div_s)(this.low, this.high, y.low, y.high);
                return n(O, u.get_high(), this.unsigned);
            }
            if (this.isZero()) {
                if (this.unsigned) {
                    return tt;
                }
                return G;
            }
            let N;
            let E;
            let w;
            if (!this.unsigned) {
                if (this.eq(D)) {
                    if (y.eq(ft) || y.eq(Ht)) {
                        return D;
                    } else if (y.eq(D)) {
                        return ft;
                    } else {
                        const A = this.shr(1);
                        N = A.div(y).shl(1);
                        if (N.eq(G)) {
                            if (y.isNegative()) {
                                return ft;
                            }
                            return Ht;
                        } else {
                            E = this.sub(y.mul(N));
                            w = N.add(E.div(y));
                            return w;
                        }
                    }
                } else if (y.eq(D)) {
                    if (this.unsigned) {
                        return tt;
                    }
                    return G;
                }
                if (this.isNegative()) {
                    if (y.isNegative()) {
                        return this.neg().div(y.neg());
                    }
                    return this.neg().div(y).neg();
                } else if (y.isNegative()) {
                    return this.div(y.neg()).neg();
                }
                w = G;
            } else {
                if (!y.unsigned) {
                    y = y.toUnsigned();
                }
                if (y.gt(this)) {
                    return tt;
                }
                if (y.gt(this.shru(1))) {
                    return Ne;
                }
                w = tt;
            }
            E = this;
            while(E.gte(y)){
                N = Math.max(1, Math.floor(E.toNumber() / y.toNumber()));
                const M = Math.ceil(Math.log(N) / Math.LN2);
                const H = M <= 48 ? 1 : Math.pow(2, M - 48);
                let k = r(N);
                let I = k.mul(y);
                while(I.isNegative() || I.gt(E)){
                    N -= H;
                    k = r(N, this.unsigned);
                    I = k.mul(y);
                }
                if (k.isZero()) {
                    k = ft;
                }
                w = w.add(k);
                E = E.sub(I);
            }
            return w;
        };
        f_prototype.div = f_prototype.divide;
        f_prototype.modulo = function(y) {
            if (!d(y)) {
                y = m(y);
            }
            if (u) {
                const O = (this.unsigned ? u.rem_u : u.rem_s)(this.low, this.high, y.low, y.high);
                return n(O, u.get_high(), this.unsigned);
            }
            return this.sub(this.div(y).mul(y));
        };
        f_prototype.mod = f_prototype.modulo;
        f_prototype.rem = f_prototype.modulo;
        f_prototype.not = function() {
            return n(~this.low, ~this.high, this.unsigned);
        };
        f_prototype.countLeadingZeros = function() {
            if (this.high) {
                return Math.clz32(this.high);
            }
            return Math.clz32(this.low) + 32;
        };
        f_prototype.clz = f_prototype.countLeadingZeros;
        f_prototype.countTrailingZeros = function() {
            if (this.low) {
                return i(this.low);
            }
            return i(this.high) + 32;
        };
        f_prototype.ctz = f_prototype.countTrailingZeros;
        f_prototype.and = function(y) {
            if (!d(y)) {
                y = m(y);
            }
            return n(this.low & y.low, this.high & y.high, this.unsigned);
        };
        f_prototype.or = function(y) {
            if (!d(y)) {
                y = m(y);
            }
            return n(this.low | y.low, this.high | y.high, this.unsigned);
        };
        f_prototype.xor = function(y) {
            if (!d(y)) {
                y = m(y);
            }
            return n(this.low ^ y.low, this.high ^ y.high, this.unsigned);
        };
        f_prototype.shiftLeft = function(y) {
            if (d(y)) {
                y = y.toInt();
            }
            if ((y &= 63) === 0) {
                return this;
            } else if (y < 32) {
                return n(this.low << y, this.high << y | this.low >>> 32 - y, this.unsigned);
            } else {
                return n(0, this.low << y - 32, this.unsigned);
            }
        };
        f_prototype.shl = f_prototype.shiftLeft;
        f_prototype.shiftRight = function(y) {
            if (d(y)) {
                y = y.toInt();
            }
            if ((y &= 63) === 0) {
                return this;
            } else if (y < 32) {
                return n(this.low >>> y | this.high << 32 - y, this.high >> y, this.unsigned);
            } else {
                return n(this.high >> y - 32, this.high >= 0 ? 0 : -1, this.unsigned);
            }
        };
        f_prototype.shr = f_prototype.shiftRight;
        f_prototype.shiftRightUnsigned = function(y) {
            if (d(y)) {
                y = y.toInt();
            }
            if ((y &= 63) === 0) {
                return this;
            }
            if (y < 32) {
                return n(this.low >>> y | this.high << 32 - y, this.high >>> y, this.unsigned);
            }
            if (y === 32) {
                return n(this.high, 0, this.unsigned);
            }
            return n(this.high >>> y - 32, 0, this.unsigned);
        };
        f_prototype.shru = f_prototype.shiftRightUnsigned;
        f_prototype.shr_u = f_prototype.shiftRightUnsigned;
        f_prototype.rotateLeft = function(y) {
            let O;
            if (d(y)) {
                y = y.toInt();
            }
            if ((y &= 63) === 0) {
                return this;
            }
            if (y === 32) {
                return n(this.high, this.low, this.unsigned);
            }
            if (y < 32) {
                O = 32 - y;
                return n(this.low << y | this.high >>> O, this.high << y | this.low >>> O, this.unsigned);
            }
            y -= 32;
            O = 32 - y;
            return n(this.high << y | this.low >>> O, this.low << y | this.high >>> O, this.unsigned);
        };
        f_prototype.rotl = f_prototype.rotateLeft;
        f_prototype.rotateRight = function(y) {
            let O;
            if (d(y)) {
                y = y.toInt();
            }
            if ((y &= 63) === 0) {
                return this;
            }
            if (y === 32) {
                return n(this.high, this.low, this.unsigned);
            }
            if (y < 32) {
                O = 32 - y;
                return n(this.high << O | this.low >>> y, this.low << O | this.high >>> y, this.unsigned);
            }
            y -= 32;
            O = 32 - y;
            return n(this.low << O | this.high >>> y, this.high << O | this.low >>> y, this.unsigned);
        };
        f_prototype.rotr = f_prototype.rotateRight;
        f_prototype.toSigned = function() {
            if (!this.unsigned) {
                return this;
            }
            return n(this.low, this.high, false);
        };
        f_prototype.toUnsigned = function() {
            if (this.unsigned) {
                return this;
            }
            return n(this.low, this.high, true);
        };
        f_prototype.toBytes = function(y) {
            if (y) {
                return this.toBytesLE();
            }
            return this.toBytesBE();
        };
        f_prototype.toBytesLE = function() {
            const high = this.high;
            const low = this.low;
            return [
                low & 255,
                low >>> 8 & 255,
                low >>> 16 & 255,
                low >>> 24,
                high & 255,
                high >>> 8 & 255,
                high >>> 16 & 255,
                high >>> 24
            ];
        };
        f_prototype.toBytesBE = function() {
            const high = this.high;
            const low = this.low;
            return [
                high >>> 24,
                high >>> 16 & 255,
                high >>> 8 & 255,
                high & 255,
                low >>> 24,
                low >>> 16 & 255,
                low >>> 8 & 255,
                low & 255
            ];
        };
        if (typeof BigInt === "function") {
            f.fromBigInt = function(y, O) {
                const N = Number(BigInt.asIntN(32, y));
                const E = Number(BigInt.asIntN(32, y >> BigInt(32)));
                return n(N, E, O);
            };
            f.fromValue = function(y, O) {
                if (typeof y === "bigint") {
                    return f.fromBigInt(y, O);
                }
                return m(y, O);
            };
            f_prototype.toBigInt = function() {
                const y = BigInt(this.low >>> 0);
                const O = BigInt(this.unsigned ? this.high >>> 0 : this.high);
                return O << BigInt(32) | y;
            };
        }
        const Gl = l.default = f;
    });
});
const br = C(function(sc, vr) {
    vr.exports = Bi;
    function Bi(l) {
        try {
            const u = l === "long" ? OXn() : l === "buffer" ? Le("buffer") : l === "fs" ? Le("fs") : Le(l);
            if (u && (u.length || Object.keys(u).length)) {
                return u;
            }
            return null;
        } catch (f) {
            return null;
        }
    }
});
const xr = C(function(Or) {
    const Gt = Or;
    const Jt = "\uFFFD";
    Gt.length = function(u) {
        let f = 0;
        let d = 0;
        for(let i = 0; i < u.length; ++i){
            d = u.charCodeAt(i);
            if (d < 128) {
                f += 1;
            } else if (d < 2048) {
                f += 2;
            } else if ((d & 64512) === 55296 && (u.charCodeAt(i + 1) & 64512) === 56320) {
                ++i;
                f += 4;
            } else {
                f += 3;
            }
        }
        return f;
    };
    Gt.read = function(u, f, d) {
        if (d - f < 1) {
            return "";
        }
        let i = "";
        for(let o = f; o < d;){
            const e = u[o++];
            if (e <= 127) {
                i += String.fromCharCode(e);
            } else if (e >= 192 && e < 224) {
                const t = (e & 31) << 6 | u[o++] & 63;
                i += t >= 128 ? String.fromCharCode(t) : Jt;
            } else if (e >= 224 && e < 240) {
                const r = (e & 15) << 12 | (u[o++] & 63) << 6 | u[o++] & 63;
                i += r >= 2048 ? String.fromCharCode(r) : Jt;
            } else if (e >= 240) {
                let n = (e & 7) << 18 | (u[o++] & 63) << 12 | (u[o++] & 63) << 6 | u[o++] & 63;
                if (n < 65536 || n > 1114111) {
                    i += Jt;
                } else {
                    n -= 65536;
                    i += String.fromCharCode(55296 + (n >> 10));
                    i += String.fromCharCode(56320 + (n & 1023));
                }
            }
        }
        return i;
    };
    Gt.write = function(u, f, d) {
        const i = d;
        let o;
        let e;
        for(let t = 0; t < u.length; ++t){
            o = u.charCodeAt(t);
            if (o < 128) {
                f[d++] = o;
            } else if (o < 2048) {
                f[d++] = o >> 6 | 192;
                f[d++] = o & 63 | 128;
            } else if ((o & 64512) === 55296 && ((e = u.charCodeAt(t + 1)) & 64512) === 56320) {
                o = 65536 + ((o & 1023) << 10) + (e & 1023);
                ++t;
                f[d++] = o >> 18 | 240;
                f[d++] = o >> 12 & 63 | 128;
                f[d++] = o >> 6 & 63 | 128;
                f[d++] = o & 63 | 128;
            } else {
                f[d++] = o >> 12 | 224;
                f[d++] = o >> 6 & 63 | 128;
                f[d++] = o & 63 | 128;
            }
        }
        return d - i;
    };
});
const gr = C(function(hc, Sr) {
    Sr.exports = qi;
    function qi(l, u, f) {
        const d = f || 8192;
        const i = d >>> 1;
        let o = null;
        let e = d;
        return function(r) {
            if (r < 1 || r > i) {
                return l(r);
            }
            if (e + r > d) {
                o = l(d);
                e = 0;
            }
            const n = u.call(o, e, e += r);
            if (e & 7) {
                e = (e | 7) + 1;
            }
            return n;
        };
    }
});
const Tr = C(function(mc, Nr) {
    const mt = HOe();
    class R {
        constructor(l, u){
            this.lo = l >>> 0;
            this.hi = u >>> 0;
        }
        static fromNumber(u) {
            if (u === 0) {
                return ct;
            }
            const f = u < 0;
            if (f) {
                u = -u;
            }
            let d = u >>> 0;
            let i = (u - d) / 4294967296 >>> 0;
            if (f) {
                i = ~i >>> 0;
                d = ~d >>> 0;
                if (++d > 4294967295) {
                    d = 0;
                    if (++i > 4294967295) {
                        i = 0;
                    }
                }
            }
            return new R(d, i);
        }
        static from(u) {
            if (typeof u === "number") {
                return R.fromNumber(u);
            }
            if (mt.isString(u)) {
                if (mt.Long) {
                    u = mt.Long.fromString(u);
                } else {
                    return R.fromNumber(parseInt(u, 10));
                }
            }
            if (u.low || u.high) {
                return new R(u.low >>> 0, u.high >>> 0);
            }
            return ct;
        }
        toNumber(u) {
            if (!u && this.hi >>> 31) {
                const f = ~this.lo + 1 >>> 0;
                let d = ~this.hi >>> 0;
                if (!f) {
                    d = d + 1 >>> 0;
                }
                return -(f + d * 4294967296);
            }
            return this.lo + this.hi * 4294967296;
        }
        toLong(u) {
            if (mt.Long) {
                return new mt.Long(this.lo | 0, this.hi | 0, Boolean(u));
            }
            return {
                low: this.lo | 0,
                high: this.hi | 0,
                unsigned: Boolean(u)
            };
        }
        static fromHash(u) {
            if (u === Hi) {
                return ct;
            }
            return new R((charCodeAt.call(u, 0) | charCodeAt.call(u, 1) << 8 | charCodeAt.call(u, 2) << 16 | charCodeAt.call(u, 3) << 24) >>> 0, (charCodeAt.call(u, 4) | charCodeAt.call(u, 5) << 8 | charCodeAt.call(u, 6) << 16 | charCodeAt.call(u, 7) << 24) >>> 0);
        }
        toHash() {
            return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
        }
        zzEncode() {
            const u = this.hi >> 31;
            this.hi = ((this.hi << 1 | this.lo >>> 31) ^ u) >>> 0;
            this.lo = (this.lo << 1 ^ u) >>> 0;
            return this;
        }
        zzDecode() {
            const u = -(this.lo & 1);
            this.lo = ((this.lo >>> 1 | this.hi << 31) ^ u) >>> 0;
            this.hi = (this.hi >>> 1 ^ u) >>> 0;
            return this;
        }
        length() {
            const u = this.lo;
            const f = (this.lo >>> 28 | this.hi << 4) >>> 0;
            const d = this.hi >>> 24;
            if (d === 0) {
                if (f === 0) {
                    if (u < 16384) {
                        if (u < 128) {
                            return 1;
                        }
                        return 2;
                    }
                    if (u < 2097152) {
                        return 3;
                    }
                    return 4;
                }
                if (f < 16384) {
                    if (f < 128) {
                        return 5;
                    }
                    return 6;
                }
                if (f < 2097152) {
                    return 7;
                }
                return 8;
            }
            if (d < 128) {
                return 9;
            }
            return 10;
        }
    }
    Nr.exports = R;
    const ct = R.zero = new R(0, 0);
    ct.toNumber = function() {
        return 0;
    };
    ct.zzEncode = ct.zzDecode = function() {
        return this;
    };
    ct.length = function() {
        return 1;
    };
    const Hi = R.zeroHash = "\x00\x00\x00\x00\x00\x00\x00\x00";
    const charCodeAt = String.prototype.charCodeAt;
});
var HOe = C(function(Yt) {
    const x = Yt;
    x.asPromise = sWr();
    x.base64 = lr();
    x.EventEmitter = ar();
    x.float = mr();
    x.inquire = br();
    x.utf8 = xr();
    x.pool = gr();
    x.LongBits = Tr();
    x.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
    x.global = x.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || Yt;
    x.emptyArray = Object.freeze ? Object.freeze([]) : [];
    x.emptyObject = Object.freeze ? Object.freeze({}) : {};
    x.isInteger = Number.isInteger || function(u) {
        return typeof u === "number" && isFinite(u) && Math.floor(u) === u;
    };
    x.isString = function(u) {
        return typeof u === "string" || u instanceof String;
    };
    x.isObject = function(u) {
        return u && typeof u === "object";
    };
    x.isset = x.isSet = function(u, f) {
        const d = u[f];
        if (d != null && u.hasOwnProperty(f)) {
            return typeof d !== "object" || (Array.isArray(d) ? d.length : Object.keys(d).length) > 0;
        }
        return false;
    };
    x.Buffer = (()=>{
        try {
            const l = x.inquire("buffer").Buffer;
            if (l.prototype.utf8Write) {
                return l;
            }
            return null;
        } catch (u) {
            return null;
        }
    })();
    x._Buffer_from = null;
    x._Buffer_allocUnsafe = null;
    x.newBuffer = function(u) {
        if (typeof u === "number") {
            if (x.Buffer) {
                return x._Buffer_allocUnsafe(u);
            }
            return new x.Array(u);
        }
        if (x.Buffer) {
            return x._Buffer_from(u);
        }
        if (typeof Uint8Array === "undefined") {
            return u;
        }
        return new Uint8Array(u);
    };
    x.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    x.Long = x.global.dcodeIO && x.global.dcodeIO.Long || x.global.Long || x.inquire("long");
    x.key2Re = /^true|false|0|1$/;
    x.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
    x.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
    x.longToHash = function(u) {
        if (u) {
            return x.LongBits.from(u).toHash();
        }
        return x.LongBits.zeroHash;
    };
    x.longFromHash = function(u, f) {
        const d = x.LongBits.fromHash(u);
        if (x.Long) {
            return x.Long.fromBits(d.lo, d.hi, f);
        }
        return d.toNumber(Boolean(f));
    };
    function wr(l, u, f) {
        for(let d = Object.keys(u), i = 0; i < d.length; ++i){
            if (l[d[i]] === undefined || !f) {
                if (d[i] !== "__proto__") {
                    l[d[i]] = u[d[i]];
                }
            }
        }
        return l;
    }
    x.merge = wr;
    x.recursionLimit = 100;
    x.makeProp = function(u, f) {
        Object.defineProperty(u, f, {
            enumerable: true,
            configurable: true,
            writable: true
        });
    };
    x.lcFirst = function(u) {
        return u.charAt(0).toLowerCase() + u.substring(1);
    };
    function Er(l) {
        function u(f, d) {
            if (!(this instanceof u)) {
                return new u(f, d);
            }
            Object.defineProperty(this, "message", {
                get: function() {
                    return f;
                }
            });
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, u);
            } else {
                Object.defineProperty(this, "stack", {
                    value: Error().stack || ""
                });
            }
            if (d) {
                wr(this, d);
            }
        }
        u.prototype = Object.create(Error.prototype, {
            constructor: {
                value: u,
                writable: true,
                enumerable: false,
                configurable: true
            },
            name: {
                get: function() {
                    return l;
                },
                set: undefined,
                enumerable: false,
                configurable: true
            },
            toString: {
                value: function() {
                    return `${this.name}: ${this.message}`;
                },
                writable: true,
                enumerable: false,
                configurable: true
            }
        });
        return u;
    }
    x.newError = Er;
    x.ProtocolError = Er("ProtocolError");
    x.oneOfGetter = function(u) {
        const f = {};
        for(let d = 0; d < u.length; ++d){
            f[u[d]] = 1;
        }
        return function() {
            const i = Object.keys(this);
            for(let o = i.length - 1; o > -1; --o){
                if (f[i[o]] === 1 && this[i[o]] !== undefined && this[i[o]] !== null) {
                    return i[o];
                }
            }
        };
    };
    x.oneOfSetter = function(u) {
        return function(f) {
            for(let d = 0; d < u.length; ++d){
                if (u[d] !== f) {
                    delete this[u[d]];
                }
            }
        };
    };
    x.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: true
    };
    x._configure = function() {
        const x_Buffer = x.Buffer;
        if (!x_Buffer) {
            x._Buffer_from = x._Buffer_allocUnsafe = null;
            return;
        }
        x._Buffer_from = x_Buffer.from !== Uint8Array.from && x_Buffer.from || function(f, d) {
            return new x_Buffer(f, d);
        };
        x._Buffer_allocUnsafe = x_Buffer.allocUnsafe || function(f) {
            return new x_Buffer(f);
        };
    };
});
const MXn = C(function(bc, _r) {
    const j = HOe();
    let Wt;
    const { LongBits, base64, utf8 } = j;
    function vt(l, u, f) {
        this.fn = l;
        this.len = u;
        this.next = undefined;
        this.val = f;
    }
    function Xt() {}
    function Fi(l) {
        this.head = l.head;
        this.tail = l.tail;
        this.len = l.len;
        this.next = l.states;
    }
    class T {
        constructor(){
            this.len = 0;
            this.head = new vt(Xt, 0, 0);
            this.tail = this.head;
            this.states = null;
        }
        static alloc(u) {
            return new j.Array(u);
        }
        _push(u, f, d) {
            this.tail = this.tail.next = new vt(u, f, d);
            this.len += f;
            return this;
        }
        uint32(u) {
            this.len += (this.tail = this.tail.next = new Qt((u = u >>> 0) < 128 ? 1 : u < 16384 ? 2 : u < 2097152 ? 3 : u < 268435456 ? 4 : 5, u)).len;
            return this;
        }
        int32(u) {
            if (u < 0) {
                return this._push(te, 10, LongBits.fromNumber(u));
            }
            return this.uint32(u);
        }
        sint32(u) {
            return this.uint32((u << 1 ^ u >> 31) >>> 0);
        }
        uint64(u) {
            const f = LongBits.from(u);
            return this._push(te, f.length(), f);
        }
        sint64(u) {
            const f = LongBits.from(u).zzEncode();
            return this._push(te, f.length(), f);
        }
        bool(u) {
            return this._push(Zt, 1, u ? 1 : 0);
        }
        fixed32(u) {
            return this._push($t, 4, u >>> 0);
        }
        fixed64(u) {
            const f = LongBits.from(u);
            return this._push($t, 4, f.lo)._push($t, 4, f.hi);
        }
        float(u) {
            return this._push(j.float.writeFloatLE, 4, u);
        }
        double(u) {
            return this._push(j.float.writeDoubleLE, 8, u);
        }
        bytes(u) {
            let f = u.length >>> 0;
            if (!f) {
                return this._push(Zt, 1, 0);
            }
            if (j.isString(u)) {
                const d = T.alloc(f = base64.length(u));
                base64.decode(u, d, 0);
                u = d;
            }
            return this.uint32(f)._push(ji, f, u);
        }
        string(u) {
            const f = utf8.length(u);
            if (f) {
                return this.uint32(f)._push(utf8.write, f, u);
            }
            return this._push(Zt, 1, 0);
        }
        fork() {
            this.states = new Fi(this);
            this.head = this.tail = new vt(Xt, 0, 0);
            this.len = 0;
            return this;
        }
        reset() {
            if (this.states) {
                this.head = this.states.head;
                this.tail = this.states.tail;
                this.len = this.states.len;
                this.states = this.states.next;
            } else {
                this.head = this.tail = new vt(Xt, 0, 0);
                this.len = 0;
            }
            return this;
        }
        ldelim() {
            const head = this.head;
            const tail = this.tail;
            const len = this.len;
            this.reset().uint32(len);
            if (len) {
                this.tail.next = head.next;
                this.tail = tail;
                this.len += len;
            }
            return this;
        }
        finish() {
            let next = this.head.next;
            const f = this.constructor.alloc(this.len);
            let d = 0;
            while(next){
                next.fn(next.val, f, d);
                d += next.len;
                next = next.next;
            }
            return f;
        }
        static _configure(l) {
            Wt = l;
            T.create = Ir();
            Wt._configure();
        }
    }
    _r.exports = T;
    const Ir = ()=>{
        if (j.Buffer) {
            return function() {
                return (T.create = function() {
                    return new Wt;
                })();
            };
        }
        return function() {
            return new T;
        };
    };
    T.create = Ir();
    if (j.Array !== Array) {
        T.alloc = j.pool(T.alloc, j.Array.prototype.subarray);
    }
    function Zt(l, u, f) {
        u[f] = l & 255;
    }
    function Ki(l, u, f) {
        while(l > 127){
            u[f++] = l & 127 | 128;
            l >>>= 7;
        }
        u[f] = l;
    }
    function Qt(l, u) {
        this.len = l;
        this.next = undefined;
        this.val = u;
    }
    Qt.prototype = Object.create(vt.prototype);
    Qt.prototype.fn = Ki;
    function te(l, u, f) {
        while(l.hi){
            u[f++] = l.lo & 127 | 128;
            l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0;
            l.hi >>>= 7;
        }
        while(l.lo > 127){
            u[f++] = l.lo & 127 | 128;
            l.lo = l.lo >>> 7;
        }
        u[f++] = l.lo;
    }
    T.prototype.int64 = T.prototype.uint64;
    function $t(l, u, f) {
        u[f] = l & 255;
        u[f + 1] = l >>> 8 & 255;
        u[f + 2] = l >>> 16 & 255;
        u[f + 3] = l >>> 24;
    }
    T.prototype.sfixed32 = T.prototype.fixed32;
    T.prototype.sfixed64 = T.prototype.fixed64;
    const ji = j.Array.prototype.set ? function(u, f, d) {
        f.set(u, d);
    } : function(u, f, d) {
        for(let i = 0; i < u.length; ++i){
            f[d + i] = u[i];
        }
    };
});
const Rr = C(function(Oc, Lr) {
    var Ar = MXn();
    const ot = HOe();
    class W extends Ar {
        constructor(){
            super();
        }
        static _configure() {
            W.alloc = ot._Buffer_allocUnsafe;
            W.writeBytesBuffer = ot.Buffer && ot.Buffer.prototype instanceof Uint8Array && ot.Buffer.prototype.set.name === "set" ? function(u, f, d) {
                f.set(u, d);
            } : function(u, f, d) {
                if (u.copy) {
                    u.copy(f, d, 0, u.length);
                } else {
                    for(let i = 0; i < u.length;){
                        f[d++] = u[i++];
                    }
                }
            };
        }
        bytes(u) {
            if (ot.isString(u)) {
                u = ot._Buffer_from(u, "base64");
            }
            const f = u.length >>> 0;
            this.uint32(f);
            if (f) {
                this._push(W.writeBytesBuffer, f, u);
            }
            return this;
        }
        string(u) {
            const f = ot.Buffer.byteLength(u);
            this.uint32(f);
            if (f) {
                this._push(zi, f, u);
            }
            return this;
        }
    }
    Lr.exports = W;
    function zi(l, u, f) {
        if (l.length < 40) {
            ot.utf8.write(l, u, f);
        } else if (u.utf8Write) {
            u.utf8Write(l, f);
        } else {
            u.write(l, f);
        }
    }
    W._configure();
});
const HXn = C(function(xc, Vr) {
    const z = HOe();
    let re;
    const { LongBits, utf8 } = z;
    function Y(l, u) {
        return RangeError(`index out of range: ${l.pos} + ${u || 1} > ${l.len}`);
    }
    class P {
        constructor(l){
            this.buf = l;
            this.pos = 0;
            this.len = l.length;
        }
        int32() {
            return this.uint32() | 0;
        }
        sint32() {
            const u = this.uint32();
            return u >>> 1 ^ -(u & 1) | 0;
        }
        bool() {
            return this.uint32() !== 0;
        }
        fixed32() {
            if (this.pos + 4 > this.len) {
                throw Y(this, 4);
            }
            return wt(this.buf, this.pos += 4);
        }
        sfixed32() {
            if (this.pos + 4 > this.len) {
                throw Y(this, 4);
            }
            return wt(this.buf, this.pos += 4) | 0;
        }
        float() {
            if (this.pos + 4 > this.len) {
                throw Y(this, 4);
            }
            const u = z.float.readFloatLE(this.buf, this.pos);
            this.pos += 4;
            return u;
        }
        double() {
            if (this.pos + 8 > this.len) {
                throw Y(this, 4);
            }
            const u = z.float.readDoubleLE(this.buf, this.pos);
            this.pos += 8;
            return u;
        }
        bytes() {
            const u = this.uint32();
            const pos = this.pos;
            const d = this.pos + u;
            if (d > this.len) {
                throw Y(this, u);
            }
            this.pos += u;
            if (Array.isArray(this.buf)) {
                return this.buf.slice(pos, d);
            }
            if (pos === d) {
                const i = z.Buffer;
                if (i) {
                    return i.alloc(0);
                }
                return new this.buf.constructor(0);
            }
            return this._slice.call(this.buf, pos, d);
        }
        string() {
            const u = this.bytes();
            return utf8.read(u, 0, u.length);
        }
        skip(u) {
            if (typeof u === "number") {
                if (this.pos + u > this.len) {
                    throw Y(this, u);
                }
                this.pos += u;
            } else {
                do {
                    if (this.pos >= this.len) {
                        throw Y(this);
                    }
                }while (this.buf[this.pos++] & 128)
            }
            return this;
        }
        skipType(l, u = 0) {
            if (u > P.recursionLimit) {
                throw Error("maximum nesting depth exceeded");
            }
            switch(l){
                case 0:
                    this.skip();
                    break;
                case 1:
                    this.skip(8);
                    break;
                case 2:
                    this.skip(this.uint32());
                    break;
                case 3:
                    while((l = this.uint32() & 7) !== 4){
                        this.skipType(l, u + 1);
                    }
                    break;
                case 5:
                    this.skip(4);
                    break;
                default:
                    throw Error(`invalid wire type ${l} at offset ${this.pos}`);
            }
            return this;
        }
        static _configure(l) {
            re = l;
            P.create = Cr();
            re._configure();
            const u = z.Long ? "toLong" : "toNumber";
            z.merge(P.prototype, {
                int64: function() {
                    return ee.call(this)[u](false);
                },
                uint64: function() {
                    return ee.call(this)[u](true);
                },
                sint64: function() {
                    return ee.call(this).zzDecode()[u](false);
                },
                fixed64: function() {
                    return Dr.call(this)[u](true);
                },
                sfixed64: function() {
                    return Dr.call(this)[u](false);
                }
            });
        }
    }
    Vr.exports = P;
    const kr = typeof Uint8Array !== "undefined" ? function(u) {
        if (u instanceof Uint8Array || Array.isArray(u)) {
            return new P(u);
        }
        throw Error("illegal buffer");
    } : function(u) {
        if (Array.isArray(u)) {
            return new P(u);
        }
        throw Error("illegal buffer");
    };
    const Cr = ()=>{
        if (z.Buffer) {
            return function(f) {
                return (P.create = function(i) {
                    if (z.Buffer.isBuffer(i)) {
                        return new re(i);
                    }
                    return kr(i);
                })(f);
            };
        }
        return kr;
    };
    P.create = Cr();
    P.prototype._slice = z.Array.prototype.subarray || z.Array.prototype.slice;
    P.prototype.uint32 = (()=>{
        let u = 4294967295;
        return function() {
            u = (this.buf[this.pos] & 127) >>> 0;
            if (this.buf[this.pos++] < 128) {
                return u;
            }
            u = (u | (this.buf[this.pos] & 127) << 7) >>> 0;
            if (this.buf[this.pos++] < 128) {
                return u;
            }
            u = (u | (this.buf[this.pos] & 127) << 14) >>> 0;
            if (this.buf[this.pos++] < 128) {
                return u;
            }
            u = (u | (this.buf[this.pos] & 127) << 21) >>> 0;
            if (this.buf[this.pos++] < 128) {
                return u;
            }
            u = (u | (this.buf[this.pos] & 15) << 28) >>> 0;
            if (this.buf[this.pos++] < 128) {
                return u;
            }
            if ((this.pos += 5) > this.len) {
                this.pos = this.len;
                throw Y(this, 10);
            }
            return u;
        };
    })();
    function ee() {
        const l = new LongBits(0, 0);
        let u = 0;
        if (this.len - this.pos > 4) {
            for(; u < 4; ++u){
                l.lo = (l.lo | (this.buf[this.pos] & 127) << u * 7) >>> 0;
                if (this.buf[this.pos++] < 128) {
                    return l;
                }
            }
            l.lo = (l.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
            l.hi = (l.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
            if (this.buf[this.pos++] < 128) {
                return l;
            }
            u = 0;
        } else {
            for(; u < 3; ++u){
                if (this.pos >= this.len) {
                    throw Y(this);
                }
                l.lo = (l.lo | (this.buf[this.pos] & 127) << u * 7) >>> 0;
                if (this.buf[this.pos++] < 128) {
                    return l;
                }
            }
            l.lo = (l.lo | (this.buf[this.pos++] & 127) << u * 7) >>> 0;
            return l;
        }
        if (this.len - this.pos > 4) {
            for(; u < 5; ++u){
                l.hi = (l.hi | (this.buf[this.pos] & 127) << u * 7 + 3) >>> 0;
                if (this.buf[this.pos++] < 128) {
                    return l;
                }
            }
        } else {
            for(; u < 5; ++u){
                if (this.pos >= this.len) {
                    throw Y(this);
                }
                l.hi = (l.hi | (this.buf[this.pos] & 127) << u * 7 + 3) >>> 0;
                if (this.buf[this.pos++] < 128) {
                    return l;
                }
            }
        }
        throw Error("invalid varint encoding");
    }
    function wt(buf, u) {
        return (buf[u - 4] | buf[u - 3] << 8 | buf[u - 2] << 16 | buf[u - 1] << 24) >>> 0;
    }
    function Dr() {
        if (this.pos + 8 > this.len) {
            throw Y(this, 8);
        }
        return new LongBits(wt(this.buf, this.pos += 4), wt(this.buf, this.pos += 4));
    }
    P.recursionLimit = z.recursionLimit;
});
const Fr = C(function(Sc, Hr) {
    var qr = HXn();
    const Br = HOe();
    class at extends qr {
        constructor(l){
            super(l);
        }
        static _configure() {
            if (Br.Buffer) {
                at.prototype._slice = Br.Buffer.prototype.slice;
            }
        }
        string() {
            const u = this.uint32();
            if (this.buf.utf8Slice) {
                return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + u, this.len));
            }
            return this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + u, this.len));
        }
    }
    Hr.exports = at;
    at._configure();
});
const jr = C(function(gc, Kr) {
    Kr.exports = bt;
    var ne = HOe();
    (bt.prototype = Object.create(ne.EventEmitter.prototype)).constructor = bt;
    function bt(l, u, f) {
        if (typeof l !== "function") {
            throw TypeError("rpcImpl must be a function");
        }
        ne.EventEmitter.call(this);
        this.rpcImpl = l;
        this.requestDelimited = Boolean(u);
        this.responseDelimited = Boolean(f);
    }
    bt.prototype.rpcCall = function l(u, f, d, i, o) {
        if (!i) {
            throw TypeError("request must be specified");
        }
        const e = this;
        if (!o) {
            return ne.asPromise(l, e, u, f, d, i);
        }
        if (!e.rpcImpl) {
            setTimeout(()=>{
                o(Error("already ended"));
            }, 0);
            return;
        }
        try {
            return e.rpcImpl(u, f[e.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), function(r, n) {
                if (r) {
                    e.emit("error", r, u);
                    return o(r);
                }
                if (n === null) {
                    e.end(true);
                    return;
                }
                if (!(n instanceof d)) {
                    try {
                        n = d[e.responseDelimited ? "decodeDelimited" : "decode"](n);
                    } catch (error) {
                        e.emit("error", error, u);
                        return o(error);
                    }
                }
                e.emit("data", n, u);
                return o(null, n);
            });
        } catch (error) {
            e.emit("error", error, u);
            setTimeout(()=>{
                o(error);
            }, 0);
            return;
        }
    };
    bt.prototype.end = function(u) {
        if (this.rpcImpl) {
            if (!u) {
                this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
        }
        return this;
    };
});
const iWr = C(function(zr) {
    zr.Service = jr();
});
const aWr = C(function(Tc, Jr) {
    Jr.exports = {};
});
const lWr = C(function(Yr) {
    const B = Yr;
    B.build = "minimal";
    B.Writer = MXn();
    B.BufferWriter = Rr();
    B.Reader = HXn();
    B.BufferReader = Fr();
    B.util = HOe();
    B.rpc = iWr();
    B.roots = aWr();
    B.configure = Gr;
    function Gr() {
        B.util._configure();
        B.Writer._configure(B.BufferWriter);
        B.Reader._configure(B.BufferReader);
    }
    Gr();
});
const Et = C(function(Wr, $r) {
    Object.defineProperty(Wr, "__esModule", {
        value: true
    });
    const S = lWr();
    const { Reader, Writer, util } = S;
    const a = S.roots.default || (S.roots.default = {});
    a.opentelemetry = (()=>{
        const l = {};
        l.proto = (()=>{
            const u = {};
            u.common = (()=>{
                const f = {};
                f.v1 = (()=>{
                    const d = {};
                    d.AnyValue = function() {
                        class i {
                            constructor(e){
                                if (e) {
                                    for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                        if (e[t[r]] != null) {
                                            this[t[r]] = e[t[r]];
                                        }
                                    }
                                }
                            }
                            static create(t) {
                                return new i(t);
                            }
                            static encode(t, r) {
                                if (!r) {
                                    r = Writer.create();
                                }
                                if (t.stringValue != null && Object.hasOwnProperty.call(t, "stringValue")) {
                                    r.uint32(10).string(t.stringValue);
                                }
                                if (t.boolValue != null && Object.hasOwnProperty.call(t, "boolValue")) {
                                    r.uint32(16).bool(t.boolValue);
                                }
                                if (t.intValue != null && Object.hasOwnProperty.call(t, "intValue")) {
                                    r.uint32(24).int64(t.intValue);
                                }
                                if (t.doubleValue != null && Object.hasOwnProperty.call(t, "doubleValue")) {
                                    r.uint32(33).double(t.doubleValue);
                                }
                                if (t.arrayValue != null && Object.hasOwnProperty.call(t, "arrayValue")) {
                                    a.opentelemetry.proto.common.v1.ArrayValue.encode(t.arrayValue, r.uint32(42).fork()).ldelim();
                                }
                                if (t.kvlistValue != null && Object.hasOwnProperty.call(t, "kvlistValue")) {
                                    a.opentelemetry.proto.common.v1.KeyValueList.encode(t.kvlistValue, r.uint32(50).fork()).ldelim();
                                }
                                if (t.bytesValue != null && Object.hasOwnProperty.call(t, "bytesValue")) {
                                    r.uint32(58).bytes(t.bytesValue);
                                }
                                return r;
                            }
                            static encodeDelimited(t, r) {
                                return this.encode(t, r).ldelim();
                            }
                            static decode(t, r, n) {
                                if (!(t instanceof Reader)) {
                                    t = Reader.create(t);
                                }
                                const c = r === undefined ? t.len : t.pos + r;
                                const s = new a.opentelemetry.proto.common.v1.AnyValue;
                                while(t.pos < c){
                                    const m = t.uint32();
                                    if (m === n) {
                                        break;
                                    }
                                    switch(m >>> 3){
                                        case 1:
                                            {
                                                s.stringValue = t.string();
                                                break;
                                            }
                                        case 2:
                                            {
                                                s.boolValue = t.bool();
                                                break;
                                            }
                                        case 3:
                                            {
                                                s.intValue = t.int64();
                                                break;
                                            }
                                        case 4:
                                            {
                                                s.doubleValue = t.double();
                                                break;
                                            }
                                        case 5:
                                            {
                                                s.arrayValue = a.opentelemetry.proto.common.v1.ArrayValue.decode(t, t.uint32());
                                                break;
                                            }
                                        case 6:
                                            {
                                                s.kvlistValue = a.opentelemetry.proto.common.v1.KeyValueList.decode(t, t.uint32());
                                                break;
                                            }
                                        case 7:
                                            {
                                                s.bytesValue = t.bytes();
                                                break;
                                            }
                                        default:
                                            t.skipType(m & 7);
                                            break;
                                    }
                                }
                                return s;
                            }
                            static decodeDelimited(t) {
                                if (!(t instanceof Reader)) {
                                    t = new Reader(t);
                                }
                                return this.decode(t, t.uint32());
                            }
                            static verify(t) {
                                if (typeof t !== "object" || t === null) {
                                    return "object expected";
                                }
                                const r = {};
                                if (t.stringValue != null && t.hasOwnProperty("stringValue")) {
                                    r.value = 1;
                                    if (!util.isString(t.stringValue)) {
                                        return "stringValue: string expected";
                                    }
                                }
                                if (t.boolValue != null && t.hasOwnProperty("boolValue")) {
                                    if (r.value === 1) {
                                        return "value: multiple values";
                                    }
                                    r.value = 1;
                                    if (typeof t.boolValue !== "boolean") {
                                        return "boolValue: boolean expected";
                                    }
                                }
                                if (t.intValue != null && t.hasOwnProperty("intValue")) {
                                    if (r.value === 1) {
                                        return "value: multiple values";
                                    }
                                    r.value = 1;
                                    if (!util.isInteger(t.intValue) && !(t.intValue && util.isInteger(t.intValue.low) && util.isInteger(t.intValue.high))) {
                                        return "intValue: integer|Long expected";
                                    }
                                }
                                if (t.doubleValue != null && t.hasOwnProperty("doubleValue")) {
                                    if (r.value === 1) {
                                        return "value: multiple values";
                                    }
                                    r.value = 1;
                                    if (typeof t.doubleValue !== "number") {
                                        return "doubleValue: number expected";
                                    }
                                }
                                if (t.arrayValue != null && t.hasOwnProperty("arrayValue")) {
                                    if (r.value === 1) {
                                        return "value: multiple values";
                                    }
                                    r.value = 1;
                                    {
                                        var n = a.opentelemetry.proto.common.v1.ArrayValue.verify(t.arrayValue);
                                        if (n) {
                                            return `arrayValue.${n}`;
                                        }
                                    }
                                }
                                if (t.kvlistValue != null && t.hasOwnProperty("kvlistValue")) {
                                    if (r.value === 1) {
                                        return "value: multiple values";
                                    }
                                    r.value = 1;
                                    {
                                        var n = a.opentelemetry.proto.common.v1.KeyValueList.verify(t.kvlistValue);
                                        if (n) {
                                            return `kvlistValue.${n}`;
                                        }
                                    }
                                }
                                if (t.bytesValue != null && t.hasOwnProperty("bytesValue")) {
                                    if (r.value === 1) {
                                        return "value: multiple values";
                                    }
                                    r.value = 1;
                                    if (!(t.bytesValue && typeof t.bytesValue.length === "number" || util.isString(t.bytesValue))) {
                                        return "bytesValue: buffer expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(t) {
                                if (t instanceof a.opentelemetry.proto.common.v1.AnyValue) {
                                    return t;
                                }
                                const r = new a.opentelemetry.proto.common.v1.AnyValue;
                                if (t.stringValue != null) {
                                    r.stringValue = String(t.stringValue);
                                }
                                if (t.boolValue != null) {
                                    r.boolValue = Boolean(t.boolValue);
                                }
                                if (t.intValue != null) {
                                    if (util.Long) {
                                        (r.intValue = util.Long.fromValue(t.intValue)).unsigned = false;
                                    } else if (typeof t.intValue === "string") {
                                        r.intValue = parseInt(t.intValue, 10);
                                    } else if (typeof t.intValue === "number") {
                                        r.intValue = t.intValue;
                                    } else if (typeof t.intValue === "object") {
                                        r.intValue = new util.LongBits(t.intValue.low >>> 0, t.intValue.high >>> 0).toNumber();
                                    }
                                }
                                if (t.doubleValue != null) {
                                    r.doubleValue = Number(t.doubleValue);
                                }
                                if (t.arrayValue != null) {
                                    if (typeof t.arrayValue !== "object") {
                                        throw TypeError(".opentelemetry.proto.common.v1.AnyValue.arrayValue: object expected");
                                    }
                                    r.arrayValue = a.opentelemetry.proto.common.v1.ArrayValue.fromObject(t.arrayValue);
                                }
                                if (t.kvlistValue != null) {
                                    if (typeof t.kvlistValue !== "object") {
                                        throw TypeError(".opentelemetry.proto.common.v1.AnyValue.kvlistValue: object expected");
                                    }
                                    r.kvlistValue = a.opentelemetry.proto.common.v1.KeyValueList.fromObject(t.kvlistValue);
                                }
                                if (t.bytesValue != null) {
                                    if (typeof t.bytesValue === "string") {
                                        util.base64.decode(t.bytesValue, r.bytesValue = util.newBuffer(util.base64.length(t.bytesValue)), 0);
                                    } else if (t.bytesValue.length >= 0) {
                                        r.bytesValue = t.bytesValue;
                                    }
                                }
                                return r;
                            }
                            static toObject(t, r) {
                                if (!r) {
                                    r = {};
                                }
                                const n = {};
                                if (t.stringValue != null && t.hasOwnProperty("stringValue")) {
                                    n.stringValue = t.stringValue;
                                    if (r.oneofs) {
                                        n.value = "stringValue";
                                    }
                                }
                                if (t.boolValue != null && t.hasOwnProperty("boolValue")) {
                                    n.boolValue = t.boolValue;
                                    if (r.oneofs) {
                                        n.value = "boolValue";
                                    }
                                }
                                if (t.intValue != null && t.hasOwnProperty("intValue")) {
                                    if (typeof t.intValue === "number") {
                                        n.intValue = r.longs === String ? String(t.intValue) : t.intValue;
                                    } else {
                                        n.intValue = r.longs === String ? util.Long.prototype.toString.call(t.intValue) : r.longs === Number ? new util.LongBits(t.intValue.low >>> 0, t.intValue.high >>> 0).toNumber() : t.intValue;
                                    }
                                    if (r.oneofs) {
                                        n.value = "intValue";
                                    }
                                }
                                if (t.doubleValue != null && t.hasOwnProperty("doubleValue")) {
                                    n.doubleValue = r.json && !isFinite(t.doubleValue) ? String(t.doubleValue) : t.doubleValue;
                                    if (r.oneofs) {
                                        n.value = "doubleValue";
                                    }
                                }
                                if (t.arrayValue != null && t.hasOwnProperty("arrayValue")) {
                                    n.arrayValue = a.opentelemetry.proto.common.v1.ArrayValue.toObject(t.arrayValue, r);
                                    if (r.oneofs) {
                                        n.value = "arrayValue";
                                    }
                                }
                                if (t.kvlistValue != null && t.hasOwnProperty("kvlistValue")) {
                                    n.kvlistValue = a.opentelemetry.proto.common.v1.KeyValueList.toObject(t.kvlistValue, r);
                                    if (r.oneofs) {
                                        n.value = "kvlistValue";
                                    }
                                }
                                if (t.bytesValue != null && t.hasOwnProperty("bytesValue")) {
                                    n.bytesValue = r.bytes === String ? util.base64.encode(t.bytesValue, 0, t.bytesValue.length) : r.bytes === Array ? Array.prototype.slice.call(t.bytesValue) : t.bytesValue;
                                    if (r.oneofs) {
                                        n.value = "bytesValue";
                                    }
                                }
                                return n;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(t = "type.googleapis.com") {
                                return `${t}/opentelemetry.proto.common.v1.AnyValue`;
                            }
                        }
                        i.prototype.stringValue = null;
                        i.prototype.boolValue = null;
                        i.prototype.intValue = null;
                        i.prototype.doubleValue = null;
                        i.prototype.arrayValue = null;
                        i.prototype.kvlistValue = null;
                        i.prototype.bytesValue = null;
                        let o;
                        Object.defineProperty(i.prototype, "value", {
                            get: util.oneOfGetter(o = [
                                "stringValue",
                                "boolValue",
                                "intValue",
                                "doubleValue",
                                "arrayValue",
                                "kvlistValue",
                                "bytesValue"
                            ]),
                            set: util.oneOfSetter(o)
                        });
                        return i;
                    }();
                    d.ArrayValue = function() {
                        class i {
                            constructor(o){
                                this.values = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.values != null && e.values.length) {
                                    for(let r = 0; r < e.values.length; ++r){
                                        a.opentelemetry.proto.common.v1.AnyValue.encode(e.values[r], t.uint32(10).fork()).ldelim();
                                    }
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.common.v1.ArrayValue;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                if (!(c.values && c.values.length)) {
                                                    c.values = [];
                                                }
                                                c.values.push(a.opentelemetry.proto.common.v1.AnyValue.decode(e, e.uint32()));
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.values != null && e.hasOwnProperty("values")) {
                                    if (!Array.isArray(e.values)) {
                                        return "values: array expected";
                                    }
                                    for(let t = 0; t < e.values.length; ++t){
                                        const r = a.opentelemetry.proto.common.v1.AnyValue.verify(e.values[t]);
                                        if (r) {
                                            return `values.${r}`;
                                        }
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.common.v1.ArrayValue) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.common.v1.ArrayValue;
                                if (e.values) {
                                    if (!Array.isArray(e.values)) {
                                        throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: array expected");
                                    }
                                    t.values = [];
                                    for(let r = 0; r < e.values.length; ++r){
                                        if (typeof e.values[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: object expected");
                                        }
                                        t.values[r] = a.opentelemetry.proto.common.v1.AnyValue.fromObject(e.values[r]);
                                    }
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.values = [];
                                }
                                if (e.values && e.values.length) {
                                    r.values = [];
                                    for(let n = 0; n < e.values.length; ++n){
                                        r.values[n] = a.opentelemetry.proto.common.v1.AnyValue.toObject(e.values[n], t);
                                    }
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.common.v1.ArrayValue`;
                            }
                        }
                        i.prototype.values = util.emptyArray;
                        return i;
                    }();
                    d.KeyValueList = function() {
                        class i {
                            constructor(o){
                                this.values = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.values != null && e.values.length) {
                                    for(let r = 0; r < e.values.length; ++r){
                                        a.opentelemetry.proto.common.v1.KeyValue.encode(e.values[r], t.uint32(10).fork()).ldelim();
                                    }
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.common.v1.KeyValueList;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                if (!(c.values && c.values.length)) {
                                                    c.values = [];
                                                }
                                                c.values.push(a.opentelemetry.proto.common.v1.KeyValue.decode(e, e.uint32()));
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.values != null && e.hasOwnProperty("values")) {
                                    if (!Array.isArray(e.values)) {
                                        return "values: array expected";
                                    }
                                    for(let t = 0; t < e.values.length; ++t){
                                        const r = a.opentelemetry.proto.common.v1.KeyValue.verify(e.values[t]);
                                        if (r) {
                                            return `values.${r}`;
                                        }
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.common.v1.KeyValueList) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.common.v1.KeyValueList;
                                if (e.values) {
                                    if (!Array.isArray(e.values)) {
                                        throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: array expected");
                                    }
                                    t.values = [];
                                    for(let r = 0; r < e.values.length; ++r){
                                        if (typeof e.values[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: object expected");
                                        }
                                        t.values[r] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(e.values[r]);
                                    }
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.values = [];
                                }
                                if (e.values && e.values.length) {
                                    r.values = [];
                                    for(let n = 0; n < e.values.length; ++n){
                                        r.values[n] = a.opentelemetry.proto.common.v1.KeyValue.toObject(e.values[n], t);
                                    }
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.common.v1.KeyValueList`;
                            }
                        }
                        i.prototype.values = util.emptyArray;
                        return i;
                    }();
                    d.KeyValue = function() {
                        class i {
                            constructor(o){
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.key != null && Object.hasOwnProperty.call(e, "key")) {
                                    t.uint32(10).string(e.key);
                                }
                                if (e.value != null && Object.hasOwnProperty.call(e, "value")) {
                                    a.opentelemetry.proto.common.v1.AnyValue.encode(e.value, t.uint32(18).fork()).ldelim();
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.common.v1.KeyValue;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                c.key = e.string();
                                                break;
                                            }
                                        case 2:
                                            {
                                                c.value = a.opentelemetry.proto.common.v1.AnyValue.decode(e, e.uint32());
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.key != null && e.hasOwnProperty("key")) {
                                    if (!util.isString(e.key)) {
                                        return "key: string expected";
                                    }
                                }
                                if (e.value != null && e.hasOwnProperty("value")) {
                                    const t = a.opentelemetry.proto.common.v1.AnyValue.verify(e.value);
                                    if (t) {
                                        return `value.${t}`;
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.common.v1.KeyValue) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.common.v1.KeyValue;
                                if (e.key != null) {
                                    t.key = String(e.key);
                                }
                                if (e.value != null) {
                                    if (typeof e.value !== "object") {
                                        throw TypeError(".opentelemetry.proto.common.v1.KeyValue.value: object expected");
                                    }
                                    t.value = a.opentelemetry.proto.common.v1.AnyValue.fromObject(e.value);
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.defaults) {
                                    r.key = "";
                                    r.value = null;
                                }
                                if (e.key != null && e.hasOwnProperty("key")) {
                                    r.key = e.key;
                                }
                                if (e.value != null && e.hasOwnProperty("value")) {
                                    r.value = a.opentelemetry.proto.common.v1.AnyValue.toObject(e.value, t);
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.common.v1.KeyValue`;
                            }
                        }
                        i.prototype.key = null;
                        i.prototype.value = null;
                        return i;
                    }();
                    d.InstrumentationScope = function() {
                        class i {
                            constructor(o){
                                this.attributes = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.name != null && Object.hasOwnProperty.call(e, "name")) {
                                    t.uint32(10).string(e.name);
                                }
                                if (e.version != null && Object.hasOwnProperty.call(e, "version")) {
                                    t.uint32(18).string(e.version);
                                }
                                if (e.attributes != null && e.attributes.length) {
                                    for(let r = 0; r < e.attributes.length; ++r){
                                        a.opentelemetry.proto.common.v1.KeyValue.encode(e.attributes[r], t.uint32(26).fork()).ldelim();
                                    }
                                }
                                if (e.droppedAttributesCount != null && Object.hasOwnProperty.call(e, "droppedAttributesCount")) {
                                    t.uint32(32).uint32(e.droppedAttributesCount);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.common.v1.InstrumentationScope;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                c.name = e.string();
                                                break;
                                            }
                                        case 2:
                                            {
                                                c.version = e.string();
                                                break;
                                            }
                                        case 3:
                                            {
                                                if (!(c.attributes && c.attributes.length)) {
                                                    c.attributes = [];
                                                }
                                                c.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 4:
                                            {
                                                c.droppedAttributesCount = e.uint32();
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.name != null && e.hasOwnProperty("name")) {
                                    if (!util.isString(e.name)) {
                                        return "name: string expected";
                                    }
                                }
                                if (e.version != null && e.hasOwnProperty("version")) {
                                    if (!util.isString(e.version)) {
                                        return "version: string expected";
                                    }
                                }
                                if (e.attributes != null && e.hasOwnProperty("attributes")) {
                                    if (!Array.isArray(e.attributes)) {
                                        return "attributes: array expected";
                                    }
                                    for(let t = 0; t < e.attributes.length; ++t){
                                        const r = a.opentelemetry.proto.common.v1.KeyValue.verify(e.attributes[t]);
                                        if (r) {
                                            return `attributes.${r}`;
                                        }
                                    }
                                }
                                if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) {
                                    if (!util.isInteger(e.droppedAttributesCount)) {
                                        return "droppedAttributesCount: integer expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.common.v1.InstrumentationScope) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.common.v1.InstrumentationScope;
                                if (e.name != null) {
                                    t.name = String(e.name);
                                }
                                if (e.version != null) {
                                    t.version = String(e.version);
                                }
                                if (e.attributes) {
                                    if (!Array.isArray(e.attributes)) {
                                        throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: array expected");
                                    }
                                    t.attributes = [];
                                    for(let r = 0; r < e.attributes.length; ++r){
                                        if (typeof e.attributes[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: object expected");
                                        }
                                        t.attributes[r] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(e.attributes[r]);
                                    }
                                }
                                if (e.droppedAttributesCount != null) {
                                    t.droppedAttributesCount = e.droppedAttributesCount >>> 0;
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.attributes = [];
                                }
                                if (t.defaults) {
                                    r.name = "";
                                    r.version = "";
                                    r.droppedAttributesCount = 0;
                                }
                                if (e.name != null && e.hasOwnProperty("name")) {
                                    r.name = e.name;
                                }
                                if (e.version != null && e.hasOwnProperty("version")) {
                                    r.version = e.version;
                                }
                                if (e.attributes && e.attributes.length) {
                                    r.attributes = [];
                                    for(let n = 0; n < e.attributes.length; ++n){
                                        r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.toObject(e.attributes[n], t);
                                    }
                                }
                                if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) {
                                    r.droppedAttributesCount = e.droppedAttributesCount;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.common.v1.InstrumentationScope`;
                            }
                        }
                        i.prototype.name = null;
                        i.prototype.version = null;
                        i.prototype.attributes = util.emptyArray;
                        i.prototype.droppedAttributesCount = null;
                        return i;
                    }();
                    d.EntityRef = function() {
                        class i {
                            constructor(o){
                                this.idKeys = [];
                                this.descriptionKeys = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) {
                                    t.uint32(10).string(e.schemaUrl);
                                }
                                if (e.type != null && Object.hasOwnProperty.call(e, "type")) {
                                    t.uint32(18).string(e.type);
                                }
                                if (e.idKeys != null && e.idKeys.length) {
                                    for(var r = 0; r < e.idKeys.length; ++r){
                                        t.uint32(26).string(e.idKeys[r]);
                                    }
                                }
                                if (e.descriptionKeys != null && e.descriptionKeys.length) {
                                    for(var r = 0; r < e.descriptionKeys.length; ++r){
                                        t.uint32(34).string(e.descriptionKeys[r]);
                                    }
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.common.v1.EntityRef;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                c.schemaUrl = e.string();
                                                break;
                                            }
                                        case 2:
                                            {
                                                c.type = e.string();
                                                break;
                                            }
                                        case 3:
                                            {
                                                if (!(c.idKeys && c.idKeys.length)) {
                                                    c.idKeys = [];
                                                }
                                                c.idKeys.push(e.string());
                                                break;
                                            }
                                        case 4:
                                            {
                                                if (!(c.descriptionKeys && c.descriptionKeys.length)) {
                                                    c.descriptionKeys = [];
                                                }
                                                c.descriptionKeys.push(e.string());
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    if (!util.isString(e.schemaUrl)) {
                                        return "schemaUrl: string expected";
                                    }
                                }
                                if (e.type != null && e.hasOwnProperty("type")) {
                                    if (!util.isString(e.type)) {
                                        return "type: string expected";
                                    }
                                }
                                if (e.idKeys != null && e.hasOwnProperty("idKeys")) {
                                    if (!Array.isArray(e.idKeys)) {
                                        return "idKeys: array expected";
                                    }
                                    for(var t = 0; t < e.idKeys.length; ++t){
                                        if (!util.isString(e.idKeys[t])) {
                                            return "idKeys: string[] expected";
                                        }
                                    }
                                }
                                if (e.descriptionKeys != null && e.hasOwnProperty("descriptionKeys")) {
                                    if (!Array.isArray(e.descriptionKeys)) {
                                        return "descriptionKeys: array expected";
                                    }
                                    for(var t = 0; t < e.descriptionKeys.length; ++t){
                                        if (!util.isString(e.descriptionKeys[t])) {
                                            return "descriptionKeys: string[] expected";
                                        }
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.common.v1.EntityRef) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.common.v1.EntityRef;
                                if (e.schemaUrl != null) {
                                    t.schemaUrl = String(e.schemaUrl);
                                }
                                if (e.type != null) {
                                    t.type = String(e.type);
                                }
                                if (e.idKeys) {
                                    if (!Array.isArray(e.idKeys)) {
                                        throw TypeError(".opentelemetry.proto.common.v1.EntityRef.idKeys: array expected");
                                    }
                                    t.idKeys = [];
                                    for(var r = 0; r < e.idKeys.length; ++r){
                                        t.idKeys[r] = String(e.idKeys[r]);
                                    }
                                }
                                if (e.descriptionKeys) {
                                    if (!Array.isArray(e.descriptionKeys)) {
                                        throw TypeError(".opentelemetry.proto.common.v1.EntityRef.descriptionKeys: array expected");
                                    }
                                    t.descriptionKeys = [];
                                    for(var r = 0; r < e.descriptionKeys.length; ++r){
                                        t.descriptionKeys[r] = String(e.descriptionKeys[r]);
                                    }
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.idKeys = [];
                                    r.descriptionKeys = [];
                                }
                                if (t.defaults) {
                                    r.schemaUrl = "";
                                    r.type = "";
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    r.schemaUrl = e.schemaUrl;
                                }
                                if (e.type != null && e.hasOwnProperty("type")) {
                                    r.type = e.type;
                                }
                                if (e.idKeys && e.idKeys.length) {
                                    r.idKeys = [];
                                    for(var n = 0; n < e.idKeys.length; ++n){
                                        r.idKeys[n] = e.idKeys[n];
                                    }
                                }
                                if (e.descriptionKeys && e.descriptionKeys.length) {
                                    r.descriptionKeys = [];
                                    for(var n = 0; n < e.descriptionKeys.length; ++n){
                                        r.descriptionKeys[n] = e.descriptionKeys[n];
                                    }
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.common.v1.EntityRef`;
                            }
                        }
                        i.prototype.schemaUrl = null;
                        i.prototype.type = null;
                        i.prototype.idKeys = util.emptyArray;
                        i.prototype.descriptionKeys = util.emptyArray;
                        return i;
                    }();
                    return d;
                })();
                return f;
            })();
            u.resource = (()=>{
                const f = {};
                f.v1 = (()=>{
                    const d = {};
                    d.Resource = function() {
                        class i {
                            constructor(o){
                                this.attributes = [];
                                this.entityRefs = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.attributes != null && e.attributes.length) {
                                    for(var r = 0; r < e.attributes.length; ++r){
                                        a.opentelemetry.proto.common.v1.KeyValue.encode(e.attributes[r], t.uint32(10).fork()).ldelim();
                                    }
                                }
                                if (e.droppedAttributesCount != null && Object.hasOwnProperty.call(e, "droppedAttributesCount")) {
                                    t.uint32(16).uint32(e.droppedAttributesCount);
                                }
                                if (e.entityRefs != null && e.entityRefs.length) {
                                    for(var r = 0; r < e.entityRefs.length; ++r){
                                        a.opentelemetry.proto.common.v1.EntityRef.encode(e.entityRefs[r], t.uint32(26).fork()).ldelim();
                                    }
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.resource.v1.Resource;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                if (!(c.attributes && c.attributes.length)) {
                                                    c.attributes = [];
                                                }
                                                c.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 2:
                                            {
                                                c.droppedAttributesCount = e.uint32();
                                                break;
                                            }
                                        case 3:
                                            {
                                                if (!(c.entityRefs && c.entityRefs.length)) {
                                                    c.entityRefs = [];
                                                }
                                                c.entityRefs.push(a.opentelemetry.proto.common.v1.EntityRef.decode(e, e.uint32()));
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.attributes != null && e.hasOwnProperty("attributes")) {
                                    if (!Array.isArray(e.attributes)) {
                                        return "attributes: array expected";
                                    }
                                    for(var t = 0; t < e.attributes.length; ++t){
                                        var r = a.opentelemetry.proto.common.v1.KeyValue.verify(e.attributes[t]);
                                        if (r) {
                                            return `attributes.${r}`;
                                        }
                                    }
                                }
                                if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) {
                                    if (!util.isInteger(e.droppedAttributesCount)) {
                                        return "droppedAttributesCount: integer expected";
                                    }
                                }
                                if (e.entityRefs != null && e.hasOwnProperty("entityRefs")) {
                                    if (!Array.isArray(e.entityRefs)) {
                                        return "entityRefs: array expected";
                                    }
                                    for(var t = 0; t < e.entityRefs.length; ++t){
                                        var r = a.opentelemetry.proto.common.v1.EntityRef.verify(e.entityRefs[t]);
                                        if (r) {
                                            return `entityRefs.${r}`;
                                        }
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.resource.v1.Resource) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.resource.v1.Resource;
                                if (e.attributes) {
                                    if (!Array.isArray(e.attributes)) {
                                        throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: array expected");
                                    }
                                    t.attributes = [];
                                    for(var r = 0; r < e.attributes.length; ++r){
                                        if (typeof e.attributes[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: object expected");
                                        }
                                        t.attributes[r] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(e.attributes[r]);
                                    }
                                }
                                if (e.droppedAttributesCount != null) {
                                    t.droppedAttributesCount = e.droppedAttributesCount >>> 0;
                                }
                                if (e.entityRefs) {
                                    if (!Array.isArray(e.entityRefs)) {
                                        throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: array expected");
                                    }
                                    t.entityRefs = [];
                                    for(var r = 0; r < e.entityRefs.length; ++r){
                                        if (typeof e.entityRefs[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: object expected");
                                        }
                                        t.entityRefs[r] = a.opentelemetry.proto.common.v1.EntityRef.fromObject(e.entityRefs[r]);
                                    }
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.attributes = [];
                                    r.entityRefs = [];
                                }
                                if (t.defaults) {
                                    r.droppedAttributesCount = 0;
                                }
                                if (e.attributes && e.attributes.length) {
                                    r.attributes = [];
                                    for(var n = 0; n < e.attributes.length; ++n){
                                        r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.toObject(e.attributes[n], t);
                                    }
                                }
                                if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) {
                                    r.droppedAttributesCount = e.droppedAttributesCount;
                                }
                                if (e.entityRefs && e.entityRefs.length) {
                                    r.entityRefs = [];
                                    for(var n = 0; n < e.entityRefs.length; ++n){
                                        r.entityRefs[n] = a.opentelemetry.proto.common.v1.EntityRef.toObject(e.entityRefs[n], t);
                                    }
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.resource.v1.Resource`;
                            }
                        }
                        i.prototype.attributes = util.emptyArray;
                        i.prototype.droppedAttributesCount = null;
                        i.prototype.entityRefs = util.emptyArray;
                        return i;
                    }();
                    return d;
                })();
                return f;
            })();
            u.trace = (()=>{
                const f = {};
                f.v1 = (()=>{
                    const d = {};
                    d.TracesData = function() {
                        class i {
                            constructor(o){
                                this.resourceSpans = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.resourceSpans != null && e.resourceSpans.length) {
                                    for(let r = 0; r < e.resourceSpans.length; ++r){
                                        a.opentelemetry.proto.trace.v1.ResourceSpans.encode(e.resourceSpans[r], t.uint32(10).fork()).ldelim();
                                    }
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.trace.v1.TracesData;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                if (!(c.resourceSpans && c.resourceSpans.length)) {
                                                    c.resourceSpans = [];
                                                }
                                                c.resourceSpans.push(a.opentelemetry.proto.trace.v1.ResourceSpans.decode(e, e.uint32()));
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.resourceSpans != null && e.hasOwnProperty("resourceSpans")) {
                                    if (!Array.isArray(e.resourceSpans)) {
                                        return "resourceSpans: array expected";
                                    }
                                    for(let t = 0; t < e.resourceSpans.length; ++t){
                                        const r = a.opentelemetry.proto.trace.v1.ResourceSpans.verify(e.resourceSpans[t]);
                                        if (r) {
                                            return `resourceSpans.${r}`;
                                        }
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.trace.v1.TracesData) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.trace.v1.TracesData;
                                if (e.resourceSpans) {
                                    if (!Array.isArray(e.resourceSpans)) {
                                        throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: array expected");
                                    }
                                    t.resourceSpans = [];
                                    for(let r = 0; r < e.resourceSpans.length; ++r){
                                        if (typeof e.resourceSpans[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: object expected");
                                        }
                                        t.resourceSpans[r] = a.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(e.resourceSpans[r]);
                                    }
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.resourceSpans = [];
                                }
                                if (e.resourceSpans && e.resourceSpans.length) {
                                    r.resourceSpans = [];
                                    for(let n = 0; n < e.resourceSpans.length; ++n){
                                        r.resourceSpans[n] = a.opentelemetry.proto.trace.v1.ResourceSpans.toObject(e.resourceSpans[n], t);
                                    }
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.trace.v1.TracesData`;
                            }
                        }
                        i.prototype.resourceSpans = util.emptyArray;
                        return i;
                    }();
                    d.ResourceSpans = function() {
                        class i {
                            constructor(o){
                                this.scopeSpans = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.resource != null && Object.hasOwnProperty.call(e, "resource")) {
                                    a.opentelemetry.proto.resource.v1.Resource.encode(e.resource, t.uint32(10).fork()).ldelim();
                                }
                                if (e.scopeSpans != null && e.scopeSpans.length) {
                                    for(let r = 0; r < e.scopeSpans.length; ++r){
                                        a.opentelemetry.proto.trace.v1.ScopeSpans.encode(e.scopeSpans[r], t.uint32(18).fork()).ldelim();
                                    }
                                }
                                if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) {
                                    t.uint32(26).string(e.schemaUrl);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.trace.v1.ResourceSpans;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                c.resource = a.opentelemetry.proto.resource.v1.Resource.decode(e, e.uint32());
                                                break;
                                            }
                                        case 2:
                                            {
                                                if (!(c.scopeSpans && c.scopeSpans.length)) {
                                                    c.scopeSpans = [];
                                                }
                                                c.scopeSpans.push(a.opentelemetry.proto.trace.v1.ScopeSpans.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 3:
                                            {
                                                c.schemaUrl = e.string();
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.resource != null && e.hasOwnProperty("resource")) {
                                    var t = a.opentelemetry.proto.resource.v1.Resource.verify(e.resource);
                                    if (t) {
                                        return `resource.${t}`;
                                    }
                                }
                                if (e.scopeSpans != null && e.hasOwnProperty("scopeSpans")) {
                                    if (!Array.isArray(e.scopeSpans)) {
                                        return "scopeSpans: array expected";
                                    }
                                    for(let r = 0; r < e.scopeSpans.length; ++r){
                                        var t = a.opentelemetry.proto.trace.v1.ScopeSpans.verify(e.scopeSpans[r]);
                                        if (t) {
                                            return `scopeSpans.${t}`;
                                        }
                                    }
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    if (!util.isString(e.schemaUrl)) {
                                        return "schemaUrl: string expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.trace.v1.ResourceSpans) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.trace.v1.ResourceSpans;
                                if (e.resource != null) {
                                    if (typeof e.resource !== "object") {
                                        throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.resource: object expected");
                                    }
                                    t.resource = a.opentelemetry.proto.resource.v1.Resource.fromObject(e.resource);
                                }
                                if (e.scopeSpans) {
                                    if (!Array.isArray(e.scopeSpans)) {
                                        throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: array expected");
                                    }
                                    t.scopeSpans = [];
                                    for(let r = 0; r < e.scopeSpans.length; ++r){
                                        if (typeof e.scopeSpans[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: object expected");
                                        }
                                        t.scopeSpans[r] = a.opentelemetry.proto.trace.v1.ScopeSpans.fromObject(e.scopeSpans[r]);
                                    }
                                }
                                if (e.schemaUrl != null) {
                                    t.schemaUrl = String(e.schemaUrl);
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.scopeSpans = [];
                                }
                                if (t.defaults) {
                                    r.resource = null;
                                    r.schemaUrl = "";
                                }
                                if (e.resource != null && e.hasOwnProperty("resource")) {
                                    r.resource = a.opentelemetry.proto.resource.v1.Resource.toObject(e.resource, t);
                                }
                                if (e.scopeSpans && e.scopeSpans.length) {
                                    r.scopeSpans = [];
                                    for(let n = 0; n < e.scopeSpans.length; ++n){
                                        r.scopeSpans[n] = a.opentelemetry.proto.trace.v1.ScopeSpans.toObject(e.scopeSpans[n], t);
                                    }
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    r.schemaUrl = e.schemaUrl;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.trace.v1.ResourceSpans`;
                            }
                        }
                        i.prototype.resource = null;
                        i.prototype.scopeSpans = util.emptyArray;
                        i.prototype.schemaUrl = null;
                        return i;
                    }();
                    d.ScopeSpans = function() {
                        class i {
                            constructor(o){
                                this.spans = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.scope != null && Object.hasOwnProperty.call(e, "scope")) {
                                    a.opentelemetry.proto.common.v1.InstrumentationScope.encode(e.scope, t.uint32(10).fork()).ldelim();
                                }
                                if (e.spans != null && e.spans.length) {
                                    for(let r = 0; r < e.spans.length; ++r){
                                        a.opentelemetry.proto.trace.v1.Span.encode(e.spans[r], t.uint32(18).fork()).ldelim();
                                    }
                                }
                                if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) {
                                    t.uint32(26).string(e.schemaUrl);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.trace.v1.ScopeSpans;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                c.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.decode(e, e.uint32());
                                                break;
                                            }
                                        case 2:
                                            {
                                                if (!(c.spans && c.spans.length)) {
                                                    c.spans = [];
                                                }
                                                c.spans.push(a.opentelemetry.proto.trace.v1.Span.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 3:
                                            {
                                                c.schemaUrl = e.string();
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.scope != null && e.hasOwnProperty("scope")) {
                                    var t = a.opentelemetry.proto.common.v1.InstrumentationScope.verify(e.scope);
                                    if (t) {
                                        return `scope.${t}`;
                                    }
                                }
                                if (e.spans != null && e.hasOwnProperty("spans")) {
                                    if (!Array.isArray(e.spans)) {
                                        return "spans: array expected";
                                    }
                                    for(let r = 0; r < e.spans.length; ++r){
                                        var t = a.opentelemetry.proto.trace.v1.Span.verify(e.spans[r]);
                                        if (t) {
                                            return `spans.${t}`;
                                        }
                                    }
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    if (!util.isString(e.schemaUrl)) {
                                        return "schemaUrl: string expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.trace.v1.ScopeSpans) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.trace.v1.ScopeSpans;
                                if (e.scope != null) {
                                    if (typeof e.scope !== "object") {
                                        throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.scope: object expected");
                                    }
                                    t.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(e.scope);
                                }
                                if (e.spans) {
                                    if (!Array.isArray(e.spans)) {
                                        throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: array expected");
                                    }
                                    t.spans = [];
                                    for(let r = 0; r < e.spans.length; ++r){
                                        if (typeof e.spans[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: object expected");
                                        }
                                        t.spans[r] = a.opentelemetry.proto.trace.v1.Span.fromObject(e.spans[r]);
                                    }
                                }
                                if (e.schemaUrl != null) {
                                    t.schemaUrl = String(e.schemaUrl);
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.spans = [];
                                }
                                if (t.defaults) {
                                    r.scope = null;
                                    r.schemaUrl = "";
                                }
                                if (e.scope != null && e.hasOwnProperty("scope")) {
                                    r.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.toObject(e.scope, t);
                                }
                                if (e.spans && e.spans.length) {
                                    r.spans = [];
                                    for(let n = 0; n < e.spans.length; ++n){
                                        r.spans[n] = a.opentelemetry.proto.trace.v1.Span.toObject(e.spans[n], t);
                                    }
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    r.schemaUrl = e.schemaUrl;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.trace.v1.ScopeSpans`;
                            }
                        }
                        i.prototype.scope = null;
                        i.prototype.spans = util.emptyArray;
                        i.prototype.schemaUrl = null;
                        return i;
                    }();
                    d.Span = function() {
                        class i {
                            constructor(o){
                                this.attributes = [];
                                this.events = [];
                                this.links = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.traceId != null && Object.hasOwnProperty.call(e, "traceId")) {
                                    t.uint32(10).bytes(e.traceId);
                                }
                                if (e.spanId != null && Object.hasOwnProperty.call(e, "spanId")) {
                                    t.uint32(18).bytes(e.spanId);
                                }
                                if (e.traceState != null && Object.hasOwnProperty.call(e, "traceState")) {
                                    t.uint32(26).string(e.traceState);
                                }
                                if (e.parentSpanId != null && Object.hasOwnProperty.call(e, "parentSpanId")) {
                                    t.uint32(34).bytes(e.parentSpanId);
                                }
                                if (e.name != null && Object.hasOwnProperty.call(e, "name")) {
                                    t.uint32(42).string(e.name);
                                }
                                if (e.kind != null && Object.hasOwnProperty.call(e, "kind")) {
                                    t.uint32(48).int32(e.kind);
                                }
                                if (e.startTimeUnixNano != null && Object.hasOwnProperty.call(e, "startTimeUnixNano")) {
                                    t.uint32(57).fixed64(e.startTimeUnixNano);
                                }
                                if (e.endTimeUnixNano != null && Object.hasOwnProperty.call(e, "endTimeUnixNano")) {
                                    t.uint32(65).fixed64(e.endTimeUnixNano);
                                }
                                if (e.attributes != null && e.attributes.length) {
                                    for(var r = 0; r < e.attributes.length; ++r){
                                        a.opentelemetry.proto.common.v1.KeyValue.encode(e.attributes[r], t.uint32(74).fork()).ldelim();
                                    }
                                }
                                if (e.droppedAttributesCount != null && Object.hasOwnProperty.call(e, "droppedAttributesCount")) {
                                    t.uint32(80).uint32(e.droppedAttributesCount);
                                }
                                if (e.events != null && e.events.length) {
                                    for(var r = 0; r < e.events.length; ++r){
                                        a.opentelemetry.proto.trace.v1.Span.Event.encode(e.events[r], t.uint32(90).fork()).ldelim();
                                    }
                                }
                                if (e.droppedEventsCount != null && Object.hasOwnProperty.call(e, "droppedEventsCount")) {
                                    t.uint32(96).uint32(e.droppedEventsCount);
                                }
                                if (e.links != null && e.links.length) {
                                    for(var r = 0; r < e.links.length; ++r){
                                        a.opentelemetry.proto.trace.v1.Span.Link.encode(e.links[r], t.uint32(106).fork()).ldelim();
                                    }
                                }
                                if (e.droppedLinksCount != null && Object.hasOwnProperty.call(e, "droppedLinksCount")) {
                                    t.uint32(112).uint32(e.droppedLinksCount);
                                }
                                if (e.status != null && Object.hasOwnProperty.call(e, "status")) {
                                    a.opentelemetry.proto.trace.v1.Status.encode(e.status, t.uint32(122).fork()).ldelim();
                                }
                                if (e.flags != null && Object.hasOwnProperty.call(e, "flags")) {
                                    t.uint32(133).fixed32(e.flags);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.trace.v1.Span;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                c.traceId = e.bytes();
                                                break;
                                            }
                                        case 2:
                                            {
                                                c.spanId = e.bytes();
                                                break;
                                            }
                                        case 3:
                                            {
                                                c.traceState = e.string();
                                                break;
                                            }
                                        case 4:
                                            {
                                                c.parentSpanId = e.bytes();
                                                break;
                                            }
                                        case 16:
                                            {
                                                c.flags = e.fixed32();
                                                break;
                                            }
                                        case 5:
                                            {
                                                c.name = e.string();
                                                break;
                                            }
                                        case 6:
                                            {
                                                c.kind = e.int32();
                                                break;
                                            }
                                        case 7:
                                            {
                                                c.startTimeUnixNano = e.fixed64();
                                                break;
                                            }
                                        case 8:
                                            {
                                                c.endTimeUnixNano = e.fixed64();
                                                break;
                                            }
                                        case 9:
                                            {
                                                if (!(c.attributes && c.attributes.length)) {
                                                    c.attributes = [];
                                                }
                                                c.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 10:
                                            {
                                                c.droppedAttributesCount = e.uint32();
                                                break;
                                            }
                                        case 11:
                                            {
                                                if (!(c.events && c.events.length)) {
                                                    c.events = [];
                                                }
                                                c.events.push(a.opentelemetry.proto.trace.v1.Span.Event.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 12:
                                            {
                                                c.droppedEventsCount = e.uint32();
                                                break;
                                            }
                                        case 13:
                                            {
                                                if (!(c.links && c.links.length)) {
                                                    c.links = [];
                                                }
                                                c.links.push(a.opentelemetry.proto.trace.v1.Span.Link.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 14:
                                            {
                                                c.droppedLinksCount = e.uint32();
                                                break;
                                            }
                                        case 15:
                                            {
                                                c.status = a.opentelemetry.proto.trace.v1.Status.decode(e, e.uint32());
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.traceId != null && e.hasOwnProperty("traceId")) {
                                    if (!(e.traceId && typeof e.traceId.length === "number" || util.isString(e.traceId))) {
                                        return "traceId: buffer expected";
                                    }
                                }
                                if (e.spanId != null && e.hasOwnProperty("spanId")) {
                                    if (!(e.spanId && typeof e.spanId.length === "number" || util.isString(e.spanId))) {
                                        return "spanId: buffer expected";
                                    }
                                }
                                if (e.traceState != null && e.hasOwnProperty("traceState")) {
                                    if (!util.isString(e.traceState)) {
                                        return "traceState: string expected";
                                    }
                                }
                                if (e.parentSpanId != null && e.hasOwnProperty("parentSpanId")) {
                                    if (!(e.parentSpanId && typeof e.parentSpanId.length === "number" || util.isString(e.parentSpanId))) {
                                        return "parentSpanId: buffer expected";
                                    }
                                }
                                if (e.flags != null && e.hasOwnProperty("flags")) {
                                    if (!util.isInteger(e.flags)) {
                                        return "flags: integer expected";
                                    }
                                }
                                if (e.name != null && e.hasOwnProperty("name")) {
                                    if (!util.isString(e.name)) {
                                        return "name: string expected";
                                    }
                                }
                                if (e.kind != null && e.hasOwnProperty("kind")) {
                                    switch(e.kind){
                                        default:
                                            return "kind: enum value expected";
                                        case 0:
                                        case 1:
                                        case 2:
                                        case 3:
                                        case 4:
                                        case 5:
                                            break;
                                    }
                                }
                                if (e.startTimeUnixNano != null && e.hasOwnProperty("startTimeUnixNano")) {
                                    if (!util.isInteger(e.startTimeUnixNano) && !(e.startTimeUnixNano && util.isInteger(e.startTimeUnixNano.low) && util.isInteger(e.startTimeUnixNano.high))) {
                                        return "startTimeUnixNano: integer|Long expected";
                                    }
                                }
                                if (e.endTimeUnixNano != null && e.hasOwnProperty("endTimeUnixNano")) {
                                    if (!util.isInteger(e.endTimeUnixNano) && !(e.endTimeUnixNano && util.isInteger(e.endTimeUnixNano.low) && util.isInteger(e.endTimeUnixNano.high))) {
                                        return "endTimeUnixNano: integer|Long expected";
                                    }
                                }
                                if (e.attributes != null && e.hasOwnProperty("attributes")) {
                                    if (!Array.isArray(e.attributes)) {
                                        return "attributes: array expected";
                                    }
                                    for(var t = 0; t < e.attributes.length; ++t){
                                        var r = a.opentelemetry.proto.common.v1.KeyValue.verify(e.attributes[t]);
                                        if (r) {
                                            return `attributes.${r}`;
                                        }
                                    }
                                }
                                if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) {
                                    if (!util.isInteger(e.droppedAttributesCount)) {
                                        return "droppedAttributesCount: integer expected";
                                    }
                                }
                                if (e.events != null && e.hasOwnProperty("events")) {
                                    if (!Array.isArray(e.events)) {
                                        return "events: array expected";
                                    }
                                    for(var t = 0; t < e.events.length; ++t){
                                        var r = a.opentelemetry.proto.trace.v1.Span.Event.verify(e.events[t]);
                                        if (r) {
                                            return `events.${r}`;
                                        }
                                    }
                                }
                                if (e.droppedEventsCount != null && e.hasOwnProperty("droppedEventsCount")) {
                                    if (!util.isInteger(e.droppedEventsCount)) {
                                        return "droppedEventsCount: integer expected";
                                    }
                                }
                                if (e.links != null && e.hasOwnProperty("links")) {
                                    if (!Array.isArray(e.links)) {
                                        return "links: array expected";
                                    }
                                    for(var t = 0; t < e.links.length; ++t){
                                        var r = a.opentelemetry.proto.trace.v1.Span.Link.verify(e.links[t]);
                                        if (r) {
                                            return `links.${r}`;
                                        }
                                    }
                                }
                                if (e.droppedLinksCount != null && e.hasOwnProperty("droppedLinksCount")) {
                                    if (!util.isInteger(e.droppedLinksCount)) {
                                        return "droppedLinksCount: integer expected";
                                    }
                                }
                                if (e.status != null && e.hasOwnProperty("status")) {
                                    var r = a.opentelemetry.proto.trace.v1.Status.verify(e.status);
                                    if (r) {
                                        return `status.${r}`;
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.trace.v1.Span) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.trace.v1.Span;
                                if (e.traceId != null) {
                                    if (typeof e.traceId === "string") {
                                        util.base64.decode(e.traceId, t.traceId = util.newBuffer(util.base64.length(e.traceId)), 0);
                                    } else if (e.traceId.length >= 0) {
                                        t.traceId = e.traceId;
                                    }
                                }
                                if (e.spanId != null) {
                                    if (typeof e.spanId === "string") {
                                        util.base64.decode(e.spanId, t.spanId = util.newBuffer(util.base64.length(e.spanId)), 0);
                                    } else if (e.spanId.length >= 0) {
                                        t.spanId = e.spanId;
                                    }
                                }
                                if (e.traceState != null) {
                                    t.traceState = String(e.traceState);
                                }
                                if (e.parentSpanId != null) {
                                    if (typeof e.parentSpanId === "string") {
                                        util.base64.decode(e.parentSpanId, t.parentSpanId = util.newBuffer(util.base64.length(e.parentSpanId)), 0);
                                    } else if (e.parentSpanId.length >= 0) {
                                        t.parentSpanId = e.parentSpanId;
                                    }
                                }
                                if (e.flags != null) {
                                    t.flags = e.flags >>> 0;
                                }
                                if (e.name != null) {
                                    t.name = String(e.name);
                                }
                                switch(e.kind){
                                    default:
                                        if (typeof e.kind === "number") {
                                            t.kind = e.kind;
                                            break;
                                        }
                                        break;
                                    case "SPAN_KIND_UNSPECIFIED":
                                    case 0:
                                        t.kind = 0;
                                        break;
                                    case "SPAN_KIND_INTERNAL":
                                    case 1:
                                        t.kind = 1;
                                        break;
                                    case "SPAN_KIND_SERVER":
                                    case 2:
                                        t.kind = 2;
                                        break;
                                    case "SPAN_KIND_CLIENT":
                                    case 3:
                                        t.kind = 3;
                                        break;
                                    case "SPAN_KIND_PRODUCER":
                                    case 4:
                                        t.kind = 4;
                                        break;
                                    case "SPAN_KIND_CONSUMER":
                                    case 5:
                                        t.kind = 5;
                                        break;
                                }
                                if (e.startTimeUnixNano != null) {
                                    if (util.Long) {
                                        (t.startTimeUnixNano = util.Long.fromValue(e.startTimeUnixNano)).unsigned = false;
                                    } else if (typeof e.startTimeUnixNano === "string") {
                                        t.startTimeUnixNano = parseInt(e.startTimeUnixNano, 10);
                                    } else if (typeof e.startTimeUnixNano === "number") {
                                        t.startTimeUnixNano = e.startTimeUnixNano;
                                    } else if (typeof e.startTimeUnixNano === "object") {
                                        t.startTimeUnixNano = new util.LongBits(e.startTimeUnixNano.low >>> 0, e.startTimeUnixNano.high >>> 0).toNumber();
                                    }
                                }
                                if (e.endTimeUnixNano != null) {
                                    if (util.Long) {
                                        (t.endTimeUnixNano = util.Long.fromValue(e.endTimeUnixNano)).unsigned = false;
                                    } else if (typeof e.endTimeUnixNano === "string") {
                                        t.endTimeUnixNano = parseInt(e.endTimeUnixNano, 10);
                                    } else if (typeof e.endTimeUnixNano === "number") {
                                        t.endTimeUnixNano = e.endTimeUnixNano;
                                    } else if (typeof e.endTimeUnixNano === "object") {
                                        t.endTimeUnixNano = new util.LongBits(e.endTimeUnixNano.low >>> 0, e.endTimeUnixNano.high >>> 0).toNumber();
                                    }
                                }
                                if (e.attributes) {
                                    if (!Array.isArray(e.attributes)) {
                                        throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: array expected");
                                    }
                                    t.attributes = [];
                                    for(var r = 0; r < e.attributes.length; ++r){
                                        if (typeof e.attributes[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: object expected");
                                        }
                                        t.attributes[r] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(e.attributes[r]);
                                    }
                                }
                                if (e.droppedAttributesCount != null) {
                                    t.droppedAttributesCount = e.droppedAttributesCount >>> 0;
                                }
                                if (e.events) {
                                    if (!Array.isArray(e.events)) {
                                        throw TypeError(".opentelemetry.proto.trace.v1.Span.events: array expected");
                                    }
                                    t.events = [];
                                    for(var r = 0; r < e.events.length; ++r){
                                        if (typeof e.events[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.trace.v1.Span.events: object expected");
                                        }
                                        t.events[r] = a.opentelemetry.proto.trace.v1.Span.Event.fromObject(e.events[r]);
                                    }
                                }
                                if (e.droppedEventsCount != null) {
                                    t.droppedEventsCount = e.droppedEventsCount >>> 0;
                                }
                                if (e.links) {
                                    if (!Array.isArray(e.links)) {
                                        throw TypeError(".opentelemetry.proto.trace.v1.Span.links: array expected");
                                    }
                                    t.links = [];
                                    for(var r = 0; r < e.links.length; ++r){
                                        if (typeof e.links[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.trace.v1.Span.links: object expected");
                                        }
                                        t.links[r] = a.opentelemetry.proto.trace.v1.Span.Link.fromObject(e.links[r]);
                                    }
                                }
                                if (e.droppedLinksCount != null) {
                                    t.droppedLinksCount = e.droppedLinksCount >>> 0;
                                }
                                if (e.status != null) {
                                    if (typeof e.status !== "object") {
                                        throw TypeError(".opentelemetry.proto.trace.v1.Span.status: object expected");
                                    }
                                    t.status = a.opentelemetry.proto.trace.v1.Status.fromObject(e.status);
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.attributes = [];
                                    r.events = [];
                                    r.links = [];
                                }
                                if (t.defaults) {
                                    if (t.bytes === String) {
                                        r.traceId = "";
                                    } else {
                                        r.traceId = [];
                                        if (t.bytes !== Array) {
                                            r.traceId = util.newBuffer(r.traceId);
                                        }
                                    }
                                    if (t.bytes === String) {
                                        r.spanId = "";
                                    } else {
                                        r.spanId = [];
                                        if (t.bytes !== Array) {
                                            r.spanId = util.newBuffer(r.spanId);
                                        }
                                    }
                                    r.traceState = "";
                                    if (t.bytes === String) {
                                        r.parentSpanId = "";
                                    } else {
                                        r.parentSpanId = [];
                                        if (t.bytes !== Array) {
                                            r.parentSpanId = util.newBuffer(r.parentSpanId);
                                        }
                                    }
                                    r.name = "";
                                    r.kind = t.enums === String ? "SPAN_KIND_UNSPECIFIED" : 0;
                                    if (util.Long) {
                                        var n = new util.Long(0, 0, false);
                                        r.startTimeUnixNano = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                                    } else {
                                        r.startTimeUnixNano = t.longs === String ? "0" : 0;
                                    }
                                    if (util.Long) {
                                        var n = new util.Long(0, 0, false);
                                        r.endTimeUnixNano = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                                    } else {
                                        r.endTimeUnixNano = t.longs === String ? "0" : 0;
                                    }
                                    r.droppedAttributesCount = 0;
                                    r.droppedEventsCount = 0;
                                    r.droppedLinksCount = 0;
                                    r.status = null;
                                    r.flags = 0;
                                }
                                if (e.traceId != null && e.hasOwnProperty("traceId")) {
                                    r.traceId = t.bytes === String ? util.base64.encode(e.traceId, 0, e.traceId.length) : t.bytes === Array ? Array.prototype.slice.call(e.traceId) : e.traceId;
                                }
                                if (e.spanId != null && e.hasOwnProperty("spanId")) {
                                    r.spanId = t.bytes === String ? util.base64.encode(e.spanId, 0, e.spanId.length) : t.bytes === Array ? Array.prototype.slice.call(e.spanId) : e.spanId;
                                }
                                if (e.traceState != null && e.hasOwnProperty("traceState")) {
                                    r.traceState = e.traceState;
                                }
                                if (e.parentSpanId != null && e.hasOwnProperty("parentSpanId")) {
                                    r.parentSpanId = t.bytes === String ? util.base64.encode(e.parentSpanId, 0, e.parentSpanId.length) : t.bytes === Array ? Array.prototype.slice.call(e.parentSpanId) : e.parentSpanId;
                                }
                                if (e.name != null && e.hasOwnProperty("name")) {
                                    r.name = e.name;
                                }
                                if (e.kind != null && e.hasOwnProperty("kind")) {
                                    r.kind = t.enums === String ? a.opentelemetry.proto.trace.v1.Span.SpanKind[e.kind] === undefined ? e.kind : a.opentelemetry.proto.trace.v1.Span.SpanKind[e.kind] : e.kind;
                                }
                                if (e.startTimeUnixNano != null && e.hasOwnProperty("startTimeUnixNano")) {
                                    if (typeof e.startTimeUnixNano === "number") {
                                        r.startTimeUnixNano = t.longs === String ? String(e.startTimeUnixNano) : e.startTimeUnixNano;
                                    } else {
                                        r.startTimeUnixNano = t.longs === String ? util.Long.prototype.toString.call(e.startTimeUnixNano) : t.longs === Number ? new util.LongBits(e.startTimeUnixNano.low >>> 0, e.startTimeUnixNano.high >>> 0).toNumber() : e.startTimeUnixNano;
                                    }
                                }
                                if (e.endTimeUnixNano != null && e.hasOwnProperty("endTimeUnixNano")) {
                                    if (typeof e.endTimeUnixNano === "number") {
                                        r.endTimeUnixNano = t.longs === String ? String(e.endTimeUnixNano) : e.endTimeUnixNano;
                                    } else {
                                        r.endTimeUnixNano = t.longs === String ? util.Long.prototype.toString.call(e.endTimeUnixNano) : t.longs === Number ? new util.LongBits(e.endTimeUnixNano.low >>> 0, e.endTimeUnixNano.high >>> 0).toNumber() : e.endTimeUnixNano;
                                    }
                                }
                                if (e.attributes && e.attributes.length) {
                                    r.attributes = [];
                                    for(var c = 0; c < e.attributes.length; ++c){
                                        r.attributes[c] = a.opentelemetry.proto.common.v1.KeyValue.toObject(e.attributes[c], t);
                                    }
                                }
                                if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) {
                                    r.droppedAttributesCount = e.droppedAttributesCount;
                                }
                                if (e.events && e.events.length) {
                                    r.events = [];
                                    for(var c = 0; c < e.events.length; ++c){
                                        r.events[c] = a.opentelemetry.proto.trace.v1.Span.Event.toObject(e.events[c], t);
                                    }
                                }
                                if (e.droppedEventsCount != null && e.hasOwnProperty("droppedEventsCount")) {
                                    r.droppedEventsCount = e.droppedEventsCount;
                                }
                                if (e.links && e.links.length) {
                                    r.links = [];
                                    for(var c = 0; c < e.links.length; ++c){
                                        r.links[c] = a.opentelemetry.proto.trace.v1.Span.Link.toObject(e.links[c], t);
                                    }
                                }
                                if (e.droppedLinksCount != null && e.hasOwnProperty("droppedLinksCount")) {
                                    r.droppedLinksCount = e.droppedLinksCount;
                                }
                                if (e.status != null && e.hasOwnProperty("status")) {
                                    r.status = a.opentelemetry.proto.trace.v1.Status.toObject(e.status, t);
                                }
                                if (e.flags != null && e.hasOwnProperty("flags")) {
                                    r.flags = e.flags;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.trace.v1.Span`;
                            }
                        }
                        i.prototype.traceId = null;
                        i.prototype.spanId = null;
                        i.prototype.traceState = null;
                        i.prototype.parentSpanId = null;
                        i.prototype.flags = null;
                        i.prototype.name = null;
                        i.prototype.kind = null;
                        i.prototype.startTimeUnixNano = null;
                        i.prototype.endTimeUnixNano = null;
                        i.prototype.attributes = util.emptyArray;
                        i.prototype.droppedAttributesCount = null;
                        i.prototype.events = util.emptyArray;
                        i.prototype.droppedEventsCount = null;
                        i.prototype.links = util.emptyArray;
                        i.prototype.droppedLinksCount = null;
                        i.prototype.status = null;
                        i.SpanKind = (()=>{
                            const o = {};
                            const e = Object.create(o);
                            e[o[0] = "SPAN_KIND_UNSPECIFIED"] = 0;
                            e[o[1] = "SPAN_KIND_INTERNAL"] = 1;
                            e[o[2] = "SPAN_KIND_SERVER"] = 2;
                            e[o[3] = "SPAN_KIND_CLIENT"] = 3;
                            e[o[4] = "SPAN_KIND_PRODUCER"] = 4;
                            e[o[5] = "SPAN_KIND_CONSUMER"] = 5;
                            return e;
                        })();
                        i.Event = function() {
                            class o {
                                constructor(e){
                                    this.attributes = [];
                                    if (e) {
                                        for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                            if (e[t[r]] != null) {
                                                this[t[r]] = e[t[r]];
                                            }
                                        }
                                    }
                                }
                                static create(t) {
                                    return new o(t);
                                }
                                static encode(t, r) {
                                    if (!r) {
                                        r = Writer.create();
                                    }
                                    if (t.timeUnixNano != null && Object.hasOwnProperty.call(t, "timeUnixNano")) {
                                        r.uint32(9).fixed64(t.timeUnixNano);
                                    }
                                    if (t.name != null && Object.hasOwnProperty.call(t, "name")) {
                                        r.uint32(18).string(t.name);
                                    }
                                    if (t.attributes != null && t.attributes.length) {
                                        for(let n = 0; n < t.attributes.length; ++n){
                                            a.opentelemetry.proto.common.v1.KeyValue.encode(t.attributes[n], r.uint32(26).fork()).ldelim();
                                        }
                                    }
                                    if (t.droppedAttributesCount != null && Object.hasOwnProperty.call(t, "droppedAttributesCount")) {
                                        r.uint32(32).uint32(t.droppedAttributesCount);
                                    }
                                    return r;
                                }
                                static encodeDelimited(t, r) {
                                    return this.encode(t, r).ldelim();
                                }
                                static decode(t, r, n) {
                                    if (!(t instanceof Reader)) {
                                        t = Reader.create(t);
                                    }
                                    const c = r === undefined ? t.len : t.pos + r;
                                    const s = new a.opentelemetry.proto.trace.v1.Span.Event;
                                    while(t.pos < c){
                                        const m = t.uint32();
                                        if (m === n) {
                                            break;
                                        }
                                        switch(m >>> 3){
                                            case 1:
                                                {
                                                    s.timeUnixNano = t.fixed64();
                                                    break;
                                                }
                                            case 2:
                                                {
                                                    s.name = t.string();
                                                    break;
                                                }
                                            case 3:
                                                {
                                                    if (!(s.attributes && s.attributes.length)) {
                                                        s.attributes = [];
                                                    }
                                                    s.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                                                    break;
                                                }
                                            case 4:
                                                {
                                                    s.droppedAttributesCount = t.uint32();
                                                    break;
                                                }
                                            default:
                                                t.skipType(m & 7);
                                                break;
                                        }
                                    }
                                    return s;
                                }
                                static decodeDelimited(t) {
                                    if (!(t instanceof Reader)) {
                                        t = new Reader(t);
                                    }
                                    return this.decode(t, t.uint32());
                                }
                                static verify(t) {
                                    if (typeof t !== "object" || t === null) {
                                        return "object expected";
                                    }
                                    if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                                        if (!util.isInteger(t.timeUnixNano) && !(t.timeUnixNano && util.isInteger(t.timeUnixNano.low) && util.isInteger(t.timeUnixNano.high))) {
                                            return "timeUnixNano: integer|Long expected";
                                        }
                                    }
                                    if (t.name != null && t.hasOwnProperty("name")) {
                                        if (!util.isString(t.name)) {
                                            return "name: string expected";
                                        }
                                    }
                                    if (t.attributes != null && t.hasOwnProperty("attributes")) {
                                        if (!Array.isArray(t.attributes)) {
                                            return "attributes: array expected";
                                        }
                                        for(let r = 0; r < t.attributes.length; ++r){
                                            const n = a.opentelemetry.proto.common.v1.KeyValue.verify(t.attributes[r]);
                                            if (n) {
                                                return `attributes.${n}`;
                                            }
                                        }
                                    }
                                    if (t.droppedAttributesCount != null && t.hasOwnProperty("droppedAttributesCount")) {
                                        if (!util.isInteger(t.droppedAttributesCount)) {
                                            return "droppedAttributesCount: integer expected";
                                        }
                                    }
                                    return null;
                                }
                                static fromObject(t) {
                                    if (t instanceof a.opentelemetry.proto.trace.v1.Span.Event) {
                                        return t;
                                    }
                                    const r = new a.opentelemetry.proto.trace.v1.Span.Event;
                                    if (t.timeUnixNano != null) {
                                        if (util.Long) {
                                            (r.timeUnixNano = util.Long.fromValue(t.timeUnixNano)).unsigned = false;
                                        } else if (typeof t.timeUnixNano === "string") {
                                            r.timeUnixNano = parseInt(t.timeUnixNano, 10);
                                        } else if (typeof t.timeUnixNano === "number") {
                                            r.timeUnixNano = t.timeUnixNano;
                                        } else if (typeof t.timeUnixNano === "object") {
                                            r.timeUnixNano = new util.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber();
                                        }
                                    }
                                    if (t.name != null) {
                                        r.name = String(t.name);
                                    }
                                    if (t.attributes) {
                                        if (!Array.isArray(t.attributes)) {
                                            throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: array expected");
                                        }
                                        r.attributes = [];
                                        for(let n = 0; n < t.attributes.length; ++n){
                                            if (typeof t.attributes[n] !== "object") {
                                                throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: object expected");
                                            }
                                            r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.attributes[n]);
                                        }
                                    }
                                    if (t.droppedAttributesCount != null) {
                                        r.droppedAttributesCount = t.droppedAttributesCount >>> 0;
                                    }
                                    return r;
                                }
                                static toObject(t, r) {
                                    if (!r) {
                                        r = {};
                                    }
                                    const n = {};
                                    if (r.arrays || r.defaults) {
                                        n.attributes = [];
                                    }
                                    if (r.defaults) {
                                        if (util.Long) {
                                            const c = new util.Long(0, 0, false);
                                            n.timeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                        } else {
                                            n.timeUnixNano = r.longs === String ? "0" : 0;
                                        }
                                        n.name = "";
                                        n.droppedAttributesCount = 0;
                                    }
                                    if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                                        if (typeof t.timeUnixNano === "number") {
                                            n.timeUnixNano = r.longs === String ? String(t.timeUnixNano) : t.timeUnixNano;
                                        } else {
                                            n.timeUnixNano = r.longs === String ? util.Long.prototype.toString.call(t.timeUnixNano) : r.longs === Number ? new util.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber() : t.timeUnixNano;
                                        }
                                    }
                                    if (t.name != null && t.hasOwnProperty("name")) {
                                        n.name = t.name;
                                    }
                                    if (t.attributes && t.attributes.length) {
                                        n.attributes = [];
                                        for(let s = 0; s < t.attributes.length; ++s){
                                            n.attributes[s] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.attributes[s], r);
                                        }
                                    }
                                    if (t.droppedAttributesCount != null && t.hasOwnProperty("droppedAttributesCount")) {
                                        n.droppedAttributesCount = t.droppedAttributesCount;
                                    }
                                    return n;
                                }
                                toJSON() {
                                    return this.constructor.toObject(this, S.util.toJSONOptions);
                                }
                                static getTypeUrl(t = "type.googleapis.com") {
                                    return `${t}/opentelemetry.proto.trace.v1.Span.Event`;
                                }
                            }
                            o.prototype.timeUnixNano = null;
                            o.prototype.name = null;
                            o.prototype.attributes = util.emptyArray;
                            o.prototype.droppedAttributesCount = null;
                            return o;
                        }();
                        i.Link = function() {
                            class o {
                                constructor(e){
                                    this.attributes = [];
                                    if (e) {
                                        for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                            if (e[t[r]] != null) {
                                                this[t[r]] = e[t[r]];
                                            }
                                        }
                                    }
                                }
                                static create(t) {
                                    return new o(t);
                                }
                                static encode(t, r) {
                                    if (!r) {
                                        r = Writer.create();
                                    }
                                    if (t.traceId != null && Object.hasOwnProperty.call(t, "traceId")) {
                                        r.uint32(10).bytes(t.traceId);
                                    }
                                    if (t.spanId != null && Object.hasOwnProperty.call(t, "spanId")) {
                                        r.uint32(18).bytes(t.spanId);
                                    }
                                    if (t.traceState != null && Object.hasOwnProperty.call(t, "traceState")) {
                                        r.uint32(26).string(t.traceState);
                                    }
                                    if (t.attributes != null && t.attributes.length) {
                                        for(let n = 0; n < t.attributes.length; ++n){
                                            a.opentelemetry.proto.common.v1.KeyValue.encode(t.attributes[n], r.uint32(34).fork()).ldelim();
                                        }
                                    }
                                    if (t.droppedAttributesCount != null && Object.hasOwnProperty.call(t, "droppedAttributesCount")) {
                                        r.uint32(40).uint32(t.droppedAttributesCount);
                                    }
                                    if (t.flags != null && Object.hasOwnProperty.call(t, "flags")) {
                                        r.uint32(53).fixed32(t.flags);
                                    }
                                    return r;
                                }
                                static encodeDelimited(t, r) {
                                    return this.encode(t, r).ldelim();
                                }
                                static decode(t, r, n) {
                                    if (!(t instanceof Reader)) {
                                        t = Reader.create(t);
                                    }
                                    const c = r === undefined ? t.len : t.pos + r;
                                    const s = new a.opentelemetry.proto.trace.v1.Span.Link;
                                    while(t.pos < c){
                                        const m = t.uint32();
                                        if (m === n) {
                                            break;
                                        }
                                        switch(m >>> 3){
                                            case 1:
                                                {
                                                    s.traceId = t.bytes();
                                                    break;
                                                }
                                            case 2:
                                                {
                                                    s.spanId = t.bytes();
                                                    break;
                                                }
                                            case 3:
                                                {
                                                    s.traceState = t.string();
                                                    break;
                                                }
                                            case 4:
                                                {
                                                    if (!(s.attributes && s.attributes.length)) {
                                                        s.attributes = [];
                                                    }
                                                    s.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                                                    break;
                                                }
                                            case 5:
                                                {
                                                    s.droppedAttributesCount = t.uint32();
                                                    break;
                                                }
                                            case 6:
                                                {
                                                    s.flags = t.fixed32();
                                                    break;
                                                }
                                            default:
                                                t.skipType(m & 7);
                                                break;
                                        }
                                    }
                                    return s;
                                }
                                static decodeDelimited(t) {
                                    if (!(t instanceof Reader)) {
                                        t = new Reader(t);
                                    }
                                    return this.decode(t, t.uint32());
                                }
                                static verify(t) {
                                    if (typeof t !== "object" || t === null) {
                                        return "object expected";
                                    }
                                    if (t.traceId != null && t.hasOwnProperty("traceId")) {
                                        if (!(t.traceId && typeof t.traceId.length === "number" || util.isString(t.traceId))) {
                                            return "traceId: buffer expected";
                                        }
                                    }
                                    if (t.spanId != null && t.hasOwnProperty("spanId")) {
                                        if (!(t.spanId && typeof t.spanId.length === "number" || util.isString(t.spanId))) {
                                            return "spanId: buffer expected";
                                        }
                                    }
                                    if (t.traceState != null && t.hasOwnProperty("traceState")) {
                                        if (!util.isString(t.traceState)) {
                                            return "traceState: string expected";
                                        }
                                    }
                                    if (t.attributes != null && t.hasOwnProperty("attributes")) {
                                        if (!Array.isArray(t.attributes)) {
                                            return "attributes: array expected";
                                        }
                                        for(let r = 0; r < t.attributes.length; ++r){
                                            const n = a.opentelemetry.proto.common.v1.KeyValue.verify(t.attributes[r]);
                                            if (n) {
                                                return `attributes.${n}`;
                                            }
                                        }
                                    }
                                    if (t.droppedAttributesCount != null && t.hasOwnProperty("droppedAttributesCount")) {
                                        if (!util.isInteger(t.droppedAttributesCount)) {
                                            return "droppedAttributesCount: integer expected";
                                        }
                                    }
                                    if (t.flags != null && t.hasOwnProperty("flags")) {
                                        if (!util.isInteger(t.flags)) {
                                            return "flags: integer expected";
                                        }
                                    }
                                    return null;
                                }
                                static fromObject(t) {
                                    if (t instanceof a.opentelemetry.proto.trace.v1.Span.Link) {
                                        return t;
                                    }
                                    const r = new a.opentelemetry.proto.trace.v1.Span.Link;
                                    if (t.traceId != null) {
                                        if (typeof t.traceId === "string") {
                                            util.base64.decode(t.traceId, r.traceId = util.newBuffer(util.base64.length(t.traceId)), 0);
                                        } else if (t.traceId.length >= 0) {
                                            r.traceId = t.traceId;
                                        }
                                    }
                                    if (t.spanId != null) {
                                        if (typeof t.spanId === "string") {
                                            util.base64.decode(t.spanId, r.spanId = util.newBuffer(util.base64.length(t.spanId)), 0);
                                        } else if (t.spanId.length >= 0) {
                                            r.spanId = t.spanId;
                                        }
                                    }
                                    if (t.traceState != null) {
                                        r.traceState = String(t.traceState);
                                    }
                                    if (t.attributes) {
                                        if (!Array.isArray(t.attributes)) {
                                            throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: array expected");
                                        }
                                        r.attributes = [];
                                        for(let n = 0; n < t.attributes.length; ++n){
                                            if (typeof t.attributes[n] !== "object") {
                                                throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: object expected");
                                            }
                                            r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.attributes[n]);
                                        }
                                    }
                                    if (t.droppedAttributesCount != null) {
                                        r.droppedAttributesCount = t.droppedAttributesCount >>> 0;
                                    }
                                    if (t.flags != null) {
                                        r.flags = t.flags >>> 0;
                                    }
                                    return r;
                                }
                                static toObject(t, r) {
                                    if (!r) {
                                        r = {};
                                    }
                                    const n = {};
                                    if (r.arrays || r.defaults) {
                                        n.attributes = [];
                                    }
                                    if (r.defaults) {
                                        if (r.bytes === String) {
                                            n.traceId = "";
                                        } else {
                                            n.traceId = [];
                                            if (r.bytes !== Array) {
                                                n.traceId = util.newBuffer(n.traceId);
                                            }
                                        }
                                        if (r.bytes === String) {
                                            n.spanId = "";
                                        } else {
                                            n.spanId = [];
                                            if (r.bytes !== Array) {
                                                n.spanId = util.newBuffer(n.spanId);
                                            }
                                        }
                                        n.traceState = "";
                                        n.droppedAttributesCount = 0;
                                        n.flags = 0;
                                    }
                                    if (t.traceId != null && t.hasOwnProperty("traceId")) {
                                        n.traceId = r.bytes === String ? util.base64.encode(t.traceId, 0, t.traceId.length) : r.bytes === Array ? Array.prototype.slice.call(t.traceId) : t.traceId;
                                    }
                                    if (t.spanId != null && t.hasOwnProperty("spanId")) {
                                        n.spanId = r.bytes === String ? util.base64.encode(t.spanId, 0, t.spanId.length) : r.bytes === Array ? Array.prototype.slice.call(t.spanId) : t.spanId;
                                    }
                                    if (t.traceState != null && t.hasOwnProperty("traceState")) {
                                        n.traceState = t.traceState;
                                    }
                                    if (t.attributes && t.attributes.length) {
                                        n.attributes = [];
                                        for(let c = 0; c < t.attributes.length; ++c){
                                            n.attributes[c] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.attributes[c], r);
                                        }
                                    }
                                    if (t.droppedAttributesCount != null && t.hasOwnProperty("droppedAttributesCount")) {
                                        n.droppedAttributesCount = t.droppedAttributesCount;
                                    }
                                    if (t.flags != null && t.hasOwnProperty("flags")) {
                                        n.flags = t.flags;
                                    }
                                    return n;
                                }
                                toJSON() {
                                    return this.constructor.toObject(this, S.util.toJSONOptions);
                                }
                                static getTypeUrl(t = "type.googleapis.com") {
                                    return `${t}/opentelemetry.proto.trace.v1.Span.Link`;
                                }
                            }
                            o.prototype.traceId = null;
                            o.prototype.spanId = null;
                            o.prototype.traceState = null;
                            o.prototype.attributes = util.emptyArray;
                            o.prototype.droppedAttributesCount = null;
                            o.prototype.flags = null;
                            return o;
                        }();
                        return i;
                    }();
                    d.Status = function() {
                        class i {
                            constructor(o){
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.message != null && Object.hasOwnProperty.call(e, "message")) {
                                    t.uint32(18).string(e.message);
                                }
                                if (e.code != null && Object.hasOwnProperty.call(e, "code")) {
                                    t.uint32(24).int32(e.code);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.trace.v1.Status;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 2:
                                            {
                                                c.message = e.string();
                                                break;
                                            }
                                        case 3:
                                            {
                                                c.code = e.int32();
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.message != null && e.hasOwnProperty("message")) {
                                    if (!util.isString(e.message)) {
                                        return "message: string expected";
                                    }
                                }
                                if (e.code != null && e.hasOwnProperty("code")) {
                                    switch(e.code){
                                        default:
                                            return "code: enum value expected";
                                        case 0:
                                        case 1:
                                        case 2:
                                            break;
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.trace.v1.Status) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.trace.v1.Status;
                                if (e.message != null) {
                                    t.message = String(e.message);
                                }
                                switch(e.code){
                                    default:
                                        if (typeof e.code === "number") {
                                            t.code = e.code;
                                            break;
                                        }
                                        break;
                                    case "STATUS_CODE_UNSET":
                                    case 0:
                                        t.code = 0;
                                        break;
                                    case "STATUS_CODE_OK":
                                    case 1:
                                        t.code = 1;
                                        break;
                                    case "STATUS_CODE_ERROR":
                                    case 2:
                                        t.code = 2;
                                        break;
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.defaults) {
                                    r.message = "";
                                    r.code = t.enums === String ? "STATUS_CODE_UNSET" : 0;
                                }
                                if (e.message != null && e.hasOwnProperty("message")) {
                                    r.message = e.message;
                                }
                                if (e.code != null && e.hasOwnProperty("code")) {
                                    r.code = t.enums === String ? a.opentelemetry.proto.trace.v1.Status.StatusCode[e.code] === undefined ? e.code : a.opentelemetry.proto.trace.v1.Status.StatusCode[e.code] : e.code;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.trace.v1.Status`;
                            }
                        }
                        i.prototype.message = null;
                        i.prototype.code = null;
                        i.StatusCode = (()=>{
                            const o = {};
                            const e = Object.create(o);
                            e[o[0] = "STATUS_CODE_UNSET"] = 0;
                            e[o[1] = "STATUS_CODE_OK"] = 1;
                            e[o[2] = "STATUS_CODE_ERROR"] = 2;
                            return e;
                        })();
                        return i;
                    }();
                    d.SpanFlags = (()=>{
                        const i = {};
                        const o = Object.create(i);
                        o[i[0] = "SPAN_FLAGS_DO_NOT_USE"] = 0;
                        o[i[255] = "SPAN_FLAGS_TRACE_FLAGS_MASK"] = 255;
                        o[i[256] = "SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK"] = 256;
                        o[i[512] = "SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK"] = 512;
                        return o;
                    })();
                    return d;
                })();
                return f;
            })();
            u.collector = (()=>{
                const f = {};
                f.trace = (()=>{
                    const d = {};
                    d.v1 = (()=>{
                        const i = {};
                        i.TraceService = (()=>{
                            function o(e, t, r) {
                                S.rpc.Service.call(this, e, t, r);
                            }
                            (o.prototype = Object.create(S.rpc.Service.prototype)).constructor = o;
                            o.create = function(t, r, n) {
                                return new this(t, r, n);
                            };
                            Object.defineProperty(o.prototype.export = function e(t, r) {
                                return this.rpcCall(e, a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest, a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse, t, r);
                            }, "name", {
                                value: "Export"
                            });
                            return o;
                        })();
                        i.ExportTraceServiceRequest = function() {
                            class o {
                                constructor(e){
                                    this.resourceSpans = [];
                                    if (e) {
                                        for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                            if (e[t[r]] != null) {
                                                this[t[r]] = e[t[r]];
                                            }
                                        }
                                    }
                                }
                                static create(t) {
                                    return new o(t);
                                }
                                static encode(t, r) {
                                    if (!r) {
                                        r = Writer.create();
                                    }
                                    if (t.resourceSpans != null && t.resourceSpans.length) {
                                        for(let n = 0; n < t.resourceSpans.length; ++n){
                                            a.opentelemetry.proto.trace.v1.ResourceSpans.encode(t.resourceSpans[n], r.uint32(10).fork()).ldelim();
                                        }
                                    }
                                    return r;
                                }
                                static encodeDelimited(t, r) {
                                    return this.encode(t, r).ldelim();
                                }
                                static decode(t, r, n) {
                                    if (!(t instanceof Reader)) {
                                        t = Reader.create(t);
                                    }
                                    const c = r === undefined ? t.len : t.pos + r;
                                    const s = new a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
                                    while(t.pos < c){
                                        const m = t.uint32();
                                        if (m === n) {
                                            break;
                                        }
                                        switch(m >>> 3){
                                            case 1:
                                                {
                                                    if (!(s.resourceSpans && s.resourceSpans.length)) {
                                                        s.resourceSpans = [];
                                                    }
                                                    s.resourceSpans.push(a.opentelemetry.proto.trace.v1.ResourceSpans.decode(t, t.uint32()));
                                                    break;
                                                }
                                            default:
                                                t.skipType(m & 7);
                                                break;
                                        }
                                    }
                                    return s;
                                }
                                static decodeDelimited(t) {
                                    if (!(t instanceof Reader)) {
                                        t = new Reader(t);
                                    }
                                    return this.decode(t, t.uint32());
                                }
                                static verify(t) {
                                    if (typeof t !== "object" || t === null) {
                                        return "object expected";
                                    }
                                    if (t.resourceSpans != null && t.hasOwnProperty("resourceSpans")) {
                                        if (!Array.isArray(t.resourceSpans)) {
                                            return "resourceSpans: array expected";
                                        }
                                        for(let r = 0; r < t.resourceSpans.length; ++r){
                                            const n = a.opentelemetry.proto.trace.v1.ResourceSpans.verify(t.resourceSpans[r]);
                                            if (n) {
                                                return `resourceSpans.${n}`;
                                            }
                                        }
                                    }
                                    return null;
                                }
                                static fromObject(t) {
                                    if (t instanceof a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest) {
                                        return t;
                                    }
                                    const r = new a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
                                    if (t.resourceSpans) {
                                        if (!Array.isArray(t.resourceSpans)) {
                                            throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: array expected");
                                        }
                                        r.resourceSpans = [];
                                        for(let n = 0; n < t.resourceSpans.length; ++n){
                                            if (typeof t.resourceSpans[n] !== "object") {
                                                throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: object expected");
                                            }
                                            r.resourceSpans[n] = a.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(t.resourceSpans[n]);
                                        }
                                    }
                                    return r;
                                }
                                static toObject(t, r) {
                                    if (!r) {
                                        r = {};
                                    }
                                    const n = {};
                                    if (r.arrays || r.defaults) {
                                        n.resourceSpans = [];
                                    }
                                    if (t.resourceSpans && t.resourceSpans.length) {
                                        n.resourceSpans = [];
                                        for(let c = 0; c < t.resourceSpans.length; ++c){
                                            n.resourceSpans[c] = a.opentelemetry.proto.trace.v1.ResourceSpans.toObject(t.resourceSpans[c], r);
                                        }
                                    }
                                    return n;
                                }
                                toJSON() {
                                    return this.constructor.toObject(this, S.util.toJSONOptions);
                                }
                                static getTypeUrl(t = "type.googleapis.com") {
                                    return `${t}/opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest`;
                                }
                            }
                            o.prototype.resourceSpans = util.emptyArray;
                            return o;
                        }();
                        i.ExportTraceServiceResponse = function() {
                            class o {
                                constructor(e){
                                    if (e) {
                                        for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                            if (e[t[r]] != null) {
                                                this[t[r]] = e[t[r]];
                                            }
                                        }
                                    }
                                }
                                static create(t) {
                                    return new o(t);
                                }
                                static encode(t, r) {
                                    if (!r) {
                                        r = Writer.create();
                                    }
                                    if (t.partialSuccess != null && Object.hasOwnProperty.call(t, "partialSuccess")) {
                                        a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.encode(t.partialSuccess, r.uint32(10).fork()).ldelim();
                                    }
                                    return r;
                                }
                                static encodeDelimited(t, r) {
                                    return this.encode(t, r).ldelim();
                                }
                                static decode(t, r, n) {
                                    if (!(t instanceof Reader)) {
                                        t = Reader.create(t);
                                    }
                                    const c = r === undefined ? t.len : t.pos + r;
                                    const s = new a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;
                                    while(t.pos < c){
                                        const m = t.uint32();
                                        if (m === n) {
                                            break;
                                        }
                                        switch(m >>> 3){
                                            case 1:
                                                {
                                                    s.partialSuccess = a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.decode(t, t.uint32());
                                                    break;
                                                }
                                            default:
                                                t.skipType(m & 7);
                                                break;
                                        }
                                    }
                                    return s;
                                }
                                static decodeDelimited(t) {
                                    if (!(t instanceof Reader)) {
                                        t = new Reader(t);
                                    }
                                    return this.decode(t, t.uint32());
                                }
                                static verify(t) {
                                    if (typeof t !== "object" || t === null) {
                                        return "object expected";
                                    }
                                    if (t.partialSuccess != null && t.hasOwnProperty("partialSuccess")) {
                                        const r = a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.verify(t.partialSuccess);
                                        if (r) {
                                            return `partialSuccess.${r}`;
                                        }
                                    }
                                    return null;
                                }
                                static fromObject(t) {
                                    if (t instanceof a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse) {
                                        return t;
                                    }
                                    const r = new a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;
                                    if (t.partialSuccess != null) {
                                        if (typeof t.partialSuccess !== "object") {
                                            throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.partialSuccess: object expected");
                                        }
                                        r.partialSuccess = a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.fromObject(t.partialSuccess);
                                    }
                                    return r;
                                }
                                static toObject(t, r) {
                                    if (!r) {
                                        r = {};
                                    }
                                    const n = {};
                                    if (r.defaults) {
                                        n.partialSuccess = null;
                                    }
                                    if (t.partialSuccess != null && t.hasOwnProperty("partialSuccess")) {
                                        n.partialSuccess = a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.toObject(t.partialSuccess, r);
                                    }
                                    return n;
                                }
                                toJSON() {
                                    return this.constructor.toObject(this, S.util.toJSONOptions);
                                }
                                static getTypeUrl(t = "type.googleapis.com") {
                                    return `${t}/opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse`;
                                }
                            }
                            o.prototype.partialSuccess = null;
                            return o;
                        }();
                        i.ExportTracePartialSuccess = function() {
                            class o {
                                constructor(e){
                                    if (e) {
                                        for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                            if (e[t[r]] != null) {
                                                this[t[r]] = e[t[r]];
                                            }
                                        }
                                    }
                                }
                                static create(t) {
                                    return new o(t);
                                }
                                static encode(t, r) {
                                    if (!r) {
                                        r = Writer.create();
                                    }
                                    if (t.rejectedSpans != null && Object.hasOwnProperty.call(t, "rejectedSpans")) {
                                        r.uint32(8).int64(t.rejectedSpans);
                                    }
                                    if (t.errorMessage != null && Object.hasOwnProperty.call(t, "errorMessage")) {
                                        r.uint32(18).string(t.errorMessage);
                                    }
                                    return r;
                                }
                                static encodeDelimited(t, r) {
                                    return this.encode(t, r).ldelim();
                                }
                                static decode(t, r, n) {
                                    if (!(t instanceof Reader)) {
                                        t = Reader.create(t);
                                    }
                                    const c = r === undefined ? t.len : t.pos + r;
                                    const s = new a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess;
                                    while(t.pos < c){
                                        const m = t.uint32();
                                        if (m === n) {
                                            break;
                                        }
                                        switch(m >>> 3){
                                            case 1:
                                                {
                                                    s.rejectedSpans = t.int64();
                                                    break;
                                                }
                                            case 2:
                                                {
                                                    s.errorMessage = t.string();
                                                    break;
                                                }
                                            default:
                                                t.skipType(m & 7);
                                                break;
                                        }
                                    }
                                    return s;
                                }
                                static decodeDelimited(t) {
                                    if (!(t instanceof Reader)) {
                                        t = new Reader(t);
                                    }
                                    return this.decode(t, t.uint32());
                                }
                                static verify(t) {
                                    if (typeof t !== "object" || t === null) {
                                        return "object expected";
                                    }
                                    if (t.rejectedSpans != null && t.hasOwnProperty("rejectedSpans")) {
                                        if (!util.isInteger(t.rejectedSpans) && !(t.rejectedSpans && util.isInteger(t.rejectedSpans.low) && util.isInteger(t.rejectedSpans.high))) {
                                            return "rejectedSpans: integer|Long expected";
                                        }
                                    }
                                    if (t.errorMessage != null && t.hasOwnProperty("errorMessage")) {
                                        if (!util.isString(t.errorMessage)) {
                                            return "errorMessage: string expected";
                                        }
                                    }
                                    return null;
                                }
                                static fromObject(t) {
                                    if (t instanceof a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess) {
                                        return t;
                                    }
                                    const r = new a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess;
                                    if (t.rejectedSpans != null) {
                                        if (util.Long) {
                                            (r.rejectedSpans = util.Long.fromValue(t.rejectedSpans)).unsigned = false;
                                        } else if (typeof t.rejectedSpans === "string") {
                                            r.rejectedSpans = parseInt(t.rejectedSpans, 10);
                                        } else if (typeof t.rejectedSpans === "number") {
                                            r.rejectedSpans = t.rejectedSpans;
                                        } else if (typeof t.rejectedSpans === "object") {
                                            r.rejectedSpans = new util.LongBits(t.rejectedSpans.low >>> 0, t.rejectedSpans.high >>> 0).toNumber();
                                        }
                                    }
                                    if (t.errorMessage != null) {
                                        r.errorMessage = String(t.errorMessage);
                                    }
                                    return r;
                                }
                                static toObject(t, r) {
                                    if (!r) {
                                        r = {};
                                    }
                                    const n = {};
                                    if (r.defaults) {
                                        if (util.Long) {
                                            const c = new util.Long(0, 0, false);
                                            n.rejectedSpans = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                        } else {
                                            n.rejectedSpans = r.longs === String ? "0" : 0;
                                        }
                                        n.errorMessage = "";
                                    }
                                    if (t.rejectedSpans != null && t.hasOwnProperty("rejectedSpans")) {
                                        if (typeof t.rejectedSpans === "number") {
                                            n.rejectedSpans = r.longs === String ? String(t.rejectedSpans) : t.rejectedSpans;
                                        } else {
                                            n.rejectedSpans = r.longs === String ? util.Long.prototype.toString.call(t.rejectedSpans) : r.longs === Number ? new util.LongBits(t.rejectedSpans.low >>> 0, t.rejectedSpans.high >>> 0).toNumber() : t.rejectedSpans;
                                        }
                                    }
                                    if (t.errorMessage != null && t.hasOwnProperty("errorMessage")) {
                                        n.errorMessage = t.errorMessage;
                                    }
                                    return n;
                                }
                                toJSON() {
                                    return this.constructor.toObject(this, S.util.toJSONOptions);
                                }
                                static getTypeUrl(t = "type.googleapis.com") {
                                    return `${t}/opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess`;
                                }
                            }
                            o.prototype.rejectedSpans = null;
                            o.prototype.errorMessage = null;
                            return o;
                        }();
                        return i;
                    })();
                    return d;
                })();
                f.metrics = (()=>{
                    const d = {};
                    d.v1 = (()=>{
                        const i = {};
                        i.MetricsService = (()=>{
                            function o(e, t, r) {
                                S.rpc.Service.call(this, e, t, r);
                            }
                            (o.prototype = Object.create(S.rpc.Service.prototype)).constructor = o;
                            o.create = function(t, r, n) {
                                return new this(t, r, n);
                            };
                            Object.defineProperty(o.prototype.export = function e(t, r) {
                                return this.rpcCall(e, a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest, a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse, t, r);
                            }, "name", {
                                value: "Export"
                            });
                            return o;
                        })();
                        i.ExportMetricsServiceRequest = function() {
                            class o {
                                constructor(e){
                                    this.resourceMetrics = [];
                                    if (e) {
                                        for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                            if (e[t[r]] != null) {
                                                this[t[r]] = e[t[r]];
                                            }
                                        }
                                    }
                                }
                                static create(t) {
                                    return new o(t);
                                }
                                static encode(t, r) {
                                    if (!r) {
                                        r = Writer.create();
                                    }
                                    if (t.resourceMetrics != null && t.resourceMetrics.length) {
                                        for(let n = 0; n < t.resourceMetrics.length; ++n){
                                            a.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(t.resourceMetrics[n], r.uint32(10).fork()).ldelim();
                                        }
                                    }
                                    return r;
                                }
                                static encodeDelimited(t, r) {
                                    return this.encode(t, r).ldelim();
                                }
                                static decode(t, r, n) {
                                    if (!(t instanceof Reader)) {
                                        t = Reader.create(t);
                                    }
                                    const c = r === undefined ? t.len : t.pos + r;
                                    const s = new a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
                                    while(t.pos < c){
                                        const m = t.uint32();
                                        if (m === n) {
                                            break;
                                        }
                                        switch(m >>> 3){
                                            case 1:
                                                {
                                                    if (!(s.resourceMetrics && s.resourceMetrics.length)) {
                                                        s.resourceMetrics = [];
                                                    }
                                                    s.resourceMetrics.push(a.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(t, t.uint32()));
                                                    break;
                                                }
                                            default:
                                                t.skipType(m & 7);
                                                break;
                                        }
                                    }
                                    return s;
                                }
                                static decodeDelimited(t) {
                                    if (!(t instanceof Reader)) {
                                        t = new Reader(t);
                                    }
                                    return this.decode(t, t.uint32());
                                }
                                static verify(t) {
                                    if (typeof t !== "object" || t === null) {
                                        return "object expected";
                                    }
                                    if (t.resourceMetrics != null && t.hasOwnProperty("resourceMetrics")) {
                                        if (!Array.isArray(t.resourceMetrics)) {
                                            return "resourceMetrics: array expected";
                                        }
                                        for(let r = 0; r < t.resourceMetrics.length; ++r){
                                            const n = a.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(t.resourceMetrics[r]);
                                            if (n) {
                                                return `resourceMetrics.${n}`;
                                            }
                                        }
                                    }
                                    return null;
                                }
                                static fromObject(t) {
                                    if (t instanceof a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest) {
                                        return t;
                                    }
                                    const r = new a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
                                    if (t.resourceMetrics) {
                                        if (!Array.isArray(t.resourceMetrics)) {
                                            throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: array expected");
                                        }
                                        r.resourceMetrics = [];
                                        for(let n = 0; n < t.resourceMetrics.length; ++n){
                                            if (typeof t.resourceMetrics[n] !== "object") {
                                                throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: object expected");
                                            }
                                            r.resourceMetrics[n] = a.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(t.resourceMetrics[n]);
                                        }
                                    }
                                    return r;
                                }
                                static toObject(t, r) {
                                    if (!r) {
                                        r = {};
                                    }
                                    const n = {};
                                    if (r.arrays || r.defaults) {
                                        n.resourceMetrics = [];
                                    }
                                    if (t.resourceMetrics && t.resourceMetrics.length) {
                                        n.resourceMetrics = [];
                                        for(let c = 0; c < t.resourceMetrics.length; ++c){
                                            n.resourceMetrics[c] = a.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(t.resourceMetrics[c], r);
                                        }
                                    }
                                    return n;
                                }
                                toJSON() {
                                    return this.constructor.toObject(this, S.util.toJSONOptions);
                                }
                                static getTypeUrl(t = "type.googleapis.com") {
                                    return `${t}/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest`;
                                }
                            }
                            o.prototype.resourceMetrics = util.emptyArray;
                            return o;
                        }();
                        i.ExportMetricsServiceResponse = function() {
                            class o {
                                constructor(e){
                                    if (e) {
                                        for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                            if (e[t[r]] != null) {
                                                this[t[r]] = e[t[r]];
                                            }
                                        }
                                    }
                                }
                                static create(t) {
                                    return new o(t);
                                }
                                static encode(t, r) {
                                    if (!r) {
                                        r = Writer.create();
                                    }
                                    if (t.partialSuccess != null && Object.hasOwnProperty.call(t, "partialSuccess")) {
                                        a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.encode(t.partialSuccess, r.uint32(10).fork()).ldelim();
                                    }
                                    return r;
                                }
                                static encodeDelimited(t, r) {
                                    return this.encode(t, r).ldelim();
                                }
                                static decode(t, r, n) {
                                    if (!(t instanceof Reader)) {
                                        t = Reader.create(t);
                                    }
                                    const c = r === undefined ? t.len : t.pos + r;
                                    const s = new a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;
                                    while(t.pos < c){
                                        const m = t.uint32();
                                        if (m === n) {
                                            break;
                                        }
                                        switch(m >>> 3){
                                            case 1:
                                                {
                                                    s.partialSuccess = a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.decode(t, t.uint32());
                                                    break;
                                                }
                                            default:
                                                t.skipType(m & 7);
                                                break;
                                        }
                                    }
                                    return s;
                                }
                                static decodeDelimited(t) {
                                    if (!(t instanceof Reader)) {
                                        t = new Reader(t);
                                    }
                                    return this.decode(t, t.uint32());
                                }
                                static verify(t) {
                                    if (typeof t !== "object" || t === null) {
                                        return "object expected";
                                    }
                                    if (t.partialSuccess != null && t.hasOwnProperty("partialSuccess")) {
                                        const r = a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.verify(t.partialSuccess);
                                        if (r) {
                                            return `partialSuccess.${r}`;
                                        }
                                    }
                                    return null;
                                }
                                static fromObject(t) {
                                    if (t instanceof a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse) {
                                        return t;
                                    }
                                    const r = new a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;
                                    if (t.partialSuccess != null) {
                                        if (typeof t.partialSuccess !== "object") {
                                            throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.partialSuccess: object expected");
                                        }
                                        r.partialSuccess = a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.fromObject(t.partialSuccess);
                                    }
                                    return r;
                                }
                                static toObject(t, r) {
                                    if (!r) {
                                        r = {};
                                    }
                                    const n = {};
                                    if (r.defaults) {
                                        n.partialSuccess = null;
                                    }
                                    if (t.partialSuccess != null && t.hasOwnProperty("partialSuccess")) {
                                        n.partialSuccess = a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.toObject(t.partialSuccess, r);
                                    }
                                    return n;
                                }
                                toJSON() {
                                    return this.constructor.toObject(this, S.util.toJSONOptions);
                                }
                                static getTypeUrl(t = "type.googleapis.com") {
                                    return `${t}/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse`;
                                }
                            }
                            o.prototype.partialSuccess = null;
                            return o;
                        }();
                        i.ExportMetricsPartialSuccess = function() {
                            class o {
                                constructor(e){
                                    if (e) {
                                        for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                            if (e[t[r]] != null) {
                                                this[t[r]] = e[t[r]];
                                            }
                                        }
                                    }
                                }
                                static create(t) {
                                    return new o(t);
                                }
                                static encode(t, r) {
                                    if (!r) {
                                        r = Writer.create();
                                    }
                                    if (t.rejectedDataPoints != null && Object.hasOwnProperty.call(t, "rejectedDataPoints")) {
                                        r.uint32(8).int64(t.rejectedDataPoints);
                                    }
                                    if (t.errorMessage != null && Object.hasOwnProperty.call(t, "errorMessage")) {
                                        r.uint32(18).string(t.errorMessage);
                                    }
                                    return r;
                                }
                                static encodeDelimited(t, r) {
                                    return this.encode(t, r).ldelim();
                                }
                                static decode(t, r, n) {
                                    if (!(t instanceof Reader)) {
                                        t = Reader.create(t);
                                    }
                                    const c = r === undefined ? t.len : t.pos + r;
                                    const s = new a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess;
                                    while(t.pos < c){
                                        const m = t.uint32();
                                        if (m === n) {
                                            break;
                                        }
                                        switch(m >>> 3){
                                            case 1:
                                                {
                                                    s.rejectedDataPoints = t.int64();
                                                    break;
                                                }
                                            case 2:
                                                {
                                                    s.errorMessage = t.string();
                                                    break;
                                                }
                                            default:
                                                t.skipType(m & 7);
                                                break;
                                        }
                                    }
                                    return s;
                                }
                                static decodeDelimited(t) {
                                    if (!(t instanceof Reader)) {
                                        t = new Reader(t);
                                    }
                                    return this.decode(t, t.uint32());
                                }
                                static verify(t) {
                                    if (typeof t !== "object" || t === null) {
                                        return "object expected";
                                    }
                                    if (t.rejectedDataPoints != null && t.hasOwnProperty("rejectedDataPoints")) {
                                        if (!util.isInteger(t.rejectedDataPoints) && !(t.rejectedDataPoints && util.isInteger(t.rejectedDataPoints.low) && util.isInteger(t.rejectedDataPoints.high))) {
                                            return "rejectedDataPoints: integer|Long expected";
                                        }
                                    }
                                    if (t.errorMessage != null && t.hasOwnProperty("errorMessage")) {
                                        if (!util.isString(t.errorMessage)) {
                                            return "errorMessage: string expected";
                                        }
                                    }
                                    return null;
                                }
                                static fromObject(t) {
                                    if (t instanceof a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess) {
                                        return t;
                                    }
                                    const r = new a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess;
                                    if (t.rejectedDataPoints != null) {
                                        if (util.Long) {
                                            (r.rejectedDataPoints = util.Long.fromValue(t.rejectedDataPoints)).unsigned = false;
                                        } else if (typeof t.rejectedDataPoints === "string") {
                                            r.rejectedDataPoints = parseInt(t.rejectedDataPoints, 10);
                                        } else if (typeof t.rejectedDataPoints === "number") {
                                            r.rejectedDataPoints = t.rejectedDataPoints;
                                        } else if (typeof t.rejectedDataPoints === "object") {
                                            r.rejectedDataPoints = new util.LongBits(t.rejectedDataPoints.low >>> 0, t.rejectedDataPoints.high >>> 0).toNumber();
                                        }
                                    }
                                    if (t.errorMessage != null) {
                                        r.errorMessage = String(t.errorMessage);
                                    }
                                    return r;
                                }
                                static toObject(t, r) {
                                    if (!r) {
                                        r = {};
                                    }
                                    const n = {};
                                    if (r.defaults) {
                                        if (util.Long) {
                                            const c = new util.Long(0, 0, false);
                                            n.rejectedDataPoints = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                        } else {
                                            n.rejectedDataPoints = r.longs === String ? "0" : 0;
                                        }
                                        n.errorMessage = "";
                                    }
                                    if (t.rejectedDataPoints != null && t.hasOwnProperty("rejectedDataPoints")) {
                                        if (typeof t.rejectedDataPoints === "number") {
                                            n.rejectedDataPoints = r.longs === String ? String(t.rejectedDataPoints) : t.rejectedDataPoints;
                                        } else {
                                            n.rejectedDataPoints = r.longs === String ? util.Long.prototype.toString.call(t.rejectedDataPoints) : r.longs === Number ? new util.LongBits(t.rejectedDataPoints.low >>> 0, t.rejectedDataPoints.high >>> 0).toNumber() : t.rejectedDataPoints;
                                        }
                                    }
                                    if (t.errorMessage != null && t.hasOwnProperty("errorMessage")) {
                                        n.errorMessage = t.errorMessage;
                                    }
                                    return n;
                                }
                                toJSON() {
                                    return this.constructor.toObject(this, S.util.toJSONOptions);
                                }
                                static getTypeUrl(t = "type.googleapis.com") {
                                    return `${t}/opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess`;
                                }
                            }
                            o.prototype.rejectedDataPoints = null;
                            o.prototype.errorMessage = null;
                            return o;
                        }();
                        return i;
                    })();
                    return d;
                })();
                f.logs = (()=>{
                    const d = {};
                    d.v1 = (()=>{
                        const i = {};
                        i.LogsService = (()=>{
                            function o(e, t, r) {
                                S.rpc.Service.call(this, e, t, r);
                            }
                            (o.prototype = Object.create(S.rpc.Service.prototype)).constructor = o;
                            o.create = function(t, r, n) {
                                return new this(t, r, n);
                            };
                            Object.defineProperty(o.prototype.export = function e(t, r) {
                                return this.rpcCall(e, a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest, a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse, t, r);
                            }, "name", {
                                value: "Export"
                            });
                            return o;
                        })();
                        i.ExportLogsServiceRequest = function() {
                            class o {
                                constructor(e){
                                    this.resourceLogs = [];
                                    if (e) {
                                        for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                            if (e[t[r]] != null) {
                                                this[t[r]] = e[t[r]];
                                            }
                                        }
                                    }
                                }
                                static create(t) {
                                    return new o(t);
                                }
                                static encode(t, r) {
                                    if (!r) {
                                        r = Writer.create();
                                    }
                                    if (t.resourceLogs != null && t.resourceLogs.length) {
                                        for(let n = 0; n < t.resourceLogs.length; ++n){
                                            a.opentelemetry.proto.logs.v1.ResourceLogs.encode(t.resourceLogs[n], r.uint32(10).fork()).ldelim();
                                        }
                                    }
                                    return r;
                                }
                                static encodeDelimited(t, r) {
                                    return this.encode(t, r).ldelim();
                                }
                                static decode(t, r, n) {
                                    if (!(t instanceof Reader)) {
                                        t = Reader.create(t);
                                    }
                                    const c = r === undefined ? t.len : t.pos + r;
                                    const s = new a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
                                    while(t.pos < c){
                                        const m = t.uint32();
                                        if (m === n) {
                                            break;
                                        }
                                        switch(m >>> 3){
                                            case 1:
                                                {
                                                    if (!(s.resourceLogs && s.resourceLogs.length)) {
                                                        s.resourceLogs = [];
                                                    }
                                                    s.resourceLogs.push(a.opentelemetry.proto.logs.v1.ResourceLogs.decode(t, t.uint32()));
                                                    break;
                                                }
                                            default:
                                                t.skipType(m & 7);
                                                break;
                                        }
                                    }
                                    return s;
                                }
                                static decodeDelimited(t) {
                                    if (!(t instanceof Reader)) {
                                        t = new Reader(t);
                                    }
                                    return this.decode(t, t.uint32());
                                }
                                static verify(t) {
                                    if (typeof t !== "object" || t === null) {
                                        return "object expected";
                                    }
                                    if (t.resourceLogs != null && t.hasOwnProperty("resourceLogs")) {
                                        if (!Array.isArray(t.resourceLogs)) {
                                            return "resourceLogs: array expected";
                                        }
                                        for(let r = 0; r < t.resourceLogs.length; ++r){
                                            const n = a.opentelemetry.proto.logs.v1.ResourceLogs.verify(t.resourceLogs[r]);
                                            if (n) {
                                                return `resourceLogs.${n}`;
                                            }
                                        }
                                    }
                                    return null;
                                }
                                static fromObject(t) {
                                    if (t instanceof a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest) {
                                        return t;
                                    }
                                    const r = new a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
                                    if (t.resourceLogs) {
                                        if (!Array.isArray(t.resourceLogs)) {
                                            throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: array expected");
                                        }
                                        r.resourceLogs = [];
                                        for(let n = 0; n < t.resourceLogs.length; ++n){
                                            if (typeof t.resourceLogs[n] !== "object") {
                                                throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: object expected");
                                            }
                                            r.resourceLogs[n] = a.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(t.resourceLogs[n]);
                                        }
                                    }
                                    return r;
                                }
                                static toObject(t, r) {
                                    if (!r) {
                                        r = {};
                                    }
                                    const n = {};
                                    if (r.arrays || r.defaults) {
                                        n.resourceLogs = [];
                                    }
                                    if (t.resourceLogs && t.resourceLogs.length) {
                                        n.resourceLogs = [];
                                        for(let c = 0; c < t.resourceLogs.length; ++c){
                                            n.resourceLogs[c] = a.opentelemetry.proto.logs.v1.ResourceLogs.toObject(t.resourceLogs[c], r);
                                        }
                                    }
                                    return n;
                                }
                                toJSON() {
                                    return this.constructor.toObject(this, S.util.toJSONOptions);
                                }
                                static getTypeUrl(t = "type.googleapis.com") {
                                    return `${t}/opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest`;
                                }
                            }
                            o.prototype.resourceLogs = util.emptyArray;
                            return o;
                        }();
                        i.ExportLogsServiceResponse = function() {
                            class o {
                                constructor(e){
                                    if (e) {
                                        for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                            if (e[t[r]] != null) {
                                                this[t[r]] = e[t[r]];
                                            }
                                        }
                                    }
                                }
                                static create(t) {
                                    return new o(t);
                                }
                                static encode(t, r) {
                                    if (!r) {
                                        r = Writer.create();
                                    }
                                    if (t.partialSuccess != null && Object.hasOwnProperty.call(t, "partialSuccess")) {
                                        a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.encode(t.partialSuccess, r.uint32(10).fork()).ldelim();
                                    }
                                    return r;
                                }
                                static encodeDelimited(t, r) {
                                    return this.encode(t, r).ldelim();
                                }
                                static decode(t, r, n) {
                                    if (!(t instanceof Reader)) {
                                        t = Reader.create(t);
                                    }
                                    const c = r === undefined ? t.len : t.pos + r;
                                    const s = new a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;
                                    while(t.pos < c){
                                        const m = t.uint32();
                                        if (m === n) {
                                            break;
                                        }
                                        switch(m >>> 3){
                                            case 1:
                                                {
                                                    s.partialSuccess = a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.decode(t, t.uint32());
                                                    break;
                                                }
                                            default:
                                                t.skipType(m & 7);
                                                break;
                                        }
                                    }
                                    return s;
                                }
                                static decodeDelimited(t) {
                                    if (!(t instanceof Reader)) {
                                        t = new Reader(t);
                                    }
                                    return this.decode(t, t.uint32());
                                }
                                static verify(t) {
                                    if (typeof t !== "object" || t === null) {
                                        return "object expected";
                                    }
                                    if (t.partialSuccess != null && t.hasOwnProperty("partialSuccess")) {
                                        const r = a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.verify(t.partialSuccess);
                                        if (r) {
                                            return `partialSuccess.${r}`;
                                        }
                                    }
                                    return null;
                                }
                                static fromObject(t) {
                                    if (t instanceof a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse) {
                                        return t;
                                    }
                                    const r = new a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;
                                    if (t.partialSuccess != null) {
                                        if (typeof t.partialSuccess !== "object") {
                                            throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.partialSuccess: object expected");
                                        }
                                        r.partialSuccess = a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.fromObject(t.partialSuccess);
                                    }
                                    return r;
                                }
                                static toObject(t, r) {
                                    if (!r) {
                                        r = {};
                                    }
                                    const n = {};
                                    if (r.defaults) {
                                        n.partialSuccess = null;
                                    }
                                    if (t.partialSuccess != null && t.hasOwnProperty("partialSuccess")) {
                                        n.partialSuccess = a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.toObject(t.partialSuccess, r);
                                    }
                                    return n;
                                }
                                toJSON() {
                                    return this.constructor.toObject(this, S.util.toJSONOptions);
                                }
                                static getTypeUrl(t = "type.googleapis.com") {
                                    return `${t}/opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse`;
                                }
                            }
                            o.prototype.partialSuccess = null;
                            return o;
                        }();
                        i.ExportLogsPartialSuccess = function() {
                            class o {
                                constructor(e){
                                    if (e) {
                                        for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                            if (e[t[r]] != null) {
                                                this[t[r]] = e[t[r]];
                                            }
                                        }
                                    }
                                }
                                static create(t) {
                                    return new o(t);
                                }
                                static encode(t, r) {
                                    if (!r) {
                                        r = Writer.create();
                                    }
                                    if (t.rejectedLogRecords != null && Object.hasOwnProperty.call(t, "rejectedLogRecords")) {
                                        r.uint32(8).int64(t.rejectedLogRecords);
                                    }
                                    if (t.errorMessage != null && Object.hasOwnProperty.call(t, "errorMessage")) {
                                        r.uint32(18).string(t.errorMessage);
                                    }
                                    return r;
                                }
                                static encodeDelimited(t, r) {
                                    return this.encode(t, r).ldelim();
                                }
                                static decode(t, r, n) {
                                    if (!(t instanceof Reader)) {
                                        t = Reader.create(t);
                                    }
                                    const c = r === undefined ? t.len : t.pos + r;
                                    const s = new a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess;
                                    while(t.pos < c){
                                        const m = t.uint32();
                                        if (m === n) {
                                            break;
                                        }
                                        switch(m >>> 3){
                                            case 1:
                                                {
                                                    s.rejectedLogRecords = t.int64();
                                                    break;
                                                }
                                            case 2:
                                                {
                                                    s.errorMessage = t.string();
                                                    break;
                                                }
                                            default:
                                                t.skipType(m & 7);
                                                break;
                                        }
                                    }
                                    return s;
                                }
                                static decodeDelimited(t) {
                                    if (!(t instanceof Reader)) {
                                        t = new Reader(t);
                                    }
                                    return this.decode(t, t.uint32());
                                }
                                static verify(t) {
                                    if (typeof t !== "object" || t === null) {
                                        return "object expected";
                                    }
                                    if (t.rejectedLogRecords != null && t.hasOwnProperty("rejectedLogRecords")) {
                                        if (!util.isInteger(t.rejectedLogRecords) && !(t.rejectedLogRecords && util.isInteger(t.rejectedLogRecords.low) && util.isInteger(t.rejectedLogRecords.high))) {
                                            return "rejectedLogRecords: integer|Long expected";
                                        }
                                    }
                                    if (t.errorMessage != null && t.hasOwnProperty("errorMessage")) {
                                        if (!util.isString(t.errorMessage)) {
                                            return "errorMessage: string expected";
                                        }
                                    }
                                    return null;
                                }
                                static fromObject(t) {
                                    if (t instanceof a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess) {
                                        return t;
                                    }
                                    const r = new a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess;
                                    if (t.rejectedLogRecords != null) {
                                        if (util.Long) {
                                            (r.rejectedLogRecords = util.Long.fromValue(t.rejectedLogRecords)).unsigned = false;
                                        } else if (typeof t.rejectedLogRecords === "string") {
                                            r.rejectedLogRecords = parseInt(t.rejectedLogRecords, 10);
                                        } else if (typeof t.rejectedLogRecords === "number") {
                                            r.rejectedLogRecords = t.rejectedLogRecords;
                                        } else if (typeof t.rejectedLogRecords === "object") {
                                            r.rejectedLogRecords = new util.LongBits(t.rejectedLogRecords.low >>> 0, t.rejectedLogRecords.high >>> 0).toNumber();
                                        }
                                    }
                                    if (t.errorMessage != null) {
                                        r.errorMessage = String(t.errorMessage);
                                    }
                                    return r;
                                }
                                static toObject(t, r) {
                                    if (!r) {
                                        r = {};
                                    }
                                    const n = {};
                                    if (r.defaults) {
                                        if (util.Long) {
                                            const c = new util.Long(0, 0, false);
                                            n.rejectedLogRecords = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                        } else {
                                            n.rejectedLogRecords = r.longs === String ? "0" : 0;
                                        }
                                        n.errorMessage = "";
                                    }
                                    if (t.rejectedLogRecords != null && t.hasOwnProperty("rejectedLogRecords")) {
                                        if (typeof t.rejectedLogRecords === "number") {
                                            n.rejectedLogRecords = r.longs === String ? String(t.rejectedLogRecords) : t.rejectedLogRecords;
                                        } else {
                                            n.rejectedLogRecords = r.longs === String ? util.Long.prototype.toString.call(t.rejectedLogRecords) : r.longs === Number ? new util.LongBits(t.rejectedLogRecords.low >>> 0, t.rejectedLogRecords.high >>> 0).toNumber() : t.rejectedLogRecords;
                                        }
                                    }
                                    if (t.errorMessage != null && t.hasOwnProperty("errorMessage")) {
                                        n.errorMessage = t.errorMessage;
                                    }
                                    return n;
                                }
                                toJSON() {
                                    return this.constructor.toObject(this, S.util.toJSONOptions);
                                }
                                static getTypeUrl(t = "type.googleapis.com") {
                                    return `${t}/opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess`;
                                }
                            }
                            o.prototype.rejectedLogRecords = null;
                            o.prototype.errorMessage = null;
                            return o;
                        }();
                        return i;
                    })();
                    return d;
                })();
                return f;
            })();
            u.metrics = (()=>{
                const f = {};
                f.v1 = (()=>{
                    const d = {};
                    d.MetricsData = function() {
                        class i {
                            constructor(o){
                                this.resourceMetrics = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.resourceMetrics != null && e.resourceMetrics.length) {
                                    for(let r = 0; r < e.resourceMetrics.length; ++r){
                                        a.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(e.resourceMetrics[r], t.uint32(10).fork()).ldelim();
                                    }
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.metrics.v1.MetricsData;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                if (!(c.resourceMetrics && c.resourceMetrics.length)) {
                                                    c.resourceMetrics = [];
                                                }
                                                c.resourceMetrics.push(a.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(e, e.uint32()));
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.resourceMetrics != null && e.hasOwnProperty("resourceMetrics")) {
                                    if (!Array.isArray(e.resourceMetrics)) {
                                        return "resourceMetrics: array expected";
                                    }
                                    for(let t = 0; t < e.resourceMetrics.length; ++t){
                                        const r = a.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(e.resourceMetrics[t]);
                                        if (r) {
                                            return `resourceMetrics.${r}`;
                                        }
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.metrics.v1.MetricsData) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.metrics.v1.MetricsData;
                                if (e.resourceMetrics) {
                                    if (!Array.isArray(e.resourceMetrics)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: array expected");
                                    }
                                    t.resourceMetrics = [];
                                    for(let r = 0; r < e.resourceMetrics.length; ++r){
                                        if (typeof e.resourceMetrics[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: object expected");
                                        }
                                        t.resourceMetrics[r] = a.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(e.resourceMetrics[r]);
                                    }
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.resourceMetrics = [];
                                }
                                if (e.resourceMetrics && e.resourceMetrics.length) {
                                    r.resourceMetrics = [];
                                    for(let n = 0; n < e.resourceMetrics.length; ++n){
                                        r.resourceMetrics[n] = a.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(e.resourceMetrics[n], t);
                                    }
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.metrics.v1.MetricsData`;
                            }
                        }
                        i.prototype.resourceMetrics = util.emptyArray;
                        return i;
                    }();
                    d.ResourceMetrics = function() {
                        class i {
                            constructor(o){
                                this.scopeMetrics = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.resource != null && Object.hasOwnProperty.call(e, "resource")) {
                                    a.opentelemetry.proto.resource.v1.Resource.encode(e.resource, t.uint32(10).fork()).ldelim();
                                }
                                if (e.scopeMetrics != null && e.scopeMetrics.length) {
                                    for(let r = 0; r < e.scopeMetrics.length; ++r){
                                        a.opentelemetry.proto.metrics.v1.ScopeMetrics.encode(e.scopeMetrics[r], t.uint32(18).fork()).ldelim();
                                    }
                                }
                                if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) {
                                    t.uint32(26).string(e.schemaUrl);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.metrics.v1.ResourceMetrics;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                c.resource = a.opentelemetry.proto.resource.v1.Resource.decode(e, e.uint32());
                                                break;
                                            }
                                        case 2:
                                            {
                                                if (!(c.scopeMetrics && c.scopeMetrics.length)) {
                                                    c.scopeMetrics = [];
                                                }
                                                c.scopeMetrics.push(a.opentelemetry.proto.metrics.v1.ScopeMetrics.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 3:
                                            {
                                                c.schemaUrl = e.string();
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.resource != null && e.hasOwnProperty("resource")) {
                                    var t = a.opentelemetry.proto.resource.v1.Resource.verify(e.resource);
                                    if (t) {
                                        return `resource.${t}`;
                                    }
                                }
                                if (e.scopeMetrics != null && e.hasOwnProperty("scopeMetrics")) {
                                    if (!Array.isArray(e.scopeMetrics)) {
                                        return "scopeMetrics: array expected";
                                    }
                                    for(let r = 0; r < e.scopeMetrics.length; ++r){
                                        var t = a.opentelemetry.proto.metrics.v1.ScopeMetrics.verify(e.scopeMetrics[r]);
                                        if (t) {
                                            return `scopeMetrics.${t}`;
                                        }
                                    }
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    if (!util.isString(e.schemaUrl)) {
                                        return "schemaUrl: string expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.metrics.v1.ResourceMetrics) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.metrics.v1.ResourceMetrics;
                                if (e.resource != null) {
                                    if (typeof e.resource !== "object") {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.resource: object expected");
                                    }
                                    t.resource = a.opentelemetry.proto.resource.v1.Resource.fromObject(e.resource);
                                }
                                if (e.scopeMetrics) {
                                    if (!Array.isArray(e.scopeMetrics)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: array expected");
                                    }
                                    t.scopeMetrics = [];
                                    for(let r = 0; r < e.scopeMetrics.length; ++r){
                                        if (typeof e.scopeMetrics[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: object expected");
                                        }
                                        t.scopeMetrics[r] = a.opentelemetry.proto.metrics.v1.ScopeMetrics.fromObject(e.scopeMetrics[r]);
                                    }
                                }
                                if (e.schemaUrl != null) {
                                    t.schemaUrl = String(e.schemaUrl);
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.scopeMetrics = [];
                                }
                                if (t.defaults) {
                                    r.resource = null;
                                    r.schemaUrl = "";
                                }
                                if (e.resource != null && e.hasOwnProperty("resource")) {
                                    r.resource = a.opentelemetry.proto.resource.v1.Resource.toObject(e.resource, t);
                                }
                                if (e.scopeMetrics && e.scopeMetrics.length) {
                                    r.scopeMetrics = [];
                                    for(let n = 0; n < e.scopeMetrics.length; ++n){
                                        r.scopeMetrics[n] = a.opentelemetry.proto.metrics.v1.ScopeMetrics.toObject(e.scopeMetrics[n], t);
                                    }
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    r.schemaUrl = e.schemaUrl;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.metrics.v1.ResourceMetrics`;
                            }
                        }
                        i.prototype.resource = null;
                        i.prototype.scopeMetrics = util.emptyArray;
                        i.prototype.schemaUrl = null;
                        return i;
                    }();
                    d.ScopeMetrics = function() {
                        class i {
                            constructor(o){
                                this.metrics = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.scope != null && Object.hasOwnProperty.call(e, "scope")) {
                                    a.opentelemetry.proto.common.v1.InstrumentationScope.encode(e.scope, t.uint32(10).fork()).ldelim();
                                }
                                if (e.metrics != null && e.metrics.length) {
                                    for(let r = 0; r < e.metrics.length; ++r){
                                        a.opentelemetry.proto.metrics.v1.Metric.encode(e.metrics[r], t.uint32(18).fork()).ldelim();
                                    }
                                }
                                if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) {
                                    t.uint32(26).string(e.schemaUrl);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.metrics.v1.ScopeMetrics;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                c.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.decode(e, e.uint32());
                                                break;
                                            }
                                        case 2:
                                            {
                                                if (!(c.metrics && c.metrics.length)) {
                                                    c.metrics = [];
                                                }
                                                c.metrics.push(a.opentelemetry.proto.metrics.v1.Metric.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 3:
                                            {
                                                c.schemaUrl = e.string();
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.scope != null && e.hasOwnProperty("scope")) {
                                    var t = a.opentelemetry.proto.common.v1.InstrumentationScope.verify(e.scope);
                                    if (t) {
                                        return `scope.${t}`;
                                    }
                                }
                                if (e.metrics != null && e.hasOwnProperty("metrics")) {
                                    if (!Array.isArray(e.metrics)) {
                                        return "metrics: array expected";
                                    }
                                    for(let r = 0; r < e.metrics.length; ++r){
                                        var t = a.opentelemetry.proto.metrics.v1.Metric.verify(e.metrics[r]);
                                        if (t) {
                                            return `metrics.${t}`;
                                        }
                                    }
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    if (!util.isString(e.schemaUrl)) {
                                        return "schemaUrl: string expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.metrics.v1.ScopeMetrics) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.metrics.v1.ScopeMetrics;
                                if (e.scope != null) {
                                    if (typeof e.scope !== "object") {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.scope: object expected");
                                    }
                                    t.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(e.scope);
                                }
                                if (e.metrics) {
                                    if (!Array.isArray(e.metrics)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: array expected");
                                    }
                                    t.metrics = [];
                                    for(let r = 0; r < e.metrics.length; ++r){
                                        if (typeof e.metrics[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: object expected");
                                        }
                                        t.metrics[r] = a.opentelemetry.proto.metrics.v1.Metric.fromObject(e.metrics[r]);
                                    }
                                }
                                if (e.schemaUrl != null) {
                                    t.schemaUrl = String(e.schemaUrl);
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.metrics = [];
                                }
                                if (t.defaults) {
                                    r.scope = null;
                                    r.schemaUrl = "";
                                }
                                if (e.scope != null && e.hasOwnProperty("scope")) {
                                    r.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.toObject(e.scope, t);
                                }
                                if (e.metrics && e.metrics.length) {
                                    r.metrics = [];
                                    for(let n = 0; n < e.metrics.length; ++n){
                                        r.metrics[n] = a.opentelemetry.proto.metrics.v1.Metric.toObject(e.metrics[n], t);
                                    }
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    r.schemaUrl = e.schemaUrl;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.metrics.v1.ScopeMetrics`;
                            }
                        }
                        i.prototype.scope = null;
                        i.prototype.metrics = util.emptyArray;
                        i.prototype.schemaUrl = null;
                        return i;
                    }();
                    d.Metric = function() {
                        class i {
                            constructor(e){
                                this.metadata = [];
                                if (e) {
                                    for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                        if (e[t[r]] != null) {
                                            this[t[r]] = e[t[r]];
                                        }
                                    }
                                }
                            }
                            static create(t) {
                                return new i(t);
                            }
                            static encode(t, r) {
                                if (!r) {
                                    r = Writer.create();
                                }
                                if (t.name != null && Object.hasOwnProperty.call(t, "name")) {
                                    r.uint32(10).string(t.name);
                                }
                                if (t.description != null && Object.hasOwnProperty.call(t, "description")) {
                                    r.uint32(18).string(t.description);
                                }
                                if (t.unit != null && Object.hasOwnProperty.call(t, "unit")) {
                                    r.uint32(26).string(t.unit);
                                }
                                if (t.gauge != null && Object.hasOwnProperty.call(t, "gauge")) {
                                    a.opentelemetry.proto.metrics.v1.Gauge.encode(t.gauge, r.uint32(42).fork()).ldelim();
                                }
                                if (t.sum != null && Object.hasOwnProperty.call(t, "sum")) {
                                    a.opentelemetry.proto.metrics.v1.Sum.encode(t.sum, r.uint32(58).fork()).ldelim();
                                }
                                if (t.histogram != null && Object.hasOwnProperty.call(t, "histogram")) {
                                    a.opentelemetry.proto.metrics.v1.Histogram.encode(t.histogram, r.uint32(74).fork()).ldelim();
                                }
                                if (t.exponentialHistogram != null && Object.hasOwnProperty.call(t, "exponentialHistogram")) {
                                    a.opentelemetry.proto.metrics.v1.ExponentialHistogram.encode(t.exponentialHistogram, r.uint32(82).fork()).ldelim();
                                }
                                if (t.summary != null && Object.hasOwnProperty.call(t, "summary")) {
                                    a.opentelemetry.proto.metrics.v1.Summary.encode(t.summary, r.uint32(90).fork()).ldelim();
                                }
                                if (t.metadata != null && t.metadata.length) {
                                    for(let n = 0; n < t.metadata.length; ++n){
                                        a.opentelemetry.proto.common.v1.KeyValue.encode(t.metadata[n], r.uint32(98).fork()).ldelim();
                                    }
                                }
                                return r;
                            }
                            static encodeDelimited(t, r) {
                                return this.encode(t, r).ldelim();
                            }
                            static decode(t, r, n) {
                                if (!(t instanceof Reader)) {
                                    t = Reader.create(t);
                                }
                                const c = r === undefined ? t.len : t.pos + r;
                                const s = new a.opentelemetry.proto.metrics.v1.Metric;
                                while(t.pos < c){
                                    const m = t.uint32();
                                    if (m === n) {
                                        break;
                                    }
                                    switch(m >>> 3){
                                        case 1:
                                            {
                                                s.name = t.string();
                                                break;
                                            }
                                        case 2:
                                            {
                                                s.description = t.string();
                                                break;
                                            }
                                        case 3:
                                            {
                                                s.unit = t.string();
                                                break;
                                            }
                                        case 5:
                                            {
                                                s.gauge = a.opentelemetry.proto.metrics.v1.Gauge.decode(t, t.uint32());
                                                break;
                                            }
                                        case 7:
                                            {
                                                s.sum = a.opentelemetry.proto.metrics.v1.Sum.decode(t, t.uint32());
                                                break;
                                            }
                                        case 9:
                                            {
                                                s.histogram = a.opentelemetry.proto.metrics.v1.Histogram.decode(t, t.uint32());
                                                break;
                                            }
                                        case 10:
                                            {
                                                s.exponentialHistogram = a.opentelemetry.proto.metrics.v1.ExponentialHistogram.decode(t, t.uint32());
                                                break;
                                            }
                                        case 11:
                                            {
                                                s.summary = a.opentelemetry.proto.metrics.v1.Summary.decode(t, t.uint32());
                                                break;
                                            }
                                        case 12:
                                            {
                                                if (!(s.metadata && s.metadata.length)) {
                                                    s.metadata = [];
                                                }
                                                s.metadata.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                                                break;
                                            }
                                        default:
                                            t.skipType(m & 7);
                                            break;
                                    }
                                }
                                return s;
                            }
                            static decodeDelimited(t) {
                                if (!(t instanceof Reader)) {
                                    t = new Reader(t);
                                }
                                return this.decode(t, t.uint32());
                            }
                            static verify(t) {
                                if (typeof t !== "object" || t === null) {
                                    return "object expected";
                                }
                                const r = {};
                                if (t.name != null && t.hasOwnProperty("name")) {
                                    if (!util.isString(t.name)) {
                                        return "name: string expected";
                                    }
                                }
                                if (t.description != null && t.hasOwnProperty("description")) {
                                    if (!util.isString(t.description)) {
                                        return "description: string expected";
                                    }
                                }
                                if (t.unit != null && t.hasOwnProperty("unit")) {
                                    if (!util.isString(t.unit)) {
                                        return "unit: string expected";
                                    }
                                }
                                if (t.gauge != null && t.hasOwnProperty("gauge")) {
                                    r.data = 1;
                                    {
                                        var n = a.opentelemetry.proto.metrics.v1.Gauge.verify(t.gauge);
                                        if (n) {
                                            return `gauge.${n}`;
                                        }
                                    }
                                }
                                if (t.sum != null && t.hasOwnProperty("sum")) {
                                    if (r.data === 1) {
                                        return "data: multiple values";
                                    }
                                    r.data = 1;
                                    {
                                        var n = a.opentelemetry.proto.metrics.v1.Sum.verify(t.sum);
                                        if (n) {
                                            return `sum.${n}`;
                                        }
                                    }
                                }
                                if (t.histogram != null && t.hasOwnProperty("histogram")) {
                                    if (r.data === 1) {
                                        return "data: multiple values";
                                    }
                                    r.data = 1;
                                    {
                                        var n = a.opentelemetry.proto.metrics.v1.Histogram.verify(t.histogram);
                                        if (n) {
                                            return `histogram.${n}`;
                                        }
                                    }
                                }
                                if (t.exponentialHistogram != null && t.hasOwnProperty("exponentialHistogram")) {
                                    if (r.data === 1) {
                                        return "data: multiple values";
                                    }
                                    r.data = 1;
                                    {
                                        var n = a.opentelemetry.proto.metrics.v1.ExponentialHistogram.verify(t.exponentialHistogram);
                                        if (n) {
                                            return `exponentialHistogram.${n}`;
                                        }
                                    }
                                }
                                if (t.summary != null && t.hasOwnProperty("summary")) {
                                    if (r.data === 1) {
                                        return "data: multiple values";
                                    }
                                    r.data = 1;
                                    {
                                        var n = a.opentelemetry.proto.metrics.v1.Summary.verify(t.summary);
                                        if (n) {
                                            return `summary.${n}`;
                                        }
                                    }
                                }
                                if (t.metadata != null && t.hasOwnProperty("metadata")) {
                                    if (!Array.isArray(t.metadata)) {
                                        return "metadata: array expected";
                                    }
                                    for(let c = 0; c < t.metadata.length; ++c){
                                        var n = a.opentelemetry.proto.common.v1.KeyValue.verify(t.metadata[c]);
                                        if (n) {
                                            return `metadata.${n}`;
                                        }
                                    }
                                }
                                return null;
                            }
                            static fromObject(t) {
                                if (t instanceof a.opentelemetry.proto.metrics.v1.Metric) {
                                    return t;
                                }
                                const r = new a.opentelemetry.proto.metrics.v1.Metric;
                                if (t.name != null) {
                                    r.name = String(t.name);
                                }
                                if (t.description != null) {
                                    r.description = String(t.description);
                                }
                                if (t.unit != null) {
                                    r.unit = String(t.unit);
                                }
                                if (t.gauge != null) {
                                    if (typeof t.gauge !== "object") {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.Metric.gauge: object expected");
                                    }
                                    r.gauge = a.opentelemetry.proto.metrics.v1.Gauge.fromObject(t.gauge);
                                }
                                if (t.sum != null) {
                                    if (typeof t.sum !== "object") {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.Metric.sum: object expected");
                                    }
                                    r.sum = a.opentelemetry.proto.metrics.v1.Sum.fromObject(t.sum);
                                }
                                if (t.histogram != null) {
                                    if (typeof t.histogram !== "object") {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.Metric.histogram: object expected");
                                    }
                                    r.histogram = a.opentelemetry.proto.metrics.v1.Histogram.fromObject(t.histogram);
                                }
                                if (t.exponentialHistogram != null) {
                                    if (typeof t.exponentialHistogram !== "object") {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.Metric.exponentialHistogram: object expected");
                                    }
                                    r.exponentialHistogram = a.opentelemetry.proto.metrics.v1.ExponentialHistogram.fromObject(t.exponentialHistogram);
                                }
                                if (t.summary != null) {
                                    if (typeof t.summary !== "object") {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.Metric.summary: object expected");
                                    }
                                    r.summary = a.opentelemetry.proto.metrics.v1.Summary.fromObject(t.summary);
                                }
                                if (t.metadata) {
                                    if (!Array.isArray(t.metadata)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: array expected");
                                    }
                                    r.metadata = [];
                                    for(let n = 0; n < t.metadata.length; ++n){
                                        if (typeof t.metadata[n] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: object expected");
                                        }
                                        r.metadata[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.metadata[n]);
                                    }
                                }
                                return r;
                            }
                            static toObject(t, r) {
                                if (!r) {
                                    r = {};
                                }
                                const n = {};
                                if (r.arrays || r.defaults) {
                                    n.metadata = [];
                                }
                                if (r.defaults) {
                                    n.name = "";
                                    n.description = "";
                                    n.unit = "";
                                }
                                if (t.name != null && t.hasOwnProperty("name")) {
                                    n.name = t.name;
                                }
                                if (t.description != null && t.hasOwnProperty("description")) {
                                    n.description = t.description;
                                }
                                if (t.unit != null && t.hasOwnProperty("unit")) {
                                    n.unit = t.unit;
                                }
                                if (t.gauge != null && t.hasOwnProperty("gauge")) {
                                    n.gauge = a.opentelemetry.proto.metrics.v1.Gauge.toObject(t.gauge, r);
                                    if (r.oneofs) {
                                        n.data = "gauge";
                                    }
                                }
                                if (t.sum != null && t.hasOwnProperty("sum")) {
                                    n.sum = a.opentelemetry.proto.metrics.v1.Sum.toObject(t.sum, r);
                                    if (r.oneofs) {
                                        n.data = "sum";
                                    }
                                }
                                if (t.histogram != null && t.hasOwnProperty("histogram")) {
                                    n.histogram = a.opentelemetry.proto.metrics.v1.Histogram.toObject(t.histogram, r);
                                    if (r.oneofs) {
                                        n.data = "histogram";
                                    }
                                }
                                if (t.exponentialHistogram != null && t.hasOwnProperty("exponentialHistogram")) {
                                    n.exponentialHistogram = a.opentelemetry.proto.metrics.v1.ExponentialHistogram.toObject(t.exponentialHistogram, r);
                                    if (r.oneofs) {
                                        n.data = "exponentialHistogram";
                                    }
                                }
                                if (t.summary != null && t.hasOwnProperty("summary")) {
                                    n.summary = a.opentelemetry.proto.metrics.v1.Summary.toObject(t.summary, r);
                                    if (r.oneofs) {
                                        n.data = "summary";
                                    }
                                }
                                if (t.metadata && t.metadata.length) {
                                    n.metadata = [];
                                    for(let c = 0; c < t.metadata.length; ++c){
                                        n.metadata[c] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.metadata[c], r);
                                    }
                                }
                                return n;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(t = "type.googleapis.com") {
                                return `${t}/opentelemetry.proto.metrics.v1.Metric`;
                            }
                        }
                        i.prototype.name = null;
                        i.prototype.description = null;
                        i.prototype.unit = null;
                        i.prototype.gauge = null;
                        i.prototype.sum = null;
                        i.prototype.histogram = null;
                        i.prototype.exponentialHistogram = null;
                        i.prototype.summary = null;
                        i.prototype.metadata = util.emptyArray;
                        let o;
                        Object.defineProperty(i.prototype, "data", {
                            get: util.oneOfGetter(o = [
                                "gauge",
                                "sum",
                                "histogram",
                                "exponentialHistogram",
                                "summary"
                            ]),
                            set: util.oneOfSetter(o)
                        });
                        return i;
                    }();
                    d.Gauge = function() {
                        class i {
                            constructor(o){
                                this.dataPoints = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.dataPoints != null && e.dataPoints.length) {
                                    for(let r = 0; r < e.dataPoints.length; ++r){
                                        a.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(e.dataPoints[r], t.uint32(10).fork()).ldelim();
                                    }
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.metrics.v1.Gauge;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                if (!(c.dataPoints && c.dataPoints.length)) {
                                                    c.dataPoints = [];
                                                }
                                                c.dataPoints.push(a.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(e, e.uint32()));
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.dataPoints != null && e.hasOwnProperty("dataPoints")) {
                                    if (!Array.isArray(e.dataPoints)) {
                                        return "dataPoints: array expected";
                                    }
                                    for(let t = 0; t < e.dataPoints.length; ++t){
                                        const r = a.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(e.dataPoints[t]);
                                        if (r) {
                                            return `dataPoints.${r}`;
                                        }
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.metrics.v1.Gauge) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.metrics.v1.Gauge;
                                if (e.dataPoints) {
                                    if (!Array.isArray(e.dataPoints)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: array expected");
                                    }
                                    t.dataPoints = [];
                                    for(let r = 0; r < e.dataPoints.length; ++r){
                                        if (typeof e.dataPoints[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: object expected");
                                        }
                                        t.dataPoints[r] = a.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(e.dataPoints[r]);
                                    }
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.dataPoints = [];
                                }
                                if (e.dataPoints && e.dataPoints.length) {
                                    r.dataPoints = [];
                                    for(let n = 0; n < e.dataPoints.length; ++n){
                                        r.dataPoints[n] = a.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(e.dataPoints[n], t);
                                    }
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.metrics.v1.Gauge`;
                            }
                        }
                        i.prototype.dataPoints = util.emptyArray;
                        return i;
                    }();
                    d.Sum = function() {
                        class i {
                            constructor(o){
                                this.dataPoints = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.dataPoints != null && e.dataPoints.length) {
                                    for(let r = 0; r < e.dataPoints.length; ++r){
                                        a.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(e.dataPoints[r], t.uint32(10).fork()).ldelim();
                                    }
                                }
                                if (e.aggregationTemporality != null && Object.hasOwnProperty.call(e, "aggregationTemporality")) {
                                    t.uint32(16).int32(e.aggregationTemporality);
                                }
                                if (e.isMonotonic != null && Object.hasOwnProperty.call(e, "isMonotonic")) {
                                    t.uint32(24).bool(e.isMonotonic);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.metrics.v1.Sum;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                if (!(c.dataPoints && c.dataPoints.length)) {
                                                    c.dataPoints = [];
                                                }
                                                c.dataPoints.push(a.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 2:
                                            {
                                                c.aggregationTemporality = e.int32();
                                                break;
                                            }
                                        case 3:
                                            {
                                                c.isMonotonic = e.bool();
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.dataPoints != null && e.hasOwnProperty("dataPoints")) {
                                    if (!Array.isArray(e.dataPoints)) {
                                        return "dataPoints: array expected";
                                    }
                                    for(let t = 0; t < e.dataPoints.length; ++t){
                                        const r = a.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(e.dataPoints[t]);
                                        if (r) {
                                            return `dataPoints.${r}`;
                                        }
                                    }
                                }
                                if (e.aggregationTemporality != null && e.hasOwnProperty("aggregationTemporality")) {
                                    switch(e.aggregationTemporality){
                                        default:
                                            return "aggregationTemporality: enum value expected";
                                        case 0:
                                        case 1:
                                        case 2:
                                            break;
                                    }
                                }
                                if (e.isMonotonic != null && e.hasOwnProperty("isMonotonic")) {
                                    if (typeof e.isMonotonic !== "boolean") {
                                        return "isMonotonic: boolean expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.metrics.v1.Sum) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.metrics.v1.Sum;
                                if (e.dataPoints) {
                                    if (!Array.isArray(e.dataPoints)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: array expected");
                                    }
                                    t.dataPoints = [];
                                    for(let r = 0; r < e.dataPoints.length; ++r){
                                        if (typeof e.dataPoints[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: object expected");
                                        }
                                        t.dataPoints[r] = a.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(e.dataPoints[r]);
                                    }
                                }
                                switch(e.aggregationTemporality){
                                    default:
                                        if (typeof e.aggregationTemporality === "number") {
                                            t.aggregationTemporality = e.aggregationTemporality;
                                            break;
                                        }
                                        break;
                                    case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                                    case 0:
                                        t.aggregationTemporality = 0;
                                        break;
                                    case "AGGREGATION_TEMPORALITY_DELTA":
                                    case 1:
                                        t.aggregationTemporality = 1;
                                        break;
                                    case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                                    case 2:
                                        t.aggregationTemporality = 2;
                                        break;
                                }
                                if (e.isMonotonic != null) {
                                    t.isMonotonic = Boolean(e.isMonotonic);
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.dataPoints = [];
                                }
                                if (t.defaults) {
                                    r.aggregationTemporality = t.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
                                    r.isMonotonic = false;
                                }
                                if (e.dataPoints && e.dataPoints.length) {
                                    r.dataPoints = [];
                                    for(let n = 0; n < e.dataPoints.length; ++n){
                                        r.dataPoints[n] = a.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(e.dataPoints[n], t);
                                    }
                                }
                                if (e.aggregationTemporality != null && e.hasOwnProperty("aggregationTemporality")) {
                                    r.aggregationTemporality = t.enums === String ? a.opentelemetry.proto.metrics.v1.AggregationTemporality[e.aggregationTemporality] === undefined ? e.aggregationTemporality : a.opentelemetry.proto.metrics.v1.AggregationTemporality[e.aggregationTemporality] : e.aggregationTemporality;
                                }
                                if (e.isMonotonic != null && e.hasOwnProperty("isMonotonic")) {
                                    r.isMonotonic = e.isMonotonic;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.metrics.v1.Sum`;
                            }
                        }
                        i.prototype.dataPoints = util.emptyArray;
                        i.prototype.aggregationTemporality = null;
                        i.prototype.isMonotonic = null;
                        return i;
                    }();
                    d.Histogram = function() {
                        class i {
                            constructor(o){
                                this.dataPoints = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.dataPoints != null && e.dataPoints.length) {
                                    for(let r = 0; r < e.dataPoints.length; ++r){
                                        a.opentelemetry.proto.metrics.v1.HistogramDataPoint.encode(e.dataPoints[r], t.uint32(10).fork()).ldelim();
                                    }
                                }
                                if (e.aggregationTemporality != null && Object.hasOwnProperty.call(e, "aggregationTemporality")) {
                                    t.uint32(16).int32(e.aggregationTemporality);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.metrics.v1.Histogram;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                if (!(c.dataPoints && c.dataPoints.length)) {
                                                    c.dataPoints = [];
                                                }
                                                c.dataPoints.push(a.opentelemetry.proto.metrics.v1.HistogramDataPoint.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 2:
                                            {
                                                c.aggregationTemporality = e.int32();
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.dataPoints != null && e.hasOwnProperty("dataPoints")) {
                                    if (!Array.isArray(e.dataPoints)) {
                                        return "dataPoints: array expected";
                                    }
                                    for(let t = 0; t < e.dataPoints.length; ++t){
                                        const r = a.opentelemetry.proto.metrics.v1.HistogramDataPoint.verify(e.dataPoints[t]);
                                        if (r) {
                                            return `dataPoints.${r}`;
                                        }
                                    }
                                }
                                if (e.aggregationTemporality != null && e.hasOwnProperty("aggregationTemporality")) {
                                    switch(e.aggregationTemporality){
                                        default:
                                            return "aggregationTemporality: enum value expected";
                                        case 0:
                                        case 1:
                                        case 2:
                                            break;
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.metrics.v1.Histogram) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.metrics.v1.Histogram;
                                if (e.dataPoints) {
                                    if (!Array.isArray(e.dataPoints)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: array expected");
                                    }
                                    t.dataPoints = [];
                                    for(let r = 0; r < e.dataPoints.length; ++r){
                                        if (typeof e.dataPoints[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: object expected");
                                        }
                                        t.dataPoints[r] = a.opentelemetry.proto.metrics.v1.HistogramDataPoint.fromObject(e.dataPoints[r]);
                                    }
                                }
                                switch(e.aggregationTemporality){
                                    default:
                                        if (typeof e.aggregationTemporality === "number") {
                                            t.aggregationTemporality = e.aggregationTemporality;
                                            break;
                                        }
                                        break;
                                    case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                                    case 0:
                                        t.aggregationTemporality = 0;
                                        break;
                                    case "AGGREGATION_TEMPORALITY_DELTA":
                                    case 1:
                                        t.aggregationTemporality = 1;
                                        break;
                                    case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                                    case 2:
                                        t.aggregationTemporality = 2;
                                        break;
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.dataPoints = [];
                                }
                                if (t.defaults) {
                                    r.aggregationTemporality = t.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
                                }
                                if (e.dataPoints && e.dataPoints.length) {
                                    r.dataPoints = [];
                                    for(let n = 0; n < e.dataPoints.length; ++n){
                                        r.dataPoints[n] = a.opentelemetry.proto.metrics.v1.HistogramDataPoint.toObject(e.dataPoints[n], t);
                                    }
                                }
                                if (e.aggregationTemporality != null && e.hasOwnProperty("aggregationTemporality")) {
                                    r.aggregationTemporality = t.enums === String ? a.opentelemetry.proto.metrics.v1.AggregationTemporality[e.aggregationTemporality] === undefined ? e.aggregationTemporality : a.opentelemetry.proto.metrics.v1.AggregationTemporality[e.aggregationTemporality] : e.aggregationTemporality;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.metrics.v1.Histogram`;
                            }
                        }
                        i.prototype.dataPoints = util.emptyArray;
                        i.prototype.aggregationTemporality = null;
                        return i;
                    }();
                    d.ExponentialHistogram = function() {
                        class i {
                            constructor(o){
                                this.dataPoints = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.dataPoints != null && e.dataPoints.length) {
                                    for(let r = 0; r < e.dataPoints.length; ++r){
                                        a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.encode(e.dataPoints[r], t.uint32(10).fork()).ldelim();
                                    }
                                }
                                if (e.aggregationTemporality != null && Object.hasOwnProperty.call(e, "aggregationTemporality")) {
                                    t.uint32(16).int32(e.aggregationTemporality);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.metrics.v1.ExponentialHistogram;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                if (!(c.dataPoints && c.dataPoints.length)) {
                                                    c.dataPoints = [];
                                                }
                                                c.dataPoints.push(a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 2:
                                            {
                                                c.aggregationTemporality = e.int32();
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.dataPoints != null && e.hasOwnProperty("dataPoints")) {
                                    if (!Array.isArray(e.dataPoints)) {
                                        return "dataPoints: array expected";
                                    }
                                    for(let t = 0; t < e.dataPoints.length; ++t){
                                        const r = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.verify(e.dataPoints[t]);
                                        if (r) {
                                            return `dataPoints.${r}`;
                                        }
                                    }
                                }
                                if (e.aggregationTemporality != null && e.hasOwnProperty("aggregationTemporality")) {
                                    switch(e.aggregationTemporality){
                                        default:
                                            return "aggregationTemporality: enum value expected";
                                        case 0:
                                        case 1:
                                        case 2:
                                            break;
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.metrics.v1.ExponentialHistogram) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.metrics.v1.ExponentialHistogram;
                                if (e.dataPoints) {
                                    if (!Array.isArray(e.dataPoints)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: array expected");
                                    }
                                    t.dataPoints = [];
                                    for(let r = 0; r < e.dataPoints.length; ++r){
                                        if (typeof e.dataPoints[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: object expected");
                                        }
                                        t.dataPoints[r] = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.fromObject(e.dataPoints[r]);
                                    }
                                }
                                switch(e.aggregationTemporality){
                                    default:
                                        if (typeof e.aggregationTemporality === "number") {
                                            t.aggregationTemporality = e.aggregationTemporality;
                                            break;
                                        }
                                        break;
                                    case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                                    case 0:
                                        t.aggregationTemporality = 0;
                                        break;
                                    case "AGGREGATION_TEMPORALITY_DELTA":
                                    case 1:
                                        t.aggregationTemporality = 1;
                                        break;
                                    case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                                    case 2:
                                        t.aggregationTemporality = 2;
                                        break;
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.dataPoints = [];
                                }
                                if (t.defaults) {
                                    r.aggregationTemporality = t.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
                                }
                                if (e.dataPoints && e.dataPoints.length) {
                                    r.dataPoints = [];
                                    for(let n = 0; n < e.dataPoints.length; ++n){
                                        r.dataPoints[n] = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.toObject(e.dataPoints[n], t);
                                    }
                                }
                                if (e.aggregationTemporality != null && e.hasOwnProperty("aggregationTemporality")) {
                                    r.aggregationTemporality = t.enums === String ? a.opentelemetry.proto.metrics.v1.AggregationTemporality[e.aggregationTemporality] === undefined ? e.aggregationTemporality : a.opentelemetry.proto.metrics.v1.AggregationTemporality[e.aggregationTemporality] : e.aggregationTemporality;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.metrics.v1.ExponentialHistogram`;
                            }
                        }
                        i.prototype.dataPoints = util.emptyArray;
                        i.prototype.aggregationTemporality = null;
                        return i;
                    }();
                    d.Summary = function() {
                        class i {
                            constructor(o){
                                this.dataPoints = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.dataPoints != null && e.dataPoints.length) {
                                    for(let r = 0; r < e.dataPoints.length; ++r){
                                        a.opentelemetry.proto.metrics.v1.SummaryDataPoint.encode(e.dataPoints[r], t.uint32(10).fork()).ldelim();
                                    }
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.metrics.v1.Summary;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                if (!(c.dataPoints && c.dataPoints.length)) {
                                                    c.dataPoints = [];
                                                }
                                                c.dataPoints.push(a.opentelemetry.proto.metrics.v1.SummaryDataPoint.decode(e, e.uint32()));
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.dataPoints != null && e.hasOwnProperty("dataPoints")) {
                                    if (!Array.isArray(e.dataPoints)) {
                                        return "dataPoints: array expected";
                                    }
                                    for(let t = 0; t < e.dataPoints.length; ++t){
                                        const r = a.opentelemetry.proto.metrics.v1.SummaryDataPoint.verify(e.dataPoints[t]);
                                        if (r) {
                                            return `dataPoints.${r}`;
                                        }
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.metrics.v1.Summary) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.metrics.v1.Summary;
                                if (e.dataPoints) {
                                    if (!Array.isArray(e.dataPoints)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: array expected");
                                    }
                                    t.dataPoints = [];
                                    for(let r = 0; r < e.dataPoints.length; ++r){
                                        if (typeof e.dataPoints[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: object expected");
                                        }
                                        t.dataPoints[r] = a.opentelemetry.proto.metrics.v1.SummaryDataPoint.fromObject(e.dataPoints[r]);
                                    }
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.dataPoints = [];
                                }
                                if (e.dataPoints && e.dataPoints.length) {
                                    r.dataPoints = [];
                                    for(let n = 0; n < e.dataPoints.length; ++n){
                                        r.dataPoints[n] = a.opentelemetry.proto.metrics.v1.SummaryDataPoint.toObject(e.dataPoints[n], t);
                                    }
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.metrics.v1.Summary`;
                            }
                        }
                        i.prototype.dataPoints = util.emptyArray;
                        return i;
                    }();
                    d.AggregationTemporality = (()=>{
                        const i = {};
                        const o = Object.create(i);
                        o[i[0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED"] = 0;
                        o[i[1] = "AGGREGATION_TEMPORALITY_DELTA"] = 1;
                        o[i[2] = "AGGREGATION_TEMPORALITY_CUMULATIVE"] = 2;
                        return o;
                    })();
                    d.DataPointFlags = (()=>{
                        const i = {};
                        const o = Object.create(i);
                        o[i[0] = "DATA_POINT_FLAGS_DO_NOT_USE"] = 0;
                        o[i[1] = "DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK"] = 1;
                        return o;
                    })();
                    d.NumberDataPoint = function() {
                        class i {
                            constructor(e){
                                this.attributes = [];
                                this.exemplars = [];
                                if (e) {
                                    for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                        if (e[t[r]] != null) {
                                            this[t[r]] = e[t[r]];
                                        }
                                    }
                                }
                            }
                            static create(t) {
                                return new i(t);
                            }
                            static encode(t, r) {
                                if (!r) {
                                    r = Writer.create();
                                }
                                if (t.startTimeUnixNano != null && Object.hasOwnProperty.call(t, "startTimeUnixNano")) {
                                    r.uint32(17).fixed64(t.startTimeUnixNano);
                                }
                                if (t.timeUnixNano != null && Object.hasOwnProperty.call(t, "timeUnixNano")) {
                                    r.uint32(25).fixed64(t.timeUnixNano);
                                }
                                if (t.asDouble != null && Object.hasOwnProperty.call(t, "asDouble")) {
                                    r.uint32(33).double(t.asDouble);
                                }
                                if (t.exemplars != null && t.exemplars.length) {
                                    for(var n = 0; n < t.exemplars.length; ++n){
                                        a.opentelemetry.proto.metrics.v1.Exemplar.encode(t.exemplars[n], r.uint32(42).fork()).ldelim();
                                    }
                                }
                                if (t.asInt != null && Object.hasOwnProperty.call(t, "asInt")) {
                                    r.uint32(49).sfixed64(t.asInt);
                                }
                                if (t.attributes != null && t.attributes.length) {
                                    for(var n = 0; n < t.attributes.length; ++n){
                                        a.opentelemetry.proto.common.v1.KeyValue.encode(t.attributes[n], r.uint32(58).fork()).ldelim();
                                    }
                                }
                                if (t.flags != null && Object.hasOwnProperty.call(t, "flags")) {
                                    r.uint32(64).uint32(t.flags);
                                }
                                return r;
                            }
                            static encodeDelimited(t, r) {
                                return this.encode(t, r).ldelim();
                            }
                            static decode(t, r, n) {
                                if (!(t instanceof Reader)) {
                                    t = Reader.create(t);
                                }
                                const c = r === undefined ? t.len : t.pos + r;
                                const s = new a.opentelemetry.proto.metrics.v1.NumberDataPoint;
                                while(t.pos < c){
                                    const m = t.uint32();
                                    if (m === n) {
                                        break;
                                    }
                                    switch(m >>> 3){
                                        case 7:
                                            {
                                                if (!(s.attributes && s.attributes.length)) {
                                                    s.attributes = [];
                                                }
                                                s.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                                                break;
                                            }
                                        case 2:
                                            {
                                                s.startTimeUnixNano = t.fixed64();
                                                break;
                                            }
                                        case 3:
                                            {
                                                s.timeUnixNano = t.fixed64();
                                                break;
                                            }
                                        case 4:
                                            {
                                                s.asDouble = t.double();
                                                break;
                                            }
                                        case 6:
                                            {
                                                s.asInt = t.sfixed64();
                                                break;
                                            }
                                        case 5:
                                            {
                                                if (!(s.exemplars && s.exemplars.length)) {
                                                    s.exemplars = [];
                                                }
                                                s.exemplars.push(a.opentelemetry.proto.metrics.v1.Exemplar.decode(t, t.uint32()));
                                                break;
                                            }
                                        case 8:
                                            {
                                                s.flags = t.uint32();
                                                break;
                                            }
                                        default:
                                            t.skipType(m & 7);
                                            break;
                                    }
                                }
                                return s;
                            }
                            static decodeDelimited(t) {
                                if (!(t instanceof Reader)) {
                                    t = new Reader(t);
                                }
                                return this.decode(t, t.uint32());
                            }
                            static verify(t) {
                                if (typeof t !== "object" || t === null) {
                                    return "object expected";
                                }
                                const r = {};
                                if (t.attributes != null && t.hasOwnProperty("attributes")) {
                                    if (!Array.isArray(t.attributes)) {
                                        return "attributes: array expected";
                                    }
                                    for(var n = 0; n < t.attributes.length; ++n){
                                        var c = a.opentelemetry.proto.common.v1.KeyValue.verify(t.attributes[n]);
                                        if (c) {
                                            return `attributes.${c}`;
                                        }
                                    }
                                }
                                if (t.startTimeUnixNano != null && t.hasOwnProperty("startTimeUnixNano")) {
                                    if (!util.isInteger(t.startTimeUnixNano) && !(t.startTimeUnixNano && util.isInteger(t.startTimeUnixNano.low) && util.isInteger(t.startTimeUnixNano.high))) {
                                        return "startTimeUnixNano: integer|Long expected";
                                    }
                                }
                                if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                                    if (!util.isInteger(t.timeUnixNano) && !(t.timeUnixNano && util.isInteger(t.timeUnixNano.low) && util.isInteger(t.timeUnixNano.high))) {
                                        return "timeUnixNano: integer|Long expected";
                                    }
                                }
                                if (t.asDouble != null && t.hasOwnProperty("asDouble")) {
                                    r.value = 1;
                                    if (typeof t.asDouble !== "number") {
                                        return "asDouble: number expected";
                                    }
                                }
                                if (t.asInt != null && t.hasOwnProperty("asInt")) {
                                    if (r.value === 1) {
                                        return "value: multiple values";
                                    }
                                    r.value = 1;
                                    if (!util.isInteger(t.asInt) && !(t.asInt && util.isInteger(t.asInt.low) && util.isInteger(t.asInt.high))) {
                                        return "asInt: integer|Long expected";
                                    }
                                }
                                if (t.exemplars != null && t.hasOwnProperty("exemplars")) {
                                    if (!Array.isArray(t.exemplars)) {
                                        return "exemplars: array expected";
                                    }
                                    for(var n = 0; n < t.exemplars.length; ++n){
                                        var c = a.opentelemetry.proto.metrics.v1.Exemplar.verify(t.exemplars[n]);
                                        if (c) {
                                            return `exemplars.${c}`;
                                        }
                                    }
                                }
                                if (t.flags != null && t.hasOwnProperty("flags")) {
                                    if (!util.isInteger(t.flags)) {
                                        return "flags: integer expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(t) {
                                if (t instanceof a.opentelemetry.proto.metrics.v1.NumberDataPoint) {
                                    return t;
                                }
                                const r = new a.opentelemetry.proto.metrics.v1.NumberDataPoint;
                                if (t.attributes) {
                                    if (!Array.isArray(t.attributes)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: array expected");
                                    }
                                    r.attributes = [];
                                    for(var n = 0; n < t.attributes.length; ++n){
                                        if (typeof t.attributes[n] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: object expected");
                                        }
                                        r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.attributes[n]);
                                    }
                                }
                                if (t.startTimeUnixNano != null) {
                                    if (util.Long) {
                                        (r.startTimeUnixNano = util.Long.fromValue(t.startTimeUnixNano)).unsigned = false;
                                    } else if (typeof t.startTimeUnixNano === "string") {
                                        r.startTimeUnixNano = parseInt(t.startTimeUnixNano, 10);
                                    } else if (typeof t.startTimeUnixNano === "number") {
                                        r.startTimeUnixNano = t.startTimeUnixNano;
                                    } else if (typeof t.startTimeUnixNano === "object") {
                                        r.startTimeUnixNano = new util.LongBits(t.startTimeUnixNano.low >>> 0, t.startTimeUnixNano.high >>> 0).toNumber();
                                    }
                                }
                                if (t.timeUnixNano != null) {
                                    if (util.Long) {
                                        (r.timeUnixNano = util.Long.fromValue(t.timeUnixNano)).unsigned = false;
                                    } else if (typeof t.timeUnixNano === "string") {
                                        r.timeUnixNano = parseInt(t.timeUnixNano, 10);
                                    } else if (typeof t.timeUnixNano === "number") {
                                        r.timeUnixNano = t.timeUnixNano;
                                    } else if (typeof t.timeUnixNano === "object") {
                                        r.timeUnixNano = new util.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber();
                                    }
                                }
                                if (t.asDouble != null) {
                                    r.asDouble = Number(t.asDouble);
                                }
                                if (t.asInt != null) {
                                    if (util.Long) {
                                        (r.asInt = util.Long.fromValue(t.asInt)).unsigned = false;
                                    } else if (typeof t.asInt === "string") {
                                        r.asInt = parseInt(t.asInt, 10);
                                    } else if (typeof t.asInt === "number") {
                                        r.asInt = t.asInt;
                                    } else if (typeof t.asInt === "object") {
                                        r.asInt = new util.LongBits(t.asInt.low >>> 0, t.asInt.high >>> 0).toNumber();
                                    }
                                }
                                if (t.exemplars) {
                                    if (!Array.isArray(t.exemplars)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: array expected");
                                    }
                                    r.exemplars = [];
                                    for(var n = 0; n < t.exemplars.length; ++n){
                                        if (typeof t.exemplars[n] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: object expected");
                                        }
                                        r.exemplars[n] = a.opentelemetry.proto.metrics.v1.Exemplar.fromObject(t.exemplars[n]);
                                    }
                                }
                                if (t.flags != null) {
                                    r.flags = t.flags >>> 0;
                                }
                                return r;
                            }
                            static toObject(t, r) {
                                if (!r) {
                                    r = {};
                                }
                                const n = {};
                                if (r.arrays || r.defaults) {
                                    n.exemplars = [];
                                    n.attributes = [];
                                }
                                if (r.defaults) {
                                    if (util.Long) {
                                        var c = new util.Long(0, 0, false);
                                        n.startTimeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                    } else {
                                        n.startTimeUnixNano = r.longs === String ? "0" : 0;
                                    }
                                    if (util.Long) {
                                        var c = new util.Long(0, 0, false);
                                        n.timeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                    } else {
                                        n.timeUnixNano = r.longs === String ? "0" : 0;
                                    }
                                    n.flags = 0;
                                }
                                if (t.startTimeUnixNano != null && t.hasOwnProperty("startTimeUnixNano")) {
                                    if (typeof t.startTimeUnixNano === "number") {
                                        n.startTimeUnixNano = r.longs === String ? String(t.startTimeUnixNano) : t.startTimeUnixNano;
                                    } else {
                                        n.startTimeUnixNano = r.longs === String ? util.Long.prototype.toString.call(t.startTimeUnixNano) : r.longs === Number ? new util.LongBits(t.startTimeUnixNano.low >>> 0, t.startTimeUnixNano.high >>> 0).toNumber() : t.startTimeUnixNano;
                                    }
                                }
                                if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                                    if (typeof t.timeUnixNano === "number") {
                                        n.timeUnixNano = r.longs === String ? String(t.timeUnixNano) : t.timeUnixNano;
                                    } else {
                                        n.timeUnixNano = r.longs === String ? util.Long.prototype.toString.call(t.timeUnixNano) : r.longs === Number ? new util.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber() : t.timeUnixNano;
                                    }
                                }
                                if (t.asDouble != null && t.hasOwnProperty("asDouble")) {
                                    n.asDouble = r.json && !isFinite(t.asDouble) ? String(t.asDouble) : t.asDouble;
                                    if (r.oneofs) {
                                        n.value = "asDouble";
                                    }
                                }
                                if (t.exemplars && t.exemplars.length) {
                                    n.exemplars = [];
                                    for(var s = 0; s < t.exemplars.length; ++s){
                                        n.exemplars[s] = a.opentelemetry.proto.metrics.v1.Exemplar.toObject(t.exemplars[s], r);
                                    }
                                }
                                if (t.asInt != null && t.hasOwnProperty("asInt")) {
                                    if (typeof t.asInt === "number") {
                                        n.asInt = r.longs === String ? String(t.asInt) : t.asInt;
                                    } else {
                                        n.asInt = r.longs === String ? util.Long.prototype.toString.call(t.asInt) : r.longs === Number ? new util.LongBits(t.asInt.low >>> 0, t.asInt.high >>> 0).toNumber() : t.asInt;
                                    }
                                    if (r.oneofs) {
                                        n.value = "asInt";
                                    }
                                }
                                if (t.attributes && t.attributes.length) {
                                    n.attributes = [];
                                    for(var s = 0; s < t.attributes.length; ++s){
                                        n.attributes[s] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.attributes[s], r);
                                    }
                                }
                                if (t.flags != null && t.hasOwnProperty("flags")) {
                                    n.flags = t.flags;
                                }
                                return n;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(t = "type.googleapis.com") {
                                return `${t}/opentelemetry.proto.metrics.v1.NumberDataPoint`;
                            }
                        }
                        i.prototype.attributes = util.emptyArray;
                        i.prototype.startTimeUnixNano = null;
                        i.prototype.timeUnixNano = null;
                        i.prototype.asDouble = null;
                        i.prototype.asInt = null;
                        i.prototype.exemplars = util.emptyArray;
                        i.prototype.flags = null;
                        let o;
                        Object.defineProperty(i.prototype, "value", {
                            get: util.oneOfGetter(o = [
                                "asDouble",
                                "asInt"
                            ]),
                            set: util.oneOfSetter(o)
                        });
                        return i;
                    }();
                    d.HistogramDataPoint = function() {
                        class i {
                            constructor(e){
                                this.attributes = [];
                                this.bucketCounts = [];
                                this.explicitBounds = [];
                                this.exemplars = [];
                                if (e) {
                                    for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                        if (e[t[r]] != null) {
                                            this[t[r]] = e[t[r]];
                                        }
                                    }
                                }
                            }
                            static create(t) {
                                return new i(t);
                            }
                            static encode(t, r) {
                                if (!r) {
                                    r = Writer.create();
                                }
                                if (t.startTimeUnixNano != null && Object.hasOwnProperty.call(t, "startTimeUnixNano")) {
                                    r.uint32(17).fixed64(t.startTimeUnixNano);
                                }
                                if (t.timeUnixNano != null && Object.hasOwnProperty.call(t, "timeUnixNano")) {
                                    r.uint32(25).fixed64(t.timeUnixNano);
                                }
                                if (t.count != null && Object.hasOwnProperty.call(t, "count")) {
                                    r.uint32(33).fixed64(t.count);
                                }
                                if (t.sum != null && Object.hasOwnProperty.call(t, "sum")) {
                                    r.uint32(41).double(t.sum);
                                }
                                if (t.bucketCounts != null && t.bucketCounts.length) {
                                    r.uint32(50).fork();
                                    for(var n = 0; n < t.bucketCounts.length; ++n){
                                        r.fixed64(t.bucketCounts[n]);
                                    }
                                    r.ldelim();
                                }
                                if (t.explicitBounds != null && t.explicitBounds.length) {
                                    r.uint32(58).fork();
                                    for(var n = 0; n < t.explicitBounds.length; ++n){
                                        r.double(t.explicitBounds[n]);
                                    }
                                    r.ldelim();
                                }
                                if (t.exemplars != null && t.exemplars.length) {
                                    for(var n = 0; n < t.exemplars.length; ++n){
                                        a.opentelemetry.proto.metrics.v1.Exemplar.encode(t.exemplars[n], r.uint32(66).fork()).ldelim();
                                    }
                                }
                                if (t.attributes != null && t.attributes.length) {
                                    for(var n = 0; n < t.attributes.length; ++n){
                                        a.opentelemetry.proto.common.v1.KeyValue.encode(t.attributes[n], r.uint32(74).fork()).ldelim();
                                    }
                                }
                                if (t.flags != null && Object.hasOwnProperty.call(t, "flags")) {
                                    r.uint32(80).uint32(t.flags);
                                }
                                if (t.min != null && Object.hasOwnProperty.call(t, "min")) {
                                    r.uint32(89).double(t.min);
                                }
                                if (t.max != null && Object.hasOwnProperty.call(t, "max")) {
                                    r.uint32(97).double(t.max);
                                }
                                return r;
                            }
                            static encodeDelimited(t, r) {
                                return this.encode(t, r).ldelim();
                            }
                            static decode(t, r, n) {
                                if (!(t instanceof Reader)) {
                                    t = Reader.create(t);
                                }
                                const c = r === undefined ? t.len : t.pos + r;
                                const s = new a.opentelemetry.proto.metrics.v1.HistogramDataPoint;
                                while(t.pos < c){
                                    const m = t.uint32();
                                    if (m === n) {
                                        break;
                                    }
                                    switch(m >>> 3){
                                        case 9:
                                            {
                                                if (!(s.attributes && s.attributes.length)) {
                                                    s.attributes = [];
                                                }
                                                s.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                                                break;
                                            }
                                        case 2:
                                            {
                                                s.startTimeUnixNano = t.fixed64();
                                                break;
                                            }
                                        case 3:
                                            {
                                                s.timeUnixNano = t.fixed64();
                                                break;
                                            }
                                        case 4:
                                            {
                                                s.count = t.fixed64();
                                                break;
                                            }
                                        case 5:
                                            {
                                                s.sum = t.double();
                                                break;
                                            }
                                        case 6:
                                            {
                                                if (!(s.bucketCounts && s.bucketCounts.length)) {
                                                    s.bucketCounts = [];
                                                }
                                                if ((m & 7) === 2) {
                                                    var U = t.uint32() + t.pos;
                                                    while(t.pos < U){
                                                        s.bucketCounts.push(t.fixed64());
                                                    }
                                                } else {
                                                    s.bucketCounts.push(t.fixed64());
                                                }
                                                break;
                                            }
                                        case 7:
                                            {
                                                if (!(s.explicitBounds && s.explicitBounds.length)) {
                                                    s.explicitBounds = [];
                                                }
                                                if ((m & 7) === 2) {
                                                    var U = t.uint32() + t.pos;
                                                    while(t.pos < U){
                                                        s.explicitBounds.push(t.double());
                                                    }
                                                } else {
                                                    s.explicitBounds.push(t.double());
                                                }
                                                break;
                                            }
                                        case 8:
                                            {
                                                if (!(s.exemplars && s.exemplars.length)) {
                                                    s.exemplars = [];
                                                }
                                                s.exemplars.push(a.opentelemetry.proto.metrics.v1.Exemplar.decode(t, t.uint32()));
                                                break;
                                            }
                                        case 10:
                                            {
                                                s.flags = t.uint32();
                                                break;
                                            }
                                        case 11:
                                            {
                                                s.min = t.double();
                                                break;
                                            }
                                        case 12:
                                            {
                                                s.max = t.double();
                                                break;
                                            }
                                        default:
                                            t.skipType(m & 7);
                                            break;
                                    }
                                }
                                return s;
                            }
                            static decodeDelimited(t) {
                                if (!(t instanceof Reader)) {
                                    t = new Reader(t);
                                }
                                return this.decode(t, t.uint32());
                            }
                            static verify(t) {
                                if (typeof t !== "object" || t === null) {
                                    return "object expected";
                                }
                                const r = {};
                                if (t.attributes != null && t.hasOwnProperty("attributes")) {
                                    if (!Array.isArray(t.attributes)) {
                                        return "attributes: array expected";
                                    }
                                    for(var n = 0; n < t.attributes.length; ++n){
                                        var c = a.opentelemetry.proto.common.v1.KeyValue.verify(t.attributes[n]);
                                        if (c) {
                                            return `attributes.${c}`;
                                        }
                                    }
                                }
                                if (t.startTimeUnixNano != null && t.hasOwnProperty("startTimeUnixNano")) {
                                    if (!util.isInteger(t.startTimeUnixNano) && !(t.startTimeUnixNano && util.isInteger(t.startTimeUnixNano.low) && util.isInteger(t.startTimeUnixNano.high))) {
                                        return "startTimeUnixNano: integer|Long expected";
                                    }
                                }
                                if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                                    if (!util.isInteger(t.timeUnixNano) && !(t.timeUnixNano && util.isInteger(t.timeUnixNano.low) && util.isInteger(t.timeUnixNano.high))) {
                                        return "timeUnixNano: integer|Long expected";
                                    }
                                }
                                if (t.count != null && t.hasOwnProperty("count")) {
                                    if (!util.isInteger(t.count) && !(t.count && util.isInteger(t.count.low) && util.isInteger(t.count.high))) {
                                        return "count: integer|Long expected";
                                    }
                                }
                                if (t.sum != null && t.hasOwnProperty("sum")) {
                                    r._sum = 1;
                                    if (typeof t.sum !== "number") {
                                        return "sum: number expected";
                                    }
                                }
                                if (t.bucketCounts != null && t.hasOwnProperty("bucketCounts")) {
                                    if (!Array.isArray(t.bucketCounts)) {
                                        return "bucketCounts: array expected";
                                    }
                                    for(var n = 0; n < t.bucketCounts.length; ++n){
                                        if (!util.isInteger(t.bucketCounts[n]) && !(t.bucketCounts[n] && util.isInteger(t.bucketCounts[n].low) && util.isInteger(t.bucketCounts[n].high))) {
                                            return "bucketCounts: integer|Long[] expected";
                                        }
                                    }
                                }
                                if (t.explicitBounds != null && t.hasOwnProperty("explicitBounds")) {
                                    if (!Array.isArray(t.explicitBounds)) {
                                        return "explicitBounds: array expected";
                                    }
                                    for(var n = 0; n < t.explicitBounds.length; ++n){
                                        if (typeof t.explicitBounds[n] !== "number") {
                                            return "explicitBounds: number[] expected";
                                        }
                                    }
                                }
                                if (t.exemplars != null && t.hasOwnProperty("exemplars")) {
                                    if (!Array.isArray(t.exemplars)) {
                                        return "exemplars: array expected";
                                    }
                                    for(var n = 0; n < t.exemplars.length; ++n){
                                        var c = a.opentelemetry.proto.metrics.v1.Exemplar.verify(t.exemplars[n]);
                                        if (c) {
                                            return `exemplars.${c}`;
                                        }
                                    }
                                }
                                if (t.flags != null && t.hasOwnProperty("flags")) {
                                    if (!util.isInteger(t.flags)) {
                                        return "flags: integer expected";
                                    }
                                }
                                if (t.min != null && t.hasOwnProperty("min")) {
                                    r._min = 1;
                                    if (typeof t.min !== "number") {
                                        return "min: number expected";
                                    }
                                }
                                if (t.max != null && t.hasOwnProperty("max")) {
                                    r._max = 1;
                                    if (typeof t.max !== "number") {
                                        return "max: number expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(t) {
                                if (t instanceof a.opentelemetry.proto.metrics.v1.HistogramDataPoint) {
                                    return t;
                                }
                                const r = new a.opentelemetry.proto.metrics.v1.HistogramDataPoint;
                                if (t.attributes) {
                                    if (!Array.isArray(t.attributes)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: array expected");
                                    }
                                    r.attributes = [];
                                    for(var n = 0; n < t.attributes.length; ++n){
                                        if (typeof t.attributes[n] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: object expected");
                                        }
                                        r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.attributes[n]);
                                    }
                                }
                                if (t.startTimeUnixNano != null) {
                                    if (util.Long) {
                                        (r.startTimeUnixNano = util.Long.fromValue(t.startTimeUnixNano)).unsigned = false;
                                    } else if (typeof t.startTimeUnixNano === "string") {
                                        r.startTimeUnixNano = parseInt(t.startTimeUnixNano, 10);
                                    } else if (typeof t.startTimeUnixNano === "number") {
                                        r.startTimeUnixNano = t.startTimeUnixNano;
                                    } else if (typeof t.startTimeUnixNano === "object") {
                                        r.startTimeUnixNano = new util.LongBits(t.startTimeUnixNano.low >>> 0, t.startTimeUnixNano.high >>> 0).toNumber();
                                    }
                                }
                                if (t.timeUnixNano != null) {
                                    if (util.Long) {
                                        (r.timeUnixNano = util.Long.fromValue(t.timeUnixNano)).unsigned = false;
                                    } else if (typeof t.timeUnixNano === "string") {
                                        r.timeUnixNano = parseInt(t.timeUnixNano, 10);
                                    } else if (typeof t.timeUnixNano === "number") {
                                        r.timeUnixNano = t.timeUnixNano;
                                    } else if (typeof t.timeUnixNano === "object") {
                                        r.timeUnixNano = new util.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber();
                                    }
                                }
                                if (t.count != null) {
                                    if (util.Long) {
                                        (r.count = util.Long.fromValue(t.count)).unsigned = false;
                                    } else if (typeof t.count === "string") {
                                        r.count = parseInt(t.count, 10);
                                    } else if (typeof t.count === "number") {
                                        r.count = t.count;
                                    } else if (typeof t.count === "object") {
                                        r.count = new util.LongBits(t.count.low >>> 0, t.count.high >>> 0).toNumber();
                                    }
                                }
                                if (t.sum != null) {
                                    r.sum = Number(t.sum);
                                }
                                if (t.bucketCounts) {
                                    if (!Array.isArray(t.bucketCounts)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.bucketCounts: array expected");
                                    }
                                    r.bucketCounts = [];
                                    for(var n = 0; n < t.bucketCounts.length; ++n){
                                        if (util.Long) {
                                            (r.bucketCounts[n] = util.Long.fromValue(t.bucketCounts[n])).unsigned = false;
                                        } else if (typeof t.bucketCounts[n] === "string") {
                                            r.bucketCounts[n] = parseInt(t.bucketCounts[n], 10);
                                        } else if (typeof t.bucketCounts[n] === "number") {
                                            r.bucketCounts[n] = t.bucketCounts[n];
                                        } else if (typeof t.bucketCounts[n] === "object") {
                                            r.bucketCounts[n] = new util.LongBits(t.bucketCounts[n].low >>> 0, t.bucketCounts[n].high >>> 0).toNumber();
                                        }
                                    }
                                }
                                if (t.explicitBounds) {
                                    if (!Array.isArray(t.explicitBounds)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.explicitBounds: array expected");
                                    }
                                    r.explicitBounds = [];
                                    for(var n = 0; n < t.explicitBounds.length; ++n){
                                        r.explicitBounds[n] = Number(t.explicitBounds[n]);
                                    }
                                }
                                if (t.exemplars) {
                                    if (!Array.isArray(t.exemplars)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: array expected");
                                    }
                                    r.exemplars = [];
                                    for(var n = 0; n < t.exemplars.length; ++n){
                                        if (typeof t.exemplars[n] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: object expected");
                                        }
                                        r.exemplars[n] = a.opentelemetry.proto.metrics.v1.Exemplar.fromObject(t.exemplars[n]);
                                    }
                                }
                                if (t.flags != null) {
                                    r.flags = t.flags >>> 0;
                                }
                                if (t.min != null) {
                                    r.min = Number(t.min);
                                }
                                if (t.max != null) {
                                    r.max = Number(t.max);
                                }
                                return r;
                            }
                            static toObject(t, r) {
                                if (!r) {
                                    r = {};
                                }
                                const n = {};
                                if (r.arrays || r.defaults) {
                                    n.bucketCounts = [];
                                    n.explicitBounds = [];
                                    n.exemplars = [];
                                    n.attributes = [];
                                }
                                if (r.defaults) {
                                    if (util.Long) {
                                        var c = new util.Long(0, 0, false);
                                        n.startTimeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                    } else {
                                        n.startTimeUnixNano = r.longs === String ? "0" : 0;
                                    }
                                    if (util.Long) {
                                        var c = new util.Long(0, 0, false);
                                        n.timeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                    } else {
                                        n.timeUnixNano = r.longs === String ? "0" : 0;
                                    }
                                    if (util.Long) {
                                        var c = new util.Long(0, 0, false);
                                        n.count = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                    } else {
                                        n.count = r.longs === String ? "0" : 0;
                                    }
                                    n.flags = 0;
                                }
                                if (t.startTimeUnixNano != null && t.hasOwnProperty("startTimeUnixNano")) {
                                    if (typeof t.startTimeUnixNano === "number") {
                                        n.startTimeUnixNano = r.longs === String ? String(t.startTimeUnixNano) : t.startTimeUnixNano;
                                    } else {
                                        n.startTimeUnixNano = r.longs === String ? util.Long.prototype.toString.call(t.startTimeUnixNano) : r.longs === Number ? new util.LongBits(t.startTimeUnixNano.low >>> 0, t.startTimeUnixNano.high >>> 0).toNumber() : t.startTimeUnixNano;
                                    }
                                }
                                if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                                    if (typeof t.timeUnixNano === "number") {
                                        n.timeUnixNano = r.longs === String ? String(t.timeUnixNano) : t.timeUnixNano;
                                    } else {
                                        n.timeUnixNano = r.longs === String ? util.Long.prototype.toString.call(t.timeUnixNano) : r.longs === Number ? new util.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber() : t.timeUnixNano;
                                    }
                                }
                                if (t.count != null && t.hasOwnProperty("count")) {
                                    if (typeof t.count === "number") {
                                        n.count = r.longs === String ? String(t.count) : t.count;
                                    } else {
                                        n.count = r.longs === String ? util.Long.prototype.toString.call(t.count) : r.longs === Number ? new util.LongBits(t.count.low >>> 0, t.count.high >>> 0).toNumber() : t.count;
                                    }
                                }
                                if (t.sum != null && t.hasOwnProperty("sum")) {
                                    n.sum = r.json && !isFinite(t.sum) ? String(t.sum) : t.sum;
                                    if (r.oneofs) {
                                        n._sum = "sum";
                                    }
                                }
                                if (t.bucketCounts && t.bucketCounts.length) {
                                    n.bucketCounts = [];
                                    for(var s = 0; s < t.bucketCounts.length; ++s){
                                        if (typeof t.bucketCounts[s] === "number") {
                                            n.bucketCounts[s] = r.longs === String ? String(t.bucketCounts[s]) : t.bucketCounts[s];
                                        } else {
                                            n.bucketCounts[s] = r.longs === String ? util.Long.prototype.toString.call(t.bucketCounts[s]) : r.longs === Number ? new util.LongBits(t.bucketCounts[s].low >>> 0, t.bucketCounts[s].high >>> 0).toNumber() : t.bucketCounts[s];
                                        }
                                    }
                                }
                                if (t.explicitBounds && t.explicitBounds.length) {
                                    n.explicitBounds = [];
                                    for(var s = 0; s < t.explicitBounds.length; ++s){
                                        n.explicitBounds[s] = r.json && !isFinite(t.explicitBounds[s]) ? String(t.explicitBounds[s]) : t.explicitBounds[s];
                                    }
                                }
                                if (t.exemplars && t.exemplars.length) {
                                    n.exemplars = [];
                                    for(var s = 0; s < t.exemplars.length; ++s){
                                        n.exemplars[s] = a.opentelemetry.proto.metrics.v1.Exemplar.toObject(t.exemplars[s], r);
                                    }
                                }
                                if (t.attributes && t.attributes.length) {
                                    n.attributes = [];
                                    for(var s = 0; s < t.attributes.length; ++s){
                                        n.attributes[s] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.attributes[s], r);
                                    }
                                }
                                if (t.flags != null && t.hasOwnProperty("flags")) {
                                    n.flags = t.flags;
                                }
                                if (t.min != null && t.hasOwnProperty("min")) {
                                    n.min = r.json && !isFinite(t.min) ? String(t.min) : t.min;
                                    if (r.oneofs) {
                                        n._min = "min";
                                    }
                                }
                                if (t.max != null && t.hasOwnProperty("max")) {
                                    n.max = r.json && !isFinite(t.max) ? String(t.max) : t.max;
                                    if (r.oneofs) {
                                        n._max = "max";
                                    }
                                }
                                return n;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(t = "type.googleapis.com") {
                                return `${t}/opentelemetry.proto.metrics.v1.HistogramDataPoint`;
                            }
                        }
                        i.prototype.attributes = util.emptyArray;
                        i.prototype.startTimeUnixNano = null;
                        i.prototype.timeUnixNano = null;
                        i.prototype.count = null;
                        i.prototype.sum = null;
                        i.prototype.bucketCounts = util.emptyArray;
                        i.prototype.explicitBounds = util.emptyArray;
                        i.prototype.exemplars = util.emptyArray;
                        i.prototype.flags = null;
                        i.prototype.min = null;
                        i.prototype.max = null;
                        let o;
                        Object.defineProperty(i.prototype, "_sum", {
                            get: util.oneOfGetter(o = [
                                "sum"
                            ]),
                            set: util.oneOfSetter(o)
                        });
                        Object.defineProperty(i.prototype, "_min", {
                            get: util.oneOfGetter(o = [
                                "min"
                            ]),
                            set: util.oneOfSetter(o)
                        });
                        Object.defineProperty(i.prototype, "_max", {
                            get: util.oneOfGetter(o = [
                                "max"
                            ]),
                            set: util.oneOfSetter(o)
                        });
                        return i;
                    }();
                    d.ExponentialHistogramDataPoint = function() {
                        class i {
                            constructor(e){
                                this.attributes = [];
                                this.exemplars = [];
                                if (e) {
                                    for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                        if (e[t[r]] != null) {
                                            this[t[r]] = e[t[r]];
                                        }
                                    }
                                }
                            }
                            static create(t) {
                                return new i(t);
                            }
                            static encode(t, r) {
                                if (!r) {
                                    r = Writer.create();
                                }
                                if (t.attributes != null && t.attributes.length) {
                                    for(var n = 0; n < t.attributes.length; ++n){
                                        a.opentelemetry.proto.common.v1.KeyValue.encode(t.attributes[n], r.uint32(10).fork()).ldelim();
                                    }
                                }
                                if (t.startTimeUnixNano != null && Object.hasOwnProperty.call(t, "startTimeUnixNano")) {
                                    r.uint32(17).fixed64(t.startTimeUnixNano);
                                }
                                if (t.timeUnixNano != null && Object.hasOwnProperty.call(t, "timeUnixNano")) {
                                    r.uint32(25).fixed64(t.timeUnixNano);
                                }
                                if (t.count != null && Object.hasOwnProperty.call(t, "count")) {
                                    r.uint32(33).fixed64(t.count);
                                }
                                if (t.sum != null && Object.hasOwnProperty.call(t, "sum")) {
                                    r.uint32(41).double(t.sum);
                                }
                                if (t.scale != null && Object.hasOwnProperty.call(t, "scale")) {
                                    r.uint32(48).sint32(t.scale);
                                }
                                if (t.zeroCount != null && Object.hasOwnProperty.call(t, "zeroCount")) {
                                    r.uint32(57).fixed64(t.zeroCount);
                                }
                                if (t.positive != null && Object.hasOwnProperty.call(t, "positive")) {
                                    a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(t.positive, r.uint32(66).fork()).ldelim();
                                }
                                if (t.negative != null && Object.hasOwnProperty.call(t, "negative")) {
                                    a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(t.negative, r.uint32(74).fork()).ldelim();
                                }
                                if (t.flags != null && Object.hasOwnProperty.call(t, "flags")) {
                                    r.uint32(80).uint32(t.flags);
                                }
                                if (t.exemplars != null && t.exemplars.length) {
                                    for(var n = 0; n < t.exemplars.length; ++n){
                                        a.opentelemetry.proto.metrics.v1.Exemplar.encode(t.exemplars[n], r.uint32(90).fork()).ldelim();
                                    }
                                }
                                if (t.min != null && Object.hasOwnProperty.call(t, "min")) {
                                    r.uint32(97).double(t.min);
                                }
                                if (t.max != null && Object.hasOwnProperty.call(t, "max")) {
                                    r.uint32(105).double(t.max);
                                }
                                if (t.zeroThreshold != null && Object.hasOwnProperty.call(t, "zeroThreshold")) {
                                    r.uint32(113).double(t.zeroThreshold);
                                }
                                return r;
                            }
                            static encodeDelimited(t, r) {
                                return this.encode(t, r).ldelim();
                            }
                            static decode(t, r, n) {
                                if (!(t instanceof Reader)) {
                                    t = Reader.create(t);
                                }
                                const c = r === undefined ? t.len : t.pos + r;
                                const s = new a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint;
                                while(t.pos < c){
                                    const m = t.uint32();
                                    if (m === n) {
                                        break;
                                    }
                                    switch(m >>> 3){
                                        case 1:
                                            {
                                                if (!(s.attributes && s.attributes.length)) {
                                                    s.attributes = [];
                                                }
                                                s.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                                                break;
                                            }
                                        case 2:
                                            {
                                                s.startTimeUnixNano = t.fixed64();
                                                break;
                                            }
                                        case 3:
                                            {
                                                s.timeUnixNano = t.fixed64();
                                                break;
                                            }
                                        case 4:
                                            {
                                                s.count = t.fixed64();
                                                break;
                                            }
                                        case 5:
                                            {
                                                s.sum = t.double();
                                                break;
                                            }
                                        case 6:
                                            {
                                                s.scale = t.sint32();
                                                break;
                                            }
                                        case 7:
                                            {
                                                s.zeroCount = t.fixed64();
                                                break;
                                            }
                                        case 8:
                                            {
                                                s.positive = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(t, t.uint32());
                                                break;
                                            }
                                        case 9:
                                            {
                                                s.negative = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(t, t.uint32());
                                                break;
                                            }
                                        case 10:
                                            {
                                                s.flags = t.uint32();
                                                break;
                                            }
                                        case 11:
                                            {
                                                if (!(s.exemplars && s.exemplars.length)) {
                                                    s.exemplars = [];
                                                }
                                                s.exemplars.push(a.opentelemetry.proto.metrics.v1.Exemplar.decode(t, t.uint32()));
                                                break;
                                            }
                                        case 12:
                                            {
                                                s.min = t.double();
                                                break;
                                            }
                                        case 13:
                                            {
                                                s.max = t.double();
                                                break;
                                            }
                                        case 14:
                                            {
                                                s.zeroThreshold = t.double();
                                                break;
                                            }
                                        default:
                                            t.skipType(m & 7);
                                            break;
                                    }
                                }
                                return s;
                            }
                            static decodeDelimited(t) {
                                if (!(t instanceof Reader)) {
                                    t = new Reader(t);
                                }
                                return this.decode(t, t.uint32());
                            }
                            static verify(t) {
                                if (typeof t !== "object" || t === null) {
                                    return "object expected";
                                }
                                const r = {};
                                if (t.attributes != null && t.hasOwnProperty("attributes")) {
                                    if (!Array.isArray(t.attributes)) {
                                        return "attributes: array expected";
                                    }
                                    for(var n = 0; n < t.attributes.length; ++n){
                                        var c = a.opentelemetry.proto.common.v1.KeyValue.verify(t.attributes[n]);
                                        if (c) {
                                            return `attributes.${c}`;
                                        }
                                    }
                                }
                                if (t.startTimeUnixNano != null && t.hasOwnProperty("startTimeUnixNano")) {
                                    if (!util.isInteger(t.startTimeUnixNano) && !(t.startTimeUnixNano && util.isInteger(t.startTimeUnixNano.low) && util.isInteger(t.startTimeUnixNano.high))) {
                                        return "startTimeUnixNano: integer|Long expected";
                                    }
                                }
                                if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                                    if (!util.isInteger(t.timeUnixNano) && !(t.timeUnixNano && util.isInteger(t.timeUnixNano.low) && util.isInteger(t.timeUnixNano.high))) {
                                        return "timeUnixNano: integer|Long expected";
                                    }
                                }
                                if (t.count != null && t.hasOwnProperty("count")) {
                                    if (!util.isInteger(t.count) && !(t.count && util.isInteger(t.count.low) && util.isInteger(t.count.high))) {
                                        return "count: integer|Long expected";
                                    }
                                }
                                if (t.sum != null && t.hasOwnProperty("sum")) {
                                    r._sum = 1;
                                    if (typeof t.sum !== "number") {
                                        return "sum: number expected";
                                    }
                                }
                                if (t.scale != null && t.hasOwnProperty("scale")) {
                                    if (!util.isInteger(t.scale)) {
                                        return "scale: integer expected";
                                    }
                                }
                                if (t.zeroCount != null && t.hasOwnProperty("zeroCount")) {
                                    if (!util.isInteger(t.zeroCount) && !(t.zeroCount && util.isInteger(t.zeroCount.low) && util.isInteger(t.zeroCount.high))) {
                                        return "zeroCount: integer|Long expected";
                                    }
                                }
                                if (t.positive != null && t.hasOwnProperty("positive")) {
                                    var c = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(t.positive);
                                    if (c) {
                                        return `positive.${c}`;
                                    }
                                }
                                if (t.negative != null && t.hasOwnProperty("negative")) {
                                    var c = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(t.negative);
                                    if (c) {
                                        return `negative.${c}`;
                                    }
                                }
                                if (t.flags != null && t.hasOwnProperty("flags")) {
                                    if (!util.isInteger(t.flags)) {
                                        return "flags: integer expected";
                                    }
                                }
                                if (t.exemplars != null && t.hasOwnProperty("exemplars")) {
                                    if (!Array.isArray(t.exemplars)) {
                                        return "exemplars: array expected";
                                    }
                                    for(var n = 0; n < t.exemplars.length; ++n){
                                        var c = a.opentelemetry.proto.metrics.v1.Exemplar.verify(t.exemplars[n]);
                                        if (c) {
                                            return `exemplars.${c}`;
                                        }
                                    }
                                }
                                if (t.min != null && t.hasOwnProperty("min")) {
                                    r._min = 1;
                                    if (typeof t.min !== "number") {
                                        return "min: number expected";
                                    }
                                }
                                if (t.max != null && t.hasOwnProperty("max")) {
                                    r._max = 1;
                                    if (typeof t.max !== "number") {
                                        return "max: number expected";
                                    }
                                }
                                if (t.zeroThreshold != null && t.hasOwnProperty("zeroThreshold")) {
                                    if (typeof t.zeroThreshold !== "number") {
                                        return "zeroThreshold: number expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(t) {
                                if (t instanceof a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint) {
                                    return t;
                                }
                                const r = new a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint;
                                if (t.attributes) {
                                    if (!Array.isArray(t.attributes)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: array expected");
                                    }
                                    r.attributes = [];
                                    for(var n = 0; n < t.attributes.length; ++n){
                                        if (typeof t.attributes[n] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: object expected");
                                        }
                                        r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.attributes[n]);
                                    }
                                }
                                if (t.startTimeUnixNano != null) {
                                    if (util.Long) {
                                        (r.startTimeUnixNano = util.Long.fromValue(t.startTimeUnixNano)).unsigned = false;
                                    } else if (typeof t.startTimeUnixNano === "string") {
                                        r.startTimeUnixNano = parseInt(t.startTimeUnixNano, 10);
                                    } else if (typeof t.startTimeUnixNano === "number") {
                                        r.startTimeUnixNano = t.startTimeUnixNano;
                                    } else if (typeof t.startTimeUnixNano === "object") {
                                        r.startTimeUnixNano = new util.LongBits(t.startTimeUnixNano.low >>> 0, t.startTimeUnixNano.high >>> 0).toNumber();
                                    }
                                }
                                if (t.timeUnixNano != null) {
                                    if (util.Long) {
                                        (r.timeUnixNano = util.Long.fromValue(t.timeUnixNano)).unsigned = false;
                                    } else if (typeof t.timeUnixNano === "string") {
                                        r.timeUnixNano = parseInt(t.timeUnixNano, 10);
                                    } else if (typeof t.timeUnixNano === "number") {
                                        r.timeUnixNano = t.timeUnixNano;
                                    } else if (typeof t.timeUnixNano === "object") {
                                        r.timeUnixNano = new util.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber();
                                    }
                                }
                                if (t.count != null) {
                                    if (util.Long) {
                                        (r.count = util.Long.fromValue(t.count)).unsigned = false;
                                    } else if (typeof t.count === "string") {
                                        r.count = parseInt(t.count, 10);
                                    } else if (typeof t.count === "number") {
                                        r.count = t.count;
                                    } else if (typeof t.count === "object") {
                                        r.count = new util.LongBits(t.count.low >>> 0, t.count.high >>> 0).toNumber();
                                    }
                                }
                                if (t.sum != null) {
                                    r.sum = Number(t.sum);
                                }
                                if (t.scale != null) {
                                    r.scale = t.scale | 0;
                                }
                                if (t.zeroCount != null) {
                                    if (util.Long) {
                                        (r.zeroCount = util.Long.fromValue(t.zeroCount)).unsigned = false;
                                    } else if (typeof t.zeroCount === "string") {
                                        r.zeroCount = parseInt(t.zeroCount, 10);
                                    } else if (typeof t.zeroCount === "number") {
                                        r.zeroCount = t.zeroCount;
                                    } else if (typeof t.zeroCount === "object") {
                                        r.zeroCount = new util.LongBits(t.zeroCount.low >>> 0, t.zeroCount.high >>> 0).toNumber();
                                    }
                                }
                                if (t.positive != null) {
                                    if (typeof t.positive !== "object") {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.positive: object expected");
                                    }
                                    r.positive = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(t.positive);
                                }
                                if (t.negative != null) {
                                    if (typeof t.negative !== "object") {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.negative: object expected");
                                    }
                                    r.negative = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(t.negative);
                                }
                                if (t.flags != null) {
                                    r.flags = t.flags >>> 0;
                                }
                                if (t.exemplars) {
                                    if (!Array.isArray(t.exemplars)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: array expected");
                                    }
                                    r.exemplars = [];
                                    for(var n = 0; n < t.exemplars.length; ++n){
                                        if (typeof t.exemplars[n] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: object expected");
                                        }
                                        r.exemplars[n] = a.opentelemetry.proto.metrics.v1.Exemplar.fromObject(t.exemplars[n]);
                                    }
                                }
                                if (t.min != null) {
                                    r.min = Number(t.min);
                                }
                                if (t.max != null) {
                                    r.max = Number(t.max);
                                }
                                if (t.zeroThreshold != null) {
                                    r.zeroThreshold = Number(t.zeroThreshold);
                                }
                                return r;
                            }
                            static toObject(t, r) {
                                if (!r) {
                                    r = {};
                                }
                                const n = {};
                                if (r.arrays || r.defaults) {
                                    n.attributes = [];
                                    n.exemplars = [];
                                }
                                if (r.defaults) {
                                    if (util.Long) {
                                        var c = new util.Long(0, 0, false);
                                        n.startTimeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                    } else {
                                        n.startTimeUnixNano = r.longs === String ? "0" : 0;
                                    }
                                    if (util.Long) {
                                        var c = new util.Long(0, 0, false);
                                        n.timeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                    } else {
                                        n.timeUnixNano = r.longs === String ? "0" : 0;
                                    }
                                    if (util.Long) {
                                        var c = new util.Long(0, 0, false);
                                        n.count = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                    } else {
                                        n.count = r.longs === String ? "0" : 0;
                                    }
                                    n.scale = 0;
                                    if (util.Long) {
                                        var c = new util.Long(0, 0, false);
                                        n.zeroCount = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                    } else {
                                        n.zeroCount = r.longs === String ? "0" : 0;
                                    }
                                    n.positive = null;
                                    n.negative = null;
                                    n.flags = 0;
                                    n.zeroThreshold = 0;
                                }
                                if (t.attributes && t.attributes.length) {
                                    n.attributes = [];
                                    for(var s = 0; s < t.attributes.length; ++s){
                                        n.attributes[s] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.attributes[s], r);
                                    }
                                }
                                if (t.startTimeUnixNano != null && t.hasOwnProperty("startTimeUnixNano")) {
                                    if (typeof t.startTimeUnixNano === "number") {
                                        n.startTimeUnixNano = r.longs === String ? String(t.startTimeUnixNano) : t.startTimeUnixNano;
                                    } else {
                                        n.startTimeUnixNano = r.longs === String ? util.Long.prototype.toString.call(t.startTimeUnixNano) : r.longs === Number ? new util.LongBits(t.startTimeUnixNano.low >>> 0, t.startTimeUnixNano.high >>> 0).toNumber() : t.startTimeUnixNano;
                                    }
                                }
                                if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                                    if (typeof t.timeUnixNano === "number") {
                                        n.timeUnixNano = r.longs === String ? String(t.timeUnixNano) : t.timeUnixNano;
                                    } else {
                                        n.timeUnixNano = r.longs === String ? util.Long.prototype.toString.call(t.timeUnixNano) : r.longs === Number ? new util.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber() : t.timeUnixNano;
                                    }
                                }
                                if (t.count != null && t.hasOwnProperty("count")) {
                                    if (typeof t.count === "number") {
                                        n.count = r.longs === String ? String(t.count) : t.count;
                                    } else {
                                        n.count = r.longs === String ? util.Long.prototype.toString.call(t.count) : r.longs === Number ? new util.LongBits(t.count.low >>> 0, t.count.high >>> 0).toNumber() : t.count;
                                    }
                                }
                                if (t.sum != null && t.hasOwnProperty("sum")) {
                                    n.sum = r.json && !isFinite(t.sum) ? String(t.sum) : t.sum;
                                    if (r.oneofs) {
                                        n._sum = "sum";
                                    }
                                }
                                if (t.scale != null && t.hasOwnProperty("scale")) {
                                    n.scale = t.scale;
                                }
                                if (t.zeroCount != null && t.hasOwnProperty("zeroCount")) {
                                    if (typeof t.zeroCount === "number") {
                                        n.zeroCount = r.longs === String ? String(t.zeroCount) : t.zeroCount;
                                    } else {
                                        n.zeroCount = r.longs === String ? util.Long.prototype.toString.call(t.zeroCount) : r.longs === Number ? new util.LongBits(t.zeroCount.low >>> 0, t.zeroCount.high >>> 0).toNumber() : t.zeroCount;
                                    }
                                }
                                if (t.positive != null && t.hasOwnProperty("positive")) {
                                    n.positive = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(t.positive, r);
                                }
                                if (t.negative != null && t.hasOwnProperty("negative")) {
                                    n.negative = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(t.negative, r);
                                }
                                if (t.flags != null && t.hasOwnProperty("flags")) {
                                    n.flags = t.flags;
                                }
                                if (t.exemplars && t.exemplars.length) {
                                    n.exemplars = [];
                                    for(var s = 0; s < t.exemplars.length; ++s){
                                        n.exemplars[s] = a.opentelemetry.proto.metrics.v1.Exemplar.toObject(t.exemplars[s], r);
                                    }
                                }
                                if (t.min != null && t.hasOwnProperty("min")) {
                                    n.min = r.json && !isFinite(t.min) ? String(t.min) : t.min;
                                    if (r.oneofs) {
                                        n._min = "min";
                                    }
                                }
                                if (t.max != null && t.hasOwnProperty("max")) {
                                    n.max = r.json && !isFinite(t.max) ? String(t.max) : t.max;
                                    if (r.oneofs) {
                                        n._max = "max";
                                    }
                                }
                                if (t.zeroThreshold != null && t.hasOwnProperty("zeroThreshold")) {
                                    n.zeroThreshold = r.json && !isFinite(t.zeroThreshold) ? String(t.zeroThreshold) : t.zeroThreshold;
                                }
                                return n;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(t = "type.googleapis.com") {
                                return `${t}/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint`;
                            }
                        }
                        i.prototype.attributes = util.emptyArray;
                        i.prototype.startTimeUnixNano = null;
                        i.prototype.timeUnixNano = null;
                        i.prototype.count = null;
                        i.prototype.sum = null;
                        i.prototype.scale = null;
                        i.prototype.zeroCount = null;
                        i.prototype.positive = null;
                        i.prototype.negative = null;
                        i.prototype.flags = null;
                        i.prototype.exemplars = util.emptyArray;
                        i.prototype.min = null;
                        i.prototype.max = null;
                        i.prototype.zeroThreshold = null;
                        let o;
                        Object.defineProperty(i.prototype, "_sum", {
                            get: util.oneOfGetter(o = [
                                "sum"
                            ]),
                            set: util.oneOfSetter(o)
                        });
                        Object.defineProperty(i.prototype, "_min", {
                            get: util.oneOfGetter(o = [
                                "min"
                            ]),
                            set: util.oneOfSetter(o)
                        });
                        Object.defineProperty(i.prototype, "_max", {
                            get: util.oneOfGetter(o = [
                                "max"
                            ]),
                            set: util.oneOfSetter(o)
                        });
                        i.Buckets = function() {
                            class e {
                                constructor(t){
                                    this.bucketCounts = [];
                                    if (t) {
                                        for(let r = Object.keys(t), n = 0; n < r.length; ++n){
                                            if (t[r[n]] != null) {
                                                this[r[n]] = t[r[n]];
                                            }
                                        }
                                    }
                                }
                                static create(r) {
                                    return new e(r);
                                }
                                static encode(r, n) {
                                    if (!n) {
                                        n = Writer.create();
                                    }
                                    if (r.offset != null && Object.hasOwnProperty.call(r, "offset")) {
                                        n.uint32(8).sint32(r.offset);
                                    }
                                    if (r.bucketCounts != null && r.bucketCounts.length) {
                                        n.uint32(18).fork();
                                        for(let c = 0; c < r.bucketCounts.length; ++c){
                                            n.uint64(r.bucketCounts[c]);
                                        }
                                        n.ldelim();
                                    }
                                    return n;
                                }
                                static encodeDelimited(r, n) {
                                    return this.encode(r, n).ldelim();
                                }
                                static decode(r, n, c) {
                                    if (!(r instanceof Reader)) {
                                        r = Reader.create(r);
                                    }
                                    const s = n === undefined ? r.len : r.pos + n;
                                    const m = new a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets;
                                    while(r.pos < s){
                                        const U = r.uint32();
                                        if (U === c) {
                                            break;
                                        }
                                        switch(U >>> 3){
                                            case 1:
                                                {
                                                    m.offset = r.sint32();
                                                    break;
                                                }
                                            case 2:
                                                {
                                                    if (!(m.bucketCounts && m.bucketCounts.length)) {
                                                        m.bucketCounts = [];
                                                    }
                                                    if ((U & 7) === 2) {
                                                        const Q = r.uint32() + r.pos;
                                                        while(r.pos < Q){
                                                            m.bucketCounts.push(r.uint64());
                                                        }
                                                    } else {
                                                        m.bucketCounts.push(r.uint64());
                                                    }
                                                    break;
                                                }
                                            default:
                                                r.skipType(U & 7);
                                                break;
                                        }
                                    }
                                    return m;
                                }
                                static decodeDelimited(r) {
                                    if (!(r instanceof Reader)) {
                                        r = new Reader(r);
                                    }
                                    return this.decode(r, r.uint32());
                                }
                                static verify(r) {
                                    if (typeof r !== "object" || r === null) {
                                        return "object expected";
                                    }
                                    if (r.offset != null && r.hasOwnProperty("offset")) {
                                        if (!util.isInteger(r.offset)) {
                                            return "offset: integer expected";
                                        }
                                    }
                                    if (r.bucketCounts != null && r.hasOwnProperty("bucketCounts")) {
                                        if (!Array.isArray(r.bucketCounts)) {
                                            return "bucketCounts: array expected";
                                        }
                                        for(let n = 0; n < r.bucketCounts.length; ++n){
                                            if (!util.isInteger(r.bucketCounts[n]) && !(r.bucketCounts[n] && util.isInteger(r.bucketCounts[n].low) && util.isInteger(r.bucketCounts[n].high))) {
                                                return "bucketCounts: integer|Long[] expected";
                                            }
                                        }
                                    }
                                    return null;
                                }
                                static fromObject(r) {
                                    if (r instanceof a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets) {
                                        return r;
                                    }
                                    const n = new a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets;
                                    if (r.offset != null) {
                                        n.offset = r.offset | 0;
                                    }
                                    if (r.bucketCounts) {
                                        if (!Array.isArray(r.bucketCounts)) {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.bucketCounts: array expected");
                                        }
                                        n.bucketCounts = [];
                                        for(let c = 0; c < r.bucketCounts.length; ++c){
                                            if (util.Long) {
                                                (n.bucketCounts[c] = util.Long.fromValue(r.bucketCounts[c])).unsigned = true;
                                            } else if (typeof r.bucketCounts[c] === "string") {
                                                n.bucketCounts[c] = parseInt(r.bucketCounts[c], 10);
                                            } else if (typeof r.bucketCounts[c] === "number") {
                                                n.bucketCounts[c] = r.bucketCounts[c];
                                            } else if (typeof r.bucketCounts[c] === "object") {
                                                n.bucketCounts[c] = new util.LongBits(r.bucketCounts[c].low >>> 0, r.bucketCounts[c].high >>> 0).toNumber(true);
                                            }
                                        }
                                    }
                                    return n;
                                }
                                static toObject(r, n) {
                                    if (!n) {
                                        n = {};
                                    }
                                    const c = {};
                                    if (n.arrays || n.defaults) {
                                        c.bucketCounts = [];
                                    }
                                    if (n.defaults) {
                                        c.offset = 0;
                                    }
                                    if (r.offset != null && r.hasOwnProperty("offset")) {
                                        c.offset = r.offset;
                                    }
                                    if (r.bucketCounts && r.bucketCounts.length) {
                                        c.bucketCounts = [];
                                        for(let s = 0; s < r.bucketCounts.length; ++s){
                                            if (typeof r.bucketCounts[s] === "number") {
                                                c.bucketCounts[s] = n.longs === String ? String(r.bucketCounts[s]) : r.bucketCounts[s];
                                            } else {
                                                c.bucketCounts[s] = n.longs === String ? util.Long.prototype.toString.call(r.bucketCounts[s]) : n.longs === Number ? new util.LongBits(r.bucketCounts[s].low >>> 0, r.bucketCounts[s].high >>> 0).toNumber(true) : r.bucketCounts[s];
                                            }
                                        }
                                    }
                                    return c;
                                }
                                toJSON() {
                                    return this.constructor.toObject(this, S.util.toJSONOptions);
                                }
                                static getTypeUrl(r = "type.googleapis.com") {
                                    return `${r}/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets`;
                                }
                            }
                            e.prototype.offset = null;
                            e.prototype.bucketCounts = util.emptyArray;
                            return e;
                        }();
                        return i;
                    }();
                    d.SummaryDataPoint = function() {
                        class i {
                            constructor(o){
                                this.attributes = [];
                                this.quantileValues = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.startTimeUnixNano != null && Object.hasOwnProperty.call(e, "startTimeUnixNano")) {
                                    t.uint32(17).fixed64(e.startTimeUnixNano);
                                }
                                if (e.timeUnixNano != null && Object.hasOwnProperty.call(e, "timeUnixNano")) {
                                    t.uint32(25).fixed64(e.timeUnixNano);
                                }
                                if (e.count != null && Object.hasOwnProperty.call(e, "count")) {
                                    t.uint32(33).fixed64(e.count);
                                }
                                if (e.sum != null && Object.hasOwnProperty.call(e, "sum")) {
                                    t.uint32(41).double(e.sum);
                                }
                                if (e.quantileValues != null && e.quantileValues.length) {
                                    for(var r = 0; r < e.quantileValues.length; ++r){
                                        a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.encode(e.quantileValues[r], t.uint32(50).fork()).ldelim();
                                    }
                                }
                                if (e.attributes != null && e.attributes.length) {
                                    for(var r = 0; r < e.attributes.length; ++r){
                                        a.opentelemetry.proto.common.v1.KeyValue.encode(e.attributes[r], t.uint32(58).fork()).ldelim();
                                    }
                                }
                                if (e.flags != null && Object.hasOwnProperty.call(e, "flags")) {
                                    t.uint32(64).uint32(e.flags);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.metrics.v1.SummaryDataPoint;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 7:
                                            {
                                                if (!(c.attributes && c.attributes.length)) {
                                                    c.attributes = [];
                                                }
                                                c.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 2:
                                            {
                                                c.startTimeUnixNano = e.fixed64();
                                                break;
                                            }
                                        case 3:
                                            {
                                                c.timeUnixNano = e.fixed64();
                                                break;
                                            }
                                        case 4:
                                            {
                                                c.count = e.fixed64();
                                                break;
                                            }
                                        case 5:
                                            {
                                                c.sum = e.double();
                                                break;
                                            }
                                        case 6:
                                            {
                                                if (!(c.quantileValues && c.quantileValues.length)) {
                                                    c.quantileValues = [];
                                                }
                                                c.quantileValues.push(a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 8:
                                            {
                                                c.flags = e.uint32();
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.attributes != null && e.hasOwnProperty("attributes")) {
                                    if (!Array.isArray(e.attributes)) {
                                        return "attributes: array expected";
                                    }
                                    for(var t = 0; t < e.attributes.length; ++t){
                                        var r = a.opentelemetry.proto.common.v1.KeyValue.verify(e.attributes[t]);
                                        if (r) {
                                            return `attributes.${r}`;
                                        }
                                    }
                                }
                                if (e.startTimeUnixNano != null && e.hasOwnProperty("startTimeUnixNano")) {
                                    if (!util.isInteger(e.startTimeUnixNano) && !(e.startTimeUnixNano && util.isInteger(e.startTimeUnixNano.low) && util.isInteger(e.startTimeUnixNano.high))) {
                                        return "startTimeUnixNano: integer|Long expected";
                                    }
                                }
                                if (e.timeUnixNano != null && e.hasOwnProperty("timeUnixNano")) {
                                    if (!util.isInteger(e.timeUnixNano) && !(e.timeUnixNano && util.isInteger(e.timeUnixNano.low) && util.isInteger(e.timeUnixNano.high))) {
                                        return "timeUnixNano: integer|Long expected";
                                    }
                                }
                                if (e.count != null && e.hasOwnProperty("count")) {
                                    if (!util.isInteger(e.count) && !(e.count && util.isInteger(e.count.low) && util.isInteger(e.count.high))) {
                                        return "count: integer|Long expected";
                                    }
                                }
                                if (e.sum != null && e.hasOwnProperty("sum")) {
                                    if (typeof e.sum !== "number") {
                                        return "sum: number expected";
                                    }
                                }
                                if (e.quantileValues != null && e.hasOwnProperty("quantileValues")) {
                                    if (!Array.isArray(e.quantileValues)) {
                                        return "quantileValues: array expected";
                                    }
                                    for(var t = 0; t < e.quantileValues.length; ++t){
                                        var r = a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.verify(e.quantileValues[t]);
                                        if (r) {
                                            return `quantileValues.${r}`;
                                        }
                                    }
                                }
                                if (e.flags != null && e.hasOwnProperty("flags")) {
                                    if (!util.isInteger(e.flags)) {
                                        return "flags: integer expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.metrics.v1.SummaryDataPoint) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.metrics.v1.SummaryDataPoint;
                                if (e.attributes) {
                                    if (!Array.isArray(e.attributes)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: array expected");
                                    }
                                    t.attributes = [];
                                    for(var r = 0; r < e.attributes.length; ++r){
                                        if (typeof e.attributes[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: object expected");
                                        }
                                        t.attributes[r] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(e.attributes[r]);
                                    }
                                }
                                if (e.startTimeUnixNano != null) {
                                    if (util.Long) {
                                        (t.startTimeUnixNano = util.Long.fromValue(e.startTimeUnixNano)).unsigned = false;
                                    } else if (typeof e.startTimeUnixNano === "string") {
                                        t.startTimeUnixNano = parseInt(e.startTimeUnixNano, 10);
                                    } else if (typeof e.startTimeUnixNano === "number") {
                                        t.startTimeUnixNano = e.startTimeUnixNano;
                                    } else if (typeof e.startTimeUnixNano === "object") {
                                        t.startTimeUnixNano = new util.LongBits(e.startTimeUnixNano.low >>> 0, e.startTimeUnixNano.high >>> 0).toNumber();
                                    }
                                }
                                if (e.timeUnixNano != null) {
                                    if (util.Long) {
                                        (t.timeUnixNano = util.Long.fromValue(e.timeUnixNano)).unsigned = false;
                                    } else if (typeof e.timeUnixNano === "string") {
                                        t.timeUnixNano = parseInt(e.timeUnixNano, 10);
                                    } else if (typeof e.timeUnixNano === "number") {
                                        t.timeUnixNano = e.timeUnixNano;
                                    } else if (typeof e.timeUnixNano === "object") {
                                        t.timeUnixNano = new util.LongBits(e.timeUnixNano.low >>> 0, e.timeUnixNano.high >>> 0).toNumber();
                                    }
                                }
                                if (e.count != null) {
                                    if (util.Long) {
                                        (t.count = util.Long.fromValue(e.count)).unsigned = false;
                                    } else if (typeof e.count === "string") {
                                        t.count = parseInt(e.count, 10);
                                    } else if (typeof e.count === "number") {
                                        t.count = e.count;
                                    } else if (typeof e.count === "object") {
                                        t.count = new util.LongBits(e.count.low >>> 0, e.count.high >>> 0).toNumber();
                                    }
                                }
                                if (e.sum != null) {
                                    t.sum = Number(e.sum);
                                }
                                if (e.quantileValues) {
                                    if (!Array.isArray(e.quantileValues)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: array expected");
                                    }
                                    t.quantileValues = [];
                                    for(var r = 0; r < e.quantileValues.length; ++r){
                                        if (typeof e.quantileValues[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: object expected");
                                        }
                                        t.quantileValues[r] = a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.fromObject(e.quantileValues[r]);
                                    }
                                }
                                if (e.flags != null) {
                                    t.flags = e.flags >>> 0;
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.quantileValues = [];
                                    r.attributes = [];
                                }
                                if (t.defaults) {
                                    if (util.Long) {
                                        var n = new util.Long(0, 0, false);
                                        r.startTimeUnixNano = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                                    } else {
                                        r.startTimeUnixNano = t.longs === String ? "0" : 0;
                                    }
                                    if (util.Long) {
                                        var n = new util.Long(0, 0, false);
                                        r.timeUnixNano = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                                    } else {
                                        r.timeUnixNano = t.longs === String ? "0" : 0;
                                    }
                                    if (util.Long) {
                                        var n = new util.Long(0, 0, false);
                                        r.count = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                                    } else {
                                        r.count = t.longs === String ? "0" : 0;
                                    }
                                    r.sum = 0;
                                    r.flags = 0;
                                }
                                if (e.startTimeUnixNano != null && e.hasOwnProperty("startTimeUnixNano")) {
                                    if (typeof e.startTimeUnixNano === "number") {
                                        r.startTimeUnixNano = t.longs === String ? String(e.startTimeUnixNano) : e.startTimeUnixNano;
                                    } else {
                                        r.startTimeUnixNano = t.longs === String ? util.Long.prototype.toString.call(e.startTimeUnixNano) : t.longs === Number ? new util.LongBits(e.startTimeUnixNano.low >>> 0, e.startTimeUnixNano.high >>> 0).toNumber() : e.startTimeUnixNano;
                                    }
                                }
                                if (e.timeUnixNano != null && e.hasOwnProperty("timeUnixNano")) {
                                    if (typeof e.timeUnixNano === "number") {
                                        r.timeUnixNano = t.longs === String ? String(e.timeUnixNano) : e.timeUnixNano;
                                    } else {
                                        r.timeUnixNano = t.longs === String ? util.Long.prototype.toString.call(e.timeUnixNano) : t.longs === Number ? new util.LongBits(e.timeUnixNano.low >>> 0, e.timeUnixNano.high >>> 0).toNumber() : e.timeUnixNano;
                                    }
                                }
                                if (e.count != null && e.hasOwnProperty("count")) {
                                    if (typeof e.count === "number") {
                                        r.count = t.longs === String ? String(e.count) : e.count;
                                    } else {
                                        r.count = t.longs === String ? util.Long.prototype.toString.call(e.count) : t.longs === Number ? new util.LongBits(e.count.low >>> 0, e.count.high >>> 0).toNumber() : e.count;
                                    }
                                }
                                if (e.sum != null && e.hasOwnProperty("sum")) {
                                    r.sum = t.json && !isFinite(e.sum) ? String(e.sum) : e.sum;
                                }
                                if (e.quantileValues && e.quantileValues.length) {
                                    r.quantileValues = [];
                                    for(var c = 0; c < e.quantileValues.length; ++c){
                                        r.quantileValues[c] = a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.toObject(e.quantileValues[c], t);
                                    }
                                }
                                if (e.attributes && e.attributes.length) {
                                    r.attributes = [];
                                    for(var c = 0; c < e.attributes.length; ++c){
                                        r.attributes[c] = a.opentelemetry.proto.common.v1.KeyValue.toObject(e.attributes[c], t);
                                    }
                                }
                                if (e.flags != null && e.hasOwnProperty("flags")) {
                                    r.flags = e.flags;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.metrics.v1.SummaryDataPoint`;
                            }
                        }
                        i.prototype.attributes = util.emptyArray;
                        i.prototype.startTimeUnixNano = null;
                        i.prototype.timeUnixNano = null;
                        i.prototype.count = null;
                        i.prototype.sum = null;
                        i.prototype.quantileValues = util.emptyArray;
                        i.prototype.flags = null;
                        i.ValueAtQuantile = function() {
                            class o {
                                constructor(e){
                                    if (e) {
                                        for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                            if (e[t[r]] != null) {
                                                this[t[r]] = e[t[r]];
                                            }
                                        }
                                    }
                                }
                                static create(t) {
                                    return new o(t);
                                }
                                static encode(t, r) {
                                    if (!r) {
                                        r = Writer.create();
                                    }
                                    if (t.quantile != null && Object.hasOwnProperty.call(t, "quantile")) {
                                        r.uint32(9).double(t.quantile);
                                    }
                                    if (t.value != null && Object.hasOwnProperty.call(t, "value")) {
                                        r.uint32(17).double(t.value);
                                    }
                                    return r;
                                }
                                static encodeDelimited(t, r) {
                                    return this.encode(t, r).ldelim();
                                }
                                static decode(t, r, n) {
                                    if (!(t instanceof Reader)) {
                                        t = Reader.create(t);
                                    }
                                    const c = r === undefined ? t.len : t.pos + r;
                                    const s = new a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile;
                                    while(t.pos < c){
                                        const m = t.uint32();
                                        if (m === n) {
                                            break;
                                        }
                                        switch(m >>> 3){
                                            case 1:
                                                {
                                                    s.quantile = t.double();
                                                    break;
                                                }
                                            case 2:
                                                {
                                                    s.value = t.double();
                                                    break;
                                                }
                                            default:
                                                t.skipType(m & 7);
                                                break;
                                        }
                                    }
                                    return s;
                                }
                                static decodeDelimited(t) {
                                    if (!(t instanceof Reader)) {
                                        t = new Reader(t);
                                    }
                                    return this.decode(t, t.uint32());
                                }
                                static verify(t) {
                                    if (typeof t !== "object" || t === null) {
                                        return "object expected";
                                    }
                                    if (t.quantile != null && t.hasOwnProperty("quantile")) {
                                        if (typeof t.quantile !== "number") {
                                            return "quantile: number expected";
                                        }
                                    }
                                    if (t.value != null && t.hasOwnProperty("value")) {
                                        if (typeof t.value !== "number") {
                                            return "value: number expected";
                                        }
                                    }
                                    return null;
                                }
                                static fromObject(t) {
                                    if (t instanceof a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile) {
                                        return t;
                                    }
                                    const r = new a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile;
                                    if (t.quantile != null) {
                                        r.quantile = Number(t.quantile);
                                    }
                                    if (t.value != null) {
                                        r.value = Number(t.value);
                                    }
                                    return r;
                                }
                                static toObject(t, r) {
                                    if (!r) {
                                        r = {};
                                    }
                                    const n = {};
                                    if (r.defaults) {
                                        n.quantile = 0;
                                        n.value = 0;
                                    }
                                    if (t.quantile != null && t.hasOwnProperty("quantile")) {
                                        n.quantile = r.json && !isFinite(t.quantile) ? String(t.quantile) : t.quantile;
                                    }
                                    if (t.value != null && t.hasOwnProperty("value")) {
                                        n.value = r.json && !isFinite(t.value) ? String(t.value) : t.value;
                                    }
                                    return n;
                                }
                                toJSON() {
                                    return this.constructor.toObject(this, S.util.toJSONOptions);
                                }
                                static getTypeUrl(t = "type.googleapis.com") {
                                    return `${t}/opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile`;
                                }
                            }
                            o.prototype.quantile = null;
                            o.prototype.value = null;
                            return o;
                        }();
                        return i;
                    }();
                    d.Exemplar = function() {
                        class i {
                            constructor(e){
                                this.filteredAttributes = [];
                                if (e) {
                                    for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                                        if (e[t[r]] != null) {
                                            this[t[r]] = e[t[r]];
                                        }
                                    }
                                }
                            }
                            static create(t) {
                                return new i(t);
                            }
                            static encode(t, r) {
                                if (!r) {
                                    r = Writer.create();
                                }
                                if (t.timeUnixNano != null && Object.hasOwnProperty.call(t, "timeUnixNano")) {
                                    r.uint32(17).fixed64(t.timeUnixNano);
                                }
                                if (t.asDouble != null && Object.hasOwnProperty.call(t, "asDouble")) {
                                    r.uint32(25).double(t.asDouble);
                                }
                                if (t.spanId != null && Object.hasOwnProperty.call(t, "spanId")) {
                                    r.uint32(34).bytes(t.spanId);
                                }
                                if (t.traceId != null && Object.hasOwnProperty.call(t, "traceId")) {
                                    r.uint32(42).bytes(t.traceId);
                                }
                                if (t.asInt != null && Object.hasOwnProperty.call(t, "asInt")) {
                                    r.uint32(49).sfixed64(t.asInt);
                                }
                                if (t.filteredAttributes != null && t.filteredAttributes.length) {
                                    for(let n = 0; n < t.filteredAttributes.length; ++n){
                                        a.opentelemetry.proto.common.v1.KeyValue.encode(t.filteredAttributes[n], r.uint32(58).fork()).ldelim();
                                    }
                                }
                                return r;
                            }
                            static encodeDelimited(t, r) {
                                return this.encode(t, r).ldelim();
                            }
                            static decode(t, r, n) {
                                if (!(t instanceof Reader)) {
                                    t = Reader.create(t);
                                }
                                const c = r === undefined ? t.len : t.pos + r;
                                const s = new a.opentelemetry.proto.metrics.v1.Exemplar;
                                while(t.pos < c){
                                    const m = t.uint32();
                                    if (m === n) {
                                        break;
                                    }
                                    switch(m >>> 3){
                                        case 7:
                                            {
                                                if (!(s.filteredAttributes && s.filteredAttributes.length)) {
                                                    s.filteredAttributes = [];
                                                }
                                                s.filteredAttributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                                                break;
                                            }
                                        case 2:
                                            {
                                                s.timeUnixNano = t.fixed64();
                                                break;
                                            }
                                        case 3:
                                            {
                                                s.asDouble = t.double();
                                                break;
                                            }
                                        case 6:
                                            {
                                                s.asInt = t.sfixed64();
                                                break;
                                            }
                                        case 4:
                                            {
                                                s.spanId = t.bytes();
                                                break;
                                            }
                                        case 5:
                                            {
                                                s.traceId = t.bytes();
                                                break;
                                            }
                                        default:
                                            t.skipType(m & 7);
                                            break;
                                    }
                                }
                                return s;
                            }
                            static decodeDelimited(t) {
                                if (!(t instanceof Reader)) {
                                    t = new Reader(t);
                                }
                                return this.decode(t, t.uint32());
                            }
                            static verify(t) {
                                if (typeof t !== "object" || t === null) {
                                    return "object expected";
                                }
                                const r = {};
                                if (t.filteredAttributes != null && t.hasOwnProperty("filteredAttributes")) {
                                    if (!Array.isArray(t.filteredAttributes)) {
                                        return "filteredAttributes: array expected";
                                    }
                                    for(let n = 0; n < t.filteredAttributes.length; ++n){
                                        const c = a.opentelemetry.proto.common.v1.KeyValue.verify(t.filteredAttributes[n]);
                                        if (c) {
                                            return `filteredAttributes.${c}`;
                                        }
                                    }
                                }
                                if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                                    if (!util.isInteger(t.timeUnixNano) && !(t.timeUnixNano && util.isInteger(t.timeUnixNano.low) && util.isInteger(t.timeUnixNano.high))) {
                                        return "timeUnixNano: integer|Long expected";
                                    }
                                }
                                if (t.asDouble != null && t.hasOwnProperty("asDouble")) {
                                    r.value = 1;
                                    if (typeof t.asDouble !== "number") {
                                        return "asDouble: number expected";
                                    }
                                }
                                if (t.asInt != null && t.hasOwnProperty("asInt")) {
                                    if (r.value === 1) {
                                        return "value: multiple values";
                                    }
                                    r.value = 1;
                                    if (!util.isInteger(t.asInt) && !(t.asInt && util.isInteger(t.asInt.low) && util.isInteger(t.asInt.high))) {
                                        return "asInt: integer|Long expected";
                                    }
                                }
                                if (t.spanId != null && t.hasOwnProperty("spanId")) {
                                    if (!(t.spanId && typeof t.spanId.length === "number" || util.isString(t.spanId))) {
                                        return "spanId: buffer expected";
                                    }
                                }
                                if (t.traceId != null && t.hasOwnProperty("traceId")) {
                                    if (!(t.traceId && typeof t.traceId.length === "number" || util.isString(t.traceId))) {
                                        return "traceId: buffer expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(t) {
                                if (t instanceof a.opentelemetry.proto.metrics.v1.Exemplar) {
                                    return t;
                                }
                                const r = new a.opentelemetry.proto.metrics.v1.Exemplar;
                                if (t.filteredAttributes) {
                                    if (!Array.isArray(t.filteredAttributes)) {
                                        throw TypeError(".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: array expected");
                                    }
                                    r.filteredAttributes = [];
                                    for(let n = 0; n < t.filteredAttributes.length; ++n){
                                        if (typeof t.filteredAttributes[n] !== "object") {
                                            throw TypeError(".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: object expected");
                                        }
                                        r.filteredAttributes[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.filteredAttributes[n]);
                                    }
                                }
                                if (t.timeUnixNano != null) {
                                    if (util.Long) {
                                        (r.timeUnixNano = util.Long.fromValue(t.timeUnixNano)).unsigned = false;
                                    } else if (typeof t.timeUnixNano === "string") {
                                        r.timeUnixNano = parseInt(t.timeUnixNano, 10);
                                    } else if (typeof t.timeUnixNano === "number") {
                                        r.timeUnixNano = t.timeUnixNano;
                                    } else if (typeof t.timeUnixNano === "object") {
                                        r.timeUnixNano = new util.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber();
                                    }
                                }
                                if (t.asDouble != null) {
                                    r.asDouble = Number(t.asDouble);
                                }
                                if (t.asInt != null) {
                                    if (util.Long) {
                                        (r.asInt = util.Long.fromValue(t.asInt)).unsigned = false;
                                    } else if (typeof t.asInt === "string") {
                                        r.asInt = parseInt(t.asInt, 10);
                                    } else if (typeof t.asInt === "number") {
                                        r.asInt = t.asInt;
                                    } else if (typeof t.asInt === "object") {
                                        r.asInt = new util.LongBits(t.asInt.low >>> 0, t.asInt.high >>> 0).toNumber();
                                    }
                                }
                                if (t.spanId != null) {
                                    if (typeof t.spanId === "string") {
                                        util.base64.decode(t.spanId, r.spanId = util.newBuffer(util.base64.length(t.spanId)), 0);
                                    } else if (t.spanId.length >= 0) {
                                        r.spanId = t.spanId;
                                    }
                                }
                                if (t.traceId != null) {
                                    if (typeof t.traceId === "string") {
                                        util.base64.decode(t.traceId, r.traceId = util.newBuffer(util.base64.length(t.traceId)), 0);
                                    } else if (t.traceId.length >= 0) {
                                        r.traceId = t.traceId;
                                    }
                                }
                                return r;
                            }
                            static toObject(t, r) {
                                if (!r) {
                                    r = {};
                                }
                                const n = {};
                                if (r.arrays || r.defaults) {
                                    n.filteredAttributes = [];
                                }
                                if (r.defaults) {
                                    if (util.Long) {
                                        const c = new util.Long(0, 0, false);
                                        n.timeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                                    } else {
                                        n.timeUnixNano = r.longs === String ? "0" : 0;
                                    }
                                    if (r.bytes === String) {
                                        n.spanId = "";
                                    } else {
                                        n.spanId = [];
                                        if (r.bytes !== Array) {
                                            n.spanId = util.newBuffer(n.spanId);
                                        }
                                    }
                                    if (r.bytes === String) {
                                        n.traceId = "";
                                    } else {
                                        n.traceId = [];
                                        if (r.bytes !== Array) {
                                            n.traceId = util.newBuffer(n.traceId);
                                        }
                                    }
                                }
                                if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                                    if (typeof t.timeUnixNano === "number") {
                                        n.timeUnixNano = r.longs === String ? String(t.timeUnixNano) : t.timeUnixNano;
                                    } else {
                                        n.timeUnixNano = r.longs === String ? util.Long.prototype.toString.call(t.timeUnixNano) : r.longs === Number ? new util.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber() : t.timeUnixNano;
                                    }
                                }
                                if (t.asDouble != null && t.hasOwnProperty("asDouble")) {
                                    n.asDouble = r.json && !isFinite(t.asDouble) ? String(t.asDouble) : t.asDouble;
                                    if (r.oneofs) {
                                        n.value = "asDouble";
                                    }
                                }
                                if (t.spanId != null && t.hasOwnProperty("spanId")) {
                                    n.spanId = r.bytes === String ? util.base64.encode(t.spanId, 0, t.spanId.length) : r.bytes === Array ? Array.prototype.slice.call(t.spanId) : t.spanId;
                                }
                                if (t.traceId != null && t.hasOwnProperty("traceId")) {
                                    n.traceId = r.bytes === String ? util.base64.encode(t.traceId, 0, t.traceId.length) : r.bytes === Array ? Array.prototype.slice.call(t.traceId) : t.traceId;
                                }
                                if (t.asInt != null && t.hasOwnProperty("asInt")) {
                                    if (typeof t.asInt === "number") {
                                        n.asInt = r.longs === String ? String(t.asInt) : t.asInt;
                                    } else {
                                        n.asInt = r.longs === String ? util.Long.prototype.toString.call(t.asInt) : r.longs === Number ? new util.LongBits(t.asInt.low >>> 0, t.asInt.high >>> 0).toNumber() : t.asInt;
                                    }
                                    if (r.oneofs) {
                                        n.value = "asInt";
                                    }
                                }
                                if (t.filteredAttributes && t.filteredAttributes.length) {
                                    n.filteredAttributes = [];
                                    for(let s = 0; s < t.filteredAttributes.length; ++s){
                                        n.filteredAttributes[s] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.filteredAttributes[s], r);
                                    }
                                }
                                return n;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(t = "type.googleapis.com") {
                                return `${t}/opentelemetry.proto.metrics.v1.Exemplar`;
                            }
                        }
                        i.prototype.filteredAttributes = util.emptyArray;
                        i.prototype.timeUnixNano = null;
                        i.prototype.asDouble = null;
                        i.prototype.asInt = null;
                        i.prototype.spanId = null;
                        i.prototype.traceId = null;
                        let o;
                        Object.defineProperty(i.prototype, "value", {
                            get: util.oneOfGetter(o = [
                                "asDouble",
                                "asInt"
                            ]),
                            set: util.oneOfSetter(o)
                        });
                        return i;
                    }();
                    return d;
                })();
                return f;
            })();
            u.logs = (()=>{
                const f = {};
                f.v1 = (()=>{
                    const d = {};
                    d.LogsData = function() {
                        class i {
                            constructor(o){
                                this.resourceLogs = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.resourceLogs != null && e.resourceLogs.length) {
                                    for(let r = 0; r < e.resourceLogs.length; ++r){
                                        a.opentelemetry.proto.logs.v1.ResourceLogs.encode(e.resourceLogs[r], t.uint32(10).fork()).ldelim();
                                    }
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.logs.v1.LogsData;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                if (!(c.resourceLogs && c.resourceLogs.length)) {
                                                    c.resourceLogs = [];
                                                }
                                                c.resourceLogs.push(a.opentelemetry.proto.logs.v1.ResourceLogs.decode(e, e.uint32()));
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.resourceLogs != null && e.hasOwnProperty("resourceLogs")) {
                                    if (!Array.isArray(e.resourceLogs)) {
                                        return "resourceLogs: array expected";
                                    }
                                    for(let t = 0; t < e.resourceLogs.length; ++t){
                                        const r = a.opentelemetry.proto.logs.v1.ResourceLogs.verify(e.resourceLogs[t]);
                                        if (r) {
                                            return `resourceLogs.${r}`;
                                        }
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.logs.v1.LogsData) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.logs.v1.LogsData;
                                if (e.resourceLogs) {
                                    if (!Array.isArray(e.resourceLogs)) {
                                        throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: array expected");
                                    }
                                    t.resourceLogs = [];
                                    for(let r = 0; r < e.resourceLogs.length; ++r){
                                        if (typeof e.resourceLogs[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: object expected");
                                        }
                                        t.resourceLogs[r] = a.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(e.resourceLogs[r]);
                                    }
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.resourceLogs = [];
                                }
                                if (e.resourceLogs && e.resourceLogs.length) {
                                    r.resourceLogs = [];
                                    for(let n = 0; n < e.resourceLogs.length; ++n){
                                        r.resourceLogs[n] = a.opentelemetry.proto.logs.v1.ResourceLogs.toObject(e.resourceLogs[n], t);
                                    }
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.logs.v1.LogsData`;
                            }
                        }
                        i.prototype.resourceLogs = util.emptyArray;
                        return i;
                    }();
                    d.ResourceLogs = function() {
                        class i {
                            constructor(o){
                                this.scopeLogs = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.resource != null && Object.hasOwnProperty.call(e, "resource")) {
                                    a.opentelemetry.proto.resource.v1.Resource.encode(e.resource, t.uint32(10).fork()).ldelim();
                                }
                                if (e.scopeLogs != null && e.scopeLogs.length) {
                                    for(let r = 0; r < e.scopeLogs.length; ++r){
                                        a.opentelemetry.proto.logs.v1.ScopeLogs.encode(e.scopeLogs[r], t.uint32(18).fork()).ldelim();
                                    }
                                }
                                if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) {
                                    t.uint32(26).string(e.schemaUrl);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.logs.v1.ResourceLogs;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                c.resource = a.opentelemetry.proto.resource.v1.Resource.decode(e, e.uint32());
                                                break;
                                            }
                                        case 2:
                                            {
                                                if (!(c.scopeLogs && c.scopeLogs.length)) {
                                                    c.scopeLogs = [];
                                                }
                                                c.scopeLogs.push(a.opentelemetry.proto.logs.v1.ScopeLogs.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 3:
                                            {
                                                c.schemaUrl = e.string();
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.resource != null && e.hasOwnProperty("resource")) {
                                    var t = a.opentelemetry.proto.resource.v1.Resource.verify(e.resource);
                                    if (t) {
                                        return `resource.${t}`;
                                    }
                                }
                                if (e.scopeLogs != null && e.hasOwnProperty("scopeLogs")) {
                                    if (!Array.isArray(e.scopeLogs)) {
                                        return "scopeLogs: array expected";
                                    }
                                    for(let r = 0; r < e.scopeLogs.length; ++r){
                                        var t = a.opentelemetry.proto.logs.v1.ScopeLogs.verify(e.scopeLogs[r]);
                                        if (t) {
                                            return `scopeLogs.${t}`;
                                        }
                                    }
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    if (!util.isString(e.schemaUrl)) {
                                        return "schemaUrl: string expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.logs.v1.ResourceLogs) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.logs.v1.ResourceLogs;
                                if (e.resource != null) {
                                    if (typeof e.resource !== "object") {
                                        throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.resource: object expected");
                                    }
                                    t.resource = a.opentelemetry.proto.resource.v1.Resource.fromObject(e.resource);
                                }
                                if (e.scopeLogs) {
                                    if (!Array.isArray(e.scopeLogs)) {
                                        throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: array expected");
                                    }
                                    t.scopeLogs = [];
                                    for(let r = 0; r < e.scopeLogs.length; ++r){
                                        if (typeof e.scopeLogs[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: object expected");
                                        }
                                        t.scopeLogs[r] = a.opentelemetry.proto.logs.v1.ScopeLogs.fromObject(e.scopeLogs[r]);
                                    }
                                }
                                if (e.schemaUrl != null) {
                                    t.schemaUrl = String(e.schemaUrl);
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.scopeLogs = [];
                                }
                                if (t.defaults) {
                                    r.resource = null;
                                    r.schemaUrl = "";
                                }
                                if (e.resource != null && e.hasOwnProperty("resource")) {
                                    r.resource = a.opentelemetry.proto.resource.v1.Resource.toObject(e.resource, t);
                                }
                                if (e.scopeLogs && e.scopeLogs.length) {
                                    r.scopeLogs = [];
                                    for(let n = 0; n < e.scopeLogs.length; ++n){
                                        r.scopeLogs[n] = a.opentelemetry.proto.logs.v1.ScopeLogs.toObject(e.scopeLogs[n], t);
                                    }
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    r.schemaUrl = e.schemaUrl;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.logs.v1.ResourceLogs`;
                            }
                        }
                        i.prototype.resource = null;
                        i.prototype.scopeLogs = util.emptyArray;
                        i.prototype.schemaUrl = null;
                        return i;
                    }();
                    d.ScopeLogs = function() {
                        class i {
                            constructor(o){
                                this.logRecords = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.scope != null && Object.hasOwnProperty.call(e, "scope")) {
                                    a.opentelemetry.proto.common.v1.InstrumentationScope.encode(e.scope, t.uint32(10).fork()).ldelim();
                                }
                                if (e.logRecords != null && e.logRecords.length) {
                                    for(let r = 0; r < e.logRecords.length; ++r){
                                        a.opentelemetry.proto.logs.v1.LogRecord.encode(e.logRecords[r], t.uint32(18).fork()).ldelim();
                                    }
                                }
                                if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) {
                                    t.uint32(26).string(e.schemaUrl);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.logs.v1.ScopeLogs;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                c.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.decode(e, e.uint32());
                                                break;
                                            }
                                        case 2:
                                            {
                                                if (!(c.logRecords && c.logRecords.length)) {
                                                    c.logRecords = [];
                                                }
                                                c.logRecords.push(a.opentelemetry.proto.logs.v1.LogRecord.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 3:
                                            {
                                                c.schemaUrl = e.string();
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.scope != null && e.hasOwnProperty("scope")) {
                                    var t = a.opentelemetry.proto.common.v1.InstrumentationScope.verify(e.scope);
                                    if (t) {
                                        return `scope.${t}`;
                                    }
                                }
                                if (e.logRecords != null && e.hasOwnProperty("logRecords")) {
                                    if (!Array.isArray(e.logRecords)) {
                                        return "logRecords: array expected";
                                    }
                                    for(let r = 0; r < e.logRecords.length; ++r){
                                        var t = a.opentelemetry.proto.logs.v1.LogRecord.verify(e.logRecords[r]);
                                        if (t) {
                                            return `logRecords.${t}`;
                                        }
                                    }
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    if (!util.isString(e.schemaUrl)) {
                                        return "schemaUrl: string expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.logs.v1.ScopeLogs) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.logs.v1.ScopeLogs;
                                if (e.scope != null) {
                                    if (typeof e.scope !== "object") {
                                        throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.scope: object expected");
                                    }
                                    t.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(e.scope);
                                }
                                if (e.logRecords) {
                                    if (!Array.isArray(e.logRecords)) {
                                        throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: array expected");
                                    }
                                    t.logRecords = [];
                                    for(let r = 0; r < e.logRecords.length; ++r){
                                        if (typeof e.logRecords[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: object expected");
                                        }
                                        t.logRecords[r] = a.opentelemetry.proto.logs.v1.LogRecord.fromObject(e.logRecords[r]);
                                    }
                                }
                                if (e.schemaUrl != null) {
                                    t.schemaUrl = String(e.schemaUrl);
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.logRecords = [];
                                }
                                if (t.defaults) {
                                    r.scope = null;
                                    r.schemaUrl = "";
                                }
                                if (e.scope != null && e.hasOwnProperty("scope")) {
                                    r.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.toObject(e.scope, t);
                                }
                                if (e.logRecords && e.logRecords.length) {
                                    r.logRecords = [];
                                    for(let n = 0; n < e.logRecords.length; ++n){
                                        r.logRecords[n] = a.opentelemetry.proto.logs.v1.LogRecord.toObject(e.logRecords[n], t);
                                    }
                                }
                                if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                                    r.schemaUrl = e.schemaUrl;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.logs.v1.ScopeLogs`;
                            }
                        }
                        i.prototype.scope = null;
                        i.prototype.logRecords = util.emptyArray;
                        i.prototype.schemaUrl = null;
                        return i;
                    }();
                    d.SeverityNumber = (()=>{
                        const i = {};
                        const o = Object.create(i);
                        o[i[0] = "SEVERITY_NUMBER_UNSPECIFIED"] = 0;
                        o[i[1] = "SEVERITY_NUMBER_TRACE"] = 1;
                        o[i[2] = "SEVERITY_NUMBER_TRACE2"] = 2;
                        o[i[3] = "SEVERITY_NUMBER_TRACE3"] = 3;
                        o[i[4] = "SEVERITY_NUMBER_TRACE4"] = 4;
                        o[i[5] = "SEVERITY_NUMBER_DEBUG"] = 5;
                        o[i[6] = "SEVERITY_NUMBER_DEBUG2"] = 6;
                        o[i[7] = "SEVERITY_NUMBER_DEBUG3"] = 7;
                        o[i[8] = "SEVERITY_NUMBER_DEBUG4"] = 8;
                        o[i[9] = "SEVERITY_NUMBER_INFO"] = 9;
                        o[i[10] = "SEVERITY_NUMBER_INFO2"] = 10;
                        o[i[11] = "SEVERITY_NUMBER_INFO3"] = 11;
                        o[i[12] = "SEVERITY_NUMBER_INFO4"] = 12;
                        o[i[13] = "SEVERITY_NUMBER_WARN"] = 13;
                        o[i[14] = "SEVERITY_NUMBER_WARN2"] = 14;
                        o[i[15] = "SEVERITY_NUMBER_WARN3"] = 15;
                        o[i[16] = "SEVERITY_NUMBER_WARN4"] = 16;
                        o[i[17] = "SEVERITY_NUMBER_ERROR"] = 17;
                        o[i[18] = "SEVERITY_NUMBER_ERROR2"] = 18;
                        o[i[19] = "SEVERITY_NUMBER_ERROR3"] = 19;
                        o[i[20] = "SEVERITY_NUMBER_ERROR4"] = 20;
                        o[i[21] = "SEVERITY_NUMBER_FATAL"] = 21;
                        o[i[22] = "SEVERITY_NUMBER_FATAL2"] = 22;
                        o[i[23] = "SEVERITY_NUMBER_FATAL3"] = 23;
                        o[i[24] = "SEVERITY_NUMBER_FATAL4"] = 24;
                        return o;
                    })();
                    d.LogRecordFlags = (()=>{
                        const i = {};
                        const o = Object.create(i);
                        o[i[0] = "LOG_RECORD_FLAGS_DO_NOT_USE"] = 0;
                        o[i[255] = "LOG_RECORD_FLAGS_TRACE_FLAGS_MASK"] = 255;
                        return o;
                    })();
                    d.LogRecord = function() {
                        class i {
                            constructor(o){
                                this.attributes = [];
                                if (o) {
                                    for(let e = Object.keys(o), t = 0; t < e.length; ++t){
                                        if (o[e[t]] != null) {
                                            this[e[t]] = o[e[t]];
                                        }
                                    }
                                }
                            }
                            static create(e) {
                                return new i(e);
                            }
                            static encode(e, t) {
                                if (!t) {
                                    t = Writer.create();
                                }
                                if (e.timeUnixNano != null && Object.hasOwnProperty.call(e, "timeUnixNano")) {
                                    t.uint32(9).fixed64(e.timeUnixNano);
                                }
                                if (e.severityNumber != null && Object.hasOwnProperty.call(e, "severityNumber")) {
                                    t.uint32(16).int32(e.severityNumber);
                                }
                                if (e.severityText != null && Object.hasOwnProperty.call(e, "severityText")) {
                                    t.uint32(26).string(e.severityText);
                                }
                                if (e.body != null && Object.hasOwnProperty.call(e, "body")) {
                                    a.opentelemetry.proto.common.v1.AnyValue.encode(e.body, t.uint32(42).fork()).ldelim();
                                }
                                if (e.attributes != null && e.attributes.length) {
                                    for(let r = 0; r < e.attributes.length; ++r){
                                        a.opentelemetry.proto.common.v1.KeyValue.encode(e.attributes[r], t.uint32(50).fork()).ldelim();
                                    }
                                }
                                if (e.droppedAttributesCount != null && Object.hasOwnProperty.call(e, "droppedAttributesCount")) {
                                    t.uint32(56).uint32(e.droppedAttributesCount);
                                }
                                if (e.flags != null && Object.hasOwnProperty.call(e, "flags")) {
                                    t.uint32(69).fixed32(e.flags);
                                }
                                if (e.traceId != null && Object.hasOwnProperty.call(e, "traceId")) {
                                    t.uint32(74).bytes(e.traceId);
                                }
                                if (e.spanId != null && Object.hasOwnProperty.call(e, "spanId")) {
                                    t.uint32(82).bytes(e.spanId);
                                }
                                if (e.observedTimeUnixNano != null && Object.hasOwnProperty.call(e, "observedTimeUnixNano")) {
                                    t.uint32(89).fixed64(e.observedTimeUnixNano);
                                }
                                if (e.eventName != null && Object.hasOwnProperty.call(e, "eventName")) {
                                    t.uint32(98).string(e.eventName);
                                }
                                return t;
                            }
                            static encodeDelimited(e, t) {
                                return this.encode(e, t).ldelim();
                            }
                            static decode(e, t, r) {
                                if (!(e instanceof Reader)) {
                                    e = Reader.create(e);
                                }
                                const n = t === undefined ? e.len : e.pos + t;
                                const c = new a.opentelemetry.proto.logs.v1.LogRecord;
                                while(e.pos < n){
                                    const s = e.uint32();
                                    if (s === r) {
                                        break;
                                    }
                                    switch(s >>> 3){
                                        case 1:
                                            {
                                                c.timeUnixNano = e.fixed64();
                                                break;
                                            }
                                        case 11:
                                            {
                                                c.observedTimeUnixNano = e.fixed64();
                                                break;
                                            }
                                        case 2:
                                            {
                                                c.severityNumber = e.int32();
                                                break;
                                            }
                                        case 3:
                                            {
                                                c.severityText = e.string();
                                                break;
                                            }
                                        case 5:
                                            {
                                                c.body = a.opentelemetry.proto.common.v1.AnyValue.decode(e, e.uint32());
                                                break;
                                            }
                                        case 6:
                                            {
                                                if (!(c.attributes && c.attributes.length)) {
                                                    c.attributes = [];
                                                }
                                                c.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(e, e.uint32()));
                                                break;
                                            }
                                        case 7:
                                            {
                                                c.droppedAttributesCount = e.uint32();
                                                break;
                                            }
                                        case 8:
                                            {
                                                c.flags = e.fixed32();
                                                break;
                                            }
                                        case 9:
                                            {
                                                c.traceId = e.bytes();
                                                break;
                                            }
                                        case 10:
                                            {
                                                c.spanId = e.bytes();
                                                break;
                                            }
                                        case 12:
                                            {
                                                c.eventName = e.string();
                                                break;
                                            }
                                        default:
                                            e.skipType(s & 7);
                                            break;
                                    }
                                }
                                return c;
                            }
                            static decodeDelimited(e) {
                                if (!(e instanceof Reader)) {
                                    e = new Reader(e);
                                }
                                return this.decode(e, e.uint32());
                            }
                            static verify(e) {
                                if (typeof e !== "object" || e === null) {
                                    return "object expected";
                                }
                                if (e.timeUnixNano != null && e.hasOwnProperty("timeUnixNano")) {
                                    if (!util.isInteger(e.timeUnixNano) && !(e.timeUnixNano && util.isInteger(e.timeUnixNano.low) && util.isInteger(e.timeUnixNano.high))) {
                                        return "timeUnixNano: integer|Long expected";
                                    }
                                }
                                if (e.observedTimeUnixNano != null && e.hasOwnProperty("observedTimeUnixNano")) {
                                    if (!util.isInteger(e.observedTimeUnixNano) && !(e.observedTimeUnixNano && util.isInteger(e.observedTimeUnixNano.low) && util.isInteger(e.observedTimeUnixNano.high))) {
                                        return "observedTimeUnixNano: integer|Long expected";
                                    }
                                }
                                if (e.severityNumber != null && e.hasOwnProperty("severityNumber")) {
                                    switch(e.severityNumber){
                                        default:
                                            return "severityNumber: enum value expected";
                                        case 0:
                                        case 1:
                                        case 2:
                                        case 3:
                                        case 4:
                                        case 5:
                                        case 6:
                                        case 7:
                                        case 8:
                                        case 9:
                                        case 10:
                                        case 11:
                                        case 12:
                                        case 13:
                                        case 14:
                                        case 15:
                                        case 16:
                                        case 17:
                                        case 18:
                                        case 19:
                                        case 20:
                                        case 21:
                                        case 22:
                                        case 23:
                                        case 24:
                                            break;
                                    }
                                }
                                if (e.severityText != null && e.hasOwnProperty("severityText")) {
                                    if (!util.isString(e.severityText)) {
                                        return "severityText: string expected";
                                    }
                                }
                                if (e.body != null && e.hasOwnProperty("body")) {
                                    var t = a.opentelemetry.proto.common.v1.AnyValue.verify(e.body);
                                    if (t) {
                                        return `body.${t}`;
                                    }
                                }
                                if (e.attributes != null && e.hasOwnProperty("attributes")) {
                                    if (!Array.isArray(e.attributes)) {
                                        return "attributes: array expected";
                                    }
                                    for(let r = 0; r < e.attributes.length; ++r){
                                        var t = a.opentelemetry.proto.common.v1.KeyValue.verify(e.attributes[r]);
                                        if (t) {
                                            return `attributes.${t}`;
                                        }
                                    }
                                }
                                if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) {
                                    if (!util.isInteger(e.droppedAttributesCount)) {
                                        return "droppedAttributesCount: integer expected";
                                    }
                                }
                                if (e.flags != null && e.hasOwnProperty("flags")) {
                                    if (!util.isInteger(e.flags)) {
                                        return "flags: integer expected";
                                    }
                                }
                                if (e.traceId != null && e.hasOwnProperty("traceId")) {
                                    if (!(e.traceId && typeof e.traceId.length === "number" || util.isString(e.traceId))) {
                                        return "traceId: buffer expected";
                                    }
                                }
                                if (e.spanId != null && e.hasOwnProperty("spanId")) {
                                    if (!(e.spanId && typeof e.spanId.length === "number" || util.isString(e.spanId))) {
                                        return "spanId: buffer expected";
                                    }
                                }
                                if (e.eventName != null && e.hasOwnProperty("eventName")) {
                                    if (!util.isString(e.eventName)) {
                                        return "eventName: string expected";
                                    }
                                }
                                return null;
                            }
                            static fromObject(e) {
                                if (e instanceof a.opentelemetry.proto.logs.v1.LogRecord) {
                                    return e;
                                }
                                const t = new a.opentelemetry.proto.logs.v1.LogRecord;
                                if (e.timeUnixNano != null) {
                                    if (util.Long) {
                                        (t.timeUnixNano = util.Long.fromValue(e.timeUnixNano)).unsigned = false;
                                    } else if (typeof e.timeUnixNano === "string") {
                                        t.timeUnixNano = parseInt(e.timeUnixNano, 10);
                                    } else if (typeof e.timeUnixNano === "number") {
                                        t.timeUnixNano = e.timeUnixNano;
                                    } else if (typeof e.timeUnixNano === "object") {
                                        t.timeUnixNano = new util.LongBits(e.timeUnixNano.low >>> 0, e.timeUnixNano.high >>> 0).toNumber();
                                    }
                                }
                                if (e.observedTimeUnixNano != null) {
                                    if (util.Long) {
                                        (t.observedTimeUnixNano = util.Long.fromValue(e.observedTimeUnixNano)).unsigned = false;
                                    } else if (typeof e.observedTimeUnixNano === "string") {
                                        t.observedTimeUnixNano = parseInt(e.observedTimeUnixNano, 10);
                                    } else if (typeof e.observedTimeUnixNano === "number") {
                                        t.observedTimeUnixNano = e.observedTimeUnixNano;
                                    } else if (typeof e.observedTimeUnixNano === "object") {
                                        t.observedTimeUnixNano = new util.LongBits(e.observedTimeUnixNano.low >>> 0, e.observedTimeUnixNano.high >>> 0).toNumber();
                                    }
                                }
                                switch(e.severityNumber){
                                    default:
                                        if (typeof e.severityNumber === "number") {
                                            t.severityNumber = e.severityNumber;
                                            break;
                                        }
                                        break;
                                    case "SEVERITY_NUMBER_UNSPECIFIED":
                                    case 0:
                                        t.severityNumber = 0;
                                        break;
                                    case "SEVERITY_NUMBER_TRACE":
                                    case 1:
                                        t.severityNumber = 1;
                                        break;
                                    case "SEVERITY_NUMBER_TRACE2":
                                    case 2:
                                        t.severityNumber = 2;
                                        break;
                                    case "SEVERITY_NUMBER_TRACE3":
                                    case 3:
                                        t.severityNumber = 3;
                                        break;
                                    case "SEVERITY_NUMBER_TRACE4":
                                    case 4:
                                        t.severityNumber = 4;
                                        break;
                                    case "SEVERITY_NUMBER_DEBUG":
                                    case 5:
                                        t.severityNumber = 5;
                                        break;
                                    case "SEVERITY_NUMBER_DEBUG2":
                                    case 6:
                                        t.severityNumber = 6;
                                        break;
                                    case "SEVERITY_NUMBER_DEBUG3":
                                    case 7:
                                        t.severityNumber = 7;
                                        break;
                                    case "SEVERITY_NUMBER_DEBUG4":
                                    case 8:
                                        t.severityNumber = 8;
                                        break;
                                    case "SEVERITY_NUMBER_INFO":
                                    case 9:
                                        t.severityNumber = 9;
                                        break;
                                    case "SEVERITY_NUMBER_INFO2":
                                    case 10:
                                        t.severityNumber = 10;
                                        break;
                                    case "SEVERITY_NUMBER_INFO3":
                                    case 11:
                                        t.severityNumber = 11;
                                        break;
                                    case "SEVERITY_NUMBER_INFO4":
                                    case 12:
                                        t.severityNumber = 12;
                                        break;
                                    case "SEVERITY_NUMBER_WARN":
                                    case 13:
                                        t.severityNumber = 13;
                                        break;
                                    case "SEVERITY_NUMBER_WARN2":
                                    case 14:
                                        t.severityNumber = 14;
                                        break;
                                    case "SEVERITY_NUMBER_WARN3":
                                    case 15:
                                        t.severityNumber = 15;
                                        break;
                                    case "SEVERITY_NUMBER_WARN4":
                                    case 16:
                                        t.severityNumber = 16;
                                        break;
                                    case "SEVERITY_NUMBER_ERROR":
                                    case 17:
                                        t.severityNumber = 17;
                                        break;
                                    case "SEVERITY_NUMBER_ERROR2":
                                    case 18:
                                        t.severityNumber = 18;
                                        break;
                                    case "SEVERITY_NUMBER_ERROR3":
                                    case 19:
                                        t.severityNumber = 19;
                                        break;
                                    case "SEVERITY_NUMBER_ERROR4":
                                    case 20:
                                        t.severityNumber = 20;
                                        break;
                                    case "SEVERITY_NUMBER_FATAL":
                                    case 21:
                                        t.severityNumber = 21;
                                        break;
                                    case "SEVERITY_NUMBER_FATAL2":
                                    case 22:
                                        t.severityNumber = 22;
                                        break;
                                    case "SEVERITY_NUMBER_FATAL3":
                                    case 23:
                                        t.severityNumber = 23;
                                        break;
                                    case "SEVERITY_NUMBER_FATAL4":
                                    case 24:
                                        t.severityNumber = 24;
                                        break;
                                }
                                if (e.severityText != null) {
                                    t.severityText = String(e.severityText);
                                }
                                if (e.body != null) {
                                    if (typeof e.body !== "object") {
                                        throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.body: object expected");
                                    }
                                    t.body = a.opentelemetry.proto.common.v1.AnyValue.fromObject(e.body);
                                }
                                if (e.attributes) {
                                    if (!Array.isArray(e.attributes)) {
                                        throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: array expected");
                                    }
                                    t.attributes = [];
                                    for(let r = 0; r < e.attributes.length; ++r){
                                        if (typeof e.attributes[r] !== "object") {
                                            throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: object expected");
                                        }
                                        t.attributes[r] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(e.attributes[r]);
                                    }
                                }
                                if (e.droppedAttributesCount != null) {
                                    t.droppedAttributesCount = e.droppedAttributesCount >>> 0;
                                }
                                if (e.flags != null) {
                                    t.flags = e.flags >>> 0;
                                }
                                if (e.traceId != null) {
                                    if (typeof e.traceId === "string") {
                                        util.base64.decode(e.traceId, t.traceId = util.newBuffer(util.base64.length(e.traceId)), 0);
                                    } else if (e.traceId.length >= 0) {
                                        t.traceId = e.traceId;
                                    }
                                }
                                if (e.spanId != null) {
                                    if (typeof e.spanId === "string") {
                                        util.base64.decode(e.spanId, t.spanId = util.newBuffer(util.base64.length(e.spanId)), 0);
                                    } else if (e.spanId.length >= 0) {
                                        t.spanId = e.spanId;
                                    }
                                }
                                if (e.eventName != null) {
                                    t.eventName = String(e.eventName);
                                }
                                return t;
                            }
                            static toObject(e, t) {
                                if (!t) {
                                    t = {};
                                }
                                const r = {};
                                if (t.arrays || t.defaults) {
                                    r.attributes = [];
                                }
                                if (t.defaults) {
                                    if (util.Long) {
                                        var n = new util.Long(0, 0, false);
                                        r.timeUnixNano = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                                    } else {
                                        r.timeUnixNano = t.longs === String ? "0" : 0;
                                    }
                                    r.severityNumber = t.enums === String ? "SEVERITY_NUMBER_UNSPECIFIED" : 0;
                                    r.severityText = "";
                                    r.body = null;
                                    r.droppedAttributesCount = 0;
                                    r.flags = 0;
                                    if (t.bytes === String) {
                                        r.traceId = "";
                                    } else {
                                        r.traceId = [];
                                        if (t.bytes !== Array) {
                                            r.traceId = util.newBuffer(r.traceId);
                                        }
                                    }
                                    if (t.bytes === String) {
                                        r.spanId = "";
                                    } else {
                                        r.spanId = [];
                                        if (t.bytes !== Array) {
                                            r.spanId = util.newBuffer(r.spanId);
                                        }
                                    }
                                    if (util.Long) {
                                        var n = new util.Long(0, 0, false);
                                        r.observedTimeUnixNano = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                                    } else {
                                        r.observedTimeUnixNano = t.longs === String ? "0" : 0;
                                    }
                                    r.eventName = "";
                                }
                                if (e.timeUnixNano != null && e.hasOwnProperty("timeUnixNano")) {
                                    if (typeof e.timeUnixNano === "number") {
                                        r.timeUnixNano = t.longs === String ? String(e.timeUnixNano) : e.timeUnixNano;
                                    } else {
                                        r.timeUnixNano = t.longs === String ? util.Long.prototype.toString.call(e.timeUnixNano) : t.longs === Number ? new util.LongBits(e.timeUnixNano.low >>> 0, e.timeUnixNano.high >>> 0).toNumber() : e.timeUnixNano;
                                    }
                                }
                                if (e.severityNumber != null && e.hasOwnProperty("severityNumber")) {
                                    r.severityNumber = t.enums === String ? a.opentelemetry.proto.logs.v1.SeverityNumber[e.severityNumber] === undefined ? e.severityNumber : a.opentelemetry.proto.logs.v1.SeverityNumber[e.severityNumber] : e.severityNumber;
                                }
                                if (e.severityText != null && e.hasOwnProperty("severityText")) {
                                    r.severityText = e.severityText;
                                }
                                if (e.body != null && e.hasOwnProperty("body")) {
                                    r.body = a.opentelemetry.proto.common.v1.AnyValue.toObject(e.body, t);
                                }
                                if (e.attributes && e.attributes.length) {
                                    r.attributes = [];
                                    for(let c = 0; c < e.attributes.length; ++c){
                                        r.attributes[c] = a.opentelemetry.proto.common.v1.KeyValue.toObject(e.attributes[c], t);
                                    }
                                }
                                if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) {
                                    r.droppedAttributesCount = e.droppedAttributesCount;
                                }
                                if (e.flags != null && e.hasOwnProperty("flags")) {
                                    r.flags = e.flags;
                                }
                                if (e.traceId != null && e.hasOwnProperty("traceId")) {
                                    r.traceId = t.bytes === String ? util.base64.encode(e.traceId, 0, e.traceId.length) : t.bytes === Array ? Array.prototype.slice.call(e.traceId) : e.traceId;
                                }
                                if (e.spanId != null && e.hasOwnProperty("spanId")) {
                                    r.spanId = t.bytes === String ? util.base64.encode(e.spanId, 0, e.spanId.length) : t.bytes === Array ? Array.prototype.slice.call(e.spanId) : e.spanId;
                                }
                                if (e.observedTimeUnixNano != null && e.hasOwnProperty("observedTimeUnixNano")) {
                                    if (typeof e.observedTimeUnixNano === "number") {
                                        r.observedTimeUnixNano = t.longs === String ? String(e.observedTimeUnixNano) : e.observedTimeUnixNano;
                                    } else {
                                        r.observedTimeUnixNano = t.longs === String ? util.Long.prototype.toString.call(e.observedTimeUnixNano) : t.longs === Number ? new util.LongBits(e.observedTimeUnixNano.low >>> 0, e.observedTimeUnixNano.high >>> 0).toNumber() : e.observedTimeUnixNano;
                                    }
                                }
                                if (e.eventName != null && e.hasOwnProperty("eventName")) {
                                    r.eventName = e.eventName;
                                }
                                return r;
                            }
                            toJSON() {
                                return this.constructor.toObject(this, S.util.toJSONOptions);
                            }
                            static getTypeUrl(e = "type.googleapis.com") {
                                return `${e}/opentelemetry.proto.logs.v1.LogRecord`;
                            }
                        }
                        i.prototype.timeUnixNano = null;
                        i.prototype.observedTimeUnixNano = null;
                        i.prototype.severityNumber = null;
                        i.prototype.severityText = null;
                        i.prototype.body = null;
                        i.prototype.attributes = util.emptyArray;
                        i.prototype.droppedAttributesCount = null;
                        i.prototype.flags = null;
                        i.prototype.traceId = null;
                        i.prototype.spanId = null;
                        i.prototype.eventName = null;
                        return i;
                    }();
                    return d;
                })();
                return f;
            })();
            return u;
        })();
        return l;
    })();
    $r.exports = a;
});
const tn = C(function(Zr) {
    Object.defineProperty(Zr, "__esModule", {
        value: true
    });
    Zr.hexToBinary = undefined;
    function Xr(l) {
        if (l >= 48 && l <= 57) {
            return l - 48;
        }
        if (l >= 97 && l <= 102) {
            return l - 87;
        }
        return l - 55;
    }
    function Yi(l) {
        let u = new Uint8Array(l.length / 2);
        let f = 0;
        for(let d = 0; d < l.length; d += 2){
            let i = Xr(l.charCodeAt(d));
            let o = Xr(l.charCodeAt(d + 1));
            u[f++] = i << 4 | o;
        }
        return u;
    }
    Zr.hexToBinary = Yi;
});
const Pt = C(function(ln) {
    Object.defineProperty(ln, "__esModule", {
        value: true
    });
    ln.getOtlpEncoder = ln.encodeAsString = ln.encodeAsLongBits = ln.toLongBits = ln.hrTimeToNanos = undefined;
    const rn = Of();
    const st = tn();
    function oe(l) {
        let u = BigInt(1000000000);
        return BigInt(Math.trunc(l[0])) * u + BigInt(Math.trunc(l[1]));
    }
    ln.hrTimeToNanos = oe;
    function nn(l) {
        let low = Number(BigInt.asUintN(32, l));
        let high = Number(BigInt.asUintN(32, l >> BigInt(32)));
        return {
            low,
            high
        };
    }
    ln.toLongBits = nn;
    function encodeHrTime(l) {
        let u = oe(l);
        return nn(u);
    }
    ln.encodeAsLongBits = encodeHrTime;
    function on(l) {
        return oe(l).toString();
    }
    ln.encodeAsString = on;
    const Wi = typeof BigInt !== "undefined" ? on : rn.hrTimeToNanoseconds;
    function en(l) {
        return l;
    }
    function encodeOptionalSpanContext(l) {
        if (l === undefined) {
            return;
        }
        return st.hexToBinary(l);
    }
    const $i = {
        encodeHrTime,
        encodeSpanContext: st.hexToBinary,
        encodeOptionalSpanContext
    };
    function Xi(l) {
        if (l === undefined) {
            return $i;
        }
        let u = l.useLongBits ?? true;
        let f = l.useHex ?? false;
        return {
            encodeHrTime: u ? encodeHrTime : Wi,
            encodeSpanContext: f ? en : st.hexToBinary,
            encodeOptionalSpanContext: f ? en : encodeOptionalSpanContext
        };
    }
    ln.getOtlpEncoder = Xi;
});
const Ut = C(function(fn) {
    Object.defineProperty(fn, "__esModule", {
        value: true
    });
    fn.toAnyValue = fn.toKeyValue = fn.toAttributes = fn.createInstrumentationScope = fn.createResource = undefined;
    function ru(l) {
        let u = {
            attributes: an(l.attributes),
            droppedAttributesCount: 0
        };
        let l_schemaUrl = l.schemaUrl;
        if (l_schemaUrl && l_schemaUrl !== "") {
            u.schemaUrl = l_schemaUrl;
        }
        return u;
    }
    fn.createResource = ru;
    function nu(l) {
        return {
            name: l.name,
            version: l.version
        };
    }
    fn.createInstrumentationScope = nu;
    function an(l) {
        return Object.keys(l).map((u)=>ue(u, l[u]));
    }
    fn.toAttributes = an;
    function ue(key, u) {
        return {
            key,
            value: le(u)
        };
    }
    fn.toKeyValue = ue;
    function le(l) {
        let u = typeof l;
        if (u === "string") {
            return {
                stringValue: l
            };
        }
        if (u === "number") {
            if (!Number.isInteger(l)) {
                return {
                    doubleValue: l
                };
            }
            return {
                intValue: l
            };
        }
        if (u === "boolean") {
            return {
                boolValue: l
            };
        }
        if (l instanceof Uint8Array) {
            return {
                bytesValue: l
            };
        }
        if (Array.isArray(l)) {
            return {
                arrayValue: {
                    values: l.map(le)
                }
            };
        }
        if (u === "object" && l != null) {
            return {
                kvlistValue: {
                    values: Object.entries(l).map(([f, d])=>ue(f, d))
                }
            };
        }
        return {};
    }
    fn.toAnyValue = le;
});
const ce = C(function(yn) {
    Object.defineProperty(yn, "__esModule", {
        value: true
    });
    yn.toLogAttributes = yn.createExportLogsServiceRequest = undefined;
    const sn = Pt();
    const it = Ut();
    function cu(l, u) {
        let f = sn.getOtlpEncoder(u);
        return {
            resourceLogs: fu(l, f)
        };
    }
    yn.createExportLogsServiceRequest = cu;
    function au(l) {
        let u = new Map;
        for (let f of l){
            let { resource, instrumentationScope: { name, version = "", schemaUrl = "" } } = f;
            let t = u.get(resource);
            if (!t) {
                t = new Map;
                u.set(resource, t);
            }
            let r = `${name}@${version}:${schemaUrl}`;
            let n = t.get(r);
            if (!n) {
                n = [];
                t.set(r, n);
            }
            n.push(f);
        }
        return u;
    }
    function fu(l, u) {
        let f = au(l);
        return Array.from(f, ([d, i])=>{
            let o = it.createResource(d);
            return {
                resource: o,
                scopeLogs: Array.from(i, ([, e])=>({
                        scope: it.createInstrumentationScope(e[0].instrumentationScope),
                        logRecords: e.map((t)=>pu(t, u)),
                        schemaUrl: e[0].instrumentationScope.schemaUrl
                    })),
                schemaUrl: o.schemaUrl
            };
        });
    }
    function pu(l, u) {
        return {
            timeUnixNano: u.encodeHrTime(l.hrTime),
            observedTimeUnixNano: u.encodeHrTime(l.hrTimeObserved),
            severityNumber: su(l.severityNumber),
            severityText: l.severityText,
            body: it.toAnyValue(l.body),
            eventName: l.eventName,
            attributes: dn(l.attributes),
            droppedAttributesCount: l.droppedAttributesCount,
            flags: l.spanContext?.traceFlags,
            traceId: u.encodeOptionalSpanContext(l.spanContext?.traceId),
            spanId: u.encodeOptionalSpanContext(l.spanContext?.spanId)
        };
    }
    function su(severityNumber) {
        return severityNumber;
    }
    function dn(l) {
        return Object.keys(l).map((u)=>it.toKeyValue(u, l[u]));
    }
    yn.toLogAttributes = dn;
});
const On = C(function(vn) {
    Object.defineProperty(vn, "__esModule", {
        value: true
    });
    vn.ProtobufLogsSerializer = undefined;
    const It = Et();
    const mn = ce();
    const ExportLogsServiceResponse = It.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;
    const ExportLogsServiceRequest = It.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
    vn.ProtobufLogsSerializer = {
        serializeRequest: (l)=>{
            let u = mn.createExportLogsServiceRequest(l);
            return ExportLogsServiceRequest.encode(u).finish();
        },
        deserializeResponse: (l)=>ExportLogsServiceResponse.decode(l)
    };
});
const xn = C(function(ae) {
    Object.defineProperty(ae, "__esModule", {
        value: true
    });
    ae.ProtobufLogsSerializer = undefined;
    const mu = On();
    Object.defineProperty(ae, "ProtobufLogsSerializer", {
        enumerable: true,
        get: function() {
            return mu.ProtobufLogsSerializer;
        }
    });
});
const gn = C(function(Sn) {
    Object.defineProperty(Sn, "__esModule", {
        value: true
    });
    Sn.EAggregationTemporality = undefined;
    let bu;
    ((l)=>{
        l[l.AGGREGATION_TEMPORALITY_UNSPECIFIED = 0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED";
        l[l.AGGREGATION_TEMPORALITY_DELTA = 1] = "AGGREGATION_TEMPORALITY_DELTA";
        l[l.AGGREGATION_TEMPORALITY_CUMULATIVE = 2] = "AGGREGATION_TEMPORALITY_CUMULATIVE";
    })(bu = Sn.EAggregationTemporality || (Sn.EAggregationTemporality = {}));
});
const pe = C(function(Un) {
    Object.defineProperty(Un, "__esModule", {
        value: true
    });
    Un.createExportMetricsServiceRequest = Un.toMetric = Un.toScopeMetrics = Un.toResourceMetrics = undefined;
    const _t = Da();
    const J = DOe();
    const At = gn();
    const Tn = Pt();
    const X = Ut();
    function wn(l, u) {
        let f = Tn.getOtlpEncoder(u);
        let d = X.createResource(l.resource);
        return {
            resource: d,
            schemaUrl: d.schemaUrl,
            scopeMetrics: En(l.scopeMetrics, f)
        };
    }
    Un.toResourceMetrics = wn;
    function En(l, u) {
        return Array.from(l.map((f)=>({
                scope: X.createInstrumentationScope(f.scope),
                metrics: f.metrics.map((d)=>Pn(d, u)),
                schemaUrl: f.scope.schemaUrl
            })));
    }
    Un.toScopeMetrics = En;
    function Pn(l, u) {
        let f = {
            name: l.descriptor.name,
            description: l.descriptor.description,
            unit: l.descriptor.unit
        };
        let aggregationTemporality = gu(l.aggregationTemporality);
        switch(l.dataPointType){
            case J.DataPointType.SUM:
                f.sum = {
                    aggregationTemporality,
                    isMonotonic: l.isMonotonic,
                    dataPoints: Nn(l, u)
                };
                break;
            case J.DataPointType.GAUGE:
                f.gauge = {
                    dataPoints: Nn(l, u)
                };
                break;
            case J.DataPointType.HISTOGRAM:
                f.histogram = {
                    aggregationTemporality,
                    dataPoints: xu(l, u)
                };
                break;
            case J.DataPointType.EXPONENTIAL_HISTOGRAM:
                f.exponentialHistogram = {
                    aggregationTemporality,
                    dataPoints: Su(l, u)
                };
                break;
        }
        return f;
    }
    Un.toMetric = Pn;
    function Ou(l, valueType, f) {
        let d = {
            attributes: X.toAttributes(l.attributes),
            startTimeUnixNano: f.encodeHrTime(l.startTime),
            timeUnixNano: f.encodeHrTime(l.endTime)
        };
        switch(valueType){
            case _t.ValueType.INT:
                d.asInt = l.value;
                break;
            case _t.ValueType.DOUBLE:
                d.asDouble = l.value;
                break;
        }
        return d;
    }
    function Nn(l, u) {
        return l.dataPoints.map((f)=>Ou(f, l.descriptor.valueType, u));
    }
    function xu(l, u) {
        return l.dataPoints.map((f)=>{
            let f_value = f.value;
            return {
                attributes: X.toAttributes(f.attributes),
                bucketCounts: f_value.buckets.counts,
                explicitBounds: f_value.buckets.boundaries,
                count: f_value.count,
                sum: f_value.sum,
                min: f_value.min,
                max: f_value.max,
                startTimeUnixNano: u.encodeHrTime(f.startTime),
                timeUnixNano: u.encodeHrTime(f.endTime)
            };
        });
    }
    function Su(l, u) {
        return l.dataPoints.map((f)=>{
            let f_value = f.value;
            return {
                attributes: X.toAttributes(f.attributes),
                count: f_value.count,
                min: f_value.min,
                max: f_value.max,
                sum: f_value.sum,
                positive: {
                    offset: f_value.positive.offset,
                    bucketCounts: f_value.positive.bucketCounts
                },
                negative: {
                    offset: f_value.negative.offset,
                    bucketCounts: f_value.negative.bucketCounts
                },
                scale: f_value.scale,
                zeroCount: f_value.zeroCount,
                startTimeUnixNano: u.encodeHrTime(f.startTime),
                timeUnixNano: u.encodeHrTime(f.endTime)
            };
        });
    }
    function gu(aggregationTemporality) {
        switch(aggregationTemporality){
            case J.AggregationTemporality.DELTA:
                return At.EAggregationTemporality.AGGREGATION_TEMPORALITY_DELTA;
            case J.AggregationTemporality.CUMULATIVE:
                return At.EAggregationTemporality.AGGREGATION_TEMPORALITY_CUMULATIVE;
        }
    }
    function Nu(l, u) {
        return {
            resourceMetrics: l.map((f)=>wn(f, u))
        };
    }
    Un.createExportMetricsServiceRequest = Nu;
});
const Rn = C(function(An) {
    Object.defineProperty(An, "__esModule", {
        value: true
    });
    An.ProtobufMetricsSerializer = undefined;
    const Lt = Et();
    const _n = pe();
    const ExportMetricsServiceResponse = Lt.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;
    const ExportMetricsServiceRequest = Lt.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
    An.ProtobufMetricsSerializer = {
        serializeRequest: (l)=>{
            let u = _n.createExportMetricsServiceRequest([
                l
            ]);
            return ExportMetricsServiceRequest.encode(u).finish();
        },
        deserializeResponse: (l)=>ExportMetricsServiceResponse.decode(l)
    };
});
const kn = C(function(se) {
    Object.defineProperty(se, "__esModule", {
        value: true
    });
    se.ProtobufMetricsSerializer = undefined;
    const Iu = Rn();
    Object.defineProperty(se, "ProtobufMetricsSerializer", {
        enumerable: true,
        get: function() {
            return Iu.ProtobufMetricsSerializer;
        }
    });
});
const de = C(function(qn) {
    Object.defineProperty(qn, "__esModule", {
        value: true
    });
    qn.createExportTraceServiceRequest = qn.toOtlpSpanEvent = qn.toOtlpLink = qn.sdkSpanToOtlpSpan = undefined;
    const Z = Ut();
    const Dn = Pt();
    const Au = 256;
    const Lu = 512;
    function Mn(traceFlags, u) {
        let f = traceFlags & 255 | Au;
        if (u) {
            f |= Lu;
        }
        return f;
    }
    function Cn(l, u) {
        let f = l.spanContext();
        let l_status = l.status;
        let parentSpanId = l.parentSpanContext?.spanId ? u.encodeSpanContext(l.parentSpanContext?.spanId) : undefined;
        return {
            traceId: u.encodeSpanContext(f.traceId),
            spanId: u.encodeSpanContext(f.spanId),
            parentSpanId,
            traceState: f.traceState?.serialize(),
            name: l.name,
            kind: l.kind == null ? 0 : l.kind + 1,
            startTimeUnixNano: u.encodeHrTime(l.startTime),
            endTimeUnixNano: u.encodeHrTime(l.endTime),
            attributes: Z.toAttributes(l.attributes),
            droppedAttributesCount: l.droppedAttributesCount,
            events: l.events.map((o)=>Bn(o, u)),
            droppedEventsCount: l.droppedEventsCount,
            status: {
                code: l_status.code,
                message: l_status.message
            },
            links: l.links.map((o)=>Vn(o, u)),
            droppedLinksCount: l.droppedLinksCount,
            flags: Mn(f.traceFlags, l.parentSpanContext?.isRemote)
        };
    }
    qn.sdkSpanToOtlpSpan = Cn;
    function Vn(l, u) {
        return {
            attributes: l.attributes ? Z.toAttributes(l.attributes) : [],
            spanId: u.encodeSpanContext(l.context.spanId),
            traceId: u.encodeSpanContext(l.context.traceId),
            traceState: l.context.traceState?.serialize(),
            droppedAttributesCount: l.droppedAttributesCount || 0,
            flags: Mn(l.context.traceFlags, l.context.isRemote)
        };
    }
    qn.toOtlpLink = Vn;
    function Bn(l, u) {
        return {
            attributes: l.attributes ? Z.toAttributes(l.attributes) : [],
            name: l.name,
            timeUnixNano: u.encodeHrTime(l.time),
            droppedAttributesCount: l.droppedAttributesCount || 0
        };
    }
    qn.toOtlpSpanEvent = Bn;
    function Ru(l, u) {
        let f = Dn.getOtlpEncoder(u);
        return {
            resourceSpans: Du(l, f)
        };
    }
    qn.createExportTraceServiceRequest = Ru;
    function ku(l) {
        let u = new Map;
        for (let f of l){
            let d = u.get(f.resource);
            if (!d) {
                d = new Map;
                u.set(f.resource, d);
            }
            let i = `${f.instrumentationScope.name}@${f.instrumentationScope.version || ""}:${f.instrumentationScope.schemaUrl || ""}`;
            let o = d.get(i);
            if (!o) {
                o = [];
                d.set(i, o);
            }
            o.push(f);
        }
        return u;
    }
    function Du(l, u) {
        let f = ku(l);
        let d = [];
        let i = f.entries();
        let o = i.next();
        while(!o.done){
            let [e, t] = o.value;
            let scopeSpans = [];
            let n = t.values();
            let c = n.next();
            while(!c.done){
                let U = c.value;
                if (U.length > 0) {
                    let spans = U.map((et)=>Cn(et, u));
                    scopeSpans.push({
                        scope: Z.createInstrumentationScope(U[0].instrumentationScope),
                        spans,
                        schemaUrl: U[0].instrumentationScope.schemaUrl
                    });
                }
                c = n.next();
            }
            let s = Z.createResource(e);
            let m = {
                resource: s,
                scopeSpans,
                schemaUrl: s.schemaUrl
            };
            d.push(m);
            o = i.next();
        }
        return d;
    }
});
const zn = C(function(Kn) {
    Object.defineProperty(Kn, "__esModule", {
        value: true
    });
    Kn.ProtobufTraceSerializer = undefined;
    const Rt = Et();
    const Fn = de();
    const ExportTraceServiceResponse = Rt.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;
    const ExportTraceServiceRequest = Rt.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
    Kn.ProtobufTraceSerializer = {
        serializeRequest: (l)=>{
            let u = Fn.createExportTraceServiceRequest(l);
            return ExportTraceServiceRequest.encode(u).finish();
        },
        deserializeResponse: (l)=>ExportTraceServiceResponse.decode(l)
    };
});
const Jn = C(function(ye) {
    Object.defineProperty(ye, "__esModule", {
        value: true
    });
    ye.ProtobufTraceSerializer = undefined;
    const Hu = zn();
    Object.defineProperty(ye, "ProtobufTraceSerializer", {
        enumerable: true,
        get: function() {
            return Hu.ProtobufTraceSerializer;
        }
    });
});
const $n = C(function(Yn) {
    Object.defineProperty(Yn, "__esModule", {
        value: true
    });
    Yn.JsonLogsSerializer = undefined;
    const Gn = ce();
    Yn.JsonLogsSerializer = {
        serializeRequest: (l)=>{
            let u = Gn.createExportLogsServiceRequest(l, {
                useHex: true,
                useLongBits: false
            });
            return new TextEncoder().encode(JSON.stringify(u));
        },
        deserializeResponse: (l)=>{
            if (l.length === 0) {
                return {};
            }
            return JSON.parse(new TextDecoder().decode(l));
        }
    };
});
const Xn = C(function(he) {
    Object.defineProperty(he, "__esModule", {
        value: true
    });
    he.JsonLogsSerializer = undefined;
    const Ku = $n();
    Object.defineProperty(he, "JsonLogsSerializer", {
        enumerable: true,
        get: function() {
            return Ku.JsonLogsSerializer;
        }
    });
});
const eo = C(function(Qn) {
    Object.defineProperty(Qn, "__esModule", {
        value: true
    });
    Qn.JsonMetricsSerializer = undefined;
    const Zn = pe();
    Qn.JsonMetricsSerializer = {
        serializeRequest: (l)=>{
            let u = Zn.createExportMetricsServiceRequest([
                l
            ], {
                useLongBits: false
            });
            return new TextEncoder().encode(JSON.stringify(u));
        },
        deserializeResponse: (l)=>{
            if (l.length === 0) {
                return {};
            }
            return JSON.parse(new TextDecoder().decode(l));
        }
    };
});
const ro = C(function(me) {
    Object.defineProperty(me, "__esModule", {
        value: true
    });
    me.JsonMetricsSerializer = undefined;
    const zu = eo();
    Object.defineProperty(me, "JsonMetricsSerializer", {
        enumerable: true,
        get: function() {
            return zu.JsonMetricsSerializer;
        }
    });
});
const uo = C(function(oo) {
    Object.defineProperty(oo, "__esModule", {
        value: true
    });
    oo.JsonTraceSerializer = undefined;
    const no = de();
    oo.JsonTraceSerializer = {
        serializeRequest: (l)=>{
            let u = no.createExportTraceServiceRequest(l, {
                useHex: true,
                useLongBits: false
            });
            return new TextEncoder().encode(JSON.stringify(u));
        },
        deserializeResponse: (l)=>{
            if (l.length === 0) {
                return {};
            }
            return JSON.parse(new TextDecoder().decode(l));
        }
    };
});
const lo = C(function(ve) {
    Object.defineProperty(ve, "__esModule", {
        value: true
    });
    ve.JsonTraceSerializer = undefined;
    const Gu = uo();
    Object.defineProperty(ve, "JsonTraceSerializer", {
        enumerable: true,
        get: function() {
            return Gu.JsonTraceSerializer;
        }
    });
});
const FG = C(function(ut) {
    Object.defineProperty(ut, "__esModule", {
        value: true
    });
    ut.JsonTraceSerializer = ut.JsonMetricsSerializer = ut.JsonLogsSerializer = ut.ProtobufTraceSerializer = ut.ProtobufMetricsSerializer = ut.ProtobufLogsSerializer = undefined;
    const Wu = xn();
    Object.defineProperty(ut, "ProtobufLogsSerializer", {
        enumerable: true,
        get: function() {
            return Wu.ProtobufLogsSerializer;
        }
    });
    const $u = kn();
    Object.defineProperty(ut, "ProtobufMetricsSerializer", {
        enumerable: true,
        get: function() {
            return $u.ProtobufMetricsSerializer;
        }
    });
    const Xu = Jn();
    Object.defineProperty(ut, "ProtobufTraceSerializer", {
        enumerable: true,
        get: function() {
            return Xu.ProtobufTraceSerializer;
        }
    });
    const Zu = Xn();
    Object.defineProperty(ut, "JsonLogsSerializer", {
        enumerable: true,
        get: function() {
            return Zu.JsonLogsSerializer;
        }
    });
    const Qu = ro();
    Object.defineProperty(ut, "JsonMetricsSerializer", {
        enumerable: true,
        get: function() {
            return Qu.JsonMetricsSerializer;
        }
    });
    const tl = lo();
    Object.defineProperty(ut, "JsonTraceSerializer", {
        enumerable: true,
        get: function() {
            return tl.JsonTraceSerializer;
        }
    });
});
const po = C(function(ao) {
    Object.defineProperty(ao, "__esModule", {
        value: true
    });
    ao.validateAndNormalizeHeaders = undefined;
    const co = Da();
    function rl(l) {
        let u = {};
        Object.entries(l ?? {}).forEach(([f, d])=>{
            if (typeof d !== "undefined") {
                u[f] = String(d);
            } else {
                co.diag.warn(`Header "${f}" has invalid value (${d}) and will be ignored`);
            }
        });
        return u;
    }
    ao.validateAndNormalizeHeaders = rl;
});
const mo = C(function(yo) {
    Object.defineProperty(yo, "__esModule", {
        value: true
    });
    yo.getHttpConfigurationDefaults = yo.mergeOtlpHttpConfigurationWithDefaults = undefined;
    const kt = yt();
    const so = po();
    function nl(headers, u, f) {
        return async ()=>{
            let d = {
                ...await f()
            };
            let i = {};
            if (u != null) {
                Object.assign(i, await u());
            }
            if (headers != null) {
                Object.assign(i, so.validateAndNormalizeHeaders(await headers()));
            }
            return Object.assign(i, d);
        };
    }
    function ol(url) {
        if (url == null) {
            return;
        }
        try {
            let u = globalThis.location?.href;
            return new URL(url, u).href;
        } catch  {
            throw Error(`Configuration: Could not parse user-provided export URL: '${url}'`);
        }
    }
    function il(l, u, f) {
        return {
            ...kt.mergeOtlpSharedConfigurationWithDefaults(l, u, f),
            headers: nl(l.headers, u.headers, f.headers),
            url: ol(l.url) ?? u.url ?? f.url
        };
    }
    yo.mergeOtlpHttpConfigurationWithDefaults = il;
    function ul(l, u) {
        return {
            ...kt.getSharedConfigurationDefaults(),
            headers: async ()=>l,
            url: `http://localhost:4318/${u}`
        };
    }
    yo.getHttpConfigurationDefaults = ul;
});
const Mt = C(function(bo) {
    Object.defineProperty(bo, "__esModule", {
        value: true
    });
    bo.getNodeHttpConfigurationDefaults = bo.mergeOtlpNodeHttpConfigurationWithDefaults = bo.httpAgentFactoryFromOptions = undefined;
    const Dt = mo();
    function vo(l) {
        return async (u)=>{
            let f = u === "http:";
            let d = f ? import("http") : import("https");
            let { Agent } = await d;
            if (f) {
                let { ca, cert, key, ...rest } = l;
                return new Agent(rest);
            }
            return new Agent(l);
        };
    }
    bo.httpAgentFactoryFromOptions = vo;
    function cl(l, u, f) {
        return {
            ...Dt.mergeOtlpHttpConfigurationWithDefaults(l, u, f),
            agentFactory: l.agentFactory ?? u.agentFactory ?? f.agentFactory,
            userAgent: l.userAgent
        };
    }
    bo.mergeOtlpNodeHttpConfigurationWithDefaults = cl;
    function al(l, u) {
        return {
            ...Dt.getHttpConfigurationDefaults(l, u),
            agentFactory: vo({
                keepAlive: true
            })
        };
    }
    bo.getNodeHttpConfigurationDefaults = al;
});
const go = C(function(xo) {
    Object.defineProperty(xo, "__esModule", {
        value: true
    });
    xo.parseRetryAfterToMills = xo.isExportRetryable = undefined;
    function sl(l) {
        return [
            429,
            502,
            503,
            504
        ].includes(l);
    }
    xo.isExportRetryable = sl;
    function dl(l) {
        if (l == null) {
            return;
        }
        let u = Number.parseInt(l, 10);
        if (Number.isInteger(u)) {
            if (u > 0) {
                return u * 1000;
            }
            return -1;
        }
        let f = new Date(l).getTime() - Date.now();
        if (f >= 0) {
            return f;
        }
        return 0;
    }
    xo.parseRetryAfterToMills = dl;
});
const wo = C(function(No) {
    Object.defineProperty(No, "__esModule", {
        value: true
    });
    No.VERSION = undefined;
    No.VERSION = "0.208.0";
});
const ko = C(function(Lo) {
    Object.defineProperty(Lo, "__esModule", {
        value: true
    });
    Lo.compressAndSend = Lo.sendWithHttp = undefined;
    const Po = Le("zlib");
    const Uo = Le("stream");
    const Ct = go();
    const Io = xt();
    const _o = wo();
    const Eo = `OTel-OTLP-Exporter-JavaScript/${_o.VERSION}`;
    function hl(l, u, headers, d, i, o, e, t, r) {
        let n = new URL(u);
        if (i) {
            headers["User-Agent"] = `${i} ${Eo}`;
        } else {
            headers["User-Agent"] = Eo;
        }
        let c = {
            hostname: n.hostname,
            port: n.port,
            path: n.pathname,
            method: "POST",
            headers,
            agent: o
        };
        let s = l(c, (m)=>{
            let U = [];
            m.on("data", (Q)=>U.push(Q));
            m.on("end", ()=>{
                if (m.statusCode && m.statusCode < 299) {
                    t({
                        status: "success",
                        data: Buffer.concat(U)
                    });
                } else if (m.statusCode && Ct.isExportRetryable(m.statusCode)) {
                    t({
                        status: "retryable",
                        retryInMillis: Ct.parseRetryAfterToMills(m.headers["retry-after"])
                    });
                } else {
                    let Q = new Io.OTLPExporterError(m.statusMessage, m.statusCode, Buffer.concat(U).toString());
                    t({
                        status: "failure",
                        error: Q
                    });
                }
            });
        });
        s.setTimeout(r, ()=>{
            s.destroy();
            t({
                status: "failure",
                error: Error("Request Timeout")
            });
        });
        s.on("error", (m)=>{
            t({
                status: "failure",
                error: m
            });
        });
        Ao(s, d, e, (m)=>{
            t({
                status: "failure",
                error: m
            });
        });
    }
    Lo.sendWithHttp = hl;
    function Ao(l, u, f, d) {
        let i = ml(f);
        if (u === "gzip") {
            l.setHeader("Content-Encoding", "gzip");
            i = i.on("error", d).pipe(Po.createGzip()).on("error", d);
        }
        i.pipe(l).on("error", d);
    }
    Lo.compressAndSend = Ao;
    function ml(l) {
        let u = new Uo.Readable;
        u.push(l);
        u.push(null);
        return u;
    }
});
const Bo = C(function(Co) {
    Object.defineProperty(Co, "__esModule", {
        value: true
    });
    Co.createHttpExporterTransport = undefined;
    const Do = ko();
    class Mo {
        _parameters;
        _utils = null;
        constructor(l){
            this._parameters = l;
        }
        async send(l, u) {
            let { agent, request } = await this._loadUtils();
            let i = await this._parameters.headers();
            return new Promise((resolve)=>{
                Do.sendWithHttp(request, this._parameters.url, i, this._parameters.compression, this._parameters.userAgent, agent, l, (e)=>{
                    resolve(e);
                }, u);
            });
        }
        shutdown() {}
        async _loadUtils() {
            let _utils = this._utils;
            if (_utils === null) {
                let u = new URL(this._parameters.url).protocol;
                let [f, request] = await Promise.all([
                    this._parameters.agentFactory(u),
                    bl(u)
                ]);
                _utils = this._utils = {
                    agent: f,
                    request
                };
            }
            return _utils;
        }
    }
    async function bl(l) {
        let u = l === "http:" ? import("http") : import("https");
        let { request } = await u;
        return request;
    }
    function Ol(l) {
        return new Mo(l);
    }
    Co.createHttpExporterTransport = Ol;
});
const jo = C(function(Fo) {
    Object.defineProperty(Fo, "__esModule", {
        value: true
    });
    Fo.createRetryingTransport = undefined;
    const xl = 5;
    const Sl = 1000;
    const gl = 5000;
    const Nl = 1.5;
    const qo = 0.2;
    function Tl() {
        return Math.random() * (2 * qo) - qo;
    }
    class Ho {
        _transport;
        constructor(l){
            this._transport = l;
        }
        retry(l, u, f) {
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    this._transport.send(l, u).then(resolve, reject);
                }, f);
            });
        }
        async send(l, u) {
            let f = Date.now() + u;
            let d = await this._transport.send(l, u);
            let i = xl;
            let o = Sl;
            while(d.status === "retryable" && i > 0){
                i--;
                let e = Math.max(Math.min(o, gl) + Tl(), 0);
                o = o * Nl;
                let t = d.retryInMillis ?? e;
                let r = f - Date.now();
                if (t > r) {
                    return d;
                }
                d = await this.retry(l, r, t);
            }
            return d;
        }
        shutdown() {
            return this._transport.shutdown();
        }
    }
    function wl(l) {
        return new Ho(l.transport);
    }
    Fo.createRetryingTransport = wl;
});
const Xo = C(function(Wo) {
    Object.defineProperty(Wo, "__esModule", {
        value: true
    });
    Wo.createOtlpHttpExportDelegate = undefined;
    const zo = jt();
    const Jo = Bo();
    const Go = Kt();
    const Yo = jo();
    function El(l, u) {
        return zo.createOtlpExportDelegate({
            transport: Yo.createRetryingTransport({
                transport: Jo.createHttpExporterTransport(l)
            }),
            serializer: u,
            promiseHandler: Go.createBoundedQueueExportPromiseHandler(l)
        }, {
            timeout: l.timeoutMillis
        });
    }
    Wo.createOtlpHttpExportDelegate = El;
});
const be = C(function(ti) {
    Object.defineProperty(ti, "__esModule", {
        value: true
    });
    ti.getSharedConfigurationFromEnvironment = undefined;
    const Vt = Of();
    const Bt = Da();
    function Zo(l) {
        let u = Vt.getNumberFromEnv(l);
        if (u != null) {
            if (Number.isFinite(u) && u > 0) {
                return u;
            }
            Bt.diag.warn(`Configuration: ${l} is invalid, expected number greater than 0 (actual: ${u})`);
        }
    }
    function Pl(l) {
        let u = Zo(`OTEL_EXPORTER_OTLP_${l}_TIMEOUT`);
        let f = Zo("OTEL_EXPORTER_OTLP_TIMEOUT");
        return u ?? f;
    }
    function Qo(l) {
        let u = Vt.getStringFromEnv(l)?.trim();
        if (u == null || u === "none" || u === "gzip") {
            return u;
        }
        Bt.diag.warn(`Configuration: ${l} is invalid, expected 'none' or 'gzip' (actual: '${u}')`);
    }
    function Ul(l) {
        let u = Qo(`OTEL_EXPORTER_OTLP_${l}_COMPRESSION`);
        let f = Qo("OTEL_EXPORTER_OTLP_COMPRESSION");
        return u ?? f;
    }
    function Il(l) {
        return {
            timeoutMillis: Pl(l),
            compression: Ul(l)
        };
    }
    ti.getSharedConfigurationFromEnvironment = Il;
});
const ai = C(function(li) {
    Object.defineProperty(li, "__esModule", {
        value: true
    });
    li.getNodeHttpConfigurationFromEnvironment = undefined;
    const ri = Le("fs");
    const ni = Le("path");
    const _ = Of();
    const lt = Da();
    const oi = be();
    const ii = yt();
    const ui = Mt();
    function _l(l) {
        let u = _.getStringFromEnv(`OTEL_EXPORTER_OTLP_${l}_HEADERS`);
        let f = _.getStringFromEnv("OTEL_EXPORTER_OTLP_HEADERS");
        let d = _.parseKeyPairsIntoRecord(u);
        let i = _.parseKeyPairsIntoRecord(f);
        if (Object.keys(d).length === 0 && Object.keys(i).length === 0) {
            return;
        }
        return {
            ..._.parseKeyPairsIntoRecord(f),
            ..._.parseKeyPairsIntoRecord(u)
        };
    }
    function Al(l) {
        try {
            return new URL(l).toString();
        } catch  {
            lt.diag.warn(`Configuration: Could not parse environment-provided export URL: '${l}', falling back to undefined`);
            return;
        }
    }
    function Ll(l, u) {
        try {
            new URL(l);
        } catch  {
            lt.diag.warn(`Configuration: Could not parse environment-provided export URL: '${l}', falling back to undefined`);
            return;
        }
        if (!l.endsWith("/")) {
            l = `${l}/`;
        }
        l += u;
        try {
            new URL(l);
        } catch  {
            lt.diag.warn(`Configuration: Provided URL appended with '${u}' is not a valid URL, using 'undefined' instead of '${l}'`);
            return;
        }
        return l;
    }
    function Rl(l) {
        let u = _.getStringFromEnv("OTEL_EXPORTER_OTLP_ENDPOINT");
        if (u === undefined) {
            return;
        }
        return Ll(u, l);
    }
    function kl(l) {
        let u = _.getStringFromEnv(`OTEL_EXPORTER_OTLP_${l}_ENDPOINT`);
        if (u === undefined) {
            return;
        }
        return Al(u);
    }
    function Oe(l, u, f) {
        let d = _.getStringFromEnv(l);
        let i = _.getStringFromEnv(u);
        let o = d ?? i;
        if (o != null) {
            try {
                return ri.readFileSync(ni.resolve(process.cwd(), o));
            } catch  {
                lt.diag.warn(f);
                return;
            }
        } else {
            return;
        }
    }
    function Dl(l) {
        return Oe(`OTEL_EXPORTER_OTLP_${l}_CLIENT_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE", "Failed to read client certificate chain file");
    }
    function Ml(l) {
        return Oe(`OTEL_EXPORTER_OTLP_${l}_CLIENT_KEY`, "OTEL_EXPORTER_OTLP_CLIENT_KEY", "Failed to read client certificate private key file");
    }
    function Cl(l) {
        return Oe(`OTEL_EXPORTER_OTLP_${l}_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CERTIFICATE", "Failed to read root certificate file");
    }
    function Vl(l, u) {
        return {
            ...oi.getSharedConfigurationFromEnvironment(l),
            url: kl(l) ?? Rl(u),
            headers: ii.wrapStaticHeadersInFunction(_l(l)),
            agentFactory: ui.httpAgentFactoryFromOptions({
                keepAlive: true,
                ca: Cl(l),
                cert: Dl(l),
                key: Ml(l)
            })
        };
    }
    li.getNodeHttpConfigurationFromEnvironment = Vl;
});
const di = C(function(pi) {
    Object.defineProperty(pi, "__esModule", {
        value: true
    });
    pi.convertLegacyHeaders = undefined;
    const fi = yt();
    function Bl(l) {
        if (typeof l.headers === "function") {
            return l.headers;
        }
        return fi.wrapStaticHeadersInFunction(l.headers);
    }
    pi.convertLegacyHeaders = Bl;
});
const xi = C(function(bi) {
    Object.defineProperty(bi, "__esModule", {
        value: true
    });
    bi.convertLegacyHttpOptions = undefined;
    const yi = Da();
    const qt = Mt();
    const hi = gX();
    const mi = ai();
    const vi = di();
    function ql(l) {
        if (typeof l.httpAgentOptions === "function") {
            return l.httpAgentOptions;
        }
        let l_httpAgentOptions = l.httpAgentOptions;
        if (l.keepAlive != null) {
            l_httpAgentOptions = {
                keepAlive: l.keepAlive,
                ...l_httpAgentOptions
            };
        }
        if (l_httpAgentOptions != null) {
            return hi.httpAgentFactoryFromOptions(l_httpAgentOptions);
        } else {
            return;
        }
    }
    function Hl(l, u, f, d) {
        if (l.metadata) {
            yi.diag.warn("Metadata cannot be set when using http");
        }
        return qt.mergeOtlpNodeHttpConfigurationWithDefaults({
            url: l.url,
            headers: vi.convertLegacyHeaders(l),
            concurrencyLimit: l.concurrencyLimit,
            timeoutMillis: l.timeoutMillis,
            compression: l.compression,
            agentFactory: ql(l),
            userAgent: l.userAgent
        }, mi.getNodeHttpConfigurationFromEnvironment(u, f), qt.getNodeHttpConfigurationDefaults(d, f));
    }
    bi.convertLegacyHttpOptions = Hl;
});
var gX = C(function(dt) {
    Object.defineProperty(dt, "__esModule", {
        value: true
    });
    dt.convertLegacyHttpOptions = dt.getSharedConfigurationFromEnvironment = dt.createOtlpHttpExportDelegate = dt.httpAgentFactoryFromOptions = undefined;
    const Fl = Mt();
    Object.defineProperty(dt, "httpAgentFactoryFromOptions", {
        enumerable: true,
        get: function() {
            return Fl.httpAgentFactoryFromOptions;
        }
    });
    const Kl = Xo();
    Object.defineProperty(dt, "createOtlpHttpExportDelegate", {
        enumerable: true,
        get: function() {
            return Kl.createOtlpHttpExportDelegate;
        }
    });
    const jl = be();
    Object.defineProperty(dt, "getSharedConfigurationFromEnvironment", {
        enumerable: true,
        get: function() {
            return jl.getSharedConfigurationFromEnvironment;
        }
    });
    const zl = xi();
    Object.defineProperty(dt, "convertLegacyHttpOptions", {
        enumerable: true,
        get: function() {
            return zl.convertLegacyHttpOptions;
        }
    });
});
export { uK, sWr, OXn, HOe, MXn, HXn, iWr, aWr, lWr, FG, gX };
