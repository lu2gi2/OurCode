// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ne}from"/$bunfs/root/chunk-j27d47mr.js";import{i}from"/$bunfs/root/chunk-kgp7t7yx.js";import{uon}from"/$bunfs/root/chunk-craerjpn.js";import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{Npe}from"/$bunfs/root/chunk-24agvrd9.js";import{Zu,mm}from"/$bunfs/root/chunk-peahjaep.js";import{n2o}from"/$bunfs/root/chunk-mqqkgppx.js";import{openSync as a}from"fs";import{ReadStream as s}from"tty";function p(){if(process.stdin.isTTY)return{kind:"stdin"};if(Ne(!1))return{kind:"unavailable",reason:"ci"};if(uon()==="mcp")return{kind:"unavailable",reason:"mcp"};try{let n=a("/dev/tty","r"),e=new s(n);return Npe(e),e.on("error",(r)=>{i("tengu_tty_stream_error",Zu(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,{kind:"override",stream:e}}catch(n){return t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),{kind:"unavailable",reason:"tty_unavailable"}}}class o{input=null;get(){return this.input??=p()}reset(){this.input=null}}var VQe=new o;function dx(n=!1){n2o();let e=VQe.get(),r={exitOnCtrlC:n};if(e.kind==="override")r.stdin=e.stream;return r.isScreenReaderEnabled=mm(),r}
export{VQe,dx};
