// ScheduleWakeup tool definition — chunk-sfjcyk7w.js [46159, 49951)
export const ScheduleWakeupTool = {
  name: wa,
  searchHint: `self-pace the dynamic /loop: pick a delay before the next tick, or stop/end/cancel the dynamic loop with stop:true (a fixed-interval /loop is a recurring cron \u2014 cancel it with ${$_})`,
  backgrounding: "never",
  maxResultSizeChars: 1000,
  async description() {
    return $cs;
  },
  async prompt() {
    let e = y$("repl_main_thread", { ignoreOverage: !0 }),
      r = y$("sdk", { ignoreOverage: !0 });
    return Ncs(e === r ? e : void 0);
  },
  get inputSchema() {
    return Ts();
  },
  get outputSchema() {
    return bs();
  },
  userFacingName() {
    return "";
  },
  shouldDefer: !1,
  whenToUse: `schedules when this session resumes work, 60 to 3600 seconds from now. Use it, not ${zu}, to pace a /loop that has no interval.`,
  toAutoClassifierInput(e) {
    if (e.stop === !0) return "stop the /loop \u2014 cancel pending wakeups, schedule nothing";
    if (e.delaySeconds == null || e.prompt == null)
      return `malformed ${wa} call missing delaySeconds/prompt \u2014 the tool will reject it`;
    return `wake in ${e.delaySeconds}s: ${e.prompt}`;
  },
  renderToolUseMessage() {
    return null;
  },
  create({ permissions: e }) {
    return {
      async checkPermissions(r) {
        if (e().mode === "auto")
          return {
            behavior: "passthrough",
            message: "Scheduling a /loop wakeup requires classifier review.",
          };
        return { behavior: "allow", updatedInput: r };
      },
      async call(r, { toolUseId: n }) {
        let { delaySeconds: s, reason: f, prompt: y, stop: h, noop: S } = r;
        if (h === !0)
          return {
            data: {
              scheduledFor: 0,
              clampedDelaySeconds: 0,
              wasClamped: !1,
              stopped: !0,
              cancelledWakeups: nWo(),
            },
          };
        if (s === void 0 || f === void 0)
          throw new Ge("`delaySeconds` and `reason` are required when `stop` is not true.");
        if (y === void 0) throw new Ge("`prompt` is required when `stop` is not true.");
        if (S === void 0) throw new Ge("`noop` is required when `stop` is not true.");
        let w = eWo(s, y, f, n);
        if (w === null)
          return { data: { scheduledFor: 0, clampedDelaySeconds: 0, wasClamped: !1 } };
        return {
          data: {
            scheduledFor: w.scheduledFor,
            clampedDelaySeconds: w.clampedDelaySeconds,
            wasClamped: w.wasClamped,
          },
        };
      },
    };
  },
  mapToolResultToToolResultBlockParam(
    { scheduledFor: e, clampedDelaySeconds: r, wasClamped: n, stopped: s, cancelledWakeups: f },
    y,
  ) {
    let h = jI(),
      S = `Then ${lMn({ briefMode: h })} \u2014 and end the turn.`;
    if (s === !0) {
      let B = `If you armed a ${Pl} for this loop, ${Uc} it now. ${S}`;
      if (f === 0)
        return {
          tool_use_id: y,
          type: "tool_result",
          content: `Loop stopped \u2014 any dynamic loop in this session is ended; there was no pending wakeup to cancel. If you are running a fixed-interval /loop (a recurring cron), it is NOT stopped by this call \u2014 cancel it with ${$_}. ${B}`,
        };
      let Y =
        f === void 0
          ? "no further wakeups scheduled"
          : `cancelled ${f} pending wakeup(s); no further dynamic-loop wakeups scheduled`;
      return { tool_use_id: y, type: "tool_result", content: `Loop stopped \u2014 ${Y}. ${B}` };
    }
    if (e === 0)
      return {
        tool_use_id: y,
        type: "tool_result",
        content: `Wakeup not scheduled. The loop reached its maximum duration \u2014 the loop has ended; do not re-issue. ${S}`,
      };
    let w = new Date(e).toTimeString().slice(0, 8),
      C = Math.max(0, Math.round((e - Date.now()) / 1000)),
      v = n ? ` (clamped to ${r}s from your requested value)` : "",
      R = h
        ? `send it now via ${Kf} (\`status: 'proactive'\`) \u2014 plain response text is treated as unread in this session`
        : "write it now as ordinary response text",
      N = tt(),
      O = J$(We(N), N)
        ? `When this call is your only tool call, the turn ends when it returns \u2014 there is no post-arm slot for a status update, so ${h ? `send the per-tick update via ${Kf} (\`status: 'proactive'\`)` : "write the per-tick update as ordinary response text"} immediately BEFORE calling ${wa}. If you are reading this mid-turn, end the turn now \u2014 the harness re-invokes you when the wakeup fires or a task-notification arrives.`
        : `If you owe the user a status update this tick, ${R}; then end the turn \u2014 the harness re-invokes you when the wakeup fires or a task-notification arrives.`;
    return {
      tool_use_id: y,
      type: "tool_result",
      content: `Next wakeup scheduled for ${w} (in ${C}s)${v}. ${O}`,
    };
  },
};
