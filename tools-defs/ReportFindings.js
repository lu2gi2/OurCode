// ReportFindings tool definition — chunk-sfjcyk7w.js [61551, 62329)
export const ReportFindingsTool = {
  name: eR,
  searchHint: "report code-review findings as a structured list",
  backgrounding: "never",
  maxResultSizeChars: 256,
  strict: !0,
  async description() {
    return Goo;
  },
  async prompt() {
    return Goo;
  },
  get inputSchema() {
    return vo();
  },
  get outputSchema() {
    return As();
  },
  isReadOnly() {
    return !0;
  },
  isConcurrencySafe() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return `${e.findings.length} findings`;
  },
  userFacingName() {
    return "Code review";
  },
  renderToolUseMessage(e) {
    let r = e.findings?.length ?? 0;
    return `${e.level ?? "review"} \xB7 ${r} ${I(r, "finding")}`;
  },
  create() {
    return {
      async call({ findings: e, level: r }) {
        return { data: { count: e.length, level: r, findings: e } };
      },
    };
  },
  mapToolResultToToolResultBlockParam({ count: e }, r) {
    return {
      tool_use_id: r,
      type: "tool_result",
      content: e === 0 ? "No findings reported." : `${e} ${I(e, "finding")} reported.`,
    };
  },
};
