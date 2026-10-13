// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ea,Fn,k,g_,M6e,RY}from"/$bunfs/root/chunk-0ycjphb5.js";async function n(){try{return await g_("tengu_violin_strad")}catch{return!1}}function t(){try{return k("tengu_violin_strad",!1)}catch{return!1}}async function dR(){try{return await g_("tengu_violin_wood")}catch{return!1}}function xf(){try{return k("tengu_violin_wood",!1)}catch{return!1}}var a="tengu_violin_maple";async function APt(){try{return await dR()||await M6e(a)}catch{return!1}}function Pf(){try{return xf()||k(a,!1)}catch{return!1}}async function oN(){return await dR()&&await n()}function sF(){return xf()&&t()}function Ide(e){return e?null:"flag_off"}function qB(e){return Ide(e)===null}function IQt(){try{let{value:e,source:o}=Fn("tengu_violin_wood",!1);return e===!1&&RY(o)}catch{return!1}}function OQt(){return xf()&&INs("tengu_violin_wood")}async function Emo(){let e=performance.now();return await Ea().catch(()=>null),Math.round(performance.now()-e)}function INs(e){try{return RY(Fn(e,!1).source)}catch{return!1}}async function ONs(){try{return await g_("tengu_violin_amati")}catch{return!1}}function cSr(){try{return k("tengu_violin_amati",!1)}catch{return!1}}function MQt(){return xf()&&cSr()}async function CPt(){let[e,o]=await Promise.all([dR(),ONs()]);return e&&o}
export{dR,xf,APt,Pf,oN,sF,Ide,qB,IQt,OQt,Emo,INs,ONs,cSr,MQt,CPt};
