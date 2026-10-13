// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ea}from"/$bunfs/root/chunk-0ycjphb5.js";import{W}from"/$bunfs/root/chunk-m1rt7wpr.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{c}from"/$bunfs/root/chunk-etbngzss.js";import{Aw}from"/$bunfs/root/chunk-k8dhpbv8.js";import{CKt,RKt,xAn}from"/$bunfs/root/chunk-kasbfbhj.js";import{q4}from"/$bunfs/root/chunk-tn496ms6.js";import{PU}from"/$bunfs/root/chunk-ggpgtemh.js";import{nst}from"/$bunfs/root/chunk-eck15hm6.js";var g=3000;function dLr(e={}){let r=e.firstFlagFetchWaitMs??g,o=!1,i;return{get ready(){return o},whenReady:()=>i??=f(r).then(()=>{o=!0,d()})}}async function f(e){let r=performance.now();try{q4()}catch(s){c(W(s))}let o=!1,[i,a,m,l]=await Promise.all([n("the plugin-hook registration pass",async()=>{await RKt()}),n("the remote managed-settings load",PU),n("the policy-limits load",Aw),n("the first flag fetch",async()=>{let{timedOut:s}=await nst({initialize:Ea,budgetMs:e});o=!s})]);t(`[remote-tools] ready to judge calls after ${Math.round(performance.now()-r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${l}ms for the first flag fetch (${o?"landed":"not heard in time"})`)}async function n(e,r){let o=performance.now();try{await r()}catch(i){t(`[remote-tools] waiting for ${e} failed; serving goes on without it`,{level:"error"}),c(W(i))}return Math.round(performance.now()-o)}async function d(){try{let e=await CKt(!1)??await xAn();if(e!==void 0)t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`,{level:"error"})}catch(e){c(W(e))}}
export{dLr};
