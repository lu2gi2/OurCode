// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ce}from"/$bunfs/root/chunk-0ycjphb5.js";import{cn}from"/$bunfs/root/chunk-9dn6gg6j.js";import{fe}from"/$bunfs/root/chunk-gc7ea4xt.js";import{YA,iY}from"/$bunfs/root/chunk-vy0qtdrm.js";function i(){return c(iY(ce().env,"globalConfig"),cn("userSettings")?iY(fe("userSettings")?.env,"userSettings"):{},iY(fe("flagSettings")?.env,"flagSettings"),iY(fe("policySettings")?.env,"policySettings"))}function rAt(){return g(YA(),i())}function g(s,r){let n=new Set(Object.keys(r).map((e)=>e.toUpperCase())),t={...s};for(let e of Object.keys(t))if(!(e in r)&&n.has(e.toUpperCase()))delete t[e];return Object.assign(t,r)}function c(...s){let r=new Map;for(let t of s)for(let[e,o]of Object.entries(t))r.set(e.toUpperCase(),{key:e,value:o});let n={};for(let{key:t,value:e}of r.values())n[t]=e;return n}
export{rAt};
