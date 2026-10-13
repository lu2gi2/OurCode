// CronCreate tool definition — chunk-y04e1q5q.js [6465, 8370)
export const CronCreateTool = {
  name: zu,
  searchHint: "schedule a recurring or one-shot prompt",
  enablesCodeExecution: !0,
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  shouldDefer: !0,
  get inputSchema() {
    return m();
  },
  get outputSchema() {
    return c();
  },
  isEnabled() {
    return vE();
  },
  toAutoClassifierInput(e) {
    return `${e.cron}: ${e.prompt}`;
  },
  async description() {
    return Hoo(Zye());
  },
  async prompt() {
    return Loo(Zye());
  },
  getPath() {
    return vAe();
  },
  create(e) {
    return {
      async checkPermissions(r) {
        if (e.permissions().mode === "auto")
          return {
            behavior: "passthrough",
            message: "Scheduling a cron prompt requires classifier review.",
          };
        return { behavior: "allow", updatedInput: r };
      },
      async validateInput(r) {
        if (!V2(r.cron))
          return {
            result: !1,
            message: `Invalid cron expression '${r.cron}'. Expected 5 fields: M H DoM Mon DoW.`,
            errorCode: 1,
          };
        if (fKe(r.cron, Date.now()) === null)
          return {
            result: !1,
            message: `Cron expression '${r.cron}' does not match any calendar date in the next year.`,
            errorCode: 2,
          };
        if ((await nre()).length >= a)
          return {
            result: !1,
            message: `Too many scheduled jobs (max ${a}). Cancel one first.`,
            errorCode: 3,
          };
        if (r.durable && lC())
          return {
            result: !1,
            message:
              "durable crons are not supported for teammates (teammates do not persist across sessions)",
            errorCode: 4,
          };
        return { result: !0 };
      },
      async call({ cron: r, prompt: t, recurring: n = !0, durable: i = !1 }) {
        let s = i && Zye(),
          l = await vot(r, t, n, s, lC()?.agentId);
        return (lU(!0), { data: { id: l, humanSchedule: FA(r), recurring: n, durable: s } });
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    let t = e.durable
      ? "Persisted to .claude/scheduled_tasks.json"
      : "Session-only (not written to disk, dies when Claude exits)";
    return {
      tool_use_id: r,
      type: "tool_result",
      content: e.recurring
        ? `Scheduled recurring job ${e.id} (${e.humanSchedule}). ${t}. Auto-expires after ${wAe} days. Use CronDelete to cancel sooner.`
        : `Scheduled one-shot task ${e.id} (${e.humanSchedule}). ${t}. It will fire once then auto-delete.`,
    };
  },
  renderToolUseMessage(e) {
    return `${e.cron ?? ""}${e.prompt ? `: ${jo(e.prompt, 60, !0)}` : ""}`;
  },
};
