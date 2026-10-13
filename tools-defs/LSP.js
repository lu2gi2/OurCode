// LSP tool definition — chunk-sfjcyk7w.js [106601, 110584)
export const LSPTool = {
  name: L$,
  searchHint: "code intelligence (definitions, references, symbols, hover)",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  isLsp: !0,
  async description() {
    return Poo;
  },
  userFacingName() {
    return "LSP";
  },
  shouldDefer: !0,
  isEnabled() {
    return kHe();
  },
  get inputSchema() {
    return si();
  },
  get outputSchema() {
    return ii();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  ruleContentField: "filePath",
  getPath({ filePath: e }) {
    return et(e);
  },
  async prompt() {
    return Poo;
  },
  renderToolUseMessage: ai,
  create(e) {
    return {
      async validateInput(r) {
        let n = hr().safeParse(r);
        if (!n.success)
          return { result: !1, message: `Invalid input: ${n.error.message}`, errorCode: 3 };
        let s = ie(),
          f = et(r.filePath);
        if (Oe(r.filePath, f) || OCo(mf(s, f))) return { result: !0 };
        let y;
        try {
          y = await s.stat(f);
        } catch (h) {
          if (z(h))
            return { result: !1, message: `File does not exist: ${r.filePath}`, errorCode: 1 };
          let S = W(h);
          return (
            t(`Failed to access file stats for LSP operation on ${r.filePath}: ${S.message}`, {
              level: "error",
            }),
            { result: !1, message: `Cannot access file: ${r.filePath}. ${S.message}`, errorCode: 4 }
          );
        }
        if (!y.isFile())
          return { result: !1, message: `Path is not a file: ${r.filePath}`, errorCode: 2 };
        return { result: !0 };
      },
      async checkPermissions(r, n) {
        let s = et(r.filePath),
          f = di(s);
        return (
          e.session.writePermissionStash.stash(n.toolUseId, s, f.spellings, "read"),
          CE(Rt, r, e.permissions(), f)
        );
      },
      async call(r, n) {
        let s = et(r.filePath),
          f = K5e({ toolUseId: n.toolUseId, session: e.session }, s),
          y = se();
        if (Ret().status === "pending") await nXo();
        let S = e2e();
        if (!S) {
          let v = Ret();
          if (v.status === "failed")
            return (
              t(`LSP initialization failed: ${v.error.message}`, { level: "error" }),
              {
                data: {
                  operation: r.operation,
                  result: `LSP initialization failed: ${v.error.message}`,
                  filePath: r.filePath,
                },
              }
            );
          return (
            c(Error("LSP server manager not initialized when tool was called")),
            {
              data: {
                operation: r.operation,
                result: "LSP server manager not initialized. This may indicate a startup issue.",
                filePath: r.filePath,
              },
            }
          );
        }
        let { method: w, params: C } = ci(r, s);
        try {
          if (!S.isFileOpen(s)) {
            let P = await jHt(s, f, n.signal),
              G = P.handle;
            try {
              let q = await G.stat();
              if (q.size > ni)
                return {
                  data: {
                    operation: r.operation,
                    result: `File too large for LSP analysis (${Math.ceil(q.size / 1e6)}MB exceeds 10MB limit)`,
                    filePath: r.filePath,
                  },
                };
              let H = await G.readFile({ encoding: "utf-8" });
              await S.openFile(s, H);
            } finally {
              await P.close();
            }
          }
          let v = await S.sendRequest(s, w, C);
          if (v === void 0)
            return (
              t(
                `No LSP server available for file type ${vt.extname(s)} for operation ${r.operation} on file ${r.filePath}`,
              ),
              {
                data: {
                  operation: r.operation,
                  result: `No LSP server available for file type: ${vt.extname(s)}`,
                  filePath: r.filePath,
                },
              }
            );
          let R = S.getServerForFile(s)?.config?.pluginSource;
          if (R) vT(R);
          if (r.operation === "incomingCalls" || r.operation === "outgoingCalls") {
            let P = v;
            if (!P || P.length === 0)
              return {
                data: {
                  operation: r.operation,
                  result: "No call hierarchy item found at this position",
                  filePath: r.filePath,
                  resultCount: 0,
                  fileCount: 0,
                },
              };
            let G =
              r.operation === "incomingCalls"
                ? "callHierarchy/incomingCalls"
                : "callHierarchy/outgoingCalls";
            if (((v = await S.sendRequest(s, G, { item: P[0] })), v === void 0))
              t(`LSP server returned undefined for ${G} on ${r.filePath}`);
          }
          if (
            v &&
            Array.isArray(v) &&
            (r.operation === "findReferences" ||
              r.operation === "goToDefinition" ||
              r.operation === "goToImplementation" ||
              r.operation === "workspaceSymbol")
          )
            if (r.operation === "workspaceSymbol") {
              let P = v,
                G = P.filter((V) => V?.location?.uri).map((V) => V.location),
                q = await kr(G, y),
                H = new Set(q.map((V) => V.uri));
              v = P.filter((V) => !V?.location?.uri || H.has(V.location.uri));
            } else {
              let P = v.map(Qe),
                G = await kr(P, y),
                q = new Set(G.map((H) => H.uri));
              v = v.filter((H) => {
                let V = Qe(H);
                return !V.uri || q.has(V.uri);
              });
            }
          let { formatted: N, resultCount: O, fileCount: B } = pi(r.operation, v, y);
          return {
            data: {
              operation: r.operation,
              result: N,
              filePath: r.filePath,
              resultCount: O,
              fileCount: B,
            },
          };
        } catch (v) {
          let N = W(v).message;
          return (
            t(`LSP tool request failed for ${r.operation} on ${r.filePath}: ${N}`, {
              level: "error",
            }),
            {
              data: {
                operation: r.operation,
                result: `Error performing ${r.operation}: ${N}`,
                filePath: r.filePath,
              },
            }
          );
        }
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return { tool_use_id: r, type: "tool_result", content: e.result };
  },
};
