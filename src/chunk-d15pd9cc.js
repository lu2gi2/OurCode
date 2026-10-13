import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ye, Ke, x, W, l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { oo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Ime, Bjt } from "/$bunfs/root/chunk-wfy0an4q.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Pr as refreshPolicy } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { WT, gP, xv } from "/$bunfs/root/chunk-0ycjphb5.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { qs } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Idt } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Gx, ido, bXt, mit, ryr, pdo, _Ln, bLn, SLn, Ic } from "/$bunfs/root/chunk-4r6b8efh.js";
import { fS } from "/$bunfs/root/chunk-4jkyvhbj.js";
import { Tde } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { Tc, Ax, _2 as allowedByPolicy } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Sk } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { Lee } from "/$bunfs/root/chunk-8t621bdc.js";
import { kme, AXn, CXn, IOe } from "/$bunfs/root/chunk-hvx9h8xm.js";
import { AU } from "/$bunfs/root/chunk-0qnysq84.js";
import { _K } from "/$bunfs/root/chunk-5hp2pp9y.js";
import { A6n, yFt } from "/$bunfs/root/chunk-4ssez7mj.js";
import { YN } from "/$bunfs/root/chunk-4mfq2fqt.js";
import { fx } from "/$bunfs/root/chunk-cq4hjme9.js";
import { zs } from "/$bunfs/root/chunk-k1zxadxf.js";
import { rd, I1, ii } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { fq, Kko } from "/$bunfs/root/chunk-xwkmkvm4.js";
import { o, u, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { hostname } from "os";
import { dirname, join } from "path";
const xe = 10000;
const Ie = 3;
const He = 60000;
class T extends Error {
    unavailable;
    name = "PassthroughMcpUnavailableError";
    constructor(e, n, i){
        super(n, i);
        this.unavailable = e;
    }
}
function jMo(e) {
    let n = e.ops ?? je();
    let i = e.dialLatch ?? Bjt();
    let d = Object.keys(e.configs);
    let s = new Map;
    let m = new Map;
    let v = new WeakSet;
    let C = Oe();
    let y = Date.now();
    let g;
    let P = false;
    let O = ()=>{};
    let settled = new Promise((resolve)=>{
        O = resolve;
    });
    let R;
    let te = Date.now();
    let w = ()=>g !== undefined;
    function L() {
        if (P) {
            return;
        }
        P = true;
        if (R !== undefined) {
            clearTimeout(R);
            R = undefined;
        }
        let r = [
            ...m.values()
        ];
        let a = (f)=>F(r, (h)=>h === f);
        O({
            configured: d.length,
            connected: a("connected"),
            cached: a("cached"),
            failed: a("failed"),
            needsAuth: a("needs-auth"),
            disabled: a("disabled"),
            blocked: a("blocked"),
            excluded: a("excluded"),
            unreported: d.length - m.size,
            settleMs: Date.now() - y
        });
        oe([
            ...s
        ].filter(([, f])=>f.handle.type === "cached").map(([f])=>f));
    }
    async function oe(r) {
        let a = async (S)=>{
            G();
            let M = s.get(S);
            if (M && !w()) {
                await ie(S, M).catch(()=>{});
                G();
            }
        };
        let f = (S)=>n.dialConcurrency(e.configs[S]);
        let h = r.filter((S)=>s.has(S));
        await Promise.all(Sk(h, (S)=>f(S).kind === "local").filter((S)=>S.length > 0).map((S)=>fS(S, a, {
                concurrency: f(S[0]).limit
            })));
    }
    function B() {
        try {
            C.emit();
        } catch (error) {
            c(error);
        }
    }
    function D(r, a) {
        let f = s.get(r);
        if (f) {
            s.set(r, {
                ...f,
                ...a
            });
        }
    }
    function be(client, a) {
        let f = s.get(client.name);
        let tools = le(client.name, a);
        s.set(client.name, {
            handle: client,
            tools,
            dialing: f?.dialing,
            listing: undefined,
            consecutiveDialFailures: 0,
            everConnected: f?.everConnected === true || client.type === "connected"
        });
        if (client.type === "connected") {
            if (tools.length === 0) {
                D(client.name, {
                    listing: V(client.name, client)
                });
            }
            re(client.name, client);
        } else if (P) {
            oe([
                client.name
            ]);
        }
        if (f !== undefined || P) {
            B();
        }
    }
    function re(r, handle) {
        let f = s.get(r);
        if (!f || w()) {
            return;
        }
        if (f.handle !== handle) {
            D(r, {
                handle,
                everConnected: true
            });
            D(r, {
                listing: V(r, handle)
            });
            B();
        }
        if (!v.has(handle) && handle.capabilities?.tools?.listChanged) {
            v.add(handle);
            n.onToolListChanged(handle, async ()=>{
                await V(r, handle);
            });
        }
    }
    function V(r, a) {
        let f = false;
        return n.refreshTools(a, (h, S)=>{
            if (s.get(r)?.handle === a && !w()) {
                D(r, {
                    tools: le(r, S),
                    listing: undefined
                });
                f = true;
                B();
            }
        }, e.storageV5).then(()=>f, (h)=>{
            t(`[deviceBridge] passthrough MCP tools refresh failed for ${r}: ${W(h).message}`);
            return false;
        });
    }
    function k(r, a) {
        let f = s.get(r);
        if (!f || w()) {
            return;
        }
        s.delete(r);
        n.dispose(r, f.handle.config);
        n.cleanup([
            f.handle
        ]);
        t(`[deviceBridge] passthrough MCP server ${r} left the pool (${a})`);
        B();
    }
    function G() {
        let r = Date.now();
        if (r - te >= He) {
            te = r;
            n.refreshPolicy();
        }
        for (let [a, f] of s){
            if (!n.allowedByPolicy(a, f.handle.config)) {
                k(a, "denied by managed policy");
            }
        }
    }
    function ie(r, a) {
        if (a.dialing) {
            return a.dialing;
        }
        if (i.shouldSkip(r)) {
            return Promise.reject(new T("server", "MCP server failed to connect recently; not retrying yet"));
        }
        let dialing = n.ensureConnected(a.handle).then((h)=>{
            se(r, dialing);
            i.recordSuccess(r);
            if (w() || !s.has(r)) {
                n.cleanup([
                    h
                ]);
                throw new T("server", "MCP server is no longer offered by this machine");
            }
            D(r, {
                consecutiveDialFailures: 0
            });
            re(r, h);
            return h;
        }, (h)=>{
            se(r, dialing);
            if (Y(h)) {
                k(r, "needs authentication");
                throw h;
            }
            i.recordFailure(r);
            let S = s.get(r);
            let consecutiveDialFailures = (S?.consecutiveDialFailures ?? 0) + 1;
            D(r, {
                consecutiveDialFailures
            });
            if (consecutiveDialFailures >= Ie && S?.everConnected !== true) {
                k(r, "repeated dial failures");
            } else if (s.has(r)) {
                n.dispose(r, a.handle.config);
            }
            throw h;
        });
        D(r, {
            dialing
        });
        return dialing;
    }
    function se(r, dialing) {
        if (s.get(r)?.dialing === dialing) {
            D(r, {
                dialing: undefined
            });
        }
    }
    async function Ae(r, { signal, deadline }) {
        let h = s.get(r)?.listing;
        while(h !== undefined){
            let S = await Ime(h, {
                signal,
                timeoutMs: Math.max(0, deadline - Date.now()),
                serverName: r,
                context: "device tool call"
            }).catch((cause)=>{
                if (Ke(cause)) {
                    throw cause;
                }
                throw new T("server", "MCP server connected too late for this call", {
                    cause
                });
            });
            let M = s.get(r);
            if (S || M?.listing === undefined) {
                return;
            }
            if (M.listing !== h) {
                h = M.listing;
                continue;
            }
            if (M.handle.type === "connected") {
                D(r, {
                    listing: V(r, M.handle)
                });
            }
            throw new T("server", "MCP server did not list its tools");
        }
    }
    async function Ee(r, { signal, timeoutMs }) {
        let h = s.get(r);
        if (w() || !h) {
            throw new T("server", "MCP server is not available on this machine");
        }
        try {
            return await Ime(ie(r, h), {
                signal,
                timeoutMs,
                serverName: r,
                context: "device tool call"
            });
        } catch (error) {
            if (Ke(error) || error instanceof T) {
                throw error;
            }
            if (Y(error)) {
                throw de(error);
            }
            t(`[deviceBridge] passthrough MCP dial failed for ${r}: ${W(error).message}`);
            throw new T("server", "MCP server could not be reached for this call", {
                cause: error
            });
        }
    }
    function ae(r, name) {
        G();
        let f = s.get(r);
        if (!f || w()) {
            throw new T("server", "MCP server is not available on this machine");
        }
        let h = f.tools.find((S)=>Le(S) === name);
        if (!h) {
            throw new T("tool", "MCP tool is not offered by this machine");
        }
        if (h.mcpInfo?.effectiveMaxPermission === "blocked") {
            throw new T("tool", "MCP tool is blocked on this machine by the organization");
        }
    }
    async function Re(r, name, { signal, deadline }) {
        ae(r, name);
        let S = await Ee(r, {
            signal,
            timeoutMs: Math.max(0, deadline - Date.now())
        });
        await Ae(r, {
            signal,
            deadline
        });
        ae(r, name);
        if (s.get(r)?.handle !== S) {
            throw new T("server", "MCP server was reconnected during this call; retry");
        }
        if (deadline - Date.now() <= 0) {
            throw new T("server", "MCP server connected too late for this call");
        }
        return S;
    }
    async function De(r, a, f, { signal, deadline, imageLimits }) {
        let E = zs(signal, {
            timeoutMs: Math.max(0, deadline - Date.now()),
            refTimer: true
        });
        let q = (H)=>{
            if (signal.aborted) {
                return new Ye(`MCP tool call on '${r}' aborted`);
            }
            if (E.signal.aborted) {
                return new x(`MCP server "${r}" did not answer the call within its deadline`, "MCP passthrough call deadline");
            }
            return H;
        };
        try {
            let H = await n.callTool(a, f, {
                signal: E.signal,
                imageLimits
            }).catch((K)=>{
                throw q(K);
            });
            if (H.isError) {
                throw "urlElicitationDeclined" in H ? new T("tool", "MCP tool needs a consent step in a browser on this machine, which a served call cannot show") : q(new x("MCP tool call on this machine ended without a result", "MCP passthrough call ended without a result"));
            }
            return H;
        } finally{
            E.cleanup();
        }
    }
    function Ne(r, error) {
        if (!Y(error)) {
            return error;
        }
        k(r, "needs authentication");
        return de(error);
    }
    function ke({ client, tools }) {
        if (w() || m.get(client.name) === "dropped") {
            n.cleanup([
                client
            ]);
            return;
        }
        if (!Object.hasOwn(e.configs, client.name)) {
            return;
        }
        switch(client.type){
            case "connected":
            case "cached":
                m.set(client.name, client.type);
                be(client, tools);
                break;
            case "failed":
                m.set(client.name, client.type);
                k(client.name, "failed");
                break;
            case "needs-auth":
                m.set(client.name, client.type);
                k(client.name, "needs authentication");
                break;
            case "disabled":
                m.set(client.name, client.type);
                k(client.name, "disabled");
                break;
            case "pending":
                break;
            default:
        }
        if (m.size >= d.length) {
            L();
        }
    }
    n.policySettled().then(()=>{
        if (w()) {
            return;
        }
        R = setTimeout(L, e.settleTimeoutMs ?? xe);
        let r = vo(e.configs, (a, f)=>{
            if (m.get(f) === "dropped") {
                return false;
            }
            if (n.needsLocalPrompts(a)) {
                m.set(f, "excluded");
                return false;
            }
            let h = n.allowedByPolicy(f, a);
            if (!h) {
                m.set(f, "blocked");
            }
            return h;
        });
        return n.discover(ke, r, e.storageV5);
    }).catch((r)=>{
        t(`[deviceBridge] passthrough MCP discovery failed: ${W(r).message}`);
    }).finally(()=>{
        L();
        ce((r)=>w() || m.get(r) === "dropped");
    });
    function ce(r = ()=>true) {
        for (let a of d.filter(r)){
            n.dispose(a, e.configs[a]);
        }
    }
    return {
        settled,
        servers () {
            G();
            return d.flatMap((r)=>{
                let a = s.get(r);
                if (a) {
                    return [
                        {
                            name: r,
                            scope: a.handle.config.scope,
                            tools: a.tools,
                            status: a.handle.type
                        }
                    ];
                }
                return [];
            });
        },
        subscribe: C.subscribe,
        async callTool (r, a, { signal, timeout, imageLimits }) {
            let deadline = Date.now() + timeout;
            let E = async (q)=>{
                let H = await Re(r, a.name, {
                    signal,
                    deadline
                });
                try {
                    return await De(r, H, a, {
                        signal,
                        deadline,
                        imageLimits
                    });
                } catch (error) {
                    if (q && error instanceof gP) {
                        return E(false);
                    }
                    throw Ne(r, error);
                }
            };
            return E(true);
        },
        toolTimeoutMs: (r)=>n.toolTimeoutMs(e.configs[r]),
        dropServer (r) {
            if (w() || !Object.hasOwn(e.configs, r)) {
                return;
            }
            m.set(r, "dropped");
            if (s.has(r)) {
                k(r, "dropped by the caller");
            } else {
                n.dispose(r, e.configs[r]);
            }
            if (m.size >= d.length) {
                L();
            }
        },
        stop () {
            g ??= (async ()=>{
                if (R !== undefined) {
                    clearTimeout(R);
                    R = undefined;
                }
                C.clear();
                let r = [
                    ...s.values()
                ].map((a)=>a.handle);
                s.clear();
                L();
                ce();
                await n.cleanup(r);
            })();
            return g;
        }
    };
}
function je() {
    let e = import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule();
    return {
        policySettled: ()=>Promise.all([
                fx(),
                Idt()
            ]).then(()=>{}),
        discover: (n, i, d)=>e.getMcpToolsCommandsAndResources(n, i, d),
        ensureConnected: (n)=>e.ensureConnectedClient(n),
        onToolListChanged: (n, i)=>e.onMcpToolListChanged(n, i),
        refreshTools: Lee,
        callTool: (client, i, { signal, imageLimits })=>e.callMCPTool({
                client,
                tool: i.name,
                args: i.arguments ?? {},
                meta: i._meta,
                signal,
                imageLimits,
                hasResultSizeAnnotation: true,
                storageV5: undefined,
                credentials: undefined
            }),
        cleanup: (n)=>e.cleanupConnectedMcpClients(n),
        dispose: (n, i)=>e.disposeServerConnectionDetached(n, i),
        refreshPolicy,
        allowedByPolicy,
        needsLocalPrompts: (n)=>e.isFirstPartyDesignServerConfig(n),
        dialConcurrency: (n)=>{
            if (e.isLocalMcpServer(n)) {
                return {
                    kind: "local",
                    limit: e.getMcpServerConnectionBatchSize()
                };
            }
            return {
                kind: "remote",
                limit: e.getRemoteMcpServerConnectionBatchSize()
            };
        },
        toolTimeoutMs: (n)=>e.getMcpToolTimeoutMs(n)
    };
}
function Le(e) {
    return e.mcpInfo?.toolName ?? e.name;
}
function Y(e) {
    return e instanceof WT || e !== null && typeof e === "object" && "mcpErrorSource" in e && e.mcpErrorSource === "user_auth";
}
function de(cause) {
    return new T("server", "MCP server needs authentication on this machine", {
        cause
    });
}
function le(e, n) {
    return n.filter((i)=>i.mcpInfo !== undefined && rd(i, e));
}
const ido_1 = ido;
const bXt_1 = bXt;
class I extends x {
    verdict;
    constructor(e, n, i){
        super(n, i, e.code);
        this.verdict = e;
        this.name = "PassthroughCallError";
    }
}
function WMo(e, n) {
    e?.onToolVerdict?.({
        kind: "refused",
        code: "not_served"
    }, n.message);
    return {
        result: false,
        message: n.message,
        errorCode: 1
    };
}
function zMo(e, n, i) {
    let d = new I({
        kind: "refused",
        code: "not_served"
    }, n, i);
    e?.onToolVerdict?.(d.verdict, d.message);
    throw d;
}
function GMo(e, n, i, d) {
    let s = new Set(d.values());
    let m = bXt_1.filter((v)=>!s.has(v));
    return async (v, C)=>{
        if (C.remoteCall === undefined) {
            throw new I({
                kind: "refused",
                code: "invalid_request"
            }, ue, ue);
        }
        let timeout = e.toolTimeoutMs(n);
        let { onToolVerdict } = C.remoteCall;
        let P = await e.callTool(n, {
            name: i,
            arguments: qs(v, m)
        }, {
            signal: C.abortController.signal,
            timeout,
            imageLimits: {
                ...Tc(C.options.mainLoopModel),
                allowWebp: false
            }
        }).catch((O)=>{
            let N = Fe(O, n);
            if (N instanceof I) {
                onToolVerdict?.(N.verdict, N.message);
            }
            throw N;
        });
        return {
            data: P.content,
            ...(P._meta || P.structuredContent) && {
                mcpMeta: {
                    ...P._meta && {
                        _meta: YN(P._meta)
                    },
                    ...P.structuredContent && {
                        structuredContent: P.structuredContent
                    }
                }
            }
        };
    };
}
var ue = "MCP passthrough tools run only for a remote tool call; the call did not run";
function Fe(e, n) {
    if (Ke(e) || e instanceof I) {
        return e;
    }
    if (e instanceof xv) {
        return new xv(`MCP server "${n}" on this machine returned an error for the call (it reached the server and may have had effects): ${e.message}`, "MCP passthrough tool returned an error", e.mcpMeta);
    }
    if (Ue(e)) {
        return new I({
            kind: "refused",
            code: "not_served"
        }, `MCP server "${n}" on this machine needs a consent step in a browser there before this tool can run; the call did not run`, "MCP passthrough call needs URL consent on this machine");
    }
    if (e instanceof T) {
        return new I({
            kind: "refused",
            code: "not_served"
        }, `MCP server "${n}" on this machine: ${e.message}; the call did not run`, e.message);
    }
    t(`[deviceBridge] passthrough MCP call on ${n} failed: ${W(e).message}`);
    return new I({
        kind: "failed",
        code: "tool_error"
    }, `MCP server "${n}" on this machine gave no usable result for the call (timeout, lost connection, or a protocol-level error); it may have run and had effects`, "MCP tool call failed on this machine");
}
const Be = -32042;
function Ue(e) {
    return e !== null && typeof e === "object" && "code" in e && e.code === Be;
}
const pdo_1 = pdo;
const Ge = _Ln - 262144;
const ryr_1 = ryr;
const ze = 65536;
const qe = 256;
const Xe = 512;
const Je = {
    enterprise: 0,
    managed: 1,
    local: 2,
    user: 3,
    dynamic: 4,
    project: 5,
    claudeai: 6,
    agent: 7
};
const he = new Set([
    "enterprise",
    "managed"
]);
async function VMo(e, n) {
    let i = Se(e);
    let d = await Promise.all(i.map((y)=>Promise.all(y.tools.map((g)=>nt(y.name, g, n.target)))));
    let s = Qe(i, d, n.configured);
    let { tools, dropped, byServer } = i.reduce((acc, item, index)=>{
        let O = Te(item.scope) ? {
            reason: "enterprise_scope"
        } : s.server(item);
        return (d[index] ?? []).reduce((acc_1, item_1)=>Ze(acc_1, item_1, O, s, n), acc);
    }, {
        announced: new Set,
        bytes: 0,
        tools: [],
        dropped: [],
        byServer: new Map
    });
    return {
        tools,
        dropped,
        byServer
    };
}
function Qe(e, n, configured) {
    let d = Se([
        ...e,
        ...configured.filter((g)=>!e.some((P)=>P.name === g.name))
    ]);
    let s = new Set(d.filter((g)=>he.has(g.scope)).map((g)=>g.name));
    let m = [
        ...s
    ].map((g)=>`${fq(I1(g))}_`);
    let v = (g, P)=>!s.has(g) && m.some((O)=>`${P}_`.startsWith(O));
    let C = fe(d.map((g)=>[
            fq(I1(g.name)),
            {
                server: g.name,
                admin: s.has(g.name)
            }
        ]));
    let y = fe(n.flat().map((g)=>[
            fq(g.name),
            {
                server: g.server,
                admin: s.has(g.server),
                rawName: g.rawName
            }
        ]));
    return {
        server: (g)=>{
            if (Kko(g.name) || v(g.name, fq(I1(g.name)))) {
                return {
                    reason: "collision"
                };
            }
            return pe(C.get(fq(I1(g.name))) ?? [], g.name, (P)=>P.server === g.name);
        },
        tool: (g)=>{
            if (CXn(g.name)) {
                return {
                    reason: "service_reserved"
                };
            }
            if (!IOe(g.name) || Kko(g.name) || v(g.server, fq(g.name))) {
                return {
                    reason: "collision"
                };
            }
            return pe(y.get(fq(g.name)) ?? [], g.server, (P)=>P.server === g.server && P.rawName === g.rawName);
        }
    };
}
function pe(e, n, i) {
    let d = e.find((s)=>s.admin) ?? (e.length === 1 ? e[0] : undefined);
    if (d === undefined) {
        return {
            reason: "alias_collision",
            contenders: e.map((s)=>s.server).filter((s)=>s !== n)
        };
    }
    if (i(d)) {
        return undefined;
    }
    return {
        reason: "collision"
    };
}
function fe(e) {
    return e.reduce((acc, [i, d])=>{
        let s = acc.get(i) ?? [];
        if (!s.some((m)=>m.server === d.server)) {
            acc.set(i, [
                ...s,
                d
            ]);
        }
        return acc;
    }, new Map);
}
function Ze(acc, item, i, d, { isDenied, serve }) {
    let v = i ?? d.tool(item) ?? (item.tool.mcpInfo?.effectiveMaxPermission === "blocked" ? {
        reason: "permission_ceiling"
    } : isDenied(item.tool) ? {
        reason: "deny_rule"
    } : et(item, acc));
    if ("reason" in v) {
        acc.dropped.push({
            server: item.server,
            tool: item.rawName,
            ...v
        });
        return acc;
    }
    acc.announced.add(item.name);
    acc.bytes += v.bytes;
    acc.tools.push(serve({
        ...item,
        definition: v.definition,
        wireArguments: v.wireArguments
    }));
    let C = acc.byServer.get(item.server);
    if (C === undefined) {
        C = [];
        acc.byServer.set(item.server, C);
    }
    C.push(v.definition);
    return acc;
}
function et({ name, definition, wireArguments }, { announced, bytes }) {
    if (wireArguments === "reserved_argument") {
        return {
            reason: "reserved_argument"
        };
    }
    if (name.length > pdo_1) {
        return {
            reason: "name_length"
        };
    }
    if (announced.has(name)) {
        return {
            reason: "collision"
        };
    }
    if (definition === undefined) {
        return {
            reason: "definition_error"
        };
    }
    let bytes_1 = Buffer.byteLength(_(definition));
    if (bytes_1 > ze) {
        return {
            reason: "definition_size"
        };
    }
    if (!mit(definition.inputSchema, SLn)) {
        return {
            reason: "schema_depth"
        };
    }
    if (bytes + bytes_1 > Ge) {
        return {
            reason: "announce_budget"
        };
    }
    if (announced.size >= ryr_1) {
        return {
            reason: "announce_count"
        };
    }
    return {
        definition,
        bytes: bytes_1,
        wireArguments
    };
}
function Se(e) {
    return e.map((server, index)=>({
            server,
            index,
            rank: tt(server.scope)
        })).sort((n, i)=>n.rank - i.rank || n.index - i.index).map((n)=>n.server);
}
function tt(scope) {
    return Je[scope] ?? Number.MAX_SAFE_INTEGER;
}
async function nt(name, tool, target) {
    let rawName = tool.mcpInfo?.toolName ?? tool.name;
    let s = ot(name, rawName);
    let wireArguments = st(tool.inputJSONSchema);
    let v = wireArguments === "reserved_argument" ? yFt() : wireArguments;
    try {
        return {
            server: name,
            rawName,
            name: s,
            tool,
            definition: await ct(s, tool, target, v),
            wireArguments
        };
    } catch (error) {
        t(`[deviceBridge] passthrough cannot describe '${s}': ${W(error).message}`, {
            level: "error"
        });
        return {
            server: name,
            rawName,
            name: s,
            tool,
            definition: undefined,
            wireArguments
        };
    }
}
function ot(name, rawName) {
    return ii(name, rawName).slice(5);
}
function ge(e) {
    return `${e}_arg`;
}
const rt = new Set([
    "$schema",
    "$comment",
    "type",
    "title",
    "description",
    "properties",
    "required",
    "additionalProperties",
    "unevaluatedProperties",
    "$defs",
    "definitions",
    "default",
    "examples",
    "minProperties",
    "maxProperties"
]);
const it = new Set([
    "$ref",
    "$dynamicRef",
    "$recursiveRef",
    "$anchor",
    "$dynamicAnchor",
    "$recursiveAnchor",
    "$id"
]);
function st(inputJSONSchema) {
    let n = inputJSONSchema?.properties;
    let i = inputJSONSchema?.required;
    let d = new Set([
        ...typeof n === "object" && n !== null ? Object.keys(n) : [],
        ...Array.isArray(i) ? i.filter((y)=>typeof y === "string") : []
    ]);
    let s = bXt_1;
    let m = ido_1;
    if (m.some((y)=>d.has(ge(y)))) {
        return "reserved_argument";
    }
    let v = s.filter((y)=>d.has(y));
    if (v.length === 0) {
        return yFt();
    }
    if (v.some((y)=>!m.includes(y)) || inputJSONSchema === undefined || !Ce(inputJSONSchema.type) || Object.keys(inputJSONSchema).some((y)=>!rt.has(y)) || at(inputJSONSchema) || v.some((y)=>typeof n === "object" && n !== null && Object.hasOwn(n, y) && !Pe(Reflect.get(n, y)))) {
        return "reserved_argument";
    }
    let C = new Map(v.map((y)=>[
            ge(y),
            y
        ]));
    if ([
        ...C.keys()
    ].some((y)=>s.includes(y))) {
        return "reserved_argument";
    }
    return C;
}
function at(inputJSONSchema) {
    let n = (i, d)=>{
        if (d > SLn) {
            return true;
        }
        if (Array.isArray(i)) {
            return i.some((s)=>n(s, d + 1));
        }
        if (typeof i !== "object" || i === null) {
            return false;
        }
        return Object.entries(i).some(([s, m])=>it.has(s) || n(m, d + 1));
    };
    return n(inputJSONSchema, 0);
}
async function ct(e, tool, target, d) {
    let s = await tool.description({}, {
        isNonInteractiveSession: false,
        toolPermissionContext: Ic(),
        tools: []
    });
    let annotations = pt(tool);
    let v = Ax();
    return {
        name: e,
        description: s.length <= Math.min(v, bLn) ? s : Q(s, Math.min(v, bLn - ye.length)),
        inputSchema: dt(tool, d),
        ...annotations && {
            annotations
        },
        _meta: ft(tool, target)
    };
}
var ye = "… [truncated]";
function Q(e, n) {
    if (e.length > n) {
        return ne(e, n) + ye;
    }
    return e;
}
function dt({ inputJSONSchema }, n) {
    if (inputJSONSchema === undefined || !Ce(inputJSONSchema.type)) {
        return {
            type: "object",
            properties: {}
        };
    }
    let d = typeof inputJSONSchema.properties === "object" && inputJSONSchema.properties !== null && !Array.isArray(inputJSONSchema.properties) ? mt(inputJSONSchema.properties) : {};
    return lt({
        ...inputJSONSchema,
        type: "object",
        properties: d
    }, n);
}
function lt(e, n) {
    if (n.size === 0) {
        return e;
    }
    let i = new Map([
        ...n
    ].map(([m, v])=>[
            v,
            m
        ]));
    let d = oo(Gx(e.properties, (m, v)=>i.get(v) ?? v), (m, v)=>{
        let C = n.get(v);
        if (C === undefined) {
            return m;
        }
        return {
            ...m,
            description: ut(C, m)
        };
    });
    let required = Array.isArray(e.required) ? e.required.map((m)=>i.get(m) ?? m) : undefined;
    return {
        ...e,
        properties: d,
        ...required && {
            required
        }
    };
}
function ut(e, n) {
    let i = Reflect.get(n, "description");
    let d = `(The tool's own "${e}" parameter, passed under this name.)`;
    if (typeof i === "string" && i !== "") {
        return `${i} ${d}`;
    }
    return d;
}
function Ce(type) {
    return type === undefined || type === "object" || Array.isArray(type) && type.includes("object");
}
function mt(properties) {
    return Object.fromEntries(Object.entries(properties).flatMap(([n, i])=>{
        if (Pe(i)) {
            return [
                [
                    n,
                    i === true ? {} : i
                ]
            ];
        }
        return [];
    }));
}
function Pe(e) {
    return e === true || typeof e === "object" && e !== null && !Array.isArray(e);
}
function pt(tool) {
    let n = tool.mcpInfo?.title;
    let i = {
        ...n !== undefined && {
            title: Q(n, qe)
        },
        ...tool.readOnlyHint !== undefined && {
            readOnlyHint: tool.readOnlyHint
        },
        ...tool.isDestructive?.({}) === true && {
            destructiveHint: true
        },
        ...tool.isOpenWorld?.({}) === true && {
            openWorldHint: true
        }
    };
    if (Object.keys(i).length > 0) {
        return i;
    }
}
function ft(tool, { inventory, ...rest }) {
    let s = {
        v: AXn,
        tool: tool.name,
        target: rest
    };
    return {
        [kme]: s,
        ...tool.searchHint !== undefined && {
            [AU.searchHint]: Q(tool.searchHint, Xe)
        },
        ...tool.alwaysLoad === true && {
            [AU.alwaysLoad]: true
        },
        ...tool.persistenceThresholdCeiling !== undefined && {
            [AU.maxResultSizeChars]: tool.maxResultSizeChars
        },
        ...tool.requiresUserInteraction?.() === true && {
            [AU.requiresUserInteraction]: true
        }
    };
}
const qMo = b("mcp_passthrough");
function Te(e) {
    return he.has(e);
}
const Z = false;
function KMo(e) {
    return !Te(e) && (Z || e !== "project");
}
const version = 1;
function _e() {
    return [
        A6n ? "each-call-asked" : "local-rules-decide",
        Z ? "project-servers" : "no-project-servers"
    ].join("+");
}
const vt = p(()=>u({
        version: A(version),
        choice: U([
            "accepted",
            "declined"
        ]),
        terms: o(),
        decidedAt: o(),
        hostname: o()
    }));
const we = "device-mcp-consent";
function Vin() {
    return `delete ${Rs(ee())} to be asked again`;
}
function ee() {
    return join(ve(), "state", `${we}.json`);
}
async function K0t(e) {
    let n;
    try {
        n = await e.readText();
    } catch (error) {
        t(`device-mcp consent: store unreadable (${l(error)})`, {
            level: "warn"
        });
        return "unreadable";
    }
    if (n === undefined) {
        return "unset";
    }
    try {
        let i = vt().safeParse(X(n));
        if (i.success && _K(i.data.hostname) === _K(e.hostname()) && (i.data.choice === "declined" || i.data.terms === _e())) {
            return i.data.choice;
        }
        return "unset";
    } catch  {
        return "unset";
    }
}
async function YMo(e) {
    let n = await K0t(e);
    if (n === "unreadable") {
        return "unset";
    }
    return n;
}
async function qin(choice, n) {
    try {
        await n.writeText(_({
            version,
            choice,
            terms: _e(),
            decidedAt: n.now().toISOString(),
            hostname: _K(n.hostname())
        }, null, 2) + `
`);
        return true;
    } catch (error) {
        t(`device-mcp consent: answer not saved (${l(error)})`, {
            level: "warn"
        });
        return false;
    }
}
function lfe(e) {
    let n = j() && e !== undefined ? e : undefined;
    let i = $e.state(we);
    return {
        readText: async ()=>{
            if (n) {
                let d = await n.readText([
                    i
                ]);
                if (!d.ok) {
                    throw Error("device-mcp consent read failed");
                }
                let s = d.value.items[0];
                if (s.found) {
                    return s.value;
                }
                return undefined;
            }
            try {
                return await mn().read(ee());
            } catch (error) {
                if (z(error)) {
                    return;
                }
                throw error;
            }
        },
        writeText: async (d)=>{
            if (n) {
                if (!(await n.write(i, d, {
                    mode: 384
                })).ok) {
                    throw Error("device-mcp consent write failed");
                }
                return;
            }
            let s = ee();
            await mn().mkdir(dirname(s), 448);
            await mn().atomicWrite(s, d, 384);
        },
        now: ()=>new Date,
        hostname
    };
}
function Fq(e) {
    return Tde(e);
}
export { jMo, WMo, zMo, GMo, VMo, qMo, KMo, Vin, K0t, YMo, qin, lfe, Fq };
