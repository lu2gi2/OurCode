import { Ee, UO, Lsn, NN, Hq, H0, fy } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Ec, pC } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { kt, yF } from "/$bunfs/root/chunk-0ycjphb5.js";
import { xF, yjn } from "/$bunfs/root/chunk-6g4165br.js";
import { Y_, $l, Oc, qen } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { It, Kt } from "/$bunfs/root/chunk-4r6b8efh.js";
import { yt, Q$ } from "/$bunfs/root/chunk-f41czxrs.js";
import { Gh, Eco, wv, w4e } from "/$bunfs/root/chunk-38fr02qr.js";
import { Vi } from "/$bunfs/root/chunk-kjg6txrm.js";
import { jS, i8t, a8t } from "/$bunfs/root/chunk-tsssve1m.js";
import { Yne } from "/$bunfs/root/chunk-53bavyda.js";
import { jSt, uet, s2, I_ } from "/$bunfs/root/chunk-kasbfbhj.js";
import { vp } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { Ak, Jo } from "/$bunfs/root/chunk-62g69mqc.js";
import { Xo } from "/$bunfs/root/chunk-gsdht23v.js";
import { Ufr } from "/$bunfs/root/chunk-2eh7h0gt.js";
import { xE } from "/$bunfs/root/chunk-8fa0475h.js";
import { fu } from "/$bunfs/root/chunk-r8t1dcyg.js";
import { o, M, T, u, De, U } from "/$bunfs/root/chunk-smx21d0k.js";
function O(from, e) {
    for (let n of Object.values(e.tasks)){
        if (vp(n) && n.identity.agentName === from) {
            return n.id;
        }
    }
}
function I(r, e, n) {
    e.update(r, (a)=>({
            ...a,
            awaitingPlanApproval: n !== null,
            pendingPlanApproval: n ? {
                requestId: n.requestId,
                answered: false
            } : undefined
        }));
}
function Aqo(r, e, n, a) {
    let s = n.get(r);
    if (!s || !vp(s) || !s.awaitingPlanApproval) {
        return null;
    }
    switch(i8t(s.pendingPlanApproval, e)){
        case "mismatch":
            t(`[InProcessTeammate] Plan approval response ${_(e.requestId)} does not name the pending plan request ${_(s.pendingPlanApproval?.requestId)}; resolving the wait as a rejection`, {
                level: "warn"
            });
            f("plan_approval", "request_binding_mismatch");
            I(r, n, null);
            return a8t(e);
        case "unbound":
            f("plan_approval", "verdict_unbound");
            break;
        case "bound":
            g("plan_approval");
            break;
        case "already_answered":
            return null;
    }
    if (!e.approved) {
        I(r, n, null);
        return e;
    }
    let permissionMode = z(e.permissionMode);
    n.update(r, (m)=>({
            ...m,
            awaitingPlanApproval: false,
            pendingPlanApproval: undefined,
            permissionMode
        }));
    Ufr(s.identity.teamName, s.identity.agentName, permissionMode, a);
    return e;
}
function z(permissionMode) {
    let e = Ec(pC(permissionMode ?? "default"));
    if (e === "bypassPermissions" && xE()) {
        return "default";
    }
    if (e === "auto" && !I_()) {
        return "default";
    }
    return e;
}
class A extends Error {
    constructor(r){
        super(r);
        this.name = "PlanPreconditionError";
    }
}
function __n(r) {
    if (!r || yF() !== "default") {
        return "";
    }
    return `

If this plan can be broken down into multiple independent tasks, consider spawning named teammates with the ${yt} tool (pass a \`name\`) to parallelize the work.`;
}
const N = `Use this tool when you are in plan mode and have finished writing your plan to the plan file and are ready for user approval.

## How This Tool Works
- You should have already written your plan to the plan file specified in the plan mode system message
- This tool does NOT take the plan content as a parameter - it will read the plan from the file you wrote
- This tool simply signals that you're done planning and ready for the user to review and approve
- The user will see the contents of your plan file when they review it

## When to Use This Tool
IMPORTANT: Only use this tool when the task requires planning the implementation steps of a task that requires writing code. For research tasks where you're gathering information, searching files, reading files or in general trying to understand the codebase - do NOT use this tool.

## Before Using This Tool
Ensure your plan is complete and unambiguous:
- If you have unresolved questions about requirements or approach, use ${Jo} first (in earlier phases)
- Once your plan is finalized, use THIS tool to request approval

**Important:** Do NOT use ${Jo} to ask "Is this plan okay?" or "Should I proceed?" - that's exactly what THIS tool does. ExitPlanMode inherently requests user approval of your plan.

## Examples

1. Initial task: "Search for and understand the implementation of vim mode in the codebase" - Do not use the exit plan mode tool because you are not planning the implementation steps of a task.
2. Initial task: "Help me implement yank mode for vim" - Use the exit plan mode tool after you have finished planning the implementation steps of the task.
3. Initial task: "Add a new feature to handle user authentication" - If unsure about auth method (OAuth, JWT, etc.), use ${Jo} first, then use exit plan mode tool after clarifying the approach.
`;
const q = p(()=>u({
        tool: U([
            "Bash"
        ]).describe("The tool this prompt applies to"),
        prompt: o().describe('Semantic description of the action, e.g. "run tests", "install dependencies"')
    }));
