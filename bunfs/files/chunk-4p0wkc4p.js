// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{xb}from"/$bunfs/root/chunk-4r8zj2v5.js";import{mFn}from"/$bunfs/root/chunk-4p8pf317.js";import{OYe}from"/$bunfs/root/chunk-2e6e7dc3.js";import{tP}from"/$bunfs/root/chunk-04nmpby8.js";import{Hm}from"/$bunfs/root/chunk-3vxngrsq.js";import{jm}from"/$bunfs/root/chunk-55x53sfe.js";import{Se}from"/$bunfs/root/chunk-cj4xndke.js";var a=Se(tP());var c=jm(),d=xb(),l=Hm(),u=tP(),S=OYe();var g=(e)=>`AWS_BEARER_TOKEN_${e.replace(/[\s-]/g,"_").toUpperCase()}`;var r=g;var s=Se(Hm()),uFn=({logger:e,signingName:n}={})=>async()=>{if(e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"),!n)throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key",{logger:e});let t=r(n);if(!(t in process.env))throw new s.TokenProviderError(`Token not present in '${t}' environment variable`,{logger:e});let o={token:process.env[t]};return a.setTokenFeature(o,"BEARER_SERVICE_ENV_VARS","3"),o};var i=Se(Hm());var pFn=(e={})=>i.memoize(i.chain(mFn(e),async()=>{throw new i.TokenProviderError("Could not load token from any providers",!1)}),(n)=>n.expiration!==void 0&&n.expiration.getTime()-Date.now()<300000,(n)=>n.expiration!==void 0);
export{uFn,pFn};
