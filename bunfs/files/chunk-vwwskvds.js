// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{rn}from"/$bunfs/root/chunk-223dyewd.js";import{on}from"/$bunfs/root/chunk-8524cxt8.js";import{le,Rt,N}from"/$bunfs/root/chunk-j9ep7722.js";import{nn}from"/$bunfs/root/chunk-z47a2vff.js";N();function U0(r,o,t=1000,n=0,a){let e=on(),u=()=>rn(Math.max(0,(a??Date.now())-r-n)),l=le((f)=>{if(!o)return()=>{};let i,s=()=>{try{f()}finally{i=e.setTimeout(s,t)}};return i=e.setTimeout(s,t),()=>i()},[o,t,e]);return Rt(l,u,u)}function dj({onClose:r,onBack:o,onKill:t,onEnter:n}){return nn({"confirm:yes":n??r},{context:"Confirmation"}),function(e){if(e.key===" ")e.preventDefault(),r();else if(e.key==="left"&&o)e.preventDefault(),o();else if(e.key==="x"&&!e.ctrl&&!e.meta&&t)e.preventDefault(),t()}}
export{U0,dj};
