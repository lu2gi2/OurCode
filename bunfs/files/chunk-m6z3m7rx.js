// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ne}from"/$bunfs/root/chunk-j27d47mr.js";function tBe(){return Ne(process.env.CLAUDE_CODE_REMOTE)&&String(process.env.CLAUDE_CODE_ENVIRONMENT_KIND??"").trim()===""}var i=/^(?:--port(?:=\d+)?|\d+|--result-format(?:=(?:raw|rendered))?|raw|rendered|--session-tunnel|--debug|-d|--verbose)$/;function ru(){{let[n,o,r,...e]=process.argv.slice(2),t=r==="--transport=http"?e:r==="--transport"&&e[0]==="http"?e.slice(1):void 0;return tBe()&&n==="mcp"&&o==="serve"&&t!==void 0&&t.every((s)=>i.test(s))}return!1}
export{tBe,ru};
