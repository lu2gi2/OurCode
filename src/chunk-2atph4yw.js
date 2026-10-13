import { q, B, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { X } from "/$bunfs/root/chunk-bd805sh6.js";
import { a, Yn } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
const l = [
    "runner_prep_total_ms",
    "runner_prep_git_proxy_config_ms",
    "runner_prep_reset_remote_ms",
    "runner_prep_outcome_branch_ms",
    "runner_prep_repo_settings_ms",
    "runner_prep_config_seed_ms",
    "runner_prep_remote_refetch_ms"
];
const h = {
    prewarm_vda_outcome: true,
    prewarm_stat_outcome: true,
    prewarm_idx_outcome: true,
    prefetch_phase: true,
    prefetch_phase_reason: true
};
const f = /^[a-z0-9_]{1,32}$/;
const m = 604800;
const d = {
    prewarm_vda_elapsed_s: m,
    prewarm_stat_elapsed_s: m,
    prefetch_runs: 10000,
    prefetch_ok: 10000,
    prefetch_last_ok_age_s: m,
    prefetch_last_duration_s: m,
    prefetch_midx: 10000,
    git_have_age_s: m,
    git_pack_count: 10000,
    standby_idle_s: m,
    healthz_claim_visible_ms: 600000
};
const k = 3600000;
const g = 600000;
const S = new Set(l);
function b(e) {
    return Object.hasOwn(h, e);
}
function y(e) {
    return Object.hasOwn(d, e);
}
function R(e) {
    return S.has(e);
}
function F(e) {
    return false;
}
function u(e, t) {
    if (typeof e !== "number" || !Number.isFinite(e)) {
        return;
    }
    let s = Math.round(e);
    if (s < 0) {
        return undefined;
    }
    return Math.min(s, t);
}
function o(e, t) {
    let s = Object.hasOwn(e, t) ? Reflect.get(e, t) : undefined;
    if (typeof s === "object" && s !== null) {
        return s;
    }
}
function w(e) {
    if (typeof e !== "object" || e === null) {
        return;
    }
    let fields = {};
    for (let [n, _] of Object.entries(o(e, "fields") ?? {})){
        if (b(n)) {
            if (typeof _ === "string" && f.test(_)) {
                fields[n] = _;
            }
        } else if (y(n)) {
            let i = u(_, d[n]);
            if (i !== undefined) {
                fields[n] = i;
            }
        }
    }
    let phases = {};
    for (let [n, _] of Object.entries(o(e, "phases") ?? {})){
        if (R(n)) {
            let i = u(_, k);
            if (i !== undefined) {
                phases[n] = i;
            }
        } else if (F(n)) {
            let i = u(_, g);
            if (i !== undefined) {
                phases[n] = i;
            }
        }
    }
    if (Object.keys(fields).length === 0 && Object.keys(phases).length === 0) {
        return;
    }
    return {
        fields,
        phases
    };
}
const v = 8192;
function c(CCR_RUNNER_STARTUP_TIMING) {
    if (!CCR_RUNNER_STARTUP_TIMING || CCR_RUNNER_STARTUP_TIMING.length > v) {
        return;
    }
    try {
        return w(X(CCR_RUNNER_STARTUP_TIMING));
    } catch  {
        return;
    }
}
class p {
    phases = {};
    phaseStarts = {};
    warmSpareClaimed = false;
    hydratePrefetchSettledAt = undefined;
    resumeHydratePrefetch = undefined;
    resumeHydrateOnDiskBytes = undefined;
    resumeHydrateCcrBytes = undefined;
    resumeHydrateCcrEvents = undefined;
    resumeHydrateDeltaEvents = undefined;
    resumeHydrateDeltaFetchAttempted = undefined;
    resumeHydrateAnchorWalkback = undefined;
    resumeTranscriptScan = undefined;
    pluginFullLoads = 0;
    userContextBuilds = 0;
    sdkMcpDialRuns = 0;
    sdkMcpServersDialed = 0;
    flagFetchKick = undefined;
    flagFetchKickJudgedAtMs = undefined;
    warmWakeEarlyFetch = undefined;
    kickOnWarmCache = undefined;
    hooksInitSource = undefined;
    flagFetchWaitedMs = 0;
    hooksInitWaitGivenUp = false;
    consumed = false;
    apiRequestSentFromSpawnMs = undefined;
    apiRequestSentFromSpawnConsumed = false;
    recordPhase(e, t, s) {
        if (this.consumed) {
            return;
        }
        if (e === "skills_load_ms" && this.phases[e] !== undefined) {
            return;
        }
        if (e === "hooks_init_ms" && this.hooksInitWaitGivenUp) {
            return;
        }
        this.phases[e] = Math.round(t);
        if (s !== undefined) {
            this.phaseStarts[e] = Math.round(s);
        }
    }
    recordHooksInitWait(e, t) {
        this.recordPhase("hooks_init_ms", e, t);
        this.hooksInitWaitGivenUp = true;
    }
    getRecordedPhase(e) {
        return this.phases[e];
    }
    recordSpawnToExec() {
        let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
        if (!Number.isFinite(e)) {
            return;
        }
        this.recordPhase("spawn_to_exec_ms", Date.now() - process.uptime() * 1000 - e, e - performance.timeOrigin);
    }
    markWarmSpareClaimed() {
        this.warmSpareClaimed = true;
    }
    markFlagFetchKick(e) {
        this.flagFetchKick = e;
        this.flagFetchKickJudgedAtMs = Math.round(performance.now());
    }
    getFlagFetchKick() {
        return this.flagFetchKick;
    }
    markWarmCacheKickAsks(e) {
        this.warmWakeEarlyFetch = e;
        this.kickOnWarmCache = a.CLAUDE_CODE_GROWTHBOOK_KICK_ON_WARM_CACHE;
    }
    markHooksInitSource(e) {
        this.hooksInitSource = e;
    }
    noteFlagFetchWait(e) {
        this.flagFetchWaitedMs += e;
    }
    getFlagFetchWaitedMs() {
        return this.flagFetchWaitedMs;
    }
    noteSdkMcpDial(e) {
        if (e <= 0) {
            return;
        }
        this.sdkMcpDialRuns++;
        this.sdkMcpServersDialed += e;
    }
    notePluginFullLoad() {
        if (this.consumed) {
            return;
        }
        this.pluginFullLoads++;
    }
    noteUserContextBuild() {
        if (this.consumed) {
            return;
        }
        this.userContextBuilds++;
    }
    wasWarmSpareClaimed() {
        return this.warmSpareClaimed;
    }
    markHydratePrefetchSettled() {
        this.hydratePrefetchSettledAt = performance.now();
    }
    markResumeHydratePrefetch(e, t) {
        this.resumeHydratePrefetch = e === null ? "miss" : this.hydratePrefetchSettledAt !== undefined && this.hydratePrefetchSettledAt < t ? "hit" : "pending";
    }
    markResumeHydrateDelta(e, t, s, n, _, i) {
        this.resumeHydrateOnDiskBytes = e;
        this.resumeHydrateCcrBytes = t;
        this.resumeHydrateCcrEvents = s;
        this.resumeHydrateDeltaEvents = n;
        this.resumeHydrateDeltaFetchAttempted = _;
        this.resumeHydrateAnchorWalkback = i;
    }
    markResumeTranscriptScan(e) {
        if (this.resumeTranscriptScan !== undefined) {
            return;
        }
        this.resumeTranscriptScan = e;
        this.recordPhase("resume_transcript_scan_ms", e.scanMs, e.scanStartMs);
    }
    recordFirstMessageReadFromSpawn() {
        let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
        if (!Number.isFinite(e)) {
            return;
        }
        this.recordPhase("first_message_read_from_spawn_ms", Date.now() - e, e - performance.timeOrigin);
    }
    recordInputReadyFromSpawn() {
        let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
        if (!Number.isFinite(e)) {
            return;
        }
        this.recordPhase("input_ready_from_spawn_ms", Date.now() - e, e - performance.timeOrigin);
    }
    consume() {
        if (!a.CLAUDE_CODE_REMOTE && !a.CLAUDE_CODE_EMIT_STARTUP_TIMING) {
            return;
        }
        if (this.consumed || Object.keys(this.phases).length === 0) {
            return;
        }
        this.consumed = true;
        let e = c(Yn.CCR_RUNNER_STARTUP_TIMING);
        let t = !Ce();
        return {
            ...e?.fields,
            entrypoint: a.CLAUDE_CODE_ENTRYPOINT ?? "unknown",
            warm_spare_claimed: this.warmSpareClaimed,
            resume_hydrate_prefetch: this.resumeHydratePrefetch,
            resume_hydrate_on_disk_bytes: this.resumeHydrateOnDiskBytes,
            resume_hydrate_ccr_bytes: this.resumeHydrateCcrBytes,
            resume_hydrate_ccr_events: this.resumeHydrateCcrEvents,
            resume_hydrate_delta_events: this.resumeHydrateDeltaEvents,
            resume_hydrate_delta_fetch_attempted: this.resumeHydrateDeltaFetchAttempted,
            resume_hydrate_anchor_walkback: this.resumeHydrateAnchorWalkback,
            resume_transcript_bytes: this.resumeTranscriptScan?.bytes,
            resume_transcript_kept_bytes: this.resumeTranscriptScan?.keptBytes,
            resume_transcript_earlier_metadata_bytes: this.resumeTranscriptScan?.earlierMetadataBytes,
            resume_transcript_boundary: this.resumeTranscriptScan?.boundary,
            prewarm_vda: Yn.CCR_PREWARM_VDA,
            prewarm_stat: Yn.CCR_PREWARM_STAT,
            delta_reset: Yn.CCR_DELTA_RESET,
            prefetch_network: Yn.CCR_PREFETCH_NETWORK,
            plugin_full_loads: this.pluginFullLoads,
            user_context_builds: this.userContextBuilds,
            sdk_mcp_dial_runs: this.sdkMcpDialRuns,
            sdk_mcp_servers_dialed: this.sdkMcpServersDialed,
            flag_fetch_kick: this.flagFetchKick,
            flag_fetch_kick_judged_at_ms: t ? this.flagFetchKickJudgedAtMs : undefined,
            warm_wake_early_fetch: this.warmWakeEarlyFetch,
            kick_on_warm_cache: this.kickOnWarmCache,
            hooks_init_source: this.hooksInitSource,
            phases: {
                ...e?.phases,
                ...t ? this.phases : this.durations()
            },
            ...t && {
                time_origin_ms: performance.timeOrigin,
                phase_start_ms: {
                    ...this.phaseStarts
                }
            }
        };
    }
    durations() {
        return vo(this.phases, (e, t)=>t !== "spawn_to_exec_ms" && this.phaseStarts[t] !== 0);
    }
    recordApiRequestSentFromSpawn() {
        if (this.apiRequestSentFromSpawnMs !== undefined) {
            return;
        }
        let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
        if (!Number.isFinite(e)) {
            return;
        }
        this.apiRequestSentFromSpawnMs = Date.now() - e;
    }
    consumeApiRequestSentFromSpawn() {
        if (this.apiRequestSentFromSpawnConsumed || this.apiRequestSentFromSpawnMs === undefined) {
            return;
        }
        this.apiRequestSentFromSpawnConsumed = true;
        return {
            ms: this.apiRequestSentFromSpawnMs,
            warmSpareClaimed: this.warmSpareClaimed,
            flagFetchKick: this.flagFetchKick,
            timeOriginMs: Ce() ? undefined : performance.timeOrigin
        };
    }
}
const P = new q(()=>new p);
function r() {
    return P.of(B().host);
}
function wr(e, t, s) {
    r().recordPhase(e, t, s);
}
function pbs(e, t) {
    r().recordHooksInitWait(e, t);
}
function qNe(e) {
    return r().getRecordedPhase(e);
}
function fbs() {
    r().recordSpawnToExec();
}
function T$n() {
    r().markWarmSpareClaimed();
}
function mbs() {
    r().notePluginFullLoad();
}
function gbs() {
    r().noteUserContextBuild();
}
function hbs() {
    return r().wasWarmSpareClaimed();
}
function ybs(e) {
    r().markFlagFetchKick(e);
}
function _bs() {
    return r().getFlagFetchKick();
}
function bbs(e) {
    r().markWarmCacheKickAsks(e);
}
function Sbs(e) {
    r().markHooksInitSource(e);
}
function wbs(e) {
    r().noteFlagFetchWait(e);
}
function vbs() {
    return r().getFlagFetchWaitedMs();
}
function Ebs(e) {
    r().noteSdkMcpDial(e);
}
function kbs() {
    r().markHydratePrefetchSettled();
}
function Tbs(e, t) {
    r().markResumeHydratePrefetch(e, t);
}
function Abs(e) {
    r().markResumeTranscriptScan(e);
}
function Cbs(e, t, s, n, _, i) {
    r().markResumeHydrateDelta(e, t, s, n, _, i);
}
function Rbs() {
    r().recordFirstMessageReadFromSpawn();
}
function xbs() {
    r().recordInputReadyFromSpawn();
}
function Pbs() {
    return r().consume();
}
function Ibs() {
    r().recordApiRequestSentFromSpawn();
}
function Obs() {
    return r().consumeApiRequestSentFromSpawn();
}
export { wr, pbs, qNe, fbs, T$n, mbs, gbs, hbs, ybs, _bs, bbs, Sbs, wbs, vbs, Ebs, kbs, Tbs, Abs, Cbs, Rbs, xbs, Pbs, Ibs, Obs };
