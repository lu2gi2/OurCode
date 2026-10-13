// EnterWorktree tool definition — chunk-sfjcyk7w.js [122369, 127497)
export const EnterWorktreeTool = {
  name: DD,
  searchHint: "create an isolated git worktree and switch into it",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return "Creates an isolated worktree (via git or configured hooks) and switches the session into it";
  },
  async prompt() {
    return br();
  },
  get inputSchema() {
    return _i();
  },
  get outputSchema() {
    return Ci();
  },
  userFacingName(e) {
    return e?.path ? "Entering worktree" : "Creating worktree";
  },
  shouldDefer: !0,
  toAutoClassifierInput(e) {
    return e.path ?? e.name ?? "";
  },
  renderToolUseMessage({ name: e, path: r }) {
    return (r !== void 0 ? wr(r) : null) ?? e ?? "";
  },
  create(e) {
    return {
      async validateInput(r) {
        if (CZ()) {
          if (r.path) return { result: !0 };
          let n = se(),
            s = $s(n);
          return {
            result: !1,
            message:
              `EnterWorktree cannot create a worktree from a subagent with a cwd override (isolation: "worktree" or explicit cwd) \u2014 it would mutate the parent session's process-wide working directory. ` +
              (s != null && n !== s && n.startsWith(s + gi)
                ? "To switch this agent into an existing worktree managed by Claude Code (under .claude/worktrees/ of this repository), call EnterWorktree with `path`. To work in any other directory, spawn an Agent with `cwd` set to it."
                : "To work in a different directory (including a worktree), spawn an Agent with `cwd` set to it."),
            errorCode: 1,
          };
        }
        if (cd() && !r.path)
          return {
            result: !1,
            message:
              "Already in a worktree session. Pass `path` to switch into another existing worktree, or use ExitWorktree to leave this one before creating a new worktree.",
            errorCode: 2,
          };
        return { result: !0 };
      },
      async checkPermissions(r) {
        if (!r.path) return { behavior: "allow", updatedInput: r };
        let n = await B8r(r.path);
        if (n?.managed) return { behavior: "allow", updatedInput: { ...r, path: n.targetReal } };
        let s = Sr(se(), r.path),
          f = (C) => wr(C).replace(wi, "\uFFFD"),
          y = f(s),
          h = n ? f(n.targetReal) : null,
          S = y !== s || (n && h !== n.targetReal) ? " (path sanitized for display)" : "",
          w =
            h !== null && h.normalize("NFC") !== y.normalize("NFC") ? ` (resolves to "${h}")` : "";
        return {
          behavior: "ask",
          message: `Enter the worktree at "${y}"${w}${S}? This moves the session's working directory and write access there, and loads project configuration (CLAUDE.md, settings) from that location.`,
          updatedInput: { ...r, path: s },
          decisionReason: {
            type: "safetyCheck",
            reason: `permission-root relocation to "${y}"${w}${S} \u2014 a model-supplied worktree outside .claude/worktrees/`,
            classifierApprovable: !1,
          },
          localDisplayOnly: !0,
        };
      },
      async call(r) {
        if (CZ()) {
          if (!r.path)
            throw new Vp(
              "EnterWorktree from a session with a pinned working directory requires `path`.",
            );
          let h = await Uor(r.path, { requireManagedLocation: !0, requireCwdInsideRepo: !0 }),
            S = THe()
              ? null
              : KU(h.worktreePath, {
                  agentId: e.agentId,
                  agentWorktree: e.agentWorktree,
                  session: e.session,
                });
          if (S !== null)
            throw new Vp(
              `Entering ${rg(h.worktreePath)} would not give this agent write access there, so the switch was not made. ${S}`,
            );
          if ((sp(h.worktreePath, e.session), Jwt(h.worktreePath, e.agentId ?? K()), e.agentId))
            try {
              await vle(e.agentId, { cwd: h.worktreePath }, e.storageV5);
            } catch (C) {
              t(`Failed to update agent metadata cwd after worktree switch: ${X6(C)}`);
            }
          i("tengu_worktree_entered_existing", { mid_session: !0, cwd_override: !0 });
          let w = h.worktreeBranch ? ` on branch ${h.worktreeBranch}` : "";
          return {
            data: {
              worktreePath: h.worktreePath,
              worktreeBranch: h.worktreeBranch,
              message: `Entered worktree at ${h.worktreePath}${w}. This agent's working directory and write access now point at the worktree; the previous directory was left untouched.`,
            },
            contextLayers: [{ kind: "working_directory", directory: h.worktreePath }],
          };
        }
        if (cd() && !r.path) throw Error("Already in a worktree session");
        let n;
        if (r.path)
          n = await U8r(
            K(),
            r.path,
            (await j8r(Sr(se(), r.path)))
              ? { requireManagedLocation: !0, storageV5: e.storageV5 }
              : { storageV5: e.storageV5 },
          );
        else {
          let h = se(),
            S = $s(h),
            w = !1;
          if (S && S !== h) (Gm(S), sp(S, e.session), (w = !0));
          try {
            n = await Xqt(K(), r.name ?? N4(), void 0, {
              fromCwd: h,
              repoRoot: S ?? void 0,
              fromHead: void 0,
              storageV5: e.storageV5,
              credentials: e.credentials,
            });
          } catch (C) {
            if (w)
              try {
                (Gm(h), sp(h, e.session));
              } catch {
                (yZ(), Sc()?.refreshGitBranch?.());
              }
            throw C;
          }
        }
        if (
          (Gm(n.worktreePath),
          sp(n.worktreePath, e.session),
          jR(se()),
          !n.hookBased && !n.nestedRepoRoot)
        )
          try {
            await tnt(e.storageV5);
          } catch (h) {
            BCn(h, "EnterWorktree");
          }
        (Jwt(n.worktreePath, K()),
          wD(n, j() ? e.storageV5 : void 0),
          i3("worktree"),
          pk(e.session),
          jc.cache.clear?.(),
          cS(e.storageV5),
          yZ(),
          Sc()?.refreshGitBranch?.(),
          i(r.path ? "tengu_worktree_entered_existing" : "tengu_worktree_created", {
            mid_session: !0,
          }));
        let s = n.worktreeBranch ? ` on branch ${n.worktreeBranch}` : "",
          f = r.path
            ? "Entered"
            : n.resetToFreshBase
              ? "Reused"
              : n.resumedExisting
                ? "Resumed"
                : "Created",
          y = n.resetToFreshBase
            ? " A worktree with this name already existed; its previous work was fully merged upstream, so it was reset to the current base."
            : n.resumedExisting
              ? " A worktree with this name already existed and was resumed as-is \u2014 it may carry an earlier session\u2019s commits. Pass a different name if you wanted a fresh worktree."
              : "";
        return {
          data: {
            worktreePath: n.worktreePath,
            worktreeBranch: n.worktreeBranch,
            message: `${f} worktree at ${n.worktreePath}${s}.${y} The session is now working in the worktree. Use ExitWorktree to leave mid-session, or exit the session to be prompted.`,
          },
        };
      },
    };
  },
  mapToolResultToToolResultBlockParam({ message: e }, r) {
    return { type: "tool_result", content: e, tool_use_id: r };
  },
};
