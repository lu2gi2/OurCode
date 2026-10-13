// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{On}from"/$bunfs/root/chunk-xgw72tt1.js";import{OO,zv,Ph,Wy}from"/$bunfs/root/chunk-3fj60qgx.js";import{$e}from"/$bunfs/root/chunk-se8vehhp.js";import{Mg,wCr}from"/$bunfs/root/chunk-2d9a83dh.js";import{_T}from"/$bunfs/root/chunk-4m0tjfqq.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:OO(e)}async function d(e,t,{isRootResolved:n=!1}={}){return n?On(e):Wy(e,_T(t))}async function XWo(e,t,n,i){return a(Ph(await d(e,n,i)),X8n(t))}async function JWo(e,t,n,i){let o=await d(e,n,i),p=a(Ph(o),X8n(t)),r=zv(o),s=n===void 0?void 0:jBr(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function jBr(e,t){let n=$e.dirSyncRecord(e,c(t));return Mg(n)===void 0?n:void 0}function X8n(e){return`${c(e)}${wCr}`}
export{XWo,JWo,jBr,X8n};
