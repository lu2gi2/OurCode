import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, YR } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { re } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { mP } from "/$bunfs/root/chunk-0ycjphb5.js";
import { $t } from "/$bunfs/root/chunk-xb9cceab.js";
import { Ha, fet, mE, pKt, vhe, Zy, k3, sDe, kar, Np, Qtt, b2, ent, To, Ds } from "/$bunfs/root/chunk-kasbfbhj.js";
import { eas } from "/$bunfs/root/chunk-xj62f004.js";
import { W2 } from "/$bunfs/root/chunk-8yak0fbv.js";
import { Kn } from "/$bunfs/root/chunk-rhjwzamj.js";
import { Cne, AVe, LJ as maxReconnectAttempts, cns, Unt, lxn, $7r, dns } from "/$bunfs/root/chunk-6xvcnbea.js";
import { hme, Rr, cx, lE, EQe, Hgn, Dgn } from "/$bunfs/root/chunk-vvnqpdfm.js";
import { MLt, yDo } from "/$bunfs/root/chunk-m34tjjp8.js";
import { Lee } from "/$bunfs/root/chunk-8t621bdc.js";
import { Yve, KN } from "/$bunfs/root/chunk-m9ryp3qy.js";
import { xfe, KLo, zcn, bmt, u$t } from "/$bunfs/root/chunk-rgkm2mzh.js";
import { zN } from "/$bunfs/root/chunk-7q40a1zv.js";
import { bzo } from "/$bunfs/root/chunk-mbp20d2m.js";
import { dme, ume } from "/$bunfs/root/chunk-hf33c26c.js";
import { eM } from "/$bunfs/root/chunk-3fzyr59r.js";
import { lT } from "/$bunfs/root/chunk-qz4wy0py.js";
import { rte } from "/$bunfs/root/chunk-k09mhqd6.js";
import { Bo, rd } from "/$bunfs/root/chunk-2dp0fzyb.js";
function q() {
    return import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule();
}
function nMr(n, e, o, S) {
    if (Object.hasOwn(e, n)) {
        return e[n];
    }
    if (o && !Qtt.has(o.scope)) {
        return o;
    }
    if (S) {
        return S(n);
    }
    return o ?? null;
}
function dDo(n, e) {
    if (!n.clients.some((o)=>o.name === e)) {
        return n;
    }
    return {
        ...n,
        clients: n.clients.map((o)=>{
            if (o.name === e) {
                return {
                    name: e,
                    type: "disabled",
                    config: o.config
                };
            }
            return o;
        }),
        tools: k3(n.tools, e)
    };
}
function Vqn(n, e) {
    let o = Bo(e);
    return {
        tools: n.tools.filter((S)=>rd(S, e, o)),
        commands: n.commands.filter((S)=>Zy(S, e)),
        resources: n.resources[e],
        resourceTemplates: n.resourceTemplates[e]
    };
}
function _ln(n, e) {
    let o = e.type !== "failed" ? Np(n, e.config) : undefined;
    if (o === "managed-policy") {
        return Z(n, e.config, o);
    }
    if (To(n)) {
        return {
            name: n,
            type: "disabled",
            config: e.config
        };
    }
    if (o) {
        return Z(n, e.config, o);
    }
}
function Z(name, config, o) {
    return {
        name,
        type: "failed",
        config,
        ...eM(o)
    };
}
function oe(n, incoming) {
    if (incoming.asked || n === undefined || rte(incoming.client, n.config) === incoming.client) {
        return incoming;
    }
    return lT(n.config, incoming);
}
function se(n, e, { incoming, result, outcome }) {
    if (outcome === "refused") {
        let M = incoming.asked ? result.client : bmt(result.client, e.config);
        if (M === result.client) {
            return result;
        }
        return {
            ...result,
            client: M
        };
    }
    if (rte(result.client, e.config) === result.client) {
        return result;
    }
    let C = oe(e, incoming);
    if (C.client.type === "disabled") {
        return C;
    }
    let v = _ln(n, C.client);
    if (v) {
        return {
            ...C,
            client: v,
            tools: [],
            commands: []
        };
    }
    return C;
}
function pfe({ getAppState, setAppState, getDynamicMcpState, setDynamicMcpState }, e, incoming) {
    let v = ()=>{
        if (incoming.client.type === "connected") {
            q().detachAndCloseConnection(incoming.client).catch(()=>{});
        }
    };
    let M = getAppState().mcp.clients.find((p)=>p.name === e);
    let r = getDynamicMcpState().clients.find((p)=>p.name === e);
    if (!M && !r) {
        v();
        return "dropped";
    }
    let R = Kn(e, incoming.client.config);
    let P = (p)=>p !== undefined && Kn(e, p.config) !== R;
    if (P(M) || P(r)) {
        t(`[MCP] ${e}: dropping a settlement whose slot config changed mid-flight`);
        v();
        return "dropped";
    }
    if (EQe(incoming.client.config, incoming.attemptEpoch)) {
        t(`[MCP] ${e}: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)`);
        v();
        return "superseded";
    }
    let _ = oe(M ?? r, incoming);
    let result = _;
    let outcome = "applied";
    if (_.client.type !== "disabled") {
        let p = _ln(e, _.client);
        if (p) {
            v();
            if (p.type === "failed") {
                q().dropDiscoveryEntry(e, _.client.config).catch(()=>{});
            }
            result = {
                client: p,
                tools: [],
                commands: [],
                resources: [],
                attemptEpoch: incoming.attemptEpoch
            };
            outcome = "refused";
        }
    }
    setAppState((p)=>{
        let k = xfe(p, e, result, {
            appendIfAbsent: result.client.config.type !== "sdk"
        });
        let j = !!result.resources && result.resources.length > 0;
        let F = !!result.resourceTemplates && result.resourceTemplates.length > 0;
        if (j && F) {
            return k;
        }
        return {
            ...k,
            mcp: {
                ...k.mcp,
                resources: j ? k.mcp.resources : mE(k.mcp.resources, e),
                resourceTemplates: F ? k.mcp.resourceTemplates : mE(k.mcp.resourceTemplates, e)
            }
        };
    });
    if (!r) {
        return outcome;
    }
    let s = Bo(e);
    let y = getDynamicMcpState();
    let I = M === undefined ? result : se(e, r, {
        incoming,
        result,
        outcome
    });
    setDynamicMcpState({
        ...y,
        clients: y.clients.map((p)=>{
            if (p.name === e) {
                return I.client;
            }
            return p;
        }),
        tools: [
            ...y.tools.filter((p)=>!rd(p, e, s)),
            ...I.tools
        ]
    });
    return outcome;
}
function bln(n) {
    if (!Ha()) {
        return;
    }
    let { getAppState, setAppState, getDynamicMcpState, setDynamicMcpState, storageV5, credentials, force = false, spareUnchangedFrom } = n;
    Yve(storageV5);
    let r = q();
    let R = $t();
    if (!r.mcpIdentityChangedSinceLastCheck() && !force) {
        return R.headlessConnectorMountInFlight;
    }
    let P = !force || !fet(hme());
    let _ = getDynamicMcpState();
    let d = [
        ...getAppState().mcp.clients,
        ..._.clients
    ];
    let A = new Set;
    let s = new Set;
    let y = new Set;
    let I = new Set;
    if (spareUnchangedFrom) {
        for (let c of d){
            I.add(c.name);
        }
        for (let c of d){
            if (!spareUnchangedFrom.has(c) || c.type === "pending") {
                I.delete(c.name);
            }
        }
    }
    for (let c of d){
        if (!lE(c.config) || I.has(c.name)) {
            y.add(Kn(c.name, c.config));
            continue;
        }
        r.disposeServerConnectionDetached(c.name, c.config);
        if (c.config.scope === "claudeai") {
            s.add(c.name);
            continue;
        }
        if (c.type !== "disabled") {
            A.add(c.name);
        }
    }
    r.evictAllMcpMemosOnIdentityChange(y, Dgn(d));
    W2().clear();
    let p = Object.create(null);
    let k = new Set;
    let j = n.getHostOwnedConfigs?.() ?? _.configs;
    for (let c of d){
        if (!A.has(c.name) || !P) {
            continue;
        }
        let h = p[c.name] ?? nMr(c.name, j, c.config, b2);
        if (!h) {
            k.add(c.name);
            continue;
        }
        let T = p[c.name] ??= h;
        if (T !== c.config && Kn(c.name, T) !== Kn(c.name, c.config)) {
            t(`[MCP] ${c.name}: appState and dynamic-store rows disagree on config at the identity boundary \u2014 converging both under the ${Object.hasOwn(j, c.name) ? "host's" : "appState row's"} config and re-dialing it`, {
                level: "warn"
            });
        }
    }
    let F = new Map;
    let K = ent() && P;
    let L = Object.create(null);
    for (let [c, h] of Object.entries(p)){
        if (K && kar(h)) {
            L[c] = h;
            delete p[c];
            continue;
        }
        let T = Np(c, h);
        if (T) {
            F.set(c, Z(c, h, T));
            delete p[c];
        }
    }
    let W = [
        ...A,
        ...s
    ];
    if (W.length > 0) {
        let c = W.map((a)=>[
                a,
                Bo(a)
            ]);
        let h = (a)=>c.some(([O, D])=>rd(a, O, D));
        let T = (a)=>{
            if (s.has(a.name)) {
                return [];
            }
            if (A.has(a.name)) {
                return [
                    !P || k.has(a.name) ? Hgn(a.name, a.config) : F.get(a.name) ?? {
                        name: a.name,
                        type: "pending",
                        config: p[a.name] ?? L[a.name] ?? a.config
                    }
                ];
            }
            return [
                a
            ];
        };
        setAppState((a)=>({
                ...a,
                mcp: {
                    ...a.mcp,
                    clients: a.mcp.clients.flatMap(T),
                    tools: zN(a.mcp.tools, h),
                    commands: zN(a.mcp.commands, (O)=>W.some((D)=>Zy(O, D))),
                    resources: mE(a.mcp.resources, W),
                    resourceTemplates: mE(a.mcp.resourceTemplates, W)
                }
            }));
        setDynamicMcpState({
            ..._,
            clients: _.clients.flatMap(T),
            tools: _.tools.filter((a)=>!h(a))
        });
    }
    let u;
    let H;
    if (K) {
        let h = yDo({
            getClients: ()=>getAppState().mcp.clients,
            getSuppressedPluginServers: ()=>getAppState().mcp.suppressedPluginMcpServers ?? [],
            applyMcpUpdate: (a)=>{
                let O = new Set;
                setAppState((B)=>{
                    let mcp = a(B.mcp);
                    let ee = new Set(mcp.clients.map((X)=>X.name));
                    O = new Set(B.mcp.clients.filter((X)=>!ee.has(X.name)).map((X)=>X.name));
                    return {
                        ...B,
                        mcp
                    };
                });
                if (O.size === 0) {
                    return;
                }
                let D = getDynamicMcpState();
                if (!D.clients.some((B)=>O.has(B.name))) {
                    return;
                }
                let N = [
                    ...O
                ].map((B)=>[
                        B,
                        Bo(B)
                    ]);
                setDynamicMcpState({
                    ...D,
                    clients: D.clients.filter((B)=>!O.has(B.name)),
                    tools: D.tools.filter((B)=>!N.some(([Y, ee])=>rd(B, Y, ee)))
                });
            }
        }, storageV5, credentials);
        h.settled.catch(()=>{});
        H = h.mounted.catch(()=>"mounted");
        let T = h.mounted.then(()=>{}, (a)=>t(`MCP connector refetch after account switch failed: ${l(a)}`, {
                level: "warn"
            })).finally(()=>{
            if (R.headlessConnectorMountInFlight === T) {
                R.headlessConnectorMountInFlight = undefined;
            }
        });
        R.headlessConnectorMountInFlight = u = T;
    }
    if (A.size === 0 || !P) {
        return u;
    }
    let U = (c)=>{
        pfe(n, c.client.name, c);
    };
    let G = {
        getClients: ()=>[
                ...getAppState().mcp.clients,
                ...getDynamicMcpState().clients
            ],
        getSuppressedPluginServers: ()=>getAppState().mcp.suppressedPluginMcpServers ?? [],
        applyMcpUpdate: (c)=>setAppState((h)=>({
                    ...h,
                    mcp: c(h.mcp)
                }))
    };
    let z = (c)=>{
        r.getMcpToolsCommandsAndResources(U, c, storageV5, credentials).catch((h)=>t(`MCP re-dial after account switch failed: ${l(h)}`, {
                level: "warn"
            })).finally(()=>{
            MLt(c, G, storageV5, U).catch((h)=>t(`MCP re-dial retry after account switch failed: ${l(h)}`, {
                    level: "warn"
                }));
        });
    };
    z(p);
    if (Object.keys(L).length === 0 || !H) {
        return u;
    }
    let attemptEpoch = Rr();
    let x = H.then((c)=>{
        if (c === "superseded" || !cx(attemptEpoch)) {
            return;
        }
        let h = Object.create(null);
        for (let [T, a] of Object.entries(L)){
            let O = Np(T, a);
            if (O) {
                U({
                    client: Z(T, a, O),
                    tools: [],
                    commands: [],
                    attemptEpoch
                });
            } else {
                h[T] = a;
            }
        }
        if (Object.keys(h).length > 0) {
            z(h);
        }
    }).catch((c)=>t(`MCP re-dial of held claude.ai proxy entries after account switch failed: ${l(c)}`, {
            level: "warn"
        }));
    let J = Promise.all([
        u,
        x
    ]).then(()=>{}).finally(()=>{
        if (R.headlessConnectorMountInFlight === J) {
            R.headlessConnectorMountInFlight = undefined;
        }
    });
    R.headlessConnectorMountInFlight = J;
    return J;
}
function rMr(n, e, o, S) {
    let w = o?.type === "connected" && o.client === n.client;
    let E = o !== undefined && o.type !== "disabled" && Kn(n.name, o.config) === Kn(n.name, e);
    return !w && (!S || !E);
}
const ie = 5;
const ae = 1000;
function uDo(n) {
    let { getAppState, getDynamicMcpState, now = Date.now } = n;
    let w = new WeakSet;
    let E = new WeakMap;
    let C = new WeakMap;
    let v = (M, r, R)=>{
        let P = r > 1 ? Unt(r - 1) - R : 0;
        let _ = [
            ...getAppState().mcp.clients,
            ...getDynamicMcpState().clients
        ].some((d)=>d.type === "connected" && d.client === M.client);
        if (P <= 0 || !_ || n.isControlReconnectInFlight(M.name)) {
            return 0;
        }
        try {
            n.onHeldOff?.(r, P);
        } catch (error) {
            t(`MCP reconnect hold-off observer failed for ${M.name}: ${l(error)}`, {
                level: "warn"
            });
        }
        re(M.name, `${M.config.type} transport closed again soon after it connected: reconnecting in ${P}ms`);
        return P;
    };
    return (M)=>{
        for (let r of M){
            if (r.type === "connected") {
                C.set(r.client, r);
            }
            if (r.type !== "connected" || w.has(r.client) || !le(r.config)) {
                continue;
            }
            w.add(r.client);
            let R = now();
            let P = (_)=>{
                if (Ds() || n.isRunEnding()) {
                    return;
                }
                r.cleanup().catch(()=>{});
                let d = Math.max(0, now() - R);
                let A = d < cns ? (E.get(r.client) ?? 0) + 1 : 0;
                (async ()=>{
                    let s = v(r, A, d);
                    let y = n.sleep ?? ce;
                    if (s > 0) {
                        await y(s);
                    }
                    let I = ()=>C.get(r.client) ?? r;
                    for(let p = 0; s > 0 && p < ie && await q().hasUnsettledDial(I().name, I().config); p++){
                        await y(ae);
                    }
                    await de(n, I(), _, A, s > 0, (p, k)=>E.set(p.client, k));
                })().catch((s)=>t(`MCP reconnect after close failed for ${r.name}: ${l(s)}`, {
                        level: "warn"
                    }));
            };
            eas(r, ()=>P(false));
            if (dme(r)) {
                setImmediate(P, true);
            }
        }
    };
}
function ce(n) {
    return Q(n, undefined, {
        unref: true
    });
}
function le(config) {
    return config.type !== undefined && config.type !== "stdio" && config.type !== "sdk";
}
async function de(n, e, found_closed, young_closes, w, E) {
    let { getAppState, getDynamicMcpState, storageV5, credentials, isControlReconnectInFlight, isRunEnding, onReconnected, sleep = ce, random = Math.random } = n;
    let { name, config } = e;
    let I = Rr();
    let p = ()=>Ds() || isRunEnding() || Rr() !== I && lE(config);
    let k = ()=>getAppState().mcp.clients.find((u)=>u.name === name) ?? getDynamicMcpState().clients.find((u)=>u.name === name);
    let j = e;
    let F = ()=>k() === j;
    let K = (u)=>{
        pfe(n, name, u);
    };
    let L = q();
    let W = maxReconnectAttempts + lxn;
    for(let u = 1; u <= W; u++){
        let H = u - maxReconnectAttempts;
        if (u > 1) {
            await sleep(H > 0 ? YR({
                baseMs: $7r,
                capMs: dns,
                floorMs: $7r / 2,
                attempt: H - 1,
                random
            }) : Unt(u - 1));
        }
        if (p() || !F()) {
            return;
        }
        let attemptEpoch = Rr();
        if (H > 0) {
            let D = {
                name,
                type: "pending",
                config
            };
            if (_ln(name, D)) {
                K({
                    client: D,
                    tools: [],
                    commands: [],
                    attemptEpoch
                });
                return;
            }
            if (await L.hasUnsettledDial(name, config)) {
                if (u < W) {
                    re(name, `Background reconnect attempt ${H}/${lxn} skipped: another reconnect to this server is in progress; will try again at the next attempt`);
                    continue;
                }
                if (!p() && F() && !isControlReconnectInFlight(name)) {
                    re(name, `Reconnect gave up after ${u} attempts: another reconnect to this server is still in progress; leaving it to finish`);
                    m("mcp_slow_reconnect", "gave_up", {
                        attempts: u,
                        found_closed
                    });
                }
                return;
            }
            if (p() || !F()) {
                return;
            }
        } else {
            let D = {
                name,
                type: "pending",
                config,
                reconnectAttempt: u,
                maxReconnectAttempts
            };
            K({
                client: D,
                ...Vqn(getAppState().mcp, name),
                attemptEpoch
            });
            j = D;
        }
        if (!F() || isControlReconnectInFlight(name)) {
            return;
        }
        re(name, u === 1 ? `${config.type} transport ${found_closed ? "had already closed when wired" : "closed"} \u2014 reconnecting (attempt 1/${maxReconnectAttempts})` : H > 0 ? `Background reconnect attempt ${H}/${lxn}` : `Reconnect attempt ${u}/${maxReconnectAttempts}`);
        let G = w && u === 1 ? await L.peekSettledConnection(name, config) : undefined;
        let z = G?.type === "connected" && !dme(G) ? rte(G, config) : undefined;
        let V = {
            ...z !== undefined ? {
                client: z,
                ...Vqn(getAppState().mcp, name)
            } : await L.reconnectMcpServerImpl(name, config, storageV5, credentials).catch((D)=>({
                    client: {
                        name,
                        type: "failed",
                        config,
                        error: l(D)
                    },
                    tools: [],
                    commands: []
                })),
            attemptEpoch
        };
        let x = V.client.type === "connected" ? V.client : undefined;
        let J = x !== undefined && ume(await L.peekSettledConnection(name, config), x);
        let c = ()=>{
            if (x && rMr(x, config, k(), J && !isRunEnding())) {
                L.detachAndCloseConnection(x).catch(()=>{});
            }
        };
        if (p() || !F() || isControlReconnectInFlight(name)) {
            c();
            return;
        }
        if (x && J) {
            E(x, young_closes + u - 1);
            K(V);
            if (k() === x) {
                if (x === z) {
                    Lee(x, (D, N)=>{
                        ne(n, D, N, x.config);
                    }, storageV5).catch((D)=>t(`MCP tools refresh over a kept connection failed for ${name}: ${l(D)}`, {
                            level: "warn"
                        }));
                }
                re(name, `Reconnected (attempt ${u})`);
                g(H > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", {
                    attempts: u,
                    found_closed,
                    young_closes
                });
                onReconnected(x);
            }
            return;
        }
        c();
        let h = x && {
            name,
            type: "failed",
            config,
            error: "Connection closed again while reconnecting"
        };
        let T = h ?? V.client;
        let a = h ? {
            ...h,
            errorCode: "ConnectionClosed"
        } : T;
        let goes_slow = vhe(a) && (a.errorCode === undefined || !pKt.has(a.errorCode));
        if (u === maxReconnectAttempts || H > 0 && (!goes_slow || u === W)) {
            re(name, H <= 0 && goes_slow ? `Still failing after ${u} attempts` : `Reconnect gave up after ${u} attempts: ${T.type}`);
            K({
                client: T,
                tools: T.type === "needs-auth" ? KN(name, config) : [],
                commands: [],
                attemptEpoch
            });
            if (k() !== T) {
                return;
            }
            if (T.type === "needs-auth") {
                f(H > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", "needs_auth", {
                    attempts: u,
                    found_closed,
                    young_closes
                });
                return;
            }
            if (H > 0) {
                m("mcp_slow_reconnect", goes_slow ? "gave_up" : "not_retryable", {
                    attempts: u,
                    found_closed
                });
                return;
            }
            m("mcp_auto_reconnect", "exhausted", {
                attempts: u,
                found_closed,
                young_closes,
                goes_slow
            });
            if (!goes_slow) {
                return;
            }
            j = T;
            re(name, `Reconnect attempts spent; retrying in the background, up to ${lxn} more times`);
            continue;
        }
        re(name, H > 0 ? `Background reconnect attempt ${H} did not connect (${T.type})` : `Reconnect attempt ${u} did not connect (${T.type}); next in ${Unt(u)}ms`);
    }
}
const te = new WeakMap;
function pDo(n) {
    return te.get(n);
}
function ne({ setAppState, getDynamicMcpState, setDynamicMcpState }, e, o, S) {
    let v = false;
    let M = false;
    let r;
    setAppState((d)=>{
        let row = d.mcp.clients.find((I)=>I.name === e);
        let tools = u$t(row, o, S);
        if (tools === undefined) {
            M = true;
            return d;
        }
        let y = zcn(d, e, tools);
        v = y !== d;
        r = v && row !== undefined ? {
            row,
            tools
        } : undefined;
        return y;
    });
    let R = getDynamicMcpState();
    let P = R.clients.find((d)=>d.name === e);
    let _ = u$t(P, o, S);
    if (_ === undefined) {
        M = true;
    } else {
        let d = KLo(R, e, _);
        if (d !== R) {
            setDynamicMcpState(d);
            v = true;
        }
    }
    if (r !== undefined) {
        if (P?.type === "pending") {
            te.set(r.row, r.tools);
        } else {
            te.delete(r.row);
        }
    }
    if (M) {
        re(e, "A re-queried tool list was not applied: another server holds the name");
    }
    return v;
}
function fDo(n) {
    return (e, o, S)=>ne(n, e, o, S);
}
function mDo(n) {
    let { getAppState, getDynamicMcpState } = n.stores;
    let S = new WeakSet;
    let w = new WeakMap;
    return (E)=>{
        for (let C of E){
            if (C.type === "connected") {
                w.set(C.client, C);
            }
            if (C.type !== "connected" || S.has(C.client)) {
                continue;
            }
            S.add(C.client);
            if (!C.capabilities?.tools?.listChanged) {
                continue;
            }
            let v = C.name;
            q().onMcpToolListChanged(C, async (M)=>{
                re(v, M === Cne ? "Synthesized tools refetch after listen-stream reopen (no notification received)" : M === AVe ? "Refreshing tools for a tools/list_changed notification received before this handler was registered" : "Received tools/list_changed notification, refreshing tools");
                let r = getAppState().mcp.clients.find((s)=>s.name === v) ?? getDynamicMcpState().clients.find((s)=>s.name === v);
                let R = w.get(C.client) ?? C;
                let P = r !== undefined && Kn(v, r.config) === Kn(v, R.config) ? rte(R, r.config) : R;
                w.set(C.client, P);
                let _ = await Lee(P, (s, y)=>{
                    ne(n.stores, s, y, P.config);
                }, n.storageV5);
                if (_.status === "kept-previous") {
                    re(v, "tools/list failed after list_changed — keeping previous tool set");
                    return;
                }
                let length = _.newTools.length;
                let A = (previousCount)=>i("tengu_mcp_list_changed", {
                        mcpServerKeyHash: mP(v),
                        type: b("tools"),
                        cause: sDe(M),
                        previousCount,
                        newCount: length,
                        ...bzo(C)
                    });
                if (_.previousToolsPromise) {
                    _.previousToolsPromise.then((s)=>A(s.length), ()=>A());
                } else {
                    A();
                }
            });
        }
    };
}
export { nMr, dDo, Vqn, _ln, pfe, bln, rMr, uDo, pDo, fDo, mDo };
