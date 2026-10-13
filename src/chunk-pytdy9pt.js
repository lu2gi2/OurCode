import { lt, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
class z2o {
    state = {
        status: "inactive"
    };
    fallbackSadEmitted = new Set;
    toolsBaseline = {
        captured: false
    };
    relayThinkingStripOwed = false;
    lastDispatchRelayed = false;
    lastDispatchFallback = undefined;
    openBootVerdict = undefined;
    bootSettled = false;
    handoffMarkerStep = undefined;
    enableStubsCalled = new Map;
    forkDirectLines = new Set;
    relayRefusedGzip = false;
}
const vDs = new lt(()=>new z2o);
function n() {
    return vDs.of(B());
}
function iI() {
    return n().state;
}
function CWr(e) {
    let r = n();
    if (r.state.status !== "inactive") {
        return;
    }
    r.state = e;
    r.relayThinkingStripOwed = false;
}
function GOe(reason, r, detail) {
    let a = n();
    if (a.state.status === "reverted") {
        return;
    }
    if (a.state.status === "active") {
        if (reason === "device_tool_requested" || reason === "device_tool_request_repeated") {
            J("info", "cli_teleport_relay_ended", {
                reason
            });
        } else if (reason !== "direct_served") {
            f("upgrade_teleport_cache", reason);
            l(reason);
        }
        if (reason !== "direct_served") {
            s(r, reason);
        }
        a.relayThinkingStripOwed = true;
    }
    a.state = {
        status: "reverted",
        reason,
        detail
    };
}
function RWr(e, r) {
    let enableStubsCalled = n().enableStubsCalled;
    if (!enableStubsCalled.has(e)) {
        enableStubsCalled.set(e, r);
        return "not_repeat";
    }
    if (!!r && r === enableStubsCalled.get(e)) {
        return "not_repeat";
    }
    return "repeat";
}
const i = new WeakMap;
function xWr(e, r) {
    i.set(e, r);
}
function fjs(e) {
    let r = n();
    if (r.relayThinkingStripOwed) {
        if (e.mainLoop) {
            return "strip_and_mark";
        }
        return "strip";
    }
    if (r.state.status !== "active") {
        return "keep";
    }
    if (e.fetch !== undefined && i.has(e.fetch)) {
        return "keep";
    }
    return "strip";
}
function mjs(e) {
    return n().state.status === "active" && e !== undefined && i.get(e) === "main";
}
function PWr(e) {
    n().openBootVerdict = e;
}
function Eyn() {
    return n().openBootVerdict !== undefined;
}
function QXn() {
    n().bootSettled = true;
}
function gjs() {
    return !n().bootSettled || iI().status === "active" || Eyn();
}
function kyn() {
    let e = n();
    let e_openBootVerdict = e.openBootVerdict;
    e.openBootVerdict = undefined;
    return e_openBootVerdict;
}
function QWe(e) {
    n().handoffMarkerStep = e;
}
function IWr() {
    let e = n();
    let e_handoffMarkerStep = e.handoffMarkerStep;
    e.handoffMarkerStep = undefined;
    return e_handoffMarkerStep;
}
function Ujt() {
    let error_code = kyn();
    if (error_code === undefined) {
        return;
    }
    f("upgrade_teleport_cache", error_code);
    J("warn", "cli_teleport_arm_verdict", {
        outcome: "refused",
        error_code
    });
    t(`prompt-cache relay stays off: boot had no marker (${error_code}) and no hand-off armed it`);
}
function OWr() {
    n().relayThinkingStripOwed = true;
}
function MWr() {
    return n().relayThinkingStripOwed;
}
function HWr() {
    return !n().relayRefusedGzip;
}
function DWr() {
    let e = n();
    if (e.relayRefusedGzip) {
        return;
    }
    e.relayRefusedGzip = true;
    J("warn", "cli_teleport_relay_gzip_refused");
}
function LWr(e) {
    let r = n();
    r.lastDispatchRelayed = e;
    r.lastDispatchFallback = undefined;
}
function NWr(cause, httpStatus) {
    n().lastDispatchFallback = {
        cause,
        httpStatus
    };
}
function hjs() {
    return n().lastDispatchFallback;
}
function yjs() {
    let e = n();
    return e.relayThinkingStripOwed && !e.lastDispatchRelayed;
}
function _js(outcome) {
    let r = n();
    if (!r.relayThinkingStripOwed) {
        return;
    }
    r.relayThinkingStripOwed = false;
    J("info", "cli_teleport_relay_thinking_settled", {
        outcome
    });
}
function $Wr(e) {
    let r = n();
    if (r.fallbackSadEmitted.has(e)) {
        return;
    }
    r.fallbackSadEmitted.add(e);
    f("upgrade_teleport_cache", e);
    l(e);
}
function FWr(e, r) {
    if (n().state.status !== "active") {
        return;
    }
    l("direct_served", e);
    s(r, `direct_served_${e}`);
    GOe("direct_served", r, e);
}
function UWr(e, r) {
    let o = n();
    if (o.state.status !== "active") {
        return;
    }
    let a = e.at(-1);
    if (a !== undefined) {
        o.forkDirectLines.add(a);
    }
    f("upgrade_relay_fork_direct", r);
}
function BWr(e) {
    let forkDirectLines = n().forkDirectLines;
    return forkDirectLines.size > 0 && e.some((o)=>forkDirectLines.has(o));
}
function s(e, r) {
    f("upgrade_relay_end", `${e}_${r}`);
}
function l(reason, cause) {
    J("warn", "cli_teleport_relay_fallback", {
        reason,
        ...cause !== undefined && {
            cause
        }
    });
}
function jWr(e) {
    let r = d(e);
    if (r === undefined) {
        return iI().status === "active";
    }
    GOe("context_reduced", "main", r);
    return false;
}
function WWr(e) {
    return iI().status === "active" && d(e) === undefined;
}
function d(e) {
    let r = iI();
    if (r.status !== "active") {
        return;
    }
    let r_preAnchorLineUuids = r.preAnchorLineUuids;
    if (e.length < r_preAnchorLineUuids.length) {
        return `live view has ${e.length} lines before its tail; the arm snapshot guarded ${r_preAnchorLineUuids.length}`;
    }
    for(let a = 0; a < r_preAnchorLineUuids.length; a++){
        if (e[a] !== r_preAnchorLineUuids[a]) {
            return `pre-anchor line ${a} changed since arm`;
        }
    }
}
function zWr(model, fingerprint) {
    let o = n();
    if (o.state.status !== "active") {
        return false;
    }
    let o_toolsBaseline = o.toolsBaseline;
    if (!o_toolsBaseline.captured) {
        o.toolsBaseline = {
            captured: true,
            model,
            fingerprint
        };
        return true;
    }
    if (model !== o_toolsBaseline.model) {
        return false;
    }
    if (o_toolsBaseline.fingerprint === fingerprint) {
        return true;
    }
    GOe("tools_changed", "main", o_toolsBaseline.fingerprint === null ? "session gained a toolset after a toolless first relay-attempted dispatch" : fingerprint === null ? "session lost its toolset after a tooled first relay-attempted dispatch" : "outgoing toolset diverged from the first relay-attempted dispatch baseline");
    return false;
}
function GWr(e, r) {
    let o = n();
    if (o.state.status !== "active") {
        return "not_comparable";
    }
    let o_toolsBaseline = o.toolsBaseline;
    if (!o_toolsBaseline.captured) {
        return "intact";
    }
    if (e !== o_toolsBaseline.model) {
        return "not_comparable";
    }
    if (o_toolsBaseline.fingerprint === r) {
        return "intact";
    }
    return "changed";
}
export { z2o, vDs, iI, CWr, GOe, RWr, xWr, fjs, mjs, PWr, Eyn, QXn, gjs, kyn, QWe, IWr, Ujt, OWr, MWr, HWr, DWr, LWr, NWr, hjs, yjs, _js, $Wr, FWr, UWr, BWr, jWr, WWr, zWr, GWr };
