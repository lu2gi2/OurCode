import { sue, ORe, eu, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Xe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { St, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { cn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { lq, LAr } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Fv } from "/$bunfs/root/chunk-52bcnmbr.js";
import { fe, yg } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { xi } from "/$bunfs/root/chunk-6y1cnk59.js";
import { QQr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Vi } from "/$bunfs/root/chunk-kjg6txrm.js";
import { kg } from "/$bunfs/root/chunk-xyr83dxa.js";
function aht() {
    return k("tengu_harbor_kite_mode_emit", true);
}
function O() {
    switch(I().decidedBy){
        case "policySettings":
            return "managed-setting";
        case "repoSettings":
            return "repo-setting";
        case "invalidSetting":
            return "invalid-setting";
        case "flagSettings":
        case "userSettings":
        case undefined:
            return "explicit-setting";
    }
}
const p = {
    accept: 0,
    hold: 1,
    refuse: 2
};
const F = 100;
const P = new Set(Fv);
function LUt(e) {
    if (e !== null) {
        Vi().inbound.shuttingDown = false;
        x();
        Vi().inbound.modeAtUnwire = undefined;
    } else {
        let n = Vi().inbound.getCurrentMode;
        if (n !== null) {
            try {
                Vi().inbound.modeAtUnwire = n();
            } catch  {
                Vi().inbound.modeAtUnwire = undefined;
            }
        }
    }
    Vi().inbound.getCurrentMode = e;
    if (e !== null) {
        rOe("mode-changed");
    }
}
function NUt(e) {
    Vi().inbound.onPeerHeld = e;
}
function PUr(e) {
    Vi().inbound.sendPeerReceipt = e;
}
function rjo(origin, n) {
    Vi().inbound.sendPeerReceipt?.({
        mode: "prompt",
        agentId: Xe(),
        value: "",
        origin
    }, n);
}
function $Ut(e) {
    let inbound = Vi().inbound;
    inbound.publishAvailability = e;
    inbound.unsubscribeAvailabilityRefresh?.();
    inbound.unsubscribeAvailabilityRefresh = null;
    if (e) {
        lht();
        inbound.unsubscribeAvailabilityRefresh = eu(lht);
    }
}
function lht() {
    Vi().inbound.publishAvailability?.(uht() === undefined);
}
function IUr(e) {
    Vi().inbound.recordCorrespondent = e;
}
const N = 750;
function x() {
    if (Vi().inbound.shutdownSettleHandle === null) {
        Vi().inbound.shutdownSettleHandle = St(FUt);
    }
}
async function FUt() {
    let inbound = Vi().inbound;
    inbound.shutdownSettleHandle?.();
    inbound.shutdownSettleHandle = null;
    inbound.shuttingDown = true;
    if (inbound.held.length === 0) {
        return;
    }
    let n = inbound.held.splice(0, inbound.held.length);
    t(`[cross-session-inbound] shutdown: settling ${n.length} still-held peer message(s) as expired`);
    let o = [];
    for (let s of n){
        o.push(inbound.sendPeerReceipt?.(s, "expired"));
        inbound.onPeerHoldDropped?.(s, "expired");
    }
    await Promise.race([
        Promise.allSettled(o),
        Q(N, undefined, {
            unref: true
        })
    ]);
}
function OUr(e) {
    let { inbound } = Vi();
    if (inbound.held.includes(e)) {
        return inbound.announced.get(e);
    }
}
function UUt(e) {
    Vi().inbound.onPeerHoldDropped = e;
}
function BUt(e) {
    Vi().inbound.onPeerHoldReleased = e;
}
function KJe() {
    return I().value;
}
function I() {
    let e;
    let decidedBy;
    for (let o of [
        "policySettings",
        "flagSettings",
        "userSettings"
    ]){
        if (!cn(o)) {
            continue;
        }
        let s = fe(o)?.crossSessionInbound;
        if (s !== undefined) {
            e = s;
            decidedBy = o;
            break;
        }
    }
    for (let o of [
        "localSettings",
        "projectSettings"
    ]){
        if (!cn(o)) {
            continue;
        }
        let s = fe(o)?.crossSessionInbound;
        if (s === undefined) {
            continue;
        }
        if (p[s] > p[e ?? "accept"]) {
            e = s;
            decidedBy = "repoSettings";
        } else if (s !== "accept" && e !== undefined && p[s] === p[e] && decidedBy !== "policySettings") {
            decidedBy = "repoSettings";
        }
    }
    if (p[e ?? "accept"] < p.hold && B()) {
        e = "hold";
        decidedBy = "invalidSetting";
    }
    return {
        value: e,
        decidedBy
    };
}
function B() {
    return yg().errors.some((e)=>e.path === LAr && e.severity === "warning" && !e.statusOnly);
}
function h(e) {
    switch(e){
        case "accept":
            return {
                policy: "accept"
            };
        case "hold":
            return {
                policy: "hold",
                holdCause: O()
            };
        case "refuse":
            return {
                policy: "refuse",
                refuseCause: "opt-out"
            };
    }
}
function w() {
    if (xi()) {
        return undefined;
    }
    return {
        policy: "refuse",
        refuseCause: "kill-switch"
    };
}
function H() {
    let e = w();
    if (e) {
        return e;
    }
    let n = KJe();
    if (n !== undefined) {
        return h(n);
    }
    let o = v();
    if (o === null) {
        return {
            policy: "hold",
            holdCause: "mode-unknown"
        };
    }
    if (!P.has(o.mode)) {
        t(`[cross-session-inbound] unrecognized permission mode '${o.mode}' (fail-closed \u2192 hold)`);
        return {
            policy: "hold",
            holdCause: "mode-unknown"
        };
    }
    if (C(o)) {
        return {
            policy: "hold",
            holdCause: "bypass-default"
        };
    }
    return {
        policy: "accept"
    };
}
function S(e) {
    let n = w();
    if (n) {
        return n;
    }
    return E(e, false);
}
function _(e) {
    return E(e, true);
}
function E(e, n) {
    let o = KJe();
    if (o !== undefined) {
        return h(o);
    }
    if (e?.selfSent) {
        return {
            policy: "accept"
        };
    }
    let s = v();
    if (s === null || !P.has(s.mode)) {
        if (s !== null) {
            t(`[cross-session-inbound] unrecognized permission mode '${s.mode}' (fail-closed \u2192 hold)`);
        }
        return {
            policy: "hold",
            holdCause: "mode-unknown"
        };
    }
    let i = cht(s);
    let a = n || aht() ? e?.fromMode : undefined;
    if (a !== undefined) {
        if (a === i) {
            return {
                policy: "accept"
            };
        }
        return {
            policy: "hold",
            holdCause: "mode-mismatch"
        };
    }
    if (i === "bypass") {
        return {
            policy: "hold",
            holdCause: "no-mode-asserted"
        };
    }
    return {
        policy: "accept"
    };
}
function C(e) {
    return e.mode === "bypassPermissions" || lq(e.mode, e.isBypassPermissionsModeAvailable);
}
function cht(e) {
    if (C(e)) {
        return "bypass";
    }
    return "prompting";
}
function tOe() {
    return H().policy;
}
function MUr(e) {
    return S(e).policy;
}
function v() {
    let getCurrentMode = Vi().inbound.getCurrentMode;
    if (getCurrentMode === null) {
        t("[cross-session-inbound] permission-mode getter not wired (fail-closed → hold)");
        return null;
    }
    try {
        return getCurrentMode();
    } catch (error) {
        t(`[cross-session-inbound] mode getter threw (${l(error)}; fail-closed \u2192 hold)`);
        return null;
    }
}
function HUr() {
    if (KJe() !== undefined) {
        return false;
    }
    let e = v();
    if (e === null || !P.has(e.mode)) {
        return false;
    }
    return C(e);
}
function jUt(e) {
    return R(e, S(b(e)));
}
function b({ origin }) {
    if (!origin || origin.kind !== "peer") {
        return;
    }
    return {
        fromMode: origin.fromMode,
        selfSent: origin.selfSent
    };
}
function D(e) {
    let n;
    if (e.priority === "later") {
        let { priority, ...rest } = e;
        n = QQr(rest, {
            receipt: "caller"
        });
    } else {
        n = QQr(e, {
            receipt: "caller"
        });
    }
    if (!n.admitted) {
        Vi().inbound.sendPeerReceipt?.(e, "dropped", {
            dropReason: n.reason,
            droppedMsgIds: []
        });
        return false;
    }
    Vi().inbound.recordCorrespondent?.(e);
    return true;
}
function R(e, n) {
    let inbound = Vi().inbound;
    lht();
    switch(n.policy){
        case "accept":
            A("policy-accepts");
            g("peer_inbound_gate");
            return "accept";
        case "refuse":
            nOe(n.refuseCause === "kill-switch" ? m(e) : `crossSessionInbound=refuse: ${m(e)}`, n.refuseCause);
            inbound.sendPeerReceipt?.(e, "refused");
            return "refused";
        case "hold":
            {
                let { holdCause } = n;
                if (inbound.shuttingDown) {
                    t(`[cross-session-inbound] shutdown: not parking a late peer message \u2014 settled as expired: ${m(e)}`);
                    inbound.sendPeerReceipt?.(e, "expired");
                    f("peer_inbound_gate", "shutdown_expired");
                    return "refused";
                }
                if (inbound.held.length >= F) {
                    let i = inbound.held.shift();
                    if (i) {
                        t(`[cross-session-inbound] hold buffer full \u2014 evicted oldest as expired: ${m(i)}`);
                        inbound.sendPeerReceipt?.(i, "expired");
                        inbound.onPeerHoldDropped?.(i, "expired");
                    }
                }
                inbound.held.push(e);
                x();
                t(`[cross-session-inbound] held inbound peer message (${inbound.held.length} held, cause=${holdCause}): ${m(e)}`);
                f("peer_inbound_gate", "held");
                if (inbound.onPeerHeld) {
                    inbound.onPeerHeld(e, inbound.held.length, holdCause);
                    inbound.announced.set(e, holdCause);
                }
                inbound.sendPeerReceipt?.(e, "held");
                return "held";
            }
    }
}
function WUt(e) {
    if (!e) {
        return "ungated";
    }
    if (e.kind === "peer") {
        if ("hostInjected" in e && e.hostInjected === true) {
            return "host-injected";
        }
        return "peer";
    }
    if (e.kind === "task-notification" && "subkind" in e && e.subkind === "peer-send-message") {
        return "coordinator";
    }
    return "ungated";
}
function zUt({ ingressOrigin, inboundOrigin, envelopePeer = false }) {
    return envelopePeer || WUt(ingressOrigin) !== "ungated" && !j(ingressOrigin) || inboundOrigin === sue;
}
function j(ingressOrigin) {
    return !!ingressOrigin && ingressOrigin.kind === "peer" && !("hostInjected" in ingressOrigin && ingressOrigin.hostInjected === true) && "inbound_origin" in ingressOrigin && ingressOrigin.inbound_origin === ORe;
}
function GUt(e, n) {
    switch(WUt(e)){
        case "peer":
            return jUt(n);
        case "host-injected":
            return DUr(n);
        case "coordinator":
            return T(n);
        case "ungated":
            return "accept";
    }
}
function dht(e) {
    switch(WUt(e)){
        case "peer":
            return uht();
        case "coordinator":
        case "host-injected":
            if (KJe() === "refuse") {
                return "opt-out";
            }
            return undefined;
        case "ungated":
            return;
    }
}
function uht() {
    let e = H();
    if (e.policy !== "refuse") {
        return;
    }
    return e.refuseCause;
}
function G() {
    let e = KJe();
    if (e !== undefined) {
        return h(e);
    }
    return {
        policy: "accept"
    };
}
function T(e) {
    let n = KJe();
    if (n === undefined) {
        return "accept";
    }
    return R(e, h(n));
}
function DUr(e) {
    return R(e, _(b(e)));
}
function nOe(e, n) {
    lht();
    if (n === "kill-switch") {
        t(`[cross-session-inbound] refused inbound peer message \u2014 cross-session messaging disabled (kill switch) (${e})`);
        f("peer_inbound_gate", "kill_switch");
        return;
    }
    t(`[cross-session-inbound] refused inbound peer message (${e})`);
    f("peer_inbound_gate", "refused");
}
function rOe(e) {
    lht();
    return A(e);
}
function M(e) {
    switch(WUt(e.origin)){
        case "coordinator":
            return G();
        case "host-injected":
            return _(b(e));
        case "peer":
        case "ungated":
            return S(b(e));
    }
}
function A(e) {
    let inbound = Vi().inbound;
    let n_held = inbound.held;
    if (n_held.length === 0) {
        return 0;
    }
    let s = [];
    let i = [];
    let a = [];
    let d = 0;
    let y = 0;
    for (let r of n_held){
        let u = M(r);
        if (u.policy === "accept") {
            i.push(r);
        } else if (u.policy === "refuse") {
            d += 1;
            if (u.refuseCause === "kill-switch") {
                y += 1;
            }
            inbound.sendPeerReceipt?.(r, "refused");
            inbound.onPeerHoldDropped?.(r, "refused");
        } else {
            s.push(r);
            if (inbound.announced.get(r) !== u.holdCause) {
                a.push([
                    r,
                    u.holdCause
                ]);
            }
        }
    }
    n_held.length = 0;
    n_held.push(...s);
    for (let [r, u] of a){
        inbound.announced.set(r, u);
        inbound.onPeerHeld?.(r, n_held.length, u);
    }
    if (d > 0) {
        t(y === d ? `[cross-session-inbound] gate off \u2014 dropped ${d} parked peer message(s) (cross-session messaging disabled)` : `[cross-session-inbound] dropped ${d} held peer message(s) \u2014 policy is now refuse`);
    }
    if (i.length === 0) {
        return 0;
    }
    let c = [];
    for (let r of i){
        if (D(r)) {
            c.push(r);
            g("peer_inbound_gate");
        } else {
            inbound.onPeerHoldDropped?.(r, "dropped");
        }
    }
    t(`[cross-session-inbound] released ${i.length} held peer message(s) (${e}) \u2014 ${c.length} admitted by the ingress guard; ${n_held.length} still held`);
    if (c.length > 0) {
        inbound.onPeerHoldReleased?.(c, e);
    }
    for (let r of c){
        inbound.sendPeerReceipt?.(r, "delivered");
    }
    return i.length;
}
function pht(e, n) {
    let inbound = Vi().inbound;
    let s = inbound.held.indexOf(e);
    if (s === -1) {
        return "gone";
    }
    let [i] = inbound.held.splice(s, 1);
    if (!i) {
        return "gone";
    }
    if (n === "approve") {
        let d = M(i);
        if (d.policy === "refuse") {
            let c = d.refuseCause === "kill-switch";
            t(`[cross-session-inbound] held peer message approved but policy is now refuse (${c ? "kill switch" : "opt-out"}) \u2014 dropped`);
            inbound.sendPeerReceipt?.(i, "refused");
            inbound.onPeerHoldDropped?.(i, "refused");
            return "dropped";
        }
        if (!D(i)) {
            t("[cross-session-inbound] held peer message approved but DROPPED by the ingress guard on release");
            inbound.onPeerHoldDropped?.(i, "dropped");
            return "dropped-by-guard";
        }
        t("[cross-session-inbound] held peer message APPROVED — released to queue");
        g("peer_inbound_gate");
        inbound.onPeerHoldReleased?.([
            i
        ], "approved");
        inbound.sendPeerReceipt?.(i, "delivered");
        return "delivered";
    }
    t(`[cross-session-inbound] held peer message ${n === "deny" ? "DENIED" : "EXPIRED/CANCELLED"} \u2014 dropped with denial receipt`);
    let a = n === "deny" ? "denied" : "expired";
    inbound.sendPeerReceipt?.(i, a);
    return "dropped";
}
function ojo() {
    return Vi().inbound.held;
}
function fht() {
    return Vi().inbound.held.length;
}
function LUr() {
    return Vi().inbound.shuttingDown;
}
function m(e) {
    let n = e.origin?.kind === "peer" && typeof e.origin.from === "string" ? e.origin.from : "unknown";
    let o = typeof e.value === "string" ? e.value : "[blocks]";
    return `from=${kg(n)} "${kg(o, 60)}"`;
}
export { aht, LUt, NUt, PUr, rjo, $Ut, lht, IUr, FUt, OUr, UUt, BUt, KJe, cht, tOe, MUr, HUr, jUt, WUt, zUt, GUt, dht, uht, DUr, nOe, rOe, pht, ojo, fht, LUr };
