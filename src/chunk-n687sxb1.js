import { sSn, iSn, aSn, hzt, yzt, _zt as artifactAssetReadHumanConsentSlugs, bzt, lSn, cSn, dSn, uSn, pSn, fSn, j7e } from "/$bunfs/root/chunk-cq89jyhh.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { wY } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ic } from "/$bunfs/root/chunk-4r6b8efh.js";
import { Akt, drt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { eEn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Aun } from "/$bunfs/root/chunk-caz28a6f.js";
import { OQe } from "/$bunfs/root/chunk-h1yzmkkb.js";
function ev() {
    let e = import.meta.require("/$bunfs/root/chunk-7a0n75yh.js");
    let mode = e.isTeammate() && e.isPlanModeRequired() ? "plan" : "default";
    return {
        sessionNoticesPoll: {
            pendingDeliveryUuids: []
        },
        settings: ft(),
        tasks: {},
        transcripts: {},
        runningSubagents: 0,
        agentNameRegistry: new Map,
        sendMessagePins: {},
        agentTypesInvokedThisSession: new Set,
        verbose: false,
        showMessageTimestamps: false,
        mainLoopModel: null,
        mainLoopModelForSession: null,
        isBriefOnly: false,
        slackTagConnected: false,
        briefTranscript: false,
        replBridgeEnabled: false,
        replBridgeExplicit: false,
        replBridgeOutboundOnly: false,
        replBridgeSessionActive: false,
        replBridgeSkipNextArchive: false,
        replBridgeSessionGroupingId: undefined,
        toolPermissionContext: {
            ...Ic(),
            mode
        },
        attentionBudget: eEn,
        proactivityLevel: Akt,
        agent: undefined,
        agentDefinitions: {
            activeAgents: [],
            allAgents: []
        },
        fileHistory: {
            snapshots: [],
            trackedFiles: new Set,
            snapshotSequence: 0
        },
        attribution: drt(),
        mcp: {
            clientsInitialized: false,
            clients: [],
            tools: [],
            commands: [],
            resources: {},
            resourceTemplates: {},
            suppressedClaudeAiConnectors: [],
            pluginReconnectKey: 0
        },
        plugins: {
            enabled: [],
            disabled: [],
            commands: [],
            errors: [],
            warnings: [],
            installationStatus: {
                marketplaces: [],
                plugins: []
            },
            needsRefresh: false
        },
        todos: {},
        queuedRemoteNotifications: {
            pending: [],
            drainedIds: [],
            nudge: null,
            readsThisTurn: [],
            readsDroppedThisTurn: 0,
            unfinishedReads: [],
            nudgeHeldUntil: {
                request: 0,
                cut: 0
            }
        },
        prResolvedThisSession: false,
        frameUrls: {},
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
        ultrareviewOverageConfirmed: false,
        thinkingEnabled: wY(),
        promptSuggestionEnabled: Aun(),
        awaySummaryEnabled: OQe(),
        displayedMessageContent: {},
        inbox: {
            messages: []
        },
        pendingMemoryUpdates: [],
        pendingWorkerRequest: null,
        pendingSandboxRequest: null,
        promptSuggestion: {
            status: "empty"
        },
        taskSummary: null,
        initialMessage: null,
        sessionEffort: {
            kind: "inherit"
        },
        settingsEffortTable: {
            default: undefined,
            legacyUserEffort: undefined,
            byModel: {}
        },
        ultracode: undefined,
        cacheMissAckedAtOutputTokens: -1,
        fastMode: false,
        storedImagePaths: new Map,
        imageDescriptions: new Map,
        classifierApprovals: {
            approvals: new Map,
            checking: new Set
        },
        teammateColors: {
            assignments: new Map,
            index: 0
        },
        webBrowser: import.meta.require("/$bunfs/root/chunk-cza8w560.js").getDefaultWebBrowserState()
    };
}
export { ev };
