import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { xse } from "/$bunfs/root/chunk-1qq5kpcj.js";
class t {
    filterPolicy = undefined;
    dropNotifier = undefined;
    senderDropWriter = undefined;
    malformedConfigReported = false;
    knownInboundRequestIds = new Set;
    knownOutboundRequestIds = new Set;
    automatedOutboundRequestIds = new Set;
    deviceOutboundRequestIds = new Set;
    elicitationOutboundRequestIds = new Set;
    hostAskOutboundRequestIds = new Set;
    resolvedPromptRequestIds = new Set;
    recentDropEventIds = new Set;
    commandDropNoticeWindow = {
        start: 0,
        count: 0
    };
    messageDropNoticeWindow = {
        start: 0,
        count: 0
    };
    reportedStrayDropCodes = new Set;
    reportedCloudWorkerCodes = new Set;
    clearWindowsForTesting() {
        this.knownInboundRequestIds.clear();
        this.knownOutboundRequestIds.clear();
        this.automatedOutboundRequestIds.clear();
        this.deviceOutboundRequestIds.clear();
        this.elicitationOutboundRequestIds.clear();
        this.hostAskOutboundRequestIds.clear();
        this.resolvedPromptRequestIds.clear();
        this.recentDropEventIds.clear();
        this.commandDropNoticeWindow.start = 0;
        this.commandDropNoticeWindow.count = 0;
        this.messageDropNoticeWindow.start = 0;
        this.messageDropNoticeWindow.count = 0;
    }
    resetForTesting() {
        this.filterPolicy = undefined;
        this.dropNotifier = undefined;
        this.senderDropWriter = undefined;
        this.malformedConfigReported = false;
        this.clearWindowsForTesting();
        this.reportedStrayDropCodes.clear();
        this.reportedCloudWorkerCodes.clear();
    }
}
class r {
    outboundPeers = new Set;
    outboundPosts = new Set;
    subscriberStarted = false;
    subscriberStopping = false;
    liveSocket = null;
    enqueuePeerMessage = null;
    getCurrentMode = null;
    enqueueReceiveNotice = null;
    connectFailureStreak = null;
    outageWakeSent = false;
    identity = null;
    identityResolved = null;
    identityFailedClosed = null;
}
class o {
    held = new Map;
    settled = [];
    reporter = undefined;
    sessionId = undefined;
    resetForTesting() {
        this.held.clear();
        this.settled.length = 0;
        this.reporter = undefined;
        this.sessionId = undefined;
    }
}
class s {
    checkouts = null;
    baseRefs = null;
    onMetadataChanged = null;
    lastEmittedBranches = {};
    reset() {
        this.checkouts = null;
        this.baseRefs = null;
        this.onMetadataChanged = null;
        this.lastEmittedBranches = {};
    }
}
class i {
    attestation = new t;
    replHandle = null;
    sdkHostedHandle = null;
    projectFilesDoor = null;
    supervisedBridgeSession = null;
    peerIdentityKey = null;
    walkCredentialKey = null;
    retiredHandles = new WeakSet;
    lastReportedPermissionMode = undefined;
    lastKnownPermissionMode = undefined;
    lastReportedEffort = undefined;
    lastKnownEffort = undefined;
    lastReportedModel = undefined;
    lastKnownModel = undefined;
    contextUsageMirror = undefined;
    lastReportedArtifacts = undefined;
    lastKnownArtifacts = undefined;
    artifactsEgressSuppressed = undefined;
    lastReportedCrossSessionInbound = undefined;
    lastKnownCrossSessionInbound = undefined;
    lastKnownPostTurnSummary = undefined;
    remoteEgressSuppressed = null;
    lastRateLimitMirror = undefined;
    dropSenderWriterByHandle = new WeakMap;
    antproto = new r;
    bridgeStateFramesGate = undefined;
    cseShimGate = undefined;
    placeholderWriteChain = Promise.resolve();
    placeholderSweepStarted = false;
    rcActiveImpressionRecorded = false;
    verboseRcActive = undefined;
    teleportedSessionIds = new Set;
    nameTagWriteChain = Promise.resolve();
    latestAppliedName = new Map;
    connectTimeName = new Map;
    diagnosticPolicyKick = undefined;
    remoteControlLockReason = undefined;
    uploadLimitTold = undefined;
    uploadResends = {
        underWay: 0,
        lastFailedAtMs: undefined
    };
    imageScaleLock = xse();
    historySpoolDir = null;
    historyPrefetchEntries = new Map;
    repoCheckouts = new s;
    inboundReadReceipts = new o;
}
const $Ao = new q(()=>new i);
function no() {
    return $Ao.of(B().host);
}
function cDt(e) {
    if (!e.startsWith("cse_")) {
        return e;
    }
    return `session_${e.slice(4)}`;
}
const d = /^[a-zA-Z0-9_-]+$/;
function rh(e, n) {
    if (!G1(e)) {
        throw Error(`Invalid ${n}: contains unsafe characters`);
    }
    return e;
}
function G1(e) {
    return e !== "" && d.test(e);
}
function son(e) {
    return G1(e) && !e.startsWith("-");
}
function FAo(e) {
    no().cseShimGate = e;
}
function nu(e) {
    if (!e.startsWith("cse_")) {
        return e;
    }
    let cseShimGate = no().cseShimGate;
    if (cseShimGate && !cseShimGate()) {
        return e;
    }
    return cDt(e);
}
function ion(e) {
    return `remote-${e.slice(-8)}`;
}
function Gl(e) {
    if (!e.startsWith("session_")) {
        return e;
    }
    return `cse_${e.slice(8)}`;
}
function aon(e, n) {
    if (e.startsWith("cse_")) {
        return Gl(n);
    }
    return nu(n);
}
function ar(e) {
    return e.replace(/^(?:session|cse)_/, "");
}
function Sq(e) {
    return (e.startsWith("session_") || e.startsWith("cse_")) && G1(e) && ar(e) !== "";
}
export { $Ao, no, cDt, rh, G1, son, FAo, nu, ion, Gl, aon, ar, Sq };
