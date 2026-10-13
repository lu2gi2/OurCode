// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{pu}from"/$bunfs/root/chunk-7sgatswa.js";import{pBr}from"/$bunfs/root/chunk-0fbzbyyq.js";import{dg}from"/$bunfs/root/chunk-s7aawpq2.js";import{Gs}from"/$bunfs/root/chunk-7q005g04.js";import{qM}from"/$bunfs/root/chunk-0xz61zj0.js";function E8n(){return[{type:"text",text:pBr()}]}function n1s(){Gs({name:qM,description:`Reference for writing a ${pu} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>dg(),async getPromptForCommand(){return E8n()}})}
export{E8n,n1s};
