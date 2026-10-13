import { q, B, vd } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { obe, mat, NJt, z5, YD, H_r, zNe, gat, Hys, Dys, Lys, XL, qi } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Xme, GG, n$, R7e } from "/$bunfs/root/chunk-8y1m7sq5.js";
import { fyt, LWe, NWe, $Qe } from "/$bunfs/root/chunk-yrp86zcf.js";
import { TT } from "/$bunfs/root/chunk-2xjnwr5d.js";
const l = new q(()=>({
        notedWallResetsAt: null,
        shownWallResetsAt: null,
        withheldWallResetsAt: null,
        sessionSwitchSubscribed: false
    }));
function n() {
    return l.of(B().host);
}
function DWe(t, e = Date.now()) {
    return LWe(t) && t.lowPriorityOffer === "treatment" && t.resetsAt !== undefined && t.resetsAt * 1000 > e && !H_r(e) && zNe(e) === undefined && !YD() && mat();
}
function a(t, e = Date.now()) {
    let o = Dys(e);
    return fyt() && t.status !== "rejected" && o !== undefined && !u(o) && !H_r(e) && zNe(e) === undefined && mat();
}
function u(t) {
    let e = Xme();
    switch(e.phase){
        case "idle":
            return false;
        case "armed":
            return e.resetsAtSeconds !== t;
        case "stale":
            return true;
    }
}
function wGo(t) {
    if (t.lowPriorityOffer === undefined || !LWe(t)) {
        return;
    }
    let e = t.resetsAt ?? null;
    if (e === null) {
        return;
    }
    let o = n();
    if (o.notedWallResetsAt !== e) {
        o.notedWallResetsAt = e;
        i("tengu_lowpri_offer_capable", {
            arm: d(t.lowPriorityOffer),
            tier: d(NWe()),
            limit_type: pe(t.rateLimitType) ?? undefined,
            auto_armed: GG(),
            client_enabled: mat(),
            config_version: NJt()
        });
    }
    if (t.lowPriorityOffer === "treatment" && zNe() !== undefined && o.withheldWallResetsAt !== e) {
        o.withheldWallResetsAt = e;
        i("tengu_lowpri_offer_withheld", {
            arm: d(t.lowPriorityOffer),
            reason: d("cooloff"),
            client_enabled: mat(),
            config_version: NJt()
        });
    }
}
function G1t(t, e) {
    let o = t.resetsAt ?? null;
    let r = n();
    if (o === null || r.shownWallResetsAt === o) {
        return;
    }
    r.shownWallResetsAt = o;
    i("tengu_lowpri_offer_shown", {
        arm: pe(t.lowPriorityOffer) ?? undefined,
        surface: d(e),
        config_version: NJt()
    });
}
function V1t(entry) {
    let e = qi();
    if (DWe(e) && e.resetsAt !== undefined) {
        n$("low_priority");
        s();
        if (!Hys({
            resetsAtSeconds: e.resetsAt,
            arm: e.lowPriorityOffer,
            entry,
            retryAfterSeconds: e.lowPriorityRetryAfterSeconds,
            maxWaitSeconds: e.lowPriorityMaxWaitSeconds
        })) {
            return "unavailable";
        }
        $Qe();
        return "accepted";
    }
    if (a(e)) {
        let o = GG();
        if (o) {
            n$("low_priority");
        }
        s();
        if (!Lys(entry)) {
            return "unavailable";
        }
        if (o) {
            $Qe();
        }
        return "resumed";
    }
    return "unavailable";
}
function q1t(t) {
    let e = gat();
    let o = e.phase === "active" ? TT(e.resetsAtSeconds) : undefined;
    let r = o ? `until your limit resets at ${o}` : "until your limit resets";
    return `${t === "resumed" ? `Lower-priority mode is back on ${r}` : `Continuing now at lower priority ${r}`}. Your weekly limit still applies, and responses may pause while waiting for spare capacity. Run /${obe} to stop.`;
}
function K1t(t = Date.now()) {
    if (H_r(t)) {
        return `${z5().budgetExhaustedCopy}. Lower-priority mode is offered again after your weekly limit resets.`;
    }
    let e = zNe(t);
    if (e !== undefined) {
        return `Lower-priority mode is taking a break until ${TT(Math.ceil(e / 1000)) ?? "later"}, after waiting too long for spare capacity. Try /${obe} again then.`;
    }
    return "Lower-priority mode isn't available right now.";
}
function vGo() {
    let t = qi();
    return `Lower-priority mode is off. New messages wait for your usage limit as usual${DWe(t) || a(t) ? `; run /${obe} again to turn it back on` : ""}.`;
}
function s() {
    let t = n();
    if (t.sessionSwitchSubscribed) {
        return;
    }
    t.sessionSwitchSubscribed = true;
    vd((e, o)=>{
        if (R7e(o)) {
            XL("conversation_reset");
        }
    });
}
export { DWe, wGo, G1t, V1t, q1t, K1t, vGo };
