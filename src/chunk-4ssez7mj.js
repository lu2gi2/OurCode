import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ke, x, W, l, v, T_, z, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { po, zO, NH, Ld, uG, Jv, uOo, ij } from "/$bunfs/root/chunk-xgw72tt1.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { AS, Kr } from "/$bunfs/root/chunk-ctt36bn8.js";
import { St, Hg, h9, Z1, di, mpt, _o, ie, R0, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { HDt, Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Gx, zd as v_1, qI, Wc, q$, Ic, p_, vb } from "/$bunfs/root/chunk-4r6b8efh.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { co, Ln, Fn, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Wm, se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { Zxe } from "/$bunfs/root/chunk-zwxj12s4.js";
import { Lo } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { g0, qs } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { yi, P1 } from "/$bunfs/root/chunk-52bcnmbr.js";
import { Un, _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { S_, Utn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { lp, ht, Xt, Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Sd } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { gg } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { ed, Cm, B8t } from "/$bunfs/root/chunk-w28jvcye.js";
import { qe, Zd, Tk, nR } from "/$bunfs/root/chunk-46dhek9m.js";
import { kre, bh, W$, xW, nCe, GLe, zst, Gst, GI, to, thr, f4e, m4e, zce, M_e, H4, Kg, Wd, Ui, QLe, nNe } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { Mk, lS } from "/$bunfs/root/chunk-pfdtn0nk.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { Cit, Kx, gV, Vs, X$, ode, zM, ECe, L5 } from "/$bunfs/root/chunk-6sdmsz4f.js";
import { Dre, w0n, Go, lc } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { Ru, ULe, Zp, n4e } from "/$bunfs/root/chunk-k5fhce8z.js";
import { TL, QDe, Q7r, Ccr, Rcr, pW, jnt, CTe, Ynt, Txn, FJ, HTe, zxn, jVe, t6t, Krs, Eto, lqe, Nto, Ni } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { vLr, x6n, P6n } from "/$bunfs/root/chunk-f8wm9p9f.js";
import { N9o, jVt, Wet, M5r, mhe, Rrr, Rke, pJ, Zet, Bwt, Urr, zwt, qrr, qHe, ju, uM, ETn, kTn, tor, QU, mk, y3, Hl, ror, CTn, Uke, nCn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { zQn, x_t } from "/$bunfs/root/chunk-88awaqqw.js";
import { hze } from "/$bunfs/root/chunk-5hp2pp9y.js";
import { dgt, ugt } from "/$bunfs/root/chunk-230dc1gm.js";
import { LEe, vA } from "/$bunfs/root/chunk-g4qw45xk.js";
import { iX, Azo } from "/$bunfs/root/chunk-3pzpbxd2.js";
import { aae, uYo, pYo } from "/$bunfs/root/chunk-pkwyb6mb.js";
import { bve, bFt, SFt, wFt, I6n, ELr, kLr, Y9, H$o, vFt } from "/$bunfs/root/chunk-1vxvavss.js";
import { eI } from "/$bunfs/root/chunk-s248m269.js";
import { L$o, N$o, hun, yun, M6n, _un, z$o, G$o, V$o, Mee } from "/$bunfs/root/chunk-bx7yy5vf.js";
import { fOe, Nmn } from "/$bunfs/root/chunk-vee10wa8.js";
import { oc } from "/$bunfs/root/chunk-cerrsv89.js";
import { oD } from "/$bunfs/root/chunk-4p2j67rn.js";
import { zs } from "/$bunfs/root/chunk-k1zxadxf.js";
import { Or } from "/$bunfs/root/chunk-b7w13qrv.js";
import { ld } from "/$bunfs/root/chunk-r17zw85x.js";
import { rt } from "/$bunfs/root/chunk-xx1j2680.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { randomUUID, createHash } from "crypto";
import { isDeepStrictEqual } from "util";
import { homedir, hostname } from "os";
import { basename, dirname, join, relative, sep, resolve, isAbsolute, parse } from "path";
import { constants } from "fs";
import { open } from "fs/promises";
function f$o(e, n) {
    let o = "not_started";
    return {
        starts () {
            if (o === "not_started") {
                o = "started";
                e.enter(n);
            }
        },
        runsOn () {
            if (o === "started") {
                e.enter(n);
            }
        },
        waits () {
            if (o === "started") {
                e.park(n);
            }
        },
        ended () {
            o = "ended";
            e.end(n);
        }
    };
}
function en(e) {
    let n = new Set;
    let starts = 0;
    return {
        enter (r) {
            n.add(r);
            starts += 1;
        },
        park (r) {
            n.delete(r);
        },
        end (r) {
            n.delete(r);
        },
        aloneWith (r) {
            return n.size === (n.has(r) ? 1 : 0) && e() === 0;
        },
        get starts () {
            return starts;
        }
    };
}
const yLr = 4;
const ar = 16;
const dr = 8192;
const lr = 1000;
class nn {
    #e = new Map;
    #t = 0;
    #o = 0;
    #r = 0;
    #n = new Map;
    get running() {
        return this.#e.size;
    }
    get runningOrBeingStopped() {
        return this.#e.size + this.#o;
    }
    stopAll(e) {
        this.#r++;
        for (let n of [
            ...this.#e.values()
        ]){
            n(e);
        }
    }
    holds(e) {
        return this.#e.has(e);
    }
    stop(e) {
        let n = this.#e.get(e);
        n?.("caller_stopped");
        return n !== undefined;
    }
    async statusOf(e) {
        let n = this.#n.get(e);
        if (n === undefined) {
            return;
        }
        let outputTail = await n4e(n.started.shellId, dr).then((r)=>r.content, ()=>{});
        return {
            command: {
                ...n
            },
            outputTail
        };
    }
    starterFor(e) {
        let n = this.#r;
        let o = false;
        let r;
        let s = ()=>{
            if (o) {
                o = false;
                this.#t--;
            }
        };
        let u = ()=>{
            if (e.lifetime.aborted || n !== this.#r || !e.enabled()) {
                return "unavailable";
            }
            if (qe.getSandboxUnavailableReason() !== undefined || qe.passesCheapSandboxGates() && !qe.isSandboxingEnabled()) {
                return "sandbox_down";
            }
        };
        let p = ()=>{
            let y = u() ?? (!o && this.#e.size + this.#t >= e.max ? "full" : undefined);
            if (y === undefined) {
                return;
            }
            f("remote_tool_serve_background", y);
            return M6n(y, e);
        };
        return {
            started: ()=>r,
            settle: (y)=>{
                s();
                if (y && r !== undefined) {
                    this.#e.get(r.shellId)?.("call_stopped");
                }
            },
            starter: {
                reserve: ()=>{
                    let y = p();
                    if (y === undefined && !o) {
                        o = true;
                        this.#t++;
                    }
                    return y;
                },
                adopt: (y, h, _)=>{
                    let A = o ? u() : "unavailable";
                    s();
                    try {
                        if (A !== undefined) {
                            throw new x(M6n("unavailable", e), "served background command could not be owned");
                        }
                        r = this.#s(y, h, _, e);
                        g("remote_tool_serve_background");
                        return r.shellId;
                    } catch (error) {
                        m("remote_tool_serve_background", "not_owned");
                        y.kill();
                        y.cleanup();
                        throw error;
                    }
                }
            }
        };
    }
    #s(e, n, o, r) {
        let taskId = e.taskOutput.taskId;
        let outputPath = Ru(taskId);
        if (!e.background(taskId)) {
            throw new x(M6n("unavailable", r), "served background command had already ended");
        }
        let limitMs = Eto(n);
        let started = {
            shellId: taskId,
            outputPath,
            limitMs
        };
        let h = {
            started,
            startedAt: Date.now()
        };
        this.#n.set(r.callId, h);
        let _ = false;
        let A = (how, exitCode)=>{
            if (_) {
                return;
            }
            _ = true;
            clearTimeout(N);
            clearInterval(B);
            r.lifetime.removeEventListener("abort", C);
            this.#e.delete(taskId);
            h.ended = {
                how,
                exitCode,
                at: Date.now()
            };
            this.#n.delete(r.callId);
            if (how !== "call_stopped") {
                this.#n.set(r.callId, h);
                let K = [
                    ...this.#n
                ].filter(([, V])=>V.ended);
                for (let [V] of K.slice(0, -ar)){
                    this.#n.delete(V);
                }
            }
            try {
                r.onEvent(taskId, how);
            } catch (error) {
                c(W(error));
            }
            let te;
            try {
                if (how !== "exited") {
                    this.#o += 1;
                    te = e.kill();
                    te.then(()=>{
                        this.#o -= 1;
                    }, ()=>{});
                }
                e.cleanup();
                ULe(taskId, how === "exited" ? `
[exited with code ${exitCode}]
` : `
[stopped ${yun(how, r.targetName)}]
`);
                Zp(taskId);
            } catch (error) {
                c(W(error));
            }
            I = I.then(()=>te).then(()=>x6n(taskId)).catch((K)=>c(W(K))).finally(S);
        };
        let C = ()=>A("serving_ended");
        let N = setTimeout(A, limitMs, "time_limit").unref();
        let I = vLr({
            id: taskId,
            pid: e.pid,
            command: o,
            caller: r.caller,
            folder: r.folder
        });
        let B = setInterval(cr, lr, taskId, A).unref();
        r.lifetime.addEventListener("abort", C, {
            once: true
        });
        let S = St(()=>{
            C();
            return I;
        });
        this.#e.set(taskId, A);
        e.result.then(async (P)=>{
            await e.taskOutput.flush();
            A("exited", P.code);
        }).catch((P)=>c(W(P)));
        r.onEvent(taskId, "started");
        return started;
    }
}
function cr(e, n) {
    P6n(e).then((o)=>{
        if (o) {
            n("stopped_by_person");
        }
    });
}
function m$o() {
    let e = new Map;
    return {
        add (n, o) {
            if (!e.has(n)) {
                e.set(n, o);
            }
        },
        lines: ()=>[
                ...e.values()
            ]
    };
}
function X0(e, n, o, r, s = {}) {
    let u = Wc(r);
    return {
        envelope: {
            v: v_1,
            outcome: "refused",
            ...n.envelope && {
                call_id: n.envelope.call_id
            },
            target: e,
            code: o,
            ...s.reason !== undefined && {
                reason: s.reason
            },
            ...s.limit !== undefined && {
                limit: s.limit
            },
            message: u,
            ...s.notes !== undefined && s.notes.length > 0 && {
                notes: s.notes
            }
        },
        content: [
            {
                type: "text",
                text: u
            }
        ]
    };
}
function tn({ target, callId, reason, message }) {
    let s = Wc(message);
    return {
        envelope: {
            v: v_1,
            outcome: "refused",
            call_id: callId,
            target,
            code: "withdrawn",
            reason,
            message: s
        },
        content: [
            {
                type: "text",
                text: s
            }
        ]
    };
}
function I6(e, n, o, r, s = {}) {
    let u = Wc(r);
    return {
        envelope: {
            v: v_1,
            outcome: "failed",
            ...n.envelope && {
                call_id: n.envelope.call_id
            },
            target: e,
            code: o,
            message: u,
            ...s.partial,
            ...s.notes !== undefined && s.notes.length > 0 && {
                notes: s.notes
            }
        },
        content: [
            {
                type: "text",
                text: u
            }
        ]
    };
}
function Cje(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
}
function fFt(e) {
    if (e?.envelope.outcome === "completed") {
        let { disposition } = e.envelope;
        if (disposition === "ask_expired" || disposition === "denied_by_session") {
            return {
                state: "failed",
                code: disposition
            };
        }
        return {
            state: "completed",
            isError: e.envelope.is_error
        };
    }
    if (e?.envelope.outcome === "needs_approval") {
        return {
            state: "asked",
            askId: e.envelope.ask_id
        };
    }
    return {
        state: "failed",
        ...(e?.envelope.outcome === "failed" || e?.envelope.outcome === "refused") && {
            code: e.envelope.code
        },
        ...e?.ranNothing === true && {
            ranNothing: true
        },
        ...e?.envelope.outcome === "refused" && e.envelope.reason !== undefined && e.envelope.reason !== "unrecognized" && {
            endedAs: e.envelope.reason
        }
    };
}
function ur(name, n) {
    if (n.state === "failed" && n.code === jVe) {
        let r = new Date(n.servedAt).toISOString().slice(11, 19);
        return `This call reached ${name} only after the session had been told (at ${r} UTC) that it never arrived here \u2014 it was not run.`;
    }
    if (n.state === "failed" && n.code !== undefined && (zxn.has(n.code) || n.code === "stale" || n.ranNothing === true)) {
        return `This request was already answered on ${name}: nothing was run for it (${$n(n)}).`;
    }
    return `This call was already delivered to ${name} (${$n(n)}) \u2014 it was not run again.`;
}
function $n(e) {
    let n = new Date(e.servedAt).toISOString().slice(11, 19);
    switch(e.state){
        case "received":
            return `it was received at ${n} UTC and is still being admitted`;
        case "running":
            return `it has been running since ${n} UTC`;
        case "asked":
            return `it has been waiting for the session's approval since ${n} UTC`;
        case "completed":
            return `it ${e.isError ? "completed with an error" : "completed"} at ${n} UTC`;
        case "failed":
            switch(e.code){
                case "timed_out":
                case "cancelled":
                    if (e.ranNothing === true) {
                        return `it ended as ${e.code} at ${n} UTC`;
                    }
                    return `it ended as ${e.code} at ${n} UTC; if it had started, it may have partially run`;
                case FJ:
                    return `at ${n} UTC it joined the same command already under way here from an earlier request, since forgotten`;
                case HTe:
                    return `its permission question was handed to a newer request for the same command at ${n} UTC`;
                case t6t:
                    return `it was started here at ${n} UTC and Claude Code on this machine restarted before its outcome was recorded: it may have partially run`;
                default:
                    return `it ended as ${e.code ?? "failed"} at ${n} UTC`;
            }
    }
}
function mFt(e, call_id) {
    let { envelope } = e;
    if (envelope.call_id === call_id) {
        return e;
    }
    if (envelope.outcome !== "needs_approval" || envelope.elicitation === undefined) {
        return {
            ...e,
            envelope: {
                ...envelope,
                call_id
            }
        };
    }
    let r = envelope.elicitation._meta[qI];
    return {
        ...e,
        envelope: {
            ...envelope,
            call_id,
            elicitation: {
                ...envelope.elicitation,
                _meta: {
                    [qI]: {
                        ...r,
                        call_id
                    }
                }
            }
        }
    };
}
function g$o(e, served_at) {
    let { envelope } = e;
    switch(envelope.outcome){
        case "completed":
        case "refused":
        case "failed":
            return {
                ...e,
                envelope: {
                    ...envelope,
                    replayed: true,
                    served_at
                }
            };
        default:
            return e;
    }
}
function h$o({ target, callId, state, sinceMs, hostEpoch, outputTail }) {
    let p = Math.max(0, Math.round(sinceMs / 1000));
    let text = state === "running" ? `This call is still running on ${target.name} (received ${p} s ago); its outcome is not known yet.` : state === "admitting" ? `This call was received on ${target.name} ${p} s ago and is still being admitted; nothing has started yet.` : `This call is waiting on ${target.name} for the session's approval (received ${p} s ago); nothing has run yet.`;
    return {
        envelope: {
            v: v_1,
            outcome: "in_progress",
            call_id: callId,
            target,
            state,
            since_ms: Math.max(0, Math.floor(sinceMs)),
            host_epoch: hostEpoch,
            ...outputTail !== undefined && {
                output_tail: outputTail
            }
        },
        content: [
            {
                type: "text",
                text
            }
        ]
    };
}
function y$o({ target, callId, hostEpoch }) {
    let r = hostEpoch === undefined ? `${target.name} has no record of this call (it may never have arrived, or its record here was dropped); nothing is running for it here now.` : `${target.name} has no record of this call: it never arrived here, or this machine's Claude Code has restarted since; nothing is running for it here.`;
    return {
        envelope: {
            v: v_1,
            outcome: "refused",
            call_id: callId,
            target,
            code: "unknown_call",
            message: r,
            ...hostEpoch !== undefined && {
                host_epoch: hostEpoch
            }
        },
        content: [
            {
                type: "text",
                text: r
            }
        ]
    };
}
function _Lr(e, n, o) {
    if (o.state === "failed" && o.code === "withdrawn" && o.endedAs !== undefined) {
        return tn({
            target: e,
            callId: n,
            reason: o.endedAs,
            message: o.endedMessage ?? Mee({
                targetName: e.name,
                reason: o.endedAs
            })
        });
    }
    let content = [
        {
            type: "text",
            text: ur(e.name, o)
        }
    ];
    return {
        envelope: {
            v: v_1,
            outcome: "completed",
            call_id: n,
            target: e,
            is_error: true,
            content,
            disposition: "duplicate_call"
        },
        content
    };
}
const on = "remote_call_ask_ended";
function pun(e) {
    return {
        behavior: "deny",
        message: e,
        decisionReason: {
            type: "other",
            reason: on
        },
        decideLocation: "ask-path"
    };
}
function mr() {
    let e = new Map;
    return {
        register: (o)=>void e.set(o.askId, o),
        take: (o)=>{
            let r = e.get(o);
            e.delete(o);
            return r;
        },
        list: ()=>[
                ...e.values()
            ],
        peek: (o)=>e.get(o),
        findByCallId: (o)=>[
                ...e.values()
            ].findLast((r)=>r.callId === o),
        get size () {
            return e.size;
        }
    };
}
function rn(e, n, o, r) {
    let s = e.pendingAsks.take(n);
    if (s === undefined) {
        return;
    }
    if (s.callId !== undefined) {
        o(s.callId, s);
    }
    s.windDown();
    s.answer(r);
    return s;
}
function _$o(e, n, o) {
    rn(e, n, (r)=>e.calls.remember(r, {
            state: "failed",
            code: "denied_by_session"
        }), o);
}
function b$o(e, n, o, r) {
    return rn(e, n, (s)=>e.calls.settle(s, o, fFt(o)), r) !== undefined;
}
function jfe(e, n, o) {
    let r = rn(e, n, (s, u)=>e.calls.settle(s, o.retain ?? tn({
            target: u.asked.envelope.target,
            callId: s,
            reason: o.reason,
            message: o.message
        }), {
            state: "failed",
            code: "withdrawn",
            endedAs: o.reason,
            endedMessage: Wc(o.message)
        }), pun(o.message));
    if (r !== undefined) {
        if (r.raisedOver !== "relay" && o.countedByItsLeg !== true) {
            switch(o.reason){
                case "host_unbound":
                case "host_stopped":
                    f("remote_tool_serve", o.reason);
                    break;
                case "evicted":
                    f("remote_tool_serve", "ask_superseded");
                    break;
                case "tool_withdrawn":
                case "stale_answer":
                case "replaced_by_retry":
                    break;
            }
        }
        oc(r.callId, "ask ended", {
            ask_id: n,
            reason: o.reason
        });
        e.onAskEnded?.({
            callerSessionId: e.callerSessionId,
            callId: r.callId,
            askId: n,
            reason: o.reason
        });
    }
}
const pr = 16;
function S$o(e, n) {
    if (n === undefined) {
        return;
    }
    let conversation_id = n.caller.conversation_id;
    if (conversation_id !== undefined && !e.conversationIds.includes(conversation_id)) {
        if (e.conversationIds.length > 0) {
            if (e.cwd !== undefined) {
                e.directoryReset = {
                    from: e.cwd,
                    at: Date.now()
                };
            }
            e.cwd = undefined;
            e.readFileState.clear();
            e.made.clear();
            oc(n.call_id, "caller conversation cleared: launch directory and read state reset");
        }
        Hn(e.conversationIds, conversation_id);
    }
    let compaction_id = n.caller.compaction_id;
    if (compaction_id !== undefined && !e.compactionIds.includes(compaction_id)) {
        e.readFileState.clear();
        Hn(e.compactionIds, compaction_id);
        oc(n.call_id, "caller conversation compacted: read state reset");
    }
}
function Hn(e, n) {
    e.push(n);
    if (e.length > pr) {
        e.shift();
    }
}
function gr(callerSessionId, n = {}) {
    let backgroundShells = new nn;
    return {
        callerSessionId,
        readFileState: lS(Mk),
        toolState: new oD,
        calls: Krs(n.callRecordBounds),
        pendingAsks: mr(),
        backgroundShells,
        made: new Map,
        activity: n.activity ?? en(()=>backgroundShells.runningOrBeingStopped),
        sessionPermissionUpdates: [],
        offeredStandingUpdates: [],
        cwd: undefined,
        directoryReset: undefined,
        conversationIds: [],
        compactionIds: [],
        createdAt: Date.now(),
        onAskEnded: n.onAskEnded
    };
}
const bLr = 20;
function w$o(e = {}) {
    let limit = e.limit ?? bLr;
    let o = new Map;
    let epoch = e.epoch ?? randomUUID();
    let activity = en(()=>[
            ...o.values()
        ].reduce((acc, item)=>acc + item.backgroundShells.runningOrBeingStopped, 0));
    let u = (p)=>{
        let y = gr(p, {
            callRecordBounds: e.callRecordBounds,
            onAskEnded: e.onAskEnded,
            activity
        });
        for (let h of e.priorCallsFor?.(p) ?? []){
            y.calls.seed(h);
        }
        o.set(p, y);
        return y;
    };
    return {
        epoch,
        limit,
        peek: (p)=>o.get(p),
        forCaller: (p)=>o.get(p) ?? (o.size < limit ? u(p) : undefined),
        heldAsk: (p, y)=>{
            let h = o.get(p)?.pendingAsks.findByCallId(y);
            if (h === undefined) {
                return undefined;
            }
            return {
                toolName: h.toolName,
                evaluatedInput: h.evaluatedInput,
                startCwd: h.startCwd
            };
        },
        get size () {
            return o.size;
        }
    };
}
const hFt = new Set([
    Be,
    Ct,
    rt,
    Xt,
    ht
]);
function Te() {
    try {
        let { value, source } = Fn("tengu_ticklish_pnueli", false);
        return value === true && source !== "override";
    } catch (error) {
        c(Error("tengu_ticklish_pnueli could not be read", {
            cause: error
        }));
        return false;
    }
}
function jn() {
    try {
        return k("tengu_violin_neck", false) === true;
    } catch  {
        return false;
    }
}
function E6n() {
    try {
        return k("tengu_violin_nut", false) === true;
    } catch  {
        return false;
    }
}
const _ve = {
    approvalAttested: false,
    modeDecidedByHost: false
};
function uun(e, n) {
    if (!n) {
        return e;
    }
    return {
        ...e,
        sandbox: e.sandbox === "required" || n.sandbox === "required" ? "required" : "tool_default",
        background: e.background === "forbidden" || n.background === "forbidden" ? "forbidden" : "tool_default",
        pinCwd: e.pinCwd || n.pinCwd === true,
        scrubCredentialEnv: e.scrubCredentialEnv || n.scrubCredentialEnv === true,
        maxTimeoutMs: hr(e.maxTimeoutMs, n.maxTimeoutMs)
    };
}
function hr(maxTimeoutMs, n) {
    if (n === undefined || n <= 0) {
        return maxTimeoutMs;
    }
    if (maxTimeoutMs === undefined) {
        return n;
    }
    return Math.min(maxTimeoutMs, n);
}
function zn() {
    try {
        let { value, source } = Fn("tengu_violin_eye", false);
        return value === true && source !== "override";
    } catch (error) {
        c(Error("tengu_violin_eye could not be read", {
            cause: error
        }));
        return false;
    }
}
const yr = 32;
const Kn = (e)=>e.replace(/\/\*\*$/, "");
const qn = (e)=>F(e.split("/"), Boolean);
const _r = po((e)=>{
    let n = e.map(Kn);
    if (n.every((o)=>o.startsWith("//") && !o.includes("**"))) {
        return Math.max(0, ...n.map(qn)) + 1;
    }
}, (e)=>e.join("\x00"));
function vr() {
    return Math.max(0, ...[
        ...q$().physicalTwinsByPattern.values()
    ].flatMap((e)=>[
            ...e
        ].map((n)=>qn(Kn(n))))) + 1;
}
const Sr = po((e)=>new RegExp(`^/*[^/]+(?:/+[^/]+){${e - 1}}`));
function Vn(e, n) {
    return Sr(n).exec(e)?.[0] ?? e;
}
function Gn(e) {
    if (!bve() || O() === "windows") {
        return e;
    }
    let n = et(e);
    if (Vn(n, yr) === n) {
        return e;
    }
    let o = _r(jnt());
    if (o === undefined) {
        return e;
    }
    return Vn(n, Math.max(o, vr()));
}
function sn(e) {
    let n = Gn(e);
    if (CTe(n)) {
        return true;
    }
    let o = Gn(e);
    return o !== n && CTe(o);
}
function Zn(e, n, o) {
    try {
        if ([
            rt,
            ht,
            Xt
        ].some((name)=>Go(n, {
                name
            }) !== null || lc(n, {
                name
            }) !== null)) {
            return "rule_or_settings";
        }
        let r = di(e);
        if (r.unresolved) {
            return "unreadable";
        }
        if ([
            r.landing,
            ...r.spellings
        ].some(Jv)) {
            return "unreadable";
        }
        if (!Kg(r.landing, n, [
            r.landing
        ], [
            o
        ])) {
            return "rule_or_settings";
        }
        try {
            let u = ie().statSync(r.landing);
            if (u.isDirectory()) {
                return "folder";
            }
            if (!u.isFile()) {
                return "not_a_file";
            }
            if (u.nlink !== 1) {
                return "second_name";
            }
        } catch (error) {
            if (!z(error)) {
                return "unreadable";
            }
        }
        if (r.spellings.some((u)=>[
                "read",
                "edit"
            ].some((p)=>[
                    "deny",
                    "ask"
                ].some((y)=>Ui(u, n, p, y) !== null)))) {
            return "rule_or_settings";
        }
        let s = Tk(e, n, "write", r);
        if (!s.allowed && s.decisionReason !== undefined) {
            return "rule_or_settings";
        }
        return undefined;
    } catch (error) {
        c(Error("a served MCP relative name could not be checked", {
            cause: error
        }));
        return "unreadable";
    }
}
const dn = Se(kre(), 1);
function an() {
    if (O() !== "wsl") {
        return [];
    }
    return [
        {
            literal: "/mnt",
            profilesGlob: "/?/Users/*",
            startsAt: []
        },
        ...Gst("/").flatMap(wr)
    ];
}
function wr({ mountPoint, within }) {
    let [, o] = /^users\/[^/]+((?:\/[^/]+)*)$/i.exec(within) ?? [];
    if (o !== undefined) {
        return [
            {
                literal: mountPoint,
                profilesGlob: "",
                startsAt: o.split("/").filter(Boolean)
            }
        ];
    }
    if (/^users$/i.test(within)) {
        return [
            {
                literal: mountPoint,
                profilesGlob: "/*",
                startsAt: []
            }
        ];
    }
    if (within !== "") {
        return [];
    }
    if (/\/[^/]$/.test(mountPoint)) {
        return [
            {
                literal: mountPoint.slice(0, -2),
                profilesGlob: "/?/Users/*",
                startsAt: []
            }
        ];
    }
    return [
        {
            literal: mountPoint,
            profilesGlob: "/Users/*",
            startsAt: []
        }
    ];
}
function k6n(e) {
    return an().some(({ literal, profilesGlob, startsAt })=>startsAt.length > 0 && e === literal || e.startsWith(`${literal}${profilesGlob}/`));
}
function ln() {
    return [
        ...Nr(),
        ...an().flatMap(({ literal, profilesGlob, startsAt })=>Mr.flatMap((r)=>br(r, startsAt)).map((r)=>({
                    literal,
                    tail: `${profilesGlob}${r}`
                })))
    ];
}
function br(e, startsAt) {
    let o = e.split("/");
    let r = startsAt.join("/");
    if (startsAt.length > 0 && !dn.default.isPathValid(r)) {
        return [
            "",
            "/**"
        ];
    }
    if (startsAt.length > 0 && !dn.default().add(`/${o.slice(0, startsAt.length).join("/")}`).ignores(r)) {
        return [];
    }
    if (startsAt.length >= o.length) {
        return [
            "",
            "/**"
        ];
    }
    return [
        `/${o.slice(startsAt.length).join("/")}`
    ];
}
const nt = [
    ".ssh",
    ".aws",
    ".config/gcloud",
    ".azure",
    ".kube",
    ".gnupg",
    ".config/gh",
    ".config/glab-cli"
];
const tt = [
    ".docker/config.json",
    ".netrc",
    ".git-credentials",
    ".config/git/credentials",
    ".npmrc",
    ".pypirc",
    ".cargo/credentials",
    ".cargo/credentials.toml",
    ".gem/credentials",
    ".pgpass",
    ".my.cnf",
    ".mylogin.cnf",
    ".terraform.d/credentials.tfrc.json",
    ".boto",
    ".s3cfg"
];
const Ar = [
    "AppData/Roaming/gcloud",
    "AppData/Roaming/GitHub CLI",
    "AppData/Roaming/gnupg",
    "AppData/Local/glab-cli"
];
const Cr = [
    "_netrc",
    "AppData/Roaming/postgresql/pgpass.conf",
    "AppData/Roaming/MySQL/.mylogin.cnf",
    "AppData/Roaming/terraform.d/credentials.tfrc.json",
    "AppData/Roaming/s3cmd.ini"
];
const Rr = [
    ".claude"
];
const ot = [
    ".claude*.json"
];
const Er = ot.flatMap((e)=>[
        ...Ccr(e).flatMap((n)=>[
                n,
                `${n}.*`
            ]),
        ...Rcr(e)
    ]);
const Pr = [
    "AppData/Local/Microsoft/Credentials",
    "AppData/Local/Microsoft/Vault",
    "AppData/Roaming/Microsoft/Credentials",
    "AppData/Roaming/Microsoft/Vault",
    "AppData/Roaming/Microsoft/Protect"
];
function Tr(e) {
    let n = e.replace(/^\.+/, "").replaceAll(" ", "").replace(/[+,;=[\]]/g, "_");
    let [, o = n, r = ""] = /^(.*)\.([^.]*)$/.exec(n) ?? [];
    let s = o.replaceAll(".", "");
    if (`${s}${r && "."}${r}` === e && s.length <= 8 && r.length <= 3 && !e.includes("*")) {
        return [];
    }
    return [
        s.slice(0, 6),
        `${s.slice(0, 2)}????`
    ].map((u)=>`${u}~?${r && "."}${r.slice(0, 3)}`.toUpperCase());
}
const Yn = [
    ...nt,
    ...Ar,
    ...Rr,
    ...Pr
];
const Xn = [
    ...tt,
    ...Cr,
    ...ot
].flatMap((e)=>[
        e,
        `${e}.*`
    ]);
var Mr = [
    ...Yn.flatMap((e)=>[
            e,
            `${e}/**`
        ]),
    ...Xn,
    ...Er,
    ...[
        ...Yn,
        ...Xn
    ].flatMap((e)=>e.split("/").flatMap((n, o, r)=>Tr(n).map((s)=>[
                    ...r.slice(0, o),
                    s
                ].join("/"))))
];
var Nr = po(()=>yi([
        ...Qn(nt).flatMap((e)=>[
                {
                    literal: e,
                    tail: ""
                },
                {
                    literal: e,
                    tail: "/**"
                }
            ]),
        ...Qn(tt).flatMap((e)=>[
                {
                    literal: e,
                    tail: ""
                },
                {
                    literal: e,
                    tail: ".*"
                }
            ])
    ], ({ literal, tail })=>`${literal}\x00${tail}`), ()=>homedir());
function Qn(e) {
    return pW(e.map((n)=>join(homedir(), n)));
}
const Wfe = "hostCredential";
function mt() {
    let e = bve() ? [
        ...QDe(),
        ...ln()
    ] : QDe();
    return [
        ..._t(e),
        ...pt(e)
    ];
}
function pt(e) {
    return zst().flatMap(({ mountPoint, readOnly })=>jnt(gt(mountPoint, e)).flatMap((r)=>[
                {
                    toolName: rt,
                    ruleContent: r
                },
                ...readOnly ? [] : [
                    {
                        toolName: ht,
                        ruleContent: r
                    }
                ]
            ]));
}
function gt(mountPoint, n) {
    return n.map((o)=>({
            ...o,
            literal: `${mountPoint}${o.literal}`
        }));
}
function yt() {
    return [
        ..._t(Q7r()),
        ...pt(Q7r())
    ];
}
function _t(e) {
    let n = O();
    let o = n === "linux" || n === "wsl";
    return [
        ...jnt(e).flatMap((r)=>[
                {
                    toolName: rt,
                    ruleContent: r
                },
                {
                    toolName: ht,
                    ruleContent: r
                }
            ]),
        ...o ? [
            {
                toolName: rt,
                ruleContent: "//proc/**/environ"
            }
        ] : [],
        ...n === "windows" ? [
            Be,
            Ct
        ].flatMap((toolName)=>Dr.map((s)=>({
                    toolName,
                    ruleContent: s
                }))) : be().flatMap((r)=>[
                r,
                `/usr/bin/${r}`
            ]).map(Pt)
    ];
}
function be() {
    switch(O()){
        case "macos":
            return [
                "security"
            ];
        case "linux":
        case "wsl":
            return [
                "secret-tool"
            ];
        case "windows":
            return Ie.flatMap((e)=>[
                    e,
                    `${e}.exe`
                ]);
        default:
            return [];
    }
}
var Ie = [
    "cmdkey",
    "vaultcmd"
];
const vt = [
    "PSCredentialManager",
    "BetterCredentials"
];
const wt = [
    ...Ie,
    "CredRead",
    "CredReadDomainCredentials",
    "CredWrite",
    "CredWriteDomainCredentials",
    "CredDelete",
    "CredEnumerate",
    "CredFindBestCredential",
    "CredBackupCredentials",
    "CredRestoreCredentials",
    "vaultcli",
    "Get-StoredCredential",
    "New-StoredCredential",
    "Remove-StoredCredential",
    "Get-CredManCredential",
    "New-CredManCredential",
    "Remove-CredManCredential",
    ...vt,
    "Find-Credential",
    "Test-Credential",
    "Set-Credential",
    "Remove-Credential",
    "Get-Secret",
    "Get-SecretInfo",
    "Set-Secret",
    "Set-SecretInfo",
    "Remove-Secret",
    "Get-SecretVault",
    "Register-SecretVault",
    "Unregister-SecretVault",
    "Unlock-SecretVault",
    "Test-SecretVault",
    "Set-SecretVaultDefault"
];
var Dr = Ie.map((e)=>`*${e}*`);
function xr(e) {
    if (Ie.includes(e)) {
        return `${e}(?:\\.exe)?`;
    }
    if (/^Cred/.test(e)) {
        return `${e}[AW]?`;
    }
    if (e === "vaultcli") {
        return "vaultcli(?:\\.dll)?";
    }
    if (vt.includes(e)) {
        return `${e}(?:\\.ps[dm]1|(?:\\.[A-Za-z0-9_]+)+)?`;
    }
    let n = e.indexOf("-");
    if (/(?:StoredCredential|CredManCredential)$/.test(e)) {
        return `${e.slice(0, n)}-(?:[^\\s'"\`;&|(){}\\[\\],-]*|[^\\s'"\`;&|(){}\\[\\],]{0,64})${e.slice(n + 1)}`;
    }
    return e;
}
const Lr = new RegExp(`(?:^|[^A-Za-z0-9_])(?:${wt.map((e)=>`(${xr(e)})`).join("|")})\\.*(?![A-Za-z0-9_.-])`, "i");
const Fr = /(?:^|[^A-Za-z0-9_])(?:(?:import|install|save|update|find|get)-module|ipmo|gmo|inmo|fimo|upmo|using[ \t]+(?:module|assembly)|#requires[ \t]+-(?:modules?|assembly)|(?:install|save|update|find)-psresource|(?:is|sv|ud|fd)res|(?:install|save|find)-package|get-command|gcm|add-type|loadfrom|loadfile|loadwithpartialname|unsafeloadfrom|loadfromassemblypath|loadfromstream|loadfromassemblyname|createinstancefrom|assemblyloadcontext)(?![A-Za-z0-9_-])|(?:assembly|activator|appdomain)\s*\]|reflection\s*\.\s*assembly|currentdomain|(?:^|[^A-Za-z0-9_])using[ \t]*(?:<#|`[\r\n])/i;
const Wr = /(?:^|[^A-Za-z0-9_])(?:(CredentialManager)|SecretManagement)(?![A-Za-z0-9_])/i;
const Br = /(?:^|[^$])(?:(Stored)|CredMan)Credential(?![A-Za-z0-9_])/i;
const $r = /(?:^|[^A-Za-z0-9_])PasswordVault(?![A-Za-z0-9_.])/i;
const Hr = /\[(?=\s*[\w.]*PasswordVault)|\[\s*(?:System\.)?Type\s*\]|New-Object|Credentials\.|(?:^|[^A-Za-z0-9_])-as(?:\s+[^\s;|&)-]|[^\sA-Za-z0-9_;|&)-])/i;
const Ur = /(?:^|[^A-Za-z0-9_])runas(?:\.exe)?(?![A-Za-z0-9_])/i;
const jr = /\/savecred(?![A-Za-z0-9_])/i;
const zr = /(?:^|[^A-Za-z0-9_-])(?:iex|invoke-expression)(?![A-Za-z0-9_-])|scriptblock\s*\]|invokescript|newscriptblock|addscript|expandstring/i;
const Vr = /(?:^|[^\w.-])(?:powershell|pwsh(?:-preview)?|cmd)(?:\.exe)?(?![\w-])/i;
function Gr(e) {
    return Vr.test(e) && /[($@{%!|]/.test(e);
}
const qr = new RegExp(LEe.source.replace(/\\[tnr]| /g, "").replace(/\+$/, ""), "g");
const Zr = /[\u2013-\u2015]/g;
function kt(e) {
    return e.replace(qr, " ").replace(Zr, "-").replace(/[\u2018-\u201b]/g, "'").replace(/[\u201c-\u201e]/g, '"');
}
function bt(e) {
    let n = kt(e);
    let o = Lr.exec(n);
    if (o !== null) {
        return wt[o.slice(1).findIndex((s)=>s !== undefined)];
    }
    let r = zr.test(n) || Gr(n);
    if (Fr.test(n) || r) {
        let s = Wr.exec(n);
        if (s !== null) {
            if (s[1] !== undefined) {
                return "CredentialManager";
            }
            return "SecretManagement";
        }
        let u = Br.exec(n);
        if (u !== null) {
            if (u[1] !== undefined) {
                return "Get-StoredCredential";
            }
            return "Get-CredManCredential";
        }
    }
    if ($r.test(n) && (Hr.test(n) || r)) {
        return "PasswordVault";
    }
    if (Ur.test(n) && jr.test(n)) {
        return "runas";
    }
}
function At(e, n = "either") {
    let o = Rt(e);
    let r = Yr(e);
    let s = n !== "powershell" || [
        e,
        o,
        r
    ].some((u)=>{
        let p = Me(kt(u));
        return it.test(p) || it.test(Me(p.normalize("NFKC")));
    });
    return D([
        e,
        o,
        r,
        ...s ? [
            mn(o),
            mn(r)
        ] : []
    ].flatMap((u)=>{
        let p = u.normalize("NFKC");
        return [
            u,
            Me(u),
            p,
            Me(p)
        ];
    }));
}
var it = new RegExp(`(?:^|[\\s\\\\/'":&()|;,{}=-])(?:${[
    ...zM
].filter((e)=>![
        "cmd",
        "powershell",
        "pwsh"
    ].includes(e)).join("|")})(?:\\.exe)?(?=[\\s'"|);}&,({]|$)|alias\\.[\\w-]+[ \\t]*(?:=[ \\t]*)?['"]?!`, "i");
function mn(e) {
    return e.replace(/\\\r?\n/g, "").replaceAll("\\", "");
}
function Me(e) {
    return e.replace(/\u0131/g, "i").replace(/\u017f/g, "s");
}
function Rt(e) {
    return Et(e, "");
}
function Yr(e) {
    return Et(e, " ");
}
function Et(e, n) {
    return Qr(vA(e.replace(/\^\r?\n/g, ""))).replace(/\$(?=["'])/g, "").replace(Jr, n);
}
const Xr = {
    n: `
`,
    t: "\t",
    r: "\r",
    e: "\x1B"
};
function Qr(e) {
    return e.replace(/\$'((?:[^'\\]|\\.)*)'/g, (n, o)=>`'${o.replace(/\\(?:x([0-9A-Fa-f]{1,2})|u([0-9A-Fa-f]{1,4})|U([0-9A-Fa-f]{1,8})|([0-7]{1,3})|(.))/g, (r, s, u, p, y, h)=>{
            let _ = s !== undefined ? parseInt(s, 16) : u !== undefined ? parseInt(u, 16) : p !== undefined ? parseInt(p, 16) : y !== undefined ? parseInt(y, 8) : undefined;
            if (_ === undefined) {
                return Xr[h ?? ""] ?? h ?? "";
            }
            if (_ <= 1114111) {
                return String.fromCodePoint(_);
            }
            return "";
        })}'`);
}
var Jr = /["'`^\u2018-\u201e]/g;
function Pt(e) {
    return {
        toolName: Be,
        ruleContent: `${e}:*`
    };
}
const es = 4;
async function Ot(tool, { command }) {
    if (typeof command !== "string") {
        return;
    }
    if (O() === "windows") {
        if (tool.name !== Be && tool.name !== Ct) {
            return;
        }
        let s;
        for (let u of At(command, tool.name === Be ? "bash" : "powershell")){
            s ??= bt(u);
        }
        if (s !== undefined) {
            return {
                source: Wfe,
                ruleBehavior: "deny",
                ruleValue: {
                    toolName: tool.name,
                    ruleContent: `*${s}*`
                }
            };
        }
        return;
    }
    let [r] = be();
    if (r !== undefined && tool.name === Be && await It(command, es)) {
        return {
            source: Wfe,
            ruleBehavior: "deny",
            ruleValue: Pt(r)
        };
    }
}
const ns = 8;
const ts = 512;
const os = 131072;
const rs = /^(?:\/|~(?:\/|$)|\.{1,2}(?:\/|$)|\$\{?HOME\}?(?:\/|$)|file:)/i;
const ss = /(^|[/\\])\.\.?([/\\]|$)/;
const un = /[/\\~*?[\]{}<>|;&`\x00-\x1f\x7f-\x9f\p{Cf}]|^\.|%(?=[0-9a-f]{2}|u[0-9a-f]{4})|\$(?=[\p{L}_{('"])|[@!+](?=\()|\+(?=[.~])|^[a-z][a-z0-9+.-]*:(?=\S)/iu;
const is = /^["'(<[{]+/;
const as = `"')>]}`;
const ds = ".,;:!?";
function ls(e) {
    return HDt(e.replace(is, ""), as);
}
function cs(e) {
    return /^[-+][a-zA-Z]+$/.test(e) && e.includes("c");
}
function us(e) {
    return e.slice(0, e.lastIndexOf("/") + 1);
}
const at = /[,:=]+/;
const Tt = /[*?[\]{}()@+!\\]/;
const fs = /[\x00-\x1f\x7f-\x9f\p{Cf}\s"'`%#|<>;&,:=]/u;
const Ne = /[\t\n\v\f\r\x85\u2028\u2029]+/g;
const ms = /[\n\v\f\r\x85\u2028\u2029;&|]+/;
const ps = /^\$(?=['"])|['"\\]/g;
const gs = /^file:\/\/(?:localhost)?(?=\/)/i;
const hs = /^(https?):\/\/((?:[a-z0-9-]{1,63}\.)+[a-z][a-z0-9-]{0,62})(?::([1-9]\d{0,4}))?(\/(?:[\w-]+(?:\.[\w-]+)*(?:\/[\w-]+(?:\.[\w-]+)*)*\/?)?(?:\?[\w\-.=&]*)?(?:#[\w\-.]*)?)?$/i;
const dt = /^[A-Za-z_][\w-]*(?:\/[A-Za-z0-9_][\w-]*(?:\.[\w-]+)*)+$/;
const fn = /^(?![/~$]|[A-Za-z][A-Za-z0-9+.-]*:)\S*[/\\]\S*$/;
const ys = 512;
const _s = 16;
const vs = 16;
const Ss = /(?:^|\/)proc\/\d+(?:\/|$)/;
const lt = /^(?:(?:System\/)?Volumes\/)?Data(?:\/|$)/i;
const ws = /^(?:System\/)?Volumes\/Data(?:\/|$)/i;
const ks = /\/(?:System(?:\/Volumes)?|Volumes)$/i;
const bs = /\.(?:lan|home|corp|private|intranet|test|onion|arpa)$|(?:^|\.)(?:ts\.net|fritz\.box|xip\.io|rbndr\.us|1u\.ms|rebind\.it)$/;
const As = /(?:^|\.)\d+(?:\.|$)|(?:^|[.-])(?:0x|[0-9a-f]{8}(?:[.-]|$))|(?:^|[^0-9])\d+(?:[.-]\d+){2}/;
const Cs = 2048;
function pn(tool, n, o) {
    if (tool.isMcp !== true) {
        return;
    }
    let r = O();
    let s = r === "macos";
    let u = r === "linux" || r === "wsl";
    let p = be();
    let y = zn();
    let h = Te();
    let _ = (w)=>{
        if (s) {
            return to(w.normalize("NFC"));
        }
        if (r === "windows") {
            return Zd(w).replaceAll("\\", "/");
        }
        return w;
    };
    let A = pW(D([
        ...TL(),
        ...QDe().filter(({ tail })=>tail === "/**").map(({ literal })=>literal),
        ...a.CLAUDE_CODE_HOST_CREDS_FILE ? [
            dirname(a.CLAUDE_CODE_HOST_CREDS_FILE)
        ] : []
    ]).map((w)=>w.replace(/[\\/]+$/, ""))).map(_);
    let C = (w)=>({
            kind: "deny",
            rule: {
                source: Wfe,
                ruleBehavior: "deny",
                ruleValue: {
                    toolName: rt,
                    ruleContent: w
                }
            }
        });
    let N = QDe().filter(({ tail })=>tail.startsWith("/")).map(({ literal, tail })=>({
            dir: _(literal.replace(/[\\/]+$/, "")),
            segments: tail.split("/").slice(1).map((T)=>new RegExp(`^${T.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*+/g, "[^/]*").replace(/\?/g, "[^/]")}$`, s ? "i" : ""))
        }));
    let I = (w)=>{
        let E = false;
        let T = _o(w);
        let R = zst();
        let H = new Map(R.flatMap(({ mountPoint })=>T.filter((X)=>X === mountPoint || X.startsWith(`${mountPoint}/`)).map((X)=>[
                    X.slice(mountPoint.length) || "/",
                    X
                ])));
        let M = D([
            ...T,
            ...s ? [
                uG(w)
            ] : [],
            ...H.keys()
        ]);
        for (let j of M){
            let X = _(j);
            if (sn(j) || (s || r === "windows") && sn(X) || u && /^\/proc\/.+\/environ$/.test(j) || A.some((le)=>X === le || X.startsWith(`${le}/`))) {
                return {
                    under: H.get(j) ?? j
                };
            }
            let oe = X.replace(/\/+$/, "");
            if (oe === "" || A.some((le)=>le.startsWith(`${oe}/`)) || R.some(({ mountPoint })=>mountPoint.startsWith(`${oe}/`)) || N.some(({ dir, segments })=>dir.startsWith(`${oe}/`) || oe === dir || oe.startsWith(`${dir}/`) && oe.slice(dir.length + 1).split("/").every((we, he)=>he < segments.length && segments[he].test(we))) || u && /^\/proc(?:\/|$)/.test(oe) || s && /^\/(?:system(?:\/volumes(?:\/data)?)?|volumes)$/.test(oe) || /^\/dev(?:\/fd(?:\/|$)|$)/.test(oe)) {
                E = true;
            }
        }
        if (E) {
            return "above";
        }
        return "clear";
    };
    let B = r === "windows" ? D([
        ...A,
        ...N.map(({ dir })=>dir)
    ].flatMap((w)=>/^([a-z]):\//.exec(w)?.slice(1) ?? [])) : [];
    let S = (w)=>{
        let E = ct(w);
        if (E !== undefined) {
            let R = /^[\\/](?![\\/])/.test(E) && !/^\/[a-z]\//i.test(E) ? [
                E,
                ...B.map((M)=>`${M.toUpperCase()}:${E.replace(/\//g, "\\")}`)
            ] : [
                E
            ];
            let H;
            for (let M of R){
                let j = I(M);
                if (j === "above") {
                    H = "ask";
                } else if (j !== "clear") {
                    return {
                        deny: j.under
                    };
                }
            }
            return H;
        }
        let T = w.search(Tt);
        if (T > 0) {
            let R = us(w.slice(0, T));
            let H = R === "" ? undefined : ct(R);
            if (H !== undefined) {
                let M = I(H);
                if (M !== "clear" && M !== "above") {
                    return {
                        deny: `${M.under} (${w.slice(0, 128)})`
                    };
                }
            }
        }
        return "ask";
    };
    let P = (w)=>{
        let E = w;
        for(let T = 0; T < 3; T++){
            let R = ls(E);
            let H = HDt(R, ds);
            if (H === "") {
                return R || E;
            }
            if (H === E) {
                break;
            }
            E = H;
        }
        return E;
    };
    let Y = (w)=>{
        let E = P(w);
        return [
            E,
            ...E.split(at),
            ...w.split(at)
        ].some((T)=>T !== "" && T !== w && un.test(P(T)));
    };
    let te;
    let K = ()=>te ??= [
            ...A.map((dir)=>({
                    dir,
                    segments: []
                })),
            ...N,
            {
                dir: "/dev/fd",
                segments: []
            },
            ...u ? [
                {
                    dir: "/proc",
                    segments: [
                        /^(?:self|thread-self)$/
                    ]
                }
            ] : [],
            ...QDe().filter(({ tail })=>!tail.startsWith("/")).map(({ literal, tail })=>{
                if (tail === "") {
                    return {
                        dir: _(literal),
                        segments: []
                    };
                }
                return {
                    dir: _(dirname(literal)),
                    segments: [
                        new RegExp(`^${basename(literal).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\.[^/]*$`, s ? "i" : "")
                    ]
                };
            })
        ];
    let V;
    let U = new Map;
    let q = (w)=>{
        let E = Kr() ?? AS();
        return D([
            ...E === null ? [] : [
                E
            ],
            ...iX(),
            ...Azo(),
            ...w.additionalWorkingDirectories.keys(),
            Zxe()
        ]);
    };
    let ce = (w, E)=>{
        let T = q(E);
        let R = w.split("/");
        let H = [
            w
        ];
        if (s) {
            for(let M = 0; M < R.length; M++){
                let j = R.slice(M).join("/");
                if (M > 0 && !ws.test(j)) {
                    continue;
                }
                while(lt.test(j)){
                    j = j.replace(lt, "");
                    H.push(j);
                }
            }
        }
        if ([
            ...H.map((M)=>`/${M}`),
            ...R.map((M, j)=>`/${R.slice(j).join("/")}`),
            ...T.map((M)=>join(M, w))
        ].some((M)=>Jv(M) || NH(M, s ? "darwin" : "linux"))) {
            return "unreadable";
        }
        if (s && ks.test(w) || H.some((M)=>I(`/${M}`) !== "clear" || I(join(homedir(), M)) !== "clear" || Rs(_(M), K()) || Es(_(M), K()) || u && Ss.test(M))) {
            return "guarded_place";
        }
        for (let M of T){
            let j = join(M, w);
            let X = I(j) === "clear" ? Zn(j, E, M) : "guarded_place";
            if (X !== undefined) {
                return X;
            }
        }
    };
    let ue = (w)=>{
        if (!fn.test(w)) {
            return;
        }
        try {
            if (w.length > ys || !dt.test(w) || Lt(w, "/") + 1 > vs) {
                return "not_plain_name";
            }
            let E = U.get(w);
            if (E !== undefined) {
                return E;
            }
            let T = w.slice(0, w.indexOf("/")).toLowerCase();
            if (aae(T) || pYo(T, hostname())) {
                return "host_like";
            }
            if (r !== "macos" && r !== "linux") {
                return "platform";
            }
            if (o === undefined) {
                return "unreadable";
            }
            if (U.size >= _s) {
                return "too_many";
            }
            let R = ce(w, o) ?? "relative_path";
            U.set(w, R);
            return R;
        } catch (error) {
            c(Error("a served MCP relative name could not be judged", {
                cause: error
            }));
            return "unreadable";
        }
    };
    let ge = (w, E)=>{
        V = undefined;
        if (w === "") {
            return;
        }
        if (!/\s/.test(w)) {
            let T = un.test(w) ? S(w) : Y(w) ? "ask" : undefined;
            if (T !== "ask") {
                return T;
            }
            if (y && Ps(w)) {
                let H = URL.parse(w)?.pathname;
                if (H === "/" || H !== undefined && S(H) === undefined && S(`~${H}`) === undefined) {
                    return "web_address";
                }
                return "ask";
            }
            let R = !h ? undefined : w === E ? ue(w) : fn.test(w) ? "not_plain_name" : undefined;
            if (R === "relative_path") {
                return "relative_path";
            }
            V = R;
            return "ask";
        }
        if (rs.test(w)) {
            return "ask";
        }
        for (let T of w.split(/\s+/)){
            let R = P(T);
            if (un.test(R) ? S(R) !== undefined : Y(T)) {
                V = !h ? undefined : dt.test(T) ? "in_sentence" : fn.test(T) ? "not_plain_name" : undefined;
                return "ask";
            }
        }
    };
    let L;
    let G = false;
    let Q = false;
    let Z = 0;
    let re = 0;
    for (let w of Nt(n, ns)){
        if (w === Mt || ++Z > ts) {
            return C("(nested input this machine could not inspect)");
        }
        let E = w.normalize("NFKC");
        for (let T of D([
            w,
            E
        ].flatMap((R)=>[
                R.replace(Ne, " ").trim(),
                R.replace(Ne, "").trim()
            ]))){
            let R = ge(T, w);
            if (R === "ask") {
                if (L === undefined) {
                    L = {
                        kind: "ask",
                        spelling: T.slice(0, 256),
                        ...V !== undefined && {
                            why: V
                        }
                    };
                }
            } else if (R === "relative_path") {
                Q = true;
            } else if (R === "web_address") {
                G = true;
            } else if (R !== undefined) {
                return C(R.deny);
            }
        }
        if (r === "windows" && L === undefined && ((re += Math.max(w.length, E.length)) > os || D([
            w,
            E
        ].flatMap((T)=>[
                T.replace(Ne, " "),
                T.replace(Ne, "")
            ])).some((T)=>At(T).some((R)=>bt(R) !== undefined)))) {
            L = {
                kind: "ask",
                spelling: E.slice(0, 256)
            };
        }
        if (p.length > 0 && L === undefined) {
            for (let T of E.split(ms)){
                let R = T.trim().split(/\s+/).filter(Boolean).map((M)=>P(M).replace(ps, ""));
                let H = R.length < 2 ? R : Dt(R);
                if (H === undefined || H.length >= 2 && p.includes(H[0])) {
                    L = {
                        kind: "ask",
                        spelling: T.trim().slice(0, 256)
                    };
                    break;
                }
            }
        }
    }
    return L ?? (Q ? {
        kind: "relative_path"
    } : G ? {
        kind: "web_address"
    } : undefined);
}
function Rs(e, n) {
    let o = e.split("/");
    return n.some(({ dir, segments })=>{
        let u = dir.split("/").filter(Boolean);
        let p = u.length + segments.length;
        let y = (_, A)=>{
            if (_ < u.length) {
                return u[_] === A;
            }
            return segments[_ - u.length].test(A);
        };
        let h = (_)=>_ < u.length || !y(_, "");
        for(let _ = 0; _ < p; _++){
            let A = o.slice(0, p - _);
            if (A.some((C, N)=>h(_ + N)) && A.every((C, N)=>y(_ + N, C))) {
                return true;
            }
        }
        return false;
    });
}
function Es(e, n) {
    let o = e.split("/");
    return n.some(({ dir, segments })=>{
        let u = dir.split("/").filter(Boolean);
        let p = u.findLastIndex((A)=>A.startsWith(".")) + 1;
        let y = u.length + segments.length;
        let h = (A, C)=>{
            if (A < u.length) {
                return u[A] === C;
            }
            return segments[A - u.length].test(C);
        };
        let _ = (A)=>A < u.length || !h(A, "");
        for(let A = 1; A < o.length; A++){
            for(let C = 0; C < y; C++){
                let N = o.slice(A, A + y - C);
                let I = C + N.length < p;
                if ((C >= p || I) && F([
                    ...N.keys()
                ], (B)=>_(C + B)) >= (p === 0 || I ? 1 : 2) && N.every((B, S)=>h(C + S, B))) {
                    return true;
                }
            }
        }
        return false;
    });
}
function ct(e) {
    let n = e;
    if (/^file:/i.test(n)) {
        let o = gs.exec(n);
        if (o === null) {
            return;
        }
        n = n.slice(o[0].length);
    }
    n = n.replace(/^\$\{?HOME\}?(?=\/|$)/, "~");
    if (n === "~") {
        n = "~/";
    }
    if (O() === "windows") {
        n = (n[0] ?? "") + n.slice(1).replace(/[\\/]{2,}/g, "/");
        n = n.replace(/^([A-Za-z]):[\\/]/, (o, r)=>`/${r.toLowerCase()}/`).replace(/^\/(?:proc\/cygdrive|cygdrive|mnt)\/(?=[a-z](?:\/|$))/i, "/").replace(/^\/([A-Za-z])$/, "/$1/").replace(/^\/([A-Z])\//, (o, r)=>`/${r.toLowerCase()}/`);
        if (/^\/[a-z]\//.test(n)) {
            n = n.replaceAll("\\", "/");
        }
        if (/^[\\/]{2}/.test(n) || /^\/(?:mnt|cygdrive)\/?$/i.test(n) || /^\/proc(?:\/|$)/i.test(n)) {
            return;
        }
    }
    n = O() === "windows" && /^\/[a-z]\/+$/i.test(n) ? n.replace(/\/+$/, "/") : n.replace(/(?<=[^/])\/+$/, "");
    if (!/^(?:\/|~\/)/.test(n) || fs.test(n) || Tt.test(n) || n.includes("$") || n.includes("~", 1) || ss.test(n.slice(1))) {
        return;
    }
    return et(n, homedir());
}
function Ps(e) {
    let n = e.length > Cs ? null : hs.exec(e);
    if (n === null) {
        return false;
    }
    let o = n[1].toLowerCase();
    let r = n[2].toLowerCase();
    let s = n[4] ?? "/";
    if (uYo(r) || aae(r) || bs.test(r) || As.test(r) || /[?#&=]\./.test(s)) {
        return false;
    }
    let u = n[3] === undefined || n[3] === (o === "https" ? "443" : "80") ? "" : `:${n[3]}`;
    let p = URL.parse(e);
    return p !== null && p.href === `${o}://${r}${u}${s}` && p.hostname === r;
}
var Mt = Symbol("depth-exhausted");
function* Nt(e, n) {
    if (typeof e === "string") {
        yield e;
        return;
    }
    if (e === null || typeof e !== "object") {
        return;
    }
    let o = Array.isArray(e) ? e.map((r)=>[
            "",
            r
        ]) : Object.entries(e);
    if (n <= 0) {
        if (o.length > 0) {
            yield Mt;
        }
        return;
    }
    for (let [r, s] of o){
        if (r !== "") {
            yield r;
        }
        yield* Nt(s, n - 1);
    }
}
async function It(e, n) {
    let o = await bFt(e);
    if (o.kind !== "simple") {
        return false;
    }
    for (let r of o.commands){
        let s = Dt(r.argv);
        if (s === undefined) {
            return true;
        }
        let [u = "", ...p] = s;
        if (be().includes(u)) {
            return true;
        }
        let y = u.replace(/\.exe$/, "");
        if (!zM.has(y)) {
            continue;
        }
        if (!ode.has(y)) {
            if (p.some((h)=>{
                let _ = mn(Rt(h));
                let A = O() === "macos" ? _.toUpperCase().toLowerCase() : _;
                return be().some((C)=>A.includes(C));
            })) {
                return true;
            }
            continue;
        }
        if (!p.some(cs)) {
            continue;
        }
        if (n <= 1) {
            return true;
        }
        for (let h of p){
            if (await It(h, n - 1)) {
                return true;
            }
        }
    }
    return false;
}
function Dt(e) {
    let n = O();
    let o = n === "macos" || n === "windows";
    let r = [
        ...e
    ];
    for(let s = 0; s < 32; s++){
        let u = basename(r[0] ?? "");
        r[0] = o ? u.toUpperCase().toLowerCase() : u;
        let p = r[0] === "env" ? Os(r) : undefined;
        if (p !== undefined) {
            r = p;
            continue;
        }
        let y = Zet(r);
        let h = y.length !== r.length || y[0] !== r[0];
        if (h && !/^[-+\d]/.test(y[0] ?? "")) {
            r = y;
            continue;
        }
        if (!ECe.has(r[0]) || r[0] === "command" && r.some(Cit)) {
            if (h) {
                return y;
            }
            return r;
        }
        let _ = r.findIndex((A, C)=>C > 0 && !/^(?:[-+]|\d+(?:\.\d+)?[smhd]?$|[A-Za-z_]\w*=)/.test(A));
        if (_ < 1) {
            return r;
        }
        r = r.slice(_);
    }
}
function Os(e) {
    for(let n = 1; n < e.length; n++){
        let o = e[n];
        let r = o.startsWith("--split-string=") ? o.slice(15) : /^-[^-]*S/.test(o) ? o.slice(o.indexOf("S") + 1) : undefined;
        let s = o === "--split-string" || r === "";
        let u = s ? e[n + 1] ?? "" : r;
        if (u !== undefined) {
            return [
                ...u.trim().split(/\s+/).filter(Boolean),
                ...e.slice(n + (s ? 2 : 1))
            ];
        }
        if ([
            "-u",
            "-C",
            "--unset",
            "--chdir"
        ].includes(o)) {
            n++;
        } else if (o === "--" || !/^(?:-|[A-Za-z_]\w*=)/.test(o)) {
            return;
        }
    }
}
function gn(decisionReason) {
    if (decisionReason?.type === "rule") {
        if (decisionReason.rule.source === Wfe) {
            return decisionReason.rule;
        }
        return undefined;
    }
    if (decisionReason?.type === "subcommandResults") {
        for (let n of decisionReason.reasons.values()){
            let o = gn(n.decisionReason);
            if (o !== undefined) {
                return o;
            }
        }
    }
}
function v$o(e, n, o, r) {
    if (e.getPath === undefined) {
        return;
    }
    let s = p_(e, n);
    if (!s.success) {
        return;
    }
    let u = Wm(r, ()=>e.getPath?.(s.data));
    if (typeof u !== "string" || u === "") {
        return;
    }
    let p = e.isReadOnly(s.data) ? [
        "read",
        "edit"
    ] : [
        "edit",
        "read"
    ];
    let y = _o(et(u, r));
    let h = O() === "macos" ? y.flatMap((_)=>[
            _,
            to(_)
        ]) : y;
    for (let _ of h){
        for (let A of p){
            let C = Ui(_, o, A, "deny");
            if (C?.source === Wfe) {
                return C;
            }
        }
    }
}
function sgt(e) {
    let n = e.ruleValue.ruleContent ?? "";
    if (n.startsWith("//")) {
        return n.slice(1);
    }
    return n;
}
function T6n(e) {
    let n = sgt(e);
    return jnt(zst().map(({ mountPoint })=>({
            literal: mountPoint,
            tail: ""
        }))).some((o)=>n.startsWith(`${o.slice(1)}/`));
}
function fun(e) {
    if (e.ruleValue.toolName === Be || e.ruleValue.toolName === Ct) {
        return "keychain";
    }
    let n = e.ruleValue.ruleContent ?? "";
    let o = ln();
    if (jnt([
        ...o,
        ...zst().flatMap(({ mountPoint })=>gt(mountPoint, o))
    ]).includes(n)) {
        return "personal_credential";
    }
    if (/\/daemon\/dispatch\/\*\*$/.test(n)) {
        return "exec_ingest";
    }
    if (/\/Library\/Keychains\/\*\*$/.test(n)) {
        return "keychain_files";
    }
    if (/\/Microsoft\/(?:Credentials|Vault|Protect)\/\*\*$/.test(n)) {
        return "credential_store_files";
    }
    if (e.ruleValue.toolName === ht) {
        return "write";
    }
    return "read";
}
const Ts = "tengu_tranquil_nebula";
function gFt() {
    return ld(Ts, {
        safe: false
    });
}
const Ds = 512;
const Wt = 1048576;
const xs = 16;
const Ls = 16;
const Fs = 64;
const Ws = new Set([
    "command",
    "description",
    "timeout",
    "run_in_background",
    "dangerouslyDisableSandbox"
]);
function zt(e, cwd, launchDir) {
    let r = Vt(launchDir);
    if (r === undefined) {
        return undefined;
    }
    return De(e, cwd, launchDir, r);
}
function Vt(launchDir) {
    let n = di(launchDir);
    if (n.unresolved) {
        return undefined;
    }
    return n.landing;
}
function De(e, n, launchDir, r) {
    if (e === "" || e.startsWith("~") || e.endsWith("/") || e.endsWith(sep) || Vs(e) || [
        ...e
    ].some((p)=>p < " " || p === "\x7F")) {
        return;
    }
    let s = nR(e, n, {
        ...Ic(),
        additionalWorkingDirectories: new Map([
            [
                launchDir,
                {
                    path: launchDir,
                    source: "session"
                }
            ]
        ])
    }, "write");
    if (s.allowed || s.isInWorkingDir !== true || s.decisionReason !== undefined) {
        return;
    }
    let u = di(resolve(n, e));
    if (u.unresolved || u.leafIsSymlink || nNe(u) !== null || !u.landing.startsWith(r + sep) || !Wd(u.landing, launchDir)) {
        return;
    }
    return u.landing;
}
async function hn(input, n) {
    let e_command = input.command;
    if (typeof e_command !== "string" || input.run_in_background === true || input.dangerouslyDisableSandbox === true || Object.keys(input).some((p)=>input[p] !== undefined && !Ws.has(p))) {
        return;
    }
    let r = await X$(e_command);
    if (r.kind !== "simple" || r.commands.length !== 1 || r.bareAssignmentNames.length > 0) {
        return;
    }
    let s = r.commands[0];
    let u = s?.argv[0];
    if (s !== undefined && u !== undefined && n.includes(u) && s.argvSourceLiteral === true && !s.hasUnquotedGlob && s.envVars.length === 0 && s.redirects.length === 0 && !s.argv.some(Vs) && e_command === s.argv.join(" ")) {
        return s;
    }
}
async function E$o(e) {
    if (!e.activity.aloneWith(e.callId)) {
        return;
    }
    let { starts } = e.activity;
    let o = Vt(e.launchDir);
    let nomination = o === undefined ? undefined : await Bs(e.tool, e.input, e.cwd, e.launchDir, o);
    if (o === undefined || nomination === undefined) {
        return;
    }
    let s = nomination.by === "shell" ? nomination.paths : [
        nomination.path
    ];
    let absent = [];
    for (let _ of $s(s, e.launchDir, o)){
        if (await Ae(_) === "absent") {
            absent.push(_);
        }
    }
    let p = nomination.by === "shell" ? undefined : nomination.path;
    let y = p === undefined ? undefined : e.record.get(p);
    let rewritten = p !== undefined && y !== undefined && await Gt(y, p) ? p : undefined;
    if (absent.length === 0 && rewritten === undefined) {
        return undefined;
    }
    return {
        nomination,
        absent,
        rewritten,
        starts
    };
}
async function k$o(e) {
    let { look, record } = e;
    if (!Bt(e)) {
        return;
    }
    let { nomination } = look;
    let s = new Map;
    for (let h of look.absent.toSorted((_, A)=>A.length - _.length)){
        let _ = await Ae(h);
        if (_ === "absent" || _ === "unseen") {
            continue;
        }
        let A = _.isDirectory() ? await Hs(h, _, s) : await Ht(h, _, nomination.by === "write" && h === nomination.path ? nomination.sha256 : "empty");
        if (A !== undefined) {
            s.set(h, A);
        }
    }
    let { rewritten } = look;
    let p = rewritten === undefined ? undefined : record.get(rewritten);
    let y;
    if (rewritten !== undefined && nomination.by === "write") {
        let h = await Ae(rewritten);
        let _ = h === "absent" || h === "unseen" ? undefined : await Ht(rewritten, h, nomination.sha256);
        if (_ !== undefined) {
            s.set(rewritten, _);
        } else if (p === undefined || !await Gt(p, rewritten)) {
            y = rewritten;
        }
    }
    if (!Bt(e)) {
        return;
    }
    if (y !== undefined) {
        record.delete(y);
    }
    for (let [h, _] of s){
        record.delete(h);
        record.set(h, _);
    }
    for (let h of record.keys()){
        if (record.size <= Ds) {
            break;
        }
        record.delete(h);
    }
}
async function Gt(e, n) {
    let o = await Ae(n);
    if (o === "absent" || o === "unseen" || o.dev !== e.dev || o.ino !== e.ino || o.birthtimeNs !== e.birthtimeNs) {
        return false;
    }
    if (e.kind === "dir") {
        return o.isDirectory() && await Kt(n) && await qt(n, o);
    }
    return o.isFile() && o.nlink === 1n && o.size === e.size && o.mtimeNs === e.mtimeNs && o.ctimeNs === e.ctimeNs && await Zt(n, o) === e.sha256;
}
function Bt(e) {
    return e.activity.starts === e.look.starts && e.activity.aloneWith(e.callId);
}
async function Bs(tool, input, cwd, launchDir, s) {
    if (tool.name === Be) {
        let p = await hn(input, [
            "mkdir",
            "touch"
        ]);
        let y = p?.argv[0];
        if (p === undefined || y !== "mkdir" && y !== "touch") {
            return;
        }
        let h = pJ[y](p.argv.slice(1));
        if (h.length === 0 || h.length > xs) {
            return;
        }
        let paths = h.flatMap((A)=>De(A, cwd, launchDir, s) ?? []);
        if (paths.length === 0) {
            return undefined;
        }
        return {
            by: "shell",
            paths
        };
    }
    if (tool.name !== Xt) {
        return;
    }
    let u = typeof input.file_path === "string" ? De(input.file_path, cwd, launchDir, s) : undefined;
    if (u === undefined) {
        return;
    }
    if (typeof input.content === "string") {
        return {
            by: "write",
            path: u,
            sha256: createHash("sha256").update(input.content, "utf8").digest("hex")
        };
    }
}
function $s(e, launchDir, o) {
    let r = new Set(e);
    for (let s of e){
        let u = dirname(s);
        for(let p = 1; p < Ls; p++){
            if (r.has(u) || De(u, launchDir, launchDir, o) !== u) {
                break;
            }
            r.add(u);
            u = dirname(u);
        }
    }
    return [
        ...r
    ];
}
async function Ae(e) {
    try {
        return await ie().lstatBigint(e);
    } catch (error) {
        if (z(error)) {
            return "absent";
        }
        return "unseen";
    }
}
async function Kt(e) {
    try {
        await ie().openDirNoFollow(e);
        return true;
    } catch  {
        return false;
    }
}
async function qt(e, n) {
    let o = await Ae(e);
    return o !== "absent" && o !== "unseen" && o.dev === n.dev && o.ino === n.ino && o.birthtimeNs === n.birthtimeNs;
}
async function Zt(e, n) {
    if (n.size > BigInt(Wt)) {
        return;
    }
    try {
        let o = await open(e, h9());
        try {
            let r = await o.stat({
                bigint: true
            });
            if (!$t(r, n)) {
                return;
            }
            let s = await R0(o, Wt + 1, "file");
            let u = await o.stat({
                bigint: true
            });
            if ($t(u, n) && BigInt(s.length) === u.size) {
                return createHash("sha256").update(s).digest("hex");
            }
            return undefined;
        } finally{
            await o.close();
        }
    } catch  {
        return;
    }
}
function $t(e, n) {
    return e.isFile() && e.dev === n.dev && e.ino === n.ino && e.ctimeNs === n.ctimeNs;
}
async function Ht(e, n, o) {
    if (!n.isFile() || n.nlink !== 1n || o === "empty" && n.size !== 0n) {
        return;
    }
    let sha256 = await Zt(e, n);
    if (sha256 === undefined || o !== "empty" && o !== sha256) {
        return undefined;
    }
    return {
        kind: "file",
        dev: n.dev,
        ino: n.ino,
        birthtimeNs: n.birthtimeNs,
        size: n.size,
        mtimeNs: n.mtimeNs,
        ctimeNs: n.ctimeNs,
        sha256
    };
}
async function Hs(e, n, o) {
    if (n.birthtimeNs <= 0n || !await Kt(e)) {
        return;
    }
    try {
        let r = await ie().readdir(e);
        if (r.length <= Fs && r.every((s)=>o.has(join(e, s.name))) && await qt(e, n)) {
            return {
                kind: "dir",
                dev: n.dev,
                ino: n.ino,
                birthtimeNs: n.birthtimeNs
            };
        }
        return undefined;
    } catch  {
        return;
    }
}
const Zs = 16;
const Ys = 256;
const Xs = 4194304;
const Qs = new Set([
    "--recursive",
    "--force",
    "--dir",
    "--verbose"
]);
const no = ":";
function T$o(e) {
    let n = (p, y)=>i("tengu_remote_tool_serve", {
            op: b("own_made_delete"),
            call_id: ye(e.rowCallId),
            outcome: d(p),
            why: pe(y)
        });
    let o = async (tool, y)=>{
        if (e.sandboxRequired) {
            return {
                proven: false,
                why: "sandbox_required"
            };
        }
        if (qHe()) {
            return {
                proven: false,
                why: "owner_rules"
            };
        }
        if (!e.activity.aloneWith(e.callId)) {
            return {
                proven: false,
                why: "busy"
            };
        }
        try {
            if (Sd() || qe.isSandboxingEnabled()) {
                return {
                    proven: false,
                    why: "sandbox_on"
                };
            }
            let h = await Js({
                ...e,
                tool,
                input: y
            });
            if (!h.proven) {
                return h;
            }
            let _ = e.masks();
            if (!_.vouched) {
                return {
                    proven: false,
                    why: "masks_unread"
                };
            }
            let A = _.paths.map((C)=>{
                let N = Cm(C);
                if (!ed(C)) {
                    return (B)=>Wd(B, N);
                }
                let I = new RegExp(B8t(N), "i");
                return (B)=>Wd(B, N) || I.test(B);
            });
            if ([
                ...h.files,
                ...h.folders
            ].some((C)=>A.some((N)=>N(C)))) {
                return {
                    proven: false,
                    why: "masked"
                };
            }
            return h;
        } catch (error) {
            Jt(error);
            return {
                proven: false,
                why: "threw"
            };
        }
    };
    let r = new Set;
    let s = (p)=>{
        if (p.proven) {
            for (let y of [
                ...p.files,
                ...p.folders
            ]){
                r.add(y);
            }
        }
        return p;
    };
    let u = ()=>{
        for (let p of r){
            e.record.delete(p);
        }
    };
    return {
        isOn: gFt,
        async prove (p, y) {
            if (!gFt()) {
                return false;
            }
            let h = s(await o(p, y));
            n(h.proven ? "released" : "unproven", h.proven ? undefined : h.why);
            return h.proven;
        },
        async remove (p, y) {
            if (!gFt()) {
                return "none";
            }
            let h = s(await o(p, y));
            if (!h.proven) {
                u();
                n("kept", h.why);
                return "none";
            }
            let { removed, why } = await ei({
                ...e,
                ...h
            }).catch((C)=>{
                Jt(C);
                return {
                    removed: 1,
                    why: "threw"
                };
            });
            u();
            if (why === undefined) {
                n("removed");
                return "all";
            }
            n(removed === 0 ? "kept" : "part_removed", why);
            if (removed === 0) {
                return "none";
            }
            return "some";
        }
    };
}
async function Js(e) {
    if (O() === "windows") {
        return {
            proven: false,
            why: "platform"
        };
    }
    if (e.tool.name !== Be) {
        return {
            proven: false,
            why: "not_shell"
        };
    }
    let n = await hn(e.input, [
        "rm"
    ]);
    if (n === undefined) {
        return {
            proven: false,
            why: "shape"
        };
    }
    let o = n.argv.slice(1);
    let r = o.findIndex((S)=>!S.startsWith("-"));
    let s = r === -1 ? o : o.slice(0, r);
    let u = r === -1 ? [] : o.slice(r);
    if (u.some((S)=>S.startsWith("-")) || !s.every((S)=>/^-[rRfdv]+$/.test(S) || Qs.has(S))) {
        return {
            proven: false,
            why: "flag"
        };
    }
    let p = pJ.rm(o);
    if (u.length === 0 || p.length !== u.length || p.some((S, P)=>S !== u[P])) {
        return {
            proven: false,
            why: "shape"
        };
    }
    if (u.length > Zs) {
        return {
            proven: false,
            why: "too_many"
        };
    }
    let y = s.some((S)=>S === "--recursive" || /^-[a-zA-Z]*[rR]/.test(S));
    let h = y || s.some((S)=>S === "--dir" || /^-[a-zA-Z]*d/.test(S));
    let _ = [];
    for (let S of u){
        let P = S.slice(S.lastIndexOf("/") + 1);
        let Y = P === "." || P === ".." ? undefined : zt(S, e.cwd, e.launchDir);
        if (Y === undefined) {
            return {
                proven: false,
                why: "operand"
            };
        }
        if (e.record.get(Y) === undefined) {
            return {
                proven: false,
                why: "no_record"
            };
        }
        _.push(Y);
    }
    let A = await oo(e.launchDir);
    if (A === undefined) {
        return {
            proven: false,
            why: "no_held_folder"
        };
    }
    await using C = A.anchor;
    let N = new Set;
    let I = new Set;
    let B = 0n;
    for(let S = _.pop(); S !== undefined; S = _.pop()){
        if (N.has(S) || I.has(S)) {
            continue;
        }
        if (N.size + I.size >= Ys) {
            return {
                proven: false,
                why: "too_many"
            };
        }
        let P = e.record.get(S);
        if (P === undefined) {
            return {
                proven: false,
                why: "unrecorded_entry"
            };
        }
        if (P.kind === "file") {
            B += P.size;
            if (B > BigInt(Xs)) {
                return {
                    proven: false,
                    why: "too_large"
                };
            }
            if (!await vn(A, S, P, "kept")) {
                e.record.delete(S);
                return {
                    proven: false,
                    why: "changed"
                };
            }
            N.add(S);
            continue;
        }
        let Y = await ro(A, S, P);
        if (Y === undefined) {
            e.record.delete(S);
            return {
                proven: false,
                why: "changed"
            };
        }
        if (!h || !y && Y.length > 0) {
            return {
                proven: false,
                why: "flag"
            };
        }
        I.add(S);
        _.push(...Y);
    }
    return {
        proven: true,
        files: [
            ...N
        ],
        folders: [
            ...I
        ].toSorted((S, P)=>P.length - S.length)
    };
}
async function ei(e) {
    let n = await oo(e.launchDir);
    if (n === undefined) {
        return {
            removed: 0,
            why: "no_held_folder"
        };
    }
    await using o = n.anchor;
    let r = new Set([
        ...e.files,
        ...e.folders
    ]);
    let s = [];
    for (let p of r){
        let entry_1 = e.record.get(p);
        if (entry_1 === undefined) {
            return {
                removed: 0,
                why: "no_record"
            };
        }
        s.push({
            path: p,
            entry: entry_1
        });
    }
    for (let { path, entry } of s){
        if ((entry.kind === "file" ? await vn(n, path, entry, "kept") : (await ro(n, path, entry))?.every((_)=>r.has(_))) !== true) {
            return {
                removed: 0,
                why: "changed"
            };
        }
    }
    let removed = 0;
    for (let { path, entry } of s){
        if (!(entry.kind === "file" ? await vn(n, path, entry, "removed") : await ti(n, path, entry))) {
            return {
                removed,
                why: "changed"
            };
        }
        removed += 1;
    }
    return {
        removed
    };
}
async function oo(gitRoot) {
    let n = di(gitRoot);
    if (n.unresolved) {
        return;
    }
    try {
        let [{ openTreeAnchor }, { createDeviceTreeHost }] = await Promise.all([
            import("/$bunfs/root/chunk-yef5j2vs.js"),
            import("/$bunfs/root/chunk-9zzkszba.js")
        ]);
        let anchor = await openTreeAnchor(createDeviceTreeHost(), {
            gitRoot,
            realRoot: n.landing
        });
        if ("unavailable" in anchor) {
            t(`served own-made delete: no held folder (${anchor.unavailable})`);
            return;
        }
        return {
            anchor,
            root: n.landing
        };
    } catch (error) {
        Ce(error);
        return;
    }
}
function wn(e, n) {
    let o = relative(e.root, n);
    if (o === ".." || o.startsWith(`..${sep}`) || o.startsWith(sep)) {
        return undefined;
    }
    return o.split(sep).join("/");
}
async function vn(e, n, o, r) {
    let s = wn(e, dirname(n));
    if (s === undefined) {
        return false;
    }
    let { anchor } = e;
    try {
        let p = await anchor.holdOutside(e.root, s);
        if (p === null) {
            return false;
        }
        await using y = p;
        if (!ri(await p.stat(), await anchor.lstat(s)) || !await ni(anchor, p, basename(n), o)) {
            return false;
        }
        if (r === "removed") {
            await anchor.unlinkIn(p, basename(n));
        }
        return true;
    } catch (error) {
        Ce(error);
        return false;
    }
}
async function ni(anchor, n, o, r) {
    let s = await anchor.openIn(n, o, constants.O_RDONLY | constants.O_NONBLOCK);
    try {
        if (!eo(await s.stat({
            bigint: true
        }), r)) {
            return false;
        }
        let u = await oi(s, Number(r.size));
        if (u === undefined || createHash("sha256").update(u).digest("hex") !== r.sha256) {
            return false;
        }
    } finally{
        await s.close();
    }
    return eo(await anchor.statIn(n, o), r);
}
async function ro(e, n, o) {
    let r = wn(e, n);
    if (r === undefined || r === "") {
        return;
    }
    try {
        if (!Sn(await e.anchor.lstat(r), o)) {
            return;
        }
        let s = await e.anchor.list(r);
        if (Sn(await e.anchor.lstat(r), o)) {
            return s.map((u)=>join(n, u));
        }
        return undefined;
    } catch (error) {
        Ce(error);
        return;
    }
}
async function ti(e, path, entry) {
    let r = wn(e, path);
    if (r === undefined || r === "") {
        return false;
    }
    try {
        if (!Sn(await e.anchor.lstat(r), entry)) {
            return false;
        }
        await e.anchor.rmdir(r);
        return true;
    } catch (error) {
        Ce(error);
        return false;
    }
}
function Jt(e) {
    if (jt(e)) {
        Ce(e);
        return;
    }
    c(e);
}
function Ce(e) {
    t(`served own-made delete: ${l(e)}`, {
        level: "warn"
    });
}
async function oi(e, n) {
    let o = Buffer.alloc(n + 1);
    let r = 0;
    while(r < o.length){
        let { bytesRead } = await e.read(o, r, o.length - r, r);
        if (bytesRead === 0) {
            break;
        }
        r += bytesRead;
    }
    if (r === n) {
        return o.subarray(0, n);
    }
}
function ri(e, n) {
    return e.dev === n.dev && e.ino === n.ino && e.isDirectory() && n.isDirectory();
}
function eo(e, n) {
    return e.isFile() && e.nlink === 1n && e.dev === n.dev && e.ino === n.ino && e.birthtimeNs === n.birthtimeNs && e.size === n.size && e.mtimeNs === n.mtimeNs && e.ctimeNs === n.ctimeNs;
}
function Sn(e, n) {
    return e.isDirectory() && e.dev === n.dev && e.ino === n.ino && e.birthtimeNs === n.birthtimeNs;
}
const si = "tengu_reactive_zephyr";
function so() {
    return ld(si, {
        safe: false
    });
}
const kn = {
    may: true
};
function ee(why) {
    return {
        may: false,
        why
    };
}
function bn(e) {
    if (e.decisionReason?.type === "hook" && e.decisionReason.heldForServedCall === true) {
        return "hook_held";
    }
    return "hook_forced_ask";
}
function An(e, n) {
    if (e.behavior !== "ask") {
        return "other";
    }
    if (n) {
        return bn(e);
    }
    return "unresolved_shell_write";
}
function xe(e, n) {
    try {
        return n();
    } catch (error) {
        c(Error("a served call's telemetry value could not be worked out", {
            cause: error
        }));
        return e;
    }
}
function Cn(e) {
    return xe("other", ()=>{
        if (e !== "own_record") {
            if (e === "conveyed") {
                return "conveyed_stance";
            }
            return "other";
        }
        if (x_t()) {
            return "auto_refused";
        }
        return "consent";
    });
}
const ii = {
    dangerousRemoval: "safety_check_dangerous_removal",
    backgroundOperator: "safety_check_background_operator",
    suspiciousWindowsPath: "safety_check_suspicious_windows_path",
    outsideReadsBlocked: "safety_check_outside_reads_blocked",
    restrictedMode: "safety_check_restricted_mode"
};
function io(e) {
    if (e.classifierApprovable) {
        return "settings_file";
    }
    let e_circuitBreaker = e.circuitBreaker;
    return (e_circuitBreaker === undefined ? undefined : ii[e_circuitBreaker]) ?? "safety_check_other";
}
function ao(e) {
    return xe("other", ()=>{
        if (!e.first.may) {
            return e.first.why;
        }
        if (e.vetoed) {
            if (e.ownCheck === "block") {
                return "own_check_block";
            }
            return "own_check_silence";
        }
        if (!e.afterCheck.may) {
            return e.afterCheck.why;
        }
        if (hFt.has(e.tool.name) || e.tool.isMcp === true) {
            return "none";
        }
        return "tool_not_answerable";
    });
}
const ai = [
    "irreversible_local_destruction",
    "code_from_external"
];
const lo = 20000;
const li = 5000;
const go = 2000;
const uo = "This computer's own safety check did not clear this, so a person needs to approve it.";
const ci = {
    irreversible_local_destruction: "This can delete files or discard changes for good, so a person needs to approve it.",
    code_from_external: "This may run code from outside this computer, so a person needs to approve it."
};
const ui = "This computer's own safety check did not answer, so a person needs to approve it.";
function ho(e) {
    switch(e.verdict){
        case "no_verdict":
            return ui;
        case "block":
            if (e.kind === undefined) {
                return uo;
            }
            return ci[e.kind];
        case "allow":
            return uo;
    }
}
function yo(e, n) {
    let o = e.trimEnd();
    if (o === "") {
        return n;
    }
    return `${/[.!?\u2026]$/.test(o) ? o : `${o}.`} ${n}`;
}
function Le(legDeadlineAt) {
    if (legDeadlineAt === undefined) {
        return lo;
    }
    return Math.min(lo, legDeadlineAt - Date.now() - li);
}
async function Rn(e) {
    let n = Date.now();
    let o = await fo(e, e.capMs);
    let { judged, blockCategory, failure } = o;
    let p = 1;
    if (e.again !== undefined && o.mayPass) {
        try {
            let _ = Le(e.again.legDeadlineAt);
            if (_ >= go) {
                p = 2;
                let A = await fo(e, _);
                judged = A.judged;
                blockCategory = A.blockCategory;
                failure = A.failure;
            }
        } catch (error) {
            if (!e.stopSignal.aborted && !Ke(error)) {
                c(error);
            }
        }
    }
    let y = Date.now() - n;
    i("tengu_remote_tool_serve", {
        op: b("second_check"),
        call_id: ye(e.callId),
        mode: b("enforce"),
        verdict: d(judged.verdict),
        why: pe(judged.verdict === "no_verdict" ? judged.why : undefined),
        block_kind: xe(undefined, ()=>{
            if (judged.verdict === "block") {
                return Wet(blockCategory);
            }
        }),
        error_kind: failure?.errorKind === undefined ? undefined : T_(failure.errorKind),
        http_status: failure?.httpStatus,
        duration_ms: y,
        tool: Ln(e.tool.name),
        attempts: e.again === undefined ? undefined : p,
        overlapped_hold: e.again?.besideHold
    });
    if (judged.verdict !== "block") {
        return {
            ...judged,
            ms: y
        };
    }
    let h = so() ? ai.find((_)=>_ === blockCategory) : undefined;
    return {
        verdict: "block",
        ...h !== undefined && {
            kind: h
        },
        ms: y
    };
}
async function fo(e, timeoutMs_1) {
    let judged;
    let mayPass = false;
    let blockCategory;
    let failure;
    if (timeoutMs_1 < go) {
        judged = {
            verdict: "no_verdict",
            why: "no_budget"
        };
    } else {
        let p = zs(e.stopSignal, {
            timeoutMs: timeoutMs_1,
            refTimer: true
        });
        try {
            let y = Rke(e.tool.name, e.input);
            if (M5r(y, [
                e.tool
            ]) === "") {
                judged = {
                    verdict: "no_verdict",
                    why: "not_run"
                };
            } else {
                let h = await mhe([], y, [
                    e.tool
                ], {
                    ...e.permissionContext,
                    alwaysDenyRules: fi(e.permissionContext)
                }, p.signal, {
                    isSubagentLoop: false,
                    recordPresumed: false,
                    onlyBuiltInContext: true
                });
                let _ = mo(p.signal, e.stopSignal);
                let A = h.unavailable === true && h.transcriptTooLong !== true && h.refusedBySafeguard !== true && h.failureMode === undefined;
                if (_ !== undefined) {
                    judged = {
                        verdict: "no_verdict",
                        why: _
                    };
                    mayPass = _ === "timeout" && A;
                } else if (h.classifierRan === false) {
                    judged = {
                        verdict: "no_verdict",
                        why: "not_run"
                    };
                } else if (h.unavailable === true || h.transcriptTooLong === true || h.refusedBySafeguard === true || h.failureMode !== undefined) {
                    judged = {
                        verdict: "no_verdict",
                        why: "unavailable"
                    };
                    failure = {
                        errorKind: h.errorKind,
                        httpStatus: h.httpStatus
                    };
                    mayPass = A && h.retryAfterMs === undefined && Rrr(h.errorKind) && h.errorKind?.endsWith("_no_retry") !== true;
                } else {
                    judged = {
                        verdict: h.shouldBlock === false ? "allow" : "block"
                    };
                    blockCategory = h.category;
                }
            }
        } catch (error) {
            let h = mo(p.signal, e.stopSignal);
            if (h === undefined) {
                c(error);
            }
            judged = {
                verdict: "no_verdict",
                why: h ?? "threw"
            };
            mayPass = h === "timeout";
        } finally{
            p.cleanup();
        }
    }
    return {
        judged,
        mayPass,
        blockCategory,
        failure
    };
}
function fi(permissionContext) {
    let n = new Set(permissionContext.alwaysDenyRules[Wfe]);
    return {
        [Wfe]: yt().map(_n).filter((o)=>n.has(o))
    };
}
function mo(signal, stopSignal) {
    if (stopSignal.aborted) {
        return "stopped";
    }
    if (signal.aborted) {
        return "timeout";
    }
}
const mi = new Set([
    "Automount -hosts path detected (defense-in-depth check)",
    "Automount browse surface detected (defense-in-depth check)",
    "Kernel-resolved path prefix (/.vol etc.) detected (defense-in-depth check)",
    "UNC path detected (defense-in-depth check)",
    "UNC glob pattern detected (defense-in-depth check)",
    "Automount -hosts glob pattern detected (defense-in-depth check)",
    "Automount browse surface glob pattern detected (defense-in-depth check)",
    "Kernel-resolved path prefix (/.vol etc.) glob pattern detected (defense-in-depth check)"
]);
function vo(e) {
    return e.behavior === "ask" && e.decisionReason?.type === "safetyCheck" && mi.has(e.decisionReason.reason);
}
function So(tool, n, o) {
    if (typeof tool.getPath !== "function") {
        return false;
    }
    let r = tool.getPath(n);
    let s = _o(r);
    if (QLe(tool, n, o, s) === null) {
        return false;
    }
    let o_trustedNetworkDirectories = o.trustedNetworkDirectories;
    let p = [
        r,
        ...s,
        ...tool.name === co && typeof n.pattern === "string" ? [
            n.pattern
        ] : []
    ];
    return p.some((y)=>M_e(y, o_trustedNetworkDirectories) || zce(y, o_trustedNetworkDirectories)) || !p.some((y)=>H4(y, o_trustedNetworkDirectories));
}
function Fe(sessionMode) {
    return sessionMode === "auto" || sessionMode === "plan";
}
function A$o(e) {
    if (e.callerKind !== "ccr_container") {
        return;
    }
    if (e.attested === true) {
        return "attested";
    }
    if (e.attested === false && Fe(e.sessionMode) && e.askedInMode === e.sessionMode && e.classifierEligible && !e.autoModeRefusedHere && (e.sessionMode !== "plan" || e.planClaimBackedHere) && (hFt.has(e.toolName) || e.isServedMcpTool)) {
        return "auto_arm";
    }
}
const wo = "tengu_violin_purfling";
function ko() {
    return ld(wo, {
        safe: true
    });
}
function We() {
    return ld(wo, {
        safe: true
    });
}
const pi = "tengu_refactored_gadget";
function bo() {
    return ld(pi, {
        safe: false
    });
}
function Ao() {
    try {
        return k("tengu_violin_arching", false) === true;
    } catch  {
        return false;
    }
}
const gi = "tengu_violin_ebony";
function Co() {
    return ld(gi, {
        safe: false
    });
}
function En() {
    try {
        return k("tengu_violin_tailgut", false) === true;
    } catch  {
        return false;
    }
}
function Ro() {
    return ld("tengu_violin_camber", {
        safe: false
    });
}
const hi = 16;
const _i = /^[A-Za-z_][A-Za-z0-9_]*$/;
const Po = /^[A-Za-z0-9_./:@%+,-]+$/;
const vi = /^[A-Za-z0-9_./:@%+,=-]+$/;
const Si = new Set([
    "",
    " ",
    "\t",
    `
`,
    '"',
    "/",
    ".",
    "-",
    ",",
    ";",
    "&",
    "|",
    ">",
    "<"
]);
const wi = new Set([
    ">",
    ">>",
    "<",
    ">&",
    "<&",
    "&>",
    "&>>",
    ">|"
]);
const ki = new Set([
    "ifs",
    "path",
    "home",
    "pwd",
    "oldpwd",
    "cdpath",
    "env",
    "prompt_command",
    "ps1",
    "ps2",
    "ps3",
    "ps4",
    "random",
    "srandom",
    "seconds",
    "lineno",
    "uid",
    "euid",
    "gid",
    "egid",
    "ppid",
    "shellopts",
    "hostname",
    "hosttype",
    "ostype",
    "machtype",
    "groups",
    "dirstack",
    "pipestatus",
    "reply",
    "optind",
    "optarg",
    "opterr",
    "shlvl",
    "username",
    "logname",
    "user",
    "shell",
    "term",
    "tmpdir",
    "lang",
    "columns",
    "lines",
    "epochseconds",
    "epochrealtime",
    "timeformat",
    "timefmt",
    "globignore",
    "nullcmd",
    "readnullcmd",
    "errno",
    "tty",
    "argc",
    "argv",
    "argv0",
    "cputype",
    "vendor",
    "posixly_correct",
    "tmout",
    "fcedit",
    "fignore",
    "execignore",
    "inputrc",
    "wordchars",
    "stty",
    "match",
    "mbegin",
    "mend",
    "_",
    "status",
    "psvar",
    "fpath",
    "manpath",
    "mailpath",
    "module_path",
    "watch",
    "signals",
    "histchars",
    "options",
    "commands",
    "functions",
    "aliases",
    "galiases",
    "saliases",
    "parameters",
    "modules",
    "history",
    "historywords",
    "nameddirs",
    "userdirs",
    "builtins",
    "reswords",
    "widgets",
    "keymaps",
    "terminfo",
    "termcap",
    "langinfo",
    "errnos",
    "sysparams",
    "mapfile",
    "usergroups",
    "patchars",
    "epochtime",
    "rprompt",
    "rps1",
    "keyboard_hack",
    "mailcheck",
    "null",
    "bashpid",
    "baud",
    "dirstacksize",
    "keytimeout",
    "listmax",
    "logcheck",
    "period",
    "reporttime",
    "reportmemory",
    "savehist",
    "funcnest",
    "ttyidle",
    "try_block_error",
    "try_block_interrupt",
    "mail",
    "sprompt"
]);
const bi = [
    "bash",
    "zsh",
    "ld_",
    "dyld_",
    "lc_",
    "comp",
    "hist",
    "prompt",
    "dis_",
    "func",
    "job",
    "zle"
];
const Ai = new Set([
    "read",
    "mapfile",
    "readarray",
    "getopts",
    "printf",
    "declare",
    "typeset",
    "local",
    "export",
    "readonly",
    "unset",
    "let",
    "eval",
    "source",
    ".",
    "set",
    "shopt",
    "setopt",
    "unsetopt",
    "emulate",
    "exec",
    "trap",
    "alias",
    "unalias",
    "shift",
    "wait",
    "coproc",
    "builtin",
    "command",
    "noglob",
    "nocorrect",
    "-",
    "integer",
    "float",
    "vared",
    "zparseopts",
    "zstyle",
    "zformat",
    "zstat",
    "strftime",
    "print",
    "sched",
    "zmodload",
    "autoload",
    "pcre_match",
    "pcre_compile",
    "pcre_study",
    "zselect",
    "zgetattr",
    "zsetattr",
    "zsystem",
    "ztie",
    "zuntie",
    "zcurses",
    "enable",
    "disable",
    "hash",
    "unhash",
    "rehash",
    "bind",
    "bindkey",
    "compgen",
    "complete",
    "compopt",
    "fc",
    "history",
    "r",
    "ulimit",
    "limit",
    "unlimit",
    "unsetenv",
    "setenv",
    "getln",
    "pushln",
    "zregexparse",
    "sysread",
    "syswrite",
    "sysopen",
    "sysseek",
    "zsocket",
    "ztcp",
    "zpty",
    "zftp",
    "zle",
    "zcompile",
    "functions",
    "unfunction",
    "private",
    "nameref",
    "stat",
    "time",
    "function",
    "select",
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "case",
    "esac",
    "for",
    "while",
    "until",
    "do",
    "done",
    "in",
    "repeat",
    "foreach",
    "end",
    "always",
    "nocasematch",
    "exit",
    "return"
]);
async function Oo(e) {
    try {
        if (!/^[\t\n\x20-\x7e]*$/.test(e)) {
            return;
        }
        let n = await gV(e);
        if (n === null || n === Kx) {
            return;
        }
        let o = Eo(n, e, false);
        if (o === undefined || o.replacements.length === 0) {
            return;
        }
        let r = "";
        let s = 0;
        for (let y of o.replacements){
            if (y.start < s) {
                return;
            }
            r += e.slice(s, y.start) + y.value;
            s = y.end;
        }
        r += e.slice(s);
        let u = await gV(r);
        if (u === null || u === Kx) {
            return;
        }
        let p = Eo(u, r, true);
        if (p !== undefined && p.skeleton === o.skeleton) {
            return r;
        }
        return undefined;
    } catch (error) {
        if (!Ke(error)) {
            c(error);
        }
        return;
    }
}
function Eo(e, n, o) {
    if (e.type !== "program") {
        return;
    }
    let r = new Map;
    let s = new Set;
    let replacements = [];
    let skeleton = "";
    for (let [y, h] of e.children.entries()){
        if (h.type === ";" || h.type === "&") {
            skeleton += h.type;
            continue;
        }
        if (h.type !== "variable_assignment") {
            let S = Pn(h, n, r, replacements);
            if (S === undefined) {
                return;
            }
            skeleton += S;
            continue;
        }
        let [_, A, C] = h.children;
        if (h.children.length !== 3 || _ === undefined || A === undefined || C === undefined || _.type !== "variable_name" || A.type !== "=" || !_i.test(_.text) || s.has(_.text) || s.size >= hi || e.children[y + 1]?.type === "&") {
            return;
        }
        let N = _.text.toLowerCase();
        if (L5(_.text) || ki.has(N) || bi.some((S)=>N.startsWith(S))) {
            return;
        }
        let I = C.children[1];
        let B = C.type === "word" || C.type === "number" ? C.text : C.type === "raw_string" && C.text.length > 2 && C.text.startsWith("'") && C.text.endsWith("'") ? C.text.slice(1, -1) : C.type === "string" && C.children.length === 3 && I !== undefined && I.type === "string_content" && C.text === `"${I.text}"` ? I.text : undefined;
        if (B === undefined || !Po.test(B)) {
            return;
        }
        s.add(_.text);
        if (!o) {
            r.set(_.text, B);
        }
        skeleton += "assignment";
    }
    return {
        skeleton,
        replacements
    };
}
function Pn(e, n, o, r) {
    if (e.type === "list" || e.type === "pipeline") {
        let p = `${e.type}(`;
        for (let [y, h] of e.children.entries()){
            let _ = e.type === "list" ? [
                "&&",
                "||"
            ] : [
                "|",
                "|&"
            ];
            let A = y % 2 === 0 ? Pn(h, n, o, r) : _.includes(h.type) ? h.type : undefined;
            if (A === undefined) {
                return;
            }
            p += A;
        }
        if (e.children.length % 2 === 1) {
            return `${p})`;
        }
        return undefined;
    }
    if (e.type !== "command" && e.type !== "redirected_statement") {
        return;
    }
    let s = `${e.type}(`;
    let u = e.type === "redirected_statement";
    for (let [p, y] of e.children.entries()){
        if (y.type === "file_redirect") {
            let h = y.children.at(-1);
            let _ = y.children.at(-2);
            let A = y.children.length === 3 ? y.children[0] : undefined;
            if (p === 0 || h === undefined || _ === undefined || y.children.length > 3 || !wi.has(_.type) || y.children.length === 3 && (A?.type !== "file_descriptor" || !/^[0-9]+$/.test(A.text)) || !Re(h, n, o, r)) {
                return;
            }
            s += `redirect(${A?.text ?? ""}${_.type})`;
        } else if (e.type === "redirected_statement") {
            let h = p === 0 ? Pn(y, n, o, r) : undefined;
            if (h === undefined) {
                return;
            }
            s += h;
        } else if (y.type === "command_name") {
            let h = y.children[0];
            if (u || h === undefined || y.children.length !== 1) {
                return;
            }
            u = true;
            let _ = r.length;
            if (!(h.type === "word" || h.type === "number" ? Po.test(h.text) && (h.text.includes("/") || !Ai.has(h.text)) : Re(h, n, o, r) && r.length > _)) {
                return;
            }
            s += "head";
        } else {
            if (!u || !Re(y, n, o, r)) {
                return;
            }
            s += " word";
        }
    }
    if (u) {
        return `${s})`;
    }
}
function Re(e, n, o, r) {
    switch(e.type){
        case "word":
        case "number":
        case "raw_string":
            return true;
        case "simple_expansion":
        case "expansion":
            {
                let s = e.type === "expansion";
                let [u, p, y] = e.children;
                let h = p?.type === "variable_name" ? o.get(p.text) : undefined;
                if (h === undefined || e.children.length !== (s ? 3 : 2) || u?.type !== (s ? "${" : "$") || s && y?.type !== "}" || !s && !Si.has(n[e.endIndex] ?? "")) {
                    return false;
                }
                r.push({
                    start: e.startIndex,
                    end: e.endIndex,
                    value: h
                });
                return true;
            }
        case "string":
            return e.children.every((s)=>s.type === '"' || s.type === "string_content" || (s.type === "simple_expansion" || s.type === "expansion") && Re(s, n, o, r));
        case "concatenation":
            return e.children.every((s)=>{
                if (s.type === "word" || s.type === "number") {
                    return vi.test(s.text);
                }
                return s.type !== "concatenation" && Re(s, n, o, r);
            });
        default:
            return false;
    }
}
function On() {
    try {
        return k("tengu_violin_hair", false) === true;
    } catch  {
        return false;
    }
}
function To() {
    try {
        return k("tengu_violin_ferrule", false) === true;
    } catch  {
        return false;
    }
}
const timeoutMs = 2000;
const Oi = 112;
const $e = Symbol("cut short");
async function Tn(name, n, o, stopSignal, s = false) {
    let n_command = n.command;
    if (typeof n_command !== "string") {
        return {
            file: "error",
            fileOrFolder: "error"
        };
    }
    let p = {
        file: "none",
        fileOrFolder: "none"
    };
    let y = zs(stopSignal, {
        timeoutMs,
        refTimer: true
    });
    try {
        let h = O() === "windows";
        p = {
            file: Y9(n, "file") && !(s && name === Be && await kLr(n_command)) ? "named" : "none",
            fileOrFolder: Y9(n, "file_or_folder") ? "named" : "none"
        };
        if (p.file !== "none" && p.fileOrFolder !== "none") {
            return p;
        }
        if (y.signal.aborted) {
            return me(p, "unresolved");
        }
        let _ = new Promise((resolvePromise)=>{
            y.signal.addEventListener("abort", ()=>resolvePromise($e), {
                once: true
            });
        });
        if (name !== Be) {
            return p;
        }
        let A = await H$o(n_command, o);
        if (A === "unparsed") {
            return p;
        }
        let { files, dirs } = m4e();
        let I = ELr();
        let B = [
            ...files,
            ...dirs.flatMap((L)=>f4e.map((G)=>join(L, G))),
            ...I.paths
        ];
        let S = D([
            ...dirs,
            ...TL()
        ]);
        let P = new Set([
            ...B,
            ...S
        ].map((L)=>to(L)));
        let Y = new Set(I.globalConfigNames.map((L)=>to(L)));
        let te = await Promise.race([
            Promise.all(D([
                ...B,
                ...S
            ]).map((L)=>Io(L, "followed"))),
            _
        ]);
        if (te === $e) {
            return me(p, "unresolved");
        }
        let K = new Set(te.filter((L)=>L !== undefined));
        let V = h ? /[\\/]/ : "/";
        let U = A.flatMap(({ word, directories, mayBeElsewhere })=>{
            if (word === "") {
                return [];
            }
            let Z = Ld(word);
            let re = Vs(word) || Z.startsWith("~") || ij(word);
            let root = parse(Z).root;
            let E = Z.slice(root.length).split(V)[0] ?? "";
            let R = (re ? [] : isAbsolute(Z) ? [
                o
            ] : directories).map((M)=>({
                    requested: resolve(M, Z),
                    firstPartThere: resolve(M, root, E)
                }));
            let local_1 = R.filter(({ requested, firstPartThere })=>!He(requested) && !He(firstPartThere));
            return [
                {
                    word,
                    local: local_1,
                    byName: re || local_1.length < R.length || mayBeElsewhere && !isAbsolute(Z)
                }
            ];
        });
        let q = await Promise.race([
            Promise.all(D(U.flatMap(({ local })=>local.map(({ firstPartThere })=>firstPartThere))).map((L)=>ie().lstat(L).then(()=>[
                        L,
                        true
                    ], (G)=>{
                    let Q = v(G);
                    return [
                        L,
                        Q !== "ENOENT" && Q !== "ENOTDIR" && Q !== "ENAMETOOLONG"
                    ];
                }))),
            _
        ]);
        if (q === $e) {
            return me(p, "unresolved");
        }
        let ce = new Map(q);
        let ue = new Set;
        let ge = 0;
        for (let { word, local, byName } of U){
            if (byName) {
                p = {
                    file: p.file === "none" && Y9({
                        command: word
                    }, "file") ? "named" : p.file,
                    fileOrFolder: p.fileOrFolder === "none" && Y9({
                        command: word
                    }, "file_or_folder") ? "named" : p.fileOrFolder
                };
                if (p.file !== "none" && p.fileOrFolder !== "none") {
                    return p;
                }
            }
            for (let { requested, firstPartThere } of local){
                if (ue.has(requested)) {
                    continue;
                }
                ue.add(requested);
                let w = [
                    requested
                ];
                let E;
                if (ce.get(firstPartThere) !== false) {
                    ge++;
                    if (ge > Oi) {
                        return me(p, "too_many_pieces");
                    }
                    let R = await mpt(requested, y.signal);
                    if (R.unresolved || He(R.landing)) {
                        return me(p, "unresolved");
                    }
                    E = R.landing;
                    w = D([
                        ...R.spellings,
                        R.landing
                    ]);
                }
                if (w.some((R)=>E !== undefined && vFt(R, o) || P.has(to(R)) || Y.has(to(basename(R))))) {
                    return me(p, "on_disk");
                }
                let T = E === undefined ? undefined : await Promise.race([
                    Io(E, "as_landed"),
                    _
                ]);
                if (T === $e) {
                    return me(p, "unresolved");
                }
                if (T !== undefined && K.has(T)) {
                    return me(p, "on_disk");
                }
            }
        }
        return p;
    } catch (error) {
        let _ = v(error);
        if (_ === undefined) {
            c(Error("a served shell line's settings identity check threw; the line counts as naming one", {
                cause: error
            }));
        } else {
            t(`A served shell line's settings identity check could not read a path (${_}); the line counts as naming a settings file`, {
                level: "error"
            });
        }
        return me(p, "error");
    } finally{
        y.cleanup();
    }
}
function me(e, n) {
    return {
        file: e.file === "none" ? n : e.file,
        fileOrFolder: e.fileOrFolder === "none" ? n : e.fileOrFolder
    };
}
function He(e) {
    return uOo(e) || zO(e);
}
async function Io(e, n) {
    if (He(e)) {
        return;
    }
    try {
        let o = ie();
        if (n === "followed") {
            let { identity } = await Z1(o, e, {
                fileIdentity: true
            });
            if (identity === undefined || Hg(identity.ino)) {
                return undefined;
            }
            return `${identity.dev}:${identity.ino}`;
        }
        let r = await o.lstatBigint(e);
        if (Hg(r.ino)) {
            return undefined;
        }
        return `${r.dev}:${r.ino}`;
    } catch (error) {
        let r = v(error);
        if (n === "followed" || r === "ENOENT" || r === "ENOTDIR" || r === "ENAMETOOLONG") {
            return;
        }
        throw error;
    }
}
const Mi = 16;
const mun = "remote_call_session_answer";
const destructive = "remote_call_destructive_ask";
const Mn = "remote_call_classifier_ask";
const Pe = "remote_call_served_mcp_ask";
const Di = "remote_call_host_settings_shell_write";
const xi = "remote_call_host_settings_edit";
const Do = "remote_call_unresolved_shell_write_ask";
const settings_file_named = "remote_call_settings_file_named_ask";
const A6n = false;
function jo(e) {
    return e.isMcp === true || !vb(e).supported;
}
function Fi(targetName) {
    return `This command is flagged as destructive. ${targetName} asks before running destructive commands sent from a cloud session.`;
}
const zo = "remote_call_stopped";
const Wi = {
    behavior: "deny",
    message: "The call could not be confirmed after the answer, so it did not run.",
    decisionReason: {
        type: "other",
        reason: "remote_call_relative_path_not_confirmed"
    },
    decideLocation: "ask-path"
};
const Ee = {
    behavior: "deny",
    message: "The remote session's call was stopped before it was answered; it did not run.",
    decisionReason: {
        type: "other",
        reason: zo
    },
    decideLocation: "ask-path"
};
const In = "remote_call_not_run_here";
const Bi = new Set([
    "default",
    "plan",
    "dontAsk",
    "acceptEdits"
]);
function SLr(e) {
    if (e.stance.mode !== "session") {
        return {
            mode: e.stance.mode,
            capped: false,
            autoRefusedHere: false
        };
    }
    let n = e.call ?? _ve;
    let o = e.sessionMode ?? "default";
    let autoRefusedHere = e.sessionMode === "auto" || e.sessionMode === "bypassPermissions";
    if (je(e.stance, e.sessionMode, n)) {
        return {
            mode: "acceptEdits",
            capped: o === "bypassPermissions",
            autoRefusedHere: false
        };
    }
    return {
        mode: (e.stance.unattended === "own_record" || e.stance.unattended === "conveyed" && n.modeDecidedByHost === true) && Bi.has(o) ? o : "default",
        capped: o === "bypassPermissions",
        autoRefusedHere
    };
}
function Vo(e) {
    if (e.stance.mode !== "session") {
        return "fixed_stance";
    }
    if (e.sessionMode === undefined) {
        return "mode_absent";
    }
    if (e.sessionMode === e.evaluatedMode) {
        return "as_claimed";
    }
    if (e.sessionMode === "auto" || e.sessionMode === "bypassPermissions") {
        if (e.evaluatedMode === "acceptEdits") {
            return "auto_fast_path";
        }
        return "auto_refused_here";
    }
    return "mode_unknown";
}
function C$o(e) {
    let n = Vo(e);
    let session = e.sessionMode ?? "absent";
    if (n === "auto_fast_path") {
        return {
            session,
            evaluated: "auto",
            step: "accept_edits_fast_path"
        };
    }
    return {
        session,
        evaluated: e.evaluatedMode,
        why: n
    };
}
function $i(e, n = "none") {
    switch(e){
        case "fixed_stance":
        case "as_claimed":
        case "auto_fast_path":
            return;
        case "auto_refused_here":
            if (n === "none") {
                return `This computer is not accepting auto mode from cloud sessions right now, so it checked this in ${g0("default").toLowerCase()} mode.`;
            }
            return Ni[`auto_off.reason.${n}`];
        case "mode_absent":
        case "mode_unknown":
            return `This computer could not tell which mode the session is in, so it checked this in ${g0("default").toLowerCase()} mode.`;
    }
}
const Hi = "remote_call_auto_mode_allowlist";
function je(stance, sessionMode, o) {
    if (sessionMode !== "auto" && sessionMode !== "bypassPermissions") {
        return false;
    }
    switch(stance.unattended){
        case "own_record":
            return !dgt();
        case "conveyed":
            return o.modeDecidedByHost === true;
        default:
            {
                let r = stance.unattended;
                return false;
            }
    }
}
function Dn(e) {
    switch(e){
        case "own_record":
            return !dgt();
        case "conveyed":
            return false;
        default:
            {
                let n = e;
                return false;
            }
    }
}
function igt(e, n = "own_record") {
    return e === "plan" && Ko(n) === undefined;
}
function Ko(e) {
    if (!Dn(e)) {
        return "answers_refused";
    }
    if (Utn() && !lqe("plan_asks_a_person")) {
        return undefined;
    }
    return "plan_setting";
}
function qo(e) {
    return false;
}
const xo = new Set([
    "projectSettings",
    "localSettings",
    "session"
]);
function gun(e) {
    let call = e.call ?? _ve;
    let { mode } = SLr({
        stance: e.stance,
        sessionMode: e.sessionMode,
        call
    });
    let r = je(e.stance, e.sessionMode, call) || igt(e.sessionMode, e.stance.unattended);
    let s = bh();
    let u = ror();
    let p = u.launchedInAutoMode || lp();
    let y = e.userSettings?.held === true && S_();
    let h = e.stance.honorLocalRules ? [
        ...Nto(xW(), e.userSettings, s).filter((S)=>!y || S.source !== "projectSettings" || S.ruleBehavior !== "allow"),
        ...s ? [] : u.allowRules.map((S)=>({
                source: "cliArg",
                ruleBehavior: "allow",
                ruleValue: Un(S)
            })),
        ...CTn(u)
    ] : [
        ...Nto(Lo().filter((S)=>!xo.has(S) && !(S === "userSettings" && S_())).flatMap((S)=>nCe(S)), S_() ? undefined : e.userSettings, false),
        ...CTn(u)
    ].filter((S)=>!xo.has(S.source) && S.ruleBehavior === "deny");
    let _ = new Set(zQn(h).map((S)=>_n(S.ruleValue)));
    let A = h.filter((S)=>!Wo(S.ruleBehavior, S.ruleValue, r || S.source === "cliArg" && p) && !(S.ruleBehavior === "allow" && _.has(_n(S.ruleValue))));
    let C = y3(Ic(), A, {
        announce: false
    });
    let honorLocalRules = e.stance.honorLocalRules;
    let I = {
        ...C,
        alwaysDenyRules: Vi(C.alwaysDenyRules, e.stance.honorLocalRules && u.toolsNarrowingDenyRules.length > 0 ? {
            toolsNarrowing: [
                ...u.toolsNarrowingDenyRules
            ]
        } : {}),
        additionalWorkingDirectories: new Map([
            ...e.stance.honorLocalRules ? [
                ...u.additionalWorkingDirectories
            ].flatMap(([, S])=>{
                let P = {
                    ...S,
                    path: Txn(S.path)
                };
                if (Ynt(S.path) || !ji(P)) {
                    return [];
                }
                return [
                    [
                        P.path,
                        P
                    ]
                ];
            }) : [],
            [
                e.launchDir,
                {
                    path: e.launchDir,
                    source: "session"
                }
            ]
        ]),
        mode,
        isBypassPermissionsModeAvailable: mode === "bypassPermissions",
        shouldAvoidPermissionPrompts: false,
        servedCall: true,
        ...e.stance.honorLocalRules && (GLe() || lqe("read_block")) && {
            blockReadsOutsideWorkingDirectories: true
        },
        ...(!honorLocalRules || bve() || !N9o()) && {
            sandboxAutoAllowSuspended: true
        }
    };
    if (e.stance.honorLocalRules) {
        let cliarg_allows = u.allowRules.length;
        zi({
            cliarg_allows,
            cliarg_allows_kept: (I.alwaysAllowRules.cliArg ?? []).length,
            startup_dirs: u.additionalWorkingDirectories.size,
            startup_dirs_kept: I.additionalWorkingDirectories.size - 1
        });
    }
    let B = (e.sessionUpdates ?? []).filter((S)=>S.type === "addRules" && !(s && S.behavior === "allow") && !S.rules.some((P)=>Wo(S.behavior, P, r)) && !(S.behavior === "allow" && zQn(S.rules.map((ruleValue)=>({
                source: "session",
                ruleBehavior: "allow",
                ruleValue
            }))).length > 0));
    if (B.length > 0) {
        return {
            ...GI(I, B),
            mode
        };
    }
    return I;
}
function ji(e) {
    return !Ynt(e.path);
}
const Fo = new Set;
function zi(e) {
    if (e.cliarg_allows === e.cliarg_allows_kept && e.startup_dirs === e.startup_dirs_kept) {
        return;
    }
    let n = Object.entries(e).map(([o, r])=>`${o}=${r}`).join(" ");
    if (Fo.has(n)) {
        return;
    }
    Fo.add(n);
    t(`[remote-tools] served-context screens dropped rules ${n}`);
}
function Vi(alwaysDenyRules, n) {
    return {
        ...alwaysDenyRules,
        ...n,
        [Wfe]: mt().map(_n)
    };
}
function Wo(e, n, o) {
    return e === "allow" && o && (Dre(n.toolName, n.ruleContent) || w0n(n.toolName));
}
function Bo(error) {
    try {
        return Uke(error);
    } catch  {
        return b("UnknownError");
    }
}
function R$o(e) {
    return async (tool, o, r, s, u, p)=>{
        let y = 0;
        let inputParseThrew = false;
        let _;
        let A;
        let C = Object.create(tool, {
            checkPermissions: {
                value: async (...ae)=>{
                    y += 1;
                    try {
                        let J = await tool.checkPermissions(...ae);
                        y -= 1;
                        return J;
                    } catch (error) {
                        _ = Bo(error);
                        throw error;
                    }
                }
            },
            inputSchema: {
                get: ()=>Object.create(tool.inputSchema, {
                        parse: {
                            value: (...ae)=>{
                                inputParseThrew = true;
                                try {
                                    let J = tool.inputSchema.parse(...ae);
                                    inputParseThrew = false;
                                    return J;
                                } catch (error) {
                                    A = Bo(error);
                                    throw error;
                                }
                            }
                        }
                    })
            }
        });
        let N = p?.behavior === "ask" ? await mk(C, o, r) : null;
        let I = p?.decisionReason?.type === "hook" && p.decisionReason.hookName === jVt;
        let B = p === undefined || p.behavior === "allow" ? await ju(C, o, r, s, u) : N?.behavior === "deny" && !I ? N : p;
        if (y > 0 || inputParseThrew) {
            e.onOutcome({
                kind: "denied_by_rule",
                raisedToAsk: false,
                rulesCheckCrashed: {
                    inputParseThrew,
                    crashClass: (inputParseThrew ? A : _) ?? b("UnknownError")
                }
            });
            return {
                behavior: "deny",
                message: V$o({
                    targetName: e.targetName,
                    toolName: tool.name
                }),
                decisionReason: {
                    type: "other",
                    reason: QU
                }
            };
        }
        let S = (ae)=>{
            if (e.permissionContextNow === undefined || !Te()) {
                return;
            }
            if (ae === "asked") {
                return de(r);
            }
            try {
                return e.permissionContextNow();
            } catch (error) {
                c(Error("the rules a served MCP relative name is judged again under could not be read", {
                    cause: error
                }));
                return;
            }
        };
        let P = pn(tool, o, S("asked"));
        let Y = P?.kind === "ask";
        let te = P?.kind === "web_address";
        let K = P?.kind === "relative_path";
        let rule = B.behavior === "deny" ? gn(B.decisionReason) : await Ot(tool, o) ?? (P?.kind === "deny" ? P.rule : undefined);
        let U = B;
        if (rule !== undefined) {
            let ae = fun(rule);
            let J = _un({
                targetName: e.targetName,
                kind: ae,
                subject: ae === "keychain" && typeof o.command === "string" ? o.command : sgt(rule)
            });
            U = B.behavior === "deny" ? {
                ...B,
                message: J
            } : {
                behavior: "deny",
                decisionReason: {
                    type: "rule",
                    rule
                },
                message: J
            };
        }
        let q = "updatedInput" in U && U.updatedInput !== undefined ? U.updatedInput : o;
        let ce = U.behavior !== "deny" && eI(tool) && ko() ? await SFt(tool, q, U, se()) : "none";
        let q_command = q.command;
        let L = Ro() && ce === "uncertain" && tool.name === Be && typeof q_command === "string" ? await Oo(q_command) : undefined;
        let G = L === undefined ? undefined : {
            ...q,
            command: L
        };
        let Q = G === undefined ? ce : await SFt(tool, G, U, se());
        let Z = Q === "uncertain";
        let re = Ao();
        let w = Co();
        let E = U.behavior !== "deny" && We();
        let T = re && E && eI(tool) && (await I6n(tool, q, r) || G !== undefined && await I6n(tool, G, r));
        let R = re && Z && En();
        let H = T || R ? await Tn(tool.name, q, se(), e.stopSignal, w) : undefined;
        let M = H !== undefined && G !== undefined ? await Tn(tool.name, G, se(), e.stopSignal, w) : undefined;
        let j = H === undefined || M === undefined ? H : {
            file: H.file !== "none" ? H.file : M.file,
            fileOrFolder: H.fileOrFolder !== "none" ? H.fileOrFolder : M.fileOrFolder
        };
        let X = re ? T && j?.file !== "none" : E && (await wFt(tool, q, r, w) || G !== undefined && await wFt(tool, G, r, w));
        let oe = bo() ? X && (Y9(q, "own_file") || G !== undefined && Y9(G, "own_file")) : X || Z && (re ? !R || j?.fileOrFolder !== "none" : !En() || Y9(q, "file_or_folder") || G !== undefined && Y9(G, "file_or_folder"));
        let le = X ? j?.file ?? "error" : R ? j?.fileOrFolder ?? "error" : "none";
        if (Q !== "none" || X) {
            i("tengu_served_shell_settings_hold", {
                verdict: d(Q),
                tool: d(tool.name === Be ? "bash" : "powershell"),
                person_only: oe,
                ...re && {
                    cause: d(le)
                }
            });
        }
        if (Q === "settings") {
            U = {
                behavior: "deny",
                message: z$o({
                    targetName: e.targetName
                }),
                decisionReason: {
                    type: "other",
                    reason: Di
                }
            };
        } else if (U.behavior !== "deny" && !eI(tool) && We() && typeof tool.getPath === "function" && !tool.isReadOnly(q, r) && thr(_o(tool.getPath(q))) === "certain") {
            i("tengu_served_settings_edit_refused", {
                tool: d(tool.name === ht ? "edit" : tool.name === Xt ? "write" : "other"),
                engine: d(U.behavior)
            });
            U = {
                behavior: "deny",
                message: G$o({
                    targetName: e.targetName
                }),
                decisionReason: {
                    type: "other",
                    reason: xi
                }
            };
        }
        if (r.remoteCall === undefined) {
            c(Error("served permission step ran with no call record: a PreToolUse hook's refusal or question cannot be held"));
        }
        let fe = r.remoteCall?.strictestHookAnswer;
        if (fe?.behavior === "deny") {
            t(`[remote-tools call=${u}] refused by a PreToolUse hook here; ${U.behavior} after it set aside tool=${tool.name}`);
            return fe;
        }
        if (fe !== undefined && U.behavior === "allow") {
            t(`[remote-tools call=${u}] asked about by a PreToolUse hook here; allow after it raised back to that question tool=${tool.name}`);
            U = {
                ...fe,
                updatedInput: U.updatedInput
            };
        }
        let we = e.stance.askOnDestructive && tool.name === Be && typeof o.command === "string" && o.command !== "" && nCn(o.command);
        let he = jo(tool) && (A6n || Y);
        let ze = je(e.stance, e.sessionMode, e.call ?? _ve);
        let nr = e.sessionModel !== undefined && ze && U.behavior === "allow" && U.decisionReason?.type === "mode" && U.decisionReason.mode === "acceptEdits" && zwt(tool.name) && Urr(e.sessionModel);
        let tr = (ze || igt(e.sessionMode, e.stance.unattended)) && qo(tool.name);
        let raisedToAsk = (we || he || te || K || nr || tr || Z || X) && U.behavior === "allow";
        let raisedWhateverAllows = we || he || te || K || X || Z && tool.name === Be || fe !== undefined;
        let rr = U.behavior === "allow" && U.decisionReason?.type === "classifier";
        let _e = raisedToAsk || rr ? Gi(U, e.targetName, he ? Y ? "served_mcp_path" : "served_mcp" : we ? "destructive" : X && !Z ? "settings_file_named" : oe ? "unresolved_shell_write" : Z ? "unreadable_shell_line" : K ? "served_mcp_relative_path" : te ? "served_mcp_web_address" : "classifier") : U;
        let forcedByHook = p !== undefined && U === p || fe !== undefined;
        let ne = Y && _e.behavior === "ask" && !forcedByHook && _e.decisionReason?.type !== "hook" && !(_e.decisionReason?.type === "other" && _e.decisionReason.reason === Pe) ? {
            ..._e,
            decisionReason: {
                type: "other",
                reason: Pe
            }
        } : _e;
        let networkPath = ne.behavior === "ask" && (vo(U) || So(tool, q, de(r)));
        let serverAskUnderPlanFloor = ne.behavior === "ask" && tor(ne.decisionReason, tool, q, r);
        if (!e.stopSignal.aborted && ze && !te && !K && ne.behavior === "ask" && ne.localDisplayOnly !== true && Yo(ne, tool, forcedByHook || r.hookAskFloor === true, de(r), oe, networkPath, serverAskUnderPlanFloor, e.stance.unattended).may && Bwt(tool, o)) {
            let ae = {
                behavior: "allow",
                updatedInput: "updatedInput" in ne && ne.updatedInput !== undefined ? ne.updatedInput : o,
                decisionReason: {
                    type: "other",
                    reason: Hi
                }
            };
            let J = $o(e, tool, ae, o);
            let Je = J !== undefined && (await J, e.stopSignal.aborted) ? Ee : Uo(e);
            if (Je !== undefined) {
                e.onOutcome({
                    kind: Nn(Je, ae),
                    raisedToAsk
                });
                return Je;
            }
            e.onOutcome({
                kind: Nn(ae, ae),
                raisedToAsk,
                allowBasis: "auto_allowlist"
            });
            return ae;
        }
        let released = {};
        let Ze = await Ki(ne, e, o, r, {
            raisedToAsk,
            tool,
            forcedByHook,
            callId: u,
            unresolvedShellWrite: oe,
            networkPath,
            serverAskUnderPlanFloor,
            raisedWhateverAllows,
            mcpPathWhy: P?.kind === "ask" ? P.why : K ? "relieved" : undefined,
            released
        });
        let Oe = K && Ze.behavior === "allow" && pn(tool, Ze.updatedInput ?? o, S("answered"))?.kind !== "relative_path" ? Wi : Ze;
        let Bn = $o(e, tool, Oe, o);
        if (Bn !== undefined) {
            await Bn;
        }
        let Ye = Oe.behavior === "allow" && e.stopSignal.aborted;
        if (Ye) {
            i("tengu_remote_tool_allow_after_stop", {
                road: d(ne.behavior === "allow" ? "decided_here" : "ask_path"),
                is_mcp: tool.mcpInfo !== undefined
            });
        }
        let ir = Oe.behavior === "allow" && !Ye ? Uo(e) : undefined;
        let Xe = Ye ? Ee : ir ?? Oe;
        let Qe = Xe.behavior === "allow" && released.input !== undefined ? await Zi(e, tool, released.input, Xe) : Xe;
        e.onOutcome({
            kind: Nn(Qe, ne),
            raisedToAsk,
            ...rule !== undefined && {
                throughSecondRootMount: T6n(rule)
            },
            ...B === N && {
                deniedUnderForcedAsk: true
            },
            ...ne.behavior === "allow" && Qe.behavior === "allow" && {
                allowBasis: ne.decisionReason?.type ?? "unspecified"
            },
            ...ne.behavior === "deny" && {
                denySource: er(ne.decisionReason),
                hostCredentialRefusal: rule && fun(rule),
                underWindowsProfileGlob: rule && k6n(sgt(rule))
            }
        });
        return Qe;
    };
}
function x$o(e) {
    try {
        if (!On() || e.stance.onAsk !== "session" || !eI(e.tool) || !qo(e.tool.name) || !Dn(e.stance.unattended) || !(je(e.stance, e.sessionMode, e.call ?? _ve) || igt(e.sessionMode, e.stance.unattended)) || !Fe(e.sessionMode)) {
            return;
        }
        let n = Zo(e.tool, e.forwardedInput);
        let o = gg(e.callStop);
        return {
            input: n,
            check: Rn({
                tool: e.tool,
                input: n,
                permissionContext: e.permissionContext,
                stopSignal: o.signal,
                callId: e.callId,
                capMs: Le(e.legDeadlineAt),
                again: {
                    legDeadlineAt: e.legDeadlineAt,
                    besideHold: true
                }
            }).catch((r)=>{
                ve(r, o.signal);
                return {
                    verdict: "no_verdict",
                    why: "threw",
                    ms: 0
                };
            }),
            giveUp: ()=>o.abort()
        };
    } catch (error) {
        ve(error, e.callStop.signal);
        return;
    }
}
function ve(e, n) {
    if (!n.aborted && !Ke(e)) {
        c(e);
    }
}
function Zo(tool, forwardedInput) {
    let o = p_(tool, forwardedInput);
    if (!o.success) {
        return forwardedInput;
    }
    let r = {
        ...o.data
    };
    tool.backfillObservableInput?.(r);
    return r;
}
function Ue(e, n) {
    let o = (s)=>Object.keys(s).filter((u)=>s[u] !== undefined);
    let r = o(e);
    return r.length === o(n).length && r.every((s)=>n[s] !== undefined && isDeepStrictEqual(e[s], n[s]));
}
function Gi(e, targetName, o = "destructive") {
    if (e.behavior !== "allow") {
        return e;
    }
    let r = {
        destructive: Fi(targetName),
        classifier: `${targetName} would not decide this one on its own \u2014 it needs approval in this session.`,
        unresolved_shell_write: Ni["ask.settings_person_only"],
        unreadable_shell_line: `${targetName} could not work out everything this command writes, so it cannot rule out a change to its own Claude Code settings files. The command needs approval in this session.`,
        settings_file_named: Ni["ask.settings_person_only"],
        served_mcp: `${targetName} asks before one of its own MCP tools runs for a cloud session.`,
        served_mcp_path: `${targetName} asks before one of its own MCP tools runs with a path it cannot vouch for from here (a relative path, a pattern, a variable, an encoded or quoted spelling, or a directory above its Claude credentials) \u2014 check it does not reach this machine's Claude credentials before approving.`,
        served_mcp_web_address: `This call gives one of ${targetName}'s own MCP tools a web address, so it is checked before it runs.`,
        served_mcp_relative_path: `This call gives one of ${targetName}'s own MCP tools a name with a slash in it, so it is checked before it runs.`
    };
    let s = {
        destructive,
        classifier: Mn,
        unresolved_shell_write: Do,
        unreadable_shell_line: Do,
        settings_file_named,
        served_mcp: Pe,
        served_mcp_path: Pe,
        served_mcp_web_address: Mn,
        served_mcp_relative_path: Mn
    };
    return {
        behavior: "ask",
        message: r[o],
        updatedInput: e.updatedInput,
        decisionReason: {
            type: "other",
            reason: s[o]
        }
    };
}
async function Ki(e, n, o, r, s) {
    if (e.behavior !== "ask") {
        return e;
    }
    let u = "updatedInput" in e && e.updatedInput !== undefined ? e.updatedInput : o;
    let p = Zo(s.tool, n.forwardedInput);
    let y = !Ue(u, p);
    let h = r.remoteCall?.hookRewrites;
    let _ = !y ? "none" : h !== undefined && h.every((V)=>V.byOwnHook && sr(V.handed) && Ue(V.handed, p)) && h.some((V)=>Ue(V.proposed, u)) ? "own_hooks_alone" : "unvouched";
    if (y) {
        t(`[remote-tools call=${s.callId}] ask input rewritten by a hook here; prior answer${_ === "unvouched" ? " and classifier" : ""} set aside tool=${s.tool.name}`);
    }
    if (n.stance.onAsk === "allow") {
        return {
            behavior: "allow",
            updatedInput: u,
            decisionReason: e.decisionReason
        };
    }
    if (n.stopSignal.aborted) {
        return Ee;
    }
    if (e.behavior === "ask" && e.localDisplayOnly === true) {
        return fOe(s.tool.name, "a cloud session");
    }
    let first = Ho(e, r, s, _, n.sessionMode, n.stance.unattended);
    let A_may = first.may;
    let N = A_may ? n.ownCheckAhead?.() : undefined;
    let I = A_may ? await (N !== undefined && Ue(N.input, u) ? N.check : Rn({
        tool: s.tool,
        input: u,
        permissionContext: de(r),
        stopSignal: n.stopSignal,
        callId: r.remoteCall?.origin.callId ?? s.callId,
        capMs: Le(n.legDeadlineAt),
        ...On() && {
            again: {
                legDeadlineAt: n.legDeadlineAt,
                besideHold: false
            }
        }
    })) : undefined;
    let B = A_may && I?.verdict === "block" && n.ownMadeDelete?.isOn() === true && await qi(n, s.tool, u);
    let vetoed = A_may && I?.verdict !== "allow" && !B;
    if (n.stopSignal.aborted) {
        return Ee;
    }
    let afterCheck = A_may ? Ho(e, r, s, _, n.sessionMode, n.stance.unattended) : kn;
    let P_may = afterCheck.may;
    let te = new Promise((answer, reject)=>{
        try {
            let classifierEligible = A_may && P_may && !vetoed;
            let ce = s.forcedByHook || r.hookAskFloor === true;
            let priorAnswerOk = !s.raisedToAsk && !vetoed && !B && !s.unresolvedShellWrite && !Jo(e, s.tool) && !y && !s.networkPath && Yi(e, s.tool, ce, u);
            let standingRowOffered = !y && !s.raisedWhateverAllows && Xi(e);
            let L = !classifierEligible && !s.raisedToAsk && !y && Qo(e, s.tool, ce, u) && Xo(e, s.tool, ce, de(r), s.unresolvedShellWrite, s.networkPath, s.serverAskUnderPlanFloor).may ? $i(Vo({
                stance: n.stance,
                sessionMode: n.sessionMode,
                evaluatedMode: de(r).mode
            }), n.stance.unattended === "own_record" && E6n() ? ugt() : "none") : undefined;
            let G = e.decisionReason?.type === "hook" ? `PreToolUse hook on ${n.targetName}: ${e.message}` : s.unresolvedShellWrite && e.decisionReason?.type === "other" && e.decisionReason.bashMissKind === "no-rule-match" && e.message === e.decisionReason.reason ? Ni["ask.settings_person_only"] : e.message;
            let Q = !classifierEligible && e.decisionReason?.type !== "sandboxOverride" && eI(s.tool) && qrr(s.tool, u) ? `${Ni["ask.outside_sandbox"]} ` : "";
            let Z = s.unresolvedShellWrite && e.decisionReason?.type !== "hook" && G !== Ni["ask.settings_person_only"] ? `${Ni["ask.settings_person_only"]} ` : "";
            let re = vetoed && I !== undefined && e.decisionReason?.type !== "hook" ? `${ho(I)} ` : "";
            n.onAsk({
                message: Q + Z + re + (L === undefined ? G : yo(G, L)),
                input: u,
                decisionReason: e.decisionReason?.type,
                heldHook: e.decisionReason?.type === "hook" && e.decisionReason.heldForServedCall === true,
                raisedToAsk: s.raisedToAsk,
                classifierEligible,
                askClass: ao({
                    first,
                    vetoed,
                    ownCheck: I?.verdict,
                    afterCheck,
                    tool: s.tool
                }),
                mcpPathWhy: s.mcpPathWhy,
                priorAnswerOk,
                standingRowOffered,
                suggestions: standingRowOffered ? Qi(e) : [],
                answer
            });
        } catch (error) {
            reject(error);
        }
    });
    let K = await Ji(te.catch(()=>{}), n.stopSignal);
    if (K === undefined || n.stopSignal.aborted) {
        return Ee;
    }
    if (B && K.behavior === "allow") {
        s.released.input = u;
    }
    return K;
}
async function qi(e, tool, o) {
    try {
        return await e.ownMadeDelete?.prove(tool, o) === true;
    } catch (error) {
        ve(error, e.stopSignal);
        return false;
    }
}
async function Zi(e, tool, input, r) {
    let s = await e.ownMadeDelete?.remove(tool, input).catch((u)=>{
        ve(u, e.stopSignal);
        return "some";
    }) ?? "none";
    if (s === "all") {
        return {
            ...r,
            updatedInput: {
                ...input,
                command: no
            }
        };
    }
    return {
        behavior: "deny",
        message: s === "none" ? L$o({
            targetName: e.targetName
        }) : N$o({
            targetName: e.targetName
        }),
        decisionReason: {
            type: "other",
            reason: In
        },
        decideLocation: "ask-path"
    };
}
function $o(e, tool, o, r) {
    if (o.behavior !== "allow" || e.onAllowLanded === undefined || e.stopSignal.aborted) {
        return;
    }
    try {
        return e.onAllowLanded(tool, o.updatedInput ?? r)?.catch((s)=>ve(s, e.stopSignal));
    } catch (error) {
        ve(error, e.stopSignal);
        return;
    }
}
function Ho(e, n, o, r, sessionMode, unattended) {
    if (r !== "none" && !(r === "own_hooks_alone" && jn())) {
        return ee(r === "own_hooks_alone" ? "rewrite_own_hooks" : "rewrite_unvouched");
    }
    if (!Fe(sessionMode)) {
        return ee("not_auto");
    }
    let p = sessionMode === "plan" ? Ko(unattended) : undefined;
    if (p !== undefined) {
        return ee(p === "plan_setting" ? "plan_unbacked" : Cn(unattended));
    }
    return Yo(e, o.tool, o.forcedByHook || n.hookAskFloor === true, de(n), o.unresolvedShellWrite, o.networkPath, o.serverAskUnderPlanFloor, unattended);
}
function Yo(e, tool, o, r, s, networkPath, serverAskUnderPlanFloor, unattended) {
    if (e.behavior !== "ask" || o || s) {
        return ee(An(e, o));
    }
    if (!Dn(unattended)) {
        return ee(Cn(unattended));
    }
    if (unattended === "own_record" && hze() && !eI(tool) && !Bwt(tool)) {
        return ee("consent");
    }
    return Xo(e, tool, o, r, s, networkPath, serverAskUnderPlanFloor);
}
function Xo(e, n, o, r, s, networkPath, serverAskUnderPlanFloor) {
    if (e.behavior !== "ask" || o || s) {
        return ee(An(e, o));
    }
    if (n.requiresUserInteraction?.() === true) {
        return ee("requires_user_interaction");
    }
    if (n.mcpInfo?.effectiveMaxPermission === "ask") {
        return ee("org_ceiling");
    }
    if (Jo(e, n)) {
        return ee("mcp_path");
    }
    if (e.decisionReason?.type === "hook") {
        return ee(bn(e));
    }
    if (serverAskUnderPlanFloor || e.decisionReason?.type === "mode" && e.decisionReason.mode === "plan") {
        return ee("plan_floor");
    }
    if (kTn(e.decisionReason, r)) {
        return ee("sandbox_override_read_block");
    }
    let y = uM(e);
    let h = ETn(e.decisionReason) || e.matchedAskRule?.source === "mcpServerPolicy";
    if (y && !h) {
        return ee("ask_rule");
    }
    let _ = Hl(e.decisionReason, (A)=>!A.classifierApprovable && !(A.circuitBreaker === "backgroundOperator" && (A.also ?? []).length === 0 && To()) || P1(A) && We());
    if (_ !== undefined) {
        return ee(io(_));
    }
    if (networkPath) {
        return ee("network_path");
    }
    return kn;
}
function Yi(e, tool, o, r = {}) {
    return Qo(e, tool, o, r) && Hl(e.decisionReason, ()=>true) === undefined;
}
function Qo(e, tool, o, r) {
    if (e.behavior !== "ask" || o) {
        return false;
    }
    if (r.dangerouslyDisableSandbox === true) {
        return false;
    }
    if (tool.requiresUserInteraction?.() === true) {
        return false;
    }
    if (e.decisionReason?.type === "hook") {
        return false;
    }
    return e.decisionReason?.type !== "sandboxOverride";
}
function Jo(e, n) {
    return A6n && jo(n) || e.decisionReason?.type === "other" && e.decisionReason.reason === Pe;
}
function Xi(e) {
    return W$() && e.behavior === "ask" && e.suggestions !== undefined && e.suggestions.some((n)=>n.type === "addRules") && e.suppressAlwaysAllowRule !== true && Hl(e.decisionReason, (n)=>!n.classifierApprovable) === undefined;
}
function Qi(e) {
    if (e.behavior !== "ask" || e.suggestions === undefined) {
        return [];
    }
    return e.suggestions.flatMap((n)=>{
        if (n.type === "addRules") {
            return n.rules.map((o)=>_n(o));
        }
        return [];
    }).slice(0, Mi);
}
function Ji(e, stopSignal) {
    return new Promise((resolvePromise)=>{
        if (stopSignal.aborted) {
            resolvePromise(undefined);
            return;
        }
        let r = ()=>resolvePromise(undefined);
        stopSignal.addEventListener("abort", r, {
            once: true
        });
        e.then(resolvePromise).finally(()=>stopSignal.removeEventListener("abort", r));
    });
}
function er(decisionReason) {
    if (decisionReason?.type === "rule") {
        return decisionReason.rule.source;
    }
    if (decisionReason?.type === "subcommandResults") {
        for (let [, n] of decisionReason.reasons){
            let o = n.behavior === "deny" ? er(n.decisionReason) : undefined;
            if (o !== undefined) {
                return o;
            }
        }
    }
}
function Uo(e) {
    let n = e.refusalAsAllowLands?.();
    if (n === undefined) {
        return undefined;
    }
    return {
        behavior: "deny",
        message: n,
        decisionReason: {
            type: "other",
            reason: In
        },
        decideLocation: "ask-path"
    };
}
function Nn(e, n) {
    let o = e.behavior === "deny" && e.decisionReason.type === "other" ? e.decisionReason.reason : undefined;
    if (o === zo || o === In) {
        return "stopped";
    }
    if (n.behavior !== "ask") {
        if (e.behavior === "allow") {
            return "allowed";
        }
        return "denied_by_rule";
    }
    if (e.behavior === "allow") {
        return "approved_by_session";
    }
    if (o !== undefined && Nmn(o)) {
        return "ask_refused_no_surface";
    }
    if (o === on) {
        return "stopped";
    }
    return "denied_by_session";
}
const ea = "nested remote execution is not supported: a served call cannot name another machine.";
const C6n = "_simulatedSedEdit";
const na = new Map;
function yFt() {
    return na;
}
function R6n(e, n) {
    if (n.size === 0) {
        return e;
    }
    let o = new Set(n.values());
    return Object.fromEntries(Object.entries(e).filter(([r])=>!o.has(r)).map(([r, s])=>[
            n.get(r) ?? r,
            s
        ]));
}
function P$o(e, n) {
    if (n.size === 0) {
        return e;
    }
    let o = new Map([
        ...n
    ].map(([r, s])=>[
            s,
            r
        ]));
    return Gx(e, (r, s)=>o.get(s) ?? s);
}
function I$o(e, n) {
    if (e === undefined) {
        return;
    }
    let o = e[Or] === n ? qs(e, [
        Or
    ]) : e;
    if (Object.keys(o).length === 0) {
        return undefined;
    }
    return o;
}
function _Ft(e, n, targetName) {
    if (Or in e) {
        return ea;
    }
    let field = n.find((s)=>Boolean(e[s]));
    if (field === undefined) {
        return undefined;
    }
    return hun({
        field,
        targetName
    });
}
function agt(e, n) {
    return qs(e, [
        C6n,
        ...n
    ]);
}
function O$o(e, n) {
    return Object.fromEntries(Object.keys(n).filter((o)=>Object.hasOwn(e, o)).map((o)=>[
            o,
            n[o]
        ]));
}
export { _ve, uun, f$o, yLr, m$o, X0, I6, Cje, fFt, mFt, g$o, h$o, y$o, _Lr, pun, _$o, b$o, jfe, S$o, bLr, w$o, E6n, k6n, Wfe, v$o, sgt, T6n, fun, gFt, E$o, k$o, T$o, hFt, A$o, mun, A6n, SLr, C$o, igt, gun, R$o, x$o, C6n, yFt, R6n, P$o, I$o, _Ft, agt, O$o };
