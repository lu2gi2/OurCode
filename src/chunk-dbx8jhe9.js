import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { rM } from "/$bunfs/root/chunk-88awaqqw.js";
import { I_, mD } from "/$bunfs/root/chunk-kasbfbhj.js";
import { xE } from "/$bunfs/root/chunk-8fa0475h.js";
function kj(e) {
    let o = I_();
    let s = !!e.isAutoModeAvailable && o;
    if (!s) {
        t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${mD()}`);
    }
    return s;
}
function A1t(e) {
    return !!e.isBypassPermissionsModeAvailable && !xE();
}
function C1t(e, o) {
    switch(e.mode){
        case "default":
            return "acceptEdits";
        case "acceptEdits":
            return "plan";
        case "plan":
            if (A1t(e)) {
                return "bypassPermissions";
            }
            if (kj(e)) {
                return "auto";
            }
            return "default";
        case "bypassPermissions":
            if (kj(e)) {
                return "auto";
            }
            return "default";
        case "dontAsk":
            return "default";
        default:
            return "default";
    }
}
function P1r(e, o, s) {
    let nextMode = C1t(e, o);
    return {
        nextMode,
        context: rM(e.mode, nextMode, e, s)
    };
}
export { kj, A1t, C1t, P1r };
