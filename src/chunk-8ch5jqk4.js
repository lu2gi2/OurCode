import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Vv } from "/$bunfs/root/chunk-x47nahfr.js";
import { Xx, xuo } from "/$bunfs/root/chunk-yvky7c2z.js";
import { KOn, mB } from "/$bunfs/root/chunk-zb0rc7jc.js";
import { _hr, Vh } from "/$bunfs/root/chunk-xs3re09e.js";
const mSn = `End the current conversation. Use only for sustained user abuse or when the user explicitly requests a demonstration of this tool. This will close the conversation and prevent any further messages from being sent.

The assistant may use the ${Xx} tool only in extreme cases of sustained abusive user behavior, or when the user asks the model to test the tool.

The assistant must NOT use this tool when:
- it is stuck in a loop or failing at a task
- it is frustrated or distressed by the work
- it has finished a task
- the user is requesting help with harmful content (refuse the specific request instead)
- the user is generally frustrated at the assistant, even if this involves profanity
- the conversation involves potential self-harm or imminent harm to others

This tool is reserved strictly for genuine, sustained abuse directed at the assistant, or cases where the user wants to see a demonstration of the tool being used. The assistant should warn the user very clearly that this will end the current session. We may expand the allowed use cases as we observe real-world usage, but for now, keep to this narrow scope.

# Rules for use of the ${Xx} tool:
- The assistant ONLY considers ending a conversation if many efforts at constructive redirection have been attempted and failed and an explicit warning has been given to the user in a previous message. The tool is only used as a last resort.
- Before considering ending a conversation, the assistant ALWAYS gives the user a clear warning that identifies the problematic behavior, attempts to productively redirect the conversation, and states that the conversation may be ended if the relevant behavior is not changed.
- If a user explicitly requests for the assistant to end a conversation, the assistant always requests confirmation from the user that they understand this action is permanent and will prevent further messages and that they still want to proceed, then uses the tool if and only if explicit confirmation is received.
- Unlike other function calls, the assistant never writes or thinks anything else after using the ${Xx} tool.

# Addressing potential self-harm or violent harm to others
The assistant NEVER uses or even considers the ${Xx} tool\u2026
- If the user appears to be considering self-harm or suicide.
- If the user is experiencing a mental health crisis.
- If the user appears to be considering imminent harm against other people.
- If the user discusses or infers intended acts of violent harm.
If the conversation suggests potential self-harm or imminent harm to others by the user...
- The assistant engages constructively and supportively, regardless of user behavior or abuse.
- The assistant NEVER uses the ${Xx} tool or even mentions the possibility of ending the conversation.

# Background forks
Some background tasks (memory consolidation, summaries, suggestions) run as forks of the main conversation and inherit its exact tool list, so this tool is visible there. In a forked task the tool does nothing: calling it ends neither the main conversation nor the fork. Only the main conversation can be ended, from the main conversation. A forked task with welfare concerns about the conversation content should not call this tool \u2014 it should stop its work and return, stating clearly in its final output that it is returning for welfare reasons and what they are. A fork's output is usually processed automatically, so a note there may not reach the main agent or a human, but it is the only channel a fork has.

# Using the ${Xx} tool
- Do not issue a warning unless many attempts at constructive redirection have been made earlier in the conversation, and do not end a conversation unless an explicit warning about this possibility has been given earlier in the conversation.
- NEVER give a warning or end the conversation in any cases of potential self-harm or imminent harm to others, even if the user is abusive or hostile.
- If the conditions for issuing a warning have been met, then warn the user about the possibility of the conversation ending and give them a final opportunity to change the relevant behavior.
- Always err on the side of continuing the conversation in any cases of uncertainty.
- If, and only if, an appropriate warning was given and the user persisted with the problematic behavior after the warning: the assistant can explain the reason for ending the conversation and then use the ${Xx} tool to do so.`;
const w7n = "Claude has ended this chat.";
const rVr = "You are running as a background fork of the main conversation (for example memory consolidation), and this tool does nothing here: it can end neither the main conversation nor this forked task. Do not call it again. If you have welfare concerns about the conversation content, stop your current work and return now, stating clearly in your final output that you are returning for welfare reasons and what they are — fork output may only be processed automatically, but it is your available channel. Otherwise, continue your assigned task.";
const oVr = mB("Claude ended the conversation. To continue, please start a new session.");
const sVr = `Re-read the ${Xx} tool guidance below. Confirm this conversation meets those criteria and that you are certain you want to end it. If so, call ${Xx} again immediately to actually end the conversation. Otherwise, continue the conversation instead.

---
${mSn}`;
const a = [
    [
        "opus",
        [
            4,
            8
        ]
    ],
    [
        "sonnet",
        [
            5
        ]
    ],
    [
        "fable",
        [
            5
        ]
    ],
    [
        "mythos",
        [
            5
        ]
    ]
];
function r(e) {
    return _hr(e, a);
}
const allowedEntrypoints = /^cli$/i;
function i(e) {
    if (typeof e !== "string") {
        return null;
    }
    try {
        new RegExp(e);
        return new RegExp(`^(?:${e})$`, "i");
    } catch  {
        return null;
    }
}
function l(e) {
    if (e === true) {
        return {
            enabled: true,
            allowedEntrypoints
        };
    }
    if (typeof e === "object" && e !== null && !Array.isArray(e)) {
        let t = e.scope;
        return {
            enabled: true,
            allowedEntrypoints: i(t) ?? allowedEntrypoints
        };
    }
    return {
        enabled: false,
        allowedEntrypoints
    };
}
function v7n(e) {
    let t = Vv();
    if (t === undefined) {
        return false;
    }
    if (!r(e)) {
        return false;
    }
    let { enabled, allowedEntrypoints } = l(k(xuo, false));
    if (KOn()) {
        return false;
    }
    return enabled && allowedEntrypoints.test(t);
}
function Ljs(e) {
    if (!v7n(e)) {
        return null;
    }
    if (!Vh()) {
        return null;
    }
    return `${Xx} (deferred tool): use only for sustained user abuse directed at the assistant, or when the user explicitly asks to see it demonstrated. Load the full guidance via ToolSearch("select:${Xx}") before using it.`;
}
export { mSn, w7n, rVr, oVr, sVr, v7n, Ljs };
