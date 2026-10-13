// ReadNotifications tool definition — chunk-sfjcyk7w.js [27716, 28885)
export const ReadNotificationsTool = {
  name: HD,
  searchHint: "read queued external notifications (webhooks, triggers)",
  backgrounding: "never",
  maxResultSizeChars: H9n,
  persistenceThresholdCeiling: H9n,
  skipAggregateToolResultBudget: !0,
  get inputSchema() {
    return Vn();
  },
  get outputSchema() {
    return Kn();
  },
  isEnabled: Qgn,
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  async description() {
    return _cs;
  },
  async prompt() {
    return XOn;
  },
  toAutoClassifierInput() {
    return "read queued notifications";
  },
  create({ agentId: e, queuedNotificationsRegistry: r }) {
    return {
      async call(n) {
        if (e !== void 0)
          throw Error(
            "ReadNotifications can only be called from the main conversation \u2014 subagents must not drain the session notification buffer.",
          );
        let s = new Date(Date.now()).toISOString(),
          { notifications: f, remaining: y } = r.drain();
        return {
          data: {
            notifications: f.map((h) => ({
              notification_id: h.notificationId,
              origin: h.origin,
              queued_at: h.queuedAt,
              content: h.content,
              arrived_at: h.arrivedAt,
            })),
            remaining: y,
            read_at: s,
          },
        };
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return {
      tool_use_id: r,
      type: "tool_result",
      content: Zzo(e.notifications, e.remaining, e.read_at),
    };
  },
  renderToolUseMessage() {
    return "";
  },
  extractSearchText(e) {
    return e.notifications.map((r) => r.content).join(`
`);
  },
};
