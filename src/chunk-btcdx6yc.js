import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g } from "/$bunfs/root/chunk-04d4ftnx.js";
import { lde, ACe, e_r } from "/$bunfs/root/chunk-tf8026s8.js";
import { sD, rM } from "/$bunfs/root/chunk-88awaqqw.js";
import { QJo, vI } from "/$bunfs/root/chunk-kasbfbhj.js";
import { CWo } from "/$bunfs/root/chunk-kawcffk6.js";
import { kj, A1t } from "/$bunfs/root/chunk-dbx8jhe9.js";
function SBr(level, e, { trigger, offerBypass = true } = {}) {
    let nextMode = wBr(level, e, {
        offerBypass
    });
    return {
        level,
        currentMode: e.mode,
        nextMode,
        context: rM(e.mode, nextMode, e, trigger)
    };
}
function wBr(o, e, { offerBypass = true } = {}) {
    let s = e_r() !== undefined;
    let t = e.mode === "plan" ? e.prePlanMode ?? "plan" : e.mode;
    let r = lde(o, {
        isAutoModeAvailable: kj(e),
        isBypassPermissionsModeAvailable: offerBypass && A1t(e) && (!s || t === "bypassPermissions")
    }, e.proactivityBaseline?.mode);
    let n = e.proactivityBaseline?.mode;
    let c = r === "acceptEdits" && n === "acceptEdits" ? n : vI(e) ? undefined : t;
    if (ACe(o, r, c) === undefined) {
        return r;
    }
    return "default";
}
function kWo(proactivityLevel, e, a, { offerBypass = true } = {}) {
    let t;
    e((r)=>{
        if (r.proactivityLevel === proactivityLevel) {
            return r;
        }
        let n = SBr(proactivityLevel, r.toolPermissionContext, {
            offerBypass
        });
        t = {
            from: r.proactivityLevel,
            toMode: n.nextMode,
            modeChanged: n.nextMode !== n.currentMode
        };
        return {
            ...r,
            proactivityLevel,
            toolPermissionContext: {
                ...n.context,
                mode: n.nextMode,
                startupModeDecidedByProactivityLevel: undefined
            }
        };
    });
    if (t === undefined) {
        return;
    }
    m(proactivityLevel, a, {
        source: "sdk_host",
        from: t.from,
        toMode: t.toMode
    });
    if (t.modeChanged || QJo(t.from, proactivityLevel)) {
        setImmediate(()=>{
            sD.emit();
        });
    }
}
function m(proactivityLevel, e, { source, from, toMode }) {
    CWo(proactivityLevel, e);
    i("tengu_proactivity_cycle", {
        level: d(proactivityLevel),
        from: d(from),
        to_mode: d(toMode),
        source: d(source)
    });
    g("proactivity_cycle");
}
export { SBr, wBr, kWo };
