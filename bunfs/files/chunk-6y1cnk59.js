// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Fn,k}from"/$bunfs/root/chunk-0ycjphb5.js";import{Ne}from"/$bunfs/root/chunk-j27d47mr.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{Qh}from"/$bunfs/root/chunk-347xejxn.js";import{O}from"/$bunfs/root/chunk-79wfew46.js";function xi(){if(Qh().messagingBeyondOwnAgentsDisabled)return!1;let e=a.CLAUDE_CODE_HARBOR_KITE;if(e!==void 0)return Ne(e);if(O()==="windows"&&!k("tengu_harbor_kite_win",!0))return!1;return k("tengu_harbor_kite",!0)}function Fce(e){if(e?.flagsSettled===!1&&Fn("tengu_cuddly_willow",!0).source==="fallback")return!1;return k("tengu_cuddly_willow",!0)}var f9t="Cross-session messaging is not available in this session.";
export{xi,Fce,f9t};
