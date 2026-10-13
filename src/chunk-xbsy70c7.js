import { frn } from "/$bunfs/root/chunk-9fa34ggx.js";
import { Se, C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const I = C(function(c) {
    const ee = c && c.__createBinding || (Object.create ? (e, t, n, r = n)=>{
        let o = Object.getOwnPropertyDescriptor(t, n);
        if (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) {
            o = {
                enumerable: true,
                get: function() {
                    return t[n];
                }
            };
        }
        Object.defineProperty(e, r, o);
    } : (e, t, n, r = n)=>{
        e[r] = t[n];
    });
    const te = c && c.__setModuleDefault || (Object.create ? (e, t)=>{
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : (e, t)=>{
        e.default = t;
    });
    const M = c && c.__importStar || ((e)=>{
        if (e && e.__esModule) {
            return e;
        }
        const t = {};
        if (e != null) {
            for(const n in e){
                if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) {
                    ee(t, e, n);
                }
            }
        }
        te(t, e);
        return t;
    });
    Object.defineProperty(c, "__esModule", {
        value: true
    });
    c.req = c.json = c.toBuffer = undefined;
    const ne = M(Le("http"));
    const re = M(Le("https"));
    async function T(e) {
        let t = 0;
        let n = [];
        for await (let r of e){
            t += r.length;
            n.push(r);
        }
        return Buffer.concat(n, t);
    }
    c.toBuffer = T;
    async function oe(e) {
        let n = (await T(e)).toString("utf8");
        try {
            return JSON.parse(n);
        } catch (error) {
            let o = error;
            o.message += ` (input: ${n})`;
            throw o;
        }
    }
    c.json = oe;
    function se(e, t = {}) {
        let r = ((typeof e === "string" ? e : e.href).startsWith("https:") ? re : ne).request(e, t);
        let o = new Promise((resolve, reject)=>{
            r.once("response", resolve).once("error", reject).end();
        });
        r.then = o.then.bind(o);
        return r;
    }
    c.req = se;
});
const STo = C(function(u) {
    const B = u && u.__createBinding || (Object.create ? (e, t, n, r = n)=>{
        let o = Object.getOwnPropertyDescriptor(t, n);
        if (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) {
            o = {
                enumerable: true,
                get: function() {
                    return t[n];
                }
            };
        }
        Object.defineProperty(e, r, o);
    } : (e, t, n, r = n)=>{
        e[r] = t[n];
    });
    const ie = u && u.__setModuleDefault || (Object.create ? (e, t)=>{
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : (e, t)=>{
        e.default = t;
    });
    const D = u && u.__importStar || ((e)=>{
        if (e && e.__esModule) {
            return e;
        }
        const t = {};
        if (e != null) {
            for(const n in e){
                if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) {
                    B(t, e, n);
                }
            }
        }
        ie(t, e);
        return t;
    });
    const ce = u && u.__exportStar || ((e, t)=>{
        for(const n in e){
            if (n !== "default" && !Object.prototype.hasOwnProperty.call(t, n)) {
                B(t, e, n);
            }
        }
    });
    Object.defineProperty(u, "__esModule", {
        value: true
    });
    u.Agent = undefined;
    const ue = D(Le("net"));
    const q = D(Le("http"));
    const L = Le("https");
    ce(I(), u);
    const d = Symbol("AgentBaseInternalState");
    class k extends q.Agent {
        constructor(e){
            super(e);
            this[d] = {};
        }
        isSecureEndpoint(e) {
            if (e) {
                if (typeof e.secureEndpoint === "boolean") {
                    return e.secureEndpoint;
                }
                if (typeof e.protocol === "string") {
                    return e.protocol === "https:";
                }
            }
            let { stack } = Error();
            if (typeof stack !== "string") {
                return false;
            }
            return stack.split(`
`).some((n)=>n.indexOf("(https.js:") !== -1 || n.indexOf("node:https:") !== -1);
        }
        incrementSockets(e) {
            if (this.maxSockets === Infinity && this.maxTotalSockets === Infinity) {
                return null;
            }
            if (!this.sockets[e]) {
                this.sockets[e] = [];
            }
            let t = new ue.Socket({
                writable: false
            });
            this.sockets[e].push(t);
            this.totalSocketCount++;
            return t;
        }
        decrementSockets(e, t) {
            if (!this.sockets[e] || t === null) {
                return;
            }
            let n = this.sockets[e];
            let r = n.indexOf(t);
            if (r !== -1) {
                n.splice(r, 1);
                this.totalSocketCount--;
                if (n.length === 0) {
                    delete this.sockets[e];
                }
            }
        }
        getName(e) {
            if (typeof e.secureEndpoint === "boolean" ? e.secureEndpoint : this.isSecureEndpoint(e)) {
                return L.Agent.prototype.getName.call(this, e);
            }
            return super.getName(e);
        }
        createSocket(e, t, n) {
            let r = {
                ...t,
                secureEndpoint: this.isSecureEndpoint(t)
            };
            let o = this.getName(r);
            let s = this.incrementSockets(o);
            Promise.resolve().then(()=>this.connect(e, r)).then((i)=>{
                this.decrementSockets(o, s);
                if (i instanceof q.Agent) {
                    try {
                        return i.addRequest(e, r);
                    } catch (error) {
                        return n(error);
                    }
                }
                this[d].currentSocket = i;
                super.createSocket(e, t, n);
            }, (i)=>{
                this.decrementSockets(o, s);
                n(i);
            });
        }
        createConnection() {
            let currentSocket = this[d].currentSocket;
            this[d].currentSocket = undefined;
            if (!currentSocket) {
                throw Error("No socket was returned in the `connect()` function");
            }
            return currentSocket;
        }
        get defaultPort() {
            return this[d].defaultPort ?? (this.protocol === "https:" ? 443 : 80);
        }
        set defaultPort(e) {
            if (this[d]) {
                this[d].defaultPort = e;
            }
        }
        get protocol() {
            return this[d].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
        }
        set protocol(e) {
            if (this[d]) {
                this[d].protocol = e;
            }
        }
    }
    u.Agent = k;
});
const U = C(function(y) {
    const ae = y && y.__importDefault || ((e)=>{
        if (e && e.__esModule) {
            return e;
        }
        return {
            default: e
        };
    });
    Object.defineProperty(y, "__esModule", {
        value: true
    });
    y.parseProxyResponse = undefined;
    const fe = ae(frn());
    const P = fe.default("https-proxy-agent:parse-proxy-response");
    function le(e) {
        return new Promise((resolve, reject)=>{
            let r = 0;
            let o = [];
            function s() {
                let l = e.read();
                if (l) {
                    S(l);
                } else {
                    e.once("readable", s);
                }
            }
            function i() {
                e.removeListener("end", h);
                e.removeListener("error", p);
                e.removeListener("readable", s);
            }
            function h() {
                i();
                P("onend");
                reject(Error("Proxy connection ended before receiving CONNECT response"));
            }
            function p(l) {
                i();
                P("onerror %o", l);
                reject(l);
            }
            function S(l) {
                o.push(l);
                r += l.length;
                let buffered = Buffer.concat(o, r);
                let H = buffered.indexOf(`\r
\r
`);
                if (H === -1) {
                    P("have not received end of HTTP headers yet...");
                    s();
                    return;
                }
                let A = buffered.slice(0, H).toString("ascii").split(`\r
`);
                let w = A.shift();
                if (!w) {
                    e.destroy();
                    return reject(Error("No header received from proxy CONNECT response"));
                }
                let R = w.split(" ");
                let statusCode = +R[1];
                let statusText = R.slice(2).join(" ");
                let headers = {};
                for (let g of A){
                    if (!g) {
                        continue;
                    }
                    let m = g.indexOf(":");
                    if (m === -1) {
                        e.destroy();
                        return reject(Error(`Invalid header from proxy CONNECT response: "${g}"`));
                    }
                    let x = g.slice(0, m).toLowerCase();
                    let E = g.slice(m + 1).trimStart();
                    let v = headers[x];
                    if (typeof v === "string") {
                        headers[x] = [
                            v,
                            E
                        ];
                    } else if (Array.isArray(v)) {
                        v.push(E);
                    } else {
                        headers[x] = E;
                    }
                }
                P("got proxy server response: %o %o", w, headers);
                i();
                resolve({
                    connect: {
                        statusCode,
                        statusText,
                        headers
                    },
                    buffered
                });
            }
            e.on("error", p);
            e.on("end", h);
            s();
        });
    }
    y.parseProxyResponse = le;
});
const Iut = C(function(f) {
    const de = f && f.__createBinding || (Object.create ? (e, t, n, r = n)=>{
        let o = Object.getOwnPropertyDescriptor(t, n);
        if (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) {
            o = {
                enumerable: true,
                get: function() {
                    return t[n];
                }
            };
        }
        Object.defineProperty(e, r, o);
    } : (e, t, n, r = n)=>{
        e[r] = t[n];
    });
    const he = f && f.__setModuleDefault || (Object.create ? (e, t)=>{
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : (e, t)=>{
        e.default = t;
    });
    const J = f && f.__importStar || ((e)=>{
        if (e && e.__esModule) {
            return e;
        }
        const t = {};
        if (e != null) {
            for(const n in e){
                if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) {
                    de(t, e, n);
                }
            }
        }
        he(t, e);
        return t;
    });
    const K = f && f.__importDefault || ((e)=>{
        if (e && e.__esModule) {
            return e;
        }
        return {
            default: e
        };
    });
    Object.defineProperty(f, "__esModule", {
        value: true
    });
    f.HttpsProxyAgent = undefined;
    const O = J(Le("net"));
    const W = J(Le("tls"));
    const pe = K(Le("assert"));
    const ye = K(frn());
    const X = STo();
    const Y = Le("url");
    const G = U();
    const b = ye.default("https-proxy-agent");
    const z = (e)=>{
        if (e.servername === undefined && e.host && !O.isIP(e.host)) {
            return {
                ...e,
                servername: e.host
            };
        }
        return e;
    };
    class j extends X.Agent {
        constructor(e, t){
            super(t);
            this.options = {
                path: undefined
            };
            this.proxy = typeof e === "string" ? new Y.URL(e) : e;
            this.proxyHeaders = t?.headers ?? {};
            b("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
            let host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, "");
            let port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
            this.connectOpts = {
                ALPNProtocols: [
                    "http/1.1"
                ],
                ...t ? F(t, "headers") : null,
                host,
                port
            };
        }
        async connect(e, t) {
            let { proxy } = this;
            if (!t.host) {
                throw TypeError('No "host" provided');
            }
            let socket;
            if (proxy.protocol === "https:") {
                b("Creating `tls.Socket`: %o", this.connectOpts);
                socket = W.connect(z(this.connectOpts));
            } else {
                b("Creating `net.Socket`: %o", this.connectOpts);
                socket = O.connect(this.connectOpts);
            }
            let o = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : {
                ...this.proxyHeaders
            };
            let s = O.isIPv6(t.host) ? `[${t.host}]` : t.host;
            let i = `CONNECT ${s}:${t.port} HTTP/1.1\r
`;
            if (proxy.username || proxy.password) {
                let a = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
                o["Proxy-Authorization"] = `Basic ${Buffer.from(a).toString("base64")}`;
            }
            o.Host = `${s}:${t.port}`;
            if (!o["Proxy-Connection"]) {
                o["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
            }
            for (let a of Object.keys(o)){
                i += `${a}: ${o[a]}\r
`;
            }
            let h = G.parseProxyResponse(socket);
            socket.write(`${i}\r
`);
            let { connect, buffered } = await h;
            e.emit("proxyConnect", connect);
            this.emit("proxyConnect", connect, e);
            if (connect.statusCode === 200) {
                e.once("socket", _e);
                if (t.secureEndpoint) {
                    b("Upgrading socket connection to TLS");
                    return W.connect({
                        ...F(z(t), "host", "path", "port"),
                        socket
                    });
                }
                return socket;
            }
            socket.destroy();
            let l = new O.Socket({
                writable: false
            });
            l.readable = true;
            e.once("socket", (a)=>{
                b("Replaying proxy buffer for failed request");
                pe.default(a.listenerCount("data") > 0);
                a.push(buffered);
                a.push(null);
            });
            return l;
        }
    }
    j.protocols = [
        "http",
        "https"
    ];
    f.HttpsProxyAgent = j;
    function _e(e) {
        e.resume();
    }
    function F(e, ...t) {
        let n = {};
        let r;
        for(r in e){
            if (!t.includes(r)) {
                n[r] = e[r];
            }
        }
        return n;
    }
});
const Q = Se(Iut(), 1);
class N extends Error {
    connectStatus;
    headers;
    code = "ERR_PROXY_TUNNEL";
    constructor(e, t){
        super("proxy refused the connection");
        this.connectStatus = e;
        this.headers = t;
        this.name = "ProxyConnectRefusedError";
    }
}
function mq(e) {
    if (e === 0) {
        return "unreadable reply";
    }
    return `HTTP ${e}`;
}
function AO(e) {
    for(let t = e, n = 0; n < 4; n++){
        if (t instanceof N) {
            return t;
        }
        if (typeof t !== "object" || t === null || !("cause" in t)) {
            return;
        }
        t = t.cause;
    }
}
class A5e extends Q.HttpsProxyAgent {
    async connect(...[e, t]) {
        let n;
        let r = (i)=>{
            if (i.statusCode !== 200) {
                n = i;
            }
        };
        e.once("proxyConnect", r);
        let o;
        try {
            o = await super.connect(e, t);
        } finally{
            e.removeListener("proxyConnect", r);
        }
        if (n === undefined) {
            return o;
        }
        o.destroy();
        let n_statusCode = n.statusCode;
        throw new N(Number.isInteger(n_statusCode) && n_statusCode >= 100 && n_statusCode <= 599 ? n_statusCode : 0, n.headers);
    }
}
export { STo, Iut, mq, AO, A5e };
