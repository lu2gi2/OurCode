import { fK, Zee, rL, _Wr } from "/$bunfs/root/chunk-vw7x8ctj.js";
import { ix, jee, qve } from "/$bunfs/root/chunk-6qsavawp.js";
import { S1t } from "/$bunfs/root/chunk-8ht447pa.js";
function DBt(e) {
    if (!e) {
        return {};
    }
    if (e instanceof Headers) {
        return Object.fromEntries(e.entries());
    }
    if (Array.isArray(e)) {
        return Object.fromEntries(e);
    }
    return {
        ...e
    };
}
function xht(e = fetch, t) {
    if (!t) {
        return e;
    }
    return async (r, s)=>{
        let a = {
            ...t,
            ...s,
            headers: s?.headers ? {
                ...DBt(t.headers),
                ...DBt(s.headers)
            } : t.headers
        };
        return e(r, a);
    };
}
const m = {
    initialReconnectionDelay: 1000,
    maxReconnectionDelay: 30000,
    reconnectionDelayGrowFactor: 1.5,
    maxRetries: 2
};
class Bee extends Error {
    constructor(e, t){
        super(`Streamable HTTP error: ${t}`);
        this.code = e;
    }
}
class Tmn {
    constructor(e, t){
        this._hasCompletedAuthFlow = false;
        this._url = e;
        this._resourceMetadataUrl = undefined;
        this._scope = undefined;
        this._requestInit = t?.requestInit;
        this._authProvider = t?.authProvider;
        this._fetch = t?.fetch;
        this._fetchWithInit = xht(t?.fetch, t?.requestInit);
        this._sessionId = t?.sessionId;
        this._reconnectionOptions = t?.reconnectionOptions ?? m;
    }
    async _authThenStart() {
        if (!this._authProvider) {
            throw new ix("No auth provider");
        }
        let e;
        try {
            e = await jee(this._authProvider, {
                serverUrl: this._url,
                resourceMetadataUrl: this._resourceMetadataUrl,
                scope: this._scope,
                fetchFn: this._fetchWithInit
            });
        } catch (error) {
            this.onerror?.(error);
            throw error;
        }
        if (e !== "AUTHORIZED") {
            throw new ix;
        }
        return await this._startOrAuthSse({
            resumptionToken: undefined
        });
    }
    async _commonHeaders() {
        let e = {};
        if (this._authProvider) {
            let r = await this._authProvider.tokens();
            if (r) {
                e.Authorization = `Bearer ${r.access_token}`;
            }
        }
        if (this._sessionId) {
            e["mcp-session-id"] = this._sessionId;
        }
        if (this._protocolVersion) {
            e["mcp-protocol-version"] = this._protocolVersion;
        }
        let t = DBt(this._requestInit?.headers);
        return new Headers({
            ...e,
            ...t
        });
    }
    async _startOrAuthSse(e) {
        let { resumptionToken } = e;
        try {
            let r = await this._commonHeaders();
            r.set("Accept", "text/event-stream");
            if (resumptionToken) {
                r.set("last-event-id", resumptionToken);
            }
            let s = await (this._fetch ?? fetch)(this._url, {
                method: "GET",
                headers: r,
                signal: this._abortController?.signal
            });
            if (!s.ok) {
                await s.body?.cancel();
                if (s.status === 401 && this._authProvider) {
                    return await this._authThenStart();
                }
                if (s.status === 405) {
                    return;
                }
                throw new Bee(s.status, `Failed to open SSE stream: ${s.statusText}`);
            }
            this._handleSseStream(s.body, e, true);
        } catch (error) {
            this.onerror?.(error);
            throw error;
        }
    }
    _getNextReconnectionDelay(e) {
        if (this._serverRetryMs !== undefined) {
            return this._serverRetryMs;
        }
        let initialReconnectionDelay = this._reconnectionOptions.initialReconnectionDelay;
        let reconnectionDelayGrowFactor = this._reconnectionOptions.reconnectionDelayGrowFactor;
        let maxReconnectionDelay = this._reconnectionOptions.maxReconnectionDelay;
        return Math.min(initialReconnectionDelay * reconnectionDelayGrowFactor ** e, maxReconnectionDelay);
    }
    _scheduleReconnection(e, t = 0) {
        let maxRetries = this._reconnectionOptions.maxRetries;
        if (t >= maxRetries) {
            this.onerror?.(Error(`Maximum reconnection attempts (${maxRetries}) exceeded.`));
            return;
        }
        let s = this._getNextReconnectionDelay(t);
        this._reconnectionTimeout = setTimeout(()=>{
            this._startOrAuthSse(e).catch((a)=>{
                this.onerror?.(Error(`Failed to reconnect SSE stream: ${a instanceof Error ? a.message : String(a)}`));
                this._scheduleReconnection(e, t + 1);
            });
        }, s);
    }
    _handleSseStream(e, t, r) {
        if (!e) {
            return;
        }
        let { onresumptiontoken, replayMessageId } = t;
        let resumptionToken;
        let n = false;
        let u = false;
        (async ()=>{
            try {
                let l = e.pipeThrough(new TextDecoderStream).pipeThrough(new S1t({
                    onRetry: (o)=>{
                        this._serverRetryMs = o;
                    }
                })).getReader();
                while(true){
                    let { value, done } = await l.read();
                    if (done) {
                        break;
                    }
                    if (value.id) {
                        resumptionToken = value.id;
                        n = true;
                        onresumptiontoken?.(value.id);
                    }
                    if (!value.data) {
                        continue;
                    }
                    if (!value.event || value.event === "message") {
                        try {
                            let h = rL.parse(JSON.parse(value.data));
                            if (Zee(h)) {
                                u = true;
                                if (replayMessageId !== undefined) {
                                    h.id = replayMessageId;
                                }
                            }
                            this.onmessage?.(h);
                        } catch (error) {
                            this.onerror?.(error);
                        }
                    }
                }
                if ((r || n) && !u && this._abortController && !this._abortController.signal.aborted) {
                    this._scheduleReconnection({
                        resumptionToken,
                        onresumptiontoken,
                        replayMessageId
                    }, 0);
                }
            } catch (error) {
                this.onerror?.(Error(`SSE stream disconnected: ${error}`));
                if ((r || n) && !u && this._abortController && !this._abortController.signal.aborted) {
                    try {
                        this._scheduleReconnection({
                            resumptionToken,
                            onresumptiontoken,
                            replayMessageId
                        }, 0);
                    } catch (err) {
                        this.onerror?.(Error(`Failed to reconnect: ${err instanceof Error ? err.message : String(err)}`));
                    }
                }
            }
        })();
    }
    async start() {
        if (this._abortController) {
            throw Error("StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.");
        }
        this._abortController = new AbortController;
    }
    async finishAuth(authorizationCode) {
        if (!this._authProvider) {
            throw new ix("No auth provider");
        }
        if (await jee(this._authProvider, {
            serverUrl: this._url,
            authorizationCode,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit
        }) !== "AUTHORIZED") {
            throw new ix("Failed to authorize");
        }
    }
    async close() {
        if (this._reconnectionTimeout) {
            clearTimeout(this._reconnectionTimeout);
            this._reconnectionTimeout = undefined;
        }
        this._abortController?.abort();
        this.onclose?.();
    }
    async send(e, t) {
        try {
            let { resumptionToken, onresumptiontoken } = t || {};
            if (resumptionToken) {
                this._startOrAuthSse({
                    resumptionToken,
                    replayMessageId: fK(e) ? e.id : undefined
                }).catch((i)=>this.onerror?.(i));
                return;
            }
            let a = await this._commonHeaders();
            a.set("content-type", "application/json");
            a.set("accept", "application/json, text/event-stream");
            let d = {
                ...this._requestInit,
                method: "POST",
                headers: a,
                body: JSON.stringify(e),
                signal: this._abortController?.signal
            };
            let n = await (this._fetch ?? fetch)(this._url, d);
            let u = n.headers.get("mcp-session-id");
            if (u) {
                this._sessionId = u;
            }
            if (!n.ok) {
                let i = await n.text().catch(()=>null);
                if (n.status === 401 && this._authProvider) {
                    if (this._hasCompletedAuthFlow) {
                        throw new Bee(401, "Server returned 401 after successful authentication");
                    }
                    let { resourceMetadataUrl, scope } = qve(n);
                    this._resourceMetadataUrl = resourceMetadataUrl;
                    this._scope = scope;
                    if (await jee(this._authProvider, {
                        serverUrl: this._url,
                        resourceMetadataUrl: this._resourceMetadataUrl,
                        scope: this._scope,
                        fetchFn: this._fetchWithInit
                    }) !== "AUTHORIZED") {
                        throw new ix;
                    }
                    this._hasCompletedAuthFlow = true;
                    return this.send(e);
                }
                if (n.status === 403 && this._authProvider) {
                    let { resourceMetadataUrl, scope, error } = qve(n);
                    if (error === "insufficient_scope") {
                        let f = n.headers.get("WWW-Authenticate");
                        if (this._lastUpscopingHeader === f) {
                            throw new Bee(403, "Server returned 403 after trying upscoping");
                        }
                        if (scope) {
                            this._scope = scope;
                        }
                        if (resourceMetadataUrl) {
                            this._resourceMetadataUrl = resourceMetadataUrl;
                        }
                        this._lastUpscopingHeader = f ?? undefined;
                        if (await jee(this._authProvider, {
                            serverUrl: this._url,
                            resourceMetadataUrl: this._resourceMetadataUrl,
                            scope: this._scope,
                            fetchFn: this._fetch
                        }) !== "AUTHORIZED") {
                            throw new ix;
                        }
                        return this.send(e);
                    }
                }
                throw new Bee(n.status, `Error POSTing to endpoint: ${i}`);
            }
            this._hasCompletedAuthFlow = false;
            this._lastUpscopingHeader = undefined;
            if (n.status === 202) {
                await n.body?.cancel();
                if (_Wr(e)) {
                    this._startOrAuthSse({
                        resumptionToken: undefined
                    }).catch((i)=>this.onerror?.(i));
                }
                return;
            }
            let l = (Array.isArray(e) ? e : [
                e
            ]).filter((i)=>"method" in i && "id" in i && i.id !== undefined).length > 0;
            let _ = n.headers.get("content-type");
            if (l) {
                if (_?.includes("text/event-stream")) {
                    this._handleSseStream(n.body, {
                        onresumptiontoken
                    }, false);
                } else if (_?.includes("application/json")) {
                    let i = await n.json();
                    let o = Array.isArray(i) ? i.map((c)=>rL.parse(c)) : [
                        rL.parse(i)
                    ];
                    for (let c of o){
                        this.onmessage?.(c);
                    }
                } else {
                    await n.body?.cancel();
                    throw new Bee(-1, `Unexpected content type: ${_}`);
                }
            } else {
                await n.body?.cancel();
            }
        } catch (error) {
            this.onerror?.(error);
            throw error;
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    async terminateSession() {
        if (!this._sessionId) {
            return;
        }
        try {
            let headers = await this._commonHeaders();
            let t = {
                ...this._requestInit,
                method: "DELETE",
                headers,
                signal: this._abortController?.signal
            };
            let r = await (this._fetch ?? fetch)(this._url, t);
            await r.body?.cancel();
            if (!r.ok && r.status !== 405) {
                throw new Bee(r.status, `Failed to terminate session: ${r.statusText}`);
            }
            this._sessionId = undefined;
        } catch (error) {
            this.onerror?.(error);
            throw error;
        }
    }
    setProtocolVersion(e) {
        this._protocolVersion = e;
    }
    get protocolVersion() {
        return this._protocolVersion;
    }
    async resumeStream(resumptionToken, t) {
        await this._startOrAuthSse({
            resumptionToken,
            onresumptiontoken: t?.onresumptiontoken
        });
    }
}
export { DBt, xht, Bee, Tmn };
