import { hWr, yX, fK, Zee, pEe, rL, FXn } from "/$bunfs/root/chunk-vw7x8ctj.js";
class NXn {
    constructor(e = {}){
        this._started = false;
        this._hasHandledRequest = false;
        this._streamMapping = new Map;
        this._requestToStreamMapping = new Map;
        this._requestResponseMap = new Map;
        this._initialized = false;
        this._enableJsonResponse = false;
        this._standaloneSseStreamId = "_GET_stream";
        this.sessionIdGenerator = e.sessionIdGenerator;
        this._enableJsonResponse = e.enableJsonResponse ?? false;
        this._eventStore = e.eventStore;
        this._onsessioninitialized = e.onsessioninitialized;
        this._onsessionclosed = e.onsessionclosed;
        this._allowedHosts = e.allowedHosts;
        this._allowedOrigins = e.allowedOrigins;
        this._enableDnsRebindingProtection = e.enableDnsRebindingProtection ?? false;
        this._retryInterval = e.retryInterval;
    }
    async start() {
        if (this._started) {
            throw Error("Transport already started");
        }
        this._started = true;
    }
    createJsonErrorResponse(status, code, message, i) {
        let error = {
            code,
            message
        };
        if (i?.data !== undefined) {
            error.data = i.data;
        }
        return new Response(JSON.stringify({
            jsonrpc: "2.0",
            error,
            id: null
        }), {
            status,
            headers: {
                "Content-Type": "application/json",
                ...i?.headers
            }
        });
    }
    validateRequestHeaders(e) {
        if (!this._enableDnsRebindingProtection) {
            return;
        }
        if (this._allowedHosts && this._allowedHosts.length > 0) {
            let t = e.headers.get("host");
            if (!t || !this._allowedHosts.includes(t)) {
                let s = `Invalid Host header: ${t}`;
                this.onerror?.(Error(s));
                return this.createJsonErrorResponse(403, -32000, s);
            }
        }
        if (this._allowedOrigins && this._allowedOrigins.length > 0) {
            let t = e.headers.get("origin");
            if (t && !this._allowedOrigins.includes(t)) {
                let s = `Invalid Origin header: ${t}`;
                this.onerror?.(Error(s));
                return this.createJsonErrorResponse(403, -32000, s);
            }
        }
    }
    async handleRequest(e, t) {
        if (!this.sessionIdGenerator && this._hasHandledRequest) {
            throw Error("Stateless transport cannot be reused across requests. Create a new transport per request.");
        }
        this._hasHandledRequest = true;
        let s = this.validateRequestHeaders(e);
        if (s) {
            return s;
        }
        switch(e.method){
            case "POST":
                return this.handlePostRequest(e, t);
            case "GET":
                return this.handleGetRequest(e);
            case "DELETE":
                return this.handleDeleteRequest(e);
            default:
                return this.handleUnsupportedRequest();
        }
    }
    async writePrimingEvent(e, t, s, i) {
        if (!this._eventStore) {
            return;
        }
        if (i < "2025-11-25") {
            return;
        }
        let r = await this._eventStore.storeEvent(s, {});
        let n = `id: ${r}
data: 

`;
        if (this._retryInterval !== undefined) {
            n = `id: ${r}
retry: ${this._retryInterval}
data: 

`;
        }
        e.enqueue(t.encode(n));
    }
    async handleGetRequest(e) {
        if (!e.headers.get("accept")?.includes("text/event-stream")) {
            this.onerror?.(Error("Not Acceptable: Client must accept text/event-stream"));
            return this.createJsonErrorResponse(406, -32000, "Not Acceptable: Client must accept text/event-stream");
        }
        let s = this.validateSession(e);
        if (s) {
            return s;
        }
        let i = this.validateProtocolVersion(e);
        if (i) {
            return i;
        }
        if (this._eventStore) {
            let l = e.headers.get("last-event-id");
            if (l) {
                return this.replayEvents(l);
            }
        }
        if (this._streamMapping.get(this._standaloneSseStreamId) !== undefined) {
            this.onerror?.(Error("Conflict: Only one SSE stream is allowed per session"));
            return this.createJsonErrorResponse(409, -32000, "Conflict: Only one SSE stream is allowed per session");
        }
        let encoder = new TextEncoder;
        let n;
        let o = new ReadableStream({
            start: (l)=>{
                n = l;
            },
            cancel: ()=>{
                this._streamMapping.delete(this._standaloneSseStreamId);
            }
        });
        let a = {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache, no-transform",
            Connection: "keep-alive"
        };
        if (this.sessionId !== undefined) {
            a["mcp-session-id"] = this.sessionId;
        }
        this._streamMapping.set(this._standaloneSseStreamId, {
            controller: n,
            encoder,
            cleanup: ()=>{
                this._streamMapping.delete(this._standaloneSseStreamId);
                try {
                    n.close();
                } catch  {}
            }
        });
        return new Response(o, {
            headers: a
        });
    }
    async replayEvents(e) {
        if (!this._eventStore) {
            this.onerror?.(Error("Event store not configured"));
            return this.createJsonErrorResponse(400, -32000, "Event store not configured");
        }
        try {
            let t;
            if (this._eventStore.getStreamIdForEventId) {
                t = await this._eventStore.getStreamIdForEventId(e);
                if (!t) {
                    this.onerror?.(Error("Invalid event ID format"));
                    return this.createJsonErrorResponse(400, -32000, "Invalid event ID format");
                }
                if (this._streamMapping.get(t) !== undefined) {
                    this.onerror?.(Error("Conflict: Stream already has an active connection"));
                    return this.createJsonErrorResponse(409, -32000, "Conflict: Stream already has an active connection");
                }
            }
            let s = {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache, no-transform",
                Connection: "keep-alive"
            };
            if (this.sessionId !== undefined) {
                s["mcp-session-id"] = this.sessionId;
            }
            let i = new TextEncoder;
            let r;
            let n = new ReadableStream({
                start: (a)=>{
                    r = a;
                },
                cancel: ()=>{}
            });
            let o = await this._eventStore.replayEventsAfter(e, {
                send: async (a, l)=>{
                    if (!this.writeSSEEvent(r, i, l, a)) {
                        this.onerror?.(Error("Failed replay events"));
                        try {
                            r.close();
                        } catch  {}
                    }
                }
            });
            this._streamMapping.set(o, {
                controller: r,
                encoder: i,
                cleanup: ()=>{
                    this._streamMapping.delete(o);
                    try {
                        r.close();
                    } catch  {}
                }
            });
            return new Response(n, {
                headers: s
            });
        } catch (error) {
            this.onerror?.(error);
            return this.createJsonErrorResponse(500, -32000, "Error replaying events");
        }
    }
    writeSSEEvent(e, t, s, i) {
        try {
            let r = `event: message
`;
            if (i) {
                r += `id: ${i}
`;
            }
            r += `data: ${JSON.stringify(s)}

`;
            e.enqueue(t.encode(r));
            return true;
        } catch (error) {
            this.onerror?.(error);
            return false;
        }
    }
    handleUnsupportedRequest() {
        this.onerror?.(Error("Method not allowed."));
        return new Response(JSON.stringify({
            jsonrpc: "2.0",
            error: {
                code: -32000,
                message: "Method not allowed."
            },
            id: null
        }), {
            status: 405,
            headers: {
                Allow: "GET, POST, DELETE",
                "Content-Type": "application/json"
            }
        });
    }
    async handlePostRequest(e, t) {
        try {
            let s = e.headers.get("accept");
            if (!s?.includes("application/json") || !s.includes("text/event-stream")) {
                this.onerror?.(Error("Not Acceptable: Client must accept both application/json and text/event-stream"));
                return this.createJsonErrorResponse(406, -32000, "Not Acceptable: Client must accept both application/json and text/event-stream");
            }
            let i = e.headers.get("content-type");
            if (!i || !i.includes("application/json")) {
                this.onerror?.(Error("Unsupported Media Type: Content-Type must be application/json"));
                return this.createJsonErrorResponse(415, -32000, "Unsupported Media Type: Content-Type must be application/json");
            }
            let requestInfo = {
                headers: Object.fromEntries(e.headers.entries()),
                url: new URL(e.url)
            };
            let n;
            if (t?.parsedBody !== undefined) {
                n = t.parsedBody;
            } else {
                try {
                    n = await e.json();
                } catch  {
                    this.onerror?.(Error("Parse error: Invalid JSON"));
                    return this.createJsonErrorResponse(400, -32700, "Parse error: Invalid JSON");
                }
            }
            let o;
            try {
                if (Array.isArray(n)) {
                    o = n.map((d)=>rL.parse(d));
                } else {
                    o = [
                        rL.parse(n)
                    ];
                }
            } catch  {
                this.onerror?.(Error("Parse error: Invalid JSON-RPC message"));
                return this.createJsonErrorResponse(400, -32700, "Parse error: Invalid JSON-RPC message");
            }
            let a = o.some(FXn);
            if (a) {
                if (this._initialized && this.sessionId !== undefined) {
                    this.onerror?.(Error("Invalid Request: Server already initialized"));
                    return this.createJsonErrorResponse(400, -32600, "Invalid Request: Server already initialized");
                }
                if (o.length > 1) {
                    this.onerror?.(Error("Invalid Request: Only one initialization request is allowed"));
                    return this.createJsonErrorResponse(400, -32600, "Invalid Request: Only one initialization request is allowed");
                }
                this.sessionId = this.sessionIdGenerator?.();
                this._initialized = true;
                if (this.sessionId && this._onsessioninitialized) {
                    await Promise.resolve(this._onsessioninitialized(this.sessionId));
                }
            }
            if (!a) {
                let d = this.validateSession(e);
                if (d) {
                    return d;
                }
                let h = this.validateProtocolVersion(e);
                if (h) {
                    return h;
                }
            }
            if (!o.some(fK)) {
                for (let d of o){
                    this.onmessage?.(d, {
                        authInfo: t?.authInfo,
                        requestInfo
                    });
                }
                return new Response(null, {
                    status: 202
                });
            }
            let c = crypto.randomUUID();
            let u = o.find((d)=>FXn(d));
            let f = u ? u.params.protocolVersion : e.headers.get("mcp-protocol-version") ?? hWr;
            if (this._enableJsonResponse) {
                return new Promise((resolveJson)=>{
                    this._streamMapping.set(c, {
                        resolveJson,
                        cleanup: ()=>{
                            this._streamMapping.delete(c);
                        }
                    });
                    for (let h of o){
                        if (fK(h)) {
                            this._requestToStreamMapping.set(h.id, c);
                        }
                    }
                    for (let h of o){
                        this.onmessage?.(h, {
                            authInfo: t?.authInfo,
                            requestInfo
                        });
                    }
                });
            }
            let S = new TextEncoder;
            let p;
            let v = new ReadableStream({
                start: (d)=>{
                    p = d;
                },
                cancel: ()=>{
                    this._streamMapping.delete(c);
                }
            });
            let m = {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                Connection: "keep-alive"
            };
            if (this.sessionId !== undefined) {
                m["mcp-session-id"] = this.sessionId;
            }
            for (let d of o){
                if (fK(d)) {
                    this._streamMapping.set(c, {
                        controller: p,
                        encoder: S,
                        cleanup: ()=>{
                            this._streamMapping.delete(c);
                            try {
                                p.close();
                            } catch  {}
                        }
                    });
                    this._requestToStreamMapping.set(d.id, c);
                }
            }
            await this.writePrimingEvent(p, S, c, f);
            for (let d of o){
                let closeSSEStream;
                let closeStandaloneSSEStream;
                if (fK(d) && this._eventStore && f >= "2025-11-25") {
                    closeSSEStream = ()=>{
                        this.closeSSEStream(d.id);
                    };
                    closeStandaloneSSEStream = ()=>{
                        this.closeStandaloneSSEStream();
                    };
                }
                this.onmessage?.(d, {
                    authInfo: t?.authInfo,
                    requestInfo,
                    closeSSEStream,
                    closeStandaloneSSEStream
                });
            }
            return new Response(v, {
                status: 200,
                headers: m
            });
        } catch (error) {
            this.onerror?.(error);
            return this.createJsonErrorResponse(400, -32700, "Parse error", {
                data: String(error)
            });
        }
    }
    async handleDeleteRequest(e) {
        let t = this.validateSession(e);
        if (t) {
            return t;
        }
        let s = this.validateProtocolVersion(e);
        if (s) {
            return s;
        }
        await Promise.resolve(this._onsessionclosed?.(this.sessionId));
        await this.close();
        return new Response(null, {
            status: 200
        });
    }
    validateSession(e) {
        if (this.sessionIdGenerator === undefined) {
            return;
        }
        if (!this._initialized) {
            this.onerror?.(Error("Bad Request: Server not initialized"));
            return this.createJsonErrorResponse(400, -32000, "Bad Request: Server not initialized");
        }
        let t = e.headers.get("mcp-session-id");
        if (!t) {
            this.onerror?.(Error("Bad Request: Mcp-Session-Id header is required"));
            return this.createJsonErrorResponse(400, -32000, "Bad Request: Mcp-Session-Id header is required");
        }
        if (t !== this.sessionId) {
            this.onerror?.(Error("Session not found"));
            return this.createJsonErrorResponse(404, -32001, "Session not found");
        }
    }
    validateProtocolVersion(e) {
        let t = e.headers.get("mcp-protocol-version");
        if (t !== null && !yX.includes(t)) {
            this.onerror?.(Error(`Bad Request: Unsupported protocol version: ${t} (supported versions: ${yX.join(", ")})`));
            return this.createJsonErrorResponse(400, -32000, `Bad Request: Unsupported protocol version: ${t} (supported versions: ${yX.join(", ")})`);
        }
    }
    async close() {
        this._streamMapping.forEach(({ cleanup })=>{
            cleanup();
        });
        this._streamMapping.clear();
        this._requestResponseMap.clear();
        this.onclose?.();
    }
    closeSSEStream(e) {
        let t = this._requestToStreamMapping.get(e);
        if (!t) {
            return;
        }
        let s = this._streamMapping.get(t);
        if (s) {
            s.cleanup();
        }
    }
    closeStandaloneSSEStream() {
        let e = this._streamMapping.get(this._standaloneSseStreamId);
        if (e) {
            e.cleanup();
        }
    }
    async send(e, t) {
        let s = t?.relatedRequestId;
        if (Zee(e) || pEe(e)) {
            s = e.id;
        }
        if (s === undefined) {
            if (Zee(e) || pEe(e)) {
                throw Error("Cannot send a response on a standalone SSE stream unless resuming a previous client request");
            }
            let n;
            if (this._eventStore) {
                n = await this._eventStore.storeEvent(this._standaloneSseStreamId, e);
            }
            let o = this._streamMapping.get(this._standaloneSseStreamId);
            if (o === undefined) {
                return;
            }
            if (o.controller && o.encoder) {
                this.writeSSEEvent(o.controller, o.encoder, e, n);
            }
            return;
        }
        let i = this._requestToStreamMapping.get(s);
        if (!i) {
            throw Error(`No connection established for request ID: ${String(s)}`);
        }
        let r = this._streamMapping.get(i);
        if (!this._enableJsonResponse && r?.controller && r?.encoder) {
            let n;
            if (this._eventStore) {
                n = await this._eventStore.storeEvent(i, e);
            }
            this.writeSSEEvent(r.controller, r.encoder, e, n);
        }
        if (Zee(e) || pEe(e)) {
            this._requestResponseMap.set(s, e);
            let n = Array.from(this._requestToStreamMapping.entries()).filter(([a, l])=>l === i).map(([a])=>a);
            if (n.every((a)=>this._requestResponseMap.has(a))) {
                if (!r) {
                    throw Error(`No connection established for request ID: ${String(s)}`);
                }
                if (this._enableJsonResponse && r.resolveJson) {
                    let a = {
                        "Content-Type": "application/json"
                    };
                    if (this.sessionId !== undefined) {
                        a["mcp-session-id"] = this.sessionId;
                    }
                    let l = n.map((c)=>this._requestResponseMap.get(c));
                    if (l.length === 1) {
                        r.resolveJson(new Response(JSON.stringify(l[0]), {
                            status: 200,
                            headers: a
                        }));
                    } else {
                        r.resolveJson(new Response(JSON.stringify(l), {
                            status: 200,
                            headers: a
                        }));
                    }
                } else {
                    r.cleanup();
                }
                for (let a of n){
                    this._requestResponseMap.delete(a);
                    this._requestToStreamMapping.delete(a);
                }
            }
        }
    }
}
export { NXn };
