// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Lo}from"/$bunfs/root/chunk-9dn6gg6j.js";import{fe}from"/$bunfs/root/chunk-gc7ea4xt.js";import{yd,XS,uR}from"/$bunfs/root/chunk-bmzhpr9h.js";var YW=["userSettings","flagSettings","policySettings"];function Fde(t){let i=new Set(Lo()),e=Ioe(t),n,r;for(let s of YW){if(!i.has(s))continue;let g=fe(s)?.pluginConfigs;for(let u of e){let o=g?.[u];if(o?.options)n={...n,...o.options};if(o?.mcpServers){r=r??{};for(let[l,c]of Object.entries(o.mcpServers))r[l]={...r[l],...c}}}}return{options:n,mcpServers:r}}function Ioe(t){let i=uR(t);if(i.length>0)return[...i.toReversed(),t];let e=`@${yd}`,n=t.endsWith(e)?t.slice(0,-e.length):"";return n!==""&&!n.includes("@")?[n,t]:[t]}function ZFn(t){let i=new Set(Lo()),e;for(let n of YW){if(!i.has(n))continue;let r=hY(fe(n)?.enabledPlugins,t);if(r!==void 0)e=r}return e}function eIt(t,i){let e=XS(i),n=uR(e);if(n.length===0)return{deciding:i,written:i,replaced:[]};let r=n.filter((s)=>t?.[s]!==void 0);return{deciding:t?.[e]===void 0?r[0]??e:e,written:e,replaced:r}}function hY(t,i){let e=XS(i);return[e,...uR(e),i].map((n)=>t?.[n]).find((n)=>n!==void 0)}
export{YW,Fde,Ioe,ZFn,eIt,hY};
