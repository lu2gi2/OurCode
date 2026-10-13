import { Gxr, _we, dPo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { k, k_o } from "/$bunfs/root/chunk-0ycjphb5.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { pH } from "/$bunfs/root/chunk-k3tkc302.js";
import { Kt } from "/$bunfs/root/chunk-4r6b8efh.js";
import { qx } from "/$bunfs/root/chunk-e0hrcpx7.js";
import { QD, Lat } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { Jo, Eps, yCt, Pao, pDn, Tps, Aps, Iao, Cps, Rps, xps } from "/$bunfs/root/chunk-62g69mqc.js";
import { DK, SHe, Bnr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
import { o, E, M, T, u, De, ue, U, pa } from "/$bunfs/root/chunk-smx21d0k.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
function Lht(e) {
    return e.map((t)=>{
        if (t.includes(", ") || t.includes('"')) {
            return _(t);
        }
        return t;
    }).join(", ");
}
function H(e) {
    let t = [];
    let n = e;
    while(true){
        if (n.startsWith('"')) {
            let r = -1;
            let s = false;
            for(let a = 1; a < n.length; a++){
                let h = n[a];
                if (s) {
                    s = false;
                    continue;
                }
                if (h === "\\") {
                    s = true;
                    continue;
                }
                if (h === '"') {
                    r = a;
                    break;
                }
            }
            if (r === -1) {
                return null;
            }
            try {
                let a = JSON.parse(n.slice(0, r + 1));
                if (typeof a !== "string") {
                    return null;
                }
                t.push(a);
            } catch  {
                return null;
            }
            n = n.slice(r + 1);
        } else {
            let r = n.indexOf(", ");
            let s = r === -1 ? n : n.slice(0, r);
            if (s.includes('"')) {
                return null;
            }
            t.push(s);
            n = r === -1 ? "" : n.slice(r);
        }
        if (n === "") {
            break;
        }
        if (!n.startsWith(", ")) {
            return null;
        }
        n = n.slice(2);
        if (n === "") {
            return null;
        }
    }
    return t;
}
const P = 8192;
const te = 8192;
const ne = 32768;
const oe = 2000;
const se = pH - oe;
const ie = 2000;
const re = new Set([
    "answers",
    "annotations",
    "response",
    "followUp"
]);
const ae = "afkTimeoutMs";
function admitCardAnswer(e, t) {
    try {
        return le(e, t);
    } catch  {
        return S("threw");
    }
}
function le(e, t) {
    if (!z(t)) {
        return S("not_an_object");
    }
    for (let f of Object.keys(t)){
        if (f === ae) {
            return S("host_field");
        }
        if (re.has(f)) {
            if (Object.hasOwn(e, f)) {
                return S("changed_shown_field");
            }
            continue;
        }
        if (!Object.hasOwn(e, f)) {
            return S("unknown_field");
        }
        if (!SHe(t[f], e[f]) && !(f === "questions" && !Object.hasOwn(e, "title") && de(t[f], e[f]))) {
            return S("changed_shown_field");
        }
    }
    let { questions, extended } = ce(I(e, "questions"));
    let s = 0;
    let a = 0;
    let h = new Set;
    let input = {
        ...e
    };
    let m = Object.create(null);
    let l = I(t, "answers");
    if (l !== undefined) {
        if (!z(l)) {
            return S("answers");
        }
        for (let f of Object.keys(l)){
            let R = questions.get(f);
            if (R === undefined) {
                return S("answers");
            }
            h.add(f);
            let O = l[f];
            if (typeof O === "string") {
                if (O.length > P) {
                    return S("answers");
                }
                s += O.length;
                m[f] = O;
                continue;
            }
            if (!R.multiSelect || !Array.isArray(O) || O.length > R.optionCount + 1) {
                return S("answers");
            }
            let g = [];
            for (const b of O){
                if (typeof b !== "string" || b.length > P) {
                    return S("answers");
                }
                g.push(b);
            }
            let y = Lht(g);
            s += y.length;
            m[f] = y;
        }
    }
    if (!Object.hasOwn(e, "answers")) {
        input.answers = m;
    }
    let w = I(t, "annotations");
    if (w !== undefined) {
        if (!z(w)) {
            return S("annotations");
        }
        let f = Object.create(null);
        for (let R of Object.keys(w)){
            let O = questions.get(R);
            let g = w[R];
            if (O === undefined || !z(g)) {
                return S("annotations");
            }
            h.add(R);
            let y = {};
            for (let A of Object.keys(g)){
                let b = g[A];
                switch(A){
                    case "preview":
                        if (typeof b !== "string" || !pe(O, b)) {
                            return S("annotations");
                        }
                        a += b.length;
                        y.preview = b;
                        break;
                    case "notes":
                        if (typeof b !== "string" || b.length > te) {
                            return S("annotations");
                        }
                        s += b.length;
                        y.notes = b;
                        break;
                    default:
                        return S("annotations");
                }
            }
            f[R] = y;
        }
        input.annotations = f;
    }
    let x = I(t, "response");
    if (x !== undefined) {
        if (typeof x !== "string" || x.length > P) {
            return S("response");
        }
        s += x.length;
        input.response = x;
    }
    let v = I(t, "followUp");
    if (v !== undefined) {
        if (typeof v !== "boolean" || !extended) {
            return S("follow_up");
        }
        input.followUp = v;
    }
    for (let f of h){
        a += f.length;
    }
    if (s > ne || s + a > se) {
        return S("too_large");
    }
    return {
        kind: "admitted",
        input
    };
}
function ce(e) {
    let t = new Map;
    if (!Array.isArray(e)) {
        return {
            questions: t,
            extended: false
        };
    }
    let extended = e.length > 0;
    for (let r of e){
        if (!z(r)) {
            extended = false;
            continue;
        }
        if (typeof I(r, "kind") !== "string") {
            extended = false;
        }
        let s = I(r, "question");
        if (typeof s !== "string") {
            continue;
        }
        let a = I(r, "options");
        let h = Array.isArray(a) ? a : [];
        let previews = new Set;
        for (let m of h){
            let l = z(m) ? I(m, "preview") : undefined;
            if (typeof l === "string") {
                previews.add(l);
            }
        }
        t.set(s, {
            multiSelect: I(r, "multiSelect") === true,
            optionCount: h.length,
            previews
        });
    }
    return {
        questions: t,
        extended
    };
}
function de(e, t) {
    if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) {
        return false;
    }
    let n = t.map((r, s)=>{
        let a = e[s];
        if (!z(r) || I(r, "kind") !== "choice" || !z(a) || Object.hasOwn(a, "kind")) {
            return r;
        }
        let { kind, ...rest } = r;
        return rest;
    });
    return SHe(e, n);
}
function pe(e, t) {
    if (e.previews.has(t)) {
        return true;
    }
    for (let n of e.previews){
        if (n.length <= ie && Lat(n) === t && !QD(n)) {
            return true;
        }
    }
    return false;
}
function z(e) {
    if (typeof e !== "object" || e === null || Array.isArray(e)) {
        return false;
    }
    let t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null;
}
function I(e, t) {
    if (Object.hasOwn(e, t)) {
        return e[t];
    }
}
function S(rule) {
    return {
        kind: "refused",
        rule
    };
}
const X = p(()=>u({
        label: o().describe("The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice."),
        description: o().describe("Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications."),
        preview: o().optional().describe("Optional preview content rendered when this option is focused. Use for mockups, code snippets, or visual comparisons that help users compare options. See the tool description for the expected content format.")
    }));
const Y = p(()=>X().extend({
        description: o().optional().describe("Optional: add only when the label alone would be ambiguous. One short line on what choosing it leads to.")
    }));
function B(e) {
    return u({
        question: o().describe('The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"'),
        header: o().describe(`Very short label displayed as a chip/tag (max ${Eps} chars). Examples: "Auth method", "Library", "Approach".`),
        options: T(e).min(2).max(4).describe(k_o() ? "The available choices for this question. Must have 2-4 options (this cap applies to multiSelect too — group or split if you have more). Each option should be a distinct choice; mutually exclusive unless multiSelect is enabled. There should be no 'Other' option, that will be provided automatically." : "The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically."),
        multiSelect: M().default(false).describe("Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive.")
    });
}
const N = p(()=>B(X()));
const fe = p(()=>B(Y()));
const he = [
    "choice",
    "text",
    "number"
];
const G = p(()=>u({
        question: N().shape.question,
        header: N().shape.header,
        kind: U(he).optional().describe('How the user answers. "choice" (the default when omitted): picks from options. "text": a free-text box, no options — for open-ended input. "number": a slider/stepper between min and max — for quantities.'),
        description: o().optional().describe("Optional single helper line shown under the question."),
        options: T(Y()).max(4).default(()=>[]).describe(`Choices for a "choice" question: 2-4 distinct options; with multiSelect false they must be mutually exclusive. Omit for "text" and "number" questions. There should be no 'Other' or 'Skip' option; the form lets the user type their own answer or leave a question unanswered.`),
        multiSelect: N().shape.multiSelect,
        placeholder: o().optional().describe('"text" questions only: placeholder for the empty text box.'),
        min: E().optional().describe('"number" questions only (required there): lowest value.'),
        max: E().optional().describe('"number" questions only (required there): highest value.'),
        step: E().positive().optional().describe('"number" questions only: increment between values.'),
        defaultValue: E().optional().describe('"number" questions only: the value the control starts at (within min..max).'),
        unit: o().optional().describe('"number" questions only: short unit shown next to the value, e.g. "px", "slides", "%".')
    }));
const me = p(()=>G().superRefine((e, t)=>{
        let n = e.kind ?? "choice";
        for (let [h, c] of [
            [
                "placeholder",
                "text"
            ],
            [
                "min",
                "number"
            ],
            [
                "max",
                "number"
            ],
            [
                "step",
                "number"
            ],
            [
                "defaultValue",
                "number"
            ],
            [
                "unit",
                "number"
            ]
        ]){
            if (n !== c && e[h] !== undefined) {
                t.addIssue({
                    code: "custom",
                    path: [
                        h
                    ],
                    message: `${h} applies only to "${c}" questions.`
                });
            }
        }
        if (n === "choice") {
            if (e.options.length < 2) {
                t.addIssue({
                    code: "custom",
                    path: [
                        "options"
                    ],
                    message: 'A choice question needs 2-4 options; use kind "text" for an open-ended question.'
                });
            }
            return;
        }
        if (e.options.length > 0) {
            t.addIssue({
                code: "custom",
                path: [
                    "options"
                ],
                message: `A "${n}" question takes no options; remove them or omit kind to ask a choice question.`
            });
        }
        if (e.multiSelect) {
            t.addIssue({
                code: "custom",
                path: [
                    "multiSelect"
                ],
                message: `multiSelect applies only to choice questions, not "${n}".`
            });
        }
        if (n !== "number") {
            return;
        }
        let { min, max } = e;
        if (min === undefined || max === undefined || !(min < max)) {
            t.addIssue({
                code: "custom",
                path: [
                    "min"
                ],
                message: "A number question needs numeric min and max with min < max."
            });
            return;
        }
        let { defaultValue } = e;
        if (defaultValue !== undefined && (defaultValue < min || defaultValue > max)) {
            t.addIssue({
                code: "custom",
                path: [
                    "defaultValue"
                ],
                message: "defaultValue must lie within min..max."
            });
        }
    }));
const J = p(()=>{
    let e = u({
        preview: o().optional().describe("The preview content of the selected option, if the question used previews."),
        notes: o().optional().describe("Free-text notes the user added to their selection.")
    });
    return ue(o(), e).optional().describe("Optional per-question annotations from the user (e.g., notes on preview selections). Keyed by question text.");
});
const Q = {
    check: (e)=>{
        let t = e.questions.map((n)=>n.question);
        if (t.length !== new Set(t).size) {
            return false;
        }
        for (let n of e.questions){
            let r = n.options.map((s)=>s.label);
            if (r.length !== new Set(r).size) {
                return false;
            }
        }
        return true;
    },
    message: "Question texts must be unique, option labels must be unique within each question"
};
const L = 4294967295;
const D = 256;
const we = p(()=>pa((e)=>{
        if (!Array.isArray(e)) {
            return e;
        }
        let e_length = e.length;
        if (!Number.isInteger(e_length) || e_length < 0 || e_length > L) {
            return e;
        }
        let n = "";
        for(let r = 0; r < e_length; r++){
            let s = e[r];
            if (typeof s !== "string") {
                return e;
            }
            n = r === 0 ? s : `${n}, ${s}`;
        }
        return n;
    }, o()));
const Z = p(()=>({
        answers: ue(o(), we()).optional().describe("User answers collected by the permission component"),
        annotations: J(),
        metadata: u({
            source: o().optional().describe('Optional identifier for the source of this question (e.g., "remember" for /remember command). Used for analytics tracking.')
        }).optional().describe("Optional metadata for tracking and analytics purposes. Not displayed to user.")
    }));
function ee(e) {
    return De({
        questions: T(e).min(1).max(4).describe(k_o() ? "Questions to ask the user (1-4 questions). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more — split into multiple calls instead." : "Questions to ask the user (1-4 questions)"),
        ...Z()
    }).refine(Q.check, {
        message: Q.message
    });
}
const ye = p(()=>ee(N()));
const ge = p(()=>ee(fe()));
const be = p(()=>De({
        title: o().optional().describe('Optional single-line heading shown above the questions, e.g. "Before I build your deck".'),
        questions: T(me()).min(1).max(4).describe("Questions to ask the user (1-4, most important first). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more — split into multiple calls instead."),
        ...Z()
    }).refine(Q.check, {
        message: Q.message
    }));
const Se = p(()=>u({
        questions: T(N()).describe("The questions that were asked"),
        answers: ue(o(), o()).describe("The answers provided by the user (question text -> answer string; multi-select answers are comma-separated)"),
        response: o().optional().describe("Freeform text the user typed instead of selecting a structured option"),
        annotations: J(),
        afkTimeoutMs: E().int().positive().optional().describe("Set when the dialog auto-resolved after this many milliseconds of idle (user away from keyboard). Absent on every human-resolved path.")
    }));
const ke = p(()=>Se().extend({
        questions: T(G()).describe("The questions that were asked"),
        followUp: M().optional().describe("Set when the user asked for another round of questions instead of (or after partially) answering.")
    }));
const YBt = "(notes only)";
function W(afkTimeoutMs) {
    return `No response after ${Math.round(afkTimeoutMs / 1000)}s \u2014 the user may be away from keyboard. Proceed using your best judgment based on the context so far; you can re-ask this question later if it's still relevant.`;
}
function shownCardInput(e) {
    return {
        ..."title" in e && e.title && {
            title: e.title
        },
        questions: _we() ? e.questions.map((t)=>({
                ...t,
                kind: "kind" in t && t.kind ? t.kind : "choice"
            })) : e.questions,
        ...e.metadata && {
            metadata: e.metadata
        }
    };
}
const sX = Kt({
    name: Jo,
    searchHint: "prompt the user with a multiple-choice question",
    backgrounding: "never",
    maxResultSizeChars: 100000,
    async description () {
        return Tps;
    },
    async prompt ({ model, leanPrompt, tools }) {
        let r = Bnr(tools) ? Iao : Cps;
        let s = "";
        if (qx({
            model,
            leanPrompt
        })) {
            let w = k("tengu_cinder_plover", "").trim();
            s = w ? `
${w}
` : xps;
        }
        let a = k("tengu_cinder_wren", "");
        let h = typeof a === "string" ? a.trim() : "";
        let c = h ? `
${h}
` : "";
        let m = _we() ? Rps : "";
        let l = Gxr();
        if (l === undefined) {
            return r + s + c + m;
        }
        return r + s + c + m + Aps[l];
    },
    get inputSchema () {
        if (_we()) {
            return be();
        }
        if (dPo()) {
            return ge();
        }
        return ye();
    },
    get outputSchema () {
        return ke();
    },
    userFacingName () {
        return "";
    },
    validationErrorSteer (e) {
        if (typeof e !== "object" || e === null || Array.isArray(e)) {
            return null;
        }
        let e_questions = e.questions;
        if (!Array.isArray(e_questions)) {
            return null;
        }
        let n = false;
        let t_length = e_questions.length;
        if (!Number.isInteger(t_length) || t_length < 0 || t_length > L) {
            return null;
        }
        for(let s = 0; s < t_length && s < D; s++){
            let a = e_questions[s];
            if (typeof a !== "object" || a === null || Array.isArray(a)) {
                continue;
            }
            if (_we()) {
                let c = a.kind;
                if (c === "text" || c === "number") {
                    continue;
                }
            }
            let h = a.options;
            if (Array.isArray(h) && h.length < 2) {
                n = true;
                break;
            }
        }
        if (!n) {
            return null;
        }
        if (_we()) {
            return 'This call included a choice question with fewer than 2 options, so it was rejected and the person never saw it. If that question is open-ended, re-ask it with "kind": "text" and no options; if there is really only one path, state it as the approach you are taking and continue with the task. Do not invent a filler second option.';
        }
        return "This call included a question with fewer than 2 options, so it was rejected and the person never saw it. A question with a single option has no decision in it. Do not retry this call and do not invent a filler second option. Instead, state the one path you were going to offer as the approach you are taking, then continue with the task. If this call also contained questions with 2 to 4 options (each with distinct labels), you may re-ask those questions alone in a new call. Ask a question only when the person has at least two genuinely distinct choices.";
    },
    isEnabled () {
        return DK();
    },
    isConcurrencySafe () {
        return true;
    },
    isReadOnly () {
        return true;
    },
    toAutoClassifierInput (e) {
        let t = Pao;
        let n = _we();
        try {
            let r = typeof e === "object" && e !== null ? e.questions : undefined;
            if (!Array.isArray(r)) {
                return "[malformed AskUserQuestion input]";
            }
            let s = [];
            let a = r.length;
            if (!Number.isInteger(a) || a < 0 || a > L) {
                return "[malformed AskUserQuestion input]";
            }
            for(let c = 0; c < a; c++){
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
                let l = m.options;
                let w = [];
                if (Array.isArray(l)) {
                    let g = l.length;
                    for(let y = 0; y < g; y++){
                        if (w.length >= D) {
                            w.push("[… further option entries elided]");
                            break;
                        }
                        let A = l[y];
                        if (typeof A !== "object" || A === null) {
                            w.push(`(${y + 1}) "${t(A)}"`);
                            continue;
                        }
                        let b = A;
                        let q = [
                            `(${y + 1}) "${t(b.label)}"`
                        ];
                        let C = t(b.description);
                        if (C) {
                            q.push(`\u2014 ${C}`);
                        }
                        let j = t(b.preview);
                        if (j) {
                            q.push(`[preview: ${j}]`);
                        }
                        w.push(q.join(" "));
                    }
                }
                let x = w.join(" ");
                let v = m.multiSelect === true ? " [multiSelect]" : "";
                let f = t(m.header);
                let R = f ? ` [header: ${f}]` : "";
                let O = "";
                if (n) {
                    let g = m;
                    for (let [y, A] of [
                        [
                            "kind",
                            t(g.kind)
                        ],
                        [
                            "description",
                            t(g.description)
                        ],
                        [
                            "placeholder",
                            t(g.placeholder)
                        ],
                        [
                            "min",
                            pDn(g.min)
                        ],
                        [
                            "max",
                            pDn(g.max)
                        ],
                        [
                            "step",
                            pDn(g.step)
                        ],
                        [
                            "default",
                            pDn(g.defaultValue)
                        ],
                        [
                            "unit",
                            t(g.unit)
                        ]
                    ]){
                        if (A) {
                            O += ` [${y}: ${A}]`;
                        }
                    }
                }
                s.push(`"${t(m.question)}"${R}${O}${v} options: ${x}`);
            }
            if (s.length === 0) {
                return "[malformed AskUserQuestion input]";
            }
            let h = n ? t(e.title) : "";
            return (h ? `[title: ${h}] ` : "") + s.join(" | ");
        } catch  {
            return "[malformed AskUserQuestion input]";
        }
    },
    admitCardAnswer,
    shownCardInput,
    requiresUserInteraction () {
        return true;
    },
    renderToolUseMessage () {
        return null;
    },
    create () {
        return {
            async validateInput ({ questions }) {
                if (Gxr() !== "html") {
                    return {
                        result: true
                    };
                }
                for (let t of questions){
                    for (let n of t.options){
                        let r = Ae(n.preview);
                        if (r) {
                            return {
                                result: false,
                                message: `Option "${n.label}" in question "${t.question}": ${r}`,
                                errorCode: 1
                            };
                        }
                    }
                }
                return {
                    result: true
                };
            },
            async checkPermissions (e) {
                return {
                    behavior: "ask",
                    message: "Answer questions?",
                    updatedInput: shownCardInput(e)
                };
            },
            async call (e) {
                let { answers = {}, annotations } = e;
                let s = e.questions.map((l)=>{
                    if (Array.isArray(l.options)) {
                        return l;
                    }
                    return {
                        ...l,
                        options: []
                    };
                });
                let { response, afkTimeoutMs, followUp } = e;
                let answerCount = F(s, ({ question })=>{
                    let w = answers[question];
                    if (Array.isArray(w)) {
                        return w.length > 0;
                    }
                    return typeof w === "string" && w !== "" && w !== YBt;
                });
                i("tengu_ask_user_question_completed", {
                    extended: _we(),
                    questionCount: s.length,
                    choiceCount: F(s, (l)=>(l.kind ?? "choice") === "choice" && !l.multiSelect),
                    multiSelectCount: F(s, (l)=>(l.kind ?? "choice") === "choice" && l.multiSelect),
                    textCount: F(s, (l)=>l.kind === "text"),
                    numberCount: F(s, (l)=>l.kind === "number"),
                    answerCount,
                    followUp: followUp === true,
                    outcome: d(afkTimeoutMs ? "afk_timeout" : followUp ? "follow_up" : response?.trim() ? "responded" : answerCount > 0 ? "answered" : "unanswered"),
                    ...e.metadata?.source && {
                        source_hash: ln(e.metadata.source)
                    }
                });
                return {
                    data: {
                        questions: s,
                        answers,
                        ...response?.trim() && {
                            response
                        },
                        ...annotations && {
                            annotations
                        },
                        ...afkTimeoutMs && {
                            afkTimeoutMs
                        },
                        ...followUp === true && {
                            followUp: true
                        }
                    }
                };
            }
        };
    },
    mapToolResultToToolResultBlockParam ({ questions, answers, response, annotations, afkTimeoutMs, followUp }, tool_use_id) {
        let c = questions.map(({ question })=>{
            let w = answers[question];
            let x = annotations?.[question];
            let v = w && w !== YBt;
            if (!v && !x?.notes) {
                return null;
            }
            let f = [
                v ? `"${question}"="${w}"` : `"${question}"=(no option selected)`
            ];
            if (x?.preview) {
                f.push(`selected preview:
${x.preview}`);
            }
            if (x?.notes) {
                f.push(`notes: ${x.notes}`);
            }
            return f.join(" ");
        }).filter((l)=>l !== null).join(", ");
        let content;
        if (afkTimeoutMs) {
            content = c ? `${W(afkTimeoutMs)}

Before going idle the user had selected: ${c}.` : W(afkTimeoutMs);
        } else if (followUp) {
            let l = response?.trim() ? ` They also wrote: "${response}".` : "";
            content = c ? `${yCt} before you proceed. So far they answered: ${c}.${l} Call ${Jo} again with follow-up questions that build on these answers (do not repeat these); do not start the task yet.` : `${yCt} before answering.${l} Call ${Jo} again now with further questions about this decision (do not repeat these); do not proceed with the task yet.`;
        } else if (response?.trim()) {
            content = `The user responded: ${response}`;
        } else if (c) {
            content = questions.every(({ question, options, multiSelect, kind, min, max })=>{
                if (annotations?.[question]?.notes) {
                    return false;
                }
                if (kind === "text" || kind === "number") {
                    let q = answers[question];
                    if (q === undefined || q === "") {
                        return true;
                    }
                    if (kind === "text" || typeof q !== "string") {
                        return false;
                    }
                    let C = q.trim();
                    let j = Number(C);
                    return /^-?\d+(\.\d+)?$/.test(C) && Number.isFinite(j) && (min === undefined || j >= min) && (max === undefined || j <= max);
                }
                let y = answers[question];
                let A = new Set(options.map((q)=>q.label));
                if (Array.isArray(y)) {
                    return multiSelect && y.length > 0 && y.every((q)=>A.has(q));
                }
                if (!y || y === YBt) {
                    return true;
                }
                if (A.has(y)) {
                    return true;
                }
                if (!multiSelect) {
                    return false;
                }
                let b = H(y);
                return b !== null && b.length >= 1 && Lht(b) === y && b.every((q)=>A.has(q));
            }) ? `Your questions have been answered: ${c}. You can now continue with these answers in mind.` : `The user answered: ${c}. Read the answers carefully \u2014 they may request clarification, changes, or that you not proceed \u2014 and follow what they actually say.`;
        } else {
            content = "The user did not answer the questions.";
        }
        return {
            type: "tool_result",
            content,
            tool_use_id
        };
    }
});
function Ae(preview) {
    if (preview === undefined) {
        return null;
    }
    if (/<\s*(html|body|!doctype)\b/i.test(preview)) {
        return "preview must be an HTML fragment, not a full document (no <html>, <body>, or <!DOCTYPE>)";
    }
    if (/<\s*(script|style)\b/i.test(preview)) {
        return "preview must not contain <script> or <style> tags. Use inline styles via the style attribute if needed.";
    }
    if (!/<[a-z][^>]*>/i.test(preview)) {
        return 'preview must contain HTML (previewFormat is set to "html"). Wrap content in a tag like <div> or <pre>.';
    }
    return null;
}
export { Lht, YBt, sX };
