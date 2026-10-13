import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { l$e, RQt } from "/$bunfs/root/chunk-xpqgtv5j.js";
import { pbe } from "/$bunfs/root/chunk-5s4qvyjz.js";
import { TFt } from "/$bunfs/root/chunk-mm2yesqa.js";
import { Mto, Ni } from "/$bunfs/root/chunk-qwvy7ma3.js";
function RLr() {
    if (!Mto()) {
        return "off";
    }
    try {
        if (k("tengu_vast_tulip", false) === true) {
            return "enforce";
        }
        return "observe";
    } catch  {
        t("tool host attestation: reading tengu_vast_tulip threw; observing", {
            level: "warn"
        });
        return "observe";
    }
}
function s(e) {
    let o = pbe();
    let { status, meetsLevel, configException } = RQt(e, o, {
        isCloudWorker: false
    });
    return {
        status,
        verdict: !o.enforce ? "not_policed" : meetsLevel ? "pass" : configException ? "config_exception" : "below_floor"
    };
}
function NIe(e) {
    let mode = RLr();
    if (mode === "off") {
        return undefined;
    }
    return {
        mode,
        ...s(l$e(e))
    };
}
function Ije(e) {
    return e?.mode === "enforce" && e.verdict === "below_floor";
}
function Sun() {
    let attestation = NIe("UNSPECIFIED");
    return {
        attestation,
        heldBack: Ije(attestation)
    };
}
function rFo(e) {
    try {
        e?.(TFt, Ni["repository_trust.served_calls.unattested"]);
    } catch (error) {
        t(`[remote-tools] the notice sink threw on ${TFt}: ${l(error)}`, {
            level: "error"
        });
    }
}
export { RLr, NIe, Ije, Sun, rFo };
