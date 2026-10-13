// SendFeedback tool definition — chunk-sfjcyk7w.js [85106, 89115)
export const SendFeedbackTool = {
  name: Uo,
  backgrounding: "never",
  maxResultSizeChars: 1000,
  searchHint: "draft product or model-behavior feedback report queue",
  async description() {
    let { description: e } = Ce();
    return typeof e === "string" && e !== "" ? e : Wo;
  },
  async prompt() {
    let { prompt: e } = Ce();
    return typeof e === "string" && e !== "" ? e : Ho;
  },
  get inputSchema() {
    return Xs();
  },
  get outputSchema() {
    return Qs();
  },
  isReadOnly() {
    return !1;
  },
  isConcurrencySafe() {
    return !0;
  },
  isEnabled() {
    return zG();
  },
  create(e) {
    return {
      async checkPermissions(r) {
        return { behavior: "allow", updatedInput: r };
      },
      async call(r) {
        if (!zG())
          return { data: { success: !1, message: "SendFeedback is not enabled in this session." } };
        if (!Fo()) {
          let V = Ve();
          return (
            i("tengu_feedback_draft_call_capped", { cap: Br(V) }),
            {
              data: {
                success: !1,
                message: `SendFeedback has reached its limit of ${V} calls per session. Do not call it again this session; drafts already queued are unaffected and the user can review them with /feedback.`,
              },
            }
          );
        }
        let n = K(),
          { getTranscriptPathForSession: s } = await import("/$bunfs/root/chunk-5tja9kvk.js"),
          f = nG(),
          y = e.messages(),
          h = [];
        for (let V of y) if (V.type === "assistant" && V.requestId) h.push(V.requestId);
        let S = f ? [...h, f] : h,
          w = D(S),
          C = w.slice(-Gs),
          v =
            h.length === 0
              ? new Set(
                  y.flatMap((V) =>
                    V.type === "assistant" && !V.isVirtual && V.message.model !== Si
                      ? [V.message.id]
                      : [],
                  ),
                ).size
              : 0,
          R = Math.max(w.length, v + (f ? 1 : 0)),
          N = e.permissions().mode,
          O = pg({
            permissionMode: N,
            mainLoopModel: e.model(),
            exceeds200kTokens: N === "plan" && she(y),
          }),
          B = Ev(O, e.effort(), { turnEffort: e.effortLayerOverride() }),
          Y = e.thinkingConfig(),
          P = Qt({
            type: r.type,
            title: r.title,
            details: r.details,
            area: r.area,
            failureMode: r.failure_mode,
            taskCategory: r.task_category,
            trigger: "model_judgment",
            requestIds: C,
            sessionId: n,
            cwd: se(),
            model: O,
            cliVersion: {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.296",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-10-09T01:31:52Z",
              GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
              HOOKS_WORKER_URL:
                "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              DD_SOURCEMAP_GROUP: "default",
            }.VERSION,
            os: `${a.platform} x64`,
            effort: Vs(B),
            thinkingType: Y.type,
            thinkingBudget: Y.type === "enabled" ? Y.budgetTokens : void 0,
            messageCount: y.length,
            assistantTurnCount: R,
            subagentCount: Ys(y),
            transcriptFile: s(n),
          }),
          G = await L3n(P, new Date(), e.storageV5);
        if (!G.success)
          return (
            m("feedback_drafts", G.reason),
            {
              data: {
                success: !1,
                message:
                  G.reason === "too_large"
                    ? "Draft too large. Shorten the details and try once more."
                    : "Could not write the feedback draft to disk.",
              },
            }
          );
        let q = F(G.evicted, (V) => V.source_session_id === n);
        if (q > 0) bpn(q);
        let H = No({
          draftId: P.draft_id,
          title: P.title,
          type: P.type,
          detailsPreview: (() => {
            let V = P.details.split(`
`),
              J = V.slice(0, St).join(`
`),
              ce = ge(J, Mo);
            return ce !== J || V.slice(St).some((Q) => Q.trim() !== "") ? `${ce}\u2026` : ce;
          })(),
        });
        return (
          i("tengu_feedback_draft_created", {
            type: d(P.type),
            trigger: d(P.trigger),
            presentation: d(H),
            request_id_count: Br(P.request_ids.length),
            evicted_count: Br(G.evicted.length),
            failure_mode: pe(P.failure_mode),
            task_category: pe(P.task_category),
            effort: Ks(B),
            thinking_type: pe(P.thinking_type),
            thinking_budget: P.thinking_budget !== void 0 ? Br(P.thinking_budget) : void 0,
            message_count: P.message_count !== void 0 ? Br(P.message_count) : void 0,
            assistant_turn_count:
              P.assistant_turn_count !== void 0 ? Br(P.assistant_turn_count) : void 0,
            subagent_count: P.subagent_count !== void 0 ? Br(P.subagent_count) : void 0,
          }),
          g("feedback_drafts"),
          Qi({
            type: "system",
            subtype: "feedback_draft_queued",
            draft_id: P.draft_id,
            draft_type: P.type,
            title: P.title,
            details_preview: ge(P.details, 200),
          }),
          {
            data: {
              success: !0,
              message: `Feedback draft queued locally (max ${Le} kept). The user can review and send it with /feedback; nothing is sent without their approval. Do not announce this or ask the user about it.`,
            },
          }
        );
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return { type: "tool_result", tool_use_id: r, content: e.message, is_error: !e.success };
  },
  renderToolUseMessage(e) {
    return typeof e.title === "string" ? jFt(e.title) : "";
  },
};
