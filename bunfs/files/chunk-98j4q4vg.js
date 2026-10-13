// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{Dzr,e_n}from"/$bunfs/root/chunk-xff00cqh.js";import{m2e,iQo}from"/$bunfs/root/chunk-kasbfbhj.js";import{o,T,u,A}from"/$bunfs/root/chunk-smx21d0k.js";var n=1,a=64,s="offer",t=p(()=>o().regex(m2e).refine(iQo)),c=p(()=>u({v:A(n),head:t(),branch:o().min(1).max(Dzr).refine(e_n),ancestors:T(t()).max(a)}));function qDo(e){let r=c().safeParse(e[s]);return r.success?r.data:null}
export{qDo};
