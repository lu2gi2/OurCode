// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{fr}from"/$bunfs/root/chunk-se8vehhp.js";import{x}from"/$bunfs/root/chunk-m1rt7wpr.js";import{j}from"/$bunfs/root/chunk-fcerdfs3.js";import{Yr}from"/$bunfs/root/chunk-ghmnmzfd.js";import{Vm,gt}from"/$bunfs/root/chunk-c7x4m87m.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function gBo(e,r){if(j()&&r!==void 0&&fr(e)){await n(r,{namespace:"job",jobId:e});return}await i(Yr(e),{recursive:!0})}async function VIe(e,r){if(j()&&r!==void 0&&fr(e)){await n(r,c(e));return}await i(a(Yr(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=Vm(o.error);throw Object.assign(new x(`job folder not made (${gt(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{gBo,VIe};
