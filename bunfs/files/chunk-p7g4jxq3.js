// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Jt}from"/$bunfs/root/chunk-dn762950.js";import{K}from"/$bunfs/root/chunk-ctt36bn8.js";import{v,jt}from"/$bunfs/root/chunk-m1rt7wpr.js";import{ie}from"/$bunfs/root/chunk-bd805sh6.js";import{HP}from"/$bunfs/root/chunk-n1z3wrvm.js";import{tc}from"/$bunfs/root/chunk-zwxj12s4.js";import{Fb}from"/$bunfs/root/chunk-2d9a83dh.js";import{lstat as u,readdir as w,rmdir as g,unlink as y}from"fs/promises";import{dirname as h,join as l}from"path";var qVr="images",KVr=/^(\d+)\.[a-z]+$/;async function AYo(a,p){let e={removed:0,errors:0},r=ie(),n,i;try{n=await r.realpath(p??tc()),i=await r.readdir(n)}catch{return e}let o=K();for(let t of i){if(!t.isDirectory())continue;let s=l(n,t.name),c;try{c=await r.readdir(s)}catch{continue}for(let m of c){if(!m.isDirectory()||m.name===o||Jt(m.name)===null)continue;let d=l(s,m.name,qVr);try{let f=await r.lstat(d);if(!f.isDirectory()||f.mtime>=a)continue;if(await I(d,a))e.removed++}catch(f){if(!jt(f))e.errors++}}}return e}async function I(a,p){let e=await Fb(a,[a],{leaf:"replace"});try{await e.recheckBeforeWrite();let r=await u(e.ioPath);if(!r.isDirectory()||r.mtime>=p)return!1;let n=l(a,"any"),i=await Fb(n,[n],{leaf:"replace"});try{let o=h(i.ioPath);await i.recheckBeforeWrite();for(let t of await w(o)){let s=t.lastIndexOf(".tmp."),c=s===-1?t:t.slice(0,s);if(!KVr.test(c)||s!==-1&&!HP(t,c))continue;await i.recheckBeforeWrite(),await y(l(o,t)).catch(()=>{})}}finally{await i.close()}await e.recheckBeforeWrite();try{await g(e.ioPath)}catch(o){let t=v(o);if(t==="ENOTEMPTY"||t==="EEXIST")return!1;throw o}return!0}finally{await e.close()}}
export{qVr,KVr,AYo};
