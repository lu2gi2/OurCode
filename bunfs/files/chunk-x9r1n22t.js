// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{Cp}from"/$bunfs/root/chunk-9dn6gg6j.js";import{vh}from"/$bunfs/root/chunk-fbhagmpx.js";import{xp}from"/$bunfs/root/chunk-qk3m4n8a.js";function y_n(o){if(!o||Object.keys(o).length===0)return!1;for(let n of xp){let e=o[n];if(!e||e.length===0)continue;for(let r of e)if((r.hooks?.length??0)>0)return!0}return!1}function kqo(o,n,e,r,l=!1,u=!1,m=!1){if(!e||Object.keys(e).length===0)return;let s=0;for(let i of xp){let f=e[i];if(!f||f.length===0)continue;let a=i;if(l&&i==="Stop")a="SubagentStop",t(`Converting Stop hook to SubagentStop for ${r} (subagents trigger SubagentStop)`);for(let c of f){let S=c.matcher??"",g=c.hooks;if(!g||g.length===0)continue;for(let h of g)o.add(n,a,S,h,{personal:u,checkout:m}),s++}}if(s>0)t(`Registered ${s} frontmatter hook(s) from ${r} for session ${n}`)}function m7e(o){return vh()&&o!==void 0&&Cp.has(o)}
export{y_n,kqo,m7e};
