// RemoteTrigger tool definition — chunk-5pvna5wz.js [16437, 19951)
export const RemoteTriggerTool = {
  name: N$,
  searchHint: "manage scheduled cloud agent routines; inspect their run history and logs",
  enablesCodeExecution: !0,
  backgrounding: "never",
  maxResultSizeChars: K,
  shouldDefer: !0,
  get inputSchema() {
    return _e();
  },
  get outputSchema() {
    return me();
  },
  isEnabled() {
    return qn() && wt() && !a.CLAUDE_CODE_REMOTE && sn("allow_remote_sessions") && sn(Fee);
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly(e) {
    return (
      e.action === "list" ||
      e.action === "get" ||
      e.action === "list_runs" ||
      e.action === "get_run_log"
    );
  },
  toAutoClassifierInput(e) {
    return e;
  },
  async description() {
    return Mcs;
  },
  async prompt() {
    return Hcs;
  },
  create({ permissions: e, credentials: r }) {
    return {
      async checkPermissions(n) {
        if (e().mode === "auto")
          return {
            behavior: "passthrough",
            message: "Remote trigger management requires classifier review.",
          };
        return { behavior: "allow", updatedInput: n };
      },
      async call(n, { signal: t }) {
        let { action: c, trigger_id: l, session_id: h, cursor: m, body: f } = n,
          b,
          y,
          R;
        switch (c) {
          case "list":
            ((y = "get"), (b = "/v1/code/triggers"));
            break;
          case "get":
            if (!l) throw Error("get requires trigger_id");
            ((y = "get"), (b = `/v1/code/triggers/${l}`));
            break;
          case "create":
            if (!f) throw Error("create requires body");
            ((y = "post"), (b = "/v1/code/triggers"), (R = Y(f)));
            break;
          case "update":
            if (!l) throw Error("update requires trigger_id");
            if (!f) throw Error("update requires body");
            ((y = "post"), (b = `/v1/code/triggers/${l}`), (R = Y(f)));
            break;
          case "create_webhook_trigger":
            if (!f) throw Error("create_webhook_trigger requires body");
            ((y = "post"), (b = "/v1/code/webhook-triggers"), (R = f));
            break;
          case "list_runs": {
            if (!l) throw Error("list_runs requires trigger_id");
            let z = new URLSearchParams({
              trigger_id: l,
              limit: String(be),
              ...(m && { cursor: m }),
            });
            ((y = "get"), (b = `/v1/code/sessions?${z}`));
            break;
          }
          case "get_run_log": {
            if (!h) throw Error("get_run_log requires session_id");
            let z = new URLSearchParams({
              limit: String(we),
              sort_order: "desc",
              ...(m && { cursor: m }),
            });
            ((y = "get"), (b = `/v1/code/sessions/${Gl(h)}/events?${z}`));
            break;
          }
          case "run": {
            if (!l) throw Error("run requires trigger_id");
            ((y = "post"), (b = `/v1/code/triggers/${l}/run`));
            let { trigger_id: z, ...j } = f ?? {};
            R = j;
            break;
          }
        }
        let C = {
            auth: "teleport-org",
            headers: { "anthropic-beta": H },
            timeout: 20000,
            signal: t,
            credentials: r,
            validateStatus: () => !0,
          },
          k = y === "get" ? await Gt.get(b, C) : await Gt.post(b, R, C);
        if (!k.ok)
          throw Error(
            k.reason === "no-auth"
              ? "Not authenticated with a claude.ai account. Run /login and try again."
              : `Remote triggers unavailable: ${k.reason}`,
          );
        let S = k.status >= 200 && k.status < 300,
          v,
          I;
        if (c === "list_runs" && S) ({ json: I, summary: v } = Re(k.data, l, m));
        if (c === "get_run_log" && S) ({ json: I, summary: v } = xe(k.data, h));
        if (
          ((I ??= _(k.data)),
          c === "create" || c === "update" || c === "run" || c === "create_webhook_trigger")
        ) {
          let z = S ? he().safeParse(k.data) : void 0;
          if (
            (i("tengu_remote_trigger", {
              action: d(c),
              has_run_once_at: typeof f?.run_once_at === "string" && f.run_once_at !== "",
              has_cron: typeof f?.cron_expression === "string" && f.cron_expression !== "",
              filled_event_fields: (c === "create" || c === "update") && R !== f,
              success: S,
              trigger_id: ye(
                c === "create"
                  ? z?.success
                    ? z.data.id
                    : void 0
                  : c === "create_webhook_trigger"
                    ? typeof f?.routine_trigger_id === "string"
                      ? f.routine_trigger_id
                      : void 0
                    : l,
              ),
            }),
            S && c !== "run")
          )
            v = z?.success ? $e(z.data) : void 0;
          if (S && c === "create_webhook_trigger") {
            let j = f?.routine_trigger_id;
            v =
              typeof j === "string" && /^[\w-]+$/.test(j)
                ? `\u2192 Fires routine: ${dn().CLAUDE_AI_ORIGIN}/code/routines/${j}`
                : void 0;
          }
        }
        return { data: { status: k.status, json: I, summary: v } };
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    let n = e.summary
      ? `HTTP ${e.status}
${e.json}

${e.summary}`
      : `HTTP ${e.status}
${e.json}`;
    return { tool_use_id: r, type: "tool_result", content: n };
  },
  renderToolUseMessage(e) {
    let r = e.session_id ?? e.trigger_id;
    return `${e.action ?? ""}${r ? ` ${r}` : ""}`;
  },
};
