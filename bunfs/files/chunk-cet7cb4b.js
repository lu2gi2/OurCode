// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Oe}from"/$bunfs/root/chunk-j27d47mr.js";import{q,UP,B}from"/$bunfs/root/chunk-ctt36bn8.js";var r=new q(()=>Oe());function i(){return r.of(B().host)}var P0e=UP(i);function LIn(e){return{setMode(t){P0e.emit({kind:"agent-mode",agentId:e,mode:t})},setRetryStatus(t){P0e.emit({kind:"agent-retry-status",agentId:e,retryStatus:t})},setTurnEffort(t,n=null){P0e.emit({kind:"agent-turn-effort",agentId:e,turnEffort:t,turnModel:n})}}}var NIn="Running SessionStart hooks\u2026",I0e={setSpinnerMessage(e){P0e.emit({kind:"main-message",message:e})},setSpinnerColors(e,t){P0e.emit({kind:"main-colors",color:e,shimmerColor:t})}};
export{P0e,LIn,NIn,I0e};
