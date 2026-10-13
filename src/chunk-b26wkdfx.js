import { NXn } from "/$bunfs/root/chunk-wp6dx2n8.js";
import { B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { St, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { vz } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { fH } from "/$bunfs/root/chunk-74djrymf.js";
import { PAe } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { uL, aVt, WGe, Xae, sp } from "/$bunfs/root/chunk-kasbfbhj.js";
import { _Te } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { Ave } from "/$bunfs/root/chunk-ce3s0ac9.js";
import { ME } from "/$bunfs/root/chunk-va6abnm5.js";
import { Ein, wVn } from "/$bunfs/root/chunk-d1qs6z3v.js";
import { mIr } from "/$bunfs/root/chunk-mj4eqbmn.js";
import { Xk } from "/$bunfs/root/chunk-sfqgx6er.js";
import { Http2ServerRequest, constants } from "http2";
import { Readable } from "stream";
import de, { randomBytes, randomUUID } from "crypto";
import { createServer } from "http";
class w extends Error {
    constructor(e, r){
        super(e, r);
        this.name = "RequestError";
    }
}
const ee = (error)=>{
    if (error instanceof w) {
        return error;
    }
    return new w(error.message, {
        cause: error
    });
};
const global_Request = global.Request;
class k extends global_Request {
    constructor(e, r){
        if (typeof e === "object" && C in e) {
            e = e[C]();
        }
        if (typeof r?.body?.getReader !== "undefined") {
            r.duplex ??= "half";
        }
        super(e, r);
    }
}
const re = (e)=>{
    let r = [];
    let e_rawHeaders = e.rawHeaders;
    for(let s = 0; s < e_rawHeaders.length; s += 2){
        let { [s]: n, [s + 1]: i } = e_rawHeaders;
        if (n.charCodeAt(0) !== 58) {
            r.push([
                n,
                i
            ]);
        }
    }
    return new Headers(r);
};
const V = Symbol("wrapBodyStream");
const se = (method, r, headers, s, n)=>{
    let i = {
        method,
        headers,
        signal: n.signal
    };
    if (method === "TRACE") {
        i.method = "GET";
        let u = new k(r, i);
        Object.defineProperty(u, "method", {
            get () {
                return "TRACE";
            }
        });
        return u;
    }
    if (!(method === "GET" || method === "HEAD")) {
        if ("rawBody" in s && s.rawBody instanceof Buffer) {
            i.body = new ReadableStream({
                start (u) {
                    u.enqueue(s.rawBody);
                    u.close();
                }
            });
        } else if (s[V]) {
            let u;
            i.body = new ReadableStream({
                async pull (d) {
                    try {
                        u ||= Readable.toWeb(s).getReader();
                        let { done, value } = await u.read();
                        if (done) {
                            d.close();
                        } else {
                            d.enqueue(value);
                        }
                    } catch (error) {
                        d.error(error);
                    }
                }
            });
        } else {
            i.body = Readable.toWeb(s);
        }
    }
    return new k(r, i);
};
var C = Symbol("getRequestCache");
const W = Symbol("requestCache");
const _ = Symbol("incomingKey");
const O = Symbol("urlKey");
const ne = Symbol("headersKey");
const E = Symbol("abortControllerKey");
const oe = Symbol("getAbortController");
const H = {
    get method () {
        return this[_].method || "GET";
    },
    get url () {
        return this[O];
    },
    get headers () {
        return this[ne] ||= re(this[_]);
    },
    [oe] () {
        this[C]();
        return this[E];
    },
    [C] () {
        this[E] ||= new AbortController;
        return this[W] ||= se(this.method, this[O], this.headers, this[_], this[E]);
    }
};
[
    "body",
    "bodyUsed",
    "cache",
    "credentials",
    "destination",
    "integrity",
    "mode",
    "redirect",
    "referrer",
    "referrerPolicy",
    "signal",
    "keepalive"
].forEach((e)=>{
    Object.defineProperty(H, e, {
        get () {
            return this[C]()[e];
        }
    });
});
[
    "arrayBuffer",
    "blob",
    "clone",
    "formData",
    "json",
    "text"
].forEach((e)=>{
    Object.defineProperty(H, e, {
        value: function() {
            return this[C]()[e]();
        }
    });
});
Object.defineProperty(H, Symbol.for("nodejs.util.inspect.custom"), {
    value: function(e, r, o) {
        let s = {
            method: this.method,
            url: this.url,
            headers: this.headers,
            nativeRequest: this[W]
        };
        return `Request (lightweight) ${o(s, {
            ...r,
            depth: e == null ? null : e - 1
        })}`;
    }
});
Object.setPrototypeOf(H, k.prototype);
const ae = (incoming, hostname)=>{
    let o = Object.create(H);
    o[_] = incoming;
    let s = incoming.url || "";
    if (s[0] !== "/" && (s.startsWith("http://") || s.startsWith("https://"))) {
        if (incoming instanceof Http2ServerRequest) {
            throw new w("Absolute URL for :path is not allowed in HTTP/2");
        }
        try {
            let d = new URL(s);
            o[O] = d.href;
        } catch (cause) {
            throw new w("Invalid absolute URL", {
                cause
            });
        }
        return o;
    }
    let n = (incoming instanceof Http2ServerRequest ? incoming.authority : incoming.headers.host) || hostname;
    if (!n) {
        throw new w("Missing host header");
    }
    let i;
    if (incoming instanceof Http2ServerRequest) {
        i = incoming.scheme;
        if (!(i === "http" || i === "https")) {
            throw new w("Unsupported scheme");
        }
    } else {
        i = incoming.socket && incoming.socket.encrypted ? "https" : "http";
    }
    let u = new URL(`${i}://${n}${s}`);
    if (u.hostname.length !== n.length && u.hostname !== n.replace(/:\d+$/, "")) {
        throw new w("Invalid host header");
    }
    o[O] = u.href;
    return o;
};
const L = Symbol("responseCache");
const R = Symbol("getResponseCache");
const T = Symbol("cache");
const global_Response = global.Response;
const g = class e {
    #t;
    #e;
    [R]() {
        delete this[T];
        return this[L] ||= new global_Response(this.#t, this.#e);
    }
    constructor(r, o){
        let s;
        this.#t = r;
        if (o instanceof e) {
            let n = o[L];
            if (n) {
                this.#e = n;
                this[R]();
                return;
            } else {
                this.#e = o.#e;
                s = new Headers(o.#e.headers);
            }
        } else {
            this.#e = o;
        }
        if (typeof r === "string" || typeof r?.getReader !== "undefined" || r instanceof Blob || r instanceof Uint8Array) {
            this[T] = [
                o?.status || 200,
                r,
                s || o?.headers
            ];
        }
    }
    get headers() {
        let r = this[T];
        if (r) {
            if (!(r[2] instanceof Headers)) {
                r[2] = new Headers(r[2] || {
                    "content-type": "text/plain; charset=UTF-8"
                });
            }
            return r[2];
        }
        return this[R]().headers;
    }
    get status() {
        return this[T]?.[0] ?? this[R]().status;
    }
    get ok() {
        let status = this.status;
        return status >= 200 && status < 300;
    }
};
[
    "body",
    "bodyUsed",
    "redirected",
    "statusText",
    "trailers",
    "type",
    "url"
].forEach((e)=>{
    Object.defineProperty(g.prototype, e, {
        get () {
            return this[R]()[e];
        }
    });
});
[
    "arrayBuffer",
    "blob",
    "clone",
    "formData",
    "json",
    "text"
].forEach((e)=>{
    Object.defineProperty(g.prototype, e, {
        value: function() {
            return this[R]()[e]();
        }
    });
});
Object.defineProperty(g.prototype, Symbol.for("nodejs.util.inspect.custom"), {
    value: function(e, r, o) {
        let s = {
            status: this.status,
            headers: this.headers,
            ok: this.ok,
            nativeResponse: this[L]
        };
        return `Response (lightweight) ${o(s, {
            ...r,
            depth: e == null ? null : e - 1
        })}`;
    }
});
Object.setPrototypeOf(g, global_Response);
Object.setPrototypeOf(g.prototype, global_Response.prototype);
async function ie(e) {
    return Promise.race([
        e,
        Promise.resolve().then(()=>Promise.resolve(undefined))
    ]);
}
function z(e, r, o) {
    let s = (d)=>{
        e.cancel(d).catch(()=>{});
    };
    r.on("close", s);
    r.on("error", s);
    (o ?? e.read()).then(u, n);
    return e.closed.finally(()=>{
        r.off("close", s);
        r.off("error", s);
    });
    function n(d) {
        if (d) {
            r.destroy(d);
        }
    }
    function i() {
        e.read().then(u, n);
    }
    function u({ done, value }) {
        try {
            if (done) {
                r.end();
            } else if (!r.write(value)) {
                r.once("drain", i);
            } else {
                return e.read().then(u, n);
            }
        } catch (error) {
            n(error);
        }
    }
}
function le(e, r) {
    if (e.locked) {
        throw TypeError("ReadableStream is locked.");
    } else if (r.destroyed) {
        return;
    }
    return z(e.getReader(), r);
}
const I = (e)=>{
    let r = {};
    if (!(e instanceof Headers)) {
        e = new Headers(e ?? undefined);
    }
    let o = [];
    for (let [s, n] of e){
        if (s === "set-cookie") {
            o.push(n);
        } else {
            r[s] = n;
        }
    }
    if (o.length > 0) {
        r["set-cookie"] = o;
    }
    r["content-type"] ??= "text/plain; charset=UTF-8";
    return r;
};
const ce = "x-hono-already-sent";
if (typeof global.crypto === "undefined") {
    global.crypto = de;
}
const x = Symbol("outgoingEnded");
const N = Symbol("incomingDraining");
const ue = 500;
const fe = 67108864;
const j = (incoming)=>{
    let r = incoming;
    if (incoming.destroyed || r[N]) {
        return;
    }
    r[N] = true;
    if (incoming instanceof Http2ServerRequest) {
        try {
            incoming.stream?.close?.(constants.NGHTTP2_NO_ERROR);
        } catch  {}
        return;
    }
    let o = 0;
    let s = ()=>{
        clearTimeout(i);
        incoming.off("data", u);
        incoming.off("end", s);
        incoming.off("error", s);
    };
    let n = ()=>{
        s();
        let e_socket = incoming.socket;
        if (e_socket && !e_socket.destroyed) {
            e_socket.destroySoon();
        }
    };
    let i = setTimeout(n, ue);
    i.unref?.();
    let u = (d)=>{
        o += d.length;
        if (o > fe) {
            n();
        }
    };
    incoming.on("data", u);
    incoming.on("end", s);
    incoming.on("error", s);
    incoming.resume();
};
const he = ()=>new Response(null, {
        status: 400
    });
const Y = (e)=>new Response(null, {
        status: e instanceof Error && (e.name === "TimeoutError" || e.constructor.name === "TimeoutError") ? 504 : 500
    });
const q = (e, r)=>{
    let o = e instanceof Error ? e : Error("unknown error", {
        cause: e
    });
    if (o.code === "ERR_STREAM_PREMATURE_CLOSE") {
        console.info("The user aborted a request.");
    } else {
        console.error(e);
        if (!r.headersSent) {
            r.writeHead(500, {
                "Content-Type": "text/plain"
            });
        }
        r.end(`Error: ${o.message}`);
        r.destroy(o);
    }
};
const X = (e)=>{
    if ("flushHeaders" in e && e.writable) {
        e.flushHeaders();
    }
};
const J = async (e, outgoing)=>{
    let [o, s, n] = e[T];
    let i = false;
    if (!n) {
        n = {
            "content-type": "text/plain; charset=UTF-8"
        };
    } else if (n instanceof Headers) {
        i = n.has("content-length");
        n = I(n);
    } else if (Array.isArray(n)) {
        let u = new Headers(n);
        i = u.has("content-length");
        n = I(u);
    } else {
        for(let u in n){
            if (u.length === 14 && u.toLowerCase() === "content-length") {
                i = true;
                break;
            }
        }
    }
    if (!i) {
        if (typeof s === "string") {
            n["Content-Length"] = Buffer.byteLength(s);
        } else if (s instanceof Uint8Array) {
            n["Content-Length"] = s.byteLength;
        } else if (s instanceof Blob) {
            n["Content-Length"] = s.size;
        }
    }
    outgoing.writeHead(o, n);
    if (typeof s === "string" || s instanceof Uint8Array) {
        outgoing.end(s);
    } else if (s instanceof Blob) {
        outgoing.end(new Uint8Array(await s.arrayBuffer()));
    } else {
        X(outgoing);
        await le(s, outgoing)?.catch((u)=>q(u, outgoing));
    }
    outgoing[x]?.();
};
const pe = (e)=>typeof e.then === "function";
const me = async (e, outgoing, o = {})=>{
    if (pe(e)) {
        if (o.errorHandler) {
            try {
                e = await e;
            } catch (error) {
                let i = await o.errorHandler(error);
                if (!i) {
                    return;
                }
                e = i;
            }
        } else {
            e = await e.catch(Y);
        }
    }
    if (T in e) {
        return J(e, outgoing);
    }
    let s = I(e.headers);
    if (e.body) {
        let n = e.body.getReader();
        let i = [];
        let u = false;
        let d;
        if (s["transfer-encoding"] !== "chunked") {
            let m = 2;
            for(let h = 0; h < m; h++){
                d ||= n.read();
                let p = await ie(d).catch((b)=>{
                    console.error(b);
                    u = true;
                });
                if (!p) {
                    if (h === 1) {
                        await new Promise((resolve)=>setTimeout(resolve));
                        m = 3;
                        continue;
                    }
                    break;
                }
                d = undefined;
                if (p.value) {
                    i.push(p.value);
                }
                if (p.done) {
                    u = true;
                    break;
                }
            }
            if (u && !("content-length" in s)) {
                s["content-length"] = i.reduce((acc, item)=>acc + item.length, 0);
            }
        }
        outgoing.writeHead(e.status, s);
        i.forEach((m)=>{
            outgoing.write(m);
        });
        if (u) {
            outgoing.end();
        } else {
            if (i.length === 0) {
                X(outgoing);
            }
            await z(n, outgoing, d);
        }
    } else if (s[ce]) ;
    else {
        outgoing.writeHead(e.status, s);
        outgoing.end();
    }
    outgoing[x]?.();
};
const D = (e, r = {})=>{
    let o = r.autoCleanupIncoming ?? true;
    if (r.overrideGlobalObjects !== false && global.Request !== k) {
        Object.defineProperty(global, "Request", {
            value: k
        });
        Object.defineProperty(global, "Response", {
            value: g
        });
    }
    return async (incoming, outgoing)=>{
        let i;
        let u;
        try {
            u = ae(incoming, r.hostname);
            let d = !o || incoming.method === "GET" || incoming.method === "HEAD";
            if (!d) {
                incoming[V] = true;
                incoming.on("end", ()=>{
                    d = true;
                });
                if (incoming instanceof Http2ServerRequest) {
                    outgoing[x] = ()=>{
                        if (!d) {
                            setTimeout(()=>{
                                if (!d) {
                                    setTimeout(()=>{
                                        j(incoming);
                                    });
                                }
                            });
                        }
                    };
                }
                outgoing.on("finish", ()=>{
                    if (!d) {
                        j(incoming);
                    }
                });
            }
            outgoing.on("close", ()=>{
                if (u[E]) {
                    if (incoming.errored) {
                        u[E].abort(incoming.errored.toString());
                    } else if (!outgoing.writableFinished) {
                        u[E].abort("Client connection prematurely closed.");
                    }
                }
                if (!d) {
                    setTimeout(()=>{
                        if (!d) {
                            setTimeout(()=>{
                                j(incoming);
                            });
                        }
                    });
                }
            });
            i = e(u, {
                incoming,
                outgoing
            });
            if (T in i) {
                return J(i, outgoing);
            }
        } catch (error) {
            if (!i) {
                if (r.errorHandler) {
                    i = await r.errorHandler(u ? error : ee(error));
                    if (!i) {
                        return;
                    }
                } else if (!u) {
                    i = he();
                } else {
                    i = Y(error);
                }
            } else {
                return q(error, outgoing);
            }
        }
        try {
            return await me(i, outgoing, r);
        } catch (error) {
            return q(error, outgoing);
        }
    };
};
class M {
    constructor(e = {}){
        this._requestContext = new WeakMap;
        this._webStandardTransport = new NXn(e);
        this._requestListener = D(async (r)=>{
            let o = this._requestContext.get(r);
            return this._webStandardTransport.handleRequest(r, {
                authInfo: o?.authInfo,
                parsedBody: o?.parsedBody
            });
        }, {
            overrideGlobalObjects: false
        });
    }
    get sessionId() {
        return this._webStandardTransport.sessionId;
    }
    set onclose(e) {
        this._webStandardTransport.onclose = e;
    }
    get onclose() {
        return this._webStandardTransport.onclose;
    }
    set onerror(e) {
        this._webStandardTransport.onerror = e;
    }
    get onerror() {
        return this._webStandardTransport.onerror;
    }
    set onmessage(e) {
        this._webStandardTransport.onmessage = e;
    }
    get onmessage() {
        return this._webStandardTransport.onmessage;
    }
    async start() {
        return this._webStandardTransport.start();
    }
    async close() {
        return this._webStandardTransport.close();
    }
    async send(e, r) {
        return this._webStandardTransport.send(e, r);
    }
    async handleRequest(e, r, parsedBody) {
        let e_auth = e.auth;
        await D(async (i)=>this._webStandardTransport.handleRequest(i, {
                authInfo: e_auth,
                parsedBody
            }), {
            overrideGlobalObjects: false
        })(e, r);
    }
    closeSSEStream(e) {
        this._webStandardTransport.closeSSEStream(e);
    }
    closeStandaloneSSEStream() {
        this._webStandardTransport.closeStandaloneSSEStream();
    }
}
const Q = "127.0.0.1";
async function ve({ port, debug, verbose, session, storageV5, resultFormat = "raw", launchSettings, authToken = randomBytes(32).toString("hex") }) {
    if (authToken.length < 32) {
        throw Error("auth token must be at least 32 characters");
    }
    let m = `Bearer ${authToken}`;
    let h;
    let p = createServer((f, y)=>{
        if (!we(f.headers.host) || f.headers.origin !== undefined) {
            y.writeHead(403).end();
            return;
        }
        if (f.method === "GET" && f.url === "/health") {
            y.writeHead(200, {
                "Content-Type": "application/json"
            });
            y.end('{"status":"ok"}');
            return;
        }
        if (!fH(f.headers.authorization, m)) {
            y.writeHead(401).end();
            return;
        }
        (async ()=>{
            if (f.method === "POST" && f.headers["mcp-session-id"] === undefined) {
                await h?.transport.close();
            }
            if (h === undefined) {
                let P = {
                    server: wVn(debug, verbose, session, "http", storageV5, resultFormat, launchSettings),
                    transport: new M({
                        sessionIdGenerator: ()=>randomUUID()
                    })
                };
                P.transport.onclose = ()=>{
                    if (h === P) {
                        h = undefined;
                    }
                };
                h = P;
                await P.server.connect(P.transport);
            }
            let S = new AbortController;
            y.once("close", ()=>{
                if (!y.writableFinished) {
                    S.abort();
                }
            });
            Object.assign(f, {
                auth: {
                    token: "",
                    clientId: "",
                    scopes: [],
                    extra: {
                        [Ein]: S.signal
                    }
                }
            });
            await h.transport.handleRequest(f, y);
        })().catch((S)=>{
            t(`mcp serve http: handleRequest failed: ${S}`, {
                level: "error"
            });
            if (!y.headersSent) {
                y.writeHead(500);
            }
            y.end();
        });
    });
    let b = new Set;
    p.on("connection", (f)=>{
        b.add(f);
        f.once("close", ()=>b.delete(f));
    });
    let boundPort = await new Promise((resolve, reject)=>{
        p.once("error", reject);
        p.listen(port, Q, ()=>{
            p.removeListener("error", reject);
            let S = p.address();
            resolve(typeof S === "object" && S !== null ? S.port : port);
        });
    });
    p.on("error", c);
    return {
        boundPort,
        url: `http://${Q}:${boundPort}/`,
        authToken,
        close: async ()=>{
            await h?.server.close();
            for (let f of b){
                f.destroy();
            }
            await new Promise((resolve)=>p.close(()=>resolve()));
        }
    };
}
export async function startMCPServerHttp(e, r) {
    sp(e);
    _Te();
    let vz_CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN = vz.CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN;
    vz.unset("CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN");
    a.unset("CLAUDE_CODE_SYNC_PLUGIN_INSTALL");
    let s = r.sessionTunnelEnvelope === undefined ? undefined : await import("/$bunfs/root/chunk-msw0adhh.js");
    let n = await ve({
        ...r,
        session: B(),
        authToken: s ? undefined : vz_CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN
    }).catch((d)=>{
        throw s && v(d) === "EADDRINUSE" ? new s.ToolServerPortTakenError(l(d)) : d;
    });
    St(n.close);
    process.stdout.write(`MCP server listening on ${n.url}
`);
    if (s && r.sessionTunnelEnvelope !== undefined) {
        let d = s.startSessionTunnel(n, r.sessionTunnelEnvelope);
        St(async ()=>d.stop());
    } else if (vz_CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN === undefined) {
        process.stdout.write(`MCP server auth token: ${n.authToken}
`);
    }
    t(`mcp serve --transport http listening on ${n.url}`);
    let i = B();
    let u = ME(r.storageV5);
    uL();
    if (Xae(i)) {
        Ave(i, r.storageV5, u);
    }
    PAe();
    if (aVt(i)) {
        WGe(i, u);
    }
    mIr(i, r.storageV5, u);
}
function we(host) {
    if (host === undefined || /[\s@/?#\\]/.test(host)) {
        return false;
    }
    try {
        return Xk(new URL(`http://${host}`).hostname);
    } catch  {
        return false;
    }
}
