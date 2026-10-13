// PowerShell tool definition — chunk-p5525etb.js [97071, 106257)
export const PowerShellTool = {
  name: Ct,
  ruleContentField: "command",
  searchHint: "execute Windows PowerShell commands",
  enablesCodeExecution: !0,
  get remoteExecution() {
    return an() ? Qs : _yr;
  },
  backgrounding: "self",
  get maxResultSizeChars() {
    return aKe();
  },
  persistenceThresholdCeiling: t3e,
  strict: !0,
  async description({ description: e }) {
    return e || "Run PowerShell command";
  },
  async prompt() {
    return yYo();
  },
  isConcurrencySafe(e) {
    return this.isReadOnly?.(e) ?? !1;
  },
  suppressesAllPermissionUpdates(e) {
    return mu(e);
  },
  isSearchOrReadCommand(e) {
    if (typeof e?.command !== "string") return { isSearch: !1, isRead: !1 };
    return qs(e.command);
  },
  isReadOnly(e) {
    return rn(e);
  },
  sandboxNetworkLists(e) {
    return Nae(e);
  },
  toAutoClassifierInput(e) {
    let n = e.dangerouslyDisableSandbox,
      s = !1,
      r = Zge(e),
      m = GSt(e);
    if (r !== void 0 || m !== void 0)
      return { command: e.command, ...!1, ...(r !== void 0 && { [Or]: r }), ...m };
    return e.command;
  },
  async preparePermissionMatcher({ command: e }) {
    let n = await fke(e);
    if (!n.valid) return () => !0;
    let s = GU(n).flatMap((r) => {
      let m = [r.name, ...r.args].join(" "),
        h = [cb(r.name), ...r.args].join(" ");
      return m.toLowerCase() === h ? [m] : [m, h];
    });
    return (r) => {
      let m = Hxe(r);
      return s.some((h) => {
        if (m !== null) {
          let y = m.toLowerCase(),
            v = h.toLowerCase();
          return v === y || v.startsWith(`${y} `);
        }
        return oZ(r, h, !0, !0);
      });
    };
  },
  get inputSchema() {
    return no();
  },
  get outputSchema() {
    return so();
  },
  userFacingName() {
    return "PowerShell";
  },
  getToolUseSummary(e) {
    if (!e?.command) return null;
    let { command: n, description: s } = e;
    if (s) return s;
    return jo(n, zT);
  },
  getActivityDescription(e) {
    if (!e?.command) return "Running command";
    return `Running ${e.description ?? jo(e.command, zT)}`;
  },
  isEnabled() {
    return !0;
  },
  mapToolResultToToolResultBlockParam(
    {
      interrupted: e,
      stdout: n,
      stderr: s,
      isImage: r,
      persistedOutputPath: m,
      persistedOutputSize: h,
      backgroundTaskId: y,
      backgroundedByUser: v,
      backgroundedToDeliverMessage: g,
      backgroundedByTurnAbort: _,
      timedOutAfterMs: S,
      backgroundEndsWithFinalResponse: w,
    },
    k,
  ) {
    if (r) {
      let N = bor(n, k);
      if (N) return N;
    }
    let T = n;
    if (m) {
      let N = n ? n.replace(/^(\s*\n)+/, "").trimEnd() : "",
        F = Xrt(N, nAe);
      T = oAe({
        filepath: m,
        originalSize: h ?? 0,
        isJson: !1,
        preview: F.preview,
        hasMore: F.hasMore,
        truncatedAtBytes: (h ?? 0) >= A_e ? A_e : void 0,
      });
    } else if (n) ((T = n.replace(/^(\s*\n)+/, "")), (T = T.trimEnd()));
    let C = s.trim();
    if (e) {
      if (s) C += tn;
      C += "<error>Command was aborted before completion</error>";
    }
    let P = y
      ? wor({
          backgroundTaskId: y,
          outputPath: Ru(y),
          backgroundedByUser: v,
          backgroundedToDeliverMessage: g,
          backgroundedByTurnAbort: _,
          timedOutAfterMs: S,
          reapedAtFinalResponse: w,
          readToolName: rt,
        })
      : "";
    if (y && gB())
      return {
        tool_use_id: k,
        type: "tool_result",
        content: Htr(
          y,
          [C, P].filter(Boolean).join(`
`),
          { backgroundedByUser: v, ending: w ? "final_response" : void 0 },
        ),
      };
    return {
      tool_use_id: k,
      type: "tool_result",
      content: [T, C, P].filter(Boolean).join(`
`),
      is_error: e,
    };
  },
  create(e) {
    return {
      async validateInput(n, s) {
        if (Yx() && mu(n)) return { result: !1, message: LB(), errorCode: 12 };
        let r = sn(Ue(n), n.command, !1);
        if (r !== null)
          return (
            f("sandbox_exec", "windows_policy_refusal"), { result: !1, message: r, errorCode: 11 }
          );
        let m = VSt(n, Ue(n));
        if (m !== void 0) return m;
        if (
          A4() &&
          xl() &&
          !Cd() &&
          Jle() &&
          s.remoteCall?.constraints.background !== "forbidden" &&
          !n.run_in_background &&
          s.shellWallCapMs === void 0
        ) {
          let h = Ys(n.command);
          if (h !== null)
            return {
              result: !1,
              message: `Blocked: ${h}. To wait for a condition, use Monitor with an until-loop (e.g. \`until <check>; do sleep 2; done\` \u2014 Monitor runs bash). To wait for a command you started, use run_in_background: true. Do not chain shorter sleeps to work around this block.`,
              errorCode: 10,
            };
        }
        return { result: !0 };
      },
      permissionCheckFailureDecision(n, s) {
        let r = St(e, s);
        return en(r.shellPermission);
      },
      async checkPermissions(n, s) {
        let r = St(e, s),
          m = await Jt(n, r.shellPermission);
        if (
          n.dangerouslyDisableSandbox &&
          m.behavior !== "deny" &&
          m.behavior !== "ask" &&
          !QGe(m.decisionReason) &&
          !Ue(n) &&
          Ue({ ...n, dangerouslyDisableSandbox: !1 })
        ) {
          let h = Aor({ toolName: Ct, input: n, context: r.shellPermission });
          if (h) return h;
          return {
            behavior: "ask",
            decisionReason: { type: "sandboxOverride", reason: "dangerouslyDisableSandbox" },
            message: "Run outside of the sandbox",
          };
        }
        return m;
      },
      async call(n, s) {
        let r = St(e, s),
          { onProgress: m } = s,
          h = r.userTypedShellDispatch,
          y = r.remoteCall?.constraints,
          v = y?.sandbox === "required",
          g = Ue(n, { userTypedShellDispatch: h, disableUnsandboxedCommands: v }),
          _ = sn(g, n.command, h && n.dangerouslyDisableSandbox === !0);
        if (_ !== null) throw (f("sandbox_exec", "windows_policy_refusal"), new gre(_));
        if (v) {
          let N =
            !g || UA() !== "strict" || Sd()
              ? { confined: !1, reason: "sandbox_unconfined" }
              : await KTe();
          if (!N.confined)
            throw (
              f("sandbox_exec", "remote_floor_refusal"),
              new gre(
                "This call must run inside a fully confining sandbox and none is available here. The command was not run.",
                N.reason,
              )
            );
        }
        let { abortController: S, emitToolProgress: w } = r,
          k = !r.agentId,
          T = !k || y?.pinCwd === !0,
          C = 0;
        await using P = Ror(r.taskRegistry);
        try {
          let N = oo({
              input: n,
              useSandbox: g,
              networkLists: qSt(r.toolUseId, n.command),
              constraints: y,
              onNote: r.remoteCall?.onNote,
              abortController: S,
              taskRegistry: r.taskRegistry,
              emitToolProgress: w,
              session: r.session,
              preventCwdChanges: T,
              isMainThread: k,
              toolUseId: r.toolUseId,
              toolState: r.toolState,
              agentId: r.agentId,
              caller: j2t(r),
              shellWallCapMs: r.shellWallCapMs,
              agentWorktree: r.agentWorktree,
              isolationRoot: Xge(r),
              sessionEnvVars: r.sessionEnvVars,
            }),
            F;
          do
            if (((F = await N.next()), !F.done && m)) {
              let Z = F.value;
              m({
                type: "progress",
                toolUseID: `ps-progress-${C++}`,
                data: {
                  type: "powershell_progress",
                  output: Z.output,
                  fullOutput: Z.fullOutput,
                  elapsedTimeSeconds: Z.elapsedTimeSeconds,
                  totalLines: Z.totalLines,
                  totalBytes: Z.totalBytes,
                  timeoutMs: Z.timeoutMs,
                  taskId: Z.taskId,
                },
              });
            }
          while (!F.done);
          let I = F.value;
          P.track(I);
          let D = I.code === 0 && !I.stdout && I.stderr && !I.backgroundTaskId,
            U = await fIn(I.stdout, I.outputFilePath);
          if (!D && !I.backgroundTaskId && mIn(r.session.host, n.command, I.code, U).prResolved)
            r.markPrResolvedThisSession();
          let V = zet(n.command),
            q = gi(S.signal.reason),
            z = I.interrupted && q === "interrupt",
            G = I.interrupted && lMt(q);
          if (I.interrupted && q === "background") throw new Ye();
          let X = "",
            re = bo(r.session).cwd;
          if (!T) {
            if (Eor(r.session, r.permissions())) X = vor("");
          }
          let me =
            I.backgroundTaskId !== void 0 &&
            (ect(r.agentContext) || (r.agentId === void 0 && PSt()))
              ? !0
              : void 0;
          if (I.backgroundTaskId) {
            let Z = Qwt(I.stdout || "", {
              command: n.command,
              pendingHint: r.session.pendingHint,
              isMainThread: k,
              surface: "shell",
            });
            if (gB())
              i("tengu_bash_task_ack", {
                trigger: I.backgroundedByUser
                  ? b("user")
                  : I.backgroundedByTurnAbort
                    ? b("turn_abort")
                    : I.backgroundedToDeliverMessage
                      ? b("deliver_message")
                      : I.timedOutAfterMs !== void 0
                        ? b("timeout")
                        : b("explicit"),
                ends_with_final_response: me === !0,
                shell: b("powershell"),
              });
            return {
              data: {
                stdout: Z,
                stderr: [I.stderr || "", X].filter(Boolean).join(`
`),
                interrupted: !1,
                backgroundTaskId: I.backgroundTaskId,
                backgroundedByUser: I.backgroundedByUser,
                backgroundedByTurnAbort: I.backgroundedByTurnAbort,
                backgroundedToDeliverMessage: I.backgroundedToDeliverMessage,
                timedOutAfterMs: I.timedOutAfterMs,
                backgroundEndsWithFinalResponse: me,
              },
            };
          }
          let ye = new Mon(),
            te = (I.stdout || "").trimEnd();
          ye.append(te + tn);
          let ge = S8r(n.command, I.code, te, I.stderr || ""),
            J = _or(ye.toString());
          if (
            ((J = Qwt(J, {
              command: n.command,
              pendingHint: r.session.pendingHint,
              isMainThread: k,
              surface: "shell",
            })),
            I.preSpawnError)
          ) {
            let Z = new x(I.preSpawnError, "PowerShell: pre-spawn error (cwd/argv redacted)");
            throw I.preSpawnErrorCode === "e2big" ? uH(Z, { kind: "spawn_arg_limit" }) : Z;
          }
          if (ge.isError && !z) {
            let Z = te.length <= 8192 ? te : te.slice(0, 4096) + te.slice(-4096),
              ae = yQo(Z, I.code);
            throw (
              i("tengu_powershell_tool_command_failed", {
                command_type: d(Dqt(n.command)),
                exit_code: I.code,
                stdout_length: te.length,
                error_class: T_(ae),
                not_recognized_kind:
                  ae === "not_recognized" || ae === "command_not_found"
                    ? d(_Qo(Z) ?? "unextracted")
                    : void 0,
                parser_error_kind:
                  ae === "parser_error" || ae === "ps5_chain_op"
                    ? d(b8r(Z) ?? "unextracted")
                    : void 0,
                bash_syntax_shape: d(bQo(n.command)),
                powershell_edition: d((await qYt()) ?? "unknown"),
                user_typed_shell_dispatch: h,
                call_origin: d(y ? "remote" : "local"),
                destructive_category: d(V ?? "none"),
                destructive_target_scope: d(NHe(n.command, se(), V)),
                permission_mode: d(r.permissions().mode),
              }),
              new fG({ stdout: J, stderr: I.stderr || "", code: I.code, interrupted: G })
            );
          }
          let ve, pe;
          if (I.outputFilePath && I.outputTaskId)
            try {
              let Z = nh(r.session);
              await S0(Z, r.storageV5);
              let ae = rAe(Z, I.outputTaskId, !1),
                R = j() && r.storageV5 !== void 0 ? gq(Bs(ae), Vs(ae)) : void 0,
                L = !0;
              if (j() && r.storageV5 !== void 0 && R !== void 0) {
                let B = await Cor(r.storageV5, R, I.outputFilePath, A_e, m9t());
                if (((L = B === "today"), typeof B === "number")) ((ve = ae), (pe = B));
              }
              if (L) ((pe = await b9t(I.outputFilePath, ae, A_e)), (ve = ae));
            } catch {}
          let he = DTn(J),
            xe = J;
          if (he) {
            let Z = await Sor(J, I.outputFilePath, pe, Tc(r.mainLoopModel()));
            if (Z) xe = Z;
            else he = !1;
          }
          let Me = [I.stderr || "", X].filter(Boolean).join(`
`),
            Se;
          if (!D) {
            let Z = _Tt(n.command, U);
            if (Object.keys(Z).length > 0) Se = Z;
            if (!r.remoteCall) pIn(Z, U, { command: n.command, exitCode: I.code, cwd: re });
          }
          return (
            i("tengu_powershell_tool_command_executed", {
              command_type: d(Dqt(n.command)),
              stdout_length: xe.length,
              stderr_length: Me.length,
              exit_code: I.code,
              interrupted: I.interrupted,
              powershell_edition: d((await qYt()) ?? "unknown"),
              user_typed_shell_dispatch: h,
              call_origin: d(y ? "remote" : "local"),
              destructive_category: d(V ?? "none"),
              destructive_target_scope: d(NHe(n.command, se(), V)),
              permission_mode: d(r.permissions().mode),
            }),
            {
              data: {
                stdout: xe,
                stderr: Me,
                interrupted: I.interrupted,
                returnCodeInterpretation: ge.message,
                isImage: he,
                persistedOutputPath: ve,
                persistedOutputSize: pe,
                gitOperation: Se,
              },
            }
          );
        } finally {
          if (r.toolUseId) w?.({ kind: "clear", toolUseId: r.toolUseId });
          if (!rn(n)) r.applyFileHistoryOp({ kind: "touch" });
        }
      },
    };
  },
};
