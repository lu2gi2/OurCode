// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Lc}from"/$bunfs/root/chunk-wvwcne5b.js";import{on,Ya}from"/$bunfs/root/chunk-8524cxt8.js";import{le,P,Co,en,R,y,N}from"/$bunfs/root/chunk-j9ep7722.js";N();function Ze(e,o,r={}){let{context:t="Global",isActive:s=!0}=r,n=Lc(),[i]=y(()=>({handler:o}));en(()=>{i.handler=o}),P(()=>{if(!n||!s)return;return n.registerHandler({action:e,context:t,handler:()=>i.handler(),singleKey:!0})},[e,t,n,s,i])}function nn(e,o={}){let{context:r="Global",isActive:t=!0}=o,s=Lc(),[n]=y(()=>({handlers:e})),i=Object.keys(e).sort().join("|");en(()=>{n.handlers=e}),P(()=>{if(!s||!t)return;let c=Object.keys(n.handlers).map((u)=>s.registerHandler({action:u,context:r,handler:()=>n.handlers[u]?.(),singleKey:!0}));return()=>{for(let u of c)u()}},[r,i,s,t,n])}function wy(e,{isActive:o=!0}={}){let r=Lc(),[t]=y(()=>({handler:e}));en(()=>{t.handler=e}),P(()=>{if(!o||!r)return;return r.registerPreDispatch({handler:(s,n,i)=>t.handler(s,n,i)})},[o,r,t])}N();var a=800;function Jq(e,o,r,t=a){let s=on(),n=Ya(),i=R(0),c=R(void 0),u=Co(()=>e(!1)),l=le(()=>{if(c.current)c.current(),c.current=void 0},[]);return P(()=>()=>{if(c.current)l(),u()},[l]),le(()=>{let d=n();if(d-i.current<=t&&c.current!==void 0)l(),e(!1),o();else r?.(),e(!0),l(),c.current=s.setTimeout(()=>{e(!1),c.current=void 0},t);i.current=d},[e,o,r,l,s,n,t])}
export{Ze,nn,wy,Jq};
