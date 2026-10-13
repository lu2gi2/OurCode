// EndConversation tool definition — chunk-8d9hxesq.js [14370, 15828)
export const EndConversationTool = {
  name: Xx,
  shouldDefer: !0,
  searchHint:
    "end the conversation \u2014 only for sustained user abuse, or when the user explicitly asks to see it demonstrated",
  backgrounding: "never",
  maxResultSizeChars: 1e4,
  async description() {
    return mSn;
  },
  async prompt() {
    return mSn;
  },
  get inputSchema() {
    return h();
  },
  get outputSchema() {
    return S();
  },
  userFacingName() {
    return Xx;
  },
  isEnabled() {
    let e = gIt();
    return e !== void 0 && v7n(e);
  },
  isReadOnly() {
    return !0;
  },
  isConcurrencySafe() {
    return !1;
  },
  toAutoClassifierInput() {
    return "";
  },
  renderToolUseMessage() {
    return null;
  },
  mapToolResultToToolResultBlockParam(e, c) {
    return { tool_use_id: c, type: "tool_result", content: e.message };
  },
  create(e) {
    return {
      async call(c, m) {
        let s = e.isNonInteractiveSession,
          a = e.agentId ? "fork" : s ? "print" : "repl";
        if (e.agentId)
          return (
            i("tengu_end_conversation_tool_call", {
              surface: b(a),
              is_non_interactive: s,
              phase: b("reflect"),
            }),
            { data: { ended: !1, message: rVr } }
          );
        let g = !1;
        if (!_(e.messages(), void 0, !1) || g)
          return (
            i("tengu_end_conversation_tool_call", {
              surface: b(a),
              is_non_interactive: s,
              phase: b("reflect"),
            }),
            { data: { ended: !1, message: sVr } }
          );
        i("tengu_end_conversation_tool_call", {
          surface: b(a),
          is_non_interactive: s,
          phase: b("end"),
        });
        let d;
        try {
          await QJr(K(), e.storageV5);
        } catch (n) {
          t(`[EndConversation] marker write failed: ${l(n)}`);
        }
        if ((m.abort("end_conversation"), s)) {
          let { gracefulShutdown: n } = await import("/$bunfs/root/chunk-026kpbpf.js");
          return (n(1, "other", { finalMessage: oVr }), { data: { ended: !0, message: w7n } });
        }
        return (e.markEndedByModel(), { data: { ended: !0, message: w7n } });
      },
    };
  },
};
