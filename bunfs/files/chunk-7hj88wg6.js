// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{b}from"/$bunfs/root/chunk-wkmq9ht0.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{i}from"/$bunfs/root/chunk-kgp7t7yx.js";import{on}from"/$bunfs/root/chunk-8524cxt8.js";import{le,y,N}from"/$bunfs/root/chunk-j9ep7722.js";import{hje}from"/$bunfs/root/chunk-4nfvaqps.js";N();function l(o,n,r){return o.isWindowActivation||c(n,r)}function ib(){let o=on(),[n]=y(()=>o.now());return le((r)=>{let e=o.now();if(!l(r,n,e))return!1;let u=r.isWindowActivation?b("window_activation"):b("mount_settle");return t(`Select: dropped stray click (${r.isWindowActivation?"window-activation click":`${e-n}ms after mount`})`),i("tengu_select_stray_click_dropped",{reason:u}),r.dropAsStray(),!0},[o,n])}function Umt(){let o=on(),[n]=y(()=>o.now());return le(()=>c(n,o.now()),[o,n])}function c(o,n){return n-o<hje}
export{ib,Umt};
