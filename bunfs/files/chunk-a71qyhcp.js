// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Lt}from"/$bunfs/root/chunk-qch5xj2a.js";import{DN}from"/$bunfs/root/chunk-bd805sh6.js";import{w}from"/$bunfs/root/chunk-4d2n28cn.js";import{Nu}from"/$bunfs/root/chunk-223dyewd.js";import{s,n}from"/$bunfs/root/chunk-8524cxt8.js";import{ke}from"/$bunfs/root/chunk-8kbdmpwx.js";import{Fe}from"/$bunfs/root/chunk-rbj4n58t.js";import{pA,uie}from"/$bunfs/root/chunk-xr68kcbr.js";import{e,r}from"/$bunfs/root/chunk-vybw69ke.js";import{Qt}from"/$bunfs/root/chunk-cz7wtscb.js";import{S}from"/$bunfs/root/chunk-cj4xndke.js";var x=5,G=5;function fIe(b){let t=w(27),{output:m,fullOutput:p,elapsedTimeSeconds:i,totalLines:l,totalBytes:u,timeoutMs:o,verbose:a}=b,{columns:c}=ke(),z;if(t[0]!==c||t[1]!==m||t[2]!==a)z=a?null:v(m,c),t[0]=c,t[1]=m,t[2]=a,t[3]=z;else z=t[3];let g=z,A;if(t[4]!==p||t[5]!==g)A=g?g.text:DN(p.trim()),t[4]=p,t[5]=g,t[6]=A;else A=t[6];let M=A;if(!M){let d;if(t[7]===S)d=e(n,{dimColor:!0,children:"Running\u2026 "}),t[7]=d;else d=t[7];let f;if(t[8]!==i||t[9]!==o)f=e(Fe,{children:r(pA,{children:[d,e(uie,{elapsedTimeSeconds:i,timeoutMs:o})]})}),t[8]=i,t[9]=o,t[10]=f;else f=t[10];return f}let _=g?x:Lt(p,`
`)+1,E=(l?Math.max(0,l-_):0)+(g?.dropped??0),L="";if(u&&l)L=`~${l} lines`;else if(E>0)L=`+${E} lines`;let d;if(t[11]!==M)d=e(n,{dimColor:!0,children:M}),t[11]=M,t[12]=d;else d=t[12];let f;if(t[13]!==L)f=L?e(n,{dimColor:!0,children:L}):null,t[13]=L,t[14]=f;else f=t[14];let B;if(t[15]!==i||t[16]!==o)B=e(uie,{elapsedTimeSeconds:i,timeoutMs:o}),t[15]=i,t[16]=o,t[17]=B;else B=t[17];let O;if(t[18]!==u)O=u?e(n,{dimColor:!0,children:Qt(u)}):null,t[18]=u,t[19]=O;else O=t[19];let R;if(t[20]!==f||t[21]!==B||t[22]!==O)R=r(s,{flexDirection:"row",gap:1,children:[f,B,O]}),t[20]=f,t[21]=B,t[22]=O,t[23]=R;else R=t[23];let F;if(t[24]!==d||t[25]!==R)F=e(Fe,{children:e(pA,{children:r(s,{flexDirection:"column",children:[d,R]})})}),t[24]=d,t[25]=R,t[26]=F;else F=t[26];return F}function oDr({output:b,fullOutput:m,totalLines:p},i){if(!m.trim())return!1;return(p??0)>x||v(b,i).clipped}function v(b,m){let p=Math.max(1,m-G),i=DN(b.trim()).replace(/\r\n?/g,`
`).split(`
`).filter((a)=>a),l=[],u=0,o=i.length;while(o>0&&u<x){let a=i[--o],c=Nu(a,p,{hard:!0,trim:!1}).split(`
`),t=x-u;if(c.length>t)return l.unshift(c.slice(-t).join("").replace(/^ /,"")),{text:l.join(`
`),clipped:!0,dropped:o};l.unshift(a),u+=c.length}return{text:l.join(`
`),clipped:o>0,dropped:o}}
export{fIe,oDr};
