// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Lu}from"/$bunfs/root/chunk-6bjtvbt8.js";var e="self_hosted_runner_";function NFt(n){return n.startsWith(e)}function SUo(n){return Lu([...n]).some(NFt)}function r(n){return Lu([n]).filter((t)=>!NFt(t)).join(",")}function CNr(n){if(n===void 0)return!1;let t=typeof n==="string"?n:String(n);return Lu([t]).some(NFt)}function wUo(n){let t=n.tools;if(t===void 0)return n;let o=typeof t==="string"?t:String(t);if(!CNr(o))return typeof t==="string"?n:{...n,tools:o};return{...n,tools:r(o)}}
export{NFt,SUo,CNr,wUo};
