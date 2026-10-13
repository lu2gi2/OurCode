// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{wo}from"/$bunfs/root/chunk-6s83kxfy.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";var n=3;var _="tengu_hazel_trellis";function hv(){let e=a.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;if(e!==void 0)return e;let t=wo();if(t.maxSubagentSpawnDepthFromGrowthBook===void 0){let{getFeatureValue_CACHED_MAY_BE_STALE:A}=import.meta.require("/$bunfs/root/chunk-jv24m4k2.js"),{getCachedClientData:S}=import.meta.require("/$bunfs/root/chunk-edz5qxx7.js"),o=S()?.[_],r=u(o)?o:A(_,n);t.maxSubagentSpawnDepthFromGrowthBook=u(r)?r:n}return t.maxSubagentSpawnDepthFromGrowthBook}function u(e){return typeof e==="number"&&Number.isInteger(e)&&e>=1}
export{hv};
