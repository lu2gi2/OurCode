// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{lt,B}from"/$bunfs/root/chunk-ctt36bn8.js";import{P,y,N}from"/$bunfs/root/chunk-j9ep7722.js";N();var mEe="continue";function F2o(t,e,n){if(n&&e===mEe&&t===mEe+"/")return"/";if(e.startsWith("/")&&t.length===mEe.length+e.length+1&&t.startsWith(mEe+e))return t.slice(mEe.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new lt(()=>new o);function i(){return l.of(B())}function JXn(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function U2o(){return i().inFlight}function vWr(t){i().inFlight=t}function B2o(){JXn(null),i().inFlight=null}function j2o(){let[t,e]=y(()=>i().lastResult);return P(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{mEe,F2o,JXn,U2o,vWr,B2o,j2o};
