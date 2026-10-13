// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{MLr,hFo}from"/$bunfs/root/chunk-mm2yesqa.js";import{mee}from"/$bunfs/root/chunk-dks9s2hv.js";function ift({sessionId:s,getAccessToken:r,fetchSession:t,initial:e}){if(!mee())return;return hFo({...e&&{initial:e.then(MLr)},read:()=>t(s,{accessToken:r()}).then(MLr)})}
export{ift};
