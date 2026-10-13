// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Yy}from"/$bunfs/root/chunk-24agvrd9.js";import{ge}from"/$bunfs/root/chunk-sawpz2mr.js";import{Kd}from"/$bunfs/root/chunk-yp41169e.js";function Mm(r){console.error(ge.red(r))}function an(r,e="cli_error"){if(r)Mm(r);Yy(e),process.exit(1);return}function QL(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}function XJt(r){process.exit(r);return}async function Yu(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function HE(r){process.stderr.write(ge.yellow(Kd(r))+`
`)}async function nF(){try{let{flushAnalyticsSinks:r}=await import("/$bunfs/root/chunk-88x2y7v3.js");await r()}catch{}}async function xo(r){await nF(),process.exit(r);return}async function Vo(r){if(r)Mm(r);return await nF(),an()}async function DE(r){if(r)process.stdout.write(r+`
`);return await nF(),QL()}
export{Mm,an,QL,XJt,Yu,HE,nF,xo,Vo,DE};
