import { k, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { b, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Fm } from "/$bunfs/root/chunk-52bcnmbr.js";
import { fe, Tn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { kj } from "/$bunfs/root/chunk-dbx8jhe9.js";
function aMr(u, { requireOnboarding = true } = {}) {
    let o = ce();
    if (requireOnboarding && !o.hasCompletedOnboarding || o.hasSeenAutoDefaultNudge || !k("tengu_maple_pier", true)) {
        return null;
    }
    let e = fe("userSettings")?.permissions?.defaultMode;
    let t = [
        "projectSettings",
        "localSettings",
        "flagSettings",
        "policySettings"
    ].some((r)=>fe(r)?.permissions?.defaultMode);
    if (e && e !== "auto" && !t && kj(u)) {
        return e;
    }
    return null;
}
function lMr(u, n, o) {
    if (ce().hasSeenAutoDefaultNudge) {
        return;
    }
    let e = Fm(n.current_mode);
    if (u === "shown") {
        i("tengu_auto_default_nudge_shown", {
            current_mode: pe(e),
            surface: b("ide")
        });
        return;
    }
    let t = n.choice === "accept" ? "accept" : "decline";
    if (t === "accept") {
        Tn("userSettings", {
            permissions: {
                defaultMode: "auto"
            }
        }, undefined, o);
    }
    Ae((r)=>{
        if (r.hasSeenAutoDefaultNudge) {
            return r;
        }
        return {
            ...r,
            hasSeenAutoDefaultNudge: true
        };
    }, o);
    i("tengu_auto_default_nudge_resolved", {
        choice: b(t),
        outcome: t === "accept" ? b("switched") : b("declined"),
        current_mode: pe(e),
        surface: b("ide")
    });
}
export { aMr, lMr };
