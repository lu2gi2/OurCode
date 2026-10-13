import { Ne, vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B, Kr, Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { po, ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { f0t } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { A5e } from "/$bunfs/root/chunk-xbsy70c7.js";
import { DP } from "/$bunfs/root/chunk-z0brrd3r.js";
import { Xk } from "/$bunfs/root/chunk-sfqgx6er.js";
import { bC } from "/$bunfs/root/chunk-1qq5kpcj.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Se, C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
import { createPrivateKey, X509Certificate } from "crypto";
import { Agent } from "https";
import { isDeepStrictEqual } from "util";
import { isIP } from "net";
import { homedir } from "os";
import { domainToASCII } from "url";
const qxe = C(function(yt) {
    yt.HttpAuthLocation = undefined;
    ((e)=>{
        e.HEADER = "header";
        e.QUERY = "query";
    })(yt.HttpAuthLocation || (yt.HttpAuthLocation = {}));
    yt.HttpApiKeyAuthLocation = undefined;
    ((e)=>{
        e.HEADER = "header";
        e.QUERY = "query";
    })(yt.HttpApiKeyAuthLocation || (yt.HttpApiKeyAuthLocation = {}));
    yt.EndpointURLScheme = undefined;
    ((e)=>{
        e.HTTP = "http";
        e.HTTPS = "https";
    })(yt.EndpointURLScheme || (yt.EndpointURLScheme = {}));
    yt.AlgorithmId = undefined;
    ((e)=>{
        e.MD5 = "md5";
        e.CRC32 = "crc32";
        e.CRC32C = "crc32c";
        e.SHA1 = "sha1";
        e.SHA256 = "sha256";
    })(yt.AlgorithmId || (yt.AlgorithmId = {}));
    const dt = (e)=>{
        let n = [];
        if (e.sha256 !== undefined) {
            n.push({
                algorithmId: ()=>yt.AlgorithmId.SHA256,
                checksumConstructor: ()=>e.sha256
            });
        }
        if (e.md5 != null) {
            n.push({
                algorithmId: ()=>yt.AlgorithmId.MD5,
                checksumConstructor: ()=>e.md5
            });
        }
        return {
            addChecksumAlgorithm (r) {
                n.push(r);
            },
            checksumAlgorithms () {
                return n;
            }
        };
    };
    const pt = (e)=>{
        let n = {};
        e.checksumAlgorithms().forEach((r)=>{
            n[r.algorithmId()] = r.checksumConstructor();
        });
        return n;
    };
    const ht = (e)=>dt(e);
    const gt = (e)=>pt(e);
    yt.FieldPosition = undefined;
    ((e)=>{
        e[e.HEADER = 0] = "HEADER";
        e[e.TRAILER = 1] = "TRAILER";
    })(yt.FieldPosition || (yt.FieldPosition = {}));
    const mt = "__smithy_context";
    yt.IniSectionType = undefined;
    ((e)=>{
        e.PROFILE = "profile";
        e.SSO_SESSION = "sso-session";
        e.SERVICES = "services";
    })(yt.IniSectionType || (yt.IniSectionType = {}));
    yt.RequestHandlerProtocol = undefined;
    ((e)=>{
        e.HTTP_0_9 = "http/0.9";
        e.HTTP_1_0 = "http/1.0";
        e.TDS_8_0 = "tds/8.0";
    })(yt.RequestHandlerProtocol || (yt.RequestHandlerProtocol = {}));
    yt.SMITHY_CONTEXT_KEY = mt;
    yt.getDefaultClientConfiguration = ht;
    yt.resolveDefaultRuntimeConfig = gt;
});
const jm = C(function(vt) {
    const Tt = qxe();
    const St = (e)=>({
            setHttpHandler (n) {
                e.httpHandler = n;
            },
            httpHandler () {
                return e.httpHandler;
            },
            updateHttpClientConfig (n, r) {
                e.httpHandler?.updateHttpClientConfig(n, r);
            },
            httpHandlerConfigs () {
                return e.httpHandler.httpHandlerConfigs();
            }
        });
    const _t = (e)=>({
            httpHandler: e.httpHandler()
        });
    class Te {
        name;
        kind;
        values;
        constructor({ name, kind = Tt.FieldPosition.HEADER, values = [] }){
            this.name = name;
            this.kind = kind;
            this.values = values;
        }
        add(e) {
            this.values.push(e);
        }
        set(e) {
            this.values = e;
        }
        remove(e) {
            this.values = this.values.filter((n)=>n !== e);
        }
        toString() {
            return this.values.map((e)=>{
                if (e.includes(",") || e.includes(" ")) {
                    return `"${e}"`;
                }
                return e;
            }).join(", ");
        }
        get() {
            return this.values;
        }
    }
    class _e {
        entries = {};
        encoding;
        constructor({ fields = [], encoding = "utf-8" }){
            fields.forEach(this.setField.bind(this));
            this.encoding = encoding;
        }
        setField(e) {
            this.entries[e.name.toLowerCase()] = e;
        }
        getField(e) {
            return this.entries[e.toLowerCase()];
        }
        removeField(e) {
            delete this.entries[e.toLowerCase()];
        }
        getByType(e) {
            return Object.values(this.entries).filter((n)=>n.kind === e);
        }
    }
    class N {
        method;
        protocol;
        hostname;
        port;
        path;
        query;
        headers;
        username;
        password;
        fragment;
        body;
        constructor(e){
            this.method = e.method || "GET";
            this.hostname = e.hostname || "localhost";
            this.port = e.port;
            this.query = e.query || {};
            this.headers = e.headers || {};
            this.body = e.body;
            this.protocol = e.protocol ? e.protocol.slice(-1) !== ":" ? `${e.protocol}:` : e.protocol : "https:";
            this.path = e.path ? e.path.charAt(0) !== "/" ? `/${e.path}` : e.path : "/";
            this.username = e.username;
            this.password = e.password;
            this.fragment = e.fragment;
        }
        static clone(e) {
            let n = new N({
                ...e,
                headers: {
                    ...e.headers
                }
            });
            if (n.query) {
                n.query = Pt(n.query);
            }
            return n;
        }
        static isInstance(e) {
            if (!e) {
                return false;
            }
            let n = e;
            return "method" in n && "protocol" in n && "hostname" in n && "path" in n && typeof n.query === "object" && typeof n.headers === "object";
        }
        clone() {
            return N.clone(this);
        }
    }
    function Pt(query) {
        return Object.keys(query).reduce((acc, key)=>{
            let o = query[key];
            return {
                ...acc,
                [key]: Array.isArray(o) ? [
                    ...o
                ] : o
            };
        }, {});
    }
    class Pe {
        statusCode;
        reason;
        headers;
        body;
        constructor(e){
            this.statusCode = e.statusCode;
            this.reason = e.reason;
            this.headers = e.headers || {};
            this.body = e.body;
        }
        static isInstance(e) {
            if (!e) {
                return false;
            }
            let n = e;
            return typeof n.statusCode === "number" && typeof n.headers === "object";
        }
    }
    function Lt(e) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(e);
    }
    vt.Field = Te;
    vt.Fields = _e;
    vt.HttpRequest = N;
    vt.HttpResponse = Pe;
    vt.getHttpHandlerExtensionConfiguration = St;
    vt.isValidHostname = Lt;
    vt.resolveHttpHandlerRuntimeConfig = _t;
});
const lTo = C(function(Ft) {
    const ve = (e)=>encodeURIComponent(e).replace(/[!'()*]/g, Dt);
    var Dt = (e)=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`;
    const Ut = (e)=>e.split("/").map(ve).join("/");
    Ft.escapeUri = ve;
    Ft.escapeUriPath = Ut;
});
const cTo = C(function(Bt) {
    const ne = lTo();
    function Mt(e) {
        let n = [];
        for (let r of Object.keys(e).sort()){
            let o = e[r];
            r = ne.escapeUri(r);
            if (Array.isArray(o)) {
                for(let s = 0, i = o.length; s < i; s++){
                    n.push(`${r}=${ne.escapeUri(o[s])}`);
                }
            } else {
                let s = r;
                if (o || typeof o === "string") {
                    s += `=${ne.escapeUri(o)}`;
                }
                n.push(s);
            }
        }
        return n.join("&");
    }
    Bt.buildQueryString = Mt;
});
const kH = C(function(en) {
    const He = jm();
    const Oe = cTo();
    const M = Le("http");
    const K = Le("https");
    const ke = Le("stream");
    const re = Le("http2");
    const Kt = [
        "ECONNRESET",
        "EPIPE",
        "ETIMEDOUT"
    ];
    const Ie = (e)=>{
        let n = {};
        for (let r of Object.keys(e)){
            let o = e[r];
            n[r] = Array.isArray(o) ? o.join(",") : o;
        }
        return n;
    };
    const E = {
        setTimeout: (e, n)=>setTimeout(e, n),
        clearTimeout: (e)=>clearTimeout(e)
    };
    const be = 1000;
    const jt = (e, n, r = 0)=>{
        if (!r) {
            return -1;
        }
        let o = (s)=>{
            let i = E.setTimeout(()=>{
                e.destroy();
                n(Object.assign(Error(`@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${r} ms.`), {
                    name: "TimeoutError"
                }));
            }, r - s);
            let c = (u)=>{
                if (u?.connecting) {
                    u.on("connect", ()=>{
                        E.clearTimeout(i);
                    });
                } else {
                    E.clearTimeout(i);
                }
            };
            if (e.socket) {
                c(e.socket);
            } else {
                e.on("socket", c);
            }
        };
        if (r < 2000) {
            o(0);
            return 0;
        }
        return E.setTimeout(o.bind(null, be), be);
    };
    const Yt = (e, n, r = 0, throwOnRequestTimeout, s)=>{
        if (r) {
            return E.setTimeout(()=>{
                let i = `@smithy/node-http-handler - [${throwOnRequestTimeout ? "ERROR" : "WARN"}] a request has exceeded the configured ${r} ms requestTimeout.`;
                if (throwOnRequestTimeout) {
                    let c = Object.assign(Error(i), {
                        name: "TimeoutError",
                        code: "ETIMEDOUT"
                    });
                    e.destroy(c);
                    n(c);
                } else {
                    i += " Init client requestHandler with throwOnRequestTimeout=true to turn this into an error.";
                    s?.warn?.(i);
                }
            }, r);
        }
        return -1;
    };
    const Wt = 3000;
    const Xt = (e, { keepAlive, keepAliveMsecs }, o = Wt)=>{
        if (keepAlive !== true) {
            return -1;
        }
        let s = ()=>{
            if (e.socket) {
                e.socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
            } else {
                e.on("socket", (i)=>{
                    i.setKeepAlive(keepAlive, keepAliveMsecs || 0);
                });
            }
        };
        if (o === 0) {
            s();
            return 0;
        }
        return E.setTimeout(s, o);
    };
    const Re = 3000;
    const zt = (e, n, r = 0)=>{
        let o = (s)=>{
            let i = r - s;
            let c = ()=>{
                e.destroy();
                n(Object.assign(Error(`@smithy/node-http-handler - the request socket timed out after ${r} ms of inactivity (configured by client requestHandler).`), {
                    name: "TimeoutError"
                }));
            };
            if (e.socket) {
                e.socket.setTimeout(i, c);
                e.on("close", ()=>e.socket?.removeListener("timeout", c));
            } else {
                e.setTimeout(i, c);
            }
        };
        if (r > 0 && r < 6000) {
            o(0);
            return 0;
        }
        return E.setTimeout(o.bind(null, r === 0 ? 0 : Re), Re);
    };
    const we = 6000;
    async function De(e, n, r = we, o = false) {
        let s = n.headers ?? {};
        let i = s.Expect || s.expect;
        let c = -1;
        let u = true;
        if (!o && i === "100-continue") {
            u = await Promise.race([
                new Promise((resolve)=>{
                    c = Number(E.setTimeout(()=>resolve(true), Math.max(we, r)));
                }),
                new Promise((resolve)=>{
                    e.on("continue", ()=>{
                        E.clearTimeout(c);
                        resolve(true);
                    });
                    e.on("response", ()=>{
                        E.clearTimeout(c);
                        resolve(false);
                    });
                    e.on("error", ()=>{
                        E.clearTimeout(c);
                        resolve(false);
                    });
                })
            ]);
        }
        if (u) {
            Vt(e, n.body);
        }
    }
    function Vt(e, body) {
        if (body instanceof ke.Readable) {
            body.pipe(e);
            return;
        }
        if (body) {
            if (Buffer.isBuffer(body) || typeof body === "string") {
                e.end(body);
                return;
            }
            let r = body;
            if (typeof r === "object" && r.buffer && typeof r.byteOffset === "number" && typeof r.byteLength === "number") {
                e.end(Buffer.from(r.buffer, r.byteOffset, r.byteLength));
                return;
            }
            e.end(Buffer.from(body));
            return;
        }
        e.end();
    }
    const Gt = 0;
    class j {
        config;
        configProvider;
        socketWarningTimestamp = 0;
        externalAgent = false;
        metadata = {
            handlerProtocol: "http/1.1"
        };
        static create(e) {
            if (typeof e?.handle === "function") {
                return e;
            }
            return new j(e);
        }
        static checkSocketUsage({ sockets, requests, maxSockets }, n, r = console) {
            if (typeof maxSockets !== "number" || maxSockets === Infinity) {
                return n;
            }
            let c = 15000;
            if (Date.now() - c < n) {
                return n;
            }
            if (sockets && requests) {
                for(let u in sockets){
                    let l = sockets[u]?.length ?? 0;
                    let d = requests[u]?.length ?? 0;
                    if (l >= maxSockets && d >= 2 * maxSockets) {
                        r?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${l} and ${d} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`);
                        return Date.now();
                    }
                }
            }
            return n;
        }
        constructor(e){
            this.configProvider = new Promise((resolve, reject)=>{
                if (typeof e === "function") {
                    e().then((o)=>{
                        resolve(this.resolveDefaultConfig(o));
                    }).catch(reject);
                } else {
                    resolve(this.resolveDefaultConfig(e));
                }
            });
        }
        resolveDefaultConfig(e) {
            let { requestTimeout, connectionTimeout, socketTimeout, socketAcquisitionWarningTimeout, httpAgent, httpsAgent, throwOnRequestTimeout } = e || {};
            let l = true;
            let d = 50;
            return {
                connectionTimeout,
                requestTimeout,
                socketTimeout,
                socketAcquisitionWarningTimeout,
                throwOnRequestTimeout,
                httpAgent: (()=>{
                    if (httpAgent instanceof M.Agent || typeof httpAgent?.destroy === "function") {
                        this.externalAgent = true;
                        return httpAgent;
                    }
                    return new M.Agent({
                        keepAlive: true,
                        maxSockets: 50,
                        ...httpAgent
                    });
                })(),
                httpsAgent: (()=>{
                    if (httpsAgent instanceof K.Agent || typeof httpsAgent?.destroy === "function") {
                        this.externalAgent = true;
                        return httpsAgent;
                    }
                    return new K.Agent({
                        keepAlive: true,
                        maxSockets: 50,
                        ...httpsAgent
                    });
                })(),
                logger: console
            };
        }
        destroy() {
            this.config?.httpAgent?.destroy();
            this.config?.httpsAgent?.destroy();
        }
        async handle(e, { abortSignal, requestTimeout } = {}) {
            if (!this.config) {
                this.config = await this.configProvider;
            }
            return new Promise((resolve, reject)=>{
                let config = this.config;
                let c;
                let u = [];
                let l = async (p)=>{
                    await c;
                    u.forEach(E.clearTimeout);
                    resolve(p);
                };
                let d = async (p)=>{
                    await c;
                    u.forEach(E.clearTimeout);
                    reject(p);
                };
                if (abortSignal?.aborted) {
                    let p = Error("Request aborted");
                    p.name = "AbortError";
                    d(p);
                    return;
                }
                let h = e.protocol === "https:";
                let S = e.headers ?? {};
                let _ = (S.Expect ?? S.expect) === "100-continue";
                let T = h ? config.httpsAgent : config.httpAgent;
                if (_ && !this.externalAgent) {
                    T = new (h ? K.Agent : M.Agent)({
                        keepAlive: false,
                        maxSockets: Infinity
                    });
                }
                u.push(E.setTimeout(()=>{
                    this.socketWarningTimestamp = j.checkSocketUsage(T, this.socketWarningTimestamp, config.logger);
                }, config.socketAcquisitionWarningTimeout ?? (config.requestTimeout ?? 2000) + (config.connectionTimeout ?? 1000)));
                let b = Oe.buildQueryString(e.query || {});
                let auth;
                if (e.username != null || e.password != null) {
                    let p = e.username ?? "";
                    let y = e.password ?? "";
                    auth = `${p}:${y}`;
                }
                let e_path = e.path;
                if (b) {
                    e_path += `?${b}`;
                }
                if (e.fragment) {
                    e_path += `#${e.fragment}`;
                }
                let host = e.hostname ?? "";
                if (host[0] === "[" && host.endsWith("]")) {
                    host = e.hostname.slice(1, -1);
                } else {
                    host = e.hostname;
                }
                let I = {
                    headers: e.headers,
                    host,
                    method: e.method,
                    path: e_path,
                    port: e.port,
                    agent: T,
                    auth
                };
                let x = (h ? K.request : M.request)(I, (p)=>{
                    let y = new He.HttpResponse({
                        statusCode: p.statusCode || -1,
                        reason: p.statusMessage,
                        headers: Ie(p.headers),
                        body: p
                    });
                    l({
                        response: y
                    });
                });
                x.on("error", (p)=>{
                    if (Kt.includes(p.code)) {
                        d(Object.assign(p, {
                            name: "TimeoutError"
                        }));
                    } else {
                        d(p);
                    }
                });
                if (abortSignal) {
                    let p = ()=>{
                        x.destroy();
                        let y = Error("Request aborted");
                        y.name = "AbortError";
                        d(y);
                    };
                    if (typeof abortSignal.addEventListener === "function") {
                        let y = abortSignal;
                        y.addEventListener("abort", p, {
                            once: true
                        });
                        x.once("close", ()=>y.removeEventListener("abort", p));
                    } else {
                        abortSignal.onabort = p;
                    }
                }
                let v = requestTimeout ?? config.requestTimeout;
                u.push(jt(x, d, config.connectionTimeout));
                u.push(Yt(x, d, v, config.throwOnRequestTimeout, config.logger ?? console));
                u.push(zt(x, d, config.socketTimeout));
                let I_agent = I.agent;
                if (typeof I_agent === "object" && "keepAlive" in I_agent) {
                    u.push(Xt(x, {
                        keepAlive: I_agent.keepAlive,
                        keepAliveMsecs: I_agent.keepAliveMsecs
                    }));
                }
                c = De(x, e, v, this.externalAgent).catch((p)=>{
                    u.forEach(E.clearTimeout);
                    return reject(p);
                });
            });
        }
        updateHttpClientConfig(e, n) {
            this.config = undefined;
            this.configProvider = this.configProvider.then((r)=>({
                    ...r,
                    [e]: n
                }));
        }
        httpHandlerConfigs() {
            return this.config ?? {};
        }
    }
    class Ue {
        sessions = [];
        constructor(e){
            this.sessions = e ?? [];
        }
        poll() {
            if (this.sessions.length > 0) {
                return this.sessions.shift();
            }
        }
        offerLast(e) {
            this.sessions.push(e);
        }
        contains(e) {
            return this.sessions.includes(e);
        }
        remove(e) {
            this.sessions = this.sessions.filter((n)=>n !== e);
        }
        [Symbol.iterator]() {
            return this.sessions[Symbol.iterator]();
        }
        destroy(e) {
            for (let n of this.sessions){
                if (n === e) {
                    if (!n.destroyed) {
                        n.destroy();
                    }
                }
            }
        }
    }
    class Fe {
        constructor(e){
            this.config = e;
            if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
                throw RangeError("maxConcurrency must be greater than zero.");
            }
        }
        config;
        sessionCache = new Map;
        lease(e, n) {
            let r = this.getUrlString(e);
            let o = this.sessionCache.get(r);
            if (o) {
                let u = o.poll();
                if (u && !this.config.disableConcurrency) {
                    return u;
                }
            }
            let s = re.connect(r);
            if (this.config.maxConcurrency) {
                s.settings({
                    maxConcurrentStreams: this.config.maxConcurrency
                }, (u)=>{
                    if (u) {
                        throw Error(`Fail to set maxConcurrentStreams to ${this.config.maxConcurrency}when creating new session for ${e.destination.toString()}`);
                    }
                });
            }
            s.unref();
            let i = ()=>{
                s.destroy();
                this.deleteSession(r, s);
            };
            s.on("goaway", i);
            s.on("error", i);
            s.on("frameError", i);
            s.on("close", ()=>this.deleteSession(r, s));
            if (n.requestTimeout) {
                s.setTimeout(n.requestTimeout, i);
            }
            let c = this.sessionCache.get(r) || new Ue;
            c.offerLast(s);
            this.sessionCache.set(r, c);
            return s;
        }
        deleteSession(e, n) {
            let r = this.sessionCache.get(e);
            if (!r) {
                return;
            }
            if (!r.contains(n)) {
                return;
            }
            r.remove(n);
            this.sessionCache.set(e, r);
        }
        release(e, n) {
            let r = this.getUrlString(e);
            this.sessionCache.get(r)?.offerLast(n);
        }
        destroy() {
            for (let [e, n] of this.sessionCache){
                for (let r of n){
                    if (!r.destroyed) {
                        r.destroy();
                    }
                    n.remove(r);
                }
                this.sessionCache.delete(e);
            }
        }
        setMaxConcurrentStreams(e) {
            if (e && e <= 0) {
                throw RangeError("maxConcurrentStreams must be greater than zero.");
            }
            this.config.maxConcurrency = e;
        }
        setDisableConcurrentStreams(e) {
            this.config.disableConcurrency = e;
        }
        getUrlString(e) {
            return e.destination.toString();
        }
    }
    class oe {
        config;
        configProvider;
        metadata = {
            handlerProtocol: "h2"
        };
        connectionManager = new Fe({});
        static create(e) {
            if (typeof e?.handle === "function") {
                return e;
            }
            return new oe(e);
        }
        constructor(e){
            this.configProvider = new Promise((resolve, reject)=>{
                if (typeof e === "function") {
                    e().then((o)=>{
                        resolve(o || {});
                    }).catch(reject);
                } else {
                    resolve(e || {});
                }
            });
        }
        destroy() {
            this.connectionManager.destroy();
        }
        async handle(e, { abortSignal, requestTimeout } = {}) {
            if (!this.config) {
                this.config = await this.configProvider;
                this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false);
                if (this.config.maxConcurrentStreams) {
                    this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
                }
            }
            let { requestTimeout: requestTimeout_1, disableConcurrentStreams } = this.config;
            let i = requestTimeout ?? requestTimeout_1;
            return new Promise((resolve, reject)=>{
                let l = false;
                let d;
                let h = async (A)=>{
                    await d;
                    resolve(A);
                };
                let S = async (A)=>{
                    await d;
                    reject(A);
                };
                if (abortSignal?.aborted) {
                    l = true;
                    let A = Error("Request aborted");
                    A.name = "AbortError";
                    S(A);
                    return;
                }
                let { hostname, method, port, protocol, query } = e;
                let R = "";
                if (e.username != null || e.password != null) {
                    let A = e.username ?? "";
                    let P = e.password ?? "";
                    R = `${A}:${P}@`;
                }
                let I = `${protocol}//${R}${hostname}${port ? `:${port}` : ""}`;
                let le = {
                    destination: new URL(I)
                };
                let x = this.connectionManager.lease(le, {
                    requestTimeout: this.config?.sessionTimeout,
                    disableConcurrentStreams: disableConcurrentStreams || false
                });
                let v = (A)=>{
                    if (disableConcurrentStreams) {
                        this.destroySession(x);
                    }
                    l = true;
                    S(A);
                };
                let H = Oe.buildQueryString(query || {});
                let e_path = e.path;
                if (H) {
                    e_path += `?${H}`;
                }
                if (e.fragment) {
                    e_path += `#${e.fragment}`;
                }
                let y = x.request({
                    ...e.headers,
                    [re.constants.HTTP2_HEADER_PATH]: e_path,
                    [re.constants.HTTP2_HEADER_METHOD]: method
                });
                x.ref();
                y.on("response", (A)=>{
                    let P = new He.HttpResponse({
                        statusCode: A[":status"] || -1,
                        headers: Ie(A),
                        body: y
                    });
                    l = true;
                    h({
                        response: P
                    });
                    if (disableConcurrentStreams) {
                        x.close();
                        this.connectionManager.deleteSession(I, x);
                    }
                });
                if (i) {
                    y.setTimeout(i, ()=>{
                        y.close();
                        let A = Error(`Stream timed out because of no activity for ${i} ms`);
                        A.name = "TimeoutError";
                        v(A);
                    });
                }
                if (abortSignal) {
                    let A = ()=>{
                        y.close();
                        let P = Error("Request aborted");
                        P.name = "AbortError";
                        v(P);
                    };
                    if (typeof abortSignal.addEventListener === "function") {
                        let P = abortSignal;
                        P.addEventListener("abort", A, {
                            once: true
                        });
                        y.once("close", ()=>P.removeEventListener("abort", A));
                    } else {
                        abortSignal.onabort = A;
                    }
                }
                y.on("frameError", (A, P, tt)=>{
                    v(Error(`Frame type id ${A} in stream id ${tt} has failed with code ${P}.`));
                });
                y.on("error", v);
                y.on("aborted", ()=>{
                    v(Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${y.rstCode}.`));
                });
                y.on("close", ()=>{
                    x.unref();
                    if (disableConcurrentStreams) {
                        x.destroy();
                    }
                    if (!l) {
                        v(Error("Unexpected error: http2 request did not get a response"));
                    }
                });
                d = De(y, e, i);
            });
        }
        updateHttpClientConfig(e, n) {
            this.config = undefined;
            this.configProvider = this.configProvider.then((r)=>({
                    ...r,
                    [e]: n
                }));
        }
        httpHandlerConfigs() {
            return this.config ?? {};
        }
        destroySession(e) {
            if (!e.destroyed) {
                e.destroy();
            }
        }
    }
    class $e extends ke.Writable {
        bufferedBytes = [];
        _write(e, n, r) {
            this.bufferedBytes.push(e);
            r();
        }
    }
    const Qt = (e)=>{
        if (Jt(e)) {
            return Zt(e);
        }
        return new Promise((resolve, reject)=>{
            let o = new $e;
            e.pipe(o);
            e.on("error", (s)=>{
                o.end();
                reject(s);
            });
            o.on("error", reject);
            o.on("finish", function() {
                let s = new Uint8Array(Buffer.concat(this.bufferedBytes));
                resolve(s);
            });
        });
    };
    var Jt = (e)=>typeof ReadableStream === "function" && e instanceof ReadableStream;
    async function Zt(e) {
        let n = [];
        let r = e.getReader();
        let o = false;
        let s = 0;
        while(!o){
            let { done, value } = await r.read();
            if (value) {
                n.push(value);
                s += value.length;
            }
            o = done;
        }
        let i = new Uint8Array(s);
        let c = 0;
        for (let u of n){
            i.set(u, c);
            c += u.length;
        }
        return i;
    }
    en.DEFAULT_REQUEST_TIMEOUT = Gt;
    en.NodeHttp2Handler = oe;
    en.NodeHttpHandler = j;
    en.streamCollector = Qt;
});
const fe = [
    "bundled",
    "system"
];
const W = new Set;
function w(e) {
    if (W.has(e)) {
        return false;
    }
    W.add(e);
    return true;
}
class de {
    extraCACerts = null;
    certificates = po(()=>st(this));
}
const nt = new q(()=>new de);
function z() {
    return nt.of(B().host);
}
const mpe = bC(async ()=>{
    let e = z();
    let a_NODE_EXTRA_CA_CERTS = a.NODE_EXTRA_CA_CERTS;
    if (!a_NODE_EXTRA_CA_CERTS) {
        if (e.extraCACerts !== null) {
            e.extraCACerts = null;
            X(e);
            return true;
        }
        return false;
    }
    try {
        let r = await ie().readFile(a_NODE_EXTRA_CA_CERTS, {
            encoding: "utf8"
        });
        if (e.extraCACerts?.path === a_NODE_EXTRA_CA_CERTS && e.extraCACerts.content === r) {
            return false;
        }
        e.extraCACerts = {
            path: a_NODE_EXTRA_CA_CERTS,
            content: r
        };
    } catch (error) {
        t(`CA certs: Failed to read NODE_EXTRA_CA_CERTS file (${a_NODE_EXTRA_CA_CERTS}): ${error}`, {
            level: "error"
        });
        if (w("read_failed")) {
            m("ca_certs_load", "read_failed");
        }
        if (e.extraCACerts === null) {
            return false;
        }
        e.extraCACerts = null;
    }
    X(e);
    return true;
});
function rt() {
    let a_CLAUDE_CODE_CERT_STORE = a.CLAUDE_CODE_CERT_STORE;
    if (a_CLAUDE_CODE_CERT_STORE) {
        let n = [];
        for (let r of a_CLAUDE_CODE_CERT_STORE.split(",")){
            let o = r.trim().toLowerCase();
            if (o === "bundled" || o === "system") {
                if (!n.includes(o)) {
                    n.push(o);
                }
            } else if (o) {
                t(`CA certs: unrecognized CLAUDE_CODE_CERT_STORE source '${o}', ignoring`, {
                    level: "warn"
                });
                if (w("parse_skip")) {
                    f("ca_certs_load", "parse_skip");
                }
            }
        }
        if (n.length === 0 && w("parse_all_invalid")) {
            f("ca_certs_load", "parse_all_invalid");
        }
        if (n.length > 0) {
            return n;
        }
        return fe;
    }
    if (f0t("--use-system-ca") || f0t("--use-openssl-ca")) {
        return [
            "system"
        ];
    }
    return fe;
}
function ot(e) {
    let { X509Certificate } = Le("crypto");
    let r = Date.now();
    let dropped_count = 0;
    let s = e.filter((i)=>{
        try {
            let c = new X509Certificate(i);
            let u = new Date(c.validTo).getTime();
            if (Number.isNaN(u) || u > r) {
                return true;
            }
            dropped_count++;
            return false;
        } catch  {
            return true;
        }
    });
    if (dropped_count > 0) {
        t(`CA certs: Dropped ${dropped_count} expired certificate(s) from system store`);
        if (w("expired_dropped")) {
            f("ca_certs_load", "expired_dropped", {
                dropped_count
            });
        }
    }
    return s;
}
function CN() {
    return z().certificates();
}
function st(e) {
    let n = rt();
    let a_NODE_EXTRA_CA_CERTS = a.NODE_EXTRA_CA_CERTS;
    let store_bundled = n.includes("bundled");
    let store_system = n.includes("system");
    t(`CA certs: stores=${n.join(",")}, extraCertsPath=${a_NODE_EXTRA_CA_CERTS}`);
    let i = Le("tls");
    let i_getCACertificates = i.getCACertificates;
    if (!store_bundled && store_system && !i_getCACertificates) {
        t("CA certs: stores=system but system CA API unavailable, deferring to runtime");
        if (w("system_api_unavailable")) {
            f("ca_certs_load", "system_api_unavailable");
        }
        return;
    }
    let u = [];
    if (store_bundled) {
        u.push(...i.rootCertificates);
        t(`CA certs: Loaded ${i.rootCertificates.length} bundled root certificates`);
    }
    if (store_system) {
        try {
            let d = i_getCACertificates?.("system");
            if (d && d.length > 0) {
                let h = ot(d);
                u.push(...h);
                t(`CA certs: Loaded ${h.length} system CA certificates`);
            } else {
                t(`CA certs: system store ${i_getCACertificates ? "returned empty" : "unavailable"}`);
                if (!store_bundled) {
                    u.push(...i.rootCertificates);
                }
            }
        } catch (error) {
            t(`CA certs: Failed to load system CA certificates: ${error}`, {
                level: "error"
            });
            if (w("system_store_failed")) {
                f("ca_certs_load", "system_store_failed");
            }
            if (!store_bundled) {
                u.push(...i.rootCertificates);
            }
        }
    }
    if (a_NODE_EXTRA_CA_CERTS) {
        if (e.extraCACerts?.path !== a_NODE_EXTRA_CA_CERTS) {
            try {
                let content = ie().readFileSync(a_NODE_EXTRA_CA_CERTS, {
                    encoding: "utf8"
                });
                e.extraCACerts = {
                    path: a_NODE_EXTRA_CA_CERTS,
                    content
                };
            } catch (error) {
                t(`CA certs: Failed to read NODE_EXTRA_CA_CERTS file (${a_NODE_EXTRA_CA_CERTS}): ${error}`, {
                    level: "error"
                });
                if (w("read_failed")) {
                    m("ca_certs_load", "read_failed");
                }
            }
        }
        if (e.extraCACerts?.path === a_NODE_EXTRA_CA_CERTS) {
            u.push(e.extraCACerts.content);
            t(`CA certs: Appended extra certificates from NODE_EXTRA_CA_CERTS (${a_NODE_EXTRA_CA_CERTS})`);
        }
    }
    let l = u.length > 0 ? D(u) : undefined;
    if (W.size === 0 && w("ok")) {
        g("ca_certs_load", {
            cert_count: l?.length ?? 0,
            store_bundled,
            store_system,
            extra_configured: Boolean(a_NODE_EXTRA_CA_CERTS)
        });
    }
    return l;
}
function dTo() {
    X(z());
}
function X(e) {
    e.certificates.cache.clear?.();
    t("Cleared CA certificates cache");
}
class ye {
    clientCert = null;
    clientKey = null;
    config = po(()=>ft(this));
    agentCache = null;
    fetchSessions = new Map;
}
const ut = new q(()=>new ye);
function O() {
    return ut.of(B().host);
}
var V = "-----BEGIN ";
function Ce(e) {
    let n = e.lastIndexOf(V);
    if (n === -1) {
        return false;
    }
    let r = e.indexOf("-----", n + V.length);
    if (r === -1) {
        return false;
    }
    let o = e.slice(n + V.length, r);
    return e.includes(`-----END ${o}-----`, r);
}
const M1 = /-----BEGIN CERTIFICATE-----[\s\S]*?-----END CERTIFICATE-----/g;
function lt(content, key) {
    let r;
    try {
        r = createPrivateKey({
            key,
            ...a.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE && {
                passphrase: a.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE
            }
        });
    } catch  {
        return false;
    }
    let o = false;
    let s = false;
    for (let i of content.match(M1) ?? []){
        try {
            if (new X509Certificate(i).checkPrivateKey(r)) {
                return false;
            }
            o = true;
        } catch  {
            s = true;
        }
    }
    return o && !s;
}
var pe = 1048576;
function Ae(e, n) {
    if (!e.isFile() || e.size > pe) {
        t(`mTLS: Ignoring ${n} \u2014 not a regular file or over ${pe} bytes`, {
            level: "error"
        });
        return false;
    }
    return true;
}
function he(e, n) {
    try {
        if (!Ae(ie().statSync(e), n)) {
            return null;
        }
        let r = ie().readFileSync(e, {
            encoding: "utf8"
        });
        if (!Ce(r)) {
            t(`mTLS: Ignoring incomplete ${n} \u2014 no PEM block`, {
                level: "error"
            });
            return null;
        }
        t(`mTLS: Loaded ${n}`);
        return {
            path: e,
            content: r
        };
    } catch (error) {
        t(`mTLS: Failed to load ${n}: ${error}`, {
            level: "error"
        });
        return null;
    }
}
async function ge(e, n) {
    try {
        if (!Ae(await ie().stat(e), n)) {
            return null;
        }
        let r = await ie().readFile(e, {
            encoding: "utf8"
        });
        if (!Ce(r)) {
            t(`mTLS: Ignoring incomplete ${n} \u2014 no PEM block`, {
                level: "error"
            });
            return null;
        }
        t(`mTLS: Loaded ${n}`);
        return {
            path: e,
            content: r
        };
    } catch (error) {
        t(`mTLS: Failed to load ${n}: ${error}`, {
            level: "error"
        });
        return null;
    }
}
const X8 = bC(async ()=>{
    let e = O();
    let a_CLAUDE_CODE_CLIENT_CERT = a.CLAUDE_CODE_CLIENT_CERT;
    let a_CLAUDE_CODE_CLIENT_KEY = a.CLAUDE_CODE_CLIENT_KEY;
    let [o, s] = await Promise.all([
        a_CLAUDE_CODE_CLIENT_CERT ? ge(a_CLAUDE_CODE_CLIENT_CERT, "client certificate from CLAUDE_CODE_CLIENT_CERT") : null,
        a_CLAUDE_CODE_CLIENT_KEY ? ge(a_CLAUDE_CODE_CLIENT_KEY, "client key from CLAUDE_CODE_CLIENT_KEY") : null
    ]);
    let i = Boolean(a_CLAUDE_CODE_CLIENT_CERT && !o || a_CLAUDE_CODE_CLIENT_KEY && !s);
    let mismatched = Boolean(!i && o && s && lt(o.content, s.content));
    if (mismatched) {
        t("mTLS: Ignoring mismatched client cert/key pair — mid-rotation read", {
            level: "error"
        });
    }
    let readFailed = i || mismatched;
    let l = a_CLAUDE_CODE_CLIENT_CERT ? readFailed ? e.clientCert : o : null;
    let d = a_CLAUDE_CODE_CLIENT_KEY ? readFailed ? e.clientKey : s : null;
    let changed = e.clientCert?.path !== l?.path || e.clientCert?.content !== l?.content || e.clientKey?.path !== d?.path || e.clientKey?.content !== d?.content;
    e.clientCert = l;
    e.clientKey = d;
    if (changed) {
        xe(e);
    }
    return {
        changed,
        readFailed,
        mismatched
    };
});
function fTo() {
    let e = O();
    return {
        certPath: e.clientCert?.path,
        keyPath: e.clientKey?.path
    };
}
function fC() {
    return O().config();
}
function ft(e) {
    let n = {};
    let a_CLAUDE_CODE_CLIENT_CERT = a.CLAUDE_CODE_CLIENT_CERT;
    if (a_CLAUDE_CODE_CLIENT_CERT) {
        if (e.clientCert?.path !== a_CLAUDE_CODE_CLIENT_CERT) {
            e.clientCert = he(a_CLAUDE_CODE_CLIENT_CERT, "client certificate from CLAUDE_CODE_CLIENT_CERT") ?? e.clientCert;
        }
        if (e.clientCert?.path === a_CLAUDE_CODE_CLIENT_CERT) {
            n.cert = e.clientCert.content;
        }
    }
    let a_CLAUDE_CODE_CLIENT_KEY = a.CLAUDE_CODE_CLIENT_KEY;
    if (a_CLAUDE_CODE_CLIENT_KEY) {
        if (e.clientKey?.path !== a_CLAUDE_CODE_CLIENT_KEY) {
            e.clientKey = he(a_CLAUDE_CODE_CLIENT_KEY, "client key from CLAUDE_CODE_CLIENT_KEY") ?? e.clientKey;
        }
        if (e.clientKey?.path === a_CLAUDE_CODE_CLIENT_KEY) {
            n.key = e.clientKey.content;
        }
    }
    let a_CLAUDE_CODE_CLIENT_KEY_PASSPHRASE = a.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE;
    if (a_CLAUDE_CODE_CLIENT_KEY_PASSPHRASE) {
        n.passphrase = a_CLAUDE_CODE_CLIENT_KEY_PASSPHRASE;
        t("mTLS: Using client key passphrase");
    }
    if (Object.keys(n).length === 0) {
        return;
    }
    return n;
}
function Put() {
    let e = O();
    let config = fC();
    let r = CN();
    if (e.agentCache && e.agentCache.config === config && e.agentCache.ca === r) {
        return e.agentCache.agent;
    }
    let o;
    if (config || r) {
        let s = {
            ...config,
            ...r && {
                ca: r
            },
            keepAlive: true
        };
        t("mTLS: Creating HTTPS agent with custom certificates");
        o = new Agent(s);
    }
    e.agentCache = {
        config,
        ca: r,
        agent: o
    };
    return o;
}
function mTo() {
    let e = fC();
    let n = CN();
    return new Agent({
        ...e,
        ...n && {
            ca: n
        },
        keepAlive: false
    });
}
function Uw() {
    let e = fC();
    let n = CN();
    if (!e && !n) {
        return;
    }
    return {
        ...e,
        ...n && {
            ca: n
        }
    };
}
function OHt() {
    let e = fC();
    let n = CN();
    if (!e && !n) {
        return {};
    }
    return {
        tls: {
            ...e,
            ...n && {
                ca: n
            }
        }
    };
}
function gTo(e) {
    let n = typeof Bun === "undefined" ? undefined : Bun.FetchSession;
    if (!n) {
        return;
    }
    let r = OHt();
    let fetchSessions = O().fetchSessions;
    let s = fetchSessions.get(e);
    if (s && isDeepStrictEqual(s.tls, r.tls)) {
        s.tls = r.tls;
        return s.session;
    }
    let session = new n(r);
    s?.session.close();
    fetchSessions.set(e, {
        tls: r.tls,
        session
    });
    return session;
}
function fCr() {
    xe(O());
}
function xe(e) {
    e.config.cache.clear?.();
    e.agentCache = null;
    t("Cleared mTLS configuration cache");
}
function hTo() {
    if (!fC()) {
        return;
    }
    if (a.NODE_EXTRA_CA_CERTS) {
        t("NODE_EXTRA_CA_CERTS detected - Node.js will automatically append to built-in CAs");
    }
}
const ae = Se(kH(), 1);
const Be = /[\u3002\uFF0E\uFF61]/g;
const sn = /[\uFF1A\uFE55\uFE13]/g;
function PHt(e) {
    return e.replace(Be, ".").replace(sn, ":");
}
const qe = /^(0|[1-9]\d{0,2})(\.(0|[1-9]\d{0,2})){3}$/;
const cn = /^(0x[0-9a-f]*|\d+)$/;
const Ke = /[\x00-\x20\x7f#%/<>?@\\^|]|[\u180E\u206A-\u206F\u{2F868}\u{2F874}\u{2F91F}\u{2F95F}\u{2F9BF}]/u;
const an = /[\u00AD\u034F\u180B-\u180D\u180F\u200B\u2060\u2064\uFE00-\uFE0F\uFEFF\u{1BCA0}-\u{1BCA3}\u{E0100}-\u{E01EF}]/gu;
function je(e) {
    let n = e;
    if (n.includes("%")) {
        try {
            n = decodeURIComponent(n);
        } catch  {
            return e.normalize("NFKC").toLowerCase();
        }
    }
    return n.replace(an, "").replace(Be, ".").normalize("NFKC").toLowerCase().replace(/\.$/, "");
}
function IHt(e) {
    if (Ke.test(e)) {
        return "";
    }
    let n = domainToASCII(e);
    if (!qe.test(n)) {
        return n;
    }
    let r = je(e);
    if (r === n) {
        return n;
    }
    return r;
}
function RPs(e) {
    return !Ke.test(e) && qe.test(domainToASCII(e));
}
function xPs(e) {
    let n = je(e);
    let r = n.split(".");
    if (r.length <= 4 && r.every((o)=>cn.test(o))) {
        return n;
    }
    return null;
}
function se(e) {
    let n = PHt(e.toLowerCase()).replace(/\.+$/, "");
    let r = IHt(n);
    if (r !== "") {
        return r.replace(/\.+$/, "");
    }
    return n;
}
function We(e, n) {
    let r;
    if (e.startsWith("*.")) {
        r = `*.${se(e.slice(2))}`;
    } else {
        r = se(e);
    }
    let o = se(n);
    if (r === "*") {
        return true;
    }
    if (r === o) {
        return true;
    }
    if (r.startsWith("*.") && o.endsWith(r.slice(1))) {
        return true;
    }
    return false;
}
function uTo(e, n) {
    return We(n, e);
}
function pTo(e, n) {
    for (let r of n){
        if (We(r, e)) {
            return true;
        }
    }
    return false;
}
function Bz(e, n) {
    let r = n.lastIndexOf("/");
    if (r < 0) {
        return false;
    }
    let o = n.slice(0, r);
    let s = n.slice(r + 1);
    if (!/^\d+$/.test(s)) {
        return false;
    }
    let i = parseInt(s, 10);
    let c = Ye(o);
    if (!c) {
        return false;
    }
    if (c.zone) {
        return false;
    }
    let u = Ye(e);
    if (!u) {
        return false;
    }
    let l = ln(u.bytes);
    let c_bytes = c.bytes;
    if (l.length !== c_bytes.length) {
        return false;
    }
    let h = c_bytes.length * 8;
    if (i < 0 || i > h) {
        return false;
    }
    return un(l, c_bytes, i);
}
function un(e, n, r) {
    let o = r >> 3;
    for(let c = 0; c < o; c++){
        if (e[c] !== n[c]) {
            return false;
        }
    }
    let s = r & 7;
    if (s === 0) {
        return true;
    }
    let i = 255 << 8 - s & 255;
    return ((e[o] ?? 0) & i) === ((n[o] ?? 0) & i);
}
function ln(bytes) {
    if (bytes.length !== 16) {
        return bytes;
    }
    for(let n = 0; n < 10; n++){
        if (bytes[n] !== 0) {
            return bytes;
        }
    }
    if (bytes[10] !== 255 || bytes[11] !== 255) {
        return bytes;
    }
    return bytes.slice(12);
}
function Ye(e) {
    if (e === "") {
        return null;
    }
    let zone = "";
    let r = e;
    let o = e.indexOf("%");
    if (o >= 0) {
        zone = e.slice(o + 1);
        r = e.slice(0, o);
    }
    if (r.includes(":")) {
        let i = fn(r);
        if (i) {
            return {
                bytes: i,
                zone
            };
        }
        return null;
    }
    if (zone) {
        return null;
    }
    let s = Xe(r);
    if (s) {
        return {
            bytes: s,
            zone: ""
        };
    }
    return null;
}
function Xe(e) {
    let n = e.split(".");
    if (n.length !== 4) {
        return null;
    }
    let r = new Uint8Array(4);
    for(let o = 0; o < 4; o++){
        let s = n[o];
        if (s === undefined || s === "" || !/^\d{1,3}$/.test(s)) {
            return null;
        }
        if (s.length > 1 && s.startsWith("0")) {
            return null;
        }
        let i = parseInt(s, 10);
        if (i > 255) {
            return null;
        }
        r[o] = i;
    }
    return r;
}
function fn(e) {
    let n = null;
    let r = e;
    let o = e.lastIndexOf(":");
    if (o >= 0 && e.slice(o + 1).includes(".")) {
        n = Xe(e.slice(o + 1));
        if (!n) {
            return null;
        }
        r = e.slice(0, o + 1);
    }
    let s = r.split("::");
    if (s.length > 2) {
        return null;
    }
    let i = [];
    let c = (l, d)=>{
        if (l === "") {
            return [];
        }
        let h = l.split(":");
        let S = [];
        for(let _ = 0; _ < h.length; _++){
            let T = h[_];
            if (T === "" && d && _ === h.length - 1) {
                continue;
            }
            if (T === undefined || T === "" || !/^[0-9a-fA-F]{1,4}$/.test(T)) {
                return null;
            }
            S.push(parseInt(T, 16));
        }
        return S;
    };
    if (s.length === 1) {
        let l = s[0] ?? "";
        let d = c(l, n !== null);
        if (!d) {
            return null;
        }
        i.push(...d);
        let h = n ? 6 : 8;
        if (i.length !== h) {
            return null;
        }
    } else {
        let l = s[0] ?? "";
        let d = s[1] ?? "";
        let h = c(l, false);
        let S = c(d, n !== null);
        if (!h || !S) {
            return null;
        }
        let _ = n ? 2 : 0;
        let T = 8 - h.length - S.length - _;
        if (T < 1) {
            return null;
        }
        i.push(...h);
        for(let b = 0; b < T; b++){
            i.push(0);
        }
        i.push(...S);
        if (i.length + _ !== 8) {
            return null;
        }
    }
    let u = new Uint8Array(16);
    for(let l = 0; l < i.length; l++){
        let d = i[l];
        if (d === undefined) {
            return null;
        }
        u[l * 2] = d >> 8 & 255;
        u[l * 2 + 1] = d & 255;
    }
    if (n) {
        u[12] = n[0] ?? 0;
        u[13] = n[1] ?? 0;
        u[14] = n[2] ?? 0;
        u[15] = n[3] ?? 0;
    }
    return u;
}
class Je {
    keepAliveDisabled = false;
    agents = po(yn);
    proxyAuthHelperConfig = {
        helper: undefined,
        fromProjectOrLocal: false,
        trustAccepted: ()=>false
    };
    proxyAuthCache = null;
    proxyAuthPendingChallenge = undefined;
}
const pn = new q(()=>new Je);
function L() {
    return pn.of(B().host);
}
function yTo() {
    L().keepAliveDisabled = true;
}
function hn(e) {
    switch(e.family){
        case 0:
        case 4:
        case 6:
            return e.family;
        case "IPv6":
            return 6;
        case "IPv4":
        case undefined:
            return 4;
        default:
            throw Error(`Unsupported address family: ${e.family}`);
    }
}
const gn = [
    "https_proxy",
    "HTTPS_PROXY",
    "http_proxy",
    "HTTP_PROXY"
];
function jz(e = process.env) {
    let source = gn.find((o)=>e[o]);
    let r = source ? e[source] : undefined;
    if (source && r) {
        return {
            value: r,
            source
        };
    }
}
function xUe(e = process.env) {
    return jz(e)?.value;
}
function Wz(e) {
    try {
        let n = new URL(e);
        if (n.host) {
            return n;
        }
        return undefined;
    } catch  {
        return;
    }
}
function MHt(e, n) {
    let r = n.replace(/\p{Cc}/gu, "");
    return `Invalid proxy URL in ${e}: "${r}" cannot be parsed as a URL.
Proxy settings must be a complete URL including the scheme, e.g. "http://proxy.example.com:8080".
Fix or unset ${e} and restart Claude Code.`;
}
const Ge = ze(new Set, (e)=>e.clear());
function cf(e = process.env) {
    let n = jz(e);
    if (!n) {
        return;
    }
    if (!Wz(n.value)) {
        let r = `${n.source}=${n.value}`;
        if (!Ge.has(r)) {
            Ge.add(r);
            console.error(MHt(n.source, n.value));
        }
        return;
    }
    return n.value;
}
function mCr({ no_proxy, NO_PROXY }) {
    if (no_proxy && NO_PROXY && no_proxy !== NO_PROXY) {
        return `${no_proxy},${NO_PROXY}`;
    }
    return no_proxy || NO_PROXY;
}
function PUe(e = process.env) {
    if (e.no_proxy === "*" || e.NO_PROXY === "*") {
        return "*";
    }
    return mCr(e);
}
function ly(e, n = PUe()) {
    if (!n) {
        return false;
    }
    if (n === "*") {
        return true;
    }
    try {
        let r = new URL(e);
        let o = r.hostname.toLowerCase();
        let s = r.protocol === "https:" || r.protocol === "wss:";
        let i = r.port || (s ? "443" : "80");
        let c = `${o}:${i}`;
        return n.split(/[,\s]+/).filter(Boolean).some((l)=>{
            l = l.toLowerCase().trim();
            if (l.includes(":")) {
                return c === l;
            }
            if (l.startsWith(".")) {
                let d = l;
                return o === l.substring(1) || o.endsWith(d);
            }
            return o === l;
        });
    } catch  {
        return false;
    }
}
function Qe(url, n) {
    if (ly(url, n)) {
        return true;
    }
    if (!n) {
        return false;
    }
    let r;
    try {
        r = new URL(url).hostname.replace(/^\[|\]$/g, "");
    } catch  {
        return false;
    }
    if (isIP(r) === 0) {
        return false;
    }
    return n.split(/[,\s]+/).filter(Boolean).some((o)=>{
        if (o.includes("/")) {
            return Bz(r, o);
        }
        let s = isIP(o);
        if (s === 0) {
            return false;
        }
        return Bz(r, `${o}/${s === 4 ? 32 : 128}`);
    });
}
function Ze(e) {
    let n = fC();
    let r = CN();
    return gCr(e, {
        ...n && {
            cert: n.cert,
            key: n.key,
            passphrase: n.passphrase
        },
        ...r && {
            ca: r
        }
    });
}
function gCr(e, n) {
    let r = {
        ...n,
        headers: ()=>{
            let s = et();
            if (s) {
                return {
                    "Proxy-Authorization": s
                };
            }
            return {};
        }
    };
    if (a.CLAUDE_CODE_PROXY_RESOLVES_HOSTS) {
        r.lookup = (s, i, c)=>{
            c(null, s, hn(i));
        };
    }
    let o = new A5e(e, r);
    o.options = {
        ...o.options,
        ...n
    };
    return o;
}
function mn(e) {
    return L().agents(e);
}
function yn(e) {
    let n = Le("undici");
    let r = fC();
    let o = CN();
    let s = {
        httpProxy: e,
        httpsProxy: e,
        noProxy: PUe({
            no_proxy: a.no_proxy,
            NO_PROXY: a.NO_PROXY
        })
    };
    if (r || o) {
        let i = {
            ...r && {
                cert: r.cert,
                key: r.key,
                passphrase: r.passphrase
            },
            ...o && {
                ca: o
            }
        };
        s.connect = i;
        s.requestTls = i;
    }
    return new n.EnvHttpProxyAgent(s);
}
function jv(e) {
    let n = cf();
    if (!n) {
        return;
    }
    try {
        if (Xk(new URL(e).hostname)) {
            return;
        }
    } catch  {}
    if (ly(e)) {
        return;
    }
    return n;
}
const Cn = 300000;
function urn(e) {
    L().proxyAuthHelperConfig = e;
}
function IUe() {
    if (!a.CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER) {
        return;
    }
    return L().proxyAuthHelperConfig.helper;
}
function ue(e) {
    return IUe() !== undefined && e.proxyAuthHelperConfig.fromProjectOrLocal;
}
function An() {
    let a_CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS = a.CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS;
    if (a_CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS !== undefined && a_CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS >= 0) {
        return a_CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS;
    }
    return Cn;
}
async function OUe() {
    let e = IUe();
    if (!e) {
        return null;
    }
    let n = L();
    let r = n.proxyAuthHelperConfig.sources === "personAndPolicy";
    if (r && ue(n)) {
        return null;
    }
    if (ue(n) && !Ee() && !n.proxyAuthHelperConfig.trustAccepted()) {
        t("proxyAuthHelper configured in project/local settings but workspace trust not yet accepted — skipping", {
            level: "warn"
        });
        return null;
    }
    let n_proxyAuthPendingChallenge = n.proxyAuthPendingChallenge;
    if (!n_proxyAuthPendingChallenge && n.proxyAuthCache && Date.now() - n.proxyAuthCache.timestamp < An()) {
        return n.proxyAuthCache.value;
    }
    n.proxyAuthPendingChallenge = undefined;
    let CLAUDE_CODE_PROXY_URL = xUe();
    let CLAUDE_CODE_PROXY_HOST;
    try {
        CLAUDE_CODE_PROXY_HOST = CLAUDE_CODE_PROXY_URL ? new URL(CLAUDE_CODE_PROXY_URL).hostname : undefined;
    } catch  {
        CLAUDE_CODE_PROXY_HOST = undefined;
    }
    let cwd = r ? homedir() : Kr();
    let u = await DP(e, {
        ...cwd !== null && {
            cwd
        },
        timeout: 30000,
        reject: false,
        useToolMemoryCgroup: false,
        env: {
            ...process.env,
            ...CLAUDE_CODE_PROXY_URL && {
                CLAUDE_CODE_PROXY_URL
            },
            ...CLAUDE_CODE_PROXY_HOST && {
                CLAUDE_CODE_PROXY_HOST
            },
            ...n_proxyAuthPendingChallenge && {
                CLAUDE_CODE_PROXY_AUTHENTICATE: n_proxyAuthPendingChallenge
            }
        }
    });
    if (u.failed || !u.stdout?.trim()) {
        let d = u.timedOut ? "timed out" : u.failed ? `exited ${u.exitCode}` : "did not return a value";
        let h = u.stderr?.trim();
        console.error(`proxyAuthHelper failed: ${h ? `${d}: ${h}` : d}`);
        return n.proxyAuthCache?.value ?? null;
    }
    let l = u.stdout.trim();
    n.proxyAuthCache = {
        value: l,
        timestamp: Date.now()
    };
    return l;
}
function et() {
    return L().proxyAuthCache?.value ?? null;
}
function prn(e) {
    let n = L();
    n.proxyAuthCache = null;
    n.proxyAuthPendingChallenge = e;
}
function _To() {
    if (!IUe()) {
        return;
    }
    let e = L();
    if (ue(e) && !e.proxyAuthHelperConfig.trustAccepted()) {
        return;
    }
    OUe();
}
function na(e) {
    let API_FORCE_IDLE_TIMEOUT = process.env.API_FORCE_IDLE_TIMEOUT;
    let r = Ne(API_FORCE_IDLE_TIMEOUT) ? true : vs(API_FORCE_IDLE_TIMEOUT) ? false : e.bodyIdleTimeout;
    let o = e.forAnthropicAPI && r !== true && (e.hasBodyIdleWatchdog || r === false);
    let s = {
        ...L().keepAliveDisabled && {
            keepalive: false
        },
        ...o && {
            timeout: false
        }
    };
    if (e.forAnthropicAPI) {
        let unix = a.ANTHROPIC_UNIX_SOCKET;
        if (unix) {
            return {
                ...s,
                unix
            };
        }
    }
    let url = cf();
    if (url) {
        if (e.url && ly(e.url)) {
            return {
                ...s,
                ...OHt()
            };
        }
        let c = et();
        return {
            ...s,
            proxy: c ? {
                url,
                headers: {
                    "Proxy-Authorization": c
                }
            } : url,
            ...OHt()
        };
    }
    if (e.fallbackProxy) {
        if (e.url && (Qe(e.url, e.fallbackProxy.noProxy) || Qe(e.url, PUe()))) {
            return {
                ...s,
                ...OHt()
            };
        }
        let c = OHt();
        return {
            ...s,
            proxy: e.fallbackProxy.url,
            ...e.fallbackProxy.ca ? {
                tls: {
                    ...c.tls,
                    ca: e.fallbackProxy.ca
                }
            } : c
        };
    }
    return {
        ...s,
        ...OHt()
    };
}
let Y;
let ce = false;
function ES() {
    let e = jz();
    let n = cf();
    let r = Put();
    if (Y !== undefined) {
        At.interceptors.request.eject(Y);
        Y = undefined;
    }
    At.defaults.proxy = undefined;
    At.defaults.httpAgent = undefined;
    At.defaults.httpsAgent = undefined;
    if (e) {
        At.defaults.proxy = false;
    }
    if (n) {
        let o = Ze(n);
        Y = At.interceptors.request.use((s)=>{
            if (s.socketPath) {
                return s;
            }
            let i = At.getUri(s);
            if (i && ly(i)) {
                s.httpsAgent ??= r;
                if (s.httpsAgent) {
                    s.httpAgent = undefined;
                } else {
                    delete s.httpsAgent;
                    delete s.httpAgent;
                }
            } else {
                s.httpsAgent = o;
                s.httpAgent = o;
            }
            return s;
        });
        Le("undici").setGlobalDispatcher(mn(n));
        ce = true;
    } else {
        if (ce) {
            let o = Le("undici");
            o.setGlobalDispatcher(new o.Agent);
            ce = false;
        }
        if (r) {
            At.defaults.httpsAgent = r;
        }
    }
}
function MUe(e) {
    return a.AWS_ENDPOINT_URL_STS || a.AWS_ENDPOINT_URL || `https://sts.${e}.amazonaws.com`;
}
async function HUe(e) {
    let requestHandler = await J8(e);
    if (!requestHandler) {
        return {};
    }
    let { defaultProvider } = await import("/$bunfs/root/chunk-wqsvc4cg.js");
    return {
        requestHandler,
        credentials: defaultProvider({
            clientConfig: {
                requestHandler
            },
            parentClientConfig: {
                requestHandler,
                ...e.region !== undefined && {
                    region: e.region
                }
            }
        })
    };
}
async function J8(e) {
    let n = cf();
    let r = e.requestTimeoutMs !== undefined && {
        requestTimeout: e.requestTimeoutMs,
        throwOnRequestTimeout: true
    };
    if (!n || e.url && ly(e.url)) {
        let httpsAgent = Put();
        if (!httpsAgent) {
            return null;
        }
        return new ae.NodeHttpHandler({
            httpsAgent,
            ...r
        });
    }
    let o = Ze(n);
    return new ae.NodeHttpHandler({
        httpAgent: o,
        httpsAgent: o,
        ...r
    });
}
function gpe() {
    L().agents.cache.clear?.();
    t("Cleared proxy agent cache");
}
export { qxe, jm, lTo, cTo, kH, mpe, CN, dTo, PHt, IHt, RPs, xPs, uTo, pTo, Bz, M1, X8, fTo, fC, Put, mTo, Uw, OHt, gTo, fCr, hTo, yTo, jz, xUe, Wz, MHt, cf, mCr, PUe, ly, gCr, jv, urn, IUe, OUe, prn, _To, na, ES, MUe, HUe, J8, gpe };
