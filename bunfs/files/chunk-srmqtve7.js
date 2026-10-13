// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Jt}from"/$bunfs/root/chunk-dn762950.js";var uf={output_tokens_details:{thinking_tokens:0},input_tokens:0,cache_creation_input_tokens:0,cache_read_input_tokens:0,output_tokens:0,server_tool_use:{web_search_requests:0,web_fetch_requests:0},service_tier:"standard",cache_creation:{ephemeral_1h_input_tokens:0,ephemeral_5m_input_tokens:0},inference_geo:"",iterations:[],speed:"standard",fallback_credit:null};function XY(e){if(e==null||typeof e.input_tokens!=="number")return;if(typeof e.output_tokens==="number")return e;return e.output_tokens==null?{...e,output_tokens:0}:void 0}import{randomUUID as s}from"crypto";function l8e(e){return e.send_now===!0&&e.cancel_queued!==!0}function zAo(e){return typeof e==="string"&&e.startsWith("late-bind-interrupt-")}var u=8;function eOs(e){let n=e.for_user_message_uuids;if(e.cancel_queued===!0||!Array.isArray(n)||n.length===0||n.length>u)return;let t=new Set;for(let o of n){let r=Jt(o);if(r===null)return;t.add(r.toLowerCase())}return{names:(o)=>o.some((r)=>t.has(r.toLowerCase()))}}function RZ(e,n){return{type:"control_response",response:{subtype:"success",request_id:e,response:n}}}function QF(e,n,t){return{type:"control_response",response:{subtype:"error",request_id:e,error:n,...t!==void 0&&{error_code:t}}}}function T0(e,n,t){return{type:"result",subtype:"error_during_execution",duration_ms:0,duration_api_ms:0,is_error:!0,num_turns:0,stop_reason:null,session_id:e,total_cost_usd:0,usage:uf,modelUsage:{},permission_denials:[],uuid:s(),errors:n,...t!==void 0&&{user_message_uuid:t}}}
export{uf,XY,l8e,zAo,eOs,RZ,QF,T0};
