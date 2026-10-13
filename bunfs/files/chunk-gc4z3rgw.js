// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{qxr}from"/$bunfs/root/chunk-ctt36bn8.js";var ND={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},U_=Object.keys(ND);function EW(e){return e!==void 0&&U_.includes(e)}function uLe(e){return e.userOverride??e.agentDefinitionColor}function pLe(e){if(e==="general-purpose")return;let n=qxr().get(e);if(n&&U_.includes(n))return ND[n];return}function Kot(e,o){let n=qxr();if(!o){n.delete(e);return}if(U_.includes(o))n.set(e,o)}
export{ND,U_,EW,uLe,pLe,Kot};
