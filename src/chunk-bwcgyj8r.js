import { Age, _Yr, bYr, SYr } from "/$bunfs/root/chunk-gs3dthpm.js";
import { D1r } from "/$bunfs/root/chunk-q0azyh3r.js";
import { tVr } from "/$bunfs/root/chunk-r818b0nx.js";
import { j4o } from "/$bunfs/root/chunk-wqf8j4w7.js";
function I9n(t) {
    t((e)=>{
        if (e.ultrareviewOverageConfirmed) {
            return e;
        }
        return {
            ...e,
            ultrareviewOverageConfirmed: true
        };
    });
}
function s(t) {
    return (e)=>t((o)=>({
                ...o,
                pendingMemoryUpdates: [
                    ...o.pendingMemoryUpdates,
                    e
                ]
            }));
}
function n(t) {
    t((e)=>{
        if (e.prResolvedThisSession) {
            return e;
        }
        return {
            ...e,
            prResolvedThisSession: true
        };
    });
}
function O9n(t) {
    let e = (o)=>t((r)=>{
            let toolPermissionContext = typeof o === "function" ? o(r.toolPermissionContext) : o;
            if (r.toolPermissionContext === toolPermissionContext) {
                return r;
            }
            return {
                ...r,
                toolPermissionContext
            };
        });
    return {
        setToolPermissionContext: e,
        setSessionToolPermissionContext: e
    };
}
function CQe(t, e) {
    return {
        markPrResolvedThisSession: ()=>n(e),
        isUltrareviewOverageConfirmed: ()=>t().ultrareviewOverageConfirmed,
        markUltrareviewOverageConfirmed: ()=>I9n(e),
        getAdvisorSetting: ()=>t().advisorModel,
        getMcp: ()=>t().mcp,
        getProactivityLevel: ()=>t().proactivityLevel,
        getWebBrowser: ()=>t().webBrowser,
        ...O9n(e),
        setWebBrowserSlice: tVr(e),
        setArtifactReadVersion: _Yr(e),
        getArtifactReadObservation: Age(t),
        artifactRegistries: D1r(t, e),
        setArtifactContractTarget: bYr(e),
        getArtifactContractTarget: SYr(t),
        enqueuePendingMemoryUpdate: s(e),
        agentLifecycle: j4o(t, e)
    };
}
export { I9n, O9n, CQe };
