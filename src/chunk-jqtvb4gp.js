import { Wbn, dzt, N7e, q_t, g7n, h7n, yMe, wA, Dze, Lze, MX, x4o, y7n, zbn, uzt } from "/$bunfs/root/chunk-g8ddscbr.js";
import { _Me, Gbn, W2r, z2r, I4o, O4o, M4o, bMe } from "/$bunfs/root/chunk-f57bzzed.js";
import { Kie, B6 } from "/$bunfs/root/chunk-vw7x8ctj.js";
import { qie } from "/$bunfs/root/chunk-7qnr52x0.js";
import g from "ws";
const m = /^[A-Za-z0-9-]{1,64}$/;
function f(e = "linux") {
    switch(e){
        case "darwin":
            return "macOS";
        case "win32":
            return "Windows";
        default:
            return "Linux";
    }
}
function N(e) {
    return {
        on: (n, t)=>{
            e.on(n, t);
        },
        removeAllListeners: ()=>e.removeAllListeners(),
        send: (n)=>e.send(n),
        close: (n, t)=>{
            if (e.readyState === g.OPEN) {
                e.close(n, t);
            } else {
                e.terminate();
            }
        },
        get readyState () {
            return e.readyState;
        }
    };
}
const O = 30000;
const C = 90000;
const B = {
    persisted: "the last-picked",
    only: "the only connected",
    local: "this computer's"
};
const L = 30000;
const q = new Set([
    "external_message",
    "external_message_result",
    "external_config"
]);
const S = 30000;
function v(e, n) {
    if (typeof e !== "string") {
        return;
    }
    let t = e.replace(/[\r\n\t\u0000-\u001f]/g, " ").trim();
    if (t.length > n) {
        return `${t.slice(0, n)}\u2026`;
    }
    return t;
}
function U(e) {
    if (typeof e.deviceId !== "string" || !m.test(e.deviceId)) {
        return;
    }
    return {
        deviceId: e.deviceId,
        name: v(e.name, 50),
        osPlatform: v(e.osPlatform, 30),
        connectedAt: typeof e.connectedAt === "number" ? e.connectedAt : 0
    };
}
const y = 4;
function W(notices, n) {
    if (!Array.isArray(notices)) {
        return;
    }
    let t = new Map;
    let s = (o, i)=>{
        if (t.has(o)) {
            t.set(o, i);
            return;
        }
        if (t.size >= y) {
            n?.(`sanitizeBridgeNotices: notice cap (${y}) reached; dropping entry`);
            return;
        }
        t.set(o, i);
    };
    for (let o of notices){
        if (typeof o !== "object" || o === null) {
            continue;
        }
        let { kind, domain } = o;
        if (typeof kind !== "string" || !/^[a-z0-9_]{1,64}$/i.test(kind)) {
            continue;
        }
        let kind_1 = kind.toLowerCase();
        if (domain === undefined) {
            s(`${kind_1}:`, {
                kind: kind_1
            });
        } else if (typeof domain === "string" && domain.length <= 253 && /^[a-z0-9.-]+$/i.test(domain)) {
            let domain_1 = domain.toLowerCase().replace(/\.$/, "");
            if (domain_1.length === 0) {
                continue;
            }
            s(`${kind_1}:${domain_1}`, {
                kind: kind_1,
                domain: domain_1
            });
        }
    }
    if (t.size > 0) {
        return Array.from(t.values());
    }
}
class _ {
    ws = null;
    connected = false;
    authenticated = false;
    connecting = false;
    reconnectTimer = null;
    handshakeTimer = null;
    reconnectAttempts = 0;
    pendingCalls = new Map;
    timedOutCalls = new Map;
    notificationHandler = null;
    context;
    permissionMode = "ask";
    allowedDomains;
    connectionStartTime = null;
    connectionEstablishedTime = null;
    selectedDeviceId;
    discoveryComplete = false;
    multiBrowserPendingSelection = false;
    discoveryPromise = null;
    pendingDiscovery = null;
    listExtensionsPromise = null;
    previousSelectedDeviceId;
    peerConnectedWaiters = [];
    pendingPairingRequestId;
    pairingInProgress = false;
    persistedDeviceId;
    pendingSwitchResolve = null;
    pairingPromptAbort = null;
    pairingPromptTimeout = null;
    keepAliveInterval = null;
    lastPongReceived = 0;
    pendingExternalMessages = new Map;
    constructor(e){
        this.context = e;
        if (e.initialPermissionMode) {
            this.permissionMode = e.initialPermissionMode;
        }
    }
    async ensureConnected() {
        let { logger, serverName } = this.context;
        logger.info(`[${serverName}] ensureConnected called, connected=${this.connected}, authenticated=${this.authenticated}, wsState=${this.ws?.readyState}`);
        if (this.connected && this.authenticated && this.ws?.readyState === g.OPEN) {
            logger.info(`[${serverName}] Already connected and authenticated`);
            return true;
        }
        if (!this.connecting && !this.reconnectTimer) {
            logger.info(`[${serverName}] Not connecting, starting connection...`);
            await this.connect();
        } else {
            logger.info(`[${serverName}] Connect in progress or reconnect scheduled, waiting...`);
        }
        return new Promise((resolve)=>{
            let s = null;
            let o = setTimeout(()=>{
                if (s) {
                    clearTimeout(s);
                }
                logger.info(`[${serverName}] Connection timeout, connected=${this.connected}, authenticated=${this.authenticated}`);
                resolve(false);
            }, 10000);
            let i = ()=>{
                if (this.connected && this.authenticated) {
                    logger.info(`[${serverName}] Connection successful`);
                    clearTimeout(o);
                    resolve(true);
                } else if (!this.connecting && !this.reconnectTimer) {
                    logger.info(`[${serverName}] No longer connecting, giving up`);
                    clearTimeout(o);
                    resolve(false);
                } else {
                    s = setTimeout(i, 200);
                }
            };
            i();
        });
    }
    async callTool(e, args, t) {
        let { logger, serverName, trackEvent } = this.context;
        if (!this.ws || this.ws.readyState !== g.OPEN) {
            throw new wA(`[${serverName}] Bridge not connected`);
        }
        if (!this.selectedDeviceId && (!this.discoveryComplete || this.multiBrowserPendingSelection)) {
            this.discoveryPromise ??= this.discoverAndSelectExtension().finally(()=>{
                this.discoveryPromise = null;
            });
            await this.discoveryPromise;
        }
        if (this.discoveryComplete && !this.selectedDeviceId && !this.pairingInProgress && !this.multiBrowserPendingSelection) {
            throw new Dze(`[${serverName}] No Chrome extension connected after discovery`);
        }
        let r = t?.sessionScope?.sessionId;
        let a = t?.sessionScope?.userMessageUuid;
        let c = this.context.browserActivityObserver?.onBeforeToolCall;
        if (c) {
            let p = this.selectedDeviceId;
            try {
                await c({
                    sessionId: r,
                    toolName: e,
                    args
                });
            } catch  {
                logger.debug(`[${serverName}] browser activity observer threw`);
            }
            if (!this.ws || this.ws.readyState !== g.OPEN) {
                throw new wA(`[${serverName}] Bridge disconnected before tool call was sent`);
            }
            if (p !== undefined && this.selectedDeviceId === undefined) {
                throw new MX("Chrome extension disconnected mid-call");
            }
        }
        let d = crypto.randomUUID();
        let startTime = Date.now();
        let l = this.context.getToolCallTimeoutMs?.(e) ?? _Me;
        let h = {
            type: "tool_call",
            tool_use_id: d,
            client_type: this.context.clientTypeId,
            tool: e,
            args,
            supports_tool_result_notices: true
        };
        if (this.selectedDeviceId) {
            h.target_device_id = this.selectedDeviceId;
        }
        Object.assign(h, h7n({
            ...t,
            permissionMode: t?.permissionMode ?? this.permissionMode,
            allowedDomains: t?.allowedDomains ?? this.allowedDomains
        }));
        let P = JSON.stringify(h);
        trackEvent?.("chrome_bridge_tool_call_started", {
            tool_name: `browser:${e}`,
            tool_use_id: d,
            session_id: r,
            user_message_uuid: a,
            timeout_ms: l,
            transport: "bridge",
            request_bytes: Buffer.byteLength(P, "utf-8")
        });
        return new Promise((resolve, reject)=>{
            let timer = this.createTimeoutTimer(d, l);
            this.pendingCalls.set(d, {
                resolve,
                reject,
                timer,
                onPermissionRequest: t?.onPermissionRequest,
                startTime,
                toolName: e,
                timeoutMs: l,
                sessionId: r,
                userMessageUuid: a,
                args
            });
            logger.debug(`[${serverName}] Sending tool_call: ${yMe(e)} (${d.slice(0, 8)})`);
            this.ws.send(P);
        });
    }
    sendExternalMessage(e, payload, t) {
        let { logger, serverName } = this.context;
        if (!this.ws || this.ws.readyState !== g.OPEN) {
            return Promise.reject(new wA(`[${serverName}] Bridge not connected`));
        }
        if (!this.selectedDeviceId) {
            logger.info(`[${serverName}] external_message refused: no extension selected`);
            return Promise.resolve({
                ok: false,
                error: "no_target"
            });
        }
        this.pushExternalConfig();
        let requestId = crypto.randomUUID();
        let r = t?.timeoutMs;
        let timeoutMs = Math.min(typeof r === "number" && Number.isFinite(r) && r > 0 ? r : z2r, I4o);
        let c = {
            type: "external_message",
            requestId,
            extensionIds: [
                ...e
            ],
            payload,
            timeoutMs,
            target_device_id: this.selectedDeviceId
        };
        return new Promise((resolve)=>{
            let timer = setTimeout(()=>{
                if (this.pendingExternalMessages.delete(requestId)) {
                    logger.warn(`[${serverName}] external_message timed out locally (${requestId.slice(0, 8)})`);
                    resolve({
                        ok: false,
                        error: "timeout"
                    });
                }
            }, timeoutMs + L);
            this.pendingExternalMessages.set(requestId, {
                resolve,
                timer
            });
            logger.debug(`[${serverName}] Sending external_message (${requestId.slice(0, 8)})`);
            try {
                this.ws.send(JSON.stringify(c));
            } catch (error) {
                clearTimeout(timer);
                this.pendingExternalMessages.delete(requestId);
                logger.warn(`[${serverName}] external_message serialization/send failed: ${error instanceof Error ? error.message : String(error)}`);
                resolve({
                    ok: false,
                    error: "send_failed"
                });
            }
        });
    }
    pushExternalConfig(e) {
        if (this.selectedDeviceId === undefined) {
            return false;
        }
        return this.pushExternalConfigToPeer(this.selectedDeviceId, e);
    }
    pushExternalConfigToPeer(target_device_id, n) {
        if (this.ws?.readyState !== g.OPEN) {
            return false;
        }
        let t = n;
        if (!t) {
            if (!this.context.getExternalRelayConfig) {
                return false;
            }
            t = this.context.getExternalRelayConfig() ?? {
                extensionIds: []
            };
        }
        this.ws.send(JSON.stringify({
            type: "external_config",
            extensionIds: t.extensionIds,
            ...t.hooks !== undefined && {
                hooks: t.hooks
            },
            target_device_id
        }));
        return true;
    }
    async pushExternalConfigToAllPeers(e) {
        if (this.ws?.readyState !== g.OPEN) {
            return 0;
        }
        if (!e && !this.context.getExternalRelayConfig) {
            return 0;
        }
        let n = await this.queryBridgeExtensions();
        let t = 0;
        for (let s of n){
            if (this.pushExternalConfigToPeer(s.deviceId, e)) {
                t++;
            }
        }
        return t;
    }
    isConnected() {
        return this.connected && this.authenticated && this.ws?.readyState === g.OPEN;
    }
    disconnect() {
        this.cleanup();
    }
    setNotificationHandler(e) {
        this.notificationHandler = e;
    }
    async discoverAndSelectExtension() {
        let { logger, serverName } = this.context;
        this.persistedDeviceId = this.context.getPersistedDeviceId?.();
        let t = await this.queryBridgeExtensions();
        if (t.length === 0) {
            logger.info(`[${serverName}] No extensions connected, waiting up to ${Gbn}ms for peer_connected`);
            if (await this.waitForPeerConnected(Gbn)) {
                t = await this.queryBridgeExtensions();
            }
        }
        if (this.context.getRequirePairedDevice?.()) {
            if (!this.persistedDeviceId) {
                logger.info(`[${serverName}] requirePairedDevice set but no persistedDeviceId; refusing to auto-select`);
                this.discoveryComplete = true;
                return;
            }
            let i = this.persistedDeviceId;
            let r = t.find((a)=>a.deviceId === i);
            if (!r) {
                logger.info(`[${serverName}] requirePairedDevice: persisted ${i.slice(0, 8)} not connected (${t.length} other(s) visible); waiting`);
                if (await this.waitForPeerConnected(Gbn)) {
                    t = await this.queryBridgeExtensions();
                    r = t.find((a)=>a.deviceId === i);
                }
            }
            this.discoveryComplete = true;
            if (r) {
                this.selectExtension(r.deviceId);
            } else {
                logger.info(`[${serverName}] requirePairedDevice: persisted device never arrived; refusing to auto-select`);
            }
            return;
        }
        let s = t.length > 1 && !t.some((i)=>i.deviceId === this.persistedDeviceId) ? await dzt(this.context.getLocalDeviceIds) : undefined;
        this.discoveryComplete = true;
        if (this.selectedDeviceId) {
            return;
        }
        let o = Wbn(t, this.persistedDeviceId, s);
        if (o.kind === "none") {
            logger.info(`[${serverName}] No extensions found after waiting`);
            this.multiBrowserPendingSelection = false;
            return;
        }
        if (o.kind === "select") {
            let { extension, reason } = o;
            logger.info(`[${serverName}] Auto-connecting to ${B[reason]} extension: ${extension.name || extension.deviceId.slice(0, 8)}`);
            if (reason === "only" && !this.isLocalExtension(extension)) {
                this.context.onRemoteExtensionWarning?.(extension);
            }
            this.selectExtension(extension.deviceId);
            this.reportBrowserSelected(reason, t, s);
            return;
        }
        if (!this.multiBrowserPendingSelection) {
            this.reportBrowserSelected("ask", t, s);
        }
        if (this.context.askUserToolName) {
            this.multiBrowserPendingSelection = true;
            return;
        }
        this.broadcastPairingRequest();
        this.pairingInProgress = true;
        this.firePairingPrompt();
    }
    reportBrowserSelected(outcome, n, t) {
        this.context.trackEvent?.("chrome_bridge_browser_selected", {
            outcome,
            connected_count: n.length,
            local_count: t === undefined ? null : n.filter((s)=>t.has(s.deviceId)).length
        });
    }
    queryBridgeExtensions() {
        if (this.listExtensionsPromise) {
            return this.listExtensionsPromise;
        }
        let e = new Promise((resolve)=>{
            let timeout = setTimeout(()=>{
                this.pendingDiscovery = null;
                resolve([]);
            }, W2r);
            this.pendingDiscovery = {
                resolve,
                timeout
            };
            this.ws?.send(JSON.stringify({
                type: "list_extensions"
            }));
        }).then((n)=>{
            let t = new Map;
            for (let s of n){
                let o = t.get(s.deviceId);
                if (!o || s.connectedAt > o.connectedAt) {
                    t.set(s.deviceId, s);
                }
            }
            return [
                ...t.values()
            ].map(U).filter((s)=>s !== undefined);
        });
        this.listExtensionsPromise = e;
        e.finally(()=>{
            if (this.listExtensionsPromise === e) {
                this.listExtensionsPromise = null;
            }
        });
        return e;
    }
    getSelectedDeviceId() {
        return this.selectedDeviceId ?? this.context.getPersistedDeviceId?.();
    }
    hasActiveSelection() {
        return this.selectedDeviceId !== undefined;
    }
    clearSelection() {
        this.selectedDeviceId = undefined;
        this.previousSelectedDeviceId = undefined;
        this.discoveryComplete = false;
        this.multiBrowserPendingSelection = false;
        this.pairingInProgress = false;
        this.abortPairingPrompt();
    }
    selectExtension(e) {
        let { logger, serverName } = this.context;
        this.selectedDeviceId = e;
        this.previousSelectedDeviceId = undefined;
        this.multiBrowserPendingSelection = false;
        logger.info(`[${serverName}] Selected Chrome extension: ${e.slice(0, 8)}...`);
        this.pushExternalConfig();
    }
    async clearSelectionIfGone(e) {
        let { logger, serverName } = this.context;
        let s = await this.queryBridgeExtensions();
        if (this.selectedDeviceId !== e) {
            return;
        }
        if (s.some((o)=>o.deviceId === e)) {
            return;
        }
        logger.info(`[${serverName}] Selected extension ${e.slice(0, 8)} absent from bridge roster after error; clearing selection`);
        this.selectedDeviceId = undefined;
        this.discoveryComplete = false;
    }
    async listConnectedExtensions() {
        if (!await this.ensureConnected()) {
            return [];
        }
        let e = await this.queryBridgeExtensions();
        let n = e.length > 1 ? await dzt(this.context.getLocalDeviceIds) : undefined;
        return e.map((t)=>({
                ...t,
                isLocal: this.isLocalExtension(t),
                ...n?.has(t.deviceId) && {
                    onThisComputer: true
                }
            }));
    }
    selectExtensionById(e, n) {
        this.discoveryComplete = true;
        this.pairingInProgress = false;
        this.pendingPairingRequestId = undefined;
        this.selectExtension(e);
        this.context.onExtensionPaired?.(e, n);
        if (this.pendingSwitchResolve) {
            this.pendingSwitchResolve({
                deviceId: e,
                name: n
            });
        }
        this.abortPairingPrompt();
    }
    firePairingPrompt() {
        this.abortPairingPrompt();
        if (!this.context.onPairingPrompted) {
            return;
        }
        let e = new AbortController;
        this.pairingPromptAbort = e;
        this.pairingPromptTimeout = setTimeout(()=>this.abortPairingPrompt(), 120000);
        this.context.onPairingPrompted(e.signal);
    }
    abortPairingPrompt() {
        if (this.pairingPromptTimeout) {
            clearTimeout(this.pairingPromptTimeout);
            this.pairingPromptTimeout = null;
        }
        if (this.pairingPromptAbort) {
            this.pairingPromptAbort.abort();
            this.pairingPromptAbort = null;
        }
    }
    isLocalExtension(e) {
        if (!e.osPlatform) {
            return false;
        }
        return e.osPlatform === f(this.context.getHostPlatform?.() ?? "linux");
    }
    waitForPeerConnected(e) {
        return new Promise((resolve)=>{
            let t = setTimeout(()=>{
                this.peerConnectedWaiters = this.peerConnectedWaiters.filter((o)=>o !== s);
                resolve(false);
            }, e);
            let s = (o)=>{
                clearTimeout(t);
                resolve(o);
            };
            this.peerConnectedWaiters.push(s);
        });
    }
    broadcastPairingRequest() {
        let e = crypto.randomUUID();
        this.pendingPairingRequestId = e;
        this.ws?.send(JSON.stringify({
            type: "pairing_request",
            request_id: e,
            client_type: this.context.clientTypeId
        }));
    }
    async switchBrowser() {
        let e = await this.queryBridgeExtensions();
        let n = this.selectedDeviceId ?? this.previousSelectedDeviceId;
        if (e.length === 0 || e.length === 1 && (!n || e[0].deviceId === n)) {
            return "no_other_browsers";
        }
        this.previousSelectedDeviceId = this.selectedDeviceId;
        this.selectedDeviceId = undefined;
        this.discoveryComplete = false;
        this.pairingInProgress = false;
        let t = crypto.randomUUID();
        this.pendingPairingRequestId = t;
        if (this.ws?.readyState !== g.OPEN) {
            return null;
        }
        this.ws.send(JSON.stringify({
            type: "pairing_request",
            request_id: t,
            client_type: this.context.clientTypeId
        }));
        this.firePairingPrompt();
        if (this.pendingSwitchResolve) {
            this.pendingSwitchResolve(null);
        }
        return new Promise((resolve)=>{
            let o = setTimeout(()=>{
                if (this.pendingPairingRequestId === t) {
                    this.pendingPairingRequestId = undefined;
                }
                this.pendingSwitchResolve = null;
                this.abortPairingPrompt();
                resolve(null);
            }, 120000);
            this.pendingSwitchResolve = (i)=>{
                clearTimeout(o);
                this.pendingSwitchResolve = null;
                resolve(i);
            };
        });
    }
    async connect() {
        let { logger, serverName, bridgeConfig, trackEvent } = this.context;
        if (!bridgeConfig) {
            logger.error(`[${serverName}] No bridge config provided`);
            return;
        }
        if (this.connecting) {
            return;
        }
        this.connecting = true;
        this.authenticated = false;
        this.connectionStartTime = Date.now();
        this.closeSocket();
        this.handshakeTimer = setTimeout(()=>{
            this.handshakeTimer = null;
            if (!this.connecting) {
                return;
            }
            let ws_state = this.ws?.readyState;
            logger.warn(`[${serverName}] Bridge connect stuck after ${S}ms (ws_state=${ws_state})`);
            trackEvent?.("chrome_bridge_handshake_timeout", {
                duration_ms: Date.now() - (this.connectionStartTime ?? 0),
                ws_state
            });
            if (ws_state === undefined) {
                return;
            }
            this.connecting = false;
            this.closeSocket();
            this.scheduleReconnect();
        }, S);
        let o;
        let i;
        if (bridgeConfig.devUserId) {
            o = bridgeConfig.devUserId;
            logger.debug(`[${serverName}] Using dev user ID for bridge connection`);
        } else {
            logger.debug(`[${serverName}] Fetching user ID for bridge connection`);
            let error_detail;
            let c;
            if (bridgeConfig.getUserIdResult) {
                let d = await bridgeConfig.getUserIdResult();
                if (d.ok) {
                    c = d.userId;
                } else {
                    error_detail = d.error;
                }
            } else {
                c = await bridgeConfig.getUserId();
            }
            if (!c) {
                let d = Date.now() - this.connectionStartTime;
                logger.error(`[${serverName}] No user ID available after ${d}ms`);
                trackEvent?.("chrome_bridge_connection_failed", {
                    duration_ms: d,
                    error_type: "no_user_id",
                    error_detail,
                    reconnect_attempt: this.reconnectAttempts
                });
                this.connecting = false;
                this.scheduleReconnect();
                return;
            }
            o = c;
            logger.debug(`[${serverName}] Fetching OAuth token for bridge connection`);
            i = await bridgeConfig.getOAuthToken();
            if (!i) {
                let d = Date.now() - this.connectionStartTime;
                logger.error(`[${serverName}] No OAuth token available after ${d}ms`);
                trackEvent?.("chrome_bridge_connection_failed", {
                    duration_ms: d,
                    error_type: "no_oauth_token",
                    reconnect_attempt: this.reconnectAttempts
                });
                this.connecting = false;
                this.scheduleReconnect();
                return;
            }
        }
        let bridge_url = `${bridgeConfig.url}/chrome/${o}`;
        logger.info(`[${serverName}] Connecting to bridge: ${bridge_url}`);
        trackEvent?.("chrome_bridge_connection_started", {
            bridge_url
        });
        try {
            if (bridgeConfig.createWebSocket) {
                this.ws = await bridgeConfig.createWebSocket(bridge_url);
            } else {
                let tls = await bridgeConfig.getWsOptions?.() ?? bridgeConfig.wsOptions;
                this.ws = N(new g(bridge_url, tls ? {
                    ...tls,
                    tls
                } : undefined));
            }
        } catch (error) {
            let c = Date.now() - this.connectionStartTime;
            logger.error(`[${serverName}] Failed to create WebSocket after ${c}ms:`, error);
            trackEvent?.("chrome_bridge_connection_failed", {
                duration_ms: c,
                error_type: "websocket_error",
                error_code: error?.code,
                reconnect_attempt: this.reconnectAttempts
            });
            this.connecting = false;
            this.scheduleReconnect();
            return;
        }
        this.ws.on("open", ()=>{
            logger.info(`[${serverName}] WebSocket connected, sending connect message`);
            let a = {
                type: "connect",
                client_type: this.context.clientTypeId
            };
            if (bridgeConfig.devUserId) {
                a.dev_user_id = bridgeConfig.devUserId;
            } else {
                a.oauth_token = i;
            }
            this.ws?.send(JSON.stringify(a));
        });
        this.ws.on("message", (a)=>{
            try {
                let c = a.toString();
                let d = JSON.parse(c);
                if (q.has(d.type)) {
                    logger.debug(`[${serverName}] Bridge received: ${String(d.type)} (ok=${String(d.ok)})`);
                } else if (logger.isDebugEnabled?.() ?? true) {
                    logger.debug(`[${serverName}] Bridge received: ${JSON.stringify(d)}`);
                }
                this.handleMessage(d, Buffer.byteLength(c, "utf-8"));
            } catch (error) {
                logger.error(`[${serverName}] Failed to parse bridge message:`, error);
            }
        });
        this.ws.on("close", (close_code)=>{
            let duration_since_connect_ms = this.connectionEstablishedTime ? Date.now() - this.connectionEstablishedTime : 0;
            logger.info(`[${serverName}] Bridge connection closed (code: ${close_code}, duration: ${duration_since_connect_ms}ms)`);
            trackEvent?.("chrome_bridge_disconnected", {
                close_code,
                duration_since_connect_ms,
                reconnect_attempt: this.reconnectAttempts + 1
            });
            this.connected = false;
            this.authenticated = false;
            this.connecting = false;
            this.connectionEstablishedTime = null;
            this.rejectPendingCalls(new wA("Bridge connection closed mid-call"));
            this.scheduleReconnect();
        });
        this.ws.on("error", (a)=>{
            let c = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
            logger.error(`[${serverName}] Bridge WebSocket error after ${c}ms: ${a.message}`);
            trackEvent?.("chrome_bridge_connection_failed", {
                duration_ms: c,
                error_type: "websocket_error",
                error_code: a.code,
                reconnect_attempt: this.reconnectAttempts
            });
            this.connected = false;
            this.authenticated = false;
            this.connecting = false;
            this.rejectPendingCalls(new wA(`Bridge connection error: ${a.message}`));
        });
    }
    handleMessage(e, n) {
        let { logger, serverName, trackEvent } = this.context;
        switch(e.type){
            case "paired":
                {
                    let i = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
                    logger.info(`[${serverName}] Paired with Chrome extension (duration: ${i}ms)`);
                    this.connected = true;
                    this.authenticated = true;
                    this.connecting = false;
                    this.reconnectAttempts = 0;
                    this.connectionEstablishedTime = Date.now();
                    this.startKeepAlive();
                    trackEvent?.("chrome_bridge_connection_succeeded", {
                        duration_ms: i,
                        status: "paired"
                    });
                    this.pushExternalConfigToAllPeers();
                    this.context.onPeerRosterChanged?.();
                    break;
                }
            case "waiting":
                {
                    let i = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
                    logger.info(`[${serverName}] Waiting for Chrome extension to connect (duration: ${i}ms)`);
                    this.connected = true;
                    this.authenticated = true;
                    this.connecting = false;
                    this.reconnectAttempts = 0;
                    this.connectionEstablishedTime = Date.now();
                    this.startKeepAlive();
                    trackEvent?.("chrome_bridge_connection_succeeded", {
                        duration_ms: i,
                        status: "waiting"
                    });
                    break;
                }
            case "peer_connected":
                logger.info(`[${serverName}] Chrome extension connected to bridge`);
                trackEvent?.("chrome_bridge_peer_connected", null);
                if (!this.selectedDeviceId) {
                    this.discoveryComplete = false;
                }
                if (this.previousSelectedDeviceId && e.deviceId === this.previousSelectedDeviceId && !this.pendingSwitchResolve) {
                    logger.info(`[${serverName}] Previously selected extension reconnected, auto-reselecting`);
                    this.selectExtension(this.previousSelectedDeviceId);
                    this.previousSelectedDeviceId = undefined;
                }
                if (this.peerConnectedWaiters.length > 0) {
                    let i = this.peerConnectedWaiters;
                    this.peerConnectedWaiters = [];
                    for (let r of i){
                        r(true);
                    }
                }
                if (typeof e.deviceId === "string" && m.test(e.deviceId)) {
                    this.pushExternalConfigToPeer(e.deviceId);
                } else {
                    this.pushExternalConfig();
                }
                this.context.onPeerRosterChanged?.();
                break;
            case "peer_disconnected":
                {
                    let i = e.deviceId;
                    logger.info(`[${serverName}] Chrome extension disconnected from bridge (deviceId=${i ?? "none"}, selected=${this.selectedDeviceId ?? "none"})`);
                    trackEvent?.("chrome_bridge_peer_disconnected", {
                        disconnected_device_id: i ?? null,
                        selected_device_id: this.selectedDeviceId ?? null,
                        had_match: i !== null && i !== undefined && i === this.selectedDeviceId,
                        pending_calls: this.pendingCalls.size
                    });
                    this.context.onPeerDisconnected?.({
                        deviceId: i,
                        wasSelected: i !== null && i !== undefined && i === this.selectedDeviceId
                    });
                    if (e.deviceId && e.deviceId === this.selectedDeviceId) {
                        logger.info(`[${serverName}] Selected extension disconnected, clearing selection`);
                        this.previousSelectedDeviceId = this.selectedDeviceId;
                        this.selectedDeviceId = undefined;
                        this.discoveryComplete = false;
                        this.rejectPendingCalls(new MX("Chrome extension disconnected mid-call"));
                    } else if (!this.selectedDeviceId && this.multiBrowserPendingSelection) {
                        this.discoveryComplete = false;
                        this.multiBrowserPendingSelection = false;
                    }
                    this.context.onPeerRosterChanged?.();
                    break;
                }
            case "routing_ack":
                {
                    trackEvent?.("chrome_bridge_routing_ack", {
                        tool_use_id: e.tool_use_id ?? null,
                        routed_to: e.routed_to ?? null,
                        target_connected_at: e.target_connected_at ?? null,
                        target_pong_age_ms: e.target_pong_age_ms ?? null,
                        extension_sockets: e.extension_sockets ?? null,
                        mcp_sockets: e.mcp_sockets ?? null
                    });
                    let i = this.pendingCalls.get(e.tool_use_id ?? "");
                    if (i) {
                        i.routingAckReceived = true;
                        i.routingAckPongAgeMs = e.target_pong_age_ms ?? null;
                    }
                    break;
                }
            case "extensions_list":
                if (this.pendingDiscovery) {
                    clearTimeout(this.pendingDiscovery.timeout);
                    this.pendingDiscovery.resolve(e.extensions ?? []);
                    this.pendingDiscovery = null;
                }
                break;
            case "pairing_response":
                {
                    let i = e.request_id;
                    if (this.pendingPairingRequestId !== i) {
                        break;
                    }
                    if (e.dismissed === true) {
                        logger.info(`[${serverName}] Pairing prompt dismissed in extension`);
                        this.abortPairingPrompt();
                        break;
                    }
                    let r = typeof e.device_id === "string" && m.test(e.device_id) ? e.device_id : undefined;
                    let a = v(e.name, 50);
                    if (r && a) {
                        this.pendingPairingRequestId = undefined;
                        this.pairingInProgress = false;
                        this.selectExtension(r);
                        this.context.onExtensionPaired?.(r, a);
                        this.abortPairingPrompt();
                        logger.info(`[${serverName}] Paired with "${a}" (${r.slice(0, 8)})`);
                        if (this.pendingSwitchResolve) {
                            this.pendingSwitchResolve({
                                deviceId: r,
                                name: a
                            });
                            this.pendingSwitchResolve = null;
                        }
                    }
                    break;
                }
            case "ping":
                this.ws?.send(JSON.stringify({
                    type: "pong"
                }));
                break;
            case "pong":
                this.lastPongReceived = Date.now();
                break;
            case "tool_result":
                this.handleToolResult(e, n);
                break;
            case "external_message_result":
                {
                    let i = typeof e.requestId === "string" ? e.requestId : undefined;
                    let r = i ? this.pendingExternalMessages.get(i) : undefined;
                    if (!i || !r) {
                        logger.debug(`[${serverName}] external_message_result for unknown request: ${i?.slice(0, 8) ?? "none"}`);
                        break;
                    }
                    clearTimeout(r.timer);
                    this.pendingExternalMessages.delete(i);
                    if (e.ok === true) {
                        r.resolve({
                            ok: true,
                            response: e.response
                        });
                    } else {
                        let a = e.error;
                        r.resolve({
                            ok: false,
                            error: a === "no_target" || a === "timeout" ? a : "send_failed"
                        });
                    }
                    break;
                }
            case "external_message":
            case "external_config":
                break;
            case "permission_request":
                this.handlePermissionRequest(e).catch((i)=>{
                    logger.error(`[${serverName}] Error handling permission_request:`, i);
                });
                break;
            case "notification":
                if (typeof e.method !== "string") {
                    logger.warn(`[${serverName}] Dropped a notification whose method is not a string`);
                } else {
                    this.notificationHandler?.({
                        method: e.method,
                        params: e.params
                    });
                }
                break;
            case "error":
                logger.warn(`[${serverName}] Bridge error: ${e.error}`);
                if (this.selectedDeviceId) {
                    this.clearSelectionIfGone(this.selectedDeviceId);
                }
                break;
            default:
                logger.warn(`[${serverName}] Unrecognized bridge message type: ${e.type}`);
        }
    }
    async handlePermissionRequest(e) {
        let { logger, serverName } = this.context;
        let { tool_use_id, request_id } = e;
        if (typeof tool_use_id !== "string" || typeof request_id !== "string") {
            logger.warn(`[${serverName}] permission_request missing tool_use_id or request_id`);
            return;
        }
        let i = this.pendingCalls.get(tool_use_id);
        if (!i?.onPermissionRequest) {
            logger.debug(`[${serverName}] Ignoring permission_request for unknown tool_use_id ${tool_use_id.slice(0, 8)} (not our call)`);
            return;
        }
        let r = g7n(e, {
            toolUseId: tool_use_id,
            requestId: request_id
        });
        clearTimeout(i.timer);
        i.permissionPaused = true;
        try {
            let c = await i.onPermissionRequest(r);
            this.sendPermissionResponse(request_id, c);
        } catch (error) {
            logger.error(`[${serverName}] Error handling permission request:`, error);
            this.sendPermissionResponse(request_id, false);
        }
        let a = this.pendingCalls.get(tool_use_id);
        if (a) {
            a.timer = this.createTimeoutTimer(tool_use_id, a.timeoutMs);
        }
    }
    sendPermissionResponse(request_id, allowed) {
        if (this.ws?.readyState === g.OPEN) {
            let t = {
                type: "permission_response",
                request_id,
                allowed
            };
            if (this.selectedDeviceId) {
                t.target_device_id = this.selectedDeviceId;
            }
            this.ws.send(JSON.stringify(t));
        }
    }
    handleToolResult(e, response_bytes) {
        let { logger, serverName, trackEvent } = this.context;
        let e_tool_use_id = e.tool_use_id;
        if (typeof e_tool_use_id !== "string") {
            logger.warn(`[${serverName}] Received tool_result without tool_use_id`);
            return;
        }
        let r = this.pendingCalls.get(e_tool_use_id);
        if (!r) {
            logger.debug(`[${serverName}] Received tool_result for unknown call: ${e_tool_use_id.slice(0, 8)}`);
            let l = this.timedOutCalls.get(e_tool_use_id);
            trackEvent?.("chrome_bridge_tool_call_late_result", {
                tool_use_id: e_tool_use_id,
                gap_from_timeout_ms: l ? Date.now() - l : null,
                reason: l ? "post_timeout" : "unknown",
                is_error: typeof e.is_error === "boolean" ? e.is_error : null
            });
            if (l) {
                this.timedOutCalls.delete(e_tool_use_id);
            }
            return;
        }
        let a = Date.now() - r.startTime;
        let c = this.normalizeBridgeResponse(e);
        let d = Boolean(e.is_error) || "error" in c;
        clearTimeout(r.timer);
        this.pendingCalls.delete(e_tool_use_id);
        let u = this.context.browserActivityObserver?.onToolResult;
        if (u) {
            try {
                u({
                    sessionId: r.sessionId,
                    toolName: r.toolName,
                    args: r.args,
                    ok: !d,
                    resultContent: d ? undefined : c.result?.content
                });
            } catch  {
                logger.debug(`[${serverName}] browser activity observer threw`);
            }
        }
        if (d) {
            let l = q_t(c.error).slice(0, 200);
            logger.warn(`[${serverName}] Tool call error: ${r.toolName} (${e_tool_use_id.slice(0, 8)}) after ${a}ms`);
            let error_type = N7e(r.toolName, l);
            trackEvent?.("chrome_bridge_tool_call_error", {
                tool_name: `browser:${r.toolName}`,
                tool_use_id: e_tool_use_id,
                duration_ms: a,
                error_type,
                session_id: r.sessionId,
                user_message_uuid: r.userMessageUuid,
                transport: "bridge"
            });
            if (!this.selectedDeviceId && !this.pairingInProgress) {
                this.discoveryComplete = false;
                r.reject(new MX(`[${serverName}] Extension disconnected during tool call: ${r.toolName}`));
                return;
            }
        } else {
            logger.debug(`[${serverName}] Tool call completed: ${r.toolName} (${e_tool_use_id.slice(0, 8)}) in ${a}ms`);
            trackEvent?.("chrome_bridge_tool_call_completed", {
                tool_name: `browser:${r.toolName}`,
                tool_use_id: e_tool_use_id,
                duration_ms: a,
                session_id: r.sessionId,
                user_message_uuid: r.userMessageUuid,
                transport: "bridge",
                response_bytes
            });
        }
        r.resolve(c);
    }
    normalizeBridgeResponse({ notices, ...rest }) {
        let notices_1 = W(notices, (i)=>this.context.logger.warn(`[${this.context.serverName}] ${i}`));
        let o = notices_1 ? {
            notices: notices_1
        } : undefined;
        if (rest.result || rest.error) {
            if (o) {
                return {
                    ...rest,
                    ...o
                };
            }
            return rest;
        }
        if (rest.content) {
            if (rest.is_error) {
                return {
                    error: {
                        content: rest.content
                    },
                    ...o
                };
            }
            return {
                result: {
                    content: rest.content
                },
                ...o
            };
        }
        if (o) {
            return {
                ...rest,
                ...o
            };
        }
        return rest;
    }
    getTimeoutDiagnostics() {
        let free_mem_pct = -1;
        let pong_age_ms = this.lastPongReceived > 0 ? Date.now() - this.lastPongReceived : undefined;
        return {
            free_mem_pct,
            pong_age_ms
        };
    }
    createTimeoutTimer(e, timeout_ms) {
        let { logger, serverName, trackEvent } = this.context;
        return setTimeout(()=>{
            let i = this.pendingCalls.get(e);
            if (!i) {
                return;
            }
            this.timedOutCalls.set(e, Date.now());
            if (this.timedOutCalls.size > 200) {
                let d = this.timedOutCalls.keys().next().value;
                if (d) {
                    this.timedOutCalls.delete(d);
                }
            }
            this.pendingCalls.delete(e);
            let r = Date.now() - i.startTime;
            let a = this.getTimeoutDiagnostics();
            let c = i.routingAckReceived ?? false;
            logger.warn(`[${serverName}] Tool call timeout: ${i.toolName} (${e.slice(0, 8)}) after ${r}ms, pending calls: ${this.pendingCalls.size}`);
            trackEvent?.("chrome_bridge_tool_call_timeout", {
                tool_name: `browser:${i.toolName}`,
                tool_use_id: e,
                duration_ms: r,
                timeout_ms,
                session_id: i.sessionId,
                user_message_uuid: i.userMessageUuid,
                transport: "bridge",
                routing_ack_received: c,
                routing_ack_pong_age_ms: i.routingAckPongAgeMs ?? null,
                permission_paused: i.permissionPaused ?? false,
                ...a
            });
            if (this.isConnected()) {
                i.reject(new Lze(`[${serverName}] Tool call timed out: ${i.toolName}`, {
                    routingAckReceived: c
                }));
            } else {
                i.reject(new wA(`[${serverName}] Tool call timed out with bridge disconnected: ${i.toolName}`));
            }
        }, timeout_ms);
    }
    scheduleReconnect() {
        let { logger, serverName, trackEvent } = this.context;
        if (this.reconnectTimer) {
            return;
        }
        this.reconnectAttempts++;
        if (this.reconnectAttempts > 100) {
            logger.warn(`[${serverName}] Giving up bridge reconnection after 100 attempts`);
            trackEvent?.("chrome_bridge_reconnect_exhausted", {
                total_attempts: 100
            });
            this.reconnectAttempts = 0;
            return;
        }
        let s = Math.min(2000 * 1.5 ** (this.reconnectAttempts - 1), 30000);
        if (this.reconnectAttempts <= 10 || this.reconnectAttempts % 10 === 0) {
            logger.info(`[${serverName}] Bridge reconnecting in ${Math.round(s)}ms (attempt ${this.reconnectAttempts})`);
        }
        this.reconnectTimer = setTimeout(()=>{
            this.reconnectTimer = null;
            this.connect();
        }, s);
    }
    startKeepAlive() {
        this.stopKeepAlive();
        this.lastPongReceived = Date.now();
        let { logger, serverName } = this.context;
        this.keepAliveInterval = setInterval(()=>{
            if (this.ws?.readyState === g.OPEN) {
                this.ws.send(JSON.stringify({
                    type: "ping"
                }));
            }
            if (this.lastPongReceived > 0 && Date.now() - this.lastPongReceived > C) {
                logger.warn(`[${serverName}] No pong received in ${C}ms, closing dead connection`);
                this.rejectPendingCalls(new wA("Bridge keepalive timeout — connection dead"));
                this.closeSocket();
                this.scheduleReconnect();
            }
        }, O);
    }
    stopKeepAlive() {
        if (this.keepAliveInterval) {
            clearInterval(this.keepAliveInterval);
            this.keepAliveInterval = null;
        }
        this.lastPongReceived = 0;
    }
    closeSocket() {
        this.stopKeepAlive();
        if (this.handshakeTimer) {
            clearTimeout(this.handshakeTimer);
            this.handshakeTimer = null;
        }
        if (this.ws) {
            this.ws.removeAllListeners();
            this.ws.on("error", ()=>{});
            this.ws.close();
            this.ws = null;
        }
        this.connected = false;
        this.authenticated = false;
        if (this.selectedDeviceId) {
            this.previousSelectedDeviceId = this.selectedDeviceId;
        }
        this.selectedDeviceId = undefined;
        this.discoveryComplete = false;
        this.multiBrowserPendingSelection = false;
        this.pendingPairingRequestId = undefined;
        this.pairingInProgress = false;
        this.abortPairingPrompt();
        if (this.pendingSwitchResolve) {
            this.pendingSwitchResolve(null);
            this.pendingSwitchResolve = null;
        }
        if (this.pendingDiscovery) {
            clearTimeout(this.pendingDiscovery.timeout);
            this.pendingDiscovery.resolve([]);
            this.pendingDiscovery = null;
        }
        if (this.peerConnectedWaiters.length > 0) {
            let e = this.peerConnectedWaiters;
            this.peerConnectedWaiters = [];
            for (let n of e){
                n(false);
            }
        }
        this.context.onPeerRosterChanged?.();
    }
    rejectPendingCalls(e) {
        for (let n of this.pendingCalls.values()){
            clearTimeout(n.timer);
            n.reject(e);
        }
        this.pendingCalls.clear();
    }
    drainExternalRelays() {
        for (let e of this.pendingExternalMessages.values()){
            clearTimeout(e.timer);
            e.resolve({
                ok: false,
                error: "send_failed"
            });
        }
        this.pendingExternalMessages.clear();
    }
    cleanup() {
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }
        this.rejectPendingCalls(new wA("Bridge client disconnected"));
        this.drainExternalRelays();
        this.closeSocket();
        this.reconnectAttempts = 0;
    }
}
function b(e) {
    return new _(e);
}
const F = 300;
const H = 1000;
const J = 30000;
const j = 10;
const G = {
    steps: [
        [
            2000,
            30
        ]
    ],
    thenMs: 10000
};
const z = {
    steps: [
        [
            2000,
            30
        ]
    ],
    thenMs: 60000
};
const K = {
    steps: [
        [
            3000,
            100
        ]
    ],
    thenMs: 10000
};
const X = (e, attempts, t)=>Math.min(e * 1.5 ** (attempts - 1), t);
function w({ steps, thenMs }, attempts) {
    let s = 0;
    for (let [o, i] of steps){
        s += i;
        if (attempts <= s) {
            return o;
        }
    }
    return thenMs;
}
function Y(e, attempts) {
    switch(e){
        case "transport":
            return X(H, attempts, J);
        case "mismatch":
            return w(K, attempts);
        case "not_ready":
            return w(G, attempts);
        case "token":
            return w(z, attempts);
    }
}
const V = {
    peer_not_ready: "not_ready",
    awaits_token: "token",
    peer_may_move: "mismatch",
    retry: "transport"
};
const x = (cadence)=>({
        attempts: 0,
        timer: null,
        wanted: false,
        cadence
    });
