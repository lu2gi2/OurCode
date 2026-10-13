// ShowOnboardingRolePicker tool definition — chunk-sfjcyk7w.js [33402, 34197)
export const ShowOnboardingRolePickerTool = {
  name: Qye,
  searchHint: "show the Cowork onboarding role picker",
  backgrounding: "never",
  maxResultSizeChars: ro,
  get inputSchema() {
    return Qn();
  },
  get outputSchema() {
    return Zn();
  },
  isEnabled: Jn,
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  requiresUserInteraction() {
    return !0;
  },
  admitCardAnswer: no,
  async description() {
    return mcs;
  },
  async prompt() {
    return gcs;
  },
  toAutoClassifierInput() {
    return "show onboarding role picker";
  },
  create() {
    return {
      async checkPermissions(e) {
        return { behavior: "ask", message: "Pick your role?", updatedInput: {} };
      },
      async call(e) {
        let { role: r, dismissed: n } = e;
        return {
          data: {
            ...(typeof r === "string" && r.trim() !== "" && { role: r }),
            ...(typeof n === "boolean" && { dismissed: n }),
          },
        };
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return { tool_use_id: r, type: "tool_result", content: _(e) };
  },
  renderToolUseMessage() {
    return null;
  },
};
