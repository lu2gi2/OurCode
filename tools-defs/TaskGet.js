// TaskGet tool definition — chunk-sfjcyk7w.js [142341, 143450)
export const TaskGetTool = {
  name: dQ,
  searchHint: "retrieve a task by ID",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return Pr;
  },
  async prompt() {
    return zr;
  },
  get inputSchema() {
    return Pi();
  },
  get outputSchema() {
    return zi();
  },
  userFacingName() {
    return "TaskGet";
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
  toAutoClassifierInput(e) {
    return e.taskId;
  },
  renderToolUseMessage() {
    return null;
  },
  create({ storageV5: e }) {
    return {
      async call({ taskId: r }) {
        let n = yv(),
          s = await Q2(n, r, e);
        if (!s) return { data: { task: null } };
        return {
          data: {
            task: {
              id: s.id,
              subject: s.subject,
              description: s.description,
              status: s.status,
              blocks: s.blocks,
              blockedBy: s.blockedBy,
            },
          },
        };
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    let { task: n } = e;
    if (!n) return { tool_use_id: r, type: "tool_result", content: "Task not found" };
    let s = [`Task #${n.id}: ${n.subject}`, `Status: ${n.status}`, `Description: ${n.description}`];
    if (n.blockedBy.length > 0) s.push(`Blocked by: ${n.blockedBy.map((f) => `#${f}`).join(", ")}`);
    if (n.blocks.length > 0) s.push(`Blocks: ${n.blocks.map((f) => `#${f}`).join(", ")}`);
    return {
      tool_use_id: r,
      type: "tool_result",
      content: s.join(`
`),
    };
  },
};
