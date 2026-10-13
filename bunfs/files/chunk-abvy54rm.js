// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ke}from"/$bunfs/root/chunk-8kbdmpwx.js";import{_,X}from"/$bunfs/root/chunk-bd805sh6.js";import{M0r}from"/$bunfs/root/chunk-4nfvaqps.js";import{hr}from"/$bunfs/root/chunk-rkw8s9xd.js";import{w}from"/$bunfs/root/chunk-4d2n28cn.js";import{n,Do}from"/$bunfs/root/chunk-8524cxt8.js";import{qt,Te,Z,N}from"/$bunfs/root/chunk-j9ep7722.js";import{Fe}from"/$bunfs/root/chunk-rbj4n58t.js";import{SG}from"/$bunfs/root/chunk-gcvppz5v.js";import{e}from"/$bunfs/root/chunk-vybw69ke.js";import{cw}from"/$bunfs/root/chunk-4p1f2ppy.js";import{f7r}from"/$bunfs/root/chunk-dmmzcg0b.js";N();N();N();var c=qt(!1);function A4n(r){let s=w(2),{children:t}=r,o;if(s[0]!==t)o=e(c.Provider,{value:!0,children:t}),s[0]=t,s[1]=o;else o=s[1];return o}function u(){return Te(c)}function P(r){try{let t=X(r),s=_(t),o=r.replaceAll("\\/","/").replace(/\s+/g,""),m=s.replace(/\s+/g,"");if(o!==m)return r;return _(t,null,2)}catch{return r}}var A=1e4;function L(r){if(r.length>A)return r;return r.split(`
`).map(P).join(`
`)}var C=/https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,I=1e5;function C4n(r,t){if(r.length>I)return r;let s=(o)=>o.replace(C,(m)=>cw(m,void 0,{themeName:t}));if(!r.includes(M0r))return s(r);return r.split(`
`).map((o)=>o.includes(M0r)?o:s(o)).join(`
`)}function QR(r){let l=w(14),{content:t,verbose:s,isError:o,isWarning:m}=r,{columns:d}=ke(),[g]=hr(),G=u(),h=Te(SG),J=s||G,v;if(l[0]!==t||l[1]!==g)v=C4n(L(t),g),l[0]=t,l[1]=g,l[2]=v;else v=l[2];let a=v,R;fr:{if(J){let i;if(l[3]!==a)i=f(a),l[3]=a,l[4]=i;else i=l[4];R=i;break fr}let i;if(l[5]!==d||l[6]!==a||l[7]!==h)i=f(f7r(a,d,h)),l[5]=d,l[6]=a,l[7]=h,l[8]=i;else i=l[8];R=i}let x=R,b=o?"error":m?"warning":void 0,i;if(l[9]!==x)i=e(Do,{children:x}),l[9]=x,l[10]=i;else i=l[10];let E;if(l[11]!==b||l[12]!==i)E=e(Fe,{children:e(n,{color:b,children:i})}),l[11]=b,l[12]=i,l[13]=E;else E=l[13];return E}function f(r){return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g,"")}
export{A4n,C4n,QR};
