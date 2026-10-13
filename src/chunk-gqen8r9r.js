import { Un, _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { Dxe, qs } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ndt, yg, AR } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { zd as v_1, qI, pLn, Wc, ddo, vb } from "/$bunfs/root/chunk-4r6b8efh.js";
import { qe } from "/$bunfs/root/chunk-46dhek9m.js";
import { W$, nRt, kB } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { I2 } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { gke } from "/$bunfs/root/chunk-kasbfbhj.js";
import { uun, mun } from "/$bunfs/root/chunk-4ssez7mj.js";
import { zfe } from "/$bunfs/root/chunk-s248m269.js";
import { oc } from "/$bunfs/root/chunk-cerrsv89.js";
import { mX } from "/$bunfs/root/chunk-xvpf4sv2.js";
import { mQ } from "/$bunfs/root/chunk-ez1x5yhw.js";
import { Or, TCe } from "/$bunfs/root/chunk-b7w13qrv.js";
function m() {
    try {
        return k("tengu_violin_table", false) === true;
    } catch  {
        return false;
    }
}
function ZNo(e) {
    if (e.outcome === "needs_approval") {
        return e.suggestions ?? [];
    }
    return [];
}
function gLr([t, ...r], toolName_1) {
    if (t === undefined || r.length > 0 || !zfe(toolName_1)) {
        return;
    }
    let { toolName, ruleContent } = Un(t);
    if (toolName === toolName_1 && ruleContent !== undefined && _n({
        toolName: toolName_1,
        ruleContent
    }) === t && Dxe(ruleContent).type !== "exact") {
        return {
            toolName: toolName_1,
            ruleContent
        };
    }
}
function w6n() {
    if (!m()) {
        return false;
    }
    try {
        return yg().errors.length === 0 && !qe.isSandboxEnabledInSettings() && !qe.isSandboxingEnabled();
    } catch  {
        return false;
    }
}
function p(e, n) {
    let t = gLr(n.offered, n.toolName);
    return w6n() && t !== undefined && e.toolName === t.toolName && e.ruleContent === t.ruleContent;
}
function e$o(e) {
    if (e.offeredStandingUpdates.length > 0 && w6n()) {
        return [
            ...e.sessionPermissionUpdates,
            ...e.offeredStandingUpdates
        ];
    }
    return e.sessionPermissionUpdates;
}
const max_call_ms = 50000;
const pLn_1 = pLn;
const max_in_flight = 4;
const maxTimeoutMs = 45000;
const g = {
    sandbox: "tool_default",
    background: "forbidden",
    pinCwd: true,
    scrubCredentialEnv: true,
    maxTimeoutMs,
    get additionalDenyRead () {
        return gke();
    },
    get additionalDenyWrite () {
        return gke();
    }
};
const A = "Approvals are asked in this session. This machine's rules and hooks still apply. Commands run as they would locally in that folder (sandboxed when its settings sandbox them), foreground only, from the project directory, without credential variables, up to 45 s each.";
const uFt = new Set([
    "dangerouslyDisableSandbox",
    ...[]
]);
function t$o(e = {}) {
    return {
        name: "interim_floor",
        kind: "personal_machine",
        requireEnvelope: true,
        admission: "device_binding",
        stance: {
            mode: "session",
            honorLocalRules: true,
            onAsk: "session",
            askOnDestructive: e.askOnDestructive ?? false,
            unattended: "own_record"
        },
        limits: {
            max_call_ms,
            max_command_ms: g.maxTimeoutMs,
            max_request_bytes: pLn_1,
            max_in_flight
        },
        serves: (t)=>mX.has(t.name) && vb(t).supported,
        constraints: (t, r)=>{
            let i = vb(t);
            return uun(g, i.supported ? i.tighten : undefined);
        },
        refusedInputFields: (t)=>{
            let r = vb(t);
            return (r.supported ? r.refusedInputFields ?? [] : []).filter((a)=>!uFt.has(a));
        },
        notes: ()=>A
    };
}
const pJe = 8;
const n$o = 1800000;
const v6n = 300000;
const _ = 256;
const v = 16;
const cun = 512;
function r$o(e, n, t) {
    return n === e.toolName && mQ(n, qs(t, [
        Or,
        TCe
    ])) === mQ(n, e.evaluatedInput);
}
function o$o(e) {
    return {
        behavior: "deny",
        message: e !== undefined && e.trim() !== "" ? Wc(e) : "The person declined this call in the session — it did not run.",
        decisionReason: {
            type: "other",
            reason: mun
        },
        decideLocation: "ask-path"
    };
}
async function s$o(e, n, t, r) {
    if (n === undefined || n.length === 0 || !W$()) {
        return;
    }
    let i = nRt(n.flatMap((o)=>{
        let s = I2().safeParse(o);
        let [l, ...S] = s.success && s.data.type === "addRules" && s.data.behavior === "allow" ? s.data.rules : [];
        if (l !== undefined && S.length === 0 && (l.ruleContent?.length ?? 0) <= cun && p(l, r)) {
            return [
                {
                    type: "addRules",
                    behavior: "allow",
                    destination: "session",
                    rules: [
                        l
                    ]
                }
            ];
        }
        return [];
    }));
    if (i.length > 0) {
        e.offeredStandingUpdates = [
            ...e.offeredStandingUpdates,
            ...i
        ].slice(-_);
        oc(t.callId, "offered standing rule held", {
            rules: i.length
        });
    }
    let a = n.flatMap((o)=>{
        let s = I2().safeParse(o);
        if (s.success && s.data.type === "addRules" && s.data.behavior === "allow" && s.data.rules.length > 0 && s.data.rules.length <= v && s.data.rules.every((l)=>l.toolName.length <= cun && (l.ruleContent?.length ?? 0) <= cun && O(l, r))) {
            return [
                s.data
            ];
        }
        return [];
    });
    let d = nRt(a.map((o)=>{
        if (o.destination === "session" || o.destination === "localSettings") {
            return o;
        }
        return {
            ...o,
            destination: "session"
        };
    }));
    let c = d.filter((o)=>o.destination === "session");
    let u = d.filter((o)=>o.destination === "localSettings");
    if (d.length > 0 && a.some((o)=>o.destination !== "session" && o.destination !== "localSettings")) {
        t.destinationDowngraded = true;
    }
    let f = Ndt() ? u.map((o)=>({
            ...o,
            destination: "session"
        })) : [];
    if (c.length + f.length > 0) {
        e.sessionPermissionUpdates = [
            ...e.sessionPermissionUpdates,
            ...c,
            ...f
        ].slice(-_);
    }
    if (u.length > 0) {
        await kB(u);
    }
    if (d.length > 0) {
        oc(t.callId, "standing approval kept", {
            session_rules: c.length,
            local_settings_rules: u.length,
            downgraded: t.destinationDowngraded
        });
    }
}
function O(e, n) {
    let command = n.input.command;
    return e.toolName === n.toolName && typeof command === "string" && e.ruleContent !== undefined && e.ruleContent === command.trim() && !e.ruleContent.includes("*");
}
function C(hostRules) {
    if (hostRules === "none") {
        return;
    }
    let auto_mode = ddo(T(AR()));
    if (auto_mode === undefined) {
        return undefined;
    }
    return {
        auto_mode
    };
}
function T(e) {
    return e;
}
function i$o(e) {
    let message = Wc(e.ask.message);
    return {
        envelope: {
            v: v_1,
            outcome: "needs_approval",
            ...e.facts.envelope && {
                call_id: e.facts.envelope.call_id
            },
            target: e.target,
            ask_id: e.askId,
            tool: e.toolName,
            input: e.ask.input,
            message,
            ...e.ask.decisionReason !== undefined && {
                decision_reason: e.ask.decisionReason
            },
            ...e.ask.suggestions.length > 0 && {
                suggestions: [
                    ...e.ask.suggestions
                ]
            },
            classifier_eligible: e.ask.classifierEligible,
            prior_answer_ok: e.ask.priorAnswerOk,
            ...e.notes.length > 0 && {
                notes: [
                    ...e.notes
                ]
            },
            ...e.ask.classifierEligible && C(e.hostRules),
            elicitation: {
                mode: "form",
                message,
                requestedSchema: {
                    type: "object",
                    properties: {
                        decision: {
                            type: "string",
                            enum: [
                                "allow",
                                "deny"
                            ],
                            description: `Whether ${e.toolName} may run this call on ${e.target.name}`
                        },
                        feedback: {
                            type: "string",
                            description: "Optional words for Claude with the decision"
                        }
                    },
                    required: [
                        "decision"
                    ]
                },
                _meta: {
                    [qI]: {
                        ask_id: e.askId,
                        ...e.facts.envelope && {
                            call_id: e.facts.envelope.call_id
                        },
                        input_fingerprint: e.inputFingerprint,
                        classifier_eligible: e.ask.classifierEligible,
                        prior_answer_ok: e.ask.priorAnswerOk
                    }
                }
            }
        },
        content: [
            {
                type: "text",
                text: `${e.toolName} on ${e.target.name} needs approval in this session before it runs: ${message}`
            }
        ]
    };
}
function a$o(target, n, ask_id) {
    return {
        envelope: {
            v: v_1,
            outcome: "acknowledged",
            ...n.envelope && {
                call_id: n.envelope.call_id
            },
            target,
            ask_id
        },
        content: [
            {
                type: "text",
                text: `The refusal was recorded on ${target.name} \u2014 nothing ran.`
            }
        ]
    };
}
function Sie() {
    try {
        return k("tengu_violin_fhole", false) === true;
    } catch  {
        return false;
    }
}
export { ZNo, gLr, w6n, e$o, uFt, t$o, pJe, n$o, v6n, cun, r$o, o$o, s$o, i$o, a$o, Sie };
