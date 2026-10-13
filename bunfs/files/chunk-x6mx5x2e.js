// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{lf}from"/$bunfs/root/chunk-qk3m4n8a.js";import{vn}from"/$bunfs/root/chunk-bmzhpr9h.js";import{HW,k4e}from"/$bunfs/root/chunk-4521ay78.js";import{gHe,NS,Dl,jh,hk}from"/$bunfs/root/chunk-kasbfbhj.js";function d(e){return e!==void 0&&lf(e)?{kind:"unresolved",reason:"Its marketplace is a folder whose catalog could not be read, or lists it no more."}:{kind:"copy"}}async function sIr(e,o){let[r,l]=await Promise.all([hk(e,o),Dl(o)]),n=l[vn(e).marketplace??""]?.source;if(r===null)return d(n);let{source:t}=r.entry,c=gHe(t,n);if(typeof t!=="string"||!c)return{kind:"copy"};let i=jh(r.marketplaceInstallLocation)===void 0?"workspace":"system",a=await HW(e,r.marketplaceInstallLocation,t,l,NS(),o,i);return a.kind==="ok"?{kind:"folder",path:a.entryPath}:{kind:"unresolved",reason:k4e(a,r.marketplaceInstallLocation,t).message}}export{sIr};
