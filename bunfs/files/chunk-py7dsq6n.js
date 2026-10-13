// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{xR,kN}from"/$bunfs/root/chunk-qk3m4n8a.js";import{Mv}from"/$bunfs/root/chunk-gc7ea4xt.js";import{LLn}from"/$bunfs/root/chunk-tn496ms6.js";import{I_e,RQ}from"/$bunfs/root/chunk-pbtb1p2a.js";import{t3n,vgt,Egt,r3n,o3n,s3n,i3n,a3n}from"/$bunfs/root/chunk-8zh723md.js";import{join as i,resolve as f}from"path";function lNr(o,{backstop:t=!1}={}){return o.allowRules.sources.length>0||o.additionalDirectories.sources.length>0||!t&&(o.hookSources.length>0||o.commandHelperSources.length>0)}function cNr(){return{allowRules:vgt(),additionalDirectories:Egt(),hookSources:[],commandHelperSources:[]}}function qun(o){let t=f(o),m=kN(t,Mv),r=xR(i(t,".claude","settings.json")).settings,c=i(m,".claude","settings.local.json"),a=i(t,".claude","settings.local.json"),s=[xR(c).settings,...a===c?[]:[xR(a).settings]].filter((e)=>e!==null),S=s.length===0?null:{permissions:{additionalDirectories:s.flatMap((e)=>e.permissions?.additionalDirectories??[])}},u={projectSettings:r,localSettings:S},p={sources:[["projectSettings",".claude/settings.json"],["localSettings",".claude/settings.local.json"]],read:(e)=>u[e]??null,rules:(e)=>e==="localSettings"?s.flatMap((h)=>I_e(h,e)):I_e(u[e]??null,e)},d=(e)=>o3n(e)||s3n(e)||i3n(e)||r3n(e)||a3n(e),l=[],n=[];if(t3n(r))l.push(".claude/settings.json");if(s.some(t3n))l.push(".claude/settings.local.json");let g=LLn(t);if(g!==null)l.push(RQ(g));if(d(r))n.push(".claude/settings.json");if(s.some(d))n.push(".claude/settings.local.json");return{allowRules:vgt(p),additionalDirectories:Egt(p),hookSources:l,commandHelperSources:n}}
export{lNr,cNr,qun};
