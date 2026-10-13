// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
function Ga(e,t){return{code:"InvalidArgument",argument:e,...t!==void 0&&{reason:t}}}function Pon(e="unknown",t){return{code:"Unavailable",failureClass:e,...t?.key!==void 0&&{key:t.key},...t?.retryAfterMs!==void 0&&{retryAfterMs:t.retryAfterMs},...t?.telemetryCode!==void 0&&{telemetryCode:t.telemetryCode}}}var Ion="OtherNames";var Oon="LeafMoved",aMs="HardeningUnavailable",JCo="RemoteLink",lMs="AsideStranded";var exr="Unsupported";function _pt(e){return R8e(e)&&e.code==="Failed"&&e.telemetryCode===exr}var n="ByteViewUnsupported";function ODt(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===n}var r="StoreFenced";function QCo(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===r}var cMs="SourceNotRegular",dMs="SourceTooLarge",uMs="SourceShared",pMs="SourceOutside";var o=new Set(["InvalidArgument","NotFound","AlreadyExists","PreconditionFailed","LeaseHeld","Unavailable","Failed","ScopeNotFound"]);function R8e(e){return typeof e==="object"&&e!==null&&"code"in e&&typeof e.code==="string"&&o.has(e.code)}var ZCo="AbsentParent";function x8e(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===ZCo}function Vm(e){if(x8e(e))return"ENOENT";return"telemetryCode"in e?e.telemetryCode:void 0}var fMs="TooLarge";function gt(e){return e.code+("failureClass"in e?` ${e.failureClass}`:"")+("telemetryCode"in e&&e.telemetryCode?` ${e.telemetryCode}`:"")+("cause"in e&&e.cause?`: ${i(e.cause)}`:"")}function i(e){return e instanceof Error?e.message:String(e)}
export{Ga,Pon,Ion,Oon,aMs,JCo,lMs,exr,_pt,ODt,QCo,cMs,dMs,uMs,pMs,R8e,ZCo,x8e,Vm,fMs,gt};
