// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{L}from"/$bunfs/root/chunk-6q0v3ahc.js";class Me extends Error{name="HooksError";telemetryMessage="function hooks error (message not reported: it may contain plugin details)";thrownName}function $go(r){if(!(r instanceof Error))return;let o=r.cause;return typeof o==="string"?o:void 0}class Nde extends Me{}var Fgo=(r,o)=>o===!0?new Nde(r):new Me(r);function flt(r,o="aborted"){let{reason:e}=r;return e instanceof Error?e.message:e===void 0?o:String(e)}var i$s=(r)=>`the answer is not plain data: ${r}`;function GFn(r,o){if(!L(r))throw new Me(`${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);return r}var kws=(r)=>typeof r==="object"&&r!==null&&("aborted"in r)&&typeof r.addEventListener==="function"&&typeof r.removeEventListener==="function";var VFn=(r)=>`next() argument is not plain data: ${r}`;var awr=(r,o)=>`${r}: arguments are not plain data: ${o}`;var Tws=(r)=>r.reason instanceof Nde;var qFn=(r)=>r.reason instanceof Nde?{isSettled:!0}:{};var a$s=(r)=>r instanceof Nde?new Me(r.message):r;function n(){let r=new WeakMap;return{mark(o,e){if(typeof o==="object"&&o!==null&&e!==void 0)r.set(o,e);return o},of(o){return typeof o==="object"&&o!==null?r.get(o):void 0}}}var t=n();var mlt=(r,o)=>t.mark(r,o);var eRe=(r)=>new Me(`${r}: its environment was unloaded`);var KFn=(r,o,e)=>({plugin:r,op:o,message:e});function l$s(r,o){let e=eRe(r);return mlt(e,KFn(r,o,e.message))}var YFn=(r)=>t.of(r);export{flt,i$s,Me,GFn,$go,kws,VFn,awr,Nde,Tws,Fgo,qFn,a$s,mlt,eRe,KFn,l$s,YFn};
