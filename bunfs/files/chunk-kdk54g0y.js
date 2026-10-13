// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import"/$bunfs/root/chunk-j27d47mr.js";import"/$bunfs/root/chunk-wkmq9ht0.js";import"/$bunfs/root/chunk-m1rt7wpr.js";import"/$bunfs/root/chunk-jtpfgrzr.js";import"/$bunfs/root/chunk-xgw72tt1.js";import"/$bunfs/root/chunk-6kc68p18.js";import"/$bunfs/root/chunk-s7bhz6qz.js";import"/$bunfs/root/chunk-dp4xqs6t.js";import"/$bunfs/root/chunk-dn762950.js";import"/$bunfs/root/chunk-ctt36bn8.js";import"/$bunfs/root/chunk-fcerdfs3.js";import"/$bunfs/root/chunk-x0qpydt2.js";import"/$bunfs/root/chunk-bd805sh6.js";import"/$bunfs/root/chunk-24agvrd9.js";import"/$bunfs/root/chunk-qch5xj2a.js";import"/$bunfs/root/chunk-etbngzss.js";import"/$bunfs/root/chunk-p9frg3mj.js";import{$a}from"/$bunfs/root/chunk-k3pmdjj0.js";import{hi}from"/$bunfs/root/chunk-vvkk7cgc.js";import{o,oe,T,u,_t,ue}from"/$bunfs/root/chunk-smx21d0k.js";import"/$bunfs/root/chunk-79wfew46.js";var n=p(()=>u({skills:T(_t({frontmatter:ue(o(),oe()).nullish(),uri:o().nullish(),digest:o().nullish()}).catch({})),nextCursor:o().nullish()})),l=p(()=>u({skill:oe().optional(),resultType:oe().optional(),ttlMs:oe().optional(),cacheScope:oe().optional(),_meta:oe().optional()}));function m(e,t){return hi(e.client).request({method:"skills/list",params:t===void 0?{}:{cursor:t}},n(),{timeout:$a()})}function a(e,t){return hi(e.client).request({method:"skills/get",params:{uri:t}},l(),{timeout:$a()})}export{a as getMcpSkill,m as listMcpSkillPage};
