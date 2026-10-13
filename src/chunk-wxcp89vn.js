import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const d = C(function(D, W) {
    const A = Le("buffer");
    const A_Buffer = A.Buffer;
    function U(e, r) {
        for(const t in e){
            r[t] = e[t];
        }
    }
    if (A_Buffer.from && A_Buffer.alloc && A_Buffer.allocUnsafe && A_Buffer.allocUnsafeSlow) {
        W.exports = A;
    } else {
        U(A, D);
        D.Buffer = y;
    }
    function y(e, r, t) {
        return A_Buffer(e, r, t);
    }
    y.prototype = Object.create(A_Buffer.prototype);
    U(A_Buffer, y);
    y.from = function(e, r, t) {
        if (typeof e === "number") {
            throw TypeError("Argument must not be a number");
        }
        return A_Buffer(e, r, t);
    };
    y.alloc = function(e, r, t) {
        if (typeof e !== "number") {
            throw TypeError("Argument must be a number");
        }
        const n = A_Buffer(e);
        if (r !== undefined) {
            if (typeof t === "string") {
                n.fill(r, t);
            } else {
                n.fill(r);
            }
        } else {
            n.fill(0);
        }
        return n;
    };
    y.allocUnsafe = function(e) {
        if (typeof e !== "number") {
            throw TypeError("Argument must be a number");
        }
        return A_Buffer(e);
    };
    y.allocUnsafeSlow = function(e) {
        if (typeof e !== "number") {
            throw TypeError("Argument must be a number");
        }
        return A.SlowBuffer(e);
    };
});
const Q = C(function(_r, Z) {
    function V(e) {
        const r = (e / 8 | 0) + (e % 8 === 0 ? 0 : 1);
        return r;
    }
    const De = {
        ES256: V(256),
        ES384: V(384),
        ES512: V(521)
    };
    function Ve(e) {
        const r = De[e];
        if (r) {
            return r;
        }
        throw Error(`Unknown algorithm "${e}"`);
    }
    Z.exports = Ve;
});
const kmo = C(function(Tr, re) {
    const Buffer = d().Buffer;
    const Y = Q();
    const _ = 128;
    const z = 0;
    const Ke = 32;
    const Ne = 16;
    const He = 2;
    const k = Ne | Ke | z << 6;
    const T = He | z << 6;
    function Ge(e) {
        return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function ee(e) {
        if (Buffer.isBuffer(e)) {
            return e;
        } else if (typeof e === "string") {
            return Buffer.from(e, "base64");
        }
        throw TypeError("ECDSA signature must be a Base64 string or a Buffer");
    }
    function derToJose(e, r) {
        e = ee(e);
        const t = Y(r);
        const n = t + 1;
        const e_length = e.length;
        let i = 0;
        if (e[i++] !== k) {
            throw Error('Could not find expected "seq"');
        }
        let u = e[i++];
        if (u === (_ | 1)) {
            u = e[i++];
        }
        if (e_length - i < u) {
            throw Error(`"seq" specified length of "${u}", only "${e_length - i}" remaining`);
        }
        if (e[i++] !== T) {
            throw Error('Could not find expected "int" for "r"');
        }
        const s = e[i++];
        if (e_length - i - 2 < s) {
            throw Error(`"r" specified length of "${s}", only "${e_length - i - 2}" available`);
        }
        if (n < s) {
            throw Error(`"r" specified length of "${s}", max of "${n}" is acceptable`);
        }
        const S = i;
        i += s;
        if (e[i++] !== T) {
            throw Error('Could not find expected "int" for "s"');
        }
        const l = e[i++];
        if (e_length - i !== l) {
            throw Error(`"s" specified length of "${l}", expected "${e_length - i}"`);
        }
        if (n < l) {
            throw Error(`"s" specified length of "${l}", max of "${n}" is acceptable`);
        }
        const o = i;
        i += l;
        if (i !== e_length) {
            throw Error(`Expected to consume entire buffer, but "${e_length - i}" bytes remain`);
        }
        const f = t - s;
        const O = t - l;
        let v = Buffer.allocUnsafe(f + s + O + l);
        for(i = 0; i < f; ++i){
            v[i] = 0;
        }
        e.copy(v, i, S + Math.max(-f, 0), S + s);
        i = t;
        for(const Oe = i; i < Oe + O; ++i){
            v[i] = 0;
        }
        e.copy(v, i, o + Math.max(-O, 0), o + l);
        v = v.toString("base64");
        v = Ge(v);
        return v;
    }
    function X(e, r, t) {
        let n = 0;
        while(r + n < t && e[r + n] === 0){
            ++n;
        }
        const a = e[r + n] >= _;
        if (a) {
            --n;
        }
        return n;
    }
    function joseToDer(e, r) {
        e = ee(e);
        const t = Y(r);
        const e_length = e.length;
        if (e_length !== t * 2) {
            throw TypeError(`"${r}" signatures must be "${t * 2}" bytes, saw "${e_length}"`);
        }
        const a = X(e, 0, t);
        const i = X(e, t, e.length);
        const u = t - a;
        const s = t - i;
        const S = 2 + u + 1 + 1 + s;
        const l = S < _;
        const o = Buffer.allocUnsafe((l ? 2 : 3) + S);
        let f = 0;
        o[f++] = k;
        if (l) {
            o[f++] = S;
        } else {
            o[f++] = _ | 1;
            o[f++] = S & 255;
        }
        o[f++] = T;
        o[f++] = u;
        if (a < 0) {
            o[f++] = 0;
            f += e.copy(o, f, 0, t);
        } else {
            f += e.copy(o, f, a, t);
        }
        o[f++] = T;
        o[f++] = s;
        if (i < 0) {
            o[f++] = 0;
            e.copy(o, f, t);
        } else {
            e.copy(o, f, t + i);
        }
        return o;
    }
    re.exports = {
        derToJose,
        joseToDer
    };
});
const K = C(function(Ir, te) {
    const Buffer = d().Buffer;
    const je = Le("stream");
    const Ce = Le("util");
    function x(e) {
        this.buffer = null;
        this.writable = true;
        this.readable = true;
        if (!e) {
            this.buffer = Buffer.alloc(0);
            return this;
        }
        if (typeof e.pipe === "function") {
            this.buffer = Buffer.alloc(0);
            e.pipe(this);
            return this;
        }
        if (e.length || typeof e === "object") {
            this.buffer = e;
            this.writable = false;
            process.nextTick((function() {
                this.emit("end", e);
                this.readable = false;
                this.emit("close");
            }).bind(this));
            return this;
        }
        throw TypeError(`Unexpected data type (${typeof e})`);
    }
    Ce.inherits(x, je);
    x.prototype.write = function(r) {
        this.buffer = Buffer.concat([
            this.buffer,
            Buffer.from(r)
        ]);
        this.emit("data", r);
    };
    x.prototype.end = function(r) {
        if (r) {
            this.write(r);
        }
        this.emit("end", r);
        this.emit("close");
        this.writable = false;
        this.readable = false;
    };
    te.exports = x;
});
const ie = C(function(xr, ne) {
    const Buffer = Le("buffer").Buffer;
    const SlowBuffer = Le("buffer").SlowBuffer;
    ne.exports = P;
    function P(e, r) {
        if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
            return false;
        }
        if (e.length !== r.length) {
            return false;
        }
        let t = 0;
        for(let n = 0; n < e.length; n++){
            t |= e[n] ^ r[n];
        }
        return t === 0;
    }
    P.install = function() {
        Buffer.prototype.equal = SlowBuffer.prototype.equal = function(r) {
            return P(this, r);
        };
    };
    const equal = Buffer.prototype.equal;
    const equal_1 = SlowBuffer.prototype.equal;
    P.restore = function() {
        Buffer.prototype.equal = equal;
        SlowBuffer.prototype.equal = equal_1;
    };
});
const M = C(function(Pr, pe) {
    const Buffer = d().Buffer;
    const c = Le("crypto");
    const fe = kmo();
    const ae = Le("util");
    const We = `"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`;
    let E = "secret must be a string or buffer";
    let m = "key must be a string or a buffer";
    const Ze = "key must be a string, a buffer or an object";
    const G = typeof c.createPublicKey === "function";
    if (G) {
        m += " or a KeyObject";
        E += "or a KeyObject";
    }
    function oe(e) {
        if (Buffer.isBuffer(e)) {
            return;
        }
        if (typeof e === "string") {
            return;
        }
        if (!G) {
            throw h(m);
        }
        if (typeof e !== "object") {
            throw h(m);
        }
        if (typeof e.type !== "string") {
            throw h(m);
        }
        if (typeof e.asymmetricKeyType !== "string") {
            throw h(m);
        }
        if (typeof e.export !== "function") {
            throw h(m);
        }
    }
    function ue(e) {
        if (Buffer.isBuffer(e)) {
            return;
        }
        if (typeof e === "string") {
            return;
        }
        if (typeof e === "object") {
            return;
        }
        throw h(Ze);
    }
    function $e(e) {
        if (Buffer.isBuffer(e)) {
            return;
        }
        if (typeof e === "string") {
            return e;
        }
        if (!G) {
            throw h(E);
        }
        if (typeof e !== "object") {
            throw h(E);
        }
        if (e.type !== "secret") {
            throw h(E);
        }
        if (typeof e.export !== "function") {
            throw h(E);
        }
    }
    function J(e) {
        return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function se(e) {
        e = e.toString();
        const r = 4 - e.length % 4;
        if (r !== 4) {
            for(let t = 0; t < r; ++t){
                e += "=";
            }
        }
        return e.replace(/\-/g, "+").replace(/_/g, "/");
    }
    function h(e) {
        const r = Array.prototype.slice.call(arguments, 1);
        const t = ae.format.bind(ae, e)(...r);
        return TypeError(t);
    }
    function Qe(e) {
        return Buffer.isBuffer(e) || typeof e === "string";
    }
    function q(e) {
        if (!Qe(e)) {
            e = JSON.stringify(e);
        }
        return e;
    }
    function hs_1(e) {
        return function(t, n) {
            $e(n);
            t = q(t);
            const a = c.createHmac(`sha${e}`, n);
            a.update(t);
            const i = a.digest("base64");
            return J(i);
        };
    }
    let H;
    const Xe = "timingSafeEqual" in c ? (r, t)=>{
        if (r.byteLength !== t.byteLength) {
            return false;
        }
        return c.timingSafeEqual(r, t);
    } : (r, t)=>{
        if (!H) {
            H = ie();
        }
        return H(r, t);
    };
    function hs(e) {
        return function(t, n, a) {
            const i = hs_1(e)(t, a);
            return Xe(Buffer.from(n), Buffer.from(i));
        };
    }
    function le(e) {
        return function(t, n) {
            ue(n);
            t = q(t);
            const a = c.createSign(`RSA-SHA${e}`);
            a.update(t);
            const i = a.sign(n, "base64");
            return J(i);
        };
    }
    function he(e) {
        return function(t, n, a) {
            oe(a);
            t = q(t);
            n = se(n);
            const i = c.createVerify(`RSA-SHA${e}`);
            i.update(t);
            return i.verify(a, n, "base64");
        };
    }
    function ze(e) {
        return function(t, n) {
            ue(n);
            t = q(t);
            const a = c.createSign(`RSA-SHA${e}`);
            a.update(t);
            const i = a.sign({
                key: n,
                padding: c.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: c.constants.RSA_PSS_SALTLEN_DIGEST
            }, "base64");
            return J(i);
        };
    }
    function ke(e) {
        return function(t, n, a) {
            oe(a);
            t = q(t);
            n = se(n);
            const i = c.createVerify(`RSA-SHA${e}`);
            i.update(t);
            return i.verify({
                key: a,
                padding: c.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: c.constants.RSA_PSS_SALTLEN_DIGEST
            }, n, "base64");
        };
    }
    function er(e) {
        const r = le(e);
        return function() {
            let n = r(...arguments);
            n = fe.derToJose(n, `ES${e}`);
            return n;
        };
    }
    function rr(e) {
        const r = he(e);
        return function(n, a, i) {
            a = fe.joseToDer(a, `ES${e}`).toString("base64");
            const u = r(n, a, i);
            return u;
        };
    }
    function tr() {
        return function() {
            return "";
        };
    }
    function nr() {
        return function(r, t) {
            return t === "";
        };
    }
    pe.exports = function(r) {
        const t = {
            hs: hs_1,
            rs: le,
            ps: ze,
            es: er,
            none: tr
        };
        const n = {
            hs,
            rs: he,
            ps: ke,
            es: rr,
            none: nr
        };
        const a = r.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
        if (!a) {
            throw h(We, r);
        }
        const i = (a[1] || a[3]).toLowerCase();
        const u = a[2];
        return {
            sign: t[i](u),
            verify: n[i](u)
        };
    };
});
const j = C(function(Lr, ve) {
    const Buffer = Le("buffer").Buffer;
    ve.exports = function(r) {
        if (typeof r === "string") {
            return r;
        }
        if (typeof r === "number" || Buffer.isBuffer(r)) {
            return r.toString();
        }
        return JSON.stringify(r);
    };
});
const be = C(function(Rr, ge) {
    const Buffer = d().Buffer;
    const Se = K();
    const fr = M();
    const or = Le("stream");
    const ye = j();
    const F = Le("util");
    function de(e, r) {
        return Buffer.from(e, r).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function ur(header, payload, t) {
        t = t || "utf8";
        const n = de(ye(header), "binary");
        const a = de(ye(payload), t);
        return F.format("%s.%s", n, a);
    }
    function me(e) {
        const { header, payload } = e;
        const n = e.secret || e.privateKey;
        const e_encoding = e.encoding;
        const i = fr(header.alg);
        const u = ur(header, payload, e_encoding);
        const s = i.sign(u, n);
        return F.format("%s.%s", u, s);
    }
    function L(e) {
        let e_secret = e.secret;
        e_secret = e_secret ?? e.privateKey;
        e_secret = e_secret ?? e.key;
        if (/^hs/i.test(e.header.alg) === true && e_secret == null) {
            throw TypeError("secret must be a string or buffer or a KeyObject");
        }
        const t = new Se(e_secret);
        this.readable = true;
        this.header = e.header;
        this.encoding = e.encoding;
        this.secret = this.privateKey = this.key = t;
        this.payload = new Se(e.payload);
        this.secret.once("close", (function() {
            if (!this.payload.writable && this.readable) {
                this.sign();
            }
        }).bind(this));
        this.payload.once("close", (function() {
            if (!this.secret.writable && this.readable) {
                this.sign();
            }
        }).bind(this));
    }
    F.inherits(L, or);
    L.prototype.sign = function() {
        try {
            const r = me({
                header: this.header,
                payload: this.payload.buffer,
                secret: this.secret.buffer,
                encoding: this.encoding
            });
            this.emit("done", r);
            this.emit("data", r);
            this.emit("end");
            this.readable = false;
            return r;
        } catch (error) {
            this.readable = false;
            this.emit("error", error);
            this.emit("close");
        }
    };
    L.sign = me;
    ge.exports = L;
});
const Pe = C(function(Or, xe) {
    const Buffer = d().Buffer;
    const we = K();
    const sr = M();
    const cr = Le("stream");
    const qe = j();
    const lr = Le("util");
    const hr = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
    function pr(e) {
        return Object.prototype.toString.call(e) === "[object Object]";
    }
    function vr(e) {
        if (pr(e)) {
            return e;
        }
        try {
            return JSON.parse(e);
        } catch (r) {
            return;
        }
    }
    function Ae(e) {
        const r = e.split(".", 1)[0];
        return vr(Buffer.from(r, "base64").toString("binary"));
    }
    function Sr(e) {
        return e.split(".", 2).join(".");
    }
    function Be(e) {
        return e.split(".")[2];
    }
    function yr(e, r) {
        r = r || "utf8";
        const t = e.split(".")[1];
        return Buffer.from(t, "base64").toString(r);
    }
    function _e(e) {
        return hr.test(e) && !!Ae(e);
    }
    function Te(e, r, t) {
        if (!r) {
            const n = Error("Missing algorithm parameter for jws.verify");
            n.code = "MISSING_ALGORITHM";
            throw n;
        }
        e = qe(e);
        const a = Be(e);
        const i = Sr(e);
        const u = sr(r);
        return u.verify(i, a, t);
    }
    function Ie(e, r) {
        r = r || {};
        e = qe(e);
        if (!_e(e)) {
            return null;
        }
        const header = Ae(e);
        if (!header) {
            return null;
        }
        let payload = yr(e);
        if (header.typ === "JWT" || r.json) {
            payload = JSON.parse(payload, r.encoding);
        }
        return {
            header,
            payload,
            signature: Be(e)
        };
    }
    function b(e) {
        e = e || {};
        let e_secret = e.secret;
        e_secret = e_secret ?? e.publicKey;
        e_secret = e_secret ?? e.key;
        if (/^hs/i.test(e.algorithm) === true && e_secret == null) {
            throw TypeError("secret must be a string or buffer or a KeyObject");
        }
        const t = new we(e_secret);
        this.readable = true;
        this.algorithm = e.algorithm;
        this.encoding = e.encoding;
        this.secret = this.publicKey = this.key = t;
        this.signature = new we(e.signature);
        this.secret.once("close", (function() {
            if (!this.signature.writable && this.readable) {
                this.verify();
            }
        }).bind(this));
        this.signature.once("close", (function() {
            if (!this.secret.writable && this.readable) {
                this.verify();
            }
        }).bind(this));
    }
    lr.inherits(b, cr);
    b.prototype.verify = function() {
        try {
            const r = Te(this.signature.buffer, this.algorithm, this.key.buffer);
            const t = Ie(this.signature.buffer, this.encoding);
            this.emit("done", r, t);
            this.emit("data", r);
            this.emit("end");
            this.readable = false;
            return r;
        } catch (error) {
            this.readable = false;
            this.emit("error", error);
            this.emit("close");
        }
    };
    b.decode = Ie;
    b.isValid = _e;
    b.verify = Te;
    xe.exports = b;
});
const RPt = C(function(mr) {
    const Re = be();
    const R = Pe();
    const dr = [
        "HS256",
        "HS384",
        "HS512",
        "RS256",
        "RS384",
        "RS512",
        "PS256",
        "PS384",
        "PS512",
        "ES256",
        "ES384",
        "ES512"
    ];
    mr.ALGORITHMS = dr;
    mr.sign = Re.sign;
    mr.verify = R.verify;
    mr.decode = R.decode;
    mr.isValid = R.isValid;
    mr.createSign = function(r) {
        return new Re(r);
    };
    mr.createVerify = function(r) {
        return new R(r);
    };
});
export { kmo, RPt };
