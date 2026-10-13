import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
const V = new TextEncoder;
const C = new TextDecoder;
function E(...e) {
    let t = e.reduce((acc, { length })=>acc + length, 0);
    let r = new Uint8Array(t);
    let n = 0;
    for (let i of e){
        r.set(i, n);
        n += i.length;
    }
    return r;
}
function Ke(e, t, r) {
    if (t < 0 || t >= 4294967296) {
        throw RangeError(`value must be >= 0 and <= 4294967295. Received ${t}`);
    }
    e.set([
        t >>> 24,
        t >>> 16,
        t >>> 8,
        t & 255
    ], r);
}
function xe(e) {
    let t = Math.floor(e / 4294967296);
    let r = e % 4294967296;
    let n = new Uint8Array(8);
    Ke(n, t, 0);
    Ke(n, r, 4);
    return n;
}
function fe(e) {
    let t = new Uint8Array(4);
    Ke(t, e);
    return t;
}
function A(e) {
    let t = new Uint8Array(e.length);
    for(let r = 0; r < e.length; r++){
        let n = e.charCodeAt(r);
        if (n > 127) {
            throw TypeError("non-ASCII string encountered in encode()");
        }
        t[r] = n;
    }
    return t;
}
function Ce(e) {
    if (Uint8Array.prototype.toBase64) {
        return e.toBase64();
    }
    let t = 32768;
    let r = [];
    for(let n = 0; n < e.length; n += t){
        r.push(String.fromCharCode.apply(null, e.subarray(n, n + t)));
    }
    return btoa(r.join(""));
}
function ue(e) {
    if (Uint8Array.fromBase64) {
        return Uint8Array.fromBase64(e);
    }
    let t = atob(e);
    let r = new Uint8Array(t.length);
    for(let n = 0; n < t.length; n++){
        r[n] = t.charCodeAt(n);
    }
    return r;
}
function v(e) {
    if (Uint8Array.fromBase64) {
        return Uint8Array.fromBase64(typeof e === "string" ? e : C.decode(e), {
            alphabet: "base64url"
        });
    }
    let t = e;
    if (t instanceof Uint8Array) {
        t = C.decode(t);
    }
    t = t.replace(/-/g, "+").replace(/_/g, "/");
    try {
        return ue(t);
    } catch  {
        throw TypeError("The input to be decoded is not correctly encoded.");
    }
}
function y(e) {
    let t = e;
    if (typeof t === "string") {
        t = V.encode(t);
    }
    if (Uint8Array.prototype.toBase64) {
        return t.toBase64({
            alphabet: "base64url",
            omitPadding: true
        });
    }
    return Ce(t).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
const P = (e, t = "algorithm.name")=>TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`);
const T = (algorithm, t)=>algorithm.name === t;
function Ot(hash) {
    return parseInt(hash.name.slice(4), 10);
}
function he(algorithm, t) {
    if (Ot(algorithm.hash) !== t) {
        throw P(`SHA-${t}`, "algorithm.hash");
    }
}
function Mt(e) {
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
function Ne(e, t) {
    if (t && !e.usages.includes(t)) {
        throw TypeError(`CryptoKey does not support this operation, its usages must include ${t}.`);
    }
}
function Be(e, t, r) {
    switch(t){
        case "HS256":
        case "HS384":
        case "HS512":
            {
                if (!T(e.algorithm, "HMAC")) {
                    throw P("HMAC");
                }
                he(e.algorithm, parseInt(t.slice(2), 10));
                break;
            }
        case "RS256":
        case "RS384":
        case "RS512":
            {
                if (!T(e.algorithm, "RSASSA-PKCS1-v1_5")) {
                    throw P("RSASSA-PKCS1-v1_5");
                }
                he(e.algorithm, parseInt(t.slice(2), 10));
                break;
            }
        case "PS256":
        case "PS384":
        case "PS512":
            {
                if (!T(e.algorithm, "RSA-PSS")) {
                    throw P("RSA-PSS");
                }
                he(e.algorithm, parseInt(t.slice(2), 10));
                break;
            }
        case "Ed25519":
        case "EdDSA":
            {
                if (!T(e.algorithm, "Ed25519")) {
                    throw P("Ed25519");
                }
                break;
            }
        case "ML-DSA-44":
        case "ML-DSA-65":
        case "ML-DSA-87":
            {
                if (!T(e.algorithm, t)) {
                    throw P(t);
                }
                break;
            }
        case "ES256":
        case "ES384":
        case "ES512":
            {
                if (!T(e.algorithm, "ECDSA")) {
                    throw P("ECDSA");
                }
                let n = Mt(t);
                if (e.algorithm.namedCurve !== n) {
                    throw P(n, "algorithm.namedCurve");
                }
                break;
            }
        default:
            throw TypeError("CryptoKey does not support this operation");
    }
    Ne(e, r);
}
function H(e, t, r) {
    switch(t){
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
            {
                if (!T(e.algorithm, "AES-GCM")) {
                    throw P("AES-GCM");
                }
                let n = parseInt(t.slice(1, 4), 10);
                if (e.algorithm.length !== n) {
                    throw P(n, "algorithm.length");
                }
                break;
            }
        case "A128KW":
        case "A192KW":
        case "A256KW":
            {
                if (!T(e.algorithm, "AES-KW")) {
                    throw P("AES-KW");
                }
                let n = parseInt(t.slice(1, 4), 10);
                if (e.algorithm.length !== n) {
                    throw P(n, "algorithm.length");
                }
                break;
            }
        case "ECDH":
            {
                switch(e.algorithm.name){
                    case "ECDH":
                    case "X25519":
                        break;
                    default:
                        throw P("ECDH or X25519");
                }
                break;
            }
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
            if (!T(e.algorithm, "PBKDF2")) {
                throw P("PBKDF2");
            }
            break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            {
                if (!T(e.algorithm, "RSA-OAEP")) {
                    throw P("RSA-OAEP");
                }
                he(e.algorithm, parseInt(t.slice(9), 10) || 1);
                break;
            }
        default:
            throw TypeError("CryptoKey does not support this operation");
    }
    Ne(e, r);
}
function Le(e, t, ...r) {
    r = r.filter(Boolean);
    if (r.length > 2) {
        let n = r.pop();
        e += `one of type ${r.join(", ")}, or ${n}.`;
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
        if (t.constructor?.name) {
            e += ` Received an instance of ${t.constructor.name}`;
        }
    }
    return e;
}
const U = (e, ...t)=>Le("Key must be ", e, ...t);
const Pe = (e, t, ...r)=>Le(`Key for the ${e} algorithm must be `, t, ...r);
const X3o = {};
Mr(X3o, {
    JOSEAlgNotAllowed: ()=>z,
    JOSEError: ()=>x,
    JOSENotSupported: ()=>f,
    JWEDecryptionFailed: ()=>k,
    JWEInvalid: ()=>c,
    JWKInvalid: ()=>$e,
    JWKSInvalid: ()=>Ge,
    JWKSMultipleMatchingKeys: ()=>ze,
    JWKSNoMatchingKey: ()=>Ve,
    JWKSTimeout: ()=>Fe,
    JWSInvalid: ()=>h,
    JWSSignatureVerificationFailed: ()=>me,
    JWTClaimValidationFailed: ()=>ZG,
    JWTExpired: ()=>j,
    JWTInvalid: ()=>O
});
class x extends Error {
    static code = "ERR_JOSE_GENERIC";
    code = "ERR_JOSE_GENERIC";
    constructor(e, t){
        super(e, t);
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
class ZG extends x {
    static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    claim;
    reason;
    payload;
    constructor(e, t, r = "unspecified", n = "unspecified"){
        super(e, {
            cause: {
                claim: r,
                reason: n,
                payload: t
            }
        });
        this.claim = r;
        this.reason = n;
        this.payload = t;
    }
}
class j extends x {
    static code = "ERR_JWT_EXPIRED";
    code = "ERR_JWT_EXPIRED";
    claim;
    reason;
    payload;
    constructor(e, t, r = "unspecified", n = "unspecified"){
        super(e, {
            cause: {
                claim: r,
                reason: n,
                payload: t
            }
        });
        this.claim = r;
        this.reason = n;
        this.payload = t;
    }
}
class z extends x {
    static code = "ERR_JOSE_ALG_NOT_ALLOWED";
    code = "ERR_JOSE_ALG_NOT_ALLOWED";
}
class f extends x {
    static code = "ERR_JOSE_NOT_SUPPORTED";
    code = "ERR_JOSE_NOT_SUPPORTED";
}
class k extends x {
    static code = "ERR_JWE_DECRYPTION_FAILED";
    code = "ERR_JWE_DECRYPTION_FAILED";
    constructor(e = "decryption operation failed", t){
        super(e, t);
    }
}
class c extends x {
    static code = "ERR_JWE_INVALID";
    code = "ERR_JWE_INVALID";
}
class h extends x {
    static code = "ERR_JWS_INVALID";
    code = "ERR_JWS_INVALID";
}
class O extends x {
    static code = "ERR_JWT_INVALID";
    code = "ERR_JWT_INVALID";
}
class $e extends x {
    static code = "ERR_JWK_INVALID";
    code = "ERR_JWK_INVALID";
}
class Ge extends x {
    static code = "ERR_JWKS_INVALID";
    code = "ERR_JWKS_INVALID";
}
class Ve extends x {
    static code = "ERR_JWKS_NO_MATCHING_KEY";
    code = "ERR_JWKS_NO_MATCHING_KEY";
    constructor(e = "no applicable key found in the JSON Web Key Set", t){
        super(e, t);
    }
}
class ze extends x {
    [Symbol.asyncIterator];
    static code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    constructor(e = "multiple matching keys found in the JSON Web Key Set", t){
        super(e, t);
    }
}
class Fe extends x {
    static code = "ERR_JWKS_TIMEOUT";
    code = "ERR_JWKS_TIMEOUT";
    constructor(e = "request timed out", t){
        super(e, t);
    }
}
class me extends x {
    static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    constructor(e = "signature verification failed", t){
        super(e, t);
    }
}
function X(e) {
    if (!D(e)) {
        throw Error("CryptoKey instance expected");
    }
}
var D = (e)=>{
    if (e?.[Symbol.toStringTag] === "CryptoKey") {
        return true;
    }
    try {
        return e instanceof CryptoKey;
    } catch  {
        return false;
    }
};
const ee = (e)=>e?.[Symbol.toStringTag] === "KeyObject";
const We = (e)=>D(e) || ee(e);
function ye(e) {
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
const M = (enc)=>crypto.getRandomValues(new Uint8Array(ye(enc) >> 3));
function le(e, t) {
    let r = e.byteLength << 3;
    if (r !== t) {
        throw new c(`Invalid Content Encryption Key length. Expected ${t} bits, got ${r} bits`);
    }
}
function ke(e) {
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
const _t = (e)=>crypto.getRandomValues(new Uint8Array(ke(e) >> 3));
function Xe(e, t) {
    if (t.length << 3 !== ke(e)) {
        throw new c("Invalid Initialization Vector length");
    }
}
async function Ye(e, t, r) {
    if (!(t instanceof Uint8Array)) {
        throw TypeError(U(t, "Uint8Array"));
    }
    let keySize = parseInt(e.slice(1, 4), 10);
    let encKey = await crypto.subtle.importKey("raw", t.subarray(keySize >> 3), "AES-CBC", false, [
        r
    ]);
    let macKey = await crypto.subtle.importKey("raw", t.subarray(0, keySize >> 3), {
        hash: `SHA-${keySize << 1}`,
        name: "HMAC"
    }, false, [
        "sign"
    ]);
    return {
        encKey,
        macKey,
        keySize
    };
}
async function qe(macKey, t, keySize) {
    return new Uint8Array((await crypto.subtle.sign("HMAC", macKey, t)).slice(0, keySize >> 3));
}
async function Nt(e, t, r, n, i) {
    let { encKey, macKey, keySize } = await Ye(e, r, "encrypt");
    let ciphertext = new Uint8Array(await crypto.subtle.encrypt({
        iv: n,
        name: "AES-CBC"
    }, encKey, t));
    let d = E(i, n, ciphertext, xe(i.length << 3));
    let u = await qe(macKey, d, keySize);
    return {
        ciphertext,
        tag: u,
        iv: n
    };
}
async function Bt(e, t) {
    if (!(e instanceof Uint8Array)) {
        throw TypeError("First argument must be a buffer");
    }
    if (!(t instanceof Uint8Array)) {
        throw TypeError("Second argument must be a buffer");
    }
    let r = {
        name: "HMAC",
        hash: "SHA-256"
    };
    let n = await crypto.subtle.generateKey(r, false, [
        "sign"
    ]);
    let i = new Uint8Array(await crypto.subtle.sign(r, n, e));
    let o = new Uint8Array(await crypto.subtle.sign(r, n, t));
    let a = 0;
    let s = -1;
    while(++s < 32){
        a |= i[s] ^ o[s];
    }
    return a === 0;
}
async function Lt(e, t, r, n, i, o) {
    let { encKey, macKey, keySize } = await Ye(e, t, "decrypt");
    let d = E(o, n, r, xe(o.length << 3));
    let u = await qe(macKey, d, keySize);
    let m;
    try {
        m = await Bt(i, u);
    } catch  {}
    if (!m) {
        throw new k;
    }
    let w;
    try {
        w = new Uint8Array(await crypto.subtle.decrypt({
            iv: n,
            name: "AES-CBC"
        }, encKey, r));
    } catch  {}
    if (!w) {
        throw new k;
    }
    return w;
}
async function $t(e, t, r, n, i) {
    let o;
    if (r instanceof Uint8Array) {
        o = await crypto.subtle.importKey("raw", r, "AES-GCM", false, [
            "encrypt"
        ]);
    } else {
        H(r, e, "encrypt");
        o = r;
    }
    let a = new Uint8Array(await crypto.subtle.encrypt({
        additionalData: i,
        iv: n,
        name: "AES-GCM",
        tagLength: 128
    }, o, t));
    let s = a.slice(-16);
    return {
        ciphertext: a.slice(0, -16),
        tag: s,
        iv: n
    };
}
async function Gt(e, t, r, n, i, o) {
    let a;
    if (t instanceof Uint8Array) {
        a = await crypto.subtle.importKey("raw", t, "AES-GCM", false, [
            "decrypt"
        ]);
    } else {
        H(t, e, "decrypt");
        a = t;
    }
    try {
        return new Uint8Array(await crypto.subtle.decrypt({
            additionalData: o,
            iv: n,
            name: "AES-GCM",
            tagLength: 128
        }, a, E(r, i)));
    } catch  {
        throw new k;
    }
}
const Qe = "Unsupported JWE Content Encryption Algorithm";
async function we(e, t, r, n, i) {
    if (!D(r) && !(r instanceof Uint8Array)) {
        throw TypeError(U(r, "CryptoKey", "KeyObject", "Uint8Array", "JSON Web Key"));
    }
    if (n) {
        Xe(e, n);
    } else {
        n = _t(e);
    }
    switch(e){
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
            if (r instanceof Uint8Array) {
                le(r, parseInt(e.slice(-3), 10));
            }
            return Nt(e, t, r, n, i);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
            if (r instanceof Uint8Array) {
                le(r, parseInt(e.slice(1, 4), 10));
            }
            return $t(e, t, r, n, i);
        default:
            throw new f(Qe);
    }
}
async function Se(e, t, r, n, i, o) {
    if (!D(t) && !(t instanceof Uint8Array)) {
        throw TypeError(U(t, "CryptoKey", "KeyObject", "Uint8Array", "JSON Web Key"));
    }
    if (!n) {
        throw new c("JWE Initialization Vector missing");
    }
    if (!i) {
        throw new c("JWE Authentication Tag missing");
    }
    Xe(e, n);
    switch(e){
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
            if (t instanceof Uint8Array) {
                le(t, parseInt(e.slice(-3), 10));
            }
            return Lt(e, t, r, n, i, o);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
            if (t instanceof Uint8Array) {
                le(t, parseInt(e.slice(1, 4), 10));
            }
            return Gt(e, t, r, n, i, o);
        default:
            throw new f(Qe);
    }
}
const Ze = Symbol();
function W(e, t) {
    if (e) {
        throw TypeError(`${t} can only be called once`);
    }
}
function I(e, t, r) {
    try {
        return v(e);
    } catch  {
        throw new r(`Failed to base64url decode the ${t}`);
    }
}
async function je(e, t) {
    let r = `SHA-${e.slice(-3)}`;
    return new Uint8Array(await crypto.subtle.digest(r, t));
}
const Vt = (e)=>typeof e === "object" && e !== null;
function b(e) {
    if (!Vt(e) || Object.prototype.toString.call(e) !== "[object Object]") {
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
function _(...e) {
    let t = e.filter(Boolean);
    if (t.length === 0 || t.length === 1) {
        return true;
    }
    let r;
    for (let n of t){
        let i = Object.keys(n);
        if (!r || r.size === 0) {
            r = new Set(i);
            continue;
        }
        for (let o of i){
            if (r.has(o)) {
                return false;
            }
            r.add(o);
        }
    }
    return true;
}
const te = (e)=>b(e) && typeof e.kty === "string";
const et = (e)=>e.kty !== "oct" && (e.kty === "AKP" && typeof e.priv === "string" || typeof e.d === "string");
const tt = (e)=>e.kty !== "oct" && e.d === undefined && e.priv === undefined;
const rt = (e)=>e.kty === "oct" && typeof e.k === "string";
function nt(e, t) {
    if (e.algorithm.length !== parseInt(t.slice(1, 4), 10)) {
        throw TypeError(`Invalid key size for alg: ${t}`);
    }
}
function it(e, t, r) {
    if (e instanceof Uint8Array) {
        return crypto.subtle.importKey("raw", e, "AES-KW", true, [
            r
        ]);
    }
    H(e, t, r);
    return e;
}
async function re(e, t, cek) {
    let n = await it(t, e, "wrapKey");
    nt(n, e);
    let i = await crypto.subtle.importKey("raw", cek, {
        hash: "SHA-256",
        name: "HMAC"
    }, true, [
        "sign"
    ]);
    return new Uint8Array(await crypto.subtle.wrapKey("raw", i, n, "AES-KW"));
}
async function ne(e, t, r) {
    let n = await it(t, e, "unwrapKey");
    nt(n, e);
    let i = await crypto.subtle.unwrapKey("raw", r, n, "AES-KW", {
        hash: "SHA-256",
        name: "HMAC"
    }, true, [
        "sign"
    ]);
    return new Uint8Array(await crypto.subtle.exportKey("raw", i));
}
function Ie(e) {
    return E(fe(e.length), e);
}
async function Ft(e, t, r) {
    let n = t >> 3;
    let i = 32;
    let o = Math.ceil(n / 32);
    let a = new Uint8Array(o * 32);
    for(let s = 1; s <= o; s++){
        let p = new Uint8Array(4 + e.length + r.length);
        p.set(fe(s), 0);
        p.set(e, 4);
        p.set(r, 4 + e.length);
        let d = await je("sha256", p);
        a.set(d, (s - 1) * 32);
    }
    return a.slice(0, n);
}
async function He(e, t, r, n, i = new Uint8Array, o = new Uint8Array) {
    H(e, "ECDH");
    H(t, "ECDH", "deriveBits");
    let a = Ie(A(r));
    let s = Ie(i);
    let p = Ie(o);
    let d = fe(n);
    let u = new Uint8Array;
    let m = E(a, s, p, d, u);
    let w = new Uint8Array(await crypto.subtle.deriveBits({
        name: e.algorithm.name,
        public: e
    }, t, kt(e)));
    return Ft(w, n, m);
}
function kt(e) {
    if (e.algorithm.name === "X25519") {
        return 256;
    }
    return Math.ceil(parseInt(e.algorithm.namedCurve.slice(-3), 10) / 8) << 3;
}
function Je(e) {
    switch(e.algorithm.namedCurve){
        case "P-256":
        case "P-384":
        case "P-521":
            return true;
        default:
            return e.algorithm.name === "X25519";
    }
}
function Yt(e, t) {
    if (e instanceof Uint8Array) {
        return crypto.subtle.importKey("raw", e, "PBKDF2", false, [
            "deriveBits"
        ]);
    }
    H(e, t, "deriveBits");
    return e;
}
const qt = (e, t)=>E(A(e), Uint8Array.of(0), t);
async function at(e, t, iterations, n) {
    if (!(e instanceof Uint8Array) || e.length < 8) {
        throw new c("PBES2 Salt Input must be 8 or more octets");
    }
    let salt = qt(t, e);
    let o = parseInt(t.slice(13, 16), 10);
    let a = {
        hash: `SHA-${t.slice(8, 11)}`,
        iterations,
        name: "PBKDF2",
        salt
    };
    let s = await Yt(n, t);
    return new Uint8Array(await crypto.subtle.deriveBits(a, s, o));
}
async function st(alg, t, cek, p2c = 2048, i = crypto.getRandomValues(new Uint8Array(16))) {
    let o = await at(i, alg, p2c, t);
    return {
        encryptedKey: await re(alg.slice(-6), o, cek),
        p2c,
        p2s: y(i)
    };
}
async function ct(alg, t, r, n, i) {
    let o = await at(i, alg, n, t);
    return ne(alg.slice(-6), o, r);
}
function ie(e, t) {
    if (e.startsWith("RS") || e.startsWith("PS")) {
        let { modulusLength } = t.algorithm;
        if (typeof modulusLength !== "number" || modulusLength < 2048) {
            throw TypeError(`${e} requires key modulusLength to be 2048 bits or larger`);
        }
    }
}
function pt(alg, algorithm) {
    let hash = `SHA-${alg.slice(-3)}`;
    switch(alg){
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
                saltLength: parseInt(alg.slice(-3), 10) >> 3
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
        case "Ed25519":
        case "EdDSA":
            return {
                name: "Ed25519"
            };
        case "ML-DSA-44":
        case "ML-DSA-65":
        case "ML-DSA-87":
            return {
                name: alg
            };
        default:
            throw new f(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}
async function dt(alg, t, r) {
    if (t instanceof Uint8Array) {
        if (!alg.startsWith("HS")) {
            throw TypeError(U(t, "CryptoKey", "KeyObject", "JSON Web Key"));
        }
        return crypto.subtle.importKey("raw", t, {
            hash: `SHA-${alg.slice(-3)}`,
            name: "HMAC"
        }, false, [
            r
        ]);
    }
    Be(t, alg, r);
    return t;
}
async function ft(alg, t, r) {
    let n = await dt(alg, t, "sign");
    ie(alg, n);
    let i = await crypto.subtle.sign(pt(alg, n.algorithm), n, r);
    return new Uint8Array(i);
}
async function ut(alg, t, r, n) {
    let i = await dt(alg, t, "verify");
    ie(alg, i);
    let o = pt(alg, i.algorithm);
    try {
        return await crypto.subtle.verify(o, i, r, n);
    } catch  {
        return false;
    }
}
const ht = (e)=>{
    switch(e){
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            return "RSA-OAEP";
        default:
            throw new f(`alg ${e} is not supported either by JOSE or your javascript runtime`);
    }
};
async function mt(alg, t, cek) {
    H(t, alg, "encrypt");
    ie(alg, t);
    return new Uint8Array(await crypto.subtle.encrypt(ht(alg), t, cek));
}
async function lt(alg, t, r) {
    H(t, alg, "decrypt");
    ie(alg, t);
    return new Uint8Array(await crypto.subtle.decrypt(ht(alg), t, r));
}
const Ee = 'Invalid or unsupported JWK "alg" (Algorithm) Parameter value';
function jt(e) {
    let algorithm;
    let keyUsages;
    switch(e.kty){
        case "AKP":
            {
                switch(e.alg){
                    case "ML-DSA-44":
                    case "ML-DSA-65":
                    case "ML-DSA-87":
                        algorithm = {
                            name: e.alg
                        };
                        keyUsages = e.priv ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    default:
                        throw new f(Ee);
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
                        throw new f(Ee);
                }
                break;
            }
        case "EC":
            {
                switch(e.alg){
                    case "ES256":
                    case "ES384":
                    case "ES512":
                        algorithm = {
                            name: "ECDSA",
                            namedCurve: ({
                                ES256: "P-256",
                                ES384: "P-384",
                                ES512: "P-521"
                            })[e.alg]
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
                        throw new f(Ee);
                }
                break;
            }
        case "OKP":
            {
                switch(e.alg){
                    case "Ed25519":
                    case "EdDSA":
                        algorithm = {
                            name: "Ed25519"
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
                        throw new f(Ee);
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
async function Y(e) {
    if (!e.alg) {
        throw TypeError('"alg" argument is required when "jwk.alg" is not present');
    }
    let { algorithm, keyUsages } = jt(e);
    let n = {
        ...e
    };
    if (n.kty !== "AKP") {
        delete n.alg;
    }
    delete n.use;
    return crypto.subtle.importKey("jwk", n, algorithm, e.ext ?? (e.d || e.priv ? false : true), e.key_ops ?? keyUsages);
}
const q = "given KeyObject instance cannot be used for this algorithm";
let Q;
const yt = async (e, t, r, n = false)=>{
    Q ||= new WeakMap;
    let i = Q.get(e);
    if (i?.[r]) {
        return i[r];
    }
    let o = await Y({
        ...t,
        alg: r
    });
    if (n) {
        Object.freeze(e);
    }
    if (!i) {
        Q.set(e, {
            [r]: o
        });
    } else {
        i[r] = o;
    }
    return o;
};
const er = (e, t)=>{
    Q ||= new WeakMap;
    let r = Q.get(e);
    if (r?.[t]) {
        return r[t];
    }
    let n = e.type === "public";
    let i = n ? true : false;
    let o;
    if (e.asymmetricKeyType === "x25519") {
        switch(t){
            case "ECDH-ES":
            case "ECDH-ES+A128KW":
            case "ECDH-ES+A192KW":
            case "ECDH-ES+A256KW":
                break;
            default:
                throw TypeError(q);
        }
        o = e.toCryptoKey(e.asymmetricKeyType, i, n ? [] : [
            "deriveBits"
        ]);
    }
    if (e.asymmetricKeyType === "ed25519") {
        if (t !== "EdDSA" && t !== "Ed25519") {
            throw TypeError(q);
        }
        o = e.toCryptoKey(e.asymmetricKeyType, i, [
            n ? "verify" : "sign"
        ]);
    }
    switch(e.asymmetricKeyType){
        case "ml-dsa-44":
        case "ml-dsa-65":
        case "ml-dsa-87":
            {
                if (t !== e.asymmetricKeyType.toUpperCase()) {
                    throw TypeError(q);
                }
                o = e.toCryptoKey(e.asymmetricKeyType, i, [
                    n ? "verify" : "sign"
                ]);
            }
    }
    if (e.asymmetricKeyType === "rsa") {
        let hash;
        switch(t){
            case "RSA-OAEP":
                hash = "SHA-1";
                break;
            case "RS256":
            case "PS256":
            case "RSA-OAEP-256":
                hash = "SHA-256";
                break;
            case "RS384":
            case "PS384":
            case "RSA-OAEP-384":
                hash = "SHA-384";
                break;
            case "RS512":
            case "PS512":
            case "RSA-OAEP-512":
                hash = "SHA-512";
                break;
            default:
                throw TypeError(q);
        }
        if (t.startsWith("RSA-OAEP")) {
            return e.toCryptoKey({
                name: "RSA-OAEP",
                hash
            }, i, n ? [
                "encrypt"
            ] : [
                "decrypt"
            ]);
        }
        o = e.toCryptoKey({
            name: t.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5",
            hash
        }, i, [
            n ? "verify" : "sign"
        ]);
    }
    if (e.asymmetricKeyType === "ec") {
        let s = new Map([
            [
                "prime256v1",
                "P-256"
            ],
            [
                "secp384r1",
                "P-384"
            ],
            [
                "secp521r1",
                "P-521"
            ]
        ]).get(e.asymmetricKeyDetails?.namedCurve);
        if (!s) {
            throw TypeError(q);
        }
        let p = {
            ES256: "P-256",
            ES384: "P-384",
            ES512: "P-521"
        };
        if (p[t] && s === p[t]) {
            o = e.toCryptoKey({
                name: "ECDSA",
                namedCurve: s
            }, i, [
                n ? "verify" : "sign"
            ]);
        }
        if (t.startsWith("ECDH-ES")) {
            o = e.toCryptoKey({
                name: "ECDH",
                namedCurve: s
            }, i, n ? [] : [
                "deriveBits"
            ]);
        }
    }
    if (!o) {
        throw TypeError(q);
    }
    if (!r) {
        Q.set(e, {
            [t]: o
        });
    } else {
        r[t] = o;
    }
    return o;
};
async function R(e, alg) {
    if (e instanceof Uint8Array) {
        return e;
    }
    if (D(e)) {
        return e;
    }
    if (ee(e)) {
        if (e.type === "secret") {
            return e.export();
        }
        if ("toCryptoKey" in e && typeof e.toCryptoKey === "function") {
            try {
                return er(e, alg);
            } catch (error) {
                if (error instanceof TypeError) {
                    throw error;
                }
            }
        }
        let r = e.export({
            format: "jwk"
        });
        return yt(e, r, alg);
    }
    if (te(e)) {
        if (e.k) {
            return v(e.k);
        }
        return yt(e, e, alg, true);
    }
    throw Error("unreachable");
}
const ve = (e, t)=>{
    if (e.byteLength !== t.length) {
        return false;
    }
    for(let r = 0; r < e.byteLength; r++){
        if (e[r] !== t[r]) {
            return false;
        }
    }
    return true;
};
const tr = (data)=>({
        data,
        pos: 0
    });
const oe = (e)=>{
    let t = e.data[e.pos++];
    if (t & 128) {
        let r = t & 127;
        let n = 0;
        for(let i = 0; i < r; i++){
            n = n << 8 | e.data[e.pos++];
        }
        return n;
    }
    return t;
};
const ae = (e, t, r)=>{
    if (e.data[e.pos++] !== t) {
        throw Error(r);
    }
};
const wt = (e, t)=>{
    let r = e.data.subarray(e.pos, e.pos + t);
    e.pos += t;
    return r;
};
const rr = (e)=>{
    ae(e, 6, "Expected algorithm OID");
    let t = oe(e);
    return wt(e, t);
};
function nr(e) {
    ae(e, 48, "Invalid PKCS#8 structure");
    oe(e);
    ae(e, 2, "Expected version field");
    let t = oe(e);
    e.pos += t;
    ae(e, 48, "Expected algorithm identifier");
    let algIdLength = oe(e);
    return {
        algIdStart: e.pos,
        algIdLength
    };
}
const ir = (e)=>{
    let t = rr(e);
    if (ve(t, [
        43,
        101,
        110
    ])) {
        return "X25519";
    }
    if (!ve(t, [
        42,
        134,
        72,
        206,
        61,
        2,
        1
    ])) {
        throw Error("Unsupported key algorithm");
    }
    ae(e, 6, "Expected curve OID");
    let r = oe(e);
    let n = wt(e, r);
    for (let { name, oid } of [
        {
            name: "P-256",
            oid: [
                42,
                134,
                72,
                206,
                61,
                3,
                1,
                7
            ]
        },
        {
            name: "P-384",
            oid: [
                43,
                129,
                4,
                0,
                34
            ]
        },
        {
            name: "P-521",
            oid: [
                43,
                129,
                4,
                0,
                35
            ]
        }
    ]){
        if (ve(n, oid)) {
            return name;
        }
    }
    throw Error("Unsupported named curve");
};
const or = async (e, t, r, n)=>{
    let i;
    let o;
    let a = e === "spki";
    let s = ()=>{
        if (a) {
            return [
                "verify"
            ];
        }
        return [
            "sign"
        ];
    };
    let p = ()=>{
        if (a) {
            return [
                "encrypt",
                "wrapKey"
            ];
        }
        return [
            "decrypt",
            "unwrapKey"
        ];
    };
    switch(r){
        case "PS256":
        case "PS384":
        case "PS512":
            i = {
                name: "RSA-PSS",
                hash: `SHA-${r.slice(-3)}`
            };
            o = s();
            break;
        case "RS256":
        case "RS384":
        case "RS512":
            i = {
                name: "RSASSA-PKCS1-v1_5",
                hash: `SHA-${r.slice(-3)}`
            };
            o = s();
            break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            i = {
                name: "RSA-OAEP",
                hash: `SHA-${parseInt(r.slice(-3), 10) || 1}`
            };
            o = p();
            break;
        case "ES256":
        case "ES384":
        case "ES512":
            {
                i = {
                    name: "ECDSA",
                    namedCurve: ({
                        ES256: "P-256",
                        ES384: "P-384",
                        ES512: "P-521"
                    })[r]
                };
                o = s();
                break;
            }
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
            {
                try {
                    let d = n.getNamedCurve(t);
                    i = d === "X25519" ? {
                        name: "X25519"
                    } : {
                        name: "ECDH",
                        namedCurve: d
                    };
                } catch (d) {
                    throw new f("Invalid or unsupported key format");
                }
                o = a ? [] : [
                    "deriveBits"
                ];
                break;
            }
        case "Ed25519":
        case "EdDSA":
            i = {
                name: "Ed25519"
            };
            o = s();
            break;
        case "ML-DSA-44":
        case "ML-DSA-65":
        case "ML-DSA-87":
            i = {
                name: r
            };
            o = s();
            break;
        default:
            throw new f('Invalid or unsupported "alg" (Algorithm) value');
    }
    return crypto.subtle.importKey(e, t, i, n?.extractable ?? (a ? true : false), o);
};
const ar = (e, t)=>ue(e.replace(t, ""));
const St = (e, t, r)=>{
    let n = ar(e, /(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g);
    let i = r;
    if (t?.startsWith?.("ECDH-ES")) {
        i ||= {};
        i.getNamedCurve = (o)=>{
            let a = tr(o);
            nr(a);
            return ir(a);
        };
    }
    return or("pkcs8", n, t, i);
};
async function Ker(e, t, r) {
    if (typeof e !== "string" || e.indexOf("-----BEGIN PRIVATE KEY-----") !== 0) {
        throw TypeError('"pkcs8" must be PKCS#8 formatted string');
    }
    return St(e, t, r);
}
async function k2t(e, t, r) {
    if (!b(e)) {
        throw TypeError("JWK must be an object");
    }
    let ext;
    t ??= e.alg;
    ext ??= r?.extractable ?? e.ext;
    switch(e.kty){
        case "oct":
            if (typeof e.k !== "string" || !e.k) {
                throw TypeError('missing "k" (Key Value) Parameter value');
            }
            return v(e.k);
        case "RSA":
            if ("oth" in e && e.oth !== undefined) {
                throw new f('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
            }
            return Y({
                ...e,
                alg: t,
                ext
            });
        case "AKP":
            {
                if (typeof e.alg !== "string" || !e.alg) {
                    throw TypeError('missing "alg" (Algorithm) Parameter value');
                }
                if (t !== undefined && t !== e.alg) {
                    throw TypeError("JWK alg and alg option value mismatch");
                }
                return Y({
                    ...e,
                    ext
                });
            }
        case "EC":
        case "OKP":
            return Y({
                ...e,
                alg: t,
                ext
            });
        default:
            throw new f('Unsupported "kty" (Key Type) Parameter value');
    }
}
async function Et(e) {
    if (ee(e)) {
        if (e.type === "secret") {
            e = e.export();
        } else {
            return e.export({
                format: "jwk"
            });
        }
    }
    if (e instanceof Uint8Array) {
        return {
            kty: "oct",
            k: y(e)
        };
    }
    if (!D(e)) {
        throw TypeError(U(e, "CryptoKey", "KeyObject", "Uint8Array"));
    }
    if (!e.extractable) {
        throw TypeError("non-extractable CryptoKey cannot be exported as a JWK");
    }
    let { ext, key_ops, alg, use, ...rest } = await crypto.subtle.exportKey("jwk", e);
    if (rest.kty === "AKP") {
        rest.alg = alg;
    }
    return rest;
}
async function At(e) {
    return Et(e);
}
async function gt(alg, t, cek, n) {
    let i = alg.slice(0, 7);
    let o = await we(i, cek, t, n, new Uint8Array);
    return {
        encryptedKey: o.ciphertext,
        iv: y(o.iv),
        tag: y(o.tag)
    };
}
async function bt(alg, t, r, n, i) {
    let o = alg.slice(0, 7);
    return Se(o, t, r, n, i, new Uint8Array);
}
const Kt = 'Invalid or unsupported "alg" (JWE Algorithm) header value';
function se(e) {
    if (e === undefined) {
        throw new c("JWE Encrypted Key missing");
    }
}
async function xt(alg, t, r, n, i) {
    switch(alg){
        case "dir":
            {
                if (r !== undefined) {
                    throw new c("Encountered unexpected JWE Encrypted Key");
                }
                return t;
            }
        case "ECDH-ES":
            if (r !== undefined) {
                throw new c("Encountered unexpected JWE Encrypted Key");
            }
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
            {
                if (!b(n.epk)) {
                    throw new c('JOSE Header "epk" (Ephemeral Public Key) missing or invalid');
                }
                X(t);
                if (!Je(t)) {
                    throw new f("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                }
                let o = await k2t(n.epk, alg);
                X(o);
                let a;
                let s;
                if (n.apu !== undefined) {
                    if (typeof n.apu !== "string") {
                        throw new c('JOSE Header "apu" (Agreement PartyUInfo) invalid');
                    }
                    a = I(n.apu, "apu", c);
                }
                if (n.apv !== undefined) {
                    if (typeof n.apv !== "string") {
                        throw new c('JOSE Header "apv" (Agreement PartyVInfo) invalid');
                    }
                    s = I(n.apv, "apv", c);
                }
                let p = await He(o, t, alg === "ECDH-ES" ? n.enc : alg, alg === "ECDH-ES" ? ye(n.enc) : parseInt(alg.slice(-5, -2), 10), a, s);
                if (alg === "ECDH-ES") {
                    return p;
                }
                se(r);
                return ne(alg.slice(-6), p, r);
            }
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            se(r);
            X(t);
            return lt(alg, t, r);
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
            {
                se(r);
                if (typeof n.p2c !== "number") {
                    throw new c('JOSE Header "p2c" (PBES2 Count) missing or invalid');
                }
                let o = i?.maxPBES2Count || 10000;
                if (n.p2c > o) {
                    throw new c('JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds');
                }
                if (typeof n.p2s !== "string") {
                    throw new c('JOSE Header "p2s" (PBES2 Salt) missing or invalid');
                }
                let a;
                a = I(n.p2s, "p2s", c);
                return ct(alg, t, r, n.p2c, a);
            }
        case "A128KW":
        case "A192KW":
        case "A256KW":
            se(r);
            return ne(alg, t, r);
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW":
            {
                se(r);
                if (typeof n.iv !== "string") {
                    throw new c('JOSE Header "iv" (Initialization Vector) missing or invalid');
                }
                if (typeof n.tag !== "string") {
                    throw new c('JOSE Header "tag" (Authentication Tag) missing or invalid');
                }
                let o;
                o = I(n.iv, "iv", c);
                let a;
                a = I(n.tag, "tag", c);
                return bt(alg, t, r, o, a);
            }
        default:
            throw new f(Kt);
    }
}
async function Ct(alg, enc, r, n, i = {}) {
    let encryptedKey;
    let parameters;
    let cek;
    switch(alg){
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
                X(r);
                if (!Je(r)) {
                    throw new f("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                }
                let { apu, apv } = i;
                let u;
                if (i.epk) {
                    u = await R(i.epk, alg);
                } else {
                    u = (await crypto.subtle.generateKey(r.algorithm, true, [
                        "deriveBits"
                    ])).privateKey;
                }
                let { x, y: y_1, crv, kty } = await At(u);
                let l = await He(r, u, alg === "ECDH-ES" ? enc : alg, alg === "ECDH-ES" ? ye(enc) : parseInt(alg.slice(-5, -2), 10), apu, apv);
                parameters = {
                    epk: {
                        x,
                        crv,
                        kty
                    }
                };
                if (kty === "EC") {
                    parameters.epk.y = y_1;
                }
                if (apu) {
                    parameters.apu = y(apu);
                }
                if (apv) {
                    parameters.apv = y(apv);
                }
                if (alg === "ECDH-ES") {
                    cek = l;
                    break;
                }
                cek = n || M(enc);
                let g = alg.slice(-6);
                encryptedKey = await re(g, l, cek);
                break;
            }
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            {
                cek = n || M(enc);
                X(r);
                encryptedKey = await mt(alg, r, cek);
                break;
            }
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
            {
                cek = n || M(enc);
                let { p2c, p2s } = i;
                ({ encryptedKey, ...parameters } = await st(alg, r, cek, p2c, p2s));
                break;
            }
        case "A128KW":
        case "A192KW":
        case "A256KW":
            {
                cek = n || M(enc);
                encryptedKey = await re(alg, r, cek);
                break;
            }
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW":
            {
                cek = n || M(enc);
                let { iv } = i;
                ({ encryptedKey, ...parameters } = await gt(alg, r, cek, iv));
                break;
            }
        default:
            throw new f(Kt);
    }
    return {
        cek,
        encryptedKey,
        parameters
    };
}
function N(e, t, r, n, i) {
    if (i.crit !== undefined && n?.crit === undefined) {
        throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!n || n.crit === undefined) {
        return new Set;
    }
    if (!Array.isArray(n.crit) || n.crit.length === 0 || n.crit.some((a)=>typeof a !== "string" || a.length === 0)) {
        throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let o;
    if (r !== undefined) {
        o = new Map([
            ...Object.entries(r),
            ...t.entries()
        ]);
    } else {
        o = t;
    }
    for (let a of n.crit){
        if (!o.has(a)) {
            throw new f(`Extension Header Parameter "${a}" is not recognized`);
        }
        if (i[a] === undefined) {
            throw new e(`Extension Header Parameter "${a}" is missing`);
        }
        if (o.get(a) && n[a] === undefined) {
            throw new e(`Extension Header Parameter "${a}" MUST be integrity protected`);
        }
    }
    return new Set(n.crit);
}
function ce(e, t) {
    if (t !== undefined && (!Array.isArray(t) || t.some((r)=>typeof r !== "string"))) {
        throw TypeError(`"${e}" option must be an array of strings`);
    }
    if (!t) {
        return;
    }
    return new Set(t);
}
const Z = (e)=>e?.[Symbol.toStringTag];
const Te = (e, t, r)=>{
    if (t.use !== undefined) {
        let n;
        switch(r){
            case "sign":
            case "verify":
                n = "sig";
                break;
            case "encrypt":
            case "decrypt":
                n = "enc";
                break;
        }
        if (t.use !== n) {
            throw TypeError(`Invalid key for this operation, its "use" must be "${n}" when present`);
        }
    }
    if (t.alg !== undefined && t.alg !== e) {
        throw TypeError(`Invalid key for this operation, its "alg" must be "${e}" when present`);
    }
    if (Array.isArray(t.key_ops)) {
        let n;
        switch(true){
            case r === "sign" || r === "verify":
            case e === "dir":
            case e.includes("CBC-HS"):
                n = r;
                break;
            case e.startsWith("PBES2"):
                n = "deriveBits";
                break;
            case /^A\d{3}(?:GCM)?(?:KW)?$/.test(e):
                if (!e.includes("GCM") && e.endsWith("KW")) {
                    n = r === "encrypt" ? "wrapKey" : "unwrapKey";
                } else {
                    n = r;
                }
                break;
            case r === "encrypt" && e.startsWith("RSA"):
                n = "wrapKey";
                break;
            case r === "decrypt":
                n = e.startsWith("RSA") ? "unwrapKey" : "deriveBits";
                break;
        }
        if (n && t.key_ops?.includes?.(n) === false) {
            throw TypeError(`Invalid key for this operation, its "key_ops" must include "${n}" when present`);
        }
    }
    return true;
};
const sr = (e, t, r)=>{
    if (t instanceof Uint8Array) {
        return;
    }
    if (te(t)) {
        if (rt(t) && Te(e, t, r)) {
            return;
        }
        throw TypeError('JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present');
    }
    if (!We(t)) {
        throw TypeError(Pe(e, t, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array"));
    }
    if (t.type !== "secret") {
        throw TypeError(`${Z(t)} instances for symmetric algorithms must be of type "secret"`);
    }
};
const cr = (e, t, r)=>{
    if (te(t)) {
        switch(r){
            case "decrypt":
            case "sign":
                if (et(t) && Te(e, t, r)) {
                    return;
                }
                throw TypeError("JSON Web Key for this operation must be a private JWK");
            case "encrypt":
            case "verify":
                if (tt(t) && Te(e, t, r)) {
                    return;
                }
                throw TypeError("JSON Web Key for this operation must be a public JWK");
        }
    }
    if (!We(t)) {
        throw TypeError(Pe(e, t, "CryptoKey", "KeyObject", "JSON Web Key"));
    }
    if (t.type === "secret") {
        throw TypeError(`${Z(t)} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (t.type === "public") {
        switch(r){
            case "sign":
                throw TypeError(`${Z(t)} instances for asymmetric algorithm signing must be of type "private"`);
            case "decrypt":
                throw TypeError(`${Z(t)} instances for asymmetric algorithm decryption must be of type "private"`);
        }
    }
    if (t.type === "private") {
        switch(r){
            case "verify":
                throw TypeError(`${Z(t)} instances for asymmetric algorithm verifying must be of type "public"`);
            case "encrypt":
                throw TypeError(`${Z(t)} instances for asymmetric algorithm encryption must be of type "public"`);
        }
    }
};
function B(e, t, r) {
    switch(e.substring(0, 2)){
        case "A1":
        case "A2":
        case "di":
        case "HS":
        case "PB":
            sr(e, t, r);
            break;
        default:
            cr(e, t, r);
    }
}
function Pt(e) {
    if (typeof globalThis[e] === "undefined") {
        throw new f(`JWE "zip" (Compression Algorithm) Header Parameter requires the ${e} API.`);
    }
}
async function Wt(e) {
    Pt("CompressionStream");
    let t = new CompressionStream("deflate-raw");
    let r = t.writable.getWriter();
    r.write(e).catch(()=>{});
    r.close().catch(()=>{});
    let n = [];
    let i = t.readable.getReader();
    while(true){
        let { value, done } = await i.read();
        if (done) {
            break;
        }
        n.push(value);
    }
    return E(...n);
}
async function It(plaintext, t) {
    Pt("DecompressionStream");
    let r = new DecompressionStream("deflate-raw");
    let n = r.writable.getWriter();
    n.write(plaintext).catch(()=>{});
    n.close().catch(()=>{});
    let i = [];
    let o = 0;
    let a = r.readable.getReader();
    while(true){
        let { value, done } = await a.read();
        if (done) {
            break;
        }
        i.push(value);
        o += value.byteLength;
        if (t !== Infinity && o > t) {
            throw new c("Decompressed plaintext exceeded the configured limit");
        }
    }
    return E(...i);
}
async function Ht(e, t, r) {
    if (!b(e)) {
        throw new c("Flattened JWE must be an object");
    }
    if (e.protected === undefined && e.header === undefined && e.unprotected === undefined) {
        throw new c("JOSE Header missing");
    }
    if (e.iv !== undefined && typeof e.iv !== "string") {
        throw new c("JWE Initialization Vector incorrect type");
    }
    if (typeof e.ciphertext !== "string") {
        throw new c("JWE Ciphertext missing or incorrect type");
    }
    if (e.tag !== undefined && typeof e.tag !== "string") {
        throw new c("JWE Authentication Tag incorrect type");
    }
    if (e.protected !== undefined && typeof e.protected !== "string") {
        throw new c("JWE Protected Header incorrect type");
    }
    if (e.encrypted_key !== undefined && typeof e.encrypted_key !== "string") {
        throw new c("JWE Encrypted Key incorrect type");
    }
    if (e.aad !== undefined && typeof e.aad !== "string") {
        throw new c("JWE AAD incorrect type");
    }
    if (e.header !== undefined && !b(e.header)) {
        throw new c("JWE Shared Unprotected Header incorrect type");
    }
    if (e.unprotected !== undefined && !b(e.unprotected)) {
        throw new c("JWE Per-Recipient Unprotected Header incorrect type");
    }
    let n;
    if (e.protected) {
        try {
            let J = v(e.protected);
            n = JSON.parse(C.decode(J));
        } catch  {
            throw new c("JWE Protected Header is invalid");
        }
    }
    if (!_(n, e.header, e.unprotected)) {
        throw new c("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
    }
    let i = {
        ...n,
        ...e.header,
        ...e.unprotected
    };
    N(c, new Map, r?.crit, n, i);
    if (i.zip !== undefined && i.zip !== "DEF") {
        throw new f('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value.');
    }
    if (i.zip !== undefined && !n?.zip) {
        throw new c('JWE "zip" (Compression Algorithm) Header Parameter MUST be in a protected header.');
    }
    let { alg, enc } = i;
    if (typeof alg !== "string" || !alg) {
        throw new c("missing JWE Algorithm (alg) in JWE Header");
    }
    if (typeof enc !== "string" || !enc) {
        throw new c("missing JWE Encryption Algorithm (enc) in JWE Header");
    }
    let s = r && ce("keyManagementAlgorithms", r.keyManagementAlgorithms);
    let p = r && ce("contentEncryptionAlgorithms", r.contentEncryptionAlgorithms);
    if (s && !s.has(alg) || !s && alg.startsWith("PBES2")) {
        throw new z('"alg" (Algorithm) Header Parameter value not allowed');
    }
    if (p && !p.has(enc)) {
        throw new z('"enc" (Encryption Algorithm) Header Parameter value not allowed');
    }
    let d;
    if (e.encrypted_key !== undefined) {
        d = I(e.encrypted_key, "encrypted_key", c);
    }
    let u = false;
    if (typeof t === "function") {
        t = await t(n, e);
        u = true;
    }
    B(alg === "dir" ? enc : alg, t, "decrypt");
    let m = await R(t, alg);
    let w;
    try {
        w = await xt(alg, m, d, i, r);
    } catch (error) {
        if (error instanceof TypeError || error instanceof c || error instanceof f) {
            throw error;
        }
        w = M(enc);
    }
    let K;
    let S;
    if (e.iv !== undefined) {
        K = I(e.iv, "iv", c);
    }
    if (e.tag !== undefined) {
        S = I(e.tag, "tag", c);
    }
    let l = e.protected !== undefined ? A(e.protected) : new Uint8Array;
    let g;
    if (e.aad !== undefined) {
        g = E(l, A("."), A(e.aad));
    } else {
        g = l;
    }
    let ge = I(e.ciphertext, "ciphertext", c);
    let plaintext = await Se(enc, w, ge, K, S, g);
    let G = {
        plaintext
    };
    if (i.zip === "DEF") {
        let J = r?.maxDecompressedLength ?? 250000;
        if (J === 0) {
            throw new f('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
        }
        if (J !== Infinity && (!Number.isSafeInteger(J) || J < 1)) {
            throw TypeError("maxDecompressedLength must be 0, a positive safe integer, or Infinity");
        }
        G.plaintext = await It(plaintext, J).catch((cause)=>{
            if (cause instanceof c) {
                throw cause;
            }
            throw new c("Failed to decompress plaintext", {
                cause
            });
        });
    }
    if (e.protected !== undefined) {
        G.protectedHeader = n;
    }
    if (e.aad !== undefined) {
        G.additionalAuthenticatedData = I(e.aad, "aad", c);
    }
    if (e.unprotected !== undefined) {
        G.sharedUnprotectedHeader = e.unprotected;
    }
    if (e.header !== undefined) {
        G.unprotectedHeader = e.header;
    }
    if (u) {
        return {
            ...G,
            key: m
        };
    }
    return G;
}
async function Jt(e, t, r) {
    if (e instanceof Uint8Array) {
        e = C.decode(e);
    }
    if (typeof e !== "string") {
        throw new c("Compact JWE must be a string or Uint8Array");
    }
    let { 0: n, 1: i, 2: o, 3: ciphertext, 4: s, length } = e.split(".");
    if (length !== 5) {
        throw new c("Invalid Compact JWE");
    }
    let d = await Ht({
        ciphertext,
        iv: o || undefined,
        protected: n,
        tag: s || undefined,
        encrypted_key: i || undefined
    }, t, r);
    let u = {
        plaintext: d.plaintext,
        protectedHeader: d.protectedHeader
    };
    if (typeof t === "function") {
        return {
            ...u,
            key: d.key
        };
    }
    return u;
}
class Re {
    #e;
    #t;
    #r;
    #n;
    #a;
    #o;
    #s;
    #i;
    constructor(e){
        if (!(e instanceof Uint8Array)) {
            throw TypeError("plaintext must be an instance of Uint8Array");
        }
        this.#e = e;
    }
    setKeyManagementParameters(e) {
        W(this.#i, "setKeyManagementParameters");
        this.#i = e;
        return this;
    }
    setProtectedHeader(e) {
        W(this.#t, "setProtectedHeader");
        this.#t = e;
        return this;
    }
    setSharedUnprotectedHeader(e) {
        W(this.#r, "setSharedUnprotectedHeader");
        this.#r = e;
        return this;
    }
    setUnprotectedHeader(e) {
        W(this.#n, "setUnprotectedHeader");
        this.#n = e;
        return this;
    }
    setAdditionalAuthenticatedData(e) {
        this.#a = e;
        return this;
    }
    setContentEncryptionKey(e) {
        W(this.#o, "setContentEncryptionKey");
        this.#o = e;
        return this;
    }
    setInitializationVector(e) {
        W(this.#s, "setInitializationVector");
        this.#s = e;
        return this;
    }
    async encrypt(e, t) {
        if (!this.#t && !this.#n && !this.#r) {
            throw new c("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
        }
        if (!_(this.#t, this.#n, this.#r)) {
            throw new c("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
        }
        let r = {
            ...this.#t,
            ...this.#n,
            ...this.#r
        };
        N(c, new Map, t?.crit, this.#t, r);
        if (r.zip !== undefined && r.zip !== "DEF") {
            throw new f('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value.');
        }
        if (r.zip !== undefined && !this.#t?.zip) {
            throw new c('JWE "zip" (Compression Algorithm) Header Parameter MUST be in a protected header.');
        }
        let { alg, enc } = r;
        if (typeof alg !== "string" || !alg) {
            throw new c('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc !== "string" || !enc) {
            throw new c('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let o;
        if (this.#o && (alg === "dir" || alg === "ECDH-ES")) {
            throw TypeError(`setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${alg}`);
        }
        B(alg === "dir" ? enc : alg, e, "encrypt");
        let a;
        {
            let g;
            let ge = await R(e, alg);
            ({ cek: a, encryptedKey: o, parameters: g } = await Ct(alg, enc, ge, this.#o, this.#i));
            if (g) {
                if (t && Ze in t) {
                    if (!this.#n) {
                        this.setUnprotectedHeader(g);
                    } else {
                        this.#n = {
                            ...this.#n,
                            ...g
                        };
                    }
                } else if (!this.#t) {
                    this.setProtectedHeader(g);
                } else {
                    this.#t = {
                        ...this.#t,
                        ...g
                    };
                }
            }
        }
        let s;
        let p;
        let d;
        let u;
        if (this.#t) {
            p = y(JSON.stringify(this.#t));
            d = A(p);
        } else {
            p = "";
            d = new Uint8Array;
        }
        if (this.#a) {
            u = y(this.#a);
            let g = A(u);
            s = E(d, A("."), g);
        } else {
            s = d;
        }
        let m = this.#e;
        if (r.zip === "DEF") {
            m = await Wt(m).catch((cause)=>{
                throw new c("Failed to compress plaintext", {
                    cause
                });
            });
        }
        let { ciphertext, tag, iv } = await we(enc, m, a, this.#s, s);
        let l = {
            ciphertext: y(ciphertext)
        };
        if (iv) {
            l.iv = y(iv);
        }
        if (tag) {
            l.tag = y(tag);
        }
        if (o) {
            l.encrypted_key = y(o);
        }
        if (u) {
            l.aad = u;
        }
        if (this.#t) {
            l.protected = p;
        }
        if (this.#r) {
            l.unprotected = this.#r;
        }
        if (this.#n) {
            l.header = this.#n;
        }
        return l;
    }
}
async function vt(e, t, r) {
    if (!b(e)) {
        throw new h("Flattened JWS must be an object");
    }
    if (e.protected === undefined && e.header === undefined) {
        throw new h('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (e.protected !== undefined && typeof e.protected !== "string") {
        throw new h("JWS Protected Header incorrect type");
    }
    if (e.payload === undefined) {
        throw new h("JWS Payload missing");
    }
    if (typeof e.signature !== "string") {
        throw new h("JWS Signature missing or incorrect type");
    }
    if (e.header !== undefined && !b(e.header)) {
        throw new h("JWS Unprotected Header incorrect type");
    }
    let n = {};
    if (e.protected) {
        try {
            let g = v(e.protected);
            n = JSON.parse(C.decode(g));
        } catch  {
            throw new h("JWS Protected Header is invalid");
        }
    }
    if (!_(n, e.header)) {
        throw new h("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    }
    let i = {
        ...n,
        ...e.header
    };
    let o = N(h, new Map([
        [
            "b64",
            true
        ]
    ]), r?.crit, n, i);
    let a = true;
    if (o.has("b64")) {
        a = n.b64;
        if (typeof a !== "boolean") {
            throw new h('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
    }
    let { alg } = i;
    if (typeof alg !== "string" || !alg) {
        throw new h('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    let p = r && ce("algorithms", r.algorithms);
    if (p && !p.has(alg)) {
        throw new z('"alg" (Algorithm) Header Parameter value not allowed');
    }
    if (a) {
        if (typeof e.payload !== "string") {
            throw new h("JWS Payload must be a string");
        }
    } else if (typeof e.payload !== "string" && !(e.payload instanceof Uint8Array)) {
        throw new h("JWS Payload must be a string or an Uint8Array instance");
    }
    let d = false;
    if (typeof t === "function") {
        t = await t(n, e);
        d = true;
    }
    B(alg, t, "verify");
    let u = E(e.protected !== undefined ? A(e.protected) : new Uint8Array, A("."), typeof e.payload === "string" ? a ? A(e.payload) : V.encode(e.payload) : e.payload);
    let m = I(e.signature, "signature", h);
    let w = await R(t, alg);
    if (!await ut(alg, w, m, u)) {
        throw new me;
    }
    let S;
    if (a) {
        S = I(e.payload, "payload", h);
    } else if (typeof e.payload === "string") {
        S = V.encode(e.payload);
    } else {
        S = e.payload;
    }
    let l = {
        payload: S
    };
    if (e.protected !== undefined) {
        l.protectedHeader = n;
    }
    if (e.header !== undefined) {
        l.unprotectedHeader = e.header;
    }
    if (d) {
        return {
            ...l,
            key: w
        };
    }
    return l;
}
async function Tt(e, t, r) {
    if (e instanceof Uint8Array) {
        e = C.decode(e);
    }
    if (typeof e !== "string") {
        throw new h("Compact JWS must be a string or Uint8Array");
    }
    let { 0: n, 1: payload, 2: signature, length } = e.split(".");
    if (length !== 3) {
        throw new h("Invalid Compact JWS");
    }
    let s = await vt({
        payload,
        protected: n,
        signature
    }, t, r);
    let p = {
        payload: s.payload,
        protectedHeader: s.protectedHeader
    };
    if (typeof t === "function") {
        return {
            ...p,
            key: s.key
        };
    }
    return p;
}
const L = (e)=>Math.floor(e.getTime() / 1000);
const Dt = 60;
const Ut = Dt * 60;
const De = Ut * 24;
const pr = De * 7;
const dr = De * 365.25;
const fr = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
function pe(e) {
    let t = fr.exec(e);
    if (!t || t[4] && t[1]) {
        throw TypeError("Invalid time period format");
    }
    let r = parseFloat(t[2]);
    let n = t[3].toLowerCase();
    let i;
    switch(n){
        case "sec":
        case "secs":
        case "second":
        case "seconds":
        case "s":
            i = Math.round(r);
            break;
        case "minute":
        case "minutes":
        case "min":
        case "mins":
        case "m":
            i = Math.round(r * Dt);
            break;
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
            i = Math.round(r * Ut);
            break;
        case "day":
        case "days":
        case "d":
            i = Math.round(r * De);
            break;
        case "week":
        case "weeks":
        case "w":
            i = Math.round(r * pr);
            break;
        default:
            i = Math.round(r * dr);
            break;
    }
    if (t[1] === "-" || t[4] === "ago") {
        return -i;
    }
    return i;
}
function F(e, t) {
    if (!Number.isFinite(t)) {
        throw TypeError(`Invalid ${e} input`);
    }
    return t;
}
const Rt = (typ)=>{
    if (typ.includes("/")) {
        return typ.toLowerCase();
    }
    return `application/${typ.toLowerCase()}`;
};
const ur = (aud, t)=>{
    if (typeof aud === "string") {
        return t.includes(aud);
    }
    if (Array.isArray(aud)) {
        return t.some(Set.prototype.has.bind(new Set(aud)));
    }
    return false;
};
function Ae(protectedHeader, t, r = {}) {
    let n;
    try {
        n = JSON.parse(C.decode(t));
    } catch  {}
    if (!b(n)) {
        throw new O("JWT Claims Set must be a top-level JSON object");
    }
    let { typ } = r;
    if (typ && (typeof protectedHeader.typ !== "string" || Rt(protectedHeader.typ) !== Rt(typ))) {
        throw new ZG('unexpected "typ" JWT header value', n, "typ", "check_failed");
    }
    let { requiredClaims = [], issuer, subject, audience, maxTokenAge } = r;
    let u = [
        ...requiredClaims
    ];
    if (maxTokenAge !== undefined) {
        u.push("iat");
    }
    if (audience !== undefined) {
        u.push("aud");
    }
    if (subject !== undefined) {
        u.push("sub");
    }
    if (issuer !== undefined) {
        u.push("iss");
    }
    for (let S of new Set(u.reverse())){
        if (!(S in n)) {
            throw new ZG(`missing required "${S}" claim`, n, S, "missing");
        }
    }
    if (issuer && !(Array.isArray(issuer) ? issuer : [
        issuer
    ]).includes(n.iss)) {
        throw new ZG('unexpected "iss" claim value', n, "iss", "check_failed");
    }
    if (subject && n.sub !== subject) {
        throw new ZG('unexpected "sub" claim value', n, "sub", "check_failed");
    }
    if (audience && !ur(n.aud, typeof audience === "string" ? [
        audience
    ] : audience)) {
        throw new ZG('unexpected "aud" claim value', n, "aud", "check_failed");
    }
    let m;
    switch(typeof r.clockTolerance){
        case "string":
            m = pe(r.clockTolerance);
            break;
        case "number":
            m = r.clockTolerance;
            break;
        case "undefined":
            m = 0;
            break;
        default:
            throw TypeError("Invalid clockTolerance option type");
    }
    let { currentDate } = r;
    let K = L(currentDate || new Date);
    if ((n.iat !== undefined || maxTokenAge) && typeof n.iat !== "number") {
        throw new ZG('"iat" claim must be a number', n, "iat", "invalid");
    }
    if (n.nbf !== undefined) {
        if (typeof n.nbf !== "number") {
            throw new ZG('"nbf" claim must be a number', n, "nbf", "invalid");
        }
        if (n.nbf > K + m) {
            throw new ZG('"nbf" claim timestamp check failed', n, "nbf", "check_failed");
        }
    }
    if (n.exp !== undefined) {
        if (typeof n.exp !== "number") {
            throw new ZG('"exp" claim must be a number', n, "exp", "invalid");
        }
        if (n.exp <= K - m) {
            throw new j('"exp" claim timestamp check failed', n, "exp", "check_failed");
        }
    }
    if (maxTokenAge) {
        let S = K - n.iat;
        let l = typeof maxTokenAge === "number" ? maxTokenAge : pe(maxTokenAge);
        if (S - m > l) {
            throw new j('"iat" claim timestamp check failed (too far in the past)', n, "iat", "check_failed");
        }
        if (S < 0 - m) {
            throw new ZG('"iat" claim timestamp check failed (it should be in the past)', n, "iat", "check_failed");
        }
    }
    return n;
}
class de {
    #e;
    constructor(e){
        if (!b(e)) {
            throw TypeError("JWT Claims Set MUST be an object");
        }
        this.#e = structuredClone(e);
    }
    data() {
        return V.encode(JSON.stringify(this.#e));
    }
    get iss() {
        return this.#e.iss;
    }
    set iss(e) {
        this.#e.iss = e;
    }
    get sub() {
        return this.#e.sub;
    }
    set sub(e) {
        this.#e.sub = e;
    }
    get aud() {
        return this.#e.aud;
    }
    set aud(e) {
        this.#e.aud = e;
    }
    set jti(e) {
        this.#e.jti = e;
    }
    set nbf(e) {
        if (typeof e === "number") {
            this.#e.nbf = F("setNotBefore", e);
        } else if (e instanceof Date) {
            this.#e.nbf = F("setNotBefore", L(e));
        } else {
            this.#e.nbf = L(new Date) + pe(e);
        }
    }
    set exp(e) {
        if (typeof e === "number") {
            this.#e.exp = F("setExpirationTime", e);
        } else if (e instanceof Date) {
            this.#e.exp = F("setExpirationTime", L(e));
        } else {
            this.#e.exp = L(new Date) + pe(e);
        }
    }
    set iat(e) {
        if (e === undefined) {
            this.#e.iat = L(new Date);
        } else if (e instanceof Date) {
            this.#e.iat = F("setIssuedAt", L(e));
        } else if (typeof e === "string") {
            this.#e.iat = F("setIssuedAt", L(new Date) + pe(e));
        } else {
            this.#e.iat = F("setIssuedAt", e);
        }
    }
}
async function T2t(e, t, r) {
    let n = await Tt(e, t, r);
    if (n.protectedHeader.crit?.includes("b64") && n.protectedHeader.b64 === false) {
        throw new O("JWTs MUST NOT use unencoded payload");
    }
    let o = {
        payload: Ae(n.protectedHeader, n.payload, r),
        protectedHeader: n.protectedHeader
    };
    if (typeof t === "function") {
        return {
            ...o,
            key: n.key
        };
    }
    return o;
}
async function Yer(e, t, r) {
    let n = await Jt(e, t, r);
    let i = Ae(n.protectedHeader, n.plaintext, r);
    let { protectedHeader } = n;
    if (protectedHeader.iss !== undefined && protectedHeader.iss !== i.iss) {
        throw new ZG('replicated "iss" claim header parameter mismatch', i, "iss", "mismatch");
    }
    if (protectedHeader.sub !== undefined && protectedHeader.sub !== i.sub) {
        throw new ZG('replicated "sub" claim header parameter mismatch', i, "sub", "mismatch");
    }
    if (protectedHeader.aud !== undefined && JSON.stringify(protectedHeader.aud) !== JSON.stringify(i.aud)) {
        throw new ZG('replicated "aud" claim header parameter mismatch', i, "aud", "mismatch");
    }
    let a = {
        payload: i,
        protectedHeader
    };
    if (typeof t === "function") {
        return {
            ...a,
            key: n.key
        };
    }
    return a;
}
class Ue {
    #e;
    constructor(e){
        this.#e = new Re(e);
    }
    setContentEncryptionKey(e) {
        this.#e.setContentEncryptionKey(e);
        return this;
    }
    setInitializationVector(e) {
        this.#e.setInitializationVector(e);
        return this;
    }
    setProtectedHeader(e) {
        this.#e.setProtectedHeader(e);
        return this;
    }
    setKeyManagementParameters(e) {
        this.#e.setKeyManagementParameters(e);
        return this;
    }
    async encrypt(e, t) {
        let r = await this.#e.encrypt(e, t);
        return [
            r.protected,
            r.encrypted_key,
            r.iv,
            r.ciphertext,
            r.tag
        ].join(".");
    }
}
class Oe {
    #e;
    #t;
    #r;
    constructor(e){
        if (!(e instanceof Uint8Array)) {
            throw TypeError("payload must be an instance of Uint8Array");
        }
        this.#e = e;
    }
    setProtectedHeader(e) {
        W(this.#t, "setProtectedHeader");
        this.#t = e;
        return this;
    }
    setUnprotectedHeader(e) {
        W(this.#r, "setUnprotectedHeader");
        this.#r = e;
        return this;
    }
    async sign(e, t) {
        if (!this.#t && !this.#r) {
            throw new h("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
        }
        if (!_(this.#t, this.#r)) {
            throw new h("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
        }
        let r = {
            ...this.#t,
            ...this.#r
        };
        let n = N(h, new Map([
            [
                "b64",
                true
            ]
        ]), t?.crit, this.#t, r);
        let i = true;
        if (n.has("b64")) {
            i = this.#t.b64;
            if (typeof i !== "boolean") {
                throw new h('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            }
        }
        let { alg } = r;
        if (typeof alg !== "string" || !alg) {
            throw new h('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        B(alg, e, "sign");
        let a;
        let s;
        if (i) {
            a = y(this.#e);
            s = A(a);
        } else {
            s = this.#e;
            a = "";
        }
        let p;
        let d;
        if (this.#t) {
            p = y(JSON.stringify(this.#t));
            d = A(p);
        } else {
            p = "";
            d = new Uint8Array;
        }
        let u = E(d, A("."), s);
        let m = await R(e, alg);
        let w = await ft(alg, m, u);
        let K = {
            signature: y(w),
            payload: a
        };
        if (this.#r) {
            K.header = this.#r;
        }
        if (this.#t) {
            K.protected = p;
        }
        return K;
    }
}
class Me {
    #e;
    constructor(e){
        this.#e = new Oe(e);
    }
    setProtectedHeader(e) {
        this.#e.setProtectedHeader(e);
        return this;
    }
    async sign(e, t) {
        let r = await this.#e.sign(e, t);
        if (r.payload === undefined) {
            throw TypeError("use the flattened module for creating JWS with b64: false");
        }
        return `${r.protected}.${r.payload}.${r.signature}`;
    }
}
class CGe {
    #e;
    #t;
    constructor(e = {}){
        this.#t = new de(e);
    }
    setIssuer(e) {
        this.#t.iss = e;
        return this;
    }
    setSubject(e) {
        this.#t.sub = e;
        return this;
    }
    setAudience(e) {
        this.#t.aud = e;
        return this;
    }
    setJti(e) {
        this.#t.jti = e;
        return this;
    }
    setNotBefore(e) {
        this.#t.nbf = e;
        return this;
    }
    setExpirationTime(e) {
        this.#t.exp = e;
        return this;
    }
    setIssuedAt(e) {
        this.#t.iat = e;
        return this;
    }
    setProtectedHeader(e) {
        this.#e = e;
        return this;
    }
    async sign(e, t) {
        let r = new Me(this.#t.data());
        r.setProtectedHeader(this.#e);
        if (Array.isArray(this.#e?.crit) && this.#e.crit.includes("b64") && this.#e.b64 === false) {
            throw new O("JWTs MUST NOT use unencoded payload");
        }
        return r.sign(e, t);
    }
}
class Pvn {
    #e;
    #t;
    #r;
    #n;
    #a;
    #o;
    #s;
    #i;
    constructor(e = {}){
        this.#i = new de(e);
    }
    setIssuer(e) {
        this.#i.iss = e;
        return this;
    }
    setSubject(e) {
        this.#i.sub = e;
        return this;
    }
    setAudience(e) {
        this.#i.aud = e;
        return this;
    }
    setJti(e) {
        this.#i.jti = e;
        return this;
    }
    setNotBefore(e) {
        this.#i.nbf = e;
        return this;
    }
    setExpirationTime(e) {
        this.#i.exp = e;
        return this;
    }
    setIssuedAt(e) {
        this.#i.iat = e;
        return this;
    }
    setProtectedHeader(e) {
        W(this.#n, "setProtectedHeader");
        this.#n = e;
        return this;
    }
    setKeyManagementParameters(e) {
        W(this.#r, "setKeyManagementParameters");
        this.#r = e;
        return this;
    }
    setContentEncryptionKey(e) {
        W(this.#e, "setContentEncryptionKey");
        this.#e = e;
        return this;
    }
    setInitializationVector(e) {
        W(this.#t, "setInitializationVector");
        this.#t = e;
        return this;
    }
    replicateIssuerAsHeader() {
        this.#a = true;
        return this;
    }
    replicateSubjectAsHeader() {
        this.#o = true;
        return this;
    }
    replicateAudienceAsHeader() {
        this.#s = true;
        return this;
    }
    async encrypt(e, t) {
        let r = new Ue(this.#i.data());
        if (this.#n && (this.#a || this.#o || this.#s)) {
            this.#n = {
                ...this.#n,
                iss: this.#a ? this.#i.iss : undefined,
                sub: this.#o ? this.#i.sub : undefined,
                aud: this.#s ? this.#i.aud : undefined
            };
        }
        r.setProtectedHeader(this.#n);
        if (this.#t) {
            r.setInitializationVector(this.#t);
        }
        if (this.#e) {
            r.setContentEncryptionKey(this.#e);
        }
        if (this.#r) {
            r.setKeyManagementParameters(this.#r);
        }
        return r.encrypt(e, t);
    }
}
function Ivn(e) {
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
        let r = JSON.parse(C.decode(v(t)));
        if (!b(r)) {
            throw Error();
        }
        return r;
    } catch  {
        throw TypeError("Invalid Token or Protected Header formatting");
    }
}
export { ZG, X3o, Ker, k2t, T2t, Yer, CGe, Pvn, Ivn };
