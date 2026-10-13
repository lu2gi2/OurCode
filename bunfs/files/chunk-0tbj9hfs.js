// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{g}from"/$bunfs/root/chunk-04d4ftnx.js";import{ee}from"/$bunfs/root/chunk-499b1h1a.js";import{oi}from"/$bunfs/root/chunk-pfdtn0nk.js";import{YYo}from"/$bunfs/root/chunk-6ym1026b.js";import{Q_t}from"/$bunfs/root/chunk-26atsz88.js";function i(t){return{arm(){ee().templateLanes[t]=!0},take(){let e=ee().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){ee().templateLanes[t]=!0}}}var o=i("prototypeArmed");function jjo(){o.arm(),g("prototype_started",{})}function Wjo(){return o.take()}function vBt(){o.giveBack()}function p(t,e){ee().templateLanes.boundSlugs.set(t,e)}function zjo(t){return ee().templateLanes.boundSlugs.get(t)}function Gjo(t,e){p(t,"prototype"),g("prototype_publish",{artifact_slug:Q_t(t),is_first_publish:e})}var s="<!-- dataviz-callout -->",n=()=>"",r;function Ujo(t){n=t}async function wBt(){let{SKILL_MD:t}=await import("/$bunfs/root/chunk-tymbqjjx.js");return r=YYo(oi(t).content.trimStart().replace(s,()=>n())),r}function Bjo(){return r}
export{Ujo,wBt,Bjo,jjo,Wjo,vBt,zjo,Gjo};
