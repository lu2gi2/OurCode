// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,cs,LN,Mpt}from"/$bunfs/root/chunk-ctt36bn8.js";import{$o,t}from"/$bunfs/root/chunk-bd805sh6.js";import{GFe,vP}from"/$bunfs/root/chunk-d2sd20y7.js";import{fPe}from"/$bunfs/root/chunk-t6f6b9d8.js";import{ru}from"/$bunfs/root/chunk-m6z3m7rx.js";import{closeSync as f,openSync as p}from"fs";import{devNull as a}from"os";class u{line}var l=new q(()=>new u);function NMo(e=0){{if(!process.argv.includes("--session-tunnel")||!ru())return;fPe((m)=>t(`[session tunnel] ${m}`,{level:"warn"}));let o=GFe(e,"the session tunnel's line of JSON")??void 0;cs(l).line=o;let s=p(a,"r");if(s!==e)f(s);let n;try{n=$o(o??"null")}catch{n=null}let r=typeof n?.oauth_token==="string"?n.oauth_token.trim():"",i=typeof n?.agent_proxy_token==="string"?n.agent_proxy_token.trim():"";if(r!=="")vP(),LN(r),Mpt("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");return t(`[session tunnel] the line has ${r===""?"no":"an"} OAuth token and ${i===""?"no":"an"} agent proxy token`),i===""?void 0:i}return}function $Mo(){let e=cs(l),o=e.line;return e.line=void 0,o}
export{NMo,$Mo};
