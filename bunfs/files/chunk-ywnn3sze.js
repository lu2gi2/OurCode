// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{mr}from"/$bunfs/root/chunk-6kc68p18.js";import{a}from"/$bunfs/root/chunk-dp4xqs6t.js";import{Qh}from"/$bunfs/root/chunk-347xejxn.js";function Cd(){return Qh().backgroundTasksDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||mr()}function EPt(){let n=Qh();return n.backgroundTasksDisabled&&n.backgroundLaunchRule===void 0||n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||mr()}function e7(){return Cd()||Qh().backgroundAgentLaunchDisabled}function zat(){let n=Qh();if(!n.foregroundAgentMovesAdmitted)return e7();return n.backgroundAgentLaunchDisabled||a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS||mr()}function ASs(){return Qh().backgroundLaunchRule!==void 0&&!EPt()}
export{Cd,EPt,e7,zat,ASs};
