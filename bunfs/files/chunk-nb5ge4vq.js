// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{FZt,nSe,kOt,_R,ce}from"/$bunfs/root/chunk-0ycjphb5.js";import{Lo}from"/$bunfs/root/chunk-9dn6gg6j.js";import{S_,fe,Tn}from"/$bunfs/root/chunk-gc7ea4xt.js";var nbe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function hs(n,i){let o=Lo(),r=o.includes("userSettings")&&S_();for(let e=o.length-1;e>=0;e--){let t=o[e];if(t==="projectSettings"&&r)continue;let s=fe(t)?.[n];if(s!==void 0)return{value:s,source:t}}if(nbe.includes(n)){let e=n,t=ce()[e];if(t!==void 0&&t!==_R[e]){let s=FZt(e)?kOt(e,t):nSe(e,t);if(s!==void 0)return{value:s,source:"legacyGlobalConfig"}}}return{value:i,source:"default"}}function kV(n,i,o){Tn("userSettings",{[n]:i},void 0,o)}
export{nbe,hs,kV};
