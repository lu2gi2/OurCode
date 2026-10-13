// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{ej,LO}from"/$bunfs/root/chunk-bd805sh6.js";import{Gy}from"/$bunfs/root/chunk-x47nahfr.js";function Ldo(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":case"attachedFolder":return!0}}function F4e(e){if(e.loadedFrom==="syncedSkills")return!Cyr();return Ldo(e)}function Cyr(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||Gy()}function $Ln(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function $Xt(e){return{description:K4(e.description),argumentHint:FLn(e.argumentHint),whenToUse:FLn(e.whenToUse),argumentNames:e.argumentNames.map(K4)}}function qgs(e){return{...$Xt(e),displayName:FLn(e.displayName),argumentHint:e.argumentHint===void 0?void 0:i(e.argumentHint),fallback:void 0}}function FLn(e){return e===void 0?void 0:K4(e)}function K4(e){return ej(i(e))}function i(e){return LO(e," ")}function ULn(e){return ej(e.replace(/[\p{Cc}\p{Cs}]/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{Ldo,F4e,Cyr,$Ln,$Xt,qgs,FLn,K4,ULn};
