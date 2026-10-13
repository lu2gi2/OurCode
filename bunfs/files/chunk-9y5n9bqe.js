// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{o,E,M,T,u}from"/$bunfs/root/chunk-smx21d0k.js";var e=p(()=>u({path:o(),text:o(),chars:E().int().min(0),clipped:M().optional()}));function Cfn(){return{init_references:u({docs:T(e()),unavailable:T(u({path:o(),why:o()})).optional()}).optional()}}function HUt(){return{design_system:u({url:o().optional(),default:o().optional(),title:o().optional(),store:M().optional(),docs:T(e()).optional(),unavailable:o().optional()}).optional()}}var t=p(()=>u({dir:o(),files:T(u({path:o(),bytes:E()})),skipped:T(u({path:o(),reason:o()}))})),Rfn=p(()=>u({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:M(),capabilities_skill:M(),repl_tool:M().optional()}));
export{Cfn,HUt,Rfn};
