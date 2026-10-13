import { x_t } from "/$bunfs/root/chunk-88awaqqw.js";
import { mD } from "/$bunfs/root/chunk-kasbfbhj.js";
import { lqe, Ni } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { z6, WG, vGr, f_t } from "/$bunfs/root/chunk-5hp2pp9y.js";
function dgt() {
    return x_t() || lqe("auto_mode_off") || f_t() || lqe("unattended_serving_off");
}
function ugt(n) {
    try {
        if (x_t()) {
            if (mD() === "settings") {
                return "settings";
            }
            return "breaker";
        }
        if (lqe("auto_mode_off")) {
            return "settings";
        }
        let e = lqe("unattended_serving_off");
        if (!f_t(n) && !e) {
            return "none";
        }
        if (WG() || e) {
            return "consent_forced_off";
        }
        let t = z6();
        if (t === "declined") {
            return "consent_declined";
        }
        if (t === "accepted" || vGr()) {
            return "consent_unknown";
        }
        return "consent_unset";
    } catch  {
        return "consent_unknown";
    }
}
function LLr(n) {
    let e = ugt();
    if (e === "none") {
        return;
    }
    return {
        key: `served-auto-off-${e === "consent_unset" || e === "consent_declined" ? "consent" : e}`,
        text: Ni.auto_off_notice(n, Ni[`auto_off.reason.${e}`])
    };
}
export { dgt, ugt, LLr };
