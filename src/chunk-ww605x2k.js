import { la, kh, yR, Ju } from "/$bunfs/root/chunk-0ycjphb5.js";
import { So } from "/$bunfs/root/chunk-dn762950.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { $Z, Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { wO } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Un } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { Ti } from "/$bunfs/root/chunk-gr4a0fky.js";
import { lr } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { ca as from_1 } from "/$bunfs/root/chunk-6g4165br.js";
import { SP } from "/$bunfs/root/chunk-k3tkc302.js";
import { XAs } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { LIn } from "/$bunfs/root/chunk-cet7cb4b.js";
import { jst, kB } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { Xd, FK, Ff, ihe, f3, Vte, WK, zK, tne, EI, BTn, jTn, WTn, dtt, zTn, BC, rDe, Kke, AJ, h$, gir, hDe, tS, lW, wne, Y4t, Is, xe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Pre } from "/$bunfs/root/chunk-pfdtn0nk.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { L4 } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { Zp } from "/$bunfs/root/chunk-k5fhce8z.js";
import { ZC } from "/$bunfs/root/chunk-zc6kefep.js";
import { Zlr, hVe, $ts, CI, Dnt, PYt } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { j0e } from "/$bunfs/root/chunk-az5m8ek6.js";
import { V5t } from "/$bunfs/root/chunk-2eh7h0gt.js";
import { xce, IM, zds, qso, a_e, bB, TKe, jS, Vfr, UAe, HL, BAe, o8t, dLe, sS, oHn, WAt, Vot, GAt, qot, l8t, c8t, LD, d8t, YAt } from "/$bunfs/root/chunk-tsssve1m.js";
import { Ek, $A, dQ } from "/$bunfs/root/chunk-5ne6jp11.js";
import { zIn } from "/$bunfs/root/chunk-xg0h9r8v.js";
import { KUt, rBt, oBt, hjo, ZJe, zfn } from "/$bunfs/root/chunk-3411v2q1.js";
import { Aqo } from "/$bunfs/root/chunk-tn5qaff8.js";
import { WJn, SA } from "/$bunfs/root/chunk-8wvdsmns.js";
import { JUr } from "/$bunfs/root/chunk-z0bcfh3f.js";
import { c8n } from "/$bunfs/root/chunk-3e3d02wn.js";
import { fOe } from "/$bunfs/root/chunk-vee10wa8.js";
import { Ybn, fzt, mzt } from "/$bunfs/root/chunk-3d07py2z.js";
import { $At, zMn, GMn } from "/$bunfs/root/chunk-ez1x5yhw.js";
import { Gn } from "/$bunfs/root/chunk-jcpp67yk.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
const Ve = 500;
const he = 500;
function He(identity, e, s, v, a) {
    return async (h, p, S, y, O, H)=>{
        let R = H ?? await tne(h, p, S, y, O, FK, undefined, v);
        if (R.behavior !== "ask") {
            return R;
        }
        let input = R.updatedInput ?? p;
        if (e.signal.aborted) {
            return {
                behavior: "ask",
                message: lW
            };
        }
        let toolPermissionContext = de(S);
        let E = ()=>h.description(input, {
                isNonInteractiveSession: S.options.isNonInteractiveSession,
                toolPermissionContext,
                tools: S.options.tools
            });
        if (S.requestDialog !== undefined) {
            let o = zfn.of(S.session).permissionContextSetter;
            let ctx = rBt(h, p, S, y, O, v, (B)=>{
                o?.(B, {
                    preserveMode: true
                });
            });
            let T = await KUt({
                ctx,
                updatedInput: R.updatedInput,
                suggestions: R.suggestions,
                permissionMode: toolPermissionContext.mode,
                askSuppressesAlwaysAllowRule: R.suppressAlwaysAllowRule === true,
                askIsPersonOnly: R.personOnly === true
            });
            if (T) {
                return T;
            }
            if (e.signal.aborted) {
                return {
                    behavior: "ask",
                    message: lW
                };
            }
            let I = await E();
            if (e.signal.aborted) {
                return {
                    behavior: "ask",
                    message: lW
                };
            }
            let l = Date.now();
            try {
                return await new Promise((resolve, reject)=>{
                    oBt({
                        ctx,
                        description: I,
                        result: R,
                        awaitAutomatedChecksBeforeDialog: true
                    }, resolve).catch(reject);
                });
            } finally{
                s(Date.now() - l);
            }
        }
        if (R.localDisplayOnly || R.forcedByCaller === true) {
            return fOe(h.name, "the teammate mailbox (a static-description wire)");
        }
        let C = await E();
        if (e.signal.aborted) {
            return {
                behavior: "ask",
                message: lW
            };
        }
        return new Promise((resolve)=>{
            let u = zMn({
                toolName: h.name,
                toolUseId: O,
                input,
                description: C,
                permissionSuggestions: R.suggestions,
                workerId: identity.agentId,
                workerName: identity.agentName,
                workerColor: identity.color,
                teamName: identity.teamName
            });
            Ybn({
                requestId: u.id,
                toolUseId: O,
                toolName: u.toolName,
                inputDigest: $At(u.toolName, input),
                onAllow (l, B, V, contentBlocks) {
                    I();
                    let J = L4(B, undefined, de(S));
                    let ee = h.suppressesAllPermissionUpdates?.(input) === true ? zK(J) : h.suppressesAlwaysAllowRule?.(input) === true || R.suppressAlwaysAllowRule === true ? WK(J, h, de(S)) : J;
                    kB(ee, S.storageV5).catch(c);
                    let updatedInput = l && Object.keys(l).length > 0 ? l : input;
                    resolve({
                        behavior: "allow",
                        updatedInput,
                        userModified: false,
                        ...contentBlocks && contentBlocks.length > 0 && {
                            contentBlocks
                        }
                    });
                },
                onReject (l, contentBlocks) {
                    I();
                    let V = l ? `${wne}${l}` : lW;
                    resolve({
                        behavior: "ask",
                        message: V,
                        contentBlocks
                    });
                },
                onRefuse (l) {
                    I();
                    resolve({
                        behavior: "ask",
                        message: l
                    });
                },
                onUnboundVerdict () {}
            });
            GMn(u, S.storageV5).then((l)=>{
                if (!l) {
                    I();
                    resolve({
                        behavior: "ask",
                        message: "The permission request could not be delivered to the team lead (mailbox write failed). Retry the tool call."
                    });
                }
            });
            let P = setInterval(async (l, B, V, G, J, ee, ne)=>{
                if (l.signal.aborted) {
                    B();
                    V({
                        behavior: "ask",
                        message: lW
                    });
                    return;
                }
                let ae = await TKe(G.agentName, G.teamName, ee);
                let fe = a_e(ae.filter((K)=>K && !K.read), bB(G.agentName, G.teamName), {
                    roster: ne(),
                    isPaneTeammate: false
                });
                for (let K of ae){
                    if (K && !K.read && fe.get(K) !== "forged") {
                        let W = GAt(K.text);
                        if (W && W.request_id === J.id) {
                            await Vfr(G.agentName, G.teamName, K, ee);
                            if (K.from !== from_1) {
                                t(`[InProcessRunner] Ignoring permission response from non-team-lead: ${K.from}`, {
                                    level: "warn"
                                });
                                continue;
                            }
                            if (W.subtype === "success") {
                                mzt({
                                    requestId: W.request_id,
                                    toolUseId: W.tool_use_id,
                                    approvedRequest: W.approved_request,
                                    decision: "approved",
                                    updatedInput: W.response?.updated_input,
                                    permissionUpdates: W.response?.permission_updates
                                });
                            } else {
                                mzt({
                                    requestId: W.request_id,
                                    toolUseId: W.tool_use_id,
                                    approvedRequest: W.approved_request,
                                    decision: "rejected",
                                    feedback: W.error
                                });
                            }
                            return;
                        }
                    }
                }
            }, Ve, e, I, resolve, identity, u, S.storageV5, a);
            let T = ()=>{
                I();
                resolve({
                    behavior: "ask",
                    message: lW
                });
            };
            e.signal.addEventListener("abort", T, {
                once: true
            });
            function I() {
                clearInterval(P);
                fzt(u.id);
                e.signal.removeEventListener("abort", T);
            }
        });
    };
}
function j(taskId, e, taskRegistry) {
    taskRegistry.update(taskId, (v)=>{
        if (v.type === "in_process_teammate") {
            return e(v);
        }
        return v;
    });
}
async function Ye(from, text, color, teamName, storageV5) {
    return jS(from_1, {
        from,
        text,
        timestamp: new Date().toISOString(),
        color
    }, teamName, storageV5);
}
async function Re(agentName, color, teamName, v, storageV5) {
    let h = WAt(agentName, v);
    let p;
    try {
        p = await Ye(agentName, _(h), color, teamName, storageV5);
    } finally{
        Vot(h, v?.result, p);
    }
    return p !== undefined;
}
function Je(n) {
    let e = new Set(n.filter((s)=>s.status !== "completed").map((s)=>s.id));
    return n.find((s)=>{
        if (s.status !== "pending") {
            return false;
        }
        if (s.owner) {
            return false;
        }
        return s.blockedBy.every((v)=>!e.has(v));
    });
}
function ze(n) {
    let e = `Complete all open tasks. Start with task #${n.id}: 

 ${n.subject}`;
    if (n.description) {
        e += `

${n.description}`;
    }
    return e;
}
async function We(parentSessionId, agentName, teammateContext_hasTaskListTools, storageV5) {
    if (!teammateContext_hasTaskListTools) {
        return;
    }
    try {
        let a = await IM(parentSessionId, storageV5);
        let h = Je(a);
        if (!h) {
            return;
        }
        let p = await zds(parentSessionId, h.id, agentName, undefined, storageV5);
        if (!p.success) {
            t(`[inProcessRunner] Failed to claim task #${h.id}: ${p.reason}`);
            return;
        }
        await xce(parentSessionId, h.id, {
            status: "in_progress"
        }, storageV5);
        t(`[inProcessRunner] Claimed task #${h.id}: ${h.subject}`);
        return ze(h);
    } catch (error) {
        t(`[inProcessRunner] Error checking task list: ${error}`);
        return;
    }
}
async function Ie(identity, taskId, taskRegistry, storageV5, a, roster) {
    let p;
    try {
        p = await TKe(identity.agentName, identity.teamName, storageV5, {
            throwOnUnknownReadError: true
        });
        a.readFailures = 0;
    } catch (error) {
        a.readFailures++;
        t(`[inProcessRunner] ${identity.agentName} could not read mailbox (${a.readFailures} consecutive): ${error}`, {
            level: "warn"
        });
        return null;
    }
    let S = a_e(p.filter((o)=>o && !o.read), bB(identity.agentName, identity.teamName), {
        roster,
        isPaneTeammate: false
    });
    let y = (o)=>S.get(o) === "forged";
    let O = new Set(p.filter((o)=>o && !o.read).map(HL));
    for (let o of a.consumedUnmarked){
        if (!O.has(o)) {
            a.consumedUnmarked.delete(o);
        }
    }
    let H = async (o)=>{
        let u = await hDe(o, {
            provenanceOf: (T)=>S.get(T) ?? "unverifiable",
            agentId: identity.resumableAgentId ?? identity.agentId
        });
        let P = new Set(u.map(HL));
        for (let T of o){
            let I = HL(T);
            if (!P.has(I)) {
                a.consumedUnmarked.add(I);
            }
        }
        return u;
    };
    let R = -1;
    let request = null;
    for(let o = 0; o < p.length; o++){
        let u = p[o];
        if (u && !u.read && !y(u)) {
            let P = qot(u.text);
            let I = (S.get(u) === "verified" || u.from === from_1 || qso(u.from, roster) !== undefined) && P?.from === u.from ? P : null;
            if (I) {
                R = o;
                request = I;
                break;
            }
        }
    }
    if (R !== -1) {
        if (a.count > 0) {
            let P = p.filter((T, I)=>!T.read && I !== R && (y(T) || !LD(T.text)) && !a.deliveredUnmarked.has(HL(T)) && !a.consumedUnmarked.has(HL(T)));
            if (P.length > 0) {
                for (let l of P){
                    a.deliveredUnmarked.add(HL(l));
                }
                let T = await BAe(identity.agentName, identity.teamName, P, storageV5);
                if (T) {
                    a.count = 0;
                    a.reported = false;
                    a.deliveredUnmarked.clear();
                } else if (!a.reported) {
                    a.reported = true;
                    f("swarm_inbox_poll", "worker_mark_read_failed_streak");
                }
                t(`[inProcessRunner] ${identity.agentName} delivering ${P.length} held message(s) ahead of a shutdown_request${T ? "" : " (mark still not landed)"}`, {
                    level: T ? "debug" : "warn"
                });
                let I = await H(P);
                if (I.length > 0) {
                    return {
                        type: "new_messages",
                        messages: I
                    };
                }
            }
        }
        let o = p[R];
        let u = F(p.slice(0, R), (P)=>!P.read);
        t(`[inProcessRunner] ${identity.agentName} received shutdown request from ${request?.from} (prioritized over ${u} unread messages)`);
        await Vfr(identity.agentName, identity.teamName, o, storageV5);
        return {
            type: "shutdown_request",
            request,
            originalMessage: o.text,
            entryFrom: o.from
        };
    }
    let N = [];
    let E = [];
    for (let o of p){
        if (!o || o.read) {
            continue;
        }
        if (!y(o) && LD(o.text)) {
            N.push(o);
        } else if (!a.consumedUnmarked.has(HL(o))) {
            E.push(o);
        }
    }
    let C = null;
    if (N.length > 0) {
        for (let u of N){
            let P = l8t(u.text);
            if (P && u.from === from_1) {
                let T = Aqo(taskId, P, taskRegistry, storageV5);
                if (T) {
                    t(`[inProcessRunner] ${identity.agentName} applied lead plan_approval_response: approved=${T.approved}`);
                    C = d8t(T);
                } else {
                    t(`[inProcessRunner] ${identity.agentName} ignoring stale plan_approval_response (not awaiting approval)`);
                }
                continue;
            }
            if (c8t(u.text)) {
                t(`[inProcessRunner] ${identity.agentName} dropping mode_set_request message: permission mode changes are never accepted from the inbox`, {
                    level: "warn"
                });
                continue;
            }
            t(`[inProcessRunner] ${identity.agentName} dropping protocol frame from ${u.from}: ${u.text.substring(0, 80)}`, {
                level: "warn"
            });
        }
        if (!await BAe(identity.agentName, identity.teamName, N, storageV5)) {
            t(`[inProcessRunner] ${identity.agentName} could not mark ${N.length} protocol frame(s) read; retrying next poll`, {
                level: "warn"
            });
        }
    }
    if (C) {
        return {
            type: "new_message",
            message: C,
            from: from_1
        };
    }
    if (E.length > 0) {
        if (await BAe(identity.agentName, identity.teamName, E, storageV5)) {
            a.count = 0;
            a.reported = false;
            a.deliveredUnmarked.clear();
        } else {
            let P = ++a.count;
            if (P < UAe) {
                t(`[inProcessRunner] ${identity.agentName} could not mark ${E.length} message(s) read (${P}/${UAe}); delivery retried next poll`, {
                    level: "warn"
                });
                return null;
            }
            t(`[inProcessRunner] ${identity.agentName} could not mark ${E.length} message(s) read for ${P} poll(s); delivering the batch unmarked`, {
                level: "warn"
            });
            if (!a.reported) {
                a.reported = true;
                f("swarm_inbox_poll", "worker_mark_read_failed_streak");
            }
            for (let T of E){
                a.deliveredUnmarked.add(HL(T));
            }
        }
        t(`[inProcessRunner] ${identity.agentName} draining ${E.length} message(s) from ${D(E.map((P)=>P.from)).join(", ")}`);
        let u = await H(E);
        if (u.length === 0) {
            return null;
        }
        return {
            type: "new_messages",
            messages: u
        };
    }
    if (a.count > 0) {
        a.count = 0;
        a.reported = false;
        a.deliveredUnmarked.clear();
    }
    return null;
}
async function Xe(identity, abortController, taskId, getAppState, taskRegistry, parentSessionId, standalone, teammateContext_hasTaskListTools, y, O = false, storageV5) {
    t(`[inProcessRunner] ${identity.agentName} starting poll loop (abort=${abortController.signal.aborted})`);
    let R = Date.now();
    let L = false;
    let N = 0;
    while(!abortController.signal.aborted){
        if (N > 0) {
            await Q(he);
        }
        N++;
        let E = getAppState();
        let C = E.tasks[taskId];
        if (C && C.type === "in_process_teammate" && C.pendingUserMessages.length > 0) {
            let T = C.pendingUserMessages[0];
            j(taskId, (I)=>({
                    ...I,
                    pendingUserMessages: I.pendingUserMessages.slice(1)
                }), taskRegistry);
            t(`[inProcessRunner] ${identity.agentName} found pending user message (poll #${N})`);
            return {
                type: "new_message",
                message: T.text,
                origin: T.origin,
                from: "user"
            };
        }
        let o = identity.resumableAgentId !== undefined && rDe(identity.resumableAgentId, taskRegistry);
        let u = O || C?.type === "in_process_teammate" && C.awaitingPlanApproval || E.viewingAgentTaskId === taskId || PYt(E.tasks, taskId) || o;
        if (u) {
            R = Date.now();
        }
        if (O && C?.type === "in_process_teammate" && C.evictAfter !== undefined) {
            j(taskId, (T)=>({
                    ...T,
                    evictAfter: undefined
                }), taskRegistry);
        }
        if (C?.type === "in_process_teammate" && C.evictAfter !== undefined && (o && C.evictAfter <= Date.now() + he || L && !o)) {
            j(taskId, (T)=>({
                    ...T,
                    evictAfter: Date.now() + CI
                }), taskRegistry);
        }
        L = o;
        if (abortController.signal.aborted) {
            t(`[inProcessRunner] ${identity.agentName} aborted while waiting (poll #${N})`);
            return {
                type: "aborted"
            };
        }
        if (standalone) {
            if (EI()) {
                if (!u && Date.now() - R >= Dnt) {
                    t(`[inProcessRunner] ${identity.agentName} idle timeout after ${Dnt}ms (poll #${N})`);
                    return {
                        type: "idle_timeout"
                    };
                }
            }
            continue;
        }
        t(`[inProcessRunner] ${identity.agentName} poll #${N}: checking mailbox`);
        try {
            let T = await Ie(identity, taskId, taskRegistry, storageV5, y, getAppState().teamContext?.teammates);
            if (T) {
                return T;
            }
            if (y.count > 0 && y.readFailures < UAe) {
                R = Date.now();
                let I = getAppState().tasks[taskId];
                if (I?.type === "in_process_teammate" && I.evictAfter !== undefined) {
                    j(taskId, (l)=>({
                            ...l,
                            evictAfter: Date.now() + CI
                        }), taskRegistry);
                }
                continue;
            }
        } catch (error) {
            t(`[inProcessRunner] ${identity.agentName} poll error: ${error}`);
        }
        let P = await We(parentSessionId, identity.agentName, teammateContext_hasTaskListTools, storageV5);
        if (P) {
            return {
                type: "new_message",
                message: P,
                from: "task-list"
            };
        }
        if (EI()) {
            if (!u && Date.now() - R >= Dnt) {
                t(`[inProcessRunner] ${identity.agentName} idle timeout after ${Dnt}ms (poll #${N})`);
                return {
                    type: "idle_timeout"
                };
            }
        }
    }
    t(`[inProcessRunner] ${identity.agentName} exiting poll loop (abort=${abortController.signal.aborted}, polls=${N})`);
    return {
        type: "aborted"
    };
}
async function Qe({ identity, taskId, prompt, description, spawnedAgentType, agentDefinition, teammateContext, toolUseContext, abortController, model, systemPrompt, systemPromptMode, allowedTools, allowPermissionPrompts, invokingRequestId, standalone = false, resumeMessages, resumeReplacementState, initialFrom }) {
    let { setAppState, taskRegistry } = toolUseContext;
    let B = LIn(taskId);
    let V = {
        count: 0,
        reported: false,
        deliveredUnmarked: new Set,
        consumedUnmarked: new Set,
        readFailures: 0
    };
    t(`[inProcessRunner] Starting agent loop for ${identity.agentId}`);
    let agentContext = {
        agentId: identity.agentId,
        parentAgentId: toolUseContext.agentId,
        depth: Ju(toolUseContext.agentContext),
        parentSessionId: identity.parentSessionId,
        agentName: identity.agentName,
        teamName: identity.teamName,
        agentColor: identity.color,
        planModeRequired: identity.planModeRequired,
        isTeamLead: false,
        agentType: "teammate",
        invokingRequestId,
        invocationKind: "spawn",
        invocationEmitted: false,
        isBackgroundAgent: true
    };
    let { tools, mainLoopModel } = toolUseContext.rootToolSurface;
    let ne;
    if (systemPromptMode === "replace" && systemPrompt) {
        ne = systemPrompt;
    } else {
        let z = [
            ...(await BC(tools, mainLoopModel, {
                teammate: true
            })).filter((Y)=>Y !== wO),
            JUr
        ];
        if (agentDefinition) {
            let Y = agentDefinition.getSystemPrompt({
                toolUseContext,
                primedAgentMemory: await jst(agentDefinition, toolUseContext.storageV5)
            });
            if (Y) {
                z.push(`
# Custom Agent Instructions
${Y}`);
            }
            if (agentDefinition.memory) {
                i("tengu_agent_memory_loaded", {
                    ...false,
                    scope: d(agentDefinition.memory),
                    source: b("in-process-teammate")
                });
            }
        }
        if (systemPromptMode === "append" && systemPrompt) {
            z.push(systemPrompt);
        }
        ne = z.join(`
`);
    }
    let teammateContext_hasTaskListTools = teammateContext.hasTaskListTools;
    let fe = [
        Gn,
        ...teammateContext_hasTaskListTools ? [
            Ek,
            dQ,
            ZC,
            $A
        ] : []
    ];
    let disallowedTools = agentDefinition?.disallowedTools?.filter((A)=>!fe.includes(Un(A).toolName));
    let W = {
        agentType: identity.agentName,
        whenToUse: `In-process teammate: ${identity.agentName}`,
        getSystemPrompt: ()=>ne,
        tools: agentDefinition?.tools ? D([
            ...agentDefinition.tools,
            ...fe
        ]) : [
            "*"
        ],
        ...disallowedTools?.length && {
            disallowedTools
        },
        source: "projectSettings",
        permissionMode: "default",
        ...agentDefinition?.model && {
            model: agentDefinition.model
        },
        ...agentDefinition?.effort !== undefined && {
            effort: agentDefinition.effort
        },
        ...agentDefinition?.omitClaudeMd && {
            omitClaudeMd: true
        },
        ...agentDefinition?.autoCompactWindow !== undefined && {
            autoCompactWindow: agentDefinition.autoCompactWindow
        }
    };
    let q = resumeMessages ? [
        ...resumeMessages
    ] : [];
    let recordedUuids = new Set(resumeMessages?.map((A)=>A.uuid));
    let Be = {
        taskKind: "in_process_teammate",
        teamName: identity.teamName,
        color: identity.color,
        planModeRequired: identity.planModeRequired,
        ...agentDefinition && {
            customAgentType: agentDefinition.agentType
        },
        ...spawnedAgentType !== undefined && {
            spawnedAgentType
        },
        ...model && {
            model
        }
    };
    let Se = o8t({
        from: initialFrom ?? from_1,
        text: prompt,
        summary: description
    });
    let X = Se;
    let origin;
    let Te = false;
    let hold_evict = false;
    let ke = (resumeMessages?.length ?? 0) > 0;
    let Ne = false;
    let ye = resumeMessages ? ZJe(resumeMessages).result : undefined;
    let Pe = false;
    let Ce = async (A)=>{
        hold_evict = false;
        switch(A.type){
            case "shutdown_request":
                t(`[inProcessRunner] ${identity.agentId} received shutdown request - passing to model`);
                X = o8t({
                    from: typeof A.entryFrom === "string" && A.entryFrom !== "" ? A.entryFrom : sS,
                    text: YAt(oHn(A.originalMessage, A.entryFrom) ?? A.originalMessage, A.entryFrom)
                });
                origin = undefined;
                c8n(taskId, xe({
                    content: X
                }), taskRegistry);
                break;
            case "new_message":
                t(`[inProcessRunner] ${identity.agentId} received new message from ${A.from}`);
                if (A.from === "user") {
                    X = A.message;
                    origin = A.origin;
                } else {
                    X = o8t({
                        from: A.from,
                        text: A.message,
                        color: A.color,
                        summary: A.summary
                    });
                    origin = undefined;
                    c8n(taskId, xe({
                        content: X
                    }), taskRegistry);
                }
                break;
            case "new_messages":
                t(`[inProcessRunner] ${identity.agentId} received ${A.messages.length} drained message(s)`);
                X = dLe(A.messages, {
                    recipientIsLead: false
                });
                origin = undefined;
                c8n(taskId, xe({
                    content: X
                }), taskRegistry);
                break;
            case "aborted":
                t(`[inProcessRunner] ${identity.agentId} aborted while waiting`);
                Te = true;
                break;
            case "idle_timeout":
                t(`[inProcessRunner] ${identity.agentId} idle timeout \u2014 exiting loop`);
                if (!standalone) {
                    toolUseContext.agentLifecycle.setTeammate(identity.agentId, undefined);
                    await V5t(identity.teamName, identity.agentId, {
                        onlyIfJoinedBefore: Date.now()
                    }, toolUseContext.storageV5);
                }
                Te = true;
                break;
        }
    };
    if (!standalone) {
        await We(identity.parentSessionId, identity.agentName, teammateContext_hasTaskListTools, toolUseContext.storageV5);
    }
    try {
        taskRegistry.updateTranscript(taskId, (M)=>{
            let M_messages = M.messages;
            if (resumeMessages) {
                for (let be of resumeMessages.slice(-Zlr)){
                    M_messages = hVe(M_messages, be);
                }
            }
            return {
                ...M,
                messages: hVe(M_messages, xe({
                    content: Se
                }))
            };
        });
        let contentReplacementState = toolUseContext.contentReplacementState ? resumeReplacementState ?? zIn() : undefined;
        let stickyBetas = $Z();
        let retryWake = Oe();
        while(!abortController.signal.aborted && !Te){
            t(`[inProcessRunner] ${identity.agentId} processing prompt: ${X.substring(0, 50)}...`);
            let M = lr();
            M.signal.addEventListener("abort", ()=>{
                Pe = true;
            });
            j(taskId, (r)=>({
                    ...r,
                    currentWorkAbortController: M,
                    retryWake
                }), taskRegistry);
            let Z = xe({
                content: X,
                origin
            });
            let promptMessages = [
                Z
            ];
            let ue = q;
            let $e = Ff(q, kh(mainLoopModel));
            if ($e > f3(Xd(mainLoopModel), WJn(toolUseContext.options.autoCompactWindow, W.autoCompactWindow))) {
                t(`[inProcessRunner] ${identity.agentId} compacting history (${$e} tokens)`);
                let toolUseContext_1 = {
                    ...toolUseContext,
                    abortController,
                    agentId: So(identity.agentId),
                    readFileState: Pre(toolUseContext.readFileState, {
                        stripSeededFromContext: true
                    }),
                    memorySelector: Vte(),
                    onCompactEvent: undefined,
                    onRetryStatus: B.setRetryStatus,
                    compactTranscriptUnavailable: true
                };
                try {
                    let w = await gir(q, toolUseContext_1, {
                        systemPrompt: Ti([]),
                        userContext: {},
                        systemContext: {},
                        toolUseContext: toolUseContext_1,
                        forkContextMessages: q,
                        advisorModel: toolUseContext_1.getAppState().advisorModel
                    }, true, {
                        isAutoCompact: true
                    });
                    ue = h$(w);
                    if (contentReplacementState) {
                        contentReplacementState = zIn();
                    }
                    q.length = 0;
                    q.push(...ue);
                    recordedUuids.clear();
                    taskRegistry.updateTranscript(taskId, (k)=>({
                            ...k,
                            messages: [
                                ...ue,
                                Z
                            ]
                        }));
                } catch (error) {
                    if (error instanceof Error && error.message.startsWith(AJ)) {
                        t(`[inProcessRunner] ${identity.agentId} compaction blocked by PreCompact hook; continuing uncompacted`);
                        Ne = true;
                    } else if (abortController.signal.aborted || error instanceof Error && error.message === SP) {
                        t(`[inProcessRunner] ${identity.agentId} aborted during compaction`);
                        Te = true;
                        break;
                    } else {
                        throw error;
                    }
                }
            }
            let forkContextMessages = ue.length > 0 ? [
                ...ue
            ] : undefined;
            q.push(Z);
            ye = undefined;
            Pe = M.signal.aborted;
            let pe = BTn();
            let we = taskRegistry.get(taskId);
            if (we !== undefined && "progress" in we && we.progress !== undefined) {
                pe.latestInputTokens = we.progress.tokenCount;
            }
            let je = zTn(tools);
            let ge = [];
            let ve = toolUseContext.getAppState().tasks[taskId];
            let permissionMode = ve && ve.type === "in_process_teammate" ? ve.permissionMode : "default";
            let agentDefinition_1 = {
                ...W,
                permissionMode
            };
            let De = false;
            let se = null;
            await XAs(teammateContext, async ()=>yR(agentContext, async ()=>{
                    j(taskId, (r)=>({
                            ...r,
                            status: "running",
                            isIdle: false,
                            idleNotificationOwedToLead: undefined,
                            evictAfter: undefined,
                            evictAfterHeldBySibling: undefined
                        }), taskRegistry);
                    taskRegistry.updateTranscript(taskId, (r)=>({
                            ...r,
                            turnStartTime: Date.now()
                        }));
                    B.setMode("responding");
                    for await (let r of SA({
                        agentDefinition: agentDefinition_1,
                        promptMessages,
                        toolUseContext,
                        canUseTool: He(identity, M, (w)=>{
                            j(taskId, (k)=>({
                                    ...k,
                                    totalPausedMs: (k.totalPausedMs ?? 0) + w
                                }), taskRegistry);
                        }, ihe(setAppState), ()=>toolUseContext.getAppState().teamContext?.teammates),
                        isAsync: true,
                        canShowPermissionPrompts: allowPermissionPrompts ?? true,
                        forkContextMessages,
                        querySource: "agent:custom",
                        override: {
                            abortController: M,
                            agentContext,
                            onRetryStatus: B.setRetryStatus,
                            subscribeRetryWake: retryWake.subscribe,
                            ...identity.resumableAgentId && {
                                agentId: identity.resumableAgentId
                            }
                        },
                        ...identity.resumableAgentId && {
                            recordedUuids,
                            name: identity.agentName,
                            description,
                            extraMetadata: {
                                ...Be,
                                permissionMode
                            }
                        },
                        onStreamTokenEstimate: (w)=>{
                            WTn(pe, w);
                            let progress = dtt(pe);
                            j(taskId, (U)=>{
                                if (U.progress?.tokenCount === progress.tokenCount) {
                                    return U;
                                }
                                return {
                                    ...U,
                                    progress
                                };
                            }, taskRegistry);
                        },
                        model,
                        preserveToolUseResults: true,
                        availableTools: tools,
                        allowedTools,
                        contentReplacementState,
                        stickyBetas,
                        isTeammate: true,
                        teammateContext
                    })){
                        if (abortController.signal.aborted) {
                            t(`[inProcessRunner] ${identity.agentId} lifecycle aborted`);
                            break;
                        }
                        if (M.signal.aborted) {
                            t(`[inProcessRunner] ${identity.agentId} current work aborted (Escape pressed)`);
                            if (r.type === "assistant" || r.type === "user" || r.type === "attachment" && tS(r)) {
                                ge.push(r);
                                q.push(r);
                                se = Kke(q, r, se);
                            }
                            De = true;
                            break;
                        }
                        if (r.type === "spinner_mode") {
                            B.setMode(r.mode);
                            continue;
                        }
                        if (r.type === "api_metrics") {
                            continue;
                        }
                        if (r.type === "query_model_change") {
                            continue;
                        }
                        if (r.type === "set_in_progress_tool_use_ids") {
                            if (r.op.action !== "remove") {
                                continue;
                            }
                            let k = r.op.ids;
                            taskRegistry.updateTranscript(taskId, (U)=>{
                                let inProgressToolUseIDs = new Set(U.inProgressToolUseIDs);
                                let oe = false;
                                for (let _e of k){
                                    if (inProgressToolUseIDs.delete(_e)) {
                                        oe = true;
                                    }
                                }
                                if (oe) {
                                    return {
                                        ...U,
                                        inProgressToolUseIDs
                                    };
                                }
                                return U;
                            });
                            continue;
                        }
                        if (r.type === "system" && r.subtype === "api_error") {
                            continue;
                        }
                        ge.push(r);
                        q.push(r);
                        se = Kke(q, r, se);
                        jTn(pe, r, je, tools);
                        let progress = dtt(pe);
                        j(taskId, (k)=>({
                                ...k,
                                progress
                            }), taskRegistry);
                        taskRegistry.updateTranscript(taskId, (k)=>{
                            let k_inProgressToolUseIDs = k.inProgressToolUseIDs;
                            if (r.type === "assistant") {
                                for (let te of r.message.content){
                                    if (te.type === "tool_use") {
                                        k_inProgressToolUseIDs = new Set([
                                            ...k_inProgressToolUseIDs,
                                            te.id
                                        ]);
                                    }
                                }
                            } else if (r.type === "user") {
                                let te = r.message.content;
                                if (Array.isArray(te)) {
                                    for (let oe of te){
                                        if (typeof oe === "object" && "type" in oe && oe.type === "tool_result") {
                                            let _e = new Set(k_inProgressToolUseIDs);
                                            _e.delete(oe.tool_use_id);
                                            k_inProgressToolUseIDs = _e;
                                        }
                                    }
                                }
                            }
                            return {
                                ...k,
                                messages: $ts(k.messages, r),
                                inProgressToolUseIDs: k_inProgressToolUseIDs
                            };
                        });
                    }
                    return {
                        success: true,
                        messages: ge
                    };
                })).finally(()=>{
                if (se) {
                    q.push(...se.preserved);
                    se = null;
                }
            });
            j(taskId, (r)=>({
                    ...r,
                    currentWorkAbortController: undefined
                }), taskRegistry);
            if (abortController.signal.aborted) {
                break;
            }
            let le = De || M.signal.aborted;
            if (le) {
                Pe = true;
                t(`[inProcessRunner] ${identity.agentId} work interrupted, returning to idle`);
                let r = Is({
                    content: SP
                });
                taskRegistry.updateTranscript(taskId, (w)=>({
                        ...w,
                        messages: hVe(w.messages, r)
                    }));
            }
            ke ||= ge.some((r)=>r.type === "assistant" && !r.isApiErrorMessage || r.type === "user" && !r.isMeta);
            let re = !le ? Y4t(ge) : undefined;
            hold_evict = re?.isTransient === true && !standalone && ke;
            if (!standalone && !le) {
                let r = null;
                try {
                    r = await Ie(identity, taskId, taskRegistry, toolUseContext.storageV5, V, toolUseContext.getAppState().teamContext?.teammates);
                    while(r === null && V.count > 0 && V.readFailures < UAe && !abortController.signal.aborted){
                        await Q(he);
                        r = await Ie(identity, taskId, taskRegistry, toolUseContext.storageV5, V, toolUseContext.getAppState().teamContext?.teammates);
                    }
                } catch (error) {
                    t(`[inProcessRunner] ${identity.agentName} turn-end mailbox check failed: ${error}`);
                }
                if (r) {
                    try {
                        let { result, summary } = ZJe(q, {
                            emitTelemetry: true
                        });
                        if (result !== undefined || re !== undefined) {
                            if (await Re(identity.agentName, identity.color, identity.teamName, {
                                idleReason: re !== undefined ? "failed" : undefined,
                                summary,
                                failureReason: re?.reason,
                                result,
                                senderReachable: true
                            }, toolUseContext.storageV5) && result !== undefined) {
                                ye = result;
                            }
                        }
                    } catch (error) {
                        t(`[inProcessRunner] ${identity.agentName} turn-end result delivery failed: ${error}`);
                    }
                    await Ce(r);
                    continue;
                }
            }
            if (re?.isTransient) {
                i("tengu_teammate_transient_turn_failure", {
                    error_kind: d(re.errorKind ?? "unknown"),
                    hold_evict
                });
            }
            let qe = toolUseContext.getAppState().tasks[taskId];
            let Le = !(qe?.type === "in_process_teammate" && qe.isIdle) && !standalone;
            j(taskId, (r)=>{
                r.onIdleCallbacks?.forEach((w)=>w());
                return {
                    ...r,
                    isIdle: true,
                    idleNotificationOwedToLead: Le && Ee() || r.idleNotificationOwedToLead,
                    evictAfter: hold_evict ? undefined : Date.now() + CI,
                    onIdleCallbacks: []
                };
            }, taskRegistry);
            let failureReason = re?.reason;
            if (Le) {
                let r = ZJe(q, {
                    emitTelemetry: !le
                });
                let w = le ? undefined : r.result;
                let k = await Re(identity.agentName, identity.color, identity.teamName, {
                    idleReason: le ? "interrupted" : failureReason !== undefined ? "failed" : "available",
                    summary: r.summary,
                    failureReason,
                    result: w,
                    senderReachable: failureReason === undefined || hold_evict
                }, toolUseContext.storageV5);
                if (w !== undefined && k) {
                    ye = w;
                }
                if (!k) {
                    j(taskId, (U)=>{
                        if (U.idleNotificationOwedToLead) {
                            return {
                                ...U,
                                idleNotificationOwedToLead: undefined
                            };
                        }
                        return U;
                    }, taskRegistry);
                }
            } else {
                t(`[inProcessRunner] Skipping duplicate idle notification for ${identity.agentName}`);
            }
            t(`[inProcessRunner] ${identity.agentId} finished prompt, waiting for next`);
            let Ke = await Xe(identity, abortController, taskId, toolUseContext.getAppState, taskRegistry, identity.parentSessionId, standalone, teammateContext_hasTaskListTools, V, hold_evict, toolUseContext.storageV5);
            await Ce(Ke);
        }
        let me = false;
        let x;
        j(taskId, (M)=>{
            if (M.status !== "running") {
                me = true;
                return M;
            }
            x = M.toolUseId;
            M.onIdleCallbacks?.forEach((Z)=>Z());
            return {
                ...M,
                status: "completed",
                notified: true,
                endTime: Date.now(),
                pendingUserMessages: [],
                abortController: undefined,
                currentWorkAbortController: undefined,
                retryWake: undefined,
                onIdleCallbacks: []
            };
        }, taskRegistry);
        if (!me) {
            taskRegistry.updateTranscript(taskId, (M)=>({
                    ...M,
                    messages: M.messages.length ? [
                        M.messages.at(-1)
                    ] : [],
                    inProgressToolUseIDs: new Set
                }));
        }
        Zp(taskId);
        taskRegistry.evictTerminal(taskId);
        if (!me) {
            la(taskId, "completed", {
                toolUseId: x,
                summary: identity.agentId
            });
        }
        j0e(identity.agentId);
        if (Ne) {
            f("swarm_in_process_run", "compact_blocked_by_hook");
        } else {
            g("swarm_in_process_run");
        }
        return {
            success: true,
            messages: q
        };
    } catch (error) {
        let z = error instanceof Error ? error.message : "Unknown error";
        t(`[inProcessRunner] Agent ${identity.agentId} failed: ${z}`);
        let Y = false;
        let me;
        j(taskId, (x)=>{
            if (x.status !== "running") {
                Y = true;
                return x;
            }
            me = x.toolUseId;
            x.onIdleCallbacks?.forEach((M)=>M());
            return {
                ...x,
                status: "failed",
                notified: true,
                error: z,
                isIdle: true,
                endTime: Date.now(),
                onIdleCallbacks: [],
                pendingUserMessages: [],
                abortController: undefined,
                currentWorkAbortController: undefined,
                retryWake: undefined
            };
        }, taskRegistry);
        if (!Y) {
            taskRegistry.updateTranscript(taskId, (x)=>({
                    ...x,
                    messages: x.messages.length ? [
                        x.messages.at(-1)
                    ] : [],
                    inProgressToolUseIDs: new Set
                }));
        }
        Zp(taskId);
        taskRegistry.evictTerminal(taskId);
        if (!Y) {
            la(taskId, "failed", {
                toolUseId: me,
                summary: identity.agentId
            });
        }
        if (!standalone) {
            let x;
            try {
                x = Pe ? undefined : hjo(q);
            } catch (err) {
                t(`[inProcessRunner] ${identity.agentName} failed to extract partial result: ${err}`);
            }
            if (x !== undefined && x === ye) {
                x = undefined;
            }
            await Re(identity.agentName, identity.color, identity.teamName, {
                idleReason: "failed",
                completedStatus: "failed",
                failureReason: z,
                result: x
            }, toolUseContext.storageV5);
        }
        j0e(identity.agentId);
        m("swarm_in_process_run", "agent_loop_failed");
        return {
            success: false,
            error: z,
            messages: q
        };
    }
}
function GUr(n) {
    let agentId = n.identity.agentId;
    Qe(n).catch((s)=>{
        t(`[inProcessRunner] Unhandled error in ${agentId}: ${s}`);
    });
}
export { GUr };
