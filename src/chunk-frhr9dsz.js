import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { ot, W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { byr } from "/$bunfs/root/chunk-dck8836g.js";
import { zd as v_1, Wc, V$, pn, p_ } from "/$bunfs/root/chunk-4r6b8efh.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Zi, Ln, S8, Pd } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ht, Xt, Be } from "/$bunfs/root/chunk-6dwnw6av.js";
import { qs } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { BY, jSe } from "/$bunfs/root/chunk-52bcnmbr.js";
import { vz } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { ejn } from "/$bunfs/root/chunk-k3tkc302.js";
import { Vwt, GHe, ju, eor, uM, QU, mk, Hl, yJ, gD, I2e, Tvt, slr, Kl } from "/$bunfs/root/chunk-kasbfbhj.js";
import { lQ } from "/$bunfs/root/chunk-40xcrb3y.js";
import { ev } from "/$bunfs/root/chunk-n687sxb1.js";
import { xin } from "/$bunfs/root/chunk-6kpf2nxr.js";
import { d9e, CVn, SMo, wIr, Cin, wMo, EIr, vMo, EMo } from "/$bunfs/root/chunk-ve4w0rhj.js";
import { F0t, xVn, TIr } from "/$bunfs/root/chunk-vszxt5cc.js";
import { RVn, $0t } from "/$bunfs/root/chunk-s9xhawv4.js";
import { KPe, u9e } from "/$bunfs/root/chunk-3hmyb6mq.js";
import { Rje } from "/$bunfs/root/chunk-s248m269.js";
import { rt } from "/$bunfs/root/chunk-xx1j2680.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
import { randomUUID } from "crypto";
function w() {
    return vz.CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT === true;
}
const b = new Set([
    Be,
    rt,
    ht,
    Xt,
    Zi
]);
const v = 12582912;
function pUs(e, t) {
    let n = EVn(e, t);
    return n && {
        experimental: {
            [d9e]: n
        }
    };
}
function EVn(e, t) {
    if (!w() || t === undefined) {
        return;
    }
    let n = k(e(), t);
    if (!EIr(n.deny_rules)) {
        m("mcp_serve_tool_output", "deny_rules_over_bounds");
        return;
    }
    let tool_host_interface = wIr() ? xin() : undefined;
    return {
        ...n,
        ...tool_host_interface !== undefined && {
            tool_host_interface
        }
    };
}
function bIr(e) {
    if (!w() || !wIr()) {
        return false;
    }
    return Cin(sr(e) ? e[d9e] : undefined);
}
function k(e, t) {
    return EMo({
        tools: R(e),
        denyRules: t.alwaysDenyRules.cliArg ?? []
    });
}
async function fUs({ name, args, meta, tools, launchPermissionContext, newCall, startHeartbeat }) {
    let u = wMo(meta);
    if (u.kind === "absent") {
        return;
    }
    let a = xVn(meta).kind === "absent" ? A(u, name, tools, launchPermissionContext) : p("invalid_request", `${name} was not run: a call that carries _meta["${F0t}"] is answered only as a plain call. Call it without asking for its output object.`, "carries_asks_key");
    if ("refusal" in a) {
        f("mcp_serve_tool_output", a.reason, {
            tool: Ain(name)
        });
        return tft(a.refusal);
    }
    let { toolUseContext, release } = newCall();
    try {
        let l = await P(a.tool, args, C(toolUseContext, a.launchPermissionContext), startHeartbeat);
        if (!toolUseContext.abortController.signal.aborted) {
            let tool = Ain(a.tool.name);
            if ("unsent" in l) {
                m("mcp_serve_tool_output", l.unsent, {
                    tool
                });
            } else if (l.objection === "crashed_check") {
                m("mcp_serve_tool_output", l.objection, {
                    tool
                });
            } else if (l.objection !== undefined) {
                f("mcp_serve_tool_output", l.objection, {
                    tool
                });
            } else {
                g("mcp_serve_tool_output", {
                    tool,
                    answer: d(l.answer),
                    safety_ask_skipped: l.wasSafetyAskSkipped === true,
                    ...l.wasOutputCut && {
                        output_cut: true
                    }
                });
            }
        }
        return l.result;
    } finally{
        release();
    }
}
function A(e, name, tools, launchPermissionContext) {
    if (!w()) {
        return p("unsupported_protocol", `${name} was not run: this server is not set up to return output objects (CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT is not on). Call it without asking for its output object.`);
    }
    if (launchPermissionContext === undefined) {
        return p("unsupported_protocol", `${name} was not run: this server holds no permission rules (CLAUDE_CODE_MCP_SERVE_SETTINGS was unset or empty when it started), and it returns output objects only for calls it can judge. Call it without asking for its output object.`, "no_launch_rules");
    }
    let { deny_rules } = k(tools, launchPermissionContext);
    if (!EIr(deny_rules)) {
        return p("unsupported_protocol", `${name} was not run: this server was launched with more or longer deny rules than it can advertise, so it returns no output objects. Call it without asking for its output object.`, "deny_rules_over_bounds");
    }
    if (e.kind === "malformed") {
        return p("invalid_request", `${name} was not run: _meta["${d9e}"] must be exactly { versions, deny_rules_digest }. versions: up to 64 whole numbers. deny_rules_digest: the SHA-256 of JSON.stringify(deny_rules), for the deny_rules this server advertises, as 64 lower-case hex characters.`);
    }
    if (e.kind === "no_shared_version") {
        return p("unsupported_protocol", `${name} was not run: this server returns output objects only in version ${CVn.join(", ")}, and the request lists ${e.versions.join(", ") || "none"}.`);
    }
    if (e.denyRulesDigest !== vMo(deny_rules)) {
        return p("unsupported_protocol", `${name} was not run: the request's deny_rules_digest is not that of the deny_rules this server advertises. Reconnect and read them again.`, "deny_rules_digest_mismatch");
    }
    let tool = pn(tools, name);
    if (tool === undefined) {
        return p("not_served", `${name} was not run: this server has no tool by that name.`);
    }
    if (b.has(name)) {
        return {
            tool,
            launchPermissionContext
        };
    }
    return p("not_served", `${name} was not run: the tools this server answers with an output object are ${R(tools).join(", ") || "none"}. Call it without asking for its output object.`);
}
function SIr(e) {
    return b.has(e);
}
function R(e) {
    return e.map((t)=>t.name).filter((t)=>b.has(t));
}
function Ain(e) {
    if (b.has(e)) {
        return Ln(e);
    }
    return S8(e);
}
function tft(e) {
    return V$({
        envelope: {
            v: v_1,
            outcome: "refused",
            target: $0t(),
            ...e
        },
        content: Wc(e.message)
    });
}
function p(code, message, reason = code) {
    return {
        refusal: {
            code,
            message
        },
        reason
    };
}
async function P(tool, args, n, startHeartbeat) {
    let s = {
        ...args
    };
    let r = KPe.filter((h)=>h in s);
    let i = r.length > 0 ? [
        u9e(r)
    ] : [];
    let u = await x(tool, qs(s, r), n);
    if ("rejection" in u) {
        return {
            result: c9e(u.rejection, I(u.objection), i),
            answer: "not_run",
            objection: u.objection
        };
    }
    let a = await kVn(tool, u.input, n, startHeartbeat);
    return {
        ..."failure" in a ? {
            result: c9e(a.failure, "ran", i),
            answer: "tool_failed"
        } : TVn(tool, a.data, i),
        wasSafetyAskSkipped: u.wasSafetyAskSkipped
    };
}
async function x(tool, t, n) {
    try {
        if (!tool.isEnabled()) {
            return {
                rejection: `Tool ${tool.name} is not enabled`
            };
        }
        let o = p_(tool, t);
        if (!o.success) {
            return {
                rejection: `InputValidationError: ${gD(tool.name, o.error)}`
            };
        }
        let s = await tool.validateInput?.(o.data, n);
        if (s !== undefined && !s.result) {
            return {
                rejection: s.message,
                ...s.deniedByPermissionRule === true && {
                    objection: "deny_rule"
                }
            };
        }
        let r = await S(tool, o.data, n);
        if ("rejection" in r) {
            return r;
        }
        return {
            input: o.data,
            ...r
        };
    } catch (error) {
        JBe(tool, error);
        return {
            rejection: yJ(error)
        };
    }
}
function C(toolUseContext, t) {
    let n = {
        ...ev(),
        toolPermissionContext: {
            ...t,
            sandboxAutoAllowSuspended: true
        }
    };
    return {
        ...toolUseContext,
        inputFromAnotherMachine: true,
        toolUseId: `toolu_${randomUUID()}`,
        getAppState: ()=>n
    };
}
async function S(e, t, n) {
    let ask = await mk(e, t, n, {
        crashIsObjection: true
    }).catch((i)=>{
        if (n.abortController.signal.aborted) {
            throw i;
        }
        JBe(e, i);
        return "crashed";
    });
    if (ask === null) {
        return {
            wasSafetyAskSkipped: false
        };
    }
    if (ask === "crashed" || ask.decisionReason?.type === "other" && ask.decisionReason.reason === QU) {
        return {
            rejection: `${e.name} was not run: the permission rules could not be evaluated for this call (internal error).`,
            objection: "crashed_check"
        };
    }
    if (ask.behavior === "deny") {
        return {
            rejection: ask.message,
            objection: "deny_rule"
        };
    }
    if (uM(ask)) {
        return {
            rejection: `${e.name} was not run: a permission rule says to ask a person before a call like this one, and a call that runs in this environment cannot ask. Retrying won't help while that rule is in effect.`,
            objection: "ask_rule"
        };
    }
    let s = Hl(ask.decisionReason, jSe);
    if (s !== undefined) {
        return {
            rejection: slr(eor(ask, s)),
            objection: "circuit_breaker"
        };
    }
    let r = Hl(ask.decisionReason, BY) !== undefined;
    if (!r && Hl(ask.decisionReason) !== undefined) {
        return {
            wasSafetyAskSkipped: true,
            ask
        };
    }
    return {
        rejection: `${e.name} was not run: ${ask.message} A call that runs in this environment cannot put that to a person. Retrying won't help.`,
        objection: r ? "circuit_breaker" : "other_ask"
    };
}
async function mUs(e, t, toolUseContext, o, s) {
    if (o === undefined) {
        return {
            toolUseContext
        };
    }
    let r = {
        ...C(toolUseContext, o),
        inputFromAnotherMachine: toolUseContext.inputFromAnotherMachine
    };
    let { toolUseId } = r;
    let u = toolUseId === undefined ? undefined : {
        toolUseId,
        opened: Vwt(r, toolUseId, e.name)
    };
    let a = await S(e, t, {
        ...r,
        permissionPhase: undefined,
        permissionRound: u?.opened
    }).catch((y)=>{
        if (u) {
            GHe(r, u.toolUseId, u.opened);
        }
        throw y;
    });
    let permissionPhase = (u && GHe(r, u.toolUseId, u.opened)) ?? {};
    if (!("rejection" in a)) {
        let y = await TIr(s, e, t, r.session, a.ask);
        if (y !== "run" && y !== "as_without_the_key") {
            return y;
        }
        g("mcp_serve_plain_call", y === "run" ? {
            safety_ask_skipped: false,
            caller_attested: true
        } : {
            safety_ask_skipped: a.wasSafetyAskSkipped
        });
        return {
            toolUseContext: {
                ...r,
                permissionPhase
            }
        };
    }
    if (a.objection === "crashed_check") {
        m("mcp_serve_plain_call", a.objection);
    } else {
        f("mcp_serve_plain_call", a.objection);
    }
    return {
        rejection: a.rejection
    };
}
function I(objection) {
    switch(objection){
        case undefined:
            return "validation_failed";
        case "ask_rule":
        case "circuit_breaker":
        case "other_ask":
            return "ask_refused_no_surface";
        case "deny_rule":
        case "crashed_check":
            return "denied_by_rule";
    }
}
async function kVn(e, t, n, o, s = ju) {
    using r = o();
    try {
        let { data } = await e.call(t, n, s, Kl({
            content: []
        }), undefined, {
            gitDiffRead: true
        });
        return {
            data
        };
    } catch (error) {
        JBe(e, error);
        return {
            failure: yJ(error)
        };
    }
}
function JBe(e, t) {
    if (I2e(t) || Tvt(t).isSad) {
        return;
    }
    let n = W(t);
    c("telemetryMessage" in n ? n : ot(n, `mcp server tool '${e.name}' threw`));
}
function TVn(e, t, n, o) {
    try {
        let s = U(e, t, o).map(({ output, ...rest })=>({
                ...rest,
                result: RVn(`${e.name} ran. Its output is in this answer's structured content.`, output, false, n)
            })).find(({ result })=>Buffer.byteLength(_(result), "utf8") <= v);
        if (s === undefined) {
            return O(e, "result_too_large", n);
        }
        return {
            ...s,
            answer: "output",
            ...E(e, t) && {
                wasOutputCut: true
            }
        };
    } catch (error) {
        c(ot(W(error), `mcp server tool '${e.name}' output could not be encoded`));
        return O(e, "result_unbuildable", n);
    }
}
function U(e, output_1, n) {
    if (e.name !== ht || !sr(output_1)) {
        return [
            {
                output: L(e, output_1)
            }
        ];
    }
    let output = {
        ...output_1,
        originalFile: null
    };
    if (typeof output_1.originalFile !== "string" || n === undefined) {
        return [
            {
                output
            }
        ];
    }
    if (n.isSubagent) {
        return [
            {
                output,
                originalFileLeftOutReason: "for_subagent"
            }
        ];
    }
    if (n.sessionVersion < byr.editOriginalFile) {
        return [
            {
                output,
                originalFileLeftOutReason: "older_session"
            }
        ];
    }
    if (Buffer.byteLength(output_1.originalFile, "utf8") > SMo) {
        return [
            {
                output,
                originalFileLeftOutReason: "over_limit"
            }
        ];
    }
    return [
        {
            output: output_1
        },
        {
            output,
            originalFileLeftOutReason: "answer_too_large"
        }
    ];
}
function L(e, output) {
    if (E(e, output)) {
        let n = output.persistedOutputSize;
        let s = `(output truncated: ${typeof n === "number" ? `the command printed ${Qt(n)}; ` : ""}only the start was returned, so a saved copy of this result holds no more. To see the rest, run the command again with ${Rje(e.name)}, if that is safe.)
`;
        let r = Math.max(lQ(), ejn) - s.length;
        return {
            ...output,
            stdout: `${s}${ne(output.stdout, r)}`
        };
    }
    switch(e.name){
        case Xt:
            return e.stripForStorage?.(output) ?? output;
        case Zi:
            return F(output, {
                original_file: "",
                updated_file: ""
            });
        default:
            return output;
    }
}
function E(e, t) {
    return e.name === Be && sr(t) && typeof t.stdout === "string" && Boolean(t.persistedOutputPath) && t.isImage !== true;
}
function F(e, t) {
    if (sr(e)) {
        return {
            ...e,
            ...t
        };
    }
    return e;
}
function O(e, unsent, n) {
    return {
        result: AVn(`${e.name} ran, but its result could not be sent back. Check what it changed before running it again.`, n),
        unsent
    };
}
function AVn(e, t) {
    return V$({
        envelope: {
            v: v_1,
            outcome: "failed",
            target: $0t(),
            code: "internal_error",
            message: e,
            ...t.length > 0 && {
                notes: t
            }
        },
        content: e
    });
}
function c9e(e, disposition, n) {
    let content = Pd(e);
    return V$({
        envelope: {
            v: v_1,
            outcome: "completed",
            target: $0t(),
            is_error: true,
            content,
            disposition,
            ...n.length > 0 && {
                notes: n
            }
        },
        content
    });
}
export { pUs, EVn, bIr, fUs, SIr, Ain, tft, mUs, kVn, JBe, TVn, AVn, c9e };
