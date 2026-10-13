import { py, iU, li } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { kt, u8 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { un } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { vr, al } from "/$bunfs/root/chunk-7mawjt4q.js";
import { Tn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { mAe } from "/$bunfs/root/chunk-8yak0fbv.js";
import { x2, OVe, f4, Gle, Xnt, Jnt, mye, MVe, xkt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { mhn } from "/$bunfs/root/chunk-aehhk7d9.js";
import { Dn } from "/$bunfs/root/chunk-77t63btp.js";
function mjr(o, n = false) {
    return `${Xnt(o)} Run ${Jnt(o)}${n ? " in an interactive terminal session" : ""} to review and enable, then set it as the advisor.`;
}
function FQe(o, n, u, l, t = true, f = false, s = []) {
    let remote = al();
    let advisorModel = o === "off" ? undefined : Dn(o);
    let d = advisorModel === undefined || OVe(advisorModel);
    i("tengu_advisor_command", {
        advisor: advisorModel === undefined ? b("off") : d ? kt(o) : Gle(advisorModel) ? b("consent_pending") : b("invalid"),
        remote
    });
    if (!remote && vr()) {
        return "The advisor can't be changed from this client — this connection is view-only or has no control channel";
    }
    let m = remote ? " (this session only)" : t ? "" : " for this session — run /advisor in the terminal to change your default";
    if (advisorModel === undefined) {
        u((r)=>{
            if (r.advisorModel === undefined) {
                return r;
            }
            return {
                ...r,
                advisorModel: undefined
            };
        });
        if (remote) {
            vr()?.sendControlRequest({
                subtype: "apply_flag_settings",
                settings: {
                    advisorModel: null
                }
            }).catch(c);
        } else {
            S("");
            if (t) {
                Tn("userSettings", {
                    advisorModel: undefined
                }, undefined, l);
            }
        }
        return `Advisor disabled${m}${h(s, undefined, n)}`;
    }
    if (!d) {
        if (Gle(advisorModel)) {
            return mjr(advisorModel, f);
        }
        let r = [
            ...f4(),
            "off"
        ].join(", ");
        return `${un(u8(advisorModel))} cannot be used as an advisor. Valid options: ${r}`;
    }
    u((r)=>{
        if (r.advisorModel === advisorModel) {
            return r;
        }
        return {
            ...r,
            advisorModel
        };
    });
    if (remote) {
        vr()?.sendControlRequest({
            subtype: "apply_flag_settings",
            settings: {
                advisorModel
            }
        }).catch(c);
    } else {
        S(advisorModel);
        if (t) {
            Tn("userSettings", {
                advisorModel
            }, undefined, l);
        }
    }
    let p = un(u8(advisorModel));
    let v = un(u8(n));
    let g = `Advisor set to ${p}${m}`;
    if (!x2(n)) {
        g += `
Note: the current main model (${v}) does not support the advisor. It will activate when you switch to a supported main model.`;
    } else if (!mye(n, advisorModel)) {
        g += `
Note: ${p} is less capable than the current main model (${v}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;
    }
    return g + h(s, advisorModel, n);
}
function h(o, n, u) {
    let l = li();
    let t = l.advisorHeld ?? mhn(xkt(o));
    if (t === undefined) {
        return "";
    }
    if (t.refused) {
        if (n === undefined) {
            return "";
        }
        return `
The API refused the advisor for the current conversation, so it runs without one until /clear or /compact; the setting applies from there and in new conversations.`;
    }
    let f = mAe(l, u);
    if (t.model === undefined && f) {
        return "";
    }
    if (t.viaToolChange && (f || t.inFallback !== true && t.model !== undefined)) {
        if (t.model !== undefined && n !== undefined && !y(n, t.model)) {
            return `
The current conversation keeps ${un(u8(t.model))} as its advisor model until /clear or /compact, so the tool it has already declared stays unchanged; turning the advisor on or off applies right away.`;
        }
        return "";
    }
    let s = xkt(o);
    let a = s !== undefined && !s.available && s.toolChange && !s.byBase;
    let e = t.standby === true && s === undefined;
    let d = a || e ? undefined : t.model;
    if (d === n || d !== undefined && n !== undefined && y(n, d)) {
        return "";
    }
    return `
The current conversation ${d === undefined ? "runs without the advisor" : `keeps ${un(u8(d))} as its advisor`} until /clear or /compact, so the prompt it has already sent stays unchanged; the new setting applies from there and in new conversations.`;
}
function y(o, n) {
    return MVe(o, n);
}
function S(advisorModel) {
    iU({
        ...py() ?? {},
        advisorModel
    });
}
export { mjr, FQe };
