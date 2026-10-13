// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ri,Te,YDe,N}from"/$bunfs/root/chunk-j9ep7722.js";import{ad,Zm,eFt,kU}from"/$bunfs/root/chunk-066dgc2r.js";import{C$t}from"/$bunfs/root/chunk-4gn50gyk.js";import{w}from"/$bunfs/root/chunk-4d2n28cn.js";import{e}from"/$bunfs/root/chunk-vybw69ke.js";N();function gfe(J){let u=w(16),{children:d,mouseTracking:x,surface:c}=J,a=x===void 0?"full":x,L=Te(Zm),t=Te(kU),r=Te(eFt),v,F;if(u[0]!==r||u[1]!==c||u[2]!==t)v=()=>{if(!t||!c){return}let A=ri().get(process.stdout);let D=r.set("surface",c);if(!A?.keepForNextFrame(D))t(D);return()=>{let M=r.reset("surface");if(!A?.keepForNextFrame(M))t(M)}},F=[t,r,c],u[0]=r,u[1]=c,u[2]=t,u[3]=v,u[4]=F;else v=u[3],F=u[4];YDe(v,F);let P,C;if(u[5]!==r||u[6]!==a||u[7]!==t)P=()=>{let n=ri().get(process.stdout);if(!t){return}let b=r.set("altScreen")+r.set("mouse",a)+(n?.nativeCursorSeq??"");if(!n?.keepForNextFrame(b))t(b);return n?.setAltScreenActive(!0,a),()=>{let O=n?.setAltScreenActive(!1)??"";n?.clearTextSelection();let Q=r.reset("mouse");let q=r.reset("altScreen");let z=q!==""&&!n?.hasUnmounted;let V=z?r.reassert("extendedKeys"):"";let X=z?n?.nativeCursorSeq??"":"";t(O+Q+q+V+X)}},C=[t,r,a],u[5]=r,u[6]=a,u[7]=t,u[8]=P,u[9]=C;else P=u[8],C=u[9];YDe(P,C);const k=L?.rows??24,p=a==="full";let f;if(u[10]!==d||u[11]!==p)f=e(C$t,{value:p,children:d}),u[10]=d,u[11]=p,u[12]=f;else f=u[12];let W;if(u[13]!==k||u[14]!==f)W=e(ad,{flexDirection:"column",height:k,width:"100%",flexShrink:0,children:f}),u[13]=k,u[14]=f,u[15]=W;else W=u[15];return W}
export{gfe};
