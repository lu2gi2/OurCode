// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{we}from"/$bunfs/root/chunk-ctt36bn8.js";import{On}from"/$bunfs/root/chunk-xgw72tt1.js";import{Ae,ce}from"/$bunfs/root/chunk-0ycjphb5.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{Md}from"/$bunfs/root/chunk-3yz9zdww.js";import{VSe,ur}from"/$bunfs/root/chunk-2d9a83dh.js";import{C5e,x5e}from"/$bunfs/root/chunk-2321ytcf.js";import{realpath as u}from"fs/promises";async function IMo(e){try{let o=await C5e();if(!o){t("Not in a GitHub repository, skipping path mapping update");return}let r=we(),s=ur(r)??r,i;try{i=On(await u(s))}catch{i=s}let n=o.toLowerCase(),p=ce().githubRepoPaths?.[n]??[];if(p[0]===i){t(`Path ${i} already tracked for repo ${n}`);return}let f=p.filter((c)=>c!==i),h=[i,...f];await Ae((c)=>({...c,githubRepoPaths:{...c.githubRepoPaths,[n]:h}}),e),t(`Added ${i} to tracked paths for repo ${n}`)}catch(o){t(`Error updating repo path mapping: ${o}`)}}function Iin(e){let o=ce(),r=e.toLowerCase();return o.githubRepoPaths?.[r]??[]}async function Oin(e){let o=await Promise.all(e.map(Md));return e.filter((r,a)=>o[a])}async function IIr(e,o){try{let r=await VSe(e);if(!r)return!1;let a=x5e(r);if(!a)return!1;return a.toLowerCase()===o.toLowerCase()}catch{return!1}}function OIr(e,o,r){let a=ce(),s=e.toLowerCase(),i=a.githubRepoPaths?.[s]??[],n=i.filter((p)=>p!==o);if(n.length===i.length)return;let g={...a.githubRepoPaths};if(n.length===0)delete g[s];else g[s]=n;Ae((p)=>({...p,githubRepoPaths:g}),r),t(`Removed ${o} from tracked paths for repo ${s}`)}
export{IMo,Iin,Oin,IIr,OIr};
