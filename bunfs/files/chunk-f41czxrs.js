// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Gn}from"/$bunfs/root/chunk-jcpp67yk.js";var Ew="SubagentHandback";var yt="Agent",Ohs="Launch a new agent to handle complex, multi-step tasks",Mhs="The task for the agent to perform",Hhs="A short (3-5 word) description of the task",Euo="Name for the spawned agent.",Dhs=`${Euo} Makes it addressable via ${Gn}({to: name}) while running.`,Q$="fork",Lhs=`agent:builtin:${Q$}`,zf="Task",jit=1e5,uxt=new Set(["Explore","Plan"]),RCe="NOTE: this agent stopped at its ",i_r=`; ${Gn} to task-id to continue`,kNn=` Send the agent a message (${Gn}) to let it continue from where it stopped.`,TNn=`The subagent ended without delivering a report through ${Ew}, so no report was delivered.`,ANn=` Send the agent a message (${Gn}) to ask it to deliver its report.`,CNn="subagent_type is required: the general-purpose agent is not available in this session";
export{Ew,yt,Ohs,Mhs,Hhs,Euo,Dhs,Q$,Lhs,zf,jit,uxt,RCe,i_r,kNn,TNn,ANn,CNn};
