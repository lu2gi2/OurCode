import { _Me, P4o, _7n } from "/$bunfs/root/chunk-f57bzzed.js";
import { randomUUID } from "crypto";
import { promises } from "fs";
import { createConnection } from "net";
import { platform, tmpdir } from "os";
import { dirname, join } from "path";
import { lstat, mkdir, mkdtemp, writeFile } from "fs/promises";
const j = String.raw`(?:No tab with id: \d+|Tab \d+ (?:no longer exists|is not in the same group))`;
const St = [
    {
        pattern: /^Permission denied for JavaScript execution/,
        errorType: "js_permission_denied"
    },
    {
        pattern: /^JavaScript execution error: Execution timeout: Code exceeded \d+-second limit$/,
        errorType: "js_timeout"
    },
    {
        pattern: /^JavaScript execution error:/,
        errorType: "js_execution_error"
    },
    {
        pattern: new RegExp(`^Failed to execute JavaScript: ${j}`),
        errorType: "tab_not_found"
    },
    {
        pattern: /^Failed to execute JavaScript:/,
        errorType: "js_exception"
    }
];
const Rt = [
    {
        pattern: /^Permission denied for this action/,
        errorType: "computer_permission_denied"
    },
    {
        pattern: /^No element found with reference|^Error getting element coordinates|^Failed to (execute script to get|get) element coordinates/,
        errorType: "computer_element_not_found"
    },
    {
        pattern: /^Error (clicking|hovering|scrolling|pressing key|performing drag|capturing)|^Failed to (type|scroll to element)/,
        errorType: "computer_action_failed"
    },
    {
        pattern: /^"[^"]*" was not pressed: page zoom keyboard shortcuts are not supported/,
        errorType: "computer_zoom_shortcut_unsupported"
    },
    {
        pattern: new RegExp(`^Failed to execute action: ${j}`),
        errorType: "tab_not_found"
    },
    {
        pattern: /^Failed to execute action:/,
        errorType: "computer_exception"
    }
];
const Et = [
    {
        pattern: /^Permission denied for reading page content/,
        errorType: "get_page_text_permission_denied"
    },
    {
        pattern: /^No semantic content element found|^Output exceeds \d+ character limit/,
        errorType: "get_page_text_too_large"
    },
    {
        pattern: /^No text content found/,
        errorType: "get_page_text_no_content"
    },
    {
        pattern: /^Failed to extract page text: No main text content found/,
        errorType: "get_page_text_no_content"
    },
    {
        pattern: /^Failed to extract page text: (Script execution failed|Page script returned empty result)/,
        errorType: "get_page_text_script_error"
    },
    {
        pattern: new RegExp(`^Failed to extract page text: ${j}`),
        errorType: "tab_not_found"
    },
    {
        pattern: /^Failed to extract page text:/,
        errorType: "get_page_text_exception"
    }
];
const At = [
    {
        pattern: /^Permission denied by user\. Domain transition denied/,
        errorType: "navigation_blocked"
    },
    {
        pattern: /^Cannot access this page\. Claude cannot assist/,
        errorType: "navigation_blocked"
    },
    {
        pattern: /^Permission denied by user/,
        errorType: "permission_denied_user"
    },
    {
        pattern: /^Permission required but no handler/,
        errorType: "permission_handler_missing"
    },
    {
        pattern: /^Authentication failed\. The extension may need to be re-authenticated\. Please check your login status/,
        errorType: "authentication_failed"
    },
    {
        pattern: /^Authentication failed\. The extension may need to be re-authenticated\. Open the Claude in Chrome side panel/,
        errorType: "session_expired"
    },
    {
        pattern: /^Authentication failed\. The extension may need to be re-authenticated/,
        errorType: "authentication_failed"
    },
    {
        pattern: /^No tabs? available/,
        errorType: "no_tabs_available"
    },
    {
        pattern: /^This site is blocked/,
        errorType: "domain_blocked"
    },
    {
        pattern: /^This site is not allowed due to safety restrictions/,
        errorType: "domain_blocked"
    },
    {
        pattern: /^Could not verify this site's safety category\. Blocking as a precaution/,
        errorType: "category_lookup_error"
    },
    {
        pattern: /^Claude in Chrome is turned off/,
        errorType: "domain_blocked"
    },
    {
        pattern: new RegExp(`^Tab \\d+ no longer exists|^${j}`),
        errorType: "tab_not_found"
    },
    {
        pattern: /^Security check failed: Domain changed|^Unable to verify current URL for security check/,
        errorType: "security_check_failed"
    }
];
const It = new Map([
    [
        "javascript_tool",
        St
    ],
    [
        "computer",
        Rt
    ],
    [
        "get_page_text",
        Et
    ]
]);
function N7e(e, t) {
    let n = It.get(e);
    if (n) {
        for (let { pattern, errorType } of n){
            if (pattern.test(t)) {
                return errorType;
            }
        }
    }
    for (let { pattern, errorType } of At){
        if (pattern.test(t)) {
            return errorType;
        }
    }
    return "unclassified_tool_error";
}
function q_t(e) {
    let t = e?.content;
    if (typeof t === "string" && t) {
        return t;
    }
    if (Array.isArray(t)) {
        for (let n of t){
            let r = n?.text;
            if (typeof r === "string" && r) {
                return r;
            }
        }
    }
    return "Unknown error";
}
const Ot = [
    "pairing_disabled",
    "not_signed_in",
    "managed_org_missing",
    "malformed",
    "unknown_kid",
    "jwks_unavailable",
    "bad_signature",
    "wrong_issuer_or_audience",
    "expired",
    "not_yet_valid",
    "wrong_peer_kind",
    "key_binding_mismatch",
    "account_mismatch",
    "org_mismatch",
    "org_not_permitted",
    "bad_key_confirmation",
    "attest_failed",
    "rate_limited",
    "unsupported_peer",
    "unknown_pairing"
];
const $t = new Set(Ot);
class f extends Error {
    code;
    httpStatus;
    peerOrg;
    constructor(e, t, n = {}){
        super(t ? `${e}: ${t}` : e, {
            cause: n.cause
        });
        this.name = "PairingError";
        this.code = e;
        this.httpStatus = n.httpStatus;
        this.peerOrg = n.peerOrg;
    }
    wireCode() {
        if (this.code === "attest_failed" && this.httpStatus !== undefined) {
            return `attest_failed:${this.httpStatus}`;
        }
        return this.code;
    }
}
function me(code) {
    if (typeof code !== "string") {
        return "malformed";
    }
    let t = code.startsWith("attest_failed:") ? "attest_failed" : code;
    if ($t.has(t)) {
        return t;
    }
    return "malformed";
}
function m(e) {
    return new f("malformed", e);
}
class v {
    wall;
    mono;
    constructor(e = {}){
        this.wall = e.now ?? (()=>Date.now() / 1000);
        this.mono = e.monotonicNow ?? (()=>globalThis.performance.now() / 1000);
    }
    stamp() {
        return {
            wall: this.wall(),
            mono: this.mono()
        };
    }
    since(e) {
        return Math.max(0, this.wall() - e.wall, this.mono() - e.mono);
    }
}
const Nt = new Set([
    "localhost",
    "127.0.0.1",
    "[::1]"
]);
function J(apiOrigin, t = false) {
    let n;
    try {
        n = new URL(apiOrigin);
    } catch  {
        throw TypeError(`pairing apiOrigin is not a URL: ${apiOrigin}`);
    }
    if (!(n.protocol === "https:" || t && n.protocol === "http:" && Nt.has(n.hostname)) || n.username || n.password || n.pathname !== "/" && n.pathname !== "" || n.search || n.hash) {
        throw TypeError(`pairing apiOrigin must be a bare https origin: ${apiOrigin}`);
    }
    let issuer = `${n.origin}/api/oauth/local_pairing`;
    return {
        issuer,
        attest: `${issuer}/attest`,
        jwks: `${issuer}/jwks.json`
    };
}
const O = "claude-local-pairing/v1";
const Ut = new TextEncoder;
const Dt = new TextDecoder("utf-8", {
    fatal: true
});
function _(e) {
    return Ut.encode(e);
}
function N(e) {
    return Dt.decode(e);
}
function E(...e) {
    return Y(e);
}
function Y(e) {
    let t = 0;
    for (let i of e){
        t += i.length;
    }
    let n = new Uint8Array(t);
    let r = 0;
    for (let i of e){
        n.set(i, r);
        r += i.length;
    }
    return n;
}
function x(e) {
    let t = typeof e === "string" ? _(e) : e;
    let n = new Uint8Array(4 + t.length);
    new DataView(n.buffer).setUint32(0, t.length, false);
    n.set(t, 4);
    return n;
}
function P(e) {
    return typeof e === "number" && Number.isSafeInteger(e) && e >= 0;
}
function U(e) {
    if (!P(e)) {
        throw RangeError("u64be: not a non-negative safe integer");
    }
    let t = new Uint8Array(8);
    new DataView(t.buffer).setBigUint64(0, BigInt(e), false);
    return t;
}
const Mt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
const Bt = /^[A-Za-z0-9_-]*$/;
function T(e) {
    let t = e.length % 4;
    if (!Bt.test(e) || t === 1) {
        throw SyntaxError("not unpadded base64url");
    }
    if (t !== 0) {
        if ((Mt.indexOf(e.charAt(e.length - 1)) & (t === 2 ? 15 : 3)) !== 0) {
            throw SyntaxError("non-canonical base64url");
        }
    }
    let n = e.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((e.length + 3) % 4);
    let r = atob(n);
    let i = new Uint8Array(r.length);
    for(let s = 0; s < r.length; s++){
        i[s] = r.charCodeAt(s);
    }
    return i;
}
function k(e) {
    let t = "";
    for(let n = 0; n < e.length; n += 32768){
        t += String.fromCharCode.apply(null, e.subarray(n, n + 32768));
    }
    return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function ye(e, t) {
    if (e.length !== t.length) {
        return false;
    }
    let n = 0;
    for(let r = 0; r < e.length; r++){
        n |= (e[r] ?? 0) ^ (t[r] ?? 0);
    }
    return n === 0;
}
function we(e) {
    let t = new Uint8Array(e);
    globalThis.crypto.getRandomValues(t);
    return t;
}
function y(e) {
    return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
}
async function q(e) {
    return new Uint8Array(await globalThis.crypto.subtle.digest("SHA-256", y(e)));
}
const Lt = 87;
function be(public_key) {
    if (typeof public_key !== "string" || public_key.length !== Lt) {
        throw m("public_key must be 87 base64url chars");
    }
    let t;
    try {
        t = T(public_key);
    } catch  {
        throw m("public_key is not base64url");
    }
    if (t.length !== 65 || t[0] !== 4) {
        throw m("public_key must be an uncompressed P-256 point");
    }
    return t;
}
function jt(e) {
    let t = k(e.subarray(1, 33));
    let n = k(e.subarray(33, 65));
    return `{"crv":"P-256","kty":"EC","x":"${t}","y":"${n}"}`;
}
async function Q(e) {
    return k(await q(_(jt(e))));
}
async function _e(peerRaw) {
    try {
        return await globalThis.crypto.subtle.importKey("raw", y(peerRaw), {
            name: "ECDH",
            namedCurve: "P-256"
        }, false, []);
    } catch  {
        throw m("public_key is not a point on P-256");
    }
}
async function ke(x_1, y_1) {
    return globalThis.crypto.subtle.importKey("jwk", {
        kty: "EC",
        crv: "P-256",
        x: x_1,
        y: y_1,
        ext: true
    }, {
        name: "ECDSA",
        namedCurve: "P-256"
    }, false, [
        "verify"
    ]);
}
async function xe() {
    let keyPair = await globalThis.crypto.subtle.generateKey({
        name: "ECDH",
        namedCurve: "P-256"
    }, false, [
        "deriveBits"
    ]);
    let t = new Uint8Array(await globalThis.crypto.subtle.exportKey("raw", keyPair.publicKey));
    return {
        keyPair,
        publicKey: k(t),
        jkt: await Q(t)
    };
}
const Z = 10;
function ee(e, timeoutSec, n) {
    let r;
    let i = new Promise((resolve, reject)=>{
        r = setTimeout(()=>reject(n()), timeoutSec * 1000);
        r.unref?.();
    });
    return Promise.race([
        e,
        i
    ]).finally(()=>clearTimeout(r));
}
const Jt = 60;
const Te = 300;
const ve = 3600;
function Pe(cacheControl, t, n) {
    let r = new RegExp(`(?:^|,)\\s*${t}=(\\d+)`).exec(cacheControl ?? "");
    if (r) {
        return Number(r[1]);
    }
    return n;
}
function S(e, cause) {
    return new f("jwks_unavailable", e, {
        cause
    });
}
class te {
    opts;
    keys = new Map;
    fetchedAt;
    maxAge = Te;
    staleIfError = ve;
    flooredAt;
    inflight;
    clock;
    floor;
    timeoutSec;
    url;
    constructor(e){
        this.opts = e;
        this.clock = new v(e);
        this.floor = Jt;
        this.timeoutSec = e.timeoutSec ?? Z;
        this.url = J(e.apiOrigin, e.allowLoopbackHttp).jwks;
    }
    async getKey(e) {
        let t = this.lookup(e);
        if (!t || this.age() > this.maxAge) {
            if (!this.inflight && !this.floored()) {
                if (!t) {
                    this.flooredAt = this.clock.stamp();
                }
                this.inflight = this.fetch().finally(()=>{
                    this.inflight = undefined;
                });
            }
            await this.inflight;
            t = this.lookup(e);
        }
        if (t) {
            return t;
        }
        if (this.keys.size === 0) {
            throw S("no verification keys");
        }
        throw new f("unknown_kid", e.slice(0, 32));
    }
    lookup(e) {
        return this.servable().get(e);
    }
    servable() {
        if (this.age() > this.maxAge + this.staleIfError) {
            this.keys = new Map;
        }
        return this.keys;
    }
    age() {
        if (this.fetchedAt) {
            return this.clock.since(this.fetchedAt);
        }
        return Infinity;
    }
    floored() {
        return this.flooredAt !== undefined && this.clock.since(this.flooredAt) < this.floor;
    }
    async fetch() {
        try {
            await this.load();
        } catch (error) {
            this.flooredAt = this.clock.stamp();
            if (this.servable().size > 0) {
                return;
            }
            throw error instanceof f ? error : S("fetch failed", error);
        }
    }
    async load() {
        let e = await ee(this.get(), this.timeoutSec, ()=>S("timed out"));
        if (e.status !== 200) {
            throw S(`HTTP ${e.status}`);
        }
        let t;
        try {
            t = JSON.parse(e.text);
        } catch  {
            throw S("not JSON");
        }
        let n = t?.keys;
        if (!Array.isArray(n)) {
            throw S("no keys array");
        }
        let r = new Map;
        for (let i of n){
            if (i?.kty !== "EC" || i.crv !== "P-256" || typeof i.kid !== "string" || typeof i.x !== "string" || typeof i.y !== "string" || i.alg !== undefined && i.alg !== "ES256" || i.use !== undefined && i.use !== "sig") {
                continue;
            }
            try {
                r.set(i.kid, await ke(i.x, i.y));
            } catch  {}
        }
        if (r.size === 0) {
            throw S("no usable EC P-256 keys");
        }
        this.maxAge = Math.max(Pe(e.cacheControl, "max-age", Te), this.floor);
        this.staleIfError = Pe(e.cacheControl, "stale-if-error", ve);
        this.keys = r;
        this.fetchedAt = this.clock.stamp();
    }
    async get() {
        let e = await this.opts.fetchImpl(this.url, {
            method: "GET",
            headers: {
                accept: "application/json",
                "cache-control": "no-cache"
            }
        });
        let e_status = e.status;
        let cacheControl = e.headers.get("cache-control");
        return {
            status: e_status,
            cacheControl,
            text: e_status === 200 ? await e.text() : ""
        };
    }
}
function C(e) {
    if (e === null || typeof e === "boolean" || typeof e === "string") {
        return JSON.stringify(e);
    }
    if (typeof e === "number") {
        if (!Number.isFinite(e)) {
            throw TypeError("canonicalJson: non-finite number");
        }
        return JSON.stringify(e);
    }
    if (Array.isArray(e)) {
        return `[${e.map((t)=>C(t)).join(",")}]`;
    }
    if (typeof e === "object") {
        let t = e;
        return `{${Object.keys(t).filter((r)=>t[r] !== undefined).sort().map((r)=>`${JSON.stringify(r)}:${C(t[r])}`).join(",")}}`;
    }
    throw TypeError(`canonicalJson: unsupported ${typeof e}`);
}
function ne(e) {
    let t = 0;
    let n = (c)=>{
        throw SyntaxError(`strict JSON: ${c} at ${t}`);
    };
    let r = ()=>{
        while(t < e.length && ` 	
\r`.includes(e.charAt(t))){
            t++;
        }
    };
    let i = ()=>{
        let c = t;
        if (e[t] !== '"') {
            n("expected string");
        }
        t++;
        while(t < e.length && e[t] !== '"'){
            if (e[t] === "\\") {
                t++;
            }
            t++;
        }
        if (t >= e.length) {
            n("unterminated string");
        }
        t++;
        return JSON.parse(e.slice(c, t));
    };
    let s = ()=>{
        r();
        let c = e[t];
        if (c === "{") {
            t++;
            let u = {};
            let l = new Set;
            r();
            if (e[t] === "}") {
                t++;
                return u;
            }
            while(true){
                r();
                let p = i();
                if (l.has(p)) {
                    n(`duplicate key ${JSON.stringify(p)}`);
                }
                l.add(p);
                r();
                if (e[t] !== ":") {
                    n("expected ':'");
                }
                t++;
                Object.defineProperty(u, p, {
                    value: s(),
                    enumerable: true,
                    writable: true,
                    configurable: true
                });
                r();
                if (e[t] === ",") {
                    t++;
                    continue;
                }
                if (e[t] === "}") {
                    t++;
                    return u;
                }
                n("expected ',' or '}'");
            }
        }
        if (c === "[") {
            t++;
            let u = [];
            r();
            if (e[t] === "]") {
                t++;
                return u;
            }
            while(true){
                u.push(s());
                r();
                if (e[t] === ",") {
                    t++;
                    continue;
                }
                if (e[t] === "]") {
                    t++;
                    return u;
                }
                n("expected ',' or ']'");
            }
        }
        if (c === '"') {
            return i();
        }
        let a = /^(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null)/.exec(e.slice(t));
        if (!a) {
            n("unexpected token");
        }
        t += a[0].length;
        return JSON.parse(a[0]);
    };
    let o = s();
    r();
    if (t !== e.length) {
        n("trailing data");
    }
    return o;
}
const qt = "local-pairing+jwt";
const Ft = 4096;
const Kt = 256;
function re(assertion) {
    if (typeof assertion !== "string" || assertion.length === 0 || assertion.length > Ft) {
        throw m("assertion missing or too long");
    }
    let t = assertion.split(".");
    let [n, r, i] = t;
    if (t.length !== 3 || n === undefined || r === undefined || i === undefined) {
        throw m("assertion is not a compact JWS");
    }
    let s;
    let payload;
    let signature;
    try {
        s = ne(N(T(n)));
        payload = ne(N(T(r)));
        signature = T(i);
    } catch (error) {
        throw m(`assertion does not decode: ${String(error)}`);
    }
    if (s === null || typeof s !== "object" || Array.isArray(s) || payload === null || typeof payload !== "object" || Array.isArray(payload)) {
        throw m("assertion header/payload are not objects");
    }
    let a = s;
    if (a.alg !== "ES256") {
        throw new f("bad_signature", `alg ${JSON.stringify(a.alg)} is not ES256`);
    }
    if ("crit" in a) {
        throw m("crit header is not accepted");
    }
    if (a.typ !== qt) {
        throw new f("wrong_issuer_or_audience", `typ ${JSON.stringify(a.typ)}`);
    }
    if (typeof a.kid !== "string" || a.kid.length === 0 || a.kid.length > Kt) {
        throw m("kid missing or too long");
    }
    if (signature.length !== 64) {
        throw new f("bad_signature", "ES256 signature must be exactly 64 bytes");
    }
    return {
        header: {
            kid: a.kid
        },
        payload,
        signingInput: _(`${n}.${r}`),
        signature
    };
}
async function Ce(e, t) {
    if (!await globalThis.crypto.subtle.verify({
        name: "ECDSA",
        hash: "SHA-256"
    }, t, y(e.signature), y(e.signingInput))) {
        throw new f("bad_signature");
    }
}
const Ht = [
    "desktop",
    "chrome_extension"
];
function Wt(client_kind) {
    return Ht.includes(client_kind);
}
const Se = "claude-local-pairing/v1";
const Re = 60;
const Ee = 301;
const Gt = 30;
function F(payload, t) {
    let n = payload[t];
    if (typeof n !== "string" || n.length === 0) {
        throw m(`claim ${t} missing`);
    }
    return n;
}
function Ae(payload, t) {
    let n = payload[t];
    if (typeof n !== "number" || !Number.isFinite(n)) {
        throw m(`claim ${t} missing`);
    }
    return n;
}
function Ie(payload) {
    let client_kind = F(payload, "client_kind");
    if (!Wt(client_kind)) {
        throw new f("wrong_peer_kind", client_kind);
    }
    let e_cnf = payload.cnf;
    if (!e_cnf || typeof e_cnf !== "object" || Array.isArray(e_cnf) || typeof e_cnf.jkt !== "string") {
        throw m("cnf.jkt missing");
    }
    return {
        iss: F(payload, "iss"),
        sub: F(payload, "sub"),
        org: F(payload, "org"),
        azp: typeof payload.azp === "string" ? payload.azp : undefined,
        client_kind,
        hybrid: payload.hybrid === true,
        cnf: {
            jkt: e_cnf.jkt
        },
        iat: Ae(payload, "iat"),
        exp: Ae(payload, "exp"),
        jti: typeof payload.jti === "string" ? payload.jti : undefined
    };
}
async function Oe(assertion, public_key, n) {
    let r = re(assertion);
    let peerRaw = be(public_key);
    let s = await n.jwks.getKey(r.header.kid);
    await Ce(r, s);
    let o = Ie(r.payload);
    let aud = r.payload.aud;
    let a = aud === Se || Array.isArray(aud) && aud.includes(Se);
    if (o.iss !== n.expectedIssuer || !a) {
        throw new f("wrong_issuer_or_audience");
    }
    if (o.exp - o.iat > Ee) {
        throw new f("expired", `assertion lifetime exceeds ${Ee} s`);
    }
    if (o.client_kind !== n.expectedKind) {
        throw new f("wrong_peer_kind", o.client_kind);
    }
    if (await Q(peerRaw) !== o.cnf.jkt) {
        throw new f("key_binding_mismatch");
    }
    return {
        claims: o,
        peerRaw
    };
}
function $e(claims, t) {
    if (claims.iat > t + Re) {
        throw new f("not_yet_valid");
    }
    if (claims.exp + Re <= t) {
        throw new f("expired");
    }
}
const zt = 5;
const Vt = 60;
class ie {
    opts;
    current;
    minting;
    lastFailure;
    epoch = 0;
    clock;
    timeoutSec;
    urls;
    constructor(e){
        this.opts = e;
        this.clock = new v(e);
        this.timeoutSec = e.timeoutSec ?? Z;
        this.urls = J(e.apiOrigin, e.allowLoopbackHttp);
    }
    get issuer() {
        return this.urls.issuer;
    }
    serverNow(e) {
        return e.claims.iat + this.clock.since(e.minted);
    }
    async get() {
        let current = this.current;
        if (current && current.claims.exp - Gt > this.serverNow(current)) {
            return current;
        }
        let lastFailure = this.lastFailure;
        if (lastFailure && this.clock.since(lastFailure.at) < lastFailure.floor) {
            throw lastFailure.error;
        }
        let n = this.minting ??= this.mint().finally(()=>{
            if (this.minting === n) {
                this.minting = undefined;
            }
        });
        return n;
    }
    isCurrent(e) {
        return e.epoch === this.epoch;
    }
    clear() {
        this.epoch += 1;
        this.current = undefined;
        this.minting = undefined;
        this.lastFailure = undefined;
    }
    async mint() {
        let epoch = this.epoch;
        try {
            let t = await ee(this.attest(epoch), this.timeoutSec, ()=>new f("attest_failed", "timed out", {
                    httpStatus: 0
                }));
            if (epoch !== this.epoch) {
                throw new f("not_signed_in", "identity changed during attest");
            }
            this.current = t;
            this.lastFailure = undefined;
            return t;
        } catch (err) {
            let error = err instanceof f ? err : new f("attest_failed", "unexpected", {
                cause: err
            });
            if (epoch === this.epoch && error.code !== "not_signed_in") {
                let r = error.code === "rate_limited" || error.code === "pairing_disabled";
                this.lastFailure = {
                    error,
                    at: this.clock.stamp(),
                    floor: r ? Vt : zt
                };
            }
            throw error;
        }
    }
    async attest(epoch) {
        let t;
        try {
            t = await this.opts.getBearer();
        } catch (error) {
            throw new f("not_signed_in", "bearer unavailable", {
                cause: error
            });
        }
        if (!t) {
            throw new f("not_signed_in");
        }
        let eph = await xe();
        let minted = this.clock.stamp();
        let i;
        try {
            i = await this.opts.fetchImpl(this.urls.attest, {
                method: "POST",
                headers: {
                    authorization: `Bearer ${t}`,
                    "content-type": "application/json",
                    accept: "application/json"
                },
                body: JSON.stringify({
                    public_key: eph.publicKey
                })
            });
        } catch (error) {
            throw new f("attest_failed", "fetch failed", {
                httpStatus: 0,
                cause: error
            });
        }
        if (i.status === 404) {
            throw new f("pairing_disabled", "attest is not enabled", {
                httpStatus: 404
            });
        }
        if (i.status === 429) {
            throw new f("rate_limited", undefined, {
                httpStatus: 429
            });
        }
        if (i.status !== 200) {
            throw new f("attest_failed", `HTTP ${i.status}`, {
                httpStatus: i.status
            });
        }
        let s;
        try {
            s = JSON.parse(await i.text());
        } catch  {
            throw new f("attest_failed", "response is not JSON", {
                httpStatus: 200
            });
        }
        let assertion = s?.assertion;
        if (typeof assertion !== "string") {
            throw new f("attest_failed", "response lacks assertion", {
                httpStatus: 200
            });
        }
        let c = Ie(re(assertion).payload);
        if (c.cnf.jkt !== eph.jkt) {
            throw new f("key_binding_mismatch", "server bound a different key");
        }
        return {
            assertion,
            claims: c,
            eph,
            minted,
            epoch
        };
    }
}
async function Ne(offer, { mac, ...rest }) {
    return q(E(x(O), x(_(C(offer))), x(_(C(rest)))));
}
async function Ue(privateKey, t) {
    return new Uint8Array(await globalThis.crypto.subtle.deriveBits({
        name: "ECDH",
        public: t
    }, privateKey, 256));
}
async function D(e, t, n, r) {
    return new Uint8Array(await globalThis.crypto.subtle.deriveBits({
        name: "HKDF",
        hash: "SHA-256",
        salt: y(t),
        info: y(_(`${O} ${n}`))
    }, e, r * 8));
}
async function De(e, th) {
    let n = await globalThis.crypto.subtle.importKey("raw", y(e), "HKDF", false, [
        "deriveBits"
    ]);
    let [kcD, kcE, kD2e, kE2d, sid] = await Promise.all([
        D(n, th, "confirm d", 32),
        D(n, th, "confirm e", 32),
        D(n, th, "aead d2e", 32),
        D(n, th, "aead e2d", 32),
        D(n, th, "sid", 16)
    ]);
    return {
        th,
        kcD,
        kcE,
        kD2e,
        kE2d,
        sid
    };
}
async function oe(e, t) {
    let n = await globalThis.crypto.subtle.importKey("raw", y(e), {
        name: "HMAC",
        hash: "SHA-256"
    }, false, [
        "sign"
    ]);
    return new Uint8Array(await globalThis.crypto.subtle.sign("HMAC", n, y(t)));
}
function Me(secrets) {
    return oe(secrets.kcE, secrets.th);
}
function Be(secrets) {
    return oe(secrets.kcD, secrets.th);
}
function Le(secrets) {
    return oe(secrets.kcE, E(secrets.th, _("done")));
}
const Xt = [
    "execute_tool",
    "tool_response",
    "notification:permission_request",
    "notification:sealed_broadcast",
    "notification:inference_request",
    "notification:inference_response"
];
const Yt = 3;
const Qt = 33554432;
const Zt = 60;
const en = /\p{Surrogate}/u;
const tn = new Set(Xt);
function je(e) {
    return typeof e === "string" && tn.has(e);
}
function Je(e) {
    return e === undefined || typeof e === "string" && e !== "" && !en.test(e);
}
function nn(chunk) {
    if (chunk === undefined) {
        return true;
    }
    let t = chunk;
    return !!t && typeof t === "object" && P(t.n) && t.n >= 1 && P(t.i) && t.i < t.n;
}
function qe(e, sid, n, r, i, s, chunk) {
    let c = U(n);
    return {
        name: "AES-GCM",
        iv: y(E(new Uint8Array(4), c)),
        additionalData: y(E(x(O), x(e), x(sid), c, x(r), x(i ?? ""), U(s), ...chunk ? [
            x("chunk"),
            U(chunk.i),
            U(chunk.n)
        ] : [])),
        tagLength: 128
    };
}
function Fe(e) {
    try {
        let t = Math.floor(e());
        if (P(t)) {
            return t;
        }
        return Number.NaN;
    } catch  {
        return Number.NaN;
    }
}
async function Ke(e, t) {
    return globalThis.crypto.subtle.importKey("raw", y(e), {
        name: "AES-GCM"
    }, false, [
        t
    ]);
}
const He = ()=>{};
function We(e) {
    try {
        return {
            ok: true,
            inner: JSON.parse(N(e))
        };
    } catch  {
        return {
            ok: false,
            reason: "malformed"
        };
    }
}
class K {
    sid;
    dirOut;
    kOut;
    kIn;
    clock;
    sidB64;
    ctrOut = 0;
    ctrIn = -1;
    tagFailures = 0;
    tornDown = false;
    q = {
        send: Promise.resolve(),
        recv: Promise.resolve()
    };
    partial;
    stats = {
        gaps: 0,
        replays: 0,
        stale: 0,
        badTags: 0
    };
    born;
    constructor(e, t, n, r, i){
        this.sid = e;
        this.dirOut = t;
        this.kOut = n;
        this.kIn = r;
        this.clock = i;
        this.sidB64 = k(e);
        this.born = i.stamp();
    }
    static async create(e, t, n = {}) {
        let [r, i, s] = e === "desktop" ? [
            t.kD2e,
            t.kE2d,
            "d2e"
        ] : [
            t.kE2d,
            t.kD2e,
            "e2d"
        ];
        return new K(t.sid, s, await Ke(r, "encrypt"), await Ke(i, "decrypt"), n.clock ?? new v);
    }
    ownSeconds() {
        return Fe(()=>this.born.wall + this.clock.since(this.born));
    }
    get dirIn() {
        if (this.dirOut === "d2e") {
            return "e2d";
        }
        return "d2e";
    }
    get isTornDown() {
        return this.tornDown;
    }
    enqueue(e, t) {
        let n = this.q[e].then(t, t);
        this.q[e] = n.then(He, He);
        return n;
    }
    seal(e, t, n) {
        return this.sealFrames(e, t, n, undefined).then(([r])=>{
            if (r === undefined) {
                throw Error("seal: no envelope produced");
            }
            return r;
        });
    }
    sealChunked(e, t, n, r) {
        if (!Number.isSafeInteger(r) || r < 1) {
            return Promise.reject(RangeError("sealChunked: maxChunkBytes must be a positive integer"));
        }
        return this.sealFrames(e, t, n, r);
    }
    sealFrames(e, t, n, r) {
        if (this.tornDown) {
            return Promise.reject(Error("sealed channel torn down"));
        }
        if (!je(e)) {
            return Promise.reject(TypeError("seal: unknown frame kind"));
        }
        if (!Je(t)) {
            return Promise.reject(TypeError("seal: toolUseId must be a non-empty well-formed string"));
        }
        let i;
        try {
            let l = JSON.stringify(n);
            if (typeof l !== "string") {
                throw TypeError("not JSON-serialisable");
            }
            i = _(l);
        } catch (error) {
            return Promise.reject(TypeError("seal: inner is not JSON-serialisable", {
                cause: error
            }));
        }
        let s = r !== undefined;
        let o = r ?? i.length;
        let n_1 = Math.ceil(i.length / o);
        let t_1 = Fe(this.clock.wall);
        if (!P(t_1)) {
            return Promise.reject(Error("seal: clock is not a usable time"));
        }
        let ctrOut = this.ctrOut;
        this.ctrOut = ctrOut + n_1;
        if (!Number.isSafeInteger(this.ctrOut)) {
            this.tornDown = true;
            return Promise.reject(Error("sealed channel counter exhausted"));
        }
        return this.enqueue("send", async ()=>{
            let l = [];
            for(let i_1 = 0; i_1 < n_1; i_1++){
                let chunk = s ? {
                    i: i_1,
                    n: n_1
                } : undefined;
                let g = new Uint8Array(await globalThis.crypto.subtle.encrypt(qe(this.dirOut, this.sid, ctrOut + i_1, e, t, t_1, chunk), this.kOut, y(i.subarray(i_1 * o, (i_1 + 1) * o))));
                if (this.tornDown) {
                    throw Error("sealed channel torn down");
                }
                l.push({
                    sid: this.sidB64,
                    ctr: ctrOut + i_1,
                    t: t_1,
                    ct: k(g),
                    ...chunk && {
                        chunk
                    }
                });
            }
            return l;
        });
    }
    open(e, t, n) {
        return this.enqueue("recv", ()=>this.openNow(e, t, n));
    }
    async openNow(e, t, n) {
        if (this.tornDown) {
            return {
                ok: false,
                reason: "torn_down"
            };
        }
        let r = n;
        if (!r || typeof r !== "object" || typeof r.sid !== "string" || typeof r.ct !== "string" || !P(r.t) || !je(e) || !Je(t) || !nn(r.chunk)) {
            return {
                ok: false,
                reason: "malformed"
            };
        }
        let { t: t_1, chunk } = r;
        if (r.sid !== this.sidB64) {
            return {
                ok: false,
                reason: "foreign_sid"
            };
        }
        let r_ctr = r.ctr;
        if (!P(r_ctr)) {
            return {
                ok: false,
                reason: "malformed"
            };
        }
        if (r_ctr <= this.ctrIn) {
            this.stats.replays += 1;
            return {
                ok: false,
                reason: "replay"
            };
        }
        if (!(Math.abs(this.ownSeconds() - t_1) <= Zt)) {
            this.stats.stale += 1;
            return {
                ok: false,
                reason: "stale"
            };
        }
        let a;
        try {
            a = T(r.ct);
        } catch  {
            return {
                ok: false,
                reason: "malformed"
            };
        }
        if (a.length < 16) {
            return {
                ok: false,
                reason: "malformed"
            };
        }
        let u;
        try {
            u = await globalThis.crypto.subtle.decrypt(qe(this.dirIn, this.sid, r_ctr, e, t, t_1, chunk), this.kIn, y(a));
        } catch  {
            this.stats.badTags += 1;
            if (++this.tagFailures >= Yt) {
                this.tearDown();
            }
            return {
                ok: false,
                reason: "bad_tag"
            };
        }
        if (this.tornDown) {
            return {
                ok: false,
                reason: "torn_down"
            };
        }
        if (r_ctr > this.ctrIn + 1) {
            this.stats.gaps += r_ctr - this.ctrIn - 1;
        }
        this.ctrIn = r_ctr;
        let l = new Uint8Array(u);
        if (!chunk) {
            this.partial = undefined;
            return We(l);
        }
        return this.reassemble(r_ctr, chunk, l);
    }
    reassemble(firstCtr, t, n) {
        let partial = this.partial;
        this.partial = undefined;
        if (t.i === 0) {
            partial = {
                firstCtr,
                n: t.n,
                parts: [],
                bytes: 0
            };
        } else if (!partial || firstCtr !== partial.firstCtr + partial.parts.length) {
            return {
                ok: false,
                reason: "bad_chunk"
            };
        }
        if (partial.bytes + n.length > Qt) {
            return {
                ok: false,
                reason: "bad_chunk"
            };
        }
        partial.parts.push(n);
        partial.bytes += n.length;
        if (partial.parts.length < partial.n) {
            this.partial = partial;
            return {
                ok: false,
                reason: "partial"
            };
        }
        return We(Y(partial.parts));
    }
    tearDown() {
        this.tornDown = true;
        this.partial = undefined;
    }
}
const v_1 = 1;
const rn = 30;
const Ve = {
    offer: "instance_hint",
    accept: "instance"
};
const Xe = 32;
function se(e, t) {
    return e.toLowerCase() === t.toLowerCase();
}
function on(claims, t, policy) {
    if (t.sub !== claims.sub) {
        throw new f("account_mismatch");
    }
    if (policy.requiredOrg !== undefined) {
        if (!se(claims.org, policy.requiredOrg)) {
            throw new f("org_not_permitted", "own sign-in is not in the configured org");
        }
    }
    let r = t.hybrid && t.client_kind === "desktop";
    let i = !policy.allowedOrgs || policy.allowedOrgs.some((s)=>se(s, t.org));
    if (r && !i) {
        throw new f("org_not_permitted", "the managing Desktop's org is outside the configured list");
    }
    if ((policy.requiredOrg !== undefined || r || policy.hybridSignIn) && !se(t.org, claims.org)) {
        throw new f("org_mismatch", undefined, i ? {
            peerOrg: t.org
        } : {});
    }
}
function ce(e, t, n) {
    if (typeof e !== "string") {
        throw m(`${t} missing`);
    }
    let r;
    try {
        r = T(e);
    } catch  {
        throw m(`${t} not base64url`);
    }
    if (n !== undefined && r.length !== n) {
        throw m(`${t} must be ${n} bytes`);
    }
    return r;
}
function Ye(e, t) {
    let n = e;
    if (!n || typeof n !== "object" || n.msg !== t) {
        throw m(`pair_${t} malformed`);
    }
    if (n.v !== v_1) {
        let r = typeof n.v === "number" ? String(n.v) : typeof n.v;
        throw m(`unsupported v ${r}`);
    }
    return n;
}
function Qe(e, t) {
    if (e === undefined) {
        return;
    }
    if (!e || typeof e !== "object" || Array.isArray(e) || C(e).length > 1024) {
        throw m(`${t} must be a small object`);
    }
    return e;
}
function sn(e, t) {
    let n = Ve[t];
    let hello = Ye(e, t);
    try {
        C(hello);
    } catch  {
        throw m(`pair_${t} is not canonical JSON`);
    }
    ce(hello.nonce, "nonce", Xe);
    let instance = Qe(hello[n], n);
    return {
        hello,
        instance
    };
}
function an(msg, own, instanceHint) {
    let r = {
        msg,
        v: v_1,
        assertion: own.assertion,
        public_key: own.eph.publicKey,
        nonce: k(we(Xe))
    };
    if (instanceHint) {
        r[Ve[msg]] = instanceHint;
    }
    return r;
}
function cn(e, t) {
    let n = Ye(e, t);
    if (typeof n.sid !== "string") {
        throw m(`pair_${t} sid missing`);
    }
    return {
        sid: n.sid,
        mac: ce(n.mac, `pair_${t} mac`)
    };
}
function un(instanceHint, t) {
    if (instanceHint === undefined) {
        return;
    }
    try {
        return Qe(JSON.parse(JSON.stringify(instanceHint)), t);
    } catch (error) {
        throw TypeError(`${t} must be a small JSON object`, {
            cause: error
        });
    }
}
function Ze(source, own) {
    if (!source.isCurrent(own)) {
        throw new f("not_signed_in", "identity changed during the handshake");
    }
}
function Ge(e, t, n) {
    if (!ye(e, t)) {
        throw new f("bad_key_confirmation", n);
    }
}
function ze(clock, t, n) {
    if (clock.since(t) > rn) {
        throw new f("expired", `${n} took too long`);
    }
}
async function ln(e, source, clock, r) {
    let channel = await K.create(e, r.secrets, {
        clock
    });
    Ze(source, r.own);
    return {
        sidB64: channel.sidB64,
        channel,
        own: r.own.claims,
        peer: r.peer,
        peerInstance: r.peerInstance,
        establishedAt: clock.wall()
    };
}
class ue {
    opts;
    phase = {
        is: "fresh"
    };
    clock;
    instanceHint;
    constructor(e){
        this.opts = e;
        this.clock = new v(e);
        this.instanceHint = un(e.instanceHint, "instanceHint");
    }
    enter(e, t) {
        let phase = this.phase;
        if (phase.is !== e) {
            throw m(t);
        }
        this.phase = {
            is: "busy"
        };
        return phase;
    }
    async step(e) {
        try {
            let { next, out } = await e();
            this.phase = next;
            return out;
        } catch (error) {
            this.phase = {
                is: "spent"
            };
            throw error;
        }
    }
    async createOffer() {
        this.enter("fresh", "createOffer already called; use a new Initiator");
        return this.step(async ()=>{
            let own = await this.opts.source.get();
            let t = an("offer", own, this.instanceHint);
            return {
                next: {
                    is: "offered",
                    offer: t,
                    own,
                    at: this.clock.stamp()
                },
                out: t
            };
        });
    }
    async onAccept(e) {
        let t = this.enter("offered", "no offer outstanding");
        return this.step(async ()=>{
            ze(this.clock, t.at, "pair_accept");
            let { hello, instance } = sn(e, "accept");
            let i = ce(hello.mac, "pair_accept mac");
            let { source, jwks, policy } = this.opts;
            let { claims, peerRaw } = await Oe(hello.assertion, hello.public_key, {
                jwks,
                expectedIssuer: source.issuer,
                expectedKind: "chrome_extension"
            });
            $e(claims, source.serverNow(t.own));
            on(t.own.claims, claims, policy);
            let l = await _e(peerRaw);
            let p = await Ue(t.own.eph.keyPair.privateKey, l);
            let h = await Ne(t.offer, hello);
            let secrets = await De(p, h);
            Ge(i, await Me(secrets));
            let d = await Be(secrets);
            Ze(source, t.own);
            let w = k(secrets.sid);
            return {
                next: {
                    is: "finishing",
                    own: t.own,
                    secrets,
                    sidB64: w,
                    peer: claims,
                    peerInstance: instance,
                    at: this.clock.stamp()
                },
                out: {
                    msg: "finish",
                    v: v_1,
                    sid: w,
                    mac: k(d)
                }
            };
        });
    }
    async onDone(e) {
        let t = this.enter("finishing", "no finish outstanding");
        return this.step(async ()=>{
            ze(this.clock, t.at, "pair_done");
            let n = cn(e, "done");
            if (n.sid !== t.sidB64) {
                throw new f("bad_key_confirmation", "pair_done sid differs");
            }
            Ge(n.mac, await Le(t.secrets), "pair_done mac");
            let out = await ln("desktop", this.opts.source, this.clock, t);
            return {
                next: {
                    is: "spent"
                },
                out
            };
        });
    }
}
function et(local_pairing) {
    let t = local_pairing;
    if (!t || typeof t !== "object" || t.msg !== "refuse") {
        return;
    }
    return me(t.code);
}
const tt = new WeakMap;
function nt(e) {
    let t = tt.get(e);
    if (!t) {
        t = {
            source: new ie(e),
            jwks: new te(e)
        };
        tt.set(e, t);
    }
    return t;
}
function dn(category) {
    if (typeof category === "string" && /^category[0-9a-z_]{1,32}$/.test(category)) {
        return category;
    }
}
function pn({ _perActionOnly, _privateHostReadAlwaysOffer, _privateHostReadAlways, ...rest }) {
    return rest;
}
function g7n(e, t) {
    return {
        toolUseId: t.toolUseId,
        requestId: t.requestId,
        toolType: typeof e.tool_type === "string" ? e.tool_type : "unknown",
        url: typeof e.url === "string" ? e.url : "",
        actionData: e.action_data && typeof e.action_data === "object" ? pn(e.action_data) : undefined,
        category: dn(e.category)
    };
}
function h7n(e) {
    return {
        ...e?.permissionMode ? {
            permission_mode: e.permissionMode
        } : {},
        ...e?.allowedDomains?.length ? {
            allowed_domains: e.allowedDomains
        } : {},
        ...e?.onPermissionRequest ? {
            handle_permission_prompts: true
        } : {},
        ...e?.sessionScope ? {
            session_scope: e.sessionScope
        } : {}
    };
}
function yMe(e, t = 64) {
    return JSON.stringify(String(e).slice(0, t));
}
class wA extends Error {
    constructor(e){
        super(e);
        this.name = "SocketConnectionError";
    }
}
class W extends Error {
    constructor(e){
        super(e);
        this.name = "ToolCallSupersededError";
    }
}
class Dze extends Error {
    constructor(e){
        super(e);
        this.name = "NoExtensionConnectedError";
    }
}
class Lze extends Error {
    routingAckReceived;
    constructor(e, t){
        super(e);
        this.name = "ToolCallTimeoutError";
        this.routingAckReceived = t?.routingAckReceived;
    }
}
class MX extends Error {
    constructor(e){
        super(e);
        this.name = "ExtensionDisconnectedMidCallError";
    }
}
class B extends Error {
    constructor(e){
        super(e);
        this.name = "RequestTooLargeError";
    }
}
function it(e) {
    return "result" in e || "error" in e;
}
function ot(e) {
    return "method" in e && typeof e.method === "string";
}
const H = 5000;
const mn = 15000;
const yn = 15000;
const st = 28800000;
const at = 1000;
const ct = 20000;
const ut = 5000;
const wn = 10000;
const I = 1032192;
const bn = 1024;
const de = Math.floor((I - bn) * 3 / 4) - 16;
class M extends f {
    constructor(e, httpStatus){
        super(e, "peer-reported", {
            httpStatus
        });
        this.name = "PeerRefusedPairing";
    }
}
class A extends Error {
    which;
    constructor(e){
        super(e === "reply" ? "No reply to a pairing message" : "Our attest/JWKS step overran while pairing");
        this.which = e;
        this.name = "HandshakeTimeout";
    }
}
function lt(e, t) {
    let e_result = e.result;
    if (e_result && typeof e_result === "object" && e_result.local_pairing) {
        if (e_result.local_pairing.msg === t) {
            return e_result.local_pairing;
        }
        throw new f("malformed", `expected ${t}`);
    }
    let e_error = e.error;
    if (e_error && typeof e_error === "object" && e_error.local_pairing) {
        let i = et(e_error.local_pairing);
        let s = e_error.local_pairing.code;
        let o = typeof s === "string" && /^attest_failed:\d{1,3}$/.test(s) ? Number(s.slice(14)) : undefined;
        throw new M(i ?? "malformed", o);
    }
    if (t === "accept" && pt(e)) {
        throw new M("unsupported_peer");
    }
    throw new f("malformed", "unrecognised reply to a pairing message");
}
function _n(httpStatus) {
    return httpStatus === undefined || httpStatus < 400 || httpStatus >= 500;
}
const dt = (e)=>e === "ENOENT" || e === "ECONNREFUSED";
function x4o(e, t) {
    switch(e){
        case "pairing_disabled":
        case "org_not_permitted":
        case "unsupported_peer":
        case "wrong_peer_kind":
            return "durable";
        case "account_mismatch":
        case "org_mismatch":
            return "peer_may_move";
        case "not_signed_in":
            if (t) {
                return "peer_not_ready";
            }
            return "awaits_token";
        case "managed_org_missing":
            return "peer_not_ready";
        case "attest_failed":
            return "awaits_token";
        default:
            return "retry";
    }
}
function kn(error) {
    if (!(error instanceof f)) {
        return false;
    }
    switch(error.code){
        case "jwks_unavailable":
            return true;
        case "attest_failed":
            return _n(error.httpStatus);
        case "not_signed_in":
            return !(error instanceof M) && error.cause !== undefined;
        default:
            return false;
    }
}
function pt(e) {
    let t = e.error?.content;
    if (!Array.isArray(t) || t.length !== 1) {
        return false;
    }
    let n = t[0];
    return n?.type === "text" && n.text === "No tool specified";
}
function pe(e, t = I) {
    return new B(`Request too large for the local browser connection (${e} bytes; limit ${t}). Send smaller inputs or fewer files per call.`);
}
function xn(pairing) {
    let t = pairing.peerInstance?.max_reassembly_bytes;
    if (typeof t === "number" && Number.isSafeInteger(t) && t > 0) {
        return t;
    }
}
function Tn(e) {
    let t = e;
    return !!t && typeof t === "object" && typeof t.max_tokens === "number" && Array.isArray(t.messages);
}
class ft {
    socket = null;
    connected = false;
    connecting = false;
    connectEpoch = 0;
    pending = null;
    currentPath;
    handshaking = false;
    pairing = null;
    pairingWaiter = null;
    pairingExpired = false;
    pairingAgeTimer = null;
    pairingGraceTimer = null;
    lastPairingRefuse;
    loggedRefusal;
    forcedTeardownAt = 0;
    notificationHandler = null;
    responseBuffer = Buffer.alloc(0);
    responseChunks = [];
    responseChunkBytes = 0;
    reconnectAttempts = 0;
    maxReconnectAttempts = 10;
    reconnectDelay = 1000;
    reconnectTimer = null;
    connectTimer = null;
    context;
    disableAutoReconnect = false;
    onRedialWanted;
    pairingProbeTimer = null;
    probeToolUseId;
    probesAnswered = 0;
    constructor(e){
        this.context = e;
    }
    async connect() {
        let { serverName, logger } = this.context;
        if (this.connecting) {
            logger.info(`[${serverName}] Already connecting, skipping duplicate attempt`);
            return;
        }
        this.closeSocket();
        this.connecting = true;
        this.lastPairingRefuse = undefined;
        let connectEpoch = this.connectEpoch;
        let r = this.context.getSocketPath?.() ?? this.context.socketPath;
        this.currentPath = r;
        this.logDial(`[${serverName}] Attempting to connect to: ${r}`);
        let i;
        try {
            i = await this.validateSocketSecurity(r);
        } catch (error) {
            if (connectEpoch === this.connectEpoch) {
                this.connecting = false;
            }
            logger.info(`[${serverName}] Security validation failed:`, error);
            return;
        }
        if (!i) {
            if (connectEpoch === this.connectEpoch) {
                this.connecting = false;
                this.scheduleReconnect("dead");
            }
            return;
        }
        if (connectEpoch !== this.connectEpoch) {
            return;
        }
        let localPairing = this.context.localPairing;
        if (localPairing && !await this.ownIdentityPresent(localPairing, connectEpoch)) {
            return;
        }
        let o;
        let { connectVerified } = this.context;
        if (connectVerified) {
            try {
                o = await connectVerified(r);
            } catch (error) {
                if (connectEpoch !== this.connectEpoch) {
                    return;
                }
                this.connecting = false;
                let l = error.code;
                if (dt(l)) {
                    logger.info(`[${serverName}] Socket not found; not dialing`);
                    this.scheduleReconnect("dead");
                } else if (l === "EPERM" || l === "EACCES" || l === "EPEERCRED" || !l) {
                    logger.info(`[${serverName}] Security validation failed:`, error);
                } else {
                    logger.info(`[${serverName}] Verified dial failed:`, error);
                    this.scheduleReconnect();
                }
                return;
            }
            if (connectEpoch !== this.connectEpoch) {
                o.destroy();
                return;
            }
        } else {
            o = createConnection(r);
        }
        this.socket = o;
        let a = ()=>{
            this.clearConnectTimer();
            this.clearReconnectTimer();
            if (localPairing) {
                this.reconnectAttempts = Math.min(this.reconnectAttempts, this.maxReconnectAttempts);
                this.pair(connectEpoch, localPairing);
                return;
            }
            this.connected = true;
            this.connecting = false;
            this.reconnectAttempts = 0;
            logger.info(`[${serverName}] Successfully connected to bridge server`);
        };
        o.on("data", (u)=>{
            let responseBuffer = this.responseBuffer;
            let p = responseBuffer.length + this.responseChunkBytes + u.length;
            if (responseBuffer.length >= 4 && p < 4 + responseBuffer.readUInt32LE(0)) {
                this.responseChunks.push(u);
                this.responseChunkBytes += u.length;
                return;
            }
            if (this.responseChunks.length > 0) {
                this.responseBuffer = Buffer.concat([
                    responseBuffer,
                    ...this.responseChunks,
                    u
                ], p);
                this.responseChunks = [];
                this.responseChunkBytes = 0;
            } else {
                this.responseBuffer = responseBuffer.length === 0 ? u : Buffer.concat([
                    responseBuffer,
                    u
                ], p);
            }
            while(this.responseBuffer.length >= 4){
                let h = this.responseBuffer.readUInt32LE(0);
                if (this.responseBuffer.length < 4 + h) {
                    break;
                }
                let g = this.responseBuffer.slice(4, 4 + h);
                this.responseBuffer = this.responseBuffer.slice(4 + h);
                try {
                    let d = JSON.parse(g.toString("utf-8"));
                    if (localPairing) {
                        this.dispatchPairingRail(d, connectEpoch);
                        continue;
                    }
                    if (ot(d)) {
                        logger.info(`[${serverName}] Received notification: ${yMe(d.method)}`);
                        if (!(d.method === "permission_request" && this.claimPermissionRequest(d.params))) {
                            this.notificationHandler?.(d);
                        }
                    } else if (it(d)) {
                        logger.info(`[${serverName}] Received tool response for ${yMe(d.tool_use_id ?? "(untagged)")}`);
                        this.handleResponse(d, h);
                    } else {
                        logger.info(`[${serverName}] Received a message of unknown shape`);
                    }
                } catch (error) {
                    logger.info(`[${serverName}] Failed to parse message:`, error);
                }
            }
        });
        o.on("error", (u)=>{
            logger.info(`[${serverName}] Socket error (code: ${u.code}):`, u);
            this.closeSocket();
            this.scheduleReconnect(dt(u.code) ? "dead" : "transport");
        });
        o.on("close", ()=>{
            this.closeSocket();
            this.scheduleReconnect();
        });
        if (connectVerified) {
            a();
            return;
        }
        this.connectTimer = setTimeout(()=>{
            if (!this.connected) {
                logger.info(`[${serverName}] Connection attempt timed out after ${H}ms`);
                this.closeSocket();
                this.scheduleReconnect();
            }
        }, H);
        o.on("connect", a);
    }
    scheduleReconnect(e = "transport") {
        let { serverName, logger } = this.context;
        if (this.disableAutoReconnect) {
            this.onRedialWanted?.(e);
            return;
        }
        if (this.reconnectTimer) {
            logger.info(`[${serverName}] Reconnect already scheduled, skipping`);
            return;
        }
        this.reconnectAttempts++;
        let r = 100;
        if (this.reconnectAttempts > r) {
            logger.info(`[${serverName}] Giving up after ${r} attempts. Will retry on next tool call.`);
            this.reconnectAttempts = 0;
            return;
        }
        let i = Math.min(this.reconnectDelay * 1.5 ** (this.reconnectAttempts - 1), 30000);
        if (this.reconnectAttempts <= this.maxReconnectAttempts) {
            logger.info(`[${serverName}] Reconnecting in ${Math.round(i)}ms (attempt ${this.reconnectAttempts})`);
        } else if (this.reconnectAttempts % 10 === 0) {
            logger.info(`[${serverName}] Still polling for native host (attempt ${this.reconnectAttempts})`);
        }
        this.reconnectTimer = setTimeout(()=>{
            this.reconnectTimer = null;
            this.connect();
        }, i);
    }
    dispatchPairingRail(e, t) {
        let { serverName, logger } = this.context;
        if (!e || typeof e !== "object") {
            logger.info(`[${serverName}] Dropping a non-object frame`);
            return;
        }
        if (!this.connected) {
            if (this.pairingWaiter && it(e) && (e.tool_use_id === this.pairingWaiter.toolUseId || e.tool_use_id === undefined && this.pairingWaiter.acceptsUntagged && pt(e))) {
                let i = this.pairingWaiter;
                this.pairingWaiter = null;
                clearTimeout(i.timer);
                i.resolve(e);
                return;
            }
            logger.info(`[${serverName}] Dropping frame received before the connection was admitted`);
            return;
        }
        this.dispatchSealed(e, t);
    }
    async pair(e, t) {
        let { serverName, logger } = this.context;
        let i = this.currentPath ?? this.context.socketPath;
        this.handshaking = true;
        this.reportPairingState(t, {
            state: "pairing",
            socketPath: i
        });
        try {
            let { source, jwks } = nt(t);
            let c = new ue({
                source,
                jwks,
                policy: {
                    requiredOrg: t.requiredOrg
                },
                instanceHint: t.instanceHint
            });
            let a = Math.min(at, this.forcedTeardownAt + at - Date.now());
            if (a > 0) {
                await new Promise((resolve)=>setTimeout(resolve, a).unref?.());
                if (e !== this.connectEpoch) {
                    return;
                }
            }
            let u = await this.withPairingStepDeadline(c.createOffer());
            if (e !== this.connectEpoch) {
                return;
            }
            let l = lt(await this.exchangePairing({
                ...u
            }, true), "accept");
            if (e !== this.connectEpoch) {
                return;
            }
            let p = await this.withPairingStepDeadline(c.onAccept(l));
            if (e !== this.connectEpoch) {
                return;
            }
            let h = lt(await this.exchangePairing({
                ...p
            }, false), "done");
            if (e !== this.connectEpoch) {
                return;
            }
            let g = await c.onDone(h);
            if (e !== this.connectEpoch) {
                g.channel.tearDown();
                return;
            }
            if (!this.socket || this.socket.destroyed) {
                g.channel.tearDown();
                this.closeSocket();
                this.scheduleReconnect();
                return;
            }
            this.pairing = g;
            this.pairingExpired = false;
            this.pairingAgeTimer = setTimeout(()=>{
                if (this.pairing !== g) {
                    return;
                }
                this.pairingExpired = true;
                if (!this.pending) {
                    this.expirePairing();
                    return;
                }
                this.startAgeGrace(this.pending);
            }, st);
            this.pairingAgeTimer.unref?.();
            this.handshaking = false;
            this.connected = true;
            this.connecting = false;
            this.reconnectAttempts = 0;
            this.probesAnswered = 0;
            this.schedulePairingProbe();
            this.loggedRefusal = undefined;
            logger.info(`[${serverName}] Local pairing established with ${i} (peer ${g.peer.client_kind}, sid ${g.sidB64.slice(0, 8)}\u2026)`);
            this.reportPairingState(t, {
                state: "established",
                socketPath: i,
                peerKind: g.peer.client_kind,
                peerInstance: g.peerInstance,
                assertionExp: g.peer.exp
            });
        } catch (error) {
            if (e !== this.connectEpoch) {
                return;
            }
            this.handshaking = false;
            if (error instanceof A) {
                logger.warn(`[${serverName}] ${error.message} (${i}); reconnecting`);
                this.lastPairingRefuse = {
                    code: "timeout",
                    peerReported: false
                };
                this.reportPairingState(t, {
                    state: "refused",
                    socketPath: i,
                    code: "timeout",
                    wire: "timeout",
                    peerReported: false
                });
                this.closeSocket();
                this.scheduleReconnect();
                return;
            }
            let peerReported = error instanceof M;
            let c = error instanceof f ? error : undefined;
            let code = c?.code ?? "malformed";
            let wire = c?.wireCode() ?? code;
            this.logRefusal(`[${serverName}] Local pairing with ${i} refused: ${wire}${peerReported ? " (peer-reported, unauthenticated)" : ""}`, c ? undefined : error);
            this.lastPairingRefuse = {
                code,
                peerReported
            };
            this.reportPairingState(t, {
                state: "refused",
                socketPath: i,
                code,
                wire,
                ...c?.httpStatus !== undefined && {
                    httpStatus: c.httpStatus
                },
                peerReported
            });
            this.closeSocket();
            if (kn(error)) {
                this.scheduleReconnect();
            }
        }
    }
    async ownIdentityPresent(e, t) {
        let { serverName } = this.context;
        let r = this.currentPath ?? this.context.socketPath;
        let i;
        let s = false;
        try {
            i = await this.withPairingStepDeadline(e.getBearer());
        } catch  {
            s = true;
        }
        if (t !== this.connectEpoch) {
            return false;
        }
        if (i) {
            return true;
        }
        this.connecting = false;
        this.lastPairingRefuse = {
            code: "not_signed_in",
            peerReported: false
        };
        this.logRefusal(`[${serverName}] Local pairing with ${r} refused: not_signed_in (no bearer of our own${s ? "; token source failed" : ""}; not dialing)`);
        this.reportPairingState(e, {
            state: "refused",
            socketPath: r,
            code: "not_signed_in",
            wire: "not_signed_in",
            peerReported: false
        });
        if (s) {
            this.scheduleReconnect();
        }
        return false;
    }
    logRefusal(e, ...t) {
        if (e === this.loggedRefusal) {
            this.context.logger.debug(e, ...t);
            return;
        }
        this.loggedRefusal = e;
        this.context.logger.warn(e, ...t);
    }
    logDial(e) {
        if (this.loggedRefusal === undefined) {
            this.context.logger.info(e);
        } else {
            this.context.logger.debug(e);
        }
    }
    withPairingStepDeadline(e) {
        let t;
        let n = new Promise((resolve, reject)=>{
            t = setTimeout(()=>reject(new A("step")), yn);
            t.unref?.();
        });
        return Promise.race([
            e,
            n
        ]).finally(()=>clearTimeout(t));
    }
    reportPairingState(e, t) {
        try {
            e.onPairingState?.(t);
        } catch (error) {
            this.context.logger.warn(`[${this.context.serverName}] onPairingState handler threw:`, error);
        }
    }
    exchangePairing(local_pairing, acceptsUntagged) {
        return new Promise((resolve, reject)=>{
            let i = randomUUID();
            let timer = setTimeout(()=>{
                if (this.pairingWaiter?.toolUseId === i) {
                    this.pairingWaiter = null;
                    reject(new A("reply"));
                }
            }, mn);
            if (this.pairingWaiter) {
                clearTimeout(this.pairingWaiter.timer);
                this.pairingWaiter.reject(new A("reply"));
            }
            this.pairingWaiter = {
                toolUseId: i,
                acceptsUntagged,
                resolve,
                reject,
                timer
            };
            this.writeRaw({
                method: "execute_tool",
                params: {
                    client_id: this.context.clientTypeId,
                    tool_use_id: i,
                    local_pairing
                }
            });
        });
    }
    async writeSealed(e, t) {
        let pairing = this.pairing;
        if (!pairing || !this.connected) {
            throw new wA(`[${this.context.serverName}] Cannot send request: not paired`);
        }
        let r = Buffer.byteLength(JSON.stringify(t), "utf-8");
        let i = xn(pairing);
        let s = r > de && i !== undefined;
        if (s && r > i) {
            throw pe(r, i);
        }
        if (!s && Math.ceil(r * 4 / 3) > I) {
            throw pe(Math.ceil(r * 4 / 3));
        }
        let o;
        try {
            o = s ? await pairing.channel.sealChunked("execute_tool", e, t, de) : [
                await pairing.channel.seal("execute_tool", e, t)
            ];
        } catch (error) {
            if (this.pairing !== pairing || pairing.channel.isTornDown) {
                throw new wA(`[${this.context.serverName}] Pairing changed while sealing`);
            }
            throw error;
        }
        if (this.pairing !== pairing) {
            throw new wA(`[${this.context.serverName}] Pairing changed while sealing`);
        }
        if (s) {
            this.context.logger.info(`[${this.context.serverName}] Sealed request sliced into ${o.length} frames (${r} bytes, max ${de} per slice)`);
        }
        let c = o.map((a)=>{
            let frame_1 = {
                method: "execute_tool",
                params: {
                    tool_use_id: e,
                    sealed: a
                }
            };
            let bytes_1 = Buffer.from(JSON.stringify(frame_1), "utf-8");
            if (bytes_1.length > I) {
                throw pe(bytes_1.length);
            }
            return {
                frame: frame_1,
                bytes: bytes_1
            };
        });
        for (let { frame, bytes } of c){
            this.writeRaw(frame, bytes);
        }
    }
    async answerInferenceRequest(request_id, t, n) {
        let { serverName, logger, localPairing } = this.context;
        let result;
        try {
            if (!request_id || !Tn(t)) {
                result = {
                    ok: false,
                    error: "malformed"
                };
            } else if (this.context.isDisabled?.() || !localPairing?.onInferenceRequest) {
                result = {
                    ok: false,
                    error: "not_supported"
                };
            } else {
                result = await localPairing.onInferenceRequest(t);
            }
            let a = Math.ceil(Buffer.byteLength(JSON.stringify(result), "utf-8") * 4 / 3);
            if (a > I) {
                logger.warn(`[${serverName}] inference_response too large (${a} bytes); answering too_large`);
                result = {
                    ok: false,
                    error: "too_large"
                };
            }
        } catch (error) {
            logger.warn(`[${serverName}] inference seam failed:`, error);
            result = {
                ok: false,
                error: "handler_error"
            };
        }
        let pairing = this.pairing;
        if (n !== this.connectEpoch || !pairing) {
            return;
        }
        try {
            let a = await pairing.channel.seal("notification:inference_response", request_id, {
                method: "inference_response",
                params: {
                    request_id,
                    result
                }
            });
            if (n !== this.connectEpoch || this.pairing !== pairing) {
                return;
            }
            let u = {
                method: "inference_response",
                params: {
                    request_id,
                    sealed: a
                }
            };
            let l = Buffer.from(JSON.stringify(u), "utf-8");
            if (l.length > I) {
                logger.warn(`[${serverName}] inference_response frame oversized after seal (${l.length} bytes); dropped`);
                return;
            }
            this.writeRaw(u, l);
        } catch (error) {
            logger.warn(`[${serverName}] Failed to seal inference_response:`, error);
        }
    }
    lastPairingRefuseCode() {
        return this.lastPairingRefuse?.code;
    }
    lastPairingRefusePeerReported() {
        return this.lastPairingRefuse?.peerReported ?? false;
    }
    isPaired() {
        return this.connected && this.pairing !== null;
    }
    pairingAgedOut() {
        if (!this.pairing) {
            return false;
        }
        if (Date.now() / 1000 - this.pairing.establishedAt > st / 1000) {
            this.pairingExpired = true;
        }
        if (this.pairingExpired && this.pending) {
            this.startAgeGrace(this.pending);
        }
        return this.pairingExpired;
    }
    startAgeGrace(e) {
        if (this.pairingGraceTimer) {
            return;
        }
        let pairing = this.pairing;
        this.pairingGraceTimer = setTimeout(()=>{
            if (this.pairing === pairing) {
                this.expirePairing();
            }
        }, e.timeoutMs);
        this.pairingGraceTimer.unref?.();
    }
    forceRepair(e, t = false) {
        this.forcedTeardownAt = Date.now();
        this.failPending(e);
        this.closeSocket();
        this.scheduleReconnect(t ? "peer_dropped" : "transport");
    }
    schedulePairingProbe() {
        this.clearPairingProbe();
        this.pairingProbeTimer = setTimeout(()=>{
            this.pairingProbeTimer = null;
            if (!this.connected || !this.pairing) {
                return;
            }
            if (this.pending) {
                this.schedulePairingProbe();
                return;
            }
            if (this.pairingAgedOut()) {
                this.expirePairing();
                return;
            }
            let e = {
                method: "execute_tool",
                params: {
                    client_id: this.context.clientTypeId,
                    tool_use_id: randomUUID()
                }
            };
            this.probeToolUseId = e.params.tool_use_id;
            let t = ()=>{
                this.probeToolUseId = undefined;
                if (this.connected && this.pairing) {
                    this.schedulePairingProbe();
                }
            };
            this.sendRequest(e, wn).then(()=>{
                this.probesAnswered += 1;
                if (this.probesAnswered === 1) {
                    this.context.logger.info(`[${this.context.serverName}] Local pairing liveness probe answered; probing every ${(this.context.localPairing?.probeIntervalMs ?? ut) / 1000} s while idle`);
                } else {
                    this.context.logger.debug(`[${this.context.serverName}] Local pairing liveness probe ${this.probesAnswered} answered`);
                }
                t();
            }, t);
        }, this.context.localPairing?.probeIntervalMs ?? ut);
        this.pairingProbeTimer.unref?.();
    }
    probesAnsweredCount() {
        return this.probesAnswered;
    }
    clearPairingProbe() {
        if (this.pairingProbeTimer) {
            clearTimeout(this.pairingProbeTimer);
            this.pairingProbeTimer = null;
        }
    }
    expirePairing() {
        this.context.logger.info(`[${this.context.serverName}] Local pairing reached its maximum age; re-pairing`);
        this.closeSocket();
        this.scheduleReconnect();
    }
    clearPairing(e) {
        if (this.pairingWaiter) {
            clearTimeout(this.pairingWaiter.timer);
            let r = this.pairingWaiter;
            this.pairingWaiter = null;
            r.reject(new A("reply"));
        }
        if (this.pairingAgeTimer) {
            clearTimeout(this.pairingAgeTimer);
            this.pairingAgeTimer = null;
        }
        if (this.pairingGraceTimer) {
            clearTimeout(this.pairingGraceTimer);
            this.pairingGraceTimer = null;
        }
        let pairing = this.pairing;
        let reason = !pairing ? "handshake_aborted" : pairing.channel.isTornDown ? "forged_frames" : this.pairingExpired ? "expired" : "connection_closed";
        this.pairing?.channel.tearDown();
        this.pairing = null;
        this.pairingExpired = false;
        if ((pairing || e) && this.context.localPairing) {
            this.reportPairingState(this.context.localPairing, {
                state: "closed",
                socketPath: this.currentPath ?? this.context.socketPath,
                reason
            });
        }
    }
    async dispatchSealed(e, t) {
        let { serverName, logger } = this.context;
        let pairing = this.pairing;
        if (!pairing) {
            return;
        }
        let s;
        let o;
        let c;
        if (ot(e)) {
            if (e.method === "permission_request") {
                s = "notification:permission_request";
                let l = e.params?.tool_use_id;
                o = typeof l === "string" ? l : undefined;
            } else if (e.method === "sealed_broadcast") {
                s = "notification:sealed_broadcast";
                o = undefined;
            } else if (e.method === "inference_request") {
                s = "notification:inference_request";
                let l = e.params?.request_id;
                o = typeof l === "string" ? l : undefined;
            } else {
                logger.info(`[${serverName}] Dropping unsealed notification on a paired connection`);
                return;
            }
            c = e.params?.sealed;
        } else {
            let l = e;
            if (typeof l.tool_use_id !== "string") {
                logger.info(`[${serverName}] Dropping a response without a routing id on a paired connection`);
                return;
            }
            s = "tool_response";
            o = l.tool_use_id;
            c = l.sealed;
            if (c === undefined && o === this.pending?.toolUseId && l.error?.local_pairing) {
                logger.warn(`[${serverName}] Peer reports the pairing is unknown to it${o === this.probeToolUseId ? " (it dropped the pairing; found by the liveness probe)" : ""}; re-pairing`);
                this.forceRepair(new MX(`[${serverName}] Peer reports the pairing is unknown; re-pairing`), true);
                return;
            }
        }
        if (c === undefined) {
            logger.info(`[${serverName}] Dropping clear-text ${s} on a paired connection`);
            return;
        }
        if (this.pairingAgedOut() && !(s === "tool_response" && o === this.pending?.toolUseId)) {
            if (this.pending) {
                logger.info(`[${serverName}] Dropping sealed ${s} past the pairing's maximum age`);
            } else {
                this.expirePairing();
            }
            return;
        }
        let a = await pairing.channel.open(s, o, c);
        if (t !== this.connectEpoch || this.pairing !== pairing) {
            return;
        }
        if (!a.ok) {
            if (a.reason !== "foreign_sid") {
                logger.warn(`[${serverName}] Sealed ${s} rejected: ${a.reason}`);
            }
            if (pairing.channel.isTornDown) {
                logger.warn(`[${serverName}] Sealed channel torn down; re-pairing`);
                this.forceRepair(new MX(`[${serverName}] Sealed channel to the extension was torn down`));
            }
            return;
        }
        let a_inner = a.inner;
        if (!a_inner || typeof a_inner !== "object") {
            return;
        }
        try {
            if (s === "tool_response") {
                this.handleResponse({
                    ..."result" in a_inner && {
                        result: a_inner.result
                    },
                    ..."error" in a_inner && {
                        error: a_inner.error
                    },
                    tool_use_id: o
                }, Buffer.byteLength(JSON.stringify(a_inner), "utf-8"));
            } else if (s === "notification:permission_request") {
                let l = a_inner.params ?? {};
                if (a_inner.method !== "permission_request" || l.tool_use_id !== o) {
                    logger.warn(`[${serverName}] Sealed permission_request mislabelled; dropped`);
                    return;
                }
                this.claimPermissionRequest(l);
            } else if (s === "notification:inference_request") {
                let l = a_inner.params ?? {};
                if (a_inner.method !== "inference_request" || l.request_id !== o) {
                    logger.warn(`[${serverName}] Sealed inference_request mislabelled; dropped`);
                    return;
                }
                this.answerInferenceRequest(o, l.body, t);
            } else if (this.notificationHandler && typeof a_inner.method === "string") {
                this.notificationHandler({
                    method: a_inner.method,
                    params: a_inner.params ?? undefined
                });
            }
        } catch (error) {
            logger.error(`[${serverName}] Error handling a sealed ${s}:`, error);
        }
    }
    handleResponse(e, t) {
        let pending = this.pending;
        if (!pending || typeof e.tool_use_id === "string" && e.tool_use_id !== pending.toolUseId) {
            return;
        }
        this.pending = null;
        clearTimeout(pending.timer);
        pending.resolve(e, t);
        if (this.pairingAgedOut()) {
            this.expirePairing();
        }
    }
    claimPermissionRequest(e) {
        let pending = this.pending;
        let n = e?.request_id;
        if (!pending?.onPermissionRequest || typeof n !== "string" || e?.tool_use_id !== pending.toolUseId) {
            return false;
        }
        this.answerPermissionRequest(pending, pending.onPermissionRequest, n, e);
        return true;
    }
    async answerPermissionRequest(e, t, n, r) {
        let i = g7n(r, {
            toolUseId: e.toolUseId,
            requestId: n
        });
        clearTimeout(e.timer);
        let allowed = false;
        try {
            allowed = await t(i);
        } catch (error) {
            this.context.logger.error(`[${this.context.serverName}] Error handling permission request:`, error);
        }
        if (this.pending !== e) {
            return;
        }
        if (this.pairingAgedOut()) {
            this.expirePairing();
            return;
        }
        let o = {
            method: "permission_response",
            params: {
                request_id: n,
                allowed
            }
        };
        if (this.context.localPairing) {
            let c = {
                ...o,
                params: {
                    ...o.params,
                    tool_use_id: e.toolUseId
                }
            };
            await this.writeSealed(e.toolUseId, c).catch((a)=>{
                this.context.logger.warn(`[${this.context.serverName}] Could not send permission_response:`, a);
            });
            if (this.pending !== e) {
                return;
            }
        } else {
            this.writeFrame(o);
        }
        this.armTimeout(e);
    }
    setNotificationHandler(e) {
        this.notificationHandler = e;
    }
    async ensureConnected() {
        let { serverName } = this.context;
        if (this.connected && this.socket) {
            return true;
        }
        if (!this.socket && !this.connecting) {
            await this.connect();
        }
        return new Promise((resolve, reject)=>{
            let r = null;
            let i = H;
            let s = ()=>{
                if (this.connected) {
                    if (r) {
                        clearTimeout(r);
                    }
                    resolve(true);
                    return;
                }
                if (this.context.localPairing && (this.handshaking || this.lastPairingRefuse?.code === "timeout") && i < ct) {
                    i = ct;
                    o = setTimeout(s, i - H);
                    return;
                }
                if (r) {
                    clearTimeout(r);
                }
                reject(new wA(`[${serverName}] Connection attempt timed out after ${i}ms`));
            };
            let o = setTimeout(s, i);
            let c = ()=>{
                if (this.connected) {
                    clearTimeout(o);
                    resolve(true);
                } else if (!this.socket && !this.connecting && (!this.reconnectTimer || this.context.localPairing && this.lastPairingRefuse !== undefined && this.lastPairingRefuse.code !== "timeout")) {
                    clearTimeout(o);
                    resolve(false);
                } else {
                    r = setTimeout(c, 500);
                }
            };
            c();
        });
    }
    armTimeout(e) {
        let { serverName } = this.context;
        clearTimeout(e.timer);
        e.timer = setTimeout(()=>{
            if (this.pending !== e) {
                return;
            }
            this.failPending(new Lze(`[${serverName}] Tool request timed out after ${e.timeoutMs}ms`));
            this.closeSocket();
            this.scheduleReconnect();
        }, e.timeoutMs);
    }
    writeRaw(e, t) {
        if (!this.socket || this.socket.destroyed) {
            return;
        }
        let n = t ?? Buffer.from(JSON.stringify(e), "utf-8");
        let r = Buffer.allocUnsafe(4);
        r.writeUInt32LE(n.length, 0);
        this.socket.write(Buffer.concat([
            r,
            n
        ]));
    }
    writeFrame(e) {
        if (this.context.localPairing) {
            throw Error("clear-text frames are disabled when local pairing is configured");
        }
        this.writeRaw(e);
    }
    async sendRequest(e, timeoutMs, onPermissionRequest) {
        let { serverName } = this.context;
        if (this.pairingAgedOut()) {
            this.closeSocket();
        }
        if (!this.socket || this.socket.destroyed || this.context.localPairing && !this.connected) {
            throw new wA(`[${serverName}] Cannot send request: not connected`);
        }
        return new Promise((resolve, reject)=>{
            this.failPending(new W(`[${serverName}] Superseded by a newer tool request on the same connection`));
            let sentAt = Date.now();
            let c = {
                toolUseId: e.params.tool_use_id,
                resolve: (response, responseBytes)=>resolve({
                        response,
                        responseBytes,
                        sentAt
                    }),
                reject,
                timeoutMs,
                onPermissionRequest
            };
            this.armTimeout(c);
            this.pending = c;
            if (this.context.localPairing) {
                this.writeSealed(c.toolUseId, e).catch((a)=>{
                    if (this.pending === c) {
                        this.failPending(a instanceof Error ? a : new wA(String(a)));
                    }
                });
            } else {
                this.writeFrame(e);
            }
        });
    }
    async callTool(tool, args, n) {
        let r = {
            method: "execute_tool",
            params: {
                client_id: this.context.clientTypeId,
                tool,
                args,
                tool_use_id: randomUUID(),
                ...h7n(n)
            }
        };
        let { trackEvent } = this.context;
        let timeout_ms = this.context.getToolCallTimeoutMs?.(tool) ?? _Me;
        let o = n?.sessionScope;
        let c = Date.now();
        let a = {
            tool_name: `browser:${tool}`,
            tool_use_id: r.params.tool_use_id,
            session_id: o?.sessionId,
            user_message_uuid: o?.userMessageUuid,
            transport: "native"
        };
        trackEvent?.("chrome_bridge_tool_call_started", {
            ...a,
            timeout_ms,
            request_bytes: Buffer.byteLength(JSON.stringify(r), "utf-8")
        });
        let u = (d, w, Ct)=>{
            trackEvent?.("chrome_bridge_tool_call_error", {
                ...a,
                duration_ms: Date.now() - w,
                error_type: Ct ?? N7e(tool, d)
            });
        };
        let l;
        try {
            l = await this.sendRequestWithRetry(r, timeout_ms, n?.onPermissionRequest);
        } catch (error) {
            if (error instanceof Lze) {
                trackEvent?.("chrome_bridge_tool_call_timeout", {
                    ...a,
                    duration_ms: Date.now() - c,
                    timeout_ms
                });
            } else {
                u(error instanceof Error ? error.message : String(error), c, error instanceof B ? "request_too_large" : undefined);
            }
            throw error;
        }
        let { response, responseBytes, sentAt } = l;
        if ("error" in response) {
            u(q_t(response.error), sentAt);
        } else {
            trackEvent?.("chrome_bridge_tool_call_completed", {
                ...a,
                duration_ms: Date.now() - sentAt,
                response_bytes: responseBytes
            });
        }
        return response;
    }
    async sendRequestWithRetry(e, t, n) {
        let { serverName, logger } = this.context;
        try {
            return await this.sendRequest(e, t, n);
        } catch (error) {
            if (!(error instanceof wA)) {
                throw error;
            }
            logger.info(`[${serverName}] Connection error, forcing reconnect and retrying: ${error.message}`);
            if (!this.connecting) {
                this.closeSocket();
            }
            let o;
            try {
                o = await this.ensureConnected();
            } catch (err) {
                if (!(this.context.localPairing && this.lastPairingRefuse)) {
                    throw err;
                }
                o = false;
            }
            let c = this.lastPairingRefuse;
            if (!o && this.context.localPairing && c) {
                let a = c.peerReported ? `reported by the extension, unverified: ${c.code}` : c.code;
                throw new wA(`[${serverName}] Claude in Chrome isn't paired with your browser (${a})`);
            }
            return await this.sendRequest(e, t, n);
        }
    }
    isConnected() {
        return this.connected;
    }
    isConnecting() {
        return this.connecting;
    }
    clearConnectTimer() {
        if (this.connectTimer) {
            clearTimeout(this.connectTimer);
            this.connectTimer = null;
        }
    }
    closeSocket() {
        this.connectEpoch += 1;
        this.clearConnectTimer();
        this.clearPairingProbe();
        let handshaking = this.handshaking;
        this.handshaking = false;
        if (this.socket) {
            this.socket.removeAllListeners();
            this.socket.end();
            this.socket.destroy();
            this.socket = null;
        }
        this.responseBuffer = Buffer.alloc(0);
        this.responseChunks = [];
        this.responseChunkBytes = 0;
        this.connected = false;
        this.connecting = false;
        this.clearPairing(handshaking);
        this.failPending(new MX(`[${this.context.serverName}] Native host connection closed before the tool responded`));
    }
    clearReconnectTimer() {
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }
    }
    failPending(e) {
        let pending = this.pending;
        if (!pending) {
            return;
        }
        this.pending = null;
        clearTimeout(pending.timer);
        pending.reject(e);
    }
    disconnect() {
        this.clearReconnectTimer();
        this.failPending(new MX(`[${this.context.serverName}] Socket client disconnected`));
        this.closeSocket();
        this.reconnectAttempts = 0;
    }
    async validateSocketSecurity(e) {
        let { serverName, logger } = this.context;
        if (platform() === "win32" || this.context.connectVerified) {
            return true;
        }
        try {
            let r = dirname(e);
            if ((r.split("/").pop() || "").startsWith("claude-mcp-browser-bridge-")) {
                try {
                    let u = await promises.lstat(r);
                    if (u.isSymbolicLink()) {
                        throw Error(`[${serverName}] Socket directory is a symlink: ${r}. Directory may have been tampered with.`);
                    }
                    if (u.isDirectory()) {
                        let l = u.mode & 511;
                        if (l !== 448) {
                            throw Error(`[${serverName}] Insecure socket directory permissions: ${l.toString(8)} (expected 0700). Directory may have been tampered with.`);
                        }
                        let p = process.getuid?.();
                        if (p !== undefined && u.uid !== p) {
                            throw Error(`Socket directory not owned by current user (uid: ${p}, dir uid: ${u.uid}). Potential security risk.`);
                        }
                    }
                } catch (error) {
                    if (error.code !== "ENOENT") {
                        throw error;
                    }
                    logger.info(`[${serverName}] Socket directory not found; not dialing`);
                    return false;
                }
            }
            let o = await promises.lstat(e);
            if (!o.isSocket()) {
                throw Error(`[${serverName}] Path exists but it's not a socket: ${e}`);
            }
            let c = o.mode & 511;
            if (c !== 384) {
                throw Error(`[${serverName}] Insecure socket permissions: ${c.toString(8)} (expected 0600). Socket may have been tampered with.`);
            }
            let a = process.getuid?.();
            if (a !== undefined && o.uid !== a) {
                throw Error(`Socket not owned by current user (uid: ${a}, socket uid: ${o.uid}). Potential security risk.`);
            }
            this.logDial(`[${serverName}] Socket security validation passed`);
            return true;
        } catch (error) {
            if (error.code === "ENOENT") {
                logger.info(`[${serverName}] Socket not found; not dialing`);
                return false;
            }
            throw error;
        }
    }
}
function y7n(e) {
    return new ft(e);
}
function Wbn(e, t, n) {
    if (e.length === 0) {
        return {
            kind: "none"
        };
    }
    if (t) {
        let extension = e.find((c)=>c.deviceId === t);
        if (extension) {
            return {
                kind: "select",
                extension,
                reason: "persisted"
            };
        }
    }
    if (e.length === 1) {
        return {
            kind: "select",
            extension: e[0],
            reason: "only"
        };
    }
    let r = n ? e.filter((o)=>n.has(o.deviceId)) : [];
    let [i, s] = r;
    if (i && !s && n?.get(i.deviceId) === "live") {
        return {
            kind: "select",
            extension: i,
            reason: "local"
        };
    }
    return {
        kind: "ask",
        candidates: [
            ...r,
            ...e.filter((o)=>!r.includes(o))
        ],
        localCount: r.length
    };
}
function dzt(e) {
    let t;
    try {
        t = e?.();
    } catch  {
        return Promise.resolve(undefined);
    }
    if (!t) {
        return Promise.resolve(undefined);
    }
    return new Promise((resolve)=>{
        let r = setTimeout(()=>resolve(undefined), P4o);
        t.then((i)=>{
            clearTimeout(r);
            resolve(i);
        }, ()=>{
            clearTimeout(r);
            resolve(undefined);
        });
    });
}
const ht = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/webp": "webp",
    "image/gif": "gif"
};
const En = "Screenshot saved to: ";
let An = 0;
let G;
function gt() {
    G ??= mkdtemp(join(tmpdir(), "claude-chrome-screenshots-")).catch((e)=>{
        G = undefined;
        throw e;
    });
    return G;
}
async function In(e) {
    if (e.getScreenshotSaveDir) {
        let n = e.getScreenshotSaveDir();
        if (n === undefined) {
            return;
        }
        await mkdir(n, {
            recursive: true,
            mode: 448
        });
        return n;
    }
    let t = await gt();
    try {
        let n = await lstat(t);
        let r = process.getuid;
        if (n.isDirectory() && (r === undefined || n.uid === r() && (n.mode & 511) === 448)) {
            return t;
        }
    } catch  {}
    G = undefined;
    return gt();
}
async function yt(e, t) {
    if (e.isError || !e.content.some((o)=>o.type === "image")) {
        return e;
    }
    let n;
    try {
        n = await In(t);
    } catch (error) {
        t.logger.warn(`[${t.serverName}] save_to_disk: could not prepare screenshot directory: ${error instanceof Error ? error.message : String(error)}`);
        return {
            ...e,
            content: [
                ...e.content,
                {
                    type: "text",
                    text: "Note: save_to_disk failed — the screenshot directory could not " + "be created. The image is included inline above."
                }
            ]
        };
    }
    if (n === undefined) {
        return {
            ...e,
            content: [
                ...e.content,
                {
                    type: "text",
                    text: "Note: save_to_disk had no effect — screenshots are not " + "persisted to disk in this session. The image is included inline above; refer to it directly. Do not retry with save_to_disk."
                }
            ]
        };
    }
    let r = [];
    let i = false;
    let s = false;
    for (let o of e.content){
        r.push(o);
        if (o.type !== "image") {
            continue;
        }
        let c = Object.hasOwn(ht, o.mimeType) ? ht[o.mimeType] : "png";
        let a = join(n, `screenshot-${Date.now()}-${An++}.${c}`);
        try {
            await writeFile(a, Buffer.from(o.data, "base64"), {
                flag: "wx",
                mode: 384
            });
            i = true;
            r.push({
                type: "text",
                text: `${En}${a}`
            });
        } catch (error) {
            s = true;
            t.logger.warn(`[${t.serverName}] save_to_disk: failed to write screenshot: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
    if (i) {
        r.push({
            type: "text",
            text: "Include the saved path(s) in your response so they can be attached for the user."
        });
    }
    if (s) {
        r.push({
            type: "text",
            text: "Note: save_to_disk failed for at least one screenshot — it could " + "not be written to disk. The image is included inline above."
        });
    }
    return {
        ...e,
        content: r
    };
}
const R = new WeakMap;
function j2r(e) {
    R.delete(e);
    e.clearSelection?.();
}
function z(e, t) {
    return ge(e, t).replace(/[\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}]/gu, " ").replace(/[\p{Quotation_Mark}\u02BA\u02DD\u02EE\u05F4\u2033\u3003]+/gu, "'").replace(/\s+/g, " ").replace(/this\s*computer/giu, "[?]").trim() || `Browser ${t + 1}`;
}
function ge(e, t) {
    let n = (e.name ?? "").replace(/[\r\n\t\u0000-\u001f]/g, " ").trim();
    if (!n) {
        return `Browser ${t + 1}`;
    }
    if (n.length > 50) {
        return `${n.slice(0, 50)}\u2026`;
    }
    return n;
}
const xt = new Map([
    [
        "macOS",
        "macOS"
    ],
    [
        "Windows",
        "Windows"
    ],
    [
        "Linux",
        "Linux"
    ],
    [
        "Chrome OS",
        "Chrome OS"
    ],
    [
        "Chromium OS",
        "Chromium OS"
    ],
    [
        "Android",
        "Android"
    ],
    [
        "iOS",
        "iOS"
    ],
    [
        "MacIntel",
        "macOS"
    ],
    [
        "Win32",
        "Windows"
    ],
    [
        "Linux x86_64",
        "Linux"
    ],
    [
        "Linux aarch64",
        "Linux"
    ],
    [
        "Linux armv8l",
        "Linux"
    ]
]);
function On(osPlatform) {
    return osPlatform !== undefined && xt.get(osPlatform) || "unknown OS";
}
async function $n(e, t) {
    if (!t.listConnectedExtensions) {
        R.set(t, true);
        return null;
    }
    if (R.get(t) && t.hasActiveSelection?.()) {
        return null;
    }
    R.delete(t);
    let n = await t.listConnectedExtensions();
    if (n.length === 0) {
        return null;
    }
    let r = n.length > 1 ? await dzt(e.getLocalDeviceIds) : undefined;
    let i = Wbn(n, t.getSelectedDeviceId?.(), r);
    if (i.kind !== "ask") {
        R.set(t, true);
        return null;
    }
    let { candidates, localCount } = i;
    let c = candidates.slice(0, 8);
    let a = (d, w)=>`${w + 1}. "${z(d, w)}" (${On(d.osPlatform)})${r?.get(d.deviceId) === "remembered" ? " — seen recently, not answering right now" : ""} \u2014 deviceId: ${d.deviceId}`;
    let u = c.slice(0, localCount).map(a);
    let l = c.slice(localCount).map((d, w)=>a(d, w + u.length));
    let p = localCount > 0 ? `Browsers on this computer:
${u.join(`
`)}

Other connected browsers:
${l.join(`
`) || (candidates.length === localCount ? "(none)" : "")}` : `Connected browsers:
${l.join(`
`)}`;
    let h = candidates.length > c.length ? `
\u2026and ${candidates.length - c.length} more not shown` : "";
    return {
        content: [
            {
                type: "text",
                text: `${localCount > 0 ? `${candidates.length} Chrome browsers are connected to this account, ${localCount} of them on this computer, and none has been selected for this session. ` : "Multiple Chrome browsers are connected to this account and none has been selected for this session. "}${_7n(e.askUserToolName)}${localCount > 0 ? " List the browsers on this computer first, in the order below." : ""}

${p}${h}`
            }
        ],
        isError: true
    };
}
function Tt(e) {
    return JSON.stringify(e, (t, n)=>{
        if (typeof n === "string" && n.length > 256) {
            return `<${n.length} chars elided>`;
        }
        return n;
    });
}
class V extends Error {
}
function X(e, t, n, r, i) {
    if (e.isDisabled?.()) {
        return Promise.reject(new V(`disabled: ${n} not sent`));
    }
    return t.callTool(n, r, i);
}
async function wt(e, t, n) {
    if (e.isDisabled?.()) {
        return;
    }
    try {
        if (!await t.ensureConnected()) {
            return;
        }
        let i = (await X(e, t, "tabs_context_mcp", {}, n ? {
            ...n,
            permissionMode: "ask"
        } : undefined))?.result?.content;
        if (!Array.isArray(i)) {
            return;
        }
        let s;
        for (let a of i){
            if (typeof a !== "object" || a === null || a.type !== "text" || typeof a.text !== "string") {
                continue;
            }
            try {
                let u = JSON.parse(a.text);
                if (Array.isArray(u.availableTabs)) {
                    s = {
                        ...u,
                        availableTabs: u.availableTabs
                    };
                    break;
                }
            } catch  {}
        }
        if (!s) {
            return;
        }
        let o = s.availableTabs.filter((a)=>typeof a === "object" && a !== null && typeof a.tabId === "number" && typeof a.url === "string");
        let c = typeof s.selectedTabId === "number" ? o.find((a)=>a.tabId === s.selectedTabId) : o.length === 1 ? o[0] : undefined;
        if (c) {
            return {
                tabId: c.tabId,
                origin: new URL(c.url).origin
            };
        }
        return undefined;
    } catch (error) {
        e.logger.debug(`[${e.serverName}] fetchActiveTab failed`, error);
        return;
    }
}
function Nn(e) {
    if (typeof e !== "object" || e === null) {
        return "";
    }
    let n = e.error?.content;
    if (typeof n === "string" || Array.isArray(n)) {
        return n;
    }
    return "";
}
async function Un(e, t, n, r, i, expected_origin) {
    if (e.isDisabled?.()) {
        return {
            ok: false,
            reason: "disabled"
        };
    }
    try {
        if (!await t.ensureConnected()) {
            return {
                ok: false,
                reason: "disconnected"
            };
        }
        let o = await X(e, t, "computer", {
            action: "type",
            text: i,
            tabId: r,
            ...expected_origin !== undefined ? {
                expected_origin
            } : {}
        }, {
            ...n,
            permissionMode: "skip_all_permission_checks",
            onPermissionRequest: undefined
        });
        let c = typeof o === "object" && o !== null && !("error" in o) ? o.result : undefined;
        let a = typeof c === "object" && c !== null && (c.isError === true || c.is_error === true);
        if (c !== undefined && c !== null && c !== false && !a) {
            return {
                ok: true
            };
        }
        let l = a ? c.content ?? "" : "";
        if ((he(Nn(o)) || he(l)).startsWith("Origin mismatch")) {
            return {
                ok: false,
                reason: "origin_mismatch"
            };
        }
        return {
            ok: false,
            reason: "tool_error"
        };
    } catch (error) {
        e.logger.debug(`[${e.serverName}] typeIntoTab failed`, error);
        return {
            ok: false,
            reason: error instanceof V ? "disabled" : "transport"
        };
    }
}
function bt(e, t, n, sessionId) {
    return {
        sessionId,
        getActiveTabOrigin: async ()=>(await wt(e, t, n))?.origin,
        getActiveTab: ()=>wt(e, t, n),
        typeIntoTab: (i, s, o)=>Un(e, t, n, i, s, o)
    };
}
function Dn(e, args) {
    if (e === "browser_batch" && Array.isArray(args.actions)) {
        let { save_to_disk: save_to_disk_1, ...rest_1 } = args;
        let wantsSave = save_to_disk_1 === true;
        let actions = args.actions.map((a)=>{
            if (typeof a !== "object" || a === null) {
                return a;
            }
            let u = a;
            if (typeof u.input !== "object" || u.input === null) {
                return a;
            }
            let { save_to_disk, ...rest } = u.input;
            if (save_to_disk === true && u.name === "computer") {
                wantsSave = true;
            }
            return {
                ...u,
                input: rest
            };
        });
        return {
            args: {
                ...rest_1,
                actions
            },
            wantsSave
        };
    }
    if (!("save_to_disk" in args)) {
        return {
            args,
            wantsSave: false
        };
    }
    let { save_to_disk, ...rest } = args;
    return {
        args: rest,
        wantsSave: e === "computer" && save_to_disk === true
    };
}
function Mn({ excludedTools }, t, args) {
    if (!excludedTools) {
        return;
    }
    if (excludedTools.has(t)) {
        return `Unknown tool: ${t}`;
    }
    if (t !== "browser_batch") {
        return;
    }
    if (!Array.isArray(args.actions)) {
        return "browser_batch: actions must be an array";
    }
    for (let i of args.actions){
        let s = i?.name;
        if (typeof s !== "string" || s === "browser_batch") {
            return "browser_batch: every action needs a string tool name (and batches don't nest)";
        }
        if (excludedTools.has(s)) {
            return `Unknown tool: ${s}`;
        }
    }
}
function Bn(e, t) {
    let n = t?.onPermissionRequest;
    let e_isDisabled = e.isDisabled;
    if (!t || !n || !e_isDisabled) {
        return t;
    }
    return {
        ...t,
        onPermissionRequest: async (i)=>!e_isDisabled() && await n(i) && !e_isDisabled()
    };
}
const zbn = async (e, t, n, r, i)=>{
    let { args, wantsSave } = Dn(n, r);
    if (e.isDisabled?.()) {
        return b(`Unknown tool: ${n}`);
    }
    let c = Bn(e, i);
    let a = Mn(e, n, args);
    if (a !== undefined) {
        return b(a);
    }
    if (n === "switch_browser") {
        return Kn(e, t);
    }
    if (n === "list_connected_browsers") {
        return Hn(e, t);
    }
    if (n === "select_browser") {
        return Gn(e, t, args);
    }
    let u = c?.sessionScope?.sessionId ?? "";
    if (e.handleHostTool && e.hostToolBypassesBrowser?.(n, args)) {
        let p = await e.handleHostTool(n, args, bt(e, t, c, u));
        if (p !== undefined) {
            return p;
        }
    }
    let l = {
        args
    };
    try {
        let p = await t.ensureConnected();
        e.logger.silly(`[${e.serverName}] Server is connected: ${p}. Received tool call: ${yMe(n)} with args: ${Tt(args)}.`);
        if (p) {
            if (e.isDisabled?.()) {
                return b(`Unknown tool: ${n}`);
            }
            let h = await $n(e, t);
            if (h) {
                return h;
            }
            if (e.isDisabled?.()) {
                return b(`Unknown tool: ${n}`);
            }
            if (e.handleHostTool) {
                let d = await e.handleHostTool(n, args, bt(e, t, c, u));
                if (d !== undefined) {
                    return d;
                }
            }
            l = await qn(e, t, n, args, c);
            if (l.error) {
                return fe(l, l.error);
            }
            let g = await Fn(e, t, n, l.args, c);
            if (wantsSave) {
                g = await yt(g, e);
            }
            return fe(l, g);
        }
        return L(e);
    } catch (error) {
        return fe(l, Ln(error, n, e));
    }
};
function b(e, t) {
    return {
        content: [
            {
                type: "text",
                text: e
            }
        ],
        isError: true,
        ...t && {
            _meta: t
        }
    };
}
function Ln(error, t, n) {
    n.logger.info(`[${n.serverName}] Error calling tool:`, error);
    if (error instanceof V) {
        return b(`Unknown tool: ${t}`);
    }
    if (error instanceof wA || error instanceof Dze) {
        return L(n);
    }
    if (error instanceof Lze && error.routingAckReceived === false) {
        return b(`The "${t}" call was never delivered to the Chrome extension: the computer running that browser appears to be offline or asleep, or Chrome is not running there. This is a connection problem, not a permission or site-access issue. Ask the user to make sure that computer is awake and Chrome is open with the Claude extension, then retry.`, {
            isBridgeTimeout: true
        });
    }
    if (error instanceof Lze) {
        return b(jn(t, error), {
            isBridgeTimeout: true
        });
    }
    if (error instanceof W) {
        return b(`${`The "${t}" tool call was displaced by a newer call on the same browser connection before its result arrived. `}The action may already have executed — check the page state (e.g. "get_page_text") before repeating it.`);
    }
    if (error instanceof MX) {
        return b(`The "${t}" tool call failed because the Chrome extension disconnected mid-operation. This is usually transient (Chrome service worker restart, tab closed, network blip) and the extension often reconnects automatically. Retry the same tool call in a few seconds. If it keeps failing, ask the user to switch to Chrome (which wakes the extension) or check that the extension is still logged in.`);
    }
    if (error instanceof B) {
        return b(`The "${t}" tool call was not sent: ${error.message} Do not retry the identical call.`);
    }
    return b(`The "${t}" tool call failed unexpectedly. This is usually transient \u2014 retry the same call in a few seconds.`);
}
function jn(e, t) {
    let n = `The "${e}" tool did not respond in time.`;
    let r = 'a lighter operation (e.g., "get_page_text" instead of a screenshot)';
    if (t.routingAckReceived === undefined) {
        return `${n} The page or Chrome may be unresponsive, or Chrome may be waiting for the user. Try a lighter operation (e.g., "get_page_text" instead of a screenshot), or ask the user to check Chrome.`;
    }
    return `${n} If Chrome is on another computer, that computer may be closed or asleep. The page may also be loading or unresponsive, or Chrome may be waiting for the user. Try a lighter operation (e.g., "get_page_text" instead of a screenshot) once. If that also gets no response, ask the user to check that the computer running Chrome is awake, that Chrome is open, and that nothing in Chrome is waiting for them.`;
}
function uzt(e) {
    let t = e?.result?.content;
    if (!Array.isArray(t)) {
        return {};
    }
    for (let n of t){
        if (typeof n !== "object" || n === null || n.type !== "text" || typeof n.text !== "string") {
            continue;
        }
        let json = n.text;
        try {
            let i = JSON.parse(json);
            if (!Array.isArray(i.availableTabs)) {
                continue;
            }
            let s = i.availableTabs.find((c)=>typeof c?.tabId === "number")?.tabId;
            let tabGroupId = typeof i.tabGroupId === "number" ? i.tabGroupId : undefined;
            return {
                tabId: s,
                tabGroupId,
                json
            };
        } catch  {}
    }
    return {};
}
var vt = Symbol("timed-out");
async function Jn(e, t) {
    let n;
    try {
        return await Promise.race([
            e,
            new Promise((resolve)=>{
                n = setTimeout(()=>resolve(vt), t);
            })
        ]);
    } finally{
        if (n !== undefined) {
            clearTimeout(n);
        }
    }
}
var _t = new WeakMap;
var kt = 8000;
async function qn(e, t, n, args, i) {
    if (n !== "navigate" || args.tabId !== null && args.tabId !== undefined) {
        return {
            args
        };
    }
    let s = typeof args.url === "string" ? args.url.trim().toLowerCase() : "";
    if (s === "back" || s === "forward") {
        return {
            args,
            error: b('tabId is required for url:"back"/"forward". Call tabs_context_mcp first to get a tab ID.')
        };
    }
    let o = i?.sessionScope?.sessionId;
    if (!s || !o) {
        return {
            args
        };
    }
    let c = _t.get(t);
    if (!c) {
        c = new Map;
        _t.set(t, c);
    }
    let a = c.get(o);
    if (!a) {
        a = X(e, t, "tabs_context_mcp", {
            createIfEmpty: true
        }, {
            ...i,
            permissionMode: "ask"
        }).finally(()=>{
            if (c.get(o) === a) {
                c.delete(o);
            }
        });
        c.set(o, a);
    }
    let u = await Jn(a, kt);
    if (u === vt) {
        return {
            args,
            error: b(`The hidden tabs_context_mcp lookup did not respond within ${kt / 1000}s. The Chrome extension may be slow to start, or the computer running that browser may be offline or asleep. Retry navigate, or call tabs_context_mcp explicitly to get a tabId first.`, {
                isFrontLoadBoundExceeded: true
            })
        };
    }
    let l = u?.error;
    if (l) {
        let d = Array.isArray(l.content) ? l.content : [
            {
                type: "text",
                text: "tabs_context_mcp returned an error."
            }
        ];
        if (Pt(d)) {
            e.onAuthenticationError();
        }
        return {
            args,
            error: {
                content: d,
                isError: true
            }
        };
    }
    let { tabId, tabGroupId, json } = uzt(u);
    if (tabId === undefined) {
        return {
            args,
            tabGroupId
        };
    }
    return {
        args: {
            ...args,
            tabId
        },
        tabContextJson: json,
        tabGroupId
    };
}
function fe(e, t) {
    let n = t;
    if (e.tabContextJson && !n.isError) {
        n = {
            ...n,
            content: [
                ...Array.isArray(n.content) ? n.content : [],
                {
                    type: "text",
                    text: `
Tab context (from front-loaded tabs_context_mcp):
${e.tabContextJson}
Tabs in this group were opened for this task and are yours to clean up: close each with tabs_close_mcp once you no longer need it and before finishing, unless the user asked to see it or wants it kept open.`
                }
            ]
        };
    }
    if (e.tabGroupId !== undefined) {
        n = {
            ...n,
            _meta: {
                ...n._meta,
                frontLoadedTabGroupId: e.tabGroupId
            }
        };
    }
    return n;
}
async function Fn(e, t, n, args, i) {
    let s = await X(e, t, n, args, i);
    e.logger.silly(`[${e.serverName}] Received result from socket bridge: ${Tt(s)}`);
    if (s === null || s === undefined) {
        return {
            content: [
                {
                    type: "text",
                    text: "Tool execution completed"
                }
            ]
        };
    }
    let { result, error, notices } = s;
    let u = Array.isArray(notices) && notices.length > 0 ? {
        notices
    } : undefined;
    let l = error || result;
    let isError = !!error;
    if (!l) {
        return {
            content: [
                {
                    type: "text",
                    text: "Tool execution completed"
                }
            ],
            ...u && {
                _meta: u
            }
        };
    }
    if (isError && Pt(l.content)) {
        e.onAuthenticationError();
    }
    let { content } = l;
    if (content && Array.isArray(content)) {
        if (isError) {
            return {
                content: content.map((d)=>{
                    if (typeof d === "object" && d !== null && "type" in d) {
                        return d;
                    }
                    return {
                        type: "text",
                        text: String(d)
                    };
                }),
                isError: true,
                ...u && {
                    _meta: u
                }
            };
        }
        return {
            content: content.map((d)=>{
                if (typeof d === "object" && d !== null && "type" in d && "source" in d) {
                    let w = d;
                    if (w.type === "image" && typeof w.source === "object" && w.source !== null && "data" in w.source) {
                        return {
                            type: "image",
                            data: w.source.data,
                            mimeType: "media_type" in w.source ? w.source.media_type || "image/png" : "image/png"
                        };
                    }
                }
                if (typeof d === "object" && d !== null && "type" in d) {
                    return d;
                }
                return {
                    type: "text",
                    text: String(d)
                };
            }),
            isError,
            ...u && {
                _meta: u
            }
        };
    }
    if (typeof content === "string") {
        return {
            content: [
                {
                    type: "text",
                    text: content
                }
            ],
            isError,
            ...u && {
                _meta: u
            }
        };
    }
    e.logger.warn(`[${e.serverName}] Unexpected result format from socket bridge`, s);
    return {
        content: [
            {
                type: "text",
                text: JSON.stringify(s)
            }
        ],
        isError,
        ...u && {
            _meta: u
        }
    };
}
function L(e) {
    return {
        content: [
            {
                type: "text",
                text: e.onToolCallDisconnected()
            }
        ]
    };
}
async function Kn(e, t) {
    if (!e.bridgeConfig) {
        return {
            content: [
                {
                    type: "text",
                    text: "Browser switching is only available with bridge connections."
                }
            ],
            isError: true
        };
    }
    if (!await t.ensureConnected()) {
        return L(e);
    }
    if (e.isDisabled?.()) {
        return b("Unknown tool: switch_browser");
    }
    let r = await t.switchBrowser?.() ?? null;
    if (r === "no_other_browsers") {
        return {
            content: [
                {
                    type: "text",
                    text: "No other browsers available to switch to. Open Chrome with the Claude extension in another browser to switch."
                }
            ],
            isError: false
        };
    }
    if (r) {
        R.set(t, true);
        return {
            content: [
                {
                    type: "text",
                    text: `Selected browser "${z(r, 0)}".`
                }
            ]
        };
    }
    return {
        content: [
            {
                type: "text",
                text: "No browser responded within the timeout. Make sure Chrome is open with the Claude extension installed, then try again."
            }
        ],
        isError: true
    };
}
async function Hn(e, t) {
    if (!e.bridgeConfig || !t.listConnectedExtensions) {
        return {
            content: [
                {
                    type: "text",
                    text: "Listing browsers is only available with bridge connections."
                }
            ],
            isError: true
        };
    }
    if (!await t.ensureConnected()) {
        return L(e);
    }
    if (e.isDisabled?.()) {
        return b("Unknown tool: list_connected_browsers");
    }
    let r = await t.listConnectedExtensions();
    let i = Wbn(r, t.getSelectedDeviceId?.(), r.length > 1 ? await dzt(e.getLocalDeviceIds) : undefined);
    let s = i.kind === "select" ? i.extension.deviceId : undefined;
    let o = r.map((a, u)=>({
            ...a,
            name: ge(a, u),
            osPlatform: a.osPlatform === undefined ? undefined : xt.get(a.osPlatform),
            ...a.deviceId === s && {
                inUse: true
            }
        }));
    let c = [
        {
            type: "text",
            text: JSON.stringify(o)
        }
    ];
    if (r.length > 1) {
        c.push({
            type: "text",
            text: Wn(e, t, o, i)
        });
    }
    return {
        content: c
    };
}
function Wn(e, t, n, r) {
    if (r.kind === "select") {
        let i = "is the one on this computer and will be used";
        if (r.reason === "persisted") {
            i = t.hasActiveSelection?.() ? "is the one in use for this session" : "is the one picked last and will be used";
        }
        let s = n.findIndex((o)=>o.deviceId === r.extension.deviceId);
        return `${n.length} browsers are connected; "${z(r.extension, s)}" (deviceId ${r.extension.deviceId}) ${i}. No question is needed unless the user wants a different browser (then select_browser with its deviceId, or switch_browser).`;
    }
    if (r.kind === "ask" && r.localCount > 0) {
        return `${n.length} browsers are connected, ${r.localCount} of them on this computer (onThisComputer: true), and none is selected for this session. ${_7n(e.askUserToolName)} List the browsers on this computer first.`;
    }
    return `${n.length} browsers are connected and none is selected for this session. ${_7n(e.askUserToolName)}`;
}
async function Gn(e, t, args) {
    let r = typeof args.deviceId === "string" ? args.deviceId : "";
    if (!e.bridgeConfig || !t.selectExtensionById || !t.listConnectedExtensions || !r) {
        return {
            content: [
                {
                    type: "text",
                    text: "select_browser requires a bridge connection and a deviceId argument."
                }
            ],
            isError: true
        };
    }
    if (!await t.ensureConnected()) {
        return L(e);
    }
    let s = await t.listConnectedExtensions();
    let o = s.find((a)=>a.deviceId === r);
    if (!o) {
        return {
            content: [
                {
                    type: "text",
                    text: `No connected browser has deviceId "${r}". Call list_connected_browsers to see currently connected browsers.`
                }
            ],
            isError: true
        };
    }
    if (e.isDisabled?.()) {
        return b("Unknown tool: select_browser");
    }
    let c = s.indexOf(o);
    t.selectExtensionById(r, ge(o, c));
    R.set(t, true);
    return {
        content: [
            {
                type: "text",
                text: `Selected browser "${z(o, c)}".`
            }
        ]
    };
}
function he(e) {
    if (!Array.isArray(e)) {
        return String(e);
    }
    return e.map((t)=>{
        if (typeof t === "string") {
            return t;
        }
        if (typeof t === "object" && t !== null && "text" in t && typeof t.text === "string") {
            return t.text;
        }
        return "";
    }).join(" ");
}
function Pt(e) {
    return he(e).toLowerCase().includes("re-authenticated");
}
export { Wbn, dzt, N7e, q_t, g7n, h7n, yMe, wA, Dze, Lze, MX, x4o, y7n, j2r, zbn, uzt };
