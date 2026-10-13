// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ee}from"/$bunfs/root/chunk-499b1h1a.js";import{dp,hPe}from"/$bunfs/root/chunk-x47nahfr.js";import{Iio,ELe,SB,qmr}from"/$bunfs/root/chunk-0sswwkdg.js";function iSt(){let n=dp();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function Mer(){let n=Iio();return n&&!hPe()?{session_id:n}:{}}var u=3600000;function yvn(){let n=ee().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<u)return{};return{...iSt(),...Mer()}}function _vn(){ee().sessionHintsRefusedAt=Date.now()}var Her=["entrypoint","session_id","request_id"],d=new Set(Her);function bvn(n,s,i){let o=Her.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=SB(s);if(!ELe.test(e))return[];let r=o.filter((t)=>qmr(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!d.has(t)&&qmr(e,t))?[]:o}function y2t(n){return n.includes("entrypoint")||n.includes("session_id")}function N3o(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{iSt,Mer,yvn,_vn,Her,bvn,y2t,N3o};
