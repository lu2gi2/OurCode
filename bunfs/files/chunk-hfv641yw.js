// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{W}from"/$bunfs/root/chunk-m1rt7wpr.js";import{Ge}from"/$bunfs/root/chunk-jtpfgrzr.js";import{g,m,f}from"/$bunfs/root/chunk-04d4ftnx.js";import{_}from"/$bunfs/root/chunk-bd805sh6.js";import{c}from"/$bunfs/root/chunk-etbngzss.js";import{qhr,Khr,Yhr}from"/$bunfs/root/chunk-4r6b8efh.js";import{$un,oNr}from"/$bunfs/root/chunk-zpyprq4v.js";import{fJe}from"/$bunfs/root/chunk-x1hgc1tw.js";import{statfs as a}from"fs/promises";import{availableParallelism as u,totalmem as d}from"os";var p=["gcloud","aws","az","gh","brew","apt","sqlite3","ffmpeg","rg","jq"],s=2000,l=2n**30n;function S6n(){try{return fJe()&&$un("basic")!=="off"}catch(t){return c(W(t)),!1}}async function TBs(t){try{if(!S6n())return;let[e,r]=await Promise.all([oNr({includeMcpServers:!1,signal:AbortSignal.timeout(s),alsoLookFor:p,maxTools:qhr}),Ge(a(t,{bigint:!0}),s).catch(()=>{return})]);if(e===void 0){m("remote_tools_host_inventory","unsupported_platform");return}let n=r===void 0?-1n:r.bavail*r.bsize;if(!e.complete)f("remote_tools_host_inventory","deadline");else if(n<0n)f("remote_tools_host_inventory","disk_unread");else g("remote_tools_host_inventory");let i={...!e.complete&&{incomplete:!0},cpus:u(),memory_gb:Math.round(d()/Number(l)),...n>=0n&&{disk_free_gb:Math.min(Number(n/l),Khr)}},o=e.profile.tools;while(o.length>0&&_({tools:o,...i}).length>Yhr)o=o.slice(0,-1);return{tools:o,...i}}catch(e){c(W(e)),m("remote_tools_host_inventory","error");return}}
export{S6n,TBs};
