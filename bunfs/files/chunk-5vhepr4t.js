// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{lt}from"/$bunfs/root/chunk-ctt36bn8.js";import{W}from"/$bunfs/root/chunk-m1rt7wpr.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{c}from"/$bunfs/root/chunk-etbngzss.js";import{cH,C1n}from"/$bunfs/root/chunk-6dwnw6av.js";class n{active=void 0;transportPersists=void 0;hostedWorker=!1;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames,this.hostedWorker=r?.isHostedWorker===!0}remoteBridgeLive=null;bridgeMayBeLive(){return this.remoteBridgeLive===null||this.remoteBridgeLive()}markLocalTransport(){this.transportPersists=!1}}var oS=new lt(()=>new n);function Jp(r){return C1n({hostedWorker:xpr(r),transportPersists:oS.of(r).transportPersists})}function las(r){return cH()&&oS.of(r).transportPersists===!0}function xpr(r){return r.host.launchOptions.diskless()||oS.of(r).hostedWorker}function lo(r){return Jp(r)||oS.of(r).bridgeMayBeLive()}function Iro(r,e){return Jp(r)?Oro(e):e}function Oro(r){return r.map((e)=>({name:e.name,status:e.status}))}function Mro(r,e){return Jp(r)?[]:e}function Ppr(r,e,s,i="last"){try{if(!Jp(r))return i==="first"?[e,...s]:[...s,e];for(let o of s)t(`error_during_execution detail: ${o}`,{level:"error"});return[e]}catch(o){return c(W(o)),[e]}}function sQ(r,e,s){return Jp(r)?s:e}
export{oS,Jp,las,xpr,lo,Iro,Oro,Mro,Ppr,sQ};
