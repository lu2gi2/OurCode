// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
var EUe=String.raw`\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}`;function ape(e){return new RegExp(EUe).test(e)}function Ynn(e){let n=[],r=0;for(let t of e.matchAll(new RegExp(EUe,"g")))n.push(e.slice(r,t.index)),r=t.index+t[0].length;return n.push(e.slice(r)),n}function Xnn(e){return e.replace(new RegExp(EUe,"g"),(n)=>"x".repeat(n.length))}function jxe(e){return e.replace(new RegExp(EUe,"g"),(n,r)=>`\${${r}}`)}
export{EUe,ape,Ynn,Xnn,jxe};
