import { Nt, k, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Yn } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { X } from "/$bunfs/root/chunk-bd805sh6.js";
import { g } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ER } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { rR, Ere } from "/$bunfs/root/chunk-2ya7enrh.js";
import { hs } from "/$bunfs/root/chunk-nb5ge4vq.js";
import { kce } from "/$bunfs/root/chunk-b55d3r46.js";
const c = 3;
const f = 3;
const cWo = 20;
const dWo = "Your Claude Code session is ready — continue from your phone anytime.";
function uWo() {
    if (Yn.CLAUDE_CODE_FORCE_RC_LONG_TURN_NUDGE) {
        return {
            thresholdSec: 5,
            probability: 1,
            maxImpressions: -1,
            impressionKey: "force",
            dayStartHour: 0,
            dayEndHour: 24
        };
    }
    let e = k("tengu_rc_long_turn_nudge", null);
    if (e === null || typeof e !== "object") {
        return null;
    }
    let thresholdSec = typeof e.thresholdSec === "number" && Number.isFinite(e.thresholdSec) ? Math.min(3600, Math.max(5, e.thresholdSec)) : 90;
    let n = typeof e.probability === "number" && Number.isFinite(e.probability) ? Math.min(1, Math.max(0, e.probability)) : 1;
    let r = typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions) ? Math.trunc(e.maxImpressions) : 3;
    let t = typeof e.impressionKey === "string" ? e.impressionKey : "";
    let a = (i, d)=>{
        if (typeof i === "number" && Number.isFinite(i)) {
            return Math.min(24, Math.max(0, Math.trunc(i)));
        }
        return d;
    };
    let dayStartHour = a(e.dayStartHour, 7);
    let dayEndHour = a(e.dayEndHour, 21);
    return {
        thresholdSec,
        probability: n,
        maxImpressions: r,
        impressionKey: t,
        dayStartHour,
        dayEndHour
    };
}
function pWo(e, o = new Date) {
    if (e.dayStartHour >= e.dayEndHour) {
        return true;
    }
    let n = o.getHours();
    return n >= e.dayStartHour && n < e.dayEndHour;
}
function m(e, o) {
    let n = (ce()[e] ?? 0) + 1;
    Ae((r)=>{
        if ((r[e] ?? 0) >= n) {
            return r;
        }
        return {
            ...r,
            [e]: n
        };
    }, o);
}
const s = {
    afterPromptCount: 5,
    probability: 0,
    maxImpressions: 3
};
function fWo() {
    let e;
    let Yn_CLAUDE_CODE_RC_PERMISSION_NUDGE = Yn.CLAUDE_CODE_RC_PERMISSION_NUDGE;
    if (Yn_CLAUDE_CODE_RC_PERMISSION_NUDGE) {
        try {
            e = X(Yn_CLAUDE_CODE_RC_PERMISSION_NUDGE);
        } catch  {
            e = undefined;
        }
    }
    e ??= k("tengu_rc_permission_nudge", s);
    let n = (r, t)=>{
        if (typeof r === "number" && Number.isFinite(r)) {
            return r;
        }
        return t;
    };
    return {
        afterPromptCount: Math.max(1, n(e?.afterPromptCount, s.afterPromptCount)),
        probability: n(e?.probability, s.probability),
        maxImpressions: n(e?.maxImpressions, s.maxImpressions)
    };
}
function hBr() {
    if (!rR()) {
        return false;
    }
    let e = ce();
    return !e.hasUsedRemoteControl && !Ere() && (e.remoteControlUpsellSeenCount ?? 0) < c;
}
function mWo(e) {
    m("remoteControlUpsellSeenCount", e);
    g("tips_rc_upsell_show");
}
function b() {
    return ce().hasUsedRemoteControl === true || Ere();
}
function yBr() {
    return _Br() && (ce().pushNotifUpsellSeenCount ?? 0) < f;
}
function _Br() {
    return rR() && kce() && b() && hs("agentPushNotifEnabled", false).value !== true;
}
function gWo(e) {
    m("pushNotifUpsellSeenCount", e);
    g("tips_push_upsell_show");
}
function hWo(e) {
    if (!rR()) {
        return false;
    }
    if (e.maxImpressions === 0) {
        return false;
    }
    if (e.maxImpressions < 0) {
        return true;
    }
    let o = ce();
    return ((o.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey ? o.rcLongTurnNudgeSeenCount ?? 0 : 0) < e.maxImpressions;
}
function yWo(e, o) {
    if (e.maxImpressions >= 0) {
        Ae((n)=>{
            let r = (n.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey;
            return {
                ...n,
                rcLongTurnNudgeSeenCount: r ? (n.rcLongTurnNudgeSeenCount ?? 0) + 1 : 1,
                rcLongTurnNudgeSeenKey: e.impressionKey
            };
        }, o);
    }
    g("tips_rc_long_turn_show");
}
function _Wo(e) {
    if (!rR()) {
        return false;
    }
    return (ce().rcPermissionNudgeSeenCount ?? 0) < e;
}
function bWo(e) {
    Ae((o)=>({
            ...o,
            rcPermissionNudgeSeenCount: (o.rcPermissionNudgeSeenCount ?? 0) + 1
        }), e);
    g("tips_rc_permission_nudge_show");
}
function SWo() {
    if (!kce()) {
        return null;
    }
    let e = k("tengu_kairos_ready_nudge", null);
    if (e === null || typeof e !== "object") {
        return null;
    }
    let o = typeof e.probability === "number" && Number.isFinite(e.probability) ? Math.min(1, Math.max(0, e.probability)) : 1;
    let n = typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions) ? Math.trunc(e.maxImpressions) : 5;
    let r = typeof e.impressionKey === "string" ? e.impressionKey : "";
    return {
        probability: o,
        maxImpressions: n,
        impressionKey: r
    };
}
function wWo(e, o, n) {
    if (!o || n) {
        return false;
    }
    if (Nt() || ER() != null) {
        return false;
    }
    if (e.maxImpressions === 0) {
        return false;
    }
    if (e.maxImpressions < 0) {
        return true;
    }
    let r = ce();
    return ((r.remoteControlReadyPushKey ?? "") === e.impressionKey ? r.remoteControlReadyPushCount ?? 0 : 0) < e.maxImpressions;
}
function vWo(e, o) {
    if (e.maxImpressions >= 0) {
        Ae((n)=>{
            let r = (n.remoteControlReadyPushKey ?? "") === e.impressionKey;
            return {
                ...n,
                remoteControlReadyPushCount: r ? (n.remoteControlReadyPushCount ?? 0) + 1 : 1,
                remoteControlReadyPushKey: e.impressionKey
            };
        }, o);
    }
    g("tips_rc_ready_push_send");
}
function kBt(e) {
    if (ce().hasUsedRemoteControl) {
        return;
    }
    Ae((o)=>{
        if (o.hasUsedRemoteControl) {
            return o;
        }
        return {
            ...o,
            hasUsedRemoteControl: true
        };
    }, e);
}
const C = [
    "mobile",
    "web",
    "desktop"
];
function y(e) {
    switch(e){
        case "ios":
        case "android":
            return "mobile";
        case "web_claude_ai":
            return "web";
        case "desktop_app":
            return "desktop";
        default:
            return;
    }
}
function smn(e, o) {
    let n = y(e);
    if (!n) {
        return;
    }
    if (u(ce()).includes(n)) {
        return;
    }
    Ae((r)=>{
        let t = u(r);
        if (t.includes(n)) {
            return r;
        }
        return {
            ...r,
            remoteControlSurfacesSeen: [
                ...t,
                n
            ]
        };
    }, o);
}
function bBr() {
    let e = u(ce());
    let o = e.includes("mobile");
    let n = e.includes("web");
    if (o === n) {
        return;
    }
    if (o) {
        return "web";
    }
    return "mobile";
}
function u({ remoteControlSurfacesSeen }) {
    if (Array.isArray(remoteControlSurfacesSeen)) {
        return remoteControlSurfacesSeen.filter((n)=>C.some((r)=>r === n));
    }
    return [];
}
export { cWo, dWo, uWo, pWo, fWo, hBr, mWo, yBr, _Br, gWo, hWo, yWo, _Wo, bWo, SWo, wWo, vWo, kBt, smn, bBr };
