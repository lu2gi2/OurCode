// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{$t}from"/$bunfs/root/chunk-xb9cceab.js";var s=null;function D2o(e){let n=s;return s=e,n}function tyn(){return s}var r=null;function L2o(e){let n=r;return r=e,n}async function hX(e){return await r?.(e)??!1}class jOe extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function N2o(e){let n=t;return t=e,n}function KWe(){return t}function nyn(e){let n=$t();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function fWr(){let e=$t(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function $2o(){let e=fWr();if(e)process.stderr.write(`${e}
`)}
export{D2o,tyn,L2o,hX,jOe,N2o,KWe,nyn,fWr,$2o};
