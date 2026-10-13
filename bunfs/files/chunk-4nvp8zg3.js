// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{cf,na}from"/$bunfs/root/chunk-55x53sfe.js";import{T3e}from"/$bunfs/root/chunk-qbpgcqdd.js";import{readFile as i}from"fs/promises";async function pme(e){if(!cf()){let r=T3e();if(r.HTTPS_PROXY&&URL.parse(e)?.protocol==="https:"){let n;if(r.SSL_CERT_FILE)try{n=await i(r.SSL_CERT_FILE,"utf8")}catch(o){t(`MCP agent-proxy fallback: failed to read CA bundle: ${o instanceof Error?o.message:String(o)}`,{level:"warn"})}return na({url:e,fallbackProxy:{url:r.HTTPS_PROXY,noProxy:r.NO_PROXY,ca:n}})}}return na({url:e})}
export{pme};
