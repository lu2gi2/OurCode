import { lt, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Kc } from "/$bunfs/root/chunk-svqqgdca.js";
import { randomUUID } from "crypto";
class u {
    #e = new Map;
    #n = new Set;
    note(e, r, n) {
        if (this.#n.has(e)) {
            return;
        }
        let s = this.#e.get(e);
        if (s !== undefined) {
            if (s.has(r)) {
                return;
            }
            if (s.size >= 4) {
                this.#t(e);
                return;
            }
            s.set(r, n);
            return;
        }
        if (this.#e.size >= 256) {
            let d = 128;
            for (let i of this.#e.keys()){
                this.#t(i);
                if (--d === 0) {
                    break;
                }
            }
        }
        this.#e.set(e, new Map([
            [
                r,
                n
            ]
        ]));
    }
    #t(e) {
        this.#e.delete(e);
        this.#n.add(e);
    }
    take(e, r) {
        let n = this.#e.get(e);
        this.#e.delete(e);
        return n?.get(r);
    }
}
class p {
    #e;
    #n;
    #t;
    #r = false;
    constructor(e, r, n){
        this.#e = e;
        this.#n = r;
        this.#t = n;
    }
    settle(e) {
        if (this.#r) {
            return;
        }
        this.#r = true;
        if (this.#e.get(this.#n) !== this.#t) {
            return;
        }
        this.#t.pending--;
        if (e.wasWatching || e.teardown !== "unsent") {
            this.#t.confirmed = true;
        }
        if (this.#t.pending === 0 && !this.#t.confirmed) {
            this.#e.delete(this.#n);
        }
    }
}
class c {
    #e = new Map;
    #n = 1;
    #t = new Set;
    #r = new u;
    isStopped(e) {
        return this.#e.has(e);
    }
    stoppedSlugs() {
        return this.#e.keys();
    }
    latchGeneration(e) {
        return this.#e.get(e)?.generation;
    }
    recordStop(e) {
        this.#t.delete(e);
        let r = this.#e.get(e);
        if (r === undefined) {
            r = {
                pending: 0,
                confirmed: false,
                generation: this.#n++
            };
            this.#e.set(e, r);
        } else {
            r.generation = this.#n++;
        }
        r.pending++;
        return new p(this.#e, e, r);
    }
    reaffirmStop(e) {
        this.#t.delete(e);
        let r = this.#e.get(e);
        if (r === undefined) {
            this.confirmStop(e);
        } else {
            r.confirmed = true;
        }
    }
    confirmStop(e) {
        this.#t.delete(e);
        let r = this.#e.get(e);
        if (r === undefined) {
            this.#e.set(e, {
                pending: 0,
                confirmed: true,
                generation: this.#n++
            });
        } else {
            r.confirmed = true;
            r.generation = this.#n++;
        }
    }
    noteRelatchAsk(e, r) {
        this.#r.note(e, r, this.latchGeneration(r));
    }
    takeRelatchAsk(e, r) {
        return this.#r.take(e, r);
    }
    clearByApprovedRewatch(e, r) {
        let n = this.#e.get(e);
        if (n === undefined || n.generation !== r) {
            return;
        }
        this.#e.delete(e);
        this.#t.add(e);
    }
    noteApprovedWatch(e) {
        if (!this.#e.has(e)) {
            this.#t.add(e);
        }
    }
    wasClearedByRewatch(e) {
        return this.#t.has(e) && !this.#e.has(e);
    }
}
const b = {
    baseMs: 1000,
    capMs: 30000,
    minUptimeMs: 60000,
    maxConsecutiveFailures: 10,
    spreadMinMs: 1000,
    spreadMaxMs: 20000,
    seedDeferMaxMs: 180000,
    idleTtlMs: 12600000,
    handshakeDeadlineMs: 150000,
    stallThresholdMs: 10000,
    stallMinMs: 30000,
    stallMaxMs: 60000,
    longStallMinMs: 120000,
    longStallMaxMs: 240000,
    maxStallMs: 1800000,
    stallOutJitterMs: 900000
};
const activityRefreshMs = 30000;
const activityEdgeDebounceMs = 100;
const g = {
    baseMs: 1000,
    capMs: 30000,
    minUptimeMs: 60000,
    stallThresholdMs: 10000,
    stallMinMs: 60000,
    stallMaxMs: 600000,
    maxConsecutiveRefusals: 10,
    handshakeDeadlineMs: 30000
};
const y = {
    ...g,
    presenceMs: 15000
};
const w = {
    ...g,
    keepaliveMs: 25000
};
function Z$(e, r) {
    return `${e ?? "main"}
${r}`;
}
function m(e) {
    let r = [
        ...e.codeliveredFollowups.values()
    ];
    e.codeliveredFollowups.clear();
    for (let { revoke } of r){
        revoke("reset");
    }
    e.coordinatorEditors.clear();
    e.editorSettleWatch?.();
    e.editorSettleWatch = null;
}
function OJt(e, r, n) {
    let current = a().current;
    if (current === undefined) {
        return;
    }
    for (let [d, i] of current.codeliveredFollowups){
        if (i.slug === e && i.agentId !== n?.exceptAgentId) {
            current.codeliveredFollowups.delete(d);
            i.revoke(r);
        }
    }
}
const max = 64;
const Nk = 10;
const iYe = 3 * Nk;
function A() {
    return {
        live: {
            handoffGeneration: 0,
            inFlightSubscribes: new Set,
            inFlightWiredIntent: new Set,
            retiredInFlightArms: new Set,
            armSettleWaiters: new Map,
            bootingWiredArms: new Map,
            pendingInFlightWiring: new Map,
            supervisors: new Map,
            heardVersions: new Map,
            heardAheadOfClockReported: false,
            commentCensus: new Map,
            pendingRegistrations: 0,
            rewatchTiming: {
                ...b
            },
            mostRecentPublishSlug: undefined,
            pendingSubagentArms: new Map,
            finishedSubagentAdopters: new Set,
            activitySenders: new Map,
            agentActivitySinks: new Map,
            activityRefreshTimer: undefined,
            activityOnsetTimer: undefined,
            activityClearTimer: undefined,
            activityRefreshMs,
            activityEdgeDebounceMs,
            activityUnsubscribe: undefined,
            disposed: false,
            activityOkReported: false,
            summonDeclared: new Map,
            summonArmOkReported: false,
            armOutcomes: new Map,
            mcpWriteSlugs: new Map,
            announcedArmFailures: new Set,
            nonEditorSlugs: new Set,
            repliesConsent: {
                outstanding: new Map,
                declined: new Map,
                approved: new Set
            },
            inFlightGenerations: new Map,
            lastArtifactToolCallAt: 0,
            endAll: undefined
        },
        liveDocWatch: {
            ownSeqs: new Map,
            rebases: new Map,
            pendingOwnEdits: new Map,
            watches: new Map,
            stopCounts: new Map,
            retiredWatches: new Map,
            arming: new Map,
            notLiveDoc: new Set,
            noticeBudgets: new Map,
            journalUnavailable: new Set,
            journalNegotiations: new Set,
            headSinks: new Map,
            stopAll: undefined,
            stop: undefined
        },
        liveEditOps: {
            lastOwnAck: new Map,
            unansweredKeys: new Map
        },
        liveReplicas: {
            replicas: new Map,
            unanswered: new Map,
            unavailable: new Map,
            tooOld: new Set,
            cloudUnserved: new Map,
            opening: new Map,
            binding: new Map,
            transport: undefined,
            engine: undefined,
            renderLevel: undefined,
            headMoved: undefined,
            workingCopyPath: undefined,
            settleFileChange: undefined,
            liveFileEnded: undefined,
            pushHeldSaves: undefined,
            heldSavesExitCleanup: undefined
        },
        autoReact: {
            artifacts: new Map,
            optIn: null,
            responderDispatchOptIn: null,
            userDisarmed: false,
            enabledMemo: null,
            unattendedReplies: new Map,
            postSeq: 0,
            probeSeq: 0,
            coalesceMsOverride: null,
            maxAutoTurnsOverride: null,
            confirmDwellMsOverride: null,
            readRetryDelaysMsOverride: null,
            fastAckFlagRefresh: null,
            fastAckFlagRefreshDeadlineMsOverride: null,
            fastAckSelectDeadlineMsOverride: null,
            pendingLedger: null,
            ledgerLastWritten: null,
            ledgerLastWriteAt: null,
            ledgerLastWriteSid: null,
            ledgerLastWriteAccount: undefined,
            ledgerFailureSeqAtWrite: null,
            ledgerDeferredSince: null,
            ledgerLastAppend: null,
            ledgerOwnerSid: null,
            ledgerRetiredSids: new Set,
            ledgerExitCleanup: undefined,
            ledgerExitReStamp: undefined,
            ledgerTimer: undefined,
            ledgerStorageV5: undefined,
            ledgerMaxAgeMsOverride: null,
            ledgerDebounceMsOverride: null,
            composeDeadlineMsOverride: null
        },
        summonSeeds: {
            claims: new Set,
            readClaims: new Set,
            graceMsOverride: null,
            open: new Map,
            settled: new Set
        },
        wakes: {
            wakes: new Map,
            stoppedSlugs: new Set,
            sweptSlugs: new Set,
            orphanedSweptSlugs: new Set,
            yieldedSlugs: new Map,
            takenFrom: new Map,
            latchChangedAt: new Map,
            liftedAtScanGeneration: new Map,
            humanTurnAtScanGeneration: null,
            pendingResumeDisclosure: new Set,
            scanGeneration: 0,
            slugEpochs: new Map,
            stopGenerations: new Map,
            resumeSights: new u
        },
        autoEditAttribution: {
            staged: new Map,
            chainPublishIds: new Set,
            chainPublishSlots: new Map
        },
        summonAnswers: new Map,
        pipelineReplyOrigins: new Map,
        summonStatus: {
            sidBySlug: new Map,
            seqBySid: new Map,
            routeAbsentSince: null,
            handOffs: new Map
        },
        noticeCoalesce: new Map,
        shareStatus: {
            bySlug: new Map,
            probeBoots: new Map,
            filePathToSlug: new Map,
            pendingNoticeSlugs: new Map,
            otherComments: new Map,
            otherCommentSeq: 0,
            noticeReadSights: {
                comments: new u,
                read_db: new u,
                read: new u,
                read_page_data: new u,
                verify: new u,
                webfetch: new u
            },
            shareProbesInFlight: new Map,
            capsReadsInFlight: new Map
        },
        noticeTap: undefined,
        templateLanes: {
            prototypeArmed: false,
            boundSlugs: new Map,
            heli: {
                armed: null,
                boards: new Map
            }
        },
        postedReplyIds: new Set,
        cleanReplyIds: new Set,
        frameRelay: {
            declinedUntil: new Map,
            tunnelDeclinedUntil: new Map,
            hopFailedUntil: new Map,
            servedUntil: new Map,
            vouched: new Set,
            directRefusedUntil: new Map,
            mcpAdvert: undefined,
            mcpAdvertAsked: undefined,
            mcpNarrower: new Set,
            botContextNoted: false
        },
        contentHostEgressDenied: new Set,
        contentHostEgressProbed: new Map,
        contentHostEgressUnanswered: new Set,
        contentHostEgressInFlight: new Map,
        sessionHintsRefusedAt: undefined,
        sandboxEgress: new Map,
        roster: undefined,
        rosterHeard: undefined,
        rosterWait: undefined,
        rosterWaitOver: false,
        assetsOnRoster: false,
        accountEpoch: 0,
        conversationEpoch: 0,
        ownPrincipalTokens: new Map,
        ownPrincipalTokenAccount: null,
        ownPrincipalTokenEpoch: 0,
        profileNames: new Map,
        profileIdsServed: new Map,
        profileIdsForgets: new Map,
        authoringProgress: {
            slotsByBlockIndex: new Map,
            failureReported: false
        },
        mintedStoredPageProbes: new WeakSet,
        strandedMints: new Map,
        reservedMints: new Set,
        mintedRoundTripPublishSignals: new WeakSet,
        durable: {
            rows: new Map,
            registrySink: null,
            registryPublished: "null",
            unwatchedSlugs: new Set,
            orphanTriggers: new Set,
            pendingRestoredRows: new Map,
            slugOps: new Map,
            stopLatches: new c,
            liveDocArmDeclined: new Set,
            liveDocRegrantSights: new u,
            firstWatchAskSights: new u,
            pendingOps: new Set,
            originatorRefused: false,
            subscribeForbidden: null,
            subscribeUnrelayed: null,
            watchUrlWithheld: null,
            watchUrlGranted: false,
            armsInFlight: new Map,
            armOutcomes: new Map,
            announcedArmFailures: new Set
        },
        room: {
            conns: new Map,
            nonces: new Map,
            endedOwners: new Map,
            timing: {
                ...y
            }
        },
        presence: {
            conns: new Map,
            declined: new Set,
            timing: {
                ...w
            }
        },
        commentMonitorIntent: {
            sid: null,
            bySlug: new Map,
            pendingRestore: null,
            lastWritten: null,
            wroteCurrentLine: false,
            failureSeqAtWrite: 0,
            storageV5: undefined,
            unsubscribeSwitch: undefined,
            unregisterExitDrain: undefined,
            transcriptPath: null,
            parked: new Map,
            writeChain: Promise.resolve(),
            owedLines: new Map,
            pendingLines: new Map,
            exitStamped: false,
            tornStops: new Set,
            forgottenAt: new Map,
            leftWith: null,
            unsubscribeMaterialized: undefined,
            earlySeed: undefined,
            onFile: false,
            adoptPendingFor: null
        },
        interactionSchemas: undefined,
        approvedRootBases: new Map,
        commentTargets: new Map,
        refusedPublishBodies: new Map,
        approvedSourcePins: new Map,
        verifiedAttachments: new Map,
        approvedCopySources: new Map,
        gatedThumbnailHrefs: new Map,
        approvalStashEvicted: false,
        publishObservationNonce: randomUUID(),
        consumedPublishApprovals: new Set,
        crashedPublishChecks: new Set,
        readDeliveries: new Map,
        pendingHandoverReads: new Map,
        frozenReadPageDataSchemaNames: undefined,
        frozenWatchRail: undefined,
        frozenArtifactTypes: undefined,
        frozenAssets: undefined,
        frozenCopyFrom: undefined,
        frozenHotUpdate: undefined,
        frozenPathPin: undefined,
        frozenPathPinAck: undefined,
        pathPinSeq: 0,
        pathPins: new Map,
        frozenDbStrReplace: undefined,
        frozenArtifactPins: undefined,
        frozenMultiFile: undefined,
        createdFromType: new Map,
        deferredSurface: new Map,
        remoteControlSkippedSlugs: new Set,
        typeInstanceFiles: new Map,
        typeCatalogVouch: new Map,
        typeDescriptions: new Map,
        attestedTypeArtifacts: new Map,
        typeCapabilityReads: new Map,
        verify: {
            lastPublish: undefined,
            reads: new Map
        },
        ownPublishedSlugs: new Map,
        ownCreatedSlugs: new Map,
        roomJoinArming: new Set,
        roomStoppedByUser: new Set,
        roomArmAsked: new Map,
        roomArmRefusedByUser: new Set,
        coordinatorEditors: new Map,
        editorSettleWatch: null,
        codeliveredFollowups: new Map,
        prReviewComposeLatch: null,
        whiteboardVariantLatch: null,
        liveEditGateLatch: null,
        livePathsGateLatch: null,
        toolsetLatch: null,
        resultNotes: {
            kindSaid: false,
            watchCodesSaid: new Set,
            previewedPaths: new Set,
            previewHintedPaths: new Set
        },
        inheritedTypeGrantLatch: null,
        routineRunTainted: false,
        routineTypeInstances: new Map,
        routineRelayNotCarried: null,
        routineRepublishedPaths: new Set,
        laneNoticeSlugs: new Map,
        commentReads: new Map,
        commentReadAtBySlug: new Map,
        commentRepublishedPaths: new Set,
        askClassConsent: new Set,
        askClassPersonConsent: new Set,
        askClassOutsideOrgConsent: new Set,
        askNamedOtherOrg: new Map,
        askClassRequestShown: new Map,
        askConnectorsShown: new Map,
        askClassPending: new Map,
        notedUnreadRefusals: new Map,
        askCards: new Map,
        askClassCards: new Map,
        askCardFacts: new Map,
        dbWriteOpSights: new u,
        askClassTaken: new Map,
        askClassPersonAsked: new Map,
        askClassNoClassifier: new Map,
        askClassTakenByPerson: new Map,
        askTelemetry: new Map,
        consentCheckScopes: new Map,
        consentCheckScopesEvicted: false,
        designGuardFired: false,
        quickstartGuidanceToolUseId: undefined,
        quickstartRan: new Map,
        designSystemTypeSlug: undefined,
        artifactDisabledSessionEvaluated: false,
        artifactWithheldReasonsLogged: [],
        artifactWithheldRecoveryLogged: false,
        artifactRegisteredSeen: false,
        artifactWithheldListedLogged: false,
        artifactPolicyFetchAnswer: null,
        heldStartupTelemetry: null,
        anchorSnippets: new Map,
        marked: {
            plain: undefined,
            inertHtml: undefined,
            prReviewSubset: undefined
        },
        bundleEmbedVerdicts: {
            hljs: undefined
        },
        blockStripVerdicts: {
            hljs: undefined,
            mermaid: undefined
        },
        prReviewTemplate: {
            chrome: null,
            parts: null
        },
        workshopBlessedHashes: undefined,
        rejectBreaker: new Kc({
            max
        })
    };
}
function MJt(e) {
    e.stopped = true;
    e.abort.abort();
    if (e.timer !== undefined) {
        clearTimeout(e.timer);
        e.timer = undefined;
    }
    delete e.lease;
    delete e.renewable;
    delete e.wake;
}
class f {
    current = undefined;
}
const C = new lt(()=>new f);
function a() {
    return C.of(B());
}
function ee() {
    let e = a();
    e.current ??= A();
    return e.current;
}
function hys(e, r) {
    let n = a().current?.autoReact.artifacts.get(e)?.threads.get(r);
    if (n !== undefined) {
        n.lastAutoReplyAt = Date.now();
    }
}
function HCe() {
    let current = a().current;
    if (current === undefined) {
        return;
    }
    for (let r of current.liveDocWatch.noticeBudgets.values()){
        r.disclosed = false;
    }
}
function oat() {
    let current = a().current;
    if (current === undefined) {
        return;
    }
    current.refusedPublishBodies.clear();
    lpo();
}
function lpo() {
    let current = a().current;
    if (current === undefined) {
        return;
    }
    for (let r of current.pendingHandoverReads.values()){
        r.linesReturned.clear();
        r.linesPrepared.clear();
        r.completedBy.clear();
        r.confirmsResendFor.clear();
    }
    current.readDeliveries.clear();
}
function yys(e) {
    let current = a().current;
    if (current === undefined) {
        return;
    }
    let r_refusedPublishBodies = current.refusedPublishBodies;
    let s = Z$(undefined, "");
    for (let [d, i] of r_refusedPublishBodies){
        if (!d.startsWith(s)) {
            continue;
        }
        if (!e.has(i.batch)) {
            r_refusedPublishBodies.delete(d);
        } else if (i.observedFrom !== undefined && i.observedFrom !== "" && !e.has(i.observedFrom)) {
            delete i.observedFrom;
        }
    }
}
function HJt() {
    return a().current?.room;
}
function _ys() {
    return a().current?.presence;
}
function qNn(e) {
    let r = a().current?.presence;
    r?.disposeSlug?.(r, e);
}
function bys(e) {
    let r = a().current?.presence;
    r?.retireSlug?.(r, e);
}
function Sys(e) {
    return a().current?.presence.declined.has(e) === true;
}
function UNe() {
    return a().current !== undefined;
}
function wys() {
    let e = HJt();
    e?.consentChanged?.(e);
}
function vys(e) {
    let r = HJt();
    r?.accountChanged?.(r, e);
}
function BNe() {
    let e = HJt();
    e?.dispose?.(e);
}
function P(e) {
    k(e);
    for (let r of e.docs.values()){
        T(r);
    }
}
function k(e) {
    e.journalPos = undefined;
    e.journalPosOrd = undefined;
}
function T(e) {
    e.journalFence = undefined;
    e.journalGen += 1;
}
function D(e) {
    let e_journal = e.journal;
    e.journal = undefined;
    e.journalCap = undefined;
    P(e);
    for (let n of e.docs.values()){
        if (n.batchTimer !== undefined) {
            clearTimeout(n.batchTimer);
            n.batchTimer = undefined;
        }
        n.batch = undefined;
        n.batchPos = undefined;
        n.batchHeardAt = undefined;
        n.settling = undefined;
    }
    e_journal?.stop({
        killTask: false
    });
}
function cpo(e) {
    e.ownPrincipalTokens.clear();
    e.ownPrincipalTokenAccount = null;
    e.ownPrincipalTokenEpoch++;
}
function Eys(e = "signed_out", r) {
    let current = a().current;
    if (current === undefined) {
        return;
    }
    cpo(current);
    current.profileNames.clear();
    current.profileIdsServed.clear();
    if (e !== "same_account") {
        current.frameRelay.mcpAdvert = {
            tools: new Set,
            until: 0
        };
        current.frameRelay.mcpNarrower.clear();
        current.roster = undefined;
        current.rosterHeard = undefined;
        current.rosterWait = undefined;
        current.rosterWaitOver = false;
        current.assetsOnRoster = false;
        current.accountEpoch++;
        current.askClassOutsideOrgConsent.clear();
        current.askNamedOtherOrg.clear();
        current.postedReplyIds.clear();
        current.commentTargets.clear();
        current.summonStatus.handOffs.clear();
        current.verify.lastPublish = undefined;
        current.verify.reads.clear();
        current.ownPublishedSlugs.clear();
        current.ownCreatedSlugs.clear();
        current.routineTypeInstances.clear();
        current.strandedMints.clear();
        current.reservedMints.clear();
        current.live.heardVersions.clear();
        current.roomJoinArming.clear();
        m(current);
        for (let i of current.live.supervisors.values()){
            delete i.lease;
            delete i.renewable;
        }
        current.live.nonEditorSlugs.clear();
        current.laneNoticeSlugs.clear();
        current.commentReads.clear();
        current.lastOthersCommentReadAt = Date.now();
        current.cleanReplyIds.clear();
        for (let i of current.shareStatus.otherComments.values()){
            i.judged.clear();
            i.judgedSends.clear();
        }
        current.live.pendingSubagentArms.clear();
        current.live.finishedSubagentAdopters.clear();
        current.live.repliesConsent.outstanding.clear();
        current.live.repliesConsent.declined.clear();
        current.live.repliesConsent.approved.clear();
        for (let i of current.autoReact.artifacts.values()){
            i.heldReplyDeclined = false;
            i.heldReplyChain = null;
            for (let o of i.threads.values()){
                o.ownReplyIds.clear();
                o.ownReplyIdsIncomplete = false;
            }
        }
        current.liveDocWatch.journalUnavailable.clear();
        for (let i of current.liveDocWatch.journalNegotiations){
            i.abort();
        }
        current.liveDocWatch.journalNegotiations.clear();
        for (let i of current.liveDocWatch.arming.values()){
            for (let o of i.reviving){
                D(o);
            }
        }
        current.liveDocWatch.stopAll?.(e);
        current.live.endAll?.(e);
        for (let i of current.liveReplicas.replicas.values()){
            i.watcher?.close();
            clearTimeout(i.pushHold?.due);
        }
        current.liveReplicas.replicas.clear();
        current.liveReplicas.unavailable.clear();
        current.liveReplicas.tooOld.clear();
        current.liveReplicas.cloudUnserved.clear();
        current.liveReplicas.opening.clear();
        current.liveReplicas.unanswered.clear();
        current.createdFromType.clear();
        current.deferredSurface.clear();
        current.remoteControlSkippedSlugs.clear();
        current.typeInstanceFiles.clear();
        current.pathPins.clear();
        current.typeCatalogVouch.clear();
        current.typeDescriptions.clear();
        current.attestedTypeArtifacts.clear();
        current.typeCapabilityReads.clear();
        current.quickstartRan.clear();
        current.anchorSnippets.clear();
        current.shareStatus.accountBoundaryAt = Date.now();
        current.shareStatus.probeBoots.clear();
        for (let [i, o] of current.shareStatus.bySlug){
            if (o.probeErrorCode !== undefined || o.role !== undefined || o.outsideOrgReader !== undefined || o.external !== undefined || o.endpointConnectors !== undefined || o.connectorsIssuedAt !== undefined || o.lastConnectorsReadToolUseId !== undefined) {
                let { probeErrorCode, probeGone, role, outsideOrgReader, external, endpointConnectors, connectorsIssuedAt, lastConnectorsReadToolUseId, ...rest } = o;
                current.shareStatus.bySlug.set(i, rest);
            }
        }
    }
    let { room, presence } = current;
    room.accountChanged?.(room, r);
    presence.accountChanged?.(presence, r);
}
async function kys(e) {
    if (e === "same_account") {
        return;
    }
    let current = a().current;
    if (current === undefined || current.liveReplicas.replicas.size === 0) {
        return;
    }
    let n = [];
    let pushHeldSaves = current.liveReplicas.pushHeldSaves;
    if (pushHeldSaves !== undefined) {
        n.push(pushHeldSaves().then(()=>t("[liveReplica] held saves pushed before logout"), (d)=>t(`[liveReplica] held saves not pushed before logout: ${l(d)}`)));
    }
    for (let [d, i] of current.liveReplicas.replicas){
        n.push(i.replica.sendFinalReport().then((o)=>t(`[liveReplica] final divergence report before logout ${d}: ${o ? "tried" : "nothing due"}`), (o)=>t(`[liveReplica] final divergence report before logout ${d} failed: ${l(o)}`)));
    }
    await Promise.race([
        Promise.all(n),
        Q(2000)
    ]);
}
function sat() {
    let current = a().current;
    current?.liveDocWatch.stopAll?.("clear");
    if (current !== undefined) {
        for (let [r, n] of current.liveReplicas.replicas){
            n.replica.sendFinalReport().then((s)=>t(`[liveReplica] final divergence report at conversation retire ${r}: ${s ? "tried" : "nothing due"}`), (s)=>t(`[liveReplica] final divergence report at conversation retire ${r} failed: ${l(s)}`));
        }
    }
}
function iat(e) {
    let current = a().current;
    if (current === undefined) {
        return;
    }
    if (e?.continuesConversation !== true) {
        current.conversationEpoch++;
        current.ownPublishedSlugs.clear();
        current.ownCreatedSlugs.clear();
        current.routineTypeInstances.clear();
        current.strandedMints.clear();
        current.reservedMints.clear();
        current.live.heardVersions.clear();
        current.roomJoinArming.clear();
        current.roomStoppedByUser.clear();
        current.roomArmAsked.clear();
        current.roomArmRefusedByUser.clear();
        m(current);
        current.live.nonEditorSlugs.clear();
        current.live.pendingSubagentArms.clear();
        current.live.finishedSubagentAdopters.clear();
        current.live.repliesConsent.outstanding.clear();
        current.live.repliesConsent.declined.clear();
        current.live.repliesConsent.approved.clear();
        current.deferredSurface.clear();
        current.remoteControlSkippedSlugs.clear();
    }
    current.createdFromType.clear();
    current.verify.lastPublish = undefined;
    current.verify.reads.clear();
    if (e?.continuesConversation !== true) {
        current.pathPins.clear();
        current.resultNotes.kindSaid = false;
        current.resultNotes.watchCodesSaid.clear();
        current.resultNotes.previewedPaths.clear();
        current.resultNotes.previewHintedPaths.clear();
    }
}
export { Z$, OJt, Nk, iYe, MJt, ee, hys, HCe, oat, lpo, yys, HJt, _ys, qNn, bys, Sys, UNe, wys, vys, BNe, cpo, Eys, kys, sat, iat };
