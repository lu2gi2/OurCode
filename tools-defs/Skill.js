// Skill tool definition — chunk-m0s4hfby.js [21066, 28238)
export const SkillTool = {
  name: Ro,
  searchHint: "invoke a slash-command skill",
  isEnabled() {
    return !Lh();
  },
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  get inputSchema() {
    return Oe();
  },
  get outputSchema() {
    return $e();
  },
  description: async ({ skill: e }) => `Execute skill: ${e}`,
  prompt: async () => GQo(),
  toAutoClassifierInput: ({ skill: e }) => e ?? "",
  create(e) {
    let n = e;
    return {
      async validateInput({ skill: r }) {
        let s = r.trim();
        if (!s)
          return (
            m("skill_invoke", "skill_invoke_empty_name"),
            { result: !1, message: `Invalid skill format: ${r}`, errorCode: 1 }
          );
        let c = s.startsWith("/");
        if (c) i("tengu_skill_tool_slash_prefix", {});
        let a = c ? s.substring(1) : s,
          S,
          k = !1,
          _ = await ne(n),
          l = oe(a, _, n),
          y = l.command,
          j = pR(a);
        if (Xae(n.session) && (!y || Uet(y)) && (y !== void 0 || Dkn(j))) {
          let v = await che(j);
          if (!v.ok) ((S = v.reason), (k = v.withheld === !0));
          else ((_ = await ne(n)), (l = oe(a, _, n)), (y = l.command));
        }
        if (y?.type === "prompt" && y.loadDefinition !== void 0)
          (await y.loadDefinition(), (_ = await ne(n)), (l = oe(a, _, n)), (y = l.command));
        if (S !== void 0 && (!y || Uet(y)))
          return (
            m("skill_invoke", k ? "skill_invoke_withheld" : "skill_invoke_not_materialized"),
            {
              result: !1,
              message: k
                ? `${Hkn(a)} Proceed without it.`
                : `Skill ${a} could not be downloaded (${S}). Proceed without it.`,
              errorCode: 10,
            }
          );
        if (y && lhe(y))
          return (
            m(
              "skill_invoke",
              MD(y) ? "skill_invoke_host_catalog_withheld" : "skill_invoke_sync_vetoed",
            ),
            { result: !1, message: `Unknown skill: ${a}`, errorCode: 13 }
          );
        if (!y) {
          let v = VWr(_, a, n.spawnedBySkill);
          if (v.length > 0) {
            let w =
              l.kind === "ambiguous" ? l.candidates.filter((C) => !FSt(C, a) && HZ(C.name)) : [];
            if (l.kind === "ambiguous")
              i("tengu_skill_tool_suffix_match", { candidate_count: l.candidates.length });
            return (
              m("skill_invoke", "skill_invoke_not_found"),
              {
                result: !1,
                message:
                  w.length > 0
                    ? `Unknown skill: ${a}. Several skills match that name: ${[...w, ...v].map((C) => C.name).join(", ")} \u2014 invoke one by its full name; the directory-scoped variants apply to the files under their directory.`
                    : `Unknown skill: ${a}. Directory-scoped variants exist: ${v.map((C) => C.name).join(", ")} \u2014 invoke the variant whose directory contains the files you are working on.`,
                errorCode: 2,
              }
            );
          }
          if (l.kind === "suggestion") {
            if ((i("tengu_skill_tool_suffix_match", { candidate_count: 1 }), HZ(l.suggestion.name)))
              return (
                m("skill_invoke", "skill_invoke_not_found"),
                {
                  result: !1,
                  message: `Unknown skill: ${a}. Did you mean ${l.suggestion.name}? Invoke it by that full name.`,
                  errorCode: 2,
                }
              );
          }
          if (l.kind === "ambiguous") {
            i("tengu_skill_tool_suffix_match", { candidate_count: l.candidates.length });
            let w = l.candidates.filter((I) => !FSt(I, a)),
              C = w.length === 1 ? w[0] : void 0;
            if (w.length > 0 && w.every((I) => HZ(I.name)))
              return (
                m("skill_invoke", "skill_invoke_not_found"),
                {
                  result: !1,
                  message:
                    C !== void 0
                      ? `Unknown skill: ${a}. Did you mean ${C.name}? Invoke it by that full name.`
                      : `Unknown skill: ${a}. Several skills match that name: ${w.map((I) => I.name).join(", ")} \u2014 invoke one by its full name.`,
                  errorCode: 2,
                }
              );
          }
          let h = mse(
            a,
            _.map((w) => ({ name: Mo(w), aliases: w.aliases })),
            { maxEditDistance: 2 },
          );
          m("skill_invoke", "skill_invoke_not_found");
          let N = await C0n()?.catch(() => {
              return;
            }),
            F = N && ce(a, N.errors, new Set(N.enabled.map((w) => w.name))),
            R = h ? `Unknown skill: ${a}. Did you mean ${h}?` : `Unknown skill: ${a}`;
          return { result: !1, message: F ? `${R}${h ? "" : "."} ${F}` : R, errorCode: 2 };
        }
        if (
          y.type === "prompt" &&
          (y.context === "fork" || (y.getContext !== void 0 && n.spawnedByForkedSkill === !0)) &&
          n.spawnedBySkill === dD(y)
        )
          return (
            m("skill_invoke", "skill_invoke_fork_recursion"),
            i("tengu_skill_tool_fork_recursion_blocked", {}),
            {
              result: !1,
              message: `Skill ${a} is already executing in this forked context \u2014 you are the subagent running it. Execute the instructions in the skill body directly instead of re-invoking the ${Ro} tool.`,
              errorCode: 9,
            }
          );
        let U = Gtt(y, {
          commandName: a,
          userTypedThisTurn:
            !sre(n) &&
            Pe(a, { agentId: n.agentId, messages: n.messages(), turnStartIndex: n.turnStartIndex }),
          isMainSession: n.agentId === void 0,
          permissionContext: void 0,
        });
        if (U !== null) {
          switch (U.reason) {
            case "disable_model_invocation": {
              let { sanitizedName: v, skillNameHash: h } = S4({
                rawName: a,
                canonicalName: y.name,
                isMcp: y.loadedFrom === "mcp",
                isBuiltIn: _L().has(a),
                isBundled: y.type === "prompt" && y.source === "bundled",
                isOfficial: y.type === "prompt" && o5(y),
              });
              m("skill_invoke", "skill_invoke_model_disabled", { command_name: v, ...h });
              break;
            }
            case "not_loaded":
              m("skill_invoke", "skill_invoke_not_materialized");
              break;
            case "not_allowlisted":
              m("skill_invoke", "skill_invoke_not_allowlisted");
              break;
            case "override_disabled":
              m(
                "skill_invoke",
                U.killSwitchOnly
                  ? "skill_invoke_bundled_skills_disabled"
                  : "skill_invoke_override_disabled",
              );
              break;
            case "not_prompt_type":
              m("skill_invoke", "skill_invoke_not_prompt_type");
              break;
            case "mcp_prompt":
              break;
            case "deny_rule":
              break;
          }
          return { result: !1, message: U.message, errorCode: U.errorCode };
        }
        return { result: !0 };
      },
      async checkPermissions({ skill: r, args: s }) {
        let c = r.trim(),
          a = c.startsWith("/") ? c.substring(1) : c,
          S = n.permissions(),
          k = await ne(n),
          _ = oe(a, k, n),
          l = _.command,
          y = _.kind === "ambiguous" ? _.candidates : [l],
          j = $re(S, eQe, "deny");
        for (let [I, B] of j.entries())
          if (y.some((O) => WXr(I, a, O)))
            return {
              behavior: "deny",
              message: "Skill execution blocked by permission rules",
              decisionReason: { type: "rule", rule: B },
            };
        let U = $re(S, eQe, "allow"),
          v;
        for (let [I, B] of U.entries()) {
          let O = MZo(I, a, l);
          if (O === "allow")
            return {
              behavior: "allow",
              updatedInput: { skill: r, args: s },
              decisionReason: { type: "rule", rule: B },
            };
          if (O === "held-back-nonholder") v = { rule: I, kind: "nonholder" };
          else if (O === "held-back-boundary") v ??= { rule: I, kind: "boundary" };
        }
        if (l?.type === "prompt" && (ze(l) || sre(n)))
          return { behavior: "allow", updatedInput: { skill: r, args: s }, decisionReason: void 0 };
        let h =
            l?.type === "prompt" && l.source === "plugin"
              ? l.pluginInfo?.pluginManifest.name
              : void 0,
          N = hAe() && bW(a) && !(l !== void 0 && _ce(l)),
          F = v === void 0 ? void 0 : N ? "nonholder" : v.kind;
        if (F !== void 0 && S.mode !== "bypassPermissions" && x5(S, eQe) === null) Ce(F);
        let R =
            v === void 0 || F === void 0
              ? void 0
              : HZo(
                  v.rule,
                  l?.name ?? a,
                  F === "nonholder" ? { kind: "nonholder", pluginName: h } : { kind: "boundary" },
                ),
          w = R === void 0 ? void 0 : { type: "other", reason: R };
        if (N)
          return {
            behavior: "ask",
            message: `Execute skill: ${a}${R ? ` \u2014 ${R}` : ""}`,
            decisionReason: w,
            suppressAlwaysAllowRule: !0,
            updatedInput: { skill: r, args: s },
            metadata: l ? { command: l } : void 0,
          };
        let C = [
          {
            type: "addRules",
            rules: [{ toolName: Ro, ruleContent: a }],
            behavior: "allow",
            destination: "localSettings",
          },
          {
            type: "addRules",
            rules: [{ toolName: Ro, ruleContent: `${a}:*` }],
            behavior: "allow",
            destination: "localSettings",
          },
        ];
        return {
          behavior: "ask",
          message: `Execute skill: ${a}${R ? ` \u2014 ${R}` : ""}`,
          decisionReason: w,
          suggestions: C,
          updatedInput: { skill: r, args: s },
          metadata: l ? { command: l } : void 0,
        };
      },
      call(r, s) {
        if (!s.runEngine)
          return Promise.reject(Error("Skill: invoking needs the executor (call.runEngine)"));
        return s.runEngine(Fe, {
          input: r,
          parentMessage: s.parentMessage,
          onProgress: s.onProgress,
        });
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, n) {
    if ("status" in e && e.status === "forked")
      return {
        type: "tool_result",
        tool_use_id: n,
        content: e.background
          ? `Skill "${e.commandName}" launched (forked execution, running in the background).

${e.result}`
          : `Skill "${e.commandName}" completed (forked execution).

Result:
${e.result}`,
      };
    if ("readOnly" in e && e.readOnly)
      return {
        type: "tool_result",
        tool_use_id: n,
        content: `Loaded skill instructions (read-only): ${e.commandName}. Nothing was executed; delegate execution to a worker.`,
      };
    return { type: "tool_result", tool_use_id: n, content: `Launching skill: ${e.commandName}` };
  },
  renderToolUseMessage: pe,
};
