import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { oo, K, vd } from "/$bunfs/root/chunk-ctt36bn8.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { rr } from "/$bunfs/root/chunk-k3tkc302.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { bd, iO } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ua } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Aue, Ny, B7 } from "/$bunfs/root/chunk-t0b6khh6.js";
import { Eue } from "/$bunfs/root/chunk-74djrymf.js";
import { gd, vm, hne, Ele, E4t, NCn, J2e, IJr, wp, jCn, GJr, OA, uQr, pQr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Vu } from "/$bunfs/root/chunk-y9c4grt0.js";
import { ee, UNe } from "/$bunfs/root/chunk-499b1h1a.js";
import { o, E, oe, T, u, ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { basename } from "path";
const ot = {
    published: "published",
    comment: "comment"
};
const z = 64;
const W = 16;
const it = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
const st = "";
const at = p(()=>{
    let rowsEnvelope = u({
        v: A(1),
        rows: ue(o(), oe())
    });
    let newerEnvelope = u({
        v: E().gt(1)
    });
    let stopsEnvelope = u({
        stopped: ue(o(), oe())
    });
    let i = U(ot);
    let trigger_id = o().refine((g)=>Jt(g) !== null);
    let orphansEnvelope = u({
        orphans: T(oe()).transform((g)=>g.slice(0, W).flatMap((m)=>{
                let c = trigger_id.safeParse(m);
                if (c.success) {
                    return [
                        c.data
                    ];
                }
                return [];
            }))
    });
    let row = u({
        trigger_id,
        since: o().regex(it),
        events: T(o()).max(16).transform((g)=>D(g).flatMap((m)=>{
                let c = i.safeParse(m);
                if (c.success) {
                    return [
                        c.data
                    ];
                }
                return [];
            })).refine((g)=>g.length > 0),
        unreleased: T(oe()).catch([]).transform((g)=>g.slice(0, W).flatMap((m)=>{
                let c = trigger_id.safeParse(m);
                if (c.success) {
                    return [
                        c.data
                    ];
                }
                return [];
            }))
    });
    let stop = u({
        at_ms: E().refine(Number.isFinite)
    });
    return {
        rowsEnvelope,
        newerEnvelope,
        stopsEnvelope,
        orphansEnvelope,
        row,
        stop
    };
});
function PVo(e) {
    ee().durable.registrySink = e;
}
function IVo() {
    ee().durable.registryPublished = st;
}
function yEe() {
    if (!a.CLAUDE_CODE_REMOTE) {
        return;
    }
    let e = ee();
    let { durable } = e;
    if (durable.registrySink === null) {
        return;
    }
    let n = {};
    let i = [];
    let r = new Set;
    for (let c of durable.pendingRestoredRows.values()){
        let h = durable.rows.get(c.slug);
        if (h === undefined && !durable.unwatchedSlugs.has(c.slug)) {
            i.push(c);
            continue;
        }
        for (let S of [
            c.triggerId,
            ...c.unreleased ?? []
        ]){
            if (S !== h?.triggerId) {
                r.add(S);
            }
        }
    }
    for (let c of [
        ...durable.rows.values(),
        ...i
    ].slice(0, z)){
        n[c.slug] = {
            trigger_id: c.triggerId,
            since: c.since,
            events: [
                ...c.events
            ],
            ...c.unreleased !== undefined && c.unreleased.length > 0 && {
                unreleased: [
                    ...c.unreleased
                ]
            }
        };
    }
    let d = {};
    let s = [
        ...e.commentMonitorIntent.bySlug.entries()
    ].filter(([, c])=>c.state === "stopped").sort(([, c], [, h])=>h.writtenAtMs - c.writtenAtMs).slice(0, z);
    for (let [c, h] of s){
        d[c] = {
            at_ms: h.writtenAtMs
        };
    }
    let orphans = D([
        ...durable.orphanTriggers,
        ...r
    ]).slice(0, W);
    let artifact_durable_watches = durable.rows.size + i.length === 0 && s.length === 0 && orphans.length === 0 ? null : {
        v: 1,
        rows: n,
        stopped: d,
        ...orphans.length > 0 && {
            orphans
        }
    };
    let m = _(artifact_durable_watches);
    if (m === durable.registryPublished) {
        return;
    }
    durable.registryPublished = m;
    durable.registrySink({
        artifact_durable_watches
    });
}
function OVo(e) {
    if (e === undefined || e === null) {
        return null;
    }
    let t = at();
    let n = 0;
    let i = [];
    let r = t.rowsEnvelope.safeParse(e);
    if (r.success) {
        for (let [m, c] of B(r.data.rows)){
            let h = t.row.safeParse(c);
            if (!rr.test(m) || !h.success) {
                n++;
                continue;
            }
            i.push({
                slug: m,
                triggerId: h.data.trigger_id,
                since: h.data.since,
                events: h.data.events,
                ...h.data.unreleased.length > 0 && {
                    unreleased: h.data.unreleased
                }
            });
        }
    }
    let d = new Map;
    let s = t.stopsEnvelope.safeParse(e);
    if (s.success) {
        for (let [m, c] of B(s.data.stopped)){
            if (!rr.test(m)) {
                n++;
                continue;
            }
            let h = t.stop.safeParse(c);
            d.set(m, h.success ? h.data.at_ms : Date.now());
            if (!h.success) {
                n++;
            }
        }
    }
    if (!r.success || !s.success) {
        f("artifact_durable_subscribe", s.success && t.newerEnvelope.safeParse(e).success ? "registry_newer_version" : "registry_invalid");
    } else if (n > 0) {
        f("artifact_durable_subscribe", "registry_entry_invalid");
    }
    let l = t.orphansEnvelope.safeParse(e);
    let orphans = l.success ? l.data.orphans : [];
    return {
        rows: i,
        stopped: d,
        orphans
    };
}
function B(e) {
    return Object.keys(e).slice(0, z).map((n)=>[
            n,
            e[n]
        ]);
}
function Jie(e) {
    let { live } = ee();
    let n = live.supervisors.get(e);
    return n !== undefined && !n.stopped && n.autoReactWiring !== undefined || live.inFlightWiredIntent.has(e);
}
const k = "\x00unwritten";
const G = 256;
const H = 32;
const F = 64;
const dt = p(()=>{
    let e = E().refine(Number.isFinite);
    let record = u({
        state: U([
            "armed",
            "stopped"
        ]),
        writtenAtMs: e,
        title: o().min(1).max(G).optional(),
        holder: o().optional().transform((i)=>{
            if (i === undefined) {
                return undefined;
            }
            return "bg";
        }),
        holderPid: E().int().positive().optional().catch(undefined),
        holderProcStart: o().min(1).max(64).optional().catch(undefined),
        holderProcStartFt: o().min(1).max(64).optional().catch(undefined),
        holderJob: o().regex(/^[0-9a-f]{8}$/).optional().catch(undefined),
        holderPidSpace: o().min(1).max(160).optional().catch(undefined)
    });
    let envelope = u({
        type: A("artifact-comment-monitor"),
        v: A(1),
        sessionId: o(),
        artifacts: ue(o(), oe()),
        crossLineMerged: A(true).optional().catch(undefined),
        tailTorn: A(true).optional().catch(undefined)
    });
    return {
        record,
        envelope
    };
});
function Y(e) {
    if (e.holderPid === undefined || e.holderJob === undefined || e.holderPidSpace === undefined || e.holderProcStart === undefined && e.holderProcStartFt === undefined) {
        return {};
    }
    return {
        holderPid: e.holderPid,
        holderJob: e.holderJob,
        ...e.holderProcStart !== undefined && {
            holderProcStart: e.holderProcStart
        },
        ...e.holderProcStartFt !== undefined && {
            holderProcStartFt: e.holderProcStartFt
        },
        holderPidSpace: e.holderPidSpace
    };
}
function Z() {
    let Aue_token = Aue.token;
    if (Aue_token === undefined) {
        Ny();
        return {};
    }
    let t = iO();
    if (t === undefined || !/^[0-9a-f]{8}$/.test(basename(t))) {
        return {};
    }
    let { procStart, procStartFt } = B7(Aue_token);
    return Y({
        holderPid: process.pid,
        holderJob: basename(t),
        holderProcStart: procStart,
        holderProcStartFt: procStartFt,
        holderPidSpace: Eue().slice(0, 160)
    });
}
function kzr() {
    return Ny();
}
function Gyn(e, t) {
    let n = dt();
    let i = n.envelope.safeParse(e);
    if (!i.success) {
        f("artifact_live_subscribe", "comment_monitor_intent_invalid");
        return null;
    }
    if (i.data.sessionId !== K()) {
        f("artifact_live_subscribe", "comment_monitor_intent_foreign");
        return null;
    }
    if (i.data.crossLineMerged === true) {
        t?.onLossy?.();
    }
    let r = i.data.tailTorn === true;
    if (r) {
        t?.onLossy?.();
    }
    let d = new Map;
    let s = 0;
    let l = 0;
    let g = 0;
    for (let [m, c] of Object.entries(i.data.artifacts)){
        if (l++ >= 2 * F) {
            t?.onLossy?.();
            break;
        }
        let h = n.record.safeParse(c);
        if (!rr.test(m)) {
            s++;
            t?.onLossy?.();
            continue;
        }
        if (!h.success) {
            s++;
            t?.onLossy?.();
            if (typeof c === "object" && c !== null && c.state === "stopped") {
                d.set(m, {
                    state: "stopped",
                    writtenAtMs: Date.now()
                });
            }
            continue;
        }
        if (r && h.data.state === "armed" && h.data.holder === undefined) {
            d.set(m, {
                state: "stopped",
                writtenAtMs: Date.now(),
                ...h.data.title !== undefined && {
                    title: h.data.title
                }
            });
            t?.onTornStop?.(m);
            continue;
        }
        if (h.data.state === "armed" && g++ >= F) {
            t?.onLossy?.();
            continue;
        }
        let { state, writtenAtMs, title, holder } = h.data;
        d.set(m, {
            state,
            writtenAtMs,
            ...title !== undefined && {
                title
            },
            ...holder !== undefined && {
                holder,
                ...r ? {} : Y(h.data)
            }
        });
    }
    if (s > 0) {
        f("artifact_live_subscribe", "comment_monitor_intent_record_invalid");
    }
    return d;
}
function oWt(e) {
    let t = v(e.storageV5);
    let n = new Map([
        ...t.pendingRestore ?? [],
        ...t.bySlug
    ]);
    t.pendingRestore = null;
    let { excludeSlug } = e;
    if (excludeSlug !== undefined) {
        n.delete(excludeSlug);
    }
    M();
    return n;
}
function Vyn() {
    return ee().commentMonitorIntent.tornStops;
}
function Tzr() {
    return ee().commentMonitorIntent.storageV5;
}
function j6(e) {
    v(e?.storageV5);
}
function MVo(e, t) {
    if (e === undefined && !UNe()) {
        return;
    }
    let commentMonitorIntent = ee().commentMonitorIntent;
    commentMonitorIntent.earlySeed = e;
    commentMonitorIntent.adoptPendingFor = K();
    v(t?.storageV5);
}
function qyn(e, t) {
    let n = v(t?.storageV5);
    if (ee().durable.stopLatches.isStopped(e)) {
        return;
    }
    let i = t?.title;
    let r = i !== undefined && i.length >= 1 && i.length <= G;
    let d = n.bySlug.get(e)?.title;
    n.forgottenAt.delete(e);
    let s = Date.now();
    let l = bd() ? {
        holder: "bg",
        ...Z()
    } : undefined;
    n.bySlug.set(e, {
        state: "armed",
        writtenAtMs: s,
        ...r ? {
            title: i
        } : d !== undefined && {
            title: d
        },
        ...l
    });
    tt(n, e);
    M();
    if (l !== undefined && l.holderPid === undefined) {
        ct(e, s);
    }
}
function ct(e, t) {
    Ny().then(()=>{
        if (!UNe() || !bd()) {
            return;
        }
        let commentMonitorIntent = ee().commentMonitorIntent;
        let i = commentMonitorIntent.bySlug.get(e);
        if (commentMonitorIntent.sid !== K() || i?.state !== "armed" || i.holder !== "bg" || i.holderPid !== undefined || i.writtenAtMs !== t) {
            return;
        }
        let r = Z();
        if (r.holderPid === undefined) {
            return;
        }
        commentMonitorIntent.bySlug.set(e, {
            ...i,
            ...r
        });
        M();
    }).catch(()=>{});
}
function s7e(e, t) {
    let n = v(t?.storageV5);
    let i = n.bySlug.get(e);
    n.bySlug.set(e, {
        state: "stopped",
        writtenAtMs: Date.now(),
        ...i?.title !== undefined && {
            title: i.title
        }
    });
    M({
        durableNow: true
    });
    for (let [r, d] of n.parked){
        let s = d.line[e];
        if (s?.state === "armed") {
            d.line[e] = {
                state: "stopped",
                writtenAtMs: Date.now(),
                ...s.title !== undefined && {
                    title: s.title
                }
            };
            C(r, d.path, d.line, {
                durableNow: true
            });
        }
    }
}
function HVo(e, t) {
    return v(t?.storageV5).bySlug.get(e)?.state;
}
function oze(e, t) {
    let n = v(t?.storageV5);
    let i = false;
    let r = new Set(typeof e === "string" ? [
        e
    ] : e);
    let d = Date.now();
    for (let s of r){
        i = n.bySlug.delete(s) || i;
        n.forgottenAt.delete(s);
        if (n.forgottenAt.size >= ft) {
            let l = n.forgottenAt.keys().next().value;
            if (l !== undefined) {
                n.forgottenAt.delete(l);
            }
        }
        n.forgottenAt.set(s, d);
    }
    if (i) {
        M({
            durableNow: true
        });
    }
    for (let [s, l] of n.parked){
        let g = false;
        for (let m of r){
            if (l.traveling?.has(m) && l.line[m]?.state === "armed") {
                delete l.line[m];
                l.traveling.delete(m);
                g = true;
            }
        }
        if (g) {
            C(s, l.path, l.line, {
                durableNow: true
            });
            if (!Object.values(l.line).some((m)=>m.state === "armed")) {
                n.parked.delete(s);
            }
        }
    }
}
function Kyn(e, t) {
    let n = v(t?.storageV5);
    let { stopLatches } = ee().durable;
    for (let [r, d] of e){
        if (stopLatches.wasClearedByRewatch(r)) {
            continue;
        }
        let s = n.bySlug.get(r);
        if (s === undefined || s.state === "armed" || s.writtenAtMs <= d) {
            n.bySlug.set(r, {
                state: "stopped",
                writtenAtMs: d,
                ...s?.title !== undefined && {
                    title: s.title
                }
            });
        }
        stopLatches.reaffirmStop(r);
    }
    M();
}
function DVo(e) {
    let t = v(e?.storageV5);
    let { yieldedSlugs } = ee().wakes;
    let i = Date.now();
    let r = false;
    for (let [d, s] of t.bySlug){
        if (s.state === "armed" && !yieldedSlugs.has(d)) {
            t.bySlug.set(d, {
                state: "stopped",
                writtenAtMs: i,
                ...s.title !== undefined && {
                    title: s.title
                }
            });
            r = true;
        }
    }
    if (r) {
        M({
            durableNow: true
        });
    }
    for (let [d, s] of t.parked){
        let l = false;
        for (let [g, m] of Object.entries(s.line)){
            if (m.state === "armed") {
                s.line[g] = {
                    state: "stopped",
                    writtenAtMs: i,
                    ...m.title !== undefined && {
                        title: m.title
                    }
                };
                l = true;
            }
        }
        if (l) {
            C(d, s.path, s.line, {
                durableNow: true
            });
        }
    }
}
function lt(e) {
    switch(e){
        case "clear":
        case "resume":
        case "fork":
        case "remote_attach":
            return true;
        case "cd":
        case "spare_claim":
        case "hydrate":
        case "startup_custom_id":
            return false;
    }
}
function ut() {
    let commentMonitorIntent = ee().commentMonitorIntent;
    let e_sid = commentMonitorIntent.sid;
    if (e_sid === null || e_sid === K()) {
        commentMonitorIntent.leftWith = null;
        return;
    }
    let n = new Set;
    for (let [i, r] of commentMonitorIntent.bySlug){
        if (r.state === "armed" && Jie(i)) {
            n.add(i);
        }
    }
    commentMonitorIntent.leftWith = {
        sid: e_sid,
        traveling: n,
        unwritten: !commentMonitorIntent.onFile && !J2e(e_sid) && commentMonitorIntent.adoptPendingFor !== e_sid,
        inWindow: commentMonitorIntent.adoptPendingFor === e_sid
    };
}
function R() {
    let commentMonitorIntent = ee().commentMonitorIntent;
    if (!J2e(K())) {
        return;
    }
    for (let [t, n] of commentMonitorIntent.parked){
        if (n.traveling === undefined || t === K()) {
            continue;
        }
        let i = false;
        for (let r of n.traveling){
            if (n.line[r]?.state === "armed") {
                delete n.line[r];
                i = true;
            }
        }
        n.traveling = undefined;
        if (i) {
            C(t, n.path, n.line);
        }
        if (!Object.values(n.line).some((r)=>r.state === "armed")) {
            commentMonitorIntent.parked.delete(t);
        }
    }
}
function O(e, t) {
    if (J2e(t)) {
        if (e.adoptPendingFor === t) {
            e.adoptPendingFor = null;
        }
        return false;
    }
    return e.adoptPendingFor === t || gd() !== null;
}
function q(sid, transcriptPath, line, i, failureSeqAtWrite) {
    if (transcriptPath === null) {
        return;
    }
    let commentMonitorIntent = ee().commentMonitorIntent;
    let s = {
        path: transcriptPath,
        line: Q(sid, line)
    };
    commentMonitorIntent.pendingLines.set(sid, s);
    NCn(N);
    commentMonitorIntent.writeChain = commentMonitorIntent.writeChain.then(async ()=>{
        await wp().catch(()=>{});
        if (commentMonitorIntent.pendingLines.get(sid) !== s) {
            return;
        }
        if (commentMonitorIntent.exitStamped) {
            return;
        }
        commentMonitorIntent.pendingLines.delete(sid);
        if (!i && hne() === failureSeqAtWrite) {
            return;
        }
        if (sid === commentMonitorIntent.sid) {
            commentMonitorIntent.lastWritten = k;
            M();
            return;
        }
        C(sid, transcriptPath, line);
    });
    commentMonitorIntent.writeChain = commentMonitorIntent.writeChain.catch(()=>{});
}
var ft = 1024;
function Q(e, t) {
    let commentMonitorIntent = ee().commentMonitorIntent;
    let i = commentMonitorIntent.parked.get(e);
    if (i?.unwritten === true) {
        let { traveling } = i;
        if (traveling === undefined) {
            return t;
        }
        return ua(t, (d, s)=>d.state === "armed" && traveling.has(s));
    }
    if (i?.leftInWindow === true) {
        return V(commentMonitorIntent, {
            type: "artifact-comment-monitor",
            v: 1,
            sessionId: e,
            artifacts: t
        }).artifacts;
    }
    return t;
}
function C(e, path, n, i) {
    if (path === null) {
        return;
    }
    let commentMonitorIntent = ee().commentMonitorIntent;
    let { storageV5 } = commentMonitorIntent;
    let s = Q(e, {
        ...n
    });
    let l = {
        type: "artifact-comment-monitor",
        v: 1,
        sessionId: e,
        artifacts: s
    };
    commentMonitorIntent.owedLines.delete(e);
    let g = {
        path,
        line: s
    };
    commentMonitorIntent.pendingLines.set(e, g);
    NCn(N);
    if (i?.durableNow === true) {
        jCn(l, path, I(l));
    }
    commentMonitorIntent.writeChain = commentMonitorIntent.writeChain.then(async ()=>{
        await wp().catch(()=>{});
        if (commentMonitorIntent.exitStamped) {
            return;
        }
        if (e === commentMonitorIntent.sid) {
            if (commentMonitorIntent.pendingLines.get(e) === g) {
                commentMonitorIntent.pendingLines.delete(e);
            }
            commentMonitorIntent.lastWritten = k;
            M();
            return;
        }
        await OA(path, l, storageV5, {
            onlyIfExists: true,
            tornTailEntry: I(l)
        });
        if (commentMonitorIntent.pendingLines.get(e) === g) {
            commentMonitorIntent.pendingLines.delete(e);
        }
    }).catch(()=>{
        if (commentMonitorIntent.pendingLines.get(e) !== g) {
            f("artifact_live_subscribe", "comment_monitor_intent_write_failed");
            return;
        }
        commentMonitorIntent.pendingLines.delete(e);
        if (commentMonitorIntent.owedLines.size >= 2 * H) {
            let m = commentMonitorIntent.owedLines.keys().next().value;
            if (m !== undefined) {
                commentMonitorIntent.owedLines.delete(m);
            }
        }
        commentMonitorIntent.owedLines.set(e, {
            path,
            line: s
        });
        f("artifact_live_subscribe", "comment_monitor_intent_write_failed");
    });
}
function LVo(e, t) {
    tt(v(t?.storageV5), e);
}
function tt(e, t) {
    let n = false;
    for (let [i, r] of e.parked){
        if (i === K() || r.line[t]?.state !== "armed") {
            continue;
        }
        (r.traveling ??= new Set).add(t);
        n = true;
    }
    if (n) {
        R();
    }
}
function X(commentMonitorIntent) {
    if (commentMonitorIntent.owedLines.size === 0) {
        return;
    }
    let t = [
        ...commentMonitorIntent.owedLines.entries()
    ];
    commentMonitorIntent.owedLines.clear();
    let n = false;
    for (let [i, { path, line }] of t){
        if (i === commentMonitorIntent.sid) {
            commentMonitorIntent.lastWritten = k;
            n = true;
            continue;
        }
        if (commentMonitorIntent.pendingLines.has(i)) {
            continue;
        }
        let s = commentMonitorIntent.parked.get(i);
        C(i, s?.path ?? path, s?.line ?? line);
    }
    if (n) {
        M();
    }
}
function v(e) {
    let commentMonitorIntent = ee().commentMonitorIntent;
    if (e !== undefined) {
        commentMonitorIntent.storageV5 = e;
    }
    let n = K();
    let i = false;
    let r = false;
    if (commentMonitorIntent.sid !== n) {
        let s = commentMonitorIntent.leftWith !== null && commentMonitorIntent.leftWith.sid === commentMonitorIntent.sid ? commentMonitorIntent.leftWith : null;
        let l = (S)=>{
            if (s !== null) {
                return s.traveling.has(S);
            }
            return Jie(S);
        };
        commentMonitorIntent.leftWith = null;
        let line = P(commentMonitorIntent);
        let m = new Set;
        let c = 0;
        for (let [S, w] of commentMonitorIntent.bySlug){
            if (w.state !== "armed") {
                continue;
            }
            if (l(S)) {
                m.add(S);
            } else {
                commentMonitorIntent.bySlug.delete(S);
                c++;
            }
        }
        let { stopLatches } = ee().durable;
        for (let [S, w] of Object.entries(commentMonitorIntent.parked.get(n)?.line ?? {})){
            let y = commentMonitorIntent.forgottenAt.get(S);
            if (w.state === "armed" && y !== undefined && w.writtenAtMs <= y && !Jie(S)) {
                r = true;
                continue;
            }
            let b = x(commentMonitorIntent.bySlug.get(S), w);
            if (b.state === "armed" && stopLatches.isStopped(S)) {
                b = {
                    state: "stopped",
                    writtenAtMs: Date.now(),
                    ...b.title !== undefined && {
                        title: b.title
                    }
                };
            }
            commentMonitorIntent.bySlug.set(S, b);
            if (b.state === "stopped") {
                stopLatches.confirmStop(S);
            }
        }
        commentMonitorIntent.parked.delete(n);
        for (let S of [
            commentMonitorIntent.owedLines.get(n),
            commentMonitorIntent.pendingLines.get(n)
        ]){
            for (let [w, y] of Object.entries(S?.line ?? {})){
                if (y.state !== "stopped") {
                    continue;
                }
                let b = x(commentMonitorIntent.bySlug.get(w), y);
                commentMonitorIntent.bySlug.set(w, b);
                if (b.state === "stopped") {
                    stopLatches.confirmStop(w);
                }
            }
        }
        if (commentMonitorIntent.sid !== null && (c > 0 || m.size > 0)) {
            commentMonitorIntent.parked.set(commentMonitorIntent.sid, {
                path: commentMonitorIntent.transcriptPath,
                line,
                ...m.size > 0 && {
                    traveling: m
                },
                ...s?.unwritten === true && {
                    unwritten: true
                },
                ...s?.inWindow === true && {
                    leftInWindow: true
                }
            });
            while(commentMonitorIntent.parked.size > H){
                let [S, w] = commentMonitorIntent.parked.entries().next().value;
                commentMonitorIntent.parked.delete(S);
                let y = Date.now();
                C(S, w.path, Object.fromEntries(Object.entries(w.line).flatMap(([b, L])=>{
                    if (L.state !== "armed") {
                        return [
                            [
                                b,
                                L
                            ]
                        ];
                    }
                    if (w.traveling?.has(b)) {
                        return [];
                    }
                    return [
                        [
                            b,
                            {
                                state: "stopped",
                                writtenAtMs: y,
                                ...L.title !== undefined && {
                                    title: L.title
                                }
                            }
                        ]
                    ];
                })));
            }
        }
        if (commentMonitorIntent.sid !== null && commentMonitorIntent.wroteCurrentLine) {
            q(commentMonitorIntent.sid, commentMonitorIntent.transcriptPath, line, commentMonitorIntent.lastWritten === k, commentMonitorIntent.failureSeqAtWrite);
        } else if (commentMonitorIntent.sid !== null && s?.inWindow === true && nt(commentMonitorIntent, line)) {
            q(commentMonitorIntent.sid, commentMonitorIntent.transcriptPath, line, true, commentMonitorIntent.failureSeqAtWrite);
        }
        R();
        i = [
            ...commentMonitorIntent.bySlug.values()
        ].some((S)=>S.state === "armed");
        commentMonitorIntent.sid = n;
        if (commentMonitorIntent.adoptPendingFor !== n) {
            commentMonitorIntent.adoptPendingFor = null;
        }
        commentMonitorIntent.lastWritten = r ? k : null;
        commentMonitorIntent.wroteCurrentLine = false;
        commentMonitorIntent.pendingRestore = null;
        commentMonitorIntent.transcriptPath = null;
        commentMonitorIntent.tornStops.clear();
        commentMonitorIntent.onFile = false;
    }
    if (!commentMonitorIntent.onFile && J2e(n)) {
        commentMonitorIntent.onFile = true;
    }
    commentMonitorIntent.transcriptPath = O(commentMonitorIntent, n) ? Vu() : vm(n);
    if (commentMonitorIntent.unsubscribeMaterialized === undefined) {
        commentMonitorIntent.unsubscribeMaterialized = IJr(()=>{
            if (commentMonitorIntent.sid !== null && J2e(commentMonitorIntent.sid)) {
                commentMonitorIntent.onFile = true;
            }
            R();
        });
    }
    if (commentMonitorIntent.unsubscribeSwitch === undefined) {
        commentMonitorIntent.unregisterExitDrain = E4t(()=>{
            X(commentMonitorIntent);
            return commentMonitorIntent.writeChain;
        });
        NCn(N);
        commentMonitorIntent.unsubscribeSwitch = vd((s, l)=>{
            if (l === "cd" && commentMonitorIntent.sid === s) {
                commentMonitorIntent.transcriptPath = vm(s);
            }
            if (lt(l)) {
                ut();
            }
            if (l === "clear") {
                queueMicrotask(M);
            }
        });
    }
    let d = commentMonitorIntent.earlySeed ?? pQr();
    commentMonitorIntent.earlySeed = undefined;
    if (d !== undefined) {
        let s = false;
        let l = Gyn(d, {
            onLossy: ()=>{
                s = true;
            },
            onTornStop: (g)=>{
                commentMonitorIntent.tornStops.add(g);
            }
        });
        if (l !== null) {
            if (d.tailTorn === true) {
                GJr(commentMonitorIntent.transcriptPath ?? undefined);
            }
            let { stopLatches } = ee().durable;
            let m = new Map;
            for (let [c, h] of l){
                let S = commentMonitorIntent.forgottenAt.get(c);
                if (h.state === "armed" && S !== undefined && h.writtenAtMs <= S && !Jie(c)) {
                    s = true;
                    continue;
                }
                let w = commentMonitorIntent.bySlug.get(c);
                if (commentMonitorIntent.tornStops.has(c) && w?.state === "armed" && Jie(c)) {
                    commentMonitorIntent.tornStops.delete(c);
                    m.set(c, w);
                    s = true;
                    continue;
                }
                let y = x(w, h);
                commentMonitorIntent.bySlug.set(c, y);
                m.set(c, y);
                if (y.state === "stopped") {
                    stopLatches.confirmStop(c);
                }
            }
            commentMonitorIntent.pendingRestore = m;
            if (!s && commentMonitorIntent.lastWritten === null) {
                commentMonitorIntent.lastWritten = j(Object.fromEntries(l));
                commentMonitorIntent.failureSeqAtWrite = hne();
            } else if (s && commentMonitorIntent.lastWritten === null) {
                commentMonitorIntent.lastWritten = k;
            }
            yEe();
        }
    }
    X(commentMonitorIntent);
    if (i || r) {
        M();
    }
    return commentMonitorIntent;
}
function x(e, t) {
    if (e === undefined) {
        return t;
    }
    if (t.state === "stopped" && e.state !== "stopped" && t.writtenAtMs >= e.writtenAtMs) {
        return t;
    }
    if (t.state === "armed" && e.state === "armed" && t.writtenAtMs > e.writtenAtMs) {
        return t;
    }
    return e;
}
function P(e) {
    return Object.fromEntries([
        ...e.bySlug.entries()
    ].sort(([, t], [, n])=>Number(n.state === "stopped") - Number(t.state === "stopped") || n.writtenAtMs - t.writtenAtMs).slice(0, F));
}
function et() {
    let { commentMonitorIntent, wakes } = ee();
    if (!commentMonitorIntent.wroteCurrentLine || commentMonitorIntent.sid !== K() || [
        ...commentMonitorIntent.bySlug.keys()
    ].some((n)=>wakes.yieldedSlugs.has(n))) {
        return;
    }
    return {
        type: "artifact-comment-monitor",
        v: 1,
        sessionId: K(),
        artifacts: P(commentMonitorIntent)
    };
}
function N() {
    let commentMonitorIntent = ee().commentMonitorIntent;
    let t = K();
    let n;
    let i = ()=>nt(commentMonitorIntent, P(commentMonitorIntent));
    let r = !commentMonitorIntent.exitStamped && commentMonitorIntent.sid === t;
    if (r && J2e(t)) {
        if (commentMonitorIntent.wroteCurrentLine || i() || commentMonitorIntent.owedLines.has(t) || commentMonitorIntent.pendingLines.has(t)) {
            R();
            commentMonitorIntent.wroteCurrentLine = true;
            Ele(et);
        }
    } else if (r && O(commentMonitorIntent, t) && commentMonitorIntent.transcriptPath !== null && i()) {
        let s = V(commentMonitorIntent, {
            type: "artifact-comment-monitor",
            v: 1,
            sessionId: t,
            artifacts: P(commentMonitorIntent)
        });
        n = {
            path: commentMonitorIntent.transcriptPath,
            entry: s,
            tornTailEntry: I(s)
        };
        for (let l of [
            commentMonitorIntent.owedLines,
            commentMonitorIntent.pendingLines
        ]){
            if (l.get(t)?.path === n.path) {
                l.delete(t);
            }
        }
    }
    commentMonitorIntent.exitStamped = true;
    let d = [
        ...commentMonitorIntent.owedLines,
        ...commentMonitorIntent.pendingLines
    ].map(([sessionId, { path, line }])=>{
        let m = {
            type: "artifact-comment-monitor",
            v: 1,
            sessionId,
            artifacts: line
        };
        return {
            path,
            entry: m,
            tornTailEntry: I(m)
        };
    });
    if (n === undefined) {
        return d;
    }
    return [
        ...d,
        n
    ];
}
function I(e) {
    let t = Date.now();
    return {
        ...e,
        artifacts: oo(e.artifacts, (n)=>{
            if (n.state === "armed" && n.holder === undefined) {
                return {
                    state: "stopped",
                    writtenAtMs: t,
                    ...n.title !== undefined && {
                        title: n.title
                    }
                };
            }
            return n;
        })
    };
}
function V(e, t) {
    let n = K();
    let i = new Set;
    for (let [r, d] of e.parked){
        if (r === n || r === t.sessionId || d.unwritten) {
            continue;
        }
        for (let s of d.traveling ?? []){
            if (d.line[s]?.state === "armed") {
                i.add(s);
            }
        }
    }
    if (i.size === 0) {
        return t;
    }
    return {
        ...t,
        artifacts: ua(t.artifacts, (r, d)=>r.state === "armed" && i.has(d))
    };
}
function nt(commentMonitorIntent, t) {
    return commentMonitorIntent.lastWritten !== j(t) && !(commentMonitorIntent.lastWritten === null && Object.keys(t).length === 0);
}
function j(e) {
    return _(Object.entries(e).map(([t, n])=>[
            t,
            n.state,
            n.writtenAtMs,
            n.title ?? null,
            n.holder ?? null,
            n.holderPid ?? null,
            n.holderProcStart ?? n.holderProcStartFt ?? null,
            n.holderJob ?? null,
            n.holderPidSpace ?? null
        ]).sort());
}
function M(e) {
    let t = v();
    R();
    yEe();
    let n = P(t);
    let i = j(n);
    if (i === t.lastWritten && hne() === t.failureSeqAtWrite) {
        return;
    }
    t.failureSeqAtWrite = hne();
    if (t.lastWritten === null && t.bySlug.size === 0) {
        t.lastWritten = i;
        return;
    }
    let r = {
        type: "artifact-comment-monitor",
        v: 1,
        sessionId: K(),
        artifacts: n
    };
    if (O(t, K())) {
        t.lastWritten = k;
        if (e?.durableNow === true && t.transcriptPath !== null) {
            let d = V(t, r);
            jCn(d, t.transcriptPath, I(d));
        }
        return;
    }
    t.lastWritten = i;
    t.wroteCurrentLine = true;
    Ele(et);
    if (e?.durableNow === true) {
        jCn(r);
    }
    uQr(r, t.storageV5).catch(()=>{
        if (t.lastWritten === i) {
            t.lastWritten = k;
        }
        f("artifact_live_subscribe", "comment_monitor_intent_write_failed");
    });
}
export { PVo, IVo, yEe, OVo, Jie, kzr, Gyn, oWt, Vyn, Tzr, j6, MVo, qyn, s7e, HVo, oze, Kyn, DVo, LVo };
