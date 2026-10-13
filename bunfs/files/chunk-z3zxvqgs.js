// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{K}from"/$bunfs/root/chunk-ctt36bn8.js";import{tCo}from"/$bunfs/root/chunk-x47nahfr.js";import{Vde}from"/$bunfs/root/chunk-0ycjphb5.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function n1r(){let e=tCo();if(!e)return"unset";if(!t.test(e))return"malformed";return Vde()?"ignored":"used"}function o(){return n1r()==="used"?tCo():void 0}function r1r(){let e=o();return e===void 0?{key:K(),fromHost:!1}:{key:e,fromHost:!0}}function WBt(){return r1r().key}
export{n1r,r1r,WBt};
