import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Uw, jv } from "/$bunfs/root/chunk-55x53sfe.js";
import { l0 } from "/$bunfs/root/chunk-f0v3xmb1.js";
import Re from "net";
import { request } from "http";
const ve = new Set([
    204,
    205,
    304
]);
function se(port, path, { method, headers, body, signal }) {
    let method_1 = method.toUpperCase();
    if (method_1 !== "POST" && method_1 !== "GET" && method_1 !== "DELETE") {
        return Promise.reject(Error("only POST, GET and DELETE are relayed"));
    }
    for (let R of [
        "content-length",
        "transfer-encoding",
        "connection"
    ]){
        headers.delete(R);
    }
    return new Promise((resolve, reject)=>{
        let w = request({
            host: "127.0.0.1",
            port,
            path,
            method: method_1,
            headers: Object.fromEntries(headers),
            signal,
            agent: false
        }, (P)=>{
            try {
                resolve(Ee(P));
            } catch (error) {
                P.destroy();
                reject(error);
            }
        });
        w.once("error", reject);
        w.once("close", ()=>reject(Error("closed unanswered")));
        w.end(method_1 === "POST" ? body : undefined);
    });
}
function Ee(r) {
    if (r.statusCode === undefined || r.statusCode < 200) {
        throw Error("no final status");
    }
    let c = new Headers;
    for(let y = 0; y + 1 < r.rawHeaders.length; y += 2){
        c.append(r.rawHeaders[y], r.rawHeaders[y + 1]);
    }
    let u = ve.has(r.statusCode ?? 0);
    let g = new Response(u ? null : Ie(r), {
        status: r.statusCode,
        statusText: r.statusMessage,
        headers: c
    });
    if (u) {
        r.resume();
    }
    return g;
}
function Ie(r) {
    let c = r[Symbol.asyncIterator]();
    return new ReadableStream({
        async pull (u) {
            let g = await c.next();
            if (g.done) {
                u.close();
            } else {
                u.enqueue(g.value);
            }
        },
        async cancel () {
            await c.return?.();
        }
    });
}
const ke = "/anthropic.ccr.api.v1alpha2.tunnel.TunnelService/TunnelProxy";
const ie = 1000;
const ae = 30000;
const We = 10;
const Pe = 5000;
const Ne = 10000;
const le = 30000;
const Ce = 75000;
const Oe = 1048576;
function Ae(r) {
    let c = r instanceof Uint8Array ? Buffer.from(r).toString("latin1") : "";
    if (/^\d{1,15}$/.test(c)) {
        return Number(c);
    }
    return -1;
}
const $e = "preview_tunnel_liveness_would_have_fired";
const ue = 32768;
const Me = 4194304;
const Le = 1048576;
const De = 50;
const He = 30000;
const xe = "/__control/status";
const Be = 2000;
const ce = new Set([
    "cookie",
    "authorization",
    "proxy-authorization",
    "referer"
]);
const qe = 10000;
const de = 8;
const Ue = 64;
function Fe(apiBaseUrl) {
    return apiBaseUrl.replace(/^http/, "ws").replace(/\/+$/, "") + ke;
}
function Ge(accessToken, sessionId) {
    let u = l0(accessToken);
    if (u !== null && typeof u === "object" && "session_id" in u && typeof u.session_id === "string" && u.session_id.length > 0) {
        return u.session_id;
    }
    return sessionId;
}
const Z = "tunnel request does not name this session";
function Ve(headers, port) {
    if (!Array.isArray(headers)) {
        return false;
    }
    let u = headers.filter((g)=>typeof g?.name === "string" && g.name.toLowerCase() === "host");
    return u.length === 1 && u[0].value === `127.0.0.1:${port}`;
}
function Ye(sessionId, c) {
    let u = (g)=>g.slice(g.lastIndexOf("_") + 1);
    return u(sessionId) !== "" && u(sessionId) === u(c);
}
function fe(port, path, allowedPorts) {
    if (typeof port !== "number" || !Number.isInteger(port) || port < 1024 || port > 65535) {
        return `invalid port: ${port}`;
    }
    if (!allowedPorts.has(port)) {
        return `port ${port} is not in the --preview-port allowlist for this bridge`;
    }
    if (typeof path !== "string" || !path.startsWith("/")) {
        return "invalid path: must start with /";
    }
    return null;
}
const je = new Set([
    1004,
    1005,
    1006,
    1015
]);
function ze(reason) {
    return Je(reason ?? "").trim();
}
function Ke(r) {
    return r.includes("does not have live preview enabled") || r.includes(Xe);
}
var Xe = "tunnel:preview";
function Je(r) {
    return r.replace(/[\u0000-\u001f\u007f-\u009f\u200e\u200f\u2028\u2029\u202a-\u202e\u2066-\u2069]+/g, " ");
}
function ge(code) {
    if (typeof code !== "number" || code < 1000 || code > 4999 || je.has(code)) {
        return 1000;
    }
    return code;
}
function pe(reason) {
    if (!reason) {
        return "";
    }
    if (Buffer.byteLength(reason, "utf8") <= 123) {
        return reason;
    }
    return "";
}
function Qe(port) {
    return new Promise((resolve)=>{
        let u = false;
        let g = (E)=>{
            if (u) {
                return;
            }
            u = true;
            y.destroy();
            resolve(E);
        };
        let y = Re.createConnection({
            host: "127.0.0.1",
            port
        });
        y.setTimeout(Be);
        y.once("connect", ()=>g(true));
        y.once("error", ()=>g(false));
        y.once("timeout", ()=>g(false));
    });
}
function wFo(r) {
    let c = Fe(r.apiBaseUrl);
    let { accessToken, sessionId } = r;
    let y = false;
    let E = false;
    let b = null;
    let R = null;
    let I = null;
    let w = null;
    let P = ie;
    let N = 0;
    let O = 0;
    let Y = false;
    let A = 0;
    let x = 0;
    let j = 0;
    let F = 0;
    let G = false;
    let consecutive_failures = 0;
    let L = false;
    let z = false;
    let W = new Map;
    let T = new Map;
    let f = (o, level = "info")=>t(`[bridge:preview-tunnel] ${o}`, {
            level
        });
    function k(o) {
        let e = b;
        if (!e || e.readyState !== WebSocket.OPEN) {
            return;
        }
        try {
            let n = _(o);
            e.send(n);
            x += n.length;
        } catch (error) {
            f(`send failed: ${l(error)}`, "error");
        }
    }
    function q(o, e) {
        k({
            httpError: {
                requestId: o,
                errorMessage: e
            }
        });
    }
    function ee(signal) {
        let e = b;
        if (!e || e.readyState !== WebSocket.OPEN || e.bufferedAmount <= Me) {
            return Promise.resolve();
        }
        return new Promise((resolve)=>{
            let a = setInterval(()=>{
                if (E || signal.aborted || b !== e || e.readyState !== WebSocket.OPEN || e.bufferedAmount <= Le) {
                    clearInterval(a);
                    resolve();
                }
            }, De);
        });
    }
    async function me(o, httpRequest) {
        let port = 0;
        try {
            let v = httpRequest.body !== undefined && httpRequest.body !== "" ? Buffer.from(httpRequest.body, "base64").toString("utf8") : "{}";
            let C = X(v);
            if (C !== null && typeof C.port === "number") {
                port = C.port;
            }
        } catch (error) {
            f(`control/status: bad body: ${l(error)}`, "error");
        }
        let a = Number.isInteger(port) && port >= 1024 && port <= 65535 && r.allowedPorts.has(port);
        let listening = a ? await Qe(port) : false;
        f(`control/status port=${port} permitted=${a} listening=${listening}`);
        k({
            httpHeaders: {
                requestId: o,
                statusCode: 200,
                statusText: "OK",
                headers: [
                    {
                        name: "Content-Type",
                        value: "application/x-ndjson"
                    }
                ],
                sequenceNumber: 0
            }
        });
        let H = _({
            type: "result",
            status: 200,
            data: {
                listening,
                port
            }
        }) + `
`;
        k({
            httpChunk: {
                requestId: o,
                data: Buffer.from(H, "utf8").toString("base64"),
                isFinal: true,
                sequenceNumber: 1
            }
        });
    }
    async function be(httpRequest) {
        let o_requestId = httpRequest.requestId;
        if (!o_requestId) {
            return;
        }
        if (r.toolServer === undefined && httpRequest.port === 0 && httpRequest.path === xe && (httpRequest.method ?? "").toUpperCase() === "POST") {
            await me(o_requestId, httpRequest);
            return;
        }
        let n = fe(httpRequest.port, httpRequest.path, r.allowedPorts);
        if (n) {
            q(o_requestId, n);
            return;
        }
        let { port, path } = httpRequest;
        let method = httpRequest.method ?? "GET";
        if (port === r.toolServer?.port && !Ve(httpRequest.headers, port)) {
            q(o_requestId, `Host is not 127.0.0.1:${port}, which CCR's route to the tool server sends`);
            return;
        }
        let v = new AbortController;
        W.set(o_requestId, v);
        let C = setTimeout((s)=>s.abort(), He, v);
        let p;
        try {
            let s = new Headers;
            for (let h of httpRequest.headers ?? []){
                if (!h.name || ce.has(h.name.toLowerCase())) {
                    continue;
                }
                s.append(h.name, h.value ?? "");
            }
            s.set("Host", `127.0.0.1:${port}`);
            if (port === r.toolServer?.port) {
                s.set("Authorization", `Bearer ${r.toolServer.authToken}`);
            }
            let body = httpRequest.body !== undefined && httpRequest.body !== "" ? Buffer.from(httpRequest.body, "base64") : undefined;
            p = port === r.toolServer?.port ? await se(port, path, {
                method,
                headers: s,
                body,
                signal: v.signal
            }) : await fetch(`http://127.0.0.1:${port}${path}`, {
                method,
                headers: s,
                body,
                redirect: "manual",
                signal: v.signal
            });
        } catch (error) {
            clearTimeout(C);
            W.delete(o_requestId);
            q(o_requestId, l(error));
            return;
        }
        clearTimeout(C);
        let U = [];
        p.headers.forEach((value, name)=>{
            U.push({
                name,
                value
            });
        });
        let sequenceNumber = 0;
        k({
            httpHeaders: {
                requestId: o_requestId,
                statusCode: p.status,
                statusText: p.statusText || String(p.status),
                headers: U,
                sequenceNumber
            }
        });
        sequenceNumber++;
        try {
            if (p.body) {
                let s = p.body.getReader();
                while(true){
                    await ee(v.signal);
                    if (v.signal.aborted) {
                        await s.cancel();
                        break;
                    }
                    let m = await s.read();
                    if (m.value && m.value.length > 0) {
                        for(let h = 0; h < m.value.length; h += ue){
                            let Q = m.value.subarray(h, h + ue);
                            k({
                                httpChunk: {
                                    requestId: o_requestId,
                                    data: Buffer.from(Q).toString("base64"),
                                    isFinal: false,
                                    sequenceNumber
                                }
                            });
                            sequenceNumber++;
                        }
                    }
                    if (m.done) {
                        break;
                    }
                    if (v.signal.aborted) {
                        await s.cancel();
                        break;
                    }
                }
            }
            k({
                httpChunk: {
                    requestId: o_requestId,
                    data: "",
                    isFinal: true,
                    sequenceNumber
                }
            });
        } catch (error) {
            q(o_requestId, `error reading response body: ${l(error)}`);
        } finally{
            W.delete(o_requestId);
        }
    }
    function D(tunnelId, e) {
        k({
            wsError: {
                tunnelId,
                errorMessage: e
            }
        });
    }
    function M(tunnelId, e) {
        let n = T.get(tunnelId);
        if (!n) {
            return;
        }
        T.delete(tunnelId);
        if (n.dialTimer) {
            clearTimeout(n.dialTimer);
            n.dialTimer = null;
        }
        n.abort.abort();
        n.pending.length = 0;
        if (!n.terminated && e) {
            n.terminated = true;
            if ("error" in e) {
                D(tunnelId, e.error);
            } else {
                k({
                    wsClose: {
                        tunnelId,
                        ...e.close
                    }
                });
            }
        }
        try {
            n.sock.close();
        } catch  {}
    }
    async function he(o) {
        let e = T.get(o);
        if (!e || e.flushing) {
            return;
        }
        e.flushing = true;
        try {
            while(e.pending.length > 0 && T.get(o) === e){
                await ee(e.abort.signal);
                if (e.abort.signal.aborted || T.get(o) !== e) {
                    return;
                }
                let n = e.pending.shift();
                if (n) {
                    k(n);
                }
            }
        } finally{
            e.flushing = false;
        }
    }
    function ye(wsOpen) {
        let o_tunnelId = wsOpen.tunnelId;
        if (!o_tunnelId) {
            return;
        }
        if (!r.isHmrEnabled?.()) {
            D(o_tunnelId, "WebSocket tunnel is not enabled for this session");
            return;
        }
        M(o_tunnelId);
        if (T.size >= de) {
            D(o_tunnelId, `too many concurrent WebSocket tunnels (max ${de})`);
            return;
        }
        let n = fe(wsOpen.port, wsOpen.path, r.allowedPorts);
        if (n) {
            D(o_tunnelId, n);
            return;
        }
        let { port, path } = wsOpen;
        let H = new Set([
            "host",
            "connection",
            "upgrade",
            "sec-websocket-key",
            "sec-websocket-version",
            "sec-websocket-protocol",
            "sec-websocket-extensions"
        ]);
        let v = {};
        for (let s of wsOpen.headers ?? []){
            if (!s.name) {
                continue;
            }
            let m = s.value ?? "";
            if (/[\r\n\0]/.test(s.name) || /[\r\n\0]/.test(m)) {
                continue;
            }
            let h = s.name.toLowerCase();
            if (ce.has(h) || H.has(h)) {
                continue;
            }
            v[s.name] = m;
        }
        let protocols = (wsOpen.protocols ?? []).filter((s)=>!/[\r\n\0]/.test(s));
        let sock;
        try {
            sock = new globalThis.WebSocket(`ws://127.0.0.1:${port}${path}`, {
                headers: v,
                protocols
            });
        } catch (error) {
            D(o_tunnelId, `WebSocket dial failed: ${l(error)}`);
            return;
        }
        sock.binaryType = "arraybuffer";
        let abort = new AbortController;
        let d = {
            sock,
            abort,
            dialTimer: null,
            nextSeq: 0,
            pending: [],
            flushing: false,
            terminated: false
        };
        T.set(o_tunnelId, d);
        d.dialTimer = setTimeout((s)=>{
            s.abort.abort();
            try {
                s.sock.close();
            } catch  {}
        }, qe, d);
        abort.signal.addEventListener("abort", ()=>{
            if (T.get(o_tunnelId) !== d) {
                return;
            }
            sock.onopen = sock.onmessage = sock.onerror = sock.onclose = null;
            M(o_tunnelId, {
                error: `WebSocket dial to 127.0.0.1:${port} timed out`
            });
        }, {
            once: true
        });
        sock.onopen = ()=>{
            if (d.dialTimer) {
                clearTimeout(d.dialTimer);
                d.dialTimer = null;
            }
            if (T.get(o_tunnelId) !== d) {
                return;
            }
            k({
                wsOpened: {
                    tunnelId: o_tunnelId,
                    protocol: sock.protocol ?? ""
                }
            });
            f(`ws tunnel opened id=${o_tunnelId} port=${port}`);
        };
        sock.onmessage = (s)=>{
            if (T.get(o_tunnelId) !== d || d.terminated) {
                return;
            }
            let m;
            let isBinary;
            if (typeof s.data === "string") {
                m = Buffer.from(s.data, "utf8").toString("base64");
                isBinary = false;
            } else if (s.data instanceof ArrayBuffer) {
                m = Buffer.from(s.data).toString("base64");
                isBinary = true;
            } else {
                f(`ws tunnel ${o_tunnelId}: dropping unsupported message type`, "error");
                return;
            }
            d.nextSeq++;
            d.pending.push({
                wsMessage: {
                    tunnelId: o_tunnelId,
                    data: m,
                    isBinary,
                    sequenceNumber: d.nextSeq
                }
            });
            if (d.pending.length > Ue) {
                M(o_tunnelId, {
                    error: "backpressure queue overflow; closing WebSocket tunnel"
                });
                return;
            }
            he(o_tunnelId).catch((Q)=>f(`ws flush failed: ${l(Q)}`, "error"));
        };
        sock.onerror = ()=>{};
        sock.onclose = (s)=>{
            let m = d.dialTimer != null;
            if (d.dialTimer) {
                clearTimeout(d.dialTimer);
                d.dialTimer = null;
            }
            if (T.get(o_tunnelId) !== d) {
                return;
            }
            if (m) {
                M(o_tunnelId, {
                    error: `WebSocket dial to 127.0.0.1:${port} failed (close code ${s.code})`
                });
                return;
            }
            M(o_tunnelId, {
                close: {
                    code: ge(s.code),
                    reason: pe(s.reason)
                }
            });
        };
    }
    function Te(wsMessage) {
        let o_tunnelId = wsMessage.tunnelId;
        if (!o_tunnelId) {
            return;
        }
        let n = T.get(o_tunnelId);
        if (!n || n.sock.readyState !== WebSocket.OPEN) {
            return;
        }
        try {
            let a = Buffer.from(wsMessage.data ?? "", "base64");
            if (wsMessage.isBinary) {
                n.sock.send(a);
            } else {
                n.sock.send(a.toString("utf8"));
            }
        } catch (error) {
            M(o_tunnelId, {
                error: `write to local WebSocket failed: ${l(error)}`
            });
        }
    }
    function we(wsClose) {
        let o_tunnelId = wsClose.tunnelId;
        if (!o_tunnelId) {
            return;
        }
        let n = T.get(o_tunnelId);
        if (!n) {
            return;
        }
        n.terminated = true;
        T.delete(o_tunnelId);
        if (n.dialTimer) {
            clearTimeout(n.dialTimer);
            n.dialTimer = null;
        }
        n.abort.abort();
        n.pending.length = 0;
        try {
            n.sock.close(ge(wsClose.code), pe(wsClose.reason));
        } catch  {
            try {
                n.sock.close();
            } catch  {}
        }
    }
    function ne() {
        for (let o of [
            ...T.keys()
        ]){
            M(o);
        }
    }
    function Se(o) {
        let e;
        try {
            e = X(o);
        } catch (error) {
            f(`failed to parse tunnel request: ${l(error)}`, "error");
            return;
        }
        if (typeof e !== "object" || e === null) {
            f("tunnel request is not an object", "error");
            return;
        }
        if (typeof e.sessionId !== "string" || !Ye(e.sessionId, sessionId)) {
            if (!y) {
                y = true;
                f(`${Z}; ${r.toolServer ? "refused" : "served all the same"}`, "error");
                i("tengu_preview_tunnel_other_session", {
                    enforce: r.toolServer !== undefined
                });
            }
            if (r.toolServer !== undefined) {
                if (e.httpRequest?.requestId) {
                    q(e.httpRequest.requestId, Z);
                } else if (e.wsOpen?.tunnelId) {
                    D(e.wsOpen.tunnelId, Z);
                }
                return;
            }
        }
        if (e.httpRequest) {
            be(e.httpRequest).catch((n)=>f(`handleHttpRequest failed: ${l(n)}`, "error"));
        } else if (e.httpCancel) {
            let n = e.httpCancel.requestId;
            if (n) {
                W.get(n)?.abort();
                W.delete(n);
            }
        } else if (e.wsOpen) {
            ye(e.wsOpen);
        } else if (e.wsMessage) {
            Te(e.wsMessage);
        } else if (e.wsClose) {
            we(e.wsClose);
        } else if (e.ptyOpen) {
            k({
                ptyError: {
                    tunnelId: e.ptyOpen.tunnelId ?? "",
                    errorMessage: "PTY tunnel not supported by bridge worker"
                }
            });
        }
    }
    function te(o, e) {
        if (E) {
            return;
        }
        E = true;
        if (I) {
            clearTimeout(I);
            I = null;
        }
        f(`permanent failure (${e}): ${o}`, "error");
        i("tengu_preview_tunnel_permanent_failure", {
            consecutive_failures,
            policy_refusal: e === "policy"
        });
        r.onPermanentFailure?.(o, e);
    }
    function K() {
        consecutive_failures++;
        if (r.onPermanentFailure && consecutive_failures >= We) {
            te(`${`${consecutive_failures} consecutive failed or short-lived `}connections — relay unreachable or refusing`, "exhausted");
            return true;
        }
        return false;
    }
    function V() {
        if (E) {
            return;
        }
        if (N > 0 && Date.now() - N > ae) {
            P = ie;
        }
        N = 0;
        L = false;
        let o = P + Math.floor(Math.random() * (P / 2));
        f(`reconnecting in ${o}ms`);
        I = setTimeout(oe, o);
        P = Math.min(P * 2, ae);
    }
    function re(o) {
        if (w) {
            clearTimeout(w);
            w = null;
        }
        if (R) {
            clearInterval(R);
            R = null;
        }
        for (let e of W.values()){
            e.abort();
        }
        W.clear();
        ne();
        if (b === o) {
            b = null;
        }
    }
    function J(o, e) {
        f(`${e}; forcing reconnect`, "error");
        o.onopen = o.onmessage = o.onerror = o.onclose = null;
        re(o);
        try {
            let n = o.terminate;
            if (typeof n === "function") {
                n.call(o);
            } else {
                o.close();
            }
        } catch  {}
        V();
    }
    function oe() {
        if (E) {
            return;
        }
        I = null;
        sessionId = Ge(accessToken, r.sessionId);
        let headers = {
            Authorization: `Bearer ${accessToken}`,
            "x-session-id": sessionId
        };
        let e;
        try {
            e = new globalThis.WebSocket(c, {
                headers,
                proxy: jv(c),
                tls: r.toolServer ? {
                    ...Uw(),
                    rejectUnauthorized: true
                } : Uw() || undefined
            });
        } catch (error) {
            f(`WebSocket construct failed: ${l(error)}`, "error");
            if (K()) {
                return;
            }
            V();
            return;
        }
        b = e;
        w = setTimeout((n)=>{
            f("open timeout; retrying", "error");
            n.onopen = n.onmessage = n.onerror = n.onclose = null;
            try {
                n.close();
            } catch  {}
            if (b === n) {
                b = null;
            }
            if (K()) {
                return;
            }
            V();
        }, Ne, e);
        e.onopen = ()=>{
            if (w) {
                clearTimeout(w);
                w = null;
            }
            f(`connected session=${r.sessionId}`);
            N = Date.now();
            O = Date.now();
            Y = false;
            A = 0;
            x = 0;
            j = 0;
            F = 0;
            G = false;
            L = false;
            let n = e;
            n.addEventListener?.("ping", ()=>{
                O = Date.now();
                L = true;
            });
            n.addEventListener?.("pong", (a)=>{
                O = Date.now();
                L = true;
                Y = true;
                A = 0;
                let S = Ae(a?.data);
                if (S > F && S <= x) {
                    F = S;
                }
            });
            R = setInterval(()=>{
                if (e.readyState !== WebSocket.OPEN) {
                    return;
                }
                if (r.livenessEnforce && r.quietLivenessPings !== undefined && Y && A >= r.quietLivenessPings && j - F < Oe) {
                    i("tengu_preview_tunnel_liveness_enforced_reconnect", {
                        idle_ms: A * le,
                        quiet: true
                    });
                    J(e, `${A} pings in a row unanswered (liveness deadline exceeded)`);
                    return;
                }
                if (Date.now() - O > (r.livenessDeadlineMs ?? Ce)) {
                    if (r.livenessEnforce) {
                        let a = Date.now() - O;
                        i("tengu_preview_tunnel_liveness_enforced_reconnect", {
                            idle_ms: a
                        });
                        J(e, `no peer activity for ${a}ms (liveness deadline exceeded)`);
                        return;
                    }
                    if (!G) {
                        let a = Date.now() - O;
                        f(`${$e}: no peer activity for ${a}ms (liveness deadline exceeded; observe-only, not reconnecting)`, "error");
                        i("tengu_preview_tunnel_liveness_would_have_fired", {
                            idle_ms: a,
                            enforce: false
                        });
                        G = true;
                    }
                } else {
                    G = false;
                }
                if (r.quietLivenessPings === undefined) {
                    n.ping?.();
                    return;
                }
                if (A === 0) {
                    j = x;
                }
                A++;
                n.ping?.(String(x));
            }, le);
        };
        e.onmessage = (n)=>{
            O = Date.now();
            L = true;
            let a = typeof n.data === "string" ? n.data : Buffer.from(n.data).toString("utf8");
            Se(a);
        };
        e.onerror = (n)=>{
            f(`error: ${"message" in n && typeof n.message === "string" ? n.message : "unknown"}`, "error");
        };
        e.onclose = (n)=>{
            let a = ze(n.reason);
            f(`closed code=${n.code} reason=${a || "(none)"}`);
            re(e);
            let S = L || N > 0 && Date.now() - N >= Pe;
            if (S) {
                consecutive_failures = 0;
                z = false;
            }
            if (n.code === 1008 && Ke(a)) {
                if (r.policyStopEnforce) {
                    te(`relay refused with close code 1008 (policy violation): ${a || "(no reason)"} \u2014 not retrying`, "policy");
                    return;
                }
                if (!z) {
                    z = true;
                    f(`POLICY_STOP_WOULD_HAVE_FIRED: capability-refusal 1008 (${a || "(no reason)"}); observe-only, retrying`, "error");
                    i("tengu_preview_tunnel_policy_stop_would_have_fired", {
                        enforce: false
                    });
                }
            }
            if (!S && K()) {
                return;
            }
            V();
        };
    }
    f(`starting session=${r.sessionId} url=${c}`);
    oe();
    return {
        updateAccessToken (o) {
            accessToken = o;
        },
        forceReconnect () {
            if (E || b === null) {
                return;
            }
            J(b, "caller requested");
        },
        stop () {
            if (E) {
                return;
            }
            E = true;
            if (I) {
                clearTimeout(I);
                I = null;
            }
            if (w) {
                clearTimeout(w);
                w = null;
            }
            if (R) {
                clearInterval(R);
                R = null;
            }
            for (let o of W.values()){
                o.abort();
            }
            W.clear();
            ne();
            try {
                b?.close();
            } catch  {}
            b = null;
            f(`stopped session=${r.sessionId}`);
        }
    };
}
export { wFo };
