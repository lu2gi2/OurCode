// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Wu}from"/$bunfs/root/chunk-jc71z2z2.js";import{FI}from"/$bunfs/root/chunk-a5rabwn2.js";import{l$}from"/$bunfs/root/chunk-kasbfbhj.js";function rte(o,e){return o.config.scope===e.scope&&o.config.pluginSource===e.pluginSource?o:{...o,config:e}}var c=(o,e)=>({...e,scope:o.config.scope,pluginSource:o.config.pluginSource,source:l$(o.name,o.config),pluginTelemetry:void 0,...o.config.pluginSource!==void 0&&{pluginTelemetry:FI(o.config.pluginSource,Wu())}});function W6(o,e){let n=e.map((r)=>{if(r.mcpInfo===void 0)return r;return r.mcpInfo.scope===o.config.scope&&r.mcpInfo.pluginSource===o.config.pluginSource?r:{...r,mcpInfo:c(o,r.mcpInfo)}});return n.every((r,p)=>r===e[p])?e:n}
export{rte,W6};
