// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{mt}from"/$bunfs/root/chunk-63xa24b4.js";import{_}from"/$bunfs/root/chunk-bd805sh6.js";import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{Hf,M,u,U,A}from"/$bunfs/root/chunk-smx21d0k.js";var t=1,f=65536,r=p(()=>Hf().min(0).default(0)),m=p(()=>u({version:Hf()})),n=p(()=>u({version:A(t),generation:Hf().min(1),appliedBeforeFirstAsk:M(),outcome:U(["applied","partial"]),filesApplied:r(),filesRefused:r(),settingsWritten:M().default(!1),replacedForeign:r(),writtenAtMs:Hf().min(0)}));function cVr(o){let e=n().safeParse({...o,version:t});if(!e.success)throw Error("home ready row is off-schema");return Buffer.from(_(e.data))}function gSn(o){if(o.length>f)return{ok:!1,reason:"oversize"};let e=mt(o.toString("utf8"),!1),s=m().safeParse(e);if(s.success&&s.data.version!==t)return{ok:!1,reason:"unsupported_version"};let a=n().safeParse(e);if(!a.success)return{ok:!1,reason:"malformed"};let{version:l,...i}=a.data;return{ok:!0,ready:i}}
export{cVr,gSn};
