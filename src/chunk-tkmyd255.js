import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { kUn, $T, cP, oH, kY, yZt, MRe, ys, rct } from "/$bunfs/root/chunk-0ycjphb5.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { rs, f1, si } from "/$bunfs/root/chunk-6dwnw6av.js";
import { gn, Dy, y1 } from "/$bunfs/root/chunk-k3tkc302.js";
import { IE } from "/$bunfs/root/chunk-8yfbbt6t.js";
import { vt } from "/$bunfs/root/chunk-0vgmtssp.js";
import { cg, Eb, Tit, Xg, de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { VS, Vit, SV, Ghs, K_e, Vhs, Puo, X4e, qit, fxt, W5, J4e, IT, X4, qD, VA } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { aSt, KX, i$ } from "/$bunfs/root/chunk-qv4dnw41.js";
import { ZEe } from "/$bunfs/root/chunk-adgp14at.js";
import { n3o } from "/$bunfs/root/chunk-sqysdndt.js";
import { bK, mMe, _p, oM, V_t, IEe, sae } from "/$bunfs/root/chunk-cyq0svt5.js";
import { gZn } from "/$bunfs/root/chunk-zs8skt49.js";
import { k4o, A4o, Dbn, Lbn } from "/$bunfs/root/chunk-zqknd0d1.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
const Q = "__artifactAsk";
const Z = [
    "Claude wants to upload a file to this artifact.",
    "Claude wants to copy files from another artifact into this one.",
    "Claude wants to edit this artifact's data."
];
const X = 64;
const S4o = 3;
function ne(e) {
    if (e.length <= 2) {
        return e.join(" and ");
    }
    return `${e.slice(0, -1).join(", ")}, and ${e.at(-1)}`;
}
const N = /"[^"]*"/g;
const F = "Let Claude read the comments on ";
function w4o(e) {
    return `${F}${e ? `"${e}"` : "this artifact"}?`;
}
function te(e) {
    if (!e.startsWith(F)) {
        return;
    }
    for (let n of e.matchAll(new RegExp(`${N.source}|\\?(?=\\s)`, "g"))){
        if (n[0] === "?") {
            return n.index + 1;
        }
    }
}
function S(e) {
    try {
        if (e === undefined) {
            return undefined;
        }
        return gZn(e);
    } catch  {
        return;
    }
}
function xbn(e, n, t) {
    let s = ee().askCards.get(n);
    if (s === undefined || s.reason !== t || S(e) !== s.input) {
        return;
    }
    return s.card;
}
function v4o({ request, script, text, documents, files, file, source }, n = (t)=>t) {
    let p = [];
    if (L(request) && typeof request.method === "string" && typeof request.path === "string") {
        let g = L(request.query) ? new URLSearchParams(Object.entries(request.query).flatMap(([h, o])=>{
            let k = typeof o === "string" ? o : _(o);
            if (k === undefined) {
                return [];
            }
            return [
                [
                    h,
                    k
                ]
            ];
        })).toString() : "";
        let f = n(g === "" ? request.path : `${request.path}?${g}`);
        if (/^[A-Za-z]{1,16}$/.test(request.method) && /^[^\s\p{Cc}]+$/u.test(f)) {
            p.push(`${request.method.toUpperCase()} ${f}`);
            if (request.body !== undefined) {
                p.push(`Request body \xB7 ${E(j(request.body))}`);
            }
        }
    }
    for (let g of [
        script,
        text
    ]){
        if (typeof g === "string" && g.trim() !== "") {
            let [f = "", ...h] = x(g.trim());
            p.push(`${E(h.length + 1)} \xB7 ${f}`);
        }
    }
    if (documents !== undefined) {
        p.push(`${documents} ${I(documents, "document")}`);
    }
    if (files !== undefined) {
        let g = files.count - files.names.length;
        let f = files.names.map((o)=>`"${o}"`);
        let h = ne(g > 0 ? [
            ...f,
            `${g} more`
        ] : f);
        p.push(`${files.count} ${I(files.count, "file")} \xB7 ${h}`);
    }
    if (source !== undefined) {
        p.push(`source: ${source}`);
    }
    if (file !== undefined) {
        p.push(`file: ${file}`);
    }
    return p;
}
function j(e, n = new WeakSet) {
    if (typeof e === "string") {
        return x(e).length;
    }
    if (typeof e !== "object" || e === null || n.has(e)) {
        return 1;
    }
    n.add(e);
    let t = Array.isArray(e) ? e : Object.values(e);
    if (t.length === 0) {
        return 1;
    }
    return t.reduce((acc, item)=>acc + (typeof item === "string" ? 1 : j(item, n)), 2);
}
function x(e) {
    return e.split(/\r\n|[\r\n\u2028\u2029]/);
}
function E(e) {
    return `${e} ${e === 1 ? "line" : "lines"}`;
}
function se(e, n, t, s = ee().askCardFacts.get(e)) {
    let r = ee();
    let u = r.askClassCards.get(e);
    let a = s?.target;
    let l = s?.values ?? [];
    let c = s?.audience ?? "";
    r.askClassCards.delete(e);
    r.askCardFacts.delete(e);
    if (s === undefined || s.generic === true || n.behavior !== "ask" || n.decisionReason?.type !== "safetyCheck" && n.decisionReason?.type !== "other" || n.decisionReason.reason.trim() === "") {
        return;
    }
    let reason = n.decisionReason.reason;
    let g = reason.indexOf(`

`);
    let f = g === -1 ? reason : reason.slice(0, g);
    let h = g === -1 ? [] : reason.slice(g + 2).split(`
`).filter((C)=>C !== "");
    let o = n.updatedInput ?? t;
    let k = L(o) ? o[Q] : undefined;
    let card;
    if (k === undefined) {
        let b = Z.find((T)=>f.startsWith(T))?.length ?? te(f);
        let question = b === undefined ? f : f.slice(0, b);
        let D = b === undefined ? "" : f.slice(b).trim();
        let v = a?.title ?? "";
        let P = v !== "" ? `"${v}"` : a?.url;
        let lines = [];
        let U = (T)=>h.some((J)=>J.endsWith(T));
        if (P !== undefined && !question.includes(P) && !U(P)) {
            lines.push(P);
        }
        let O = a?.url;
        if (s?.foreign === true && O !== undefined && !question.includes(O) && !lines.includes(O) && !U(O)) {
            lines.push(O);
        }
        if (D !== "") {
            lines.push(D);
        }
        let Y = c === "" || f.replace(N, "").includes(c);
        card = {
            question,
            lines,
            values: [
                ...h,
                ...Y ? l : [
                    ...l,
                    c
                ]
            ]
        };
    } else if (u !== undefined && u.reason === f && S(k) === u.stamp) {
        let [C, ...lines] = u.parts;
        let A = c === "" || u.saysPublic;
        card = C === undefined ? undefined : {
            question: C,
            lines,
            values: A ? l : [
                ...l,
                c
            ]
        };
    }
    let input = S(o);
    if (input !== undefined && card !== undefined) {
        rae(r.askCards, e, {
            input,
            card,
            reason
        });
    }
}
function E4o(e, n) {
    let e_checkPermissions = e.checkPermissions;
    return ZQn(e, {
        async checkPermissions (s, r) {
            let u = await e_checkPermissions.call(this, s, r);
            let r_toolUseId = r.toolUseId;
            let l = u.behavior === "ask" ? u.updatedInput ?? s : null;
            if (r_toolUseId !== undefined && L(l)) {
                let c;
                try {
                    c = n(l, r);
                } catch  {
                    c = {
                        values: [],
                        generic: true
                    };
                }
                rae(ee().askCardFacts, r_toolUseId, c);
            }
            return u;
        }
    });
}
function Pbn(e) {
    let e_checkPermissions = e.checkPermissions;
    return ZQn(e, {
        async checkPermissions (t, s) {
            let s_toolUseId = s.toolUseId;
            if (s_toolUseId !== undefined) {
                let a = ee();
                a.askCards.delete(s_toolUseId);
                a.askClassCards.delete(s_toolUseId);
                a.askCardFacts.delete(s_toolUseId);
            }
            let u = await e_checkPermissions.call(this, t, s);
            if (s_toolUseId !== undefined) {
                se(s_toolUseId, u, t);
            }
            return u;
        }
    });
}
function rae(e, n, t) {
    e.delete(n);
    e.set(n, t);
    if (e.size > X) {
        let s = e.keys().next().value;
        if (s !== undefined) {
            e.delete(s);
        }
    }
}
function ZQn(e, n) {
    return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(n));
}
function e7n(e, n) {
    let t = vt(e);
    if (n.toolUseId !== undefined && t?.lastProbeToolUseId === n.toolUseId) {
        return D_t(t);
    }
    return {
        owned: undefined,
        public: undefined,
        outsideOrg: qD(t) || W(),
        invitedByOtherOrg: t?.external === true
    };
}
function D_t(e) {
    let invitedByOtherOrg = e?.external === true;
    if (e === undefined || e.probeFailed === true) {
        return {
            owned: undefined,
            public: undefined,
            outsideOrg: qD(e) || W(),
            invitedByOtherOrg
        };
    }
    let t = e.mode === "unknown" ? undefined : e.mode === "public";
    let outsideOrg = qD(e);
    if (e.role === undefined) {
        return {
            owned: t === true ? false : undefined,
            public: t,
            outsideOrg,
            invitedByOtherOrg
        };
    }
    return {
        owned: e.role === "unknown" ? undefined : e.role === "owner",
        public: t,
        outsideOrg,
        invitedByOtherOrg,
        ...(e.role === "owner" || e.role === "writer") && {
            canWrite: true
        }
    };
}
function W() {
    if (IE()) {
        return undefined;
    }
    return false;
}
function DC(operation, n, t) {
    let s = e7n(n.slug, t);
    return {
        operation,
        artifactId: n.slug,
        owned: s.owned,
        public: s.public,
        outsideOrg: s.outsideOrg,
        invitedByOtherOrg: s.invitedByOtherOrg,
        networkOff: L_t(n),
        turnStartedByHuman: oH(t.messages),
        ...s.canWrite === true && {
            canWrite: true
        }
    };
}
const oe = new Set([
    "scheduled",
    "retry",
    "catch_up",
    "manual"
]);
function M(e) {
    return e?.kind === "task-notification" && e.subkind === "scheduled-trigger" && e.fireReason !== undefined && oe.has(e.fireReason);
}
function I7e(e) {
    if (q(e)) {
        return false;
    }
    if (!M(kY(e.messages).decider?.origin)) {
        return false;
    }
    let n = ee();
    if (!n.routineRunTainted && !yZt(e.messages, (t, s)=>cP(s) || M(t))) {
        n.routineRunTainted = true;
    }
    return !n.routineRunTainted;
}
function t7n() {
    if (rct() !== undefined) {
        return false;
    }
    if (rs()) {
        return KX() && re() && kUn();
    }
    return !f1() && IT() && Ie() === "firstParty" && $T() === "env";
}
function B() {
    return aSt("POST", "/api/frame/deploy/direct");
}
function K(e) {
    return ee().frameRelay.servedUntil.get(e) ?? 0;
}
function re() {
    let e = B();
    if (e === null || i$(e)) {
        return false;
    }
    let routineRelayNotCarried = ee().routineRelayNotCarried;
    return routineRelayNotCarried === null || K(e) > routineRelayNotCarried.servedUntil;
}
function p2r() {
    let e = B();
    ee().routineRelayNotCarried = {
        servedUntil: e === null ? 0 : K(e)
    };
}
function q(e) {
    let { mode, modeBeforeRewrite } = de(e);
    return si(mode) || modeBeforeRewrite !== undefined && si(modeBeforeRewrite);
}
function O7e(e, n) {
    if (q(e)) {
        return false;
    }
    let { messages } = e;
    let decider = kY(messages).decider;
    if (decider === null || messages[decider.index]?.type !== "user" || decider.origin?.kind !== "task-notification") {
        return false;
    }
    let s_index = decider.index;
    for(; s_index > 0; s_index--){
        let a = messages[s_index - 1];
        if (a == null || a.type === "assistant" || a.type === "user" && !MRe(a) && a.origin?.kind !== "task-notification") {
            break;
        }
    }
    let u = messages.slice(s_index);
    return yZt(u, (a, l)=>l.type === "user" && a?.kind === "task-notification" && a.subkind === undefined && k4o(l.uuid) === n) && ie(u, n);
}
function ie(e, n) {
    let t = e[0] === undefined ? NaN : Date.parse(e[0].timestamp);
    let s = Lbn();
    if (s !== undefined && !(Number.isFinite(t) && s < t)) {
        return false;
    }
    if (Dbn(n, t)) {
        return false;
    }
    let r = false;
    for (let u of e){
        if (u?.type !== "assistant" || !Array.isArray(u.message.content)) {
            continue;
        }
        for (let a of u.message.content){
            if (a.type === "tool_use" && ae(a.name, a.input)) {
                let l = A4o(a.id);
                if (l?.ownWordsOnly !== true || l.slug !== n) {
                    return false;
                }
                r = true;
            }
        }
    }
    return r;
}
function ae(name, input) {
    let t = name === Dy ? ZEe("comments", input) : name === gn ? input : undefined;
    return typeof t === "object" && t !== null && "action" in t && t.action === "comments";
}
const fMe = true;
function qG(e, n) {
    return e.ask && e.basis === "unattended" || fMe && de(n).mode === "plan";
}
const n7n = true;
function HU(e) {
    return n7n && de(e).mode === "plan";
}
function PEe(e, n, t, s, r = ()=>VS(DC("read", n, e))) {
    if (!t && s && !HU(e)) {
        return r();
    }
    return null;
}
function H(e) {
    return IT() && Xg(e);
}
function cte(e, n, t) {
    let s = H(e) && !oH(e.messages);
    if (!s && !Eb(e)) {
        return null;
    }
    let r = t.endsWith(".") ? t : `${t}.`;
    return {
        behavior: "deny",
        message: `${n}. This needs a yes to: ${r} ${s ? "No one can answer that prompt in this Cowork session, and this turn was not started by the user's own message — tell the user in chat; do not retry it on this turn." : "No one can answer that prompt from plan mode in this session — keep planning in the plan file and raise it with the user in chat; do not retry while plan mode is on."}`,
        decisionReason: {
            type: "safetyCheck",
            reason: s ? "Artifact call with a new-comments notice pending, on a turn the user's own message did not start, in a Cowork session that has no one to answer its prompt" : "Notification-triggered artifact call in plan mode has no one to answer its prompt",
            classifierApprovable: false
        }
    };
}
function Qme(e, n, t) {
    if (!r7n(e, t)) {
        return null;
    }
    return {
        behavior: "deny",
        message: `${n}. Reading content of an artifact the user does not own, or whose ownership couldn't be confirmed, needs a person's yes, and no one can answer the prompt in this session \u2014 tell the user in chat instead of retrying.`,
        decisionReason: {
            type: "safetyCheck",
            reason: "Reading content of an artifact that is not confirmed to be the user's own requires a live human consent surface in this session",
            classifierApprovable: false
        }
    };
}
function r7n(e, n) {
    return Xg(e) && (IT() || n);
}
function L_t(e) {
    return n3o(e?.env);
}
const G = "this artifact";
const ue = "no one was asked first — nothing was returned; retry the same action so the user is asked";
const le = "no one can be asked about it in this session — nothing was returned; do not retry it here";
const ce = "a PermissionRequest hook answered the permission prompt in the user's place; only the user's own approval allows this read — nothing was returned; do not retry it here, and tell the user their hook answered for them (to approve it themselves they would narrow the hook so it no longer answers this prompt)";
function M7e(e, n, t, s) {
    if (ke(n, t)) {
        return true;
    }
    if (W5(Tit(n), s === "page" ? "artifactReadConsentSlugs" : "artifactAssetReadHumanConsentSlugs", t)) {
        return true;
    }
    if (Xg(n) || sae(n)) {
        return false;
    }
    return mMe(e, n) || !si(de(n).mode) && !fe(e) && bK(e, n);
}
function z(e) {
    let n = e.toolUseId === undefined ? undefined : e.toolDecisions?.get(e.toolUseId);
    return n?.source === "hook" && n.decision !== "reject";
}
function N_t(e, n = false, t) {
    let s = z(e);
    let r = n ? !cg(e) || Xg(e) && !si(de(e).mode) : Xg(e);
    if (!n) {
        return `this turned out to be a public artifact from outside your organization, and ${r ? le : s ? ce : ue}`;
    }
    let u = t === undefined ? "nothing was copied" : "nothing was published";
    let a = t === undefined ? "Retry the same action so that question is asked." : t.retryUrl !== undefined ? `Retry publishing with url: ${_(t.retryUrl)} so that question is asked.` : "Retry the same publish so that question is asked.";
    if (r) {
        return `the source artifact belongs to another organization and nobody can be asked about copying from it in this session, so ${u}. Don't retry it here.`;
    }
    return `the source artifact belongs to another organization and nobody was asked whether to copy from another organization's artifact, so ${u}. ${a}`;
}
function Ibn(e, n, t) {
    return VA(vt(n)) && (t || o7n(e, n));
}
function o7n(e, n) {
    return Puo(n) || W5(Tit(e), "artifactOutsideOrgConsentSlugs", n);
}
function fe(e) {
    let n = Reflect.get(e, oM);
    return typeof n === "object" && n !== null && Reflect.get(n, "classifier") === true;
}
const Obn = "This artifact was created outside your organization.";
function Mbn(e, n, t) {
    let s = y1(n);
    let r = s ? `"${s}"` : G;
    let u = s ? `"${s}"` : "This artifact";
    let a = `Let Claude read it${t ? ` and ${t}` : ""}?`;
    switch(e){
        case "someone_else":
            return `${u} was made by someone else. ${a}`;
        case "unknown":
            return `Claude couldn't check who made ${r}. ${a}`;
        case "cowritten":
            return `Other people can edit ${r}. ${a}`;
        case "from_type":
            return `${u} was made from someone else's artifact type. ${a}`;
    }
}
function f2r(e) {
    return `Approving covers its files${e ? ", and copying them into other artifacts," : ""} for the rest of the conversation.`;
}
function pe(ruling, title, url) {
    let s = ge(ruling, title, url);
    if (ruling.remember !== "artifact") {
        return s;
    }
    let r = X4() ? "task" : "conversation";
    return s.replace(/\?$/, ` for the rest of this ${r}?`);
}
function V(e) {
    return e.class === "public_change" && e.basis !== "unattended" && e.about !== "someone_else" && e.missing !== "public";
}
function ge(ruling, title, url) {
    let s = y1(title);
    let r = s ? `"${s}"` : G;
    let u = s ? `"${s}"` : "This artifact";
    switch(ruling.class){
        case "delete":
            return `Permanently delete ${s || url === undefined ? r : url}?`;
        case "public_change":
            if (V(ruling)) {
                return `${u} is public. Allow Claude to change it?`;
            }
            if (ruling.basis === "unattended") {
                return `Allow Claude to change ${r}?`;
            }
            if (ruling.about === "someone_else") {
                if (ruling.missing === "owned") {
                    return `Claude couldn't check who made ${r}. Allow Claude to change it?`;
                }
                return `${u} was made by someone else. Allow Claude to change it?`;
            }
            return `Claude couldn't check who can see ${r}. Allow Claude to change it?`;
        case "access_change":
            return `Allow Claude to change who can open or comment on ${r}?`;
        case "standing_job":
            return `Allow Claude to keep replying to comments on ${r}?`;
        case "foreign_read":
            return Mbn(ruling.missing === "owned" ? "unknown" : "someone_else", title);
    }
}
function me(ruling) {
    if (ruling.about === "outside_org") {
        return Obn;
    }
}
function oL(e) {
    return xze(e.input, e.context, [
        e
    ]);
}
function xze(e, n, t) {
    if (n.toolUseId !== undefined) {
        ee().askClassPending.delete(n.toolUseId);
        ee().askClassCards.delete(n.toolUseId);
    }
    let s = [];
    for (let o of t){
        if (!o.ruling.ask) {
            if (o.ruling.foreignRead) {
                F_t(o.action, o.slug, o.ownerAccountId, o.ruling.attested);
            }
        } else if (o.ruling.remember !== "artifact" || !(o.consentHeld ?? K_e(o.ruling, o.slug, o.userOnly === true)) || o.heldYesDoesNotCover === true) {
            s.push({
                ...o,
                ruling: o.ruling
            });
        }
    }
    if (s.length === 0) {
        return {
            behavior: "allow",
            updatedInput: {
                ...e,
                [_p]: false
            }
        };
    }
    let r = (o)=>o.ruling.answeredBy === "person" || o.userOnly === true;
    s.sort((o, k)=>Number(r(k)) - Number(r(o)));
    let u = s.some(r);
    let a = s.map((o)=>({
            display: o.display,
            question: pe(o.ruling, o.display.title, o.display.url),
            note: me(o.ruling),
            linked: o.ruling.class === "foreign_read" || o.ruling.about === "someone_else" || o.ruling.missing === "owned",
            reach: o.note
        }));
    let l = a.flatMap((o)=>{
        if (o.reach === undefined) {
            return [
                o.question
            ];
        }
        return [
            o.question,
            o.reach
        ];
    }).join(" ");
    if (u ? Xg(n) : Eb(n) || s.some((o)=>o.ruling.class === "foreign_read") && H(n)) {
        return {
            behavior: "deny",
            message: `Nothing was done. This needs a yes to: ${a.map((o)=>o.question).join(" ")} No one can answer in this session.`,
            decisionReason: {
                type: "safetyCheck",
                reason: `Artifact ${s.map((o)=>o.ruling.class).join(", ")} ask has no one to answer it`,
                classifierApprovable: false
            }
        };
    }
    let reachable = cg(n);
    let askedIn = J4e();
    let f = s.map((o)=>({
            class: o.ruling.class,
            remember: o.ruling.remember,
            ...o.ruling.endpoint && {
                endpoint: true
            },
            slug: o.slug,
            url: o.display.url,
            ...o.display.title !== undefined && {
                title: o.display.title
            },
            reachable,
            askedIn
        }));
    X4e(n, s.filter((o)=>"about" in o.ruling && o.ruling.about === "outside_org" && !o.ruling.endpoint).map((o)=>o.slug), reachable);
    let h = f.length === 1 ? f[0] : f;
    if (n.toolUseId !== undefined) {
        rae(ee().askClassPending, n.toolUseId, f);
        if (u) {
            rae(ee().askClassPersonAsked, n.toolUseId, true);
        } else {
            ee().askClassPersonAsked.delete(n.toolUseId);
        }
        if (si(de(n).mode)) {
            ee().askClassNoClassifier.delete(n.toolUseId);
        } else {
            rae(ee().askClassNoClassifier, n.toolUseId, true);
        }
        let stamp = S(h);
        if (stamp !== undefined) {
            let parts = a.flatMap(({ display, question, note, linked, reach })=>[
                    question,
                    ...note === undefined ? [] : [
                        note
                    ],
                    ...question.includes(display.url) || !linked && y1(display.title) ? [] : [
                        display.url
                    ],
                    ...reach === undefined ? [] : [
                        reach
                    ]
                ]);
            rae(ee().askClassCards, n.toolUseId, {
                stamp,
                parts,
                saysPublic: s.some((y)=>V(y.ruling)),
                reason: l
            });
        }
    }
    return {
        behavior: "ask",
        message: l,
        updatedInput: {
            ...e,
            [_p]: false,
            [V_t]: h
        },
        ...s.some((o)=>o.ruling.class === "delete" || o.ruling.class === "access_change") && {
            defaultToNo: true
        },
        ...s.some((o)=>o.ruling.class === "access_change") && {
            personOnly: true
        },
        suppressAlwaysAllowRule: true,
        localDisplayOnly: true,
        decisionReason: {
            type: "safetyCheck",
            reason: l,
            classifierApprovable: !u
        }
    };
}
function m2r(e) {
    if (e.toolUseId === undefined) {
        return;
    }
    let n = ee();
    let n_askClassPending = n.askClassPending;
    let s = n_askClassPending.get(e.toolUseId) ?? [];
    n_askClassPending.delete(e.toolUseId);
    let r = n.askClassPersonAsked.get(e.toolUseId);
    n.askClassPersonAsked.delete(e.toolUseId);
    let u = n.askClassNoClassifier.get(e.toolUseId);
    n.askClassNoClassifier.delete(e.toolUseId);
    let a = IEe(e);
    let l = !Xg(e) && !sae(e) && (a || r === true || u === true && !si(de(e).mode));
    if (s[0]?.reachable !== true || s[0].askedIn !== J4e() || !cg(e)) {
        return;
    }
    rae(n.askClassTaken, e.toolUseId, s);
    if (l) {
        rae(n.askClassTakenByPerson, e.toolUseId, true);
    }
    if (ys(e.agentContext)) {
        return;
    }
    for (let c of s){
        if (c.remember === "artifact" && (a || !c.endpoint)) {
            Ghs(Vit(c), c.slug, l);
            if (!c.endpoint && qit(e, c.slug) && (l || r !== true && !z(e))) {
                Vhs(c.slug);
            }
        }
    }
}
function g2r(e, n, t) {
    return he(e, n, t);
}
function he(e, n, t) {
    let s = e.toolUseId === undefined ? undefined : ee().askClassTaken.get(e.toolUseId);
    return s !== undefined && s.some((r)=>Vit(r) === n && r.slug === t && r.remember === "artifact") && SV(n, t);
}
function ke(e, n) {
    let t = ee();
    return e.toolUseId !== undefined && t.askClassTakenByPerson.get(e.toolUseId) === true && (t.askClassTaken.get(e.toolUseId)?.some((r)=>Vit(r) === "foreign_read" && r.slug === n) ?? false) || IEe(e) || fxt("foreign_read", n);
}
function Hjs(e, slug, url) {
    if (e.toolUseId === undefined) {
        return;
    }
    let s = ee();
    rae(s.askClassPending, e.toolUseId, [
        {
            class: "foreign_read",
            remember: "this_call",
            slug,
            url,
            reachable: cg(e),
            askedIn: J4e()
        }
    ]);
    rae(s.askClassPersonAsked, e.toolUseId, true);
}
function h2r(e, n) {
    i("tengu_artifact_routine_write_unasked", {
        db_op: d(e),
        artifact_id: ye(n)
    });
}
function y2r(e, n) {
    i("tengu_artifact_comment_write_unasked", {
        db_op: d(e),
        artifact_id: ye(n)
    });
}
function _2r(e) {
    i("tengu_artifact_comment_publish_unasked", {
        artifact_id: ye(e)
    });
}
function b2r(e) {
    ee().commentRepublishedPaths.add(e);
}
function s7n(e) {
    ee().routineRepublishedPaths.add(e);
}
function S2r(e) {
    if (e === undefined) {
        return;
    }
    let n = ee();
    n.askClassPending.delete(e);
    n.askClassCards.delete(e);
    n.askClassPersonAsked.delete(e);
    n.askClassNoClassifier.delete(e);
    n.askNamedOtherOrg.delete(e);
}
function w2r(e) {
    i("tengu_artifact_routine_publish_unasked", {
        artifact_id: ye(e)
    });
}
function $_t(e, n, t) {
    let mode = d(n ?? "absent");
    i("tengu_artifact_routine_first_publish_unasked", {
        ...e !== undefined && {
            artifact_id: ye(e)
        },
        mode,
        ...t?.fromType && {
            from_type: true
        }
    });
    if (n === "owner" || n === "refused_before_send") {
        return;
    }
    if (n !== "stranded" && n !== "refused_shape" && n !== "unknown_outcome") {
        m("artifact_publish", "routine_first_publish_not_owner_only", {
            mode,
            ...t?.fromType && {
                from_type: true
            }
        });
    }
    ee().routineRunTainted = true;
}
function F_t(e, n, t, s) {
    i("tengu_artifact_foreign_read_unasked", {
        action: d(e),
        artifact_id: ye(n),
        ...t !== undefined && {
            owner_account_id: ye(t)
        },
        ...s && {
            attested: true
        }
    });
}
export { S4o, w4o, xbn, v4o, E4o, Pbn, rae, ZQn, e7n, D_t, DC, I7e, t7n, p2r, O7e, fMe, qG, n7n, HU, PEe, cte, Qme, r7n, L_t, M7e, N_t, Ibn, o7n, Obn, Mbn, f2r, oL, xze, m2r, g2r, Hjs, h2r, y2r, _2r, b2r, s7n, S2r, w2r, $_t, F_t };
