// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Vl}from"/$bunfs/root/chunk-ctt36bn8.js";import{df}from"/$bunfs/root/chunk-7mawjt4q.js";import{nAo,MCr}from"/$bunfs/root/chunk-2d9a83dh.js";import{c}from"/$bunfs/root/chunk-etbngzss.js";import{KTs}from"/$bunfs/root/chunk-6dwnw6av.js";import{D}from"/$bunfs/root/chunk-tb7m3r21.js";async function Z_r(r){let e=D([Vl(),df()]).filter((t)=>t!==null);for(let t of e)try{let o=await nAo(r,t);if(o!==void 0){let i=await KTs(t,o.gitRoot,r);if(typeof i==="string")MCr(i,o.gitRoot,o.canonicalRoot)}}catch(o){c(o)}}
export{Z_r};
