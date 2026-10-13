// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{$u}from"/$bunfs/root/chunk-dp4xqs6t.js";import{gTo}from"/$bunfs/root/chunk-55x53sfe.js";function uao(n,e){let o=$u()?gTo(n):void 0;if(!o)return;let{tls:s,...t}=e??{},d=e?.proxy===void 0&&e?.unix===void 0?t:e;return(r)=>o.fetch(r,d)}function ugr(n,e,o){let s=e.proxy===void 0&&o?.()?uao("ccr",e):void 0;return s?s(n):fetch(n,e)}
export{uao,ugr};
