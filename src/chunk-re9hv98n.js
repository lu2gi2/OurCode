import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Zv, Q, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { St as registerCleanup, $P as registerPreExitFlush, _, Oi, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { nQt } from "/$bunfs/root/chunk-sfgejbsr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { J, rPe } from "/$bunfs/root/chunk-tchztk88.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Cbe, A6e, ZBn, tOt, rEr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { i5o } from "/$bunfs/root/chunk-s70b0h2n.js";
import { na } from "/$bunfs/root/chunk-55x53sfe.js";
import { Xus, Jus, yao, ips, Y8t, aps, dps, pps, GKe } from "/$bunfs/root/chunk-ypkrahyx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { Vbs, qbs, cbe } from "/$bunfs/root/chunk-6rhcrh84.js";
import { qc, DF, ISe, dWn } from "/$bunfs/root/chunk-d2sd20y7.js";
import { wr } from "/$bunfs/root/chunk-2atph4yw.js";
import { m6r, s5o } from "/$bunfs/root/chunk-852ksjk2.js";
import { sFn } from "/$bunfs/root/chunk-xpqgtv5j.js";
import { $Ze } from "/$bunfs/root/chunk-3r2wsxmc.js";
import { A2t } from "/$bunfs/root/chunk-mvn8c8xj.js";
import { Pge } from "/$bunfs/root/chunk-7zpta555.js";
import { C2t, Wj } from "/$bunfs/root/chunk-g6gppm1v.js";
import { ugr } from "/$bunfs/root/chunk-f9zw2hjq.js";
import { __e } from "/$bunfs/root/chunk-nvz50x4x.js";
import { zs } from "/$bunfs/root/chunk-k1zxadxf.js";
import { w_e, wst } from "/$bunfs/root/chunk-bcy16nn4.js";
import { rPt, QNe } from "/$bunfs/root/chunk-7jx57z43.js";
import { dO } from "/$bunfs/root/chunk-f0v3xmb1.js";
import { yu } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, E, M, oe, T, u, _t, ue } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { Ko, zy } from "/$bunfs/root/chunk-7qc48pza.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { randomUUID } from "crypto";
const Y = 61440;
const Wt = Y - 4096;
function We(chunk) {
    return Buffer.byteLength(Oi(chunk)) - 2;
}
function qe(e, n, event, deltaType, h) {
    return e.firstEvent.index === event.index && e.deltaType === deltaType && e.first.parent_tool_use_id === n.parent_tool_use_id && e.first.thinking_display === n.thinking_display && e.first.api_message_id === n.api_message_id && e.bytes + h <= Wt;
}
function $e(event) {
    if (event.type !== "content_block_delta") {
        return null;
    }
    switch(event.delta.type){
        case "text_delta":
            return {
                event,
                deltaType: "text_delta",
                chunk: event.delta.text,
                estimatedTokens: undefined
            };
        case "input_json_delta":
            return {
                event,
                deltaType: "input_json_delta",
                chunk: event.delta.partial_json,
                estimatedTokens: undefined
            };
        case "thinking_delta":
            return {
                event,
                deltaType: "thinking_delta",
                chunk: event.delta.thinking,
                estimatedTokens: event.delta.estimated_tokens ?? undefined
            };
        case "citations_delta":
        case "signature_delta":
        case "compaction_delta":
            return null;
        default:
            event.delta;
            return null;
    }
}
function ce(e) {
    if (e.count === 1) {
        return e.first;
    }
    let n;
    switch(e.deltaType){
        case "text_delta":
            n = {
                type: "text_delta",
                text: e.accumulated
            };
            break;
        case "input_json_delta":
            n = {
                type: "input_json_delta",
                partial_json: e.accumulated
            };
            break;
        case "thinking_delta":
            n = {
                type: "thinking_delta",
                thinking: e.accumulated,
                estimated_tokens: e.estimatedTokens ?? null
            };
            break;
    }
    return {
        ...e.first,
        event: {
            ...e.firstEvent,
            delta: {
                ...e.firstEvent.delta,
                ...n
            }
        }
    };
}
function he(e) {
    if (e.length <= 1) {
        return e;
    }
    let n = [];
    let s = null;
    for (let r of e){
        let h = $e(r.event);
        if (h === null) {
            if (s !== null) {
                n.push(ce(s));
                s = null;
            }
            n.push(r);
            continue;
        }
        let { event, deltaType, chunk, estimatedTokens } = h;
        let w = We(chunk);
        if (s !== null && qe(s, r, event, deltaType, w)) {
            s.accumulated += chunk;
            s.bytes += w;
            s.count += 1;
            if (typeof estimatedTokens === "number") {
                s.estimatedTokens = (s.estimatedTokens ?? 0) + estimatedTokens;
            }
            continue;
        }
        if (s !== null) {
            n.push(ce(s));
        }
        s = {
            first: r,
            firstEvent: event,
            deltaType,
            accumulated: chunk,
            estimatedTokens,
            bytes: w,
            count: 1
        };
    }
    if (s !== null) {
        n.push(ce(s));
    }
    return n;
}
function pe(e, uuid) {
    let s = e.findIndex((h)=>h.uuid === uuid);
    if (s < 0) {
        return uuid;
    }
    let r = null;
    for(let h = 0; h <= s; h++){
        let y = e[h];
        let S = $e(y.event);
        if (S === null) {
            r = null;
            continue;
        }
        let { event, deltaType, chunk } = S;
        let R = We(chunk);
        if (r !== null && qe(r, y, event, deltaType, R)) {
            r.bytes += R;
        } else {
            r = {
                first: y,
                firstEvent: event,
                deltaType,
                bytes: R
            };
        }
    }
    return r?.first.uuid ?? uuid;
}
const qt = 64;
class me {
    rowsAhead;
    queuedSince = new WeakSet;
    attempts = [];
    posts = 0;
    failedPosts = 0;
    rows = 0;
    constructor(e){
        this.rowsAhead = e;
    }
    noteQueued(e) {
        for (let n of e){
            this.queuedSince.add(n);
        }
    }
    noteAttempt(e, startedAt, s) {
        let r = F(e, (h)=>this.queuedSince.has(h));
        this.posts++;
        if (s) {
            this.rows += r;
        } else {
            this.failedPosts++;
        }
        if (this.attempts.length < qt) {
            this.attempts.push({
                startedAt,
                endedAt: performance.now(),
                ahead: r === 0
            });
        }
    }
    seen(e) {
        let aheadMs = 0;
        let postMs = 0;
        for (let { startedAt, endedAt, ahead } of this.attempts){
            let S = Math.max(0, endedAt - Math.max(startedAt, e));
            if (ahead) {
                aheadMs += S;
            } else {
                postMs += S;
            }
        }
        return {
            aheadMs,
            postMs,
            posts: this.posts,
            failedPosts: this.failedPosts,
            rowsAhead: this.rowsAhead,
            rows: this.rows
        };
    }
}
const fSt = 1536;
function fe(e) {
    return Array.isArray(e) && e.every((n)=>typeof n === "string");
}
function je(e, n = fSt) {
    let e_compactMetadata = e.compactMetadata;
    if (!L(e_compactMetadata)) {
        return null;
    }
    let s_preservedMessages = e_compactMetadata.preservedMessages;
    if (!L(s_preservedMessages)) {
        return null;
    }
    let r_uuids = s_preservedMessages.uuids;
    if (!fe(r_uuids) || r_uuids.length <= n) {
        return null;
    }
    let uuids = r_uuids.slice(-n);
    let headUuid = uuids[0];
    let r_allUuids = s_preservedMessages.allUuids;
    let P = fe(r_allUuids) ? r_allUuids.indexOf(headUuid) : -1;
    let s_preservedSegment = e_compactMetadata.preservedSegment;
    return {
        ...e,
        compactMetadata: {
            ...e_compactMetadata,
            preservedMessages: {
                ...s_preservedMessages,
                uuids,
                ...fe(r_allUuids) && {
                    allUuids: P >= 0 ? r_allUuids.slice(P) : r_allUuids.slice(-n)
                }
            },
            ...L(s_preservedSegment) && {
                preservedSegment: {
                    ...s_preservedSegment,
                    headUuid
                }
            }
        }
    };
}
const $t = {
    stream_event: true,
    system: true
};
const jt = {
    message_start: true,
    message_delta: true,
    message_stop: true,
    content_block_start: true,
    content_block_delta: true,
    content_block_stop: true
};
const Gt = {
    text_delta: true,
    input_json_delta: true,
    citations_delta: true,
    thinking_delta: true,
    signature_delta: true,
    compaction_delta: true
};
function ze(e) {
    let { event } = e;
    if (event.type === "message_start" && event.message?.input_transformations) {
        let { input_transformations, ...rest } = event.message;
        return {
            ...e,
            event: {
                ...event,
                message: rest
            }
        };
    }
    if (event.type === "message_delta" && event.input_transformations) {
        let { input_transformations, ...rest } = event;
        return {
            ...e,
            event: rest
        };
    }
    return e;
}
function _e(e, n) {
    let s = Ke(e.event);
    t(`CCRClient: dropping oversize ephemeral stream_event (${ge(s)}, ${n} bytes, over the ${Y}-byte limit)`, {
        level: "warn"
    });
    f("ccr_partial_messages", "oversize_ephemeral_skipped", {
        ...s,
        bytes: n
    });
}
function Ve(payload) {
    if (!L(payload)) {
        return {
            payload_type: b("other")
        };
    }
    let { type, event } = payload;
    return {
        payload_type: d(ve($t, type)),
        ...type === "stream_event" && Ke(event)
    };
}
function ge(e) {
    return Object.entries(e).map(([n, s])=>`${n}=${s}`).join(" ");
}
function Ke(event) {
    if (!L(event)) {
        return {
            event_type: b("other")
        };
    }
    let { type, delta, content_block } = event;
    let h = L(content_block) ? content_block.type : undefined;
    return {
        event_type: d(ve(jt, type)),
        ...type === "content_block_delta" && {
            delta_type: d(ve(Gt, L(delta) ? delta.type : undefined))
        },
        ...type === "content_block_start" && {
            content_block_type: Cbe(h) ? d(h) : b("other")
        }
    };
}
function ve(e, n) {
    for(let s in e){
        if (s === n) {
            return s;
        }
    }
    return "other";
}
const zt = 5000;
const Vt = 32;
const Kt = new Set([
    "message_start",
    "message_delta",
    "message_stop",
    "content_block_start",
    "content_block_delta",
    "content_block_stop",
    "ping"
]);
function Z(e) {
    return e.ephemeral === true && (Kt.has(be(e)?.type) || e.payload.type === "system" && e.payload.subtype === "thinking_tokens");
}
class Se {
    deps;
    stream;
    waiting = [];
    pumping = false;
    closed = false;
    rowWaitTimer;
    overdue;
    quieted = new Map;
    constructor(e){
        this.deps = e;
        this.stream = e.stream({
            onChange: ()=>this.pump(),
            onSent: e.onSent,
            onAcked: e.onAcked,
            onSubscribers: e.onSubscribers,
            onHandBack: (n)=>void this.waiting.unshift(Ye(n, {})),
            onBroken: (n)=>this.onBroken(n)
        });
    }
    enqueue(e, n) {
        if (n.urgent && !e.some(Z)) {
            return this.deps.post.enqueue(e, n);
        }
        let s = this.dropQuieted(e);
        if (!(!this.closed && n.release === undefined && !n.urgent && s.every((S)=>Z(S) && !this.deps.post.holdsOnArrival(S)))) {
            return this.queueForPost(s, n).queued ?? Promise.resolve();
        }
        if (s.length === 0) {
            return Promise.resolve();
        }
        let h = this.waiting.at(-1);
        if (h?.path === "either") {
            h.events = this.deps.merge(h.events.concat(s));
            return Promise.resolve();
        }
        let y = {
            path: "either",
            events: s,
            since: n.since
        };
        this.waiting.push(y);
        this.pump();
        return y.queued ?? Promise.resolve();
    }
    release(e) {
        this.deps.post.release(e);
        if (this.waiting.some((n)=>n.path === "post")) {
            this.queueForPost([], {
                release: e
            });
        }
    }
    prepare() {
        if (!this.closed && this.deps.watched()) {
            this.stream.open();
        }
    }
    takeOffer(e) {
        this.stream.takeOffer(e);
    }
    streaming() {
        return this.stream.state() === "open";
    }
    streamState() {
        return this.stream.state();
    }
    fallbackReason() {
        return this.stream.fallbackReason();
    }
    fallbackWindowMs() {
        return this.stream.fallbackWindowMs();
    }
    breakCountHeader(e) {
        return this.stream.breakCountHeader(e);
    }
    breakCountStated(e) {
        this.stream.breakCountStated(e);
    }
    get waitingCount() {
        let e = 0;
        for (let n of this.waiting){
            e += n.events.length;
        }
        return e;
    }
    settled() {
        return new Promise((resolve)=>{
            this.queueForPost([], {}, resolve);
        });
    }
    withdraw(e) {
        let n = 0;
        for (let s of this.waiting){
            let r = s.events.filter((h)=>!e(h));
            n += s.events.length - r.length;
            s.events = r;
        }
        return n;
    }
    close() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.onBroken(this.stream.close());
        this.pump();
    }
    pump() {
        if (this.pumping) {
            return;
        }
        this.pumping = true;
        try {
            while(this.moveFirst());
        } finally{
            this.pumping = false;
        }
        this.armRowWait();
    }
    queueForPost(e, n, s) {
        let r = Ye(e, n, s);
        this.waiting.push(r);
        this.pump();
        return r;
    }
    moveFirst() {
        let [e, n] = this.waiting;
        if (e === undefined) {
            return false;
        }
        if (e.path === "either" && n?.path !== "post" && this.stream.state() === "open") {
            if (!this.stream.canSend() || this.deps.post.busy()) {
                return false;
            }
            if (!this.deps.post.holds(Z)) {
                e.events = this.stream.send(e.events);
                if (e.events.length > 0) {
                    return false;
                }
                this.waiting.shift();
                return true;
            }
        }
        if (!this.stream.quiet()) {
            return false;
        }
        this.waiting.shift();
        if (e.path === "post") {
            if (e.events.length > 0) {
                e.queued = this.deps.post.enqueue(e.events, e.held);
            } else if (e.held.release !== undefined) {
                this.deps.post.release(e.held.release);
            }
            e.onMoved?.();
            return true;
        }
        if (n?.path === "post") {
            n.events = e.events.concat(n.events);
            n.held = {
                ...n.held,
                since: e.since ?? n.held.since
            };
        } else {
            e.queued = this.deps.post.enqueue(e.events, {
                since: e.since
            });
        }
        this.prepare();
        return true;
    }
    onBroken(e) {
        let n = false;
        for (let s of e){
            let r = be(s);
            if (r === undefined || r.type === "ping") {
                continue;
            }
            n = true;
            let h = r.type === "message_start";
            let y = this.quieted.get(r.stream);
            if (y === undefined) {
                this.quieted.set(r.stream, {
                    startDelivered: !h
                });
            } else if (h) {
                y.startDelivered = false;
            }
        }
        if (!n) {
            return;
        }
        for (let s of this.quieted.keys()){
            if (this.quieted.size <= Vt) {
                break;
            }
            if (s !== "") {
                this.quieted.delete(s);
            }
        }
        this.deps.onGap();
        for (let s of this.waiting){
            s.events = this.dropQuieted(s.events);
        }
    }
    dropQuieted(e) {
        if (this.quieted.size === 0) {
            return e;
        }
        return e.filter((n)=>{
            let s = Z(n) ? be(n) : undefined;
            let r = s && this.quieted.get(s.stream);
            if (!s || !r) {
                return true;
            }
            if (s.type !== "message_start" && s.type !== "message_stop") {
                return false;
            }
            this.quieted.delete(s.stream);
            return s.type === "message_start" || r.startDelivered;
        });
    }
    armRowWait() {
        let e = this.waiting.find((s)=>s.path === "post");
        let n = e?.path === "post" && !this.stream.quiet();
        if (n && e === this.overdue) {
            return;
        }
        clearTimeout(this.rowWaitTimer);
        this.rowWaitTimer = undefined;
        this.overdue = undefined;
        if (!n) {
            return;
        }
        this.rowWaitTimer = setTimeout((s, r)=>s.onRowWaitOver(r), Math.max(0, e.waitingSince + (this.deps.maxRowWaitMs ?? zt) - performance.now()), this, e);
    }
    onRowWaitOver(e) {
        this.overdue = e;
        this.rowWaitTimer = setTimeout((n)=>{
            n.overdue = undefined;
            n.stream.abort();
        }, 0, this);
    }
}
function Ye(e, held, onMoved) {
    return {
        path: "post",
        events: e,
        held,
        waitingSince: performance.now(),
        onMoved
    };
}
function be({ payload }) {
    if (payload.type !== "stream_event" || !L(payload.event)) {
        return;
    }
    return {
        stream: typeof payload.parent_tool_use_id === "string" ? payload.parent_tool_use_id : "",
        type: payload.event.type
    };
}
const re = 1;
const ee = 1;
const Yt = [
    "unspecified",
    "drain",
    "max_age",
    "reauth",
    "fence",
    "limit",
    "off",
    "protocol",
    "content"
];
const Xt = new Set([
    "fence",
    "limit",
    "off",
    "protocol",
    "content"
]);
function te(e, n) {
    let s = n;
    while(s > 127){
        e.push(s % 128 | 128);
        s = Math.floor(s / 128);
    }
    e.push(s);
}
function Xe(e, breaks) {
    let s = [
        8,
        re,
        16
    ];
    te(s, e);
    s.push(26, 1, ee);
    if (breaks > 0) {
        s.push(32);
        te(s, breaks);
    }
    let r = [
        34
    ];
    te(r, s.length);
    return new Uint8Array(r.concat(s));
}
function Je(e, n) {
    let s = [
        8,
        ee,
        16
    ];
    te(s, e);
    let r = n.map((k)=>{
        let P = [
            26
        ];
        te(P, k.length);
        return P;
    });
    let s_length = s.length;
    for(let k = 0; k < n.length; k++){
        s_length += r[k].length + n[k].length;
    }
    let y = new Uint8Array(s_length);
    y.set(s, 0);
    let s_length_1 = s.length;
    for(let k = 0; k < n.length; k++){
        y.set(r[k], s_length_1);
        s_length_1 += r[k].length;
        y.set(n[k], s_length_1);
        s_length_1 += n[k].length;
    }
    return y;
}
function Ze(e) {
    return 2 + Math.floor(Math.log2(Math.max(e, 1)) / 7);
}
function et(e) {
    let n = {
        kind: "other"
    };
    if (GKe(e, {
        onBytes (r, h) {
            if (r === 1) {
                n = Qt(h);
            } else if (r === 2) {
                n = Jt(h);
            } else if (r === 3) {
                n = Zt(h);
            }
        }
    })) {
        return n;
    }
    return null;
}
function Qt(e) {
    let n = {
        kind: "hello_ack",
        protocolVersion: 0,
        servesLiveLane: false,
        maxFrameBytes: 0,
        ackEveryMs: 0,
        idleCloseMs: 0,
        fallbackWindowMs: 0
    };
    if (GKe(e, {
        onVarint (r, h) {
            switch(r){
                case 1:
                    n.protocolVersion = h;
                    break;
                case 2:
                    n.servesLiveLane ||= h === ee;
                    break;
                case 3:
                    n.maxFrameBytes = h;
                    break;
                case 4:
                    n.ackEveryMs = h;
                    break;
                case 5:
                    n.idleCloseMs = h;
                    break;
                case 7:
                    n.fallbackWindowMs = h;
                    break;
            }
        },
        onBytes (r, h) {
            if (r === 2) {
                n.servesLiveLane ||= h.includes(ee);
            }
        }
    })) {
        return n;
    }
    return null;
}
function Jt(e) {
    let n = {
        kind: "ack",
        lane: 0,
        seq: 0,
        hasSubscribers: undefined,
        throttled: false
    };
    if (GKe(e, {
        onVarint (r, h) {
            if (r === 1) {
                n.lane = h;
            } else if (r === 2) {
                n.seq = h;
            } else if (r === 3) {
                n.hasSubscribers = h !== 0;
            } else if (r === 4) {
                n.throttled = h !== 0;
            }
        }
    })) {
        return n;
    }
    return null;
}
function Zt(e) {
    let n = {
        kind: "go_away",
        reason: "unspecified",
        retryAfterMs: 0,
        postOnlyMs: 0,
        fallbackWindowMs: 0,
        lastSeq: undefined,
        final: false
    };
    let s = GKe(e, {
        onVarint (r, h) {
            switch(r){
                case 1:
                    n.reason = Yt[h] ?? "unknown";
                    break;
                case 2:
                    n.retryAfterMs = h;
                    break;
                case 3:
                    n.postOnlyMs = h;
                    break;
                case 5:
                    n.fallbackWindowMs = h;
                    break;
                case 6:
                    n.lastSeq = h;
                    break;
            }
        }
    });
    n.final = n.lastSeq !== undefined || Xt.has(n.reason);
    if (s) {
        return n;
    }
    return null;
}
const en = {
    openTimeoutMs: 5000,
    ackEveryMs: 250,
    minStallMs: 1500,
    lateTimerMs: 250,
    idleCloseMs: 15000,
    maxFrameEvents: 32,
    maxUnackedBytes: 262144,
    maxUnackedFrames: 48,
    maxFramesPerSecond: 24,
    maxBytesPerSecond: 327680,
    backoffBaseMs: 1000,
    backoffMaxMs: 30000,
    stallsToLatch: 2,
    stallsToLatchForGood: 5,
    latchMs: 300000
};
const tn = 3600000;
const tt = 5000;
const nn = 5000;
const sn = 1000;
const rn = 30000;
const we = 65536;
const an = 12;
const on = p(()=>_t({
        protocol_version: E(),
        first_open_spread_ms: E().nullish(),
        generation: E().nullish()
    }));
