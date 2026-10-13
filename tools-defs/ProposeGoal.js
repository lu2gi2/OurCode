// ProposeGoal tool definition — chunk-wygp9s4p.js [6902, 11115)
export const ProposeGoalTool = {
  name: tMn,
  backgrounding: "never",
  maxResultSizeChars: 1000,
  searchHint: "propose a session goal condition for the user to approve with one keypress",
  get inputSchema() {
    return O();
  },
  get outputSchema() {
    return T();
  },
  shouldDefer: !0,
  isEnabled() {
    if (Ee() || jn()) return !1;
    if (Nt()) return !1;
    if (!K_n()) return !1;
    let e = Bdt();
    if (e === "disabled") return !1;
    return (P(e), !0);
  },
  isConcurrencySafe() {
    return !1;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return `ask_user=${e.ask_user !== !1}: ${e.condition ?? ""}`;
  },
  async description() {
    return Ics;
  },
  async prompt() {
    return Ocs;
  },
  renderToolUseMessage(e) {
    if (!e.condition) return "";
    return `Propose goal: ${oOe(nWe(e.condition), 200)}`;
  },
  create(e) {
    return {
      async call({ condition: n, ask_user: y }) {
        if (e.agentId) throw Error("ProposeGoal cannot be used in agent contexts");
        if (Ee() || jn() || Nt())
          throw (
            f("goal_propose", "session_shape"),
            Error("Goal proposals are only available in interactive local sessions.")
          );
        let t = zSe(nWe(n)).trim();
        if (t === "")
          throw Error(
            "The goal condition is empty once whitespace and invisible characters are removed. Provide a visible condition.",
          );
        if (t.length > nMn)
          throw new x(
            `The goal condition exceeds ${nMn} characters once canonicalized for display (tabs expand to spaces). Shorten the condition \u2014 the user must be able to read all of it in the approval dialog.`,
            "goal condition exceeds the canonicalized-length cap",
          );
        if (vit(t))
          throw Error(
            "ProposeGoal only proposes a new goal; it cannot clear one. The user can clear an active goal with /goal clear.",
          );
        let s = NXt();
        if (s !== null)
          throw (f("goal_propose", s.code), new x(s.message, "goal evaluator blocked"));
        if (e.permissions().mode === "plan")
          throw (
            f("goal_propose", "plan_mode"),
            Error(
              "Plan mode is active, so a goal cannot be proposed yet. Keep planning; propose the goal after the plan is approved.",
            )
          );
        let _ = await Avo(e.storageV5);
        if (_ === "disabled")
          throw (
            f("goal_propose", "setting_disabled"),
            Error(
              "The user has disabled model-proposed goals in their settings. Do not propose goals; the user can set one themselves with /goal.",
            )
          );
        let l = _ === "alwaysAsk" || y !== !1,
          { messageQueue: S, requestDialog: k } = e;
        if (k === void 0)
          throw Error(
            "Goal proposals need an interactive session to render the approval prompt; none is available here.",
          );
        if (e.toolState.get(X_t).id)
          throw Error(
            "A goal proposal is already awaiting the user's decision. Keep working; if it is approved you will receive a kickoff message.",
          );
        if (
          (i("tengu_goal_proposed", {
            promptLength: t.length,
            askUser: l,
            forcedAsk: l && y === !1,
          }),
          g("goal_propose"),
          !l)
        )
          return (
            e.recordQueuedGoalOrigin(t, "proposal_direct"),
            S.enqueue({
              agentId: Xe(),
              mode: "prompt",
              value: `/goal ${t}`,
              origin: { kind: "task-notification" },
            }),
            { data: { condition: t, askUser: !1 } }
          );
        let r = e.toolState.get(X_t),
          m = I();
        return (
          (r.id = m),
          k(pte, { condition: t }, { place: "under" })
            .then((a) => {
              let h = r.id !== m,
                v = Bdt() === "disabled",
                w = e.permissions().mode === "plan";
              if (
                (i("tengu_goal_proposal_decided", {
                  decision: a.approved
                    ? h
                      ? b("approved_stale")
                      : v
                        ? b("approved_disabled")
                        : w
                          ? b("approved_plan_mode")
                          : b("approved")
                    : a.explicit === !0
                      ? b("declined")
                      : b("unanswered"),
                }),
                !a.approved || h || v || w)
              ) {
                if (a.approved && !h) {
                  if (v) f("goal_propose", "approved_dropped_disabled");
                  else if (w) f("goal_propose", "approved_dropped_plan_mode");
                }
                return;
              }
              (e.recordQueuedGoalOrigin(t, "proposal_approved"),
                S.enqueue({
                  agentId: Xe(),
                  mode: "prompt",
                  value: `/goal ${t}`,
                  origin: { kind: "auto-continuation" },
                }));
            })
            .catch((a) => {
              c(a);
            })
            .finally(() => {
              if (r.id === m) r.clear();
            }),
          { data: { condition: t, askUser: !0 } }
        );
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, n) {
    return {
      tool_use_id: n,
      type: "tool_result",
      content:
        e.askUser === !1
          ? "Setting the goal now, without an approval dialog \u2014 the user sees it being set and can clear it with /goal clear. It becomes active at the end of this turn, when you will receive a kickoff message confirming it; until that message arrives, any previously set goal remains in effect. Continue working \u2014 do not wait for the kickoff."
          : "Shown the goal proposal to the user for approval. Continue working \u2014 do not wait for their decision. If they approve, the proposed goal is set and you will receive a kickoff message; until then, no new goal is active \u2014 any previously set goal remains in effect. If they decline you will not be notified \u2014 do not ask about the decision or re-propose the same condition.",
    };
  },
};
