// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
var r,o;function n(){if(r!==void 0&&o==="external")return r;return o="external",r=[],r}function b0o(){return n().map((e)=>e.id)}function S0o(e){for(let t of n()){let a=t.digests.find((i)=>i.sha256===e);if(a)return{template:t,label:a.label}}return}function G9e(e){return n().find((t)=>t.id===e)}function tcn(e){return e.event==="PreToolUse"}
export{b0o,S0o,G9e,tcn};
