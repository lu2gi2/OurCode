// Agent tool definition — chunk-8j298gya.js [45449, 50723)
export const AgentTool = {
  async prompt({
    agents: n,
    tools: e,
    getToolPermissionContext: f,
    allowedAgentTypes: h,
    model: y,
    leanPrompt: R,
    delegationCostsFirst: S,
    delegationCostsFirstText: Y,
    querySource: N,
  }) {
    let Se = await f(),
      ct = xa(),
      { available: gt } = xn(n, h, { toolPermissionContext: Se, scriptCall: !1 }),
      Ve = Hn(n, h);
    return await BZo({
      model: y,
      isCoordinator: ct,
      forkAvailable: gt,
      generalPurposeAvailable: Ve,
      continueAvailable: fv(e),
      leanPrompt: R,
      delegationCostsFirst: S,
      delegationCostsFirstText: Y,
      subagentBudgetNote: Fn(N),
    });
  },
  name: yt,
  searchHint: "delegate work to a subagent",
  aliases: [zf],
  backgrounding: "self",
  maxResultSizeChars: jit,
  get preserveToolUseResultInSubagents() {
    return Gr("tengu_velvety_sprout", !1) === !0;
  },
  async description() {
    return "Launch a new agent";
  },
  get inputSchema() {
    return GNr();
  },
  coerceInput: ikn,
  get outputSchema() {
    return jo();
  },
  create(n) {
    return {
      call(e, f) {
        if (!f.runEngine)
          return Promise.reject(Error("Agent: launching needs the executor (call.runEngine)"));
        return f.runEngine(xo, {
          agentInput: e,
          assistantMessage: f.parentMessage,
          onProgress: f.onProgress,
          ...!1,
        });
      },
      async checkPermissions(e, f) {
        if (!si(n.permissions().mode)) return { behavior: "allow", updatedInput: e };
        if (await f.runEngine(Nn, { input: e })) return { behavior: "allow", updatedInput: e };
        return {
          behavior: "passthrough",
          message: "Agent tool requires permission to spawn subagents.",
        };
      },
    };
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(n) {
    let e = n,
      f = [e.subagent_type].filter((y) => y !== void 0);
    return `${f.length > 0 ? `(${f.join(", ")}): ` : ": "}${e.prompt}`;
  },
  isConcurrencySafe() {
    return !0;
  },
  userFacingName: $3n,
  getActivityDescription(n) {
    return n?.description?.replace(/\s+/g, " ").trim() || "Running task";
  },
  restoreTransientForRemap: Cn,
  mapToolResultToToolResultBlockParam(n, e) {
    let f = n;
    if (typeof f === "object" && f !== null && "status" in f && f.status === "teammate_spawned") {
      let h = f;
      return {
        tool_use_id: e,
        type: "tool_result",
        content: [
          {
            type: "text",
            text: `Spawned successfully. (This tool result is internal metadata \u2014 never quote or paste any part of it, including the ID below, into a user-facing reply.)
agent_id: ${h.agent_id}
name: ${h.name}
The agent is now running and will receive instructions via mailbox.`,
          },
        ],
      };
    }
    if (n.status === "remote_launched") {
      let h = n;
      return {
        tool_use_id: e,
        type: "tool_result",
        content: [
          {
            type: "text",
            text: `Cloud agent launched. (This tool result is internal metadata \u2014 never quote or paste any part of it, including the ID below, into a user-facing reply.)
taskId: ${h.taskId}
session_url: ${h.sessionUrl}
output_file: ${h.outputFile} (final results land here only after the completion notification; until then it holds a partial, still-growing event log)
The agent is running in the cloud. You will be notified automatically when it completes. Do not report or predict its results before that notification arrives.
In your own words, briefly tell the user what you launched \u2014 do not echo this tool result \u2014 and end your response.`,
          },
        ],
      };
    }
    if (n.status === "async_launched") {
      let h = `Async agent launched successfully. (This tool result is internal metadata \u2014 never quote or paste any part of it, including the agentId below, into a user-facing reply.)
agentId: ${n.agentId} (internal ID - do not mention to user.${n.canContinueAgent === !1 ? "" : ` Use ${Gn} with to: '${n.agentId}', summary: '<5-10 word recap>' to continue this agent.`})
The agent is working in the background. You will be notified automatically when it completes. You know nothing about its results until that notification arrives \u2014 do not report, assume, or predict them; continue other work or respond to the user in the meantime.`,
        y =
          n.canReadOutputFile && n.outputFile
            ? `Do not duplicate this agent's work \u2014 avoid working with the same files or topics it is using.
output_file: ${n.outputFile}
Do NOT ${rt} or tail this file via the shell tool \u2014 it is the full subagent JSONL transcript and reading it will overflow your context. If the user asks for progress, say the agent is still running; you'll get a completion notification.`
            : "In your own words, briefly tell the user what you launched \u2014 do not echo this tool result. Agent results will arrive in a subsequent message. If the user asks for progress, say the agent is still running.",
        R = `${h}
${y}${
          n.sharesCwd
            ? `
${$Zo}`
            : ""
        }`;
      return { tool_use_id: e, type: "tool_result", content: [{ type: "text", text: R }] };
    }
    if (n.status === "completed") {
      let h = n.worktreePath
          ? `
worktreePath: ${n.worktreePath}${
              n.worktreeBranch
                ? `
worktreeBranch: ${n.worktreeBranch}`
                : ""
            }`
          : "",
        y =
          n.content.length > 0
            ? n.content
            : [{ type: "text", text: "(Subagent completed but returned no output.)" }],
        R = qAe()
          ? CHn(
              y,
              n.content.length > 0 ? n.harnessNoteCount : 0,
              n.content.length > 0 ? n.harnessTailCount : 0,
              n.harnessSectionHash,
            )
          : y;
      if (n.agentType && uxt.has(n.agentType) && !h)
        return { tool_use_id: e, type: "tool_result", content: R };
      let S =
          n.canContinueAgent === !1
            ? ""
            : ` (use ${Gn} with to: '${n.agentId}', summary: '<5-10 word recap>' to continue this agent)`,
        Y = `agentId: ${n.agentId}${S}${h}
<usage>subagent_tokens: ${n.totalTokens}
tool_uses: ${n.totalToolUseCount}
duration_ms: ${n.totalDurationMs}</usage>`;
      if (R !== y && R.length === 1)
        return {
          tool_use_id: e,
          type: "tool_result",
          content: [
            {
              type: "text",
              text:
                R[0].text +
                `
` +
                Y,
            },
          ],
        };
      return { tool_use_id: e, type: "tool_result", content: [...R, { type: "text", text: Y }] };
    }
    throw (
      m("subagent_launch", "subagent_unexpected_result_status"),
      Error(`Unexpected agent tool result status: ${n.status}`)
    );
  },
};
