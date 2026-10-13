// OfferChromeSetup tool definition — chunk-sfjcyk7w.js [36208, 37382)
export const OfferChromeSetupTool = {
  name: Jye,
  searchHint: "offer the user Claude in Chrome setup for their own browser",
  shouldDefer: !0,
  whenToUse: scs,
  backgrounding: "never",
  maxResultSizeChars: 2000,
  get inputSchema() {
    return cs();
  },
  get outputSchema() {
    return us();
  },
  isEnabled: T3n,
  isConcurrencySafe() {
    return !1;
  },
  isReadOnly() {
    return !0;
  },
  requiresUserInteraction() {
    return !0;
  },
  admitCardAnswer: io,
  async description() {
    return ics;
  },
  async prompt() {
    return acs;
  },
  toAutoClassifierInput(e) {
    return e.reason ? `offer Claude in Chrome setup: ${e.reason}` : "offer Claude in Chrome setup";
  },
  create({ messageClientPlatform: e, session: r }) {
    return {
      async validateInput() {
        if (ft() && lo(r, e))
          return (He(r, "phone", e), { result: !1, message: dcs, errorCode: 2 });
        if (co()) return { result: !0 };
        return (He(r, "no_attempt_yet", e), { result: !1, message: ucs, errorCode: 1 });
      },
      async checkPermissions(n) {
        return {
          behavior: "ask",
          message: "Set up Claude in Chrome?",
          suppressAlwaysAllowRule: !0,
          updatedInput: ds(n),
        };
      },
      async call(n) {
        let { outcome: s } = n,
          f = s === "connected" ? "connected" : "not_now";
        return (He(r, f, e), { data: { outcome: f } });
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return { tool_use_id: r, type: "tool_result", content: e.outcome === "connected" ? lcs : ccs };
  },
  renderToolUseMessage(e) {
    return e.reason ?? null;
  },
};
