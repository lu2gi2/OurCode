// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{Ecr}from"/$bunfs/root/chunk-n4gsaesa.js";import{Kqe}from"/$bunfs/root/chunk-yq147k4z.js";import{Hdn}from"/$bunfs/root/chunk-rkw8s9xd.js";import{w}from"/$bunfs/root/chunk-4d2n28cn.js";import{Vmt}from"/$bunfs/root/chunk-vqyxznfw.js";import{P,y,N}from"/$bunfs/root/chunk-j9ep7722.js";import{gfe}from"/$bunfs/root/chunk-zckvn1wy.js";import{RVe,sB}from"/$bunfs/root/chunk-rk838m7w.js";import{e}from"/$bunfs/root/chunk-vybw69ke.js";import{Y_n,g_t,BWt}from"/$bunfs/root/chunk-gw1f0xa7.js";import{O}from"/$bunfs/root/chunk-79wfew46.js";import{S}from"/$bunfs/root/chunk-cj4xndke.js";N();var s={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function JDo(i,n,t){if(!t)return;let r;if(i==="auto"){if(n===void 0)return;r=n}else r=BWt(i);return Kqe(r)?s.light:s.dark}function l(){let t=w(4),[i,n]=y(Y_n),r,o;if(t[0]===S)r=()=>g_t(()=>n(Y_n())),o=[],t[0]=r,t[1]=o;else r=t[0],o=t[1];P(r,o);let m;if(t[2]!==i)m=JDo(Hdn(),i,Ecr()),t[2]=i,t[3]=m;else m=t[3];return m}function uKn(i){let m=w(9),{children:n,mouseTracking:t,killRing:r}=i,o=l(),c;if(m[0]!==n||m[1]!==r)c=e(Vmt,{handle:r,children:n}),m[0]=n,m[1]=r,m[2]=c;else c=m[2];let f=c;if(RVe()){let d;if(m[3]!==t)d=t??sB(),m[3]=t,m[4]=d;else d=m[4];let p;if(m[5]!==o||m[6]!==d||m[7]!==f)p=e(gfe,{mouseTracking:d,surface:o,children:f}),m[5]=o,m[6]=d,m[7]=f,m[8]=p;else p=m[8];return p}return f}function zUs(){if(O()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{JDo,uKn,zUs};
