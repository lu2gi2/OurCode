// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Gr}from"/$bunfs/root/chunk-0ycjphb5.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{Y5e}from"/$bunfs/root/chunk-3yz9zdww.js";import{wo}from"/$bunfs/root/chunk-6s83kxfy.js";import{rt,hue}from"/$bunfs/root/chunk-xx1j2680.js";var Ugo=25000,Aws=` To read it anyway, up to what still fits in your context, call ${rt} again with ${hue}: true \u2014 only if you genuinely need all of it or the user asked for the whole file.`,Bgo=` Even with ${hue}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`,Cws=` ${hue} is not available where this read runs; read it in parts with offset and limit.`,jgo=128;class $de extends Error{tokenCount;maxTokens;constructor(e,t,r=""){super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`);this.tokenCount=e;this.maxTokens=t;this.name="MaxFileReadTokenExceededError"}}var n=new WeakMap;function Wgo(e,t){n.set(e,t)}function XFn(e){return n.get(e)}function i(){let e=a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;return}function qW(){let e=wo();return e.defaultFileReadingLimits??={maxSizeBytes:Y5e,maxTokens:i()??Ugo},e.defaultFileReadingLimits}function VYe(){return Gr("tengu_tab_read_sep",!1)}
export{Ugo,Aws,Bgo,Cws,jgo,$de,Wgo,XFn,qW,VYe};
