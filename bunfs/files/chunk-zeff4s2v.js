// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{eo}from"/$bunfs/root/chunk-ctt36bn8.js";import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{Mn,kr,Nt,k}from"/$bunfs/root/chunk-0ycjphb5.js";import{ite}from"/$bunfs/root/chunk-8y1m7sq5.js";import{qwe,Vft,_fe}from"/$bunfs/root/chunk-5ghn2enc.js";import{Qin,Zin}from"/$bunfs/root/chunk-tmrtnnjz.js";import{e}from"/$bunfs/root/chunk-vybw69ke.js";import{NQe,z1t,bme}from"/$bunfs/root/chunk-c3rtkdth.js";import{o,u,Wr,A}from"/$bunfs/root/chunk-smx21d0k.js";function a(){return o().regex(/^\P{Cc}*$/u)}var h=p(()=>Wr("mode",[u({mode:A("one_step")}),u({mode:A("confirm"),title:a().optional(),body:a().optional(),note:a().optional(),send:a().optional(),cancel:a().optional()})]));function ocn(){let i=k("tengu_tidy_lemon",null);if(i===null||i===void 0)return null;let r=h().safeParse(i);return r.success?r.data:null}async function Y9e(i,r){let n=ite(i);if(z1t())return e(Zin,{onDone:n});let t=await bme({openInBrowser:!0},r.credentials);if(t.type==="message")return n(t.value),null;if(t.type==="confirm-admin-request"){if(Nt())return n(NQe),null;return e(Qin,{extraUsage:t.extraUsage,flag:ocn(),wouldTakeAnswer:()=>!0,onDone:n})}let l=kr();if(l==="team"||l==="enterprise")return n(t.opened?`Opened ${t.url} in your browser to manage usage credits for your organization.`:`Visit ${t.url} to manage usage credits for your organization.`),null;if(!t.opened)return n(`Visit ${t.url} to manage usage credits.`),null;let s=Mn(),g=s&&{accountUuid:s.accountUuid,organizationUuid:s.organizationUuid},c=eo();return e(_fe,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(m,y,d)=>{let f=await qwe(r,m,{setAppState:d,previousAccount:g,previousGatewayAuth:c});n(...Vft(r,m,f))}})}
export{ocn,Y9e};
