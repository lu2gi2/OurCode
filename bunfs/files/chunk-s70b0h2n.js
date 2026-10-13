// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,B}from"/$bunfs/root/chunk-ctt36bn8.js";import{E8}from"/$bunfs/root/chunk-0ycjphb5.js";import{Mc}from"/$bunfs/root/chunk-xb9cceab.js";var d=new q(()=>({degraded:!1}));function t(){return d.of(B().host)}function Rte(n,r){if(n!==Mc)return;let e=t();if(r===void 0){e.degraded=!1;return}let o=E8(r);if(o==="downstream_unreachable")e.degraded=!0;else if(o==="downstream_error")e.degraded=!1}function i5o(){return t().degraded}
export{Rte,i5o};
