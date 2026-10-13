// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{O}from"/$bunfs/root/chunk-79wfew46.js";import*as t from"fs/promises";import*as o from"path";function Hzt(e={}){return{fs:t,path:o,platform:()=>O(),...e}}async function Dzt(e,r){return r.isRootNameExchangeable===!0?e.path.join(await e.fs.realpath(e.path.dirname(r.realRoot)),e.path.basename(r.realRoot)):e.fs.realpath(r.realRoot)}
export{Hzt,Dzt};
