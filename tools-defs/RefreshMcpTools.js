// RefreshMcpTools tool definition — chunk-sfjcyk7w.js [115523, 117939)
export const RefreshMcpToolsTool = {
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return e.server ?? "";
  },
  name: wW,
  searchHint:
    "refresh or re-sync tool lists from connected MCP servers, recover missing device or server tools",
  backgrounding: "never",
  maxResultSizeChars: 50000,
  async description() {
    return hcs();
  },
  async prompt() {
    return ycs;
  },
  get inputSchema() {
    return fi();
  },
  get outputSchema() {
    return hi();
  },
  isEnabled() {
    let e = RS();
    return e !== void 0 && e.length > 0;
  },
  create(e) {
    return {
      async call(r) {
        let n = {
            isolationLatch: e.isolationLatch,
            session: e.session,
            options: { mcpClients: e.turnMcpClients },
          },
          s = hsr(At, n, r);
        if (s.denyMessage)
          throw new x(s.denyMessage, "Blocked by the web search / connector isolation policy");
        let { turnMcpClients: f, tools: y } = e,
          { server: h } = r,
          S = h ? pet(f, h) : f,
          { filterToolsByDenyRules: w } = await import("/$bunfs/root/chunk-8v4n252e.js"),
          C = e.permissions();
        if (h && S.length === 0)
          throw new x(
            `Server "${h}" not found. Available servers: ${f.map((R) => R.name).join(", ")}`,
            "MCP server not found",
          );
        return {
          data: await Promise.all(
            S.map(async (R) => {
              if (R.type !== "connected")
                return {
                  server: R.name,
                  status: "not_connected",
                  error: `server connection state is "${R.type}" \u2014 this tool only re-reads tool lists over live connections and never dials`,
                };
              let N = Bo(R.name),
                O = new Set(
                  y
                    .filter((H) => rd(H, R.name, N))
                    .map((H) => H.name)
                    .filter((H) => typeof H === "string"),
                ),
                B = !1,
                Y = await Lee(
                  R,
                  (H, V) => {
                    B = !Fsn(H, V, R.config);
                  },
                  e.storageV5,
                );
              if (Y.status === "kept-previous")
                return {
                  server: R.name,
                  status: "error",
                  error: Y.error ?? "tools/list failed; the previous tool set was kept",
                };
              if (B)
                return {
                  server: R.name,
                  status: "error",
                  error:
                    "refreshed the server, but the live tool pool was not updated \u2014 the server may have been removed or disconnected while the refresh was in flight, or its tools are not managed in this session mode; if it is still configured, the refreshed list applies on the next pool rebuild",
                };
              let G = w(Y.newTools, C)
                  .map((H) => H.name)
                  .filter((H) => typeof H === "string"),
                q = new Set(G);
              return {
                server: R.name,
                status: "refreshed",
                toolCount: G.length,
                added: G.filter((H) => !O.has(H)),
                removed: [...O].filter((H) => !q.has(H)),
              };
            }),
          ),
        };
      },
    };
  },
  renderToolUseMessage(e) {
    return e.server ? `Refresh MCP tools from server "${e.server}"` : "Refresh all MCP tool lists";
  },
  userFacingName: () => "refreshMcpTools",
  mapToolResultToToolResultBlockParam(e, r) {
    if (!e || e.length === 0)
      return { tool_use_id: r, type: "tool_result", content: "No MCP servers to refresh." };
    return { tool_use_id: r, type: "tool_result", content: _(e) };
  },
};