function k(e) {
    return e.replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0085/g, "\\u0085");
}
function Q(availableTabs, n) {
    let t = (i)=>k(JSON.stringify(i));
    let s = availableTabs.map((i)=>{
        let r = i;
        return `  \u2022 tabId ${r.tabId}: ${t(r.title)} (${t(r.url)})`;
    }).join(`
`);
    let o = {
        availableTabs
    };
    if (n !== undefined) {
        o.tabGroupId = n;
    }
    return {
        result: {
            content: [
                {
                    type: "text",
                    text: k(JSON.stringify(o))
                },
                {
                    type: "text",
                    text: `

Tab Context:
- Available tabs:
${s}`
                }
            ]
        }
    };
}
class I {
    clients = new Map;
    stragglers = new WeakSet;
    tabRoutes = new Map;
    context;
    notificationHandler = null;
    refreshPromise = null;
    generation = 0;
    unwatchSockets = null;
    scanTimer = null;
    dialing = new WeakSet;
    parked = new WeakSet;
    redials = new WeakMap;
    orphaned = new WeakSet;
    constructor(e){
        this.context = e;
    }
    startProactivePairing() {
        let { localPairing, watchSocketPaths } = this.context;
        if (!localPairing || !watchSocketPaths) {
            return;
        }
        if (!this.unwatchSockets) {
            this.unwatchSockets = watchSocketPaths(()=>this.scheduleScan());
        }
        this.parked = new WeakSet;
        this.scheduleScan();
    }
    scheduleScan() {
        if (this.scanTimer) {
            return;
        }
        this.scanTimer = setTimeout(()=>{
            this.scanTimer = null;
            this.dialAvailable();
        }, F);
        this.scanTimer.unref?.();
    }
    async dialAvailable() {
        if (!this.unwatchSockets || this.context.isDisabled?.()) {
            return;
        }
        let generation = this.generation;
        if (this.refreshPromise) {
            await this.refreshPromise;
        }
        await this.refreshClients();
        if (generation !== this.generation || !this.unwatchSockets) {
            return;
        }
        for (let [n, t] of this.clients.entries()){
            if (t.isConnected()) {
                this.clearRedial(t);
                continue;
            }
            if (this.parked.has(t) || this.dialing.has(t) || this.redials.get(t)?.timer) {
                continue;
            }
            this.clearRedial(t);
            this.dial(n, t);
        }
    }
    dial(e, n) {
        this.dialing.add(n);
        let t = this.redials.get(n);
        if (t) {
            t.wanted = false;
        }
        let s = (o)=>{
            this.dialing.delete(n);
            if (this.clients.get(e) !== n || this.redials.get(n)?.cadence === "dead") {
                return;
            }
            if (o) {
                this.clearRedial(n);
                return;
            }
            if (this.redials.get(n)?.wanted || n.isConnecting()) {
                this.onRedialWanted(e, n);
                return;
            }
            let i = n.lastPairingRefuseCode();
            let r = i === undefined ? "durable" : x4o(i, n.lastPairingRefusePeerReported());
            if (r === "durable") {
                this.parked.add(n);
            } else {
                this.onRedialWanted(e, n, V[r]);
            }
        };
        n.ensureConnected().then(s, ()=>s(false));
    }
    onRedialWanted(e, n, t = "transport") {
        if (!this.unwatchSockets || this.clients.get(e) !== n) {
            return;
        }
        if (this.orphaned.has(n)) {
            this.removeClient(e, n);
            return;
        }
        let s = this.redials.get(n) ?? x(t);
        s.wanted = true;
        if (s.cadence !== t) {
            s.attempts = 0;
            s.cadence = t;
        }
        this.redials.set(n, s);
        if (s.timer) {
            return;
        }
        if (t === "transport" && s.attempts >= j) {
            this.context.logger.info(`[${this.context.serverName}] Giving up on ${e} after ${s.attempts} proactive redials`);
            return;
        }
        s.attempts += 1;
        let o = Y(t, s.attempts);
        s.timer = setTimeout(()=>{
            s.timer = null;
            if (this.unwatchSockets && this.clients.get(e) === n && !this.context.isDisabled?.() && !n.isConnected() && !this.dialing.has(n)) {
                this.dial(e, n);
            }
        }, o);
        s.timer.unref?.();
    }
    onSocketDead(e, n) {
        if (!this.unwatchSockets || this.clients.get(e) !== n) {
            return;
        }
        this.clearRedial(n);
        this.redials.set(n, x("dead"));
        this.refreshClients();
    }
    clearRedial(e) {
        let n = this.redials.get(e);
        if (n?.timer) {
            clearTimeout(n.timer);
        }
        this.redials.delete(e);
    }
    removeClient(e, n) {
        this.context.logger.info(`[${this.context.serverName}] Removing stale socket from pool: ${e}`);
        this.clearRedial(n);
        this.orphaned.delete(n);
        n.disconnect();
        this.clients.delete(e);
        for (let [t, s] of this.tabRoutes.entries()){
            if (s === e) {
                this.tabRoutes.delete(t);
            }
        }
    }
    setNotificationHandler(e) {
        this.notificationHandler = e;
        for (let n of this.clients.values()){
            n.setNotificationHandler(e);
        }
    }
    async ensureConnected() {
        let { logger, serverName } = this.context;
        await this.refreshClients();
        let t = [];
        let s = [];
        for (let i of this.clients.values()){
            if (i.isConnected()) {
                this.stragglers.delete(i);
                continue;
            }
            let r = this.stragglers.has(i);
            let a = i.ensureConnected().then((c)=>{
                if (c) {
                    this.stragglers.delete(i);
                } else {
                    this.stragglers.add(i);
                }
                return c;
            }, ()=>{
                this.stragglers.add(i);
                return false;
            });
            (r ? s : t).push(a);
        }
        await Promise.all(t);
        if (this.getConnectedClients().length === 0) {
            await Promise.all(s);
        }
        let length = this.getConnectedClients().length;
        if (length === 0) {
            logger.info(`[${serverName}] No connected sockets in pool`);
            return false;
        }
        logger.info(`[${serverName}] Socket pool: ${length} connected`);
        return true;
    }
    async callTool(e, n, t) {
        if (e === "tabs_context_mcp") {
            return this.callTabsContext(n, t);
        }
        let n_tabId = n.tabId;
        if (n_tabId !== undefined) {
            let i = this.tabRoutes.get(n_tabId);
            if (i) {
                let r = this.clients.get(i);
                if (r?.isConnected()) {
                    return r.callTool(e, n, t);
                }
            }
        }
        let o = this.getConnectedClients();
        if (o.length === 0) {
            throw new wA(`[${this.context.serverName}] No connected sockets available`);
        }
        return o[0].callTool(e, n, t);
    }
    isConnected() {
        return this.getConnectedClients().length > 0;
    }
    disconnect() {
        this.generation += 1;
        this.refreshPromise = null;
        this.unwatchSockets?.();
        this.unwatchSockets = null;
        if (this.scanTimer) {
            clearTimeout(this.scanTimer);
            this.scanTimer = null;
        }
        for (let e of this.clients.values()){
            this.clearRedial(e);
            e.disconnect();
        }
        this.clients.clear();
        this.tabRoutes.clear();
    }
    getConnectedClients() {
        return [
            ...this.clients.values()
        ].filter((e)=>e.isConnected());
    }
    async callTabsContext(e, n) {
        let { logger, serverName } = this.context;
        let o = this.getConnectedClients();
        if (o.length === 0) {
            throw new wA(`[${serverName}] No connected sockets available`);
        }
        if (o.length === 1) {
            let c = await o[0].callTool("tabs_context_mcp", e, n);
            this.updateTabRoutes(c, this.getSocketPathForClient(o[0]));
            return c;
        }
        let i = await Promise.allSettled(o.map(async (c)=>{
            let result = await c.callTool("tabs_context_mcp", e, n);
            let socketPath = this.getSocketPathForClient(c);
            return {
                result,
                socketPath
            };
        }));
        let r = [];
        let a;
        this.tabRoutes.clear();
        for (let c of i){
            if (c.status !== "fulfilled") {
                logger.info(`[${serverName}] tabs_context_mcp failed on one socket: ${c.reason}`);
                continue;
            }
            let { result, socketPath } = c.value;
            this.updateTabRoutes(result, socketPath);
            let l = this.extractTabs(result);
            if (l) {
                for (let h of l){
                    r.push(h);
                }
            }
            if (a === undefined) {
                a = this.extractTabGroupId(result);
            }
        }
        if (r.length > 0) {
            return Q(r, a);
        }
        for (let c of i){
            if (c.status === "fulfilled") {
                return c.value.result;
            }
        }
        throw new wA(`[${serverName}] All sockets failed for tabs_context_mcp`);
    }
    updateTabRoutes(e, n) {
        let t = this.extractTabs(e);
        if (!t) {
            return;
        }
        for (let s of t){
            if (typeof s === "object" && s !== null && "tabId" in s) {
                let o = s.tabId;
                this.tabRoutes.set(o, n);
            }
        }
    }
    extractTabs(e) {
        if (!e || typeof e !== "object") {
            return null;
        }
        let t = e.result?.content;
        if (!t || !Array.isArray(t)) {
            return null;
        }
        for (let s of t){
            if (s.type === "text" && s.text) {
                try {
                    let o = JSON.parse(s.text);
                    if (Array.isArray(o)) {
                        return o;
                    }
                    let i = o;
                    if (i && Array.isArray(i.availableTabs)) {
                        return i.availableTabs;
                    }
                } catch  {}
            }
        }
        return null;
    }
    extractTabGroupId(e) {
        if (!e || typeof e !== "object") {
            return;
        }
        let t = e.result?.content;
        if (!t || !Array.isArray(t)) {
            return;
        }
        for (let s of t){
            if (s.type === "text" && s.text) {
                try {
                    let o = JSON.parse(s.text);
                    if (typeof o.tabGroupId === "number") {
                        return o.tabGroupId;
                    }
                } catch  {}
            }
        }
    }
    getSocketPathForClient(e) {
        for (let [n, t] of this.clients.entries()){
            if (t === e) {
                return n;
            }
        }
        return "";
    }
    refreshClients() {
        if (!this.refreshPromise) {
            let e = this.doRefreshClients().finally(()=>{
                if (this.refreshPromise === e) {
                    this.refreshPromise = null;
                }
            });
            this.refreshPromise = e;
        }
        return this.refreshPromise;
    }
    async doRefreshClients() {
        let { logger, serverName } = this.context;
        let generation = this.generation;
        let s;
        try {
            s = await this.context.getSocketPaths?.() ?? [];
        } catch (error) {
            logger.info(`[${serverName}] Socket scan failed:`, error);
            return;
        }
        if (generation !== this.generation) {
            return;
        }
        for (let socketPath of s){
            if (!this.clients.has(socketPath)) {
                logger.info(`[${serverName}] Adding socket to pool: ${socketPath}`);
                let i = {
                    ...this.context,
                    socketPath,
                    getSocketPath: undefined,
                    getSocketPaths: undefined
                };
                let r = y7n(i);
                r.disableAutoReconnect = true;
                r.onRedialWanted = (a)=>{
                    if (a === "dead") {
                        return this.onSocketDead(socketPath, r);
                    }
                    return this.onRedialWanted(socketPath, r, a === "peer_dropped" ? "not_ready" : "transport");
                };
                if (this.notificationHandler) {
                    r.setNotificationHandler(this.notificationHandler);
                }
                this.clients.set(socketPath, r);
            }
        }
        for (let [o, i] of this.clients.entries()){
            if (s.includes(o)) {
                this.orphaned.delete(i);
            } else if (i.isConnected()) {
                this.orphaned.add(i);
            } else {
                this.removeClient(o, i);
            }
        }
    }
}
function T(e) {
    return new I(e);
}
const R = new Map;
const E = "frontLoadedTabGroupId";
const Z = [
    E,
    "isBridgeTimeout",
    "isFrontLoadBoundExceeded"
];
function D(e) {
    return bMe.filter((n)=>(e.bridgeConfig !== undefined || !O4o.has(n.name)) && !e.excludedTools?.has(n.name));
}
function czo(e) {
    if (e.bridgeConfig) {
        return b(e);
    }
    if (e.getSocketPaths) {
        return T(e);
    }
    return y7n(e);
}
function a9n(e, n) {
    let { serverName, logger } = e;
    let o = n ?? czo(e);
    let i = new qie({
        name: serverName,
        version: "1.0.0"
    }, {
        capabilities: {
            tools: {
                listChanged: true
            },
            logging: {}
        }
    });
    i.setRequestHandler(Kie, ()=>{
        if (e.isDisabled?.()) {
            return {
                tools: []
            };
        }
        let r = M4o(e.askUserToolName);
        return {
            tools: [
                ...D(e).map((c)=>{
                    if (c.name === "list_connected_browsers") {
                        return {
                            ...c,
                            description: `${c.description} ${r}`
                        };
                    }
                    return c;
                }),
                ...e.hostTools?.() ?? []
            ]
        };
    });
    i.setRequestHandler(B6, async (r)=>{
        logger.info(`[${serverName}] Executing tool: ${yMe(r.params.name)}`);
        let a = e.getRendererSessionScope?.(r.params._meta);
        let c = a ? {
            permissionMode: "ask",
            sessionScope: {
                ...a,
                tabGroupId: R.get(a.sessionId)
            }
        } : undefined;
        let result = await zbn(e, o, r.params.name, r.params.arguments || {}, c);
        if (a && !result.isError) {
            let u = result._meta?.[E];
            let l = typeof u === "number" ? u : r.params.name === "tabs_context_mcp" ? uzt({
                result
            }).tabGroupId : undefined;
            if (l !== undefined) {
                R.set(a.sessionId, l);
            }
        }
        if (result._meta) {
            for (let u of Z){
                delete result._meta[u];
            }
        }
        return result;
    });
    o.setNotificationHandler((r)=>{
        logger.info(`[${serverName}] Forwarding MCP notification: ${yMe(r.method)}`);
        i.notification({
            method: r.method,
            params: r.params
        }).catch((a)=>{
            logger.info(`[${serverName}] Failed to forward MCP notification: ${a.message}`);
        });
    });
    return i;
}
export { czo, a9n };
