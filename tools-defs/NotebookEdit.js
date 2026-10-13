// NotebookEdit tool definition — chunk-kasbfbhj.js [4175053, 4181817)
export const NotebookEditTool = {
  name: Zi,
  ruleContentField: "notebook_path",
  searchHint: "edit Jupyter notebook cells (.ipynb)",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  shouldDefer: !0,
  async description() {
    return Sxn;
  },
  async prompt() {
    return bxn;
  },
  backfillObservableInput(e) {
    if (typeof e.notebook_path === "string" && !vv(Zi)) e.notebook_path = JE(e.notebook_path);
  },
  userFacingName() {
    return "Edit Notebook";
  },
  getToolUseSummary: wxn,
  getActivityDescription(e) {
    let n = wxn(e);
    return n ? `Editing notebook ${n}` : "Editing notebook";
  },
  get inputSchema() {
    return wjr();
  },
  get outputSchema() {
    return vjr();
  },
  toAutoClassifierInput(e) {
    let n = e.edit_mode ?? "replace";
    if (!xEe()) return `${e.notebook_path} ${n}: ${e.new_source}`;
    return {
      notebook_path: e.notebook_path,
      mode: n,
      ...(e.cell_id !== void 0 && { cell_id: e.cell_id }),
      ...(n !== "delete" && e.cell_type !== void 0 && { cell_type: e.cell_type }),
      ...(n === "delete" ? { ignored_source: e.new_source } : { adds: e.new_source }),
    };
  },
  getPath(e) {
    return e.notebook_path;
  },
  async preparePermissionMatcher({ notebook_path: e }) {
    return (n) => h4e(n, e);
  },
  fromAnotherProcess(e, n) {
    return {
      data: {
        ...e,
        notebook_path: String(n.notebook_path ?? ""),
        new_source: String(n.new_source ?? ""),
        edit_mode: String(n.edit_mode ?? "replace"),
        ...(e.cell_id !== void 0 && { cell_id: K4(Wc(e.cell_id, 200)) }),
        ...(e.error !== void 0 && { error: K4(Wc(e.error, 2000)) }),
        ...(e.old_source !== void 0 && { old_source: Wc(e.old_source, 1e5) }),
        original_file: "",
        updated_file: "",
      },
    };
  },
  mapToolResultToToolResultBlockParam({ cell_id: e, edit_mode: n, new_source: r, error: s }, h) {
    if (s) return { tool_use_id: h, type: "tool_result", content: s, is_error: !0 };
    switch (n) {
      case "replace":
        return { tool_use_id: h, type: "tool_result", content: `Updated cell ${e} with ${r}` };
      case "insert":
        return { tool_use_id: h, type: "tool_result", content: `Inserted cell ${e} with ${r}` };
      case "delete":
        return { tool_use_id: h, type: "tool_result", content: `Deleted cell ${e}` };
      default:
        return { tool_use_id: h, type: "tool_result", content: "Unknown edit mode" };
    }
  },
  create(e) {
    return {
      async checkPermissions(n, r) {
        let s = JE(n.notebook_path),
          h = di(s);
        e.session.writePermissionStash.stash(r.toolUseId, s, h.spellings);
        let y = l_(_he, n, e.permissions(), h);
        return y.behavior === "deny" ? y : (tNe(s, h) ?? y);
      },
      async validateInput(
        { notebook_path: n, cell_type: r, cell_id: s, edit_mode: h = "replace" },
        y,
      ) {
        let S = {
            toolUseId: y.toolUseId,
            session: e.session,
            agentId: e.agentId,
            agentWorktree: e.agentWorktree,
          },
          w = _b(Zi, [["notebook_path", n]]);
        if (w) return w;
        let H = LM(Zi, [["notebook_path", n]]);
        if (H) return H;
        let G = JE(n),
          V = KU(G, S);
        if (V) return { result: !1, message: V, errorCode: 12 };
        if (bjr(G) !== ".ipynb")
          return {
            result: !1,
            message:
              "File must be a Jupyter notebook (.ipynb file). For editing other file types, use the FileEdit tool.",
            errorCode: 2,
          };
        if (h === "insert" && !r)
          return {
            result: !1,
            message: "Cell type is required when using edit_mode=insert.",
            errorCode: 5,
          };
        let Y = e.readFileState.get(G);
        if (!Y)
          return {
            result: !1,
            message: "File has not been read yet. Read it first before writing to it.",
            errorCode: 9,
          };
        if (Za(G)) return { result: !0 };
        if (EAo())
          try {
            let { mode: be } = await ie().stat(G);
            if (Jrn(be)) return { result: !1, message: Xrn, errorCode: 11 };
          } catch (be) {
            if (!z(be)) throw be;
          }
        if ((await Wv(G)) > Y.timestamp)
          return {
            result: !1,
            message:
              "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
            errorCode: 10,
          };
        let he, _e;
        try {
          ({ content: he, lossyDecode: _e } = await E_(G, f$));
        } catch (be) {
          if (z(be)) return { result: !1, message: "Notebook file does not exist.", errorCode: 1 };
          if (z1(be)) return { result: !1, message: r7(), errorCode: 13 };
          throw be;
        }
        if (_e) return { result: !1, message: aen, errorCode: 15 };
        let ke = mt(he);
        if (!ke) return { result: !1, message: "Notebook is not valid JSON.", errorCode: 6 };
        if (!ctt(ke)) return { result: !1, message: Rve, errorCode: 6 };
        if (!s) {
          if (h !== "insert")
            return {
              result: !1,
              message: "Cell ID must be specified when not inserting a new cell.",
              errorCode: 7,
            };
        } else if (!ke.cells.some((be) => be.id === s)) {
          let be = g2e(s);
          if (be === void 0)
            return {
              result: !1,
              message: `Cell with ID "${s}" not found in notebook.`,
              errorCode: 8,
            };
          if (!ke.cells[be])
            return {
              result: !1,
              message: `Cell with index ${be} does not exist in notebook.`,
              errorCode: 7,
            };
        }
        return { result: !0 };
      },
      async call({ notebook_path: n, new_source: r, cell_id: s, cell_type: h, edit_mode: y }, S) {
        let w = {
            toolUseId: S.toolUseId,
            session: e.session,
            agentId: e.agentId,
            agentWorktree: e.agentWorktree,
          },
          { parentMessage: H } = S;
        if (H === void 0) throw Error("NotebookEdit: a call needs the message that issued it");
        let { readFileState: G, getFileHistoryState: V, applyFileHistoryOp: Y } = e,
          he = JE(n),
          _e = (be) => ({
            data: {
              new_source: r,
              old_source: void 0,
              cell_type: h ?? "code",
              language: "python",
              edit_mode: "replace",
              error: be,
              cell_id: s,
              notebook_path: he,
              original_file: "",
              updated_file: "",
            },
          }),
          ke = i9(w, he);
        await Pet(V, Y, he, H.uuid);
        try {
          return await kse(he, async () => {
            let be = await Fb(he, ke);
            try {
              let Te;
              try {
                Te = await be.readExisting(f$);
              } catch (qt) {
                if (z1(qt)) return _e(r7());
                throw qt;
              }
              if (Te === null) return _e("Notebook file does not exist.");
              if (Te.lossyDecode) return _e(aen);
              let { content: Re, encoding: Pe, lineEndings: Fe } = Te,
                He = await Wv(be.ioPath),
                Ve;
              try {
                Ve = X(Re);
              } catch {
                return _e("Notebook is not valid JSON.");
              }
              if (!ctt(Ve)) return _e(Rve);
              let Je = G.get(he),
                nt = !1;
              if (D4(Je)) {
                if (((nt = oNe(Je, WS(Re))), !nt && He <= Je.timestamp))
                  try {
                    nt = oNe(Je, _(aXe(Ve)));
                  } catch (qt) {
                    t(`NotebookEdit: the cells cannot be rendered as Read renders them: ${l(qt)}`);
                  }
              }
              let dt;
              if (!s) dt = 0;
              else {
                if (((dt = Ve.cells.findIndex((qt) => qt.id === s)), dt === -1)) {
                  let qt = g2e(s);
                  if (qt !== void 0) dt = qt;
                }
                if (y === "insert") dt += 1;
              }
              let Ze = y;
              if (Ze === "replace" && dt === Ve.cells.length) {
                if (((Ze = "insert"), !h)) h = "code";
              }
              let ut = Ve.metadata?.language_info?.name ?? "python",
                Rt = void 0;
              if (Ve.nbformat > 4 || (Ve.nbformat === 4 && Ve.nbformat_minor >= 5)) {
                if (Ze === "insert") Rt = Sjr().slice(0, 8);
                else if (s !== null) Rt = s;
              }
              let vt;
              if (Ze === "delete") {
                let qt = Ve.cells[dt];
                ((vt = Array.isArray(qt.source) ? qt.source.join("") : qt.source),
                  Ve.cells.splice(dt, 1));
              } else if (Ze === "insert") {
                let qt;
                if (h === "markdown")
                  qt = { cell_type: "markdown", id: Rt, source: r, metadata: {} };
                else
                  qt = {
                    cell_type: "code",
                    id: Rt,
                    source: r,
                    metadata: {},
                    execution_count: null,
                    outputs: [],
                  };
                Ve.cells.splice(dt, 0, qt);
              } else {
                let qt = Ve.cells[dt];
                if (
                  ((vt = Array.isArray(qt.source) ? qt.source.join("") : qt.source),
                  (qt.source = r),
                  qt.cell_type === "code")
                )
                  ((qt.execution_count = null), (qt.outputs = []));
                if (h && h !== qt.cell_type) qt.cell_type = h;
              }
              let Pt = _(Ve, null, 1);
              if (Buffer.byteLength(J5e(Pt, Fe), Pe) > f$)
                return _e(
                  `Edit rejected: the updated notebook would exceed the maximum size this tool can read (${Qt(f$)}). The file was left unchanged.`,
                );
              await be.recheckBeforeWrite();
              let Wt = await oPe(be.ioPath, Pt, Pe, Fe);
              return (
                G.set(he, {
                  content: Pt,
                  timestamp: Wt,
                  offset: void 0,
                  limit: void 0,
                  ...(!nt && { contentNotInModelContext: !0 }),
                }),
                {
                  data: {
                    new_source: r,
                    old_source: vt,
                    cell_type: h ?? "code",
                    language: ut,
                    edit_mode: Ze ?? "replace",
                    cell_id: Rt || void 0,
                    error: "",
                    notebook_path: he,
                    original_file: Re,
                    updated_file: Pt,
                  },
                }
              );
            } catch (Te) {
              _pe(Te, be, he);
            } finally {
              await be.close();
            }
          });
        } catch (be) {
          if (be instanceof _g) throw be;
          return _e(
            Ai(be instanceof Error ? be.message : "Unknown error occurred while editing notebook"),
          );
        }
      },
    };
  },
};
