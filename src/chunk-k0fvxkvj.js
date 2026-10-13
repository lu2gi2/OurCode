import { Nh } from "/$bunfs/root/chunk-dn762950.js";
import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { lr } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { xF } from "/$bunfs/root/chunk-6g4165br.js";
import { JAs } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { It } from "/$bunfs/root/chunk-4r6b8efh.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { vp, Pn } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { Nx } from "/$bunfs/root/chunk-tsssve1m.js";
import { B0e, bOn } from "/$bunfs/root/chunk-az5m8ek6.js";
import { $A } from "/$bunfs/root/chunk-5ne6jp11.js";
import { hE, t_ } from "/$bunfs/root/chunk-59xjawk6.js";
function M(mode, planModeRequired) {
    if (planModeRequired) {
        return "plan";
    }
    if (mode === "plan" || mode === "dontAsk") {
        return "default";
    }
    return mode;
}
async function zUr(e, o) {
    let { name, teamName, prompt, color, planModeRequired, model } = e;
    let { taskRegistry } = o;
    let agentId = xF(name, teamName);
    let taskId = hE("in_process_teammate");
    let resumableAgentId = e.resumableAgentId ?? Nh(name);
    t(`[spawnInProcessTeammate] Spawning ${agentId} (taskId: ${taskId})`);
    try {
        let abortController = lr();
        let parentSessionId = K();
        let identity = {
            agentId,
            agentName: name,
            teamName,
            color,
            planModeRequired,
            parentSessionId,
            resumableAgentId
        };
        let teammateContext = JAs({
            agentId,
            agentName: name,
            teamName,
            color,
            planModeRequired,
            parentSessionId,
            hasTaskListTools: Nx() && o.rootToolSurface.tools.some((p)=>It(p, $A)),
            abortController
        });
        if (B0e()) {
            bOn(agentId, name, parentSessionId);
        }
        let C = e.description || `${prompt.substring(0, 50)}${prompt.length > 50 ? "..." : ""}`;
        let b = {
            ...t_(taskId, "in_process_teammate", C, o.toolUseId),
            type: "in_process_teammate",
            status: "running",
            identity,
            spawnedWith: e.spawnedWith,
            prompt: e.shownPrompt ?? prompt,
            model,
            abortController,
            awaitingPlanApproval: false,
            permissionMode: e.permissionMode ?? M(de(o).mode, planModeRequired),
            isIdle: false,
            lastReportedToolCount: 0,
            lastReportedTokenCount: 0,
            pendingUserMessages: []
        };
        taskRegistry.register(b);
        let T = o.getAppState();
        let i = T.agentNameRegistry.get(name);
        if (i !== resumableAgentId) {
            let p = i !== undefined ? T.tasks[i] : undefined;
            let u = i !== undefined && (p?.status === "running" || Pn(p) || Object.values(T.tasks).some((I)=>vp(I) && I.status === "running" && I.identity.resumableAgentId === i)) ? o.agentLifecycle.allocateName(name) : name;
            if (u !== name) {
                t(`[spawnInProcessTeammate] name "${name}" already routes to live ${i}; registry entry uses "${u}" instead`);
            }
            o.agentLifecycle.registerName(u, resumableAgentId);
        }
        t(`[spawnInProcessTeammate] Registered ${agentId} in AppState`);
        g("swarm_in_process_spawn");
        return {
            ok: true,
            agentId,
            identity,
            taskId,
            abortController,
            teammateContext
        };
    } catch (err) {
        let error = err instanceof Error ? err.message : "Unknown error during spawn";
        t(`[spawnInProcessTeammate] Failed to spawn ${agentId}: ${error}`);
        m("swarm_in_process_spawn", "spawn_failed");
        return {
            ok: false,
            agentId,
            error
        };
    }
}
export { zUr };
