// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{D}from"/$bunfs/root/chunk-tb7m3r21.js";function xAs(n){switch(n){case"hipaa":return"HIPAA";case"zdr":return"ZDR (Zero Data Retention)";default:return t(`Unknown compliance_taint '${n}' from policyLimits`,{level:"warn"}),r}}var r="Organization policy",Wct="Per your organization's policy, some features are limited",cjn="HIPAA configured",o=new Set(["hipaa","zdr"]);function Den(n){return o.has(n)||!1}function Len(n){let e=D(n),i=e.filter(Den);if(i.length===e.length)return i;return t(`Unknown compliance_taint values from policyLimits (${e.length-i.length})`,{level:"warn"}),[...i,r]}var a=new Set(["hipaa"]);function _Se(n){return D(n).filter((e)=>a.has(e))}
export{xAs,Wct,cjn,Den,Len,_Se};
