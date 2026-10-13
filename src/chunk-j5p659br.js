import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { po } from "/$bunfs/root/chunk-xgw72tt1.js";
import { l8, xbe, We, Oyo, Nks, lTs, TEr, CEr, k, cO } from "/$bunfs/root/chunk-0ycjphb5.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { rs } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Ie, vi } from "/$bunfs/root/chunk-nj0630nv.js";
import { dd } from "/$bunfs/root/chunk-9fa34ggx.js";
import { Wa } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { UCs, Fy } from "/$bunfs/root/chunk-fnj5y75n.js";
import { rF, lbe } from "/$bunfs/root/chunk-1eajkkr7.js";
import { Ht } from "/$bunfs/root/chunk-77t63btp.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { createHash } from "crypto";
import { gzipSync } from "zlib";
function sbr({ maxBatchSize, getFlushIntervalMs, post }) {
    let s = [];
    let r = null;
    async function flush() {
        if (s.length === 0) {
            return;
        }
        let h = s;
        s = [];
        await post(h);
    }
    function d() {
        if (r) {
            clearTimeout(r);
            r = null;
        }
    }
    function l() {
        flush().catch(()=>{});
    }
    function E() {
        if (r) {
            return;
        }
        r = setTimeout(()=>{
            r = null;
            l();
        }, getFlushIntervalMs()).unref();
    }
    return {
        enqueue (h) {
            s.push(h);
            if (s.length >= maxBatchSize) {
                d();
                l();
            } else {
                E();
            }
        },
        flush,
        async shutdown () {
            d();
            await flush();
        },
        drainForTesting () {
            d();
            let h = s;
            s = [];
            return h;
        }
    };
}
const F = "https://http-intake.logs.us5.datadoghq.com/api/v2/logs";
const ibr = "pubea5604404508cdd34afb69e6f42a05bc";
const P = 15000;
const maxBatchSize = 100;
const timeout = 5000;
const D = 300000;
const O = new Set([
    "tengu_feature_ok",
    "tengu_feature_bad",
    "tengu_feature_sad",
    "tengu_teleport_menu",
    "tengu_tether_decision",
    "tengu_tether_live_outcome",
    "tengu_tether_echo_audit",
    "tengu_tether_unrecognised_400",
    "chrome_bridge_connection_succeeded",
    "chrome_bridge_connection_failed",
    "chrome_bridge_disconnected",
    "chrome_bridge_tool_call_completed",
    "chrome_bridge_tool_call_error",
    "chrome_bridge_tool_call_started",
    "chrome_bridge_tool_call_timeout",
    "tengu_api_error",
    "tengu_api_fallback_last_resort",
    "tengu_api_success",
    "tengu_artifact_disabled_session",
    "tengu_artifact_reject_breaker",
    "tengu_artifact_tool_recovered",
    "tengu_artifact_tool_withheld",
    "tengu_auto_mode_decision",
    "tengu_auto_mode_denial_limit_exceeded",
    "tengu_auto_mode_destructive_mcp_rule_allow",
    "tengu_auto_mode_fallback_to_ask",
    "tengu_auto_mode_malformed_tool_input",
    "tengu_auto_mode_env_onboarding_accept",
    "tengu_auto_mode_env_onboarding_dismiss",
    "tengu_auto_mode_env_onboarding_later",
    "tengu_auto_mode_env_onboarding_shown",
    "tengu_auto_mode_outcome",
    "tengu_auto_mode_setup_wizard_answers",
    "tengu_auto_mode_setup_wizard_resolved",
    "tengu_auto_mode_setup_wizard_shown",
    "tengu_auto_mode_subsequent_approval",
    "tengu_bridge_token_absence_classified",
    "tengu_insights_auto_mode_recommendation",
    "tengu_brief_mode_enabled",
    "tengu_brief_mode_toggled",
    "tengu_brief_send",
    "tengu_cancel",
    "tengu_compact_after_prompt_too_long",
    "tengu_compact_failed",
    "tengu_copper_lantern",
    "tengu_deferred_tools_pool_change",
    "tengu_mcp_instructions_pool_change",
    "tengu_exit",
    "tengu_flicker",
    "tengu_headless_mcp_first_turn_join",
    "tengu_headless_mcp_launch_named_wait",
    "tengu_headless_mcp_prewait",
    "tengu_init",
    "tengu_mcp_degraded",
    "tengu_mcp_first_tools_list",
    "tengu_mcp_list_changed",
    "tengu_mcp_listen_reopen",
    "tengu_mcp_message_stream_outcome",
    "tengu_mcp_listing_prior_rejected",
    "tengu_mcp_project_servers_approved",
    "tengu_mcp_sdk_generation",
    "tengu_mcp_server_connection_failed",
    "tengu_mcp_server_connection_succeeded",
    "tengu_mcp_tools_refreshed_mid_turn",
    "tengu_mcp_tripwire",
    "tengu_model_catalog_compare",
    "tengu_model_fallback_triggered",
    "tengu_live_model_switch",
    "tengu_refusal_fallback_triggered",
    "tengu_refusal_fallback_prompt_shown",
    "tengu_refusal_fallback_prompt_choice",
    "tengu_refusal_fallback_preference_prompt",
    "tengu_refusal_fallback_setting_changed",
    "tengu_refusal_fallback_suppressed",
    "tengu_refusal_fallback_dialog_suppressed",
    "tengu_refusal_fallback_supersedes",
    "tengu_refusal_fallback_route_declined",
    "tengu_refusal_fallback_notice_collapsed",
    "tengu_convolute_arcades_retry",
    "tengu_convolute_arcades_retry_outcome",
    "tengu_rotunda_pennant_applied",
    "tengu_rotunda_pennant_malformed",
    "tengu_rotunda_pennant_strip",
    "tengu_rotunda_pennant_credit_echoed",
    "tengu_rotunda_pennant_tools",
    "tengu_rotunda_pennant_chain_exhausted",
    "tengu_rotunda_pennant_esc",
    "tengu_refusal_retraction_evicted",
    "tengu_refusal_retraction_late_drop",
    "tengu_refusal_retraction_history_dropped",
    "tengu_refusal_retraction_orphan_tool_result",
    "tengu_refusal_retraction_truncation_harvest",
    "tengu_refusal_retraction_unauthenticated_signal",
    "tengu_propose_skills",
    "tengu_propose_skills_kept_lines",
    "tengu_propose_skills_read_check",
    "tengu_oauth_error",
    "tengu_oauth_success",
    "tengu_oauth_token_refresh_failure",
    "tengu_oauth_token_refresh_success",
    "tengu_oauth_token_refresh_lock_acquiring",
    "tengu_oauth_token_refresh_lock_acquired",
    "tengu_oauth_token_refresh_starting",
    "tengu_oauth_token_refresh_completed",
    "tengu_oauth_token_refresh_lock_releasing",
    "tengu_oauth_token_refresh_lock_released",
    "tengu_oauth_token_refresh_lock_dead_holder_takeover",
    "tengu_policy_limits_cache_state_at_first_prompt",
    "tengu_policy_limits_fetch",
    "tengu_policy_limits_verdict_recovered",
    "tengu_ptl_surfaced_to_user",
    "tengu_query_error",
    "tengu_remote_tool_targets",
    "tengu_remote_tool_forward",
    "tengu_remote_tool_serve",
    "tengu_remote_tool_restart_adoption",
    "tengu_remote_tool_restart_adoption_dropped",
    "tengu_remote_tool_restart_adoption_unroutable",
    "tengu_remote_stream_regained",
    "tengu_sdk_oauth_refresh_unfulfilled",
    "tengu_rc_pill_clicked",
    "tengu_ranch_rc_shown",
    "tengu_ranch_rc_link_shown",
    "tengu_ccr_init_park_report",
    "tengu_orphaned_permission_applied",
    "tengu_orphaned_permission_closed_unrun",
    "tengu_orphaned_permission_unapplied_turn_end",
    "tengu_orphaned_permission_unapplied_turn_resumed",
    "tengu_turn_handoff_run",
    "tengu_turn_handoff_flag_wait",
    "tengu_turn_handoff_server_verdict",
    "tengu_turn_handoff_files_by_name",
    "tengu_turn_handoff_files_by_name_refresh",
    "tengu_turn_handoff_carried_writes",
    "tengu_turn_handoff_expired",
    "tengu_rewind_conversation_expired",
    "tengu_pending_action_republished",
    "tengu_resume_interrupted_turn",
    "tengu_resume_parked_permission",
    "tengu_resume_rescue_yield",
    "tengu_resume_stale_prompt_cancel",
    "tengu_resume_stale_turn_suppressed",
    "tengu_request_user_dialog_implicit_cancel",
    "tengu_request_user_dialog_late_answer",
    "tengu_request_user_dialog_requires_action",
    "tengu_request_user_dialog_response_ignored",
    "tengu_request_user_dialog_timeout",
    "tengu_chrome_setup_offered",
    "tengu_review_remote_teleport_failed",
    "tengu_supported_dialog_kinds_restored",
    "tengu_sdk_init_handshake",
    "tengu_sdk_mcp_false_unavailable",
    "tengu_sdk_result",
    "tengu_shutdown_pending_state",
    "tengu_sdk_schema_violation",
    "tengu_sdk_session_crash",
    "tengu_sdk_stall",
    "tengu_sdk_ttft",
    "tengu_session_file_read",
    "tengu_started",
    "tengu_tool_use_error",
    "tengu_tool_use_granted_in_prompt_permanent",
    "tengu_transcript_write_failed",
    "tengu_transcript_writer_recovered",
    "tengu_persistence_suppressed",
    "tengu_tool_use_granted_in_prompt_temporary",
    "tengu_tool_use_rejected_in_prompt",
    "tengu_tool_use_success",
    "tengu_bash_tool_command_executed",
    "tengu_bash_tool_command_failed",
    "tengu_uncaught_exception",
    "tengu_uncaught_exception_loop",
    "tengu_unhandled_rejection",
    "tengu_voice_recording_started",
    "tengu_voice_toggled",
    "tengu_vscode_sdk_stream_ended_no_result",
    "tengu_team_mem_sync_started",
    "tengu_timer",
    "tengu_bg_adopt",
    "tengu_bg_agent_action",
    "tengu_bg_agent_dispatch",
    "tengu_bg_agent_notification",
    "tengu_bg_agent_terminal",
    "tengu_bg_attach",
    "tengu_bg_attach_first_frame",
    "tengu_bg_attach_legacy_autorespawn",
    "tengu_bg_attach_outcome",
    "tengu_bg_classify",
    "tengu_bg_daemon_cold_start_ask",
    "tengu_bg_daemon_cold_start_ask_answer",
    "tengu_bg_daemon_install",
    "tengu_bg_daemon_service_poll_fallthrough",
    "tengu_bg_daemon_service_stale_exec",
    "tengu_bg_daemon_spawn_failed",
    "tengu_bg_daemon_wmi_fallback",
    "tengu_bg_daemon_zombie_false_positive",
    "tengu_bg_daemon_zombie_restart",
    "tengu_bg_dispatch",
    "tengu_bg_dispatch_fallback",
    "tengu_bg_dispatch_low_mem",
    "tengu_bg_dispatch_rescued",
    "tengu_bg_dispatch_sigkill_escalate",
    "tengu_bg_dispatch_stale_drop",
    "tengu_bg_exec_no_lastline",
    "tengu_bg_killjob_ctrl_fallback",
    "tengu_bg_orphan_reap",
    "tengu_bg_proto_mismatch",
    "tengu_bg_pty_unavailable",
    "tengu_bg_reply_outcome",
    "tengu_bg_respawn",
    "tengu_bg_respawn_downgrade_refused",
    "tengu_bg_respawn_exhausted",
    "tengu_bg_respawn_resume_conflict",
    "tengu_bg_prewarm_burst",
    "tengu_bg_respawn_stale",
    "tengu_bg_respawn_unconfirmed_bail",
    "tengu_bg_retired",
    "tengu_bg_roster_parse_failed",
    "tengu_bg_skew_nudge",
    "tengu_bg_spare_claim",
    "tengu_bg_spare_claim_fail",
    "tengu_bg_spare_spawn",
    "tengu_bg_worker_exit",
    "tengu_bg_worker_spawn",
    "tengu_daemon_cold_start_prompt",
    "tengu_daemon_config_reload",
    "tengu_daemon_exit",
    "tengu_daemon_idle_exit",
    "tengu_daemon_install_prompt_answer",
    "tengu_daemon_lease",
    "tengu_daemon_peer_uid_reject",
    "tengu_daemon_self_restart_on_upgrade",
    "tengu_daemon_start",
    "tengu_daemon_startup_crash",
    "tengu_daemon_upgrade_refused_stale_binary",
    "tengu_daemon_worker_crash",
    "tengu_daemon_worker_permanent_exit",
    "tengu_daemon_yield",
    "tengu_daemon_yield_takeover"
]);
const z = new Map([
    [
        "tengu_remote_tool_forward",
        new Set([
            "outcome",
            "transport",
            "host_kind",
            "host_platform",
            "approval",
            "approved_by",
            "adoption",
            "reconcile_trigger",
            "reconcile_result",
            "duration_ms",
            "time_to_terminal_ms",
            "asking_ms"
        ])
    ],
    [
        "tengu_remote_tool_serve",
        new Set([
            "outcome",
            "op",
            "transport",
            "policy",
            "refusal_code",
            "failure_code",
            "disposition",
            "second_leg"
        ])
    ],
    [
        "tengu_remote_tool_restart_adoption",
        new Set([
            "journaled",
            "adoptable",
            "adopted",
            "park_adopted"
        ])
    ],
    [
        "tengu_remote_tool_restart_adoption_dropped",
        new Set([
            "dropped"
        ])
    ],
    [
        "tengu_remote_tool_restart_adoption_unroutable",
        new Set([
            "where",
            "route_code",
            "parked_at_restart"
        ])
    ]
]);
function C(message, n) {
    let i = z.get(message);
    if (i === undefined) {
        return n;
    }
    return vo(n, (s, r)=>r === "sample_rate" || i.has(r));
}
const U = [
    "arch",
    "attach_cold",
    "daemon_booted",
    "first_frame_kind",
    "surface",
    "via",
    "classifierModel",
    "classifierStage",
    "clientType",
    "decision",
    "entrypoint",
    "errorKind",
    "errorType",
    "failureKind",
    "fastPath",
    "sessionKind",
    "http_status_range",
    "http_status",
    "model",
    "op",
    "outcome",
    "platform",
    "projectsRole",
    "remoteControlLane",
    "projectsSession",
    "provider",
    "reason",
    "coachMode",
    "server_reason",
    "server_type",
    "source",
    "subscriptionType",
    "toolName",
    "uncoveredTailReason",
    "userBucket",
    "userType",
    "version",
    "versionBase",
    ...[]
];
function v(e) {
    return e.replace(/[A-Z]/g, (n)=>`_${n.toLowerCase()}`);
}
const N = [
    "mcpServerName",
    "mcpServerBaseUrl",
    "mcpServerId",
    "toolUseContentLengths",
    "toolSchemaCharLengths",
    "toolSchemasHash",
    "errorMessageHash",
    "mcpServerKeyHash",
    "mcpToolName",
    "attributionMcpServer",
    "attributionMcpTool",
    "attributionSkill",
    "attributionMcpServerHash",
    "attributionMcpToolHash",
    "attributionSkillHash",
    "attributionAgentHash",
    "attributionPluginHash",
    "mcpServerNameHash",
    "mcpToolNameHash",
    "toolNameHash",
    "errorDetailsHash",
    "mcp_server_sha12",
    "rh",
    "baseUrl",
    "skill_name_hash",
    "plugin_id_hash",
    "plugin_name_redacted",
    "marketplace_name_redacted",
    "plugin_name_previous",
    "plugin_id_hash_previous",
    "plugin_version_sha",
    "skill_name_hashes",
    "parent_skill_name_hash",
    "item_name_hash",
    "attachmentTypesSeen"
];
const H = new Set(N.map(v));
function j(e) {
    for (let n of Object.keys(e)){
        if (H.has(v(n))) {
            delete e[n];
        }
    }
}
function G(toolName, n) {
    if (toolName.startsWith("mcp__")) {
        return "mcp";
    }
    if (n && !lTs(toolName)) {
        return "mcp";
    }
    return toolName;
}
const W = [
    "tengu_mcp_list_changed",
    "tengu_mcp_degraded",
    "tengu_mcp_server_connection_succeeded",
    "tengu_mcp_server_connection_failed",
    "tengu_mcp_first_tools_list",
    "tengu_mcp_listen_reopen",
    "tengu_mcp_message_stream_outcome"
];
function K(message) {
    return W.includes(message);
}
const V = 10;
const Y = 60000;
const Z = 200;
function X(peerRateWindows, message, i, s) {
    let r = `${message}\x00${i ?? "(no-server)"}`;
    let o = peerRateWindows.get(r);
    if (!o) {
        if (peerRateWindows.size >= Z) {
            let l = peerRateWindows.keys().next().value;
            if (l !== undefined) {
                peerRateWindows.delete(l);
            }
        }
        o = {
            windowStartMs: 0,
            forwardedInWindow: 0,
            droppedSinceForward: 0
        };
        peerRateWindows.set(r, o);
    }
    if (s - o.windowStartMs >= Y) {
        o.windowStartMs = s;
        o.forwardedInWindow = 0;
    }
    if (o.forwardedInWindow >= V) {
        o.droppedSinceForward++;
        return {
            admitted: false,
            droppedSinceLastForward: 0
        };
    }
    o.forwardedInWindow++;
    let o_droppedSinceForward = o.droppedSinceForward;
    o.droppedSinceForward = 0;
    return {
        admitted: true,
        droppedSinceLastForward: o_droppedSinceForward
    };
}
async function J(e, n) {
    let i = Date.now() - n.egressRefusedAt;
    if (i < 0) {
        n.egressRefusedAt = -Infinity;
    } else if (i < D) {
        return false;
    }
    let s = n.gzip !== "refused" && (a.CLAUDE_CODE_GZIP_DATADOG_LOGS ?? rs());
    try {
        await Wa.post(F, s ? gzipSync(_(e)) : e, {
            headers: {
                "Content-Type": "application/json",
                "DD-API-KEY": ibr,
                ...s && {
                    "Content-Encoding": "gzip"
                }
            },
            timeout
        });
    } catch (error) {
        t(`Failed to flush logs to Datadog: ${error}`, {
            level: "error"
        });
        let o = dd(error) ? error.response : undefined;
        if (o && rF(o.status, o.headers) || lbe(error)) {
            t(`An egress proxy refused Datadog's host; not posting logs to Datadog for ${D / 60000} minutes; they are dropped`, {
                level: "warn"
            });
            n.egressRefusedAt = Date.now();
            return false;
        }
        let d = o?.status;
        if (!s || d === 429) {
            return false;
        }
        let l = d === undefined ? "no_response" : `http_${d}`;
        t(`Datadog did not take a gzipped log batch (${l}); resending it uncompressed, and sending later batches from this process uncompressed`, {
            level: "error"
        });
        n.gzip = "refused";
        n.unreportedGzipFailure ??= l;
        return n.postCurrent(e);
    }
    if (n.unreportedGzipFailure !== undefined) {
        let r = n.unreportedGzipFailure;
        n.unreportedGzipFailure = undefined;
        f("datadog_logs_gzip", r);
    }
    if (s && n.gzip === "untried") {
        n.gzip = "accepted";
        g("datadog_logs_gzip");
    }
    return true;
}
const Q = 30;
class T {
    datadogInitialized = null;
    egressRefusedAt = -Infinity;
    gzip = "untried";
    unreportedGzipFailure;
    builtUnredacted = new WeakSet;
    sender = sbr({
        maxBatchSize,
        getFlushIntervalMs,
        post: async (e)=>{
            try {
                await this.postCurrent(e);
            } catch (error) {
                t(`Datadog log flush threw: ${error}`, {
                    level: "error"
                });
            }
        }
    });
    postCurrent(e) {
        let n = Oyo() ? e.filter((i)=>!this.builtUnredacted.has(i)) : e;
        if (n.length > 0) {
            return J(n, this);
        }
        return Promise.resolve(false);
    }
    initializeDatadog = po(async ()=>{
        if (Fy() || UCs()) {
            this.datadogInitialized = false;
            return false;
        }
        try {
            this.datadogInitialized = true;
            return true;
        } catch (error) {
            c(error);
            this.datadogInitialized = false;
            return false;
        }
    });
    getUserBucket = po(()=>{
        let e = cO();
        let n = createHash("sha256").update(e).digest("hex");
        return parseInt(n.slice(0, 8), 16) % Q;
    });
    peerRateWindows = new Map;
}
const S = new q(()=>new T);
function yfo() {
    let e = S.of(B().host);
    e.initializeDatadog.cache?.clear?.();
    e.datadogInitialized = null;
}
async function JNe() {
    await S.of(B().host).sender.shutdown();
}
function ee(version) {
    return version.replace(/^(\d+\.\d+\.\d+-(?:dev|engine)\.\d{8})\.t\d+\.sha[a-f0-9]+$/, "$1");
}
function te(model, { isTrustedAnt, onAnthropicHost }) {
    if (typeof model !== "string") {
        return null;
    }
    if (isTrustedAnt) {
        return model;
    }
    if (model === xbe && onAnthropicHost) {
        return model;
    }
    if (!model.toLowerCase().includes("claude")) {
        return null;
    }
    let s = We(Ht(model), {
        identity: true
    });
    if (s in l8) {
        return s;
    }
    return "other";
}
function ne(message, n) {
    let n_feature_name = n.feature_name;
    if (message !== "tengu_feature_ok" || n_feature_name === undefined) {
        return n;
    }
    let s = k("tengu_agile_glade", null);
    let r = sr(s) ? CEr(s[n_feature_name]) : null;
    if (r === null) {
        return n;
    }
    if (r === 0) {
        return null;
    }
    let n_sample_rate = n.sample_rate;
    return {
        ...n,
        sample_rate: typeof n_sample_rate === "number" ? n_sample_rate * r : r
    };
}
async function ePt(message, n) {
    if (Ie() !== "firstParty") {
        return;
    }
    let i = S.of(B().host);
    let i_datadogInitialized = i.datadogInitialized;
    if (i_datadogInitialized === null) {
        i_datadogInitialized = await i.initializeDatadog();
    }
    if (!i_datadogInitialized || !O.has(message)) {
        return;
    }
    let r = ne(message, n);
    if (r === null) {
        return;
    }
    let droppedSinceLastForward;
    if (K(message)) {
        let d = r.mcpServerKeyHash ?? r.mcpServerBaseUrl;
        let l = X(i.peerRateWindows, message, d === undefined ? undefined : String(d), Date.now());
        if (!l.admitted) {
            return;
        }
        if (l.droppedSinceLastForward > 0) {
            droppedSinceLastForward = l.droppedSinceLastForward;
        }
    }
    try {
        let d = await TEr({
            model: r.model,
            betas: r.betas
        });
        let { envContext, head_sha, is_clean_tree_at_start, changed_file_count_at_start, untracked_file_count_at_start, ...rest } = d;
        let u = {
            ...rest,
            ...envContext,
            ...C(message, r),
            userBucket: i.getUserBucket(),
            ...droppedSinceLastForward !== undefined && {
                droppedSinceLastForward
            }
        };
        j(u);
        if (typeof u.toolName === "string") {
            u.toolName = G(u.toolName, u.isMcp === true);
        }
        if (u.model !== undefined) {
            let onAnthropicHost = vi();
            let m = te(u.model, {
                isTrustedAnt: false,
                onAnthropicHost
            });
            if (m === null) {
                return;
            }
            u.model = m;
        }
        if (typeof u.version === "string") {
            u.version = ee(u.version);
        }
        if (u.status !== undefined && u.status !== null) {
            let p = String(u.status);
            u.http_status = p;
            let m = p.charAt(0);
            if (m >= "1" && m <= "5") {
                u.http_status_range = `${m}xx`;
            }
            delete u.status;
        }
        let y = Oyo();
        let b = y ? Nks(u) : u;
        let w = {
            ddsource: "nodejs",
            ddtags: [
                `event:${message}`,
                ...U.filter((p)=>b[p] !== undefined && b[p] !== null).map((p)=>`${v(p)}:${b[p]}`)
            ].join(","),
            message,
            service: "claude-code",
            hostname: "claude-code",
            env: "external"
        };
        for (let [p, m] of Object.entries(b)){
            if (m !== undefined && m !== null) {
                w[v(p)] = m;
            }
        }
        if (!y) {
            i.builtUnredacted.add(w);
        }
        i.sender.enqueue(w);
    } catch (error) {
        c(error);
    }
}
function getFlushIntervalMs() {
    return a.CLAUDE_CODE_DATADOG_FLUSH_INTERVAL_MS || P;
}
export { sbr, ibr, yfo, JNe, ePt };
