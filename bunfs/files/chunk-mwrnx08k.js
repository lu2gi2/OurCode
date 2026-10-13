// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{w}from"/$bunfs/root/chunk-4d2n28cn.js";import{on,n}from"/$bunfs/root/chunk-8524cxt8.js";import{iye,QRn,yE,le,P,R,y,N}from"/$bunfs/root/chunk-j9ep7722.js";import{G}from"/$bunfs/root/chunk-8eystn8t.js";import{e}from"/$bunfs/root/chunk-vybw69ke.js";import{S}from"/$bunfs/root/chunk-cj4xndke.js";N();var g=2000,x=2000;function pie(i){let o=on(),[u,r]=y(null),t=R(null),c=R(null),l=R(null),a=R(0),s=R(!0),p=le(()=>{a.current+=1,l.current?.(),l.current=null,c.current=null,t.current?.(),t.current=null,r(null)},[]);P(()=>{if(p(),i!==null)QRn()},[i,p]),P(()=>(s.current=!0,()=>{s.current=!1,l.current?.(),l.current=null,c.current=null,t.current?.(),t.current=null}),[]);let b=le((d)=>{if(c.current===d)return;c.current=d,l.current?.(),l.current=o.setTimeout(()=>{l.current=null,c.current=null},g);let f=iye(),h=a.current;yE(d).then((C)=>{if(!s.current||h!==a.current)return;if(C)process.stdout.write(C);if(t.current?.(),t.current=null,r(f),f==="native")t.current=o.setTimeout(()=>{t.current=null,r(null)},x)})},[o]);return{copiedVia:u,copy:b,reset:p}}function E6(i){let u=w(2),{via:o}=i;if(o==="native"){let r;if(u[0]===S)r=e(n,{color:"success",children:"(Copied!)"}),u[0]=r;else r=u[0];return r}if(o===null){let r;if(u[1]===S)r=e(n,{dimColor:!0,children:e(G,{chord:"c",action:"copy",parens:!0})}),u[1]=r;else r=u[1];return r}return null}function k6(i){let u=w(2),{via:o}=i;if(o==="tmux-buffer"){let r;if(u[0]===S)r=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),u[0]=r;else r=u[0];return r}if(o==="osc52"){let r;if(u[1]===S)r=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),u[1]=r;else r=u[1];return r}return null}
export{pie,E6,k6};
