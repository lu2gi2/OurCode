import { lt, B, cs } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, W, l, Hp } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { oh, mp, _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { g, m, f, Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { $Ao, no, rh, son, nu, Gl, ar } from "/$bunfs/root/chunk-c56kpkt7.js";
import { ICs } from "/$bunfs/root/chunk-xb9cceab.js";
import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { fl, c } from "/$bunfs/root/chunk-etbngzss.js";
import { ci } from "/$bunfs/root/chunk-6dwnw6av.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ua } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Lo } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { fF, bn, Ib, uP, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { cR } from "/$bunfs/root/chunk-sfgejbsr.js";
import { Sfo } from "/$bunfs/root/chunk-vefqvksa.js";
import { im, OE } from "/$bunfs/root/chunk-ezbcjpga.js";
import { y_e } from "/$bunfs/root/chunk-4n9ze18z.js";
import { UKe } from "/$bunfs/root/chunk-gd43pmvk.js";
import { E5 } from "/$bunfs/root/chunk-g8vtprgy.js";
import { W_ } from "/$bunfs/root/chunk-b7w13qrv.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, M, T, u, _u } from "/$bunfs/root/chunk-smx21d0k.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { randomUUID } from "crypto";
import { types } from "util";
function hps(e) {
    if (e.branchDropped && e.warnMessage) {
        i("tengu_bridge_outcome_branch_dropped", {
            reason: d(e.branchDropped)
        });
        t(e.warnMessage, {
            level: "warn"
        });
        if (e.branchDropped === "no_evidence") {
            console.warn(e.warnMessage);
        }
    }
    if (e.revisionGuessUsed) {
        i("tengu_bridge_revision_guess_used", {});
    }
}
const mps = "tengu_woven_harbor";
const oDn = "tengu_drifting_twilight";
const bao = true;
function Sao(e) {
    return e.githubPr == null;
}
const he = 16;
function ggr(mode, ultraplan) {
    return {
        type: "event",
        data: {
            type: "control_request",
            request_id: `set-mode-${randomUUID()}`,
            request: {
                subtype: "set_permission_mode",
                mode,
                ultraplan
            }
        }
    };
}
function wao(e) {
    return {
        envVars: Object.keys(e.environmentVariables ?? {}).length > 0,
        events: e.events.filter((n)=>!be(n)).map(ze)
    };
}
const H = "<redacted>";
function Z(e) {
    if (!sr(e)) {
        return;
    }
    let { seed_bundle_file_id, environment_variables } = e;
    if (seed_bundle_file_id === undefined && environment_variables === undefined) {
        return;
    }
    return {
        ...e,
        ...seed_bundle_file_id !== undefined && {
            seed_bundle_file_id: H
        },
        ...environment_variables !== undefined && {
            environment_variables: sr(environment_variables) ? Object.fromEntries(Object.keys(environment_variables).map((s)=>[
                    s,
                    H
                ])) : H
        }
    };
}
function gps(e) {
    let e_bind_attestation = e.bind_attestation;
    let r = Z(e);
    let session_context = Z(e.session_context);
    let config = Z(e.config);
    if (!r && !session_context && !config && e_bind_attestation === undefined) {
        return e;
    }
    return {
        ...r ?? e,
        ...session_context && {
            session_context
        },
        ...config && {
            config
        },
        ...e_bind_attestation !== undefined && {
            bind_attestation: sr(e_bind_attestation) ? {
                ...e_bind_attestation,
                signature: H
            } : H
        }
    };
}
const $e = new Set([
    "set_permission_mode",
    "set_mcp_permission_mode_override",
    "set_max_thinking_tokens",
    "mcp_toggle"
]);
function Se(e) {
    let request = e.data.request;
    if (e.data.type === "control_request" && typeof request?.subtype === "string") {
        return request.subtype;
    }
}
function be(e) {
    if (e.data.type === "user") {
        return true;
    }
    let n = Se(e);
    return n !== undefined && $e.has(n);
}
function ze(e) {
    return Se(e) ?? String(e.data.type);
}
function sDn(e) {
    let e_deviceBinding = e.deviceBinding;
    let r = e_deviceBinding ? e.events.filter((y)=>be(y) && !(e.deferFirstPrompt && y.data.type === "user")) : e.events;
    if (e_deviceBinding && r.length > he) {
        throw new x(`session create allows at most ${he} initial events, got ${r.length}`, "session create: too many initial events");
    }
    let environment_variables = e_deviceBinding ? {} : e.environmentVariables ?? {};
    let disallowed_tools = D([
        ...e.disallowedTools ?? [],
        ...e_deviceBinding ? ICs : []
    ]);
    return {
        ...e.title && {
            title: e.title
        },
        ...e.worker,
        ...vao(e.persistentVolume),
        events: r.map((y)=>({
                payload: y.data
            })),
        ...e.tags && {
            tags: e.tags
        },
        ...!e_deviceBinding && e.sessionGroupingId && {
            session_grouping_id: e.sessionGroupingId
        },
        ...!e_deviceBinding && e.agentId && {
            agent_id: e.agentId
        },
        ...Object.keys(environment_variables).length > 0 && {
            environment_variables
        },
        ...e_deviceBinding && {
            target_device_id: e_deviceBinding.deviceUUID,
            bind_attestation: {
                kid: e_deviceBinding.kid,
                signature: e_deviceBinding.signature
            },
            bind_attestation_issued_at: e_deviceBinding.issuedAt,
            ...e.requestElevatedTier && {
                security_tier: "elevated"
            },
            ...e.repositoriesTrusted && {
                repositories_trusted: true
            }
        },
        config: {
            sources: e.sources.map(We),
            outcomes: e.outcomes,
            ...e.model && {
                model: e.model
            },
            ...e.cwd && {
                cwd: e.cwd
            },
            ...e.effortLevel && {
                effort_level: e.effortLevel
            },
            ...e.seedBundleFileId && {
                seed_bundle_file_id: e.seedBundleFileId
            },
            ...e.reuseOutcomeBranches && {
                reuse_outcome_branches: true
            },
            ...e.appendSystemPrompt && {
                append_system_prompt: e.appendSystemPrompt
            },
            ...e.customSystemPrompt && {
                custom_system_prompt: e.customSystemPrompt
            },
            ...e.appendSubagentSystemPrompt && {
                append_subagent_system_prompt: e.appendSubagentSystemPrompt
            },
            ...e.fallbackModel && {
                fallback_model: e.fallbackModel
            },
            ...e.maxTurns !== undefined && {
                max_turns: e.maxTurns
            },
            ...e.maxBudgetUsd !== undefined && e.maxBudgetUsd > 0 && {
                max_budget_usd: e.maxBudgetUsd
            },
            ...e.allowedTools && e.allowedTools.length > 0 && {
                allowed_tools: e.allowedTools
            },
            ...e.outputSchema && {
                output_schema: e.outputSchema
            },
            ...!e_deviceBinding && e.correlationId && {
                correlation_id: e.correlationId
            },
            ...disallowed_tools.length > 0 && {
                disallowed_tools
            },
            ...e.builtinTools && e.builtinTools.length > 0 && {
                builtin_tools: [
                    ...e.builtinTools
                ]
            }
        }
    };
}
function vao(e) {}
function iDn(e, n) {
    let r = e === "v1alpha2" ? n?.session : n;
    if (typeof r?.id !== "string" || r.id === "") {
        return mp("no_session_id");
    }
    if (!son(r.id)) {
        return mp("unusable_session_id");
    }
    return oh({
        ...r,
        title: typeof r.title === "string" ? ci(r.title) : null
    });
}
function Eao(e, n) {
    return e.title || ci(n);
}
function We({ allow_unrestricted_git_push, ...rest }) {
    return rest;
}
function kao(e, n) {
    if (e === 401) {
        return `${n || "Claude login not accepted"} \xB7 Run /login, then try again`;
    }
}
function Tao(e, n) {
    if (n?.type === "not_found_error" && n.resource_type === "session_grouping") {
        return `Project not found: ${e}. Check the id \u2014 a Project you don't have access to looks the same as one that doesn't exist.`;
    }
    switch(n?.reason){
        case "public_grouping_hosted_only":
            return `${e} is a public Project, and public Projects run on Anthropic-hosted infrastructure only. Drop --environment (and any self-hosted target), or use a private Project.`;
        case "feature_disabled":
            return "Projects are not available for your organization.";
        default:
            return;
    }
}
function Lce(e) {
    return e?.kind === "self_hosted_pool";
}
function U$(e) {
    if (e.kind === "self_hosted_pool") {
        return e.pool_id;
    }
    return e.environment_id;
}
function SQ(e) {
    return e !== undefined && e.startsWith("ccpool_");
}
function VKe(e, n) {
    return e.find(n);
}
const qe = [
    "policySettings",
    "flagSettings",
    "userSettings"
];
function S_e() {
    let ignoredUntrustedPool;
    let n = Lo();
    for(let r = n.length - 1; r >= 0; r--){
        let source = n[r];
        let id = fe(source)?.remote?.defaultEnvironmentId;
        if (id === undefined) {
            continue;
        }
        if (SQ(id) && !qe.includes(source)) {
            ignoredUntrustedPool ??= {
                id,
                source
            };
            continue;
        }
        return {
            id,
            source,
            ignoredUntrustedPool: ignoredUntrustedPool?.id === id ? undefined : ignoredUntrustedPool
        };
    }
    return {
        id: undefined,
        source: undefined,
        ignoredUntrustedPool
    };
}
function J8t(e) {
    if (e.startsWith("ccpool_")) {
        return {
            self_hosted_runner_pool_id: e
        };
    }
    return {
        environment_id: e
    };
}
const Ye = p(()=>u({
        environments: T(_u((e)=>typeof e === "object" && e !== null && !Array.isArray(e))),
        has_more: M().optional().catch(undefined),
        last_id: o().nullable().optional().catch(undefined)
    }));
const limit = 100;
const ee = 10;
function Je(data) {
    if (typeof data === "string" && data.trim().length === 0) {
        return new x("The cloud environments service returned an empty response (HTTP 200 with no body). This is usually temporary — try again in a moment.", "fetchEnvironments: HTTP 200 with an empty body");
    }
    if (typeof data === "string") {
        return new x("The cloud environments service returned a response in an unexpected format (HTTP 200 with a non-JSON body). This is usually temporary — try again in a moment.", "fetchEnvironments: HTTP 200 with a non-JSON body");
    }
    return new x("The cloud environments service returned a response in an unexpected format (HTTP 200 without a usable environments list). This is usually temporary — try again in a moment.", "fetchEnvironments: HTTP 200 JSON body without a valid environments array");
}
async function B$(e, n, r) {
    return Zr("teleport_environments_list", async ()=>{
        if (Ie() !== "firstParty") {
            throw Error("Remote environments are only available on the first-party Anthropic API provider.");
        }
        let a = e ?? bn()?.accessToken;
        if (!a) {
            throw Error("Cloud sessions need a claude.ai sign-in. Run `claude auth login` (or /login in a local session), then try again.");
        }
        let y = await fF();
        if (!y) {
            throw Error("Unable to get organization UUID");
        }
        let h = `${dn().BASE_API_URL}/v1/environment_providers`;
        try {
            let b = [];
            let after_id;
            for(let I = 0; I < ee; I++){
                let w = await Ib(()=>At.get(h, {
                        headers: {
                            ...uP(bn()?.accessToken ?? a),
                            "x-organization-uuid": y
                        },
                        params: {
                            limit,
                            ...after_id !== undefined && {
                                after_id
                            }
                        },
                        timeout: 15000
                    }), {
                    credentials: r
                });
                if (w.status !== 200) {
                    throw Error(`Failed to fetch environments: HTTP ${w.status}`);
                }
                let S = Ye().safeParse(w.data);
                if (!S.success) {
                    throw Je(w.data);
                }
                b.push(...S.data.environments);
                let A = S.data.last_id;
                if (S.data.has_more !== true || S.data.environments.length === 0 || typeof A !== "string") {
                    break;
                }
                if (I === ee - 1) {
                    t(`fetchEnvironments: stopped after ${ee} pages (${b.length} environments) although the server reports more; the rest are not listed`, {
                        level: "warn"
                    });
                }
                after_id = A;
            }
            let hasRemoteEnvironment = b.length > 0;
            if (ce().hasRemoteEnvironment !== hasRemoteEnvironment) {
                await Ae((I)=>{
                    if (I.hasRemoteEnvironment === hasRemoteEnvironment) {
                        return I;
                    }
                    return {
                        ...I,
                        hasRemoteEnvironment
                    };
                }, n);
            }
            return b;
        } catch (error) {
            let v = W(error);
            if (Hp(error)) {
                t(`fetchEnvironments failed: ${v.message}`, {
                    level: "error"
                });
            } else {
                c(v);
            }
            throw v;
        }
    }, Ke);
}
function Ke(e) {
    if (e instanceof x) {
        return "malformed_response";
    }
    return "error";
}
async function qKe(name = "Default", signal, r) {
    return Zr("teleport_default_environment_create", async ()=>{
        if (Ie() !== "firstParty") {
            throw Error("Remote environments are only available on the first-party Anthropic API provider.");
        }
        let s = r ?? bn()?.accessToken;
        if (!s) {
            throw Error("No access token available");
        }
        let a = await fF();
        if (!a) {
            throw Error("Unable to get organization UUID");
        }
        let y = `${dn().BASE_API_URL}/v1/environment_providers/cloud/create`;
        return (await At.post(y, {
            name,
            kind: "anthropic_cloud",
            description: "Default - trusted network access",
            config: {
                environment_type: "anthropic",
                cwd: "/home/user",
                init_script: null,
                environment: {},
                languages: [
                    {
                        name: "python",
                        version: "3.11"
                    },
                    {
                        name: "node",
                        version: "20"
                    }
                ],
                network_config: {
                    allowed_hosts: [],
                    allow_default_hosts: true
                }
            }
        }, {
            headers: {
                ...uP(s),
                "anthropic-beta": "ccr-byoc-2025-07-29",
                "x-organization-uuid": a
            },
            timeout: 15000,
            signal
        })).data;
    });
}
async function aDn(e, n) {
    if (Ie() !== "firstParty") {
        return [];
    }
    let r = e ?? bn()?.accessToken;
    if (!r) {
        return [];
    }
    let s = await fF();
    if (!s) {
        return [];
    }
    let a = `${dn().BASE_API_URL}/v1/code/runners/self-hosted/pools`;
    try {
        let y = await Ib(()=>At.get(a, {
                headers: {
                    ...uP(bn()?.accessToken ?? r),
                    "anthropic-beta": "ccr-byoc-2025-07-29",
                    "x-organization-uuid": s
                },
                timeout: 15000
            }), {
            credentials: n
        });
        if (y.status !== 200) {
            t(`fetchSelfHostedPools: ${y.status} ${y.statusText}`, {
                level: "error"
            });
            f("teleport_self_hosted_pool_list", "non_200");
            return [];
        }
        return Zr("teleport_self_hosted_pool_list", async ()=>(y.data.pools ?? []).map((h)=>({
                    kind: "self_hosted_pool",
                    pool_id: h.pool_id,
                    name: h.name,
                    created_at: h.created_at,
                    alive_runner_count: h.alive_runner_count ?? 0
                })));
    } catch (error) {
        let h = W(error);
        if (Hp(error)) {
            t(`fetchSelfHostedPools failed: ${h.message}`, {
                level: "error"
            });
            f("teleport_self_hosted_pool_list", "api_error");
        } else {
            c(h);
            f("teleport_self_hosted_pool_list", "unexpected");
        }
        return [];
    }
}
const we = {
    no_session_id: {
        debug: "No session ID in response",
        code: "bridge_session_create_bad_response"
    },
    unusable_session_id: {
        debug: "Unusable session ID in response",
        code: "bridge_session_create_unusable_id"
    }
};
async function Aao({ environmentId, title, gitRepoUrl, branch, defaultBranch, signal, baseUrl, getAccessToken, credentials, permissionMode, tags }) {
    let { getClaudeAIOAuthTokens, getClaudeAIOAuthTokensAsync } = await import("/$bunfs/root/chunk-mt5pc6ed.js");
    let { getOrganizationUUID } = await import("/$bunfs/root/chunk-jg0xgd7e.js");
    let { getOauthConfig } = await import("/$bunfs/root/chunk-5xyxwnzd.js");
    let { sessionsApiWire } = await import("/$bunfs/root/chunk-bre4wk3b.js");
    let { getMainLoopModel } = await import("/$bunfs/root/chunk-dqtmfe08.js");
    let { getOriginalCwd } = await import("/$bunfs/root/chunk-q61sszgr.js");
    let { default: _default } = await import("/$bunfs/root/chunk-z6f85hb9.js");
    let { isCcrV2BridgeCreateEnabled } = await import("/$bunfs/root/chunk-fqb2csg5.js");
    let X = isCcrV2BridgeCreateEnabled() ? "v1alpha2" : "v1";
    let O = {
        create_endpoint: d(X)
    };
    let { isFirstPartyProvider } = await import("/$bunfs/root/chunk-e1sv3q48.js");
    if (!isFirstPartyProvider()) {
        t("[bridge] Session create skipped on non-firstParty provider");
        return G("bridge_session_create_3p_provider", O);
    }
    let ae = getAccessToken?.() ?? (j() && credentials !== undefined ? (await getClaudeAIOAuthTokensAsync(credentials))?.accessToken : getClaudeAIOAuthTokens()?.accessToken);
    if (!ae) {
        t("[bridge] No access token for session creation");
        return G("bridge_session_create_no_token", O);
    }
    let de = await getOrganizationUUID();
    if (!de) {
        t("[bridge] No org UUID for session creation");
        return G("bridge_session_create_no_org", O);
    }
    let { sources, outcomes, report } = await Sfo(gitRepoUrl, branch, defaultBranch);
    let worker = J8t(environmentId);
    let model = getMainLoopModel();
    let cwd = getOriginalCwd();
    let events = permissionMode ? [
        ggr(permissionMode)
    ] : [];
    let Ge = X === "v1alpha2" ? sDn({
        title,
        worker,
        events,
        sources,
        outcomes,
        model,
        cwd,
        reuseOutcomeBranches: true,
        tags: tags?.length ? tags : undefined
    }) : {
        ...title !== undefined && {
            title
        },
        events,
        session_context: {
            sources,
            outcomes,
            model,
            cwd,
            reuse_outcome_branches: true
        },
        ...worker,
        source: "remote-control",
        ...tags?.length && {
            tags
        }
    };
    let ye = sessionsApiWire(X, baseUrl ?? getOauthConfig().BASE_API_URL, ae);
    let headers = {
        ...ye.headers,
        "x-organization-uuid": de
    };
    let F;
    try {
        F = await _default.post(ye.url, Ge, {
            headers,
            signal,
            validateStatus: (C)=>C < 500
        });
    } catch (error) {
        t(`[bridge] Session creation request failed: ${l(error)}`);
        return G("bridge_session_create_request_failed", O);
    }
    if (!(F.status === 200 || F.status === 201)) {
        let C = cR(F.data);
        t(`[bridge] Session creation failed with status ${F.status}${C ? `: ${C}` : ""}`);
        return G("bridge_session_create_http_error", O);
    }
    let J = iDn(X, F.data);
    if (!J.ok) {
        t(`[bridge] ${we[J.error].debug}`);
        return G(we[J.error].code, O);
    }
    hps(report);
    g("bridge_session_create", O);
    return nu(J.value.id);
}
async function yst(e, n) {
    return (await _st(e, n)).session;
}
async function _st(e, n) {
    let { getClaudeAIOAuthTokens, getClaudeAIOAuthTokensAsync } = await import("/$bunfs/root/chunk-mt5pc6ed.js");
    let { getOauthConfig } = await import("/$bunfs/root/chunk-5xyxwnzd.js");
    let { getCodeSession } = await import("/$bunfs/root/chunk-my40jqzx.js");
    let { isCcrV2SessionCrudEnabled } = await import("/$bunfs/root/chunk-fqb2csg5.js");
    let { isFirstPartyProvider } = await import("/$bunfs/root/chunk-e1sv3q48.js");
    if (!isFirstPartyProvider()) {
        m("bridge_session_get", "bridge_session_get_3p_provider");
        return {
            session: null,
            notFound: false
        };
    }
    let v = n?.getAccessToken?.() ?? (j() && n?.credentials !== undefined ? (await getClaudeAIOAuthTokensAsync(n.credentials))?.accessToken : getClaudeAIOAuthTokens()?.accessToken);
    if (!v) {
        t("[bridge] No access token for session fetch");
        m("bridge_session_get", "bridge_session_get_no_token");
        return {
            session: null,
            notFound: false
        };
    }
    let E = n?.useV2 ?? isCcrV2SessionCrudEnabled();
    let I;
    if (!E) {
        let { getOrganizationUUID } = await import("/$bunfs/root/chunk-jg0xgd7e.js");
        I = await getOrganizationUUID() ?? undefined;
        if (!I) {
            t("[bridge] No org UUID for session fetch");
            m("bridge_session_get", "bridge_session_get_no_org");
            return {
                session: null,
                notFound: false
            };
        }
    }
    let w = await getCodeSession(n?.baseUrl ?? getOauthConfig().BASE_API_URL, v, e, 10000, {
        useV2: E,
        orgUUID: I
    });
    if (typeof w !== "object") {
        m("bridge_session_get", w === "invalid" ? "bridge_session_get_invalid_id" : typeof w === "number" ? "bridge_session_get_http_error" : "bridge_session_get_request_failed");
        return {
            session: null,
            notFound: w === 404
        };
    }
    g("bridge_session_get");
    return {
        session: {
            environment_id: w.environment_id,
            title: w.title,
            status: w.status,
            created_at: w.created_at,
            updated_at: w.updated_at,
            connection_status: "connection_status" in w && typeof w.connection_status === "string" ? w.connection_status : undefined,
            tags: w.tags
        },
        notFound: false
    };
}
async function te(e, n, r, s) {
    let { getClaudeAIOAuthTokens, getClaudeAIOAuthTokensAsync } = await import("/$bunfs/root/chunk-mt5pc6ed.js");
    let { getOauthConfig } = await import("/$bunfs/root/chunk-5xyxwnzd.js");
    let { updateCodeSession } = await import("/$bunfs/root/chunk-my40jqzx.js");
    let { isCcrV2SessionCrudEnabled } = await import("/$bunfs/root/chunk-fqb2csg5.js");
    let E = s?.getAccessToken?.() ?? (j() && s?.credentials !== undefined ? (await getClaudeAIOAuthTokensAsync(s.credentials))?.accessToken : getClaudeAIOAuthTokens()?.accessToken);
    if (!E) {
        t(`[bridge] No access token for session ${r} update`);
        return "failed";
    }
    let I = "client_metadata" in n || isCcrV2SessionCrudEnabled();
    let w;
    if (!I) {
        let { getOrganizationUUID } = await import("/$bunfs/root/chunk-jg0xgd7e.js");
        w = await getOrganizationUUID() ?? undefined;
        if (!w) {
            t(`[bridge] No org UUID for session ${r} update`);
            return "failed";
        }
    }
    t(`[bridge] Updating session ${r}: ${e}`);
    let S = await updateCodeSession(s?.baseUrl ?? getOauthConfig().BASE_API_URL, E, e, n, 10000, {
        useV2: I,
        orgUUID: w
    });
    if (S === "invalid") {
        m("bridge_session_patch", "bridge_session_patch_invalid_id");
        return "rejected";
    } else if (typeof S !== "number") {
        m("bridge_session_patch", "bridge_session_patch_request_failed");
        return "failed";
    } else if (S === 200) {
        t(`[bridge] Session ${r} updated successfully`);
        g("bridge_session_patch");
        return "landed";
    } else {
        f("bridge_session_patch", "bridge_session_patch_http_error");
        return "failed";
    }
}
async function Cao(e, n, r) {
    return te(e, {
        title: n
    }, "title", r);
}
async function yzs(e, n, r) {
    let s = `Couldn't start \u2014 too many sessions are running \xB7 ${n}`;
    return te(e, {
        title: s,
        client_metadata: {
            desktop_rc_refusal: {
                title: s,
                reason: "capacity"
            }
        }
    }, "refusal", r);
}
const yps = "color:";
async function Rao(e, n, r, s) {
    let a = n === "default";
    let remove_tags = r.filter((b)=>a || b !== n).map((b)=>yps + b);
    let add_tags = a ? undefined : [
        yps + n
    ];
    await te(e, {
        add_tags,
        remove_tags
    }, "color tag", s);
}
async function _zs(e, n, r) {
    return false;
}
function G(e, n) {
    m("bridge_session_create", e, n);
    return null;
}
const Qe = 64;
function Kus(e) {
    let n = k();
    if (n.sessionId !== undefined && n.sessionId !== e.sessionId) {
        n.held.clear();
        n.settled.length = 0;
    }
    n.sessionId = e.sessionId;
    n.reporter = e;
}
function mao(e) {
    let n = k();
    if (n.reporter?.owner === e) {
        n.reporter = undefined;
    }
}
function Yus(e, n) {
    let r = e.toLowerCase();
    let { held, settled } = k();
    if (!held.has(r)) {
        held.set(r, {
            phase: "claimed",
            withheld: false
        });
    }
    let y = settled.indexOf(r);
    if (y !== -1) {
        settled.splice(y, 1);
    }
    let h;
    try {
        h = n();
    } catch (error) {
        ne(r);
        throw error;
    }
    if (h instanceof Promise) {
        return h.finally(()=>ne(r));
    }
    ne(r);
    return h;
}
function Xus(e) {
    let n = k().held.get(e.toLowerCase());
    if (n === undefined) {
        return false;
    }
    n.withheld = true;
    return true;
}
function Ze(event_id) {
    return k().held.has(event_id.toLowerCase());
}
function et(event_id) {
    return k().settled.includes(event_id.toLowerCase());
}
function tt(e) {
    return e.payload.type === "user" && typeof e.processing_at === "string";
}
function Jus(e) {
    let n = false;
    if (Ze(e.event_id)) {
        n = "redelivered_in_flight";
    } else if (et(e.event_id)) {
        n = "redelivered_settled";
    } else if (tt(e)) {
        n = "redelivered_after_start";
    }
    if (n !== false) {
        f("bridge_read_receipt", n);
    }
    return n;
}
function Qus(e) {
    U("queued_note_threw", ()=>{
        let n = e === undefined ? undefined : k().held.get(e.toLowerCase());
        if (n !== undefined) {
            n.phase = "queued";
        }
    });
}
function ne(e) {
    U("settle_threw", ()=>{
        let n = e.toLowerCase();
        let r = k().held.get(n);
        if (r?.phase === "claimed") {
            oe(n, r);
        }
    });
}
function Te(e) {
    U("settle_threw", ()=>{
        let n = e.toLowerCase();
        let r = k().held.get(n);
        if (r !== undefined && r.phase !== "read") {
            oe(n, r);
        }
    });
}
function Zus(e) {
    for (let { uuid } of e){
        if (uuid !== undefined) {
            Te(uuid);
        }
    }
}
function BKe(e) {
    U("read_note_threw", ()=>{
        let { held } = k();
        if (held.size === 0) {
            return;
        }
        for (let { uuid } of e){
            let s = uuid?.toLowerCase();
            let a = s === undefined ? undefined : held.get(s);
            if (s === undefined || a === undefined || a.phase === "read") {
                continue;
            }
            a.phase = "read";
            if (a.withheld) {
                K(s, "processing");
                g("bridge_read_receipt");
            }
        }
    });
}
function eps() {
    U("settle_threw", ()=>{
        for (let [e, n] of k().held){
            if (n.phase === "read") {
                oe(e, n);
            }
        }
    });
}
function tps() {
    U("resend_threw", ()=>{
        let { held, settled } = k();
        for (let [r, s] of held){
            if (s.phase === "read" && s.withheld) {
                K(r, "processing");
            }
        }
        for (let r of settled){
            K(r, "processed");
        }
    });
}
function nps(e) {
    let e_onCommandLifecycle = e.onCommandLifecycle;
    e.onCommandLifecycle = (r, s)=>{
        e_onCommandLifecycle?.(r, s);
        if (s === "cancelled" || s === "refused") {
            Te(r);
        }
    };
}
function k() {
    return cs($Ao).inboundReadReceipts;
}
function oe(e, n) {
    let { held, settled } = k();
    held.delete(e);
    if (!n.withheld) {
        return;
    }
    settled.push(e);
    if (settled.length > Qe) {
        settled.shift();
    }
    K(e, "processed");
}
function K(e, n) {
    U("report_threw", ()=>{
        k().reporter?.report(e, n);
    });
}
function U(e, n) {
    try {
        n();
    } catch (error) {
        m("bridge_read_receipt", e);
        c(error);
    }
}
const nt = new Set([
    "user",
    "assistant",
    "attachment",
    "system"
]);
function fgr(e) {
    return L(e) && typeof e.type === "string" && nt.has(e.type);
}
const ve = [
    "cwd",
    "gitBranch",
    "version",
    "userType",
    "entrypoint",
    "promptId"
];
const ot = [
    ...ve,
    "requestId"
];
function rt(e) {
    let e_message = e.message;
    return e.type === "assistant" && L(e_message) && typeof e_message.id === "string" && e_message.id.length > 0;
}
function aps(e) {
    if (!fgr(e)) {
        return e;
    }
    let n = rt(e) ? ot : ve;
    let r;
    for (let s of n){
        if (s in e) {
            r ??= {
                ...e
            };
            delete r[s];
        }
    }
    return r ?? e;
}
function XHn(e, n) {
    if (!fgr(e)) {
        return e;
    }
    let r;
    for (let [s, a] of Object.entries(n)){
        if (a !== undefined && e[s] === undefined) {
            r ??= {
                ...e
            };
            r[s] = a;
        }
    }
    return r ?? e;
}
function JHn(e) {
    let n = [];
    let r = 0;
    while(r < e.length){
        let s = e[r];
        if (s.type !== "assistant" || s.resumedFromIncompleteThinking !== true) {
            r++;
            continue;
        }
        let fromIdx = r;
        let y = r - 1;
        while(true){
            while(y >= 0 && W_(e[y])){
                y--;
            }
            let E = y >= 0 ? e[y] : undefined;
            if (E?.type !== "assistant") {
                break;
            }
            let I = E.message.id;
            let w = y;
            while(y >= 0){
                let A = e[y];
                if (A.type === "assistant") {
                    if (A.message.id === I) {
                        w = y;
                        y--;
                    } else {
                        break;
                    }
                } else if (W_(A)) {
                    y--;
                } else {
                    let R = y;
                    while(R >= 0 && (e[R].type !== "assistant" || W_(e[R]))){
                        R--;
                    }
                    let P = R >= 0 ? e[R] : undefined;
                    if (P?.type === "assistant" && P.message.id === I) {
                        w = R;
                        y = R - 1;
                    } else {
                        break;
                    }
                }
            }
            fromIdx = w;
            let S = e[w];
            if (S.type !== "assistant" || S.resumedFromIncompleteThinking !== true) {
                break;
            }
        }
        let toIdx = r;
        let b = s.message.id;
        let v = r + 1;
        while(true){
            let E = v;
            while(E < e.length && W_(e[E])){
                E++;
            }
            let I = E < e.length ? e[E] : undefined;
            if (I?.type === "assistant") {
                if (I.message.id === b) {
                    toIdx = E;
                    v = E + 1;
                    continue;
                }
                if (I.resumedFromIncompleteThinking === true) {
                    toIdx = E;
                    b = I.message.id;
                    v = E + 1;
                    continue;
                }
                break;
            }
            let w = E;
            while(w < e.length && (e[w].type !== "assistant" || W_(e[w]))){
                w++;
            }
            let S = w < e.length ? e[w] : undefined;
            if (S?.type === "assistant" && S.message.id === b) {
                toIdx = w;
                v = w + 1;
                continue;
            }
            break;
        }
        n.push({
            fromIdx,
            toIdx
        });
        r = v > r ? v : r + 1;
    }
    return n;
}
const QHn = "auto-mode-classifier-error.txt";
const ZHn = "auto-mode-dump.";
const eDn = "auto-mode-env-edit-";
const tDn = "auto-mode-builtins-";
const lps = "auto-mode-classifier-dump";
const cps = "auto-mode-classifier-system";
function dps(e) {
    if (typeof e !== "object" || e === null || !("type" in e)) {
        return false;
    }
    return e.type === "auto-mode-classifier-dump" || e.type === "auto-mode-classifier-system";
}
function nDn(e, n, events, s) {
    rh(n, "sessionId");
    if (!s) {
        return {
            url: `${e}/v1/sessions/${n}/events`,
            body: {
                events
            }
        };
    }
    let a = Gl(n);
    return {
        url: `${e}/v1/code/sessions/${encodeURIComponent(a)}/events`,
        body: {
            events: events.map((y)=>({
                    payload: typeof y.uuid === "string" && y.uuid ? y : {
                        ...y,
                        uuid: randomUUID()
                    }
                }))
        }
    };
}
const it = {
    refusal_fallback_prompt: "choose: retry on fallback model or edit prompt",
    auto_mode_server_fallback: "acknowledge the classifier billing notice (Enter continues in auto mode)",
    auto_mode_outside_reads: "choose: keep allowing reads outside the working directories, or block them"
};
const hst = "dialog:mcp_elicitation";
function rDn(dialog_kind, payload, request_id, s) {
    return {
        tool_name: `dialog:${dialog_kind}`,
        display_tool_name: "Claude needs your input",
        action_description: it[dialog_kind] ?? `Respond to the ${dialog_kind} dialog to continue`,
        raw_command: undefined,
        tool_use_id: s ?? "",
        request_id,
        input: {
            dialog_kind,
            payload
        }
    };
}
function lDn(e) {
    let teleportedSessionIds = no().teleportedSessionIds;
    teleportedSessionIds.add(ar(e));
    if (teleportedSessionIds.size > 64) {
        let r = teleportedSessionIds.values().next().value;
        if (r !== undefined) {
            teleportedSessionIds.delete(r);
        }
    }
}
function AT(e) {
    return no().teleportedSessionIds.has(ar(e));
}
function xao(e) {
    no().teleportedSessionIds.delete(ar(e));
}
let Ee = ()=>false;
function rps(e) {
    Ee = e;
}
function KHn() {
    try {
        return Ee();
    } catch (error) {
        c(error);
        return false;
    }
}
const Q = "[account memory text removed from this conversation]";
const xe = {
    top: {
        plain: new Set([
            "path",
            "path_prefix",
            "cursor",
            "include_preview",
            "if_version",
            "source_item",
            "name"
        ]),
        text: new Set([
            "old_str",
            "new_str",
            "content",
            "instruction",
            "query"
        ])
    },
    op: {
        plain: new Set([
            "op",
            "path",
            "if_version"
        ]),
        text: new Set([
            "old_str",
            "new_str",
            "content"
        ])
    }
};
const at = new Set([
    "path",
    "path_prefix",
    "cursor",
    "source_item",
    "name"
]);
function re(name, n) {
    return E5(name, n, "history");
}
const Re = new WeakMap;
function Pe(e) {
    return e.type === "attachment" && e.attachment.type === "cowork_memory_context" && e.attachment.content === null && e.attachment.anchor !== true;
}
function gao(e, n = KHn(), r) {
    let s = e.findLastIndex(Pe);
    let a = n ? e.length : s;
    if (a < 0) {
        return {
            messages: e,
            epoch: undefined
        };
    }
    let y = ke(e);
    let h = new Set;
    let b = new Set;
    let v = [];
    let E = 0;
    let I;
    let w = (S)=>{
        E++;
        I = S.uuid;
    };
    e.forEach((S, A)=>{
        if (A >= a || A === s) {
            v.push(S);
            return;
        }
        if (S.type === "attachment" && (S.attachment.type === "cowork_memory_context" && S.attachment.anchor !== true || S.attachment.type === "account_memory_recall")) {
            w(S);
            return;
        }
        if (S.type === "assistant" && Array.isArray(S.message.content)) {
            let R = new Map;
            for (let P of S.message.content){
                if (P.type !== "tool_use" || !re(P.name, r)) {
                    continue;
                }
                let input = q8t(P.input);
                let Y = y.has(P.id);
                if (Y && input === P.input) {
                    continue;
                }
                R.set(P.id, {
                    input,
                    blankResult: !Y
                });
            }
            if (R.size === 0) {
                v.push(S);
                return;
            }
            for (let [P, { blankResult }] of R){
                b.add(P);
                if (blankResult) {
                    h.add(P);
                }
            }
            w(S);
            v.push({
                ...S,
                ...sr(S.wireToolInputs) && {
                    wireToolInputs: gt(S.wireToolInputs, b)
                },
                message: {
                    ...S.message,
                    content: S.message.content.map((P)=>{
                        if (P.type === "tool_use" && R.has(P.id)) {
                            return {
                                ...P,
                                input: R.get(P.id).input
                            };
                        }
                        return P;
                    })
                }
            });
            return;
        }
        if (S.type === "user" && h.size > 0 && Array.isArray(S.message.content) && S.message.content.some((R)=>R.type === "tool_result" && h.has(R.tool_use_id))) {
            w(S);
            v.push({
                ...S,
                message: {
                    ...S.message,
                    content: S.message.content.map((R)=>{
                        if (R.type === "tool_result" && h.has(R.tool_use_id)) {
                            return {
                                ...R,
                                content: Q
                            };
                        }
                        return R;
                    })
                }
            });
            return;
        }
        v.push(S);
    });
    if (E === 0) {
        return {
            messages: e,
            epoch: undefined
        };
    }
    return {
        messages: v,
        epoch: `${E}:${I}`
    };
}
function ops(e, n) {
    let r = ke(e);
    for(let s = e.length - 1; s >= 0; s--){
        let a = e[s];
        if (Pe(a)) {
            return false;
        }
        if (a.type === "assistant" && Array.isArray(a.message.content) && a.message.content.some((y)=>y.type === "tool_use" && re(y.name, n) && (!r.has(y.id) || q8t(y.input) !== y.input))) {
            return true;
        }
    }
    return false;
}
function hao(e) {
    let n = [];
    let r = (s, a)=>{
        if (typeof s !== "object" || s === null || types.isProxy(s)) {
            return;
        }
        for (let [y, h] of Object.entries(s)){
            if (xe[a].text.has(y) && typeof h === "string") {
                n.push(h);
            } else if (a === "top" && y === "ops" && Array.isArray(h)) {
                for (let b of h){
                    r(b, "op");
                }
            }
        }
    };
    r(e, "top");
    return n;
}
function sps(e, n) {
    let r = [];
    let s = new Set;
    for (let a of e){
        if (a.type === "assistant" && Array.isArray(a.message.content)) {
            for (let y of a.message.content){
                if (y.type === "tool_use" && re(y.name, n)) {
                    s.add(y.id);
                    r.push(...hao(y.input));
                }
            }
        } else if (a.type === "user" && s.size > 0 && Array.isArray(a.message.content)) {
            for (let y of a.message.content){
                if (y.type !== "tool_result" || !s.has(y.tool_use_id)) {
                    continue;
                }
                if (typeof y.content === "string") {
                    r.push(y.content);
                } else if (Array.isArray(y.content)) {
                    for (let h of y.content){
                        if (h.type === "text") {
                            r.push(h.text);
                        }
                    }
                }
            }
        }
    }
    return r;
}
function ke(e) {
    let n = new Set;
    for (let r of e){
        if (r.type !== "user" || r.toolDenialKind === undefined || r.toolResultRemedy?.kind !== "memory_paused" || !Array.isArray(r.message.content)) {
            continue;
        }
        let s = r.message.content.filter((a)=>a.type === "tool_result");
        if (s.length === 1) {
            n.add(s[0].tool_use_id);
        }
    }
    return n;
}
function mCt(e, n, r) {
    return gao(e, n, r).messages;
}
const dt = 32;
const ut = Object.freeze({
    content: Q
});
function V(e) {
    if (e === Q) {
        return ut;
    }
    return Object.freeze({
        content: e
    });
}
function q8t(e, n = 0, r = Q, s = false) {
    if (typeof e === "function") {
        return V(r);
    }
    if (typeof e === "string" || types.isStringObject(e)) {
        if (n === 0) {
            return V(r);
        }
        return r;
    }
    if (typeof e !== "object" || e === null) {
        return e;
    }
    if (types.isProxy(e) || n > 2) {
        return V(r);
    }
    let a = OE(e);
    if (a === im) {
        return V(r);
    }
    if (a !== undefined) {
        return a.map((S)=>q8t(S, n + 1, r, s));
    }
    let y;
    try {
        y = Object.keys(e);
    } catch  {
        return V(r);
    }
    if (y.length > dt) {
        return V(r);
    }
    let h = Object.getOwnPropertyNames(e).length !== y.length || Object.getOwnPropertySymbols(e).length > 0;
    let b = n === 0 ? "top" : "op";
    let v = [];
    let E = false;
    for (let S of y){
        let A = Object.getOwnPropertyDescriptor(e, S);
        if (A === undefined || !("value" in A) || typeof A.value === "function") {
            E = true;
            continue;
        }
        let R = ft(b, S, A.value, n, r, s);
        if (R === Oe) {
            E = true;
            continue;
        }
        if (R instanceof se) {
            E ||= !R.pristine;
            v.push([
                S,
                R.strings
            ]);
            continue;
        }
        E ||= R !== A.value;
        v.push([
            S,
            R
        ]);
    }
    let I = Object.getPrototypeOf(e);
    if (n === 0 && !E && !h && (I === Object.prototype || I === null) && Object.getOwnPropertyNames(e).length === y.length && Object.getOwnPropertySymbols(e).length === 0) {
        return e;
    }
    let w = {};
    for (let [S, value] of v){
        Object.defineProperty(w, S, {
            value,
            enumerable: true,
            writable: true,
            configurable: true
        });
    }
    return w;
}
const ct = new Set([
    "append",
    "str_replace",
    "delete"
]);
var Oe = Symbol("dropped");
class se {
    strings;
    pristine;
    constructor(e, n){
        this.strings = e;
        this.pristine = n;
    }
}
function ft(e, n, r, s, a, y) {
    let h = xe[e];
    if (h.plain.has(n)) {
        let b = y && at.has(n);
        if (n === "op" ? typeof r === "string" && ct.has(r) : r === null || typeof r === "boolean" || n !== "include_preview" && (typeof r === "string" || typeof r === "number")) {
            if (b && (typeof r === "string" || typeof r === "number")) {
                return a;
            }
            return r;
        }
        if (e === "top" && n === "path" && typeof r === "object" && r !== null) {
            return pt(r, a, b);
        }
        return a;
    }
    if (h.text.has(n)) {
        return a;
    }
    if (e === "top" && n === "ops") {
        if (!types.isProxy(r) && Array.isArray(r)) {
            return q8t(r, s + 1, a, y);
        }
        return a;
    }
    return Oe;
}
function pt(e, n, r) {
    if (types.isProxy(e)) {
        return n;
    }
    let s = Object.getOwnPropertyNames(e);
    let a = Object.getPrototypeOf(e) === Array.prototype && Object.getOwnPropertySymbols(e).length === 0 && Array.isArray(e) && s.length === e.length + 1 && s.every((b)=>{
        if (b === "length") {
            return true;
        }
        let v = Object.getOwnPropertyDescriptor(e, b);
        return /^(?:0|[1-9]\d*)$/u.test(b) && Number(b) < e.length && v !== undefined && "value" in v;
    });
    let y = OE(e);
    if (!Array.isArray(y)) {
        return n;
    }
    let h = [];
    for (let b of y){
        if (typeof b !== "string") {
            return n;
        }
        h.push(r ? n : b);
    }
    return new se(h, a && !r);
}
function gt(wireToolInputs, n) {
    let r = _(Object.keys(wireToolInputs).filter((y)=>n.has(y)).sort());
    let s = Re.get(wireToolInputs);
    if (s === undefined) {
        s = new Map;
        Re.set(wireToolInputs, s);
    }
    let a = s.get(r);
    if (a === undefined) {
        a = ua(wireToolInputs, (y, h)=>n.has(h));
        s.set(r, a);
    }
    return a;
}
class jKe extends Error {
    constructor(e, n){
        let r;
        let s = e[0];
        if (e.length === 1 && s) {
            r = `Image base64 size (${Qt(s.size)}) exceeds API limit (${Qt(n)}). Please resize the image before sending.`;
        } else {
            r = `${`${e.length} images exceed the API limit (${Qt(n)}): ` + e.map((a)=>`Image ${a.index}: ${Qt(a.size)}`).join(", ")}. Please resize these images before sending.`;
        }
        super(r);
        this.name = "ImageSizeError";
    }
}
function WKe(e) {
    if (!L(e) || !("source" in e)) {
        return false;
    }
    let e_source = e.source;
    if (!L(e_source)) {
        return false;
    }
    if (!("type" in e_source) || e_source.type !== "base64") {
        return false;
    }
    return "data" in e_source && typeof e_source.data === "string";
}
function q(e) {
    if (typeof e !== "object" || e === null) {
        return false;
    }
    if (!("type" in e) || e.type !== "image") {
        return false;
    }
    return WKe(e);
}
function mt(e) {
    if (typeof e !== "object" || e === null) {
        return false;
    }
    if (!("type" in e) || e.type !== "tool_result") {
        return false;
    }
    return "content" in e && Array.isArray(e.content);
}
function Ce(e, index, max_bytes, s) {
    let length = e.source.data.length;
    if (length > max_bytes) {
        i("tengu_image_api_validation_failed", {
            base64_size_bytes: length,
            max_bytes
        });
        s.push({
            index,
            size: length
        });
    }
}
function YHn(e, n) {
    let r = [];
    let s = 0;
    for (let a of e){
        if (typeof a !== "object" || a === null) {
            continue;
        }
        if (!("type" in a) || a.type !== "user") {
            continue;
        }
        if (!("message" in a) || typeof a.message !== "object" || a.message === null) {
            continue;
        }
        let y = a.message;
        if (!("content" in y) || !Array.isArray(y.content)) {
            continue;
        }
        for (let h of y.content){
            if (q(h)) {
                Ce(h, ++s, n, r);
                continue;
            }
            if (mt(h)) {
                for (let b of h.content){
                    if (q(b)) {
                        Ce(b, ++s, n, r);
                    }
                }
            }
        }
    }
    if (r.length > 0) {
        throw new jKe(r, n);
    }
}
class zKe {
    #e;
    constructor(e){
        this.#e = e;
    }
    static of(e) {
        return new zKe(JSON.stringify(e));
    }
    toJSON() {
        return JSON.parse(this.#e);
    }
}
const _t = new Set([
    "content",
    "_meta",
    "structuredContent",
    "structuredContentOmitted",
    "resourceLinks"
]);
function yao(e, n) {
    if (n.media !== true) {
        return e;
    }
    if (e instanceof zKe) {
        let s = e.toJSON();
        let a = yao(s, n);
        if (a === s) {
            return e;
        }
        return zKe.of(a);
    }
    if (!L(e)) {
        return e;
    }
    let e_file = e.file;
    if (L(e_file) && (e.type === "image" || e.type === "pdf") && typeof e_file.base64 === "string" && e_file.base64 !== "") {
        return {
            ...e,
            file: {
                ...e_file,
                base64: ""
            }
        };
    }
    return e;
}
function ips(e, n, r) {
    if (r.mcp_images !== true) {
        return e;
    }
    let s = (h)=>Ue(h, n, (b, v)=>{
            if (b === v) {
                return "";
            }
            return b;
        });
    if (!(e instanceof zKe)) {
        return s(e);
    }
    let a = e.toJSON();
    let y = s(a);
    if (y === a) {
        return e;
    }
    return zKe.of(y);
}
function K8t(e, n) {
    return Ue(e, n, (r, s)=>{
        if (r === "") {
            return s;
        }
        return r;
    });
}
function Y8t(e) {
    if (!L(e) || e.type !== "user") {
        return e;
    }
    let toolUseResult = K8t(e.toolUseResult, e.message);
    if (toolUseResult === e.toolUseResult) {
        return e;
    }
    return {
        ...e,
        toolUseResult
    };
}
function Ue(e, n, r) {
    let s = L(e) && Object.keys(e).every((I)=>_t.has(I));
    let a = s ? e.content : e;
    let y = L(n) ? n.content : undefined;
    if (!Array.isArray(a) || !Array.isArray(y)) {
        return e;
    }
    let [h, ...b] = y.filter((I)=>L(I) && I.type === "tool_result");
    if (b.length > 0 || !UKe(h) || h.content.length !== a.length) {
        return e;
    }
    let v = false;
    let E = a.map((I, w)=>{
        let S = h.content[w];
        if (!q(I) || !q(S)) {
            return I;
        }
        let A = r(I.source.data, S.source.data);
        if (A === I.source.data) {
            return I;
        }
        v = true;
        return {
            ...I,
            source: {
                ...I.source,
                data: A
            }
        };
    });
    if (!v) {
        return e;
    }
    if (s) {
        return {
            ...e,
            content: E
        };
    }
    return E;
}
class Me {
    listener = undefined;
}
const De = new lt(()=>new Me);
function ups(e, n) {
    try {
        return De.peek(e)?.listener?.(n)?.catch(c);
    } catch (error) {
        c(error);
        return;
    }
}
function pps(e) {
    let n = De.of(B());
    n.listener = e;
    return ()=>{
        if (n.listener === e) {
            n.listener = undefined;
        }
    };
}
const yt = new TextDecoder("utf-8", {
    ignoreBOM: true
});
function ie(e, n) {
    let r = 0;
    let s = 1;
    for(let a = 0; a < 10; a++){
        let y = n + a;
        if (y >= e.length) {
            return;
        }
        let h = e[y];
        r += (h & 127) * s;
        if ((h & 128) === 0) {
            return {
                value: r,
                next: y + 1
            };
        }
        s *= 128;
    }
}
function GKe(e, n) {
    let r = 0;
    while(r < e.length){
        let s = ie(e, r);
        if (s === undefined) {
            return false;
        }
        let a = s.value & 7;
        let y = Math.floor(s.value / 8);
        r = s.next;
        switch(a){
            case 0:
                {
                    let h = ie(e, r);
                    if (h === undefined) {
                        return false;
                    }
                    r = h.next;
                    n.onVarint?.(y, h.value);
                    break;
                }
            case 1:
                if (r + 8 > e.length) {
                    return false;
                }
                r += 8;
                break;
            case 2:
                {
                    let h = ie(e, r);
                    if (h === undefined || h.value > e.length - h.next) {
                        return false;
                    }
                    r = h.next + h.value;
                    n.onBytes?.(y, e.subarray(h.next, r));
                    break;
                }
            case 5:
                if (r + 4 > e.length) {
                    return false;
                }
                r += 4;
                break;
            default:
                return false;
        }
    }
    return true;
}
function mgr(e, n) {
    let r;
    if (GKe(e, {
        onBytes (a, y) {
            if (a === n) {
                r = y;
            }
        }
    })) {
        return r;
    }
}
function fps(e, n) {
    let r = mgr(e, n);
    if (r === undefined) {
        return undefined;
    }
    return yt.decode(r);
}
const _ao = "PostCompact [";
const gCt = "This session is being continued from a previous conversation that ran out of context. The summary below covers the earlier portion of the conversation.";
function Le(e) {
    return e.startsWith(`<${fl}>`) && e.includes(_ao);
}
function X8t(e) {
    if (typeof e === "string") {
        return Le(e);
    }
    if (!Array.isArray(e) || e.length !== 1) {
        return false;
    }
    let n = e[0];
    return y_e(n) && Le(n.text);
}
export { Kus, mao, Yus, Xus, Jus, Qus, Zus, BKe, eps, tps, nps, rps, KHn, gao, ops, hao, sps, mCt, q8t, jKe, WKe, YHn, zKe, yao, ips, K8t, Y8t, fgr, aps, XHn, JHn, QHn, ZHn, eDn, tDn, lps, cps, dps, nDn, hst, rDn, _ao, gCt, X8t, ups, pps, GKe, mgr, fps, mps, oDn, bao, Sao, ggr, wao, gps, sDn, vao, iDn, Eao, kao, Tao, Lce, U$, SQ, VKe, S_e, J8t, B$, qKe, aDn, hps, Aao, yst, _st, Cao, yzs, yps, Rao, _zs, lDn, AT, xao };
