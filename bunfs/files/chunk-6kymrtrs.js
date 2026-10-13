// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{jf}from"/$bunfs/root/chunk-0sswwkdg.js";import{pGe,Fj,NC}from"/$bunfs/root/chunk-sqysdndt.js";async function lfn(o,n,i,a){let e=await NC(o,n,i,{gatePublicRead:!1,credentials:a});if(e.err!==null){if(e.errorCode==="boot_404")return{ok:!1,reason:pGe(e)?"never_published":"not_found"};if(Fj(e))return{ok:!1,reason:"other_org",err:e.err};return{ok:!1,reason:"failed",err:e.err,errorCode:e.errorCode}}if(e.assetToken===void 0)return{ok:!1,reason:"public_outside_org"};let r=typeof e.data.title==="string"?e.data.title:void 0,t=r!==void 0?jf(r)??void 0:void 0;return{ok:!0,...t!==void 0&&{title:t}}}
export{lfn};
