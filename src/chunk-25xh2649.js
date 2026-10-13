import { ua } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { QFe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { ioe } from "/$bunfs/root/chunk-6rhcrh84.js";
import { rSe } from "/$bunfs/root/chunk-0ycjphb5.js";
import { randomUUID } from "crypto";
const c = Symbol("isolationDispatchGate.mintedReentry");
async function lBt({ tool, input, ask, permissionPhase, alreadyApproved, recipientLabel, resolution, askUnconditionally = false, parse }) {
    if (!((askUnconditionally || QFe()) && !alreadyApproved)) {
        return {
            proceed: true,
            input,
            asked: false
        };
    }
    let reentry = {
        ...permissionPhase,
        ...resolution !== undefined && {
            dispatchResolution: {
                input,
                note: resolution
            }
        }
    };
    Object.defineProperty(reentry, c, {
        value: true,
        configurable: true
    });
    let toolUseId = randomUUID();
    let f = ioe();
    let t;
    try {
        t = await ask(input, {
            toolUseId,
            reentry
        });
    } finally{
        f();
        Reflect.deleteProperty(reentry, c);
    }
    if (t.behavior !== "allow") {
        return {
            proceed: false,
            asked: true,
            reason: "denied",
            message: t.behavior === "deny" && t.message ? t.message : askUnconditionally ? `Sending to ${recipientLabel} needs your approval \u2014 nothing was sent.` : `isolatePeerMachines is enabled: sending to ${recipientLabel} needs your approval \u2014 nothing was sent.`,
            ...t.behavior === "deny" && t.decisionReason && {
                decisionReason: t.decisionReason
            }
        };
    }
    if (t.updatedInput === undefined || rSe(t.updatedInput)) {
        return {
            proceed: true,
            input,
            asked: true,
            ...t.decisionReason && {
                decisionReason: t.decisionReason
            }
        };
    }
    let d = P(parse, t.updatedInput);
    if (!d.success) {
        return {
            proceed: false,
            asked: true,
            reason: "bad_shape",
            message: `The permission handler narrowed the input to a shape ${tool.name} does not accept \u2014 nothing was sent.`
        };
    }
    if (d.data.to !== input.to) {
        return {
            proceed: false,
            asked: true,
            reason: "recipient_changed",
            message: `The permission handler changed the recipient (from ${recipientLabel}) after this send was resolved \u2014 nothing was sent. Send again to the recipient you intend.`
        };
    }
    if (d.data.message !== undefined && typeof d.data.message !== "string") {
        return {
            proceed: false,
            asked: true,
            reason: "non_text_message",
            message: "The permission handler rewrote the message into a structured (non-text) form, which cannot be sent to another session — nothing was sent."
        };
    }
    return {
        proceed: true,
        input: d.data,
        asked: true,
        ...t.decisionReason && {
            decisionReason: t.decisionReason
        }
    };
}
function cBt(e, n, o, s) {
    let i = e.permissionPhase?.pipeline;
    if (i === undefined) {
        return false;
    }
    let r = i.result.behavior === "ask" ? i.result : i.answered;
    if (r === undefined || r.behavior !== "ask" || !s(r)) {
        return false;
    }
    return a(o(i.input), o(n));
}
function Tjo(e, n, o) {
    let s = e.permissionPhase?.checked;
    if (s === undefined) {
        return;
    }
    if (a(o(s.input), o(n))) {
        return s.result;
    }
}
function Yfn(e, n, o) {
    let s = e.permissionPhase?.checked;
    if (s === undefined || !("note" in s)) {
        return;
    }
    if (a(o(s.input), o(n))) {
        return s.note;
    }
}
function Ajo(e, n, input, s) {
    if (e === undefined) {
        return;
    }
    let i = s(n);
    let r = {
        ...e
    };
    if (e.checked !== undefined && a(s(e.checked.input), i)) {
        r.checked = {
            ...e.checked,
            input
        };
    }
    if (e.pipeline !== undefined && a(s(e.pipeline.input), i)) {
        r.pipeline = {
            ...e.pipeline,
            input
        };
    }
    return r;
}
function Cjo(e, n, o) {
    let s = e.permissionPhase?.dispatchResolution;
    if (s === undefined) {
        return;
    }
    if (a(o(s.input), o(n))) {
        return s.note;
    }
}
function ime({ permissionPhase }) {
    return permissionPhase !== undefined && Object.hasOwn(permissionPhase, c);
}
function dBt(e) {
    return e.behavior === "ask" && e.decisionReason?.type === "safetyCheck" && e.decisionReason.circuitBreaker === "isolatePeerMachines";
}
function a(e, n) {
    return _(e) === _(n);
}
function P(parse, updatedInput) {
    let o = parse(updatedInput);
    if (o.success || o.error === undefined) {
        return o;
    }
    let s = new Set;
    for (let i of o.error.issues){
        if (i.code !== "unrecognized_keys" || i.path.length > 0) {
            return o;
        }
        for (let r of i.keys){
            s.add(r);
        }
    }
    if (s.size === 0 || typeof updatedInput !== "object" || updatedInput === null) {
        return o;
    }
    return parse(ua(updatedInput, (i, r)=>s.has(r)));
}
export { lBt, cBt, Tjo, Yfn, Ajo, Cjo, ime, dBt };
