import { Nh } from "/$bunfs/root/chunk-dn762950.js";
import { AS, Ee, UO, Lh, Xpe, R9, Q8e, aG } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { HZ, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Bb } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { xl, Kt } from "/$bunfs/root/chunk-4r6b8efh.js";
import { $be, W7t, $lt, yF, SS, Ju, bF, co, Jr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { mse } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ea } from "/$bunfs/root/chunk-75wzvwyz.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { jd } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { yY, hS } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { gNe } from "/$bunfs/root/chunk-9fvky64k.js";
import { C0n } from "/$bunfs/root/chunk-45f0zf8d.js";
import { x5, $re } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { I_t } from "/$bunfs/root/chunk-88awaqqw.js";
import { uk, a$, c3, FSt, dD, Dae, Lae, r2, twt, uD, Rkn, xkn, Rwt, lhe, Xae, che, Hkn, Dkn, Uet, Xa, Brr, v3, GQo, uKt, khe, _L, XK, tXr, Lp, YKt, XKt, WXr, MZo, HZo, Gtt, DZo, hEt, Cy, xe, vf, Wg } from "/$bunfs/root/chunk-kasbfbhj.js";
import { fye, kD, Ls, Mne, uos } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { vT, XTt, pce, iro, S4, o5, O3t, fce } from "/$bunfs/root/chunk-a5rabwn2.js";
import { Ak as name, Jo } from "/$bunfs/root/chunk-62g69mqc.js";
import { Mo, ROn, bW, _ce, hAe, MD } from "/$bunfs/root/chunk-rhjwzamj.js";
import { gK } from "/$bunfs/root/chunk-tn5qaff8.js";
import { jyt, Wyt } from "/$bunfs/root/chunk-45fqcvv8.js";
import { vX, d_n, ZOe, SA, HC, lze, eMe } from "/$bunfs/root/chunk-8wvdsmns.js";
import { Tyn, Ayn, Cyn, VWr, Wjt } from "/$bunfs/root/chunk-c37vf0rd.js";
import { r_n } from "/$bunfs/root/chunk-8rrrx3fb.js";
import { sre } from "/$bunfs/root/chunk-mddy60q9.js";
import { Ygs, Ro } from "/$bunfs/root/chunk-5aqxznmv.js";
import { vw } from "/$bunfs/root/chunk-r8t1dcyg.js";
import { pR } from "/$bunfs/root/chunk-qhgrdyz1.js";
import { rt } from "/$bunfs/root/chunk-xx1j2680.js";
import { o, M, T, u, De, Ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
function Se() {
    if (yF() === "default") {
        return " (use the Agent tool instead)";
    }
    return "";
}
function _e() {
    return `## What Happens in Plan Mode

In plan mode, you'll:
1. Thoroughly explore the codebase using ${uk() && xl() ? `\`find\`/${co}, \`grep\`/${Jr}, and ${rt}` : `${co}, ${Jr}, and ${rt}`}
2. Understand existing patterns and architecture
3. Design an implementation approach
4. Present your plan to the user for approval
5. Use ${Jo} if you need to clarify approaches
6. Exit plan mode with ${vw} when ready to implement

`;
}
function be() {
    let e = Se();
    return `Use this tool proactively when you're about to start a non-trivial implementation task. Getting user sign-off on your approach before writing code prevents wasted effort and ensures alignment. This tool transitions you into plan mode where you can explore the codebase and design an implementation approach for user approval.

## When to Use This Tool

**Prefer using EnterPlanMode** for implementation tasks unless they're simple. Use it when ANY of these conditions apply:

1. **New Feature Implementation**: Adding meaningful new functionality
   - Example: "Add a logout button" - where should it go? What should happen on click?
   - Example: "Add form validation" - what rules? What error messages?

2. **Multiple Valid Approaches**: The task can be solved in several different ways
   - Example: "Add caching to the API" - could use Redis, in-memory, file-based, etc.
   - Example: "Improve performance" - many optimization strategies possible

3. **Code Modifications**: Changes that affect existing behavior or structure
   - Example: "Update the login flow" - what exactly should change?
   - Example: "Refactor this component" - what's the target architecture?

4. **Architectural Decisions**: The task requires choosing between patterns or technologies
   - Example: "Add real-time updates" - WebSockets vs SSE vs polling
   - Example: "Implement state management" - Redux vs Context vs custom solution

5. **Multi-File Changes**: The task will likely touch more than 2-3 files
   - Example: "Refactor the authentication system"
   - Example: "Add a new API endpoint with tests"

6. **Unclear Requirements**: You need to explore before understanding the full scope
   - Example: "Make the app faster" - need to profile and identify bottlenecks
   - Example: "Fix the bug in checkout" - need to investigate root cause

7. **User Preferences Matter**: The implementation could reasonably go multiple ways
   - If you would use ${Jo} to clarify the approach, use EnterPlanMode instead
   - Plan mode lets you explore first, then present options with context

## When NOT to Use This Tool

Only skip EnterPlanMode for simple tasks:
- Single-line or few-line fixes (typos, obvious bugs, small tweaks)
- Adding a single function with clear requirements
- Tasks where the user has given very specific, detailed instructions
- Pure research/exploration tasks${e}

${_e()}## Examples

### GOOD - Use EnterPlanMode:
User: "Add user authentication to the app"
- Requires architectural decisions (session vs JWT, where to store tokens, middleware structure)

User: "Optimize the database queries"
- Multiple approaches possible, need to profile first, significant impact

User: "Implement dark mode"
- Architectural decision on theme system, affects many components

User: "Add a delete button to the user profile"
- Seems simple but involves: where to place it, confirmation dialog, API call, error handling, state updates

User: "Update the error handling in the API"
- Affects multiple files, user should approve the approach

### BAD - Don't use EnterPlanMode:
User: "Fix the typo in the README"
- Straightforward, no planning needed

User: "Add a console.log to debug this function"
- Simple, obvious implementation

User: "What files handle routing?"
- Research task, not implementation planning

## Important Notes

- This tool REQUIRES user approval - they must consent to entering plan mode
- If unsure whether to use it, err on the side of planning - it's better to get alignment upfront than to redo work
- Users appreciate being consulted before significant changes are made to their codebase
`;
}
function me() {
    return be();
}
const ve = p(()=>De({}));
const we = p(()=>u({
        message: o().describe("Confirmation that plan mode was entered")
    }));
const Gfn = Kt({
    name,
    searchHint: "switch to plan mode to design an approach before coding",
    backgrounding: "never",
    maxResultSizeChars: 100000,
    async description () {
        return "Requests permission to enter plan mode for complex tasks requiring exploration and design";
    },
    async prompt () {
        return me();
    },
    get inputSchema () {
        return ve();
    },
    get outputSchema () {
        return we();
    },
    userFacingName () {
        return "";
    },
    shouldDefer: true,
    isEnabled () {
        return gK.isEnabled();
    },
    isConcurrencySafe () {
        return true;
    },
    isReadOnly () {
        return true;
    },
    renderToolUseMessage () {
        return null;
    },
    create (e) {
        return {
            async validateInput (n) {
                if (e.agentId) {
                    return {
                        result: false,
                        message: "Only the main session can enter plan mode.",
                        errorCode: 1
                    };
                }
                return {
                    result: true
                };
            },
            async call (n) {
                if (e.agentId) {
                    throw Error("EnterPlanMode tool cannot be used in agent contexts");
                }
                Xpe(e.permissions().mode, "plan");
                e.setToolPermissionContext((r)=>jd(I_t(r), {
                        type: "setMode",
                        mode: "plan",
                        destination: "session"
                    }));
                return {
                    data: {
                        message: "Entered plan mode. You should now focus on exploring the codebase and designing an implementation approach."
                    }
                };
            }
        };
    },
    mapToolResultToToolResultBlockParam ({ message }, n) {
        return {
            type: "tool_result",
            content: `${message}

In plan mode, you should:
1. Thoroughly explore the codebase to understand existing patterns
2. Identify similar features and architectural approaches
3. Consider multiple approaches and their trade-offs
4. Use ${Jo} if you need to clarify the approach
5. Design a concrete implementation strategy
6. When ready, use ${vw} to present your plan for approval

Remember: DO NOT write or edit any files yet. This is a read-only exploration and planning phase.`,
            tool_use_id: n
        };
    }
});
function Ejo(e) {
    return gNe(e) || yY(e.source);
}
function l8n(e) {
    switch(e.type){
        case "generic-error":
        case "manifest-validation-error":
        case "path-not-found":
            if (e.plugin === undefined) {
                return e.path;
            }
            return undefined;
        default:
            return;
    }
}
const Ie = {
    "path-not-found": "path not found",
    "manifest-validation-error": "manifest invalid",
    "dependency-unsatisfied": "unmet dependency",
    "dependency-version-unsatisfied": "unmet dependency"
};
function Ae(errors) {
    return errors.flatMap((n)=>{
        let category = Ie[n.type] ?? "load error";
        let s = l8n(n);
        if (s !== undefined) {
            let c = n.type === "generic-error" ? n.manifestName : undefined;
            let a = hEt(s, hS(n.source) ?? "");
            return [
                {
                    names: c ? [
                        c,
                        a
                    ] : [
                        a
                    ],
                    category
                }
            ];
        }
        if (gNe(n)) {
            return [
                {
                    names: [
                        n.plugin
                    ],
                    category
                }
            ];
        }
        return [];
    });
}
function ce(e, errors, r) {
    let s = Ae(errors);
    if (s.length === 0) {
        return;
    }
    let c = e.indexOf(":");
    let a = c > 0 ? e.slice(0, c) : undefined;
    let S = a === undefined || r.has(a) ? undefined : s.find((l)=>l.names.includes(a));
    if (S !== undefined) {
        return `The plugin "${a}" did not load in this session (${S.category}): tell the user the plugin could not be loaded here, not that the skill is not installed.`;
    }
    let k = D(s.map((l)=>l.category)).join(", ");
    return `${s.length === 1 ? `1 plugin did not load in this session (${k}); if this skill belongs to it` : `${s.length} plugins did not load in this session (${k}); if this skill belongs to one of them`}, tell the user its plugin could not be loaded here, not that the skill is not installed.`;
}
function renderToolUseMessage({ skill }, { commands, teammateAuthorOf }) {
    if (!skill) {
        return null;
    }
    let s = skill.trim();
    let c = s.startsWith("/") ? s.substring(1) : s;
    let a = commands?.find((_)=>_.name === c);
    let S = a?.loadedFrom === "commands_DEPRECATED" ? `/${c}` : c;
    let k = teammateAuthorOf?.(a?.type === "prompt" ? a.source : undefined, c) ?? null;
    if (k) {
        return `${S} \xB7 by ${k}`;
    }
    return S;
}
function Me(e) {
    let n = new Map;
    let r = (s)=>Boolean(s.disableModelInvocation) || c3(s);
    for (let s of e){
        let c = n.get(s.name);
        if (c === undefined || r(c) && !r(s) && s.type === "prompt" && !(_ce(c) && !_ce(s))) {
            n.set(s.name, s);
        }
    }
    return [
        ...n.values()
    ];
}
function Ce(e) {
    if (!ea().claim(`skill_reserved_namespace_rule_held_back_${e}`)) {
        return;
    }
    f("skill_reserved_namespace", e === "nonholder" ? "nonholder_allow_rule" : "prefix_at_namespace_boundary", {
        interactive: !Ee(),
        host_prompt: UO() !== undefined
    });
}
async function ne(e) {
    let n = await Lp(AS(), e.storageV5);
    let r = e.mcpCommands();
    let s = Ygs(r.filter((S)=>S.type === "prompt" && S.loadedFrom === "mcp"), n);
    let c = fye();
    let a = r2(n, r);
    return Dae(Me([
        ...a,
        ...c,
        ...s
    ]));
}
function fe(e, n) {
    let r = e.filter(Lae);
    if (n) {
        return Mne(r, aG());
    }
    return r;
}
function ge(e, n) {
    return e.type === "prompt" && e.source === "plugin" && e.name !== n && (e.aliases?.includes(n) ?? false);
}
function oe(e, n, r) {
    let s = r.agentId === undefined;
    let c = Ls(e, n);
    if (c !== undefined) {
        let S = ge(c, e) ? fe(n, s) : [];
        if (S.includes(c)) {
            let candidates = S.filter((_)=>ge(_, e) || _.type === "prompt" && _.loadedFrom !== "syncedSkills" && _.name.endsWith(`:${e}`));
            if (candidates.length > 1) {
                return {
                    kind: "ambiguous",
                    command: undefined,
                    candidates
                };
            }
        }
        return {
            kind: "exact",
            command: c
        };
    }
    if (tXr(e) || n.some((S)=>FSt(S, e))) {
        return {
            kind: "none",
            command: undefined
        };
    }
    let a = uos(e, fe(n, s));
    switch(a.kind){
        case "unique":
            return {
                kind: "suggestion",
                command: undefined,
                suggestion: a.command
            };
        case "ambiguous":
            return {
                kind: "ambiguous",
                command: undefined,
                candidates: a.candidates
            };
        case "none":
            return {
                kind: "none",
                command: undefined
            };
    }
}
function Pe(e, n) {
    if (n.agentId !== undefined) {
        return false;
    }
    let r = DZo(e);
    for(let s = n.messages.length - 1; s >= n.turnStartIndex; s--){
        let c = n.messages[s];
        if (c.type !== "user" || c.isMeta || c.isCompactSummary || !SS(c.origin) || c.verifiedSlackHumanTurn === true || c.handedOff === true || c.textNotTyped === true) {
            continue;
        }
        let a = c.message.content;
        if (typeof a === "string") {
            if (a.includes(`<${Bb}>`)) {
                continue;
            }
        } else if (a.some((S)=>S.type === "tool_result")) {
            continue;
        }
        if (r.test(Wg(c) ?? "")) {
            return true;
        }
    }
    return false;
}
async function Re(e, n, args, context, canUseTool, parentMessage, S, onProgress) {
    let _ = Date.now();
    let agentId = Nh();
    let y = _L().has(n);
    let j = o5(e);
    let U = e.source === "bundled";
    let { sanitizedName, skillNameHash } = S4({
        rawName: n,
        canonicalName: e.name,
        isMcp: e.loadedFrom === "mcp",
        isBuiltIn: y,
        isBundled: U,
        isOfficial: j
    });
    let N = context.queryTracking?.depth ?? 0;
    let F = N > 0 ? "nested-skill" : "claude-proactive";
    let s_agentId = context.agentId;
    if (e.pluginInfo) {
        uD(e.pluginInfo.repository, "skill", twt(e, e.pluginInfo.pluginManifest.name));
    }
    i("tengu_skill_tool_invocation", {
        command_name: sanitizedName,
        _PROTO_skill_name: n,
        ...skillNameHash,
        execution_context: b("fork"),
        invocation_trigger: d(F),
        query_depth: N,
        ...context.queryTracking && {
            query_chain_id: ye(context.queryTracking.chainId)
        },
        ...iro(S, S !== undefined && XK().has(S)),
        ...s_agentId && {
            parent_agent_id: ye(s_agentId)
        },
        ...pce(e.source, e.loadedFrom, e.kind, e.createdBy),
        ...Wyt(e.source, n),
        attribution_shown: jyt(context.session, e.source, n) !== null,
        skill_content_chars: e.contentLength,
        ...false,
        ...e.pluginInfo && O3t(e),
        ...fce(e)
    });
    XTt(n, e, F);
    let w = {
        agentId,
        parentAgentId: context.agentId,
        depth: Ju(context.agentContext) + 1,
        agentType: "subagent",
        isAsync: false,
        isBackgroundAgent: context.agentContext.agentType === "main" ? false : context.agentContext.isBackgroundAgent,
        ...bF(context.agentContext)
    };
    let C = Tyn(e, context);
    let I = C || context.spawnedByWorkflowRunId !== undefined;
    let { modifiedGetAppState, contextLayers, recordInvocation, baseAgent, promptMessages, skillContent, forkReadFileState, availableTools, webFetchReadmissionAllowed, frozenCommandDenies } = await YKt(e, args || "", context, w, {
        replaceCommandRules: I,
        freezeCommandDenies: I,
        deferInvocationRecording: I
    });
    let Z = await Wjt(e, AS(), {
        options: {
            tools: HC(baseAgent, webFetchReadmissionAllowed ? v3(baseAgent, availableTools, de(context), {
                activeAgents: context.options.agentDefinitions.activeAgents
            }) : availableTools, C, false, false, 0, kD(context).mode).resolvedTools,
            spawnedBySkill: dD(e)
        },
        storageV5: context.storageV5
    });
    if (Z) {
        promptMessages.push(Z);
    }
    let Q = e.getEffort?.(args || "", context) ?? e.getDefaultEffort?.(args || "", context)?.value ?? e.effort;
    let L = Q !== undefined ? {
        ...baseAgent,
        effort: Q
    } : baseAgent;
    let W = [];
    t(`SkillTool executing forked skill ${n} with agent ${L.agentType}`);
    if (C) {
        let E = await Ayn({
            agentId,
            agentDefinition: L,
            command: e,
            description: `/${Mo(e)} ${args ?? ""}`.trim(),
            prompt: skillContent,
            promptMessages,
            context,
            canUseTool,
            getAppState: modifiedGetAppState,
            permissionLayers: contextLayers.length > 0 ? [
                ...context.permissionLayers ?? [],
                ...contextLayers
            ] : context.permissionLayers,
            readFileState: forkReadFileState,
            availableTools,
            webFetchReadmissionAllowed,
            spawnedBySkill: dD(e),
            recordInvocationOnSuccess: recordInvocation,
            frozenCommandDenies
        });
        if (E) {
            g("skill_invoke");
            return {
                data: {
                    success: true,
                    commandName: n,
                    status: "forked",
                    background: true,
                    agentId,
                    result: `Running in the background as @${E.name}`
                }
            };
        }
        recordInvocation();
    }
    let agentContext = {
        ...w,
        subagentName: L.agentType,
        isBuiltIn: Xa(L)
    };
    let forwardSubagentText = context.options.forwardSubagentText;
    let q = (message, prompt)=>{
        onProgress?.({
            type: "progress",
            toolUseID: `skill_${parentMessage.message.id}`,
            data: {
                message,
                type: "skill_progress",
                prompt,
                agentId,
                agentType: L.agentType,
                description: e.description
            }
        });
    };
    let te = Cyn({
        agentId,
        parentAgentId: s_agentId,
        spawnDepth: Ju(agentContext),
        skillName: Mo(e),
        prompt: skillContent,
        selectedAgent: L,
        taskRegistry: context.taskRegistry,
        toolUseId: context.toolUseId,
        callerAbortController: context.abortController
    });
    let X = "failed";
    try {
        let E = vf(promptMessages).find((P)=>P.type === "user");
        if (E) {
            q({
                ...E,
                isMeta: undefined
            }, skillContent);
        }
        let z = false;
        for await (let P of SA({
            agentDefinition: L,
            promptMessages,
            onModelRestricted: r_n(dD(e), onProgress),
            toolUseContext: {
                ...context,
                getAppState: modifiedGetAppState,
                permissionLayers: contextLayers.length > 0 ? [
                    ...context.permissionLayers ?? [],
                    ...contextLayers
                ] : context.permissionLayers
            },
            canUseTool,
            isAsync: false,
            querySource: "agent:custom",
            spawnedBySkill: dD(e),
            spawnedByForkedSkill: true,
            model: e.model,
            availableTools,
            webFetchReadmissionAllowed,
            override: {
                agentId,
                agentContext,
                abortController: te.abortController,
                shareFileHistory: true,
                readFileState: forkReadFileState
            }
        })){
            if (P.type === "api_metrics") {
                onProgress?.(P);
                continue;
            }
            if (P.type === "set_in_progress_tool_use_ids" || P.type === "spinner_mode" || P.type === "query_model_change") {
                continue;
            }
            W.push(P);
            if (vX(P)) {
                if (ZOe(context, P)) {
                    onProgress?.(d_n(P));
                }
                continue;
            }
            if (P.type !== "assistant" && P.type !== "user") {
                continue;
            }
            if (!onProgress) {
                continue;
            }
            if (P.type === "user" && P.isMeta && !z) {
                continue;
            }
            if (P.type === "assistant") {
                z = true;
            }
            for (let le of vf([
                P
            ])){
                let ue = le.message.content[0];
                if (!forwardSubagentText && ue?.type !== "tool_use" && ue?.type !== "tool_result") {
                    continue;
                }
                q(le, "");
            }
        }
        let ae = lze(Cy(W));
        if (!ae) {
            eMe(agentId, context);
            if (context.spawnedByWorkflowRunId !== undefined) {
                recordInvocation();
            }
        }
        let result = khe(W) + XKt(W, "Skill execution completed");
        W.length = 0;
        let ke = Date.now() - _;
        t(`SkillTool forked skill ${n} completed in ${ke}ms`);
        g("skill_invoke");
        X = ae ? "failed" : "completed";
        return {
            data: {
                success: true,
                commandName: n,
                status: "forked",
                agentId,
                result
            }
        };
    } finally{
        te.remove(X);
        Q8e(agentId);
    }
}
const Oe = p(()=>u({
        skill: o().describe("The name of a skill from the available-skills list. Do not guess names."),
        args: o().optional().describe("Optional arguments for the skill")
    }));
const $e = p(()=>{
    let e = u({
        success: M().describe("Whether the skill is valid"),
        commandName: o().describe("The name of the skill"),
        allowedTools: T(o()).optional().describe("Tools allowed by this skill"),
        model: o().optional().describe("Resolved model the skill turn runs on when a frontmatter model override took effect; omitted otherwise"),
        status: A("inline").optional().describe("Execution status"),
        readOnly: M().optional().describe("True when the skill instructions were loaded read-only (nothing was executed)")
    });
    let n = u({
        success: M().describe("Whether the skill completed successfully"),
        commandName: o().describe("The name of the skill"),
        status: A("forked").describe("Execution status"),
        agentId: o().describe("The ID of the sub-agent that executed the skill"),
        result: o().describe("The result from the forked skill execution"),
        background: M().optional().describe("True when the sub-agent was launched in the background: `result` describes the launch, and the skill outcome arrives later as a task notification.")
    });
    return Ue([
        e,
        n
    ]);
});
function Ne(toolUseContext) {
    return {
        storageV5: toolUseContext.storageV5,
        mcpCommands: ()=>toolUseContext.getAppState().mcp.commands
    };
}
async function Fe({ input: { skill, args }, toolUseContext, canUseTool, parentMessage, onProgress }) {
    if (toolUseContext.agentId !== undefined && a$(toolUseContext.agentId)) {
        m("subagent_launch", "skill_fork_spawner_stop_pending");
        throw Error("This agent has been stopped and its stop is still completing; it cannot launch skills.");
    }
    let S = skill.trim();
    let k = S.startsWith("/") ? S.substring(1) : S;
    let activeSkill = toolUseContext.options.activeSkill;
    let l = activeSkill ?? toolUseContext.options.spawnedBySkill;
    toolUseContext.options.activeSkill = k;
    let y = sre(toolUseContext);
    let j = false;
    try {
        let U = await ne(Ne(toolUseContext));
        let v = oe(k, U, toolUseContext);
        if (v.kind === "ambiguous") {
            let E = v.candidates.every((z)=>HZ(z.name)) ? `: ${v.candidates.map((z)=>z.name).join(", ")}` : "";
            throw new x(`Skill ${k} now matches several skills${E} \u2014 invoke one by its full name.`, "Skill tool: bare name ambiguous at dispatch");
        }
        let h = v.command;
        if (h) {
            toolUseContext.options.activeSkill = dD(h);
        }
        if (!y) {
            uKt(toolUseContext.session, h?.name ?? k, toolUseContext.storageV5, k);
            if (h?.type === "prompt" && h.pluginInfo) {
                vT(h.pluginInfo.repository);
            }
        }
        if (h?.type === "prompt" && ROn(h, args || "", toolUseContext) === "fork" && !y) {
            try {
                return await Re(h, k, args, toolUseContext, canUseTool, parentMessage, l, onProgress);
            } finally{
                toolUseContext.options.activeSkill = activeSkill;
            }
        }
        let N = `${toolUseContext.agentId ?? ""}:${h?.name ?? k}`;
        let F = R9().get(N);
        let { processPromptSlashCommand } = await import("/$bunfs/root/chunk-n6m33scw.js");
        let w = toolUseContext.toolUseId ?? We(parentMessage, Ro);
        let C = w !== undefined && Brr(parentMessage.handedOffLive)?.has(w) === true;
        let I = await processPromptSlashCommand(k, args || "", U, toolUseContext, y, C);
        if (!I.shouldQuery) {
            m("skill_invoke", "skill_invoke_process_failed");
            throw Error("Command processing failed");
        }
        let allowedTools = y ? [] : I.allowedTools || [];
        let skillModel = y ? undefined : $be(I.model);
        let V = y ? undefined : I.effort;
        let H = _L().has(k);
        let G = h?.type === "prompt" && h.source === "bundled";
        let J = h?.type === "prompt" && o5(h);
        let { sanitizedName, skillNameHash } = S4({
            rawName: k,
            canonicalName: h?.name ?? k,
            isMcp: h?.loadedFrom === "mcp",
            isBuiltIn: H,
            isBundled: G,
            isOfficial: J
        });
        let K = toolUseContext.queryTracking?.depth ?? 0;
        let se = K > 0 ? "nested-skill" : "claude-proactive";
        let Z = toolUseContext.agentId;
        let Q = h?.type === "prompt" ? h.source : undefined;
        let skill_body_chars = 0;
        for (let E of I.messages){
            skill_body_chars += xkn(E)?.length ?? 0;
        }
        if (h?.type === "prompt" && h.pluginInfo && !y) {
            uD(h.pluginInfo.repository, "skill", twt(h, h.pluginInfo.pluginManifest.name));
        }
        i("tengu_skill_tool_invocation", {
            command_name: sanitizedName,
            _PROTO_skill_name: k,
            ...skillNameHash,
            execution_context: y ? b("read-only") : b("inline"),
            invocation_trigger: d(se),
            query_depth: K,
            ...toolUseContext.queryTracking && {
                query_chain_id: ye(toolUseContext.queryTracking.chainId)
            },
            ...iro(l, l !== undefined && XK().has(l)),
            ...Z && {
                parent_agent_id: ye(Z)
            },
            ...pce(Q, h?.loadedFrom, h?.kind, h?.type === "prompt" ? h.createdBy : undefined),
            ...Wyt(Q, k),
            attribution_shown: jyt(toolUseContext.session, Q, k) !== null,
            ...h?.type === "prompt" && {
                skill_content_chars: h.contentLength
            },
            skill_body_chars,
            ...false,
            ...h?.type === "prompt" && h.pluginInfo && O3t(h),
            ...h?.type === "prompt" && fce(h)
        });
        XTt(k, h, se);
        let messages = I.messages.filter((E)=>{
            if (E.type === "progress") {
                return false;
            }
            if (E.type === "user" && "message" in E) {
                let z = E.message.content;
                if (typeof z === "string" && z.includes(`<${Bb}>`)) {
                    return false;
                }
            }
            return true;
        });
        let ee = y ? messages.map(xkn).find((E)=>E !== null) ?? undefined : undefined;
        let newMessages = je(Le({
            messages,
            contextMessages: toolUseContext.messages,
            commandName: k,
            args,
            priorContent: F?.content ?? ee,
            renderedContent: R9().get(N)?.content ?? ee
        }), w);
        t(`SkillTool returning ${newMessages.length} newMessages for skill ${k}`);
        g("skill_invoke");
        let contextLayers = [];
        if (allowedTools.length > 0) {
            contextLayers.push({
                kind: "allowed_tools",
                allowedTools
            });
        }
        let te = toolUseContext.getAppState();
        let X = skillModel && $lt({
            skillModel,
            mode: te.toolPermissionContext.mode,
            fastMode: te.fastMode ?? false
        }) ? W7t(skillModel, toolUseContext.options.mainLoopModel) : undefined;
        if (X) {
            contextLayers.push({
                kind: "model",
                mainLoopModel: X
            });
        }
        if (V !== undefined) {
            contextLayers.push({
                kind: "effort",
                effort: V
            });
        }
        j = true;
        return {
            data: {
                success: true,
                commandName: k,
                allowedTools: allowedTools.length > 0 ? allowedTools : undefined,
                model: X,
                ...y && {
                    readOnly: true
                }
            },
            newMessages,
            ...contextLayers.length > 0 && {
                contextLayers
            }
        };
    } finally{
        if (y || !j) {
            toolUseContext.options.activeSkill = activeSkill;
        }
    }
}
var eQe = Kt({
    name: Ro,
    searchHint: "invoke a slash-command skill",
    isEnabled () {
        return !Lh();
    },
    backgrounding: "never",
    maxResultSizeChars: 100000,
    get inputSchema () {
        return Oe();
    },
    get outputSchema () {
        return $e();
    },
    description: async ({ skill })=>`Execute skill: ${skill}`,
    prompt: async ()=>GQo(),
    toAutoClassifierInput: ({ skill })=>skill ?? "",
    create (e) {
        let n = e;
        return {
            async validateInput ({ skill }) {
                let s = skill.trim();
                if (!s) {
                    m("skill_invoke", "skill_invoke_empty_name");
                    return {
                        result: false,
                        message: `Invalid skill format: ${skill}`,
                        errorCode: 1
                    };
                }
                let c = s.startsWith("/");
                if (c) {
                    i("tengu_skill_tool_slash_prefix", {});
                }
                let a = c ? s.substring(1) : s;
                let S;
                let k = false;
                let _ = await ne(n);
                let l = oe(a, _, n);
                let l_command = l.command;
                let j = pR(a);
                if (Xae(n.session) && (!l_command || Uet(l_command)) && (l_command !== undefined || Dkn(j))) {
                    let v = await che(j);
                    if (!v.ok) {
                        S = v.reason;
                        k = v.withheld === true;
                    } else {
                        _ = await ne(n);
                        l = oe(a, _, n);
                        l_command = l.command;
                    }
                }
                if (l_command?.type === "prompt" && l_command.loadDefinition !== undefined) {
                    await l_command.loadDefinition();
                    _ = await ne(n);
                    l = oe(a, _, n);
                    l_command = l.command;
                }
                if (S !== undefined && (!l_command || Uet(l_command))) {
                    m("skill_invoke", k ? "skill_invoke_withheld" : "skill_invoke_not_materialized");
                    return {
                        result: false,
                        message: k ? `${Hkn(a)} Proceed without it.` : `Skill ${a} could not be downloaded (${S}). Proceed without it.`,
                        errorCode: 10
                    };
                }
                if (l_command && lhe(l_command)) {
                    m("skill_invoke", MD(l_command) ? "skill_invoke_host_catalog_withheld" : "skill_invoke_sync_vetoed");
                    return {
                        result: false,
                        message: `Unknown skill: ${a}`,
                        errorCode: 13
                    };
                }
                if (!l_command) {
                    let v = VWr(_, a, n.spawnedBySkill);
                    if (v.length > 0) {
                        let w = l.kind === "ambiguous" ? l.candidates.filter((C)=>!FSt(C, a) && HZ(C.name)) : [];
                        if (l.kind === "ambiguous") {
                            i("tengu_skill_tool_suffix_match", {
                                candidate_count: l.candidates.length
                            });
                        }
                        m("skill_invoke", "skill_invoke_not_found");
                        return {
                            result: false,
                            message: w.length > 0 ? `Unknown skill: ${a}. Several skills match that name: ${[
                                ...w,
                                ...v
                            ].map((C)=>C.name).join(", ")} \u2014 invoke one by its full name; the directory-scoped variants apply to the files under their directory.` : `Unknown skill: ${a}. Directory-scoped variants exist: ${v.map((C)=>C.name).join(", ")} \u2014 invoke the variant whose directory contains the files you are working on.`,
                            errorCode: 2
                        };
                    }
                    if (l.kind === "suggestion") {
                        i("tengu_skill_tool_suffix_match", {
                            candidate_count: 1
                        });
                        if (HZ(l.suggestion.name)) {
                            m("skill_invoke", "skill_invoke_not_found");
                            return {
                                result: false,
                                message: `Unknown skill: ${a}. Did you mean ${l.suggestion.name}? Invoke it by that full name.`,
                                errorCode: 2
                            };
                        }
                    }
                    if (l.kind === "ambiguous") {
                        i("tengu_skill_tool_suffix_match", {
                            candidate_count: l.candidates.length
                        });
                        let w = l.candidates.filter((I)=>!FSt(I, a));
                        let C = w.length === 1 ? w[0] : undefined;
                        if (w.length > 0 && w.every((I)=>HZ(I.name))) {
                            m("skill_invoke", "skill_invoke_not_found");
                            return {
                                result: false,
                                message: C !== undefined ? `Unknown skill: ${a}. Did you mean ${C.name}? Invoke it by that full name.` : `Unknown skill: ${a}. Several skills match that name: ${w.map((I)=>I.name).join(", ")} \u2014 invoke one by its full name.`,
                                errorCode: 2
                            };
                        }
                    }
                    let h = mse(a, _.map((w)=>({
                            name: Mo(w),
                            aliases: w.aliases
                        })), {
                        maxEditDistance: 2
                    });
                    m("skill_invoke", "skill_invoke_not_found");
                    let N = await C0n()?.catch(()=>{});
                    let F = N && ce(a, N.errors, new Set(N.enabled.map((w)=>w.name)));
                    let R = h ? `Unknown skill: ${a}. Did you mean ${h}?` : `Unknown skill: ${a}`;
                    return {
                        result: false,
                        message: F ? `${R}${h ? "" : "."} ${F}` : R,
                        errorCode: 2
                    };
                }
                if (l_command.type === "prompt" && (l_command.context === "fork" || l_command.getContext !== undefined && n.spawnedByForkedSkill === true) && n.spawnedBySkill === dD(l_command)) {
                    m("skill_invoke", "skill_invoke_fork_recursion");
                    i("tengu_skill_tool_fork_recursion_blocked", {});
                    return {
                        result: false,
                        message: `Skill ${a} is already executing in this forked context \u2014 you are the subagent running it. Execute the instructions in the skill body directly instead of re-invoking the ${Ro} tool.`,
                        errorCode: 9
                    };
                }
                let U = Gtt(l_command, {
                    commandName: a,
                    userTypedThisTurn: !sre(n) && Pe(a, {
                        agentId: n.agentId,
                        messages: n.messages(),
                        turnStartIndex: n.turnStartIndex
                    }),
                    isMainSession: n.agentId === undefined,
                    permissionContext: undefined
                });
                if (U !== null) {
                    switch(U.reason){
                        case "disable_model_invocation":
                            {
                                let { sanitizedName, skillNameHash } = S4({
                                    rawName: a,
                                    canonicalName: l_command.name,
                                    isMcp: l_command.loadedFrom === "mcp",
                                    isBuiltIn: _L().has(a),
                                    isBundled: l_command.type === "prompt" && l_command.source === "bundled",
                                    isOfficial: l_command.type === "prompt" && o5(l_command)
                                });
                                m("skill_invoke", "skill_invoke_model_disabled", {
                                    command_name: sanitizedName,
                                    ...skillNameHash
                                });
                                break;
                            }
                        case "not_loaded":
                            m("skill_invoke", "skill_invoke_not_materialized");
                            break;
                        case "not_allowlisted":
                            m("skill_invoke", "skill_invoke_not_allowlisted");
                            break;
                        case "override_disabled":
                            m("skill_invoke", U.killSwitchOnly ? "skill_invoke_bundled_skills_disabled" : "skill_invoke_override_disabled");
                            break;
                        case "not_prompt_type":
                            m("skill_invoke", "skill_invoke_not_prompt_type");
                            break;
                        case "mcp_prompt":
                            break;
                        case "deny_rule":
                            break;
                    }
                    return {
                        result: false,
                        message: U.message,
                        errorCode: U.errorCode
                    };
                }
                return {
                    result: true
                };
            },
            async checkPermissions ({ skill, args }) {
                let c = skill.trim();
                let ruleContent = c.startsWith("/") ? c.substring(1) : c;
                let S = n.permissions();
                let k = await ne(n);
                let _ = oe(ruleContent, k, n);
                let __command = _.command;
                let y = _.kind === "ambiguous" ? _.candidates : [
                    __command
                ];
                let j = $re(S, eQe, "deny");
                for (let [I, B] of j.entries()){
                    if (y.some((O)=>WXr(I, ruleContent, O))) {
                        return {
                            behavior: "deny",
                            message: "Skill execution blocked by permission rules",
                            decisionReason: {
                                type: "rule",
                                rule: B
                            }
                        };
                    }
                }
                let U = $re(S, eQe, "allow");
                let v;
                for (let [I, B] of U.entries()){
                    let O = MZo(I, ruleContent, __command);
                    if (O === "allow") {
                        return {
                            behavior: "allow",
                            updatedInput: {
                                skill,
                                args
                            },
                            decisionReason: {
                                type: "rule",
                                rule: B
                            }
                        };
                    }
                    if (O === "held-back-nonholder") {
                        v = {
                            rule: I,
                            kind: "nonholder"
                        };
                    } else if (O === "held-back-boundary") {
                        v ??= {
                            rule: I,
                            kind: "boundary"
                        };
                    }
                }
                if (__command?.type === "prompt" && (ze(__command) || sre(n))) {
                    return {
                        behavior: "allow",
                        updatedInput: {
                            skill,
                            args
                        },
                        decisionReason: undefined
                    };
                }
                let pluginName = __command?.type === "prompt" && __command.source === "plugin" ? __command.pluginInfo?.pluginManifest.name : undefined;
                let N = hAe() && bW(ruleContent) && !(__command !== undefined && _ce(__command));
                let F = v === undefined ? undefined : N ? "nonholder" : v.kind;
                if (F !== undefined && S.mode !== "bypassPermissions" && x5(S, eQe) === null) {
                    Ce(F);
                }
                let reason = v === undefined || F === undefined ? undefined : HZo(v.rule, __command?.name ?? ruleContent, F === "nonholder" ? {
                    kind: "nonholder",
                    pluginName
                } : {
                    kind: "boundary"
                });
                let decisionReason = reason === undefined ? undefined : {
                    type: "other",
                    reason
                };
                if (N) {
                    return {
                        behavior: "ask",
                        message: `Execute skill: ${ruleContent}${reason ? ` \u2014 ${reason}` : ""}`,
                        decisionReason,
                        suppressAlwaysAllowRule: true,
                        updatedInput: {
                            skill,
                            args
                        },
                        metadata: __command ? {
                            command: __command
                        } : undefined
                    };
                }
                let suggestions = [
                    {
                        type: "addRules",
                        rules: [
                            {
                                toolName: Ro,
                                ruleContent
                            }
                        ],
                        behavior: "allow",
                        destination: "localSettings"
                    },
                    {
                        type: "addRules",
                        rules: [
                            {
                                toolName: Ro,
                                ruleContent: `${ruleContent}:*`
                            }
                        ],
                        behavior: "allow",
                        destination: "localSettings"
                    }
                ];
                return {
                    behavior: "ask",
                    message: `Execute skill: ${ruleContent}${reason ? ` \u2014 ${reason}` : ""}`,
                    decisionReason,
                    suggestions,
                    updatedInput: {
                        skill,
                        args
                    },
                    metadata: __command ? {
                        command: __command
                    } : undefined
                };
            },
            call (input, s) {
                if (!s.runEngine) {
                    return Promise.reject(Error("Skill: invoking needs the executor (call.runEngine)"));
                }
                return s.runEngine(Fe, {
                    input,
                    parentMessage: s.parentMessage,
                    onProgress: s.onProgress
                });
            }
        };
    },
    mapToolResultToToolResultBlockParam (e, n) {
        if ("status" in e && e.status === "forked") {
            return {
                type: "tool_result",
                tool_use_id: n,
                content: e.background ? `Skill "${e.commandName}" launched (forked execution, running in the background).

${e.result}` : `Skill "${e.commandName}" completed (forked execution).

Result:
${e.result}`
            };
        }
        if ("readOnly" in e && e.readOnly) {
            return {
                type: "tool_result",
                tool_use_id: n,
                content: `Loaded skill instructions (read-only): ${e.commandName}. Nothing was executed; delegate execution to a worker.`
            };
        }
        return {
            type: "tool_result",
            tool_use_id: n,
            content: `Launching skill: ${e.commandName}`
        };
    },
    renderToolUseMessage
});
var Be = new Set([
    "type",
    "progressMessage",
    "contentLength",
    "contentHash",
    "getLoadedSkillMd",
    "argNames",
    "model",
    "effort",
    "source",
    "pluginInfo",
    "serverAttribution",
    "disableNonInteractive",
    "skillRoot",
    "skillDir",
    "context",
    "agent",
    "background",
    "getPromptForCommand",
    "getEffort",
    "getDefaultEffort",
    "onUserTypedArgs",
    "getContext",
    "formatForegroundForkResult",
    "declaredFields",
    "pluginSource",
    "metadata",
    "createdBy",
    "fallback",
    "unqualifiedName",
    "denyMatchNames",
    "bareNameReserved",
    "reservedLabels",
    "fromHostCatalog",
    "shedAliases",
    "name",
    "description",
    "menuDescription",
    "hasUserSpecifiedDescription",
    "isEnabled",
    "isHidden",
    "aliases",
    "subcommands",
    "subcommandsBareOnly",
    "isMcp",
    "mcpInfo",
    "argumentHint",
    "whenToUse",
    "paths",
    "version",
    "disableModelInvocation",
    "disableBridgeInvocation",
    "userInvocable",
    "loadedFrom",
    "immediate",
    "userFacingName",
    "getArgumentCompletions"
]);
function ze(__command) {
    for (let n of Object.keys(__command)){
        if (Be.has(n)) {
            continue;
        }
        let r = __command[n];
        if (r === undefined || r === null) {
            continue;
        }
        if (Array.isArray(r) && r.length === 0) {
            continue;
        }
        if (typeof r === "object" && !Array.isArray(r) && Object.keys(r).length === 0) {
            continue;
        }
        return false;
    }
    return true;
}
function Le({ messages, contextMessages, commandName, args, priorContent, renderedContent }) {
    if (!priorContent || !renderedContent) {
        return messages;
    }
    if (messages.some((l)=>l.type === "user" && l.promptShellHandOff !== undefined)) {
        return messages;
    }
    let S = Rwt(contextMessages, priorContent);
    if (!S) {
        return messages;
    }
    if (priorContent !== renderedContent) {
        let content = priorContent.endsWith(Rkn) ? `(Re-invocation of /${commandName} \u2014 the previously loaded copy was truncated by compaction; the full instructions follow.)` : `(Re-invocation of /${commandName} \u2014 the skill instructions were previously loaded; the arguments or dynamic output below are new.)`;
        return [
            xe({
                content,
                isMeta: true
            }),
            ...messages
        ];
    }
    let k = false;
    let _ = messages.map((l)=>{
        if (xkn(l) !== renderedContent) {
            return l;
        }
        k = true;
        return xe({
            content: S === "attachment" ? `Skill /${commandName} was loaded earlier (see the invoked-skills reminder above); this is a NEW invocation \u2014 follow those instructions now, including any setup steps.${args ? ` Arguments: ${args}` : ""}` : `Skill /${commandName} is already loaded above; instructions unchanged.${args ? ` Arguments: ${args}` : ""}`,
            isMeta: true
        });
    });
    if (k) {
        t(`SkillTool eliding byte-identical re-invocation of skill ${commandName}`);
    }
    return _;
}
function je(e, sourceToolUseID) {
    if (!sourceToolUseID) {
        return e;
    }
    return e.map((r)=>{
        if (r.type === "user") {
            return {
                ...r,
                sourceToolUseID
            };
        }
        return r;
    });
}
function We(parentMessage, n) {
    let r = parentMessage.message.content.find((s)=>s.type === "tool_use" && s.name === n);
    if (r && r.type === "tool_use") {
        return r.id;
    }
}
export { Gfn, Ejo, l8n, eQe };
