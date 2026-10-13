// AskUserQuestion tool definition — chunk-v55arm1d.js [12903, 19622)
export const AskUserQuestionTool = {
  name: Jo,
  searchHint: "prompt the user with a multiple-choice question",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return Tps;
  },
  async prompt({ model: e, leanPrompt: t, tools: n }) {
    let r = Bnr(n) ? Iao : Cps,
      s = "";
    if (qx({ model: e, leanPrompt: t })) {
      let w = k("tengu_cinder_plover", "").trim();
      s = w
        ? `
${w}
`
        : xps;
    }
    let a = k("tengu_cinder_wren", ""),
      h = typeof a === "string" ? a.trim() : "",
      c = h
        ? `
${h}
`
        : "",
      m = _we() ? Rps : "",
      l = Gxr();
    if (l === void 0) return r + s + c + m;
    return r + s + c + m + Aps[l];
  },
  get inputSchema() {
    if (_we()) return be();
    return dPo() ? ge() : ye();
  },
  get outputSchema() {
    return ke();
  },
  userFacingName() {
    return "";
  },
  validationErrorSteer(e) {
    if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
    let t = e.questions;
    if (!Array.isArray(t)) return null;
    let n = !1,
      r = t.length;
    if (!Number.isInteger(r) || r < 0 || r > L) return null;
    for (let s = 0; s < r && s < D; s++) {
      let a = t[s];
      if (typeof a !== "object" || a === null || Array.isArray(a)) continue;
      if (_we()) {
        let c = a.kind;
        if (c === "text" || c === "number") continue;
      }
      let h = a.options;
      if (Array.isArray(h) && h.length < 2) {
        n = !0;
        break;
      }
    }
    if (!n) return null;
    if (_we())
      return 'This call included a choice question with fewer than 2 options, so it was rejected and the person never saw it. If that question is open-ended, re-ask it with "kind": "text" and no options; if there is really only one path, state it as the approach you are taking and continue with the task. Do not invent a filler second option.';
    return "This call included a question with fewer than 2 options, so it was rejected and the person never saw it. A question with a single option has no decision in it. Do not retry this call and do not invent a filler second option. Instead, state the one path you were going to offer as the approach you are taking, then continue with the task. If this call also contained questions with 2 to 4 options (each with distinct labels), you may re-ask those questions alone in a new call. Ask a question only when the person has at least two genuinely distinct choices.";
  },
  isEnabled() {
    return DK();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    let t = Pao,
      n = _we();
    try {
      let r = typeof e === "object" && e !== null ? e.questions : void 0;
      if (!Array.isArray(r)) return "[malformed AskUserQuestion input]";
      let s = [],
        a = r.length;
      if (!Number.isInteger(a) || a < 0 || a > L) return "[malformed AskUserQuestion input]";
      for (let c = 0; c < a; c++) {
        if (s.length >= D) {
          s.push(`[\u2026 further question entries elided: reported length ${a}]`);
          break;
        }
        let m = r[c];
        if (typeof m !== "object" || m === null) {
          let g = t(m);
          s.push(g ? `[malformed question entry] ${g}` : "[malformed question entry]");
          continue;
        }
        let l = m.options,
          w = [];
        if (Array.isArray(l)) {
          let g = l.length;
          for (let y = 0; y < g; y++) {
            if (w.length >= D) {
              w.push("[\u2026 further option entries elided]");
              break;
            }
            let A = l[y];
            if (typeof A !== "object" || A === null) {
              w.push(`(${y + 1}) "${t(A)}"`);
              continue;
            }
            let b = A,
              q = [`(${y + 1}) "${t(b.label)}"`],
              C = t(b.description);
            if (C) q.push(`\u2014 ${C}`);
            let j = t(b.preview);
            if (j) q.push(`[preview: ${j}]`);
            w.push(q.join(" "));
          }
        }
        let x = w.join(" "),
          v = m.multiSelect === !0 ? " [multiSelect]" : "",
          f = t(m.header),
          R = f ? ` [header: ${f}]` : "",
          O = "";
        if (n) {
          let g = m;
          for (let [y, A] of [
            ["kind", t(g.kind)],
            ["description", t(g.description)],
            ["placeholder", t(g.placeholder)],
            ["min", pDn(g.min)],
            ["max", pDn(g.max)],
            ["step", pDn(g.step)],
            ["default", pDn(g.defaultValue)],
            ["unit", t(g.unit)],
          ])
            if (A) O += ` [${y}: ${A}]`;
        }
        s.push(`"${t(m.question)}"${R}${O}${v} options: ${x}`);
      }
      if (s.length === 0) return "[malformed AskUserQuestion input]";
      let h = n ? t(e.title) : "";
      return (h ? `[title: ${h}] ` : "") + s.join(" | ");
    } catch {
      return "[malformed AskUserQuestion input]";
    }
  },
  admitCardAnswer: V,
  shownCardInput: K,
  requiresUserInteraction() {
    return !0;
  },
  renderToolUseMessage() {
    return null;
  },
  create() {
    return {
      async validateInput({ questions: e }) {
        if (Gxr() !== "html") return { result: !0 };
        for (let t of e)
          for (let n of t.options) {
            let r = Ae(n.preview);
            if (r)
              return {
                result: !1,
                message: `Option "${n.label}" in question "${t.question}": ${r}`,
                errorCode: 1,
              };
          }
        return { result: !0 };
      },
      async checkPermissions(e) {
        return { behavior: "ask", message: "Answer questions?", updatedInput: K(e) };
      },
      async call(e) {
        let { answers: t = {}, annotations: n } = e,
          s = e.questions.map((l) => (Array.isArray(l.options) ? l : { ...l, options: [] })),
          { response: a, afkTimeoutMs: h, followUp: c } = e,
          m = F(s, ({ question: l }) => {
            let w = t[l];
            return Array.isArray(w) ? w.length > 0 : typeof w === "string" && w !== "" && w !== YBt;
          });
        return (
          i("tengu_ask_user_question_completed", {
            extended: _we(),
            questionCount: s.length,
            choiceCount: F(s, (l) => (l.kind ?? "choice") === "choice" && !l.multiSelect),
            multiSelectCount: F(s, (l) => (l.kind ?? "choice") === "choice" && l.multiSelect),
            textCount: F(s, (l) => l.kind === "text"),
            numberCount: F(s, (l) => l.kind === "number"),
            answerCount: m,
            followUp: c === !0,
            outcome: d(
              h
                ? "afk_timeout"
                : c
                  ? "follow_up"
                  : a?.trim()
                    ? "responded"
                    : m > 0
                      ? "answered"
                      : "unanswered",
            ),
            ...(e.metadata?.source && { source_hash: ln(e.metadata.source) }),
          }),
          {
            data: {
              questions: s,
              answers: t,
              ...(a?.trim() && { response: a }),
              ...(n && { annotations: n }),
              ...(h && { afkTimeoutMs: h }),
              ...(c === !0 && { followUp: !0 }),
            },
          }
        );
      },
    };
  },
  mapToolResultToToolResultBlockParam(
    { questions: e, answers: t, response: n, annotations: r, afkTimeoutMs: s, followUp: a },
    h,
  ) {
    let c = e
        .map(({ question: l }) => {
          let w = t[l],
            x = r?.[l],
            v = w && w !== YBt;
          if (!v && !x?.notes) return null;
          let f = [v ? `"${l}"="${w}"` : `"${l}"=(no option selected)`];
          if (x?.preview)
            f.push(`selected preview:
${x.preview}`);
          if (x?.notes) f.push(`notes: ${x.notes}`);
          return f.join(" ");
        })
        .filter((l) => l !== null)
        .join(", "),
      m;
    if (s)
      m = c
        ? `${W(s)}

Before going idle the user had selected: ${c}.`
        : W(s);
    else if (a) {
      let l = n?.trim() ? ` They also wrote: "${n}".` : "";
      m = c
        ? `${yCt} before you proceed. So far they answered: ${c}.${l} Call ${Jo} again with follow-up questions that build on these answers (do not repeat these); do not start the task yet.`
        : `${yCt} before answering.${l} Call ${Jo} again now with further questions about this decision (do not repeat these); do not proceed with the task yet.`;
    } else if (n?.trim()) m = `The user responded: ${n}`;
    else if (c)
      m = e.every(({ question: w, options: x, multiSelect: v, kind: f, min: R, max: O }) => {
        if (r?.[w]?.notes) return !1;
        if (f === "text" || f === "number") {
          let q = t[w];
          if (q === void 0 || q === "") return !0;
          if (f === "text" || typeof q !== "string") return !1;
          let C = q.trim(),
            j = Number(C);
          return (
            /^-?\d+(\.\d+)?$/.test(C) &&
            Number.isFinite(j) &&
            (R === void 0 || j >= R) &&
            (O === void 0 || j <= O)
          );
        }
        let y = t[w],
          A = new Set(x.map((q) => q.label));
        if (Array.isArray(y)) return v && y.length > 0 && y.every((q) => A.has(q));
        if (!y || y === YBt) return !0;
        if (A.has(y)) return !0;
        if (!v) return !1;
        let b = H(y);
        return b !== null && b.length >= 1 && Lht(b) === y && b.every((q) => A.has(q));
      })
        ? `Your questions have been answered: ${c}. You can now continue with these answers in mind.`
        : `The user answered: ${c}. Read the answers carefully \u2014 they may request clarification, changes, or that you not proceed \u2014 and follow what they actually say.`;
    else m = "The user did not answer the questions.";
    return { type: "tool_result", content: m, tool_use_id: h };
  },
};
