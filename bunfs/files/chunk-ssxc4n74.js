// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{K}from"/$bunfs/root/chunk-ctt36bn8.js";import{Oc}from"/$bunfs/root/chunk-wrn3nvp5.js";import{UL,$ce}from"/$bunfs/root/chunk-0xbdwcqr.js";import{Sc}from"/$bunfs/root/chunk-18a8x2hz.js";import{nm,t3t}from"/$bunfs/root/chunk-ghmnmzfd.js";import{U_,uLe}from"/$bunfs/root/chunk-gc4z3rgw.js";import{Vu}from"/$bunfs/root/chunk-y9c4grt0.js";import{L4t}from"/$bunfs/root/chunk-kasbfbhj.js";import{Uze}from"/$bunfs/root/chunk-n1mbcqx4.js";var c=["default","reset","none","gray","grey"];async function Djs(n,e,o){return n(await S7n(o,e),{display:"system"}),null}async function S7n(n,e){if(Oc())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let o=n?.trim()??"",t=o===""?U_[Math.floor(Math.random()*U_.length)]:o.toLowerCase(),r=c.includes(t);if(!r&&!U_.includes(t)){let s=U_.join(", ");return`Invalid color "${t}". Available colors: ${s}, default`}let d=K(),m=Vu(),i=r?"default":t,l=r?void 0:t;await L4t(d,i,m,e.storageV5),e.setAppState((s)=>Uze(s,{color:l}));let a=e.getAppState(),g=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return t3t(nm(),uLe({userOverride:l,agentDefinitionColor:g?.color}),e.storageV5),p(i,e.credentials),r?"Session color reset to default":`Session color set to: ${t}`}function p(n,e){let o=Sc()?.bridgeSessionId;if(!o)return;let t=UL();import("/$bunfs/root/chunk-sg5zsxsf.js").then(({updateBridgeSessionColorTag:r})=>r(o,n,U_,{baseUrl:$ce(),getAccessToken:t?()=>t:void 0,credentials:e}).catch(()=>{}))}
export{Djs,S7n};
