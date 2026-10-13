// Write tool definition — chunk-kasbfbhj.js [734200, 739459)
export const WriteTool = {
  name: Xt,
  ruleContentField: "file_path",
  searchHint: "create or overwrite files",
  remoteExecution: { supported: !0, decidingInputFields: ["file_path", "content"] },
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  strict: !0,
  async description() {
    return "Write a file to the local filesystem.";
  },
  userFacingName: qxt,
  getToolUseSummary: zNe,
  getActivityDescription(e) {
    let n = zNe(e);
    return n ? `Writing ${n}` : "Writing file";
  },
  async prompt({ model: e, leanPrompt: n }) {
    return Qms(e, n);
  },
  get inputSchema() {
    return Vxt();
  },
  get outputSchema() {
    return Xxt();
  },
  get outputSchemaAcrossProcesses() {
    return Wto();
  },
  fromAnotherProcess(e, n, r, s) {
    if (s !== void 0 && !e.staged)
      if (e.type === "create") vnt([], s, String(n.content ?? ""));
      else vnt(e.structuredPatch, s);
    return {
      data: { ...e, filePath: String(n.file_path ?? ""), userModified: r?.userModified === !0 },
    };
  },
  coerceInput(e) {
    let n = Nnr(e);
    return n !== null && Gto() ? UU(Vxt(), n) : null;
  },
  stripForStorage(e) {
    if (typeof e !== "object" || e === null) return e;
    if (e.type !== "update") return e;
    if (e.content === "" && (e.originalFile ?? "") === "") return e;
    if (
      Array.isArray(e.structuredPatch) &&
      e.structuredPatch.length === 0 &&
      e.originalFile === null
    )
      return e;
    return { ...e, content: "", originalFile: null };
  },
  toAutoClassifierInput(e) {
    let n = Zge(e);
    return n === void 0
      ? `${e.file_path}: ${e.content}`
      : { file_path: e.file_path, content: e.content, [Or]: n, ...kCe(e) };
  },
  suppressesAllPermissionUpdates(e) {
    return mu(e);
  },
  getPath(e) {
    return e.file_path;
  },
  inputsEquivalent(e, n) {
    if (e.file_path !== n.file_path) return !1;
    if (e.content === n.content) return !0;
    let r = hC(e.file_path),
      s = (h) => (r === null ? h : Qie(r, h)).replace(/\n+$/, "");
    return s(e.content) === s(n.content);
  },
  backfillObservableInput(e) {
    if (typeof e.file_path === "string" && !vv(Xt)) e.file_path = JE(e.file_path);
  },
  async preparePermissionMatcher({ file_path: e }) {
    return (n) => h4e(n, e);
  },
  extractSearchText() {
    return "";
  },
  create(e) {
    return {
      async checkPermissions(n, r) {
        let s = JE(n.file_path),
          h = di(s);
        e.session.writePermissionStash.stash(r.toolUseId, s, h.spellings);
        let y = l_(sv, n, e.permissions(), h),
          S = y.behavior === "deny" ? y : (tNe(s, h) ?? y);
        if (S.behavior === "deny" || (S.updatedInput !== void 0 && S.updatedInput !== n)) return S;
        let w = Jie(n, "content", DM(e), { host: e.session.host, toolUseId: r.toolUseId });
        return w === n ? S : { ...S, updatedInput: w };
      },
      async validateInput(n, r) {
        let s = HU(e, r),
          { file_path: h, content: y } = n;
        if (Yx() && mu(n)) return { result: !1, message: LB(), errorCode: 14 };
        let S = _b(Xt, [["file_path", h]]);
        if (S) return S;
        let w = LM(Xt, [["file_path", h]]);
        if (w) return w;
        let H = JE(h),
          G = KU(H, s);
        if (G) return { result: !1, message: G, errorCode: 7 };
        if (s.agentId && /^(REPORT|SUMMARY|FINDINGS|ANALYSIS).*\.md$/i.test($to(H)))
          return (
            i("tengu_subagent_md_report_blocked", { contentBytes: Buffer.byteLength(y) }),
            {
              result: !1,
              message:
                "Subagents should return findings as text, not write report files. Include this content in your final response instead.",
              errorCode: 5,
            }
          );
        let V = dYt(H, y);
        if (V) return { result: !1, message: V, errorCode: 0 };
        let Y = $U(H, y, DM(s));
        if (Y) return { result: !1, message: Y, errorCode: 0 };
        if (Ui(H, s.permissions(), "edit", "deny") !== null)
          return { result: !1, message: oen, errorCode: 1, deniedByPermissionRule: !0 };
        if (BD(H, s.permissions()))
          return { result: !1, message: ien, errorCode: 13, deniedByPermissionRule: !0 };
        if (Za(H)) return { result: !0 };
        let _e = ie(),
          ke;
        try {
          let Re = await _e.stat(H);
          if (((ke = Re.mtimeMs), Re.isDirectory()))
            return {
              result: !1,
              message: `${Hd(h)} is a directory, not a file. To create a file inside it, include the file name in file_path.`,
              errorCode: 17,
            };
          if (!Re.isFile())
            return {
              result: !1,
              message: `${Hd(h)} exists but is not a regular file (a device, FIFO or socket). Write only creates or overwrites regular files.`,
              errorCode: 18,
            };
          if (Jrn(Re.mode)) return { result: !1, message: Xrn, errorCode: 6 };
        } catch (Re) {
          if (z(Re)) return { result: !0 };
          throw Re;
        }
        let be = s.readFileState.get(H);
        if (!be || be.isPartialView) {
          let Re = We(s.model()),
            Pe = E7t(Re),
            Fe = !be && !Qxt(H) && !MXt(Re, s.remoteCall) && Gce(Xt, H, s, s.permissions()),
            He = Fe ? s.remoteCall?.readBaseline : void 0,
            Ve = He === void 0 ? "absent" : await uae(H, He, () => Gce(Xt, H, s, s.permissions()));
          if (
            (i("tengu_write_tool_not_read_hypothetical", {
              wouldHaveResult: be && Math.floor(ke) > be.timestamp ? b("errorCode3") : b("success"),
              isPartialView: be?.isPartialView === !0,
              isFilePathAbsolute: Bto(h),
              guardSkipped: Fe,
              modelBucket: Pe,
              servedCall: s.remoteCall !== void 0,
              ...(s.remoteCall?.model !== void 0 && { callerModelBucket: E7t(s.remoteCall.model) }),
              readBaseline: d(Ve),
            }),
            !Fe)
          )
            return { result: !1, message: ren, errorCode: 2 };
          if (Ve === "mismatch")
            return { result: !1, message: p0n(s.remoteCall?.origin.hostName), errorCode: 3 };
          return { result: !0 };
        }
        if (Math.floor(ke) > be.timestamp) {
          let Re = WA(be),
            Pe = !1;
          if (Re) {
            let Fe = await _e.readFileBytes(H);
            Pe = f0n(be, Fe.toString("utf8"));
          }
          if (!Pe) return { result: !1, message: p0n(), errorCode: 3 };
        }
        return { result: !0 };
      },
      async call(n, r) {
        let { parentMessage: s } = r;
        if (s === void 0) throw Error("Write: a call needs the message that issued it");
        return Kto(n, HU(e, r), s);
      },
    };
  },
  mapToolResultToToolResultBlockParam(
    {
      filePath: e,
      type: n,
      userModified: r,
      memdirStamped: s,
      staged: h,
      stagedWording: y,
      syncedSkillNext: S,
    },
    w,
  ) {
    if (h) return { tool_use_id: w, type: "tool_result", content: Blr(e, y ?? "review") };
    let H = r ? " The user modified your proposed content before accepting it." : "",
      G = r || s ? "" : uyr,
      V = oae(S);
    switch (n) {
      case "create":
        return {
          tool_use_id: w,
          type: "tool_result",
          content: `File created successfully at: ${e}${H}${G}${V}`,
        };
      case "update":
        return {
          tool_use_id: w,
          type: "tool_result",
          content: `The file ${e} has been updated successfully.${H}${G}${V}`,
        };
    }
  },
};
