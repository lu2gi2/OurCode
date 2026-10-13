// CronDelete tool definition — chunk-fv9rce2t.js [5855, 6712)
export const CronDeleteTool = {
  name: $_,
  searchHint: "cancel a scheduled cron job",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  shouldDefer: !0,
  get inputSchema() {
    return s();
  },
  get outputSchema() {
    return i();
  },
  isEnabled() {
    return vE();
  },
  toAutoClassifierInput(e) {
    return e.id;
  },
  async description() {
    return Noo;
  },
  async prompt() {
    return $oo(Zye());
  },
  getPath() {
    return vAe();
  },
  create() {
    return {
      async validateInput(e) {
        let r = (await nre()).find((n) => n.id === e.id);
        if (!r) return { result: !1, message: `No scheduled job with id '${e.id}'`, errorCode: 1 };
        let a = lC();
        if (a && r.agentId !== a.agentId)
          return {
            result: !1,
            message: `Cannot delete cron job '${e.id}': owned by another agent`,
            errorCode: 2,
          };
        return { result: !0 };
      },
      async call({ id: e }) {
        return (await e_e([e]), { data: { id: e } });
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, t) {
    return { tool_use_id: t, type: "tool_result", content: `Cancelled job ${e.id}.` };
  },
  renderToolUseMessage(e) {
    return e.id ?? "";
  },
};
