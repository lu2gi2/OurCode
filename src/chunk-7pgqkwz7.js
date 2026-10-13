import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { St, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { wss, iIn, aIn, Ess } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { zzt } from "/$bunfs/root/chunk-0x17099a.js";
import { LMo, sfe } from "/$bunfs/root/chunk-p6sjm56j.js";
import { iVr, aVr } from "/$bunfs/root/chunk-7sa5vvmp.js";
import { APt } from "/$bunfs/root/chunk-md7g8y4m.js";
import { V0t } from "/$bunfs/root/chunk-6b4khzmf.js";
import { TG } from "/$bunfs/root/chunk-6h6b52q8.js";
import { lae } from "/$bunfs/root/chunk-nc91yayz.js";
import { age } from "/$bunfs/root/chunk-7zrhxtr7.js";
async function VIr(e) {
    let o = e.session.then((session)=>({
            read: true,
            session
        }), (a)=>({
            read: false,
            error: a
        }));
    if (!await (e.isEnabled ?? APt)().catch(()=>false)) {
        return {
            status: "disabled"
        };
    }
    let s = await o;
    if (!s.read) {
        return B("session_unreadable", s.error);
    }
    if (s.session.archived) {
        return {
            status: "disabled"
        };
    }
    if (s.session.boundDeviceId === undefined) {
        let a = await (e.readUnboundCreateReason ?? ((A)=>iVr(A, wss, aVr(e.storageV5))))(e.sessionId).catch(()=>{});
        i("tengu_device_bind_attach", {
            outcome: b("session_unbound"),
            created_here: a !== undefined
        });
        if (a === undefined) {
            return {
                status: "not_applicable"
            };
        }
        return {
            status: "created_unbound",
            reason: a
        };
    }
    let r;
    try {
        r = (e.isEgressAllowed ?? age)();
    } catch  {
        r = false;
    }
    if (!r) {
        return y("egress");
    }
    let n = await (e.getAccount?.() ?? lae(e.credentials));
    if (n.status === "missing") {
        return y("account");
    }
    if (n.status === "mismatch") {
        return y("account_mismatch");
    }
    let u = await (e.loadLocalDevice?.(n.accountUuid) ?? zzt(n.accountUuid, e.credentials)).then((held)=>({
            read: true,
            held
        }), (a)=>({
            read: false,
            error: a
        }));
    if (!u.read) {
        return B("local_device_unreadable", u.error);
    }
    if (u.held === undefined) {
        return y("no_device_here");
    }
    let deviceId = u.held.rowPk.toLowerCase();
    if (deviceId !== s.session.boundDeviceId.toLowerCase()) {
        return y("other_device");
    }
    let { toolHostLink } = s.session;
    i("tengu_device_bind_attach", {
        outcome: b("bound"),
        tool_host_link: d(toolHostLink)
    });
    g("device_bind_attach");
    return {
        status: "bound",
        deviceId,
        held: u.held,
        toolHostLink
    };
}
function qIr(e) {
    return {
        archived: e.session_status === "archived",
        boundDeviceId: e.bound_device_uuid,
        toolHostLink: LMo(e.tool_host_status, e.device_bind_posture)
    };
}
async function OUs(e, { isEnabled = APt, isEgressAllowed = age } = {}) {
    e.catch(()=>{});
    if (!await isEnabled().catch(()=>false)) {
        return;
    }
    let { archived, boundDeviceId } = await e;
    if (archived) {
        return;
    }
    try {
        if (isEgressAllowed()) {
            return boundDeviceId;
        }
        return undefined;
    } catch  {
        return;
    }
}
function KIr(e) {
    return e.then((o)=>o.status === "bound", ()=>false);
}
function YIr(e) {
    return e.then((o)=>{
        if (o.status === "bound") {
            return o.deviceId;
        }
    }, ()=>{});
}
function XIr(e) {
    return e.then((o)=>{
        if (o.status === "bound") {
            return o.held;
        }
    }, ()=>{});
}
function k({ viewerOnly, binding }) {
    if (!viewerOnly && binding.status === "bound" && sfe(binding.toolHostLink)) {
        return {
            owner: true,
            deviceId: binding.deviceId
        };
    }
    return {
        owner: false
    };
}
async function KVn(e, o) {
    try {
        let s = await o();
        return s.session_status !== "archived" && typeof s.bound_device_uuid === "string" && s.bound_device_uuid.toLowerCase() === e.toLowerCase();
    } catch (error) {
        t(`[attachBinding] re-reading the session's binding failed (keeping it): ${l(error)}`);
        return;
    }
}
async function MUs({ sessionId, binding, deviceBridge, onNotice, repositoryTrust, readSession }) {
    return (await import("/$bunfs/root/chunk-tty4dsvh.js")).servedToolsAttachOptions({
        owner: binding.then((binding_1)=>{
            let h = k({
                viewerOnly: false,
                binding: binding_1
            });
            return ()=>h;
        }, ()=>()=>({
                    owner: false
                })),
        cloudClient: true,
        ...deviceBridge && {
            deviceBridge
        },
        ...onNotice && {
            onNotice
        },
        ...repositoryTrust && {
            repositoryTrust
        },
        stillBound: ()=>binding.then((v)=>{
                if (v.status === "bound") {
                    return KVn(v.deviceId, readSession);
                }
            }, ()=>{}),
        plumbing: (await import("/$bunfs/root/chunk-rvh38naq.js")).servedSessionPlumbing(sessionId)
    });
}
const JIr = "This session can run tools on this computer, so Claude Code must first keep a copy of this folder's settings, and it could not. Check free disk space and that ~/.claude/state can be written, then attach again; add --debug to see the cause.";
function QIr(e, o = {}) {
    let s = {
        status: "disabled"
    };
    let r = (c, p)=>t(`[remote-tools] ${c}: ${p}`);
    let n = [];
    let u = (c)=>{
        let p = n ?? [];
        n = undefined;
        p.forEach(([_, D])=>{
            try {
                c(_, D);
            } catch  {
                r(_, D);
            }
        });
    };
    let v = o.onNotice ?? r;
    let h = false;
    let a;
    let A;
    let S = e.catch((c)=>{
        t(`[deviceBind] attach binding failed unexpectedly: ${l(c)}`);
        return s;
    }).then(async (c)=>{
        if (c.status !== "bound" || sfe(c.toolHostLink)) {
            return c;
        }
        if (h) {
            return s;
        }
        let p = o.loadHoldSettings ? await o.loadHoldSettings() : (await import("/$bunfs/root/chunk-66b99vz0.js")).holdSettingsBesideAHelper;
        if (h) {
            return s;
        }
        a = p((_, D)=>{
            if (n) {
                return void n.push([
                    _,
                    D
                ]);
            }
            return v(_, D);
        });
        A = St(async ()=>a?.end());
        u(v);
        return c;
    });
    S.then(()=>{
        if (a !== undefined) {
            g("attach_settings_held_beside_helper");
        }
    }, (c)=>{
        m("attach_settings_held_beside_helper", "hold_failed");
        u(r);
        t(`[deviceBind] attach could not hold the settings beside the session's helper: ${l(c)}`);
    }).catch(()=>{});
    return {
        binding: S.catch(()=>s),
        kept: S.then(()=>true, ()=>false),
        end: ()=>{
            h = true;
            A?.();
            a?.end();
        }
    };
}
function ZIr(e) {
    let o = e.binding.catch((n)=>{
        t(`[deviceBind] attach binding failed unexpectedly: ${l(n)}`);
        return {
            status: "disabled"
        };
    });
    let s = false;
    let r;
    o.then((n)=>{
        if (s || n.status !== "bound" || !sfe(n.toolHostLink)) {
            return;
        }
        r = (e.startRegistration ?? V0t)({
            sessionId: e.sessionId,
            getAccessToken: e.getAccessToken,
            orgUuid: e.orgUuid,
            getDeviceId: ()=>n.deviceId,
            cloudClient: e.cloudClient,
            storageV5: e.storageV5,
            ...e.dirSync !== undefined && {
                dirSync: e.dirSync
            },
            ...e.folderRelation !== undefined && {
                folderRelation: e.folderRelation
            },
            ...e.onNotice && {
                onNotice: e.onNotice
            },
            ...e.servedSettingsChanged && {
                servedSettingsChanged: e.servedSettingsChanged
            },
            ...e.deviceMcpQuestion && {
                deviceMcpQuestion: e.deviceMcpQuestion
            }
        });
    }).catch((n)=>{
        t(`[deviceBind] attach could not start the device registration: ${l(n)}`);
    });
    return {
        announceSettled: (n)=>r?.announceSettled(n),
        serving: o.then(()=>r?.serving),
        notice: o.then((n)=>{
            if (n.status === "unbound") {
                return {
                    text: aIn(n.reason),
                    toast: true
                };
            }
            if (n.status === "created_unbound") {
                return {
                    text: iIn(n.reason),
                    toast: true
                };
            }
            if (n.status === "bound" && e.toolServingOn && !sfe(n.toolHostLink)) {
                return Ess(n.toolHostLink);
            }
        }),
        stop: async ()=>{
            s = true;
            await r?.stop();
        },
        heldServedCall: (n)=>r?.heldServedCall(n) ?? TG
    };
}
function y(e) {
    i("tengu_device_bind_attach", {
        outcome: d(e)
    });
    f("device_bind_attach", e);
    return {
        status: "unbound",
        reason: e
    };
}
function B(e, error) {
    i("tengu_device_bind_attach", {
        outcome: d(e)
    });
    if (e === "session_unreadable") {
        f("device_bind_attach", e);
    } else {
        m("device_bind_attach", e);
    }
    t(`[deviceBind] attach could not check the session's binding (${e}): ${l(error)}`);
    return {
        status: "unbound",
        reason: e
    };
}
export { VIr, qIr, OUs, KIr, YIr, XIr, KVn, MUs, JIr, QIr, ZIr };
