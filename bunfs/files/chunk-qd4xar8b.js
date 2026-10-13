// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ND,EW}from"/$bunfs/root/chunk-gc4z3rgw.js";import{w}from"/$bunfs/root/chunk-4d2n28cn.js";import{Jct,Gen}from"/$bunfs/root/chunk-6g4165br.js";import{s,n}from"/$bunfs/root/chunk-8524cxt8.js";import{Z,N}from"/$bunfs/root/chunk-j9ep7722.js";import{ma}from"/$bunfs/root/chunk-dzxgwxyz.js";import{G}from"/$bunfs/root/chunk-8eystn8t.js";import{e,r}from"/$bunfs/root/chunk-vybw69ke.js";import{te}from"/$bunfs/root/chunk-z5hwtxs9.js";import{S}from"/$bunfs/root/chunk-cj4xndke.js";var B="cyan_FOR_SUBAGENTS_ONLY";function VP(a){if(!a)return B;if(EW(a))return ND[a];return`ansi:${a}`}N();var _={keyCase:"lower"};function _ee(a){let o=w(19),{displayName:f,qualifier:k,count:M,addMargin:R,fallbackLabel:c,body:t}=a,h=M===void 0?1:M,D=R===void 0?!0:R,b=ma("app:toggleTranscript","Global","ctrl+o"),A;if(o[0]!==f||o[1]!==c)A=Jct(f)||c,o[0]=f,o[1]=c,o[2]=A;else A=o[2];let u=A,P;if(o[3]!==t)P=t?Gen(t):"",o[3]=t,o[4]=P;else P=o[4];let i=P;const g=D?1:0;let q;if(o[5]===S)q=r(n,{"aria-hidden":!0,children:[te.pointerSmall," "]}),o[5]=q;else q=o[5];const y=h===1?"Message":`${h} messages`,T=k?` (${k})`:"";let p;if(o[6]!==i)p=i?r(n,{italic:!0,children:[": ",i]}):"",o[6]=i,o[7]=p;else p=o[7];let l;if(o[8]!==b)l=e(G,{chord:b,action:"expand",parens:!0,format:_}),o[8]=b,o[9]=l;else l=o[9];let m;if(o[10]!==u||o[11]!==l||o[12]!==y||o[13]!==T||o[14]!==p)m=r(n,{dimColor:!0,children:[q,y," from @",u,T,p," ",l]}),o[10]=u,o[11]=l,o[12]=y,o[13]=T,o[14]=p,o[15]=m;else m=o[15];let v;if(o[16]!==m||o[17]!==g)v=e(s,{marginTop:g,children:m}),o[16]=m,o[17]=g,o[18]=v;else v=o[18];return v}
export{VP,_ee};
