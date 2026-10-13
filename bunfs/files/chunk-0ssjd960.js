// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,B}from"/$bunfs/root/chunk-ctt36bn8.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{c}from"/$bunfs/root/chunk-etbngzss.js";import{hs}from"/$bunfs/root/chunk-nb5ge4vq.js";var KNn="in-process";class Tys{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var hNs=new q(()=>new Tys);function o(){return hNs.of(B().host)}function Azs(e){o().setCliOverride(e)}function dpo(){return o().cliOverride}function upo(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function ppo(){return o().captured!==null}function C_r(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(hs("teammateMode",KNn).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function Oxt(){let e=o();if(e.captured===null)c(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),C_r();return e.captured??KNn}
export{KNn,Tys,hNs,Azs,dpo,upo,ppo,C_r,Oxt};
