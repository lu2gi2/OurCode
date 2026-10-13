// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ri,Te,P,en,N}from"/$bunfs/root/chunk-j9ep7722.js";import{w}from"/$bunfs/root/chunk-4d2n28cn.js";import{tx,V,Wo}from"/$bunfs/root/chunk-zby5bms5.js";N();function F(){return ri().get(process.stdout)?.invalidatePrevFrame()}function I(e){return e.activeOverlays.size>0}function K(e){return x(e.activeOverlays)}function M(e){return IYn(e.activeOverlays)}function j(e){for(const t of e.activeOverlays){if(u.has(t)){return!0}}return!1}function k(e){for(const t of e.activeOverlays){if(f.has(t)){return!0}}return!1}var R=new Set(["autocomplete"]),E=new Set(["above-prompt-input","above-prompt-select"]),u=new Set(["history-search"]),f=new Set(["elicitation","elicitation-url"]),vIe=2;function sa(e,t){let S=w(8),r=t===void 0?!0:t,n=Te(tx)?.setState,O,b;if(S[0]!==r||S[1]!==e||S[2]!==n)O=()=>{if(!r||!n){return}return n((c)=>{if(c.activeOverlays.has(e)){return c}let y=new Set(c.activeOverlays);return y.add(e),{...c,activeOverlays:y}}),()=>{n((v)=>{if(!v.activeOverlays.has(e)){return v}let A=new Set(v.activeOverlays);return A.delete(e),{...v,activeOverlays:A}})}},b=[e,r,n],S[0]=r,S[1]=e,S[2]=n,S[3]=O,S[4]=b;else O=S[3],b=S[4];P(O,b);let h,m;if(S[5]!==r)h=()=>{if(!r){return}return F},m=[r],S[5]=r,S[6]=h,S[7]=m;else h=S[6],m=S[7];en(h,m)}function w0r(){return V(I)}function x(e){for(let t of e)if(!E.has(t))return!0;return!1}function kdn(){return V(K)}function IYn(e){for(let t of e)if(!R.has(t))return!0;return!1}function C6(){return V(M)}function Fmt(){return Wo(j)??!1}function OYn(){return Wo(k)??!1}
export{vIe,sa,w0r,kdn,IYn,C6,Fmt,OYn};
