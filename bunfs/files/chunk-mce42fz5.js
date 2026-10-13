// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{B1r}from"/$bunfs/root/chunk-y10by25k.js";import{dlt}from"/$bunfs/root/chunk-zdj680mx.js";function thn(i){let{parse:s}=dlt(),r=B1r(),t=!1;try{let a=s(i,{ecmaVersion:"latest",sourceType:"module",allowAwaitOutsideFunction:!0,allowReturnOutsideFunction:!0});r.simple(a,{MemberExpression(e){if(e.computed||e.object.type!=="Identifier"||e.property.type!=="Identifier")return;let n=e.object.name,o=e.property.name;if(n==="Date"&&o==="now"||n==="Math"&&o==="random")t=!0},NewExpression(e){if(e.callee.type==="Identifier"&&e.callee.name==="Date"&&e.arguments.length===0)t=!0}})}catch{return!1}return t}
export{thn};
