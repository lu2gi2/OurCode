// EnterPlanMode tool definition — chunk-m0s4hfby.js [7016, 8594)
export const EnterPlanModeTool = {
  name: Ak,
  searchHint: "switch to plan mode to design an approach before coding",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return "Requests permission to enter plan mode for complex tasks requiring exploration and design";
  },
  async prompt() {
    return me();
  },
  get inputSchema() {
    return ve();
  },
  get outputSchema() {
    return we();
  },
  userFacingName() {
    return "";
  },
  shouldDefer: !0,
  isEnabled() {
    return gK.isEnabled();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  renderToolUseMessage() {
    return null;
  },
  create(e) {
    return {
      async validateInput(n) {
        if (e.agentId)
          return {
            result: !1,
            message: "Only the main session can enter plan mode.",
            errorCode: 1,
          };
        return { result: !0 };
      },
      async call(n) {
        if (e.agentId) throw Error("EnterPlanMode tool cannot be used in agent contexts");
        return (
          Xpe(e.permissions().mode, "plan"),
          e.setToolPermissionContext((r) =>
            jd(I_t(r), { type: "setMode", mode: "plan", destination: "session" }),
          ),
          {
            data: {
              message:
                "Entered plan mode. You should now focus on exploring the codebase and designing an implementation approach.",
            },
          }
        );
      },
    };
  },
  mapToolResultToToolResultBlockParam({ message: e }, n) {
    return {
      type: "tool_result",
      content: `${e}

In plan mode, you should:
1. Thoroughly explore the codebase to understand existing patterns
2. Identify similar features and architectural approaches
3. Consider multiple approaches and their trade-offs
4. Use ${Jo} if you need to clarify the approach
5. Design a concrete implementation strategy
6. When ready, use ${vw} to present your plan for approval

Remember: DO NOT write or edit any files yet. This is a read-only exploration and planning phase.`,
      tool_use_id: n,
    };
  },
};
