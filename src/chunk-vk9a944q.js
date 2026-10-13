import { LPt, Cmo, OSs } from "/$bunfs/root/chunk-09p18edh.js";
import { STo, Iut } from "/$bunfs/root/chunk-xbsy70c7.js";
import { RPt } from "/$bunfs/root/chunk-wxcp89vn.js";
import { ty } from "/$bunfs/root/chunk-6dwnw6av.js";
import { bTo, frn } from "/$bunfs/root/chunk-9fa34ggx.js";
import { Se, C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
import { EOL } from "os";
import * as Kr from "os";
import mm, { inspect } from "util";
import * as Qc from "process";
import hy, { randomUUID, randomFillSync, createHash, createPrivateKey } from "crypto";
import * as Br from "http";
import Ja from "http";
import * as zr from "https";
import Ih from "https";
import * as Bo from "zlib";
import { Transform, Readable } from "stream";
import { accessSync, constants, statSync, readFileSync } from "fs";
import HE from "path";
import { readFile } from "fs/promises";
import dC from "child_process";
import * as em from "child_process";
const Ml = C(function(ze) {
    const rp = ze && ze.__createBinding || (Object.create ? (e, t, r, n = r)=>{
        let o = Object.getOwnPropertyDescriptor(t, r);
        if (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) {
            o = {
                enumerable: true,
                get: function() {
                    return t[r];
                }
            };
        }
        Object.defineProperty(e, n, o);
    } : (e, t, r, n = r)=>{
        e[n] = t[r];
    });
    const np = ze && ze.__setModuleDefault || (Object.create ? (e, value)=>{
        Object.defineProperty(e, "default", {
            enumerable: true,
            value
        });
    } : (e, t)=>{
        e.default = t;
    });
    const Ol = ze && ze.__importStar || ((e)=>{
        if (e && e.__esModule) {
            return e;
        }
        const t = {};
        if (e != null) {
            for(const r in e){
                if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                    rp(t, e, r);
                }
            }
        }
        np(t, e);
        return t;
    });
    const op = ze && ze.__importDefault || ((e)=>{
        if (e && e.__esModule) {
            return e;
        }
        return {
            default: e
        };
    });
    Object.defineProperty(ze, "__esModule", {
        value: true
    });
    ze.HttpProxyAgent = undefined;
    const ip = Ol(Le("net"));
    const sp = Ol(Le("tls"));
    const ap = op(frn());
    const Nl = Le("events");
    const xl = STo();
    const qo = Le("url");
    const qr = ap.default("http-proxy-agent");
    class la extends xl.Agent {
        constructor(e, t){
            super(t);
            this.proxy = typeof e === "string" ? new qo.URL(e) : e;
            this.proxyHeaders = t?.headers ?? {};
            qr("Creating new HttpProxyAgent instance: %o", this.proxy.href);
            let host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, "");
            let port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
            this.connectOpts = {
                ...t ? cp(t, "headers") : null,
                host,
                port
            };
        }
        addRequest(e, t) {
            e._header = null;
            this.setRequestProps(e, t);
            super.addRequest(e, t);
        }
        setRequestProps(e, t) {
            let { proxy } = this;
            let n = t.secureEndpoint ? "https:" : "http:";
            let o = e.getHeader("host") || "localhost";
            let i = `${n}//${o}`;
            let s = new qo.URL(e.path, i);
            if (t.port !== 80) {
                s.port = String(t.port);
            }
            e.path = String(s);
            let a = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : {
                ...this.proxyHeaders
            };
            if (proxy.username || proxy.password) {
                let c = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
                a["Proxy-Authorization"] = `Basic ${Buffer.from(c).toString("base64")}`;
            }
            if (!a["Proxy-Connection"]) {
                a["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
            }
            for (let c of Object.keys(a)){
                let l = a[c];
                if (l) {
                    e.setHeader(c, l);
                }
            }
        }
        async connect(e, t) {
            e._header = null;
            if (!e.path.includes("://")) {
                this.setRequestProps(e, t);
            }
            let r;
            let n;
            qr("Regenerating stored HTTP header string for request");
            e._implicitHeader();
            if (e.outputData && e.outputData.length > 0) {
                qr("Patching connection write() output buffer with updated header");
                r = e.outputData[0].data;
                n = r.indexOf(`\r
\r
`) + 4;
                e.outputData[0].data = e._header + r.substring(n);
                qr("Output buffer: %o", e.outputData[0].data);
            }
            let o;
            if (this.proxy.protocol === "https:") {
                qr("Creating `tls.Socket`: %o", this.connectOpts);
                o = sp.connect(this.connectOpts);
            } else {
                qr("Creating `net.Socket`: %o", this.connectOpts);
                o = ip.connect(this.connectOpts);
            }
            await Nl.once(o, "connect");
            return o;
        }
    }
    la.protocols = [
        "http",
        "https"
    ];
    ze.HttpProxyAgent = la;
    function cp(e, ...t) {
        let r = {};
        let n;
        for(n in e){
            if (!t.includes(n)) {
                r[n] = e[n];
            }
        }
        return r;
    }
});
const hd = C(function(dd) {
    Object.defineProperty(dd, "__esModule", {
        value: true
    });
    dd.state = undefined;
    dd.state = {
        instrumenterImplementation: undefined
    };
});
const _d = C(function(Ad) {
    Object.defineProperty(Ad, "__esModule", {
        value: true
    });
    Ad.state = undefined;
    Ad.state = {
        operationRequestMap: new WeakMap
    };
});
const ic = C(function(X0, Mh) {
    const my = RPt();
    Mh.exports = function(e, t) {
        t = t || {};
        const r = my.decode(e, t);
        if (!r) {
            return null;
        }
        let r_payload = r.payload;
        if (typeof r_payload === "string") {
            try {
                const o = JSON.parse(r_payload);
                if (o !== null && typeof o === "object") {
                    r_payload = o;
                }
            } catch (i) {}
        }
        if (t.complete === true) {
            return {
                header: r.header,
                payload: r_payload,
                signature: r.signature
            };
        }
        return r_payload;
    };
});
const vo = C(function(Z0, Dh) {
    const cs = function(e, t) {
        Error.call(this, e);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = "JsonWebTokenError";
        this.message = e;
        if (t) {
            this.inner = t;
        }
    };
    cs.prototype = Object.create(Error.prototype);
    cs.prototype.constructor = cs;
    Dh.exports = cs;
});
const sc = C(function(eL, Lh) {
    const Uh = vo();
    const ls = function(e, t) {
        Uh.call(this, e);
        this.name = "NotBeforeError";
        this.date = t;
    };
    ls.prototype = Object.create(Uh.prototype);
    ls.prototype.constructor = ls;
    Lh.exports = ls;
});
const ac = C(function(tL, Fh) {
    const Hh = vo();
    const ds = function(e, t) {
        Hh.call(this, e);
        this.name = "TokenExpiredError";
        this.expiredAt = t;
    };
    ds.prototype = Object.create(Hh.prototype);
    ds.prototype.constructor = ds;
    Fh.exports = ds;
});
const cc = C(function(rL, $h) {
    const py = bTo();
    $h.exports = function(e, t) {
        const r = t || Math.floor(Date.now() / 1000);
        if (typeof e === "string") {
            const n = py(e);
            if (typeof n === "undefined") {
                return;
            }
            return Math.floor(r + n / 1000);
        } else if (typeof e === "number") {
            return r + e;
        } else {
            return;
        }
    };
});
const Gh = C(function(nL, zh) {
    const Bh = ty();
    zh.exports = Bh.satisfies(process.version, ">=15.7.0");
});
const Vh = C(function(oL, Kh) {
    const qh = ty();
    Kh.exports = qh.satisfies(process.version, ">=16.9.0");
});
const lc = C(function(iL, jh) {
    const gy = Gh();
    const yy = Vh();
    const Ty = {
        ec: [
            "ES256",
            "ES384",
            "ES512"
        ],
        rsa: [
            "RS256",
            "PS256",
            "RS384",
            "PS384",
            "RS512",
            "PS512"
        ],
        "rsa-pss": [
            "PS256",
            "PS384",
            "PS512"
        ]
    };
    const Ey = {
        ES256: "prime256v1",
        ES384: "secp384r1",
        ES512: "secp521r1"
    };
    jh.exports = function(e, t) {
        if (!e || !t) {
            return;
        }
        let t_asymmetricKeyType = t.asymmetricKeyType;
        if (!t_asymmetricKeyType) {
            return;
        }
        let n = Ty[t_asymmetricKeyType];
        if (!n) {
            throw Error(`Unknown key type "${t_asymmetricKeyType}".`);
        }
        if (!n.includes(e)) {
            throw Error(`"alg" parameter for "${t_asymmetricKeyType}" key type must be one of: ${n.join(", ")}.`);
        }
        if (gy) {
            switch(t_asymmetricKeyType){
                case "ec":
                    let o = t.asymmetricKeyDetails.namedCurve;
                    let i = Ey[e];
                    if (o !== i) {
                        throw Error(`"alg" parameter "${e}" requires curve "${i}".`);
                    }
                    break;
                case "rsa-pss":
                    if (yy) {
                        let s = parseInt(e.slice(-3), 10);
                        let { hashAlgorithm, mgf1HashAlgorithm, saltLength } = t.asymmetricKeyDetails;
                        if (hashAlgorithm !== `sha${s}` || mgf1HashAlgorithm !== hashAlgorithm) {
                            throw Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${e}.`);
                        }
                        if (saltLength !== undefined && saltLength > s >> 3) {
                            throw Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${e}.`);
                        }
                    }
                    break;
            }
        }
    };
});
const dc = C(function(sL, Yh) {
    const Cy = ty();
    Yh.exports = Cy.satisfies(process.version, "^6.12.0 || >=8.0.0");
});
const Xh = C(function(aL, Jh) {
    const W = vo();
    const Ay = sc();
    const Wh = ac();
    const Iy = ic();
    const _y = cc();
    const Sy = lc();
    const Ry = dc();
    const Qh = RPt();
    const { KeyObject, createSecretKey, createPublicKey } = Le("crypto");
    const uc = [
        "RS256",
        "RS384",
        "RS512"
    ];
    const by = [
        "ES256",
        "ES384",
        "ES512"
    ];
    const hc = [
        "RS256",
        "RS384",
        "RS512"
    ];
    const Py = [
        "HS256",
        "HS384",
        "HS512"
    ];
    if (Ry) {
        uc.splice(uc.length, 0, "PS256", "PS384", "PS512");
        hc.splice(hc.length, 0, "PS256", "PS384", "PS512");
    }
    Jh.exports = function(e, t, r, n) {
        if (typeof r === "function" && !n) {
            n = r;
            r = {};
        }
        if (!r) {
            r = {};
        }
        r = {
            ...r
        };
        let o;
        if (n) {
            o = n;
        } else {
            o = function(d, u) {
                if (d) {
                    throw d;
                }
                return u;
            };
        }
        if (r.clockTimestamp && typeof r.clockTimestamp !== "number") {
            return o(new W("clockTimestamp must be a number"));
        }
        if (r.nonce !== undefined && (typeof r.nonce !== "string" || r.nonce.trim() === "")) {
            return o(new W("nonce must be a non-empty string"));
        }
        if (r.allowInvalidAsymmetricKeyTypes !== undefined && typeof r.allowInvalidAsymmetricKeyTypes !== "boolean") {
            return o(new W("allowInvalidAsymmetricKeyTypes must be a boolean"));
        }
        let i = r.clockTimestamp || Math.floor(Date.now() / 1000);
        if (!e) {
            return o(new W("jwt must be provided"));
        }
        if (typeof e !== "string") {
            return o(new W("jwt must be a string"));
        }
        let s = e.split(".");
        if (s.length !== 3) {
            return o(new W("jwt malformed"));
        }
        let a;
        try {
            a = Iy(e, {
                complete: true
            });
        } catch (error) {
            return o(error);
        }
        if (!a) {
            return o(new W("invalid token"));
        }
        let a_header = a.header;
        let l;
        if (typeof t === "function") {
            if (!n) {
                return o(new W("verify must be called asynchronous if secret or public key is provided as a callback"));
            }
            l = t;
        } else {
            l = function(d, u) {
                return u(null, t);
            };
        }
        return l(a_header, function(d, u) {
            if (d) {
                return o(new W(`error in secret or public key callback: ${d.message}`));
            }
            let m = s[2].trim() !== "";
            if (!m && u) {
                return o(new W("jwt signature is required"));
            }
            if (m && !u) {
                return o(new W("secret or public key must be provided"));
            }
            if (!m && !r.algorithms) {
                return o(new W('please specify "none" in "algorithms" to verify unsigned tokens'));
            }
            if (u != null && !(u instanceof KeyObject)) {
                try {
                    u = createPublicKey(u);
                } catch (T) {
                    try {
                        u = createSecretKey(typeof u === "string" ? Buffer.from(u) : u);
                    } catch (_) {
                        return o(new W("secretOrPublicKey is not valid key material"));
                    }
                }
            }
            if (!r.algorithms) {
                if (u.type === "secret") {
                    r.algorithms = Py;
                } else if ([
                    "rsa",
                    "rsa-pss"
                ].includes(u.asymmetricKeyType)) {
                    r.algorithms = hc;
                } else if (u.asymmetricKeyType === "ec") {
                    r.algorithms = by;
                } else {
                    r.algorithms = uc;
                }
            }
            if (r.algorithms.indexOf(a.header.alg) === -1) {
                return o(new W("invalid algorithm"));
            }
            if (a_header.alg.startsWith("HS") && u.type !== "secret") {
                return o(new W(`secretOrPublicKey must be a symmetric key when using ${a_header.alg}`));
            } else if (/^(?:RS|PS|ES)/.test(a_header.alg) && u.type !== "public") {
                return o(new W(`secretOrPublicKey must be an asymmetric key when using ${a_header.alg}`));
            }
            if (!r.allowInvalidAsymmetricKeyTypes) {
                try {
                    Sy(a_header.alg, u);
                } catch (error) {
                    return o(error);
                }
            }
            let p;
            try {
                p = Qh.verify(e, a.header.alg, u);
            } catch (error) {
                return o(error);
            }
            if (!p) {
                return o(new W("invalid signature"));
            }
            let a_payload = a.payload;
            if (typeof a_payload.nbf !== "undefined" && !r.ignoreNotBefore) {
                if (typeof a_payload.nbf !== "number") {
                    return o(new W("invalid nbf value"));
                }
                if (a_payload.nbf > i + (r.clockTolerance || 0)) {
                    return o(new Ay("jwt not active", new Date(a_payload.nbf * 1000)));
                }
            }
            if (typeof a_payload.exp !== "undefined" && !r.ignoreExpiration) {
                if (typeof a_payload.exp !== "number") {
                    return o(new W("invalid exp value"));
                }
                if (i >= a_payload.exp + (r.clockTolerance || 0)) {
                    return o(new Wh("jwt expired", new Date(a_payload.exp * 1000)));
                }
            }
            if (r.audience) {
                let T = Array.isArray(r.audience) ? r.audience : [
                    r.audience
                ];
                if (!(Array.isArray(a_payload.aud) ? a_payload.aud : [
                    a_payload.aud
                ]).some((U)=>T.some((B)=>{
                        if (B instanceof RegExp) {
                            return B.test(U);
                        }
                        return B === U;
                    }))) {
                    return o(new W(`jwt audience invalid. expected: ${T.join(" or ")}`));
                }
            }
            if (r.issuer) {
                if (typeof r.issuer === "string" && a_payload.iss !== r.issuer || Array.isArray(r.issuer) && r.issuer.indexOf(a_payload.iss) === -1) {
                    return o(new W(`jwt issuer invalid. expected: ${r.issuer}`));
                }
            }
            if (r.subject) {
                if (a_payload.sub !== r.subject) {
                    return o(new W(`jwt subject invalid. expected: ${r.subject}`));
                }
            }
            if (r.jwtid) {
                if (a_payload.jti !== r.jwtid) {
                    return o(new W(`jwt jwtid invalid. expected: ${r.jwtid}`));
                }
            }
            if (r.nonce) {
                if (a_payload.nonce !== r.nonce) {
                    return o(new W(`jwt nonce invalid. expected: ${r.nonce}`));
                }
            }
            if (r.maxAge) {
                if (typeof a_payload.iat !== "number") {
                    return o(new W("iat required when maxAge is specified"));
                }
                let T = _y(r.maxAge, a_payload.iat);
                if (typeof T === "undefined") {
                    return o(new W('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
                }
                if (i >= T + (r.clockTolerance || 0)) {
                    return o(new Wh("maxAge exceeded", new Date(T * 1000)));
                }
            }
            if (r.complete === true) {
                let signature = a.signature;
                return o(null, {
                    header: a_header,
                    payload: a_payload,
                    signature
                });
            }
            return o(null, a_payload);
        });
    };
});
const of = C(function(cL, nf) {
    const Zh = Infinity;
    const tf = 9007199254740991;
    const Oy = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
    const ef = NaN;
    const Ny = "[object Arguments]";
    const xy = "[object Function]";
    const My = "[object GeneratorFunction]";
    const Dy = "[object String]";
    const Uy = "[object Symbol]";
    const Ly = /^\s+|\s+$/g;
    const Hy = /^[-+]0x[0-9a-f]+$/i;
    const Fy = /^0b[01]+$/i;
    const $y = /^0o[0-7]+$/i;
    const By = /^(?:0|[1-9]\d*)$/;
    const zy = parseInt;
    function Gy(e, t) {
        let r = -1;
        const n = e ? e.length : 0;
        const o = Array(n);
        while(++r < n){
            o[r] = t(e[r], r, e);
        }
        return o;
    }
    function qy(e, t, r, n) {
        const e_length = e.length;
        let i = r + (n ? 1 : -1);
        while(n ? i-- : ++i < e_length){
            if (t(e[i], i, e)) {
                return i;
            }
        }
        return -1;
    }
    function Ky(e, t, r) {
        if (t !== t) {
            return qy(e, Vy, r);
        }
        let n = r - 1;
        const e_length = e.length;
        while(++n < e_length){
            if (e[n] === t) {
                return n;
            }
        }
        return -1;
    }
    function Vy(e) {
        return e !== e;
    }
    function jy(e, String) {
        let r = -1;
        const n = Array(e);
        while(++r < e){
            n[r] = String(r);
        }
        return n;
    }
    function Yy(e, t) {
        return Gy(t, (r)=>e[r]);
    }
    function Wy(keys, Object) {
        return function(r) {
            return keys(Object(r));
        };
    }
    const { hasOwnProperty, toString, propertyIsEnumerable } = Object.prototype;
    const Jy = Wy(Object.keys, Object);
    function Zy(e, t) {
        const r = Array_isArray(e) || oT(e) ? jy(e.length, String) : [];
        const r_length = r.length;
        const o = !!r_length;
        for(const i in e){
            if ((t || hasOwnProperty.call(e, i)) && !(o && (i == "length" || tT(i, r_length)))) {
                r.push(i);
            }
        }
        return r;
    }
    function eT(e) {
        if (!rT(e)) {
            return Jy(e);
        }
        const t = [];
        for(const r in Object(e)){
            if (hasOwnProperty.call(e, r) && r != "constructor") {
                t.push(r);
            }
        }
        return t;
    }
    function tT(e, t) {
        t = t ?? tf;
        return !!t && (typeof e === "number" || By.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    function rT(e) {
        const t = e && e.constructor;
        const r = typeof t === "function" && t.prototype || Object.prototype;
        return e === r;
    }
    function nT(e, t, r, n) {
        e = pc(e) ? e : mT(e);
        r = r && !n ? uT(r) : 0;
        const e_length = e.length;
        if (r < 0) {
            r = Math.max(e_length + r, 0);
        }
        if (cT(e)) {
            return r <= e_length && e.indexOf(t, r) > -1;
        }
        return !!e_length && Ky(e, t, r) > -1;
    }
    function oT(e) {
        return iT(e) && hasOwnProperty.call(e, "callee") && (!propertyIsEnumerable.call(e, "callee") || toString.call(e) == Ny);
    }
    var Array_isArray = Array.isArray;
    function pc(e) {
        return e != null && aT(e.length) && !sT(e);
    }
    function iT(e) {
        return gc(e) && pc(e);
    }
    function sT(e) {
        const t = fc(e) ? toString.call(e) : "";
        return t == xy || t == My;
    }
    function aT(e) {
        return typeof e === "number" && e > -1 && e % 1 == 0 && e <= tf;
    }
    function fc(e) {
        const t = typeof e;
        return !!e && (t == "object" || t == "function");
    }
    function gc(e) {
        return !!e && typeof e === "object";
    }
    function cT(e) {
        return typeof e === "string" || !Array_isArray(e) && gc(e) && toString.call(e) == Dy;
    }
    function lT(e) {
        return typeof e === "symbol" || gc(e) && toString.call(e) == Uy;
    }
    function dT(e) {
        if (!e) {
            if (e === 0) {
                return e;
            }
            return 0;
        }
        e = hT(e);
        if (e === Zh || e === -Zh) {
            const t = e < 0 ? -1 : 1;
            return t * Oy;
        }
        if (e === e) {
            return e;
        }
        return 0;
    }
    function uT(e) {
        const t = dT(e);
        const r = t % 1;
        if (t === t) {
            if (r) {
                return t - r;
            }
            return t;
        }
        return 0;
    }
    function hT(e) {
        if (typeof e === "number") {
            return e;
        }
        if (lT(e)) {
            return ef;
        }
        if (fc(e)) {
            const t = typeof e.valueOf === "function" ? e.valueOf() : e;
            e = fc(t) ? `${t}` : t;
        }
        if (typeof e !== "string") {
            if (e === 0) {
                return e;
            }
            return +e;
        }
        e = e.replace(Ly, "");
        const r = Fy.test(e);
        if (r || $y.test(e)) {
            return zy(e.slice(2), r ? 2 : 8);
        }
        if (Hy.test(e)) {
            return ef;
        }
        return +e;
    }
    function fT(e) {
        if (pc(e)) {
            return Zy(e);
        }
        return eT(e);
    }
    function mT(e) {
        if (e) {
            return Yy(e, fT(e));
        }
        return [];
    }
    nf.exports = nT;
});
const af = C(function(lL, sf) {
    const pT = "[object Boolean]";
    const toString = Object.prototype.toString;
    function TT(e) {
        return e === true || e === false || ET(e) && toString.call(e) == pT;
    }
    function ET(e) {
        return !!e && typeof e === "object";
    }
    sf.exports = TT;
});
const hf = C(function(dL, uf) {
    const cf = Infinity;
    const CT = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
    const lf = NaN;
    const AT = "[object Symbol]";
    const IT = /^\s+|\s+$/g;
    const _T = /^[-+]0x[0-9a-f]+$/i;
    const ST = /^0b[01]+$/i;
    const RT = /^0o[0-7]+$/i;
    const wT = parseInt;
    const toString = Object.prototype.toString;
    function bT(e) {
        return typeof e === "number" && e == xT(e);
    }
    function df(e) {
        const t = typeof e;
        return !!e && (t == "object" || t == "function");
    }
    function PT(e) {
        return !!e && typeof e === "object";
    }
    function OT(e) {
        return typeof e === "symbol" || PT(e) && toString.call(e) == AT;
    }
    function NT(e) {
        if (!e) {
            if (e === 0) {
                return e;
            }
            return 0;
        }
        e = MT(e);
        if (e === cf || e === -cf) {
            const t = e < 0 ? -1 : 1;
            return t * CT;
        }
        if (e === e) {
            return e;
        }
        return 0;
    }
    function xT(e) {
        const t = NT(e);
        const r = t % 1;
        if (t === t) {
            if (r) {
                return t - r;
            }
            return t;
        }
        return 0;
    }
    function MT(e) {
        if (typeof e === "number") {
            return e;
        }
        if (OT(e)) {
            return lf;
        }
        if (df(e)) {
            const t = typeof e.valueOf === "function" ? e.valueOf() : e;
            e = df(t) ? `${t}` : t;
        }
        if (typeof e !== "string") {
            if (e === 0) {
                return e;
            }
            return +e;
        }
        e = e.replace(IT, "");
        const r = ST.test(e);
        if (r || RT.test(e)) {
            return wT(e.slice(2), r ? 2 : 8);
        }
        if (_T.test(e)) {
            return lf;
        }
        return +e;
    }
    uf.exports = bT;
});
const mf = C(function(uL, ff) {
    const DT = "[object Number]";
    const toString = Object.prototype.toString;
    function HT(e) {
        return !!e && typeof e === "object";
    }
    function FT(e) {
        return typeof e === "number" || HT(e) && toString.call(e) == DT;
    }
    ff.exports = FT;
});
const Tf = C(function(hL, yf) {
    const $T = "[object Object]";
    function BT(e) {
        let t = false;
        if (e != null && typeof e.toString !== "function") {
            try {
                t = !!`${e}`;
            } catch (r) {}
        }
        return t;
    }
    function zT(getPrototypeOf, Object) {
        return function(r) {
            return getPrototypeOf(Object(r));
        };
    }
    const toString = Function.prototype.toString;
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const KT = toString.call(Object);
    const toString_1 = Object.prototype.toString;
    const jT = zT(Object.getPrototypeOf, Object);
    function YT(e) {
        return !!e && typeof e === "object";
    }
    function WT(e) {
        if (!YT(e) || toString_1.call(e) != $T || BT(e)) {
            return false;
        }
        const t = jT(e);
        if (t === null) {
            return true;
        }
        const r = hasOwnProperty.call(t, "constructor") && t.constructor;
        return typeof r === "function" && r instanceof r && toString.call(r) == KT;
    }
    yf.exports = WT;
});
const Cf = C(function(fL, Ef) {
    const QT = "[object String]";
    const toString = Object.prototype.toString;
    function eE(e) {
        return !!e && typeof e === "object";
    }
    function tE(e) {
        return typeof e === "string" || !Array.isArray(e) && eE(e) && toString.call(e) == QT;
    }
    Ef.exports = tE;
});
const Rf = C(function(mL, Sf) {
    const rE = "Expected a function";
    const Af = Infinity;
    const nE = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
    const If = NaN;
    const oE = "[object Symbol]";
    const iE = /^\s+|\s+$/g;
    const sE = /^[-+]0x[0-9a-f]+$/i;
    const aE = /^0b[01]+$/i;
    const cE = /^0o[0-7]+$/i;
    const lE = parseInt;
    const toString = Object.prototype.toString;
    function hE(e, t) {
        let r;
        if (typeof t !== "function") {
            throw TypeError(rE);
        }
        e = yE(e);
        return function() {
            if (--e > 0) {
                r = t.apply(this, arguments);
            }
            if (e <= 1) {
                t = undefined;
            }
            return r;
        };
    }
    function fE(e) {
        return hE(2, e);
    }
    function _f(e) {
        const t = typeof e;
        return !!e && (t == "object" || t == "function");
    }
    function mE(e) {
        return !!e && typeof e === "object";
    }
    function pE(e) {
        return typeof e === "symbol" || mE(e) && toString.call(e) == oE;
    }
    function gE(e) {
        if (!e) {
            if (e === 0) {
                return e;
            }
            return 0;
        }
        e = TE(e);
        if (e === Af || e === -Af) {
            const t = e < 0 ? -1 : 1;
            return t * nE;
        }
        if (e === e) {
            return e;
        }
        return 0;
    }
    function yE(e) {
        const t = gE(e);
        const r = t % 1;
        if (t === t) {
            if (r) {
                return t - r;
            }
            return t;
        }
        return 0;
    }
    function TE(e) {
        if (typeof e === "number") {
            return e;
        }
        if (pE(e)) {
            return If;
        }
        if (_f(e)) {
            const t = typeof e.valueOf === "function" ? e.valueOf() : e;
            e = _f(t) ? `${t}` : t;
        }
        if (typeof e !== "string") {
            if (e === 0) {
                return e;
            }
            return +e;
        }
        e = e.replace(iE, "");
        const r = aE.test(e);
        if (r || cE.test(e)) {
            return lE(e.slice(2), r ? 2 : 8);
        }
        if (sE.test(e)) {
            return If;
        }
        return +e;
    }
    Sf.exports = fE;
});
const Mf = C(function(pL, xf) {
    const wf = cc();
    const EE = dc();
    const CE = lc();
    const ms = RPt();
    const bf = of();
    const fs = af();
    const vf = hf();
    const yc = mf();
    const Pf = Tf();
    const Qt = Cf();
    const AE = Rf();
    const { KeyObject, createSecretKey, createPrivateKey } = Le("crypto");
    const Of = [
        "RS256",
        "RS384",
        "RS512",
        "ES256",
        "ES384",
        "ES512",
        "HS256",
        "HS384",
        "HS512",
        "none"
    ];
    if (EE) {
        Of.splice(3, 0, "PS256", "PS384", "PS512");
    }
    const RE = {
        expiresIn: {
            isValid: function(e) {
                return vf(e) || Qt(e) && e;
            },
            message: '"expiresIn" should be a number of seconds or string representing a timespan'
        },
        notBefore: {
            isValid: function(e) {
                return vf(e) || Qt(e) && e;
            },
            message: '"notBefore" should be a number of seconds or string representing a timespan'
        },
        audience: {
            isValid: function(e) {
                return Qt(e) || Array.isArray(e);
            },
            message: '"audience" must be a string or array'
        },
        algorithm: {
            isValid: bf.bind(null, Of),
            message: '"algorithm" must be a valid string enum value'
        },
        header: {
            isValid: Pf,
            message: '"header" must be an object'
        },
        encoding: {
            isValid: Qt,
            message: '"encoding" must be a string'
        },
        issuer: {
            isValid: Qt,
            message: '"issuer" must be a string'
        },
        subject: {
            isValid: Qt,
            message: '"subject" must be a string'
        },
        jwtid: {
            isValid: Qt,
            message: '"jwtid" must be a string'
        },
        noTimestamp: {
            isValid: fs,
            message: '"noTimestamp" must be a boolean'
        },
        keyid: {
            isValid: Qt,
            message: '"keyid" must be a string'
        },
        mutatePayload: {
            isValid: fs,
            message: '"mutatePayload" must be a boolean'
        },
        allowInsecureKeySizes: {
            isValid: fs,
            message: '"allowInsecureKeySizes" must be a boolean'
        },
        allowInvalidAsymmetricKeyTypes: {
            isValid: fs,
            message: '"allowInvalidAsymmetricKeyTypes" must be a boolean'
        }
    };
    const wE = {
        iat: {
            isValid: yc,
            message: '"iat" should be a number of seconds'
        },
        exp: {
            isValid: yc,
            message: '"exp" should be a number of seconds'
        },
        nbf: {
            isValid: yc,
            message: '"nbf" should be a number of seconds'
        }
    };
    function Nf(e, t, r, n) {
        if (!Pf(r)) {
            throw Error(`Expected "${n}" to be a plain object.`);
        }
        Object.keys(r).forEach((o)=>{
            let i = e[o];
            if (!i) {
                if (!t) {
                    throw Error(`"${o}" is not allowed in "${n}"`);
                }
                return;
            }
            if (!i.isValid(r[o])) {
                throw Error(i.message);
            }
        });
    }
    function vE(e) {
        return Nf(RE, false, e, "options");
    }
    function kE(payload) {
        return Nf(wE, true, payload, "payload");
    }
    const kf = {
        audience: "aud",
        issuer: "iss",
        subject: "sub",
        jwtid: "jti"
    };
    const bE = [
        "expiresIn",
        "notBefore",
        "noTimestamp",
        "audience",
        "issuer",
        "subject",
        "jwtid"
    ];
    xf.exports = function(payload, t, r, n) {
        if (typeof r === "function") {
            n = r;
            r = {};
        } else {
            r = r || {};
        }
        let o = typeof payload === "object" && !Buffer.isBuffer(payload);
        let i = {
            alg: r.algorithm || "HS256",
            typ: o ? "JWT" : undefined,
            kid: r.keyid,
            ...r.header
        };
        function s(l) {
            if (n) {
                return n(l);
            }
            throw l;
        }
        if (!t && r.algorithm !== "none") {
            return s(Error("secretOrPrivateKey must have a value"));
        }
        if (t != null && !(t instanceof KeyObject)) {
            try {
                t = createPrivateKey(t);
            } catch (l) {
                try {
                    t = createSecretKey(typeof t === "string" ? Buffer.from(t) : t);
                } catch (d) {
                    return s(Error("secretOrPrivateKey is not valid key material"));
                }
            }
        }
        if (i.alg.startsWith("HS") && t.type !== "secret") {
            return s(Error(`secretOrPrivateKey must be a symmetric key when using ${i.alg}`));
        } else if (/^(?:RS|PS|ES)/.test(i.alg)) {
            if (t.type !== "private") {
                return s(Error(`secretOrPrivateKey must be an asymmetric key when using ${i.alg}`));
            }
            if (!r.allowInsecureKeySizes && !i.alg.startsWith("ES") && t.asymmetricKeyDetails !== undefined && t.asymmetricKeyDetails.modulusLength < 2048) {
                return s(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${i.alg}`));
            }
        }
        if (typeof payload === "undefined") {
            return s(Error("payload is required"));
        } else if (o) {
            try {
                kE(payload);
            } catch (error) {
                return s(error);
            }
            if (!r.mutatePayload) {
                payload = {
                    ...payload
                };
            }
        } else {
            let l = bE.filter((d)=>typeof r[d] !== "undefined");
            if (l.length > 0) {
                return s(Error(`invalid ${l.join(",")} option for ${typeof payload} payload`));
            }
        }
        if (typeof payload.exp !== "undefined" && typeof r.expiresIn !== "undefined") {
            return s(Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
        }
        if (typeof payload.nbf !== "undefined" && typeof r.notBefore !== "undefined") {
            return s(Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
        }
        try {
            vE(r);
        } catch (error) {
            return s(error);
        }
        if (!r.allowInvalidAsymmetricKeyTypes) {
            try {
                CE(i.alg, t);
            } catch (error) {
                return s(error);
            }
        }
        let a = payload.iat || Math.floor(Date.now() / 1000);
        if (r.noTimestamp) {
            delete payload.iat;
        } else if (o) {
            payload.iat = a;
        }
        if (typeof r.notBefore !== "undefined") {
            try {
                payload.nbf = wf(r.notBefore, a);
            } catch (error) {
                return s(error);
            }
            if (typeof payload.nbf === "undefined") {
                return s(Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
            }
        }
        if (typeof r.expiresIn !== "undefined" && typeof payload === "object") {
            try {
                payload.exp = wf(r.expiresIn, a);
            } catch (error) {
                return s(error);
            }
            if (typeof payload.exp === "undefined") {
                return s(Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
            }
        }
        Object.keys(kf).forEach((l)=>{
            let d = kf[l];
            if (typeof r[l] !== "undefined") {
                if (typeof payload[d] !== "undefined") {
                    return s(Error(`Bad "options.${l}" option. The payload already has an "${d}" property.`));
                }
                payload[d] = r[l];
            }
        });
        let encoding = r.encoding || "utf8";
        if (typeof n === "function") {
            n = n && AE(n);
            ms.createSign({
                header: i,
                privateKey: t,
                payload,
                encoding
            }).once("error", n).once("done", function(l) {
                if (!r.allowInsecureKeySizes && /^(?:RS|PS)/.test(i.alg) && l.length < 256) {
                    return n(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${i.alg}`));
                }
                n(null, l);
            });
        } else {
            let l = ms.sign({
                header: i,
                payload,
                secret: t,
                encoding
            });
            if (!r.allowInsecureKeySizes && /^(?:RS|PS)/.test(i.alg) && l.length < 256) {
                throw Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${i.alg}`);
            }
            return l;
        }
    };
});
const Uf = C(function(gL, Df) {
    Df.exports = {
        decode: ic(),
        verify: Xh(),
        sign: Mf(),
        JsonWebTokenError: vo(),
        NotBeforeError: sc(),
        TokenExpiredError: ac()
    };
});
const xo = "4.10.1";
const Ps = "04b07795-8ddb-461a-bbee-02f9e1bf7b46";
const zc = "common";
const bs = {
    AzureChina: "https://login.chinacloudapi.cn",
    AzureGermany: "https://login.microsoftonline.de",
    AzureGovernment: "https://login.microsoftonline.us",
    AzurePublicCloud: "https://login.microsoftonline.com"
};
const bs_AzurePublicCloud = bs.AzurePublicCloud;
const Gc = "login.microsoftonline.com";
const qc = [
    "*"
];
const Kc = "cae";
const Vc = "nocae";
const jc = "msal.cache";
let Os;
let Yc;
function generatePluginConfiguration(e) {
    let c = {
        cache: {},
        broker: {
            isEnabled: e.brokerOptions?.enabled ?? false,
            enableMsaPassthrough: e.brokerOptions?.legacyEnableMsaPassthrough ?? false,
            parentWindowHandle: e.brokerOptions?.parentWindowHandle
        }
    };
    if (e.tokenCachePersistenceOptions?.enabled) {
        if (Os === undefined) {
            throw Error([
                "Persistent token caching was requested, but no persistence provider was configured.",
                "You must install the identity-cache-persistence plugin package (`npm install --save @azure/identity-cache-persistence`)",
                "and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling",
                "`useIdentityPlugin(cachePersistencePlugin)` before using `tokenCachePersistenceOptions`."
            ].join(" "));
        }
        let l = e.tokenCachePersistenceOptions.name || jc;
        c.cache.cachePlugin = Os({
            name: `${l}.${Vc}`,
            ...e.tokenCachePersistenceOptions
        });
        c.cache.cachePluginCae = Os({
            name: `${l}.${Kc}`,
            ...e.tokenCachePersistenceOptions
        });
    }
    if (e.brokerOptions?.enabled) {
        if (Yc === undefined) {
            throw Error([
                "Broker for WAM was requested to be enabled, but no native broker was configured.",
                "You must install the identity-broker plugin package (`npm install --save @azure/identity-broker`)",
                "and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling",
                "`useIdentityPlugin(createNativeBrokerPlugin())` before using `enableBroker`."
            ].join(" "));
        }
        c.broker.nativeBrokerPlugin = Yc.broker;
    }
    return c;
}
const Wc = {
    generatePluginConfiguration
};
function log(e, ...t) {
    Qc.stderr.write(`${mm.format(e, ...t)}${EOL}`);
}
const Xc = typeof process !== "undefined" && process.env && process.env.DEBUG || undefined;
let Zc;
let Ns = [];
let xs = [];
const Mo = [];
if (Xc) {
    enable(Xc);
}
var el = Object.assign((e)=>tl(e), {
    enable,
    enabled,
    disable,
    log
});
function enable(e) {
    Zc = e;
    Ns = [];
    xs = [];
    let t = /\*/g;
    let r = e.split(",").map((n)=>n.trim().replace(t, ".*?"));
    for (let n of r){
        if (n.startsWith("-")) {
            xs.push(new RegExp(`^${n.substr(1)}$`));
        } else {
            Ns.push(new RegExp(`^${n}$`));
        }
    }
    for (let n of Mo){
        n.enabled = enabled(n.namespace);
    }
}
function enabled(e) {
    if (e.endsWith("*")) {
        return true;
    }
    for (let t of xs){
        if (t.test(e)) {
            return false;
        }
    }
    for (let t of Ns){
        if (t.test(e)) {
            return true;
        }
    }
    return false;
}
function disable() {
    let e = Zc || "";
    enable("");
    return e;
}
function tl(namespace) {
    let t = Object.assign(r, {
        enabled: enabled(namespace),
        destroy,
        log: el.log,
        namespace,
        extend
    });
    function r(...n) {
        if (!t.enabled) {
            return;
        }
        if (n.length > 0) {
            n[0] = `${namespace} ${n[0]}`;
        }
        t.log(...n);
    }
    Mo.push(t);
    return t;
}
function destroy() {
    let e = Mo.indexOf(this);
    if (e >= 0) {
        Mo.splice(e, 1);
        return true;
    }
    return false;
}
function extend(e) {
    let t = tl(`${this.namespace}:${e}`);
    t.log = this.log;
    return t;
}
const $r = el;
const Us = [
    "verbose",
    "info",
    "warning",
    "error"
];
const rl = {
    verbose: 400,
    info: 300,
    warning: 200,
    error: 100
};
function nl(e, t) {
    t.log = (...r)=>{
        e.log(...r);
    };
}
function ol(e) {
    return Us.includes(e);
}
function Do(e) {
    let t = new Set;
    let r = typeof process !== "undefined" && process.env && process.env[e.logLevelEnvVarName] || undefined;
    let n;
    let o = $r(e.namespace);
    o.log = (...d)=>{
        $r.log(...d);
    };
    function setLogLevel(d) {
        if (d && !ol(d)) {
            throw Error(`Unknown log level '${d}'. Acceptable values: ${Us.join(",")}`);
        }
        n = d;
        let u = [];
        for (let m of t){
            if (s(m)) {
                u.push(m.namespace);
            }
        }
        $r.enable(u.join(","));
    }
    if (r) {
        if (ol(r)) {
            setLogLevel(r);
        } else {
            console.error(`${e.logLevelEnvVarName} set to unknown log level '${r}'; logging is not enabled. Acceptable values: ${Us.join(", ")}.`);
        }
    }
    function s(d) {
        return Boolean(n && rl[d.level] <= rl[n]);
    }
    function a(d, level) {
        let m = Object.assign(d.extend(level), {
            level
        });
        nl(d, m);
        if (s(m)) {
            let p = $r.disable();
            $r.enable(`${p},${m.namespace}`);
        }
        t.add(m);
        return m;
    }
    function getLogLevel() {
        return n;
    }
    function createClientLogger(d) {
        let u = o.extend(d);
        nl(o, u);
        return {
            error: a(u, "error"),
            warning: a(u, "warning"),
            info: a(u, "info"),
            verbose: a(u, "verbose")
        };
    }
    return {
        setLogLevel,
        getLogLevel,
        createClientLogger,
        logger: o
    };
}
const il = Do({
    logLevelEnvVarName: "TYPESPEC_RUNTIME_LOG_LEVEL",
    namespace: "typeSpecRuntime"
});
const il_logger = il.logger;
function Uo(e) {
    return il.createClientLogger(e);
}
const Ls = Do({
    logLevelEnvVarName: "AZURE_LOG_LEVEL",
    namespace: "azure"
});
const Ls_logger = Ls.logger;
function Lo() {
    return Ls.getLogLevel();
}
function Pt(e) {
    return Ls.createClientLogger(e);
}
const Be = Pt("identity");
function Ho(e) {
    return e.reduce((acc, item)=>{
        if (process.env[item]) {
            acc.assigned.push(item);
        } else {
            acc.missing.push(item);
        }
        return acc;
    }, {
        missing: [],
        assigned: []
    });
}
function he(e) {
    return `SUCCESS. Scopes: ${Array.isArray(e) ? e.join(", ") : e}.`;
}
function q(e, t) {
    let r = "ERROR.";
    if (e?.length) {
        r += ` Scopes: ${Array.isArray(e) ? e.join(", ") : e}.`;
    }
    return `${r} Error message: ${typeof t === "string" ? t : t.message}.`;
}
function sl(title, t, r = Be) {
    let fullTitle = t ? `${t.fullTitle} ${title}` : title;
    function info(c) {
        r.info(`${fullTitle} =>`, c);
    }
    function warning(c) {
        r.warning(`${fullTitle} =>`, c);
    }
    function verbose(c) {
        r.verbose(`${fullTitle} =>`, c);
    }
    function a(c) {
        r.error(`${fullTitle} =>`, c);
    }
    return {
        title,
        fullTitle,
        info,
        warning,
        verbose,
        error: a
    };
}
function z(e, parent = Be) {
    let r = sl(e, undefined, parent);
    return {
        ...r,
        parent,
        getToken: sl("=> getToken()", r, parent)
    };
}
function Tm(e) {
    return e && typeof e.error === "string" && typeof e.error_description === "string";
}
const Em = "CredentialUnavailableError";
class w extends Error {
    constructor(e, t){
        super(e, t);
        this.name = Em;
    }
}
const Hs = "AuthenticationError";
class $n extends Error {
    constructor(e, t, r){
        let n = {
            error: "unknown",
            errorDescription: "An unknown error occurred and no additional details are available."
        };
        if (Tm(t)) {
            n = al(t);
        } else if (typeof t === "string") {
            try {
                let o = JSON.parse(t);
                n = al(o);
            } catch (o) {
                if (e === 400) {
                    n = {
                        error: "invalid_request",
                        errorDescription: `The service indicated that the request was invalid.

${t}`
                    };
                } else {
                    n = {
                        error: "unknown_error",
                        errorDescription: `An unknown error has occurred. Response body:

${t}`
                    };
                }
            }
        } else {
            n = {
                error: "unknown_error",
                errorDescription: "An unknown error occurred and no additional details are available."
            };
        }
        super(`${n.error} Status code: ${e}
More details:
${n.errorDescription},`, r);
        this.statusCode = e;
        this.errorResponse = n;
        this.name = Hs;
    }
}
const Cm = "AggregateAuthenticationError";
class Fs extends Error {
    constructor(e, t){
        let r = e.join(`
`);
        super(`${t}
${r}`);
        this.errors = e;
        this.name = Cm;
    }
}
function al(e) {
    return {
        error: e.error,
        errorDescription: e.error_description,
        correlationId: e.correlation_id,
        errorCodes: e.error_codes,
        timestamp: e.timestamp,
        traceId: e.trace_id
    };
}
class dt extends Error {
    constructor(e){
        super(e.message, e.cause ? {
            cause: e.cause
        } : undefined);
        this.scopes = e.scopes;
        this.getTokenOptions = e.getTokenOptions;
        this.name = "AuthenticationRequiredError";
    }
}
function Am(e) {
    return `The current credential is not configured to acquire tokens for tenant ${e}. To enable acquiring tokens for this tenant add it to the AdditionallyAllowedTenants on the credential options, or add "*" to AdditionallyAllowedTenants to allow acquiring tokens for any tenant.`;
}
function Ee(tenantId, t, r = [], n) {
    let i;
    if (process.env.AZURE_IDENTITY_DISABLE_MULTITENANTAUTH) {
        i = tenantId;
    } else if (tenantId === "adfs") {
        i = tenantId;
    } else {
        i = t?.tenantId ?? tenantId;
    }
    if (tenantId && i !== tenantId && !r.includes("*") && !r.some((s)=>s.localeCompare(i) === 0)) {
        let s = Am(i);
        n?.info(s);
        throw new w(s);
    }
    return i;
}
function we(e, t) {
    if (!t.match(/^[0-9a-zA-Z-.]+$/)) {
        let r = Error("Invalid tenant id provided. You can locate your tenant id by following the instructions listed here: https://learn.microsoft.com/partner-center/find-ids-and-domain-names.");
        e.info(q("", r));
        throw r;
    }
}
function cl(e, t, r) {
    if (t) {
        we(e, t);
        return t;
    }
    if (!r) {
        r = Ps;
    }
    if (r !== Ps) {
        return "common";
    }
    return "organizations";
}
function ve(e) {
    if (!e || e.length === 0) {
        return [];
    }
    if (e.includes("*")) {
        return qc;
    }
    return e;
}
function Fo(e) {
    return e.toLowerCase();
}
function* Im(_headersMap) {
    for (let t of _headersMap.values()){
        yield [
            t.name,
            t.value
        ];
    }
}
class ll {
    constructor(e){
        this._headersMap = new Map;
        if (e) {
            for (let t of Object.keys(e)){
                this.set(t, e[t]);
            }
        }
    }
    set(e, t) {
        this._headersMap.set(Fo(e), {
            name: e,
            value: String(t).trim()
        });
    }
    get(e) {
        return this._headersMap.get(Fo(e))?.value;
    }
    has(e) {
        return this._headersMap.has(Fo(e));
    }
    delete(e) {
        this._headersMap.delete(Fo(e));
    }
    toJSON(e = {}) {
        let t = {};
        if (e.preserveCase) {
            for (let r of this._headersMap.values()){
                t[r.name] = r.value;
            }
        } else {
            for (let [r, n] of this._headersMap){
                t[r] = n.value;
            }
        }
        return t;
    }
    toString() {
        return JSON.stringify(this.toJSON({
            preserveCase: true
        }));
    }
    [Symbol.iterator]() {
        return Im(this._headersMap);
    }
}
function et(e) {
    return new ll(e);
}
const Sm = typeof globalThis?.crypto?.randomUUID === "function" ? globalThis.crypto.randomUUID.bind(globalThis.crypto) : randomUUID;
function Bn() {
    return Sm();
}
class dl {
    constructor(e){
        this.url = e.url;
        this.body = e.body;
        this.headers = e.headers ?? et();
        this.method = e.method ?? "GET";
        this.timeout = e.timeout ?? 0;
        this.multipartBody = e.multipartBody;
        this.formData = e.formData;
        this.disableKeepAlive = e.disableKeepAlive ?? false;
        this.proxySettings = e.proxySettings;
        this.streamResponseStatusCodes = e.streamResponseStatusCodes;
        this.withCredentials = e.withCredentials ?? false;
        this.abortSignal = e.abortSignal;
        this.onUploadProgress = e.onUploadProgress;
        this.onDownloadProgress = e.onDownloadProgress;
        this.requestId = e.requestId || Bn();
        this.allowInsecureConnection = e.allowInsecureConnection ?? false;
        this.enableBrowserStreams = e.enableBrowserStreams ?? false;
        this.requestOverrides = e.requestOverrides;
        this.authSchemes = e.authSchemes;
    }
}
function Bs(e) {
    return new dl(e);
}
const ul = new Set([
    "Deserialize",
    "Serialize",
    "Retry",
    "Sign"
]);
class $o {
    constructor(e){
        this._policies = [];
        this._policies = e?.slice(0) ?? [];
        this._orderedPolicies = undefined;
    }
    addPolicy(policy, options = {}) {
        if (options.phase && options.afterPhase) {
            throw Error("Policies inside a phase cannot specify afterPhase.");
        }
        if (options.phase && !ul.has(options.phase)) {
            throw Error(`Invalid phase name: ${options.phase}`);
        }
        if (options.afterPhase && !ul.has(options.afterPhase)) {
            throw Error(`Invalid afterPhase name: ${options.afterPhase}`);
        }
        this._policies.push({
            policy,
            options
        });
        this._orderedPolicies = undefined;
    }
    removePolicy(e) {
        let t = [];
        this._policies = this._policies.filter((r)=>{
            if (e.name && r.policy.name === e.name || e.phase && r.options.phase === e.phase) {
                t.push(r.policy);
                return false;
            } else {
                return true;
            }
        });
        this._orderedPolicies = undefined;
        return t;
    }
    sendRequest(e, t) {
        return this.getOrderedPolicies().reduceRight((acc, item)=>(s)=>item.sendRequest(s, acc), (o)=>e.sendRequest(o))(t);
    }
    getOrderedPolicies() {
        if (!this._orderedPolicies) {
            this._orderedPolicies = this.orderPolicies();
        }
        return this._orderedPolicies;
    }
    clone() {
        return new $o(this._policies);
    }
    static create() {
        return new $o;
    }
    orderPolicies() {
        let e = [];
        let t = new Map;
        function r(p) {
            return {
                name: p,
                policies: new Set,
                hasRun: false,
                hasAfterPolicies: false
            };
        }
        let n = r("Serialize");
        let o = r("None");
        let i = r("Deserialize");
        let s = r("Retry");
        let a = r("Sign");
        let c = [
            n,
            o,
            i,
            s,
            a
        ];
        function l(p) {
            if (p === "Retry") {
                return s;
            } else if (p === "Serialize") {
                return n;
            } else if (p === "Deserialize") {
                return i;
            } else if (p === "Sign") {
                return a;
            } else {
                return o;
            }
        }
        for (let p of this._policies){
            let { policy, options } = p;
            let _ = policy.name;
            if (t.has(_)) {
                throw Error("Duplicate policy names not allowed in pipeline");
            }
            let k = {
                policy,
                dependsOn: new Set,
                dependants: new Set
            };
            if (options.afterPhase) {
                k.afterPhase = l(options.afterPhase);
                k.afterPhase.hasAfterPolicies = true;
            }
            t.set(_, k);
            l(options.phase).policies.add(k);
        }
        for (let p of this._policies){
            let { policy, options } = p;
            let _ = policy.name;
            let k = t.get(_);
            if (!k) {
                throw Error(`Missing node for policy ${_}`);
            }
            if (options.afterPolicies) {
                for (let U of options.afterPolicies){
                    let B = t.get(U);
                    if (B) {
                        k.dependsOn.add(B);
                        B.dependants.add(k);
                    }
                }
            }
            if (options.beforePolicies) {
                for (let U of options.beforePolicies){
                    let B = t.get(U);
                    if (B) {
                        B.dependsOn.add(k);
                        k.dependants.add(B);
                    }
                }
            }
        }
        function d(p) {
            p.hasRun = true;
            for (let y of p.policies){
                if (y.afterPhase && (!y.afterPhase.hasRun || y.afterPhase.policies.size)) {
                    continue;
                }
                if (y.dependsOn.size === 0) {
                    e.push(y.policy);
                    for (let T of y.dependants){
                        T.dependsOn.delete(y);
                    }
                    t.delete(y.policy.name);
                    p.policies.delete(y);
                }
            }
        }
        function u() {
            for (let p of c){
                d(p);
                if (p.policies.size > 0 && p !== o) {
                    if (!o.hasRun) {
                        d(o);
                    }
                    return;
                }
                if (p.hasAfterPolicies) {
                    d(o);
                }
            }
        }
        let m = 0;
        while(t.size > 0){
            m++;
            let p = e.length;
            u();
            if (e.length <= p && m > 1) {
                throw Error("Cannot satisfy policy dependencies due to requirements cycle.");
            }
        }
        return e;
    }
}
function zs() {
    return $o.create();
}
function zn(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date);
}
function tr(e) {
    if (zn(e)) {
        let t = typeof e.name === "string";
        let r = typeof e.message === "string";
        return t && r;
    }
    return false;
}
const inspect_custom = inspect.custom;
const Gs = "REDACTED";
const wm = [
    "x-ms-client-request-id",
    "x-ms-return-client-request-id",
    "x-ms-useragent",
    "x-ms-correlation-request-id",
    "x-ms-request-id",
    "client-request-id",
    "ms-cv",
    "return-client-request-id",
    "traceparent",
    "Access-Control-Allow-Credentials",
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Methods",
    "Access-Control-Allow-Origin",
    "Access-Control-Expose-Headers",
    "Access-Control-Max-Age",
    "Access-Control-Request-Headers",
    "Access-Control-Request-Method",
    "Origin",
    "Accept",
    "Accept-Encoding",
    "Cache-Control",
    "Connection",
    "Content-Length",
    "Content-Type",
    "Date",
    "ETag",
    "Expires",
    "If-Match",
    "If-Modified-Since",
    "If-None-Match",
    "If-Unmodified-Since",
    "Last-Modified",
    "Pragma",
    "Request-Id",
    "Retry-After",
    "Server",
    "Transfer-Encoding",
    "User-Agent",
    "WWW-Authenticate"
];
const vm = [
    "api-version"
];
class tt {
    constructor({ additionalAllowedHeaderNames = [], additionalAllowedQueryParameters = [] } = {}){
        additionalAllowedHeaderNames = wm.concat(additionalAllowedHeaderNames);
        additionalAllowedQueryParameters = vm.concat(additionalAllowedQueryParameters);
        this.allowedHeaderNames = new Set(additionalAllowedHeaderNames.map((r)=>r.toLowerCase()));
        this.allowedQueryParameters = new Set(additionalAllowedQueryParameters.map((r)=>r.toLowerCase()));
    }
    sanitize(e) {
        let t = new Set;
        return JSON.stringify(e, (r, n)=>{
            if (n instanceof Error) {
                return {
                    ...n,
                    name: n.name,
                    message: n.message
                };
            }
            if (r === "headers") {
                return this.sanitizeHeaders(n);
            } else if (r === "url") {
                return this.sanitizeUrl(n);
            } else if (r === "query") {
                return this.sanitizeQuery(n);
            } else if (r === "body") {
                return;
            } else if (r === "response") {
                return;
            } else if (r === "operationSpec") {
                return;
            } else if (Array.isArray(n) || zn(n)) {
                if (t.has(n)) {
                    return "[Circular]";
                }
                t.add(n);
            }
            return n;
        }, 2);
    }
    sanitizeUrl(e) {
        if (typeof e !== "string" || e === null || e === "") {
            return e;
        }
        let t = new URL(e);
        if (!t.search) {
            return e;
        }
        for (let [r] of t.searchParams){
            if (!this.allowedQueryParameters.has(r.toLowerCase())) {
                t.searchParams.set(r, Gs);
            }
        }
        return t.toString();
    }
    sanitizeHeaders(e) {
        let t = {};
        for (let r of Object.keys(e)){
            if (this.allowedHeaderNames.has(r.toLowerCase())) {
                t[r] = e[r];
            } else {
                t[r] = Gs;
            }
        }
        return t;
    }
    sanitizeQuery(e) {
        if (typeof e !== "object" || e === null) {
            return e;
        }
        let t = {};
        for (let r of Object.keys(e)){
            if (this.allowedQueryParameters.has(r.toLowerCase())) {
                t[r] = e[r];
            } else {
                t[r] = Gs;
            }
        }
        return t;
    }
}
const km = new tt;
class ke extends Error {
    constructor(e, t = {}){
        super(e);
        this.name = "RestError";
        this.code = t.code;
        this.statusCode = t.statusCode;
        Object.defineProperty(this, "request", {
            value: t.request,
            enumerable: false
        });
        Object.defineProperty(this, "response", {
            value: t.response,
            enumerable: false
        });
        Object.defineProperty(this, inspect_custom, {
            value: ()=>`RestError: ${this.message} 
 ${km.sanitize({
                    ...this,
                    request: this.request,
                    response: this.response
                })}`,
            enumerable: false
        });
        Object.setPrototypeOf(this, ke.prototype);
    }
}
ke.REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR";
ke.PARSE_ERROR = "PARSE_ERROR";
function qs(e) {
    if (e instanceof ke) {
        return true;
    }
    return tr(e) && e.name === "RestError";
}
class Ot extends Error {
    constructor(e){
        super(e);
        this.name = "AbortError";
    }
}
const Ve = Uo("ts-http-runtime");
const Pm = {};
function Gn(e) {
    return e && typeof e.pipe === "function";
}
function fl(e) {
    if (e.readable === false) {
        return Promise.resolve();
    }
    return new Promise((resolve)=>{
        let r = ()=>{
            resolve();
            e.removeListener("close", r);
            e.removeListener("end", r);
            e.removeListener("error", r);
        };
        e.on("close", r);
        e.on("end", r);
        e.on("error", r);
    });
}
function ml(e) {
    return e && typeof e.byteLength === "number";
}
class Ks extends Transform {
    _transform(e, t, r) {
        this.push(e);
        this.loadedBytes += e.length;
        try {
            this.progressCallback({
                loadedBytes: this.loadedBytes
            });
            r();
        } catch (error) {
            r(error);
        }
    }
    constructor(e){
        super();
        this.loadedBytes = 0;
        this.progressCallback = e;
    }
}
class pl {
    constructor(){
        this.cachedHttpsAgents = new WeakMap;
    }
    async sendRequest(e) {
        let o = new AbortController;
        let i;
        if (e.abortSignal) {
            if (e.abortSignal.aborted) {
                throw new Ot("The operation was aborted. Request has already been canceled.");
            }
            i = (u)=>{
                if (u.type === "abort") {
                    o.abort();
                }
            };
            e.abortSignal.addEventListener("abort", i);
        }
        let s;
        if (e.timeout > 0) {
            s = setTimeout(()=>{
                let u = new tt;
                Ve.info(`request to '${u.sanitizeUrl(e.url)}' timed out. canceling...`);
                o.abort();
            }, e.timeout);
        }
        let a = e.headers.get("Accept-Encoding");
        let c = a?.includes("gzip") || a?.includes("deflate");
        let l = typeof e.body === "function" ? e.body() : e.body;
        if (l && !e.headers.has("Content-Length")) {
            let u = Mm(l);
            if (u !== null) {
                e.headers.set("Content-Length", u);
            }
        }
        let d;
        try {
            if (l && e.onUploadProgress) {
                let _ = e.onUploadProgress;
                let k = new Ks(_);
                k.on("error", (U)=>{
                    Ve.error("Error in upload progress", U);
                });
                if (Gn(l)) {
                    l.pipe(k);
                } else {
                    k.end(l);
                }
                l = k;
            }
            let u = await this.makeRequest(e, o, l);
            if (s !== undefined) {
                clearTimeout(s);
            }
            let m = Om(u);
            let y = {
                status: u.statusCode ?? 0,
                headers: m,
                request: e
            };
            if (e.method === "HEAD") {
                u.resume();
                return y;
            }
            d = c ? Nm(u, m) : u;
            let T = e.onDownloadProgress;
            if (T) {
                let _ = new Ks(T);
                _.on("error", (k)=>{
                    Ve.error("Error in download progress", k);
                });
                d.pipe(_);
                d = _;
            }
            if (e.streamResponseStatusCodes?.has(Number.POSITIVE_INFINITY) || e.streamResponseStatusCodes?.has(y.status)) {
                y.readableStreamBody = d;
            } else {
                y.bodyAsText = await xm(d);
            }
            return y;
        } finally{
            if (e.abortSignal && i) {
                let u = Promise.resolve();
                if (Gn(l)) {
                    u = fl(l);
                }
                let m = Promise.resolve();
                if (Gn(d)) {
                    m = fl(d);
                }
                Promise.all([
                    u,
                    m
                ]).then(()=>{
                    if (i) {
                        e.abortSignal?.removeEventListener("abort", i);
                    }
                }).catch((p)=>{
                    Ve.warning("Error when cleaning up abortListener on httpRequest", p);
                });
            }
        }
    }
    makeRequest(e, t, r) {
        let o = new URL(e.url);
        let i = o.protocol !== "https:";
        if (i && !e.allowInsecureConnection) {
            throw Error(`Cannot connect to ${e.url} while allowInsecureConnection is false.`);
        }
        let agent = e.agent ?? this.getOrCreateAgent(e, i);
        let a = {
            agent,
            hostname: o.hostname,
            path: `${o.pathname}${o.search}`,
            port: o.port,
            method: e.method,
            headers: e.headers.toJSON({
                preserveCase: true
            }),
            ...e.requestOverrides
        };
        return new Promise((resolve, reject)=>{
            let d = i ? Br.request(a, resolve) : zr.request(a, resolve);
            d.once("error", (u)=>{
                reject(new ke(u.message, {
                    code: u.code ?? ke.REQUEST_SEND_ERROR,
                    request: e
                }));
            });
            t.signal.addEventListener("abort", ()=>{
                let u = new Ot("The operation was aborted. Rejecting from abort signal callback while making request.");
                d.destroy(u);
                reject(u);
            });
            if (r && Gn(r)) {
                r.pipe(d);
            } else if (r) {
                if (typeof r === "string" || Buffer.isBuffer(r)) {
                    d.end(r);
                } else if (ml(r)) {
                    d.end(ArrayBuffer.isView(r) ? Buffer.from(r.buffer) : Buffer.from(r));
                } else {
                    Ve.error("Unrecognized body type", r);
                    reject(new ke("Unrecognized body type"));
                }
            } else {
                d.end();
            }
        });
    }
    getOrCreateAgent(e, t) {
        let e_disableKeepAlive = e.disableKeepAlive;
        if (t) {
            if (e_disableKeepAlive) {
                return Br.globalAgent;
            }
            if (!this.cachedHttpAgent) {
                this.cachedHttpAgent = new Br.Agent({
                    keepAlive: true
                });
            }
            return this.cachedHttpAgent;
        } else {
            if (e_disableKeepAlive && !e.tlsSettings) {
                return zr.globalAgent;
            }
            let o = e.tlsSettings ?? Pm;
            let i = this.cachedHttpsAgents.get(o);
            if (i && i.options.keepAlive === !e_disableKeepAlive) {
                return i;
            }
            Ve.info("No cached TLS Agent exist, creating a new Agent");
            i = new zr.Agent({
                keepAlive: !e_disableKeepAlive,
                ...o
            });
            this.cachedHttpsAgents.set(o, i);
            return i;
        }
    }
}
function Om(e) {
    let t = et();
    for (let r of Object.keys(e.headers)){
        let n = e.headers[r];
        if (Array.isArray(n)) {
            if (n.length > 0) {
                t.set(r, n[0]);
            }
        } else if (n) {
            t.set(r, n);
        }
    }
    return t;
}
function Nm(e, t) {
    let r = t.get("Content-Encoding");
    if (r === "gzip") {
        let n = Bo.createGunzip();
        e.pipe(n);
        return n;
    } else if (r === "deflate") {
        let n = Bo.createInflate();
        e.pipe(n);
        return n;
    }
    return e;
}
function xm(e) {
    return new Promise((resolve, reject)=>{
        let n = [];
        e.on("data", (o)=>{
            if (Buffer.isBuffer(o)) {
                n.push(o);
            } else {
                n.push(Buffer.from(o));
            }
        });
        e.on("end", ()=>{
            resolve(Buffer.concat(n).toString("utf8"));
        });
        e.on("error", (o)=>{
            if (o && o?.name === "AbortError") {
                reject(o);
            } else {
                reject(new ke(`Error reading response as text: ${o.message}`, {
                    code: ke.PARSE_ERROR
                }));
            }
        });
    });
}
function Mm(e) {
    if (!e) {
        return 0;
    } else if (Buffer.isBuffer(e)) {
        return e.length;
    } else if (Gn(e)) {
        return null;
    } else if (ml(e)) {
        return e.byteLength;
    } else if (typeof e === "string") {
        return Buffer.from(e).length;
    } else {
        return null;
    }
}
function gl() {
    return new pl;
}
function Vs() {
    return gl();
}
function qn() {
    return zs();
}
const ut = Pt("core-rest-pipeline");
function js(agent) {
    return {
        name: "agentPolicy",
        sendRequest: async (t, r)=>{
            if (!t.agent) {
                t.agent = agent;
            }
            return r(t);
        }
    };
}
function Ys() {
    return {
        name: "decompressResponsePolicy",
        async sendRequest (e, t) {
            if (e.method !== "HEAD") {
                e.headers.set("Accept-Encoding", "gzip,deflate");
            }
            return t(e);
        }
    };
}
function Ws(e, t) {
    e = Math.ceil(e);
    t = Math.floor(t);
    return Math.floor(Math.random() * (t - e + 1)) + e;
}
function Kn(retryCount, t) {
    let r = t.retryDelayInMs * 2 ** retryCount;
    let n = Math.min(t.maxRetryDelayInMs, r);
    return {
        retryAfterInMs: n / 2 + Ws(0, n / 2)
    };
}
const Dm = "The operation was aborted.";
function yl(retryAfterInMs, t, r) {
    return new Promise((resolve, reject)=>{
        let i;
        let s;
        let a = ()=>reject(new Ot(r?.abortErrorMsg ? r?.abortErrorMsg : Dm));
        let c = ()=>{
            if (r?.abortSignal && s) {
                r.abortSignal.removeEventListener("abort", s);
            }
        };
        s = ()=>{
            if (i) {
                clearTimeout(i);
            }
            c();
            return a();
        };
        if (r?.abortSignal && r.abortSignal.aborted) {
            return a();
        }
        i = setTimeout(()=>{
            c();
            resolve(t);
        }, retryAfterInMs);
        if (r?.abortSignal) {
            r.abortSignal.addEventListener("abort", s);
        }
    });
}
function Tl(e, t) {
    let r = e.headers.get(t);
    if (!r) {
        return;
    }
    let n = Number(r);
    if (Number.isNaN(n)) {
        return;
    }
    return n;
}
const Qs = "Retry-After";
const Um = [
    "retry-after-ms",
    "x-ms-retry-after-ms",
    Qs
];
function El(response) {
    if (!(response && [
        429,
        503
    ].includes(response.status))) {
        return;
    }
    try {
        for (let o of Um){
            let i = Tl(response, o);
            if (i === 0 || i) {
                return i * (o === Qs ? 1000 : 1);
            }
        }
        let t = response.headers.get(Qs);
        if (!t) {
            return;
        }
        let n = Date.parse(t) - Date.now();
        if (Number.isFinite(n)) {
            return Math.max(0, n);
        }
        return undefined;
    } catch (t) {
        return;
    }
}
function Cl(response) {
    return Number.isFinite(El(response));
}
function Al() {
    return {
        name: "throttlingRetryStrategy",
        retry ({ response }) {
            let retryAfterInMs = El(response);
            if (!Number.isFinite(retryAfterInMs)) {
                return {
                    skipStrategy: true
                };
            }
            return {
                retryAfterInMs
            };
        }
    };
}
const Lm = 1000;
const Hm = 64000;
function Il(e = {}) {
    let retryDelayInMs = e.retryDelayInMs ?? Lm;
    let o = e.maxRetryDelayInMs ?? Hm;
    return {
        name: "exponentialRetryStrategy",
        retry ({ retryCount, response, responseError }) {
            let c = $m(responseError);
            let l = c && e.ignoreSystemErrors;
            let d = Fm(response);
            let u = d && e.ignoreHttpStatusCodes;
            if (response && (Cl(response) || !d) || u || l) {
                return {
                    skipStrategy: true
                };
            }
            if (responseError && !c && !d) {
                return {
                    errorToThrow: responseError
                };
            }
            return Kn(retryCount, {
                retryDelayInMs,
                maxRetryDelayInMs: o
            });
        }
    };
}
function Fm(response) {
    return Boolean(response && response.status !== undefined && (response.status >= 500 || response.status === 408) && response.status !== 501 && response.status !== 505);
}
function $m(responseError) {
    if (!responseError) {
        return false;
    }
    return responseError.code === "ETIMEDOUT" || responseError.code === "ESOCKETTIMEDOUT" || responseError.code === "ECONNREFUSED" || responseError.code === "ECONNRESET" || responseError.code === "ENOENT" || responseError.code === "ENOTFOUND";
}
const maxRetries_1 = 3;
const Bm = Uo("ts-http-runtime retryPolicy");
const zm = "retryPolicy";
function jn(e, t = {
    maxRetries: maxRetries_1
}) {
    let r = t.logger || Bm;
    return {
        name: zm,
        async sendRequest (n, o) {
            let a;
            let responseError;
            let retryCount = -1;
            e: while(true){
                retryCount += 1;
                a = undefined;
                responseError = undefined;
                try {
                    r.info(`Retry ${retryCount}: Attempting to send request`, n.requestId);
                    a = await o(n);
                    r.info(`Retry ${retryCount}: Received a response from request`, n.requestId);
                } catch (error) {
                    r.error(`Retry ${retryCount}: Received an error from request`, n.requestId);
                    responseError = error;
                    if (!error || responseError.name !== "RestError") {
                        throw error;
                    }
                    a = responseError.response;
                }
                if (n.abortSignal?.aborted) {
                    r.error(`Retry ${retryCount}: Request aborted.`);
                    throw new Ot;
                }
                if (retryCount >= (t.maxRetries ?? maxRetries_1)) {
                    r.info(`Retry ${retryCount}: Maximum retries reached. Returning the last received response, or throwing the last received error.`);
                    if (responseError) {
                        throw responseError;
                    } else if (a) {
                        return a;
                    } else {
                        throw Error("Maximum retries reached with no response or error to throw");
                    }
                }
                r.info(`Retry ${retryCount}: Processing ${e.length} retry strategies.`);
                t: for (let d of e){
                    let u = d.logger || r;
                    u.info(`Retry ${retryCount}: Processing retry strategy ${d.name}.`);
                    let m = d.retry({
                        retryCount,
                        response: a,
                        responseError
                    });
                    if (m.skipStrategy) {
                        u.info(`Retry ${retryCount}: Skipped.`);
                        continue t;
                    }
                    let { errorToThrow, retryAfterInMs, redirectTo } = m;
                    if (errorToThrow) {
                        u.error(`Retry ${retryCount}: Retry strategy ${d.name} throws error:`, errorToThrow);
                        throw errorToThrow;
                    }
                    if (retryAfterInMs || retryAfterInMs === 0) {
                        u.info(`Retry ${retryCount}: Retry strategy ${d.name} retries after ${retryAfterInMs}`);
                        await yl(retryAfterInMs, undefined, {
                            abortSignal: n.abortSignal
                        });
                        continue e;
                    }
                    if (redirectTo) {
                        u.info(`Retry ${retryCount}: Retry strategy ${d.name} redirects to ${redirectTo}`);
                        n.url = redirectTo;
                        continue e;
                    }
                }
                if (responseError) {
                    r.info("None of the retry strategies could work with the received error. Throwing it.");
                    throw responseError;
                }
                if (a) {
                    r.info("None of the retry strategies could work with the received response. Returning it.");
                    return a;
                }
            }
        }
    };
}
const Js = "defaultRetryPolicy";
function Xs(e = {}) {
    return {
        name: Js,
        sendRequest: jn([
            Al(),
            Il(e)
        ], {
            maxRetries: e.maxRetries ?? maxRetries_1
        }).sendRequest
    };
}
function rt(e, t) {
    return Buffer.from(e, t);
}
const _l = typeof window !== "undefined" && typeof window.document !== "undefined";
const Sl = typeof self === "object" && typeof self?.importScripts === "function" && (self.constructor?.name === "DedicatedWorkerGlobalScope" || self.constructor?.name === "ServiceWorkerGlobalScope" || self.constructor?.name === "SharedWorkerGlobalScope");
const Rl = typeof Deno !== "undefined" && typeof Deno.version !== "undefined" && typeof Deno.version.deno !== "undefined";
const wl = typeof Bun !== "undefined" && typeof Bun.version !== "undefined";
const Gr = typeof globalThis.process !== "undefined" && Boolean(globalThis.process.version) && Boolean(globalThis.process.versions?.node);
const vl = typeof navigator !== "undefined" && navigator?.product === "ReactNative";
const na = "formDataPolicy";
function Gm(body) {
    let t;
    let r = {};
    for (let [n, o] of body.entries()){
        if (!((t = r[n]) !== null && t !== undefined)) {
            r[n] = [];
        }
        r[n].push(o);
    }
    return r;
}
function oa() {
    return {
        name: na,
        async sendRequest (e, t) {
            if (Gr && typeof FormData !== "undefined" && e.body instanceof FormData) {
                e.formData = Gm(e.body);
                e.body = undefined;
            }
            if (e.formData) {
                let r = e.headers.get("Content-Type");
                if (r && r.indexOf("application/x-www-form-urlencoded") !== -1) {
                    e.body = qm(e.formData);
                } else {
                    await Km(e.formData, e);
                }
                e.formData = undefined;
            }
            return t(e);
        }
    };
}
function qm(formData) {
    let t = new URLSearchParams;
    for (let [r, n] of Object.entries(formData)){
        if (Array.isArray(n)) {
            for (let o of n){
                t.append(r, o.toString());
            }
        } else {
            t.append(r, n.toString());
        }
    }
    return t.toString();
}
async function Km(formData, t) {
    let r = t.headers.get("Content-Type");
    if (r && !r.startsWith("multipart/form-data")) {
        return;
    }
    t.headers.set("Content-Type", r ?? "multipart/form-data");
    let parts = [];
    for (let [o, i] of Object.entries(formData)){
        for (let s of Array.isArray(i) ? i : [
            i
        ]){
            if (typeof s === "string") {
                parts.push({
                    headers: et({
                        "Content-Disposition": `form-data; name="${o}"`
                    }),
                    body: rt(s, "utf-8")
                });
            } else if (s === undefined || s === null || typeof s !== "object") {
                throw Error(`Unexpected value for key ${o}: ${s}. Value should be serialized to string first.`);
            } else {
                let a = s.name || "blob";
                let c = et();
                c.set("Content-Disposition", `form-data; name="${o}"; filename="${a}"`);
                c.set("Content-Type", s.type || "application/octet-stream");
                parts.push({
                    headers: c,
                    body: s
                });
            }
        }
    }
    t.multipartBody = {
        parts
    };
}
const ia = "logPolicy";
function sa(e = {}) {
    let r = e.logger ?? Ve.info;
    let n = new tt({
        additionalAllowedHeaderNames: e.additionalAllowedHeaderNames,
        additionalAllowedQueryParameters: e.additionalAllowedQueryParameters
    });
    return {
        name: ia,
        async sendRequest (o, i) {
            if (!r.enabled) {
                return i(o);
            }
            r(`Request: ${n.sanitize(o)}`);
            let s = await i(o);
            r(`Response status code: ${s.status}`);
            r(`Headers: ${n.sanitize(s.headers)}`);
            return s;
        }
    };
}
function zo(e) {
    return typeof e.stream === "function";
}
function kl() {
    return Cmo(this, arguments, function*() {
        let t = this.getReader();
        try {
            while(true){
                let { done, value } = yield LPt(t.read());
                if (done) {
                    return yield LPt(undefined);
                }
                yield yield LPt(value);
            }
        } finally{
            t.releaseLock();
        }
    });
}
function Vm(e) {
    if (!e[Symbol.asyncIterator]) {
        e[Symbol.asyncIterator] = kl.bind(e);
    }
    if (!e.values) {
        e.values = kl.bind(e);
    }
}
function bl(e) {
    if (e instanceof ReadableStream) {
        Vm(e);
        return Readable.fromWeb(e);
    } else {
        return e;
    }
}
function jm(e) {
    if (e instanceof Uint8Array) {
        return Readable.from(Buffer.from(e));
    } else if (zo(e)) {
        return bl(e.stream());
    } else {
        return bl(e);
    }
}
async function Pl(e) {
    return function() {
        let t = e.map((r)=>{
            if (typeof r === "function") {
                return r();
            }
            return r;
        }).map(jm);
        return Readable.from(function() {
            return Cmo(this, arguments, function*() {
                let r;
                let n;
                let o;
                let i;
                for (let l of t){
                    try {
                        var s = true;
                        n = undefined;
                        var a = OSs(l);
                        for(let c; c = yield LPt(a.next()), r = c.done, !r; s = true){
                            i = c.value;
                            s = false;
                            yield yield LPt(i);
                        }
                    } catch (error) {
                        n = {
                            error
                        };
                    } finally{
                        try {
                            if (!s && !r && (o = a.return)) {
                                yield LPt(o.call(a));
                            }
                        } finally{
                            if (n) {
                                throw n.error;
                            }
                        }
                    }
                }
            });
        }());
    };
}
function Ym() {
    return `----AzSDKFormBoundary${Bn()}`;
}
function Wm(headers) {
    let t = "";
    for (let [r, n] of headers){
        t += `${r}: ${n}\r
`;
    }
    return t;
}
function Qm(e) {
    if (e instanceof Uint8Array) {
        return e.byteLength;
    } else if (zo(e)) {
        if (e.size === -1) {
            return undefined;
        }
        return e.size;
    } else {
        return;
    }
}
function Jm(e) {
    let t = 0;
    for (let r of e){
        let n = Qm(r);
        if (n === undefined) {
            return;
        } else {
            t += n;
        }
    }
    return t;
}
async function Xm(e, parts, boundary) {
    let n = [
        rt(`--${boundary}`, "utf-8"),
        ...parts.flatMap((i)=>[
                rt(`\r
`, "utf-8"),
                rt(Wm(i.headers), "utf-8"),
                rt(`\r
`, "utf-8"),
                i.body,
                rt(`\r
--${boundary}`, "utf-8")
            ]),
        rt(`--\r
\r
`, "utf-8")
    ];
    let o = Jm(n);
    if (o) {
        e.headers.set("Content-Length", o);
    }
    e.body = await Pl(n);
}
const Go = "multipartPolicy";
const Zm = 70;
const ep = new Set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'()+,-./:=?");
function tp(boundary) {
    if (boundary.length > Zm) {
        throw Error(`Multipart boundary "${boundary}" exceeds maximum length of 70 characters`);
    }
    if (Array.from(boundary).some((t)=>!ep.has(t))) {
        throw Error(`Multipart boundary "${boundary}" contains invalid characters`);
    }
}
function ca() {
    return {
        name: Go,
        async sendRequest (e, t) {
            if (!e.multipartBody) {
                return t(e);
            }
            if (e.body) {
                throw Error("multipartBody and regular body cannot be set at the same time");
            }
            let boundary = e.multipartBody.boundary;
            let o = e.headers.get("Content-Type") ?? "multipart/mixed";
            let i = o.match(/^(multipart\/[^ ;]+)(?:; *boundary=(.+))?$/);
            if (!i) {
                throw Error(`Got multipart request body, but content-type header was not multipart: ${o}`);
            }
            let [, s, a] = i;
            if (a && boundary && a !== boundary) {
                throw Error(`Multipart boundary was specified as ${a} in the header, but got ${boundary} in the request body`);
            }
            if (!(boundary !== null && boundary !== undefined)) {
                boundary = a;
            }
            if (boundary) {
                tp(boundary);
            } else {
                boundary = Ym();
            }
            e.headers.set("Content-Type", `${s}; boundary=${boundary}`);
            await Xm(e, e.multipartBody.parts, boundary);
            e.multipartBody = undefined;
            return t(e);
        }
    };
}
const Hl = Se(Iut(), 1);
const Fl = Se(Ml(), 1);
const lp = "HTTPS_PROXY";
const dp = "HTTP_PROXY";
const up = "ALL_PROXY";
const hp = "NO_PROXY";
const da = "proxyPolicy";
const Dl = [];
let $l = false;
const fp = new Map;
function Ko(e) {
    if (process.env[e]) {
        return process.env[e];
    } else if (process.env[e.toLowerCase()]) {
        return process.env[e.toLowerCase()];
    }
}
function mp() {
    if (!process) {
        return;
    }
    let e = Ko(lp);
    let t = Ko(up);
    let r = Ko(dp);
    return e || t || r;
}
function pp(url, t, r) {
    if (t.length === 0) {
        return false;
    }
    let hostname = new URL(url).hostname;
    if (r?.has(hostname)) {
        return r.get(hostname);
    }
    let o = false;
    for (let i of t){
        if (i[0] === ".") {
            if (hostname.endsWith(i)) {
                o = true;
            } else if (hostname.length === i.length - 1 && hostname === i.slice(1)) {
                o = true;
            }
        } else if (hostname === i) {
            o = true;
        }
    }
    r?.set(hostname, o);
    return o;
}
function gp() {
    let e = Ko(hp);
    $l = true;
    if (e) {
        return e.split(",").map((t)=>t.trim()).filter((t)=>t.length);
    }
    return [];
}
function yp() {
    let e = mp();
    if (e) {
        return new URL(e);
    }
}
function Ul(e) {
    let t;
    try {
        t = new URL(e.host);
    } catch (r) {
        throw Error(`Expecting a valid host string in proxy settings, but found "${e.host}".`);
    }
    t.port = String(e.port);
    if (e.username) {
        t.username = e.username;
    }
    if (e.password) {
        t.password = e.password;
    }
    return t;
}
function Ll(e, t, r) {
    if (e.agent) {
        return;
    }
    let o = new URL(e.url).protocol !== "https:";
    if (e.tlsSettings) {
        Ve.warning("TLS settings are not supported in combination with custom Proxy, certificates provided to the client will be ignored.");
    }
    let i = e.headers.toJSON();
    if (o) {
        if (!t.httpProxyAgent) {
            t.httpProxyAgent = new Fl.HttpProxyAgent(r, {
                headers: i
            });
        }
        e.agent = t.httpProxyAgent;
    } else {
        if (!t.httpsProxyAgent) {
            t.httpsProxyAgent = new Hl.HttpsProxyAgent(r, {
                headers: i
            });
        }
        e.agent = t.httpsProxyAgent;
    }
}
function ua(proxyOptions, t) {
    if (!$l) {
        Dl.push(...gp());
    }
    let r = proxyOptions ? Ul(proxyOptions) : yp();
    let n = {};
    return {
        name: da,
        async sendRequest (o, i) {
            if (!o.proxySettings && r && !pp(o.url, t?.customNoProxyList ?? Dl, t?.customNoProxyList ? undefined : fp)) {
                Ll(o, n, r);
            } else if (o.proxySettings) {
                Ll(o, n, Ul(o.proxySettings));
            }
            return i(o);
        }
    };
}
const Bl = [
    "GET",
    "HEAD"
];
function ha({ maxRetries = 20 } = {}) {
    return {
        name: "redirectPolicy",
        async sendRequest (r, n) {
            let o = await n(r);
            return zl(n, o, maxRetries);
        }
    };
}
async function zl(e, t, r, n = 0) {
    let { request, status, headers } = t;
    let a = headers.get("location");
    if (a && (status === 300 || status === 301 && Bl.includes(request.method) || status === 302 && Bl.includes(request.method) || status === 303 && request.method === "POST" || status === 307) && n < r) {
        let c = new URL(a, request.url);
        request.url = c.toString();
        if (status === 303) {
            request.method = "GET";
            request.headers.delete("Content-Length");
            delete request.body;
        }
        request.headers.delete("Authorization");
        let l = await e(request);
        return zl(e, l, r, n + 1);
    }
    return t;
}
function fa(tlsOptions) {
    return {
        name: "tlsPolicy",
        sendRequest: async (t, r)=>{
            if (!t.tlsSettings) {
                t.tlsSettings = tlsOptions;
            }
            return r(t);
        }
    };
}
function Gl(e = {}) {
    return sa({
        logger: ut.info,
        ...e
    });
}
function ql(e = {}) {
    return ha(e);
}
function Kl() {
    return "User-Agent";
}
async function Vl(e) {
    if (Qc && Qc.versions) {
        let t = Qc.versions;
        if (t.bun) {
            e.set("Bun", t.bun);
        } else if (t.deno) {
            e.set("Deno", t.deno);
        } else if (t.node) {
            e.set("Node", t.node);
        }
    }
    e.set("OS", `(${Kr.arch()}-${Kr.type()}-${Kr.release()})`);
}
const jo = "1.21.0";
const maxRetries = 3;
function _p(e) {
    let t = [];
    for (let [r, n] of e){
        let o = n ? `${r}/${n}` : r;
        t.push(o);
    }
    return t.join(" ");
}
function Yl() {
    return Kl();
}
async function Yo(userAgentPrefix) {
    let t = new Map;
    t.set("core-rest-pipeline", jo);
    await Vl(t);
    let r = _p(t);
    if (userAgentPrefix) {
        return `${userAgentPrefix} ${r}`;
    }
    return r;
}
const Wl = Yl();
const Sp = "userAgentPolicy";
function Ql(e = {}) {
    let t = Yo(e.userAgentPrefix);
    return {
        name: Sp,
        async sendRequest (r, n) {
            if (!r.headers.has(Wl)) {
                r.headers.set(Wl, await t);
            }
            return n(r);
        }
    };
}
class Vr extends Error {
    constructor(e){
        super(e);
        this.name = "AbortError";
    }
}
function Jl(e, t) {
    let { cleanupBeforeAbort, abortSignal, abortErrorMsg } = t ?? {};
    return new Promise((resolve, reject)=>{
        function a() {
            reject(new Vr(abortErrorMsg ?? "The operation was aborted."));
        }
        function c() {
            abortSignal?.removeEventListener("abort", l);
        }
        function l() {
            cleanupBeforeAbort?.();
            c();
            a();
        }
        if (abortSignal?.aborted) {
            return a();
        }
        try {
            e((d)=>{
                c();
                resolve(d);
            }, (d)=>{
                c();
                reject(d);
            });
        } catch (error) {
            reject(error);
        }
        abortSignal?.addEventListener("abort", l);
    });
}
const vp = "The delay was aborted.";
function ma(retryIntervalInMs, t) {
    let r;
    let { abortSignal, abortErrorMsg } = t ?? {};
    return Jl((i)=>{
        r = setTimeout(i, retryIntervalInMs);
    }, {
        cleanupBeforeAbort: ()=>clearTimeout(r),
        abortSignal,
        abortErrorMsg: abortErrorMsg ?? vp
    });
}
function jr(error) {
    if (tr(error)) {
        return error.message;
    } else {
        let t;
        try {
            if (typeof error === "object" && error) {
                t = JSON.stringify(error);
            } else {
                t = String(error);
            }
        } catch (r) {
            t = "[unable to stringify input]";
        }
        return `Unknown error ${t}`;
    }
}
function Xl(retryCount, t) {
    return Kn(retryCount, t);
}
function Wo(e) {
    return tr(e);
}
const Qo = Gr;
const Yn = Gr;
const Zl = Symbol("rawContent");
function pa(body) {
    return typeof body[Zl] === "function";
}
function ed(body) {
    if (pa(body)) {
        return body[Zl]();
    } else {
        return body;
    }
}
const ga = Go;
function td() {
    let e = ca();
    return {
        name: ga,
        sendRequest: async (t, r)=>{
            if (t.multipartBody) {
                for (let n of t.multipartBody.parts){
                    if (pa(n.body)) {
                        n.body = ed(n.body);
                    }
                }
            }
            return e.sendRequest(t, r);
        }
    };
}
function rd() {
    return Ys();
}
function nd(e = {}) {
    return Xs(e);
}
function od() {
    return oa();
}
function id(proxyOptions, t) {
    return ua(proxyOptions, t);
}
function sd(e = "x-ms-client-request-id") {
    return {
        name: "setClientRequestIdPolicy",
        async sendRequest (t, r) {
            if (!t.headers.has(e)) {
                t.headers.set(e, t.requestId);
            }
            return r(t);
        }
    };
}
function ad(agent) {
    return js(agent);
}
function cd(tlsOptions) {
    return fa(tlsOptions);
}
const Yr = {
    span: Symbol.for("@azure/core-tracing span"),
    namespace: Symbol.for("@azure/core-tracing namespace")
};
function ld(e = {}) {
    let t = new Wn(e.parentContext);
    if (e.span) {
        t = t.setValue(Yr.span, e.span);
    }
    if (e.namespace) {
        t = t.setValue(Yr.namespace, e.namespace);
    }
    return t;
}
class Wn {
    constructor(e){
        this._contextMap = e instanceof Wn ? new Map(e._contextMap) : new Map;
    }
    setValue(e, t) {
        let r = new Wn(this);
        r._contextMap.set(e, t);
        return r;
    }
    getValue(e) {
        return this._contextMap.get(e);
    }
    deleteValue(e) {
        let t = new Wn(this);
        t._contextMap.delete(e);
        return t;
    }
}
const fd = Se(hd(), 1);
const fd_state = fd.state;
function kp() {
    return {
        end: ()=>{},
        isRecording: ()=>false,
        recordException: ()=>{},
        setAttribute: ()=>{},
        setStatus: ()=>{},
        addEvent: ()=>{}
    };
}
function bp() {
    return {
        createRequestHeaders: ()=>({}),
        parseTraceparentHeader: ()=>{},
        startSpan: (e, t)=>({
                span: kp(),
                tracingContext: ld({
                    parentContext: t.tracingContext
                })
            }),
        withContext (e, t, ...r) {
            return t(...r);
        }
    };
}
function Qn() {
    if (!fd_state.instrumenterImplementation) {
        fd_state.instrumenterImplementation = bp();
    }
    return fd_state.instrumenterImplementation;
}
function Jn({ namespace, packageName, packageVersion }) {
    function startSpan(l, d, u) {
        let p = Qn().startSpan(l, {
            ...u,
            packageName,
            packageVersion,
            tracingContext: d?.tracingOptions?.tracingContext
        });
        let { tracingContext, span } = p;
        if (!tracingContext.getValue(Yr.namespace)) {
            tracingContext = tracingContext.setValue(Yr.namespace, namespace);
        }
        span.setAttribute("az.namespace", tracingContext.getValue(Yr.namespace));
        let updatedOptions = {
            ...d,
            tracingOptions: {
                ...d?.tracingOptions,
                tracingContext
            }
        };
        return {
            span,
            updatedOptions
        };
    }
    async function withSpan(l, d, u, m) {
        let { span, updatedOptions } = startSpan(l, d, m);
        try {
            let T = await withContext(updatedOptions.tracingOptions.tracingContext, ()=>Promise.resolve(u(updatedOptions, span)));
            span.setStatus({
                status: "success"
            });
            return T;
        } catch (error) {
            span.setStatus({
                status: "error",
                error
            });
            throw error;
        } finally{
            span.end();
        }
    }
    function withContext(l, d, ...u) {
        return Qn().withContext(l, d, ...u);
    }
    function parseTraceparentHeader(l) {
        return Qn().parseTraceparentHeader(l);
    }
    function createRequestHeaders(l) {
        return Qn().createRequestHeaders(l);
    }
    return {
        startSpan,
        withSpan,
        withContext,
        parseTraceparentHeader,
        createRequestHeaders
    };
}
const Wr = ke;
function Xn(e) {
    return qs(e);
}
const Pp = "tracingPolicy";
function md(e = {}) {
    let t = Yo(e.userAgentPrefix);
    let r = new tt({
        additionalAllowedQueryParameters: e.additionalAllowedQueryParameters
    });
    let n = Op();
    return {
        name: Pp,
        async sendRequest (o, i) {
            if (!n) {
                return i(o);
            }
            let a = await t;
            let c = {
                "http.url": r.sanitizeUrl(o.url),
                "http.method": o.method,
                "http.user_agent": a,
                requestId: o.requestId
            };
            if (a) {
                c["http.user_agent"] = a;
            }
            let { span, tracingContext } = Np(n, o, c) ?? {};
            if (!span || !tracingContext) {
                return i(o);
            }
            try {
                let u = await n.withContext(tracingContext, i, o);
                Mp(span, u);
                return u;
            } catch (error) {
                xp(span, error);
                throw error;
            }
        }
    };
}
function Op() {
    try {
        return Jn({
            namespace: "",
            packageName: "@azure/core-rest-pipeline",
            packageVersion: jo
        });
    } catch (error) {
        ut.warning(`Error when creating the TracingClient: ${jr(error)}`);
        return;
    }
}
function Np(e, t, spanAttributes) {
    try {
        let { span, updatedOptions } = e.startSpan(`HTTP ${t.method}`, {
            tracingOptions: t.tracingOptions
        }, {
            spanKind: "client",
            spanAttributes
        });
        if (!span.isRecording()) {
            span.end();
            return;
        }
        let i = e.createRequestHeaders(updatedOptions.tracingOptions.tracingContext);
        for (let [s, a] of Object.entries(i)){
            t.headers.set(s, a);
        }
        return {
            span,
            tracingContext: updatedOptions.tracingOptions.tracingContext
        };
    } catch (error) {
        ut.warning(`Skipping creating a tracing span due to an error: ${jr(error)}`);
        return;
    }
}
function xp(span, t) {
    try {
        span.setStatus({
            status: "error",
            error: Wo(t) ? t : undefined
        });
        if (Xn(t) && t.statusCode) {
            span.setAttribute("http.status_code", t.statusCode);
        }
        span.end();
    } catch (error) {
        ut.warning(`Skipping tracing span processing due to an error: ${jr(error)}`);
    }
}
function Mp(span, t) {
    try {
        span.setAttribute("http.status_code", t.status);
        let r = t.headers.get("x-ms-request-id");
        if (r) {
            span.setAttribute("serviceRequestId", r);
        }
        if (t.status >= 400) {
            span.setStatus({
                status: "error"
            });
        }
        span.end();
    } catch (error) {
        ut.warning(`Skipping tracing span processing due to an error: ${jr(error)}`);
    }
}
function Xo(abortSignal) {
    if (abortSignal instanceof AbortSignal) {
        return {
            abortSignal
        };
    }
    if (abortSignal.aborted) {
        return {
            abortSignal: AbortSignal.abort(abortSignal.reason)
        };
    }
    let t = new AbortController;
    let r = true;
    function cleanup() {
        if (r) {
            abortSignal.removeEventListener("abort", o);
            r = false;
        }
    }
    function o() {
        t.abort(abortSignal.reason);
        cleanup();
    }
    abortSignal.addEventListener("abort", o);
    return {
        abortSignal: t.signal,
        cleanup
    };
}
const Dp = "wrapAbortSignalLikePolicy";
function pd() {
    return {
        name: Dp,
        sendRequest: async (e, t)=>{
            if (!e.abortSignal) {
                return t(e);
            }
            let { abortSignal, cleanup } = Xo(e.abortSignal);
            e.abortSignal = abortSignal;
            try {
                return await t(e);
            } finally{
                cleanup?.();
            }
        }
    };
}
function ya(e) {
    let r = qn();
    if (Yn) {
        if (e.agent) {
            r.addPolicy(ad(e.agent));
        }
        if (e.tlsOptions) {
            r.addPolicy(cd(e.tlsOptions));
        }
        r.addPolicy(id(e.proxyOptions));
        r.addPolicy(rd());
    }
    r.addPolicy(pd());
    r.addPolicy(od(), {
        beforePolicies: [
            ga
        ]
    });
    r.addPolicy(Ql(e.userAgentOptions));
    r.addPolicy(sd(e.telemetryOptions?.clientRequestIdHeaderName));
    r.addPolicy(td(), {
        afterPhase: "Deserialize"
    });
    r.addPolicy(nd(e.retryOptions), {
        phase: "Retry"
    });
    r.addPolicy(md({
        ...e.userAgentOptions,
        ...e.loggingOptions
    }), {
        afterPhase: "Retry"
    });
    if (Yn) {
        r.addPolicy(ql(e.redirectOptions), {
            afterPhase: "Retry"
        });
    }
    r.addPolicy(Gl(e.loggingOptions), {
        afterPhase: "Sign"
    });
    return r;
}
function Ta() {
    let e = Vs();
    return {
        async sendRequest (t) {
            let { abortSignal, cleanup } = t.abortSignal ? Xo(t.abortSignal) : {};
            try {
                t.abortSignal = abortSignal;
                return await e.sendRequest(t);
            } finally{
                cleanup?.();
            }
        }
    };
}
function rr(e) {
    return et(e);
}
function je(e) {
    return Bs(e);
}
const logger = Pt("core-rest-pipeline retryPolicy");
function Ea(e, t = {
    maxRetries
}) {
    return jn(e, {
        logger,
        ...t
    });
}
const Lp = {
    forcedRefreshWindowInMs: 1000,
    retryIntervalInMs: 3000,
    refreshWindowInMs: 120000
};
async function Hp(e, retryIntervalInMs, r) {
    async function n() {
        if (Date.now() < r) {
            try {
                return await e();
            } catch (i) {
                return null;
            }
        } else {
            let i = await e();
            if (i === null) {
                throw Error("Failed to refresh access token.");
            }
            return i;
        }
    }
    let o = await n();
    while(o === null){
        await ma(retryIntervalInMs);
        o = await n();
    }
    return o;
}
function gd(credential, t) {
    let r = null;
    let n = null;
    let o;
    let i = {
        ...Lp,
        ...t
    };
    let s = {
        get isRefreshing () {
            return r !== null;
        },
        get shouldRefresh () {
            if (s.isRefreshing) {
                return false;
            }
            if (n?.refreshAfterTimestamp && n.refreshAfterTimestamp < Date.now()) {
                return true;
            }
            return (n?.expiresOnTimestamp ?? 0) - i.refreshWindowInMs < Date.now();
        },
        get mustRefresh () {
            return n === null || n.expiresOnTimestamp - i.forcedRefreshWindowInMs < Date.now();
        }
    };
    function a(c, l) {
        if (!s.isRefreshing) {
            r = Hp(()=>credential.getToken(c, l), i.retryIntervalInMs, n?.expiresOnTimestamp ?? Date.now()).then((m)=>{
                r = null;
                n = m;
                o = l.tenantId;
                return n;
            }).catch((m)=>{
                r = null;
                n = null;
                o = undefined;
                throw m;
            });
        }
        return r;
    }
    return async (c, l)=>{
        let d = Boolean(l.claims);
        let u = o !== l.tenantId;
        if (d) {
            n = null;
        }
        if (u || d || s.mustRefresh) {
            return a(c, l);
        }
        if (s.shouldRefresh) {
            a(c, l);
        }
        return n;
    };
}
const Cd = "bearerTokenAuthenticationPolicy";
async function Zo(e, t) {
    try {
        return [
            await t(e),
            undefined
        ];
    } catch (error) {
        if (Xn(error) && error.response) {
            return [
                error.response,
                error
            ];
        } else {
            throw error;
        }
    }
}
async function Fp(e) {
    let { scopes, getAccessToken, request } = e;
    let o = {
        abortSignal: request.abortSignal,
        tracingOptions: request.tracingOptions,
        enableCae: true
    };
    let i = await getAccessToken(scopes, o);
    if (i) {
        e.request.headers.set("Authorization", `Bearer ${i.token}`);
    }
}
function yd(e) {
    return e.status === 401 && e.headers.has("WWW-Authenticate");
}
async function Td(e, claims) {
    let { scopes } = e;
    let o = await e.getAccessToken(scopes, {
        enableCae: true,
        claims
    });
    if (!o) {
        return false;
    }
    e.request.headers.set("Authorization", `${o.tokenType ?? "Bearer"} ${o.token}`);
    return true;
}
function Zn(e) {
    let { credential, scopes, challengeCallbacks } = e;
    let a = e.logger || ut;
    let c = {
        authorizeRequest: challengeCallbacks?.authorizeRequest?.bind(challengeCallbacks) ?? Fp,
        authorizeRequestOnChallenge: challengeCallbacks?.authorizeRequestOnChallenge?.bind(challengeCallbacks)
    };
    let getAccessToken = credential ? gd(credential) : ()=>Promise.resolve(null);
    return {
        name: Cd,
        async sendRequest (d, u) {
            if (!d.url.toLowerCase().startsWith("https://")) {
                throw Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");
            }
            await c.authorizeRequest({
                scopes: Array.isArray(scopes) ? scopes : [
                    scopes
                ],
                request: d,
                getAccessToken,
                logger: a
            });
            let m;
            let p;
            let y;
            [m, p] = await Zo(d, u);
            if (yd(m)) {
                let T = Ed(m.headers.get("WWW-Authenticate"));
                if (T) {
                    let _;
                    try {
                        _ = atob(T);
                    } catch (k) {
                        a.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${T}`);
                        return m;
                    }
                    y = await Td({
                        scopes: Array.isArray(scopes) ? scopes : [
                            scopes
                        ],
                        response: m,
                        request: d,
                        getAccessToken,
                        logger: a
                    }, _);
                    if (y) {
                        [m, p] = await Zo(d, u);
                    }
                } else if (c.authorizeRequestOnChallenge) {
                    y = await c.authorizeRequestOnChallenge({
                        scopes: Array.isArray(scopes) ? scopes : [
                            scopes
                        ],
                        request: d,
                        response: m,
                        getAccessToken,
                        logger: a
                    });
                    if (y) {
                        [m, p] = await Zo(d, u);
                    }
                    if (yd(m)) {
                        T = Ed(m.headers.get("WWW-Authenticate"));
                        if (T) {
                            let _;
                            try {
                                _ = atob(T);
                            } catch (k) {
                                a.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${T}`);
                                return m;
                            }
                            y = await Td({
                                scopes: Array.isArray(scopes) ? scopes : [
                                    scopes
                                ],
                                response: m,
                                request: d,
                                getAccessToken,
                                logger: a
                            }, _);
                            if (y) {
                                [m, p] = await Zo(d, u);
                            }
                        }
                    }
                }
            }
            if (p) {
                throw p;
            } else {
                return m;
            }
        }
    };
}
function $p(e) {
    let t = /(\w+)\s+((?:\w+=(?:"[^"]*"|[^,]*),?\s*)+)/g;
    let r = /(\w+)="([^"]*)"/g;
    let n = [];
    let o;
    while((o = t.exec(e)) !== null){
        let scheme = o[1];
        let s = o[2];
        let params = {};
        let c;
        while((c = r.exec(s)) !== null){
            params[c[1]] = c[2];
        }
        n.push({
            scheme,
            params
        });
    }
    return n;
}
function Ed(e) {
    if (!e) {
        return;
    }
    return $p(e).find((n)=>n.scheme === "Bearer" && n.params.claims && n.params.error === "insufficient_claims")?.params.claims;
}
const Ca = "$";
const ei = "_";
function Bp(parsedBody, t) {
    return t !== "Composite" && t !== "Dictionary" && (typeof parsedBody === "string" || typeof parsedBody === "number" || typeof parsedBody === "boolean" || t?.match(/^(Date|DateTime|DateTimeRfc1123|UnixTime|ByteArray|Base64Url)$/i) !== null || parsedBody === undefined || parsedBody === null);
}
function zp(e) {
    let t = {
        ...e.headers,
        ...e.body
    };
    if (e.hasNullableType && Object.getOwnPropertyNames(t).length === 0) {
        if (e.shouldWrapBody) {
            return {
                body: null
            };
        }
        return null;
    } else {
        if (e.shouldWrapBody) {
            return {
                ...e.headers,
                body: e.body
            };
        }
        return t;
    }
}
function Aa(e, t) {
    let e_parsedHeaders = e.parsedHeaders;
    if (e.request.method === "HEAD") {
        return {
            ...e_parsedHeaders,
            body: e.parsedBody
        };
    }
    let i = t && t.bodyMapper;
    let hasNullableType = Boolean(i?.nullable);
    let a = i?.type.name;
    if (a === "Stream") {
        return {
            ...e_parsedHeaders,
            blobBody: e.blobBody,
            readableStreamBody: e.readableStreamBody
        };
    }
    let c = a === "Composite" && i.type.modelProperties || {};
    let l = Object.keys(c).some((d)=>c[d].serializedName === "");
    if (a === "Sequence" || l) {
        let d = e.parsedBody ?? [];
        for (let u of Object.keys(c)){
            if (c[u].serializedName) {
                d[u] = e.parsedBody?.[u];
            }
        }
        if (e_parsedHeaders) {
            for (let u of Object.keys(e_parsedHeaders)){
                d[u] = e_parsedHeaders[u];
            }
        }
        if (hasNullableType && !e.parsedBody && !e_parsedHeaders && Object.getOwnPropertyNames(c).length === 0) {
            return null;
        }
        return d;
    }
    return zp({
        body: e.parsedBody,
        headers: e_parsedHeaders,
        hasNullableType,
        shouldWrapBody: Bp(e.parsedBody, a)
    });
}
const ht = {
    Base64Url: "Base64Url",
    Boolean: "Boolean",
    ByteArray: "ByteArray",
    Composite: "Composite",
    Date: "Date",
    DateTime: "DateTime",
    DateTimeRfc1123: "DateTimeRfc1123",
    Dictionary: "Dictionary",
    Enum: "Enum",
    Number: "Number",
    Object: "Object",
    Sequence: "Sequence",
    String: "String",
    Stream: "Stream",
    TimeSpan: "TimeSpan",
    UnixTime: "UnixTime"
};
const Sd = Se(_d(), 1);
const Sd_state = Sd.state;
function Nt(e, { parameterPath, mapper }, r) {
    let i;
    if (typeof parameterPath === "string") {
        parameterPath = [
            parameterPath
        ];
    }
    if (Array.isArray(parameterPath)) {
        if (parameterPath.length > 0) {
            if (mapper.isConstant) {
                i = mapper.defaultValue;
            } else {
                let s = Rd(e, parameterPath);
                if (!s.propertyFound && r) {
                    s = Rd(r, parameterPath);
                }
                let a = false;
                if (!s.propertyFound) {
                    a = mapper.required || parameterPath[0] === "options" && parameterPath.length === 2;
                }
                i = a ? mapper.defaultValue : s.propertyValue;
            }
        }
    } else {
        if (mapper.required) {
            i = {};
        }
        for(let s in parameterPath){
            let mapper_1 = mapper.type.modelProperties[s];
            let parameterPath_1 = parameterPath[s];
            let l = Nt(e, {
                parameterPath: parameterPath_1,
                mapper: mapper_1
            }, r);
            if (l !== undefined) {
                if (!i) {
                    i = {};
                }
                i[s] = l;
            }
        }
    }
    return i;
}
function Rd(e, parameterPath) {
    let r = {
        propertyFound: false
    };
    let n = 0;
    for(; n < parameterPath.length; ++n){
        let o = parameterPath[n];
        if (e && o in e) {
            e = e[o];
        } else {
            break;
        }
    }
    if (n === parameterPath.length) {
        r.propertyValue = e;
        r.propertyFound = true;
    }
    return r;
}
const SYMBOL_AZURECORE_CLIENT_ORIGINAL_REQUEST = Symbol.for("@azure/core-client original request");
function Gp(e) {
    return SYMBOL_AZURECORE_CLIENT_ORIGINAL_REQUEST in e;
}
function ft(e) {
    if (Gp(e)) {
        return ft(e[SYMBOL_AZURECORE_CLIENT_ORIGINAL_REQUEST]);
    }
    let t = Sd_state.operationRequestMap.get(e);
    if (!t) {
        t = {};
        Sd_state.operationRequestMap.set(e, t);
    }
    return t;
}
const qp = [
    "application/json",
    "text/json"
];
const Kp = [
    "application/xml",
    "application/atom+xml"
];
const Vp = "deserializationPolicy";
function vd(e = {}) {
    let c = e.expectedContentTypes?.json ?? qp;
    let l = e.expectedContentTypes?.xml ?? Kp;
    let { parseXML, serializerOptions } = e;
    let m = {
        xml: {
            rootName: serializerOptions?.xml.rootName ?? "",
            includeRoot: serializerOptions?.xml.includeRoot ?? false,
            xmlCharKey: serializerOptions?.xml.xmlCharKey ?? ei
        }
    };
    return {
        name: Vp,
        async sendRequest (p, y) {
            let T = await y(p);
            return Wp(c, l, T, m, parseXML);
        }
    };
}
function jp(e) {
    let t;
    let e_request = e.request;
    let n = ft(e_request);
    let o = n?.operationSpec;
    if (o) {
        if (!n?.operationResponseGetter) {
            t = o.responses[e.status];
        } else {
            t = n?.operationResponseGetter(o, e);
        }
    }
    return t;
}
function Yp(e) {
    let e_request = e.request;
    let r = ft(e_request);
    let n = r?.shouldDeserialize;
    let o;
    if (n === undefined) {
        o = true;
    } else if (typeof n === "boolean") {
        o = n;
    } else {
        o = n(e);
    }
    return o;
}
async function Wp(e, t, r, n, parseXML) {
    let i = await Xp(e, t, r, n, parseXML);
    if (!Yp(i)) {
        return i;
    }
    let s = ft(i.request);
    let a = s?.operationSpec;
    if (!a || !a.responses) {
        return i;
    }
    let c = jp(i);
    let { error, shouldReturnResponse } = Jp(i, a, c, n);
    if (error) {
        throw error;
    } else if (shouldReturnResponse) {
        return i;
    }
    if (c) {
        if (c.bodyMapper) {
            let u = i.parsedBody;
            if (a.isXML && c.bodyMapper.type.name === ht.Sequence) {
                u = typeof u === "object" ? u[c.bodyMapper.xmlElementName] : [];
            }
            try {
                i.parsedBody = a.serializer.deserialize(c.bodyMapper, u, "operationRes.parsedBody", n);
            } catch (err) {
                throw new Wr(`Error ${err} occurred in deserializing the responseBody - ${i.bodyAsText}`, {
                    statusCode: i.status,
                    request: i.request,
                    response: i
                });
            }
        } else if (a.httpMethod === "HEAD") {
            i.parsedBody = r.status >= 200 && r.status < 300;
        }
        if (c.headersMapper) {
            i.parsedHeaders = a.serializer.deserialize(c.headersMapper, i.headers.toJSON(), "operationRes.parsedHeaders", {
                xml: {},
                ignoreUnknownProperties: true
            });
        }
    }
    return i;
}
function Qp(e) {
    let t = Object.keys(e.responses);
    return t.length === 0 || t.length === 1 && t[0] === "default";
}
function Jp(e, t, r, n) {
    let l = e.status >= 200 && e.status < 300;
    if (Qp(t) ? l : !!r) {
        if (r) {
            if (!r.isError) {
                return {
                    error: null,
                    shouldReturnResponse: false
                };
            }
        } else {
            return {
                error: null,
                shouldReturnResponse: false
            };
        }
    }
    let u = r ?? t.responses.default;
    let m = e.request.streamResponseStatusCodes?.has(e.status) ? `Unexpected status code: ${e.status}` : e.bodyAsText;
    let p = new Wr(m, {
        statusCode: e.status,
        request: e.request,
        response: e
    });
    if (!u && !(e.parsedBody?.error?.code && e.parsedBody?.error?.message)) {
        throw p;
    }
    let y = u?.bodyMapper;
    let T = u?.headersMapper;
    try {
        if (e.parsedBody) {
            let _ = e.parsedBody;
            let k;
            if (y) {
                let B = _;
                if (t.isXML && y.type.name === ht.Sequence) {
                    B = [];
                    let X = y.xmlElementName;
                    if (typeof _ === "object" && X) {
                        B = _[X];
                    }
                }
                k = t.serializer.deserialize(y, B, "error.response.parsedBody", n);
            }
            let U = _.error || k || _;
            p.code = U.code;
            if (U.message) {
                p.message = U.message;
            }
            if (y) {
                p.response.parsedBody = k;
            }
        }
        if (e.headers && T) {
            p.response.parsedHeaders = t.serializer.deserialize(T, e.headers.toJSON(), "operationRes.parsedHeaders");
        }
    } catch (error) {
        p.message = `Error "${error.message}" occurred in deserializing the responseBody - "${e.bodyAsText}" for the default response.`;
    }
    return {
        error: p,
        shouldReturnResponse: false
    };
}
async function Xp(e, t, r, n, parseXML) {
    if (!r.request.streamResponseStatusCodes?.has(r.status) && r.bodyAsText) {
        let s = r.bodyAsText;
        let a = r.headers.get("Content-Type") || "";
        let c = !a ? [] : a.split(";").map((l)=>l.toLowerCase());
        try {
            if (c.length === 0 || c.some((l)=>e.indexOf(l) !== -1)) {
                r.parsedBody = JSON.parse(s);
                return r;
            } else if (c.some((l)=>t.indexOf(l) !== -1)) {
                if (!parseXML) {
                    throw Error("Parsing XML not supported.");
                }
                let l = await parseXML(s, n.xml);
                r.parsedBody = l;
                return r;
            }
        } catch (error) {
            let d = `Error "${error}" occurred while parsing the response body - ${r.bodyAsText}.`;
            let u = error.code || Wr.PARSE_ERROR;
            throw new Wr(d, {
                code: u,
                statusCode: r.status,
                request: r.request,
                response: r
            });
        }
    }
    return r;
}
function kd(e) {
    let t = new Set;
    for(let r in e.responses){
        let n = e.responses[r];
        if (n.bodyMapper && n.bodyMapper.type.name === ht.Stream) {
            t.add(Number(r));
        }
    }
    return t;
}
function nt({ parameterPath, mapper }) {
    let n;
    if (typeof parameterPath === "string") {
        n = parameterPath;
    } else if (Array.isArray(parameterPath)) {
        n = parameterPath.join(".");
    } else {
        n = mapper.serializedName;
    }
    return n;
}
const Zp = "serializationPolicy";
function bd({ stringifyXML } = {}) {
    return {
        name: Zp,
        async sendRequest (r, n) {
            let o = ft(r);
            let i = o?.operationSpec;
            let s = o?.operationArguments;
            if (i && s) {
                eg(r, s, i);
                tg(r, s, i, stringifyXML);
            }
            return n(r);
        }
    };
}
function eg(e, t, r) {
    if (r.headerParameters) {
        for (let s of r.headerParameters){
            let a = Nt(t, s);
            if (a !== null && a !== undefined || s.mapper.required) {
                a = r.serializer.serialize(s.mapper, a, nt(s));
                let c = s.mapper.headerCollectionPrefix;
                if (c) {
                    for (let l of Object.keys(a)){
                        e.headers.set(c + l, a[l]);
                    }
                } else {
                    e.headers.set(s.mapper.serializedName || nt(s), a);
                }
            }
        }
    }
    let i = t.options?.requestOptions?.customHeaders;
    if (i) {
        for (let s of Object.keys(i)){
            e.headers.set(s, i[s]);
        }
    }
}
function tg(e, t, r, n = function() {
    throw Error("XML serialization unsupported!");
}) {
    let l = t.options?.serializerOptions;
    let d = {
        xml: {
            rootName: l?.xml.rootName ?? "",
            includeRoot: l?.xml.includeRoot ?? false,
            xmlCharKey: l?.xml.xmlCharKey ?? ei
        }
    };
    let xmlCharKey = d.xml.xmlCharKey;
    if (r.requestBody && r.requestBody.mapper) {
        e.body = Nt(t, r.requestBody);
        let m = r.requestBody.mapper;
        let { required, serializedName, xmlName, xmlElementName, xmlNamespace, xmlNamespacePrefix, nullable } = m;
        let X = m.type.name;
        try {
            if (e.body !== undefined && e.body !== null || nullable && e.body === null || required) {
                let I = nt(r.requestBody);
                e.body = r.serializer.serialize(m, e.body, I, d);
                let A = X === ht.Stream;
                if (r.isXML) {
                    let E = xmlNamespacePrefix ? `xmlns:${xmlNamespacePrefix}` : "xmlns";
                    let S = rg(xmlNamespace, E, X, e.body, d);
                    if (X === ht.Sequence) {
                        e.body = n(ng(S, xmlElementName || xmlName || serializedName, E, xmlNamespace), {
                            rootName: xmlName || serializedName,
                            xmlCharKey
                        });
                    } else if (!A) {
                        e.body = n(S, {
                            rootName: xmlName || serializedName,
                            xmlCharKey
                        });
                    }
                } else if (X === ht.String && (r.contentType?.match("text/plain") || r.mediaType === "text")) {
                    return;
                } else if (!A) {
                    e.body = JSON.stringify(e.body);
                }
            }
        } catch (error) {
            throw Error(`Error "${error.message}" occurred in serializing the payload - ${JSON.stringify(serializedName, undefined, "  ")}.`);
        }
    } else if (r.formDataParameters && r.formDataParameters.length > 0) {
        e.formData = {};
        for (let m of r.formDataParameters){
            let p = Nt(t, m);
            if (p !== undefined && p !== null) {
                let y = m.mapper.serializedName || nt(m);
                e.formData[y] = r.serializer.serialize(m.mapper, p, nt(m), d);
            }
        }
    }
}
function rg(xmlNamespace, t, r, body, o) {
    if (xmlNamespace && ![
        "Composite",
        "Sequence",
        "Dictionary"
    ].includes(r)) {
        let i = {};
        i[o.xml.xmlCharKey] = body;
        i[Ca] = {
            [t]: xmlNamespace
        };
        return i;
    }
    return body;
}
function ng(e, t, r, xmlNamespace) {
    if (!Array.isArray(e)) {
        e = [
            e
        ];
    }
    if (!r || !xmlNamespace) {
        return {
            [t]: e
        };
    }
    let o = {
        [t]: e
    };
    o[Ca] = {
        [r]: xmlNamespace
    };
    return o;
}
function Pd(e = {}) {
    let t = ya(e ?? {});
    if (e.credentialOptions) {
        t.addPolicy(Zn({
            credential: e.credentialOptions.credential,
            scopes: e.credentialOptions.credentialScopes
        }));
    }
    t.addPolicy(bd(e.serializationOptions), {
        phase: "Serialize"
    });
    t.addPolicy(vd(e.deserializationOptions), {
        phase: "Deserialize"
    });
    return t;
}
let _a;
function Od() {
    if (!_a) {
        _a = Ta();
    }
    return _a;
}
const og = {
    CSV: ",",
    SSV: " ",
    Multi: "Multi",
    TSV: "\t",
    Pipes: "|"
};
function xd(e, t, r, n) {
    let o = ig(t, r, n);
    let i = false;
    let s = Nd(e, o);
    if (t.path) {
        let l = Nd(t.path, o);
        if (t.path === "/{nextLink}" && l.startsWith("/")) {
            l = l.substring(1);
        }
        if (sg(l)) {
            s = l;
            i = true;
        } else {
            s = ag(s, l);
        }
    }
    let { queryParams, sequenceParams } = cg(t, r, n);
    s = dg(s, queryParams, sequenceParams, i);
    return s;
}
function Nd(e, t) {
    let r = e;
    for (let [n, o] of t){
        r = r.split(n).join(o);
    }
    return r;
}
function ig(e, t, r) {
    let o = new Map;
    if (e.urlParameters?.length) {
        for (let i of e.urlParameters){
            let s = Nt(t, i, r);
            let a = nt(i);
            s = e.serializer.serialize(i.mapper, s, a);
            if (!i.skipEncoding) {
                s = encodeURIComponent(s);
            }
            o.set(`{${i.mapper.serializedName || a}}`, s);
        }
    }
    return o;
}
function sg(e) {
    return e.includes("://");
}
function ag(e, t) {
    if (!t) {
        return e;
    }
    let r = new URL(e);
    let r_pathname = r.pathname;
    if (!r_pathname.endsWith("/")) {
        r_pathname = `${r_pathname}/`;
    }
    if (t.startsWith("/")) {
        t = t.substring(1);
    }
    let o = t.indexOf("?");
    if (o !== -1) {
        let i = t.substring(0, o);
        let s = t.substring(o + 1);
        r_pathname = r_pathname + i;
        if (s) {
            r.search = r.search ? `${r.search}&${s}` : s;
        }
    } else {
        r_pathname = r_pathname + t;
    }
    r.pathname = r_pathname;
    return r.toString();
}
function cg(e, t, r) {
    let queryParams = new Map;
    let sequenceParams = new Set;
    if (e.queryParameters?.length) {
        for (let s of e.queryParameters){
            if (s.mapper.type.name === "Sequence" && s.mapper.serializedName) {
                sequenceParams.add(s.mapper.serializedName);
            }
            let a = Nt(t, s, r);
            if (a !== undefined && a !== null || s.mapper.required) {
                a = e.serializer.serialize(s.mapper, a, nt(s));
                let c = s.collectionFormat ? og[s.collectionFormat] : "";
                if (Array.isArray(a)) {
                    a = a.map((l)=>{
                        if (l === null || l === undefined) {
                            return "";
                        }
                        return l;
                    });
                }
                if (s.collectionFormat === "Multi" && a.length === 0) {
                    continue;
                } else if (Array.isArray(a) && (s.collectionFormat === "SSV" || s.collectionFormat === "TSV")) {
                    a = a.join(c);
                }
                if (!s.skipEncoding) {
                    if (Array.isArray(a)) {
                        a = a.map((l)=>encodeURIComponent(l));
                    } else {
                        a = encodeURIComponent(a);
                    }
                }
                if (Array.isArray(a) && (s.collectionFormat === "CSV" || s.collectionFormat === "Pipes")) {
                    a = a.join(c);
                }
                queryParams.set(s.mapper.serializedName || nt(s), a);
            }
        }
    }
    return {
        queryParams,
        sequenceParams
    };
}
function lg(e) {
    let t = new Map;
    if (!e || e[0] !== "?") {
        return t;
    }
    e = e.slice(1);
    let r = e.split("&");
    for (let n of r){
        let [o, i] = n.split("=", 2);
        let s = t.get(o);
        if (s) {
            if (Array.isArray(s)) {
                s.push(i);
            } else {
                t.set(o, [
                    s,
                    i
                ]);
            }
        } else {
            t.set(o, i);
        }
    }
    return t;
}
function dg(e, queryParams, sequenceParams, n = false) {
    if (queryParams.size === 0) {
        return e;
    }
    let o = new URL(e);
    let i = lg(o.search);
    for (let [a, c] of queryParams){
        let l = i.get(a);
        if (Array.isArray(l)) {
            if (Array.isArray(c)) {
                l.push(...c);
                let d = new Set(l);
                i.set(a, Array.from(d));
            } else {
                l.push(c);
            }
        } else if (l) {
            if (Array.isArray(c)) {
                c.unshift(l);
            } else if (sequenceParams.has(a)) {
                i.set(a, [
                    l,
                    c
                ]);
            }
            if (!n) {
                i.set(a, c);
            }
        } else {
            i.set(a, c);
        }
    }
    let s = [];
    for (let [a, c] of i){
        if (typeof c === "string") {
            s.push(`${a}=${c}`);
        } else if (Array.isArray(c)) {
            for (let l of c){
                s.push(`${a}=${l}`);
            }
        } else {
            s.push(`${a}=${c}`);
        }
    }
    o.search = s.length ? `?${s.join("&")}` : "";
    return o.toString();
}
const Md = Pt("core-client");
class ti {
    constructor(e = {}){
        this._requestContentType = e.requestContentType;
        this._endpoint = e.endpoint ?? e.baseUri;
        if (e.baseUri) {
            Md.warning("The baseUri option for SDK Clients has been deprecated, please use endpoint instead.");
        }
        this._allowInsecureConnection = e.allowInsecureConnection;
        this._httpClient = e.httpClient || Od();
        this.pipeline = e.pipeline || ug(e);
        if (e.additionalPolicies?.length) {
            for (let { policy, position } of e.additionalPolicies){
                let afterPhase = position === "perRetry" ? "Sign" : undefined;
                this.pipeline.addPolicy(policy, {
                    afterPhase
                });
            }
        }
    }
    async sendRequest(e) {
        return this.pipeline.sendRequest(this._httpClient, e);
    }
    async sendOperationRequest(e, t) {
        let r = t.baseUrl || this._endpoint;
        if (!r) {
            throw Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a endpoint string property that contains the base URL to use.");
        }
        let n = xd(r, t, e, this);
        let o = je({
            url: n
        });
        o.method = t.httpMethod;
        let i = ft(o);
        i.operationSpec = t;
        i.operationArguments = e;
        let s = t.contentType || this._requestContentType;
        if (s && t.requestBody) {
            o.headers.set("Content-Type", s);
        }
        let e_options = e.options;
        if (e_options) {
            let c = e_options.requestOptions;
            if (c) {
                if (c.timeout) {
                    o.timeout = c.timeout;
                }
                if (c.onUploadProgress) {
                    o.onUploadProgress = c.onUploadProgress;
                }
                if (c.onDownloadProgress) {
                    o.onDownloadProgress = c.onDownloadProgress;
                }
                if (c.shouldDeserialize !== undefined) {
                    i.shouldDeserialize = c.shouldDeserialize;
                }
                if (c.allowInsecureConnection) {
                    o.allowInsecureConnection = true;
                }
            }
            if (e_options.abortSignal) {
                o.abortSignal = e_options.abortSignal;
            }
            if (e_options.tracingOptions) {
                o.tracingOptions = e_options.tracingOptions;
            }
        }
        if (this._allowInsecureConnection) {
            o.allowInsecureConnection = true;
        }
        if (o.streamResponseStatusCodes === undefined) {
            o.streamResponseStatusCodes = kd(t);
        }
        try {
            let c = await this.sendRequest(o);
            let l = Aa(c, t.responses[c.status]);
            if (e_options?.onResponse) {
                e_options.onResponse(c, l);
            }
            return l;
        } catch (error) {
            if (typeof error === "object" && error?.response) {
                let l = error.response;
                let d = Aa(l, t.responses[error.statusCode] || t.responses.default);
                error.details = d;
                if (e_options?.onResponse) {
                    e_options.onResponse(l, d, error);
                }
            }
            throw error;
        }
    }
}
function ug(e) {
    let credentialScopes = hg(e);
    let credentialOptions = e.credential && credentialScopes ? {
        credentialScopes,
        credential: e.credential
    } : undefined;
    return Pd({
        ...e,
        credentialOptions
    });
}
function hg(e) {
    if (e.credentialScopes) {
        return e.credentialScopes;
    }
    if (e.endpoint) {
        return `${e.endpoint}/.default`;
    }
    if (e.baseUri) {
        return `${e.baseUri}/.default`;
    }
    if (e.credential && !e.credentialScopes) {
        throw Error("When using credentials, the ServiceClientOptions must contain either a endpoint or a credentialScopes. Unable to create a bearerTokenAuthenticationPolicy");
    }
}
function Dd(e) {
    if (e === "adfs") {
        return "oauth2/token";
    } else {
        return "oauth2/v2.0/token";
    }
}
const Z = Jn({
    namespace: "Microsoft.AAD",
    packageName: "@azure/identity",
    packageVersion: xo
});
const Ud = "Specifying a `clientId` or `resourceId` is not supported by the Service Fabric managed identity environment. The managed identity configuration is determined by the Service Fabric cluster resource configuration. See https://aka.ms/servicefabricmi for more information";
function eo(e) {
    let t = "";
    if (Array.isArray(e)) {
        if (e.length !== 1) {
            return;
        }
        t = e[0];
    } else if (typeof e === "string") {
        t = e;
    }
    if (!t.endsWith("/.default")) {
        return t;
    }
    return t.substr(0, t.lastIndexOf("/.default"));
}
function Ld(e) {
    if (typeof e.expires_on === "number") {
        return e.expires_on * 1000;
    }
    if (typeof e.expires_on === "string") {
        let t = +e.expires_on;
        if (!isNaN(t)) {
            return t * 1000;
        }
        let r = Date.parse(e.expires_on);
        if (!isNaN(r)) {
            return r;
        }
    }
    if (typeof e.expires_in === "number") {
        return Date.now() + e.expires_in * 1000;
    }
    throw Error(`Failed to parse token expiration from body. expires_in="${e.expires_in}", expires_on="${e.expires_on}"`);
}
function Hd(e) {
    if (e.refresh_on) {
        if (typeof e.refresh_on === "number") {
            return e.refresh_on * 1000;
        }
        if (typeof e.refresh_on === "string") {
            let t = +e.refresh_on;
            if (!isNaN(t)) {
                return t * 1000;
            }
            let r = Date.parse(e.refresh_on);
            if (!isNaN(r)) {
                return r;
            }
        }
        throw Error(`Failed to parse refresh_on from body. refresh_on="${e.refresh_on}"`);
    } else {
        return;
    }
}
const to = "noCorrelationId";
function fg(e) {
    let t = e?.authorityHost;
    if (Qo) {
        t = t ?? process.env.AZURE_AUTHORITY_HOST;
    }
    return t ?? bs_AzurePublicCloud;
}
class Qr extends ti {
    constructor(e){
        let n = `azsdk-js-identity/${xo}`;
        let userAgentPrefix = e?.userAgentOptions?.userAgentPrefix ? `${e.userAgentOptions.userAgentPrefix} ${n}` : `${n}`;
        let baseUri = fg(e);
        if (!baseUri.startsWith("https:")) {
            throw Error("The authorityHost address must use the 'https' protocol.");
        }
        super({
            requestContentType: "application/json; charset=utf-8",
            retryOptions: {
                maxRetries: 3
            },
            ...e,
            userAgentOptions: {
                userAgentPrefix
            },
            baseUri
        });
        this.allowInsecureConnection = false;
        this.authorityHost = baseUri;
        this.abortControllers = new Map;
        this.allowLoggingAccountIdentifiers = e?.loggingOptions?.allowLoggingAccountIdentifiers;
        this.tokenCredentialOptions = {
            ...e
        };
        if (e?.allowInsecureConnection) {
            this.allowInsecureConnection = e.allowInsecureConnection;
        }
    }
    async sendTokenRequest(e) {
        Be.info(`IdentityClient: sending token request to [${e.url}]`);
        let t = await this.sendRequest(e);
        if (t.bodyAsText && (t.status === 200 || t.status === 201)) {
            let r = JSON.parse(t.bodyAsText);
            if (!r.access_token) {
                return null;
            }
            this.logIdentifiers(t);
            let n = {
                accessToken: {
                    token: r.access_token,
                    expiresOnTimestamp: Ld(r),
                    refreshAfterTimestamp: Hd(r),
                    tokenType: "Bearer"
                },
                refreshToken: r.refresh_token
            };
            Be.info(`IdentityClient: [${e.url}] token acquired, expires on ${n.accessToken.expiresOnTimestamp}`);
            return n;
        } else {
            let r = new $n(t.status, t.bodyAsText);
            Be.warning(`IdentityClient: authentication error. HTTP status: ${t.status}, ${r.errorResponse.errorDescription}`);
            throw r;
        }
    }
    async refreshAccessToken(e, client_id, scope, refresh_token, o, i = {}) {
        if (refresh_token === undefined) {
            return null;
        }
        Be.info(`IdentityClient: refreshing access token with client ID: ${client_id}, scopes: ${scope} started`);
        let s = {
            grant_type: "refresh_token",
            client_id,
            refresh_token,
            scope
        };
        if (o !== undefined) {
            s.client_secret = o;
        }
        let a = new URLSearchParams(s);
        return Z.withSpan("IdentityClient.refreshAccessToken", i, async (c)=>{
            try {
                let l = Dd(e);
                let d = je({
                    url: `${this.authorityHost}/${e}/${l}`,
                    method: "POST",
                    body: a.toString(),
                    abortSignal: i.abortSignal,
                    headers: rr({
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded"
                    }),
                    tracingOptions: c.tracingOptions
                });
                let u = await this.sendTokenRequest(d);
                Be.info(`IdentityClient: refreshed token for client ID: ${client_id}`);
                return u;
            } catch (error) {
                if (error.name === Hs && error.errorResponse.error === "interaction_required") {
                    Be.info(`IdentityClient: interaction required for client ID: ${client_id}`);
                    return null;
                } else {
                    Be.warning(`IdentityClient: failed refreshing token for client ID: ${client_id}: ${error}`);
                    throw error;
                }
            }
        });
    }
    generateAbortSignal(e) {
        let t = new AbortController;
        let r = this.abortControllers.get(e) || [];
        r.push(t);
        this.abortControllers.set(e, r);
        let onabort = t.signal.onabort;
        t.signal.onabort = (...o)=>{
            this.abortControllers.set(e, undefined);
            if (onabort) {
                onabort.apply(t.signal, o);
            }
        };
        return t.signal;
    }
    abortRequests(e) {
        let t = e || to;
        let r = [
            ...this.abortControllers.get(t) || [],
            ...this.abortControllers.get(to) || []
        ];
        if (!r.length) {
            return;
        }
        for (let n of r){
            n.abort();
        }
        this.abortControllers.set(t, undefined);
    }
    getCorrelationId(e) {
        let r = e?.body?.split("&").map((n)=>n.split("=")).find(([n])=>n === "client-request-id");
        if (r && r.length) {
            return r[1] || to;
        }
        return to;
    }
    async sendGetRequestAsync(e, t) {
        let r = je({
            url: e,
            method: "GET",
            body: t?.body,
            allowInsecureConnection: this.allowInsecureConnection,
            headers: rr(t?.headers),
            abortSignal: this.generateAbortSignal(to)
        });
        let n = await this.sendRequest(r);
        this.logIdentifiers(n);
        return {
            body: n.bodyAsText ? JSON.parse(n.bodyAsText) : undefined,
            headers: n.headers.toJSON(),
            status: n.status
        };
    }
    async sendPostRequestAsync(e, t) {
        let r = je({
            url: e,
            method: "POST",
            body: t?.body,
            headers: rr(t?.headers),
            allowInsecureConnection: this.allowInsecureConnection,
            abortSignal: this.generateAbortSignal(this.getCorrelationId(t))
        });
        let n = await this.sendRequest(r);
        this.logIdentifiers(n);
        return {
            body: n.bodyAsText ? JSON.parse(n.bodyAsText) : undefined,
            headers: n.headers.toJSON(),
            status: n.status
        };
    }
    getTokenCredentialOptions() {
        return this.tokenCredentialOptions;
    }
    logIdentifiers(e) {
        if (!this.allowLoggingAccountIdentifiers || !e.bodyAsText) {
            return;
        }
        let t = "No User Principal Name available";
        try {
            let n = (e.parsedBody || JSON.parse(e.bodyAsText)).access_token;
            if (!n) {
                return;
            }
            let o = n.split(".")[1];
            let { appid, upn, tid, oid } = JSON.parse(Buffer.from(o, "base64").toString("utf8"));
            Be.info(`[Authenticated account] Client ID: ${appid}. Tenant ID: ${tid}. User Principal Name: ${upn || t}. Object ID (user): ${oid}`);
        } catch (error) {
            Be.warning("allowLoggingAccountIdentifiers was set, but we couldn't log the account information. Error:", error.message);
        }
    }
}
class Jr {
    static serializeJSONBlob(e) {
        return JSON.stringify(e);
    }
    static serializeAccounts(e) {
        let t = {};
        Object.keys(e).map((r)=>{
            let n = e[r];
            t[r] = {
                home_account_id: n.homeAccountId,
                environment: n.environment,
                realm: n.realm,
                local_account_id: n.localAccountId,
                username: n.username,
                authority_type: n.authorityType,
                name: n.name,
                client_info: n.clientInfo,
                last_modification_time: n.lastModificationTime,
                last_modification_app: n.lastModificationApp,
                tenantProfiles: n.tenantProfiles?.map((o)=>JSON.stringify(o))
            };
        });
        return t;
    }
    static serializeIdTokens(e) {
        let t = {};
        Object.keys(e).map((r)=>{
            let n = e[r];
            t[r] = {
                home_account_id: n.homeAccountId,
                environment: n.environment,
                credential_type: n.credentialType,
                client_id: n.clientId,
                secret: n.secret,
                realm: n.realm
            };
        });
        return t;
    }
    static serializeAccessTokens(e) {
        let t = {};
        Object.keys(e).map((r)=>{
            let n = e[r];
            t[r] = {
                home_account_id: n.homeAccountId,
                environment: n.environment,
                credential_type: n.credentialType,
                client_id: n.clientId,
                secret: n.secret,
                realm: n.realm,
                target: n.target,
                cached_at: n.cachedAt,
                expires_on: n.expiresOn,
                extended_expires_on: n.extendedExpiresOn,
                refresh_on: n.refreshOn,
                key_id: n.keyId,
                token_type: n.tokenType,
                requestedClaims: n.requestedClaims,
                requestedClaimsHash: n.requestedClaimsHash,
                userAssertionHash: n.userAssertionHash
            };
        });
        return t;
    }
    static serializeRefreshTokens(e) {
        let t = {};
        Object.keys(e).map((r)=>{
            let n = e[r];
            t[r] = {
                home_account_id: n.homeAccountId,
                environment: n.environment,
                credential_type: n.credentialType,
                client_id: n.clientId,
                secret: n.secret,
                family_id: n.familyId,
                target: n.target,
                realm: n.realm
            };
        });
        return t;
    }
    static serializeAppMetadata(e) {
        let t = {};
        Object.keys(e).map((r)=>{
            let n = e[r];
            t[r] = {
                client_id: n.clientId,
                environment: n.environment,
                family_id: n.familyId
            };
        });
        return t;
    }
    static serializeAllCache(e) {
        return {
            Account: this.serializeAccounts(e.accounts),
            IdToken: this.serializeIdTokens(e.idTokens),
            AccessToken: this.serializeAccessTokens(e.accessTokens),
            RefreshToken: this.serializeRefreshTokens(e.refreshTokens),
            AppMetadata: this.serializeAppMetadata(e.appMetadata)
        };
    }
}
const f = {
    LIBRARY_NAME: "MSAL.JS",
    SKU: "msal.js.common",
    DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
    DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
    DEFAULT_COMMON_TENANT: "common",
    ADFS: "adfs",
    DSTS: "dstsv2",
    AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
    CIAM_AUTH_URL: ".ciamlogin.com",
    AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com",
    RESOURCE_DELIM: "|",
    NO_ACCOUNT: "NO_ACCOUNT",
    CLAIMS: "claims",
    CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
    OPENID_SCOPE: "openid",
    PROFILE_SCOPE: "profile",
    OFFLINE_ACCESS_SCOPE: "offline_access",
    EMAIL_SCOPE: "email",
    CODE_GRANT_TYPE: "authorization_code",
    RT_GRANT_TYPE: "refresh_token",
    S256_CODE_CHALLENGE_METHOD: "S256",
    URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
    AUTHORIZATION_PENDING: "authorization_pending",
    NOT_DEFINED: "not_defined",
    EMPTY_STRING: "",
    NOT_APPLICABLE: "N/A",
    NOT_AVAILABLE: "Not Available",
    FORWARD_SLASH: "/",
    IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
    IMDS_VERSION: "2020-06-01",
    IMDS_TIMEOUT: 2000,
    AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
    REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
    KNOWN_PUBLIC_CLOUDS: [
        "login.microsoftonline.com",
        "login.windows.net",
        "login.microsoft.com",
        "sts.windows.net"
    ],
    SHR_NONCE_VALIDITY: 240,
    INVALID_INSTANCE: "invalid_instance"
};
const P = {
    SUCCESS: 200,
    SUCCESS_RANGE_START: 200,
    SUCCESS_RANGE_END: 299,
    REDIRECT: 302,
    CLIENT_ERROR: 400,
    CLIENT_ERROR_RANGE_START: 400,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    REQUEST_TIMEOUT: 408,
    GONE: 410,
    TOO_MANY_REQUESTS: 429,
    CLIENT_ERROR_RANGE_END: 499,
    SERVER_ERROR: 500,
    SERVER_ERROR_RANGE_START: 500,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    SERVER_ERROR_RANGE_END: 599,
    MULTI_SIDED_ERROR: 600
};
const ye = [
    f.OPENID_SCOPE,
    f.PROFILE_SCOPE,
    f.OFFLINE_ACCESS_SCOPE
];
const Sa = [
    ...ye,
    f.EMAIL_SCOPE
];
const Y = {
    CONTENT_TYPE: "Content-Type",
    CONTENT_LENGTH: "Content-Length",
    RETRY_AFTER: "Retry-After",
    CCS_HEADER: "X-AnchorMailbox",
    WWWAuthenticate: "WWW-Authenticate",
    AuthenticationInfo: "Authentication-Info",
    X_MS_REQUEST_ID: "x-ms-request-id",
    X_MS_HTTP_VERSION: "x-ms-httpver"
};
const be = {
    COMMON: "common",
    ORGANIZATIONS: "organizations",
    CONSUMERS: "consumers"
};
const nr = {
    ACCESS_TOKEN: "access_token",
    XMS_CC: "xms_cc"
};
const or = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
    CREATE: "create",
    NO_SESSION: "no_session"
};
const ri = {
    PLAIN: "plain",
    S256: "S256"
};
const Xr = {
    CODE: "code",
    IDTOKEN_TOKEN: "id_token token",
    IDTOKEN_TOKEN_REFRESHTOKEN: "id_token token refresh_token"
};
const mt = {
    QUERY: "query",
    FRAGMENT: "fragment",
    FORM_POST: "form_post"
};
const Pe = {
    IMPLICIT_GRANT: "implicit",
    AUTHORIZATION_CODE_GRANT: "authorization_code",
    CLIENT_CREDENTIALS_GRANT: "client_credentials",
    RESOURCE_OWNER_PASSWORD_GRANT: "password",
    REFRESH_TOKEN_GRANT: "refresh_token",
    DEVICE_CODE_GRANT: "device_code",
    JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer"
};
const ir = {
    MSSTS_ACCOUNT_TYPE: "MSSTS",
    ADFS_ACCOUNT_TYPE: "ADFS",
    MSAV1_ACCOUNT_TYPE: "MSA",
    GENERIC_ACCOUNT_TYPE: "Generic"
};
const pt = {
    CACHE_KEY_SEPARATOR: "-",
    CLIENT_INFO_SEPARATOR: "."
};
const K = {
    ID_TOKEN: "IdToken",
    ACCESS_TOKEN: "AccessToken",
    ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme",
    REFRESH_TOKEN: "RefreshToken"
};
const ro = "appmetadata";
const Fd = "client_info";
const xt = "1";
const Zr = {
    CACHE_KEY: "authority-metadata",
    REFRESH_TIME_SECONDS: 86400
};
const Ce = {
    CONFIG: "config",
    CACHE: "cache",
    NETWORK: "network",
    HARDCODED_VALUES: "hardcoded_values"
};
const de = {
    SCHEMA_VERSION: 5,
    MAX_LAST_HEADER_BYTES: 330,
    MAX_CACHED_ERRORS: 50,
    CACHE_KEY: "server-telemetry",
    CATEGORY_SEPARATOR: "|",
    VALUE_SEPARATOR: ",",
    OVERFLOW_TRUE: "1",
    OVERFLOW_FALSE: "0",
    UNKNOWN_ERROR: "unknown_error"
};
const L = {
    BEARER: "Bearer",
    POP: "pop",
    SSH: "ssh-cert"
};
const ot = {
    DEFAULT_THROTTLE_TIME_SECONDS: 60,
    DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
    THROTTLING_PREFIX: "throttling",
    X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
};
const no = {
    INVALID_GRANT_ERROR: "invalid_grant",
    CLIENT_MISMATCH_ERROR: "client_mismatch"
};
const oo = {
    username: "username",
    password: "password"
};
const sr = {
    FAILED_AUTO_DETECTION: "1",
    INTERNAL_CACHE: "2",
    ENVIRONMENT_VARIABLE: "3",
    IMDS: "4"
};
const ni = {
    CONFIGURED_NO_AUTO_DETECTION: "2",
    AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4",
    AUTO_DETECTION_REQUESTED_FAILED: "5"
};
const j = {
    NOT_APPLICABLE: "0",
    FORCE_REFRESH_OR_CLAIMS: "1",
    NO_CACHED_ACCESS_TOKEN: "2",
    CACHED_ACCESS_TOKEN_EXPIRED: "3",
    PROACTIVELY_REFRESHED: "4"
};
const tokenRenewalOffsetSeconds = 300;
const me = {
    BASE64: "base64",
    HEX: "hex",
    UTF8: "utf-8"
};
const oi = "unexpected_error";
const io = "post_request_failed";
const ii = {
    [oi]: "Unexpected error in authentication.",
    [io]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
};
const $d = {
    unexpectedError: {
        code: oi,
        desc: ii[oi]
    },
    postRequestFailed: {
        code: io,
        desc: ii[io]
    }
};
class N extends Error {
    constructor(e, t, r){
        let n = t ? `${e}: ${t}` : e;
        super(n);
        Object.setPrototypeOf(this, N.prototype);
        this.errorCode = e || f.EMPTY_STRING;
        this.errorMessage = t || f.EMPTY_STRING;
        this.subError = r || f.EMPTY_STRING;
        this.name = "AuthError";
    }
    setCorrelationId(e) {
        this.correlationId = e;
    }
}
function wa(e, error) {
    return new N(e, error ? `${ii[e]} ${error}` : ii[e]);
}
const ar = "client_info_decoding_error";
const tn = "client_info_empty_error";
const cr = "token_parsing_error";
const rn = "null_or_empty_token";
const Oe = "endpoints_resolution_error";
const Mt = "network_error";
const nn = "openid_config_error";
const on = "hash_not_deserialized";
const lr = "invalid_state";
const so = "state_mismatch";
const si = "state_not_found";
const sn = "nonce_mismatch";
const Dt = "auth_time_not_found";
const an = "max_age_transpired";
const cn = "multiple_matching_tokens";
const ai = "multiple_matching_accounts";
const ln = "multiple_matching_appMetadata";
const dn = "request_cannot_be_made";
const un = "cannot_remove_empty_scope";
const hn = "cannot_append_scopeset";
const dr = "empty_input_scopeset";
const ao = "device_code_polling_cancelled";
const co = "device_code_expired";
const lo = "device_code_unknown_error";
const Ut = "no_account_in_silent_request";
const fn = "invalid_cache_record";
const Lt = "invalid_cache_environment";
const ci = "no_account_found";
const ur = "no_crypto_object";
const li = "unexpected_credential_type";
const uo = "invalid_assertion";
const mn = "invalid_client_credential";
const Ye = "token_refresh_required";
const ho = "user_timeout_reached";
const pn = "token_claims_cnf_required_for_signedjwt";
const di = "authorization_code_missing_from_server_response";
const ui = "binding_key_not_removed";
const gn = "end_session_endpoint_not_supported";
const yn = "key_id_missing";
const hi = "no_network_connectivity";
const fi = "user_canceled";
const fo = "missing_tenant_id_error";
const M = "method_not_implemented";
const mi = "nested_app_auth_bridge_disabled";
const O = {
    [ar]: "The client info could not be parsed/decoded correctly",
    [tn]: "The client info was empty",
    [cr]: "Token cannot be parsed",
    [rn]: "The token is null or empty",
    [Oe]: "Endpoints cannot be resolved",
    [Mt]: "Network request failed",
    [nn]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.",
    [on]: "The hash parameters could not be deserialized",
    [lr]: "State was not the expected format",
    [so]: "State mismatch error",
    [si]: "State not found",
    [sn]: "Nonce mismatch error",
    [Dt]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.",
    [an]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.",
    [cn]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.",
    [ai]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account",
    [ln]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata",
    [dn]: "Token request cannot be made without authorization code or refresh token.",
    [un]: "Cannot remove null or empty scope from ScopeSet",
    [hn]: "Cannot append ScopeSet",
    [dr]: "Empty input ScopeSet cannot be processed",
    [ao]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.",
    [co]: "Device code is expired.",
    [lo]: "Device code stopped polling for unknown reasons.",
    [Ut]: "Please pass an account object, silent flow is not supported without account information",
    [fn]: "Cache record object was null or undefined.",
    [Lt]: "Invalid environment when attempting to create cache entry",
    [ci]: "No account found in cache for given key.",
    [ur]: "No crypto object detected.",
    [li]: "Unexpected credential type.",
    [uo]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515",
    [mn]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential",
    [Ye]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.",
    [ho]: "User defined timeout for device code polling reached",
    [pn]: "Cannot generate a POP jwt if the token_claims are not populated",
    [di]: "Server response does not contain an authorization code to proceed",
    [ui]: "Could not remove the credential's binding key from storage.",
    [gn]: "The provided authority does not support logout",
    [yn]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.",
    [hi]: "No network connectivity. Check your internet connection.",
    [fi]: "User cancelled the flow.",
    [fo]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.",
    [M]: "This method has not been implemented",
    [mi]: "The nested app auth bridge is disabled"
};
const Bd = {
    clientInfoDecodingError: {
        code: ar,
        desc: O[ar]
    },
    clientInfoEmptyError: {
        code: tn,
        desc: O[tn]
    },
    tokenParsingError: {
        code: cr,
        desc: O[cr]
    },
    nullOrEmptyToken: {
        code: rn,
        desc: O[rn]
    },
    endpointResolutionError: {
        code: Oe,
        desc: O[Oe]
    },
    networkError: {
        code: Mt,
        desc: O[Mt]
    },
    unableToGetOpenidConfigError: {
        code: nn,
        desc: O[nn]
    },
    hashNotDeserialized: {
        code: on,
        desc: O[on]
    },
    invalidStateError: {
        code: lr,
        desc: O[lr]
    },
    stateMismatchError: {
        code: so,
        desc: O[so]
    },
    stateNotFoundError: {
        code: si,
        desc: O[si]
    },
    nonceMismatchError: {
        code: sn,
        desc: O[sn]
    },
    authTimeNotFoundError: {
        code: Dt,
        desc: O[Dt]
    },
    maxAgeTranspired: {
        code: an,
        desc: O[an]
    },
    multipleMatchingTokens: {
        code: cn,
        desc: O[cn]
    },
    multipleMatchingAccounts: {
        code: ai,
        desc: O[ai]
    },
    multipleMatchingAppMetadata: {
        code: ln,
        desc: O[ln]
    },
    tokenRequestCannotBeMade: {
        code: dn,
        desc: O[dn]
    },
    removeEmptyScopeError: {
        code: un,
        desc: O[un]
    },
    appendScopeSetError: {
        code: hn,
        desc: O[hn]
    },
    emptyInputScopeSetError: {
        code: dr,
        desc: O[dr]
    },
    DeviceCodePollingCancelled: {
        code: ao,
        desc: O[ao]
    },
    DeviceCodeExpired: {
        code: co,
        desc: O[co]
    },
    DeviceCodeUnknownError: {
        code: lo,
        desc: O[lo]
    },
    NoAccountInSilentRequest: {
        code: Ut,
        desc: O[Ut]
    },
    invalidCacheRecord: {
        code: fn,
        desc: O[fn]
    },
    invalidCacheEnvironment: {
        code: Lt,
        desc: O[Lt]
    },
    noAccountFound: {
        code: ci,
        desc: O[ci]
    },
    noCryptoObj: {
        code: ur,
        desc: O[ur]
    },
    unexpectedCredentialType: {
        code: li,
        desc: O[li]
    },
    invalidAssertion: {
        code: uo,
        desc: O[uo]
    },
    invalidClientCredential: {
        code: mn,
        desc: O[mn]
    },
    tokenRefreshRequired: {
        code: Ye,
        desc: O[Ye]
    },
    userTimeoutReached: {
        code: ho,
        desc: O[ho]
    },
    tokenClaimsRequired: {
        code: pn,
        desc: O[pn]
    },
    noAuthorizationCodeFromServer: {
        code: di,
        desc: O[di]
    },
    bindingKeyNotRemovedError: {
        code: ui,
        desc: O[ui]
    },
    logoutNotSupported: {
        code: gn,
        desc: O[gn]
    },
    keyIdMissing: {
        code: yn,
        desc: O[yn]
    },
    noNetworkConnectivity: {
        code: hi,
        desc: O[hi]
    },
    userCanceledError: {
        code: fi,
        desc: O[fi]
    },
    missingTenantIdError: {
        code: fo,
        desc: O[fo]
    },
    nestedAppAuthBridgeDisabled: {
        code: mi,
        desc: O[mi]
    }
};
class hr extends N {
    constructor(e, t){
        super(e, t ? `${O[e]}: ${t}` : O[e]);
        this.name = "ClientAuthError";
        Object.setPrototypeOf(this, hr.prototype);
    }
}
function g(e, t) {
    return new hr(e, t);
}
const Tn = {
    createNewGuid: ()=>{
        throw g(M);
    },
    base64Decode: ()=>{
        throw g(M);
    },
    base64Encode: ()=>{
        throw g(M);
    },
    base64UrlEncode: ()=>{
        throw g(M);
    },
    encodeKid: ()=>{
        throw g(M);
    },
    async getPublicKeyThumbprint () {
        throw g(M);
    },
    async removeTokenBindingKey () {
        throw g(M);
    },
    async clearKeystore () {
        throw g(M);
    },
    async signJwt () {
        throw g(M);
    },
    async hashString () {
        throw g(M);
    }
};
const G = {
    Error: 0,
    0: "Error",
    Warning: 1,
    1: "Warning",
    Info: 2,
    2: "Info",
    Verbose: 3,
    3: "Verbose",
    Trace: 4,
    4: "Trace"
};
class Ue {
    constructor(e, t, r){
        this.level = G.Info;
        let n = ()=>{};
        let o = e || Ue.createDefaultLoggerOptions();
        this.localCallback = o.loggerCallback || n;
        this.piiLoggingEnabled = o.piiLoggingEnabled || false;
        this.level = typeof o.logLevel === "number" ? o.logLevel : G.Info;
        this.correlationId = o.correlationId || f.EMPTY_STRING;
        this.packageName = t || f.EMPTY_STRING;
        this.packageVersion = r || f.EMPTY_STRING;
    }
    static createDefaultLoggerOptions() {
        return {
            loggerCallback: ()=>{},
            piiLoggingEnabled: false,
            logLevel: G.Info
        };
    }
    clone(e, t, r) {
        return new Ue({
            loggerCallback: this.localCallback,
            piiLoggingEnabled: this.piiLoggingEnabled,
            logLevel: this.level,
            correlationId: r || this.correlationId
        }, e, t);
    }
    logMessage(e, t) {
        if (t.logLevel > this.level || !this.piiLoggingEnabled && t.containsPii) {
            return;
        }
        let o = `${`[${new Date().toUTCString()}] : [${t.correlationId || this.correlationId || ""}]`} : ${this.packageName}@${this.packageVersion} : ${G[t.logLevel]} - ${e}`;
        this.executeCallback(t.logLevel, o, t.containsPii || false);
    }
    executeCallback(e, t, r) {
        if (this.localCallback) {
            this.localCallback(e, t, r);
        }
    }
    error(e, t) {
        this.logMessage(e, {
            logLevel: G.Error,
            containsPii: false,
            correlationId: t || f.EMPTY_STRING
        });
    }
    errorPii(e, t) {
        this.logMessage(e, {
            logLevel: G.Error,
            containsPii: true,
            correlationId: t || f.EMPTY_STRING
        });
    }
    warning(e, t) {
        this.logMessage(e, {
            logLevel: G.Warning,
            containsPii: false,
            correlationId: t || f.EMPTY_STRING
        });
    }
    warningPii(e, t) {
        this.logMessage(e, {
            logLevel: G.Warning,
            containsPii: true,
            correlationId: t || f.EMPTY_STRING
        });
    }
    info(e, t) {
        this.logMessage(e, {
            logLevel: G.Info,
            containsPii: false,
            correlationId: t || f.EMPTY_STRING
        });
    }
    infoPii(e, t) {
        this.logMessage(e, {
            logLevel: G.Info,
            containsPii: true,
            correlationId: t || f.EMPTY_STRING
        });
    }
    verbose(e, t) {
        this.logMessage(e, {
            logLevel: G.Verbose,
            containsPii: false,
            correlationId: t || f.EMPTY_STRING
        });
    }
    verbosePii(e, t) {
        this.logMessage(e, {
            logLevel: G.Verbose,
            containsPii: true,
            correlationId: t || f.EMPTY_STRING
        });
    }
    trace(e, t) {
        this.logMessage(e, {
            logLevel: G.Trace,
            containsPii: false,
            correlationId: t || f.EMPTY_STRING
        });
    }
    tracePii(e, t) {
        this.logMessage(e, {
            logLevel: G.Trace,
            containsPii: true,
            correlationId: t || f.EMPTY_STRING
        });
    }
    isPiiLoggingEnabled() {
        return this.piiLoggingEnabled || false;
    }
}
const pi = "@azure/msal-common";
const version_1 = "15.13.1";
const Ht = {
    None: "none",
    AzurePublic: "https://login.microsoftonline.com",
    AzurePpe: "https://login.windows-ppe.net",
    AzureChina: "https://login.chinacloudapi.cn",
    AzureGermany: "https://login.microsoftonline.de",
    AzureUsGovernment: "https://login.microsoftonline.us"
};
const Cn = "redirect_uri_empty";
const gi = "claims_request_parsing_error";
const An = "authority_uri_insecure";
const gt = "url_parse_error";
const fr = "empty_url_error";
const In = "empty_input_scopes_error";
const mr = "invalid_claims";
const _n = "token_request_empty";
const Sn = "logout_request_empty";
const yi = "invalid_code_challenge_method";
const Rn = "pkce_params_missing";
const pr = "invalid_cloud_discovery_metadata";
const wn = "invalid_authority_metadata";
const vn = "untrusted_authority";
const Ft = "missing_ssh_jwk";
const Ti = "missing_ssh_kid";
const Ei = "missing_nonce_authentication_header";
const Ci = "invalid_authentication_header";
const Ai = "cannot_set_OIDCOptions";
const Ii = "cannot_allow_platform_broker";
const _i = "authority_mismatch";
const Si = "invalid_request_method_for_EAR";
const Ri = "invalid_authorize_post_body_parameters";
const ee = {
    [Cn]: "A redirect URI is required for all calls, and none has been set.",
    [gi]: "Could not parse the given claims request object.",
    [An]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
    [gt]: "URL could not be parsed into appropriate segments.",
    [fr]: "URL was empty or null.",
    [In]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.",
    [mr]: "Given claims parameter must be a stringified JSON object.",
    [_n]: "Token request was empty and not found in cache.",
    [Sn]: "The logout request was null or undefined.",
    [yi]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
    [Rn]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request",
    [pr]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields",
    [wn]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.",
    [vn]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.",
    [Ft]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.",
    [Ti]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.",
    [Ei]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.",
    [Ci]: "Invalid authentication header provided",
    [Ai]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.",
    [Ii]: "Cannot set allowPlatformBroker parameter to true when not in AAD protocol mode.",
    [_i]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority.",
    [Ri]: "Invalid authorize post body parameters provided. If you are using authorizePostBodyParameters, the request method must be POST. Please check the request method and parameters.",
    [Si]: "Invalid request method for EAR protocol mode. The request method cannot be GET when using EAR protocol mode. Please change the request method to POST."
};
const zd = {
    redirectUriNotSet: {
        code: Cn,
        desc: ee[Cn]
    },
    claimsRequestParsingError: {
        code: gi,
        desc: ee[gi]
    },
    authorityUriInsecure: {
        code: An,
        desc: ee[An]
    },
    urlParseError: {
        code: gt,
        desc: ee[gt]
    },
    urlEmptyError: {
        code: fr,
        desc: ee[fr]
    },
    emptyScopesError: {
        code: In,
        desc: ee[In]
    },
    invalidClaimsRequest: {
        code: mr,
        desc: ee[mr]
    },
    tokenRequestEmptyError: {
        code: _n,
        desc: ee[_n]
    },
    logoutRequestEmptyError: {
        code: Sn,
        desc: ee[Sn]
    },
    invalidCodeChallengeMethod: {
        code: yi,
        desc: ee[yi]
    },
    invalidCodeChallengeParams: {
        code: Rn,
        desc: ee[Rn]
    },
    invalidCloudDiscoveryMetadata: {
        code: pr,
        desc: ee[pr]
    },
    invalidAuthorityMetadata: {
        code: wn,
        desc: ee[wn]
    },
    untrustedAuthority: {
        code: vn,
        desc: ee[vn]
    },
    missingSshJwk: {
        code: Ft,
        desc: ee[Ft]
    },
    missingSshKid: {
        code: Ti,
        desc: ee[Ti]
    },
    missingNonceAuthenticationHeader: {
        code: Ei,
        desc: ee[Ei]
    },
    invalidAuthenticationHeader: {
        code: Ci,
        desc: ee[Ci]
    },
    cannotSetOIDCOptions: {
        code: Ai,
        desc: ee[Ai]
    },
    cannotAllowPlatformBroker: {
        code: Ii,
        desc: ee[Ii]
    },
    authorityMismatch: {
        code: _i,
        desc: ee[_i]
    },
    invalidAuthorizePostBodyParameters: {
        code: Ri,
        desc: ee[Ri]
    },
    invalidRequestMethodForEAR: {
        code: Si,
        desc: ee[Si]
    }
};
class mo extends N {
    constructor(e){
        super(e, ee[e]);
        this.name = "ClientConfigurationError";
        Object.setPrototypeOf(this, mo.prototype);
    }
}
function V(e) {
    return new mo(e);
}
class re {
    static isEmptyObj(e) {
        if (e) {
            try {
                let t = JSON.parse(e);
                return Object.keys(t).length === 0;
            } catch (t) {}
        }
        return true;
    }
    static startsWith(e, t) {
        return e.indexOf(t) === 0;
    }
    static endsWith(e, t) {
        return e.length >= t.length && e.lastIndexOf(t) === e.length - t.length;
    }
    static queryStringToObject(e) {
        let t = {};
        let r = e.split("&");
        let n = (o)=>decodeURIComponent(o.replace(/\+/g, " "));
        r.forEach((o)=>{
            if (o.trim()) {
                let [i, s] = o.split(/=(.+)/g, 2);
                if (i && s) {
                    t[n(i)] = n(s);
                }
            }
        });
        return t;
    }
    static trimArrayEntries(e) {
        return e.map((t)=>t.trim());
    }
    static removeEmptyStringsFromArray(e) {
        return e.filter((t)=>!!t);
    }
    static jsonParseHelper(e) {
        try {
            return JSON.parse(e);
        } catch (t) {
            return null;
        }
    }
    static matchPattern(e, t) {
        return new RegExp(e.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?")).test(t);
    }
}
class oe {
    constructor(e){
        let t = e ? re.trimArrayEntries([
            ...e
        ]) : [];
        let r = t ? re.removeEmptyStringsFromArray(t) : [];
        if (!r || !r.length) {
            throw V(In);
        }
        this.scopes = new Set;
        r.forEach((n)=>this.scopes.add(n));
    }
    static fromString(e) {
        let r = (e || f.EMPTY_STRING).split(" ");
        return new oe(r);
    }
    static createSearchScopes(e) {
        let t = e && e.length > 0 ? e : [
            ...ye
        ];
        let r = new oe(t);
        if (!r.containsOnlyOIDCScopes()) {
            r.removeOIDCScopes();
        } else {
            r.removeScope(f.OFFLINE_ACCESS_SCOPE);
        }
        return r;
    }
    containsScope(e) {
        let t = this.printScopesLowerCase().split(" ");
        let r = new oe(t);
        if (e) {
            return r.scopes.has(e.toLowerCase());
        }
        return false;
    }
    containsScopeSet(e) {
        if (!e || e.scopes.size <= 0) {
            return false;
        }
        return this.scopes.size >= e.scopes.size && e.asArray().every((t)=>this.containsScope(t));
    }
    containsOnlyOIDCScopes() {
        let e = 0;
        Sa.forEach((t)=>{
            if (this.containsScope(t)) {
                e += 1;
            }
        });
        return this.scopes.size === e;
    }
    appendScope(e) {
        if (e) {
            this.scopes.add(e.trim());
        }
    }
    appendScopes(e) {
        try {
            e.forEach((t)=>this.appendScope(t));
        } catch (t) {
            throw g(hn);
        }
    }
    removeScope(e) {
        if (!e) {
            throw g(un);
        }
        this.scopes.delete(e.trim());
    }
    removeOIDCScopes() {
        Sa.forEach((e)=>{
            this.scopes.delete(e);
        });
    }
    unionScopeSets(e) {
        if (!e) {
            throw g(dr);
        }
        let t = new Set;
        e.scopes.forEach((r)=>t.add(r.toLowerCase()));
        this.scopes.forEach((r)=>t.add(r.toLowerCase()));
        return t;
    }
    intersectingScopeSets(e) {
        if (!e) {
            throw g(dr);
        }
        if (!e.containsOnlyOIDCScopes()) {
            e.removeOIDCScopes();
        }
        let t = this.unionScopeSets(e);
        let r = e.getScopeCount();
        let n = this.getScopeCount();
        return t.size < n + r;
    }
    getScopeCount() {
        return this.scopes.size;
    }
    asArray() {
        let e = [];
        this.scopes.forEach((t)=>e.push(t));
        return e;
    }
    printScopes() {
        if (this.scopes) {
            return this.asArray().join(" ");
        }
        return f.EMPTY_STRING;
    }
    printScopesLowerCase() {
        return this.printScopes().toLowerCase();
    }
}
function kn(e, t) {
    if (!e) {
        throw g(tn);
    }
    try {
        let r = t(e);
        return JSON.parse(r);
    } catch (r) {
        throw g(ar);
    }
}
function st(e) {
    if (!e) {
        throw g(ar);
    }
    let t = e.split(pt.CLIENT_INFO_SEPARATOR, 2);
    return {
        uid: t[0],
        utid: t.length < 2 ? f.EMPTY_STRING : t[1]
    };
}
function Gd(e, t) {
    return !!e && !!t && e === t.split(".")[1];
}
function po(e, localAccountId, r, n) {
    if (n) {
        let { oid, sub, tid, name, tfp, acr, preferred_username, upn, login_hint } = n;
        let p = tid || tfp || acr || "";
        return {
            tenantId: p,
            localAccountId: oid || sub || "",
            name,
            username: preferred_username || upn || "",
            loginHint: login_hint,
            isHomeTenant: Gd(p, e)
        };
    } else {
        return {
            tenantId: r,
            localAccountId,
            username: "",
            isHomeTenant: Gd(r, e)
        };
    }
}
function wi(e, t, r, idToken) {
    let o = e;
    if (t) {
        let { isHomeTenant, ...rest } = t;
        o = {
            ...e,
            ...rest
        };
    }
    if (r) {
        let { isHomeTenant, ...rest } = po(e.homeAccountId, e.localAccountId, e.tenantId, r);
        o = {
            ...o,
            ...rest,
            idTokenClaims: r,
            idToken
        };
        return o;
    }
    return o;
}
const Ge = {
    Default: 0,
    Adfs: 1,
    Dsts: 2,
    Ciam: 3
};
function vi(e) {
    if (e) {
        return e.tid || e.tfp || e.acr || null;
    }
    return null;
}
const Ae = {
    AAD: "AAD",
    OIDC: "OIDC",
    EAR: "EAR"
};
class fe {
    static getAccountInfo(e) {
        return {
            homeAccountId: e.homeAccountId,
            environment: e.environment,
            tenantId: e.realm,
            username: e.username,
            localAccountId: e.localAccountId,
            loginHint: e.loginHint,
            name: e.name,
            nativeAccountId: e.nativeAccountId,
            authorityType: e.authorityType,
            tenantProfiles: new Map((e.tenantProfiles || []).map((t)=>[
                    t.tenantId,
                    t
                ])),
            dataBoundary: e.dataBoundary
        };
    }
    isSingleTenant() {
        return !this.tenantProfiles;
    }
    static createAccount(e, t, r) {
        let n = new fe;
        if (t.authorityType === Ge.Adfs) {
            n.authorityType = ir.ADFS_ACCOUNT_TYPE;
        } else if (t.protocolMode === Ae.OIDC) {
            n.authorityType = ir.GENERIC_ACCOUNT_TYPE;
        } else {
            n.authorityType = ir.MSSTS_ACCOUNT_TYPE;
        }
        let o;
        if (e.clientInfo && r) {
            o = kn(e.clientInfo, r);
            if (o.xms_tdbr) {
                n.dataBoundary = o.xms_tdbr === "EU" ? "EU" : "None";
            }
        }
        n.clientInfo = e.clientInfo;
        n.homeAccountId = e.homeAccountId;
        n.nativeAccountId = e.nativeAccountId;
        let i = e.environment || t && t.getPreferredCache();
        if (!i) {
            throw g(Lt);
        }
        n.environment = i;
        n.realm = o?.utid || vi(e.idTokenClaims) || "";
        n.localAccountId = o?.uid || e.idTokenClaims?.oid || e.idTokenClaims?.sub || "";
        let s = e.idTokenClaims?.preferred_username || e.idTokenClaims?.upn;
        let a = e.idTokenClaims?.emails ? e.idTokenClaims.emails[0] : null;
        n.username = s || a || "";
        n.loginHint = e.idTokenClaims?.login_hint;
        n.name = e.idTokenClaims?.name || "";
        n.cloudGraphHostName = e.cloudGraphHostName;
        n.msGraphHost = e.msGraphHost;
        if (e.tenantProfiles) {
            n.tenantProfiles = e.tenantProfiles;
        } else {
            let c = po(e.homeAccountId, n.localAccountId, n.realm, e.idTokenClaims);
            n.tenantProfiles = [
                c
            ];
        }
        return n;
    }
    static createFromAccountInfo(e, t, r) {
        let n = new fe;
        n.authorityType = e.authorityType || ir.GENERIC_ACCOUNT_TYPE;
        n.homeAccountId = e.homeAccountId;
        n.localAccountId = e.localAccountId;
        n.nativeAccountId = e.nativeAccountId;
        n.realm = e.tenantId;
        n.environment = e.environment;
        n.username = e.username;
        n.name = e.name;
        n.loginHint = e.loginHint;
        n.cloudGraphHostName = t;
        n.msGraphHost = r;
        n.tenantProfiles = Array.from(e.tenantProfiles?.values() || []);
        n.dataBoundary = e.dataBoundary;
        return n;
    }
    static generateHomeAccountId(e, t, r, n, o) {
        if (!(t === Ge.Adfs || t === Ge.Dsts)) {
            if (e) {
                try {
                    let i = kn(e, n.base64Decode);
                    if (i.uid && i.utid) {
                        return `${i.uid}.${i.utid}`;
                    }
                } catch (i) {}
            }
            r.warning("No client info in response");
        }
        return o?.sub || "";
    }
    static isAccountEntity(e) {
        if (!e) {
            return false;
        }
        return e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("realm") && e.hasOwnProperty("localAccountId") && e.hasOwnProperty("username") && e.hasOwnProperty("authorityType");
    }
    static accountInfoIsEqual(e, t, r) {
        if (!e || !t) {
            return false;
        }
        let n = true;
        if (r) {
            let o = e.idTokenClaims || {};
            let i = t.idTokenClaims || {};
            n = o.iat === i.iat && o.nonce === i.nonce;
        }
        return e.homeAccountId === t.homeAccountId && e.localAccountId === t.localAccountId && e.username === t.username && e.tenantId === t.tenantId && e.loginHint === t.loginHint && e.environment === t.environment && e.nativeAccountId === t.nativeAccountId && n;
    }
}
function yt(e, base64Decode) {
    let r = mg(e);
    try {
        let n = base64Decode(r);
        return JSON.parse(n);
    } catch (n) {
        throw g(cr);
    }
}
function qd(e) {
    if (!e.signin_state) {
        return false;
    }
    let t = [
        "kmsi",
        "dvc_dmjd"
    ];
    return e.signin_state.some((n)=>t.includes(n.trim().toLowerCase()));
}
function mg(e) {
    if (!e) {
        throw g(rn);
    }
    let r = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(e);
    if (!r || r.length < 4) {
        throw g(cr);
    }
    return r[2];
}
function ki(e, maxAge) {
    if (maxAge === 0 || Date.now() - 300000 > e + maxAge) {
        throw g(an);
    }
}
function pg(e) {
    if (e.startsWith("#/")) {
        return e.substring(2);
    } else if (e.startsWith("#") || e.startsWith("?")) {
        return e.substring(1);
    }
    return e;
}
function ka(e) {
    if (!e || e.indexOf("=") < 0) {
        return null;
    }
    try {
        let t = pg(e);
        let r = Object.fromEntries(new URLSearchParams(t));
        if (r.code || r.ear_jwe || r.error || r.error_description || r.state) {
            return r;
        }
    } catch (t) {
        throw g(on);
    }
    return null;
}
function pe(e, t = true, r) {
    let n = [];
    e.forEach((o, i)=>{
        if (!t && r && i in r) {
            n.push(`${i}=${o}`);
        } else {
            n.push(`${i}=${encodeURIComponent(o)}`);
        }
    });
    return n.join("&");
}
class x {
    get urlString() {
        return this._urlString;
    }
    constructor(e){
        this._urlString = e;
        if (!this._urlString) {
            throw V(fr);
        }
        if (!e.includes("#")) {
            this._urlString = x.canonicalizeUri(e);
        }
    }
    static canonicalizeUri(e) {
        if (e) {
            let t = e.toLowerCase();
            if (re.endsWith(t, "?")) {
                t = t.slice(0, -1);
            } else if (re.endsWith(t, "?/")) {
                t = t.slice(0, -2);
            }
            if (!re.endsWith(t, "/")) {
                t += "/";
            }
            return t;
        }
        return e;
    }
    validateAsUri() {
        let e;
        try {
            e = this.getUrlComponents();
        } catch (t) {
            throw V(gt);
        }
        if (!e.HostNameAndPort || !e.PathSegments) {
            throw V(gt);
        }
        if (!e.Protocol || e.Protocol.toLowerCase() !== "https:") {
            throw V(An);
        }
    }
    static appendQueryString(e, t) {
        if (!t) {
            return e;
        }
        if (e.indexOf("?") < 0) {
            return `${e}?${t}`;
        }
        return `${e}&${t}`;
    }
    static removeHashFromUrl(e) {
        return x.canonicalizeUri(e.split("#")[0]);
    }
    replaceTenantPath(e) {
        let t = this.getUrlComponents();
        let t_PathSegments = t.PathSegments;
        if (e && t_PathSegments.length !== 0 && (t_PathSegments[0] === be.COMMON || t_PathSegments[0] === be.ORGANIZATIONS)) {
            t_PathSegments[0] = e;
        }
        return x.constructAuthorityUriFromObject(t);
    }
    getUrlComponents() {
        let e = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        let t = this.urlString.match(e);
        if (!t) {
            throw V(gt);
        }
        let r = {
            Protocol: t[1],
            HostNameAndPort: t[4],
            AbsolutePath: t[5],
            QueryString: t[7]
        };
        let n = r.AbsolutePath.split("/");
        n = n.filter((o)=>o && o.length > 0);
        r.PathSegments = n;
        if (r.QueryString && r.QueryString.endsWith("/")) {
            r.QueryString = r.QueryString.substring(0, r.QueryString.length - 1);
        }
        return r;
    }
    static getDomainFromUrl(e) {
        let t = RegExp("^([^:/?#]+://)?([^/?#]*)");
        let r = e.match(t);
        if (!r) {
            throw V(gt);
        }
        return r[2];
    }
    static getAbsoluteUrl(e, t) {
        if (e[0] === f.FORWARD_SLASH) {
            let n = new x(t).getUrlComponents();
            return `${n.Protocol}//${n.HostNameAndPort}${e}`;
        }
        return e;
    }
    static constructAuthorityUriFromObject(e) {
        return new x(`${e.Protocol}//${e.HostNameAndPort}/${e.PathSegments.join("/")}`);
    }
    static hashContainsKnownProperties(e) {
        return !!ka(e);
    }
}
const jd = {
    endpointMetadata: {
        "login.microsoftonline.com": {
            token_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/token",
            jwks_uri: "https://login.microsoftonline.com/{tenantid}/discovery/v2.0/keys",
            issuer: "https://login.microsoftonline.com/{tenantid}/v2.0",
            authorization_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize",
            end_session_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/logout"
        },
        "login.chinacloudapi.cn": {
            token_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/token",
            jwks_uri: "https://login.chinacloudapi.cn/{tenantid}/discovery/v2.0/keys",
            issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0",
            authorization_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/authorize",
            end_session_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/logout"
        },
        "login.microsoftonline.us": {
            token_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/token",
            jwks_uri: "https://login.microsoftonline.us/{tenantid}/discovery/v2.0/keys",
            issuer: "https://login.microsoftonline.us/{tenantid}/v2.0",
            authorization_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/authorize",
            end_session_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/logout"
        }
    },
    instanceDiscoveryMetadata: {
        metadata: [
            {
                preferred_network: "login.microsoftonline.com",
                preferred_cache: "login.windows.net",
                aliases: [
                    "login.microsoftonline.com",
                    "login.windows.net",
                    "login.microsoft.com",
                    "sts.windows.net"
                ]
            },
            {
                preferred_network: "login.partner.microsoftonline.cn",
                preferred_cache: "login.partner.microsoftonline.cn",
                aliases: [
                    "login.partner.microsoftonline.cn",
                    "login.chinacloudapi.cn"
                ]
            },
            {
                preferred_network: "login.microsoftonline.de",
                preferred_cache: "login.microsoftonline.de",
                aliases: [
                    "login.microsoftonline.de"
                ]
            },
            {
                preferred_network: "login.microsoftonline.us",
                preferred_cache: "login.microsoftonline.us",
                aliases: [
                    "login.microsoftonline.us",
                    "login.usgovcloudapi.net"
                ]
            },
            {
                preferred_network: "login-us.microsoftonline.com",
                preferred_cache: "login-us.microsoftonline.com",
                aliases: [
                    "login-us.microsoftonline.com"
                ]
            }
        ]
    }
};
const { endpointMetadata, instanceDiscoveryMetadata } = jd;
const Oa = new Set;
instanceDiscoveryMetadata.metadata.forEach((e)=>{
    e.aliases.forEach((t)=>{
        Oa.add(t);
    });
});
function Yd(staticAuthorityOptions, commonLogger) {
    let r;
    let e_canonicalAuthority = staticAuthorityOptions.canonicalAuthority;
    if (e_canonicalAuthority) {
        let o = new x(e_canonicalAuthority).getUrlComponents().HostNameAndPort;
        r = Vd(o, staticAuthorityOptions.cloudDiscoveryMetadata?.metadata, Ce.CONFIG, commonLogger) || Vd(o, instanceDiscoveryMetadata.metadata, Ce.HARDCODED_VALUES, commonLogger) || staticAuthorityOptions.knownAuthorities;
    }
    return r || [];
}
function Vd(e, t, r, commonLogger) {
    commonLogger?.trace(`getAliasesFromMetadata called with source: ${r}`);
    if (e && t) {
        let o = go(t, e);
        if (o) {
            commonLogger?.trace(`getAliasesFromMetadata: found cloud discovery metadata in ${r}, returning aliases`);
            return o.aliases;
        } else {
            commonLogger?.trace(`getAliasesFromMetadata: did not find cloud discovery metadata in ${r}`);
        }
    }
    return null;
}
function Wd(hostnameAndPort) {
    return go(instanceDiscoveryMetadata.metadata, hostnameAndPort);
}
function go(e, t) {
    for (const n of e){
        if (n.aliases.includes(t)) {
            return n;
        }
    }
    return null;
}
const Na = "cache_quota_exceeded";
const bi = "cache_error_unknown";
const xa = {
    [Na]: "Exceeded cache storage capacity.",
    [bi]: "Unexpected error occurred when using cache storage."
};
class yo extends N {
    constructor(e, t){
        let r = t || (xa[e] ? xa[e] : xa[bi]);
        super(`${e}: ${r}`);
        Object.setPrototypeOf(this, yo.prototype);
        this.name = "CacheError";
        this.errorCode = e;
        this.errorMessage = r;
    }
}
function Qd(error) {
    if (!(error instanceof Error)) {
        return new yo(bi);
    }
    if (error.name === "QuotaExceededError" || error.name === "NS_ERROR_DOM_QUOTA_REACHED" || error.message.includes("exceeded the quota")) {
        return new yo(Na);
    } else {
        return new yo(error.name, error.message);
    }
}
class yr {
    constructor(e, t, r, n, o){
        this.clientId = e;
        this.cryptoImpl = t;
        this.commonLogger = r.clone(pi, version_1);
        this.staticAuthorityOptions = o;
        this.performanceClient = n;
    }
    getAllAccounts(e, t) {
        return this.buildTenantProfiles(this.getAccountsFilteredBy(e, t), t, e);
    }
    getAccountInfoFilteredBy(e, t) {
        if (Object.keys(e).length === 0 || Object.values(e).every((n)=>!n)) {
            this.commonLogger.warning("getAccountInfoFilteredBy: Account filter is empty or invalid, returning null");
            return null;
        }
        let r = this.getAllAccounts(e, t);
        if (r.length > 1) {
            return r.sort((o)=>{
                if (o.idTokenClaims) {
                    return -1;
                }
                return 1;
            })[0];
        } else if (r.length === 1) {
            return r[0];
        } else {
            return null;
        }
    }
    getBaseAccountInfo(e, t) {
        let r = this.getAccountsFilteredBy(e, t);
        if (r.length > 0) {
            return fe.getAccountInfo(r[0]);
        } else {
            return null;
        }
    }
    buildTenantProfiles(e, t, r) {
        return e.flatMap((n)=>this.getTenantProfilesFromAccountEntity(n, t, r?.tenantId, r));
    }
    getTenantedAccountInfoByFilter(e, t, r, n, o) {
        let i = null;
        let s;
        if (o) {
            if (!this.tenantProfileMatchesFilter(r, o)) {
                return null;
            }
        }
        let a = this.getIdToken(e, n, t, r.tenantId);
        if (a) {
            s = yt(a.secret, this.cryptoImpl.base64Decode);
            if (!this.idTokenClaimsMatchTenantProfileFilter(s, o)) {
                return null;
            }
        }
        i = wi(e, r, s, a?.secret);
        return i;
    }
    getTenantProfilesFromAccountEntity(e, t, r, n) {
        let o = fe.getAccountInfo(e);
        let i = o.tenantProfiles || new Map;
        let s = this.getTokenKeys();
        if (r) {
            let c = i.get(r);
            if (c) {
                i = new Map([
                    [
                        r,
                        c
                    ]
                ]);
            } else {
                return [];
            }
        }
        let a = [];
        i.forEach((c)=>{
            let l = this.getTenantedAccountInfoByFilter(o, s, c, t, n);
            if (l) {
                a.push(l);
            }
        });
        return a;
    }
    tenantProfileMatchesFilter(e, t) {
        if (!!t.localAccountId && !this.matchLocalAccountIdFromTenantProfile(e, t.localAccountId)) {
            return false;
        }
        if (!!t.name && e.name !== t.name) {
            return false;
        }
        if (t.isHomeTenant !== undefined && e.isHomeTenant !== t.isHomeTenant) {
            return false;
        }
        return true;
    }
    idTokenClaimsMatchTenantProfileFilter(e, t) {
        if (t) {
            if (!!t.localAccountId && !this.matchLocalAccountIdFromTokenClaims(e, t.localAccountId)) {
                return false;
            }
            if (!!t.loginHint && !this.matchLoginHintFromTokenClaims(e, t.loginHint)) {
                return false;
            }
            if (!!t.username && !this.matchUsername(e.preferred_username, t.username)) {
                return false;
            }
            if (!!t.name && !this.matchName(e, t.name)) {
                return false;
            }
            if (!!t.sid && !this.matchSid(e, t.sid)) {
                return false;
            }
        }
        return true;
    }
    async saveCacheRecord(e, t, r, n) {
        if (!e) {
            throw g(fn);
        }
        try {
            if (e.account) {
                await this.setAccount(e.account, t, r);
            }
            if (!!e.idToken && n?.idToken !== false) {
                await this.setIdTokenCredential(e.idToken, t, r);
            }
            if (!!e.accessToken && n?.accessToken !== false) {
                await this.saveAccessToken(e.accessToken, t, r);
            }
            if (!!e.refreshToken && n?.refreshToken !== false) {
                await this.setRefreshTokenCredential(e.refreshToken, t, r);
            }
            if (e.appMetadata) {
                this.setAppMetadata(e.appMetadata, t);
            }
        } catch (error) {
            this.commonLogger?.error("CacheManager.saveCacheRecord: failed");
            if (error instanceof N) {
                throw error;
            } else {
                throw Qd(error);
            }
        }
    }
    async saveAccessToken(e, t, r) {
        let n = {
            clientId: e.clientId,
            credentialType: e.credentialType,
            environment: e.environment,
            homeAccountId: e.homeAccountId,
            realm: e.realm,
            tokenType: e.tokenType,
            requestedClaimsHash: e.requestedClaimsHash
        };
        let o = this.getTokenKeys();
        let i = oe.fromString(e.target);
        o.accessToken.forEach((s)=>{
            if (!this.accessTokenKeyMatchesFilter(s, n, false)) {
                return;
            }
            let a = this.getAccessTokenCredential(s, t);
            if (a && this.credentialMatchesFilter(a, n)) {
                if (oe.fromString(a.target).intersectingScopeSets(i)) {
                    this.removeAccessToken(s, t);
                }
            }
        });
        await this.setAccessTokenCredential(e, t, r);
    }
    getAccountsFilteredBy(e, t) {
        let r = this.getAccountKeys();
        let n = [];
        r.forEach((o)=>{
            let i = this.getAccount(o, t);
            if (!i) {
                return;
            }
            if (!!e.homeAccountId && !this.matchHomeAccountId(i, e.homeAccountId)) {
                return;
            }
            if (!!e.username && !this.matchUsername(i.username, e.username)) {
                return;
            }
            if (!!e.environment && !this.matchEnvironment(i, e.environment)) {
                return;
            }
            if (!!e.realm && !this.matchRealm(i, e.realm)) {
                return;
            }
            if (!!e.nativeAccountId && !this.matchNativeAccountId(i, e.nativeAccountId)) {
                return;
            }
            if (!!e.authorityType && !this.matchAuthorityType(i, e.authorityType)) {
                return;
            }
            let s = {
                localAccountId: e?.localAccountId,
                name: e?.name
            };
            let a = i.tenantProfiles?.filter((c)=>this.tenantProfileMatchesFilter(c, s));
            if (a && a.length === 0) {
                return;
            }
            n.push(i);
        });
        return n;
    }
    credentialMatchesFilter(e, t) {
        if (!!t.clientId && !this.matchClientId(e, t.clientId)) {
            return false;
        }
        if (!!t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash)) {
            return false;
        }
        if (typeof t.homeAccountId === "string" && !this.matchHomeAccountId(e, t.homeAccountId)) {
            return false;
        }
        if (!!t.environment && !this.matchEnvironment(e, t.environment)) {
            return false;
        }
        if (!!t.realm && !this.matchRealm(e, t.realm)) {
            return false;
        }
        if (!!t.credentialType && !this.matchCredentialType(e, t.credentialType)) {
            return false;
        }
        if (!!t.familyId && !this.matchFamilyId(e, t.familyId)) {
            return false;
        }
        if (!!t.target && !this.matchTarget(e, t.target)) {
            return false;
        }
        if (t.requestedClaimsHash || e.requestedClaimsHash) {
            if (e.requestedClaimsHash !== t.requestedClaimsHash) {
                return false;
            }
        }
        if (e.credentialType === K.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
            if (!!t.tokenType && !this.matchTokenType(e, t.tokenType)) {
                return false;
            }
            if (t.tokenType === L.SSH) {
                if (t.keyId && !this.matchKeyId(e, t.keyId)) {
                    return false;
                }
            }
        }
        return true;
    }
    getAppMetadataFilteredBy(e) {
        let t = this.getKeys();
        let r = {};
        t.forEach((n)=>{
            if (!this.isAppMetadata(n)) {
                return;
            }
            let o = this.getAppMetadata(n);
            if (!o) {
                return;
            }
            if (!!e.environment && !this.matchEnvironment(o, e.environment)) {
                return;
            }
            if (!!e.clientId && !this.matchClientId(o, e.clientId)) {
                return;
            }
            r[n] = o;
        });
        return r;
    }
    getAuthorityMetadataByAlias(e) {
        let t = this.getAuthorityMetadataKeys();
        let r = null;
        t.forEach((n)=>{
            if (!this.isAuthorityMetadata(n) || n.indexOf(this.clientId) === -1) {
                return;
            }
            let o = this.getAuthorityMetadata(n);
            if (!o) {
                return;
            }
            if (o.aliases.indexOf(e) === -1) {
                return;
            }
            r = o;
        });
        return r;
    }
    removeAllAccounts(e) {
        this.getAllAccounts({}, e).forEach((r)=>{
            this.removeAccount(r, e);
        });
    }
    removeAccount(e, t) {
        this.removeAccountContext(e, t);
        let r = this.getAccountKeys();
        let n = (o)=>o.includes(e.homeAccountId) && o.includes(e.environment);
        r.filter(n).forEach((o)=>{
            this.removeItem(o, t);
            this.performanceClient.incrementFields({
                accountsRemoved: 1
            }, t);
        });
    }
    removeAccountContext(e, t) {
        let r = this.getTokenKeys();
        let n = (o)=>o.includes(e.homeAccountId) && o.includes(e.environment);
        r.idToken.filter(n).forEach((o)=>{
            this.removeIdToken(o, t);
        });
        r.accessToken.filter(n).forEach((o)=>{
            this.removeAccessToken(o, t);
        });
        r.refreshToken.filter(n).forEach((o)=>{
            this.removeRefreshToken(o, t);
        });
    }
    removeAccessToken(e, t) {
        let r = this.getAccessTokenCredential(e, t);
        this.removeItem(e, t);
        this.performanceClient.incrementFields({
            accessTokensRemoved: 1
        }, t);
        if (!r || r.credentialType.toLowerCase() !== K.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase() || r.tokenType !== L.POP) {
            return;
        }
        let r_keyId = r.keyId;
        if (r_keyId) {
            this.cryptoImpl.removeTokenBindingKey(r_keyId).catch(()=>{
                this.commonLogger.error(`Failed to remove token binding key ${r_keyId}`, t);
                this.performanceClient?.incrementFields({
                    removeTokenBindingKeyFailure: 1
                }, t);
            });
        }
    }
    removeAppMetadata(e) {
        this.getKeys().forEach((r)=>{
            if (this.isAppMetadata(r)) {
                this.removeItem(r, e);
            }
        });
        return true;
    }
    getIdToken(e, t, r, n, o) {
        this.commonLogger.trace("CacheManager - getIdToken called");
        let i = {
            homeAccountId: e.homeAccountId,
            environment: e.environment,
            credentialType: K.ID_TOKEN,
            clientId: this.clientId,
            realm: n
        };
        let s = this.getIdTokensByFilter(i, t, r);
        let s_size = s.size;
        if (s_size < 1) {
            this.commonLogger.info("CacheManager:getIdToken - No token found");
            return null;
        } else if (s_size > 1) {
            let c = s;
            if (!n) {
                let l = new Map;
                s.forEach((u, m)=>{
                    if (u.realm === e.tenantId) {
                        l.set(m, u);
                    }
                });
                let d = l.size;
                if (d < 1) {
                    this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result");
                    return s.values().next().value;
                } else if (d === 1) {
                    this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile");
                    return l.values().next().value;
                } else {
                    c = l;
                }
            }
            this.commonLogger.info("CacheManager:getIdToken - Multiple matching ID tokens found, clearing them");
            c.forEach((l, d)=>{
                this.removeIdToken(d, t);
            });
            if (o && t) {
                o.addFields({
                    multiMatchedID: s.size
                }, t);
            }
            return null;
        }
        this.commonLogger.info("CacheManager:getIdToken - Returning ID token");
        return s.values().next().value;
    }
    getIdTokensByFilter(e, t, r) {
        let n = r && r.idToken || this.getTokenKeys().idToken;
        let o = new Map;
        n.forEach((i)=>{
            if (!this.idTokenKeyMatchesFilter(i, {
                clientId: this.clientId,
                ...e
            })) {
                return;
            }
            let s = this.getIdTokenCredential(i, t);
            if (s && this.credentialMatchesFilter(s, e)) {
                o.set(i, s);
            }
        });
        return o;
    }
    idTokenKeyMatchesFilter(e, t) {
        let r = e.toLowerCase();
        if (t.clientId && r.indexOf(t.clientId.toLowerCase()) === -1) {
            return false;
        }
        if (t.homeAccountId && r.indexOf(t.homeAccountId.toLowerCase()) === -1) {
            return false;
        }
        return true;
    }
    removeIdToken(e, t) {
        this.removeItem(e, t);
    }
    removeRefreshToken(e, t) {
        this.removeItem(e, t);
    }
    getAccessToken(e, t, r, n) {
        let t_correlationId = t.correlationId;
        this.commonLogger.trace("CacheManager - getAccessToken called", t_correlationId);
        let i = oe.createSearchScopes(t.scopes);
        let s = t.authenticationScheme || L.BEARER;
        let credentialType = s && s.toLowerCase() !== L.BEARER.toLowerCase() ? K.ACCESS_TOKEN_WITH_AUTH_SCHEME : K.ACCESS_TOKEN;
        let c = {
            homeAccountId: e.homeAccountId,
            environment: e.environment,
            credentialType,
            clientId: this.clientId,
            realm: n || e.tenantId,
            target: i,
            tokenType: s,
            keyId: t.sshKid,
            requestedClaimsHash: t.requestedClaimsHash
        };
        let l = r && r.accessToken || this.getTokenKeys().accessToken;
        let d = [];
        l.forEach((m)=>{
            if (this.accessTokenKeyMatchesFilter(m, c, true)) {
                let p = this.getAccessTokenCredential(m, t_correlationId);
                if (p && this.credentialMatchesFilter(p, c)) {
                    d.push(p);
                }
            }
        });
        let d_length = d.length;
        if (d_length < 1) {
            this.commonLogger.info("CacheManager:getAccessToken - No token found", t_correlationId);
            return null;
        } else if (d_length > 1) {
            this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them", t_correlationId);
            d.forEach((m)=>{
                this.removeAccessToken(this.generateCredentialKey(m), t_correlationId);
            });
            this.performanceClient.addFields({
                multiMatchedAT: d.length
            }, t_correlationId);
            return null;
        }
        this.commonLogger.info("CacheManager:getAccessToken - Returning access token", t_correlationId);
        return d[0];
    }
    accessTokenKeyMatchesFilter(e, t, r) {
        let n = e.toLowerCase();
        if (t.clientId && n.indexOf(t.clientId.toLowerCase()) === -1) {
            return false;
        }
        if (t.homeAccountId && n.indexOf(t.homeAccountId.toLowerCase()) === -1) {
            return false;
        }
        if (t.realm && n.indexOf(t.realm.toLowerCase()) === -1) {
            return false;
        }
        if (t.requestedClaimsHash && n.indexOf(t.requestedClaimsHash.toLowerCase()) === -1) {
            return false;
        }
        if (t.target) {
            let o = t.target.asArray();
            for(let i = 0; i < o.length; i++){
                if (r && !n.includes(o[i].toLowerCase())) {
                    return false;
                } else if (!r && n.includes(o[i].toLowerCase())) {
                    return true;
                }
            }
        }
        return true;
    }
    getAccessTokensByFilter(e, t) {
        let r = this.getTokenKeys();
        let n = [];
        r.accessToken.forEach((o)=>{
            if (!this.accessTokenKeyMatchesFilter(o, e, true)) {
                return;
            }
            let i = this.getAccessTokenCredential(o, t);
            if (i && this.credentialMatchesFilter(i, e)) {
                n.push(i);
            }
        });
        return n;
    }
    getRefreshToken(e, t, r, n, o) {
        this.commonLogger.trace("CacheManager - getRefreshToken called");
        let familyId = t ? xt : undefined;
        let s = {
            homeAccountId: e.homeAccountId,
            environment: e.environment,
            credentialType: K.REFRESH_TOKEN,
            clientId: this.clientId,
            familyId
        };
        let a = n && n.refreshToken || this.getTokenKeys().refreshToken;
        let c = [];
        a.forEach((d)=>{
            if (this.refreshTokenKeyMatchesFilter(d, s)) {
                let u = this.getRefreshTokenCredential(d, r);
                if (u && this.credentialMatchesFilter(u, s)) {
                    c.push(u);
                }
            }
        });
        let c_length = c.length;
        if (c_length < 1) {
            this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found.");
            return null;
        }
        if (c_length > 1 && o && r) {
            o.addFields({
                multiMatchedRT: c_length
            }, r);
        }
        this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token");
        return c[0];
    }
    refreshTokenKeyMatchesFilter(e, t) {
        let r = e.toLowerCase();
        if (t.familyId && r.indexOf(t.familyId.toLowerCase()) === -1) {
            return false;
        }
        if (!t.familyId && t.clientId && r.indexOf(t.clientId.toLowerCase()) === -1) {
            return false;
        }
        if (t.homeAccountId && r.indexOf(t.homeAccountId.toLowerCase()) === -1) {
            return false;
        }
        return true;
    }
    readAppMetadataFromCache(e) {
        let t = {
            environment: e,
            clientId: this.clientId
        };
        let r = this.getAppMetadataFilteredBy(t);
        let n = Object.keys(r).map((i)=>r[i]);
        let n_length = n.length;
        if (n_length < 1) {
            return null;
        } else if (n_length > 1) {
            throw g(ln);
        }
        return n[0];
    }
    isAppMetadataFOCI(e) {
        let t = this.readAppMetadataFromCache(e);
        return !!(t && t.familyId === xt);
    }
    matchHomeAccountId(e, t) {
        return typeof e.homeAccountId === "string" && t === e.homeAccountId;
    }
    matchLocalAccountIdFromTokenClaims(e, t) {
        let r = e.oid || e.sub;
        return t === r;
    }
    matchLocalAccountIdFromTenantProfile(e, t) {
        return e.localAccountId === t;
    }
    matchName(e, t) {
        return t.toLowerCase() === e.name?.toLowerCase();
    }
    matchUsername(e, t) {
        return !!(e && typeof e === "string" && t?.toLowerCase() === e.toLowerCase());
    }
    matchUserAssertionHash(e, t) {
        return !!(e.userAssertionHash && t === e.userAssertionHash);
    }
    matchEnvironment(e, t) {
        if (this.staticAuthorityOptions) {
            let n = Yd(this.staticAuthorityOptions, this.commonLogger);
            if (n.includes(t) && n.includes(e.environment)) {
                return true;
            }
        }
        let r = this.getAuthorityMetadataByAlias(t);
        if (r && r.aliases.indexOf(e.environment) > -1) {
            return true;
        }
        return false;
    }
    matchCredentialType(e, t) {
        return e.credentialType && t.toLowerCase() === e.credentialType.toLowerCase();
    }
    matchClientId(e, t) {
        return !!(e.clientId && t === e.clientId);
    }
    matchFamilyId(e, t) {
        return !!(e.familyId && t === e.familyId);
    }
    matchRealm(e, t) {
        return e.realm?.toLowerCase() === t.toLowerCase();
    }
    matchNativeAccountId(e, t) {
        return !!(e.nativeAccountId && t === e.nativeAccountId);
    }
    matchLoginHintFromTokenClaims(e, t) {
        if (e.login_hint === t) {
            return true;
        }
        if (e.preferred_username === t) {
            return true;
        }
        if (e.upn === t) {
            return true;
        }
        return false;
    }
    matchSid(e, t) {
        return e.sid === t;
    }
    matchAuthorityType(e, t) {
        return !!(e.authorityType && t.toLowerCase() === e.authorityType.toLowerCase());
    }
    matchTarget(e, t) {
        if (e.credentialType !== K.ACCESS_TOKEN && e.credentialType !== K.ACCESS_TOKEN_WITH_AUTH_SCHEME || !e.target) {
            return false;
        }
        return oe.fromString(e.target).containsScopeSet(t);
    }
    matchTokenType(e, t) {
        return !!(e.tokenType && e.tokenType === t);
    }
    matchKeyId(e, t) {
        return !!(e.keyId && e.keyId === t);
    }
    isAppMetadata(e) {
        return e.indexOf(ro) !== -1;
    }
    isAuthorityMetadata(e) {
        return e.indexOf(Zr.CACHE_KEY) !== -1;
    }
    generateAuthorityMetadataCacheKey(e) {
        return `${Zr.CACHE_KEY}-${this.clientId}-${e}`;
    }
    static toObject(e, t) {
        for(let r in t){
            e[r] = t[r];
        }
        return e;
    }
}
class Pi extends yr {
    async setAccount() {
        throw g(M);
    }
    getAccount() {
        throw g(M);
    }
    async setIdTokenCredential() {
        throw g(M);
    }
    getIdTokenCredential() {
        throw g(M);
    }
    async setAccessTokenCredential() {
        throw g(M);
    }
    getAccessTokenCredential() {
        throw g(M);
    }
    async setRefreshTokenCredential() {
        throw g(M);
    }
    getRefreshTokenCredential() {
        throw g(M);
    }
    setAppMetadata() {
        throw g(M);
    }
    getAppMetadata() {
        throw g(M);
    }
    setServerTelemetry() {
        throw g(M);
    }
    getServerTelemetry() {
        throw g(M);
    }
    setAuthorityMetadata() {
        throw g(M);
    }
    getAuthorityMetadata() {
        throw g(M);
    }
    getAuthorityMetadataKeys() {
        throw g(M);
    }
    setThrottlingCache() {
        throw g(M);
    }
    getThrottlingCache() {
        throw g(M);
    }
    removeItem() {
        throw g(M);
    }
    getKeys() {
        throw g(M);
    }
    getAccountKeys() {
        throw g(M);
    }
    getTokenKeys() {
        throw g(M);
    }
    generateCredentialKey() {
        throw g(M);
    }
    generateAccountKey() {
        throw g(M);
    }
}
const h = {
    AcquireTokenByCode: "acquireTokenByCode",
    AcquireTokenByRefreshToken: "acquireTokenByRefreshToken",
    AcquireTokenSilent: "acquireTokenSilent",
    AcquireTokenSilentAsync: "acquireTokenSilentAsync",
    AcquireTokenPopup: "acquireTokenPopup",
    AcquireTokenPreRedirect: "acquireTokenPreRedirect",
    AcquireTokenRedirect: "acquireTokenRedirect",
    CryptoOptsGetPublicKeyThumbprint: "cryptoOptsGetPublicKeyThumbprint",
    CryptoOptsSignJwt: "cryptoOptsSignJwt",
    SilentCacheClientAcquireToken: "silentCacheClientAcquireToken",
    SilentIframeClientAcquireToken: "silentIframeClientAcquireToken",
    AwaitConcurrentIframe: "awaitConcurrentIframe",
    SilentRefreshClientAcquireToken: "silentRefreshClientAcquireToken",
    SsoSilent: "ssoSilent",
    StandardInteractionClientGetDiscoveredAuthority: "standardInteractionClientGetDiscoveredAuthority",
    FetchAccountIdWithNativeBroker: "fetchAccountIdWithNativeBroker",
    NativeInteractionClientAcquireToken: "nativeInteractionClientAcquireToken",
    BaseClientCreateTokenRequestHeaders: "baseClientCreateTokenRequestHeaders",
    NetworkClientSendPostRequestAsync: "networkClientSendPostRequestAsync",
    RefreshTokenClientExecutePostToTokenEndpoint: "refreshTokenClientExecutePostToTokenEndpoint",
    AuthorizationCodeClientExecutePostToTokenEndpoint: "authorizationCodeClientExecutePostToTokenEndpoint",
    BrokerHandhshake: "brokerHandshake",
    AcquireTokenByRefreshTokenInBroker: "acquireTokenByRefreshTokenInBroker",
    AcquireTokenByBroker: "acquireTokenByBroker",
    RefreshTokenClientExecuteTokenRequest: "refreshTokenClientExecuteTokenRequest",
    RefreshTokenClientAcquireToken: "refreshTokenClientAcquireToken",
    RefreshTokenClientAcquireTokenWithCachedRefreshToken: "refreshTokenClientAcquireTokenWithCachedRefreshToken",
    RefreshTokenClientAcquireTokenByRefreshToken: "refreshTokenClientAcquireTokenByRefreshToken",
    RefreshTokenClientCreateTokenRequestBody: "refreshTokenClientCreateTokenRequestBody",
    AcquireTokenFromCache: "acquireTokenFromCache",
    SilentFlowClientAcquireCachedToken: "silentFlowClientAcquireCachedToken",
    SilentFlowClientGenerateResultFromCacheRecord: "silentFlowClientGenerateResultFromCacheRecord",
    AcquireTokenBySilentIframe: "acquireTokenBySilentIframe",
    InitializeBaseRequest: "initializeBaseRequest",
    InitializeSilentRequest: "initializeSilentRequest",
    InitializeClientApplication: "initializeClientApplication",
    InitializeCache: "initializeCache",
    SilentIframeClientTokenHelper: "silentIframeClientTokenHelper",
    SilentHandlerInitiateAuthRequest: "silentHandlerInitiateAuthRequest",
    SilentHandlerMonitorIframeForHash: "silentHandlerMonitorIframeForHash",
    SilentHandlerLoadFrame: "silentHandlerLoadFrame",
    SilentHandlerLoadFrameSync: "silentHandlerLoadFrameSync",
    StandardInteractionClientCreateAuthCodeClient: "standardInteractionClientCreateAuthCodeClient",
    StandardInteractionClientGetClientConfiguration: "standardInteractionClientGetClientConfiguration",
    StandardInteractionClientInitializeAuthorizationRequest: "standardInteractionClientInitializeAuthorizationRequest",
    GetAuthCodeUrl: "getAuthCodeUrl",
    GetStandardParams: "getStandardParams",
    HandleCodeResponseFromServer: "handleCodeResponseFromServer",
    HandleCodeResponse: "handleCodeResponse",
    HandleResponseEar: "handleResponseEar",
    HandleResponsePlatformBroker: "handleResponsePlatformBroker",
    HandleResponseCode: "handleResponseCode",
    UpdateTokenEndpointAuthority: "updateTokenEndpointAuthority",
    AuthClientAcquireToken: "authClientAcquireToken",
    AuthClientExecuteTokenRequest: "authClientExecuteTokenRequest",
    AuthClientCreateTokenRequestBody: "authClientCreateTokenRequestBody",
    PopTokenGenerateCnf: "popTokenGenerateCnf",
    PopTokenGenerateKid: "popTokenGenerateKid",
    HandleServerTokenResponse: "handleServerTokenResponse",
    DeserializeResponse: "deserializeResponse",
    AuthorityFactoryCreateDiscoveredInstance: "authorityFactoryCreateDiscoveredInstance",
    AuthorityResolveEndpointsAsync: "authorityResolveEndpointsAsync",
    AuthorityResolveEndpointsFromLocalSources: "authorityResolveEndpointsFromLocalSources",
    AuthorityGetCloudDiscoveryMetadataFromNetwork: "authorityGetCloudDiscoveryMetadataFromNetwork",
    AuthorityUpdateCloudDiscoveryMetadata: "authorityUpdateCloudDiscoveryMetadata",
    AuthorityGetEndpointMetadataFromNetwork: "authorityGetEndpointMetadataFromNetwork",
    AuthorityUpdateEndpointMetadata: "authorityUpdateEndpointMetadata",
    AuthorityUpdateMetadataWithRegionalInformation: "authorityUpdateMetadataWithRegionalInformation",
    RegionDiscoveryDetectRegion: "regionDiscoveryDetectRegion",
    RegionDiscoveryGetRegionFromIMDS: "regionDiscoveryGetRegionFromIMDS",
    RegionDiscoveryGetCurrentVersion: "regionDiscoveryGetCurrentVersion",
    AcquireTokenByCodeAsync: "acquireTokenByCodeAsync",
    GetEndpointMetadataFromNetwork: "getEndpointMetadataFromNetwork",
    GetCloudDiscoveryMetadataFromNetworkMeasurement: "getCloudDiscoveryMetadataFromNetworkMeasurement",
    HandleRedirectPromiseMeasurement: "handleRedirectPromise",
    HandleNativeRedirectPromiseMeasurement: "handleNativeRedirectPromise",
    UpdateCloudDiscoveryMetadataMeasurement: "updateCloudDiscoveryMetadataMeasurement",
    UsernamePasswordClientAcquireToken: "usernamePasswordClientAcquireToken",
    NativeMessageHandlerHandshake: "nativeMessageHandlerHandshake",
    NativeGenerateAuthResult: "nativeGenerateAuthResult",
    RemoveHiddenIframe: "removeHiddenIframe",
    ClearTokensAndKeysWithClaims: "clearTokensAndKeysWithClaims",
    CacheManagerGetRefreshToken: "cacheManagerGetRefreshToken",
    ImportExistingCache: "importExistingCache",
    SetUserData: "setUserData",
    LocalStorageUpdated: "localStorageUpdated",
    GeneratePkceCodes: "generatePkceCodes",
    GenerateCodeVerifier: "generateCodeVerifier",
    GenerateCodeChallengeFromVerifier: "generateCodeChallengeFromVerifier",
    Sha256Digest: "sha256Digest",
    GetRandomValues: "getRandomValues",
    GenerateHKDF: "generateHKDF",
    GenerateBaseKey: "generateBaseKey",
    Base64Decode: "base64Decode",
    UrlEncodeArr: "urlEncodeArr",
    Encrypt: "encrypt",
    Decrypt: "decrypt",
    GenerateEarKey: "generateEarKey",
    DecryptEarResponse: "decryptEarResponse"
};
const hb = new Map([
    [
        h.AcquireTokenByCode,
        "ATByCode"
    ],
    [
        h.AcquireTokenByRefreshToken,
        "ATByRT"
    ],
    [
        h.AcquireTokenSilent,
        "ATS"
    ],
    [
        h.AcquireTokenSilentAsync,
        "ATSAsync"
    ],
    [
        h.AcquireTokenPopup,
        "ATPopup"
    ],
    [
        h.AcquireTokenRedirect,
        "ATRedirect"
    ],
    [
        h.CryptoOptsGetPublicKeyThumbprint,
        "CryptoGetPKThumb"
    ],
    [
        h.CryptoOptsSignJwt,
        "CryptoSignJwt"
    ],
    [
        h.SilentCacheClientAcquireToken,
        "SltCacheClientAT"
    ],
    [
        h.SilentIframeClientAcquireToken,
        "SltIframeClientAT"
    ],
    [
        h.SilentRefreshClientAcquireToken,
        "SltRClientAT"
    ],
    [
        h.SsoSilent,
        "SsoSlt"
    ],
    [
        h.StandardInteractionClientGetDiscoveredAuthority,
        "StdIntClientGetDiscAuth"
    ],
    [
        h.FetchAccountIdWithNativeBroker,
        "FetchAccIdWithNtvBroker"
    ],
    [
        h.NativeInteractionClientAcquireToken,
        "NtvIntClientAT"
    ],
    [
        h.BaseClientCreateTokenRequestHeaders,
        "BaseClientCreateTReqHead"
    ],
    [
        h.NetworkClientSendPostRequestAsync,
        "NetClientSendPost"
    ],
    [
        h.RefreshTokenClientExecutePostToTokenEndpoint,
        "RTClientExecPost"
    ],
    [
        h.AuthorizationCodeClientExecutePostToTokenEndpoint,
        "AuthCodeClientExecPost"
    ],
    [
        h.BrokerHandhshake,
        "BrokerHandshake"
    ],
    [
        h.AcquireTokenByRefreshTokenInBroker,
        "ATByRTInBroker"
    ],
    [
        h.AcquireTokenByBroker,
        "ATByBroker"
    ],
    [
        h.RefreshTokenClientExecuteTokenRequest,
        "RTClientExecTReq"
    ],
    [
        h.RefreshTokenClientAcquireToken,
        "RTClientAT"
    ],
    [
        h.RefreshTokenClientAcquireTokenWithCachedRefreshToken,
        "RTClientATWithCachedRT"
    ],
    [
        h.RefreshTokenClientAcquireTokenByRefreshToken,
        "RTClientATByRT"
    ],
    [
        h.RefreshTokenClientCreateTokenRequestBody,
        "RTClientCreateTReqBody"
    ],
    [
        h.AcquireTokenFromCache,
        "ATFromCache"
    ],
    [
        h.SilentFlowClientAcquireCachedToken,
        "SltFlowClientATCached"
    ],
    [
        h.SilentFlowClientGenerateResultFromCacheRecord,
        "SltFlowClientGenResFromCache"
    ],
    [
        h.AcquireTokenBySilentIframe,
        "ATBySltIframe"
    ],
    [
        h.InitializeBaseRequest,
        "InitBaseReq"
    ],
    [
        h.InitializeSilentRequest,
        "InitSltReq"
    ],
    [
        h.InitializeClientApplication,
        "InitClientApplication"
    ],
    [
        h.InitializeCache,
        "InitCache"
    ],
    [
        h.ImportExistingCache,
        "importCache"
    ],
    [
        h.SetUserData,
        "setUserData"
    ],
    [
        h.LocalStorageUpdated,
        "localStorageUpdated"
    ],
    [
        h.SilentIframeClientTokenHelper,
        "SIClientTHelper"
    ],
    [
        h.SilentHandlerInitiateAuthRequest,
        "SHandlerInitAuthReq"
    ],
    [
        h.SilentHandlerMonitorIframeForHash,
        "SltHandlerMonitorIframeForHash"
    ],
    [
        h.SilentHandlerLoadFrame,
        "SHandlerLoadFrame"
    ],
    [
        h.SilentHandlerLoadFrameSync,
        "SHandlerLoadFrameSync"
    ],
    [
        h.StandardInteractionClientCreateAuthCodeClient,
        "StdIntClientCreateAuthCodeClient"
    ],
    [
        h.StandardInteractionClientGetClientConfiguration,
        "StdIntClientGetClientConf"
    ],
    [
        h.StandardInteractionClientInitializeAuthorizationRequest,
        "StdIntClientInitAuthReq"
    ],
    [
        h.GetAuthCodeUrl,
        "GetAuthCodeUrl"
    ],
    [
        h.HandleCodeResponseFromServer,
        "HandleCodeResFromServer"
    ],
    [
        h.HandleCodeResponse,
        "HandleCodeResp"
    ],
    [
        h.HandleResponseEar,
        "HandleRespEar"
    ],
    [
        h.HandleResponseCode,
        "HandleRespCode"
    ],
    [
        h.HandleResponsePlatformBroker,
        "HandleRespPlatBroker"
    ],
    [
        h.UpdateTokenEndpointAuthority,
        "UpdTEndpointAuth"
    ],
    [
        h.AuthClientAcquireToken,
        "AuthClientAT"
    ],
    [
        h.AuthClientExecuteTokenRequest,
        "AuthClientExecTReq"
    ],
    [
        h.AuthClientCreateTokenRequestBody,
        "AuthClientCreateTReqBody"
    ],
    [
        h.PopTokenGenerateCnf,
        "PopTGenCnf"
    ],
    [
        h.PopTokenGenerateKid,
        "PopTGenKid"
    ],
    [
        h.HandleServerTokenResponse,
        "HandleServerTRes"
    ],
    [
        h.DeserializeResponse,
        "DeserializeRes"
    ],
    [
        h.AuthorityFactoryCreateDiscoveredInstance,
        "AuthFactCreateDiscInst"
    ],
    [
        h.AuthorityResolveEndpointsAsync,
        "AuthResolveEndpointsAsync"
    ],
    [
        h.AuthorityResolveEndpointsFromLocalSources,
        "AuthResolveEndpointsFromLocal"
    ],
    [
        h.AuthorityGetCloudDiscoveryMetadataFromNetwork,
        "AuthGetCDMetaFromNet"
    ],
    [
        h.AuthorityUpdateCloudDiscoveryMetadata,
        "AuthUpdCDMeta"
    ],
    [
        h.AuthorityGetEndpointMetadataFromNetwork,
        "AuthUpdCDMetaFromNet"
    ],
    [
        h.AuthorityUpdateEndpointMetadata,
        "AuthUpdEndpointMeta"
    ],
    [
        h.AuthorityUpdateMetadataWithRegionalInformation,
        "AuthUpdMetaWithRegInfo"
    ],
    [
        h.RegionDiscoveryDetectRegion,
        "RegDiscDetectReg"
    ],
    [
        h.RegionDiscoveryGetRegionFromIMDS,
        "RegDiscGetRegFromIMDS"
    ],
    [
        h.RegionDiscoveryGetCurrentVersion,
        "RegDiscGetCurrentVer"
    ],
    [
        h.AcquireTokenByCodeAsync,
        "ATByCodeAsync"
    ],
    [
        h.GetEndpointMetadataFromNetwork,
        "GetEndpointMetaFromNet"
    ],
    [
        h.GetCloudDiscoveryMetadataFromNetworkMeasurement,
        "GetCDMetaFromNet"
    ],
    [
        h.HandleRedirectPromiseMeasurement,
        "HandleRedirectPromise"
    ],
    [
        h.HandleNativeRedirectPromiseMeasurement,
        "HandleNtvRedirectPromise"
    ],
    [
        h.UpdateCloudDiscoveryMetadataMeasurement,
        "UpdateCDMeta"
    ],
    [
        h.UsernamePasswordClientAcquireToken,
        "UserPassClientAT"
    ],
    [
        h.NativeMessageHandlerHandshake,
        "NtvMsgHandlerHandshake"
    ],
    [
        h.NativeGenerateAuthResult,
        "NtvGenAuthRes"
    ],
    [
        h.RemoveHiddenIframe,
        "RemoveHiddenIframe"
    ],
    [
        h.ClearTokensAndKeysWithClaims,
        "ClearTAndKeysWithClaims"
    ],
    [
        h.CacheManagerGetRefreshToken,
        "CacheManagerGetRT"
    ],
    [
        h.GeneratePkceCodes,
        "GenPkceCodes"
    ],
    [
        h.GenerateCodeVerifier,
        "GenCodeVerifier"
    ],
    [
        h.GenerateCodeChallengeFromVerifier,
        "GenCodeChallengeFromVerifier"
    ],
    [
        h.Sha256Digest,
        "Sha256Digest"
    ],
    [
        h.GetRandomValues,
        "GetRandomValues"
    ],
    [
        h.GenerateHKDF,
        "genHKDF"
    ],
    [
        h.GenerateBaseKey,
        "genBaseKey"
    ],
    [
        h.Base64Decode,
        "b64Decode"
    ],
    [
        h.UrlEncodeArr,
        "urlEncArr"
    ],
    [
        h.Encrypt,
        "encrypt"
    ],
    [
        h.Decrypt,
        "decrypt"
    ],
    [
        h.GenerateEarKey,
        "genEarKey"
    ],
    [
        h.DecryptEarResponse,
        "decryptEarResp"
    ]
]);
const Jd = {
    NotStarted: 0,
    InProgress: 1,
    Completed: 2
};
class Ma {
    startMeasurement() {}
    endMeasurement() {}
    flushMeasurement() {
        return null;
    }
}
class bn {
    generateId() {
        return "callback-id";
    }
    startMeasurement(e, t) {
        return {
            end: ()=>null,
            discard: ()=>{},
            add: ()=>{},
            increment: ()=>{},
            event: {
                eventId: this.generateId(),
                status: Jd.InProgress,
                authority: "",
                libraryName: "",
                libraryVersion: "",
                clientId: "",
                name: e,
                startTimeMs: Date.now(),
                correlationId: t || ""
            },
            measurement: new Ma
        };
    }
    startPerformanceMeasurement() {
        return new Ma;
    }
    calculateQueuedTime() {
        return 0;
    }
    addQueueMeasurement() {}
    setPreQueueTime() {}
    endMeasurement() {
        return null;
    }
    discardMeasurements() {}
    removePerformanceCallback() {
        return true;
    }
    addPerformanceCallback() {
        return "";
    }
    emitEvents() {}
    addFields() {}
    incrementFields() {}
    cacheEventByCorrelationId() {}
}
const gg = {
    tokenRenewalOffsetSeconds,
    preventCorsPreflight: false
};
const yg = {
    loggerCallback: ()=>{},
    piiLoggingEnabled: false,
    logLevel: G.Info,
    correlationId: f.EMPTY_STRING
};
const Tg = {
    claimsBasedCachingEnabled: false
};
const Eg = {
    async sendGetRequestAsync () {
        throw g(M);
    },
    async sendPostRequestAsync () {
        throw g(M);
    }
};
const Cg = {
    sku: f.SKU,
    version: version_1,
    cpu: f.EMPTY_STRING,
    os: f.EMPTY_STRING
};
const Ag = {
    clientSecret: f.EMPTY_STRING,
    clientAssertion: undefined
};
const azureCloudOptions = {
    azureCloudInstance: Ht.None,
    tenant: `${f.DEFAULT_COMMON_TENANT}`
};
const _g = {
    application: {
        appName: "",
        appVersion: ""
    }
};
function Xd({ authOptions, systemOptions, loggerOptions, cacheOptions, storageInterface, networkInterface, cryptoInterface, clientCredentials, libraryInfo, telemetry, serverTelemetryManager, persistencePlugin, serializableCache }) {
    let p = {
        ...yg,
        ...loggerOptions
    };
    return {
        authOptions: Sg(authOptions),
        systemOptions: {
            ...gg,
            ...systemOptions
        },
        loggerOptions: p,
        cacheOptions: {
            ...Tg,
            ...cacheOptions
        },
        storageInterface: storageInterface || new Pi(authOptions.clientId, Tn, new Ue(p), new bn),
        networkInterface: networkInterface || Eg,
        cryptoInterface: cryptoInterface || Tn,
        clientCredentials: clientCredentials || Ag,
        libraryInfo: {
            ...Cg,
            ...libraryInfo
        },
        telemetry: {
            ..._g,
            ...telemetry
        },
        serverTelemetryManager: serverTelemetryManager || null,
        persistencePlugin: persistencePlugin || null,
        serializableCache: serializableCache || null
    };
}
function Sg(authOptions) {
    return {
        clientCapabilities: [],
        azureCloudOptions,
        skipAuthorityMetadataCache: false,
        instanceAware: false,
        encodeExtraQueryParams: false,
        ...authOptions
    };
}
function Oi(config) {
    return config.authOptions.authority.options.protocolMode === Ae.OIDC;
}
const Ie = {
    HOME_ACCOUNT_ID: "home_account_id",
    UPN: "UPN"
};
const Tt = "client_id";
const Da = "redirect_uri";
const Zd = "response_type";
const eu = "response_mode";
const tu = "grant_type";
const ru = "claims";
const nu = "scope";
const ou = "refresh_token";
const iu = "state";
const su = "nonce";
const au = "prompt";
const cu = "code";
const lu = "code_challenge";
const du = "code_challenge_method";
const uu = "code_verifier";
const hu = "client-request-id";
const fu = "x-client-SKU";
const mu = "x-client-VER";
const pu = "x-client-OS";
const gu = "x-client-CPU";
const yu = "x-client-current-telemetry";
const Tu = "x-client-last-telemetry";
const Eu = "x-ms-lib-capability";
const Cu = "x-app-name";
const Au = "x-app-ver";
const Iu = "post_logout_redirect_uri";
const _u = "id_token_hint";
const Su = "device_code";
const Ru = "client_secret";
const wu = "client_assertion";
const vu = "client_assertion_type";
const Ua = "token_type";
const La = "req_cnf";
const ku = "assertion";
const bu = "requested_token_use";
const Rg = "on_behalf_of";
const Ha = "return_spa_code";
const Pu = "logout_hint";
const Ou = "sid";
const Nu = "login_hint";
const xu = "domain_hint";
const Mu = "x-client-xtra-sku";
const Ni = "brk_client_id";
const Fa = "brk_redirect_uri";
const To = "instance_aware";
function Pn(e, correlationId, performanceClient) {
    if (!correlationId) {
        return;
    }
    let embeddedClientId = e.get(Tt);
    if (embeddedClientId && e.has(Ni)) {
        performanceClient?.addFields({
            embeddedClientId,
            embeddedRedirectUri: e.get(Da)
        }, correlationId);
    }
}
function Du(e, t) {
    e.set(Zd, t);
}
function Uu(e, responseMode) {
    e.set(eu, responseMode ? responseMode : mt.QUERY);
}
function We(e, t, r = true, n = ye) {
    if (r && !n.includes("openid") && !t.includes("openid")) {
        n.push("openid");
    }
    let o = r ? [
        ...t || [],
        ...n
    ] : t || [];
    let i = new oe(o);
    e.set(nu, i.printScopes());
}
function Qe(e, t) {
    e.set(Tt, t);
}
function On(e, redirectUri) {
    e.set(Da, redirectUri);
}
function Lu(e, postLogoutRedirectUri) {
    e.set(Iu, postLogoutRedirectUri);
}
function Hu(e, idTokenHint) {
    e.set(_u, idTokenHint);
}
function Fu(e, domainHint) {
    e.set(xu, domainHint);
}
function Eo(e, t) {
    e.set(Nu, t);
}
function $t(e, t) {
    e.set(Y.CCS_HEADER, `UPN:${t}`);
}
function Bt(e, t) {
    e.set(Y.CCS_HEADER, `Oid:${t.uid}@${t.utid}`);
}
function Ba(e, t) {
    e.set(Ou, t);
}
function Je(e, claims, clientCapabilities) {
    let n = Pg(claims, clientCapabilities);
    try {
        JSON.parse(n);
    } catch (o) {
        throw V(mr);
    }
    e.set(ru, n);
}
function at(e, t) {
    e.set(hu, t);
}
function Et(e, t) {
    e.set(fu, t.sku);
    e.set(mu, t.version);
    if (t.os) {
        e.set(pu, t.os);
    }
    if (t.cpu) {
        e.set(gu, t.cpu);
    }
}
function Ct(e, application) {
    if (application?.appName) {
        e.set(Cu, application.appName);
    }
    if (application?.appVersion) {
        e.set(Au, application.appVersion);
    }
}
function $u(e, prompt) {
    e.set(au, prompt);
}
function xi(e, state) {
    if (state) {
        e.set(iu, state);
    }
}
function Bu(e, nonce) {
    e.set(su, nonce);
}
function wg(e, codeChallenge, codeChallengeMethod) {
    if (codeChallenge && codeChallengeMethod) {
        e.set(lu, codeChallenge);
        e.set(du, codeChallengeMethod);
    } else {
        throw V(Rn);
    }
}
function zu(e, code) {
    e.set(cu, code);
}
function vg(e, deviceCode) {
    e.set(Su, deviceCode);
}
function Gu(e, refreshToken) {
    e.set(ou, refreshToken);
}
function qu(e, codeVerifier) {
    e.set(uu, codeVerifier);
}
function Tr(e, clientSecret) {
    e.set(Ru, clientSecret);
}
function Er(e, t) {
    if (t) {
        e.set(wu, t);
    }
}
function Cr(e, assertionType) {
    if (assertionType) {
        e.set(vu, assertionType);
    }
}
function kg(e, oboAssertion) {
    e.set(ku, oboAssertion);
}
function bg(e, t) {
    e.set(bu, t);
}
function zt(e, t) {
    e.set(tu, t);
}
function At(e) {
    e.set(Fd, "1");
}
function Mi(e) {
    if (!e.has(To)) {
        e.set(To, "true");
    }
}
function He(e, t) {
    Object.entries(t).forEach(([r, n])=>{
        if (!e.has(r) && n) {
            e.set(r, n);
        }
    });
}
function Pg(claims, values) {
    let r;
    if (!claims) {
        r = {};
    } else {
        try {
            r = JSON.parse(claims);
        } catch (n) {
            throw V(mr);
        }
    }
    if (values && values.length > 0) {
        if (!r.hasOwnProperty(nr.ACCESS_TOKEN)) {
            r[nr.ACCESS_TOKEN] = {};
        }
        r[nr.ACCESS_TOKEN][nr.XMS_CC] = {
            values
        };
    }
    return JSON.stringify(r);
}
function Og(e, username) {
    e.set(oo.username, username);
}
function Ng(e, password) {
    e.set(oo.password, password);
}
function Di(e, t) {
    if (t) {
        e.set(Ua, L.POP);
        e.set(La, t);
    }
}
function Ui(e, sshJwk) {
    if (sshJwk) {
        e.set(Ua, L.SSH);
        e.set(La, sshJwk);
    }
}
function Gt(e, serverTelemetryManager) {
    e.set(yu, serverTelemetryManager.generateCurrentRequestHeaderValue());
    e.set(Tu, serverTelemetryManager.generateLastRequestHeaderValue());
}
function qt(e) {
    e.set(Eu, ot.X_MS_LIB_CAPABILITY_VALUE);
}
function Ku(e, logoutHint) {
    e.set(Pu, logoutHint);
}
function Kt(e, clientId, redirectUri) {
    if (!e.has(Ni)) {
        e.set(Ni, clientId);
    }
    if (!e.has(Fa)) {
        e.set(Fa, redirectUri);
    }
}
function Vu(body) {
    return body.hasOwnProperty("authorization_endpoint") && body.hasOwnProperty("token_endpoint") && body.hasOwnProperty("issuer") && body.hasOwnProperty("jwks_uri");
}
function ju(body) {
    return body.hasOwnProperty("tenant_discovery_endpoint") && body.hasOwnProperty("metadata");
}
function Yu(body) {
    return body.hasOwnProperty("error") && body.hasOwnProperty("error_description");
}
const Wu = (e, CacheManagerGetRefreshToken, logger, performanceClient, correlationId)=>(...i)=>{
        logger.trace(`Executing function ${CacheManagerGetRefreshToken}`);
        let s = performanceClient?.startMeasurement(CacheManagerGetRefreshToken, correlationId);
        if (correlationId) {
            let a = `${CacheManagerGetRefreshToken}CallCount`;
            performanceClient?.incrementFields({
                [a]: 1
            }, correlationId);
        }
        try {
            let a = e(...i);
            s?.end({
                success: true
            });
            logger.trace(`Returning result from ${CacheManagerGetRefreshToken}`);
            return a;
        } catch (error) {
            logger.trace(`Error occurred in ${CacheManagerGetRefreshToken}`);
            try {
                logger.trace(JSON.stringify(error));
            } catch (c) {
                logger.trace("Unable to print error message.");
            }
            s?.end({
                success: false
            }, error);
            throw error;
        }
    };
const F = (e, t, r, n, o)=>(...i)=>{
        r.trace(`Executing function ${t}`);
        let s = n?.startMeasurement(t, o);
        if (o) {
            let a = `${t}CallCount`;
            n?.incrementFields({
                [a]: 1
            }, o);
        }
        n?.setPreQueueTime(t, o);
        return e(...i).then((a)=>{
            r.trace(`Returning result from ${t}`);
            s?.end({
                success: true
            });
            return a;
        }).catch((a)=>{
            r.trace(`Error occurred in ${t}`);
            try {
                r.trace(JSON.stringify(a));
            } catch (c) {
                r.trace("Unable to print error message.");
            }
            s?.end({
                success: false
            }, a);
            throw a;
        });
    };
class Co {
    constructor(e, t, r, n){
        this.networkInterface = e;
        this.logger = t;
        this.performanceClient = r;
        this.correlationId = n;
    }
    async detectRegion(e, t) {
        this.performanceClient?.addQueueMeasurement(h.RegionDiscoveryDetectRegion, this.correlationId);
        let r = e;
        if (!r) {
            let n = Co.IMDS_OPTIONS;
            try {
                let o = await F(this.getRegionFromIMDS.bind(this), h.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(f.IMDS_VERSION, n);
                if (o.status === P.SUCCESS) {
                    r = o.body;
                    t.region_source = sr.IMDS;
                }
                if (o.status === P.BAD_REQUEST) {
                    let i = await F(this.getCurrentVersion.bind(this), h.RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(n);
                    if (!i) {
                        t.region_source = sr.FAILED_AUTO_DETECTION;
                        return null;
                    }
                    let s = await F(this.getRegionFromIMDS.bind(this), h.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(i, n);
                    if (s.status === P.SUCCESS) {
                        r = s.body;
                        t.region_source = sr.IMDS;
                    }
                }
            } catch (o) {
                t.region_source = sr.FAILED_AUTO_DETECTION;
                return null;
            }
        } else {
            t.region_source = sr.ENVIRONMENT_VARIABLE;
        }
        if (!r) {
            t.region_source = sr.FAILED_AUTO_DETECTION;
        }
        return r || null;
    }
    async getRegionFromIMDS(e, t) {
        this.performanceClient?.addQueueMeasurement(h.RegionDiscoveryGetRegionFromIMDS, this.correlationId);
        return this.networkInterface.sendGetRequestAsync(`${f.IMDS_ENDPOINT}?api-version=${e}&format=text`, t, f.IMDS_TIMEOUT);
    }
    async getCurrentVersion(e) {
        this.performanceClient?.addQueueMeasurement(h.RegionDiscoveryGetCurrentVersion, this.correlationId);
        try {
            let t = await this.networkInterface.sendGetRequestAsync(`${f.IMDS_ENDPOINT}?format=json`, e);
            if (t.status === P.BAD_REQUEST && t.body && t.body["newest-versions"] && t.body["newest-versions"].length > 0) {
                return t.body["newest-versions"][0];
            }
            return null;
        } catch (t) {
            return null;
        }
    }
}
Co.IMDS_OPTIONS = {
    headers: {
        Metadata: "true"
    }
};
function Q() {
    return Math.round(new Date().getTime() / 1000);
}
function Li(e) {
    if (e) {
        return new Date(Number(e) * 1000);
    }
    return new Date;
}
function Vt(e, t) {
    let r = Number(e) || 0;
    return Q() + t > r;
}
function Qu(cachedAt) {
    return Number(cachedAt) > Q();
}
function xg(e, t) {
    return new Promise((resolve)=>setTimeout(()=>resolve(t), e));
}
function Ju(homeAccountIdentifier, t, secret, clientId, o) {
    return {
        credentialType: K.ID_TOKEN,
        homeAccountId: homeAccountIdentifier,
        environment: t,
        clientId,
        secret,
        realm: o,
        lastUpdatedAt: Date.now().toString()
    };
}
function Xu(homeAccountIdentifier, t, access_token, clientId, o, i, s, a, base64Decode, l, token_type, u, key_id, claims, requestedClaimsHash) {
    let T = {
        homeAccountId: homeAccountIdentifier,
        credentialType: K.ACCESS_TOKEN,
        secret: access_token,
        cachedAt: Q().toString(),
        expiresOn: s.toString(),
        extendedExpiresOn: a.toString(),
        environment: t,
        clientId,
        realm: o,
        target: i,
        tokenType: token_type || L.BEARER,
        lastUpdatedAt: Date.now().toString()
    };
    if (u) {
        T.userAssertionHash = u;
    }
    if (l) {
        T.refreshOn = l.toString();
    }
    if (claims) {
        T.requestedClaims = claims;
        T.requestedClaimsHash = requestedClaimsHash;
    }
    if (T.tokenType?.toLowerCase() !== L.BEARER.toLowerCase()) {
        T.credentialType = K.ACCESS_TOKEN_WITH_AUTH_SCHEME;
        switch(T.tokenType){
            case L.POP:
                let _ = yt(access_token, base64Decode);
                if (!_?.cnf?.kid) {
                    throw g(pn);
                }
                T.keyId = _.cnf.kid;
                break;
            case L.SSH:
                T.keyId = key_id;
        }
    }
    return T;
}
function Zu(homeAccountIdentifier, t, refresh_token, clientId, foci, i, s) {
    let a = {
        credentialType: K.REFRESH_TOKEN,
        homeAccountId: homeAccountIdentifier,
        environment: t,
        clientId,
        secret: refresh_token,
        lastUpdatedAt: Date.now().toString()
    };
    if (i) {
        a.userAssertionHash = i;
    }
    if (foci) {
        a.familyId = foci;
    }
    if (s) {
        a.expiresOn = s.toString();
    }
    return a;
}
function za(e) {
    return e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("credentialType") && e.hasOwnProperty("clientId") && e.hasOwnProperty("secret");
}
function eh(e) {
    if (!e) {
        return false;
    }
    return za(e) && e.hasOwnProperty("realm") && e.hasOwnProperty("target") && (e.credentialType === K.ACCESS_TOKEN || e.credentialType === K.ACCESS_TOKEN_WITH_AUTH_SCHEME);
}
function th(e) {
    if (!e) {
        return false;
    }
    return za(e) && e.hasOwnProperty("realm") && e.credentialType === K.ID_TOKEN;
}
function rh(e) {
    if (!e) {
        return false;
    }
    return za(e) && e.credentialType === K.REFRESH_TOKEN;
}
function Mg(e, t) {
    let r = e.indexOf(de.CACHE_KEY) === 0;
    let n = true;
    if (t) {
        n = t.hasOwnProperty("failedRequests") && t.hasOwnProperty("errors") && t.hasOwnProperty("cacheHits");
    }
    return r && n;
}
function Dg(e, t) {
    let r = false;
    if (e) {
        r = e.indexOf(ot.THROTTLING_PREFIX) === 0;
    }
    let n = true;
    if (t) {
        n = t.hasOwnProperty("throttleTime");
    }
    return r && n;
}
function Ug({ environment, clientId }) {
    return [
        ro,
        environment,
        clientId
    ].join(pt.CACHE_KEY_SEPARATOR).toLowerCase();
}
function nh(e, t) {
    if (!t) {
        return false;
    }
    return e.indexOf(ro) === 0 && t.hasOwnProperty("clientId") && t.hasOwnProperty("environment");
}
function Lg(e, t) {
    if (!t) {
        return false;
    }
    return e.indexOf(Zr.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri");
}
function Ga() {
    return Q() + Zr.REFRESH_TIME_SECONDS;
}
function Ao(e, t, r) {
    e.authorization_endpoint = t.authorization_endpoint;
    e.token_endpoint = t.token_endpoint;
    e.end_session_endpoint = t.end_session_endpoint;
    e.issuer = t.issuer;
    e.endpointsFromNetwork = r;
    e.jwks_uri = t.jwks_uri;
}
function Hi(e, t, r) {
    e.aliases = t.aliases;
    e.preferred_cache = t.preferred_cache;
    e.preferred_network = t.preferred_network;
    e.aliasesFromNetwork = r;
}
function qa(e) {
    return e.expiresAt <= Q();
}
class ue {
    constructor(e, t, r, n, o, i, s, a){
        this.canonicalAuthority = e;
        this._canonicalAuthority.validateAsUri();
        this.networkInterface = t;
        this.cacheManager = r;
        this.authorityOptions = n;
        this.regionDiscoveryMetadata = {
            region_used: undefined,
            region_source: undefined,
            region_outcome: undefined
        };
        this.logger = o;
        this.performanceClient = s;
        this.correlationId = i;
        this.managedIdentity = a || false;
        this.regionDiscovery = new Co(t, this.logger, this.performanceClient, this.correlationId);
    }
    getAuthorityType(e) {
        if (e.HostNameAndPort.endsWith(f.CIAM_AUTH_URL)) {
            return Ge.Ciam;
        }
        let e_PathSegments = e.PathSegments;
        if (e_PathSegments.length) {
            switch(e_PathSegments[0].toLowerCase()){
                case f.ADFS:
                    return Ge.Adfs;
                case f.DSTS:
                    return Ge.Dsts;
            }
        }
        return Ge.Default;
    }
    get authorityType() {
        return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
    }
    get protocolMode() {
        return this.authorityOptions.protocolMode;
    }
    get options() {
        return this.authorityOptions;
    }
    get canonicalAuthority() {
        return this._canonicalAuthority.urlString;
    }
    set canonicalAuthority(e) {
        this._canonicalAuthority = new x(e);
        this._canonicalAuthority.validateAsUri();
        this._canonicalAuthorityUrlComponents = null;
    }
    get canonicalAuthorityUrlComponents() {
        if (!this._canonicalAuthorityUrlComponents) {
            this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
        }
        return this._canonicalAuthorityUrlComponents;
    }
    get hostnameAndPort() {
        return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
    }
    get tenant() {
        return this.canonicalAuthorityUrlComponents.PathSegments[0];
    }
    get authorizationEndpoint() {
        if (this.discoveryComplete()) {
            return this.replacePath(this.metadata.authorization_endpoint);
        } else {
            throw g(Oe);
        }
    }
    get tokenEndpoint() {
        if (this.discoveryComplete()) {
            return this.replacePath(this.metadata.token_endpoint);
        } else {
            throw g(Oe);
        }
    }
    get deviceCodeEndpoint() {
        if (this.discoveryComplete()) {
            return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        } else {
            throw g(Oe);
        }
    }
    get endSessionEndpoint() {
        if (this.discoveryComplete()) {
            if (!this.metadata.end_session_endpoint) {
                throw g(gn);
            }
            return this.replacePath(this.metadata.end_session_endpoint);
        } else {
            throw g(Oe);
        }
    }
    get selfSignedJwtAudience() {
        if (this.discoveryComplete()) {
            return this.replacePath(this.metadata.issuer);
        } else {
            throw g(Oe);
        }
    }
    get jwksUri() {
        if (this.discoveryComplete()) {
            return this.replacePath(this.metadata.jwks_uri);
        } else {
            throw g(Oe);
        }
    }
    canReplaceTenant(e) {
        return e.PathSegments.length === 1 && !ue.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === Ge.Default && this.protocolMode !== Ae.OIDC;
    }
    replaceTenant(e) {
        return e.replace(/{tenant}|{tenantid}/g, this.tenant);
    }
    replacePath(e) {
        let t = e;
        let n = new x(this.metadata.canonical_authority).getUrlComponents();
        let n_PathSegments = n.PathSegments;
        this.canonicalAuthorityUrlComponents.PathSegments.forEach((s, a)=>{
            let c = n_PathSegments[a];
            if (a === 0 && this.canReplaceTenant(n)) {
                let l = new x(this.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
                if (c !== l) {
                    this.logger.verbose(`Replacing tenant domain name ${c} with id ${l}`);
                    c = l;
                }
            }
            if (s !== c) {
                t = t.replace(`/${c}/`, `/${s}/`);
            }
        });
        return this.replaceTenant(t);
    }
    get defaultOpenIdConfigurationEndpoint() {
        let hostnameAndPort = this.hostnameAndPort;
        if (this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === Ge.Adfs || this.protocolMode === Ae.OIDC && !this.isAliasOfKnownMicrosoftAuthority(hostnameAndPort)) {
            return `${this.canonicalAuthority}.well-known/openid-configuration`;
        }
        return `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`;
    }
    discoveryComplete() {
        return !!this.metadata;
    }
    async resolveEndpointsAsync() {
        this.performanceClient?.addQueueMeasurement(h.AuthorityResolveEndpointsAsync, this.correlationId);
        let e = this.getCurrentMetadataEntity();
        let cloudDiscoverySource = await F(this.updateCloudDiscoveryMetadata.bind(this), h.AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(e);
        this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, e.preferred_network);
        let r = await F(this.updateEndpointMetadata.bind(this), h.AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(e);
        this.updateCachedMetadata(e, cloudDiscoverySource, {
            source: r
        });
        this.performanceClient?.addFields({
            cloudDiscoverySource,
            authorityEndpointSource: r
        }, this.correlationId);
    }
    getCurrentMetadataEntity() {
        let e = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
        if (!e) {
            e = {
                aliases: [],
                preferred_cache: this.hostnameAndPort,
                preferred_network: this.hostnameAndPort,
                canonical_authority: this.canonicalAuthority,
                authorization_endpoint: "",
                token_endpoint: "",
                end_session_endpoint: "",
                issuer: "",
                aliasesFromNetwork: false,
                endpointsFromNetwork: false,
                expiresAt: Ga(),
                jwks_uri: ""
            };
        }
        return e;
    }
    updateCachedMetadata(e, t, r) {
        if (t !== Ce.CACHE && r?.source !== Ce.CACHE) {
            e.expiresAt = Ga();
            e.canonical_authority = this.canonicalAuthority;
        }
        let n = this.cacheManager.generateAuthorityMetadataCacheKey(e.preferred_cache);
        this.cacheManager.setAuthorityMetadata(n, e);
        this.metadata = e;
    }
    async updateEndpointMetadata(e) {
        this.performanceClient?.addQueueMeasurement(h.AuthorityUpdateEndpointMetadata, this.correlationId);
        let t = this.updateEndpointMetadataFromLocalSources(e);
        if (t) {
            if (t.source === Ce.HARDCODED_VALUES) {
                if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
                    if (t.metadata) {
                        let n = await F(this.updateMetadataWithRegionalInformation.bind(this), h.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(t.metadata);
                        Ao(e, n, false);
                        e.canonical_authority = this.canonicalAuthority;
                    }
                }
            }
            return t.source;
        }
        let r = await F(this.getEndpointMetadataFromNetwork.bind(this), h.AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
        if (r) {
            if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
                r = await F(this.updateMetadataWithRegionalInformation.bind(this), h.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(r);
            }
            Ao(e, r, true);
            return Ce.NETWORK;
        } else {
            throw g(nn, this.defaultOpenIdConfigurationEndpoint);
        }
    }
    updateEndpointMetadataFromLocalSources(e) {
        this.logger.verbose("Attempting to get endpoint metadata from authority configuration");
        let t = this.getEndpointMetadataFromConfig();
        if (t) {
            this.logger.verbose("Found endpoint metadata in authority configuration");
            Ao(e, t, false);
            return {
                source: Ce.CONFIG
            };
        }
        this.logger.verbose("Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values.");
        if (this.authorityOptions.skipAuthorityMetadataCache) {
            this.logger.verbose("Skipping hardcoded metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get endpoint metadata from the network metadata cache.");
        } else {
            let metadata = this.getEndpointMetadataFromHardcodedValues();
            if (metadata) {
                Ao(e, metadata, false);
                return {
                    source: Ce.HARDCODED_VALUES,
                    metadata
                };
            } else {
                this.logger.verbose("Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache.");
            }
        }
        let r = qa(e);
        if (this.isAuthoritySameType(e) && e.endpointsFromNetwork && !r) {
            this.logger.verbose("Found endpoint metadata in the cache.");
            return {
                source: Ce.CACHE
            };
        } else if (r) {
            this.logger.verbose("The metadata entity is expired.");
        }
        return null;
    }
    isAuthoritySameType(e) {
        return new x(e.canonical_authority).getUrlComponents().PathSegments.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
    }
    getEndpointMetadataFromConfig() {
        if (this.authorityOptions.authorityMetadata) {
            try {
                return JSON.parse(this.authorityOptions.authorityMetadata);
            } catch (e) {
                throw V(wn);
            }
        }
        return null;
    }
    async getEndpointMetadataFromNetwork() {
        this.performanceClient?.addQueueMeasurement(h.AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
        let e = {};
        let defaultOpenIdConfigurationEndpoint = this.defaultOpenIdConfigurationEndpoint;
        this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from ${defaultOpenIdConfigurationEndpoint}`);
        try {
            let r = await this.networkInterface.sendGetRequestAsync(defaultOpenIdConfigurationEndpoint, e);
            if (Vu(r.body)) {
                return r.body;
            } else {
                this.logger.verbose("Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration");
                return null;
            }
        } catch (error) {
            this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: ${error}`);
            return null;
        }
    }
    getEndpointMetadataFromHardcodedValues() {
        if (this.hostnameAndPort in endpointMetadata) {
            return endpointMetadata[this.hostnameAndPort];
        }
        return null;
    }
    async updateMetadataWithRegionalInformation(e) {
        this.performanceClient?.addQueueMeasurement(h.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
        let t = this.authorityOptions.azureRegionConfiguration?.azureRegion;
        if (t) {
            if (t !== f.AZURE_REGION_AUTO_DISCOVER_FLAG) {
                this.regionDiscoveryMetadata.region_outcome = ni.CONFIGURED_NO_AUTO_DETECTION;
                this.regionDiscoveryMetadata.region_used = t;
                return ue.replaceWithRegionalInformation(e, t);
            }
            let r = await F(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), h.RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration?.environmentRegion, this.regionDiscoveryMetadata);
            if (r) {
                this.regionDiscoveryMetadata.region_outcome = ni.AUTO_DETECTION_REQUESTED_SUCCESSFUL;
                this.regionDiscoveryMetadata.region_used = r;
                return ue.replaceWithRegionalInformation(e, r);
            }
            this.regionDiscoveryMetadata.region_outcome = ni.AUTO_DETECTION_REQUESTED_FAILED;
        }
        return e;
    }
    async updateCloudDiscoveryMetadata(e) {
        this.performanceClient?.addQueueMeasurement(h.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId);
        let t = this.updateCloudDiscoveryMetadataFromLocalSources(e);
        if (t) {
            return t;
        }
        let r = await F(this.getCloudDiscoveryMetadataFromNetwork.bind(this), h.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
        if (r) {
            Hi(e, r, true);
            return Ce.NETWORK;
        }
        throw V(vn);
    }
    updateCloudDiscoveryMetadataFromLocalSources(e) {
        this.logger.verbose("Attempting to get cloud discovery metadata  from authority configuration");
        this.logger.verbosePii(`Known Authorities: ${this.authorityOptions.knownAuthorities || f.NOT_APPLICABLE}`);
        this.logger.verbosePii(`Authority Metadata: ${this.authorityOptions.authorityMetadata || f.NOT_APPLICABLE}`);
        this.logger.verbosePii(`Canonical Authority: ${e.canonical_authority || f.NOT_APPLICABLE}`);
        let t = this.getCloudDiscoveryMetadataFromConfig();
        if (t) {
            this.logger.verbose("Found cloud discovery metadata in authority configuration");
            Hi(e, t, false);
            return Ce.CONFIG;
        }
        this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values.");
        if (this.options.skipAuthorityMetadataCache) {
            this.logger.verbose("Skipping hardcoded cloud discovery metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get cloud discovery metadata from the network metadata cache.");
        } else {
            let n = Wd(this.hostnameAndPort);
            if (n) {
                this.logger.verbose("Found cloud discovery metadata from hardcoded values.");
                Hi(e, n, false);
                return Ce.HARDCODED_VALUES;
            }
            this.logger.verbose("Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache.");
        }
        let r = qa(e);
        if (this.isAuthoritySameType(e) && e.aliasesFromNetwork && !r) {
            this.logger.verbose("Found cloud discovery metadata in the cache.");
            return Ce.CACHE;
        } else if (r) {
            this.logger.verbose("The metadata entity is expired.");
        }
        return null;
    }
    getCloudDiscoveryMetadataFromConfig() {
        if (this.authorityType === Ge.Ciam) {
            this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host.");
            return ue.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
        }
        if (this.authorityOptions.cloudDiscoveryMetadata) {
            this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
            try {
                this.logger.verbose("Attempting to parse the cloud discovery metadata.");
                let e = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata);
                let t = go(e.metadata, this.hostnameAndPort);
                this.logger.verbose("Parsed the cloud discovery metadata.");
                if (t) {
                    this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata.");
                    return t;
                } else {
                    this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
                }
            } catch (e) {
                this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error.");
                throw V(pr);
            }
        }
        if (this.isInKnownAuthorities()) {
            this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host.");
            return ue.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
        }
        return null;
    }
    async getCloudDiscoveryMetadataFromNetwork() {
        this.performanceClient?.addQueueMeasurement(h.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
        let e = `${f.AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`;
        let t = {};
        let r = null;
        try {
            let n = await this.networkInterface.sendGetRequestAsync(e, t);
            let o;
            let i;
            if (ju(n.body)) {
                o = n.body;
                i = o.metadata;
                this.logger.verbosePii(`tenant_discovery_endpoint is: ${o.tenant_discovery_endpoint}`);
            } else if (Yu(n.body)) {
                this.logger.warning(`A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: ${n.status}`);
                o = n.body;
                if (o.error === f.INVALID_INSTANCE) {
                    this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance.");
                    return null;
                }
                this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error is ${o.error}`);
                this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error description is ${o.error_description}`);
                this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []");
                i = [];
            } else {
                this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse");
                return null;
            }
            this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request.");
            r = go(i, this.hostnameAndPort);
        } catch (error) {
            if (error instanceof N) {
                this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ${error.errorCode}
Error Description: ${error.errorMessage}`);
            } else {
                let o = error;
                this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ${o.name}
Error Description: ${o.message}`);
            }
            return null;
        }
        if (!r) {
            this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request.");
            this.logger.verbose("Creating custom Authority for custom domain scenario.");
            r = ue.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
        }
        return r;
    }
    isInKnownAuthorities() {
        return this.authorityOptions.knownAuthorities.filter((t)=>t && x.getDomainFromUrl(t).toLowerCase() === this.hostnameAndPort).length > 0;
    }
    static generateAuthority(e, t) {
        let r;
        if (t && t.azureCloudInstance !== Ht.None) {
            let n = t.tenant ? t.tenant : f.DEFAULT_COMMON_TENANT;
            r = `${t.azureCloudInstance}/${n}/`;
        }
        if (r) {
            return r;
        }
        return e;
    }
    static createCloudDiscoveryMetadataFromHost(e) {
        return {
            preferred_network: e,
            preferred_cache: e,
            aliases: [
                e
            ]
        };
    }
    getPreferredCache() {
        if (this.managedIdentity) {
            return f.DEFAULT_AUTHORITY_HOST;
        } else if (this.discoveryComplete()) {
            return this.metadata.preferred_cache;
        } else {
            throw g(Oe);
        }
    }
    isAlias(e) {
        return this.metadata.aliases.indexOf(e) > -1;
    }
    isAliasOfKnownMicrosoftAuthority(e) {
        return Oa.has(e);
    }
    static isPublicCloudAuthority(e) {
        return f.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
    }
    static buildRegionalAuthorityString(e, t, r) {
        let n = new x(e);
        n.validateAsUri();
        let o = n.getUrlComponents();
        let HostNameAndPort = `${t}.${o.HostNameAndPort}`;
        if (this.isPublicCloudAuthority(o.HostNameAndPort)) {
            HostNameAndPort = `${t}.${f.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`;
        }
        let urlString = x.constructAuthorityUriFromObject({
            ...n.getUrlComponents(),
            HostNameAndPort
        }).urlString;
        if (r) {
            return `${urlString}?${r}`;
        }
        return urlString;
    }
    static replaceWithRegionalInformation(e, t) {
        let r = {
            ...e
        };
        r.authorization_endpoint = ue.buildRegionalAuthorityString(r.authorization_endpoint, t);
        r.token_endpoint = ue.buildRegionalAuthorityString(r.token_endpoint, t);
        if (r.end_session_endpoint) {
            r.end_session_endpoint = ue.buildRegionalAuthorityString(r.end_session_endpoint, t);
        }
        return r;
    }
    static transformCIAMAuthority(e) {
        let t = e;
        let n = new x(e).getUrlComponents();
        if (n.PathSegments.length === 0 && n.HostNameAndPort.endsWith(f.CIAM_AUTH_URL)) {
            let o = n.HostNameAndPort.split(".")[0];
            t = `${t}${o}${f.AAD_TENANT_DOMAIN_SUFFIX}`;
        }
        return t;
    }
}
ue.reservedTenantDomains = new Set([
    "{tenant}",
    "{tenantid}",
    be.COMMON,
    be.CONSUMERS,
    be.ORGANIZATIONS
]);
function ih(authority) {
    let n = new x(authority).getUrlComponents().PathSegments.slice(-1)[0]?.toLowerCase();
    switch(n){
        case be.COMMON:
        case be.ORGANIZATIONS:
        case be.CONSUMERS:
            return;
        default:
            return n;
    }
}
function Fi(e) {
    if (e.endsWith(f.FORWARD_SLASH)) {
        return e;
    }
    return `${e}${f.FORWARD_SLASH}`;
}
function Ka(auth) {
    let e_cloudDiscoveryMetadata = auth.cloudDiscoveryMetadata;
    let cloudDiscoveryMetadata;
    if (e_cloudDiscoveryMetadata) {
        try {
            cloudDiscoveryMetadata = JSON.parse(e_cloudDiscoveryMetadata);
        } catch (n) {
            throw V(pr);
        }
    }
    return {
        canonicalAuthority: auth.authority ? Fi(auth.authority) : undefined,
        knownAuthorities: auth.knownAuthorities,
        cloudDiscoveryMetadata
    };
}
async function Va(e, networkClient, r, n, logger, i, s) {
    s?.addQueueMeasurement(h.AuthorityFactoryCreateDiscoveredInstance, i);
    let a = ue.transformCIAMAuthority(Fi(e));
    let c = new ue(a, networkClient, r, n, logger, i, s);
    try {
        await F(c.resolveEndpointsAsync.bind(c), h.AuthorityResolveEndpointsAsync, logger, s, i)();
        return c;
    } catch (l) {
        throw g(Oe);
    }
}
class qe extends N {
    constructor(e, t, r, n, o){
        super(e, t, r);
        this.name = "ServerError";
        this.errorNo = n;
        this.status = o;
        Object.setPrototypeOf(this, qe.prototype);
    }
}
function Nn(e, t, homeAccountIdentifier) {
    return {
        clientId: e,
        authority: t.authority,
        scopes: t.scopes,
        homeAccountIdentifier,
        claims: t.claims,
        authenticationScheme: t.authenticationScheme,
        resourceRequestMethod: t.resourceRequestMethod,
        resourceRequestUri: t.resourceRequestUri,
        shrClaims: t.shrClaims,
        sshKid: t.sshKid,
        embeddedClientId: t.embeddedClientId || t.tokenBodyParameters?.clientId
    };
}
class It {
    static generateThrottlingStorageKey(e) {
        return `${ot.THROTTLING_PREFIX}.${JSON.stringify(e)}`;
    }
    static preProcess(e, t, r) {
        let n = It.generateThrottlingStorageKey(t);
        let o = e.getThrottlingCache(n);
        if (o) {
            if (o.throttleTime < Date.now()) {
                e.removeItem(n, r);
                return;
            }
            throw new qe(o.errorCodes?.join(" ") || f.EMPTY_STRING, o.errorMessage, o.subError);
        }
    }
    static postProcess(e, t, r, n) {
        if (It.checkResponseStatus(r) || It.checkResponseForRetryAfter(r)) {
            let o = {
                throttleTime: It.calculateThrottleTime(parseInt(r.headers[Y.RETRY_AFTER])),
                error: r.body.error,
                errorCodes: r.body.error_codes,
                errorMessage: r.body.error_description,
                subError: r.body.suberror
            };
            e.setThrottlingCache(It.generateThrottlingStorageKey(t), o, n);
        }
    }
    static checkResponseStatus(e) {
        return e.status === 429 || e.status >= 500 && e.status < 600;
    }
    static checkResponseForRetryAfter(e) {
        if (e.headers) {
            return e.headers.hasOwnProperty(Y.RETRY_AFTER) && (e.status < 200 || e.status >= 300);
        }
        return false;
    }
    static calculateThrottleTime(e) {
        let t = e <= 0 ? 0 : e;
        let r = Date.now() / 1000;
        return Math.floor(Math.min(r + (t || ot.DEFAULT_THROTTLE_TIME_SECONDS), r + ot.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1000);
    }
    static removeThrottle(e, t, r, n) {
        let o = Nn(t, r, n);
        let i = this.generateThrottlingStorageKey(o);
        e.removeItem(i, r.correlationId);
    }
}
class $i extends N {
    constructor(e, t, r){
        super(e.errorCode, e.errorMessage, e.subError);
        Object.setPrototypeOf(this, $i.prototype);
        this.name = "NetworkError";
        this.error = e;
        this.httpStatus = t;
        this.responseHeaders = r;
    }
}
class Te {
    constructor(e, t){
        this.config = Xd(e);
        this.logger = new Ue(this.config.loggerOptions, pi, version_1);
        this.cryptoUtils = this.config.cryptoInterface;
        this.cacheManager = this.config.storageInterface;
        this.networkClient = this.config.networkInterface;
        this.serverTelemetryManager = this.config.serverTelemetryManager;
        this.authority = this.config.authOptions.authority;
        this.performanceClient = t;
    }
    createTokenRequestHeaders(e) {
        let t = {};
        t[Y.CONTENT_TYPE] = f.URL_FORM_CONTENT_TYPE;
        if (!this.config.systemOptions.preventCorsPreflight && e) {
            switch(e.type){
                case Ie.HOME_ACCOUNT_ID:
                    try {
                        let r = st(e.credential);
                        t[Y.CCS_HEADER] = `Oid:${r.uid}@${r.utid}`;
                    } catch (error) {
                        this.logger.verbose(`Could not parse home account ID for CCS Header: ${error}`);
                    }
                    break;
                case Ie.UPN:
                    t[Y.CCS_HEADER] = `UPN: ${e.credential}`;
                    break;
            }
        }
        return t;
    }
    async executePostToTokenEndpoint(e, t, r, n, o, i) {
        if (i) {
            this.performanceClient?.addQueueMeasurement(i, o);
        }
        let s = await this.sendPostRequest(n, e, {
            body: t,
            headers: r
        }, o);
        if (this.config.serverTelemetryManager && s.status < 500 && s.status !== 429) {
            this.config.serverTelemetryManager.clearTelemetryCache();
        }
        return s;
    }
    async sendPostRequest(e, t, r, n) {
        It.preProcess(this.cacheManager, e, n);
        let o;
        try {
            o = await F(this.networkClient.sendPostRequestAsync.bind(this.networkClient), h.NetworkClientSendPostRequestAsync, this.logger, this.performanceClient, n)(t, r);
            let i = o.headers || {};
            this.performanceClient?.addFields({
                refreshTokenSize: o.body.refresh_token?.length || 0,
                httpVerToken: i[Y.X_MS_HTTP_VERSION] || "",
                requestId: i[Y.X_MS_REQUEST_ID] || ""
            }, n);
        } catch (error) {
            if (error instanceof $i) {
                let s = error.responseHeaders;
                if (s) {
                    this.performanceClient?.addFields({
                        httpVerToken: s[Y.X_MS_HTTP_VERSION] || "",
                        requestId: s[Y.X_MS_REQUEST_ID] || "",
                        contentTypeHeader: s[Y.CONTENT_TYPE] || undefined,
                        contentLengthHeader: s[Y.CONTENT_LENGTH] || undefined,
                        httpStatus: error.httpStatus
                    }, n);
                }
                throw error.error;
            }
            if (error instanceof N) {
                throw error;
            } else {
                throw g(Mt);
            }
        }
        It.postProcess(this.cacheManager, e, o, n);
        return o;
    }
    async updateAuthority(e, t) {
        this.performanceClient?.addQueueMeasurement(h.UpdateTokenEndpointAuthority, t);
        let r = `https://${e}/${this.authority.tenant}/`;
        let n = await Va(r, this.networkClient, this.cacheManager, this.authority.options, this.logger, t, this.performanceClient);
        this.authority = n;
    }
    createTokenQueryParameters(e) {
        let t = new Map;
        if (e.embeddedClientId) {
            Kt(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
        }
        if (e.tokenQueryParameters) {
            He(t, e.tokenQueryParameters);
        }
        at(t, e.correlationId);
        Pn(t, e.correlationId, this.performanceClient);
        return pe(t);
    }
}
const _r = "no_tokens_found";
const Bi = "native_account_unavailable";
const zi = "refresh_token_expired";
const ja = "ux_not_allowed";
const ah = "interaction_required";
const ch = "consent_required";
const lh = "login_required";
const Sr = "bad_token";
const dh = [
    ah,
    ch,
    lh,
    Sr,
    ja
];
const Fg = [
    "message_only",
    "additional_action",
    "basic_action",
    "user_password_expired",
    "consent_required",
    "bad_token"
];
const Gi = {
    [_r]: "No refresh token found in the cache. Please sign-in.",
    [Bi]: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.",
    [zi]: "Refresh token has expired.",
    [Sr]: "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve.",
    [ja]: "`canShowUI` flag in Edge was set to false. User interaction required on web page. Please invoke an interactive API to resolve."
};
const $g = {
    noTokensFoundError: {
        code: _r,
        desc: Gi[_r]
    },
    native_account_unavailable: {
        code: Bi,
        desc: Gi[Bi]
    },
    bad_token: {
        code: Sr,
        desc: Gi[Sr]
    }
};
class _t extends N {
    constructor(e, t, r, n, o, i, s, a){
        super(e, t, r);
        Object.setPrototypeOf(this, _t.prototype);
        this.timestamp = n || f.EMPTY_STRING;
        this.traceId = o || f.EMPTY_STRING;
        this.correlationId = i || f.EMPTY_STRING;
        this.claims = s || f.EMPTY_STRING;
        this.name = "InteractionRequiredAuthError";
        this.errorNo = a;
    }
}
function uh(error, error_description, suberror) {
    let n = !!error && dh.indexOf(error) > -1;
    let o = !!suberror && Fg.indexOf(suberror) > -1;
    let i = !!error_description && dh.some((s)=>error_description.indexOf(s) > -1);
    return n || i || o;
}
function Ya(e) {
    return new _t(e, Gi[e]);
}
class qi {
    static setRequestState(e, t, r) {
        let n = qi.generateLibraryState(e, r);
        if (t) {
            return `${n}${f.RESOURCE_DELIM}${t}`;
        }
        return n;
    }
    static generateLibraryState(e, t) {
        if (!e) {
            throw g(ur);
        }
        let r = {
            id: e.createNewGuid()
        };
        if (t) {
            r.meta = t;
        }
        let n = JSON.stringify(r);
        return e.base64Encode(n);
    }
    static parseRequestState(e, t) {
        if (!e) {
            throw g(ur);
        }
        if (!t) {
            throw g(lr);
        }
        try {
            let r = t.split(f.RESOURCE_DELIM);
            let n = r[0];
            let o = r.length > 1 ? r.slice(1).join(f.RESOURCE_DELIM) : f.EMPTY_STRING;
            let i = e.base64Decode(n);
            let libraryState = JSON.parse(i);
            return {
                userRequestState: o || f.EMPTY_STRING,
                libraryState
            };
        } catch (r) {
            throw g(lr);
        }
    }
}
const Bg = {
    SW: "sw"
};
class Rr {
    constructor(e, t){
        this.cryptoUtils = e;
        this.performanceClient = t;
    }
    async generateCnf(e, t) {
        this.performanceClient?.addQueueMeasurement(h.PopTokenGenerateCnf, e.correlationId);
        let r = await F(this.generateKid.bind(this), h.PopTokenGenerateCnf, t, this.performanceClient, e.correlationId)(e);
        let reqCnfString = this.cryptoUtils.base64UrlEncode(JSON.stringify(r));
        return {
            kid: r.kid,
            reqCnfString
        };
    }
    async generateKid(e) {
        this.performanceClient?.addQueueMeasurement(h.PopTokenGenerateKid, e.correlationId);
        return {
            kid: await this.cryptoUtils.getPublicKeyThumbprint(e),
            xms_ksl: Bg.SW
        };
    }
    async signPopToken(e, t, r) {
        return this.signPayload(e, t, r);
    }
    async signPayload(at_1, t, r, n) {
        let { resourceRequestMethod, resourceRequestUri, shrClaims, shrNonce, shrOptions } = r;
        let d = (resourceRequestUri ? new x(resourceRequestUri) : undefined)?.getUrlComponents();
        return this.cryptoUtils.signJwt({
            at: at_1,
            ts: Q(),
            m: resourceRequestMethod?.toUpperCase(),
            u: d?.HostNameAndPort,
            nonce: shrNonce || this.cryptoUtils.createNewGuid(),
            p: d?.AbsolutePath,
            q: d?.QueryString ? [
                [],
                d.QueryString
            ] : undefined,
            client_claims: shrClaims || undefined,
            ...n
        }, t, shrOptions, r.correlationId);
    }
}
class Xe {
    constructor(e, t){
        this.cache = e;
        this.hasChanged = t;
    }
    get cacheHasChanged() {
        return this.hasChanged;
    }
    get tokenCache() {
        return this.cache;
    }
}
class ie {
    constructor(e, t, r, n, o, i, s){
        this.clientId = e;
        this.cacheStorage = t;
        this.cryptoObj = r;
        this.logger = n;
        this.serializableCache = o;
        this.persistencePlugin = i;
        this.performanceClient = s;
    }
    validateTokenResponse(e, t) {
        if (e.error || e.error_description || e.suberror) {
            let r = `Error(s): ${e.error_codes || f.NOT_AVAILABLE} - Timestamp: ${e.timestamp || f.NOT_AVAILABLE} - Description: ${e.error_description || f.NOT_AVAILABLE} - Correlation ID: ${e.correlation_id || f.NOT_AVAILABLE} - Trace ID: ${e.trace_id || f.NOT_AVAILABLE}`;
            let n = e.error_codes?.length ? e.error_codes[0] : undefined;
            let o = new qe(e.error, r, e.suberror, n, e.status);
            if (t && e.status && e.status >= P.SERVER_ERROR_RANGE_START && e.status <= P.SERVER_ERROR_RANGE_END) {
                this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.
${o}`);
                return;
            } else if (t && e.status && e.status >= P.CLIENT_ERROR_RANGE_START && e.status <= P.CLIENT_ERROR_RANGE_END) {
                this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.
${o}`);
                return;
            }
            if (uh(e.error, e.error_description, e.suberror)) {
                throw new _t(e.error, e.error_description, e.suberror, e.timestamp || f.EMPTY_STRING, e.trace_id || f.EMPTY_STRING, e.correlation_id || f.EMPTY_STRING, e.claims || f.EMPTY_STRING, n);
            }
            throw o;
        }
    }
    async handleServerTokenResponse(e, t, r, n, o, i, s, a, c) {
        this.performanceClient?.addQueueMeasurement(h.HandleServerTokenResponse, e.correlation_id);
        let l;
        if (e.id_token) {
            l = yt(e.id_token || f.EMPTY_STRING, this.cryptoObj.base64Decode);
            if (o && o.nonce) {
                if (l.nonce !== o.nonce) {
                    throw g(sn);
                }
            }
            if (n.maxAge || n.maxAge === 0) {
                let p = l.auth_time;
                if (!p) {
                    throw g(Dt);
                }
                ki(p, n.maxAge);
            }
        }
        this.homeAccountIdentifier = fe.generateHomeAccountId(e.client_info || f.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, l);
        let d;
        if (!!o && !!o.state) {
            d = qi.parseRequestState(this.cryptoObj, o.state);
        }
        e.key_id = e.key_id || n.sshKid || undefined;
        let u = this.generateCacheRecord(e, t, r, n, l, i, o);
        let m;
        try {
            if (this.persistencePlugin && this.serializableCache) {
                this.logger.verbose("Persistence enabled, calling beforeCacheAccess");
                m = new Xe(this.serializableCache, true);
                await this.persistencePlugin.beforeCacheAccess(m);
            }
            if (s && !a && u.account) {
                let p = this.cacheStorage.generateAccountKey(fe.getAccountInfo(u.account));
                if (!this.cacheStorage.getAccount(p, n.correlationId)) {
                    this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache");
                    return await ie.generateAuthenticationResult(this.cryptoObj, t, u, false, n, l, d, undefined, c);
                }
            }
            await this.cacheStorage.saveCacheRecord(u, n.correlationId, qd(l || {}), n.storeInCache);
        } finally{
            if (this.persistencePlugin && this.serializableCache && m) {
                this.logger.verbose("Persistence enabled, calling afterCacheAccess");
                await this.persistencePlugin.afterCacheAccess(m);
            }
        }
        return ie.generateAuthenticationResult(this.cryptoObj, t, u, false, n, l, d, e, c);
    }
    generateCacheRecord(e, t, r, n, o, i, s) {
        let a = t.getPreferredCache();
        if (!a) {
            throw g(Lt);
        }
        let c = vi(o);
        let l;
        let d;
        if (e.id_token && !!o) {
            l = Ju(this.homeAccountIdentifier, a, e.id_token, this.clientId, c || "");
            d = hh(this.cacheStorage, t, this.homeAccountIdentifier, this.cryptoObj.base64Decode, n.correlationId, o, e.client_info, a, c, s, undefined, this.logger);
        }
        let u = null;
        if (e.access_token) {
            let y = e.scope ? oe.fromString(e.scope) : new oe(n.scopes || []);
            let T = (typeof e.expires_in === "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0;
            let _ = (typeof e.ext_expires_in === "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0;
            let k = (typeof e.refresh_in === "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || undefined;
            let U = r + T;
            let B = U + _;
            let X = k && k > 0 ? r + k : undefined;
            u = Xu(this.homeAccountIdentifier, a, e.access_token, this.clientId, c || t.tenant || "", y.printScopes(), U, B, this.cryptoObj.base64Decode, X, e.token_type, i, e.key_id, n.claims, n.requestedClaimsHash);
        }
        let refreshToken = null;
        if (e.refresh_token) {
            let y;
            if (e.refresh_token_expires_in) {
                let T = typeof e.refresh_token_expires_in === "string" ? parseInt(e.refresh_token_expires_in, 10) : e.refresh_token_expires_in;
                y = r + T;
            }
            refreshToken = Zu(this.homeAccountIdentifier, a, e.refresh_token, this.clientId, e.foci, i, y);
        }
        let appMetadata = null;
        if (e.foci) {
            appMetadata = {
                clientId: this.clientId,
                environment: a,
                familyId: e.foci
            };
        }
        return {
            account: d,
            idToken: l,
            accessToken: u,
            refreshToken,
            appMetadata
        };
    }
    static async generateAuthenticationResult(e, t, r, fromCache, o, i, s, a, c) {
        let f_EMPTY_STRING = f.EMPTY_STRING;
        let d = [];
        let expiresOn = null;
        let extExpiresOn;
        let refreshOn;
        let f_EMPTY_STRING_1 = f.EMPTY_STRING;
        if (r.accessToken) {
            if (r.accessToken.tokenType === L.POP && !o.popKid) {
                let U = new Rr(e);
                let { secret, keyId } = r.accessToken;
                if (!keyId) {
                    throw g(yn);
                }
                f_EMPTY_STRING = await U.signPopToken(secret, keyId, o);
            } else {
                f_EMPTY_STRING = r.accessToken.secret;
            }
            d = oe.fromString(r.accessToken.target).asArray();
            expiresOn = Li(r.accessToken.expiresOn);
            extExpiresOn = Li(r.accessToken.extendedExpiresOn);
            if (r.accessToken.refreshOn) {
                refreshOn = Li(r.accessToken.refreshOn);
            }
        }
        if (r.appMetadata) {
            f_EMPTY_STRING_1 = r.appMetadata.familyId === xt ? xt : "";
        }
        let uniqueId = i?.oid || i?.sub || "";
        let _ = i?.tid || "";
        if (a?.spa_accountid && !!r.account) {
            r.account.nativeAccountId = a?.spa_accountid;
        }
        let account = r.account ? wi(fe.getAccountInfo(r.account), undefined, i, r.idToken?.secret) : null;
        return {
            authority: t.canonicalAuthority,
            uniqueId,
            tenantId: _,
            scopes: d,
            account,
            idToken: r?.idToken?.secret || "",
            idTokenClaims: i || {},
            accessToken: f_EMPTY_STRING,
            fromCache,
            expiresOn,
            extExpiresOn,
            refreshOn,
            correlationId: o.correlationId,
            requestId: c || f.EMPTY_STRING,
            familyId: f_EMPTY_STRING_1,
            tokenType: r.accessToken?.tokenType || f.EMPTY_STRING,
            state: s ? s.userRequestState : f.EMPTY_STRING,
            cloudGraphHostName: r.account?.cloudGraphHostName || f.EMPTY_STRING,
            msGraphHost: r.account?.msGraphHost || f.EMPTY_STRING,
            code: a?.spa_code,
            fromNativeBroker: false
        };
    }
}
function hh(cacheStorage, t, homeAccountIdentifier, base64Decode, correlationId, i, clientInfo, a, c, l, nativeAccountId, logger) {
    logger?.verbose("setCachedAccount called");
    let p = cacheStorage.getAccountKeys().find((U)=>U.startsWith(homeAccountIdentifier));
    let y = null;
    if (p) {
        y = cacheStorage.getAccount(p, correlationId);
    }
    let T = y || fe.createAccount({
        homeAccountId: homeAccountIdentifier,
        idTokenClaims: i,
        clientInfo,
        environment: a,
        cloudGraphHostName: l?.cloud_graph_host_name,
        msGraphHost: l?.msgraph_host,
        nativeAccountId
    }, t, base64Decode);
    let _ = T.tenantProfiles || [];
    let k = c || T.realm;
    if (k && !_.find((U)=>U.tenantId === k)) {
        let U = po(homeAccountIdentifier, T.localAccountId, k, i);
        _.push(U);
    }
    T.tenantProfiles = _;
    return T;
}
async function _e(e, clientId, tokenEndpoint) {
    if (typeof e === "string") {
        return e;
    } else {
        return e({
            clientId,
            tokenEndpoint
        });
    }
}
class Ki extends Te {
    constructor(e, t){
        super(e, t);
        this.includeRedirectUri = true;
        this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes;
    }
    async acquireToken(e, t) {
        this.performanceClient?.addQueueMeasurement(h.AuthClientAcquireToken, e.correlationId);
        if (!e.code) {
            throw g(dn);
        }
        let r = Q();
        let n = await F(this.executeTokenRequest.bind(this), h.AuthClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(this.authority, e);
        let o = n.headers?.[Y.X_MS_REQUEST_ID];
        let i = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
        i.validateTokenResponse(n.body);
        return F(i.handleServerTokenResponse.bind(i), h.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(n.body, this.authority, r, e, t, undefined, undefined, undefined, o);
    }
    getLogoutUri(e) {
        if (!e) {
            throw V(Sn);
        }
        let t = this.createLogoutUrlQueryString(e);
        return x.appendQueryString(this.authority.endSessionEndpoint, t);
    }
    async executeTokenRequest(e, t) {
        this.performanceClient?.addQueueMeasurement(h.AuthClientExecuteTokenRequest, t.correlationId);
        let r = this.createTokenQueryParameters(t);
        let n = x.appendQueryString(e.tokenEndpoint, r);
        let o = await F(this.createTokenRequestBody.bind(this), h.AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, t.correlationId)(t);
        let i;
        if (t.clientInfo) {
            try {
                let c = kn(t.clientInfo, this.cryptoUtils.base64Decode);
                i = {
                    credential: `${c.uid}${pt.CLIENT_INFO_SEPARATOR}${c.utid}`,
                    type: Ie.HOME_ACCOUNT_ID
                };
            } catch (error) {
                this.logger.verbose(`Could not parse client info for CCS Header: ${error}`);
            }
        }
        let s = this.createTokenRequestHeaders(i || t.ccsCredential);
        let a = Nn(this.config.authOptions.clientId, t);
        return F(this.executePostToTokenEndpoint.bind(this), h.AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, t.correlationId)(n, o, s, a, t.correlationId, h.AuthorizationCodeClientExecutePostToTokenEndpoint);
    }
    async createTokenRequestBody(e) {
        this.performanceClient?.addQueueMeasurement(h.AuthClientCreateTokenRequestBody, e.correlationId);
        let t = new Map;
        Qe(t, e.embeddedClientId || e.tokenBodyParameters?.[Tt] || this.config.authOptions.clientId);
        if (!this.includeRedirectUri) {
            if (!e.redirectUri) {
                throw V(Cn);
            }
        } else {
            On(t, e.redirectUri);
        }
        We(t, e.scopes, true, this.oidcDefaultScopes);
        zu(t, e.code);
        Et(t, this.config.libraryInfo);
        Ct(t, this.config.telemetry.application);
        qt(t);
        if (this.serverTelemetryManager && !Oi(this.config)) {
            Gt(t, this.serverTelemetryManager);
        }
        if (e.codeVerifier) {
            qu(t, e.codeVerifier);
        }
        if (this.config.clientCredentials.clientSecret) {
            Tr(t, this.config.clientCredentials.clientSecret);
        }
        if (this.config.clientCredentials.clientAssertion) {
            let n = this.config.clientCredentials.clientAssertion;
            Er(t, await _e(n.assertion, this.config.authOptions.clientId, e.resourceRequestUri));
            Cr(t, n.assertionType);
        }
        zt(t, Pe.AUTHORIZATION_CODE_GRANT);
        At(t);
        if (e.authenticationScheme === L.POP) {
            let n = new Rr(this.cryptoUtils, this.performanceClient);
            let o;
            if (!e.popKid) {
                o = (await F(n.generateCnf.bind(n), h.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString;
            } else {
                o = this.cryptoUtils.encodeKid(e.popKid);
            }
            Di(t, o);
        } else if (e.authenticationScheme === L.SSH) {
            if (e.sshJwk) {
                Ui(t, e.sshJwk);
            } else {
                throw V(Ft);
            }
        }
        if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            Je(t, e.claims, this.config.authOptions.clientCapabilities);
        }
        let r;
        if (e.clientInfo) {
            try {
                let n = kn(e.clientInfo, this.cryptoUtils.base64Decode);
                r = {
                    credential: `${n.uid}${pt.CLIENT_INFO_SEPARATOR}${n.utid}`,
                    type: Ie.HOME_ACCOUNT_ID
                };
            } catch (error) {
                this.logger.verbose(`Could not parse client info for CCS Header: ${error}`);
            }
        } else {
            r = e.ccsCredential;
        }
        if (this.config.systemOptions.preventCorsPreflight && r) {
            switch(r.type){
                case Ie.HOME_ACCOUNT_ID:
                    try {
                        let n = st(r.credential);
                        Bt(t, n);
                    } catch (error) {
                        this.logger.verbose(`Could not parse home account ID for CCS Header: ${error}`);
                    }
                    break;
                case Ie.UPN:
                    $t(t, r.credential);
                    break;
            }
        }
        if (e.embeddedClientId) {
            Kt(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
        }
        if (e.tokenBodyParameters) {
            He(t, e.tokenBodyParameters);
        }
        if (e.enableSpaAuthorizationCode && (!e.tokenBodyParameters || !e.tokenBodyParameters[Ha])) {
            He(t, {
                [Ha]: "1"
            });
        }
        Pn(t, e.correlationId, this.performanceClient);
        return pe(t);
    }
    createLogoutUrlQueryString(e) {
        let t = new Map;
        if (e.postLogoutRedirectUri) {
            Lu(t, e.postLogoutRedirectUri);
        }
        if (e.correlationId) {
            at(t, e.correlationId);
        }
        if (e.idTokenHint) {
            Hu(t, e.idTokenHint);
        }
        if (e.state) {
            xi(t, e.state);
        }
        if (e.logoutHint) {
            Ku(t, e.logoutHint);
        }
        if (e.extraQueryParameters) {
            He(t, e.extraQueryParameters);
        }
        if (this.config.authOptions.instanceAware) {
            Mi(t);
        }
        return pe(t, this.config.authOptions.encodeExtraQueryParams, e.extraQueryParameters);
    }
}
const zg = 300;
class xn extends Te {
    constructor(e, t){
        super(e, t);
    }
    async acquireToken(e) {
        this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientAcquireToken, e.correlationId);
        let t = Q();
        let r = await F(this.executeTokenRequest.bind(this), h.RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(e, this.authority);
        let n = r.headers?.[Y.X_MS_REQUEST_ID];
        let o = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
        o.validateTokenResponse(r.body);
        return F(o.handleServerTokenResponse.bind(o), h.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(r.body, this.authority, t, e, undefined, undefined, true, e.forceCache, n);
    }
    async acquireTokenByRefreshToken(e) {
        if (!e) {
            throw V(_n);
        }
        this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientAcquireTokenByRefreshToken, e.correlationId);
        if (!e.account) {
            throw g(Ut);
        }
        if (this.cacheManager.isAppMetadataFOCI(e.account.environment)) {
            try {
                return await F(this.acquireTokenWithCachedRefreshToken.bind(this), h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, true);
            } catch (error) {
                let n = error instanceof _t && error.errorCode === _r;
                let o = error instanceof qe && error.errorCode === no.INVALID_GRANT_ERROR && error.subError === no.CLIENT_MISMATCH_ERROR;
                if (n || o) {
                    return F(this.acquireTokenWithCachedRefreshToken.bind(this), h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, false);
                } else {
                    throw error;
                }
            }
        }
        return F(this.acquireTokenWithCachedRefreshToken.bind(this), h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, false);
    }
    async acquireTokenWithCachedRefreshToken(e, t) {
        this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, e.correlationId);
        let r = Wu(this.cacheManager.getRefreshToken.bind(this.cacheManager), h.CacheManagerGetRefreshToken, this.logger, this.performanceClient, e.correlationId)(e.account, t, e.correlationId, undefined, this.performanceClient);
        if (!r) {
            throw Ya(_r);
        }
        if (r.expiresOn && Vt(r.expiresOn, e.refreshTokenExpirationOffsetSeconds || zg)) {
            this.performanceClient?.addFields({
                rtExpiresOnMs: Number(r.expiresOn)
            }, e.correlationId);
            throw Ya(zi);
        }
        let n = {
            ...e,
            refreshToken: r.secret,
            authenticationScheme: e.authenticationScheme || L.BEARER,
            ccsCredential: {
                credential: e.account.homeAccountId,
                type: Ie.HOME_ACCOUNT_ID
            }
        };
        try {
            return await F(this.acquireToken.bind(this), h.RefreshTokenClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(n);
        } catch (error) {
            if (error instanceof _t) {
                this.performanceClient?.addFields({
                    rtExpiresOnMs: Number(r.expiresOn)
                }, e.correlationId);
                if (error.subError === Sr) {
                    this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache");
                    let i = this.cacheManager.generateCredentialKey(r);
                    this.cacheManager.removeRefreshToken(i, e.correlationId);
                }
            }
            throw error;
        }
    }
    async executeTokenRequest(e, t) {
        this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientExecuteTokenRequest, e.correlationId);
        let r = this.createTokenQueryParameters(e);
        let n = x.appendQueryString(t.tokenEndpoint, r);
        let o = await F(this.createTokenRequestBody.bind(this), h.RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, e.correlationId)(e);
        let i = this.createTokenRequestHeaders(e.ccsCredential);
        let s = Nn(this.config.authOptions.clientId, e);
        return F(this.executePostToTokenEndpoint.bind(this), h.RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, e.correlationId)(n, o, i, s, e.correlationId, h.RefreshTokenClientExecutePostToTokenEndpoint);
    }
    async createTokenRequestBody(e) {
        this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientCreateTokenRequestBody, e.correlationId);
        let t = new Map;
        Qe(t, e.embeddedClientId || e.tokenBodyParameters?.[Tt] || this.config.authOptions.clientId);
        if (e.redirectUri) {
            On(t, e.redirectUri);
        }
        We(t, e.scopes, true, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes);
        zt(t, Pe.REFRESH_TOKEN_GRANT);
        At(t);
        Et(t, this.config.libraryInfo);
        Ct(t, this.config.telemetry.application);
        qt(t);
        if (this.serverTelemetryManager && !Oi(this.config)) {
            Gt(t, this.serverTelemetryManager);
        }
        Gu(t, e.refreshToken);
        if (this.config.clientCredentials.clientSecret) {
            Tr(t, this.config.clientCredentials.clientSecret);
        }
        if (this.config.clientCredentials.clientAssertion) {
            let r = this.config.clientCredentials.clientAssertion;
            Er(t, await _e(r.assertion, this.config.authOptions.clientId, e.resourceRequestUri));
            Cr(t, r.assertionType);
        }
        if (e.authenticationScheme === L.POP) {
            let r = new Rr(this.cryptoUtils, this.performanceClient);
            let n;
            if (!e.popKid) {
                n = (await F(r.generateCnf.bind(r), h.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString;
            } else {
                n = this.cryptoUtils.encodeKid(e.popKid);
            }
            Di(t, n);
        } else if (e.authenticationScheme === L.SSH) {
            if (e.sshJwk) {
                Ui(t, e.sshJwk);
            } else {
                throw V(Ft);
            }
        }
        if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            Je(t, e.claims, this.config.authOptions.clientCapabilities);
        }
        if (this.config.systemOptions.preventCorsPreflight && e.ccsCredential) {
            switch(e.ccsCredential.type){
                case Ie.HOME_ACCOUNT_ID:
                    try {
                        let r = st(e.ccsCredential.credential);
                        Bt(t, r);
                    } catch (error) {
                        this.logger.verbose(`Could not parse home account ID for CCS Header: ${error}`);
                    }
                    break;
                case Ie.UPN:
                    $t(t, e.ccsCredential.credential);
                    break;
            }
        }
        if (e.embeddedClientId) {
            Kt(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
        }
        if (e.tokenBodyParameters) {
            He(t, e.tokenBodyParameters);
        }
        Pn(t, e.correlationId, this.performanceClient);
        return pe(t);
    }
}
class Vi extends Te {
    constructor(e, t){
        super(e, t);
    }
    async acquireCachedToken(e) {
        this.performanceClient?.addQueueMeasurement(h.SilentFlowClientAcquireCachedToken, e.correlationId);
        let j_NOT_APPLICABLE = j.NOT_APPLICABLE;
        if (e.forceRefresh || !this.config.cacheOptions.claimsBasedCachingEnabled && !re.isEmptyObj(e.claims)) {
            this.setCacheOutcome(j.FORCE_REFRESH_OR_CLAIMS, e.correlationId);
            throw g(Ye);
        }
        if (!e.account) {
            throw g(Ut);
        }
        let r = e.account.tenantId || ih(e.authority);
        let n = this.cacheManager.getTokenKeys();
        let o = this.cacheManager.getAccessToken(e.account, e, n, r);
        if (!o) {
            this.setCacheOutcome(j.NO_CACHED_ACCESS_TOKEN, e.correlationId);
            throw g(Ye);
        } else if (Qu(o.cachedAt) || Vt(o.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
            this.setCacheOutcome(j.CACHED_ACCESS_TOKEN_EXPIRED, e.correlationId);
            throw g(Ye);
        } else if (o.refreshOn && Vt(o.refreshOn, 0)) {
            j_NOT_APPLICABLE = j.PROACTIVELY_REFRESHED;
        }
        let i = e.authority || this.authority.getPreferredCache();
        let s = {
            account: this.cacheManager.getAccount(this.cacheManager.generateAccountKey(e.account), e.correlationId),
            accessToken: o,
            idToken: this.cacheManager.getIdToken(e.account, e.correlationId, n, r, this.performanceClient),
            refreshToken: null,
            appMetadata: this.cacheManager.readAppMetadataFromCache(i)
        };
        this.setCacheOutcome(j_NOT_APPLICABLE, e.correlationId);
        if (this.config.serverTelemetryManager) {
            this.config.serverTelemetryManager.incrementCacheHits();
        }
        return [
            await F(this.generateResultFromCacheRecord.bind(this), h.SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, e.correlationId)(s, e),
            j_NOT_APPLICABLE
        ];
    }
    setCacheOutcome(cacheOutcome, t) {
        this.serverTelemetryManager?.setCacheOutcome(cacheOutcome);
        this.performanceClient?.addFields({
            cacheOutcome
        }, t);
        if (cacheOutcome !== j.NOT_APPLICABLE) {
            this.logger.info(`Token refresh is required due to cache outcome: ${cacheOutcome}`);
        }
    }
    async generateResultFromCacheRecord(e, t) {
        this.performanceClient?.addQueueMeasurement(h.SilentFlowClientGenerateResultFromCacheRecord, t.correlationId);
        let r;
        if (e.idToken) {
            r = yt(e.idToken.secret, this.config.cryptoInterface.base64Decode);
        }
        if (t.maxAge || t.maxAge === 0) {
            let n = r?.auth_time;
            if (!n) {
                throw g(Dt);
            }
            ki(n, t.maxAge);
        }
        return ie.generateAuthenticationResult(this.cryptoUtils, this.authority, e, true, t, r);
    }
}
function Gg(e, t, logger, n) {
    let t_correlationId = t.correlationId;
    let i = new Map;
    Qe(i, t.embeddedClientId || t.extraQueryParameters?.[Tt] || e.clientId);
    let s = [
        ...t.scopes || [],
        ...t.extraScopesToConsent || []
    ];
    We(i, s, true, e.authority.options.OIDCOptions?.defaultScopes);
    On(i, t.redirectUri);
    at(i, t_correlationId);
    Uu(i, t.responseMode);
    At(i);
    if (t.prompt) {
        $u(i, t.prompt);
        n?.addFields({
            prompt: t.prompt
        }, t_correlationId);
    }
    if (t.domainHint) {
        Fu(i, t.domainHint);
        n?.addFields({
            domainHintFromRequest: true
        }, t_correlationId);
    }
    if (t.prompt !== or.SELECT_ACCOUNT) {
        if (t.sid && t.prompt === or.NONE) {
            logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request");
            Ba(i, t.sid);
            n?.addFields({
                sidFromRequest: true
            }, t_correlationId);
        } else if (t.account) {
            let a = Kg(t.account);
            let c = Vg(t.account);
            if (c && t.domainHint) {
                logger.warning('AuthorizationCodeClient.createAuthCodeUrlQueryString: "domainHint" param is set, skipping opaque "login_hint" claim. Please consider not passing domainHint');
                c = null;
            }
            if (c) {
                logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account");
                Eo(i, c);
                n?.addFields({
                    loginHintFromClaim: true
                }, t_correlationId);
                try {
                    let l = st(t.account.homeAccountId);
                    Bt(i, l);
                } catch (l) {
                    logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                }
            } else if (a && t.prompt === or.NONE) {
                logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account");
                Ba(i, a);
                n?.addFields({
                    sidFromClaim: true
                }, t_correlationId);
                try {
                    let l = st(t.account.homeAccountId);
                    Bt(i, l);
                } catch (l) {
                    logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                }
            } else if (t.loginHint) {
                logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request");
                Eo(i, t.loginHint);
                $t(i, t.loginHint);
                n?.addFields({
                    loginHintFromRequest: true
                }, t_correlationId);
            } else if (t.account.username) {
                logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account");
                Eo(i, t.account.username);
                n?.addFields({
                    loginHintFromUpn: true
                }, t_correlationId);
                try {
                    let l = st(t.account.homeAccountId);
                    Bt(i, l);
                } catch (l) {
                    logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                }
            }
        } else if (t.loginHint) {
            logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request");
            Eo(i, t.loginHint);
            $t(i, t.loginHint);
            n?.addFields({
                loginHintFromRequest: true
            }, t_correlationId);
        }
    } else {
        logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
    }
    if (t.nonce) {
        Bu(i, t.nonce);
    }
    if (t.state) {
        xi(i, t.state);
    }
    if (t.claims || e.clientCapabilities && e.clientCapabilities.length > 0) {
        Je(i, t.claims, e.clientCapabilities);
    }
    if (t.embeddedClientId) {
        Kt(i, e.clientId, e.redirectUri);
    }
    if (e.instanceAware && (!t.extraQueryParameters || !Object.keys(t.extraQueryParameters).includes(To))) {
        Mi(i);
    }
    return i;
}
function qg(e, t, encodeExtraQueryParams, extraQueryParameters) {
    let o = pe(t, encodeExtraQueryParams, extraQueryParameters);
    return x.appendQueryString(e.authorizationEndpoint, o);
}
function Kg(account) {
    return account.idTokenClaims?.sid || null;
}
function Vg(account) {
    return account.loginHint || account.idTokenClaims?.login_hint || null;
}
const mh = ",";
const ph = "|";
function jg({ skus, libraryName, libraryVersion, extensionName, extensionVersion }) {
    let s = new Map([
        [
            0,
            [
                libraryName,
                libraryVersion
            ]
        ],
        [
            2,
            [
                extensionName,
                extensionVersion
            ]
        ]
    ]);
    let skuArr = [];
    if (skus?.length) {
        skuArr = skus.split(mh);
        if (skuArr.length < 4) {
            return skus;
        }
    } else {
        skuArr = Array.from({
            length: 4
        }, ()=>ph);
    }
    s.forEach((c, index)=>{
        if (c.length === 2 && c[0]?.length && c[1]?.length) {
            Yg({
                skuArr,
                index,
                skuName: c[0],
                skuVersion: c[1]
            });
        }
    });
    return skuArr.join(mh);
}
function Yg({ skuArr, index, skuName, skuVersion }) {
    if (index >= skuArr.length) {
        return;
    }
    skuArr[index] = [
        skuName,
        skuVersion
    ].join(ph);
}
class jt {
    constructor(e, t){
        this.cacheOutcome = j.NOT_APPLICABLE;
        this.cacheManager = t;
        this.apiId = e.apiId;
        this.correlationId = e.correlationId;
        this.wrapperSKU = e.wrapperSKU || f.EMPTY_STRING;
        this.wrapperVer = e.wrapperVer || f.EMPTY_STRING;
        this.telemetryCacheKey = de.CACHE_KEY + pt.CACHE_KEY_SEPARATOR + e.clientId;
    }
    generateCurrentRequestHeaderValue() {
        let e = `${this.apiId}${de.VALUE_SEPARATOR}${this.cacheOutcome}`;
        let t = [
            this.wrapperSKU,
            this.wrapperVer
        ];
        let r = this.getNativeBrokerErrorCode();
        if (r?.length) {
            t.push(`broker_error=${r}`);
        }
        let n = t.join(de.VALUE_SEPARATOR);
        let o = this.getRegionDiscoveryFields();
        let i = [
            e,
            o
        ].join(de.VALUE_SEPARATOR);
        return [
            de.SCHEMA_VERSION,
            i,
            n
        ].join(de.CATEGORY_SEPARATOR);
    }
    generateLastRequestHeaderValue() {
        let e = this.getLastRequests();
        let t = jt.maxErrorsToSend(e);
        let r = e.failedRequests.slice(0, 2 * t).join(de.VALUE_SEPARATOR);
        let n = e.errors.slice(0, t).join(de.VALUE_SEPARATOR);
        let length = e.errors.length;
        let i = t < length ? de.OVERFLOW_TRUE : de.OVERFLOW_FALSE;
        let s = [
            length,
            i
        ].join(de.VALUE_SEPARATOR);
        return [
            de.SCHEMA_VERSION,
            e.cacheHits,
            r,
            n,
            s
        ].join(de.CATEGORY_SEPARATOR);
    }
    cacheFailedRequest(e) {
        let t = this.getLastRequests();
        if (t.errors.length >= de.MAX_CACHED_ERRORS) {
            t.failedRequests.shift();
            t.failedRequests.shift();
            t.errors.shift();
        }
        t.failedRequests.push(this.apiId, this.correlationId);
        if (e instanceof Error && !!e && e.toString()) {
            if (e instanceof N) {
                if (e.subError) {
                    t.errors.push(e.subError);
                } else if (e.errorCode) {
                    t.errors.push(e.errorCode);
                } else {
                    t.errors.push(e.toString());
                }
            } else {
                t.errors.push(e.toString());
            }
        } else {
            t.errors.push(de.UNKNOWN_ERROR);
        }
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId);
    }
    incrementCacheHits() {
        let e = this.getLastRequests();
        e.cacheHits += 1;
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId);
        return e.cacheHits;
    }
    getLastRequests() {
        let e = {
            failedRequests: [],
            errors: [],
            cacheHits: 0
        };
        return this.cacheManager.getServerTelemetry(this.telemetryCacheKey) || e;
    }
    clearTelemetryCache() {
        let e = this.getLastRequests();
        let t = jt.maxErrorsToSend(e);
        let length = e.errors.length;
        if (t === length) {
            this.cacheManager.removeItem(this.telemetryCacheKey, this.correlationId);
        } else {
            let n = {
                failedRequests: e.failedRequests.slice(t * 2),
                errors: e.errors.slice(t),
                cacheHits: 0
            };
            this.cacheManager.setServerTelemetry(this.telemetryCacheKey, n, this.correlationId);
        }
    }
    static maxErrorsToSend(e) {
        let t;
        let r = 0;
        let n = 0;
        let length = e.errors.length;
        for(t = 0; t < length; t++){
            let i = e.failedRequests[2 * t] || f.EMPTY_STRING;
            let s = e.failedRequests[2 * t + 1] || f.EMPTY_STRING;
            let a = e.errors[t] || f.EMPTY_STRING;
            n += i.toString().length + s.toString().length + a.length + 3;
            if (n < de.MAX_LAST_HEADER_BYTES) {
                r += 1;
            } else {
                break;
            }
        }
        return r;
    }
    getRegionDiscoveryFields() {
        let e = [];
        e.push(this.regionUsed || f.EMPTY_STRING);
        e.push(this.regionSource || f.EMPTY_STRING);
        e.push(this.regionOutcome || f.EMPTY_STRING);
        return e.join(",");
    }
    updateRegionDiscoveryMetadata(e) {
        this.regionUsed = e.region_used;
        this.regionSource = e.region_source;
        this.regionOutcome = e.region_outcome;
    }
    setCacheOutcome(e) {
        this.cacheOutcome = e;
    }
    setNativeBrokerErrorCode(e) {
        let t = this.getLastRequests();
        t.nativeBrokerErrorCode = e;
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId);
    }
    getNativeBrokerErrorCode() {
        return this.getLastRequests().nativeBrokerErrorCode;
    }
    clearNativeBrokerErrorCode() {
        let e = this.getLastRequests();
        delete e.nativeBrokerErrorCode;
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId);
    }
    static makeExtraSkuString(e) {
        return jg(e);
    }
}
class wr {
    static deserializeJSONBlob(e) {
        if (!e) {
            return {};
        }
        return JSON.parse(e);
    }
    static deserializeAccounts(e) {
        let t = {};
        if (e) {
            Object.keys(e).map((r)=>{
                let n = e[r];
                let o = {
                    homeAccountId: n.home_account_id,
                    environment: n.environment,
                    realm: n.realm,
                    localAccountId: n.local_account_id,
                    username: n.username,
                    authorityType: n.authority_type,
                    name: n.name,
                    clientInfo: n.client_info,
                    lastModificationTime: n.last_modification_time,
                    lastModificationApp: n.last_modification_app,
                    tenantProfiles: n.tenantProfiles?.map((s)=>JSON.parse(s)),
                    lastUpdatedAt: Date.now().toString()
                };
                let i = new fe;
                yr.toObject(i, o);
                t[r] = i;
            });
        }
        return t;
    }
    static deserializeIdTokens(e) {
        let t = {};
        if (e) {
            Object.keys(e).map((r)=>{
                let n = e[r];
                let o = {
                    homeAccountId: n.home_account_id,
                    environment: n.environment,
                    credentialType: n.credential_type,
                    clientId: n.client_id,
                    secret: n.secret,
                    realm: n.realm,
                    lastUpdatedAt: Date.now().toString()
                };
                t[r] = o;
            });
        }
        return t;
    }
    static deserializeAccessTokens(e) {
        let t = {};
        if (e) {
            Object.keys(e).map((r)=>{
                let n = e[r];
                let o = {
                    homeAccountId: n.home_account_id,
                    environment: n.environment,
                    credentialType: n.credential_type,
                    clientId: n.client_id,
                    secret: n.secret,
                    realm: n.realm,
                    target: n.target,
                    cachedAt: n.cached_at,
                    expiresOn: n.expires_on,
                    extendedExpiresOn: n.extended_expires_on,
                    refreshOn: n.refresh_on,
                    keyId: n.key_id,
                    tokenType: n.token_type,
                    requestedClaims: n.requestedClaims,
                    requestedClaimsHash: n.requestedClaimsHash,
                    userAssertionHash: n.userAssertionHash,
                    lastUpdatedAt: Date.now().toString()
                };
                t[r] = o;
            });
        }
        return t;
    }
    static deserializeRefreshTokens(e) {
        let t = {};
        if (e) {
            Object.keys(e).map((r)=>{
                let n = e[r];
                let o = {
                    homeAccountId: n.home_account_id,
                    environment: n.environment,
                    credentialType: n.credential_type,
                    clientId: n.client_id,
                    secret: n.secret,
                    familyId: n.family_id,
                    target: n.target,
                    realm: n.realm,
                    lastUpdatedAt: Date.now().toString()
                };
                t[r] = o;
            });
        }
        return t;
    }
    static deserializeAppMetadata(e) {
        let t = {};
        if (e) {
            Object.keys(e).map((r)=>{
                let n = e[r];
                t[r] = {
                    clientId: n.client_id,
                    environment: n.environment,
                    familyId: n.family_id
                };
            });
        }
        return t;
    }
    static deserializeAllCache(e) {
        return {
            accounts: e.Account ? this.deserializeAccounts(e.Account) : {},
            idTokens: e.IdToken ? this.deserializeIdTokens(e.IdToken) : {},
            accessTokens: e.AccessToken ? this.deserializeAccessTokens(e.AccessToken) : {},
            refreshTokens: e.RefreshToken ? this.deserializeRefreshTokens(e.RefreshToken) : {},
            appMetadata: e.AppMetadata ? this.deserializeAppMetadata(e.AppMetadata) : {}
        };
    }
}
const gh = "system_assigned_managed_identity";
const ny = "managed_identity";
const Wa = `https://login.microsoftonline.com/${ny}/`;
const Ne = {
    AUTHORIZATION_HEADER_NAME: "Authorization",
    METADATA_HEADER_NAME: "Metadata",
    APP_SERVICE_SECRET_HEADER_NAME: "X-IDENTITY-HEADER",
    ML_AND_SF_SECRET_HEADER_NAME: "secret"
};
const ce = {
    API_VERSION: "api-version",
    RESOURCE: "resource",
    SHA256_TOKEN_TO_REFRESH: "token_sha256_to_refresh",
    XMS_CC: "xms_cc"
};
const v = {
    AZURE_POD_IDENTITY_AUTHORITY_HOST: "AZURE_POD_IDENTITY_AUTHORITY_HOST",
    DEFAULT_IDENTITY_CLIENT_ID: "DEFAULT_IDENTITY_CLIENT_ID",
    IDENTITY_ENDPOINT: "IDENTITY_ENDPOINT",
    IDENTITY_HEADER: "IDENTITY_HEADER",
    IDENTITY_SERVER_THUMBPRINT: "IDENTITY_SERVER_THUMBPRINT",
    IMDS_ENDPOINT: "IMDS_ENDPOINT",
    MSI_ENDPOINT: "MSI_ENDPOINT",
    MSI_SECRET: "MSI_SECRET"
};
const b = {
    APP_SERVICE: "AppService",
    AZURE_ARC: "AzureArc",
    CLOUD_SHELL: "CloudShell",
    DEFAULT_TO_IMDS: "DefaultToImds",
    IMDS: "Imds",
    MACHINE_LEARNING: "MachineLearning",
    SERVICE_FABRIC: "ServiceFabric"
};
const ne = {
    SYSTEM_ASSIGNED: "system-assigned",
    USER_ASSIGNED_CLIENT_ID: "user-assigned-client-id",
    USER_ASSIGNED_RESOURCE_ID: "user-assigned-resource-id",
    USER_ASSIGNED_OBJECT_ID: "user-assigned-object-id"
};
const J = {
    GET: "get",
    POST: "post"
};
const ji = {
    SUCCESS_RANGE_START: P.SUCCESS_RANGE_START,
    SUCCESS_RANGE_END: P.SUCCESS_RANGE_END,
    SERVER_ERROR: P.SERVER_ERROR
};
const yh = "REGION_NAME";
const Th = "MSAL_FORCE_REGION";
const Eh = 32;
const Ch = {
    SHA256: "sha256"
};
const Yi = {
    CV_CHARSET: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
};
const Qa = {
    KEY_SEPARATOR: "-"
};
const Re = {
    MSAL_SKU: "msal.js.node",
    JWT_BEARER_ASSERTION_TYPE: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    AUTHORIZATION_PENDING: "authorization_pending",
    HTTP_PROTOCOL: "http://",
    LOCALHOST: "localhost"
};
const St = {
    acquireTokenSilent: 62,
    acquireTokenByUsernamePassword: 371,
    acquireTokenByDeviceCode: 671,
    acquireTokenByClientCredential: 771,
    acquireTokenByCode: 871,
    acquireTokenByRefreshToken: 872
};
const Ke = {
    RSA_256: "RS256",
    PSS_256: "PS256",
    X5T_256: "x5t#S256",
    X5T: "x5t",
    X5C: "x5c",
    AUDIENCE: "aud",
    EXPIRATION_TIME: "exp",
    ISSUER: "iss",
    SUBJECT: "sub",
    NOT_BEFORE: "nbf",
    JWT_ID: "jti"
};
const Wi = {
    INTERVAL_MS: 100,
    TIMEOUT_MS: 5000
};
const Ah = 4096;
class Io {
    static getNetworkResponse(e, t, status) {
        return {
            headers: e,
            body: t,
            status
        };
    }
    static urlToHttpOptions(e) {
        let t = {
            protocol: e.protocol,
            hostname: e.hostname && e.hostname.startsWith("[") ? e.hostname.slice(1, -1) : e.hostname,
            hash: e.hash,
            search: e.search,
            pathname: e.pathname,
            path: `${e.pathname || ""}${e.search || ""}`,
            href: e.href
        };
        if (e.port !== "") {
            t.port = Number(e.port);
        }
        if (e.username || e.password) {
            t.auth = `${decodeURIComponent(e.username)}:${decodeURIComponent(e.password)}`;
        }
        return t;
    }
}
class _o {
    constructor(e, t){
        this.proxyUrl = e || "";
        this.customAgentOptions = t || {};
    }
    async sendGetRequestAsync(e, t, r) {
        if (this.proxyUrl) {
            return _h(e, this.proxyUrl, J.GET, t, this.customAgentOptions, r);
        } else {
            return Sh(e, J.GET, t, this.customAgentOptions, r);
        }
    }
    async sendPostRequestAsync(e, t) {
        if (this.proxyUrl) {
            return _h(e, this.proxyUrl, J.POST, t, this.customAgentOptions);
        } else {
            return Sh(e, J.POST, t, this.customAgentOptions);
        }
    }
}
const _h = (e, proxyUrl, r, n, customAgentOptions, i)=>{
    let s = new URL(e);
    let a = new URL(proxyUrl);
    let c = n?.headers || {};
    let l = {
        host: a.hostname,
        port: a.port,
        method: "CONNECT",
        path: s.hostname,
        headers: c
    };
    if (customAgentOptions && Object.keys(customAgentOptions).length) {
        l.agent = new Ja.Agent(customAgentOptions);
    }
    let d = "";
    if (r === J.POST) {
        let m = n?.body || "";
        d = `Content-Type: application/x-www-form-urlencoded\r
Content-Length: ${m.length}\r
\r
${m}`;
    } else if (i) {
        l.timeout = i;
    }
    let u = `${r.toUpperCase()} ${s.href} HTTP/1.1\r
Host: ${s.host}\r
Connection: close\r
` + d + `\r
`;
    return new Promise((resolve, reject)=>{
        let y = Ja.request(l);
        if (i) {
            y.on("timeout", ()=>{
                y.destroy();
                reject(Error("Request time out"));
            });
        }
        y.end();
        y.on("connect", (T, _)=>{
            let k = T?.statusCode || ji.SERVER_ERROR;
            if (k < ji.SUCCESS_RANGE_START || k > ji.SUCCESS_RANGE_END) {
                y.destroy();
                _.destroy();
                reject(Error(`Error connecting to proxy. Http status code: ${T.statusCode}. Http status message: ${T?.statusMessage || "Unknown"}`));
            }
            _.write(u);
            let U = [];
            _.on("data", (B)=>{
                U.push(B);
            });
            _.on("end", ()=>{
                let X = Buffer.concat([
                    ...U
                ]).toString().split(`\r
`);
                let I = parseInt(X[0].split(" ")[1]);
                let A = X[0].split(" ").slice(2).join(" ");
                let E = X[X.length - 1];
                let S = X.slice(1, X.length - 2);
                let H = new Map;
                S.forEach((er)=>{
                    let Bc = er.split(new RegExp(/:\s(.*)/s));
                    let um = Bc[0];
                    let ks = Bc[1];
                    try {
                        let No = JSON.parse(ks);
                        if (No && typeof No === "object") {
                            ks = No;
                        }
                    } catch (No) {}
                    H.set(um, ks);
                });
                let D = Object.fromEntries(H);
                let se = Io.getNetworkResponse(D, Rh(I, A, D, E), I);
                if ((I < P.SUCCESS_RANGE_START || I > P.SUCCESS_RANGE_END) && se.body.error !== Re.AUTHORIZATION_PENDING) {
                    y.destroy();
                }
                resolve(se);
            });
            _.on("error", (B)=>{
                y.destroy();
                _.destroy();
                reject(Error(B.toString()));
            });
        });
        y.on("error", (T)=>{
            y.destroy();
            reject(Error(T.toString()));
        });
    });
};
const Sh = (e, method, r, customAgentOptions, o)=>{
    let i = method === J.POST;
    let s = r?.body || "";
    let a = new URL(e);
    let c = r?.headers || {};
    let l = {
        method,
        headers: c,
        ...Io.urlToHttpOptions(a)
    };
    if (customAgentOptions && Object.keys(customAgentOptions).length) {
        l.agent = new Ih.Agent(customAgentOptions);
    }
    if (i) {
        l.headers = {
            ...l.headers,
            "Content-Length": s.length
        };
    } else if (o) {
        l.timeout = o;
    }
    return new Promise((resolve, reject)=>{
        let m;
        if (l.protocol === "http:") {
            m = Ja.request(l);
        } else {
            m = Ih.request(l);
        }
        if (i) {
            m.write(s);
        }
        if (o) {
            m.on("timeout", ()=>{
                m.destroy();
                reject(Error("Request time out"));
            });
        }
        m.end();
        m.on("response", (p)=>{
            let { headers, statusCode, statusMessage } = p;
            let k = [];
            p.on("data", (U)=>{
                k.push(U);
            });
            p.on("end", ()=>{
                let U = Buffer.concat([
                    ...k
                ]).toString();
                let B = headers;
                let X = Io.getNetworkResponse(B, Rh(statusCode, statusMessage, B, U), statusCode);
                if ((statusCode < P.SUCCESS_RANGE_START || statusCode > P.SUCCESS_RANGE_END) && X.body.error !== Re.AUTHORIZATION_PENDING) {
                    m.destroy();
                }
                resolve(X);
            });
        });
        m.on("error", (p)=>{
            m.destroy();
            reject(Error(p.toString()));
        });
    });
};
var Rh = (e, t, r, n)=>{
    let o;
    try {
        o = JSON.parse(n);
    } catch (i) {
        let s;
        let a;
        if (e >= P.CLIENT_ERROR_RANGE_START && e <= P.CLIENT_ERROR_RANGE_END) {
            s = "client_error";
            a = "A client";
        } else if (e >= P.SERVER_ERROR_RANGE_START && e <= P.SERVER_ERROR_RANGE_END) {
            s = "server_error";
            a = "A server";
        } else {
            s = "unknown_error";
            a = "An unknown";
        }
        o = {
            error: s,
            error_description: `${a} error occured.
Http status code: ${e}
Http status message: ${t || "Unknown"}
Headers: ${JSON.stringify(r)}`
        };
    }
    return o;
};
const Qi = "invalid_file_extension";
const Ji = "invalid_file_path";
const Yt = "invalid_managed_identity_id_type";
const Xi = "invalid_secret";
const wh = "missing_client_id";
const vh = "network_unavailable";
const Zi = "platform_not_supported";
const es = "unable_to_create_azure_arc";
const ts = "unable_to_create_cloud_shell";
const rs = "unable_to_create_source";
const So = "unable_to_read_secret_file";
const kh = "user_assigned_not_available_at_runtime";
const ns = "www_authenticate_header_missing";
const os = "www_authenticate_header_unsupported_format";
const vr = {
    [v.AZURE_POD_IDENTITY_AUTHORITY_HOST]: "azure_pod_identity_authority_host_url_malformed",
    [v.IDENTITY_ENDPOINT]: "identity_endpoint_url_malformed",
    [v.IMDS_ENDPOINT]: "imds_endpoint_url_malformed",
    [v.MSI_ENDPOINT]: "msi_endpoint_url_malformed"
};
const oy = {
    [Qi]: "The file path in the WWW-Authenticate header does not contain a .key file.",
    [Ji]: "The file path in the WWW-Authenticate header is not in a valid Windows or Linux Format.",
    [Yt]: "More than one ManagedIdentityIdType was provided.",
    [Xi]: "The secret in the file on the file path in the WWW-Authenticate header is greater than 4096 bytes.",
    [Zi]: "The platform is not supported by Azure Arc. Azure Arc only supports Windows and Linux.",
    [wh]: "A ManagedIdentityId id was not provided.",
    [vr.AZURE_POD_IDENTITY_AUTHORITY_HOST]: `The Managed Identity's '${v.AZURE_POD_IDENTITY_AUTHORITY_HOST}' environment variable is malformed.`,
    [vr.IDENTITY_ENDPOINT]: `The Managed Identity's '${v.IDENTITY_ENDPOINT}' environment variable is malformed.`,
    [vr.IMDS_ENDPOINT]: `The Managed Identity's '${v.IMDS_ENDPOINT}' environment variable is malformed.`,
    [vr.MSI_ENDPOINT]: `The Managed Identity's '${v.MSI_ENDPOINT}' environment variable is malformed.`,
    [vh]: "Authentication unavailable. The request to the managed identity endpoint timed out.",
    [es]: "Azure Arc Managed Identities can only be system assigned.",
    [ts]: "Cloud Shell Managed Identities can only be system assigned.",
    [rs]: "Unable to create a Managed Identity source based on environment variables.",
    [So]: "Unable to read the secret file.",
    [kh]: "Service Fabric user assigned managed identity ClientId or ResourceId is not configurable at runtime.",
    [ns]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is missing.",
    [os]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is in an unsupported format."
};
class Xa extends N {
    constructor(e){
        super(e, oy[e]);
        this.name = "ManagedIdentityError";
        Object.setPrototypeOf(this, Xa.prototype);
    }
}
function ae(e) {
    return new Xa(e);
}
class Za {
    get id() {
        return this._id;
    }
    set id(e) {
        this._id = e;
    }
    get idType() {
        return this._idType;
    }
    set idType(e) {
        this._idType = e;
    }
    constructor(e){
        let t = e?.userAssignedClientId;
        let r = e?.userAssignedResourceId;
        let n = e?.userAssignedObjectId;
        if (t) {
            if (r || n) {
                throw ae(Yt);
            }
            this.id = t;
            this.idType = ne.USER_ASSIGNED_CLIENT_ID;
        } else if (r) {
            if (t || n) {
                throw ae(Yt);
            }
            this.id = r;
            this.idType = ne.USER_ASSIGNED_RESOURCE_ID;
        } else if (n) {
            if (t || r) {
                throw ae(Yt);
            }
            this.id = n;
            this.idType = ne.USER_ASSIGNED_OBJECT_ID;
        } else {
            this.id = gh;
            this.idType = ne.SYSTEM_ASSIGNED;
        }
    }
}
const le = {
    invalidLoopbackAddressType: {
        code: "invalid_loopback_server_address_type",
        desc: "Loopback server address is not type string. This is unexpected."
    },
    unableToLoadRedirectUri: {
        code: "unable_to_load_redirectUrl",
        desc: "Loopback server callback was invoked without a url. This is unexpected."
    },
    noAuthCodeInResponse: {
        code: "no_auth_code_in_response",
        desc: "No auth code found in the server response. Please check your network trace to determine what happened."
    },
    noLoopbackServerExists: {
        code: "no_loopback_server_exists",
        desc: "No loopback server exists yet."
    },
    loopbackServerAlreadyExists: {
        code: "loopback_server_already_exists",
        desc: "Loopback server already exists. Cannot create another."
    },
    loopbackServerTimeout: {
        code: "loopback_server_timeout",
        desc: "Timed out waiting for auth code listener to be registered."
    },
    stateNotFoundError: {
        code: "state_not_found",
        desc: "State not found. Please verify that the request originated from msal."
    },
    thumbprintMissing: {
        code: "thumbprint_missing_from_client_certificate",
        desc: "Client certificate does not contain a SHA-1 or SHA-256 thumbprint."
    },
    redirectUriNotSupported: {
        code: "redirect_uri_not_supported",
        desc: "RedirectUri is not supported in this scenario. Please remove redirectUri from the request."
    }
};
class te extends N {
    constructor(e, t){
        super(e, t);
        this.name = "NodeAuthError";
    }
    static createInvalidLoopbackAddressTypeError() {
        return new te(le.invalidLoopbackAddressType.code, `${le.invalidLoopbackAddressType.desc}`);
    }
    static createUnableToLoadRedirectUrlError() {
        return new te(le.unableToLoadRedirectUri.code, `${le.unableToLoadRedirectUri.desc}`);
    }
    static createNoAuthCodeInResponseError() {
        return new te(le.noAuthCodeInResponse.code, `${le.noAuthCodeInResponse.desc}`);
    }
    static createNoLoopbackServerExistsError() {
        return new te(le.noLoopbackServerExists.code, `${le.noLoopbackServerExists.desc}`);
    }
    static createLoopbackServerAlreadyExistsError() {
        return new te(le.loopbackServerAlreadyExists.code, `${le.loopbackServerAlreadyExists.desc}`);
    }
    static createLoopbackServerTimeoutError() {
        return new te(le.loopbackServerTimeout.code, `${le.loopbackServerTimeout.desc}`);
    }
    static createStateNotFoundError() {
        return new te(le.stateNotFoundError.code, le.stateNotFoundError.desc);
    }
    static createThumbprintMissingError() {
        return new te(le.thumbprintMissing.code, le.thumbprintMissing.desc);
    }
    static createRedirectUriNotSupportedError() {
        return new te(le.redirectUriNotSupported.code, le.redirectUriNotSupported.desc);
    }
}
const iy = {
    clientId: f.EMPTY_STRING,
    authority: f.DEFAULT_AUTHORITY,
    clientSecret: f.EMPTY_STRING,
    clientAssertion: f.EMPTY_STRING,
    clientCertificate: {
        thumbprint: f.EMPTY_STRING,
        thumbprintSha256: f.EMPTY_STRING,
        privateKey: f.EMPTY_STRING,
        x5c: f.EMPTY_STRING
    },
    knownAuthorities: [],
    cloudDiscoveryMetadata: f.EMPTY_STRING,
    authorityMetadata: f.EMPTY_STRING,
    clientCapabilities: [],
    protocolMode: Ae.AAD,
    azureCloudOptions: {
        azureCloudInstance: Ht.None,
        tenant: f.EMPTY_STRING
    },
    skipAuthorityMetadataCache: false,
    encodeExtraQueryParams: false
};
const sy = {
    claimsBasedCachingEnabled: false
};
const ec = {
    loggerCallback: ()=>{},
    piiLoggingEnabled: false,
    logLevel: G.Info
};
const ay = {
    loggerOptions: ec,
    networkClient: new _o,
    proxyUrl: f.EMPTY_STRING,
    customAgentOptions: {},
    disableInternalRetries: false
};
const cy = {
    application: {
        appName: f.EMPTY_STRING,
        appVersion: f.EMPTY_STRING
    }
};
function bh({ auth, broker, cache, system, telemetry }) {
    let i = {
        ...ay,
        networkClient: new _o(system?.proxyUrl, system?.customAgentOptions),
        loggerOptions: system?.loggerOptions || ec,
        disableInternalRetries: system?.disableInternalRetries || false
    };
    if (!!auth.clientCertificate && !auth.clientCertificate.thumbprint && !auth.clientCertificate.thumbprintSha256) {
        throw te.createStateNotFoundError();
    }
    return {
        auth: {
            ...iy,
            ...auth
        },
        broker: {
            ...broker
        },
        cache: {
            ...sy,
            ...cache
        },
        system: {
            ...i,
            ...system
        },
        telemetry: {
            ...cy,
            ...telemetry
        }
    };
}
function Ph({ clientCapabilities, managedIdentityIdParams, system }) {
    let managedIdentityId = new Za(managedIdentityIdParams);
    let loggerOptions = system?.loggerOptions || ec;
    let networkClient;
    if (system?.networkClient) {
        networkClient = system.networkClient;
    } else {
        networkClient = new _o(system?.proxyUrl, system?.customAgentOptions);
    }
    return {
        clientCapabilities: clientCapabilities || [],
        managedIdentityId,
        system: {
            loggerOptions,
            networkClient
        },
        disableInternalRetries: system?.disableInternalRetries || false
    };
}
const tc = {
    randomUUID
};
const ss = new Uint8Array(256);
let ss_length = ss.length;
function rc() {
    if (ss_length > ss.length - 16) {
        randomFillSync(ss);
        ss_length = 0;
    }
    return ss.slice(ss_length, ss_length += 16);
}
const ge = [];
for(let e = 0; e < 256; ++e){
    ge.push((e + 256).toString(16).slice(1));
}
function Oh(e, t = 0) {
    return `${ge[e[t + 0]] + ge[e[t + 1]] + ge[e[t + 2]] + ge[e[t + 3]]}-${ge[e[t + 4]]}${ge[e[t + 5]]}-${ge[e[t + 6]]}${ge[e[t + 7]]}-${ge[e[t + 8]]}${ge[e[t + 9]]}-${ge[e[t + 10]]}${ge[e[t + 11]]}${ge[e[t + 12]]}${ge[e[t + 13]]}${ge[e[t + 14]]}${ge[e[t + 15]]}`.toLowerCase();
}
function uy(e, t, r) {
    if (tc.randomUUID && !t && !e) {
        return tc.randomUUID();
    }
    e = e || {};
    let n = e.random ?? e.rng?.() ?? rc();
    if (n.length < 16) {
        throw Error("Random bytes length must be >= 16");
    }
    n[6] = n[6] & 15 | 64;
    n[8] = n[8] & 63 | 128;
    if (t) {
        r = r || 0;
        if (r < 0 || r + 16 > t.length) {
            throw RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
        }
        for(let o = 0; o < 16; ++o){
            t[r + o] = n[o];
        }
        return t;
    }
    return Oh(n);
}
const nc = uy;
class Ro {
    generateGuid() {
        return nc();
    }
    isGuid(e) {
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e);
    }
}
class xe {
    static base64Encode(e, t) {
        return Buffer.from(e, t).toString(me.BASE64);
    }
    static base64EncodeUrl(e, t) {
        return xe.base64Encode(e, t).replace(/=/g, f.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
    }
    static base64Decode(e) {
        return Buffer.from(e, me.BASE64).toString("utf8");
    }
    static base64DecodeUrl(e) {
        let t = e.replace(/-/g, "+").replace(/_/g, "/");
        while(t.length % 4){
            t += "=";
        }
        return xe.base64Decode(t);
    }
}
class kr {
    sha256(e) {
        return hy.createHash(Ch.SHA256).update(e).digest();
    }
}
class oc {
    constructor(){
        this.hashUtils = new kr;
    }
    async generatePkceCodes() {
        let verifier = this.generateCodeVerifier();
        let challenge = this.generateCodeChallengeFromVerifier(verifier);
        return {
            verifier,
            challenge
        };
    }
    generateCodeVerifier() {
        let e = [];
        let t = 256 - 256 % Yi.CV_CHARSET.length;
        while(e.length <= Eh){
            let n = hy.randomBytes(1)[0];
            if (n >= t) {
                continue;
            }
            let o = n % Yi.CV_CHARSET.length;
            e.push(Yi.CV_CHARSET[o]);
        }
        let r = e.join(f.EMPTY_STRING);
        return xe.base64EncodeUrl(r);
    }
    generateCodeChallengeFromVerifier(e) {
        return xe.base64EncodeUrl(this.hashUtils.sha256(e).toString(me.BASE64), me.BASE64);
    }
}
class Wt {
    constructor(){
        this.pkceGenerator = new oc;
        this.guidGenerator = new Ro;
        this.hashUtils = new kr;
    }
    base64UrlEncode() {
        throw Error("Method not implemented.");
    }
    encodeKid() {
        throw Error("Method not implemented.");
    }
    createNewGuid() {
        return this.guidGenerator.generateGuid();
    }
    base64Encode(e) {
        return xe.base64Encode(e);
    }
    base64Decode(e) {
        return xe.base64Decode(e);
    }
    generatePkceCodes() {
        return this.pkceGenerator.generatePkceCodes();
    }
    getPublicKeyThumbprint() {
        throw Error("Method not implemented.");
    }
    removeTokenBindingKey() {
        throw Error("Method not implemented.");
    }
    clearKeystore() {
        throw Error("Method not implemented.");
    }
    signJwt() {
        throw Error("Method not implemented.");
    }
    async hashString(e) {
        return xe.base64EncodeUrl(this.hashUtils.sha256(e).toString(me.BASE64), me.BASE64);
    }
}
function Nh(e) {
    let t = e.credentialType === K.REFRESH_TOKEN && e.familyId || e.clientId;
    let r = e.tokenType && e.tokenType.toLowerCase() !== L.BEARER.toLowerCase() ? e.tokenType.toLowerCase() : "";
    return [
        e.homeAccountId,
        e.environment,
        e.credentialType,
        t,
        e.realm || "",
        e.target || "",
        e.requestedClaimsHash || "",
        r
    ].join(Qa.KEY_SEPARATOR).toLowerCase();
}
function xh(e) {
    let t = e.homeAccountId.split(".")[1];
    return [
        e.homeAccountId,
        e.environment,
        t || e.tenantId || ""
    ].join(Qa.KEY_SEPARATOR).toLowerCase();
}
class br extends yr {
    constructor(e, t, r, n){
        super(t, r, e, new bn, n);
        this.cache = {};
        this.changeEmitters = [];
        this.logger = e;
    }
    registerChangeEmitter(e) {
        this.changeEmitters.push(e);
    }
    emitChange() {
        this.changeEmitters.forEach((e)=>e.call(null));
    }
    cacheToInMemoryCache(e) {
        let t = {
            accounts: {},
            idTokens: {},
            accessTokens: {},
            refreshTokens: {},
            appMetadata: {}
        };
        for(let r in e){
            let n = e[r];
            if (typeof n !== "object") {
                continue;
            }
            if (n instanceof fe) {
                t.accounts[r] = n;
            } else if (th(n)) {
                t.idTokens[r] = n;
            } else if (eh(n)) {
                t.accessTokens[r] = n;
            } else if (rh(n)) {
                t.refreshTokens[r] = n;
            } else if (nh(r, n)) {
                t.appMetadata[r] = n;
            } else {
                continue;
            }
        }
        return t;
    }
    inMemoryCacheToCache(e) {
        let t = this.getCache();
        t = {
            ...t,
            ...e.accounts,
            ...e.idTokens,
            ...e.accessTokens,
            ...e.refreshTokens,
            ...e.appMetadata
        };
        return t;
    }
    getInMemoryCache() {
        this.logger.trace("Getting in-memory cache");
        return this.cacheToInMemoryCache(this.getCache());
    }
    setInMemoryCache(e) {
        this.logger.trace("Setting in-memory cache");
        let t = this.inMemoryCacheToCache(e);
        this.setCache(t);
        this.emitChange();
    }
    getCache() {
        this.logger.trace("Getting cache key-value store");
        return this.cache;
    }
    setCache(e) {
        this.logger.trace("Setting cache key value store");
        this.cache = e;
        this.emitChange();
    }
    getItem(e) {
        this.logger.tracePii(`Item key: ${e}`);
        return this.getCache()[e];
    }
    setItem(e, t) {
        this.logger.tracePii(`Item key: ${e}`);
        let r = this.getCache();
        r[e] = t;
        this.setCache(r);
    }
    generateCredentialKey(e) {
        return Nh(e);
    }
    generateAccountKey(e) {
        return xh(e);
    }
    getAccountKeys() {
        let e = this.getInMemoryCache();
        return Object.keys(e.accounts);
    }
    getTokenKeys() {
        let e = this.getInMemoryCache();
        return {
            idToken: Object.keys(e.idTokens),
            accessToken: Object.keys(e.accessTokens),
            refreshToken: Object.keys(e.refreshTokens)
        };
    }
    getAccount(e) {
        if (this.getItem(e)) {
            return Object.assign(new fe, this.getItem(e));
        }
        return null;
    }
    async setAccount(e) {
        let t = this.generateAccountKey(fe.getAccountInfo(e));
        this.setItem(t, e);
    }
    getIdTokenCredential(e) {
        let t = this.getItem(e);
        if (th(t)) {
            return t;
        }
        return null;
    }
    async setIdTokenCredential(e) {
        let t = this.generateCredentialKey(e);
        this.setItem(t, e);
    }
    getAccessTokenCredential(e) {
        let t = this.getItem(e);
        if (eh(t)) {
            return t;
        }
        return null;
    }
    async setAccessTokenCredential(e) {
        let t = this.generateCredentialKey(e);
        this.setItem(t, e);
    }
    getRefreshTokenCredential(e) {
        let t = this.getItem(e);
        if (rh(t)) {
            return t;
        }
        return null;
    }
    async setRefreshTokenCredential(e) {
        let t = this.generateCredentialKey(e);
        this.setItem(t, e);
    }
    getAppMetadata(e) {
        let t = this.getItem(e);
        if (nh(e, t)) {
            return t;
        }
        return null;
    }
    setAppMetadata(e) {
        let t = Ug(e);
        this.setItem(t, e);
    }
    getServerTelemetry(e) {
        let t = this.getItem(e);
        if (t && Mg(e, t)) {
            return t;
        }
        return null;
    }
    setServerTelemetry(e, t) {
        this.setItem(e, t);
    }
    getAuthorityMetadata(e) {
        let t = this.getItem(e);
        if (t && Lg(e, t)) {
            return t;
        }
        return null;
    }
    getAuthorityMetadataKeys() {
        return this.getKeys().filter((e)=>this.isAuthorityMetadata(e));
    }
    setAuthorityMetadata(e, t) {
        this.setItem(e, t);
    }
    getThrottlingCache(e) {
        let t = this.getItem(e);
        if (t && Dg(e, t)) {
            return t;
        }
        return null;
    }
    setThrottlingCache(e, t) {
        this.setItem(e, t);
    }
    removeItem(e) {
        this.logger.tracePii(`Item key: ${e}`);
        let t = false;
        let r = this.getCache();
        if (r[e]) {
            delete r[e];
            t = true;
        }
        if (t) {
            this.setCache(r);
            this.emitChange();
        }
        return t;
    }
    removeOutdatedAccount(e) {
        this.removeItem(e);
    }
    containsKey(e) {
        return this.getKeys().includes(e);
    }
    getKeys() {
        this.logger.trace("Retrieving all cache keys");
        let e = this.getCache();
        return [
            ...Object.keys(e)
        ];
    }
    clear() {
        this.logger.trace("Clearing cache entries created by MSAL");
        this.getKeys().forEach((t)=>{
            this.removeItem(t);
        });
        this.emitChange();
    }
    static generateInMemoryCache(e) {
        return wr.deserializeAllCache(wr.deserializeJSONBlob(e));
    }
    static generateJsonCache(e) {
        return Jr.serializeAllCache(e);
    }
    updateCredentialCacheKey(e, t) {
        let r = this.generateCredentialKey(t);
        if (e !== r) {
            let n = this.getItem(e);
            if (n) {
                this.removeItem(e);
                this.setItem(r, n);
                this.logger.verbose(`Updated an outdated ${t.credentialType} cache key`);
                return r;
            } else {
                this.logger.error(`Attempted to update an outdated ${t.credentialType} cache key but no item matching the outdated key was found in storage`);
            }
        }
        return e;
    }
}
const wo = {
    Account: {},
    IdToken: {},
    AccessToken: {},
    RefreshToken: {},
    AppMetadata: {}
};
class as {
    constructor(e, t, r){
        this.cacheHasChanged = false;
        this.storage = e;
        this.storage.registerChangeEmitter(this.handleChangeEvent.bind(this));
        if (r) {
            this.persistence = r;
        }
        this.logger = t;
    }
    hasChanged() {
        return this.cacheHasChanged;
    }
    serialize() {
        this.logger.trace("Serializing in-memory cache");
        let e = Jr.serializeAllCache(this.storage.getInMemoryCache());
        if (this.cacheSnapshot) {
            this.logger.trace("Reading cache snapshot from disk");
            e = this.mergeState(JSON.parse(this.cacheSnapshot), e);
        } else {
            this.logger.trace("No cache snapshot to merge");
        }
        this.cacheHasChanged = false;
        return JSON.stringify(e);
    }
    deserialize(e) {
        this.logger.trace("Deserializing JSON to in-memory cache");
        this.cacheSnapshot = e;
        if (this.cacheSnapshot) {
            this.logger.trace("Reading cache snapshot from disk");
            let t = wr.deserializeAllCache(this.overlayDefaults(JSON.parse(this.cacheSnapshot)));
            this.storage.setInMemoryCache(t);
        } else {
            this.logger.trace("No cache snapshot to deserialize");
        }
    }
    getKVStore() {
        return this.storage.getCache();
    }
    getCacheSnapshot() {
        let e = br.generateInMemoryCache(this.cacheSnapshot);
        return this.storage.inMemoryCacheToCache(e);
    }
    async getAllAccounts(e = new Wt().createNewGuid()) {
        this.logger.trace("getAllAccounts called");
        let t;
        try {
            if (this.persistence) {
                t = new Xe(this, false);
                await this.persistence.beforeCacheAccess(t);
            }
            return this.storage.getAllAccounts({}, e);
        } finally{
            if (this.persistence && t) {
                await this.persistence.afterCacheAccess(t);
            }
        }
    }
    async getAccountByHomeId(e) {
        let t = await this.getAllAccounts();
        if (e && t && t.length) {
            return t.filter((r)=>r.homeAccountId === e)[0] || null;
        } else {
            return null;
        }
    }
    async getAccountByLocalId(e) {
        let t = await this.getAllAccounts();
        if (e && t && t.length) {
            return t.filter((r)=>r.localAccountId === e)[0] || null;
        } else {
            return null;
        }
    }
    async removeAccount(e, t) {
        this.logger.trace("removeAccount called");
        let r;
        try {
            if (this.persistence) {
                r = new Xe(this, true);
                await this.persistence.beforeCacheAccess(r);
            }
            this.storage.removeAccount(e, t || new Ro().generateGuid());
        } finally{
            if (this.persistence && r) {
                await this.persistence.afterCacheAccess(r);
            }
        }
    }
    async overwriteCache() {
        if (!this.persistence) {
            this.logger.info("No persistence layer specified, cache cannot be overwritten");
            return;
        }
        this.logger.info("Overwriting in-memory cache with persistent cache");
        this.storage.clear();
        let e = new Xe(this, false);
        await this.persistence.beforeCacheAccess(e);
        let t = this.getCacheSnapshot();
        this.storage.setCache(t);
        await this.persistence.afterCacheAccess(e);
    }
    handleChangeEvent() {
        this.cacheHasChanged = true;
    }
    mergeState(e, t) {
        this.logger.trace("Merging in-memory cache with cache snapshot");
        let r = this.mergeRemovals(e, t);
        return this.mergeUpdates(r, t);
    }
    mergeUpdates(e, t) {
        Object.keys(t).forEach((r)=>{
            let n = t[r];
            if (!e.hasOwnProperty(r)) {
                if (n !== null) {
                    e[r] = n;
                }
            } else {
                let o = n !== null;
                let i = typeof n === "object";
                let s = !Array.isArray(n);
                let a = typeof e[r] !== "undefined" && e[r] !== null;
                if (o && i && s && a) {
                    this.mergeUpdates(e[r], n);
                } else {
                    e[r] = n;
                }
            }
        });
        return e;
    }
    mergeRemovals(e, t) {
        this.logger.trace("Remove updated entries in cache");
        let Account = e.Account ? this.mergeRemovalsDict(e.Account, t.Account) : e.Account;
        let AccessToken = e.AccessToken ? this.mergeRemovalsDict(e.AccessToken, t.AccessToken) : e.AccessToken;
        let RefreshToken = e.RefreshToken ? this.mergeRemovalsDict(e.RefreshToken, t.RefreshToken) : e.RefreshToken;
        let IdToken = e.IdToken ? this.mergeRemovalsDict(e.IdToken, t.IdToken) : e.IdToken;
        let AppMetadata = e.AppMetadata ? this.mergeRemovalsDict(e.AppMetadata, t.AppMetadata) : e.AppMetadata;
        return {
            ...e,
            Account,
            AccessToken,
            RefreshToken,
            IdToken,
            AppMetadata
        };
    }
    mergeRemovalsDict(e, t) {
        let r = {
            ...e
        };
        Object.keys(e).forEach((n)=>{
            if (!t || !t.hasOwnProperty(n)) {
                delete r[n];
            }
        });
        return r;
    }
    overlayDefaults(e) {
        this.logger.trace("Overlaying input cache with the default cache");
        return {
            Account: {
                ...wo.Account,
                ...e.Account
            },
            IdToken: {
                ...wo.IdToken,
                ...e.IdToken
            },
            AccessToken: {
                ...wo.AccessToken,
                ...e.AccessToken
            },
            RefreshToken: {
                ...wo.RefreshToken,
                ...e.RefreshToken
            },
            AppMetadata: {
                ...wo.AppMetadata,
                ...e.AppMetadata
            }
        };
    }
}
const Lf = Se(Uf(), 1);
class ct {
    static fromAssertion(e) {
        let t = new ct;
        t.jwt = e;
        return t;
    }
    static fromCertificate(e, t, r) {
        let n = new ct;
        n.privateKey = t;
        n.thumbprint = e;
        n.useSha256 = false;
        if (r) {
            n.publicCertificate = this.parseCertificate(r);
        }
        return n;
    }
    static fromCertificateWithSha256Thumbprint(e, t, r) {
        let n = new ct;
        n.privateKey = t;
        n.thumbprint = e;
        n.useSha256 = true;
        if (r) {
            n.publicCertificate = this.parseCertificate(r);
        }
        return n;
    }
    getJwt(e, t, r) {
        if (this.privateKey && this.thumbprint) {
            if (this.jwt && !this.isExpired() && t === this.issuer && r === this.jwtAudience) {
                return this.jwt;
            }
            return this.createJwt(e, t, r);
        }
        if (this.jwt) {
            return this.jwt;
        }
        throw g(uo);
    }
    createJwt(e, t, r) {
        this.issuer = t;
        this.jwtAudience = r;
        let n = Q();
        this.expirationTime = n + 600;
        let i = {
            alg: this.useSha256 ? Ke.PSS_256 : Ke.RSA_256
        };
        let s = this.useSha256 ? Ke.X5T_256 : Ke.X5T;
        Object.assign(i, {
            [s]: xe.base64EncodeUrl(this.thumbprint, me.HEX)
        });
        if (this.publicCertificate) {
            Object.assign(i, {
                [Ke.X5C]: this.publicCertificate
            });
        }
        let a = {
            [Ke.AUDIENCE]: this.jwtAudience,
            [Ke.EXPIRATION_TIME]: this.expirationTime,
            [Ke.ISSUER]: this.issuer,
            [Ke.SUBJECT]: this.issuer,
            [Ke.NOT_BEFORE]: n,
            [Ke.JWT_ID]: e.createNewGuid()
        };
        this.jwt = Lf.default.sign(a, this.privateKey, {
            header: i
        });
        return this.jwt;
    }
    isExpired() {
        return this.expirationTime < Q();
    }
    static parseCertificate(e) {
        let t = /-----BEGIN CERTIFICATE-----\r*\n(.+?)\r*\n-----END CERTIFICATE-----/gs;
        let r = [];
        let n;
        while((n = t.exec(e)) !== null){
            r.push(n[1].replace(/\r*\n/g, f.EMPTY_STRING));
        }
        return r;
    }
}
const ps = "@azure/msal-node";
const lt = "3.8.1";
class gs extends Te {
    constructor(e){
        super(e);
    }
    async acquireToken(e) {
        this.logger.info("in acquireToken call in username-password client");
        let t = Q();
        let r = await this.executeTokenRequest(this.authority, e);
        let n = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
        n.validateTokenResponse(r.body);
        return n.handleServerTokenResponse(r.body, this.authority, t, e);
    }
    async executeTokenRequest(e, t) {
        let r = this.createTokenQueryParameters(t);
        let n = x.appendQueryString(e.tokenEndpoint, r);
        let o = await this.createTokenRequestBody(t);
        let i = this.createTokenRequestHeaders({
            credential: t.username,
            type: Ie.UPN
        });
        let s = {
            clientId: this.config.authOptions.clientId,
            authority: e.canonicalAuthority,
            scopes: t.scopes,
            claims: t.claims,
            authenticationScheme: t.authenticationScheme,
            resourceRequestMethod: t.resourceRequestMethod,
            resourceRequestUri: t.resourceRequestUri,
            shrClaims: t.shrClaims,
            sshKid: t.sshKid
        };
        return this.executePostToTokenEndpoint(n, o, i, s, t.correlationId);
    }
    async createTokenRequestBody(e) {
        let t = new Map;
        Qe(t, this.config.authOptions.clientId);
        Og(t, e.username);
        Ng(t, e.password);
        We(t, e.scopes);
        Du(t, Xr.IDTOKEN_TOKEN);
        zt(t, Pe.RESOURCE_OWNER_PASSWORD_GRANT);
        At(t);
        Et(t, this.config.libraryInfo);
        Ct(t, this.config.telemetry.application);
        qt(t);
        if (this.serverTelemetryManager) {
            Gt(t, this.serverTelemetryManager);
        }
        let r = e.correlationId || this.config.cryptoInterface.createNewGuid();
        at(t, r);
        if (this.config.clientCredentials.clientSecret) {
            Tr(t, this.config.clientCredentials.clientSecret);
        }
        let clientAssertion = this.config.clientCredentials.clientAssertion;
        if (clientAssertion) {
            Er(t, await _e(clientAssertion.assertion, this.config.authOptions.clientId, e.resourceRequestUri));
            Cr(t, clientAssertion.assertionType);
        }
        if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            Je(t, e.claims, this.config.authOptions.clientCapabilities);
        }
        if (this.config.systemOptions.preventCorsPreflight && e.username) {
            $t(t, e.username);
        }
        return pe(t);
    }
}
function Hf(config, t, r, logger) {
    let o = Gg({
        ...config.auth,
        authority: t,
        redirectUri: r.redirectUri || ""
    }, r, logger);
    Et(o, {
        sku: Re.MSAL_SKU,
        version: lt,
        cpu: "x64",
        os: "linux"
    });
    if (config.auth.protocolMode !== Ae.OIDC) {
        Ct(o, config.telemetry.application);
    }
    Du(o, Xr.CODE);
    if (r.codeChallenge && r.codeChallengeMethod) {
        wg(o, r.codeChallenge, r.codeChallengeMethod);
    }
    He(o, r.extraQueryParameters || {});
    return qg(t, o, config.auth.encodeExtraQueryParams, r.extraQueryParameters);
}
class Mn {
    constructor(e){
        this.config = bh(e);
        this.cryptoProvider = new Wt;
        this.logger = new Ue(this.config.system.loggerOptions, ps, lt);
        this.storage = new br(this.logger, this.config.auth.clientId, this.cryptoProvider, Ka(this.config.auth));
        this.tokenCache = new as(this.storage, this.logger, this.config.cache.cachePlugin);
    }
    async getAuthCodeUrl(e) {
        this.logger.info("getAuthCodeUrl called", e.correlationId);
        let t = {
            ...e,
            ...await this.initializeBaseRequest(e),
            responseMode: e.responseMode || mt.QUERY,
            authenticationScheme: L.BEARER,
            state: e.state || "",
            nonce: e.nonce || ""
        };
        let r = await this.createAuthority(t.authority, t.correlationId, undefined, e.azureCloudOptions);
        return Hf(this.config, r, t, this.logger);
    }
    async acquireTokenByCode(e, t) {
        this.logger.info("acquireTokenByCode called");
        if (e.state && t) {
            this.logger.info("acquireTokenByCode - validating state");
            this.validateState(e.state, t.state || "");
            t = {
                ...t,
                state: ""
            };
        }
        let r = {
            ...e,
            ...await this.initializeBaseRequest(e),
            authenticationScheme: L.BEARER
        };
        let n = this.initializeServerTelemetryManager(St.acquireTokenByCode, r.correlationId);
        try {
            let o = await this.createAuthority(r.authority, r.correlationId, undefined, e.azureCloudOptions);
            let i = await this.buildOauthClientConfiguration(o, r.correlationId, r.redirectUri, n);
            let s = new Ki(i);
            this.logger.verbose("Auth code client created", r.correlationId);
            return await s.acquireToken(r, t);
        } catch (error) {
            if (error instanceof N) {
                error.setCorrelationId(r.correlationId);
            }
            n.cacheFailedRequest(error);
            throw error;
        }
    }
    async acquireTokenByRefreshToken(e) {
        this.logger.info("acquireTokenByRefreshToken called", e.correlationId);
        let t = {
            ...e,
            ...await this.initializeBaseRequest(e),
            authenticationScheme: L.BEARER
        };
        let r = this.initializeServerTelemetryManager(St.acquireTokenByRefreshToken, t.correlationId);
        try {
            let n = await this.createAuthority(t.authority, t.correlationId, undefined, e.azureCloudOptions);
            let o = await this.buildOauthClientConfiguration(n, t.correlationId, t.redirectUri || "", r);
            let i = new xn(o);
            this.logger.verbose("Refresh token client created", t.correlationId);
            return await i.acquireToken(t);
        } catch (error) {
            if (error instanceof N) {
                error.setCorrelationId(t.correlationId);
            }
            r.cacheFailedRequest(error);
            throw error;
        }
    }
    async acquireTokenSilent(e) {
        let t = {
            ...e,
            ...await this.initializeBaseRequest(e),
            forceRefresh: e.forceRefresh || false
        };
        let r = this.initializeServerTelemetryManager(St.acquireTokenSilent, t.correlationId, t.forceRefresh);
        try {
            let n = await this.createAuthority(t.authority, t.correlationId, undefined, e.azureCloudOptions);
            let o = await this.buildOauthClientConfiguration(n, t.correlationId, t.redirectUri || "", r);
            let i = new Vi(o);
            this.logger.verbose("Silent flow client created", t.correlationId);
            try {
                await this.tokenCache.overwriteCache();
                return await this.acquireCachedTokenSilent(t, i, o);
            } catch (error) {
                if (error instanceof hr && error.errorCode === Ye) {
                    return new xn(o).acquireTokenByRefreshToken(t);
                }
                throw error;
            }
        } catch (error) {
            if (error instanceof N) {
                error.setCorrelationId(t.correlationId);
            }
            r.cacheFailedRequest(error);
            throw error;
        }
    }
    async acquireCachedTokenSilent(e, t, r) {
        let [n, o] = await t.acquireCachedToken({
            ...e,
            scopes: e.scopes?.length ? e.scopes : [
                ...ye
            ]
        });
        if (o === j.PROACTIVELY_REFRESHED) {
            this.logger.info("ClientApplication:acquireCachedTokenSilent - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
            let i = new xn(r);
            try {
                await i.acquireTokenByRefreshToken(e);
            } catch  {}
        }
        return n;
    }
    async acquireTokenByUsernamePassword(e) {
        this.logger.info("acquireTokenByUsernamePassword called", e.correlationId);
        let t = {
            ...e,
            ...await this.initializeBaseRequest(e)
        };
        let r = this.initializeServerTelemetryManager(St.acquireTokenByUsernamePassword, t.correlationId);
        try {
            let n = await this.createAuthority(t.authority, t.correlationId, undefined, e.azureCloudOptions);
            let o = await this.buildOauthClientConfiguration(n, t.correlationId, "", r);
            let i = new gs(o);
            this.logger.verbose("Username password client created", t.correlationId);
            return await i.acquireToken(t);
        } catch (error) {
            if (error instanceof N) {
                error.setCorrelationId(t.correlationId);
            }
            r.cacheFailedRequest(error);
            throw error;
        }
    }
    getTokenCache() {
        this.logger.info("getTokenCache called");
        return this.tokenCache;
    }
    validateState(e, t) {
        if (!e) {
            throw te.createStateNotFoundError();
        }
        if (e !== t) {
            throw g(so);
        }
    }
    getLogger() {
        return this.logger;
    }
    setLogger(e) {
        this.logger = e;
    }
    async buildOauthClientConfiguration(e, t, r, serverTelemetryManager) {
        this.logger.verbose("buildOauthClientConfiguration called", t);
        this.logger.info(`Building oauth client configuration with the following authority: ${e.tokenEndpoint}.`, t);
        serverTelemetryManager?.updateRegionDiscoveryMetadata(e.regionDiscoveryMetadata);
        return {
            authOptions: {
                clientId: this.config.auth.clientId,
                authority: e,
                clientCapabilities: this.config.auth.clientCapabilities,
                redirectUri: r
            },
            loggerOptions: {
                logLevel: this.config.system.loggerOptions.logLevel,
                loggerCallback: this.config.system.loggerOptions.loggerCallback,
                piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled,
                correlationId: t
            },
            cacheOptions: {
                claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled
            },
            cryptoInterface: this.cryptoProvider,
            networkInterface: this.config.system.networkClient,
            storageInterface: this.storage,
            serverTelemetryManager,
            clientCredentials: {
                clientSecret: this.clientSecret,
                clientAssertion: await this.getClientAssertion(e)
            },
            libraryInfo: {
                sku: Re.MSAL_SKU,
                version: lt,
                cpu: "x64",
                os: "linux"
            },
            telemetry: this.config.telemetry,
            persistencePlugin: this.config.cache.cachePlugin,
            serializableCache: this.tokenCache
        };
    }
    async getClientAssertion(e) {
        if (this.developerProvidedClientAssertion) {
            this.clientAssertion = ct.fromAssertion(await _e(this.developerProvidedClientAssertion, this.config.auth.clientId, e.tokenEndpoint));
        }
        return this.clientAssertion && {
            assertion: this.clientAssertion.getJwt(this.cryptoProvider, this.config.auth.clientId, e.tokenEndpoint),
            assertionType: Re.JWT_BEARER_ASSERTION_TYPE
        };
    }
    async initializeBaseRequest(e) {
        this.logger.verbose("initializeRequestScopes called", e.correlationId);
        if (e.authenticationScheme && e.authenticationScheme === L.POP) {
            this.logger.verbose("Authentication Scheme 'pop' is not supported yet, setting Authentication Scheme to 'Bearer' for request", e.correlationId);
        }
        e.authenticationScheme = L.BEARER;
        if (this.config.cache.claimsBasedCachingEnabled && e.claims && !re.isEmptyObj(e.claims)) {
            e.requestedClaimsHash = await this.cryptoProvider.hashString(e.claims);
        }
        return {
            ...e,
            scopes: [
                ...e && e.scopes || [],
                ...ye
            ],
            correlationId: e && e.correlationId || this.cryptoProvider.createNewGuid(),
            authority: e.authority || this.config.auth.authority
        };
    }
    initializeServerTelemetryManager(apiId, correlationId, r) {
        let n = {
            clientId: this.config.auth.clientId,
            correlationId,
            apiId,
            forceRefresh: r || false
        };
        return new jt(n, this.storage);
    }
    async createAuthority(e, t, azureRegionConfiguration, n) {
        this.logger.verbose("createAuthority called", t);
        let o = ue.generateAuthority(e, n || this.config.auth.azureCloudOptions);
        let i = {
            protocolMode: this.config.auth.protocolMode,
            knownAuthorities: this.config.auth.knownAuthorities,
            cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
            authorityMetadata: this.config.auth.authorityMetadata,
            azureRegionConfiguration,
            skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
        };
        return Va(o, this.config.system.networkClient, this.storage, i, this.logger, t);
    }
    clearCache() {
        this.storage.clear();
    }
}
class Tc {
    async listenForAuthCode(e, t) {
        if (this.server) {
            throw te.createLoopbackServerAlreadyExistsError();
        }
        return new Promise((resolve, reject)=>{
            this.server = Ja.createServer((o, i)=>{
                let o_url = o.url;
                if (!o_url) {
                    i.end(t || "Error occurred loading redirectUrl");
                    reject(te.createUnableToLoadRedirectUrlError());
                    return;
                } else if (o_url === f.FORWARD_SLASH) {
                    i.end(e || "Auth code was successfully acquired. You can close this window now.");
                    return;
                }
                let location = this.getRedirectUri();
                let c = new URL(o_url, location);
                let l = ka(c.search) || {};
                if (l.code) {
                    i.writeHead(P.REDIRECT, {
                        location
                    });
                    i.end();
                }
                if (l.error) {
                    i.end(t || `Error occurred: ${l.error}`);
                }
                resolve(l);
            });
            this.server.listen(0, "127.0.0.1");
        });
    }
    getRedirectUri() {
        if (!this.server || !this.server.listening) {
            throw te.createNoLoopbackServerExistsError();
        }
        let e = this.server.address();
        if (!e || typeof e === "string" || !e.port) {
            this.closeServer();
            throw te.createInvalidLoopbackAddressTypeError();
        }
        let t = e && e.port;
        return `${Re.HTTP_PROTOCOL}${Re.LOCALHOST}:${t}`;
    }
    closeServer() {
        if (this.server) {
            this.server.close();
            if (typeof this.server.closeAllConnections === "function") {
                this.server.closeAllConnections();
            }
            this.server.unref();
            this.server = undefined;
        }
    }
}
class ys extends Te {
    constructor(e){
        super(e);
    }
    async acquireToken(e) {
        let t = await this.getDeviceCode(e);
        e.deviceCodeCallback(t);
        let r = Q();
        let n = await this.acquireTokenWithDeviceCode(e, t);
        let o = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
        o.validateTokenResponse(n);
        return o.handleServerTokenResponse(n, this.authority, r, e);
    }
    async getDeviceCode(e) {
        let t = this.createExtraQueryParameters(e);
        let r = x.appendQueryString(this.authority.deviceCodeEndpoint, t);
        let n = this.createQueryString(e);
        let o = this.createTokenRequestHeaders();
        let i = {
            clientId: this.config.authOptions.clientId,
            authority: e.authority,
            scopes: e.scopes,
            claims: e.claims,
            authenticationScheme: e.authenticationScheme,
            resourceRequestMethod: e.resourceRequestMethod,
            resourceRequestUri: e.resourceRequestUri,
            shrClaims: e.shrClaims,
            sshKid: e.sshKid
        };
        return this.executePostRequestToDeviceCodeEndpoint(r, n, o, i, e.correlationId);
    }
    createExtraQueryParameters(e) {
        let t = new Map;
        if (e.extraQueryParameters) {
            He(t, e.extraQueryParameters);
        }
        return pe(t);
    }
    async executePostRequestToDeviceCodeEndpoint(e, t, r, n, o) {
        let { body: { user_code, device_code, verification_uri, expires_in, interval, message } } = await this.sendPostRequest(n, e, {
            body: t,
            headers: r
        }, o);
        return {
            userCode: user_code,
            deviceCode: device_code,
            verificationUri: verification_uri,
            expiresIn: expires_in,
            interval,
            message
        };
    }
    createQueryString(e) {
        let t = new Map;
        We(t, e.scopes);
        Qe(t, this.config.authOptions.clientId);
        if (e.extraQueryParameters) {
            He(t, e.extraQueryParameters);
        }
        if (e.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            Je(t, e.claims, this.config.authOptions.clientCapabilities);
        }
        return pe(t);
    }
    continuePolling(e, t, r) {
        if (r) {
            this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true");
            throw g(ao);
        } else if (t && t < e && Q() > t) {
            this.logger.error(`User defined timeout for device code polling reached. The timeout was set for ${t}`);
            throw g(ho);
        } else if (Q() > e) {
            if (t) {
                this.logger.verbose(`User specified timeout ignored as the device code has expired before the timeout elapsed. The user specified timeout was set for ${t}`);
            }
            this.logger.error(`Device code expired. Expiration time of device code was ${e}`);
            throw g(co);
        }
        return true;
    }
    async acquireTokenWithDeviceCode(e, t) {
        let r = this.createTokenQueryParameters(e);
        let n = x.appendQueryString(this.authority.tokenEndpoint, r);
        let o = this.createTokenRequestBody(e, t);
        let i = this.createTokenRequestHeaders();
        let s = e.timeout ? Q() + e.timeout : undefined;
        let a = Q() + t.expiresIn;
        let c = t.interval * 1000;
        while(this.continuePolling(a, s, e.cancel)){
            let l = {
                clientId: this.config.authOptions.clientId,
                authority: e.authority,
                scopes: e.scopes,
                claims: e.claims,
                authenticationScheme: e.authenticationScheme,
                resourceRequestMethod: e.resourceRequestMethod,
                resourceRequestUri: e.resourceRequestUri,
                shrClaims: e.shrClaims,
                sshKid: e.sshKid
            };
            let d = await this.executePostToTokenEndpoint(n, o, i, l, e.correlationId);
            if (d.body && d.body.error) {
                if (d.body.error === f.AUTHORIZATION_PENDING) {
                    this.logger.info("Authorization pending. Continue polling.");
                    await xg(c);
                } else {
                    this.logger.info("Unexpected error in polling from the server");
                    throw wa(io, d.body.error);
                }
            } else {
                this.logger.verbose("Authorization completed successfully. Polling stopped.");
                return d.body;
            }
        }
        this.logger.error("Polling stopped for unknown reasons.");
        throw g(lo);
    }
    createTokenRequestBody(e, t) {
        let r = new Map;
        We(r, e.scopes);
        Qe(r, this.config.authOptions.clientId);
        zt(r, Pe.DEVICE_CODE_GRANT);
        vg(r, t.deviceCode);
        let n = e.correlationId || this.config.cryptoInterface.createNewGuid();
        at(r, n);
        At(r);
        Et(r, this.config.libraryInfo);
        Ct(r, this.config.telemetry.application);
        qt(r);
        if (this.serverTelemetryManager) {
            Gt(r, this.serverTelemetryManager);
        }
        if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            Je(r, e.claims, this.config.authOptions.clientCapabilities);
        }
        return pe(r);
    }
}
class Ts extends Mn {
    constructor(e){
        super(e);
        if (this.config.broker.nativeBrokerPlugin) {
            if (this.config.broker.nativeBrokerPlugin.isBrokerAvailable) {
                this.nativeBrokerPlugin = this.config.broker.nativeBrokerPlugin;
                this.nativeBrokerPlugin.setLogger(this.config.system.loggerOptions);
            } else {
                this.logger.warning("NativeBroker implementation was provided but the broker is unavailable.");
            }
        }
        this.skus = jt.makeExtraSkuString({
            libraryName: Re.MSAL_SKU,
            libraryVersion: lt
        });
    }
    async acquireTokenByDeviceCode(e) {
        this.logger.info("acquireTokenByDeviceCode called", e.correlationId);
        let t = Object.assign(e, await this.initializeBaseRequest(e));
        let r = this.initializeServerTelemetryManager(St.acquireTokenByDeviceCode, t.correlationId);
        try {
            let n = await this.createAuthority(t.authority, t.correlationId, undefined, e.azureCloudOptions);
            let o = await this.buildOauthClientConfiguration(n, t.correlationId, "", r);
            let i = new ys(o);
            this.logger.verbose("Device code client created", t.correlationId);
            return await i.acquireToken(t);
        } catch (error) {
            if (error instanceof N) {
                error.setCorrelationId(t.correlationId);
            }
            r.cacheFailedRequest(error);
            throw error;
        }
    }
    async acquireTokenInteractive(e) {
        let t = e.correlationId || this.cryptoProvider.createNewGuid();
        this.logger.trace("acquireTokenInteractive called", t);
        let { openBrowser, successTemplate, errorTemplate, windowHandle, loopbackClient, ...rest } = e;
        if (this.nativeBrokerPlugin) {
            let p = {
                ...rest,
                clientId: this.config.auth.clientId,
                scopes: e.scopes || ye,
                redirectUri: e.redirectUri || "",
                authority: e.authority || this.config.auth.authority,
                correlationId: t,
                extraParameters: {
                    ...rest.extraQueryParameters,
                    ...rest.tokenQueryParameters,
                    [Mu]: this.skus
                },
                accountId: rest.account?.nativeAccountId
            };
            return this.nativeBrokerPlugin.acquireTokenInteractive(p, windowHandle);
        }
        if (e.redirectUri) {
            if (!this.config.broker.nativeBrokerPlugin) {
                throw te.createRedirectUriNotSupportedError();
            }
            e.redirectUri = "";
        }
        let { verifier, challenge } = await this.cryptoProvider.generatePkceCodes();
        let d = loopbackClient || new Tc;
        let u = {};
        let m = null;
        try {
            let p = d.listenForAuthCode(successTemplate, errorTemplate).then((B)=>{
                u = B;
            }).catch((B)=>{
                m = B;
            });
            let y = await this.waitForRedirectUri(d);
            let T = {
                ...rest,
                correlationId: t,
                scopes: e.scopes || ye,
                redirectUri: y,
                responseMode: mt.QUERY,
                codeChallenge: challenge,
                codeChallengeMethod: ri.S256
            };
            let _ = await this.getAuthCodeUrl(T);
            await openBrowser(_);
            await p;
            if (m) {
                throw m;
            }
            if (u.error) {
                throw new qe(u.error, u.error_description, u.suberror);
            } else if (!u.code) {
                throw te.createNoAuthCodeInResponseError();
            }
            let k = u.client_info;
            let U = {
                code: u.code,
                codeVerifier: verifier,
                clientInfo: k || f.EMPTY_STRING,
                ...T
            };
            return await this.acquireTokenByCode(U);
        } finally{
            d.closeServer();
        }
    }
    async acquireTokenSilent(e) {
        let t = e.correlationId || this.cryptoProvider.createNewGuid();
        this.logger.trace("acquireTokenSilent called", t);
        if (this.nativeBrokerPlugin) {
            let r = {
                ...e,
                clientId: this.config.auth.clientId,
                scopes: e.scopes || ye,
                redirectUri: e.redirectUri || "",
                authority: e.authority || this.config.auth.authority,
                correlationId: t,
                extraParameters: {
                    ...e.tokenQueryParameters,
                    [Mu]: this.skus
                },
                accountId: e.account.nativeAccountId,
                forceRefresh: e.forceRefresh || false
            };
            return this.nativeBrokerPlugin.acquireTokenSilent(r);
        }
        if (e.redirectUri) {
            if (!this.config.broker.nativeBrokerPlugin) {
                throw te.createRedirectUriNotSupportedError();
            }
            e.redirectUri = "";
        }
        return super.acquireTokenSilent(e);
    }
    async signOut(e) {
        if (this.nativeBrokerPlugin && e.account.nativeAccountId) {
            let t = {
                clientId: this.config.auth.clientId,
                accountId: e.account.nativeAccountId,
                correlationId: e.correlationId || this.cryptoProvider.createNewGuid()
            };
            await this.nativeBrokerPlugin.signOut(t);
        }
        await this.getTokenCache().removeAccount(e.account, e.correlationId);
    }
    async getAllAccounts() {
        if (this.nativeBrokerPlugin) {
            let e = this.cryptoProvider.createNewGuid();
            return this.nativeBrokerPlugin.getAllAccounts(this.config.auth.clientId, e);
        }
        return this.getTokenCache().getAllAccounts();
    }
    async waitForRedirectUri(e) {
        return new Promise((resolve, reject)=>{
            let n = 0;
            let o = setInterval(()=>{
                if (Wi.TIMEOUT_MS / Wi.INTERVAL_MS < n) {
                    clearInterval(o);
                    reject(te.createLoopbackServerTimeoutError());
                    return;
                }
                try {
                    let i = e.getRedirectUri();
                    clearInterval(o);
                    resolve(i);
                    return;
                } catch (error) {
                    if (error instanceof N && error.errorCode === le.noLoopbackServerExists.code) {
                        n++;
                        return;
                    }
                    clearInterval(o);
                    reject(error);
                    return;
                }
            }, Wi.INTERVAL_MS);
        });
    }
}
class Dn extends Te {
    constructor(e, t){
        super(e);
        this.appTokenProvider = t;
    }
    async acquireToken(e) {
        if (e.skipCache || e.claims) {
            return this.executeTokenRequest(e, this.authority);
        }
        let [t, r] = await this.getCachedAuthenticationResult(e, this.config, this.cryptoUtils, this.authority, this.cacheManager, this.serverTelemetryManager);
        if (t) {
            if (r === j.PROACTIVELY_REFRESHED) {
                this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
                let n = true;
                await this.executeTokenRequest(e, this.authority, n);
            }
            return t;
        } else {
            return this.executeTokenRequest(e, this.authority);
        }
    }
    async getCachedAuthenticationResult(e, t, r, n, o, i) {
        let s = t;
        let a = t;
        let j_NOT_APPLICABLE = j.NOT_APPLICABLE;
        let l;
        if (s.serializableCache && s.persistencePlugin) {
            l = new Xe(s.serializableCache, false);
            await s.persistencePlugin.beforeCacheAccess(l);
        }
        let d = this.readAccessTokenFromCache(n, a.managedIdentityId?.id || s.authOptions.clientId, new oe(e.scopes || []), o, e.correlationId);
        if (s.serializableCache && s.persistencePlugin && l) {
            await s.persistencePlugin.afterCacheAccess(l);
        }
        if (!d) {
            i?.setCacheOutcome(j.NO_CACHED_ACCESS_TOKEN);
            return [
                null,
                j.NO_CACHED_ACCESS_TOKEN
            ];
        }
        if (Vt(d.expiresOn, s.systemOptions?.tokenRenewalOffsetSeconds || tokenRenewalOffsetSeconds)) {
            i?.setCacheOutcome(j.CACHED_ACCESS_TOKEN_EXPIRED);
            return [
                null,
                j.CACHED_ACCESS_TOKEN_EXPIRED
            ];
        }
        if (d.refreshOn && Vt(d.refreshOn.toString(), 0)) {
            j_NOT_APPLICABLE = j.PROACTIVELY_REFRESHED;
            i?.setCacheOutcome(j.PROACTIVELY_REFRESHED);
        }
        return [
            await ie.generateAuthenticationResult(r, n, {
                account: null,
                idToken: null,
                accessToken: d,
                refreshToken: null,
                appMetadata: null
            }, true, e),
            j_NOT_APPLICABLE
        ];
    }
    readAccessTokenFromCache(e, t, r, n, o) {
        let i = {
            homeAccountId: f.EMPTY_STRING,
            environment: e.canonicalAuthorityUrlComponents.HostNameAndPort,
            credentialType: K.ACCESS_TOKEN,
            clientId: t,
            realm: e.tenant,
            target: oe.createSearchScopes(r.asArray())
        };
        let s = n.getAccessTokensByFilter(i, o);
        if (s.length < 1) {
            return null;
        } else if (s.length > 1) {
            throw g(cn);
        }
        return s[0];
    }
    async executeTokenRequest(e, t, r) {
        let n;
        let o;
        if (this.appTokenProvider) {
            this.logger.info("Using appTokenProvider extensibility.");
            let a = {
                correlationId: e.correlationId,
                tenantId: this.config.authOptions.authority.tenant,
                scopes: e.scopes,
                claims: e.claims
            };
            o = Q();
            let c = await this.appTokenProvider(a);
            n = {
                access_token: c.accessToken,
                expires_in: c.expiresInSeconds,
                refresh_in: c.refreshInSeconds,
                token_type: L.BEARER
            };
        } else {
            let a = this.createTokenQueryParameters(e);
            let c = x.appendQueryString(t.tokenEndpoint, a);
            let l = await this.createTokenRequestBody(e);
            let d = this.createTokenRequestHeaders();
            let u = {
                clientId: this.config.authOptions.clientId,
                authority: e.authority,
                scopes: e.scopes,
                claims: e.claims,
                authenticationScheme: e.authenticationScheme,
                resourceRequestMethod: e.resourceRequestMethod,
                resourceRequestUri: e.resourceRequestUri,
                shrClaims: e.shrClaims,
                sshKid: e.sshKid
            };
            this.logger.info(`Sending token request to endpoint: ${t.tokenEndpoint}`);
            o = Q();
            let m = await this.executePostToTokenEndpoint(c, l, d, u, e.correlationId);
            n = m.body;
            n.status = m.status;
        }
        let i = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
        i.validateTokenResponse(n, r);
        return await i.handleServerTokenResponse(n, this.authority, o, e);
    }
    async createTokenRequestBody(e) {
        let t = new Map;
        Qe(t, this.config.authOptions.clientId);
        We(t, e.scopes, false);
        zt(t, Pe.CLIENT_CREDENTIALS_GRANT);
        Et(t, this.config.libraryInfo);
        Ct(t, this.config.telemetry.application);
        qt(t);
        if (this.serverTelemetryManager) {
            Gt(t, this.serverTelemetryManager);
        }
        let r = e.correlationId || this.config.cryptoInterface.createNewGuid();
        at(t, r);
        if (this.config.clientCredentials.clientSecret) {
            Tr(t, this.config.clientCredentials.clientSecret);
        }
        let n = e.clientAssertion || this.config.clientCredentials.clientAssertion;
        if (n) {
            Er(t, await _e(n.assertion, this.config.authOptions.clientId, e.resourceRequestUri));
            Cr(t, n.assertionType);
        }
        if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            Je(t, e.claims, this.config.authOptions.clientCapabilities);
        }
        return pe(t);
    }
}
class Es extends Te {
    constructor(e){
        super(e);
    }
    async acquireToken(e) {
        this.scopeSet = new oe(e.scopes || []);
        this.userAssertionHash = await this.cryptoUtils.hashString(e.oboAssertion);
        if (e.skipCache || e.claims) {
            return this.executeTokenRequest(e, this.authority, this.userAssertionHash);
        }
        try {
            return await this.getCachedAuthenticationResult(e);
        } catch (t) {
            return await this.executeTokenRequest(e, this.authority, this.userAssertionHash);
        }
    }
    async getCachedAuthenticationResult(e) {
        let t = this.readAccessTokenFromCacheForOBO(this.config.authOptions.clientId, e);
        if (!t) {
            this.serverTelemetryManager?.setCacheOutcome(j.NO_CACHED_ACCESS_TOKEN);
            this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties.");
            throw g(Ye);
        } else if (Vt(t.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
            this.serverTelemetryManager?.setCacheOutcome(j.CACHED_ACCESS_TOKEN_EXPIRED);
            this.logger.info(`OnbehalfofFlow:getCachedAuthenticationResult - Cached access token is expired or will expire within ${this.config.systemOptions.tokenRenewalOffsetSeconds} seconds.`);
            throw g(Ye);
        }
        let r = this.readIdTokenFromCacheForOBO(t.homeAccountId, e.correlationId);
        let n;
        let o = null;
        if (r) {
            n = yt(r.secret, xe.base64Decode);
            let i = n.oid || n.sub;
            let s = {
                homeAccountId: r.homeAccountId,
                environment: r.environment,
                tenantId: r.realm,
                username: f.EMPTY_STRING,
                localAccountId: i || f.EMPTY_STRING
            };
            o = this.cacheManager.getAccount(this.cacheManager.generateAccountKey(s), e.correlationId);
        }
        if (this.config.serverTelemetryManager) {
            this.config.serverTelemetryManager.incrementCacheHits();
        }
        return ie.generateAuthenticationResult(this.cryptoUtils, this.authority, {
            account: o,
            accessToken: t,
            idToken: r,
            refreshToken: null,
            appMetadata: null
        }, true, e, n);
    }
    readIdTokenFromCacheForOBO(homeAccountId, t) {
        let r = {
            homeAccountId,
            environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
            credentialType: K.ID_TOKEN,
            clientId: this.config.authOptions.clientId,
            realm: this.authority.tenant
        };
        let n = this.cacheManager.getIdTokensByFilter(r, t);
        if (Object.values(n).length < 1) {
            return null;
        }
        return Object.values(n)[0];
    }
    readAccessTokenFromCacheForOBO(e, t) {
        let r = t.authenticationScheme || L.BEARER;
        let o = {
            credentialType: r && r.toLowerCase() !== L.BEARER.toLowerCase() ? K.ACCESS_TOKEN_WITH_AUTH_SCHEME : K.ACCESS_TOKEN,
            clientId: e,
            target: oe.createSearchScopes(this.scopeSet.asArray()),
            tokenType: r,
            keyId: t.sshKid,
            requestedClaimsHash: t.requestedClaimsHash,
            userAssertionHash: this.userAssertionHash
        };
        let i = this.cacheManager.getAccessTokensByFilter(o, t.correlationId);
        let i_length = i.length;
        if (i_length < 1) {
            return null;
        } else if (i_length > 1) {
            throw g(cn);
        }
        return i[0];
    }
    async executeTokenRequest(e, t, r) {
        let n = this.createTokenQueryParameters(e);
        let o = x.appendQueryString(t.tokenEndpoint, n);
        let i = await this.createTokenRequestBody(e);
        let s = this.createTokenRequestHeaders();
        let a = {
            clientId: this.config.authOptions.clientId,
            authority: e.authority,
            scopes: e.scopes,
            claims: e.claims,
            authenticationScheme: e.authenticationScheme,
            resourceRequestMethod: e.resourceRequestMethod,
            resourceRequestUri: e.resourceRequestUri,
            shrClaims: e.shrClaims,
            sshKid: e.sshKid
        };
        let c = Q();
        let l = await this.executePostToTokenEndpoint(o, i, s, a, e.correlationId);
        let d = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
        d.validateTokenResponse(l.body);
        return await d.handleServerTokenResponse(l.body, this.authority, c, e, undefined, r);
    }
    async createTokenRequestBody(e) {
        let t = new Map;
        Qe(t, this.config.authOptions.clientId);
        We(t, e.scopes);
        zt(t, Pe.JWT_BEARER);
        At(t);
        Et(t, this.config.libraryInfo);
        Ct(t, this.config.telemetry.application);
        qt(t);
        if (this.serverTelemetryManager) {
            Gt(t, this.serverTelemetryManager);
        }
        let r = e.correlationId || this.config.cryptoInterface.createNewGuid();
        at(t, r);
        bg(t, Rg);
        kg(t, e.oboAssertion);
        if (this.config.clientCredentials.clientSecret) {
            Tr(t, this.config.clientCredentials.clientSecret);
        }
        let clientAssertion = this.config.clientCredentials.clientAssertion;
        if (clientAssertion) {
            Er(t, await _e(clientAssertion.assertion, this.config.authOptions.clientId, e.resourceRequestUri));
            Cr(t, clientAssertion.assertionType);
        }
        if (e.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            Je(t, e.claims, this.config.authOptions.clientCapabilities);
        }
        return pe(t);
    }
}
class Cs extends Mn {
    constructor(e){
        super(e);
        let t = !!this.config.auth.clientSecret;
        let r = !!this.config.auth.clientAssertion;
        let n = (!!this.config.auth.clientCertificate?.thumbprint || !!this.config.auth.clientCertificate?.thumbprintSha256) && !!this.config.auth.clientCertificate?.privateKey;
        if (this.appTokenProvider) {
            return;
        }
        if (t && r || r && n || t && n) {
            throw g(mn);
        }
        if (this.config.auth.clientSecret) {
            this.clientSecret = this.config.auth.clientSecret;
            return;
        }
        if (this.config.auth.clientAssertion) {
            this.developerProvidedClientAssertion = this.config.auth.clientAssertion;
            return;
        }
        if (!n) {
            throw g(mn);
        } else {
            this.clientAssertion = this.config.auth.clientCertificate.thumbprintSha256 ? ct.fromCertificateWithSha256Thumbprint(this.config.auth.clientCertificate.thumbprintSha256, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c) : ct.fromCertificate(this.config.auth.clientCertificate.thumbprint, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c);
        }
        this.appTokenProvider = undefined;
    }
    SetAppTokenProvider(e) {
        this.appTokenProvider = e;
    }
    async acquireTokenByClientCredential(e) {
        this.logger.info("acquireTokenByClientCredential called", e.correlationId);
        let t;
        if (e.clientAssertion) {
            t = {
                assertion: await _e(e.clientAssertion, this.config.auth.clientId),
                assertionType: Re.JWT_BEARER_ASSERTION_TYPE
            };
        }
        let r = await this.initializeBaseRequest(e);
        let n = {
            ...r,
            scopes: r.scopes.filter((u)=>!ye.includes(u))
        };
        let o = {
            ...e,
            ...n,
            clientAssertion: t
        };
        let s = new x(o.authority).getUrlComponents().PathSegments[0];
        if (Object.values(be).includes(s)) {
            throw g(fo);
        }
        let a = process.env[Th];
        let azureRegion;
        if (o.azureRegion !== "DisableMsalForceRegion") {
            if (!o.azureRegion && a) {
                azureRegion = a;
            } else {
                azureRegion = o.azureRegion;
            }
        }
        let l = {
            azureRegion,
            environmentRegion: process.env[yh]
        };
        let d = this.initializeServerTelemetryManager(St.acquireTokenByClientCredential, o.correlationId, o.skipCache);
        try {
            let u = await this.createAuthority(o.authority, o.correlationId, l, e.azureCloudOptions);
            let m = await this.buildOauthClientConfiguration(u, o.correlationId, "", d);
            let p = new Dn(m, this.appTokenProvider);
            this.logger.verbose("Client credential client created", o.correlationId);
            return await p.acquireToken(o);
        } catch (error) {
            if (error instanceof N) {
                error.setCorrelationId(o.correlationId);
            }
            d.cacheFailedRequest(error);
            throw error;
        }
    }
    async acquireTokenOnBehalfOf(e) {
        this.logger.info("acquireTokenOnBehalfOf called", e.correlationId);
        let t = {
            ...e,
            ...await this.initializeBaseRequest(e)
        };
        try {
            let r = await this.createAuthority(t.authority, t.correlationId, undefined, e.azureCloudOptions);
            let n = await this.buildOauthClientConfiguration(r, t.correlationId, "", undefined);
            let o = new Es(n);
            this.logger.verbose("On behalf of client created", t.correlationId);
            return await o.acquireToken(t);
        } catch (error) {
            if (error instanceof N) {
                error.setCorrelationId(t.correlationId);
            }
            throw error;
        }
    }
}
function Ff(expires_on) {
    if (typeof expires_on !== "string") {
        return false;
    }
    let t = new Date(expires_on);
    return !isNaN(t.getTime()) && t.toISOString() === expires_on;
}
class Ec {
    constructor(e, t, r){
        this.httpClientNoRetries = e;
        this.retryPolicy = t;
        this.logger = r;
    }
    async sendNetworkRequestAsyncHelper(e, t, r) {
        if (e === J.GET) {
            return this.httpClientNoRetries.sendGetRequestAsync(t, r);
        } else {
            return this.httpClientNoRetries.sendPostRequestAsync(t, r);
        }
    }
    async sendNetworkRequestAsync(e, t, r) {
        let n = await this.sendNetworkRequestAsyncHelper(e, t, r);
        if ("isNewRequest" in this.retryPolicy) {
            this.retryPolicy.isNewRequest = true;
        }
        let o = 0;
        while(await this.retryPolicy.pauseForRetry(n.status, o, this.logger, n.headers[Y.RETRY_AFTER])){
            n = await this.sendNetworkRequestAsyncHelper(e, t, r);
            o++;
        }
        return n;
    }
    async sendGetRequestAsync(e, t) {
        return this.sendNetworkRequestAsync(J.GET, e, t);
    }
    async sendPostRequestAsync(e, t) {
        return this.sendNetworkRequestAsync(J.POST, e, t);
    }
}
const Pr = {
    MANAGED_IDENTITY_CLIENT_ID_2017: "clientid",
    MANAGED_IDENTITY_CLIENT_ID: "client_id",
    MANAGED_IDENTITY_OBJECT_ID: "object_id",
    MANAGED_IDENTITY_RESOURCE_ID_IMDS: "msi_res_id",
    MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS: "mi_res_id"
};
class Me {
    constructor(e, t, r, n, o){
        this.logger = e;
        this.nodeStorage = t;
        this.networkClient = r;
        this.cryptoProvider = n;
        this.disableInternalRetries = o;
    }
    async getServerTokenResponseAsync(e, t, r, n) {
        return this.getServerTokenResponse(e);
    }
    getServerTokenResponse(e) {
        let refresh_in;
        let expires_in;
        if (e.body.expires_on) {
            if (Ff(e.body.expires_on)) {
                e.body.expires_on = new Date(e.body.expires_on).getTime() / 1000;
            }
            expires_in = e.body.expires_on - Q();
            if (expires_in > 7200) {
                refresh_in = expires_in / 2;
            }
        }
        return {
            status: e.status,
            access_token: e.body.access_token,
            expires_in,
            scope: e.body.resource,
            token_type: e.body.token_type,
            refresh_in,
            correlation_id: e.body.correlation_id || e.body.correlationId,
            error: typeof e.body.error === "string" ? e.body.error : e.body.error?.code,
            error_description: e.body.message || (typeof e.body.error === "string" ? e.body.error_description : e.body.error?.message),
            error_codes: e.body.error_codes,
            timestamp: e.body.timestamp,
            trace_id: e.body.trace_id
        };
    }
    async acquireTokenWithManagedIdentity(e, t, r, n) {
        let o = this.createRequest(e.resource, t);
        if (e.revokedTokenSha256Hash) {
            this.logger.info(`[Managed Identity] The following claims are present in the request: ${e.claims}`);
            o.queryParameters[ce.SHA256_TOKEN_TO_REFRESH] = e.revokedTokenSha256Hash;
        }
        if (e.clientCapabilities?.length) {
            let m = e.clientCapabilities.toString();
            this.logger.info(`[Managed Identity] The following client capabilities are present in the request: ${m}`);
            o.queryParameters[ce.XMS_CC] = m;
        }
        let o_headers = o.headers;
        o_headers[Y.CONTENT_TYPE] = f.URL_FORM_CONTENT_TYPE;
        let s = {
            headers: o_headers
        };
        if (Object.keys(o.bodyParameters).length) {
            s.body = o.computeParametersBodyString();
        }
        let a = this.disableInternalRetries ? this.networkClient : new Ec(this.networkClient, o.retryPolicy, this.logger);
        let c = Q();
        let l;
        try {
            if (o.httpMethod === J.POST) {
                l = await a.sendPostRequestAsync(o.computeUri(), s);
            } else {
                l = await a.sendGetRequestAsync(o.computeUri(), s);
            }
        } catch (error) {
            if (error instanceof N) {
                throw error;
            } else {
                throw g(Mt);
            }
        }
        let d = new ie(t.id, this.nodeStorage, this.cryptoProvider, this.logger, null, null);
        let u = await this.getServerTokenResponseAsync(l, a, o, s);
        d.validateTokenResponse(u, n);
        return d.handleServerTokenResponse(u, r, c, e);
    }
    getManagedIdentityUserAssignedIdQueryParameterKey(e, t, r) {
        switch(e){
            case ne.USER_ASSIGNED_CLIENT_ID:
                this.logger.info(`[Managed Identity] [API version ${r ? "2017+" : "2019+"}] Adding user assigned client id to the request.`);
                if (r) {
                    return Pr.MANAGED_IDENTITY_CLIENT_ID_2017;
                }
                return Pr.MANAGED_IDENTITY_CLIENT_ID;
            case ne.USER_ASSIGNED_RESOURCE_ID:
                this.logger.info("[Managed Identity] Adding user assigned resource id to the request.");
                if (t) {
                    return Pr.MANAGED_IDENTITY_RESOURCE_ID_IMDS;
                }
                return Pr.MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS;
            case ne.USER_ASSIGNED_OBJECT_ID:
                this.logger.info("[Managed Identity] Adding user assigned object id to the request.");
                return Pr.MANAGED_IDENTITY_OBJECT_ID;
            default:
                throw ae(Yt);
        }
    }
}
Me.getValidatedEnvVariableUrlString = (e, t, r, n)=>{
    try {
        return new x(t).urlString;
    } catch (o) {
        n.info(`[Managed Identity] ${r} managed identity is unavailable because the '${e}' environment variable is malformed.`);
        throw ae(vr[e]);
    }
};
class Cc {
    calculateDelay(e, t) {
        if (!e) {
            return t;
        }
        let r = Math.round(parseFloat(e) * 1000);
        if (isNaN(r)) {
            r = new Date(e).valueOf() - new Date().valueOf();
        }
        return Math.max(t, r);
    }
}
const OE = 3;
const NE = 1000;
const xE = [
    P.NOT_FOUND,
    P.REQUEST_TIMEOUT,
    P.TOO_MANY_REQUESTS,
    P.SERVER_ERROR,
    P.SERVICE_UNAVAILABLE,
    P.GATEWAY_TIMEOUT
];
class As {
    constructor(){
        this.linearRetryStrategy = new Cc;
    }
    static get DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS() {
        return NE;
    }
    async pauseForRetry(e, t, r, n) {
        if (xE.includes(e) && t < OE) {
            let o = this.linearRetryStrategy.calculateDelay(n, As.DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS);
            r.verbose(`Retrying request in ${o}ms (retry attempt: ${t + 1})`);
            await new Promise((resolve)=>setTimeout(resolve, o));
            return true;
        }
        return false;
    }
}
class Fe {
    constructor(e, t, r){
        this.httpMethod = e;
        this._baseEndpoint = t;
        this.headers = {};
        this.bodyParameters = {};
        this.queryParameters = {};
        this.retryPolicy = r || new As;
    }
    computeUri() {
        let e = new Map;
        if (this.queryParameters) {
            He(e, this.queryParameters);
        }
        let t = pe(e);
        return x.appendQueryString(this._baseEndpoint, t);
    }
    computeParametersBodyString() {
        let e = new Map;
        if (this.bodyParameters) {
            He(e, this.bodyParameters);
        }
        return pe(e);
    }
}
const ME = "2019-08-01";
class Or extends Me {
    constructor(e, t, r, n, o, i, s){
        super(e, t, r, n, o);
        this.identityEndpoint = i;
        this.identityHeader = s;
    }
    static getEnvironmentVariables() {
        let e = process.env[v.IDENTITY_ENDPOINT];
        let t = process.env[v.IDENTITY_HEADER];
        return [
            e,
            t
        ];
    }
    static tryCreate(e, t, r, n, o) {
        let [i, s] = Or.getEnvironmentVariables();
        if (!i || !s) {
            e.info(`[Managed Identity] ${b.APP_SERVICE} managed identity is unavailable because one or both of the '${v.IDENTITY_HEADER}' and '${v.IDENTITY_ENDPOINT}' environment variables are not defined.`);
            return null;
        }
        let a = Or.getValidatedEnvVariableUrlString(v.IDENTITY_ENDPOINT, i, b.APP_SERVICE, e);
        e.info(`[Managed Identity] Environment variables validation passed for ${b.APP_SERVICE} managed identity. Endpoint URI: ${a}. Creating ${b.APP_SERVICE} managed identity.`);
        return new Or(e, t, r, n, o, i, s);
    }
    createRequest(e, t) {
        let r = new Fe(J.GET, this.identityEndpoint);
        r.headers[Ne.APP_SERVICE_SECRET_HEADER_NAME] = this.identityHeader;
        r.queryParameters[ce.API_VERSION] = ME;
        r.queryParameters[ce.RESOURCE] = e;
        if (t.idType !== ne.SYSTEM_ASSIGNED) {
            r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType)] = t.id;
        }
        return r;
    }
}
const FE = "2019-11-01";
const Bf = "http://127.0.0.1:40342/metadata/identity/oauth2/token";
const zf = "N/A: himds executable exists";
const Gf = {
    win32: `${process.env.ProgramData}\\AzureConnectedMachineAgent\\Tokens\\`,
    linux: "/var/opt/azcmagent/tokens/"
};
const $E = {
    win32: `${process.env.ProgramFiles}\\AzureConnectedMachineAgent\\himds.exe`,
    linux: "/opt/azcmagent/bin/himds"
};
class Jt extends Me {
    constructor(e, t, r, n, o, i){
        super(e, t, r, n, o);
        this.identityEndpoint = i;
    }
    static getEnvironmentVariables() {
        let e = process.env[v.IDENTITY_ENDPOINT];
        let t = process.env[v.IMDS_ENDPOINT];
        if (!e || !t) {
            let r = $E.linux;
            try {
                accessSync(r, constants.F_OK | constants.R_OK);
                e = Bf;
                t = zf;
            } catch (n) {}
        }
        return [
            e,
            t
        ];
    }
    static tryCreate(e, t, r, n, o, i) {
        let [s, a] = Jt.getEnvironmentVariables();
        if (!s || !a) {
            e.info(`[Managed Identity] ${b.AZURE_ARC} managed identity is unavailable through environment variables because one or both of '${v.IDENTITY_ENDPOINT}' and '${v.IMDS_ENDPOINT}' are not defined. ${b.AZURE_ARC} managed identity is also unavailable through file detection.`);
            return null;
        }
        if (a === zf) {
            e.info(`[Managed Identity] ${b.AZURE_ARC} managed identity is available through file detection. Defaulting to known ${b.AZURE_ARC} endpoint: ${Bf}. Creating ${b.AZURE_ARC} managed identity.`);
        } else {
            let c = Jt.getValidatedEnvVariableUrlString(v.IDENTITY_ENDPOINT, s, b.AZURE_ARC, e);
            if (c.endsWith("/")) {
                c.slice(0, -1);
            }
            Jt.getValidatedEnvVariableUrlString(v.IMDS_ENDPOINT, a, b.AZURE_ARC, e);
            e.info(`[Managed Identity] Environment variables validation passed for ${b.AZURE_ARC} managed identity. Endpoint URI: ${c}. Creating ${b.AZURE_ARC} managed identity.`);
        }
        if (i.idType !== ne.SYSTEM_ASSIGNED) {
            throw ae(es);
        }
        return new Jt(e, t, r, n, o, s);
    }
    createRequest(e) {
        let t = new Fe(J.GET, this.identityEndpoint.replace("localhost", "127.0.0.1"));
        t.headers[Ne.METADATA_HEADER_NAME] = "true";
        t.queryParameters[ce.API_VERSION] = FE;
        t.queryParameters[ce.RESOURCE] = e;
        return t;
    }
    async getServerTokenResponseAsync(e, t, r, n) {
        let o;
        if (e.status === P.UNAUTHORIZED) {
            let i = e.headers["www-authenticate"];
            if (!i) {
                throw ae(ns);
            }
            if (!i.includes("Basic realm=")) {
                throw ae(os);
            }
            let s = i.split("Basic realm=")[1];
            if (!Gf.hasOwnProperty("linux")) {
                throw ae(Zi);
            }
            let a = Gf.linux;
            let c = HE.basename(s);
            if (!c.endsWith(".key")) {
                throw ae(Qi);
            }
            if (a + c !== s) {
                throw ae(Ji);
            }
            let l;
            try {
                l = await statSync(s).size;
            } catch (m) {
                throw ae(So);
            }
            if (l > Ah) {
                throw ae(Xi);
            }
            let d;
            try {
                d = readFileSync(s, me.UTF8);
            } catch (m) {
                throw ae(So);
            }
            let u = `Basic ${d}`;
            this.logger.info("[Managed Identity] Adding authorization header to the request.");
            r.headers[Ne.AUTHORIZATION_HEADER_NAME] = u;
            try {
                o = await t.sendGetRequestAsync(r.computeUri(), n);
            } catch (error) {
                if (error instanceof N) {
                    throw error;
                } else {
                    throw g(Mt);
                }
            }
        }
        return this.getServerTokenResponse(o || e);
    }
}
class Nr extends Me {
    constructor(e, t, r, n, o, i){
        super(e, t, r, n, o);
        this.msiEndpoint = i;
    }
    static getEnvironmentVariables() {
        return [
            process.env[v.MSI_ENDPOINT]
        ];
    }
    static tryCreate(e, t, r, n, o, i) {
        let [s] = Nr.getEnvironmentVariables();
        if (!s) {
            e.info(`[Managed Identity] ${b.CLOUD_SHELL} managed identity is unavailable because the '${v.MSI_ENDPOINT} environment variable is not defined.`);
            return null;
        }
        let a = Nr.getValidatedEnvVariableUrlString(v.MSI_ENDPOINT, s, b.CLOUD_SHELL, e);
        e.info(`[Managed Identity] Environment variable validation passed for ${b.CLOUD_SHELL} managed identity. Endpoint URI: ${a}. Creating ${b.CLOUD_SHELL} managed identity.`);
        if (i.idType !== ne.SYSTEM_ASSIGNED) {
            throw ae(ts);
        }
        return new Nr(e, t, r, n, o, s);
    }
    createRequest(e) {
        let t = new Fe(J.POST, this.msiEndpoint);
        t.headers[Ne.METADATA_HEADER_NAME] = "true";
        t.bodyParameters[ce.RESOURCE] = e;
        return t;
    }
}
class Ac {
    constructor(e, t, r){
        this.minExponentialBackoff = e;
        this.maxExponentialBackoff = t;
        this.exponentialDeltaBackoff = r;
    }
    calculateDelay(e) {
        if (e === 0) {
            return this.minExponentialBackoff;
        }
        return Math.min(2 ** (e - 1) * this.exponentialDeltaBackoff, this.maxExponentialBackoff);
    }
}
const BE = [
    P.NOT_FOUND,
    P.REQUEST_TIMEOUT,
    P.GONE,
    P.TOO_MANY_REQUESTS
];
const zE = 3;
const GE = 7;
const qE = 1000;
const KE = 4000;
const VE = 2000;
const jE = 10000;
class xr {
    constructor(){
        this.exponentialRetryStrategy = new Ac(xr.MIN_EXPONENTIAL_BACKOFF_MS, xr.MAX_EXPONENTIAL_BACKOFF_MS, xr.EXPONENTIAL_DELTA_BACKOFF_MS);
    }
    static get MIN_EXPONENTIAL_BACKOFF_MS() {
        return qE;
    }
    static get MAX_EXPONENTIAL_BACKOFF_MS() {
        return KE;
    }
    static get EXPONENTIAL_DELTA_BACKOFF_MS() {
        return VE;
    }
    static get HTTP_STATUS_GONE_RETRY_AFTER_MS() {
        return jE;
    }
    set isNewRequest(e) {
        this._isNewRequest = e;
    }
    async pauseForRetry(e, t, r) {
        if (this._isNewRequest) {
            this._isNewRequest = false;
            this.maxRetries = e === P.GONE ? GE : zE;
        }
        if ((BE.includes(e) || e >= P.SERVER_ERROR_RANGE_START && e <= P.SERVER_ERROR_RANGE_END && t < this.maxRetries) && t < this.maxRetries) {
            let n = e === P.GONE ? xr.HTTP_STATUS_GONE_RETRY_AFTER_MS : this.exponentialRetryStrategy.calculateDelay(t);
            r.verbose(`Retrying request in ${n}ms (retry attempt: ${t + 1})`);
            await new Promise((resolve)=>setTimeout(resolve, n));
            return true;
        }
        return false;
    }
}
const qf = "/metadata/identity/oauth2/token";
const YE = `http://169.254.169.254${qf}`;
const WE = "2018-02-01";
class ko extends Me {
    constructor(e, t, r, n, o, i){
        super(e, t, r, n, o);
        this.identityEndpoint = i;
    }
    static tryCreate(e, t, r, n, o) {
        let i;
        if (process.env[v.AZURE_POD_IDENTITY_AUTHORITY_HOST]) {
            e.info(`[Managed Identity] Environment variable ${v.AZURE_POD_IDENTITY_AUTHORITY_HOST} for ${b.IMDS} returned endpoint: ${process.env[v.AZURE_POD_IDENTITY_AUTHORITY_HOST]}`);
            i = ko.getValidatedEnvVariableUrlString(v.AZURE_POD_IDENTITY_AUTHORITY_HOST, `${process.env[v.AZURE_POD_IDENTITY_AUTHORITY_HOST]}${qf}`, b.IMDS, e);
        } else {
            e.info(`[Managed Identity] Unable to find ${v.AZURE_POD_IDENTITY_AUTHORITY_HOST} environment variable for ${b.IMDS}, using the default endpoint.`);
            i = YE;
        }
        return new ko(e, t, r, n, o, i);
    }
    createRequest(e, t) {
        let r = new Fe(J.GET, this.identityEndpoint);
        r.headers[Ne.METADATA_HEADER_NAME] = "true";
        r.queryParameters[ce.API_VERSION] = WE;
        r.queryParameters[ce.RESOURCE] = e;
        if (t.idType !== ne.SYSTEM_ASSIGNED) {
            r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType, true)] = t.id;
        }
        r.retryPolicy = new xr;
        return r;
    }
}
const QE = "2019-07-01-preview";
class Mr extends Me {
    constructor(e, t, r, n, o, i, s){
        super(e, t, r, n, o);
        this.identityEndpoint = i;
        this.identityHeader = s;
    }
    static getEnvironmentVariables() {
        let e = process.env[v.IDENTITY_ENDPOINT];
        let t = process.env[v.IDENTITY_HEADER];
        let r = process.env[v.IDENTITY_SERVER_THUMBPRINT];
        return [
            e,
            t,
            r
        ];
    }
    static tryCreate(e, t, r, n, o, i) {
        let [s, a, c] = Mr.getEnvironmentVariables();
        if (!s || !a || !c) {
            e.info(`[Managed Identity] ${b.SERVICE_FABRIC} managed identity is unavailable because one or all of the '${v.IDENTITY_HEADER}', '${v.IDENTITY_ENDPOINT}' or '${v.IDENTITY_SERVER_THUMBPRINT}' environment variables are not defined.`);
            return null;
        }
        let l = Mr.getValidatedEnvVariableUrlString(v.IDENTITY_ENDPOINT, s, b.SERVICE_FABRIC, e);
        e.info(`[Managed Identity] Environment variables validation passed for ${b.SERVICE_FABRIC} managed identity. Endpoint URI: ${l}. Creating ${b.SERVICE_FABRIC} managed identity.`);
        if (i.idType !== ne.SYSTEM_ASSIGNED) {
            e.warning(`[Managed Identity] ${b.SERVICE_FABRIC} user assigned managed identity is configured in the cluster, not during runtime. See also: https://learn.microsoft.com/en-us/azure/service-fabric/configure-existing-cluster-enable-managed-identity-token-service.`);
        }
        return new Mr(e, t, r, n, o, s, a);
    }
    createRequest(e, t) {
        let r = new Fe(J.GET, this.identityEndpoint);
        r.headers[Ne.ML_AND_SF_SECRET_HEADER_NAME] = this.identityHeader;
        r.queryParameters[ce.API_VERSION] = QE;
        r.queryParameters[ce.RESOURCE] = e;
        if (t.idType !== ne.SYSTEM_ASSIGNED) {
            r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType)] = t.id;
        }
        return r;
    }
}
const JE = "2017-09-01";
const XE = `Only client id is supported for user-assigned managed identity in ${b.MACHINE_LEARNING}.`;
class Dr extends Me {
    constructor(e, t, r, n, o, i, s){
        super(e, t, r, n, o);
        this.msiEndpoint = i;
        this.secret = s;
    }
    static getEnvironmentVariables() {
        let e = process.env[v.MSI_ENDPOINT];
        let t = process.env[v.MSI_SECRET];
        return [
            e,
            t
        ];
    }
    static tryCreate(e, t, r, n, o) {
        let [i, s] = Dr.getEnvironmentVariables();
        if (!i || !s) {
            e.info(`[Managed Identity] ${b.MACHINE_LEARNING} managed identity is unavailable because one or both of the '${v.MSI_ENDPOINT}' and '${v.MSI_SECRET}' environment variables are not defined.`);
            return null;
        }
        let a = Dr.getValidatedEnvVariableUrlString(v.MSI_ENDPOINT, i, b.MACHINE_LEARNING, e);
        e.info(`[Managed Identity] Environment variables validation passed for ${b.MACHINE_LEARNING} managed identity. Endpoint URI: ${a}. Creating ${b.MACHINE_LEARNING} managed identity.`);
        return new Dr(e, t, r, n, o, i, s);
    }
    createRequest(e, t) {
        let r = new Fe(J.GET, this.msiEndpoint);
        r.headers[Ne.METADATA_HEADER_NAME] = "true";
        r.headers[Ne.ML_AND_SF_SECRET_HEADER_NAME] = this.secret;
        r.queryParameters[ce.API_VERSION] = JE;
        r.queryParameters[ce.RESOURCE] = e;
        if (t.idType === ne.SYSTEM_ASSIGNED) {
            r.queryParameters[Pr.MANAGED_IDENTITY_CLIENT_ID_2017] = process.env[v.DEFAULT_IDENTITY_CLIENT_ID];
        } else if (t.idType === ne.USER_ASSIGNED_CLIENT_ID) {
            r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType, false, true)] = t.id;
        } else {
            throw Error(XE);
        }
        return r;
    }
}
class Rt {
    constructor(e, t, r, n, o){
        this.logger = e;
        this.nodeStorage = t;
        this.networkClient = r;
        this.cryptoProvider = n;
        this.disableInternalRetries = o;
    }
    async sendManagedIdentityTokenRequest(e, t, r, n) {
        if (!Rt.identitySource) {
            Rt.identitySource = this.selectManagedIdentitySource(this.logger, this.nodeStorage, this.networkClient, this.cryptoProvider, this.disableInternalRetries, t);
        }
        return Rt.identitySource.acquireTokenWithManagedIdentity(e, t, r, n);
    }
    allEnvironmentVariablesAreDefined(e) {
        return Object.values(e).every((t)=>t !== undefined);
    }
    getManagedIdentitySource() {
        Rt.sourceName = this.allEnvironmentVariablesAreDefined(Mr.getEnvironmentVariables()) ? b.SERVICE_FABRIC : this.allEnvironmentVariablesAreDefined(Or.getEnvironmentVariables()) ? b.APP_SERVICE : this.allEnvironmentVariablesAreDefined(Dr.getEnvironmentVariables()) ? b.MACHINE_LEARNING : this.allEnvironmentVariablesAreDefined(Nr.getEnvironmentVariables()) ? b.CLOUD_SHELL : this.allEnvironmentVariablesAreDefined(Jt.getEnvironmentVariables()) ? b.AZURE_ARC : b.DEFAULT_TO_IMDS;
        return Rt.sourceName;
    }
    selectManagedIdentitySource(e, t, r, n, o, i) {
        let s = Mr.tryCreate(e, t, r, n, o, i) || Or.tryCreate(e, t, r, n, o) || Dr.tryCreate(e, t, r, n, o) || Nr.tryCreate(e, t, r, n, o, i) || Jt.tryCreate(e, t, r, n, o, i) || ko.tryCreate(e, t, r, n, o);
        if (!s) {
            throw ae(rs);
        }
        return s;
    }
}
const ZE = [
    b.SERVICE_FABRIC
];
class wt {
    constructor(e){
        this.config = Ph(e || {});
        this.logger = new Ue(this.config.system.loggerOptions, ps, lt);
        let t = {
            canonicalAuthority: f.DEFAULT_AUTHORITY
        };
        if (!wt.nodeStorage) {
            wt.nodeStorage = new br(this.logger, this.config.managedIdentityId.id, Tn, t);
        }
        this.networkClient = this.config.system.networkClient;
        this.cryptoProvider = new Wt;
        let r = {
            protocolMode: Ae.AAD,
            knownAuthorities: [
                Wa
            ],
            cloudDiscoveryMetadata: "",
            authorityMetadata: ""
        };
        this.fakeAuthority = new ue(Wa, this.networkClient, wt.nodeStorage, r, this.logger, this.cryptoProvider.createNewGuid(), undefined, true);
        this.fakeClientCredentialClient = new Dn({
            authOptions: {
                clientId: this.config.managedIdentityId.id,
                authority: this.fakeAuthority
            }
        });
        this.managedIdentityClient = new Rt(this.logger, wt.nodeStorage, this.networkClient, this.cryptoProvider, this.config.disableInternalRetries);
        this.hashUtils = new kr;
    }
    async acquireToken(e) {
        if (!e.resource) {
            throw V(fr);
        }
        let t = {
            forceRefresh: e.forceRefresh,
            resource: e.resource.replace("/.default", ""),
            scopes: [
                e.resource.replace("/.default", "")
            ],
            authority: this.fakeAuthority.canonicalAuthority,
            correlationId: this.cryptoProvider.createNewGuid(),
            claims: e.claims,
            clientCapabilities: this.config.clientCapabilities
        };
        if (t.forceRefresh) {
            return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
        }
        let [r, n] = await this.fakeClientCredentialClient.getCachedAuthenticationResult(t, this.config, this.cryptoProvider, this.fakeAuthority, wt.nodeStorage);
        if (t.claims) {
            let o = this.managedIdentityClient.getManagedIdentitySource();
            if (r && ZE.includes(o)) {
                let i = this.hashUtils.sha256(r.accessToken).toString(me.HEX);
                t.revokedTokenSha256Hash = i;
            }
            return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
        }
        if (r) {
            if (n === j.PROACTIVELY_REFRESHED) {
                this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
                let o = true;
                await this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority, o);
            }
            return r;
        } else {
            return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
        }
    }
    async acquireTokenFromManagedIdentity(e, t, r, n) {
        return this.managedIdentityClient.sendManagedIdentityTokenRequest(e, t, r, n);
    }
    getManagedIdentitySource() {
        return Rt.sourceName || this.managedIdentityClient.getManagedIdentitySource();
    }
}
const bo = z("IdentityUtils");
const version = "1.0";
function Un(e, t, r) {
    let n = (o)=>{
        bo.getToken.info(o);
        return new dt({
            scopes: Array.isArray(e) ? e : [
                e
            ],
            getTokenOptions: r,
            message: o
        });
    };
    if (!t) {
        throw n("No response");
    }
    if (!t.expiresOn) {
        throw n('Response had no "expiresOn" property.');
    }
    if (!t.accessToken) {
        throw n('Response had no "accessToken" property.');
    }
}
function _c(e) {
    let t = e?.authorityHost;
    if (!t && Yn) {
        t = process.env.AZURE_AUTHORITY_HOST;
    }
    return t ?? bs_AzurePublicCloud;
}
function Sc(e, t) {
    if (!t) {
        t = bs_AzurePublicCloud;
    }
    if (new RegExp(`${e}/?$`).test(t)) {
        return t;
    }
    if (t.endsWith("/")) {
        return t + e;
    } else {
        return `${t}/${e}`;
    }
}
function Kf(e, t, disableInstanceDiscovery) {
    if (e === "adfs" && t || disableInstanceDiscovery) {
        return [
            t
        ];
    }
    return [];
}
const Is = (e, t = Qo ? "Node" : "Browser")=>(r, n, o)=>{
        if (o) {
            return;
        }
        switch(r){
            case G.Error:
                e.info(`MSAL ${t} V2 error: ${n}`);
                return;
            case G.Info:
                e.info(`MSAL ${t} V2 info message: ${n}`);
                return;
            case G.Verbose:
                e.info(`MSAL ${t} V2 verbose message: ${n}`);
                return;
            case G.Warning:
                e.info(`MSAL ${t} V2 warning: ${n}`);
                return;
        }
    };
function _s(e) {
    switch(e){
        case "error":
            return G.Error;
        case "info":
            return G.Info;
        case "verbose":
            return G.Verbose;
        case "warning":
            return G.Warning;
        default:
            return G.Info;
    }
}
function Ur(e, error, r) {
    if (error.name === "AuthError" || error.name === "ClientAuthError" || error.name === "BrowserAuthError") {
        let n = error;
        switch(n.errorCode){
            case "endpoints_resolution_error":
                bo.info(q(e, error.message));
                return new w(error.message);
            case "device_code_polling_cancelled":
                return new Vr("The authentication has been aborted by the caller.");
            case "consent_required":
            case "interaction_required":
            case "login_required":
                bo.info(q(e, `Authentication returned errorCode ${n.errorCode}`));
                break;
            default:
                bo.info(q(e, `Failed to acquire token: ${error.message}`));
                break;
        }
    }
    if (error.name === "ClientConfigurationError" || error.name === "BrowserConfigurationAuthError" || error.name === "AbortError" || error.name === "AuthenticationError") {
        return error;
    }
    if (error.name === "NativeAuthError") {
        bo.info(q(e, `Error from the native broker: ${error.message} with status code: ${error.statusCode}`));
        return error;
    }
    return new dt({
        scopes: e,
        getTokenOptions: r,
        message: error.message
    });
}
function Vf(authenticationRecord) {
    return {
        localAccountId: authenticationRecord.homeAccountId,
        environment: authenticationRecord.authority,
        username: authenticationRecord.username,
        homeAccountId: authenticationRecord.homeAccountId,
        tenantId: authenticationRecord.tenantId
    };
}
function jf(e, cachedAccount) {
    return {
        authority: cachedAccount.environment ?? Gc,
        homeAccountId: cachedAccount.homeAccountId,
        tenantId: cachedAccount.tenantId || zc,
        username: cachedAccount.username,
        clientId: e,
        version
    };
}
const tC = 64000;
function Yf(msiRetryConfig) {
    return Ea([
        {
            name: "imdsRetryPolicy",
            retry: ({ retryCount, response })=>{
                if (response?.status !== 404) {
                    return {
                        skipStrategy: true
                    };
                }
                return Xl(retryCount, {
                    retryDelayInMs: msiRetryConfig.startDelayInMs,
                    maxRetryDelayInMs: tC
                });
            }
        }
    ], {
        maxRetries: msiRetryConfig.maxRetries
    });
}
const vt = "ManagedIdentityCredential - IMDS";
const Lr = z(vt);
const rC = "http://169.254.169.254";
const nC = "/metadata/identity/oauth2/token";
function oC(e) {
    if (!eo(e)) {
        throw Error(`${vt}: Multiple scopes are not supported.`);
    }
    let n = new URL(nC, process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST ?? rC);
    let o = {
        Accept: "application/json"
    };
    return {
        url: `${n}`,
        method: "GET",
        headers: rr(o)
    };
}
const Wf = {
    name: "imdsMsi",
    async isAvailable ({ scopes, identityClient, getTokenOptions }) {
        let o = eo(scopes);
        if (!o) {
            Lr.info(`${vt}: Unavailable. Multiple scopes are not supported.`);
            return false;
        }
        if (process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST) {
            return true;
        }
        if (!identityClient) {
            throw Error("Missing IdentityClient");
        }
        let i = oC(o);
        return Z.withSpan("ManagedIdentityCredential-pingImdsEndpoint", getTokenOptions ?? {}, async (s)=>{
            i.tracingOptions = s.tracingOptions;
            let l = je(i);
            l.timeout = s.requestOptions?.timeout || 1000;
            l.allowInsecureConnection = true;
            let d;
            try {
                Lr.info(`${vt}: Pinging the Azure IMDS endpoint`);
                d = await identityClient.sendRequest(l);
            } catch (error) {
                if (Wo(error)) {
                    Lr.verbose(`${vt}: Caught error ${error.name}: ${error.message}`);
                }
                Lr.info(`${vt}: The Azure IMDS endpoint is unavailable`);
                return false;
            }
            if (d.status === 403) {
                if (d.bodyAsText?.includes("unreachable")) {
                    Lr.info(`${vt}: The Azure IMDS endpoint is unavailable`);
                    Lr.info(`${vt}: ${d.bodyAsText}`);
                    return false;
                }
            }
            Lr.info(`${vt}: The Azure IMDS endpoint is available`);
            return true;
        });
    }
};
const Rc = {
    AutoDiscoverRegion: "AutoDiscoverRegion",
    USWest: "westus",
    USWest2: "westus2",
    USCentral: "centralus",
    USEast: "eastus",
    USEast2: "eastus2",
    USNorthCentral: "northcentralus",
    USSouthCentral: "southcentralus",
    USWestCentral: "westcentralus",
    CanadaCentral: "canadacentral",
    CanadaEast: "canadaeast",
    BrazilSouth: "brazilsouth",
    EuropeNorth: "northeurope",
    EuropeWest: "westeurope",
    UKSouth: "uksouth",
    UKWest: "ukwest",
    FranceCentral: "francecentral",
    FranceSouth: "francesouth",
    SwitzerlandNorth: "switzerlandnorth",
    SwitzerlandWest: "switzerlandwest",
    GermanyNorth: "germanynorth",
    GermanyWestCentral: "germanywestcentral",
    NorwayWest: "norwaywest",
    NorwayEast: "norwayeast",
    AsiaEast: "eastasia",
    AsiaSouthEast: "southeastasia",
    JapanEast: "japaneast",
    JapanWest: "japanwest",
    AustraliaEast: "australiaeast",
    AustraliaSouthEast: "australiasoutheast",
    AustraliaCentral: "australiacentral",
    AustraliaCentral2: "australiacentral2",
    IndiaCentral: "centralindia",
    IndiaSouth: "southindia",
    IndiaWest: "westindia",
    KoreaSouth: "koreasouth",
    KoreaCentral: "koreacentral",
    UAECentral: "uaecentral",
    UAENorth: "uaenorth",
    SouthAfricaNorth: "southafricanorth",
    SouthAfricaWest: "southafricawest",
    ChinaNorth: "chinanorth",
    ChinaEast: "chinaeast",
    ChinaNorth2: "chinanorth2",
    ChinaEast2: "chinaeast2",
    GermanyCentral: "germanycentral",
    GermanyNorthEast: "germanynortheast",
    GovernmentUSVirginia: "usgovvirginia",
    GovernmentUSIowa: "usgoviowa",
    GovernmentUSArizona: "usgovarizona",
    GovernmentUSTexas: "usgovtexas",
    GovernmentUSDodEast: "usdodeast",
    GovernmentUSDodCentral: "usdodcentral"
};
function Ss(e) {
    let n = e;
    if (n === undefined && globalThis.process?.env?.AZURE_REGIONAL_AUTHORITY_NAME !== undefined) {
        n = process.env.AZURE_REGIONAL_AUTHORITY_NAME;
    }
    if (n === Rc.AutoDiscoverRegion) {
        return "AUTO_DISCOVER";
    }
    return n;
}
const De = z("MsalClient");
function iC(e, t, r = {}) {
    let s = cl(r.logger ?? De, t, e);
    let a = Sc(s, _c(r));
    let networkClient = new Qr({
        ...r.tokenCredentialOptions,
        authorityHost: a,
        loggingOptions: r.loggingOptions
    });
    return {
        auth: {
            clientId: e,
            authority: a,
            knownAuthorities: Kf(s, a, r.disableInstanceDiscovery)
        },
        system: {
            networkClient,
            loggerOptions: {
                loggerCallback: Is(r.logger ?? De),
                logLevel: _s(Lo()),
                piiLoggingEnabled: r.loggingOptions?.enableUnsafeSupportLogging
            }
        }
    };
}
function Xt(e, t, r = {}) {
    let o = {
        msalConfig: iC(e, t, r),
        cachedAccount: r.authenticationRecord ? Vf(r.authenticationRecord) : null,
        pluginConfiguration: Wc.generatePluginConfiguration(r),
        logger: r.logger ?? De
    };
    let i = new Map;
    async function s(I = {}) {
        let A = I.enableCae ? "CAE" : "default";
        let E = i.get(A);
        if (E) {
            o.logger.getToken.info("Existing PublicClientApplication found in cache, returning it.");
            return E;
        }
        o.logger.getToken.info(`Creating new PublicClientApplication with CAE ${I.enableCae ? "enabled" : "disabled"}.`);
        let S = I.enableCae ? o.pluginConfiguration.cache.cachePluginCae : o.pluginConfiguration.cache.cachePlugin;
        o.msalConfig.auth.clientCapabilities = I.enableCae ? [
            "cp1"
        ] : undefined;
        E = new Ts({
            ...o.msalConfig,
            broker: {
                nativeBrokerPlugin: o.pluginConfiguration.broker.nativeBrokerPlugin
            },
            cache: {
                cachePlugin: await S
            }
        });
        i.set(A, E);
        return E;
    }
    let a = new Map;
    async function c(I = {}) {
        let A = I.enableCae ? "CAE" : "default";
        let E = a.get(A);
        if (E) {
            o.logger.getToken.info("Existing ConfidentialClientApplication found in cache, returning it.");
            return E;
        }
        o.logger.getToken.info(`Creating new ConfidentialClientApplication with CAE ${I.enableCae ? "enabled" : "disabled"}.`);
        let S = I.enableCae ? o.pluginConfiguration.cache.cachePluginCae : o.pluginConfiguration.cache.cachePlugin;
        o.msalConfig.auth.clientCapabilities = I.enableCae ? [
            "cp1"
        ] : undefined;
        E = new Cs({
            ...o.msalConfig,
            broker: {
                nativeBrokerPlugin: o.pluginConfiguration.broker.nativeBrokerPlugin
            },
            cache: {
                cachePlugin: await S
            }
        });
        a.set(A, E);
        return E;
    }
    async function l(I, A, E = {}) {
        if (o.cachedAccount === null) {
            o.logger.getToken.info("No cached account found in local state.");
            throw new dt({
                scopes: A
            });
        }
        if (E.claims) {
            o.cachedClaims = E.claims;
        }
        let S = {
            account: o.cachedAccount,
            scopes: A,
            claims: o.cachedClaims
        };
        if (o.pluginConfiguration.broker.isEnabled) {
            if (!S.tokenQueryParameters) {
                S.tokenQueryParameters = {};
            }
            if (o.pluginConfiguration.broker.enableMsaPassthrough) {
                S.tokenQueryParameters.msal_request_type = "consumer_passthrough";
            }
        }
        if (E.proofOfPossessionOptions) {
            S.shrNonce = E.proofOfPossessionOptions.nonce;
            S.authenticationScheme = "pop";
            S.resourceRequestMethod = E.proofOfPossessionOptions.resourceRequestMethod;
            S.resourceRequestUri = E.proofOfPossessionOptions.resourceRequestUrl;
        }
        o.logger.getToken.info("Attempting to acquire token silently");
        try {
            return await I.acquireTokenSilent(S);
        } catch (error) {
            throw Ur(A, error, E);
        }
    }
    function d(I) {
        if (I?.tenantId) {
            return Sc(I.tenantId, _c(r));
        }
        return o.msalConfig.auth.authority;
    }
    async function u(I, A, E, S) {
        let D = null;
        try {
            D = await l(I, A, E);
        } catch (error) {
            if (error.name !== "AuthenticationRequiredError") {
                throw error;
            }
            if (E.disableAutomaticAuthentication) {
                throw new dt({
                    scopes: A,
                    getTokenOptions: E,
                    message: "Automatic authentication has been disabled. You may call the authentication() method."
                });
            }
        }
        if (D === null) {
            try {
                D = await S();
            } catch (error) {
                throw Ur(A, error, E);
            }
        }
        Un(A, D, E);
        o.cachedAccount = D?.account ?? null;
        o.logger.getToken.info(he(A));
        return {
            token: D.accessToken,
            expiresOnTimestamp: D.expiresOn.getTime(),
            refreshAfterTimestamp: D.refreshOn?.getTime(),
            tokenType: D.tokenType
        };
    }
    async function getTokenByClientSecret(I, A, E = {}) {
        o.logger.getToken.info("Attempting to acquire token using client secret");
        o.msalConfig.auth.clientSecret = A;
        let H = await c(E);
        try {
            let R = await H.acquireTokenByClientCredential({
                scopes: I,
                authority: d(E),
                azureRegion: Ss(),
                claims: E?.claims
            });
            Un(I, R, E);
            o.logger.getToken.info(he(I));
            return {
                token: R.accessToken,
                expiresOnTimestamp: R.expiresOn.getTime(),
                refreshAfterTimestamp: R.refreshOn?.getTime(),
                tokenType: R.tokenType
            };
        } catch (error) {
            throw Ur(I, error, E);
        }
    }
    async function getTokenByClientAssertion(I, A, E = {}) {
        o.logger.getToken.info("Attempting to acquire token using client assertion");
        o.msalConfig.auth.clientAssertion = A;
        let H = await c(E);
        try {
            let R = await H.acquireTokenByClientCredential({
                scopes: I,
                authority: d(E),
                azureRegion: Ss(),
                claims: E?.claims,
                clientAssertion: A
            });
            Un(I, R, E);
            o.logger.getToken.info(he(I));
            return {
                token: R.accessToken,
                expiresOnTimestamp: R.expiresOn.getTime(),
                refreshAfterTimestamp: R.refreshOn?.getTime(),
                tokenType: R.tokenType
            };
        } catch (error) {
            throw Ur(I, error, E);
        }
    }
    async function getTokenByClientCertificate(I, A, E = {}) {
        o.logger.getToken.info("Attempting to acquire token using client certificate");
        o.msalConfig.auth.clientCertificate = A;
        let H = await c(E);
        try {
            let R = await H.acquireTokenByClientCredential({
                scopes: I,
                authority: d(E),
                azureRegion: Ss(),
                claims: E?.claims
            });
            Un(I, R, E);
            o.logger.getToken.info(he(I));
            return {
                token: R.accessToken,
                expiresOnTimestamp: R.expiresOn.getTime(),
                refreshAfterTimestamp: R.refreshOn?.getTime(),
                tokenType: R.tokenType
            };
        } catch (error) {
            throw Ur(I, error, E);
        }
    }
    async function getTokenByDeviceCode(I, deviceCodeCallback, E = {}) {
        o.logger.getToken.info("Attempting to acquire token using device code");
        let S = await s(E);
        return u(S, I, E, ()=>{
            let D = {
                scopes: I,
                cancel: E?.abortSignal?.aborted ?? false,
                deviceCodeCallback,
                authority: d(E),
                claims: E?.claims
            };
            let se = S.acquireTokenByDeviceCode(D);
            if (E.abortSignal) {
                E.abortSignal.addEventListener("abort", ()=>{
                    D.cancel = true;
                });
            }
            return se;
        });
    }
    async function getTokenByUsernamePassword(I, username, password, S = {}) {
        o.logger.getToken.info("Attempting to acquire token using username and password");
        let H = await s(S);
        return u(H, I, S, ()=>{
            let R = {
                scopes: I,
                username,
                password,
                authority: d(S),
                claims: S?.claims
            };
            return H.acquireTokenByUsernamePassword(R);
        });
    }
    function getActiveAccount() {
        if (!o.cachedAccount) {
            return;
        }
        return jf(e, o.cachedAccount);
    }
    async function getTokenByAuthorizationCode(I, A, E, S, H = {}) {
        o.logger.getToken.info("Attempting to acquire token using authorization code");
        let R;
        if (S) {
            o.msalConfig.auth.clientSecret = S;
            R = await c(H);
        } else {
            R = await s(H);
        }
        return u(R, I, H, ()=>R.acquireTokenByCode({
                scopes: I,
                redirectUri: A,
                code: E,
                authority: d(H),
                claims: H?.claims
            }));
    }
    async function getTokenOnBehalfOf(I, oboAssertion, E, S = {}) {
        De.getToken.info("Attempting to acquire token on behalf of another user");
        if (typeof E === "string") {
            De.getToken.info("Using client secret for on behalf of flow");
            o.msalConfig.auth.clientSecret = E;
        } else if (typeof E === "function") {
            De.getToken.info("Using client assertion callback for on behalf of flow");
            o.msalConfig.auth.clientAssertion = E;
        } else {
            De.getToken.info("Using client certificate for on behalf of flow");
            o.msalConfig.auth.clientCertificate = E;
        }
        let R = await c(S);
        try {
            let D = await R.acquireTokenOnBehalfOf({
                scopes: I,
                authority: d(S),
                claims: S.claims,
                oboAssertion
            });
            Un(I, D, S);
            De.getToken.info(he(I));
            return {
                token: D.accessToken,
                expiresOnTimestamp: D.expiresOn.getTime(),
                refreshAfterTimestamp: D.refreshOn?.getTime(),
                tokenType: D.tokenType
            };
        } catch (error) {
            throw Ur(I, error, S);
        }
    }
    async function getTokenByInteractiveRequest(I, A = {}) {
        De.getToken.info("Attempting to acquire token interactively");
        let E = await s(A);
        async function S(R) {
            De.verbose("Authentication will resume through the broker");
            let se = H();
            if (o.pluginConfiguration.broker.parentWindowHandle) {
                se.windowHandle = Buffer.from(o.pluginConfiguration.broker.parentWindowHandle);
            } else {
                De.warning("Parent window handle is not specified for the broker. This may cause unexpected behavior. Please provide the parentWindowHandle.");
            }
            if (o.pluginConfiguration.broker.enableMsaPassthrough) {
                (se.tokenQueryParameters ??= {}).msal_request_type = "consumer_passthrough";
            }
            if (R) {
                se.prompt = "none";
                De.verbose("Attempting broker authentication using the default broker account");
            } else {
                De.verbose("Attempting broker authentication without the default broker account");
            }
            if (A.proofOfPossessionOptions) {
                se.shrNonce = A.proofOfPossessionOptions.nonce;
                se.authenticationScheme = "pop";
                se.resourceRequestMethod = A.proofOfPossessionOptions.resourceRequestMethod;
                se.resourceRequestUri = A.proofOfPossessionOptions.resourceRequestUrl;
            }
            try {
                return await E.acquireTokenInteractive(se);
            } catch (error) {
                De.verbose(`Failed to authenticate through the broker: ${error.message}`);
                if (R) {
                    return S(false);
                } else {
                    throw error;
                }
            }
        }
        function H() {
            return {
                openBrowser: async (se)=>{
                    let er = await import("/$bunfs/root/chunk-9rz2kgpd.js");
                    await er.default(se, {
                        wait: true,
                        newInstance: true
                    });
                },
                scopes: I,
                authority: d(A),
                claims: A?.claims,
                loginHint: A?.loginHint,
                errorTemplate: A?.browserCustomizationOptions?.errorMessage,
                successTemplate: A?.browserCustomizationOptions?.successMessage,
                prompt: A?.loginHint ? "login" : "select_account"
            };
        }
        return u(E, I, A, async ()=>{
            let D = H();
            if (o.pluginConfiguration.broker.isEnabled) {
                return S(o.pluginConfiguration.broker.useDefaultBrokerAccount ?? false);
            }
            if (A.proofOfPossessionOptions) {
                D.shrNonce = A.proofOfPossessionOptions.nonce;
                D.authenticationScheme = "pop";
                D.resourceRequestMethod = A.proofOfPossessionOptions.resourceRequestMethod;
                D.resourceRequestUri = A.proofOfPossessionOptions.resourceRequestUrl;
            }
            return E.acquireTokenInteractive(D);
        });
    }
    return {
        getActiveAccount,
        getTokenByClientSecret,
        getTokenByClientAssertion,
        getTokenByClientCertificate,
        getTokenByDeviceCode,
        getTokenByUsernamePassword,
        getTokenByAuthorizationCode,
        getTokenOnBehalfOf,
        getTokenByInteractiveRequest
    };
}
const Qf = z("ClientAssertionCredential");
class wc {
    constructor(e, t, r, n = {}){
        if (!e) {
            throw new w("ClientAssertionCredential: tenantId is a required parameter.");
        }
        if (!t) {
            throw new w("ClientAssertionCredential: clientId is a required parameter.");
        }
        if (!r) {
            throw new w("ClientAssertionCredential: clientAssertion is a required parameter.");
        }
        this.tenantId = e;
        this.additionallyAllowedTenantIds = ve(n?.additionallyAllowedTenants);
        this.options = n;
        this.getAssertion = r;
        this.msalClient = Xt(t, e, {
            ...n,
            logger: Qf,
            tokenCredentialOptions: this.options
        });
    }
    async getToken(e, t = {}) {
        return Z.withSpan(`${this.constructor.name}.getToken`, t, async (r)=>{
            r.tenantId = Ee(this.tenantId, r, this.additionallyAllowedTenantIds, Qf);
            let n = Array.isArray(e) ? e : [
                e
            ];
            return this.msalClient.getTokenByClientAssertion(n, this.getAssertion, r);
        });
    }
}
const Hr = "WorkloadIdentityCredential";
const aC = [
    "AZURE_TENANT_ID",
    "AZURE_CLIENT_ID",
    "AZURE_FEDERATED_TOKEN_FILE"
];
const Po = z(Hr);
class Fr {
    constructor(e){
        this.azureFederatedTokenFileContent = undefined;
        this.cacheDate = undefined;
        let t = Ho(aC).assigned.join(", ");
        Po.info(`Found the following environment variables: ${t}`);
        let r = e ?? {};
        let n = r.tenantId || process.env.AZURE_TENANT_ID;
        let o = r.clientId || process.env.AZURE_CLIENT_ID;
        this.federatedTokenFilePath = r.tokenFilePath || process.env.AZURE_FEDERATED_TOKEN_FILE;
        if (n) {
            we(Po, n);
        }
        if (!o) {
            throw new w(`${Hr}: is unavailable. clientId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_CLIENT_ID".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
        }
        if (!n) {
            throw new w(`${Hr}: is unavailable. tenantId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_TENANT_ID".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
        }
        if (!this.federatedTokenFilePath) {
            throw new w(`${Hr}: is unavailable. federatedTokenFilePath is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_FEDERATED_TOKEN_FILE".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
        }
        Po.info(`Invoking ClientAssertionCredential with tenant ID: ${n}, clientId: ${r.clientId} and federated token path: [REDACTED]`);
        this.client = new wc(n, o, this.readFileContents.bind(this), e);
    }
    async getToken(e, t) {
        if (!this.client) {
            let r = `${Hr}: is unavailable. tenantId, clientId, and federatedTokenFilePath are required parameters. 
      In DefaultAzureCredential and ManagedIdentityCredential, these can be provided as environment variables - 
      "AZURE_TENANT_ID",
      "AZURE_CLIENT_ID",
      "AZURE_FEDERATED_TOKEN_FILE". See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`;
            Po.info(r);
            throw new w(r);
        }
        Po.info("Invoking getToken() of Client Assertion Credential");
        return this.client.getToken(e, t);
    }
    async readFileContents() {
        if (this.cacheDate !== undefined && Date.now() - this.cacheDate >= 300000) {
            this.azureFederatedTokenFileContent = undefined;
        }
        if (!this.federatedTokenFilePath) {
            throw new w(`${Hr}: is unavailable. Invalid file path provided ${this.federatedTokenFilePath}.`);
        }
        if (!this.azureFederatedTokenFileContent) {
            let t = (await readFile(this.federatedTokenFilePath, "utf8")).trim();
            if (!t) {
                throw new w(`${Hr}: is unavailable. No content on the file ${this.federatedTokenFilePath}.`);
            } else {
                this.azureFederatedTokenFileContent = t;
                this.cacheDate = Date.now();
            }
        }
        return this.azureFederatedTokenFileContent;
    }
}
const Jf = "ManagedIdentityCredential - Token Exchange";
const cC = z(Jf);
const vc = {
    name: "tokenExchangeMsi",
    async isAvailable (e) {
        let process_env = process.env;
        let r = Boolean((e || process_env.AZURE_CLIENT_ID) && process_env.AZURE_TENANT_ID && process.env.AZURE_FEDERATED_TOKEN_FILE);
        if (!r) {
            cC.info(`${Jf}: Unavailable. The environment variables needed are: AZURE_CLIENT_ID (or the client ID sent through the parameters), AZURE_TENANT_ID and AZURE_FEDERATED_TOKEN_FILE`);
        }
        return r;
    },
    async getToken ({ scopes, clientId }, t = {}) {
        let o = {};
        return new Fr({
            clientId,
            tenantId: process.env.AZURE_TENANT_ID,
            tokenFilePath: process.env.AZURE_FEDERATED_TOKEN_FILE,
            ...o,
            disableInstanceDiscovery: true
        }).getToken(scopes, t);
    }
};
const $e = z("ManagedIdentityCredential");
class Ln {
    constructor(e, t){
        this.msiRetryConfig = {
            maxRetries: 5,
            startDelayInMs: 800,
            intervalIncrement: 2
        };
        let o;
        if (typeof e === "string") {
            this.clientId = e;
            o = t ?? {};
        } else {
            this.clientId = e?.clientId;
            o = e ?? {};
        }
        this.resourceId = o?.resourceId;
        this.objectId = o?.objectId;
        let i = [
            {
                key: "clientId",
                value: this.clientId
            },
            {
                key: "resourceId",
                value: this.resourceId
            },
            {
                key: "objectId",
                value: this.objectId
            }
        ].filter((a)=>a.value);
        if (i.length > 1) {
            throw Error(`ManagedIdentityCredential: only one of 'clientId', 'resourceId', or 'objectId' can be provided. Received values: ${JSON.stringify({
                clientId: this.clientId,
                resourceId: this.resourceId,
                objectId: this.objectId
            })}`);
        }
        o.allowInsecureConnection = true;
        if (o.retryOptions?.maxRetries !== undefined) {
            this.msiRetryConfig.maxRetries = o.retryOptions.maxRetries;
        }
        this.identityClient = new Qr({
            ...o,
            additionalPolicies: [
                {
                    policy: Yf(this.msiRetryConfig),
                    position: "perCall"
                }
            ]
        });
        this.managedIdentityApp = new wt({
            managedIdentityIdParams: {
                userAssignedClientId: this.clientId,
                userAssignedResourceId: this.resourceId,
                userAssignedObjectId: this.objectId
            },
            system: {
                disableInternalRetries: true,
                networkClient: this.identityClient,
                loggerOptions: {
                    logLevel: _s(Lo()),
                    piiLoggingEnabled: o.loggingOptions?.enableUnsafeSupportLogging,
                    loggerCallback: Is($e)
                }
            }
        });
        this.isAvailableIdentityClient = new Qr({
            ...o,
            retryOptions: {
                maxRetries: 0
            }
        });
        let s = this.managedIdentityApp.getManagedIdentitySource();
        if (s === "CloudShell") {
            if (this.clientId || this.resourceId || this.objectId) {
                $e.warning(`CloudShell MSI detected with user-provided IDs - throwing. Received values: ${JSON.stringify({
                    clientId: this.clientId,
                    resourceId: this.resourceId,
                    objectId: this.objectId
                })}.`);
                throw new w("ManagedIdentityCredential: Specifying a user-assigned managed identity is not supported for CloudShell at runtime. When using Managed Identity in CloudShell, omit the clientId, resourceId, and objectId parameters.");
            }
        }
        if (s === "ServiceFabric") {
            if (this.clientId || this.resourceId || this.objectId) {
                $e.warning(`Service Fabric detected with user-provided IDs - throwing. Received values: ${JSON.stringify({
                    clientId: this.clientId,
                    resourceId: this.resourceId,
                    objectId: this.objectId
                })}.`);
                throw new w(`ManagedIdentityCredential: ${Ud}`);
            }
        }
        $e.info(`Using ${s} managed identity.`);
        if (i.length === 1) {
            let { key, value } = i[0];
            $e.info(`${s} with ${key}: ${value}`);
        }
    }
    async getToken(e, t = {}) {
        $e.getToken.info("Using the MSAL provider for Managed Identity.");
        let resource = eo(e);
        if (!resource) {
            throw new w(`ManagedIdentityCredential: Multiple scopes are not supported. Scopes: ${JSON.stringify(e)}`);
        }
        return Z.withSpan("ManagedIdentityCredential.getToken", t, async ()=>{
            try {
                let o = await vc.isAvailable(this.clientId);
                let i = this.managedIdentityApp.getManagedIdentitySource();
                let s = i === "DefaultToImds" || i === "Imds";
                $e.getToken.info(`MSAL Identity source: ${i}`);
                if (o) {
                    $e.getToken.info("Using the token exchange managed identity.");
                    let c = await vc.getToken({
                        scopes: e,
                        clientId: this.clientId,
                        identityClient: this.identityClient,
                        retryConfig: this.msiRetryConfig,
                        resourceId: this.resourceId
                    });
                    if (c === null) {
                        throw new w("Attempted to use the token exchange managed identity, but received a null response.");
                    }
                    return c;
                } else if (s) {
                    $e.getToken.info("Using the IMDS endpoint to probe for availability.");
                    if (!await Wf.isAvailable({
                        scopes: e,
                        clientId: this.clientId,
                        getTokenOptions: t,
                        identityClient: this.isAvailableIdentityClient,
                        resourceId: this.resourceId
                    })) {
                        throw new w("Attempted to use the IMDS endpoint, but it is not available.");
                    }
                }
                $e.getToken.info("Calling into MSAL for managed identity token.");
                let a = await this.managedIdentityApp.acquireToken({
                    resource
                });
                this.ensureValidMsalToken(e, a, t);
                $e.getToken.info(he(e));
                return {
                    expiresOnTimestamp: a.expiresOn.getTime(),
                    token: a.accessToken,
                    refreshAfterTimestamp: a.refreshOn?.getTime(),
                    tokenType: "Bearer"
                };
            } catch (cause) {
                $e.getToken.error(q(e, cause));
                if (cause.name === "AuthenticationRequiredError") {
                    throw cause;
                }
                if (lC(cause)) {
                    throw new w(`ManagedIdentityCredential: Network unreachable. Message: ${cause.message}`, {
                        cause
                    });
                }
                throw new w(`ManagedIdentityCredential: Authentication failed. Message ${cause.message}`, {
                    cause
                });
            }
        });
    }
    ensureValidMsalToken(e, t, r) {
        let n = (o)=>{
            $e.getToken.info(o);
            return new dt({
                scopes: Array.isArray(e) ? e : [
                    e
                ],
                getTokenOptions: r,
                message: o
            });
        };
        if (!t) {
            throw n("No response.");
        }
        if (!t.expiresOn) {
            throw n('Response had no "expiresOn" property.');
        }
        if (!t.accessToken) {
            throw n('Response had no "accessToken" property.');
        }
    }
}
function lC(cause) {
    if (cause.errorCode === "network_error") {
        return true;
    }
    if (cause.code === "ENETUNREACH" || cause.code === "EHOSTUNREACH") {
        return true;
    }
    if (cause.statusCode === 403 || cause.code === 403) {
        if (cause.message.includes("unreachable")) {
            return true;
        }
    }
    return false;
}
function Rs(e) {
    if (Array.isArray(e)) {
        return e;
    }
    return [
        e
    ];
}
function Hn(e, t) {
    if (!e.match(/^[0-9a-zA-Z-_.:/]+$/)) {
        let r = Error("Invalid scope was specified by the user or calling client");
        t.getToken.info(q(e, r));
        throw r;
    }
}
function ws(e) {
    return e.replace(/\/.default$/, "");
}
function kc(e, t) {
    if (!t.match(/^[0-9a-zA-Z-._ ]+$/)) {
        let r = Error("Invalid subscription provided. You can locate your subscription by following the instructions listed here: https://learn.microsoft.com/azure/azure-portal/get-subscription-tenant-id.");
        e.info(q("", r));
        throw r;
    }
}
const Ze = z("AzureCliCredential");
var Xf = {
    getSafeWorkingDir () {
        return "/bin";
    },
    async getAzureCliAccessToken (e, t, r, n) {
        let o = [];
        let i = [];
        if (t) {
            o = [
                "--tenant",
                t
            ];
        }
        if (r) {
            i = [
                "--subscription",
                `"${r}"`
            ];
        }
        return new Promise((resolve, reject)=>{
            try {
                dC.execFile("az", [
                    "account",
                    "get-access-token",
                    "--output",
                    "json",
                    "--resource",
                    e,
                    ...o,
                    ...i
                ], {
                    cwd: Xf.getSafeWorkingDir(),
                    shell: true,
                    timeout: n
                }, (c, l, d)=>{
                    resolve({
                        stdout: l,
                        stderr: d,
                        error: c
                    });
                });
            } catch (error) {
                reject(error);
            }
        });
    }
};
class bc {
    constructor(e){
        if (e?.tenantId) {
            we(Ze, e?.tenantId);
            this.tenantId = e?.tenantId;
        }
        if (e?.subscription) {
            kc(Ze, e?.subscription);
            this.subscription = e?.subscription;
        }
        this.additionallyAllowedTenantIds = ve(e?.additionallyAllowedTenants);
        this.timeout = e?.processTimeoutInMs;
    }
    async getToken(e, t = {}) {
        let r = Ee(this.tenantId, t, this.additionallyAllowedTenantIds);
        if (r) {
            we(Ze, r);
        }
        if (this.subscription) {
            kc(Ze, this.subscription);
        }
        let n = typeof e === "string" ? e : e[0];
        Ze.getToken.info(`Using the scope ${n}`);
        return Z.withSpan(`${this.constructor.name}.getToken`, t, async ()=>{
            try {
                Hn(n, Ze);
                let c = ws(n);
                let l = await Xf.getAzureCliAccessToken(c, r, this.subscription, this.timeout);
                let d = l.stderr?.match("(.*)az login --scope(.*)");
                let u = l.stderr?.match("(.*)az login(.*)") && !d;
                if (l.stderr?.match("az:(.*)not found") || l.stderr?.startsWith("'az' is not recognized")) {
                    let p = new w("Azure CLI could not be found. Please visit https://aka.ms/azure-cli for installation instructions and then, once installed, authenticate to your Azure account using 'az login'.");
                    Ze.getToken.info(q(e, p));
                    throw p;
                }
                if (u) {
                    let p = new w("Please run 'az login' from a command prompt to authenticate before using this credential.");
                    Ze.getToken.info(q(e, p));
                    throw p;
                }
                try {
                    let p = l.stdout;
                    let y = this.parseRawResponse(p);
                    Ze.getToken.info(he(e));
                    return y;
                } catch (error) {
                    if (l.stderr) {
                        throw new w(l.stderr);
                    }
                    throw error;
                }
            } catch (error) {
                let l = error.name === "CredentialUnavailableError" ? error : new w(error.message || "Unknown error while trying to retrieve the access token");
                Ze.getToken.info(q(e, l));
                throw l;
            }
        });
    }
    parseRawResponse(e) {
        let t = JSON.parse(e);
        let t_accessToken = t.accessToken;
        let expiresOnTimestamp = Number.parseInt(t.expires_on, 10) * 1000;
        if (!isNaN(expiresOnTimestamp)) {
            Ze.getToken.info("expires_on is available and is valid, using it");
            return {
                token: t_accessToken,
                expiresOnTimestamp,
                tokenType: "Bearer"
            };
        }
        expiresOnTimestamp = new Date(t.expiresOn).getTime();
        if (isNaN(expiresOnTimestamp)) {
            throw new w(`Unexpected response from Azure CLI when getting token. Expected "expiresOn" to be a RFC3339 date string. Got: "${t.expiresOn}"`);
        }
        return {
            token: t_accessToken,
            expiresOnTimestamp,
            tokenType: "Bearer"
        };
    }
}
const Zt = z("AzureDeveloperCliCredential");
var Zf = {
    getSafeWorkingDir () {
        return "/bin";
    },
    async getAzdAccessToken (e, t, r) {
        let n = [];
        if (t) {
            n = [
                "--tenant-id",
                t
            ];
        }
        return new Promise((resolve, reject)=>{
            try {
                dC.execFile("azd", [
                    "auth",
                    "token",
                    "--output",
                    "json",
                    ...e.reduce((acc, item)=>acc.concat("--scope", item), []),
                    ...n
                ], {
                    cwd: Zf.getSafeWorkingDir(),
                    timeout: r
                }, (s, a, c)=>{
                    resolve({
                        stdout: a,
                        stderr: c,
                        error: s
                    });
                });
            } catch (error) {
                reject(error);
            }
        });
    }
};
class Pc {
    constructor(e){
        if (e?.tenantId) {
            we(Zt, e?.tenantId);
            this.tenantId = e?.tenantId;
        }
        this.additionallyAllowedTenantIds = ve(e?.additionallyAllowedTenants);
        this.timeout = e?.processTimeoutInMs;
    }
    async getToken(e, t = {}) {
        let r = Ee(this.tenantId, t, this.additionallyAllowedTenantIds);
        if (r) {
            we(Zt, r);
        }
        let n;
        if (typeof e === "string") {
            n = [
                e
            ];
        } else {
            n = e;
        }
        Zt.getToken.info(`Using the scopes ${e}`);
        return Z.withSpan(`${this.constructor.name}.getToken`, t, async ()=>{
            try {
                n.forEach((u)=>{
                    Hn(u, Zt);
                });
                let c = await Zf.getAzdAccessToken(n, r, this.timeout);
                let l = c.stderr?.match("not logged in, run `azd login` to login") || c.stderr?.match("not logged in, run `azd auth login` to login");
                if (c.stderr?.match("azd:(.*)not found") || c.stderr?.startsWith("'azd' is not recognized") || c.error && c.error.code === "ENOENT") {
                    let u = new w("Azure Developer CLI couldn't be found. To mitigate this issue, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.");
                    Zt.getToken.info(q(e, u));
                    throw u;
                }
                if (l) {
                    let u = new w("Please run 'azd auth login' from a command prompt to authenticate before using this credential. For more information, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.");
                    Zt.getToken.info(q(e, u));
                    throw u;
                }
                try {
                    let u = JSON.parse(c.stdout);
                    Zt.getToken.info(he(e));
                    return {
                        token: u.token,
                        expiresOnTimestamp: new Date(u.expiresOn).getTime(),
                        tokenType: "Bearer"
                    };
                } catch (error) {
                    if (c.stderr) {
                        throw new w(c.stderr);
                    }
                    throw error;
                }
            } catch (error) {
                let l = error.name === "CredentialUnavailableError" ? error : new w(error.message || "Unknown error while trying to retrieve the access token");
                Zt.getToken.info(q(e, l));
                throw l;
            }
        });
    }
}
const tm = {
    execFile (e, t, r) {
        return new Promise((resolve, reject)=>{
            em.execFile(e, t, r, (i, s, a)=>{
                if (Buffer.isBuffer(s)) {
                    s = s.toString("utf8");
                }
                if (Buffer.isBuffer(a)) {
                    a = a.toString("utf8");
                }
                if (a || i) {
                    reject(a ? Error(a) : i);
                } else {
                    resolve(s);
                }
            });
        });
    }
};
const kt = z("AzurePowerShellCredential");
const nm = false;
function om(e) {
    if (nm) {
        return `${e}.exe`;
    } else {
        return e;
    }
}
async function rm(e, t) {
    let r = [];
    for (let n of e){
        let [o, ...i] = n;
        let s = await tm.execFile(o, i, {
            encoding: "utf8",
            timeout: t
        });
        r.push(s);
    }
    return r;
}
const im = {
    login: "Run Connect-AzAccount to login",
    installed: "The specified module 'Az.Accounts' with version '2.2.0' was not loaded because no valid module file was found in any module directory"
};
const Oc = {
    login: "Please run 'Connect-AzAccount' from PowerShell to authenticate before using this credential.",
    installed: `The 'Az.Account' module >= 2.2.0 is not installed. Install the Azure Az PowerShell module with: "Install-Module -Name Az -Scope CurrentUser -Repository PSGallery -Force".`,
    troubleshoot: "To troubleshoot, visit https://aka.ms/azsdk/js/identity/powershellcredential/troubleshoot."
};
const hC = (error)=>error.message.match(`(.*)${im.login}(.*)`);
const fC = (error)=>error.message.match(im.installed);
const Nc = [
    om("pwsh")
];
if (nm) {
    Nc.push(om("powershell"));
}
class xc {
    constructor(e){
        if (e?.tenantId) {
            we(kt, e?.tenantId);
            this.tenantId = e?.tenantId;
        }
        this.additionallyAllowedTenantIds = ve(e?.additionallyAllowedTenants);
        this.timeout = e?.processTimeoutInMs;
    }
    async getAzurePowerShellAccessToken(e, t, r) {
        for (let n of [
            ...Nc
        ]){
            try {
                await rm([
                    [
                        n,
                        "/?"
                    ]
                ], r);
            } catch (s) {
                Nc.shift();
                continue;
            }
            let i = (await rm([
                [
                    n,
                    "-NoProfile",
                    "-NonInteractive",
                    "-Command",
                    `
          $tenantId = "${t ?? ""}"
          $m = Import-Module Az.Accounts -MinimumVersion 2.2.0 -PassThru
          $useSecureString = $m.Version -ge [version]'2.17.0'

          $params = @{
            ResourceUrl = "${e}"
          }

          if ($tenantId.Length -gt 0) {
            $params["TenantId"] = $tenantId
          }

          if ($useSecureString) {
            $params["AsSecureString"] = $true
          }

          $token = Get-AzAccessToken @params

          $result = New-Object -TypeName PSObject
          $result | Add-Member -MemberType NoteProperty -Name ExpiresOn -Value $token.ExpiresOn
          if ($useSecureString) {
            $result | Add-Member -MemberType NoteProperty -Name Token -Value (ConvertFrom-SecureString -AsPlainText $token.Token)
          } else {
            $result | Add-Member -MemberType NoteProperty -Name Token -Value $token.Token
          }

          Write-Output (ConvertTo-Json $result)
          `
                ]
            ]))[0];
            return mC(i);
        }
        throw Error("Unable to execute PowerShell. Ensure that it is installed in your system");
    }
    async getToken(e, t = {}) {
        return Z.withSpan(`${this.constructor.name}.getToken`, t, async ()=>{
            let r = Ee(this.tenantId, t, this.additionallyAllowedTenantIds);
            let n = typeof e === "string" ? e : e[0];
            if (r) {
                we(kt, r);
            }
            try {
                Hn(n, kt);
                kt.getToken.info(`Using the scope ${n}`);
                let o = ws(n);
                let i = await this.getAzurePowerShellAccessToken(o, r, this.timeout);
                kt.getToken.info(he(e));
                return {
                    token: i.Token,
                    expiresOnTimestamp: new Date(i.ExpiresOn).getTime(),
                    tokenType: "Bearer"
                };
            } catch (error) {
                if (fC(error)) {
                    let s = new w(Oc.installed);
                    kt.getToken.info(q(n, s));
                    throw s;
                } else if (hC(error)) {
                    let s = new w(Oc.login);
                    kt.getToken.info(q(n, s));
                    throw s;
                }
                let i = new w(`${error}. ${Oc.troubleshoot}`);
                kt.getToken.info(q(n, i));
                throw i;
            }
        });
    }
}
async function mC(e) {
    let t = /{[^{}]*}/g;
    let r = e.match(t);
    let n = e;
    if (r) {
        try {
            for (let o of r){
                try {
                    let i = JSON.parse(o);
                    if (i?.Token) {
                        n = n.replace(o, "");
                        if (n) {
                            kt.getToken.warning(n);
                        }
                        return i;
                    }
                } catch (i) {
                    continue;
                }
            }
        } catch (o) {
            throw Error(`Unable to parse the output of PowerShell. Received output: ${e}`);
        }
    }
    throw Error(`No access token found in the output. Received output: ${e}`);
}
const Mc = z("ChainedTokenCredential");
class Dc {
    constructor(...e){
        this._sources = [];
        this._sources = e;
    }
    async getToken(e, t = {}) {
        let { token } = await this.getTokenInternal(e, t);
        return token;
    }
    async getTokenInternal(e, t = {}) {
        let token = null;
        let successfulCredential;
        let o = [];
        return Z.withSpan("ChainedTokenCredential.getToken", t, async (i)=>{
            for(let s = 0; s < this._sources.length && token === null; s++){
                try {
                    token = await this._sources[s].getToken(e, i);
                    successfulCredential = this._sources[s];
                } catch (error) {
                    if (error.name === "CredentialUnavailableError" || error.name === "AuthenticationRequiredError") {
                        o.push(error);
                    } else {
                        Mc.getToken.info(q(e, error));
                        throw error;
                    }
                }
            }
            if (!token && o.length > 0) {
                let s = new Fs(o, "ChainedTokenCredential authentication failed.");
                Mc.getToken.info(q(e, s));
                throw s;
            }
            Mc.getToken.info(`Result for ${successfulCredential.constructor.name}: ${he(e)}`);
            if (token === null) {
                throw new w("Failed to retrieve a valid token");
            }
            return {
                token,
                successfulCredential
            };
        });
    }
}
const Oo = "ClientCertificateCredential";
const am = z(Oo);
class Uc {
    constructor(e, t, r, n = {}){
        if (!e || !t) {
            throw Error(`${Oo}: tenantId and clientId are required parameters.`);
        }
        this.tenantId = e;
        this.additionallyAllowedTenantIds = ve(n?.additionallyAllowedTenants);
        this.sendCertificateChain = n.sendCertificateChain;
        this.certificateConfiguration = {
            ...typeof r === "string" ? {
                certificatePath: r
            } : r
        };
        let o = this.certificateConfiguration.certificate;
        let i = this.certificateConfiguration.certificatePath;
        if (!this.certificateConfiguration || !(o || i)) {
            throw Error(`${Oo}: Provide either a PEM certificate in string form, or the path to that certificate in the filesystem. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
        }
        if (o && i) {
            throw Error(`${Oo}: To avoid unexpected behaviors, providing both the contents of a PEM certificate and the path to a PEM certificate is forbidden. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
        }
        this.msalClient = Xt(t, e, {
            ...n,
            logger: am,
            tokenCredentialOptions: n
        });
    }
    async getToken(e, t = {}) {
        return Z.withSpan(`${Oo}.getToken`, t, async (r)=>{
            r.tenantId = Ee(this.tenantId, r, this.additionallyAllowedTenantIds, am);
            let n = Array.isArray(e) ? e : [
                e
            ];
            let o = await this.buildClientCertificate();
            return this.msalClient.getTokenByClientCertificate(n, o, r);
        });
    }
    async buildClientCertificate() {
        let t = await yC(this.certificateConfiguration, this.sendCertificateChain ?? false);
        let privateKey;
        if (this.certificateConfiguration.certificatePassword !== undefined) {
            privateKey = createPrivateKey({
                key: t.certificateContents,
                passphrase: this.certificateConfiguration.certificatePassword,
                format: "pem"
            }).export({
                format: "pem",
                type: "pkcs8"
            }).toString();
        } else {
            privateKey = t.certificateContents;
        }
        return {
            thumbprint: t.thumbprint,
            thumbprintSha256: t.thumbprintSha256,
            privateKey,
            x5c: t.x5c
        };
    }
}
async function yC({ certificate, certificatePath }, t) {
    let certificateContents = certificate || await readFile(certificatePath, "utf8");
    let x5c = t ? certificateContents : undefined;
    let s = /(-+BEGIN CERTIFICATE-+)(\n\r?|\r\n?)([A-Za-z0-9+/\n\r]+=*)(\n\r?|\r\n?)(-+END CERTIFICATE-+)/g;
    let a = [];
    let c;
    do {
        c = s.exec(certificateContents);
        if (c) {
            a.push(c[3]);
        }
    }while (c)
    if (a.length === 0) {
        throw Error("The file at the specified path does not contain a PEM-encoded certificate.");
    }
    let thumbprint = createHash("sha1").update(Buffer.from(a[0], "base64")).digest("hex").toUpperCase();
    let thumbprintSha256 = createHash("sha256").update(Buffer.from(a[0], "base64")).digest("hex").toUpperCase();
    return {
        certificateContents,
        thumbprintSha256,
        thumbprint,
        x5c
    };
}
const cm = z("ClientSecretCredential");
class Lc {
    constructor(e, t, r, n = {}){
        if (!e) {
            throw new w("ClientSecretCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
        }
        if (!t) {
            throw new w("ClientSecretCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
        }
        if (!r) {
            throw new w("ClientSecretCredential: clientSecret is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
        }
        this.clientSecret = r;
        this.tenantId = e;
        this.additionallyAllowedTenantIds = ve(n?.additionallyAllowedTenants);
        this.msalClient = Xt(t, e, {
            ...n,
            logger: cm,
            tokenCredentialOptions: n
        });
    }
    async getToken(e, t = {}) {
        return Z.withSpan(`${this.constructor.name}.getToken`, t, async (r)=>{
            r.tenantId = Ee(this.tenantId, r, this.additionallyAllowedTenantIds, cm);
            let n = Rs(e);
            return this.msalClient.getTokenByClientSecret(n, this.clientSecret, r);
        });
    }
}
const TC = z("UsernamePasswordCredential");
class Hc {
    constructor(e, t, r, n, o = {}){
        if (!e) {
            throw new w("UsernamePasswordCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
        }
        if (!t) {
            throw new w("UsernamePasswordCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
        }
        if (!r) {
            throw new w("UsernamePasswordCredential: username is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
        }
        if (!n) {
            throw new w("UsernamePasswordCredential: password is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
        }
        this.tenantId = e;
        this.additionallyAllowedTenantIds = ve(o?.additionallyAllowedTenants);
        this.username = r;
        this.password = n;
        this.msalClient = Xt(t, this.tenantId, {
            ...o,
            tokenCredentialOptions: o ?? {}
        });
    }
    async getToken(e, t = {}) {
        return Z.withSpan(`${this.constructor.name}.getToken`, t, async (r)=>{
            r.tenantId = Ee(this.tenantId, r, this.additionallyAllowedTenantIds, TC);
            let n = Rs(e);
            return this.msalClient.getTokenByUsernamePassword(n, this.username, this.password, r);
        });
    }
}
const EC = [
    "AZURE_TENANT_ID",
    "AZURE_CLIENT_ID",
    "AZURE_CLIENT_SECRET",
    "AZURE_CLIENT_CERTIFICATE_PATH",
    "AZURE_CLIENT_CERTIFICATE_PASSWORD",
    "AZURE_USERNAME",
    "AZURE_PASSWORD",
    "AZURE_ADDITIONALLY_ALLOWED_TENANTS",
    "AZURE_CLIENT_SEND_CERTIFICATE_CHAIN"
];
function CC() {
    return (process.env.AZURE_ADDITIONALLY_ALLOWED_TENANTS ?? "").split(";");
}
const vs = "EnvironmentCredential";
const bt = z(vs);
function AC() {
    let t = (process.env.AZURE_CLIENT_SEND_CERTIFICATE_CHAIN ?? "").toLowerCase();
    let r = t === "true" || t === "1";
    bt.verbose(`AZURE_CLIENT_SEND_CERTIFICATE_CHAIN: ${process.env.AZURE_CLIENT_SEND_CERTIFICATE_CHAIN}; sendCertificateChain: ${r}`);
    return r;
}
class Fc {
    constructor(e){
        this._credential = undefined;
        let t = Ho(EC).assigned.join(", ");
        bt.info(`Found the following environment variables: ${t}`);
        let r = process.env.AZURE_TENANT_ID;
        let n = process.env.AZURE_CLIENT_ID;
        let o = process.env.AZURE_CLIENT_SECRET;
        let additionallyAllowedTenantIds = CC();
        let sendCertificateChain = AC();
        let a = {
            ...e,
            additionallyAllowedTenantIds,
            sendCertificateChain
        };
        if (r) {
            we(bt, r);
        }
        if (r && n && o) {
            bt.info(`Invoking ClientSecretCredential with tenant ID: ${r}, clientId: ${n} and clientSecret: [REDACTED]`);
            this._credential = new Lc(r, n, o, a);
            return;
        }
        let c = process.env.AZURE_CLIENT_CERTIFICATE_PATH;
        let certificatePassword = process.env.AZURE_CLIENT_CERTIFICATE_PASSWORD;
        if (r && n && c) {
            bt.info(`Invoking ClientCertificateCredential with tenant ID: ${r}, clientId: ${n} and certificatePath: ${c}`);
            this._credential = new Uc(r, n, {
                certificatePath: c,
                certificatePassword
            }, a);
            return;
        }
        let d = process.env.AZURE_USERNAME;
        let u = process.env.AZURE_PASSWORD;
        if (r && n && d && u) {
            bt.info(`Invoking UsernamePasswordCredential with tenant ID: ${r}, clientId: ${n} and username: ${d}`);
            bt.warning("Environment is configured to use username and password authentication. This authentication method is deprecated, as it doesn't support multifactor authentication (MFA). Use a more secure credential. For more details, see https://aka.ms/azsdk/identity/mfa.");
            this._credential = new Hc(r, n, d, u, a);
        }
    }
    async getToken(e, t = {}) {
        return Z.withSpan(`${vs}.getToken`, t, async (r)=>{
            if (this._credential) {
                try {
                    let n = await this._credential.getToken(e, r);
                    bt.getToken.info(he(e));
                    return n;
                } catch (error) {
                    let o = new $n(400, {
                        error: `${vs} authentication failed. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`,
                        error_description: error.message.toString().split("More details:").join("")
                    });
                    bt.getToken.info(q(e, o));
                    throw o;
                }
            }
            throw new w(`${vs} is unavailable. No underlying credential could be used. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`);
        });
    }
}
const $c = z("DefaultAzureCredential");
function IC(e = {}) {
    let t;
    if (!((t = e.retryOptions) !== null && t !== undefined)) {
        e.retryOptions = {
            maxRetries: 5,
            retryDelayInMs: 800
        };
    }
    let i = e?.managedIdentityClientId ?? process.env.AZURE_CLIENT_ID;
    let s = e?.workloadIdentityClientId ?? i;
    let resourceId = e?.managedIdentityResourceId;
    let AZURE_FEDERATED_TOKEN_FILE = process.env.AZURE_FEDERATED_TOKEN_FILE;
    let l = e?.tenantId ?? process.env.AZURE_TENANT_ID;
    if (resourceId) {
        let d = {
            ...e,
            resourceId
        };
        return new Ln(d);
    }
    if (AZURE_FEDERATED_TOKEN_FILE && s) {
        let d = {
            ...e,
            tenantId: l
        };
        return new Ln(s, d);
    }
    if (i) {
        let d = {
            ...e,
            clientId: i
        };
        return new Ln(d);
    }
    return new Ln(e);
}
function _C(e) {
    let o = e?.managedIdentityClientId ?? process.env.AZURE_CLIENT_ID;
    let i = e?.workloadIdentityClientId ?? o;
    let AZURE_FEDERATED_TOKEN_FILE = process.env.AZURE_FEDERATED_TOKEN_FILE;
    let a = e?.tenantId ?? process.env.AZURE_TENANT_ID;
    if (AZURE_FEDERATED_TOKEN_FILE && i) {
        let c = {
            ...e,
            tenantId: a,
            clientId: i,
            tokenFilePath: AZURE_FEDERATED_TOKEN_FILE
        };
        return new Fr(c);
    }
    if (a) {
        let c = {
            ...e,
            tenantId: a
        };
        return new Fr(c);
    }
    return new Fr(e);
}
function SC(e = {}) {
    let e_processTimeoutInMs = e.processTimeoutInMs;
    return new Pc({
        processTimeoutInMs: e_processTimeoutInMs,
        ...e
    });
}
function RC(e = {}) {
    let e_processTimeoutInMs = e.processTimeoutInMs;
    return new bc({
        processTimeoutInMs: e_processTimeoutInMs,
        ...e
    });
}
function wC(e = {}) {
    let e_processTimeoutInMs = e.processTimeoutInMs;
    return new xc({
        processTimeoutInMs: e_processTimeoutInMs,
        ...e
    });
}
function vC(e = {}) {
    return new Fc(e);
}
class lm {
    constructor(e, t){
        this.credentialName = e;
        this.credentialUnavailableErrorMessage = t;
    }
    getToken() {
        $c.getToken.info(`Skipping ${this.credentialName}, reason: ${this.credentialUnavailableErrorMessage}`);
        return Promise.resolve(null);
    }
}
export class DefaultAzureCredential extends Dc {
    constructor(e){
        let t = process.env.AZURE_TOKEN_CREDENTIALS ? process.env.AZURE_TOKEN_CREDENTIALS.trim().toLowerCase() : undefined;
        let r = [
            RC,
            wC,
            SC
        ];
        let n = [
            vC,
            _C,
            IC
        ];
        let o = [];
        if (t) {
            switch(t){
                case "dev":
                    o = r;
                    break;
                case "prod":
                    o = n;
                    break;
                default:
                    {
                        let s = `Invalid value for AZURE_TOKEN_CREDENTIALS = ${process.env.AZURE_TOKEN_CREDENTIALS}. Valid values are 'prod' or 'dev'.`;
                        $c.warning(s);
                        throw Error(s);
                    }
            }
        } else {
            o = [
                ...n,
                ...r
            ];
        }
        let i = o.map((s)=>{
            try {
                return s(e);
            } catch (error) {
                $c.warning(`Skipped ${s.name} because of an error creating the credential: ${error}`);
                return new lm(s.name, error.message);
            }
        });
        super(...i);
    }
}
export function getBearerTokenProvider(credential, scopes, r) {
    let { abortSignal, tracingOptions } = r || {};
    let i = qn();
    i.addPolicy(Zn({
        credential,
        scopes
    }));
    async function s() {
        let l = (await i.sendRequest({
            sendRequest: (d)=>Promise.resolve({
                    request: d,
                    status: 200,
                    headers: d.headers
                })
        }, je({
            url: "https://example.com",
            abortSignal,
            tracingOptions
        }))).headers.get("authorization")?.split(" ")[1];
        if (!l) {
            throw Error("Failed to get access token");
        }
        return l;
    }
    return s;
}
