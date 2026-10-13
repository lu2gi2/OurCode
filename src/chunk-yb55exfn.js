import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ye, nc, W, l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge, qa } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { NO, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { zd, lLn, cLn, FRt, SNe, qI, bms, Sms, pit, uLn, gLn, vms, udo, Ems, kms, yLn, Rms, Pms, NW, W4, Hk, pS } from "/$bunfs/root/chunk-4r6b8efh.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { EMt, pxe, ny, $y, RSe } from "/$bunfs/root/chunk-xb9cceab.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { _8, k, v8, E8 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { cB, not } from "/$bunfs/root/chunk-xj62f004.js";
import { R2, fW, AL } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { kme, djt, IOe } from "/$bunfs/root/chunk-hvx9h8xm.js";
import { nl } from "/$bunfs/root/chunk-8yak0fbv.js";
import { rv } from "/$bunfs/root/chunk-feb99xjc.js";
import { oc, fjt } from "/$bunfs/root/chunk-cerrsv89.js";
import { F6, mX, cEe } from "/$bunfs/root/chunk-xvpf4sv2.js";
import { mjt, gjt, hjt } from "/$bunfs/root/chunk-qwmd9wje.js";
import { tMe } from "/$bunfs/root/chunk-9ffcxaze.js";
import { Kn } from "/$bunfs/root/chunk-rhjwzamj.js";
import { Wre } from "/$bunfs/root/chunk-b7w13qrv.js";
import { ii } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { In } from "/$bunfs/root/chunk-xwkmkvm4.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
async function te(sender, n, r, args, u) {
    if (!cEe.has(r)) {
        throw Error("callPlumbing: not a plumbing tool");
    }
    if (u.signal.aborted) {
        return {
            kind: "cancelled"
        };
    }
    let s = W4(u.deadlineMs);
    let request = {
        subtype: "remote_plumbing_call",
        ...Pms({
            instanceId: n.instanceId,
            host: n.host,
            name: r,
            args,
            issuedAt: Date.now(),
            deadlineMs: s
        })
    };
    let p;
    try {
        p = sender.sendServedCallRequest({
            request,
            accepts: Ce,
            signal: u.signal
        });
    } catch (error) {
        return {
            kind: "transport_error",
            detail: `send failed: ${l(error)}`
        };
    }
    if (!p.sent) {
        p.reply.catch(()=>{});
        return {
            kind: "unreachable",
            detail: "the session stream is closed; nothing was sent"
        };
    }
    let f = false;
    let _ = setTimeout(()=>{
        f = true;
        p.cancel();
    }, s);
    try {
        let g = await p.reply;
        return Re(g) ?? {
            kind: "transport_error",
            detail: "the answer was not a tool result"
        };
    } catch (error) {
        if (f) {
            return {
                kind: "timed_out",
                capMs: s
            };
        }
        if (u.signal.aborted) {
            return {
                kind: "cancelled"
            };
        }
        if (error instanceof nc) {
            return {
                kind: "dropped",
                detail: "the session stream closed after the request left"
            };
        }
        return {
            kind: "transport_error",
            detail: l(error)
        };
    } finally{
        clearTimeout(_);
    }
}
function oe(e) {
    let n = typeof e === "object" && e !== null && "result" in e ? e.result : undefined;
    if (typeof n !== "object" || n === null) {
        return;
    }
    if (Array.isArray(n.content)) {
        return n;
    }
}
function Ce(e) {
    try {
        if (uLn(e)) {
            return false;
        }
        return oe(e) !== undefined;
    } catch  {
        return false;
    }
}
function Re(e) {
    let n = oe(e);
    if (n === undefined) {
        return;
    }
    let { content, structuredContent, isError } = n;
    return {
        kind: "result",
        structuredContent,
        text: content.flatMap((s)=>{
            if (typeof s === "object" && s !== null && s.type === "text" && typeof s.text === "string") {
                return [
                    s.text
                ];
            }
            return [];
        }).join(`
`),
        isError: isError === true
    };
}
const EXn = {
    maxRequestBytes: 4128768,
    defaultDeadlineMs: 58000
};
const re = 60000;
const qQe = 10000;
function ajs(e) {
    let n = {
        stale: false,
        quietMisses: []
    };
    let r = e.limits ?? EXn;
    return {
        kind: "session",
        limits: r,
        call: (o, u, s, m)=>Ee(e, n, r, o, u, s, m),
        markUnresponsive: ()=>{
            n.stale = true;
        },
        checkLive: async ({ signal, hold })=>{
            let s = e.host();
            let m = s?.live();
            let p = e.now ?? Date.now;
            if (s === undefined || m === undefined || signal.aborted || !(m.status === "offline" || n.stale || p() - m.lastHeardAt > re)) {
                return;
            }
            if (ie(s, p())) {
                return j(s);
            }
            let f = await ae(e, n, s, signal);
            if (f === "missed" && hold !== undefined && s.live()?.status === "online" && !n.stale) {
                hold.notify("waiting");
                f = await Ie(e, n, s, signal, hold.ms);
                if (f === "there") {
                    hold.notify("back");
                }
            }
            if (f !== "missed") {
                return;
            }
            s.markAway("probe_missed");
            return j(s);
        },
        saidAsleep: ()=>e.host()?.live()?.asleepSince !== undefined,
        probeLive: async ({ signal })=>{
            let u = e.host();
            if (u === undefined || u.live() === undefined || signal.aborted) {
                return;
            }
            let s = (e.now ?? Date.now)();
            let m = await V(e, u, signal);
            let p = (u.live()?.lastHeardAt ?? -Infinity) > s;
            if (m === "answered" || p) {
                n.stale = false;
                return true;
            }
            if (m !== "missed") {
                return;
            }
            u.markAway("probe_missed");
            return false;
        },
        isAway: ()=>e.host()?.live()?.status === "offline",
        silence: {
            quietForMs: ()=>{
                let o = e.host()?.live();
                if (o === undefined || o.status === "offline" || o.asleepSince !== undefined) {
                    return undefined;
                }
                return (e.now ?? Date.now)() - o.lastHeardAt;
            },
            probe: (o)=>xe(e, n, o),
            missed: ()=>de(e, n),
            ownStreamFrameAt: ()=>e.sender.readStreamFrameAt?.(),
            giveUp: ()=>{
                e.host()?.markAway("probe_missed");
            }
        },
        isRechecked: ()=>e.rechecked?.() === true,
        ...e.sender.withdrawStandingServedCall !== undefined && {
            withdrawStanding: (o)=>{
                e.sender.withdrawStandingServedCall?.(o);
            }
        },
        callPlumbing: async (o, u, s)=>{
            let m = e.host();
            if (m === undefined) {
                return {
                    kind: "unreachable",
                    detail: "the machine is no longer announced on this session"
                };
            }
            let p = await te(e.sender, {
                instanceId: m.instanceId,
                host: m.hostName
            }, o, u, s);
            if (p.kind === "result") {
                m.heard((e.now ?? Date.now)());
            }
            return p;
        }
    };
}
function j(e) {
    if (e.live()?.asleepSince !== undefined) {
        return {
            kind: "unreachable",
            detail: "it said it was going to sleep",
            machineNotAnswering: true,
            saidAsleep: true
        };
    }
    return {
        kind: "unreachable",
        detail: "the machine did not answer a liveness check on this session; nothing was sent",
        machineNotAnswering: true
    };
}
function ie(e, n) {
    let r = e.live()?.asleepSince;
    return r !== undefined && n >= r && n - r < lLn;
}
async function Ee(e, state, r, o, input, envelope, m) {
    let p = e.now ?? Date.now;
    if (m.signal.aborted) {
        return {
            kind: "cancelled"
        };
    }
    let entry = e.host();
    let _ = entry?.live();
    if (entry === undefined || _ === undefined) {
        return {
            kind: "unreachable",
            detail: "the machine is not announcing on this session",
            machineNotAnswering: true
        };
    }
    let g = "op" in envelope && envelope.op === "outcome_of";
    if (!g && (_.status === "offline" || state.stale || p() - _.lastHeardAt > re)) {
        if (ie(entry, p())) {
            return j(entry);
        }
        let C = p();
        let A = await V(e, entry, m.signal);
        if (A === "cancelled") {
            return {
                kind: "cancelled"
            };
        }
        if (A === "unsent") {
            return {
                kind: "unreachable",
                detail: "this session's event stream is not accepting requests; nothing was sent"
            };
        }
        if (A === "stalled" || A === "taken_back") {
            return {
                kind: "stalled",
                capMs: e.probeDeadlineMs ?? qQe,
                request: "probe",
                takenBack: A === "taken_back"
            };
        }
        if (A === "stream_lost") {
            return {
                kind: "unreachable",
                detail: "this session could not complete the liveness check for a reason on its own side (its event stream closed, the service refused the write that carried it, or that write had not completed in time); the machine was not reached and nothing was sent"
            };
        }
        let x = A === "missed" && (entry.live()?.lastHeardAt ?? -Infinity) > C;
        if (A !== "answered" && !x) {
            if (A === "missed") {
                entry.markAway("probe_missed");
            }
            let D = e.host();
            let ne = D?.live();
            if (D === undefined || D.instanceId === entry.instanceId || ne === undefined || ne.status === "offline") {
                if (A === "gone") {
                    return {
                        kind: "unreachable",
                        detail: "the machine withdrew from this session while it was being asked whether it is still there; nothing was sent",
                        machineNotAnswering: true
                    };
                }
                return j(entry);
            }
            entry = D;
        }
        state.stale = false;
    }
    let w = W4(m.deadlineMs);
    let issuedAt = p();
    let R = entry.epoch();
    let sentUnderEpoch = R === undefined ? {} : {
        sentUnderEpoch: R
    };
    let leg = "op" in envelope ? envelope.op : envelope.approval ? 2 : 1;
    let M = fjt(leg);
    let y = {
        posts: 0
    };
    let onUpload = (phase)=>{
        switch(phase){
            case "sending":
                y.posts += 1;
                y.startedAt ??= p();
                oc(envelope.call_id, "post started", {
                    leg,
                    queue_ms: y.startedAt - issuedAt,
                    attempt: y.posts
                }, M);
                return;
            case "accepted":
                if (y.acceptedAt === undefined) {
                    y.acceptedAt = p();
                    try {
                        m.onAccepted?.();
                    } catch (error) {
                        t(`[remote-tools] a leg's acceptance was not reported: ${l(error)}`);
                    }
                }
                oc(envelope.call_id, "post accepted", {
                    leg,
                    post_ms: y.startedAt === undefined ? undefined : y.acceptedAt - y.startedAt,
                    attempt: y.posts
                }, M);
                return;
            case "not_accepted":
            case "indeterminate":
                oc(envelope.call_id, "post not accepted", {
                    leg,
                    phase,
                    attempt: y.posts
                }, M);
        }
    };
    let N;
    let sent;
    try {
        sent = e.sender.sendServedCallRequest({
            onUpload,
            request: {
                subtype: "remote_tool_call",
                ...Rms({
                    instanceId: entry.instanceId,
                    host: entry.hostName,
                    name: o,
                    input,
                    envelope,
                    toolUseId: m.toolUseId,
                    issuedAt,
                    deadlineMs: w
                })
            },
            accepts: (C)=>{
                if (!De(C, envelope.call_id)) {
                    return false;
                }
                if (g && uLn(C)) {
                    N = C;
                    return false;
                }
                return true;
            },
            signal: m.signal
        });
    } catch (error) {
        return {
            kind: "transport_error",
            detail: `send failed: ${l(error)}`
        };
    }
    if (!sent.sent) {
        return {
            kind: "unreachable",
            detail: "this session's event stream is closed; nothing was sent"
        };
    }
    oc(envelope.call_id, "sent", {
        leg,
        host_inst: entry.instanceId,
        host_epoch: R,
        deadline_ms: w
    });
    m.onSent?.({
        instanceId: entry.instanceId,
        epoch: R,
        requestId: sent.requestId
    });
    let withdrawable = !g && !("approval" in envelope && envelope.approval?.decision === "deny");
    let { settled, late } = await se(sent, w, m.signal, {
        holdAtDeadline: m.onHeldAtDeadline !== undefined,
        withdrawable
    });
    let O = (C)=>{
        let A = Ae(C, {
            state,
            limits: r,
            entry,
            sent,
            toolName: o,
            callId: envelope.call_id,
            capMs: w,
            held: late !== undefined,
            sentUnderEpoch,
            elapsedMs: ()=>p() - issuedAt,
            heardNow: ()=>p(),
            heldBelowFloorAnswer: ()=>N
        });
        if (A.kind === "result") {
            try {
                let x = p();
                let D = {
                    ...y.startedAt !== undefined && {
                        queueMs: y.startedAt - issuedAt
                    },
                    ...y.startedAt !== undefined && y.acceptedAt !== undefined && {
                        postMs: y.acceptedAt - y.startedAt
                    },
                    ...y.acceptedAt !== undefined && {
                        replyWaitMs: x - y.acceptedAt
                    },
                    totalMs: x - issuedAt,
                    posts: y.posts
                };
                oc(envelope.call_id, "answered", {
                    leg,
                    total_ms: D.totalMs,
                    queue_ms: D.queueMs,
                    post_ms: D.postMs,
                    reply_wait_ms: D.replyWaitMs,
                    posts: D.posts
                }, M);
                m.onTransit?.(D);
            } catch (error) {
                t(`[remote-tools] a leg's transit was not reported: ${l(error)}`);
            }
        }
        return A;
    };
    if (late !== undefined) {
        m.onHeldAtDeadline?.({
            late: late.then(O),
            withdraw: ()=>sent.cancel(),
            takeBack: ()=>withdrawable && sent.withdraw(),
            accepted: ()=>{
                let C = sent.delivery();
                return C === "delivered" || C === "untracked";
            }
        });
    }
    return O(settled);
}
function Ae(e, { state, limits, entry, sent, toolName, callId, capMs, held, sentUnderEpoch, elapsedMs, heardNow, heldBelowFloorAnswer }) {
    let R = ()=>{
        let T = heldBelowFloorAnswer();
        if (T === undefined) {
            return;
        }
        oc(callId, "query deadline; taking the below-floor answer held for it", {
            deadline_ms: capMs,
            host_inst: entry.instanceId
        });
        let E = X(T, elapsedMs());
        if (E.kind === "dropped") {
            return {
                ...E,
                ...sentUnderEpoch
            };
        }
        return E;
    };
    switch(e.kind){
        case "answered":
            {
                let T = X(e.payload, elapsedMs());
                if (Pe(T)) {
                    state.stale = false;
                    entry.heard(heardNow());
                }
                if (T.kind === "dropped") {
                    return {
                        ...T,
                        ...sentUnderEpoch
                    };
                }
                return T;
            }
        case "deadline":
            {
                let T = R();
                if (T !== undefined) {
                    return T;
                }
                if (held) {
                    oc(callId, "no answer by the deadline; request left standing, checking on it", {
                        deadline_ms: capMs,
                        host_inst: entry.instanceId
                    });
                    return {
                        kind: "timed_out",
                        capMs,
                        ...sentUnderEpoch
                    };
                }
                oc(callId, "no answer by the deadline; request withdrawn", {
                    deadline_ms: capMs,
                    host_inst: entry.instanceId,
                    error_replies_ignored: sent.errorRepliesIgnored()
                });
                if (capMs >= limits.defaultDeadlineMs) {
                    state.stale = true;
                }
                return {
                    kind: "timed_out",
                    capMs,
                    ...sentUnderEpoch
                };
            }
        case "stalled":
            oc(callId, e.takenBack ? "still queued here at the deadline; taken back before any write carried it" : "still queued here at the deadline; cancelled behind it", {
                deadline_ms: capMs,
                host_inst: entry.instanceId
            });
            return {
                kind: "stalled",
                capMs,
                request: "call",
                takenBack: e.takenBack
            };
        case "unconfirmed":
            {
                let T = R();
                if (T !== undefined) {
                    return T;
                }
                oc(callId, "deadline reached with the write carrying the request unresolved; withdrawn, delivery unknown", {
                    deadline_ms: capMs,
                    host_inst: entry.instanceId,
                    delivery: e.delivery
                });
                return {
                    kind: "dropped",
                    why: "write_unresolved",
                    detail: "the write carrying the request to the session service had not completed, or ended without an answer, by its deadline; whether the machine received it is unknown",
                    ...sentUnderEpoch
                };
            }
        case "cancelled":
            return {
                kind: "cancelled"
            };
        case "dropped":
            return {
                kind: "dropped",
                detail: "this session's event stream closed after the call was sent",
                ...sentUnderEpoch
            };
        case "undelivered":
            return {
                kind: "unreachable",
                detail: `the session service refused the request${e.status !== undefined ? ` (HTTP ${e.status})` : ""}; nothing was delivered`
            };
        case "delivery_unknown":
            return {
                kind: "dropped",
                detail: `an upload of the request ended without an answer and a later attempt was refused${e.status !== undefined ? ` (HTTP ${e.status})` : ""}; whether the machine received it is unknown`,
                ...sentUnderEpoch
            };
        case "gone":
            return {
                kind: "host_gone",
                why: e.why,
                unsent: e.unsent
            };
        case "failed":
            return {
                kind: "transport_error",
                detail: e.detail
            };
    }
}
async function se(e, n, signal, { holdAtDeadline, withdrawable }) {
    let late = e.reply.then((payload)=>({
            kind: "answered",
            payload
        }), (f)=>{
        if (signal.aborted) {
            return {
                kind: "cancelled"
            };
        }
        if (f instanceof hjt) {
            return {
                kind: "undelivered",
                status: f.status
            };
        }
        if (f instanceof gjt) {
            return {
                kind: "delivery_unknown",
                status: f.status
            };
        }
        if (f instanceof nc) {
            return {
                kind: "dropped"
            };
        }
        if (f instanceof mjt) {
            return {
                kind: "gone",
                why: f.why,
                unsent: e.delivery() === "queued"
            };
        }
        return {
            kind: "failed",
            detail: l(f)
        };
    });
    let settled = await Ge(late, n);
    if (settled !== undefined) {
        return {
            settled,
            late: undefined
        };
    }
    let delivery = e.delivery();
    if (delivery === "queued") {
        if (withdrawable && e.withdraw()) {
            return {
                settled: {
                    kind: "stalled",
                    takenBack: true
                },
                late: undefined
            };
        }
        e.cancel();
        return {
            settled: {
                kind: "stalled",
                takenBack: false
            },
            late: undefined
        };
    }
    if (holdAtDeadline) {
        return {
            settled: {
                kind: "deadline"
            },
            late
        };
    }
    e.cancel();
    return {
        settled: delivery === "in_flight" || delivery === "indeterminate" ? {
            kind: "unconfirmed",
            delivery
        } : {
            kind: "deadline"
        },
        late: undefined
    };
}
function Me(e) {
    return e.kind === "approval_unverified" || e.kind === "result" && e.envelope?.outcome === "refused";
}
function Pe(e) {
    return !Me(e) && e.kind !== "dropped";
}
function De(e, call_id) {
    try {
        return Oe(e, call_id);
    } catch (error) {
        t(`[remote-tools] an unreadable reply was not taken as an answer: ${l(error)}`);
        return false;
    }
}
function Oe(e, call_id) {
    let r = L(e) ? e.result : undefined;
    let o = NW(r);
    switch(o.envelope.status){
        case "present":
            return o.envelope.envelope.call_id === call_id;
        case "malformed":
            return Le(r) === call_id;
        case "absent":
            return false;
    }
}
function Le(e) {
    if (!L(e)) {
        return;
    }
    return [
        e.structuredContent,
        e._meta
    ].filter(L).map((r)=>r[qI]).find(L)?.call_id;
}
function X(e, elapsedMs) {
    if (uLn(e)) {
        let { [pit]: s, ...rest } = e;
        let p = X(rest, elapsedMs);
        let f = p.kind === "result" && p.envelope?.outcome === "refused" ? p.envelope : undefined;
        return {
            kind: "dropped",
            why: "unverified_refusal",
            detail: "a sender this session could not verify reported the call refused; the machine itself is asked what became of it",
            ...p.kind === "result" && f !== undefined && {
                reported: {
                    kind: "result",
                    content: "",
                    isError: p.isError,
                    envelope: {
                        v: f.v,
                        outcome: f.outcome,
                        target: {
                            name: "",
                            working_dir: ""
                        },
                        code: f.code,
                        ...f.reason !== undefined && {
                            reason: f.reason
                        },
                        ...f.limit !== undefined && {
                            limit: f.limit
                        },
                        message: ""
                    },
                    elapsedMs: p.elapsedMs,
                    responseBytes: p.responseBytes
                }
            }
        };
    }
    let r = L(e) ? e.result : undefined;
    let o = NW(r);
    if (o.envelope.status === "malformed") {
        return {
            kind: "transport_error",
            detail: "malformed result envelope",
            unreadableResult: true
        };
    }
    if (o.envelope.status === "absent") {
        return {
            kind: "transport_error",
            detail: "answer without an envelope"
        };
    }
    let envelope = o.envelope.envelope;
    if (envelope.outcome === "refused" && envelope.code === "no_approval") {
        return {
            kind: "approval_unverified"
        };
    }
    return {
        kind: "result",
        content: o.content,
        isError: o.isError,
        envelope,
        elapsedMs,
        responseBytes: Hk(r),
        ...{}
    };
}
async function ae(e, n, r, signal) {
    let u = (e.now ?? Date.now)();
    let s = await V(e, r, signal);
    let m = (r.live()?.lastHeardAt ?? -Infinity) > u;
    let p = e.host();
    let f = p?.instanceId !== r.instanceId;
    if (s === "answered" || s === "missed" && (m || f)) {
        n.stale = false;
    }
    if (s === "answered" || s === "missed" && m || s !== "cancelled" && f && p !== undefined) {
        return "there";
    }
    if (s === "missed" && !f) {
        return "missed";
    }
    return "unknown";
}
async function Ie(e, n, r, signal, u) {
    if (n.hold === undefined) {
        let stop = new AbortController;
        let p = He(e, n, r, stop.signal, u);
        n.hold = {
            ended: p.finally(()=>{
                n.hold = undefined;
            }),
            stop,
            waiting: 0
        };
    }
    let n_hold = n.hold;
    n_hold.waiting += 1;
    try {
        return await qa(n_hold.ended, signal, ()=>new Ye);
    } catch  {
        return "unknown";
    } finally{
        n_hold.waiting -= 1;
        if (n_hold.waiting === 0) {
            n_hold.stop.abort();
        }
    }
}
async function He(e, n, r, signal, u) {
    let s = e.probeDeadlineMs ?? qQe;
    for(let m = u; m > 0; m -= s){
        let p = await ae(e, n, r, signal);
        if (p !== "missed") {
            return p;
        }
    }
    return "missed";
}
function de(e, n) {
    let r = n.quietMisses[0];
    let o = e.host()?.live();
    if (r !== undefined && (o === undefined || le(o, r.writtenAt))) {
        n.quietMisses = [];
    }
    return n.quietMisses;
}
function le(e, writtenAt) {
    return e.lastHeardAt > writtenAt || e.lastStillHereAt !== undefined && e.lastStillHereAt > writtenAt;
}
function xe(e, n, r) {
    if (n.quietProbe !== undefined) {
        return n.quietProbe;
    }
    let o = e.host();
    let u = o?.live();
    if (o === undefined || u === undefined || u.asleepSince !== undefined) {
        return Promise.resolve(undefined);
    }
    let writtenAt = (e.now ?? Date.now)();
    let m = r ?? e.probeDeadlineMs ?? qQe;
    let p = V(e, o, new AbortController().signal, {
        putWithinMs: cLn,
        deadlineMs: m
    }).then((f)=>{
        let _ = o.live();
        if (f === "answered" || f === "missed" && _ !== undefined && le(_, writtenAt)) {
            if (f === "answered" || (_?.lastHeardAt ?? -Infinity) > writtenAt) {
                n.stale = false;
            }
            n.quietMisses = [];
            return true;
        }
        if (f !== "missed" || _ === undefined || _.asleepSince !== undefined) {
            return;
        }
        n.quietMisses = [
            ...de(e, n),
            {
                writtenAt,
                waitedMs: m
            }
        ];
        return false;
    }).catch((f)=>{
        t(`[remote-tools] a liveness probe for a waiting call failed: ${l(f)}`);
    }).finally(()=>{
        n.quietProbe = undefined;
    });
    n.quietProbe = p;
    return p;
}
async function V(e, n, signal, o) {
    let u = e.now ?? Date.now;
    let deadline_ms = o?.deadlineMs ?? e.probeDeadlineMs ?? qQe;
    let issued_at = u();
    let p;
    let f;
    try {
        f = e.sender.sendServedCallRequest({
            request: {
                subtype: "remote_tools_probe",
                instance_id: n.instanceId,
                issued_at,
                deadline_ms
            },
            accepts: Be,
            signal,
            ...o !== undefined && {
                onUpload: (g)=>{
                    if (g === "accepted") {
                        p ??= u();
                    }
                }
            }
        });
    } catch (error) {
        t(`[remote-tools] liveness probe to ${n.hostName} could not be sent: ${l(error)}`);
        return "unsent";
    }
    if (!f.sent) {
        return "unsent";
    }
    let { settled } = await se(f, deadline_ms, signal, {
        holdAtDeadline: false,
        withdrawable: true
    });
    if (settled.kind === "answered") {
        let g = L(settled.payload) ? settled.payload.result : undefined;
        n.heard(u(), L(g) ? udo(g.epoch) : undefined);
        return "answered";
    }
    switch(settled.kind){
        case "cancelled":
            return "cancelled";
        case "undelivered":
        case "failed":
            return "unsent";
        case "stalled":
            if (settled.takenBack) {
                return "taken_back";
            }
            return "stalled";
        case "gone":
            return "gone";
        case "deadline":
            if (o !== undefined && (p === undefined || issued_at + deadline_ms - p < (e.probeDeadlineMs ?? qQe) - o.putWithinMs)) {
                return "stream_lost";
            }
            return "missed";
        case "dropped":
        case "delivery_unknown":
        case "unconfirmed":
            return "stream_lost";
    }
}
function Be(e) {
    let n = L(e) ? e.result : undefined;
    return L(n) && udo(n.epoch) !== undefined;
}
function L(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
}
function ue() {
    try {
        return k("tengu_violin_scroll", false);
    } catch  {
        return false;
    }
}
function H() {
    return import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule();
}
class J {
    #e = new WeakMap;
    reinitialize(e) {
        let n = this.#e.get(e);
        if (n) {
            return n;
        }
        let r = H().clearServerCache(e.name, e.config).catch(()=>{});
        this.#e.set(e, r);
        return r;
    }
}
const Ne = -32000;
async function U(e, n, r) {
    let o = await fe(e, n, r);
    if (o.kind !== "session_expired") {
        return ce(e, o);
    }
    await n.recovery.reinitialize(o.connection);
    let u = await fe(e, n, r);
    if (u.kind === "session_expired") {
        return {
            kind: "expired_twice"
        };
    }
    return ce(e, u);
}
async function ce(e, n) {
    if (n.kind === "connect_failed") {
        await H().evictStaleFailedConnectMemoForServe(e.name, e.config).catch(()=>{});
    }
    return n;
}
async function fe(e, { deadlineAt, signal, idempotent = false }, u) {
    let s = H();
    let m;
    try {
        m = await s.ensureConnectedClient(e, {
            signal,
            timeoutMs: Math.max(1, deadlineAt - Date.now()),
            context: "remote tool execution"
        });
    } catch (error) {
        return {
            kind: "connect_failed",
            error
        };
    }
    let p = deadlineAt - Date.now();
    if (p <= 0) {
        return {
            kind: "connect_failed",
            error: Error("deadline reached before the request could be sent")
        };
    }
    try {
        return {
            kind: "ok",
            value: await u(m, p)
        };
    } catch (error) {
        if (error instanceof Error && (s.isMcpSessionExpiredError(error) || idempotent && qe(error, m))) {
            return {
                kind: "session_expired",
                connection: m
            };
        }
        return {
            kind: "failed",
            error
        };
    }
}
function qe(error, n) {
    return ("code" in error && error.code === Ne && error.message.includes("Connection closed") || v(error) === "CONNECTION_CLOSED") && (n.config.type === "http" || n.config.type === "claudeai-proxy");
}
const Fe = {
    maxRequestBytes: 4128768,
    defaultDeadlineMs: 58000
};
const Ue = -32001;
const je = "office_bridge.kind";
const $e = "office_bridge.bound_miss";
const Ve = new Set([
    "not_connected",
    "send_failed",
    "contested",
    "unsupported_on_bound"
]);
const Ke = new Set([
    "disconnected",
    "cancelled"
]);
const We = new Set([
    "timeout"
]);
const ze = /not connected|not reachable|offline/i;
const Xe = /disconnected before responding|connection may be closing/i;
const Je = /did not respond within/i;
const Qe = 200;
function he(e, recovery) {
    return {
        kind: "bridge",
        limits: Fe,
        call: (r, o, u, s)=>en(e, recovery, r, o, u, s),
        callPlumbing: (r, o, u)=>Ze(e, recovery, r, o, u)
    };
}
async function Ze(e, n, r, o, u) {
    if (!cEe.has(r)) {
        throw Error("callPlumbing: not a bridge plumbing tool");
    }
    let s = Date.now();
    let m = W4(u.deadlineMs);
    let p = await U(e, {
        deadlineAt: s + m,
        recovery: n,
        signal: u.signal,
        idempotent: u.idempotent
    }, (f, _)=>cB(f, {
            name: r,
            arguments: {
                ...o
            }
        }, {
            signal: u.signal,
            timeout: _
        }));
    if (p.kind === "ok") {
        let f = NW(p.value);
        let text = we(f.content);
        let g = f.isError && f.envelope.status === "absent" ? be(p.value, text, m) : undefined;
        if (g !== undefined) {
            return me(g);
        }
        return {
            kind: "result",
            structuredContent: p.value.structuredContent,
            text,
            isError: f.isError
        };
    }
    if (u.signal.aborted) {
        return {
            kind: "cancelled"
        };
    }
    switch(p.kind){
        case "connect_failed":
            return {
                kind: "unreachable",
                detail: nl(l(p.error))
            };
        case "expired_twice":
            return {
                kind: "unreachable",
                detail: "the device bridge rejected the session again right after re-initializing it; nothing ran"
            };
        case "failed":
            return me(_e(p.error, m, undefined));
    }
}
function me(e) {
    switch(e.kind){
        case "timed_out":
        case "unreachable":
        case "dropped":
        case "transport_error":
        case "cancelled":
            return e;
        default:
            return {
                kind: "transport_error",
                detail: `unexpected: ${e.kind}`
            };
    }
}
async function en(e, n, name, o, u, s) {
    let m = Date.now();
    let p = W4(s.deadlineMs);
    let f = vms(u);
    let _ = await U(e, {
        deadlineAt: m + p,
        recovery: n,
        signal: s.signal
    }, (g, w)=>cB(g, {
            name,
            arguments: {
                ...o,
                [SNe]: u
            },
            _meta: {
                [Sms]: s.toolUseId,
                ...f !== undefined && {
                    [bms]: f
                }
            }
        }, {
            signal: s.signal,
            timeout: w
        }));
    if (_.kind === "ok") {
        let g = nn(_.value, Date.now() - m, p);
        if (g.kind === "result") {
            return {
                ...g,
                metaCopy: f === undefined ? "omitted" : "attached"
            };
        }
        return g;
    }
    if (s.signal.aborted) {
        return {
            kind: "cancelled"
        };
    }
    switch(_.kind){
        case "connect_failed":
            return {
                kind: "unreachable",
                detail: nl(l(_.error))
            };
        case "expired_twice":
            return {
                kind: "unreachable",
                detail: "the device bridge rejected the session again right after re-initializing it; nothing ran"
            };
        case "failed":
            return _e(_.error, p, s.toolUseId);
    }
}
function nn(e, elapsedMs, r) {
    let o = NW(e);
    switch(o.envelope.status){
        case "malformed":
            return {
                kind: "transport_error",
                detail: "malformed result envelope",
                unreadableResult: true
            };
        case "present":
            return {
                kind: "result",
                content: o.content,
                isError: o.isError,
                envelope: o.envelope.envelope,
                elapsedMs,
                responseBytes: Hk(e),
                ...{}
            };
        case "absent":
            {
                let u = o.isError ? be(e, we(o.content), r) : undefined;
                if (u) {
                    return u;
                }
                return {
                    kind: "result",
                    content: o.content,
                    isError: o.isError,
                    envelope: undefined,
                    elapsedMs,
                    responseBytes: Hk(e)
                };
            }
    }
}
function be(e, n, r) {
    let o = tn(e);
    if (o !== undefined && We.has(o)) {
        return {
            kind: "timed_out",
            capMs: r
        };
    }
    if (o !== undefined && Ke.has(o)) {
        return {
            kind: "dropped",
            detail: `bridge: ${o}`
        };
    }
    if (o !== undefined && Ve.has(o)) {
        return {
            kind: "unreachable",
            detail: `bridge: ${o}`,
            ...o === "not_connected" && {
                machineNotAnswering: true
            }
        };
    }
    if (o === "malformed_result") {
        return {
            kind: "transport_error",
            detail: "bridge: malformed result",
            unreadableResult: true
        };
    }
    if (n.length > Qe) {
        return;
    }
    if (Je.test(n)) {
        return {
            kind: "timed_out",
            capMs: r
        };
    }
    if (Xe.test(n)) {
        return {
            kind: "dropped",
            detail: "bridge: disconnected"
        };
    }
    if (ze.test(n)) {
        return {
            kind: "unreachable",
            detail: "bridge: not connected",
            machineNotAnswering: true
        };
    }
}
function tn(e) {
    let n = e !== null && typeof e === "object" && "_meta" in e ? e._meta : undefined;
    if (n === null || typeof n !== "object") {
        return;
    }
    let r = n;
    let o = r[je];
    if (typeof o === "string") {
        return o;
    }
    if (r[$e] !== undefined) {
        return "not_connected";
    }
}
function _e(error, n, r) {
    if (ge(error) === Ue || v(error) === "REQUEST_TIMEOUT") {
        return {
            kind: "timed_out",
            capMs: n
        };
    }
    let detail = nl(l(error));
    if (ge(error) === v8 && rn(error, r)) {
        return {
            kind: "approval_unverified"
        };
    }
    if (E8(error) !== "downstream_unreachable") {
        return {
            kind: "transport_error",
            detail
        };
    }
    if (on.has(v(error) ?? "")) {
        return {
            kind: "unreachable",
            detail
        };
    }
    return {
        kind: "dropped",
        detail
    };
}
var on = new Set([
    "ECONNREFUSED",
    "ConnectionRefused",
    "ENOTFOUND",
    "ENETUNREACH",
    "EAI_AGAIN",
    "FailedToOpenSocket"
]);
function rn(error, n) {
    let r = error !== null && typeof error === "object" && "data" in error ? error.data : undefined;
    if (typeof r !== "object" || r === null) {
        return false;
    }
    let o = r;
    return typeof o.args_sha256 === "string" && typeof o.tool_name === "string" && typeof o.tool_use_id === "string" && n !== undefined && o.tool_use_id === n;
}
function ge(error) {
    if (error !== null && typeof error === "object" && "code" in error && typeof error.code === "number") {
        return error.code;
    }
}
function we(content) {
    if (typeof content === "string") {
        return content;
    }
    return content.flatMap((n)=>{
        if (n.type === "text") {
            return [
                n.text
            ];
        }
        return [];
    }).join(`
`);
}
const sn = "attached-machine";
function ye(e, tools, recovery) {
    let o = tools.map((h)=>({
            ...h,
            name: NO(h.name)
        }));
    let u = o.filter((h)=>mX.has(h.name)).map((h)=>({
            toolName: h.name,
            meta: ln(h),
            raw: h._meta?.[qI]
        }));
    let s = o.filter((h)=>!mX.has(h.name) && IOe(h.name) && h._meta?.[kme] !== undefined);
    let m = s.flatMap((h)=>{
        let marker = an(h);
        if (marker === undefined) {
            return [];
        }
        return [
            {
                bridgeName: h.name,
                marker
            }
        ];
    });
    let p = new Set(m.map((h)=>h.bridgeName));
    let rejectedPassthroughTools = new Set(s.filter((h)=>!p.has(h.name)).map((h)=>h.name));
    let f_size = rejectedPassthroughTools.size;
    let unreadable = F(u, (h)=>h.meta === undefined);
    let servedTools = new Set(u.map((h)=>h.toolName));
    let plumbingTools = new Set(o.filter((h)=>cEe.has(h.name)).map((h)=>h.name));
    let passthroughTools = new Map(m.map(({ bridgeName, marker })=>[
            bridgeName,
            {
                localName: marker.tool
            }
        ]));
    let T = new Set([
        ...u.flatMap((h)=>{
            if (h.meta) {
                return [
                    h.meta.target.name
                ];
            }
            return [];
        }),
        ...m.map(({ marker })=>marker.target.name)
    ]);
    let E = o.reduce((acc, item)=>{
        let C = In(item.name);
        acc.set(C, (acc.get(C) ?? 0) + 1);
        return acc;
    }, new Map);
    let M = s.some((h)=>(E.get(In(h.name)) ?? 0) > 1);
    let invalid = T.size > 1 ? "two_names" : servedTools.size < u.length || M ? "duplicate_tool" : undefined;
    if (u.length === 0 && m.length === 0 && f_size === 0) {
        return {
            hosts: [],
            invalid,
            unreadable: 0,
            unreadableMarkers: f_size
        };
    }
    let B = u.find((h)=>h.meta)?.meta;
    let description = B?.target ?? m[0]?.marker.target;
    let P = B === undefined ? u.map((h)=>h.raw) : [];
    let announced = P.map(Ems).find((h)=>h !== undefined);
    let G = P.map(kms).find((h)=>h !== undefined);
    return {
        hosts: [
            {
                kind: "remote",
                source: "bridge",
                name: description?.name ?? sn,
                status: invalid === undefined ? "online" : "offline",
                enforcement: "self",
                description,
                servedTools,
                passthroughTools,
                rejectedPassthroughTools,
                plumbingTools,
                protocol: announced !== undefined ? {
                    kind: "incompatible",
                    announced
                } : gLn(B?.protocol_versions ?? G ?? (u.length === 0 ? [
                    zd
                ] : undefined)),
                transport: he(e, recovery)
            }
        ],
        invalid,
        unreadable,
        unreadableMarkers: f_size
    };
}
function an(e) {
    let n = djt(NO(e._meta?.[kme]));
    if (n !== undefined && n.tool === ii(...dn(e.name)) && Wre(n.target.name)) {
        return n;
    }
}
function dn(name) {
    let n = name.indexOf("__");
    if (n < 0) {
        return [
            "",
            name
        ];
    }
    return [
        name.slice(0, n),
        name.slice(n + 2)
    ];
}
function ln(e) {
    let n = yLn(NO(e._meta?.[qI]));
    if (n !== undefined && n.tool === e.name && Wre(n.target.name)) {
        return n;
    }
}
function KQe(e) {
    return {
        toolState: e.toolState,
        agentContext: e.agentContext,
        mcpClients: ()=>pS(e)
    };
}
const un = 8000;
const cn = 5000;
const fn = 30000;
const mn = 2000;
const K = 5000;
const Y = 60000;
class I {
    recovery = new J;
    connection = undefined;
    listingMemo = undefined;
    synced = false;
    lastListingFailed = false;
    lastForcedRelistAt = undefined;
    reportedUnmatched = false;
    provisional = undefined;
    setAside = 0;
    offer = "unread";
    lastListedAt = undefined;
    unconnectedSince = undefined;
    failedAt = undefined;
    inFlight = undefined;
}
function s2o(e) {
    let n = e.toolState.get(I);
    let r = Date.now();
    let o = n.provisional !== undefined && (n.provisional.stub || r - n.provisional.since < Y) ? K : pn;
    if (n.lastForcedRelistAt !== undefined && r - n.lastForcedRelistAt < o || n.lastListedAt !== undefined && r - n.lastListedAt < K) {
        return false;
    }
    n.lastForcedRelistAt = r;
    let n_connection = n.connection;
    if (n_connection !== undefined) {
        H().fetchToolsForClient.cache.delete(Kn(n_connection.name, n_connection.config));
    }
    n.synced = false;
    n.listingMemo = undefined;
    return true;
}
var pn = 30000;
async function YQe(e, n, r) {
    kXn(e, n, r);
    await gn(e, n, r);
    kXn(e, n, r);
}
function kXn(e, n, r) {
    let o = n.sourceHosts("session");
    n.replaceRemoteHosts("session", e.toolState.get(rv).hostsForTable());
    let u = n.sourceHosts("session");
    if (z(o) === z(u)) {
        return;
    }
    i("tengu_remote_tool_targets", {
        event: e.toolState.get(rv).entries().length === 0 ? b("withdrawn") : d(Te(o, u)),
        source: b("session"),
        trigger: d(r),
        target_count: u.length,
        served_tool_count: u.reduce((acc, item)=>acc + item.servedTools.size, 0),
        passthrough_tool_count: u.reduce((acc, item)=>acc + (item.passthroughTools?.size ?? 0), 0),
        target_kind: pe(u[0]?.description?.kind),
        target_platform: pe(FRt(u[0]?.description?.platform)),
        incompatible_count: F(u, (s)=>s.protocol.kind === "incompatible")
    });
}
async function gn(e, n, r) {
    if (!await R2()) {
        return;
    }
    let o = e.toolState.get(I);
    o.inFlight ??= hn(e, o, n, r).catch((u)=>{
        c(W(u));
    }).finally(()=>{
        o.inFlight = undefined;
    });
    return o.inFlight;
}
function i2o(e) {
    let n = e.toolState.get(I);
    let r = TXn(e);
    if (n.synced && !n.lastListingFailed && r !== undefined && r !== "set_aside") {
        return "unlisted";
    }
    if (n.synced && !n.lastListingFailed) {
        return "listed";
    }
    if (Q(e)) {
        return "unlisted";
    }
    return "absent";
}
function a2o(e) {
    return e.toolState.get(I).connection !== undefined;
}
function l2o(e, n) {
    return e.toolState.get(I).lastListingFailed && !n.hosts().some((o)=>o.kind === "remote" && (o.source === "bridge" || o.source === "session"));
}
async function hn(e, n, r, trigger) {
    let u = e.mcpClients();
    let s = Tn(u);
    if (s === undefined) {
        if (_8(e.agentContext)) {
            return;
        }
        Sn(u, n, trigger);
        n.failedAt = undefined;
        n.lastListingFailed = false;
        if (Q(e)) {
            n.unconnectedSince ??= Date.now();
        } else {
            n.provisional = undefined;
            n.unconnectedSince = undefined;
        }
        if (n.connection !== undefined) {
            n.connection = undefined;
            n.listingMemo = undefined;
            n.setAside = 0;
            Se(r, [], {
                invalid: undefined,
                unreadable: 0,
                unreadableMarkers: 0,
                trigger
            });
        }
        return;
    }
    let m = H().fetchToolsForClient.cache.get(Kn(s.name, s.config));
    let p = e.toolState.get(rv).entries().some((M)=>M.status === "online");
    let f = trigger !== "resolve" && n.provisional?.stub === true && !AL();
    if (n.synced && s === n.connection && m === n.listingMemo && (p || f || !vn(n.provisional))) {
        return;
    }
    if (n.failedAt?.connection === s && Date.now() - n.failedAt.time < fn) {
        return;
    }
    let _ = Date.now();
    let g = await U(s, {
        deadlineAt: _ + un,
        recovery: n.recovery,
        idempotent: true
    }, (M, y)=>bn(M, Math.min(y, cn)));
    if (g.kind !== "ok") {
        n.lastListingFailed = true;
        n.failedAt = Date.now() - _ >= mn ? {
            connection: s,
            time: Date.now()
        } : undefined;
        t(`[remote-tools] device-bridge tools/list failed (${g.kind}); keeping last known machines${"error" in g ? `: ${l(g.error)}` : ""}`, {
            level: "warn"
        });
        i("tengu_remote_tool_targets", {
            event: b("list_failed"),
            trigger: d(trigger),
            reason: "error" in g && wn(g.error) ? b("timeout") : d(g.kind)
        });
        return;
    }
    if (g.value.truncated) {
        t("[remote-tools] device-bridge tools/list is paginated; only the first page is read for machine discovery", {
            level: "warn"
        });
    }
    let w = ye(s, g.value.tools, n.recovery);
    let S = AL() ? w : {
        ...w,
        hosts: [],
        invalid: undefined
    };
    let host_count = w.hosts.length - S.hosts.length;
    n.offer = host_count > 0 ? "offered" : "none";
    if (host_count !== n.setAside) {
        n.setAside = host_count;
        if (host_count > 0) {
            i("tengu_remote_tool_targets", {
                event: b("listing_set_aside"),
                trigger: d(trigger),
                host_count,
                tool_count: g.value.tools.length,
                stub: g.value.stub,
                invalid: pe(w.invalid)
            });
            t("[remote-tools] device-bridge listing offered a machine; not adopted: machines are taken from the session channel alone", {
                level: "warn"
            });
        }
    }
    let T = S.hosts.length === 0;
    if (T && (n.provisional === undefined || n.provisional.stub !== g.value.stub)) {
        i("tengu_remote_tool_targets", {
            event: b("listed_empty"),
            trigger: d(trigger),
            tool_count: g.value.tools.length,
            truncated: g.value.truncated,
            has_served_name: g.value.tools.some((M)=>mX.has(M.name)),
            marker_count: F(g.value.tools, (M)=>M._meta?.[kme] !== undefined),
            stub: g.value.stub
        });
        t(`[remote-tools] device-bridge listing adopted no machine (${g.value.tools.length} tools${g.value.stub ? p ? ", stub listing — the bound machine serves over the session channel instead" : ", stub listing — the bound machine has not announced yet" : ""})`);
    }
    if (S.invalid !== undefined) {
        t(`[remote-tools] device-bridge listing rejected (${S.invalid}): one connection must announce exactly one machine \u2014 its first announced name stays attached but unreachable`, {
            level: "warn"
        });
    }
    Se(r, S.hosts, {
        invalid: S.invalid,
        unreadable: S.unreadable,
        unreadableMarkers: S.unreadableMarkers,
        trigger
    });
    let E = !T && n.provisional !== undefined && m !== undefined && m === n.listingMemo;
    if (E) {
        H().fetchToolsForClient.cache.delete(Kn(s.name, s.config));
    }
    n.connection = s;
    n.listingMemo = E ? undefined : m;
    n.synced = true;
    n.lastListedAt = Date.now();
    n.unconnectedSince = undefined;
    n.provisional = T ? {
        at: Date.now(),
        since: n.provisional?.since ?? Date.now(),
        stub: g.value.stub
    } : undefined;
    n.reportedUnmatched = false;
    n.failedAt = undefined;
    n.lastListingFailed = false;
    t(`[remote-tools] device bridge matched: ${s.name} (${g.value.tools.length} tools over ${g.value.pages} page(s))`);
}
async function bn(e, n) {
    let r = await not(e, {
        timeout: n
    });
    return {
        tools: r.tools.filter(_n),
        pages: 1,
        truncated: Boolean(r.nextCursor),
        stub: pxe(r) === "stub"
    };
}
function _n(e) {
    return typeof e === "object" && e !== null && typeof e.name === "string";
}
function wn(error) {
    let n = l(error).toLowerCase();
    return n.includes("timed out") || n.includes("timeout");
}
function Q(e) {
    return e.mcpClients().some((n)=>Z(n) && n.type !== "disabled" && n.type !== "needs-auth");
}
function TXn(e) {
    let n = yn(e);
    let r = n !== "connecting" && e.toolState.get(I).setAside > 0 ? "set_aside" : n;
    if (n === undefined || AL()) {
        return r;
    }
    let o = e.toolState.get(rv);
    if (o.hasAnnouncedThisLife()) {
        if (o.entries().length === 0) {
            return "serves_nothing";
        }
        return r;
    }
    if ((a.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1) {
        return "not_reannounced";
    }
    return r;
}
function c2o(e) {
    if (AL()) {
        return "none";
    }
    let { offer } = e.toolState.get(I);
    if (offer !== "unread") {
        return offer;
    }
    let r = e.mcpClients().filter((o)=>o.name === F6);
    if (r.length > 0 && !r.some((o)=>Z(o) || ee(o))) {
        return "none";
    }
    return "unread";
}
const ve = 15000;
function d2o(e) {
    if (e) {
        return Math.max(ve, EXn.defaultDeadlineMs);
    }
    return ve;
}
function Yjr(e) {
    let n = e.toolState.get(rv);
    return (a.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 && !AL() && !(n.hasAnnouncedThisLife() && n.entries().length === 0) && e.toolState.get(tMe).canAsk() && fW() && ue();
}
function u2o(e, n, r) {
    return n.has(r) && !e.toolState.get(rv).withdrawnThisLife(r) && Yjr(e);
}
async function p2o(e, n, { deadlineMs = EXn.defaultDeadlineMs, sliceMs = K, routableOtherwise, forMachine } = {}) {
    let m = e.toolState.get(rv);
    if (forMachine === undefined && m.entries().length > 0) {
        return {
            kind: "announced"
        };
    }
    let p = m.announceWaitExpired();
    if (p !== undefined) {
        return {
            kind: "gave_up_earlier",
            waitedMs: p
        };
    }
    if (forMachine !== undefined && e.toolState.get(tMe).askOnce({
        workerEpoch: a.CLAUDE_CODE_WORKER_EPOCH ?? 1,
        deadlineMs
    })) {
        t("[remote-tools] asked the attached client to announce to this replacement worker");
    }
    let f = Date.now();
    while(true){
        if (n.aborted) {
            return {
                kind: "aborted"
            };
        }
        if (forMachine === undefined ? m.hasAnnouncedThisLife() : m.withdrawnThisLife(forMachine)) {
            return {
                kind: "announced"
            };
        }
        let g = deadlineMs - (Date.now() - f);
        if (g <= 0) {
            break;
        }
        let w = await Xjr(m, n, Math.min(sliceMs, g));
        if (w === "announced" && (forMachine === undefined || routableOtherwise === undefined)) {
            return {
                kind: "announced"
            };
        }
        if (w === "aborted") {
            return {
                kind: "aborted"
            };
        }
        if (routableOtherwise !== undefined && await routableOtherwise()) {
            if (w === "announced") {
                return {
                    kind: "announced"
                };
            }
            return {
                kind: "routable"
            };
        }
    }
    let _ = Date.now() - f;
    m.markAnnounceWaitExpired(_);
    return {
        kind: "gave_up",
        waitedMs: _
    };
}
function Xjr(e, n, r) {
    return new Promise((resolve)=>{
        let u = (f)=>{
            clearTimeout(p);
            m();
            n.removeEventListener("abort", s);
            resolve(f);
        };
        let s = ()=>u("aborted");
        let m = e.onNextAnnounce(()=>u("announced"));
        let p = setTimeout((f)=>f("slice"), r, u);
        n.addEventListener("abort", s, {
            once: true
        });
        if (n.aborted) {
            u("aborted");
        }
    });
}
function yn(e) {
    let n = e.toolState.get(I);
    if (n.connection === undefined) {
        if (Q(e) && n.unconnectedSince !== undefined && Date.now() - n.unconnectedSince < Y) {
            return "connecting";
        }
        return undefined;
    }
    if (!n.provisional) {
        return;
    }
    if (Date.now() - n.provisional.since < Y) {
        return "connecting";
    }
    if (n.provisional.stub) {
        return "not_connected";
    }
}
function vn(provisional) {
    if (provisional === undefined) {
        return false;
    }
    let n = Date.now();
    if (!provisional.stub && n - provisional.since >= Y) {
        return false;
    }
    return n - provisional.at >= K;
}
function Sn(e, n, trigger) {
    let o = e.filter((s)=>s.name === F6);
    if (o.length === 0 || n.reportedUnmatched) {
        return;
    }
    let u = o.map(kn);
    if (u.every((s)=>s === "connecting")) {
        return;
    }
    n.reportedUnmatched = true;
    t(`[remote-tools] a '${F6}' MCP entry exists but was not adopted as the device bridge: ${o.map((s, m)=>`${u[m]} (type=${s.type}, scope=${s.config.scope})`).join("; ")}`, {
        level: "warn"
    });
    i("tengu_remote_tool_targets", {
        event: b("no_bridge_connection"),
        trigger: d(trigger),
        servers_seen: o.length,
        reason: d(u[0] ?? "none"),
        ingress_base_unset: ny.atStartup === undefined
    });
}
function kn(e) {
    if (ee(e)) {
        return "scoped_entry";
    }
    if (!("url" in e.config) || typeof e.config.url !== "string") {
        return "no_url";
    }
    if (!$y(e.config.url)) {
        return "not_ccr_proxy_url";
    }
    if (!RSe(e.config.url)) {
        return "not_devices_upstream";
    }
    if (!ke(e.config.url)) {
        return "routing_shape";
    }
    switch(e.type){
        case "connected":
            return "none";
        case "disabled":
            return "disabled";
        case "needs-auth":
            return "needs_auth";
        default:
            return "connecting";
    }
}
function Tn(e) {
    return e.find((n)=>n.type === "connected" && Z(n));
}
function Z(e) {
    return e.name === F6 && !ee(e) && "url" in e.config && typeof e.config.url === "string" && RSe(e.config.url) && ke(e.config.url);
}
function ee(e) {
    let { scope, pluginSource, agentSource } = e.config;
    return scope === "project" || scope === "local" || scope === "agent" || pluginSource !== undefined || agentSource !== undefined;
}
function ke(url) {
    try {
        let n = new URL(url);
        let r = n.searchParams.getAll("toolbox_mcp_server_id");
        let o = /\/v2\/ccr-sessions\/([^/]+)\/mcp$/.exec(n.pathname)?.[1];
        let u = r[0];
        return n.searchParams.getAll("mcp_url").length === 1 && (r.length === 0 || r.length === 1 && (u === F6 || o !== undefined && u === Cn(o)));
    } catch  {
        return false;
    }
}
function Cn(e) {
    return EMt(e, F6);
}
function Se(e, n, { invalid, unreadable, unreadableMarkers, trigger }) {
    let m = e.sourceHosts("bridge");
    let { dropped } = e.replaceRemoteHosts("bridge", n);
    if (dropped.length > 0) {
        t(`[remote-tools] the bridge announced ${dropped.length} machine(s) under a name this session cannot adopt; not adopted: ${dropped.join(", ")}`, {
            level: "warn"
        });
    }
    let f = e.sourceHosts("bridge");
    let _ = z(m) !== z(f);
    if (invalid !== undefined) {
        i("tengu_remote_tool_targets", {
            event: b("listing_invalid"),
            reason: d(invalid),
            trigger: d(trigger)
        });
    }
    let g = _ ? Te(m, f) : undefined;
    if (g !== undefined) {
        i("tengu_remote_tool_targets", {
            event: d(g),
            trigger: d(trigger),
            target_count: f.length,
            served_tool_count: f.reduce((acc, item)=>acc + item.servedTools.size, 0),
            passthrough_tool_count: f.reduce((acc, item)=>acc + (item.passthroughTools?.size ?? 0), 0),
            target_kind: pe(f[0]?.description?.kind),
            target_platform: pe(FRt(f[0]?.description?.platform)),
            incompatible_count: F(f, (w)=>w.protocol.kind === "incompatible"),
            protocol_version: f[0]?.protocol.kind === "compatible" ? f[0].protocol.version : undefined
        });
    }
    if (unreadable > 0 || unreadableMarkers > 0) {
        i("tengu_remote_tool_targets", {
            event: b("unreadable"),
            trigger: d(trigger),
            unreadable_count: unreadable,
            unreadable_marker_count: unreadableMarkers
        });
    }
}
function z(e) {
    return e.map((n)=>`${n.name}\x00${n.status}\x00${n.servedTools.size}\x00${n.passthroughTools?.size ?? 0}`).sort().join(`
`);
}
function Te(e, n) {
    let r = e.some((u)=>u.status === "online");
    let o = n.some((u)=>u.status === "online");
    if (e.length === 0) {
        if (n.length === 0) {
            return "changed";
        }
        return "discovered";
    }
    if (r && !o) {
        return "went_offline";
    }
    if (!r && o) {
        return "came_online";
    }
    return "changed";
}
export { EXn, qQe, ajs, KQe, s2o, YQe, kXn, i2o, a2o, l2o, TXn, c2o, d2o, Yjr, u2o, p2o, Xjr };
