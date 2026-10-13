// TodoWrite tool definition — chunk-sfjcyk7w.js [72396, 73258)
export const TodoWriteTool = {
  name: Lx,
  searchHint: "manage the session task checklist",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  strict: !0,
  async description() {
    return Io;
  },
  async prompt({ model: e, leanPrompt: r }) {
    return Eo(e, r);
  },
  get inputSchema() {
    return zs();
  },
  get outputSchema() {
    return Ds();
  },
  userFacingName() {
    return "";
  },
  shouldDefer: !0,
  isEnabled() {
    return !Nx() && o2();
  },
  toAutoClassifierInput(e) {
    return `${e.todos.length} items`;
  },
  renderToolUseMessage() {
    return null;
  },
  create(e) {
    return {
      async call({ todos: r }) {
        let n = e.agentId ?? K(),
          s = e.todos.get(n) ?? [],
          f = r.every((y) => y.status === "completed");
        return (e.todos.set(n, f ? [] : r), { data: { oldTodos: s, newTodos: r } });
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return {
      tool_use_id: r,
      type: "tool_result",
      content:
        "Todos have been modified successfully. Ensure that you continue to use the todo list to track your progress. Please proceed with the current tasks if applicable",
    };
  },
};
