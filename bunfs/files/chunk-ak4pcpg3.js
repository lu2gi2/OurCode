// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{MTe}from"/$bunfs/root/chunk-qwvy7ma3.js";function ov(e){let s=e.trim();if(!s.startsWith("/"))return null;let{name:t,args:n}=MTe(s);if(!t)return null;let r="(MCP)";if(n===r)return{commandName:`${t} ${r}`,args:"",isMcp:!0};if(n.startsWith(r)&&/\s/.test(n.charAt(r.length)))return{commandName:`${t} ${r}`,args:n.slice(r.length).trimStart(),isMcp:!0};return{commandName:t,args:n,isMcp:!1}}function gEe(e,s){if(!e.subcommands)return;let t=s.trimStart(),n=t.search(/\s/),r=n===-1?t:t.slice(0,n),m=r?e.subcommands[r.toLowerCase()]:void 0;if(m===void 0)return;let a=n===-1?"":t.slice(n+1).trim();if(e.subcommandsBareOnly&&a!=="")return;return{targetName:m,consumedToken:r,remainingArgs:a}}
export{ov,gEe};
