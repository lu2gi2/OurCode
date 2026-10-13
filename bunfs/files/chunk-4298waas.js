// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Im,j4}from"/$bunfs/root/chunk-9fvky64k.js";import{Gu}from"/$bunfs/root/chunk-jfcrjtbk.js";import{tds}from"/$bunfs/root/chunk-j0a4vbkp.js";import{basename as r,sep as n}from"path";function EYo(i){let s=Gu(),{listedOwnerships:t}=s;t.clear(),s.listedSkillsAnswer="none_yet";for(let e of i){let l;try{l=Im(r(j4(e.name,n)))}catch{continue}if(!t.has(l))t.set(l,{listedName:e.name,ownership:tds(e),savedFromAChat:typeof e.backing_plugin_id==="string"})}s.listedSkillsAnswer="a_list"}function FVr(i){return Gu().listedOwnerships.get(Im(i))}
export{EYo,FVr};
