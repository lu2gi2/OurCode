import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { GP, Ye, nc, Ke, ot, W, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Nh } from "/$bunfs/root/chunk-dn762950.js";
import { K, cr, AS, rT, Lh, Ce, VZ, Q8e, p0t } from "/$bunfs/root/chunk-ctt36bn8.js";
import { qa } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Za } from "/$bunfs/root/chunk-xgw72tt1.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ie, E8e, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { fp, Bb, EDt, fl, pf, c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { u9, g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { O7, aSe, Mu } from "/$bunfs/root/chunk-6dwnw6av.js";
import { xp, Yt, mse, iZ } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { q1, oOs } from "/$bunfs/root/chunk-x47nahfr.js";
import { Lu } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { PGn, Mt } from "/$bunfs/root/chunk-7mawjt4q.js";
import { rh, nu } from "/$bunfs/root/chunk-c56kpkt7.js";
import { $be, ey, Ju, bF, Nt, xd, Ci, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Bt } from "/$bunfs/root/chunk-1ej05ybf.js";
import { hAs, yAs, nxe } from "/$bunfs/root/chunk-k3tkc302.js";
import { $7, vR } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { ao } from "/$bunfs/root/chunk-8yak0fbv.js";
import { oS, lo } from "/$bunfs/root/chunk-5vhepr4t.js";
import { Mo, kd, ROn, eKe, BI, z2 } from "/$bunfs/root/chunk-rhjwzamj.js";
import { ids } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { cc, mV } from "/$bunfs/root/chunk-tn496ms6.js";
import { Y5, sn, nf, Fp } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { BA } from "/$bunfs/root/chunk-msy0phy0.js";
import { jFn, Sws } from "/$bunfs/root/chunk-nbx3tg29.js";
import { k5, kCt, i9t } from "/$bunfs/root/chunk-7q005g04.js";
import { s4e, mfs } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { P0n, UM } from "/$bunfs/root/chunk-4521ay78.js";
import { Iy } from "/$bunfs/root/chunk-tf8026s8.js";
import { de, Kh, Yh } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { kD, Ls, yye, _ye, One, c6t, irt, tIn } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { G5o, TA, ske, c3, pT, jge, dD, tnr, Wge, cet, twt, uD, wHe, Knr, J3r, bwt, ckn, Ynr, a0s, c0s, _kn, lhe, Kae, lJ, Yae, Ikn, Gkn, uqt, ju, v3, uKt, khe, y9r, _L, XK, kJ, Gvt, YKt, XKt, h$, gle, Zt, Cy, sVe, xe, v2, bk, Yhe, vne, vf, nS, zt, Wh, zo, WEt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { vT, XTt, pce, S4, o5, O3t, fce } from "/$bunfs/root/chunk-a5rabwn2.js";
import { Oot } from "/$bunfs/root/chunk-7aeb6f08.js";
import { p5t, Us } from "/$bunfs/root/chunk-53bavyda.js";
import { Fc } from "/$bunfs/root/chunk-xg0h9r8v.js";
import { Wyt } from "/$bunfs/root/chunk-45fqcvv8.js";
import { VOe } from "/$bunfs/root/chunk-9cfh3hvt.js";
import { Kyt, vX, ZOe, Xyt, SA, HC, lze, eMe } from "/$bunfs/root/chunk-8wvdsmns.js";
import { ZXn, eJn, tJn, Ome, Ryn, V2o, q2o } from "/$bunfs/root/chunk-bq2cxmf0.js";
import { ov, gEe } from "/$bunfs/root/chunk-ak4pcpg3.js";
import { Tyn, Ayn, Cyn, Wjt } from "/$bunfs/root/chunk-c37vf0rd.js";
import { r_n } from "/$bunfs/root/chunk-8rrrx3fb.js";
import { m7e } from "/$bunfs/root/chunk-x9r1n22t.js";
import { mB } from "/$bunfs/root/chunk-zb0rc7jc.js";
import { sre } from "/$bunfs/root/chunk-mddy60q9.js";
import { F4e } from "/$bunfs/root/chunk-n2j724xe.js";
import { Ro } from "/$bunfs/root/chunk-5aqxznmv.js";
import { UQ } from "/$bunfs/root/chunk-b7w13qrv.js";
import { wV } from "/$bunfs/root/chunk-0xz61zj0.js";
import { yFn } from "/$bunfs/root/chunk-gzemnnt9.js";
import { gwr, C$e, QW } from "/$bunfs/root/chunk-xv9n7kza.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { xDt } from "/$bunfs/root/chunk-m007m726.js";
import { randomUUID } from "crypto";
function qe(sessionHooksRegistry, n, hooks, name, skillRoot, personal = false, checkout = false) {
    let _ = 0;
    for (let M of xp){
        let F = hooks[M];
        if (!F) {
            continue;
        }
        for (let P of F){
            for (let B of P.hooks){
                let onHookSuccess = B.once ? ()=>{
                    t(`Removing one-shot hook for event ${M} in skill '${name}'`);
                    sessionHooksRegistry.remove(n, M, B);
                } : undefined;
                sessionHooksRegistry.add(n, M, P.matcher || "", B, {
                    onHookSuccess,
                    skillRoot,
                    personal,
                    checkout
                });
                _++;
            }
        }
    }
    if (_ > 0) {
        t(`Registered ${_} hooks from skill '${name}'`);
    }
}
function Le({ commandName, agentId, isNonInteractiveSession, setAppState, credentials }) {
    if (agentId !== undefined || isNonInteractiveSession) {
        return;
    }
    if (Nt()) {
        return;
    }
    q2o(commandName);
    let h = Ryn(credentials);
    if (!eJn(commandName)) {
        return;
    }
    if (tJn(commandName)) {
        Xe(commandName, setAppState, credentials);
        return;
    }
    h.then((y)=>{
        if (tJn(commandName)) {
            Xe(commandName, setAppState, credentials);
            return;
        }
        if (!y) {
            return;
        }
        let _ = ZXn();
        if (!_) {
            return;
        }
        setAppState((M)=>({
                ...M,
                fotwClaim: {
                    phase: "needs_payment_setup",
                    command: _,
                    amountMinorUnits: y.amountMinorUnits,
                    currency: y.currency
                }
            }));
    });
}
function Xe(commandName, setAppState, credentials) {
    let p = ZXn();
    let r = Ome();
    if (!p || !r) {
        return;
    }
    setAppState((h)=>({
            ...h,
            fotwClaim: {
                phase: "pending",
                command: p,
                amountMinorUnits: r.amountMinorUnits,
                currency: r.currency
            }
        }));
    V2o(commandName, credentials).catch(()=>({
            outcome: "failed"
        })).then((h)=>{
        setAppState((y)=>{
            let y_fotwClaim = y.fotwClaim;
            if (!y_fotwClaim || y_fotwClaim.command !== p) {
                return y;
            }
            if (h.outcome === "granted") {
                return {
                    ...y,
                    fotwClaim: {
                        phase: "granted",
                        command: y_fotwClaim.command,
                        amountMinorUnits: h.amountMinorUnits,
                        currency: h.currency
                    }
                };
            }
            return {
                ...y,
                fotwClaim: {
                    ...y_fotwClaim,
                    phase: "failed"
                }
            };
        });
    });
}
const Je = "/plugin opens a panel in the terminal, so it can't run in the desktop app. Click + next to the prompt box, then Plugins: Add plugin installs from a marketplace you've added, and Manage plugins turns a plugin on or off or uninstalls it.";
const ft = "For a marketplace you haven't added, Add marketplace in the app takes a GitHub owner/repo or a Git URL. Or, in a terminal with Claude Code installed on the machine this session runs on, run `claude plugin marketplace add <source>` and then `claude plugin install <plugin>@<marketplace>`, using the marketplace name the first command prints. Then send /reload-plugins here.";
const gt = "Your organization limits which marketplaces can be added. For a plugin that isn't in Add plugin, contact your admin.";
function Ze(e) {
    if (e?.name !== "plugin" || !q1() || oOs() || Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) || O() === "wsl" || !P0n()) {
        return;
    }
    try {
        let o = UM() === null;
        return `${Je} ${o ? ft : gt}`;
    } catch (error) {
        t(`Marketplace policy could not be read: ${l(error)}`, {
            level: "error"
        });
        return Je;
    }
}
const ht = {
    teleport: ({ remoteSessionId })=>`/teleport pulls a cloud session into a terminal on your own machine, so it can't run from inside this session. To continue this session locally, run claude --teleport ${remoteSessionId} from a checkout of this repository. On claude.ai you can also choose Open in \u2192 Terminal from the session menu, which copies that command.`,
    session: ({ remoteSessionId })=>`This session is already running as a cloud session: ${et(remoteSessionId)}. To continue it in your terminal, run claude --teleport ${remoteSessionId} from a checkout of this repository.`,
    "remote-control": ({ remoteSessionId })=>`Remote Control connects a terminal session to claude.ai, and this session is already running as a cloud session: ${et(remoteSessionId)}.`
};
function et(remoteSessionId) {
    return Fc(remoteSessionId, a.SESSION_INGRESS_URL);
}
function yt() {
    let a_CLAUDE_CODE_REMOTE_SESSION_ID = a.CLAUDE_CODE_REMOTE_SESSION_ID;
    if (!a_CLAUDE_CODE_REMOTE_SESSION_ID) {
        return;
    }
    try {
        return nu(rh(a_CLAUDE_CODE_REMOTE_SESSION_ID, "CLAUDE_CODE_REMOTE_SESSION_ID"));
    } catch  {
        return;
    }
}
function He(commandName, n) {
    let o = Ls(commandName, n);
    let remoteSessionId = yt();
    if (!remoteSessionId) {
        return Ze(o);
    }
    if (!o) {
        return;
    }
    let r = ht[o.name];
    if (r) {
        return r({
            remoteSessionId
        });
    }
}
const kt = "tengu_polished_quill_killswitch";
const Ct = 40;
function tt(isNonInteractiveSession) {
    if (!isNonInteractiveSession) {
        return false;
    }
    return !k(kt, false);
}
function nt({ commandName, suggestion, availableCommandNames, availableCommandCount }) {
    return {
        type: "unknown_command_fallback",
        commandName: E8e(commandName) && !aSe(commandName) ? commandName : undefined,
        suggestion: suggestion !== undefined && E8e(suggestion) ? suggestion : undefined,
        availableCommandNames: availableCommandNames.filter((r)=>E8e(r)).slice(0, Ct),
        availableCommandCount
    };
}
const St = new Set([
    "clear",
    "resume",
    "help",
    "exit",
    "feedback"
]);
function t7e(e, n) {
    if (!n) {
        return false;
    }
    return !(e && e.type !== "prompt" && St.has(e.name));
}
async function st(context, n, o) {
    let p = [];
    let requestQuery = false;
    let h = context.agentId ? undefined : context.getAppState().activeGoal;
    try {
        let y = o.executeStopHooks(de(context).mode, context.abortController.signal, undefined, false, context.agentId, context, [
            ...context.messages,
            ...n
        ], undefined, "fork_dispatch");
        let _ = [];
        for await (let M of y){
            if (M.timedOut && h && M.hook?.prompt === h.condition) {
                f("goal_met", "evaluator_timeout");
            }
            if (M.message?.type === "attachment") {
                let F = M.message.attachment;
                if ("hookEvent" in F && F.hookEvent === "Stop") {
                    if (F.type === "hook_non_blocking_error") {
                        _.push(F.stderr || `Exit code ${F.exitCode}`);
                    } else if (F.type === "hook_error_during_execution") {
                        _.push(F.content);
                    } else if (F.type === "hook_system_message") {
                        p.push(M.message);
                    }
                }
            }
            if (M.blockingError) {
                p.push(xe({
                    content: o.getStopHookMessage(M.blockingError),
                    isMeta: true
                }));
                requestQuery = true;
            }
            if (M.additionalContexts && M.additionalContexts.length > 0) {
                p.push(Zt({
                    type: "hook_additional_context",
                    content: M.additionalContexts,
                    hookName: "Stop",
                    toolUseID: `hook-${randomUUID()}`,
                    hookEvent: "Stop"
                }));
                requestQuery = true;
            }
        }
        if (_.length > 0) {
            p.push(zt(`Stop hook error: ${_.join("; ")}`, "warning"));
        }
    } catch (error) {
        t(`Forked command Stop hooks failed: ${String(error)}`, {
            level: "error"
        });
    }
    if (!requestQuery) {
        try {
            let y = o.executeStopHooks(de(context).mode, context.abortController.signal, undefined, false, context.agentId, context, [], undefined, "turn_end_reactions");
            for await (let _ of y);
        } catch (error) {
            t(`Forked command turn-end reactions failed: ${String(error)}`, {
                level: "error"
            });
        }
    }
    return {
        messages: p,
        requestQuery
    };
}
async function _t(e, n, context, p, r, canUseTool, y, _ = [], M, F, P, origin, paths) {
    let L = Nh();
    let { sanitizedName, skillNameHash } = S4({
        rawName: e.name,
        canonicalName: e.name,
        isMcp: e.loadedFrom === "mcp",
        isBuiltIn: _L().has(e.name),
        isBundled: e.source === "bundled",
        isOfficial: o5(e)
    });
    i("tengu_slash_command_forked", {
        command_name: sanitizedName,
        ...skillNameHash,
        _PROTO_skill_name: e.name,
        invocation_trigger: b("user-slash"),
        ...pce(e.source, e.loadedFrom, e.kind, e.createdBy),
        ...Wyt(e.source, e.name),
        ...fce(e)
    });
    let deferInvocationRecording = Tyn(e, context, M);
    let le = deferInvocationRecording ? {
        agentId: L,
        parentAgentId: context.agentId,
        depth: Ju(context.agentContext) + 1,
        agentType: "subagent",
        isAsync: false,
        isBackgroundAgent: context.agentContext && "isBackgroundAgent" in context.agentContext ? context.agentContext.isBackgroundAgent : undefined,
        ...bF(context.agentContext)
    } : undefined;
    let { skillContent, modifiedGetAppState, contextLayers, recordInvocation, baseAgent, promptMessages, forkReadFileState, availableTools, webFetchReadmissionAllowed, frozenCommandDenies } = await YKt(e, n, context, le, {
        forkAgentId: L,
        extractAttachments: M ? undefined : gle,
        replaceCommandRules: true,
        replaceDenyRules: !M,
        deferInvocationRecording
    });
    let permissionLayers = contextLayers.length > 0 ? [
        ...context.permissionLayers ?? [],
        ...contextLayers
    ] : context.permissionLayers;
    if (r.length > 0 || p.length > 0) {
        promptMessages.push(xe({
            content: [
                ...r,
                ...p
            ],
            isMeta: true
        }));
    }
    if (paths && paths.length > 0) {
        promptMessages.push(Zt({
            type: "inlined_image_paths",
            paths
        }));
    }
    let A = await Wjt(e, cr(), {
        options: {
            tools: HC(baseAgent, webFetchReadmissionAllowed ? v3(baseAgent, availableTools, de(context), {
                activeAgents: context.options.agentDefinitions.activeAgents
            }) : availableTools, deferInvocationRecording, false, false, 0, kD(context).mode).resolvedTools,
            spawnedBySkill: dD(e)
        },
        storageV5: context.storageV5
    });
    if (A) {
        promptMessages.push(A);
    }
    promptMessages.push(..._);
    let effort = e.getEffort?.(n, context) ?? e.getDefaultEffort?.(n, context)?.value ?? e.effort;
    let j = effort !== undefined ? {
        ...baseAgent,
        effort
    } : baseAgent;
    let E = xe({
        content: v2({
            inputString: `/${Mo(e)} ${n}`.trim(),
            precedingInputBlocks: r.length > 0 ? [
                ...r,
                ...p
            ] : p
        }),
        uuid: F,
        origin
    });
    await context.makeFileHistorySnapshot?.(E.uuid);
    t(`Executing forked slash command /${e.name} with agent ${j.agentType}`);
    if (deferInvocationRecording) {
        P?.markTurnActive(M ? undefined : `/${Mo(e)} ${n}`.trim());
        let te;
        try {
            te = await Ayn({
                agentId: L,
                agentDefinition: j,
                command: e,
                description: `/${Mo(e)} ${n}`.trim(),
                prompt: skillContent,
                promptMessages,
                context,
                canUseTool,
                getAppState: modifiedGetAppState,
                permissionLayers,
                readFileState: forkReadFileState,
                availableTools,
                webFetchReadmissionAllowed,
                spawnedBySkill: dD(e),
                recordInvocationOnSuccess: recordInvocation,
                frozenCommandDenies
            });
        } catch (error) {
            await P?.settleTurnEnd(null);
            if (Ke(error)) {
                return {
                    messages: [
                        E,
                        bk({
                            toolUse: false
                        })
                    ],
                    shouldQuery: false,
                    command: e,
                    aborted: true,
                    forkDispatched: true
                };
            }
            return {
                messages: [
                    E,
                    xe({
                        content: `<local-command-stderr>${Bt(ZWe(error, e.name, context.session))}</local-command-stderr>`
                    })
                ],
                shouldQuery: false,
                command: e,
                threw: true,
                forkDispatched: true
            };
        }
        if (te) {
            await P?.settleTurnEnd(null);
            return {
                messages: [
                    E,
                    Wh(`<local-command-stdout>Running in the background as @${TA(Yt(te.name))}</local-command-stdout>
` + G5o({
                        agentId: te.agentId,
                        skillName: e.name,
                        description: `/${Mo(e)} ${n}`.trim()
                    }))
                ],
                shouldQuery: false,
                command: e,
                forkDispatched: true
            };
        }
        recordInvocation();
    }
    let z = [];
    let J = [];
    let N = `forked-command-${e.name}`;
    let ne = 0;
    let pe = (message)=>{
        ne++;
        return {
            type: "progress",
            data: {
                message,
                type: "agent_progress",
                prompt: skillContent,
                agentId: L,
                agentType: j.agentType,
                isBuiltIn: j.source === "built-in",
                description: e.description
            },
            parentToolUseID: N,
            toolUseID: `${N}-${ne}`,
            timestamp: new Date().toISOString(),
            uuid: randomUUID()
        };
    };
    let se = ()=>{
        context.emitToolProgress?.({
            kind: "agent_progress",
            toolUseId: N,
            progressMessages: [
                ...J
            ]
        });
    };
    let re = oS.of(context.session).active !== undefined;
    let _e = false;
    P?.markTurnActive(M ? undefined : `/${Mo(e)} ${n}`.trim());
    let ee = Cyn({
        agentId: L,
        parentAgentId: context.agentId,
        spawnDepth: Ju(context.agentContext) + 1,
        skillName: Mo(e),
        prompt: skillContent,
        selectedAgent: j,
        taskRegistry: context.taskRegistry,
        callerAbortController: context.abortController
    });
    let V = "failed";
    try {
        se();
        if (re) {
            let I = vf(promptMessages).find((he)=>he.type === "user");
            if (I) {
                Xyt(context, pe({
                    ...I,
                    isMeta: undefined
                }), false);
            }
        }
        for await (let I of SA({
            agentDefinition: j,
            promptMessages,
            onModelRestricted: r_n(dD(e), context.onQueryEvent),
            toolUseContext: {
                ...context,
                getAppState: modifiedGetAppState,
                permissionLayers
            },
            canUseTool,
            isAsync: false,
            querySource: "agent:custom",
            spawnedBySkill: dD(e),
            spawnedByForkedSkill: true,
            model: e.model,
            availableTools,
            webFetchReadmissionAllowed,
            override: {
                shareFileHistory: true,
                agentId: L,
                abortController: ee.abortController,
                readFileState: forkReadFileState
            }
        })){
            if (I.type === "api_metrics" || I.type === "set_in_progress_tool_use_ids" || I.type === "spinner_mode" || I.type === "query_model_change") {
                continue;
            }
            z.push(I);
            if (vX(I)) {
                if (re && ZOe(context, I)) {
                    Xyt(context, I, false);
                }
                continue;
            }
            let he = vf([
                I
            ]);
            if (I.type === "assistant") {
                let delta = _kn(I);
                if (delta > 0) {
                    context.onQueryEvent?.({
                        type: "response_length",
                        op: "add",
                        delta
                    });
                }
                let ye = he[0];
                if (ye && ye.type === "assistant") {
                    let ue = pe(I);
                    J.push(ue);
                    se();
                    _e = true;
                    if (re) {
                        Xyt(context, ue, true);
                    }
                }
            }
            if (I.type === "user") {
                let me = he[0];
                if (me && me.type === "user") {
                    let ye = pe(me);
                    J.push(ye);
                    se();
                    if (re && !(me.isMeta && !_e)) {
                        Xyt(context, ye, true);
                        for (let ue of he.slice(1)){
                            if (ue.type === "user") {
                                Xyt(context, pe(ue), true);
                            }
                        }
                    }
                }
            }
        }
        let te = lze(Cy(z));
        if (!te) {
            eMe(L, context);
        }
        V = te ? "failed" : "completed";
    } catch (error) {
        if (Ke(error)) {
            await P?.settleTurnEnd(null);
            return {
                messages: [
                    E,
                    bk({
                        toolUse: false
                    })
                ],
                shouldQuery: false,
                command: e,
                aborted: true,
                forkDispatched: true
            };
        }
        await P?.settleTurnEnd(null);
        let I = await st(context, z, y);
        return {
            messages: [
                E,
                xe({
                    content: `<local-command-stderr>${Bt(ZWe(error, e.name, context.session))}</local-command-stderr>`
                }),
                ...I.messages
            ],
            shouldQuery: I.requestQuery,
            command: e,
            threw: true,
            forkDispatched: true
        };
    } finally{
        ee.remove(V);
        Q8e(L);
        context.emitToolProgress?.({
            kind: "clear",
            toolUseId: N
        });
    }
    let fe = XKt(z, "Command completed");
    try {
        fe = e.formatForegroundForkResult?.(fe) ?? fe;
    } catch (error) {
        c(ot(W(error), "fork result formatter threw"));
    }
    let Ae = khe(z) + fe;
    t(`Forked slash command /${e.name} completed with agent ${L}`);
    await P?.settleTurnEnd(z);
    let Ie = await st(context, z, y);
    return {
        messages: [
            E,
            Wh(`<local-command-stdout>${TA(Ae)}</local-command-stdout>`),
            ...Ie.messages
        ],
        shouldQuery: Ie.requestQuery,
        command: e,
        resultText: Ae,
        forkDispatched: true
    };
}
const bt = {
    "remote-control": "allow_remote_control",
    ultraplan: "allow_remote_sessions",
    "claude-in-chrome": "allow_claude_browser_extension"
};
function wt(commandName, commands, { interactive }) {
    let p = kJ();
    let r = C$e();
    let h = k5();
    let y = r ? i9t() : h;
    let _ = r ? Sws() : jFn();
    let M = [
        commands,
        p,
        y,
        _
    ];
    let F;
    let policy;
    for (let Y of M){
        let X = Ls(commandName, Y);
        if (!X) {
            continue;
        }
        let le = Y === p || Y === y;
        let s = X.policyGate?.policy ?? (le ? bt[X.name] : undefined);
        if (r && QW(X.name) && (Y === y ? Ls(commandName, h) === undefined : Y === _) && (s === undefined || sn(s))) {
            s = gwr;
        }
        if (s) {
            F = X;
            policy = s;
            break;
        }
    }
    if (!F || !policy) {
        return;
    }
    if (!jge(F)) {
        return;
    }
    if (sn(policy)) {
        if (interactive && !Lh() && kd(F) && Ls(commandName, commands) === undefined) {
            return {
                command: F,
                policy,
                reason: yAs(F.name),
                kind: "stale_list"
            };
        }
        return;
    }
    let kind = Fp(policy);
    if (!interactive) {
        if (He(commandName, kJ()) !== undefined) {
            return;
        }
        if (kind !== "org_denied" && Wge(M.flatMap((Y)=>Y.filter((X)=>yye(commandName, [
                    X
                ])))).length === 0) {
            return;
        }
    }
    let { featureLabel, verb } = Y5(policy);
    let reason = kind === "cache_miss" ? hAs(featureLabel) : nf(policy, featureLabel, verb);
    if (reason === null || kind === null) {
        return;
    }
    return {
        command: F,
        policy,
        reason,
        kind
    };
}
function jjt(e) {
    return /^[a-zA-Z0-9_][a-zA-Z0-9:_-]*$/.test(e);
}
function ZWe(e, n, o) {
    let p = ao(n, 200);
    let r = Yt(n);
    if (Ke(e)) {
        if (lo(o)) {
            t(`${r} aborted: ${String(e)}`);
            return "Interrupted";
        }
        return TA(e instanceof Error ? e.message || "Interrupted" : "Interrupted");
    }
    if (e instanceof GP) {
        return TA(e.message);
    }
    if (lo(o)) {
        t(`${r} threw: ${String(e)}`, {
            level: "error"
        });
        return `${p} failed (detail withheld on this connection)`;
    }
    return TA(String(e));
}
async function bjs(e, n, o, p, r, h, y, _, M, F, P, B, Q, L, H, Y, X, le, permissionMode, wakeupSource, hostInitiator) {
    using queued = a0s(h ?? r.deferredSlashUuid);
    function w(T = [], inputString = e, ge = false) {
        let Me = randomUUID();
        let promptId = ske(n) ? undefined : Me;
        if (promptId !== undefined) {
            p0t(promptId);
        }
        let ve = Iy(r.options.mainLoopModel, Yh(r), Kh(r.permissionLayers));
        i("tengu_input_prompt", {
            ...M && {
                prompt_source: d(M)
            },
            ...ve && {
                effort_level: d(ve)
            },
            turn_origin: d(sVe(H)),
            ...uqt({
                wakeupSource,
                hostInitiator
            }),
            ...Oot()
        });
        let Pe = h || randomUUID();
        Us("user_prompt", {
            prompt_length: String(inputString.length),
            ...p5t(inputString),
            ...promptId && {
                "prompt.id": promptId
            },
            "message.uuid": Pe
        });
        let ce = xe({
            content: v2({
                inputString,
                precedingInputBlocks: n
            }),
            uuid: Pe,
            permissionMode,
            isMeta: le || undefined,
            promptSource: M,
            promptId,
            origin: H
        });
        if (H) {
            WEt(ce, H);
        }
        return {
            messages: [
                ce,
                ...p,
                ...T.map((Ee)=>Zt(Ee))
            ],
            shouldQuery: true,
            ...ge && {
                extractPromptAttachments: true
            }
        };
    }
    let R = ov(e);
    if (!R) {
        i("tengu_input_slash_missing", {});
        if (r.options.isNonInteractiveSession) {
            return w();
        }
        m("cmd_dispatch", "cmd_parse_failed");
        let T = "Commands are in the form `/command [args]`";
        return {
            messages: [
                Yhe(),
                ...p,
                xe({
                    content: v2({
                        inputString: T,
                        precedingInputBlocks: n
                    })
                })
            ],
            shouldQuery: false,
            resultText: T
        };
    }
    let { commandName, args } = R;
    let { isMcp } = R;
    let C;
    if (B !== undefined) {
        let T = ov(B);
        C = T && T.commandName === R.commandName ? T.args : undefined;
    }
    let u = Ls(commandName, r.options.commands);
    if (u && !kd(u)) {
        u = undefined;
    }
    if (!u && !isMcp && args.trim()) {
        let T = args.trimStart();
        let q = T.search(/\s/);
        let ge = q === -1 ? T : T.slice(0, q);
        let Me = `${commandName}:${ge}`;
        let ae = Ls(Me, r.options.commands);
        if (ae) {
            u = ae;
            commandName = Me;
            args = q === -1 ? "" : T.slice(q + 1).trimStart();
        }
    }
    if (!u && !isMcp && !Lh()) {
        let T = await c0s(commandName, queued.origin === undefined, r.abortController.signal);
        if (!T && r.abortController.signal.aborted) {
            let q = Ls(commandName, r.options.commands) ?? Ls(commandName, kJ());
            return Ynr({
                signal: r.abortController.signal,
                typed: [
                    ...p,
                    xe({
                        content: v2({
                            inputString: q ? Re(q, args) : vne(Yt(commandName), O7(args)),
                            precedingInputBlocks: n
                        }),
                        uuid: h,
                        origin: H
                    })
                ],
                marker: bk({
                    toolUse: false
                }),
                isQueuedByPlugin: queued.origin !== undefined
            });
        }
        if (T) {
            u = T;
            r = {
                ...r,
                options: {
                    ...r.options,
                    commands: [
                        ...r.options.commands,
                        T
                    ]
                }
            };
        }
    }
    let A;
    let U;
    if (u && !pT(u)) {
        let T = gEe(u, args);
        if (T) {
            let q = Ls(T.targetName, r.options.commands);
            if (q && kd(q)) {
                U = `${commandName} ${T.consumedToken}`;
                u = q;
                commandName = T.targetName;
                args = T.remainingArgs;
            } else if (u.name === wV) {
                let ge = tIn();
                if (ge) {
                    A = zt(`${ge} Running a local review instead.`, "warning");
                }
            }
        }
    }
    let j = u ? await Kae(u) : undefined;
    if (u && lhe(u)) {
        u = undefined;
    }
    if (u && kCt(u)) {
        u = undefined;
    }
    if (u && Yae(j)) {
        lJ(u, j);
        u = undefined;
    }
    let isBuiltIn = _L().has(commandName);
    if (t7e(u, r.getAppState().endedByModel)) {
        let T = mB("Claude ended this conversation. Start a new session (or /clear) to continue.");
        return Te(queued.origin !== undefined, {
            messages: [
                zt(T, "warning")
            ],
            shouldQuery: false,
            resultText: T
        });
    }
    let isBundled = u?.type === "prompt" && u.source === "bundled";
    let isOfficial = u?.type === "prompt" && o5(u);
    let N = isMcp || u?.type === "prompt" && u.source === "mcp";
    if (!u) {
        if (!jjt(commandName)) {
            return w();
        }
        let T = `/${commandName}`;
        let q = false;
        if (!Ce() && !Za(T)) {
            try {
                await ie().stat(T);
                q = true;
            } catch  {}
        }
        if (!q) {
            let ge = wt(commandName, r.options.commands, {
                interactive: !r.options.isNonInteractiveSession
            });
            if (ge) {
                let { command: command_1, policy, reason, kind } = ge;
                i("tengu_input_slash_invalid", {
                    input_length: commandName.length,
                    had_suggestion: false,
                    policy_denied: kind !== "stale_list"
                });
                m("cmd_dispatch", kind === "stale_list" ? "cmd_stale_list" : `cmd_policy_${kind}`);
                if (kind !== "stale_list") {
                    BA(policy, "slash_command");
                }
                let ze = TA(Yt(commandName));
                let $e = !args ? "" : _ye(command_1, args) ? "***" : TA(O7(args));
                if (r.options.isNonInteractiveSession) {
                    return Te(queued.origin !== undefined, {
                        messages: [
                            ...p,
                            Wh(`/${ze}${$e ? ` ${$e}` : ""}`),
                            Wh(`<local-command-stdout>${reason}</local-command-stdout>`)
                        ],
                        shouldQuery: false,
                        resultText: reason
                    });
                }
                return Te(queued.origin !== undefined, {
                    messages: [
                        ...p,
                        zt(reason, "warning"),
                        ...$e && $e !== "***" ? [
                            zt(`Args from /${ze}: ${$e}`, "warning")
                        ] : []
                    ],
                    shouldQuery: false,
                    resultText: reason
                });
            }
            if (r.options.isNonInteractiveSession && _L().has(commandName)) {
                let Z = kJ();
                let De = He(commandName, Z) ?? `/${TA(Yt(commandName))} isn't available in this environment.`;
                i("tengu_input_slash_invalid", {
                    input_length: commandName.length,
                    had_suggestion: false
                });
                m("cmd_dispatch", "cmd_unavailable_headless");
                let be = Ls(commandName, Z);
                let we = !args ? "" : be !== undefined && _ye(be, args) ? "***" : TA(O7(args));
                return Te(queued.origin !== undefined, {
                    messages: [
                        ...p,
                        Wh(`/${TA(Yt(commandName))}${we ? ` ${we}` : ""}`),
                        Wh(`<local-command-stdout>${De}</local-command-stdout>`, {
                            commandOutcome: {
                                kind: "unavailable_headless"
                            }
                        })
                    ],
                    shouldQuery: false,
                    resultText: De
                });
            }
            let Me = await Ikn(r.options.commands);
            let ae = r.options.commands.filter((Z)=>!Z.isHidden && !pT(Z) && kd(Z) && !(BI(Z) && rT()) && !z2(Z) && !Me.has(Z));
            let fallback_to_model = queued.origin === undefined && tt(r.options.isNonInteractiveSession);
            let Pe = fallback_to_model ? ae.filter((Z)=>Z.type === "prompt" && !Z.disableModelInvocation) : ae;
            let ce = mse(commandName, Pe.map((Z)=>({
                    name: Mo(Z),
                    aliases: Z.aliases
                })), {
                maxEditDistance: 2
            });
            i("tengu_input_slash_invalid", {
                input_length: commandName.length,
                had_suggestion: Boolean(ce),
                suggestion_distance: ce ? iZ(commandName, ce, 2) : undefined,
                fallback_to_model
            });
            if (fallback_to_model) {
                f("cmd_dispatch", "cmd_unknown_model_fallback");
                return w([
                    nt({
                        commandName,
                        suggestion: ce,
                        availableCommandNames: Pe.map((Z)=>Mo(Z)),
                        availableCommandCount: ae.length
                    })
                ], aSe(e) ? O7(e) : e, true);
            }
            m("cmd_dispatch", "cmd_unknown");
            let Ee = ao(commandName, 200);
            let Ne = ce ? ao(ce, 200) : undefined;
            let Oe = ce ? `Unknown command: /${Ee}. Did you mean /${Ne}?` : `Unknown command: /${Ee}`;
            if (r.options.isNonInteractiveSession) {
                return Te(queued.origin !== undefined, {
                    messages: [
                        ...p,
                        Wh(`/${Ee}${args ? ` ${TA(O7(args))}` : ""}`),
                        Wh(`<local-command-stdout>${Oe}</local-command-stdout>`, {
                            commandOutcome: {
                                kind: "unknown",
                                ...Ne !== undefined && {
                                    suggestion: Ne
                                }
                            }
                        })
                    ],
                    shouldQuery: false,
                    resultText: Oe
                });
            }
            return Te(queued.origin !== undefined, {
                messages: [
                    ...p,
                    zt(Oe, "warning"),
                    ...args ? [
                        zt(`Args from unknown skill: ${O7(args)}`, "warning")
                    ] : []
                ],
                shouldQuery: false,
                resultText: Oe
            });
        }
        return w();
    }
    let command_source = N || u.loadedFrom === "mcp" ? "mcp" : isBuiltIn || u.type === "prompt" && (u.source === "bundled" || u.source === "builtin") ? "builtin" : "custom";
    let pe = _ye(u, args) ? `/${commandName} ***` : e;
    let se = r.deferSlashToEngine?.(u) ?? false;
    if (!se) {
        let T = randomUUID();
        p0t(T);
        Us("user_prompt", {
            prompt_length: String(pe.length),
            ...p5t(pe),
            "prompt.id": T,
            command_name: command_source === "builtin" || xd() ? commandName : command_source,
            command_source
        });
    }
    let re = u;
    let run = (T)=>At(commandName, T, r, n, o, y, _, h, F, P, C, U, Q, M, L, H, Y, X);
    if (se) {
        queued.handOn(r.abortController.signal);
    }
    let ee = se ? {
        kind: "engine",
        ran: await run(args)
    } : await yFn(ckn({
        input: {
            command: Mo(re),
            args,
            origin: J3r({
                submissionOrigin: H,
                dispatchedOverBridge: r.dispatchedOverBridge,
                promptSource: M
            }),
            presentation: bwt(r.presentation)
        },
        engine: {
            run,
            textOf: (T)=>T.resultText,
            contextOf: (T)=>T.metaTexts,
            retell
        },
        queued,
        signal: r.abortController.signal
    }), r.abortController.signal);
    if (ee === undefined) {
        return Ynr({
            signal: r.abortController.signal,
            typed: [
                ...p,
                xe({
                    content: v2({
                        inputString: Re(re, args),
                        precedingInputBlocks: n
                    }),
                    uuid: h,
                    origin: H
                })
            ],
            marker: bk({
                toolUse: false
            }),
            isQueuedByPlugin: queued.origin !== undefined
        });
    }
    let { messages, shouldQuery, allowedTools, disallowedTools, model, effort, command, resultText, nextInput, submitNextInput, engineDeferredSlash, forkDispatched, settledInPlace } = ee.kind === "engine" ? ee.ran : vt(ee.text, ee.context, {
        command: re,
        commandName,
        args,
        precedingInputBlocks: n,
        uuid: h,
        submissionOrigin: H,
        isNonInteractiveSession: r.options.isNonInteractiveSession === true
    });
    if (command.type === "prompt" && command.pluginInfo) {
        uD(command.pluginInfo.repository, "command", twt(command, command.pluginInfo.pluginManifest.name));
    }
    let { sanitizedName, skillNameHash } = S4({
        rawName: commandName,
        canonicalName: command.name,
        isMcp: N || command.loadedFrom === "mcp",
        isBuiltIn,
        isBundled,
        isOfficial
    });
    function Ge() {
        let T = {
            input: sanitizedName,
            ...skillNameHash
        };
        if (command.type === "prompt" && command.pluginInfo) {
            Object.assign(T, O3t(command));
            let q = command.pluginInfo.pluginManifest.version;
            if (q && o5(command)) {
                T.plugin_version = Ci(q);
            }
        }
        if (command.type === "prompt") {
            Object.assign(T, fce(command));
        }
        i("tengu_input_command", {
            ...T,
            invocation_trigger: b("user-slash"),
            ...uqt({
                wakeupSource,
                hostInitiator
            }),
            ...pce(command.type === "prompt" ? command.source : undefined, command.loadedFrom, command.kind, command.type === "prompt" ? command.createdBy : undefined),
            ...Wyt(command.type === "prompt" ? command.source : undefined, commandName),
            ...command.type === "prompt" && {
                command_content_chars: command.contentLength
            },
            ...command.type === "prompt" && {
                _PROTO_skill_name: command.name
            },
            ...false
        });
    }
    if (messages.length === 0) {
        if (settledInPlace) {
            g("cmd_dispatch");
        }
        Ge();
        return {
            messages: [],
            shouldQuery: false,
            model,
            resultText,
            nextInput,
            submitNextInput,
            localCommand: sanitizedName,
            ...ee.exitCode !== undefined && {
                commandExitCode: ee.exitCode
            }
        };
    }
    if (messages.length === 2 && messages[1].type === "user" && typeof messages[1].message.content === "string" && messages[1].message.content.startsWith("Unknown command:")) {
        if (!(e.startsWith("/var") || e.startsWith("/tmp") || e.startsWith("/private"))) {
            i("tengu_input_slash_invalid", {
                input_length: commandName.length,
                had_suggestion: false
            });
            m("cmd_dispatch", "cmd_unknown");
        }
        return {
            messages: [
                Yhe(),
                ...messages
            ],
            shouldQuery,
            allowedTools,
            disallowedTools,
            model
        };
    }
    if (!engineDeferredSlash) {
        g("cmd_dispatch");
        Ge();
    }
    let pt = messages.length > 0 && messages[0] && zo(messages[0]);
    let Ve = shouldQuery || messages.every((T)=>UQ(T) || T.type === "system" && T.subtype === "informational" || T.type === "user" && T.isMeta) || pt || engineDeferredSlash ? messages : [
        Yhe(),
        ...messages
    ];
    return {
        messages: A && shouldQuery ? [
            ...Ve,
            A
        ] : Ve,
        shouldQuery,
        allowedTools,
        disallowedTools,
        model,
        effort,
        resultText,
        nextInput,
        submitNextInput,
        engineDeferredSlash,
        forkDispatched,
        ...!engineDeferredSlash && {
            localCommand: sanitizedName
        },
        ...ee.exitCode !== undefined && {
            commandExitCode: ee.exitCode
        }
    };
}
function vt(text, context, { command, commandName, args, precedingInputBlocks, uuid, submissionOrigin, isNonInteractiveSession }) {
    let F = u9(XK().has(commandName) ? commandName : "custom");
    g(F, VOe(command.name));
    let P = isNonInteractiveSession || precedingInputBlocks.length > 0 || !ey(submissionOrigin);
    let metaTexts = context ?? [];
    if (text === undefined && metaTexts.length === 0 && !P) {
        return {
            messages: [],
            shouldQuery: false,
            command
        };
    }
    return {
        messages: [
            P ? xe({
                content: v2({
                    inputString: ke(command, args),
                    precedingInputBlocks
                }),
                uuid,
                origin: submissionOrigin
            }) : Wh(ke(command, args)),
            ...text === undefined ? [] : [
                Wh(`<local-command-stdout>${TA(text)}</local-command-stdout>`, {
                    commandRun: One(command, args)
                })
            ],
            ...metaTexts.map((L)=>xe({
                    content: L,
                    isMeta: true
                }))
        ],
        shouldQuery: false,
        command,
        resultText: text,
        ...metaTexts.length > 0 && {
            metaTexts
        }
    };
}
function retell(e, { text, context }) {
    if (e.shouldQuery || e.nextInput !== undefined || e.settledInPlace) {
        return;
    }
    let e_messages = e.messages;
    if (text !== undefined) {
        let r = e.resultText === undefined ? -1 : e_messages.findIndex((_)=>UQ(_) && (_.content.startsWith(`<${fl}>`) || _.content.startsWith(`<${pf}>`)));
        if (r === -1) {
            return;
        }
        let h = e_messages[r];
        let y = h !== undefined && UQ(h) && h.content.startsWith(`<${pf}>`) ? pf : fl;
        e_messages = e_messages.with(r, Wh(`<${y}>${TA(text)}</${y}>`, h !== undefined && UQ(h) ? {
            commandRun: h.commandRun,
            commandOutcome: h.commandOutcome
        } : undefined));
    }
    if (context !== undefined) {
        if (!(e.metaTexts !== undefined || e_messages.some((y)=>UQ(y) && (y.content.startsWith(`<${fl}>`) || y.content.startsWith(`<${pf}>`))))) {
            return;
        }
        let h = new Map;
        for (let y of e.metaTexts ?? []){
            h.set(y, (h.get(y) ?? 0) + 1);
        }
        e_messages = [
            ...e_messages.filter((y)=>{
                let _ = y.type === "user" && y.isMeta && typeof y.message.content === "string" ? y.message.content : undefined;
                let M = _ === undefined ? 0 : h.get(_) ?? 0;
                if (_ === undefined || M === 0) {
                    return true;
                }
                h.set(_, M - 1);
                return false;
            }),
            ...context.map((y)=>xe({
                    content: y,
                    isMeta: true
                }))
        ];
    }
    return {
        ...e,
        messages: e_messages,
        resultText: text ?? e.resultText,
        ...(context ?? e.metaTexts) !== undefined && {
            metaTexts: context ?? e.metaTexts
        }
    };
}
function Be(e, n) {
    let o = `/${Mo(e)} opens an interactive panel and isn't available in this environment. Run it from the Claude Code terminal instead.`;
    return {
        messages: [
            Wh(Re(e, n)),
            Wh(`<local-command-stdout>${o}</local-command-stdout>`, {
                commandOutcome: {
                    kind: "unavailable_headless"
                }
            })
        ],
        shouldQuery: false,
        command: e,
        resultText: o
    };
}
async function At(commandName, n, o, p, r, h, canUseTool, _, M, F, P, B, Q, L, H, Y, X, le) {
    let s = c6t(commandName, o.options.commands);
    let oe = xDt(n);
    if (oe.some((w)=>w.kind === "block")) {
        n = oe.map((w)=>{
            if (w.kind === "text") {
                return w.text;
            }
            return w.body;
        }).join(`

`).trim();
    }
    let D = u9(XK().has(commandName) ? commandName : "custom");
    let G = VOe(s.name);
    if (!kd(s)) {
        m(D, "cmd_policy_disabled");
        let w = `/${TA(Yt(commandName))} isn't available in this session.`;
        if (o.options.isNonInteractiveSession) {
            return {
                messages: [
                    Wh(Re(s, n)),
                    Wh(`<local-command-stdout>${w}</local-command-stdout>`)
                ],
                shouldQuery: false,
                command: s,
                resultText: w
            };
        }
        return {
            messages: [
                zt(w, "warning")
            ],
            shouldQuery: false,
            command: s,
            resultText: w
        };
    }
    if (pT(s)) {
        m(D, "cmd_skill_override_off");
        if (o.options.isNonInteractiveSession) {
            let S = `Skill "${ao(s.name, 200)}" is disabled via skillOverrides. Remove the override from your settings to run it.`;
            return {
                messages: [
                    Wh(Re(s, n)),
                    Wh(`<local-command-stdout>${S}</local-command-stdout>`)
                ],
                shouldQuery: false,
                command: s,
                resultText: S
            };
        }
        let w = `Skill "${ao(s.name, 200)}" is disabled via skillOverrides. Re-enable it in /skills or remove the override from your settings to run it.`;
        let R = !n ? "" : _ye(s, n) ? "***" : TA(O7(n));
        return {
            messages: [
                zt(w, "warning"),
                ...n ? [
                    zt(`Args from disabled skill: ${R}`, "warning")
                ] : []
            ],
            shouldQuery: false,
            command: s,
            resultText: w
        };
    }
    if (s.type === "prompt" && s.userInvocable !== false) {
        uKt(o.session, s.name, o.storageV5);
    }
    if (s.type === "prompt" && s.pluginInfo) {
        vT(s.pluginInfo.repository);
    }
    if (!o.deferSlashToEngine?.(s)) {
        Le({
            commandName: s.name,
            agentId: o.agentId,
            isNonInteractiveSession: Boolean(o.options.isNonInteractiveSession),
            setAppState: o.setAppState,
            credentials: o.credentials
        });
    }
    if (s.userInvocable === false) {
        m(D, "cmd_not_user_invocable");
        return {
            messages: [
                xe({
                    content: v2({
                        inputString: `/${Yt(commandName)}`,
                        precedingInputBlocks: p
                    }),
                    uuid: _
                }),
                xe({
                    content: `This skill can only be invoked by Claude, not directly by users. Ask Claude to use the "${Yt(commandName)}" skill for you.`
                })
            ],
            shouldQuery: false,
            command: s
        };
    }
    if (s.type === "local-jsx" && o.options.isNonInteractiveSession) {
        m(D, "cmd_local_jsx_headless");
        return Be(s, n);
    }
    try {
        switch(s.type){
            case "local-jsx":
                return new Promise((resolve)=>{
                    let R = false;
                    let S = (C, u)=>{
                        if (R) {
                            return;
                        }
                        R = true;
                        g(D, G);
                        if (u?.display === "skip") {
                            resolve({
                                messages: [],
                                shouldQuery: false,
                                command: s,
                                nextInput: u?.nextInput,
                                submitNextInput: u?.submitNextInput
                            });
                            return;
                        }
                        let A = (u?.metaMessages ?? []).map((j)=>xe({
                                content: j,
                                isMeta: true
                            }));
                        let U = o.presentation === "fullscreen" && typeof C === "string" && C.endsWith(" dismissed");
                        resolve({
                            messages: u?.display === "system" ? U ? A : [
                                Wh(ke(s, n)),
                                Wh(`<local-command-stdout>${TA(String(C))}</local-command-stdout>`, {
                                    commandRun: One(s, n)
                                }),
                                ...A
                            ] : [
                                xe({
                                    content: v2({
                                        inputString: ke(s, n),
                                        precedingInputBlocks: p
                                    }),
                                    uuid: _
                                }),
                                C ? xe({
                                    content: `<local-command-stdout>${C}</local-command-stdout>`
                                }) : xe({
                                    content: `<local-command-stdout>${Mu}</local-command-stdout>`
                                }),
                                ...A
                            ],
                            shouldQuery: u?.shouldQuery ?? false,
                            command: s,
                            nextInput: u?.nextInput,
                            submitNextInput: u?.submitNextInput,
                            ...A.length > 0 && {
                                metaTexts: u?.metaMessages
                            }
                        });
                    };
                    let v = s.load ?? o.options.resolveCommandDialog?.(s);
                    if (!v) {
                        m(D, "cmd_local_jsx_no_dialog_resolution");
                        resolve(Be(s, n));
                        return;
                    }
                    let x = eKe(s, n, o.presentation ?? "inline");
                    v().then((C)=>C.call(S, {
                            ...o,
                            canUseTool,
                            dispatchedAsImmediate: x,
                            submissionOrigin: Y,
                            promptSource: L
                        }, n, B ?? commandName)).then((C)=>{
                        if (C == null) {
                            return;
                        }
                        if (R) {
                            return;
                        }
                        let o_localJsx = o.localJsx;
                        if (!o_localJsx) {
                            m(D, "cmd_local_jsx_no_panel_host");
                            R = true;
                            resolve(Be(s, n));
                            return;
                        }
                        o_localJsx.show(C, {
                            commandName: Mo(s),
                            immediate: x,
                            hidesPrompt: true,
                            retireAtTurnBoundary: true
                        }).closed.then((U)=>{
                            if (U === "dismissed" && !R) {
                                R = true;
                                m(D, "cmd_local_jsx_dismissed");
                                resolve({
                                    messages: [],
                                    shouldQuery: false,
                                    command: s
                                });
                            }
                        });
                    }).catch((C)=>{
                        let u = Ke(C);
                        if (u) {
                            t(`local-jsx command aborted: ${C instanceof Error ? C.message : String(C)}`);
                        } else {
                            c(ot(W(C), "local-jsx slash command threw"));
                        }
                        m(D, u ? "cmd_local_jsx_aborted" : "cmd_local_jsx_threw");
                        if (R) {
                            return;
                        }
                        R = true;
                        if (u) {
                            resolve({
                                messages: [],
                                shouldQuery: false,
                                command: s
                            });
                            return;
                        }
                        resolve({
                            messages: [
                                xe({
                                    content: v2({
                                        inputString: ke(s, n),
                                        precedingInputBlocks: p
                                    }),
                                    uuid: _
                                }),
                                Wh(`<local-command-stderr>${Bt(TA(ZWe(C, s.name, o.session)))}</local-command-stderr>`, {
                                    commandRun: One(s, n),
                                    commandOutcome: {
                                        kind: "failed"
                                    }
                                })
                            ],
                            shouldQuery: false,
                            command: s
                        });
                    });
                });
            case "local":
                {
                    if (o.deferSlashToEngine?.(s)) {
                        let S = `/${Mo(s)} ${n}`.trim();
                        let v = xe({
                            content: v2({
                                inputString: S,
                                precedingInputBlocks: p
                            }),
                            uuid: _
                        });
                        return {
                            messages: [
                                v
                            ],
                            shouldQuery: false,
                            command: s,
                            engineDeferredSlash: {
                                text: S,
                                messageUuid: v.uuid,
                                origin: Y
                            }
                        };
                    }
                    let w = xe({
                        content: v2({
                            inputString: ke(s, n),
                            precedingInputBlocks: p
                        }),
                        uuid: _
                    });
                    let R = Mt() && tnr(s).workspace;
                    if (R) {
                        o.applyMessageOp({
                            type: "append",
                            messages: [
                                w
                            ]
                        });
                    }
                    try {
                        let S = Yhe();
                        let x = (await s.load()).call(n, {
                            ...o,
                            submissionOrigin: Y,
                            promptSource: L,
                            commandMessageUuid: w.uuid
                        }, B ?? commandName);
                        let C = R ? await qa(x, o.abortController.signal, ()=>new Ye) : await x;
                        if (C.type === "text" && C.level === "error") {
                            m(D, "cmd_returned_error");
                        } else {
                            g(D, G);
                        }
                        if (C.type === "skip") {
                            return {
                                messages: [],
                                shouldQuery: false,
                                command: s
                            };
                        }
                        if (C.type === "compact") {
                            let U = [
                                S,
                                w,
                                ...C.displayText ? [
                                    xe({
                                        content: `<local-command-stdout>${TA(C.displayText)}</local-command-stdout>`,
                                        ...C.displayRepeatsSummary === true && {
                                            repeatsCompactSummary: true
                                        },
                                        timestamp: new Date(Date.now() + 100).toISOString()
                                    })
                                ] : []
                            ];
                            let j = {
                                ...C.compactionResult,
                                messagesToKeep: [
                                    ...C.compactionResult.messagesToKeep,
                                    ...U
                                ]
                            };
                            let E = h$(j);
                            Gvt(E);
                            return {
                                messages: E,
                                shouldQuery: false,
                                command: s
                            };
                        }
                        if (C.type === "query") {
                            return {
                                messages: [
                                    w,
                                    Wh(`<local-command-stdout>${TA(C.value)}</local-command-stdout>`, {
                                        commandRun: One(s, n)
                                    }),
                                    ...(C.metaMessages ?? []).map((U)=>xe({
                                            content: U,
                                            isMeta: true
                                        })),
                                    xe({
                                        content: C.prompt,
                                        isMeta: true
                                    })
                                ],
                                shouldQuery: true,
                                command: s,
                                resultText: C.value,
                                ...C.metaMessages !== undefined && {
                                    metaTexts: C.metaMessages
                                }
                            };
                        }
                        let u = C.level === "error" ? "local-command-stderr" : "local-command-stdout";
                        let A = Wh(`<${u}>${TA(C.value)}</${u}>`, {
                            contextUsage: C.contextUsage,
                            usageReport: C.usageReport,
                            commandRun: One(s, n),
                            commandOutcome: C.outcome ?? (C.level === "error" ? {
                                kind: "failed"
                            } : undefined)
                        });
                        if (R) {
                            return lt(o, w, {
                                messages: [
                                    A
                                ],
                                shouldQuery: false,
                                command: s,
                                resultText: C.value
                            });
                        }
                        return {
                            messages: [
                                w,
                                A,
                                ...(C.metaMessages ?? []).map((U)=>xe({
                                        content: U,
                                        isMeta: true
                                    }))
                            ],
                            shouldQuery: false,
                            command: s,
                            resultText: C.value,
                            ...C.metaMessages !== undefined && {
                                metaTexts: C.metaMessages
                            }
                        };
                    } catch (error) {
                        if (Ke(error)) {
                            t(`local command aborted: ${error instanceof Error ? error.message : String(error)}`);
                        } else {
                            c(ot(W(error), "local slash command threw"));
                        }
                        let v = Ke(error);
                        if (v && o.abortController.signal.aborted) {
                            f(D, "cmd_local_aborted");
                        } else {
                            m(D, v ? "cmd_local_aborted" : "cmd_local_threw");
                        }
                        let x = v ? "local-command-stdout" : "local-command-stderr";
                        let C = R ? PGn : "Interrupted";
                        let u = v ? lo(o.session) ? C : error instanceof Error ? error.message || C : C : ZWe(error, s.name, o.session);
                        let A = Wh(`<${x}>${Bt(TA(u))}</${x}>`, v ? undefined : {
                            commandRun: One(s, n),
                            commandOutcome: {
                                kind: "failed"
                            }
                        });
                        if (R) {
                            return lt(o, w, {
                                messages: [
                                    A
                                ],
                                shouldQuery: false,
                                command: s
                            });
                        }
                        return {
                            messages: [
                                w,
                                A
                            ],
                            shouldQuery: false,
                            command: s
                        };
                    }
                }
            case "prompt":
                {
                    if (!(s.isMcp && s.loadedFrom !== "mcp")) {
                        XTt(s.name, s, "user-slash");
                    }
                    let { stacked, trailingArgs, capped } = s.context === "fork" || s.getContext !== undefined || s.argsMayContainSlashCommands ? {
                        stacked: [],
                        trailingArgs: n,
                        capped: false
                    } : It(n, P, o.options.commands, M ? F ?? (()=>true) : undefined);
                    let v = trailingArgs;
                    let x;
                    if (stacked.length > 0) {
                        i("tengu_stacked_slash_commands", {
                            stacked_count: stacked.length
                        });
                    }
                    try {
                        let C = await at(s, v, o);
                        if ("blocked" in C) {
                            m(D, "cmd_hook_blocked");
                            return C.blocked;
                        }
                        if (!o.options.isNonInteractiveSession && !M) {
                            s.onUserTypedArgs?.(v, o);
                            if (s.getEffort?.(v, o) === undefined) {
                                let A = s.getDefaultEffort?.(v, o)?.notice;
                                if (A) {
                                    x = zt(A, "notice");
                                }
                            }
                        }
                        if (ROn(s, v, o) === "fork" && !sre(o)) {
                            let text = `/${commandName} ${n}`.trim();
                            let U = nS([
                                ...p,
                                {
                                    type: "text",
                                    text
                                }
                            ]) ?? text;
                            if (!H) {
                                throw Error("Forked dispatch requires forkDispatchHookExecutors");
                            }
                            let j = [];
                            let E = [];
                            for await (let J of H.executeUserPromptSubmitHooks(U, de(o).mode, o, Gkn({
                                promptSource: L ?? "typed"
                            }))){
                                if (J.message?.type === "progress") {
                                    continue;
                                }
                                if (J.message?.type === "attachment") {
                                    let N = J.message.attachment;
                                    if ("hookEvent" in N && N.hookEvent === "UserPromptSubmit") {
                                        if (N.type === "hook_non_blocking_error") {
                                            E.push(N.stderr || `Exit code ${N.exitCode}`);
                                        } else if (N.type === "hook_error_during_execution") {
                                            E.push(N.content);
                                        }
                                    }
                                }
                                if (J.blockingError) {
                                    m(D, "cmd_prompt_submit_hook_blocked");
                                    let N = H.getUserPromptSubmitHookBlockingMessage(J.blockingError);
                                    let ne = J.suppressOriginalPrompt ? N : `${N}

Original prompt: ${U}`;
                                    return {
                                        messages: [
                                            zt(ne, "warning", undefined, true)
                                        ],
                                        shouldQuery: false,
                                        resultText: ne,
                                        command: s,
                                        forkDispatched: true
                                    };
                                }
                                if (J.preventContinuation) {
                                    let N = J.stopReason ? `Operation stopped by hook: ${J.stopReason}` : "Operation stopped by hook";
                                    m(D, "cmd_prompt_submit_hook_stopped");
                                    return {
                                        messages: [
                                            xe({
                                                content: N
                                            }),
                                            zt(N, "warning", undefined, true)
                                        ],
                                        shouldQuery: false,
                                        resultText: N,
                                        command: s,
                                        forkDispatched: true
                                    };
                                }
                                if (J.additionalContexts && J.additionalContexts.length > 0) {
                                    j.push(Zt({
                                        type: "hook_additional_context",
                                        content: J.additionalContexts,
                                        hookName: "UserPromptSubmit",
                                        toolUseID: `hook-${randomUUID()}`,
                                        hookEvent: "UserPromptSubmit"
                                    }));
                                }
                            }
                            let z = await _t(s, v, o, p, r, canUseTool ?? ju, H, [
                                ...C.hookMessages,
                                ...j
                            ], M, _, Q, Y, X);
                            if (E.length > 0) {
                                z.messages.push(zt(`UserPromptSubmit hook error: ${E.join("; ")}`, "warning"));
                            }
                            if (z.aborted) {
                                m(D, "cmd_prompt_aborted");
                            } else if (z.threw) {
                                m(D, "cmd_prompt_threw");
                            } else {
                                g(D, G);
                                if (x) {
                                    z.messages.splice(1, 0, x);
                                }
                            }
                            return z;
                        }
                        let u = await We(s, v, o, p, r, _, C.hookMessages, M, Y, le, false, false, L);
                        if (stacked.length > 0 && P !== undefined) {
                            let A = u.messages[0];
                            if (A?.type === "user" && !A.isMeta) {
                                A.stackedOriginalInput = `/${s.name} ${P}`;
                            }
                        }
                        for (let A of stacked){
                            try {
                                let U = await at(A, trailingArgs, o);
                                if ("blocked" in U) {
                                    u.messages.push(zt(`Stacked skill /${Yt(A.name)} blocked by UserPromptExpansion hook`, "warning"));
                                    continue;
                                }
                                if (!o.options.isNonInteractiveSession && !M) {
                                    A.onUserTypedArgs?.(trailingArgs, o);
                                    if (A.getEffort?.(trailingArgs, o) === undefined) {
                                        let z = A.getDefaultEffort?.(trailingArgs, o)?.notice;
                                        if (z) {
                                            u.messages.push(zt(z, "notice"));
                                        }
                                    }
                                }
                                Le({
                                    commandName: A.name,
                                    agentId: o.agentId,
                                    isNonInteractiveSession: Boolean(o.options.isNonInteractiveSession),
                                    setAppState: o.setAppState,
                                    credentials: o.credentials
                                });
                                uKt(o.session, A.name, o.storageV5);
                                if (A.pluginInfo) {
                                    vT(A.pluginInfo.repository);
                                    uD(A.pluginInfo.repository, "command", twt(A, A.pluginInfo.pluginManifest.name));
                                }
                                if (!(A.isMcp && A.loadedFrom !== "mcp")) {
                                    XTt(A.name, A, "user-slash");
                                }
                                let j = await We(A, trailingArgs, o, [], [], undefined, U.hookMessages, M, Y, undefined, false, false, L);
                                let E = j.messages[0];
                                if (E?.type === "user" && !E.isMeta) {
                                    E.stackedExpansion = true;
                                }
                                u.messages.push(...j.messages);
                                u.allowedTools = [
                                    ...u.allowedTools ?? [],
                                    ...j.allowedTools ?? []
                                ];
                                u.disallowedTools = [
                                    ...u.disallowedTools ?? [],
                                    ...j.disallowedTools ?? []
                                ];
                                u.model = j.model ?? u.model;
                                u.effort = j.effort ?? u.effort;
                            } catch (error) {
                                if (Ke(error)) {
                                    throw error;
                                }
                                c(ot(W(error), "stacked slash command expansion threw"));
                                u.messages.push(zt(`Stacked skill /${Yt(A.name)} failed to load: ${ZWe(error, A.name, o.session)}`, "warning"));
                            }
                        }
                        if (capped) {
                            u.messages.push(zt(`Stacked command limit (${dt}) reached \u2014 remaining input passed as arguments`, "warning"));
                        }
                        if (x) {
                            u.messages.push(x);
                        }
                        g(D, G);
                        return u;
                    } catch (error) {
                        if (Ke(error)) {
                            m(D, "cmd_prompt_aborted");
                            let u = [
                                xe({
                                    content: v2({
                                        inputString: ke(s, n),
                                        precedingInputBlocks: p
                                    }),
                                    uuid: _
                                })
                            ];
                            if (!$7(o.abortController.signal.reason)) {
                                u.push(bk({
                                    toolUse: false,
                                    interruptedByShutdown: vR(o.abortController.signal)
                                }));
                            }
                            return {
                                messages: u,
                                shouldQuery: false,
                                command: s
                            };
                        }
                        m(D, "cmd_prompt_threw");
                        return {
                            messages: [
                                xe({
                                    content: v2({
                                        inputString: ke(s, n),
                                        precedingInputBlocks: p
                                    }),
                                    uuid: _
                                }),
                                xe({
                                    content: `<local-command-stderr>${Bt(ZWe(error, s.name, o.session))}</local-command-stderr>`
                                })
                            ],
                            shouldQuery: false,
                            command: s
                        };
                    }
                }
        }
    } catch (error) {
        if (error instanceof GP) {
            m(D, "cmd_malformed");
            return {
                messages: [
                    xe({
                        content: v2({
                            inputString: error.message,
                            precedingInputBlocks: p
                        })
                    })
                ],
                shouldQuery: false,
                command: s
            };
        }
        throw error;
    }
}
function ke(e, n) {
    let o = One(e, n);
    return vne(o.command, o.args);
}
function Re(e, n) {
    return vne(Yt(Mo(e)), _ye(e, n) ? "***" : O7(n));
}
function Te(e, n) {
    if (e) {
        return {
            messages: [],
            shouldQuery: false
        };
    }
    return n;
}
var dt = 5;
function It(e, n, commands, p) {
    if (n === undefined && p === undefined) {
        return {
            stacked: [],
            trailingArgs: e,
            capped: false
        };
    }
    let stacked = [];
    let h = e;
    let y = n;
    let capped = false;
    for(let M = 0;; M++){
        let F = h.trimStart();
        if (!F.startsWith("/")) {
            break;
        }
        if (M >= dt) {
            capped = true;
            break;
        }
        let P = ov(F);
        if (!P) {
            break;
        }
        let B = y;
        if (y !== undefined) {
            let L = y.trimStart();
            let H = L.startsWith("/") ? ov(L) : undefined;
            if (!H || H.commandName !== P.commandName) {
                break;
            }
            B = H.args;
        }
        let Q = Ls(P.commandName, commands);
        if (!Q || Q.type !== "prompt" || Q.context === "fork" || Q.getContext !== undefined || Q.argsMayContainSlashCommands || Q.userInvocable === false || !kd(Q) || pT(Q)) {
            break;
        }
        h = P.args;
        y = B;
        if (p?.(Q)) {
            continue;
        }
        stacked.push(Q);
    }
    return {
        stacked,
        trailingArgs: h,
        capped
    };
}
function G2o(e, n = "loading") {
    return [
        `<${Bb}>${e}</${Bb}>`,
        `<${fp}>${e}</${fp}>`,
        `<${EDt}>true</${EDt}>`
    ].join(`
`);
}
function Sjs(e, n) {
    return e === G2o(n);
}
function rt(name, planSlugSeed) {
    return [
        `<${Bb}>${name}</${Bb}>`,
        `<${fp}>/${name}</${fp}>`,
        planSlugSeed ? `<command-args>${planSlugSeed}</command-args>` : null
    ].filter(Boolean).join(`
`);
}
function it(e, planSlugSeed) {
    if (e.userInvocable !== false) {
        return rt(e.name, planSlugSeed);
    }
    if (e.loadedFrom === "skills" || e.loadedFrom === "syncedSkills" || e.loadedFrom === "plugin" || e.loadedFrom === "mcp" || e.loadedFrom === "memoryStore" || e.loadedFrom === "attachedFolder") {
        return G2o(e.name, e.progressMessage);
    }
    return rt(e.name, planSlugSeed);
}
async function at(e, n, o) {
    let hookMessages = [];
    let r = n ? `/${e.name} ${n}` : `/${e.name}`;
    try {
        for await (let h of y9r(e.source === "mcp" ? "mcp_prompt" : "slash_command", e.name, n, e.source, r, de(o).mode, o)){
            if (h.message?.type === "progress") {
                continue;
            }
            if (h.blockingError) {
                let y = `UserPromptExpansion operation blocked by hook:
${h.blockingError.blockingError}`;
                let _ = h.suppressOriginalPrompt ? y : `${y}

Original prompt: ${r}`;
                return {
                    blocked: {
                        messages: [
                            zt(_, "warning", undefined, true)
                        ],
                        shouldQuery: false,
                        resultText: _,
                        command: e
                    }
                };
            }
            if (h.preventContinuation) {
                let y = h.stopReason ? `${nxe}: ${h.stopReason}` : nxe;
                return {
                    blocked: {
                        messages: [
                            xe({
                                content: y,
                                isMeta: true
                            }),
                            zt(y, "warning", undefined, true)
                        ],
                        shouldQuery: false,
                        resultText: y,
                        command: e
                    }
                };
            }
            if (h.additionalContexts?.length) {
                hookMessages.push(Zt({
                    type: "hook_additional_context",
                    content: h.additionalContexts,
                    hookName: "UserPromptExpansion",
                    toolUseID: `hook-${randomUUID()}`,
                    hookEvent: "UserPromptExpansion"
                }));
            }
            if (h.message && !(h.message.type === "attachment" && h.message.attachment.type === "hook_success" && h.message.attachment.content === "")) {
                hookMessages.push(h.message);
            }
        }
    } catch (error) {
        if (!(error instanceof nc)) {
            throw error;
        }
        t("UserPromptExpansion hooks cancelled (control stream closed)");
    }
    return {
        hookMessages
    };
}
async function wjs(e, n, o, p, r = false, h = false) {
    let y = Ls(e, o);
    if (!y) {
        throw new GP(`Unknown command: ${Yt(e)}`);
    }
    if (y.type !== "prompt") {
        throw Error(`Unexpected ${y.type} command. Expected 'prompt' command. Use /${e} directly in the main conversation.`);
    }
    return We(y, n, p, [], [], undefined, [], undefined, undefined, undefined, r, h);
}
async function We(e, planSlugSeed, o, p = [], r = [], h, y = [], _, M, F, P = false, B = false, promptSource) {
    let L = await Kae(e);
    if (lhe(e) || kCt(e)) {
        throw new GP(`Unknown command: ${Yt(e.name)}`);
    }
    if (Yae(L)) {
        lJ(e, L);
        throw new GP(`Unknown command: ${Yt(e.name)}`);
    }
    if (sre(o) && !P) {
        let E = it(e, planSlugSeed);
        let z = e.isMcp && e.loadedFrom !== "mcp";
        let J = c3(e);
        if (e.disableModelInvocation || z || J) {
            let se = [
                z ? `"/${Yt(e.name)}" is an MCP prompt and cannot run in coordinator mode: the coordinator does not load prompt content, and workers cannot invoke MCP prompts via the ${Ro} tool.` : `Skill "/${Yt(e.name)}" is user-invocable only (${e.disableModelInvocation ? "disable-model-invocation" : "disabled for model invocation in settings"}) and cannot run in coordinator mode: the coordinator does not load skill content, and workers cannot invoke it via the ${Ro} tool.`
            ];
            if (e.description) {
                se.push(`Description: ${e.description}`);
            }
            let re = Object.entries(e.subcommands ?? {}).filter(([, ee])=>{
                let V = Ls(ee, o.options.commands);
                return V !== undefined && kd(V) && !V.disableModelInvocation && !c3(V) && !(V.isMcp && V.loadedFrom !== "mcp");
            }).map(([ee])=>ee);
            if (re.length > 0) {
                se.push(`Note: the subcommands ${re.map((ee)=>`"/${Yt(e.name)} ${Yt(ee)}"`).join(", ")} route to their own dedicated commands and DO still work when the user types them directly in the terminal (remote-control clients gate some commands separately).`);
            }
            se.push(`
Do not instruct workers to invoke this via the ${Ro} tool \u2014 it will be refused. Tell the user that ${re.length > 0 ? `/${Yt(e.name)} itself (beyond the subcommands above) is` : `the /${Yt(e.name)} command is`} unavailable in coordinator mode. If \u2014 and only if \u2014 the underlying task is achievable with the tools workers actually hold, you may brief a worker to do that work directly; do not promise this otherwise.`);
            let _e = [
                {
                    type: "text",
                    text: se.join(`
`)
                }
            ];
            return {
                messages: [
                    xe({
                        content: E,
                        uuid: h,
                        origin: M
                    }),
                    ...je([
                        xe({
                            content: Qe(r, p, _e),
                            isMeta: true
                        }),
                        ...y
                    ])
                ],
                shouldQuery: true,
                disallowedTools: Lu(e.disallowedTools ?? []),
                command: e
            };
        }
        let N = [
            `Skill "/${Yt(e.name)}" is available for workers.`
        ];
        if (e.description) {
            N.push(`Description: ${e.description}`);
        }
        if (e.whenToUse) {
            N.push(`When to use: ${e.whenToUse}`);
        }
        let ne = await s4e(e);
        if (ne.length > 0) {
            N.push(`This skill grants workers additional tool permissions: ${ne.map(Yt).join(", ")}`);
        }
        N.push(`
Instruct a worker to use this skill by including "Use the /${Yt(e.name)} skill" in your Agent prompt. The worker has access to the Skill tool and will receive the skill's content and permissions when it invokes it.`);
        let pe = [
            {
                type: "text",
                text: N.join(`
`)
            }
        ];
        return {
            messages: [
                xe({
                    content: E,
                    uuid: h,
                    origin: M
                }),
                ...je([
                    xe({
                        content: Qe(r, p, pe),
                        isMeta: true
                    }),
                    ...y
                ])
            ],
            shouldQuery: true,
            disallowedTools: Lu(e.disallowedTools ?? []),
            command: e
        };
    }
    let H = [];
    let Y = {
        ...o,
        submissionOrigin: M,
        promptSource,
        promptShellHandOff: H,
        ...(_ || P) && {
            options: {
                ...o.options,
                ..._ && {
                    modelScheduledOrigin: true
                },
                ...P && {
                    isSkillPreload: true,
                    readOnlySkillLoad: true
                }
            }
        }
    };
    let X = await Knr(e.name, await e.getPromptForCommand(planSlugSeed, Y));
    let le = P ? [] : await s4e(e);
    let s = !P && (e.hooks !== undefined || le.length > 0) ? await Kae(e) : undefined;
    let oe = (!cc("hooks") || mV(e.source)) && !P;
    if (s !== undefined) {
        let E = {
            hooks: e.hooks !== undefined && oe,
            grant: le.length > 0
        };
        if (E.hooks || E.grant) {
            ids(Yt(e.name), s, E);
        }
    } else if (e.hooks && oe) {
        let E = K();
        qe(o.sessionHooksRegistry, E, e.hooks, e.name, e.type === "prompt" ? e.skillRoot : undefined, mfs(e), m7e(e.source));
    }
    let D = e.source ? `${e.source}:${e.name}` : e.name;
    let G = X.filter((E)=>E.type === "text").map((E)=>E.text).join(`

`);
    cet(G, "skill", o.credentials, o.storageV5, o.appendSystemMessage);
    let method = irt(e.name);
    if (!(P && method !== null)) {
        VZ(e.name, D, G, o.agentId ?? null);
    }
    if (method && !P) {
        o.applyAttributionOp({
            kind: "recordVerification",
            method
        });
    }
    o.options.activeSkill = dD(e);
    let S = it(e, planSlugSeed);
    let allowedTools = s !== undefined ? [] : Lu(le);
    let disallowedTools = Lu(e.disallowedTools ?? []);
    if (disallowedTools.length > 0) {
        Kyt(o.setToolPermissionContext, disallowedTools, "union");
    }
    let C = Qe(r, p, X);
    let A = F4e(e) || P || _ || B ? [] : await wHe(gle(X.filter((E)=>E.type === "text").map((E)=>E.text).join(" "), o, F ?? null, [], {
        now: ()=>new Date().toISOString(),
        uuid: ()=>randomUUID()
    }, o.messages, "repl_main_thread", {
        planSlugSeed
    }));
    let U = await Wjt(e, AS(), o);
    return {
        messages: [
            xe({
                content: S,
                uuid: h,
                origin: M
            }),
            ...je([
                xe({
                    content: C,
                    isMeta: true,
                    ...H.length > 0 && {
                        promptShellHandOff: {
                            agentId: o.agentId ?? null,
                            commands: H
                        }
                    }
                }),
                ...U ? [
                    U
                ] : [],
                ...A,
                ...y
            ]),
            Zt({
                type: "command_permissions",
                allowedTools,
                model: $be(e.model)
            })
        ],
        shouldQuery: true,
        allowedTools,
        disallowedTools,
        model: $be(e.model),
        effort: e.getEffort?.(planSlugSeed, o) ?? e.getDefaultEffort?.(planSlugSeed, o)?.value ?? e.effort,
        command: e
    };
}
function Qe(e, n, o) {
    if (e.length > 0 || n.length > 0) {
        return [
            ...e,
            ...n,
            ...o
        ];
    }
    return o;
}
function lt(e, n, o) {
    e.applyMessageOp({
        type: "insert-after-uuid",
        uuid: n.uuid,
        messages: o.messages
    });
    return {
        ...o,
        messages: [],
        settledInPlace: true
    };
}
function je(e) {
    return e.map((n)=>{
        if (n.type === "user") {
            return {
                ...n,
                turnCompanion: true
            };
        }
        return n;
    });
}
export { t7e, jjt, ZWe, bjs, G2o, Sjs, wjs };
