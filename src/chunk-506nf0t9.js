import { F1n, kct, U1n } from "/$bunfs/root/chunk-6dwnw6av.js";
import "/$bunfs/root/chunk-52bcnmbr.js";
import "/$bunfs/root/chunk-5k7wva7c.js";
import "/$bunfs/root/chunk-k7dkeqsc.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import { Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import { Oi, ei, A8e, t } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-r3z1chqx.js";
import "/$bunfs/root/chunk-6bjtvbt8.js";
import { Y3, i0e } from "/$bunfs/root/chunk-qwvy7ma3.js";
import "/$bunfs/root/chunk-0qnysq84.js";
import { tcn } from "/$bunfs/root/chunk-vpm220zg.js";
import { yfe } from "/$bunfs/root/chunk-7480f43b.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
const ee = 65536;
const te = 600;
const maxCodeUnits = 200;
const oe = 5000;
const re = 300000;
function Z(timeout_s) {
    return Math.min(600, Math.max(5, Math.round(timeout_s ?? 60)));
}
function ae(o, m) {
    if (o === undefined) {
        return "unknown_template";
    }
    if (!o.digests.some((v)=>v.sha256 === m.digest)) {
        return "version_mismatch";
    }
    if (m.event !== o.event || !Y3(m.event)) {
        return "event_not_allowed";
    }
    return "awaiting_upload";
}
export function createDeviceHooksWorker(o) {
    let m = null;
    let v = new Map;
    let y = new Map;
    o.registry.onLeaseExpired((i)=>o.forwarder.removeForOwner(i.instanceId));
    let M = ()=>o.policy.pluginOnly() || o.policy.customizationDisabled() || o.policy.managedOnly() || o.policy.allDisabled();
    let b = ()=>{
        let i = o.registry.current();
        if (i !== null) {
            o.forwarder.removeForOwner(i.instanceId);
            o.templateRunner.remove(i.instanceId);
        }
        o.registry.clear();
        y.clear();
        o.templates.clear();
    };
    let O = async ()=>{
        let shared = m !== null && !m.settled;
        if (m === null || m.settled) {
            let l = {
                promise: o.readAccountFlags(),
                startedAt: o.now(),
                settled: false
            };
            l.promise.then(()=>l.settled = true, ()=>l.settled = true);
            m = l;
        }
        let s = m;
        let a = o.now();
        let c = Math.max(0, o.flagWaitCapMs - (a - s.startedAt));
        return {
            state: await Ge(s.promise.then((l)=>{
                if (l) {
                    return "on";
                }
                return "off";
            }, ()=>"pending"), c) ?? "pending",
            waitMs: o.now() - a,
            shared
        };
    };
    let A = async ()=>{
        let i = {
            flagWaitMs: 0,
            sharedFlagRead: false
        };
        if (M()) {
            b();
            return {
                ok: false,
                error: "hook_forwarding_disabled: policy",
                outcome: "disabled_policy",
                ...i
            };
        }
        let s = await O();
        let a = {
            flagWaitMs: s.waitMs,
            sharedFlagRead: s.shared
        };
        if (s.state === "pending") {
            return {
                ok: false,
                error: "hook_forwarding_not_ready: feature flags not yet available; retry",
                outcome: "not_ready",
                ...a
            };
        }
        if (s.state === "off") {
            b();
            return {
                ok: false,
                error: "hook_forwarding_disabled: flag_off",
                outcome: "disabled_flag_off",
                ...a
            };
        }
        if (M()) {
            b();
            return {
                ok: false,
                error: "hook_forwarding_disabled: policy",
                outcome: "disabled_policy",
                ...a
            };
        }
        return {
            ok: true,
            ...a
        };
    };
    let P = async (i)=>{
        let s = {
            flagWaitMs: 0,
            sharedFlagRead: false
        };
        if (Oi(i).length > ee) {
            return {
                ok: false,
                error: "invalid_registration: request larger than 64 KiB",
                outcome: "invalid",
                ...s
            };
        }
        let a = F1n().safeParse(i.request);
        if (!a.success) {
            return {
                ok: false,
                error: `invalid_registration: ${ei(a.error.issues[0]?.message ?? "malformed", {
                    maxCodeUnits
                })}`,
                outcome: "invalid",
                ...s
            };
        }
        if (a.data.worker_epoch !== undefined && a.data.worker_epoch !== o.workerEpoch) {
            return {
                ok: false,
                error: `stale_worker_epoch: worker epoch is ${o.workerEpoch}`,
                outcome: "stale_epoch",
                ...s
            };
        }
        let c = await A();
        if (c.ok) {
            return {
                ok: true,
                parsed: a.data,
                flagWaitMs: c.flagWaitMs,
                sharedFlagRead: c.sharedFlagRead
            };
        }
        return c;
    };
    let T = async (i)=>{
        let s = await P(i);
        if (!s.ok) {
            o.telemetry.register({
                outcome: s.outcome,
                accepted: 0,
                ignored: 0,
                templatesAwaitingUpload: 0,
                templatesRefused: 0,
                flagWaitMs: s.flagWaitMs,
                sharedFlagRead: s.sharedFlagRead
            });
            return {
                kind: "error",
                error: s.error
            };
        }
        let s_parsed = s.parsed;
        let project_dir = o.projectRoot();
        let cwd = o.cwd();
        let success = kct().safeParse({
            status: "unregistered",
            project_dir,
            cwd,
            worker_epoch: o.workerEpoch
        }).success;
        let d = {
            project_dir,
            cwd: success ? cwd : project_dir,
            worker_epoch: o.workerEpoch
        };
        let D = (e, n)=>{
            if (o.registry.removeOwner(s_parsed.instance_id)) {
                o.forwarder.removeForOwner(s_parsed.instance_id);
                o.templateRunner.remove(s_parsed.instance_id);
            }
            y.delete(s_parsed.instance_id);
            o.telemetry.register({
                outcome: "unregistered",
                accepted: 0,
                ignored: e.length,
                templatesAwaitingUpload: 0,
                templatesRefused: n.length,
                flagWaitMs: s.flagWaitMs,
                sharedFlagRead: s.sharedFlagRead
            });
            return {
                kind: "success",
                response: {
                    status: "unregistered",
                    ...d,
                    ...e.length > 0 && {
                        ignored_ids: e.slice(0, 128)
                    },
                    ...n.length > 0 && {
                        templates: [
                            ...n
                        ]
                    }
                }
            };
        };
        if (s_parsed.hooks.length === 0 && s_parsed.templates.length === 0) {
            return D([], []);
        }
        let entries = [];
        let _ = [];
        let S = new Set;
        for (let e of s_parsed.hooks){
            let n = yfe(e.id);
            let p = e.matcher === undefined || e.matcher === "" || e.matcher === "*" || i0e.test(e.matcher);
            let C = S.has(e.id);
            S.add(e.id);
            if (C || n === null || n.instanceId !== s_parsed.instance_id || n.event !== e.event || !Y3(e.event) || !p) {
                _.push(e.id);
                continue;
            }
            entries.push({
                id: e.id,
                event: e.event,
                ...e.matcher !== undefined && e.matcher !== "" && e.matcher !== "*" && {
                    matcher: e.matcher
                },
                kind: e.kind,
                ...e.timeout_s !== undefined && {
                    timeoutS: e.timeout_s
                },
                source: e.source,
                hasCondition: e.has_condition === true,
                targetPinned: e.target_pinned === true
            });
        }
        let f = {};
        let R = new Map;
        let g = new Map;
        let r = new Set;
        let W = y.get(s_parsed.instance_id) ?? new Map;
        let h = new Map;
        let q = (template)=>{
            let n = W.get(template);
            if (n === undefined) {
                return false;
            }
            R.set(n.matcher, template);
            f[n.event] = [
                ...f[n.event] ?? [],
                n.matcher
            ];
            h.set(template, n);
            r.add(template);
            return true;
        };
        let K = (e, timeout)=>{
            if (!tcn(e) || !v.get(s_parsed.instance_id)?.has(e.id)) {
                return;
            }
            let p = {
                matcher: e.matcher,
                hooks: [
                    {
                        type: "callback",
                        timeout,
                        callback: async ()=>{
                            o.telemetry.templateStandInBlocked?.({
                                template: e.id
                            });
                            return {
                                decision: "block",
                                reason: `cloud template ${e.id} could not be installed on this worker; matching calls are blocked until it is (register again to retry)`
                            };
                        }
                    }
                ]
            };
            R.set(p, e.id);
            f[e.event] = [
                ...f[e.event] ?? [],
                p
            ];
            h.set(e.id, {
                event: e.event,
                matcher: p
            });
            r.add(e.id);
        };
        let N = new Map(s_parsed.templates.map((e)=>[
                e.template,
                e
            ]));
        for (let e of N.values()){
            let n = o.templates.template(e.template);
            let status = ae(n, e);
            let C = status === "awaiting_upload" ? o.templates.bytesFor(e.digest) : undefined;
            if (n === undefined || C === undefined) {
                g.set(e.template, {
                    template: e.template,
                    status
                });
                if (!q(e.template) && n !== undefined) {
                    K(n, Z(e.timeout_s));
                }
                continue;
            }
            let timeout = Z(e.timeout_s);
            if (await o.templateRunner.resolveInterpreter() === null) {
                g.set(e.template, {
                    template: e.template,
                    status: "interpreter_unavailable"
                });
                if (!q(e.template)) {
                    K(n, timeout);
                }
                continue;
            }
            let callback;
            try {
                callback = await Ge(o.templateRunner.prepare(n, e.digest, C, timeout), oe);
                if (callback === undefined) {
                    throw Error("template prepare timed out");
                }
            } catch (error) {
                t(`[deviceHooks] template ${e.template} install failed: ${error instanceof Error ? error.message : String(error)}`, {
                    level: "error"
                });
                g.set(e.template, {
                    template: e.template,
                    status: "install_failed"
                });
                if (!q(e.template)) {
                    K(n, timeout);
                }
                continue;
            }
            let L = {
                matcher: n.matcher,
                hooks: [
                    {
                        type: "callback",
                        timeout,
                        callback
                    }
                ]
            };
            R.set(L, n.id);
            f[n.event] = [
                ...f[n.event] ?? [],
                L
            ];
            h.set(n.id, {
                event: n.event,
                matcher: L
            });
            g.set(e.template, {
                template: e.template,
                status: "installed"
            });
        }
        let templates = [
            ...g.values()
        ];
        if (M()) {
            b();
            o.telemetry.register({
                outcome: "disabled_policy",
                accepted: 0,
                ignored: 0,
                templatesAwaitingUpload: 0,
                templatesRefused: 0,
                flagWaitMs: s.flagWaitMs,
                sharedFlagRead: s.sharedFlagRead
            });
            return {
                kind: "error",
                error: "hook_forwarding_disabled: policy"
            };
        }
        let lease_s = s_parsed.lease_s ?? te;
        let leaseExpiresAt = o.now() + lease_s * 1000;
        let w = {
            instanceId: s_parsed.instance_id,
            displayName: ei(s_parsed.display_name ?? "", {
                maxCodeUnits: A8e
            }) || s_parsed.instance_id,
            epoch: o.workerEpoch,
            leaseExpiresAt,
            entries,
            templates: [
                ...N.values()
            ].flatMap((e)=>{
                let n = g.get(e.template)?.status;
                let event = r.has(e.template) ? h.get(e.template)?.event ?? e.event : e.event;
                if ((n === "awaiting_upload" || n === "installed" || r.has(e.template)) && Y3(event)) {
                    return [
                        {
                            template: e.template,
                            digest: e.digest,
                            event,
                            ...e.timeout_s !== undefined && {
                                timeoutS: e.timeout_s
                            }
                        }
                    ];
                }
                return [];
            })
        };
        if (w.entries.length === 0 && w.templates.length === 0) {
            return D(_, templates);
        }
        let { replaced, awaySince } = o.registry.replaceOwner(w);
        if (replaced !== undefined) {
            o.forwarder.removeForOwner(replaced);
            o.templateRunner.remove(replaced);
            y.delete(replaced);
        }
        o.forwarder.installForOwner(w);
        o.templateRunner.install(w.instanceId, f, (e, n)=>R.get(n) ?? "template");
        y.set(w.instanceId, h);
        let Y = v.get(w.instanceId) ?? new Set;
        for (let e of g.values()){
            if (e.status === "installed") {
                Y.add(e.template);
            }
        }
        v.set(w.instanceId, Y);
        let templatesAwaitingUpload = F(templates, (e)=>e.status === "awaiting_upload");
        let templatesInstalled = F(templates, (e)=>e.status === "installed");
        o.telemetry.register({
            outcome: "accepted",
            accepted: entries.length,
            ignored: _.length,
            templatesAwaitingUpload,
            templatesInstalled,
            templatesRefused: templates.length - templatesAwaitingUpload - templatesInstalled,
            flagWaitMs: s.flagWaitMs,
            sharedFlagRead: s.sharedFlagRead
        });
        return {
            kind: "success",
            response: {
                status: "registered",
                ...d,
                lease_s,
                lease_expires_at: new Date(leaseExpiresAt).toISOString(),
                accepted: entries.length,
                ignored: _.length,
                ..._.length > 0 && {
                    ignored_ids: _.slice(0, 128)
                },
                templates,
                ...replaced !== undefined && {
                    replaced_owner: replaced
                },
                ...awaySince !== undefined && {
                    away_since: new Date(awaySince).toISOString()
                }
            }
        };
    };
    let x = 400000;
    let U = async (i)=>{
        let s = (outcome, template = "unknown", bytes = 0)=>o.telemetry.upload({
                outcome,
                template,
                bytes
            });
        if (Oi(i).length > x) {
            s("invalid");
            return {
                kind: "error",
                error: "invalid_upload: request larger than 400 KB"
            };
        }
        let a = U1n().safeParse(i.request);
        if (!a.success) {
            s("invalid");
            return {
                kind: "error",
                error: `invalid_upload: ${ei(a.error.issues[0]?.message ?? "malformed", {
                    maxCodeUnits
                })}`
            };
        }
        let a_data = a.data;
        if (a_data.worker_epoch !== undefined && a_data.worker_epoch !== o.workerEpoch) {
            s("stale_epoch", a_data.template);
            return {
                kind: "error",
                error: `stale_worker_epoch: worker epoch is ${o.workerEpoch}`
            };
        }
        let u = await A();
        if (!u.ok) {
            s(u.outcome, a_data.template);
            return {
                kind: "error",
                error: u.error
            };
        }
        let l = o.templates.accept({
            template: a_data.template,
            digest: a_data.digest,
            contentBase64: a_data.content_base64
        });
        if (!l.ok) {
            s(l.kind, a_data.template);
            return {
                kind: "error",
                error: l.error
            };
        }
        s(l.status, l.template.id, l.bytes);
        return {
            kind: "success",
            response: {
                template: l.template.id,
                digest: a_data.digest,
                status: l.status
            }
        };
    };
    return {
        async handle (i) {
            switch(i.request.subtype){
                case "register_device_hooks":
                    return T(i);
                case "upload_device_hook_template":
                    return U(i);
                default:
                    return {
                        kind: "error",
                        error: `Unsupported control request subtype: ${i.request.subtype}`
                    };
            }
        }
    };
}
function ne(workerEpoch) {
    if (workerEpoch !== undefined && Number.isInteger(workerEpoch) && workerEpoch >= 1) {
        return workerEpoch;
    }
    return 1;
}
export async function productionDeviceHooksWorkerDeps(o) {
    let [{ isRestrictedToPluginOnly }, { isCustomizationDisabled }, { shouldHoldDeviceHooksByPolicy, shouldDisableAllHooksIncludingManaged }, { isAccountGateServed, isViolinAmatiEnabled }, { getToolServingFlagAnsweredOff, isToolServingEnabled }, { refreshGrowthBookFeatures }, { createDeviceHookRegistry, productionRegistryTimer }, { createDeviceHookForwarder, productionForwarderTimer }, { createDeviceHookTemplateStore }, { productionDeviceHookTemplateRunner, telemetryTemplateId }, { logEvent }, { fromEnum }, { logFeatureBad, logFeatureOk, logFeatureSad }] = await Promise.all([
        import("/$bunfs/root/chunk-93z3dnsq.js"),
        import("/$bunfs/root/chunk-xmkyyxrb.js"),
        import("/$bunfs/root/chunk-8dh2z26z.js"),
        import("/$bunfs/root/chunk-hn4vch5w.js"),
        import("/$bunfs/root/chunk-3vr7cd27.js"),
        import("/$bunfs/root/chunk-jv24m4k2.js"),
        import("/$bunfs/root/chunk-9js0c2nh.js"),
        import("/$bunfs/root/chunk-hsbas04v.js"),
        import("/$bunfs/root/chunk-8fd527fb.js"),
        import("/$bunfs/root/chunk-ee519hvx.js"),
        import("/$bunfs/root/chunk-mj49rkzw.js"),
        import("/$bunfs/root/chunk-a0ewv7yv.js"),
        import("/$bunfs/root/chunk-kxz3kak4.js")
    ]);
    let registry = createDeviceHookRegistry({
        now: Date.now,
        setTimer: productionRegistryTimer,
        onLeaseExpired: ()=>logEvent("tengu_device_hooks_lease_expired", {})
    });
    let forwarder = createDeviceHookForwarder({
        registry,
        sender: o.sender,
        toolAliases: o.toolAliases,
        now: Date.now,
        setTimer: productionForwarderTimer,
        telemetry: {
            forwarded: (r)=>logEvent("tengu_device_hook_forwarded", {
                    event: fromEnum(r.event),
                    outcome: fromEnum(r.outcome),
                    fields_dropped: r.fieldsDropped,
                    blocked: r.blocked,
                    rtt_ms: r.rttMs,
                    error_replies_ignored: r.errorRepliesIgnored,
                    malformed_replies_ignored: r.malformedRepliesIgnored
                })
        }
    });
    let R = {
        policy: {
            pluginOnly: ()=>isRestrictedToPluginOnly("hooks"),
            customizationDisabled: ()=>isCustomizationDisabled("hooks"),
            managedOnly: shouldHoldDeviceHooksByPolicy,
            allDisabled: shouldDisableAllHooksIncludingManaged
        },
        readAccountFlags: async ()=>{
            let [r, W] = await Promise.all([
                isToolServingEnabled({
                    cloudClient: true
                }),
                isViolinAmatiEnabled()
            ]);
            if (r && W) {
                return true;
            }
            let h = getToolServingFlagAnsweredOff({
                cloudClient: true
            }) ?? (!W && isAccountGateServed("tengu_violin_amati") ? "tengu_violin_amati" : undefined);
            if (h === undefined) {
                refreshGrowthBookFeatures().catch(()=>{});
                throw Error("account flags not served yet");
            }
            logEvent("tengu_device_hooks_account_flag_off", {
                flag: fromEnum(h)
            });
            return false;
        },
        flagWaitCapMs: 5000,
        now: Date.now,
        workerEpoch: ne(o.workerEpoch),
        projectRoot: o.projectRoot,
        cwd: o.cwd,
        registry,
        forwarder,
        templates: createDeviceHookTemplateStore(),
        templateRunner: Ce() ? {
            resolveInterpreter: async ()=>null,
            prepare: async ()=>{
                throw Error("no device hook templates in a diskless session");
            },
            install: ()=>{},
            remove: ()=>{}
        } : productionDeviceHookTemplateRunner(o.projectRoot),
        telemetry: {
            templateStandInBlocked: (r)=>logEvent("tengu_device_hook_template_run", {
                    template: fromEnum(telemetryTemplateId(r.template)),
                    outcome: fromEnum("stand_in_blocked"),
                    duration_ms: 0
                }),
            upload: (r)=>logEvent("tengu_device_hook_template_upload", {
                    outcome: fromEnum(r.outcome),
                    template: fromEnum(telemetryTemplateId(r.template)),
                    bytes: r.bytes
                }),
            register: (r)=>{
                logEvent("tengu_device_hooks_register", {
                    outcome: fromEnum(r.outcome),
                    accepted: r.accepted,
                    ignored: r.ignored,
                    templates_awaiting_upload: r.templatesAwaitingUpload,
                    templates_installed: r.templatesInstalled ?? 0,
                    templates_refused: r.templatesRefused,
                    flag_wait_ms: r.flagWaitMs,
                    shared_flag_read: r.sharedFlagRead
                });
                if (r.outcome === "accepted" || r.outcome === "unregistered") {
                    logFeatureOk("device_hooks_register", {
                        accepted: r.accepted
                    });
                } else if (r.outcome === "not_ready") {
                    logFeatureSad("device_hooks_register", r.outcome);
                } else {
                    logFeatureBad("device_hooks_register", r.outcome);
                }
            }
        }
    };
    let g = Date.now();
    return {
        ...R,
        readAccountFlags: ()=>{
            let r = Date.now();
            if (r - g >= re) {
                g = r;
                refreshGrowthBookFeatures().catch(()=>{});
            }
            return R.readAccountFlags();
        }
    };
}
