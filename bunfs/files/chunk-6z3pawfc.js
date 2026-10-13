// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Xv}from"/$bunfs/root/chunk-xgw72tt1.js";import{Qe,HDt}from"/$bunfs/root/chunk-qch5xj2a.js";function t(n){return HDt(Qe(n,".")," ")}function $so(n){return/^con(in|out)\$$/i.test(t(n))}var e=/[<>"|?*\\\x00-\x1f]/;function xds(n){return n.split("/").some((o)=>e.test(o))}function qMn(n){return n.split("/").some((o)=>o.includes(":")||o.endsWith(".")||o.endsWith(" ")||Xv(t(o).replace(/ {2,}/g," "))||$so(o))}var r=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function i(n){return HDt(Qe(n,":"),". ")}function Y5t(n){return n.split("/").some((o)=>r.test(i(o)))}
export{$so,xds,qMn,Y5t};
