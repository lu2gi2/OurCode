// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{j,bMs}from"/$bunfs/root/chunk-fcerdfs3.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{ve,qZ}from"/$bunfs/root/chunk-6kc68p18.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";function Fmo(e=pSr){let o=a.CLAUDE_CODE_HOVER_REST;if(o===void 0)return;if(uSr(o)!=="pinned")return;return{backend:j()?e():void 0,configHome:ve()}}function Umo(e){let o=j()?e.backend:void 0;if(o===void 0)return;if(!qZ(e.configHome)){t(`CLAUDE_CONFIG_DIR now names ${ve()}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access`,{level:"warn"});return}return o}function uSr(e){if(typeof e!=="boolean")t(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`,{level:"warn"});let o=bMs(e);if(o==="conflict")t(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`,{level:"warn"});return o}function pSr(){if(!j())return;return}export{Fmo,Umo,uSr,pSr};
