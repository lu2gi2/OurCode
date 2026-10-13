// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ee}from"/$bunfs/root/chunk-ctt36bn8.js";import{tt,We,k,Nl}from"/$bunfs/root/chunk-0ycjphb5.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";function o(){let e=Nl()?.pewter_owl_model;if(typeof e==="string"&&e!=="")return e;return k("tengu_pewter_owl_model","")}function r(e){if(a.CLAUDE_CODE_PEWTER_OWL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL;if(Ee())return!1;let t=o();if(t!==""&&!We(tt()).includes(t))return!1;return k(`tengu_${e}`,!1)||Nl()?.[e]===!0}function bAe(){if(a.CLAUDE_CODE_PEWTER_OWL_TOOL!==void 0)return a.CLAUDE_CODE_PEWTER_OWL_TOOL;return r("pewter_owl_tool")}function Roo(){return r("pewter_owl_brief")}
export{bAe,Roo};
