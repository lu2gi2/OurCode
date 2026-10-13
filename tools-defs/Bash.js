// Bash tool definition — chunk-kasbfbhj.js [4332324, 4347511)
export const BashTool = {
  name: Be,
  enablesCodeExecution: !0,
  ruleContentField: "command",
  searchHint: "execute shell commands",
  remoteExecution: {
    supported: !0,
    refusedInputFields: ktr,
    decidingInputFields: ["command", "run_in_background", "dangerouslyDisableSandbox"],
  },
  backgrounding: "self",
  get maxResultSizeChars() {
    return aKe();
  },
  persistenceThresholdCeiling: t3e,
  strict: !0,
  async description({ description: e }) {
    return e || "Run shell command";
  },
  async prompt({ model: e, tools: n, leanPrompt: r, bashFirstTrimmed: s }) {
    return xPt(e, await TMn(n), n, r, s);
  },
  isConcurrencySafe(e) {
    return this.isReadOnly?.(e) ?? !1;
  },
  suppressesAllPermissionUpdates(e) {
    let n = e?.[Or];
    return typeof n === "string" && n.trim() !== "" && !PE(n.trim());
  },
  isReadOnly(e, n) {
    return !vv(Be) && oZe(e, POn(n));
  },
  notReadOnlyReason(e, n) {
    if (vv(Be))
      return {
        message:
          "This session runs shell commands only in its cloud environment, so none can be verified as read-only here",
        everyInput: !0,
      };
    let r = mTn(e, WHe(e.command), { sessionEnvVarKeys: POn(n) });
    if (r.behavior === "allow") return;
    return "notReadOnlyCommand" in r
      ? { message: r.message, part: r.notReadOnlyCommand }
      : { message: r.message };
  },
  sandboxNetworkLists(e) {
    return Nae(e);
  },
  toAutoClassifierInput(e) {
    let n = e.dangerouslyDisableSandbox,
      r = !1,
      s = hh() ? U5(e).requested : void 0,
      h = s !== void 0 && !PE(s) ? Dk(s) || void 0 : void 0,
      y = GSt(e);
    if (h !== void 0 || y !== void 0)
      return { command: e.command, ...!1, ...(h !== void 0 && { [Or]: h }), ...y };
    return e.command;
  },
  async preparePermissionMatcher({ command: e }) {
    let n = await X$(e),
      r,
      s = !1;
    if (n.kind === "simple") r = n.commands.map((h) => h.argv.join(" "));
    else if (n.differential || !Tzr.has(n.nodeType ?? "")) return () => !0;
    else {
      let h = dMn(e);
      if (h === null || h.length === 0) return () => !0;
      ((r = h), (s = !0));
    }
    return (h) => {
      let y = Bcn(h);
      if (s && !(y !== null ? !/\s/.test(y) : /^[^\s*?[]+\s?\*$/.test(h))) return !0;
      return r.some((S) => {
        if (y !== null)
          return (
            S === y || S.startsWith(`${y} `) || S === `xargs ${y}` || S.startsWith(`xargs ${y} `)
          );
        return SO(h, S) || SO(`xargs ${h}`, S);
      });
    };
  },
  isSearchOrReadCommand(e) {
    let n = xOn().safeParse(e);
    if (!n.success) return { isSearch: !1, isRead: !1, isList: !1 };
    return Czr(n.data.command);
  },
  get inputSchema() {
    return xOn();
  },
  coerceInput: mMn,
  get outputSchema() {
    return HOn();
  },
  get outputSchemaAcrossProcesses() {
    return Ozr();
  },
  fromAnotherProcess(e, n) {
    if (!e.interrupted && e.timedOutAfterMs === void 0) Hss(String(n.command ?? ""));
    return {};
  },
  userFacingName(e) {
    if (!e) return "Bash";
    if (e.command) {
      let n = FDe(e.command);
      if (n) return AEe({ file_path: n.filePath, old_string: "x" });
    }
    return a.CLAUDE_CODE_BASH_SANDBOX_SHOW_INDICATOR && Ty(e) ? "SandboxedBash" : "Bash";
  },
  getToolUseSummary(e) {
    if (!e?.command) return null;
    let { command: n, description: r } = e;
    if (r) return r;
    return jo(n, zT);
  },
  getActivityDescription(e) {
    if (!e?.command) return "Running command";
    return `Running ${e.description ?? jo(e.command, zT)}`;
  },
  extractSearchText({ stdout: e, stderr: n }) {
    return n
      ? `${e}
${n}`
      : e;
  },
  stripForStorage(e, n) {
    if (!n) return e;
    if (
      typeof e !== "object" ||
      e === null ||
      typeof e.stdout !== "string" ||
      typeof e.stderr !== "string"
    )
      return e;
    if (e.stdout === "" && e.stderr === "") return e;
    return { ...e, stdout: "", stderr: "" };
  },
  mapToolResultToToolResultBlockParam(
    {
      interrupted: e,
      stdout: n,
      stderr: r,
      isImage: s,
      backgroundTaskId: h,
      backgroundedByUser: y,
      backgroundedToDeliverMessage: S,
      backgroundedByTurnAbort: w,
      timedOutAfterMs: H,
      backgroundEndsWithFinalResponse: G,
      backgroundCwdHint: V,
      structuredContent: Y,
      persistedOutputPath: he,
      persistedOutputSize: _e,
      staleReadFileStateHint: ke,
      ghRateLimitHint: be,
    },
    Te,
  ) {
    if (Y && Y.length > 0) return { tool_use_id: Te, type: "tool_result", content: Y };
    if (s) {
      let He = bor(n, Te);
      if (He) {
        let Ve = typeof r === "string" ? r.trim() : "";
        if (Ve)
          return {
            ...He,
            content: [...(Array.isArray(He.content) ? He.content : []), { type: "text", text: Ve }],
          };
        return He;
      }
    }
    let Re = n;
    if (n) ((Re = n.replace(/^(\s*\n)+/, "")), (Re = Re.trimEnd()));
    if (he) {
      let He = Xrt(Re, nAe);
      Re = oAe({
        filepath: he,
        originalSize: _e ?? 0,
        isJson: !1,
        preview: He.preview,
        hasMore: He.hasMore,
        truncatedAtBytes: (_e ?? 0) >= A_e ? A_e : void 0,
      });
    }
    let Pe = r.trim();
    if (e) {
      if (r) Pe += dq;
      Pe += "<error>Command was aborted before completion</error>";
    }
    let Fe = "";
    if (h) {
      if (
        ((Fe = wor({
          backgroundTaskId: h,
          outputPath: Ru(h),
          backgroundedByUser: y,
          backgroundedToDeliverMessage: S,
          backgroundedByTurnAbort: w,
          timedOutAfterMs: H,
          reapedAtFinalResponse: G,
          readToolName: rt,
        })),
        V)
      )
        Fe += `
${V}`;
      if (gB())
        return {
          tool_use_id: Te,
          type: "tool_result",
          content: Htr(
            h,
            [Pe, Fe].filter(Boolean).join(`
`),
            { backgroundedByUser: y, ending: G ? "final_response" : void 0 },
          ),
        };
    }
    return {
      tool_use_id: Te,
      type: "tool_result",
      content: [Re, Pe, Fe, ke, be].filter(Boolean).join(`
`),
      is_error: e,
    };
  },
  create(e) {
    return {
      async validateInput(n, r) {
        let s = r;
        if (Yx() && U5(n).requested !== void 0) return { result: !1, message: LB(), errorCode: 11 };
        if (
          A4() &&
          !Cd() &&
          Jle() &&
          s.remoteCall?.constraints.background !== "forbidden" &&
          !n.run_in_background &&
          s.shellWallCapMs === void 0
        ) {
          let S = Lzr(n.command);
          if (S !== null)
            return {
              result: !1,
              message: `Blocked: ${S}. To wait for a condition, use Monitor with an until-loop (e.g. \`until <check>; do sleep 2; done\`). To wait for a command you started, use run_in_background: true. Do not chain shorter sleeps to work around this block.`,
              errorCode: 10,
            };
        }
        let h = n.run_in_background ? s.remoteCall?.backgroundShells?.reserve() : void 0;
        if (h !== void 0) return { result: !1, message: h, errorCode: 12 };
        let y = VSt(n, Ty(n));
        if (y !== void 0) return y;
        return (await vMn(e0e.of(e.session.host), () => sfn(n.command, se()))) ?? { result: !0 };
      },
      permissionCheckFailureDecision(n, r) {
        let s = rZe(e, r);
        return $rr(Be, s.shellPermission);
      },
      async checkPermissions(n, r) {
        let s = rZe(e, r),
          h = FDe(n.command);
        if (h) {
          let y = et(h.filePath);
          s.session.writePermissionStash.stash(s.toolUseId, y, _o(y));
        }
        return Frr(n, s.shellPermission, void 0, (y) => {
          if (
            n.dangerouslyDisableSandbox &&
            y.behavior !== "deny" &&
            y.behavior !== "ask" &&
            !QGe(y.decisionReason) &&
            !Ty(n) &&
            Ty({ ...n, dangerouslyDisableSandbox: !1 })
          ) {
            let S = Aor({ toolName: Be, input: n, context: s.shellPermission });
            if (S) return S;
            return {
              behavior: "ask",
              decisionReason: { type: "sandboxOverride", reason: "dangerouslyDisableSandbox" },
              message: "Run outside of the sandbox",
            };
          }
          return y;
        });
      },
      async call(n, r) {
        let s = rZe(e, r),
          { parentMessage: h, onProgress: y } = r;
        if (n._simulatedSedEdit && !s.remoteCall) return Nzr(n._simulatedSedEdit, s, h);
        let S = FDe(n.command);
        if (S) s.session.writePermissionStash.consume(s.toolUseId, et(S.filePath));
        let w = Math.floor(Date.now() / 1000) * 1000,
          H = 0;
        try {
          H = Cct();
        } catch (Ir) {
          c(Ir);
        }
        let { abortController: G, emitToolProgress: V } = s,
          Y = new Mon(),
          he = "",
          _e = "",
          ke,
          be,
          Te = 0,
          Re = !1,
          Pe = !1,
          Fe;
        await using He = Ror(s.taskRegistry);
        let Ve,
          Je = !s.agentId,
          nt = s.remoteCall?.constraints,
          dt = nt?.sandbox === "required",
          Ze = !Je || nt?.pinCwd === !0,
          ut = s.userTypedShellDispatch,
          Rt = Ty(n, { disableUnsandboxedCommands: dt, userTypedShellDispatch: ut }),
          vt = qe.isSandboxingEnabled(),
          Ft = UA();
        if (dt) {
          let Ir =
            !Rt || Ft !== "strict" || Sd()
              ? { confined: !1, reason: "sandbox_unconfined" }
              : await KTe();
          if (!Ir.confined)
            throw (
              f("sandbox_exec", "remote_floor_refusal"),
              new gre(
                "This call must run inside a fully confining sandbox and none is available here. The command was not run.",
                Ir.reason,
              )
            );
        }
        let Pt = Rt,
          Wt = phe(n.command),
          Vt = s.toolUseId,
          qt = Vt === void 0 ? void 0 : oYt(Vt),
          on = qt?.endsWith(pnt) ? void 0 : ye(qt),
          Cn = YMn(s.permissions().mode) && !n.run_in_background && !oZe(n, xR(s)),
          $n = Cn && QMn(n.command),
          Sn = Cn && !$n && s.toolUseId !== void 0 && vIn() ? (J_(se()) ?? J_(we())) : null,
          an = Sn !== null && TIn(Sn) === "ready" ? Sn : null;
        if (an !== null) await tOn(an);
        let nn = an !== null && s.toolUseId !== void 0 && (await oOn(an));
        if (nn && an && s.toolUseId !== void 0) RIn(s.toolUseId, an);
        let Wn = Date.now(),
          Kn = an !== null && !nn && !ZQ(an),
          ro =
            Cn && !$n && !nn ? (Kn ? "unavailable" : ((await DJ(se())) ?? (await DJ(we())))) : null,
          ko = Cn
            ? (an ?? (ro && ro !== "unavailable" ? ro.repoRoot : (J_(se()) ?? J_(we()))))
            : null,
          io = ko !== null ? eIn(ko) : null,
          mo = !1,
          Xn = null,
          no;
        try {
          let Ir = Bzr({
              input: n,
              useSandbox: Rt,
              networkLists: qSt(s.toolUseId, n.command),
              constraints: nt,
              servedBackground: s.remoteCall?.backgroundShells,
              onNote: s.remoteCall?.onNote,
              abortController: G,
              taskRegistry: s.taskRegistry,
              emitToolProgress: V,
              session: s.session,
              preventCwdChanges: Ze,
              isMainThread: Je,
              toolUseId: s.toolUseId,
              toolState: s.toolState,
              attributionMessageId: h?.message.id,
              agentId: s.agentId,
              caller: j2t(s),
              shellWallCapMs: s.shellWallCapMs,
              agentWorktree: s.agentWorktree,
              isolationRoot: Xge(s),
              sessionEnvVars: s.sessionEnvVars,
              storageV5: s.storageV5,
              effortLevel: GS(s.mainLoopModel())
                ? GA(s.mainLoopModel(), s.effort(), s.effortLayerOverride())
                : void 0,
            }),
            ns;
          do
            if (((ns = await Ir.next()), !ns.done && y)) {
              let hr = ns.value;
              y({
                type: "progress",
                toolUseID: `bash-progress-${Te++}`,
                data: {
                  type: "bash_progress",
                  output: hr.output,
                  fullOutput: hr.fullOutput,
                  elapsedTimeSeconds: hr.elapsedTimeSeconds,
                  totalLines: hr.totalLines,
                  totalBytes: hr.totalBytes,
                  taskId: hr.taskId,
                  timeoutMs: hr.timeoutMs,
                },
              });
            }
          while (!ns.done);
          if (((Fe = ns.value), He.track(Fe), Fe.intercepted)) Pt = !1;
          if (
            ((Ve = await fIn(Fe.stdout, Fe.outputFilePath)),
            !Fe.backgroundTaskId && mIn(s.session.host, n.command, Fe.code, Ve).prResolved)
          )
            s.markPrResolvedThisSession();
          let Ur = gi(G.signal.reason),
            Vo = Fe.interrupted && Ur === "interrupt",
            or = Fe.interrupted && lMt(Ur);
          if (Fe.interrupted && Ur === "background") throw new Ye();
          if (
            (Y.append((Fe.stdout || "").trimEnd() + dq),
            (be = wJe(n.command, Fe.code, Fe.stdout || "", "")),
            Ve.includes(".git/index.lock': File exists"))
          )
            i("tengu_git_index_lock_error", {});
          if (be.isError && !Vo) {
            if (Fe.code !== 0) Y.append(`Exit code ${Fe.code}`);
          }
          if (((ke = bo(s.session).cwd), !Ze)) {
            if (Eor(s.session, s.unlayeredPermissions())) he = vor("");
          }
          let Fr = Fe.stdout || "",
            uo = Pt ? qe.annotateStderrWithSandboxFailures(s.toolUseId ?? n.command, Fr) : Fr;
          if (((Pe = uo !== Fr), Pe)) _e = uo.slice(Fr.length).trim();
          if (Fe.preSpawnError) {
            if (/null bytes/.test(Fe.preSpawnError))
              throw new x(
                Fe.preSpawnError,
                "Bash: command contained null bytes (argv echo redacted)",
              );
            let hr = new x(Fe.preSpawnError, "Bash: pre-spawn error (cwd/argv redacted)");
            throw Fe.preSpawnErrorCode === "e2big" ? uH(hr, { kind: "spawn_arg_limit" }) : hr;
          }
          if (Pt && (Pe || (be.isError && !Fe.interrupted)))
            s.remoteCall?.onNote({ key: "sandboxed_failure", violationRecorded: Pe });
          if (be.isError && !Vo) {
            i("tengu_bash_tool_command_failed", {
              command_type: jJ(n.command),
              ...u9(n.command),
              stdout_length: Fr.length,
              stderr_length: 0,
              exit_code: Fe.code,
              interrupted: Fe.interrupted,
              executor_shell: await f8r(),
              executor_shell_overridden: Boolean(process.env.CLAUDE_CODE_SHELL),
              zsh_nomatch_error: nZe(Ve),
              sandboxed: Pt,
              sandbox_enabled: vt,
              dangerously_disable_sandbox: n.dangerouslyDisableSandbox ?? !1,
              user_typed_shell_dispatch: ut,
              filesystem_policy: d(Ft),
              call_origin: d(nt ? "remote" : "local"),
              ...AOn(n),
              had_sandbox_violation: Pt && Pe,
              tool_use_id: on,
              destructive_category: d(Wt ?? "none"),
              destructive_target_scope: d(NHe(n.command, se(), Wt)),
              git_destructive_target: d(hN(n.command, Wt)),
              permission_mode: d(s.permissions().mode),
            });
            let hr;
            try {
              hr = xct(H);
            } catch (es) {
              c(es);
            }
            throw new fG({
              stdout: "",
              stderr: hr ? `${uo.trimEnd()}${dq}${dq}${hr}` : uo,
              code: Fe.code,
              interrupted: or,
              hadSandboxViolation: Pe,
            });
          }
          ((Re = Fe.interrupted),
            (Xn =
              nn && an && s.toolUseId
                ? await Hzr(an, s.toolUseId, Boolean(Fe.backgroundTaskId), Re, s.readFileState, Wn)
                : null),
            (no =
              !Fe.backgroundTaskId && !$n && !Xn && ro && ro !== "unavailable" && !Re
                ? await JMn(ro)
                : void 0));
        } catch (Ir) {
          if (nn && s.toolUseId !== void 0) {
            let ns = await KJe(s.toolUseId);
            if (an && (ns === null || ns.paths.length > 0 || ns.overflow || ns.watchEnds)) Vy(an);
          }
          throw Ir;
        } finally {
          if (io && ko !== null) mo = tIn(ko, io);
          if (ro && ro !== "unavailable" && no !== null) Vy(ro.repoRoot);
          if ($n) {
            let Ir = J_(se()) ?? J_(we());
            if (Ir !== null) Vy(Ir);
          }
          if (s.toolUseId) V?.({ kind: "clear", toolUseId: s.toolUseId });
          if (!oZe(n, xR(s))) s.applyFileHistoryOp({ kind: "touch" });
        }
        let tn = Y.toString(),
          Hn,
          ao;
        if (Fe.outputFilePath && Fe.outputTaskId)
          try {
            let Ir = nh(s.session);
            await S0(Ir, s.storageV5);
            let ns = rAe(Ir, Fe.outputTaskId, !1),
              Ur = j() && s.storageV5 !== void 0 ? gq(wzr(ns), bzr(ns)) : void 0,
              Vo = !0;
            if (j() && s.storageV5 !== void 0 && Ur !== void 0) {
              let or = await Cor(s.storageV5, Ur, Fe.outputFilePath, A_e, m9t());
              if (((Vo = or === "today"), typeof or === "number")) ((Hn = ns), (ao = or));
            }
            if (Vo) ((ao = await b9t(Fe.outputFilePath, ns, A_e)), (Hn = ns));
          } catch {}
        i("tengu_bash_tool_command_executed", {
          command_type: jJ(n.command),
          ...u9(n.command),
          stdout_length: tn.length,
          stderr_length: 0,
          exit_code: Fe.code,
          interrupted: Re,
          executor_shell: await f8r(),
          executor_shell_overridden: Boolean(process.env.CLAUDE_CODE_SHELL),
          zsh_nomatch_error: nZe(Ve),
          sandboxed: Pt,
          sandbox_enabled: vt,
          dangerously_disable_sandbox: n.dangerouslyDisableSandbox ?? !1,
          user_typed_shell_dispatch: ut,
          filesystem_policy: d(Ft),
          call_origin: d(nt ? "remote" : "local"),
          ...AOn(n),
          had_sandbox_violation: Pt && Pe,
          was_backgrounded: Boolean(Fe.backgroundTaskId),
          tool_use_id: on,
          destructive_category: d(Wt ?? "none"),
          destructive_target_scope: d(NHe(n.command, se(), Wt)),
          git_destructive_target: d(hN(n.command, Wt)),
          permission_mode: d(s.permissions().mode),
        });
        let Eo = cMn(n.command);
        if (Eo)
          i("tengu_code_indexing_tool_used", {
            tool: d(Eo),
            source: b("cli"),
            success: Fe.code === 0,
          });
        let No = _or(tn);
        No = Qwt(No, {
          command: n.command,
          pendingHint: s.session.pendingHint,
          isMainThread: Je,
          surface: "shell",
        });
        let Do = DTn(No),
          fo = No;
        if (Do) {
          let Ir = await Sor(No, Fe.outputFilePath, ao, Tc(s.mainLoopModel()));
          if (Ir) fo = Ir;
          else Do = !1;
        }
        let dr = Fe.backgroundTaskId ? void 0 : Dss(n.command, Ve, s.toolState.get(jto)),
          Hr =
            Fe.backgroundTaskId && WHe(n.command)
              ? `Session cwd remains ${se()}; directory changes made by the backgrounded command do not apply to subsequent commands.`
              : void 0,
          ts =
            Fe.backgroundTaskId !== void 0 &&
            (ect(s.agentContext) || (s.agentId === void 0 && PSt()))
              ? !0
              : void 0,
          qr;
        if (!Fe.backgroundTaskId) {
          let Ir = _Tt(n.command, Ve);
          if (Object.keys(Ir).length > 0) qr = Ir;
          if (!s.remoteCall) pIn(Ir, Ve, { command: n.command, exitCode: Fe.code, cwd: ke });
        }
        let xo;
        if (!Re && !Do && !Fe.backgroundTaskId) {
          let Ir = await $zr(n.command, s.readFileState, w);
          if (Ir.length > 0) {
            let ns = se(),
              Ur = 5,
              Vo = Ir.slice(0, 5)
                .map((uo) => vzr(ns, uo) || uo)
                .join(", "),
              or = Ir.length > 5 ? ` and ${Ir.length - 5} more` : "",
              Fr = Yas(rt, s.tools);
            xo = `[This command modified ${Ir.length} ${I(Ir.length, "file")} you've previously read: ${Vo}${or}. Call ${Fr} before editing.]`;
          }
        }
        let $r = Fe.backgroundTaskId
            ? void 0
            : $n
              ? { files: [], moreFiles: 0, skipped: !0 }
              : Xn
                ? (Xn.diff ?? void 0)
                : ro === "unavailable"
                  ? { files: [], moreFiles: 0, unavailable: !0 }
                  : ro && Re
                    ? void 0
                    : ro
                      ? (no ?? (mo ? { files: [], moreFiles: 0, shared: !0 } : void 0))
                      : void 0,
          Rr = $r && mo && !$r.skipped ? { ...$r, shared: !0 } : $r;
        if (Rr?.unavailable) f("bash_edit_diff", Re ? "interrupted" : "unavailable");
        else if (Rr && !Rr.skipped) g("bash_edit_diff");
        if (!Re && !Do && !Fe.backgroundTaskId) {
          let Ir = [he, _e, xo, dr].reduce((Ur, Vo) => Ur + (Vo ? Vo.length + dq.length : 0), 0),
            ns =
              Hn !== void 0 ||
              tn.length > lQ() ||
              s.innerCall === !0 ||
              fo.length + Ir > Fne(Be, aKe(), t3e);
          await bMn(
            n.command,
            s.readFileState,
            G.signal,
            Fe.code,
            ns ? void 0 : fo,
            s.remoteCall === void 0 && s.nestedMemoryAttachmentTriggers
              ? { triggers: s.nestedMemoryAttachmentTriggers, permissions: s.permissions }
              : void 0,
          );
        }
        let Oo = {
          stdout: fo,
          stderr: _e ? [he, _e].filter(Boolean).join(dq) : he,
          interrupted: Re,
          isImage: Do,
          returnCodeInterpretation: be?.message,
          noOutputExpected: xzr(n.command),
          backgroundTaskId: Fe.backgroundTaskId,
          backgroundedByUser: Fe.backgroundedByUser,
          backgroundedByTurnAbort: Fe.backgroundedByTurnAbort,
          backgroundedToDeliverMessage: Fe.backgroundedToDeliverMessage,
          timedOutAfterMs: Fe.timedOutAfterMs,
          backgroundEndsWithFinalResponse: ts,
          backgroundCwdHint: Hr,
          dangerouslyDisableSandbox:
            "dangerouslyDisableSandbox" in n ? n.dangerouslyDisableSandbox : void 0,
          persistedOutputPath: Hn,
          persistedOutputSize: ao,
          staleReadFileStateHint: xo,
          ghRateLimitHint: dr,
          gitOperation: qr,
          bashEditDiff: Rr,
        };
        if (Oo.backgroundTaskId !== void 0 && gB())
          i("tengu_bash_task_ack", {
            trigger: Oo.backgroundedByUser
              ? b("user")
              : Oo.backgroundedByTurnAbort
                ? b("turn_abort")
                : Oo.backgroundedToDeliverMessage
                  ? b("deliver_message")
                  : Oo.timedOutAfterMs !== void 0
                    ? b("timeout")
                    : b("explicit"),
            ends_with_final_response: Oo.backgroundEndsWithFinalResponse === !0,
            shell: b("bash"),
          });
        return { data: Oo, ...(Pe && !Re && { remedy: { kind: "sandbox_violation" } }) };
      },
    };
  },
};
