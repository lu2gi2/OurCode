import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Nm, X_ } from "/$bunfs/root/chunk-t0b6khh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { kg, tV, x4 } from "/$bunfs/root/chunk-xyr83dxa.js";
import { o, E, M, oe, T, u, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
const S = 4000;
const iWt = 16;
const h = 64;
const jVo = p(()=>u({
        action: A("yield_artifact_replies"),
        from: o().max(512),
        msg_id: o().min(1).max(128),
        session_id: o().max(512),
        slugs: T(o().max(128)).max(iWt),
        reason: U([
            "resume",
            "claim"
        ]).catch("claim"),
        sent_at: E().finite(),
        claimed_at: E().finite().optional(),
        requester: u({
            cwd: oe().optional(),
            tmux: oe().optional()
        }).optional()
    }));
const WVo = p(()=>u({
        action: A("artifact_replies_yielded"),
        orig_msg_id: o().max(128),
        yielded: oe().optional(),
        not_held: oe().optional(),
        refused: oe().optional()
    }));
const zVo = p(()=>u({
        action: A("unyield_artifact_replies"),
        orig_msg_id: o().max(128),
        slugs: T(o().max(128)).max(iWt),
        stopped: M().optional()
    }));
const Jyn = {
    setTimeout: (e, i)=>{
        let n = setTimeout(e, i);
        n.unref?.();
        return n;
    },
    clearTimeout: (e)=>clearTimeout(e)
};
class k {
    outstanding = new Map;
    pendingClaims = new Map;
    holder = null;
    reverter = null;
    sendAnswer = null;
    ownAddress = null;
    delivered = new Map;
    reset() {
        for (let e of this.outstanding.values()){
            e.timers.clearTimeout(e.timer);
        }
        this.outstanding.clear();
        this.pendingClaims.clear();
        this.holder = null;
        this.reverter = null;
        this.sendAnswer = null;
        this.ownAddress = null;
        this.delivered.clear();
    }
}
const z = new q(()=>new k);
function y() {
    return z.of(B().host);
}
function b(e, i) {
    while(e.size > h){
        let n = e.keys().next().value;
        if (n === undefined) {
            break;
        }
        let r = e.get(n);
        e.delete(n);
        i?.(r, n);
    }
}
function GVo(e, i, n) {
    let timers = n.timers ?? Jyn;
    let s = y();
    return new Promise((resolve)=>{
        let d = {
            asked: new Set(i),
            expectPid: n.expectPid,
            sentAt: n.sentAt,
            lost: new Map,
            resolve,
            onLate: n.onLate,
            timer: undefined,
            timers
        };
        d.timer = timers.setTimeout(()=>{
            if (s.outstanding.get(e) !== d || d.resolve === null) {
                return;
            }
            d.resolve = null;
            resolve({
                kind: "timeout",
                lost: [
                    ...d.lost.keys()
                ],
                lostTo: [
                    ...d.lost
                ]
            });
            if (d.onLate === undefined) {
                s.outstanding.delete(e);
            }
        }, n.timeoutMs ?? S);
        s.outstanding.set(e, d);
        b(s.outstanding, (l)=>{
            l.timers.clearTimeout(l.timer);
            l.resolve?.({
                kind: "timeout",
                lost: [
                    ...l.lost.keys()
                ],
                lostTo: [
                    ...l.lost
                ]
            });
            l.resolve = null;
        });
    });
}
function VVo(e, sentAt) {
    let id = `claim-${sentAt}-${Math.random().toString(36).slice(2)}`;
    let r = y();
    let s = {
        id,
        slugs: new Set(e),
        sentAt,
        lost: new Map,
        end: ()=>void r.pendingClaims.delete(id)
    };
    r.pendingClaims.set(id, s);
    return s;
}
function qVo(e) {
    let i = y();
    let n = i.outstanding.get(e);
    if (n === undefined) {
        return [];
    }
    n.timers.clearTimeout(n.timer);
    i.outstanding.delete(e);
    return [
        ...n.lost
    ];
}
function KVo(e) {
    return typeof e === "string" && y().outstanding.has(e);
}
function YVo(e, i) {
    let n = y();
    let r = n.outstanding.get(e.orig_msg_id);
    if (r === undefined) {
        return false;
    }
    if (r.expectPid !== undefined && i !== undefined && i !== r.expectPid) {
        f("artifact_live_subscribe", "yield_answer_pid_mismatch");
        return false;
    }
    r.timers.clearTimeout(r.timer);
    let s = (d)=>{
        if (Array.isArray(d)) {
            return d.filter((l)=>typeof l === "string" && r.asked.has(l));
        }
        return [];
    };
    let a = e.refused === true ? {
        kind: "refused"
    } : {
        kind: "yielded",
        yielded: s(e.yielded),
        notHeld: s(e.not_held)
    };
    if (r.resolve !== null) {
        n.outstanding.delete(e.orig_msg_id);
        r.resolve({
            ...a,
            lost: [
                ...r.lost.keys()
            ],
            lostTo: [
                ...r.lost
            ]
        });
    } else {
        n.outstanding.delete(e.orig_msg_id);
        g("artifact_live_subscribe", {
            yield_answer_late: true
        });
        try {
            r.onLate?.({
                ...a,
                lost: [
                    ...r.lost.keys()
                ],
                lostTo: [
                    ...r.lost
                ]
            });
        } catch (error) {
            c(error);
        }
    }
    return true;
}
function Azr(e, i = null) {
    let n = y();
    n.holder = e;
    n.reverter = i;
}
function P(e, msg_id, yielded, r) {
    let s = e.delivered.get(msg_id);
    e.delivered.delete(msg_id);
    let pid = r?.pid ?? s?.pid;
    e.delivered.set(msg_id, {
        slugs: new Set([
            ...s?.slugs ?? [],
            ...yielded
        ]),
        pid,
        procStart: r?.procStart ?? s?.procStart
    });
    let d = (l, _)=>{
        try {
            e.reverter?.(_, [
                ...l.slugs
            ]);
        } catch (error) {
            c(error);
        }
    };
    while(e.delivered.size > h){
        let l = [
            ...e.delivered
        ].find(([_, m])=>_ !== msg_id && pid !== undefined && m.pid === pid);
        if (l === undefined) {
            break;
        }
        e.delivered.delete(l[0]);
        d(l[1], l[0]);
    }
    b(e.delivered, d);
}
function H(e, i) {
    if (e.delivered.size < h) {
        return false;
    }
    if (i === undefined) {
        return true;
    }
    for (let n of e.delivered.values()){
        if (n.pid === i) {
            return false;
        }
    }
    return true;
}
function XVo(e) {
    return x(y(), e);
}
function x(e, i) {
    let n = [];
    for (let [r, s] of [
        ...e.delivered
    ]){
        if (s.pid !== undefined && Nm(s.pid)) {
            n.push(...R(e, r, [
                ...s.slugs
            ], i));
        }
    }
    C(e);
    return n;
}
function JVo(e) {
    let i = y();
    for (let [n, r] of [
        ...i.delivered
    ]){
        if (r.slugs.delete(e) && r.slugs.size === 0) {
            i.delivered.delete(n);
        }
    }
}
async function C(e) {
    for (let [i, n] of [
        ...e.delivered
    ]){
        if (n.pid === undefined || n.procStart === undefined) {
            continue;
        }
        let r;
        try {
            r = await X_(n.pid, n.procStart);
        } catch  {
            r = undefined;
        }
        if (r === false && e.delivered.get(i) === n) {
            g("artifact_comments_autoreact", {
                yield_taker_reused: true
            });
            R(e, i, [
                ...n.slugs
            ]);
        }
    }
}
function R(e, i, n, r) {
    let s = e.delivered.get(i);
    if (s === undefined) {
        return [];
    }
    let a = [
        ...n
    ].filter((d)=>s.slugs.delete(d));
    if (s.slugs.size === 0) {
        e.delivered.delete(i);
    }
    if (a.length === 0) {
        return [];
    }
    try {
        return e.reverter?.(i, a, r) ?? [];
    } catch (error) {
        c(error);
        return [];
    }
}
function Czr(e, i = null) {
    let n = y();
    n.sendAnswer = e;
    n.ownAddress = i;
}
function D(e, i) {
    let n = i.claimed_at ?? i.sent_at;
    let r = false;
    let s = [
        ...e.pendingClaims.values()
    ];
    for (let [id, d] of e.outstanding){
        if (d.resolve !== null) {
            s.push({
                id,
                slugs: d.asked,
                sentAt: d.sentAt,
                lost: d.lost
            });
        }
    }
    for (let a of s){
        if (!i.slugs.some((l)=>a.slugs.has(l))) {
            continue;
        }
        if (n > a.sentAt || n === a.sentAt && i.from > (e.ownAddress ?? "")) {
            for (let l of i.slugs){
                if (a.slugs.has(l)) {
                    a.lost.set(l, i.from);
                }
            }
        } else {
            r = true;
        }
    }
    if (r) {
        return "refuse";
    }
    return "proceed";
}
function Rzr(e, i, n, r, s) {
    let a = n?.pid;
    let d = n?.writeToken;
    let l = y();
    let l_sendAnswer = l.sendAnswer;
    if (l_sendAnswer === null) {
        return;
    }
    let m;
    if (s?.refuse === true) {
        m = "refused";
    } else if (r - e.sent_at > S - 500 || e.sent_at > r + 1000 || e.claimed_at !== undefined && e.claimed_at > e.sent_at + 1000) {
        f("artifact_comments_autoreact", "yield_request_stale");
        m = "refused";
    } else if (D(l, e) === "refuse") {
        m = "refused";
    } else if (l.holder === null) {
        m = {
            yielded: [],
            notHeld: [
                ...e.slugs
            ]
        };
    } else {
        try {
            x(l, {
                transferring: new Set(e.slugs)
            });
            if (H(l, n?.pid)) {
                f("artifact_comments_autoreact", "yield_table_full");
                m = "refused";
            } else {
                m = l.holder({
                    msgId: e.msg_id,
                    slugs: e.slugs,
                    reason: e.reason,
                    requester: {
                        cwd: e.requester?.cwd,
                        tmux: e.requester?.tmux
                    }
                });
            }
        } catch (error) {
            c(error);
            f("artifact_comments_autoreact", "yield_handler_threw");
            m = "refused";
        }
    }
    let Y = m === "refused" ? {
        orig_msg_id: e.msg_id,
        yielded: [],
        not_held: [],
        refused: true
    } : {
        orig_msg_id: e.msg_id,
        yielded: m.yielded.slice(0, iWt),
        not_held: m.notHeld.slice(0, iWt)
    };
    let w = m !== "refused" && m.yielded.length > 0 ? m : null;
    if (w !== null) {
        P(l, e.msg_id, w.yielded, n);
    }
    l_sendAnswer(i, Y, a, d).then(()=>w?.onDelivered?.(), (v)=>{
        t(`[reply-yield] answer to ${kg(i)} failed: ${tV(String(v))}`);
        if (w === null) {
            return;
        }
        if (!x4(v)) {
            f("artifact_comments_autoreact", "yield_answer_send_ambiguous");
            l_sendAnswer(i, Y, a, d).catch(()=>{});
            w.onDelivered?.();
            return;
        }
        f("artifact_comments_autoreact", "yield_answer_undelivered");
        R(l, e.msg_id, w.yielded);
    });
}
function QVo(e, i) {
    let n = y();
    let r = n.delivered.get(e.orig_msg_id);
    if (r === undefined) {
        return false;
    }
    if (r.pid !== undefined && i !== undefined && i !== r.pid) {
        f("artifact_comments_autoreact", "unyield_pid_mismatch");
        return false;
    }
    let s = R(n, e.orig_msg_id, e.slugs, {
        ...e.stopped === true && {
            stopped: new Set(e.slugs)
        }
    });
    s.push(...x(n));
    g("artifact_comments_autoreact", {
        yield_handed_back: s.length
    });
    return true;
}
export { iWt, jVo, WVo, zVo, Jyn, GVo, VVo, qVo, KVo, YVo, Azr, XVo, JVo, Czr, Rzr, QVo };
