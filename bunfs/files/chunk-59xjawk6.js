// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ce}from"/$bunfs/root/chunk-ctt36bn8.js";import{Ru}from"/$bunfs/root/chunk-k5fhce8z.js";function Ws(e){return e==="completed"||e==="failed"||e==="killed"}import{randomBytes as i}from"crypto";var l=new Set(["local_agent","remote_agent","in_process_teammate","local_workflow"]);function k$(e){return Object.values(e).some(Ant)}function DRn(e){return Object.values(e).some((t)=>Ant(t)&&t.status!=="paused"&&!(t.type==="in_process_teammate"&&t.identity?.resumableAgentId===void 0)&&!(t.type==="remote_agent"&&(t.ultraplanPhase==="needs_input"||t.ultraplanPhase==="plan_ready"||t.isUltraplan&&t.restoredOnResume)))}function Ant(e){return l.has(e.type)&&!Ws(e.status)&&!(e.type==="in_process_teammate"&&e.isIdle)&&!(e.type==="remote_agent"&&e.isLongRunning)}function S7r(e){return Object.values(e).some(Glr)}function Glr(e){return e.type==="local_bash"&&!Ws(e.status)}var r={local_bash:"b",local_agent:"a",remote_agent:"r",in_process_teammate:"t",local_workflow:"w",monitor_mcp:"m",monitor_ws:"s",mcp_task:"k",dream:"d",auto_mode_scan:"e",local_memory_import:"n"},n="0123456789abcdefghijklmnopqrstuvwxyz";function LRn(e,t){let s=r[e];return s!==void 0&&t.length===9&&t.startsWith(s)&&t.slice(s.length).split("").every((a)=>n.includes(a))}function hE(e){let t=r[e]??"x",s=i(8),a=t;for(let o=0;o<8;o++)a+=n[s[o]%n.length];return a}function t_(e,t,s,a){return{id:e,type:t,status:"pending",description:s,toolUseId:a,startTime:Date.now(),...!Ce()&&{outputFile:Ru(e)},outputOffset:0,notified:!1}}
export{Ws,k$,DRn,Ant,S7r,Glr,LRn,hE,t_};
