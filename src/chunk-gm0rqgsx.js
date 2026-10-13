import { tYo } from "/$bunfs/root/chunk-26atsz88.js";
import { eVr } from "/$bunfs/root/chunk-r818b0nx.js";
import { sSn, iSn, aSn, hzt, yzt, _zt as artifactAssetReadHumanConsentSlugs, bzt, lSn, cSn, dSn, uSn, pSn, fSn, j7e } from "/$bunfs/root/chunk-cq89jyhh.js";
const artifactReadVersions = Object.freeze({});
const artifactReadObservers = Object.freeze({});
const tSn = {
    bagelActive: undefined,
    bagelUrl: undefined,
    bagelPanelVisible: undefined,
    computerUseMcpState: undefined,
    denialTracking: undefined,
    activeGoal: undefined,
    remoteAutocompactState: undefined,
    queuedGoalOrigin: undefined,
    frameOpenFailedPath: null,
    frameOpenFailedSeen: false,
    artifactWatchApproved: false,
    artifactDbWriteApproved: false,
    artifactDbWriteHumanApproved: false,
    artifactDbReadConsentSlugs: iSn,
    artifactDbReadHumanConsentSlugs: aSn,
    artifactReadConsentSlugs: hzt,
    artifactConsentEpoch: 0,
    artifactAssetUploadConsentSlugs: lSn,
    artifactAssetUploadHumanConsentSlugs: cSn,
    artifactAssetReadConsentSlugs: yzt,
    artifactAssetReadHumanConsentSlugs,
    artifactOutsideOrgConsentSlugs: bzt,
    artifactHandlersReadConsentSlugs: dSn,
    artifactHandlersReadHumanConsentSlugs: uSn,
    artifactHandlersWriteConsentSlugs: pSn,
    artifactHandlersWriteHumanConsentSlugs: fSn,
    artifactRoomJoinConsentSlugs: j7e,
    artifactReadPageDataApproved: false,
    artifactReadPageDataHumanApproved: false,
    artifactPlanPublishConsentPaths: sSn,
    prResolvedThisSession: false,
    ultrareviewOverageConfirmed: false,
    artifactReadVersions,
    artifactReadObservers
};
const s = {
    artifactReadConsentSlugs: hzt,
    artifactAssetReadConsentSlugs: yzt,
    artifactAssetReadHumanConsentSlugs,
    artifactOutsideOrgConsentSlugs: bzt
};
const _ = Object.keys(s);
function nSn(e) {
    if (_.every((t)=>e[t] === s[t])) {
        return e;
    }
    return {
        ...e,
        ...s
    };
}
const T = Object.keys(tSn);
function rSn(e) {
    let e_webBrowser = e.webBrowser;
    let r = e_webBrowser.view === undefined && e_webBrowser.logs.length === 0 && e_webBrowser.unreadErrors === 0 && e_webBrowser.unreadWarnings === 0;
    let workshopTelemetry = tYo(e.workshopTelemetry);
    let S = Object.keys(e.artifactReadVersions ?? {}).length === 0 && Object.keys(e.artifactReadObservers ?? {}).length === 0;
    if (r && workshopTelemetry === e.workshopTelemetry && S && T.every((a)=>a === "artifactReadVersions" || a === "artifactReadObservers" || e[a] === tSn[a])) {
        return e;
    }
    return {
        ...e,
        ...tSn,
        ...workshopTelemetry !== e.workshopTelemetry && {
            workshopTelemetry
        },
        webBrowser: r ? e_webBrowser : {
            ...eVr(),
            cleanupRegistered: e_webBrowser.cleanupRegistered
        }
    };
}
function oSn(e) {
    if (e().webBrowser.view && typeof Bun !== "undefined" && "WebView" in Bun) {
        Bun.WebView.closeAll();
        return true;
    }
    return false;
}
export { tSn, nSn, rSn, oSn };
