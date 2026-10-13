// Workflow tool definition — chunk-28840cth.js [63351, 73535)
export const WorkflowTool = {
  name: pu,
  aliases: ["RunWorkflow"],
  searchHint: "orchestrate subagents with deterministic JavaScript workflow",
  enablesCodeExecution: !0,
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  isEnabled: () => dg(),
  async prompt(e) {
    return fBr(EOe(e?.tools)) + u7r(ce().workflowSizeGuideline, ude()) + it();
  },
  async description(e, r) {
    return fBr(EOe(r?.tools)) + u7r(ce().workflowSizeGuideline, ude()) + it();
  },
  get inputSchema() {
    return Gt();
  },
  get outputSchema() {
    return Xt();
  },
  coerceInput: (e) => Tr(e, { apply: vuo() }),
  streamedInputRepairExemptKeys: () => (vuo() ? void 0 : qt),
  toAutoClassifierInput(e) {
    let r = we();
    if (r && typeof e.runId === "string") return r.runOpClassifierInput(e);
    if (e.script && e.scriptPath)
      return `${e.script}

scriptPath: ${e.scriptPath}`;
    if (e.script && e.name)
      return `${e.script}

name: ${e.name}`;
    return e.script || e.scriptPath || e.name || "";
  },
  userFacingName() {
    return "Workflow";
  },
  getToolUseSummary(e) {
    let r = e ? Me(e) : void 0;
    if (r && we()) return `workflow ${r.runId} \xB7 ${mr(r) ?? "?"}`;
    if (e?.scriptPath) {
      let n = ot(FP(e.scriptPath));
      return e.script ? `${n} \xB7 ${Ae(e.script)}` : n;
    }
    if (e?.name)
      return e.script
        ? `dynamic workflow: ${FP(e.name)} \xB7 ${Ae(e.script)}`
        : `dynamic workflow: ${FP(e.name)}`;
    if (!e?.script) return null;
    return Ae(e.script);
  },
  create(e) {
    return {
      async validateInput(r, n) {
        let s = Sr(e, n);
        if (F7(s.signal)) return vr;
        let a = Suo();
        if (a !== void 0) {
          let y = { kind: "feature_disabled", feature: "workflows", cause: a };
          return a === "managed_settings"
            ? {
                result: !1,
                message: "Dynamic workflows are disabled by managed settings (`disableWorkflows`).",
                errorCode: 5,
                remedy: y,
              }
            : {
                result: !1,
                message:
                  'Dynamic workflows are not enabled for this session (org policy, launch gate, or the "Dynamic workflows" setting in /config).',
                errorCode: 6,
                remedy: y,
              };
        }
        if (typeof r.runId === "string") {
          let y = we();
          if (!y)
            return { result: !1, message: "runId is not a field of this tool here.", errorCode: 9 };
          await st(s);
          let R = await y.validateRunOp(r, s);
          if (R) return R;
        }
        if (LQe()) {
          let y = [
            r.script && "script",
            r.scriptPath && "scriptPath",
            r.resumeFromRunId && "resumeFromRunId",
            r.remote && "remote",
          ].filter((R) => Boolean(R));
          if (y.length > 0)
            return {
              result: !1,
              message: `This session restricts the Workflow tool to named workflows (${_Go} is set). Not allowed here: ${y.join(", ")}. Invoke as {name, args} only.`,
              errorCode: 8,
            };
        }
        if (r.scriptPath) {
          let y = $9n(r.scriptPath, s);
          if (y !== null) return { result: !1, message: y, errorCode: 15 };
        }
        let w;
        if (r.resumeFromRunId) {
          let y = Ir(r.resumeFromRunId, s);
          if (y) return { result: !1, message: y, errorCode: 3 };
          let R = await U9n(
            r.resumeFromRunId,
            r.scriptPath,
            s.storageV5,
            s.signal,
            s.toolState.get(N1t),
          );
          if (F7(s.signal)) return vr;
          if (R.kind === "refused") return { result: !1, message: R.message, errorCode: 16 };
          if (r.scriptPath) w = q1r(R, r.scriptPath);
        }
        let h = await Rr(r, s, s.storageV5);
        if ("error" in h && w !== void 0) h = await Rr({ ...r, script: w }, s, s.storageV5);
        if (F7(s.signal)) return vr;
        if ("error" in h) {
          if (r.name && !r.scriptPath) m("workflow_resolve", "not_found");
          return { result: !1, message: h.error, errorCode: 1 };
        }
        if (r.name && !r.scriptPath) g("workflow_resolve");
        if (!MR(h.script))
          return {
            result: !1,
            message: `${r.scriptPath ? `Workflow script file ${r.scriptPath}` : `The file of workflow "${r.name}"`} contains a control character that an approval prompt cannot show, such as an escape byte or a carriage return that is not part of a CRLF line ending. Remove it from the file and try again.`,
            errorCode: 17,
          };
        let k = Kb(h.script);
        if ("error" in k)
          return {
            result: !1,
            message: `Invalid workflow script: ${k.error}${yr(r, s.tools)}`,
            errorCode: 2,
          };
        if (r.script && thn(k.scriptBody))
          return {
            result: !1,
            message: `Workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.${yr(r, s.tools)}`,
            errorCode: 4,
          };
        return { result: !0 };
      },
      async checkPermissions(r, n) {
        let s = Sr(e, n),
          a = s.permissions(),
          w = Me(r) !== void 0,
          h = r.scriptPath || w ? void 0 : r.name,
          k = (P) => (h ? jD(a, pu, P).get(h) : void 0),
          y = k("deny");
        if (y)
          return {
            behavior: "deny",
            message: `Workflow ${h} blocked by permission rules`,
            decisionReason: { type: "rule", rule: y },
          };
        let R = w ? Me(r) : void 0;
        if (R && mr(R) === "read")
          return {
            behavior: "allow",
            updatedInput: r,
            decisionReason: { type: "other", reason: ipe },
          };
        let I = r;
        if (w);
        else if (r.scriptPath) {
          let P = await nhn(r.scriptPath, s),
            D =
              "error" in P && r.resumeFromRunId && $9n(r.scriptPath, s) === null
                ? q1r(
                    await U9n(
                      r.resumeFromRunId,
                      r.scriptPath,
                      s.storageV5,
                      s.signal,
                      s.toolState.get(N1t),
                    ),
                    r.scriptPath,
                  )
                : void 0;
          if (D !== void 0) I = { ...r, script: D };
          else if ("error" in P)
            return {
              behavior: "deny",
              message: P.error,
              decisionReason: {
                type: "other",
                reason: "workflow scriptPath outside the readable set",
              },
            };
          else I = { ...r, script: P.script };
        } else if (r.name) {
          let P = await j1t(r.name, se(), s.storageV5);
          I = { ...r, script: P?.script };
        }
        let W = (w && we()?.RUN_OP_CONSENT_MESSAGE) || "Review dynamic workflow before running",
          G = k("ask");
        if (G)
          return {
            behavior: "ask",
            message: W,
            updatedInput: I,
            decisionReason: { type: "rule", rule: G },
          };
        let H = k("allow");
        if (H)
          return { behavior: "allow", updatedInput: I, decisionReason: { type: "rule", rule: H } };
        return {
          behavior: "ask",
          message: W,
          updatedInput: I,
          ...(h && {
            suggestions: [
              {
                type: "addRules",
                rules: [{ toolName: pu, ruleContent: h }],
                behavior: "allow",
                destination: "localSettings",
              },
            ],
          }),
        };
      },
      async call(r, n) {
        let s = Sr(e, n),
          { parentMessage: a } = n;
        if (s.agentId !== void 0 && a$(s.agentId))
          throw (
            m("subagent_launch", "workflow_spawner_stop_pending"),
            new be(
              "This agent has been stopped and its stop is still completing; it cannot launch workflows or act on existing runs.",
            )
          );
        if (typeof r.runId === "string") {
          let V = we();
          if (!V) throw new be("runId is not a field of this tool here.");
          await st(s);
          let J = await V.callRunOp(r, s);
          if (J)
            return {
              data: { status: V.RUN_OP_STATUS, taskId: "", runId: J.runId, runOp: J.runOp },
            };
        }
        if (r.resumeFromRunId) {
          let V = Ir(r.resumeFromRunId, s);
          if (V) throw new be(V);
          let J = await aGo(
            r.resumeFromRunId,
            r.scriptPath,
            s.storageV5,
            s.signal,
            s.toolState.get(N1t),
          );
          if (J !== null) throw new be(J);
        }
        let w = await Rr(r, s, s.storageV5);
        if ("error" in w) throw new be(w.error);
        let { script: h, source: k, resolvedScriptPath: y } = w,
          R = (V) => {
            let J =
              r.resumeFromRunId == null
                ? void 0
                : lGo(r.resumeFromRunId, s.toolState, s.taskRegistry);
            if (J === "")
              throw new be(
                "This workflow run hides its script, and this session has not loaded that script yet. If its background resume is still running, wait for it; if that resume failed, start a new run without resumeFromRunId.",
              );
            if (J !== void 0 && J !== at(V))
              throw new be(
                "This workflow run hides its script, so it can only be resumed with its original script file, unedited. To run a changed script, start a new run without resumeFromRunId.",
              );
            return J;
          };
        R(h);
        let I = k === "built-in" && w.scriptMatchesDefinition === !0,
          W = Kb(h);
        if ("error" in W) throw new be(`Invalid workflow script: ${W.error}`);
        let G = r.resumeFromRunId ?? `wf_${Ht().slice(0, 12)}`,
          H = hE("local_workflow"),
          P = W.meta.description,
          D = W.meta.name,
          Z = $ie(W.scriptBody);
        if (!Z.ok)
          return (
            m("task_local_workflow", "compile_failed"),
            {
              data: {
                status: "async_launched",
                taskId: H,
                taskType: "local_workflow",
                workflowName: D,
                runId: G,
                summary: P,
                error: `${Z.error}${yr(r, s.tools)}`,
              },
            }
          );
        let le = Q0(G),
          ee = y ?? e0n(D, G, h, s.storageV5);
        iGo(G, ee, h, s.toolState.get(N1t));
        let de = r.scriptPath ? void 0 : k,
          he = r.scriptPath ? "scriptPath" : (k ?? "inline"),
          me = rhn(D, de, I),
          re = ohn(W.meta.description, de, I);
        if (
          (i("tengu_workflow_launched", {
            invocation_mode: b(r.scriptPath ? "scriptPath" : r.name ? "named" : "inline"),
            workflow_source: d(he),
            workflow_name: me,
            workflow_description: re,
            phase_count: W.meta.phases?.length ?? 0,
            launched_from_subagent: s.agentId != null,
            has_args: r.args != null,
            is_resume: r.resumeFromRunId != null,
            script_size_chars: h.length,
          }),
          r.resumeFromRunId == null)
        )
          Hr({
            toolState: s.toolState,
            taskRegistry: s.taskRegistry,
            name: $1t(de, I) ? eir(D) : void 0,
            runId: G,
          });
        let B = {
            workflowRunId: G,
            script: h,
            scriptPath: ee,
            args: r.args,
            meta: W.meta,
            vmScript: Z.vmScript,
            toolUseId: s.toolUseId,
            transcriptDir: le,
            telemetry: { source: he, name: me, description: re, scriptIsVerbatimBuiltIn: I },
            invokingRequestId: a?.requestId,
            parentPromptId: pDe(s.messages(), s.agentContext),
          },
          C = Zt(n),
          te = (V) => C(F1t, V);
        if (r.resumeFromRunId) {
          let V = Ir(r.resumeFromRunId, s);
          if (V) throw (m("task_local_workflow", "resume_collision"), new be(V));
        }
        let ye = R(h) !== void 0;
        return (
          te({
            ...B,
            taskId: H,
            isResume: r.resumeFromRunId != null,
            ...(ye && { withholdScriptFromSdkEvents: !0 }),
          }),
          {
            data: {
              status: "async_launched",
              taskId: H,
              taskType: "local_workflow",
              workflowName: D,
              runId: G,
              summary: P,
              transcriptDir: le,
              scriptPath: ee,
            },
          }
        );
      },
    };
  },
  renderToolUseMessage(e, { verbose: r }) {
    let n = Me(e),
      s = we();
    if (n && s) return s.renderRunOp(n, r);
    if (e.scriptPath) {
      let a = FP(e.scriptPath),
        w = r ? a : ot(a);
      if (!e.script) return w;
      return r
        ? `${a}
${e.script}`
        : `${w} \xB7 ${Ae(e.script)}`;
    }
    if (e.name) {
      let a = FP(e.name);
      if (!e.script) return `dynamic workflow: ${a}`;
      return r
        ? `dynamic workflow: ${a}
${e.script}`
        : `dynamic workflow: ${a} \xB7 ${Ae(e.script)}`;
    }
    if (!e.script) return null;
    return r ? e.script : Ae(e.script);
  },
  mapToolResultToToolResultBlockParam(e, r) {
    if (e.error)
      return {
        tool_use_id: r,
        type: "tool_result",
        content: `Workflow script has a syntax error and was not launched:
${e.error}`,
        is_error: !0,
      };
    let n = we()?.runOpToolResultText(e.runId, e.runOp);
    if (n) return { tool_use_id: r, type: "tool_result", content: n.content, is_error: n.isError };
    if (e.status === "remote_launched")
      return {
        tool_use_id: r,
        type: "tool_result",
        content:
          `Workflow launched in a remote CCR session. Task ID: ${e.taskId}
Session: ${e.sessionUrl}
` +
          (e.summary
            ? `Summary: ${e.summary}
`
            : "") +
          (e.warning
            ? `Warning: ${e.warning}
`
            : "") +
          `
The workflow runs against a fresh clone of the pushed branch; phase progress is visible at the session URL, not in /workflows. You will be notified when it completes.`,
        is_error: !1,
      };
    let s = e.summary
        ? `
Summary: ${e.summary}`
        : "",
      a = e.transcriptDir
        ? `
Transcript dir: ${e.transcriptDir}`
        : "",
      w = e.scriptPath
        ? `
Script file: ${e.scriptPath}
(Edit this file with Write/Edit and re-invoke Workflow with {scriptPath: "${e.scriptPath}"} to iterate without resending the script.)`
        : "",
      h =
        e.runId && e.scriptPath
          ? `
Run ID: ${e.runId}
To resume after editing the script: Workflow({scriptPath: "${e.scriptPath}", resumeFromRunId: "${e.runId}"}) \u2014 completed agents return cached results (cached results may themselves be empty \u2014 inspect journal.jsonl before assuming there is something to recover).`
          : "",
      k = (e.runId, ""),
      y = `Workflow launched in background. Task ID: ${e.taskId}${s}${a}${w}${h}${k}

You will be notified when it completes. Use /workflows to watch live progress.`;
    return { tool_use_id: r, type: "tool_result", content: y, is_error: !1 };
  },
};
