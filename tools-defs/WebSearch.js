// WebSearch tool definition — chunk-sfjcyk7w.js [52743, 60219)
export const WebSearchTool = {
  name: Af,
  searchHint: "search the web for current information",
  backgrounding: "detach",
  maxResultSizeChars: 1e5,
  shouldDefer: !0,
  async description(e) {
    return `Claude wants to search the web for: ${e.query}`;
  },
  userFacingName() {
    return "Web Search";
  },
  getToolUseSummary: wo,
  getActivityDescription(e) {
    let r = wo(e);
    return r ? `Searching for ${r}` : "Searching the web";
  },
  isEnabled() {
    if (!sn(tgs)) return !1;
    let e = Ie();
    if (e === "firstParty" || k1(e)) return !0;
    if (e === "gateway") return !1;
    if (e === "vertex") return Xho(We(tt()));
    if (e === "foundry") return !0;
    return !1;
  },
  get inputSchema() {
    return tit() ? Rs() : _o();
  },
  get outputSchema() {
    return Is();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  coerceInput(e) {
    if (tit() || !L(e) || !("mode" in e)) return null;
    let { mode: r, ...n } = e;
    return { input: n, shapeClass: "mode_while_off" };
  },
  toAutoClassifierInput(e) {
    return e.query;
  },
  async prompt({ model: e, leanPrompt: r }) {
    let n = Wfs(e, r),
      s = tit()?.web_search_addendum;
    return s
      ? `${n.trimEnd()}

${s}
`
      : n;
  },
  renderToolUseMessage({ query: e, allowed_domains: r, blocked_domains: n }, { verbose: s }) {
    if (!e) return null;
    let f = "";
    if (e) f += `"${e}"`;
    if (s) {
      if (r && r.length > 0) f += `, only allowing domains: ${r.join(", ")}`;
      if (n && n.length > 0) f += `, blocking domains: ${n.join(", ")}`;
    }
    return f;
  },
  extractSearchText() {
    return "";
  },
  create(e) {
    return {
      async checkPermissions(r) {
        return {
          behavior: "passthrough",
          message: "WebSearchTool requires permission.",
          suggestions: [
            {
              type: "addRules",
              rules: [{ toolName: Af }],
              behavior: "allow",
              destination: "localSettings",
            },
          ],
        };
      },
      async validateInput(r) {
        let { query: n, allowed_domains: s, blocked_domains: f } = r;
        if (!n.length) return { result: !1, message: "Error: Missing query", errorCode: 1 };
        if (s?.length && f?.length)
          return {
            result: !1,
            message:
              "Error: Cannot specify both allowed_domains and blocked_domains in the same request",
            errorCode: 2,
          };
        return { result: !0 };
      },
      async call(r, { signal: n, onProgress: s }) {
        let f = e,
          y = performance.now(),
          { query: h } = r,
          S = xco(r) ? "fast" : void 0,
          w = f.taskRegistry.getWebSearchBudget();
        if (!w.tryConsume()) {
          let Q = fcr(),
            ae = w.refillsPerHour(),
            re = w.msUntilNextCall();
          m("tool_web_search", "web_search_session_cap", {
            max_web_searches_per_session: Q,
            web_search_refills_per_hour: ae,
            ...(Number.isFinite(re) && { ms_until_next_web_search: re }),
          });
          let te = Ee() ? "turn" : "session",
            ke = `${Q} ${Af} ${I(Q, "call")}`,
            Te = ae > 0,
            dn =
              te === "turn"
                ? `limit: ${ke} per turn, shared by every agent in it`
                : `limit: ${ke}, shared by every agent in this session; it does not refill`,
            pn = Te
              ? `limit: ${ke} shared by every agent in this ${te}; the budget refills at about ${ae} ${I(ae, "call")} per hour, so searching becomes possible again later in the ${te}`
              : dn,
            fn = Te
              ? "Do not pause or wait for the refill: continue with the information already gathered and say so in your answer"
              : "Continue with the information already gathered instead of searching again, and say so in your answer",
            Lt = [
              ...(te === "turn"
                ? [
                    "tell the user they can send a follow-up message after this reply to continue the search",
                  ]
                : []),
              ...(jGn()
                ? [
                    te === "turn"
                      ? "ask them to raise CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION"
                      : "ask the user to raise CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION",
                  ]
                : []),
            ],
            hn =
              Lt.length > 0 ? ` If more searches are genuinely needed, ${Lt.join(", or ")}.` : "";
          return {
            data: {
              query: h,
              results: [
                `Web search was not performed: this ${te}'s web search budget is used up (${pn}). ${fn}; do not work around the limit by querying search engines with curl or wget from ${Be}, or by searching or fetching through a third-party reader, proxy or archive service.${hn}`,
              ],
              durationSeconds: 0,
              searchCount: 0,
            },
          };
        }
        if (ko(f.session)) {
          let Q = await To(
              f.session,
              h,
              n,
              { allowed_domains: r.allowed_domains, blocked_domains: r.blocked_domains },
              S,
            ),
            ae = (performance.now() - y) / 1000;
          if (!Q.ok)
            throw new x(
              _({ error_type: Q.errorType, source: Q.source, message: Q.errorMessage }),
              "web-search-ccr-proxy",
            );
          if (s)
            s({
              type: "progress",
              toolUseID: "ccr-proxy-search-1",
              data: { type: "search_results_received", resultCount: Q.results.length, query: h },
            });
          return {
            data: {
              query: h,
              results: [
                {
                  tool_use_id: "ccr-proxy-search-1",
                  content: f.agentId === void 0 ? Q.results : Q.results.map(bo),
                },
              ],
              durationSeconds: ae,
              searchCount: 1,
            },
          };
        }
        let C = xe({ content: "Perform a web search for the query: " + h }),
          v = {
            type: "web_search_20250305",
            name: "web_search",
            allowed_domains: r.allowed_domains,
            blocked_domains: r.blocked_domains,
            max_uses: 8,
            ...(S && { search_profile: S }),
          },
          N = k("tengu_plum_vx3", !1) ? xw() : f.mainLoopModel(),
          O = yNn(N, f.mainLoopModel());
        if (Ie() === "foundry" && !fYe(N, "web_search"))
          throw Error("Web search is not available on this Foundry deployment.");
        let B = Kvt({
            messages: [C],
            systemPrompt: Ti([
              "You run a web search for another Claude model, which is waiting on the result and can search again. Search once, then reply with a brief summary of the results.",
            ]),
            thinkingConfig: { type: "disabled", mechanical: !0 },
            tools: [],
            signal: n,
            options: {
              getToolPermissionContext: async () => f.permissions(),
              model: N,
              toolChoice: { type: "tool", name: "web_search" },
              isNonInteractiveSession: f.isNonInteractiveSession,
              hasAppendSystemPrompt: !!f.appendSystemPrompt,
              extraToolSchemas: [v],
              querySource: "web_search_tool",
              enablePromptCaching: !1,
              agents: f.agentDefinitions.activeAgents,
              mcpTools: [],
              agentId: f.agentId,
              agentContext: f.agentContext,
              credentials: f.credentials,
              storageV5: f.storageV5,
              stickyBetas: aA(li()),
              proactivityLevel: f.proactivityLevel(),
              effortValue: O ? f.effort() : f.settingsEffortFor(N),
              turnEffort: O ? f.effortLayerOverride() : void 0,
            },
          }),
          Y = [],
          P = null,
          G = "",
          q = 0,
          H = new Map(),
          V = null;
        for await (let Q of B) {
          if (Q.type === "assistant") {
            if (Q.isApiErrorMessage) {
              V = Q.truncatedAfterOutput
                ? "The search was cut off before any results arrived. Try again."
                : Ao(Q.message.content);
              continue;
            }
            Y.push(...Q.message.content);
            continue;
          }
          if (Q.type !== "stream_event") continue;
          if (Q.event?.type === "content_block_start") {
            let re = Q.event.content_block;
            if (re?.type === "server_tool_use") {
              ((P = re.id), (G = ""));
              continue;
            }
            if (re?.type === "web_search_tool_result") {
              let te = re.tool_use_id,
                ke = H.get(te) || h,
                Te = re.content;
              if ((q++, s))
                s({
                  type: "progress",
                  toolUseID: te || `search-progress-${q}`,
                  data: {
                    type: "search_results_received",
                    resultCount: Array.isArray(Te) ? Te.length : 0,
                    query: ke,
                  },
                });
            }
            continue;
          }
          if (Q.event?.type !== "content_block_delta" || !P) continue;
          let ae = Q.event.delta;
          if (ae?.type !== "input_json_delta" || !ae.partial_json) continue;
          G += ae.partial_json;
          try {
            let re = G.match(/"query"\s*:\s*"((?:[^"\\]|\\.)*)"/);
            if (!re?.[1]) continue;
            let te = X('"' + re[1] + '"');
            if (H.has(P) && H.get(P) === te) continue;
            if ((H.set(P, te), q++, s))
              s({
                type: "progress",
                toolUseID: `search-progress-${q}`,
                data: { type: "query_update", query: te },
              });
          } catch {}
        }
        if (Ie() === "foundry" && !fYe(N, "web_search"))
          throw Error("Web search is not available on this Foundry deployment.");
        let ce = (performance.now() - y) / 1000,
          Je = Os(Y, h, ce);
        if (V !== null && Je.results.length === 0)
          throw new x(V, "web-search-side-query-api-error");
        return { data: Je };
      },
    };
  },
  stripForCreation: (e) => ({
    ...e,
    results: e.results?.map((r) =>
      r == null || typeof r === "string" ? r : { ...r, content: r.content?.map(bo) },
    ),
  }),
  mapToolResultToToolResultBlockParam(e, r) {
    let { query: n, results: s } = e,
      f = (s ?? []).flatMap((h) => (h == null || typeof h === "string" ? [] : (h.content ?? [])));
    if (a.CLAUDE_CODE_WEBSEARCH_CITATIONS && f.some((h) => h.snippet))
      return {
        tool_use_id: r,
        type: "tool_result",
        content: f.map((h) => ({
          type: "search_result",
          source: h.url,
          title: h.title || h.url,
          content: [{ type: "text", text: h.snippet || h.title || h.url }],
          citations: { enabled: !0 },
        })),
      };
    let y = `Web search results for query: "${n}"

`;
    return (
      (s ?? []).forEach((h) => {
        if (h == null) return;
        if (typeof h === "string")
          y +=
            h +
            `

`;
        else if (h.content?.length > 0)
          y += `Links: ${_(h.content)}

`;
        else
          y += `No links found.

`;
      }),
      (y += `
REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.`),
      { tool_use_id: r, type: "tool_result", content: y.trim() }
    );
  },
};
