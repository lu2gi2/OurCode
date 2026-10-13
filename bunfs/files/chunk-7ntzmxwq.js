// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{VPo}from"/$bunfs/root/chunk-ctt36bn8.js";import{z}from"/$bunfs/root/chunk-m1rt7wpr.js";import{St,_,X}from"/$bunfs/root/chunk-bd805sh6.js";import{c}from"/$bunfs/root/chunk-etbngzss.js";import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{Ba}from"/$bunfs/root/chunk-6g4165br.js";import{bd,iO}from"/$bunfs/root/chunk-0ycjphb5.js";import{cl}from"/$bunfs/root/chunk-ghmnmzfd.js";import{JIe}from"/$bunfs/root/chunk-qt3j4tgz.js";import{Ds}from"/$bunfs/root/chunk-kasbfbhj.js";import{o,E,De}from"/$bunfs/root/chunk-smx21d0k.js";import{rm as a}from"fs/promises";import{join as t}from"path";var s=".pending-wakeup",m=1024,u=p(()=>De({toolUseId:o().min(1).max(256),scheduledFor:E().int().positive(),chainStartedAt:E().int().nonnegative()}));async function ENt(i,r){let e=t(i,s);try{if(r===void 0){if(await a(e,{force:!0}).then(()=>!0,(d)=>(cl(d),!1)))return}await JIe(e,r===void 0?"":_(r))}catch(n){if(!z(n))cl(n)}}async function $0o(i){let r=await Ba(t(i,s),m);if(!r)return null;try{let e=u().safeParse(X(r));return e.success?e.data:null}catch{return null}}class wHr{#o=Promise.resolve();#r=0;#e;#i;constructor(){this.#i=VPo(this.#n)}#n=(i)=>{try{if(!bd())return;let r=iO();if(r===void 0)return;if(i!==void 0&&Ds())return;this.#e??=St(()=>this.#o);let e=++this.#r;this.#o=this.#o.then(()=>e===this.#r?ENt(r,i):void 0)}catch(r){c(r)}};flush(){return this.#o}dispose(){this.#i(),this.#o.then(()=>this.#e?.())}}
export{ENt,$0o,wHr};
