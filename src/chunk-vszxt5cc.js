import { bo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { yi, P1 } from "/$bunfs/root/chunk-52bcnmbr.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { _, ej, qy } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { o, M, T, u, De, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { createHash } from "crypto";
import { realpath, stat } from "fs/promises";
const F0t = "anthropic/permissionAsks";
function hUs() {
    return {
        experimental: {
            [F0t]: {
                v: 1
            }
        }
    };
}
const W = p(()=>u({
        experimental: u({
            [F0t]: u({
                v: A(1)
            })
        })
    }));
const C = "anthropic/permissionQuestion";
const k = 32;
const b = 2000;
const O = 1024;
const E = new RegExp(`[${qy}]+`, "gu");
function QBe(n) {
    return ej(n.replace(E, "\uFFFD"));
}
const R = p(()=>o().regex(/^[0-9a-f]{64}$/));
const z = p(()=>De({
        v: A(1),
        approved: De({
            ask_digest: R(),
            attested: M()
        }).optional()
    }));
const Z = p(()=>De({
        v: A(1),
        outcome: A("needs_approval"),
        ask_digest: R(),
        reasons: T(De({
            reason: o().min(1).max(b),
            classifier_approvable: M(),
            circuit_breaker: o().max(64).optional(),
            also: T(o().max(64)).max(k).optional()
        })).min(1).max(k)
    }));
function xVn(n) {
    let e = sr(n) ? n[F0t] : undefined;
    if (e === undefined) {
        return {
            kind: "absent"
        };
    }
    if (typeof e !== "string" || e.length > O) {
        return {
            kind: "unreadable"
        };
    }
    let data = z().safeParse(mt(e, false)).data;
    if (data === undefined) {
        return {
            kind: "unreadable"
        };
    }
    if (data.approved === undefined) {
        return {
            kind: "can_ask"
        };
    }
    return {
        kind: "approved",
        askDigest: data.approved.ask_digest,
        attested: data.approved.attested
    };
}
function PVn(n, e) {
    return {
        reason: QBe(n.reason),
        classifier_approvable: e && !P1(n),
        ...n.circuitBreaker !== undefined && {
            circuit_breaker: n.circuitBreaker
        },
        ...n.also !== undefined && {
            also: [
                ...n.also
            ]
        }
    };
}
function Rin(n) {
    if (n?.type === "safetyCheck") {
        return [
            n
        ];
    }
    if (n?.type === "subcommandResults") {
        return [
            ...n.reasons.values()
        ].flatMap((e)=>Rin(e.decisionReason));
    }
    return [];
}
function v({ matchedAskRule, decisionReason }) {
    return [
        ...matchedAskRule?.ruleBehavior === "ask" ? [
            g(matchedAskRule)
        ] : [],
        ...decisionReason?.type === "rule" && decisionReason.rule.ruleBehavior === "ask" ? [
            g(decisionReason.rule)
        ] : [],
        ...decisionReason?.type === "other" ? [
            S(decisionReason.reason)
        ] : [],
        ...decisionReason?.type === "subcommandResults" ? [
            ...decisionReason.reasons.values()
        ].flatMap((r)=>{
            if (r.behavior === "ask") {
                return v(r);
            }
            return [];
        }) : []
    ];
}
function g(n) {
    return S(`A permission rule says to ask a person before a call like this one: '${_n(n.ruleValue)}'`);
}
function S(reason) {
    return {
        type: "safetyCheck",
        reason,
        classifierApprovable: false
    };
}
function j(name, e, { path, identity }, reasons) {
    return createHash("sha256").update(_([
        name,
        e,
        path,
        identity ?? null,
        reasons
    ])).digest("hex");
}
function Q(n, e, r, c) {
    let s = (a)=>PVn(a, a.classifierApprovable);
    let t = Rin(r.decisionReason).map(s);
    let d = v(r).map(s);
    let m = d.length === 0 ? t : [
        ...t.toSorted((a, y)=>Number(a.classifier_approvable) - Number(y.classifier_approvable)),
        ...d
    ].map((a)=>({
            ...a,
            classifier_approvable: false
        }));
    let reasons = yi(m, _);
    if (reasons.length === 0 || reasons.length > k) {
        return;
    }
    if (reasons.some((a)=>a.reason.length > b)) {
        return;
    }
    return {
        v: 1,
        outcome: "needs_approval",
        ask_digest: j(n.name, e, c, reasons),
        reasons
    };
}
async function TIr(n, e, r, c, s) {
    let t = xVn(n);
    if (t.kind === "absent") {
        return "as_without_the_key";
    }
    if (s === undefined) {
        if (t.kind === "approved") {
            return l(e, "question_changed", h);
        }
        return "as_without_the_key";
    }
    if (t.kind === "unreadable") {
        return l(e, "asks_key_unreadable", `${s.message} That needs a person's approval, and this server could not read its caller's offer to ask for one, so nobody was asked. Retrying won't help.`);
    }
    let cwd = bo(c).cwd;
    let m = {
        path: cwd,
        identity: await Promise.all([
            realpath(cwd),
            stat(cwd, {
                bigint: true
            })
        ]).then(([a, y])=>{
            if (a === cwd) {
                return `${y.dev}:${y.ino}`;
            }
        }, ()=>{})
    };
    if (m.identity === undefined) {
        if (t.kind === "approved") {
            return l(e, "question_changed", h);
        }
        return l(e, "start_folder_unconfirmed", `${s.message} That needs a person's approval, and nobody was asked, because the working directory was moved, is gone or cannot be read. Change directory first, then send the call again.`);
    }
    let i = Q(e, r, s, m);
    if (i === undefined) {
        return l(e, "question_too_large", `${s.message} The permission check's objections are too many, or one is too long, for this server to put to a person, so nobody was asked. Send smaller calls, or use shorter paths.`);
    }
    switch(t.kind){
        case "can_ask":
            f("mcp_serve_plain_call", "asked");
            return {
                rejection: `${e.name} was not run: ${s.message} A person has to approve this call, and none did. Tell the user what you wanted to run and why.`,
                meta: {
                    [C]: i
                }
            };
        case "approved":
            if (!t.attested) {
                return l(e, "approval_not_from_person", "the approval sent with this call did not come from a person, and only a person's counts. Tell the user what you wanted to run and why.");
            }
            if (i.ask_digest === t.askDigest) {
                return "run";
            }
            return l(e, "question_changed", h);
    }
}
var h = "what a person approved is no longer what this call would do: the working directory, or what the permission check found, has changed since, or the working directory was moved, is gone or cannot be read. If it was moved, is gone or cannot be read, change directory first. Then send the call again to have it checked afresh.";
function l(n, e, r) {
    f("mcp_serve_plain_call", e);
    return {
        rejection: `${n.name} was not run: ${r}`
    };
}
export { F0t, hUs, QBe, xVn, PVn, Rin, TIr };
