// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{vs}from"/$bunfs/root/chunk-j27d47mr.js";var g=/^[A-Za-z0-9][A-Za-z0-9-]*$/,a=new Set(["restricted"]),zFo=["system-prompt-file","append-system-prompt-file","append-subagent-system-prompt-file"];function ok(t,e){return`${t}=${e}`}function G6n(t,e){let n=String(e);if(n.length>1&&n.startsWith("-"))return[ok(t,n)];return[t,n]}function PFt(t,e,n){t.push(...G6n(`--${e}`,n))}function zun(t,e,n,o){let i=0;for(let[r,s]of Object.entries(e)){if(!g.test(r)){o("malformed",JSON.stringify(r));continue}if(n.has(r)){o("blocked",r);continue}if(a.has(r)){if(!vs(String(s)))t.push(`--${r}`),i++;continue}if(s!=="")PFt(t,r,s),i++}return i}
export{zFo,ok,G6n,PFt,zun};
