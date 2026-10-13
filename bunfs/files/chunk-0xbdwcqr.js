// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{dn}from"/$bunfs/root/chunk-x0qpydt2.js";import{j}from"/$bunfs/root/chunk-fcerdfs3.js";import{qn}from"/$bunfs/root/chunk-nj0630nv.js";import{bn,yl,wt,K$e}from"/$bunfs/root/chunk-0ycjphb5.js";import{hostname as n}from"os";function UL(){return}function $ce(){return}function Ck(){let e=UL();if(e!==void 0)return e;if(!qn()||!wt())return;return bn()?.accessToken}async function CT(e){if(!(j()&&e!==void 0))return Ck();let r=UL();if(r!==void 0)return r;if(!qn()||!await K$e(e))return;return(await yl(e))?.accessToken}function UD(){return $ce()??dn().BASE_API_URL}function NLe(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{UL,$ce,Ck,CT,UD,NLe};
