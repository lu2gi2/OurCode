// TaskList tool definition — chunk-sfjcyk7w.js [151502, 152575)
export const TaskListTool = {
  name: ZC,
  searchHint: "list all tasks",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return Fr;
  },
  async prompt() {
    return jr();
  },
  get inputSchema() {
    return Mi();
  },
  get outputSchema() {
    return Ni();
  },
  userFacingName() {
    return "TaskList";
  },
  shouldDefer: !0,
  isEnabled() {
    return Fte();
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
  create({ storageV5: e }) {
    return {
      async call(r) {
        let n = yv(),
          s = (await IM(n, e)).filter((h) => !h.metadata?._internal),
          f = new Set(s.filter((h) => h.status === "completed").map((h) => h.id));
        return {
          data: {
            tasks: s.map((h) => ({
              id: h.id,
              subject: h.subject,
              status: h.status,
              owner: h.owner,
              blockedBy: h.blockedBy.filter((S) => !f.has(S)),
            })),
          },
        };
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    let { tasks: n } = e;
    if (n.length === 0) return { tool_use_id: r, type: "tool_result", content: "No tasks found" };
    let s = n.map((f) => {
      let y = f.owner ? ` (${f.owner})` : "",
        h =
          f.blockedBy.length > 0
            ? ` [blocked by ${f.blockedBy.map((S) => `#${S}`).join(", ")}]`
            : "";
      return `#${f.id} [${f.status}] ${f.subject}${y}${h}`;
    });
    return {
      tool_use_id: r,
      type: "tool_result",
      content: s.join(`
`),
    };
  },
};