class Re {
    deps;
    limits;
    now;
    random;
    closed = false;
    offered = false;
    generation;
    phase = "idle";
    connection;
    cause;
    notBeforeMs = 0;
    latchedUntilMs = 0;
    goAwayUntilMs = 0;
    servedFallbackWindowMs = 0;
    failures = 0;
    stallsInARow = 0;
    stallsInAll = 0;
    expiredAuth;
    breaks;
    breakIsNews = true;
    everDialed = false;
    openTimer;
    idleTimer;
    stallTimer;
    paceTimer;
    stallTimerDueAt = 0;
    constructor(e){
        this.deps = e;
        this.limits = {
            ...en,
            ...e.limits
        };
        this.now = e.now ?? (()=>performance.now());
        this.random = e.random ?? Math.random;
        this.breaks = e.firstBreakCount ?? Date.now();
    }
    state() {
        if (!this.offered && this.phase === "idle") {
            return "off";
        }
        if (this.phase === "idle" && this.now() < this.latchedUntilMs) {
            return "latched";
        }
        return this.phase;
    }
    takeOffer(e) {
        if (this.closed) {
            return;
        }
        let n = on().safeParse(e);
        if (!n.success || n.data.protocol_version !== re) {
            this.offered = false;
            if (this.phase === "opening" && this.connection) {
                this.endByPlan(this.connection);
            } else if (this.phase === "open") {
                this.leave();
            }
            return;
        }
        let s = n.data.generation ?? 0;
        if (this.generation !== s) {
            this.generation = s;
            this.latchedUntilMs = 0;
            this.stallsInARow = 0;
            this.stallsInAll = 0;
        }
        if (!this.offered) {
            this.offered = true;
            this.delayOpens(this.random() * Ee(n.data.first_open_spread_ms ?? 0));
        }
    }
    open() {
        let e = this.now();
        if (this.closed || !this.offered || this.phase !== "idle" || e < this.notBeforeMs || e < this.latchedUntilMs) {
            return;
        }
        let n = this.deps.authHeaders();
        let s = Object.values(n).join(`
`);
        let r = this.deps.workerEpoch();
        if (s === "" || !(r > 0)) {
            return;
        }
        let auth = at(s);
        if (auth === this.expiredAuth) {
            this.backOff("refused");
            return;
        }
        let socket;
        try {
            socket = this.deps.dial(this.deps.url, n);
        } catch  {
            this.backOff("refused");
            f("ccr_upload_stream", "dial_threw");
            return;
        }
        let S = {
            socket,
            auth,
            dialedAt: e,
            openedAt: undefined,
            sentSeq: 0,
            unacked: [],
            unackedBytes: 0,
            throttled: false,
            waitingSince: e,
            lastHeardAt: e,
            lastFrameAt: e,
            stallMs: 0,
            idleCloseMs: 0,
            maxUnackedBytes: 0,
            secondStartedAt: e,
            secondFrames: 0,
            secondBytes: 0,
            frames: 0,
            events: 0,
            bytes: 0,
            ackedFrames: 0
        };
        this.connection = S;
        this.phase = "opening";
        this.everDialed = true;
        socket.onopen = ()=>{
            if (this.connection === S) {
                socket.send(Xe(r, this.breaks));
            }
        };
        socket.onmessage = (k)=>this.onMessage(S, k.data);
        socket.onerror = ()=>this.onSocketGone(S);
        socket.onclose = ()=>this.onSocketGone(S);
        this.openTimer = setTimeout((k, P)=>k.onOpenTimeout(P), this.limits.openTimeoutMs, this, S);
    }
    canSend() {
        let connection = this.connection;
        return this.phase === "open" && connection !== undefined && !connection.throttled && connection.unackedBytes < connection.maxUnackedBytes && connection.unacked.length < this.limits.maxUnackedFrames && !this.atSecondsLimit(connection);
    }
    atSecondsLimit(e) {
        if (this.now() - e.secondStartedAt >= 1000) {
            e.secondStartedAt = this.now();
            e.secondFrames = 0;
            e.secondBytes = 0;
        }
        if (e.secondFrames < this.limits.maxFramesPerSecond && e.secondBytes < this.limits.maxBytesPerSecond) {
            return false;
        }
        this.wakeAtNextSecond(e);
        return true;
    }
    wakeAtNextSecond(e) {
        this.paceTimer ??= setTimeout((n)=>{
            n.paceTimer = undefined;
            n.deps.onChange();
        }, Math.max(0, e.secondStartedAt + 1000 - this.now()), this);
    }
    quiet() {
        return this.connection === undefined || this.connection.unacked.length === 0;
    }
    send(e) {
        let connection = this.connection;
        let s = 0;
        while(connection && this.canSend() && s < e.length){
            let r = s;
            let h = [];
            let y = [];
            let S = Math.min(connection.maxUnackedBytes - connection.unackedBytes, this.limits.maxBytesPerSecond - connection.secondBytes);
            let k = connection.unacked.length === 0 && connection.secondBytes === 0;
            let P = an;
            while(s < e.length && y.length < this.limits.maxFrameEvents){
                let I = e[s];
                let O = ln(I.payload);
                let C = O.length + Ze(O.length);
                if (P + C > S && (y.length > 0 || !k)) {
                    break;
                }
                s++;
                if (O.length > 0 && O.length <= we) {
                    h.push(I);
                    y.push(O);
                    P += C;
                } else {
                    dn(I.payload, O.length);
                }
            }
            if (s === r) {
                this.wakeAtNextSecond(connection);
                break;
            }
            if (y.length === 0) {
                continue;
            }
            let w = Je(++connection.sentSeq, y);
            let R = this.now();
            if (connection.unacked.length === 0) {
                connection.waitingSince = R;
            }
            connection.unacked.push({
                seq: connection.sentSeq,
                events: h,
                bytes: w.length
            });
            connection.unackedBytes += w.length;
            connection.lastFrameAt = R;
            connection.frames++;
            connection.events += y.length;
            connection.bytes += w.length;
            connection.secondFrames++;
            connection.secondBytes += w.length;
            this.deps.onSent(h);
            try {
                connection.socket.send(w);
            } catch  {
                this.phase = "leaving";
                setTimeout((I, O)=>I.onSocketGone(O), 0, this, connection);
                break;
            }
            this.armStallTimer(connection);
        }
        if (s === 0) {
            return e;
        }
        return e.slice(s);
    }
    abort() {
        if (this.connection) {
            this.fail(this.connection, "broke", "ack_wait_timeout");
        }
    }
    fallbackReason() {
        if (this.phase === "open" || !this.offered) {
            return;
        }
        if (this.now() < this.latchedUntilMs) {
            return "latched";
        }
        return this.cause ?? "opening";
    }
    breakCountHeader(e = true) {
        if (this.everDialed) {
            return `${this.breaks}${e && this.breakIsNews ? ";new" : ""}`;
        }
    }
    breakCountStated(e) {
        if (e === this.breakCountHeader()) {
            this.breakIsNews = false;
        }
    }
    fallbackWindowMs() {
        let e = Math.max(this.goAwayUntilMs, this.offered ? this.latchedUntilMs : 0);
        if (this.now() < e) {
            return this.servedFallbackWindowMs;
        }
        return 0;
    }
    close() {
        let e = this.closed ? undefined : this.connection;
        this.closed = true;
        this.offered = false;
        if (!e) {
            return [];
        }
        let n = this.endByPlan(e);
        if (n.length > 0) {
            this.raiseBreakCount();
        }
        return n;
    }
    onMessage(e, n) {
        if (this.connection !== e) {
            return;
        }
        e.lastHeardAt = this.now();
        let s = n instanceof ArrayBuffer ? new Uint8Array(n) : n;
        let r = s instanceof Uint8Array ? et(s) : null;
        if (r === null) {
            this.fail(e, this.phase === "opening" ? "refused" : "broke", "bad_reply");
            return;
        }
        switch(r.kind){
            case "hello_ack":
                this.onHelloAck(e, r);
                break;
            case "ack":
                this.onAck(e, r);
                break;
            case "go_away":
                this.onGoAway(e, r);
                break;
            case "other":
                break;
        }
    }
    onHelloAck(e, n) {
        if (this.phase !== "opening") {
            return;
        }
        if (n.protocolVersion !== re || !n.servesLiveLane) {
            this.fail(e, "refused", "unusable_hello_ack");
            return;
        }
        clearTimeout(this.openTimer);
        let s = this.now();
        let { limits } = this;
        this.phase = "open";
        this.cause = undefined;
        this.expiredAuth = undefined;
        this.goAwayUntilMs = 0;
        this.servedFallbackWindowMs = Math.min(n.fallbackWindowMs, tt);
        e.openedAt = s;
        e.lastFrameAt = s;
        e.stallMs = Math.max(2 * Math.min(n.ackEveryMs || limits.ackEveryMs, nn), limits.minStallMs);
        e.idleCloseMs = n.idleCloseMs ? Te(n.idleCloseMs, sn, rn) : limits.idleCloseMs;
        e.maxUnackedBytes = n.maxFrameBytes ? Te(n.maxFrameBytes / 2, we, limits.maxUnackedBytes) : limits.maxUnackedBytes;
        this.armIdleTimer(e);
        this.deps.onChange();
    }
    onAck(e, n) {
        if (n.lane !== ee) {
            return;
        }
        let s = this.settle(e, n.seq);
        let e_throttled = e.throttled;
        e.throttled = n.throttled && e.unacked.length > 0;
        if (!s && e_throttled === e.throttled) {
            return;
        }
        if (this.phase === "leaving" && e.unacked.length === 0) {
            this.endByPlan(e);
        }
        this.deps.onChange();
        if (s) {
            this.deps.onSubscribers(n.hasSubscribers);
        }
    }
    onGoAway(e, n) {
        let s = Ee(n.postOnlyMs) + this.random() * Ee(n.retryAfterMs);
        this.delayOpens(s);
        this.goAwayUntilMs = this.now() + s;
        if (n.fallbackWindowMs > 0) {
            this.servedFallbackWindowMs = Math.min(n.fallbackWindowMs, tt);
        }
        let { reason } = n;
        if (reason === "reauth") {
            this.expiredAuth = e.auth;
        }
        t(`UploadStream: server sent go-away (${reason}) while ${this.state()}, last_seq ${n.lastSeq ?? "unset"}`);
        if (this.phase === "opening") {
            this.end(e);
            this.backOff("refused");
            f("ccr_upload_stream", `refused_${reason}`);
            this.deps.onChange();
            return;
        }
        if (!n.final) {
            this.cause = "goaway";
            this.leave();
            return;
        }
        if (n.lastSeq !== undefined) {
            this.settle(e, n.lastSeq);
        }
        let h;
        if (reason === "drain" || reason === "max_age" || reason === "reauth") {
            this.cause = "goaway";
            h = this.endByPlan(e);
        } else {
            this.backOff("goaway");
            f("ccr_upload_stream", `goaway_${reason}`, ke(e, this.now()));
            h = this.end(e);
        }
        if (n.lastSeq === undefined) {
            this.reportBroken(h);
        } else if (h.length > 0) {
            this.deps.onHandBack(h);
        }
        this.deps.onChange();
    }
    settle(e, n) {
        let s = 0;
        while(s < e.unacked.length){
            let r = e.unacked[s];
            if (r.seq > n) {
                break;
            }
            e.unackedBytes -= r.bytes;
            s++;
        }
        if (s === 0) {
            return false;
        }
        e.ackedFrames += s;
        e.waitingSince = this.now();
        this.stallsInARow = 0;
        this.deps.onAcked(e.unacked.splice(0, s).flatMap((r)=>r.events));
        return true;
    }
    leave() {
        let connection = this.connection;
        if (!connection || this.phase === "leaving") {
            return;
        }
        this.phase = "leaving";
        if (connection.unacked.length === 0) {
            this.endByPlan(connection);
        }
        this.deps.onChange();
    }
    endByPlan(e) {
        if (e.openedAt !== undefined) {
            if (e.ackedFrames > 0 || this.cause !== "goaway") {
                this.failures = 0;
            } else {
                this.backOff("goaway");
            }
            g("ccr_upload_stream", ke(e, this.now()));
        }
        return this.end(e);
    }
    onSocketGone(e) {
        if (this.connection === e) {
            this.fail(e, this.phase === "opening" ? "refused" : "broke", this.phase === "opening" ? "open_failed" : "socket_closed");
        }
    }
    onOpenTimeout(e) {
        if (this.connection === e && this.phase === "opening") {
            this.fail(e, "refused", "open_timeout");
        }
    }
    armIdleTimer(e) {
        let n = this.now() - e.lastFrameAt;
        this.idleTimer = setTimeout((s, r)=>s.onIdleTimer(r), n < e.idleCloseMs ? e.idleCloseMs - n : e.idleCloseMs, this, e);
    }
    onIdleTimer(e) {
        if (this.connection !== e || this.phase !== "open") {
            return;
        }
        if (e.unacked.length > 0 || this.now() < e.lastFrameAt + e.idleCloseMs) {
            this.armIdleTimer(e);
            return;
        }
        this.leave();
    }
    armStallTimer(e) {
        if (this.stallTimer !== undefined) {
            return;
        }
        let n = Math.max(0, ye(e) - this.now());
        this.stallTimerDueAt = this.now() + n;
        this.stallTimer = setTimeout((s, r)=>s.onStallTimer(r), n, this, e);
    }
    onStallTimer(e) {
        this.stallTimer = undefined;
        if (this.connection !== e || e.unacked.length === 0) {
            return;
        }
        let n = this.now();
        if (n - this.stallTimerDueAt > this.limits.lateTimerMs) {
            e.waitingSince = n;
        }
        if (n < ye(e)) {
            this.armStallTimer(e);
            return;
        }
        this.stallTimer = setTimeout((s, r)=>s.confirmStall(r), 0, this, e);
    }
    confirmStall(e) {
        this.stallTimer = undefined;
        if (this.connection !== e || e.unacked.length === 0) {
            return;
        }
        if (this.now() < ye(e)) {
            this.armStallTimer(e);
            return;
        }
        this.stallsInARow++;
        this.stallsInAll++;
        if (this.stallsInAll >= this.limits.stallsToLatchForGood) {
            this.latchedUntilMs = Infinity;
        } else if (this.stallsInARow >= this.limits.stallsToLatch) {
            this.latchedUntilMs = this.now() + this.limits.latchMs * (0.75 + this.random() / 2);
        }
        this.fail(e, "stalled", "stalled");
    }
    fail(e, n, s) {
        t(`UploadStream: socket ended (${s}) while ${this.state()}, ${e.unacked.length} frame(s) unacknowledged; live events go by POST`);
        f("ccr_upload_stream", s, ke(e, this.now()));
        let r = this.end(e);
        this.backOff(n);
        this.reportBroken(r);
        this.deps.onChange();
    }
    reportBroken(e) {
        if (e.length > 0) {
            this.raiseBreakCount();
            this.deps.onBroken(e);
        }
    }
    raiseBreakCount() {
        this.breaks++;
        this.breakIsNews = true;
    }
    backOff(e) {
        this.cause = e;
        this.failures++;
        this.delayOpens(this.random() * Math.min(this.limits.backoffBaseMs * 2 ** (this.failures - 1), this.limits.backoffMaxMs));
    }
    delayOpens(e) {
        this.notBeforeMs = Math.max(this.notBeforeMs, this.now() + e);
    }
    end(e) {
        clearTimeout(this.openTimer);
        clearTimeout(this.idleTimer);
        clearTimeout(this.stallTimer);
        clearTimeout(this.paceTimer);
        this.stallTimer = this.paceTimer = undefined;
        let { socket } = e;
        socket.onopen = socket.onmessage = socket.onerror = socket.onclose = null;
        try {
            socket.close(1000);
        } catch  {}
        this.connection = undefined;
        this.phase = "idle";
        return e.unacked.flatMap((s)=>s.events);
    }
}
function ye(e) {
    return Math.max(e.waitingSince, e.lastHeardAt) + e.stallMs;
}
function Te(e, n, s) {
    return Math.min(Math.max(e, n), s);
}
function Ee(e) {
    return Te(e, 0, tn);
}
function ln(payload) {
    try {
        return Buffer.from(_(payload));
    } catch  {
        return new Uint8Array(0);
    }
}
function dn(payload, n) {
    let s;
    try {
        s = Ve(payload);
    } catch  {
        s = {
            payload_type: b("unreadable")
        };
    }
    let r = n > 0 ? `${n} bytes, over the ${we}-byte limit` : "it cannot be serialized";
    t(`UploadStream: dropping a live event (${ge(s)}): ${r}`, {
        level: "warn"
    });
    if (n > 0) {
        f("ccr_partial_messages", "upload_stream_oversize_dropped", {
            ...s,
            bytes: n
        });
    } else {
        f("ccr_partial_messages", "upload_stream_unserializable_dropped", s);
    }
}
function ke(e, n) {
    return {
        frames: e.frames,
        events: e.events,
        bytes: e.bytes,
        unacked_frames: e.unacked.length,
        dial_to_open_ms: Math.round((e.openedAt ?? n) - e.dialedAt),
        age_ms: Math.round(n - e.dialedAt)
    };
}
class Me {
    inflight = null;
    pending = null;
    closed = false;
    config;
    constructor(e){
        this.config = e;
    }
    enqueue(e) {
        if (this.closed) {
            return;
        }
        this.pending = this.pending ? st(this.pending, e) : e;
        this.drain();
    }
    close() {
        this.closed = true;
        this.pending = null;
    }
    async flush() {
        while(!this.closed){
            if (this.inflight) {
                await this.inflight;
            } else if (this.pending) {
                await this.drain();
            } else {
                return true;
            }
        }
        return false;
    }
    async drain() {
        if (this.inflight || this.closed) {
            return;
        }
        if (!this.pending) {
            return;
        }
        let pending = this.pending;
        this.pending = null;
        this.inflight = this.sendWithRetry(pending).then(()=>{
            this.inflight = null;
            if (this.pending && !this.closed) {
                this.drain();
            }
        });
    }
    async sendWithRetry(e) {
        let n = e;
        let s = 0;
        while(!this.closed){
            if (await this.config.send(n)) {
                return;
            }
            s++;
            await Q(this.retryDelay(s));
            if (this.pending && !this.closed) {
                n = st(n, this.pending);
                this.pending = null;
            }
        }
    }
    retryDelay(e) {
        let n = Math.min(this.config.baseDelayMs * 2 ** (e - 1), this.config.maxDelayMs);
        let s = Math.random() * this.config.jitterMs;
        return n + s;
    }
}
function st(e, n) {
    let s = {
        ...e
    };
    for (let [r, h] of Object.entries(n)){
        if ((r === "external_metadata" || r === "internal_metadata") && s[r] && typeof s[r] === "object" && typeof h === "object" && h !== null) {
            s[r] = {
                ...s[r],
                ...h
            };
        } else {
            s[r] = h;
        }
    }
    return s;
}
const rt = {};
const it = "x-ccr-upload-break-count";
const Et = 20000;
const ot = 10000;
const kt = 15000;
const wt = 5000;
const Tt = wt;
const cn = 5000;
const hn = 300000;
const pn = 2000;
const mn = kt + Tt + 2 * Et;
const fn = 5000;
const lt = 1.5;
const vn = 3;
const _n = new Set([
    401,
    403,
    404,
    429
]);
const mSt = 100;
function V(e) {
    return e === 400 || e === 413 || e === 422;
}
const gn = 60000;
const bn = new Set([
    "remote_tool_call",
    "remote_plumbing_call"
]);
function Sn(e) {
    return bn.has(Rt(e));
}
const yn = new Set(Pge);
const En = 256;
function Rt(e) {
    let n = e.payload.type === "control_request" ? e.payload.request : undefined;
    if (typeof n === "object" && n !== null && "subtype" in n) {
        return n.subtype;
    }
}
function ie(error) {
    let n = v(error);
    if (n) {
        return n;
    }
    if (error && typeof error === "object" && "name" in error && typeof error.name === "string") {
        return error.name;
    }
}
class GMe extends Error {
    reason;
    httpStatus;
    constructor(e, n){
        super(`CCRClient init failed: ${e}`);
        this.reason = e;
        this.httpStatus = n;
    }
}
function n5o(e) {
    return e instanceof GMe && e.reason === "worker_register_failed" && !V(e.httpStatus);
}
const kn = 10;
const Zer = {
    epoch_conflict: 4090,
    superseded_by_worker: 4090,
    session_not_active: 4090,
    epoch_stale: 4090,
    session_not_found: 4090,
    token_expired: 4094,
    auth_exhausted: 4094
};
const wn = {
    epoch_conflict: true,
    superseded_by_worker: true,
    session_not_active: true,
    epoch_stale: true,
    session_not_found: false,
    token_expired: false,
    auth_exhausted: false
};
const Tn = 3;
const Rn = 10;
const maxAttempts = 3;
async function Mn(e, n) {
    let s = e.body?.getReader();
    let r = new TextDecoder;
    let h = "";
    let y = 0;
    for(let S = await s?.read(); S !== undefined && !S.done; S = await s?.read()){
        y += S.value.byteLength;
        if (y > n) {
            await s?.cancel();
            return null;
        }
        h += r.decode(S.value, {
            stream: true
        });
    }
    return {
        text: h + r.decode(),
        bytes: y
    };
}
function An(e, maxTimestampChars) {
    let s = e.payload?.timestamp;
    return s === undefined || typeof s === "string" && s.length <= maxTimestampChars;
}
const Cn = 10000;
const maxDelayMs = 30000;
function ct(status) {
    if (status !== undefined && status >= 400 && status < 500) {
        return "not_accepted";
    }
    return "indeterminate";
}
function Ce(e) {
    let has_terminal_bookend = false;
    let has_level = false;
    for (let r of e){
        if (r.payload.subtype === "task_notification") {
            has_terminal_bookend = true;
        } else if (r.payload.subtype === "background_tasks_changed") {
            has_level = true;
        }
    }
    if (has_terminal_bookend || has_level) {
        return {
            has_terminal_bookend,
            has_level
        };
    }
    return null;
}
function ae(e) {
    return Math.min(Math.max(0, Math.trunc(e) || 0), 2147483647);
}
const Pe = {
    "/worker": "worker_state",
    "/worker/events": "events",
    "/worker/events/delivery": "delivery",
    "/worker/heartbeat": "heartbeat",
    "/worker/internal-events": "internal_events"
};
function Mt(e) {
    return {
        tool_name: e.tool_name,
        display_tool_name: e.display_tool_name,
        action_description: e.action_description,
        raw_command: e.raw_command,
        request_id: e.request_id,
        tool_use_id: e.tool_use_id
    };
}
const Pn = p(()=>u({
        tool_name: o().refine((e)=>!e.startsWith("dialog:")),
        display_tool_name: o().nullish(),
        action_description: o(),
        raw_command: o().nullish(),
        request_id: o(),
        tool_use_id: o().min(1),
        suppressed_request_id: o().nullish()
    }));
const In = p(()=>u({
        data: T(_t({
            event_id: o(),
            event_type: o(),
            payload: ue(o(), oe()),
            event_metadata: ue(o(), oe()).nullish(),
            is_compaction: M(),
            created_at: o(),
            session_agent_id: o().optional()
        })),
        next_cursor: o().optional()
    }));
const Fn = p(()=>u({
        results: T(u({
            event_id: o(),
            duplicate: M()
        }))
    }));
function Un(e) {
    let n = Pn().safeParse(e);
    if (!n.success) {
        return;
    }
    let n_data = n.data;
    let requestId = __e(n_data);
    if (requestId === undefined) {
        return;
    }
    return {
        requestId,
        details: Mt({
            tool_name: n_data.tool_name,
            display_tool_name: n_data.display_tool_name ?? undefined,
            action_description: n_data.action_description,
            raw_command: n_data.raw_command ?? undefined,
            request_id: n_data.request_id,
            tool_use_id: n_data.tool_use_id
        })
    };
}
function On(e) {
    if (e === "pending") {
        return {
            status: "idle",
            reason: "get_pending"
        };
    }
    if (e.readFailed) {
        return {
            status: "idle",
            reason: "get_failed"
        };
    }
    let n = e.external?.pending_action;
    if (n === undefined || n === null) {
        return {
            status: "idle",
            reason: "no_pending_action"
        };
    }
    let s = Un(n);
    if (!s) {
        return {
            status: "idle",
            reason: "not_reportable"
        };
    }
    return {
        status: "requires_action",
        reason: "park",
        ...s
    };
}
function xn(reported, metadata) {
    if (reported === "requires_action") {
        return {
            reported
        };
    }
    let s = metadata.external?.pending_actions;
    return {
        reported,
        pendingActionOutstanding: metadata.readFailed === true || metadata.external?.pending_action !== undefined && metadata.external.pending_action !== null || Array.isArray(s) && s.length > 0
    };
}
const Bn = p(()=>_t({
        max_events: E().nullish(),
        max_age_ms: E().nullish(),
        max_bytes: E().nullish(),
        flush_on_sampling_end: M().nullish(),
        flush_on_assistant: M().nullish(),
        flush_before_tools_wait_ms: E().nullish(),
        flush_after_tools: o().nullish(),
        must_flush_types: T(o()).nullish(),
        live_twin_types: T(o()).nullish().catch(undefined),
        policy_version: o().nullish()
    }));
