// DesignSync tool definition — chunk-9g7gfs7x.js [18231, 24680)
export const DesignSyncTool = {
  name: l3t,
  searchHint: "sync local design system components to a claude.ai/design project",
  shouldDefer: !0,
  backgrounding: "never",
  maxResultSizeChars: 300000,
  isEnabled() {
    return M$();
  },
  async description() {
    return Pno(SLe());
  },
  async prompt() {
    return Pno(SLe());
  },
  get inputSchema() {
    return ue();
  },
  get outputSchema() {
    return ye();
  },
  isConcurrencySafe() {
    return !1;
  },
  isReadOnly(n) {
    return _e(n.method);
  },
  isDestructive(n) {
    return (
      n.method === "write_files" || n.method === "delete_files" || n.method === "unregister_assets"
    );
  },
  userFacingName(n) {
    return `Design: ${k(n)}`;
  },
  getToolUseSummary(n) {
    return n?.method ? k(n) : null;
  },
  toAutoClassifierInput(n) {
    if (n.method === "finalize_plan") {
      let e = (i) => {
        let r = i ?? [],
          s = 50;
        if (r.length <= 50) return r.join(", ");
        return `${r.length} paths (too many to list here; the user's permission prompt shows the full list)`;
      };
      return `project ${n.projectId ?? "?"} from ${x(se(), n.localDir ?? ".")}: write ${e(n.writes)}; delete ${e(n.deletes)}`;
    }
    if (n.method === "create_project") return `create project "${n.name ?? "?"}"`;
    return n.method;
  },
  renderToolUseMessage(n) {
    if (n.method === "finalize_plan") return Z(n.projectId);
    return k(n);
  },
  create(n) {
    return {
      async validateInput(e) {
        let i = we(e);
        if (i.length > 0)
          return { result: !1, message: `${e.method} requires: ${i.join(", ")}.`, errorCode: 1 };
        if (
          e.method === "finalize_plan" &&
          (e.writes?.length ?? 0) === 0 &&
          (e.deletes?.length ?? 0) === 0
        )
          return {
            result: !1,
            message: "finalize_plan needs at least one write or delete path.",
            errorCode: 1,
          };
        if (e.method === "write_files")
          for (let r of e.files ?? []) {
            let s = r.data !== void 0,
              a = r.localPath !== void 0;
            if (s === a)
              return {
                result: !1,
                message: `Each file needs exactly one of "data" or "localPath" (offending path: ${r.path}).`,
                errorCode: 1,
              };
            if (a && r.encoding !== void 0)
              return {
                result: !1,
                message: `"encoding" only applies to inline "data"; localPath files are encoded automatically (offending path: ${r.path}).`,
                errorCode: 1,
              };
          }
        return { result: !0 };
      },
      async checkPermissions(e) {
        let i = await vjt(n.toolState.get(nL), n.credentials),
          r = { ...e, __consentBitShown: i, __consentAskCanReachUser: ee(n) },
          s = i !== null ? LOe(i) : null,
          a =
            (await dWr(n.credentials)) && $Oe() && !Ejt()
              ? "DesignSync needs design-system authorization for your claude.ai account. Approving opens your browser to authorize " +
                "access to your org's design-system projects \u2014 this session's " +
                "own authentication is not changed."
              : null,
          c =
            [s, a].filter(Boolean).join(`

`) || null;
        if (
          c &&
          e.method !== "finalize_plan" &&
          e.method !== "create_project" &&
          e.method !== "report_validate"
        )
          return {
            behavior: "ask",
            message: c,
            updatedInput: r,
            localDisplayOnly: !0,
            decisionReason: {
              type: "safetyCheck",
              reason:
                [
                  s
                    ? "design agent consent \u2014 approving records a server-side grant for Claude agents to write your design projects"
                    : null,
                  a
                    ? "design login \u2014 approving opens a browser OAuth consent and stores a design credential"
                    : null,
                ]
                  .filter(Boolean)
                  .join("; ") || "design credential prompt",
              classifierApprovable: !1,
            },
          };
        if (e.method === "finalize_plan") {
          let d = (e.writes ?? []).map(nM),
            m = (e.deletes ?? []).map(nM),
            g;
          try {
            g = await oe(e.localDir);
          } catch (z) {
            return {
              behavior: "deny",
              message: `localDir does not exist or is not accessible: ${e.localDir ?? se()} (${l(z)})`,
              decisionReason: {
                type: "safetyCheck",
                reason: "localDir not found",
                classifierApprovable: !1,
              },
            };
          }
          let h = d.filter(Hyt),
            f = d.filter((z) => !Hyt(z)),
            w = m.filter(Hyt),
            b = m.filter((z) => !Hyt(z)),
            R = await Promise.all(
              f.map(async (z) => {
                try {
                  return (await pe(x(g, z)), !0);
                } catch {
                  return !1;
                }
              }),
            ),
            P = f.filter((z, ae) => !R[ae]),
            ie =
              f.length - P.length > 0 && P.length > 0
                ? `\u26A0 ${P.length} of ${f.length} literal write ${I(f.length, "path")} not found under localDir \u2014 ` +
                  `expected if they use a different localPath or inline data, otherwise check for a typo: ${P.slice(0, 5).join(", ")}` +
                  (P.length > 5 ? `, \u2026 and ${P.length - 5} more` : "")
                : null;
          return {
            behavior: "ask",
            message: [
              c,
              `To project: ${Z(e.projectId)}`,
              `From folder: ${g}`,
              f.length > 0 ? `Upload ${f.length} ${I(f.length, "file")}: ${f.join(", ")}` : null,
              h.length > 0 ? `Upload files matching: ${h.join(", ")}` : null,
              ie,
              b.length > 0 ? `Delete ${b.length} ${I(b.length, "file")}: ${b.join(", ")}` : null,
              w.length > 0 ? `Delete files matching: ${w.join(", ")}` : null,
            ].filter((z) => z !== null).join(`
`),
            updatedInput: { ...r, localDir: g },
            localDisplayOnly: !0,
            decisionReason: {
              type: "safetyCheck",
              reason: c
                ? "Approving also grants Claude ongoing write access to your design projects."
                : "Review what will be uploaded before continuing.",
              classifierApprovable: !1,
            },
          };
        }
        if (e.method === "create_project")
          return {
            behavior: "ask",
            message: [
              c,
              `Create design-system project "${e.name ?? "?"}" on claude.ai/design. The new project will be visible to your whole org (server default \u2014 you can change this from the Share menu after creation).`,
            ].filter((d) => d !== null).join(`
`),
            updatedInput: r,
            localDisplayOnly: !0,
            decisionReason: {
              type: "safetyCheck",
              reason: c
                ? "Approving also grants Claude ongoing write access to your design projects."
                : "This creates a new project on your claude.ai account.",
              classifierApprovable: !1,
            },
          };
        return { behavior: "allow", updatedInput: r };
      },
      async call(e, i) {
        let r = i.signal;
        if (e.method === "report_validate") return { data: { method: "report_validate" } };
        let s = n.toolState.get(nL),
          a = e.__consentBitShown ?? null,
          c = n.permissions(),
          d = e.__consentAskCanReachUser ?? !1,
          m = d && ee(n),
          g = "";
        try {
          if (
            ((g = await je(n.credentials, {
              signal: r,
              isNonInteractiveSession: n.isNonInteractiveSession,
              permissionMode: c.mode,
              askReachesUserAtDecision: d,
            })),
            a !== null && m && e.method === "finalize_plan")
          )
            await NOe(s, a, n.credentials).catch((f) => {
              t(
                `Proactive design consent POST for finalize_plan failed (${l(f)}); the next RPC call's 403 intercept will retry.`,
              );
            });
          let h;
          try {
            if (((h = await ne(s, e, g, r)), a !== null && e.method !== "finalize_plan"))
              Vie(s, a, !0);
          } catch (f) {
            let w = ze(f);
            if (w === null) {
              if (
                (f instanceof D ? f.body : null)?.error === "insufficient_scope" ||
                (f instanceof D && f.status === 401)
              )
                throw new v(
                  re("needs_design_login", { isNonInteractiveSession: n.isNonInteractiveSession }),
                );
              throw f;
            } else if (w !== a)
              throw (
                Vie(s, w, !1),
                new v(
                  `${LOe(w)} The user hasn't granted this yet \u2014 ask them to retry (the prompt will show on the next call) or run /design consent.`,
                )
              );
            else if (!m)
              throw (
                Vie(s, w, !1),
                new v(
                  `${LOe(w)} The user hasn't granted this \u2014 run /design consent to grant it (it can't be approved automatically in this permission mode).`,
                )
              );
            else (await NOe(s, w, n.credentials), (h = await ne(s, e, g, r)));
          }
          return { data: h };
        } catch (h) {
          if (r.aborted) throw new Ye();
          let f = X(l(h), g),
            w = h?.telemetryMessage,
            b = typeof w === "string" ? w : "DesignSync tool call failed";
          if (h instanceof v) throw ot(new v(f), b);
          throw ot(Error(f), b);
        }
      },
    };
  },
  mapToolResultToToolResultBlockParam(n, e) {
    return { tool_use_id: e, type: "tool_result", content: _(n) };
  },
};
