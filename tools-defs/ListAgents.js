// ListAgents tool definition — chunk-5hfrp7j5.js [6383, 7380)
export const ListAgentsTool = {
  name: xc,
  aliases: [Pcs],
  searchHint: "list agents you can SendMessage to",
  backgrounding: "never",
  maxResultSizeChars: g,
  toAutoClassifierInput() {
    return "list agents";
  },
  async description(e, { tools: t }) {
    return Moo({ canSendMessages: fv(t) });
  },
  userFacingName() {
    return "ListAgents";
  },
  isEnabled() {
    return xi();
  },
  get inputSchema() {
    return d();
  },
  get outputSchema() {
    return S();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  async prompt({ tools: e }) {
    return Moo({ canSendMessages: fv(e) });
  },
  renderToolUseMessage() {
    return null;
  },
  create(e) {
    return {
      async call(t) {
        let {
            listAllPeers: s,
            listAgentsForModel: r,
            buildSubagentExtras: a,
          } = import.meta.require("/$bunfs/root/chunk-3gk2zc5h.js"),
          i = t.channel?.trim() || void 0,
          l = t.q?.trim() || void 0,
          [n, c] = await Promise.all([
            s(e.session, { channel: i, q: l, storageV5: e.storageV5 }, e.credentials),
            a({ ...e, getAppState: e.resolverState }, sI(e)),
          ]);
        return { data: r(n.peers, c, { ...n, callerCanSend: fv(e.tools) }) };
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, t) {
    return { tool_use_id: t, type: "tool_result", content: e.listing };
  },
};
