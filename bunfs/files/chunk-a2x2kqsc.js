// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{j}from"/$bunfs/root/chunk-fcerdfs3.js";import{d}from"/$bunfs/root/chunk-wkmq9ht0.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{_Pe,K1}from"/$bunfs/root/chunk-x47nahfr.js";import{Ie}from"/$bunfs/root/chunk-nj0630nv.js";import{i}from"/$bunfs/root/chunk-kgp7t7yx.js";import{Tn,TP}from"/$bunfs/root/chunk-gc7ea4xt.js";import{k}from"/$bunfs/root/chunk-0ycjphb5.js";import{yde}from"/$bunfs/root/chunk-gr4a0fky.js";function LWt(){return TP("feedbackDrafts")[0]??"notify"}function kGr(){if(yde()!==null)return!1;if(_Pe())return!1;if(K1())return!1;if(Ie()!=="firstParty")return!1;let e=a.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return k("tengu_juniper_relay",!1);return k("tengu_juniper_relay",!1)}function zG(){return LWt()!=="off"&&kGr()}function q_n(e,{storageV5:t,via:r}){let n=j()&&t!==void 0?Tn("userSettings",{feedbackDrafts:e},void 0,t):Tn("userSettings",{feedbackDrafts:e});return i("tengu_feedback_drafts_setting_changed",{value:d(e),via:d(r)}),n}
export{LWt,kGr,zG,q_n};
