import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { gs } from "/$bunfs/root/chunk-ghreee2m.js";
const A0n = Object.freeze({
    open: Object.freeze([]),
    unplaced: Object.freeze([]),
    asked: Object.freeze([]),
    shownId: null,
    focusedId: null,
    focusRequest: null,
    placements: 0,
    closing: Object.freeze([])
});
const Hco = ()=>({
        values: gs(new Map),
        readers: new Map,
        readersOf: new Map,
        mounted: new Map,
        folds: {
            steady: {
                stale: new Set,
                lastAt: Number.NEGATIVE_INFINITY,
                pending: undefined
            },
            live: {
                stale: new Set,
                lastAt: Number.NEGATIVE_INFINITY,
                pending: undefined
            }
        },
        staleListeners: new Set,
        faultRuns: new Map,
        bumps: 0,
        versionFloor: 0
    });
const Dco = ()=>({
        pending: undefined,
        pausedAt: undefined
    });
function s() {
    return {
        pluginLoad: undefined,
        pluginLoadArm: undefined,
        pluginLoadCacheOnly: undefined,
        pluginLoadCacheOnlyArm: undefined,
        pluginLoadMarks: new WeakMap,
        commands: undefined,
        skills: undefined,
        skillsV5: undefined,
        agents: undefined,
        handedIn: undefined,
        outputStyles: undefined,
        workflows: undefined,
        hookRegistration: undefined,
        hookModulesAwaitTrust: false,
        hookRegistrationInFlight: undefined,
        hooksUnknownCause: undefined,
        pluginsWithHooks: new Set,
        folderReadAt: new Map,
        hookRegistrationEpoch: 0,
        hookSwapEpoch: 0,
        unlatchedAbsentManagedIds: new Set,
        hooksLeftOutByName: [],
        hooksLeftOutByNameChanged: Oe(),
        hookRegistrationArgs: undefined,
        hookHotReloadUnsubscribe: undefined,
        hookHotReloadSettingsSnapshot: undefined,
        hookHotReloadTierSnapshot: undefined,
        hooksRespawns: new Set,
        loadedModules: [],
        moduleSeats: new Map,
        notices: gs(new Map),
        openCalls: new Map,
        spawnProvenance: new Map,
        registeredAgents: new Map,
        renderVersions: gs(new Map),
        panes: gs(A0n),
        pluginState: Hco(),
        toastClock: Dco(),
        hoverGroups: gs(new Map),
        scrollSites: new Map,
        focusSites: new Map,
        focusSiteDraws: Oe(),
        mountedRasters: new Map,
        mountedImages: new Map,
        rasterAdmission: undefined,
        uiLogSink: null,
        pendingUiLog: [],
        armedMonitorKeys: new Set,
        marketplaces: new Map,
        marketplaceRefreshesInFlight: new Map,
        marketplaceHelperMemo: new Map,
        addDirMarketplacesMemo: undefined,
        headlessInstallPass: undefined,
        installedPluginsMigrated: false,
        installedPluginsFile: null,
        installedPluginsEpoch: 0,
        recordSpellingsCounted: false,
        recordSpellingFallbackReported: false,
        installedPluginsSnapshot: null,
        optionValues: new Map,
        flaggedPlugins: null,
        orphanedVersionGlobExclusions: null,
        recentActivity: [],
        pluginActivityFeatures: new Map,
        autoUpdateListener: null,
        commandSourceReresolve: null,
        pendingAutoUpdateNotification: null,
        ownInUseMarkerPaths: new Set,
        ownInUseMarkerHandles: new Map,
        commandProducerDirsDenied: new Set,
        commandProducerDirsScannedAt: 0,
        commandProducerDirsComparable: null,
        commandProducerDirsNeedCanonicalCandidate: false,
        commandProducerDirsWslProviderUndeterminable: false,
        commandProducerDirsChanged: Oe(),
        inUseMarkerCleanup: undefined,
        vouchedManagedPluginIds: new Set,
        hintedPluginIds: new Set,
        seenHintPluginIds: new Set,
        gitAvailable: undefined,
        operatorDeclaredMemo: undefined,
        marketplaceResolutionNoticesLogged: new Set,
        marketplaceAdmissionVerdicts: new Map,
        hiddenRegistryEntries: {
            raw: new Map,
            v5: new Map
        },
        releasedRegistryEntries: {
            raw: new Set,
            v5: new Set
        },
        cacheRootComparableMemo: undefined,
        provenLocalRoots: new Map,
        wslProviderOfPluginsRootMemo: undefined,
        inlinePluginRootsComparableMemo: undefined
    };
}
class n {
    registry = s();
}
const r = new q(()=>new n);
function a() {
    return r.of(B().host);
}
function st() {
    return a().registry;
}
function Xfs(e) {
    return st().registeredAgents.has(e);
}
function C0n() {
    return st().pluginLoadCacheOnly;
}
function Shr() {
    st().commands = undefined;
}
function whr() {
    let e = st();
    e.skills = undefined;
    e.skillsV5 = undefined;
}
function vhr() {
    st().agents = undefined;
}
function Ehr() {
    st().outputStyles = undefined;
}
function R0n() {
    st().workflows = undefined;
}
export { A0n, Hco, Dco, st, Xfs, C0n, Shr, whr, vhr, Ehr, R0n };
