// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{gf}from"/$bunfs/root/chunk-bd805sh6.js";import{Lt}from"/$bunfs/root/chunk-qch5xj2a.js";import{O5e}from"/$bunfs/root/chunk-2d9a83dh.js";import{Joe}from"/$bunfs/root/chunk-tw5t5h13.js";var Iu="MEMORY.md",iN=200,Roe=25000,cwr=4*Roe,nRe=200,xoe=4096;function glt(t){let r=t.trim();return{trimmed:r,lineCount:Lt(r,`
`)+1,byteCount:r.length}}function nO(t){return t.normalize("NFC").toLowerCase()}function KW(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var T$e="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",dwr="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function pF(t){let r="";for(let n of O5e(gf(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function Poe(t){return Joe(s(t))}function Rws(t){return hlt(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function l7t(t){return Poe(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var zgo=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function hlt(t){let r=t.codePointAt(0);if(zgo.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(hlt(n))continue;r+=n}return r}
export{Iu,iN,Roe,cwr,nRe,xoe,glt,nO,KW,T$e,dwr,pF,Poe,Rws,l7t,zgo,hlt};
