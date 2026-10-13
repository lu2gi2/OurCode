import { So, Nh } from "/$bunfs/root/chunk-dn762950.js";
import { Xe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { zn, yR, Ju, C6e, uz, bF } from "/$bunfs/root/chunk-0ycjphb5.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { cC } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { Bae, YU, qj, Pkn, utt, rne, BC, p2, kI, xe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { SA, EX } from "/$bunfs/root/chunk-8wvdsmns.js";
import { tte } from "/$bunfs/root/chunk-mq1r78aj.js";
import { SEe } from "/$bunfs/root/chunk-8rrrx3fb.js";
import { xa } from "/$bunfs/root/chunk-mddy60q9.js";
async function Fjt(prompt, e, a, o = {}) {
    let { extraMessages, forkOrigin, narrowCanUseTool } = o;
    if (e.getAppState().endedByModel) {
        m("subagent_launch", "subagent_fork_ended_by_model");
        return null;
    }
    if (xa()) {
        m("subagent_launch", "subagent_fork_coordinator_mode");
        return null;
    }
    let e_renderedSystemPrompt = e.renderedSystemPrompt;
    if (!e_renderedSystemPrompt) {
        e_renderedSystemPrompt = await U(e);
        if (!e_renderedSystemPrompt) {
            m("subagent_launch", "subagent_fork_prompt_missing");
            return null;
        }
    }
    let r = e.agentLifecycle.allocateName(_(o.nameHint ?? prompt));
    let d = (typeof o.description === "function" ? o.description(r) : o.description ?? prompt).replace(/\s+/g, " ").trim();
    let description = d.length > 50 ? `${ne(d, 49)}…` : d;
    let n = Nh(r);
    let { taskRegistry } = e;
    let startTime = Date.now();
    let f = Ju(e.agentContext) + 1;
    let y = YU(qj.model, e.options.mainLoopModel, "inherit", de(e).mode);
    let ownerAgentId = Xe();
    let S = utt(e, ownerAgentId);
    let c = rne({
        outputFileReadable: kI(e.options.tools),
        ownerCanContinueAgents: S,
        agentId: n,
        ownerAgentId,
        spawnDepth: f,
        description,
        prompt,
        model: y,
        selectedAgent: qj,
        taskRegistry,
        toolUseId: e.toolUseId,
        sessionScratch: e.session.sessionScratch
    });
    let c_abortController = c.abortController;
    e.agentLifecycle.registerName(r, So(n));
    if (narrowCanUseTool) {
        zn().canUseToolNarrowings.set(n, narrowCanUseTool);
    }
    zn().agentSpawned.emit({
        agentId: n,
        agentType: qj.agentType,
        parentAgentId: e.agentId,
        taskRegistry
    });
    let metadata = {
        prompt,
        resolvedAgentModel: y,
        isBuiltInAgent: true,
        startTime,
        agentType: qj.agentType,
        isAsync: true,
        agentDepth: f,
        callerCanContinueAgents: S,
        source: qj.source
    };
    let agentContext = {
        agentId: n,
        parentAgentId: e.agentId,
        depth: f,
        ...C6e(e) && {
            spawnedByMainThread: true
        },
        parentSessionId: cC(),
        agentType: "subagent",
        subagentName: qj.agentType,
        displayName: r,
        isAsync: true,
        isBackgroundAgent: true,
        isBuiltIn: true,
        ...uz(e.agentContext) && {
            forkOfMainConversation: true
        },
        invocationKind: "spawn",
        invocationEmitted: false,
        ...bF(e.agentContext)
    };
    let onRunSettled = taskRegistry.takeConcurrencySlot();
    yR(agentContext, ()=>EX({
            taskId: c.agentId,
            abortController: c_abortController,
            makeStream: (onCacheSafeParams, onQueryProgress, onStreamTokenEstimate)=>SA({
                    onQueryProgress,
                    onStreamTokenEstimate,
                    onModelRestricted: SEe(qj.agentType, e.appendSystemMessage),
                    agentDefinition: qj,
                    promptMessages: [
                        ...extraMessages ?? [],
                        xe({
                            content: [
                                {
                                    type: "text",
                                    text: Pkn(prompt)
                                }
                            ]
                        })
                    ],
                    toolUseContext: e,
                    canUseTool: narrowCanUseTool ? narrowCanUseTool(a) : a,
                    isAsync: true,
                    querySource: tte(qj.agentType, true),
                    forkOrigin,
                    spawnedBySkill: e.options.spawnedBySkill ?? e.options.activeSkill,
                    spawnedByForkedSkill: e.options.spawnedByForkedSkill,
                    model: "inherit",
                    override: {
                        systemPrompt: e_renderedSystemPrompt,
                        parentSystemPrompt: true,
                        agentId: So(c.agentId),
                        agentContext,
                        abortController: c_abortController,
                        requireCanUseTool: narrowCanUseTool ? true : undefined
                    },
                    availableTools: e.options.tools,
                    forkContextMessages: e.messages,
                    useExactTools: true,
                    onCacheSafeParams,
                    description,
                    name: r
                }),
            metadata,
            description,
            toolUseContext: e,
            taskRegistry,
            agentIdForCleanup: n,
            enableSummarization: true,
            getWorktreeResult: async ()=>({}),
            onRunSettled
        }));
    g("subagent_launch");
    return {
        agentId: n,
        name: r
    };
}
async function U(t) {
    let e = t.getAppState();
    let mainThreadAgentDefinition = e.agent ? e.agentDefinitions.activeAgents.find((l)=>l.agentType === e.agent) : undefined;
    let defaultSystemPrompt = await BC(t.options.tools, t.options.mainLoopModel);
    return p2({
        mainThreadAgentDefinition,
        toolUseContext: t,
        customSystemPrompt: t.options.customSystemPrompt,
        defaultSystemPrompt,
        appendSystemPrompt: t.options.appendSystemPrompt,
        skillsPersistencePrompt: Bae(t.options.tools)
    });
}
function _(t) {
    return t.trim().split(/\s+/).slice(0, 3).join("-").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "fork";
}
export { Fjt };
