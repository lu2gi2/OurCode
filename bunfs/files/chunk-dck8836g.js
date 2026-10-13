// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"/$bunfs/root/chunk-5k7wva7c.js";import{rt,hue}from"/$bunfs/root/chunk-xx1j2680.js";import{Hf,De}from"/$bunfs/root/chunk-smx21d0k.js";function r(e,n){return e!==void 0&&Number.isInteger(e)&&e>=6&&e<=n?e:6}var byr={first:5,permissionRequestRenames:6,readAllowLarge:7,editOriginalFile:8},o=Math.max(...Object.values(byr)),_={[rt]:{[hue]:byr.readAllowLarge}};var kNe={version:o,min_version:r(void 0,o)},OXt={version:kNe.version,min_version:1},XRt=p(()=>De({version:Hf().min(1),min_version:Hf().min(1)}).refine(({version:e,min_version:n})=>n<=e));function PLn(e){return XRt().safeParse(e).data}function ILn(e,n){if(n.version<e.min_version)return{kind:"peer_too_old"};return e.version<n.min_version?{kind:"self_too_old"}:{kind:"agreed",version:Math.min(e.version,n.version)}}
export{byr,kNe,OXt,XRt,PLn,ILn};
