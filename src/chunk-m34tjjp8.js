import { gRo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c, re } from "/$bunfs/root/chunk-etbngzss.js";
import { Ns, Xdt } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { yi } from "/$bunfs/root/chunk-52bcnmbr.js";
import { io } from "/$bunfs/root/chunk-03gkt7r5.js";
import { $t } from "/$bunfs/root/chunk-xb9cceab.js";
import { Ha, ZSt, yHe, UEn, jEn, mE, vhe, R2e, fKt, Zy, sle, yvt, y2, _4t, yEt, _$, Np, yk, To } from "/$bunfs/root/chunk-kasbfbhj.js";
import { mce } from "/$bunfs/root/chunk-xj62f004.js";
import { wr, qNe } from "/$bunfs/root/chunk-2atph4yw.js";
import { Rr, cx, EQe } from "/$bunfs/root/chunk-vvnqpdfm.js";
import { zN } from "/$bunfs/root/chunk-7q40a1zv.js";
import { eM } from "/$bunfs/root/chunk-3fzyr59r.js";
import { $2o } from "/$bunfs/root/chunk-p35qqqem.js";
import { K0e } from "/$bunfs/root/chunk-k3pmdjj0.js";
import { Bo, rd } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
function b() {
    return import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule();
}
function D(n) {
    let r = performance.now();
    try {
        let e = b();
        if (qNe("mcp_client_module_load_ms") === undefined) {
            wr("mcp_client_module_load_ms", performance.now() - r, r);
        }
        return e;
    } catch (error) {
        c(error);
        t(`[MCP] ${n} connect error: ${error}`);
        return;
    }
}
const gDo = 1000;
const OLt = [
    500,
    1500,
    4000
];
const I = OLt.reduce((acc, item)=>acc + item, 0);
function hDo({ regularMcpConfigs, claudeaiConfigPromise, state, storageV5, credentials, knownListings, dialInConnect, onDialStart, dialFirst }) {
    let epoch = Rr();
    let nonBlocking = a.MCP_CONNECTION_NONBLOCKING !== false;
    gRo(nonBlocking);
    let deferConnect = nonBlocking;
    async function connect() {
        io("before_mcp_connect_user");
        io("before_mcp_connect_connector");
        let w = oMr({
            configs: regularMcpConfigs,
            label: "regular",
            nonBlocking,
            dialInConnect,
            onDialStart,
            dialFirst,
            state,
            storageV5,
            credentials,
            knownListings
        }).then(()=>io("after_mcp_connect_user"));
        let v = T(nonBlocking, ()=>claudeaiConfigPromise.then((claudeaiConfigs)=>x({
                    claudeaiConfigs,
                    regularMcpConfigs,
                    state,
                    deferConnect,
                    storageV5,
                    epoch
                })).then((S)=>{
                if (S === "superseded") {
                    return [];
                }
                return S;
            }), "claude.ai connectors").then(()=>io("after_mcp_connect_connector"));
        await Promise.all([
            w,
            v
        ]);
    }
    return {
        connect
    };
}
function oMr({ configs, label, nonBlocking, state, storageV5, credentials, knownListings, dialInConnect, onDialStart, dialFirst }) {
    let g = (v, S)=>v.alwaysLoad === true || knownListings !== undefined && Object.hasOwn(knownListings, S);
    let C = vo(configs, g);
    let y = vo(configs, (v, S)=>!g(v, S));
    let w = Object.keys(C).length > 0;
    return Promise.all([
        ...w ? [
            T(false, ()=>O(C, `${label}-required`, state, false, storageV5, credentials, knownListings, onDialStart, dialFirst), "--mcp-config alwaysLoad servers")
        ] : [],
        T(nonBlocking, ()=>O(y, label, state, nonBlocking && !dialInConnect, storageV5, credentials, knownListings, onDialStart, dialFirst), "--mcp-config servers")
    ]).then(()=>{});
}
function O(n, r, state, l = false, storageV5, s, p, o, u) {
    let f = Object.keys(n);
    if (f.length === 0) {
        return [];
    }
    state.applyMcpUpdate((S)=>({
            ...S,
            clients: [
                ...S.clients,
                ...Object.entries(n).map(([name, config])=>({
                        name,
                        type: "pending",
                        config
                    }))
            ]
        }));
    let m = new Map;
    let g = f.map((S)=>new Promise((resolve)=>m.set(S, resolve)));
    let C = Promise.withResolvers();
    let y = new Set;
    let w = (S)=>{
        for (let h of Object.keys(S)){
            y.add(h);
        }
        MLt(S, state, storageV5, undefined, C.promise).catch((h)=>t(`[MCP] ${r} retry error: ${h}`)).finally(()=>{
            for (let h of Object.keys(S)){
                y.delete(h);
            }
        });
    };
    let v = ()=>{
        let S = D(r);
        if (!S) {
            for (let M of m.values()){
                M();
            }
            return;
        }
        if (o !== undefined && f.some((M)=>!Object.hasOwn(p ?? {}, M))) {
            o();
        }
        let h = u === undefined ? n : {
            ...vo(n, (M, R)=>u(R)),
            ...n
        };
        S.getMcpToolsCommandsAndResources((M)=>{
            qqn(state, M);
            $2o();
            let { name } = M.client;
            m.get(name)?.();
            if (!y.has(name)) {
                let _ = vo(n, (P, k)=>k === name);
                if (Sln(_, state).length > 0) {
                    w(_);
                }
            }
        }, h, storageV5, s, p, true).catch((M)=>t(`[MCP] ${r} connect error: ${M}`)).finally(()=>{
            for (let M of m.values()){
                M();
            }
            C.resolve(performance.now());
            w(vo(n, (M, R)=>!y.has(R)));
        });
    };
    if (l) {
        setImmediate(v);
    } else {
        v();
    }
    return g;
}
function qqn(n, { client, tools, commands, attemptEpoch }) {
    let p;
    let o = "applied";
    let u = EQe(client.config, attemptEpoch);
    n.applyMcpUpdate((f)=>{
        o = "applied";
        p = undefined;
        let m = f.clients.find((C)=>C.name === client.name);
        if (!m || !b().areMcpConfigsEqual(m.config, client.config)) {
            if (client.type === "connected") {
                re(client.name, m ? "applyConnectionResult: disposing orphaned connect (slot config changed mid-flight)" : "applyConnectionResult: disposing orphaned connect (slot removed mid-flight)");
                p = ()=>B(client);
            }
            o = "dropped";
            return f;
        }
        if (u) {
            re(client.name, "applyConnectionResult: settlement superseded by an account switch — closed, not installed (the identity boundary owns the row)");
            if (client.type === "connected") {
                p = ()=>{
                    b().detachAndCloseConnection(client).catch(()=>{});
                };
            }
            o = "superseded";
            return f;
        }
        let g = Ha() && client.type !== "failed" && client.type !== "disabled" ? Np(client.name, client.config) : null;
        if (Ha() && g !== "managed-policy" && To(client.name) && client.type !== "disabled") {
            let C = client.type === "connected" && m.type === "connected" && m.client === client.client;
            if (client.type === "connected" && !C) {
                re(client.name, "applyConnectionResult: disposing connect that settled after a disable");
                p = ()=>B(client);
            }
            o = "refused";
            if (m.type === "disabled" || m.type === "connected" && Ns(client)) {
                return f;
            }
            return A(f, {
                name: client.name,
                type: "disabled",
                config: m.config
            });
        }
        if (g) {
            if (client.type === "connected") {
                re(client.name, `applyConnectionResult: disposing connect that settled after a ${g} deny`);
            }
            p = ()=>{
                if (client.type === "connected") {
                    B(client);
                }
                b().dropDiscoveryEntry(client.name, client.config).catch(()=>{});
            };
            o = "refused";
            return A(f, {
                name: client.name,
                type: "failed",
                config: m.config,
                ...eM(g)
            });
        }
        if (!Xdt(m, client)) {
            o = "dropped";
            return f;
        }
        return {
            ...f,
            clients: f.clients.map((C)=>{
                if (C.name === client.name) {
                    return client;
                }
                return C;
            }),
            tools: yi([
                ...f.tools,
                ...tools
            ], "name"),
            commands: yi([
                ...f.commands,
                ...commands
            ], "name")
        };
    });
    p?.();
    return o;
}
function Sln(n, r, e = true) {
    let l = r.getClients();
    return Object.entries(n).filter(([d, s])=>{
        let p = l.find((o)=>o.name === d);
        return p !== undefined && (vhe(p) || e && R2e(p)) && b().areMcpConfigsEqual(p.config, s);
    });
}
function sMr(n) {
    let r = (e)=>{
        let transientRetryPasses = $t().transientRetryPasses;
        for (let d of n){
            let s = (transientRetryPasses.get(d) ?? 0) + e;
            if (s > 0) {
                transientRetryPasses.set(d, s);
            } else {
                transientRetryPasses.delete(d);
            }
        }
    };
    r(1);
    return {
        [Symbol.dispose]: ()=>r(-1)
    };
}
async function MLt(n, r, e, l = (s)=>qqn(r, s), d) {
    let s = ()=>Sln(n, r);
    if (s().length === 0) {
        return;
    }
    using p = sMr(Object.keys(n));
    let attemptEpoch = Rr();
    let { signal } = r;
    let f = performance.now();
    let m = 0;
    for (let [C, y] of OLt.entries()){
        let w = C === OLt.length - 1;
        await Q(y, signal);
        if (d !== undefined && w) {
            let P = await d + I + m;
            await Q(Math.max(0, P - performance.now()), signal);
        }
        if (signal?.aborted) {
            return;
        }
        if (Rr() !== attemptEpoch) {
            t("[MCP] Retry: identity changed during backoff, stopping (these rows belong to the previous account)");
            return;
        }
        let v = Sln(n, r, w);
        if (v.length === 0) {
            if (s().length > 0) {
                continue;
            }
            t("[MCP] Retry: all remote servers recovered, stopping");
            return;
        }
        t(`[MCP] Retry attempt ${C + 1}: ${v.length} transiently-failed remote server(s)`);
        let S = [];
        for (let P of v){
            if (!await b().discardMemoizedConnectResult(...P)) {
                continue;
            }
            let [k, E] = P;
            let j = Np(k, E);
            if (j) {
                l({
                    client: {
                        name: k,
                        type: "failed",
                        config: E,
                        ...eM(j)
                    },
                    tools: [],
                    commands: [],
                    attemptEpoch
                });
                continue;
            }
            S.push(P);
        }
        if (S.length === 0 || signal?.aborted) {
            continue;
        }
        let recovered = 0;
        let stillRetryable = 0;
        let R = performance.now();
        let sincePassStartMs = Math.round(R - f);
        await b().getMcpToolsCommandsAndResources((P)=>{
            if (!signal?.aborted) {
                l(P);
                if (P.client.type === "connected") {
                    recovered++;
                } else if (fKt(P.client)) {
                    stillRetryable++;
                }
            } else if (P.client.type === "connected") {
                b().detachAndCloseConnection(P.client).catch(()=>{});
            }
        }, Object.fromEntries(S), e);
        m += performance.now() - R;
        if (!signal?.aborted) {
            i("tengu_mcp_connect_retry_attempt", {
                attempt: C + 1,
                delayMs: y,
                sincePassStartMs,
                retryable: v.length,
                dialed: S.length,
                recovered,
                stillRetryable
            });
        }
        if (s().length === 0) {
            t("[MCP] Retry: all remote servers recovered, stopping");
            return;
        }
    }
    let g = s();
    if (g.length > 0) {
        t(`[MCP] Retry: ${g.length} remote server(s) still failed after all retries: ${g.map(([C])=>C).join(", ")}`);
    }
}
async function T(n, r, e) {
    if (n) {
        Promise.resolve(r()).catch(()=>{});
        t(`[MCP] ${e} running fully async (nonblocking)`);
        return;
    }
    let l = r();
    let d = Date.now();
    let s = K0e();
    let p;
    if (Array.isArray(l)) {
        p = l;
    } else {
        let m;
        let g = await Promise.race([
            l.catch((C)=>{
                c(C);
                return "failed";
            }),
            new Promise((resolve)=>{
                m = setTimeout((y)=>y("deadline"), s, resolve);
            })
        ]);
        clearTimeout(m);
        if (g === "deadline") {
            t(`[MCP] ${e} config fetch not ready after ${s}ms \u2014 proceeding; background connection continues`);
            return;
        }
        if (g === "failed") {
            t(`[MCP] ${e} batch failed to start \u2014 proceeding without waiting on it`);
            return;
        }
        p = g;
    }
    let o = Math.max(0, s - (Date.now() - d));
    if (p.length === 0) {
        return;
    }
    let u = D(e);
    if (!u) {
        return;
    }
    let f = await u.awaitEachWithDeadline(p, o);
    if (f > 0) {
        t(`[MCP] ${e}: ${f}/${p.length} not ready after ${s}ms \u2014 proceeding; background connection continues`);
    }
}
function yDo(state, storageV5, e) {
    UEn();
    jEn();
    let epoch = Rr();
    let d = (async ()=>{
        let s = await yHe(e);
        if (!cx(epoch)) {
            return L("list fetch");
        }
        let { allowed, blocked } = _$(s);
        ZSt();
        if (blocked.length > 0) {
            t(`[MCP] claude.ai connectors blocked by enterprise policy after account switch: ${blocked.join(", ")}`);
        }
        let restorablePlugins = await F(state, storageV5);
        let regularMcpConfigs = Object.fromEntries([
            ...Object.entries(restorablePlugins),
            ...state.getClients().filter((m)=>m.config.scope !== "claudeai").map((m)=>[
                    m.name,
                    m.config
                ])
        ]);
        return x({
            claudeaiConfigs: allowed,
            regularMcpConfigs,
            state,
            deferConnect: false,
            storageV5,
            epoch,
            restorablePlugins
        });
    })();
    return {
        mounted: d.then((s)=>{
            if (s === "superseded") {
                return s;
            }
            return "mounted";
        }),
        settled: d.then((s)=>{
            if (s === "superseded") {
                return [];
            }
            return Promise.all(s);
        }).then(()=>{})
    };
}
function L(n) {
    t(`[MCP] claude.ai connector list superseded by an account switch (${n}) \u2014 not mounting`);
    return "superseded";
}
async function x(n) {
    if (!cx(n.epoch)) {
        return L("list fetch");
    }
    let r = await z(n);
    if (!cx(n.epoch)) {
        return L("dedup");
    }
    return [
        ...N(n.restorablePlugins ?? {}, r.suppressedPlugins, n.state, n.storageV5),
        ...U(r, n.state, n.deferConnect, n.storageV5)
    ];
}
async function F(state, storageV5) {
    let e = state.getSuppressedPluginServers();
    if (e.length === 0) {
        return {};
    }
    let { servers } = await yk({}, {
        storageV5
    });
    let d = {};
    let s = new Set;
    for (let p of e){
        let o = servers[p];
        if (o && o.pluginSource !== undefined) {
            d[p] = o;
        } else {
            s.add(p);
        }
    }
    if (s.size > 0) {
        t(`[MCP] Dropping ${s.size} suppressed plugin server(s) whose plugin is no longer installed/enabled: ${[
            ...s
        ].join(", ")}`);
        state.applyMcpUpdate((p)=>({
                ...p,
                suppressedPluginMcpServers: (p.suppressedPluginMcpServers ?? []).filter((o)=>!s.has(o))
            }));
    }
    return d;
}
function N(n, suppressedPlugins, state, storageV5) {
    let d = new Set(state.getClients().map((u)=>u.name));
    let s = new Set;
    let p = {};
    for (let [u, f] of Object.entries(n)){
        if (suppressedPlugins.has(u)) {
            continue;
        }
        s.add(u);
        if (!d.has(u)) {
            p[u] = f;
        }
    }
    if (s.size === 0) {
        return [];
    }
    state.applyMcpUpdate((u)=>({
            ...u,
            suppressedPluginMcpServers: (u.suppressedPluginMcpServers ?? []).filter((f)=>!s.has(f))
        }));
    let o = Object.keys(p);
    if (o.length > 0) {
        t(`[MCP] Restoring ${o.length} plugin server(s) no longer duplicated by claude.ai connectors after account switch: ${o.join(", ")}`);
    }
    return O(p, "plugin-restore", state, false, storageV5);
}
async function z({ claudeaiConfigs, regularMcpConfigs, state }) {
    let suppressedPlugins = new Set;
    if (Object.keys(claudeaiConfigs).length > 0) {
        let p = new Set;
        for (let o of Object.values(claudeaiConfigs)){
            let u = y2(o);
            if (u) {
                p.add(u);
            }
        }
        for (let [o, u] of Object.entries(regularMcpConfigs)){
            if (!o.startsWith("plugin:")) {
                continue;
            }
            let f = y2(u);
            if (f && p.has(f)) {
                suppressedPlugins.add(o);
            }
        }
        if (suppressedPlugins.size > 0) {
            t(`[MCP] Lazy dedup: suppressing ${suppressedPlugins.size} plugin server(s) that duplicate claude.ai connectors: ${[
                ...suppressedPlugins
            ].join(", ")}`);
            for (let o of state.getClients()){
                if (!suppressedPlugins.has(o.name) || !(Ns(o) || o.type === "pending")) {
                    continue;
                }
                if (o.type === "connected") {
                    mce(o, undefined);
                    b().clearServerCache(o.name, o.config).catch(()=>{});
                } else {
                    b().disposeServerConnectionDetached(o.name, o.config);
                }
            }
            state.applyMcpUpdate((o)=>{
                let { clients, tools, commands, resources } = o;
                clients = clients.filter((y)=>!suppressedPlugins.has(y.name));
                tools = tools.filter((y)=>!y.mcpInfo || !suppressedPlugins.has(y.mcpInfo.serverName));
                for (let y of suppressedPlugins){
                    commands = sle(commands, y);
                    resources = yvt(resources, y);
                }
                let suppressedPluginMcpServers = [
                    ...(o.suppressedPluginMcpServers ?? []).filter((y)=>!suppressedPlugins.has(y)),
                    ...suppressedPlugins
                ];
                return {
                    ...o,
                    clients,
                    tools,
                    commands,
                    resources,
                    suppressedPluginMcpServers
                };
            });
        }
    }
    let s = vo(regularMcpConfigs, (p, o)=>!o.startsWith("plugin:"));
    return {
        ...await yEt(claudeaiConfigs, s),
        suppressedPlugins
    };
}
function U({ servers, suppressed }, state, deferConnect, storageV5) {
    state.applyMcpUpdate((s)=>{
        if (_4t(s.suppressedClaudeAiConnectors ?? [], suppressed)) {
            return s;
        }
        return {
            ...s,
            suppressedClaudeAiConnectors: suppressed
        };
    });
    return O(servers, "claudeai", state, deferConnect, storageV5);
}
function A(n, r) {
    let e = Bo(r.name);
    return {
        ...n,
        clients: n.clients.map((l)=>{
            if (l.name === r.name) {
                return r;
            }
            return l;
        }),
        tools: zN(n.tools, (l)=>rd(l, r.name, e)),
        commands: zN(n.commands, (l)=>Zy(l, r.name)),
        resources: mE(n.resources, r.name),
        resourceTemplates: mE(n.resourceTemplates, r.name)
    };
}
function B(client) {
    if (Ha()) {
        mce(client, undefined);
    }
    client.cleanup().catch(()=>{});
    b().clearServerCache(client.name, client.config).catch(()=>{});
}
export { gDo, OLt, hDo, oMr, qqn, Sln, sMr, MLt, yDo };
