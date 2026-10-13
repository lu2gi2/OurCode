// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{d}from"/$bunfs/root/chunk-wkmq9ht0.js";import{i,js}from"/$bunfs/root/chunk-kgp7t7yx.js";import{OF,dC}from"/$bunfs/root/chunk-pp3y3t61.js";import{_Se}from"/$bunfs/root/chunk-wtrd0hw3.js";var r="tengu_org_policy_denied";function l(o,n){let e=dC(o);if(e===null||e==="unregistered")return null;return{org_policy_key:d(o),org_policy_deny_kind:d(e),org_policy_taint_named:_Se(OF()).length>0,surface:d(n)}}function BA(o,n){let e=l(o,n);if(e)i(r,e)}async function CW(o,n){let e=l(o,n);if(e)await js(r,e)}
export{BA,CW};
