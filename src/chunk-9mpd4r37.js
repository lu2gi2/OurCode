import { re } from "/$bunfs/root/chunk-etbngzss.js";
import { Ns, Xdt } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Ha, mE, Zy, QQo, _4t, Np, To } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Kn } from "/$bunfs/root/chunk-rhjwzamj.js";
import { Sk } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { lE } from "/$bunfs/root/chunk-vvnqpdfm.js";
import { qLo, xfe, zcn, bmt, u$t } from "/$bunfs/root/chunk-rgkm2mzh.js";
import { zN } from "/$bunfs/root/chunk-7q40a1zv.js";
import { eM } from "/$bunfs/root/chunk-3fzyr59r.js";
import { rte, W6 } from "/$bunfs/root/chunk-k09mhqd6.js";
import { ote } from "/$bunfs/root/chunk-2p9g5q54.js";
import { z_e } from "/$bunfs/root/chunk-ghreee2m.js";
import { hi } from "/$bunfs/root/chunk-vvkk7cgc.js";
import { Bo, rd } from "/$bunfs/root/chunk-2dp0fzyb.js";
function f() {
    return import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule();
}
function v(e) {
    hi(e.client).onclose = undefined;
    f().clearServerCache(e.name, e.config).catch(()=>{});
}
function x(e, name, i) {
    return {
        tools: zN(e.tools, (n)=>n.name?.startsWith(i)),
        commands: zN(e.commands, (n)=>Zy(n, name)),
        resources: mE(e.resources, name),
        resourceTemplates: mE(e.resourceTemplates, name)
    };
}
class AXe {
    #e;
    constructor(e){
        this.#e = e;
    }
    static over(e) {
        return new AXe(z_e(e.getState, e.setState, "mcp"));
    }
    get() {
        return this.#e.get();
    }
    markNeedsAuth(e) {
        this.#e.set((t)=>qLo(t, e));
    }
    async clearNeedsAuth(e) {
        let t = this.get().clients.find((n)=>n.name === e);
        if (t?.type !== "needs-auth") {
            return;
        }
        let i = await f().peekSettledConnection(e, t.config);
        if (i?.type !== "connected") {
            return;
        }
        this.#e.set((n)=>({
                ...n,
                clients: n.clients.map((s)=>{
                    if (s === t) {
                        return rte(i, t.config);
                    }
                    return s;
                })
            }));
    }
    adoptServer(e, t, i) {
        let n = "adopted";
        this.#e.set((s)=>{
            if (i?.asked === true) {
                return xfe({
                    mcp: s
                }, e, t).mcp;
            }
            let r = s.clients.find((c)=>c.name === e);
            n = H(r, t) ?? "adopted";
            if (r === undefined) {
                return s;
            }
            if (n !== "adopted") {
                return w(s, r, n);
            }
            return xfe({
                mcp: s
            }, e, G(r, t), {
                appendIfAbsent: false
            }).mcp;
        });
        return n;
    }
    markReconnectDiscarded(e, t) {
        this.#e.set((i)=>{
            let n = i.clients.find((s)=>s.name === e);
            if (n === undefined || Kn(e, n.config) !== Kn(e, t)) {
                return i;
            }
            if (To(e)) {
                return w(i, n, "disabled");
            }
            if (Np(e, n.config) !== null) {
                return w(i, n, "policy-blocked");
            }
            if (n.type !== "connected") {
                return i;
            }
            return {
                ...i,
                clients: i.clients.map((s)=>{
                    if (s === n) {
                        return {
                            name: e,
                            type: "failed",
                            config: n.config,
                            error: "Its connection was closed while signing in again"
                        };
                    }
                    return s;
                }),
                ...I(i, e)
            };
        });
    }
    swapServerTools(e, t, i) {
        let n = false;
        this.#e.set((s)=>{
            let r = u$t(s.clients.find((l)=>l.name === e), t, i);
            if (r === undefined) {
                re(e, "A re-queried tool list was not applied: another server holds the name");
                return s;
            }
            let c = zcn({
                mcp: s
            }, e, r);
            n = c.mcp !== s;
            return c.mcp;
        });
        return n;
    }
    setSuppressedClaudeAiConnectors(suppressedClaudeAiConnectors) {
        this.#e.set((t)=>{
            if (_4t(t.suppressedClaudeAiConnectors ?? [], suppressedClaudeAiConnectors)) {
                return t;
            }
            return {
                ...t,
                suppressedClaudeAiConnectors
            };
        });
    }
    setReservedNameRefusals(reservedNameRefusals) {
        this.#e.set((t)=>{
            let i = t.reservedNameRefusals ?? [];
            if (i.length === reservedNameRefusals.length && i.every((s, r)=>s.scope === reservedNameRefusals[r]?.scope && s.name === reservedNameRefusals[r]?.name)) {
                return t;
            }
            return {
                ...t,
                reservedNameRefusals
            };
        });
    }
    addPendingServers(e) {
        this.#e.set((t)=>{
            let i = O(t, e);
            if (i.length === 0) {
                return t;
            }
            return {
                ...t,
                clients: [
                    ...t.clients,
                    ...i
                ]
            };
        });
    }
    reconcileConfiguredServers(e, t, i) {
        this.#e.set((n)=>{
            let { stale, ...rest } = QQo(n, e, t);
            i(stale);
            let c = O(rest, e);
            if (c.length === 0 && stale.length === 0) {
                if (n.clientsInitialized) {
                    return n;
                }
                return {
                    ...n,
                    clientsInitialized: true
                };
            }
            return {
                ...n,
                ...rest,
                clientsInitialized: true,
                clients: [
                    ...rest.clients,
                    ...c
                ]
            };
        });
    }
    applyIdentityBoundary(e, t) {
        let i = [
            ...e,
            ...t
        ];
        if (i.length === 0) {
            return;
        }
        this.#e.set((n)=>{
            let s = i.map((c)=>[
                    c,
                    Bo(c)
                ]);
            let r = (c)=>s.some(([l, u])=>rd(c, l, u));
            return {
                ...n,
                clients: n.clients.flatMap((c)=>{
                    if (t.has(c.name)) {
                        return [];
                    }
                    if (e.has(c.name)) {
                        return [
                            {
                                name: c.name,
                                type: "pending",
                                config: c.config
                            }
                        ];
                    }
                    return [
                        c
                    ];
                }),
                tools: zN(n.tools, r),
                commands: zN(n.commands, (c)=>i.some((l)=>Zy(c, l))),
                resources: mE(n.resources, i),
                resourceTemplates: mE(n.resourceTemplates, i)
            };
        });
    }
    applyQueuedUpdates(e, t) {
        this.#e.set((i)=>{
            let n = i;
            for (let s of e){
                if (s.epoch !== t.currentEpoch && lE(s.config)) {
                    if (s.type === "connected") {
                        f().detachAndCloseConnection(s);
                    }
                    continue;
                }
                let r = n.clients.find((d)=>d.name === s.name);
                let c = K(r, s);
                let l = c === "stands" && r !== undefined ? L(r, s) : s;
                let { tools, commands, resources, resourceTemplates, replaceOnly, epoch, asked, superseded, ...rest } = l;
                let o = rest;
                let h = o.type === "disabled" || o.type === "failed";
                let b = h ? tools ?? [] : tools;
                let T = h ? commands ?? [] : commands;
                let C = h ? resources ?? [] : resources;
                let y = h ? resourceTemplates ?? [] : resourceTemplates;
                let M = Bo(o.name);
                let p = n.clients.findIndex((d)=>d.name === o.name);
                let a = p !== -1 ? n.clients[p] : undefined;
                let j = o.type === "connected" && a?.type === "connected" && a.client === o.client;
                let R = Ns(o) && Np(o.name, o.config) === "managed-policy";
                if (o.type !== "disabled" && !j && To(o.name) && !(R && a?.type !== "disabled")) {
                    if (R) {
                        t.onDoorDenied(o.name);
                    }
                    if (o.type === "connected") {
                        v(o);
                    }
                    t.onOrphanedDisable(o.name);
                    if (a && a.type !== "disabled" && (a.type !== "connected" || !Ns(o))) {
                        n = {
                            ...n,
                            clients: n.clients.map((d)=>{
                                if (d.name === o.name) {
                                    return {
                                        name: o.name,
                                        type: "disabled",
                                        config: c === "elsewhere" ? d.config : o.config
                                    };
                                }
                                return d;
                            }),
                            ...x(n, o.name, M)
                        };
                    }
                    continue;
                }
                if (c === "elsewhere" && a !== undefined) {
                    if (o.type !== "disabled") {
                        if (o.type === "connected") {
                            v(o);
                        }
                        re(o.name, `A late ${o.type} result was dropped: another server holds the name`);
                        continue;
                    }
                    if (a.type === "connected") {
                        v(a);
                    }
                    o = {
                        name: o.name,
                        type: "disabled",
                        config: a.config
                    };
                }
                let k = Ns(o) ? Np(o.name, o.config) : null;
                if (k) {
                    t.onDoorDenied(o.name);
                    let d = o.config;
                    if (o.type === "connected") {
                        hi(o.client).onclose = undefined;
                    } else if (a?.type === "connected") {
                        hi(a.client).onclose = undefined;
                        d = a.config;
                    }
                    f().clearServerCache(o.name, d).catch(()=>{});
                    if (p === -1) {
                        continue;
                    }
                    n = {
                        ...n,
                        clients: n.clients.map((P)=>{
                            if (P.name === o.name) {
                                return {
                                    name: o.name,
                                    type: "failed",
                                    config: o.config,
                                    ...eM(k)
                                };
                            }
                            return P;
                        }),
                        ...x(n, o.name, M)
                    };
                    continue;
                }
                if (replaceOnly && p !== -1 && (n.clients[p]?.type === "needs-auth" || n.clients[p]?.type === "disabled")) {
                    if (o.type === "connected") {
                        hi(o.client).onclose = undefined;
                        f().clearServerCache(o.name, o.config).catch(()=>{});
                    }
                    continue;
                }
                if (p === -1 && (replaceOnly || c === "nowhere" && !superseded)) {
                    if (o.type === "connected") {
                        hi(o.client).onclose = undefined;
                        f().clearServerCache(o.name, o.config).catch(()=>{});
                    }
                    if (!replaceOnly) {
                        t.onOrphanedDisable(o.name);
                        re(o.name, `A late ${o.type} result was dropped: no row holds the name`);
                    }
                    continue;
                }
                if (replaceOnly && Ha() && p !== -1 && Kn(o.name, n.clients[p].config) !== Kn(o.name, o.config)) {
                    if (o.type === "connected") {
                        f().detachAndCloseConnection(o);
                    }
                    continue;
                }
                if (p !== -1 && !Xdt(n.clients[p], o)) {
                    if (c === "asked") {
                        n = _(n, o);
                    }
                    continue;
                }
                let clients = p === -1 ? [
                    ...n.clients,
                    o
                ] : n.clients.map((d)=>{
                    if (d.name === o.name) {
                        return o;
                    }
                    return d;
                });
                let tools_1 = b === undefined ? n.tools : [
                    ...zN(n.tools, (d)=>d.name?.startsWith(M)),
                    ...b
                ];
                let commands_1 = T === undefined ? n.commands : [
                    ...zN(n.commands, (d)=>Zy(d, o.name)),
                    ...T
                ];
                let resources_1 = C === undefined ? n.resources : C.length > 0 ? {
                    ...n.resources,
                    [o.name]: C
                } : mE(n.resources, o.name);
                let resourceTemplates_1 = y === undefined ? n.resourceTemplates : y.length > 0 ? {
                    ...n.resourceTemplates,
                    [o.name]: y
                } : mE(n.resourceTemplates, o.name);
                n = {
                    ...n,
                    clients,
                    tools: tools_1,
                    commands: commands_1,
                    resources: resources_1,
                    resourceTemplates: resourceTemplates_1
                };
            }
            return n;
        });
    }
}
function O(e, t) {
    let i = new Set(e.clients.map((n)=>n.name));
    return Object.entries(t).filter(([n])=>!i.has(n)).map(([n, config])=>({
            name: n,
            type: To(n) ? "disabled" : "pending",
            config
        }));
}
function D(e, t) {
    if (e.mcpInfo?.serverName === undefined) {
        return Zy(e, t);
    }
    return e.mcpInfo.serverName === t;
}
function I(e, t) {
    let i = Bo(t);
    return {
        tools: zN(e.tools, (n)=>rd(n, t, i)),
        commands: zN(e.commands, (n)=>D(n, t)),
        resources: mE(e.resources, t),
        resourceTemplates: mE(e.resourceTemplates, t)
    };
}
function K(e, t) {
    if (t.asked === true) {
        return "asked";
    }
    if (e === undefined) {
        return "nowhere";
    }
    if (Kn(t.name, e.config) === Kn(t.name, t.config)) {
        return "stands";
    }
    return "elsewhere";
}
function L(e, t) {
    let i = {
        name: t.name,
        config: e.config
    };
    return {
        ...bmt(t, e.config),
        ...t.tools !== undefined && {
            tools: W6(i, t.tools)
        },
        ...t.commands !== undefined && {
            commands: ote(i, t.commands)
        }
    };
}
function _(e, t) {
    let i = e.clients.find((m)=>m.name === t.name);
    if (i === undefined || Kn(t.name, i.config) !== Kn(t.name, t.config)) {
        return e;
    }
    let n = bmt(i, t.config);
    if (n === i) {
        return e;
    }
    let s = {
        name: t.name,
        config: t.config
    };
    let r = Bo(t.name);
    let [c, l] = Sk(e.tools, (m)=>rd(m, t.name, r));
    let [u, S] = Sk(e.commands, (m)=>D(m, t.name));
    return {
        ...e,
        clients: e.clients.map((m)=>{
            if (m === i) {
                return n;
            }
            return m;
        }),
        tools: [
            ...l,
            ...W6(s, c)
        ],
        commands: [
            ...S,
            ...ote(s, u)
        ]
    };
}
function H(e, t) {
    let { name } = t.client;
    if (e === undefined) {
        return "no-row";
    }
    if (Kn(name, e.config) !== Kn(name, t.client.config)) {
        return "another-server";
    }
    if (To(name)) {
        return "disabled";
    }
    if (Np(name, e.config) !== null) {
        return "policy-blocked";
    }
}
function w(e, t, i) {
    if (i !== "disabled" && i !== "policy-blocked") {
        return e;
    }
    let { name, config } = t;
    let r = i === "policy-blocked" ? Np(name, config) : null;
    if (r === null && t.type === "disabled") {
        return e;
    }
    let c = r === null ? {
        name,
        type: "disabled",
        config
    } : {
        name,
        type: "failed",
        config,
        ...eM(r)
    };
    return {
        ...e,
        clients: e.clients.map((l)=>{
            if (l === t) {
                return c;
            }
            return l;
        }),
        ...I(e, name)
    };
}
function G(e, t) {
    let i = {
        name: e.name,
        config: e.config
    };
    return {
        ...t,
        client: bmt(t.client, e.config),
        tools: W6(i, t.tools),
        commands: ote(i, t.commands)
    };
}
export { AXe };
