// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{k,Ae,ce}from"/$bunfs/root/chunk-0ycjphb5.js";import{b,pe}from"/$bunfs/root/chunk-wkmq9ht0.js";import{i}from"/$bunfs/root/chunk-kgp7t7yx.js";import{Fm}from"/$bunfs/root/chunk-52bcnmbr.js";import{fe,Tn}from"/$bunfs/root/chunk-gc7ea4xt.js";import{kj}from"/$bunfs/root/chunk-dbx8jhe9.js";function aMr(u,{requireOnboarding:n=!0}={}){let o=ce();if(n&&!o.hasCompletedOnboarding||o.hasSeenAutoDefaultNudge||!k("tengu_maple_pier",!0))return null;let e=fe("userSettings")?.permissions?.defaultMode,t=["projectSettings","localSettings","flagSettings","policySettings"].some((r)=>fe(r)?.permissions?.defaultMode);if(e&&e!=="auto"&&!t&&kj(u))return e;return null}function lMr(u,n,o){if(ce().hasSeenAutoDefaultNudge)return;let e=Fm(n.current_mode);if(u==="shown"){i("tengu_auto_default_nudge_shown",{current_mode:pe(e),surface:b("ide")});return}let t=n.choice==="accept"?"accept":"decline";if(t==="accept")Tn("userSettings",{permissions:{defaultMode:"auto"}},void 0,o);Ae((r)=>r.hasSeenAutoDefaultNudge?r:{...r,hasSeenAutoDefaultNudge:!0},o),i("tengu_auto_default_nudge_resolved",{choice:b(t),outcome:t==="accept"?b("switched"):b("declined"),current_mode:pe(e),surface:b("ide")})}
export{aMr,lMr};
