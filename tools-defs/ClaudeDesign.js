// ClaudeDesign tool definition — chunk-hgq6z0f4.js [25366, 45689)
export const ClaudeDesignTool = {
  name: MK,
  searchHint: "work with Claude Design (claude.ai/design) projects",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  get inputSchema() {
    return Re();
  },
  get outputSchema() {
    return Ie();
  },
  isEnabled: dOe,
  isConcurrencySafe(e) {
    if (e.operation === eJ) return !0;
    return (F(e.operation) ?? J(e.operation))?.readOnly === !0;
  },
  isReadOnly(e) {
    if (e.operation === eJ) return !0;
    return (F(e.operation) ?? J(e.operation))?.readOnly === !0;
  },
  async description() {
    return K6r(SLe());
  },
  async prompt() {
    return K6r(SLe());
  },
  userFacingName(e) {
    let t = $e(e?.operation);
    return t ? `Claude Design: ${t}` : "Claude Design";
  },
  toAutoClassifierInput(e) {
    return { operation: e.operation, arguments: e.arguments ?? {} };
  },
  create(e) {
    return {
      async validateInput(t) {
        let d = le(t.operation, t.arguments);
        if (d) return { result: !1, message: d, errorCode: 1 };
        if (t.operation === "finalize_plan") {
          let n = t.arguments?.project_id;
          if (typeof n !== "string" || n.length === 0)
            return {
              result: !1,
              message:
                "ClaudeDesign finalize_plan: project_id is required (a plan is always scoped to one project).",
              errorCode: 1,
            };
          if (!/^[A-Za-z0-9._-]+$/.test(n))
            return {
              result: !1,
              message:
                "ClaudeDesign finalize_plan: project_id contains characters outside the server id charset (letters, digits, dot, underscore, dash).",
              errorCode: 1,
            };
          if (n.length > kjt - 2)
            return {
              result: !1,
              message:
                "ClaudeDesign finalize_plan: project_id is longer than any server-issued project id.",
              errorCode: 1,
            };
        }
        return { result: !0 };
      },
      async checkPermissions(t, d) {
        let n = e,
          r = n.toolState.get(nL),
          c = t.operation === eJ ? null : await vjt(r, n.credentials),
          i = {
            ...t,
            __consentBitShown: c,
            __consentAskCanReachUser: se(n),
            __projectGrantAskShown: void 0,
            __projectGrantServerObserved: void 0,
            __reservedTargetsAskShown: void 0,
            __finalizePlanAskShown: void 0,
          },
          y = c !== null ? LOe(c) : null;
        if (t.operation === "finalize_plan" && t.arguments?.scope === "project")
          return {
            behavior: "deny",
            message:
              'ClaudeDesign finalize_plan: scope "project" is no longer supported by this client. Write files directly without plan_token \u2014 the first write to a project asks for a one-time durable approval \u2014 or use finalize_plan with writes/deletes for path-scoped plans and deletes.',
            decisionReason: {
              type: "safetyCheck",
              reason:
                'finalize_plan scope:"project" is superseded by the durable per-project write grant',
              classifierApprovable: !1,
            },
          };
        let v =
            t.operation === eJ
              ? { readOnly: !0, destructive: !1 }
              : (F(t.operation) ?? J(t.operation)),
          h = v?.readOnly !== !0,
          m = h && v?.destructive !== !1;
        if (
          t.operation === "copy_files" &&
          !(typeof t.arguments?.plan_token === "string" && t.arguments.plan_token.length > 0)
        )
          return {
            behavior: "deny",
            message:
              "ClaudeDesign copy_files: copying without a plan_token always requires per-batch approval \u2014 use finalize_plan declaring every destination in writes, then pass the returned plan_token.",
            decisionReason: {
              type: "safetyCheck",
              reason:
                "tokenless copy_files is per-batch-only \u2014 its destinations have no reserved-path or render-integrity gate",
              classifierApprovable: !1,
            },
          };
        if (y) {
          if (
            (t.operation === "write_files" || t.operation === "create_support_js") &&
            !(typeof t.arguments?.plan_token === "string" && t.arguments.plan_token.length > 0)
          ) {
            let b = Tjt(t.operation, t.arguments);
            if (b.outcome !== "pass" || !pWr(b.targets)) {
              let A = b.targets !== void 0 && b.targets.length === 0,
                C = b.outcome === "pass";
              return {
                behavior: "deny",
                message: A
                  ? `ClaudeDesign ${t.operation}: this call names no target paths \u2014 list the files to write, or use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`
                  : C
                    ? `ClaudeDesign ${t.operation}: this batch is too large to display fully for approval \u2014 split it into smaller batches, or use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`
                    : `ClaudeDesign ${t.operation}: this batch includes paths that always require per-batch approval \u2014 use finalize_plan with writes/deletes and pass the returned plan_token.`,
                decisionReason: {
                  type: "safetyCheck",
                  reason: A
                    ? "a write batch naming no target paths \u2014 malformed call"
                    : C
                      ? "the batch cannot be rendered fully in the approval dialog \u2014 split it or use per-batch plans"
                      : "reserved or unenumerable target paths always require per-batch approval",
                  classifierApprovable: !1,
                },
              };
            }
          }
          let f = h ? `Design ${t.operation} writes to claude.ai/design.` : "",
            w = t.operation === "finalize_plan" ? fe : "";
          return {
            behavior: "ask",
            message: [y, f, w].filter(Boolean).join(" "),
            updatedInput:
              t.operation === "finalize_plan" ? { ...i, __finalizePlanAskShown: !0 } : i,
            localDisplayOnly: !0,
            decisionReason: {
              type: "safetyCheck",
              reason:
                "design agent consent \u2014 approving records a server-side grant for Claude agents to read and write your design projects",
              classifierApprovable: !1,
            },
          };
        }
        if (!h) return { behavior: "allow", updatedInput: i };
        if (
          n.permissions().mode !== "plan" &&
          U(n) &&
          M2o(r, t.operation, t.arguments).outcome === "allow"
        )
          return { behavior: "allow", updatedInput: i };
        if (
          (t.operation === "write_files" || t.operation === "create_support_js") &&
          !(typeof t.arguments?.plan_token === "string" && t.arguments.plan_token.length > 0)
        ) {
          if (n.isNonInteractiveSession === !0) {
            let w = {
                behavior: "deny",
                message: `ClaudeDesign ${t.operation}: writing without a plan_token requires a one-time interactive project approval, which is not available in non-interactive sessions \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                decisionReason: {
                  type: "safetyCheck",
                  reason:
                    "a durable project write grant requires an interactive approval with a server-verified project identity",
                  classifierApprovable: !1,
                },
              },
              b = t.arguments?.project_id;
            if (typeof b !== "string" || b.length === 0 || !U(n) || Cme(r, b)) return w;
            if (Tjt(t.operation, t.arguments).outcome !== "pass") return w;
            if (n.permissions().mode === "plan") return w;
            if (eyn(r, b)) return { behavior: "allow", updatedInput: i };
            if ((await qhn(r, b, n.credentials)) === "granted" && !Cme(r, b)) {
              if ((BOe(r, b), n.permissions().mode !== "plan"))
                return { behavior: "allow", updatedInput: i };
            }
            return w;
          }
          if (!U(n))
            return {
              behavior: "deny",
              message: `ClaudeDesign ${t.operation}: writing without a plan_token requires a one-time project approval, which is not available in subagent or PermissionRequest-hook sessions \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
              decisionReason: {
                type: "safetyCheck",
                reason:
                  "a durable project write grant requires a context where the approval card reaches the user directly",
                classifierApprovable: !1,
              },
            };
          let f = t.arguments?.project_id;
          if (typeof f === "string" && f.length > 0) {
            if (I2o(r, f))
              return {
                behavior: "deny",
                message: `ClaudeDesign ${t.operation}: this project cannot hold a durable write grant for this account (it may be shared from another organization) \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                decisionReason: {
                  type: "safetyCheck",
                  reason:
                    "the server refused to mint a durable grant for this project \u2014 per-batch plans only",
                  classifierApprovable: !1,
                },
              };
            let w = Tjt(t.operation, t.arguments),
              b = n.permissions().mode === "plan";
            if (w.outcome === "pass" && b) {
              if (
                !(
                  eyn(r, f) ||
                  (!Cme(r, f) && (await qhn(r, f, n.credentials)) === "granted" && !Cme(r, f))
                )
              )
                return {
                  behavior: "deny",
                  message: `ClaudeDesign ${t.operation}: writing without a plan_token requires a one-time project approval, which is not shown in plan mode \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                  decisionReason: {
                    type: "safetyCheck",
                    reason:
                      "a durable project write grant cannot be minted from plan mode \u2014 per-batch plans only",
                    classifierApprovable: !1,
                  },
                };
              BOe(r, f);
            } else if (w.outcome === "pass") {
              if (eyn(r, f)) return { behavior: "allow", updatedInput: i };
              let A = await qhn(r, f, n.credentials);
              if (A === "granted" && !Cme(r, f)) {
                if ((BOe(r, f), n.permissions().mode !== "plan"))
                  return { behavior: "allow", updatedInput: i };
              } else if (A === "unavailable")
                return {
                  behavior: "deny",
                  message: `ClaudeDesign ${t.operation}: could not check for a project write grant (this server may not support durable grants) \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                  decisionReason: {
                    type: "safetyCheck",
                    reason:
                      "the grant state could not be verified \u2014 fail toward the per-batch plan flow",
                    classifierApprovable: !1,
                  },
                };
              else {
                let C = () =>
                    n.permissions().mode !== "plan"
                      ? null
                      : {
                          behavior: "deny",
                          message: `ClaudeDesign ${t.operation}: writing without a plan_token requires a one-time project approval, which is not shown in plan mode \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                          decisionReason: {
                            type: "safetyCheck",
                            reason:
                              "a durable project write grant cannot be minted from plan mode \u2014 per-batch plans only",
                            classifierApprovable: !1,
                          },
                        },
                  D = C();
                if (D) return D;
                if (!se(n))
                  return {
                    behavior: "deny",
                    message: `ClaudeDesign ${t.operation}: writing without a plan_token to a project without a write grant requires a one-time interactive approval, which cannot be shown in this permission mode \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                    decisionReason: {
                      type: "safetyCheck",
                      reason:
                        "a durable project write grant requires an interactive approval with a server-verified project identity",
                      classifierApprovable: !1,
                    },
                  };
                let s = await Oe(r, f, d.signal, n.credentials);
                if (s === null)
                  return {
                    behavior: "deny",
                    message: `ClaudeDesign ${t.operation}: a durable project write grant is only offered when the approval dialog can name its target, and the project identity (name, sharing, URL) could not be verified or rendered faithfully. If this is a fresh connection, read the project first (e.g. get_project \u2014 approve the Claude Design connection if prompted) and retry once; otherwise use finalize_plan with writes/deletes and pass the returned plan_token (the per-batch flow), which is always supported.`,
                    decisionReason: {
                      type: "safetyCheck",
                      reason:
                        "a durable project write grant requires a server-verified project identity in the approval card",
                      classifierApprovable: !1,
                    },
                  };
                let g = C();
                if (g) return g;
                return {
                  behavior: "ask",
                  message: `Approving writes the listed files now, and lets Claude write to ANY file in the project "${s.name}" (${s.sharingLabel}) \u2014 ${s.url} \u2014 without asking again. This approval is remembered for this project until you revoke it in settings at claude.ai/design (future writes and file contents are not shown for approval). Deletes and CLAUDE.md/.claude paths still ask every time.`,
                  updatedInput: { ...i, __projectGrantAskShown: f },
                  localDisplayOnly: !0,
                  serverApprovalWatch: { kind: "design_project_grant", projectId: f },
                  decisionReason: {
                    type: "safetyCheck",
                    reason:
                      "first write under a project grant \u2014 approval mints a durable write grant for this project, revocable at claude.ai/design settings",
                    classifierApprovable: !1,
                  },
                };
              }
            } else {
              if (
                !(
                  pWr(w.targets) &&
                  (eyn(r, f) ||
                    (!Cme(r, f) && (await qhn(r, f, n.credentials)) === "granted" && !Cme(r, f)))
                )
              ) {
                let D = w.targets !== void 0 && w.targets.length === 0;
                return {
                  behavior: "deny",
                  message: D
                    ? `ClaudeDesign ${t.operation}: this call names no target paths \u2014 list the files to write, or use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`
                    : `ClaudeDesign ${t.operation}: this batch includes paths that always require per-batch approval \u2014 use finalize_plan with writes/deletes and pass the returned plan_token.`,
                  decisionReason: {
                    type: "safetyCheck",
                    reason: D
                      ? "a write batch naming no target paths \u2014 malformed call"
                      : "reserved or unenumerable target paths always require per-batch approval",
                    classifierApprovable: !1,
                  },
                };
              }
              return (
                BOe(r, f),
                {
                  behavior: "ask",
                  message: `Design ${t.operation} writes to claude.ai/design.`,
                  updatedInput: { ...i, __reservedTargetsAskShown: !0 },
                  localDisplayOnly: !0,
                  decisionReason: {
                    type: "safetyCheck",
                    reason: m
                      ? "destructive \u2014 model-generated arguments"
                      : "remote write \u2014 model-generated arguments",
                    classifierApprovable: !1,
                  },
                }
              );
            }
          }
        }
        if (t.operation === "finalize_plan")
          return {
            behavior: "ask",
            message: `Design finalize_plan writes to claude.ai/design. ${fe}`,
            updatedInput: { ...i, __finalizePlanAskShown: !0 },
            localDisplayOnly: !0,
            decisionReason: {
              type: "safetyCheck",
              reason:
                "finalize_plan \u2014 the human is the path-review boundary; approval also grants prompt-free writes to these paths for 15 min",
              classifierApprovable: !1,
            },
          };
        if (m)
          return {
            behavior: "ask",
            message: `Design ${t.operation} writes to claude.ai/design.`,
            updatedInput: i,
            decisionReason: {
              type: "safetyCheck",
              reason: v
                ? "destructive \u2014 model-generated arguments"
                : "unknown operation \u2014 fail-closed to destructive write",
              classifierApprovable: !1,
            },
          };
        return {
          behavior: "ask",
          message: `Design ${t.operation} writes to claude.ai/design.`,
          updatedInput: i,
          decisionReason: {
            type: "safetyCheck",
            reason: "remote write \u2014 model-generated arguments",
            classifierApprovable: !1,
          },
        };
      },
      async call(t, d) {
        let n = e,
          r = n.toolState.get(nL),
          c = t.__consentAskCanReachUser ?? !1,
          i = c && se(n);
        if (t.operation === "finalize_plan" && c) {
          let s = (t.arguments ?? {}).project_id;
          if (typeof s === "string" && s.length > 0) UOe(r, s);
        }
        if (FOe.has(t.operation)) {
          let s = (t.arguments ?? {}).project_id;
          if (typeof s === "string" && s.length > 0) (UOe(r, s), QQe(r, s), qWe(r, s), ZQe(r, s));
        }
        let y = await Myt(n.credentials);
        if (!y.ok) {
          let s = new x(
            Ve(y, { isNonInteractiveSession: n.isNonInteractiveSession }),
            "design_tool_auth_failed",
          );
          throw y.reason === "needs_design_login"
            ? uH(s, { kind: "design_needs_authorization", provider: "claude_design" })
            : s;
        }
        let v = y.accessToken,
          h = t.__consentBitShown ?? null,
          m = t.__projectGrantAskShown ?? null,
          f = t.__projectGrantServerObserved === !0,
          w = (() => {
            if (t.operation !== "write_files" && t.operation !== "create_support_js") return null;
            let s = t.arguments ?? {};
            if (typeof s.plan_token === "string" && s.plan_token.length > 0) return null;
            let g = s.project_id;
            return typeof g === "string" && g.length > 0 ? g : null;
          })();
        if (
          t.operation === "copy_files" &&
          !(typeof t.arguments?.plan_token === "string" && t.arguments.plan_token.length > 0)
        )
          throw new x(
            "copy_files without a plan_token always requires per-batch approval \u2014 use finalize_plan declaring every destination in writes, then pass the returned plan_token.",
            "design_tool_exec_backstop_tokenless_copy",
          );
        if (w !== null) {
          let s = Tjt(t.operation, t.arguments),
            g = t.__reservedTargetsAskShown === !0;
          if (s.outcome !== "pass" && !g)
            throw new x(
              `${t.operation} without a plan_token: this batch includes paths that always require per-batch approval \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
              "design_tool_exec_backstop_safety_trip",
            );
        }
        let b = d.signal,
          A = n.agentContext?.agentId ?? null,
          C;
        try {
          if (
            ((C = await D({})),
            t.operation === "finalize_plan" && t.__finalizePlanAskShown === !0 && i && U(n))
          ) {
            let s = t.arguments ?? {},
              g = C.isError !== !0 ? H2o(C.content) : null,
              S = (k) => (Array.isArray(k) ? k.filter((I) => typeof I === "string") : []);
            if (g !== null && typeof s.project_id === "string" && s.scope !== "project")
              O2o(r, g.token, {
                projectId: s.project_id,
                writes: S(s.writes),
                deletes: S(s.deletes),
                serverExpiresAtMs: g.expiresAtMs ?? void 0,
              });
          }
        } catch (s) {
          if (b.aborted && !(s instanceof Ye)) throw new Ye();
          if (s instanceof ie) {
            let g = await We(n.credentials, {
              isNonInteractiveSession: n.isNonInteractiveSession,
              wasRetried: s.wasRetried,
            });
            if (b.aborted) throw new Ye();
            let S = new x(g.message, "design_tool_auth_401");
            throw g.remedy === void 0 ? S : uH(S, g.remedy);
          }
          if (s instanceof Z && n.isNonInteractiveSession)
            throw new Z({ isNonInteractiveSession: !0 });
          throw s;
        }
        return { data: C };
        async function D(s) {
          try {
            let g = await be(r, t.operation, t.arguments, v, b, A, n.credentials);
            if (h !== null && !b.aborted && g.isError !== !0) Vie(r, h, !0);
            if (w !== null && !b.aborted && g.isError !== !0 && ((m === w && !f) || !Cme(r, w)))
              BOe(r, w);
            return g;
          } catch (g) {
            if (g instanceof Y) {
              if ((qWe(r, g.projectId), w2o(r), s.grant === !0)) throw g;
              if (g.projectId !== m || f) {
                if (t.operation === "write_files" || t.operation === "create_support_js") {
                  if (n.isNonInteractiveSession === !0)
                    throw new x(
                      "Writing to this project needs a project write grant that is not currently active (it may have been revoked) \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token. A durable project write grant can be approved from an interactive Claude Code session.",
                      "design_tool_needs_project_grant_non_interactive",
                    );
                  throw new x(
                    "Writing to this project needs a one-time approval \u2014 retry the write: you will be shown the approval, or routed to the per-batch finalize_plan flow.",
                    "design_tool_needs_project_grant_not_shown",
                  );
                }
                throw new x(
                  "This operation needs a plan_token here \u2014 use finalize_plan (listing the destination paths in writes) and pass the returned plan_token. (It can run without one only under an existing project write grant, set up by a write_files to this project.)",
                  "design_tool_needs_project_grant_ineligible_op",
                );
              }
              if (!i || !U(n))
                throw new x(
                  "Writing to this project needs a one-time approval, which cannot be granted automatically in this permission mode \u2014 use finalize_plan with writes/deletes and pass the returned plan_token.",
                  "design_tool_needs_project_grant_no_prompt",
                );
              try {
                await k2o(r, g.projectId, n.credentials);
              } catch (k) {
                if (ti(k).kind === "auth")
                  throw new x(
                    "This session's credential cannot record the project approval \u2014 approve this project from an interactive Claude Code session (run the write there and accept the approval card), then retry here: this session picks the recorded approval up from the server.",
                    "design_tool_grant_mint_bearer_refused",
                  );
                throw k;
              }
              return D({ ...s, grant: !0 });
            }
            if (!(g instanceof K)) throw g;
            if (s.consent === !0) throw g;
            let S = g.consent;
            if (S !== h)
              throw (
                Vie(r, S, !1),
                new x(
                  `${LOe(S)} The user hasn't granted this yet \u2014 ask them to retry (the prompt will show on the next call) or run /design consent.`,
                  "design_tool_needs_consent_not_shown",
                )
              );
            if (!i)
              throw (
                Vie(r, S, !1),
                new x(
                  `${LOe(S)} The user hasn't granted this \u2014 run /design consent to grant it (it can't be approved automatically in this permission mode).`,
                  "design_tool_needs_consent_no_prompt",
                )
              );
            return (await NOe(r, S, n.credentials), D({ ...s, consent: !0 }));
          }
        }
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, t) {
    let d = He(e.content.flatMap(Pe)),
      n = e.isError
        ? d
            .flatMap((r) => (r.type === "text" ? [r.text] : []))
            .join(`
`)
            .trim() || "(error with no message)"
        : null;
    return {
      tool_use_id: t,
      type: "tool_result",
      is_error: e.isError,
      content: n ?? (d.length > 0 ? d : "(empty result)"),
    };
  },
  renderToolUseMessage(e, { verbose: t }) {
    let n = (s, g = 80) => {
        let S = s.replace(/[\x00-\x1f\x7f-\x9f]+/g, " ");
        return S.length > g ? S.slice(0, g).trimEnd() + "\u2026" : S;
      },
      r = e.arguments;
    if (!r || Object.keys(r).length === 0) return "";
    if (!t) {
      let s = {};
      for (let [g, S] of Object.entries(r))
        if (Array.isArray(S)) {
          let k = g === "messages" ? "message" : g === "validators" ? "validator" : "file";
          s[k] = (s[k] ?? 0) + S.length;
        }
      return Object.entries(s)
        .map(([g, S]) => `${S} ${S === 1 ? g : g + "s"}`)
        .join(", ");
    }
    if (!Object.hasOwn(W, e.operation ?? "") && !Object.hasOwn(V, e.operation ?? "")) {
      let s = _(r) ?? "";
      return `${n(e.operation ?? "")} (${O(L(s))} of arguments not shown \u2014 operation unknown to this client version)`;
    }
    let c = (s, g) => {
        if (typeof s === "string") return s.length > 80 ? `${n(s)} (${O(L(s))})` : n(s);
        if (typeof s === "object" && s !== null) {
          let k = s,
            I = L(_(s) ?? "");
          if (typeof k.path === "string") {
            let R = typeof k.data === "string" ? k.data : "",
              z = ["encoding", "local_path", "if_match"].filter(
                (P) => typeof k[P] === "string" && k[P],
              ),
              E = `${n(k.path)} (${O(I)})${z.length ? ` [+${z.join(",")}]` : ""}`;
            return g > 0 && R ? `${E}: ${n(R, g)}` : E;
          }
          if (typeof k.content === "string") {
            let R = typeof k.role === "string" ? k.role : "?",
              z = `${n(R, 12)} (${O(I)})`;
            return g > 0 && k.content ? `${z}: ${n(k.content, g)}` : z;
          }
          if (typeof k.src === "string" || typeof k.dest === "string")
            return `${n(String(k.src ?? "?"), 40)} \u2192 ${n(String(k.dest ?? "?"), 40)}${k.src_project_id ? ` [from ${n(String(k.src_project_id), 24)}]` : ""}${typeof k.if_match === "string" && k.if_match ? " [+if_match]" : ""}${I > 256 ? ` (${O(I)})` : ""}`;
        }
        let S = _(s) ?? String(s);
        return `${n(S)} (${O(L(S))})`;
      },
      i = (s) =>
        typeof s === "string"
          ? n(s, 40)
          : typeof s === "object" && s !== null
            ? n(String(s.path ?? s.dest ?? s.role ?? "?"), 40)
            : "?",
      y = (s) => {
        if (Array.isArray(s) && s.length > 0) {
          let S = s.slice(0, 20),
            k = t ? Math.max(0, Math.min(200, Math.floor(1800 / S.length) - 95)) : 0,
            I =
              t &&
              k === 0 &&
              S.some((E) => {
                if (typeof E !== "object" || E === null) return !1;
                let P = E;
                return (
                  (typeof P.data === "string" && P.data) ||
                  (typeof P.content === "string" && P.content)
                );
              }),
            R = s.slice(20),
            z =
              R.length > 0
                ? `, +${R.length} more: ${R.slice(0, 10).map(i).join(", ")}${R.length > 10 ? ", \u2026" : ""}`
                : "";
          return (
            `[${s.length} ${s.length === 1 ? "entry" : "entries"}: ` +
            S.map((E) => c(E, k)).join(", ") +
            z +
            "]" +
            (I ? " (content previews omitted)" : "")
          );
        }
        let g = _(s) ?? String(s);
        return g.length > 80 ? `${n(g)} (${O(L(g))})` : n(g);
      },
      v = Object.entries(r).sort(
        ([, s], [, g]) => Number(Array.isArray(s)) - Number(Array.isArray(g)),
      ),
      h = v.filter(([, s]) => Array.isArray(s)),
      m = h.length >= 2 ? ` (${h.map(([s, g]) => `${n(s)}: ${g.length}`).join(", ")})` : "",
      f = v.map(([s, g]) => `${n(s)}: ${y(g)}`).join(", "),
      w = _(r) ?? "",
      b = L(w),
      C = `${b > 256 ? ` (${O(b)} total)` : ""}${m} ${f}`.trimStart(),
      D = t ? 2000 : 1500;
    return C.length > D ? C.slice(0, D - 1).trimEnd() + "\u2026" : C;
  },
};
