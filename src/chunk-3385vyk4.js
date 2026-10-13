import { rkr } from "/$bunfs/root/chunk-6dwnw6av.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Vn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { un, ei, A8e, Ton, u2n, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Zt, Kl, xe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ua } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { uYe, qi, f_, Sde, BCe } from "/$bunfs/root/chunk-gr4a0fky.js";
import { ea } from "/$bunfs/root/chunk-75wzvwyz.js";
import { Iw, Hu, Vt, xn } from "/$bunfs/root/chunk-k3tkc302.js";
import { yt } from "/$bunfs/root/chunk-f41czxrs.js";
import { K8t } from "/$bunfs/root/chunk-ypkrahyx.js";
import { EL } from "/$bunfs/root/chunk-6xvcnbea.js";
import { hW } from "/$bunfs/root/chunk-1k3a7x55.js";
import { $Jn, Nzr, FJn, p7e, dqo, uqo, pqo } from "/$bunfs/root/chunk-8wvdsmns.js";
import { JPe, oln } from "/$bunfs/root/chunk-at1vfjxr.js";
import { UOr } from "/$bunfs/root/chunk-f54kp5tf.js";
import { Dk } from "/$bunfs/root/chunk-b7w13qrv.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { randomUUID } from "crypto";
function nHo(e) {
    return e.type !== "control_request" && e.type !== "control_response" && e.type !== "keep_alive" && e.type !== "control_cancel_request" && e.type !== "transcript_mirror" && !(e.type === "system" && (e.subtype === "task_summary" || e.subtype === "session_metadata"));
}
function P(e) {
    return {
        type: "assistant",
        message: e.error === "verification_required" ? Nzr(e.message) : e.message,
        uuid: e.uuid,
        requestId: undefined,
        timestamp: e.timestamp ?? new Date().toISOString(),
        remoteSourced: true,
        error: e.error,
        ...e.is_api_error_message && {
            isApiErrorMessage: true
        },
        ...e.api_error !== undefined && {
            apiError: e.api_error
        },
        ...e.api_error_params !== undefined && {
            apiErrorParams: e.api_error_params
        },
        ...e.api_error_code !== undefined && {
            apiErrorCode: e.api_error_code
        },
        ...false
    };
}
function L(e) {
    return {
        type: "stream_event",
        event: e.event,
        ...e.ttft_ms !== undefined && {
            ttftMs: e.ttft_ms
        }
    };
}
function h(uuid) {
    let n = uuid;
    if (typeof n === "string" && n !== "" && uuid !== undefined) {
        return uuid;
    }
    t("[sdkMessageAdapter] frame uuid missing or not a string — minting one", {
        level: "error"
    });
    return randomUUID();
}
function R(e) {
    if (typeof e.content === "string") {
        return true;
    }
    t(`[sdkMessageAdapter] Dropping ${e.subtype} frame whose content is not a string`, {
        level: "error"
    });
    return false;
}
function fOr(e) {
    if (!Array.isArray(e)) {
        return [];
    }
    return e.filter((n)=>typeof n === "string" && !n.startsWith("[ede_diagnostic]") && !n.startsWith("[session_crash]"));
}
function j(e) {
    if (e.subtype === "success") {
        return {
            type: "system",
            subtype: "informational",
            content: "Session completed successfully",
            level: "info",
            uuid: h(e.uuid),
            timestamp: new Date().toISOString()
        };
    }
    let e_errors = e.errors;
    if (!Array.isArray(e_errors)) {
        t(`[sdkMessageAdapter] ${e.subtype} result without an errors[] array \u2014 nothing to show`);
        return null;
    }
    let s = fOr(e_errors);
    if (s.length === 0) {
        return null;
    }
    return {
        type: "system",
        subtype: "informational",
        content: un(s.join(", ")),
        level: "warning",
        uuid: h(e.uuid),
        timestamp: new Date().toISOString()
    };
}
function N(e) {
    let e_status = e.status;
    if (typeof e_status !== "string" || e_status === "") {
        return null;
    }
    return {
        type: "system",
        subtype: "informational",
        content: e_status === "compacting" ? "Compacting conversation…" : `Status: ${un(e_status)}`,
        level: "info",
        uuid: h(e.uuid),
        timestamp: new Date().toISOString()
    };
}
function B(e) {
    let { tool_name, elapsed_time_seconds, tool_use_id } = e;
    if (typeof tool_name !== "string" || typeof elapsed_time_seconds !== "number" || !Number.isFinite(elapsed_time_seconds) || typeof tool_use_id !== "string") {
        t("[sdkMessageAdapter] Dropping tool_progress frame with a non-string tool_name/tool_use_id or non-finite elapsed_time_seconds", {
            level: "error"
        });
        return null;
    }
    return {
        type: "system",
        subtype: "informational",
        content: `Tool ${un(tool_name)} running for ${elapsed_time_seconds}s\u2026`,
        level: "info",
        uuid: h(e.uuid),
        timestamp: new Date().toISOString(),
        toolUseID: e.tool_use_id
    };
}
function W(e) {
    let e_compact_metadata = e.compact_metadata;
    if (typeof e_compact_metadata !== "object" || e_compact_metadata === null) {
        t("[sdkMessageAdapter] Dropping compact_boundary frame without compact_metadata", {
            level: "error"
        });
        return null;
    }
    return {
        type: "system",
        subtype: "compact_boundary",
        content: "Conversation compacted",
        level: "info",
        uuid: h(e.uuid),
        timestamp: new Date().toISOString(),
        compactMetadata: FJn(e.compact_metadata),
        remoteSourced: true
    };
}
function oLt(e) {
    let model = typeof e.model === "string" ? e.model : undefined;
    if (e.model !== undefined && model === undefined) {
        t(`[sdkMessageAdapter] init frame model is ${e.model === null ? "null" : typeof e.model}, not a string \u2014 keeping the current model`, {
            level: "error"
        });
    }
    let cwd = typeof e.cwd === "string" ? e.cwd : undefined;
    if (e.cwd !== undefined && cwd === undefined) {
        t("[sdkMessageAdapter] init frame cwd is not a string — not adopting", {
            level: "error"
        });
    }
    let slashCommands;
    if (Array.isArray(e.slash_commands)) {
        slashCommands = e.slash_commands.filter((l)=>typeof l === "string");
    } else if (e.slash_commands !== undefined) {
        t("[sdkMessageAdapter] init frame slash_commands is not an array — keeping the local command list", {
            level: "error"
        });
    }
    let mcpServers;
    if (Array.isArray(e.mcp_servers)) {
        mcpServers = e.mcp_servers.flatMap((l)=>{
            if (typeof l === "object" && l !== null && typeof l.name === "string" && (l.status === undefined || typeof l.status === "string")) {
                return [
                    l.status === undefined ? {
                        name: l.name
                    } : {
                        name: l.name,
                        status: l.status
                    }
                ];
            }
            return [];
        });
    } else if (e.mcp_servers !== undefined) {
        t("[sdkMessageAdapter] init frame mcp_servers is not an array — ignoring", {
            level: "error"
        });
    }
    let skills;
    if (Array.isArray(e.skills)) {
        skills = e.skills.filter((l)=>typeof l === "string");
    } else if (e.skills !== undefined) {
        t("[sdkMessageAdapter] init frame skills is not an array — ignoring", {
            level: "error"
        });
    }
    let plugins;
    if (Array.isArray(e.plugins)) {
        plugins = e.plugins.flatMap((l)=>{
            if (typeof l === "object" && l !== null && typeof l.name === "string") {
                return [
                    l.name
                ];
            }
            return [];
        });
    } else if (e.plugins !== undefined) {
        t("[sdkMessageAdapter] init frame plugins is not an array — ignoring", {
            level: "error"
        });
    }
    let m;
    if (Array.isArray(e.tools)) {
        m = e.tools.filter((l)=>typeof l === "string");
    } else if (e.tools !== undefined) {
        t("[sdkMessageAdapter] init frame tools is not an array — ignoring", {
            level: "error"
        });
    }
    return {
        model,
        cwd,
        slashCommands,
        skills,
        plugins,
        mcpServers,
        tools: m,
        workerEpoch: oln(e)
    };
}
function dft(e) {
    if (!e) {
        return;
    }
    if (typeof e.condition !== "string" || !Number.isSafeInteger(e.iterations) || e.iterations < 0 || !Number.isSafeInteger(e.set_at) || e.set_at < 0 || !Number.isSafeInteger(e.tokens_at_start) || e.tokens_at_start < 0 || e.last_reason !== undefined && typeof e.last_reason !== "string") {
        return;
    }
    return {
        condition: ei(e.condition, {
            maxCodeUnits: 4000
        }),
        iterations: e.iterations,
        setAt: e.set_at,
        tokensAtStart: e.tokens_at_start,
        ...e.last_reason !== undefined && {
            lastReason: ei(e.last_reason, {
                maxCodeUnits: 512
            })
        }
    };
}
const q = {
    env: true,
    settings: true,
    clientdata: true,
    experiment: true,
    "model-default": true,
    "unknown-model": true,
    auto: true
};
const G = new Set(Object.keys(q));
function mOr(e) {
    if (typeof e !== "object" || e === null || typeof e.enabled !== "boolean" || typeof e.enforced !== "boolean" || !Number.isSafeInteger(e.effective_window) || e.effective_window <= 0 || !Number.isSafeInteger(e.threshold) || e.threshold <= 0 || !G.has(e.source)) {
        if (ea().claim("remote_autocompact_frame_drop")) {
            t("[sdkMessageAdapter] Dropping malformed autocompact_state frame");
            f("remote_autocompact_sync", "invalid_frame");
        }
        return;
    }
    return {
        enabled: e.enabled,
        effectiveWindow: e.effective_window,
        threshold: e.threshold,
        enforced: e.enforced,
        source: e.source
    };
}
function sqn(e, n, via) {
    let remoteAutocompactState = mOr(n);
    if (remoteAutocompactState === undefined) {
        e((y)=>{
            if (y.remoteAutocompactState === undefined) {
                return y;
            }
            return {
                ...y,
                remoteAutocompactState: undefined
            };
        });
        return;
    }
    let a = false;
    e((y)=>{
        if (y.remoteAutocompactState !== undefined && UOr(y.remoteAutocompactState, remoteAutocompactState)) {
            return y;
        }
        a = true;
        return {
            ...y,
            remoteAutocompactState
        };
    });
    if (!a) {
        return;
    }
    i("tengu_remote_autocompact_state_adopted", {
        via,
        enabled: remoteAutocompactState.enabled,
        enforced: remoteAutocompactState.enforced,
        source: d(remoteAutocompactState.source)
    });
}
const V = (e, n)=>Vn(ua(e, (s)=>s === undefined), ua(n, (s)=>s === undefined));
function iqn(e, n) {
    let s = [];
    let r = f_();
    let a = false;
    let y = false;
    let g = (frames)=>{
        if (!e()) {
            return;
        }
        i("tengu_remote_rate_limits_dropped", {
            via: d(n),
            reason: b("account_switched"),
            frames
        });
    };
    let m = (S, k)=>{
        if (!e()) {
            return;
        }
        let A = pqo(S);
        if (A === undefined) {
            return;
        }
        if ((k === "seed" || k === "history") && (uqo(A.info) || A.info.resetsAt === undefined && A.info.overageResetsAt === undefined)) {
            return;
        }
        let M = qi();
        let v = {
            ...dqo(A.info, {
                unifiedRateLimitFallbackAvailable: M.unifiedRateLimitFallbackAvailable,
                upgradePaths: M.upgradePaths
            }),
            ...M.lowPriorityOffer !== undefined && {
                lowPriorityOffer: M.lowPriorityOffer
            },
            ...M.lowPriorityRetryAfterSeconds !== undefined && {
                lowPriorityRetryAfterSeconds: M.lowPriorityRetryAfterSeconds
            },
            ...M.lowPriorityMaxWaitSeconds !== undefined && {
                lowPriorityMaxWaitSeconds: M.lowPriorityMaxWaitSeconds
            }
        };
        if (Sde() && V(v, M)) {
            return;
        }
        BCe(v);
        i("tengu_remote_rate_limits_adopted", {
            via: d(k),
            status: d(A.info.status),
            degradation: d(A.degradation),
            frames: S.length
        });
    };
    let l = (S, k)=>{
        if (y) {
            return;
        }
        try {
            m(S, k);
        } catch (error) {
            c(error);
        }
    };
    let _ = (S = n)=>{
        a = false;
        let k = s;
        s = [];
        if (k.length === 0) {
            return;
        }
        if (r !== f_()) {
            g(k.length);
            return;
        }
        l(k, S);
    };
    let w = (S)=>{
        let k = f_();
        if (s.length > 0 && k !== r) {
            g(s.length);
            s = [];
        }
        r = k;
        s.push(S);
    };
    return {
        adopt (S, k) {
            _();
            l(S, k);
        },
        push (S) {
            if (y) {
                return;
            }
            w(S);
            if (!a) {
                a = true;
                queueMicrotask(()=>{
                    if (a) {
                        _();
                    }
                });
            }
        },
        hold (S) {
            if (y) {
                return;
            }
            w(S);
        },
        settle (S) {
            if (!a) {
                _(S);
            }
        },
        hasHeld: ()=>s.length > 0 && !a,
        flush: ()=>_(),
        dispose () {
            y = true;
            s = [];
        }
    };
}
function XPe(e, n) {
    if (!JPe(e)) {
        return {
            type: "ignored"
        };
    }
    switch(e.type){
        case "control_request":
        case "control_response":
        case "control_cancel_request":
            return {
                type: "ignored"
            };
        case "assistant":
            return {
                type: "message",
                message: P(e)
            };
        case "user":
            {
                let content = e.message?.content;
                if (Array.isArray(content) && content.some((g)=>g.type === "tool_result")) {
                    let remoteToolDenialKind = $Jn(e.tool_result_meta, content);
                    return {
                        type: "message",
                        message: {
                            ...xe({
                                content,
                                toolUseResult: K8t(e.tool_use_result, e.message),
                                uuid: e.uuid,
                                timestamp: e.timestamp
                            }),
                            remoteSourced: true,
                            ...false,
                            ...remoteToolDenialKind !== undefined && {
                                remoteToolDenialKind
                            }
                        }
                    };
                }
                if (e.parent_tool_use_id) {
                    return {
                        type: "ignored"
                    };
                }
                if (e.isSynthetic && !EL(e.origin)) {
                    return {
                        type: "ignored"
                    };
                }
                let y = content === Iw || Array.isArray(content) && content.some((g)=>g.type === "text" && (g.text === Iw || g.text === Hu));
                if (n?.convertUserTextMessages || y) {
                    if (typeof content === "string" || Array.isArray(content)) {
                        return {
                            type: "message",
                            message: xe({
                                content,
                                toolUseResult: e.tool_use_result,
                                uuid: e.uuid,
                                timestamp: e.timestamp
                            })
                        };
                    }
                }
                return {
                    type: "ignored"
                };
            }
        case "stream_event":
            return {
                type: "stream_event",
                event: L(e)
            };
        case "result":
            {
                if (e.subtype === "success") {
                    return {
                        type: "ignored"
                    };
                }
                let r = j(e);
                if (r) {
                    return {
                        type: "message",
                        message: r
                    };
                }
                return {
                    type: "ignored"
                };
            }
        case "system":
            if (e.subtype === "init") {
                return {
                    type: "ignored"
                };
            }
            if (e.subtype === "status") {
                if (e.status === "requesting") {
                    return {
                        type: "stream_event",
                        event: {
                            type: "stream_request_start"
                        }
                    };
                }
                let r = N(e);
                if (r) {
                    return {
                        type: "message",
                        message: r
                    };
                }
                return {
                    type: "ignored"
                };
            }
            if (e.subtype === "compact_boundary") {
                let r = W(e);
                if (r) {
                    return {
                        type: "message",
                        message: r
                    };
                }
                return {
                    type: "ignored"
                };
            }
            if (e.subtype === "model_refusal_fallback") {
                return {
                    type: "message",
                    message: {
                        type: "system",
                        subtype: "model_refusal_fallback",
                        content: e.direction === "retry" && e.scope !== "local" && typeof e.original_model === "string" && typeof e.fallback_model === "string" ? uYe(e.original_model, e.fallback_model, e.api_refusal_category ?? null) : ei(typeof e.content === "string" ? e.content : "", {
                            drop: u2n,
                            maxCodeUnits: Ton
                        }),
                        level: "warning",
                        trigger: e.trigger,
                        direction: e.direction,
                        ...e.scope !== undefined && {
                            scope: e.scope
                        },
                        originalModel: e.original_model,
                        fallbackModel: e.fallback_model,
                        requestId: e.request_id,
                        apiRefusalCategory: e.api_refusal_category ?? null,
                        apiRefusalExplanation: e.api_refusal_explanation ?? null,
                        ...e.retracted_message_uuids !== undefined && {
                            retractedMessageUuids: e.retracted_message_uuids
                        },
                        ...e.refused_user_message_uuid !== undefined && {
                            refusedUserMessageUuid: e.refused_user_message_uuid
                        },
                        isMeta: false,
                        uuid: h(e.uuid),
                        timestamp: new Date().toISOString()
                    }
                };
            }
            if (e.subtype === "model_fallback") {
                if (!R(e)) {
                    return {
                        type: "ignored"
                    };
                }
                return {
                    type: "message",
                    message: {
                        type: "system",
                        subtype: "model_fallback",
                        content: un(e.content),
                        level: "warning",
                        trigger: e.trigger,
                        originalModel: e.original_model,
                        fallbackModel: e.fallback_model,
                        isMeta: false,
                        uuid: h(e.uuid),
                        timestamp: new Date().toISOString()
                    }
                };
            }
            if (e.subtype === "model_consent_fallback") {
                if (!R(e)) {
                    return {
                        type: "ignored"
                    };
                }
                return {
                    type: "message",
                    message: p7e({
                        ...e,
                        content: un(e.content),
                        uuid: h(e.uuid)
                    })
                };
            }
            if (e.subtype === "informational") {
                if (!R(e)) {
                    return {
                        type: "ignored"
                    };
                }
                return {
                    type: "message",
                    message: {
                        type: "system",
                        subtype: "informational",
                        content: un(e.content),
                        level: e.level,
                        isMeta: false,
                        uuid: h(e.uuid),
                        timestamp: new Date().toISOString(),
                        ...e.tool_use_id && {
                            toolUseID: e.tool_use_id
                        },
                        ...e.prevent_continuation && {
                            preventContinuation: e.prevent_continuation
                        }
                    }
                };
            }
            if (e.subtype === "tool_host_result") {
                let lines = Array.isArray(e.lines) ? e.lines.filter((m)=>typeof m === "string").slice(0, 32).map((m)=>ei(m, {
                        maxCodeUnits: 2100
                    })).filter((m)=>m.trim() !== "") : [];
                let label = typeof e.label === "string" ? ei(e.label, {
                    maxCodeUnits: 320
                }) : undefined;
                let y = e.unverified === true && label !== undefined && label.trim() !== "";
                if (typeof e.tool_use_id !== "string" || lines.length === 0 && !y) {
                    return {
                        type: "ignored"
                    };
                }
                let g = h(e.uuid);
                return {
                    type: "message",
                    message: Zt({
                        type: "tool_host_result_lines",
                        toolUseID: e.tool_use_id,
                        host: Dk(typeof e.host?.name === "string" ? e.host.name : ""),
                        lines,
                        ...label !== undefined && {
                            label
                        },
                        ...y && {
                            unverified: true
                        }
                    }, {
                        now: ()=>new Date().toISOString(),
                        uuid: ()=>g
                    })
                };
            }
            if (e.subtype === "permission_denied") {
                return {
                    type: "ignored"
                };
            }
            if (e.subtype === "local_command_output") {
                if (!R(e)) {
                    return {
                        type: "ignored"
                    };
                }
                let r = h(e.uuid);
                return {
                    type: "message",
                    message: Kl({
                        content: un(e.content),
                        uuid: ()=>r
                    })
                };
            }
            t(`[sdkMessageAdapter] Ignoring system message subtype: ${e.subtype}`);
            return {
                type: "ignored"
            };
        case "tool_progress":
            if (e.heartbeat === true || e.subagent_retry !== undefined || e.tool_name === yt) {
                t("[sdkMessageAdapter] Ignoring heartbeat/subagent-retry tool_progress frame");
                return {
                    type: "ignored"
                };
            }
            let s = B(e);
            if (s) {
                return {
                    type: "message",
                    message: s
                };
            }
            return {
                type: "ignored"
            };
        case "auth_status":
            t("[sdkMessageAdapter] Ignoring auth_status message");
            return {
                type: "ignored"
            };
        case "tool_use_summary":
            t("[sdkMessageAdapter] Ignoring tool_use_summary message");
            return {
                type: "ignored"
            };
        case "rate_limit_event":
            t("[sdkMessageAdapter] Ignoring rate_limit_event message");
            return {
                type: "ignored"
            };
        case "active_goal":
            return {
                type: "ignored"
            };
        case "autocompact_state":
            return {
                type: "ignored"
            };
        case "env_manager_log":
            {
                let r = typeof e.data?.content === "string" ? e.data.content : null;
                if (r === null) {
                    t("[sdkMessageAdapter] env_manager_log without data.content — orchestrator wire change?", {
                        level: "warn"
                    });
                    return {
                        type: "env_log",
                        message: ""
                    };
                }
                let a = r.split(/\r\n?|\n/);
                let y = "";
                for(let g = a.length - 1; g >= 0; g--){
                    y = ei(a[g], {
                        maxCodeUnits: 512
                    });
                    if (y !== "") {
                        break;
                    }
                }
                return {
                    type: "env_log",
                    message: y
                };
            }
        case "conversation_reset":
            {
                let newConversationId = e.new_conversation_id;
                if (typeof newConversationId !== "string" || newConversationId === "") {
                    t("[sdkMessageAdapter] Dropping conversation_reset frame without a string new_conversation_id", {
                        level: "error"
                    });
                    return {
                        type: "ignored"
                    };
                }
                return {
                    type: "conversation_reset",
                    newConversationId
                };
            }
        default:
            t(`[sdkMessageAdapter] Unknown message type: ${e.type}`);
            return {
                type: "ignored"
            };
    }
}
function aqn(e) {
    return e.type === "result";
}
const z = 64;
const H = 128;
function I(e) {
    return typeof e === "string" && e.length > 0 && e.length <= H;
}
function X(e) {
    let n = "user_message_uuids" in e ? e.user_message_uuids : null;
    let s = Array.isArray(n) ? n.filter(I).slice(0, z) : [];
    if (s.length > 0) {
        return s;
    }
    let r = "user_message_uuid" in e ? e.user_message_uuid : undefined;
    if (I(r)) {
        return [
            r
        ];
    }
}
function rHo(e, n, s) {
    let r = X(e);
    return s.taskWake || (r === undefined ? s.sent : r.some((a)=>n.has(a)));
}
function uft(e) {
    let n = rkr();
    let s = new Map(Object.entries(n.shape));
    let r = typeof e === "object" && e !== null && !Array.isArray(e) ? vo(e, (y, g)=>g === "status" || (s.get(g)?.safeParse(y).success ?? false)) : e;
    let a = n.safeParse(r);
    if (a.success) {
        return a.data;
    }
    if (ea().claim("remote_rate_limit_frame_drop")) {
        i("tengu_remote_rate_limits_dropped", {
            reason: b("invalid_frame"),
            frames: 1
        });
    }
}
function lqn() {
    return {
        retracted: new Set,
        inProgressToolUses: new Map,
        evictedToolUses: new Set,
        nestedUuidAliases: new Map
    };
}
function cqn(e, n, s) {
    let r = s.filter((a)=>a !== n);
    if (r.length > 0) {
        e.nestedUuidAliases.set(n, r);
    }
}
function i1e(e) {
    if (typeof e !== "object" || e === null) {
        return null;
    }
    let n = e;
    let s = typeof n.uuid === "string" ? n.uuid : null;
    if (n.type === "system" && n.subtype === "model_refusal_fallback") {
        let r = T(n.retracted_message_uuids, s);
        if (r) {
            return {
                uuids: r,
                source: "retraction_banner"
            };
        }
        return null;
    }
    if (n.type === "assistant") {
        let r = T(n.supersedes, s);
        if (r) {
            return {
                uuids: r,
                source: "supersedes"
            };
        }
        return null;
    }
    return null;
}
function T(e, n) {
    if (!Array.isArray(e)) {
        return null;
    }
    let s = e.filter((r)=>typeof r === "string" && r !== n);
    if (s.length > 0) {
        return s;
    }
    return null;
}
function Y(e, retracted) {
    if (retracted.size === 0) {
        return e;
    }
    let s = e.filter((r)=>!retracted.has(r.uuid));
    if (s.length === e.length) {
        return e;
    }
    return s;
}
function dqn(e, n, s) {
    for (let r of s){
        e.inProgressToolUses.set(r, n);
    }
}
function ran(e, n) {
    for (let s of n){
        e.inProgressToolUses.delete(s);
    }
}
function oan({ index, signal, surface, setMessages, setInProgressToolUseIDs }) {
    let newly_retracted_count = F(signal.uuids, (l)=>!index.retracted.has(l));
    for (let l of signal.uuids){
        index.retracted.add(l);
        for (let _ of index.nestedUuidAliases.get(l) ?? []){
            index.retracted.add(_);
        }
    }
    let ids = [
        ...index.inProgressToolUses
    ].filter(([, l])=>index.retracted.has(l)).map(([l])=>l);
    ran(index, ids);
    for (let l of ids){
        index.evictedToolUses.add(l);
    }
    if (ids.length > 0 && setInProgressToolUseIDs) {
        setInProgressToolUseIDs({
            action: "remove",
            ids
        });
    }
    setMessages((l)=>Y(l, index.retracted));
    i("tengu_refusal_retraction_evicted", {
        surface: d(surface),
        source: d(signal.source),
        uuid_count: signal.uuids.length,
        newly_retracted_count,
        tool_use_cleared_count: ids.length
    });
}
function uqn(e, n, s, r) {
    if (r !== null && e.retracted.has(r)) {
        return 0;
    }
    let a = F(n, (y)=>e.evictedToolUses.has(y));
    if (a > 0) {
        i("tengu_refusal_retraction_orphan_tool_result", {
            surface: d(s),
            count: a
        });
    }
    return a;
}
function oHo({ index, events, surface, setMessages, setInProgressToolUseIDs }) {
    let g = 0;
    let m = 0;
    let l = 0;
    for (let _ of events){
        if (_.source !== "worker") {
            if (i1e(_.payload)) {
                if (_.source === undefined) {
                    l++;
                } else {
                    m++;
                }
            }
            continue;
        }
        let signal = i1e(_.payload);
        if (signal) {
            g++;
            oan({
                index,
                signal,
                surface,
                setMessages,
                setInProgressToolUseIDs
            });
        }
    }
    if (m > 0) {
        i("tengu_refusal_retraction_unauthenticated_signal", {
            surface: d(surface),
            reason: b("source_mismatch"),
            count: m
        });
    }
    if (l > 0) {
        i("tengu_refusal_retraction_unauthenticated_signal", {
            surface: d(surface),
            reason: b("source_missing"),
            count: l
        });
    }
    return g;
}
function sLt(e, n, s) {
    if (!e.retracted.has(n)) {
        return false;
    }
    i("tengu_refusal_retraction_late_drop", {
        surface: d(s)
    });
    return true;
}
function gOr(e, n) {
    if (n.type !== "system") {
        return false;
    }
    switch(n.subtype){
        case "background_tasks_changed":
            if (Array.isArray(n.tasks)) {
                e.clear();
                for (let s of n.tasks){
                    if (typeof s?.task_id === "string") {
                        e.set(s.task_id, U(s.task_id, s, s.subagent_type));
                    }
                }
            }
            return true;
        case "task_started":
            if (typeof n.task_id === "string" && n.is_backgrounded !== false) {
                e.set(n.task_id, U(n.task_id, n, e.get(n.task_id)?.subagentType));
            }
            return true;
        case "task_notification":
            if (typeof n.task_id === "string") {
                e.delete(n.task_id);
            }
            return true;
        case "task_progress":
        case "task_updated":
            return true;
        default:
            return false;
    }
}
const Q = 256;
function J(awaitingFinish, n) {
    if (n.type !== "system") {
        return;
    }
    switch(n.subtype){
        case "background_tasks_changed":
            if (Array.isArray(n.tasks)) {
                for (let s of n.tasks){
                    if (s?.awaited !== true) {
                        D(awaitingFinish, s?.task_id, s?.ambient);
                    }
                }
            }
            return;
        case "task_started":
            if (n.is_backgrounded !== false && n.awaited !== true) {
                D(awaitingFinish, n.task_id, n.ambient);
            }
            return;
        case "task_updated":
            if (n.patch?.is_backgrounded === true) {
                D(awaitingFinish, n.task_id);
            }
            return;
        default:
            return;
    }
}
function D(awaitingFinish, n, s) {
    if (typeof n !== "string" || s === true || awaitingFinish.has(n)) {
        return;
    }
    if (awaitingFinish.size >= Q) {
        let r = awaitingFinish.values().next().value;
        if (r !== undefined) {
            awaitingFinish.delete(r);
        }
    }
    awaitingFinish.add(n);
}
function Z(awaitingFinish, n) {
    return n.type === "system" && n.subtype === "task_notification" && typeof n.task_id === "string" && awaitingFinish.delete(n.task_id);
}
function san(e, n) {
    J(e.awaitingFinish, n);
    return {
        backgroundTaskEnded: Z(e.awaitingFinish, n),
        isTaskLifecycleFrame: gOr(e.running, n)
    };
}
function U(id, n, s) {
    let r = (a)=>{
        if (typeof a === "string") {
            return ei(a, {
                maxCodeUnits: A8e
            });
        }
    };
    return {
        id,
        taskType: r(n.task_type),
        subagentType: r(s),
        description: r(n.description) ?? "",
        ambient: n.ambient === true
    };
}
function pqn(e, n) {
    return e.length === n.length && e.every((s, r)=>s.id === n[r]?.id && s.taskType === n[r]?.taskType && s.subagentType === n[r]?.subagentType && s.description === n[r]?.description && s.ambient === n[r]?.ambient);
}
const ee = 100;
const te = 256;
function ian(e) {
    if (e.type !== "system" || e.subtype !== "session_metadata") {
        return;
    }
    let { metadata } = e;
    if (typeof metadata !== "object" || metadata === null) {
        return;
    }
    let s = "artifacts" in metadata ? metadata.artifacts : undefined;
    if (s === null || Array.isArray(s)) {
        return s;
    }
}
function hOr(e, n) {
    let s = oe(n ?? []);
    let r = Object.entries(e.frameUrls).filter(([, _])=>_.fromCloudSession !== true);
    if (s.length === 0 && r.length === Object.keys(e.frameUrls).length) {
        return e;
    }
    let a = new Set(r.map(([_])=>_));
    let frameUrls = Object.fromEntries([
        ...r,
        ...s.filter(([_])=>!a.has(_))
    ]);
    let g = Object.entries(e.frameUrls);
    let m = Object.entries(frameUrls);
    if (g.length === m.length && g.every(([_, w], S)=>{
        let [k, A] = m[S];
        let M = Object.entries(w);
        let v = Object.entries(A);
        return _ === k && M.length === v.length && M.every(([E, x])=>v.some(([K, C])=>K === E && C === x));
    })) {
        return e;
    }
    return {
        ...e,
        frameUrls
    };
}
const re = p(()=>u({
        url: o(),
        title: o().optional().catch(undefined),
        updated_at: o().optional().catch(undefined)
    }));
