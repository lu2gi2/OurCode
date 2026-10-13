// CronList tool definition — chunk-ehs4epbg.js [5913, 6813)
export const CronListTool = {
  name: Z0e,
  searchHint: "list active cron jobs",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  shouldDefer: !0,
  get inputSchema() {
    return a();
  },
  get outputSchema() {
    return s();
  },
  isEnabled() {
    return vE();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  async description() {
    return Foo;
  },
  async prompt() {
    return Uoo(Zye());
  },
  create() {
    return {
      async call() {
        let r = await nre(),
          n = lC();
        return {
          data: {
            jobs: (n ? r.filter((e) => e.agentId === n.agentId) : r).map((e) => ({
              id: e.id,
              cron: e.cron,
              humanSchedule: FA(e.cron),
              prompt: e.prompt,
              ...(e.recurring ? { recurring: !0 } : {}),
              ...(e.durable === !1 ? { durable: !1 } : {}),
            })),
          },
        };
      },
    };
  },
  mapToolResultToToolResultBlockParam(r, n) {
    return {
      tool_use_id: n,
      type: "tool_result",
      content:
        r.jobs.length > 0
          ? r.jobs.map(
              (t) =>
                `${t.id} \u2014 ${t.humanSchedule}${t.recurring ? " (recurring)" : " (one-shot)"}${t.durable === !1 ? " [session-only]" : ""}: ${jo(t.prompt, 80, !0)}`,
            ).join(`
`)
          : "No scheduled jobs.",
    };
  },
  renderToolUseMessage() {
    return "";
  },
};
