// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ne}from"/$bunfs/root/chunk-j27d47mr.js";import{FR,c8e}from"/$bunfs/root/chunk-craerjpn.js";import{Ge}from"/$bunfs/root/chunk-jtpfgrzr.js";import{Jt}from"/$bunfs/root/chunk-dn762950.js";import{T0}from"/$bunfs/root/chunk-srmqtve7.js";var i=1000;function ERr(e=process.argv.slice(2)){return c8e(e)&&FR("--output-format",e)==="stream-json"}function nBe(){return Ne(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)}function kRr(e,t=process.argv.slice(2)){let r=FR("--session-id",t);return(FR("--sdk-url",t)===void 0?Jt(r):r)||e}function mDt({sessionId:e,message:t,reason:r,resultIndex:n=0}){return{...T0(e,[t]),...r!==void 0&&{startup_failure_reason:r},...n!==null&&{result_index:n}}}async function YY(e){if(nBe())await TRr([mDt({...e,sessionId:kRr(e.sessionId)})])}async function TRr(e){let t=process.stdout;if(!ERr()||t.writableEnded||t.destroyed)return!1;let r=e.map((s)=>JSON.stringify(s)+`
`).join(""),n=(s)=>{},o=new Promise((s)=>{n=s});t.once("error",()=>n(!1));try{t.write(r,(s)=>n(!s))}catch{return!1}return await Ge(o,i)??!1}
export{ERr,nBe,kRr,mDt,YY,TRr};
