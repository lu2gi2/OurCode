// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ef,tF}from"/$bunfs/root/chunk-gr4a0fky.js";import{Xd,Gae,OHe,p3,f3}from"/$bunfs/root/chunk-kasbfbhj.js";function s(o,t){let c=ef(),e=Xd(o),n=p3(e,t),a=f3(e,t),r=!(tF()&&!Gae(e,t));return{enabled:c,effectiveWindow:n,threshold:a,enforced:r,source:OHe(e,t)}}function MHo(o){let t;return{notify(c,e){let n=s(c,e);if(t!==void 0&&UOr(t,n))return;t=n,o(n)},reset(){t=void 0}}}function UOr(o,t){return o.enabled===t.enabled&&o.effectiveWindow===t.effectiveWindow&&o.threshold===t.threshold&&o.enforced===t.enforced&&o.source===t.source}
export{MHo,UOr};
