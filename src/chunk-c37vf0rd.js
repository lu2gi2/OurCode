import { So } from "/$bunfs/root/chunk-dn762950.js";
import { Xe, Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Ye } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { HZ, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { hv } from "/$bunfs/root/chunk-zbt5nceg.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Rnt, bM } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { la, yR, Ju, C6e, bF } from "/$bunfs/root/chunk-0ycjphb5.js";
import { lr, oxe, gi } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { cC } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { It } from "/$bunfs/root/chunk-4r6b8efh.js";
import { de, qu } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { Zp } from "/$bunfs/root/chunk-k5fhce8z.js";
import { lEn, FSt, dD, Lae, YU, Xa, JHe, GK, utt, rne, H8r, kI, Lp, xe, Yl, UDe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Zot } from "/$bunfs/root/chunk-zz7dyws3.js";
import { SA, EX } from "/$bunfs/root/chunk-8wvdsmns.js";
import { rqo } from "/$bunfs/root/chunk-vjaqbp0v.js";
import { SEe } from "/$bunfs/root/chunk-8rrrx3fb.js";
import { Ws } from "/$bunfs/root/chunk-59xjawk6.js";
import { Ro } from "/$bunfs/root/chunk-5aqxznmv.js";
import { e7 } from "/$bunfs/root/chunk-ywnn3sze.js";
function Tyn(o, r, n) {
    if (n || r.spawnedByWorkflowRunId !== undefined || e7() || Ee()) {
        return false;
    }
    return o.background ?? true;
}
async function Ayn({ agentId, agentDefinition, command, description, prompt, promptMessages, context, canUseTool, getAppState, permissionLayers, readFileState, availableTools, webFetchReadmissionAllowed, spawnedBySkill, recordInvocationOnSuccess, frozenCommandDenies }) {
    let { taskRegistry } = context;
    let startTime = Date.now();
    let description_1 = description.length > 50 ? `${ne(description, 49)}…` : description;
    let S = Ju(context.agentContext) + 1;
    let v = YU(agentDefinition.model, qu(context), command.model, de(context).mode);
    let _ = ()=>{
        if (context.abortController.signal.aborted) {
            if (gi(context.abortController.signal.reason) !== "interrupt") {
                throw new Ye;
            }
        }
        for (let m of Object.values(taskRegistry.all())){
            if (m.type === "local_agent" && !Ws(m.status) && m.forkedSkillName === command.name) {
                f("subagent_launch", "forked_skill_live_duplicate");
                return true;
            }
        }
        return false;
    };
    if (_()) {
        return null;
    }
    let U = hv();
    if (S > U) {
        f("subagent_launch", "forked_skill_depth_cap");
        return null;
    }
    let F = {
        skillName: command.name,
        attributionName: spawnedBySkill,
        ...agentDefinition.effort !== undefined && {
            effort: agentDefinition.effort
        },
        ...frozenCommandDenies !== undefined && frozenCommandDenies.length > 0 && {
            frozenCommandDenies: [
                ...frozenCommandDenies
            ]
        }
    };
    if (!lEn().safeParse(F).success) {
        f("subagent_launch", "forked_skill_scoping_unpersistable");
        return null;
    }
    try {
        await rqo(So(agentId), F, context.storageV5);
    } catch (error) {
        P(error);
        f("subagent_launch", "forked_skill_scoping_write_failed");
        return null;
    }
    if (_()) {
        return null;
    }
    let ownerAgentId = GK(context.agentId, taskRegistry) ?? Xe();
    let M = utt(context, ownerAgentId);
    let R = rne({
        outputFileReadable: kI(context.options.tools),
        ownerCanContinueAgents: M,
        agentId,
        ownerAgentId,
        parentAgentId: context.agentId,
        spawnDepth: S,
        description: description_1,
        prompt,
        model: v,
        selectedAgent: agentDefinition,
        taskRegistry,
        toolUseId: context.toolUseId,
        forkedSkillName: command.name,
        sessionScratch: context.session.sessionScratch
    });
    let R_abortController = R.abortController;
    let h = context.agentLifecycle.allocateName(command.name);
    context.agentLifecycle.registerName(h, So(agentId));
    bM(GK(context.agentId, taskRegistry), `agent:${agentId}`, taskRegistry);
    let agentContext = {
        agentId,
        parentAgentId: context.agentId,
        depth: S,
        ...C6e(context) && {
            spawnedByMainThread: true
        },
        parentSessionId: cC(),
        agentType: "subagent",
        subagentName: agentDefinition.agentType,
        isBuiltIn: Xa(agentDefinition),
        displayName: h,
        isAsync: true,
        isBackgroundAgent: true,
        invocationKind: "spawn",
        invocationEmitted: false,
        ...bF(context.agentContext)
    };
    let metadata = {
        prompt,
        resolvedAgentModel: v,
        isBuiltInAgent: Xa(agentDefinition),
        startTime,
        agentType: agentDefinition.agentType,
        isAsync: true,
        agentDepth: S,
        callerCanContinueAgents: M,
        source: agentDefinition.source
    };
    yR(agentContext, ()=>EX({
            taskId: R.agentId,
            abortController: R_abortController,
            makeStream: (onCacheSafeParams, onQueryProgress, onStreamTokenEstimate)=>SA({
                    agentDefinition,
                    promptMessages,
                    toolUseContext: {
                        ...context,
                        getAppState,
                        permissionLayers
                    },
                    canUseTool,
                    isAsync: true,
                    querySource: "agent:custom",
                    spawnedBySkill,
                    spawnedByForkedSkill: true,
                    model: command.model,
                    onModelRestricted: SEe(spawnedBySkill, context.appendSystemMessage),
                    availableTools,
                    webFetchReadmissionAllowed,
                    override: {
                        agentId: So(agentId),
                        agentContext,
                        abortController: R_abortController,
                        readFileState
                    },
                    onCacheSafeParams,
                    onQueryProgress,
                    onStreamTokenEstimate,
                    description: description_1,
                    name: h
                }),
            metadata,
            description: description_1,
            toolUseContext: context,
            taskRegistry,
            agentIdForCleanup: agentId,
            enableSummarization: true,
            getWorktreeResult: async ()=>({}),
            onTerminalSuccess: recordInvocationOnSuccess
        }));
    g("subagent_launch");
    return {
        agentId,
        name: h
    };
}
function P(error) {
    t(`Failed to write forked-skill scoping sidecar: ${error}`);
}
function Cyn({ agentId, parentAgentId, spawnDepth, skillName, prompt, selectedAgent, taskRegistry, toolUseId, callerAbortController }) {
    if (!Zot()) {
        return {
            abortController: callerAbortController,
            remove () {}
        };
    }
    let abortController = lr();
    let b = oxe(callerAbortController, abortController);
    let C = Rnt(agentId, abortController);
    JHe(agentId);
    let y = `/${skillName}`;
    let u = H8r({
        agentId,
        ownerAgentId: GK(parentAgentId, taskRegistry) ?? Xe(),
        parentAgentId,
        spawnDepth,
        description: y,
        prompt,
        selectedAgent,
        toolUseId,
        abortController,
        forkWorker: true
    });
    taskRegistry.register(u);
    return {
        abortController,
        remove (A) {
            b();
            C();
            taskRegistry.remove(agentId);
            Zp(agentId);
            la(agentId, abortController.signal.aborted ? "stopped" : A, {
                toolUseId,
                summary: y,
                outputFile: u.outputFile,
                skipTranscript: true,
                ambient: true
            });
        }
    };
}
function VWr(o, r, n) {
    return o.filter((s)=>s.type === "prompt" && FSt(s, r) && Lae(s) && HZ(s.name) && !(s.context === "fork" && n !== undefined && dD(s) === n));
}
async function Wjt(o, r, n) {
    if (o.type !== "prompt" || o.unqualifiedName != null) {
        return null;
    }
    if (UDe().length === 0) {
        return null;
    }
    if (!n.options.tools.some((a)=>It(a, Ro))) {
        return null;
    }
    let s = VWr(await Lp(r, n.storageV5), o.name, n.options.spawnedBySkill);
    if (s.length === 0) {
        return null;
    }
    let p = s.map((a)=>{
        let e = a.name.slice(0, a.name.length - o.name.length - 1);
        return `- \`${a.name}\` \u2014 for files under ${e}/`;
    });
    i("tengu_skill_scoped_variant_note", {
        variant_count: s.length
    });
    return xe({
        content: Yl([
            `Directory-scoped variants of the "${o.name}" skill exist in this repo:`,
            ...p,
            `The bare name always resolves to this unscoped skill; the variants are reachable only by their exact qualified names. If the files you are working on are under a variant's directory, invoke that variant now with the ${Ro} tool and follow it instead \u2014 it carries that subtree's own instructions. If your changes span more than one variant's directory, run each matching variant.`
        ].join(`
`)),
        isMeta: true
    });
}
export { Tyn, Ayn, Cyn, VWr, Wjt };
