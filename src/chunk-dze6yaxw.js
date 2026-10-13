import { jm, cTo } from "/$bunfs/root/chunk-55x53sfe.js";
import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const jAo = C(function(N) {
    const G = (e)=>typeof ArrayBuffer === "function" && e instanceof ArrayBuffer || Object.prototype.toString.call(e) === "[object ArrayBuffer]";
    N.isArrayBuffer = G;
});
const pDt = C(function(X) {
    const z = jAo();
    const g = Le("buffer");
    const Q = (e, r = 0, t = e.byteLength - r)=>{
        if (!z.isArrayBuffer(e)) {
            throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`);
        }
        return g.Buffer.from(e, r, t);
    };
    const V = (e, r)=>{
        if (typeof e !== "string") {
            throw TypeError(`The "input" argument must be of type string. Received type ${typeof e} (${e})`);
        }
        if (r) {
            return g.Buffer.from(e, r);
        }
        return g.Buffer.from(e);
    };
    X.fromArrayBuffer = Q;
    X.fromString = V;
});
const Qk = C(function(ee) {
    const P = pDt();
    const R = (e)=>{
        let r = P.fromString(e, "utf8");
        return new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    };
    const K = (e)=>{
        if (typeof e === "string") {
            return R(e);
        }
        if (ArrayBuffer.isView(e)) {
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        }
        return new Uint8Array(e);
    };
    const W = (e)=>{
        if (typeof e === "string") {
            return e;
        }
        if (typeof e !== "object" || typeof e.byteOffset !== "number" || typeof e.byteLength !== "number") {
            throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
        }
        return P.fromArrayBuffer(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
    };
    ee.fromUtf8 = R;
    ee.toUint8Array = K;
    ee.toUtf8 = W;
});
const O = C(function(U) {
    Object.defineProperty(U, "__esModule", {
        value: true
    });
    U.fromBase64 = undefined;
    const T = pDt();
    const ne = /^[A-Za-z0-9+/]*={0,2}$/;
    const fe = (e)=>{
        if (e.length * 3 % 4 !== 0) {
            throw TypeError("Incorrect padding on base64 string.");
        }
        if (!ne.exec(e)) {
            throw TypeError("Invalid base64 string.");
        }
        let r = T.fromString(e, "base64");
        return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    };
    U.fromBase64 = fe;
});
const j = C(function(_) {
    Object.defineProperty(_, "__esModule", {
        value: true
    });
    _.toBase64 = undefined;
    const q = pDt();
    const L = Qk();
    const se = (e)=>{
        let r;
        if (typeof e === "string") {
            r = L.fromUtf8(e);
        } else {
            r = e;
        }
        if (typeof r !== "object" || typeof r.byteOffset !== "number" || typeof r.byteLength !== "number") {
            throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
        }
        return q.fromArrayBuffer(r.buffer, r.byteOffset, r.byteLength).toString("base64");
    };
    _.toBase64 = se;
});
const $R = C(function(h) {
    const H = O();
    const k = j();
    Object.keys(H).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(h, e)) {
            Object.defineProperty(h, e, {
                enumerable: true,
                get: function() {
                    return H[e];
                }
            });
        }
    });
    Object.keys(k).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(h, e)) {
            Object.defineProperty(h, e, {
                enumerable: true,
                get: function() {
                    return k[e];
                }
            });
        }
    });
});
const owe = C(function(he) {
    const I = jm();
    const ie = cTo();
    const ae = $R();
    function D(e, r) {
        return new Request(e, r);
    }
    function ue(e = 0) {
        return new Promise((resolve, reject)=>{
            if (e) {
                setTimeout(()=>{
                    let o = Error(`Request did not complete within ${e} ms`);
                    o.name = "TimeoutError";
                    reject(o);
                }, e);
            }
        });
    }
    const p = {
        supported: undefined
    };
    class w {
        config;
        configProvider;
        static create(e) {
            if (typeof e?.handle === "function") {
                return e;
            }
            return new w(e);
        }
        constructor(e){
            if (typeof e === "function") {
                this.configProvider = e().then((r)=>r || {});
            } else {
                this.config = e ?? {};
                this.configProvider = Promise.resolve(this.config);
            }
            if (p.supported === undefined) {
                p.supported = Boolean(typeof Request !== "undefined" && "keepalive" in D("https://[::1]"));
            }
        }
        destroy() {}
        async handle(e, { abortSignal, requestTimeout } = {}) {
            if (!this.config) {
                this.config = await this.configProvider;
            }
            let o = requestTimeout ?? this.config.requestTimeout;
            let f = this.config.keepAlive === true;
            let credentials = this.config.credentials;
            if (abortSignal?.aborted) {
                let n = Error("Request aborted");
                n.name = "AbortError";
                return Promise.reject(n);
            }
            let e_path = e.path;
            let a = ie.buildQueryString(e.query || {});
            if (a) {
                e_path += `?${a}`;
            }
            if (e.fragment) {
                e_path += `#${e.fragment}`;
            }
            let c = "";
            if (e.username != null || e.password != null) {
                let n = e.username ?? "";
                let l = e.password ?? "";
                c = `${n}:${l}@`;
            }
            let { port, method } = e;
            let M = `${e.protocol}//${c}${e.hostname}${port ? `:${port}` : ""}${e_path}`;
            let body = method === "GET" || method === "HEAD" ? undefined : e.body;
            let y = {
                body,
                headers: new Headers(e.headers),
                method,
                credentials
            };
            if (this.config?.cache) {
                y.cache = this.config.cache;
            }
            if (body) {
                y.duplex = "half";
            }
            if (typeof AbortController !== "undefined") {
                y.signal = abortSignal;
            }
            if (p.supported) {
                y.keepalive = f;
            }
            if (typeof this.config.requestInit === "function") {
                Object.assign(y, this.config.requestInit(e));
            }
            let E = ()=>{};
            let F = D(M, y);
            let v = [
                fetch(F).then((n)=>{
                    let n_headers = n.headers;
                    let headers = {};
                    for (let b of n_headers.entries()){
                        headers[b[0]] = b[1];
                    }
                    if (n.body == null) {
                        return n.blob().then((body)=>({
                                response: new I.HttpResponse({
                                    headers,
                                    reason: n.statusText,
                                    statusCode: n.status,
                                    body
                                })
                            }));
                    }
                    return {
                        response: new I.HttpResponse({
                            headers,
                            reason: n.statusText,
                            statusCode: n.status,
                            body: n.body
                        })
                    };
                }),
                ue(o)
            ];
            if (abortSignal) {
                v.push(new Promise((resolve, reject)=>{
                    let u = ()=>{
                        let d = Error("Request aborted");
                        d.name = "AbortError";
                        reject(d);
                    };
                    if (typeof abortSignal.addEventListener === "function") {
                        let d = abortSignal;
                        d.addEventListener("abort", u, {
                            once: true
                        });
                        E = ()=>d.removeEventListener("abort", u);
                    } else {
                        abortSignal.onabort = u;
                    }
                }));
            }
            return Promise.race(v).finally(E);
        }
        updateHttpClientConfig(e, r) {
            this.config = undefined;
            this.configProvider = this.configProvider.then((t)=>{
                t[e] = r;
                return t;
            });
        }
        httpHandlerConfigs() {
            return this.config ?? {};
        }
    }
    const ce = async (e)=>{
        if (typeof Blob === "function" && e instanceof Blob || e.constructor?.name === "Blob") {
            if (Blob.prototype.arrayBuffer !== undefined) {
                return new Uint8Array(await e.arrayBuffer());
            }
            return ye(e);
        }
        return de(e);
    };
    async function ye(e) {
        let r = await le(e);
        let t = ae.fromBase64(r);
        return new Uint8Array(t);
    }
    async function de(e) {
        let r = [];
        let t = e.getReader();
        let o = false;
        let f = 0;
        while(!o){
            let { done, value } = await t.read();
            if (value) {
                r.push(value);
                f += value.length;
            }
            o = done;
        }
        let i = new Uint8Array(f);
        let s = 0;
        for (let a of r){
            i.set(a, s);
            s += a.length;
        }
        return i;
    }
    function le(e) {
        return new Promise((resolve, reject)=>{
            let o = new FileReader;
            o.onloadend = ()=>{
                if (o.readyState !== 2) {
                    return reject(Error("Reader aborted too early"));
                }
                let f = o.result ?? "";
                let i = f.indexOf(",");
                let s = i > -1 ? i + 1 : f.length;
                resolve(f.substring(s));
            };
            o.onabort = ()=>reject(Error("Read aborted"));
            o.onerror = ()=>reject(o.error);
            o.readAsDataURL(e);
        });
    }
    he.FetchHttpHandler = w;
    he.keepAliveSupport = p;
    he.streamCollector = ce;
});
export { jAo, pDt, Qk, $R, owe };
