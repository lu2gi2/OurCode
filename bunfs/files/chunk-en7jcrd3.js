// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{tl}from"/$bunfs/root/chunk-fv3gxsmx.js";function izo(e){return()=>{let n=e(),t=tl();return t.disconnectedAnswerCount++,t.disconnectedAnswerTexts.add(n),n}}function e1r(){return tl().disconnectedAnswerCount}function azo(e){return tl().disconnectedAnswerTexts.has(e)}function FBt(){let e=tl();return e.disconnectedAnswerCount>0||e.notConnectedSeenByPriorWorker}function lzo(){tl().notConnectedSeenByPriorWorker=!0}
export{izo,e1r,azo,FBt,lzo};
