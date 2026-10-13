// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{l}from"/$bunfs/root/chunk-m1rt7wpr.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{k}from"/$bunfs/root/chunk-0ycjphb5.js";import{l$e,RQt}from"/$bunfs/root/chunk-xpqgtv5j.js";import{pbe}from"/$bunfs/root/chunk-5s4qvyjz.js";import{TFt}from"/$bunfs/root/chunk-mm2yesqa.js";import{Mto,Ni}from"/$bunfs/root/chunk-qwvy7ma3.js";function RLr(){if(!Mto())return"off";try{return k("tengu_vast_tulip",!1)===!0?"enforce":"observe"}catch{return t("tool host attestation: reading tengu_vast_tulip threw; observing",{level:"warn"}),"observe"}}function s(e){let o=pbe(),{status:r,meetsLevel:n,configException:i}=RQt(e,o,{isCloudWorker:!1});return{status:r,verdict:!o.enforce?"not_policed":n?"pass":i?"config_exception":"below_floor"}}function NIe(e){let o=RLr();return o==="off"?void 0:{mode:o,...s(l$e(e))}}function Ije(e){return e?.mode==="enforce"&&e.verdict==="below_floor"}function Sun(){let e=NIe("UNSPECIFIED");return{attestation:e,heldBack:Ije(e)}}function rFo(e){try{e?.(TFt,Ni["repository_trust.served_calls.unattested"])}catch(o){t(`[remote-tools] the notice sink threw on ${TFt}: ${l(o)}`,{level:"error"})}}
export{RLr,NIe,Ije,Sun,rFo};
