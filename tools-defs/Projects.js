// Projects tool definition — chunk-dpfeshp3.js [25673, 28206)
export const ProjectsTool = {
  name: X,
  searchHint: "read and write the session's attached claude.ai project",
  backgrounding: "never",
  maxResultSizeChars: 300000,
  persistenceThresholdCeiling: 300000,
  isEnabled() {
    return sn("allow_projects_tool") && ve() !== void 0;
  },
  async description() {
    return le({ localUploads: de(), memory: !Ce() });
  },
  async prompt() {
    return le({ localUploads: de(), memory: !Ce() });
  },
  get inputSchema() {
    return de() === "elsewhere" ? at() : rt();
  },
  get outputSchema() {
    return it();
  },
  isConcurrencySafe() {
    return !1;
  },
  isReadOnly(e) {
    return dt(e.method);
  },
  isDestructive(e) {
    return e.method === "project_write" || e.method === "project_delete";
  },
  userFacingName(e) {
    return `Project: ${te(e)}`;
  },
  getToolUseSummary(e) {
    return e?.method ? te(e) : null;
  },
  toAutoClassifierInput(e) {
    return te(e);
  },
  renderToolUseMessage(e) {
    return te(e);
  },
  coerceInput: ge,
  create(e) {
    return {
      async validateInput(n) {
        let r = ct[n.method].filter((s) => n[s] === void 0);
        if (r.length > 0)
          return { result: !1, message: `${n.method} requires: ${r.join(", ")}.`, errorCode: 1 };
        if (n.method === "project_write") {
          let s = n.content !== void 0,
            c = n.local_path !== void 0;
          if (s === c)
            return {
              result: !1,
              message: 'project_write requires exactly one of "content" or "local_path".',
              errorCode: 1,
            };
        }
        return { result: !0 };
      },
      async call(n, r) {
        let s = r.signal,
          c = ve();
        if (!c)
          throw new G(
            "No project attached to this session. Project tools are available when the session is started inside a claude.ai Project.",
          );
        let h = "";
        try {
          let m = await ut(e.credentials);
          h = m.accessToken;
          let w = await Ft(
            n,
            c,
            e.session,
            s,
            e.storageV5,
            e.credentials,
            gt(n, r, e),
            () => {
              let y = N_();
              return (y === void 0 ? eNe(e) : y.maxBytes > 0)
                ? je({
                    model: e.model(),
                    configuredWindow: e.autoCompactWindow(),
                    messages: e.messages(),
                  })
                : void 0;
            },
            e.permissions,
            e.agentId === void 0 ? Q.peek(e.session)?.host : void 0,
            e.agentId === void 0 ? e.readFileState : void 0,
          );
          return {
            data: m.expanded
              ? {
                  ...w,
                  notice: w.notice
                    ? `${Se}

${w.notice}`
                    : Se,
                }
              : w,
          };
        } catch (m) {
          if (n.method === "project_write" && n.local_path !== void 0)
            Rt(m, s, e.agentId === void 0 ? Q.peek(e.session)?.host : void 0);
          if (s.aborted) throw new Ye();
          let w = m instanceof q ? m.cause : m,
            y = Y3o(l(w), h);
          if (w instanceof G) throw new G(y, w.reasonCode);
          if (
            n.method === "project_write" &&
            w instanceof eke &&
            w.errorCode === "project_knowledge_full"
          )
            throw new G(We, "project_knowledge_full");
          let C =
              v(w) ??
              (j() && e.storageV5 !== void 0 && w instanceof Error && R8e(w.cause)
                ? Vm(w.cause)
                : void 0),
            N = m instanceof q ? Et(m) : "",
            O = Error(N === "" ? y : `${y.replace(/[.\s]*$/, "")}.${N}`);
          if (
            (KR(C) && C !== "EACCES" && C !== "EPERM") ||
            C === "EISDIR" ||
            C === "ENOSPC" ||
            C === "EDQUOT" ||
            C === "EIO"
          )
            O.code = C;
          throw O;
        }
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, n) {
    return { tool_use_id: n, type: "tool_result", content: _(e) };
  },
};
