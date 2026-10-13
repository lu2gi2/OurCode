import { gp, tsn, jn, WP, sd } from "/$bunfs/root/chunk-ctt36bn8.js";
import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { p8o, g3, vI, pw, x7o, P9r, eCn, _ne, L3, Xhe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { QB, Qi, QYe, tt, Ql, Wlt, Boe, Glt, jIt, Es } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ec, kxs, pC } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Y6e } from "/$bunfs/root/chunk-6dwnw6av.js";
import { kat } from "/$bunfs/root/chunk-gr4a0fky.js";
import { bh } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { ygs } from "/$bunfs/root/chunk-4r6b8efh.js";
import { pNn, _hs, Tb, Ehs, Vre } from "/$bunfs/root/chunk-tf8026s8.js";
import { kV } from "/$bunfs/root/chunk-nb5ge4vq.js";
import { XA } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { Au, tcr, zg, ncr, G3, rcr } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { wys } from "/$bunfs/root/chunk-499b1h1a.js";
import { X_e } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { ILe, Nce } from "/$bunfs/root/chunk-18a8x2hz.js";
import { TM, xIn } from "/$bunfs/root/chunk-1k3a7x55.js";
import { k_e, Fao } from "/$bunfs/root/chunk-2ya7enrh.js";
import { PD } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { kze } from "/$bunfs/root/chunk-8y1m7sq5.js";
import { LXn } from "/$bunfs/root/chunk-e2vrg5f2.js";
import { VG, rM } from "/$bunfs/root/chunk-88awaqqw.js";
import { ygn } from "/$bunfs/root/chunk-3pzpbxd2.js";
import { Spn, wpn } from "/$bunfs/root/chunk-kggzh6a8.js";
import { Cte } from "/$bunfs/root/chunk-qrh2wh6t.js";
import { xE } from "/$bunfs/root/chunk-8fa0475h.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
function ADr(e) {
    return e !== "requesting" && k_e();
}
function v() {
    return !L3() && !_ne();
}
function o$t(e) {
    if (e.type === "system" && "subtype" in e && e.subtype === "status" && "compact_error" in e && e.compact_error !== undefined && !v()) {
        return {
            ...e,
            compact_error: undefined
        };
    }
    return e;
}
function TXe({ status, permissionMode, compactResult, compactError }) {
    try {
        if (!ADr(status)) {
            return;
        }
        Qi({
            type: "system",
            subtype: "status",
            status,
            ...permissionMode !== undefined && {
                permissionMode
            },
            ...compactResult !== undefined && {
                compact_result: compactResult
            },
            ...compactError !== undefined && v() && {
                compact_error: compactError
            }
        });
    } catch (error) {
        c(error);
    }
}
function GLo(e) {
    try {
        if (!sd() || !Fao()) {
            return;
        }
        if (Xhe(e.event)) {
            return;
        }
        Qi({
            type: "stream_event",
            event: e.event,
            parent_tool_use_id: null,
            ...e.ttftMs !== undefined && {
                ttft_ms: e.ttftMs
            }
        });
    } catch (error) {
        c(error);
    }
}
const P = u({
    status_category: o(),
    status_detail: o(),
    needs_action: o(),
    recent_action: o().optional(),
    description: o().optional(),
    reply: o().optional()
});
function L(e) {
    return (i)=>{
        let i_toolPermissionContext = i.toolPermissionContext;
        if (typeof e.permission_mode === "string") {
            let mode = pC(e.permission_mode);
            Y6e(mode);
            if (mode === "bypassPermissions" && (xE() || !i_toolPermissionContext.isBypassPermissionsModeAvailable)) {
                t("[externalMetadataToAppState] Refusing restored mode 'bypassPermissions' (disabled by settings/policy or session not launched with --dangerously-skip-permissions); falling back to 'default'", {
                    level: "warn"
                });
                mode = "default";
            }
            try {
                i_toolPermissionContext = {
                    ...rM(i_toolPermissionContext.mode, mode, i_toolPermissionContext),
                    mode
                };
                if (mode === "auto") {
                    i_toolPermissionContext = VG(i_toolPermissionContext);
                }
            } catch (error) {
                t(`[externalMetadataToAppState] transitionPermissionMode rejected restored mode '${mode}': ${W(error).message}`);
            }
        }
        let r = P.safeParse(e.post_turn_summary);
        return {
            ...i,
            toolPermissionContext: i_toolPermissionContext,
            ...typeof e.is_ultraplan_mode === "boolean" && {
                isUltraplanMode: e.is_ultraplan_mode
            },
            ...r.success && {
                postTurnSummary: r.data
            }
        };
    };
}
function b({ session_allow_rules }) {
    if (!Array.isArray(session_allow_rules)) {
        return (r)=>r;
    }
    if (bh()) {
        return (r)=>r;
    }
    let session = ygs(session_allow_rules.filter((r)=>typeof r === "string" && !r.startsWith("mcp__")));
    if (session.length === 0) {
        return (r)=>r;
    }
    return (r)=>({
            ...r,
            toolPermissionContext: {
                ...r.toolPermissionContext,
                alwaysAllowRules: {
                    ...r.toolPermissionContext.alwaysAllowRules,
                    session
                }
            }
        });
}
function VLo(e) {
    return (i)=>L(e.external ?? {})(b(e.internal ?? {})(i));
}
function Wcn({ newState, oldState }, s, r, l, g) {
    let mode = oldState.toolPermissionContext.mode;
    let mode_1 = newState.toolPermissionContext.mode;
    let y = newState.proactivityLevel !== oldState.proactivityLevel;
    if (mode !== mode_1) {
        let n = Ec(mode);
        let a = Ec(mode_1);
        if (n !== a) {
            let d = kxs({
                rule: "first-entry",
                prevMode: mode,
                newMode: mode_1,
                prevUltraplan: oldState.isUltraplanMode,
                newUltraplan: newState.isUltraplanMode
            });
            let p = d.is_ultraplan_mode;
            r?.notifyMetadataChanged(d);
            if (r?.isWorkerPermissionModeRecordEnabled) {
                r.notifyInternalMetadataChanged({
                    worker_permission_mode: a
                });
            }
            ILe(mode_1, p);
            if (!r) {
                TXe({
                    status: null,
                    permissionMode: a
                });
            }
        }
        r?.notifyPermissionModeChanged(mode_1);
    } else if (y) {
        r?.notifyProactivityLevelChanged();
    }
    if (mode !== mode_1 || y) {
        PD("--permission-mode", [
            "--inherit-permission-mode"
        ], g3(mode_1, newState.proactivityLevel, vI(newState.toolPermissionContext)), undefined, l);
        if (y) {
            PD("--proactivity", [], newState.proactivityLevel, undefined, l);
        }
    }
    if (newState.toolPermissionContext !== oldState.toolPermissionContext) {
        wys();
    }
    if (newState.toolPermissionContext.additionalWorkingDirectories !== oldState.toolPermissionContext.additionalWorkingDirectories && ygn(newState.toolPermissionContext)) {
        import("/$bunfs/root/chunk-7chmfa68.js").then((n)=>n.mcpClientModule().notifyMcpRootsListChanged()).catch((n)=>{
            t(`Failed to notify MCP servers of roots change: ${W(n).message}`);
        });
    }
    if (newState.tasks !== oldState.tasks) {
        if (r) {
            let d = h(oldState);
            let running_background_tasks = h(newState);
            if (d.length !== running_background_tasks.length || running_background_tasks.some((C, A)=>C.task_id !== d[A]?.task_id)) {
                r.notifyInternalMetadataChanged({
                    running_background_tasks
                });
            }
        }
        let n = _(oldState);
        let tasks = _(newState);
        if (n.length !== tasks.length || tasks.some((d, p)=>d.task_id !== n[p]?.task_id || d.description !== n[p]?.description || d.parent_task_id !== n[p]?.parent_task_id || d.ambient !== n[p]?.ambient || d.awaited !== n[p]?.awaited)) {
            Qi({
                type: "system",
                subtype: "background_tasks_changed",
                tasks
            });
        }
    }
    let session = oldState.toolPermissionContext.alwaysAllowRules.session;
    let session_1 = newState.toolPermissionContext.alwaysAllowRules.session;
    if (session !== session_1) {
        let n = session_1?.filter((a)=>!a.startsWith("mcp__"));
        r?.notifyInternalMetadataChanged({
            session_allow_rules: n?.length ? n : null
        });
    }
    if (newState.mainLoopModel !== oldState.mainLoopModel || newState.mainLoopModelForSession !== oldState.mainLoopModelForSession || newState.toolPermissionContext.mode !== oldState.toolPermissionContext.mode) {
        let n = x7o(s);
        try {
            let fromModel = pw(oldState);
            let toModel = pw(newState);
            if (fromModel !== toModel) {
                kat([
                    "seven_day_overage_included"
                ]);
                if (newState.mainLoopModel !== oldState.mainLoopModel || newState.mainLoopModelForSession !== oldState.mainLoopModelForSession) {
                    p8o(s.host, fromModel, toModel);
                }
                if (!jn()) {
                    P9r(s, {
                        fromModel,
                        toModel,
                        requestedModel: n.requestedModel,
                        source: n.source
                    });
                }
                _hs(toModel);
            }
        } catch (error) {
            c(W(error));
        }
    }
    if (newState.mainLoopModel !== oldState.mainLoopModel) {
        let n = newState.mainLoopModel;
        let a = Spn(()=>gp(n));
        let d = tt();
        try {
            Nce(d);
        } catch (error) {
            c(W(error));
        }
        Cte(d, newState);
        kze();
        eCn(s.precompute);
        wpn(l, g, a);
        r?.notifyMetadataChanged({
            model: n ?? Ql()
        });
        PD("--model", [
            "-m"
        ], n, undefined, l);
    }
    if (newState.fotwClaim?.phase === "granted" && oldState.fotwClaim?.phase !== "granted") {
        kze();
    }
    if (!Vre(newState.sessionEffort, oldState.sessionEffort) || newState.settingsEffortTable !== oldState.settingsEffortTable) {
        tsn({
            sessionEffort: newState.sessionEffort,
            settingsEffortTable: newState.settingsEffortTable
        });
    }
    if (!Vre(newState.sessionEffort, oldState.sessionEffort)) {
        pNn();
        r?.notifyMetadataChanged({
            effort_level: Ehs(newState.sessionEffort)
        });
        Cte(tt(), newState);
        let n = newState.sessionEffort;
        if (n.kind !== "level") {
            PD("--effort", [], null, undefined, l);
        } else if (typeof n.value === "string" && Tb(n.value)) {
            PD("--effort", [], n.value, undefined, l);
        }
    }
    if (newState.mainLoopModelForSession !== oldState.mainLoopModelForSession) {
        let n = tt();
        try {
            Nce(n);
        } catch (error) {
            c(W(error));
        }
        Cte(n, newState);
        if (QYe() && (newState.mainLoopModelForSession === null || newState.mainLoopModelForSession === undefined) && oldState.mainLoopModelForSession !== null && oldState.mainLoopModelForSession !== undefined && newState.mainLoopModel === oldState.mainLoopModel) {
            gp(newState.mainLoopModel);
            r?.notifyMetadataChanged({
                model: newState.mainLoopModel ?? Ql()
            });
        }
    }
    if (newState.advisorModel !== oldState.advisorModel) {
        PD("--advisor", [], newState.advisorModel ?? null, undefined, l);
    }
    if (r && newState.frameUrls !== oldState.frameUrls && X_e()) {
        let n = TM(newState.frameUrls).map(([, a])=>a);
        if (n.length > 0 || TM(oldState.frameUrls).length > 0) {
            r.notifyMetadataChanged({
                artifacts: n.length === 0 ? null : n.map(xIn)
            });
        }
    }
    if (r && !R(newState.activeGoal, oldState.activeGoal)) {
        let n = newState.activeGoal;
        r.notifyActiveGoalChanged(n);
        if (n) {
            let { tokens_at_start, ...rest } = CDr(n);
            r.notifyMetadataChanged({
                goal: {
                    ...rest,
                    last_reason: rest.last_reason ?? null,
                    met: false
                }
            });
        } else {
            r.notifyMetadataChanged({
                goal: null
            });
        }
    }
    if (r && (newState.autoCompactWindow !== oldState.autoCompactWindow || newState.mainLoopModel !== oldState.mainLoopModel || newState.mainLoopModelForSession !== oldState.mainLoopModelForSession || newState.settings !== oldState.settings)) {
        r.notifyAutocompactInputsChanged();
    }
    if (newState.verbose !== oldState.verbose) {
        kV("verbose", newState.verbose, l);
    }
    if (newState.settings !== oldState.settings) {
        try {
            Wlt();
            Boe();
            Glt();
            jIt();
            if (newState.settings.env !== oldState.settings.env && Es()) {
                XA();
                LXn();
            }
        } catch (error) {
            t(`Failed to apply settings change (clear auth caches / re-apply env): ${W(error).message}`, {
                level: "error"
            });
        }
        if (newState.settings.outputStyle !== oldState.settings.outputStyle) {
            WP("output_style");
        }
    }
}
function x(e, tasks) {
    if (e.type !== "local_bash" && e.type !== "monitor_mcp" && e.type !== "monitor_ws") {
        return false;
    }
    let s = e.agentId !== undefined ? tasks[e.agentId] : undefined;
    return s !== undefined && Au(s);
}
function T(e) {
    return {
        agent_type: e.agentType,
        ...e.selectedAgent && {
            is_built_in: e.selectedAgent.source === "built-in"
        },
        forked_skill: e.forkedSkillName !== undefined,
        main_thread_spawned: e.spawnDepth === 1 && e.parentAgentId === undefined,
        default_launch: e.cwd === undefined && e.launchedWithDefaults === true
    };
}
function h(e) {
    return Object.values(e.tasks).filter((i)=>zg(i) && !Au(i) && (i.type === "local_bash" || i.type === "monitor_mcp" || i.type === "monitor_ws" || i.type === "local_agent" || i.type === "local_workflow")).map((i)=>({
            task_id: i.id,
            task_type: i.type,
            description: i.description,
            ...(i.type === "local_bash" || i.type === "monitor_mcp" || i.type === "monitor_ws") && i.agentId !== undefined && {
                owner_agent_id: i.agentId
            },
            ...i.type === "local_bash" && i.kind !== undefined && {
                shell_kind: i.kind
            },
            ...i.type === "monitor_ws" && i.ambient && {
                ambient: true
            },
            ...i.type === "local_agent" && T(i),
            ...x(i, e.tasks) && {
                observer_owned: true
            }
        }));
}
const I = [
    "condition",
    "setAt",
    "iterations",
    "tokensAtStart",
    "lastReason"
];
function CDr(e) {
    return {
        condition: e.condition,
        iterations: e.iterations,
        set_at: e.setAt,
        tokens_at_start: e.tokensAtStart,
        ...e.lastReason !== undefined && {
            last_reason: e.lastReason
        }
    };
}
function R(activeGoal, i) {
    if (activeGoal === i) {
        return true;
    }
    if (activeGoal === undefined || i === undefined) {
        return false;
    }
    return I.every((s)=>activeGoal[s] === i[s]);
}
function _(e) {
    return Object.values(e.tasks).filter((i)=>zg(i) && !Au(i)).map((i)=>({
            task_id: i.id,
            run_id: QB(i.id),
            task_type: i.type,
            subagent_type: rcr(i),
            description: i.description,
            parent_task_id: tcr(i, e.tasks),
            ...G3(i) && {
                ambient: true
            },
            ...ncr(i) && {
                awaited: true
            }
        }));
}
function s$t(e) {
    Qi({
        type: "system",
        subtype: "background_tasks_changed",
        tasks: _(e)
    });
}
export { ADr, o$t, TXe, GLo, VLo, Wcn, CDr, s$t };
