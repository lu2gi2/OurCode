import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { V_o, YZt } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Vn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { m, f, Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { wS } from "/$bunfs/root/chunk-pp3y3t61.js";
import { $Ue } from "/$bunfs/root/chunk-2d9a83dh.js";
import { rh, nu, Gl } from "/$bunfs/root/chunk-c56kpkt7.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Tt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { pbr, vde, Efo, Rg, cR, tN, Oat } from "/$bunfs/root/chunk-sfgejbsr.js";
import { i$e, yPt } from "/$bunfs/root/chunk-kpf6v0ta.js";
import { jFo } from "/$bunfs/root/chunk-zpyprq4v.js";
import { Ko } from "/$bunfs/root/chunk-7qc48pza.js";
class rx extends Error {
    status;
    errorType;
    suppressible;
    constructor(e, n, p, h = false){
        super(e);
        this.name = "BridgeFatalError";
        this.status = n;
        this.errorType = p;
        this.suppressible = h;
    }
}
function YLr(e) {
    function n(r) {
        e.onDebug?.(r);
    }
    let p = 0;
    let h = 100;
    async function u(r) {
        let s = {
            Authorization: `Bearer ${r}`,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
            "anthropic-beta": V_o.header,
            "x-environment-runner-version": e.runnerVersion,
            "User-Agent": Ko()
        };
        let o = await e.getTrustedDeviceToken?.();
        if (o) {
            s["X-Trusted-Device-Token"] = o;
        }
        return s;
    }
    function v() {
        let r = e.getAccessToken();
        if (!r) {
            throw Error(i$e);
        }
        return r;
    }
    async function w(r, s) {
        let o = v();
        let a = await r(o);
        if (a.status !== 401) {
            return a;
        }
        if (!e.onAuth401) {
            n(`[bridge:api] ${s}: 401 received, no refresh handler`);
            return a;
        }
        n(`[bridge:api] ${s}: 401 received, attempting token refresh`);
        if (await e.onAuth401(o)) {
            n(`[bridge:api] ${s}: Token refreshed, retrying request`);
            let _ = v();
            let y = await r(_);
            if (y.status !== 401) {
                return y;
            }
            n(`[bridge:api] ${s}: Retry after refresh also got 401`);
        } else {
            n(`[bridge:api] ${s}: Token refresh failed`);
        }
        return a;
    }
    let T = {
        async registerBridgeEnvironment (r, s) {
            return Zr("bridge_environment_register", async ()=>{
                n(`[bridge:api] POST /v1/environments/bridge bridgeId=${r.bridgeId}`);
                let o;
                let a = r.getToolHostAdvert?.() ?? {
                    kind: "withdraw"
                };
                switch(a.kind){
                    case "advertise":
                        o = {
                            tool_host: "2",
                            tool_host_cc_version: a.advert.cliVersion,
                            tool_host_platform: a.advert.platform
                        };
                        break;
                    case "withdraw":
                        if (r.reuseEnvironmentId) {
                            o = {
                                tool_host: "",
                                tool_host_cc_version: "",
                                tool_host_platform: "",
                                tool_host_blocker: ""
                            };
                        }
                        break;
                    case "unknown":
                        break;
                }
                let g = {
                    machine_name: r.machineName,
                    ...r.machineId != null && {
                        machine_id: r.machineId
                    },
                    directory: r.dir,
                    branch: r.branch,
                    git_repo_url: $Ue(r.gitRepoUrl),
                    max_sessions: r.maxSessions,
                    metadata: {
                        worker_type: r.workerType,
                        ...r.machineId != null && {
                            machine_id: r.machineId
                        },
                        ...o
                    },
                    ...r.hostProfile && {
                        host: r.hostProfile
                    },
                    ...r.reuseEnvironmentId && {
                        environment_id: r.reuseEnvironmentId
                    }
                };
                let _ = await w(async (y)=>At.post(`${e.baseUrl}/v1/environments/bridge`, g, {
                        headers: await u(y),
                        timeout: 15000,
                        signal: s,
                        validateStatus: (E)=>E < 500
                    }), "Registration");
                if (_.status === 409 && Oat(_.data) === yPt) {
                    throw new rx(tN(_.data) ?? "This folder is already served by another Claude Code on this device. Stop it first.", 409, yPt);
                }
                A(_.status, _.data, "Registration", _.headers);
                n(`[bridge:api] POST /v1/environments/bridge -> ${_.status} environment_id=${_.data.environment_id}`);
                n(`[bridge:api] >>> ${pbr({
                    ...g,
                    ...g.host && {
                        host: {
                            tools: g.host.tools.length,
                            mcp: g.host.mcp_servers?.length ?? 0
                        }
                    }
                })}`);
                n(`[bridge:api] <<< ${pbr(_.data)}`);
                return _.data;
            }, S);
        },
        async pollForWork (r, s, o, a, g) {
            rh(r, "environmentId");
            let _ = p;
            p = 0;
            let y = {};
            if (a !== undefined) {
                y.reclaim_older_than_ms = a;
            }
            if (g !== undefined) {
                y.poll_interval_ms = g;
            }
            let E = await At.get(`${e.baseUrl}/v1/environments/${r}/work/poll`, {
                headers: await u(s),
                params: Object.keys(y).length > 0 ? y : undefined,
                timeout: 10000,
                signal: o,
                validateStatus: (k)=>k < 500
            });
            A(E.status, E.data, "Poll", E.headers);
            if (!E.data) {
                p = _ + 1;
                if (p === 1 || p % h === 0) {
                    n(`[bridge:api] GET .../work/poll -> ${E.status} (no work, ${p} consecutive empty polls)`);
                }
                return null;
            }
            let C = E.data.data?.mode;
            if (C != null) {
                let { id, data } = E.data;
                n(`[bridge:api] GET .../work/poll -> ${E.status} workId=${vde(id)} type=${Efo(data.type)} mode=${Efo(C)} sessionId=${vde(data.id)}`);
                return E.data;
            }
            n(`[bridge:api] GET .../work/poll -> ${E.status} workId=${E.data.id} type=${E.data.data?.type}${E.data.data?.id ? ` sessionId=${E.data.data.id}` : ""}`);
            n(`[bridge:api] <<< ${pbr(E.data)}`);
            return E.data;
        },
        async acknowledgeWork (r, s, o, a = s) {
            rh(r, "environmentId");
            rh(s, "workId");
            n(`[bridge:api] POST .../work/${a}/ack`);
            let g = await At.post(`${e.baseUrl}/v1/environments/${r}/work/${s}/ack`, {}, {
                headers: await u(o),
                timeout: 10000,
                validateStatus: (_)=>_ < 500
            });
            A(g.status, g.data, "Acknowledge", g.headers);
            n(`[bridge:api] POST .../work/${a}/ack -> ${g.status}`);
        },
        async stopWork (r, s, o, force, g = s) {
            rh(r, "environmentId");
            rh(s, "workId");
            n(`[bridge:api] POST .../work/${g}/stop force=${force}`);
            let _ = await At.post(`${e.baseUrl}/v1/environments/${r}/work/${s}/stop`, {
                force
            }, {
                headers: await u(o),
                timeout: 10000,
                validateStatus: (y)=>y < 500
            });
            A(_.status, _.data, "StopWork");
            n(`[bridge:api] POST .../work/${g}/stop -> ${_.status}`);
        },
        async deregisterEnvironment (r) {
            rh(r, "environmentId");
            n(`[bridge:api] DELETE /v1/environments/bridge/${r}`);
            let s = await w(async (o)=>At.delete(`${e.baseUrl}/v1/environments/bridge/${r}`, {
                    headers: await u(o),
                    timeout: 10000,
                    validateStatus: (a)=>a < 500
                }), "Deregister");
            A(s.status, s.data, "Deregister");
            n(`[bridge:api] DELETE /v1/environments/bridge/${r} -> ${s.status}`);
        },
        async markEnvironmentOffline (r, s) {
            rh(r, "environmentId");
            let o = `/v1/environments/bridge/${r}/offline`;
            n(`[bridge:api] POST ${o}`);
            let a = await At.post(`${e.baseUrl}${o}`, undefined, {
                headers: await u(s),
                timeout: 5000,
                validateStatus: (g)=>g < 500
            });
            A(a.status, a.data, "MarkOffline");
            n(`[bridge:api] POST ${o} -> ${a.status}`);
        },
        async archiveSession (r) {
            rh(r, "sessionId");
            let s = e.useCcrV2SessionCrud?.() ? `/v1/code/sessions/${Gl(r)}/archive` : `/v1/sessions/${nu(r)}/archive`;
            n(`[bridge:api] POST ${s}`);
            let o = await w(async (a)=>At.post(`${e.baseUrl}${s}`, {}, {
                    headers: await u(a),
                    timeout: 10000,
                    validateStatus: (g)=>g < 500
                }), "ArchiveSession");
            if (o.status === 409) {
                n(`[bridge:api] POST ${s} -> 409 (already archived)`);
                return;
            }
            A(o.status, o.data, "ArchiveSession");
            n(`[bridge:api] POST ${s} -> ${o.status}`);
        },
        async reconnectSession (r, session_id, o) {
            return Zr("bridge_session_reconnect", async ()=>{
                rh(r, "environmentId");
                rh(session_id, "sessionId");
                n(`[bridge:api] POST /v1/environments/${r}/bridge/reconnect session_id=${session_id}`);
                let a = await w(async (g)=>At.post(`${e.baseUrl}/v1/environments/${r}/bridge/reconnect`, {
                        session_id
                    }, {
                        headers: await u(g),
                        timeout: 10000,
                        signal: o,
                        validateStatus: (_)=>_ < 500
                    }), "ReconnectSession");
                A(a.status, a.data, "ReconnectSession");
                n(`[bridge:api] POST .../bridge/reconnect -> ${a.status}`);
            }, S);
        },
        async heartbeatWork (r, s, o) {
            rh(r, "environmentId");
            rh(s, "workId");
            n(`[bridge:api] POST .../work/${s}/heartbeat`);
            let a = await At.post(`${e.baseUrl}/v1/environments/${r}/work/${s}/heartbeat`, {}, {
                headers: await u(o),
                timeout: 10000,
                validateStatus: (g)=>g < 500
            });
            A(a.status, a.data, "Heartbeat");
            n(`[bridge:api] POST .../work/${s}/heartbeat -> ${a.status} lease_extended=${a.data.lease_extended} state=${a.data.state}`);
            return a.data;
        }
    };
    function R(r) {
        if (r instanceof Error && "status" in r && typeof r.status === "number") {
            return `http_${r.status}`;
        }
        return S(r);
    }
    T.refuseToolHost = async (r, work_id, code, a)=>{
        let g = `[bridge:api] POST /v1/code/sessions/${vde(r)}/tool_hosts/refuse workId=${vde(work_id)} code=${code}`;
        try {
            if (Ie() !== "firstParty" || Tt() || !wS("allow_remote_control")) {
                n(`${g} not sent`);
                return;
            }
            await Zr("bridge_tool_host_refuse", async ()=>{
                rh(r, "sessionId");
                n(g);
                let _ = await At.post(`${e.baseUrl}/v1/code/sessions/${Gl(r)}/tool_hosts/refuse`, {
                    work_id,
                    code
                }, {
                    headers: {
                        ...await u(v()),
                        "anthropic-beta": YZt.header,
                        "anthropic-client-feature": "ccr"
                    },
                    timeout: 5000,
                    signal: a,
                    maxRedirects: 0,
                    validateStatus: (y)=>y < 500
                });
                A(_.status, _.data, "RefuseToolHost");
                n(`${g} -> ${_.status}`);
            }, R);
        } catch (error) {
            n(`${g} failed (${R(error)}); not retried`);
        }
    };
    return T;
}
function A(status, data, p, h) {
    if (status === 200 || status === 204) {
        return;
    }
    let u = tN(data);
    let v = M(data);
    switch(status){
        case 401:
            throw new rx(`${p}: Authentication failed (401)${u ? `: ${u}` : ""}. ${i$e}`, 401, v);
        case 403:
            if (fgt(v)) {
                throw new rx("Remote Control session expired.", 403, v);
            }
            throw new rx(`${p}: Access denied (403)${u ? `: ${u}` : ""}. Check your organization permissions.`, 403, v, cR(data)?.includes("external_poll_sessions"));
        case 404:
            throw new rx(u ?? `${p}: Not found (404). Remote Control may not be available for this organization.`, 404, v);
        case 410:
            throw new rx(u ?? "Remote Control session expired.", 410, v ?? "environment_expired");
        case 429:
            {
                let retryAfterMs = Rg(typeof h?.["retry-after"] === "string" ? h["retry-after"] : undefined);
                throw Object.assign(Error(`${p}: Rate limited (429). Polling too frequently.`), retryAfterMs !== undefined ? {
                    status,
                    retryAfterMs
                } : {
                    status
                });
            }
        default:
            throw Object.assign(Error(`${p}: Failed with status ${status}${u ? `: ${u}` : ""}`), {
                status
            });
    }
}
function fgt(e) {
    if (!e) {
        return false;
    }
    return e.includes("expired") || e.includes("lifetime");
}
function XLr(e) {
    return e.suppressible;
}
function S(e) {
    if (e instanceof rx) {
        if (e.status === 401) {
            return "auth_failed";
        }
        return "http_error";
    }
    if (e instanceof Error) {
        if (e.message === i$e) {
            return "no_token";
        }
        if ("status" in e && typeof e.status === "number") {
            return "http_error";
        }
    }
    return "request_failed";
}
function M(data) {
    if (data && typeof data === "object") {
        if ("error" in data && data.error && typeof data.error === "object" && "type" in data.error && typeof data.error.type === "string") {
            return data.error.type;
        }
    }
}
const Oun = 3;
const MFo = 20;
const I = 60000;
const O = 3600000;
const N = 900000;
const B = 86400000;
const H = 0.25;
const j = 3600000;
function U6n(e, n = Date.now(), p = Math.random) {
    if (typeof e !== "number" || !Number.isFinite(e) || e * 1000 < j) {
        return;
    }
    let h = e * 1000;
    let v = Math.min(Math.max(h / 10, N), B) * (1 + H * p());
    return n + h - v;
}
const HFo = 300000;
const DFo = 3600000;
const LFo = 3;
const Mun = 5;
async function B6n({ api, config, environmentId, activeSessions, attempt, trigger, signal }) {
    if (trigger === "tool_host_advert_changed") {
        t(`[bridge:poll] What this environment advertises changed; re-registering environment ${environmentId} (attempt ${attempt})`);
    } else if (trigger === "proactive") {
        t(`[bridge:poll] Environment secret expires soon; re-registering environment ${environmentId} to renew it (attempt ${attempt})`, {
            level: "info"
        });
    } else {
        t(`[bridge:poll] Poll returned ${trigger === "poll_401" ? 401 : 404}; re-registering environment ${environmentId} (attempt ${attempt}/${Oun})`, {
            level: "warn"
        });
    }
    let T;
    let R;
    try {
        let { hostProfile, ...rest } = config;
        let hostProfile_1 = await jFo(hostProfile);
        config.hostProfile = hostProfile_1;
        let _ = config.getToolHostAdvert?.();
        R = _;
        T = await api.registerBridgeEnvironment({
            ...rest,
            ...hostProfile_1 && {
                hostProfile: hostProfile_1
            },
            ..._ && {
                getToolHostAdvert: ()=>_
            },
            reuseEnvironmentId: environmentId
        }, signal);
    } catch (error) {
        let status = error instanceof Error && error.message === i$e ? 401 : D(error);
        let g = status !== undefined;
        t(`[bridge:poll] Re-registration of ${environmentId} ${g ? "rejected" : "failed transiently"}: ${l(error)}`, {
            level: g ? "error" : "warn"
        });
        if (!g && R !== undefined && R.kind !== "unknown" && !P(R, config.registeredToolHostAdvert)) {
            config.registeredToolHostAdvert = "unconfirmed";
        }
        if (signal.aborted) {
            return {
                outcome: "transient"
            };
        }
        i("tengu_bridge_env_reregister", {
            attempt,
            outcome: g ? b("register_rejected") : b("register_transient"),
            trigger: d(trigger)
        });
        if (status !== undefined) {
            if (trigger === "tool_host_advert_changed") {
                f("bridge_env_reregister", "advert_register_rejected");
            } else if (trigger === "proactive") {
                f("bridge_env_reregister", "proactive_register_rejected");
            } else {
                m("bridge_env_reregister", "register_rejected");
            }
            return {
                outcome: "fatal",
                reason: "register_rejected",
                status,
                message: l(error)
            };
        }
        return {
            outcome: "transient",
            retryAfterMs: JLr(error)
        };
    }
    if (T.environment_id !== environmentId) {
        t(`[bridge:poll] Re-registration returned ${T.environment_id}, not ${environmentId}; not adopting it`, {
            level: "warn"
        });
        i("tengu_bridge_env_reregister", {
            attempt,
            outcome: b("replaced"),
            trigger: d(trigger)
        });
        if (trigger === "tool_host_advert_changed") {
            f("bridge_env_reregister", "advert_replaced");
        } else if (trigger === "proactive") {
            f("bridge_env_reregister", "proactive_replaced");
        } else {
            m("bridge_env_reregister", "replaced");
        }
        await api.deregisterEnvironment(T.environment_id).catch((o)=>t(`[bridge:poll] Failed to delete replacement environment ${T.environment_id}: ${l(o)}`, {
                level: "warn"
            }));
        return {
            outcome: "fatal",
            reason: "replaced"
        };
    }
    j6n(config, R, true);
    let r = [
        ...activeSessions.keys()
    ];
    i("tengu_bridge_env_reregister", {
        attempt,
        outcome: b("reregistered"),
        active_sessions: r.length,
        trigger: d(trigger)
    });
    J("info", "bridge_env_reregistered", {
        attempt,
        active_sessions: r.length,
        trigger
    });
    if (trigger === "proactive") {
        t(`[bridge:poll] Environment ${environmentId} re-registered in place; secret renewed`, {
            level: "info"
        });
        return {
            outcome: "reregistered",
            environmentSecret: T.environment_secret,
            ...T.environment_secret_expires_in !== undefined && {
                environmentSecretExpiresIn: T.environment_secret_expires_in
            },
            pendingRequeues: []
        };
    }
    t(`[bridge:poll] Environment ${environmentId} re-registered in place; re-queuing ${r.length} session(s)`, {
        level: "info"
    });
    let pendingRequeues = [];
    for (let o of r){
        if (signal.aborted) {
            break;
        }
        if (!activeSessions.has(o)) {
            continue;
        }
        if (await Hun(api, environmentId, o, signal) !== "done") {
            pendingRequeues.push(o);
        }
    }
    return {
        outcome: "reregistered",
        environmentSecret: T.environment_secret,
        ...T.environment_secret_expires_in !== undefined && {
            environmentSecretExpiresIn: T.environment_secret_expires_in
        },
        pendingRequeues
    };
}
async function NFo({ api, config, environmentId, activeSessions, pacing, signal }) {
    let w;
    try {
        let R = config.getToolHostAdvert?.();
        if (R === undefined || R.kind === "unknown") {
            return;
        }
        if (P(R, config.registeredToolHostAdvert)) {
            pacing.failures = 0;
            return;
        }
        let r = pacing.notBefore - Date.now();
        if (r > 0 && r <= O) {
            return;
        }
        w = await B6n({
            api,
            config,
            environmentId,
            activeSessions,
            attempt: pacing.failures + 1,
            trigger: "tool_host_advert_changed",
            signal
        });
    } catch (error) {
        if (!signal.aborted) {
            c(error);
        }
    }
    let T = w?.outcome === "reregistered" ? w : undefined;
    pacing.failures = T ? 0 : pacing.failures + 1;
    pacing.notBefore = Date.now() + Math.min(I * 2 ** pacing.failures, O);
    return T;
}
function j6n(e, n, p) {
    if (n === undefined || n.kind === "unknown" && p) {
        return;
    }
    let e_registeredToolHostAdvert = e.registeredToolHostAdvert;
    let u = n.kind === "advertise" ? {
        kind: "advertise",
        advert: n.advert
    } : {
        kind: "withdraw"
    };
    e.registeredToolHostAdvert = u;
    if (!P(u, e_registeredToolHostAdvert ?? {
        kind: "withdraw"
    })) {
        i("tengu_bridge_tool_host_advert", {
            advertised: u.kind === "advertise"
        });
    }
}
async function Hun(e, n, p, h) {
    try {
        await e.reconnectSession(n, p, h);
        return "done";
    } catch (error) {
        let v = QLr(error);
        t(`[bridge:poll] reconnectSession(${p}) after re-registration ${v ? "rejected" : "failed transiently"}: ${l(error)}`, {
            level: "warn"
        });
        if (v) {
            return "done";
        }
        if (h.aborted) {
            return "aborted";
        }
        return "retry";
    }
}
function P(e, n) {
    if (n === undefined || n === "unconfirmed") {
        return false;
    }
    if (e.kind === "advertise" && n.kind === "advertise") {
        return Vn(e.advert, n.advert);
    }
    return e.kind === n.kind;
}
function JLr(e) {
    if (e && typeof e === "object" && "retryAfterMs" in e && typeof e.retryAfterMs === "number") {
        return e.retryAfterMs;
    }
}
function QLr(e) {
    return D(e) !== undefined;
}
function D(e) {
    if (e instanceof rx) {
        return e.status;
    }
    if (e && typeof e === "object" && "status" in e && typeof e.status === "number" && e.status >= 400 && e.status < 500 && e.status !== 408 && e.status !== 429) {
        return e.status;
    }
}
export { rx, YLr, fgt, XLr, Oun, MFo, U6n, HFo, DFo, LFo, Mun, B6n, NFo, j6n, Hun, JLr, QLr };
