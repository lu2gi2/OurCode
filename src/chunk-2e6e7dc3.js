import { $Pt } from "/$bunfs/root/chunk-hx6qdsg5.js";
import { eP } from "/$bunfs/root/chunk-53tyrfzz.js";
import { jm, lTo } from "/$bunfs/root/chunk-55x53sfe.js";
import { jAo, Qk } from "/$bunfs/root/chunk-dze6yaxw.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
export const OYe = C(function(Re) {
    const f = $Pt();
    const d = Qk();
    const ue = jAo();
    const Y = jm();
    const M = eP();
    const R = lTo();
    const K = "X-Amz-Algorithm";
    const j = "X-Amz-Credential";
    const m = "X-Amz-Date";
    const Q = "X-Amz-SignedHeaders";
    const V = "X-Amz-Expires";
    const U = "X-Amz-Signature";
    const v = "X-Amz-Security-Token";
    const Ae = "X-Amz-Region-Set";
    const x = "authorization";
    const P = m.toLowerCase();
    const q = "date";
    const z = [
        x,
        P,
        q
    ];
    const B = U.toLowerCase();
    const S = "x-amz-content-sha256";
    const X = v.toLowerCase();
    const Ee = "host";
    const F = {
        authorization: true,
        "cache-control": true,
        connection: true,
        expect: true,
        from: true,
        "keep-alive": true,
        "max-forwards": true,
        pragma: true,
        referer: true,
        te: true,
        trailer: true,
        "transfer-encoding": true,
        upgrade: true,
        "user-agent": true,
        "x-amzn-trace-id": true
    };
    const W = /^proxy-/;
    const Z = /^sec-/;
    const he = [
        /^proxy-/i,
        /^sec-/i
    ];
    const _ = "AWS4-HMAC-SHA256";
    const fe = "AWS4-ECDSA-P256-SHA256";
    const J = "AWS4-HMAC-SHA256-PAYLOAD";
    const ee = "UNSIGNED-PAYLOAD";
    const te = 50;
    const N = "aws4_request";
    const se = 604800;
    const y = {};
    const w = [];
    const D = (e, t, r)=>`${e}/${t}/${r}/${N}`;
    const re = async (e, t, r, s, n)=>{
        let a = await G(e, t.secretAccessKey, t.accessKeyId);
        let o = `${r}:${s}:${n}:${f.toHex(a)}:${t.sessionToken}`;
        if (o in y) {
            return y[o];
        }
        w.push(o);
        while(w.length > te){
            delete y[w.shift()];
        }
        let i = `AWS4${t.secretAccessKey}`;
        for (let c of [
            r,
            s,
            n,
            N
        ]){
            i = await G(e, i, c);
        }
        return y[o] = i;
    };
    const le = ()=>{
        w.length = 0;
        Object.keys(y).forEach((e)=>{
            delete y[e];
        });
    };
    var G = (e, t, r)=>{
        let s = new e(t);
        s.update(d.toUint8Array(r));
        return s.digest();
    };
    const T = ({ headers }, t, r)=>{
        let s = {};
        for (let n of Object.keys(headers).sort()){
            if (headers[n] == null) {
                continue;
            }
            let a = n.toLowerCase();
            if (a in F || t?.has(a) || W.test(a) || Z.test(a)) {
                if (!r || r && !r.has(a)) {
                    continue;
                }
            }
            s[a] = headers[n].trim().replace(/\s+/g, " ");
        }
        return s;
    };
    const H = async ({ headers, body }, r)=>{
        for (let s of Object.keys(headers)){
            if (s.toLowerCase() === S) {
                return headers[s];
            }
        }
        if (body == null) {
            return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
        } else if (typeof body === "string" || ArrayBuffer.isView(body) || ue.isArrayBuffer(body)) {
            let s = new r;
            s.update(d.toUint8Array(body));
            return f.toHex(await s.digest());
        }
        return ee;
    };
    class ne {
        format(e) {
            let t = [];
            for (let n of Object.keys(e)){
                let a = d.fromUtf8(n);
                t.push(Uint8Array.from([
                    a.byteLength
                ]), a, this.formatHeaderValue(e[n]));
            }
            let r = new Uint8Array(t.reduce((acc, item)=>acc + item.byteLength, 0));
            let s = 0;
            for (let n of t){
                r.set(n, s);
                s += n.byteLength;
            }
            return r;
        }
        formatHeaderValue(e) {
            switch(e.type){
                case "boolean":
                    return Uint8Array.from([
                        e.value ? 0 : 1
                    ]);
                case "byte":
                    return Uint8Array.from([
                        2,
                        e.value
                    ]);
                case "short":
                    let t = new DataView(new ArrayBuffer(3));
                    t.setUint8(0, 3);
                    t.setInt16(1, e.value, false);
                    return new Uint8Array(t.buffer);
                case "integer":
                    let r = new DataView(new ArrayBuffer(5));
                    r.setUint8(0, 4);
                    r.setInt32(1, e.value, false);
                    return new Uint8Array(r.buffer);
                case "long":
                    let s = new Uint8Array(9);
                    s[0] = 5;
                    s.set(e.value.bytes, 1);
                    return s;
                case "binary":
                    let n = new DataView(new ArrayBuffer(3 + e.value.byteLength));
                    n.setUint8(0, 6);
                    n.setUint16(1, e.value.byteLength, false);
                    let a = new Uint8Array(n.buffer);
                    a.set(e.value, 3);
                    return a;
                case "string":
                    let o = d.fromUtf8(e.value);
                    let i = new DataView(new ArrayBuffer(3 + o.byteLength));
                    i.setUint8(0, 7);
                    i.setUint16(1, o.byteLength, false);
                    let c = new Uint8Array(i.buffer);
                    c.set(o, 3);
                    return c;
                case "timestamp":
                    let A = new Uint8Array(9);
                    A[0] = 8;
                    A.set(b.fromNumber(e.value.valueOf()).bytes, 1);
                    return A;
                case "uuid":
                    if (!ge.test(e.value)) {
                        throw Error(`Invalid UUID received: ${e.value}`);
                    }
                    let u = new Uint8Array(17);
                    u[0] = 9;
                    u.set(f.fromHex(e.value.replace(/\-/g, "")), 1);
                    return u;
            }
        }
    }
    const ge = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    class b {
        bytes;
        constructor(e){
            this.bytes = e;
            if (e.byteLength !== 8) {
                throw Error("Int64 buffers must be exactly 8 bytes");
            }
        }
        static fromNumber(e) {
            if (e > 9223372036854776000 || e < -9223372036854776000) {
                throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
            }
            let t = new Uint8Array(8);
            for(let r = 7, s = Math.abs(Math.round(e)); r > -1 && s > 0; r--, s /= 256){
                t[r] = s;
            }
            if (e < 0) {
                k(t);
            }
            return new b(t);
        }
        valueOf() {
            let e = this.bytes.slice(0);
            let t = e[0] & 128;
            if (t) {
                k(e);
            }
            return parseInt(f.toHex(e), 16) * (t ? -1 : 1);
        }
        toString() {
            return String(this.valueOf());
        }
    }
    function k(e) {
        for(let t = 0; t < 8; t++){
            e[t] ^= 255;
        }
        for(let t = 7; t > -1; t--){
            e[t]++;
            if (e[t] !== 0) {
                break;
            }
        }
    }
    const ae = (e, t)=>{
        e = e.toLowerCase();
        for (let r of Object.keys(t)){
            if (e === r.toLowerCase()) {
                return true;
            }
        }
        return false;
    };
    const oe = (e, t = {})=>{
        let { headers, query = {} } = Y.HttpRequest.clone(e);
        for (let n of Object.keys(headers)){
            let a = n.toLowerCase();
            if (a.slice(0, 6) === "x-amz-" && !t.unhoistableHeaders?.has(a) || t.hoistableHeaders?.has(a)) {
                query[n] = headers[n];
                delete headers[n];
            }
        }
        return {
            ...e,
            headers,
            query
        };
    };
    const I = (e)=>{
        e = Y.HttpRequest.clone(e);
        for (let t of Object.keys(e.headers)){
            if (z.indexOf(t.toLowerCase()) > -1) {
                delete e.headers[t];
            }
        }
        return e;
    };
    const ie = ({ query = {} })=>{
        let t = [];
        let r = {};
        for (let s of Object.keys(query)){
            if (s.toLowerCase() === B) {
                continue;
            }
            let n = R.escapeUri(s);
            t.push(n);
            let a = query[s];
            if (typeof a === "string") {
                r[n] = `${n}=${R.escapeUri(a)}`;
            } else if (Array.isArray(a)) {
                r[n] = a.slice(0).reduce((acc, item)=>acc.concat([
                        `${n}=${R.escapeUri(item)}`
                    ]), []).sort().join("&");
            }
        }
        return t.sort().map((s)=>r[s]).filter((s)=>s).join("&");
    };
    const de = (e)=>ye(e).toISOString().replace(/\.\d{3}Z$/, "Z");
    var ye = (e)=>{
        if (typeof e === "number") {
            return new Date(e * 1000);
        }
        if (typeof e === "string") {
            if (Number(e)) {
                return new Date(Number(e) * 1000);
            }
            return new Date(e);
        }
        return e;
    };
    class L {
        service;
        regionProvider;
        credentialProvider;
        sha256;
        uriEscapePath;
        applyChecksum;
        constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }){
            this.service = service;
            this.sha256 = sha256;
            this.uriEscapePath = uriEscapePath;
            this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
            this.regionProvider = M.normalizeProvider(region);
            this.credentialProvider = M.normalizeProvider(credentials);
        }
        createCanonicalRequest(e, t, r) {
            let s = Object.keys(t).sort();
            return `${e.method}
${this.getCanonicalPath(e)}
${ie(e)}
${s.map((n)=>`${n}:${t[n]}`).join(`
`)}

${s.join(";")}
${r}`;
        }
        async createStringToSign(e, t, r, s) {
            let n = new this.sha256;
            n.update(d.toUint8Array(r));
            let a = await n.digest();
            return `${s}
${e}
${t}
${f.toHex(a)}`;
        }
        getCanonicalPath({ path }) {
            if (this.uriEscapePath) {
                let t = [];
                for (let n of path.split("/")){
                    if (n?.length === 0) {
                        continue;
                    }
                    if (n === ".") {
                        continue;
                    }
                    if (n === "..") {
                        t.pop();
                    } else {
                        t.push(n);
                    }
                }
                let r = `${path?.startsWith("/") ? "/" : ""}${t.join("/")}${t.length > 0 && path?.endsWith("/") ? "/" : ""}`;
                return R.escapeUri(r).replace(/%2F/g, "/");
            }
            return path;
        }
        validateResolvedCredentials(e) {
            if (typeof e !== "object" || typeof e.accessKeyId !== "string" || typeof e.secretAccessKey !== "string") {
                throw Error("Resolved credential object is not valid");
            }
        }
        formatDate(e) {
            let longDate = de(e).replace(/[\-:]/g, "");
            return {
                longDate,
                shortDate: longDate.slice(0, 8)
            };
        }
        getCanonicalHeaderList(e) {
            return Object.keys(e).sort().join(";");
        }
    }
    class ce extends L {
        headerFormatter = new ne;
        constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }){
            super({
                applyChecksum,
                credentials,
                region,
                service,
                sha256,
                uriEscapePath
            });
        }
        async presign(e, { signingDate = new Date, expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = {}) {
            let u = await this.credentialProvider();
            this.validateResolvedCredentials(u);
            let h = signingRegion ?? await this.regionProvider();
            let { longDate, shortDate } = this.formatDate(signingDate);
            if (expiresIn > se) {
                return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
            }
            let p = D(shortDate, h, signingService ?? this.service);
            let E = oe(I(e), {
                unhoistableHeaders,
                hoistableHeaders
            });
            if (u.sessionToken) {
                E.query[v] = u.sessionToken;
            }
            E.query[K] = _;
            E.query[j] = `${u.accessKeyId}/${p}`;
            E.query[m] = longDate;
            E.query[V] = expiresIn.toString(10);
            let O = T(E, unsignableHeaders, signableHeaders);
            E.query[Q] = this.getCanonicalHeaderList(O);
            E.query[U] = await this.getSignature(longDate, p, this.getSigningKey(u, h, shortDate, signingService), this.createCanonicalRequest(E, O, await H(e, this.sha256)));
            return E;
        }
        async sign(e, t) {
            if (typeof e === "string") {
                return this.signString(e, t);
            } else if (e.headers && e.payload) {
                return this.signEvent(e, t);
            } else if (e.message) {
                return this.signMessage(e, t);
            } else {
                return this.signRequest(e, t);
            }
        }
        async signEvent({ headers, payload }, { signingDate = new Date, priorSignature, signingRegion, signingService }) {
            let signingRegion_1 = signingRegion ?? await this.regionProvider();
            let { shortDate, longDate } = this.formatDate(signingDate);
            let A = D(shortDate, signingRegion_1, signingService ?? this.service);
            let u = await H({
                headers: {},
                body: payload
            }, this.sha256);
            let h = new this.sha256;
            h.update(headers);
            let l = f.toHex(await h.digest());
            let g = [
                J,
                longDate,
                A,
                priorSignature,
                l,
                u
            ].join(`
`);
            return this.signString(g, {
                signingDate,
                signingRegion: signingRegion_1,
                signingService
            });
        }
        async signMessage(e, { signingDate = new Date, signingRegion, signingService }) {
            return this.signEvent({
                headers: this.headerFormatter.format(e.message.headers),
                payload: e.message.body
            }, {
                signingDate,
                signingRegion,
                signingService,
                priorSignature: e.priorSignature
            }).then((signature)=>({
                    message: e.message,
                    signature
                }));
        }
        async signString(e, { signingDate = new Date, signingRegion, signingService } = {}) {
            let n = await this.credentialProvider();
            this.validateResolvedCredentials(n);
            let a = signingRegion ?? await this.regionProvider();
            let { shortDate } = this.formatDate(signingDate);
            let i = new this.sha256(await this.getSigningKey(n, a, shortDate, signingService));
            i.update(d.toUint8Array(e));
            return f.toHex(await i.digest());
        }
        async signRequest(e, { signingDate = new Date, signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
            let o = await this.credentialProvider();
            this.validateResolvedCredentials(o);
            let i = signingRegion ?? await this.regionProvider();
            let c = I(e);
            let { longDate, shortDate } = this.formatDate(signingDate);
            let h = D(shortDate, i, signingService ?? this.service);
            c.headers[P] = longDate;
            if (o.sessionToken) {
                c.headers[X] = o.sessionToken;
            }
            let l = await H(c, this.sha256);
            if (!ae(S, c.headers) && this.applyChecksum) {
                c.headers[S] = l;
            }
            let g = T(c, unsignableHeaders, signableHeaders);
            let p = await this.getSignature(longDate, h, this.getSigningKey(o, i, shortDate, signingService), this.createCanonicalRequest(c, g, l));
            c.headers[x] = `${_} Credential=${o.accessKeyId}/${h}, SignedHeaders=${this.getCanonicalHeaderList(g)}, Signature=${p}`;
            return c;
        }
        async getSignature(e, t, r, s) {
            let n = await this.createStringToSign(e, t, s, _);
            let a = new this.sha256(await r);
            a.update(d.toUint8Array(n));
            return f.toHex(await a.digest());
        }
        getSigningKey(e, t, r, s) {
            return re(this.sha256, e, r, t, s || this.service);
        }
    }
    const pe = {
        SignatureV4a: null
    };
    Re.ALGORITHM_IDENTIFIER = _;
    Re.ALGORITHM_IDENTIFIER_V4A = fe;
    Re.ALGORITHM_QUERY_PARAM = K;
    Re.ALWAYS_UNSIGNABLE_HEADERS = F;
    Re.AMZ_DATE_HEADER = P;
    Re.AMZ_DATE_QUERY_PARAM = m;
    Re.AUTH_HEADER = x;
    Re.CREDENTIAL_QUERY_PARAM = j;
    Re.DATE_HEADER = q;
    Re.EVENT_ALGORITHM_IDENTIFIER = J;
    Re.EXPIRES_QUERY_PARAM = V;
    Re.GENERATED_HEADERS = z;
    Re.HOST_HEADER = Ee;
    Re.KEY_TYPE_IDENTIFIER = N;
    Re.MAX_CACHE_SIZE = te;
    Re.MAX_PRESIGNED_TTL = se;
    Re.PROXY_HEADER_PATTERN = W;
    Re.REGION_SET_PARAM = Ae;
    Re.SEC_HEADER_PATTERN = Z;
    Re.SHA256_HEADER = S;
    Re.SIGNATURE_HEADER = B;
    Re.SIGNATURE_QUERY_PARAM = U;
    Re.SIGNED_HEADERS_QUERY_PARAM = Q;
    Re.SignatureV4 = ce;
    Re.SignatureV4Base = L;
    Re.TOKEN_HEADER = X;
    Re.TOKEN_QUERY_PARAM = v;
    Re.UNSIGNABLE_PATTERNS = he;
    Re.UNSIGNED_PAYLOAD = ee;
    Re.clearCredentialCache = le;
    Re.createScope = D;
    Re.getCanonicalHeaders = T;
    Re.getCanonicalQuery = ie;
    Re.getPayloadHash = H;
    Re.getSigningKey = re;
    Re.hasHeader = ae;
    Re.moveHeadersToQuery = oe;
    Re.prepareRequest = I;
    Re.signatureV4aContainer = pe;
});
