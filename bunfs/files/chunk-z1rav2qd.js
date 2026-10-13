// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Hy}from"/$bunfs/root/chunk-0ycjphb5.js";import{ze}from"/$bunfs/root/chunk-xgw72tt1.js";var FBr=Object.freeze({isKept:!0,isDenied:!1,context:Object.freeze([])});function m(){let o=Hy();return{setPromptMentionRunner:o.set,runPromptMention:(r)=>{let e=o.get();return e?e(r):r.read(r.raised,"unhooked").then(()=>FBr)}}}var t=ze(m(),(o)=>o.setPromptMentionRunner(null));var XHs=t.runPromptMention;var JHs=t.setPromptMentionRunner;export{FBr,XHs,JHs};
