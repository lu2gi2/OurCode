// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ge}from"/$bunfs/root/chunk-jtpfgrzr.js";import{mr}from"/$bunfs/root/chunk-6kc68p18.js";import{iWn,Lue,Tz,Cdt,dRs,uRs}from"/$bunfs/root/chunk-vpp1psvz.js";import{execFile as c}from"child_process";var l=1e4,Ewo=250,o=null,u;function D2s(){return u===!0}function L2s(){return Cdt().lastKnown}function N2s(n){Cdt().lastKnown=n}function s(n){return new Promise((e)=>{try{c("security",["find-generic-password","-a",Tz(),"-w","-s",n],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let a=Boolean(t&&"killed"in t&&t.killed);e(a?null:{stdout:t?null:i?.trim()||null})})}catch{e(null)}})}function kwo(){let n=mr();if(o||n)return;let e=Cdt(),t=e.generation;return}async function Etn(n){if(!o)return;await(n===void 0?o:Ge(o,n))}function wTr(){Cdt().legacyApiKeyPrefetch=null}
export{Ewo,D2s,L2s,N2s,kwo,Etn,wTr};
