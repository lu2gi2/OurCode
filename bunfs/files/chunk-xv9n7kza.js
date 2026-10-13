// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{wS,KCs,QV}from"/$bunfs/root/chunk-pp3y3t61.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{ft}from"/$bunfs/root/chunk-gc7ea4xt.js";import{uUn}from"/$bunfs/root/chunk-r5ydwfh2.js";function xV(i){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(i??ft()).disableBundledSkills===!0}var gwr="allow_bundled_skills";function C$e(){return!wS(gwr)}function t(){return KCs()??uUn}function QW(i){return C$e()&&!t().includes(i)}function l7(i,e){return xV(e)||QW(i)}function Lws(){return QV(gwr,"Bundled skills","are")}function dUn(i){let e=C$e();return`${xV(i)}:${e}:${e?t().join(","):""}`}function hwr(i,e){return i.type==="prompt"&&i.source==="builtin"&&l7(i.name,e)}
export{xV,gwr,C$e,QW,l7,Lws,dUn,hwr};
