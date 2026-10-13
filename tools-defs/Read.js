// Read tool definition — chunk-kasbfbhj.js [3540837, 3546387)
export const ReadTool = {
  name: rt,
  ruleContentField: "file_path",
  searchHint: "read files, images, PDFs, notebooks",
  remoteExecution: {
    supported: !0,
    decidingInputFields: ["file_path", "offset", "limit", "pages", "allow_large"],
  },
  backgrounding: "never",
  maxResultSizeChars: 1 / 0,
  strict: !0,
  async description() {
    return Yms;
  },
  async prompt({ model: e, leanPrompt: n }) {
    return Jms(e, VYe() ? Xms : Sdo, n);
  },
  get inputSchema() {
    return KIr();
  },
  coerceInput: ysr,
  get outputSchema() {
    return VIr();
  },
  get outputSchemaAcrossProcesses() {
    return ZIr();
  },
  fromAnotherProcess(e, n) {
    let r = tOr(eOr(e, String(n.file_path ?? "")));
    if (r.type === "text" && r.file.truncatedByTokenCap === !0) Wgo(r, pXe(r.file));
    let s = r.type === "image" && r.file.dimensions ? EQ(r.file.dimensions) : null;
    return { data: r, ...(s !== null && { newMessages: [xe({ content: s, isMeta: !0 })] }) };
  },
  userFacingName: vts,
  getToolUseSummary: p7r,
  getActivityDescription(e) {
    let n = p7r(e);
    return n ? `Reading ${n}` : "Reading file";
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    let n = Zge(e);
    return n === void 0 ? e.file_path : { file_path: e.file_path, [Or]: n, ...kCe(e) };
  },
  suppressesAllPermissionUpdates(e) {
    return mu(e);
  },
  isSearchOrReadCommand() {
    return { isSearch: !1, isRead: !0 };
  },
  getPath({ file_path: e }) {
    return e || (vv(rt) ? "" : se());
  },
  backfillObservableInput(e) {
    if (typeof e.file_path === "string" && !vv(rt)) e.file_path = JE(e.file_path);
  },
  async preparePermissionMatcher({ file_path: e }) {
    return (n) => h4e(n, e);
  },
  extractSearchText() {
    return "";
  },
  stripForCreation: hhn,
  restoreTransientForRemap: mhn,
  stripForStorage(e) {
    if (typeof e !== "object" || e === null) return e;
    if (e.type === "parts") return hhn(e);
    if (typeof e.file !== "object" || e.file === null) return e;
    switch (e.type) {
      case "text":
        if (e.file.content === "") return e;
        return { ...e, file: { ...e.file, content: "" } };
      case "image":
        if (e.file.base64 === "") return e;
        return { ...e, file: { ...e.file, base64: "" } };
      case "pdf":
        if (e.file.base64 === "") return e;
        return { ...e, file: { ...e.file, base64: "" } };
      case "notebook": {
        let { cells: n } = e.file;
        if (!Array.isArray(n) || n.length === 0 || n[0] == null) return e;
        return { ...e, file: { ...e.file, cells: Array(n.length) } };
      }
      default:
        return e;
    }
  },
  create(e) {
    return {
      async checkPermissions(n, r) {
        let s = uXe(e, r),
          h = JE(n.file_path),
          y = di(h),
          S = y.spellings;
        if (
          (s.session.writePermissionStash.stash(s.toolUseId, h, S, "read"),
          O() === "macos" && s.toolUseId !== void 0)
        ) {
          let { own: w, alt: H } = await bhn(h, S),
            G = s.session.writePermissionStash;
          if ((G.stashIdentity(s.toolUseId, h, w), H))
            G.stashIdentity(s.toolUseId, H.path, H.identity);
        }
        return CE($S, n, s.permissions(), y);
      },
      async validateInput(n, r) {
        let s = uXe(e, r),
          { file_path: h, pages: y } = n;
        if (Yx() && mu(n)) return { result: !1, message: LB(), errorCode: 14 };
        let S = _b(rt, [["file_path", h]]);
        if (S) return S;
        let w = LM(rt, [["file_path", h]]);
        if (w) return w;
        if (y !== void 0) {
          let he = fXe(y);
          if (!he.ok) return { result: !1, message: he.message, errorCode: he.errorCode };
        }
        let H = JE(h);
        if (Ui(H, s.permissions(), "read", "deny") !== null)
          return { result: !1, message: oen, errorCode: 1, deniedByPermissionRule: !0 };
        if (Bn(H)) return { result: !0 };
        let Y = $k.extname(H).toLowerCase();
        if (HLe(H) && !Tct(H))
          return {
            result: !1,
            message: `This tool cannot read binary files. The file appears to be a binary ${Y} file. Use a skill for this file type if one is available, or a shell command or script that can read the format.`,
            errorCode: 4,
          };
        if (GIr(H))
          return {
            result: !1,
            message: `Cannot read '${Hd(h)}': this device file would block or produce infinite output.`,
            errorCode: 9,
          };
        if (s.remoteCall !== void 0 && D4e(Y)) {
          let he = vCr(s.remoteCall.origin.transport),
            _e = y === void 0 ? void 0 : fXe(y),
            ke = _e !== void 0 && _e.ok ? _e.range.lastPage - _e.range.firstPage + 1 : 0,
            be = y === void 0 && he.wholePdfMaxRawBytes === 0;
          if (be || ke > he.pdfMaxPagesPerRead)
            return {
              result: !1,
              message: `${be ? "A whole PDF cannot be returned from this machine to the calling session" : `${y} is too many pages to return from this machine in one call`}. Use the pages parameter with at most ${he.pdfMaxPagesPerRead} pages per call (for example pages: 1-3, which come back as images), or read the file where the session runs.`,
              errorCode: 16,
            };
        }
        return { result: !0 };
      },
      async call(n, r) {
        let s = uXe(e, r);
        return nOr(n, s, r.parentMessage);
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, n) {
    switch (e.type) {
      case "image":
        return {
          tool_use_id: n,
          type: "tool_result",
          content: [
            {
              type: "image",
              source: { type: "base64", data: e.file.base64, media_type: e.file.type },
            },
          ],
        };
      case "notebook":
        return chn(e.file.cells, n);
      case "pdf": {
        let r = `PDF file read: ${e.file.filePath} (${Qt(e.file.originalSize)})`;
        return {
          tool_use_id: n,
          type: "tool_result",
          content: e.file.base64
            ? [
                { type: "text", text: r },
                {
                  type: "document",
                  source: { type: "base64", media_type: "application/pdf", data: e.file.base64 },
                },
              ]
            : r,
        };
      }
      case "parts": {
        let r = `PDF pages extracted: ${e.file.count} page(s) from ${e.file.filePath} (${Qt(e.file.originalSize)})`,
          s = e.pages ?? [],
          h = e.firstPage ?? 1;
        return {
          tool_use_id: n,
          type: "tool_result",
          content: s.length
            ? [
                { type: "text", text: r },
                ...s.map((y, S) =>
                  y.base64
                    ? {
                        type: "image",
                        source: { type: "base64", data: y.base64, media_type: y.mediaType },
                      }
                    : {
                        type: "text",
                        text: `[Page ${h + S} could not be processed as an image${y.error ? `: ${y.error}` : ""}]`,
                      },
                ),
              ]
            : r,
        };
      }
      case "file_unchanged":
        return {
          tool_use_id: n,
          type: "tool_result",
          content: e.source === "seeded" ? Kms(e.file.filePath) : qms(),
        };
      case "text": {
        let r;
        if (e.file.content) r = yhn(e) + Q5e({ ...e.file, tabAwareSeparator: VYe() });
        else if (e.file.numLines >= 1 && e.file.totalLines > 1)
          r = yhn(e) + sRr("", e.file.startLine, "\t");
        else if (e.file.numLines >= 1 || e.file.totalLines === 0)
          r =
            "<system-reminder>Warning: the file exists but the contents are empty.</system-reminder>";
        else
          r = `<system-reminder>Warning: the file exists but is shorter than the provided offset (${e.file.startLine}). The file has ${e.file.totalLines} lines.</system-reminder>`;
        return { tool_use_id: n, type: "tool_result", content: r + oOr(e) };
      }
    }
  },
};
