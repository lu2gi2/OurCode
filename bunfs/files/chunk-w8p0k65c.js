// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ul,cpe}from"/$bunfs/root/chunk-6bjtvbt8.js";import{gn,Ig}from"/$bunfs/root/chunk-k3tkc302.js";import{de}from"/$bunfs/root/chunk-qjzjr1ys.js";import{rQ,ZIn,ZTt}from"/$bunfs/root/chunk-cxfa2a1y.js";import{N2}from"/$bunfs/root/chunk-jn57cv7f.js";import{Xl}from"/$bunfs/root/chunk-mhg15z8n.js";var l=[gn,Ig].flatMap((o)=>[o,...cpe(o)]);function a(o,s){let e=[...Object.entries(o.options.toolAliases??{}),...Object.entries(de(o).toolAliases??{})],t=e.flatMap(([n,i])=>[...s.includes(i)?[n]:[],...s.includes(n)?[i]:[]]),r=e.flatMap(([n,i])=>t.includes(i)?[n]:[]);return[...s,...t,...r]}function c(o,s){if(!o||o==="*")return!0;if(/^[a-zA-Z0-9_|, -]+$/.test(o))return o.split(/[|,]/).map((e)=>e.trim()).some((e)=>s.includes(e)||s.includes(Ul(e)));try{let e=ZIn(o);return s.some((t)=>e.test(t))}catch{return!0}}function p(o,s){let e=N2("tool.call"),t=N2("tool.check");return Xl("classic.PreToolUse",void 0,N2("classic.PreToolUse"))||o.some((r)=>Xl("tool.call",{tool:r},e)||Xl("tool.check",s?{tool:r}:ZTt({name:r}),t))}function xzr(o,s){try{let e=s===void 0?l:[...l,s,...cpe(s)],t=a(o,e);if(p(t,t.length>e.length))return!0;if(o.sessionHooksRegistry.has(o.agentId??o.session.id,"PreToolUse"))return!0;return rQ("PreToolUse").some((r)=>c(r.matcher,t)&&r.hooks.some((n)=>!(n.type==="callback"&&n.internal===!0)))}catch{return!0}}
export{xzr};
