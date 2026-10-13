// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{eo}from"/$bunfs/root/chunk-ctt36bn8.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{Eq}from"/$bunfs/root/chunk-etbngzss.js";import{qn}from"/$bunfs/root/chunk-nj0630nv.js";function u(){if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)return!1;return!qn()}function UCs(){return a.CLAUDE_CODE_ENVIRONMENT_KIND==="byoc"&&!a.CLAUDE_CODE_BYOC_ENABLE_DATADOG}function l(){return a.CLAUDE_CODE_CUSTOM_OAUTH_URL!==void 0}function Fy(){return u()||eo()!==null||Eq()||l()}function BCs(){return u()||eo()!==null||l()}function W7(){return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL}function JV(){if(W7())return!1;return Eq()}import{sep as f}from"path";var awo=new Set([".git","hooks",".husky",".githooks","node_modules",".vscode",".idea","head","config","objects","refs",".claude","skills","commands","agents",".cargo",".devcontainer",".yarn",".mvn"]),mtn=/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/,lwo=new RegExp(mtn,"g");function ul(e){return c(e,!0)}function Kjn(e){return c(e,!1)}function c(e,o){let n=e.toLowerCase().replace(/\u0131/g,"i").replace(/\u017f/g,"s"),t=n.replace(lwo,"");return(o?t.replace(/:.*$/,""):t).replace(/[. ]+$/,"")||n}function cwo(e){return!1}function D8(e,o,n){let t=e.slice(o.length).split(f),i=t.length-1;for(let r=0;r<t.length;r++){let s=ul(t[r]);if(awo.has(s)||cwo(s))return!0;if(r===i&&n?.has(s))return!0}return!1}
export{UCs,Fy,BCs,W7,JV,awo,mtn,lwo,ul,Kjn,cwo,D8};
