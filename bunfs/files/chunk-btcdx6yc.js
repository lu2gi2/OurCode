// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{d}from"/$bunfs/root/chunk-wkmq9ht0.js";import{i}from"/$bunfs/root/chunk-kgp7t7yx.js";import{g}from"/$bunfs/root/chunk-04d4ftnx.js";import{lde,ACe,e_r}from"/$bunfs/root/chunk-tf8026s8.js";import{sD,rM}from"/$bunfs/root/chunk-88awaqqw.js";import{QJo,vI}from"/$bunfs/root/chunk-kasbfbhj.js";import{CWo}from"/$bunfs/root/chunk-kawcffk6.js";import{kj,A1t}from"/$bunfs/root/chunk-dbx8jhe9.js";function SBr(o,e,{trigger:a,offerBypass:s=!0}={}){let t=wBr(o,e,{offerBypass:s});return{level:o,currentMode:e.mode,nextMode:t,context:rM(e.mode,t,e,a)}}function wBr(o,e,{offerBypass:a=!0}={}){let s=e_r()!==void 0,t=e.mode==="plan"?e.prePlanMode??"plan":e.mode,r=lde(o,{isAutoModeAvailable:kj(e),isBypassPermissionsModeAvailable:a&&A1t(e)&&(!s||t==="bypassPermissions")},e.proactivityBaseline?.mode),n=e.proactivityBaseline?.mode,c=r==="acceptEdits"&&n==="acceptEdits"?n:vI(e)?void 0:t;return ACe(o,r,c)===void 0?r:"default"}function kWo(o,e,a,{offerBypass:s=!0}={}){let t;if(e((r)=>{if(r.proactivityLevel===o)return r;let n=SBr(o,r.toolPermissionContext,{offerBypass:s});return t={from:r.proactivityLevel,toMode:n.nextMode,modeChanged:n.nextMode!==n.currentMode},{...r,proactivityLevel:o,toolPermissionContext:{...n.context,mode:n.nextMode,startupModeDecidedByProactivityLevel:void 0}}}),t===void 0)return;if(m(o,a,{source:"sdk_host",from:t.from,toMode:t.toMode}),t.modeChanged||QJo(t.from,o))setImmediate(()=>{sD.emit()})}function m(o,e,{source:a,from:s,toMode:t}){CWo(o,e),i("tengu_proactivity_cycle",{level:d(o),from:d(s),to_mode:d(t),source:d(a)}),g("proactivity_cycle")}
export{SBr,wBr,kWo};
