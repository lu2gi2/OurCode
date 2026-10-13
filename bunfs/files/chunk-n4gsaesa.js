// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ea,k}from"/$bunfs/root/chunk-0ycjphb5.js";import{Ne}from"/$bunfs/root/chunk-j27d47mr.js";import{a,Yn}from"/$bunfs/root/chunk-dp4xqs6t.js";import{Ca}from"/$bunfs/root/chunk-qch5xj2a.js";import{m0}from"/$bunfs/root/chunk-9dn6gg6j.js";function fkt(){return r()!==null}function r(){if(a.CLAUDE_CODE_DISABLE_AGENT_VIEW)return"is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";if(m0()?.settings.disableAgentView===!0)return"is disabled by the 'disableAgentView' setting";return null}function mw(){return!fkt()}async function mkt(e={}){if(m0()===null){let{getSettingsWithErrors:n}=await import("/$bunfs/root/chunk-5mcxa4c8.js");n()}if(e.kickGrowthBook!==!1)Ea().catch(()=>{})}function NYt(){return Yn.CLAUDE_CODE_FLEET_PAST_SESSIONS===!0||k("tengu_fleet_past_sessions",!1)}function EVe(){return mw()}function V3(){return!1}function kVe(){return k("tengu_amber_anchor",!1)}function D7r(){return k("tengu_copper_lantern",!1)}function i(){return k("tengu_quiet_harbor",!1)?"ask":"transient"}function vcr(){let e=process.env.CLAUDE_CODE_DAEMON_COLD_START;if(e==="transient"||e==="ask")return e;let n=m0()?.settings.daemonColdStart;if(n!==void 0)return n;return i()}function tm(){return kVe()?"daemon":"background service"}function Dle(){return Ca(tm())}function lye(e){return EVe()?` \u2014 run 'claude daemon ${e}'`:""}function TVe(e,n){let o=n??r()??"is not available in this environment";process.stderr.write(`'${e}' ${o}.
`),process.exit(1)}var oxn="CLAUDE_CODE_AGENT_VIEW_RELAUNCH";function Ecr(){return!1}function L7r(){return!!a.CLAUDE_AGENTS_SELECT}function N7r(){let e=Ne(process.env[oxn]);return delete process.env[oxn],e}
export{fkt,mw,mkt,NYt,EVe,V3,kVe,D7r,vcr,tm,Dle,lye,TVe,oxn,Ecr,L7r,N7r};
