// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{_}from"/$bunfs/root/chunk-bd805sh6.js";import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{Un,_n}from"/$bunfs/root/chunk-6bjtvbt8.js";import{Zi}from"/$bunfs/root/chunk-0ycjphb5.js";import{ht,Xt,Be}from"/$bunfs/root/chunk-6dwnw6av.js";import{rt}from"/$bunfs/root/chunk-xx1j2680.js";import{sr}from"/$bunfs/root/chunk-092xqjkn.js";import{o,E,T,De}from"/$bunfs/root/chunk-smx21d0k.js";import{D}from"/$bunfs/root/chunk-tb7m3r21.js";import{createHash as u}from"crypto";var d9e="anthropic/returnToolOutput",CVn=[2],SMo=4194304;function wIr(){return!0}function Cin(e){return sr(e)&&e.tool_host_interface!==void 0}var d=64;var l=1024,a=1024,c=65536,i=p(()=>T(E().int()).max(d)),y=p(()=>T(o().min(1).max(a)).max(l).refine((e)=>e.reduce((n,t)=>n+t.length,0)<=c)),f=p(()=>De({versions:i(),deny_rules_digest:o().regex(/^[0-9a-f]{64}$/)}));function wMo(e){let n=s(e)?.[d9e];if(n===void 0)return{kind:"absent"};let t=i().safeParse(s(n)?.versions);if(!t.success)return{kind:"malformed"};if(m(t.data).length===0)return{kind:"no_shared_version",versions:t.data};let r=f().safeParse(n);return r.success?{kind:"requested",denyRulesDigest:r.data.deny_rules_digest}:{kind:"malformed"}}function m(e){return CVn.filter((n)=>e.includes(n))}var O={[Be]:[rt,ht],[ht]:[rt],[Xt]:[ht,rt],[Zi]:[ht,rt]},g=D([Be,...Object.values(O).flat()]);function vIr(e){return D(e.map(Un).filter(({toolName:n,ruleContent:t})=>t!==void 0&&g.includes(n)).map(_n)).toSorted()}function EIr(e){return y().safeParse(e).success}function vMo(e){return u("sha256").update(_(e)).digest("hex")}function EMo({tools:e,denyRules:n}){return{versions:[...CVn],tools:[...e],deny_rules:vIr(n)}}function s(e){return sr(e)?e:void 0}
export{d9e,CVn,SMo,wIr,Cin,wMo,vIr,EIr,vMo,EMo};
