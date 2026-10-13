// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{un}from"/$bunfs/root/chunk-bd805sh6.js";import{ge}from"/$bunfs/root/chunk-sawpz2mr.js";import{cOe,dw}from"/$bunfs/root/chunk-46as0mn8.js";import{Kqe}from"/$bunfs/root/chunk-yq147k4z.js";var o="\x1B]8;;",p="\x07";function cw(e,r,t){let s=r===void 0?void 0:un(r),n=s===void 0||vBr(e,s);if(!(n&&(t?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(cOe()??!0)||(t?.supportsHyperlinks??dw()))){let i=t?.shownUrlStart??"";if(r!==void 0&&!n)return`${r}${i} (${e})`;return`${i}${e}`}let u=(((t?.themeName)?Kqe(t.themeName):!1)?ge.blue:ge.blueBright)(r??e);return`${o}${e}${p}${u}${o}${p}`}function vBr(e,r){return r===e||e===`http://${r}`||e===`https://${r}`}
export{cw,vBr};
