// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{rL}from"/$bunfs/root/chunk-vw7x8ctj.js";class jBt{append(e){this._buffer=this._buffer?Buffer.concat([this._buffer,e]):e}readMessage(){if(!this._buffer)return null;let e=this._buffer.indexOf(`
`);if(e===-1)return null;let r=this._buffer.toString("utf8",0,e).replace(/\r$/,"");return this._buffer=this._buffer.subarray(e+1),t1r(r)}clear(){this._buffer=void 0}}function t1r(e){return rL.parse(JSON.parse(e))}function Cmn(e){return JSON.stringify(e)+`
`}
export{jBt,t1r,Cmn};