const Dn = 50;
const Ct = 120000;
const Hn = 60000;
const Ln = 1048576;
const Nn = 32;
const Wn = 32;
const qn = 57344;
const $n = /^[A-Za-z0-9._-]{1,16}$/;
const jn = 30000;
const Gn = 2000;
const zn = [
    "none",
    "write",
    "all"
];
const Vn = 64;
const Kn = 50;
const Yn = 5000;
const Xn = true;
const Qn = false;
const Jn = 3000;
const Zn = 10000;
const es = (e)=>e.ephemeral === true || e.payload.type === "keep_alive";
const ht = ()=>false;
function l6r() {
    return a.CLAUDE_CODE_WORKER_EPOCH ?? NaN;
}
function etr(e, getAuthHeaders) {
    if (e.protocol !== "http:" && e.protocol !== "https:") {
        let r = nQt(e.protocol, "session_url_protocol");
        throw Error(`CCRClient: Expected http(s) URL${r === undefined ? "" : `, got ${r}`}`);
    }
    let s = e.pathname.replace(/\/$/, "");
    return {
        sessionBaseUrl: `${e.protocol}//${e.host}${s}`,
        getAuthHeaders
    };
}
class jU {
    workerEpoch = 0;
    heartbeatIntervalMs;
    heartbeatJitterFraction;
    seedHeartbeatIntervalMs;
    advertiseHeartbeatProbeSupport;
    uploadTrim;
    uploadHoldMarker;
    servedCallRequestsJumpQueue;
    urgentRequestIds = new Set;
    eventHoldEnabled;
    processExiting;
    gatesToolCalls;
    toolCallRowGraceMs;
    flushPolicy;
    holdRule;
    seesModelCallBoundaries = false;
    holdSwitchedOff = false;
    shutdownReleased = false;
    shutdownKeepsClientEvents = false;
    viewerAbsentReported = false;
    stopToolCallGate;
    toolCallRows = {
        client_events: new Map,
        internal_events: new Map
    };
    toolCallRowWaiters = new Map;
    awaitedToolCalls = new Set;
    transcriptLaneInUse = false;
    gatedWriteToolCalls = new Set;
    lanesNotAnswering = new Set;
    loggedUnreadableFlushPolicy = false;
    loggedHoldSwitchedOff = false;
    loggedTranscriptEnvelopeStrip = false;
    loggedToolResultBlank = false;
    loggedMcpImageBlank = false;
    maxAdvisedIntervalMs;
    beatOnStaleReconnect;
    beatOnReactivation;
    skipRedundantHeartbeats;
    idleTracker;
    unsubscribeIdleTracker;
    probeBeatSpacingMs;
    heartbeatTimer = null;
    heartbeatInFlight = false;
    lastHeartbeatSentAtMs = 0;
    lastCadenceTickAtMs = 0;
    lastBeatingEventsPostOkAtMs = 0;
    skippedPreviousCadenceBeat = false;
    lastHeartbeatSuccessAtMs = Date.now();
    lastHeartbeat429AtMs = 0;
    idleGrantLatched = false;
    reactivationBeatArmed = false;
    pendingForcedBeat = false;
    probeBeatTimer = null;
    pendingBeatTrigger = null;
    closed = false;
    closeAbort = new AbortController;
    goodbyeFlushed = Promise.resolve();
    epochSuperseded = false;
    lastEpochMismatchCause;
    epochMismatchCount = 0;
    consecutiveAuthFailures = 0;
    lastAuthRefreshBadReason = null;
    consecutiveNotFound = 0;
    consecutiveHeartbeatFailures = 0;
    currentState = null;
    reportParkAtInit;
    initExternalMetadata;
    initialWorkerStatus;
    initStateGetOrderingBoundMs;
    parkReportedAtInitRequestId = undefined;
    sessionBaseUrl;
    sessionId;
    readSource;
    streamEventBuffer = [];
    streamEventTimer = null;
    firstFrameUpload;
    firstTextFrameUpload;
    firstBlockFrameUpload;
    streamEventBufferedAt = 0;
    streamEventFlushDueAt = 0;
    streamEventFlushIntervalMs = mSt;
    streamEventFirstFlushMs = 0;
    streamEventFlushOnFirstDelta = false;
    firstDeltaFlushTimer = null;
    firstContentFlushPending = false;
    parkedRows = [];
    noSubscriberStreamEventFlushIntervalMs = 0;
    noSubscriberUploadHoldMs = 0;
    closingForSuccessor = false;
    dropUnwatchedStreamEvents = false;
    lastReportedHasSubscribers;
    lastInboundEventAtMs = Number.NEGATIVE_INFINITY;
    viewerReportedSinceLastFalse = false;
    lastViewerLeftAtMs = Number.NEGATIVE_INFINITY;
    unwatchedPastGrace = false;
    hasSubscribersReports = 0;
    streamEventsDroppedUnwatched = 0;
    streamedEphemeralSinceLastAssistant = false;
    workerState;
    eventUploader;
    uploadPaths;
    internalEventUploader;
    internalEventPostWatch;
    rowsAwaitingCompactSummary = new Map;
    rowsAwaitingCompactSummaryAtClose;
    onInternalBatchAcked;
    onInternalEventLaneClosed;
    rowsRepeatedAfterCompaction;
    deliveryUploader;
    pendingProcessingAcks = [];
    onEpochMismatch;
    lastLineWhen;
    onDurableEventsDropped = undefined;
    onDurableEventsUpload = undefined;
    getAuthHeaders;
    onDiagnostic;
    onRequestAuthOk;
    onHeartbeatLost;
    readTransport;
    nonOrigin403Transient;
    nonOriginRuns = new Map;
    heartbeatStreakStartedAtMs = 0;
    heartbeatLostFiredForStreak = false;
    adoptRefreshedAuth;
    gzipRequestBodyFetch;
    ownConnectionPool;
    constructor(e, n, s){
        this.lastLineWhen = s?.onEpochMismatch ? "queued" : "now";
        this.onEpochMismatch = s?.onEpochMismatch ?? (()=>{
            process.exit(1);
        });
        this.onHeartbeatLost = s?.onHeartbeatLost;
        this.readTransport = e;
        this.nonOrigin403Transient = s?.nonOrigin403Transient ?? false;
        this.heartbeatIntervalMs = s?.heartbeatIntervalMs ?? Et;
        this.seedHeartbeatIntervalMs = this.heartbeatIntervalMs;
        this.advertiseHeartbeatProbeSupport = s?.advertiseHeartbeatProbeSupport ?? false;
        this.uploadTrim = s?.uploadTrim ?? (()=>rt);
        this.uploadHoldMarker = ()=>s?.uploadHoldMarker?.() === true;
        this.servedCallRequestsJumpQueue = ()=>s?.servedCallRequestsJumpQueue?.() === true;
        this.eventHoldEnabled = s?.eventHoldEnabled;
        this.processExiting = s?.processExiting ?? (()=>false);
        this.gatesToolCalls = s?.gatesToolCalls === true;
        this.toolCallRowGraceMs = s?.toolCallRowGraceMs ?? Gn;
        this.beatOnStaleReconnect = s?.beatOnStaleReconnect ?? false;
        this.idleTracker = s?.idleTracker;
        this.beatOnReactivation = (s?.beatOnReactivation ?? false) && this.idleTracker !== undefined;
        this.skipRedundantHeartbeats = s?.skipRedundantHeartbeats ?? false;
        this.probeBeatSpacingMs = s?.probeBeatSpacingMs ?? fn;
        this.heartbeatJitterFraction = s?.heartbeatJitterFraction ?? 0;
        this.maxAdvisedIntervalMs = this.maxAdvisedIntervalFor(this.advertiseHeartbeatProbeSupport);
        this.getAuthHeaders = s?.getAuthHeaders ?? DF;
        this.onDiagnostic = s?.onDiagnostic;
        this.onRequestAuthOk = s?.onRequestAuthOk;
        this.adoptRefreshedAuth = s?.adoptRefreshedAuth;
        this.gzipRequestBodyFetch = s?.gzipRequestBodyFetch;
        this.ownConnectionPool = s?.ownConnectionPool;
        this.reportParkAtInit = s?.reportParkAtInit ?? false;
        this.initExternalMetadata = s?.initExternalMetadata ?? {};
        this.initialWorkerStatus = s?.initialWorkerStatus ?? "idle";
        this.initStateGetOrderingBoundMs = s?.initStateGetOrderingBoundMs ?? Cn;
        this.readSource = {
            ...etr(n, this.getAuthHeaders),
            isClosed: ()=>this.closed,
            onConflict: (S)=>this.handleEpochMismatch(S),
            ownConnectionPool: this.ownConnectionPool
        };
        this.sessionBaseUrl = this.readSource.sessionBaseUrl;
        this.sessionId = n.pathname.replace(/\/$/, "").split("/").pop() || "";
        this.workerState = new Me({
            send: async (S)=>{
                let k = await this.request("put", "/worker", {
                    worker_epoch: this.workerEpoch,
                    ...S
                }, "PUT worker");
                if (k.ok) {
                    if (S.worker_status !== undefined) {
                        g("ccr_worker_state_publish");
                    }
                    return true;
                }
                if (V(k.status)) {
                    J("warn", "cli_worker_state_4xx_dropped", {
                        status: k.status
                    });
                    this.droppedWorkerStatePatchCount++;
                    if (S.worker_status !== undefined) {
                        f("ccr_worker_state_publish", "state_4xx_dropped");
                    }
                    return true;
                }
                return false;
            },
            baseDelayMs: 500,
            maxDelayMs: 30000,
            jitterMs: 500
        });
        this.eventUploader = new tOt({
            maxBatchSize: 100,
            maxBatchBytes: 10485760,
            maxQueueSize: 100000,
            send: async (S, k)=>{
                let P = rEr(S);
                if (P > 0) {
                    t(`CCRClient: dropped ${P} repeated-uuid durable event(s) from one /worker/events POST`);
                }
                let w = S.some(Sn) || k.followsUrgent ? gn : undefined;
                this.reportDurableUpload(S, "sending");
                let R = this.actsOnSubscribersReports();
                let parseBody = R || this.onSubscribersReported !== undefined;
                let hasSubscribersReports = this.hasSubscribersReports;
                let C = [];
                for (let B of this.trackedFrameUploads("ackedAtMs")){
                    if (S.some((N)=>N.payload.uuid === B.uuid)) {
                        C.push(B.timing);
                    }
                }
                for (let B of C){
                    if (B.postedAtMs === undefined) {
                        B.postedAtMs = performance.now();
                        B.postedWallMs = Date.now();
                    }
                }
                let D = this.uploadStreamHeaders(S);
                let q = await this.request("post", "/worker/events", this.uploadBody(S, k), "client events", {
                    timeout: w,
                    parseBody,
                    headers: D
                });
                if (q.ok) {
                    this.noteBreakCountStated(D);
                    for (let N of C){
                        if (N.ackedAtMs === undefined) {
                            N.ackedAtMs = performance.now();
                        }
                    }
                    let B = Ce(S);
                    if (B) {
                        g("ccr_task_status_publish", B);
                    }
                    this.noteBeatingEventsPostOk(S);
                    this.reportDurableUpload(S, "accepted");
                    this.noteToolCallRowsSettled("client_events", "stored", S);
                    if (R && hasSubscribersReports === this.hasSubscribersReports) {
                        this.setHasSubscribers(q.data?.has_subscribers, "no_report");
                    }
                    this.tellSubscribersReported(q.data?.has_subscribers);
                    return;
                }
                this.reportDurableUpload(S, ct(q.status));
                if (V(q.status)) {
                    let B = S.filter((W)=>!W.ephemeral);
                    let count = S.length - B.length;
                    let U = q.status;
                    let upload_stream_state = this.uploadPaths?.streamState();
                    let H = upload_stream_state && {
                        upload_stream_state,
                        upload_stream_offered: upload_stream_state !== "off"
                    };
                    if (count > 0) {
                        t(`CCRClient: client event POST rejected (${q.status}) \u2014 dropping ${count} ephemeral event(s), retrying ${B.length} durable event(s)`, {
                            level: "warn"
                        });
                        f("ccr_partial_messages", "ephemeral_dropped_on_4xx", {
                            status: q.status,
                            count,
                            ...upload_stream_state && {
                                upload_stream_state: d(upload_stream_state)
                            }
                        });
                        S.splice(0, S.length, ...B);
                        J("warn", "cli_worker_events_4xx_ephemeral_dropped", {
                            status: q.status,
                            count,
                            ...H
                        });
                        if (B.length === 0) {
                            return;
                        }
                        this.reportDurableUpload(B, "sending");
                        let W = this.uploadStreamHeaders(B);
                        let j = await this.request("post", "/worker/events", this.uploadBody(B, k), "client events (durable retry)", {
                            timeout: w,
                            headers: W
                        });
                        if (j.ok) {
                            this.noteBreakCountStated(W);
                            let G = Ce(B);
                            if (G) {
                                g("ccr_task_status_publish", G);
                            }
                            this.noteBeatingEventsPostOk(B);
                            this.reportDurableUpload(B, "accepted");
                            this.noteToolCallRowsSettled("client_events", "stored", B);
                            return;
                        }
                        this.reportDurableUpload(B, ct(j.status));
                        if (!V(j.status)) {
                            throw new A6e("client event POST failed", j.retryAfterMs);
                        }
                        U = j.status;
                    }
                    if (B.length > 0) {
                        this.droppedDurableEventBatches++;
                        this.noteToolCallRowsSettled("client_events", "dropped", B);
                        try {
                            this.onDurableEventsDropped?.(B, U);
                        } catch (error) {
                            t(`CCRClient: onDurableEventsDropped threw; batch still dropped: ${l(error)}`, {
                                level: "warn"
                            });
                        }
                    }
                    J("warn", "cli_worker_events_4xx_dropped", {
                        status: U,
                        count: B.length,
                        ...H
                    });
                    let A = Ce(B);
                    if (A) {
                        m("ccr_task_status_publish", "status_events_4xx_dropped", A);
                    }
                    return;
                }
                throw new A6e("client event POST failed", q.retryAfterMs);
            },
            baseDelayMs: 500,
            maxDelayMs: 30000,
            jitterMs: 500,
            onHoldRelease: this.logUploadHoldEnd.bind(this, "client_events"),
            onDrained: this.logUploadDrain.bind(this, "client_events"),
            onIdle: ()=>this.uploadPaths?.pump()
        });
        let r = s?.uploadStream;
        let h = os(n);
        this.uploadPaths = r && h !== undefined ? new Se({
            post: this.eventUploader,
            stream: (S)=>new Re({
                    ...S,
                    ...r,
                    url: h,
                    authHeaders: ()=>this.getAuthHeaders(),
                    workerEpoch: ()=>this.workerEpoch
                }),
            merge: (S)=>this.mergeWaitingLiveEvents(S),
            watched: ()=>this.lastReportedHasSubscribers !== false,
            onSent: (S)=>this.stampTrackedFrames(S, "postedAtMs"),
            onAcked: (S)=>this.stampTrackedFrames(S, "ackedAtMs"),
            onSubscribers: (S)=>{
                if (this.actsOnSubscribersReports()) {
                    this.setHasSubscribers(S, "no_report");
                }
                this.tellSubscribersReported(S);
            },
            onGap: ()=>f("ccr_partial_messages", "gap_after_stream_break")
        }) : undefined;
        let y = s?.internalEventUploader;
        this.internalEventUploader = new tOt({
            maxBatchSize: 100,
            maxBatchBytes: y?.maxBatchBytes ?? 10485760,
            maxQueueSize: 200,
            maxConsecutiveFailures: y?.maxConsecutiveFailures,
            onBatchDropped: (count, consecutive_failures)=>{
                this.droppedInternalEventBatches++;
                J("warn", "cli_worker_internal_events_give_up_dropped", {
                    count,
                    consecutive_failures
                });
                i("tengu_ccr_internal_events_dropped", {
                    reason: b("give_up"),
                    count,
                    consecutive_failures
                });
            },
            send: async (S, k)=>{
                let P = performance.now();
                let w = await this.request("post", "/worker/internal-events", this.uploadBody(S, k), "internal events", {
                    timeout: y?.requestTimeoutMs
                });
                this.markInternalEventPostWatch((R)=>R.noteAttempt(S, P, w.ok));
                if (w.ok) {
                    this.noteToolCallRowsSettled("internal_events", "stored", S);
                    Promise.resolve().then(()=>this.onInternalBatchAcked?.(S)).catch(()=>{});
                    return;
                }
                if (V(w.status) && k.mayResendInTwo()) {
                    i("tengu_ccr_internal_events_refused_will_split", {
                        count: S.length,
                        status: w.status
                    });
                    throw new ZBn;
                }
                if (V(w.status)) {
                    this.droppedInternalEventBatches++;
                    this.noteToolCallRowsSettled("internal_events", "dropped", S);
                    J("warn", "cli_worker_internal_events_4xx_dropped", {
                        status: w.status,
                        count: S.length
                    });
                    i("tengu_ccr_internal_events_dropped", {
                        reason: b("4xx"),
                        count: S.length,
                        status: w.status
                    });
                    return;
                }
                throw new A6e("internal event POST failed", w.nonOriginRefusal ? maxDelayMs : w.retryAfterMs);
            },
            baseDelayMs: 500,
            maxDelayMs,
            jitterMs: 500,
            holdMaxItems: 50,
            gatherTick: true,
            onHoldRelease: this.logUploadHoldEnd.bind(this, "internal_events"),
            onDrained: this.logUploadDrain.bind(this, "internal_events")
        });
        this.deliveryUploader = new tOt({
            maxBatchSize: 64,
            maxQueueSize: 64,
            send: async (S)=>{
                let k = await this.request("post", "/worker/events/delivery", {
                    worker_epoch: this.workerEpoch,
                    updates: S.map((P)=>({
                            event_id: P.eventId,
                            status: P.status
                        }))
                }, "delivery batch");
                if (k.ok) {
                    return;
                }
                if (V(k.status)) {
                    J("warn", "cli_worker_delivery_4xx_dropped", {
                        status: k.status,
                        count: S.length
                    });
                    this.droppedDeliveryAckBatches++;
                    return;
                }
                throw new A6e("delivery POST failed", k.retryAfterMs);
            },
            baseDelayMs: 500,
            maxDelayMs: 30000,
            jitterMs: 500
        });
        this.setStreamEventFlushIntervalMs(s?.streamEventFlushIntervalMs);
        this.setStreamEventFirstFlushMs(s?.streamEventFirstFlushMs);
        this.setStreamEventFlushOnFirstDelta(s?.streamEventFlushOnFirstDelta);
        this.setNoSubscriberStreamEventFlushIntervalMs(s?.noSubscriberStreamEventFlushIntervalMs);
        this.setNoSubscriberUploadHoldMs(s?.noSubscriberUploadHoldMs);
        this.setDropUnwatchedStreamEvents(s?.dropUnwatchedStreamEvents);
        e.setOnEvent((S)=>{
            if (this.processExiting() && xe(S)) {
                return;
            }
            this.reportDelivery(S.event_id, "received");
        });
        e.setOnHeartbeatProbe(()=>{
            this.setHasSubscribers(undefined, "reset");
            this.heartbeatNow("probe");
        });
        e.setOnReconnected(()=>{
            this.resyncAfterReconnect();
            s?.onStreamReconnected?.();
        });
        this.unsubscribeIdleTracker = this.beatOnReactivation ? this.idleTracker?.onActivity(()=>this.sendReactivationBeat()) : undefined;
    }
    maxAdvisedIntervalFor(e) {
        if (e) {
            return Math.floor(yu / (1 + this.heartbeatJitterFraction));
        }
        return hn;
    }
    setFeatureGatedOptions({ advertiseHeartbeatProbeSupport, beatOnStaleReconnect, beatOnReactivation, skipRedundantHeartbeats }) {
        this.advertiseHeartbeatProbeSupport = advertiseHeartbeatProbeSupport;
        this.maxAdvisedIntervalMs = this.maxAdvisedIntervalFor(advertiseHeartbeatProbeSupport);
        this.beatOnStaleReconnect = beatOnStaleReconnect;
        this.skipRedundantHeartbeats = skipRedundantHeartbeats;
        let h = beatOnReactivation && this.idleTracker !== undefined;
        if (h !== this.beatOnReactivation) {
            this.beatOnReactivation = h;
            this.unsubscribeIdleTracker?.();
            this.unsubscribeIdleTracker = h && !this.closed ? this.idleTracker?.onActivity(()=>this.sendReactivationBeat()) : undefined;
        }
    }
    async initialize(e) {
        let n = Date.now();
        if (Object.keys(this.getAuthHeaders()).length === 0) {
            throw new GMe("no_auth_headers");
        }
        if (e === undefined) {
            e = l6r();
        }
        if (isNaN(e)) {
            throw new GMe("missing_epoch");
        }
        this.workerEpoch = e;
        let s = this.getWorkerState();
        let r = await Promise.race([
            s.then((C)=>C.metadata, ()=>({
                    external: null,
                    internal: null,
                    readFailed: true
                })),
            Q(this.initStateGetOrderingBoundMs).then(()=>"pending")
        ]);
        let h = this.reportParkAtInit ? On(r) : undefined;
        let y = {
            worker_status: "idle",
            worker_epoch: this.workerEpoch,
            external_metadata: {
                ...this.initExternalMetadata,
                task_summary: null
            }
        };
        let S = h === undefined ? {
            worker_status: this.initialWorkerStatus,
            worker_epoch: this.workerEpoch,
            external_metadata: {
                ...this.initExternalMetadata,
                pending_action: null,
                pending_actions: null,
                task_summary: null
            }
        } : h.status === "requires_action" ? {
            ...y,
            worker_status: "requires_action",
            requires_action_details: h.details
        } : y;
        let k = {
            ok: false
        };
        let P = new Set;
        let w = 10;
        let R = 0;
        for(let C = 1; C <= w; C++){
            if (this.closed) {
                break;
            }
            R = C;
            k = await this.request("put", "/worker", S, "PUT worker (init)", {
                parseBody: this.uploadPaths !== undefined
            });
            if (k.ok || this.closed) {
                break;
            }
            if (k.reason) {
                P.add(k.reason);
            }
            this.onDiagnostic?.(`PUT /worker failed (${k.reason ?? "unknown"}) attempt=${C}/${w}, ${Math.round((Date.now() - n) / 1000)}s elapsed`, "warn", "worker_registration_attempt_failed");
            if (V(k.status)) {
                if (h?.status === "requires_action") {
                    h = {
                        status: "idle",
                        reason: "park_rejected"
                    };
                    S = y;
                    C--;
                    continue;
                }
                break;
            }
            if (C < w) {
                let D = Math.min(500 * 2 ** (C - 1), 30000) + Math.random() * 500;
                await Q(D);
            }
        }
        if (!k.ok) {
            if (!this.closed) {
                J("error", "cli_worker_init_put_retries_exhausted");
                this.onDiagnostic?.(`PUT /worker retries exhausted: ${R} attempts over ${Math.round((Date.now() - n) / 1000)}s, errors=[${[
                    ...P
                ].join(",") || "unknown"}]`, "warn", "worker_registration_gave_up");
            }
            throw new GMe("worker_register_failed", k.status);
        }
        this.currentState = h?.status ?? this.initialWorkerStatus;
        this.applyUploadHold("idle");
        if (L(k.data) && k.data.upload_stream != null) {
            this.uploadPaths?.takeOffer(k.data.upload_stream);
        }
        this.parkReportedAtInitRequestId = h?.status === "requires_action" ? h.requestId : undefined;
        this.startHeartbeat();
        if (!this.closed) {
            Vbs(()=>{
                this.writeEvent({
                    type: "keep_alive"
                });
            });
            if (this.gatesToolCalls) {
                this.stopToolCallGate = pps((C)=>this.gateToolCall(C));
            }
        }
        t(`CCRClient: initialized, epoch=${this.workerEpoch}`);
        J("info", "cli_worker_lifecycle_initialized", {
            epoch: this.workerEpoch,
            duration_ms: Date.now() - n,
            reported_status: this.currentState
        });
        wr("worker_init_ms", Date.now() - n, n - performance.timeOrigin);
        if (h) {
            i("tengu_ccr_init_park_report", {
                reported: d(h.status),
                reason: d(h.reason)
            });
        }
        let { metadata, durationMs } = await s;
        if (!this.closed) {
            J("info", "cli_worker_state_restored", {
                duration_ms: durationMs,
                had_state: metadata.external !== null || metadata.internal !== null,
                read_failed: metadata.readFailed === true
            });
        }
        if (h) {
            return {
                ...metadata,
                initParkReport: xn(h.status, metadata)
            };
        }
        return metadata;
    }
    async getWorkerState(e = "worker_state", n = false) {
        let s = Date.now();
        let r = this.getAuthHeaders();
        if (Object.keys(r).length === 0) {
            return {
                metadata: {
                    external: null,
                    internal: null,
                    readFailed: true
                },
                projectsAssertion: undefined,
                durationMs: 0
            };
        }
        let h = await jU.getWithRetry(this.readSource, `${this.sessionBaseUrl}/worker${bt(n)}`, r, e, undefined, undefined, {
            signal: this.closeAbort.signal
        });
        return {
            metadata: {
                external: h?.worker?.external_metadata ?? null,
                internal: h?.worker?.internal_metadata ?? null,
                ...h === null && {
                    readFailed: true
                }
            },
            projectsAssertion: yt(h),
            durationMs: Date.now() - s
        };
    }
    get currentWorkerEpoch() {
        return this.workerEpoch;
    }
    async readProjectsBinding() {
        let { metadata, projectsAssertion } = await this.getWorkerState("projects_binding", true);
        if (metadata.readFailed) {
            return {
                read: false
            };
        }
        return {
            read: true,
            assertion: projectsAssertion
        };
    }
    async readWorkerState() {
        return (await this.getWorkerState("worker_state_reread")).metadata;
    }
    static async readProjectsBindingFor(e, n) {
        let s = etr(e, n);
        if (Object.keys(n()).length === 0) {
            return {
                read: false
            };
        }
        let r = await jU.getWithRetry(s, `${s.sessionBaseUrl}/worker${bt(true)}`, n(), "projects_binding");
        if (r === null) {
            return {
                read: false
            };
        }
        return {
            read: true,
            assertion: yt(r)
        };
    }
    async request(method, path, s, r, { timeout = 10000, parseBody = false, countTowardEscalation = true, signal, headers } = {}) {
        let w = this.getAuthHeaders();
        if (Object.keys(w).length === 0) {
            return {
                ok: false,
                reason: "no_auth_headers"
            };
        }
        let R = `${this.sessionBaseUrl}${path}`;
        let I = signal ? zs(signal, {
            timeoutMs: timeout,
            refTimer: true
        }) : undefined;
        try {
            let O = {
                method: method.toUpperCase(),
                headers: {
                    ...w,
                    "Content-Type": "application/json",
                    "anthropic-version": "2023-06-01",
                    "anthropic-client-platform": zy(),
                    "User-Agent": Ko(),
                    ...headers
                },
                body: _(s),
                signal: I?.signal ?? AbortSignal.timeout(timeout),
                ...na({
                    url: R
                })
            };
            let C = this.gzipRequestBodyFetch ? await this.gzipRequestBodyFetch(R, O, (U)=>ugr(R, U, this.ownConnectionPool)) : await ugr(R, O, this.ownConnectionPool);
            if (C.ok) {
                this.consecutiveAuthFailures = 0;
                this.consecutiveNotFound = 0;
                this.reportNonOriginRun("onCleared", Pe[path]);
                this.nonOriginRuns.delete(Pe[path]);
                for (let U of this.nonOriginRuns.values()){
                    U.othersPassed = true;
                }
                if (parseBody) {
                    try {
                        return {
                            ok: true,
                            data: await C.json()
                        };
                    } catch  {
                        return {
                            ok: true
                        };
                    }
                }
                await Wj(C);
                return {
                    ok: true
                };
            }
            let D;
            if (C.status === 409 && !this.closed) {
                D = await Ie(C);
            } else {
                await Wj(C);
            }
            if (this.closed) {
                return {
                    ok: false,
                    status: C.status,
                    reason: `http_${C.status}`
                };
            }
            if (C.status === 409) {
                this.handleEpochMismatch(D);
            }
            if (C.status === 404 && countTowardEscalation) {
                this.consecutiveNotFound++;
                if (this.consecutiveNotFound >= Tn) {
                    t(`CCRClient: ${this.consecutiveNotFound} consecutive 404s \u2014 session gone, exiting`, {
                        level: "error"
                    });
                    J("error", "cli_worker_session_not_found", undefined, this.lastLineWhen);
                    this.onDiagnostic?.(`${this.consecutiveNotFound} consecutive 404s on ${path} \u2014 session gone, exiting`, "warn", "session_not_found");
                    this.escalateEpochMismatch("session_not_found");
                }
            }
            let q = C.status === 403 ? rPt((U)=>C.headers.get(U)) : undefined;
            let B = this.nonOrigin403Transient;
            let nonOriginRefusal = B !== false && QNe(q);
            if (nonOriginRefusal && typeof B === "object") {
                let U = Pe[path];
                let sinceMs = performance.now();
                let H = this.nonOriginRuns.get(U) ?? {
                    sinceMs,
                    refusals: 0,
                    windowsSpent: 0,
                    othersPassed: false
                };
                this.nonOriginRuns.set(U, H);
                H.refusals++;
                nonOriginRefusal = sinceMs - H.sinceMs < B.windowMs;
                if (nonOriginRefusal) {
                    try {
                        B.onRefused(U);
                    } catch (error) {
                        t(`CCRClient: onRefused threw: ${l(error)}`, {
                            level: "error"
                        });
                    }
                } else if (sinceMs - H.sinceMs >= (H.windowsSpent + 1) * B.windowMs) {
                    H.windowsSpent++;
                    this.reportNonOriginRun("onWindowSpent", U);
                }
            }
            if (C.status === 401 || C.status === 403) {
                let U = qc();
                let x = U ? dO(U) : null;
                if (x !== null && x * 1000 < Date.now()) {
                    t(`CCRClient: session_token expired (exp=${new Date(x * 1000).toISOString()}) \u2014 no refresh was delivered, exiting`, {
                        level: "error"
                    });
                    J("error", "cli_worker_token_expired_no_refresh", undefined, this.lastLineWhen);
                    this.onDiagnostic?.(`session_token expired (exp=${new Date(x * 1000).toISOString()}) \u2014 no refresh delivered, exiting`, "warn", "token_expired");
                    this.escalateEpochMismatch("token_expired");
                }
                if (countTowardEscalation && !nonOriginRefusal) {
                    this.consecutiveAuthFailures++;
                    if (this.consecutiveAuthFailures >= kn) {
                        t(`CCRClient: ${this.consecutiveAuthFailures} consecutive auth failures with a valid-looking token \u2014 server-side auth unrecoverable, exiting`, {
                            level: "error"
                        });
                        J("error", "cli_worker_auth_failures_exhausted", undefined, this.lastLineWhen);
                        this.onDiagnostic?.(`${this.consecutiveAuthFailures} consecutive auth failures (HTTP ${C.status}) with valid-looking token \u2014 exiting`, "warn", "auth_exhausted");
                        this.escalateEpochMismatch("auth_exhausted");
                    }
                }
            }
            t(`CCRClient: ${r} returned ${C.status}`, {
                level: "warn"
            });
            J("warn", "cli_worker_request_failed", {
                method,
                path,
                status: C.status,
                ...q !== undefined && {
                    source: q
                }
            });
            if (C.status === 429) {
                let U = C.headers.get("retry-after");
                let x = U ? parseInt(U, 10) : NaN;
                if (!isNaN(x) && x >= 0) {
                    return {
                        ok: false,
                        retryAfterMs: x * 1000,
                        status: C.status,
                        reason: `http_${C.status}`
                    };
                }
            }
            return {
                ok: false,
                status: C.status,
                reason: `http_${C.status}`,
                ...nonOriginRefusal && {
                    nonOriginRefusal
                }
            };
        } catch (error) {
            t(`CCRClient: ${r} failed: ${l(error)}`, {
                level: "warn"
            });
            J("warn", "cli_worker_request_error", {
                method,
                path,
                error_code: ie(error)
            });
            return {
                ok: false,
                reason: `fetch_failed:${ie(error)}`
            };
        } finally{
            I?.cleanup();
        }
    }
    reportNonOriginRun(e, n) {
        let s = this.nonOriginRuns.get(n);
        if (s === undefined || typeof this.nonOrigin403Transient !== "object") {
            return;
        }
        let runMs = Math.round(performance.now() - s.sinceMs);
        let { unsentClientEvents, unsentInternalEvents } = this.uploadBacklog();
        t(`CCRClient: ${n} ${e === "onCleared" ? "accepted again" : "still refused"} after ${runMs}ms of non-origin 403s (${s.refusals} refusals)`, {
            level: "warn"
        });
        try {
            this.nonOrigin403Transient[e]({
                lane: n,
                refusals: s.refusals,
                runMs,
                windowsSpent: s.windowsSpent,
                othersPassed: s.othersPassed,
                backlog: unsentClientEvents + unsentInternalEvents
            });
        } catch (error) {
            t(`CCRClient: ${e} threw: ${l(error)}`, {
                level: "error"
            });
        }
    }
    reportState(worker_status, n) {
        if (worker_status === this.currentState && !n) {
            return;
        }
        let parkReportedAtInitRequestId = this.parkReportedAtInitRequestId;
        this.parkReportedAtInitRequestId = undefined;
        if (parkReportedAtInitRequestId !== undefined && worker_status === "requires_action" && this.currentState === "requires_action" && __e(n) === parkReportedAtInitRequestId) {
            return;
        }
        this.currentState = worker_status;
        this.workerState.enqueue({
            worker_status,
            requires_action_details: n ? Mt(n) : null,
            internal_metadata: {
                reply_degraded: i5o()
            }
        });
        this.applyUploadHold(worker_status === "running" ? "idle" : worker_status);
    }
    reportMetadata(e) {
        this.workerState.enqueue({
            external_metadata: ts(e)
        });
    }
    reportInternalMetadata(internal_metadata) {
        this.workerState.enqueue({
            internal_metadata
        });
    }
    handleEpochMismatch(e) {
        let n = e ?? "epoch_conflict";
        let s = e ?? "unattributed";
        t(`CCRClient: Epoch mismatch (409, reason=${s}), shutting down`, {
            level: "error"
        });
        J("error", n === "epoch_stale" ? "cli_worker_epoch_stale" : n === "session_not_active" ? "cli_worker_session_not_active" : "cli_worker_epoch_mismatch", {
            reason: s
        }, this.lastLineWhen);
        let r = n === "epoch_stale" ? "stale registration (no live successor)" : n === "session_not_active" ? "session archived or no longer active" : n === "superseded_by_worker" ? "superseded by a newer worker" : "unattributed conflict, treated as superseded";
        this.onDiagnostic?.(`worker epoch mismatch (409) reason=${s} epoch=${this.workerEpoch} \u2014 ${r}, exiting`, "warn", n);
        this.escalateEpochMismatch(n);
    }
    escalateEpochMismatch(e) {
        this.lastEpochMismatchCause = e;
        this.epochMismatchCount++;
        this.epochSuperseded = true;
        return this.onEpochMismatch(e);
    }
    startHeartbeat() {
        this.stopHeartbeat();
        if (this.closed) {
            return;
        }
        let e = ()=>{
            let s = this.heartbeatIntervalMs * this.heartbeatJitterFraction * (2 * Math.random() - 1);
            this.heartbeatTimer = setTimeout(n, this.heartbeatIntervalMs + s);
        };
        let n = ()=>{
            let lastCadenceTickAtMs = this.lastCadenceTickAtMs;
            this.lastCadenceTickAtMs = Date.now();
            if (this.canSkipCadenceBeat(lastCadenceTickAtMs)) {
                this.skippedPreviousCadenceBeat = true;
                this.idleTracker?.sampleIdleSeconds();
                t("CCRClient: Heartbeat skipped (events beat)");
            } else {
                this.sendHeartbeat();
            }
            if (this.heartbeatTimer === null) {
                return;
            }
            e();
        };
        this.lastCadenceTickAtMs = Date.now();
        e();
    }
    noteBeatingEventsPostOk(e) {
        if (e.some((n)=>!n.ephemeral)) {
            this.lastBeatingEventsPostOkAtMs = Date.now();
        }
    }
    canSkipCadenceBeat(e) {
        let n = this.heartbeatIntervalMs * (1 + this.heartbeatJitterFraction);
        if (!this.skipRedundantHeartbeats || this.closed || this.lastBeatingEventsPostOkAtMs < e || this.lastBeatingEventsPostOkAtMs > this.lastCadenceTickAtMs || this.lastCadenceTickAtMs - this.lastBeatingEventsPostOkAtMs > n * lt || this.heartbeatIntervalMs > this.seedHeartbeatIntervalMs || this.isIdleAdvised() || this.consecutiveHeartbeatFailures > 0 || this.skippedPreviousCadenceBeat) {
            return false;
        }
        let s = n * 2;
        return this.clampToTokenLifetime(s) >= s;
    }
    stopHeartbeat() {
        if (this.heartbeatTimer) {
            clearTimeout(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
    }
    clearProbeBeatTimer() {
        if (this.probeBeatTimer) {
            clearTimeout(this.probeBeatTimer);
            this.probeBeatTimer = null;
        }
    }
    sendGoodbye() {
        if (this.workerEpoch <= 0 || this.epochSuperseded) {
            return;
        }
        if (this.currentState === "running") {
            J("info", "cli_worker_goodbye_skipped_mid_turn");
            return;
        }
        this.goodbyeFlushed = this.request("put", "/worker", {
            worker_epoch: this.workerEpoch,
            connection_status: "disconnected"
        }, "PUT worker (goodbye)", {
            timeout: pn,
            countTowardEscalation: false
        }).then((e)=>{
            if (e.ok) {
                g("ccr_worker_goodbye");
            } else if (e.status !== 409) {
                f("ccr_worker_goodbye", e.status !== undefined ? `http_${e.status}` : "send_failed");
            }
        }).catch(()=>{
            f("ccr_worker_goodbye", "send_threw");
        });
    }
    heartbeatNow(e = "probe") {
        if (this.closed) {
            return;
        }
        if (e === "probe" ? this.pendingBeatTrigger === "reactivate" : e === "reactivate" && this.pendingBeatTrigger === "probe") {
            this.restoreReactivationArm();
        }
        if (e === "probe" || this.pendingBeatTrigger === null || e === "reactivate" && this.pendingBeatTrigger !== "probe") {
            this.pendingBeatTrigger = e;
        }
        if (this.heartbeatInFlight) {
            this.pendingForcedBeat = true;
            return;
        }
        let s = Date.now() - this.lastHeartbeatSentAtMs;
        if (s < this.probeBeatSpacingMs) {
            if (this.probeBeatTimer) {
                return;
            }
            this.probeBeatTimer = setTimeout(()=>{
                this.probeBeatTimer = null;
                this.refireForcedBeat();
            }, this.probeBeatSpacingMs - s);
            return;
        }
        let r = this.pendingBeatTrigger ?? e;
        this.pendingBeatTrigger = null;
        this.clearProbeBeatTimer();
        this.sendHeartbeat(r);
    }
    refireForcedBeat() {
        let e = this.pendingBeatTrigger ?? "probe";
        if (e === "resync_stale" && !this.staleReconnectBeatWanted()) {
            this.pendingBeatTrigger = null;
            this.clearProbeBeatTimer();
            return;
        }
        if (e === "reactivate") {
            this.restoreReactivationArm();
            if (!this.reactivationBeatWanted()) {
                this.pendingBeatTrigger = null;
                this.clearProbeBeatTimer();
                return;
            }
            this.reactivationBeatArmed = false;
        }
        this.heartbeatNow(e);
    }
    reactivationBeatWanted() {
        return this.beatOnReactivation && this.reactivationBeatArmed && this.isIdleAdvised() && Date.now() - this.lastHeartbeat429AtMs > this.seedHeartbeatIntervalMs;
    }
    restoreReactivationArm() {
        this.reactivationBeatArmed = this.idleGrantLatched;
    }
    armReactivationIfEarned(e, n) {
        if (this.beatOnReactivation && e !== undefined && e >= n) {
            this.reactivationBeatArmed = true;
        }
    }
    sendReactivationBeat() {
        if (!this.reactivationBeatWanted()) {
            return;
        }
        this.reactivationBeatArmed = false;
        this.heartbeatNow("reactivate");
    }
    isIdleAdvised() {
        return this.advertiseHeartbeatProbeSupport && this.idleGrantLatched;
    }
    applyShorterIntervalNow(e) {
        if (e >= this.heartbeatIntervalMs) {
            return;
        }
        this.heartbeatIntervalMs = e;
        if (this.heartbeatTimer !== null) {
            this.startHeartbeat();
        }
    }
    clampToTokenLifetime(e) {
        if (!this.advertiseHeartbeatProbeSupport || !this.adoptRefreshedAuth) {
            return e;
        }
        let n = qc();
        let s = n ? dO(n) : null;
        if (s === null) {
            return e;
        }
        let r = s * 1000 - Date.now() - mn;
        if (r >= e) {
            return e;
        }
        return Math.max(ot, r);
    }
    reclampCurrentIntervalToTokenLifetime() {
        let e = this.clampToTokenLifetime(this.heartbeatIntervalMs);
        if (e < this.heartbeatIntervalMs) {
            J("info", "cli_heartbeat_interval_updated", {
                from_ms: this.heartbeatIntervalMs,
                to_ms: e
            });
            this.applyShorterIntervalNow(e);
        }
    }
    resyncAfterReconnect() {
        if (this.isIdleAdvised()) {
            this.heartbeatNow("resync");
            return;
        }
        if (this.staleReconnectBeatWanted()) {
            this.heartbeatNow("resync_stale");
        }
    }
    staleReconnectBeatWanted() {
        if (!this.beatOnStaleReconnect || this.heartbeatIntervalMs <= this.seedHeartbeatIntervalMs) {
            return false;
        }
        let e = Date.now();
        if (e - this.lastHeartbeatSuccessAtMs <= this.heartbeatIntervalMs * lt) {
            return false;
        }
        return e - this.lastHeartbeat429AtMs > this.heartbeatIntervalMs;
    }
    resetHeartbeatStreak() {
        this.consecutiveHeartbeatFailures = 0;
        this.heartbeatLostFiredForStreak = false;
    }
    async sendHeartbeat(e) {
        if (this.closed) {
            this.stopHeartbeat();
            return;
        }
        if (this.heartbeatInFlight) {
            return;
        }
        this.heartbeatInFlight = true;
        this.lastHeartbeatSentAtMs = Date.now();
        this.skippedPreviousCadenceBeat = false;
        if (e === "resync_stale") {
            J("info", "cli_heartbeat_reconnect_stale_beat", {
                gap_ms: this.lastHeartbeatSentAtMs - this.lastHeartbeatSuccessAtMs,
                interval_ms: this.heartbeatIntervalMs
            });
        }
        try {
            if (e === "reactivate") {
                J("info", "cli_heartbeat_reactivation_beat", {
                    interval_ms: this.heartbeatIntervalMs
                });
            }
            let n = this.idleTracker?.sampleIdleSeconds();
            let idle_seconds = this.advertiseHeartbeatProbeSupport ? n : undefined;
            let r = await this.request("post", "/worker/heartbeat", {
                session_id: this.sessionId,
                worker_epoch: this.workerEpoch,
                ...this.advertiseHeartbeatProbeSupport && {
                    supports_heartbeat_probe: true,
                    current_interval_seconds: Math.round(this.heartbeatIntervalMs / 1000),
                    ...idle_seconds !== undefined && {
                        idle_seconds
                    }
                }
            }, "Heartbeat", {
                timeout: Math.max(cn, Math.min(kt, this.heartbeatIntervalMs * (1 - this.heartbeatJitterFraction) - wt)),
                parseBody: true,
                countTowardEscalation: e === undefined
            });
            if (!r.ok) {
                if (e === "probe") {
                    m("ccr_heartbeat_probe", "beat_failed");
                } else if (e === "resync_stale") {
                    m("ccr_reconnect_beat", "beat_failed");
                } else if (e === "reactivate") {
                    m("ccr_reactivation_beat", "beat_failed");
                }
                if (r.status === 429) {
                    this.lastHeartbeat429AtMs = Date.now();
                    if (e === "reactivate") {
                        this.restoreReactivationArm();
                    }
                }
                if (this.isIdleAdvised() && r.status !== 429) {
                    J("warn", "cli_heartbeat_idle_reverted_on_failure", {
                        status: r.status
                    });
                    this.idleGrantLatched = false;
                    this.reactivationBeatArmed = false;
                    this.applyShorterIntervalNow(this.seedHeartbeatIntervalMs);
                }
                this.reclampCurrentIntervalToTokenLifetime();
                if (r.status !== undefined && _n.has(r.status) && !r.nonOriginRefusal) {
                    this.resetHeartbeatStreak();
                    return;
                }
                if (!this.readTransport.isReadStreamRecentlyAlive()) {
                    this.resetHeartbeatStreak();
                    return;
                }
                if (this.consecutiveHeartbeatFailures === 0) {
                    this.heartbeatStreakStartedAtMs = Date.now();
                }
                this.consecutiveHeartbeatFailures++;
                if (!this.heartbeatLostFiredForStreak && this.consecutiveHeartbeatFailures >= vn && Date.now() - this.heartbeatStreakStartedAtMs >= this.readTransport.getReadStreamRecentLivenessWindowMs()) {
                    this.heartbeatLostFiredForStreak = true;
                    try {
                        this.onHeartbeatLost?.();
                    } catch (error) {
                        c(error);
                    }
                }
                return;
            }
            this.resetHeartbeatStreak();
            this.lastHeartbeatSuccessAtMs = this.lastHeartbeatSentAtMs;
            this.onRequestAuthOk?.();
            if (e === "probe") {
                g("ccr_heartbeat_probe");
            } else if (e === "resync_stale") {
                g("ccr_reconnect_beat");
            } else if (e === "reactivate") {
                g("ccr_reactivation_beat");
            }
            t("CCRClient: Heartbeat sent");
            if (L(r.data)) {
                this.takeUpFlushPolicy(r.data.event_flush_policy);
                this.uploadPaths?.takeOffer(r.data.upload_stream);
            }
            if (r.data?.refreshed_auth && this.adoptRefreshedAuth) {
                try {
                    let S = false;
                    let k = this.adoptRefreshedAuth(r.data.refreshed_auth.expires_in_seconds);
                    k.then((R)=>{
                        if (S && R.adopted) {
                            this.lastAuthRefreshBadReason = null;
                            g("ccr_worker_auth_refresh");
                            J("info", "cli_heartbeat_refreshed_auth_late_adopted");
                        }
                    }, ()=>{});
                    let P = await Ge(k, Math.min(Tt, this.heartbeatIntervalMs));
                    let w;
                    if (P === undefined) {
                        S = true;
                        w = {
                            adopted: false,
                            reason: "adopt_timeout"
                        };
                    } else {
                        w = P;
                    }
                    J("info", "cli_heartbeat_refreshed_auth_signal", {
                        adopted: w.adopted,
                        reason: w.reason,
                        expires_in_seconds: r.data.refreshed_auth.expires_in_seconds
                    });
                    if (w.adopted) {
                        g("ccr_worker_auth_refresh");
                        this.lastAuthRefreshBadReason = null;
                    } else if (w.reason && w.reason !== "unchanged" && w.reason !== this.lastAuthRefreshBadReason) {
                        this.lastAuthRefreshBadReason = w.reason;
                        m("ccr_worker_auth_refresh", w.reason);
                    }
                } catch  {
                    if (this.lastAuthRefreshBadReason !== "adopt_threw") {
                        this.lastAuthRefreshBadReason = "adopt_threw";
                        m("ccr_worker_auth_refresh", "adopt_threw");
                    }
                    J("error", "cli_heartbeat_refreshed_auth_adopt_threw");
                }
            }
            let h = r.data?.heartbeat_interval_seconds;
            if (typeof h !== "number" || !Number.isFinite(h) || h <= 0) {
                if (this.idleGrantLatched) {
                    this.armReactivationIfEarned(idle_seconds, this.heartbeatIntervalMs / 1000);
                }
                this.reclampCurrentIntervalToTokenLifetime();
                return;
            }
            if (this.advertiseHeartbeatProbeSupport) {
                let S = h * 1000 > this.seedHeartbeatIntervalMs;
                if (S) {
                    this.armReactivationIfEarned(idle_seconds, h);
                } else {
                    this.reactivationBeatArmed = false;
                }
                this.idleGrantLatched = S;
            }
            let y = this.clampToTokenLifetime(Math.min(Math.max(h * 1000, ot), this.maxAdvisedIntervalMs));
            if (y === this.heartbeatIntervalMs) {
                return;
            }
            J("info", "cli_heartbeat_interval_updated", {
                from_ms: this.heartbeatIntervalMs,
                to_ms: y
            });
            if (y < this.heartbeatIntervalMs) {
                this.applyShorterIntervalNow(y);
            } else {
                this.heartbeatIntervalMs = y;
            }
        } finally{
            this.heartbeatInFlight = false;
            if (this.pendingForcedBeat && !this.closed) {
                this.pendingForcedBeat = false;
                this.refireForcedBeat();
            }
        }
    }
    reportDurableUpload(e, n) {
        if (this.onDurableEventsUpload === undefined) {
            return;
        }
        let s = e.filter((r)=>!r.ephemeral);
        if (s.length === 0) {
            return;
        }
        try {
            this.onDurableEventsUpload(s, n);
        } catch (error) {
            t(`CCRClient: onDurableEventsUpload(${n}) threw; the batch's fate is unchanged: ${l(error)}`, {
                level: "warn"
            });
        }
    }
    writeEvent(e) {
        return this.writeEvents([
            e
        ]);
    }
    trackFirstFrameUpload(e) {
        let n = {};
        this.firstFrameUpload = {
            uuid: e,
            timing: n
        };
        return n;
    }
    trackFirstTextFrameUpload(e) {
        let n = {};
        this.firstTextFrameUpload = {
            uuid: e,
            timing: n
        };
        return n;
    }
    trackFirstBlockFrameUpload(e) {
        let n = {};
        this.firstBlockFrameUpload = {
            uuid: e,
            timing: n
        };
        return n;
    }
    trackedFrameUploads(e) {
        let n = [];
        for (let s of [
            this.firstFrameUpload,
            this.firstTextFrameUpload,
            this.firstBlockFrameUpload
        ]){
            if (s && s.timing[e] === undefined) {
                n.push(s);
            }
        }
        return n;
    }
    async writeEvents(e, n) {
        let s = [];
        let r = [];
        let since;
        let y;
        let S = false;
        let k = [];
        let P = [];
        for (let w of e){
            let R = w.type === "stream_event" ? ze(w) : w;
            let I = this.releaseFor(R);
            y ??= I;
            if ((this.streamEventFirstFlushMs > 0 && !I || this.noSubscriberStreamEventFlushIntervalMs > 0 || this.dropUnwatchedStreamEvents || this.unwatched() && this.currentState === "running") && this.streamEventFlushIntervalMs > 0 && gt(R)) {
                this.bufferEphemeral(R);
                continue;
            }
            if (R.type === "stream_event") {
                this.streamedEphemeralSinceLastAssistant = true;
                if (R.event.type === "message_stop" && this.holdRule === "served_policy" && this.flushPolicy?.flushOnSamplingEnd) {
                    this.bufferEphemeral(R);
                    since ??= this.streamEventBufferedAt;
                    S = true;
                    let C = this.takeStreamEventBuffer();
                    y ??= C.release;
                    s.push(...C.events);
                    continue;
                }
                if (this.streamEventFlushIntervalMs <= 0) {
                    let C = Buffer.byteLength(_(R));
                    if (C <= Y) {
                        s.push({
                            payload: R,
                            ephemeral: true
                        });
                    } else {
                        _e(R, C);
                    }
                    continue;
                }
                this.bufferEphemeral(R);
                if (R.event.type === "content_block_start" && this.parkedRows.length > 0) {
                    since ??= this.streamEventBufferedAt;
                    let C = this.takeStreamEventBuffer();
                    y ??= C.release;
                    s.push(...C.events);
                }
                continue;
            }
            let O = R.type === "control_request" ? this.toClientEvent(R) : undefined;
            if (R.type === "control_request" && O !== undefined && yn.has(Rt(O)) && this.servedCallRequestsJumpQueue()) {
                r.push(O);
                this.urgentRequestIds.add(R.request_id);
                let C = this.urgentRequestIds.values().next().value;
                if (this.urgentRequestIds.size > En && C !== undefined) {
                    this.urgentRequestIds.delete(C);
                }
                continue;
            }
            if (R.type === "control_cancel_request" && this.urgentRequestIds.delete(R.request_id)) {
                r.push(this.toClientEvent(R));
                continue;
            }
            if (R.type === "assistant" && this.streamedEphemeralSinceLastAssistant) {
                g("ccr_partial_messages", {
                    stream_events_dropped_unwatched: this.streamEventsDroppedUnwatched
                });
                this.streamedEphemeralSinceLastAssistant = false;
                this.streamEventsDroppedUnwatched = 0;
            }
            if (I === undefined && this.mayParkTextRow(R)) {
                this.parkedRows.push({
                    message: R,
                    event: this.toClientEvent(R)
                });
                continue;
            }
            if (this.streamEventTimer) {
                since ??= this.streamEventBufferedAt;
                let C = this.takeStreamEventBuffer();
                y ??= C.release;
                s.push(...C.events);
            }
            if (this.gatesToolCalls) {
                let C = Ue(R);
                if (C.some((D)=>this.awaitedToolCalls.has(D))) {
                    y ??= "tool_call";
                }
                k.push(...C);
            }
            if (this.twinsHeldRows(R.type)) {
                P.push(s.length);
            }
            s.push(O ?? this.toClientEvent(R));
        }
        if (!y && !S) {
            for(let w = P.length - 1; w >= 0; w--){
                let R = P[w] ?? s.length;
                let I = s[R];
                if (I && !I.historical && this.eventUploader.holdsOnArrival(I) && Buffer.byteLength(_(I.payload)) <= qn) {
                    s.splice(R, 0, {
                        payload: I.payload,
                        ephemeral: true
                    });
                }
            }
        }
        if (r.length > 0) {
            this.enqueueClientEvents(r, {
                urgent: true
            });
        }
        if (s.length > 0) {
            if (y) {
                this.internalEventUploader.release(y);
            } else if (S) {
                y = "sampling_end";
            }
            await this.enqueueClientEvents(s, {
                ...y ? {
                    release: y
                } : {
                    since
                },
                ...n?.together && {
                    together: true
                }
            });
            this.noteToolCallRows("client_events", k, "queued");
        } else if (r.length > 0 && y) {
            if (this.parkedRows.length > 0) {
                this.flushStreamEventBuffer();
            }
            this.internalEventUploader.release(y);
            this.releaseClientEvents(y);
        } else if (S) {
            this.releaseClientEvents("sampling_end");
        }
    }
    releaseFor(e) {
        if (e.type === "system" && "subtype" in e && e.subtype === "status" && "status" in e && e.status === "requesting") {
            this.uploadPaths?.prepare();
            if (!this.seesModelCallBoundaries) {
                this.seesModelCallBoundaries = true;
                this.applyUploadHold("reset");
            }
            if (this.holdRule === "served_policy") {
                return "round_trip";
            }
        }
        if (e.type === "user" && this.toolResultReleases(e.message)) {
            return "tool_result";
        }
        if (this.holdRule === undefined || this.mayWaitUnderHold(e)) {
            return;
        }
        return "event";
    }
    toolResultReleases(e) {
        let n = this.holdRule === "served_policy" ? this.flushPolicy?.flushAfterTools : undefined;
        if (n !== "write" && n !== "all") {
            return false;
        }
        return Pt(e, "tool_result", "tool_use_id").some((s)=>n === "all" || this.gatedWriteToolCalls.has(s));
    }
    gateToolCall(e) {
        let flushPolicy = this.flushPolicy;
        if (!flushPolicy || flushPolicy.flushAfterTools !== "write" && flushPolicy.flushBeforeToolsWaitMs <= 0 || e.agentId !== undefined || this.closed || this.eventHoldEnabled === undefined || this.holdSwitchedOff || !e.mayWrite()) {
            return;
        }
        if (flushPolicy.flushAfterTools === "write") {
            this.gatedWriteToolCalls.add(e.toolUseId);
            vt(this.gatedWriteToolCalls);
        }
        let s = this.transcriptLaneInUse ? [
            "client_events",
            "internal_events"
        ] : [
            "client_events"
        ];
        if (flushPolicy.flushBeforeToolsWaitMs <= 0 || this.lanesNotAnswering.size > 0 || e.signal.aborted || s.every((r)=>this.toolCallRows[r].get(e.toolUseId) === "stored")) {
            return;
        }
        return this.awaitToolCallStored(e, s, flushPolicy.flushBeforeToolsWaitMs);
    }
    async awaitToolCallStored(e, n, s) {
        let e_toolUseId = e.toolUseId;
        let h = Date.now();
        let y = zs(e.signal, {
            timeoutMs: s,
            refTimer: true
        });
        let S = zs(y.signal, {
            timeoutMs: this.toolCallRowGraceMs,
            refTimer: true
        });
        let k = false;
        let P = false;
        this.awaitedToolCalls.add(e_toolUseId);
        try {
            this.releaseClientEvents("tool_call");
            this.internalEventUploader.release("tool_call");
            await Promise.race([
                this.toolCallRowReaches("client_events", e_toolUseId, "queued"),
                ft(S.signal)
            ]);
            k = this.toolCallRows.client_events.has(e_toolUseId);
            P = S.signal.aborted && !y.signal.aborted;
            if (k && !this.closed) {
                await Promise.race([
                    Promise.all(n.map((I)=>this.toolCallRowReaches(I, e_toolUseId, "settled"))),
                    ft(y.signal)
                ]);
            }
        } finally{
            S.cleanup();
            y.cleanup();
            this.awaitedToolCalls.delete(e_toolUseId);
            for (let I of n){
                this.toolCallRowWaiters.delete(`${I} ${e_toolUseId}`);
            }
        }
        let outcome = n.every((I)=>this.toolCallRows[I].get(e_toolUseId) === "stored") ? "stored" : this.closed ? "closed" : e.signal.aborted ? "aborted" : n.some((I)=>this.toolCallRows[I].get(e_toolUseId) === "dropped") ? "dropped" : P && !k ? "row_never_queued" : "timeout";
        if (outcome === "timeout" || outcome === "dropped") {
            for (let I of n){
                if (this.toolCallRows[I].get(e_toolUseId) === "queued") {
                    this.lanesNotAnswering.add(I);
                }
            }
        }
        J(outcome === "stored" || outcome === "closed" || outcome === "aborted" ? "info" : "warn", "cli_ccr_tool_call_upload_wait", {
            outcome,
            waited_ms: Date.now() - h,
            limit_ms: s,
            live_view_row: this.toolCallRows.client_events.get(e_toolUseId) ?? "none",
            transcript_row: n.includes("internal_events") ? this.toolCallRows.internal_events.get(e_toolUseId) ?? "none" : "lane_unused"
        });
    }
    toolCallRowReaches(e, n, until) {
        let r = this.toolCallRows[e].get(n);
        if (r !== undefined && (r !== "queued" || until === "queued")) {
            return Promise.resolve();
        }
        return new Promise((reached)=>{
            let y = `${e} ${n}`;
            let S = {
                until,
                reached
            };
            let k = this.toolCallRowWaiters.get(y);
            if (k) {
                k.push(S);
            } else {
                this.toolCallRowWaiters.set(y, [
                    S
                ]);
            }
        });
    }
    noteToolCallRows(e, n, s) {
        let r = this.toolCallRows[e];
        for (let h of n){
            if (s === "queued" && r.has(h) || s === "dropped" && r.get(h) === "stored") {
                continue;
            }
            r.set(h, s);
            vt(r);
            let y = `${e} ${h}`;
            let S = (this.toolCallRowWaiters.get(y) ?? []).filter((k)=>{
                if (k.until === "queued" || s !== "queued") {
                    k.reached();
                    return false;
                }
                return true;
            });
            if (S.length > 0) {
                this.toolCallRowWaiters.set(y, S);
            } else {
                this.toolCallRowWaiters.delete(y);
            }
        }
    }
    noteToolCallRowsSettled(e, n, s) {
        if (!this.gatesToolCalls) {
            return;
        }
        if (n === "stored") {
            this.lanesNotAnswering.delete(e);
        }
        this.noteToolCallRows(e, s.flatMap((r)=>{
            if ("session_agent_id" in r && r.session_agent_id || "ephemeral" in r && r.ephemeral) {
                return [];
            }
            return Ue(r.payload);
        }), n);
    }
    mayParkTextRow(e) {
        if (e.type !== "assistant" || !this.streamEventTimer || this.lastReportedHasSubscribers === false || this.closed || this.twinsHeldRows(e.type) || this.uploadPaths?.streaming()) {
            return false;
        }
        let content = e.message.content;
        return Array.isArray(content) && content.length > 0 && content.every((s)=>s.type === "text");
    }
    twinsHeldRows(e) {
        return this.holdRule === "served_policy" && !this.viewerAbsentReported && this.flushPolicy?.liveTwinTypes.has(e) === true;
    }
    takeParkedRows() {
        let e = this.parkedRows.map(({ event })=>event);
        this.parkedRows = [];
        return e;
    }
    mayWaitUnderHold(e) {
        if (e.type === "keep_alive" && this.holdRule === "served_policy") {
            return this.seesModelCallBoundaries && !this.flushPolicy?.mustFlushTypes.has(e.type);
        }
        if (!c6r(e)) {
            return false;
        }
        if (this.holdRule === "no_subscriber_flag" && !Qn) {
            return true;
        }
        if (e.type === "user" && "isReplay" in e && e.isReplay) {
            return false;
        }
        let flushPolicy = this.flushPolicy;
        if (!flushPolicy) {
            return true;
        }
        if (e.type === "assistant" && flushPolicy.flushOnAssistant) {
            return false;
        }
        return !flushPolicy.mustFlushTypes.has(e.type);
    }
    toClientEvent(e) {
        let n = e;
        let s = n.historical === true;
        let r = gt(e);
        let tool_use_result = n.type === "user" && n.is_virtual !== true ? this.uploadedToolResult(n.tool_use_result, n.message) : n.tool_use_result;
        return {
            payload: {
                ...n,
                ...tool_use_result !== n.tool_use_result && {
                    tool_use_result
                },
                uuid: typeof n.uuid === "string" ? n.uuid : randomUUID()
            },
            ...s && {
                historical: true
            },
            ...r && {
                ephemeral: true
            }
        };
    }
    uploadedToolResult(e, n) {
        let s = this.currentUploadTrim();
        let r = yao(e, s);
        if (r !== e && !this.loggedToolResultBlank) {
            this.loggedToolResultBlank = true;
            g("ccr_tool_result_blank");
        }
        let h = ips(r, n, s);
        if (h !== r && !this.loggedMcpImageBlank) {
            this.loggedMcpImageBlank = true;
            g("ccr_mcp_image_blank");
        }
        return h;
    }
    setStreamEventFlushIntervalMs(e) {
        this.streamEventFlushIntervalMs = de("streamEventFlushIntervalMs", e, mSt);
        if (this.streamEventFlushIntervalMs <= 0 && this.streamEventTimer) {
            this.flushStreamEventBuffer();
        }
    }
    setStreamEventFirstFlushMs(e) {
        this.streamEventFirstFlushMs = de("streamEventFirstFlushMs", e, 0);
    }
    setStreamEventFlushOnFirstDelta(e) {
        this.streamEventFlushOnFirstDelta = e === true;
    }
    setNoSubscriberStreamEventFlushIntervalMs(e) {
        let n = de("noSubscriberStreamEventFlushIntervalMs", e, 0);
        if (n === this.noSubscriberStreamEventFlushIntervalMs) {
            return;
        }
        this.noSubscriberStreamEventFlushIntervalMs = n;
        this.setHasSubscribers(undefined, "reset");
    }
    setNoSubscriberUploadHoldMs(e) {
        let n = de("noSubscriberUploadHoldMs", e, 0);
        if (n === this.noSubscriberUploadHoldMs) {
            return;
        }
        this.noSubscriberUploadHoldMs = n;
        this.setHasSubscribers(undefined, "reset");
    }
    setDropUnwatchedStreamEvents(e) {
        let n = e === true;
        if (n === this.dropUnwatchedStreamEvents) {
            return;
        }
        this.setHasSubscribers(undefined, "reset");
        this.dropUnwatchedStreamEvents = n;
    }
    onSubscribersReported;
    setSubscribersReportedListener(e) {
        this.onSubscribersReported = e;
    }
    tellSubscribersReported(e) {
        if (typeof e !== "boolean" || this.onSubscribersReported === undefined) {
            return;
        }
        if (e || !this.senderMayNotBeAttachedYet()) {
            this.onSubscribersReported(e);
        }
    }
    senderMayNotBeAttachedYet() {
        return Date.now() - this.lastInboundEventAtMs < Jn;
    }
    noSubscriberHoldMs() {
        if (Xn && this.holdSwitchedOff) {
            return 0;
        }
        return this.noSubscriberUploadHoldMs;
    }
    unwatched() {
        return this.noSubscriberHoldMs() > 0 && this.lastReportedHasSubscribers === false;
    }
    mayHoldUploads() {
        return this.noSubscriberUploadHoldMs > 0 || this.servedPolicyHolds();
    }
    holdSwitchOn() {
        return this.eventHoldEnabled !== undefined && !this.holdSwitchedOff;
    }
    servedPolicyHolds() {
        return (this.flushPolicy?.maxEvents ?? 0) > 1 && this.holdSwitchOn();
    }
    decideHoldRule() {
        if (this.currentState !== "running" || this.shutdownReleased) {
            return;
        }
        if (this.servedPolicyHolds() && (this.seesModelCallBoundaries || this.lastReportedHasSubscribers === false)) {
            return "served_policy";
        }
        if (this.unwatched()) {
            return "no_subscriber_flag";
        }
    }
    applyUploadHold(e) {
        this.holdSwitchedOff = this.eventHoldEnabled !== undefined && this.eventHoldEnabled() !== true;
        if (this.holdSwitchedOff && !this.loggedHoldSwitchedOff) {
            this.loggedHoldSwitchedOff = true;
            J("warn", "cli_ccr_event_hold_switched_off");
        }
        let n = this.decideHoldRule();
        this.holdRule = n;
        this.eventUploader.setHold(n && this.laneHold(n, this.seesModelCallBoundaries ? es : ht), e);
        this.internalEventUploader.setHold(n && this.laneHold(n, ht), e);
    }
    laneHold(rule, passes) {
        let flushPolicy = this.flushPolicy;
        if (rule === "served_policy" && flushPolicy) {
            return {
                rule,
                maxAgeMs: Math.min(flushPolicy.maxAgeMs, this.seesModelCallBoundaries ? Ct : Hn),
                maxItems: flushPolicy.maxEvents,
                maxBytes: flushPolicy.maxBytes,
                passes
            };
        }
        return {
            rule: "no_subscriber_flag",
            maxAgeMs: this.noSubscriberHoldMs()
        };
    }
    takeUpFlushPolicy(e) {
        let n = e == null ? undefined : ss(e);
        if (e != null && !n && !this.loggedUnreadableFlushPolicy) {
            this.loggedUnreadableFlushPolicy = true;
            J("warn", "cli_ccr_flush_policy_unreadable");
        }
        let flushPolicy = this.flushPolicy;
        if (!is(flushPolicy, n)) {
            this.flushPolicy = n;
            J("info", n ? flushPolicy ? "cli_ccr_flush_policy_changed" : "cli_ccr_flush_policy_adopted" : "cli_ccr_flush_policy_cleared", {
                ...n && {
                    max_events: n.maxEvents,
                    max_age_ms: n.maxAgeMs,
                    max_bytes: n.maxBytes ?? 0,
                    flush_on_sampling_end: n.flushOnSamplingEnd,
                    flush_on_assistant: n.flushOnAssistant,
                    flush_before_tools_wait_ms: n.flushBeforeToolsWaitMs,
                    flush_after_tools: n.flushAfterTools,
                    must_flush_types: n.mustFlushTypes.size,
                    live_twin_types: n.liveTwinTypes.size,
                    policy_version: n.policyVersion ?? ""
                },
                hold_enabled: this.eventHoldEnabled !== undefined && this.eventHoldEnabled() === true
            });
        }
        this.applyUploadHold("reset");
    }
    logUploadHoldEnd(e, n, held_events, held_ms, h) {
        if (h === "no_subscriber_flag") {
            g("ccr_no_subscriber_hold", {
                lane: d(e),
                reason: d(n),
                held_events,
                held_ms
            });
            return;
        }
        J("info", "cli_ccr_event_hold_release", {
            lane: e,
            reason: n,
            held_events,
            held_ms
        });
    }
    uploadBody(e, n) {
        let s = {
            worker_epoch: this.workerEpoch,
            events: e
        };
        if (this.uploadHoldMarker()) {
            s.upload_hold = {
                held: n.held,
                flush_reason: n.reason,
                held_count: ae(n.heldCount),
                hold_age_ms: ae(n.holdAgeMs),
                inflight_retry_count: ae(n.retryCount),
                hold_rule: n.rule,
                post_index: ae(n.postIndex),
                ...this.flushPolicy?.policyVersion !== undefined && {
                    policy_version: this.flushPolicy.policyVersion
                }
            };
        }
        return s;
    }
    logUploadDrain(e, n) {
        if (!this.uploadHoldMarker()) {
            return;
        }
        g("ccr_upload_drain", {
            lane: d(e),
            trigger: d(n.trigger),
            rule: d(n.rule),
            held_events: n.heldEvents,
            held_ms: n.heldMs,
            posts: n.posts,
            rows: n.rows,
            max_rows_post: n.maxRowsPost,
            failed_posts: n.failedPosts,
            dropped_rows: n.droppedRows,
            other_posts: n.otherPosts,
            other_rows: n.otherRows,
            drain_ms: n.drainMs
        });
    }
    logUndeliveredAtClose(e, undelivered_events) {
        if (this.shutdownKeepsClientEvents) {
            t(`CCRClient: ${e} lane closed at shutdown, ${undelivered_events} undelivered`, {
                level: undelivered_events > 0 ? "warn" : "info"
            });
        }
        if (undelivered_events <= 0) {
            return;
        }
        if (this.noSubscriberHoldMs() > 0 && this.viewerAbsentReported) {
            f("ccr_no_subscriber_hold", this.closingForSuccessor ? "undelivered_at_rebuild" : "undelivered_at_close", {
                lane: d(e),
                undelivered_events
            });
        }
        if (this.servedPolicyHolds()) {
            J("warn", "cli_ccr_event_hold_undelivered_at_close", {
                lane: e,
                undelivered_events,
                for_successor: this.closingForSuccessor
            });
        }
    }
    bufferEphemeral(e) {
        let n = this.streamEventFirstFlushMs > 0 && e.type === "stream_event" ? e.event.type : undefined;
        let s = n === "content_block_start";
        if (s) {
            this.firstContentFlushPending = true;
        }
        if (this.dropUnwatchedStreamEvents && this.unwatchedPastGrace) {
            if (e.type === "stream_event") {
                this.streamEventsDroppedUnwatched++;
            }
            return;
        }
        this.streamEventBuffer.push(e);
        let r = this.firstContentFlushPending && n === "content_block_delta";
        if (r) {
            this.firstContentFlushPending = false;
        }
        let h = s || r;
        let y = this.uploadPaths?.fallbackWindowMs() ?? 0;
        if (r && y === 0 && this.streamEventFlushOnFirstDelta && this.firstDeltaFlushTimer === null && e.type === "stream_event" && e.event.type === "content_block_delta" && e.event.delta.type !== "input_json_delta" && !(this.lastReportedHasSubscribers === false && (this.noSubscriberStreamEventFlushIntervalMs > 0 || this.noSubscriberHoldMs() > 0))) {
            this.firstDeltaFlushTimer = setTimeout(()=>{
                this.firstDeltaFlushTimer = null;
                this.flushStreamEventBuffer(true);
            }, 0);
        }
        if (this.streamEventTimer && !h) {
            return;
        }
        let S = h ? Math.min(this.streamEventFirstFlushMs, this.streamEventFlushIntervalMs) : this.streamEventFlushIntervalMs;
        let k = this.lastReportedHasSubscribers === false ? Math.max(this.noSubscriberStreamEventFlushIntervalMs, this.noSubscriberHoldMs(), S) : Math.max(S, y);
        let P = Date.now();
        if (this.streamEventTimer) {
            if (P + k >= this.streamEventFlushDueAt) {
                return;
            }
            clearTimeout(this.streamEventTimer);
        } else {
            this.streamEventBufferedAt = P;
        }
        this.streamEventFlushDueAt = P + k;
        this.streamEventTimer = setTimeout(()=>void this.flushStreamEventBuffer(), k);
    }
    setHasSubscribers(e, n) {
        this.hasSubscribersReports++;
        let s = typeof e === "boolean" && (e || !this.senderMayNotBeAttachedYet()) ? e : undefined;
        let lastReportedHasSubscribers = this.lastReportedHasSubscribers;
        this.lastReportedHasSubscribers = s;
        if (s === true) {
            this.viewerReportedSinceLastFalse = true;
        } else if (s === false && this.viewerReportedSinceLastFalse) {
            this.viewerReportedSinceLastFalse = false;
            this.lastViewerLeftAtMs = Date.now();
        }
        let unwatchedPastGrace = this.unwatchedPastGrace;
        this.unwatchedPastGrace = s === false && Date.now() - this.lastViewerLeftAtMs >= Zn;
        if (this.dropUnwatchedStreamEvents && unwatchedPastGrace !== this.unwatchedPastGrace) {
            t(this.unwatchedPastGrace ? "CCRClient: no subscribers reported; dropping stream deltas until one is" : `CCRClient: resuming stream deltas (${s === true ? "watcher" : n})`);
        }
        if (lastReportedHasSubscribers === false && s !== false && this.streamEventTimer) {
            this.flushStreamEventBuffer();
        }
        let y = s === true ? "watcher" : n;
        if (s === false) {
            this.viewerAbsentReported = true;
        } else if (this.viewerAbsentReported && y === "watcher") {
            this.viewerAbsentReported = false;
            if (this.holdRule === "served_policy") {
                if (this.parkedRows.length > 0) {
                    this.flushStreamEventBuffer();
                }
                this.releaseClientEvents("watcher");
                this.internalEventUploader.release("watcher");
            }
        }
        this.applyUploadHold(y);
    }
    async flushStreamEventBuffer(e = false) {
        let { events, release } = this.takeStreamEventBuffer(e);
        if (events.length > 0) {
            if (release) {
                this.internalEventUploader.release(release);
            }
            await this.enqueueClientEvents(events, release ? {
                release
            } : {
                since: this.streamEventBufferedAt
            });
        }
    }
    enqueueClientEvents(e, n) {
        for (let s of this.trackedFrameUploads("enqueuedAtMs")){
            let r = e.find((S)=>S.payload.uuid === s.uuid);
            if (!r) {
                continue;
            }
            let h = this.eventUploader.inFlightBatch();
            let y;
            if (n.release === undefined && this.eventUploader.holdsOnArrival(r)) {
                y = "hold";
            } else if (h !== undefined) {
                y = h.some((S)=>!S.ephemeral) ? "durable_post" : "ephemeral_post";
            } else if (this.eventUploader.backlog().backingOff) {
                y = "retry_backoff";
            } else {
                y = "none";
            }
            s.timing.enqueuedAtMs = performance.now();
            s.timing.queuedBehind = y;
        }
        return (this.uploadPaths ?? this.eventUploader).enqueue(e, n);
    }
    releaseClientEvents(e) {
        (this.uploadPaths ?? this.eventUploader).release(e);
    }
    uploadStreamHeaders(e) {
        let n = this.uploadPaths?.breakCountHeader(e.some((r)=>r.payload.type !== "keep_alive"));
        let s = e.some(Z) && this.uploadPaths?.fallbackReason();
        return {
            ...n !== undefined && {
                [it]: n
            },
            ...s && {
                "x-ccr-upload-fallback": s
            }
        };
    }
    noteBreakCountStated(e) {
        let n = e[it];
        if (n !== undefined) {
            this.uploadPaths?.breakCountStated(n);
        }
    }
    stampTrackedFrames(e, n) {
        for (let { uuid, timing } of this.trackedFrameUploads("ackedAtMs")){
            if (timing[n] === undefined && e.some((h)=>h.payload.uuid === uuid)) {
                timing[n] = performance.now();
                if (n === "postedAtMs") {
                    timing.postedWallMs = Date.now();
                }
            }
        }
    }
    actsOnSubscribersReports() {
        return this.noSubscriberStreamEventFlushIntervalMs > 0 || this.noSubscriberUploadHoldMs > 0 || this.dropUnwatchedStreamEvents || this.servedPolicyHolds();
    }
    mergeWaitingLiveEvents(e) {
        let n = [];
        let s = [];
        for (let r of [
            ...e,
            undefined
        ]){
            if (r && as(r.payload)) {
                s.push(r.payload);
                continue;
            }
            for (let h of this.trackedFrameUploads("ackedAtMs")){
                h.uuid = pe(s, h.uuid);
            }
            for (let h of he(s)){
                n.push({
                    payload: h,
                    ephemeral: true
                });
            }
            s = [];
            if (r) {
                n.push(r);
            }
        }
        return n;
    }
    takeStreamEventBuffer(e = false) {
        if (!e) {
            if (this.streamEventTimer) {
                clearTimeout(this.streamEventTimer);
                this.streamEventTimer = null;
            }
            if (this.firstDeltaFlushTimer) {
                clearTimeout(this.firstDeltaFlushTimer);
                this.firstDeltaFlushTimer = null;
            }
        }
        let n;
        let s = e ? [] : this.parkedRows;
        for (let { message } of s){
            n ??= this.releaseFor(message);
        }
        if (this.streamEventBuffer.length === 0) {
            return {
                events: e ? [] : this.takeParkedRows(),
                release: n
            };
        }
        let r = [];
        let h;
        let estimated_tokens_delta = 0;
        for (let w of this.streamEventBuffer){
            if (w.type === "stream_event") {
                r.push(w);
                continue;
            }
            estimated_tokens_delta = (h !== undefined && w.estimated_tokens - w.estimated_tokens_delta === h.estimated_tokens ? estimated_tokens_delta : 0) + w.estimated_tokens_delta;
            h = w;
        }
        this.streamEventBuffer = [];
        for (let w of this.trackedFrameUploads("enqueuedAtMs")){
            w.uuid = pe(r, w.uuid);
        }
        let P = he(r).filter((w)=>{
            let R = Buffer.byteLength(_(w));
            if (R <= Y) {
                return true;
            }
            _e(w, R);
            return false;
        }).map((w)=>({
                payload: w,
                ephemeral: true
            }));
        if (h) {
            P.push(this.toClientEvent({
                ...h,
                estimated_tokens_delta
            }));
        }
        if (!e) {
            P.push(...this.takeParkedRows());
        }
        return {
            events: P,
            release: n
        };
    }
    currentUploadTrim() {
        let e = this.uploadTrim();
        if (L(e)) {
            return e;
        }
        return rt;
    }
    async writeInternalEvent(e, n, { isCompaction = false, agentId, preservedEventIds } = {}) {
        let preserved_event_ids = preservedEventIds;
        let S = je(n);
        if (preserved_event_ids && preserved_event_ids.length > fSt) {
            i("tengu_ccr_preserved_event_ids_clamped", {
                originalCount: preserved_event_ids.length,
                cap: fSt,
                payloadClamped: S !== null
            });
            preserved_event_ids = preserved_event_ids.slice(-fSt);
        }
        let k = S ?? n;
        if (this.currentUploadTrim().envelope === true) {
            let D = aps(k);
            if (D !== k && !this.loggedTranscriptEnvelopeStrip) {
                this.loggedTranscriptEnvelopeStrip = true;
                g("ccr_worker_envelope_strip");
            }
            k = D;
        }
        if (e === "transcript" && k.type === "user" && k.isVirtual !== true) {
            let toolUseResult = this.uploadedToolResult(k.toolUseResult, k.message);
            if (toolUseResult !== k.toolUseResult) {
                k = {
                    ...k,
                    toolUseResult
                };
            }
        }
        let P = {
            payload: {
                type: e,
                ...k,
                uuid: typeof k.uuid === "string" ? k.uuid : randomUUID()
            },
            ...isCompaction && {
                is_compaction: true
            },
            ...agentId && {
                session_agent_id: agentId
            },
            ...preserved_event_ids?.length && {
                preserved_event_ids
            }
        };
        let w = [
            P
        ];
        let R = agentId || "";
        let I = this.rowsAwaitingCompactSummary.get(R);
        if (e === "transcript" && (I !== undefined || isCompaction && this.rowsAwaitingCompactSummaryAtClose === undefined)) {
            if (I === undefined) {
                I = {
                    rows: [],
                    timer: this.startCompactSummaryWaitTimer(R)
                };
                this.rowsAwaitingCompactSummary.set(R, I);
            }
            I.rows.push(P);
            let D = k.isCompactSummary === true ? "summary" : k.type === "user" || k.type === "assistant" ? "user_or_assistant_row" : I.rows.length >= Kn ? "row_cap" : undefined;
            if (D === undefined) {
                return;
            }
            w = this.takeRowsAwaitingCompactSummary(R, D);
        }
        let O = e === "transcript" && k.type === "user" && this.toolResultReleases(k.message);
        let C = this.gatesToolCalls && e === "transcript" && !agentId ? Ue(k) : [];
        await this.queueInternalEvents(w, O ? "tool_result" : C.some((D)=>this.awaitedToolCalls.has(D)) ? "tool_call" : !this.transcriptRowMayWait(e, k) ? "event" : undefined);
        if (e === "transcript") {
            this.transcriptLaneInUse = true;
        }
        this.noteToolCallRows("internal_events", C, "queued");
    }
    async queueInternalEvents(e, n) {
        let s = e[0]?.is_compaction === true && this.holdRule !== undefined;
        if (s) {
            this.releaseClientEvents("event");
        }
        let h = (e[0]?.is_compaction === true && e[0].session_agent_id === undefined ? this.rowsRepeatedAfterCompaction?.() ?? [] : []).map(({ eventType, payload })=>({
                payload: {
                    type: eventType,
                    ...payload,
                    uuid: randomUUID()
                }
            }));
        let y = [
            ...e,
            ...h
        ];
        this.markInternalEventPostWatch((S)=>S.noteQueued(y));
        await this.internalEventUploader.enqueue(y, {
            together: true,
            release: s ? "event" : n
        });
    }
    startCompactSummaryWaitTimer(e) {
        let n = setTimeout((s, r)=>{
            let h = s.rowsAwaitingCompactSummary.get(r);
            if (s.closed || h === undefined) {
                return;
            }
            if (!s.internalEventUploader.hasRoomFor(1)) {
                h.timer = s.startCompactSummaryWaitTimer(r);
                return;
            }
            s.queueInternalEvents(s.takeRowsAwaitingCompactSummary(r, "timeout"), undefined).catch(c);
        }, Yn, this, e);
        n.unref?.();
        return n;
    }
    takeRowsAwaitingCompactSummary(e, n) {
        let s = this.rowsAwaitingCompactSummary.get(e);
        this.rowsAwaitingCompactSummary.delete(e);
        clearTimeout(s?.timer);
        let r = s?.rows ?? [];
        if (n !== "summary" && n !== "close") {
            J("info", "cli_worker_compaction_marker_uploaded_without_summary", {
                reason: n,
                count: r.length,
                subagent: e !== ""
            });
        }
        return r;
    }
    transcriptRowMayWait(e, n) {
        let flushPolicy = this.flushPolicy;
        if (this.holdRule !== "served_policy" || !flushPolicy) {
            return true;
        }
        let r = e === "transcript" ? n.type : e;
        if (typeof r !== "string" || flushPolicy.mustFlushTypes.has(r)) {
            return false;
        }
        if (r === "user") {
            return n.toolUseResult !== undefined || rs(n.message) || n.isMeta === true || n.isVirtual === true || n.isCompactSummary === true;
        }
        return !(r === "assistant" && flushPolicy.flushOnAssistant);
    }
    flushInternalEvents(e) {
        return this.internalEventUploader.flush(e);
    }
    watchInternalEventPosts() {
        let e = new me(this.internalEventUploader.backlog().unsent);
        this.internalEventPostWatch = e;
        return (n)=>{
            if (this.internalEventPostWatch === e) {
                this.internalEventPostWatch = undefined;
            }
            return e.seen(n);
        };
    }
    markInternalEventPostWatch(e) {
        let internalEventPostWatch = this.internalEventPostWatch;
        if (internalEventPostWatch === undefined) {
            return;
        }
        try {
            e(internalEventPostWatch);
        } catch (error) {
            this.internalEventPostWatch = undefined;
            c(error);
        }
    }
    uploadBacklog() {
        let e = this.eventUploader.backlog();
        let n = this.internalEventUploader.backlog();
        let s = [
            e.inFlightMs,
            n.inFlightMs
        ].filter((r)=>r !== undefined);
        return {
            unsentClientEvents: e.unsent + (this.uploadPaths?.waitingCount ?? 0),
            unsentInternalEvents: n.unsent + this.countRowsAwaitingCompactSummary(),
            oldestInFlightMs: s.length ? Math.max(...s) : undefined,
            backingOff: e.backingOff || n.backingOff
        };
    }
    async postInternalEventsBatch(e, n = {}) {
        let s = this.refuseInternalEventsCall(true);
        if (s) {
            return s;
        }
        let epochMismatchCount = this.epochMismatchCount;
        try {
            let h = await this.request("post", "/worker/internal-events", {
                worker_epoch: this.workerEpoch,
                events: e
            }, "internal events batch", {
                parseBody: true,
                countTowardEscalation: false,
                signal: n.signal
            });
            if (h.ok) {
                let y = Fn().safeParse(h.data);
                return {
                    ok: true,
                    results: y.success ? y.data.results : undefined
                };
            }
            return this.internalEventsFailure(h, epochMismatchCount);
        } catch (error) {
            return this.internalEventsFailure({
                reason: `fetch_failed:${ie(error)}`
            }, epochMismatchCount);
        }
    }
    async getInternalEventsPage(e, n = {}) {
        let s = this.refuseInternalEventsCall(false);
        if (s) {
            return s;
        }
        let r = new URL(`${this.sessionBaseUrl}/worker/internal-events`);
        if (e.limit !== undefined) {
            r.searchParams.set("limit", String(e.limit));
        }
        if (e.agentId) {
            r.searchParams.set("session_agent_id", e.agentId);
        }
        if (e.subagents) {
            r.searchParams.set("subagents", "true");
        }
        if (e.cursor) {
            r.searchParams.set("cursor", e.cursor);
        } else if (e.afterEventId) {
            r.searchParams.set("after_event_id", e.afterEventId);
        }
        let epochMismatchCount = this.epochMismatchCount;
        let y;
        try {
            let S = this.getAuthHeaders();
            if (Object.keys(S).length === 0) {
                return {
                    ok: false,
                    reason: "no_auth_headers"
                };
            }
            y = n.signal ? zs(n.signal, {
                timeoutMs: 30000,
                refTimer: true
            }) : undefined;
            let k = await fetch(r, {
                headers: {
                    ...S,
                    "anthropic-version": "2023-06-01",
                    "anthropic-client-platform": zy(),
                    "User-Agent": Ko()
                },
                signal: y?.signal ?? AbortSignal.timeout(30000),
                ...na({
                    url: r.toString()
                })
            });
            if (k.ok) {
                let O;
                try {
                    O = await k.json();
                } catch (error) {
                    if (!(error instanceof SyntaxError)) {
                        throw error;
                    }
                }
                let C = In().safeParse(O);
                if (!C.success) {
                    J("warn", "cli_worker_internal_events_page_foreign");
                    return {
                        ok: false,
                        status: k.status,
                        reason: "foreign_body"
                    };
                }
                let D = Number(k.headers.get("content-length") ?? Number.NaN);
                return {
                    ok: true,
                    data: C.data.data.map(mt),
                    ...C.data.next_cursor && {
                        nextCursor: C.data.next_cursor
                    },
                    bytes: Number.isFinite(D) ? D : null
                };
            }
            let errorType;
            let resourceType;
            let retryAfterMs;
            let closedConflict;
            if (k.status === 409) {
                let O = await Ie(k);
                if (this.closed) {
                    closedConflict = O ?? this.lastEpochMismatchCause ?? "epoch_conflict";
                } else {
                    try {
                        this.handleEpochMismatch(O);
                    } catch (error) {
                        t(`CCRClient: onEpochMismatch threw during a page read: ${l(error)}`);
                    }
                }
            } else if (k.status === 404) {
                try {
                    let O = await k.json();
                    if (typeof O?.error?.type === "string") {
                        errorType = O.error.type;
                    }
                    if (typeof O?.error?.resource_type === "string") {
                        resourceType = O.error.resource_type;
                    }
                } catch  {}
            } else {
                if (k.status === 429) {
                    let O = parseInt(k.headers.get("retry-after") ?? "", 10);
                    if (!isNaN(O) && O >= 0) {
                        retryAfterMs = O * 1000;
                    }
                }
                k.body?.cancel();
            }
            t(`CCRClient: internal events page returned ${k.status}`, {
                level: "warn"
            });
            J("warn", "cli_worker_request_failed", {
                method: "get",
                path: "/worker/internal-events",
                status: k.status
            });
            return this.internalEventsFailure({
                status: k.status,
                retryAfterMs,
                reason: `http_${k.status}`
            }, epochMismatchCount, {
                errorType,
                resourceType,
                closedConflict
            });
        } catch (error) {
            t(`CCRClient: internal events page failed: ${l(error)}`, {
                level: "warn"
            });
            return this.internalEventsFailure({
                reason: `fetch_failed:${ie(error)}`
            }, epochMismatchCount);
        } finally{
            y?.cleanup();
        }
    }
    refuseInternalEventsCall(e) {
        if (this.closed) {
            return {
                ok: false,
                reason: "client_closed",
                ...this.lastEpochMismatchCause && {
                    conflict: this.lastEpochMismatchCause
                }
            };
        }
        if (e && this.workerEpoch <= 0) {
            return {
                ok: false,
                reason: "not_initialized"
            };
        }
    }
    internalEventsFailure(e, n, { errorType, resourceType, closedConflict } = {}) {
        let conflict = closedConflict ?? (this.epochMismatchCount > n ? this.lastEpochMismatchCause : e.status === 409 ? this.lastEpochMismatchCause ?? "epoch_conflict" : undefined);
        let S = e.status ?? (conflict && wn[conflict] ? 409 : undefined);
        return {
            ok: false,
            reason: S === 409 ? "http_409" : e.reason ?? "unknown",
            ...S !== undefined && {
                status: S
            },
            ...e.retryAfterMs !== undefined && {
                retryAfterMs: e.retryAfterMs
            },
            ...conflict && {
                conflict
            },
            ...errorType && {
                errorType
            },
            ...resourceType && {
                resourceType
            }
        };
    }
    droppedInternalEventBatches = 0;
    get droppedInternalBatches() {
        return this.droppedInternalEventBatches;
    }
    droppedDeliveryAckBatches = 0;
    deliveryAcksWaitingForRoom = new Set;
    async flushDeliveryAcksConfirmed() {
        let droppedDeliveryAckBatches = this.droppedDeliveryAckBatches;
        await Promise.all(this.deliveryAcksWaitingForRoom);
        await this.deliveryUploader.flush();
        return this.droppedDeliveryAckBatches === droppedDeliveryAckBatches && !this.closed;
    }
    flushDeliveryAcks(e) {
        return this.deliveryUploader.flush(e);
    }
    async flush(e) {
        await this.flushStreamEventBuffer();
        await this.uploadPaths?.settled();
        return this.eventUploader.flush(e);
    }
    withdrawQueuedControlRequest(e) {
        let n = (s)=>!s.ephemeral && s.payload.type === "control_request" && s.payload.request_id === e;
        return (this.uploadPaths?.withdraw(n) ?? 0) + this.eventUploader.withdraw(n);
    }
    droppedDurableEventBatches = 0;
    get droppedDurableBatches() {
        return this.droppedDurableEventBatches;
    }
    takeUndeliveredClientEvents() {
        return this.eventUploader.takeUndelivered().filter((e)=>!e.ephemeral);
    }
    discardUndeliveredClientEvents() {
        let e = this.eventUploader.peekUndelivered().filter((n)=>!n.ephemeral);
        this.eventUploader.discardUndelivered();
        return e;
    }
    adoptClientEvents(e) {
        if (e.length === 0) {
            return;
        }
        this.eventUploader.enqueue(e);
    }
    async flushWorkerState() {
        return this.workerState.flush();
    }
    droppedWorkerStatePatchCount = 0;
    get droppedWorkerStatePatches() {
        return this.droppedWorkerStatePatchCount;
    }
    async readInternalEvents(e, n, s) {
        return jU.readInternalEventsFrom(this.readSource, e, n, s);
    }
    async readInternalEventsForCatchUp(e) {
        return jU.paginatedGet(this.readSource, "/worker/internal-events", {
            limit: "1000"
        }, "internal_events", {
            maxAttempts,
            signal: e
        });
    }
    static readInternalEventsFrom(e, after_event_id, s, readBody) {
        return jU.paginatedGet(e, "/worker/internal-events", {
            limit: "1000",
            ...after_event_id && {
                after_event_id
            }
        }, "internal_events", {
            signal: s,
            readBody
        });
    }
    async readSubagentInternalEvents() {
        return jU.readSubagentInternalEventsFrom(this.readSource);
    }
    static readSubagentInternalEventsFrom(e) {
        return jU.paginatedGet(e, "/worker/internal-events", {
            subagents: "true",
            limit: "1000"
        }, "subagent_events");
    }
    async readAgentInternalEvents(session_agent_id, n, s) {
        return jU.paginatedGet(this.readSource, "/worker/internal-events", {
            session_agent_id,
            limit: "1000"
        }, "agent_events", {
            maxAttempts,
            signal: n
        }, s);
    }
    static async paginatedGet(e, n, s, context, h = {}, y) {
        let S = e.getAuthHeaders();
        if (Object.keys(S).length === 0) {
            return null;
        }
        let k = [];
        let P;
        let pageCount = 0;
        let R = 0;
        let I = 0;
        let bytesReceived = 0;
        let C = null;
        do {
            let D = new URL(`${e.sessionBaseUrl}${n}`);
            for (let [U, x] of Object.entries(s)){
                D.searchParams.set(U, x);
            }
            if (P) {
                D.searchParams.set("cursor", P);
                D.searchParams.delete("after_event_id");
            }
            let q = !P && s.after_event_id !== undefined;
            let anchorFallback;
            let N = await jU.getWithRetry(e, D.toString(), S, context, (U)=>{
                pageCount++;
                C ??= U.headers.get("content-encoding");
                let x = U.headers.get("content-length");
                if (x !== null && bytesReceived !== null) {
                    bytesReceived += Number(x);
                } else {
                    bytesReceived = null;
                }
            }, (U, x)=>{
                if (!q) {
                    return;
                }
                if (U === 400) {
                    anchorFallback = "rejected";
                } else if (x === "after_event_id_not_found") {
                    anchorFallback = "not-found";
                }
            }, y === undefined ? h : {
                ...h,
                unencoded: true,
                readBody: async (U)=>{
                    let x = U.headers.get("content-encoding");
                    if (x !== null && x !== "identity") {
                        await U.body?.cancel();
                        return {
                            encodedBody: true
                        };
                    }
                    let H = await Mn(U, y.maxBytes - I);
                    if (H === null) {
                        return {
                            pastMaxBytes: true
                        };
                    }
                    let A = X(H.text);
                    if (!L(A) || !Array.isArray(A.data) || !A.data.every(L)) {
                        throw Error("CCRClient: a page is no list of events");
                    }
                    I += H.bytes;
                    return A;
                }
            });
            if (N?.encodedBody) {
                return {
                    events: [],
                    stats: {
                        pageCount,
                        bytesReceived,
                        contentEncoding: C ?? "none"
                    },
                    encodedBody: true
                };
            }
            if (!N) {
                if (anchorFallback) {
                    t(`CCRClient: after_event_id ${anchorFallback === "rejected" ? "rejected by server (gate off)" : "not found (stale anchor)"} \u2014 refetching without anchor`, {
                        level: "warn"
                    });
                    J("warn", anchorFallback === "rejected" ? "cli_worker_after_event_id_rejected" : "cli_worker_after_event_id_not_found", {
                        context
                    });
                    let { after_event_id, ...rest } = s;
                    let H = await jU.paginatedGet(e, n, rest, context, h, y);
                    if (!H) {
                        return null;
                    }
                    return {
                        ...H,
                        anchorFallback
                    };
                }
                return null;
            }
            for (let U of N.data ?? []){
                if (!dps(U.payload)) {
                    k.push(mt(U));
                }
            }
            R += Math.max(1, N.data?.length ?? 0);
            if (y !== undefined && (R > y.maxEvents || N.pastMaxBytes === true || (N.data ?? []).some((U)=>!An(U, y.maxTimestampChars)))) {
                return {
                    events: [],
                    stats: {
                        pageCount,
                        bytesReceived,
                        contentEncoding: C ?? "none"
                    },
                    overBound: true
                };
            }
            P = N.next_cursor;
        }while (P)
        t(`CCRClient: Read ${k.length} internal events from ${n}${s.subagents ? " (subagents)" : ""}`);
        return {
            events: k,
            stats: {
                pageCount,
                bytesReceived,
                contentEncoding: C ?? "none"
            }
        };
    }
    static async getWithRetry(e, n, s, context, h, y, { maxAttempts = Rn, signal, readBody, unencoded } = {}) {
        for(let R = 1; R <= maxAttempts; R++){
            if (signal?.aborted) {
                return null;
            }
            let I;
            try {
                I = await ugr(n, {
                    headers: {
                        ...s,
                        "anthropic-version": "2023-06-01",
                        "anthropic-client-platform": zy(),
                        "User-Agent": Ko(),
                        ...unencoded && {
                            "Accept-Encoding": "identity"
                        }
                    },
                    ...unencoded && {
                        decompress: false
                    },
                    signal: signal ? AbortSignal.any([
                        AbortSignal.timeout(30000),
                        signal
                    ]) : AbortSignal.timeout(30000),
                    ...na({
                        url: n
                    })
                }, e.ownConnectionPool);
                if (I.ok) {
                    let C = readBody ? await readBody(I) : await I.json();
                    h?.(I);
                    return C;
                }
            } catch (error) {
                if (signal?.aborted) {
                    return null;
                }
                t(`CCRClient: GET ${n} failed (attempt ${R}/${maxAttempts}): ${l(error)}`, {
                    level: "warn"
                });
                if (R < maxAttempts) {
                    let D = Math.min(500 * 2 ** (R - 1), 30000) + Math.random() * 500;
                    await Q(D, signal);
                }
                continue;
            }
            let O;
            if (I.status === 404 && y) {
                try {
                    let C = await I.json();
                    if (typeof C?.error?.type === "string") {
                        O = C.error.type;
                    }
                } catch  {}
            } else if (I.status === 409) {
                if (e.isClosed?.()) {
                    await Wj(I);
                    return null;
                }
                let C = await Ie(I);
                if (!e.isClosed?.()) {
                    e.onConflict?.(C);
                }
                return null;
            } else {
                await Wj(I);
            }
            if (V(I.status) || O === "after_event_id_not_found") {
                t(`CCRClient: GET ${n} returned ${I.status} \u2014 permanent, not retrying`, {
                    level: "warn"
                });
                y?.(I.status, O);
                return null;
            }
            t(`CCRClient: GET ${n} returned ${I.status} (attempt ${R}/${maxAttempts})`, {
                level: "warn"
            });
            if (R < maxAttempts) {
                let C = Math.min(500 * 2 ** (R - 1), 30000) + Math.random() * 500;
                await Q(C, signal);
            }
        }
        t("CCRClient: GET retries exhausted", {
            level: "error"
        });
        J("error", "cli_worker_get_retries_exhausted", {
            context
        });
        return null;
    }
    reportDelivery(eventId, n) {
        if (n === "received") {
            this.lastInboundEventAtMs = Date.now();
            this.setHasSubscribers(undefined, "watcher");
        }
        if (n === "processing") {
            if (this.closed) {
                return;
            }
            if (this.pendingProcessingAcks.push(eventId) === 1) {
                queueMicrotask(()=>{
                    let pendingProcessingAcks = this.pendingProcessingAcks;
                    this.pendingProcessingAcks = [];
                    if (this.closed || pendingProcessingAcks.length === 0) {
                        return;
                    }
                    this.request("post", "/worker/events/delivery", {
                        worker_epoch: this.workerEpoch,
                        updates: pendingProcessingAcks.map((event_id)=>({
                                event_id,
                                status: "processing"
                            }))
                    }, "processing ack");
                });
            }
            return;
        }
        let s = !this.deliveryUploader.hasRoomFor(1);
        let r = this.deliveryUploader.enqueue({
            eventId,
            status: n
        });
        if (s) {
            this.deliveryAcksWaitingForRoom.add(r);
            r.finally(()=>this.deliveryAcksWaitingForRoom.delete(r));
        }
    }
    getWorkerEpoch() {
        return this.workerEpoch;
    }
    get internalEventsPending() {
        return this.internalEventUploader.pendingCount + this.countRowsAwaitingCompactSummary() + (this.rowsAwaitingCompactSummaryAtClose ?? 0);
    }
    countRowsAwaitingCompactSummary() {
        let e = 0;
        for (let n of this.rowsAwaitingCompactSummary.values()){
            e += n.rows.length;
        }
        return e;
    }
    get awaitsCompactSummary() {
        return this.rowsAwaitingCompactSummary.has("");
    }
    hasInternalEventRoom(e) {
        return !this.awaitsCompactSummary && this.internalEventUploader.hasRoomFor(e);
    }
    close(e) {
        this.closeExceptInternalEvents(e);
        let n = this.countRowsAwaitingCompactSummary();
        for (let s of this.rowsAwaitingCompactSummary.keys()){
            this.takeRowsAwaitingCompactSummary(s, "close");
        }
        this.rowsAwaitingCompactSummaryAtClose ??= n;
        this.logUndeliveredAtClose("internal_events", this.internalEventUploader.close() + n);
    }
    flushGoodbye() {
        return this.goodbyeFlushed;
    }
    closeExceptInternalEvents(e) {
        let closed = this.closed;
        this.closed = true;
        this.closeAbort.abort();
        this.closingForSuccessor = e?.retainUndeliveredClientEvents === true;
        this.uploadPaths?.close();
        let s = this.takeParkedRows();
        if (s.length > 0) {
            this.eventUploader.enqueue(s);
        }
        if (!closed && e?.goodbye !== false) {
            this.sendGoodbye();
        }
        this.stopHeartbeat();
        this.clearProbeBeatTimer();
        this.unsubscribeIdleTracker?.();
        qbs();
        this.stopToolCallGate?.();
        for (let r of this.toolCallRowWaiters.values()){
            for (let h of r){
                h.reached();
            }
        }
        this.toolCallRowWaiters.clear();
        if (this.streamEventTimer) {
            clearTimeout(this.streamEventTimer);
            this.streamEventTimer = null;
        }
        if (this.firstDeltaFlushTimer) {
            clearTimeout(this.firstDeltaFlushTimer);
            this.firstDeltaFlushTimer = null;
        }
        this.streamEventBuffer = [];
        this.pendingProcessingAcks = [];
        this.workerState.close();
        if (e?.keepClientEvents !== true) {
            this.logUndeliveredAtClose("client_events", this.eventUploader.close({
                retainUndelivered: e?.retainUndeliveredClientEvents === true
            }));
        }
        this.deliveryUploader.close();
    }
    registerShutdownCleanup(e = {
        registerCleanup,
        registerPreExitFlush
    }, n = pt) {
        e.registerCleanup(()=>this.beginShutdown());
        e.registerPreExitFlush(()=>this.finishShutdown(n));
    }
    beginShutdown() {
        try {
            let e = !this.closed && this.currentState === "running" && this.holdSwitchOn();
            this.shutdownKeepsClientEvents = e || !this.closed && this.servedPolicyHolds();
            if (this.shutdownKeepsClientEvents) {
                this.shutdownReleased = true;
                this.applyUploadHold("shutdown");
            }
        } finally{
            this.closeExceptInternalEvents({
                keepClientEvents: this.shutdownKeepsClientEvents
            });
        }
    }
    async finishShutdown(e = pt) {
        await this.flushGoodbye();
        try {
            await Ge(Promise.allSettled([
                this.flushInternalEvents(),
                this.shutdownKeepsClientEvents ? this.flush() : undefined
            ]), e);
        } finally{
            this.close();
            this.onInternalEventLaneClosed?.();
            await rPe().catch(()=>{});
        }
    }
}
const pt = 3000;
function ts(e) {
    let e_post_turn_summary = e.post_turn_summary;
    if (!ns(e_post_turn_summary) || e_post_turn_summary.status_category !== "blocked") {
        return e;
    }
    return {
        ...e,
        post_turn_summary: {
            ...e_post_turn_summary,
            status_category: "need_input"
        }
    };
}
function ns(e) {
    return e !== null && typeof e === "object" && "status_category" in e && typeof e.status_category === "string";
}
async function Ie(e) {
    let n = Fe(e.headers.get("x-ccr-conflict-reason"));
    if (n !== undefined) {
        await Wj(e);
        return n;
    }
    try {
        let s = await e.json();
        return Fe(s?.error?.reason ?? s?.reason) ?? Fe(s?.error?.type);
    } catch  {}
}
function Fe(e) {
    switch(e){
        case "superseded_by_worker":
        case "epoch_stale":
        case "session_not_active":
            return e;
        default:
            return;
    }
}
function ss(e) {
    let n = Bn().safeParse(e);
    if (!n.success) {
        return;
    }
    let n_data = n.data;
    let maxAgeMs = le(n_data.max_age_ms, Ct);
    let h = le(n_data.max_bytes, Ln);
    let y = n_data.policy_version ?? undefined;
    return {
        maxEvents: maxAgeMs > 0 ? le(n_data.max_events, Dn) : 0,
        maxAgeMs,
        maxBytes: h > 0 ? h : undefined,
        flushOnSamplingEnd: n_data.flush_on_sampling_end === true,
        flushOnAssistant: n_data.flush_on_assistant === true,
        flushBeforeToolsWaitMs: le(n_data.flush_before_tools_wait_ms, jn),
        flushAfterTools: zn.find((S)=>S === n_data.flush_after_tools) ?? "none",
        mustFlushTypes: new Set((n_data.must_flush_types ?? []).slice(0, Nn)),
        liveTwinTypes: new Set((n_data.live_twin_types ?? []).slice(0, Wn)),
        policyVersion: y !== undefined && $n.test(y) ? y : undefined
    };
}
function mt(e) {
    let n = Y8t(e.payload);
    if (n === e.payload) {
        return e;
    }
    return {
        ...e,
        payload: n
    };
}
function rs(message) {
    let n = L(message) ? message.content : undefined;
    return Array.isArray(n) && n.some((s)=>L(s) && s.type === "tool_result");
}
function Ue(e) {
    if (L(e) && e.type === "assistant" && e.parent_tool_use_id == null) {
        return Pt(e.message, "tool_use", "id");
    }
    return [];
}
function Pt(e, n, s) {
    let r = L(e) ? e.content : undefined;
    if (!Array.isArray(r)) {
        return [];
    }
    let h = [];
    for (let y of r){
        if (L(y) && y.type === n) {
            let S = y[s];
            if (typeof S === "string") {
                h.push(S);
            }
        }
    }
    return h;
}
function ft(signal) {
    return new Promise((resolve)=>{
        if (signal.aborted) {
            resolve();
        } else {
            signal.addEventListener("abort", ()=>resolve(), {
                once: true
            });
        }
    });
}
function vt(e) {
    if (e.size > Vn) {
        let n = e.keys().next().value;
        if (n !== undefined) {
            e.delete(n);
        }
    }
}
function le(e, n) {
    if (typeof e === "number" && Number.isFinite(e)) {
        return Math.min(Math.max(0, Math.trunc(e)), n);
    }
    return 0;
}
function is(flushPolicy, n) {
    if (!flushPolicy || !n) {
        return flushPolicy === n;
    }
    return flushPolicy.maxEvents === n.maxEvents && flushPolicy.maxAgeMs === n.maxAgeMs && flushPolicy.maxBytes === n.maxBytes && flushPolicy.flushOnSamplingEnd === n.flushOnSamplingEnd && flushPolicy.flushOnAssistant === n.flushOnAssistant && flushPolicy.flushBeforeToolsWaitMs === n.flushBeforeToolsWaitMs && flushPolicy.flushAfterTools === n.flushAfterTools && flushPolicy.policyVersion === n.policyVersion && flushPolicy.mustFlushTypes.size === n.mustFlushTypes.size && [
        ...flushPolicy.mustFlushTypes
    ].every((s)=>n.mustFlushTypes.has(s)) && flushPolicy.liveTwinTypes.size === n.liveTwinTypes.size && [
        ...flushPolicy.liveTwinTypes
    ].every((s)=>n.liveTwinTypes.has(s));
}
function de(e, n, s) {
    let r = typeof n === "string" ? Number(n) : n;
    if (typeof r === "number" && Number.isFinite(r)) {
        return Math.min(Math.max(r, 0), 60000);
    }
    if (n !== undefined) {
        t(`CCRClient: non-finite ${e} (${typeof n}) \u2014 using ${s}ms`, {
            level: "warn"
        });
    }
    return s;
}
function as(payload) {
    return payload.type === "stream_event";
}
function os(e) {
    let n = e.pathname.replace(/\/$/, "");
    let s = n.lastIndexOf("/sessions/");
    if (s < 0) {
        return;
    }
    return `${e.protocol === "https:" ? "wss:" : "ws:"}//${e.host}${n.slice(0, s)}/worker/events/upload`;
}
function gt(e) {
    return e.type === "system" && "subtype" in e && e.subtype === "thinking_tokens";
}
function c6r(e) {
    switch(e.type){
        case "user":
        case "stream_event":
        case "tool_progress":
            return true;
        case "assistant":
            return !e.message.content.some((n)=>n.type === "tool_use" && (n.name === "SendUserMessage" || n.name === "PushNotification"));
        case "system":
            return "subtype" in e && (e.subtype === "thinking_tokens" || e.subtype === "task_progress" || e.subtype === "hook_progress");
        default:
            return false;
    }
}
function bt(e) {
    if (e) {
        return "?include_hearth=true";
    }
    return "";
}
function yt(e) {
    return e?.hearth;
}
function xe(e) {
    return e.payload.type === "user";
}
function Lvn(e) {
    let n = e?.isTurnRunning ?? (()=>cbe() > 0);
    let s = Oe();
    let r = Date.now();
    return {
        noteActivity () {
            r = Date.now();
            try {
                s.emit();
            } catch (error) {
                c(error);
            }
        },
        sampleIdleSeconds () {
            let h = Date.now();
            if (n()) {
                r = h;
                return 0;
            }
            return Math.max(0, Math.floor((h - r) / 1000));
        },
        onActivity: s.subscribe
    };
}
const ttr = 30000;
const It = 50;
const ls = 16384;
const Ft = 500;
const ne = 10;
const ds = 1000;
const us = 1000;
const cs = 3;
const K = 3600000;
const Ut = 1048576;
const hs = 1000000;
class De {
    decoder;
    clock;
    sink;
    watch = null;
    cancelTick = null;
    nextTickDueMs = Infinity;
    lastTickLagMs = 0;
    lastTickAtMs = 0;
    dispatchedSeen;
    lastLineAtMs = -Infinity;
    disabled = false;
    constructor(e, n = vs, s = ps){
        this.decoder = e;
        this.clock = n;
        this.sink = s;
        this.dispatchedSeen = e.framesDispatched;
    }
    observe(e, n) {
        let s = this.decoder.framesDispatched - this.dispatchedSeen;
        this.dispatchedSeen = this.decoder.framesDispatched;
        if (this.watch === null && this.decoder.pendingChars === 0 && !n.some(Ot)) {
            return;
        }
        if (this.disabled) {
            return;
        }
        try {
            this.onRead(e, s, n);
        } catch (error) {
            this.disable(error);
        }
    }
    stop() {
        this.cancelTick?.();
        this.cancelTick = null;
        this.nextTickDueMs = Infinity;
        this.watch = null;
    }
    onRead(e, n, s) {
        let r = this.clock.nowMs();
        let h = this.clock.cpuMicros();
        let y = n > 0 && this.decoder.pendingChars > 0 ? Math.min(Buffer.byteLength(this.decoder.buffered()), e) : 0;
        let watch = this.watch;
        let before = null;
        if (watch !== null) {
            if (watch.reads === 0 && n === 0 && !this.frameHasBegun()) {
                return;
            }
            let P = {
                gapMs: r - watch.lastReadAtMs,
                loopLagMs: this.loopLagAt(r),
                cpuMs: (h - watch.lastCpuMicros) / 1000
            };
            this.stop();
            if (watch.reads === 0) {
                if (P.loopLagMs !== null && P.gapMs - P.loopLagMs <= Ft) {
                    before = {
                        gapMs: P.gapMs,
                        loopLagMs: P.loopLagMs,
                        cpuMs: P.cpuMs
                    };
                }
            } else {
                if (P.gapMs > watch.maxGap.gapMs) {
                    watch.maxGap = P;
                    watch.maxGapOffsetBytes = watch.bytes;
                }
                watch.reads++;
                watch.bytes += e;
                watch.lastReadAtMs = r;
                watch.lastCpuMicros = h;
                if (n === 0) {
                    this.watch = watch;
                    this.armTick(r);
                    return;
                }
                watch.bytes -= y;
                this.report(watch, r);
            }
        }
        if (this.frameHasBegun()) {
            this.watch = Be(r, h, {
                reads: 1,
                bytes: n === 0 ? e : y,
                before: n === 0 ? before : null
            });
            this.armTick(r);
            return;
        }
        if (before !== null && n === 1) {
            this.report(Be(r, h, {
                reads: 1,
                bytes: e,
                before
            }), r);
        }
        if (s.some(Ot)) {
            this.watch = Be(r, h, {
                reads: 0,
                bytes: 0,
                before: null
            });
            this.armTick(r);
        }
    }
    frameHasBegun() {
        let pendingChars = this.decoder.pendingChars;
        return pendingChars > cs || pendingChars > 0 && /[^\r\n]/.test(this.decoder.buffered());
    }
    report(e, n) {
        let { before, maxGap } = e;
        let h = before !== null && before.loopLagMs >= It && e.bytes >= ls;
        if (maxGap.gapMs < It && !h) {
            return;
        }
        if (n - this.lastLineAtMs < us) {
            return;
        }
        this.lastLineAtMs = n;
        this.sink({
            frame_kib: z(e.bytes / 1024, Ut),
            read_count: z(e.reads, hs),
            receive_ms: z(n - e.startedAtMs, K),
            ...before !== null && {
                before_frame_gap_ms: z(before.gapMs, K),
                before_frame_loop_lag_ms: z(before.loopLagMs, K),
                before_frame_cpu_ms: z(before.cpuMs, K)
            },
            max_gap_ms: z(maxGap.gapMs, K),
            max_gap_offset_kib: z(e.maxGapOffsetBytes / 1024, Ut),
            ...maxGap.loopLagMs !== null && {
                max_gap_loop_lag_ms: z(maxGap.loopLagMs, K)
            },
            max_gap_cpu_ms: z(maxGap.cpuMs, K)
        });
    }
    loopLagAt(e) {
        if (this.nextTickDueMs !== Infinity) {
            return Math.max(this.lastTickLagMs, e - this.nextTickDueMs, 0);
        }
        if (e - this.lastTickAtMs <= ne) {
            return this.lastTickLagMs;
        }
        return null;
    }
    armTick(e) {
        this.lastTickLagMs = 0;
        this.lastTickAtMs = e;
        this.nextTickDueMs = e + ne;
        this.cancelTick = this.clock.setTimer(this.onTick, ne);
    }
    onTick = ()=>{
        try {
            this.cancelTick = null;
            let e = this.watch;
            if (e === null) {
                return;
            }
            let n = this.clock.nowMs();
            this.lastTickLagMs = Math.max(n - this.nextTickDueMs, 0);
            this.lastTickAtMs = n;
            let s = e.reads === 0 ? Ft : ds;
            if (n - e.lastReadAtMs >= s) {
                this.nextTickDueMs = Infinity;
                return;
            }
            this.nextTickDueMs = n + ne;
            this.cancelTick = this.clock.setTimer(this.onTick, ne);
        } catch (error) {
            this.disable(error);
        }
    };
    disable(e) {
        this.disabled = true;
        this.stop();
        c(e);
    }
}
function Be(e, lastCpuMicros, { reads, bytes, before }) {
    return {
        reads,
        bytes,
        startedAtMs: e,
        lastReadAtMs: e,
        lastCpuMicros,
        before,
        maxGap: {
            gapMs: 0,
            loopLagMs: 0,
            cpuMs: 0
        },
        maxGapOffsetBytes: 0
    };
}
function Ot(e) {
    return e.event === "client_event";
}
function z(e, n) {
    if (Number.isFinite(e)) {
        return Math.min(Math.max(Math.round(e), 0), n);
    }
    return 0;
}
function ps(e) {
    J("warn", "cli_sse_frame_stall", e);
}
function cpuMicros() {
    let e = process.cpuUsage();
    return e.user + e.system;
}
function setTimer(e, n) {
    let s = setTimeout(e, n);
    s.unref();
    return ()=>clearTimeout(s);
}
const vs = {
    nowMs: ()=>performance.now(),
    cpuMicros,
    setTimer
};
const _s = new Map([
    [
        "",
        "none"
    ],
    [
        "text/event-stream",
        "event-stream"
    ],
    [
        "text/html",
        "html"
    ],
    [
        "application/xhtml+xml",
        "html"
    ],
    [
        "application/json",
        "json"
    ],
    [
        "text/plain",
        "text"
    ],
    [
        "application/xml",
        "xml"
    ],
    [
        "text/xml",
        "xml"
    ]
]);
function xt(e) {
    let n = Qe(Qe(e ?? "", ";"), ",").trim().toLowerCase();
    return _s.get(n) ?? (n.endsWith("+json") ? "json" : "other");
}
const Bt = "worker_capabilities";
const Dt = "attestation-floor/1";
const He = "x-ccr-attestation-policy";
const gs = new Map([
    [
        "verified",
        "VERIFIED"
    ],
    [
        "verified_keyless_device",
        "VERIFIED_KEYLESS_DEVICE"
    ],
    [
        "verified_by_gate",
        "VERIFIED_BY_GATE"
    ]
]);
const bs = new Map([
    [
        "server_authored",
        "SERVER_AUTHORED"
    ],
    [
        "server_replayed",
        "SERVER_REPLAYED"
    ],
    [
        "absent",
        "ABSENT"
    ],
    [
        "invalid",
        "INVALID"
    ],
    [
        "unchecked",
        "UNCHECKED"
    ],
    [
        "unspecified",
        "UNSPECIFIED"
    ]
]);
function Ht(e) {
    if (e === null) {
        return {
            policy: undefined,
            fault: undefined
        };
    }
    let n = new Map;
    for (let S of Qe(e, ", ").split(";")){
        let k = S.trim();
        let P = k.indexOf("=");
        let w = P === -1 ? "" : k.slice(0, P);
        if (w !== "" && !n.has(w)) {
            n.set(w, k.slice(P + 1));
        }
    }
    let s = n.get("mode");
    if (n.get("v") !== "1") {
        return {
            policy: undefined,
            fault: "policy_unparseable"
        };
    }
    if (s === "off") {
        return {
            policy: undefined,
            fault: undefined
        };
    }
    if (s !== "observe" && s !== "enforce") {
        return {
            policy: undefined,
            fault: "policy_unparseable"
        };
    }
    let r = gs.get(n.get("level") ?? "");
    let acceptStatuses = new Set;
    let y = false;
    for (let S of (n.get("accept") ?? "").split(",")){
        let k = bs.get(S);
        if (k !== undefined) {
            acceptStatuses.add(k);
        } else if (S !== "") {
            y = true;
        }
    }
    return {
        policy: {
            enforce: s === "enforce",
            acceptLevel: r ?? "VERIFIED_BY_GATE",
            acceptStatuses
        },
        fault: r === undefined || y ? "policy_partial" : undefined
    };
}
const Ss = 1000;
const ys = 30000;
const Es = 60000;
const Ne = 15;
const ks = 60;
const ws = 30000;
const Ts = 15000;
const Lt = 3;
const Rs = "keepalive_tolerance_seconds";
const Ms = "x-ccr-sse-keepalive-interval-seconds";
const As = new Set([
    401,
    403,
    404
]);
const Cs = /\btext\/event-stream\b/i;
const se = 10;
const Ps = 500;
const Is = 8000;
function validateStatus() {
    return true;
}
const d6r = new Set([
    "workflow_launch",
    "queued_notification",
    "session_notice"
]);
const Us = p(()=>u({
        event_type: o()
    }));
const Os = "heartbeat_probe";
const xs = "owner_present";
const Bs = new Set([
    "event_id"
]);
const Ds = /^"([\w-]{1,128})"$/;
class Nvn {
    url;
    state = "idle";
    onData;
    onUserFrameReceived;
    onCloseCallback;
    onEventCallback;
    onDeliveredCallback;
    eventFilter;
    workerAttestationPolicySink;
    connectionPolicyReading;
    connectionSessionWriters;
    frameSessionWriters = new WeakMap;
    onEventVetoed;
    mostMembersInAFrame;
    lighterFrame;
    onFrameRefused;
    onHeartbeatProbe;
    onOwnerPresent;
    onDeviceStatusPublished;
    onReconnected;
    onDiagnostic;
    headers;
    sessionId;
    refreshHeaders;
    getAuthHeaders;
    connectTimeoutMs;
    abortController = null;
    lastSequenceNum = 0;
    seenSequenceNums = new Set;
    reconnectAttempts = 0;
    hasEverConnected = false;
    reconnectStartTime = null;
    reconnectTimer = null;
    connectErrorsSeen = new Set;
    livenessTimer = null;
    lastLivenessEvidenceAtMs = 0;
    lastFrameReadAtMs = 0;
    sseKeepaliveMaxIntervalSeconds;
    requireStreamEvidence;
    onUnexpectedContentType;
    advertisedMaxIntervalSeconds;
    echoedIntervalSeconds;
    nonOriginPolicy;
    nonOriginStreak = null;
    postUrl;
    serviceClockAtConnect;
    held = null;
    isHeldForRenewal = false;
    statementRenewalGate;
    endedForRenewal = new WeakSet;
    constructor(e, n = {}, { sessionId, refreshHeaders, initialSequenceNum, getAuthHeaders, connectTimeoutMs, deferDelivery, sseKeepaliveMaxIntervalSeconds, requireStreamEvidence, onUnexpectedContentType, mostMembersInAFrame, lighterFrame } = {}){
        this.url = e;
        this.headers = n;
        this.sessionId = sessionId;
        this.refreshHeaders = refreshHeaders;
        this.getAuthHeaders = getAuthHeaders ?? DF;
        this.connectTimeoutMs = connectTimeoutMs ?? ttr;
        this.postUrl = Hs(e);
        this.sseKeepaliveMaxIntervalSeconds = sseKeepaliveMaxIntervalSeconds;
        this.requireStreamEvidence = requireStreamEvidence ?? false;
        this.onUnexpectedContentType = onUnexpectedContentType;
        this.mostMembersInAFrame = mostMembersInAFrame;
        this.lighterFrame = lighterFrame;
        if (initialSequenceNum !== undefined && initialSequenceNum > 0) {
            this.lastSequenceNum = initialSequenceNum;
        }
        if (deferDelivery) {
            this.held = {
                frames: [],
                close: null
            };
        }
        t(`SSETransport: SSE URL = ${e.href}`);
        t(`SSETransport: POST URL = ${this.postUrl}`);
        J("info", "cli_sse_transport_initialized");
    }
    serviceNow() {
        let serviceClockAtConnect = this.serviceClockAtConnect;
        if (serviceClockAtConnect === undefined) {
            return;
        }
        let n = performance.now() - serviceClockAtConnect.monotonicMs;
        if (Math.abs(Date.now() - serviceClockAtConnect.wallMs - n) > Es) {
            return undefined;
        }
        return serviceClockAtConnect.serviceMs + n;
    }
    getLastSequenceNum() {
        return this.lastSequenceNum;
    }
    async connect() {
        if (this.state !== "idle" && this.state !== "reconnecting") {
            t(`SSETransport: Cannot connect, current state is ${this.state}`, {
                level: "error"
            });
            J("error", "cli_sse_connect_failed");
            return;
        }
        this.state = "reconnecting";
        let e = Date.now();
        let n = Nt(Math.floor(Number(this.sseKeepaliveMaxIntervalSeconds?.())));
        this.advertisedMaxIntervalSeconds = n > Ne ? n : undefined;
        this.echoedIntervalSeconds = undefined;
        let s = new URL(this.url.href);
        if (this.lastSequenceNum > 0) {
            s.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
        }
        if (this.advertisedMaxIntervalSeconds !== undefined) {
            s.searchParams.set(Rs, String(Lt * this.advertisedMaxIntervalSeconds));
        }
        if (this.workerAttestationPolicySink !== undefined) {
            s.searchParams.set(Bt, Dt);
        }
        let r = this.getAuthHeaders();
        let h = {
            ...this.headers,
            ...r,
            Accept: "text/event-stream",
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": zy(),
            "User-Agent": Ko()
        };
        Le(h, r);
        if (this.lastSequenceNum > 0) {
            h["Last-Event-ID"] = String(this.lastSequenceNum);
        }
        t(`SSETransport: Opening ${s.href}`);
        J("info", "cli_sse_connect_opening");
        let y = new AbortController;
        this.abortController = y;
        let S = false;
        let timeout_ms = Math.min(typeof this.connectTimeoutMs === "function" ? this.connectTimeoutMs() : this.connectTimeoutMs, yu);
        let P = timeout_ms > 0 ? setTimeout(()=>{
            S = true;
            y.abort();
        }, timeout_ms) : undefined;
        try {
            let w;
            try {
                w = await fetch(s.href, {
                    headers: h,
                    signal: y.signal,
                    ...na({
                        url: s.href
                    })
                });
            } catch (error) {
                if (y.signal.aborted && !S) {
                    return;
                }
                throw error;
            } finally{
                clearTimeout(P);
            }
            if (S) {
                throw Error("the connect deadline fired as the response arrived");
            }
            if (!w.ok) {
                let x = w.status === 403 ? rPt((G)=>w.headers.get(G)) : undefined;
                await Wj(w, {
                    timeoutMs: C2t
                });
                if (y.signal.aborted) {
                    return;
                }
                let H = (this.nonOriginPolicy?.now ?? Date.now)();
                let A = this.advanceNonOriginStreak(x, H);
                let retried = A !== null && this.nonOriginPolicy !== undefined && H - A.startedAtMs < this.nonOriginPolicy.windowMs;
                let j = As.has(w.status) && !retried;
                t(`SSETransport: HTTP ${w.status}${j ? " (permanent)" : ""}${x ? ` source=${x}` : ""}${retried ? ` (not origin \u2014 retrying; attempt ${A?.attempts})` : ""}`, {
                    level: "error"
                });
                J("error", "cli_sse_connect_http_error", {
                    status: w.status,
                    ...x !== undefined && {
                        source: x
                    },
                    ...A !== null && {
                        retried
                    }
                });
                this.connectErrorsSeen.add(`http_${w.status}`);
                this.diagConnectFailure(`HTTP ${w.status}${j ? " (permanent)" : ""}`, e);
                if (j) {
                    this.nonOriginStreak = null;
                    this.state = "closed";
                    this.emitClose(w.status, x === undefined ? undefined : A === null ? {
                        rejectSource: x
                    } : {
                        rejectSource: A.source,
                        streak: {
                            source: A.source,
                            attempts: A.attempts,
                            streakMs: H - A.startedAtMs
                        }
                    });
                    return;
                }
                if (retried) {
                    try {
                        this.nonOriginPolicy?.onRefused?.();
                    } catch (error) {
                        t(`SSETransport: onRefused handler threw: ${l(error)}`, {
                            level: "error"
                        });
                    }
                }
                this.handleConnectionError();
                return;
            }
            if (!w.body) {
                t("SSETransport: No response body");
                this.connectErrorsSeen.add("no_response_body");
                this.diagConnectFailure("no response body", e);
                this.handleConnectionError();
                return;
            }
            if (this.requireStreamEvidence) {
                let x = xt(w.headers.get("content-type"));
                if (x !== "event-stream") {
                    let accepted = w.headers.has(m6r) || w.headers.has(He);
                    if (!accepted) {
                        await Wj(w, {
                            timeoutMs: C2t
                        });
                        if (y.signal.aborted) {
                            return;
                        }
                    }
                    let A = `HTTP ${w.status}, content_type=${x}, ${accepted ? "with" : "without"} a session service header`;
                    t(`SSETransport: ${A}: ${accepted ? "taken as the stream" : "a failed connect"}`, {
                        level: accepted ? "warn" : "error"
                    });
                    J(accepted ? "warn" : "error", "cli_sse_connect_unexpected_content_type", {
                        status: w.status,
                        content_type: x,
                        accepted
                    });
                    this.onUnexpectedContentType?.({
                        status: w.status,
                        contentType: x,
                        accepted
                    });
                    if (!accepted) {
                        this.connectErrorsSeen.add("no_stream_evidence");
                        this.diagConnectFailure(`${A}: a proxy or gateway may have answered in place of the server`, e);
                        this.handleConnectionError();
                        return;
                    }
                }
            }
            let duration_ms = Date.now() - e;
            let serviceMs = Date.parse(w.headers.get("date") ?? "");
            if (!Number.isNaN(serviceMs)) {
                this.serviceClockAtConnect = {
                    serviceMs,
                    wallMs: Date.now(),
                    monotonicMs: performance.now()
                };
            }
            if (this.advertisedMaxIntervalSeconds !== undefined) {
                let x = Number(w.headers.get(Ms));
                if (Number.isInteger(x) && x > 0) {
                    this.echoedIntervalSeconds = Nt(x);
                }
            }
            let O = this.workerAttestationPolicySink === undefined ? undefined : Ht(w.headers.get(He));
            this.connectionPolicyReading = O;
            let C = w.headers.get(m6r);
            let writers = s5o(C);
            let q = writers === undefined ? undefined : {
                writers,
                statedAtMs: Date.now()
            };
            this.connectionSessionWriters = q;
            if (O !== undefined) {
                this.workerAttestationPolicySink?.(O);
                if (y.signal.aborted) {
                    return;
                }
            }
            let B = this.advertisedMaxIntervalSeconds === undefined ? "" : ` keepalive_interval=${this.keepaliveIntervalMs() / 1000}s${this.echoedIntervalSeconds === undefined ? " (no echo)" : ""}`;
            t(`SSETransport: Connected${B}`);
            J("info", "cli_sse_connect_connected", {
                duration_ms,
                ...this.keepaliveDiagnosticFields(),
                session_writers: writers ?? (C === null ? "header_absent" : "header_unreadable"),
                ...O !== undefined && {
                    attestation_policy: O.policy === undefined ? "none" : O.policy.enforce ? "enforce" : "observe",
                    ...O.fault !== undefined && {
                        attestation_policy_fault: O.fault
                    }
                }
            });
            if (this.reconnectAttempts === 0) {
                wr("sse_connect_ms", duration_ms, e - performance.timeOrigin);
            }
            if (this.reconnectAttempts > 0) {
                let x = this.reconnectStartTime ? Math.round((Date.now() - this.reconnectStartTime) / 1000) : 0;
                this.onDiagnostic?.(`SSE reconnected after ${this.reconnectAttempts} attempt(s), ${x}s downtime` + (this.connectErrorsSeen.size > 0 ? `, errors=[${[
                    ...this.connectErrorsSeen
                ].join(",")}]` : ""), "warn", "sse_recovered");
            } else {
                this.onDiagnostic?.(`SSE connected in ${duration_ms}ms`, "info", "sse_connected");
            }
            this.connectErrorsSeen.clear();
            let N = this.hasEverConnected;
            this.hasEverConnected = true;
            this.state = "connected";
            this.reconnectAttempts = 0;
            this.reconnectStartTime = null;
            this.resetLivenessTimer();
            let U = Cs.test(w.headers.get("content-type") ?? "");
            if (N) {
                try {
                    this.onReconnected?.();
                } catch (error) {
                    t(`SSETransport: onReconnected handler threw: ${l(error)}`, {
                        level: "error"
                    });
                    J("error", "cli_sse_reconnected_handler_threw");
                }
            }
            if (this.isHeldForRenewal) {
                this.deliverHeldForRenewal(q);
                if (y.signal.aborted) {
                    return;
                }
            }
            await this.readStream(w.body, U, q);
        } catch (error) {
            if (S) {
                t(`SSETransport: No response within ${timeout_ms}ms, reconnecting`, {
                    level: "error"
                });
                J("error", "cli_sse_connect_timeout", {
                    timeout_ms
                });
                this.connectErrorsSeen.add("connect_timeout");
                this.diagConnectFailure(`no response in ${timeout_ms / 1000}s`, e);
                this.handleConnectionError();
                return;
            }
            t(`SSETransport: Connection error: ${l(error)}`, {
                level: "error"
            });
            J("error", "cli_sse_connect_error");
            this.connectErrorsSeen.add("fetch_failed");
            this.diagConnectFailure(l(error), e);
            this.handleConnectionError();
        }
    }
    advanceNonOriginStreak(e, n) {
        let nonOriginPolicy = this.nonOriginPolicy;
        if (nonOriginPolicy === undefined || e === undefined) {
            return null;
        }
        if (!QNe(e)) {
            this.nonOriginStreak = null;
            return null;
        }
        let nonOriginStreak = this.nonOriginStreak;
        if (nonOriginStreak === null || n - nonOriginStreak.lastAtMs > nonOriginPolicy.maxGapMs) {
            nonOriginStreak = {
                source: e,
                startedAtMs: n,
                lastAtMs: n,
                attempts: 0
            };
            this.nonOriginStreak = nonOriginStreak;
        }
        nonOriginStreak.attempts++;
        nonOriginStreak.lastAtMs = n;
        return nonOriginStreak;
    }
    settleNonOriginStreakRecovered() {
        let nonOriginStreak = this.nonOriginStreak;
        if (nonOriginStreak === null) {
            return;
        }
        this.nonOriginStreak = null;
        let n = {
            source: nonOriginStreak.source,
            attempts: nonOriginStreak.attempts,
            streakMs: (this.nonOriginPolicy?.now ?? Date.now)() - nonOriginStreak.startedAtMs
        };
        J("info", "cli_sse_nonorigin_403_recovered", {
            source: n.source,
            attempts: n.attempts,
            streak_ms: n.streakMs
        });
        try {
            this.nonOriginPolicy?.onRecovered?.(n);
        } catch (error) {
            t(`SSETransport: onRecovered handler threw: ${l(error)}`, {
                level: "error"
            });
        }
    }
    diagConnectFailure(e, n) {
        if (!this.onDiagnostic) {
            return;
        }
        let s = this.reconnectAttempts + 1;
        if (s > 3 && s % 10 !== 0) {
            return;
        }
        let r = Date.now() - n;
        let h = this.reconnectStartTime ? `, ${Math.round((Date.now() - this.reconnectStartTime) / 1000)}s reconnecting` : "";
        let y = this.connectErrorsSeen.size > 1 ? `, errors=[${[
            ...this.connectErrorsSeen
        ].join(",")}]` : "";
        this.onDiagnostic(`SSE connect failed (${e}) attempt=${s} took=${r}ms${h}${y}`, "warn", "sse_connect_failed");
    }
    async readStream(e, n, s) {
        let r = e.getReader();
        let h = new A2t;
        let abortController = this.abortController;
        let S = ()=>abortController !== null && this.endedForRenewal.has(abortController);
        let k = n && a.CLAUDE_CODE_DIAGNOSTICS_FILE ? new De(h) : null;
        try {
            while(true){
                let { done, value } = await r.read();
                if (done) {
                    break;
                }
                let R = h.push(value);
                k?.observe(value.byteLength, R);
                for (let I of R){
                    if (!S()) {
                        this.resetLivenessTimer();
                        this.lastFrameReadAtMs = this.lastLivenessEvidenceAtMs;
                    }
                    if (this.nonOriginStreak !== null && n) {
                        this.settleNonOriginStreakRecovered();
                    }
                    if (I.id && I.event !== "ephemeral_event") {
                        let O = parseInt(I.id, 10);
                        if (!isNaN(O)) {
                            if (this.seenSequenceNums.has(O)) {
                                t(`SSETransport: DUPLICATE frame seq=${O} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size})`, {
                                    level: "warn"
                                });
                                J("warn", "cli_sse_duplicate_sequence");
                            } else {
                                this.seenSequenceNums.add(O);
                                if (this.seenSequenceNums.size > 1000) {
                                    let C = this.lastSequenceNum - 200;
                                    for (let D of this.seenSequenceNums){
                                        if (D < C) {
                                            this.seenSequenceNums.delete(D);
                                        }
                                    }
                                }
                            }
                            if (O > this.lastSequenceNum) {
                                this.lastSequenceNum = O;
                            }
                        }
                    }
                    if (I.event && I.data) {
                        this.handleSSEFrame(I.event, I.data, s);
                    } else if (I.data) {
                        t("SSETransport: Frame has data: but no event: field — dropped", {
                            level: "warn"
                        });
                        J("warn", "cli_sse_frame_missing_event_field");
                    }
                }
            }
        } catch (error) {
            if (this.abortController?.signal.aborted || S()) {
                return;
            }
            t(`SSETransport: Stream read error: ${l(error)}`, {
                level: "error"
            });
            J("error", "cli_sse_stream_read_error");
        } finally{
            k?.stop();
            r.releaseLock();
        }
        if (this.state !== "closing" && this.state !== "closed" && !S()) {
            t("SSETransport: Stream ended, reconnecting");
            if (this.state === "connected") {
                this.connectErrorsSeen.add("stream_ended");
                this.onDiagnostic?.("SSE stream ended by server, reconnecting", "warn", "sse_stream_ended");
            }
            this.handleConnectionError();
        }
    }
    handleSSEFrame(e, n, sessionWriters, receivedWallMs = Date.now(), receivedAtMs = performance.now()) {
        if (this.mostMembersInAFrame !== undefined && w_e(n, this.mostMembersInAFrame) === undefined) {
            let k = this.lighterFrame?.(n);
            if (k !== undefined && w_e(k, this.mostMembersInAFrame) !== undefined) {
                this.handleSSEFrame(e, k, sessionWriters, receivedWallMs, receivedAtMs);
                return;
            }
            this.onFrameRefused?.(Ds.exec(wst(n, Bs)?.get("event_id") ?? "")?.[1]);
            return;
        }
        if (e === "ephemeral_event") {
            this.handleEphemeralFrame(n);
            return;
        }
        if (this.held !== null) {
            this.held.frames.push({
                eventType: e,
                data: n,
                policyReading: this.connectionPolicyReading,
                sessionWriters,
                receivedWallMs,
                receivedAtMs
            });
            return;
        }
        if (e !== "client_event") {
            t(`SSETransport: Unexpected SSE event type '${e}' on worker stream`, {
                level: "warn"
            });
            J("warn", "cli_sse_unexpected_event_type", {
                event_type: e
            });
            return;
        }
        let y;
        try {
            y = X(n);
        } catch (error) {
            t(`SSETransport: Failed to parse client_event data: ${l(error)}`, {
                level: "error"
            });
            return;
        }
        let y_payload = y.payload;
        if (y_payload && typeof y_payload === "object" && "type" in y_payload) {
            let k = this.sessionId ? ` session=${this.sessionId}` : "";
            let P = y.device_attestation_status ? ` attestation=${y.device_attestation_status}` : "";
            t(`SSETransport: Event seq=${y.sequence_num} event_id=${y.event_id} event_type=${y.event_type} payload_type=${String(y_payload.type)}${P}${k}`);
            J("info", "cli_sse_message_received");
            if (sessionWriters !== undefined && this.state === "connected" && this.statementRenewalGate?.(y, sessionWriters) === true) {
                this.held = {
                    frames: [
                        {
                            eventType: e,
                            data: n,
                            policyReading: this.connectionPolicyReading,
                            sessionWriters,
                            receivedWallMs,
                            receivedAtMs
                        }
                    ],
                    close: null
                };
                this.isHeldForRenewal = true;
                this.renewConnection();
                return;
            }
            if (sessionWriters !== undefined) {
                this.frameSessionWriters.set(y, sessionWriters);
            }
            let decision = this.eventFilter?.(y);
            if (decision) {
                J("warn", "cli_sse_event_filtered", decision === true ? undefined : {
                    decision
                });
            } else if (typeof y_payload.type === "string" && d6r.has(y_payload.type) && y.event_type !== y_payload.type) {
                J("warn", "cli_sse_server_only_event_type_mismatch", {
                    event_type: y.event_type,
                    payload_type: y_payload.type
                });
                this.onEventVetoed?.(y);
            } else if (y_payload.type === "control_request" && y.source === "worker") {
                J("warn", "cli_sse_worker_control_request_dropped");
            } else {
                this.onDeliveredCallback?.(y, sessionWriters);
                if (y_payload.type === "user" && typeof y_payload.uuid === "string") {
                    this.onUserFrameReceived?.(y_payload.uuid, receivedWallMs, y.processing_at, receivedAtMs);
                }
                this.onData?.(_(y.payload) + `
`);
            }
        } else {
            t(`SSETransport: Ignoring client_event with no type in payload: event_id=${y.event_id}`);
        }
        this.onEventCallback?.(y);
    }
    emitClose(code, detail) {
        if (this.held !== null) {
            this.held.close = {
                code,
                detail
            };
            if (this.isHeldForRenewal) {
                this.isHeldForRenewal = false;
                this.startDelivery();
            }
            return;
        }
        this.onCloseCallback?.(code, detail);
    }
    renewConnection() {
        if (this.state !== "connected") {
            return;
        }
        t("SSETransport: Renewing the connection");
        J("info", "cli_sse_renew_connection");
        if (this.refreshHeaders) {
            let e = this.refreshHeaders();
            Object.assign(this.headers, e);
            Le(this.headers, e);
        }
        this.clearLivenessTimer();
        if (this.abortController !== null) {
            this.endedForRenewal.add(this.abortController);
            this.abortController.abort();
            this.abortController = null;
        }
        this.state = "reconnecting";
        this.reconnectTimer = setTimeout(()=>{
            this.reconnectTimer = null;
            this.connect();
        }, 0);
    }
    setStatementRenewalGate(e) {
        this.statementRenewalGate = e;
    }
    deliverHeldForRenewal(e) {
        this.isHeldForRenewal = false;
        for (let n of this.held?.frames ?? []){
            n.sessionWriters = e;
        }
        this.startDelivery();
    }
    startDelivery() {
        let held = this.held;
        if (held === null) {
            return;
        }
        this.held = null;
        let n;
        for (let s of held.frames){
            if (s.policyReading !== undefined && s.policyReading !== n) {
                n = s.policyReading;
                if (!this.handSinkPolicyReading(n)) {
                    return;
                }
            }
            this.handleSSEFrame(s.eventType, s.data, s.sessionWriters, s.receivedWallMs, s.receivedAtMs);
        }
        if (this.connectionPolicyReading !== undefined && this.connectionPolicyReading !== n && !this.handSinkPolicyReading(this.connectionPolicyReading)) {
            return;
        }
        if (held.close !== null) {
            this.onCloseCallback?.(held.close.code, held.close.detail);
        }
    }
    handSinkPolicyReading(e) {
        this.workerAttestationPolicySink?.(e);
        return this.state !== "closing";
    }
    handleEphemeralFrame(e) {
        let n;
        try {
            n = X(e);
        } catch (error) {
            t(`SSETransport: Failed to parse ephemeral_event data: ${l(error)}`, {
                level: "error"
            });
            return;
        }
        let s = Us().safeParse(n);
        if (s.success && s.data.event_type === xs && this.onOwnerPresent !== undefined) {
            J("info", "cli_sse_owner_present_received");
            try {
                this.onOwnerPresent();
            } catch (error) {
                t(`SSETransport: onOwnerPresent handler threw: ${l(error)}`, {
                    level: "error"
                });
            }
            return;
        }
        if (!s.success || s.data.event_type !== Os) {
            J("warn", "cli_sse_unexpected_ephemeral_type", {
                event_type: s.success ? s.data.event_type : "unparseable"
            });
            return;
        }
        J("info", "cli_sse_heartbeat_probe_received");
        try {
            this.onHeartbeatProbe?.();
        } catch (error) {
            t(`SSETransport: onHeartbeatProbe handler threw: ${l(error)}`, {
                level: "error"
            });
            J("error", "cli_sse_heartbeat_probe_handler_threw");
        }
    }
    handleConnectionError() {
        this.clearLivenessTimer();
        if (this.state === "closing" || this.state === "closed") {
            return;
        }
        this.abortController?.abort();
        this.abortController = null;
        let e = Date.now();
        if (!this.reconnectStartTime) {
            this.reconnectStartTime = e;
        }
        let n = e - this.reconnectStartTime;
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }
        if (this.refreshHeaders) {
            let r = this.refreshHeaders();
            Object.assign(this.headers, r);
            Le(this.headers, r);
            t("SSETransport: Refreshed headers for reconnect");
        }
        this.state = "reconnecting";
        this.reconnectAttempts++;
        let s = Zv({
            attempt: this.reconnectAttempts,
            baseMs: Ss,
            capMs: ys,
            jitter: {
                kind: "symmetric",
                ratio: 0.25
            }
        });
        t(`SSETransport: Reconnecting in ${Math.round(s)}ms (attempt ${this.reconnectAttempts}, ${Math.round(n / 1000)}s elapsed)`);
        J("error", "cli_sse_reconnect_attempt", {
            reconnectAttempts: this.reconnectAttempts
        });
        this.reconnectTimer = setTimeout(()=>{
            this.reconnectTimer = null;
            this.connect();
        }, s);
    }
    onLivenessTimeout = ()=>{
        this.livenessTimer = null;
        t("SSETransport: Liveness timeout, reconnecting", {
            level: "error"
        });
        J("error", "cli_sse_liveness_timeout", this.keepaliveDiagnosticFields());
        this.connectErrorsSeen.add("liveness_timeout");
        this.onDiagnostic?.(`SSE liveness timeout \u2014 no frame in ${this.livenessTimeoutMs() / 1000}s, reconnecting`, "warn", "sse_liveness_timeout");
        this.abortController?.abort();
        this.handleConnectionError();
    };
    resetLivenessTimer() {
        this.lastLivenessEvidenceAtMs = Date.now();
        this.clearLivenessTimer();
        this.livenessTimer = setTimeout(this.onLivenessTimeout, this.livenessTimeoutMs());
    }
    keepaliveIntervalMs() {
        return (this.echoedIntervalSeconds ?? this.advertisedMaxIntervalSeconds ?? Ne) * 1000;
    }
    livenessTimeoutMs() {
        return this.keepaliveIntervalMs() + ws;
    }
    keepaliveDiagnosticFields() {
        if (this.advertisedMaxIntervalSeconds === undefined) {
            return {};
        }
        return {
            keepalive_tolerance_s: Lt * this.advertisedMaxIntervalSeconds,
            keepalive_interval_s: this.keepaliveIntervalMs() / 1000,
            liveness_timeout_s: this.livenessTimeoutMs() / 1000,
            keepalive_interval_echoed: this.echoedIntervalSeconds !== undefined
        };
    }
    clearLivenessTimer() {
        if (this.livenessTimer) {
            clearTimeout(this.livenessTimer);
            this.livenessTimer = null;
        }
    }
    async write(e) {
        let n = this.getAuthHeaders();
        if (Object.keys(n).length === 0) {
            t("SSETransport: No session token available for POST");
            J("warn", "cli_sse_post_no_token");
            return;
        }
        let headers = {
            ...n,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": zy(),
            "User-Agent": Ko()
        };
        t(`SSETransport: POST body keys=${Object.keys(e).join(",")}`);
        for(let attempt = 1; attempt <= se; attempt++){
            try {
                let h = await At.post(this.postUrl, e, {
                    headers,
                    validateStatus
                });
                if (h.status === 200 || h.status === 201) {
                    t(`SSETransport: POST success type=${e.type}`);
                    return;
                }
                t(`SSETransport: POST ${h.status} body=${_(h.data).slice(0, 200)}`);
                if (h.status >= 400 && h.status < 500 && h.status !== 429) {
                    t(`SSETransport: POST returned ${h.status} (client error), not retrying`);
                    J("warn", "cli_sse_post_client_error", {
                        status: h.status
                    });
                    return;
                }
                t(`SSETransport: POST returned ${h.status}, attempt ${attempt}/${se}`);
                J("warn", "cli_sse_post_retryable_error", {
                    status: h.status,
                    attempt
                });
            } catch (error) {
                t(`SSETransport: POST error: ${l(error)}, attempt ${attempt}/${se}`);
                J("warn", "cli_sse_post_network_error", {
                    attempt
                });
            }
            if (attempt === se) {
                t(`SSETransport: POST failed after ${se} attempts, continuing`);
                J("warn", "cli_sse_post_retries_exhausted");
                return;
            }
            await Q(Zv({
                attempt,
                baseMs: Ps,
                capMs: Is
            }));
        }
    }
    isConnectedStatus() {
        return this.state === "connected";
    }
    isReadStreamRecentlyAlive() {
        return this.state === "connected" && Date.now() - this.lastLivenessEvidenceAtMs < this.getReadStreamRecentLivenessWindowMs();
    }
    lastFrameReadAt() {
        if (this.lastFrameReadAtMs === 0) {
            return undefined;
        }
        return this.lastFrameReadAtMs;
    }
    getReadStreamRecentLivenessWindowMs() {
        return this.keepaliveIntervalMs() + Ts;
    }
    isClosedStatus() {
        return this.state === "closed";
    }
    setOnData(e) {
        this.onData = e;
    }
    setOnUserFrameReceived(e) {
        this.onUserFrameReceived = e;
    }
    setOnClose(e) {
        this.onCloseCallback = e;
    }
    setNonOriginRejectionPolicy(e) {
        this.nonOriginPolicy = e;
    }
    setOnEvent(e) {
        this.onEventCallback = e;
    }
    setOnDelivered(e) {
        this.onDeliveredCallback = e;
    }
    getSessionWriters() {
        return this.connectionSessionWriters?.writers;
    }
    getSessionWritersStatement() {
        return this.connectionSessionWriters;
    }
    sessionWritersOf(e) {
        return this.frameSessionWriters.get(e);
    }
    setOnDiagnostic(e) {
        this.onDiagnostic = e;
    }
    setEventFilter(e) {
        this.eventFilter = e;
    }
    setWorkerAttestationPolicySink(e) {
        this.workerAttestationPolicySink = e;
    }
    requiresStreamEvidence() {
        return this.requireStreamEvidence;
    }
    setOnFrameRefused(e) {
        this.onFrameRefused = e;
    }
    setOnEventVetoed(e) {
        this.onEventVetoed = e;
    }
    setOnHeartbeatProbe(e) {
        this.onHeartbeatProbe = e;
    }
    setOnOwnerPresent(e) {
        this.onOwnerPresent = e;
    }
    setOnDeviceStatusPublished(e) {
        this.onDeviceStatusPublished = e;
    }
    setOnReconnected(e) {
        this.onReconnected = e;
    }
    close() {
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }
        this.clearLivenessTimer();
        this.state = "closing";
        this.nonOriginStreak = null;
        this.held = null;
        this.isHeldForRenewal = false;
        this.abortController?.abort();
        this.abortController = null;
    }
    [Symbol.dispose]() {
        this.close();
    }
}
function Le(e, n) {
    if (n.Cookie) {
        delete e.Authorization;
    }
    if (n.Authorization) {
        delete e.Cookie;
        delete e["X-Organization-Uuid"];
    }
}
function Nt(e) {
    return Math.min(Math.max(e, Ne), ks);
}
function Hs(e) {
    let e_pathname = e.pathname;
    if (e_pathname.endsWith("/stream")) {
        e_pathname = e_pathname.slice(0, -7);
    }
    return `${e.protocol}//${e.host}${e_pathname}`;
}
const u6r = 180000;
const maxGapMs = 90000;
async function p6r(e) {
    let { sessionUrl, ingressToken, sessionId, initialSequenceNum, getAuthToken } = e;
    let S = ()=>e.inboundReadReceipts?.() === true;
    let getAuthHeaders;
    if (getAuthToken) {
        getAuthHeaders = ()=>ISe(getAuthToken());
    } else {
        dWn(ingressToken);
    }
    let P = e.epoch ?? await $Ze(sessionUrl, ingressToken);
    t(`[bridge:repl] CCR v2: worker sessionId=${sessionId} epoch=${P}${e.epoch !== undefined ? " (from /bridge)" : " (via registerWorker)"}`);
    let w = new URL(sessionUrl);
    w.pathname = `${w.pathname.replace(/\/$/, "")}/worker/events/stream`;
    let R = new Nvn(w, {}, {
        sessionId,
        initialSequenceNum,
        getAuthHeaders,
        connectTimeoutMs: e.sseConnectTimeoutMs,
        sseKeepaliveMaxIntervalSeconds: e.sseKeepaliveMaxIntervalSeconds
    });
    let I = !e.outboundOnly;
    let O = (e.selfHealHeartbeats ?? false) && I;
    let C = (e.nonOrigin403Retry ?? false) && I;
    let nonOrigin403Transient = C && O;
    if (C) {
        R.setNonOriginRejectionPolicy({
            windowMs: u6r,
            maxGapMs,
            onRecovered: e.onNonOriginRejectionRecovered
        });
    }
    let q;
    let B = false;
    function N(A, W, j) {
        if (B) {
            return;
        }
        B = true;
        try {
            U.close({
                goodbye: false,
                retainUndeliveredClientEvents: e.retainUndeliveredOnClose === true
            });
            R.close();
        } catch (error) {
            c(error);
        }
        try {
            q?.(A, W, j);
        } catch (error) {
            c(error);
        }
    }
    let U = new jU(R, new URL(sessionUrl), {
        getAuthHeaders,
        heartbeatIntervalMs: e.heartbeatIntervalMs,
        heartbeatJitterFraction: e.heartbeatJitterFraction,
        advertiseHeartbeatProbeSupport: (e.advertiseHeartbeatProbeSupport ?? false) && I,
        uploadTrim: e.uploadTrim,
        uploadHoldMarker: e.uploadHoldMarker,
        eventHoldEnabled: e.eventHoldEnabled,
        ...e.processExiting && {
            processExiting: e.processExiting
        },
        beatOnStaleReconnect: (e.beatOnStaleReconnect ?? false) && I,
        idleTracker: e.idleTracker,
        beatOnReactivation: (e.beatOnReactivation ?? false) && I,
        skipRedundantHeartbeats: e.skipRedundantHeartbeats,
        streamEventFlushIntervalMs: e.streamEventFlushIntervalMs,
        streamEventFirstFlushMs: e.streamEventFirstFlushMs,
        streamEventFlushOnFirstDelta: e.streamEventFlushOnFirstDelta,
        gzipRequestBodyFetch: e.gzipRequestBodyFetch,
        noSubscriberStreamEventFlushIntervalMs: e.noSubscriberStreamEventFlushIntervalMs,
        noSubscriberUploadHoldMs: e.noSubscriberUploadHoldMs,
        dropUnwatchedStreamEvents: e.dropUnwatchedStreamEvents,
        nonOrigin403Transient,
        internalEventUploader: e.internalEventUploader,
        onEpochMismatch: (A)=>{
            let W = e.causeTypedCloseCodes ? Zer[A] : 4090;
            t(`[bridge:repl] CCR v2: terminal request-path condition (${A}) \u2014 closing with ${W} for ${W === 4094 ? "auth recovery" : "poll-loop recovery"}`);
            N(W, A);
            throw Error("terminal request-path condition");
        },
        onRequestAuthOk: e.onRequestAuthOk,
        ...O && {
            onHeartbeatLost: ()=>{
                if (B) {
                    return;
                }
                t("[bridge:repl] CCR v2: heartbeats failing while SSE healthy — closing for transport rebuild", {
                    level: "warn"
                });
                N(4093);
            }
        }
    });
    R.setOnEvent((A)=>{
        if (e.processExiting?.() && xe(A)) {
            return;
        }
        U.reportDelivery(A.event_id, "received");
        if (!(S() && Xus(A.event_id))) {
            U.reportDelivery(A.event_id, "processed");
        }
    });
    R.setEventFilter((A)=>{
        if (sFn(A)) {
            return true;
        }
        if (S()) {
            return Jus(A);
        }
        return false;
    });
    let x;
    let H = false;
    return {
        write (A) {
            return U.writeEvent(A);
        },
        writeBatch (A) {
            return U.writeEvents(A);
        },
        close (A) {
            B = true;
            U.close({
                goodbye: A?.goodbye,
                retainUndeliveredClientEvents: A?.retainUndelivered
            });
            if (!A?.retainUndelivered) {
                U.discardUndeliveredClientEvents();
            }
            R.close();
        },
        takeUndeliveredEvents () {
            return U.takeUndeliveredClientEvents();
        },
        discardUndeliveredEvents () {
            return U.discardUndeliveredClientEvents();
        },
        adoptUndeliveredEvents (A) {
            U.adoptClientEvents(A);
        },
        flushGoodbye () {
            return U.flushGoodbye();
        },
        isConnectedStatus () {
            return H;
        },
        getStateLabel () {
            if (R.isClosedStatus()) {
                return "closed";
            }
            if (R.isConnectedStatus()) {
                if (H) {
                    return "connected";
                }
                return "init";
            }
            return "connecting";
        },
        setOnData (A) {
            R.setOnData(A);
        },
        setOnClose (A) {
            q = A;
            R.setOnClose((W, j)=>{
                N(W ?? 4092, undefined, j);
            });
        },
        setOnConnect (A) {
            x = A;
        },
        getLastSequenceNum () {
            return R.getLastSequenceNum();
        },
        getEpoch () {
            return P;
        },
        reportState (A, W) {
            U.reportState(A, W);
        },
        reportMetadata (A) {
            U.reportMetadata(A);
        },
        reportInternalMetadata (A) {
            U.reportInternalMetadata(A);
        },
        droppedDurableBatchCount () {
            return U.droppedDurableBatches;
        },
        flushWorkerState () {
            return U.flushWorkerState();
        },
        droppedWorkerStatePatchCount () {
            return U.droppedWorkerStatePatches;
        },
        reportDelivery (A, W) {
            U.reportDelivery(A, W);
        },
        setStreamEventFlushIntervalMs (A) {
            U.setStreamEventFlushIntervalMs(A);
        },
        setStreamEventFirstFlushMs (A) {
            U.setStreamEventFirstFlushMs(A);
        },
        setStreamEventFlushOnFirstDelta (A) {
            U.setStreamEventFlushOnFirstDelta(A);
        },
        setNoSubscriberStreamEventFlushIntervalMs (A) {
            U.setNoSubscriberStreamEventFlushIntervalMs(A);
        },
        setNoSubscriberUploadHoldMs (A) {
            U.setNoSubscriberUploadHoldMs(A);
        },
        setDropUnwatchedStreamEvents (A) {
            U.setDropUnwatchedStreamEvents(A);
        },
        setSubscribersReportedListener (A) {
            U.setSubscribersReportedListener(A);
        },
        mayHoldUploads () {
            return U.mayHoldUploads();
        },
        flush (A) {
            return U.flush(A);
        },
        flushDeliveryAcks (A) {
            return U.flushDeliveryAcks(A);
        },
        flushInternalEvents (A) {
            return U.flushInternalEvents(A);
        },
        getUploadBacklog () {
            return U.uploadBacklog();
        },
        getInternalEventBacklog () {
            return {
                pending: U.internalEventsPending,
                droppedBatches: U.droppedInternalBatches
            };
        },
        trackFirstFrameUpload (A) {
            return U.trackFirstFrameUpload(A);
        },
        getInternalEventWriter () {
            return (A, W, j)=>U.writeInternalEvent(A, W, j);
        },
        getInternalEventReaders () {
            return {
                readMain: (A)=>{
                    if (A) {
                        return U.readInternalEventsForCatchUp(A);
                    }
                    return U.readInternalEvents();
                },
                readSubagents: ()=>U.readSubagentInternalEvents(),
                readSubagent: (A, W)=>U.readAgentInternalEvents(A, W)
            };
        },
        getInternalEventsPort () {
            return {
                epoch: ()=>U.getWorkerEpoch(),
                postBatch: (A, W)=>U.postInternalEventsBatch(A, W),
                listPage: (A, W)=>U.getInternalEventsPage(A, W)
            };
        },
        connect () {
            U.initialize(P).then((A)=>{
                if (B) {
                    return;
                }
                H = true;
                t(`[bridge:repl] v2 transport ready for writes (epoch=${P}); opening the read stream`);
                x?.(A);
                if (!e.outboundOnly && !B) {
                    R.connect();
                }
            }, (A)=>{
                t(`[bridge:repl] CCR v2 initialize failed: ${l(A)}`, {
                    level: "error"
                });
                N(4091);
            });
        }
    };
}
export { fSt, mSt, GMe, n5o, Zer, l6r, etr, jU, c6r, Lvn, ttr, d6r, Nvn, u6r, p6r };
