import { j2r } from "/$bunfs/root/chunk-g8ddscbr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { tl } from "/$bunfs/root/chunk-fv3gxsmx.js";
function x1s(e) {
    let r = tl();
    let r_lastSentPreferredDeviceId = r.lastSentPreferredDeviceId;
    let i = r.browserHints !== undefined && r.browserHints.preferredDeviceId === undefined && r_lastSentPreferredDeviceId !== undefined && e.preferredDeviceId === r_lastSentPreferredDeviceId;
    r.lastSentPreferredDeviceId = e.preferredDeviceId;
    r.browserHints = e.preferredDeviceId === undefined && e.localDeviceIds.length === 0 ? undefined : i ? {
        ...e,
        preferredDeviceId: undefined
    } : e;
    t(`[Claude in Chrome] browser hints: preferred=${e.preferredDeviceId?.slice(0, 8) ?? "none"} local=${e.localDeviceIds.length}${i ? " (re-send; in-session pick stands)" : ""}`);
    let r_bridgeBinding = r.bridgeBinding;
    if (r_bridgeBinding && e.preferredDeviceId !== undefined && e.preferredDeviceId !== r_lastSentPreferredDeviceId && r_bridgeBinding.socketClient.getSelectedDeviceId?.() !== e.preferredDeviceId) {
        j2r(r_bridgeBinding.socketClient);
    }
}
function XBr(e) {
    let r = tl();
    let r_browserHints = r.browserHints;
    if (!r_browserHints || r_browserHints.preferredDeviceId === undefined || r_browserHints.preferredDeviceId === e) {
        return;
    }
    r.browserHints = {
        ...r_browserHints,
        preferredDeviceId: undefined
    };
}
function JBr(e) {
    return tl().browserHints?.preferredDeviceId ?? e();
}
function QBr() {
    let browserHints = tl().browserHints;
    if (!browserHints) {
        return;
    }
    return new Map(browserHints.localDeviceIds.map((r)=>[
            r,
            "live"
        ]));
}
function ZBr() {
    return tl().browserHints?.hostPlatform;
}
export { x1s, XBr, JBr, QBr, ZBr };
