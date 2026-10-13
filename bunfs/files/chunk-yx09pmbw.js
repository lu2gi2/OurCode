// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{V}from"/$bunfs/root/chunk-zby5bms5.js";import{iEs,V_,Dt}from"/$bunfs/root/chunk-0ycjphb5.js";import{KO}from"/$bunfs/root/chunk-kxnwft6q.js";import{ql}from"/$bunfs/root/chunk-snyys9as.js";import{xKt,aDe}from"/$bunfs/root/chunk-kasbfbhj.js";import{P,Z,gh,N}from"/$bunfs/root/chunk-j9ep7722.js";N();function t(){let[o,e]=gh((s)=>s+1,0);return P(()=>iEs(e),[]),o}function q4n(o,e){return xKt(o)??xKt(e)??V_()}function _U(o){return Dt(q4n(o.mainLoopModelForSession,o.mainLoopModel))}function Rfe(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=KO(),i=t(),r=ql();return Z(()=>aDe(e,o),[e,o,s,r,i])}function jcn(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=KO(),i=t(),r=ql();return Z(()=>q4n(e,o),[e,o,s,r,i])}function lu(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=KO(),i=t(),r=ql();return Z(()=>_U({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,s,r,i])}
export{q4n,_U,Rfe,jcn,lu};
