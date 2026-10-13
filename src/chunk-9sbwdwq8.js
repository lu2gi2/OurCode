import { Xe, we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Zz } from "/$bunfs/root/chunk-etbngzss.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { bEr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { XV } from "/$bunfs/root/chunk-6g4165br.js";
import { Ja } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Bt } from "/$bunfs/root/chunk-1ej05ybf.js";
import { qT } from "/$bunfs/root/chunk-tw5t5h13.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { xi } from "/$bunfs/root/chunk-6y1cnk59.js";
import { kg, tV, x4, Hce, lCt, L8t, S5 } from "/$bunfs/root/chunk-xyr83dxa.js";
import { iWt, Jyn, GVo, qVo, Azr } from "/$bunfs/root/chunk-veap1cg5.js";
import { Fme, Qie, b_n, Uh, Ey, Qzr, Pqo, Iqo, Oqo, Hqo, Dqo, e$, wEe, BG, r_t } from "/$bunfs/root/chunk-8qgm3a5n.js";
import { jyn, vzr, Xie } from "/$bunfs/root/chunk-qq8ywh7q.js";
import { s7e } from "/$bunfs/root/chunk-meqp16n8.js";
import { JOe } from "/$bunfs/root/chunk-40bs4ws1.js";
import { Fi } from "/$bunfs/root/chunk-z79q35bb.js";
import { P4 } from "/$bunfs/root/chunk-7r939afe.js";
import { _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
const z = 1000;
const Q = 200;
const w = {
    armable: new Set,
    yielded: new Set,
    undo: ()=>{}
};
async function Z() {
    let n = (await L8t()).find((r)=>r.pid === process.pid);
    if (n === undefined) {
        return undefined;
    }
    return {
        sessionId: n.sessionId,
        tmux: n.tmux
    };
}
async function ujs(e) {
    let n = await te(e).finally(()=>e.claim?.end());
    if (n.kind === "took_over") {
        g("artifact_live_subscribe", {
            took_over: true,
            holders: e.holders.length,
            armable_count: n.armable.size,
            yielded_count: n.yielded.size
        });
    } else {
        f("artifact_live_subscribe", `takeover_${n.kind}`, {
            holders: e.holders.length
        });
    }
    return n;
}
async function te(e) {
    if (!xi()) {
        return {
            ...w,
            kind: "messaging_off"
        };
    }
    let n = S5();
    if (n === undefined || e.holders.length === 0) {
        return {
            ...w,
            kind: "no_inbox"
        };
    }
    let r = qT(n);
    let a = e.transport?.ownRecord ?? Z;
    let s = await a().catch(()=>{});
    if (s?.sessionId !== e.conversationId) {
        let o = e.transport?.timers ?? Jyn;
        await new Promise((resolve)=>void o.setTimeout(resolve, Q));
        s = await a().catch(()=>{});
    }
    if (s?.sessionId !== e.conversationId) {
        return {
            ...w,
            kind: "registry_stale"
        };
    }
    let s_tmux = s.tmux;
    if (e.holdersIncomplete === true && !e.alreadyReplying) {
        return {
            ...w,
            kind: "holder_unreachable"
        };
    }
    let p = e.slugs.filter((o)=>!(e.claim?.lost.has(o) ?? false)).slice(0, iWt);
    if (p.length === 0) {
        return {
            ...w,
            kind: "nothing_freed"
        };
    }
    let h = [];
    for (let o of e.holders){
        if (o.sock === undefined || o.sock === "" || !(o.peerFeatures?.includes(bEr) ?? false) || qT(o.sock) === r || jyn(o.kind)) {
            if (e.alreadyReplying) {
                continue;
            }
            return {
                ...w,
                kind: "holder_unreachable"
            };
        }
        h.push({
            sock: o.sock,
            pid: o.pid
        });
    }
    if (h.length === 0) {
        return {
            ...w,
            kind: "holder_unreachable"
        };
    }
    let c = e.transport?.send ?? lCt;
    let u = e.transport?.sendControl ?? Hce;
    let I = e.transport?.timers ?? Jyn;
    let T = e.transport?.now ?? Date.now;
    let from = XV(n);
    let Y = (expectPeerPid)=>{
        if (O() !== "windows") {
            return {
                expectPeerPid
            };
        }
        return {};
    };
    let v = [];
    let D = new Set;
    let { wakes, autoReact, durable } = ee();
    let W = (o)=>{
        for (let d of o.yielded){
            let i = wakes.takenFrom.get(d) ?? [];
            if (!i.some((y)=>y.msgId === o.msgId)) {
                wakes.takenFrom.set(d, [
                    ...i,
                    {
                        sock: o.sock,
                        pid: o.pid,
                        msgId: o.msgId
                    }
                ]);
            }
            if (e.alreadyReplying && (autoReact.userDisarmed || durable.stopLatches.isStopped(d) || Uh(d) && !Ey(d))) {
                W2o(d, u);
            }
        }
    };
    let U = e.claim?.sentAt ?? T();
    let A = (o, d, i)=>{
        let slugs = i?.precautionary !== undefined ? [
            ...i.precautionary
        ] : [
            ...o.yielded
        ].filter((m)=>d === undefined || d.has(m));
        if (slugs.length === 0) {
            return;
        }
        for (let m of slugs){
            o.yielded.delete(m);
        }
        g("artifact_live_subscribe", {
            [i?.precautionary !== undefined ? "takeover_unyield_precautionary" : "takeover_handed_back"]: slugs.length
        });
        let _ = {
            action: "unyield_artifact_replies",
            orig_msg_id: o.msgId,
            slugs,
            ...i?.stopped === true && {
                stopped: true
            }
        };
        u(o.sock, _, Y(o.pid)).catch((m)=>{
            t(`[reply-yield] unyield to ${kg(o.sock)} failed: ${tV(String(m))}`);
            if (x4(m) && !_a(o.pid)) {
                f("artifact_live_subscribe", "unyield_holder_gone");
                return;
            }
            let k = ()=>void u(o.sock, _, Y(o.pid)).catch(()=>{
                    f("artifact_live_subscribe", "unyield_send_failed");
                });
            if (x4(m)) {
                I.setTimeout(k, z);
            } else {
                k();
            }
        });
    };
    let N = [];
    for (let o of h){
        let d = P4();
        let i = {
            sock: o.sock,
            pid: o.pid,
            msgId: d.msg_id,
            yielded: new Set
        };
        v.push(i);
        let y = GVo(d.msg_id, p, {
            sentAt: U,
            expectPid: o.pid,
            ...e.transport?.timeoutMs !== undefined && {
                timeoutMs: e.transport.timeoutMs
            },
            ...e.transport?.timers !== undefined && {
                timers: e.transport.timers
            },
            onLate: (_)=>{
                if (_.kind !== "yielded") {
                    return;
                }
                for (let k of _.yielded){
                    i.yielded.add(k);
                }
                let m = new Map([
                    ...e.claim?.lost ?? [],
                    ..._.lostTo
                ]);
                A(i, new Set([
                    ...i.yielded
                ].filter((k)=>{
                    if (m.has(k)) {
                        return q(k, i, m, e.alreadyReplying === true);
                    }
                    return !e.alreadyReplying && !D.has(k);
                })));
                W(i);
            }
        });
        N.push((async ()=>{
            try {
                await c(o.sock, {
                    action: "yield_artifact_replies",
                    from,
                    session_id: e.conversationId,
                    slugs: p,
                    reason: e.reason,
                    sent_at: T(),
                    claimed_at: U,
                    requester: {
                        cwd: we(),
                        ...s_tmux !== undefined && {
                            tmux: s_tmux
                        }
                    }
                }, d, Y(o.pid));
            } catch (error) {
                if (x4(error)) {
                    let lostTo = qVo(d.msg_id);
                    let lost = lostTo.map(([J])=>J);
                    if (_a(o.pid)) {
                        return {
                            kind: "unreachable",
                            lost,
                            lostTo
                        };
                    }
                    return {
                        kind: "gone",
                        lost,
                        lostTo
                    };
                }
            }
            return y;
        })());
    }
    let B = await Promise.all(N);
    let P = new Map;
    let x = new Map;
    let L = new Map;
    let S = new Map(e.claim?.lost ?? []);
    let C = true;
    let K = false;
    let F = 0;
    B.forEach((o, d)=>{
        for (let [i, y] of o.lostTo){
            S.set(i, y);
        }
        if (o.kind === "gone") {
            return;
        }
        F++;
        if (o.kind === "unreachable") {
            C = false;
            return;
        }
        if (o.kind === "yielded") {
            for (let i of o.yielded){
                v[d].yielded.add(i);
                P.set(i, (P.get(i) ?? 0) + 1);
            }
            for (let i of o.notHeld){
                x.set(i, (x.get(i) ?? 0) + 1);
            }
            for (let i of new Set([
                ...o.yielded,
                ...o.notHeld
            ])){
                L.set(i, (L.get(i) ?? 0) + 1);
            }
        } else {
            C = false;
            if (o.kind === "refused") {
                K = true;
            }
        }
    });
    let armable = new Set;
    let M = new Set;
    if (C && !K) {
        for (let o of p){
            if (S.has(o) || (L.get(o) ?? 0) !== F) {
                continue;
            }
            if ((P.get(o) ?? 0) > 0) {
                armable.add(o);
                M.add(o);
            } else if ((x.get(o) ?? 0) === F) {
                armable.add(o);
            }
        }
    }
    for (let o of armable){
        D.add(o);
    }
    if (e.alreadyReplying) {
        for (let o of v){
            for (let d of o.yielded){
                if (!S.has(d)) {
                    M.add(d);
                }
            }
        }
    }
    for (let o of v){
        let d = new Set([
            ...o.yielded
        ].filter((i)=>{
            if (S.has(i)) {
                return q(i, o, S, e.alreadyReplying === true);
            }
            return !e.alreadyReplying && !armable.has(i);
        }));
        if (d.size > 0) {
            A(o, d);
        }
    }
    if (!e.alreadyReplying) {
        B.forEach((o, d)=>{
            if (o.kind === "timeout") {
                A(v[d], undefined, {
                    precautionary: p
                });
            }
        });
    }
    for (let o of v){
        W(o);
    }
    return {
        armable,
        yielded: M,
        kind: armable.size > 0 ? "took_over" : "nothing_freed",
        undo: (o)=>{
            for (let i of v){
                A(i, o);
            }
            let d = new Set(v.map((i)=>i.msgId));
            for (let i of o ?? p){
                let y = (wakes.takenFrom.get(i) ?? []).filter((_)=>!d.has(_.msgId));
                if (y.length > 0) {
                    wakes.takenFrom.set(i, y);
                } else {
                    wakes.takenFrom.delete(i);
                }
            }
        }
    };
}
function q(e, n, r, a) {
    let s = r.get(e);
    return s !== undefined && s === XV(n.sock) || !a && !e$(e);
}
function W2o(e, n = Hce) {
    j(e, true, n);
}
function wDs(e, n = Hce) {
    j(e, false, n);
}
function j(e, n, r) {
    let { wakes } = ee();
    let s = wakes.takenFrom.get(e);
    if (s === undefined || e$(e)) {
        return;
    }
    wakes.takenFrom.delete(e);
    for (let l of s){
        let p = {
            action: "unyield_artifact_replies",
            orig_msg_id: l.msgId,
            slugs: [
                e
            ],
            ...n && {
                stopped: true
            }
        };
        let h = O() !== "windows" ? {
            expectPeerPid: l.pid
        } : {};
        r(l.sock, p, h).catch((c)=>{
            t(`[reply-yield] release to ${kg(l.sock)} failed: ${tV(String(c))}`);
            if (x4(c) && !_a(l.pid)) {
                return;
            }
            let u = ()=>void r(l.sock, p, h).catch(()=>{
                    f("artifact_live_subscribe", "takeover_release_failed");
                });
            if (x4(c)) {
                Jyn.setTimeout(u, z);
            } else {
                u();
            }
        });
    }
    g("artifact_live_subscribe", {
        [n ? "takeover_stop_notified" : "takeover_released"]: s.length
    });
}
function H(e) {
    let n = e.slice(0, 2);
    let r = e.length - n.length;
    return `${n.join(", ")}${r > 0 ? ` and ${r} more` : ""}`;
}
function EWr(e, n, r, a) {
    let s = vzr({
        kind: "interactive",
        ...typeof r.cwd === "string" && {
            cwd: r.cwd
        },
        ...typeof r.tmux === "string" && {
            tmux: r.tmux
        }
    }, a);
    let l = n === "resume" ? `the session that just resumed this conversation in ${s}` : `another session of this conversation (${s}), which just published or resumed them there`;
    return `Automatic replies to comments on ${H(e)} moved to ${l}; this session keeps watching for new versions only. To take them back here, publish the Artifact again or ask Claude to resume its replies.`;
}
function kWr(e) {
    return `Automatic replies to comments on ${H(e)} are back in this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).`;
}
function TWr(e) {
    return `Automatic replies to comments on ${H(e)} were stopped in the other session of this conversation, so they stay off here too. To turn them back on, publish the Artifact again or ask Claude to resume its replies.`;
}
const oe = "Automatic replies to comments on the Artifact(s) this session was answering moved to another session of this same conversation on this machine, at its request; this session keeps its version watch only. Nothing to do — do not stop or re-arm a watch on your own; a publish the user asks for here takes them back.";
const ne = "The automatic comment replies this session had handed to another session of this conversation were stopped by the user there; they stay stopped here too. Nothing to do unless the user asks to resume them or to publish again.";
const ie = "The automatic comment replies are back with this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).";
function pjs(e, n) {
    let r = e === "yielded" ? `Comment replies on ${n} Artifact(s) moved to another session of this conversation` : e === "reverted" ? `Comment replies on ${n} Artifact(s) are back with this session` : `Comment replies on ${n} Artifact(s) were stopped in the other session`;
    let a = e === "yielded" ? oe : e === "reverted" ? ie : ne;
    Ja({
        value: Fi({
            taskType: Zz,
            summary: Bt(r),
            body: `
<event>${Bt(a)}</event>`
        }),
        mode: "task-notification",
        passive: true,
        priority: "next",
        origin: {
            kind: "task-notification",
            source: Zz
        },
        agentId: Xe()
    });
}
function AWr(e) {
    Azr((n)=>{
        let r = se(n.slugs, n.msgId);
        let r_newlyYielded = r.newlyYielded;
        if (r_newlyYielded.length > 0) {
            g("artifact_comments_autoreact", {
                yielded_to_other_session: r_newlyYielded.length
            });
        }
        return {
            yielded: r.yielded,
            notHeld: r.notHeld,
            ...r_newlyYielded.length > 0 && {
                onDelivered: ()=>{
                    let s = r_newlyYielded.filter((l)=>e$(l));
                    for (let l of s){
                        Pqo(l);
                    }
                    if (s.length > 0) {
                        e.yielded(s, n.reason, n.requester);
                    }
                }
            }
        };
    }, (n, r, a)=>{
        for (let u of r){
            if (a?.stopped?.has(u) ?? false) {
                Hqo(u, n);
            }
        }
        let s = new Set(r.filter((u)=>Dqo(u)));
        let l = new Set(r.filter((u)=>Iqo(u)));
        let p = re(n, r);
        let h = p.filter((u)=>l.has(u) && !Uh(u) && E(u) && !(a?.transferring?.has(u) ?? false));
        if (h.length > 0) {
            e.reverted(h);
        }
        let c = p.filter((u)=>l.has(u) && s.has(u));
        if (c.length > 0) {
            e.stoppedElsewhere(c);
        }
        return p;
    });
    return ()=>Azr(null);
}
function se(slugs, msgId) {
    let { live, autoReact, durable } = ee();
    let l = [];
    let notHeld = [];
    let newlyYielded = [];
    for (let c of slugs){
        if (e$(c)) {
            Qzr(c, msgId);
            l.push(c);
            continue;
        }
        let u = E(c);
        let I = Ey(c) && !wEe(c);
        let T = autoReact.enabledMemo !== false && !autoReact.userDisarmed && !durable.stopLatches.isStopped(c) && (!Uh(c) || I);
        if (!u || !T) {
            notHeld.push(c);
            continue;
        }
        Qzr(c, msgId);
        Qie(c);
        b_n(c);
        BG(live, c);
        l.push(c);
        newlyYielded.push(c);
    }
    return {
        yielded: l,
        notHeld,
        newlyYielded
    };
}
function E(e) {
    let { live } = ee();
    let r = live.supervisors.get(e);
    return r !== undefined && !r.stopped && r.autoReactWiring !== undefined || live.inFlightWiredIntent.has(e) || JOe().has(e);
}
function re(e, n) {
    let { live } = ee();
    let a = [];
    for (let s of n){
        if (!Oqo(s, e)) {
            continue;
        }
        BG(live, s);
        if (Uh(s) && !Ey(s)) {
            s7e(s);
            W2o(s);
        }
        a.push(s);
        let l = live.supervisors.get(s);
        if (!Uh(s) && !E(s)) {
            wDs(s);
        }
        let p = Fme(s).lastWakeArgs;
        if (!Uh(s) && E(s) && l?.taskId !== undefined && r_t(l.taskId) && p !== null) {
            Xie({
                ...p,
                seed: false,
                confirm: undefined,
                confirmBase: undefined,
                confirmAfter: undefined,
                reentry: undefined,
                idlePass: undefined,
                suppressSummonStatus: undefined
            });
        }
    }
    if (a.length > 0) {
        g("artifact_comments_autoreact", {
            yield_reverted: a.length
        });
    }
    return a;
}
export { ujs, W2o, wDs, EWr, kWr, TWr, pjs, AWr };
