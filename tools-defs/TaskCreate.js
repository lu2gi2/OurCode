// TaskCreate tool definition — chunk-sfjcyk7w.js [140133, 141361)
export const TaskCreateTool = {
  name: Ek,
  searchHint: "create a task in the task list",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return Ir;
  },
  async prompt() {
    return Ar();
  },
  get inputSchema() {
    return Oi();
  },
  get outputSchema() {
    return xi();
  },
  userFacingName() {
    return "TaskCreate";
  },
  shouldDefer: !0,
  coerceInput: Hwt,
  validationErrorSteer: SJo,
  isEnabled() {
    return Fte();
  },
  isConcurrencySafe() {
    return !1;
  },
  toAutoClassifierInput(e) {
    return e.subject;
  },
  renderToolUseMessage() {
    return null;
  },
  create(e) {
    return {
      async call(
        { subject: r, description: n, activeForm: s, metadata: f },
        { signal: y, onProgress: h },
      ) {
        let S = await jds(
            yv(),
            {
              subject: r,
              description: n,
              activeForm: s,
              status: "pending",
              owner: void 0,
              blocks: [],
              blockedBy: [],
              metadata: f,
            },
            e.storageV5,
          ),
          w = [],
          C = e.runTaskHooks(Cir, S, r, n, Y_(), $l(), void 0, y);
        try {
          for await (let v of C) if (v.blockingError) w.push(LXr(v.blockingError));
        } catch (v) {
          if (!(v instanceof nc)) throw v;
          t("TaskCreated hooks cancelled (control stream closed)");
        }
        if (w.length > 0)
          throw (
            await UAt(yv(), S, e.storageV5),
            Error(
              w.join(`
`),
            )
          );
        return (
          h?.({ type: "set_expanded_view", expandedView: "tasks" }),
          { data: { task: { id: S, subject: r } } }
        );
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    let { task: n } = e;
    return {
      tool_use_id: r,
      type: "tool_result",
      content: `Task #${n.id} created successfully: ${n.subject}`,
    };
  },
};
