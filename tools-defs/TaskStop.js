// TaskStop tool definition — chunk-sfjcyk7w.js [37948, 40077)
export const TaskStopTool = {
  name: Uc,
  searchHint: "kill a running background task",
  aliases: [...cMn],
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  userFacingName: () => "Stop Task",
  get remoteExecution() {
    return { supported: Cj() };
  },
  get inputSchema() {
    return Cj() ? ms() : po();
  },
  get outputSchema() {
    return ps();
  },
  shouldDefer: !0,
  isConcurrencySafe() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return e.task_id ?? e.shell_id ?? "";
  },
  async description() {
    return "Stop a running background task by ID";
  },
  async prompt() {
    return Fcs;
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return { tool_use_id: r, type: "tool_result", content: _(e) };
  },
  renderToolUseMessage() {
    return "";
  },
  create(e) {
    return {
      async validateInput(r, n) {
        let { taskRegistry: s, namedAgents: f } = e;
        if (mu(r)) return { result: !1, message: LB(), errorCode: 3 };
        let y = r.task_id ?? r.shell_id;
        if (!y) return { result: !1, message: "Missing required parameter: task_id", errorCode: 1 };
        let h = n.remoteCall;
        if (h !== void 0)
          return h.ownBackgroundShells?.holds(y) === !0
            ? { result: !0 }
            : { result: !1, message: mo(y, h), errorCode: 1 };
        let S = s.get(y),
          w;
        if (!S) {
          let C = Pe(y, s, f);
          if (C.status === "ambiguous") return { result: !1, message: C.message, errorCode: 1 };
          if (C.status === "found") S = C.task;
          else w = C.suggestion;
        }
        if (!S) {
          let C = kX(e),
            v = Cj() ? e.toolState.get(zWe).find(y, C) : void 0;
          return {
            result: !1,
            message: v !== void 0 ? `Task ${y} needs ${Or}: "${v.hostName}".` : ot(y, s, f, w, C),
            errorCode: 1,
          };
        }
        if (S.status !== "running" && !kx(S) && !Au(S) && !rt(S, S.id))
          return {
            result: !1,
            message: `Task ${y} is not running (status: ${S.status})`,
            errorCode: 3,
          };
        return { result: !0 };
      },
      async call({ task_id: r, shell_id: n }, s) {
        let { taskRegistry: f, setTaskKillState: y, namedAgents: h } = e,
          S = r ?? n;
        if (!S) throw Error("Missing required parameter: task_id");
        let w = s.remoteCall;
        if (w !== void 0)
          return {
            data: {
              message:
                w.ownBackgroundShells?.stop(S) === !0
                  ? `Successfully stopped background command ${S} on ${w.origin.hostName}`
                  : mo(S, w),
              task_id: S,
              task_type: "local_bash",
            },
          };
        let C = await Pve(S, {
          taskRegistry: f,
          setAppState: y,
          session: e.session,
          getAppState: h,
          callerAgentId: kX(e),
          killedBy: "parent",
          storageV5: e.storageV5,
        });
        return {
          data: {
            message: C.note
              ? `Task ${C.taskId} ${C.note}`
              : `Successfully stopped task: ${C.taskId} (${C.command})`,
            task_id: C.taskId,
            task_type: C.taskType,
            command: C.command,
          },
        };
      },
    };
  },
};
