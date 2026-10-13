import { d8, Dt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Vdt } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Lo } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { S_, fe, bO } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { iY } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { Ht } from "/$bunfs/root/chunk-77t63btp.js";
function G0t(e) {
    return false;
}
function Bin({ model, modelCli, agent, agentSelectedByCli, agents, effectiveModel, initialMainLoopModel, restrictedModel }) {
    let l = modelCli === "default" || effectiveModel === undefined && initialMainLoopModel === null;
    if (R() && (restrictedModel !== undefined && !G0t(restrictedModel) || l && (d8().attribution === "enforced" || N()))) {
        return "allowlist";
    }
    if (l && d8().attribution === "env" && C("ANTHROPIC_DEFAULT_MODEL", model)) {
        return "settings_env_default";
    }
    let s = T(model) ? "remap" : undefined;
    if (modelCli) {
        return s;
    }
    if (effectiveModel !== undefined && agent?.model && agent.model !== "inherit") {
        let n = bO("agent");
        let u = !agentSelectedByCli && (n === null || d(n));
        if (h(agent) || u) {
            return "agent";
        }
        return s;
    }
    if (effectiveModel !== undefined) {
        return s;
    }
    let b = !agentSelectedByCli && d(bO("agent")) && Lo().some((n)=>!d(n) && fe(n)?.agent !== undefined);
    let D = agent !== undefined && h(agent) && agents.some((n)=>n.agentType === agent.agentType && !h(n) && Boolean(n.model) && n.model !== "inherit");
    if (b || D) {
        return "agent";
    }
    if (M("ANTHROPIC_MODEL")) {
        return "settings_env";
    }
    if (!l && process.env.ANTHROPIC_MODEL) {
        return s;
    }
    if (d(bO("model"))) {
        return "settings";
    }
    return s;
}
function DMo(e) {
    return e || false;
}
function jin({ model, internal, explicitMode, droppedMode = false, pinnedDefault = false, settingsMode, settingsModeForwardable, autoSeedable, storedDefaultBar, otherChoiceTyped, carriedPlanHolds, repositoryModel, trustedPlanDisplaced }) {
    let u = !droppedMode && (explicitMode === undefined || pinnedDefault && explicitMode === "default");
    return {
        permissionMode: u ? settingsModeForwardable ? u ? settingsMode : undefined : undefined : explicitMode,
        action: "none"
    };
}
const v = Vdt.filter((e)=>/^ANTHROPIC_DEFAULT_[A-Z]+_MODEL$/.test(e));
function T(model) {
    return c().some((o)=>{
        let t = fe(o);
        let r = y(o);
        return [
            ...Object.values(t?.modelOverrides ?? {}),
            ...v.filter((i)=>M(i)).flatMap((i)=>w(r, i))
        ].some((i)=>S(i, model));
    });
}
function C(e, model) {
    return M(e) && c().some((t)=>w(y(t), e).some((r)=>S(r, model)));
}
function S(e, model) {
    return f(e) === f(model) || f(Dt(e)) === f(Dt(model));
}
function f(e) {
    return Ht(e.trim().toLowerCase()).trim();
}
function N() {
    return Lo().some((e)=>e !== "policySettings" && fe(e)?.enforceAvailableModels === true);
}
function R() {
    return fe("policySettings")?.availableModels === undefined && c().some((e)=>{
        let o = fe(e);
        return o?.availableModels !== undefined || o?.enforceAvailableModels !== undefined;
    });
}
function M(e) {
    return c().some((o)=>g(o, e)) && !g("flagSettings", e) && !g("policySettings", e);
}
function g(e, o) {
    return w(y(e), o).length > 0;
}
function y(e) {
    return iY(fe(e)?.env, e);
}
function w(e, o) {
    return Object.entries(e).filter(([t])=>t.toUpperCase() === o).map(([, t])=>t);
}
function h(e) {
    return d(e.source) || e.source === "plugin" || e.fromAdditionalDirectory === true;
}
function c() {
    return Lo().filter(d);
}
function d(e) {
    return e === "localSettings" || e === "projectSettings" && !S_();
}
export { G0t, Bin, DMo, jin };
