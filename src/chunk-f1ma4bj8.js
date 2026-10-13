var lh = {
    "ask_first.host_rule" ({ name, rules }) {
        return `A permission rule of this session (${rules}) asks before it uses ${name}'s tools.`;
    },
    "ask_first.host_rule.cannot_ask" ({ name, rules }) {
        return `The rule ${rules} asks before this session uses ${name}, and this context cannot ask.`;
    },
    "plan_mode.entered_while_asking" (e) {
        return `This session entered plan mode while the approval was pending; a state-changing ${e} call is not approved from plan mode.`;
    },
    "away.until" (e) {
        if (e === undefined) {
            return "in this turn";
        }
        return `until a later attached-machines note says ${e} is reachable again, or the user says it is back or asks you to try again`;
    },
    "away.ending" () {
        return "Check once more only when the user says it is back or asks you to try again.";
    },
    host_unresponsive ({ name, checks, intervalMs, whileRunning, stillConnected, returnNoted }) {
        if (stillConnected) {
            return `${name} is still connected, but its reply to this command was not received (${checks} checks about ${Math.round(intervalMs / 1000)} s apart got no answer, though ${name} answered a liveness check). Its state is unknown \u2014 it may have completed, failed, or still be running; the reply may have been too large to deliver. Do not re-run non-idempotent commands on ${name} just to see the output. If the output may be large, try a narrower command (part of a file, a filter, or a smaller image); otherwise do the rest of the task without ${name}, and tell the user what you could not verify.`;
        }
        let a = `${name} stopped answering ${whileRunning ? "while this command was running" : "after this command was sent to it"} (${checks} checks about ${Math.round(intervalMs / 1000)} s apart went unanswered). Its state is unknown \u2014 it may have completed, failed, ${whileRunning ? "or still be running" : "never started, or still be running"}.`;
        if (returnNoted) {
            return `${a} Do not call ${name} again ${lh["away.until"](name)}; then check what this command did before repeating it. Meanwhile do the rest of the task without ${name}, and tell the user what is blocked and what you could not verify.`;
        }
        return `${a} Do not retry non-idempotent commands on ${name} until ${name} reconnects, and do not call it again ${lh["away.until"]()}: do the rest of the task without ${name}, and tell the user what is blocked and what you could not verify. ${lh["away.ending"]()}`;
    },
    host_asleep ({ name, whileRunning, withdrawn, returnNoted }) {
        let o = withdrawn ? `This session has stopped waiting for it and withdrew its request: the command will be stopped when ${name} wakes, and may have partly run. Do not repeat it without checking.` : "The command was not cancelled: it is paused with the machine and will most likely continue when it wakes; what it had already done stays done. This session has stopped waiting for it. Do not repeat it, here or there.";
        let r = `${name} went to sleep ${whileRunning ? "while this command was running" : "after this command was sent to it"} (it said so itself). ${o}`;
        if (returnNoted) {
            return `${r} Do not call ${name} again until a later attached-machines note says ${name} is reachable again, or the user says it is back or asks you to try again; then check what this command did before sending anything else to ${name}. Meanwhile do the rest of the task without ${name}, and tell the user what is paused.`;
        }
        return `${r} Do not call ${name} again in this turn: do the rest of the task without ${name}, and tell the user what is paused. Check once more only when the user says it is back or asks you to try again, and then check what this command did before sending anything else to ${name}.`;
    },
    "unverified_refusal.call_phase" ({ name, whileRunning }) {
        return `A reply that could not be verified says this session is no longer paired with ${name}. ${whileRunning ? "It was running there; whether it finished is unknown." : "The state of this command there is unknown — it may or may not have run."} Do not retry it on ${name} until ${name} re-announces, and do not call it again in this turn; continue with what you can do without it, and tell the user you could not confirm whether it ${whileRunning ? "finished" : "ran"}.`;
    },
    approval_no_longer_covers (e) {
        return `A permission rule changed while this was waiting; nothing ran on ${e}. Ask again to get a fresh approval.`;
    },
    "in_progress.checkin" (e) {
        return `Checking on ${e} \u2014 the call is still with it\u2026`;
    },
    "ask_seat.waiting" (e) {
        return `Waiting to send to ${e} \u2014 earlier calls there still need a permission answer\u2026`;
    },
    "ask_seat.sending" (e) {
        return `Sending to ${e}\u2026`;
    },
    "reconnect_hold.waiting" ({ name, holdMs }) {
        return `Waiting for ${name} to come back (up to ${Math.round(holdMs / 1000)} s)\u2026`;
    },
    "reconnect_hold.ended" (e) {
        return `Stopped waiting for ${e}.`;
    },
    "reconnect_hold.gave_up" ({ name, holdMs }) {
        return `This call already waited up to ${Math.round(holdMs / 1000)} s for ${name} to come back; if this session is later told that ${name} is back, use it again from then.`;
    },
    "card.standing_unavailable" ({ name, kind }) {
        return `Always allow isn\u2019t available for ${kind === "command" ? "commands run" : "files"} on ${name} yet \u2014 this approves once.`;
    },
    no_answer ({ name, afterMs }) {
        return `No one approved or denied this within ${Math.round(afterMs / 1000)} s, so it was not run on ${name}. Nothing changed there. Continue with work that doesn't need this command and tell the user what you skipped; if it is essential, ask them directly.`;
    },
    "ask_ended.notice" ({ name, toolName, reason, afterMs }) {
        return `The approval for ${toolName} on ${name} was withdrawn \u2014 ${i(name, toolName, reason, afterMs)}; nothing was run.`;
    },
    withdrawn ({ name, reason }) {
        return `The request to run this on ${name} was withdrawn \u2014 ${d(name, reason)}; nothing ran there. Ask the user how to proceed rather than retrying.`;
    }
};
function i(name, toolName, reason, afterMs) {
    switch(reason){
        case "no_answer":
            return `nobody answered within ${h(afterMs)}`;
        case "host_withdrawn":
            return `${name} disconnected`;
        case "superseded":
            return `Claude Code on ${name} restarted`;
        case "evicted":
            return `${name} had too many approvals waiting`;
        case "tool_withdrawn":
            return `${name} stopped offering ${toolName}`;
        case "host_unbound":
            return `${name} is no longer available to this session`;
        case "host_stopped":
            return `Claude Code on ${name} quit`;
        case "stale_answer":
            return `the answer reached ${name} too late`;
        case "record_evicted":
            return `${name} no longer had a record of it`;
        case "replaced_by_retry":
            return "a newer copy of the request replaced it";
        case "unrecognized":
            return `${name} ended it`;
    }
}
function h(afterMs) {
    let t = Math.round(afterMs / 1000);
    if (t >= 60 && t % 60 === 0) {
        return `${t / 60} min`;
    }
    return `${t} s`;
}
function d(name, reason) {
    switch(reason){
        case "no_answer":
            return "no one answered it in time";
        case "host_withdrawn":
            return `Claude Code on ${name} left the session`;
        case "superseded":
            return `a newer Claude Code on ${name} took over from the one that asked`;
        case "evicted":
            return `too many requests were already waiting on ${name}`;
        case "tool_withdrawn":
            return `${name} stopped serving this tool`;
        case "host_unbound":
            return `${name} is no longer bound to this session`;
        case "host_stopped":
            return `Claude Code on ${name} was shutting down`;
        case "stale_answer":
            return `an answer was given but reached ${name} too late to count`;
        case "record_evicted":
            return `${name} no longer had a record of it`;
        case "replaced_by_retry":
            return "a newer copy of this request now carries the question";
        case "unrecognized":
            return `${name} let it go for a reason this build does not know`;
    }
}
export { lh };
