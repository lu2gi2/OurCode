// ExitWorktree tool definition — chunk-sfjcyk7w.js [132487, 137246)
export const ExitWorktreeTool = {
  name: Q0e,
  searchHint: "exit a worktree session and return to the original directory",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return "Exits a worktree session created by EnterWorktree and restores the original working directory";
  },
  async prompt() {
    return Cr();
  },
  get inputSchema() {
    return Ei();
  },
  get outputSchema() {
    return Ii();
  },
  userFacingName(e) {
    return e?.action === "remove" ? "Cleaning up worktree" : "Exiting worktree";
  },
  shouldDefer: !0,
  isDestructive(e) {
    return e.action === "remove";
  },
  toAutoClassifierInput(e) {
    return e.action;
  },
  renderToolUseMessage() {
    return "";
  },
  create(e) {
    return {
      async validateInput(r) {
        if (CZ())
          return {
            result: !1,
            message:
              'ExitWorktree cannot be called from a subagent with a cwd override (isolation: "worktree" or explicit cwd) \u2014 it would mutate the parent session\'s process-wide working directory. This agent is already isolated; use Bash with `cd` for directory changes within it.',
            errorCode: 5,
          };
        let n = cd();
        if (!n)
          return {
            result: !1,
            message:
              "No-op: there is no active EnterWorktree session to exit. This tool only operates on worktrees created by EnterWorktree in the current session \u2014 it will not touch worktrees created manually or in a previous session. No filesystem changes were made.",
            errorCode: 1,
          };
        if (r.action === "remove" && n.enteredExisting)
          return {
            result: !1,
            message: `This session is not the owner of the worktree at ${n.worktreePath} \u2014 it either entered a pre-existing worktree via EnterWorktree({path}) or resumed into a checkout whose liveness lock another running Claude Code session still holds \u2014 so this tool will not remove it. Use action: "keep" to return to ${n.originalCwd}. If no other session is using it, remove it yourself with \`git worktree remove\`; while a live session's lock is present, git will refuse and name the owner.`,
            errorCode: 4,
          };
        if (r.action === "remove" && !r.discard_changes) {
          let s = await vr(n.worktreePath, n);
          if (s === null)
            return {
              result: !1,
              message: `Could not verify worktree state at ${n.worktreePath}. Refusing to remove without explicit confirmation. Re-invoke with discard_changes: true to proceed \u2014 or use action: "keep" to preserve the worktree.`,
              errorCode: 3,
            };
          let { changedFiles: f, commits: y, submoduleWork: h, movedToChangeset: S } = s;
          if (f > 0 || y > 0) {
            let w = [];
            if (f > 0)
              w.push(
                `${f} uncommitted ${f === 1 ? "file" : "files"}${h ? ` (including ${wre(h)}, which git status in the worktree does not show)` : ""}`,
              );
            if (y > 0)
              w.push(
                `${y} ${y === 1 ? "commit" : "commits"} on ${n.worktreeBranch ?? "the worktree branch"}`,
              );
            return {
              result: !1,
              message: `Worktree has ${w.join(" and ")}. Removing will discard this work permanently.${S ? ` (Commits made in this worktree are already stored server-side, head changeset ${S.slice(0, 12)}, and are not affected by removing it.)` : ""} Confirm with the user, then re-invoke with discard_changes: true \u2014 or use action: "keep" to preserve the worktree.`,
              errorCode: 2,
            };
          }
        }
        return { result: !0 };
      },
      async call(r) {
        let n = cd();
        if (!n) throw Error("Not in a worktree session");
        let {
            originalCwd: s,
            preEnterOriginalCwd: f,
            worktreePath: y,
            worktreeBranch: h,
            tmuxSessionName: S,
            liveLaunchAnchor: w,
          } = n,
          C = cr() === we(),
          v = r.action === "keep" && !1,
          {
            changedFiles: R,
            commits: N,
            movedToChangeset: O,
          } = (v ? null : await vr(y, n)) ?? { changedFiles: 0, commits: 0 };
        if (r.action === "keep") {
          await Lke(e.storageV5);
          let H = await Rr(e.session, s, f, C, y, w, e.storageV5);
          i("tengu_worktree_kept", { mid_session: !0, commits: N, changed_files: R });
          let V = S
            ? ` Tmux session ${S} is still running; reattach with: tmux attach -t ${S}`
            : "";
          return {
            data: {
              action: "keep",
              originalCwd: s,
              worktreePath: y,
              worktreeBranch: h,
              tmuxSessionName: S,
              restoredCwd: H.restoredCwd,
              originalCwdMissing: H.originalCwdMissing,
              message: `Exited worktree. Your work is preserved at ${y}${h ? ` on branch ${h}` : ""}. ${xt(s, H)}${V}`,
            },
          };
        }
        if (S) await ole(S);
        let B = await ZHe(e.storageV5, e.credentials),
          Y = await Rr(e.session, s, f, C, y, w, e.storageV5);
        if (!B)
          return {
            data: {
              action: "remove",
              originalCwd: s,
              worktreePath: y,
              worktreeBranch: h,
              discardedFiles: 0,
              discardedCommits: 0,
              restoredCwd: Y.restoredCwd,
              originalCwdMissing: Y.originalCwdMissing,
              message: `Exited worktree but could not remove it \u2014 kept at ${y}. ${xt(s, Y)}`,
            },
          };
        i("tengu_worktree_removed", {
          source: b("exit_tool"),
          mid_session: !0,
          commits: N,
          changed_files: R,
        });
        let P = [];
        if (N > 0) P.push(`${N} ${N === 1 ? "commit" : "commits"}`);
        if (R > 0) P.push(`${R} uncommitted ${R === 1 ? "file" : "files"}`);
        let G = P.length > 0 ? ` Discarded ${P.join(" and ")}.` : "",
          q = O
            ? ` Commits made there remain stored server-side (head changeset ${O.slice(0, 12)}).`
            : "";
        return {
          data: {
            action: "remove",
            originalCwd: s,
            worktreePath: y,
            worktreeBranch: h,
            discardedFiles: R,
            discardedCommits: N,
            restoredCwd: Y.restoredCwd,
            originalCwdMissing: Y.originalCwdMissing,
            message: `Exited and removed worktree at ${y}.${G}${q} ${xt(s, Y)}`,
          },
        };
      },
    };
  },
  mapToolResultToToolResultBlockParam({ message: e }, r) {
    return { type: "tool_result", content: e, tool_use_id: r };
  },
};
