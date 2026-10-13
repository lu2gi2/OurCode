// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ce}from"/$bunfs/root/chunk-0ycjphb5.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{Up,vn}from"/$bunfs/root/chunk-bmzhpr9h.js";import{Wu}from"/$bunfs/root/chunk-jc71z2z2.js";import{FM,UM}from"/$bunfs/root/chunk-4521ay78.js";import{C0n}from"/$bunfs/root/chunk-45f0zf8d.js";import{oro,XIn,JIn,lro}from"/$bunfs/root/chunk-a5rabwn2.js";var d=14,f=10;async function UWe(){try{let e=C0n();if(e===void 0)return[];if(UM()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=Wu(),l=FM(),c=ce().numStartups,g=Date.now(),r=[];for(let n of s){let{marketplace:o}=vn(n.repository);if(!o||Up(o))continue;if(lro(n,u,l)!=="user-install")continue;if(p(n))continue;let i=XIn(n.repository);if(!i)continue;if(oro(n.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=JIn(i,c,g);if(a>=d&&m>=f)r.push({pluginId:n.repository,name:n.name,daysSinceLastUse:a})}return r.sort((n,o)=>o.daysSinceLastUse-n.daysSinceLastUse),r}catch(e){return t(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function DGo(e){if(UM()!==null)return null;let s=XIn(e);if(!s)return null;if(oro(e))return 0;return JIn(s,ce().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{UWe,DGo};
