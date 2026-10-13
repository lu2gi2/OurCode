// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{w}from"/$bunfs/root/chunk-4d2n28cn.js";import{vZ,BUe}from"/$bunfs/root/chunk-223dyewd.js";import{n}from"/$bunfs/root/chunk-8524cxt8.js";import{qt,Te,N}from"/$bunfs/root/chunk-j9ep7722.js";import{ma}from"/$bunfs/root/chunk-dzxgwxyz.js";import{G}from"/$bunfs/root/chunk-8eystn8t.js";import{SG}from"/$bunfs/root/chunk-gcvppz5v.js";import{Y,e,r}from"/$bunfs/root/chunk-vybw69ke.js";import{S}from"/$bunfs/root/chunk-cj4xndke.js";N();N();var c=qt(!1);function $mt(m){let i=w(2),{children:o}=m,a;if(i[0]!==o)a=e(c.Provider,{value:!0,children:o}),i[0]=o,i[1]=a;else a=i[1];return a}function wu(){let a=w(3),m=Te(c),o=Te(SG),i=ma("app:toggleTranscript","Global","ctrl+o");if(m||o){return null}let t;if(a[0]===S)t={keyCase:"lower"},a[0]=t;else t=a[0];let d;if(a[1]!==i)d=e(n,{dimColor:!0,children:e(G,{chord:i,action:"expand",parens:!0,format:t})}),a[1]=i,a[2]=d;else d=a[2];return d}function Sy(m){let l=w(11),{count:o,unit:i,expandable:a,hiddenChars:t}=m,d=i===void 0?"line":i,h=a===void 0?!1:a;if(o<=0){return null}let p;if(l[0]!==o||l[1]!==d)p=vZ(o,d),l[0]=o,l[1]=d,l[2]=p;else p=l[2];let s;if(l[3]!==t)s=t!==void 0&&t>=1000&&` (~${BUe(t)} KB)`,l[3]=t,l[4]=s;else s=l[4];let u;if(l[5]!==h)u=h&&r(Y,{children:[" ",e(wu,{})]}),l[5]=h,l[6]=u;else u=l[6];let b;if(l[7]!==p||l[8]!==s||l[9]!==u)b=r(n,{dimColor:!0,children:[p,s,u]}),l[7]=p,l[8]=s,l[9]=u,l[10]=b;else b=l[10];return b}
export{$mt,wu,Sy};
