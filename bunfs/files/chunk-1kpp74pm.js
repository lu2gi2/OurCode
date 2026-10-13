// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{sM}from"/$bunfs/root/chunk-g0e9c50d.js";import{lt}from"/$bunfs/root/chunk-ctt36bn8.js";var d=["take_in"];class r{visitors=new Map}var l=new lt(()=>new r);function a(o){try{return o.pending()===!0}catch{return!1}}function tFo(o){let e=l.peek(o)?.visitors;return e!==void 0&&[...e.values()].some(a)}async function nFo(o,e){let n=l.peek(o)?.visitors;if(n===void 0)return;let p=(async()=>{for(let s of d){let i=n.get(s);if(i!==void 0&&!sM(e)&&a(i))try{await i.visit(e)}catch{}}})();if(sM(e))return;let t=()=>{},c=new Promise((s)=>{t=()=>s()});e.addEventListener("abort",t,{once:!0});try{await Promise.race([p,c])}finally{e.removeEventListener("abort",t)}}
export{tFo,nFo};
