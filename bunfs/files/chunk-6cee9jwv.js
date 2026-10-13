// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{NDt,ixr,lxr,$Dt,O8e,cxr,FDt,dxr,mwe,FZ,wBe,Upe,$se,D8e,oU}from"/$bunfs/root/chunk-ctt36bn8.js";import{Awe,oT}from"/$bunfs/root/chunk-xgw72tt1.js";var v=Object.prototype,d=v.hasOwnProperty;function g(r,t,e){var o=r[t];if(!(d.call(r,t)&&Awe(o,e))||e===void 0&&!(t in r))FZ(r,t,e)}var q5e=g;function P(r,t,e,o){if(!oT(r))return r;t=Upe(t,r);var i=-1,m=t.length,s=m-1,n=r;while(n!=null&&++i<m){var f=$se(t[i]),a=e;if(f==="__proto__"||f==="constructor"||f==="prototype")return r;if(i!=s){var p=n[f];if(a=o?o(p,f,n):void 0,a===void 0)a=oT(p)?p:O8e(t[i+1])?[]:{}}q5e(n,f,a),n=n[f]}return r}var u=P;function x(r,t,e){var o=-1,i=t.length,m={};while(++o<i){var s=t[o],n=D8e(r,s);if(e(n,s))u(m,Upe(s,r),n)}return m}var ZCr=x;var O=dxr(Object.getPrototypeOf,Object),Krn=O;var I=Object.getOwnPropertySymbols,h=!I?lxr:function(r){var t=[];while(r)NDt(t,$Dt(r)),r=Krn(r);return t},eRr=h;function K(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var l=K;var c=Object.prototype,A=c.hasOwnProperty;function S(r){if(!oT(r))return l(r);var t=FDt(r),e=[];for(var o in r)if(!(o=="constructor"&&(t||!A.call(r,o))))e.push(o);return e}var y=S;function w(r){return mwe(r)?cxr(r,!0):y(r)}var VUe=w;function b(r){return ixr(r,VUe,eRr)}var Yrn=b;function _(r,t){if(r==null)return{};var e=wBe(Yrn(r),function(o){return[o]});return t=oU(t),ZCr(r,e,function(o,i){return t(o,i[0])})}var vo=_;
export{q5e,ZCr,Krn,eRr,VUe,Yrn,vo};
