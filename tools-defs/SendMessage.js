// SendMessage tool definition — chunk-xkmctf5g.js [50963, 92183)
export const SendMessageTool = {
  name: Gn,
  searchHint: "send messages to agent teammates",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  userFacingName() {
    return "SendMessage";
  },
  get inputSchema() {
    return ke();
  },
  coerceInput: (s) => ZMn(s, { applySplit: Ge() }),
  shouldDefer: !0,
  isReadOnly(s) {
    return typeof s.message === "string";
  },
  backfillObservableInput(s) {
    if (!iwo(s)) return;
    if (typeof s.to !== "string") return Ts(s);
    if (Gfr(s) !== void 0) return;
    Ts(s);
    let h = s.message ?? "";
    if (typeof h === "string")
      ((s.type = "message"),
        (s.recipient = s.to),
        (s.recipient_kind = Cs(s.to)),
        (s.content = jo(h, 50)));
    else if (typeof s.message === "object" && s.message !== null) {
      let e = s.message;
      if (typeof e.type === "string") s.type = e.type;
      if (((s.recipient = s.to), (s.recipient_kind = Cs(s.to)), typeof e.request_id === "string"))
        s.request_id = e.request_id;
      let i = GE(e.approve);
      if (typeof i === "boolean") s.approve = i;
      let r = e.reason ?? e.feedback;
      if (typeof r === "string") s.content = jo(r, 50);
    }
    return !0;
  },
  suppressesAlwaysAllowRule(s) {
    return !1;
  },
  toAutoClassifierInput(s) {
    let h = (O, U) => (U ? ` [${O}: ${U}]` : ""),
      e = !1,
      i = (O) => O,
      r = ZMn(s),
      b = r !== null && L(r.input) ? r.input : void 0,
      w = b === void 0 ? s.summary : typeof b.summary === "string" ? b.summary : void 0,
      I = h("summary", typeof w === "string" ? i(w) : void 0),
      R = (b !== void 0 && typeof b.message === "string" ? b.message : void 0) ?? s.message ?? "",
      y = typeof R === "string" ? i(R) : R;
    if (typeof y === "string") {
      if (he(s))
        return y.trim().length === 0
          ? `notify when idle: ${s.to}${I}`
          : `to ${s.to}: ${y}${I} [notify when idle]`;
      return `to ${s.to}: ${y}${I}`;
    }
    switch (y.type) {
      case "shutdown_request":
        return `shutdown_request to ${s.to}${h("reason", y.reason)}${I}`;
      case "shutdown_response":
        return `shutdown_response ${y.approve ? "approve" : "reject"} ${y.request_id} to ${s.to}${h("reason", y.reason)}${I}`;
      case "plan_approval_response":
        return `plan_approval ${y.approve ? "approve" : "reject"} ${y.request_id} to ${s.to}${h("feedback", y.feedback)}${I}`;
    }
  },
  async description() {
    return os;
  },
  async prompt() {
    return rs(Xo(), $te());
  },
  mapToolResultToToolResultBlockParam(s, h) {
    let e = s;
    if (typeof e !== "object" || e === null || Array.isArray(e))
      throw TypeError("SendMessage output is not an object");
    let { display: i, inlineHandback: r, ...b } = { display: void 0, inlineHandback: void 0, ...s },
      w = (I) => _({ success: !0, message: I });
    if (r) {
      if (qAe()) {
        let I = CHn(r.content, r.harnessNoteCount, r.harnessTailCount, r.harnessSectionHash);
        return {
          tool_use_id: h,
          type: "tool_result",
          content: [
            {
              type: "text",
              text: `${w(tjo)}
${I[0].text}`,
            },
          ],
        };
      }
      return {
        tool_use_id: h,
        type: "tool_result",
        content: [{ type: "text", text: _({ ...b, message: CUr(r) }) }],
      };
    }
    return { tool_use_id: h, type: "tool_result", content: [{ type: "text", text: _(b) }] };
  },
  create(s) {
    let h = {
      async checkPermissions(e, i) {
        let r = Pe(s, i),
          b = anr({ to: e.to, message: e.message });
        if (b !== void 0)
          return { behavior: "deny", message: b, decisionReason: { type: "other", reason: e9o } };
        if (QFe() && !ps(e.to)) {
          let w = Ch(e.to),
            I = w.scheme;
          if (I === "bridge") {
            let T = aAt(r.session, w.target, e.to);
            if (T) {
              if (!ime(r))
                ge({
                  route: "bridge",
                  startedAt: Date.now(),
                  errorClass: "bridge_auth",
                  via: "address",
                });
              return {
                behavior: "deny",
                message: Qs(T),
                decisionReason: { type: "other", reason: sAt },
              };
            }
            let R = N0e(r.session, w.target, e.to);
            if (R) {
              if (!ime(r))
                ge({
                  route: "bridge",
                  startedAt: Date.now(),
                  errorClass: "recipient_gate_off",
                  via: "address",
                });
              return {
                behavior: "deny",
                message: Qs(R),
                decisionReason: { type: "other", reason: iAt },
              };
            }
            return {
              behavior: "ask",
              message: Qs(
                `Send a message to Remote Control session ${e.to}? It reaches the receiving Claude (possibly another machine) via Anthropic's servers as a cross-session message \u2014 marked as from another Claude session, not from its user.`,
              ),
              decisionReason: {
                type: "safetyCheck",
                reason:
                  "isolatePeerMachines is enabled \u2014 cross-machine message requires explicit approval",
                classifierApprovable: !1,
                circuitBreaker: "isolatePeerMachines",
              },
            };
          }
          if (I === "other") {
            let T;
            try {
              let R = ime(r) ? Cjo(r, e, Zs) : void 0;
              T = cs(R)
                ? R
                : await qUt(
                    r.session,
                    e.to,
                    e.message,
                    r.resolverState(),
                    r.storageV5,
                    r.credentials,
                  );
            } catch (R) {
              return (
                t(`[SendMessage] permission-phase resolve failed (${EH(l(R))}) \u2014 asking`, {
                  level: "warn",
                }),
                {
                  behavior: "ask",
                  message: Qs(
                    `Send a message to '${e.to}'? Its destination could not be resolved just now, so it is unknown whether this name is a Claude session on another machine (isolatePeerMachines is enabled).`,
                  ),
                  decisionReason: {
                    type: "safetyCheck",
                    reason:
                      "isolatePeerMachines is enabled \u2014 cross-machine message requires explicit approval",
                    classifierApprovable: !1,
                    circuitBreaker: "isolatePeerMachines",
                  },
                }
              );
            }
            if (T.kind === "cloud-session") {
              if (Kee(T.sessionId))
                return {
                  behavior: "deny",
                  message: Qs(lX(e.to, sI(r))),
                  decisionReason: { type: "other", reason: Jgn },
                };
              let {
                isRemoteControlPeerUnreachableFromHere: R,
                formatUnreachableElevatedRefusal: y,
              } = import.meta.require("/$bunfs/root/chunk-9k4ckwrp.js");
              if (T.via === "remote-control" && R()) {
                if (!ime(r))
                  ge({
                    route: "bridge",
                    startedAt: Date.now(),
                    errorClass: "bridge_auth",
                    via: "remote_control_name",
                  });
                return {
                  behavior: "deny",
                  message: Qs(y(T.displayName)),
                  decisionReason: { type: "other", reason: sAt },
                };
              }
              let O = N0e(r.session, T.sessionId, T.displayName);
              if (O) {
                if (!ime(r))
                  ge({
                    route: "bridge",
                    startedAt: Date.now(),
                    errorClass: "recipient_gate_off",
                    via: T.via === "cloud" ? "cloud_name" : "remote_control_name",
                  });
                return {
                  behavior: "deny",
                  message: Qs(O),
                  decisionReason: { type: "other", reason: iAt },
                };
              }
              return (
                wqt(r, e, T, Gn),
                {
                  behavior: "ask",
                  message: Qs(
                    T.via === "cloud"
                      ? `Send a message to cloud session '${T.displayName}'? It reaches the receiving Claude (running in the cloud) via Anthropic's servers as a cross-session message \u2014 marked as from another Claude session, not from its user.`
                      : `Send a message to Remote Control session '${T.displayName}'? It reaches the receiving Claude (on another machine) via Anthropic's servers as a cross-session message \u2014 marked as from another Claude session, not from its user.`,
                  ),
                  decisionReason: {
                    type: "safetyCheck",
                    reason:
                      "isolatePeerMachines is enabled \u2014 cross-machine message requires explicit approval",
                    classifierApprovable: !1,
                    circuitBreaker: "isolatePeerMachines",
                  },
                }
              );
            }
            if (
              T.kind === "not-found" &&
              (T.cloudUnavailable !== void 0 || T.bridgeUnavailable !== void 0)
            ) {
              let R = [
                T.cloudUnavailable !== void 0
                  ? "the cloud session list could not be fetched"
                  : void 0,
                T.bridgeUnavailable !== void 0
                  ? "the account session list could not be checked"
                  : void 0,
              ]
                .filter((y) => y !== void 0)
                .join(" and ");
              return {
                behavior: "ask",
                message: Qs(
                  `Send a message to '${e.to}'? Just now ${R}, so it is unknown whether this name is a Claude session on another machine (isolatePeerMachines is enabled).`,
                ),
                decisionReason: {
                  type: "safetyCheck",
                  reason:
                    "isolatePeerMachines is enabled \u2014 cross-machine message requires explicit approval",
                  classifierApprovable: !1,
                  circuitBreaker: "isolatePeerMachines",
                },
              };
            }
            wqt(r, e, T, Gn);
          }
        }
        if (si(r.permissions().mode))
          return {
            behavior: "passthrough",
            message: "Message to another agent requires classifier review.",
          };
        return { behavior: "allow", updatedInput: e };
      },
      async validateInput(e, i) {
        let r = Pe(s, i),
          b = anr({ to: e.to, message: e.message });
        if (b !== void 0)
          return (
            ge({ route: "unresolved", startedAt: Date.now(), degradedClass: "own_agents_only" }),
            { result: !1, message: b, errorCode: 9 }
          );
        if (e.to === "*")
          return {
            result: !1,
            message:
              'broadcast (to: "*") is no longer supported \u2014 send a message per recipient',
            errorCode: 9,
          };
        {
          let I = Ch(e.to).scheme;
          if ((I === "uds" || I === "bridge" || !1) && !xi())
            return { result: !1, message: f9t, errorCode: 9 };
        }
        if (he(e)) {
          if (typeof e.message !== "string")
            return {
              result: !1,
              message:
                "notify_when_idle cannot ride a structured message \u2014 send plain text, or omit the message for a pure subscription",
              errorCode: 9,
            };
          if (Ae(e, r).refusedForPrincipal && e.message.trim().length === 0)
            return { result: !1, message: $e, errorCode: 9 };
          let I = Ch(e.to).scheme;
          if (I === "bridge" || I === "did") return { result: !1, message: Ie, errorCode: 9 };
        }
        let w = wjn(e.to, xc);
        if (w !== void 0) return { result: !1, message: w, errorCode: 9 };
        {
          let I = Ch(e.to);
          if (I.scheme === "uds" && kOe(I.target))
            return { result: !1, message: lX(e.to, sI(r)), errorCode: 9 };
        }
        if (e.to.includes("@"))
          return {
            result: !1,
            message: "to must be a bare teammate name \u2014 there is only one team per session",
            errorCode: 9,
          };
        if (typeof e.message === "string" && e.message.trim().length === 0 && !he(e))
          return { result: !1, message: xs, errorCode: 9 };
        if (Ch(e.to).scheme === "bridge") {
          if (Kee(Ch(e.to).target)) return { result: !1, message: lX(e.to, sI(r)), errorCode: 9 };
          if (typeof e.message !== "string")
            return {
              result: !1,
              message: "structured messages cannot be sent cross-session \u2014 only plain text",
              errorCode: 9,
            };
          return { result: !0 };
        }
        if (Ch(e.to).scheme === "uds" && typeof e.message === "string") return { result: !0 };
        if (typeof e.message === "string") {
          if (LD(e.message))
            return {
              result: !1,
              message: $te()
                ? "message text must not be a teammate protocol frame (permission/mode/plan/shutdown JSON): send plain text"
                : 'message text must not be a teammate protocol frame (permission/mode/plan/shutdown JSON) \u2014 to respond to a plan or shutdown request, use the structured object form ({"message": {"type": ...}}); otherwise send plain text',
              errorCode: 9,
            };
          try {
            let I = X(e.message);
            if (
              I !== null &&
              typeof I === "object" &&
              "type" in I &&
              typeof I.type === "string" &&
              [
                "idle_notification",
                "teammate_terminated",
                "task_assignment",
                "task_completed",
                "shutdown_rejected",
              ].includes(I.type)
            )
              return {
                result: !1,
                message:
                  "message text must not be a teammate lifecycle/task frame (idle/terminated/task/shutdown JSON) \u2014 send plain text instead",
                errorCode: 9,
              };
          } catch {}
          return { result: !0 };
        }
        if (!Xo())
          return {
            result: !1,
            message:
              "Structured team-protocol messages are only available with agent teams enabled.",
            errorCode: 9,
          };
        if (Ch(e.to).scheme !== "other")
          return {
            result: !1,
            message: "structured messages cannot be sent cross-session \u2014 only plain text",
            errorCode: 9,
          };
        if (e.message.type === "shutdown_response" && e.to !== ca)
          return { result: !1, message: `shutdown_response must be sent to "${ca}"`, errorCode: 9 };
        if (
          e.message.type === "shutdown_response" &&
          e.message.approve &&
          e.message.reason !== void 0
        )
          return {
            result: !1,
            message:
              "reason is only delivered on rejections (approve: false) \u2014 approvals are sent as a silent confirmation with no reason text; omit reason or reject instead",
            errorCode: 9,
          };
        if (
          e.message.type === "shutdown_response" &&
          !e.message.approve &&
          (!e.message.reason || e.message.reason.trim().length === 0)
        )
          return {
            result: !1,
            message: "reason is required when rejecting a shutdown request",
            errorCode: 9,
          };
        return { result: !0 };
      },
      async deliver(e, i) {
        let r = Pe(s, i),
          b = r.agentId;
        if (b !== void 0 && a$(b))
          throw (
            m("subagent_launch", "send_message_spawner_stop_pending"),
            Error(
              "This agent has been stopped and its stop is still completing; it cannot send messages.",
            )
          );
        let { assistantMessage: w, ask: I, runEngine: T } = kt(i),
          R = Date.now();
        function y(S, D, F) {
          ge({ route: S, startedAt: R, errorClass: D, ...F });
        }
        let O = anr({ to: e.to, message: e.message });
        if (O !== void 0)
          return (
            y("unresolved", void 0, { degradedClass: "own_agents_only" }),
            { data: { success: !1, message: O } }
          );
        let U = aht() ? cht(r.permissions()) : void 0;
        if (b !== void 0 && Z2r(r.session, b))
          return (
            y("unresolved", "not_reachable"),
            {
              data: {
                success: !1,
                message:
                  "Observers report via ObserverReport, not SendMessage. SendMessage is not available from an observer.",
              },
            }
          );
        if (ps(e.to)) {
          if (!xi())
            return (y("desktop_host", "not_reachable"), { data: { success: !1, message: f9t } });
          let S = !1;
          if (((S = he(e)), typeof e.message !== "string"))
            return (
              y("desktop_host", "invalid_target"),
              {
                data: {
                  success: !1,
                  message: `Not sent: a Claude Desktop session takes a plain-text message, not a structured ${e.message.type}.`,
                },
              }
            );
          if (e.message.trim().length === 0) {
            if (Us(e, w, r.toolUseId)) return (y("desktop_host", "handler_rewrite"), S ? Ls : He);
            return (
              y("desktop_host", S ? "not_reachable" : "empty_message"),
              {
                data: {
                  success: !1,
                  message: S ? `Nothing was subscribed: ${Ie}` : "Not sent: the message is empty.",
                },
              }
            );
          }
          let D = ss(r);
          if ("kind" in D)
            switch (D.kind) {
              case "unavailable":
                return (
                  y("unresolved", "desktop_session_id"),
                  {
                    data: {
                      success: !1,
                      message: `No agent named '${e.to}' is reachable. It has the shape of a Claude Desktop session id, but Claude Desktop's session messaging tool is not available in this session, so SendMessage cannot deliver to it.`,
                    },
                  }
                );
              case "loop-paused":
                return (
                  y("desktop_host", void 0, { degradedClass: "hop_loop" }),
                  {
                    data: {
                      success: !1,
                      message: `Not delivered: this session has already messaged Claude Desktop sessions ${D.forwards} times since your user last typed here, which looks like sessions messaging each other automatically. Paused until your user's next message in this session.`,
                    },
                  }
                );
            }
          let F = b ? Le(r, b).from : void 0,
            q = b !== void 0 && F !== void 0 ? bSe(F, e.message) : e.message,
            B = VUt(b, F, { oneWay: !1 }),
            H = await T(ts, { tool: D.tool, sessionId: e.to, message: q, assistantMessage: w }),
            E = H.blockedWait ? { blockedWait: !0 } : void 0,
            W = H.attachments.length > 0 ? H.attachments : void 0;
          switch (H.kind) {
            case "sent":
              return (
                y("desktop_host", void 0, E),
                {
                  data: {
                    success: !0,
                    message: `Forwarded to Claude Desktop's session messaging: ${H.detail || "sent."}${e8n}${B.message}${S ? fs : ""}`,
                    display: `Forwarded to Claude Desktop's session messaging: ${H.detail || "sent."}${t8n}${B.display}${S ? fs : ""}`,
                  },
                  ...(W && { newMessages: W }),
                }
              );
            case "refused":
              return (
                y("desktop_host", "desktop_refused", E),
                {
                  data: {
                    success: !1,
                    message: `Not delivered to Claude Desktop session ${e.to}: ${H.message}`,
                  },
                  ...(W && { newMessages: W }),
                }
              );
          }
        }
        let ee = b ? Le(r, b) : void 0,
          P = ee?.from;
        if (typeof e.message === "string") {
          let S = Ch(e.to),
            D = S.scheme === "bridge" && cBt(r, e, Se, dBt);
          if ((S.scheme === "bridge" || S.scheme === "uds") && !xi())
            return { data: { success: !1, message: f9t } };
          let F = M4t(S.scheme === "bridge" ? "bridge" : "uds");
          if (S.scheme === "bridge") {
            if (Kee(S.target))
              return (
                y("bridge", "invalid_target"),
                { data: { success: !1, message: lX(e.to, sI(r)), display: AQe(e.to) } }
              );
            let q = ve("unknown");
            if (q !== null) return { data: { success: !1, message: q } };
            let {
                postInterClaudeMessage: B,
                isLikelyStaleBridgeError: H,
                classifyBridgeSendError: E,
              } = import.meta.require("/$bunfs/root/chunk-c5tem16a.js"),
              W = aAt(r.session, S.target, e.to);
            if (W)
              return (
                y("bridge", "bridge_auth", { via: "address" }),
                { data: { success: !1, message: W } }
              );
            let C = N0e(r.session, S.target, e.to);
            if (C)
              return (
                y("bridge", "recipient_gate_off", { via: "address" }),
                { data: { success: !1, message: C } }
              );
            let j = await lBt({
              tool: $s,
              input: e,
              ask: I,
              permissionPhase: r.permissionPhase,
              alreadyApproved: D,
              recipientLabel: `Remote Control session '${e.to}'`,
              parse: (be) => ke().safeParse(be),
            });
            if (!j.proceed)
              return (
                y("bridge", Tro(j), { blockedWait: !0, via: "address" }),
                { data: { success: !1, message: j.message } }
              );
            let V = ve("unknown");
            if (V !== null) return { data: { success: !1, message: V } };
            let K = j.input,
              Y = typeof K.message === "string" ? K.message : e.message,
              Q = hs(Y, () => y("bridge", "handler_rewrite", { via: "address" }));
            if (Q !== void 0) return Q;
            let z = b !== void 0 && P !== void 0 ? bSe(P, Y) : Y,
              Z = Ss(),
              re = VUt(b, P, { oneWay: Z !== void 0 }),
              ie = UUr(aOn(r.session, S.target)),
              ue = await B(
                S.target,
                z,
                F,
                void 0,
                h3e(r.messages()),
                U,
                r.credentials,
                r.hookCaller,
              ),
              pe = K.summary || jo(Y, 50);
            if (ue.ok) {
              y("bridge", void 0, { via: "address", ...(j.asked && { blockedWait: !0 }) });
              let be = Z
                ? `\u201C${pe}\u201D \u2192 ${e.to} (one-way: ${vs(Z)}, so the receiver cannot address a reply to this session)`
                : `\u201C${pe}\u201D \u2192 ${e.to}${ks(F)}`;
              return {
                data: {
                  success: !0,
                  message: `${be}${ie.message}${e8n}${re.message}`,
                  display: `${be}${ie.display}${t8n}${re.display}`,
                  msg_id: ue.msgId,
                },
              };
            }
            y("bridge", E(ue.error), { via: "address", ...(j.asked && { blockedWait: !0 }) });
            let ye = H(ue.error)
              ? ` \u2014 the peer session may have ended or restarted, so this bridge ID is stale. Call ${xc} to get the current address.`
              : "";
            return {
              data: {
                success: !1,
                message: `Failed to send to ${e.to}: ${ue.error ?? "unknown"}${ye}`,
              },
            };
          }
          if (S.scheme === "uds") {
            if (kOe(S.target))
              return (
                y("uds", "invalid_target"),
                { data: { success: !1, message: lX(e.to, sI(r)), display: AQe(e.to) } }
              );
            let { sendToUdsSocket: q, ownMessagingSocket: B } = import.meta.require(
                "/$bunfs/root/chunk-p30zpwzv.js",
              ),
              { subscribeToPeerIdle: H, idleSubscriptionLines: E } = import.meta.require(
                "/$bunfs/root/chunk-gpfg7skn.js",
              ),
              { notify: W, refusedForPrincipal: C } = Ae(e, r),
              j = e.message.trim().length > 0,
              V = gs({
                input: e,
                plainMessage: e.message,
                notify: W,
                refusedForPrincipal: C,
                assistantMessage: w,
                toolUseId: r.toolUseId,
                emit: y,
              });
            if (V !== void 0) return V;
            if (C) Be();
            let K = b !== void 0 && P !== void 0 ? bSe(P, e.message) : e.message,
              Y = B() !== void 0,
              Q = VUt(b, P, { oneWay: !Y });
            try {
              let z = j
                  ? await q(S.target, K, r.storageV5, F, void 0, h3e(r.messages()), U, {
                      fromPlugin: r.hookCaller,
                    })
                  : void 0,
                Z = W ? await H(S.target, e.to, r.storageV5, U) : void 0;
              if (z) y("uds", void 0, { ...(Z && !Z.ok && { degradedClass: Te(Z) }) });
              else if (Z) us(Z, y);
              let re = e.summary || jo(e.message, 50),
                ie = Z ? E(e.to, Z, xc) : void 0,
                ue = [
                  ...(z ? [`\u201C${re}\u201D \u2192 ${e.to}${FUr(Y)}${Q.message}`] : []),
                  ...(ie ? [ie.model] : []),
                ],
                pe = ie ? void 0 : ys(C, e, w, r.toolUseId);
              return {
                data: {
                  success: z !== void 0 || Z?.ok === !0,
                  message: `${ue.join(`
`)}${pe?.model ?? ""}`,
                  ...((z || ie || pe || Q.display) && {
                    display: [
                      ...(z ? [`\u201C${re}\u201D \u2192 ${e.to}${Q.display}`] : []),
                      ...(ie ? [ie.display] : pe ? [pe.display] : []),
                    ].join(`
`),
                  }),
                  ...(z && { msg_id: z.msgId }),
                },
              };
            } catch (z) {
              y("uds", we(z));
              let Z = m_e(z),
                re = Z === "gone" ? lst(xc) : Z === "busy" ? MHn(z) : "";
              return {
                data: {
                  success: !1,
                  message: `Failed to send to ${e.to}: ${l(z)}${re}${bs(C, e, w, r.toolUseId)}`,
                },
              };
            }
          }
        }
        let oe = cBt(r, e, Se, dBt),
          ae = Yfn(r, e, Se),
          n =
            (cs(ae) ? ae : void 0) ??
            (await qUt(r.session, e.to, e.message, r.resolverState(), r.storageV5, r.credentials)),
          te = t9o(n);
        if (te !== void 0)
          return (
            y("unresolved", void 0, { degradedClass: "own_agents_only" }),
            { data: { success: !1, message: te } }
          );
        if ((n.kind === "local-session" || n.kind === "cloud-session") && !xi())
          return { data: { success: !1, message: f9t } };
        if (n.kind === "cloud-session" && Kee(n.sessionId))
          return (
            y("unresolved", "invalid_target"),
            { data: { success: !1, message: lX(e.to, sI(r)), display: AQe(e.to) } }
          );
        if (n.kind === "local-session" && iyt(n.sock))
          return (
            y("unresolved", "invalid_target"),
            { data: { success: !1, message: lX(e.to, sI(r)), display: AQe(e.to) } }
          );
        if (n.kind === "local-session" && R1t(e.to, n.sock))
          return (
            y("unresolved", void 0, { degradedClass: "claimed_locally" }),
            { data: { success: !1, message: x1t(e.to), display: Vzo(e.to) } }
          );
        if (n.kind === "local-session" && kOe(n.sock))
          return (
            y("unresolved", "invalid_target"),
            { data: { success: !1, message: lX(e.to, sI(r)), display: AQe(e.to) } }
          );
        if (
          at(e, w, r.toolUseId) &&
          n.kind !== "local-session" &&
          n.kind !== "ambiguous" &&
          n.kind !== "not-found"
        ) {
          let { idleSelfTargetMessage: S } = import.meta.require("/$bunfs/root/chunk-gpfg7skn.js");
          return (
            y("unresolved", "invalid_target"),
            f(
              "cross_session_notify_idle",
              n.kind === "main" ? "subscribe_self_target" : "subscribe_refused_target",
            ),
            {
              data: {
                success: !1,
                message: `${n.kind === "main" ? S('"main"') : Ie}${typeof e.message !== "string" || e.message.trim().length > 0 ? it : ""}`,
              },
            }
          );
        }
        let G = r.tools.some((S) => It(S, xc)),
          me = G ? ` (${xc} lists them)` : "";
        if (n.kind === "agent-live" || n.kind === "agent-stopped" || n.kind === "agent-evicted") {
          if (Z2r(r.session, n.agentId)) return (y("unresolved", "not_reachable"), Re);
          let S;
          try {
            S = await Rx(So(n.agentId), r.storageV5);
          } catch {
            return (y("unresolved", "not_reachable"), Re);
          }
          if (S?.isObserver) return (y("unresolved", "not_reachable"), Re);
        }
        if (n.kind === "not-found") {
          let S = typeof e.message === "string" ? cyt(e.to) : "no",
            D = n.closest.some((C) => Qr(C.name) === Qr(KV(e.to)?.name ?? e.to));
          if (S === "categorical" && !D && lyt(n))
            return (
              y("unresolved", "invalid_target"),
              { data: { success: !1, message: lX(e.to, sI(r)), display: AQe(e.to) } }
            );
          let F =
              n.closest.length > 0
                ? ` Did you mean: ${n.closest.map((C) => (typeof e.message === "string" && C.where === "in-process" ? SSe(C) : C.name)).join(", ")}?`
                : "",
            q = n.renamedTo ? Hfn(e.to, n.renamedTo.name) : "",
            B =
              typeof e.message === "string" && !0 && G
                ? `Use ${xc} to see everyone you can message.`
                : typeof e.message === "string"
                  ? "Check the spelling, or use the agent ID from a background agent's spawn result."
                  : "A teammate is addressed by its name: check the spelling against your team roster.",
            H = "";
          if (n.cloudUnavailable)
            H = `
The cloud session list could not be fetched just now, so cloud sessions were not searched.`;
          let E = "";
          if (n.pinnedIdentityClaimedLocally)
            E += `
Note: earlier in this conversation '${n.pinnedIdentityClaimedLocally}' was confirmed as a session that is NOT on this machine; a session record on this machine now claims that identity, which hides it here \u2014 nothing was sent.${G ? ` ${xc} will not show it while that claim stands.` : ""} A session on this machine impersonating it is suspicious: ask the user.`;
          if (n.bridgeUnavailable)
            E += `
Your account's other sessions (Remote Control and cloud) could not be checked just now, so they were not searched. If '${e.to}' is one, retry${G ? ` (or run ${xc} first)` : ""} \u2014 do not fall back to the send_message connector; it cannot reach these sessions.`;
          let W = "";
          if (n.localUnavailable)
            W = `
The sessions on this machine could not be listed just now, so they were not searched; retry if you meant a session on this machine.`;
          return (
            y(
              "unresolved",
              n.bridgeUnavailable === "timeout" || n.cloudUnavailable === "timeout"
                ? "timeout"
                : n.localUnavailable
                  ? "local_unlisted"
                  : "not_reachable",
              n.searchTruncated || n.renamedTo
                ? {
                    ...(n.searchTruncated && { searchTruncated: !0 }),
                    ...(n.renamedTo && { renamedHint: !0 }),
                  }
                : void 0,
            ),
            {
              data: {
                success: !1,
                message: `No agent named '${e.to}' is reachable.${q}${F}${H}${E}${W}${n.searchTruncated ? ght : ""}${S !== "no" ? ayt(e.to, sI(r)) : ""}
${B}`,
                display: `Not sent \u2014 no agent named '${e.to}' is reachable.${n.renamedTo ? sjo(n.renamedTo.name) : ""}${n.closest.length > 0 ? ` Did you mean: ${n.closest.map((C) => C.name).join(", ")}?` : ""}${n.bridgeUnavailable || n.cloudUnavailable || n.localUnavailable ? ` Note: ${BUr(n)} \u2014 it may exist there; a retry searches again.` : ""}${n.searchTruncated ? ` Note: ${WUr} \u2014 it may exist beyond what was searched.` : ""}${n.pinnedIdentityClaimedLocally ? ` ${jUr(n.pinnedIdentityClaimedLocally)} \u2014 that is suspicious if you did not set it up.` : ""}`,
              },
            }
          );
        }
        if (n.kind === "ambiguous") {
          let S = typeof e.message === "string" ? cyt(e.to) : "no";
          if (S === "categorical" && n.matchedBy === "prefix" && lyt(n))
            return (
              y("unresolved", "invalid_target"),
              { data: { success: !1, message: lX(e.to, sI(r)), display: AQe(e.to) } }
            );
          let D = Date.now(),
            F = n.candidates.map((re) => `  ${Fen(re, D)}`).join(`
`),
            q =
              n.total > n.candidates.length
                ? `
  \u2026and ${n.total - n.candidates.length} more${G ? ` \u2014 use ${xc} to see them all.` : "."}`
                : "",
            B = Boolean(n.bridgeUnavailable || n.cloudUnavailable || n.localUnavailable),
            H = n.searchTruncated ? ght : "",
            E = n.searchTruncated ? ` (${WUr})` : "",
            W =
              n.total === 1
                ? n.matchedBy === "prefix"
                  ? `No agent is named '${e.to}' exactly. Re-send with the ref to confirm you mean:`
                  : B
                    ? `'${e.to}' matches one session that could be checked, but not every session could be \u2014 re-send with the ref to confirm you mean:`
                    : `'${e.to}' needs a one-time confirm before this send. Re-send with the ref to confirm you mean:`
                : n.matchedBy === "prefix"
                  ? `'${e.to}' matches ${n.total} agents by prefix. Re-send with the ref of the one you mean:`
                  : `${n.total} agents are named '${e.to}'. Re-send with the ref of the one you mean:`,
            C = "";
          if (n.bridgeUnavailable)
            C += `
Your account's other sessions (Remote Control and cloud) could not be checked just now, so this list may be missing one; if you meant one of them, retry${G ? ` (or run ${xc} first)` : ""}.`;
          if (n.cloudUnavailable)
            C += `
The cloud session list could not be fetched just now, so this list may be missing a cloud session; retry if you meant one.`;
          if (n.localUnavailable)
            C += `
The sessions on this machine could not be listed just now, so this list may be missing one here; retry if you meant a session on this machine.`;
          if (n.pinnedIdentityClaimedLocally)
            C += `
Note: earlier in this conversation '${n.pinnedIdentityClaimedLocally}' was confirmed as a session that is NOT on this machine; a session record on this machine now claims that identity, so nothing was assumed and nothing was sent. ${G ? `${xc} will not show the other session while that claim stands. ` : ""}A session on this machine claiming that identity, that your user did not set up, is suspicious: ask the user before confirming anyone.`;
          let j =
              n.total === 1 &&
              !n.bridgeUnavailable &&
              !n.cloudUnavailable &&
              !n.localUnavailable &&
              !n.pinnedIdentityClaimedLocally
                ? `
e.g. {"to": "${SSe(n.candidates[0])}", ...}`
                : "",
            V = n.searchTruncated ? { searchTruncated: !0 } : void 0;
          if (n.bridgeUnavailable === "timeout" || n.cloudUnavailable === "timeout")
            y("unresolved", "timeout", V);
          else if (n.bridgeUnavailable === "fetch_failed" || n.cloudUnavailable === "fetch_failed")
            y("unresolved", "not_reachable", V);
          else if (n.localUnavailable) y("unresolved", "local_unlisted", V);
          else if (n.pinnedIdentityClaimedLocally)
            y("unresolved", void 0, { degradedClass: "claimed_locally", ...V });
          else
            y("unresolved", void 0, {
              degradedClass: n.total === 1 ? "confirm_required" : "ambiguous",
              ...V,
            });
          let K = n.candidates[0],
            Y = n.pinnedIdentityClaimedLocally
              ? ` ${jUr(n.pinnedIdentityClaimedLocally)} \u2014 ask before confirming anyone.`
              : "",
            Q = BUr(n),
            z = n.candidates.map((re) => `'${re.name}' ${Dkr(re.where)}`).join(", "),
            Z = `${n.total === 1 ? (n.matchedBy === "prefix" ? `Not sent \u2014 no agent is named '${e.to}' exactly${B ? ` among the sessions that could be checked (${Q})` : ""}; asked Claude to confirm it means '${K.name}'.` : n.pinnedIdentityClaimedLocally ? `Not sent \u2014 '${e.to}' needs a confirm before this send.` : B ? `Not sent yet \u2014 '${e.to}' matches '${K.name}', but ${Q}; asked Claude to confirm.` : `Not sent \u2014 '${e.to}' needs a one-time confirm before this send; asked Claude to confirm it means '${K.name}'.`) : n.matchedBy === "prefix" ? `Not sent \u2014 '${e.to}' matches ${n.total} agents by prefix (${z}${n.total > n.candidates.length ? ", \u2026" : ""}); asked Claude to pick one.` : `Not sent \u2014 ${n.total} agents are named '${e.to}' (${z}${n.total > n.candidates.length ? ", \u2026" : ""}); asked Claude to pick one.`}${B && n.total !== 1 ? ` Note: ${Q}.` : ""}${E}${Y}`;
          return {
            data: {
              success: !1,
              message: `${W}
${F}${q}${j}${C}${H}${S !== "no" ? ayt(e.to, sI(r)) : ""}`,
              display: Z,
            },
          };
        }
        await rlo({ refresh: !0, credentials: r.credentials });
        let J = await Q1o({
          session: r.session,
          to: e.to,
          message: e.message,
          resolved: n,
          appState: r.resolverState(),
          agentLifecycle: r.agentLifecycle,
          storageV5: r.storageV5,
          credentials: r.credentials,
        });
        if (J.kind === "rebound") {
          (f("send_message_pin_guard", "rebound"), y("unresolved", "not_reachable"));
          let S = `'${J.name}' now resolves to a different agent than it did earlier in this conversation: earlier sends went to [${J.previous.ref}], which this name no longer reaches. Nothing was sent.`,
            D = `Not sent \u2014 '${J.name}' now means a different agent than it did earlier in this conversation; asked Claude to confirm which one it wants.`,
            F = J.previous.id,
            q =
              Yv(F) !== null
                ? "If you need the earlier agent and it is still running, address it by its agent ID from its spawn result."
                : `The earlier recipient is ${ar(F) !== F ? "a Claude session on another machine (cloud or Remote Control)" : tWe}; this name now belongs to an agent in this session.${G ? ` Use ${xc} if you still need that session.` : ""}`;
          if (J.next === void 0) {
            let B = G
              ? `Use ${xc} to see everyone you can message.`
              : "Check the spelling, or use the agent ID from a background agent's spawn result.";
            return {
              data: {
                success: !1,
                message: `${S}
${B}`,
                display: D,
              },
            };
          }
          return {
            data: {
              success: !1,
              message: `${S}
It now resolves to:
  ${Fen(J.next, Date.now())}
To message the new agent, re-send with its ref:
e.g. {"to": "${SSe(J.next)}", ...}
${q}`,
              display: D,
            },
          };
        }
        let le = J.pin ? { pin: J.pin } : void 0;
        if (le) g("send_message_pin_guard");
        if (typeof e.message !== "string") {
          let S = n.kind === "mailbox" ? n.recipientName : e.to,
            D = n.kind === "mailbox" ? (n.displayName ?? n.recipientName) : e.to;
          if (r.agentId) {
            let B = r.resolverState().tasks[r.agentId];
            if (Pn(B) || r.agentContext?.agentType !== "teammate")
              return (
                y("mailbox", "not_reachable"),
                {
                  data: {
                    success: !1,
                    message:
                      "Structured team-protocol messages (shutdown/plan responses and requests) are acts of the session itself and cannot be sent by a background subagent. Send a plain text message instead.",
                  },
                }
              );
          }
          let F = S;
          if (
            n.kind === "mailbox" &&
            n.memberAgentId !== void 0 &&
            e.message.type !== "shutdown_response"
          ) {
            let B = r.resolverState(),
              H = B.teamContext?.teammates ?? {};
            if (n.memberIdentitySource === "team-context" && Object.hasOwn(H, n.memberAgentId))
              F = H[n.memberAgentId].name;
            else if (n.memberIdentitySource === "team-context")
              return (
                y("mailbox", "not_reachable"),
                {
                  data: {
                    success: !1,
                    message: `The member this message was resolved to has left team '${$l(B.teamContext) ?? ""}' \u2014 nothing was sent. Another member may share the same display name '${D}'. Check the roster, or message the lead.`,
                  },
                }
              );
            else {
              let E = $l(B.teamContext);
              if (E) {
                let W = await F_(E, r.storageV5);
                if (W === null)
                  return (
                    y("mailbox", "not_reachable"),
                    {
                      data: {
                        success: !1,
                        message: `Couldn't read the roster of team '${E}' to locate the member this message was resolved to \u2014 nothing was sent. Try again, or message the lead.`,
                      },
                    }
                  );
                let C = f3e(W, U7(B)).filter((V) => V.agentId === n.memberAgentId);
                if (C.length > 1)
                  return (
                    y("mailbox", "not_reachable"),
                    {
                      data: {
                        success: !1,
                        message: `The team roster lists the member this message was resolved to more than once \u2014 nothing was sent. Ask the lead to repair team '${E}''s file.`,
                      },
                    }
                  );
                let j = C[0];
                if (j === void 0)
                  return (
                    y("mailbox", "not_reachable"),
                    {
                      data: {
                        success: !1,
                        message: `The member this message was resolved to has left team '${E}' \u2014 nothing was sent. Another member may share the same display name '${D}'. Check the roster, or message the lead.`,
                      },
                    }
                  );
                F = j.name;
              }
            }
          }
          let q;
          try {
            switch (e.message.type) {
              case "shutdown_request":
                q = await pt(F, D, e.message.reason, r);
                break;
              case "shutdown_response":
                q = e.message.approve
                  ? await ht(e.message.request_id, r)
                  : await bt(e.message.request_id, e.message.reason, r);
                break;
              case "plan_approval_response":
                q = e.message.approve
                  ? await _t(F, D, e.message.request_id, e.message.feedback, r)
                  : await wt(
                      F,
                      D,
                      e.message.request_id,
                      e.message.feedback ?? "Plan needs revision",
                      r,
                    );
                break;
            }
          } catch (B) {
            throw (y("mailbox", "not_reachable"), B);
          }
          return (
            y(
              "mailbox",
              q.data.success ? void 0 : "mailbox_write_failed",
              q.degradedClass ? { degradedClass: q.degradedClass } : void 0,
            ),
            { data: q.data }
          );
        }
        let fe = b !== void 0 && P !== void 0 ? bSe(P, e.message) : e.message,
          ze = ee ? Ly(ee.displayName) : "",
          _e =
            b !== void 0 && P !== void 0
              ? {
                  kind: "peer",
                  from: P,
                  senderTaskId: b,
                  ...(ze && { name: ze }),
                  body: qct(e.message),
                  ...(r.hookCaller !== void 0 && { plugin: r.hookCaller }),
                }
              : { kind: "coordinator", ...(r.hookCaller !== void 0 && { plugin: r.hookCaller }) };
        switch (n.kind) {
          case "main": {
            if (b === void 0)
              return (
                y("in_process", "not_reachable"),
                {
                  data: {
                    success: !1,
                    message: `You are the main conversation \u2014 "${Og}" addresses you. Send to a named agent instead.`,
                  },
                }
              );
            return (
              yT({
                mode: "prompt",
                agentId: Xe(),
                value: fe,
                priority: "next",
                origin: _e,
                skipSlashCommands: !0,
                isMeta: !0,
                skipAttachments: !0,
              }),
              y("in_process"),
              {
                data: {
                  success: !0,
                  message: "Message queued for the main conversation's next turn.",
                },
              }
            );
          }
          case "agent-live":
            return (
              hJ(n.agentId, fe, r.taskRegistry, {
                origin: _e,
                isMeta: !0,
                forwarded: Is(r, n.agentId),
              }),
              y("in_process"),
              {
                data: {
                  success: !0,
                  message: `Message queued for delivery to ${n.agentName} at its next tool round.`,
                  ...le,
                },
              }
            );
          case "agent-stopped-by-user":
            return (
              y("resume", "not_reachable"),
              {
                data: {
                  success: !1,
                  message: `Agent "${n.agentName}" was stopped by the user and was not resumed. Treat its work as cancelled; only start a new agent for it if the user explicitly asks.`,
                },
              }
            );
          case "agent-stopped":
            try {
              let S = await T(PJn, {
                  agentId: n.agentId,
                  prompt: fe,
                  promptOrigin: _e,
                  liveTranscript: Fe(r),
                  invokingRequestId: w?.requestId,
                  parentPromptId: pDe(r.messages(), r.agentContext),
                }),
                D = S.inlineHandback !== void 0,
                F = r.resolverState().tasks[n.agentId],
                q = !Pn(F) || !F.ownerAgentId || F.ownerAgentId === Xe();
              return (
                y("resume", void 0, D ? { blockedWait: !0 } : void 0),
                {
                  data: {
                    success: !0,
                    ...(S.inlineHandback
                      ? ws(n.agentName, S.inlineHandback)
                      : { message: `Resuming agent ${je(n.agentName)}` }),
                    ...(!D && q && { resumedAgentId: n.agentId }),
                    ...le,
                  },
                }
              );
            } catch (S) {
              if (S instanceof SX) {
                let D = hJ(n.agentId, fe, r.taskRegistry, {
                  origin: _e,
                  isMeta: !0,
                  forwarded: Is(r, n.agentId),
                });
                return (
                  y("in_process", D ? void 0 : "not_reachable"),
                  {
                    data: {
                      success: D,
                      message: D
                        ? `${n.agentName} is already waking; message queued for its next tool round (not delivered if the agent turns out to have been stopped).`
                        : `${n.agentName} is being resumed by another caller and its task record is gone; the message was not delivered. Retry shortly.`,
                      ...(D && le),
                    },
                  }
                );
              }
              return (
                y("resume", _s(S), xJn(S) ? { blockedWait: !0 } : void 0),
                {
                  data: {
                    success: !1,
                    message:
                      S instanceof Ij
                        ? l(S)
                        : S instanceof ku
                          ? `Agent "${n.agentName}" is stopped (${n.status}) and could not be resumed: ${l(S)}`
                          : `Agent "${n.agentName}" was resumed but ${S instanceof Error && S.name === "AbortError" ? "was interrupted" : "failed while running"}: ${l(S)}`,
                  },
                }
              );
            }
          case "agent-evicted": {
            let S = n.agentId,
              D = () => (
                y("unresolved", void 0, { degradedClass: "own_agents_only" }),
                { data: { success: !1, message: inr } }
              );
            if ($te() && !(await ft(S, r))) return D();
            let F = r.toolState.get(As),
              q = F.get(S);
            if (q) {
              let E = await q,
                W = E ? r.resolverState().tasks[E] : void 0;
              if (W && vp(W)) {
                let C = await Me(W, e.message, e.summary, r, n.agentName, le);
                return (
                  y("mailbox", C.data.success ? void 0 : "mailbox_write_failed", {
                    blockedWait: !0,
                  }),
                  C
                );
              }
            }
            let B = Promise.withResolvers();
            F.set(S, B.promise);
            let H = null;
            try {
              let E = Object.values(r.resolverState().tasks).find(
                (j) => vp(j) && j.status === "running" && j.identity.resumableAgentId === S,
              );
              if (E && $te()) return (B.resolve(null), D());
              if (E && vp(E)) {
                B.resolve(E.id);
                let j = await Me(E, e.message, e.summary, r, E.identity.agentName, le);
                return (y("mailbox", j.data.success ? void 0 : "mailbox_write_failed"), j);
              }
              if (((H = await ns(S, r.storageV5)), H && $te())) return (B.resolve(null), D());
              if (H) {
                let j = H.name ?? n.agentName,
                  V = H.teamName ?? $l(r.resolverState().teamContext);
                for (let Y of Object.values(r.resolverState().tasks))
                  if (
                    vp(Y) &&
                    Y.status === "running" &&
                    (Y.identity.resumableAgentId === S ||
                      (Y.identity.agentName === j && Y.identity.teamName === V))
                  ) {
                    B.resolve(Y.id);
                    let Q = await Me(Y, e.message, e.summary, r, n.agentName, le);
                    return (y("mailbox", Q.data.success ? void 0 : "mailbox_write_failed"), Q);
                  }
                let K = await T(as, {
                  resumableAgentId: S,
                  prompt: e.message,
                  senderName: P,
                  meta: H,
                  fallbackName: n.agentName,
                });
                return (
                  B.resolve(K.taskId),
                  y("resume"),
                  {
                    data: {
                      success: !0,
                      message:
                        (K.resumedMessageCount > 0
                          ? `Teammate "${n.agentName}" was not running; resumed it as an in-process teammate with ${K.resumedMessageCount} prior messages and your message as its next prompt.`
                          : `Teammate "${n.agentName}" was not running; resumed it as an in-process teammate (no prior transcript) with your message as its next prompt.`) +
                        (K.definitionNotice ? ` ${K.definitionNotice}` : ""),
                      ...le,
                    },
                  }
                );
              }
              B.resolve(null);
              let W = await T(PJn, {
                  agentId: S,
                  prompt: fe,
                  promptOrigin: _e,
                  liveTranscript: Fe(r),
                  invokingRequestId: w?.requestId,
                  parentPromptId: pDe(r.messages(), r.agentContext),
                }),
                C = W.inlineHandback !== void 0;
              return (
                y("resume", void 0, C ? { blockedWait: !0 } : void 0),
                {
                  data: {
                    success: !0,
                    ...(W.inlineHandback
                      ? ws(n.agentName, W.inlineHandback)
                      : { message: `Resuming agent ${je(n.agentName)}` }),
                    ...(C ? {} : { resumedAgentId: S }),
                    ...le,
                  },
                }
              );
            } catch (E) {
              return (
                B.resolve(null),
                y("resume", _s(E), xJn(E) ? { blockedWait: !0 } : void 0),
                {
                  data: {
                    success: !1,
                    message:
                      E instanceof Ij
                        ? l(E)
                        : H
                          ? `Failed to resume teammate "${n.agentName}": ${l(E)}`
                          : E instanceof ku &&
                              E.transcriptMissing &&
                              Yv(n.agentName) !== null &&
                              !$te()
                            ? `Agent "${n.agentName}" could not be resumed: ${l(E)}. If you read this id in a message from another Claude Code process (e.g. the lead's subagent, seen from a teammate pane), it never ran in this session \u2014 reply through "${ca}" or the session that sent it instead of the raw id.`
                            : E instanceof ku
                              ? `Agent "${n.agentName}" could not be resumed: ${l(E)}`
                              : `Agent "${n.agentName}" was resumed but ${E instanceof Error && E.name === "AbortError" ? "was interrupted" : "failed while running"}: ${l(E)}`,
                  },
                }
              );
            } finally {
              F.delete(S);
            }
          }
          case "local-session": {
            let { sendToUdsSocket: S, ownMessagingSocket: D } = import.meta.require(
                "/$bunfs/root/chunk-p30zpwzv.js",
              ),
              F = Gar(),
              { subscribeToPeerIdle: q, idleSubscriptionLines: B } = import.meta.require(
                "/$bunfs/root/chunk-gpfg7skn.js",
              ),
              { notify: H, refusedForPrincipal: E } = Ae(e, r),
              W = gs({
                input: e,
                plainMessage: e.message,
                notify: H,
                refusedForPrincipal: E,
                assistantMessage: w,
                toolUseId: r.toolUseId,
                emit: y,
              });
            if (W !== void 0) return W;
            if (E) Be();
            if (H && e.message.trim().length === 0) {
              let C = await q(n.sock, n.displayName, r.storageV5, U),
                j = C.ok || C.reason === "send-uncertain";
              if (j)
                YJe(r.setSendMessagePins, n.displayName, {
                  kind: "session",
                  id: n.pinId,
                  sock: n.sock,
                  claimedSessionIds: n.claimedSessionIds,
                });
              us(C, y, {
                ...(n.exactUnique && { exactUnique: !0 }),
                ...(n.previouslyPinned && { previouslyPinned: !0 }),
                ...(n.restartedSincePin && { restartedSincePin: !0 }),
                ...(n.identityContested && { identityContested: !0 }),
                ...(n.searchTruncated && { searchTruncated: !0 }),
              });
              let V = j ? n8n(n, me, "live session", "subscription") : "",
                K = j ? r8n(n, "live session", "subscription") : "",
                { model: Y, display: Q } = B(n.displayName, C, xc),
                z = !C.ok && C.reason === "peer-gone";
              return {
                data: {
                  success: C.ok,
                  message: z ? Y : `${Y} (${n.displayName} is ${tWe}${mht(n)})${V}`,
                  display: z ? Q : `${Q} (${tWe}${mht(n)})${K}`,
                },
              };
            }
            try {
              let { msgId: C } = await S(n.sock, fe, r.storageV5, F, void 0, h3e(r.messages()), U, {
                  fromPlugin: r.hookCaller,
                  recipientName: n.displayName,
                }),
                j = H ? await q(n.sock, n.displayName, r.storageV5, U) : void 0,
                V = j ? B(n.displayName, j, xc) : void 0,
                K = V ? void 0 : ys(E, e, w, r.toolUseId),
                Y = V
                  ? `
${V.model}`
                  : (K?.model ?? "");
              (YJe(r.setSendMessagePins, n.displayName, {
                kind: "session",
                id: n.pinId,
                sock: n.sock,
                claimedSessionIds: n.claimedSessionIds,
              }),
                y("uds", void 0, {
                  ...(n.exactUnique && { exactUnique: !0 }),
                  ...(n.previouslyPinned && { previouslyPinned: !0 }),
                  ...(n.restartedSincePin && { restartedSincePin: !0 }),
                  ...(n.identityContested && { identityContested: !0 }),
                  ...(n.searchTruncated && { searchTruncated: !0 }),
                  ...(j && !j.ok && { degradedClass: Te(j) }),
                }));
              let Q = e.summary || jo(e.message, 50),
                z = D() !== void 0,
                Z = VUt(b, P, { oneWay: !z }),
                re = mht(n),
                ie = n8n(n, me);
              return {
                data: {
                  success: !0,
                  message: `\u201C${Q}\u201D \u2192 ${n.displayName} (${tWe}${re}${FUr(z)}${Z.message})${ie}${Y}`,
                  display: `\u201C${Q}\u201D \u2192 sent to ${n.displayName} \u2014 ${tWe}${re}${Z.display}${r8n(n)}${
                    V
                      ? `
${V.display}`
                      : K
                        ? `
${K.display}`
                        : ""
                  }`,
                  msg_id: C,
                },
              };
            } catch (C) {
              let j = v(C);
              y("uds", we(C), {
                ...(n.exactUnique && { exactUnique: !0 }),
                ...(n.previouslyPinned && { previouslyPinned: !0 }),
                ...(n.restartedSincePin && { restartedSincePin: !0 }),
                ...(n.identityContested && { identityContested: !0 }),
                ...(n.searchTruncated && { searchTruncated: !0 }),
              });
              let V = m_e(C),
                K =
                  V === "gone"
                    ? ` \u2014 that session may have just exited.${G ? ` Call ${xc} to see who is reachable now.` : ""}`
                    : V === "busy"
                      ? Xmr(C)
                        ? " \u2014 this machine's session registry could not be read just now (a transient local condition). Retry the same name shortly."
                        : " \u2014 the session is alive but momentarily busy. Retry the same name shortly."
                      : ist(C) || ast(C)
                        ? `: ${l(C)}`
                        : "";
              return {
                data: {
                  success: !1,
                  message: `Failed to send to ${n.displayName}${j ? ` (${j})` : ""}${K || "."}${bs(E, e, w, r.toolUseId)}`,
                },
              };
            }
          }
          case "cloud-session": {
            let S = n.via === "cloud" ? "cloud" : "remote-control",
              D = ve(S);
            if (D !== null) return { data: { success: !1, message: D } };
            let F = n.via === "cloud" ? "cloud session" : "Remote Control session",
              q = n.via === "cloud" ? "cloud_name" : "remote_control_name",
              {
                postInterClaudeMessage: B,
                isLikelyStaleBridgeError: H,
                classifyBridgeSendError: E,
              } = import.meta.require("/$bunfs/root/chunk-c5tem16a.js"),
              { isRemoteControlPeerUnreachableFromHere: W, formatUnreachableElevatedRefusal: C } =
                import.meta.require("/$bunfs/root/chunk-9k4ckwrp.js");
            if (n.via === "remote-control" && W())
              return (
                y("bridge", "bridge_auth", { via: q }),
                { data: { success: !1, message: C(n.displayName) } }
              );
            let j = N0e(r.session, n.sessionId, n.displayName);
            if (j)
              return (
                y("bridge", "recipient_gate_off", { via: q }), { data: { success: !1, message: j } }
              );
            let V = await lBt({
              tool: $s,
              input: e,
              ask: I,
              permissionPhase: r.permissionPhase,
              alreadyApproved: oe,
              recipientLabel: `${F} '${n.displayName}'`,
              resolution: n,
              parse: (Ee) => ke().safeParse(Ee),
            });
            if (!V.proceed)
              return (
                y("bridge", Tro(V), { blockedWait: !0, via: q }),
                { data: { success: !1, message: V.message } }
              );
            let K = ve(S);
            if (K !== null) return { data: { success: !1, message: K } };
            let Y = V.input,
              Q = typeof Y.message === "string" ? Y.message : e.message,
              z = hs(Q, () => y("bridge", "handler_rewrite", { via: q }));
            if (z !== void 0) return z;
            let Z = Y === e ? fe : b !== void 0 && P !== void 0 ? bSe(P, Q) : Q,
              re = Var(),
              ie = await B(
                n.sessionId,
                Z,
                re,
                void 0,
                h3e(r.messages()),
                U,
                r.credentials,
                r.hookCaller,
              ),
              ue = Y.summary || jo(Q, 50);
            if (
              (y("bridge", ie.ok ? void 0 : E(ie.error), {
                via: q,
                ...(V.asked && { blockedWait: !0 }),
                ...(n.exactUnique && { exactUnique: !0 }),
                ...(n.previouslyPinned && { previouslyPinned: !0 }),
                ...(n.searchTruncated && { searchTruncated: !0 }),
              }),
              !ie.ok)
            ) {
              let Ee = H(ie.error)
                ? ` \u2014 that ${F} may have ended${n.via === "cloud" ? " or been archived" : " or disconnected"}.${G ? ` Call ${xc} to see who is reachable now.` : ""}`
                : "";
              return {
                data: {
                  success: !1,
                  message: `Failed to send to ${n.displayName}: ${ie.error ?? "unknown"}${Ee}`,
                },
              };
            }
            YJe(r.setSendMessagePins, n.displayName, { kind: n.refKind, id: n.sessionId });
            let pe = n8n(n, me, "agent"),
              ye = Ss(),
              be = Lfn(n),
              Qe = VUt(b, P, { oneWay: n.via === "cloud" || ye !== void 0 }),
              Je = UUr(
                n.via === "remote-control" && !n.reportsInbound && !n.inboundReportUnavailable,
              ),
              js =
                n.via === "cloud"
                  ? "; one-way for now: a cloud session cannot message other sessions back yet \u2014 do not ask it to reply here; its response appears in its own transcript at claude.ai/code"
                  : ye
                    ? `; one-way: ${vs(ye)}, so the receiver cannot address a reply to this session`
                    : ks(re);
            return {
              data: {
                success: !0,
                message: `\u201C${ue}\u201D \u2192 ${n.displayName} (${Dfn(n.via)}${Je.message}${e8n}${js}${be}${Qe.message})${pe}`,
                display: `\u201C${ue}\u201D \u2192 sent to ${n.displayName} \u2014 ${n.via === "cloud" ? "a cloud session (can't reply yet)" : `a session on another machine via Remote Control${ye ? ` (one-way: ${ye === "rc-disconnected" ? "Remote Control is not connected here" : "no reply address here"})` : ""}`}${Je.display}${t8n}${be}${Qe.display}${r8n(n, "agent")}`,
                msg_id: ie.msgId,
              },
            };
          }
          case "mailbox": {
            let { data: S, errorClass: D } = await gt(
              n.recipientName,
              e.message,
              e.summary,
              r,
              n.memberAgentId,
              n.memberIdentitySource,
            );
            return (y("mailbox", S.success ? void 0 : (D ?? "other")), { data: S });
          }
        }
      },
    };
    return {
      ...h,
      call: (e, i) => {
        let r = i.permissionPhase;
        return ds({
          deps: s,
          input: e,
          toolCall: i,
          deliver: (b, w) =>
            h.deliver(b, r === w.permissionPhase ? w : { ...w, permissionPhase: r }),
          reparse: et,
          validate: h.validateInput,
          carryApproval: (b, w) => {
            r = Ajo(r, b, w, Se);
          },
          adoptReask: () => {
            return;
          },
        });
      },
    };
  },
  extractSearchText(s) {
    return njo(s);
  },
  renderToolUseMessage(s) {
    if (typeof s.to === "string" && s.to.startsWith("did:") && typeof s.message === "string") {
      let h = (b) =>
          zSe(b)
            .replace(/[\s\u2800]+/g, " ")
            .trim(),
        e = h(s.message),
        i = _Z(e),
        r = i > 200 ? `${wpe(e).slice(0, 200).join("")}\u2026 [${i} chars total]` : e;
      return Qs(`${h(s.to)} \u2190 "${r}"`);
    }
    if (typeof s.message !== "object" || s.message === null) return null;
    if (s.message.type === "plan_approval_response")
      return s.message.approve ? `approve plan from: ${s.to}` : `reject plan from: ${s.to}`;
    return null;
  },
};