const R = p(()=>De({
        allowedPrompts: T(q()).optional().describe("Deprecated: no longer used.")
    }).passthrough());
const xe = p(()=>R().extend({
        plan: o().optional().describe("The plan content (injected by normalizeToolInput from disk)"),
        planFilePath: o().optional().describe("The plan file path (injected by normalizeToolInput)")
    }));
const j = p(()=>u({
        plan: o().nullable().describe("The plan that was presented to the user"),
        isAgent: M(),
        filePath: o().optional().describe("The file path where the plan was saved"),
        hasTaskTool: M().optional().describe("Whether the Agent tool is available in the current context"),
        planWasEdited: M().optional().describe("True when the user edited the plan (CCR web UI or Ctrl+G); determines whether the plan is echoed back in tool_result"),
        awaitingLeaderApproval: M().optional().describe("When true, the teammate has sent a plan approval request to the team leader"),
        requestId: o().optional().describe("Unique identifier for the plan approval request")
    }));
const gK = Kt({
    name: fu,
    searchHint: "present plan for approval and start coding (plan mode only)",
    backgrounding: "never",
    maxResultSizeChars: 100000,
    async description () {
        return "Prompts the user to exit plan mode and start coding";
    },
    async prompt () {
        return N;
    },
    get inputSchema () {
        return R();
    },
    get outputSchema () {
        return j();
    },
    userFacingName () {
        return "";
    },
    shouldDefer: true,
    isEnabled () {
        if (fy().length > 0 && Ee()) {
            return false;
        }
        if (Ee() && !jSt(UO())) {
            return false;
        }
        return true;
    },
    isConcurrencySafe () {
        return true;
    },
    isReadOnly () {
        return false;
    },
    requiresUserInteraction () {
        if (Oc()) {
            return false;
        }
        return true;
    },
    renderToolUseMessage () {
        return null;
    },
    create (r) {
        return {
            async validateInput (e) {
                let n = r;
                if (n.agentContext.agentType === "subagent" && n.agentContext.isBuiltIn === true && n.agentContext.subagentName === Q$ && (Oc() || n.permissions().mode === "plan")) {
                    return {
                        result: false,
                        message: "A fork cannot exit plan mode; that belongs to the session that forked it. Finish your part and report back.",
                        errorCode: 2
                    };
                }
                if (Oc()) {
                    return {
                        result: true
                    };
                }
                let mode = n.permissions().mode;
                if (mode !== "plan") {
                    i("tengu_exit_plan_mode_called_outside_plan", {
                        model: kt(n.mainLoopModel()),
                        mode: d(mode),
                        hasExitedPlanModeInSession: Lsn()
                    });
                    return {
                        result: false,
                        message: `You are not in plan mode. To enter plan mode, call the ${Ak} tool first. If your plan was already approved, continue with implementation.`,
                        errorCode: 1
                    };
                }
                return {
                    result: true
                };
            },
            async checkPermissions (updatedInput) {
                if (Oc()) {
                    return {
                        behavior: "allow",
                        updatedInput: s2(fu, updatedInput)
                    };
                }
                return {
                    behavior: "ask",
                    message: "Exit plan mode?",
                    updatedInput
                };
            },
            async call (e, { onProgress }) {
                let a = r;
                let s = null;
                let c = null;
                [s, c] = await Promise.all([
                    import("/$bunfs/root/chunk-zvcbvm0m.js"),
                    import("/$bunfs/root/chunk-hz9d3hfm.js")
                ]);
                let isAgent = !!a.agentId;
                let m = wv(a.agentId);
                let b = "plan" in e && typeof e.plan === "string" ? e.plan : undefined;
                Gh(m);
                let w = b ?? await w4e(a.agentId, a.storageV5);
                if (b !== undefined && m) {
                    await Eco(m, b, a.storageV5);
                    uet(a.storageV5);
                }
                if (Oc() && qen()) {
                    if (!w) {
                        throw new A(`No plan file found at ${m}. Please write your plan to this file before calling ExitPlanMode.`);
                    }
                    let from = Y_() || "unknown";
                    let y = $l();
                    let requestId = yjn("plan_approval", xF(from, y || "default"));
                    let k = {
                        type: "plan_approval_request",
                        from,
                        timestamp: new Date().toISOString(),
                        planFilePath: m,
                        planContent: w,
                        requestId
                    };
                    if (await jS("team-lead", {
                        from,
                        text: _(k),
                        timestamp: new Date().toISOString()
                    }, y, a.storageV5) === undefined) {
                        throw new A("Failed to write the plan approval request to the lead's inbox — plan not submitted; try again");
                    }
                    let E = O(from, {
                        tasks: a.tasks() ?? {}
                    });
                    if (E) {
                        I(E, a.taskRegistry, {
                            requestId
                        });
                    } else {
                        Vi().swarmPermissions.pendingPlanApproval = {
                            requestId,
                            answered: false
                        };
                    }
                    return {
                        data: {
                            plan: w,
                            isAgent: true,
                            filePath: m,
                            awaitingLeaderApproval: true,
                            requestId
                        }
                    };
                }
                let x = null;
                {
                    let l = a.permissions().prePlanMode ?? "default";
                    if (l === "auto" && !(c?.isAutoModeGateEnabled() ?? false)) {
                        let y = c?.getAutoModeUnavailableReason() ?? "circuit-breaker";
                        x = c?.getAutoModeUnavailableNotification(y) ?? "auto mode unavailable";
                        t(`[auto-mode gate @ ExitPlanModeV2Tool] prePlanMode=${l} but gate is off (reason=${y}) \u2014 falling back to default on plan exit`, {
                            level: "warn"
                        });
                    }
                }
                if (x) {
                    onProgress?.({
                        type: "notification",
                        notification: {
                            key: "auto-mode-gate-plan-exit-fallback",
                            text: `plan exit \u2192 default \xB7 ${x}`,
                            priority: "immediate",
                            color: "warning",
                            timeoutMs: 10000
                        }
                    });
                }
                let S = a.permissions();
                if (S.mode === "plan") {
                    NN(true);
                    Hq(true);
                    let l = S.prePlanMode ?? "default";
                    {
                        if (l === "auto" && !(c?.isAutoModeGateEnabled() ?? false)) {
                            l = "default";
                        }
                        let k = l === "auto";
                        let h = s?.isAutoModeActive() ?? false;
                        s?.setAutoModeActive(k);
                        if (h && !k) {
                            H0(true);
                        }
                    }
                    Yne({
                        from: "plan",
                        to: l,
                        trigger: "exit_plan_mode"
                    });
                    let y = l === "auto";
                    let v = S.strippedDangerousRules;
                    a.setToolPermissionContext((k)=>{
                        let h = k;
                        if (y) {
                            h = c?.stripDangerousPermissionsForAutoMode(h) ?? h;
                        } else if (v) {
                            h = c?.restoreDangerousPermissions(h) ?? h;
                        }
                        return {
                            ...h,
                            mode: l,
                            prePlanMode: undefined
                        };
                    });
                }
                let C = Xo() && a.tools.some((l)=>It(l, yt));
                return {
                    data: {
                        plan: w,
                        isAgent,
                        filePath: m,
                        hasTaskTool: C || undefined,
                        planWasEdited: b !== undefined || undefined
                    }
                };
            }
        };
    },
    mapToolResultToToolResultBlockParam ({ isAgent, plan, filePath, hasTaskTool, planWasEdited, awaitingLeaderApproval, requestId }, tool_use_id) {
        if (awaitingLeaderApproval) {
            return {
                type: "tool_result",
                content: `Your plan has been submitted to the team lead for approval.

Plan file: ${filePath}

**What happens next:**
1. Wait for the team lead to review your plan
2. You will receive a message in your inbox with approval/rejection
3. If approved, you can proceed with implementation
4. If rejected, refine your plan based on the feedback

**Important:** Do NOT proceed until you receive approval. Check your inbox for response.

Request ID: ${requestId}`,
                tool_use_id
            };
        }
        if (isAgent) {
            return {
                type: "tool_result",
                content: 'User has approved the plan. There is nothing else needed from you now. Please respond with "ok"',
                tool_use_id
            };
        }
        if (!plan || plan.trim() === "") {
            return {
                type: "tool_result",
                content: "User has approved exiting plan mode. You can now proceed.",
                tool_use_id
            };
        }
        let b = __n(Boolean(hasTaskTool));
        return {
            type: "tool_result",
            content: `User has approved your plan. You can now start coding. Start with updating your todo list if applicable

Your plan has been saved to: ${filePath}
You can refer back to it if needed during implementation.${b}

## ${planWasEdited ? "Approved Plan (edited by user)" : "Approved Plan"}:
${plan}`,
            tool_use_id
        };
    }
});
export { Aqo, __n, gK };
