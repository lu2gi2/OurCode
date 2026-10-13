// Grep tool definition — chunk-kasbfbhj.js [768844, 771724)
export const GrepTool = {
  name: Jr,
  searchHint: "search file contents with regex (ripgrep)",
  remoteExecution: { supported: !0 },
  backgrounding: "never",
  maxResultSizeChars: 20000,
  strict: !0,
  async description() {
    return vdo(void 0);
  },
  userFacingName() {
    return "Search";
  },
  getToolUseSummary: fj,
  getActivityDescription(e) {
    let n = fj(e);
    return n ? `Searching for ${n}` : "Searching";
  },
  get inputSchema() {
    return GAt();
  },
  get outputSchema() {
    return Hno();
  },
  coerceInput(e) {
    return UU(GAt(), WAt(e));
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
      ? e.path
        ? `${e.pattern} in ${e.path}`
        : e.pattern
      : { pattern: e.pattern, ...(e.path !== void 0 && { path: e.path }), [Or]: n, ...kCe(e) };
  },
  suppressesAllPermissionUpdates(e) {
    return mu(e);
  },
  isSearchOrReadCommand() {
    return { isSearch: !0, isRead: !1 };
  },
  ruleContentField: "path",
  getPath({ path: e }) {
    if (vv(Jr)) return e ?? "";
    return e ? et(e) : se();
  },
  async preparePermissionMatcher({ pattern: e }) {
    return (n) => oZ(n, e);
  },
  async prompt({ model: e, leanPrompt: n }) {
    return vdo(e, n);
  },
  renderToolUseMessage: bae,
  extractSearchText({ mode: e, content: n, filenames: r }) {
    if (e === "content" && n) return n;
    return r.join(`
`);
  },
  mapToolResultToToolResultBlockParam(
    {
      mode: e = "files_with_matches",
      numFiles: n,
      filenames: r,
      content: s,
      numLines: h,
      numMatches: y,
      totalFiles: S,
      totalLines: w,
      appliedLimit: H,
      appliedOffset: G,
    },
    V,
  ) {
    if (e === "content") {
      let _e = tFe(H, G),
        ke = s || (G && (w ?? 0) > 0 ? "No entries at this offset" : "No matches found"),
        be = _e
          ? `${ke}

[Showing results with pagination = ${_e}]`
          : ke;
      return { tool_use_id: V, type: "tool_result", content: be };
    }
    if (e === "count") {
      let _e = tFe(H, G),
        ke = y ?? 0,
        be = n ?? 0,
        Te = s || (ke > 0 ? "No entries at this offset" : "No matches found"),
        Re = `

Found ${ke} total ${ke === 1 ? "occurrence" : "occurrences"} across ${be} ${be === 1 ? "file" : "files"}.${_e ? ` with pagination = ${_e}` : ""}`;
      return { tool_use_id: V, type: "tool_result", content: Te + Re };
    }
    let Y = tFe(H, G);
    if (n === 0)
      return {
        tool_use_id: V,
        type: "tool_result",
        content:
          G && (S ?? 0) > 0
            ? `No entries at this offset. [Showing results with pagination = ${Y}]`
            : "No files found",
      };
    let he = `Found ${n} ${I(n, "file")}${Y ? ` ${Y}` : ""}
${r.join(`
`)}`;
    return { tool_use_id: V, type: "tool_result", content: he };
  },
  create(e) {
    return {
      async validateInput(n) {
        let { pattern: r, path: s, glob: h, type: y, head_limit: S, offset: w } = n;
        if (Yx() && mu(n)) return { result: !1, message: LB(), errorCode: 3 };
        let H = _b(Jr, [
          ["pattern", r],
          ["path", s],
          ["glob", h],
          ["type", y],
        ]);
        if (H) return H;
        for (let [G, V] of [
          ["head_limit", S],
          ["offset", w],
        ])
          if (V !== void 0 && (!Number.isInteger(V) || V < 0))
            return {
              result: !1,
              message: `${G} must be a whole number of 0 or more, got ${V}.${G === "head_limit" ? " Pass 0 for unlimited." : ""}`,
              errorCode: 2,
            };
        return { result: !0 };
      },
      async checkPermissions(n, r) {
        let s = bI.getPath(n),
          h = di(s);
        return (
          e.session.writePermissionStash.stash(r.toolUseId, s, h.spellings, "read"),
          CE(bI, n, e.permissions(), h)
        );
      },
      async call(n, r) {
        return jno(n, {
          toolUseId: r.toolUseId,
          signal: r.signal,
          remoteCall: r.remoteCall,
          session: e.session,
          toolState: e.toolState,
          permissions: e.permissions,
        });
      },
    };
  },
};
