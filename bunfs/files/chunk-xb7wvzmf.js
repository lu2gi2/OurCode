// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{Zo}from"/$bunfs/root/chunk-v56yyhmh.js";import{U,_u}from"/$bunfs/root/chunk-smx21d0k.js";var zee=Zo({kind:"mcp_elicitation",payload:p(()=>_u((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>_u((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),Hie=Zo({kind:"mcp_elicitation_waiting",payload:p(()=>_u((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>U(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function _1r(t){return t===zee.kind||t===Hie.kind}
export{zee,Hie,_1r};
