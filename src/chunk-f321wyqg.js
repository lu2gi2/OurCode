import { Gn } from "/$bunfs/root/chunk-jcpp67yk.js";
const xc = "ListAgents";
const Pcs = "ListPeers";
function e() {
    return "";
}
const o = `Lists agents you can ${Gn} to \u2014 in-process subagents you spawned, the teammates on your team, other local Claude sessions on this machine, your Claude sessions running in the cloud (when this session has cloud access; a cloud session receives your message but cannot message any session back yet \u2014 do not ask it to reply, read its answer in its own transcript), and (when Remote Control is connected here) your account's other sessions \u2014 Remote Control sessions on other machines and cloud sessions, each row labeled by kind. Names are the address: send with \`${Gn}({to: "<name>", message: "..."})\`, copying the name exactly as a row prints it. Append a row's \` [ref]\` only when the bare name is not enough \u2014 two rows share it, or an error asks you to disambiguate.`;
const n = `Lists the agents and Claude sessions this session can see \u2014 in-process subagents you spawned, the teammates on your team, other local Claude sessions on this machine, your Claude sessions running in the cloud (when this session has cloud access), and (when Remote Control is connected here) your account's other sessions, each row labeled by kind \u2014 plus this session's own name, the one other sessions use to message it. This session has no ${Gn} tool, so it cannot message them with it; other sessions can still message this one. To reply, use your host application's own messaging tool if it provides one \u2014 otherwise a reply from here is not possible, and if one is needed, tell your user.`;
function Moo({ canSendMessages }) {
    if (canSendMessages) {
        return o + e();
    }
    return n;
}
export { xc, Pcs, Moo };
