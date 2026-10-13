// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Xe,Op,jn}from"/$bunfs/root/chunk-ctt36bn8.js";import{Ta}from"/$bunfs/root/chunk-nj0630nv.js";import{wt,Mn,kr,FT,Nt}from"/$bunfs/root/chunk-0ycjphb5.js";import{SI,yT}from"/$bunfs/root/chunk-kasbfbhj.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function fyt(){return wt()&&Mn()?.billingType!=="usage_based"&&Ta()&&Op()&&!jn()&&!Nt()}function LWe(e){return fyt()&&SI(e)&&e.rateLimitType==="five_hour"}var r=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function uhn(e){return fyt()&&SI(e)&&e.rateLimitType!==void 0&&r.includes(e.rateLimitType)}function NWe(){switch(kr()){case"pro":return"pro";case"max":switch(FT()){case"default_claude_max_5x":return"max_5x";case"default_claude_max_20x":return"max_20x";default:return"max_other"}default:return"other"}}function $Qe(){yT({agentId:Xe(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{fyt,LWe,uhn,NWe,$Qe};
