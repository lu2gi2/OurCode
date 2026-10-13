// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{K,vxr,MBe}from"/$bunfs/root/chunk-ctt36bn8.js";import{J2n}from"/$bunfs/root/chunk-xgw72tt1.js";import{ve}from"/$bunfs/root/chunk-6kc68p18.js";import{join as i}from"path";function $L(){return MBe()??i(Pio(),K())}function Pio(){return i(ve(),"uploads")}function xHn(t,e){return`${t}-${u(e)}`}var s=/^[A-Za-z0-9_-]{8}-/;function o(t){return J2n(t.replace(/_+$/,""))}function u(t){return o(t)?t+"_":t}function Rus(t){let e=t.replace(s,"");if(e.endsWith("_")&&o(e))return e.slice(0,-1);return e||t}var c=1024;function xus(t,e){let n=vxr();if(!n.has(t)&&n.size>=c){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function A8t(t){return vxr().get(t)}
export{$L,Pio,xHn,Rus,xus,A8t};
