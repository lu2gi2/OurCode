// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{Ao}from"/$bunfs/root/chunk-kasbfbhj.js";import{o,oe,T,u,A}from"/$bunfs/root/chunk-smx21d0k.js";var ejo="Resumed agent. Its final report is not in this message.",tjo="Resumed agent. Its final report follows this JSON, framed by the harness.";function CUr({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Ao(n,`
`)||"(no text output)"}`}var RUr=p(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:T(u({type:A("text"),text:o()}))}).optional().catch(void 0),routing:oe().optional(),request_id:oe().optional(),target:oe().optional()}));function xUr(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?CUr(e.inlineHandback):e.message)}function njo(e){let n=RUr().safeParse(e);return n.success?xUr(n.data)??"":""}
export{ejo,tjo,CUr,RUr,xUr,njo};
