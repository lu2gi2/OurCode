// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,cs}from"/$bunfs/root/chunk-ctt36bn8.js";import{St,_,ie}from"/$bunfs/root/chunk-bd805sh6.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{dirname as u}from"path";function c(){}async function p(n,t){let i=ie();try{await i.appendFile(n,t)}catch{await i.mkdir(u(n)).catch(c),await i.appendFile(n,t)}}class g{pendingWrite=Promise.resolve();cleanupRegistered=!1;append(n,t){if(this.pendingWrite=this.pendingWrite.then(p.bind(null,n,t)).catch(c),!this.cleanupRegistered)this.cleanupRegistered=!0,St(()=>this.flush())}flush(){return this.pendingWrite}}var f=new q(()=>new g);function d(){return cs(f)}function J(n,t,i,r="queued"){let o=m();if(!o)return;let e;try{e=s(n,t,l(i))}catch{e=s(n,t,{diagnostics_payload_failed:!0})}if(r==="now")try{ie().appendFileSync(o,e)}catch{}else d().append(o,e)}function l(n){try{return(typeof n==="function"?n():n)??{}}catch{return{diagnostics_payload_failed:!0}}}function s(n,t,i){let r={timestamp:new Date().toISOString(),level:n,event:t,data:i};return _(r)+`
`}function rPe(){return d().flush()}function m(){return a.CLAUDE_CODE_DIAGNOSTICS_FILE}async function Fut(n,t,i){let r=Date.now();J("info",`${n}_started`);try{let o=await t(),e=i?i(o):{};return J("info",`${n}_completed`,{duration_ms:Date.now()-r,...e}),o}catch(o){throw J("error",`${n}_failed`,{duration_ms:Date.now()-r}),o}}
export{J,rPe,Fut};
