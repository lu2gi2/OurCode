import { Mc, vCs, Rue } from "/$bunfs/root/chunk-xb9cceab.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Un, _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { Zy } from "/$bunfs/root/chunk-kasbfbhj.js";
import { jd } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { FIr } from "/$bunfs/root/chunk-sjzzefk1.js";
import { Rte } from "/$bunfs/root/chunk-s70b0h2n.js";
import { Rr } from "/$bunfs/root/chunk-vvnqpdfm.js";
import { pfe } from "/$bunfs/root/chunk-sz1g8hvn.js";
import { xfe } from "/$bunfs/root/chunk-rgkm2mzh.js";
import { Bo, rd, ii } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
function C() {
    return import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule();
}
const G = [
    500,
    1500,
    4000,
    15000,
    60000
];
function $Ir(s) {
    let { getAppState, setAppState, getDynamicMcpState } = s.stores;
    let r = null;
    let u = Promise.resolve();
    let y = false;
    let p = false;
    let M = 0;
    let c = null;
    function j() {
        if (p) {
            return false;
        }
        if (c !== null) {
            return true;
        }
        let e = G[M];
        if (e === undefined) {
            t("[bridge:projects] reply mount retries exhausted — the mount stays as it is until the binding changes", {
                level: "warn"
            });
            return false;
        }
        M++;
        c = setTimeout(()=>{
            c = null;
            sync("retry");
        }, e);
        c.unref();
        return true;
    }
    function R() {
        M = 0;
        if (c !== null) {
            clearTimeout(c);
            c = null;
        }
    }
    function sync(e) {
        u = u.then(()=>W(e)).catch((o)=>{
            t(`[bridge:projects] converge (${e}) threw: ${l(o)}`, {
                level: "warn"
            });
        });
        return u;
    }
    async function W(e) {
        if (p) {
            return;
        }
        if (e === "binding_changed") {
            R();
        }
        let o = await s.readHearthBinding();
        if (p) {
            return;
        }
        if (!o.read) {
            t(`[bridge:projects] binding read did not answer (${e}) \u2014 mount left as is`, {
                level: "warn"
            });
            if (!r || E(r)) {
                j();
            }
            return;
        }
        let n = FIr({
            hearth: o.assertion
        }, {
            apiBaseUrl: s.apiBaseUrl,
            sessionId: s.sessionId
        });
        if (!n.binding) {
            R();
            if (r) {
                t(`[bridge:projects] binding gone (${n.reason}, ${e}) \u2014 dropping the reply mount`);
                let i = r;
                r = null;
                await b(i);
            }
            return;
        }
        reassertOwnership();
        if (r && r.binding.mountUrl === n.binding.mountUrl) {
            if (E(r)) {
                t(`[bridge:projects] the reply mount's dial had failed \u2014 dialing again (${e})`);
                let i = r;
                r = null;
                await b(i);
                if (p) {
                    return;
                }
                await B(n.binding);
                return;
            }
            P(r, n.binding);
            r.binding = n.binding;
            return;
        }
        t(`[bridge:projects] joined to a project thread (${e}) \u2014 mounting the reply server`);
        await B(n.binding);
    }
    async function B(binding) {
        if (getAppState().mcp.clients.some((i)=>i.name === Mc) || Mc in getDynamicMcpState().configs || T()) {
            t(`[bridge:projects] reply mount skipped: a server named ${Mc} is already configured`, {
                level: "warn"
            });
            f("bridge_projects_mcp_mount", "name_taken");
            return;
        }
        let config = Rue({
            ...vCs(binding.mountUrl, s.sessionId),
            scope: "dynamic",
            role: "comms"
        }, {
            getBearerToken: s.getBearerToken
        });
        let n = {
            binding,
            config,
            allowRules: []
        };
        r = n;
        setAppState((i)=>xfe(i, Mc, {
                client: {
                    name: Mc,
                    type: "pending",
                    config
                },
                tools: [],
                commands: []
            }));
        if (!y) {
            n.allowRules = O(binding.autoAllowTools.map((i)=>_n({
                    toolName: ii(Mc, i)
                })));
        }
        await N(n);
    }
    async function N(e) {
        let attemptEpoch = Rr();
        let n;
        try {
            n = {
                ...await C().reconnectMcpServerImpl(Mc, e.config, s.storageV5, s.credentials),
                attemptEpoch
            };
        } catch (error) {
            t(`[bridge:projects] reply mount connect threw: ${l(error)}`, {
                level: "warn"
            });
            n = {
                client: {
                    name: Mc,
                    type: "failed",
                    config: e.config,
                    error: "Connection failed"
                },
                tools: [],
                commands: [],
                attemptEpoch
            };
        }
        if (r !== e) {
            if (n.client.type === "connected") {
                await C().detachAndCloseConnection(n.client);
            }
            return;
        }
        let i = pfe(s.stores, Mc, n);
        if (i !== "applied") {
            f("bridge_projects_mcp_mount", i);
            reassertOwnership();
            return;
        }
        if (n.client.type === "connected") {
            R();
            Rte(Mc, undefined);
            g("bridge_projects_mcp_mount");
        } else if (x(n.client)) {
            Rte(Mc, Object.assign(Error("reply mount dial failed"), {
                mcpErrorSource: "downstream_unreachable"
            }));
            if (j()) {
                f("bridge_projects_mcp_mount", "settled_failed_retrying");
            } else {
                m("bridge_projects_mcp_mount", "settled_failed");
            }
        } else {
            m("bridge_projects_mcp_mount", n.client.type === "failed" ? `settled_failed_${(n.client.errorCode ?? "answered").toLowerCase()}` : `settled_${n.client.type}`);
        }
    }
    function E(e) {
        let o = getAppState().mcp.clients.find((n)=>n.name === Mc);
        return o !== undefined && o.config === e.config && x(o);
    }
    async function b(e) {
        _(e.allowRules);
        let o = getAppState().mcp.clients.find((i)=>i.name === Mc);
        if (o && o.config !== e.config) {
            await D(e.config);
            return;
        }
        let n = Bo(Mc);
        setAppState((i)=>{
            let { [Mc]: d, ...rest } = i.mcp.resources;
            let { [Mc]: I, ...rest_1 } = i.mcp.resourceTemplates;
            return {
                ...i,
                mcp: {
                    ...i.mcp,
                    clients: i.mcp.clients.filter((a)=>a !== o),
                    tools: i.mcp.tools.filter((a)=>!rd(a, Mc, n)),
                    commands: i.mcp.commands.filter((a)=>!Zy(a, Mc)),
                    resources: rest,
                    resourceTemplates: rest_1
                }
            };
        });
        await D(e.config);
    }
    function reassertOwnership() {
        if (!r) {
            return;
        }
        let e = getAppState().mcp.clients.find((n)=>n.name === Mc);
        if (e && e.config === r.config && !T()) {
            if (!y) {
                P(r, r.binding);
            }
            return;
        }
        t("[bridge:projects] the reply mount’s name is no longer held by its own row — retracting its pre-approvals", {
            level: "warn"
        });
        let o = r;
        r = null;
        b(o);
    }
    function T() {
        return Object.hasOwn(s.sdkHostConfigs(), Mc);
    }
    function suspendAllowsForApply(e) {
        if (!Object.hasOwn(e, Mc)) {
            return;
        }
        y = true;
        if (!r) {
            return;
        }
        let r_allowRules = r.allowRules;
        r.allowRules = [];
        _(r_allowRules);
    }
    function reassertAfterApply() {
        y = false;
        reassertOwnership();
    }
    function P(e, binding) {
        if (y) {
            return;
        }
        let n = binding.autoAllowTools.map((a)=>_n({
                toolName: ii(Mc, a)
            }));
        let i = new Set(n);
        let d = new Set(e.allowRules);
        let v = e.allowRules.filter((a)=>!i.has(a));
        if (v.length > 0) {
            _(v);
        }
        let I = e.allowRules.filter((a)=>i.has(a));
        let H = O(n.filter((a)=>!d.has(a)));
        e.allowRules = [
            ...I,
            ...H
        ];
    }
    function k(e) {
        return F(getAppState().toolPermissionContext.alwaysAllowRules.session ?? [], (o)=>o === e);
    }
    function O(e) {
        if (p) {
            return [];
        }
        if (e.length === 0) {
            return [];
        }
        let o = new Map(e.map((n)=>[
                n,
                k(n)
            ]));
        setAppState((n)=>({
                ...n,
                toolPermissionContext: jd(n.toolPermissionContext, {
                    type: "addRules",
                    destination: "session",
                    behavior: "allow",
                    rules: e.map(Un)
                })
            }));
        return e.filter((n)=>k(n) > (o.get(n) ?? 0));
    }
    function _(e) {
        if (e.length === 0) {
            return;
        }
        setAppState((o)=>{
            let session = [
                ...o.toolPermissionContext.alwaysAllowRules.session ?? []
            ];
            for (let i of e){
                let d = session.indexOf(i);
                if (d !== -1) {
                    session.splice(d, 1);
                }
            }
            return {
                ...o,
                toolPermissionContext: {
                    ...o.toolPermissionContext,
                    alwaysAllowRules: {
                        ...o.toolPermissionContext.alwaysAllowRules,
                        session
                    }
                }
            };
        });
    }
    function D(config) {
        return C().clearServerCache(Mc, config).catch((o)=>{
            t(`[bridge:projects] reply mount cleanup failed: ${l(o)}`, {
                level: "warn"
            });
        });
    }
    function drop() {
        p = true;
        R();
        if (r) {
            let e = r.allowRules;
            r.allowRules = [];
            _(e);
        }
        u = u.then(async ()=>{
            if (!r) {
                return;
            }
            t("[bridge:projects] dropping the reply mount");
            let e = r;
            r = null;
            await b(e);
        }).catch((e)=>{
            t(`[bridge:projects] drop threw: ${l(e)}`, {
                level: "warn"
            });
        });
        return u;
    }
    return {
        sync,
        drop,
        reassertOwnership,
        suspendAllowsForApply,
        reassertAfterApply,
        current: ()=>r?.binding ?? null,
        projectFilesDoor: ()=>{
            if (r) {
                return {
                    channelId: r.binding.channelId,
                    sessionId: s.sessionId,
                    apiBaseUrl: s.apiBaseUrl,
                    getBearerToken: s.getBearerToken,
                    getWorkerEpoch: s.getWorkerEpoch
                };
            }
            return null;
        }
    };
}
function x(s) {
    return s.type === "failed" && !q.has(s.errorCode ?? "");
}
var q = new Set([
    "CLI_OWNED_BEARER_REJECTED",
    "POLICY_BLOCKED",
    "APPROVAL_REQUIRED",
    "DISABLED",
    "IDENTITY_CHANGED",
    "SHUTTING_DOWN"
]);
export { $Ir };
