// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Lh,aG}from"/$bunfs/root/chunk-ctt36bn8.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{ft}from"/$bunfs/root/chunk-gc7ea4xt.js";import{wo}from"/$bunfs/root/chunk-6s83kxfy.js";import{It}from"/$bunfs/root/chunk-4r6b8efh.js";import{dg}from"/$bunfs/root/chunk-s7aawpq2.js";import{Ro}from"/$bunfs/root/chunk-5aqxznmv.js";import{qM}from"/$bunfs/root/chunk-0xz61zj0.js";import{xV,QW}from"/$bunfs/root/chunk-xv9n7kza.js";function EOe(o){let l=wo();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&!QW(qM)&&(o===void 0||i(o))}function e(){if(!dg())return!1;if(xV()||Lh())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=ft().skillOverrides?.[qM];if(o==="off"||o==="user-invocable-only")return!1;let l=aG();if(l!==void 0&&!l.includes(qM))return!1;return!0}function i(o){return o.some((l)=>It(l,Ro))}
export{EOe};
