// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{eo}from"/$bunfs/root/chunk-ctt36bn8.js";import{c}from"/$bunfs/root/chunk-etbngzss.js";import{XYe,bn,wt,Mn,Kbe}from"/$bunfs/root/chunk-0ycjphb5.js";import{ite}from"/$bunfs/root/chunk-8y1m7sq5.js";import{qwe,Vft,_fe}from"/$bunfs/root/chunk-5ghn2enc.js";import{e}from"/$bunfs/root/chunk-vybw69ke.js";import{Fs}from"/$bunfs/root/chunk-cg7f88dh.js";function l(a){return`https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${a}`}async function VUs(a,i){return C1e(a,i,"upgrade_command")}async function C1e(a,i,m){let u=ite(a),s=l(m);try{if(wt()){let o=bn(),n=!1;if(o?.subscriptionType&&o?.rateLimitTier)n=o.subscriptionType==="max"&&o.rateLimitTier==="default_claude_max_20x";else if(o?.accessToken){let t=await XYe(o.accessToken);n=t?.organization?.organization_type==="claude_max"&&t?.organization?.rate_limit_tier==="default_claude_max_20x"}if(n){let t=Kbe();return setTimeout(u,0,t?`You\u2019re already on the highest Max subscription plan. For additional usage, run ${t}.`:"You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."),null}}await Fs(s);let r=Mn(),p=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},d=eo();return e(_fe,{startingMessage:"Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",onDone:async(o,n,t)=>{let g=await qwe(i,o,{setAppState:t,previousAccount:p,previousGatewayAuth:d});u(...Vft(i,o,g))}})}catch(r){c(r),setTimeout(u,0,`Failed to open browser. Please visit ${s} to upgrade.`)}return null}
export{VUs,C1e};
