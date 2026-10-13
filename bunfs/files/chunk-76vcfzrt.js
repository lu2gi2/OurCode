// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{b}from"/$bunfs/root/chunk-wkmq9ht0.js";import{l}from"/$bunfs/root/chunk-m1rt7wpr.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{fn,Pi,QM,zc,blt,KYe}from"/$bunfs/root/chunk-bmzhpr9h.js";import{LE}from"/$bunfs/root/chunk-nbx3tg29.js";import{hw}from"/$bunfs/root/chunk-13w23pz4.js";import{gv,L2,dro}from"/$bunfs/root/chunk-a5rabwn2.js";import{Dl,hk}from"/$bunfs/root/chunk-kasbfbhj.js";async function hfe(n,i,r){let o=QM(n),{name:a,marketplace:e}=zc(o);if(e===fn&&gv().nameRegistration===void 0)await Dl(r);let m=L2(a,e,i),d=blt(e);if(!d&&e!==Pi&&!KYe(a,e))return m;let s=!1;try{s=await c(o,a,e,r)}catch(u){t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${l(u)}); logging its name as third-party`)}return{...m,...d&&e!==void 0&&{marketplace_name_redacted:dro(e)},...!s&&{plugin_name_redacted:b(hw)}}}async function c(n,i,r,o){if(KYe(i,r))return!0;if(r===Pi)return LE(i)!==void 0;return await hk(n,o)!==null}
export{hfe};
