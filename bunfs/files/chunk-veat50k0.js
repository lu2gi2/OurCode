// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Y4e,LNe}from"/$bunfs/root/chunk-eb0vnwc4.js";import{vt,bxt}from"/$bunfs/root/chunk-0vgmtssp.js";import{SZe}from"/$bunfs/root/chunk-sqysdndt.js";async function op(r,e,o,t){let a=vt(r.slug);if(!!e.toolUseId&&a?.lastProbeToolUseId===e.toolUseId)return;let s=Date.now(),[l]=await Promise.all([SZe(r,e.abortController.signal,e.credentials,t),LNe()?Y4e(r,e.abortController.signal):void 0]);bxt(r.slug,l,{consumedByCheck:!0,toolUseId:e.toolUseId,issuedAt:s,debugLabel:o})}async function I_n(r,e,o){let t=Date.now(),a=await SZe(r,e.abortController.signal,e.credentials);bxt(r.slug,a,{consumedByCheck:!1,toolUseId:e.toolUseId,issuedAt:t,debugLabel:o})}
export{op,I_n};
