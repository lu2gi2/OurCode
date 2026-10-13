// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{rj}from"/$bunfs/root/chunk-ctt36bn8.js";import{k,hz}from"/$bunfs/root/chunk-0ycjphb5.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{Kf,Yen}from"/$bunfs/root/chunk-mvz09dzd.js";import{bAe,Roo}from"/$bunfs/root/chunk-p13123xv.js";var t=300000;function qOn(){return a.CLAUDE_CODE_BRIEF||hz("tengu_kairos_brief",!1,t)}function azs(e){if(!e.includes(Kf)&&!e.includes(Yen))return!1;if(bAe())return!1;return qOn()}function jI(){return rj()&&qOn()||Roo()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${Kf} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function lzs(){let e=k("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{qOn,azs,jI,lzs};
