// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{b,d}from"/$bunfs/root/chunk-wkmq9ht0.js";import{i}from"/$bunfs/root/chunk-kgp7t7yx.js";import{sMe,z6,WG,bQn,SQn}from"/$bunfs/root/chunk-5hp2pp9y.js";var rMe={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function xWt(){return bQn()==="user"?o:t}function j_n(e){return z6()!=="unset"||SQn()||e}function W_n(){return z6()==="accepted"||SQn()}async function z_n(e){if(e==="accepted"&&WG())return"forbidden";let n=e==="accepted"?"accepted":z6()==="accepted"?"revoked":"declined";if(!await sMe(e))return"not_saved";return i("tengu_served_unattended_consent",{action:d(n),surface:b("cli")}),"saved"}
export{rMe,xWt,j_n,W_n,z_n};
