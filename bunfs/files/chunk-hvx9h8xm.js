// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{Wc,hLn}from"/$bunfs/root/chunk-4r6b8efh.js";import{fq}from"/$bunfs/root/chunk-xwkmkvm4.js";import{o,oe,u,A}from"/$bunfs/root/chunk-smx21d0k.js";var kme="anthropic/devicePassthrough",fDs=["get_device_info","device_bash","list_devices","sync_files"],r="Claude_Browser__",n=128,AXn=1,_=p(()=>u({v:A(AXn),tool:o().min(1).max(n),target:oe().optional()}));function djt(t){let e=_().safeParse(t);if(!e.success)return;let s=hLn(e.data.target);return s===void 0?void 0:{v:e.data.v,tool:Wc(e.data.tool,n),target:s}}var a=fDs.map(fq),c=`${fq(r)}_`;function i(t){let e=`${fq(t)}_`;return a.some((s)=>e.startsWith(`${s}_`))}var E=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),l="device_bash";function CXn(t){let e=t.lastIndexOf("__"),s=e===-1?t:t.slice(e+2);return E.has(s)||t===l||`__${t}`.endsWith("__Claude_Browser__request_access")}function IOe(t){return!i(t)&&!`${fq(t)}_`.startsWith(c)&&!CXn(t)}
export{kme,fDs,AXn,djt,CXn,IOe};
