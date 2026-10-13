// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{f}from"/$bunfs/root/chunk-04d4ftnx.js";import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{kNe,PLn,ILn}from"/$bunfs/root/chunk-dck8836g.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{mt}from"/$bunfs/root/chunk-63xa24b4.js";import{sr}from"/$bunfs/root/chunk-092xqjkn.js";import{o,oe,u}from"/$bunfs/root/chunk-smx21d0k.js";var d="anthropic/toolHostInterface";function xin(){return kNe}function yUs(){let e=xin();return{experimental:e===void 0?{}:{[d]:e}}}var _=100;function _Us(e,a){let i=sr(a)?a[d]:void 0;if(i===void 0)return;let n=xin();if(n===void 0)return;let r=typeof i==="string"&&i.length<=_?PLn(mt(i,!1)):void 0,s=r===void 0?"unreadable":{peer_too_old:"session_too_old",self_too_old:"daemon_too_old",agreed:void 0}[ILn(n,r).kind];if(s===void 0)return;let l=`${e} was not run: ${r===void 0?"this server could not read the version of the interface that its caller stated with the call":s==="session_too_old"?`this session speaks version ${r.version} of the interface to this server, which works with version ${n.min_version} or later`:`this session works with version ${r.min_version} or later of the interface to this server, which speaks version ${n.version}`}. Retrying won't help: tell the user.`;return t(`MCP server: ${l}`,{level:"warn"}),f("mcp_serve_tool_output",`caller_interface_${s}`),{isError:!0,content:[{type:"text",text:l}],_meta:{[d]:{refused:s,range:n}}}}var V=p(()=>u({refused:o(),range:oe().optional()}));export{xin,yUs,_Us};
