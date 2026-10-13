// Edit tool definition — chunk-kasbfbhj.js [4159904, 4167077)
export const EditTool = {
  name: ht,
  ruleContentField: "file_path",
  searchHint: "modify file contents in place",
  remoteExecution: {
    supported: !0,
    decidingInputFields: ["file_path", "old_string", "new_string", "replace_all"],
  },
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  strict: !0,
  async description() {
    return "A tool for editing files";
  },
  async prompt({ model: e, leanPrompt: n }) {
    return lxn(e, n);
  },
  userFacingName: AEe,
  getToolUseSummary: rJe,
  getActivityDescription(e) {
    let n = rJe(e);
    return n ? `Editing ${n}` : "Editing file";
  },
  get inputSchema() {
    return mae();
  },
  get outputSchema() {
    return UNe();
  },
  get outputSchemaAcrossProcesses() {
    return hjr();
  },
  fromAnotherProcess(e, n, r, s) {
    if (s !== void 0 && !e.staged) vnt(e.structuredPatch, s);
    return {
      data: { ...e, filePath: String(n.file_path ?? ""), userModified: r?.userModified === !0 },
    };
  },
  coerceInput: axn,
  stripForStorage(e) {
    if (typeof e !== "object" || e === null) return e;
    if ((e.originalFile ?? "") === "") return e;
    return { ...e, originalFile: "" };
  },
  toAutoClassifierInput(e) {
    let n = Zge(e);
    if (!xEe())
      return n === void 0
        ? `${e.file_path}: ${e.new_string}`
        : { file_path: e.file_path, new_string: e.new_string, [Or]: n, ...kCe(e) };
    let r = oxn(),
      s = e.old_string,
      h = r > 0 && typeof s === "string" && s.length > r;
    return {
      file_path: e.file_path,
      adds: e.new_string,
      removes: h ? s.slice(0, r) : s,
      ...(r > 0 && { removesTruncated: h }),
      ...(e.replace_all === !0 && { replaceAll: !0 }),
      ...(n !== void 0 && { [Or]: n, ...kCe(e) }),
    };
  },
  suppressesAllPermissionUpdates(e) {
    return mu(e);
  },
  getPath(e) {
    return e.file_path;
  },
  backfillObservableInput(e) {
    if (typeof e.file_path === "string" && !vv(ht)) e.file_path = JE(e.file_path);
  },
  async preparePermissionMatcher({ file_path: e }) {
    return (n) => h4e(n, e);
  },
  inputsEquivalent(e, n) {
    let r = hC(e.file_path),
      s = (h) => ({
        file_path: h.file_path,
        edits: [
          {
            old_string: h.old_string,
            new_string: r === null ? h.new_string : Qie(r, h.new_string),
            replace_all: h.replace_all ?? !1,
          },
        ],
      });
    return vv(ht) ? g7r(s(e), s(n)) : Cts(s(e), s(n));
  },
  create(e) {
    return {
      async checkPermissions(n, r) {
        let s = JE(n.file_path),
          h = di(s);
        e.session.writePermissionStash.stash(r.toolUseId, s, h.spellings);
        let y = l_(LS, n, e.permissions(), h),
          S = y.behavior === "deny" ? y : (tNe(s, h) ?? y);
        if (S.behavior === "deny" || (S.updatedInput !== void 0 && S.updatedInput !== n)) return S;
        let w = Jie(n, "new_string", DM(e), { host: e.session.host, toolUseId: r.toolUseId });
        return w === n || w.new_string === n.old_string ? S : { ...S, updatedInput: w };
      },
      async validateInput(n, r) {
        let s = HU(e, r);
        if (Yx() && mu(n)) return { result: !1, message: LB(), errorCode: 14 };
        let { file_path: h, replace_all: y = !1 } = n,
          { old_string: S, new_string: w } = n,
          H = _b(ht, [["file_path", h]]);
        if (H) return H;
        let G = LM(ht, [["file_path", h]]);
        if (G) return G;
        let V = JE(h),
          Y = KU(V, s);
        if (Y) return { result: !1, message: Y, errorCode: 12 };
        let he = dYt(V, w);
        if (he) return { result: !1, message: he, errorCode: 0 };
        let _e = $U(V, w, DM(s));
        if (_e) return { result: !1, message: _e, errorCode: 0 };
        if (S === w)
          return {
            result: !1,
            behavior: "ask",
            message: "No changes to make: old_string and new_string are exactly the same.",
            errorCode: 1,
          };
        if (Ui(V, s.permissions(), "edit", "deny") !== null)
          return {
            result: !1,
            behavior: "ask",
            message: oen,
            errorCode: 2,
            deniedByPermissionRule: !0,
          };
        if (BD(V, s.permissions()))
          return {
            result: !1,
            behavior: "ask",
            message: sen,
            errorCode: 13,
            deniedByPermissionRule: !0,
          };
        if (Za(V)) return { result: !0 };
        let be = ie();
        try {
          let { size: Ze, mode: ut } = await be.stat(V);
          if (Ze > gxn)
            return {
              result: !1,
              behavior: "ask",
              message: `File is too large to edit (${Qt(Ze)}). Maximum editable file size is ${Qt(gxn)}.`,
              errorCode: 10,
            };
          if (Jrn(ut)) return { result: !1, behavior: "ask", message: Xrn, errorCode: 11 };
        } catch (Ze) {
          if (!z(Ze)) throw Ze;
        }
        ({ old_string: S, new_string: w } = _xn(n, s));
        let Te,
          Re = !1;
        try {
          let Ze = await be.readFileBytes(V),
            ut = Ze.length >= 2 && Ze[0] === 255 && Ze[1] === 254 ? "utf16le" : "utf8";
          ((Re = IAo(Ze, ut)), (Te = Tg(Ze.toString(ut))));
        } catch (Ze) {
          if (z(Ze)) Te = null;
          else throw Ze;
        }
        if (Te === null) {
          if (S === "") return { result: !0 };
          let Ze = await sPe(V),
            ut = await Tse(V),
            Rt = `File does not exist. ${W1} ${se()}.`;
          if (ut) Rt += ` Did you mean ${ut}?`;
          else if (Ze) Rt += ` Did you mean ${Ze}?`;
          return { result: !1, behavior: "ask", message: Hd(Rt), errorCode: 4 };
        }
        if (S === "") {
          if (Te.trim() !== "")
            return {
              result: !1,
              behavior: "ask",
              message: "Cannot create new file - file already exists.",
              errorCode: 3,
            };
          return { result: !0 };
        }
        if (V.endsWith(".ipynb"))
          return {
            result: !1,
            behavior: "ask",
            message: `File is a Jupyter Notebook. Use the ${Zi} to edit this file.`,
            errorCode: 5,
          };
        let Pe = s.readFileState.get(V),
          Fe = (Ze) => {
            let ut = MEe(Te, S, y),
              Rt = ut === "applies" && Gce(ht, V, s, s.permissions());
            return (
              i("tengu_edit_tool_stale_read", {
                wouldHaveResult: hxn(ut),
                recovered: Rt,
                trigger: Ze,
              }),
              Rt
            );
          },
          He = (Ze) => ({ result: !1, behavior: "ask", message: p0n(Ze), errorCode: 7 });
        if (!Pe || Pe.isPartialView) {
          let Ze = We(s.model()),
            ut = E7t(Ze),
            Rt = !MXt(Ze, s.remoteCall) && Gce(ht, V, s, s.permissions()),
            vt = Rt && Pe === void 0 ? s.remoteCall?.readBaseline : void 0,
            Ft = vt === void 0 ? "absent" : await uae(V, vt, () => Gce(ht, V, s, s.permissions()));
          if (
            (i("tengu_edit_tool_not_read_hypothetical", {
              wouldHaveResult: hxn(MEe(Te, S, y)),
              isPartialView: Pe?.isPartialView === !0,
              isFilePathAbsolute: PEe(h),
              guardSkipped: Rt,
              modelBucket: ut,
              servedCall: s.remoteCall !== void 0,
              ...(s.remoteCall?.model !== void 0 && { callerModelBucket: E7t(s.remoteCall.model) }),
              readBaseline: d(Ft),
            }),
            !Rt)
          )
            return {
              result: !1,
              behavior: "ask",
              message: ren,
              meta: { isFilePathAbsolute: String(PEe(h)) },
              errorCode: 6,
            };
          if (Ft === "mismatch" && !Fe(b("baseline"))) return He(s.remoteCall?.origin.hostName);
        }
        if (Pe) {
          if (yxn(Pe) && !Fe(b("refreshed"))) return He();
          if ((await Wv(V)) > Pe.timestamp) {
            if (!(WA(Pe) && z$(Pe, Te)) && !Fe(b("mtime"))) return He();
          }
        }
        if (Re) return { result: !1, message: aen, errorCode: 15 };
        let Ve = Te,
          Je = zDe(Ve, S);
        if (!Je) {
          let Ze = Ets(S)
            ? `
(note: Edit also tried swapping \\uXXXX escapes and their characters; neither form matched, so the mismatch is likely elsewhere in old_string. Re-read the file and copy the exact surrounding text.)`
            : "";
          return {
            result: !1,
            behavior: "ask",
            message: `String to replace not found in file.
String: ${S}${Ze}`,
            meta: { isFilePathAbsolute: String(PEe(h)) },
            errorCode: 8,
          };
        }
        let nt = Ve.split(Je).length - 1;
        if (nt > 1 && !y)
          return {
            result: !1,
            behavior: "ask",
            message: `Found ${nt} matches of the string to replace, but replace_all is false. To replace all occurrences, set replace_all to true. To replace only one occurrence, please provide more context to uniquely identify the instance.
String: ${S}`,
            meta: { isFilePathAbsolute: String(PEe(h)), actualOldString: Je },
            errorCode: 9,
          };
        let dt = ixn(V, Ve, () => (y ? Ve.replaceAll(Je, w) : Ve.replace(Je, w)));
        if (dt !== null) return dt;
        return { result: !0, meta: { actualOldString: Je } };
      },
      async call(n, r) {
        let { parentMessage: s } = r;
        if (s === void 0) throw Error("Edit: a call needs the message that issued it");
        return yjr(n, HU(e, r), s);
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, n) {
    let {
      filePath: r,
      userModified: s,
      replaceAll: h,
      staleRecovered: y,
      contentNotInModelContext: S,
      staged: w,
      stagedWording: H,
      syncedSkillNext: G,
    } = e;
    if (w) return { tool_use_id: n, type: "tool_result", content: Blr(r, H ?? "review") };
    let V = s ? ".  The user modified your proposed changes before accepting them. " : "",
      Y = y
        ? " (note: the file had been modified on disk since you last read it \u2014 the edit applied cleanly, but the file contains other changes not in your context. Read it before edits that depend on surrounding content.)"
        : s || S
          ? ""
          : uyr,
      he = oae(G);
    if (h)
      return {
        tool_use_id: n,
        type: "tool_result",
        content: `The file ${r} has been updated${V}. All occurrences were successfully replaced.${Y}${he}`,
      };
    return {
      tool_use_id: n,
      type: "tool_result",
      content: `The file ${r} has been updated successfully${V}.${Y}${he}`,
    };
  },
};
