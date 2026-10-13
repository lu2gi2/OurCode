// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{qpe}from"/$bunfs/root/chunk-ctt36bn8.js";import{tt,D_o,zZt,GEr,z6e}from"/$bunfs/root/chunk-0ycjphb5.js";import{c}from"/$bunfs/root/chunk-etbngzss.js";import{Dr,Ie}from"/$bunfs/root/chunk-nj0630nv.js";import{wwt}from"/$bunfs/root/chunk-kasbfbhj.js";function Spn(n){let e=wwt()?zZt():void 0,t=tt();if(n(),e===void 0||tt()===t)return;return D_o(e,{forContextWindow:!0}),e}function i(n,e,t){let o=import("/$bunfs/root/chunk-fzvjcdz9.js").then(({refreshBootstrapData:r})=>r(n,e,{renderedClientData:t})).then(()=>{},(r)=>c(r));return Fgt(o),o}function wpn(n,e,t){return i(n,e,t)}function oBo(n){Dr().fetchesClientData=n}function VNr(){return Dr().fetchesClientData&&Ie()==="firstParty"}function Fgt(n){let e=GEr(),t=Dr().providerCache.clientDataFetches;if(e!==void 0&&!(t.get(e)instanceof Promise)){let o=qpe();t.set(e,n),n.finally(()=>{if(t.get(e)===n)if(qpe()===o)t.set(e,"over");else t.delete(e)})}}function sBo(n){let e=Dr().providerCache.clientDataFetches;for(let[t,o]of e)if(o===n)e.set(t,"over")}function iBo(n,e){let t=GEr();if(t===void 0||!VNr()||z6e())return;let o=Dr().providerCache.clientDataFetches.get(t);if(o!==void 0)return o==="over"?void 0:o;return i(n,e,zZt())}
export{Spn,wpn,oBo,VNr,Fgt,sBo,iBo};
