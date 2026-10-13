// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,B}from"/$bunfs/root/chunk-ctt36bn8.js";import{d}from"/$bunfs/root/chunk-wkmq9ht0.js";import{i}from"/$bunfs/root/chunk-kgp7t7yx.js";import{Fl}from"/$bunfs/root/chunk-t0b6khh6.js";import{Mw}from"/$bunfs/root/chunk-9nfq6p43.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:d(e)})}reset(){this.firedSites.clear()}}var l=new q(()=>new n);function f(){return l.of(B().host)}function JDr(e){f().fire(e)}async function f$t(e){try{let t=await a(`/proc/${e}/stat`,"utf-8"),r=t.lastIndexOf(")"),s=t.slice(r+2).split(" "),o=Number(s[19]);return Number.isFinite(o)?o:null}catch{return null}}async function xXe(e,t,r){if(r!==void 0){if(await Fl(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(JDr("kill_gate"),await f$t(e)!==t)return}else return;await Mw(e,"SIGTERM").catch(()=>{})}
export{JDr,f$t,xXe};
