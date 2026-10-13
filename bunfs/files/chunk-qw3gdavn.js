// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{K,l0t}from"/$bunfs/root/chunk-ctt36bn8.js";import{b,d}from"/$bunfs/root/chunk-wkmq9ht0.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{Dne,ic,cl,ro,Ra}from"/$bunfs/root/chunk-ghmnmzfd.js";import{i}from"/$bunfs/root/chunk-kgp7t7yx.js";import{g}from"/$bunfs/root/chunk-04d4ftnx.js";import{Nt,uue}from"/$bunfs/root/chunk-0ycjphb5.js";import{Zn}from"/$bunfs/root/chunk-kasbfbhj.js";import{ye}from"/$bunfs/root/chunk-tybndaby.js";function p(){return a.CLAUDE_JOB_DIR}async function Xgn(n,e,s){i("tengu_bg_agent_action",{action:b("stop"),source:d(n),jobSessionId:ye(K())}),l0t(void 0);let t=p();if(Nt()&&t){let r=new Date().toISOString(),o=await ro(t,e);if(o&&!Ra(o))await ic(t,{...o,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:o.firstTerminalAt??r},e).catch(cl);if(uue())process.stdout.write(Dne(s??"Session stopped."))}return g("job_stop_self"),Zn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{Xgn};
