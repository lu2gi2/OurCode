import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B, Xe, vd } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Bue, eUe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Doe, Rho, Eh, tt, g7, We, $E, Dt, wt, Mn, zoe, fm } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ibe, qi, S$n, K_s, qJt } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Pa } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { Awt, SI, Ckn, Qhe, Zhe, E$, yT, uv, _lr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { qGr } from "/$bunfs/root/chunk-hcz0m741.js";
import { YWt, abn, DQn, cMe, XWt, t4o, lbn } from "/$bunfs/root/chunk-992zeagc.js";
import { randomUUID } from "crypto";
const priority = "later";
const G = "Your claude.ai usage limit has reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.";
const z = "tengu_lantern_wick_resume_by_model";
const V = "Your claude.ai usage is available again before the usage-limit reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.";
const Y = 2;
const I = [
    60000,
    300000
];
const X = 30000;
const J = 90000;
const Z = 1800000;
const ee = 21600000;
function te() {
    return {
        state: {
            phase: "idle"
        },
        consecutiveRearms: 0,
        armedAtMs: 0,
        lastArmedResetsAtSeconds: 0,
        lastObservedMs: null,
        takeoverUuids: new Set,
        queuedBeforeArmUuids: new Set,
        handoffInProgress: false,
        dispatchingTakeoverUuids: new Set,
        pendingContinuationUuid: null,
        activeTurnClaim: null,
        episodeArmOrigin: "dialog",
        sleptThroughReset: false,
        confirmingMainModel: false,
        recheckRequestedWhileConfirming: false,
        armedResetKeys: new Set,
        autoArmDedupeResetKeys: new Set,
        changed: Oe(),
        events: Oe(),
        autoContinueKeyPresence: "unscanned",
        storageV5: undefined,
        unsubscribeSettingsChanges: null,
        unknowableRescanDelayMs: 2000,
        unknowableRescanTimer: undefined,
        revocationRescan: "idle",
        revocationRescanGeneration: 0,
        limitsSubscriptionStarted: false,
        unsubscribeQuotaRejected: null,
        unsubscribeSessionSwitch: null
    };
}
const oe = new q(te);
function u() {
    let host = B().host;
    let t = oe.of(host);
    let o = Ckn.of(host);
    if (!o.provided) {
        o.provide(()=>r(t));
    }
    return t;
}
function S(e, t, o = 0) {
    if (typeof e !== "number" && typeof e !== "string") {
        return t;
    }
    let n = Number(e);
    if (!Number.isFinite(n) || n < 0) {
        return t;
    }
    return Math.min(Math.max(Math.round(n), o), ee);
}
const ne = 60000;
function tbn() {
    return M(u());
}
function M(e) {
    return abn(e.autoContinueKeyPresence);
}
function KKo(e) {
    let t = u();
    if (e === "auto_restore_cancel") {
        return;
    }
    if (!r(t)) {
        return;
    }
    Q(t, "conversation_reset");
}
const ae = 2;
async function A(e, t = ae) {
    try {
        e.autoContinueKeyPresence = await eUe("autoContinueAtUsageLimit", e.storageV5);
    } catch (error) {
        e.autoContinueKeyPresence = "unknowable";
        c(error);
    }
    if (e.autoContinueKeyPresence !== "unknowable") {
        e.revocationRescan = "idle";
        e.revocationRescanGeneration++;
    }
    clearTimeout(e.unknowableRescanTimer);
    if (e.autoContinueKeyPresence === "unknowable" && t > 0) {
        e.unknowableRescanTimer = setTimeout((o, n)=>{
            A(o, n);
        }, e.unknowableRescanDelayMs, e, t - 1);
        e.unknowableRescanTimer.unref?.();
    }
}
function nbn() {
    let e = Bue("autoContinueAtUsageLimit")[0]?.source;
    return e === undefined || e === "userSettings";
}
function C7e(e) {
    return wt() && Mn()?.billingType !== "usage_based" && SI(e) && t4o();
}
function Xme() {
    return u().state;
}
function YKo() {
    let e = u();
    return e.state.phase === "armed" && e.episodeArmOrigin === "auto";
}
function L(e) {
    let t = qi();
    if (t.status === "rejected" && t.resetsAt !== undefined) {
        e.armedResetKeys.add(t.resetsAt);
    }
}
function vze(e) {
    return u().armedResetKeys.has(e);
}
function GG() {
    return u().state.phase === "armed";
}
function r(e) {
    return e.state.phase === "armed" || e.state.phase === "stale" || e.activeTurnClaim !== null || e.dispatchingTakeoverUuids.size > 0 || E$().some((t)=>b(e, t)) || _lr((t)=>b(e, t));
}
function se(e) {
    return Qhe(e) && Zhe(e);
}
function b(e, t) {
    return t.uuid !== undefined && (t.uuid === e.pendingContinuationUuid || e.takeoverUuids.has(t.uuid));
}
function FGr() {
    return r(u());
}
function Eze(e) {
    return k(u(), e);
}
function k(e, t) {
    return t === "armed" || t === "stale" || T(e);
}
function E_t() {
    return T(u());
}
function T({ pendingContinuationUuid }) {
    return pendingContinuationUuid !== null && E$().some((o)=>o.uuid === pendingContinuationUuid);
}
function HQn(e) {
    return e !== undefined && e === u().pendingContinuationUuid;
}
function k_t(e) {
    return u().events.subscribe(e);
}
function UGr(e) {
    return u().changed.subscribe(e);
}
function h(e, t) {
    e.state = t;
    e.changed.emit();
}
function ue() {
    let e = DQn();
    let t = S(e.jitterMinMs, X);
    let o = Math.max(t, S(e.jitterMaxMs, J));
    return Math.round(t + Math.random() * (o - t));
}
function ie(resetsAtSeconds, t, o) {
    let n = resetsAtSeconds * 1000 + ue();
    if (t === null) {
        return n;
    }
    let a = I[t] ?? I.at(-1) ?? 0;
    return Math.max(n, o + a);
}
function BGr(e, t = Date.now(), o = "dialog", n) {
    return E(u(), e, t, o, n);
}
function E(e, t, o, n, a) {
    if (!C7e(t)) {
        return false;
    }
    j(e, a);
    e.consecutiveRearms = 0;
    e.takeoverUuids.clear();
    e.dispatchingTakeoverUuids.clear();
    e.queuedBeforeArmUuids.clear();
    for (let s of E$()){
        if (se(s) || s.mode === "bash" && Zhe(s)) {
            s.uuid ??= randomUUID();
            e.queuedBeforeArmUuids.add(s.uuid);
        }
    }
    e.armedAtMs = o;
    g("quota_auto_resume");
    i("tengu_quota_auto_resume_offer_armed", {
        origin: d(n)
    });
    P(e, t.resetsAt ?? 0, null, o, n);
    e.events.emit("armed");
    return true;
}
function jGr(e, t = Date.now(), o) {
    let n = u();
    if (!C7e(e)) {
        return false;
    }
    if (n.handoffInProgress) {
        return false;
    }
    if (!M(n) || !lbn()) {
        return false;
    }
    if (fm()) {
        return false;
    }
    let a = e.resetsAt ?? 0;
    if (a * 1000 - t > Awt) {
        return false;
    }
    if (he(e.rateLimitType, tt())) {
        return false;
    }
    if (r(n) || n.autoArmDedupeResetKeys.has(a)) {
        return false;
    }
    if (!E(n, e, t, "auto", o)) {
        return false;
    }
    n.events.emit("auto-armed");
    return true;
}
function XKo(e, t, o = Date.now(), n) {
    try {
        let a = e && t === "completed" ? qJt(o) : null;
        if (a === null) {
            return false;
        }
        let s = u();
        if (r(s)) {
            F(s, a, "main_thread");
            return s.state.phase === "armed" && s.state.resetsAtSeconds === a.resetsAt;
        }
        return jGr(a, o, n);
    } catch (error) {
        c(error);
        return false;
    }
}
function P(e, resetsAtSeconds, o, n, a = "dialog") {
    w(e);
    e.episodeArmOrigin = a;
    e.lastArmedResetsAtSeconds = resetsAtSeconds;
    e.autoArmDedupeResetKeys.add(resetsAtSeconds);
    e.armedResetKeys.add(resetsAtSeconds);
    L(e);
    e.activeTurnClaim = null;
    e.sleptThroughReset = false;
    e.lastObservedMs = n;
    let fireAtMs = ie(resetsAtSeconds, o, n);
    i("tengu_quota_auto_resume_armed", {
        resets_in_sec: Math.max(0, Math.round(resetsAtSeconds - n / 1000)),
        rearm: o === null ? 0 : o + 1
    });
    h(e, {
        phase: "armed",
        resetsAtSeconds,
        fireAtMs,
        consecutiveRearms: e.consecutiveRearms
    });
}
function kze() {
    re(u());
}
function ite(e) {
    return (...t)=>{
        let o = e(...t);
        if (o !== false) {
            kze();
        }
        return o;
    };
}
async function re(e) {
    if (e.state.phase !== "armed") {
        return;
    }
    if (e.confirmingMainModel) {
        e.recheckRequestedWhileConfirming = true;
        return;
    }
    e.confirmingMainModel = true;
    try {
        while(true){
            e.recheckRequestedWhileConfirming = false;
            if (g7(Eh()) !== null) {
                return;
            }
            let t = tt();
            let o = e.state;
            let n = await K_s(t, undefined, e.storageV5);
            if (e.state.phase !== "armed" || _(e)) {
                return;
            }
            if (e.recheckRequestedWhileConfirming || tt() !== t || e.state !== o) {
                continue;
            }
            if (n === null || !Re(n)) {
                return;
            }
            de(e);
            return;
        }
    } catch (error) {
        c(error);
    } finally{
        e.confirmingMainModel = false;
    }
}
function de(e) {
    N(e, V);
    i("tengu_quota_auto_resume_fired", {
        rearm: e.consecutiveRearms,
        waited_ms: Math.max(0, Math.round(Date.now() - e.armedAtMs)),
        early: 1
    });
    e.lastObservedMs = null;
    h(e, {
        phase: "idle"
    });
    e.events.emit("fired-now");
}
function ce(e) {
    switch(e){
        case "escape":
        case "ctrl_c":
        case "kill_agents_chord":
            return true;
        case "dialog":
        case "low_priority":
        case "juniper_tide":
        case "cedar_ember":
        case "account_switch":
        case "conversation_reset":
        case "background_handoff":
        case "relaunch":
        case "desktop_handoff":
        case "cloud_handoff":
        case "process_exit":
            return false;
    }
}
function le(e) {
    switch(e){
        case "low_priority":
        case "juniper_tide":
        case "cedar_ember":
        case "account_switch":
        case "conversation_reset":
        case "background_handoff":
        case "relaunch":
        case "desktop_handoff":
        case "cloud_handoff":
        case "process_exit":
            return true;
        case "escape":
        case "ctrl_c":
        case "kill_agents_chord":
        case "dialog":
            return false;
    }
}
function n$(e) {
    Q(u(), e);
}
function Q(e, t) {
    if (r(e)) {
        L(e);
    }
    if (le(t)) {
        e.autoArmDedupeResetKeys.clear();
    }
    let o = k(e, e.state.phase);
    if (y(e) && e.state.phase === "idle") {
        i("tengu_quota_auto_resume_cancelled", {
            reason: d(t)
        });
    }
    v(e, t);
    if (o && ce(t)) {
        e.events.emit("cancelled");
    }
}
const rbn = {
    background_handoff: "Automatic continue cancelled · this session moved to the background, so the task will not resume on its own when the usage limit resets",
    relaunch: "Automatic continue cancelled · Claude Code relaunched during the wait, so the task will not resume on its own when the usage limit resets (send a prompt then to continue)",
    desktop_handoff: "Automatic continue cancelled · this session moved to Claude Desktop, so the task will not resume on its own when the usage limit resets (continue it there)",
    cloud_handoff: "Automatic continue cancelled · sending this session to the cloud, so the task will not resume here on its own when the usage limit resets (continue it in the cloud session)",
    process_exit: "Automatic continue cancelled · Claude Code exited during the wait, so the task will not resume on its own when the usage limit resets (send a prompt after the reset to continue)"
};
function obn(e) {
    let t = u();
    t.handoffInProgress = true;
    if (!r(t)) {
        return false;
    }
    let o = k(t, t.state.phase);
    Q(t, e);
    return o;
}
function lMe() {
    u().handoffInProgress = false;
}
function sbn(e, { dispatching = false } = {}) {
    let o = u();
    if (!r(o)) {
        return;
    }
    K(o);
    o.takeoverUuids.add(e);
    if (dispatching) {
        o.dispatchingTakeoverUuids.add(e);
    }
    o.changed.emit();
}
function w(e, { keepIfDrained = false } = {}) {
    if (e.pendingContinuationUuid === null) {
        return false;
    }
    let e_pendingContinuationUuid = e.pendingContinuationUuid;
    let n = uv((a)=>a.uuid === e_pendingContinuationUuid).length > 0;
    if (n || !keepIfDrained) {
        e.pendingContinuationUuid = null;
        e.changed.emit();
    }
    return n;
}
function me(e) {
    switch(e){
        case "escape":
        case "ctrl_c":
        case "kill_agents_chord":
        case "dialog":
        case "low_priority":
        case "juniper_tide":
        case "cedar_ember":
        case "account_switch":
        case "setting_off":
        case "manual_submit":
        case "conversation_reset":
        case "killswitch":
        case "rearm_cap":
        case "horizon_exceeded":
        case "continuation_dropped":
        case "background_handoff":
        case "relaunch":
        case "desktop_handoff":
        case "cloud_handoff":
        case "process_exit":
            return true;
        case "fired":
        case "stale":
            return false;
    }
}
function v(e, t) {
    if (e.state.phase === "idle") {
        return;
    }
    if (me(t)) {
        i("tengu_quota_auto_resume_cancelled", {
            reason: d(t)
        });
    }
    h(e, {
        phase: "idle"
    });
}
function WGr(e, t) {
    let o = u();
    if (o.state.phase !== "armed" || _(o)) {
        return "idle";
    }
    let n = o.lastObservedMs ?? o.state.fireAtMs;
    o.lastObservedMs = e;
    let a = e - n;
    let s = S(DQn().graceMs, Z, ne);
    if (a > s && e >= o.state.fireAtMs) {
        o.sleptThroughReset = true;
    }
    if (t || e < o.state.fireAtMs) {
        return "pending";
    }
    if (o.sleptThroughReset) {
        o.sleptThroughReset = false;
        f("quota_auto_resume", "stale");
        i("tengu_quota_auto_resume_stale", {
            late_by_ms: Math.round(e - o.state.fireAtMs)
        });
        h(o, {
            phase: "stale"
        });
        o.events.emit("stale");
        return "stale";
    }
    N(o);
    i("tengu_quota_auto_resume_fired", {
        rearm: o.state.consecutiveRearms,
        waited_ms: Math.max(0, Math.round(e - o.armedAtMs))
    });
    v(o, "fired");
    return "fired";
}
function W() {
    let e = qGr(z, tt());
    if (e !== undefined && e.trim() !== "") {
        return e;
    }
    return G;
}
function N(e, value = W()) {
    w(e);
    let uuid = randomUUID();
    e.pendingContinuationUuid = uuid;
    e.activeTurnClaim = null;
    e.changed.emit();
    yT({
        agentId: Xe(),
        mode: "prompt",
        priority,
        value,
        uuid,
        origin: {
            kind: "auto-continuation"
        },
        isMeta: true,
        skipSlashCommands: true,
        workload: zoe
    });
}
function zGr() {
    if (GGr()) {
        return W();
    }
    return null;
}
function GGr() {
    let e = u();
    return e.state.phase === "stale" && !_(e);
}
function JKo(e) {
    let t = u();
    let t_pendingContinuationUuid = t.pendingContinuationUuid;
    if (t_pendingContinuationUuid === null || !e.some((n)=>n.uuid === t_pendingContinuationUuid)) {
        return e;
    }
    if (!_(t)) {
        return e;
    }
    return e.filter((n)=>n.uuid !== t_pendingContinuationUuid);
}
function fe(e) {
    if (e.episodeArmOrigin !== "auto" || M(e)) {
        e.revocationRescan = "idle";
        return false;
    }
    if (YWt() === undefined && e.autoContinueKeyPresence === "unknowable") {
        if (e.revocationRescan === "idle") {
            e.revocationRescan = "pending";
            let t = ++e.revocationRescanGeneration;
            A(e).finally(()=>{
                if (e.revocationRescan === "pending" && t === e.revocationRescanGeneration) {
                    e.revocationRescan = "done";
                }
            });
            return false;
        }
        if (e.revocationRescan === "pending") {
            return false;
        }
    }
    e.revocationRescan = "idle";
    return true;
}
function _(e) {
    if (!cMe()) {
        C(e, "killswitch");
        return true;
    }
    if (fe(e)) {
        C(e, "setting_off");
        return true;
    }
    return false;
}
function K(e) {
    w(e, {
        keepIfDrained: true
    });
    if (e.state.phase === "stale") {
        i("tengu_quota_auto_resume_stale_resumed", {});
        e.lastObservedMs = null;
        v(e, "stale");
    } else if (e.state.phase === "armed") {
        e.lastObservedMs = null;
        v(e, "manual_submit");
    }
}
function C(e, t) {
    i("tengu_quota_auto_resume_cancelled", {
        reason: d(t)
    });
    y(e);
    h(e, {
        phase: "idle"
    });
    e.events.emit(t === "horizon_exceeded" ? "horizon-exceeded" : t === "rearm_cap" ? "cap-exhausted" : "disabled");
}
function pe(e, t) {
    return e.episodeArmOrigin === "auto" && t * 1000 - Date.now() > Awt;
}
function QKo(e) {
    let t = u();
    for (let p of e.turnUuids){
        t.dispatchingTakeoverUuids.delete(p);
    }
    let o = t.pendingContinuationUuid !== null && e.turnUuids.includes(t.pendingContinuationUuid);
    let n = e.turnUuids.some((p)=>t.takeoverUuids.has(p));
    let a = k(t, t.state.phase) || o;
    let s = e.isHumanTakeover && !n && e.humanCommandUuids.length > 0 && e.humanCommandUuids.every((p)=>p !== undefined && t.queuedBeforeArmUuids.has(p));
    let kind = null;
    if (s && !o) {
        return null;
    }
    if (s) {
        kind = "continuation";
    } else if (e.isHumanTakeover && (n || a)) {
        kind = "takeover";
        K(t);
    } else if (o) {
        kind = "continuation";
    }
    if (kind === null) {
        return null;
    }
    if (t.activeTurnClaim !== null) {
        c(Error("quota auto-resume: a turn claimed the episode while another claim was outstanding"));
    }
    let x = {
        kind,
        queried: e.willQuery
    };
    t.activeTurnClaim = x;
    t.changed.emit();
    return x;
}
function ZKo(e, t) {
    let o = u();
    for (let s of t){
        o.dispatchingTakeoverUuids.delete(s);
    }
    if (e !== null) {
        if (e !== o.activeTurnClaim) {
            return;
        }
        o.activeTurnClaim = null;
        o.changed.emit();
        if (o.state.phase !== "idle") {
            return;
        }
        if (E$().some((s)=>b(o, s))) {
            return;
        }
        y(o);
        if (e.kind === "continuation" && !e.queried) {
            O(o);
        }
        return;
    }
    let n = o.pendingContinuationUuid !== null && t.includes(o.pendingContinuationUuid);
    if ((n || t.some((s)=>o.takeoverUuids.has(s))) && o.state.phase === "idle" && o.activeTurnClaim === null && !E$().some((s)=>b(o, s))) {
        y(o);
        if (n) {
            O(o);
        }
    }
}
function O(e) {
    m("quota_auto_resume", "continuation_dropped");
    i("tengu_quota_auto_resume_cancelled", {
        reason: d("continuation_dropped")
    });
    e.events.emit("continuation-dropped");
}
function y(e) {
    e.consecutiveRearms = 0;
    e.lastArmedResetsAtSeconds = 0;
    e.episodeArmOrigin = "dialog";
    e.revocationRescan = "idle";
    e.revocationRescanGeneration++;
    e.takeoverUuids.clear();
    e.dispatchingTakeoverUuids.clear();
    e.queuedBeforeArmUuids.clear();
    e.lastObservedMs = null;
    e.activeTurnClaim = null;
    let t = w(e);
    e.changed.emit();
    return t;
}
function Re(e) {
    return e.status !== "rejected" || e.isUsingOverage === true || e.overageInUse === true;
}
function F(e, t, o) {
    if (!SI(t) || !XWt()) {
        return;
    }
    let n = t.resetsAt ?? 0;
    if (r(e) && R(t.rateLimitType, tt())) {
        e.autoArmDedupeResetKeys.add(n);
    }
    if (e.state.phase === "armed") {
        if (n * 1000 > e.state.fireAtMs && R(t.rateLimitType, tt())) {
            U(e, n, null);
        }
        return;
    }
    if (T(e)) {
        return;
    }
    if (e.state.phase === "stale") {
        return;
    }
    let e_activeTurnClaim = e.activeTurnClaim;
    if (e_activeTurnClaim === null) {
        return;
    }
    if (o !== "main_thread") {
        return;
    }
    if (e_activeTurnClaim.kind === "takeover") {
        e.consecutiveRearms = 0;
        if (U(e, R(t.rateLimitType, tt()) ? n : e.lastArmedResetsAtSeconds, null) && e.episodeArmOrigin === "auto") {
            e.events.emit("taken-over");
        }
        return;
    }
    if (e.consecutiveRearms >= Y) {
        m("quota_auto_resume", "rearm_cap");
        e.autoArmDedupeResetKeys.add(n);
        C(e, "rearm_cap");
        return;
    }
    let e_consecutiveRearms = e.consecutiveRearms;
    e.consecutiveRearms++;
    U(e, n, e_consecutiveRearms);
}
function U(e, t, o) {
    if (_(e)) {
        return false;
    }
    if (pe(e, t)) {
        C(e, "horizon_exceeded");
        return false;
    }
    P(e, t, o, Date.now(), e.episodeArmOrigin);
    e.events.emit("rearmed");
    return true;
}
function he(rateLimitType, t) {
    if (rateLimitType !== "seven_day_opus" && rateLimitType !== "seven_day_sonnet") {
        return false;
    }
    if (R(rateLimitType, t)) {
        return false;
    }
    let o = g7(Eh());
    if (rateLimitType === "seven_day_opus" && o === "opus") {
        return false;
    }
    if (rateLimitType === "seven_day_sonnet" && o === "sonnet") {
        return false;
    }
    return true;
}
function R(rateLimitType, t) {
    switch(rateLimitType){
        case "five_hour":
        case "seven_day":
        case "overage":
            return true;
        case "seven_day_opus":
            return Doe(We(t));
        case "seven_day_sonnet":
            return Rho(We(t));
        case "seven_day_overage_included":
            {
                let o = $E(Dt(t));
                if (o === null) {
                    return false;
                }
                let n = o.toLowerCase();
                return ibe().some((a)=>a.toLowerCase() === n);
            }
        case undefined:
            return false;
    }
    return false;
}
function ibn(e, t) {
    return R(e.rateLimitType, t) || We(e.model, {
        identity: true
    }) === We(t, {
        identity: true
    });
}
function VGr(e) {
    j(u(), e);
}
function j(e, t) {
    if (e.limitsSubscriptionStarted) {
        return;
    }
    e.limitsSubscriptionStarted = true;
    e.storageV5 = t;
    e.unsubscribeQuotaRejected = S$n((o, n)=>F(e, o, n));
    A(e);
    e.unsubscribeSettingsChanges = Pa.subscribe(()=>{
        A(e);
    });
    e.unsubscribeSessionSwitch = vd((o, n)=>{
        if (R7e(n)) {
            Q(e, "conversation_reset");
            e.handoffInProgress = false;
        }
    });
}
function R7e(e) {
    switch(e){
        case "clear":
        case "resume":
        case "remote_attach":
            return true;
        case "fork":
        case "cd":
        case "spare_claim":
        case "hydrate":
        case "startup_custom_id":
            return false;
    }
}
export { tbn, KKo, nbn, C7e, Xme, YKo, vze, GG, FGr, Eze, E_t, HQn, k_t, UGr, BGr, jGr, XKo, kze, ite, n$, rbn, obn, lMe, sbn, WGr, zGr, GGr, JKo, QKo, ZKo, ibn, VGr, R7e };
