// Glob tool definition — chunk-kasbfbhj.js [762619, 764724)
export const GlobTool = {
  name: co,
  searchHint: "find files by name pattern or wildcard",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return wdo(void 0);
  },
  remoteExecution: { supported: !0 },
  userFacingName() {
    return "Search";
  },
  getToolUseSummary: fj,
  getActivityDescription(e) {
    let n = fj(e);
    return n ? `Finding ${n}` : "Finding files";
  },
  get inputSchema() {
    return Pno();
  },
  get outputSchema() {
    return Mno();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    let n = Zge(e);
    return n === void 0
      ? e.pattern
      : { pattern: e.pattern, ...(e.path !== void 0 && { path: e.path }), [Or]: n, ...kCe(e) };
  },
  suppressesAllPermissionUpdates(e) {
    return mu(e);
  },
  isSearchOrReadCommand() {
    return { isSearch: !0, isRead: !1 };
  },
  ruleContentField: "path",
  getPath({ path: e, pattern: n }) {
    if (n) {
      let r = ZNe(n);
      if (r) return r.searchDir;
    }
    if (vv(co)) return e ?? "";
    if (e) return et(e);
    return se();
  },
  async preparePermissionMatcher({ pattern: e }) {
    return (n) => oZ(n, e);
  },
  async prompt({ model: e, leanPrompt: n }) {
    return wdo(e, n);
  },
  renderToolUseMessage: bae,
  extractSearchText({ filenames: e }) {
    return e.join(`
`);
  },
  create(e) {
    return {
      async validateInput(n) {
        let { pattern: r, path: s } = n;
        if (Yx() && mu(n)) return { result: !1, message: LB(), errorCode: 3 };
        let h = _b(co, [
          ["pattern", r],
          ["path", s],
        ]);
        if (h) return h;
        return { result: !0 };
      },
      async checkPermissions(n, r) {
        let s = _I.getPath(n),
          h = di(s);
        return (
          e.session.writePermissionStash.stash(r.toolUseId, s, h.spellings, "read"),
          CE(_I, n, e.permissions(), h)
        );
      },
      async call(n, r) {
        let { globLimits: s } = r,
          h = {
            toolUseId: r.toolUseId,
            remoteCall: r.remoteCall,
            session: e.session,
            toolState: e.toolState,
          },
          y = Date.now(),
          S = s?.maxResults ?? 100,
          w = _I.getPath(n),
          H = K5e(h, w);
        if (n.path && w === et(n.path)) await Ono(n.path, H, h);
        let {
            files: G,
            truncated: V,
            totalMatches: Y,
            countIsComplete: he,
          } = await BAt(n.pattern, w, { limit: S, offset: 0 }, r.signal, e.permissions(), H),
          _e = G.map(sDt);
        return {
          data: {
            filenames: _e,
            durationMs: Date.now() - y,
            numFiles: _e.length,
            truncated: V,
            totalMatches: Y,
            countIsComplete: he,
          },
        };
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, n) {
    if (e.filenames.length === 0)
      return { tool_use_id: n, type: "tool_result", content: "No files found" };
    return {
      tool_use_id: n,
      type: "tool_result",
      content: [...e.filenames, ...(e.truncated ? [Ino(e)] : [])].join(`
`),
    };
  },
};
