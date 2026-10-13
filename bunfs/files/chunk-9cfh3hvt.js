// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{d}from"/$bunfs/root/chunk-wkmq9ht0.js";import{Ae,ce}from"/$bunfs/root/chunk-0ycjphb5.js";var p=["c4e-ultrareview","claude-design-command","default-permission-mode-config","desktop-app","desktop-contextual","desktop-ios-simulator","desktop-shortcut","focus-view","frontend-design-plugin","ide-upsell-external-terminal","install-github-app","install-slack-app","install-slack-app-mcp","memory-command","no-flicker","permissions","plugin-disuse-review","status-line","team-onboarding-share","voice-mode","web-setup-github","workflow-size-prompting","workflow-size-prompting-ambient","you-should-know-plugin",...[]];function u(t){return p.includes(t)}function n7e(t,o,n){let i=ce().numStartups;Ae((e)=>{let r=e.tipsHistory??{};if(r[t]===i)return e;let s=e.tipLifetimeShownCounts??{};return{...e,tipsHistory:{...r,[t]:i},tipLifetimeShownCounts:{...s,[t]:(s[t]??0)+1},...n!==void 0&&{tipsHistoryByCommand:{...e.tipsHistoryByCommand,[n]:{tipId:t,numStartups:i}}}}},o)}var g=100;function VOe(t){let o=ce(),n=o.tipsHistoryByCommand?.[t];if(typeof n!=="object"||n===null)return{};let i=o.numStartups-n.numStartups;if(!(i>=0))return{};return{via_tip:!0,tip_launches_ago:Math.min(i,g),...u(n.tipId)&&{tip_id:d(n.tipId)}}}function _X(t){return ce().tipLifetimeShownCounts?.[t]??0}function Z2o(t){return ce().pluginSuggestionShownCounts?.[t]??0}function Pj(t){let o=ce(),n=o.tipsHistory?.[t];if(!n)return 1/0;return o.numStartups-n}function eVo(t){return ce().pluginSuggestionDiscoverShownCounts?.[t]??0}function tVo(t,o){if(t.length===0)return;Ae((n)=>{let i=n.pluginSuggestionDiscoverShownCounts??{};if(t.every((r)=>(i[r]??0)>0))return n;let e={...i};for(let r of t)e[r]=(e[r]??0)+1;return{...n,pluginSuggestionDiscoverShownCounts:e}},o)}
export{n7e,VOe,_X,Z2o,Pj,eVo,tVo};
