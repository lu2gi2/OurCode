import { Kie, B6 } from "/$bunfs/root/chunk-vw7x8ctj.js";
import { qie } from "/$bunfs/root/chunk-7qnr52x0.js";
import { Age } from "/$bunfs/root/chunk-gs3dthpm.js";
import { Nh } from "/$bunfs/root/chunk-dn762950.js";
import { B, rT, GZ } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ot, W, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { St, _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { RQe, xQe, Yee } from "/$bunfs/root/chunk-q0azyh3r.js";
import { tt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { lr, gg, fc } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { Qh } from "/$bunfs/root/chunk-347xejxn.js";
import { uL, TEn, dhe, Ake, Qae, CA, ju, sp, l9r, kvt, I2e, Tvt, Kl, e_, o7r, ats } from "/$bunfs/root/chunk-kasbfbhj.js";
import { PAe } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { e0 } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { Mk, lS } from "/$bunfs/root/chunk-pfdtn0nk.js";
import { pn, p_ } from "/$bunfs/root/chunk-4r6b8efh.js";
import { Ru } from "/$bunfs/root/chunk-k5fhce8z.js";
import { l4 as taskRegistry } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { npn } from "/$bunfs/root/chunk-ce3s0ac9.js";
import { ev } from "/$bunfs/root/chunk-n687sxb1.js";
import { IQe } from "/$bunfs/root/chunk-tayw9wy3.js";
import { KH as runQuery } from "/$bunfs/root/chunk-daj64yn4.js";
import { tv, oK as toolCatalog } from "/$bunfs/root/chunk-sfjcyk7w.js";
import { ME } from "/$bunfs/root/chunk-va6abnm5.js";
import { kMo, KPe, u9e, N0t, TMo, kIr } from "/$bunfs/root/chunk-3hmyb6mq.js";
import { lJe } from "/$bunfs/root/chunk-g3ja849c.js";
import { eUt } from "/$bunfs/root/chunk-frk0gra8.js";
import { oD } from "/$bunfs/root/chunk-4p2j67rn.js";
import { U7e } from "/$bunfs/root/chunk-wqf8j4w7.js";
const ye = 30000;
function G(progressToken, sendNotification, k = ye) {
    if (progressToken === undefined) {
        return {
            report: undefined,
            [Symbol.dispose] () {}
        };
    }
    let U = 0;
    let progress = 0;
    let L = (n, message)=>{
        progress = n > progress ? n : progress + 0.001;
        return sendNotification({
            method: "notifications/progress",
            params: {
                progressToken,
                progress,
                message
            }
        });
    };
    let E = setInterval(()=>{
        U += 1;
        let n = U * k / 1000;
        L(n, `Running for ${n}s`).catch((N)=>{
            t(`MCP server: progress heartbeat not sent: ${l(N)}`);
        });
    }, k);
    E.unref?.();
    return {
        report: (n)=>L(0, n),
        [Symbol.dispose] () {
            clearInterval(E);
        }
    };
}
function Re(transport) {
    return "closeSSEStream" in transport;
}
const Ein = "callerGone";
async function lUs(S, O, k, U, R, L) {
    sp(S);
    let E = wVn(O, k, B(), "stdio", U, R, L);
    let n = new eUt;
    await E.connect(n);
    St(()=>E.close());
}
class ue extends oD {
    #e;
    constructor(S){
        super();
        this.#e = S;
    }
    get(S) {
        return this.#e.get(S);
    }
}
function wVn(debug, verbose, session, U, storageV5, L = "raw", E = {
    kind: "absent"
}) {
    let launchPermissionContext = E.kind === "parsed" ? E.context : undefined;
    let credentials = ME(storageV5);
    let y = U === "http";
    let Y = Qh();
    Y.disableBackgroundAgentLaunch();
    Y.disableRemoteAgentIsolation();
    Y.disableBackgroundDeadline();
    if (y) {
        kIr(Qh());
    } else {
        Y.disableBackgroundCompletionNotice();
    }
    ats(o7r());
    uL();
    if (rT()) {
        npn(storageV5).catch(c);
    }
    PAe();
    if (GZ()) {
        TEn().catch(c);
    }
    let readFileState = lS(Mk, undefined, y);
    let fe = new oD;
    let agentDefinitions = {
        activeAgents: [],
        allAgents: []
    };
    let oe = y ? Promise.resolve() : CA(se(), storageV5).then((e)=>{
        agentDefinitions = Qae(e, e.allAgents.filter((a)=>{
            if (dhe(a)) {
                return true;
            }
            Ake(a, "subagent", "definition");
            return false;
        }));
    }).catch((e)=>{
        c(e);
    });
    let P = new qie({
        name: "claude/tengu",
        version: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION
    }, {
        capabilities: {
            tools: {
                listChanged: true
            }
        }
    });
    let re = lr();
    let servedTools = ()=>N0t(y);
    if (y) {
        let { toolOutputServerCapabilities } = import.meta.require("/$bunfs/root/chunk-b5nz2fqn.js");
        let a = toolOutputServerCapabilities(servedTools, launchPermissionContext);
        if (a !== undefined) {
            P.registerCapabilities(a);
        }
        if (launchPermissionContext !== undefined) {
            let { holdsSafetyAsksCapability } = import.meta.require("/$bunfs/root/chunk-9hj22bjm.js");
            P.registerCapabilities(holdsSafetyAsksCapability());
            let { rendersUnderSessionRulesCapability } = import.meta.require("/$bunfs/root/chunk-kn5b24pg.js");
            P.registerCapabilities(rendersUnderSessionRulesCapability());
        }
        let { interfaceVersionCapability } = import.meta.require("/$bunfs/root/chunk-80xq1ej2.js");
        P.registerCapabilities(interfaceVersionCapability());
    }
    let I = null;
    let Se = ()=>{
        if (I === null) {
            return;
        }
        let e = servedTools().map((s)=>s.name).join(`
`);
        if (e === I) {
            return;
        }
        let a = I;
        I = e;
        P.sendToolListChanged().catch((s)=>{
            if (I === e) {
                I = a;
            }
            t(`mcp serve: tools/list_changed not sent: ${l(s)}`);
        });
    };
    let ne = false;
    let ge = e0(()=>{
        queueMicrotask(()=>{
            if (ne) {
                return;
            }
            try {
                Se();
            } catch (error) {
                t(`mcp serve: tool re-list on policy verdict failed: ${l(error)}`, {
                    level: "error"
                });
            }
        });
    });
    P.onclose = ()=>{
        ne = true;
        ge();
        re.abort(fc("shutdown"));
    };
    P.setRequestHandler(Kie, async ()=>{
        await oe;
        let e = await TMo(U, {
            agentDefinitions
        });
        I = e.map((a)=>a.name).join(`
`);
        return {
            tools: e
        };
    });
    let Te = {
        session,
        run: (e)=>e(),
        bind: (e)=>e,
        [Symbol.dispose]: ()=>{}
    };
    function V(e, tools, session) {
        let abortController = gg(re);
        let w = ()=>abortController.abort(fc("remote-cancel"));
        if (e.aborted) {
            w();
        } else {
            e.addEventListener("abort", w, {
                once: true
            });
        }
        let toolState = new ue(fe);
        return {
            toolUseContext: {
                abortController,
                messageQueue: e_(),
                session,
                agentContext: {
                    agentType: "main",
                    agentId: Nh()
                },
                options: {
                    commands: [],
                    tools,
                    toolCatalog,
                    mainLoopModel: tt(),
                    thinkingConfig: {
                        type: "disabled",
                        mechanical: true
                    },
                    mcpClients: [],
                    mcpResources: {},
                    isNonInteractiveSession: true,
                    runQuery,
                    debug,
                    verbose,
                    agentDefinitions
                },
                getAppState: ()=>{
                    if (E.kind === "parsed") {
                        return {
                            ...ev(),
                            toolPermissionContext: E.context
                        };
                    }
                    return ev();
                },
                setAppState: ()=>{},
                markPrResolvedThisSession: ()=>{},
                isUltrareviewOverageConfirmed: ()=>false,
                markUltrareviewOverageConfirmed: ()=>{},
                getAdvisorSetting: ()=>ev().advisorModel,
                getMcp: ()=>ev().mcp,
                getProactivityLevel: ()=>ev().proactivityLevel,
                getWebBrowser: ()=>ev().webBrowser,
                setToolPermissionContext: ()=>{},
                setSessionToolPermissionContext: ()=>{},
                taskRegistry,
                queuedNotificationsRegistry: IQe,
                sessionHooksRegistry: lJe,
                setWebBrowserSlice: ()=>{},
                setArtifactReadVersion: ()=>{},
                getArtifactReadObservation: Age(ev),
                artifactRegistries: RQe(),
                setArtifactContractTarget: ()=>{},
                getArtifactContractTarget: ()=>({
                        targetSlug: undefined,
                        pins: {}
                    }),
                enqueuePendingMemoryUpdate: ()=>{},
                agentLifecycle: U7e,
                teammateColors: xQe,
                rootToolSurface: {
                    tools,
                    mainLoopModel: tt()
                },
                messages: [],
                turnStartIndex: 0,
                readFileState,
                dedupUnchangedReads: false,
                toolState,
                toolDecisions: new Map,
                permissionRelays: Yee,
                getFileHistoryState: ()=>{},
                applyFileHistoryOp: ()=>{},
                applyAttributionOp: ()=>{},
                storageV5,
                credentials
            },
            toolState
        };
    }
    P.setRequestHandler(B6, async ({ params: { name, arguments: _arguments, _meta } }, { signal, sendNotification, authInfo, requestId })=>{
        let { transport } = P;
        let ae = ()=>{
            if (transport !== undefined && Re(transport)) {
                transport.closeSSEStream(requestId);
            }
        };
        if (signal.aborted) {
            ae();
        } else {
            signal.addEventListener("abort", ae, {
                once: true
            });
        }
        await oe;
        if (y) {
            let { refuseCallerInterface } = import.meta.require("/$bunfs/root/chunk-80xq1ej2.js");
            let { bringsToolHostPermissionRequest } = import.meta.require("/$bunfs/root/chunk-b5nz2fqn.js");
            let i = bringsToolHostPermissionRequest(_meta) ? undefined : refuseCallerInterface(name, _meta);
            if (i !== undefined) {
                return i;
            }
        }
        if (E.kind === "unreadable") {
            let r = `${name} was not run: this server could not read its launch settings (CLAUDE_CODE_MCP_SERVE_SETTINGS), so it runs nothing.`;
            t(`MCP server: ${r}`, {
                level: "error"
            });
            return {
                isError: true,
                content: [
                    {
                        type: "text",
                        text: r
                    }
                ]
            };
        }
        if (y) {
            let { bringsToolHostPermissionRequest, refusedResult } = import.meta.require("/$bunfs/root/chunk-b5nz2fqn.js");
            if (bringsToolHostPermissionRequest(_meta)) {
                let { handleToolHostPermissionRequest } = await import("/$bunfs/root/chunk-7vhqkk6p.js");
                return await handleToolHostPermissionRequest({
                    name,
                    args: _arguments,
                    meta: _meta,
                    servedTools,
                    launchPermissionContext,
                    newCall: ()=>{
                        let v = V(signal, servedTools(), session);
                        return {
                            toolUseContext: v.toolUseContext,
                            release: ()=>Z(v.toolState)
                        };
                    },
                    startHeartbeat: ()=>G(_meta?.progressToken, sendNotification)
                }) ?? refusedResult({
                    code: "unsupported_protocol",
                    message: `${name} was not run: this server gave no answer to the permission request sent with it. Retrying won't help.`
                });
            }
        }
        let le = _arguments?.deny_rules;
        using T = launchPermissionContext === undefined && !(Array.isArray(le) && le.length > 0) ? Te : (await import("/$bunfs/root/chunk-hwan3pfs.js")).ownCallDirectory(session, signal);
        if (y) {
            let { countedUnlessRepeated, SERVED_FILE_CALLS } = await import("/$bunfs/root/chunk-ah3ra19e.js");
            let i = SERVED_FILE_CALLS.get(name);
            if (i) {
                using x = G(_meta?.progressToken, sendNotification);
                let v;
                let u = authInfo?.extra?.[Ein];
                try {
                    let { summary, output } = await countedUnlessRepeated(name, T.bind(()=>i(_arguments, signal, {
                            toolUseContext: ()=>(v ??= V(signal, servedTools(), T.session)).toolUseContext,
                            session: T.session,
                            launchPermissionContext,
                            reportProgress: x.report,
                            callerGone: u instanceof AbortSignal ? u : undefined,
                            checkAsServedTool: async (D, o, b)=>{
                                let H = pn(servedTools(), D);
                                if (!H?.isEnabled()) {
                                    return {
                                        rejection: `${name} was not run: this server does not serve ${D}.`
                                    };
                                }
                                let F = p_(H, o);
                                if (!F.success) {
                                    return {
                                        rejection: `${name} was not run: its input is not valid for ${D}: ${F.error.message}`
                                    };
                                }
                                let { toolUseContext } = v ??= V(signal, servedTools(), T.session);
                                let te = await H.validateInput?.(F.data, toolUseContext);
                                if (te && !te.result) {
                                    return {
                                        rejection: `${name} was not run: ${D} refused its input: ${te.message}`
                                    };
                                }
                                let de = b.length === 0 ? launchPermissionContext : (await import("/$bunfs/root/chunk-nnd656vp.js")).withDenyRulesOfOneCall(launchPermissionContext, b);
                                if (b.length > 0 && de === undefined) {
                                    return {
                                        rejection: `${name} was not run: one of the deny rules sent with it could not be read. Retrying won't help.`
                                    };
                                }
                                let { checkPlainCall } = await import("/$bunfs/root/chunk-b5nz2fqn.js");
                                return checkPlainCall(H, F.data, toolUseContext, de, _meta);
                            }
                        })));
                    let { encodeServedOutput } = await import("/$bunfs/root/chunk-ej561dvt.js");
                    return T.run(()=>encodeServedOutput(summary, output));
                } catch (error) {
                    return {
                        isError: true,
                        content: [
                            {
                                type: "text",
                                text: l(error)
                            }
                        ]
                    };
                } finally{
                    if (v) {
                        Z(v.toolState);
                    }
                }
            }
        }
        let K = servedTools();
        let Q = y && kMo.has(name);
        if (y && !Q) {
            let { answerToolOutputRequest } = await import("/$bunfs/root/chunk-b5nz2fqn.js");
            let C = await T.run(()=>answerToolOutputRequest({
                    name,
                    args: _arguments,
                    meta: _meta,
                    tools: K,
                    launchPermissionContext,
                    newCall: ()=>{
                        let i = V(signal, K, T.session);
                        return {
                            toolUseContext: i.toolUseContext,
                            release: ()=>Z(i.toolState)
                        };
                    },
                    startHeartbeat: ()=>G(_meta?.progressToken, sendNotification)
                }));
            if (C !== undefined) {
                return C;
            }
        }
        let d = Q ? pn(tv(), name) : pn(K, name);
        if (!d) {
            throw Error(`Tool ${name} not found`);
        }
        let ce = Q ? authInfo?.extra?.[Ein] : undefined;
        let { toolUseContext, toolState } = V(ce instanceof AbortSignal ? AbortSignal.any([
            signal,
            ce
        ]) : signal, K, T.session);
        try {
            if (!d.isEnabled()) {
                let o = `Tool ${name} is not enabled`;
                t(`MCP server: ${o}`, {
                    level: "error"
                });
                return {
                    isError: true,
                    content: [
                        {
                            type: "text",
                            text: o
                        }
                    ]
                };
            }
            let r = {
                ..._arguments ?? {}
            };
            let C = [];
            if (y) {
                for (let o of KPe){
                    if (o in r) {
                        delete r[o];
                        C.push(o);
                    }
                }
            }
            let i = p_(d, r);
            if (!i.success) {
                let o = `Tool ${name} arguments failed schema validation: ${i.error.message}`;
                t(`MCP server: ${o}`, {
                    level: "error"
                });
                return {
                    isError: true,
                    content: [
                        {
                            type: "text",
                            text: o
                        }
                    ]
                };
            }
            let x = await T.run(()=>d.validateInput?.(i.data, toolUseContext));
            if (x && !x.result) {
                let o = `Tool ${name} input is invalid: ${x.message}`;
                t(`MCP server: ${o}`, {
                    level: "error"
                });
                return {
                    isError: true,
                    content: [
                        {
                            type: "text",
                            text: o
                        }
                    ]
                };
            }
            let v = false;
            if (y && L === "rendered") {
                let { asksForEditResult } = await import("/$bunfs/root/chunk-jnef9266.js");
                v = asksForEditResult(d.name, _meta);
            }
            let u = await T.run(async ()=>(await import("/$bunfs/root/chunk-b5nz2fqn.js")).checkPlainCall(d, i.data, toolUseContext, launchPermissionContext, _meta));
            if ("rejection" in u) {
                t(`MCP server: ${u.rejection}`, {
                    level: "error"
                });
                return {
                    isError: true,
                    content: [
                        {
                            type: "text",
                            text: u.rejection
                        }
                    ],
                    ...u.meta !== undefined && {
                        _meta: u.meta
                    }
                };
            }
            using z = G(_meta?.progressToken, sendNotification);
            let j = await T.run(()=>d.call(i.data, {
                    ...u.toolUseContext,
                    permissionPhase: u.toolUseContext.permissionPhase ?? {}
                }, ju, Kl({
                    content: []
                }), undefined, L === "raw" ? {
                    gitDiffRead: true
                } : v ? {
                    smallResultAsked: true
                } : undefined));
            let A;
            let D = false;
            if (Q) {
                let { encodeUnlistedToolResult } = await import("/$bunfs/root/chunk-ej561dvt.js");
                A = T.run(()=>encodeUnlistedToolResult(d, j));
            } else if (L === "rendered") {
                let { renderToolResultForMCP, withinAnswerLimit } = await import("/$bunfs/root/chunk-rbaegrxt.js");
                let { answer, tooLarge } = withinAnswerLimit(d, await T.run(()=>renderToolResultForMCP(d, j, toolUseContext)));
                A = v ? await (await import("/$bunfs/root/chunk-jnef9266.js")).withEditResult(answer, j) : answer;
                D = tooLarge;
            }
            if (A === undefined) {
                let o = j.data;
                let b = typeof o === "object" && o !== null && "backgroundTaskId" in o && typeof o.backgroundTaskId === "string" ? {
                    ...o,
                    backgroundOutputPath: Ru(o.backgroundTaskId)
                } : o;
                A = {
                    content: [
                        {
                            type: "text",
                            text: _(b)
                        }
                    ]
                };
            }
            if (C.length > 0) {
                let o = u9e(C);
                let b = A.content.at(-1);
                if (b?.type === "text") {
                    b.text += `
${o}`;
                } else {
                    A.content.push({
                        type: "text",
                        text: o
                    });
                }
            }
            if (D) {
                f(kvt(d.name), "result_too_large");
            } else {
                g(kvt(d.name));
            }
            return A;
        } catch (error) {
            let i = (error instanceof Error ? l9r(error) : [
                String(error)
            ]).filter(Boolean).join(`
`).trim() || "Error";
            if (I2e(error)) {
                t(`MCP server tool call '${name}' aborted`);
            } else {
                let { code, isSad } = Tvt(error);
                if (isSad) {
                    t(`MCP server tool call '${name}' failed: ${i}`, {
                        level: "error"
                    });
                    f(kvt(d.name), code);
                } else {
                    let u = W(error);
                    c("telemetryMessage" in u ? u : ot(u, `mcp server tool '${d.name}' threw`));
                    m(kvt(d.name), code);
                }
            }
            return {
                isError: true,
                content: [
                    {
                        type: "text",
                        text: i
                    }
                ]
            };
        } finally{
            Z(toolState);
        }
    });
    return P;
}
function Z(S) {}
export { Ein, lUs, wVn };
