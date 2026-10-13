// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{WRo}from"/$bunfs/root/chunk-ctt36bn8.js";import{Sa}from"/$bunfs/root/chunk-4ban11rz.js";function DLr(e){if(e)Sa.terminalFocusGainedAt=Date.now();if(!e&&Sa.terminalFocus==="blurred")return;Sa.terminalFocus=e?"focused":"blurred",WRo(e),Sa.terminalFocusChanged.emit()}function UIe(){return Sa.terminalFocus!=="blurred"}function X9(){return Sa.terminalFocus}function SFo(){return Sa.terminalFocusGainedAt}function wve(e){return Sa.terminalFocusChanged.subscribe(e)}
export{DLr,UIe,X9,SFo,wve};
