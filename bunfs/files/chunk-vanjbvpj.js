// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{K,Lg}from"/$bunfs/root/chunk-ctt36bn8.js";import{b,d}from"/$bunfs/root/chunk-wkmq9ht0.js";import{i}from"/$bunfs/root/chunk-kgp7t7yx.js";import{f}from"/$bunfs/root/chunk-04d4ftnx.js";import{LXt,$Q,NXt}from"/$bunfs/root/chunk-0g49c63m.js";function uUr(s,n,a){let e=LXt(s),r=e!==null?NXt():null;if(r!==null)f("goal_set",r.code,{origin:d("restored")});let t;if(e===null||r!==null){if(n((o)=>(t=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),t!==void 0)$Q(t,"resume_swap");return}if(a.add(K(),"Stop","",{type:"prompt",prompt:e}),n((o)=>(t=o.activeGoal,{...o,activeGoal:{condition:e,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:Lg()}})),t!==void 0)$Q(t,"resume_swap");i("tengu_goal_restored_on_resume",{promptLength:e.length}),i("tengu_stop_hook_added",{promptLength:e.length,via:b("goal"),origin:d("restored")})}
export{uUr};
