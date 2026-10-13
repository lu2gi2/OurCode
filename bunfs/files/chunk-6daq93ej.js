// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{Kt}from"/$bunfs/root/chunk-4r6b8efh.js";import{fgn}from"/$bunfs/root/chunk-q2exc16c.js";import{Die,jzo}from"/$bunfs/root/chunk-gttxxz09.js";import{o,PP,T,u,Ue}from"/$bunfs/root/chunk-smx21d0k.js";var r="",s="",c9n="mcp",ugn="mcp-display-only";var c=p(()=>u({}).passthrough()),m1r=p(()=>Ue([o(),T(u({type:o()}).passthrough()),PP()]).describe("MCP tool execution result"));function i(e){if(!Array.isArray(e)||!e.some(a))return e;return e.map((t)=>a(t)?{...t,source:{...t.source,data:""}}:t)}function m(e){return Array.isArray(e)&&e.some(n)?e.filter((t)=>!n(t)):e}function n(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data===""}function a(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data!==""}var gOe=Kt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:c9n,backgrounding:"self",maxResultSizeChars:1e5,async description(){return s},async prompt(){return r},get inputSchema(){return c()},get outputSchema(){return m1r()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return fgn(e,{verbose:t})},userFacingName:()=>"mcp",stripForCreation:(e)=>jzo(i(e)),mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:Die(m(e))}}});
export{c9n,ugn,m1r,gOe};
