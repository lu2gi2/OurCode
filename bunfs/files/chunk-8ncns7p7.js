// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{Nt}from"/$bunfs/root/chunk-0ycjphb5.js";function FUo(){return!Nt()}function UUo(o){return o.filter((r)=>!r.mcpErrorMetadata&&!r.statusOnly&&!r.startupFatal)}function EJe(o){let r=[],i=[];for(let n of o)(n.statusOnly?r:i).push(n);return{statusNotices:r,invalidEntries:i}}function BUo(o){for(let r of o)t(`Invalid setting skipped without dialog (automated session): ${r.file??"settings"}: ${r.path}: ${r.message}`,{level:"error"})}
export{FUo,UUo,EJe,BUo};
