import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { PYe } from "/$bunfs/root/chunk-xpqgtv5j.js";
import { lgt, kFt } from "/$bunfs/root/chunk-mm2yesqa.js";
import { rn } from "/$bunfs/root/chunk-223dyewd.js";
function L$o({ targetName }) {
    return `${targetName} could not check this again as it was about to remove it, so nothing was removed. Send the command again.`;
}
function N$o({ targetName }) {
    return `${targetName} removed part of what this names and stopped, because the rest had changed. Send the command again for the rest.`;
}
function hun({ field, targetName }) {
    let t = `${field} is not available on ${targetName}.`;
    if (field === "run_in_background") {
        return `${t} The calling session has no way to poll a background task there. Run it in the foreground, or in the session's own environment.`;
    }
    return t;
}
function $$o({ toolName, targetName }) {
    return `${toolName} on ${targetName} is served for Claude Code remote tool execution and must be called through a cloud session's forwarder.`;
}
function F$o({ toolName, targetName }) {
    return `${toolName} on ${targetName} speaks a different remote tool execution protocol version than the caller. Update Claude Code on both machines.`;
}
function TLr({ stoppedBy, targetName }) {
    switch(stoppedBy){
        case "deadline":
            return `The call was stopped on ${targetName} at its deadline before the command started \u2014 nothing ran.`;
        case "shutdown":
            return `The call was stopped because Claude Code on ${targetName} is shutting down, before the command started \u2014 nothing ran.`;
        case "cancel":
            return `The call was cancelled on ${targetName} before the command started \u2014 nothing ran.`;
    }
}
function O6n({ targetName, why }) {
    return `${why === "gone" ? `That permission request is no longer pending on ${targetName}` : `This approval answers a different request than the one pending on ${targetName}`}, so nothing ran. Run the tool again if it is still needed.`;
}
function U$o({ requestedMs, appliedMs, targetName }) {
    let a = rn(requestedMs, {
        hideTrailingZeros: true
    });
    let s = rn(appliedMs, {
        hideTrailingZeros: true
    });
    if (a === s) {
        a = `${requestedMs}ms`;
        s = `${appliedMs}ms`;
    }
    return `The ${a} timeout this call asked for exceeds the ${s} ${targetName} allows a command \u2014 it was held to ${s}.`;
}
function B$o({ targetName, violationRecorded }) {
    return `This command ran on ${targetName} inside Claude Code's sandbox, which is switched on there. The sandbox can block network connections and file writes outside the working directories.${violationRecorded ? " The sandbox_violations lines in the output name what it blocked." : ""} If that is why the command failed, running it again unchanged will fail the same way \u2014 tell the user what was blocked instead of guessing at another cause.`;
}
function j$o({ targetName, shellId, outputPath, limitMs }) {
    let s = rn(limitMs, {
        hideTrailingZeros: true
    });
    return `Command running in the background on ${targetName} with ID: ${shellId}. Output is being written there to: ${outputPath}. This session is not notified when it finishes. Whether it is still running is told by ${targetName} itself: not by that file, which holds only what the command has printed (a program that buffers its output shows it there only when it flushes), and never by pgrep, ps, pkill or a network request from a later command, because where ${targetName} sandboxes commands each command sees only its own processes and its own network, so a command that is running looks absent from there. It is stopped after ${s} in the background, or earlier if ${targetName} stops serving this session.`;
}
function yun(e, n) {
    switch(e){
        case "caller_stopped":
            return "by this session";
        case "stopped_by_person":
            return `by the person at ${n}`;
        case "time_limit":
            return "at its time limit";
        case "serving_ended":
            return `when ${n} quit serving`;
        case "serving_off":
            return "when serving shut off";
        case "serving_check_failed":
            return `when ${n} could not check whether it still serves this session`;
        case "call_stopped":
            return "when its call ended";
    }
}
function M6n(e, { targetName, max }) {
    switch(e){
        case "full":
            return `${targetName} already has ${max} background ${I(max, "command")} running or waiting for approval for this session, the most it takes at a time. Nothing was started. Wait for one to finish, or run this one in the foreground.`;
        case "sandbox_down":
            return `${targetName} has Claude Code's sandbox switched on, but the sandbox is not running there, so it starts no command in the background. Nothing was started.`;
        case "unavailable":
            return `${targetName} cannot run a command in the background for this session right now. Nothing was left running. Run it in the foreground.`;
    }
}
function W$o({ toolName, targetName }) {
    return `${toolName} is not served on ${targetName}.`;
}
function _un({ targetName, kind, subject }) {
    switch(kind){
        case "read":
            return `${targetName} does not let a cloud session read the credential that authorizes this connection (${subject}). Nothing was read.`;
        case "write":
            return `${targetName} does not let a cloud session change the credential file that authorizes this connection (${subject}). Nothing was written.`;
        case "keychain":
            return `${targetName} does not let a cloud session query its credential store (\`${subject}\`). Nothing was run.`;
        case "keychain_files":
            return `${targetName} does not let a cloud session open this Mac's keychain files (${subject}). Nothing was read or written.`;
        case "credential_store_files":
            return `${targetName} does not let a cloud session open this computer's Credential Manager files (${subject}). Nothing was read or written.`;
        case "exec_ingest":
            return `${targetName} does not let a cloud session write to ${subject}, which its background daemon would execute. Nothing was written.`;
        case "personal_credential":
            return `${targetName} does not let a cloud session read or change its SSH keys, cloud-provider credentials or saved developer-tool logins (${subject}). Nothing was read or written.`;
    }
}
function z$o({ targetName }) {
    return `${targetName} does not let a cloud session change its Claude Code settings files, or the folder that holds them. Nothing was run. Tell the user: those settings can only be changed on ${targetName} itself.`;
}
function G$o({ targetName }) {
    return `${targetName} does not let a cloud session change its Claude Code settings files. Nothing was changed. Tell the user: those settings can only be changed on ${targetName} itself.`;
}
function V$o({ targetName, toolName }) {
    return `${targetName} could not finish checking its permission rules for this ${toolName} call, so the call was not run and nobody was asked. Sending the same call again is unlikely to help. Tell the user: this is an error on ${targetName}, not a refusal by one of its rules.`;
}
function q$o({ targetName, limit }) {
    return `${targetName} already keeps state for ${limit} cloud ${I(limit, "session")}, the most it holds at once \u2014 this session was not added and nothing ran. Tell the user: restarting Claude Code on ${targetName} frees those seats. Do not retry in a loop.`;
}
function K$o({ targetName }) {
    return `Claude Code on ${targetName} has only just started and had not finished loading the hooks and settings it checks every call against before this call's time ran out \u2014 nothing ran. Send the call again in a moment. If it is refused this way again, tell the user that Claude Code on ${targetName} is not finishing its start-up.`;
}
function Y$o({ targetName }) {
    return `${targetName} changed how it allows this session's calls while this one was being checked \u2014 nothing ran. Send the call again.`;
}
function ALr({ targetName }) {
    return `${targetName} is set to run this session's calls only inside a sandbox, and the sandbox is not available \u2014 nothing ran. Sending the call again will not change that. Tell the user that the sandbox on ${targetName} is not available, and that its owner can check Claude Code there.`;
}
function X$o({ targetName }) {
    return `${targetName} could not read all of its settings when this call arrived, so it could not tell whether this session's calls may run there or only inside a sandbox \u2014 nothing ran. The call can be sent again in a moment. If it is refused this way again, tell the user that Claude Code on ${targetName} cannot read its settings, and that its owner can check the settings files there and whether the organization's settings have loaded.`;
}
function J$o({ targetName, leg, endedAsk, ageMs }) {
    let s = leg === "call" ? "This call" : "This answer to a permission request";
    let o = endedAsk ? "the request it answered was withdrawn and nothing ran. Send the call again if it is still wanted." : leg === "call" ? "nothing ran. Send it again if it is still wanted." : "nothing ran for it.";
    if (ageMs === undefined) {
        return `${s} reached ${targetName} over a connection that could not be dated against the service's clock, so whether it is still current is unknown \u2014 ${o}`;
    }
    return `${s} reached ${targetName} ${rn(ageMs)} after it was sent (the machine was asleep, offline, or reconnecting), after this session had stopped waiting for it \u2014 ${o}`;
}
function mJe({ targetName, status, subtype }) {
    return `${PYe({
        status,
        payloadType: "control_request",
        subtype
    })} Nothing was done for it on ${targetName}. Sending it again will not change that: tell the user instead of retrying.`;
}
function Q$o({ targetName, state }) {
    switch(state){
        case "declined":
            return `This session's attached repositories were not marked trusted, so its calls to ${targetName} are not accepted \u2014 nothing was done for this one. Sending it again will not change that: ask the person to answer the trust question, and tell them what stays blocked until they do.`;
        case "not_marked":
            return `This session has repositories or files attached that its owner has not said they trust, so its calls to ${targetName} are not accepted. Nothing was done for this one. Sending the same call again will not change that. Call ${kFt} once. If it refuses with a trust question, put the question to the person: their yes clears this. If it lists folders, call ${lgt} for the folder this session was using: the person's Allow clears this. If neither asks the person anything, or ${targetName} still refuses after their answer, tell them plainly what stays blocked, and that a new session with no repository and none of their files can run a quick command.`;
    }
}
function Z$o({ targetName, askAgeMs, windowMs, dated }) {
    let s = Math.round(windowMs / 3600000);
    let o = Math.floor(askAgeMs / 86400000);
    let i = o >= 2 ? `${o} days` : "more than a day";
    let r = dated ? `${i} after the request was raised \u2014 longer than an answer` : `over a channel that carries no delivery time, ${i} after the request was raised \u2014 longer than such an answer`;
    return `This approval reached ${targetName} ${r} is honoured for (${s} ${I(s, "hour")}) \u2014 so the request was withdrawn and nothing ran. Send the call again if it is still wanted.`;
}
function eFo({ targetName, limit }) {
    return `${targetName} already has ${limit} approval ${I(limit, "request")} from this session waiting, the most it holds at once, so it did not ask about this call and this call was not run. Send it again once some of them have been answered.`;
}
function Mee({ targetName, reason }) {
    switch(reason){
        case "evicted":
            return `An older pending approval on ${targetName} was withdrawn because too many were waiting \u2014 it did not run.`;
        case "tool_withdrawn":
            return `The tool is no longer offered on ${targetName} \u2014 nothing ran.`;
        case "host_unbound":
            return `${targetName} stopped serving this session while the permission request was open \u2014 nothing ran.`;
        case "host_stopped":
            return `Claude Code on ${targetName} stopped while the permission request was open \u2014 nothing ran.`;
        case "stale_answer":
            return `The answer to this permission request reached ${targetName} after the session had stopped waiting for it \u2014 the request was withdrawn and nothing ran.`;
        case "replaced_by_retry":
            return `A newer copy of this call now carries the permission request on ${targetName}; this one was withdrawn and nothing ran under it.`;
        case "record_evicted":
            return `${targetName} no longer holds a record of this permission request \u2014 nothing ran under it.`;
        case "no_answer":
            return `Nobody answered the permission request for this call on ${targetName} in the time the session waits \u2014 it was withdrawn and nothing ran.`;
        case "host_withdrawn":
            return `Claude Code on ${targetName} left the session while the permission request was open \u2014 nothing ran.`;
        case "superseded":
            return `A newer Claude Code on ${targetName} took over while the permission request was open \u2014 nothing ran.`;
        case "unrecognized":
            return `The permission request on ${targetName} ended for a reason this version of Claude Code does not recognise \u2014 nothing is known to have run.`;
    }
}
export { L$o, N$o, hun, $$o, F$o, TLr, O6n, U$o, B$o, j$o, yun, M6n, W$o, _un, z$o, G$o, V$o, q$o, K$o, Y$o, ALr, X$o, J$o, mJe, Q$o, Z$o, eFo, Mee };
