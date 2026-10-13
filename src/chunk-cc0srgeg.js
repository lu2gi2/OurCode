import { qv, A2n } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { Nt, oC } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Tn, ta } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { nt, s, n, Wt } from "/$bunfs/root/chunk-8524cxt8.js";
import { Oo } from "/$bunfs/root/chunk-tvwsdq27.js";
import { le, R, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Ma, Dc, ms, Mi as selectedValue, Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { HSt, ane, Ys, qp } from "/$bunfs/root/chunk-kasbfbhj.js";
import { JW } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { Sk } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { ic, cl, ro } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { uj } from "/$bunfs/root/chunk-y8rnmweg.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { ut } from "/$bunfs/root/chunk-wy1471a2.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { w5e } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function k() {
    let t = w(1);
    let u;
    if (t[0] === S) {
        u = r(n, {
            children: [
                "MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the",
                " ",
                e(Wt, {
                    url: "https://code.claude.com/docs/en/mcp",
                    children: "MCP documentation"
                }),
                "."
            ]
        });
        t[0] = u;
    } else {
        u = t[0];
    }
    return u;
}
function Ncn({ serverName, isPluginServer = false, onDone }) {
    let { storageV5 } = Pe();
    let c = R(false);
    let f = Ma(Oo);
    let { refusedWithin, noteRefused, epoch } = ms();
    let h = Dc(epoch, Oo);
    function refuseInput() {
        if (f() || refusedWithin(Oo)) {
            noteRefused();
            return true;
        }
        return false;
    }
    async function C(p) {
        if (refuseInput()) {
            return;
        }
        if (c.current) {
            return;
        }
        c.current = true;
        i("tengu_mcp_dialog_choice", {
            choice: d(p)
        });
        switch(p){
            case "yes":
            case "yes_all":
                {
                    let g = false;
                    {
                        let { error } = await ta("localSettings", (M)=>{
                            let P = M?.enabledMcpjsonServers || [];
                            if (P.includes(serverName)) {
                                return null;
                            }
                            return {
                                enabledMcpjsonServers: [
                                    ...P,
                                    serverName
                                ]
                            };
                        }, undefined, storageV5);
                        g ||= error != null;
                    }
                    if (p === "yes_all") {
                        let { error } = await Tn("localSettings", {
                            enableAllProjectMcpServers: true
                        }, undefined, storageV5);
                        g ||= error != null;
                    }
                    A2n(oC(), [
                        serverName
                    ]);
                    onDone({
                        persistFailed: g
                    });
                    break;
                }
            case "no":
                {
                    let { error } = await ta("localSettings", (y)=>{
                        let M = y?.disabledMcpjsonServers || [];
                        if (M.includes(serverName)) {
                            return null;
                        }
                        return {
                            disabledMcpjsonServers: [
                                ...M,
                                serverName
                            ]
                        };
                    }, undefined, storageV5);
                    onDone({
                        persistFailed: error != null
                    });
                    break;
                }
        }
    }
    return r(_e, {
        title: `New MCP server found in this project: ${w5e(serverName, isPluginServer)}`,
        color: "warning",
        onCancel: ()=>void C("no"),
        exitOnCtrlCD: true,
        children: [
            e(k, {}),
            e(Ve, {
                options: [
                    {
                        label: "Use this MCP server",
                        value: "yes"
                    },
                    {
                        label: "Use this and all future MCP servers in this project",
                        value: "yes_all"
                    },
                    {
                        label: "Continue without using this MCP server",
                        value: "no"
                    }
                ],
                onChange: (p)=>void C(p),
                onCancel: ()=>void C("no"),
                hideIndexes: true,
                refuseInput,
                defaultFocusValue: "no",
                selectedValue
            }, h.remountKey)
        ]
    });
}
N();
function $cn({ serverNames, pluginServerNames, onDone }) {
    let { storageV5 } = Pe();
    let c = R(false);
    let f = Ma(Oo);
    let { refusedWithin, noteRefused } = ms();
    let v = nt();
    let h = le(()=>{
        if (f() || refusedWithin(Oo)) {
            noteRefused();
            return true;
        }
        return false;
    }, [
        f,
        refusedWithin,
        noteRefused
    ]);
    async function onSubmit(p) {
        if (h()) {
            return;
        }
        if (c.current) {
            return;
        }
        c.current = true;
        let [g, y] = Sk(serverNames, (P)=>p.includes(P));
        i("tengu_mcp_multidialog_choice", {
            approved: g.length,
            rejected: y.length
        });
        let M = false;
        if (g.length > 0) {
            let { error } = await ta("localSettings", (A)=>({
                    enabledMcpjsonServers: D([
                        ...A?.enabledMcpjsonServers || [],
                        ...g
                    ])
                }), undefined, storageV5);
            M ||= error != null;
        }
        A2n(oC(), g);
        if (y.length > 0) {
            let { error } = await ta("localSettings", (A)=>({
                    disabledMcpjsonServers: D([
                        ...A?.disabledMcpjsonServers || [],
                        ...y
                    ])
                }), undefined, storageV5);
            M ||= error != null;
        }
        onDone({
            persistFailed: M
        });
    }
    let onCancel = le(async ()=>{
        if (h()) {
            return;
        }
        if (c.current) {
            return;
        }
        c.current = true;
        let { error } = await ta("localSettings", (g)=>({
                disabledMcpjsonServers: D([
                    ...g?.disabledMcpjsonServers || [],
                    ...serverNames
                ])
            }), undefined, storageV5);
        onDone({
            persistFailed: error != null
        });
    }, [
        h,
        serverNames,
        onDone,
        storageV5
    ]);
    return r(Y, {
        children: [
            r(_e, {
                title: `${serverNames.length} new MCP servers found in this project`,
                subtitle: "Select any you wish to enable.",
                color: "warning",
                onCancel,
                exitOnCtrlCD: true,
                hideInputGuide: true,
                children: [
                    e(k, {}),
                    e(uj, {
                        options: serverNames.map((p)=>({
                                label: w5e(p, pluginServerNames?.has(p) ?? false),
                                value: p
                            })),
                        defaultValue: v ? [] : serverNames,
                        submitButtonText: "Enable selected",
                        onSubmit,
                        onCancel,
                        hideIndexes: true,
                        refuseInput: h,
                        refuseSubmitFocus: h
                    })
                ]
            }),
            e(s, {
                paddingX: 1,
                children: e(n, {
                    dimColor: true,
                    italic: true,
                    children: r(be, {
                        children: [
                            e(G, {
                                chord: "space",
                                action: "select"
                            }),
                            e(ut, {
                                action: "confirm:no",
                                context: "Confirmation",
                                fallback: "Esc",
                                description: "reject all"
                            })
                        ]
                    })
                })
            })
        ]
    });
}
async function Fcn(t) {
    if (qv()) {
        return {
            pendingServers: [],
            pluginServerNames: new Set
        };
    }
    let { serverNames, pluginServerNames } = await bDr(t);
    return {
        pendingServers: serverNames.filter((c)=>ane(c) === "pending"),
        pluginServerNames
    };
}
async function bDr(t) {
    let { servers } = qp("project");
    let serverNames = Object.keys(servers);
    let o = new Set(serverNames);
    let pluginServerNames = new Set;
    let { enabled } = await Ys(t);
    let m = enabled.filter(JW);
    for (let b of m){
        let v = await HSt(b, [], t);
        if (!v) {
            continue;
        }
        for (let h of Object.keys(v)){
            if (o.has(h) || pluginServerNames.has(h)) {
                continue;
            }
            serverNames.push(h);
            pluginServerNames.add(h);
        }
    }
    return {
        serverNames,
        pluginServerNames,
        rootServers: servers
    };
}
async function NLo({ pendingServers, pluginServerNames }, l, o) {
    if (pendingServers.length === 0) {
        return null;
    }
    let c;
    c = await x(pendingServers.map((v)=>w5e(v, pluginServerNames.has(v))), o);
    let onDone = (v)=>{
        _(c, o).catch(()=>{}).then(()=>l(v));
    };
    let [m, ...b] = pendingServers;
    if (m !== undefined && b.length === 0) {
        return e(Ncn, {
            serverName: m,
            isPluginServer: pluginServerNames.has(m),
            onDone
        });
    }
    return e($cn, {
        serverNames: pendingServers,
        pluginServerNames,
        onDone
    });
}
async function x(t, u) {
    {
        if (!Nt()) {
            return;
        }
        let l = a.CLAUDE_JOB_DIR;
        if (!l) {
            return;
        }
        let o = await ro(l, u);
        if (!o) {
            return;
        }
        let c = t.length;
        let f = I(c, "server");
        let m = I(c, "needs", "need");
        try {
            await ic(l, {
                ...o,
                state: "blocked",
                detail: `${c} new MCP ${f} ${m} approval`,
                tempo: "blocked",
                needs: `approve ${c} new project MCP ${f} (${t.join(", ")}) \u2014 attach to respond`,
                updatedAt: new Date().toISOString()
            }, u);
            return {
                state: o.state,
                tempo: o.tempo,
                needs: o.needs,
                detail: o.detail
            };
        } catch (error) {
            cl(error);
        }
    }
}
async function _(t, u) {
    {
        if (!t || !Nt()) {
            return;
        }
        let l = a.CLAUDE_JOB_DIR;
        if (!l) {
            return;
        }
        let o = await ro(l, u);
        if (!o || o.state !== "blocked") {
            return;
        }
        try {
            await ic(l, {
                ...o,
                ...t,
                block: undefined,
                updatedAt: new Date().toISOString()
            }, u);
        } catch (error) {
            cl(error);
        }
    }
}
export { Ncn, $cn, Fcn, bDr, NLo };
