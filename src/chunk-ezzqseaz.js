import { Ji } from "/$bunfs/root/chunk-cj4xndke.js";
let p;
const g = (e)=>e instanceof CryptoKey;
const W = Ji(()=>{
    p = crypto;
});
const mr = async (e, t)=>{
    let r = `SHA-${e.slice(-3)}`;
    return new Uint8Array(await p.subtle.digest(r, t));
};
let ue;
const Ie = Ji(()=>{
    W();
    ue = mr;
});
function _(...e) {
    let t = e.reduce((acc, { length })=>acc + length, 0);
    let r = new Uint8Array(t);
    let o = 0;
    e.forEach((n)=>{
        r.set(n, o);
        o += n.length;
    });
    return r;
}
function ft(e, t) {
    return _(l.encode(e), new Uint8Array([
        0
    ]), t);
}
function Re(e, t, r) {
    if (t < 0 || t >= le) {
        throw RangeError(`value must be >= 0 and <= ${le - 1}. Received ${t}`);
    }
    e.set([
        t >>> 24,
        t >>> 16,
        t >>> 8,
        t & 255
    ], r);
}
function he(e) {
    let t = Math.floor(e / le);
    let r = e % le;
    let o = new Uint8Array(8);
    Re(o, t, 0);
    Re(o, r, 4);
    return o;
}
function ye(e) {
    let t = new Uint8Array(4);
    Re(t, e);
    return t;
}
function we(e) {
    return _(ye(e.length), e);
}
async function mt(e, t, r) {
    let o = Math.ceil((t >> 3) / 32);
    let n = new Uint8Array(o * 32);
    for(let a = 0; a < o; a++){
        let i = new Uint8Array(4 + e.length + r.length);
        i.set(ye(a + 1));
        i.set(e, 4);
        i.set(r, 4 + e.length);
        n.set(await ue("sha256", i), a * 32);
    }
    return n.slice(0, t >> 3);
}
var l;
let C;
var le = 4294967296;
const v = Ji(()=>{
    Ie();
    l = new TextEncoder;
    C = new TextDecoder;
});
const ur = (e)=>{
    let t = e;
    if (typeof t === "string") {
        t = l.encode(t);
    }
    let r = 32768;
    let o = [];
    for(let n = 0; n < t.length; n += r){
        o.push(String.fromCharCode.apply(null, t.subarray(n, n + r)));
    }
    return btoa(o.join(""));
};
const w = (e)=>ur(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
const lr = (e)=>{
    let t = atob(e);
    let r = new Uint8Array(t.length);
    for(let o = 0; o < t.length; o++){
        r[o] = t.charCodeAt(o);
    }
    return r;
};
const S = (e)=>{
    let t = e;
    if (t instanceof Uint8Array) {
        t = C.decode(t);
    }
    t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
    try {
        return lr(t);
    } catch (r) {
        throw TypeError("The input to be decoded is not correctly encoded.");
    }
};
const P = Ji(()=>{
    v();
});
let N;
let Q;
let f;
let re;
let s;
let y;
let Te;
let Ue;
let De;
const E = Ji(()=>{
    N = class N extends Error {
        static get code() {
            return "ERR_JOSE_GENERIC";
        }
        constructor(e){
            super(e);
            this.code = "ERR_JOSE_GENERIC";
            this.name = this.constructor.name;
            Error.captureStackTrace?.(this, this.constructor);
        }
    };
    Q = class Q extends N {
        constructor(){
            super(...arguments);
            this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
        }
        static get code() {
            return "ERR_JOSE_ALG_NOT_ALLOWED";
        }
    };
    f = class f extends N {
        constructor(){
            super(...arguments);
            this.code = "ERR_JOSE_NOT_SUPPORTED";
        }
        static get code() {
            return "ERR_JOSE_NOT_SUPPORTED";
        }
    };
    re = class re extends N {
        constructor(){
            super(...arguments);
            this.code = "ERR_JWE_DECRYPTION_FAILED";
            this.message = "decryption operation failed";
        }
        static get code() {
            return "ERR_JWE_DECRYPTION_FAILED";
        }
    };
    s = class s extends N {
        constructor(){
            super(...arguments);
            this.code = "ERR_JWE_INVALID";
        }
        static get code() {
            return "ERR_JWE_INVALID";
        }
    };
    y = class y extends N {
        constructor(){
            super(...arguments);
            this.code = "ERR_JWS_INVALID";
        }
        static get code() {
            return "ERR_JWS_INVALID";
        }
    };
    Te = class Te extends N {
        constructor(){
            super(...arguments);
            this.code = "ERR_JWT_INVALID";
        }
        static get code() {
            return "ERR_JWT_INVALID";
        }
    };
    Ue = class Ue extends N {
        constructor(){
            super(...arguments);
            this.code = "ERR_JWK_INVALID";
        }
        static get code() {
            return "ERR_JWK_INVALID";
        }
    };
    De = class De extends N {
        constructor(){
            super(...arguments);
            this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
            this.message = "signature verification failed";
        }
        static get code() {
            return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
        }
    };
});
let k;
const Ee = Ji(()=>{
    W();
    k = p.getRandomValues.bind(p);
});
function Oe(e) {
    switch(e){
        case "A128GCM":
        case "A128GCMKW":
        case "A192GCM":
        case "A192GCMKW":
        case "A256GCM":
        case "A256GCMKW":
            return 96;
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
            return 128;
        default:
            throw new f(`Unsupported JWE Algorithm: ${e}`);
    }
}
const Se = (e)=>k(new Uint8Array(Oe(e) >> 3));
const Ae = Ji(()=>{
    E();
    Ee();
});
const yr = (e, t)=>{
    if (t.length << 3 !== Oe(e)) {
        throw new s("Invalid Initialization Vector length");
    }
};
let ge;
const Me = Ji(()=>{
    E();
    Ae();
    ge = yr;
});
const wr = (e, t)=>{
    let r = e.byteLength << 3;
    if (r !== t) {
        throw new s(`Invalid Content Encryption Key length. Expected ${t} bits, got ${r} bits`);
    }
};
let j;
const Ne = Ji(()=>{
    E();
    j = wr;
});
const Er = (e, t)=>{
    if (!(e instanceof Uint8Array)) {
        throw TypeError("First argument must be a buffer");
    }
    if (!(t instanceof Uint8Array)) {
        throw TypeError("Second argument must be a buffer");
    }
    if (e.length !== t.length) {
        throw TypeError("Input buffers must have the same length");
    }
    let e_length = e.length;
    let o = 0;
    let n = -1;
    while(++n < e_length){
        o |= e[n] ^ t[n];
    }
    return o === 0;
};
let ut;
const lt = Ji(()=>{
    ut = Er;
});
function x(e, t = "algorithm.name") {
    return TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`);
}
function B(algorithm, t) {
    return algorithm.name === t;
}
function be(hash) {
    return parseInt(hash.name.slice(4), 10);
}
function Sr(e) {
    switch(e){
        case "ES256":
            return "P-256";
        case "ES384":
            return "P-384";
        case "ES512":
            return "P-521";
        default:
            throw Error("unreachable");
    }
}
function ht(e, t) {
    if (t.length && !t.some((r)=>e.usages.includes(r))) {
        let r = "CryptoKey does not support this operation, its usages must include ";
        if (t.length > 2) {
            let o = t.pop();
            r += `one of ${t.join(", ")}, or ${o}.`;
        } else if (t.length === 2) {
            r += `one of ${t[0]} or ${t[1]}.`;
        } else {
            r += `${t[0]}.`;
        }
        throw TypeError(r);
    }
}
function yt(e, t, ...r) {
    switch(t){
        case "HS256":
        case "HS384":
        case "HS512":
            {
                if (!B(e.algorithm, "HMAC")) {
                    throw x("HMAC");
                }
                let o = parseInt(t.slice(2), 10);
                if (be(e.algorithm.hash) !== o) {
                    throw x(`SHA-${o}`, "algorithm.hash");
                }
                break;
            }
        case "RS256":
        case "RS384":
        case "RS512":
            {
                if (!B(e.algorithm, "RSASSA-PKCS1-v1_5")) {
                    throw x("RSASSA-PKCS1-v1_5");
                }
                let o = parseInt(t.slice(2), 10);
                if (be(e.algorithm.hash) !== o) {
                    throw x(`SHA-${o}`, "algorithm.hash");
                }
                break;
            }
        case "PS256":
        case "PS384":
        case "PS512":
            {
                if (!B(e.algorithm, "RSA-PSS")) {
                    throw x("RSA-PSS");
                }
                let o = parseInt(t.slice(2), 10);
                if (be(e.algorithm.hash) !== o) {
                    throw x(`SHA-${o}`, "algorithm.hash");
                }
                break;
            }
        case "EdDSA":
            {
                if (e.algorithm.name !== "Ed25519" && e.algorithm.name !== "Ed448") {
                    throw x("Ed25519 or Ed448");
                }
                break;
            }
        case "ES256":
        case "ES384":
        case "ES512":
            {
                if (!B(e.algorithm, "ECDSA")) {
                    throw x("ECDSA");
                }
                let o = Sr(t);
                if (e.algorithm.namedCurve !== o) {
                    throw x(o, "algorithm.namedCurve");
                }
                break;
            }
        default:
            throw TypeError("CryptoKey does not support this operation");
    }
    ht(e, r);
}
function J(e, t, ...r) {
    switch(t){
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
            {
                if (!B(e.algorithm, "AES-GCM")) {
                    throw x("AES-GCM");
                }
                let o = parseInt(t.slice(1, 4), 10);
                if (e.algorithm.length !== o) {
                    throw x(o, "algorithm.length");
                }
                break;
            }
        case "A128KW":
        case "A192KW":
        case "A256KW":
            {
                if (!B(e.algorithm, "AES-KW")) {
                    throw x("AES-KW");
                }
                let o = parseInt(t.slice(1, 4), 10);
                if (e.algorithm.length !== o) {
                    throw x(o, "algorithm.length");
                }
                break;
            }
        case "ECDH":
            {
                switch(e.algorithm.name){
                    case "ECDH":
                    case "X25519":
                    case "X448":
                        break;
                    default:
                        throw x("ECDH, X25519, or X448");
                }
                break;
            }
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
            if (!B(e.algorithm, "PBKDF2")) {
                throw x("PBKDF2");
            }
            break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            {
                if (!B(e.algorithm, "RSA-OAEP")) {
                    throw x("RSA-OAEP");
                }
                let o = parseInt(t.slice(9), 10) || 1;
                if (be(e.algorithm.hash) !== o) {
                    throw x(`SHA-${o}`, "algorithm.hash");
                }
                break;
            }
        default:
            throw TypeError("CryptoKey does not support this operation");
    }
    ht(e, r);
}
const L = ()=>{};
function wt(e, t, ...r) {
    if (r.length > 2) {
        let o = r.pop();
        e += `one of type ${r.join(", ")}, or ${o}.`;
    } else if (r.length === 2) {
        e += `one of type ${r[0]} or ${r[1]}.`;
    } else {
        e += `of type ${r[0]}.`;
    }
    if (t == null) {
        e += ` Received ${t}`;
    } else if (typeof t === "function" && t.name) {
        e += ` Received function ${t.name}`;
    } else if (typeof t === "object" && t != null) {
        if (t.constructor && t.constructor.name) {
            e += ` Received an instance of ${t.constructor.name}`;
        }
    }
    return e;
}
function Be(e, t, ...r) {
    return wt(`Key for the ${e} algorithm must be `, t, ...r);
}
const A = (e, ...t)=>wt("Key must be ", e, ...t);
const O = ()=>{};
const Le = (e)=>g(e);
let m;
const M = Ji(()=>{
    W();
    m = [
        "CryptoKey"
    ];
});
async function Ar(e, t, r, o, n, a) {
    if (!(t instanceof Uint8Array)) {
        throw TypeError(A(t, "Uint8Array"));
    }
    let i = parseInt(e.slice(1, 4), 10);
    let c = await p.subtle.importKey("raw", t.subarray(i >> 3), "AES-CBC", false, [
        "decrypt"
    ]);
    let d = await p.subtle.importKey("raw", t.subarray(0, i >> 3), {
        hash: `SHA-${i << 1}`,
        name: "HMAC"
    }, false, [
        "sign"
    ]);
    let u = _(a, o, r, he(a.length << 3));
    let h = new Uint8Array((await p.subtle.sign("HMAC", d, u)).slice(0, i >> 3));
    let I;
    try {
        I = ut(n, h);
    } catch (H) {}
    if (!I) {
        throw new re;
    }
    let b;
    try {
        b = new Uint8Array(await p.subtle.decrypt({
            iv: o,
            name: "AES-CBC"
        }, c, r));
    } catch (H) {}
    if (!b) {
        throw new re;
    }
    return b;
}
async function gr(e, t, r, o, n, a) {
    let i;
    if (t instanceof Uint8Array) {
        i = await p.subtle.importKey("raw", t, "AES-GCM", false, [
            "decrypt"
        ]);
    } else {
        J(t, e, "decrypt");
        i = t;
    }
    try {
        return new Uint8Array(await p.subtle.decrypt({
            additionalData: a,
            iv: o,
            name: "AES-GCM",
            tagLength: 128
        }, i, _(r, n)));
    } catch (c) {
        throw new re;
    }
}
const br = async (e, t, r, o, n, a)=>{
    if (!g(t) && !(t instanceof Uint8Array)) {
        throw TypeError(A(t, ...m, "Uint8Array"));
    }
    ge(e, o);
    switch(e){
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
            if (t instanceof Uint8Array) {
                j(t, parseInt(e.slice(-3), 10));
            }
            return Ar(e, t, r, o, n, a);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
            if (t instanceof Uint8Array) {
                j(t, parseInt(e.slice(1, 4), 10));
            }
            return gr(e, t, r, o, n, a);
        default:
            throw new f("Unsupported JWE Content Encryption Algorithm");
    }
};
let Ke;
const $e = Ji(()=>{
    v();
    Me();
    Ne();
    lt();
    E();
    W();
    L();
    O();
    M();
    Ke = br;
});
const Et = async ()=>{
    throw new f('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `inflateRaw` decrypt option to provide Inflate Raw implementation.');
};
const St = async ()=>{
    throw new f('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `deflateRaw` encrypt option to provide Deflate Raw implementation.');
};
const Ge = Ji(()=>{
    E();
});
const Kr = (...e)=>{
    let t = e.filter(Boolean);
    if (t.length === 0 || t.length === 1) {
        return true;
    }
    let r;
    for (let o of t){
        let n = Object.keys(o);
        if (!r || r.size === 0) {
            r = new Set(n);
            continue;
        }
        for (let a of n){
            if (r.has(a)) {
                return false;
            }
            r.add(a);
        }
    }
    return true;
};
let G;
const oe = Ji(()=>{
    G = Kr;
});
function Cr(e) {
    return typeof e === "object" && e !== null;
}
function K(e) {
    if (!Cr(e) || Object.prototype.toString.call(e) !== "[object Object]") {
        return false;
    }
    if (Object.getPrototypeOf(e) === null) {
        return true;
    }
    let t = e;
    while(Object.getPrototypeOf(t) !== null){
        t = Object.getPrototypeOf(t);
    }
    return Object.getPrototypeOf(e) === t;
}
const F = ()=>{};
let _r;
let ee;
const Fe = Ji(()=>{
    _r = [
        {
            hash: "SHA-256",
            name: "HMAC"
        },
        true,
        [
            "sign"
        ]
    ];
    ee = _r;
});
function At(e, t) {
    if (e.algorithm.length !== parseInt(t.slice(1, 4), 10)) {
        throw TypeError(`Invalid key size for alg: ${t}`);
    }
}
function gt(e, t, r) {
    if (g(e)) {
        J(e, t, r);
        return e;
    }
    if (e instanceof Uint8Array) {
        return p.subtle.importKey("raw", e, "AES-KW", true, [
            r
        ]);
    }
    throw TypeError(A(e, ...m, "Uint8Array"));
}
const ne = async (e, t, cek)=>{
    let o = await gt(t, e, "wrapKey");
    At(o, e);
    let n = await p.subtle.importKey("raw", cek, ...ee);
    return new Uint8Array(await p.subtle.wrapKey("raw", n, o, "AES-KW"));
};
const ae = async (e, t, r)=>{
    let o = await gt(t, e, "unwrapKey");
    At(o, e);
    let n = await p.subtle.unwrapKey("raw", r, o, "AES-KW", ...ee);
    return new Uint8Array(await p.subtle.exportKey("raw", n));
};
const Ce = Ji(()=>{
    Fe();
    W();
    L();
    O();
    M();
});
async function _e(e, t, r, o, n = new Uint8Array(0), a = new Uint8Array(0)) {
    if (!g(e)) {
        throw TypeError(A(e, ...m));
    }
    J(e, "ECDH");
    if (!g(t)) {
        throw TypeError(A(t, ...m));
    }
    J(t, "ECDH", "deriveBits");
    let i = _(we(l.encode(r)), we(n), we(a), ye(o));
    let c;
    if (e.algorithm.name === "X25519") {
        c = 256;
    } else if (e.algorithm.name === "X448") {
        c = 448;
    } else {
        c = Math.ceil(parseInt(e.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
    }
    let d = new Uint8Array(await p.subtle.deriveBits({
        name: e.algorithm.name,
        public: e
    }, t, c));
    return mt(d, o, i);
}
async function bt(e) {
    if (!g(e)) {
        throw TypeError(A(e, ...m));
    }
    return p.subtle.generateKey(e.algorithm, true, [
        "deriveBits"
    ]);
}
function xe(e) {
    if (!g(e)) {
        throw TypeError(A(e, ...m));
    }
    return [
        "P-256",
        "P-384",
        "P-521"
    ].includes(e.algorithm.namedCurve) || e.algorithm.name === "X25519" || e.algorithm.name === "X448";
}
const Ve = Ji(()=>{
    v();
    W();
    L();
    O();
    M();
});
function ze(e) {
    if (!(e instanceof Uint8Array) || e.length < 8) {
        throw new s("PBES2 Salt Input must be 8 or more octets");
    }
}
const Ct = Ji(()=>{
    E();
});
function xr(e, t) {
    if (e instanceof Uint8Array) {
        return p.subtle.importKey("raw", e, "PBKDF2", false, [
            "deriveBits"
        ]);
    }
    if (g(e)) {
        J(e, t, "deriveBits", "deriveKey");
        return e;
    }
    throw TypeError(A(e, ...m, "Uint8Array"));
}
async function _t(e, t, iterations, o) {
    ze(e);
    let salt = ft(t, e);
    let length = parseInt(t.slice(13, 16), 10);
    let i = {
        hash: `SHA-${t.slice(8, 11)}`,
        iterations,
        name: "PBKDF2",
        salt
    };
    let c = {
        length,
        name: "AES-KW"
    };
    let d = await xr(o, t);
    if (d.usages.includes("deriveBits")) {
        return new Uint8Array(await p.subtle.deriveBits(i, d, length));
    }
    if (d.usages.includes("deriveKey")) {
        return p.subtle.deriveKey(i, d, c, false, [
            "wrapKey",
            "unwrapKey"
        ]);
    }
    throw TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');
}
const xt = async (e, t, cek, p2c = 2048, n = k(new Uint8Array(16)))=>{
    let a = await _t(n, e, p2c, t);
    return {
        encryptedKey: await ne(e.slice(-6), a, cek),
        p2c,
        p2s: w(n)
    };
};
const Ht = async (e, t, r, o, n)=>{
    let a = await _t(n, e, o, t);
    return ae(e.slice(-6), a, r);
};
const Xe = Ji(()=>{
    Ee();
    v();
    P();
    Ce();
    Ct();
    W();
    L();
    O();
    M();
});
function te(e) {
    switch(e){
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            return "RSA-OAEP";
        default:
            throw new f(`alg ${e} is not supported either by JOSE or your javascript runtime`);
    }
}
const Wt = Ji(()=>{
    E();
});
const q = (e, t)=>{
    if (e.startsWith("RS") || e.startsWith("PS")) {
        let { modulusLength } = t.algorithm;
        if (typeof modulusLength !== "number" || modulusLength < 2048) {
            throw TypeError(`${e} requires key modulusLength to be 2048 bits or larger`);
        }
    }
};
const He = ()=>{};
const vt = async (e, t, cek)=>{
    if (!g(t)) {
        throw TypeError(A(t, ...m));
    }
    J(t, e, "encrypt", "wrapKey");
    q(e, t);
    if (t.usages.includes("encrypt")) {
        return new Uint8Array(await p.subtle.encrypt(te(e), t, cek));
    }
    if (t.usages.includes("wrapKey")) {
        let o = await p.subtle.importKey("raw", cek, ...ee);
        return new Uint8Array(await p.subtle.wrapKey("raw", o, t, te(e)));
    }
    throw TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation');
};
const Pt = async (e, t, r)=>{
    if (!g(t)) {
        throw TypeError(A(t, ...m));
    }
    J(t, e, "decrypt", "unwrapKey");
    q(e, t);
    if (t.usages.includes("decrypt")) {
        return new Uint8Array(await p.subtle.decrypt(te(e), t, r));
    }
    if (t.usages.includes("unwrapKey")) {
        let o = await p.subtle.unwrapKey("raw", r, t, te(e), ...ee);
        return new Uint8Array(await p.subtle.exportKey("raw", o));
    }
    throw TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation');
};
const Ye = Ji(()=>{
    Wt();
    Fe();
    W();
    L();
    He();
    O();
    M();
});
function ie(e) {
    switch(e){
        case "A128GCM":
            return 128;
        case "A192GCM":
            return 192;
        case "A256GCM":
        case "A128CBC-HS256":
            return 256;
        case "A192CBC-HS384":
            return 384;
        case "A256CBC-HS512":
            return 512;
        default:
            throw new f(`Unsupported JWE Algorithm: ${e}`);
    }
}
const V = (e)=>k(new Uint8Array(ie(e) >> 3));
const We = Ji(()=>{
    E();
    Ee();
});
function Hr(e) {
    let algorithm;
    let keyUsages;
    switch(e.kty){
        case "oct":
            {
                switch(e.alg){
                    case "HS256":
                    case "HS384":
                    case "HS512":
                        algorithm = {
                            name: "HMAC",
                            hash: `SHA-${e.alg.slice(-3)}`
                        };
                        keyUsages = [
                            "sign",
                            "verify"
                        ];
                        break;
                    case "A128CBC-HS256":
                    case "A192CBC-HS384":
                    case "A256CBC-HS512":
                        throw new f(`${e.alg} keys cannot be imported as CryptoKey instances`);
                    case "A128GCM":
                    case "A192GCM":
                    case "A256GCM":
                    case "A128GCMKW":
                    case "A192GCMKW":
                    case "A256GCMKW":
                        algorithm = {
                            name: "AES-GCM"
                        };
                        keyUsages = [
                            "encrypt",
                            "decrypt"
                        ];
                        break;
                    case "A128KW":
                    case "A192KW":
                    case "A256KW":
                        algorithm = {
                            name: "AES-KW"
                        };
                        keyUsages = [
                            "wrapKey",
                            "unwrapKey"
                        ];
                        break;
                    case "PBES2-HS256+A128KW":
                    case "PBES2-HS384+A192KW":
                    case "PBES2-HS512+A256KW":
                        algorithm = {
                            name: "PBKDF2"
                        };
                        keyUsages = [
                            "deriveBits"
                        ];
                        break;
                    default:
                        throw new f('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        case "RSA":
            {
                switch(e.alg){
                    case "PS256":
                    case "PS384":
                    case "PS512":
                        algorithm = {
                            name: "RSA-PSS",
                            hash: `SHA-${e.alg.slice(-3)}`
                        };
                        keyUsages = e.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "RS256":
                    case "RS384":
                    case "RS512":
                        algorithm = {
                            name: "RSASSA-PKCS1-v1_5",
                            hash: `SHA-${e.alg.slice(-3)}`
                        };
                        keyUsages = e.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "RSA-OAEP":
                    case "RSA-OAEP-256":
                    case "RSA-OAEP-384":
                    case "RSA-OAEP-512":
                        algorithm = {
                            name: "RSA-OAEP",
                            hash: `SHA-${parseInt(e.alg.slice(-3), 10) || 1}`
                        };
                        keyUsages = e.d ? [
                            "decrypt",
                            "unwrapKey"
                        ] : [
                            "encrypt",
                            "wrapKey"
                        ];
                        break;
                    default:
                        throw new f('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        case "EC":
            {
                switch(e.alg){
                    case "ES256":
                        algorithm = {
                            name: "ECDSA",
                            namedCurve: "P-256"
                        };
                        keyUsages = e.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "ES384":
                        algorithm = {
                            name: "ECDSA",
                            namedCurve: "P-384"
                        };
                        keyUsages = e.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "ES512":
                        algorithm = {
                            name: "ECDSA",
                            namedCurve: "P-521"
                        };
                        keyUsages = e.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "ECDH-ES":
                    case "ECDH-ES+A128KW":
                    case "ECDH-ES+A192KW":
                    case "ECDH-ES+A256KW":
                        algorithm = {
                            name: "ECDH",
                            namedCurve: e.crv
                        };
                        keyUsages = e.d ? [
                            "deriveBits"
                        ] : [];
                        break;
                    default:
                        throw new f('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        case "OKP":
            {
                switch(e.alg){
                    case "EdDSA":
                        algorithm = {
                            name: e.crv
                        };
                        keyUsages = e.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "ECDH-ES":
                    case "ECDH-ES+A128KW":
                    case "ECDH-ES+A192KW":
                    case "ECDH-ES+A256KW":
                        algorithm = {
                            name: e.crv
                        };
                        keyUsages = e.d ? [
                            "deriveBits"
                        ] : [];
                        break;
                    default:
                        throw new f('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        default:
            throw new f('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
    }
    return {
        algorithm,
        keyUsages
    };
}
const Wr = async (e)=>{
    if (!e.alg) {
        throw TypeError('"alg" argument is required when "jwk.alg" is not present');
    }
    let { algorithm, keyUsages } = Hr(e);
    let a = [
        algorithm,
        e.ext ?? false,
        e.key_ops ?? keyUsages
    ];
    if (algorithm.name === "PBKDF2") {
        return p.subtle.importKey("raw", S(e.k), ...a);
    }
    let i = {
        ...e
    };
    delete i.alg;
    delete i.use;
    return p.subtle.importKey("jwk", i, ...a);
};
let qe;
const Jt = Ji(()=>{
    W();
    E();
    P();
    qe = Wr;
});
export async function importJWK(e, alg, r) {
    if (!K(e)) {
        throw TypeError("JWK must be an object");
    }
    if (!alg) {
        alg = e.alg;
    }
    switch(e.kty){
        case "oct":
            if (typeof e.k !== "string" || !e.k) {
                throw TypeError('missing "k" (Key Value) Parameter value');
            }
            if (!(r !== null && r !== undefined)) {
                r = e.ext !== true;
            }
            if (r) {
                return qe({
                    ...e,
                    alg,
                    ext: e.ext ?? false
                });
            }
            return S(e.k);
        case "RSA":
            if (e.oth !== undefined) {
                throw new f('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
            }
        case "EC":
        case "OKP":
            return qe({
                ...e,
                alg
            });
        default:
            throw new f('Unsupported "kty" (Key Type) Parameter value');
    }
}
const Qe = Ji(()=>{
    P();
    Jt();
    E();
    F();
});
const vr = (e, t)=>{
    if (t instanceof Uint8Array) {
        return;
    }
    if (!Le(t)) {
        throw TypeError(Be(e, t, ...m, "Uint8Array"));
    }
    if (t.type !== "secret") {
        throw TypeError(`${m.join(" or ")} instances for symmetric algorithms must be of type "secret"`);
    }
};
const Pr = (e, t, r)=>{
    if (!Le(t)) {
        throw TypeError(Be(e, t, ...m));
    }
    if (t.type === "secret") {
        throw TypeError(`${m.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (r === "sign" && t.type === "public") {
        throw TypeError(`${m.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
    }
    if (r === "decrypt" && t.type === "public") {
        throw TypeError(`${m.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
    }
    if (t.algorithm && r === "verify" && t.type === "private") {
        throw TypeError(`${m.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
    }
    if (t.algorithm && r === "encrypt" && t.type === "private") {
        throw TypeError(`${m.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`);
    }
};
const Jr = (e, t, r)=>{
    if (e.startsWith("HS") || e === "dir" || e.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(e)) {
        vr(e, t);
    } else {
        Pr(e, t, r);
    }
};
let z;
const se = Ji(()=>{
    O();
    M();
    z = Jr;
});
async function Ir(e, t, r, o, n) {
    if (!(r instanceof Uint8Array)) {
        throw TypeError(A(r, "Uint8Array"));
    }
    let a = parseInt(e.slice(1, 4), 10);
    let i = await p.subtle.importKey("raw", r.subarray(a >> 3), "AES-CBC", false, [
        "encrypt"
    ]);
    let c = await p.subtle.importKey("raw", r.subarray(0, a >> 3), {
        hash: `SHA-${a << 1}`,
        name: "HMAC"
    }, false, [
        "sign"
    ]);
    let ciphertext = new Uint8Array(await p.subtle.encrypt({
        iv: o,
        name: "AES-CBC"
    }, i, t));
    let u = _(n, o, ciphertext, he(n.length << 3));
    let h = new Uint8Array((await p.subtle.sign("HMAC", c, u)).slice(0, a >> 3));
    return {
        ciphertext,
        tag: h
    };
}
async function Rr(e, t, r, o, n) {
    let a;
    if (r instanceof Uint8Array) {
        a = await p.subtle.importKey("raw", r, "AES-GCM", false, [
            "encrypt"
        ]);
    } else {
        J(r, e, "encrypt");
        a = r;
    }
    let i = new Uint8Array(await p.subtle.encrypt({
        additionalData: n,
        iv: o,
        name: "AES-GCM",
        tagLength: 128
    }, a, t));
    let c = i.slice(-16);
    return {
        ciphertext: i.slice(0, -16),
        tag: c
    };
}
const Tr = async (e, t, r, o, n)=>{
    if (!g(r) && !(r instanceof Uint8Array)) {
        throw TypeError(A(r, ...m, "Uint8Array"));
    }
    ge(e, o);
    switch(e){
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
            if (r instanceof Uint8Array) {
                j(r, parseInt(e.slice(-3), 10));
            }
            return Ir(e, t, r, o, n);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
            if (r instanceof Uint8Array) {
                j(r, parseInt(e.slice(1, 4), 10));
            }
            return Rr(e, t, r, o, n);
        default:
            throw new f("Unsupported JWE Content Encryption Algorithm");
    }
};
let ce;
const ke = Ji(()=>{
    v();
    Me();
    Ne();
    W();
    L();
    O();
    E();
    M();
    ce = Tr;
});
async function It(e, t, cek, o) {
    let n = e.slice(0, 7);
    if (!o) {
        o = Se(n);
    }
    let { ciphertext, tag } = await ce(n, cek, t, o, new Uint8Array(0));
    return {
        encryptedKey: ciphertext,
        iv: w(o),
        tag: w(tag)
    };
}
async function Rt(e, t, r, o, n) {
    let a = e.slice(0, 7);
    return Ke(a, t, r, o, n, new Uint8Array(0));
}
const je = Ji(()=>{
    ke();
    $e();
    Ae();
    P();
});
async function Ur(e, t, r, o, n) {
    z(e, t, "decrypt");
    switch(e){
        case "dir":
            {
                if (r !== undefined) {
                    throw new s("Encountered unexpected JWE Encrypted Key");
                }
                return t;
            }
        case "ECDH-ES":
            if (r !== undefined) {
                throw new s("Encountered unexpected JWE Encrypted Key");
            }
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
            {
                if (!K(o.epk)) {
                    throw new s('JOSE Header "epk" (Ephemeral Public Key) missing or invalid');
                }
                if (!xe(t)) {
                    throw new f("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                }
                let a = await importJWK(o.epk, e);
                let i;
                let c;
                if (o.apu !== undefined) {
                    if (typeof o.apu !== "string") {
                        throw new s('JOSE Header "apu" (Agreement PartyUInfo) invalid');
                    }
                    try {
                        i = S(o.apu);
                    } catch (u) {
                        throw new s("Failed to base64url decode the apu");
                    }
                }
                if (o.apv !== undefined) {
                    if (typeof o.apv !== "string") {
                        throw new s('JOSE Header "apv" (Agreement PartyVInfo) invalid');
                    }
                    try {
                        c = S(o.apv);
                    } catch (u) {
                        throw new s("Failed to base64url decode the apv");
                    }
                }
                let d = await _e(a, t, e === "ECDH-ES" ? o.enc : e, e === "ECDH-ES" ? ie(o.enc) : parseInt(e.slice(-5, -2), 10), i, c);
                if (e === "ECDH-ES") {
                    return d;
                }
                if (r === undefined) {
                    throw new s("JWE Encrypted Key missing");
                }
                return ae(e.slice(-6), d, r);
            }
        case "RSA1_5":
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            {
                if (r === undefined) {
                    throw new s("JWE Encrypted Key missing");
                }
                return Pt(e, t, r);
            }
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
            {
                if (r === undefined) {
                    throw new s("JWE Encrypted Key missing");
                }
                if (typeof o.p2c !== "number") {
                    throw new s('JOSE Header "p2c" (PBES2 Count) missing or invalid');
                }
                let a = n?.maxPBES2Count || 10000;
                if (o.p2c > a) {
                    throw new s('JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds');
                }
                if (typeof o.p2s !== "string") {
                    throw new s('JOSE Header "p2s" (PBES2 Salt) missing or invalid');
                }
                let i;
                try {
                    i = S(o.p2s);
                } catch (c) {
                    throw new s("Failed to base64url decode the p2s");
                }
                return Ht(e, t, r, o.p2c, i);
            }
        case "A128KW":
        case "A192KW":
        case "A256KW":
            {
                if (r === undefined) {
                    throw new s("JWE Encrypted Key missing");
                }
                return ae(e, t, r);
            }
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW":
            {
                if (r === undefined) {
                    throw new s("JWE Encrypted Key missing");
                }
                if (typeof o.iv !== "string") {
                    throw new s('JOSE Header "iv" (Initialization Vector) missing or invalid');
                }
                if (typeof o.tag !== "string") {
                    throw new s('JOSE Header "tag" (Authentication Tag) missing or invalid');
                }
                let a;
                try {
                    a = S(o.iv);
                } catch (c) {
                    throw new s("Failed to base64url decode the iv");
                }
                let i;
                try {
                    i = S(o.tag);
                } catch (c) {
                    throw new s("Failed to base64url decode the tag");
                }
                return Rt(e, t, r, a, i);
            }
        default:
            throw new f('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
}
let Tt;
const Ut = Ji(()=>{
    Ce();
    Ve();
    Xe();
    Ye();
    P();
    E();
    We();
    Qe();
    se();
    F();
    je();
    Tt = Ur;
});
function Dr(e, t, r, o, n) {
    if (n.crit !== undefined && o.crit === undefined) {
        throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!o || o.crit === undefined) {
        return new Set;
    }
    if (!Array.isArray(o.crit) || o.crit.length === 0 || o.crit.some((i)=>typeof i !== "string" || i.length === 0)) {
        throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let a;
    if (r !== undefined) {
        a = new Map([
            ...Object.entries(r),
            ...t.entries()
        ]);
    } else {
        a = t;
    }
    for (let i of o.crit){
        if (!a.has(i)) {
            throw new f(`Extension Header Parameter "${i}" is not recognized`);
        }
        if (n[i] === undefined) {
            throw new e(`Extension Header Parameter "${i}" is missing`);
        } else if (a.get(i) && o[i] === undefined) {
            throw new e(`Extension Header Parameter "${i}" MUST be integrity protected`);
        }
    }
    return new Set(o.crit);
}
let X;
const pe = Ji(()=>{
    E();
    X = Dr;
});
const Or = (e, t)=>{
    if (t !== undefined && (!Array.isArray(t) || t.some((r)=>typeof r !== "string"))) {
        throw TypeError(`"${e}" option must be an array of strings`);
    }
    if (!t) {
        return;
    }
    return new Set(t);
};
let de;
const et = Ji(()=>{
    de = Or;
});
async function Dt(e, t, r) {
    if (!K(e)) {
        throw new s("Flattened JWE must be an object");
    }
    if (e.protected === undefined && e.header === undefined && e.unprotected === undefined) {
        throw new s("JOSE Header missing");
    }
    if (typeof e.iv !== "string") {
        throw new s("JWE Initialization Vector missing or incorrect type");
    }
    if (typeof e.ciphertext !== "string") {
        throw new s("JWE Ciphertext missing or incorrect type");
    }
    if (typeof e.tag !== "string") {
        throw new s("JWE Authentication Tag missing or incorrect type");
    }
    if (e.protected !== undefined && typeof e.protected !== "string") {
        throw new s("JWE Protected Header incorrect type");
    }
    if (e.encrypted_key !== undefined && typeof e.encrypted_key !== "string") {
        throw new s("JWE Encrypted Key incorrect type");
    }
    if (e.aad !== undefined && typeof e.aad !== "string") {
        throw new s("JWE AAD incorrect type");
    }
    if (e.header !== undefined && !K(e.header)) {
        throw new s("JWE Shared Unprotected Header incorrect type");
    }
    if (e.unprotected !== undefined && !K(e.unprotected)) {
        throw new s("JWE Per-Recipient Unprotected Header incorrect type");
    }
    let n;
    if (e.protected) {
        try {
            let R = S(e.protected);
            n = JSON.parse(C.decode(R));
        } catch (R) {
            throw new s("JWE Protected Header is invalid");
        }
    }
    if (!G(n, e.header, e.unprotected)) {
        throw new s("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
    }
    let a = {
        ...n,
        ...e.header,
        ...e.unprotected
    };
    X(s, new Map, r?.crit, n, a);
    if (a.zip !== undefined) {
        if (!n || !n.zip) {
            throw new s('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
        }
        if (a.zip !== "DEF") {
            throw new f('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
        }
    }
    let { alg, enc } = a;
    if (typeof alg !== "string" || !alg) {
        throw new s("missing JWE Algorithm (alg) in JWE Header");
    }
    if (typeof enc !== "string" || !enc) {
        throw new s("missing JWE Encryption Algorithm (enc) in JWE Header");
    }
    let d = r && de("keyManagementAlgorithms", r.keyManagementAlgorithms);
    let u = r && de("contentEncryptionAlgorithms", r.contentEncryptionAlgorithms);
    if (d && !d.has(alg)) {
        throw new Q('"alg" (Algorithm) Header Parameter not allowed');
    }
    if (u && !u.has(enc)) {
        throw new Q('"enc" (Encryption Algorithm) Header Parameter not allowed');
    }
    let h;
    if (e.encrypted_key !== undefined) {
        try {
            h = S(e.encrypted_key);
        } catch (R) {
            throw new s("Failed to base64url decode the encrypted_key");
        }
    }
    let I = false;
    if (typeof t === "function") {
        t = await t(n, e);
        I = true;
    }
    let b;
    try {
        b = await Tt(alg, t, h, a, r);
    } catch (error) {
        if (error instanceof TypeError || error instanceof s || error instanceof f) {
            throw error;
        }
        b = V(enc);
    }
    let H;
    let T;
    try {
        H = S(e.iv);
    } catch (R) {
        throw new s("Failed to base64url decode the iv");
    }
    try {
        T = S(e.tag);
    } catch (R) {
        throw new s("Failed to base64url decode the tag");
    }
    let U = l.encode(e.protected ?? "");
    let D;
    if (e.aad !== undefined) {
        D = _(U, l.encode("."), l.encode(e.aad));
    } else {
        D = U;
    }
    let dt;
    try {
        dt = S(e.ciphertext);
    } catch (R) {
        throw new s("Failed to base64url decode the ciphertext");
    }
    let plaintext = await Ke(enc, b, dt, H, T, D);
    if (a.zip === "DEF") {
        plaintext = await (r?.inflateRaw || Et)(plaintext);
    }
    let Z = {
        plaintext
    };
    if (e.protected !== undefined) {
        Z.protectedHeader = n;
    }
    if (e.aad !== undefined) {
        try {
            Z.additionalAuthenticatedData = S(e.aad);
        } catch (R) {
            throw new s("Failed to base64url decode the aad");
        }
    }
    if (e.unprotected !== undefined) {
        Z.sharedUnprotectedHeader = e.unprotected;
    }
    if (e.header !== undefined) {
        Z.unprotectedHeader = e.header;
    }
    if (I) {
        return {
            ...Z,
            key: t
        };
    }
    return Z;
}
const Ot = Ji(()=>{
    P();
    $e();
    Ge();
    E();
    oe();
    F();
    Ut();
    v();
    We();
    pe();
    et();
});
export async function compactDecrypt(e, t, r) {
    if (e instanceof Uint8Array) {
        e = C.decode(e);
    }
    if (typeof e !== "string") {
        throw new s("Compact JWE must be a string or Uint8Array");
    }
    let { 0: o, 1: n, 2: a, 3: ciphertext, 4: c, length } = e.split(".");
    if (length !== 5) {
        throw new s("Invalid Compact JWE");
    }
    let u = await Dt({
        ciphertext,
        iv: a || undefined,
        protected: o || undefined,
        tag: c || undefined,
        encrypted_key: n || undefined
    }, t, r);
    let h = {
        plaintext: u.plaintext,
        protectedHeader: u.protectedHeader
    };
    if (typeof t === "function") {
        return {
            ...h,
            key: u.key
        };
    }
    return h;
}
const Mt = Ji(()=>{
    Ot();
    E();
    v();
});
function fe(e, algorithm) {
    let hash = `SHA-${e.slice(-3)}`;
    switch(e){
        case "HS256":
        case "HS384":
        case "HS512":
            return {
                hash,
                name: "HMAC"
            };
        case "PS256":
        case "PS384":
        case "PS512":
            return {
                hash,
                name: "RSA-PSS",
                saltLength: e.slice(-3) >> 3
            };
        case "RS256":
        case "RS384":
        case "RS512":
            return {
                hash,
                name: "RSASSA-PKCS1-v1_5"
            };
        case "ES256":
        case "ES384":
        case "ES512":
            return {
                hash,
                name: "ECDSA",
                namedCurve: algorithm.namedCurve
            };
        case "EdDSA":
            return {
                name: algorithm.name
            };
        default:
            throw new f(`alg ${e} is not supported either by JOSE or your javascript runtime`);
    }
}
const tt = Ji(()=>{
    E();
});
function me(e, t, r) {
    if (g(t)) {
        yt(t, e, r);
        return t;
    }
    if (t instanceof Uint8Array) {
        if (!e.startsWith("HS")) {
            throw TypeError(A(t, ...m));
        }
        return p.subtle.importKey("raw", t, {
            hash: `SHA-${e.slice(-3)}`,
            name: "HMAC"
        }, false, [
            r
        ]);
    }
    throw TypeError(A(t, ...m, "Uint8Array"));
}
const rt = Ji(()=>{
    W();
    L();
    O();
    M();
});
const Nr = async (e, t, r, o)=>{
    let n = await me(e, t, "verify");
    q(e, n);
    let a = fe(e, n.algorithm);
    try {
        return await p.subtle.verify(a, n, r, o);
    } catch (i) {
        return false;
    }
};
let Nt;
const Bt = Ji(()=>{
    tt();
    W();
    He();
    rt();
    Nt = Nr;
});
async function Lt(e, t, r) {
    if (!K(e)) {
        throw new y("Flattened JWS must be an object");
    }
    if (e.protected === undefined && e.header === undefined) {
        throw new y('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (e.protected !== undefined && typeof e.protected !== "string") {
        throw new y("JWS Protected Header incorrect type");
    }
    if (e.payload === undefined) {
        throw new y("JWS Payload missing");
    }
    if (typeof e.signature !== "string") {
        throw new y("JWS Signature missing or incorrect type");
    }
    if (e.header !== undefined && !K(e.header)) {
        throw new y("JWS Unprotected Header incorrect type");
    }
    let n = {};
    if (e.protected) {
        try {
            let D = S(e.protected);
            n = JSON.parse(C.decode(D));
        } catch (D) {
            throw new y("JWS Protected Header is invalid");
        }
    }
    if (!G(n, e.header)) {
        throw new y("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    }
    let a = {
        ...n,
        ...e.header
    };
    let i = X(y, new Map([
        [
            "b64",
            true
        ]
    ]), r?.crit, n, a);
    let c = true;
    if (i.has("b64")) {
        c = n.b64;
        if (typeof c !== "boolean") {
            throw new y('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
    }
    let { alg } = a;
    if (typeof alg !== "string" || !alg) {
        throw new y('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    let u = r && de("algorithms", r.algorithms);
    if (u && !u.has(alg)) {
        throw new Q('"alg" (Algorithm) Header Parameter not allowed');
    }
    if (c) {
        if (typeof e.payload !== "string") {
            throw new y("JWS Payload must be a string");
        }
    } else if (typeof e.payload !== "string" && !(e.payload instanceof Uint8Array)) {
        throw new y("JWS Payload must be a string or an Uint8Array instance");
    }
    let h = false;
    if (typeof t === "function") {
        t = await t(n, e);
        h = true;
    }
    z(alg, t, "verify");
    let I = _(l.encode(e.protected ?? ""), l.encode("."), typeof e.payload === "string" ? l.encode(e.payload) : e.payload);
    let b;
    try {
        b = S(e.signature);
    } catch (D) {
        throw new y("Failed to base64url decode the signature");
    }
    if (!await Nt(alg, t, b, I)) {
        throw new De;
    }
    let payload;
    if (c) {
        try {
            payload = S(e.payload);
        } catch (D) {
            throw new y("Failed to base64url decode the payload");
        }
    } else if (typeof e.payload === "string") {
        payload = l.encode(e.payload);
    } else {
        payload = e.payload;
    }
    let U = {
        payload
    };
    if (e.protected !== undefined) {
        U.protectedHeader = n;
    }
    if (e.header !== undefined) {
        U.unprotectedHeader = e.header;
    }
    if (h) {
        return {
            ...U,
            key: t
        };
    }
    return U;
}
const $t = Ji(()=>{
    P();
    Bt();
    E();
    v();
    oe();
    F();
    se();
    pe();
    et();
});
export async function compactVerify(e, t, r) {
    if (e instanceof Uint8Array) {
        e = C.decode(e);
    }
    if (typeof e !== "string") {
        throw new y("Compact JWS must be a string or Uint8Array");
    }
    let { 0: o, 1: payload, 2: signature, length } = e.split(".");
    if (length !== 3) {
        throw new y("Invalid Compact JWS");
    }
    let c = await Lt({
        payload,
        protected: o,
        signature
    }, t, r);
    let d = {
        payload: c.payload,
        protectedHeader: c.protectedHeader
    };
    if (typeof t === "function") {
        return {
            ...d,
            key: c.key
        };
    }
    return d;
}
const Gt = Ji(()=>{
    $t();
    E();
    v();
});
const Lr = async (e)=>{
    if (e instanceof Uint8Array) {
        return {
            kty: "oct",
            k: w(e)
        };
    }
    if (!g(e)) {
        throw TypeError(A(e, ...m, "Uint8Array"));
    }
    if (!e.extractable) {
        throw TypeError("non-extractable CryptoKey cannot be exported as a JWK");
    }
    let { ext, key_ops, alg, use, ...rest } = await p.subtle.exportKey("jwk", e);
    return rest;
};
let Ft;
const Vt = Ji(()=>{
    W();
    O();
    P();
    M();
    Ft = Lr;
});
export async function exportJWK(e) {
    return Ft(e);
}
const nt = Ji(()=>{
    Vt();
});
async function $r(e, t, r, o, n = {}) {
    let encryptedKey;
    let parameters;
    let cek;
    z(e, r, "encrypt");
    switch(e){
        case "dir":
            {
                cek = r;
                break;
            }
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
            {
                if (!xe(r)) {
                    throw new f("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                }
                let { apu, apv } = n;
                let { epk } = n;
                if (!epk) {
                    epk = (await bt(r)).privateKey;
                }
                let { x, y, crv, kty } = await exportJWK(epk);
                let U = await _e(r, epk, e === "ECDH-ES" ? t : e, e === "ECDH-ES" ? ie(t) : parseInt(e.slice(-5, -2), 10), apu, apv);
                parameters = {
                    epk: {
                        x,
                        crv,
                        kty
                    }
                };
                if (kty === "EC") {
                    parameters.epk.y = y;
                }
                if (apu) {
                    parameters.apu = w(apu);
                }
                if (apv) {
                    parameters.apv = w(apv);
                }
                if (e === "ECDH-ES") {
                    cek = U;
                    break;
                }
                cek = o || V(t);
                let D = e.slice(-6);
                encryptedKey = await ne(D, U, cek);
                break;
            }
        case "RSA1_5":
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            {
                cek = o || V(t);
                encryptedKey = await vt(e, r, cek);
                break;
            }
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
            {
                cek = o || V(t);
                let { p2c, p2s } = n;
                ({ encryptedKey, ...parameters } = await xt(e, r, cek, p2c, p2s));
                break;
            }
        case "A128KW":
        case "A192KW":
        case "A256KW":
            {
                cek = o || V(t);
                encryptedKey = await ne(e, r, cek);
                break;
            }
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW":
            {
                cek = o || V(t);
                let { iv } = n;
                ({ encryptedKey, ...parameters } = await It(e, r, cek, iv));
                break;
            }
        default:
            throw new f('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
    return {
        cek,
        encryptedKey,
        parameters
    };
}
let zt;
const Xt = Ji(()=>{
    Ce();
    Ve();
    Xe();
    Ye();
    P();
    We();
    E();
    nt();
    se();
    je();
    zt = $r;
});
class at {
    constructor(e){
        if (!(e instanceof Uint8Array)) {
            throw TypeError("plaintext must be an instance of Uint8Array");
        }
        this._plaintext = e;
    }
    setKeyManagementParameters(e) {
        if (this._keyManagementParameters) {
            throw TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = e;
        return this;
    }
    setProtectedHeader(e) {
        if (this._protectedHeader) {
            throw TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = e;
        return this;
    }
    setSharedUnprotectedHeader(e) {
        if (this._sharedUnprotectedHeader) {
            throw TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this._sharedUnprotectedHeader = e;
        return this;
    }
    setUnprotectedHeader(e) {
        if (this._unprotectedHeader) {
            throw TypeError("setUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = e;
        return this;
    }
    setAdditionalAuthenticatedData(e) {
        this._aad = e;
        return this;
    }
    setContentEncryptionKey(e) {
        if (this._cek) {
            throw TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = e;
        return this;
    }
    setInitializationVector(e) {
        if (this._iv) {
            throw TypeError("setInitializationVector can only be called once");
        }
        this._iv = e;
        return this;
    }
    async encrypt(e, t) {
        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) {
            throw new s("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
        }
        if (!G(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
            throw new s("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
        }
        let r = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...this._sharedUnprotectedHeader
        };
        X(s, new Map, t?.crit, this._protectedHeader, r);
        if (r.zip !== undefined) {
            if (!this._protectedHeader || !this._protectedHeader.zip) {
                throw new s('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
            }
            if (r.zip !== "DEF") {
                throw new f('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
            }
        }
        let { alg, enc } = r;
        if (typeof alg !== "string" || !alg) {
            throw new s('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc !== "string" || !enc) {
            throw new s('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let a;
        if (alg === "dir") {
            if (this._cek) {
                throw TypeError("setContentEncryptionKey cannot be called when using Direct Encryption");
            }
        } else if (alg === "ECDH-ES") {
            if (this._cek) {
                throw TypeError("setContentEncryptionKey cannot be called when using Direct Key Agreement");
            }
        }
        let i;
        {
            let H;
            ({ cek: i, encryptedKey: a, parameters: H } = await zt(alg, enc, e, this._cek, this._keyManagementParameters));
            if (H) {
                if (t && Gr in t) {
                    if (!this._unprotectedHeader) {
                        this.setUnprotectedHeader(H);
                    } else {
                        this._unprotectedHeader = {
                            ...this._unprotectedHeader,
                            ...H
                        };
                    }
                } else if (!this._protectedHeader) {
                    this.setProtectedHeader(H);
                } else {
                    this._protectedHeader = {
                        ...this._protectedHeader,
                        ...H
                    };
                }
            }
        }
        if (!this._iv) {
            this._iv = Se(enc);
        }
        let c;
        let d;
        let u;
        if (this._protectedHeader) {
            d = l.encode(w(JSON.stringify(this._protectedHeader)));
        } else {
            d = l.encode("");
        }
        if (this._aad) {
            u = w(this._aad);
            c = _(d, l.encode("."), l.encode(u));
        } else {
            c = d;
        }
        let h;
        let I;
        if (r.zip === "DEF") {
            let H = await (t?.deflateRaw || St)(this._plaintext);
            ({ ciphertext: h, tag: I } = await ce(enc, H, i, this._iv, c));
        } else {
            ({ ciphertext: h, tag: I } = await ce(enc, this._plaintext, i, this._iv, c));
        }
        let b = {
            ciphertext: w(h),
            iv: w(this._iv),
            tag: w(I)
        };
        if (a) {
            b.encrypted_key = w(a);
        }
        if (u) {
            b.aad = u;
        }
        if (this._protectedHeader) {
            b.protected = C.decode(d);
        }
        if (this._sharedUnprotectedHeader) {
            b.unprotected = this._sharedUnprotectedHeader;
        }
        if (this._unprotectedHeader) {
            b.header = this._unprotectedHeader;
        }
        return b;
    }
}
let Gr;
const Yt = Ji(()=>{
    P();
    ke();
    Ge();
    Ae();
    Xt();
    E();
    oe();
    v();
    pe();
    Gr = Symbol();
});
export class CompactEncrypt {
    constructor(e){
        this._flattened = new at(e);
    }
    setContentEncryptionKey(e) {
        this._flattened.setContentEncryptionKey(e);
        return this;
    }
    setInitializationVector(e) {
        this._flattened.setInitializationVector(e);
        return this;
    }
    setProtectedHeader(e) {
        this._flattened.setProtectedHeader(e);
        return this;
    }
    setKeyManagementParameters(e) {
        this._flattened.setKeyManagementParameters(e);
        return this;
    }
    async encrypt(e, t) {
        let r = await this._flattened.encrypt(e, t);
        return [
            r.protected,
            r.encrypted_key,
            r.iv,
            r.ciphertext,
            r.tag
        ].join(".");
    }
}
const Zt = Ji(()=>{
    Yt();
});
const Fr = async (e, t, r)=>{
    let o = await me(e, t, "sign");
    q(e, o);
    let n = await p.subtle.sign(fe(e, o.algorithm), o, r);
    return new Uint8Array(n);
};
let Qt;
const kt = Ji(()=>{
    tt();
    W();
    He();
    rt();
    Qt = Fr;
});
class it {
    constructor(e){
        if (!(e instanceof Uint8Array)) {
            throw TypeError("payload must be an instance of Uint8Array");
        }
        this._payload = e;
    }
    setProtectedHeader(e) {
        if (this._protectedHeader) {
            throw TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = e;
        return this;
    }
    setUnprotectedHeader(e) {
        if (this._unprotectedHeader) {
            throw TypeError("setUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = e;
        return this;
    }
    async sign(e, t) {
        if (!this._protectedHeader && !this._unprotectedHeader) {
            throw new y("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
        }
        if (!G(this._protectedHeader, this._unprotectedHeader)) {
            throw new y("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
        }
        let r = {
            ...this._protectedHeader,
            ...this._unprotectedHeader
        };
        let o = X(y, new Map([
            [
                "b64",
                true
            ]
        ]), t?.crit, this._protectedHeader, r);
        let n = true;
        if (o.has("b64")) {
            n = this._protectedHeader.b64;
            if (typeof n !== "boolean") {
                throw new y('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            }
        }
        let { alg } = r;
        if (typeof alg !== "string" || !alg) {
            throw new y('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        z(alg, e, "sign");
        let _payload = this._payload;
        if (n) {
            _payload = l.encode(w(_payload));
        }
        let c;
        if (this._protectedHeader) {
            c = l.encode(w(JSON.stringify(this._protectedHeader)));
        } else {
            c = l.encode("");
        }
        let d = _(c, l.encode("."), _payload);
        let u = await Qt(alg, e, d);
        let h = {
            signature: w(u),
            payload: ""
        };
        if (n) {
            h.payload = C.decode(_payload);
        }
        if (this._unprotectedHeader) {
            h.header = this._unprotectedHeader;
        }
        if (this._protectedHeader) {
            h.protected = C.decode(c);
        }
        return h;
    }
}
const jt = Ji(()=>{
    P();
    kt();
    oe();
    E();
    v();
    se();
    pe();
});
export class CompactSign {
    constructor(e){
        this._flattened = new it(e);
    }
    setProtectedHeader(e) {
        this._flattened.setProtectedHeader(e);
        return this;
    }
    async sign(e, t) {
        let r = await this._flattened.sign(e, t);
        if (r.payload === undefined) {
            throw TypeError("use the flattened module for creating JWS with b64: false");
        }
        return `${r.protected}.${r.payload}.${r.signature}`;
    }
}
const st = Ji(()=>{
    jt();
});
const Pe = (e)=>Math.floor(e.getTime() / 1000);
const er = ()=>{};
let Vr;
const ct = (e)=>{
    let t = Vr.exec(e);
    if (!t) {
        throw TypeError("Invalid time period format");
    }
    let r = parseFloat(t[1]);
    switch(t[2].toLowerCase()){
        case "sec":
        case "secs":
        case "second":
        case "seconds":
        case "s":
            return Math.round(r);
        case "minute":
        case "minutes":
        case "min":
        case "mins":
        case "m":
            return Math.round(r * 60);
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
            return Math.round(r * 3600);
        case "day":
        case "days":
        case "d":
            return Math.round(r * 86400);
        case "week":
        case "weeks":
        case "w":
            return Math.round(r * 604800);
        default:
            return Math.round(r * 31557600);
    }
};
const tr = Ji(()=>{
    Vr = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
});
class pt {
    constructor(e){
        if (!K(e)) {
            throw TypeError("JWT Claims Set MUST be an object");
        }
        this._payload = e;
    }
    setIssuer(iss) {
        this._payload = {
            ...this._payload,
            iss
        };
        return this;
    }
    setSubject(sub) {
        this._payload = {
            ...this._payload,
            sub
        };
        return this;
    }
    setAudience(aud) {
        this._payload = {
            ...this._payload,
            aud
        };
        return this;
    }
    setJti(jti) {
        this._payload = {
            ...this._payload,
            jti
        };
        return this;
    }
    setNotBefore(nbf) {
        if (typeof nbf === "number") {
            this._payload = {
                ...this._payload,
                nbf
            };
        } else {
            this._payload = {
                ...this._payload,
                nbf: Pe(new Date) + ct(nbf)
            };
        }
        return this;
    }
    setExpirationTime(exp) {
        if (typeof exp === "number") {
            this._payload = {
                ...this._payload,
                exp
            };
        } else {
            this._payload = {
                ...this._payload,
                exp: Pe(new Date) + ct(exp)
            };
        }
        return this;
    }
    setIssuedAt(iat) {
        if (typeof iat === "undefined") {
            this._payload = {
                ...this._payload,
                iat: Pe(new Date)
            };
        } else {
            this._payload = {
                ...this._payload,
                iat
            };
        }
        return this;
    }
}
const rr = Ji(()=>{
    er();
    F();
    tr();
});
export let SignJWT;
const nr = Ji(()=>{
    st();
    E();
    v();
    rr();
    SignJWT = class or extends pt {
        setProtectedHeader(e) {
            this._protectedHeader = e;
            return this;
        }
        async sign(e, t) {
            let o = new CompactSign(l.encode(JSON.stringify(this._payload)));
            o.setProtectedHeader(this._protectedHeader);
            if (Array.isArray(this._protectedHeader?.crit) && this._protectedHeader.crit.includes("b64") && this._protectedHeader.b64 === false) {
                throw new Te("JWTs MUST NOT use unencoded payload");
            }
            return o.sign(e, t);
        }
    };
});
export async function calculateJwkThumbprint(e, t) {
    if (!K(e)) {
        throw TypeError("JWK must be an object");
    }
    if (!(t !== null && t !== undefined)) {
        t = "sha256";
    }
    if (t !== "sha256" && t !== "sha384" && t !== "sha512") {
        throw TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
    }
    let r;
    switch(e.kty){
        case "EC":
            Y(e.crv, '"crv" (Curve) Parameter');
            Y(e.x, '"x" (X Coordinate) Parameter');
            Y(e.y, '"y" (Y Coordinate) Parameter');
            r = {
                crv: e.crv,
                kty: e.kty,
                x: e.x,
                y: e.y
            };
            break;
        case "OKP":
            Y(e.crv, '"crv" (Subtype of Key Pair) Parameter');
            Y(e.x, '"x" (Public Key) Parameter');
            r = {
                crv: e.crv,
                kty: e.kty,
                x: e.x
            };
            break;
        case "RSA":
            Y(e.e, '"e" (Exponent) Parameter');
            Y(e.n, '"n" (Modulus) Parameter');
            r = {
                e: e.e,
                kty: e.kty,
                n: e.n
            };
            break;
        case "oct":
            Y(e.k, '"k" (Key Value) Parameter');
            r = {
                k: e.k,
                kty: e.kty
            };
            break;
        default:
            throw new f('"kty" (Key Type) Parameter missing or unsupported');
    }
    let o = l.encode(JSON.stringify(r));
    return w(await ue(t, o));
}
var Y = (e, t)=>{
    if (typeof e !== "string" || !e) {
        throw new Ue(`${t} missing or invalid`);
    }
};
const ar = Ji(()=>{
    Ie();
    P();
    E();
    v();
    F();
});
let ir;
const sr = Ji(()=>{
    P();
    ir = S;
});
export function decodeProtectedHeader(e) {
    let t;
    if (typeof e === "string") {
        let r = e.split(".");
        if (r.length === 3 || r.length === 5) {
            [t] = r;
        }
    } else if (typeof e === "object" && e) {
        if ("protected" in e) {
            t = e.protected;
        } else {
            throw TypeError("Token does not contain a Protected Header");
        }
    }
    try {
        if (typeof t !== "string" || !t) {
            throw Error();
        }
        let r = JSON.parse(C.decode(ir(t)));
        if (!K(r)) {
            throw Error();
        }
        return r;
    } catch (r) {
        throw TypeError("Invalid Token or Protected Header formatting");
    }
}
const cr = Ji(()=>{
    sr();
    v();
    F();
});
const pr = "WebCryptoAPI";
const dr = ()=>{};
export let cryptoRuntime;
const fr = Ji(()=>{
    dr();
    cryptoRuntime = pr;
});
const qr = Ji(()=>{
    Mt();
    Gt();
    Zt();
    st();
    nr();
    ar();
    nt();
    Qe();
    cr();
    fr();
});
qr();
