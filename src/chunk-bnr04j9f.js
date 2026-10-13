import { lU, Km, Swe, GPo, ePr, xsn, Ype, Lpt, tPr, Psn, Isn, a0t, N2n, m6, l0t } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { rMn } from "/$bunfs/root/chunk-tzz3htys.js";
import { Gve } from "/$bunfs/root/chunk-q0sv8380.js";
const A = import.meta.require("/$bunfs/root/chunk-qmc4dvqj.js");
const _ = 60;
const uWe = 3600;
const P = 1200;
const x = 1;
function L(e, o) {
    i("tengu_loop_ended", {
        reason: d(e),
        ...o
    });
    N2n(true);
    a0t();
}
function Zjo() {
    let a_CLAUDE_CODE_LOOP_KEEPALIVE = a.CLAUDE_CODE_LOOP_KEEPALIVE;
    if (a_CLAUDE_CODE_LOOP_KEEPALIVE !== undefined) {
        return a_CLAUDE_CODE_LOOP_KEEPALIVE;
    }
    return k("tengu_kairos_loop_keepalive", true);
}
function eWo(e, o, reason, toolUseId) {
    return C(e, o, {
        viaKeepalive: false,
        reason,
        toolUseId
    });
}
function tWo(e) {
    if (tPr() >= x) {
        t("[loop] keepalive budget exhausted (model declined to reschedule twice) — ending loop");
        L("model_stopped", {
            via_keepalive: true
        });
        return null;
    }
    return C(P, e, {
        viaKeepalive: true
    });
}
function mBr() {
    N2n(false);
    a0t();
}
function nWo() {
    let e = Isn();
    let o = Km().filter((r)=>r.kind === "loop");
    let n = Ype();
    Lpt(null);
    Psn(0);
    m6(o.map((r)=>r.id));
    if (o.length === 0) {
        M();
    }
    for (let r of o){
        xsn(r.prompt);
    }
    if (n !== null) {
        xsn(n);
    }
    if (e) {
        t("[loop] ScheduleWakeup({stop:true}) after loop already ended — cleanup only, terminal event suppressed");
        return o.length;
    }
    t(`[loop] model called ScheduleWakeup({stop:true}) \u2014 ending loop (${o.length} pending wakeup(s) cancelled${n !== null ? ", tick in flight" : ""})`);
    L("model_stopped", {
        via_keepalive: false
    });
    g("loop_schedule_wakeup");
    return o.length;
}
function C(e, prompt, { viaKeepalive, reason, toolUseId }) {
    if (!viaKeepalive) {
        Psn(0);
    }
    let superseded_count = y();
    let u = Date.now();
    let c = GPo(prompt);
    let v = c !== undefined && u > c.lastScheduledFor + uWe * 1000;
    let h = c === undefined || v ? u : c.startedAt;
    let recurringMaxAgeMs = Gve().recurringMaxAgeMs;
    if (recurringMaxAgeMs > 0 && u - h >= recurringMaxAgeMs) {
        if (!c?.agedOut) {
            ePr(prompt, {
                startedAt: h,
                lastScheduledFor: u - (uWe - _) * 1000,
                agedOut: true
            });
            i("tengu_loop_dynamic_wakeup_aged_out", {
                loop_age_ms: u - h,
                max_age_ms: recurringMaxAgeMs
            });
            L("aged_out", {
                via_keepalive: viaKeepalive
            });
            f("loop_schedule_wakeup", "loop_wakeup_aged_out");
        }
        return null;
    }
    let { clamped, wasClamped, targetMs, createdAt } = F(e);
    w({
        targetMs,
        createdAt,
        prompt,
        reason,
        chainStartedAt: h,
        viaKeepalive,
        toolUseId
    });
    if (viaKeepalive) {
        Psn(tPr() + 1);
        t(`[loop] keepalive armed (model did not reschedule): ${clamped}s fallback`);
        i("tengu_loop_keepalive_fired", {
            clamped_delay_seconds: clamped,
            prompt_is_sentinel: A.isLoopDefaultSentinel(prompt)
        });
        f("loop_schedule_wakeup", "model_no_reschedule");
        return {
            scheduledFor: targetMs,
            clampedDelaySeconds: clamped,
            wasClamped
        };
    }
    t(`[loop] dynamic wakeup scheduled: ${clamped}s${wasClamped ? ` (clamped from ${e}s)` : ""}${reason !== undefined ? ` \u2014 ${reason}` : ""}`);
    i("tengu_loop_dynamic_wakeup_scheduled", {
        chosen_delay_seconds: Number.isFinite(e) ? e : 0,
        clamped_delay_seconds: clamped,
        was_clamped: wasClamped,
        reason_length: reason?.length ?? 0,
        superseded_count
    });
    g("loop_schedule_wakeup");
    return {
        scheduledFor: targetMs,
        clampedDelaySeconds: clamped,
        wasClamped
    };
}
function rWo({ scheduledFor, prompt, reason, chainStartedAt }) {
    let createdAt = Date.now();
    if (scheduledFor <= createdAt || IG()) {
        return;
    }
    w({
        targetMs: scheduledFor,
        createdAt,
        prompt,
        reason,
        chainStartedAt: Math.min(chainStartedAt, createdAt),
        viaKeepalive: false,
        toolUseId: undefined
    });
    t(`[loop] re-armed pending wakeup for ${new Date(scheduledFor).toISOString()} after resume`);
}
function w({ targetMs, createdAt, prompt, reason, chainStartedAt, viaKeepalive, toolUseId }) {
    let u = new Date(targetMs);
    Swe({
        id: T(),
        cron: `${u.getMinutes()} ${u.getHours()} * * *`,
        prompt,
        createdAt,
        kind: "loop",
        scheduledFor: targetMs,
        reason,
        ...viaKeepalive && {
            keepalive: true
        }
    });
    ePr(prompt, {
        startedAt: chainStartedAt,
        lastScheduledFor: targetMs
    });
    lU(true);
    N2n(false);
    if (toolUseId !== undefined) {
        l0t({
            toolUseId,
            scheduledFor: targetMs,
            chainStartedAt
        });
    }
}
function F(e) {
    let o;
    if (Number.isNaN(e)) {
        o = _;
    } else if (e === Infinity) {
        o = uWe;
    } else if (e === -Infinity) {
        o = _;
    } else {
        o = Math.round(e);
    }
    let clamped = Math.max(_, Math.min(uWe, o));
    let wasClamped = !Number.isFinite(e) || o !== clamped;
    let l = Date.now();
    let p = l + clamped * 1000;
    let targetMs = O(p);
    let cacheLeadMs = Gve().cacheLeadMs;
    if (cacheLeadMs > 0 && clamped * 1000 <= rMn) {
        let v = rMn - cacheLeadMs;
        while(targetMs - l > v && targetMs - 60000 >= l + _ * 1000){
            targetMs -= 60000;
        }
    }
    let createdAt = p < targetMs ? p : targetMs - 1;
    return {
        clamped,
        wasClamped,
        targetMs,
        createdAt
    };
}
function O(e) {
    let o = new Date(e);
    if (o.getSeconds() > 0 || o.getMilliseconds() > 0) {
        o.setMinutes(o.getMinutes() + 1);
    }
    o.setSeconds(0, 0);
    return o.getTime();
}
function T() {
    return Math.floor(Math.random() * 4294967295).toString(16).padStart(8, "0");
}
function y() {
    let e = Km().filter((o)=>o.kind === "loop").map((o)=>o.id);
    if (e.length === 0) {
        return 0;
    }
    return m6(e);
}
function M() {
    l0t(undefined);
}
function IG() {
    return Km().some((e)=>e.kind === "loop");
}
function k8n() {
    let e = Km().filter((n)=>n.kind === "loop");
    let o = Ype();
    Lpt(null);
    Psn(0);
    if (e.length === 0) {
        M();
    }
    if (e.length === 0 && o === null) {
        return 0;
    }
    m6(e.map((n)=>n.id));
    for (let n of e){
        xsn(n.prompt);
    }
    if (o !== null) {
        xsn(o);
    }
    t(`[loop/dynamic] cancelled ${e.length} pending loop wakeup(s) on user abort${o !== null ? " (tick in flight)" : ""}`);
    L("user_abort", {
        loops_cancelled: e.length
    });
    g("loop_cancel_all");
    return e.length;
}
export { uWe, Zjo, eWo, tWo, mBr, nWo, rWo, IG, k8n };
