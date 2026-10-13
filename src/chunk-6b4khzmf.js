import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d, pe, Br, $q } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t6 } from "/$bunfs/root/chunk-x0qpydt2.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { eu } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Yn } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { St, _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Gl, ar } from "/$bunfs/root/chunk-c56kpkt7.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { oTr } from "/$bunfs/root/chunk-xb9cceab.js";
import { Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Uw, jv } from "/$bunfs/root/chunk-55x53sfe.js";
import { G7 } from "/$bunfs/root/chunk-pp3y3t61.js";
import { pmo } from "/$bunfs/root/chunk-5s4qvyjz.js";
import { LIe, CLr } from "/$bunfs/root/chunk-ztdmpyqt.js";
import { zd, qI, yLn } from "/$bunfs/root/chunk-4r6b8efh.js";
import { KC, t0e, AL, n0e, p4, Ni } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { oFo, xLr, sFo, iFo, aFo, wun, PLr, lFo, AU, cFo, dFo, ILr, H6n, OLr, gJe } from "/$bunfs/root/chunk-0qnysq84.js";
import { kme, djt } from "/$bunfs/root/chunk-hvx9h8xm.js";
import { nun, run, b6n, ngt, Tje } from "/$bunfs/root/chunk-vfe4z8cp.js";
import { fJe } from "/$bunfs/root/chunk-x1hgc1tw.js";
import { TG } from "/$bunfs/root/chunk-6h6b52q8.js";
import { lae } from "/$bunfs/root/chunk-nc91yayz.js";
import { age } from "/$bunfs/root/chunk-7zrhxtr7.js";
import { o, E, PP, u, Ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { tU } from "/$bunfs/root/chunk-m007m726.js";
import { hostname } from "os";
class X {
    transport;
    announced;
    now;
    random;
    onEvent;
    onTransportEvent;
    started = false;
    stopping = false;
    timers = ILr(PLr);
    lastAckAt = 0;
    reconnectAttempts = 0;
    consecutiveSlotContention = 0;
    lastFailureWasContention = false;
    contentionBackoffNotified = false;
    consecutivePongTimeouts = 0;
    keepaliveTimer;
    reconnectTimer;
    stableTimer;
    reannounce = {
        phase: "idle"
    };
    constructor(e){
        this.transport = e.transport;
        this.announced = e.announced;
        this.onEvent = e.onEvent;
        this.onTransportEvent = e.onTransportEvent;
        this.now = e.now ?? Date.now;
        this.random = e.random ?? Math.random;
        this.transport.onevent = this.handleTransportEvent;
    }
    start() {
        if (this.started) {
            return;
        }
        this.started = true;
        this.openConnection();
    }
    async stop() {
        this.stopping = true;
        this.clearReconnectTimer();
        this.clearConnectionTimers();
        this.cancelReannounce();
        await this.transport.close();
    }
    requestReannounce(e) {
        if (!this.started || this.stopping) {
            return;
        }
        let n = wun[e];
        switch(this.reannounce.phase){
            case "draining":
            case "rotating":
                return;
            case "coalescing":
                if (this.reannounce.fireAt <= this.now() + n) {
                    return;
                }
                clearTimeout(this.reannounce.timer);
                break;
            case "idle":
                break;
        }
        this.reannounce = {
            phase: "coalescing",
            reason: e,
            fireAt: this.now() + n,
            timer: setTimeout(this.beginReannounce, n)
        };
    }
    getReconnectAttempts() {
        return this.reconnectAttempts;
    }
    getConsecutiveSlotContention() {
        return this.consecutiveSlotContention;
    }
    getConsecutivePongTimeouts() {
        return this.consecutivePongTimeouts;
    }
    handleTransportEvent = (e)=>{
        this.notifyTransportListener(e);
        switch(e.kind){
            case "authenticated":
                this.handleAuthenticated(e.protocolVersion, e.timings);
                return;
            case "hb_ack":
                this.handleAck();
                return;
            case "rejected":
                {
                    let n = this.endRotation();
                    let r = n !== undefined && e.reason === "duplicate_device_id";
                    if (r) {
                        this.emit({
                            kind: "reannounce_contended",
                            reason: n
                        });
                    } else if (e.slotContention) {
                        this.lastFailureWasContention = true;
                    }
                    this.cancelDrain();
                    this.clearConnectionTimers();
                    this.scheduleReconnect(r);
                    return;
                }
            case "closed":
                if (e.superseded) {
                    this.lastFailureWasContention = true;
                }
                this.endRotation();
                this.cancelDrain();
                this.clearConnectionTimers();
                this.scheduleReconnect();
                return;
            case "handshake_timeout":
            case "dial_failed":
            case "token_unavailable":
                this.endRotation();
                this.cancelDrain();
                this.clearConnectionTimers();
                this.scheduleReconnect();
                return;
            case "transport_closed":
                this.stopping = true;
                this.clearReconnectTimer();
                this.clearConnectionTimers();
                this.cancelReannounce();
                return;
            case "connecting":
            case "socket_error":
            case "inbound_unknown":
            case "inbound_invalid":
            case "outbound_dropped":
                return;
        }
    };
    async openConnection() {
        if (this.stopping) {
            return;
        }
        try {
            await this.transport.openConnection();
        } catch (error) {
            t(`[deviceBridge] open connection failed: ${W(error).message}`);
            this.endRotation();
            this.scheduleReconnect();
        }
    }
    handleAuthenticated(protocolVersion, n) {
        if (this.stopping) {
            return;
        }
        this.timers = ILr(n);
        this.lastAckAt = this.now();
        this.clearKeepaliveTimer();
        if (this.endRotation() === undefined || this.stableTimer === undefined) {
            this.clearStableTimer();
            this.stableTimer = setTimeout(this.markStable, iFo);
        }
        if (this.announced.hasUnservedChange()) {
            this.requestReannounce("connected_stale");
        }
        if (protocolVersion < 1) {
            this.consecutivePongTimeouts = 0;
            this.emit({
                kind: "heartbeat_unsupported",
                protocolVersion
            });
            return;
        }
        this.keepaliveTimer = setInterval(this.keepaliveTick, this.timers.keepaliveIntervalMs);
        this.sendHeartbeat();
    }
    handleAck() {
        this.lastAckAt = this.now();
        if (this.consecutivePongTimeouts > 0) {
            this.consecutivePongTimeouts = 0;
            this.reconnectAttempts = 0;
        }
    }
    keepaliveTick = ()=>{
        if (!this.transport.isAuthenticated()) {
            return;
        }
        if (this.now() - this.lastAckAt > this.timers.pongTimeoutMs) {
            this.consecutivePongTimeouts++;
            this.emit({
                kind: "pong_timeout",
                consecutive: this.consecutivePongTimeouts
            });
            this.cancelDrain();
            this.clearConnectionTimers();
            this.transport.disconnect();
            this.scheduleReconnect();
            return;
        }
        this.sendHeartbeat();
    };
    sendHeartbeat() {
        this.transport.sendRaw(oFo);
    }
    markStable = ()=>{
        this.stableTimer = undefined;
        this.consecutiveSlotContention = 0;
        this.contentionBackoffNotified = false;
        if (this.consecutivePongTimeouts === 0) {
            this.reconnectAttempts = 0;
        }
        this.emit({
            kind: "stabilized"
        });
    };
    scheduleReconnect(e = false) {
        if (this.stopping || !this.started || this.reconnectTimer !== undefined) {
            return;
        }
        let delayMs = this.nextDelayMs(e);
        if (this.stopping) {
            return;
        }
        this.reconnectTimer = setTimeout(this.reconnect, delayMs);
        this.emit({
            kind: "reconnect_scheduled",
            delayMs,
            attempt: this.reconnectAttempts,
            slotContention: this.consecutiveSlotContention > 0
        });
    }
    nextDelayMs(e) {
        let lastFailureWasContention = this.lastFailureWasContention;
        this.lastFailureWasContention = false;
        if (e) {
            return H6n(0, 1, this.timers.slotContentionFastAttempts, this.random);
        }
        if (lastFailureWasContention) {
            this.consecutiveSlotContention++;
            if (this.consecutiveSlotContention > this.timers.slotContentionFastAttempts && !this.contentionBackoffNotified) {
                this.contentionBackoffNotified = true;
                this.emit({
                    kind: "slot_contention_backoff",
                    consecutive: this.consecutiveSlotContention
                });
            }
            return H6n(0, this.consecutiveSlotContention, this.timers.slotContentionFastAttempts, this.random);
        }
        this.consecutiveSlotContention = 0;
        this.contentionBackoffNotified = false;
        if (this.reconnectAttempts >= sFo) {
            this.reconnectAttempts = 0;
            this.emit({
                kind: "reconnect_exhausted"
            });
            try {
                this.transport.onerror?.(Error("Bridge unreachable"));
            } catch (error) {
                t(`[deviceBridge] transport onerror listener threw: ${W(error).message}`);
            }
        }
        let r = H6n(this.reconnectAttempts, 0, this.timers.slotContentionFastAttempts, this.random);
        this.reconnectAttempts++;
        return r;
    }
    reconnect = ()=>{
        this.reconnectTimer = undefined;
        this.openConnection();
    };
    beginReannounce = ()=>{
        if (this.reannounce.phase !== "coalescing") {
            return;
        }
        let { reason } = this.reannounce;
        this.reannounce = {
            phase: "idle"
        };
        if (this.stopping) {
            return;
        }
        let inFlightAtStart = this.announced.inFlightCalls();
        let r = this.reannounceSkipOutcome();
        if (r !== undefined) {
            this.emit({
                kind: "reannounce",
                reason,
                outcome: r,
                inFlightAtStart,
                drainedMs: 0,
                drainTimedOut: false
            });
            return;
        }
        let s = {
            phase: "draining",
            reason,
            startedAt: this.now(),
            inFlightAtStart,
            timer: setTimeout(this.handleDrainTimeout, this.timers.rotateDrainMaxMs)
        };
        this.reannounce = s;
        this.announced.whenIdle().then(()=>this.rotate(s, false), ()=>this.rotate(s, false));
    };
    handleDrainTimeout = ()=>{
        if (this.reannounce.phase === "draining") {
            this.rotate(this.reannounce, true);
        }
    };
    rotate(e, drainTimedOut) {
        if (this.reannounce !== e) {
            return;
        }
        clearTimeout(e.timer);
        this.reannounce = {
            phase: "idle"
        };
        if (this.stopping) {
            return;
        }
        let r = this.reannounceSkipOutcome() ?? "rotated";
        if (r === "rotated") {
            this.reannounce = {
                phase: "rotating",
                reason: e.reason
            };
        }
        this.emit({
            kind: "reannounce",
            reason: e.reason,
            outcome: r,
            inFlightAtStart: e.inFlightAtStart,
            drainedMs: this.now() - e.startedAt,
            drainTimedOut
        });
        if (this.reannounce.phase !== "rotating" || this.stopping) {
            return;
        }
        this.clearKeepaliveTimer();
        this.transport.disconnect();
        this.openConnection();
    }
    reannounceSkipOutcome() {
        if (!this.announced.hasUnservedChange()) {
            return "already_served";
        }
        if (!this.transport.isAuthenticated()) {
            return "not_connected";
        }
    }
    endRotation() {
        if (this.reannounce.phase !== "rotating") {
            return;
        }
        let { reason } = this.reannounce;
        this.reannounce = {
            phase: "idle"
        };
        return reason;
    }
    cancelDrain() {
        if (this.reannounce.phase !== "draining") {
            return;
        }
        let reannounce = this.reannounce;
        clearTimeout(reannounce.timer);
        this.reannounce = {
            phase: "idle"
        };
        this.emit({
            kind: "reannounce",
            reason: reannounce.reason,
            outcome: "not_connected",
            inFlightAtStart: reannounce.inFlightAtStart,
            drainedMs: this.now() - reannounce.startedAt,
            drainTimedOut: false
        });
    }
    cancelReannounce() {
        switch(this.reannounce.phase){
            case "coalescing":
            case "draining":
                clearTimeout(this.reannounce.timer);
                break;
            case "rotating":
            case "idle":
                break;
        }
        this.reannounce = {
            phase: "idle"
        };
    }
    emit(e) {
        try {
            this.onEvent?.(e);
        } catch (error) {
            t(`[deviceBridge] liveness event listener threw: ${W(error).message}`);
        }
    }
    notifyTransportListener(e) {
        try {
            this.onTransportEvent?.(e);
        } catch (error) {
            t(`[deviceBridge] transport event listener threw: ${W(error).message}`);
        }
    }
    clearReconnectTimer() {
        if (this.reconnectTimer === undefined) {
            return;
        }
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = undefined;
    }
    clearConnectionTimers() {
        this.clearKeepaliveTimer();
        this.clearStableTimer();
    }
    clearKeepaliveTimer() {
        if (this.keepaliveTimer !== undefined) {
            clearInterval(this.keepaliveTimer);
            this.keepaliveTimer = undefined;
        }
    }
    clearStableTimer() {
        if (this.stableTimer !== undefined) {
            clearTimeout(this.stableTimer);
            this.stableTimer = undefined;
        }
    }
}
function ae() {
    let e = new Map;
    let n = Oe();
    let r = se(e);
    let s;
    return {
        get: (a)=>r.byName.get(a),
        setGroup (a, l, y = "tools_changed") {
            e.set(a, [
                ...l
            ]);
            let f = se(e);
            let w = r;
            r = f;
            if (f.dropped.length > 0 && _(f.dropped) !== _(w.dropped)) {
                t(`[deviceBridge] duplicate device tool names not announced: ${_(f.dropped)}`);
            }
            if (f.hash === w.hash) {
                return;
            }
            try {
                n.emit(y);
            } catch (error) {
                for (let S of error instanceof AggregateError ? error.errors : [
                    error
                ]){
                    c(S);
                }
            }
        },
        definitions: ()=>r.definitions,
        definitionsOf: (a)=>(e.get(a) ?? []).flatMap((l)=>{
                if (r.byName.get(l.definition.name) === l) {
                    return [
                        l.definition
                    ];
                }
                return [];
            }),
        serve () {
            s = r.hash;
            return r.definitions;
        },
        hasUnservedChange: ()=>s !== r.hash,
        subscribe: n.subscribe
    };
}
function se(e) {
    let { byName, dropped } = [
        ...e.values()
    ].flat().reduce((acc, item)=>{
        let name = item.definition.name;
        if (acc.byName.has(name)) {
            acc.dropped.push(name);
        } else {
            acc.byName.set(name, item);
        }
        return acc;
    }, {
        byName: new Map,
        dropped: []
    });
    let definitions = [
        ...byName.values()
    ].map((a)=>a.definition);
    return {
        byName,
        definitions,
        dropped,
        hash: tU(_(definitions))
    };
}
const De = 0;
const q = 1;
const code = -32603;
const de = Symbol("device-bridge-token-deadline");
const ce = "__synthetic_init__";
const V = 33554432;
function Ae(e) {
    let n = new globalThis.WebSocket(e, {
        proxy: jv(e),
        tls: Uw() || undefined
    });
    n.binaryType = "arraybuffer";
    return n;
}
class ee {
    options;
    onclose;
    onerror;
    onmessage;
    onevent;
    started = false;
    closing = false;
    ws;
    pendingToken;
    authenticated = false;
    connectGeneration = 0;
    handshakeTimer;
    negotiated;
    constructor(e){
        this.options = e;
    }
    async start() {
        if (this.started) {
            throw Error("DeviceBridgeTransport start can only be called once.");
        }
        this.started = true;
    }
    async close() {
        if (this.closing) {
            return;
        }
        this.closing = true;
        this.disconnect();
        this.emit({
            kind: "transport_closed"
        });
        this.onclose?.();
    }
    async send(e) {
        if (Me(e)) {
            return;
        }
        let n = this.ws;
        if (!n || !this.authenticated || n.readyState !== q) {
            this.emit({
                kind: "outbound_dropped",
                messageType: Z(e) === undefined ? "other" : "request"
            });
            return;
        }
        try {
            n.send(_(e));
        } catch (error) {
            t(`[deviceBridge] outbound send failed: ${W(error).message}`);
            this.emit({
                kind: "outbound_dropped",
                messageType: Z(e) === undefined ? "other" : "request"
            });
        }
    }
    sendRaw(e) {
        let n = this.ws;
        if (!n || n.readyState !== q) {
            return false;
        }
        try {
            n.send(e);
        } catch (error) {
            t(`[deviceBridge] raw send failed: ${W(error).message}`);
            return false;
        }
        return true;
    }
    isAuthenticated() {
        return this.authenticated;
    }
    isConnected() {
        return this.ws !== undefined;
    }
    getNegotiated() {
        return this.negotiated;
    }
    async openConnection() {
        if (this.closing || this.ws) {
            return;
        }
        let e = ++this.connectGeneration;
        let n = await this.resolveAccessToken();
        if (e !== this.connectGeneration || this.closing || this.ws !== undefined) {
            return;
        }
        if (!n) {
            this.emit({
                kind: "token_unavailable"
            });
            return;
        }
        let r;
        let s;
        try {
            r = this.options.getUrl();
            s = (this.options.isAllowedUrl ?? oTr)(r);
        } catch (error) {
            this.emit({
                kind: "dial_failed",
                error: W(error)
            });
            return;
        }
        if (!s) {
            t("[deviceBridge] refusing dial: bridge URL failed validation");
            this.emit({
                kind: "dial_failed",
                error: Error("bridge URL failed validation")
            });
            return;
        }
        let a;
        try {
            a = (this.options.createSocket ?? Ae)(r);
        } catch (error) {
            this.emit({
                kind: "dial_failed",
                error: W(error)
            });
            return;
        }
        this.ws = a;
        this.pendingToken = n;
        this.handshakeTimer = setTimeout(this.handleHandshakeTimeout, xLr);
        a.addEventListener("open", this.handleOpen);
        a.addEventListener("message", this.handleMessage);
        a.addEventListener("close", this.handleClose);
        a.addEventListener("error", this.handleSocketError);
        this.emit({
            kind: "connecting"
        });
        if (this.closing || this.ws !== a) {
            return;
        }
        if (a.readyState === q) {
            this.handleOpen();
        }
    }
    async resolveAccessToken() {
        let e;
        try {
            let n = await Promise.race([
                Promise.resolve(this.options.getAccessToken()),
                new Promise((resolve)=>{
                    e = setTimeout((s)=>s(de), xLr, resolve);
                })
            ]);
            if (n === de) {
                t("[deviceBridge] access token resolution timed out");
                return;
            }
            return n;
        } catch (error) {
            t(`[deviceBridge] access token resolution failed: ${W(error).message}`);
            return;
        } finally{
            if (e !== undefined) {
                clearTimeout(e);
            }
        }
    }
    disconnect() {
        this.connectGeneration++;
        this.clearHandshakeTimer();
        this.pendingToken = undefined;
        this.authenticated = false;
        this.negotiated = undefined;
        let e = this.ws;
        if (!e) {
            return;
        }
        this.ws = undefined;
        e.removeEventListener("open", this.handleOpen);
        e.removeEventListener("message", this.handleMessage);
        e.removeEventListener("close", this.handleClose);
        e.removeEventListener("error", this.handleSocketError);
        if (e.readyState === q || e.readyState === De) {
            try {
                e.close();
            } catch (error) {
                t(`[deviceBridge] socket close failed: ${W(error).message}`);
            }
        }
    }
    emit(e) {
        try {
            this.onevent?.(e);
        } catch (error) {
            t(`[deviceBridge] transport event listener threw: ${W(error).message}`);
        }
    }
    clearHandshakeTimer() {
        if (this.handshakeTimer === undefined) {
            return;
        }
        clearTimeout(this.handshakeTimer);
        this.handshakeTimer = undefined;
    }
    handleHandshakeTimeout = ()=>{
        this.handshakeTimer = undefined;
        if (!this.ws || this.authenticated) {
            return;
        }
        this.disconnect();
        this.emit({
            kind: "handshake_timeout"
        });
    };
    handleOpen = ()=>{
        let e = this.ws;
        let pendingToken = this.pendingToken;
        if (!e || pendingToken === undefined) {
            return;
        }
        this.pendingToken = undefined;
        try {
            e.send(_(cFo({
                oauthToken: pendingToken,
                tools: this.options.getTools(),
                deviceId: this.options.getDeviceId?.(),
                sessionId: this.options.getSessionId()
            })));
        } catch (error) {
            this.disconnect();
            this.emit({
                kind: "dial_failed",
                error: W(error)
            });
        }
    };
    handleMessage = (e)=>{
        let n = Le(e.data);
        if (n.kind === "unsupported") {
            t("[deviceBridge] dropping unsupported inbound payload type");
            this.emit({
                kind: "inbound_invalid",
                error: Error("unsupported inbound payload type")
            });
            return;
        }
        if (n.kind === "oversize") {
            t(`[deviceBridge] dropping ${n.size}-unit inbound frame (cap ${V})`);
            this.emit({
                kind: "inbound_invalid",
                error: Error("inbound frame exceeded the device bridge size cap")
            });
            return;
        }
        let r = dFo(n.text);
        switch(r.kind){
            case "ignored":
                if (this.authenticated) {
                    t("[deviceBridge] dropping unparseable inbound frame");
                    this.emit({
                        kind: "inbound_invalid",
                        error: Error("unparseable inbound frame")
                    });
                }
                return;
            case "hb_ack":
                this.emit({
                    kind: "hb_ack"
                });
                return;
            case "error":
                this.handleReject(r.reason, r.status, r.detail);
                return;
            case "connected":
                this.authenticate(r.protocolVersion, r.timings);
                return;
            case "unknown":
                this.emit({
                    kind: "inbound_unknown",
                    frameType: r.frameType
                });
                return;
            case "rpc":
                this.deliver(r.message);
                return;
        }
    };
    authenticate(protocolVersion, timings) {
        if (this.authenticated) {
            return;
        }
        this.clearHandshakeTimer();
        this.authenticated = true;
        this.negotiated = {
            protocolVersion,
            timings
        };
        this.emit({
            kind: "authenticated",
            protocolVersion,
            timings
        });
        if (this.closing || this.ws === undefined) {
            return;
        }
        this.injectSyntheticInitialize();
    }
    injectSyntheticInitialize() {
        let e;
        try {
            e = this.options.parseMessage(Pe());
        } catch (error) {
            this.emit({
                kind: "inbound_invalid",
                error: W(error)
            });
            return;
        }
        try {
            this.onmessage?.(e);
        } catch (error) {
            this.emit({
                kind: "inbound_invalid",
                error: W(error)
            });
        }
    }
    handleReject(e, status, detail) {
        let s = !this.authenticated;
        this.disconnect();
        this.emit({
            kind: "rejected",
            phase: s ? "pre_auth" : "post_auth",
            reason: e,
            status,
            detail,
            slotContention: s && lFo(e)
        });
    }
    deliver(e) {
        if (!this.authenticated) {
            return;
        }
        let n;
        try {
            n = this.options.parseMessage(e);
        } catch (error) {
            this.emit({
                kind: "inbound_invalid",
                error: W(error)
            });
            this.replyInternalError(e);
            return;
        }
        try {
            this.onmessage?.(n);
        } catch (error) {
            this.emit({
                kind: "inbound_invalid",
                error: W(error)
            });
            this.replyInternalError(e);
        }
    }
    replyInternalError(e) {
        let n = Z(e);
        if (n === undefined) {
            return;
        }
        this.sendRaw(_({
            jsonrpc: "2.0",
            id: n,
            error: {
                code,
                message: "internal error"
            }
        }));
    }
    handleClose = (e)=>{
        let phase = this.authenticated ? "post_auth" : "pre_auth";
        let code_1 = typeof e.code === "number" ? e.code : undefined;
        let reason = typeof e.reason === "string" ? e.reason : undefined;
        this.disconnect();
        this.emit({
            kind: "closed",
            phase,
            code: code_1,
            reason,
            superseded: code_1 === aFo
        });
    };
    handleSocketError = ()=>{
        this.emit({
            kind: "socket_error"
        });
    };
}
function Pe() {
    return {
        jsonrpc: "2.0",
        id: ce,
        method: "initialize",
        params: {
            protocolVersion: "2024-11-05",
            capabilities: {},
            clientInfo: {
                name: "remote-tools-bridge",
                version: "1.0.0"
            }
        }
    };
}
function Me(e) {
    return "id" in e && e.id === ce && ("result" in e || "error" in e);
}
const Ie = p(()=>u({
        jsonrpc: A("2.0"),
        id: Ue([
            o(),
            E()
        ]),
        method: o(),
        result: PP().optional(),
        error: PP().optional()
    }));
function Z(e) {
    let n = Ie().safeParse(e);
    if (n.success) {
        return n.data.id;
    }
}
function Le(text) {
    if (typeof text === "string") {
        if (text.length > V) {
            return {
                kind: "oversize",
                size: text.length
            };
        }
        return {
            kind: "text",
            text
        };
    }
    if (text instanceof ArrayBuffer) {
        if (text.byteLength > V) {
            return {
                kind: "oversize",
                size: text.byteLength
            };
        }
        return {
            kind: "text",
            text: Buffer.from(text).toString("utf8")
        };
    }
    if (ArrayBuffer.isView(text)) {
        if (text.byteLength > V) {
            return {
                kind: "oversize",
                size: text.byteLength
            };
        }
        return {
            kind: "text",
            text: Buffer.from(text.buffer, text.byteOffset, text.byteLength).toString("utf8")
        };
    }
    return {
        kind: "unsupported"
    };
}
function le(kit) {
    return {
        policy: kit.policy,
        get description () {
            return kit.description;
        },
        onRedescribed: kit.onRedescribed,
        heldServedCall: kit.heldServedCall,
        ensureSettingsHeld: kit.ensureSettingsHeld,
        deps: kit.deps
    };
}
function he(registry) {
    let n = ()=>_([
            registry.definitionsOf(ngt),
            registry.definitionsOf(Tje)
        ]);
    return {
        native: ()=>registry.definitionsOf(ngt).flatMap(Ne),
        passthrough: ()=>registry.definitionsOf(Tje).flatMap(ue),
        localNameFor: (r)=>registry.definitionsOf(Tje).filter((s)=>s.name === r).flatMap(ue)[0]?.local_name,
        subscribe: (r)=>{
            let s = n();
            return registry.subscribe((a)=>{
                let l = n();
                if (l !== s) {
                    s = l;
                    r(a);
                }
            });
        }
    };
}
function Ne(e) {
    let n = yLn(e._meta?.[qI]);
    if (n === undefined) {
        return [];
    }
    return [
        {
            name: e.name,
            refused_input_fields: n.refused_input_fields,
            protocol_versions: n.protocol_versions ?? [
                zd
            ],
            description: e.description,
            input_schema: e.inputSchema
        }
    ];
}
function ue(e) {
    let n = djt(e._meta?.[kme]);
    if (n === undefined) {
        return [];
    }
    let annotations = xe(e.annotations ?? {});
    let hints = Fe(e._meta ?? {});
    return [
        {
            name: e.name,
            local_name: n.tool,
            description: e.description,
            input_schema: e.inputSchema,
            ...annotations !== undefined && {
                annotations
            },
            ...hints !== undefined && {
                hints
            }
        }
    ];
}
function xe({ title, readOnlyHint, destructiveHint, openWorldHint }) {
    let a = {
        ...title !== undefined && {
            title
        },
        ...readOnlyHint !== undefined && {
            readOnlyHint
        },
        ...destructiveHint !== undefined && {
            destructiveHint
        },
        ...openWorldHint !== undefined && {
            openWorldHint
        }
    };
    if (Object.keys(a).length > 0) {
        return a;
    }
}
function Fe(e) {
    let search_hint = e[AU.searchHint];
    let r = e[AU.alwaysLoad];
    let max_result_size_chars = e[AU.maxResultSizeChars];
    let a = e[AU.requiresUserInteraction];
    let l = {
        ...typeof search_hint === "string" && {
            search_hint
        },
        ...r === true && {
            always_load: true
        },
        ...typeof max_result_size_chars === "number" && {
            max_result_size_chars
        },
        ...a === true && {
            requires_user_interaction: true
        }
    };
    if (Object.keys(l).length > 0) {
        return l;
    }
}
const He = "wss://bridge.claudeusercontent.com";
const We = "wss://bridge-staging.claudeusercontent.com";
const ve = 8;
const $e = "served-bridge-trusted-devices";
const version = typeof {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.296",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-09T01:31:52Z",
    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
} !== "undefined" ? ({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.296",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-09T01:31:52Z",
    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
}).VERSION : "unknown";
function ze(e, sessionId) {
    let r = gJe(e);
    let s = OLr(ar(sessionId).slice(-ve), ve);
    if (s) {
        return `${r}-cc-${s}`;
    }
    return r;
}
function Ke(e, orgUuid, accountUuid, s) {
    return `${e}/devices/${encodeURIComponent(orgUuid)}_${encodeURIComponent(accountUuid)}/${encodeURIComponent(s)}/bridge`;
}
function qe(e, n) {
    let r;
    let s;
    try {
        r = new URL(e);
        s = new URL(n);
    } catch  {
        return false;
    }
    let a = r.hostname === "localhost" || r.hostname === "127.0.0.1" || r.hostname === "[::1]";
    return r.origin === s.origin && r.username === "" && r.password === "" && (r.protocol === "wss:" || r.protocol === "ws:" && a);
}
function Ve() {
    if (Yn.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== undefined) {
        return Yn.CLAUDE_REMOTE_TOOLS_BRIDGE_URL;
    }
    switch(t6()){
        case "":
            return He;
        case "-staging-oauth":
            return We;
        default:
            return;
    }
}
function V0t(options) {
    let n = options.transport ?? (AL() ? "bridge" : "auto");
    let r = false;
    let s;
    let a;
    let l;
    let y;
    let f = false;
    let w = false;
    let v = false;
    let S = new Set;
    let I = false;
    let k;
    let registry_1;
    let servingKit = {
        current: undefined
    };
    let M = (h)=>y ??= G(h);
    let G = async (h)=>{
        r = true;
        a?.();
        a = undefined;
        if (f) {
            await started.catch(()=>false);
        }
        s?.();
        s = undefined;
        l?.();
        l = undefined;
        servingKit.current?.kit.dispose();
        await J(h);
    };
    let J = async (h)=>{
        let b = k;
        if (b === undefined) {
            return;
        }
        k = undefined;
        await b.stop();
        if (w) {
            i("tengu_device_bridge_stopped", {
                reason: d(h)
            });
        }
    };
    let j = async ()=>{
        let readiness = options.readiness ?? (await import("/$bunfs/root/chunk-ywx1r1yk.js")).createServingReadiness();
        let b = performance.now();
        await readiness.whenReady();
        let readiness_wait_ms = Math.round(performance.now() - b);
        let { cloudClient } = options;
        let T = await (options.isEnabled ?? (()=>CLr({
                cloudClient
            })))();
        f = true;
        if (!T) {
            return false;
        }
        let isEgressAllowed = options.isEgressAllowed ?? age;
        if (!isEgressAllowed()) {
            t("[deviceBridge] skipped: non-essential egress disabled, non-first-party provider, or remote sessions policy-denied");
            return false;
        }
        if (r) {
            return false;
        }
        if (n === "bridge" && (options.isBridgeRefused ?? pmo)()) {
            t("[deviceBridge] skipped: the bridge cannot check a device proof and trusted devices are required or unknown");
            v = true;
            m("device_bridge_register", "trusted_devices_required_or_unknown");
            options.onNotice?.($e, Ni["serving_off.bridge_trusted_devices"]);
            return false;
        }
        let C = await (options.getAccount ?? lae)();
        let e_orgUuid = options.orgUuid;
        if (!e_orgUuid || C.status !== "resolved") {
            i("tengu_device_bridge_skipped", {
                missing_org: e_orgUuid === undefined,
                missing_account: C.status === "missing",
                account_mismatch: C.status === "mismatch"
            });
            t(`[deviceBridge] skipped: ${e_orgUuid ? `account ${C.status}` : "no org"}`);
            return false;
        }
        let { accountUuid } = C;
        let limiter = run(nun);
        registry_1 = ae();
        registry_1.setGroup(b6n, []);
        await t0e();
        if (r) {
            return false;
        }
        let offReason = p4(undefined, {
            ignoringMute: true
        });
        if (offReason === undefined && O() === "windows") {
            KC();
        }
        let hostInventory = offReason === undefined && fJe() ? await import("/$bunfs/root/chunk-gc66grxy.js").then((P)=>P.gatherHostInventory(we())).catch((P)=>{
            c(W(P));
        }) : undefined;
        let be = options.toolGroupProviders ?? await Xe(offReason);
        if (r) {
            return false;
        }
        let Q = [];
        l = Ze(be, {
            registry: registry_1,
            holdStartUntil: (P)=>Q.push(P),
            sessionId: options.sessionId,
            serving: {
                offReason
            },
            getDeviceId: options.getDeviceId ?? (()=>{}),
            limiter,
            storageV5: options.storageV5,
            servedSettingsChanged: options.servedSettingsChanged,
            ...options.deviceMcpQuestion && {
                deviceMcpQuestion: options.deviceMcpQuestion
            },
            servingKit,
            transport: n,
            readiness,
            ...hostInventory !== undefined && {
                hostInventory
            },
            ...options.dirSync !== undefined && {
                dirSync: options.dirSync
            },
            ...options.folderRelation !== undefined && {
                folderRelation: options.folderRelation
            },
            onNotice: options.onNotice ?? ((P, Ee)=>{
                t(`[remote-tools] ${P}: ${Ee}`);
            })
        });
        t(`[deviceBridge] start-up held on ${Q.length} reads of its tool groups`);
        let Te = performance.now();
        await Promise.allSettled(Q);
        let held_ms = Math.round(performance.now() - Te);
        t(`[deviceBridge] start-up released after ${held_ms} ms`);
        if (r) {
            return false;
        }
        let registry = registry_1;
        if (n === "bridge") {
            k = await Je({
                options,
                orgUuid: e_orgUuid,
                accountUuid,
                registry,
                isEgressAllowed,
                isStopped: ()=>r,
                onLivenessEvent,
                onTransportEvent
            });
            if (k === undefined || r) {
                await k?.stop();
                k = undefined;
                return false;
            }
        }
        let re = ()=>{
            if (!isEgressAllowed()) {
                M("egress_denied");
            }
        };
        let Se = options.isStillEnabled ?? (()=>LIe({
                cloudClient
            }) === undefined);
        let oe = ()=>{
            if (!Se()) {
                t("[deviceBridge] stopping: the gate turned off");
                M("gate_off");
            }
        };
        let ke = (options.onEgressGateChange ?? G7)(re);
        let Re = (options.onEnabledChange ?? eu)(oe);
        a = ()=>{
            ke();
            Re();
        };
        re();
        oe();
        if (r) {
            return false;
        }
        w = true;
        i("tengu_device_bridge_started", {
            account_source: d(C.source),
            transport: d(n),
            redial: false,
            readiness_wait_ms,
            held_ms
        });
        if (n === "auto" && !v) {
            v = true;
            g("device_bridge_register");
        }
        k?.start();
        return true;
    };
    let onTransportEvent = (h)=>{
        if (h.kind === "authenticated") {
            S.clear();
            I = false;
            if (!v) {
                v = true;
                g("device_bridge_register");
            }
            me(h);
            return;
        }
        let b = Ye(h);
        if (b === undefined) {
            return;
        }
        if (S.has(b)) {
            return;
        }
        S.add(b);
        me(h);
    };
    let onLivenessEvent = (h)=>{
        if (h.kind === "reconnect_exhausted") {
            if (!v) {
                v = true;
                m("device_bridge_register", "reconnect_exhausted");
            }
            if (I) {
                return;
            }
            I = true;
        }
        Qe(h);
    };
    s = (options.registerExitCleanup ?? St)(()=>M("exit"));
    let started = j().catch((h)=>{
        t(`[deviceBridge] registration failed: ${W(h).message}`);
        i("tengu_device_bridge_start_failed", {});
        if (!v) {
            v = true;
            m("device_bridge_register", "start_failed");
        }
        return false;
    });
    let serving = started.then((h)=>{
        if (h && registry_1 !== undefined && servingKit.current !== undefined) {
            return {
                kit: le(servingKit.current.kit),
                source: he(registry_1)
            };
        }
    });
    started.then((h)=>{
        if (!h && !r) {
            s?.();
            s = undefined;
            l?.();
            l = undefined;
            servingKit.current?.kit.dispose();
        }
    });
    return {
        started,
        announceSettled: ()=>{},
        serving,
        stop: ()=>M("attach_ended"),
        heldServedCall: (h)=>{
            if (r || servingKit.current === undefined) {
                return TG;
            }
            return servingKit.current.kit.heldServedCall(h);
        }
    };
}
async function Je({ options, orgUuid, accountUuid, registry, isEgressAllowed, isStopped, onLivenessEvent, onTransportEvent }) {
    let w = ze((options.getHostname ?? hostname)(), options.sessionId);
    let v = options.getBridgeBaseUrl !== undefined || Yn.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== undefined;
    let S = (options.getBridgeBaseUrl ?? Ve)();
    if (S === undefined) {
        t("[deviceBridge] skipped: no device bridge for this OAuth environment");
        return;
    }
    let I = Ke(S, orgUuid, accountUuid, w);
    let { createDeviceMcpServer, deviceInfoProbeTool, parseJsonRpcMessage } = await import("/$bunfs/root/chunk-f1j5pmqs.js");
    if (isStopped()) {
        return;
    }
    let M = {
        getDeviceName: ()=>w,
        version
    };
    let G = deviceInfoProbeTool(M);
    let J = deviceInfoProbeTool({
        ...M,
        idle: true
    });
    let j = (T)=>{
        let U = registry.definitions().every((C)=>C.name === G.definition.name);
        registry.setGroup(b6n, [
            U ? J : G
        ], T);
    };
    j();
    let Y = registry.subscribe(j);
    let L = ()=>{
        Y();
        registry.setGroup(b6n, []);
    };
    let B = new ee({
        getUrl: ()=>I,
        getAccessToken: ()=>options.getAccessToken(),
        getTools: ()=>en(registry),
        getDeviceId: options.getDeviceId,
        getSessionId: ()=>Gl(options.sessionId),
        parseMessage: parseJsonRpcMessage,
        createSocket: options.createSocket,
        isAllowedUrl: (T)=>isEgressAllowed() && (oTr(T) || v && qe(T, S))
    });
    let { server, inFlightCalls, whenIdle } = createDeviceMcpServer({
        registry,
        version,
        sessionId: options.sessionId
    });
    try {
        await server.connect(B);
    } catch (error) {
        L();
        throw error;
    }
    if (isStopped()) {
        L();
        await server.close();
        return;
    }
    let x = new X({
        transport: B,
        announced: {
            hasUnservedChange: registry.hasUnservedChange,
            inFlightCalls,
            whenIdle
        },
        onEvent: onLivenessEvent,
        onTransportEvent
    });
    let H = registry.subscribe((T)=>x.requestReannounce(T));
    let ne;
    return {
        start: ()=>x.start(),
        stop: ()=>ne ??= (async ()=>{
                H();
                L();
                await Promise.allSettled([
                    x.stop(),
                    server.close()
                ]);
            })()
    };
}
function Ye(e) {
    switch(e.kind){
        case "rejected":
            return `rejected:${e.phase}:${e.reason ?? ""}:${e.status ?? ""}`;
        case "closed":
            return `closed:${e.phase}:${e.code ?? ""}:${e.superseded}`;
        case "token_unavailable":
        case "handshake_timeout":
        case "socket_error":
        case "dial_failed":
            return e.kind;
        default:
            return;
    }
}
function me(e) {
    switch(e.kind){
        case "authenticated":
            i("tengu_device_bridge_connected", {
                protocol_version: e.protocolVersion,
                hb_interval_ms: e.timings.hbIntervalMs,
                staleness_ms: e.timings.stalenessMs,
                rpc_timeout_ms: e.timings.rpcTimeoutMs
            });
            return;
        case "rejected":
            i("tengu_device_bridge_rejected", {
                phase: d(e.phase),
                reason: pe(e.reason),
                status: $q(e.status),
                slot_contention: e.slotContention
            });
            return;
        case "closed":
            i("tengu_device_bridge_closed", {
                phase: d(e.phase),
                code: $q(e.code),
                superseded: e.superseded
            });
            return;
        case "token_unavailable":
        case "handshake_timeout":
        case "socket_error":
            i("tengu_device_bridge_connect_failed", {
                cause: d(e.kind)
            });
            return;
        case "dial_failed":
            i("tengu_device_bridge_connect_failed", {
                cause: d("dial_failed")
            });
            return;
        default:
            return;
    }
}
function Qe(e) {
    switch(e.kind){
        case "pong_timeout":
            i("tengu_device_bridge_pong_timeout", {
                consecutive: e.consecutive
            });
            return;
        case "reconnect_exhausted":
            i("tengu_device_bridge_reconnect_exhausted", {});
            return;
        case "heartbeat_unsupported":
            i("tengu_device_bridge_heartbeat_unsupported", {
                protocol_version: Br(e.protocolVersion)
            });
            return;
        case "reannounce":
            i("tengu_device_bridge_reannounce", {
                reason: d(e.reason),
                outcome: d(e.outcome),
                inflight_at_start: e.inFlightAtStart,
                drained_ms: e.drainedMs,
                drain_timed_out: e.drainTimedOut
            });
            return;
        case "reannounce_contended":
            i("tengu_device_bridge_reannounce_contended", {
                reason: d(e.reason)
            });
            return;
        default:
            return;
    }
}
async function Xe(offReason) {
    if (offReason === undefined || n0e(offReason)) {
        try {
            let [{ remoteToolServingGroupProvider }, { passthroughServingGroupProvider }, s] = await Promise.all([
                import("/$bunfs/root/chunk-bxhcgs7p.js"),
                import("/$bunfs/root/chunk-ra6hy1fm.js"),
                undefined
            ]);
            if (offReason === undefined) {
                return [
                    remoteToolServingGroupProvider(),
                    passthroughServingGroupProvider(),
                    ...[]
                ];
            }
            return [
                remoteToolServingGroupProvider()
            ];
        } catch (error) {
            c(W(error));
        }
    }
    return [];
}
function Ze(e, n) {
    let r = e.flatMap((s)=>{
        try {
            let a = s(n);
            if (a) {
                return [
                    a
                ];
            }
            return [];
        } catch (error) {
            c(W(error));
            return [];
        }
    });
    return ()=>r.forEach((s)=>{
            try {
                s();
            } catch (error) {
                c(W(error));
            }
        });
}
function en(registry) {
    let n = registry.hasUnservedChange();
    let r = registry.serve();
    if (!n) {
        return r;
    }
    let s = r.map((a)=>a.name);
    t(`[deviceBridge] connect frame announces ${r.length} tools: ${s.slice(0, 12).join(", ")}${s.length > 12 ? ", …" : ""}`);
    i("tengu_device_bridge_connect_frame", {
        tool_count: r.length,
        serves_bash: s.includes(Be),
        serves_powershell: s.includes(Ct),
        mcp_tool_count: F(s, (a)=>a.includes("__"))
    });
    return r;
}
export { V0t };
