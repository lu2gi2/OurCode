// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Va,ks}from"/$bunfs/root/chunk-xgw72tt1.js";import{gI,_ke,xet,qU,a2,Ex}from"/$bunfs/root/chunk-kasbfbhj.js";import{$s}from"/$bunfs/root/chunk-2d9a83dh.js";import{realpathSync as u}from"fs";var _Ee=(()=>{try{return u(process.cwd())}catch{return process.cwd()}})();function IJn(r,e){let n=gI(r),t=gI(e);if(qU(n)||qU(t))return!0;if(n.skipped!==t.skipped)return!0;return _ke(n,t)}function sze(r,e){if(ks(r)||Va(r))return[];let n=$s(r),t=n!==null&&n!==void 0?[n]:(()=>{let o=Ex(r);return o.length>0?o:[r]})();return e===void 0?t:t.filter((o)=>a2(o,e)!=="same")}function l7e(r,e){if(ks(r)||Va(r))return[];let n=$s(r),t=n!==null&&n!==void 0?[n]:Ex(r);return e===void 0?t:t.filter((s)=>a2(s,e)!=="same")}function QOe(r,e,n){if(e.length===0)return!1;if(!e.every((s)=>{let o=a2(r,s);if(o==="indeterminate")return!1;if(o==="same")return!0;return!IJn(s,r)}))return!1;if(n?.requireCovered===!0){let s=gI(r);if(qU(s))return!1;let o=(a)=>a.some((c)=>{let i=gI(c);if(qU(i))return!1;return xet(s,i)});return o(n.coveredWitnesses??e)||o(n.extraCoveredRoots??[])}return!0}
export{_Ee,IJn,sze,l7e,QOe};
