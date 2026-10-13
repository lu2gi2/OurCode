// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{nt,zr}from"/$bunfs/root/chunk-8524cxt8.js";import{Oo}from"/$bunfs/root/chunk-tvwsdq27.js";import{R,y,N}from"/$bunfs/root/chunk-j9ep7722.js";import{Ma,ms}from"/$bunfs/root/chunk-wff73y2a.js";import{Ps}from"/$bunfs/root/chunk-kasbfbhj.js";import{Yo}from"/$bunfs/root/chunk-yphmh99q.js";N();function Jwe(d,{selfOpened:t,onCancelled:f}){let[l,r]=y(!1),n=R(!1),[i,p]=y(!1),e=R(!1),h=zr(t?Oo:null),u=!t||h,m=nt()?!0:!1,C=Ma(Oo),{refusedWithin:S,noteRefused:b}=ms();function E(){if(t&&(C()||S(Oo)))return b(),!0;return!1}let c=Yo(()=>{if(e.current)return;let o=n.current;n.current=!0;let a=f(o);if(a===void 0){e.current=!0,Ps(1);return}r(!0),s(a)},void 0,t&&!i);function x(){if(n.current||!u)return!1;return n.current=!0,r(!0),!0}function s(o){if(e.current)return;e.current=!0,p(!0),d(o)}return{choicesDisabled:!u&&!m,decided:l,take:x,refuseInput:E,settled:()=>e.current,handBack:s,exit:c,exitHintShowing:c.pending&&!i}}
export{Jwe};
