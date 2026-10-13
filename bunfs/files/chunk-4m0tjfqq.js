// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{fr,PO,$e}from"/$bunfs/root/chunk-se8vehhp.js";import{j}from"/$bunfs/root/chunk-fcerdfs3.js";import{Df}from"/$bunfs/root/chunk-3fj60qgx.js";import{ff}from"/$bunfs/root/chunk-bd805sh6.js";import{Mg}from"/$bunfs/root/chunk-2d9a83dh.js";import{isAbsolute as g,sep as a}from"path";function l(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function ykt(e){return(n)=>e.hostFiles.realPath(ff.workspace(n===""||g(n)?n:l(n)),{native:!0})}function _T(e){return e===void 0?void 0:{hoverRestOn:j(),realPath:ykt(e)}}import{basename as c,dirname as u,isAbsolute as S,join as p,relative as m,sep as f}from"path";function Xp(e,n){if(!j()||n===void 0)return;if(!e.endsWith(".jsonl"))return;let t=u(e);if(u(t)!==Df())return;let r=c(t),o=c(e,".jsonl");if(e!==p(Df(),r,`${o}.jsonl`))return;let i=$e.transcript(r,o);return Mg(i)===void 0?{backend:n,key:i}:void 0}function gns(e,n){if(!j()||n===void 0)return;let t=m(Df(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||S(t))return;let r=t.split(f);if(e!==p(Df(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let i=o.slice(6,-6),d=r.slice(3,-1);if(!PO([r[0],r[1],i])||d.length>0&&!PO(d))return;let s=$e.transcript(r[0],r[1],i,d.length>0?d:void 0);return Mg(s)===void 0?{backend:n,key:s}:void 0}function uW(e){if(!j()||e===void 0)return;return{backend:e,transcriptKey:$e.transcript,isKeySegment:fr,realWorkspacePath:ykt(e)}}function pv(e){return e===void 0?void 0:{source:e,hoverRestOn:j()}}
export{ykt,_T,Xp,gns,uW,pv};
