import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const qe = C(function(Xt, je) {
    const W = Le("constants");
    const process_cwd = process.cwd;
    let oe = null;
    const pt = process.env.GRACEFUL_FS_PLATFORM || "linux";
    process.cwd = function() {
        if (!oe) {
            oe = process_cwd.call(process);
        }
        return oe;
    };
    try {
        process.cwd();
    } catch (e) {}
    if (typeof process.chdir === "function") {
        ue = process.chdir;
        process.chdir = function(e) {
            oe = null;
            ue.call(process, e);
        };
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(process.chdir, ue);
        }
    }
    var ue;
    je.exports = mt;
    function mt(e) {
        if (W.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
            r(e);
        }
        if (!e.lutimes) {
            n(e);
        }
        e.chown = c(e.chown);
        e.fchown = c(e.fchown);
        e.lchown = c(e.lchown);
        e.chmod = i(e.chmod);
        e.fchmod = i(e.fchmod);
        e.lchmod = i(e.lchmod);
        e.chownSync = p(e.chownSync);
        e.fchownSync = p(e.fchownSync);
        e.lchownSync = p(e.lchownSync);
        e.chmodSync = u(e.chmodSync);
        e.fchmodSync = u(e.fchmodSync);
        e.lchmodSync = u(e.lchmodSync);
        e.stat = y(e.stat);
        e.fstat = y(e.fstat);
        e.lstat = y(e.lstat);
        e.statSync = T(e.statSync);
        e.fstatSync = T(e.fstatSync);
        e.lstatSync = T(e.lstatSync);
        if (e.chmod && !e.lchmod) {
            e.lchmod = function(o, m, f) {
                if (f) {
                    process.nextTick(f);
                }
            };
            e.lchmodSync = function() {};
        }
        if (e.chown && !e.lchown) {
            e.lchown = function(o, m, f, a) {
                if (a) {
                    process.nextTick(a);
                }
            };
            e.lchownSync = function() {};
        }
        if (pt === "win32") {
            e.rename = typeof e.rename !== "function" ? e.rename : ((o)=>{
                function m(f, a, h) {
                    const g = Date.now();
                    let _ = 0;
                    o(f, a, function x(j) {
                        if (j && (j.code === "EACCES" || j.code === "EPERM" || j.code === "EBUSY") && Date.now() - g < 60000) {
                            setTimeout(()=>{
                                e.stat(a, function(G, Z) {
                                    if (G && G.code === "ENOENT") {
                                        o(f, a, x);
                                    } else {
                                        h(j);
                                    }
                                });
                            }, _);
                            if (_ < 100) {
                                _ += 10;
                            }
                            return;
                        }
                        if (h) {
                            h(j);
                        }
                    });
                }
                if (Object.setPrototypeOf) {
                    Object.setPrototypeOf(m, o);
                }
                return m;
            })(e.rename);
        }
        e.read = typeof e.read !== "function" ? e.read : ((o)=>{
            function m(f, a, h, g, _, x) {
                let j;
                if (x && typeof x === "function") {
                    let G = 0;
                    j = function(Z, Ce, Ge) {
                        if (Z && Z.code === "EAGAIN" && G < 10) {
                            G++;
                            return o.call(e, f, a, h, g, _, j);
                        }
                        x.apply(this, arguments);
                    };
                }
                return o.call(e, f, a, h, g, _, j);
            }
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(m, o);
            }
            return m;
        })(e.read);
        e.readSync = typeof e.readSync !== "function" ? e.readSync : ((o)=>function(m, f, a, h, g) {
                let _ = 0;
                while(true){
                    try {
                        return o.call(e, m, f, a, h, g);
                    } catch (error) {
                        if (error.code === "EAGAIN" && _ < 10) {
                            _++;
                            continue;
                        }
                        throw error;
                    }
                }
            })(e.readSync);
        function r(o) {
            o.lchmod = function(m, f, a) {
                o.open(m, W.O_WRONLY | W.O_SYMLINK, f, function(h, g) {
                    if (h) {
                        if (a) {
                            a(h);
                        }
                        return;
                    }
                    o.fchmod(g, f, function(_) {
                        o.close(g, function(x) {
                            if (a) {
                                a(_ || x);
                            }
                        });
                    });
                });
            };
            o.lchmodSync = function(m, f) {
                const a = o.openSync(m, W.O_WRONLY | W.O_SYMLINK, f);
                let h = true;
                let g;
                try {
                    g = o.fchmodSync(a, f);
                    h = false;
                } finally{
                    if (h) {
                        try {
                            o.closeSync(a);
                        } catch (_) {}
                    } else {
                        o.closeSync(a);
                    }
                }
                return g;
            };
        }
        function n(o) {
            if (W.hasOwnProperty("O_SYMLINK") && o.futimes) {
                o.lutimes = function(m, f, a, h) {
                    o.open(m, W.O_SYMLINK, function(g, _) {
                        if (g) {
                            if (h) {
                                h(g);
                            }
                            return;
                        }
                        o.futimes(_, f, a, function(x) {
                            o.close(_, function(j) {
                                if (h) {
                                    h(x || j);
                                }
                            });
                        });
                    });
                };
                o.lutimesSync = function(m, f, a) {
                    const h = o.openSync(m, W.O_SYMLINK);
                    let g;
                    let _ = true;
                    try {
                        g = o.futimesSync(h, f, a);
                        _ = false;
                    } finally{
                        if (_) {
                            try {
                                o.closeSync(h);
                            } catch (x) {}
                        } else {
                            o.closeSync(h);
                        }
                    }
                    return g;
                };
            } else if (o.futimes) {
                o.lutimes = function(m, f, a, h) {
                    if (h) {
                        process.nextTick(h);
                    }
                };
                o.lutimesSync = function() {};
            }
        }
        function i(o) {
            if (!o) {
                return o;
            }
            return function(m, f, a) {
                return o.call(e, m, f, function(h) {
                    if (b(h)) {
                        h = null;
                    }
                    if (a) {
                        a.apply(this, arguments);
                    }
                });
            };
        }
        function u(o) {
            if (!o) {
                return o;
            }
            return function(m, f) {
                try {
                    return o.call(e, m, f);
                } catch (error) {
                    if (!b(error)) {
                        throw error;
                    }
                }
            };
        }
        function c(o) {
            if (!o) {
                return o;
            }
            return function(m, f, a, h) {
                return o.call(e, m, f, a, function(g) {
                    if (b(g)) {
                        g = null;
                    }
                    if (h) {
                        h.apply(this, arguments);
                    }
                });
            };
        }
        function p(o) {
            if (!o) {
                return o;
            }
            return function(m, f, a) {
                try {
                    return o.call(e, m, f, a);
                } catch (error) {
                    if (!b(error)) {
                        throw error;
                    }
                }
            };
        }
        function y(o) {
            if (!o) {
                return o;
            }
            return function(m, f, a) {
                if (typeof f === "function") {
                    a = f;
                    f = null;
                }
                function h(g, _) {
                    if (_) {
                        if (_.uid < 0) {
                            _.uid += 4294967296;
                        }
                        if (_.gid < 0) {
                            _.gid += 4294967296;
                        }
                    }
                    if (a) {
                        a.apply(this, arguments);
                    }
                }
                if (f) {
                    return o.call(e, m, f, h);
                }
                return o.call(e, m, h);
            };
        }
        function T(o) {
            if (!o) {
                return o;
            }
            return function(m, f) {
                const a = f ? o.call(e, m, f) : o.call(e, m);
                if (a) {
                    if (a.uid < 0) {
                        a.uid += 4294967296;
                    }
                    if (a.gid < 0) {
                        a.gid += 4294967296;
                    }
                }
                return a;
            };
        }
        function b(o) {
            if (!o) {
                return true;
            }
            if (o.code === "ENOSYS") {
                return true;
            }
            const m = !process.getuid || process.getuid() !== 0;
            if (m) {
                if (o.code === "EINVAL" || o.code === "EPERM") {
                    return true;
                }
            }
            return false;
        }
    }
});
const $e = C(function(Jt, Ae) {
    const Stream = Le("stream").Stream;
    Ae.exports = yt;
    function yt(e) {
        return {
            ReadStream,
            WriteStream
        };
        function ReadStream(i, u) {
            if (!(this instanceof ReadStream)) {
                return new ReadStream(i, u);
            }
            Stream.call(this);
            const c = this;
            this.path = i;
            this.fd = null;
            this.readable = true;
            this.paused = false;
            this.flags = "r";
            this.mode = 438;
            this.bufferSize = 65536;
            u = u || {};
            const p = Object.keys(u);
            for(let y = 0, T = p.length; y < T; y++){
                const b = p[y];
                this[b] = u[b];
            }
            if (this.encoding) {
                this.setEncoding(this.encoding);
            }
            if (this.start !== undefined) {
                if (typeof this.start !== "number") {
                    throw TypeError("start must be a Number");
                }
                if (this.end === undefined) {
                    this.end = Infinity;
                } else if (typeof this.end !== "number") {
                    throw TypeError("end must be a Number");
                }
                if (this.start > this.end) {
                    throw Error("start must be <= end");
                }
                this.pos = this.start;
            }
            if (this.fd !== null) {
                process.nextTick(function() {
                    c._read();
                });
                return;
            }
            e.open(this.path, this.flags, this.mode, function(o, m) {
                if (o) {
                    c.emit("error", o);
                    c.readable = false;
                    return;
                }
                c.fd = m;
                c.emit("open", m);
                c._read();
            });
        }
        function WriteStream(i, u) {
            if (!(this instanceof WriteStream)) {
                return new WriteStream(i, u);
            }
            Stream.call(this);
            this.path = i;
            this.fd = null;
            this.writable = true;
            this.flags = "w";
            this.encoding = "binary";
            this.mode = 438;
            this.bytesWritten = 0;
            u = u || {};
            const c = Object.keys(u);
            for(let p = 0, y = c.length; p < y; p++){
                const T = c[p];
                this[T] = u[T];
            }
            if (this.start !== undefined) {
                if (typeof this.start !== "number") {
                    throw TypeError("start must be a Number");
                }
                if (this.start < 0) {
                    throw Error("start must be >= zero");
                }
                this.pos = this.start;
            }
            this.busy = false;
            this._queue = [];
            if (this.fd === null) {
                this._open = e.open;
                this._queue.push([
                    this._open,
                    this.path,
                    this.flags,
                    this.mode,
                    undefined
                ]);
                this.flush();
            }
        }
    }
});
const Ye = C(function(Zt, We) {
    We.exports = vt;
    var dt = Object.getPrototypeOf || ((e)=>e.__proto__);
    function vt(e) {
        if (e === null || typeof e !== "object") {
            return e;
        }
        if (e instanceof Object) var r = {
            __proto__: dt(e)
        };
        else {
            var r = Object.create(null);
        }
        Object.getOwnPropertyNames(e).forEach((n)=>{
            Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
        });
        return r;
    }
});
const Oe = C(function(er, ge) {
    const I = Le("fs");
    const St = qe();
    const _t = $e();
    const wt = Ye();
    const ce = Le("util");
    let M;
    let fe;
    if (typeof Symbol === "function" && typeof Symbol.for === "function") {
        M = Symbol.for("graceful-fs.queue");
        fe = Symbol.for("graceful-fs.previous");
    } else {
        M = "___graceful-fs.queue";
        fe = "___graceful-fs.previous";
    }
    function gt() {}
    function Qe(e, r) {
        Object.defineProperty(e, M, {
            get: function() {
                return r;
            }
        });
    }
    let Q = gt;
    if (ce.debuglog) {
        Q = ce.debuglog("gfs4");
    } else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
        Q = function() {
            let e = ce.format(...arguments);
            e = `GFS4: ${e.split(/\n/).join(`
GFS4: `)}`;
            console.error(e);
        };
    }
    if (!I[M]) {
        Se = global[M] || [];
        Qe(I, Se);
        I.close = ((e)=>{
            function r(n, i) {
                return e.call(I, n, function(u) {
                    if (!u) {
                        Ke();
                    }
                    if (typeof i === "function") {
                        i.apply(this, arguments);
                    }
                });
            }
            Object.defineProperty(r, fe, {
                value: e
            });
            return r;
        })(I.close);
        I.closeSync = ((e)=>{
            function r(n) {
                e.apply(I, arguments);
                Ke();
            }
            Object.defineProperty(r, fe, {
                value: e
            });
            return r;
        })(I.closeSync);
        if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
            process.on("exit", function() {
                Q(I[M]);
                Le("assert").equal(I[M].length, 0);
            });
        }
    }
    var Se;
    if (!global[M]) {
        Qe(global, I[M]);
    }
    ge.exports = _e(wt(I));
    if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !I.__patched) {
        ge.exports = _e(I);
        I.__patched = true;
    }
    function _e(e) {
        St(e);
        e.gracefulify = _e;
        e.createReadStream = Ce;
        e.createWriteStream = Ge;
        const e_readFile = e.readFile;
        e.readFile = n;
        function n(s, S, d) {
            if (typeof S === "function") {
                d = S;
                S = null;
            }
            return N(s, S, d);
            function N(P, D, k, L) {
                return e_readFile(P, D, function(w) {
                    if (w && (w.code === "EMFILE" || w.code === "ENFILE")) {
                        V([
                            N,
                            [
                                P,
                                D,
                                k
                            ],
                            w,
                            L || Date.now(),
                            Date.now()
                        ]);
                    } else if (typeof k === "function") {
                        k.apply(this, arguments);
                    }
                });
            }
        }
        const e_writeFile = e.writeFile;
        e.writeFile = u;
        function u(s, S, d, N) {
            if (typeof d === "function") {
                N = d;
                d = null;
            }
            return P(s, S, d, N);
            function P(D, k, L, w, R) {
                return e_writeFile(D, k, L, function(O) {
                    if (O && (O.code === "EMFILE" || O.code === "ENFILE")) {
                        V([
                            P,
                            [
                                D,
                                k,
                                L,
                                w
                            ],
                            O,
                            R || Date.now(),
                            Date.now()
                        ]);
                    } else if (typeof w === "function") {
                        w.apply(this, arguments);
                    }
                });
            }
        }
        const e_appendFile = e.appendFile;
        if (e_appendFile) {
            e.appendFile = p;
        }
        function p(s, S, d, N) {
            if (typeof d === "function") {
                N = d;
                d = null;
            }
            return P(s, S, d, N);
            function P(D, k, L, w, R) {
                return e_appendFile(D, k, L, function(O) {
                    if (O && (O.code === "EMFILE" || O.code === "ENFILE")) {
                        V([
                            P,
                            [
                                D,
                                k,
                                L,
                                w
                            ],
                            O,
                            R || Date.now(),
                            Date.now()
                        ]);
                    } else if (typeof w === "function") {
                        w.apply(this, arguments);
                    }
                });
            }
        }
        const e_copyFile = e.copyFile;
        if (e_copyFile) {
            e.copyFile = T;
        }
        function T(s, S, d, N) {
            if (typeof d === "function") {
                N = d;
                d = 0;
            }
            return P(s, S, d, N);
            function P(D, k, L, w, R) {
                return e_copyFile(D, k, L, function(O) {
                    if (O && (O.code === "EMFILE" || O.code === "ENFILE")) {
                        V([
                            P,
                            [
                                D,
                                k,
                                L,
                                w
                            ],
                            O,
                            R || Date.now(),
                            Date.now()
                        ]);
                    } else if (typeof w === "function") {
                        w.apply(this, arguments);
                    }
                });
            }
        }
        const e_readdir = e.readdir;
        e.readdir = m;
        var o = /^v[0-5]\./;
        function m(s, S, d) {
            if (typeof S === "function") {
                d = S;
                S = null;
            }
            var N = o.test(process.version) ? function(k, L, w, R) {
                return e_readdir(k, P(k, L, w, R));
            } : function(k, L, w, R) {
                return e_readdir(k, L, P(k, L, w, R));
            };
            return N(s, S, d);
            function P(D, k, L, w) {
                return function(R, O) {
                    if (R && (R.code === "EMFILE" || R.code === "ENFILE")) {
                        V([
                            N,
                            [
                                D,
                                k,
                                L
                            ],
                            R,
                            w || Date.now(),
                            Date.now()
                        ]);
                    } else {
                        if (O && O.sort) {
                            O.sort();
                        }
                        if (typeof L === "function") {
                            L.call(this, R, O);
                        }
                    }
                };
            }
        }
        if (process.version.substr(0, 4) === "v0.8") {
            const f = _t(e);
            x = f.ReadStream;
            G = f.WriteStream;
        }
        var e_ReadStream = e.ReadStream;
        if (e_ReadStream) {
            x.prototype = Object.create(e_ReadStream.prototype);
            x.prototype.open = j;
        }
        var e_WriteStream = e.WriteStream;
        if (e_WriteStream) {
            G.prototype = Object.create(e_WriteStream.prototype);
            G.prototype.open = Z;
        }
        Object.defineProperty(e, "ReadStream", {
            get: function() {
                return x;
            },
            set: function(s) {
                x = s;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(e, "WriteStream", {
            get: function() {
                return G;
            },
            set: function(s) {
                G = s;
            },
            enumerable: true,
            configurable: true
        });
        let g = x;
        Object.defineProperty(e, "FileReadStream", {
            get: function() {
                return g;
            },
            set: function(s) {
                g = s;
            },
            enumerable: true,
            configurable: true
        });
        let _ = G;
        Object.defineProperty(e, "FileWriteStream", {
            get: function() {
                return _;
            },
            set: function(s) {
                _ = s;
            },
            enumerable: true,
            configurable: true
        });
        function x(s, S) {
            if (this instanceof x) {
                e_ReadStream.apply(this, arguments);
                return this;
            } else {
                return x.apply(Object.create(x.prototype), arguments);
            }
        }
        function j() {
            const s = this;
            ve(s.path, s.flags, s.mode, function(S, d) {
                if (S) {
                    if (s.autoClose) {
                        s.destroy();
                    }
                    s.emit("error", S);
                } else {
                    s.fd = d;
                    s.emit("open", d);
                    s.read();
                }
            });
        }
        function G(s, S) {
            if (this instanceof G) {
                e_WriteStream.apply(this, arguments);
                return this;
            } else {
                return G.apply(Object.create(G.prototype), arguments);
            }
        }
        function Z() {
            const s = this;
            ve(s.path, s.flags, s.mode, function(S, d) {
                if (S) {
                    s.destroy();
                    s.emit("error", S);
                } else {
                    s.fd = d;
                    s.emit("open", d);
                }
            });
        }
        function Ce(s, S) {
            return new e.ReadStream(s, S);
        }
        function Ge(s, S) {
            return new e.WriteStream(s, S);
        }
        var e_open = e.open;
        e.open = ve;
        function ve(s, S, d, N) {
            if (typeof d === "function") {
                N = d;
                d = null;
            }
            return P(s, S, d, N);
            function P(D, k, L, w, R) {
                return e_open(D, k, L, function(O, Vt) {
                    if (O && (O.code === "EMFILE" || O.code === "ENFILE")) {
                        V([
                            P,
                            [
                                D,
                                k,
                                L,
                                w
                            ],
                            O,
                            R || Date.now(),
                            Date.now()
                        ]);
                    } else if (typeof w === "function") {
                        w.apply(this, arguments);
                    }
                });
            }
        }
        return e;
    }
    function V(e) {
        Q("ENQUEUE", e[0].name, e[1]);
        I[M].push(e);
        we();
    }
    var ae;
    function Ke() {
        const e = Date.now();
        for(let r = 0; r < I[M].length; ++r){
            if (I[M][r].length > 2) {
                I[M][r][3] = e;
                I[M][r][4] = e;
            }
        }
        we();
    }
    function we() {
        clearTimeout(ae);
        ae = undefined;
        if (I[M].length === 0) {
            return;
        }
        const e = I[M].shift();
        const r = e[0];
        const n = e[1];
        const i = e[2];
        const u = e[3];
        const c = e[4];
        if (u === undefined) {
            Q("RETRY", r.name, n);
            r(...n);
        } else if (Date.now() - u >= 60000) {
            Q("TIMEOUT", r.name, n);
            const p = n.pop();
            if (typeof p === "function") {
                p.call(null, i);
            }
        } else {
            const y = Date.now() - c;
            const T = Math.max(c - u, 1);
            const b = Math.min(T * 1.2, 100);
            if (y >= b) {
                Q("RETRY", r.name, n);
                r(...n.concat([
                    u
                ]));
            } else {
                I[M].push(e);
            }
        }
        if (ae === undefined) {
            ae = setTimeout(we, 0);
        }
    }
});
const ze = C(function(tr, Be) {
    class q {
        constructor(e, forever){
            if (typeof forever === "boolean") {
                forever = {
                    forever
                };
            }
            this._originalTimeouts = JSON.parse(JSON.stringify(e));
            this._timeouts = e;
            this._options = forever || {};
            this._maxRetryTime = forever && forever.maxRetryTime || Infinity;
            this._fn = null;
            this._errors = [];
            this._attempts = 1;
            this._operationTimeout = null;
            this._operationTimeoutCb = null;
            this._timeout = null;
            this._operationStart = null;
            if (this._options.forever) {
                this._cachedTimeouts = this._timeouts.slice(0);
            }
        }
        reset() {
            this._attempts = 1;
            this._timeouts = this._originalTimeouts;
        }
        stop() {
            if (this._timeout) {
                clearTimeout(this._timeout);
            }
            this._timeouts = [];
            this._cachedTimeouts = null;
        }
        retry(e) {
            if (this._timeout) {
                clearTimeout(this._timeout);
            }
            if (!e) {
                return false;
            }
            const r = new Date().getTime();
            if (e && r - this._operationStart >= this._maxRetryTime) {
                this._errors.unshift(Error("RetryOperation timeout occurred"));
                return false;
            }
            this._errors.push(e);
            let n = this._timeouts.shift();
            if (n === undefined) {
                if (this._cachedTimeouts) {
                    this._errors.splice(this._errors.length - 1, this._errors.length);
                    this._timeouts = this._cachedTimeouts.slice(0);
                    n = this._timeouts.shift();
                } else {
                    return false;
                }
            }
            const i = this;
            const u = setTimeout(()=>{
                i._attempts++;
                if (i._operationTimeoutCb) {
                    i._timeout = setTimeout(()=>{
                        i._operationTimeoutCb(i._attempts);
                    }, i._operationTimeout);
                    if (i._options.unref) {
                        i._timeout.unref();
                    }
                }
                i._fn(i._attempts);
            }, n);
            if (this._options.unref) {
                u.unref();
            }
            return true;
        }
        attempt(e, r) {
            this._fn = e;
            if (r) {
                if (r.timeout) {
                    this._operationTimeout = r.timeout;
                }
                if (r.cb) {
                    this._operationTimeoutCb = r.cb;
                }
            }
            const n = this;
            if (this._operationTimeoutCb) {
                this._timeout = setTimeout(()=>{
                    n._operationTimeoutCb();
                }, n._operationTimeout);
            }
            this._operationStart = new Date().getTime();
            this._fn(this._attempts);
        }
        try(e) {
            console.log("Using RetryOperation.try() is deprecated");
            this.attempt(e);
        }
        start(e) {
            console.log("Using RetryOperation.start() is deprecated");
            this.attempt(e);
        }
        errors() {
            return this._errors;
        }
        attempts() {
            return this._attempts;
        }
        mainError() {
            if (this._errors.length === 0) {
                return null;
            }
            const e = {};
            let r = null;
            let n = 0;
            for(let i = 0; i < this._errors.length; i++){
                const _error = this._errors[i];
                const c = _error.message;
                const p = (e[c] || 0) + 1;
                e[c] = p;
                if (p >= n) {
                    r = _error;
                    n = p;
                }
            }
            return r;
        }
    }
    Be.exports = q;
    q.prototype.start = q.prototype.try;
});
const Ve = C(function(Ee) {
    const Ot = ze();
    Ee.operation = function(e) {
        const r = Ee.timeouts(e);
        return new Ot(r, {
            forever: e && e.forever,
            unref: e && e.unref,
            maxRetryTime: e && e.maxRetryTime
        });
    };
    Ee.timeouts = function(e) {
        if (e instanceof Array) {
            return [].concat(e);
        }
        const r = {
            retries: 10,
            factor: 2,
            minTimeout: 1000,
            maxTimeout: Infinity,
            randomize: false
        };
        for(const n in e){
            r[n] = e[n];
        }
        if (r.minTimeout > r.maxTimeout) {
            throw Error("minTimeout is greater than maxTimeout");
        }
        const i = [];
        for(var u = 0; u < r.retries; u++){
            i.push(this.createTimeout(u, r));
        }
        if (e && e.forever && !i.length) {
            i.push(this.createTimeout(u, r));
        }
        i.sort((c, p)=>c - p);
        return i;
    };
    Ee.createTimeout = function(e, r) {
        const n = r.randomize ? Math.random() + 1 : 1;
        let i = Math.round(n * r.minTimeout * r.factor ** e);
        i = Math.min(i, r.maxTimeout);
        return i;
    };
    Ee.wrap = function(e, r, n) {
        if (r instanceof Array) {
            n = r;
            r = null;
        }
        if (!n) {
            n = [];
            for(const i in e){
                if (typeof e[i] === "function") {
                    n.push(i);
                }
            }
        }
        for (const c of n){
            const p = e[c];
            e[c] = (function(T) {
                const b = Ee.operation(r);
                const o = Array.prototype.slice.call(arguments, 1);
                const m = o.pop();
                o.push(function(f) {
                    if (b.retry(f)) {
                        return;
                    }
                    if (f) {
                        arguments[0] = b.mainError();
                    }
                    m.apply(this, arguments);
                });
                b.attempt(function() {
                    T.apply(e, o);
                });
            }).bind(e, p);
            e[c].options = r;
        }
    };
});
const Xe = C(function(nr, le) {
    le.exports = [
        "SIGABRT",
        "SIGALRM",
        "SIGHUP",
        "SIGINT",
        "SIGTERM"
    ];
    le.exports.push("SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
    le.exports.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED");
});
const Je = C(function(ir, J) {
    const global_process = global.process;
    const B = (e)=>e && typeof e === "object" && typeof e.removeListener === "function" && typeof e.emit === "function" && typeof e.reallyExit === "function" && typeof e.listeners === "function" && typeof e.kill === "function" && typeof e.pid === "number" && typeof e.on === "function";
    if (!B(global_process)) {
        J.exports = function() {
            return function() {};
        };
    } else {
        Te = Le("assert");
        z = Xe();
        xe = /^win/i.test(global_process.platform);
        X = Le("events");
        if (typeof X !== "function") {
            X = X.EventEmitter;
        }
        if (global_process.__signal_exit_emitter__) {
            F = global_process.__signal_exit_emitter__;
        } else {
            F = global_process.__signal_exit_emitter__ = new X;
            F.count = 0;
            F.emitted = {};
        }
        if (!F.infinite) {
            F.setMaxListeners(Infinity);
            F.infinite = true;
        }
        J.exports = function(e, r) {
            if (!B(global.process)) {
                return function() {};
            }
            Te.equal(typeof e, "function", "a callback must be provided for exit handler");
            if (H === false) {
                se();
            }
            let n = "exit";
            if (r && r.alwaysLast) {
                n = "afterexit";
            }
            const i = function() {
                F.removeListener(n, e);
                if (F.listeners("exit").length === 0 && F.listeners("afterexit").length === 0) {
                    ee();
                }
            };
            F.on(n, e);
            return i;
        };
        ee = function() {
            if (!H || !B(global.process)) {
                return;
            }
            H = false;
            z.forEach((r)=>{
                try {
                    global_process.removeListener(r, te[r]);
                } catch (n) {}
            });
            global_process.emit = re;
            global_process.reallyExit = he;
            F.count -= 1;
        };
        J.exports.unload = ee;
        Y = function(r, n, i) {
            if (F.emitted[r]) {
                return;
            }
            F.emitted[r] = true;
            F.emit(r, n, i);
        };
        te = {};
        z.forEach((e)=>{
            te[e] = function() {
                if (!B(global.process)) {
                    return;
                }
                const n = global_process.listeners(e);
                if (n.length === F.count) {
                    ee();
                    Y("exit", null, e);
                    Y("afterexit", null, e);
                    if (xe && e === "SIGHUP") {
                        e = "SIGINT";
                    }
                    global_process.kill(global_process.pid, e);
                }
            };
        });
        J.exports.signals = function() {
            return z;
        };
        H = false;
        se = function() {
            if (H || !B(global.process)) {
                return;
            }
            H = true;
            F.count += 1;
            z = z.filter((r)=>{
                try {
                    global_process.on(r, te[r]);
                    return true;
                } catch (n) {
                    return false;
                }
            });
            global_process.emit = Ie;
            global_process.reallyExit = ke;
        };
        J.exports.load = se;
        he = global_process.reallyExit;
        ke = function(r) {
            if (!B(global.process)) {
                return;
            }
            global_process.exitCode = r || 0;
            Y("exit", global_process.exitCode, null);
            Y("afterexit", global_process.exitCode, null);
            he.call(global_process, global_process.exitCode);
        };
        re = global_process.emit;
        Ie = function(r, n) {
            if (r === "exit" && B(global.process)) {
                if (n !== undefined) {
                    global_process.exitCode = n;
                }
                const i = re.apply(this, arguments);
                Y("exit", global_process.exitCode, null);
                Y("afterexit", global_process.exitCode, null);
                return i;
            } else {
                return re.apply(this, arguments);
            }
        };
    }
    var Te;
    var z;
    var xe;
    var X;
    var F;
    var ee;
    var Y;
    var te;
    var H;
    var se;
    var he;
    var ke;
    var re;
    var Ie;
});
const Ze = C(function(Lt, Fe) {
    const be = Symbol();
    function kt(e, r, n) {
        let i = r[be];
        if (i) {
            return r.stat(e, (c, p)=>{
                if (c) {
                    return n(c);
                }
                n(null, p.mtime, i);
            });
        }
        let u = new Date(Math.ceil(Date.now() / 1000) * 1000 + 5);
        r.utimes(e, u, u, (c)=>{
            if (c) {
                return n(c);
            }
            r.stat(e, (p, y)=>{
                if (p) {
                    return n(p);
                }
                let T = y.mtime.getTime() % 1000 === 0 ? "s" : "ms";
                if (!(be in r)) {
                    try {
                        Object.defineProperty(r, be, {
                            value: T,
                            configurable: true
                        });
                    } catch  {}
                }
                n(null, y.mtime, T);
            });
        });
    }
    function It(e) {
        let r = Date.now();
        if (e === "s") {
            r = Math.ceil(r / 1000) * 1000;
        }
        return new Date(r);
    }
    Lt.probe = kt;
    Lt.getMtime = It;
});
const ot = C(function(Mt, ie) {
    const et = Le("path");
    const fs = Oe();
    const tt = Ve();
    const Dt = Je();
    const me = Ze();
    const A = {};
    function ne(e, r) {
        return r.lockfilePath || `${e}.lock`;
    }
    function Re(e, r, n) {
        if (!r.realpath) {
            return n(null, et.resolve(e));
        }
        r.fs.realpath(e, n);
    }
    function Ne(file, r, n) {
        let i = ne(file, r);
        r.fs.mkdir(i, (u)=>{
            if (!u) {
                return me.probe(i, r.fs, (c, p, y)=>{
                    if (c) {
                        r.fs.rmdir(i, ()=>{});
                        return n(c);
                    }
                    n(null, p, y);
                });
            }
            if (u.code !== "EEXIST") {
                return n(u);
            }
            if (r.stale <= 0) {
                return n(Object.assign(Error("Lock file is already being held"), {
                    code: "ELOCKED",
                    file
                }));
            }
            r.fs.stat(i, (c, p)=>{
                if (c) {
                    if (c.code === "ENOENT") {
                        return Ne(file, {
                            ...r,
                            stale: 0
                        }, n);
                    }
                    return n(c);
                }
                if (!rt(p, r)) {
                    return n(Object.assign(Error("Lock file is already being held"), {
                        code: "ELOCKED",
                        file
                    }));
                }
                nt(file, r, (y)=>{
                    if (y) {
                        return n(y);
                    }
                    Ne(file, {
                        ...r,
                        stale: 0
                    }, n);
                });
            });
        });
    }
    function rt(e, r) {
        return e.mtime.getTime() < Date.now() - r.stale;
    }
    function nt(e, r, n) {
        r.fs.rmdir(ne(e, r), (i)=>{
            if (i && i.code !== "ENOENT") {
                return n(i);
            }
            n();
        });
    }
    function pe(e, r) {
        let n = A[e];
        if (n.updateTimeout) {
            return;
        }
        n.updateDelay = n.updateDelay || r.update;
        n.updateTimeout = setTimeout(()=>{
            n.updateTimeout = null;
            r.fs.stat(n.lockfilePath, (i, u)=>{
                let c = n.lastUpdate + r.stale < Date.now();
                if (i) {
                    if (i.code === "ENOENT" || c) {
                        return De(e, n, Object.assign(i, {
                            code: "ECOMPROMISED"
                        }));
                    }
                    n.updateDelay = 1000;
                    return pe(e, r);
                }
                if (n.mtime.getTime() !== u.mtime.getTime()) {
                    return De(e, n, Object.assign(Error("Unable to update lock within the stale threshold"), {
                        code: "ECOMPROMISED"
                    }));
                }
                let y = me.getMtime(n.mtimePrecision);
                r.fs.utimes(n.lockfilePath, y, y, (T)=>{
                    let b = n.lastUpdate + r.stale < Date.now();
                    if (n.released) {
                        return;
                    }
                    if (T) {
                        if (T.code === "ENOENT" || b) {
                            return De(e, n, Object.assign(T, {
                                code: "ECOMPROMISED"
                            }));
                        }
                        n.updateDelay = 1000;
                        return pe(e, r);
                    }
                    n.mtime = y;
                    n.lastUpdate = Date.now();
                    n.updateDelay = null;
                    pe(e, r);
                });
            });
        }, n.updateDelay);
        if (n.updateTimeout.unref) {
            n.updateTimeout.unref();
        }
    }
    function De(e, r, n) {
        r.released = true;
        if (r.updateTimeout) {
            clearTimeout(r.updateTimeout);
        }
        if (A[e] === r) {
            delete A[e];
        }
        r.options.onCompromised(n);
    }
    function Nt(e, options, n) {
        options = {
            stale: 10000,
            update: null,
            realpath: true,
            retries: 0,
            fs,
            onCompromised: (i)=>{
                throw i;
            },
            ...options
        };
        options.retries = options.retries || 0;
        options.retries = typeof options.retries === "number" ? {
            retries: options.retries
        } : options.retries;
        options.stale = Math.max(options.stale || 0, 2000);
        options.update = options.update == null ? options.stale / 2 : options.update || 0;
        options.update = Math.max(Math.min(options.update, options.stale / 2), 1000);
        Re(e, options, (i, u)=>{
            if (i) {
                return n(i);
            }
            let c = tt.operation(options.retries);
            c.attempt(()=>{
                Ne(u, options, (p, mtime, mtimePrecision)=>{
                    if (c.retry(p)) {
                        return;
                    }
                    if (p) {
                        return n(c.mainError());
                    }
                    let b = A[u] = {
                        lockfilePath: ne(u, options),
                        mtime,
                        mtimePrecision,
                        options,
                        lastUpdate: Date.now()
                    };
                    pe(u, options);
                    n(null, (o)=>{
                        if (b.released) {
                            return o && o(Object.assign(Error("Lock is already released"), {
                                code: "ERELEASED"
                            }));
                        }
                        it(u, {
                            ...options,
                            realpath: false
                        }, o);
                    });
                });
            });
        });
    }
    function it(e, r, n) {
        r = {
            fs,
            realpath: true,
            ...r
        };
        Re(e, r, (i, u)=>{
            if (i) {
                return n(i);
            }
            let c = A[u];
            if (!c) {
                return n(Object.assign(Error("Lock is not acquired/owned by you"), {
                    code: "ENOTACQUIRED"
                }));
            }
            if (c.updateTimeout) {
                clearTimeout(c.updateTimeout);
            }
            c.released = true;
            delete A[u];
            nt(u, r, n);
        });
    }
    function Pt(e, r, n) {
        r = {
            stale: 10000,
            realpath: true,
            fs,
            ...r
        };
        r.stale = Math.max(r.stale || 0, 2000);
        Re(e, r, (i, u)=>{
            if (i) {
                return n(i);
            }
            r.fs.stat(ne(u, r), (c, p)=>{
                if (c) {
                    if (c.code === "ENOENT") {
                        return n(null, false);
                    }
                    return n(c);
                }
                return n(null, !rt(p, r));
            });
        });
    }
    function Rt() {
        return A;
    }
    Dt(()=>{
        for(let e in A){
            let r = A[e].options;
            try {
                r.fs.rmdirSync(ne(e, r));
            } catch (n) {}
        }
    });
    Mt.lock = Nt;
    Mt.unlock = it;
    Mt.check = Pt;
    Mt.getLocks = Rt;
});
const ct = C(function(or, ut) {
    const Ut = Oe();
    function At(e) {
        let r = [
            "mkdir",
            "realpath",
            "stat",
            "rmdir",
            "utimes"
        ];
        let n = {
            ...e
        };
        r.forEach((i)=>{
            n[i] = (...u)=>{
                let c = u.pop();
                let p;
                try {
                    p = e[`${i}Sync`](...u);
                } catch (error) {
                    return c(error);
                }
                c(null, p);
            };
        });
        return n;
    }
    function toPromise(e) {
        return (...r)=>new Promise((resolve, reject)=>{
                r.push((u, c)=>{
                    if (u) {
                        reject(u);
                    } else {
                        resolve(c);
                    }
                });
                e(...r);
            });
    }
    function toSync(e) {
        return (...r)=>{
            let n;
            let i;
            r.push((u, c)=>{
                n = u;
                i = c;
            });
            e(...r);
            if (n) {
                throw n;
            }
            return i;
        };
    }
    function toSyncOptions(e) {
        e = {
            ...e
        };
        e.fs = At(e.fs || Ut);
        if (typeof e.retries === "number" && e.retries > 0 || e.retries && typeof e.retries.retries === "number" && e.retries.retries > 0) {
            throw Object.assign(Error("Cannot use retries with the sync api"), {
                code: "ESYNC"
            });
        }
        return e;
    }
    ut.exports = {
        toPromise,
        toSync,
        toSyncOptions
    };
});
const ft = C(function(ur, K) {
    const U = ot();
    const { toPromise, toSync, toSyncOptions } = ct();
    async function at(e, r) {
        let n = await toPromise(U.lock)(e, r);
        return toPromise(n);
    }
    function Kt(e, r) {
        let n = toSync(U.lock)(e, toSyncOptions(r));
        return toSync(n);
    }
    function Qt(e, r) {
        return toPromise(U.unlock)(e, r);
    }
    function Bt(e, r) {
        return toSync(U.unlock)(e, toSyncOptions(r));
    }
    function zt(e, r) {
        return toPromise(U.check)(e, r);
    }
    function Ht(e, r) {
        return toSync(U.check)(e, toSyncOptions(r));
    }
    K.exports = at;
    K.exports.lock = at;
    K.exports.unlock = Qt;
    K.exports.lockSync = Kt;
    K.exports.unlockSync = Bt;
    K.exports.check = zt;
    K.exports.checkSync = Ht;
});
function lt() {
    return ft();
}
async function ja(e, r) {
    let n = await lt().lock(e, r);
    return Object.assign(n, {
        [Symbol.asyncDispose]: n
    });
}
function lPs(e, r) {
    return lt().check(e, r);
}
async function Um(e, r) {
    if (!e) {
        return;
    }
    try {
        await e();
    } catch (error) {
        let i;
        try {
            let u = v(error);
            i = u === "ERELEASED" || u === "ENOTACQUIRED" ? `lock was no longer held at release (${u}); the locked section may have run without exclusivity` : `lock directory could not be removed and is left to go stale: ${l(error)}`;
        } catch  {
            i = "lock release rejected with a value that cannot be described";
        }
        t(`${r}: ${i}`, {
            level: "warn"
        });
    }
}
export { ja, lPs, Um };
