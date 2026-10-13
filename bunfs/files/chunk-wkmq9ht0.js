// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
function r(n){return n}function b(n){return r(n)}function d(n){return r(n)}function pe(n){return n==null?void 0:r(n)}function Br(n){return r(String(n))}function $q(n){return n==null?void 0:r(String(n))}function Nd(...n){return r(n.join(""))}function uVn(n){return r(n.join(","))}function gl(n){return r([...n].sort().join(","))}function Jy(n,e){return r(n.join(e??","))}function kn(n){return r(n)}function zb(n,e){return e?kn(n):void 0}function vOo(n,e){return n!==void 0&&e.includes(n)&&/^[a-z0-9-]{1,64}$/.test(n)?kn(n):b("none")}function eie(n,e){return e?kn(n):b("custom")}function tfe(n){return eie(n.agentType,n.source==="built-in")}function WPr(n,e){return e?kn(n):b("third-party")}
export{b,d,pe,Br,$q,Nd,uVn,gl,Jy,kn,zb,vOo,eie,tfe,WPr};
