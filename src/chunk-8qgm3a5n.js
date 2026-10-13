import { So } from "/$bunfs/root/chunk-dn762950.js";
import { K, Xe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Zz, kDt, Son, c } from "/$bunfs/root/chunk-etbngzss.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Bt } from "/$bunfs/root/chunk-1ej05ybf.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { zn, la, O_o } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ctr, yKt, E$, Ja, uv } from "/$bunfs/root/chunk-kasbfbhj.js";
import { rr } from "/$bunfs/root/chunk-k3tkc302.js";
import { ee, HJt } from "/$bunfs/root/chunk-499b1h1a.js";
import { qL } from "/$bunfs/root/chunk-0vgmtssp.js";
import { RI } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { kAe } from "/$bunfs/root/chunk-b55d3r46.js";
import { Bme, jme, Wme } from "/$bunfs/root/chunk-kryjzbmh.js";
import { Jb, sGe, $6o } from "/$bunfs/root/chunk-ngnr7vez.js";
import { yWt } from "/$bunfs/root/chunk-5h13e42b.js";
import { Hbn } from "/$bunfs/root/chunk-zqknd0d1.js";
import { Fi } from "/$bunfs/root/chunk-z79q35bb.js";
import { jx } from "/$bunfs/root/chunk-ae0vw9s3.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { randomUUID, createHmac } from "crypto";
const TDs = 30000;
function C_n(e) {
    let { description, agentId, taskRef } = e;
    let r = e.now ?? Date.now;
    let i = r();
    let eventsQueued = 0;
    let p = 0;
    let eventsSuppressed = 0;
    let suppressionNoticesQueued = 0;
    let a;
    let b;
    let h = false;
    function k(w) {
        if (h) {
            return;
        }
        h = true;
        try {
            let A = (M)=>F(E$(), ({ monitorEvent })=>monitorEvent?.kind === M && monitorEvent.watchId === taskRef.id);
            let y = {
                eventsQueued,
                eventsStillQueued: A("output"),
                eventsSuppressed,
                suppressionNoticesQueued,
                noticesStillQueued: A("notice"),
                elapsedMs: r() - i
            };
            if (e.arm !== undefined) {
                g("monitor_watch_closed", {
                    arm: d(e.arm),
                    closed_by: d(w),
                    events_queued: y.eventsQueued,
                    events_still_queued: y.eventsStillQueued,
                    events_suppressed: y.eventsSuppressed,
                    suppression_notices_queued: y.suppressionNoticesQueued,
                    notices_still_queued: y.noticesStillQueued,
                    elapsed_ms: y.elapsedMs,
                    subagent_owned: agentId !== undefined
                });
            }
            e.onClosed?.(y);
        } catch (error) {
            c(error);
        }
    }
    let { capacity, refillMs } = e.bucket ?? {
        capacity: Bme,
        refillMs: jme
    };
    let L = Wme(capacity, refillMs, r);
    function _() {
        if (!L.tryConsume()) {
            p++;
            eventsSuppressed++;
            b = r();
            if (a === undefined) {
                a = r();
            }
            return false;
        }
        if (p > 0) {
            jG(description, te(p), taskRef.id, {
                isHousekeeping: true,
                agentId
            });
            suppressionNoticesQueued++;
            p = 0;
            if (b !== undefined && r() - b > refillMs * 3) {
                a = undefined;
            }
        }
        eventsQueued++;
        return true;
    }
    let onBatch = (w)=>{
        if (h) {
            return;
        }
        if (_()) {
            jG(description, w, taskRef.id, {
                agentId
            });
            return;
        }
        if (a !== undefined && r() - a > TDs) {
            k("too_much_output");
            if (e.killTask()) {
                jG(description, `[Monitor stopped \u2014 too much output (${p} events suppressed over ${Math.round((r() - a) / 1000)}s). Restart with a more selective source.]`, taskRef.id, {
                    isHousekeeping: true,
                    agentId
                });
            }
        }
    };
    let R = ZJn(onBatch, e.schedule);
    function flushAndClose() {
        R.flush(true);
        k("flushed");
    }
    return {
        onData: R.onData,
        onBatch,
        isClosed: ()=>h,
        flush: ()=>R.flush(),
        eventCount: ()=>eventsQueued,
        flushAndClose,
        dropAndClose: ()=>{
            R.drain();
            k("dropped");
        },
        reportExit: async (w, A)=>{
            let y = h ? undefined : R.drain();
            k("exited");
            let { terminalNotification } = await w.settled;
            let x = y !== undefined && _();
            if (terminalNotification !== undefined) {
                let U = [
                    x ? y : undefined,
                    A
                ].filter((J)=>J !== undefined).join(`
`);
                JJn(U !== "" ? {
                    ...terminalNotification,
                    body: P(U)
                } : terminalNotification);
            } else if (x) {
                jG(description, y, taskRef.id, {
                    agentId
                });
            }
        }
    };
}
function te(e) {
    return `[${e} events suppressed \u2014 output rate too high. Consider using TaskStop to restart this monitor with a more selective filter.]`;
}
function JJn(e) {
    Ja(yKt(e), {
        turnAttribution: "inherit"
    });
}
const E = 500;
const W = 3000;
const ne = 200;
const B = 1048576;
function P(e, t = false) {
    let n = !t && kAe() ? `
If this event is something the user would act on now, send a ${jx}. Routine or benign output doesn't need one.` : "";
    return `
<${Son}>${Bt(e)}</${Son}>${n}`;
}
function jG(e, t, watchId, o) {
    Ja({
        value: Fi({
            taskId: watchId ? Bt(watchId) : undefined,
            summary: `${kDt}${Bt(e)}"`,
            body: P(t, o?.isHousekeeping)
        }),
        mode: "task-notification",
        skipAttachments: true,
        priority: "next",
        agentId: o?.agentId ?? Xe(),
        ...watchId !== undefined && {
            monitorEvent: {
                watchId,
                kind: o?.isHousekeeping ? "notice" : "output"
            }
        }
    }, {
        turnAttribution: o?.turnAttribution ?? "inherit"
    });
}
function sGr({ taskId, toolUseId, description, ownerAgentId, stopperAgentId }) {
    let s = `Task "${description}" was stopped by ${yWt(stopperAgentId)}`;
    Ja({
        value: Fi({
            taskId: Bt(taskId),
            toolUseId: toolUseId ? Bt(toolUseId) : undefined,
            status: "stopped",
            summary: Bt(s)
        }),
        mode: "task-notification",
        skipAttachments: true,
        priority: "next",
        agentId: So(ownerAgentId),
        taskId
    });
}
function QJn({ taskId, toolUseId, description, note }) {
    Ja({
        value: Fi({
            taskId: Bt(taskId),
            toolUseId: toolUseId ? Bt(toolUseId) : undefined,
            status: "killed",
            summary: Bt(note === undefined ? `Task "${description}" was stopped by the user` : `Task "${description}" was stopped by the user. ${note}`)
        }),
        mode: "task-notification",
        skipAttachments: true,
        priority: "next",
        passive: true,
        agentId: Xe(),
        taskId
    });
}
function ZJn(e, t = (n)=>{
    let o = setTimeout(n, ne);
    return ()=>clearTimeout(o);
}) {
    let n = "";
    let o = [];
    let r = null;
    function i(S) {
        if (r) {
            r();
            r = null;
        }
        if (S && n.trim() && !Ctr(n.trim())) {
            let a = n.trim();
            if (a.length > E) {
                a = `${a.slice(0, E)}...(truncated)`;
            }
            o.push(a);
            n = "";
        }
        if (o.length === 0) {
            return;
        }
        let l = o.join(`
`);
        if (l.length > W) {
            l = l.slice(0, W) + `
...(truncated)`;
        }
        o = [];
        return l;
    }
    function flush(S) {
        let l = i(S === true);
        if (l !== undefined) {
            e(l);
        }
    }
    function onData(S) {
        n += S;
        if (n.length > B) {
            n = n.slice(-B);
        }
        let l;
        while((l = n.indexOf(`
`)) !== -1){
            let a = n.slice(0, l).trim();
            n = n.slice(l + 1);
            if (Ctr(a)) {
                continue;
            }
            if (a) {
                if (a.length > E) {
                    a = `${a.slice(0, E)}...(truncated)`;
                }
                o.push(a);
            }
        }
        if (o.length > 0 && !r) {
            r = t(flush);
        }
    }
    return {
        onData,
        flush,
        drain: ()=>i(true)
    };
}
function Fme(e) {
    let { wakes } = ee().wakes;
    let n = wakes.get(e);
    if (!n) {
        n = {
            coalesceTimer: null,
            rescanWanted: false,
            lastScanScheduledAt: 0,
            rescanArgs: null,
            newestKickAt: 0,
            kickSettled: true,
            kickCount: 0,
            pendingConfirm: null,
            pendingSeed: null,
            lastWakeArgs: null,
            inFlightScan: null,
            idleRescanCancel: null,
            idleRescanUnmuted: false,
            idlePassOwed: null,
            cancelGeneration: 0,
            readRetryTimer: null,
            readRetryAttempts: 0
        };
        wakes.set(e, n);
    }
    return n;
}
function Qie(e) {
    for (let [t, n] of ee().wakes.wakes){
        if (e !== undefined && t !== e) {
            continue;
        }
        if (n.coalesceTimer) {
            clearTimeout(n.coalesceTimer);
            n.coalesceTimer = null;
        }
        n.rescanWanted = false;
        n.pendingConfirm = null;
        n.pendingSeed = null;
        n.newestKickAt = 0;
        n.kickSettled = true;
        n.lastScanScheduledAt = 0;
        n.rescanArgs = null;
        n.idleRescanCancel?.();
        n.idleRescanCancel = null;
        n.idleRescanUnmuted = false;
        n.idlePassOwed = null;
        if (n.readRetryTimer) {
            clearTimeout(n.readRetryTimer);
            n.readRetryTimer = null;
        }
        n.readRetryAttempts = 0;
        n.cancelGeneration++;
    }
}
function e_t() {
    ee().wakes.scanGeneration++;
}
function b_n(e) {
    let { slugEpochs } = ee().wakes;
    slugEpochs.set(e, (slugEpochs.get(e) ?? 0) + 1);
}
function oe(e) {
    return ee().wakes.slugEpochs.get(e) ?? 0;
}
function Oj(e) {
    return ee().wakes.scanGeneration + oe(e);
}
function hK(e) {
    return ee().wakes.stopGenerations.get(e) ?? 0;
}
function N(e) {
    let { stopGenerations } = ee().wakes;
    stopGenerations.set(e, (stopGenerations.get(e) ?? 0) + 1);
}
function S_n(e, t) {
    let { latchChangedAt } = ee().wakes;
    if (t === undefined) {
        latchChangedAt.set(e, Date.now());
    } else if (Number.isFinite(t)) {
        latchChangedAt.set(e, Math.min(t, Date.now()));
    } else {
        latchChangedAt.delete(e);
    }
}
const v = S_n;
function Jzr(e) {
    return ee().wakes.latchChangedAt.get(e);
}
function w_n(e) {
    let { wakes } = ee();
    v(e);
    wakes.stoppedSlugs.add(e);
    wakes.sweptSlugs.delete(e);
    wakes.orphanedSweptSlugs.delete(e);
    N(e);
    wakes.pendingResumeDisclosure.delete(e);
}
function v_n(e) {
    let { wakes } = ee();
    if (wakes.stoppedSlugs.has(e)) {
        v(e);
    }
    wakes.stoppedSlugs.delete(e);
    wakes.sweptSlugs.delete(e);
    wakes.orphanedSweptSlugs.delete(e);
}
function Uh(e) {
    return ee().wakes.stoppedSlugs.has(e);
}
function Bh(e) {
    let t = ee();
    return t.wakes.stoppedSlugs.has(e) || t.durable.stopLatches.isStopped(e);
}
function y7e(e) {
    let { wakes } = ee();
    if (!wakes.stoppedSlugs.has(e)) {
        v(e);
        wakes.stoppedSlugs.add(e);
        wakes.sweptSlugs.add(e);
        N(e);
    } else {
        let n = wakes.yieldedSlugs.get(e);
        if (n !== undefined) {
            n.wasPaused = true;
            N(e);
        }
    }
    wakes.humanTurnAtScanGeneration = null;
    wakes.liftedAtScanGeneration.delete(e);
    wakes.orphanedSweptSlugs.delete(e);
    wakes.pendingResumeDisclosure.delete(e);
}
function Ey(e) {
    return ee().wakes.sweptSlugs.has(e);
}
function Rqo() {
    return ee().wakes.sweptSlugs;
}
function xqo() {
    let { wakes } = ee();
    for (let t of wakes.sweptSlugs){
        wakes.orphanedSweptSlugs.add(t);
    }
}
function Qzr(e, t) {
    let { wakes } = ee();
    let o = wakes.yieldedSlugs.get(e);
    if (o !== undefined) {
        o.msgIds.add(t);
        return;
    }
    let wasPaused = wakes.sweptSlugs.has(e) && !wakes.orphanedSweptSlugs.has(e);
    let i = {
        msgIds: new Set([
            t
        ]),
        wasPaused,
        stopGeneration: -1,
        scanGeneration: wakes.scanGeneration,
        announced: false,
        stoppedElsewhere: false,
        latchClockBefore: wakes.latchChangedAt.get(e)
    };
    wakes.yieldedSlugs.set(e, i);
    let wakes_humanTurnAtScanGeneration = wakes.humanTurnAtScanGeneration;
    y7e(e);
    wakes.humanTurnAtScanGeneration = wakes_humanTurnAtScanGeneration;
    v(e, i.latchClockBefore ?? Number.NaN);
    i.stopGeneration = hK(e);
}
function Pqo(e) {
    let t = ee().wakes.yieldedSlugs.get(e);
    if (t !== undefined) {
        t.announced = true;
    }
}
function Iqo(e) {
    return ee().wakes.yieldedSlugs.get(e)?.announced === true;
}
function Oqo(e, t) {
    let { wakes } = ee();
    let o = wakes.yieldedSlugs.get(e);
    if (o === undefined || !o.msgIds.delete(t) || o.msgIds.size > 0) {
        return false;
    }
    wakes.yieldedSlugs.delete(e);
    if (!o.wasPaused && hK(e) === o.stopGeneration && wakes.scanGeneration === o.scanGeneration) {
        v_n(e);
        v(e, o.latchClockBefore ?? Number.NaN);
    } else {
        v(e);
    }
    return true;
}
function Mqo(e) {
    ee().wakes.yieldedSlugs.delete(e);
}
function Hqo(e, t) {
    let n = ee().wakes.yieldedSlugs.get(e);
    if (n === undefined || !n.msgIds.has(t)) {
        return false;
    }
    n.stoppedElsewhere = true;
    w_n(e);
    return true;
}
function Dqo(e) {
    return ee().wakes.yieldedSlugs.get(e)?.stoppedElsewhere === true;
}
function e$(e) {
    return ee().wakes.yieldedSlugs.has(e);
}
function Zzr(e) {
    let { wakes } = ee();
    let n = wakes.yieldedSlugs.get(e);
    return n !== undefined && !n.wasPaused && hK(e) === n.stopGeneration && wakes.scanGeneration === n.scanGeneration;
}
function wEe(e) {
    let { wakes } = ee();
    return wakes.orphanedSweptSlugs.has(e) || wakes.yieldedSlugs.has(e);
}
function E_n(e, t = 1) {
    if (t === 1) {
        return `Auto-replied to comment thread on Artifact: ${e}`;
    }
    return `Auto-replied to ${t} comment threads on Artifact: ${e}`;
}
function k_n(e, t = 1) {
    if (t === 1) {
        return `Auto-edited Artifact: ${e} in response to a comment thread`;
    }
    return `Auto-edited Artifact: ${e} in response to ${t} comment threads`;
}
function _7e(e) {
    return `Auto-edit on Artifact: ${e} needs review`;
}
function Lqo(e) {
    return `Auto-replies on Artifact: ${e} are paused`;
}
function Nqo(e) {
    return `Auto-replies on Artifact: ${e} were re-enabled by this publish`;
}
function KJn(e) {
    return `Auto-replies on Artifact: ${e} were resumed`;
}
function Q(artifactName, t = 1, n = false) {
    if (t === 1 && !n) {
        return `Artifact changed: ${artifactName}`;
    }
    return `Artifact changed ${t}${n ? "+" : ""} times: ${artifactName}`;
}
function T_n(e) {
    return `Comments are waiting on Artifact: ${e}`;
}
function $qo(e) {
    return `Claude needs your permission to reply to comments on ${e}`;
}
function Fqo(e) {
    return `Reply on ${e} not posted \u2014 Claude has your note`;
}
function Uqo(e) {
    return `Auto-edited Artifact: ${e} \u2014 review the change`;
}
function YJn(e) {
    let t = `${e.count} comment ${e.count === 1 ? "thread" : "threads"}`;
    return `Before the stop, ${e.family === "auto-edited" ? `Artifact: ${e.artifactName} had already been auto-edited in response to ${t}` : `automatic replies had already been posted on ${t} of Artifact: ${e.artifactName}`} (the pending notice was discarded with the stop \u2014 the artifact's thread and version history carry the record).`;
}
function Bqo(e, t) {
    return `Stopped watching Artifact: ${e} (${t})`;
}
function jqo(e, t) {
    return `Not watching Artifact: ${e} (${t})`;
}
const ie = 15000;
const se = 60000;
const G = 20;
function ae(family, artifactName, count, o) {
    switch(family){
        case "auto-replied":
            return E_n(artifactName, count);
        case "auto-edited":
            return k_n(artifactName, count);
        default:
            return Q(artifactName, count, o);
    }
}
function ue(e) {
    let noticeCoalesce = ee().noticeCoalesce;
    let n = noticeCoalesce.get(e);
    if (n === undefined) {
        return;
    }
    noticeCoalesce.delete(e);
    if (n.timer !== undefined) {
        clearTimeout(n.timer);
    }
    let o = ae(n.family, n.artifactName, n.count, n.suppressedPrior > 0);
    let r = n.droppedDetails > 0 ? `

(${n.droppedDetails} earlier ${n.droppedDetails === 1 ? "notice" : "notices"} in this burst omitted \u2014 newest ${G} kept.)` : "";
    n.queue.enqueuePendingNotification({
        uuid: n.family === "artifact-changed" ? randomUUID() : Hbn(undefined, n.ownGestureEpoch === ee().accountEpoch ? n.slug : undefined),
        value: Fi({
            taskType: n.family === "artifact-changed" ? "artifact-changed" : "artifact-auto-react",
            summary: Bt(o),
            body: `
${Bt(n.details.join(`

`) + r)}`
        }),
        mode: "task-notification",
        origin: {
            kind: "task-notification",
            source: n.family === "artifact-changed" ? "artifact-changed" : "artifact-auto-react",
            slug: n.slug,
            displayName: n.artifactName,
            coalesced: {
                family: n.family,
                count: n.count
            }
        },
        agentId: Xe()
    });
}
function Wqo(e) {
    let { queue, slug, family, artifactName, detail, mergeDetails } = e;
    let firstAt = (e.now ?? Date.now)();
    let l = e.settle?.settleMs ?? ie;
    let a = e.settle?.maxSettleMs ?? se;
    let noticeCoalesce = ee().noticeCoalesce;
    let h = `${family}
${slug}`;
    let accountEpoch = ee().accountEpoch;
    let u = noticeCoalesce.get(h);
    if (u === undefined) {
        u = {
            slug,
            family,
            artifactName,
            mergeDetails,
            count: 0,
            threadIds: new Set,
            firstAt,
            details: [],
            droppedDetails: 0,
            suppressedPrior: 0,
            ownGestureEpoch: e.ownGesture ? accountEpoch : undefined,
            queue,
            timer: undefined
        };
        noticeCoalesce.set(h, u);
    } else if (!e.ownGesture || u.ownGestureEpoch !== accountEpoch) {
        u.ownGestureEpoch = undefined;
    }
    u.artifactName = artifactName;
    u.queue = queue;
    if (e.threadId !== undefined) {
        u.threadIds.add(e.threadId);
    }
    u.count = u.threadIds.size > 0 ? u.threadIds.size : u.count + 1;
    if (u.mergeDetails === "latest") {
        u.details = [
            detail
        ];
    } else {
        u.details.push(detail);
        if (u.details.length > G) {
            u.details.shift();
            u.droppedDetails++;
        }
    }
    if (u.timer !== undefined) {
        clearTimeout(u.timer);
    }
    let T = u.firstAt + a;
    let L = Math.max(0, Math.min(l, T - firstAt));
    let _ = setTimeout(ue, L, h);
    _.unref?.();
    u.timer = _;
}
function D(e) {
    let noticeCoalesce = ee().noticeCoalesce;
    let n = [];
    for (let [o, r] of noticeCoalesce){
        if (e !== undefined && r.slug !== e) {
            continue;
        }
        if (r.family === "artifact-changed") {
            continue;
        }
        if (r.timer !== undefined) {
            clearTimeout(r.timer);
        }
        noticeCoalesce.delete(o);
        n.push({
            slug: r.slug,
            family: r.family,
            artifactName: r.artifactName,
            count: r.count
        });
    }
    return n;
}
function q(e) {
    for (let t of ee().noticeCoalesce.values()){
        if (t.slug === e && t.family !== "artifact-changed") {
            return true;
        }
    }
    return false;
}
function eGr(e) {
    let { autoReact, live } = ee();
    let o = live.supervisors.get(e);
    return autoReact.userDisarmed || Bh(e) || autoReact.enabledMemo === false || (autoReact.artifacts.get(e)?.lastProbeDeniedBy ?? null) !== null || o !== undefined && !o.stopped && o.armedVia === "mcp_write";
}
function j(e, t, n) {
    t(n);
    if (!e.summonArmOkReported) {
        e.summonArmOkReported = true;
        g("artifact_summon_arm_emit");
    }
}
function de(e, t, n) {
    let o = e.activitySenders.get(t);
    if (o === undefined) {
        return;
    }
    let r = e.summonDeclared.get(t);
    if (n && r !== true) {
        e.summonDeclared.set(t, true);
        j(e, o, "arm:0");
    } else if (!n && r === true) {
        e.summonDeclared.set(t, false);
        j(e, o, "arm");
    }
}
function BG(e, t) {
    de(e, t, eGr(t));
}
function tGr(e) {
    for (let t of e.activitySenders.keys()){
        BG(e, t);
    }
}
function zqo(e, t) {
    e.summonDeclared.delete(t);
    BG(e, t);
}
function Gqo(e, t) {
    e.summonDeclared.delete(t);
}
const XJn = 3600000;
const Vqo = "4001";
const t_t = "4503";
const n_t = "4403";
const A_n = 900000;
const qqo = 300000;
const Kqo = 3;
function Yqo({ transport, token, ver, accountEpoch, expUnixSeconds, receivedAtMs }) {
    return {
        transport,
        token,
        expMs: H(transport, expUnixSeconds, receivedAtMs),
        ver,
        accountEpoch,
        opened: false,
        failedDials: 0,
        probed: false
    };
}
function Xqo(e, t) {
    e.token = t.token;
    e.expMs = H(e.transport, t.expUnixSeconds, t.receivedAtMs);
    e.probed = false;
    e.failedDials = 0;
}
function H(transport, expUnixSeconds, receivedAtMs) {
    let o = transport === "sync" ? 900000 : 3600000;
    let r = transport === "sync" ? 300000 : 1800000;
    let i = expUnixSeconds === undefined ? o : expUnixSeconds * 1000 - receivedAtMs;
    return receivedAtMs + Math.min(o, Math.max(r, i));
}
function nGr(e, t) {
    if (t.expired || t.refused) {
        return false;
    }
    if (t.healthy) {
        e.failedDials = 0;
        return true;
    }
    e.failedDials++;
    return e.failedDials < 3;
}
const ce = 60000;
const le = 60000;
function rGr(e, t, n, o = Date.now()) {
    let r = e.transport === "sync" ? le : t.handshakeDeadlineMs + t.minUptimeMs + ce;
    return e.accountEpoch === n && e.expMs - o >= r;
}
function Jqo(e) {
    let { timing, consecutiveFailures, leaseMode, spread, stalled } = e;
    if (stalled) {
        return me(timing, e.longStall === true ? "long" : "short");
    }
    if (leaseMode && spread) {
        return Math.round(timing.spreadMinMs + Math.random() * (timing.spreadMaxMs - timing.spreadMinMs));
    }
    let s = Math.min(timing.capMs, timing.baseMs * 2 ** Math.min(consecutiveFailures, 5));
    let p = leaseMode ? 0.5 : 0.25;
    return Math.max(0, Math.round(s * (1 - p + Math.random() * 2 * p)));
}
function me(timing, t = "short") {
    let n = t === "long" ? timing.longStallMinMs : timing.stallMinMs;
    let o = t === "long" ? timing.longStallMaxMs : timing.stallMaxMs;
    return Math.round(n + Math.random() * (o - n));
}
function Qqo(e) {
    return Math.round(Math.random() * e.seedDeferMaxMs);
}
const ge = 3600000;
const Se = 64;
function ye(e, slug, storageV5) {
    return createHmac("sha256", O_o(storageV5)).update(e + slug, "utf8").digest("hex").slice(0, 16);
}
const be = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
function ke(e) {
    let t = Number(e.slice(0, 4));
    let n = Number(e.slice(5, 7));
    let o = Number(e.slice(8, 10));
    let r = Number(e.slice(11, 13));
    let i = Number(e.slice(14, 16));
    let s = Number(e.slice(17, 19));
    if (n < 1 || n > 12 || o < 1 || r > 23 || i > 59 || s > 59) {
        return false;
    }
    return new Date(Date.UTC(t, n - 1, o)).getUTCDate() === o;
}
function oGr(e) {
    let t;
    let n = -Infinity;
    for (let o of e){
        if (o == null || !sGe.test(o) || !be.test(o) || !ke(o)) {
            continue;
        }
        let r = Jb(o);
        if (r !== null && r > n) {
            n = r;
            t = o;
        }
    }
    return t;
}
function fWt(e) {
    let { handOffs } = ee().summonStatus;
    let n = randomUUID();
    handOffs.set(n, {
        ...e
    });
    if (handOffs.size > Se) {
        let o = new Set(E$().map((i)=>i.uuid));
        let r;
        for (let i of handOffs.keys()){
            if (i !== n && !o.has(i)) {
                r = i;
                break;
            }
        }
        r ??= handOffs.keys().next().value;
        if (r !== undefined) {
            handOffs.delete(r);
            f("artifact_comments_autoreact", "handoff_evicted");
        }
    }
    return n;
}
function C(e) {
    let { handOffs } = ee().summonStatus;
    for (let n of e){
        if (n.uuid === undefined) {
            continue;
        }
        let o = handOffs.get(n.uuid);
        if (o === undefined) {
            continue;
        }
        handOffs.delete(n.uuid);
        let r = uh(o, {
            status: "declined",
            reason: "auto_reply_off"
        });
        f("artifact_comments_autoreact", r ? "handoff_swept" : "handoff_swept_unreported");
    }
}
function mWt(e) {
    let { handOffs } = ee().summonStatus;
    if (handOffs.size === 0) {
        return;
    }
    let n = new Set(E$().map((o)=>o.uuid));
    for (let [o, r] of handOffs){
        if (r.slug === e && !n.has(o)) {
            handOffs.delete(o);
        }
    }
}
function uh(e, t) {
    let { slug, threadId, gestureAt, suppressed } = e;
    if (suppressed) {
        return false;
    }
    let summonStatus = ee().summonStatus;
    if (summonStatus.routeAbsentSince !== null) {
        if (Date.now() - summonStatus.routeAbsentSince < ge) {
            return false;
        }
        summonStatus.routeAbsentSince = null;
    }
    let sid = summonStatus.sidBySlug.get(slug);
    if (sid === undefined) {
        sid = ye(K(), slug, e.storageV5);
        summonStatus.sidBySlug.set(slug, sid);
    }
    let t_reason = t.reason;
    let seq = Math.max(summonStatus.seqBySid.get(sid) ?? 0, Math.floor(Date.now() / 1000) * 1000);
    if (seq > Number.MAX_SAFE_INTEGER) {
        return false;
    }
    summonStatus.seqBySid.set(sid, seq + 1);
    let a = e.coversReplyId !== undefined && !rr.test(e.coversReplyId);
    let b = {
        status: t.status,
        ...t_reason !== undefined && {
            reason: t_reason
        },
        ...e.coversReplyId !== undefined && !a && {
            covers_reply_id: e.coversReplyId
        },
        ...gestureAt !== undefined && {
            gesture_at: gestureAt
        },
        sid,
        seq
    };
    $6o(slug, threadId, b).then((h)=>{
        switch(h.kind){
            case "accepted":
                if (a) {
                    f("artifact_summon_status_emit", "covers_id_rejected");
                } else {
                    g("artifact_summon_status_emit");
                }
                return;
            case "route_absent":
                summonStatus.routeAbsentSince = Date.now();
                f("artifact_summon_status_emit", "route_absent");
                return;
            case "skipped":
                if (h.reason === "no-auth") {
                    f("artifact_summon_status_emit", "no_auth");
                }
                return;
            case "unsent":
                f("artifact_summon_status_emit", "relay_unavailable", {
                    status: h.status
                });
                return;
            case "failed":
                m("artifact_summon_status_emit", h.reason, {
                    ...h.status !== undefined && {
                        status: h.status
                    }
                });
                return;
        }
    }, ()=>{
        m("artifact_summon_status_emit", "request_error");
    });
    return true;
}
function eQn(e, t, n) {
    let o;
    let toolUseId;
    let agentId;
    t.update(e, (s)=>{
        if (s.status !== "running") {
            return s;
        }
        o = s.description;
        toolUseId = s.toolUseId;
        agentId = s.agentId;
        if (s.timeoutId !== undefined) {
            clearTimeout(s.timeoutId);
        }
        return {
            ...s,
            status: n?.endedAs?.status ?? "killed",
            endTime: Date.now(),
            timeoutId: undefined,
            notified: true,
            terminal: {
                summary: n?.endedAs?.summary ?? s.description
            }
        };
    });
    n?.onKilled?.();
    RI(agentId, `monitor:${e}`, t);
    if (o !== undefined) {
        if (!n?.quiet) {
            jG(o, "[Monitor stopped]", e, {
                isHousekeeping: true,
                agentId
            });
        }
        la(e, n?.endedAs?.status ?? "stopped", {
            toolUseId,
            summary: n?.endedAs?.summary ?? o
        });
    }
}
function Y(e, t, n, o) {
    for (let [r, i] of Object.entries(t.all())){
        if (n(i) && i.agentId === e && i.status === "running") {
            o(r, t);
        }
    }
}
const Zqo = [
    "publish",
    "attach",
    "watch",
    "resume",
    "session_resume",
    "mcp_write"
];
function t$(e) {
    return typeof e === "object" && e !== null && "type" in e && e.type === "monitor_ws";
}
function eKo(e, t) {
    zn().monitorSockets.set(e, t);
}
function tQn(e, t) {
    return zn().monitorSockets.get(e) === t;
}
function nQn(e, t, n) {
    return t$(e) && e.status === "running" && e.autoReactArmed === true && t() && (n?.includeStopLatched === true || !(e.autoReactSlug !== undefined && Bh(e.autoReactSlug)));
}
function Zie(e) {
    return nQn(e, ()=>ee().autoReact.enabledMemo === true);
}
function Ae(e) {
    let t = zn().monitorSockets.get(e);
    return t !== undefined && t.readyState <= 1;
}
const V = 300000;
const ve = XJn + V;
function b7e(e, t = Date.now()) {
    let n = e.frameLive === undefined ? undefined : ee().live.supervisors.get(e.frameLive.slug);
    if (!Ae(e.id) || n?.transport !== "sync" && t - e.startTime > ve) {
        return false;
    }
    let o = n?.lease?.expMs;
    return o === undefined || t <= o + V;
}
function r_t(e) {
    let t = zn().monitorSockets.get(e);
    return t !== undefined && t.readyState === 1;
}
const tKo = {
    name: "MonitorWsTask",
    type: "monitor_ws",
    async kill (e, t, n, o) {
        x_(e, t, (o ?? "user") === "system" ? {} : {
            userStop: true,
            taskStop: true,
            modelOrigin: o === "parent"
        });
    }
};
function nKo(e) {
    zn().frameLiveUserStopObserver = e;
}
function rKo(e) {
    zn().autoReactHumanTurnObserver = e;
}
function oKo(e) {
    zn().artifactPresenceStopObserver = e;
}
function sKo(e) {
    zn().artifactRoomStopObserver?.leave(e);
}
function iKo() {
    return HJt()?.conns.size ?? 0;
}
function iGr(e) {
    let t = HJt();
    let n = zn().artifactRoomStopObserver?.disposeAll() ?? 0;
    let o = t?.consentRevoke?.() ?? 0;
    if (n <= 0 && o <= 0 || t?.consentGone?.() === true) {
        return n;
    }
    let r = "The next publish of such an artifact that declares a room will ask the user before joining again; do not republish to rejoin unless the user asks.";
    let i = {
        agentId: Xe(),
        value: Fi({
            taskType: Zz,
            summary: Bt(n > 0 ? `Left the live ${I(n, "room")} of ${n} ${I(n, "artifact")} (the user stopped background activity)` : `Forgot the live-room ${I(o, "approval")} of ${o} ${I(o, "artifact")} (the user stopped background activity)`),
            body: `
<event>${Bt(n > 0 ? `Page events from those artifacts' viewers will no longer arrive and room_send to them will report not_connected; every remembered room-join approval was forgotten too. ${r}` : `No room was open. ${r}`)}</event>`
        }),
        mode: "task-notification",
        skipAttachments: true,
        priority: "later",
        origin: {
            kind: "task-notification",
            source: Zz,
            roomLifecycle: true
        }
    };
    if (e !== undefined) {
        e.enqueuePendingNotification(i);
    } else {
        Ja(i);
    }
    return n;
}
function aKo(e) {
    zn().autoReactDeliberateStopObserver = e;
}
function x_(taskId, taskRegistry, n) {
    let o = taskRegistry.all()[taskId];
    if (t$(o) && o.autoReactArmed === true) {
        Qie(o.autoReactSlug);
        if (o.autoReactSlug !== undefined && n?.connectionLost !== true) {
            b_n(o.autoReactSlug);
        }
        if (n?.userStop === true && o.autoReactSlug !== undefined && (o.status === "running" || !Ey(o.autoReactSlug))) {
            R_n(o.autoReactSlug);
        }
    }
    if (n?.userStop === true && t$(o) && o.frameLive !== undefined) {
        if (zn().frameLiveUserStopObserver?.(o.frameLive.slug, {
            running: o.status === "running",
            taskId,
            taskStop: n?.taskStop === true,
            modelOrigin: n?.modelOrigin === true,
            taskRegistry
        }) === true) {
            if (Ey(o.frameLive.slug)) {
                R_n(o.frameLive.slug);
            } else {
                zn().autoReactDeliberateStopObserver?.(o.frameLive.slug);
            }
        }
    }
    if (n?.userStop === true && t$(o) && o.frameLive === undefined && o.autoReactArmed !== true) {
        zn().liveDocUserStopObserver?.(taskId, {
            modelOrigin: n?.modelOrigin === true,
            running: o.status === "running"
        });
        zn().artifactRoomStopObserver?.leaveByTaskId(taskId);
        zn().artifactPresenceStopObserver?.closeByTaskId(taskId);
    }
    eQn(taskId, taskRegistry, {
        quiet: n?.quiet,
        onKilled () {
            let r = zn().monitorSockets.get(taskId);
            if (r) {
                zn().monitorSockets.delete(taskId);
                r.close();
            }
        }
    });
}
function lKo(e) {
    Qie(e);
    b_n(e);
    R_n(e);
}
function R_n(e) {
    w_n(e);
    zn().autoReactDeliberateStopObserver?.(e);
    BG(ee().live, e);
    let t = D(e);
    zn().artifactRoomStopObserver?.leave(e);
    let n = uv((o)=>o.origin?.kind === "task-notification" && o.origin.slug === e && gWt(o));
    X(n, t);
    C(n);
    if (n.some(Re) || t.length > 0) {
        qL(e);
    }
    yK(0, t);
}
function _e(source) {
    return source === "artifact-auto-react" || source === "artifact-room";
}
function X(e, t) {
    for (let n of e){
        let o = n.origin;
        if (o?.kind === "task-notification" && o.coalesced !== undefined && o.coalesced.family !== "artifact-changed" && o.slug !== undefined && o.displayName !== undefined) {
            t.push({
                slug: o.slug,
                family: o.coalesced.family,
                artifactName: o.displayName,
                count: o.coalesced.count
            });
        }
    }
}
function yK(e, t = [], n) {
    if (e <= 0 && t.length === 0) {
        return;
    }
    let o = I(e, "it", "them");
    let r = I(e, "this artifact", "these artifacts");
    let i = I(e, "the watch is kept", "the watches are kept");
    let s = n?.catchUp === false ? "" : " (comments sent to Claude meanwhile are answered then)";
    let p = n?.catchUp === false ? "" : ", and comments sent to Claude in the meantime are answered then";
    let S = ", or resume_replies if the user asks";
    let l = `publishing without being asked, while handling a notification or a wake-up, leaves ${o} paused`;
    let a = `the user can stop ${o} for good with \u2715 on the watch in the tasks list or the kill-all-agents gesture`;
    let b = n?.nameChordGesture === true ? `this receipt reaches you with a later turn: if that turn is the user's own typed message it has already resumed ${o}${n.catchUp === false ? "" : " (comments sent to Claude meanwhile are being answered now)"}, otherwise the user's next message resumes ${o} (so does a publish of ${r} the user asks for${S}; ${l})${p}; ${a}` : `when the user asks you to publish ${r} again, that publish resumes ${o}${S}, as does the user's next typed message \u2014 each only on hosts that pass typed input through as the user's${p}; ${l}`;
    Ja({
        agentId: Xe(),
        value: Fi({
            taskType: "artifact-auto-react",
            summary: Bt(e > 0 ? `${e} artifact auto-reply ${I(e, "subscription")} paused ${n?.nameChordGesture === true ? "until your next message" : "by the interrupt"}${s}` : "Artifact auto-reply activity stopped"),
            body: `
${Bt(t.map(YJn).concat(e > 0 ? [
                `The user's interrupt paused ${o} and ${i}; ${b}. Do not republish or resume just to re-enable auto-replies unless the user asks.`
            ] : []).join(`

`))}`
        }),
        mode: "task-notification",
        skipAttachments: true,
        ...n?.passive === true && {
            passive: true,
            priority: "next"
        },
        origin: {
            kind: "task-notification",
            source: "artifact-auto-react-stop-disclosure",
            nonDurableStop: true,
            ...t.length > 0 && {
                carriesDiscardRecord: true
            }
        }
    });
}
function Re(e) {
    return e.origin?.kind === "task-notification" && e.origin.source === "artifact-auto-react";
}
function gWt(e) {
    return e.origin?.kind === "task-notification" && _e(e.origin.source);
}
function Ume(e, t) {
    let n = D();
    for (let r of n){
        qL(r.slug);
    }
    if (t?.leaveArtifactRooms === true) {
        iGr(e);
    }
    let o = e.removeByFilter(gWt);
    for (let r of o){
        if (r.origin?.kind === "task-notification" && r.origin.source === "artifact-auto-react" && r.origin.slug !== undefined) {
            qL(r.origin.slug);
        }
    }
    X(o, n);
    C(o);
    return n;
}
function cKo(e = ()=>false) {
    let { pendingNoticeSlugs } = ee().shareStatus;
    if (pendingNoticeSlugs.size === 0) {
        return 0;
    }
    let n = new Set;
    for (let r of E$()){
        let i = r.origin?.kind === "task-notification" ? r.origin.slug : undefined;
        if (i !== undefined && gWt(r)) {
            n.add(i);
        }
    }
    let o = 0;
    for (let r of [
        ...pendingNoticeSlugs.keys()
    ]){
        if (n.has(r) || q(r) || e(r)) {
            continue;
        }
        qL(r);
        o++;
    }
    return o;
}
function hWt() {
    return {
        disclosures: [],
        staleRows: [],
        watchLifecycle: []
    };
}
function x_n(e) {
    C(e);
    let t = hWt();
    for (let n of e){
        if (n.origin?.kind !== "task-notification") {
            continue;
        }
        if (n.origin.source === "artifact-auto-react-stop-disclosure") {
            t.disclosures.push(n);
        } else if (n.origin.source === "artifact-changed") {
            t.staleRows.push(n);
        } else if (n.origin.source === Zz) {
            t.watchLifecycle.push(n);
        }
    }
    return t;
}
function z(e) {
    return e.origin?.kind === "task-notification" && e.origin.source === "artifact-auto-react-stop-disclosure" && e.origin.nonDurableStop === true && e.origin.carriesDiscardRecord !== true;
}
function dKo(e) {
    if (!ee().autoReact.userDisarmed) {
        return;
    }
    e.removeByFilter(z);
}
function P_n(e, t, n) {
    let userDisarmed = ee().autoReact.userDisarmed;
    for (let r of t.disclosures){
        let i = r.origin?.kind === "task-notification" && r.origin.carriesDiscardRecord === true;
        let s = userDisarmed && z(r);
        if (i || n === 0 && !s) {
            e.enqueuePendingNotification(r);
        }
    }
    for (let r of t.staleRows){
        e.enqueuePendingNotification(r);
    }
    for (let r of t.watchLifecycle){
        e.enqueuePendingNotification(r);
    }
}
function uKo() {
    for (let [e, t] of zn().monitorSockets){
        try {
            t.close();
        } catch  {}
        zn().monitorSockets.delete(e);
    }
}
function pKo(e, t) {
    Y(e, t, t$, x_);
}
export { Fme, Qie, e_t, b_n, Oj, hK, S_n, Jzr, w_n, v_n, Uh, Bh, y7e, Ey, Rqo, xqo, Qzr, Pqo, Iqo, Oqo, Mqo, Hqo, Dqo, e$, Zzr, wEe, E_n, k_n, _7e, Lqo, Nqo, KJn, T_n, $qo, Fqo, Uqo, YJn, Bqo, jqo, Wqo, eGr, BG, tGr, zqo, Gqo, XJn, Vqo, t_t, n_t, A_n, qqo, Kqo, Yqo, Xqo, nGr, rGr, Jqo, Qqo, oGr, fWt, mWt, uh, TDs, C_n, JJn, jG, sGr, QJn, ZJn, eQn, Zqo, t$, eKo, tQn, nQn, Zie, b7e, r_t, tKo, nKo, rKo, oKo, sKo, iKo, iGr, aKo, x_, lKo, R_n, yK, gWt, Ume, cKo, hWt, x_n, dKo, P_n, uKo, pKo };
