// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{lt,B,CS}from"/$bunfs/root/chunk-ctt36bn8.js";import{s8,Vde}from"/$bunfs/root/chunk-0ycjphb5.js";import{L1}from"/$bunfs/root/chunk-98pm569t.js";class r{#e;get(){return this.#e}replace(e){this.#e=e}}var u=new lt(()=>new r);function Ghr(){return u.peek(B())?.get()}function tLn(){return(s8()&&!Vde()?void 0:Ghr())??(CS()?"UTC":void 0)}function rdo(){let e=new Date,n=Ghr();if(n!==void 0){let t=new Map(L1("en-US",{timeZone:n,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map((o)=>[o.type,o.value]));return`${t.get("year")}-${t.get("month")}-${t.get("day")}`}let i=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),d=String(e.getDate()).padStart(2,"0");return`${i}-${a}-${d}`}class s{#e;get(){return this.#e??=rdo(),this.#e}clear(){this.#e=void 0}get captured(){return this.#e!==void 0}}var hXt=new lt(()=>new s);function odo(e){return hXt.of(e).get()}function pms(){return odo(B())}function fms(){return new Date().toLocaleString("en-US",{month:"long",year:"numeric"})}
export{Ghr,tLn,rdo,hXt,odo,pms,fms};
