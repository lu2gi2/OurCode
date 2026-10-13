// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{PQt}from"/$bunfs/root/chunk-t16p0qst.js";import{Da}from"/$bunfs/root/chunk-6dwnw6av.js";import{C,Le}from"/$bunfs/root/chunk-cj4xndke.js";var u=C(function(n){Object.defineProperty(n,"__esModule",{value:!0});n.getMachineId=void 0;var r=Le("fs"),i=PQt(),t=Da();async function c(){try{return(await r.promises.readFile("/etc/hostid",{encoding:"utf8"})).trim()}catch(e){t.diag.debug(`error reading machine id: ${e}`)}try{return(await i.execAsync("kenv -q smbios.system.uuid")).stdout.trim()}catch(e){t.diag.debug(`error reading machine id: ${e}`)}return}n.getMachineId=c});export default u();
