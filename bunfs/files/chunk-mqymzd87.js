// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{BR,qv}from"/$bunfs/root/chunk-ctt36bn8.js";import{Lo}from"/$bunfs/root/chunk-9dn6gg6j.js";import{Bl}from"/$bunfs/root/chunk-dp4xqs6t.js";import{S_,fe}from"/$bunfs/root/chunk-gc7ea4xt.js";import{wtt,YZo,iar,NS,_2,qp,D_}from"/$bunfs/root/chunk-kasbfbhj.js";import{kf,zx,Td}from"/$bunfs/root/chunk-4521ay78.js";import{Klo,C9t}from"/$bunfs/root/chunk-pbtb1p2a.js";var a=iar.filter((e)=>e!=="userSettings");function Nje(e){if(Klo())return!1;if(C9t())return!0;return(e??Sgt()).length>0}function Sgt(e=X6n()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${Bl()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(zx())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&Td(s)&&!u(t,s.url);if(s.source==="settings")return Td(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!kf(`${n.name}@${t}`));return!1})}function u(e,r){let o=Lo();if(a.some((t)=>o.includes(t)&&Object.hasOwn(fe(t)?.extraKnownMarketplaces??{},e)))return!0;return YZo({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(NS(),e)}function i(e){if(qv()||D_())return!1;let{servers:r}=qp(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&wtt(o)==="rejected")&&_2(o,t))}function X6n(){if(BR())return[];let e=Lo(),r=e.includes("localSettings")?fe("localSettings"):null,o=[];if(e.includes("projectSettings")&&!S_()&&c(fe("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{Nje,Sgt,X6n};
