import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { BE, Vks, lue, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Vn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { nc, Ke, ot, W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { qk } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { un, Dg, _9, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { SUe, ipe, dZ, qnn, Fko, b5e, nCr, S5e } from "/$bunfs/root/chunk-52bcnmbr.js";
import { Qs } from "/$bunfs/root/chunk-2d9a83dh.js";
import { jo } from "/$bunfs/root/chunk-223dyewd.js";
import { wn, Qu, si, Y6e, Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { zT } from "/$bunfs/root/chunk-k3tkc302.js";
import { Nen, wR } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { yCe, de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { GI, d4e, kB } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { hyr, fgs } from "/$bunfs/root/chunk-4r6b8efh.js";
import { _0n, mRt, L4, Sh } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { AB } from "/$bunfs/root/chunk-6kvd67n5.js";
import { Gj, fnr, s2, TVt, yet, $ae, _9o, b9o, Fae, awt, x3r, Snr, hke, jae, Wae, qVt, n2e, fqt, STn, vTn, WK, zK, ntt, ju, tne, TTn, mk, Hl, jQo, uAn, hM } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Jo } from "/$bunfs/root/chunk-62g69mqc.js";
import { j2 } from "/$bunfs/root/chunk-8yak0fbv.js";
import { Jye } from "/$bunfs/root/chunk-5ne6jp11.js";
import { sD } from "/$bunfs/root/chunk-88awaqqw.js";
import { mK } from "/$bunfs/root/chunk-566pera2.js";
import { Vfn } from "/$bunfs/root/chunk-nb9araah.js";
import { xLe } from "/$bunfs/root/chunk-44wb0bsv.js";
import { vw } from "/$bunfs/root/chunk-r8t1dcyg.js";
import { mu } from "/$bunfs/root/chunk-b7w13qrv.js";
import { zp } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { IR, o, M, oe, u, Ue, ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { randomUUID } from "crypto";
import { isDeepStrictEqual } from "util";
const Fe = p(()=>u({
        tool_name: o().describe("The name of the tool requesting permission"),
        input: ue(o(), oe()).describe("The input for the tool"),
        tool_use_id: o().optional().describe("The unique tool use request ID")
    }));
const ee = p(()=>U([
        "user_temporary",
        "user_permanent",
        "user_reject"
    ]).optional().catch(undefined));
const re = (n)=>u({
        behavior: A("allow"),
        updatedInput: ue(o(), oe()).optional(),
        updatedPermissions: yet(n, "SDK host"),
        toolUseID: o().optional(),
        decisionClassification: ee()
    });
const ne = p(()=>u({
        behavior: A("deny"),
        message: o(),
        interrupt: M().optional(),
        toolUseID: o().optional(),
        decisionClassification: ee()
    }));
const iUt = p(()=>Ue([
        re("refused"),
        ne()
    ]));
const ye = p(()=>Ue([
        re("cut"),
        ne()
    ]));
function qje(n) {
    if (n === "strict") {
        return ye();
    }
    return iUt();
}
const f5n = `Expected {behavior: 'allow', updatedInput?: object} or {behavior: 'deny', message: string}. ${TVt}`;
function q(n, e, l, r, m) {
    if (r.forRemoteExecution === true || BE(r)) {
        return;
    }
    let s = n && L4(n, e.suppressesAlwaysAllowRule?.(l) === true || m ? undefined : mRt(e, l), de(r));
    if (s && e.suppressesAllPermissionUpdates?.(l) === true) {
        let h = zK(s);
        if (h.length > 0) {
            return h;
        }
        return undefined;
    }
    if (s && (e.suppressesAlwaysAllowRule?.(l) === true || m)) {
        return WK(s, e, de(r));
    }
    return s;
}
function aUt(n, e, l, r, m, s) {
    switch(n.kind){
        case "launcher":
            {
                let h = q(e, l, r, m, s);
                if (h?.length) {
                    m.setSessionToolPermissionContext((g)=>GI(g, h));
                    setImmediate(()=>{
                        sD.emit();
                    });
                    kB(h, m.storageV5).catch(c);
                }
                return {
                    applied: h ?? [],
                    lostTightenings: 0
                };
            }
        case "strict":
            return Snr(n, e, {
                vetoed: ()=>false,
                strip: (h)=>q(h, l, r, m, s) ?? [],
                toolName: zp(l),
                input: r,
                setContext: m.setSessionToolPermissionContext
            });
    }
}
function XIe(n, toolResult, l, r, m, s = l, h = false) {
    let decisionReason = {
        type: "permissionPromptTool",
        permissionPromptToolName: l.name,
        toolResult
    };
    if (toolResult.behavior === "allow") {
        let P = toolResult.updatedPermissions?.findLast((_)=>_.type === "setMode")?.mode;
        if (P === "default" || P === "acceptEdits") {
            Y6e(P);
        }
        switch(n.kind){
            case "launcher":
                {
                    aUt(n, toolResult.updatedPermissions, s, r, m, h);
                    let updatedInput = toolResult.updatedInput && Object.keys(toolResult.updatedInput).length > 0 ? toolResult.updatedInput : s2(s.name, r);
                    return {
                        ...toolResult,
                        updatedInput,
                        decisionReason
                    };
                }
            case "strict":
                {
                    let _ = _9o(toolResult.updatedInput, r, s);
                    let d = _ === undefined ? b9o(n, toolResult.updatedInput, r, s) : undefined;
                    let f = _ ?? d?.input;
                    if (f === undefined) {
                        return Fae(s.name, toolResult.toolUseID);
                    }
                    if (f !== r && Sh(de(m), s, f, "deny") !== null) {
                        d?.onRefused("deny_rule");
                        return Fae(s.name, toolResult.toolUseID);
                    }
                    let { lostTightenings } = aUt(n, toolResult.updatedPermissions, s, d?.input ?? r, m, h);
                    if (lostTightenings > 0) {
                        return awt(s.name, toolResult.toolUseID);
                    }
                    return {
                        ...toolResult,
                        updatedInput: f,
                        decisionReason
                    };
                }
        }
    } else if (toolResult.behavior === "deny" && toolResult.interrupt) {
        t(`SDK permission prompt deny+interrupt: tool=${l.name} message=${toolResult.message}`);
        wR(m.abortController).abort();
    }
    return {
        ...toolResult,
        decisionReason,
        decideLocation: "ask-path"
    };
}
function m5n(n, e, l) {
    if (a.CLAUDE_CODE_DISABLE_PERMISSION_PROMPT_NOTIFY_HOOKS) {
        return ()=>{};
    }
    let r = setTimeout((m, storageV5, credentials)=>{
        hM(Gj(), {
            message: `Claude needs your permission to use ${m}`,
            notificationType: "permission_prompt"
        }, {
            storageV5,
            credentials
        }).catch(()=>{});
    }, qVt, n, e, l);
    r.unref();
    return ()=>clearTimeout(r);
}
const Pe = "tengu_cinder_swift";
function p5n() {
    return k(Pe, "off") === "interrupt";
}
function j(tool, e) {
    try {
        return tool.getToolUseSummary?.(e) ?? tool.getActivityDescription?.(e) ?? "";
    } catch (error) {
        t(`describeToolUseForPush failed: ${error}`, {
            level: "error"
        });
        return "";
    }
}
function ie(tool, e) {
    return se(tool, e)?.card;
}
function se(tool, e) {
    if (!tool.requiresUserInteraction?.()) {
        return;
    }
    switch(tool.name){
        case Jo:
            {
                let l = Array.isArray(e?.questions) ? e.questions : [];
                let r = l[0];
                let m = r?.header || r?.question;
                let s = l.length > 1 ? ` (+${l.length - 1} more)` : "";
                return {
                    label: "Question",
                    body: m ? m + s : "Tap to answer"
                };
            }
        case vw:
            return {
                label: "Plan",
                body: "Plan ready for review"
            };
        case xLe:
            return {
                label: mK(tool.name),
                body: ""
            };
        case Jye:
            {
                let l = typeof e?.reason === "string" ? jo(_9(Dg(e.reason)), 200).replace(/[\s.!?]+$/u, "") : "";
                return {
                    label: "Claude in Chrome",
                    body: l ? `Let Claude use your browser for ${l}? Open this task on your computer.` : "Let Claude use your browser? Open this task on your computer.",
                    card: {
                        title: "Set up Claude in Chrome on your computer",
                        description: "Claude wants to use your browser through Claude in Chrome. To set it up, open this task in the Claude app on a computer; any answer here skips it."
                    }
                };
            }
        default:
            return {
                label: mK(tool.name),
                body: ""
            };
    }
}
function te(tool, e, tool_use_id, suppressed_request_id, m) {
    let decision_reason_code = dZ(m?.decisionReason);
    let h = {
        ...m?.decisionReason && {
            decision_reason_type: m.decisionReason.type
        },
        ...decision_reason_code && {
            decision_reason_code
        }
    };
    let g = se(tool, e);
    if (g) {
        return {
            tool_name: tool.name,
            display_tool_name: g.label,
            action_description: g.body,
            raw_command: undefined,
            tool_use_id,
            request_id: "",
            ...suppressed_request_id && {
                suppressed_request_id
            },
            input: e,
            ...h
        };
    }
    let raw_command = (tool.name === Be || tool.name === Ct) && typeof e.command === "string" ? _9(e.command) : undefined;
    let action_description = raw_command !== undefined ? typeof e.description === "string" && e.description && !j2(tool) && !mu(e) ? _9(e.description) : jo(raw_command, zT) : _9(j(tool, e));
    return {
        tool_name: tool.name,
        display_tool_name: mK(tool.name),
        action_description,
        raw_command,
        tool_use_id,
        request_id: m?.localDisplayOnly === true ? "" : suppressed_request_id,
        ...m?.localDisplayOnly === true && suppressed_request_id && {
            suppressed_request_id
        },
        input: e,
        ...h
    };
}
const _e = 3;
function me(n) {
    let { promise, resolve } = Promise.withResolvers();
    let { ask, tool, input, toolUseContext, toolUseID, isWaiting } = n;
    if (!k("tengu_drifting_dream", false) || n.answers.kind !== "launcher" || n.forced || toolUseContext.hookAskFloor === true || ask.personOnly === true || toolUseContext.forRemoteExecution === true || AB(zp(tool)) || Vfn(ask, tool, toolUseContext)) {
        return {
            allowed: promise,
            stop: ()=>{}
        };
    }
    let _ = 0;
    let d = (y)=>{
        if (!isWaiting()) {
            return;
        }
        let T = de(toolUseContext);
        if (si(qk(tool, T), T.servedCall === true)) {
            return;
        }
        let S = ++_;
        let E = yCe(toolUseContext);
        ju(tool, input, {
            ...toolUseContext,
            permissionRound: undefined
        }, n.assistantMessage, toolUseID).then((b)=>{
            if (!isWaiting() || S !== _) {
                return;
            }
            if (!isDeepStrictEqual(yCe(toolUseContext), E)) {
                if (y < _e) {
                    d(y + 1);
                }
                return;
            }
            if (b.behavior === "allow" && ce(b.decisionReason)) {
                stop();
                resolve(b);
            }
        }).catch((b)=>{
            if (!Ke(b)) {
                c(ot(W(b), "permissionRecheckSignal: hasPermissionsToUseTool failed for a waiting can_use_tool ask"));
            }
        });
    };
    let stop = sD.subscribe(()=>d(0));
    if (!isDeepStrictEqual(yCe(toolUseContext), n.askedUnder)) {
        d(0);
    }
    return {
        allowed: promise,
        stop
    };
}
function ce(decisionReason) {
    switch(decisionReason?.type){
        case "rule":
            return true;
        case "mode":
            return decisionReason.mode === "default" || decisionReason.mode === "acceptEdits" || decisionReason.mode === "bypassPermissions";
        case "subcommandResults":
            {
                let e = [
                    ...decisionReason.reasons.values()
                ].filter((l)=>l.behavior !== "allow" || l.decisionReason?.type !== "other" || l.decisionReason.reason !== ipe);
                return e.length > 0 && e.every((l)=>l.behavior === "allow" && ce(l.decisionReason));
            }
        default:
            return false;
    }
}
function XBo(answers, e) {
    let l = async (tool, m, toolUseContext, assistantMessage, g, P)=>{
        let askedUnder = yCe(toolUseContext);
        let ask;
        switch(answers.kind){
            case "launcher":
                ask = P ?? await ju(tool, m, toolUseContext, assistantMessage, g);
                break;
            case "strict":
                ask = P ?? await tne(tool, m, toolUseContext, assistantMessage, g, answers, undefined);
                break;
        }
        if (ask.behavior === "allow") {
            return ask;
        }
        if (ask.behavior === "deny") {
            if (wn() && !toolUseContext.abortController.signal.aborted) {
                return Qu();
            }
            if (!SUe(ask)) {
                e.emitPermissionDenied(tool.name, g, toolUseContext.agentId, ask);
            }
            return ask;
        }
        if (toolUseContext.abortController.signal.aborted) {
            return {
                behavior: "deny",
                message: "Tool permission request aborted",
                toolUseID: g,
                decisionReason: S5e,
                decideLocation: "ask-path"
            };
        }
        if (wn()) {
            return Qu();
        }
        if (tool.askInputPreparer !== undefined && !B.has(ask) && toolUseContext.forRemoteExecution !== true) {
            let C = await tool.askInputPreparer(ask.updatedInput ?? m, toolUseContext, g);
            if (C !== undefined) {
                return Re(l, answers, C, ask, tool, m, toolUseContext, assistantMessage, g);
            }
        }
        let f = ask.updatedInput ?? m;
        let d_suggestions = ask.suggestions;
        if (tool.name === Be && typeof f.command === "string" && d_suggestions?.length && !d_suggestions.some((C)=>C.destination !== "session")) {
            d_suggestions = [
                ...fqt(f.command),
                ...d_suggestions
            ];
        }
        let T = new AbortController;
        let signal = toolUseContext.abortController.signal;
        let E = false;
        let b = ()=>{
            if (!wn()) {
                E = true;
            }
            T.abort(signal.reason);
        };
        signal.addEventListener("abort", b, {
            once: true
        });
        let D = randomUUID();
        let G = Vks(toolUseContext.agentContext);
        let K;
        let O;
        let F = false;
        let Y;
        try {
            let I = (ask.personOnly === true || B.has(ask) ? Promise.resolve(undefined) : Kje(answers, tool, g, f, toolUseContext, d_suggestions, ask.suppressAlwaysAllowRule === true, ()=>F || signal.aborted)).then((outcome)=>({
                    source: "hook",
                    outcome
                }));
            I.catch(()=>{});
            if (e.promptShown) {
                let R = te(tool, f, g, D, {
                    localDisplayOnly: ask.localDisplayOnly === true,
                    decisionReason: ask.decisionReason
                });
                K = G;
                e.promptShown(D, R, G, lue(toolUseContext.agentContext));
            }
            let w = ask.decisionReason;
            let L = Hl(w);
            let le = tool.name === Be || tool.name === Ct;
            let fe = pe.get(ask) || (ask.metadata && "command" in ask.metadata ? ask.metadata.command.description : undefined) || (le && typeof f.command === "string" ? typeof f.description === "string" && f.description ? _9(f.description) : jo(_9(f.command), zT) : j(tool, f)) || undefined;
            let x = ie(tool, f);
            let V = j2(tool) || tool.name === Ct && mu(f) ? undefined : fe ?? x?.description;
            let decision_reason = hke(w) ?? (w?.type === "subcommandResults" && L ? Hl(w, (R)=>!R.classifierApprovable && R.circuitBreaker !== "outsideReadsBlocked")?.reason ?? (L.circuitBreaker === "outsideReadsBlocked" ? undefined : L.reason) : undefined);
            let description = ask.localDisplayOnly ? Qs(un(decision_reason ?? "")) || V : V;
            let he = AB(zp(tool));
            let Z = m5n(mK(tool.name), toolUseContext.storageV5, toolUseContext.credentials);
            let N = e.request({
                subtype: "can_use_tool",
                tool_name: tool.name,
                ...tool.mcpInfo && {
                    mcp_server: fnr(tool.mcpInfo)
                },
                ...x && {
                    title: x.title
                },
                display_name: mK(tool.name),
                input: f,
                ...description && {
                    description
                },
                ...he && {
                    tool_kind: "browser"
                },
                permission_suggestions: d_suggestions,
                blocked_path: ask.blockedPath,
                decision_reason,
                decision_reason_type: w?.type,
                decision_reason_code: dZ(w),
                ...ask.matchedAskRule && {
                    matched_ask_rule: {
                        source: ask.matchedAskRule.source,
                        tool_name: ask.matchedAskRule.ruleValue.toolName,
                        ...ask.matchedAskRule.ruleValue.ruleContent !== undefined && {
                            rule_content: ask.matchedAskRule.ruleValue.ruleContent
                        }
                    }
                },
                classifier_approvable: L ? !Hl(w, (R)=>!R.classifierApprovable) : undefined,
                ...(w?.type === "rule" || w?.type === "other" && w.reason === vTn) && tool.mcpInfo?.effectiveMaxPermission === "ask" && {
                    decision_reason_code: "org_ask_ceiling"
                },
                tool_use_id: g,
                agent_id: toolUseContext.agentId,
                suppress_always_allow_rule: ask.suppressAlwaysAllowRule || tool.suppressesAlwaysAllowRule?.(f) === true && !(d_suggestions ?? []).some((R)=>(R.type === "addRules" || R.type === "replaceRules") && R.behavior === "allow" && R.rules.some((H)=>H.ruleContent !== undefined)) || undefined,
                default_to_no: ask.defaultToNo || undefined,
                provenance_prompt_line: ask.provenancePromptLine,
                requires_user_interaction: tool.requiresUserInteraction?.() || ask.localDisplayOnly || undefined
            }, T.signal, D).then((result)=>({
                    source: "sdk",
                    result
                }));
            N.catch(()=>{});
            N.then(()=>{
                F = true;
            }, ()=>{
                F = true;
            });
            if (e.isPending(D)) {
                O = {
                    logContext: {
                        tool,
                        input: f,
                        messageId: assistantMessage.message.id,
                        toolUseID: g,
                        permissionMode: de(toolUseContext).mode,
                        agentContext: toolUseContext.agentContext,
                        mcpClients: toolUseContext.options.mcpClients,
                        appliedAllowUpdates: (R)=>{
                            switch(answers.kind){
                                case "launcher":
                                    return q(R, tool, f, toolUseContext, ask.suppressAlwaysAllowRule === true);
                                case "strict":
                                    return;
                            }
                        }
                    },
                    shownAtMs: Date.now()
                };
                jQo(O.logContext, w?.type);
            }
            N.then(Z, Z);
            let v = await Promise.race([
                I,
                N
            ]);
            if (v.source === "hook") {
                if (v.outcome) {
                    if (wn() && !E) {
                        await Qu();
                    }
                    T.abort();
                    if (O) {
                        uAn(O.logContext, {
                            kind: "hook",
                            behavior: v.outcome.decision.behavior === "allow" ? "allow" : "deny",
                            permanent: v.outcome.permanent
                        }, O.shownAtMs);
                    }
                    if (v.outcome.interrupt) {
                        t(`Hook interrupt: tool=${tool.name} hookMessage=${v.outcome.decision.message}`);
                        wR(toolUseContext.abortController).abort();
                    }
                    return v.outcome.decision;
                }
                let R = me({
                    answers,
                    ask,
                    forced: P !== undefined,
                    askedUnder,
                    tool,
                    input: m,
                    toolUseContext,
                    assistantMessage,
                    toolUseID: g,
                    isWaiting: ()=>e.isPending(D) && !signal.aborted
                });
                Y = R.stop;
                let H = await Promise.race([
                    N.then(()=>{}),
                    R.allowed
                ]);
                if (H !== undefined && e.isPending(D)) {
                    if (wn() && !E) {
                        await Qu();
                    }
                    T.abort();
                    STn(toolUseContext, g);
                    if (O) {
                        uAn(O.logContext, {
                            kind: "recheck"
                        }, O.shownAtMs);
                    }
                    return H;
                }
            }
            let answer = v.source === "hook" ? (await N).result : v.result;
            if (O) {
                uAn(O.logContext, {
                    kind: "host_answer",
                    answer
                }, O.shownAtMs);
            }
            let z = XIe(answers, answer, tool, f, toolUseContext, tool, ask.suppressAlwaysAllowRule === true);
            if (z.behavior === "allow" && e.answeredAtHostDialog(D) && toolUseContext.forRemoteExecution !== true && hyr()) {
                fgs(toolUseContext.session, g, {
                    toolName: tool.name,
                    input: z.updatedInput ?? f
                });
            }
            return z;
        } catch (error) {
            if (wn() && e.isPending(D)) {
                await Qu();
            }
            if (e.interruptedAtStreamClose(D) && p5n()) {
                try {
                    i("tengu_auq_park_interrupted_at_stream_close", {
                        stream_closed: error instanceof nc
                    });
                    t(`Interrupting parked AskUserQuestion toolUseID=${g} at stream close (deny skipped; turn aborts as shutdown)`);
                } catch  {}
                throw error;
            }
            let message = x3r(answers, error, tool.name);
            let decisionReason = nCr;
            if (error instanceof IR) {
                t(`canUseTool returned a schema-invalid permission result for ${tool.name}: ${error.message.slice(0, 2000)}`, {
                    level: "error"
                });
                message = `The canUseTool callback returned an invalid permission result. ${f5n}`;
                decisionReason = b5e;
            } else if (error instanceof nc) {
                decisionReason = Fko;
            } else if (Ke(error) && signal.aborted) {
                message = "Tool permission request aborted";
                decisionReason = S5e;
                if (O && !Nen(signal)) {
                    uAn(O.logContext, {
                        kind: "turn_aborted"
                    }, O.shownAtMs);
                }
            }
            return {
                behavior: "deny",
                message,
                toolUseID: g,
                decisionReason,
                decideLocation: "ask-path"
            };
        } finally{
            Y?.();
            e.promptSettled(D, K);
            signal.removeEventListener("abort", b);
        }
    };
    return l;
}
var B = new WeakSet;
var pe = new WeakMap;
async function Re(n, answers, l, ask, tool, s, toolUseContext, assistantMessage, toolUseID) {
    let signal = toolUseContext.abortController.signal;
    let d = ()=>({
            behavior: "deny",
            message: "Tool permission request aborted",
            toolUseID,
            decisionReason: S5e,
            decideLocation: "ask-path"
        });
    if (ask.personOnly !== true) {
        let E;
        try {
            E = await Kje(answers, tool, toolUseID, ask.updatedInput ?? s, toolUseContext, ask.suggestions, ask.suppressAlwaysAllowRule === true, ()=>signal.aborted);
        } catch (error) {
            if (signal.aborted) {
                return d();
            }
            return {
                behavior: "deny",
                message: x3r(answers, error, tool.name),
                toolUseID,
                decisionReason: nCr,
                decideLocation: "ask-path"
            };
        }
        if (E !== undefined) {
            if (wn() && !signal.aborted) {
                return Qu();
            }
            if (E.interrupt) {
                wR(toolUseContext.abortController).abort();
            }
            return E.decision;
        }
    }
    let f = await l.prepare();
    if (signal.aborted) {
        if (!("error" in f)) {
            f.release();
        }
        return d();
    }
    if ("error" in f) {
        return {
            behavior: "deny",
            message: f.error,
            toolUseID,
            decisionReason: {
                type: "other",
                reason: "files not attached"
            },
            decideLocation: "ask-path"
        };
    }
    let y = {
        ...ask,
        updatedInput: f.input
    };
    B.add(y);
    pe.set(y, f.description);
    let T;
    try {
        T = await n(tool, s, toolUseContext, assistantMessage, toolUseID, y);
    } catch (error) {
        f.release();
        throw error;
    }
    if (T.behavior !== "allow") {
        f.release();
        return T;
    }
    let S = T.updatedInput !== undefined && Object.keys(T.updatedInput).length > 0 ? T.updatedInput : f.input;
    if (!Vn(S.files, f.input.files)) {
        f.release();
        return {
            behavior: "deny",
            message: `The approval for ${tool.name} changed the files to attach, which cannot be applied. Call it again with the files you want attached.`,
            toolUseID,
            decisionReason: {
                type: "other",
                reason: "approval changed the files"
            },
            decideLocation: "ask-path"
        };
    }
    return {
        ...T,
        updatedInput: S
    };
}
async function Kje(n, e, toolUseId, r, m, s, h, g) {
    if (m.forRemoteExecution === true) {
        return;
    }
    let mode = de(m).mode;
    let _ = n2e(e.name, toolUseId, r, m, mode, s, m.abortController.signal);
    for await (let d of _){
        if (d.permissionRequestResult && (d.permissionRequestResult.behavior === "allow" || d.permissionRequestResult.behavior === "deny")) {
            let f = d.permissionRequestResult;
            if (f.behavior === "allow") {
                let hookUpdatedInput = f.updatedInput;
                switch(n.kind){
                    case "launcher":
                        break;
                    case "strict":
                        if (!$ae(hookUpdatedInput, r)) {
                            return {
                                decision: Fae(e.name, toolUseId),
                                interrupt: false,
                                permanent: false
                            };
                        }
                        hookUpdatedInput = undefined;
                        break;
                }
                if (jae(e, r, hookUpdatedInput, true)) {
                    return {
                        decision: Wae(e, "PermissionRequest"),
                        interrupt: false,
                        permanent: false
                    };
                }
                let T = hookUpdatedInput || r;
                if (hookUpdatedInput) {
                    let b = ntt(await mk(e, T, {
                        ...m,
                        toolUseId,
                        permissionRound: undefined
                    }, {
                        hookUpdatedInput
                    }), e.name);
                    if (b) {
                        return {
                            decision: b.behavior === "ask" ? {
                                behavior: "deny",
                                message: b.message,
                                decisionReason: b.decisionReason ?? qnn,
                                decideLocation: "ask-path"
                            } : {
                                ...b,
                                decideLocation: "ask-path"
                            },
                            interrupt: false,
                            permanent: false
                        };
                    }
                }
                if (TTn(e, hookUpdatedInput)) {
                    return;
                }
                let { applied, lostTightenings } = g() ? {
                    applied: [],
                    lostTightenings: 0
                } : aUt(n, f.updatedPermissions && _0n(f.updatedPermissions, de(m)), e, r, m, h);
                if (lostTightenings > 0) {
                    return;
                }
                return {
                    decision: {
                        behavior: "allow",
                        updatedInput: T,
                        userModified: false,
                        decisionReason: {
                            type: "hook",
                            hookName: "PermissionRequest"
                        }
                    },
                    interrupt: false,
                    permanent: applied.some((b)=>d4e(b.destination))
                };
            } else {
                return {
                    decision: {
                        behavior: "deny",
                        message: f.message || "Permission denied by PermissionRequest hook",
                        decisionReason: {
                            type: "hook",
                            hookName: "PermissionRequest"
                        },
                        decideLocation: "ask-path"
                    },
                    interrupt: f.interrupt === true,
                    permanent: false
                };
            }
        }
    }
}
export { p5n, iUt, qje, f5n, aUt, XIe, m5n, XBo, Kje };
