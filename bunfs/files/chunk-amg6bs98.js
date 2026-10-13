// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ce,$pt,dIo}from"/$bunfs/root/chunk-ctt36bn8.js";import{d,pe}from"/$bunfs/root/chunk-wkmq9ht0.js";import{i}from"/$bunfs/root/chunk-kgp7t7yx.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{YK}from"/$bunfs/root/chunk-kasbfbhj.js";import{hDt}from"/$bunfs/root/chunk-03gkt7r5.js";function t(){let e=dIo(),o=e===void 0?hDt():void 0,[r,s]=e!==void 0?[Math.max(0,Date.now()-e),"session_switch"]:o!==void 0?[Math.max(0,Date.now()-o),"spawn_stamp"]:[Ce()?void 0:Math.round(process.uptime()*1000),"process_start"];return{msSinceSessionStart:r,startAnchor:d(s),isRemoteSession:Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)}}function n(e){let o=$pt();if(o.has(e))return!1;return o.add(e),!0}function Wgn(e,o){if(e===0||!n("tools_added"))return;i("tengu_chrome_tools_added",{...t(),toolCount:e,discoverySource:d(o)})}function zgn(e){if(!n("tool_attempted"))return;i("tengu_chrome_tool_attempted",{...t(),...e&&{messageClientPlatform:YK(e)}})}function Nzo(e){if(!n("bridge_connected"))return;i("tengu_chrome_bridge_connected",{...t(),bridgeStatus:pe(e)})}function $zo(){if(!n("extension_connected"))return;i("tengu_chrome_extension_connected",t())}function Fzo(e){i("tengu_chrome_tool_call_disconnected",{...t(),tokenAccountMismatch:e})}
export{Wgn,zgn,Nzo,$zo,Fzo};
