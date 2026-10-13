// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ya}from"/$bunfs/root/chunk-8524cxt8.js";import{y,N}from"/$bunfs/root/chunk-j9ep7722.js";N();var wG=150,Oo=250;function rc(e,n,t=wG){let o=e()-n;if(o>=0)return o<t;return n<=Date.now()}function uNo(e){let n=Ya(),[t,o]=y(()=>({key:e,at:Date.now()}));if(t.key!==e)o({key:e,at:Date.now()});return function(){return rc(n,t.at)}}
export{wG,Oo,rc,uNo};
