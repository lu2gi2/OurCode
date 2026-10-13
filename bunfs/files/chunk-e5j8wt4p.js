// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{w}from"/$bunfs/root/chunk-4d2n28cn.js";import{Pmt}from"/$bunfs/root/chunk-x3w6yqn3.js";import{Imt}from"/$bunfs/root/chunk-k31bs98s.js";import{WWn,zWn}from"/$bunfs/root/chunk-qk3m4n8a.js";import{s,n}from"/$bunfs/root/chunk-8524cxt8.js";import{fj}from"/$bunfs/root/chunk-0nsjam2f.js";import{K0}from"/$bunfs/root/chunk-4b1qzs5x.js";import{e,r}from"/$bunfs/root/chunk-vybw69ke.js";function nk(d){let t=Pmt(),m=Imt()?.isQueued===!0;return!d&&!t&&!m&&K0()}function HXe(d){let l=w(25),{tone:t,text:m,detail:c,subLines:T,linkify:P}=d,o=P?fj:n,h=d.state==="live"&&!d.reducedMotion?zWn[d.frame%zWn.length]:WWn,a=t==="gold"?"warning":t==="red"?"error":void 0,i=t==="dim";const R=t==="red"?"error:":t==="gold"?"warning:":void 0;let u;if(l[0]!==a||l[1]!==i||l[2]!==h||l[3]!==R)u=r(n,{"aria-hidden":i,"aria-label":R,italic:!0,color:a,dimColor:i,children:[h," "]}),l[0]=a,l[1]=i,l[2]=h,l[3]=R,l[4]=u;else u=l[4];let g;if(l[5]!==o||l[6]!==m)g=e(o,{children:m}),l[5]=o,l[6]=m,l[7]=g;else g=l[7];let y;if(l[8]!==o||l[9]!==c)y=c!==void 0&&r(n,{dimColor:!0,children:[" \xB7 ",e(o,{children:c})]}),l[8]=o,l[9]=c,l[10]=y;else y=l[10];let C;if(l[11]!==a||l[12]!==i||l[13]!==g||l[14]!==y)C=r(n,{italic:!0,color:a,dimColor:i,children:[g,y]}),l[11]=a,l[12]=i,l[13]=g,l[14]=y,l[15]=C;else C=l[15];let b;if(l[16]!==o||l[17]!==T)b=T?.map((S,V)=>e(n,{dimColor:!0,children:e(o,{children:S})},V)),l[16]=o,l[17]=T,l[18]=b;else b=l[18];let x;if(l[19]!==C||l[20]!==b)x=r(s,{flexDirection:"column",flexGrow:1,children:[C,b]}),l[19]=C,l[20]=b,l[21]=x;else x=l[21];let Q;if(l[22]!==u||l[23]!==x)Q=r(s,{flexDirection:"row",children:[u,x]}),l[22]=u,l[23]=x,l[24]=Q;else Q=l[24];return Q}
export{HXe,nk};
