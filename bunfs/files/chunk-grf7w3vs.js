// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{l}from"/$bunfs/root/chunk-m1rt7wpr.js";import{JOt}from"/$bunfs/root/chunk-chd251pa.js";import{E1,vxe}from"/$bunfs/root/chunk-381737m9.js";import{Mr}from"/$bunfs/root/chunk-cj4xndke.js";var k$r={};Mr(k$r,{default:()=>k$r,endsInARowOf:()=>NHs,unsettledBy:()=>W3n,workerEndingOf:()=>$Hs});function NHs(e){let n=Number(e);return Number.isSafeInteger(n)&&n>0?n:0}var W3n=(e)=>({reason:`Error: ${l(e)}`,kind:e instanceof JOt?"passing":"lasting"});var o=5,d=`It did not pass in ${o} tries`,m="it is held for good, or refused to this process",t="Start the daemon again once this is mended.",p=`${d}: ${m}. ${t}`;function $Hs(e,n){let r=e.kind==="passing",s=r&&n+1<o,i=r?p:t;return s?{code:vxe,said:`${e.reason}
`}:{code:E1,said:`${e.reason}
${i}
`}}export{NHs,W3n,$Hs,k$r};
