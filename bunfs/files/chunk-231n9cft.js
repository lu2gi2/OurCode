// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
function rdt(e,r,o){Object.defineProperty(e,r,{value:o,enumerable:!0,writable:!0,configurable:!0})}function Jen(e){if(typeof e!=="object"||e===null)return!1;let r=new Set([e]),o=[e];for(let t=o.pop();t!==void 0;t=o.pop()){if(Object.hasOwn(t,"__proto__"))return!0;for(let u of Array.isArray(t)?t:Object.values(t))if(typeof u==="object"&&u!==null&&!r.has(u))r.add(u),o.push(u)}return!1}function b3e(e){if(!Jen(e))return{stripped:e,count:0};let r=0,o=new Map,t=[],u=(n)=>{if(typeof n!=="object"||n===null)return n;let a=o.get(n);if(a===void 0)a=Array.isArray(n)?[]:{},o.set(n,a),t.push([n,a]);return a},p=u(e);for(let n=t.pop();n!==void 0;n=t.pop()){let[a,s]=n;if(Array.isArray(a)&&Array.isArray(s)){for(let d of a)s.push(u(d));continue}for(let[d,F]of Object.entries(a))if(d==="__proto__")r++;else Reflect.set(s,d,u(F))}return{stripped:p,count:r}}function _s(e,r){return Object.hasOwn(e,r)?e[r]:void 0}class l{reader=null;register(e){let r=this.reader;return this.reader=e,r}}var i=new l;function QAs(e){return i.register(e)}function b(){let e=i.reader;if(!e)return!0;try{let{value:r,source:o,defaultHost:t}=e("tengu_warm_sunrise",!0);return r!==!1||o!=="payload"||!t}catch{return!0}}function vjn(e){return e!=="-rm"||b()}class c{reader=null;register(e){let r=this.reader;return this.reader=e,r}}var f=new c;function ZAs(e){return f.register(e)}function eCs(){let e=f.reader;if(!e)return!0;try{let{value:r,source:o,defaultHost:t}=e("tengu_vast_puddle",!0);return r!==!1||o!=="payload"||!t}catch{return!0}}
export{rdt,Jen,b3e,_s,QAs,vjn,ZAs,eCs};
