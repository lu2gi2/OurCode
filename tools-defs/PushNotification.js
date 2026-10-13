// PushNotification tool definition — chunk-13m6fqf8.js [6163, 8432)
export const PushNotificationTool = {
  name: jx,
  searchHint: "send a notification to the user via terminal and optionally mobile",
  backgrounding: "never",
  maxResultSizeChars: 1000,
  userFacingName: () => "PushNotification",
  get inputSchema() {
    return b();
  },
  get outputSchema() {
    return R();
  },
  shouldDefer: !0,
  isEnabled() {
    return hz("tengu_kairos_push_notifications", !1, g);
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return e.message;
  },
  async description() {
    return Bcs;
  },
  async prompt() {
    return jcs();
  },
  mapToolResultToToolResultBlockParam(e, l) {
    let t;
    if (e.disabledReason === "config_off")
      t = "Push not sent \u2014 mobile push is disabled in /config.";
    else if (e.disabledReason === "user_present")
      t =
        "Not sent \u2014 this terminal is active, so your output here already reaches the user; a separate notification would be redundant.";
    else if (e.disabledReason === "no_transport")
      t = e.localSent
        ? "Terminal notification sent. Mobile push not sent (Remote Control inactive)."
        : "Mobile push not sent (Remote Control inactive).";
    else
      t = e.localSent
        ? "Terminal notification sent. Mobile push requested."
        : "Mobile push requested.";
    return { tool_use_id: l, type: "tool_result", content: t };
  },
  renderToolUseMessage(e) {
    if (!e.message) return "";
    return e.message;
  },
  create({ isNonInteractiveSession: e, session: l }) {
    return {
      async call({ message: t }, { onProgress: d }) {
        let n = new Date().toISOString(),
          f = a.CLAUDE_CODE_REMOTE || jn(),
          c = f || las(l),
          m = c || sd(),
          s = ({ pushSent: S, localSent: h, disabledReason: _ }) => {
            i("tengu_push_notification_send", {
              message_length: t.length,
              push_sent: S,
              local_sent: h,
              is_remote: f,
              disabled_reason: pe(_),
            });
          };
        if (m && !c && !hs("agentPushNotifEnabled", !1).value)
          return (
            s({ pushSent: !1, localSent: !1, disabledReason: "config_off" }),
            {
              data: {
                message: t,
                pushSent: !1,
                localSent: !1,
                disabledReason: "config_off",
                sentAt: n,
              },
            }
          );
        if (!c && !a.CLAUDE_CODE_DISABLE_NOTIFICATION_PRESENCE_CHECK && GRo())
          return (
            s({ pushSent: !1, localSent: !1, disabledReason: "user_present" }),
            {
              data: {
                message: t,
                pushSent: !1,
                localSent: !1,
                disabledReason: "user_present",
                sentAt: n,
              },
            }
          );
        d?.({ type: "os_notification", message: t, notificationType: "push_notification" });
        let r = !e;
        if (!m)
          return (
            s({ pushSent: !1, localSent: r, disabledReason: "no_transport" }),
            {
              data: {
                message: t,
                pushSent: !1,
                localSent: r,
                disabledReason: "no_transport",
                sentAt: n,
              },
            }
          );
        return (
          s({ pushSent: !0, localSent: r }),
          { data: { message: t, pushSent: !0, localSent: r, sentAt: n } }
        );
      },
    };
  },
};
