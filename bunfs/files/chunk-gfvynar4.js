// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{TT}from"/$bunfs/root/chunk-2xjnwr5d.js";var B1t="usage limit",lhn=` (after ${B1t})`;function ejr(e,t=!1){let r=TT(e,t);if(r===void 0)return;return/^\d/.test(r)?`resets at ${r}`:`resets ${r}`}function n(e){let t=ejr(e);return t===void 0?B1t:`${B1t} ${t}`}function gGo(e){return`Paused \xB7 ${n(e)}`}function tjr(e){return[["paused",n(e)],["paused",B1t],["paused"]]}
export{B1t,lhn,ejr,gGo,tjr};
