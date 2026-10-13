// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{wt,ce}from"/$bunfs/root/chunk-0ycjphb5.js";import{I$,YTe,Ix,O$}from"/$bunfs/root/chunk-qwvy7ma3.js";import{ka}from"/$bunfs/root/chunk-5mfg4ngf.js";var W4n="https://clau.de/chrome/permissions",m={install:I$,reconnect:YTe,permissions:W4n};async function mBs({mcpClients:s,atStartup:i}){let l=await O$().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=ce(),r=s.some((e)=>e.name===ka&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:Ix(),subscriber:wt(),wsl:a.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await i(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{W4n,mBs};
