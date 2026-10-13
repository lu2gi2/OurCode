// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Bn,_m}from"/$bunfs/root/chunk-xgw72tt1.js";import{eG}from"/$bunfs/root/chunk-qch5xj2a.js";import{posix as a}from"path";var UOn=String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`,c=new RegExp(`^[${UOn}]+`,"u");function boo(n){return n.replace(c,"")}function nfr(n,r=woo(n)){return Bn(n)||_ot(n)||eG.test(r[0])||r.map(boo).some((e)=>Bn(e)||_ot(e))}var u=/^\.\.\//;function _ot(n){return _m(n)||_m(a.normalize(n).replace(u,"/"))||l(n)&&_m("/"+n)}function l(n){let r=a.normalize(n);return r===".."||r.startsWith("../")}function Soo(n){let r=n.slice(7);return nfr(r)||nfr(r.slice(1))}var i=/(?:%[0-9A-Fa-f]{2}){1,512}/g,f=/^%[0-9A-Fa-f]{2}/;function woo(n){if(!n.includes("%"))return[n,n];let r=new TextDecoder("utf-8",{fatal:!1,ignoreBOM:!0});return[n.replace(i,(e,t)=>{let o=t+e.length;return r.decode(s(e),{stream:f.test(n.slice(o,o+3))})}),n.replace(i,(e)=>Array.from(s(e),(t)=>String.fromCharCode(t)).join(""))]}function s(n){return Uint8Array.from(n.slice(1).split("%"),(r)=>parseInt(r,16))}
export{UOn,boo,nfr,_ot,Soo,woo};
