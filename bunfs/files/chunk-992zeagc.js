// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Op}from"/$bunfs/root/chunk-ctt36bn8.js";import{Mt}from"/$bunfs/root/chunk-7mawjt4q.js";import{TP}from"/$bunfs/root/chunk-gc7ea4xt.js";import{Nt,k}from"/$bunfs/root/chunk-0ycjphb5.js";function YWt(){return TP("autoContinueAtUsageLimit")[0]}function abn(e){return YWt()??e==="absent"}var u="tengu_marble_heron";function DQn(){let e=n();return o(e)?e:{}}function cMe(){let e=n();return r(o(e)?e.enabled:e)}function XWt(){return Op()&&!Nt()&&!Mt()}function t4o(){return XWt()&&cMe()}function lbn(){return r(DQn().autoArm)}function n(){return k(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{YWt,abn,DQn,cMe,XWt,t4o,lbn};
