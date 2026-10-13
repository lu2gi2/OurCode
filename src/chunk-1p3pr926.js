import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g } from "/$bunfs/root/chunk-04d4ftnx.js";
import { wt, fm, k, Ae, ce, Xi, Lm } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Mt } from "/$bunfs/root/chunk-7mawjt4q.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { Aj } from "/$bunfs/root/chunk-nwc9gp5j.js";
import { pAe } from "/$bunfs/root/chunk-92psz72c.js";
import { gs } from "/$bunfs/root/chunk-ghreee2m.js";
const p = "tengu_reflective_bee";
const S = [
    "off",
    "survey"
];
const _ = 3;
const h = 86400000;
const f = "tengu_web_setup_push_offer";
const x$r = "Pushed to GitHub. Connect GitHub to claude.ai so you can work on this repo even when this machine is offline?";
const P$r = 1000;
const zgt = new q(()=>gs({
        status: "none"
    }));
function wBo({ trigger, host, storageV5 }) {
    let r = zgt.of(host);
    if (r.getState().status !== "none") {
        return;
    }
    if (fm()) {
        return;
    }
    if (Ie() !== "firstParty" || !wt() || !pAe()) {
        return;
    }
    if (Mt()) {
        return;
    }
    if (u()) {
        return;
    }
    if (Aj.of(host).peek(undefined, storageV5) !== "not_connected") {
        return;
    }
    i(f, {
        event: b("eligible"),
        trigger: d(trigger)
    });
    let n = k(p, "off");
    let variant = S.find((a)=>a === n);
    r.setState(()=>{
        if (variant === undefined || variant === "off") {
            return {
                status: "resolved"
            };
        }
        return {
            status: "pending",
            variant,
            trigger
        };
    });
}
function u() {
    let webSetupPushOffer = ce().webSetupPushOffer;
    if (webSetupPushOffer?.dismissedForever) {
        return true;
    }
    if (Xi().webSetupPushOfferShown) {
        return true;
    }
    if (webSetupPushOffer?.lastShownAt !== undefined && Date.now() - webSetupPushOffer.lastShownAt < h) {
        return true;
    }
    return (webSetupPushOffer?.shownCount ?? 0) >= _;
}
function I$r(t, o) {
    let s = zgt.of(t);
    if (s.getState().status !== "pending") {
        return false;
    }
    if (!u() && Aj.of(t).peek(undefined, o) === "not_connected") {
        return false;
    }
    s.setState(()=>({
            status: "resolved"
        }));
    return true;
}
function O$r(t, o) {
    let s = zgt.of(t);
    let r = s.getState();
    if (r.status !== "pending") {
        return;
    }
    s.setState(()=>({
            ...r,
            status: "shown"
        }));
    i(f, {
        event: b("shown"),
        variant: d(r.variant),
        trigger: d(r.trigger)
    });
    g("remote_setup_push_offer");
    let lastShownAt = Date.now();
    Ae((e)=>{
        if (e.webSetupPushOffer?.lastShownAt === lastShownAt) {
            return e;
        }
        return {
            ...e,
            webSetupPushOffer: {
                ...e.webSetupPushOffer,
                lastShownAt,
                shownCount: (e.webSetupPushOffer?.shownCount ?? 0) + 1
            }
        };
    }, o);
    Lm((e)=>{
        if (e.webSetupPushOfferShown) {
            return e;
        }
        return {
            ...e,
            webSetupPushOfferShown: true
        };
    }, o);
}
function Gje(t, o, s) {
    let r = zgt.of(t);
    let n = r.getState();
    if (n.status !== "shown") {
        return;
    }
    r.setState(()=>({
            status: "resolved"
        }));
    i(f, {
        event: d(o),
        variant: d(n.variant),
        trigger: d(n.trigger)
    });
    if (o === "dont_ask_again") {
        Ae((e)=>{
            if (e.webSetupPushOffer?.dismissedForever) {
                return e;
            }
            return {
                ...e,
                webSetupPushOffer: {
                    ...e.webSetupPushOffer,
                    dismissedForever: true
                }
            };
        }, s);
    }
}
export { x$r, P$r, zgt, wBo, I$r, O$r, Gje };
