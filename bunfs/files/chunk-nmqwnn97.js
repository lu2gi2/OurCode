// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{lt}from"/$bunfs/root/chunk-ctt36bn8.js";import{CLn}from"/$bunfs/root/chunk-4r6b8efh.js";var t=new lt(()=>({byToolUse:new Map}));function i1r(n,e,i){t.of(n).byToolUse.set(e,i),CLn(n,e,()=>{Hmn(n,e)})}function Hmn(n,e){t.peek(n)?.byToolUse.delete(e)}function P1s(n,e){return e!==void 0&&t.peek(n)?.byToolUse.has(e)===!0}function a1r(n,e){if(e===void 0)return;let i=t.peek(n)?.byToolUse.get(e);return Hmn(n,e),i}
export{i1r,Hmn,P1s,a1r};