function oe(e) {
    let n = new Map;
    for (let s of e){
        let r = re().safeParse(s);
        if (!r.success) {
            continue;
        }
        let { url, title, updated_at } = r.data;
        let m = Vt(url);
        if (m === null) {
            continue;
        }
        let l = updated_at !== undefined ? Date.parse(updated_at) : NaN;
        let _ = {
            url: xn(m),
            updatedAt: Number.isFinite(l) ? l : 0,
            ...title !== undefined && title !== "" && {
                title: ne(title, te)
            },
            fromCloudSession: true
        };
        let w = n.get(m.slug);
        if (w === undefined || _.updatedAt >= w.updatedAt) {
            n.set(m.slug, _);
        }
    }
    return [
        ...n
    ].sort(([, s], [, r])=>s.updatedAt - r.updatedAt).slice(-ee).map(([s, r])=>[
            `${hW}${s}`,
            r
        ]);
}
function aan(e, n) {
    if (n.skills === undefined && n.plugins === undefined) {
        return e;
    }
    let s = n.tools ?? e?.tools;
    let commands = n.slashCommands ?? e?.commands;
    return {
        skills: n.skills ?? [],
        plugins: n.plugins ?? [],
        ...s !== undefined && {
            tools: s
        },
        ...commands !== undefined && {
            commands
        }
    };
}
export { nHo, fOr, oLt, dft, mOr, sqn, iqn, XPe, aqn, rHo, uft, lqn, cqn, i1e, dqn, ran, oan, uqn, oHo, sLt, gOr, san, pqn, ian, hOr, aan };
