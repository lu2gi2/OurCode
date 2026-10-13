// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{yp}from"/$bunfs/root/chunk-qcw8ncs1.js";import{hE,t_}from"/$bunfs/root/chunk-59xjawk6.js";function qee(t,r){return`${yp(t)??""}/${yp(r)??""}`}function Wzo(t){return yp(t)??""}function Kgn({serverName:t,toolName:r,mcpTaskId:o,toolUseId:s,pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:c}){let e=hE("mcp_task");return{...t_(e,"mcp_task",qee(t,r),s),type:"mcp_task",status:"running",serverName:t,toolName:r,mcpTaskId:o??e,mcpStatus:"working",pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:c}}
export{qee,Wzo,Kgn};
