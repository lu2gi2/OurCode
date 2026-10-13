// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{W}from"/$bunfs/root/chunk-m1rt7wpr.js";import{g,f}from"/$bunfs/root/chunk-04d4ftnx.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{c}from"/$bunfs/root/chunk-etbngzss.js";import{Ae,lH,ce}from"/$bunfs/root/chunk-0ycjphb5.js";function u_t(){try{return!1}catch(e){return c(W(e)),!1}}var i=20,u=i+1,IKo=10,_=1209600000,bGr=[{text:"Showing fewer prompt suggestions"},{text:" \xB7 use one to bring them back",dim:!0}];function yQn(){let e=ce();if(r(e)<i)return!1;if(a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION===!0)return!1;if(u_t())return!1;if(Date.now()-Date.parse(e.firstStartTime??"1970-01-01")<_)return!1;return!0}function MWt(e,o,n){if(e){if(n)n.unusedInARow=0;m(o,!1);return}if(!n||r(ce())>=i)return;if(n.unusedInARow++,n.unusedInARow>=i)n.unusedInARow=0,Ae(S,o)}function OKo(e,o){if(o)o.unusedInARow=0;m(e,!0)}function SGr(e){if(!p(ce())||!yQn())return!1;return Ae((o)=>p(o)?{...o,promptSuggestionUnusedStreak:u}:o,e),g("prompt_suggestion_back_off_notice"),!0}function m(e,o){let n=r(ce());if(n===0)return;if(!yQn()){Ae(d,e);return}let l={was_notice_claimed:n===u,via_config_toggle:o};lH(d,e).then((s)=>{if(s)g("prompt_suggestion_back_off_end",l);else f("prompt_suggestion_back_off_end","reset_unconfirmed",l)}).catch((s)=>t(`Prompt suggestion back-off: could not log the end event: ${s}`,{level:"error"}))}function d(e){return r(e)===0?e:{...e,promptSuggestionUnusedStreak:0}}function S(e){return r(e)>=i?e:{...e,promptSuggestionUnusedStreak:i}}function p(e){let o=r(e);return o>=i&&o!==u}function r(e){let o=e.promptSuggestionUnusedStreak;return typeof o==="number"&&Number.isFinite(o)?o:0}
export{u_t,IKo,bGr,yQn,MWt,OKo,SGr};
