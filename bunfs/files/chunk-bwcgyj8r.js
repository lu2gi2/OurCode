// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Age,_Yr,bYr,SYr}from"/$bunfs/root/chunk-gs3dthpm.js";import{D1r}from"/$bunfs/root/chunk-q0azyh3r.js";import{tVr}from"/$bunfs/root/chunk-r818b0nx.js";import{j4o}from"/$bunfs/root/chunk-wqf8j4w7.js";function I9n(t){t((e)=>e.ultrareviewOverageConfirmed?e:{...e,ultrareviewOverageConfirmed:!0})}function s(t){return(e)=>t((o)=>({...o,pendingMemoryUpdates:[...o.pendingMemoryUpdates,e]}))}function n(t){t((e)=>e.prResolvedThisSession?e:{...e,prResolvedThisSession:!0})}function O9n(t){let e=(o)=>t((r)=>{let i=typeof o==="function"?o(r.toolPermissionContext):o;return r.toolPermissionContext===i?r:{...r,toolPermissionContext:i}});return{setToolPermissionContext:e,setSessionToolPermissionContext:e}}function CQe(t,e){return{markPrResolvedThisSession:()=>n(e),isUltrareviewOverageConfirmed:()=>t().ultrareviewOverageConfirmed,markUltrareviewOverageConfirmed:()=>I9n(e),getAdvisorSetting:()=>t().advisorModel,getMcp:()=>t().mcp,getProactivityLevel:()=>t().proactivityLevel,getWebBrowser:()=>t().webBrowser,...O9n(e),setWebBrowserSlice:tVr(e),setArtifactReadVersion:_Yr(e),getArtifactReadObservation:Age(t),artifactRegistries:D1r(t,e),setArtifactContractTarget:bYr(e),getArtifactContractTarget:SYr(t),enqueuePendingMemoryUpdate:s(e),agentLifecycle:j4o(t,e)}}
export{I9n,O9n,CQe};
