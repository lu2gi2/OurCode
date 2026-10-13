import { _, X } from "/$bunfs/root/chunk-bd805sh6.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Os } from "/$bunfs/root/chunk-1ej05ybf.js";
import { dkr, g1 } from "/$bunfs/root/chunk-k3tkc302.js";
import { PNe } from "/$bunfs/root/chunk-y9ay3abt.js";
import { o3, DS } from "/$bunfs/root/chunk-482qq3zf.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { randomUUID } from "crypto";
const P = "decision";
const j = "deliverables";
const U = /(?:`{3,}|~{3,})[ \t]*(?:decision|deliverables)/;
const NMe = "[a-z0-9][a-z0-9-]{0,63}";
const v = new RegExp(`^${NMe}$`);
const z = [
    "id",
    "question",
    "option",
    "lean",
    "resolved",
    "custom",
    "anchor"
];
const V = new RegExp(`^(${z.join("|")}):[ \\t]?(.*)$`);
const k = new RegExp(`^(${NMe})(?:[ \\t]*\\|[ \\t]*(.+))?$`);
const q = 300;
const H = 60;
const Y = 200;
const V4r = /^[A-Za-z0-9 ._:/@#()+-]{1,120}$/;
const R = 2;
const T = 5;
const O = 20;
const N = 280;
const C = 1120;
const G = 1496;
const J = /[\u0000-\u001f\u007f-\u009f\u2028\u2029]|(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Cf}\p{Default_Ignorable_Code_Point}]/u;
const Z = /[\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/gu;
const Q = 8;
function K(e) {
    if (e.length === 0 || e !== e.trim() || [
        ...e
    ].length > N) {
        return false;
    }
    if (J.test(e)) {
        return false;
    }
    return (e.match(Z) ?? []).length <= Q;
}
const ee = /^[A-Za-z0-9+/]*={0,2}$/;
function D(custom) {
    if (!K(custom)) {
        return null;
    }
    let n = new TextEncoder().encode(custom);
    if (n.length > C) {
        return null;
    }
    return Buffer.from(n).toString("base64");
}
function GGt(e) {
    if (e.length === 0 || e.length % 4 !== 0 || e.length > G || !ee.test(e)) {
        return null;
    }
    let n = Buffer.from(e, "base64");
    if (n.length > C) {
        return null;
    }
    if (Buffer.from(n).toString("base64") !== e) {
        return null;
    }
    let t;
    try {
        t = new TextDecoder("utf-8", {
            fatal: true
        }).decode(n);
    } catch  {
        return null;
    }
    if (K(t)) {
        return t;
    }
    return null;
}
function w(e) {
    return e.resolved !== undefined || e.custom !== undefined;
}
const E = "get-started";
const b = [
    "get-started",
    "keep-iterating"
];
function Zwn(e) {
    if (e.id !== E || e.options.length !== 2) {
        return false;
    }
    if (e.custom !== undefined) {
        return false;
    }
    let n = new Set(e.options.map((t)=>t.token));
    return b.every((t)=>n.has(t));
}
function B(e) {
    let n = e.find(Zwn);
    if (e.some((s)=>s !== n && !w(s))) {
        return "in-progress";
    }
    if (n?.resolved === b[0]) {
        return "started";
    }
    if (n !== undefined && n.resolved === undefined) {
        return "ready";
    }
    return "in-progress";
}
const b3o = /^<!--ws-decision-[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}-\d+-->\s*$/;
function ne(text) {
    let n = {};
    let options = [];
    for (let l of text.split(`
`)){
        if (l.trim() === "") {
            continue;
        }
        let p = l.match(V);
        if (!p) {
            return null;
        }
        let d = p[1];
        let g = (p[2] ?? "").trim();
        if (g === "") {
            return null;
        }
        if (d === "option") {
            let m = g.match(k);
            if (!m) {
                return null;
            }
            let i = m[1];
            let u = (m[2] ?? i).trim();
            if (u === "" || u.length > H) {
                return null;
            }
            options.push({
                token: i,
                label: u
            });
        } else {
            if (n[d] !== undefined) {
                return null;
            }
            n[d] = g;
        }
    }
    let { id, question, resolved, anchor, custom } = n;
    if (id === undefined || !v.test(id)) {
        return null;
    }
    if (question === undefined || question.length > q) {
        return null;
    }
    if (options.length < R || options.length > T) {
        return null;
    }
    if (new Set(options.map((l)=>l.token)).size !== options.length) {
        return null;
    }
    let lean;
    if (n.lean !== undefined) {
        let l = n.lean.match(k);
        if (!l) {
            return null;
        }
        let p = l[1];
        let reason = l[2]?.trim();
        if (reason !== undefined && (reason === "" || reason.length > Y)) {
            return null;
        }
        if (!options.some((g)=>g.token === p)) {
            return null;
        }
        lean = {
            token: p,
            reason
        };
    }
    if (anchor !== undefined && !V4r.test(anchor)) {
        return null;
    }
    if (resolved !== undefined && !options.some((l)=>l.token === resolved)) {
        return null;
    }
    if (custom !== undefined) {
        if (resolved !== undefined) {
            return null;
        }
        if (id === E) {
            return null;
        }
        if (D(custom) === null) {
            return null;
        }
    }
    return {
        id,
        question,
        options,
        lean,
        resolved,
        custom,
        anchor
    };
}
function q4r(e) {
    let n = w(e);
    let t = n ? "resolved" : "open";
    let s = e.resolved === undefined ? undefined : e.options.find((d)=>d.token === e.resolved);
    let a = e.custom === undefined ? null : D(e.custom);
    let r = `data-decision-id="${Os(e.id)}" data-decision-state="${t}"` + (e.lean === undefined ? "" : ` data-lean-choice="${Os(e.lean.token)}"`) + (e.resolved === undefined ? "" : ` data-resolved-choice="${Os(e.resolved)}"`) + (a === null ? "" : ` data-resolved-custom="${Os(a)}"`) + (e.anchor === undefined ? "" : ` data-anchor="${Os(e.anchor)}"`);
    let e_lean = e.lean;
    let c = e.options.map((d)=>{
        let g = `<span class="option-label">${Os(d.label)}</span>`;
        let m = Os(d.token);
        let i = e_lean !== undefined && d.token === e_lean.token;
        let u = e_lean !== undefined && d.token === e_lean.token && e_lean.reason !== undefined ? `<span class="why">${Os(e_lean.reason)}</span>` : "";
        if (n) {
            let A = d.token === e.resolved ? "option chosen" : "option dim";
            let y = d.token === e.resolved && i ? u : "";
            return `<span class="${A}" data-choice="${m}">${g}${y}</span>`;
        }
        return `<span class="${i ? "option recommended" : "option"}" role="button" aria-disabled="true" title="Deciding from the page needs this Artifact to be able to update itself" data-choice="${m}">${g}${i ? '<span class="badge">Recommended</span>' : ""}${u}</span>`;
    }).join("");
    let f = e.custom !== undefined ? `<p class="decided">Decided: ${Os(e.custom)}</p>` : s === undefined ? "" : `<p class="decided">Decided: ${Os(s.label)}</p>`;
    let l = e.anchor === undefined ? "" : `<p class="anchor">Anchor: <code>${Os(e.anchor)}</code></p>`;
    let p = n || e.id === E ? "" : `${`<div class="custom-answer"><input class="option-input" type="text" maxlength="${N}" disabled aria-disabled="true" title="Deciding from the page needs this Artifact to be able to update itself"`} placeholder="Or type your own answer…" aria-label="Your own answer"></div>`;
    return `${`<div class="call-item" ${r}>`}<span class="marker" aria-hidden="true">●</span>${`<div class="call-body"><p><span class="q">${Os(e.question)}</span></p>`}${f}${l}${`<div class="options">${c}${p}</div></div></div>`}`;
}
const K4r = "<!--ws-decisions-island-->";
const Y4r = "<!--ws-status-banner-->";
const X4r = "<!--ws-status-footer-->";
function S3o(e) {
    if (e.length === 0) {
        return null;
    }
    for (let s of e){
        if (s.custom !== undefined && D(s.custom) === null) {
            return null;
        }
    }
    let items = e.map((s)=>({
            id: s.id,
            opts: s.options.map((a)=>a.token),
            state: w(s) ? "resolved" : "open",
            choice: s.resolved ?? null,
            custom: s.custom === undefined ? null : D(s.custom)
        }));
    let t = _({
        items
    });
    for (let s of [
        "<",
        ">",
        "&",
        "'",
        "\\"
    ]){
        if (t.includes(s)) {
            return null;
        }
    }
    if (Z4r(t) === null) {
        return null;
    }
    return `<script type="application/json" id="ws-decisions">${t}</script>`;
}
function w3o(e) {
    let n = B(e);
    let t = e.find(Zwn);
    let s = F(e, (r)=>r !== t && !w(r));
    let a = n === "started" ? "Build started" : n === "ready" ? "Ready to build" : s > 0 ? `In progress \u2014 ${s} ${I(s, "decision")} open` : "In progress";
    return `<div class="ws-banner" data-ws-state="${n}">${a}</div>`;
}
function v3o(e, n) {
    let e_resolved = e.resolved;
    let s = e_resolved === undefined ? "open" : "resolved";
    let a = `data-decision-id="${Os(e.id)}" data-decision-state="${s}"` + (e_resolved === undefined ? "" : ` data-resolved-choice="${Os(e_resolved)}"`);
    let r = e.options.map((c)=>{
        let f = `<span class="option-label">${Os(c.label)}</span>`;
        let l = Os(c.token);
        if (e_resolved !== undefined) {
            return `<span class="${c.token === e_resolved ? "option chosen" : "option dim"}" data-choice="${l}">${f}</span>`;
        }
        return `<span class="${c.token === b[0] ? "option cta" : "option cta-quiet"}" role="button" aria-disabled="true" title="Deciding from the page needs this Artifact to be able to update itself" data-choice="${l}">${f}</span>`;
    }).join("");
    let o = e_resolved === b[0] ? '<span class="ws-status-note">Build started — the workshop session is on it.</span>' : e_resolved !== undefined ? '<span class="ws-status-note">Keeping at it — more to come.</span>' : B(n) === "ready" ? '<span class="ws-status-note">All decisions are in.</span>' : '<span class="ws-status-note">Decisions still open above.</span>';
    return `<div class="ws-status-footer" ${a}>${r}${o}</div>`;
}
const S = 10;
const M = 120;
const te = new RegExp(`^[-*][ \\t]+\\[([^\\][\\r\\n]{1,${M}})\\]\\((\\S+)\\)$`);
const J4r = "data-ws-deliverable-kind";
const se = [
    "pr",
    "artifact",
    "other"
];
const oe = new RegExp(`/artifact/(?:[A-Za-z0-9_-]*-)?(?:[0-9a-f]{8}-|(${dkr})(?:/|$))`);
function re(e) {
    if (/\/(?:pull|pull-requests|-\/merge_requests)\/\d+/.test(e.pathname)) {
        return "pr";
    }
    let n = oe.exec(e.pathname);
    if (n && (n[1] === undefined || g1(n[1]) !== null)) {
        return "artifact";
    }
    return "other";
}
function ie(text) {
    let n = [];
    for (let t of text.split(`
`)){
        let s = t.trim();
        if (s === "") {
            continue;
        }
        let a = te.exec(s);
        if (!a) {
            return null;
        }
        let r = a[1].trim();
        if (r.length === 0 || r.length > M) {
            return null;
        }
        let o;
        try {
            o = new URL(a[2]);
        } catch  {
            return null;
        }
        if (o.protocol !== "https:" && o.protocol !== "http:") {
            return null;
        }
        if (n.length >= S) {
            return null;
        }
        n.push({
            label: r,
            url: o.toString(),
            kind: re(o)
        });
    }
    if (n.length === 0) {
        return null;
    }
    return n;
}
function le(deliverables) {
    return `<div class="ws-deliverables"><ul>${deliverables.map((t)=>`<li class="ws-deliverable" ${J4r}="${t.kind}"><a href="${Os(t.url)}" target="_blank" rel="noopener noreferrer">${Os(t.label)}</a></li>`).join("")}</ul></div>`;
}
function evn(e) {
    let n = e.slice(0, S);
    let t = (s)=>{
        if (se.includes(s)) {
            return s;
        }
        return "other";
    };
    return {
        n: n.length,
        pr: F(n, (s)=>t(s) === "pr"),
        artifact: F(n, (s)=>t(s) === "artifact"),
        other: F(n, (s)=>t(s) === "other")
    };
}
function E3o(e, n, t = q4r) {
    let s = {
        md: e,
        substitute: (html)=>({
                html,
                complete: true
            }),
        nonceMarker: "",
        decisions: [],
        deliverables: []
    };
    if (!U.test(e)) {
        return s;
    }
    let a;
    try {
        a = n(e);
    } catch  {
        return s;
    }
    let r = [];
    let o = new Set;
    let offset = 0;
    let f = 0;
    for (let i of a){
        if (!e.startsWith(i.raw, offset)) {
            let u = e.indexOf(i.raw, offset);
            if (u === -1) {
                break;
            }
            offset = u;
        }
        if (i.type === "code" && "lang" in i && typeof i.lang === "string" && i.lang.trim() === P && o.size < O) {
            let decision = ne(i.text);
            if (decision !== null && !o.has(decision.id)) {
                o.add(decision.id);
                r.push({
                    offset,
                    raw: i.raw,
                    decision
                });
            }
        } else if (i.type === "code" && "lang" in i && typeof i.lang === "string" && i.lang.trim() === j) {
            let deliverables = ie(i.text);
            if (deliverables !== null && f + deliverables.length <= S) {
                f += deliverables.length;
                r.push({
                    offset,
                    raw: i.raw,
                    deliverables
                });
            }
        }
        offset += i.raw.length;
    }
    if (r.length === 0) {
        return s;
    }
    let l = randomUUID();
    let p = "";
    let d = 0;
    let g = [];
    for (let [i, u] of r.entries()){
        let ph = `<!--ws-decision-${l}-${i}-->`;
        p += e.slice(d, u.offset) + `

${ph}

`;
        d = u.offset + u.raw.length;
        g.push({
            ph,
            html: "decision" in u ? t(u.decision) : le(u.deliverables)
        });
    }
    p += e.slice(d);
    let nonceMarker = `ws-decision-${l}`;
    return {
        md: p,
        nonceMarker,
        substitute: (i)=>{
            let html_1 = i;
            let complete = true;
            for (let { ph, html } of g){
                let y = html_1.split(ph);
                if (y.length === 1) {
                    complete = false;
                }
                html_1 = y.join(html);
            }
            if (html_1.includes(nonceMarker)) {
                complete = false;
            }
            return {
                html: html_1,
                complete
            };
        },
        decisions: r.flatMap((i)=>{
            if ("decision" in i) {
                return [
                    i.decision
                ];
            }
            return [];
        }),
        deliverables: r.flatMap((i)=>{
            if ("deliverables" in i) {
                return i.deliverables;
            }
            return [];
        })
    };
}
const Q4r = 'id="ws-decisions">';
function Vbt(e, n) {
    let t = `id="${n}"`;
    let s = [];
    let a = e.indexOf(t);
    while(a !== -1){
        let r = a + t.length;
        let o = r + PNe(e, r);
        if (e.charCodeAt(o) === 62) {
            s.push([
                a,
                o + 1
            ]);
        }
        a = e.indexOf(t, r);
    }
    return s;
}
const ae = 65536;
async function L(e, n) {
    try {
        let { nestingBudgetExceeded } = await import("/$bunfs/root/chunk-7zvwgyh2.js");
        if (nestingBudgetExceeded(e)) {
            return null;
        }
        return await ce(e, n);
    } catch  {
        return null;
    }
}
async function ce(e, n) {
    let { parse } = await import("/$bunfs/root/chunk-zczx3aa8.js");
    let s = o3(parse(e, {
        sourceCodeLocationInfo: true
    }));
    let a = [];
    let r = [
        {
            node: s,
            inTemplate: false
        }
    ];
    while(true){
        let o = r.pop();
        if (o === undefined) {
            break;
        }
        let { node, inTemplate } = o;
        if (node.tagName !== undefined) {
            if (DS(node, "id") === n) {
                a.push({
                    node,
                    inTemplate
                });
            }
        }
        for (let l of node.childNodes ?? []){
            r.push({
                node: l,
                inTemplate
            });
        }
        for (let l of node.content?.childNodes ?? []){
            r.push({
                node: l,
                inTemplate: true
            });
        }
    }
    return a;
}
async function lL(e, n) {
    if (!v.test(n)) {
        return {
            ambiguous: true
        };
    }
    let t = Vbt(e, n);
    if (t.length === 0) {
        let p = await L(e, n);
        if (p === null) {
            return {
                ambiguous: true
            };
        }
        if (p.length === 0) {
            return null;
        }
        return {
            ambiguous: true
        };
    }
    if (t.length !== 1) {
        return {
            ambiguous: true
        };
    }
    let [s, a] = t[0];
    let r = await L(e, n);
    if (r === null || r.length !== 1 || r[0].inTemplate) {
        return {
            ambiguous: true
        };
    }
    let node = r[0].node;
    let c = (DS(node, "type") ?? "").trim().toLowerCase();
    let f = node.sourceCodeLocation?.startTag;
    let l = node.sourceCodeLocation?.endTag;
    if ((node.tagName ?? "").toLowerCase() !== "script" || c !== "application/json" || f === undefined || f === null || l === undefined || l === null) {
        return {
            ambiguous: true
        };
    }
    if (s < f.startOffset || a !== f.endOffset) {
        return {
            ambiguous: true
        };
    }
    return {
        json: e.slice(f.endOffset, l.startOffset)
    };
}
function Z4r(e) {
    if (e.length > ae) {
        return null;
    }
    let n;
    try {
        n = X(e);
    } catch  {
        return null;
    }
    if (n === null || typeof n !== "object" || Array.isArray(n)) {
        return null;
    }
    let t = Object.keys(n);
    if (t.length !== 1 || t[0] !== "items") {
        return null;
    }
    let n_items = n.items;
    if (!Array.isArray(n_items) || n_items.length > O) {
        return null;
    }
    let a = [];
    let r = new Set;
    for (let o of n_items){
        if (o === null || typeof o !== "object" || Array.isArray(o)) {
            return null;
        }
        let c = Object.keys(o).sort();
        if (c.length !== 5 || c[0] !== "choice" || c[1] !== "custom" || c[2] !== "id" || c[3] !== "opts" || c[4] !== "state") {
            return null;
        }
        let f = o;
        let id = f.id;
        if (typeof id !== "string" || !v.test(id) || r.has(id)) {
            return null;
        }
        r.add(id);
        let p = f.opts;
        if (!Array.isArray(p) || p.length < R || p.length > T || p.some((i)=>typeof i !== "string" || !v.test(i)) || new Set(p).size !== p.length) {
            return null;
        }
        let state = f.state;
        if (state !== "open" && state !== "resolved") {
            return null;
        }
        let choice = f.choice;
        if (choice !== null && (typeof choice !== "string" || !p.includes(choice))) {
            return null;
        }
        let custom = f.custom;
        if (custom !== null && (typeof custom !== "string" || GGt(custom) === null)) {
            return null;
        }
        if (custom !== null && id === E) {
            return null;
        }
        if (state === "open" && (choice !== null || custom !== null)) {
            return null;
        }
        if (state === "resolved" && choice !== null === (custom !== null)) {
            return null;
        }
        a.push({
            id,
            opts: p.slice(),
            state,
            choice,
            custom
        });
    }
    return a;
}
function ue(e) {
    return e.id === E && e.opts.length === 2 && b.every((n)=>e.opts.includes(n)) && e.custom === null;
}
function VGt(e) {
    let n = e.find(ue);
    if (e.some((s)=>s !== n && s.state === "open")) {
        return "in-progress";
    }
    if (n !== undefined && n.choice === b[0]) {
        return "started";
    }
    if (n !== undefined && n.state === "open") {
        return "ready";
    }
    return "in-progress";
}
export { NMe, V4r, GGt, Zwn, b3o, q4r, K4r, Y4r, X4r, S3o, w3o, v3o, J4r, evn, E3o, Q4r, Vbt, lL, Z4r, VGt };
