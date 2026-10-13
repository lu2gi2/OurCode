// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{hUe}from"/$bunfs/root/chunk-qk3m4n8a.js";class o{converted=new WeakMap;lookup(e){return this.converted.get(e)}remember(e,t){this.converted.set(e,t)}reset(){this.converted=new WeakMap}}var n=new o;function kM(e){let t=n.lookup(e);if(t)return t;let r=hUe(e,{unrepresentable:"throw"});return n.remember(e,r),r}var Tqe="attached:",Aqe="created:";function Cqe(e){return e.startsWith("created:")}var hW="opened:";function ice(e){return e.startsWith("attached:")||e.startsWith("created:")||e.startsWith(hW)}function TM(e){return Object.entries(e).filter(([t])=>!t.startsWith(hW))}function xIn(e){return{url:e.url,title:e.title,favicon:e.favicon,kind:"frame",updated_at:new Date(e.updatedAt).toISOString()}}
export{kM,Tqe,Aqe,Cqe,hW,ice,TM,xIn};
