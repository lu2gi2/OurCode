// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{b,kn}from"/$bunfs/root/chunk-wkmq9ht0.js";function ye(n){if(n==null)return;return/^[A-Za-z0-9_-]{1,128}$/.test(n)?kn(n):b("nonconforming")}function yDt(n){return kn(n.map((r)=>ye(r)).join(","))}
export{ye,yDt};
