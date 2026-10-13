// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{x}from"/$bunfs/root/chunk-m1rt7wpr.js";import{qWn,tZ}from"/$bunfs/root/chunk-qk3m4n8a.js";import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{hi}from"/$bunfs/root/chunk-vvkk7cgc.js";import{_t}from"/$bunfs/root/chunk-smx21d0k.js";var c=new Set(["server/discover","initialize","notifications/initialized","ping","tools/list","tools/call","notifications/cancelled","notifications/roots/list_changed"]);function NA(e){return tZ({serverName:e.name})?new x(qWn,"hosted desktop reached past its tools"):void 0}function cAe(e,o){let t=NA(e);if(t===void 0)return;let i=o.send.bind(o);o.send=async(n,...s)=>{if(!("method"in n?typeof n.method==="string"&&c.has(n.method):!Array.isArray(n)&&("id"in n)&&(("result"in n)||("error"in n))))throw t;return i(n,...s)}}function r(e,o){let t=NA(e)??void 0;return t&&Promise.reject(t)}function cB(e,o,t,i=!1){return r(e,i?o.name:void 0)??import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule().invokeToolRaw(e.client,o,t)}function dAe(e,o,t){return r(e)??import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule().readResourceRaw(e.client,o,t)}function not(e,o){return r(e)??import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule().listToolsRaw(e.client,o)}var l=p(()=>_t({}));function _ro(e,o,t){return r(e)??hi(e.client).request(o,l(),{...t,cacheMode:"bypass"})}function U2(e,o,t){import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule().onMcpNotification(e,o,t)}function mce(e,o){hi(e.client).onclose=o}function eas(e,o){let t=hi(e.client),i=t.onclose;t.onclose=()=>{i?.(),o()}}function tas(e,o){return r(e)??hi(e.client).notification(o)}function nas(e,o){hi(e.client)?.transport?.onmessage?.(o)}
export{NA,cAe,cB,dAe,not,_ro,U2,mce,eas,tas,nas};
