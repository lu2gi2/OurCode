// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{b,d}from"/$bunfs/root/chunk-wkmq9ht0.js";import{ot,W}from"/$bunfs/root/chunk-m1rt7wpr.js";import{q}from"/$bunfs/root/chunk-ctt36bn8.js";import{g,m,f}from"/$bunfs/root/chunk-04d4ftnx.js";import{c}from"/$bunfs/root/chunk-etbngzss.js";import{Qi}from"/$bunfs/root/chunk-0ycjphb5.js";import{Kbn}from"/$bunfs/root/chunk-p77dbme5.js";var n=[{kind:"ios_app",found:(t)=>t.has_ios_app_project},{kind:"android_app",found:(t)=>t.has_android_app_project}];class i{#t=0;#o=0;#e=new Map;get started(){return this.#t>0}start(){this.#t++,this.#r(!1)}conversationReset(){if(this.started)this.#t++,this.#r(!1)}directoryChanged(){if(!this.started){this.start();return}this.#r(!1)}turnStarting(){let t=this.#t;if(!this.started||this.#o===t)return;if(this.#o=t,n.some(({kind:e})=>this.#e.get(e)!==t))this.#r(!0)}#r(t){let e=this.#t;Kbn({fresh:t}).then((r)=>{if(e!==this.#t||r===null)return;if(r.has_ios_app_project===null&&this.#e.get("ios_app")!==e)f("dev_intent_detect","project_unreadable",{kind:b("ios_app"),trigger:b("project_scan")});for(let{kind:o,found:s}of n)if(s(r)===!0&&this.#e.get(o)!==e)this.#e.set(o,e),this.#n(o)})}#n(t){try{Qi({type:"system",subtype:"dev_intent",kind:t,trigger:"project_scan"}),g("dev_intent_detect",{kind:d(t),trigger:b("project_scan")})}catch(e){c(ot(W(e),"project dev intent send failed")),m("dev_intent_detect","project_send_threw",{kind:d(t),trigger:b("project_scan")})}}}var $7e=new q(()=>new i);
export{$7e};
