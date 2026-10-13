// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import"/$bunfs/root/chunk-dn762950.js";import"/$bunfs/root/chunk-j27d47mr.js";import"/$bunfs/root/chunk-ctt36bn8.js";import"/$bunfs/root/chunk-fcerdfs3.js";import"/$bunfs/root/chunk-wkmq9ht0.js";import"/$bunfs/root/chunk-m1rt7wpr.js";import"/$bunfs/root/chunk-jtpfgrzr.js";import"/$bunfs/root/chunk-xgw72tt1.js";import{c}from"/$bunfs/root/chunk-etbngzss.js";import"/$bunfs/root/chunk-bd805sh6.js";import"/$bunfs/root/chunk-6kc68p18.js";import"/$bunfs/root/chunk-24agvrd9.js";import"/$bunfs/root/chunk-qch5xj2a.js";import{ht}from"/$bunfs/root/chunk-6dwnw6av.js";import{sr}from"/$bunfs/root/chunk-092xqjkn.js";var e="claudecode/editResult",l="1";function i(o,t){return o===ht&&sr(t)&&t[e]===l}async function m(o,t){if(o.isError===!0||t.subagentFrameResult===void 0)return o;try{if(await t.subagentFrameResultHolds?.()===!1)return o}catch(r){return c(r),o}return{...o,_meta:{...o._meta,[e]:t.subagentFrameResult}}}export{i as asksForEditResult,m as withEditResult};
