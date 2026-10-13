// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{qv}from"/$bunfs/root/chunk-ctt36bn8.js";import{mr}from"/$bunfs/root/chunk-6kc68p18.js";import{mT,yk,To}from"/$bunfs/root/chunk-kasbfbhj.js";import{KMo}from"/$bunfs/root/chunk-d15pd9cc.js";import{fx}from"/$bunfs/root/chunk-cq4hjme9.js";import{vo}from"/$bunfs/root/chunk-6cee9jwv.js";function rOr(e,r){return KMo(r.scope)&&!To(e)}function n1e(e,r){return rOr(e,r)&&!o(r)}function o(e){return import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule().isFirstPartyDesignServerConfig(e)}function oOr(e){switch(e.type){case void 0:case"stdio":case"http":case"sse":case"ws":return!0;case"sdk":case"sse-ide":case"ws-ide":case"claudeai-proxy":return!1}}function t(e){return Object.assign(mT(),vo(e,oOr))}async function y9e({storageV5:e}={}){if(qv()||mr())return mT();await fx();let{servers:r}=await yk({},{purpose:"deviceBridge",storageV5:e});return t(r)}
export{rOr,n1e,oOr,y9e};
