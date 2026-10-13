import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { kr, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { m0 } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { sn } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { hs } from "/$bunfs/root/chunk-nb5ge4vq.js";
const buo = [
    "unrestricted",
    "small",
    "medium",
    "large"
];
const s = "medium";
const u = "small";
function fJt(e) {
    return buo.find((o)=>o === e);
}
const n = {
    small: 5,
    medium: 10,
    large: 50
};
function c(e) {
    let o = e === "small" || e === "medium" || e === "large" ? n[e] : undefined;
    if (o === undefined) {
        return e;
    }
    return `${e} (aim for <${o} agents)`;
}
function Chs(e, o) {
    if (o && e !== "unrestricted") {
        return `${e} (default)`;
    }
    return c(e);
}
function Rhs(e) {
    if (e === "small" || e === "medium" || e === "large") {
        return n[e];
    }
}
function f(e) {
    if (!(e in n)) {
        return e;
    }
    return `${e} \u2014 keep workflows under ${n[e]} agents`;
}
function d() {
    return "This is a guideline, not a hard limit — follow it unless the user's prompt calls for a different scale.";
}
function xhs(e, o) {
    let t = o ? "This session has the default workflow size guideline:" : "A workflow size guideline is configured for this session:";
    let r = o ? ' The user can raise or remove it with "Dynamic workflow size" in /config.' : "";
    return `${t} ${f(e)}. ${d()}${r}`;
}
function Phs(e) {
    if (e === "unrestricted") {
        return "Workflow size is now unrestricted — no size guideline applies.";
    }
    return `The workflow size guideline for this session changed: ${f(e)}. ${d()}`;
}
function wNn() {
    return s_r() || m0()?.settings.disableWorkflows === true;
}
function s_r() {
    return a.CLAUDE_CODE_DISABLE_WORKFLOWS;
}
class w {
    cached = undefined;
    resolve() {
        if (this.cached !== undefined) {
            return this.cached;
        }
        this.cached = W();
        return this.cached;
    }
}
const p = new q(()=>new w);
function dg() {
    return Suo() === undefined;
}
function Suo() {
    let e = wNn();
    let o = e && !a.CLAUDE_CODE_DISABLE_WORKFLOWS && hs("disableWorkflows", false).source === "userSettings";
    if (e && !o) {
        return "managed_settings";
    }
    if (!ENn()) {
        return "org_policy";
    }
    let { available, defaultOn } = i();
    if (!available) {
        return "unavailable";
    }
    if (!(m0()?.settings.enableWorkflows ?? defaultOn)) {
        let l = hs("enableWorkflows", defaultOn).source;
        if (l === "userSettings" || l === "default") {
            return "user_setting";
        }
        return "managed_settings";
    }
    if (o) {
        return "user_setting";
    }
}
function wuo() {
    return i().defaultOn;
}
function ude() {
    if (kr() === "pro") {
        return u;
    }
    return s;
}
function vNn() {
    return ENn() && !a.CLAUDE_CODE_DISABLE_WORKFLOWS && i().available;
}
function mJt() {
    return m0()?.settings.workflowKeywordTriggerEnabled ?? true;
}
function ENn() {
    return sn("allow_workflows");
}
function Ihs() {
    if (wNn() || !ENn()) {
        return true;
    }
    if (m0()?.settings.enableWorkflows === false) {
        return true;
    }
    return a.CLAUDE_CODE_WORKFLOWS === false || !k("tengu_workflows_enabled", true);
}
function i() {
    return p.of(B().host).resolve();
}
function W() {
    if (a.CLAUDE_CODE_WORKFLOWS === true) {
        let o = k("tengu_workflows_enabled", true);
        return {
            available: o,
            defaultOn: o
        };
    }
    if (a.CLAUDE_CODE_WORKFLOWS === false) {
        return {
            available: false,
            defaultOn: false
        };
    }
    if (!k("tengu_workflows_enabled", true)) {
        return {
            available: false,
            defaultOn: false
        };
    }
    return {
        available: true,
        defaultOn: kr() !== "pro"
    };
}
function vuo() {
    return k("tengu_jade_compass", true);
}
export { buo, fJt, Chs, Rhs, xhs, Phs, wNn, s_r, dg, Suo, wuo, ude, vNn, mJt, ENn, Ihs, vuo };
