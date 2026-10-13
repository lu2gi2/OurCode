import { pjn, fjn, qV, qT, LAs, ySo, NAs, u3e } from "/$bunfs/root/chunk-tw5t5h13.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { x, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, Ms, ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { p1n, hEr, SEr, aFe, wEr, h1n, k, hz } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a, eT } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Nm, TSe, ASe, Hw, X_, Fl, w3e } from "/$bunfs/root/chunk-t0b6khh6.js";
import { KT } from "/$bunfs/root/chunk-74djrymf.js";
import { Ba, Jct, wP, lxe, XV, Ven, KAs, _jn, edt, Ch, u0, vSe, tse, ESe } from "/$bunfs/root/chunk-6g4165br.js";
import { Vi } from "/$bunfs/root/chunk-kjg6txrm.js";
import { KKe } from "/$bunfs/root/chunk-9k5s9e6d.js";
import { v_e } from "/$bunfs/root/chunk-w572kpvt.js";
import { P4 } from "/$bunfs/root/chunk-7r939afe.js";
import { sdt, oCs, mMt, Qen, sCs, _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
import { E, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D, zi } from "/$bunfs/root/chunk-tb7m3r21.js";
import { lstat, readdir, stat, unlink } from "fs/promises";
import { connect } from "net";
import { basename, dirname, join } from "path";
function IHn(e) {
    if (O() === "windows") {
        return null;
    }
    let n = re(e);
    if (n < 0) {
        return null;
    }
    try {
        return Bun.ant.getPeerUid(n);
    } catch (error) {
        t(`[daemon] peer uid lookup failed: ${error instanceof Error ? error.message : String(error)}`, {
            level: "warn"
        });
        return null;
    }
}
function Nus(e, n = IHn) {
    let r = process.getuid?.();
    if (r == null) {
        return null;
    }
    let i = n(e);
    if (i == null) {
        return null;
    }
    if (i === r) {
        return null;
    }
    let d = `permission denied: connecting uid ${i} != daemon uid ${r} (retry without sudo, or as the daemon owner)`;
    t(`[daemon] rejecting control connection: ${d}`, {
        level: "error"
    });
    return d;
}
function sst(e) {
    if (O() === "windows") {
        return;
    }
    let n = re(e);
    try {
        let r = n < 0 ? null : Bun.ant.getPeerPid(n);
        if (r !== null && r > 0) {
            return r;
        }
        t(`[peer-cred] peer pid unavailable (fd=${n}, got=${r})`, {
            level: "warn"
        });
        return;
    } catch (error) {
        t(`[peer-cred] peer pid lookup failed: ${error instanceof Error ? error.message : String(error)}`, {
            level: "warn"
        });
        return;
    }
}
function re({ _handle }) {
    if (typeof _handle?.fd === "number") {
        return _handle.fd;
    }
    return -1;
}
function $us() {
    return false;
}
const P8t = 1048576;
function N(tokens, n, r, bucketCapacity, refillPerSecond) {
    let m = Math.max(0, r - n) / 1000;
    return Math.min(bucketCapacity, tokens + m * refillPerSecond);
}
function M(tokens) {
    return tokens >= 1;
}
function U(e, n, maxTrackedSenders, i, d = ()=>true) {
    let m = e.get(n);
    if (m !== undefined) {
        e.delete(n);
        e.set(n, m);
        return m;
    }
    while(e.size >= Math.max(1, maxTrackedSenders)){
        let l;
        for (let [s, o] of e){
            if (d(o)) {
                l = s;
                break;
            }
        }
        l ??= e.keys().next().value;
        if (l === undefined) {
            break;
        }
        e.delete(l);
    }
    let g = i();
    e.set(n, g);
    return g;
}
const OHn = {
    bucketCapacity: 30,
    refillPerSecond: 0.5,
    dedupWindowMs: 30000,
    maxSelfHops: 10,
    maxChainLength: 28,
    maxTrackedSenders: 256
};
function he(e, n) {
    if (!e || n.size === 0) {
        return 0;
    }
    let r = 0;
    for (let i of e){
        if (n.has(i)) {
            r++;
        }
    }
    return r;
}
function Mio(e = {}, n) {
    let r = {
        ...OHn,
        now: ()=>Date.now(),
        ...e
    };
    let i = ()=>{
        if (n) {
            return {
                ...r,
                ...n()
            };
        }
        return r;
    };
    let d = new Map;
    function m(senderKey, o) {
        return U(d, senderKey, o.maxTrackedSenders, ()=>({
                tokens: o.bucketCapacity,
                lastRefill: o.now(),
                lastBody: undefined,
                lastBodyAt: 0
            }));
    }
    function checkHopChain(s, o) {
        let c = i();
        if (s !== undefined && s.length > c.maxChainLength) {
            return {
                admitted: false,
                reason: "hop-runaway"
            };
        }
        if (he(s, o) >= c.maxSelfHops) {
            return {
                admitted: false,
                reason: "hop-loop"
            };
        }
    }
    function admit(s) {
        let o = i();
        let c = o.now();
        let R = checkHopChain(s.hopChain, s.ownTokens);
        if (R) {
            return R;
        }
        let w = m(s.senderKey, o);
        if (w.lastBody !== undefined && w.lastBody === s.body && c - w.lastBodyAt < o.dedupWindowMs) {
            return {
                admitted: false,
                reason: "duplicate"
            };
        }
        w.tokens = N(w.tokens, w.lastRefill, c, o.bucketCapacity, o.refillPerSecond);
        w.lastRefill = c;
        if (!M(w.tokens)) {
            return {
                admitted: false,
                reason: "rate-limited"
            };
        }
        w.tokens -= 1;
        w.lastBody = s.body;
        w.lastBodyAt = c;
        return {
            admitted: true
        };
    }
    return {
        admit,
        checkHopChain,
        trackedSenderCount: ()=>d.size
    };
}
const Re = {
    "rate-limited": true,
    duplicate: true,
    "hop-loop": true,
    "hop-runaway": true,
    "queue-full": true
};
function Ee(e) {
    return typeof e === "string" && Object.hasOwn(Re, e);
}
function Fus(e) {
    if (Ee(e)) {
        return e;
    }
}
const Hio = 256;
const B = 60000;
const oe = 256;
const ke = 20;
function Dio(e) {
    Vi().ingress.ownUdsHopToken = e === undefined ? undefined : KKe(e);
}
function I8t(e) {
    Vi().ingress.ownBridgePeerAddressResolver = e;
}
function Lio() {
    let { ownUdsHopToken, ownBridgePeerAddressResolver } = Vi().ingress;
    let r = new Set;
    if (ownUdsHopToken) {
        r.add(ownUdsHopToken);
    }
    let i = ownBridgePeerAddressResolver?.();
    if (i) {
        r.add(KKe(i));
    }
    let d = v_e();
    if (d) {
        r.add(KKe(lxe(d)));
    }
    return r;
}
const Ie = {
    "rate-limited": "sender exceeded the peer message rate limit",
    duplicate: "identical to the previous message from this sender",
    "hop-loop": "message has already passed through this session (a peer messaging loop)",
    "hop-runaway": "peer relay chain is too long (runaway forwarding)",
    "queue-full": "this session has too many undelivered peer messages queued"
};
function W(e) {
    return {
        from: KAs(e.from) ? e.from : "(unrenderable sender address)",
        name: e.name ? Jct(e.name) : ""
    };
}
function Uus(e) {
    let { from } = W(e);
    let { name } = W(e);
    let i = name ? `@${name} (${from})` : from;
    let d = e.suppressed > 0 ? ` (+${e.suppressed} similar ${I(e.suppressed, "drop")} suppressed)` : "";
    return `Dropped a peer message from ${i}: ${Ie[e.reason]}.${d}`;
}
const xe = 500;
const Ae = 5000;
const De = 40;
function K(e, n) {
    if (e.timer !== undefined) {
        clearTimeout(e.timer);
        e.timer = undefined;
    }
    let { pending, pendingIds, pendingSend } = e;
    e.pending = 0;
    e.pendingIds = [];
    e.pendingSend = undefined;
    if (pending > 0 && pendingSend && n()) {
        return pendingSend(pendingIds);
    }
}
function Nio({ trailMs = Ae } = {}) {
    let n = new Map;
    let r = 0;
    let i = 0;
    function d(S = Date.now()) {
        if (S - r >= B) {
            r = S;
            i = 0;
        }
        if (i >= De) {
            return false;
        }
        i++;
        return true;
    }
    function noteDropForReceipt(S, P, b, h = Date.now()) {
        let y = n.get(S);
        if (y === undefined) {
            y = {
                lastImmediateAt: Number.NEGATIVE_INFINITY,
                pendingIds: [],
                pending: 0,
                timer: undefined,
                pendingSend: undefined
            };
        }
        n.delete(S);
        n.set(S, y);
        if (n.size > oe) {
            let A = n.keys().next().value;
            if (A !== undefined && A !== S) {
                let L = n.get(A);
                n.delete(A);
                if (L !== undefined) {
                    K(L, ()=>d(h));
                }
            }
        }
        if (h - y.lastImmediateAt >= B && y.pending === 0) {
            y.lastImmediateAt = h;
            if (d(h)) {
                b([]);
            }
            return;
        }
        y.pending++;
        if (P !== undefined && y.pendingIds.length < Hio) {
            y.pendingIds.push(P);
        }
        y.pendingSend = b;
        if (y.timer === undefined) {
            y.timer = setTimeout(K, trailMs, y, d);
            y.timer.unref?.();
        }
    }
    let g = new Map;
    let l = 0;
    let s = 0;
    let o = 0;
    function report(S, lastReportAt = Date.now()) {
        let b = W(S);
        t(`[peer-guard] drop ${S.reason} from ${b.from}${b.name ? ` (@${b.name})` : ""}`);
        let h = `${S.from}\x00${S.reason}`;
        let y = g.get(h);
        if (y && lastReportAt - y.lastReportAt < B) {
            y.suppressed++;
            return;
        }
        if (lastReportAt - l >= B) {
            l = lastReportAt;
            s = 0;
        }
        if (s >= ke) {
            o++;
            return;
        }
        s++;
        let suppressed = (y?.suppressed ?? 0) + o;
        o = 0;
        g.delete(h);
        g.set(h, {
            lastReportAt,
            suppressed: 0
        });
        if (g.size > oe) {
            let T = g.keys().next().value;
            if (T !== undefined) {
                g.delete(T);
            }
        }
        let L = {
            ...S,
            suppressed
        };
        t(`[peer-guard] Dropped peer message from ${b.from}${b.name ? ` (@${b.name})` : ""}: ${S.reason}${suppressed > 0 ? ` (+${suppressed} suppressed)` : ""}`, {
            level: "warn"
        });
        f("peer_loop_guard", S.reason);
        Vi().ingress.messageDropped.emit(L);
    }
    async function flushPendingReceipts(S = xe) {
        let P = [];
        for (let b of n.values()){
            if (b.pending > 0) {
                P.push(K(b, d));
            } else if (b.timer !== undefined) {
                clearTimeout(b.timer);
                b.timer = undefined;
            }
        }
        if (P.length === 0) {
            return;
        }
        await Promise.race([
            Promise.allSettled(P),
            Q(S, undefined, {
                unref: true
            })
        ]);
    }
    function dispose() {
        for (let S of n.values()){
            if (S.timer !== undefined) {
                clearTimeout(S.timer);
            }
        }
        n.clear();
    }
    return {
        report,
        noteDropForReceipt,
        flushPendingReceipts,
        dispose
    };
}
const maxQueuedPeerMessages = 50;
const V = {
    ...OHn,
    maxQueuedPeerMessages
};
const C = V;
const ve = p(()=>u({
        bucketCapacity: E().min(5).max(500).catch(C.bucketCapacity),
        refillPerSecond: E().min(0.05).max(50).catch(C.refillPerSecond),
        dedupWindowMs: E().int().min(0).max(600000).catch(C.dedupWindowMs),
        maxSelfHops: E().int().min(3).max(Ven).catch(C.maxSelfHops),
        maxChainLength: E().int().min(8).max(Ven - 1).catch(C.maxChainLength),
        maxTrackedSenders: E().int().min(16).max(100000).catch(C.maxTrackedSenders),
        maxQueuedPeerMessages: E().int().min(10).max(5000).catch(C.maxQueuedPeerMessages)
    }));
const Le = 300000;
function O8t() {
    let e = hz("tengu_harbor_kite_limits", V, Le);
    let n = ve().safeParse(e);
    if (!n.success) {
        t("[peer-guard] tengu_harbor_kite_limits is not an object; using defaults", {
            level: "warn"
        });
        return V;
    }
    return n.data;
}
function ie(e, n = Date.now) {
    let r = new Map;
    function i(l, s) {
        let { bucketCapacity, refillPerSecond, maxTrackedSenders } = e();
        let w = false;
        let S = U(r, l, maxTrackedSenders, ()=>{
            w = true;
            return {
                tokens: bucketCapacity,
                updatedAt: s,
                sentInBurst: 0,
                burstStartedAt: s
            };
        }, (P)=>N(P.tokens, P.updatedAt, s, bucketCapacity, refillPerSecond) >= bucketCapacity);
        if (!w) {
            S.tokens = N(S.tokens, S.updatedAt, s, bucketCapacity, refillPerSecond);
            S.updatedAt = s;
            let P = bucketCapacity / Math.max(refillPerSecond, 0.000000001) * 1000;
            if (S.tokens >= bucketCapacity || s - S.burstStartedAt > P) {
                S.sentInBurst = 0;
                S.burstStartedAt = s;
            }
        }
        return S;
    }
    function reserve(l) {
        let s = i(l, n());
        if (!M(s.tokens)) {
            return {
                ok: false,
                sentInBurst: s.sentInBurst
            };
        }
        s.tokens -= 1;
        s.sentInBurst += 1;
        let o = s;
        let c = false;
        return {
            ok: true,
            refund: ()=>{
                if (c) {
                    return;
                }
                c = true;
                o.tokens = Math.min(e().bucketCapacity, o.tokens + 1);
                o.sentInBurst = Math.max(0, o.sentInBurst - 1);
            }
        };
    }
    function credit(l) {
        let s = i(l, n());
        s.tokens = Math.min(e().bucketCapacity, s.tokens + 1);
        s.sentInBurst = Math.max(0, s.sentInBurst - 1);
    }
    function debit(l) {
        let s = i(l, n());
        s.tokens = Math.max(0, s.tokens - 1);
        s.sentInBurst += 1;
    }
    return {
        reserve,
        credit,
        debit
    };
}
const Te = /[0-9a-f]{32,}/gi;
function se(e) {
    return e.replace(Te, (n)=>`<hex:${ln(n)}>`);
}
function kg(e, n = 120) {
    if (/token/i.test(e)) {
        return "(withheld)";
    }
    return Ms(se(e), n);
}
function tV(e) {
    if (/token/i.test(e)) {
        return "(redacted: fragment may carry an auth token)";
    }
    return Ms(se(e), 200);
}
const de = "no_live_inbox";
const ae = "ENOINBOX";
const ue = "message_too_large";
function ce(e, n) {
    return new x(`Message too large for cross-session delivery: the serialized message is ${e.toLocaleString("en-US")} characters and the limit is ${n.toLocaleString("en-US")}. Shorten the message text \u2014 put bulk content in a file the recipient can read rather than in the message \u2014 or split it into smaller messages.`, "cross-session message exceeds the line cap", ue);
}
function ist(e) {
    return e instanceof x && e.errorClass === ue;
}
const pe = "sender_paced";
function fe(sentInBurst) {
    return new x(`Too many messages to this session just now: ${sentInBurst} were sent recently and more would be dropped by its rate limit, so this one was not sent. Batch what remains into one message, or wait a little before sending more.`, "cross-session sends to one target outpaced its inbox rate limit", pe);
}
function ast(e) {
    return e instanceof x && e.errorClass === pe;
}
function Ymr(e) {
    let n = v(e);
    return n === "ENOENT" || n === "ECONNREFUSED" || e instanceof x && e.errorClass === de;
}
class H extends x {
    kind;
    constructor(e, n){
        super(n, "no live inbox registered for the target pipe", de);
        this.name = "NoLiveInboxError";
        this.kind = e;
    }
}
function Xmr(e) {
    return e instanceof H && e.kind === "unusable";
}
function m_e(e) {
    if (Xmr(e)) {
        return "busy";
    }
    if (Ymr(e)) {
        return "gone";
    }
    let n = v(e);
    if (n === "EBUSY" || n === "EAGAIN") {
        return "busy";
    }
    return "other";
}
function lst(e) {
    return ` \u2014 the peer process may have restarted, so this socket path is stale. Call ${e} to get the current address.`;
}
const $io = " — the peer is alive but its pipe is momentarily busy. Retry the same address shortly.";
const Ce = " — this machine's session registry could not be read just now (a transient local condition). Retry the same address shortly.";
function MHn(e) {
    if (Xmr(e)) {
        return Ce;
    }
    return $io;
}
class b5 extends Error {
    refusal;
    constructor(e, n){
        super(n);
        this.name = "UdsSendRefusedError";
        this.refusal = e;
    }
}
function x4(e) {
    if (e instanceof b5 || Ymr(e) || ast(e) || ist(e)) {
        return true;
    }
    let n = v(e);
    return n === "EBUSY" || n === "EAGAIN" || n === "EACCES";
}
function He(e) {
    if (typeof e !== "object" || e === null) {
        return false;
    }
    let { name, until, sessionId } = e;
    return typeof name === "string" && mMt(until) && (sessionId === undefined || typeof sessionId === "string");
}
function Ge(formerNames) {
    if (!Array.isArray(formerNames)) {
        return [];
    }
    return formerNames.filter(He).slice(0, hEr).map(({ name, until, sessionId })=>({
            name: ne(name, wP),
            until,
            ...sessionId !== undefined && {
                sessionId: ne(sessionId, wP)
            }
        }));
}
function je() {
    return Vi().outbound.pacer ??= ie(O8t);
}
const Ke = {
    ok: true,
    refund: ()=>{}
};
function We() {
    if (a.CLAUDE_CODE_HARBOR_KITE_PACING_OFF) {
        return false;
    }
    return !k("tengu_harbor_kite_pacing_off", false);
}
function Fio(e) {
    be(e, (n, r)=>n.credit(r));
}
function Jmr(e) {
    be(e, (n, r)=>n.debit(r));
}
function be(e, n) {
    let pacer = Vi().outbound.pacer;
    if (!pacer) {
        return;
    }
    let { scheme, target } = Ch(e);
    if (scheme !== "uds") {
        return;
    }
    n(pacer, qT(target) ?? target);
}
async function M8t(e, n, r, i, file_attachments, m, g, { trackReceipts = true, expectPeerPid, expectPeerProcStart, fromPlugin, recipientName } = {}) {
    let w = S5();
    let from = w ? XV(w) : undefined;
    let P = k("tengu_tidy_fern", true) ? SEr() : undefined;
    let content = edt(from, i, n, P, _jn(m, from ? KKe(from) : undefined), g);
    let h = P4();
    let y = {
        ...h,
        type: "user",
        message: {
            role: "user",
            content
        },
        priority: "next",
        from,
        ...fromPlugin !== undefined && {
            from_plugin: fromPlugin
        },
        ...(file_attachments?.length ?? 0) > 0 && {
            file_attachments
        }
    };
    let preflightedJson = Pe(y);
    let T = (from !== undefined || O() !== "windows") && We() ? je().reserve(qT(e) ?? e) : Ke;
    if (!T.ok) {
        t(`[uds-client] paced: not sending to ${kg(e)} \u2014 ${T.sentInBurst} sent this burst; its inbox rate limit would drop more`);
        throw fe(T.sentInBurst);
    }
    t(`[uds-client] Sending ${n.length} chars to ${kg(e)}`);
    if (trackReceipts) {
        Xe(h.msg_id, XV(e), recipientName);
    }
    try {
        await we(e, y, r, {
            noFollowSymlink: true,
            preflightedJson,
            ...expectPeerPid !== undefined && {
                expectPeerPid
            },
            ...expectPeerProcStart !== undefined && {
                expectPeerProcStart
            }
        });
    } catch (error) {
        if (x4(error)) {
            T.refund();
            if (trackReceipts) {
                ze(h.msg_id);
            }
        }
        throw error;
    }
    return {
        msgId: h.msg_id
    };
}
const ye = 200;
function Xe(msgId, to, recipientName) {
    let outstandingSends = Vi().receipts.outstandingSends;
    if (outstandingSends.length >= ye) {
        outstandingSends.shift();
    }
    outstandingSends.push({
        msgId,
        to,
        handle: Jct(recipientName ?? "", Infinity) || undefined
    });
}
function ze(msg_id) {
    let outstandingSends = Vi().receipts.outstandingSends;
    let r = outstandingSends.findIndex((i)=>i.msgId === msg_id);
    if (r !== -1) {
        outstandingSends.splice(r, 1);
    }
}
function Uio(e, n) {
    if (typeof e !== "string") {
        return;
    }
    let { outstandingSends, awaitingTerminal } = Vi().receipts;
    let d = outstandingSends.findIndex((g)=>g.msgId === e);
    if (d !== -1) {
        let [g] = outstandingSends.splice(d, 1);
        if (!g) {
            return;
        }
        if (n === "held") {
            if (awaitingTerminal.length >= ye) {
                awaitingTerminal.shift();
            }
            awaitingTerminal.push(g);
        }
        return {
            sent: g,
            wasHeld: false
        };
    }
    let m = awaitingTerminal.findIndex((g)=>g.msgId === e);
    if (m !== -1 && n !== "held") {
        let [g] = awaitingTerminal.splice(m, 1);
        if (g) {
            return {
                sent: g,
                wasHeld: true
            };
        }
        return undefined;
    }
}
function Bio(e) {
    let n = new Map;
    if (e.length === 0) {
        return n;
    }
    let r = new Set(e);
    let { outstandingSends, awaitingTerminal } = Vi().receipts;
    for (let m of [
        outstandingSends,
        awaitingTerminal
    ]){
        let g = m === awaitingTerminal;
        for(let l = 0; l < m.length;){
            let s = m[l];
            if (r.delete(s.msgId)) {
                m.splice(l, 1);
                let o = n.get(s.to) ?? {
                    sends: [],
                    wereHeld: 0
                };
                o.sends.push(s);
                if (g) {
                    o.wereHeld++;
                }
                n.set(s.to, o);
            } else {
                l++;
            }
        }
    }
    return n;
}
function Hce(e, n, r = {}) {
    return lCt(e, n, P4(), r).then(()=>{});
}
async function lCt(e, n, r = P4(), { expectPeerPid, expectPeerProcStart, storageV5 } = {}) {
    t(`[uds-client] Sending control:${n.action} to ${kg(e)}`);
    await we(e, {
        type: "control",
        ...n,
        ...r
    }, storageV5, {
        noFollowSymlink: true,
        ...expectPeerPid !== undefined && {
            expectPeerPid
        },
        ...expectPeerProcStart !== undefined && {
            expectPeerProcStart
        }
    });
    return {
        msgId: r.msg_id
    };
}
const Ve = 150;
async function H8t(e) {
    let n = qT(e);
    if (n === undefined) {
        return;
    }
    for (let r of (await F())){
        if (!r.sock || qT(r.sock) !== n) {
            continue;
        }
        if (await Y(r)) {
            return {
                pid: r.pid,
                features: r.peerFeatures,
                sessionId: r.sessionId,
                procStart: r.procStartFt ?? r.procStart
            };
        }
    }
}
async function jio(e) {
    let n = D(e);
    let r = new Map;
    if (n.length === 0) {
        return r;
    }
    let i = qV();
    let m = (await Promise.all(n.map((l)=>G(i, `${l}.json`)))).filter((l)=>l !== null && Boolean(l.sock));
    let g = await Promise.all(m.map((l)=>Y(l)));
    m.forEach((l, s)=>{
        if (g[s] && l.sock) {
            r.set(l.pid, l.sock);
        }
    });
    return r;
}
async function gzs(e, n) {
    let r = await G(qV(), `${e}.json`, {
        rejectTornLiveRecord: true
    });
    if (r?.jobId === n) {
        return r.status;
    }
}
async function Y(e) {
    let n = e.procStartFt ?? e.procStart;
    if (n === undefined || Nm(e.pid)) {
        return false;
    }
    return await X_(e.pid, n) === true;
}
function Pe(e) {
    let n = _(e);
    let r = NAs + n.length + 1;
    if (r > P8t) {
        throw ce(r, P8t);
    }
    return n;
}
async function Je(path) {
    let n = qT(path);
    if (n === undefined) {
        return false;
    }
    for (let r of (await F())){
        if (!r.sock || qT(r.sock) !== n) {
            continue;
        }
        if (Nm(r.pid)) {
            continue;
        }
        if ((r.procStartFt ?? r.procStart) !== undefined) {
            if (await Y(r)) {
                return true;
            }
            continue;
        }
        if (_a(r.pid)) {
            return true;
        }
    }
    return false;
}
async function we(path, n, r, { noFollowSymlink = false, expectPeerPid, expectPeerProcStart, preflightedJson } = {}) {
    let l = preflightedJson ?? Pe(n);
    if (!u0(path)) {
        throw new b5("non-local", `Refusing to connect: not a usable local IPC path (remote/UNC host, or a pipe name with extra segments or a trailing dot/space): ${path}`);
    }
    let requireLiveOwner = pjn();
    let o = await LAs(path, r, {
        requireLiveOwner
    });
    let c = o.kind === "token" ? o.token : undefined;
    if (requireLiveOwner && o.kind !== "token") {
        if (!(o.kind === "no-key" && await Je(path))) {
            throw new H(o.kind, `No running session has registered an inbox at ${path} (${ae}: ${o.kind}) \u2014 refusing to send to an unvouched pipe`);
        }
        c = undefined;
    }
    let R = c !== undefined ? ySo(c) : "";
    if (noFollowSymlink && !(O() === "windows" && ESe(path) !== undefined)) {
        let S;
        try {
            S = (await lstat(path)).isSymbolicLink();
        } catch (error) {
            if (z(error)) {
                throw error;
            }
            t(`[uds-client] reply target unvettable: ${v(error) ?? "lstat failed"}`);
            throw new b5("unvettable", "Refusing to send: cannot vet reply target");
        }
        if (S) {
            throw new b5("symlink", "Refusing to send: reply target is a symlink");
        }
    }
    let w = R + l + `
`;
    return new Promise((resolve, reject)=>{
        let b = connect({
            path
        });
        let h = false;
        b.setTimeout(5000, ()=>{
            h = true;
            b.destroy();
            reject(Error(`Timed out sending to ${path}`));
        });
        b.on("error", (y)=>{
            h = true;
            reject(y);
        });
        b.on("connect", ()=>{
            if (expectPeerPid !== undefined && O() !== "windows") {
                let y = sst(b);
                if (y === undefined) {
                    h = true;
                    b.destroy();
                    reject(new b5("endpoint-unverifiable", "Refusing to send: connected endpoint identity could not be read"));
                    return;
                }
                if (y !== expectPeerPid) {
                    h = true;
                    b.destroy();
                    t(`[uds-client] connected endpoint is pid ${y}, expected ${expectPeerPid} \u2014 refusing to write`);
                    reject(new b5("wrong-endpoint", "Refusing to send: connected endpoint is not the expected process"));
                    return;
                }
                let A = process.getuid?.();
                let L = IHn(b);
                if (A !== undefined && L === null) {
                    h = true;
                    b.destroy();
                    reject(new b5("endpoint-unverifiable", "Refusing to send: connected endpoint owner could not be read"));
                    return;
                }
                if (A !== undefined && L !== A) {
                    h = true;
                    b.destroy();
                    t(`[uds-client] connected endpoint is owned by uid ${L}, not ours \u2014 refusing to write`);
                    reject(new b5("wrong-endpoint", "Refusing to send: connected endpoint is not owned by this user"));
                    return;
                }
                if (expectPeerProcStart !== undefined && TSe(y) !== expectPeerProcStart) {
                    h = true;
                    b.destroy();
                    t(`[uds-client] connected endpoint pid ${y} is not the process that wrote to us (start token differs \u2014 recycled pid) \u2014 refusing to write`);
                    reject(new b5("wrong-endpoint", "Refusing to send: connected endpoint is a different process with the expected pid"));
                    return;
                }
            }
            b.write(w);
            if (O() === "macos") {
                setTimeout((y)=>{
                    if (!y.destroyed) {
                        y.end();
                    }
                }, Ve, b);
            } else {
                b.end();
            }
        });
        b.on("close", ()=>{
            if (!h) {
                t(`[uds-client] Sent to ${kg(path)}`);
            }
            resolve();
        });
    });
}
function q(sock) {
    return new Promise((resolve)=>{
        if (!u0(sock)) {
            resolve(false);
            return;
        }
        let r = connect({
            path: sock
        });
        let i = (d)=>{
            r.destroy();
            resolve(d);
        };
        r.on("connect", ()=>i(true));
        r.on("error", (d)=>i(v(d) === "EBUSY"));
        r.setTimeout(250, ()=>i(false));
    });
}
class D8t extends Error {
    code;
    constructor(e){
        super("session records directory unreadable");
        this.code = e;
        this.name = "SessionRecordsUnreadableError";
    }
}
async function F(e) {
    let n = qV();
    let r;
    try {
        r = await readdir(n);
    } catch (error) {
        if (e?.rejectUnreadable && !z(error)) {
            throw new D8t(v(error));
        }
        return [];
    }
    return (await Promise.all(r.filter((d)=>/^\d+\.json$/.test(d)).map((d)=>G(n, d, {
            rejectTornLiveRecord: e?.rejectTornLiveRecord
        })))).filter((d)=>d !== null);
}
async function G(e, n, r) {
    let i = false;
    let d;
    let file = join(e, n);
    try {
        let g = oCs(n);
        if (g === null) {
            return null;
        }
        let { pid } = g;
        if (!g.canonical) {
            unlink(file).catch(()=>{});
            return null;
        }
        d = pid;
        let s = await Ba(file, sdt);
        if (s === null) {
            return null;
        }
        i = true;
        let o = X(s);
        let c = sCs(o);
        return {
            sock: typeof o.messagingSocketPath === "string" ? o.messagingSocketPath : "",
            cwd: c.cwd,
            startedAt: c.startedAt,
            ...Qen(o.nameSince) !== undefined && {
                nameSince: Qen(o.nameSince)
            },
            procStart: c.procStart,
            ...c.procStartFt !== undefined && {
                procStartFt: c.procStartFt
            },
            name: typeof o.name === "string" ? o.name : undefined,
            nameSource: o.nameSource === "user" || o.nameSource === "peer" || o.nameSource === "derived" || o.nameSource === "collision" || o.nameSource === "auto" || o.nameSource === "hook" ? o.nameSource : undefined,
            formerNames: Ge(o.formerNames),
            kind: c.kind,
            sessionId: c.sessionId,
            jobId: typeof o.jobId === "string" ? o.jobId : undefined,
            parkedJobId: typeof o.parkedJobId === "string" ? o.parkedJobId : undefined,
            spare: o.spare === true,
            bridgeSessionId: typeof o.bridgeSessionId === "string" ? o.bridgeSessionId : undefined,
            logPath: typeof o.logPath === "string" ? o.logPath : undefined,
            status: c.status,
            waitingFor: typeof o.waitingFor === "string" ? o.waitingFor : undefined,
            ...{},
            updatedAt: Qen(o.updatedAt),
            statusUpdatedAt: Qen(o.statusUpdatedAt),
            entrypoint: c.entrypoint,
            ...p1n(o.hostSessionId) !== undefined && {
                hostSessionId: p1n(o.hostSessionId)
            },
            ...c.pidDomain !== undefined && {
                pidDomain: c.pidDomain
            },
            agent: typeof o.agent === "string" ? o.agent : undefined,
            state: typeof o.state === "string" ? o.state : undefined,
            detail: typeof o.detail === "string" ? o.detail : undefined,
            tempo: o.tempo === "active" || o.tempo === "idle" || o.tempo === "blocked" ? o.tempo : undefined,
            needs: typeof o.needs === "string" ? o.needs : undefined,
            peerProtocol: typeof o.peerProtocol === "number" ? o.peerProtocol : undefined,
            ...Array.isArray(o.peerFeatures) && {
                peerFeatures: Ye(o.peerFeatures)
            },
            ...{},
            tmux: typeof o.tmux === "string" ? o.tmux : undefined,
            pid,
            file
        };
    } catch  {
        if (r?.rejectTornLiveRecord && i && d !== undefined && _a(d)) {
            if (!r.isReread) {
                await Q(fjn);
                return G(e, n, {
                    ...r,
                    isReread: true
                });
            }
            let [g, l] = await Promise.all([
                stat(file).then((s)=>s.mtimeMs, ()=>{}),
                w3e(d)
            ]);
            if (g !== undefined && l !== null && l > g + 2000) {
                return null;
            }
            if (l === null && !_a(d)) {
                return null;
            }
            throw new D8t("EBADRECORD");
        }
        return null;
    }
}
function _e(e, n) {
    return e.pidDomain !== undefined && e.pidDomain !== n;
}
async function hzs(e, n) {
    let r = await KT();
    return e.some((i)=>i.sessionId === n && _e(i, r));
}
async function L8t() {
    return (await F({
        rejectUnreadable: true
    })).map(({ file, ...rest })=>rest);
}
function J(file, pid, r, i) {
    if (j() && i !== undefined) {
        i.delete($e.session(basename(file))).then((d)=>{
            if (d.ok && d.value.existed) {
                return wEr(dirname(file), pid, r, i);
            }
        }).catch(()=>{});
        return;
    }
    unlink(file).then(()=>wEr(dirname(file), pid, r, i)).catch(()=>{});
}
async function _Q(e, n) {
    let r = await F({
        rejectUnreadable: n?.rejectUnreadable === true,
        rejectTornLiveRecord: n?.rejectUnreadable === true
    });
    let i = n?.rejectUnreadable === true ? await KT() : undefined;
    let d = (c)=>i !== undefined && _e(c, i);
    let m = r.map((c)=>d(c) || _a(c.pid));
    let g = await Promise.all(r.map((c, R)=>m[R] && (d(c) || Hw(c.pid, c.procStartFt ?? c.procStart))));
    let l = await aFe();
    let s = l ? await KT() : "";
    let o = [];
    for(let c = 0; c < r.length; c++){
        let { file, ...rest } = r[c];
        if (g[c]) {
            o.push(rest);
        } else if (l && h1n(rest, s) && Nm(rest.pid)) {
            J(file, rest.pid, s, e);
        }
    }
    return o;
}
function S5() {
    return eT.CLAUDE_CODE_MESSAGING_SOCKET;
}
async function Wio() {
    let e = S5();
    if (e === undefined) {
        return false;
    }
    let n = await F();
    let r = await KT();
    let i = n.filter((m)=>m.sock && m.pid !== process.pid && !ee(m) && u3e({
            sock: m.sock
        }) && tse(m.sock, e));
    return (await Promise.all(i.map(async (m)=>await Z(m, r) === "present" && await q(m.sock)))).some(Boolean);
}
async function Z(e, n) {
    if (e.pidDomain !== n) {
        return "present";
    }
    if (Nm(e.pid)) {
        return "gone";
    }
    let r = e.procStartFt ?? e.procStart;
    if (r === undefined) {
        return "present";
    }
    let i = await Fl(e.pid);
    if (i === undefined || ASe(r, i)) {
        return "present";
    }
    if (await X_(e.pid, r) === false) {
        return "recycled";
    }
    return "present";
}
async function zio(e) {
    let n = S5();
    let r = (await F({
        rejectUnreadable: true
    })).filter((s)=>s.sock && !(n && vSe(s.sock, n)) && !ee(s));
    let [i, d] = await Promise.all([
        aFe(),
        KT()
    ]);
    let [m, g] = await Promise.all([
        Promise.all(r.map((s)=>q(s.sock))),
        Promise.all(r.map((s)=>Z(s, d)))
    ]);
    let l = [];
    for(let s = 0; s < r.length; s++){
        let { file, ...rest } = r[s];
        if (g[s] === "gone") {
            if (i && Nm(rest.pid)) {
                J(file, rest.pid, d, e);
            }
        } else if (g[s] === "recycled") {
            continue;
        } else if (m[s]) {
            l.push(rest);
        } else if (i && h1n(rest, d) && Nm(rest.pid)) {
            J(file, rest.pid, d, e);
        }
    }
    return l;
}
async function N8t(e) {
    let n = S5();
    let r = await F();
    let i = (o)=>Boolean(o.sock) && !(n && vSe(o.sock, n));
    let d = new Set(r.filter((o)=>o.sessionId === e && o.parkedJobId !== undefined).map((o)=>o.parkedJobId));
    let m = r.filter((o)=>i(o) && !ee(o));
    let g = m.filter((o)=>o.sessionId === e);
    let l = m.filter((o)=>o.sessionId !== e && o.jobId !== undefined && d.has(o.jobId));
    let s = await KT();
    for (let o of g.concat(l)){
        let { file, ...rest } = o;
        if (await Z(rest, s) === "present" && await q(rest.sock)) {
            return rest;
        }
    }
    return null;
}
function ee(e) {
    return e.spare === true || e.parkedJobId !== undefined;
}
function Ye(peerFeatures) {
    return zi(peerFeatures).filter((n)=>/^[a-z0-9_]{1,32}$/.test(n)).slice(0, 16);
}
export { kg, tV, IHn, Nus, sst, $us, P8t, OHn, Mio, Fus, Hio, Dio, I8t, Lio, Uus, Nio, O8t, ist, ast, Ymr, Xmr, m_e, lst, $io, MHn, b5, x4, Fio, Jmr, M8t, Uio, Bio, Hce, lCt, H8t, jio, gzs, D8t, hzs, L8t, _Q, S5, Wio, zio, N8t };
