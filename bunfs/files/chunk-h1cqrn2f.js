// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Q}from"/$bunfs/root/chunk-jtpfgrzr.js";import{vce}from"/$bunfs/root/chunk-k3pmdjj0.js";import{xa}from"/$bunfs/root/chunk-mddy60q9.js";import{Bo,rd}from"/$bunfs/root/chunk-2dp0fzyb.js";function afr(o,e){if(o.type!=="pending")return!1;let n=Bo(o.name);return!e.some((t)=>rd(t,o.name,n))}async function lfr(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await Q(l);let r=o();if(s?.(r)||!i(r))return}}function czs(o){return o.some(YOn)}function YOn(o){return"role"in o.config&&o.config.role==="comms"}function EAt(o){return o.mcpInfo?.role==="comms"}function Zne(o){if(xa())return o.filter((e)=>!EAt(e));return o}async function uKe(o){if(!xa())return;await lfr(o,(e,n)=>afr(e,n.tools)&&!YOn(e),{maxWaitMs:vce})}
export{afr,lfr,czs,YOn,EAt,Zne,uKe};
