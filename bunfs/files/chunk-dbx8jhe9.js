// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{t}from"/$bunfs/root/chunk-bd805sh6.js";import{rM}from"/$bunfs/root/chunk-88awaqqw.js";import{I_,mD}from"/$bunfs/root/chunk-kasbfbhj.js";import{xE}from"/$bunfs/root/chunk-8fa0475h.js";function kj(e){let o=I_(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${mD()}`);return s}function A1t(e){return!!e.isBypassPermissionsModeAvailable&&!xE()}function C1t(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(A1t(e))return"bypassPermissions";if(kj(e))return"auto";return"default";case"bypassPermissions":if(kj(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function P1r(e,o,s){let n=C1t(e,o);return{nextMode:n,context:rM(e.mode,n,e,s)}}
export{kj,A1t,C1t,P1r};
