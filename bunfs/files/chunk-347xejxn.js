// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,B}from"/$bunfs/root/chunk-ctt36bn8.js";import{AsyncLocalStorage as t}from"async_hooks";class aSr{#e=!1;#n=!1;#t=!1;#s=!1;#r=!1;#a=!1;#i=!1;#o;#d=!1;get backgroundTasksDisabled(){return this.#e}get backgroundAgentLaunchDisabled(){return this.#n}get remoteAgentIsolationDisabled(){return this.#t}get unsandboxedCommandsDisabled(){return this.#s}get backgroundDeadlineDisabled(){return this.#r}get backgroundCompletionNoticeDisabled(){return this.#a}get messagingBeyondOwnAgentsDisabled(){return this.#i}get backgroundLaunchRule(){return this.#o}get foregroundAgentMovesAdmitted(){return this.#d}disableBackgroundTasks(){this.#e=!0}disableBackgroundAgentLaunch(){this.#n=!0}disableRemoteAgentIsolation(){this.#t=!0}installBackgroundLaunchRule(e){if(!this.#e)throw Error("A background launch rule needs background tasks disabled first");if(typeof e.parameterDescription!=="string")throw Error("A background launch rule needs parameterDescription to be a string");if(this.#o!==void 0)throw Error("A background launch rule is already installed");let o=e.admitsMoves===!0;if(o&&typeof e.admitMove!=="function")throw Error("A background launch rule that admits moves needs admitMove to be a function");this.#o=e,this.#d=o}disableBackgroundDeadline(){this.#r=!0}disableBackgroundCompletionNotice(){this.#a=!0}disableUnsandboxedCommands(){this.#s=!0}disableMessagingBeyondOwnAgents(){this.#i=!0}}var s=new q(()=>new aSr);function Qh(){return n.getStore()??s.of(B().host)}var n=new t;function CSs(e,o){return n.run(e,o)}
export{aSr,Qh,CSs};
