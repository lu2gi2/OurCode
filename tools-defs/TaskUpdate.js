// TaskUpdate tool definition — chunk-sfjcyk7w.js [146653, 149633)
export const TaskUpdateTool = {
  name: $A,
  searchHint: "update a task",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return Lr;
  },
  async prompt() {
    return Mr;
  },
  get inputSchema() {
    return Di();
  },
  get outputSchema() {
    return Li();
  },
  userFacingName() {
    return "TaskUpdate";
  },
  coerceInput: qet,
  shouldDefer: !0,
  isEnabled() {
    return Fte();
  },
  isConcurrencySafe() {
    return !0;
  },
  toAutoClassifierInput(e) {
    let r = qet(e)?.input ?? e,
      n = [r.taskId];
    if (r.status) n.push(r.status);
    if (r.subject) n.push(r.subject);
    return n.join(" ");
  },
  renderToolUseMessage() {
    return null;
  },
  create(e) {
    return {
      async call(
        {
          taskId: r,
          subject: n,
          description: s,
          activeForm: f,
          status: y,
          owner: h,
          addBlocks: S,
          addBlockedBy: w,
          metadata: C,
        },
        { signal: v, onProgress: R },
      ) {
        let N = yv();
        R?.({ type: "set_expanded_view", expandedView: "tasks" });
        let O = e.storageV5,
          B = await Q2(N, r, O);
        if (!B)
          return { data: { success: !1, taskId: r, updatedFields: [], error: "Task not found" } };
        let Y = [],
          P = {};
        if (n !== void 0 && n !== B.subject) ((P.subject = n), Y.push("subject"));
        if (s !== void 0 && s !== B.description) ((P.description = s), Y.push("description"));
        if (f !== void 0 && f !== B.activeForm) ((P.activeForm = f), Y.push("activeForm"));
        if (h !== void 0 && h !== B.owner) ((P.owner = h), Y.push("owner"));
        if (Xo() && y === "in_progress" && h === void 0 && !B.owner) {
          let G = Y_();
          if (G) ((P.owner = G), Y.push("owner"));
        }
        if (C !== void 0) ((P.metadata = BAt(B.metadata, C)), Y.push("metadata"));
        if (y !== void 0) {
          if (y === "deleted") {
            let G = await UAt(N, r, O);
            return {
              data: {
                success: G,
                taskId: r,
                updatedFields: G ? ["deleted"] : [],
                error: G ? void 0 : "Failed to delete task",
                statusChange: G ? { from: B.status, to: "deleted" } : void 0,
              },
            };
          }
          if (y !== B.status) {
            if (y === "completed") {
              let G = [],
                q = e.runTaskHooks(tEt, r, B.subject, B.description, Y_(), $l(), void 0, v);
              try {
                for await (let H of q) if (H.blockingError) G.push(e4t(H.blockingError));
              } catch (H) {
                if (!(H instanceof nc)) throw H;
                t("TaskCompleted hooks cancelled (control stream closed)");
              }
              if (G.length > 0)
                return {
                  data: {
                    success: !1,
                    taskId: r,
                    updatedFields: [],
                    error: G.join(`
`),
                  },
                };
            }
            ((P.status = y), Y.push("status"));
          }
        }
        if (Object.keys(P).length > 0) await xce(N, r, P, O);
        if (P.owner && Xo()) {
          let G = Y_() || "team-lead",
            q = kR(),
            H = _({
              type: "task_assignment",
              taskId: r,
              subject: B.subject,
              description: B.description,
              assignedBy: G,
              timestamp: new Date().toISOString(),
            });
          await jS(
            P.owner,
            { from: G, text: H, timestamp: new Date().toISOString(), color: q },
            N,
            O,
          );
        }
        if (S && S.length > 0) {
          let G = S.filter((q) => !B.blocks.includes(q));
          for (let q of G) await jAt(N, r, q, O);
          if (G.length > 0) Y.push("blocks");
        }
        if (w && w.length > 0) {
          let G = w.filter((q) => !B.blockedBy.includes(q));
          for (let q of G) await jAt(N, q, r, O);
          if (G.length > 0) Y.push("blockedBy");
        }
        return {
          data: {
            success: !0,
            taskId: r,
            updatedFields: Y,
            statusChange: P.status !== void 0 ? { from: B.status, to: P.status } : void 0,
          },
        };
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    let { success: n, taskId: s, updatedFields: f, error: y, statusChange: h } = e;
    if (!n) return { tool_use_id: r, type: "tool_result", content: y || `Task #${s} not found` };
    let S = `Updated task #${s} ${f.join(", ")}`;
    if (h?.to === "completed" && ER() && Xo())
      S += `

Task completed. Call TaskList now to find your next available task or see if your work unblocked others.`;
    return { tool_use_id: r, type: "tool_result", content: S };
  },
};
