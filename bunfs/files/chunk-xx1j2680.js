// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import o from"path";var rt="Read",hue="allow_large",uen=new Set(["png","jpg","jpeg","gif","webp"]);function Tct(t){let e=o.extname(t).toLowerCase().slice(1);return uen.has(e)||e==="pdf"}
export{rt,hue,uen,Tct};
