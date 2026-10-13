// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{yA}from"/$bunfs/root/chunk-8524cxt8.js";import{nn,Jq}from"/$bunfs/root/chunk-z47a2vff.js";import{us}from"/$bunfs/root/chunk-w72c4p0f.js";import{le,Z,y,N}from"/$bunfs/root/chunk-j9ep7722.js";import{rk}from"/$bunfs/root/chunk-2kj77ctk.js";N();function Yo(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=Z(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return nn(a,{context:"Global",isActive:e}),o}function Lmt(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:Z(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=yA(),[n,t]=y({pending:!1,keyName:null}),o=Z(()=>r??e,[r,e]),a=rk(),l=us("app:interrupt","Global","Ctrl-C"),p=us("app:exit","Global","Ctrl-D"),d=a&&l?l:"Ctrl-C",m=a&&p?p:"Ctrl-D",u=Jq((s)=>t({pending:s,keyName:d}),o),x=Jq((s)=>t({pending:s,keyName:m}),o),b=le(()=>{if(i?.())return;u()},[u,i]),C=le(()=>{x()},[x]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{Yo,Lmt};
