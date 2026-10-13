import { Gn } from "/$bunfs/root/chunk-jcpp67yk.js";
const Ew = "SubagentHandback";
const yt = "Agent";
const Ohs = "Launch a new agent to handle complex, multi-step tasks";
const Mhs = "The task for the agent to perform";
const Hhs = "A short (3-5 word) description of the task";
const Euo = "Name for the spawned agent.";
const Dhs = `${Euo} Makes it addressable via ${Gn}({to: name}) while running.`;
const Q$ = "fork";
const Lhs = `agent:builtin:${Q$}`;
const zf = "Task";
const jit = 100000;
const uxt = new Set([
    "Explore",
    "Plan"
]);
const RCe = "NOTE: this agent stopped at its ";
const i_r = `; ${Gn} to task-id to continue`;
const kNn = ` Send the agent a message (${Gn}) to let it continue from where it stopped.`;
const TNn = `The subagent ended without delivering a report through ${Ew}, so no report was delivered.`;
const ANn = ` Send the agent a message (${Gn}) to ask it to deliver its report.`;
const CNn = "subagent_type is required: the general-purpose agent is not available in this session";
export { Ew, yt, Ohs, Mhs, Hhs, Euo, Dhs, Q$, Lhs, zf, jit, uxt, RCe, i_r, kNn, TNn, ANn, CNn };
