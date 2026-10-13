import { Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { GK } from "/$bunfs/root/chunk-kasbfbhj.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { vae, yYr } from "/$bunfs/root/chunk-gs3dthpm.js";
import { qOe } from "/$bunfs/root/chunk-d33gtej9.js";
import { SK } from "/$bunfs/root/chunk-7we8z6s5.js";
const u = 32;
function qWr(n) {
    if (n.publishContext !== "subagent" || n.context.agentId === undefined || n.context.teammateContext !== undefined) {
        return null;
    }
    let { publishContext } = vae({
        agentId: undefined,
        isNonInteractiveSession: Ee()
    });
    if (SK(publishContext)) {
        return publishContext;
    }
    return null;
}
function nJn(n, e) {
    let pendingSubagentArms = ee().live.pendingSubagentArms;
    let s = pendingSubagentArms.get(n) ?? [];
    let i = s.findIndex((o)=>o.slug === e.slug);
    if (i === -1) {
        s.push(e);
    } else {
        s[i] = e;
    }
    pendingSubagentArms.delete(n);
    pendingSubagentArms.set(n, s);
    let r = 0;
    for (let o of pendingSubagentArms.values()){
        r += o.length;
    }
    while(r > u){
        let [o, a] = pendingSubagentArms.entries().next().value;
        a.shift();
        if (a.length === 0) {
            pendingSubagentArms.delete(o);
        }
        r--;
        f("artifact_live_subscribe", "subagent_arm_evicted");
    }
}
function l(agentId) {
    let pendingSubagentArms = ee().live.pendingSubagentArms;
    let t = pendingSubagentArms.get(agentId) ?? [];
    pendingSubagentArms.delete(agentId);
    return t;
}
const m = 256;
function c(agentId) {
    let finishedSubagentAdopters = ee().live.finishedSubagentAdopters;
    finishedSubagentAdopters.delete(agentId);
    finishedSubagentAdopters.add(agentId);
    while(finishedSubagentAdopters.size > m){
        finishedSubagentAdopters.delete(finishedSubagentAdopters.values().next().value);
    }
}
function vjs({ agentId, context }) {
    c(agentId);
    let s = l(agentId);
    if (s.length === 0) {
        return;
    }
    let { publishContext } = vae({
        agentId: context.agentId,
        agentType: context.agentContext?.agentType,
        isNonInteractiveSession: context.options.isNonInteractiveSession
    });
    if (publishContext === "subagent" && context.agentId !== undefined) {
        let o = GK(context.agentId, context.taskRegistry) === context.agentId || !ee().live.finishedSubagentAdopters.has(context.agentId);
        for (let a of s){
            if (o) {
                nJn(context.agentId, a);
            } else {
                f("artifact_live_subscribe", "subagent_arm_orphaned");
            }
        }
        return;
    }
    if (!SK(publishContext)) {
        return;
    }
    let context_1 = {
        ...context,
        abortController: new AbortController
    };
    for (let o of s){
        qOe({
            ...o,
            publishContext,
            getKnownVer: yYr(context.getArtifactReadObservation, o.slug),
            context: context_1,
            adoptedPublish: true,
            announceArmlessEnd: true
        }).catch(()=>{});
    }
    g("artifact_live_subscribe", {
        subagent_publish_adopted: true,
        count: s.length,
        publish_context: d(publishContext)
    });
}
export { qWr, nJn, vjs };
