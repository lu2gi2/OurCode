import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Jce } from "/$bunfs/root/chunk-4r6b8efh.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { sX } from "/$bunfs/root/chunk-v55arm1d.js";
import { DK, Kl } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Dmn, Lmn, Szo } from "/$bunfs/root/chunk-tsj04c7h.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
import { o, M, oe, u, ue } from "/$bunfs/root/chunk-smx21d0k.js";
import { randomUUID } from "crypto";
const Dht = "confirm_";
function KBt(e) {
    let r = de(e);
    return DK() && r.shouldAvoidPermissionPrompts !== true && r.mode !== "dontAsk";
}
async function mQe(e) {
    let { toolUseContext, source } = e;
    if (!KBt(toolUseContext)) {
        return {
            kind: "unanswered",
            reason: "no_one_to_ask"
        };
    }
    let s;
    try {
        s = await b(e);
    } catch (error) {
        if (toolUseContext.abortController.signal.aborted) {
            t(`confirmWithUser(${source}): ask aborted with the turn: ${l(error)}`);
            s = {
                kind: "aborted"
            };
        } else {
            c(error);
            s = {
                kind: "unanswered",
                reason: "error"
            };
        }
    }
    let a = {
        source_hash: ln(source)
    };
    switch(s.kind){
        case "chose":
        case "declined":
        case "aborted":
            g("permission_confirm_with_user", {
                ...a,
                answer: d(s.kind)
            });
            break;
        case "unanswered":
            if (s.reason === "error") {
                m("permission_confirm_with_user", "error", a);
            } else {
                f("permission_confirm_with_user", s.reason, a);
            }
            break;
    }
    return s;
}
async function b({ canUseTool, toolUseContext, source, header, question, choices, personOnly }) {
    let h = sX.inputSchema.safeParse({
        questions: [
            {
                question,
                header,
                options: choices.map(({ label, description })=>({
                        label,
                        description: description ?? ""
                    })),
                multiSelect: false
            }
        ],
        metadata: {
            source
        }
    });
    if (!h.success) {
        throw new x(`confirmWithUser(${source}): the question does not satisfy the AskUserQuestion schema: ${h.error.message}`, "confirmWithUser: the question does not satisfy the AskUserQuestion schema");
    }
    let U = await sX.checkPermissions(h.data, toolUseContext);
    if (U.behavior !== "ask") {
        throw new x(`confirmWithUser(${source}): AskUserQuestion.checkPermissions answered ${U.behavior}, not ask`, "confirmWithUser: AskUserQuestion.checkPermissions did not answer ask");
    }
    let w = {
        ...U,
        forcedByCaller: true,
        ...personOnly === true && {
            personOnly: true
        }
    };
    let _ = `${Dht}${randomUUID()}`;
    let y = await canUseTool(sX, h.data, toolUseContext, Kl({
        content: []
    }), _, w).finally(()=>Jce(toolUseContext.session, _));
    return P(y, w, toolUseContext.abortController.signal, question, choices);
}
function P(e, r, signal, question, choices) {
    if (Dmn(e, r)) {
        return {
            kind: "unanswered",
            reason: "no_one_to_ask"
        };
    }
    if (signal.aborted) {
        return {
            kind: "aborted"
        };
    }
    switch(e.behavior){
        case "allow":
            {
                let n = T().safeParse(e.updatedInput);
                if (!n.success) {
                    return {
                        kind: "unanswered",
                        reason: "no_selection"
                    };
                }
                if (n.data.followUp === true) {
                    return {
                        kind: "declined"
                    };
                }
                let typedAnswer = R(n.data.answers?.[question]);
                if (typedAnswer === "") {
                    return {
                        kind: "unanswered",
                        reason: "no_selection"
                    };
                }
                let h = choices.find((U)=>C(U.label) === typedAnswer);
                if (h !== undefined) {
                    return {
                        kind: "chose",
                        value: h.value
                    };
                }
                return {
                    kind: "declined",
                    typedAnswer
                };
            }
        case "deny":
            if (e.decisionReason.type === "other" && Szo(e.decisionReason.reason)) {
                return {
                    kind: "unanswered",
                    reason: "host_closed"
                };
            }
            if (e.decisionReason.type === "asyncAgent" || e.decisionReason.type === "other" && Lmn(e.decisionReason.reason)) {
                return {
                    kind: "unanswered",
                    reason: "no_one_to_ask"
                };
            }
            return {
                kind: "declined"
            };
        case "ask":
            return {
                kind: "declined"
            };
    }
}
var T = p(()=>u({
        answers: ue(o(), oe()).optional(),
        followUp: M().optional()
    }));
function R(e) {
    if (typeof e === "string") {
        return C(e);
    }
    if (Array.isArray(e)) {
        return C(e.filter((r)=>typeof r === "string").join(", "));
    }
    return "";
}
function C(e) {
    return e.replace(/\s+/g, " ").trim();
}
export { Dht, KBt, mQe };
