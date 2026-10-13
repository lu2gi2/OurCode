import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { ioe } from "/$bunfs/root/chunk-6rhcrh84.js";
import { jo } from "/$bunfs/root/chunk-223dyewd.js";
import { Bt } from "/$bunfs/root/chunk-1ej05ybf.js";
import { Qi } from "/$bunfs/root/chunk-0ycjphb5.js";
import { zT } from "/$bunfs/root/chunk-k3tkc302.js";
function __e(e) {
    for (let n of [
        e?.request_id,
        e?.suppressed_request_id
    ]){
        if (typeof n === "string" && n.length > 0) {
            return n;
        }
    }
}
const _ = 32;
function g(e) {
    let { display_tool_name, raw_command } = e;
    return {
        tool_name: e.tool_name,
        ...display_tool_name === undefined ? {} : {
            display_tool_name
        },
        action_description: jo(e.action_description, zT),
        ...raw_command === undefined ? {} : {
            raw_command: jo(raw_command, zT)
        },
        tool_use_id: e.tool_use_id,
        request_id: e.request_id,
        ...e.suppressed_request_id === undefined ? {} : {
            suppressed_request_id: e.suppressed_request_id
        },
        ...e.decision_reason_type === undefined ? {} : {
            decision_reason_type: e.decision_reason_type
        },
        ...e.decision_reason_code === undefined ? {} : {
            decision_reason_code: e.decision_reason_code
        }
    };
}
function pao(e, n) {
    return [
        e,
        ...n.slice(0, _ - 1).map(g)
    ];
}
function GHn(e) {
    switch(e?.cross_session_inbound){
        case "unavailable":
            return {
                acceptsPeerMessages: false
            };
        case "available":
            return {
                acceptsPeerMessages: true
            };
        default:
            return;
    }
}
const pgr = 60000;
class V8t {
    stateChanged = Oe();
    pendingActionRepublished = Oe();
    userDecisionPendingChanged = Oe();
    userDecisionsPending = 0;
    onStateChanged;
    getPendingActionDetails;
    heldRequiresAction;
    onWaitingOnUserChanged;
    onTurnStarting;
    onMetadataChanged;
    onInternalMetadataChanged;
    onPermissionModeChanged;
    onProactivityLevelChanged;
    onActiveGoalChanged;
    onAutocompactInputsChanged;
    onConversationReset;
    currentState = "idle";
    hasPendingAction = false;
    hasTaskSummary = false;
    hasTerminalGoalSnapshot = false;
    mainLoopRefcount = 0;
    nestedBlockedChains = Object.create(null);
    nestedBlockedChainCount = 0;
    droppedChainAgentIds = Object.create(null);
    nestedChainUnparks = Object.create(null);
    lastWaitingOnUser = false;
    chainExcessLogged = false;
    beginUserDecision() {
        this.userDecisionsPending += 1;
        if (this.userDecisionsPending === 1) {
            d(this.userDecisionPendingChanged, true);
        }
    }
    get userDecisionPending() {
        return this.userDecisionsPending > 0;
    }
    endUserDecision() {
        if (this.userDecisionsPending === 0) {
            return;
        }
        this.userDecisionsPending -= 1;
        if (this.userDecisionsPending === 0) {
            d(this.userDecisionPendingChanged, false);
        }
    }
    getState() {
        return this.currentState;
    }
    get waitingOnUser() {
        return this.currentState === "requires_action" && this.mainLoopRefcount - this.nestedBlockedChainCount <= 0;
    }
    setMainLoopRefcount(e) {
        this.mainLoopRefcount = e;
        this.emitIfWaitingChanged();
    }
    emitIfWaitingChanged() {
        this.checkChainInvariant();
        let waitingOnUser = this.waitingOnUser;
        if (waitingOnUser !== this.lastWaitingOnUser) {
            this.lastWaitingOnUser = waitingOnUser;
            this.onWaitingOnUserChanged?.(waitingOnUser);
        }
    }
    checkChainInvariant() {
        if (this.nestedBlockedChainCount - this.mainLoopRefcount > 0) {
            if (!this.chainExcessLogged) {
                this.chainExcessLogged = true;
                J("warn", "nested_chain_count_exceeds_refcount", {
                    nested_blocked_chain_count: this.nestedBlockedChainCount,
                    main_loop_refcount: this.mainLoopRefcount,
                    session_state: this.currentState
                });
            }
        } else {
            this.chainExcessLogged = false;
        }
    }
    reteeWaitingOnUser() {
        this.onWaitingOnUserChanged?.(this.waitingOnUser);
    }
    notifyNestedPromptBlocking(e) {
        if (a.CLAUDE_CODE_DISABLE_NESTED_CHAIN_IDLE) {
            return;
        }
        if (this.droppedChainAgentIds[e]) {
            return;
        }
        let n = this.nestedBlockedChains[e] ?? 0;
        this.nestedBlockedChains[e] = n + 1;
        if (n === 0) {
            this.nestedBlockedChainCount++;
            if (this.nestedBlockedChainCount <= this.mainLoopRefcount) {
                this.nestedChainUnparks[e] = ioe();
            }
        }
        this.emitIfWaitingChanged();
    }
    notifyNestedPromptUnblocking(e) {
        let n = (this.nestedBlockedChains[e] ?? 0) - 1;
        if (n > 0) {
            this.nestedBlockedChains[e] = n;
        } else if (this.nestedBlockedChains[e] !== undefined) {
            this.removeChain(e);
        }
        this.emitIfWaitingChanged();
    }
    removeChain(e) {
        delete this.nestedBlockedChains[e];
        this.nestedBlockedChainCount--;
        this.nestedChainUnparks[e]?.();
        delete this.nestedChainUnparks[e];
    }
    dropNestedBlockedChain(e) {
        this.droppedChainAgentIds[e] = true;
        if (this.nestedBlockedChains[e] !== undefined) {
            this.removeChain(e);
            this.emitIfWaitingChanged();
        }
    }
    notifyTurnStarting(e, n) {
        this.onTurnStarting?.(e, n);
    }
    notifyStateChanged(state, n) {
        this.currentState = state;
        this.lastWaitingOnUser = this.waitingOnUser;
        this.onStateChanged?.(state, n);
        d(this.stateChanged, state, n);
        if (state === "requires_action" && n) {
            this.hasPendingAction = true;
            this.onMetadataChanged?.(this.pendingActionPatch(n));
        } else if (this.hasPendingAction) {
            this.hasPendingAction = false;
            this.onMetadataChanged?.({
                pending_action: null,
                pending_actions: null
            });
        }
        if (state === "running") {
            this.wipeTurnScopedMetadata();
        }
        if (state === "idle" && this.hasTaskSummary) {
            this.hasTaskSummary = false;
            this.notifyMetadataChanged({
                task_summary: null
            });
        }
        if (a.CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS) {
            Qi({
                type: "system",
                subtype: "session_state_changed",
                state
            });
        } else if (a.CLAUDE_CODE_SDK_READS_SESSION_STATE) {
            Qi({
                type: "system",
                subtype: "session_state_changed",
                state,
                sdk_host_only: true
            });
        }
    }
    republishPendingAction(e) {
        this.hasPendingAction = true;
        d(this.pendingActionRepublished, e);
        this.onMetadataChanged?.(this.pendingActionPatch(e));
    }
    pendingTurnEndSummary;
    holdTurnEndSummary(promise, deadlineAt) {
        let t = {
            promise,
            deadlineAt,
            settled: false,
            superseded: false
        };
        let i = ()=>{
            t.settled = true;
        };
        promise.then(i, i);
        this.pendingTurnEndSummary = t;
        return t;
    }
    turnEndSummaryOutstanding(e = performance.now()) {
        let pendingTurnEndSummary = this.pendingTurnEndSummary;
        return pendingTurnEndSummary !== undefined && !pendingTurnEndSummary.settled && e < pendingTurnEndSummary.deadlineAt;
    }
    supersedeTurnEndSummary() {
        let pendingTurnEndSummary = this.pendingTurnEndSummary;
        if (pendingTurnEndSummary !== undefined && !pendingTurnEndSummary.settled) {
            pendingTurnEndSummary.superseded = true;
        }
    }
    waitForTurnEndSummary() {
        let pendingTurnEndSummary = this.pendingTurnEndSummary;
        if (pendingTurnEndSummary === undefined || !this.turnEndSummaryOutstanding()) {
            return;
        }
        let n = new AbortController;
        return Promise.race([
            pendingTurnEndSummary.promise.catch(()=>{}),
            Q(Math.max(0, Math.ceil(pendingTurnEndSummary.deadlineAt - performance.now()) + 1), n.signal)
        ]).finally(()=>n.abort());
    }
    wipeTurnScopedMetadata() {
        this.supersedeTurnEndSummary();
        this.onMetadataChanged?.({
            post_turn_summary: null,
            recap: null
        });
        if (this.hasTerminalGoalSnapshot) {
            this.hasTerminalGoalSnapshot = false;
            this.onMetadataChanged?.({
                goal: null
            });
        }
    }
    adoptRestoredPendingAction() {
        this.hasPendingAction = true;
    }
    pendingActionPatch(pending_action) {
        let t = (this.getPendingActionDetails?.(pending_action.request_id) ?? []).filter((i)=>i !== pending_action).reverse();
        return {
            pending_action,
            pending_actions: pao(pending_action, t)
        };
    }
    notifyMetadataChanged(e, n) {
        if ("post_turn_summary" in e && n?.turnEndVerdict !== true) {
            this.supersedeTurnEndSummary();
        }
        this.onMetadataChanged?.(e);
        if ("goal" in e) {
            this.hasTerminalGoalSnapshot = e.goal?.met === true;
        }
        if ("task_summary" in e) {
            if (e.task_summary != null) {
                this.hasTaskSummary = true;
            }
            Qi({
                type: "system",
                subtype: "task_summary",
                detail: e.task_summary ?? null
            });
        }
        if ("artifacts" in e) {
            Qi({
                type: "system",
                subtype: "session_metadata",
                metadata: {
                    artifacts: e.artifacts
                }
            });
        }
    }
    workerPermissionModeRecordEnabled = false;
    get isWorkerPermissionModeRecordEnabled() {
        return this.workerPermissionModeRecordEnabled;
    }
    enableWorkerPermissionModeRecord() {
        this.workerPermissionModeRecordEnabled = true;
    }
    notifyPermissionModeChanged(e) {
        this.onPermissionModeChanged?.(e);
    }
    notifyProactivityLevelChanged() {
        this.onProactivityLevelChanged?.();
    }
    notifyInternalMetadataChanged(e) {
        this.onInternalMetadataChanged?.(e);
    }
    notifyActiveGoalChanged(e) {
        this.onActiveGoalChanged?.(e);
    }
    notifyAutocompactInputsChanged() {
        this.onAutocompactInputsChanged?.();
    }
    notifyConversationReset() {
        this.onConversationReset?.();
    }
}
function fao(e, n, t) {
    let i = [];
    if (e.length > 0) {
        let r = e.map((o)=>`- ${Bt(o.description || "(no description)")} (task ${Bt(o.task_id)})`);
        i.push(`The following background tasks were running and are now stopped:
${r.join(`
`)}
${t ? `${t} Re-create anything else` : "Re-create them"} if still needed.`);
    }
    if (n.length > 0) {
        let r = n.map((s)=>{
            if (Ce()) {
                return undefined;
            }
            return s.output_file;
        });
        let o = n.map((s, h)=>{
            let u = r[h];
            let p = u ? `output: ${Bt(u)}` : "no output file";
            return `- ${Bt(s.description || "(no description)")} (task ${Bt(s.task_id)}), status ${Bt(s.status)}, ${p}`;
        });
        let l = r.some(Boolean) ? "Read the output file to get the result (it is gone if the restart replaced the container); they cannot be stopped or messaged." : "No output file was recorded for them, and they cannot be stopped or messaged; re-create them if still needed.";
        i.push(`These background tasks finished before the restart, but their results were not delivered to you:
${o.join(`
`)}
${l}`);
    }
    return `<system-reminder>
The container was restarted. ${i.join(`
`)}
</system-reminder>`;
}
function d(e, ...n) {
    try {
        e.emit(...n);
    } catch (error) {
        c(error);
    }
}
export { __e, pao, GHn, pgr, V8t, fao };
