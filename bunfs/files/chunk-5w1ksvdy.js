// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{$u}from"/$bunfs/root/chunk-dp4xqs6t.js";import{$p}from"/$bunfs/root/chunk-9xenmz7v.js";import{QJt,aY}from"/$bunfs/root/chunk-4n16n64p.js";import{ty}from"/$bunfs/root/chunk-6dwnw6av.js";import{Se}from"/$bunfs/root/chunk-cj4xndke.js";var o=Se(ty(),1);import{readdir as c,stat as p}from"fs/promises";import{join as a,sep as f}from"path";function s5(){if(!$u())return!1;let r=QJt()+f;return process.execPath.startsWith(r)}function uu(r={}){return E4(H0e(r))}function H0e(r={}){if(!r.pinToCurrentBinary&&s5()){let t=zqe();return{cmd:t,prefixArgs:[],target:t}}if($u())return{cmd:process.execPath,prefixArgs:[],target:process.execPath};let e=process.argv[1];if(!e)return{cmd:process.execPath,prefixArgs:[],target:process.execPath};return{cmd:process.execPath,prefixArgs:[e],target:e}}function zqe(){return a(aY(),"claude")}function E4(r){let e=$p();if(e.length===0||r.cmd===e[0])return r;return{cmd:e[0],prefixArgs:[...e.slice(1),r.cmd,...r.prefixArgs],target:r.target}}async function tAt(){let r=QJt(),e;try{e=await c(r)}catch{return null}let t=e.filter((n)=>!/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n)&&o.valid(n)).sort(o.rcompare);for(let n of t){let i=a(r,n);try{let s=await p(i);if(s.isFile()&&s.size>0)return i}catch{}}return null}
export{s5,uu,H0e,zqe,E4,tAt};
