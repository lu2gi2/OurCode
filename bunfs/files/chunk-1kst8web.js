// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{un}from"/$bunfs/root/chunk-bd805sh6.js";import{Vdn}from"/$bunfs/root/chunk-066dgc2r.js";import{qt,en,N}from"/$bunfs/root/chunk-j9ep7722.js";import{w}from"/$bunfs/root/chunk-4d2n28cn.js";import{yA,kG}from"/$bunfs/root/chunk-8524cxt8.js";import{Y,e}from"/$bunfs/root/chunk-vybw69ke.js";N();import{PassThrough as u}from"stream";function m(){}var Omt=qt(!1);function qP(r){let i=w(5),{children:t}=r,{exit:n}=yA(),a,o;if(i[0]!==n)a=()=>{let d=setTimeout(n,0);return()=>clearTimeout(d)},o=[n],i[0]=n,i[1]=a,i[2]=o;else a=i[1],o=i[2];en(a,o);let c;if(i[3]!==t)c=e(Y,{children:t}),i[3]=t,i[4]=c;else c=i[4];return c}async function KP(r,t){r.render(e(qP,{children:t})),await r.waitUntilExit()}async function cje(r,{columns:t,storageV5:n}){let i="",a=!1,o=new u;if(t!==void 0)o.columns=t;return o.on("data",(c)=>{if(a)return;a=!0,i=c.toString()}),await(await kG(e(qP,{children:e(Omt.Provider,{value:!0,children:e(Vdn,{value:m,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function gdn(r,t){let n=await cje(r,t);return un(n)}
export{Omt,qP,KP,cje,gdn};
