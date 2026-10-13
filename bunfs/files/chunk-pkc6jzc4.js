// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ns}from"/$bunfs/root/chunk-qk3m4n8a.js";import{l$}from"/$bunfs/root/chunk-kasbfbhj.js";import{oo}from"/$bunfs/root/chunk-ctt36bn8.js";import{$Cs}from"/$bunfs/root/chunk-xb9cceab.js";import{H1n}from"/$bunfs/root/chunk-6dwnw6av.js";var t="(value set by your organization)";function Yje(r,e){if(e!=="managed")return r;return{...r,url:$Cs(r.url)??t,...r.headers&&{headers:oo(r.headers,()=>t)}}}function HJe(r){return r==="cached"?"pending":r}function efn(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=Yje({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:HJe(e.type),config:o,scope:e.config.scope,source:l$(e.name,e.config),serverInfo:Ns(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:H1n(e)}})}
export{Yje,HJe,efn};
