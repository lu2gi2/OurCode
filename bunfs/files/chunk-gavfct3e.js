// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{we}from"/$bunfs/root/chunk-ctt36bn8.js";import{Zpe}from"/$bunfs/root/chunk-xgw72tt1.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{Fl}from"/$bunfs/root/chunk-t0b6khh6.js";import{O}from"/$bunfs/root/chunk-79wfew46.js";import{homedir as o}from"os";var bjr="CLAUDE_CODE_RELAUNCH_HOME_TRUST";async function IGo(){let r=await Fl(process.pid);if(r===void 0)return{};return{[bjr]:`${process.pid}:${r}`}}async function OGo(){let r=/^(\d{1,10}):(.{1,64})$/.exec(a.CLAUDE_CODE_RELAUNCH_HOME_TRUST??"");if(!r)return!1;let e=O()==="windows"?process.ppid:process.pid;if(Number(r[1])!==e)return!1;if(!Zpe(we(),o()))return!1;let t=await Fl(e,{skipCache:!0});return t!==void 0&&t===r[2]}
export{bjr,IGo,OGo};
