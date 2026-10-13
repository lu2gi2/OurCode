import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ye, l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { q, Kr, ek, jZ, od } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Q, YR, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { St, _, ei, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve as configHome } from "/$bunfs/root/chunk-6kc68p18.js";
import { ml, Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c as logError } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { cIe, nLo } from "/$bunfs/root/chunk-by6znj9b.js";
import { Wm } from "/$bunfs/root/chunk-7mawjt4q.js";
import { Bl, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { xp, qs, xR } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { jle, $J, $Ve, n_, o0e, FVe, K3, Vle, xy, Wrs, Fkt, Y3, zrs, i0e, Vrs, BVe, Vcr, a0e, l0e, c0e, qle, Kle, DTe, Yle, n6t, LTe, NTe, Jrs, Qrs, Ukt, Vxn, qxn, Bkt, Zrs, Qcr, Ni } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { ws, Cp } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { cy as repoRootOf } from "/$bunfs/root/chunk-2d9a83dh.js";
import { B1 } from "/$bunfs/root/chunk-h7cbghgp.js";
import { yn, fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { ya, lO } from "/$bunfs/root/chunk-0ycjphb5.js";
import { J6e, j1n, Be } from "/$bunfs/root/chunk-6dwnw6av.js";
import { bs } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { $n } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { Hmr, gLe, NL, kW, S8t, tR, Zd, hLe, zAe, ous, sCt, sus } from "/$bunfs/root/chunk-46dhek9m.js";
import { Qg, XQ, YNe } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { Vge, met, bHe, get, swt, ynr, het, _nr, g9o, h9o, YEn, qge, lwt, bet, AVt, H9o, D9o, ZEn, wet, L9o, pkn, rCn, RJ, Pir, Utt, cCn, xXr, dCn, IXr, N2e } from "/$bunfs/root/chunk-kasbfbhj.js";
import { uV, oLn, iLn, aLn, Cms, xms } from "/$bunfs/root/chunk-4r6b8efh.js";
import { AV, oF } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { Cit, nde } from "/$bunfs/root/chunk-6sdmsz4f.js";
import { xf, cSr } from "/$bunfs/root/chunk-md7g8y4m.js";
import { fbe } from "/$bunfs/root/chunk-5s4qvyjz.js";
import { wun } from "/$bunfs/root/chunk-0qnysq84.js";
import { UHo, Nqn, Gw } from "/$bunfs/root/chunk-at1vfjxr.js";
import { _M, rye, T2 } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { DWt } from "/$bunfs/root/chunk-5hp2pp9y.js";
import { Sve, xje, Pje, LIe } from "/$bunfs/root/chunk-ztdmpyqt.js";
import { Zln, lNt, cNt, h0o, y0o, I1e, ecn, _0o, PKn } from "/$bunfs/root/chunk-0dbfm0sw.js";
import { b0o, S0o, G9e } from "/$bunfs/root/chunk-vpm220zg.js";
import { w0o, Uft, v0o, yfe } from "/$bunfs/root/chunk-7480f43b.js";
import { lun } from "/$bunfs/root/chunk-shpjvy0m.js";
import { TG } from "/$bunfs/root/chunk-6h6b52q8.js";
import { NIe, Ije } from "/$bunfs/root/chunk-qdwdgw6n.js";
import { JN } from "/$bunfs/root/chunk-pzrwvyt4.js";
import { oc, fjt } from "/$bunfs/root/chunk-cerrsv89.js";
import { zs } from "/$bunfs/root/chunk-k1zxadxf.js";
import { rt } from "/$bunfs/root/chunk-xx1j2680.js";
import { o, E, T, _t, U } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { randomUUID } from "crypto";
import { realpath } from "fs/promises";
import { isAbsolute, dirname, basename, delimiter, resolve, posix } from "path";
import { devNull } from "os";
function qo() {
    let e = new Map;
    return {
        known (n) {
            let r = Math.max(e.get(n) ?? 0, 1);
            e.set(n, r);
            return r;
        },
        next (n) {
            let r = (e.get(n) ?? 0) + 1;
            e.set(n, r);
            return r;
        }
    };
}
function Bo() {
    return {
        consentPin: nLo(),
        generations: qo(),
        pointedToCommand: {
            shown: false
        },
        setAsideSessions: new Set,
        decided: Oe()
    };
}
const R9e = new q(Bo);
const Vo = /^[a-z_]{2,}:\[?[^/]*\]?$/;
function ze(e) {
    let r = [
        e.launchDirReal,
        e.launchDir,
        ...e.sync !== undefined ? [
            e.sync.rootReal,
            ...e.sync.root !== undefined ? [
                e.sync.root
            ] : []
        ] : [],
        ...e.extraReach
    ].filter((u)=>!Vo.test(u));
    let s = r.find((u)=>!tR(u));
    if (s !== undefined) {
        t(`[deviceHooks] reach: a root that is not an absolute path (${JSON.stringify(s)}) \u2014 everything on this machine counts as in the cloud session's reach`, {
            level: "warn"
        });
        return [
            NL
        ];
    }
    return r.map((u)=>Zd(u.replace(/\/+$/, "")) || "/");
}
function Sn(e, n) {
    return e.length === 1 && e[0] === NL || n.some((r)=>!tR(r));
}
function Go(e, reach) {
    let r = ze(reach);
    return Sn(r, e) || e.some((s)=>r.some((u)=>zAe(u, Zd(s))));
}
function mt(e, reach) {
    let r = ze(reach);
    return Sn(r, e) || e.some((s)=>r.some((u)=>zAe(Zd(s), u)));
}
function zo(e) {
    switch(e.type){
        case "command":
            if (e.args === undefined) {
                return e.command;
            }
            return [
                e.command,
                ...e.args
            ].join(" ");
        case "http":
            return e.url;
        case "prompt":
        case "agent":
            return e.prompt;
        case "mcp_tool":
            return `${e.server}/${e.tool}`;
        case "script":
            return e.file ?? Qcr(e.script ?? "");
    }
}
function Te(hook) {
    return ei(zo(hook), {
        maxCodeUnits: 200
    });
}
async function bn(hook, reach, deps, s = {}) {
    let u = [
        ...s.sourceFile !== undefined ? [
            s.sourceFile
        ] : [],
        ...s.pluginRoot !== undefined ? [
            s.pluginRoot
        ] : []
    ];
    for (let A of u){
        let R = await deps.realpath(A).catch(()=>null);
        if (R === null || mt([
            A,
            R
        ], reach) || A === s.pluginRoot && Go([
            A,
            R
        ], reach)) {
            return {
                kind: "source_in_reach",
                notice: `"${Te(hook)}" is configured in a place the cloud session can write on this machine (${ei(A, {
                    maxCodeUnits: 200
                })}), so it is not run for the cloud session from this machine.`
            };
        }
    }
    if (hook.type !== "command") {
        return {
            kind: "not_command",
            hookType: hook.type
        };
    }
    let h = gLe(hook, {
        home: deps.home,
        projectDir: reach.projectDir,
        hookCwd: reach.projectDirReal,
        defaultShell: deps.defaultShell,
        shellPrefix: deps.shellPrefix,
        ...s.pluginRoot !== undefined && {
            pluginRoot: s.pluginRoot
        }
    });
    if (h.kind !== "script") {
        return {
            kind: "opaque",
            reason: h.reason,
            notice: `"${Te(hook)}" is not a single script this machine can pin, so it is not run for the cloud session from this machine: it would run whatever it names in the checkout, which the session may have written. Point it at one script outside the checkout (under ~/.claude, say).`
        };
    }
    let rawPath = ei(h.rawPath, {
        maxCodeUnits: 200
    });
    let { located, digest } = await Ko(h.resolvedPath, reach, deps, s.resolved);
    if (located.realPath === null || digest === null || !digest.ok) {
        return {
            kind: "unverifiable",
            rawPath,
            missing: located.realPath === null && located.missing,
            notice: `${rawPath} could not be read and pinned (missing, too large, not a regular file, more than one hard link, or it resolves to a file this machine does not read as a hook script), so its hook is not run for the cloud session from this machine.`
        };
    }
    let C = {
        pinnedTarget: {
            path: h.resolvedPath,
            realPath: located.realPath,
            sha256: digest.sha256
        },
        bytes: digest.bytes,
        rawPath,
        interpreter: h.interpreter,
        site: h.site
    };
    if (mt([
        h.resolvedPath,
        located.realPath
    ], reach)) {
        return {
            kind: "script_in_reach",
            ...C,
            notice: `"${Te(hook)}" sits where the cloud session can write on this machine (the checkout, the synced directory or a sandbox write inlet), so it is not run for the cloud session from this machine. Move the script outside the checkout (under ~/.claude, say).`
        };
    }
    return {
        kind: "script_outside_reach",
        ...C
    };
}
async function Ko(resolvedPath, reach, deps, resolved) {
    let u = resolved?.get(resolvedPath);
    if (u) {
        return u;
    }
    let h = (async ()=>{
        let located = await ous(resolvedPath, reach, deps);
        let digest = located.realPath === null ? null : await sCt(located.realPath, deps);
        return {
            located,
            digest
        };
    })();
    resolved?.set(resolvedPath, h);
    return h;
}
function Rn() {
    return {
        stickyRoots: new Set,
        pinnedScopes: new Set,
        pinnedRoots: new Map,
        syncRoots: new Set,
        reachBaseline: null,
        commonRoots: null
    };
}
function En(e) {
    let n = {
        ...Jo(e.launchDir),
        ...e.deps
    };
    let { memory } = e;
    memory.reachBaseline ??= new Map(ws.map((S)=>[
            S,
            n.scopeWriteEntries(S)
        ]));
    memory.commonRoots ??= n.commonWriteRoots();
    let { reachBaseline, commonRoots, syncRoots, stickyRoots } = memory;
    let noteSyncRoot = (S)=>{
        syncRoots.add(S);
        n.realpath(S).then((C)=>syncRoots.add(C), ()=>{});
    };
    let y = async ()=>{
        let S = n.addedDirectories().flatMap((C)=>{
            try {
                return [
                    et(C, e.launchDir)
                ];
            } catch  {
                return [];
            }
        });
        return [
            ...S,
            ...await Promise.all(S.map((C)=>n.realpath(C).catch(()=>C)))
        ];
    };
    return {
        noteSyncRoot,
        async current () {
            let S = false;
            let C = (I)=>n.realpath(I).then((H)=>{
                    if (tR(H)) {
                        return H;
                    }
                    return I;
                }, ()=>{
                    S = true;
                    return I;
                });
            let launchDirReal = await C(e.launchDir);
            let projectDirReal = await C(e.projectDir);
            let x = null;
            try {
                x = e.syncRoot();
            } catch  {
                S = true;
            }
            if (x !== null) {
                syncRoots.add(x);
                syncRoots.add(await C(x));
            }
            let sync = x === null ? undefined : {
                rootReal: await C(x),
                root: x
            };
            let G = D([
                ...e.repoRoot !== null ? [
                    e.repoRoot,
                    await C(e.repoRoot)
                ] : [],
                ...syncRoots,
                ...await y()
            ]);
            let configHomeReal = await C(e.configHome);
            await o0e({
                stickyRoots,
                pinnedScopes: memory.pinnedScopes,
                pinnedRoots: memory.pinnedRoots,
                baseRoots: [
                    ...$Ve({
                        launchDir: e.launchDir,
                        launchDirReal
                    }),
                    ...G
                ],
                reachBaseline,
                scopeSettingsFile: n.scopeSettingsFile,
                realpath: n.realpath,
                commonRoots: ()=>commonRoots,
                scopeRoots: n.scopeWriteRoots
            }).catch(()=>{
                S = true;
            });
            if (S) {
                t("cloud session reach: a base root did not resolve (or sync state could not be read); every hook is treated as in reach for this answer", {
                    level: "warn"
                });
            }
            return {
                launchDir: e.launchDir,
                launchDirReal,
                configHomeReal,
                projectDir: e.projectDir,
                projectDirReal,
                ...sync !== undefined && {
                    sync
                },
                extraReach: S ? [
                    "/"
                ] : D([
                    ...G,
                    ...stickyRoots
                ])
            };
        }
    };
}
function Jo(launchDir) {
    return {
        realpath: wet().realpath,
        commonWriteRoots: ()=>DTe(launchDir),
        scopeWriteRoots: (n, r)=>Yle(launchDir, n, r),
        scopeWriteEntries: (n)=>{
            let r = Kle(n, launchDir);
            let s = yn(n);
            if (n === "policySettings" || !s) {
                return r;
            }
            let u = xR(s, n === "flagSettings" ? ek() ?? jZ() : undefined);
            if (u.errors.some((h)=>(h.severity ?? "fatal") === "fatal")) {
                t(`cloud session reach: the ${n} settings file could not be read or parsed at attach; its write grants are unknown, so every hook counts as in the session's reach`, {
                    level: "warn"
                });
                return [
                    NL
                ];
            }
            return D([
                ...Kle(n, launchDir, u.settings),
                ...r
            ]);
        },
        scopeSettingsFile: (n)=>yn(n) ?? null,
        addedDirectories: ()=>od()
    };
}
function Xo() {
    let e = new Map;
    return {
        reachFor (n) {
            let r = e.get(n);
            if (r !== undefined) {
                return r;
            }
            let s = Rn();
            e.set(n, s);
            return s;
        }
    };
}
const Qan = new q(Xo);
const Zo = p(()=>_t({
        status: U([
            "announced",
            "withdrawn"
        ]),
        passthrough_declined: U([
            "policy",
            "pending",
            "unavailable"
        ]).optional().catch(undefined),
        worker_epoch: E().int().positive().max(Number.MAX_SAFE_INTEGER).optional().catch(undefined),
        protocol_version: E().nullable().optional().catch(undefined),
        ignored_tools: T(o()).optional().catch(undefined),
        passthrough_adopted: E().int().nonnegative().optional().catch(undefined),
        worker_capabilities: T(o()).optional().catch(undefined)
    }));
const Yo = 15000;
const Lwe = "unverified_sender";
const kt = [
    "aborted",
    "no_answer",
    "post_failed",
    "post_lost",
    "replaced",
    "unreadable_ack"
];
function Qo(error) {
    if (error instanceof rye) {
        return {
            kind: "failed",
            reason: "post_failed"
        };
    }
    if (error instanceof _M) {
        return {
            kind: "failed",
            reason: "no_answer"
        };
    }
    if (error instanceof Ye) {
        return {
            kind: "failed",
            reason: "aborted"
        };
    }
    let n = l(error);
    if (n.startsWith("Unsupported control request subtype")) {
        return {
            kind: "unsupported"
        };
    }
    if (n.startsWith("remote_tools_disabled:") || n.startsWith("invalid_announce:")) {
        return {
            kind: "refused",
            reason: n
        };
    }
    if (n.startsWith("remote_tools_not_ready:")) {
        return {
            kind: "retry",
            reason: n
        };
    }
    if (n.startsWith("stale_worker_epoch")) {
        return {
            kind: "retry",
            reason: "stale_worker_epoch"
        };
    }
    return {
        kind: "failed",
        reason: n
    };
}
async function xn(e, n, r = {}) {
    DWt();
    let s = new AbortController;
    let u;
    let h = (S)=>{
        u ??= S;
        s.abort();
    };
    let w = "none";
    let k = Date.now();
    let y = (S)=>{
        if (w !== "none") {
            let C = Date.now();
            let A = w === "waiting" ? C : w.endedAt;
            i("tengu_remote_tools_announce_waited_for_worker", {
                waited_ms: A - k,
                after_wait_ms: C - A,
                outcome: d(S.kind),
                reason: pe(kt.find((R)=>S.kind === "failed" && R === S.reason))
            });
        }
        return S;
    };
    try {
        let { posted, response } = e.postControlRequest(gt(n), {
            signal: r.signal ? AbortSignal.any([
                r.signal,
                s.signal
            ]) : s.signal,
            ...r.timeoutMs !== undefined && {
                timeoutMs: r.timeoutMs
            },
            ...r.answerExpected === false ? {
                answerExpected: false
            } : {
                awaitWorkerStart: {
                    onChange: (x)=>{
                        w = x ? "waiting" : {
                            endedAt: Date.now()
                        };
                    }
                }
            },
            background: true,
            onEchoed: (x)=>{
                if (x === "unverified") {
                    h({
                        kind: "refused",
                        reason: Lwe
                    });
                }
            }
        });
        posted.then(({ outcome })=>{
            if (outcome === "accepted") {
                return r.replaced?.then(()=>"replaced");
            }
            return "post_lost";
        }).then((x)=>{
            if (x !== undefined && w === "waiting") {
                h({
                    kind: "failed",
                    reason: x
                });
            }
        });
        let A = await response;
        let R = JN("remote_tools_announce", Zo(), A);
        if (R === null) {
            return y({
                kind: "failed",
                reason: "unreadable_ack"
            });
        }
        return y({
            kind: "announced",
            status: R.status,
            ...R.passthrough_declined !== undefined && {
                passthroughDeclined: R.passthrough_declined
            },
            workerEpoch: R.worker_epoch,
            protocolVersion: R.protocol_version,
            ignoredTools: R.ignored_tools ?? [],
            ...R.passthrough_adopted !== undefined && {
                passthroughAdopted: R.passthrough_adopted
            },
            ...R.worker_capabilities !== undefined && {
                workerCapabilities: R.worker_capabilities
            }
        });
    } catch (error) {
        return y((error instanceof Ye ? u : undefined) ?? Qo(error));
    }
}
function gt(e) {
    return {
        subtype: "remote_tools_announce",
        instance_id: e.instance_id,
        ...e.worker_epoch !== undefined && {
            worker_epoch: e.worker_epoch
        },
        host: e.host,
        tools: e.tools.map((n)=>({
                ...n,
                refused_input_fields: [
                    ...n.refused_input_fields
                ],
                protocol_versions: [
                    ...n.protocol_versions
                ]
            })),
        passthrough: [
            ...e.passthrough
        ],
        plumbing: [
            ...e.plumbing
        ]
    };
}
function er(reason) {
    return reason.slice(0, 200).replace(/[^\x20-\x7e]/g, "?");
}
const tr = 4;
const baseMs = 2000;
const In = 1048576;
function nr(body) {
    if (body.passthrough.length === 0 || _(gt(body)).length <= In) {
        return {
            body,
            trimmed: false
        };
    }
    return {
        body: {
            ...body,
            passthrough: []
        },
        trimmed: true
    };
}
function or({ passthroughAdopted, ...rest }) {
    return rest;
}
const rr = 60000;
const ir = 6;
const Mt = 3600000;
const An = 1000;
const sr = 6;
const ar = 6;
const lr = 60000;
const dr = 5000;
const Tn = 1500;
function Dn(e) {
    let n = (L)=>{
        if (e.backoffMs !== undefined) {
            return e.backoffMs[L];
        }
        if (L < tr) {
            return YR({
                baseMs,
                attempt: L,
                floorMs: baseMs * 2 ** L / 2
            });
        }
    };
    let r = e.setTimer ?? ((L, ee)=>{
        let re = setTimeout(L, ee);
        return {
            clear: ()=>clearTimeout(re)
        };
    });
    let s = false;
    let u = null;
    let h = null;
    let w = 0;
    let k = null;
    let y = null;
    let S = null;
    let C = false;
    let A;
    let R = null;
    let x = 0;
    let K = 0;
    let G = [];
    let W = false;
    let I = [];
    let H = null;
    let F = false;
    let P = [];
    let N = async (L)=>{
        if (z(L) || L === "reconnected") {
            K = 0;
        }
        if (H !== null || e.hostAsleep?.() === true) {
            h = te(h, L);
            return;
        }
        let ee = e.session();
        let re = e.build();
        if (ee === null || re === undefined || !e.workerLive()) {
            h = te(h, L);
            return;
        }
        let { body, trimmed } = nr(re);
        if (trimmed && !C) {
            C = true;
            f("remote_tools_client_announce", "passthrough_over_frame");
            t(`[remoteToolsAnnounce] the announce with this machine's ${re.passthrough.length} MCP tools is larger than the worker reads (${In} chars); announcing without them \u2014 they are not offered to this worker`, {
                level: "warn"
            });
        }
        h = null;
        M();
        let { promise, resolve } = Promise.withResolvers();
        u = {
            replace: resolve,
            reason: L
        };
        A = body;
        let j = W;
        W = false;
        if (L === "returned") {
            G.push((e.now ?? Date.now)());
        }
        let X = await xn(ee, body, {
            ...e.signal && {
                signal: e.signal
            },
            timeoutMs: Yo,
            replaced: promise
        });
        u = null;
        if (X.kind === "failed" && j) {
            W = true;
        }
        if (s) {
            return;
        }
        let le = trimmed && X.kind === "announced" ? or(X) : X;
        let de = L === "returned";
        let _e = le.kind === "failed" && le.reason === "no_answer";
        let Se = le.kind === "refused" && le.reason === Lwe;
        K = !de && (_e || Se) ? K + 1 : 0;
        let me = de && Se ? {
            kind: "failed",
            reason: Lwe
        } : _e && K > 1 ? {
            kind: "refused",
            reason: "no_answer_parked"
        } : Se && K === 1 ? {
            kind: "retry",
            reason: Lwe
        } : le;
        t(`[remoteToolsAnnounce] ${L}: ${me.kind}${"reason" in me ? ` (${er(me.reason)})` : ""}`);
        e.onOutcome?.(me, L);
        let Ae = de || L === "retry" && F;
        F = de && me.kind === "retry" && me.reason === "stale_worker_epoch";
        if (Ae && !F) {
            if (me.kind === "announced") {
                g("rtc_return_announce");
            } else if (me.kind === "failed") {
                let qe = me.reason;
                if (de && (qe === "post_failed" || qe === "post_lost")) {
                    G.pop();
                }
                f("rtc_return_announce", [
                    ...kt,
                    Lwe
                ].find((ht)=>ht === qe) ?? "other");
            } else {
                f("rtc_return_announce", me.kind);
            }
        }
        switch(me.kind){
            case "announced":
                Z();
                x = 0;
                break;
            case "refused":
            case "unsupported":
                Z();
                x = 0;
                R = me.kind === "refused" && me.reason === "no_answer_parked" ? "silence" : "refusal";
                break;
            case "retry":
                if (me.reason === "stale_worker_epoch" && ++x === 1 || me.reason === Lwe) {
                    h ??= "retry";
                } else {
                    Y();
                }
                break;
            case "failed":
                if (!de) {
                    Y();
                }
                break;
        }
        let He = h;
        if (He !== null) {
            h = null;
            if (R === null || V(He)) {
                R = null;
                Z();
                N(He);
            }
        }
    };
    let z = (L)=>L === "worker_init" || L === "tools_changed" || L === "worker_asked";
    let V = (L)=>z(L) || R === "silence" && L === "reconnected";
    let te = (L, ee)=>{
        if (L !== null && z(L) && !z(ee)) {
            return L;
        }
        return ee;
    };
    let Z = ()=>{
        w = 0;
        k?.clear();
        k = null;
    };
    let M = ()=>{
        S?.clear();
        S = null;
        y = null;
    };
    let B = (L, ms)=>{
        if (y !== null && y.ms <= ms) {
            y = {
                reason: te(y.reason, L),
                ms: y.ms
            };
            return;
        }
        let re = y?.reason ?? null;
        M();
        y = {
            reason: te(re, L),
            ms
        };
        S = r(()=>{
            let ie = y;
            S = null;
            y = null;
            if (ie !== null) {
                J.requestAnnounce(ie.reason);
            }
        }, ms);
    };
    let Y = ()=>{
        let L = k === null ? n(w) : undefined;
        if (L === undefined) {
            return;
        }
        w += 1;
        k = r(()=>{
            k = null;
            if (!s) {
                N("retry");
            }
        }, L);
    };
    let J = {
        requestAnnounce (L, ee) {
            if (s) {
                return;
            }
            if (ee?.coalesceMs !== undefined && ee.coalesceMs > 0) {
                B(L, ee.coalesceMs);
                return;
            }
            let re = y === null ? L : te(y.reason, L);
            M();
            if (V(re)) {
                R = null;
            }
            w = 0;
            if (R !== null) {
                return;
            }
            if (re === "returned" && !W) {
                let ie = (e.now ?? Date.now)();
                G = G.filter((ne)=>ne <= ie && ie - ne < Mt);
                let ae = G.at(-1);
                if (G.length >= ir || ae !== undefined && ie - ae < rr) {
                    f("rtc_return_announce", "rate_limited");
                    return;
                }
            }
            k?.clear();
            k = null;
            if (u) {
                h = te(h, re);
                if (re === "tools_changed") {
                    u.replace();
                }
                return;
            }
            N(re);
        },
        outstanding: ()=>u !== null && u.reason !== "returned" || h !== null && h !== "returned",
        workerLive () {
            if (s || u || h === null || R !== null) {
                return;
            }
            let L = h;
            h = null;
            k?.clear();
            k = null;
            N(L);
        },
        async withdraw () {
            if (s) {
                return;
            }
            s = true;
            k?.clear();
            M();
            let L = e.session();
            let ee = A === undefined ? undefined : e.build() ?? A;
            if (L === null || ee === undefined || !e.workerLive()) {
                return;
            }
            await xn(L, {
                ...ee,
                tools: [],
                passthrough: [],
                plumbing: []
            }, {
                signal: AbortSignal.timeout(Tn),
                timeoutMs: Tn,
                answerExpected: false
            });
        },
        sayAsleep (L) {
            let ee = e.session();
            if (s || ee === null || A === undefined || !e.workerLive()) {
                return null;
            }
            let re = (e.now ?? Date.now)();
            I = I.filter((se)=>se <= re && re - se < Mt);
            if (W || I.length >= sr) {
                f("rtc_sleep_notice", W ? "already_said" : "rate_limited");
                return null;
            }
            W = true;
            I.push(re);
            let { posted, response } = ee.postControlRequest(gt({
                ...A,
                worker_epoch: L,
                host: {
                    ...A.host,
                    capabilities: [
                        ...A.host.capabilities ?? [],
                        oLn
                    ]
                }
            }), {
                timeoutMs: An,
                answerExpected: false,
                background: true
            });
            response.catch(()=>{});
            let ne = Ge(posted.then(({ outcome })=>{
                if (outcome === "accepted") {
                    g("rtc_sleep_notice");
                    return true;
                }
                f("rtc_sleep_notice", "post_failed");
                W = false;
                I.pop();
                return false;
            }), An, (se, j)=>r(se, j).clear).then((se)=>{
                H = null;
                J.workerLive();
                return se !== false;
            });
            H = ne;
            return ne;
        },
        sayStillHere (L) {
            let ee = e.session();
            if (s || ee === null || A === undefined || W || H !== null || e.hostAsleep?.() === true || !e.workerLive()) {
                return false;
            }
            let re = (e.now ?? Date.now)();
            P = P.filter((se)=>se <= re && re - se < Mt);
            let ie = P.at(-1);
            if (P.length >= ar || ie !== undefined && re - ie < lr) {
                return false;
            }
            P.push(re);
            let { posted, response } = ee.postControlRequest(gt({
                ...A,
                passthrough: [],
                worker_epoch: L,
                host: {
                    ...A.host,
                    capabilities: [
                        iLn,
                        ...A.host.capabilities ?? []
                    ]
                }
            }), {
                timeoutMs: dr,
                answerExpected: false,
                background: true
            });
            response.catch(()=>{});
            posted.then((se)=>{
                if (se.outcome === "accepted") {
                    g("rtc_still_here");
                    return;
                }
                if (!(se.outcome === "failed" && (se.cause === "network" || se.cause === "timeout"))) {
                    P = P.filter((X)=>X !== re);
                }
                if (se.outcome !== "failed" || se.cause !== "closed") {
                    f("rtc_still_here", "post_failed");
                }
            });
            return true;
        },
        dispose () {
            s = true;
            k?.clear();
            k = null;
            M();
        }
    };
    return J;
}
function Pn({ serving, manager, observer }) {
    let s = new Map;
    return {
        onServedChannelRequest: (u)=>{
            let h = new AbortController;
            s.set(u.requestId, h);
            let w = {
                ...u,
                signal: AbortSignal.any([
                    u.signal,
                    h.signal
                ])
            };
            cr(w, serving, manager, observer).catch((k)=>{
                logError(k);
                manager()?.releaseServedChannelRequest(u.requestId);
            }).finally(()=>s.delete(u.requestId));
        },
        onServedChannelRequestCancelled: ()=>{},
        onControlRequestRefused: (u)=>serving()?.noteUnlistedKind?.(u),
        abandonInHand: ()=>{
            for (let [u, h] of s){
                h.abort();
                manager()?.releaseServedChannelRequest(u);
            }
            s.clear();
        }
    };
}
async function cr(e, serving, manager, observer) {
    let u = (R)=>{
        t(`[servedChannel] ${e.subtype} ${Gw(e.requestId)} not answered here: ${R}`);
        manager()?.releaseServedChannelRequest(e.requestId);
    };
    let h = serving();
    if (h === null) {
        return u("nothing serving");
    }
    let w = performance.now();
    let leg = e.subtype === "remote_tool_call" ? Cms(e.request) : undefined;
    let y = leg?.request.ok === true && leg.instance_id === h.instanceId ? {
        callId: leg.request.value.call_id,
        leg: leg.request.kind === "outcome_query" ? "outcome_of" : leg.request.value.approval === undefined ? 1 : 2,
        approval: leg.request.kind === "outcome_query" ? "none" : leg.request.value.approval?.decision ?? "none"
    } : undefined;
    Lt(()=>{
        if (y !== undefined) {
            oc(y.callId, "leg received", {
                leg: y.leg,
                age_ms: e.ageMs === undefined ? undefined : Math.round(e.ageMs)
            }, fjt(y.leg));
        }
    });
    let S = observer !== undefined && leg !== undefined && leg.instance_id === h.instanceId ? {
        observer,
        leg
    } : undefined;
    Lt(()=>S?.observer.legStarted(S.leg, e.ageMs));
    let C;
    try {
        C = await fr(e, h, leg);
    } finally{
        Lt(()=>S?.observer.legAnswered(S.leg, C?.result));
    }
    if (C === undefined) {
        return u("not this client's to answer");
    }
    if (e.signal.aborted) {
        return;
    }
    let A = Math.round(performance.now() - w);
    if (manager()?.respondToServedChannelRequest(e.requestId, C, y === undefined ? undefined : (R, x)=>ur(y, A, R, x)) !== true) {
        t(`[servedChannel] ${e.subtype} ${Gw(e.requestId)} answered after it was withdrawn \u2014 result dropped`);
    }
}
function ur(e, serve_ms, r, reply_ms) {
    let u = r.outcome === "accepted" ? r.signMs : undefined;
    let h = r.outcome === "accepted" ? r.postMs : undefined;
    oc(e.callId, "reply posted", {
        leg: e.leg,
        serve_ms,
        reply_ms,
        sign_ms: u,
        post_ms: h,
        post_outcome: r.outcome
    }, fjt(e.leg));
    if (e.leg === "outcome_of") {
        return;
    }
    i("tengu_remote_tool_serve", {
        op: b("reply"),
        call_id: ye(e.callId),
        transport: b("session"),
        second_leg: e.leg === 2,
        approval_decision: d(e.approval),
        serve_ms,
        reply_ms,
        reply_sign_ms: u,
        reply_post_ms: h,
        reply_accepted: r.outcome === "accepted"
    });
}
function Lt(e) {
    try {
        e();
    } catch (error) {
        logError(error);
    }
}
async function fr(e, n, leg) {
    let s = {
        signal: e.signal,
        requestId: e.requestId,
        ageMs: e.ageMs,
        workerEpoch: e.workerEpoch,
        attestationStatus: e.attestationStatus,
        modeStamp: e.modeStamp
    };
    switch(e.subtype){
        case "remote_tool_call":
            if (leg === undefined) {
                return undefined;
            }
            return n.serveSessionToolCall(leg, s);
        case "remote_plumbing_call":
            {
                let u = xms(e.request);
                if (u === undefined) {
                    return undefined;
                }
                return n.servePlumbingCall(u, s);
            }
        case "remote_tools_probe":
            if (e.request.instance_id === n.instanceId) {
                return n.answerProbe();
            }
            return undefined;
        case "remote_tools_reannounce":
            return;
    }
}
const Ft = (e)=>e.tools.length + e.plumbing.length + (e.passthrough?.length ?? 0) === 0;
const pr = 10000;
const mr = new Set([
    ...kt,
    "invalid_announce",
    "no_answer_parked",
    "remote_tools_disabled",
    "remote_tools_not_ready",
    "stale_worker_epoch",
    Lwe
]);
function gr(reason) {
    let n = /^[a-z_]+(?=:|$)/.exec(reason)?.[0];
    if (n !== undefined && mr.has(n)) {
        return n;
    }
    return "other";
}
function kr(e) {
    if (e.kind === "failed" && e.reason === "replaced") {
        return;
    }
    if (e.kind === "announced") {
        g("remote_tools_client_announce");
        return;
    }
    f("remote_tools_client_announce", e.kind === "unsupported" ? "unsupported" : `${e.kind}_${gr(e.reason)}`);
}
function wLt(e) {
    let instanceId = `cc-${randomUUID()}`;
    let r = null;
    let s = false;
    let u = null;
    let h = null;
    let w = ()=>{};
    let kept;
    let y;
    let S;
    let C;
    let A;
    let R;
    let x;
    let K;
    let G = false;
    let W = false;
    let I = false;
    let H = false;
    let F = false;
    let P = false;
    let N;
    let z = new Map;
    let V = Dn({
        hostAsleep: ()=>P,
        session: e.manager,
        workerLive: ()=>e.manager()?.workerLive() ?? false,
        build: ()=>{
            let j = r?.servedTools?.();
            if (j === undefined) {
                return;
            }
            W = Ft(j);
            R = kept ?? A;
            return e.buildAnnounce(j, instanceId, kept);
        },
        onOutcome: (j, X)=>{
            let le = R;
            A = undefined;
            let de = X === "returned" && j.kind === "failed";
            if (j.kind === "announced") {
                if (j.workerEpoch !== undefined) {
                    x = Math.max(x ?? 0, j.workerEpoch);
                }
                if (j.workerEpoch !== undefined && (kept === undefined || j.workerEpoch >= kept)) {
                    kept = j.workerEpoch;
                } else if (j.workerEpoch !== kept) {
                    oc(undefined, "epoch ratchet ignored", {
                        heard: j.workerEpoch,
                        kept
                    });
                }
                y = j.passthroughDeclined === "pending" ? undefined : j.workerEpoch;
                S = undefined;
                C = undefined;
                G = false;
                I = W;
                H = j.workerCapabilities?.includes(aLn) === true;
            } else if (!de) {
                y = undefined;
                G = j.kind === "failed" || j.kind === "retry" || j.kind === "refused" && j.reason === "no_answer_parked";
                if (j.kind === "refused" && j.reason === "no_answer_parked") {
                    C = le;
                } else if (j.kind === "refused" || j.kind === "unsupported") {
                    S = le;
                    if (j.kind === "refused" && j.reason === Lwe && !F) {
                        F = true;
                        e.onNotice?.("announce_unverified", Ni.announce_unverified(fbe()));
                    }
                } else if (j.kind === "retry" && j.reason === "stale_worker_epoch") {
                    kept = undefined;
                    x = undefined;
                }
            }
            if (X !== "returned" || !de && j.kind !== "announced") {
                kr(j);
            }
            e.onAnnounceOutcome?.(j, X);
        },
        ...e.signal && {
            signal: e.signal
        },
        ...e.announcer
    });
    let te = (j)=>{
        if (s) {
            j.dispose();
            return;
        }
        r = j;
        Z();
        w = j.onServedToolsChanged?.((X)=>{
            Z();
            requestAnnounce("tools_changed", {
                coalesceMs: X === undefined || X === "adopted" || X === "redescribed" ? 0 : wun[X]
            });
        }) ?? w;
        if (u !== null) {
            let { reason, opts } = u;
            u = null;
            requestAnnounce(reason, opts);
        }
    };
    let Z = ()=>{
        if (s) {
            return;
        }
        let j = r?.servedTools?.();
        e.manager()?.markServing(j !== undefined && !Ft(j));
    };
    let requestAnnounce = (j, X)=>{
        if (r === null) {
            u = {
                reason: j,
                ...X && {
                    opts: X
                }
            };
            return;
        }
        if (j === "attached") {
            Z();
        }
        if (j === "worker_asked") {
            y = undefined;
            S = undefined;
            C = undefined;
            A = undefined;
            V.requestAnnounce("worker_asked");
            return;
        }
        if (j === "returned") {
            if (y === undefined || I) {
                requestAnnounce("reconnected");
                return;
            }
            V.requestAnnounce("returned");
            return;
        }
        if (j === "reconnected" && y !== undefined || j === "attached" && (y !== undefined || A !== undefined)) {
            t(`[servedChannel] ${j}: nothing to announce \u2014 worker epoch ${y ?? A} already has (or is being told) this machine's tools`);
            return;
        }
        if (j === "worker_init" && X?.workerEpoch !== undefined && (X.workerEpoch === y || X.workerEpoch === S || X.workerEpoch === C || X.workerEpoch === A || kept !== undefined && X.workerEpoch < kept)) {
            return;
        }
        y = undefined;
        if (j === "reconnected") {
            C = undefined;
        }
        if (j === "worker_init") {
            if (X?.workerEpoch !== undefined) {
                x = Math.max(x ?? 0, X.workerEpoch);
            }
            A = X?.workerEpoch;
            let le = X?.workerEpoch === undefined || kept === undefined || X.workerEpoch === kept;
            if (X?.workerEpoch !== undefined) {
                kept = X.workerEpoch;
            }
            if (le && V.outstanding()) {
                return;
            }
        } else if (j === "tools_changed") {
            S = undefined;
            C = undefined;
        }
        V.requestAnnounce(j, {
            ...X?.coalesceMs !== undefined && {
                coalesceMs: X.coalesceMs
            }
        });
    };
    let B = (j)=>{
        e.manager()?.releaseServedChannelRequest(j.requestId);
        let X = j1n().safeParse(j.request);
        let le = Date.now();
        let de = !X.success || j.ageMs === undefined || j.ageMs > X.data.deadline_ms || Ije(NIe(j.attestationStatus)) || x !== undefined && X.data.worker_epoch < x || K?.epoch === X.data.worker_epoch && !G || K !== undefined && le - K.at < pr || V.outstanding();
        if (!X.success || de) {
            t("[servedChannel] remote_tools_reannounce not honoured: unreadable, undated, past its wait, from a sender held back, from an older worker, already answered, rate limited, or an announce is already out");
            return;
        }
        K = {
            epoch: X.data.worker_epoch,
            at: le
        };
        G = false;
        requestAnnounce("worker_asked");
    };
    let Y = e.createServingContext({
        sessionId: e.sessionId,
        instanceId,
        ...e.onNotice && {
            onNotice: e.onNotice
        }
    });
    let J = Y instanceof Promise ? Y.then(te).catch((j)=>{
        logError(j);
    }) : Promise.resolve(te(Y));
    let L = ()=>{};
    let close = ()=>{
        h ??= (async ()=>{
            s = true;
            L();
            for (let de of z.keys()){
                e.manager()?.releaseServedChannelRequest(de);
            }
            z.clear();
            let j = r?.servedTools?.();
            let X = j === undefined || Ft(j);
            let le = I && W && X ? Promise.resolve(V.dispose()) : V.withdraw();
            e.manager()?.markServing(false);
            await J;
            w();
            await le;
            r?.dispose();
            V.dispose();
        })();
        return h;
    };
    let { abandonInHand, onServedChannelRequest, ...rest } = Pn({
        serving: ()=>{
            if (s) {
                return null;
            }
            return r;
        },
        manager: e.manager,
        observer: e.onServedCall
    });
    let ne = (j)=>{
        if (j.subtype === "remote_tools_reannounce") {
            return B(j);
        }
        return onServedChannelRequest?.(j);
    };
    let se = {
        instanceId,
        callbacks: {
            ...rest,
            onServedChannelRequest: (j)=>{
                let request = j.subtype === "remote_tools_reannounce" ? j : {
                    ...j,
                    workerEpoch: j.workerEpoch ?? kept
                };
                if (request.subtype === "remote_tools_probe" && (P || N !== undefined && request.ageMs !== undefined && Date.now() - request.ageMs < N)) {
                    t(`[servedChannel] remote_tools_probe ${Gw(request.requestId)} not answered: the host ${P ? "says this computer sleeps" : "had not yet said it woke when it was stored"}`);
                    e.manager()?.releaseServedChannelRequest(request.requestId);
                } else if (P && !s) {
                    t(`[servedChannel] ${request.subtype} ${Gw(request.requestId)} held until the host says this computer woke`);
                    z.set(request.requestId, {
                        request,
                        at: Date.now()
                    });
                } else {
                    ne(request);
                }
            },
            onWorkerLive: ()=>V.workerLive(),
            onWorkerGone: ()=>{
                y = undefined;
                r?.workerGone?.();
            }
        },
        requestAnnounce,
        sayAsleep: ()=>{
            P = true;
            if (s || y === undefined || I) {
                return null;
            }
            return V.sayAsleep(y);
        },
        sayStillHere: ()=>!s && !P && y !== undefined && !I && H && V.sayStillHere(y),
        hostWoke: (j)=>{
            if (!P) {
                return;
            }
            P = false;
            let X = Date.now();
            N = X;
            if (!j) {
                V.workerLive();
            }
            let le = [
                ...z.values()
            ];
            z.clear();
            for (let { request, at } of le){
                if (request.signal.aborted) {
                    continue;
                }
                try {
                    ne({
                        ...request,
                        ageMs: request.ageMs === undefined ? undefined : request.ageMs + (X - at)
                    });
                } catch (error) {
                    logError(error);
                    e.manager()?.releaseServedChannelRequest(request.requestId);
                }
            }
        },
        heldServedCall: (j)=>{
            if (s || r === null) {
                return TG;
            }
            return r.heldServedCall?.(j) ?? TG;
        },
        servedHost: ()=>{
            if (s) {
                return undefined;
            }
            return r?.servedTools?.()?.host;
        },
        close
    };
    L = e.onRevoked?.((j)=>{
        t(`[servedChannel] serving revoked on this machine (${j}) \u2014 closing the channel`);
        abandonInHand();
        e.manager()?.giveUpKeptServedResults();
        close();
    }) ?? L;
    if (s) {
        L();
    }
    return se;
}
const Hn = {
    execCommand: xXr,
    execHttp: rCn
};
const projectRoot = `${get}/project-folder-not-given-to-this-hook`;
const vr = [
    [
        "safe.bareRepository",
        "explicit"
    ],
    [
        "core.hooksPath",
        "/dev/null"
    ],
    [
        "core.fsmonitor",
        "false"
    ],
    [
        "protocol.ext.allow",
        "never"
    ],
    [
        "submodule.recurse",
        "false"
    ],
    [
        "diff.ignoreSubmodules",
        "all"
    ],
    [
        "status.submoduleSummary",
        "false"
    ],
    [
        "fetch.recurseSubmodules",
        "false"
    ],
    [
        "push.recurseSubmodules",
        "no"
    ]
];
function Wt(e) {
    if (e.omit.includes("CLAUDE_CODE_SHELL_PREFIX")) {
        return;
    }
    let n = e.base.CLAUDE_CODE_SHELL_PREFIX?.trim() || undefined;
    if (n !== undefined && n.startsWith("/")) {
        return n;
    }
}
async function Nn({ hook, event, input, timeoutMs, env, startDirectory }, w, k, y) {
    if (y.aborted) {
        if (hook.type === "http") {
            return {
                kind: "http",
                ok: false,
                body: "",
                aborted: true
            };
        }
        return {
            kind: "command",
            stdout: "",
            stderr: "",
            status: 1,
            aborted: true
        };
    }
    let jsonInput = _(input);
    if (hook.type === "http") {
        try {
            return {
                kind: "http",
                ...await k.execHttp({
                    ...hook,
                    timeout: undefined
                }, event, jsonInput, y, timeoutMs, swt(env))
            };
        } catch (error) {
            return {
                kind: "http",
                ok: false,
                body: "",
                error: error instanceof Error ? error.message : String(error)
            };
        }
    }
    let { signal, cleanup } = zs(y, {
        timeoutMs
    });
    try {
        return {
            kind: "command",
            ...await k.execCommand({
                hook: {
                    ...hook,
                    timeout: Math.ceil(timeoutMs / 1000) + 30
                },
                hookEvent: event,
                jsonInput,
                envContext: K3(input),
                project: startDirectory === undefined ? {
                    originalCwd: w.launchDir,
                    projectRoot: w.projectRoot
                } : {
                    originalCwd: startDirectory,
                    projectRoot
                },
                cwd: startDirectory ?? input.cwd,
                startsOutsideProject: startDirectory !== undefined,
                signal,
                envBase: env.base,
                envOmit: env.omit,
                shellPrefix: Wt(env),
                envExtra: {
                    ...env.extra,
                    CLAUDE_CODE_CLOUD_SESSION_ID: w.cloudSessionId,
                    ...B1(undefined, vr),
                    ...startDirectory !== undefined && {
                        GIT_CEILING_DIRECTORIES: dirname(startDirectory)
                    }
                }
            })
        };
    } catch (error) {
        return {
            kind: "command",
            stdout: "",
            stderr: error instanceof Error ? error.message : String(error),
            status: 1,
            spawnFailed: true
        };
    } finally{
        cleanup();
    }
}
function Ie(e, n) {
    return ei(e, {
        maxCodeUnits: 400
    }) || n;
}
function Fe(event, n, r = {}) {
    let s = "async" in r ? {} : r;
    if (event !== "PreToolUse") {
        return {
            ...s,
            decision: "block",
            reason: n
        };
    }
    let u = "hookSpecificOutput" in s ? s.hookSpecificOutput : undefined;
    let h = u?.hookEventName === "PreToolUse" ? u.additionalContext : undefined;
    return {
        ...s,
        hookSpecificOutput: {
            hookEventName: "PreToolUse",
            permissionDecision: "deny",
            permissionDecisionReason: n,
            ...h !== undefined && {
                additionalContext: h
            }
        }
    };
}
function Mn(e, n) {
    let r = yr(e, n);
    if (r.answer === null) {
        return r;
    }
    let { answer } = Vle(r.answer, n.event);
    if (r.exitClass === "2" && r.blocked && !Fkt(answer) && e.kind === "command") {
        let u = Fe(n.event, `[${n.label}]: ${e.stderr || "No stderr output"}`, answer);
        return {
            ...r,
            answer: Vle(u, n.event).answer,
            exitClass: "2",
            blocked: true
        };
    }
    return {
        ...r,
        answer,
        blocked: xy(answer)
    };
}
function yr(e, { event, label, timedOut, timeoutMs, timeoutFailsClosed = false }) {
    if (e.aborted && !timedOut) {
        return {
            answer: null,
            exitClass: "cancelled",
            blocked: false
        };
    }
    if (e.aborted) {
        let x = Math.round(timeoutMs / 1000);
        let K = `[${label}]: timed out after ${x}s on the attached machine`;
        if (timeoutFailsClosed && (event === "PreToolUse" || event === "UserPromptSubmit" || event === "UserPromptExpansion")) {
            return {
                answer: Fe(event, K, bet(event, K) ?? {}),
                exitClass: "timeout",
                blocked: true
            };
        }
        return {
            answer: {},
            exitClass: "timeout",
            localWarning: `[${label}]: timed out after ${x}s \u2014 output discarded; raise the hook's "timeout" to allow more time`,
            blocked: false
        };
    }
    if (e.kind === "http") {
        if (e.error !== undefined || !e.ok) {
            let G = Ie(e.error ?? `HTTP ${e.statusCode ?? "request failed"}`, "request failed");
            let W = e.error !== undefined ? "the request to it could not be made from this machine" : `it answered HTTP ${e.statusCode ?? "with an error"}`;
            let I = On(event, `[${label}]: not run \u2014 ${W}; retry`);
            return {
                answer: I,
                exitClass: "other",
                localWarning: `[${label}]: ${G}`,
                blocked: xy(I)
            };
        }
        let { json: json_1, validationError: validationError_1 } = cCn(e.body);
        if (validationError_1 !== undefined || json_1 === undefined) {
            return {
                answer: {},
                exitClass: "other",
                localWarning: `[${label}]: ${Ie(validationError_1 ?? "", "no JSON in the response")}`,
                blocked: false
            };
        }
        return {
            answer: json_1,
            exitClass: "0",
            blocked: xy(json_1)
        };
    }
    if (e.spawnFailed) {
        let x = On(event, `[${label}]: not run \u2014 it could not be started on this machine; retry`);
        return {
            answer: x,
            exitClass: "spawn_failed",
            localWarning: `[${label}]: ${Ie(e.stderr, "failed to start")}`,
            blocked: xy(x)
        };
    }
    let w = e.status === 2 && dCn({
        hookEvent: event,
        stdout: e.stdout,
        stderr: e.stderr,
        stdioIncomplete: e.stdioIncomplete,
        stdioClosedWithoutEnd: e.stdioClosedWithoutEnd
    });
    if (e.status === 2 && (e.stdioIncomplete === true || e.stdioClosedWithoutEnd === true)) {
        let x = bet(event, `[${label}]: ${e.stderr || "No stderr output"}`);
        if (x !== undefined) {
            return {
                answer: x,
                exitClass: "2",
                blocked: true
            };
        }
    }
    let k = event !== "Stop" && event !== "SubagentStop" && event !== "StopFailure";
    if (Pir(e.stdout)) {
        if (e.status === 2 && !w && k) {
            return {
                answer: Fe(event, `[${label}]: ${e.stderr || "No stderr output"}`),
                exitClass: "2",
                blocked: true
            };
        }
        if (e.status === 0) {
            return {
                answer: {},
                exitClass: "0",
                blocked: false
            };
        }
        return {
            answer: {},
            exitClass: e.status === 2 ? "2" : "other",
            localWarning: `[${label}]: announced async, then failed with status code ${e.status}: ${Ie(e.stderr, "No stderr output")}`,
            blocked: false
        };
    }
    let { json, plainText, validationError } = RJ(e.stdout);
    let A = AVt(e, event, json);
    let R = lwt(e, event, e.stdout, A, (x)=>RJ(x).json);
    if (R !== undefined) {
        let x = `[${label}]: output incomplete \u2014 its stdio was cut before end-of-stream on this machine; retry`;
        let K = qge.has(event) ? Fe(event, x, bet(event, x) ?? {}) : {};
        return {
            answer: K,
            exitClass: "0",
            localWarning: `[${label}]: ${Ie(R, "stdio incomplete")}`,
            blocked: xy(K)
        };
    }
    if (validationError !== undefined && e.status !== 2) {
        return {
            answer: {},
            exitClass: e.status === 0 ? "0" : "other",
            localWarning: `[${label}]: ${Ie(Utt(validationError, e.status, e.stderr), "hook JSON output failed validation")}`,
            blocked: false
        };
    }
    if (A !== undefined) {
        if ("async" in A) {
            if (e.status === 2 && !w && k) {
                return {
                    answer: Fe(event, `[${label}]: ${e.stderr || "No stderr output"}`),
                    exitClass: "2",
                    blocked: true
                };
            }
            if (e.status === 0) {
                return {
                    answer: {},
                    exitClass: "0",
                    blocked: false
                };
            }
            return {
                answer: {},
                exitClass: e.status === 2 ? "2" : "other",
                localWarning: `[${label}]: announced async, then failed with status code ${e.status}: ${Ie(e.stderr, "No stderr output")}`,
                blocked: false
            };
        }
        let x = A;
        if (e.status === 2 && !Fkt(x)) {
            return {
                answer: Fe(event, `[${label}]: ${e.stderr || "No stderr output"}`, x),
                exitClass: "2",
                blocked: true
            };
        }
        return {
            answer: x,
            exitClass: e.status === 0 ? "0" : e.status === 2 ? "2" : "other",
            blocked: xy(x)
        };
    }
    if (e.status === 0) {
        let x = (plainText ?? "").trim();
        if ((event === "UserPromptSubmit" || event === "UserPromptExpansion") && x !== "") {
            return {
                answer: {
                    hookSpecificOutput: {
                        hookEventName: event,
                        additionalContext: x
                    }
                },
                exitClass: "0",
                blocked: false
            };
        }
        return {
            answer: {},
            exitClass: "0",
            blocked: false
        };
    }
    if (e.status === 2) {
        if (w) {
            return {
                answer: {},
                exitClass: "2",
                localWarning: `[${label}]: the hook script appears to be missing (${Ie(e.stderr, "no such file")})`,
                blocked: false
            };
        }
        return {
            answer: Fe(event, `[${label}]: ${e.stderr || "No stderr output"}`),
            exitClass: "2",
            blocked: true
        };
    }
    return {
        answer: {},
        exitClass: "other",
        localWarning: `[${label}]: failed with non-blocking status code ${e.status}: ${Ie(e.stderr, "No stderr output")}`,
        blocked: false
    };
}
function On(event, permissionDecisionReason) {
    if (event === "PreToolUse") {
        return {
            hookSpecificOutput: {
                hookEventName: "PreToolUse",
                permissionDecision: "deny",
                permissionDecisionReason
            }
        };
    }
    return {};
}
const Sr = {
    isAnsweredOn: ()=>Pje(),
    isAnsweredOff: ()=>LIe({
            cloudClient: true
        }) !== undefined
};
function Ln(e = Sr) {
    let n = false;
    return ()=>{
        if (e.isAnsweredOff()) {
            return "answered_off";
        }
        n ||= e.isAnsweredOn();
        if (n) {
            return "answered_on";
        }
        return "unanswered";
    };
}
const Er = 30000;
const xr = 8;
const Bt = 64;
const Cr = 1048576;
const Ut = 2000;
const Wn = 1000;
const Ar = 256;
const dt = 256;
const Tr = 64;
const Ir = 8;
const Un = 256;
const devNull_1 = devNull;
const Pr = 'started in an empty folder · mark it "cloud": "device" if it needs the project';
const Xn = /^[A-Za-z0-9_.:-]{1,128}$/;
const Or = /^[a-z]{1,16}$/;
const $r = "Not running your hooks for the cloud session: the service could not vouch for the sender of its hook requests under your organization's trusted-device policy. The session goes on without them.";
function Hr(e) {
    return e.deadlineMs !== undefined && (e.ageMs === undefined || e.ageMs > e.deadlineMs + Er);
}
function Re(requestId) {
    if (Xn.test(requestId)) {
        return requestId;
    }
    return ei(requestId, {
        maxCodeUnits: 64
    });
}
function he(e, n, r) {
    if (e === "PreToolUse") {
        return {
            hookSpecificOutput: {
                hookEventName: "PreToolUse",
                permissionDecision: "deny",
                permissionDecisionReason: `[${n}]: ${r}`
            }
        };
    }
    return {};
}
function jn(hook, n, r) {
    if (n.rawPath === r) {
        return hook;
    }
    return ZEn(hook, n.site, r);
}
function qn(e, roots) {
    if (typeof e !== "string" || roots === null || !e.startsWith("/")) {
        return false;
    }
    if (e.trim() !== e || /^\/(?:proc|dev|net|network)(?:\/|$)/i.test(e)) {
        return false;
    }
    if (e.split("/").slice(1).some((s)=>s === "" || s === "." || s === "..")) {
        return false;
    }
    return !S8t(e, Zln(roots.containerProjectDir));
}
const h0o_1 = h0o;
function Nr(e, n) {
    if (h0o_1(e)) {
        return true;
    }
    let r = cNt(e);
    let s = r[0] === "tool_calls" ? 2 : 0;
    if (r[s] !== "tool_response") {
        return false;
    }
    let u = r.slice(0, s + 1).reduce((acc, item)=>{
        if (xe(acc)) {
            return acc[item];
        }
    }, n);
    for (let h of r.slice(s + 1)){
        if (Array.isArray(u)) {
            return false;
        }
        u = xe(u) ? u[h] : undefined;
    }
    return true;
}
function Mr(pointer, data, r) {
    let s = cNt(pointer);
    let u = s[0] === "tool_calls";
    let h = u ? s.slice(2) : s;
    if (h[0] === "tool_response") {
        return true;
    }
    if (h[0] !== "tool_input" || h.length !== 2 || !xe(data)) {
        return false;
    }
    let n_tool_calls = data.tool_calls;
    let k = u ? xe(n_tool_calls) ? n_tool_calls[s[1] ?? ""] : undefined : data;
    let y = xe(k) ? k.tool_name : undefined;
    let S = typeof y === "string" ? ecn(y, r) : undefined;
    return S !== undefined && h[1] === S;
}
const Lr = /^[A-Za-z][A-Za-z0-9_-]{0,40}$/;
const wt = Symbol("deviceHooks.disconnect");
const Bn = Symbol("deviceHooks.deadline");
function Fr(data) {
    let n = [
        data.session_id,
        data.agent_id,
        data.prompt_id
    ];
    if ("tool_use_id" in data && typeof data.tool_use_id === "string") {
        n.push(data.tool_use_id);
    }
    return n.every((r)=>r === undefined || Xn.test(r) && !r.includes("..")) && (data.permission_mode === undefined || Lr.test(data.permission_mode)) && (data.effort === undefined || Or.test(data.effort.level)) && (data.agent_type === undefined || ei(data.agent_type, {
        maxCodeUnits: 64
    }) === data.agent_type);
}
function Zn(hook, n) {
    if (hook.type === "http") {
        try {
            return new URL(hook.url).host || "http hook";
        } catch  {
            return "http hook";
        }
    }
    let r = n?.kind === "script" ? basename(n.rawPath) : basename(hook.command.trim().split(/\s+/)[0] ?? "");
    return ei(r, {
        maxCodeUnits: 64
    }) || "hook";
}
function Yn(hook, n, r) {
    if (r.wireLabel === "basename") {
        return n;
    }
    if (hook.type === "http") {
        try {
            return ei(new URL(hook.url).origin, {
                maxCodeUnits: 200
            });
        } catch  {
            return n;
        }
    }
    return ei(hook.command, {
        maxCodeUnits: 200
    });
}
function Wr(e, n) {
    let r = {
        ...e,
        transcript_path: n
    };
    if ("agent_transcript_path" in r) {
        return {
            ...r,
            agent_transcript_path: n
        };
    }
    return r;
}
function xe(e) {
    return typeof e === "object" && e !== null;
}
function qt(e, n) {
    return cNt(n).reduce((acc, item)=>{
        if (xe(acc)) {
            return acc[item];
        }
    }, e);
}
function Ur(e, n) {
    let r = [];
    let s = (w, k, y, S)=>{
        if (r.length > dt || S > Ir) {
            return;
        }
        if (typeof k === "string") {
            if (y && k !== "" && !isAbsolute(k)) {
                r.push(w);
            }
            return;
        }
        if (Array.isArray(k)) {
            k.forEach((C, A)=>s(`${w}/${A}`, C, y, S + 1));
            return;
        }
        if (xe(k)) {
            let C = Object.keys(k).some(I1e);
            for (let [A, R] of Object.entries(k)){
                s(`${w}/${lNt(A)}`, R, y && !C || I1e(A), S + 1);
            }
        }
    };
    let u = (w, k, tool_input)=>{
        if (!xe(tool_input)) {
            return;
        }
        let S = typeof k === "string" ? ecn(k, n) : undefined;
        for (let [C, A] of Object.entries(tool_input)){
            s(`${w}/tool_input/${lNt(C)}`, A, C === S || I1e(C), 1);
        }
    };
    let h = (w, tool_response)=>{
        if (!xe(tool_response) || Array.isArray(tool_response)) {
            return;
        }
        let y = (S, C, A)=>{
            if ((h0o_1(S) || y0o(S) || I1e(C)) && typeof A === "string" && A !== "" && !isAbsolute(A) && A.length <= 4096 && !/\p{Cc}/u.test(A)) {
                r.push(S);
            }
        };
        for (let [S, C] of Object.entries(tool_response)){
            let A = `${w}/tool_response/${lNt(S)}`;
            y(A, S, C);
            if (xe(C) && !Array.isArray(C)) {
                for (let [R, x] of Object.entries(C)){
                    y(`${A}/${lNt(R)}`, R, x);
                }
            }
        }
    };
    if ("tool_input" in e) {
        u("", "tool_name" in e ? e.tool_name : undefined, e.tool_input);
    }
    if ("tool_response" in e) {
        h("", e.tool_response);
    }
    if ("tool_calls" in e && Array.isArray(e.tool_calls)) {
        e.tool_calls.forEach((w, k)=>{
            if (xe(w)) {
                u(`/tool_calls/${k}`, w.tool_name, w.tool_input);
                if ("tool_response" in w) {
                    h(`/tool_calls/${k}`, w.tool_response);
                }
            }
        });
    }
    return r;
}
async function vt(e, pin) {
    let r = e;
    let s = [];
    while(true){
        if (s.length > Tr) {
            return null;
        }
        try {
            let u = await pin.realpath(r);
            if (s.length === 0) {
                return u;
            }
            return resolve(u, ...s);
        } catch (error) {
            if (v(error) !== "ENOENT") {
                return null;
            }
            let h = await pin.lstat(r).then((k)=>k.isSymbolicLink()).catch(()=>false);
            let w = dirname(r);
            if (h || w === r) {
                return null;
            }
            s.unshift(basename(r));
            r = w;
        }
    }
}
async function Vn(e, n, r, pin) {
    let u = (w)=>w !== null && (kW(w, r.real) || kW(w, r.dir));
    return (await Promise.all(e.map(async (w)=>{
        let k = qt(n, w);
        if (typeof k !== "string" || k === "") {
            return null;
        }
        let y = isAbsolute(k) ? k : resolve(n.cwd, k);
        if (u(await vt(y, pin))) {
            return null;
        }
        return w;
    }))).filter((w)=>w !== null);
}
function jr(e) {
    let n = 0;
    let r = [];
    let s = ()=>{
        n -= 1;
        let u = r.shift();
        if (u !== undefined) {
            n += 1;
            u.grant();
        }
    };
    return {
        acquire (u, h) {
            if (h.aborted) {
                return Promise.resolve(null);
            }
            if (n < xr) {
                n += 1;
                return Promise.resolve(Gn(s));
            }
            if (u <= 0) {
                return Promise.resolve(null);
            }
            return new Promise((resolvePromise)=>{
                let k = false;
                let y = (R)=>{
                    if (k) {
                        if (R !== null) {
                            R();
                        }
                        return;
                    }
                    k = true;
                    A.clear();
                    h.removeEventListener("abort", C);
                    let x = r.indexOf(S);
                    if (x !== -1) {
                        r.splice(x, 1);
                    }
                    resolvePromise(R);
                };
                let S = {
                    grant: ()=>y(Gn(s)),
                    refuse: ()=>y(null)
                };
                let C = ()=>y(null);
                let A = e.setTimer(()=>y(null), u);
                h.addEventListener("abort", C, {
                    once: true
                });
                r.push(S);
            });
        },
        refuseAll () {
            for (let u of r.splice(0)){
                u.refuse();
            }
        }
    };
}
function Gn(e) {
    let n = false;
    return ()=>{
        if (n) {
            return;
        }
        n = true;
        e();
    };
}
function Qn(e) {
    let n = new Map;
    let r = new Map;
    let s = jr(e);
    let u = (P, N, z)=>{
        let V = N.local.hook.timeout !== undefined && N.local.hook.timeout > 0 ? N.local.hook.timeout * 1000 : e.defaultTimeoutMs(Y3(N.local.event) ? N.local.event : "Stop");
        return (P.deadlineMs ?? 2 * V + 2 * Ut) - (e.now() - z) - Ut / 2;
    };
    let h = new Set;
    let w = new Map;
    let { repinned, everInReach, answered, withdrawn } = e.memory;
    let Number_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    let R = (P)=>{
        if (P.size > Ar) {
            let N = P.keys().next().value;
            if (N !== undefined) {
                P.delete(N);
            }
        }
    };
    let x = (requestId, callbackId, z)=>{
        answered.delete(requestId);
        answered.set(requestId, {
            callbackId,
            answer: z
        });
        R(answered);
    };
    let K = (P)=>{
        withdrawn.delete(P);
        withdrawn.add(P);
        R(withdrawn);
    };
    let G = (P, N, z)=>{
        if (h.has(P)) {
            return;
        }
        h.add(P);
        e.onLine(N, z);
    };
    let W = (P, N)=>{
        let z = e.now();
        if (z - (w.get(P) ?? Number.NEGATIVE_INFINITY) < 60000) {
            return;
        }
        w.set(P, z);
        e.onLine(N, "warning");
    };
    let I = (P, N, attestation)=>e.telemetry({
            outcome: P.outcome,
            event: P.event ?? null,
            kind: P.kind ?? null,
            exitClass: P.exitClass ?? null,
            translatedPaths: P.translatedPaths ?? 0,
            replay: P.replay ?? false,
            blocked: P.blocked ?? false,
            staged: P.staged ?? false,
            projectFrame: P.projectFrame ?? false,
            repinned: P.repinned ?? false,
            waitedMs: P.waitedMs ?? 0,
            durationMs: Math.max(0, e.now() - N),
            attestation
        });
    let H = async (P, hook, z, V, event, Z)=>{
        let pinnedTarget = P.local.pinnedTarget;
        let B = (ne)=>he(event, V.wire, ne);
        if (pinnedTarget === undefined) {
            if (z !== null && z.kind === "script") {
                let ne = await vt(z.resolvedPath, e.pin);
                if (ne === null) {
                    G(`unvouched:unjudgeable:${P.wire.id}`, `Not running ${V.local} for the cloud session: its file cannot be found or judged on this machine.`, "warning");
                    return {
                        kind: "refuse",
                        answer: B(`not run \u2014 its file cannot be found or judged on ${Z.displayName}`),
                        outcome: "pin_unreadable"
                    };
                }
                let se = everInReach.has(P.wire.id) || n_([
                    z.resolvedPath,
                    ne
                ], [
                    ...Z.cloudWritableRoots,
                    ...e.extraWritableRoots()
                ]);
                if (se) {
                    everInReach.add(P.wire.id);
                }
                if (se && P.local.cloudOptIn !== true) {
                    G(`reach:${P.wire.id}`, `Not running ${V.local} for the cloud session: its file now sits where the session can write on this machine, and it is not marked cloud: "device".`, "info");
                    return {
                        kind: "refuse",
                        answer: B(`not run \u2014 its file now sits where the cloud session can write on ${Z.displayName} and it is not marked cloud: "device"`),
                        outcome: "in_reach_refused"
                    };
                }
                if (se) {
                    G(`unvouched:in_reach:${P.wire.id}`, `Not running ${V.local} for the cloud session: it could not be pinned when this session started and now sits where the session can write; review the file, then restart claude --cloud to offer it again.`, "warning");
                    return {
                        kind: "refuse",
                        answer: B(`not run \u2014 its file could not be pinned on ${Z.displayName} and sits where the cloud session can write; review it there`),
                        outcome: "in_reach_refused"
                    };
                }
            }
            return {
                kind: "run",
                hook: z !== null && z.kind === "script" ? jn(hook, z, z.resolvedPath) : hook,
                staged: null,
                repinned: false
            };
        }
        let sha256 = repinned.get(P.wire.id) ?? pinnedTarget.sha256;
        let J = await H9o({
            ...pinnedTarget,
            sha256
        }, e.pin);
        let L = everInReach.has(P.wire.id) || n_([
            pinnedTarget.path,
            pinnedTarget.realPath,
            ...J.realPath !== undefined ? [
                J.realPath
            ] : []
        ], [
            ...Z.cloudWritableRoots,
            ...e.extraWritableRoots()
        ]);
        if (L) {
            everInReach.add(P.wire.id);
        }
        if (L && P.local.cloudOptIn !== true) {
            G(`reach:${P.wire.id}`, `Not running ${V.local} for the cloud session: its file now sits where the session can write on this machine, and it is not marked cloud: "device".`, "info");
            return {
                kind: "refuse",
                answer: B(`not run \u2014 its file now sits where the cloud session can write on ${Z.displayName} and it is not marked cloud: "device"; move it under ~/.claude or mark the entry`),
                outcome: "in_reach_refused"
            };
        }
        let ee;
        let re = sha256;
        let repinned_1 = repinned.has(P.wire.id);
        if (J.ok) {
            ee = J.bytes;
        } else if (J.reason === "changed" && !L && Z.repinChangedScripts) {
            repinned.set(P.wire.id, J.current.sha256);
            repinned_1 = true;
            ee = J.current.bytes;
            re = J.current.sha256;
            G(`repin:${P.wire.id}:${J.current.sha256}`, `${V.local} changed on this machine since it was registered; the cloud session's runs use the current version.`, "info");
        } else if (J.reason === "changed" && !L) {
            let ne = Z.inventory.forwarded.some((se)=>se.wire.event === "PreToolUse" && se.local.pinnedTarget?.path === pinnedTarget.path);
            G(`changed:${pinnedTarget.path}${ne ? ":guard" : ""}`, `${V.local} changed since it was registered for this cloud session, so it won't run.${ne ? " Matching tool calls are blocked." : ""} If you edited it, restart claude --cloud. If not, check the file.`, "warning");
            return {
                kind: "refuse",
                answer: B(`not run \u2014 its file changed on ${Z.displayName} since it was registered; it runs again once that machine re-registers it`),
                outcome: "pin_changed"
            };
        } else if (J.reason === "changed") {
            G(`pin:changed:${P.wire.id}`, `Not running ${V.local} for the cloud session: its file changed while the session could write to it on this machine \u2014 review the file before trusting it again.`, "warning");
            return {
                kind: "refuse",
                answer: B(`not run \u2014 its file changed on ${Z.displayName} while the cloud session could write to it; review the file there before trusting it again`),
                outcome: "pin_refused"
            };
        } else if (J.reason === "multiply_linked" || J.reason === "relocated") {
            let ne = J.reason === "multiply_linked" ? "it now has more than one hard link" : "its path now leads to a different file than the one registered";
            G(`pin:${J.reason}:${P.wire.id}`, `Not running ${V.local} for the cloud session: ${ne} on this machine \u2014 look at the file; if you re-linked or moved it yourself, relaunch claude --cloud here to register it again.`, "warning");
            return {
                kind: "refuse",
                answer: B(`not run \u2014 ${ne} on ${Z.displayName}; review it there`),
                outcome: "pin_refused"
            };
        } else {
            let ne = J.reason.replace("_", " ");
            G(`pin:${J.reason}:${P.wire.id}`, `Not running ${V.local} for the cloud session: the file it runs can no longer be read on this machine (${ne}).`, "warning");
            return {
                kind: "refuse",
                answer: B(`not run \u2014 its file on ${Z.displayName} can no longer be read (${ne}); it runs again once that machine re-registers it`),
                outcome: L ? "pin_refused" : "pin_unreadable"
            };
        }
        if (z?.kind !== "script" || z.resolvedPath !== pinnedTarget.path) {
            G(`pin:parse:${P.wire.id}`, `Not running ${V.local} for the cloud session: its command no longer reads as the script that was registered.`, "warning");
            return {
                kind: "refuse",
                answer: B(`not run \u2014 its command on ${Z.displayName} no longer names the script that was registered`),
                outcome: "pin_refused"
            };
        }
        if (!(Z.stageVerifiedBytes === "always" || Z.stageVerifiedBytes === "in_reach" && L)) {
            return {
                kind: "run",
                hook: jn(hook, z, pinnedTarget.path),
                staged: null,
                repinned: repinned_1
            };
        }
        try {
            let staged = await e.staging.stage(re, ee, basename(pinnedTarget.path));
            return {
                kind: "run",
                hook: ZEn(hook, z.site, staged.path),
                staged,
                repinned: repinned_1
            };
        } catch  {
            G(`stage:${P.wire.id}`, `Not running ${V.local} for the cloud session: couldn't save a private copy of it.${event === "PreToolUse" ? " Matching tool calls are blocked." : ""} If the cloud session can write your temporary folder, set CLAUDE_CODE_TMPDIR to a folder it can't write to and restart claude --cloud.`, "warning");
            return {
                kind: "refuse",
                answer: B(`not run \u2014 ${Z.displayName} couldn't save a private copy of it. If this session can write the temporary folder on that machine, set CLAUDE_CODE_TMPDIR there to a folder it can't write to and restart claude --cloud.`),
                outcome: "staging_failed"
            };
        }
    };
    let F = async (P, N, z, V, signal)=>{
        let event = z.local.event;
        if (!Y3(event)) {
            return {
                answer: {},
                telemetry: {
                    outcome: "event_mismatch"
                }
            };
        }
        let hook = z.local.hook;
        if (hook.type !== "command" && hook.type !== "http") {
            let oe = he(event, `hook on ${N.displayName}`, "not run — it is not a kind of hook that machine can run for a cloud session; retry");
            return {
                answer: oe,
                telemetry: {
                    event,
                    outcome: "unsupported_kind",
                    blocked: xy(oe)
                }
            };
        }
        let B = {
            event,
            kind: hook.type
        };
        let Y = hook.type === "command" ? e.parseTarget(hook) : null;
        let local = Zn(hook, Y);
        let L = {
            local,
            wire: Yn(hook, local, N)
        };
        if (Hr(P)) {
            G("stale", 'A hook request from the cloud session arrived already past its deadline (this machine was asleep, offline, or its stream was running behind). A guard answered "retry"; anything else had no opinion.', "warning");
            let oe = he(event, L.wire, `not run \u2014 the request reached ${N.displayName} already past its deadline (that machine was asleep or its stream ran behind); retry`);
            return {
                answer: oe,
                telemetry: {
                    ...B,
                    outcome: "stale",
                    blocked: xy(oe)
                }
            };
        }
        let ee = 0;
        try {
            let oe = _(P.input);
            ee = typeof oe === "string" ? Buffer.byteLength(oe, "utf8") : 0;
        } catch  {
            ee = 0;
        }
        if (ee > Cr) {
            let oe = zn(z, N, e, "too_large");
            return {
                answer: oe,
                telemetry: {
                    ...B,
                    outcome: "input_too_large",
                    blocked: xy(oe)
                }
            };
        }
        let re = J6e().safeParse(P.input);
        if (!re.success || !Fr(re.data)) {
            let oe = he(event, L.wire, `not run \u2014 the event could not be read on ${N.displayName}; retry`);
            return {
                answer: oe,
                telemetry: {
                    ...B,
                    outcome: "invalid_input",
                    blocked: xy(oe)
                }
            };
        }
        if (re.data.hook_event_name !== event) {
            let oe = he(event, L.wire, `not run \u2014 the event does not match the hook it names on ${N.displayName}; retry`);
            return {
                answer: oe,
                telemetry: {
                    ...B,
                    outcome: "event_name_mismatch",
                    blocked: xy(oe)
                }
            };
        }
        if (N.roots === null) {
            let oe = he(event, L.wire, `not run \u2014 ${N.displayName} does not know this session's directories yet; retry`);
            return {
                answer: oe,
                telemetry: {
                    ...B,
                    outcome: "no_roots",
                    blocked: xy(oe)
                }
            };
        }
        if (!e.trustAccepted()) {
            let oe = he(event, L.wire, `not run \u2014 its folder is no longer marked trusted on ${N.displayName}`);
            return {
                answer: oe,
                telemetry: {
                    ...B,
                    outcome: "untrusted",
                    blocked: xy(oe)
                }
            };
        }
        let ie = e.toolAliases?.();
        if (!N2e(re.data, z.local.matcher, ie)) {
            return {
                answer: {},
                telemetry: {
                    ...B,
                    outcome: "event_mismatch"
                }
            };
        }
        let ae = _0o(re.data, N.roots, {
            cloudSessionId: N.cloudSessionId
        }, ie);
        let ae_input = ae.input;
        let se = Object.keys(ae_input.cloud_session.original.paths);
        let se_length = se.length;
        let X = {
            dir: N.frame.launchDir,
            real: N.launchDirReal
        };
        let le = async (cwd)=>{
            let ue = (ge)=>kW(ge, X.real) || kW(ge, X.dir);
            try {
                if (ue(await e.pin.realpath(cwd))) {
                    return "inside";
                }
                return "unjudgeable";
            } catch (error) {
                if (v(error) !== "ENOENT") {
                    return "unjudgeable";
                }
                let Le = await vt(cwd, e.pin);
                if (Le !== null && ue(Le)) {
                    return "missing";
                }
                return "unjudgeable";
            }
        };
        let de = await le(ae_input.cwd);
        if (de !== "inside") {
            e.debug(`[deviceHooks] ${Re(P.requestId)}: translated cwd is ${de === "missing" ? "not an existing directory" : "not judgeable as a directory inside the launch directory"}; running from the launch directory`);
            ae_input = {
                ...ae_input,
                cwd: X.dir
            };
        }
        let _e = Ur(ae_input, ie);
        let Se = [
            ...se.filter((oe)=>Nr(oe, ae_input)),
            ..._e
        ];
        let me = Se.length > dt ? Se : await Vn(Se, ae_input, X, e.pin);
        let Ae = (ae.untranslated.includes("/cwd") || de === "unjudgeable") && _e.length > 0;
        let He = ae.untranslated.flatMap((pointer)=>{
            let ue = qt(re.data, pointer);
            if (h0o_1(pointer) && !Mr(pointer, re.data, ie) && typeof ue === "string" && qn(ue, N.roots)) {
                return [
                    {
                        pointer,
                        value: ue
                    }
                ];
            }
            return [];
        });
        let qe = async (oe)=>{
            if (oe.length > dt) {
                return {
                    waived: [],
                    namingFilesHere: oe.map((ge)=>ge.pointer)
                };
            }
            let ue = await Promise.all(oe.map(async ({ pointer, value })=>{
                let Ee = await vt(value, e.pin);
                let be = Ee !== null && (kW(Ee, X.real) || kW(Ee, X.dir));
                let Ve = Ee !== null && !be && await e.pin.realpath(value).then(()=>false, ($t)=>v($t) === "ENOENT");
                return {
                    pointer,
                    waived: be || Ve
                };
            }));
            return {
                waived: ue.filter((ge)=>ge.waived).map((ge)=>ge.pointer),
                namingFilesHere: ue.filter((ge)=>!ge.waived).map((ge)=>ge.pointer)
            };
        };
        let ht = await qe(He);
        let ht_namingFilesHere = ht.namingFilesHere;
        let Lo = N.denyUnjudgeablePaths ? [] : ht.waived;
        let un = [
            ...ae.untranslated.filter((oe)=>h0o_1(oe) && !Lo.includes(oe)),
            ...Ae ? [
                "/cwd"
            ] : [],
            ...me
        ];
        if (un.length > 0) {
            let oe = !Ae && me.length === 0 && ht_namingFilesHere.length === 0 && Se.length <= dt && un.every((ue)=>qn(qt(re.data, ue), N.roots));
            if (!(oe && N.runWithUntranslatedPaths)) {
                G(`untranslated:${z.wire.id}:${oe ? "container" : "unjudgeable"}`, oe ? `Skipped ${L.local} for the cloud session: the file it would look at exists only in the cloud, not in the synced project on this machine.` : `Not running ${L.local} for the cloud session: the event names a path this machine could not map to its own files.`, "info");
                let ue = !oe || N.denyUnjudgeablePaths ? he(event, L.wire, oe ? "not run — the event names a file that exists only in the cloud, so this machine could not judge it" : "not run — the event names a path this machine could not map to its own files; retry with a plain path inside the project") : {};
                return {
                    answer: ue,
                    telemetry: {
                        ...B,
                        outcome: "untranslated_skipped",
                        translatedPaths: se_length,
                        blocked: xy(ue)
                    }
                };
            }
        }
        let Ne = Wr(ae_input, await e.emptyTranscriptPath().catch(()=>devNull_1));
        if (hook.if) {
            let oe;
            try {
                oe = await e.evaluateCondition(hook.if, Ne);
            } catch  {
                oe = null;
            }
            if (oe === null) {
                let ue = he(event, L.wire, "not run — its condition could not be evaluated on this machine; retry");
                return {
                    answer: ue,
                    telemetry: {
                        ...B,
                        outcome: "condition_error",
                        translatedPaths: se_length,
                        blocked: xy(ue)
                    }
                };
            }
            if (!oe) {
                return {
                    answer: {},
                    telemetry: {
                        ...B,
                        outcome: "condition_false",
                        translatedPaths: se_length
                    }
                };
            }
        }
        let ke = hook.type === "command" ? await H(z, hook, Y, L, event, N) : {
            kind: "run",
            hook,
            staged: null,
            repinned: false
        };
        if (ke.kind === "refuse") {
            return {
                answer: ke.answer,
                telemetry: {
                    ...B,
                    outcome: ke.outcome,
                    translatedPaths: se_length,
                    blocked: xy(ke.answer)
                }
            };
        }
        let Me = null;
        try {
            if (signal.aborted) {
                return {
                    answer: null,
                    telemetry: {
                        ...B,
                        outcome: "cancelled"
                    }
                };
            }
            let oe = hook.timeout !== undefined && hook.timeout > 0 ? hook.timeout * 1000 : e.defaultTimeoutMs(event);
            let ue = ()=>{
                if (P.deadlineMs !== undefined) {
                    return P.deadlineMs - (e.now() - V) - Ut;
                }
                return oe;
            };
            let ge = ue();
            let Le = e.now();
            let Ee = await s.acquire(ge, signal);
            let waitedMs = Math.max(0, e.now() - Le);
            let Ve = Ee !== null && ue() < Wn;
            if (Ve && Ee !== null) {
                Ee();
                Ee = null;
            }
            if (Ee === null) {
                if (signal.aborted) {
                    return {
                        answer: null,
                        telemetry: {
                            ...B,
                            outcome: "cancelled",
                            waitedMs
                        }
                    };
                }
                if (!Ve && e.now() - Number_NEGATIVE_INFINITY >= 60000) {
                    Number_NEGATIVE_INFINITY = e.now();
                    e.onLine('The cloud session is asking for more hooks at once than this machine can run in time; some were answered "retry" (guards) or with no opinion.', "warning");
                }
                let Ze = he(event, L.wire, Ve ? `not run \u2014 too little time was left before the cloud session stops waiting for ${N.displayName}; retry` : `not run \u2014 ${N.displayName} is running too many hooks for the cloud session at once; retry`);
                return {
                    answer: Ze,
                    telemetry: {
                        ...B,
                        outcome: Ve ? "too_late" : "no_slot",
                        translatedPaths: se_length,
                        blocked: xy(Ze),
                        waitedMs
                    }
                };
            }
            let $t = Ee;
            try {
                if (signal.aborted) {
                    return {
                        answer: null,
                        telemetry: {
                            ...B,
                            outcome: "cancelled",
                            waitedMs
                        }
                    };
                }
                let Ze = Ne.cwd === X.dir ? "inside" : await le(Ne.cwd);
                let input = Ne;
                if (Ze !== "inside") {
                    input = {
                        ...Ne,
                        cwd: X.dir
                    };
                }
                let fn = Ze === "unjudgeable" && _e.length > 0 || Se.length <= dt && (await Vn(Se, input, X, e.pin)).length > 0;
                let Fo = !fn && He.length > 0 && (await qe(He)).namingFilesHere.length > 0;
                if (fn || Fo) {
                    let ce = he(event, L.wire, `not run \u2014 a path the event names moved outside the project on ${N.displayName} while it waited; retry`);
                    return {
                        answer: ce,
                        telemetry: {
                            ...B,
                            outcome: "untranslated_skipped",
                            translatedPaths: se_length,
                            blocked: xy(ce),
                            waitedMs
                        }
                    };
                }
                if (signal.aborted) {
                    return {
                        answer: null,
                        telemetry: {
                            ...B,
                            outcome: "cancelled",
                            waitedMs
                        }
                    };
                }
                let Nt = Math.min(oe, ue());
                if (ue() < Wn) {
                    let ce = he(event, L.wire, `not run \u2014 too little time was left before the cloud session stops waiting for ${N.displayName}; retry`);
                    return {
                        answer: ce,
                        telemetry: {
                            ...B,
                            outcome: "too_late",
                            translatedPaths: se_length,
                            blocked: xy(ce),
                            waitedMs
                        }
                    };
                }
                let tt = e.hostEnv();
                let hn = [
                    N.frame.launchDir,
                    N.launchDirReal,
                    ...N.cloudWritableRoots,
                    ...e.extraWritableRoots()
                ];
                let pn = (ce)=>ce !== NL && !tR(ce);
                let pt = O() === "windows" && hn.some(pn) ? [
                    NL
                ] : hn.filter((ce)=>!pn(ce)).map((ce)=>{
                    if (ce === NL) {
                        return ce;
                    }
                    return Zd(resolve(ce));
                });
                let nt = await e.childEnvironment(pt, tt);
                let Wo = (ce)=>pt.some((Pe)=>zAe(Zd(resolve(ce)), Pe)) || O() === "windows" && zr(ce, pt);
                let mn = Gr(tt.CLAUDE_CODE_SHELL_PREFIX ?? "", {
                    home: tt.HOME,
                    launchDir: N.frame.launchDir
                });
                let gn = await Promise.all(mn.map((ce)=>e.placePath(ce).then((Pe)=>{
                        switch(Pe){
                            case "unreadable":
                                return Jn;
                            case "absent":
                                return ce;
                            default:
                                return Pe;
                        }
                    })));
                let ot = (gn.includes(Jn) || [
                    ...mn,
                    ...gn
                ].some(Wo)) && !nt.omit.includes("CLAUDE_CODE_SHELL_PREFIX") ? {
                    ...nt,
                    omit: [
                        ...nt.omit,
                        "CLAUDE_CODE_SHELL_PREFIX"
                    ],
                    extra: qs(nt.extra, "CLAUDE_CODE_SHELL_PREFIX")
                } : nt;
                if (tt.CLAUDE_CODE_SHELL_PREFIX?.trim() && ke.hook.type === "command" && ke.hook.args === undefined && Wt(ot) === undefined) {
                    G("prefix-unwrapped", 'Hooks marked cloud: "device" run for the cloud session WITHOUT your CLAUDE_CODE_SHELL_PREFIX here: this machine cannot vouch for that wrapper (it is not an absolute path outside what the session can write).', "warning");
                }
                let kn = ot.extra.PATH;
                let env = kn === undefined || kn === "" ? {
                    ...ot,
                    extra: {
                        ...ot.extra,
                        PATH: get
                    }
                } : ot;
                let Uo = new Set((env.extra.PATH ?? "").split(delimiter));
                let st = (tt.PATH ?? "").split(delimiter).filter((ce)=>ce !== "" && !Uo.has(ce));
                if (env.omit.length > 0) {
                    e.debug(`[deviceHooks] ${Re(P.requestId)}: not passing on ${env.omit.join(", ")}`);
                }
                if (st.length > 0) {
                    G("search-path-trimmed", `Hooks the cloud session forwards here run without ${st.length} PATH entr${st.length === 1 ? "y" : "ies"} the session can write to or that cannot be resolved on this machine (${st.slice(0, 3).map((ce)=>$n(ce)).join(", ")}${st.length > 3 ? ", …" : ""}); a tool installed only there is "not found" for them.`, "debug");
                }
                let lt = ke.hook.type !== "command" ? undefined : ke.hook.args !== undefined ? ke.hook.command.includes("/") ? undefined : ke.hook.command : Y?.kind === "script" && Y.interpreter !== null ? Y.interpreter : undefined;
                if (lt !== undefined) {
                    if (await e.resolveProgram(lt, env.extra.PATH ?? "", pt) === "in_reach") {
                        G(`program:${lt}`, `Not running hooks through ${lt} for the cloud session: on this machine that name leads to a file the session can write.`, "warning");
                        let Pe = he(event, L.wire, `not run \u2014 ${lt} on ${N.displayName} leads to a file the cloud session can write`);
                        return {
                            answer: Pe,
                            telemetry: {
                                ...B,
                                outcome: "in_reach_refused",
                                translatedPaths: se_length,
                                blocked: xy(Pe),
                                waitedMs
                            }
                        };
                    }
                }
                if (ke.hook.type === "command" && z.local.cloudOptIn !== true && N.unmarkedStartFolder === "private") {
                    Me = await e.staging.runDirectory().catch(()=>null);
                    if (Me === null) {
                        G(`run-folder:${z.wire.id}`, `Not running ${L.local} for the cloud session: this machine has no private folder to start it in.`, "warning");
                        let ce = he(event, L.wire, `not run \u2014 ${N.displayName} has no private folder to start it in`);
                        return {
                            answer: ce,
                            telemetry: {
                                ...B,
                                outcome: "staging_failed",
                                translatedPaths: se_length,
                                blocked: xy(ce),
                                waitedMs
                            }
                        };
                    }
                }
                let jo = e.now();
                let wn = await e.run({
                    hook: ke.hook,
                    event,
                    input,
                    timeoutMs: Nt,
                    env,
                    ...Me !== null && {
                        startDirectory: Me.path
                    }
                }, N.frame, signal);
                let timedOut = wn.aborted === true && !signal.aborted;
                let we = timedOut && Nt < oe ? {
                    answer: he(event, L.wire, `not run to completion \u2014 too little time was left before the cloud session stops waiting for ${N.displayName}; retry`),
                    exitClass: "timeout",
                    blocked: event === "PreToolUse",
                    localWarning: undefined
                } : Mn(wn, {
                    event,
                    label: L.wire,
                    timedOut,
                    timeoutMs: Nt,
                    timeoutFailsClosed: N.timeoutFailsClosed
                });
                let vn = e.now() - jo;
                if (we.localWarning !== undefined) {
                    W(`${z.wire.id}:${we.exitClass}`, `cloud \u25B8 ${event} \u25B8 ${we.localWarning}${Me !== null && we.exitClass === "other" ? ` \xB7 ${Pr}` : ""}`);
                } else if (we.answer !== null && we.blocked) {
                    e.onLine(`cloud \u25B8 ${event}${Kn(Ne)} \u25B8 ${L.local} \u25B8 ${Wrs(we.answer) ? "asked" : "blocked"} (${vn} ms)`, "info");
                } else if (we.answer !== null && Br(we.answer)) {
                    e.onLine(`cloud \u25B8 ${event}${Kn(Ne)} \u25B8 ${L.local} \u25B8 added context (${vn} ms)`, "debug");
                }
                return {
                    answer: we.answer,
                    telemetry: {
                        ...B,
                        outcome: we.answer === null ? "cancelled" : we.exitClass === "spawn_failed" || we.exitClass === "other" && we.localWarning !== undefined ? "run_error" : "answered",
                        exitClass: we.exitClass,
                        translatedPaths: se_length,
                        blocked: we.blocked,
                        staged: ke.staged !== null,
                        projectFrame: ke.hook.type === "command" && Me === null,
                        repinned: ke.repinned,
                        waitedMs
                    }
                };
            } finally{
                $t();
            }
        } finally{
            await Promise.all([
                ke.staged?.release(),
                Me?.release()
            ]);
        }
    };
    return {
        async serve (P, N) {
            let z = e.now();
            if (N === null) {
                return {
                    kind: "silent",
                    reason: "no_state"
                };
            }
            if (P.requestId.length > Un || P.callbackId.length > Un) {
                I({
                    outcome: "not_mine"
                }, z, undefined);
                return {
                    kind: "silent",
                    reason: "not_mine"
                };
            }
            let V = yfe(P.callbackId);
            let te = V?.instanceId;
            let Z = te !== undefined && N.retiredInstanceIds.has(te);
            if (!Z && te !== N.instanceId) {
                I({
                    outcome: "not_mine"
                }, z, undefined);
                return {
                    kind: "silent",
                    reason: "not_mine"
                };
            }
            let M = e.judgeSender(P.attestationStatus);
            let B = (j, X)=>I(j, X, M?.attestation);
            if (M?.heldBack === true) {
                e.debug(`[deviceHooks] ${Re(P.requestId)}: held back for its sender (attestation ${M.attestation.status}) \u2014 no opinion, nothing run`);
                G("unattested", $r, "warning");
                B({
                    outcome: "unattested"
                }, z);
                return {
                    kind: "answer",
                    answer: {}
                };
            }
            if (e.isMuted?.() === true) {
                e.debug(`[deviceHooks] ${Re(P.requestId)}: serving is switched off (emergency switch) \u2014 no opinion`);
                B({
                    outcome: "muted"
                }, z);
                return {
                    kind: "answer",
                    answer: {}
                };
            }
            if (withdrawn.has(P.requestId)) {
                e.debug(`[deviceHooks] ${Re(P.requestId)}: withdrawn earlier \u2014 staying silent`);
                B({
                    outcome: "withdrawn_replay",
                    replay: true
                }, z);
                return {
                    kind: "silent",
                    reason: "withdrawn"
                };
            }
            let Y = answered.get(P.requestId);
            if (Y !== undefined && Y.callbackId === P.callbackId) {
                e.debug(`[deviceHooks] ${Re(P.requestId)}: replay \u2014 resending the earlier answer`);
                B({
                    outcome: "cached",
                    replay: true
                }, z);
                return {
                    kind: "answer",
                    answer: Y.answer
                };
            }
            if (Y !== undefined) {
                let j = he(V?.event === "PreToolUse" ? "PreToolUse" : "Stop", `hook on ${N.displayName}`, "not run — its request id was already used for another hook; retry");
                B({
                    outcome: "replay_mismatch",
                    blocked: xy(j)
                }, z);
                return {
                    kind: "answer",
                    answer: j
                };
            }
            if (n.has(P.requestId)) {
                return {
                    kind: "silent",
                    reason: "running"
                };
            }
            let J = Z ? undefined : N.inventory.forwarded.find((j)=>j.wire.id === P.callbackId);
            if (J === undefined) {
                e.debug(`[deviceHooks] ${Re(P.requestId)}: ${Z ? "retired instance" : "not in the current inventory"} \u2014 ${V?.event === "PreToolUse" ? "holding the guard" : "no opinion"}`);
                let j = he(V?.event === "PreToolUse" ? "PreToolUse" : "Stop", `hook on ${N.displayName}`, "not run — it belongs to a registration that machine has since replaced; retry");
                B({
                    outcome: "unknown_id",
                    blocked: xy(j)
                }, z);
                return {
                    kind: "answer",
                    answer: j
                };
            }
            if (n.size >= Bt) {
                e.debug(`[deviceHooks] ${Re(P.requestId)}: too many requests in hand \u2014 refusing`);
                let j = zn(J, N, e);
                B({
                    outcome: "overloaded",
                    blocked: xy(j)
                }, z);
                return {
                    kind: "answer",
                    answer: j
                };
            }
            let L = qr(J, P.input, e.defaultShell());
            let ee = L === null ? undefined : r.get(L.key);
            if (ee !== undefined && ee.requestId !== P.requestId) {
                let j = new AbortController;
                n.set(P.requestId, j);
                let X = null;
                try {
                    X = await new Promise((resolvePromise)=>{
                        let de = e.setTimer(()=>resolvePromise("too_late"), Math.max(0, u(P, J, z)));
                        j.signal.addEventListener("abort", ()=>{
                            de.clear();
                            resolvePromise(null);
                        }, {
                            once: true
                        });
                        ee.answer.then((_e)=>{
                            de.clear();
                            resolvePromise(_e);
                        });
                    });
                } finally{
                    n.delete(P.requestId);
                }
                if (j.signal.aborted) {
                    if (j.signal.reason !== wt) {
                        K(P.requestId);
                    }
                    B({
                        outcome: "cancelled",
                        blocked: false
                    }, z);
                    return {
                        kind: "silent",
                        reason: "cancelled"
                    };
                }
                if (X === "too_late") {
                    let le = he(Y3(J.local.event) ? J.local.event : "Stop", `hook on ${N.displayName}`, `not run \u2014 ${N.displayName} could not decide it before the cloud session stops waiting; retry`);
                    x(P.requestId, P.callbackId, le);
                    B({
                        outcome: "too_late",
                        blocked: xy(le)
                    }, z);
                    return {
                        kind: "answer",
                        answer: le
                    };
                }
                if (X !== null) {
                    x(P.requestId, P.callbackId, X);
                    e.debug(`[deviceHooks] ${Re(P.requestId)}: the same hook and invocation as ${Re(ee.requestId)} \u2014 answered from its run`);
                    B({
                        outcome: "same_invocation",
                        blocked: xy(X)
                    }, z);
                    return {
                        kind: "answer",
                        answer: X
                    };
                }
            }
            let re = ()=>{};
            if (L !== null) {
                let j = new Promise((resolvePromise)=>{
                    re = resolvePromise;
                });
                r.delete(L.key);
                r.set(L.key, {
                    requestId: P.requestId,
                    answer: j
                });
                R(r);
            }
            let ie = null;
            let ae = new AbortController;
            n.set(P.requestId, ae);
            let ne = false;
            let se = F(P, N, J, z, ae.signal).catch((j)=>{
                e.logError(j);
                let X = he(Y3(J.local.event) ? J.local.event : "Stop", `hook on ${N.displayName}`, "not run — an internal error while deciding it; retry");
                return {
                    answer: X,
                    telemetry: {
                        outcome: "decide_error",
                        blocked: xy(X)
                    }
                };
            });
            se.finally(()=>{
                ne = true;
            });
            try {
                let { answer, telemetry } = await new Promise((resolvePromise)=>{
                    let Se = u(P, J, z);
                    let me = e.setTimer(()=>{
                        if (ae.signal.aborted) {
                            resolvePromise({
                                answer: null,
                                telemetry: {
                                    outcome: "cancelled",
                                    blocked: false
                                }
                            });
                            return;
                        }
                        ae.abort(Bn);
                        let Ae = he(Y3(J.local.event) ? J.local.event : "Stop", `hook on ${N.displayName}`, `not run \u2014 ${N.displayName} could not decide it before the cloud session stops waiting; retry`);
                        resolvePromise({
                            answer: Ae,
                            telemetry: {
                                outcome: "too_late",
                                blocked: xy(Ae)
                            }
                        });
                    }, Math.max(0, Se));
                    se.then((Ae)=>{
                        me.clear();
                        resolvePromise(Ae);
                    });
                });
                if (ae.signal.reason !== Bn && (answer === null || ae.signal.aborted)) {
                    if (ae.signal.reason !== wt) {
                        K(P.requestId);
                    } else if (answer !== null) {
                        x(P.requestId, P.callbackId, answer);
                    }
                    e.debug(`[deviceHooks] ${Re(P.requestId)}: ${J.wire.id} withdrawn \u2014 nothing sent`);
                    B({
                        ...telemetry,
                        outcome: "cancelled"
                    }, z);
                    return {
                        kind: "silent",
                        reason: "cancelled"
                    };
                }
                let de = answer ?? {};
                ie = de;
                x(P.requestId, P.callbackId, de);
                e.debug(`[deviceHooks] ${Re(P.requestId)}: ${J.wire.id} \u2192 ${telemetry.outcome}`);
                B(telemetry, z);
                return {
                    kind: "answer",
                    answer: de
                };
            } finally{
                re(ie);
                if (L !== null && r.get(L.key)?.requestId === P.requestId) {
                    r.delete(L.key);
                }
                if (ne) {
                    n.delete(P.requestId);
                } else {
                    se.finally(()=>n.delete(P.requestId));
                }
            }
        },
        cancel (P, N = "worker") {
            let z = n.get(P);
            if (z === undefined) {
                return false;
            }
            if (N === "worker") {
                K(P);
                z.abort();
            } else {
                z.abort(wt);
            }
            return true;
        },
        cancelAll () {
            let n_size = n.size;
            for (let N of n.values()){
                N.abort(wt);
            }
            s.refuseAll();
            return n_size;
        },
        inFlight: ()=>n.size
    };
}
function qr(e, input, r) {
    if (typeof input !== "object" || input === null) {
        return null;
    }
    let hook = e.local.hook;
    let u = hook.type === "command" ? `command\x00${hook.shell ?? r}\x00${hook.command}\x00${_(hook.args ?? null)}\x00${hook.if ?? ""}` : hook.type === "http" ? `http\x00${hook.url}\x00${hook.if ?? ""}` : null;
    if (u === null) {
        return null;
    }
    let h = "tool_use_id" in input && typeof input.tool_use_id === "string" ? `tool\x00${input.tool_use_id}` : `input\x00${at(_(input))}`;
    return {
        key: `${e.local.event}\x00${h}\x00${u}`
    };
}
function zn(e, n, r, s = "in_hand") {
    let hook = e.local.hook;
    if (e.local.event !== "PreToolUse" || hook.type !== "command" && hook.type !== "http") {
        return {};
    }
    let h = null;
    try {
        h = hook.type === "command" ? r.parseTarget(hook) : null;
    } catch  {}
    let w = Zn(hook, h);
    return he("PreToolUse", Yn(hook, w, n), s === "too_large" ? `not run \u2014 the event was too large to judge on ${n.displayName}; retry with less` : `not run \u2014 ${n.displayName} has too many hook requests from the cloud session in hand at once; retry`);
}
function Kn(e) {
    if ("tool_name" in e && typeof e.tool_name === "string") {
        return `:${ei(e.tool_name, {
            maxCodeUnits: 48
        })}`;
    }
    return "";
}
function Br(answer) {
    if (xy(answer) || "async" in answer) {
        return false;
    }
    let e_hookSpecificOutput = answer.hookSpecificOutput;
    return answer.systemMessage !== undefined || e_hookSpecificOutput !== undefined && "additionalContext" in e_hookSpecificOutput && e_hookSpecificOutput.additionalContext !== undefined;
}
function defaultTimeoutMs(e) {
    return PKn[e] * 1000;
}
const Vr = /^(?:PATH|CDPATH|PYTHONPATH|PYTHONHOME|NODE_PATH|RUBYLIB|PERL5LIB|PERLLIB|GEM_PATH|GEM_HOME|CLASSPATH|LD_LIBRARY_PATH|DYLD_\w+)$/;
var Jn = "\x00unplaceable";
function Gr(e, { home, launchDir }) {
    let s = [];
    let u = "";
    let h = "";
    let w = null;
    let k = ()=>{
        if (u !== "") {
            s.push({
                raw: u,
                text: h
            });
        }
        u = "";
        h = "";
    };
    for (let R of e.trim()){
        if (w !== null) {
            u += R;
            if (R === w) {
                w = null;
            } else {
                h += R;
            }
        } else if (R === '"' || R === "'") {
            w = R;
            u += R;
        } else if (R === " " || R === "\t") {
            k();
        } else {
            u += R;
            h += R;
        }
    }
    k();
    let y = O() === "windows";
    let S = (R)=>{
        if (y) {
            return /[\\/]/.test(R);
        }
        return R.includes("/");
    };
    let C = (R)=>{
        if (y) {
            return /^(?:[A-Za-z]:[\\/]|[\\/])/.test(R);
        }
        return R.startsWith("/");
    };
    let A = (R)=>y && /^[A-Za-z]:(?![\\/])/.test(R);
    return s.flatMap(({ raw, text })=>{
        if (y && raw.replace(/'[^']*'|"[^"]*"/g, "").includes("\\")) {
            return [
                launchDir
            ];
        }
        let K = text.replace(/^\$(?:HOME\b|\{HOME\})/, "");
        let G = raw.replace(/'[^']*'/g, "").replace(/^"?\$\{HOME\}/, "");
        if (/[`$;|&<>]/.test(K) || /[*?[{]/.test(G)) {
            return [
                launchDir
            ];
        }
        let W = text.match(/^(--?[\w-]+|[A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
        if (W) {
            let H = W[2];
            let F = Vr.test(y ? W[1].toUpperCase() : W[1]);
            let P = A(H) ? [
                launchDir
            ] : C(H) ? [
                H
            ] : S(H) ? [
                `${launchDir}/${H}`
            ] : [];
            let z = (y && !F ? H.split(":").reduce((acc, item)=>{
                let Z = acc.at(-1);
                if (Z !== undefined && /^[A-Za-z]$/.test(Z)) {
                    acc[acc.length - 1] = `${Z}:${item}`;
                } else {
                    acc.push(item);
                }
                return acc;
            }, []) : H.split(":")).flatMap((V)=>{
                if (V === "") {
                    if (F || H.includes(":")) {
                        return [
                            launchDir
                        ];
                    }
                    return [];
                }
                if (A(V)) {
                    return [
                        launchDir
                    ];
                }
                if (C(V)) {
                    return [
                        V
                    ];
                }
                if (S(V) || F || V === "." || V === "..") {
                    return [
                        `${launchDir}/${V}`
                    ];
                }
                return [];
            });
            return D([
                ...P,
                ...z
            ]);
        }
        let I = text;
        if (home !== undefined && home !== "") {
            if (raw === "~" || raw.startsWith("~/")) {
                I = home + text.slice(1);
            } else if (/^"?\$\{HOME\}(?=[/"]|$)/.test(raw) && (text === "${HOME}" || text.startsWith("${HOME}/"))) {
                I = home + text.slice(7);
            } else if (/^"?\$HOME(?=[/"]|$)/.test(raw) && (text === "$HOME" || text.startsWith("$HOME/"))) {
                I = home + text.slice(5);
            }
        }
        if (A(I)) {
            return [
                launchDir
            ];
        }
        if (C(I)) {
            return [
                I
            ];
        }
        if (S(I)) {
            return [
                `${launchDir}/${I}`
            ];
        }
        return [];
    });
}
function zr(e, n) {
    return n.some((r)=>zAe(Zd(e), r));
}
const io = new Set([
    "env",
    "nice",
    "nohup",
    "exec",
    "time",
    "caffeinate",
    "builtin",
    "command",
    "xargs",
    "sudo",
    "doas",
    "runuser",
    "coproc",
    "timeout",
    "gtimeout",
    "flock",
    "arch",
    "setsid",
    "stdbuf",
    "unbuffer",
    "chronic",
    "busybox",
    "strace",
    "ltrace",
    "entr"
]);
const zt = new Set([
    "-w",
    "--wait",
    "--timeout",
    "-E",
    "--conflict-exit-code"
]);
const Jr = {
    nice: new Set([
        "-n",
        "--adjustment"
    ]),
    timeout: new Set([
        "-s",
        "--signal",
        "-k",
        "--kill-after"
    ]),
    gtimeout: new Set([
        "-s",
        "--signal",
        "-k",
        "--kill-after"
    ]),
    sudo: new Set([
        "-u",
        "-g",
        "-C",
        "-D",
        "-h",
        "-p",
        "-R",
        "-T",
        "-U",
        "--user",
        "--group",
        "--host",
        "--prompt",
        "--close-from",
        "--chdir",
        "--role",
        "--type",
        "--other-user"
    ]),
    doas: new Set([
        "-u",
        "-C"
    ]),
    runuser: new Set([
        "-u",
        "-g",
        "-G",
        "--user",
        "--group",
        "--supp-group",
        "-w",
        "--whitelist-environment"
    ]),
    xargs: new Set([
        "-n",
        "-P",
        "-I",
        "-L",
        "-s",
        "-d",
        "-E",
        "-a",
        "--arg-file",
        "--max-args",
        "--max-procs",
        "--delimiter"
    ]),
    env: new Set([
        "-u",
        "-C",
        "-P",
        "--unset",
        "--chdir"
    ]),
    caffeinate: new Set([
        "-t",
        "-w"
    ]),
    exec: new Set([
        "-a"
    ]),
    flock: new Set([
        ...zt,
        "-c",
        "--command"
    ]),
    arch: new Set([
        "-arch",
        "-e",
        "-d"
    ]),
    stdbuf: new Set([
        "-i",
        "-o",
        "-e",
        "--input",
        "--output",
        "--error"
    ]),
    strace: new Set([
        "-e",
        "-o",
        "-p",
        "-s",
        "-P",
        "-E",
        "-u",
        "-a",
        "-X"
    ]),
    ltrace: new Set([
        "-e",
        "-o",
        "-p",
        "-s",
        "-n",
        "-u",
        "-a",
        "-F"
    ]),
    ionice: new Set([
        "-c",
        "--class",
        "-n",
        "--classdata",
        "-p",
        "--pid",
        "-P",
        "--pgid",
        "-u",
        "--uid"
    ]),
    chrt: new Set([
        "-T",
        "--sched-runtime",
        "-P",
        "--sched-period",
        "-D",
        "--sched-deadline"
    ]),
    "xvfb-run": new Set([
        "-n",
        "--server-num",
        "-s",
        "--server-args",
        "-f",
        "--auth-file",
        "-e",
        "--error-file",
        "-w",
        "--wait",
        "-p",
        "--xauth-protocol"
    ])
};
const Xr = {
    timeout: 1,
    gtimeout: 1,
    flock: 1,
    chrt: 1,
    taskset: 1
};
function anchored(e) {
    return /^(?:\/|\$(?!\{?(?:CURDIR|PWD)\b)(?:[A-Za-z_][A-Za-z0-9_]*|\{[A-Za-z_][A-Za-z0-9_]*\})\/)/.test(e.text) || /^~(?:[A-Za-z_][A-Za-z0-9._-]*)?\//.test(We(e.raw));
}
const Et = {
    anchored,
    takesNext: (e, n)=>e(n) || !n.startsWith("--") && Array.from(n).findIndex((r, s)=>s > 0 && e(`-${r}`)) === n.length - 1,
    alsoLaunchers: new Set([
        "ionice",
        "chrt",
        "taskset",
        "xvfb-run"
    ]),
    alsoValued: {
        sudo: new Set([
            "-r",
            "-t"
        ])
    },
    runuserIsSu: true
};
const so = [
    {
        anchored: (e)=>e.text.startsWith("/"),
        takesNext: (e, n)=>!n.includes("=") && (e(n) || /^-[a-zA-Z]{2,}$/.test(n) && e(`-${n.at(-1)}`)),
        alsoLaunchers: new Set,
        alsoValued: {},
        runuserIsSu: false
    },
    Et,
    {
        ...Et,
        alsoValued: {
            ...Et.alsoValued,
            time: new Set([
                "-f",
                "--format",
                "-o",
                "--output"
            ]),
            strace: new Set([
                "-I",
                "-b"
            ]),
            xargs: new Set([
                "-J"
            ])
        }
    },
    {
        ...Et,
        stepsPastVariable: true
    }
];
function ao(e) {
    return io.has(e) || so.some((n)=>n.alsoLaunchers.has(e));
}
function Zr(e) {
    let n = Array(e.length + 1).fill(false);
    for(let r = e.length - 1; r >= 0; r -= 1){
        let s = e[r].text;
        n[r] = s !== "--" && (/^(?:-[flmpPT]*u|--user(?:=|$))/.test(s) || n[r + 1]);
    }
    return n;
}
const lo = new Set([
    "then",
    "do",
    "else",
    "elif",
    "if",
    "while",
    "until",
    "!"
]);
const Yr = new Set([
    "fi",
    "done",
    "esac",
    "}",
    "]]"
]);
const Qr = new Set([
    "time",
    "coproc",
    "function",
    "fi",
    "done",
    "esac"
]);
const ti = new Set([
    "coproc",
    "function"
]);
const ni = /^[A-Za-z_][A-Za-z0-9_]*(?:\[[^\]]*\])?\+?=/;
const to = 6;
const Vt = " \t";
const oi = ` 	
;&|()<>`;
const Ke = String.fromCharCode(96);
const ri = /(?:^|[^\\])(?:\\\\)*\\\n/;
const ii = /(?:^|[^\\])(?:\\\\)*\\$/;
function Gt(e, n) {
    let r = n;
    while(e[r] === "\\" && e[r + 1] === `
`){
        r += 2;
    }
    return r;
}
function We(e) {
    if (!e.includes("\\\n")) {
        return e;
    }
    let n = [];
    let r = 0;
    let s = -1;
    for(let u = 0; u < e.length; u += 1){
        let h = e[u];
        if (h === "\\") {
            if (s === -1) {
                s = u;
            }
            continue;
        }
        if (h === `
` && s !== -1 && (u - s) % 2 === 1) {
            n.push(e.slice(r, u - 1));
            r = u + 1;
        }
        s = -1;
    }
    n.push(e.slice(r));
    return n.join("");
}
function si(e) {
    if (!e.includes("\\")) {
        return e;
    }
    let n = "";
    let r = 0;
    for(let s = 0; s < e.length; s += 1){
        if (e[s] !== "\\") {
            continue;
        }
        let u = e[s + 1];
        if (u === "$" || u === Ke || u === "\\" || u === `
`) {
            n += e.slice(r, s);
            r = u === `
` ? s + 2 : s + 1;
            s += 1;
        }
    }
    if (r === 0) {
        return e;
    }
    return n + e.slice(r);
}
const no = /[ \t\n|]/;
const oo = /@P\}/;
const ai = /\$'[^']*\\|"[^"]*\\/;
function xt(e, n = {}) {
    let r = new Je(e, n.make === true);
    let s = r.tokens("eof", 0);
    let commands = [];
    for (let h of [
        s,
        ...r.bodies
    ]){
        li(h, n, commands);
    }
    return {
        commands,
        unreadable: r.unreadable
    };
}
function co(e) {
    let n = new Je(e, false);
    n.tokens("eof", 0);
    return n.comments;
}
function li(e, n, commands) {
    let s = 0;
    let u = 0;
    let h = false;
    let w = false;
    let k = 0;
    let y = 0;
    while(s < e.length){
        let S = e[s];
        if (h) {
            if (S.kind === "op" && S.op === `
`) {
                s += 1;
                continue;
            }
            if (S.kind === "word" && S.word.text === "esac" && !S.word.quoted) {
                u -= 1;
                h = false;
                s += 1;
                continue;
            }
            while(s < e.length){
                let H = e[s];
                if (H.kind === "op" && H.op === ")" || H.kind === "word" && H.word.text === "esac" && !H.word.quoted) {
                    break;
                }
                s += 1;
            }
            if (e[s]?.kind === "op") {
                s += 1;
            }
            h = false;
            w = false;
            continue;
        }
        if (S.kind === "op") {
            if (u > 0 && /^;[;&]|^;;&$/.test(S.op)) {
                h = true;
            }
            if (S.op === "(" || S.op === "{") {
                y += 1;
                if (w && k === 0) {
                    k = y;
                }
            } else if (S.op === ")" || S.op === "}") {
                if (y === k) {
                    k = 0;
                }
                y = Math.max(0, y - 1);
            }
            if (S.op === "|" || S.op === "|&") {
                w = true;
            } else if (S.op !== `
` && S.op !== "(" && S.op !== "{") {
                w = false;
            }
            s += 1;
            continue;
        }
        let C = [];
        let redirects = [];
        let heredoc;
        while(s < e.length && e[s].kind !== "op"){
            let H = e[s];
            if (H.kind === "word") {
                C.push(H.word);
            } else if (H.kind === "redirect") {
                redirects.push({
                    op: H.op,
                    target: H.word
                });
            } else if (H.kind === "heredoc" && H.body !== null) {
                heredoc = (heredoc ?? "") + H.body;
            }
            s += 1;
        }
        let x = w || k > 0;
        w = false;
        let [K, ...G] = uo(C, n);
        let W = K ?? (redirects.length > 0 || heredoc !== undefined ? {
            program: {
                text: ":",
                quoted: false,
                raw: ":"
            },
            args: [],
            assignments: []
        } : undefined);
        if (W === undefined) {
            continue;
        }
        let I = W.program.text;
        if (!W.program.quoted) {
            if (I === "case") {
                u += 1;
                let H = e[s];
                if (H?.kind === "op" && H.op === ")" && W.args.some((F)=>F.text === "in")) {
                    s += 1;
                } else {
                    h = true;
                }
                continue;
            }
            if (I === "esac") {
                u = Math.max(0, u - 1);
                continue;
            }
            if (I === "[[") {
                if (!C.some((H)=>H.text === "]]" && !H.quoted)) {
                    while(s < e.length){
                        let H = e[s];
                        if (H.kind === "word" && H.word.text === "]]" || H.kind === "op" && H.op === `
`) {
                            break;
                        }
                        s += 1;
                    }
                    if (e[s]?.kind === "word") {
                        s += 1;
                    }
                }
                continue;
            }
            if (Yr.has(I)) {
                if (redirects.length > 0 || heredoc !== undefined) {
                    commands.push({
                        program: {
                            text: ":",
                            quoted: false,
                            raw: ":"
                        },
                        args: [],
                        assignments: [],
                        redirects,
                        piped: x,
                        ...heredoc !== undefined && {
                            heredoc
                        }
                    });
                }
                continue;
            }
        }
        for (let H of [
            W,
            ...G
        ]){
            commands.push({
                ...H,
                redirects,
                piped: x,
                ...heredoc !== undefined && {
                    heredoc
                }
            });
        }
    }
}
function di(e, n, r) {
    let assignments = [];
    let u;
    let h = false;
    let w;
    let k = 0;
    while(true){
        while(k < e.length){
            let x = e[k];
            if (ni.test(We(x.raw))) {
                assignments.push(x);
            } else if (!(!x.quoted && lo.has(x.text))) {
                break;
            }
            k += 1;
        }
        let program = e[k];
        if (program === undefined) {
            if (assignments.length > 0) {
                return {
                    program: {
                        text: ":",
                        quoted: false,
                        raw: ":"
                    },
                    args: [],
                    assignments
                };
            }
            return undefined;
        }
        if (n.make && !program.quoted && /^[@+-]+./.test(program.text)) {
            let x = program.text.replace(/^[@+-]+/, "");
            program = {
                ...program,
                text: x,
                raw: x
            };
        }
        let S = program.text.slice(program.text.lastIndexOf("/") + 1).toLowerCase();
        if (!(io.has(S) || r.alsoLaunchers.has(S)) || /[ \t]/.test(program.text) || program.text.includes("/") && !r.anchored(program)) {
            if (r.stepsPastVariable === true && h && program.text.startsWith("$") && e[k + 1] !== undefined) {
                w ??= {
                    k,
                    kept: assignments.length
                };
                assignments.push(program);
                k += 1;
                continue;
            }
            let x = program.text.startsWith("$") && !/^\$\((?:\u2026|\(\u2026\))\)/.test(program.text);
            if (w !== undefined && (program.text.startsWith("-") || !x && (program.quoted || program.expands === true))) {
                return {
                    program: e[w.k],
                    args: e.slice(w.k + 1),
                    assignments: assignments.slice(0, w.kept)
                };
            }
            return {
                program,
                args: e.slice(k + 1),
                assignments
            };
        }
        if (S === "command") {
            let x = false;
            for(let K = k + 1; e[K]?.text.startsWith("-") === true; K += 1){
                x ||= Cit(e[K].text);
            }
            if (x) {
                return {
                    program,
                    args: e.slice(k + 1),
                    assignments
                };
            }
        }
        if (S === "runuser" && r.runuserIsSu) {
            u ??= Zr(e);
            if (!u[k + 1]) {
                return {
                    program,
                    args: e.slice(k + 1),
                    assignments
                };
            }
        }
        if (S === "busybox") {
            assignments.push(program);
            k += 1;
            continue;
        }
        assignments.push(program);
        h = true;
        w = undefined;
        k += 1;
        let C = Xr[S] ?? 0;
        let A = (x)=>(Jr[S]?.has(x) ?? false) || (r.alsoValued[S]?.has(x) ?? false);
        let R = false;
        while(k < e.length){
            let x = e[k].text;
            if (!R && x === "--") {
                assignments.push(e[k]);
                R = true;
                k += 1;
                continue;
            }
            if (!R && S === "env" && x === "-") {
                assignments.push({
                    ...e[k],
                    text: "-i"
                });
                k += 1;
                continue;
            }
            if (!R && x.startsWith("-") && x !== "-") {
                let K = r.takesNext(A, x);
                assignments.push(e[k]);
                if (K && e[k + 1] !== undefined) {
                    assignments.push(e[k + 1]);
                }
                k += K ? 2 : 1;
                continue;
            }
            if (C > 0 && (S !== "chrt" || /^\d+$/.test(x))) {
                assignments.push(e[k]);
                C -= 1;
                k += 1;
                continue;
            }
            break;
        }
    }
}
function uo(e, n) {
    return so.flatMap((r)=>{
        let s = di(e, n, r);
        if (s === undefined) {
            return [];
        }
        return [
            s
        ];
    }).filter((r, s, u)=>u.findIndex((h)=>h.program.raw === r.program.raw && h.args.length === r.args.length) === s);
}
function Jt(e) {
    return uo(e, {});
}
class Je {
    text;
    make;
    pos = 0;
    unreadable = null;
    bodies = [];
    comments = [];
    pending = [];
    lineIndex = null;
    strippedLineIndex = null;
    constructor(e, n){
        this.text = e;
        this.make = n;
    }
    fail(e) {
        this.unreadable ??= e;
    }
    pastContinuations(e, n = false) {
        while(true){
            let r = Gt(this.text, e);
            if (r !== e) {
                e = r;
            } else if (n && e < this.text.length && Vt.includes(this.text[e])) {
                e += 1;
            } else {
                return e;
            }
        }
    }
    tooDeep(e) {
        if (e < to) {
            return false;
        }
        this.fail("command substitutions nested too deeply");
        let n = 1;
        while(this.pos < this.text.length && n > 0){
            let r = this.text[this.pos];
            if (r === "(") {
                n += 1;
            } else if (r === ")") {
                n -= 1;
            }
            this.pos += 1;
        }
        return true;
    }
    tokens(e, n) {
        let text = this.text;
        let r_length = text.length;
        let u = [];
        let pending = this.pending;
        let w = 0;
        let k = 0;
        let y = false;
        let S = false;
        let C = true;
        let A = false;
        while(this.pos < r_length){
            let R = text[this.pos];
            if (Vt.includes(R)) {
                this.pos += 1;
                continue;
            }
            if (R === `
`) {
                this.pos += 1;
                if (pending.length > 0) {
                    this.readHeredocBodies(pending.splice(0), n);
                }
                if (e === "array") {
                    continue;
                }
                u.push({
                    kind: "op",
                    op: `
`
                });
                C = true;
                continue;
            }
            if (R === "\\" && text[this.pos + 1] === `
`) {
                this.pos += 2;
                continue;
            }
            if (R === "#") {
                let P = text.indexOf(`
`, this.pos);
                let N = P === -1 ? r_length : P;
                this.comments.push([
                    this.pos,
                    N
                ]);
                this.pos = N;
                continue;
            }
            if (e === "array") {
                if (R === ")") {
                    this.pos += 1;
                    return u;
                }
                if (";&|<>".includes(R) || R === "(") {
                    this.fail("an array assignment holds something other than words");
                    this.pos += 1;
                    continue;
                }
                u.push({
                    kind: "word",
                    word: this.readWord(n)
                });
                continue;
            }
            let x = this.pastContinuations(this.pos + 1);
            let K = R + (text[x] ?? "");
            let G = this.pastContinuations(x + 1);
            if (K === ";;" && text[G] === "&") {
                u.push({
                    kind: "op",
                    op: ";;&"
                });
                this.pos = G + 1;
                S = k > 0;
                C = true;
                continue;
            }
            if (K === "&&" || K === "||" || K === ";;" || K === ";&" || K === "|&") {
                u.push({
                    kind: "op",
                    op: K
                });
                this.pos = x + 1;
                if ((K === ";;" || K === ";&") && k > 0) {
                    S = true;
                }
                C = true;
                continue;
            }
            if (K === "((" && C) {
                let P = x + 1;
                let N = ro(text, P);
                if (N !== -1) {
                    this.collectExpansions(text.slice(P, N - 2), n);
                    this.pos = N;
                    C = false;
                    continue;
                }
            }
            if (R === "(") {
                this.pos += 1;
                if (S) {
                    continue;
                }
                w += 1;
                u.push({
                    kind: "op",
                    op: "("
                });
                C = true;
                continue;
            }
            if (R === ")") {
                this.pos += 1;
                if (S) {
                    u.push({
                        kind: "op",
                        op: ")"
                    });
                    S = false;
                    C = true;
                    continue;
                }
                if (w > 0) {
                    w -= 1;
                    u.push({
                        kind: "op",
                        op: ")"
                    });
                    C = true;
                    continue;
                }
                if (e === "paren") {
                    return u;
                }
                this.fail("a closing parenthesis that closes nothing");
                u.push({
                    kind: "op",
                    op: ")"
                });
                continue;
            }
            if (R === "&" && text[x] === ">") {
                this.pos = text[G] === ">" ? G + 1 : x + 1;
                this.pos = this.pastContinuations(this.pos, true);
                if (this.pos < r_length && !`
;&|()`.includes(text[this.pos])) {
                    u.push({
                        kind: "redirect",
                        op: "&>",
                        word: this.readWord(n)
                    });
                }
                C = false;
                continue;
            }
            if (R === ";" || R === "&" || R === "|") {
                u.push({
                    kind: "op",
                    op: R
                });
                this.pos += 1;
                C = true;
                continue;
            }
            if (R === "<" || R === ">") {
                if (text[x] === "(") {
                    u.push({
                        kind: "word",
                        word: this.readWord(n)
                    });
                    C = false;
                    continue;
                }
                let P = x;
                let N = K;
                let z = N === "<<" ? this.pastContinuations(P + 1) : P;
                if (N === "<<" && text[z] !== "<") {
                    this.pos = z;
                    let strip = false;
                    if (text[this.pos] === "-") {
                        if (z !== P + 1) {
                            this.fail('a heredoc "-" that only a joined line continuation puts next to the <<');
                        }
                        strip = true;
                        this.pos = this.pastContinuations(this.pos + 1);
                    }
                    this.pos = this.pastContinuations(this.pos, true);
                    let Z = this.readWord(n, true);
                    if (Z.raw !== "") {
                        if (ai.test(We(Z.raw))) {
                            this.fail("a heredoc delimiter this reading cannot spell as the shell does");
                        }
                        if (Z.text === "" && !Z.quoted) {
                            this.fail("a heredoc delimiter that reads as empty");
                        }
                        let token = {
                            kind: "heredoc",
                            body: null
                        };
                        u.push(token);
                        C = false;
                        pending.push({
                            token,
                            delimiter: Z.text,
                            strip,
                            expand: !Z.quoted
                        });
                    }
                    continue;
                }
                let V = N === "<<" ? "<<<" : [
                    ">>",
                    ">&",
                    "<&",
                    ">|",
                    "<>"
                ].includes(N) ? N : R;
                this.pos = V === "<<<" ? z + 1 : V.length === 2 ? P + 1 : this.pos + 1;
                this.pos = this.pastContinuations(this.pos, true);
                if (this.pos < r_length && !`
;&|()`.includes(text[this.pos])) {
                    u.push({
                        kind: "redirect",
                        op: V,
                        word: this.readWord(n)
                    });
                }
                C = false;
                continue;
            }
            if (R === "{" || R === "}") {
                let P = this.pastContinuations(this.pos + 1);
                let N = P >= r_length || (Vt + `
;&|()<>`).includes(text[P]);
                if (N && C) {
                    u.push({
                        kind: "op",
                        op: R
                    });
                    this.pos += 1;
                    C = true;
                    continue;
                }
                if (N && R === "{") {
                    this.fail("a { that may open a group or may be an argument");
                }
            }
            let W = /^[A-Za-z_][A-Za-z0-9_]*\+?=\(/.exec(text.slice(this.pos, this.pos + 256));
            if (W !== null) {
                let P = this.pos;
                this.pos += W[0].length;
                if (!this.tooDeep(n + 1)) {
                    this.tokens("array", n + 1);
                }
                let N = text.slice(P, this.pos);
                u.push({
                    kind: "word",
                    word: {
                        text: N,
                        quoted: false,
                        raw: N
                    }
                });
                C = false;
                continue;
            }
            let word = this.readWord(n);
            if (word.raw === "") {
                this.pos += 1;
                continue;
            }
            if (/^[0-9]+$/.test(We(word.raw)) && (text[this.pos] === "<" || text[this.pos] === ">")) {
                continue;
            }
            u.push({
                kind: "word",
                word
            });
            if (!word.quoted) {
                if (C && word.text === "case") {
                    y = true;
                } else if (y && word.text === "in") {
                    y = false;
                    k += 1;
                    S = true;
                } else if (word.text === "esac" && k > 0 && (C || S)) {
                    k -= 1;
                    S = false;
                }
            }
            let H = C;
            let F = A;
            A = H && !word.quoted && ti.has(word.text);
            C = F || H && !word.quoted && (lo.has(word.text) || Qr.has(word.text));
        }
        if (e === "eof") {
            pending.splice(0);
        }
        if (k > 0 || S) {
            this.fail("a case statement that is never closed");
        }
        if (e !== "eof") {
            this.fail(e === "array" ? "an array assignment that is never closed" : "a $( or ( that is never closed");
        }
        return u;
    }
    readWord(e, n = false) {
        let text = this.text;
        let r_length = text.length;
        let pos = this.pos;
        let h = "";
        let quoted = false;
        let expands = false;
        while(this.pos < r_length){
            let S = text[this.pos];
            if (S === "'") {
                quoted = true;
                let C = text.indexOf("'", this.pos + 1);
                if (C === -1) {
                    this.fail("a single quote that is never closed");
                    h += text.slice(this.pos + 1);
                    this.pos = r_length;
                    break;
                }
                h += text.slice(this.pos + 1, C);
                this.pos = C + 1;
                continue;
            }
            if (S === "$" && text[this.pos + 1] === "'") {
                quoted = true;
                {
                    let C = text.indexOf("'", this.pos + 2);
                    if (text.slice(this.pos + 2, C === -1 ? r_length : C).includes("\\")) {
                        expands = true;
                    }
                }
                this.pos += 2;
                while(this.pos < r_length && text[this.pos] !== "'"){
                    if (text[this.pos] === "\\" && this.pos + 1 < r_length) {
                        h += text[this.pos + 1];
                        this.pos += 2;
                    } else {
                        h += text[this.pos];
                        this.pos += 1;
                    }
                }
                if (this.pos >= r_length) {
                    this.fail("a $' quote that is never closed");
                    break;
                }
                this.pos += 1;
                continue;
            }
            if (S === '"' || S === "$" && text[this.pos + 1] === '"') {
                quoted = true;
                this.pos += S === "$" ? 2 : 1;
                while(this.pos < r_length && text[this.pos] !== '"'){
                    let C = text[this.pos];
                    if (C === "\\" && this.pos + 1 < r_length) {
                        h += text[this.pos + 1] === `
` ? "" : text[this.pos + 1];
                        this.pos += 2;
                    } else if (!n && C === "$" && text[this.pastContinuations(this.pos + 1)] === "(") {
                        h += this.readDollarParen(e, this.pastContinuations(this.pos + 1));
                    } else if (!n && C === Ke) {
                        h += this.readBackticks(e);
                    } else if (C === "$" && text[this.pastContinuations(this.pos + 1)] === "{") {
                        h += this.readParameterExpansion(e, this.pastContinuations(this.pos + 1));
                        expands = true;
                    } else {
                        if (C === "$") {
                            expands = true;
                        }
                        h += C;
                        this.pos += 1;
                    }
                }
                if (this.pos >= r_length) {
                    this.fail("a double quote that is never closed");
                    break;
                }
                this.pos += 1;
                continue;
            }
            if (S === "\\" && this.pos + 1 < r_length) {
                if (text[this.pos + 1] !== `
`) {
                    h += text[this.pos + 1];
                    quoted = true;
                }
                this.pos += 2;
                continue;
            }
            if (S === "$" && text[this.pastContinuations(this.pos + 1)] === "{") {
                h += this.readParameterExpansion(e, this.pastContinuations(this.pos + 1));
                expands = true;
                continue;
            }
            if (!n && S === "$" && text[this.pastContinuations(this.pos + 1)] !== "(") {
                expands = true;
            }
            if (!n && S === "$" && text[this.pastContinuations(this.pos + 1)] === "(") {
                h += this.readDollarParen(e, this.pastContinuations(this.pos + 1));
                quoted = true;
                expands = true;
                continue;
            }
            if (!n && S === Ke) {
                h += this.readBackticks(e);
                quoted = true;
                expands = true;
                continue;
            }
            if (!n && (S === "<" || S === ">") && text[this.pastContinuations(this.pos + 1)] === "(") {
                this.pos = this.pastContinuations(this.pos + 1) + 1;
                if (!this.tooDeep(e + 1)) {
                    this.bodies.push(this.tokens("paren", e + 1));
                }
                h += `${S}(…)`;
                quoted = true;
                continue;
            }
            if (oi.includes(S)) {
                break;
            }
            h += S;
            this.pos += 1;
        }
        let y = text.slice(pos, this.pos);
        if (/\{[^{}'"]*(?:,|\.\.)[^{}'"]*\}/.test(y.replace(/'[^']*'|"[^"]*"/g, ""))) {
            expands = true;
        }
        return {
            text: h,
            quoted,
            raw: y,
            ...expands && {
                expands
            }
        };
    }
    readParameterExpansion(e, n = this.pos + 1) {
        let text = this.text;
        let r_length = text.length;
        this.pos = n + 1;
        let u = (pos)=>no.test(text[this.pastContinuations(pos)] ?? "");
        if (u(this.pos)) {
            this.fail("a ${ …; } command substitution");
        }
        let h = 1;
        let w = false;
        while(this.pos < r_length && h > 0){
            let y = text[this.pos];
            if (y === "\\") {
                this.pos += 2;
            } else if (y === '"') {
                w = !w;
                this.pos += 1;
            } else if (y === "'" && !w) {
                let S = text.indexOf("'", this.pos + 1);
                let C = S === -1 ? r_length : S;
                this.collectExpansions(text.slice(this.pos + 1, C), e);
                this.pos = S === -1 ? r_length : S + 1;
            } else if (y === "'") {
                this.pos += 1;
            } else if (y === "$" && text[this.pastContinuations(this.pos + 1)] === "(") {
                this.readDollarParen(e, this.pastContinuations(this.pos + 1));
            } else if (y === Ke) {
                this.readBackticks(e);
            } else if (y === "$" && text[this.pastContinuations(this.pos + 1)] === "{") {
                h += 1;
                this.pos = this.pastContinuations(this.pos + 1) + 1;
                if (u(this.pos)) {
                    this.fail("a ${ …; } command substitution");
                }
            } else {
                if (y === "}" && !w) {
                    h -= 1;
                }
                this.pos += 1;
            }
        }
        if (h > 0) {
            this.fail("a ${ that is never closed");
        }
        let k = We(text.slice(n, this.pos));
        if (oo.test(k)) {
            this.fail("a ${ …@P } expansion");
        }
        return `\$${k}`;
    }
    readDollarParen(e, n = this.pos + 1) {
        let text = this.text;
        if (text[n + 1] === "(") {
            let h = ro(text, n + 2);
            if (h !== -1) {
                this.collectExpansions(text.slice(n + 2, h - 2), e);
                this.pos = h;
                return "$((…))";
            }
        }
        this.pos = n + 1;
        if (this.tooDeep(e + 1)) {
            return "$(…)";
        }
        let pos = this.pos;
        let u = this.tokens("paren", e + 1);
        if (this.make) {
            let h = u[0];
            if (h?.kind === "word" && /^(?:shell|eval|call)$/.test(h.word.text)) {
                this.bodies.push(u.slice(1));
                return "$(…)";
            }
            return `\$(${this.text.slice(pos, Math.max(pos, this.pos - 1))})`;
        }
        this.bodies.push(u);
        return "$(…)";
    }
    readBackticks(e) {
        let text = this.text;
        let n_length = text.length;
        let s = this.pos + 1;
        while(s < n_length && text[s] !== Ke){
            s += text[s] === "\\" ? 2 : 1;
        }
        if (s >= n_length) {
            this.fail("a backtick that is never closed");
        }
        let u = new Je(text.slice(this.pos + 1, Math.min(s, n_length)).replace(/\\([$\x60\\])/g, "$1"), this.make);
        if (e + 1 > to) {
            this.fail("command substitutions nested too deeply");
        } else {
            this.bodies.push(u.tokens("eof", e + 1), ...u.bodies);
            if (u.unreadable !== null) {
                this.fail(u.unreadable);
            }
        }
        this.pos = Math.min(s + 1, n_length);
        return "$(…)";
    }
    collectExpansions(e, n) {
        if (oo.test(We(e))) {
            this.fail("a ${ …@P } expansion");
        }
        let r = 0;
        while(r < e.length){
            let s = e[r];
            let u = s === "$" ? Gt(e, r + 1) : r + 1;
            if (s === "$" && e[u] === "(") {
                let h = new Je(e.slice(r), this.make);
                h.readDollarParen(n, u - r);
                this.bodies.push(...h.bodies);
                if (h.unreadable !== null) {
                    this.fail(h.unreadable);
                }
                r += Math.max(h.pos, 1);
                continue;
            }
            if (s === "$" && e[u] === "{") {
                if (no.test(e[Gt(e, u + 1)] ?? "")) {
                    this.fail("a ${ …; } command substitution");
                }
            }
            if (s === "\\") {
                r += 2;
            } else if (s === Ke) {
                let h = new Je(e.slice(r), this.make);
                h.readBackticks(n);
                this.bodies.push(...h.bodies);
                if (h.unreadable !== null) {
                    this.fail(h.unreadable);
                }
                r += Math.max(h.pos, 1);
            } else {
                r += 1;
            }
        }
    }
    readHeredocBodies(e, n) {
        for (let r of e){
            let s = this.findLine(r.delimiter, this.pos, r.strip);
            let u = s === -1 ? -1 : this.text.indexOf(`
`, s);
            if (r.expand && s !== -1 && this.unreadable === null && ri.test(this.text.slice(this.pos, s))) {
                ({ at: s, lineEnd: u } = this.findJoinedLine(r.delimiter, this.pos, r.strip));
            }
            if (s === -1) {
                this.fail("a heredoc is never terminated");
                break;
            }
            let h = this.text.slice(this.pos, s);
            if (r.expand) {
                this.collectExpansions(We(h), n);
            }
            r.token.body = r.expand ? si(h) : h;
            this.pos = u === -1 ? this.text.length : u + 1;
        }
    }
    findJoinedLine(e, n, r) {
        let text = this.text;
        let u = n;
        while(u <= text.length){
            let h = "";
            let w = u;
            let lineEnd = -1;
            while(true){
                lineEnd = text.indexOf(`
`, w);
                let y = text.slice(w, lineEnd === -1 ? text.length : lineEnd);
                let S = lineEnd !== -1 && ii.test(y);
                h += S ? y.slice(0, -1) : y;
                if (!S) {
                    break;
                }
                w = lineEnd + 1;
            }
            if ((r ? h.replace(/^\t+/, "") : h) === e) {
                return {
                    at: u,
                    lineEnd
                };
            }
            if (lineEnd === -1) {
                return {
                    at: -1,
                    lineEnd: -1
                };
            }
            u = lineEnd + 1;
        }
        return {
            at: -1,
            lineEnd: -1
        };
    }
    findLine(e, n, r) {
        if (this.lineIndex === null) {
            let w = new Map;
            let k = new Map;
            let y = 0;
            for (let S of this.text.split(`
`)){
                let C = (A, R)=>{
                    let x = A.get(R);
                    if (x === undefined) {
                        A.set(R, [
                            y
                        ]);
                    } else {
                        x.push(y);
                    }
                };
                C(w, S);
                C(k, S.replace(/^\t+/, ""));
                y += S.length + 1;
            }
            this.lineIndex = w;
            this.strippedLineIndex = k;
        }
        let s = (r ? this.strippedLineIndex : this.lineIndex).get(e);
        if (s === undefined) {
            return -1;
        }
        let u = 0;
        let s_length = s.length;
        while(u < s_length){
            let w = u + s_length >> 1;
            if (s[w] < n) {
                u = w + 1;
            } else {
                s_length = w;
            }
        }
        if (u < s.length) {
            return s[u];
        }
        return -1;
    }
}
function ro(text, n) {
    let r = Math.min(text.length, n + 4096);
    let s = n;
    let u = 0;
    while(s < r){
        let h = text[s];
        if (h === "'" || h === '"') {
            let w = text.indexOf(h, s + 1);
            s = w === -1 ? r : w + 1;
            continue;
        }
        if (h === "(") {
            u += 1;
        } else if (h === ")") {
            if (u === 0) {
                if (text[s + 1] === ")") {
                    return s + 2;
                }
                return -1;
            }
            u -= 1;
        }
        s += 1;
    }
    return -1;
}
const ui = new Set([
    "DEVELOPER_DIR",
    "MAKEFILES",
    "MAKEFLAGS",
    "GNUMAKEFLAGS",
    "AWKPATH",
    "AWKLIBPATH",
    "GOFLAGS",
    "RUSTFLAGS",
    "GIT_EDITOR",
    "GIT_SEQUENCE_EDITOR",
    "GIT_EXTERNAL_DIFF",
    "GIT_PROXY_COMMAND",
    "SUDO_ASKPASS",
    "ZDOTDIR",
    "CDPATH",
    "GCONV_PATH",
    "NLSPATH",
    "DOTNET_STARTUP_HOOKS",
    "npm_config_node_options",
    "NPM_CONFIG_NODE_OPTIONS",
    "LESSOPEN",
    "LESSCLOSE",
    "MANPAGER",
    "MAVEN_OPTS",
    "GRADLE_OPTS",
    "OPENSSL_ENGINES",
    "SHELLOPTS",
    "BASHOPTS",
    "PS4",
    "PROMPT_COMMAND",
    "GIT_SSH_COMMAND",
    "GIT_SSH",
    "GIT_EXEC_PATH",
    "GIT_ASKPASS",
    "SSH_ASKPASS",
    "GIT_PAGER",
    "PAGER",
    "EDITOR",
    "VISUAL",
    "BROWSER",
    "PYTHONWARNINGS",
    "PYTHONBREAKPOINT",
    "PERL5DB",
    "NODE_REPL_EXTERNAL_MODULE",
    "JAVA_TOOL_OPTIONS",
    "_JAVA_OPTIONS",
    "JDK_JAVA_OPTIONS",
    "NODE_OPTIONS",
    "NODE_COMPILE_CACHE",
    "PYTHONSTARTUP",
    "PYTHONHOME",
    "PYTHONUSERBASE",
    "BASH_ENV",
    "ENV",
    "PERL5OPT",
    "RUBYOPT",
    "GEM_HOME",
    "RUBYGEMS_GEMDEPS",
    "BUNDLE_GEMFILE",
    "OPENSSL_CONF",
    "OPENSSL_MODULES",
    "DYLD_INSERT_LIBRARIES",
    "LD_PRELOAD",
    "LD_AUDIT"
]);
const fi = /^(?:DYLD_|LD_|BASH_FUNC_|GIT_CONFIG_|LUA_C?PATH)/;
const hi = /^(?:GH_BROWSER|RSYNC_RSH|CVS_RSH|SOPS_GPG_EXEC|PERL5SHELL|RUBYSHELL|JAVACMD|CLOUDSDK_PYTHON|UV_PYTHON|RUSTC_WRAPPER|RUSTC_WORKSPACE_WRAPPER|npm_config_script_shell|NPM_CONFIG_SCRIPT_SHELL|R_(?:PROFILE|ENVIRON)(?:_USER)?|TAR_OPTIONS|BUN_OPTIONS|TF_CLI_ARGS\w*|CARGO_ALIAS_\w+|[A-Z0-9][A-Z0-9_]*_(?:EXTERNAL_DIFF|PAGER|EDITOR))$/;
const pi = /^(?![\/~$-])(?:[^\s]*\/[^\s]*|[^\s\/]+\.(?:sh|bash|zsh|fish|py|rb|pl|js|mjs|cjs|ts|php|lua|R|r|ps1|awk|tcl|exs?|jl))$/;
function mi(e) {
    return ui.has(e) || fi.test(e);
}
function wo(e) {
    return (e.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) ?? []).map((n)=>n.replace(/["']/g, ""));
}
function gi(e, home) {
    let r = e.replace(/\/+$/, "");
    if (!r.startsWith("/") || r === "") {
        return [];
    }
    let s = home !== "" && home !== "/" && (r === home || r.startsWith(`${home}/`)) ? r.slice(home.length) : null;
    let u = s === "" ? "/" : s;
    if (s === null) {
        return [
            r
        ];
    }
    return [
        r,
        `~${u}`,
        `$HOME${u}`,
        `$HOME"${u}`,
        `\${HOME}${u}`,
        `\${HOME}"${u}`
    ];
}
const ki = /(?:^|[\s"'=(`:;&|<>])\.\.?\/|\bprocess\.cwd\(\)|\bos\.getcwd\(\)|\bPath\.cwd\(\)|\bDir\.pwd\b|\bgit\b[^\n]{0,12}\brev-parse\b[^\n]{0,6}--show-toplevel\b/im;
const wi = /\$PWD\b|\$\{PWD\b|\$\(pwd(?:[ \t]+-[LP])?\)|`pwd`/im;
const _i = /^(?:bash|sh|zsh|dash|ash|(?:pd|lo|o|m|r)?ksh[0-9]*|rbash|fish|csh|tcsh|yash|posh|[oy]sh)$/i;
const $e = new Set([
    "bash",
    "sh",
    "zsh",
    "dash",
    "ash",
    "ksh",
    "mksh",
    "rbash",
    "fish",
    "csh",
    "tcsh",
    "pwsh",
    "yash",
    "posh",
    "osh",
    "ysh",
    "pdksh",
    "loksh",
    "oksh"
]);
const en = new Set([
    "python",
    "pypy",
    "node",
    "nodejs",
    "ruby",
    "perl",
    "php",
    "lua",
    "tsx",
    "ts-node",
    "bb",
    "awk",
    "gawk",
    "osascript",
    "expect",
    "tclsh",
    "wish",
    "rscript",
    "irb",
    "erb",
    "nawk",
    "mawk",
    "sed",
    "gsed",
    "m4"
]);
const vi = {
    julia: /\.jl$/,
    elixir: /\.exs?$/,
    groovy: /\.groovy$/,
    racket: /\.rkt$/,
    guile: /\.scm$/,
    sbcl: /\.(?:lisp|cl)$/
};
const yi = new Set([
    "bmake",
    "pmake",
    "gnumake",
    "make",
    "gmake",
    "ninja",
    "nix-build",
    "nix-instantiate",
    "nix-env",
    "ctest",
    "meson",
    "cmake",
    "bazel",
    "bazelisk",
    "npm",
    "npx",
    "pnpm",
    "yarn",
    "bun",
    "bunx",
    "lint-staged",
    "npm-run-all",
    "run-p",
    "run-s",
    "turbo",
    "nx",
    "lerna",
    "lefthook",
    "gulp",
    "grunt",
    "eslint",
    "prettier",
    "jest",
    "vitest",
    "mocha",
    "ava",
    "playwright",
    "cypress",
    "webpack",
    "rollup",
    "vite",
    "babel",
    "postcss",
    "tailwindcss",
    "next",
    "tsc",
    "commitlint",
    "stylelint",
    "uv",
    "pip",
    "pip3",
    "poetry",
    "pipenv",
    "hatch",
    "pdm",
    "rye",
    "pytest",
    "tox",
    "nox",
    "pylint",
    "flake8",
    "mypy",
    "pre-commit",
    "cargo",
    "rake",
    "bundle",
    "rspec",
    "rubocop",
    "rails",
    "composer",
    "phpunit",
    "phpstan",
    "psalm",
    "gradle",
    "gradlew",
    "mvn",
    "mvnw",
    "scons",
    "ant",
    "hg",
    "sbt",
    "lein",
    "clj",
    "clojure",
    "stack",
    "cabal",
    "mix",
    "dotnet",
    "msbuild",
    "swift",
    "xcodebuild",
    "pod",
    "fastlane",
    "just",
    "task",
    "terraform",
    "tofu",
    "terragrunt",
    "snakemake",
    "vagrant",
    "docker-compose",
    "podman-compose",
    "devbox",
    "mise",
    "asdf"
]);
const fo = /^--(?:version|help)$/;
const Si = {
    go: new Set([
        "generate",
        "run",
        "test",
        "build",
        "install",
        "get",
        "vet",
        "tool"
    ]),
    deno: new Set([
        "task",
        "test",
        "bench",
        "lint",
        "fmt",
        "check"
    ]),
    docker: new Set([
        "compose",
        "build",
        "buildx"
    ]),
    podman: new Set([
        "compose",
        "build"
    ]),
    nix: new Set([
        "develop",
        "run",
        "build",
        "shell",
        "flake",
        "eval",
        "profile",
        "bundle",
        "print-dev-env",
        "fmt",
        "repl"
    ]),
    node: new Set([
        "--run",
        "--test"
    ])
};
const ho = {
    python: new Set([
        "-W",
        "-X",
        "--check-hash-based-pycs"
    ]),
    pypy: new Set([
        "-W",
        "-X"
    ]),
    node: new Set([
        "-e",
        "--eval",
        "-p",
        "--print",
        "-r",
        "--require",
        "--import",
        "--loader",
        "--experimental-loader",
        "-C",
        "--conditions",
        "--input-type",
        "--title"
    ]),
    ruby: new Set([
        "-e",
        "-r",
        "--require",
        "-I",
        "-C",
        "-E",
        "-F"
    ]),
    perl: new Set([
        "-e",
        "-E",
        "-M",
        "-m",
        "-I"
    ]),
    php: new Set([
        "-r",
        "-d",
        "--define",
        "-c",
        "--php-ini",
        "-B",
        "-R",
        "-F",
        "-E",
        "-z",
        "--zend-extension",
        "-f",
        "--file"
    ]),
    osascript: new Set([
        "-l",
        "-s"
    ]),
    lua: new Set([
        "-e",
        "-l"
    ]),
    tsx: new Set([
        "-e",
        "--eval",
        "-r",
        "--require",
        "--import",
        "--tsconfig"
    ]),
    "ts-node": new Set([
        "-e",
        "--eval",
        "-r",
        "--require",
        "-P",
        "--project",
        "-O",
        "--compilerOptions"
    ])
};
function rn(e, n) {
    switch(e){
        case "node":
        case "nodejs":
        case "tsx":
        case "ts-node":
            return /^(?:-e|--eval|-p|--print)$/.test(n) || /^-[a-zA-Z]*[ep]$/.test(n);
        case "python":
        case "pypy":
            return /^-[bBdEhiIOPqRsSuvVx]*[cm]/.test(n);
        case "perl":
            return /^-[acfgnpsStTuUwWXl0-9]*[eE]$/.test(n);
        case "ruby":
            return /^-[acdhlnpsSUvwy]*e$/.test(n);
        case "php":
            return /^-[aeHilmnqsvw]*[rRBE]$/.test(n);
        case "lua":
        case "bb":
        case "osascript":
        case "rscript":
        case "erb":
            return n === "-e";
        default:
            return false;
    }
}
const bi = /\bimport\b|__import__|\bexec\b/;
function Ct({ text }) {
    return text.slice(text.lastIndexOf("/") + 1).toLowerCase();
}
function Ri(e) {
    return e.replace(/^(python|pypy|perl|ruby|php|lua|node|nodejs|ksh|tclsh|wish)[0-9.]+t?$/, "$1");
}
function Ei(e) {
    return $e.has(e) || en.has(e) || Hmr.test(e);
}
function _o(e) {
    return /^[\/~$]|^[<>]\(/.test(e.text) && !/^~[+-]/.test(e.text);
}
function Ce(e) {
    return e !== undefined && e.text !== "" && !_o(e) && !e.text.startsWith("-");
}
function Dt({ program, args, assignments, redirects, heredoc, piped }, w, k = {
    roots: [],
    home: "",
    fromPayload: false
}) {
    let R = assignments.findIndex((M)=>Ct(M) === "flock");
    let x = R === -1 ? undefined : Hi(assignments, R);
    let K = [
        ...assignments.filter((M, B)=>B !== x?.at),
        .../^(?:export|declare|typeset|local|readonly)$/.test(program.text) ? args : []
    ];
    let G = go(K, k.shell === "zsh");
    if (G !== undefined && k.standing === undefined) {
        return G;
    }
    let W = assignments.find((M)=>ct(M, k));
    if (W !== undefined) {
        return `it names ${W.text}`;
    }
    let I = $i(assignments, w, [
        program,
        ...args
    ]);
    if (I !== undefined && (k.standing === undefined || yo.has(I))) {
        return Tt(I, k);
    }
    let H = program.text === ":" ? assignments.findIndex((M)=>/^(?:sudo|doas)$/.test(Ct(M))) : -1;
    if (H !== -1 && assignments.some((M, B)=>B > H && (nde(M.text, "si") || M.text === "--shell" || M.text === "--login"))) {
        return Tt(nn.sudo, k);
    }
    if (x !== undefined) {
        let M = bo(x.text, {
            redirects,
            heredoc,
            piped
        }, w, k);
        if (M !== undefined && k.standing === undefined) {
            return M;
        }
    }
    if (program.text === "setenv" || program.text === "set" && /^-[a-zA-Z]*x/.test(args[0]?.text ?? "")) {
        let M = program.text === "setenv" ? 0 : 1;
        let B = args[M];
        let Y = go(B === undefined ? [] : [
            {
                ...B,
                text: `${B.text}=${args.slice(M + 1).map((J)=>J.text).join(":")}`
            }
        ]);
        if (Y !== undefined) {
            return Y;
        }
    }
    if (program.text === "unset" && args.some((M)=>M.text.startsWith("GIT_CONFIG"))) {
        return "it unsets a GIT_CONFIG variable";
    }
    if (program.text === "unset" && args.some((M)=>M.text === "PATH")) {
        return "it unsets PATH";
    }
    if (program.expands && !/^\$/.test(program.text)) {
        return "it runs a command whose name is built by an expansion";
    }
    if (/^\$\(\u2026\)/.test(program.text)) {
        return "it runs a command held in a variable or produced by another command";
    }
    if (/^\$/.test(program.text)) {
        if (ct(program, k)) {
            return `it names ${program.text}`;
        }
        let M = /^\$\{?([A-Za-z_][A-Za-z0-9_]*)\}?\//.exec(program.text)?.[1];
        if (M !== undefined && k.relativeNames?.has(M) === true) {
            return "it runs a file by a relative path";
        }
        if (/^\$[({](?:CURDIR|PWD)[)}]/.test(program.text)) {
            return "it uses its working directory";
        }
        let B = program.text.replace(/^\$\{[^}]*\}|^\$\([^)]*\)|^\$[A-Za-z_][A-Za-z0-9_]*/, "");
        if (B !== program.text && /^[^\/~$].*\//.test(B)) {
            return "it runs a file by a relative path";
        }
        let Y = k.make === true && /^(?:\$[({][A-Za-z_]+[)}])*\$[({]MAKE[)}]$/.test(program.text) ? "make" : /:-([^}]+)\}$/.exec(program.text)?.[1];
        if (Y === undefined) {
            if (k.fromPayload) {
                return "it runs a command held in a variable or produced by another command";
            }
            let J = args.find((ee)=>!ee.text.startsWith("-"));
            if (J !== undefined && Ce(J) && (J.text.includes("/") || /\.[A-Za-z0-9]{1,5}$/.test(J.text))) {
                return "it runs a file by a relative path";
            }
            if (!/^\/(?:.*\/)?[^\/$]+$/.test(B)) {
                return;
            }
            let L = Ct(program);
            if (ao(L) && L !== "runuser") {
                if (anchored(program) && !/[ \t]/.test(program.text)) {
                    return undefined;
                }
                return Xt([
                    {
                        text: L,
                        quoted: false,
                        raw: L
                    },
                    ...args
                ], piped, w, k, true);
            }
        } else {
            program = {
                ...program,
                text: Y
            };
        }
    }
    if (program.quoted && /[ \t]/.test(program.text) && !program.text.includes("/")) {
        w.push(program.text);
        return;
    }
    let F = Ri(Ct(program));
    let P = [
        program,
        ...args,
        ...redirects.map((M)=>M.target)
    ].find((M)=>ct(M, k));
    if (P !== undefined) {
        return `it names ${P.text}`;
    }
    if (program.text.includes("/") && !_o(program) && !program.text.endsWith("/")) {
        return "it runs a file by a relative path";
    }
    if (k.standing === undefined && /(?:^|[^$])\{[-+]?\d*[.\/#%+]{0,4}\}/.test(program.text)) {
        return "it runs a file by a relative path";
    }
    if (F === "for" || F === "select") {
        if (args.slice(args.findIndex((B)=>B.text === "in") + 1).some((B)=>Ce(B) && /[\/*?[]/.test(B.text))) {
            return "it loops over files by a relative name";
        }
        return undefined;
    }
    if (F === "source" || program.text === ".") {
        let M = args[0]?.text === "--" ? args[1] : args[0];
        if (M !== undefined && Ue(M)) {
            if (heredoc !== undefined && M.text !== "<(…)") {
                w.push(heredoc);
                return;
            }
            return "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a file descriptor";
        }
        if (Ce(M)) {
            return "it sources a file by a relative name";
        }
        return undefined;
    }
    let N = Mi(F, args);
    if (N === "reads_input") {
        return Tt(nn[F], k);
    }
    if (N !== undefined) {
        if (N !== "held") {
            for (let M of N.lines ?? []){
                w.push(M);
            }
        }
        if (N === "held" || N.held) {
            return `it runs ${F} with a command or file this machine cannot verify`;
        }
        return (N.words ?? []).map((M)=>Xt(M, piped, w, k)).find((M)=>M !== undefined);
    }
    if (yi.has(F) || po(F, args) !== undefined) {
        if (F !== "hg" && args.length > 0 && args.every((M)=>fo.test(M.text))) {
            return undefined;
        }
        return "it runs a project tool, such as make or npm";
    }
    let z = F === "rscript" ? Xe(F, args) : undefined;
    if (Ci.has(F) && !(F === "rscript" && (typeof z === "object" ? args.slice(0, args.indexOf(z)) : args).some((M)=>M.text === "--vanilla"))) {
        return `it runs ${F}`;
    }
    if ($e.has(F) || en.has(F) || program.text === ":" && x === undefined) {
        let M = $e.has(F);
        let B = program.text !== ":" && (M ? Di(F, args) : Pi(F, args));
        if (!B) {
            for (let { op, target } of redirects){
                if ((op === "<" || op === "<>") && (Ce(target) || Ue(target))) {
                    if (program.text === ":") {
                        return "it reads a compound command's input from a file in the launch directory";
                    }
                    return "it runs a script by a relative name";
                }
                if (op === "<<<" && $e.has(F)) {
                    if (/^\$/.test(target.text.trim())) {
                        return "it runs a command held in a variable or produced by another command";
                    }
                    w.push(target.text);
                }
            }
            if (heredoc !== undefined && $e.has(F)) {
                w.push(heredoc);
            }
        }
        let Y = M && !B && heredoc === undefined && !redirects.some((J)=>/^<(?!>)/.test(J.op) || J.op === "<>");
        if (!B && program.text !== ":" && (piped || Y || !$e.has(F) && (heredoc !== undefined || redirects.some((J)=>J.op === "<<<")))) {
            if (F === "python" || F === "pypy") {
                return ko(args);
            }
            return "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a file descriptor";
        }
    }
    if ($e.has(F)) {
        return Ai(F, args, w, k, {
            redirects,
            heredoc,
            piped
        });
    }
    if (F === "python" || F === "pypy") {
        let M = ko(args);
        if (M !== undefined) {
            return M;
        }
    } else if (F === "perl") {
        if (args.some((M, B)=>{
            let Y = /^-[acnpsTtwWX]*(?:I([\s\S]*)|[Mm]lib(?:=([\s\S]*)|(\s[\s\S]*))?)$/.exec(M.text);
            return Y !== null && (Y[1] !== undefined ? ut(It(args, Y[1], B), k) : Y[3] !== undefined ? Y[3].trim() !== "" : (Y[2] ?? "").split(",").some((J)=>J !== "" && ut({
                    value: J,
                    tildeLiteral: true
                }, k)));
        })) {
            return "it runs perl with -I or the lib pragma";
        }
    } else if (F === "ruby") {
        let M = Xe("ruby", args);
        let B = typeof M === "object" && args.includes(M) ? args.slice(0, args.indexOf(M)) : args;
        if (B.some((Y, J)=>{
            let L = /^-[acdlnpsvwy]*I(.*)$/.exec(Y.text);
            if (L !== null) {
                return It(B, L[1], J).value.split(":").some((ie, ae, ne)=>(ie !== "" || ne.length === 1) && ut({
                        value: ie,
                        tildeLiteral: false
                    }, k));
            }
            let ee = /^(?:-[acdlnpsvwy]*r|--require=?)([\s\S]*)$/.exec(Y.text);
            if (ee === null) {
                return false;
            }
            let { value } = It(B, ee[1], J);
            return /^\.\.?\//.test(value) || /^bundler(?:\/+setup(?:\.rb)?)?$/i.test(value) || ct({
                text: value,
                quoted: false,
                raw: value
            }, k);
        })) {
            return "it runs ruby with -I or -r";
        }
    } else if (F === "node" || F === "nodejs" || F === "tsx" || F === "ts-node") {
        if (args.some((Y, J)=>/^(?:-r|--require|--import|--(?:experimental-)?loader)(?:=|$)/.test(Y.text) && !/^(?:\/|node:)/.test(Y.text.includes("=") ? Y.text.split("=")[1] ?? "" : args[J + 1]?.text ?? ""))) {
            return "it runs node with --require, --import or --loader";
        }
        let M = args.findIndex((Y)=>/^(?:-e|--eval|-p|--print|-pe|-ep)$/.test(Y.text));
        let B = M !== -1 ? args[M + 1]?.text : args.find((Y)=>/^--(?:eval|print)=/.test(Y.text))?.text.replace(/^--(?:eval|print)=/, "");
        if (B !== undefined && Wi(B)) {
            return "it runs node code that loads a module by a bare or relative name";
        }
    } else if (F === "lua") {
        if (args.some((M)=>/^-l/.test(M.text))) {
            return "it runs lua with -l";
        }
    } else if (F === "php") {
        let M = qi(args, k);
        if (M !== undefined) {
            return M;
        }
    }
    if (en.has(F) || Ei(F) && !$e.has(F)) {
        let M = Xe(F, args);
        if (M === "unknown_option") {
            return "it runs an interpreter with an option this version does not know";
        }
        if (M !== undefined && Ue(M) && F !== "python" && F !== "pypy") {
            return "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a file descriptor";
        }
        if (M !== undefined && (M.text === "{}" || Ce(M))) {
            return "it runs a script by a relative name";
        }
        return;
    }
    if (/^(?:emacs|vim?|nvim|gvim|view|ex)$/.test(F) && args.some((M, B)=>{
        let Y = /^(?:--?script|--load|-l|-S|-u)(?:=([\s\S]*))?$/.exec(M.text);
        let J = Y === null ? undefined : Y[1] ?? args[B + 1]?.text ?? "-";
        return J !== undefined && !(M.text === "-u" && /^(?:NONE|NORC|DEFAULTS)$/.test(J)) && (J.startsWith("-") ? M.text === "-S" : !/^[\/~$]/.test(J));
    })) {
        return "it runs a script by a relative name";
    }
    let te = vi[F];
    if (te !== undefined) {
        if (args.some((M)=>M.text === "{}" || !M.text.startsWith("-") && te.test(M.text) && Ce(M))) {
            return "it runs a script by a relative name";
        }
        if (args.every((M)=>M.text.startsWith("-")) && (piped || heredoc !== undefined || redirects.some((M)=>M.op.startsWith("<")))) {
            return "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a file descriptor";
        }
    }
    let Z = F === "dart" ? (args[0]?.text === "run" ? args.slice(1) : args).find((M)=>!M.text.startsWith("-")) : undefined;
    if (Z !== undefined && Z.text.endsWith(".dart") && Ce(Z)) {
        return "it runs a script by a relative name";
    }
    if (F === "git") {
        return Ui(args, assignments, w);
    }
    if (F === "java") {
        let M = args.findIndex((J)=>J.text === "-jar");
        let B = args.findIndex((J)=>/^(?:-cp|-classpath|--class-path)$/.test(J.text));
        let Y = B === -1 ? args.find((J)=>J.text.startsWith("--class-path="))?.text.slice(13) : args[B + 1]?.text;
        if (M !== -1) {
            if (Ce(args[M + 1])) {
                return "it runs a file by a relative path";
            }
            return undefined;
        }
        if (args.length > 0 && args.every((J)=>fo.test(J.text))) {
            return undefined;
        }
        if (Y !== undefined && Y.split(":").every((J)=>De(J))) {
            return undefined;
        }
        return "it runs java with the working directory on its class path";
    }
    if (F === "eval") {
        w.push((args[0]?.text === "--" ? args.slice(1) : args).map((M)=>M.text).join(" "));
        return;
    }
    if (F === "nix-shell" || F === "nix") {
        let M = args.findIndex((B)=>/^(?:--run|--command|-c)$/.test(B.text));
        if (M !== -1 && args[M + 1] !== undefined) {
            w.push(args.slice(M + 1).map((B)=>B.text).join(" "));
        }
        if (po(F, args) !== undefined || F === "nix-shell") {
            return "it runs a project tool, such as make or npm";
        }
        return undefined;
    }
    if (F === "trap") {
        let M = args[0]?.text === "--" ? args.slice(1) : args;
        if (M.length >= 2 && !/^-[lp]$/.test(M[0].text) && M[0].text !== "-") {
            w.push(M[0].text);
        }
        return;
    }
    if (F === "alias") {
        for (let M of args){
            let B = M.text.indexOf("=");
            if (B > 0) {
                w.push(M.text.slice(B + 1));
            }
        }
        return;
    }
    if (F === "enable" || F === "hash") {
        let M = args.findIndex((B)=>B.text === (F === "enable" ? "-f" : "-p"));
        if (M !== -1 && Ce(args[M + 1])) {
            return "it runs a file by a relative path";
        }
        return undefined;
    }
    if (F === "exec" || F === ":") {
        return;
    }
    if (F === "find") {
        let M = [];
        for(let B = 0; B < args.length; B += 1){
            if (!/^-(?:exec|execdir|ok|okdir)$/.test(args[B].text)) {
                continue;
            }
            let Y = B + 1;
            while(Y < args.length && args[Y].text !== ";" && args[Y].text !== "+"){
                Y += 1;
            }
            let J = args.slice(B + 1, Y);
            if (J.length === 0) {
                continue;
            }
            let L = Xt(J, false, w, k);
            M.push(J[0].text === "{}" || Jt(J).some((ee)=>ee.program.text === "{}") ? "it runs a file by a relative path" : L);
            B = Y;
        }
        return M.find((B)=>B !== undefined);
    }
}
function po(e, args) {
    let r = Si[e];
    if (r === undefined) {
        return;
    }
    return args.find((s)=>r.has(s.text.startsWith("--") ? Qe(s.text, "=") : s.text))?.text;
}
const xi = 4;
const vo = "it wraps a command in more than four layers of commands such as find -exec or parallel";
const tn = "it runs env with -P naming a relative directory";
var nn = {
    parallel: "it runs parallel with no command of its own",
    script: "it runs script with no command of its own",
    su: "it runs su with no command",
    runuser: "it runs runuser with no command",
    sudo: "it starts a shell through sudo or doas with no command"
};
var yo = new Set([
    vo,
    tn,
    ...Object.values(nn)
]);
function Tt(e, n) {
    if (yo.has(e)) {
        n.standing?.push(e);
    }
    return e;
}
function Xt(e, n, r, s, u = false) {
    let nesting = (s.nesting ?? 0) + 1;
    if (nesting > xi) {
        return Tt(vo, s);
    }
    if (e.length === 0) {
        return;
    }
    let w = [
        ...u ? [] : [
            {
                program: e[0],
                args: e.slice(1),
                assignments: []
            }
        ],
        ...Jt(e).filter((y)=>u || y.args.length !== e.length - 1)
    ];
    let k = [];
    for (let y of w){
        let S = Dt({
            ...y,
            redirects: [],
            piped: n
        }, r, {
            ...s,
            nesting
        });
        if (S !== undefined && s.standing === undefined) {
            return S;
        }
        k.push(S);
    }
    return k.find((y)=>y !== undefined);
}
var Ci = new Set([
    "bun",
    "deno",
    "tsx",
    "ts-node",
    "lua",
    "rscript",
    "r",
    "bb"
]);
function De(e) {
    return /^[\/~$]/.test(e) && !/^~[+-]/.test(e) && e !== "";
}
function It(e, n, r) {
    if (n !== "") {
        return {
            value: n,
            tildeLiteral: true
        };
    }
    return {
        value: e[r + 1]?.text ?? "",
        tildeLiteral: e[r + 1]?.quoted ?? false
    };
}
function ut({ value, tildeLiteral }, r) {
    return tildeLiteral && value.startsWith("~") || !De(value) || r.make === true && /^\$[({](?:CURDIR|PWD)[)}]/.test(value) || ct({
        text: value,
        quoted: false,
        raw: value
    }, r);
}
function Ue(e) {
    return e !== undefined && /^(?:\/dev\/(?:stdin|fd\/\d+)|\/proc\/(?:self|\d+)\/fd\/\d+|-|[<>]\(\u2026\))$/.test(e.text);
}
function ct(e, n) {
    if (n.roots.length === 0) {
        return false;
    }
    let e_text = e.text;
    if (/^\$(?:HOME|\{HOME\})(?=\/|$)/.test(e_text)) {
        e_text = n.home + e_text.replace(/^\$(?:HOME|\{HOME\})/, "");
    } else if (/^~[A-Za-z0-9._-]*(?=\/|$)/.test(e_text)) {
        e_text = n.home + e_text.replace(/^~[A-Za-z0-9._-]*/, "");
    }
    if (!e_text.startsWith("/")) {
        return false;
    }
    let s = posix.normalize(e_text);
    return n.roots.some((u)=>hLe(s, u));
}
function Ai(e, args, r, s, u) {
    let w = u.piped || u.heredoc !== undefined || u.redirects.some((S)=>S.op.startsWith("<"));
    let k = (S)=>{
        if (w && !/^\$/.test(S.text.trim())) {
            return bo(S.text, u, r, s);
        }
        return Oi(S, r);
    };
    let y = false;
    for(let S = 0; S < args.length; S += 1){
        let arg = args[S];
        let A = arg.text;
        if (A === "--") {
            let x = args[S + 1];
            if (x === undefined) {
                return;
            }
            if (y) {
                return k(x);
            }
            if (!/^[\/~$]/.test(x.text) || /^~[+-]/.test(x.text)) {
                return "it runs a script by a relative name";
            }
            return undefined;
        }
        if (e === "fish") {
            let x = /^(?:-C|--init-command(?:=([\s\S]*))?)$/.exec(A);
            if (x !== null) {
                let K = x[1] !== undefined ? {
                    ...arg,
                    text: x[1]
                } : args[S + 1];
                let G = K === undefined ? undefined : k(K);
                if (G !== undefined && s.standing === undefined) {
                    return G;
                }
                S += x[1] !== undefined ? 0 : 1;
                continue;
            }
        }
        if (So(e, A) && !A.startsWith("--command=")) {
            if (e === "pwsh" && /^-e/i.test(A)) {
                return "it hands pwsh an encoded command";
            }
            y = true;
            S += on(e, A);
            continue;
        }
        if (A.startsWith("--command=")) {
            return k({
                ...arg,
                text: A.slice(10)
            });
        }
        if (/^--(?:rcfile|init-file)=/.test(A)) {
            if (!De(A.slice(A.indexOf("=") + 1))) {
                return `it runs ${e} with an rc file by a relative name`;
            }
            continue;
        }
        let R = on(e, A);
        if (R > 0) {
            let x = args[S + 1]?.text;
            S += R;
            if (/^--(?:rcfile|init-file)$/.test(A) && x !== undefined && !De(x)) {
                return `it runs ${e} with an rc file by a relative name`;
            }
            continue;
        }
        if (A.startsWith("-") || A.startsWith("+")) {
            continue;
        }
        if (y) {
            let x = k(arg);
            if (e === "pwsh" && S + 1 < args.length) {
                return x ?? k({
                    ...arg,
                    text: args.slice(S).map((K)=>K.text).join(" ")
                });
            }
            return x;
        }
        if (Ue(arg)) {
            return "it runs a shell whose program arrives on a pipe, a heredoc or a file descriptor";
        }
        if (Ce(arg)) {
            return "it runs a script by a relative name";
        }
        return undefined;
    }
}
const Ti = new Set([
    "bash",
    "sh",
    "dash",
    "ash",
    "ksh",
    "mksh",
    "zsh",
    "rbash"
]);
function on(e, n) {
    if (/^--(?:rcfile|init-file)$/.test(n)) {
        return 1;
    }
    if (Ti.has(e)) {
        let r = /^[-+]([a-zA-Z]+)$/.exec(n);
        if (r === null) {
            return 0;
        }
        if (e === "zsh" || e === "ksh" || e === "mksh") {
            if ((e === "zsh" ? /o$/ : /[oO]$/).test(r[1])) {
                return 1;
            }
            return 0;
        }
        return (r[1].match(/[oO]/g) ?? []).length;
    }
    if (e === "fish") {
        if (/^(?:[+-]O|\+o|-C|--init-command|-p|--profile|-d|--debug|-D|--debug-stack-frames|-f|--features)$/.test(n)) {
            return 1;
        }
        return 0;
    }
    if (e === "pwsh") {
        if (/^-(?:o|of|outputformat|ex|ep|executionpolicy|wd|workingdirectory|config|configurationname|custompipename|if|inp|inputformat|settings|settingsfile|w|windowstyle|v|version)$/i.test(n)) {
            return 1;
        }
        return 0;
    }
    if (n === "-o" || n === "+o" || n === "-O" || n === "+O") {
        return 1;
    }
    return 0;
}
function Ii(e, args) {
    let r = new Set;
    for(let s = 0; s < args.length; s += 1){
        let u = args[s].text;
        if (u === "--") {
            break;
        }
        if (u.startsWith("-") || u.startsWith("+")) {
            let h = on(e, u);
            for(let w = 1; w <= h; w += 1){
                r.add(s + w);
            }
            s += h;
        }
    }
    return r;
}
function Di(e, args) {
    let r = Ii(e, args);
    let s = args.findIndex((w, k)=>!r.has(k) && !/^[-+]./.test(w.text));
    let u = s === -1 ? args : args.slice(0, s);
    if (u.some((w)=>So(e, w.text))) {
        return (s !== -1 || u.some((w)=>/^--command=./.test(w.text))) && !(e === "pwsh" && args[s]?.text === "-");
    }
    let h = e !== "fish" && e !== "pwsh" && u.some((w)=>nde(w.text, "s"));
    return s !== -1 && !Ue(args[s]) && !h;
}
function So(e, n) {
    if (e === "pwsh") {
        return /^-(?:c|command|cwa|commandwithargs|e|ec|encodedcommand)$/i.test(n);
    }
    return nde(n, "c") || /^--command(?:=|$)/.test(n);
}
function Pi(e, args) {
    let r = Xe(e, args);
    return args.some((s)=>rn(e, s.text)) || /^(?:[gnm]?awk|g?sed)$/.test(e) && args.some((s)=>!s.text.startsWith("-")) || typeof r === "object" && !Ue(r);
}
function Oi(e, n) {
    if (/^\$/.test(e.text.trim())) {
        return "it hands a shell a command held in a variable or produced by another command";
    }
    n.push(e.text);
}
function bo(text, n, r, s) {
    let { commands, unreadable } = xt(text, {
        make: false
    });
    if (unreadable !== null) {
        return `it could not be read to the end as shell (${unreadable})`;
    }
    return commands.map((w)=>Dt(w.program.text === ":" && w.args.length === 0 && w.redirects.length === 0 ? w : {
            ...w,
            redirects: [
                ...w.redirects,
                ...n.redirects.filter((k)=>k.op.startsWith("<"))
            ],
            heredoc: w.heredoc ?? n.heredoc,
            piped: w.piped || n.piped
        }, r, {
            ...s,
            fromPayload: true
        })).find((w)=>w !== undefined);
}
function $i(assignments, n, r = []) {
    let s = Array(assignments.length + 1);
    let u = Array(assignments.length + 1).fill(false);
    let h = Array(assignments.length + 3).fill(false);
    for(let A = assignments.length - 1; A >= 0; A -= 1){
        let R = assignments[A].text;
        let x = /^(?:-[iv0]*[uCP]|--unset|--chdir)$/.test(R) ? 2 : 1;
        h[A] = R.startsWith("-") && (/^-[iv0]*P/.test(R) && !(R.replace(/^-[iv0]*P/, "") || (assignments[A + 1]?.text ?? "")).split(":").every(De) || h[A + x]);
        s[A] = /^(?:-S.|--split-string=)/.test(R) ? R.replace(/^(?:-S|--split-string=)/, "") : s[A + 1];
        let K = /^-[0oprtx]+a([\s\S]*)$/.exec(R);
        let G = /^(?:-a|--arg-file)$/.test(R) ? assignments[A + 1]?.text : R.startsWith("--arg-file=") ? R.slice(11) : R.startsWith("-a") && R.length > 2 ? R.slice(2) : K !== null ? K[1] || assignments[A + 1]?.text : undefined;
        u[A] = G !== undefined && !De(G) || u[A + 1];
    }
    let w = assignments.map((A)=>A.text.slice(A.text.lastIndexOf("/") + 1).toLowerCase());
    let k = w.indexOf("xargs");
    let y = k === -1 ? [] : D(assignments.slice(k + 1).flatMap((A, R, x)=>{
        let K = /^-[0oprtx]*([IJi])([\s\S]*)$/.exec(A.text);
        if (K === null) {
            if (/^--replace(?:=|$)/.test(A.text)) {
                return [
                    A.text.split("=")[1] ?? "{}"
                ];
            }
            return [];
        }
        if (K[1] === "i") {
            return [
                "{}",
                ...K[2] === "" ? [] : [
                    K[2]
                ],
                ...K[2].includes("=") ? [
                    A.text.split("=")[1]
                ] : []
            ];
        }
        return [
            K[2] || x[R + 1]?.text
        ].filter((G)=>G !== undefined);
    }));
    let S = y.length > 64 || r.some((A)=>y.some((R)=>A.text.includes(R)));
    w.forEach((A, R)=>{
        if (A === "env" && s[R + 1] !== undefined) {
            n.push(s[R + 1]);
        }
    });
    let C = w.map((A, R)=>{
        if (A === "env") {
            if (!assignments[R].text.startsWith("-") && h[R + 1]) {
                return tn;
            }
            return undefined;
        }
        if (A !== "xargs") {
            return;
        }
        if (S) {
            return "it runs what xargs splices into the command from its input";
        }
        if (u[R + 1]) {
            return "it runs xargs with its arguments read from a file by a relative name";
        }
    });
    return C.find((A)=>A === tn) ?? C.find((A)=>A !== undefined);
}
function Hi(assignments, n) {
    let r = assignments.slice(n + 1);
    let s = r.findIndex((w, k)=>!w.text.startsWith("-") && !zt.has(r[k - 1]?.text ?? ""));
    let u = s === -1 ? "" : r[s + 1]?.text ?? "";
    let h = /^(?:-c|--command)$/.test(u) ? r[s + 2] : undefined;
    if (h !== undefined) {
        return {
            at: n + s + 3,
            text: h.text
        };
    }
    if (u.startsWith("--command=")) {
        return {
            at: n + s + 2,
            text: u.slice(10)
        };
    }
}
const Zt = new Set([
    "-j",
    "-P",
    "-a",
    "-S",
    "-C",
    "-N",
    "-n",
    "-L",
    "-s",
    "-I",
    "-U",
    "-d",
    "-E",
    "-J",
    "-D",
    "--jobs",
    "--max-procs",
    "--arg-file",
    "--sshlogin",
    "--sshloginfile",
    "--slf",
    "--colsep",
    "--max-replace-args",
    "--max-args",
    "--max-lines",
    "--max-chars",
    "--delimiter",
    "--eof",
    "--halt",
    "--halt-on-error",
    "--joblog",
    "--results",
    "--res",
    "--delay",
    "--timeout",
    "--retries",
    "--tmpdir",
    "--workdir",
    "--wd",
    "--tagstring",
    "--env",
    "--rpl",
    "--load",
    "--memfree",
    "--memsuspend",
    "--nice",
    "--limit",
    "--termseq",
    "--basefile",
    "--bf",
    "--return",
    "--profile",
    "--transferfile",
    "--tf",
    "--block",
    "--blocksize",
    "--block-size",
    "--recstart",
    "--recend",
    "--compress-program",
    "--header",
    "--id",
    "--semaphorename",
    "--semaphoretimeout",
    "--st",
    "--shellquote-ignore"
]);
const mo = new Set([
    "-t",
    "-F",
    "-E",
    "--echo",
    "-O",
    "--log-out",
    "-I",
    "--log-in",
    "-B",
    "--log-io",
    "-T",
    "--log-timing",
    "-m",
    "--logging-format",
    "-o",
    "--output-limit"
]);
function At(args, n, r = false) {
    let s = 0;
    while(s < args.length && args[s].text.startsWith("-")){
        let u = args[s].text;
        s += n.has(u) || r && /^-[A-Za-z]{2,}$/.test(u) && n.has(`-${u.at(-1)}`) ? 2 : 1;
    }
    return args.slice(s);
}
function Mi(e, args) {
    let r = (u)=>{
        if (u >= 0 && u < args.length) {
            return {
                words: [
                    args.slice(u)
                ]
            };
        }
    };
    let s = (u)=>u.filter((h, w)=>h.length > 0 && u.findIndex((k)=>k.length === h.length && k.every((y, S)=>y === h[S])) === w);
    switch(e){
        case "su":
        case "runuser":
            {
                let u = args.flatMap((k, y)=>{
                    let S = /^(?:-[flmpPT]*c|--(?:session-)?command(?==|$))=?([\s\S]*)$/.exec(k.text);
                    if (S === null) {
                        return [];
                    }
                    return [
                        S[1] !== "" ? S[1] : args[y + 1]?.text
                    ];
                });
                let h = args.some((k, y)=>{
                    let S = /^(?:-[flmpPT]*s|--shell)(?:=?([\s\S]+))?$/.exec(k.text);
                    let C = S === null ? undefined : S[1] ?? args[y + 1]?.text;
                    return C !== undefined && !/^[\/~$]/.test(C);
                });
                if (u.length === 0) {
                    if (e === "runuser" && args.some((y)=>/^(?:-[flmpPT]*u|--user(?:=|$))/.test(y.text)) || args.length > 0 && args.every((y)=>/^(?:--version|--help|-V|-h)$/.test(y.text))) {
                        return;
                    }
                    let k = args.filter((y, S)=>!y.text.startsWith("-") && !/^(?:-[flmpPT]*[sgGwu]|--shell|--group|--supp-group|--whitelist-environment|--user)$/.test(args[S - 1]?.text ?? ""));
                    if (k.length <= 1) {
                        return "reads_input";
                    }
                    if (h) {
                        return "held";
                    }
                    return {
                        words: [
                            [
                                {
                                    text: "sh",
                                    quoted: false,
                                    raw: "sh"
                                },
                                ...k.slice(1)
                            ]
                        ]
                    };
                }
                let lines = u.filter((k)=>k !== undefined);
                return {
                    lines,
                    held: lines.length < u.length || h
                };
            }
        case "watch":
            {
                let u = D([
                    /^(?:-n|--interval|-d|--differences|-q|--equexit)$/,
                    /^(?:-[a-zA-Z]*[nq]|--interval|--equexit)$/
                ].map((h)=>{
                    let w = 0;
                    while(w < args.length && args[w].text.startsWith("-")){
                        w += h.test(args[w].text) ? 2 : 1;
                    }
                    return w;
                })).filter((h)=>h < args.length);
                if (u.length === 0) {
                    return undefined;
                }
                return {
                    lines: u.map((h)=>args.slice(h).map((w)=>w.text).join(" "))
                };
            }
        case "script":
            {
                let u = args.findIndex((y)=>/^(?:-[a-zA-Z]*c|--command)$/.test(y.text));
                if (u !== -1) {
                    let y = args[u + 1]?.text;
                    if (y === undefined) {
                        return "held";
                    }
                    return {
                        lines: [
                            y
                        ]
                    };
                }
                let h = args.filter((y)=>!y.text.startsWith("-"));
                if (h.length < 2) {
                    if (args.length > 0 && args.every((y)=>/^(?:--version|--help|-V|-h)$/.test(y.text))) {
                        return undefined;
                    }
                    return "reads_input";
                }
                let w = At(args, mo);
                let k = At(args, mo, true);
                if (w.length <= 1 || k.length <= 1) {
                    return "reads_input";
                }
                return {
                    words: s([
                        h.slice(1),
                        args.slice(args.indexOf(h[0]) + 1),
                        w.slice(1),
                        k.slice(1)
                    ])
                };
            }
        case "dotenv":
            return "held";
        case "direnv":
            {
                if (args[0]?.text !== "exec") {
                    return;
                }
                let u = args[1];
                if (u === undefined || !De(u.text)) {
                    return "held";
                }
                return r(2);
            }
        case "op":
            {
                if (args[0]?.text !== "run") {
                    return;
                }
                let u = args.findIndex((w)=>/^--env-file(?:=|$)/.test(w.text));
                if (u !== -1) {
                    let w = args[u].text.includes("=") ? args[u].text.slice(11) : args[u + 1]?.text ?? "";
                    if (!De(w)) {
                        return "held";
                    }
                }
                let h = args.findIndex((w)=>w.text === "--");
                if (h === -1) {
                    return undefined;
                }
                return r(h + 1);
            }
        case "hyperfine":
            {
                let u = [];
                let h = /^(?:-p|--prepare|-s|--setup|-c|--cleanup|--conclude)$/;
                let w = /^(?:-w|--warmup|-r|--runs|-m|--min-runs|-M|--max-runs|-n|--command-name|--export-\w+|--output|--shell|--sort|-u|--time-unit|-D|--parameter-step-size)$/;
                let k = [];
                for(let y = 0; y < args.length; y += 1){
                    let S = args[y].text;
                    if (h.test(S)) {
                        u.push(args[y + 1]?.text ?? "");
                        y += 1;
                    } else if (/^(?:-L|--parameter-list)$/.test(S)) {
                        k.push(...(args[y + 2]?.text ?? "").split(","));
                        y += 2;
                    } else if (/^(?:-P|--parameter-scan)$/.test(S)) {
                        y += 3;
                    } else if (w.test(S)) {
                        y += 1;
                    } else if (!S.startsWith("-")) {
                        u.push(S);
                    }
                }
                return {
                    lines: [
                        u.join(`
`),
                        ...u.length > 1 ? u : [],
                        ...k
                    ]
                };
            }
        case "parallel":
            {
                let u = args.filter((x)=>!x.text.startsWith("-") && x.text !== ":::");
                if (u.length === 0) {
                    return "reads_input";
                }
                let h = args.findIndex((x)=>!x.text.startsWith("-"));
                let w = args.slice(h);
                let k = w.findIndex((x)=>/^::::?\+?$/.test(x.text));
                let y = w.filter((x)=>!/^::::?\+?$/.test(x.text));
                let S = At(args, Zt);
                let C = At(args, Zt, true);
                if ([
                    S,
                    C
                ].some((x)=>x.length === 0 || /^::::\+?$/.test(x[0].text))) {
                    return "reads_input";
                }
                let A = new Set(args.filter((x, K)=>Zt.has(args[K - 1]?.text ?? "") && /^\{[-+]?\d*[.#%+]{0,4}\}$/.test(x.text)));
                let R = (x)=>{
                    let K = x.findIndex((G)=>!A.has(G));
                    if (K === -1) {
                        return [];
                    }
                    return x.slice(K);
                };
                return {
                    words: s([
                        R(u),
                        R(y),
                        S.filter((x)=>!/^::::?\+?$/.test(x.text)),
                        C.filter((x)=>!/^::::?\+?$/.test(x.text))
                    ]),
                    lines: k === 0 || [
                        S,
                        C
                    ].some((x)=>/^:::\+?$/.test(x[0].text)) ? y.map((x)=>x.text) : []
                };
            }
        default:
            return;
    }
}
function Xe(e, args) {
    if (e === "deno") {
        if (args[0]?.text === "run") {
            return args.slice(1).find((u)=>!u.text.startsWith("-"));
        }
        return undefined;
    }
    if (e === "php") {
        let u = ho.php;
        for(let h = 0; h < args.length; h += 1){
            let w = args[h].text;
            let k = /^(?:-[fF]|--file)(?:=?([\s\S]+))?$/.exec(w);
            if (k !== null) {
                if (k[1] !== undefined) {
                    return {
                        ...args[h],
                        text: k[1]
                    };
                }
                return args[h + 1];
            }
            if (!w.startsWith("-") || w === "-" || w === "--") {
                break;
            }
            if (u.has(w)) {
                h += 1;
            }
        }
    }
    if (/^(?:[gnm]?awk|g?sed)$/.test(e)) {
        let u = e.endsWith("awk");
        let h = u ? /^-[a-zA-Z]*[fE]$/ : /^-[a-zA-Z]*f$/;
        let w = u ? /^-[fE]./ : /^-f./;
        for(let k = 0; k < args.length; k += 1){
            let y = args[k].text;
            if (h.test(y)) {
                return args[k + 1];
            }
            if (w.test(y)) {
                return {
                    ...args[k],
                    text: y.slice(2)
                };
            }
            if (y.startsWith("--file=")) {
                return {
                    ...args[k],
                    text: y.slice(7)
                };
            }
        }
        return;
    }
    let r = ho[e] ?? new Set;
    let s = false;
    for(let u = 0; u < args.length; u += 1){
        let h = args[u].text;
        if (h === "--") {
            return args[u + 1];
        }
        if (h === "-" || !h.startsWith("-")) {
            if (h === "-") {
                return args[u];
            }
            if (s) {
                return "unknown_option";
            }
            return args[u];
        }
        if (rn(e, h)) {
            return;
        }
        if (r.has(h)) {
            u += 1;
            continue;
        }
        if ([
            ...r
        ].some((w)=>w.length === 2 && h.length > 2 && h.startsWith(w))) {
            continue;
        }
        if (h.startsWith("--") && h.includes("=")) {
            continue;
        }
        if (!Li[e]?.test(h)) {
            s = true;
        }
    }
}
var Li = {
    python: /^-[bBdEhiIOPqRsSuvVxE]+$|^--(?:version|help)$/,
    pypy: /^-[bBdEhiIOqRsSuvVx]+$/,
    node: /^--(?:enable-source-maps|no-warnings|no-deprecation|throw-deprecation|trace-warnings|trace-deprecation|pending-deprecation|experimental-strip-types|expose-gc|no-addons|preserve-symlinks|frozen-intrinsics|disallow-code-generation-from-strings|jitless|version|help)$|^-[civ]$/,
    ruby: /^-[acdhlnpsSTUvwWy0]+$|^--[a-z][a-z-]*$/,
    perl: /^-(?:[acfgnpsStTuUvwWX]|l[0-7]*|0[0-7]*|i\S*)+$/,
    osascript: /^-i$/,
    rscript: /^--[a-z][a-z-]*$/,
    php: /^-[aeHilmnqsvw]+$|^--[a-z-]+$/,
    lua: /^-[ivEW]$/,
    tsx: /^--[a-z][a-z0-9-]*$/,
    "ts-node": /^--[a-zA-Z][a-zA-Z0-9-]*$|^-[hvT]$/,
    bb: /^--?[a-z][a-z-]*$/
};
const Fi = new Set([
    "assert",
    "async_hooks",
    "buffer",
    "child_process",
    "cluster",
    "console",
    "constants",
    "crypto",
    "dgram",
    "diagnostics_channel",
    "dns",
    "domain",
    "events",
    "fs",
    "http",
    "http2",
    "https",
    "inspector",
    "module",
    "net",
    "os",
    "path",
    "perf_hooks",
    "process",
    "punycode",
    "querystring",
    "readline",
    "repl",
    "stream",
    "string_decoder",
    "sys",
    "timers",
    "tls",
    "trace_events",
    "tty",
    "url",
    "util",
    "v8",
    "vm",
    "wasi",
    "worker_threads",
    "zlib",
    "test",
    "sqlite"
]);
function Wi(e) {
    for (let n of e.matchAll(/(?:\brequire\s*(?:\?\.)?\s*\(|\bimport\s*\(|\bimport\s+(?:[\w*{}\s,]+\s+from\s+)?|\bfrom\s+|\bcreateRequire\b[^'"]*)\s*['"]([^'"]+)['"]/g)){
        let r = n[1];
        if (r.startsWith("/") || r.startsWith("node:")) {
            continue;
        }
        if (!Fi.has(Qe(r, "/"))) {
            return true;
        }
    }
    return /\bcreateRequire\b/.test(e);
}
function go(e, n = false) {
    for (let r of e){
        let s = /^([A-Za-z_][A-Za-z0-9_]*)(?:\[[^\]]*\])?\+?=([\s\S]*)$/.exec(r.text);
        if (s === null) {
            continue;
        }
        let u = s[1];
        let h = s[2];
        let w = (y)=>y === "." || !/^[\/~$]/.test(y) || /^~[+-]|^\$\{?PWD\b|^\$\(/.test(y);
        let k = (y)=>/^\$/.test(y) && !new RegExp(`^\\$\\{?(?:${u}|HOME|PATH)\\b`).test(y);
        if (FVe.includes(u)) {
            if (h.split(":").some((y)=>w(y) || k(y))) {
                return `it sets ${u} with the working directory or a relative entry on it`;
            }
        } else if (n && /^(?:path|fpath|manpath|cdpath)$/.test(u)) {
            let y = /^\(([\s\S]*)\)$/.exec(h)?.[1];
            if ((y === undefined ? [
                h
            ] : wo(y)).some(w)) {
                return `it sets ${u} with the working directory or a relative entry on it`;
            }
        } else if (u === "PHPRC" || u === "PHP_INI_SCAN_DIR") {
            let y = u === "PHPRC" ? [
                h
            ] : h.split(":").filter((S)=>S !== "");
            if (h !== "" && y.some(w)) {
                return `it sets ${u} to a php.ini location in the working directory`;
            }
        } else if (mi(u) || /^GIT_CONFIG_(?:COUNT|KEY_\d+|VALUE_\d+|PARAMETERS|GLOBAL|SYSTEM)$/.test(u)) {
            return `it sets ${u}, which makes a shell, an interpreter or git load what it names`;
        } else if (hi.test(u)) {
            let y = h.split(/[\s=]+/).find((S)=>pi.test(S));
            if (y !== undefined) {
                return `it sets ${u}, which a tool runs or loads, to a file in the working directory (${y})`;
            }
        }
    }
}
function Ui(args, assignments, r) {
    if (assignments.some((s)=>/^(?:env|-i|--ignore-environment|-u|--unset)$/.test(s.text.slice(s.text.lastIndexOf("/") + 1)) || s.text.startsWith("GIT_CONFIG"))) {
        return "it runs git with the environment that switches its repository hooks off cleared or edited";
    }
    for(let s = 0; s < args.length; s += 1){
        let u = args[s].text;
        let h;
        if (u === "-c" || u === "--config-env") {
            s += 1;
            h = args[s]?.text;
        } else if (u.startsWith("--config-env=")) {
            h = u.slice(13);
        } else if (/^-c./.test(u)) {
            h = u.slice(2);
        } else if (/^--exec-path=(?![\/~])/.test(u)) {
            return "it runs git with an exec path in the launch directory (git-* commands come from there)";
        }
        if (h === undefined) {
            if (/^(?:bisect|submodule|rebase)$/.test(u)) {
                let S = args.slice(s + 1);
                let C = S.findIndex((A)=>/^(?:run|foreach|-x|--exec)$/.test(A.text));
                if (C !== -1 && S[C + 1] !== undefined) {
                    r.push(S.slice(C + 1).map((A)=>A.text).join(" "));
                }
                break;
            }
            continue;
        }
        let w = h.indexOf("=");
        let k = w === -1 ? h : h.slice(0, w);
        let y = w === -1 ? "" : h.slice(w + 1);
        if (/^core\.hookspath$/i.test(k)) {
            if (!/^(?:\/|~\/)/.test(y) || /^~[+-]/.test(y)) {
                return "it runs git with core.hooksPath set on the command line";
            }
        } else if (/^include(?:if\.[^=]*)?\.path$/i.test(k) && !De(y)) {
            return "it runs git with an include path set on the command line";
        } else if (y.startsWith("!") || y.includes("/") && !/^[\/~$]/.test(y) || /^(?:core\.(?:fsmonitor|sshcommand|askpass|editor|pager|gitproxy)|credential\.helper|diff\.external|gpg\.(?:\w+\.)?program|sequence\.editor|uploadpack\.packobjectshook)$/i.test(k)) {
            return `it runs git with ${k} set on the command line to something that runs from the checkout`;
        }
    }
}
const ji = /^(?:auto_prepend_file|auto_append_file|include_path|extension_dir|(?:zend_)?extension|opcache\.(?:preload|file_cache)|ffi\.preload|phar\.cache_list|sendmail_path|sqlite3\.extension_dir)$/;
function qi(args, n) {
    let r = Xe("php", args);
    let s = typeof r === "object" ? args.indexOf(r) : -1;
    let u = args.findIndex((y)=>y.text === "--");
    let h = typeof r === "object" && s !== -1 && !/^(?:-[fF]|--file)$/.test(args[s - 1]?.text ?? "") ? args.slice(0, s) : args.filter((y, S)=>S !== s && (u === -1 || S < u));
    let w = (y, S)=>It(h, y.replace(/^=/, ""), S);
    if (h.some((y, S)=>{
        let C = /^(?:-[zc]|--zend-extension=?|--php-ini=?)(.*)$/.exec(y.text);
        if (C !== null) {
            return ut(w(C[1], S), n);
        }
        let A = /^(?:-d|--define=?)(.*)$/.exec(y.text);
        if (A === null) {
            return false;
        }
        let { value } = w(A[1], S);
        let x = value.indexOf("=");
        let K = (x === -1 ? value : value.slice(0, x)).trim();
        let G = x === -1 ? "1" : value.slice(x + 1);
        if (!ji.test(K)) {
            return false;
        }
        let W = (value_1)=>ut({
                value: value_1,
                tildeLiteral: true
            }, n);
        if (K === "include_path") {
            return G.split(":").some(W);
        }
        if (/^(?:zend_)?extension$/.test(K) && !G.includes("/")) {
            return false;
        }
        return G !== "" && W(G);
    })) {
        return "it runs php with -z, -c or a -d setting that loads a file";
    }
}
function ko(args) {
    let r = Xe("python", args);
    let s = args.findIndex((h)=>h === r || rn("python", h.text));
    if ((s === -1 ? args : args.slice(0, args[s] === r ? s : s + 1)).some((h)=>/^-[bBdEhIOPqRsSuvVx]*i/.test(h.text))) {
        return "it runs python with -i";
    }
    for(let h = 0; h < args.length; h += 1){
        let w = args[h].text;
        if (w === "-" || Ue(args[h])) {
            return "it runs python with -m, -c or a program on stdin, without -P or -I";
        }
        if (!w.startsWith("-") || w === "--") {
            return;
        }
        if (w.startsWith("--")) {
            if (w === "--version" || w === "--help") {
                return;
            }
            if (w === "--check-hash-based-pycs") {
                h += 1;
            }
            continue;
        }
        for(let k = 1; k < w.length; k += 1){
            let y = w[k];
            if (y === "I" || y === "P") {
                return;
            }
            if (y === "V" || y === "h") {
                return;
            }
            if (y === "W" || y === "X") {
                if (k === w.length - 1) {
                    h += 1;
                }
                break;
            }
            if (y === "m") {
                return "it runs python with -m, -c or a program on stdin, without -P or -I";
            }
            if (y === "c") {
                let S = k < w.length - 1 ? w.slice(k + 1) : args[h + 1]?.text ?? "";
                if (bi.test(S)) {
                    return "it runs python with -m, -c or a program on stdin, without -P or -I";
                }
                return undefined;
            }
        }
    }
    return "it runs python with -m, -c or a program on stdin, without -P or -I";
}
const Bi = /^[ \t]*-?(?:s?include|load)[ \t]+(?!=)([^\n]*)$|^[ \t]*\.[ \t]*[ds-]?include[ \t]*("[^\n]*)$|^[ \t]*@(?:include|load)[ \t]*("[^\n]*)$/gm;
const Yt = /^(?:[gbp]|gnu)?(?:make|[gnm]?awk)$/i;
function Qt(e) {
    let n = e.trim().split(/[ \t]+/);
    let r = 0;
    if (/(?:^|\/)env$/.test(n[0] ?? "")) {
        r = 1;
        while(r < n.length && (n[r].startsWith("-") || /^[A-Za-z_][A-Za-z0-9_]*=/.test(n[r]))){
            r += /^-[A-Za-z]*[PuC]$|^--(?:unset|chdir)$/.test(n[r]) ? 2 : 1;
        }
    }
    let s = n[r] ?? "";
    return s.slice(s.lastIndexOf("/") + 1);
}
const Vi = /\bCLAUDE_PROJECT_DIR\b/i;
const Gi = /^[ \t]*#.*$/gm;
function Ro(bytes, n, home, interpreter) {
    let h = (bytes.includes(0) ? Buffer.from(bytes.filter((W)=>W !== 0)) : bytes).toString("utf8");
    let w = h.indexOf(`
`);
    let k = h.startsWith("#!") ? h.slice(2, w === -1 ? undefined : w) : "";
    let y = Qt(k);
    let S = interpreter !== undefined && interpreter !== null ? /^(?:bash|sh|zsh|dash|ash|ksh|mksh|rbash|fish)$/i.test(interpreter) : y === "" || _i.test(y) || Yt.test(y);
    let C = h.startsWith("#!") ? w === -1 ? "" : h.slice(w + 1) : h;
    let A = k + `
` + (S ? zi(C) : h.replace(Gi, ""));
    let R = Zd(A);
    let x = D(n).flatMap((W)=>gi(W, home)).find((W)=>new RegExp(`(?<![\\w./~$-])${ml(Zd(W))}${W.endsWith("/") ? "" : "(?![\\w.-])"}`).test(R));
    if (x !== undefined) {
        return `it names ${x.replace('"', "")}`;
    }
    if (Vi.test(R)) {
        return "it reads $CLAUDE_PROJECT_DIR";
    }
    if (ki.test(R) || S && wi.test(R)) {
        return "it uses its working directory";
    }
    let shell = (interpreter ?? y).toLowerCase();
    if (/^t?csh$/.test(shell) && Array.from(C.matchAll(/^[ \t]*set[ \t]+path[ \t]*=[ \t]*\(([^)\n]*)\)/gm)).some((W)=>wo(W[1]).some((I)=>I === "." || !/^[\/~$]/.test(I)))) {
        return "it sets path with the working directory or a relative entry on it";
    }
    let G;
    try {
        let W = {
            roots: D(n),
            home,
            fromPayload: false,
            shell
        };
        G = (S ? sn(C, Yt.test(Qt(k)), W) : undefined) ?? Ji(k, W);
    } catch  {
        G = "it could not be read as shell";
    }
    if (G !== undefined) {
        return G;
    }
    if (Yt.test(Qt(k)) && Ki(A)) {
        return "it includes another build file, plugin or awk source by a relative name";
    }
}
function zi(e) {
    let n = [];
    let r = 0;
    for (let [s, u] of co(e)){
        n.push(e.slice(r, s));
        r = u;
    }
    n.push(e.slice(r));
    return n.join("");
}
function Ki(e) {
    for (let n of e.matchAll(Bi)){
        let r = (n[1] ?? n[2] ?? n[3] ?? "").trim().replace(/^"|"$/g, "").split(/[ \t]+/).filter(Boolean);
        if (r.length === 0 || r.some((s)=>!/^(?:\/|~\/|\$\(HOME\)|\$\{HOME\}|"\/|'\/|<)/.test(s))) {
            return true;
        }
    }
    return false;
}
function Ji(e, n) {
    let r = [];
    let standing = [];
    for (let u of xt(e).commands){
        Dt(u, r, {
            roots: [],
            home: "",
            fromPayload: false,
            standing
        });
    }
    return standing[0] ?? r.map((u)=>sn(u, false, {
            ...n,
            fromPayload: true
        }, 1)).find((u)=>u !== undefined);
}
function sn(e, make, r, s = 0) {
    let { commands, unreadable } = xt(e, {
        make
    });
    let w = [];
    let relativeNames = new Set(r.relativeNames);
    for (let { program, args, assignments } of commands){
        let A = /^(?:export|declare|typeset|local|readonly)$/.test(program.text) ? [
            ...assignments,
            ...args
        ] : assignments;
        for (let R of A){
            let x = /^([A-Za-z_][A-Za-z0-9_]*)=([^\/~$][\s\S]*)$/.exec(R.text);
            if (x !== null) {
                relativeNames.add(x[1]);
            }
        }
    }
    for (let y of commands){
        let S = Dt(y, w, {
            ...r,
            make,
            relativeNames
        });
        if (S !== undefined) {
            return S;
        }
    }
    if (unreadable !== null) {
        return `it could not be read to the end as shell (${unreadable})`;
    }
    for (let y of w){
        let S = s >= 3 ? "it hands shell code to a shell too many layers deep" : sn(y, false, {
            ...r,
            fromPayload: true
        }, s + 1);
        if (S !== undefined) {
            return S;
        }
    }
}
const an = 128;
const Eo = Bt;
const ln = 8;
const Xi = 512;
const Zi = 600;
const Yi = {
    user: "your user settings",
    local: "this folder's settings.local.json",
    flag: "the --settings file"
};
function dn(site, hook, defaultShell) {
    let s = hook.type === "command" ? `${hook.shell ?? defaultShell}\x00${hook.command}\x00${_(hook.args ?? null)}` : hook.url;
    return `${site.event}\x00${site.matcher ?? ""}\x00${hook.type}\x00${s}\x00${hook.if ?? ""}`;
}
function Do(timeout) {
    if (timeout !== undefined && timeout > 0) {
        return Math.min(timeout, Zi);
    }
}
async function Pt(deps, n) {
    try {
        let r = await deps.realpath(n);
        if (tR(r)) {
            return r;
        }
        return n;
    } catch  {
        return n;
    }
}
const Qi = {
    reason: "source_in_sync_root",
    cause: "the cloud session can change that file"
};
const Ot = {
    reason: "source_in_sync_root",
    cause: "this machine could not check where that file is"
};
const es = {
    reason: "sync_root_is_config_dir",
    cause: "a directory the cloud session can write on this machine is a Claude config directory"
};
async function ts(e, n) {
    let r = n.opts.sync?.rootReal;
    let s = e.source === "local" ? undefined : n.opts.reachMemory;
    if (e.settingsFile === null || !s?.everInReach.has(e.source) && r === undefined && n.roots.extraReach.length === 0) {
        return null;
    }
    let e_settingsFile = e.settingsFile;
    let h = e.source === "local" ? n.opts.localSettingsLocation : undefined;
    let w = h?.current ?? null;
    if (w === null) {
        let W = await a0e(await l0e(e_settingsFile, n.opts.launchDir), n.opts.launchDir, qle());
        if (W.verdict !== "local") {
            return Ot;
        }
        try {
            w = [
                W.spelling,
                await n.deps.realpath(W.spelling)
            ];
        } catch  {
            return Ot;
        }
        if (h !== undefined) {
            h.current ??= w;
            w = h.current;
        }
    }
    let k = [
        e_settingsFile,
        ...w,
        ...s?.knownSpellings.get(e.source) ?? []
    ].map(Zd);
    let y = O() === "windows";
    let S = y ? /[\\/]/ : "/";
    let C = [
        ...r !== undefined ? [
            r
        ] : [],
        ...n.opts.sync?.root !== undefined ? [
            n.opts.sync.root
        ] : [],
        ...n.roots.extraReach
    ].map((W)=>{
        if (y) {
            return Zd(W).replace(/[\\/]+$/, "") || "/";
        }
        return Zd(W.replace(/\/+$/, "") || "/");
    });
    if (C.some((W)=>k.some((I)=>!kW(I, W) && zAe(I, W)))) {
        return Ot;
    }
    let A = C.filter((W)=>k.some((I)=>kW(I, W)));
    let R = k.flatMap((W)=>A.flatMap((I)=>{
            if (kW(W, I)) {
                return [
                    W === I ? "" : W.slice(I === "/" ? 1 : I.length + 1)
                ];
            }
            return [];
        }));
    if (R.length === 0) {
        if (s?.everInReach.has(e.source)) {
            return Ot;
        }
        return null;
    }
    let x = D([
        n.roots.configHomeReal,
        n.opts.configHome
    ].map(Zd));
    if (A.some((W)=>x.some((I)=>W === I || zAe(W, I) || zAe(I, W)) || W.split(S).includes(".claude"))) {
        return es;
    }
    let G = R.every((W)=>W.split(S).some((I)=>I.startsWith(".")));
    if (e.source === "local" && G) {
        return null;
    }
    return Qi;
}
function xo(source) {
    return Object.entries(source.hooks).flatMap(([event, r])=>(r ?? []).flatMap((s)=>s.hooks.map((hook)=>({
                    source,
                    event,
                    matcher: s.matcher,
                    hook
                }))));
}
function Co(command, interpreter) {
    let r = command.trim().split(/ +/);
    if (interpreter === null) {
        return r.length === 1;
    }
    return (interpreter === "python3" || interpreter === "python") && r.length === 2;
}
function ns(event) {
    return xp.includes(event);
}
const os = new Set([
    "/usr/bin/env",
    "/bin/env"
]);
function rs(bytes) {
    let n = bytes.subarray(0, 512).toString("utf8");
    if (!n.startsWith("#!")) {
        return null;
    }
    let r = n.indexOf(`
`);
    let s = n.slice(2, r === -1 ? undefined : r).replace(/^[ \t]+|[ \t]+$/g, "").split(/[ \t]+/);
    let u = s[0];
    if (u === undefined || u === "") {
        return null;
    }
    if (s.some((y)=>/[^\x21-\x7e]/.test(y))) {
        return "unjudgeable";
    }
    if (!u.startsWith("/") || cn.test(u)) {
        return "unjudgeable";
    }
    let h = g9o;
    if (!os.has(Zd(posix.normalize(u)))) {
        if (s.slice(1).every(h)) {
            return posix.normalize(u);
        }
        return "unjudgeable";
    }
    let w = s[1] === "-S" ? s.slice(2) : s.slice(1);
    let k = w[0];
    if (k === undefined || k.startsWith("-") || k.includes("=") || !w.slice(1).every(h)) {
        return "unjudgeable";
    }
    if (k.startsWith("/")) {
        if (cn.test(k)) {
            return "unjudgeable";
        }
        return posix.normalize(k);
    }
    if (/^[\w.+-]+$/.test(k)) {
        return null;
    }
    return "unjudgeable";
}
var cn = /(?:^|\/)\.\.(?:\/|$)/;
const is = /^\/dev\/(?:null|zero|full|u?random|tty\d*|pts(?:\/.*)?|ptmx|std(?:in|out|err)|fd(?:\/.*)?|dtracehelper|autofs_nowait)$/;
function Po(source) {
    return source === "local";
}
async function Ao(site, n, r = false, s = false) {
    if (!Y3(site.event)) {
        return {
            kind: "held",
            reason: `event_${(ns(site.event) ? zrs(site.event) : null) ?? "container_internal"}`
        };
    }
    let { hook } = site;
    if (hook.type !== "command" && hook.type !== "http") {
        return {
            kind: "held",
            reason: "kind_unsupported"
        };
    }
    let h = Po(site.source.source);
    let w = hook.cloud === "device" && !h;
    let k = hook.cloud === "device" && h ? ' Its "cloud": "device" mark is ignored in settings.local.json.' : "";
    let y = `"${Te(hook)}" in ${Yi[site.source.source]} does not run for cloud work`;
    let S = Vrs(site.event, site.matcher);
    if (r) {
        if (S) {
            return {
                kind: "held",
                reason: "after_edit"
            };
        }
        return {
            kind: "forward",
            event: site.event,
            hook
        };
    }
    let { hooksFolderInReach } = n;
    let A = hooksFolderInReach || h ? "" : " Check the script, then move it to ~/.claude/hooks.";
    if (S && hook.cloud === "skip") {
        return {
            kind: "held",
            reason: "after_edit"
        };
    }
    if (hook.cloud === "skip") {
        return {
            kind: "held",
            reason: "author_skip",
            notice: `${y}: its entry is marked "cloud": "skip" or a value this version does not know.`
        };
    }
    let pinnedTarget;
    let x;
    let K;
    let G = false;
    let W = false;
    let I = false;
    let H = false;
    let F = false;
    let templateTwinId;
    let N;
    let z = S && w ? `${y}: cloud edits change files in the cloud.${n.opts.inRepository ? " Put the hook in the repository's .claude/settings.json." : ""}` : undefined;
    if (hook.type === "command") {
        let V = await bn(hook, n.reach, n.deps, {
            resolved: n.resolved
        });
        W = V.kind === "opaque" && V.reason === "private_dotdir";
        I = V.kind === "opaque" && V.reason === "shell_prefix";
        H = V.kind === "opaque" && (V.reason === "unsupported_platform" || V.reason === "unsupported_shell");
        if (V.kind === "unverifiable") {
            G = true;
            x = {
                kind: "held",
                reason: "unverifiable_target",
                notice: `${y}: ${V.missing ? "its script is missing" : "this machine could not verify its script"}.`,
                ...V.missing && {
                    cause: "script_missing"
                }
            };
        } else if (V.kind === "script_in_reach" || V.kind === "script_outside_reach") {
            G = true;
            let te = V.kind === "script_in_reach";
            pinnedTarget = V.pinnedTarget;
            if (te && !w) {
                K = {
                    kind: "held",
                    reason: "in_reach",
                    notice: `${y}: the cloud session can change the hook's script.${A}${k}`,
                    ...hooksFolderInReach && {
                        noRemedy: true
                    }
                };
            }
            let Z = ze(n.reach);
            let M = [
                ...V.site.form === "exec" && V.site.slot === "arg0" && hook.command.startsWith("/") ? [
                    cn.test(hook.command) ? "unjudgeable" : posix.normalize(hook.command)
                ] : [],
                ...V.interpreter === null ? [
                    rs(V.bytes)
                ].filter((L)=>L !== null) : []
            ];
            let B;
            for (let L of M){
                if (L === "unjudgeable") {
                    B = "this machine cannot check the interpreter the hook names";
                    break;
                }
                let ee = await a0e(await l0e(L, n.opts.launchDir), n.opts.launchDir, qle());
                let re = ee.verdict === "local" ? await n.deps.realpath(ee.spelling).catch(()=>null) : null;
                if (re === null) {
                    B = `its interpreter ${ei(L, {
                        maxCodeUnits: 200
                    })} could not be located on this machine`;
                    break;
                }
                if ([
                    L,
                    re
                ].some((ie)=>Z.some((ae)=>hLe(ie, ae)))) {
                    B = `the cloud session can change its interpreter ${ei(L, {
                        maxCodeUnits: 200
                    })}`;
                    break;
                }
            }
            if (B === undefined && V.interpreter === null) {
                let L = sus(V.bytes);
                if (L !== null && (L === "unjudgeable" || L.kind !== "absolute" && L.kind !== "env")) {
                    B = "its interpreter may load code the cloud session can change";
                }
            }
            if (B !== undefined && !te) {
                if (w) {
                    F = true;
                } else {
                    K = {
                        kind: "held",
                        reason: "interpreter_unvouched",
                        notice: `${y}: ${B}.${h ? "" : " Use bash, python3 or node from your PATH."}${k}`
                    };
                }
            }
            F = F || te && w;
            if (!te) {
                let L = Ro(V.bytes, [
                    n.reach.launchDir,
                    n.reach.launchDirReal,
                    ...n.reach.sync !== undefined ? [
                        n.reach.sync.rootReal,
                        ...n.reach.sync.root !== undefined ? [
                            n.reach.sync.root
                        ] : []
                    ] : [],
                    ...n.reach.extraReach
                ].filter((ee)=>!is.test(ee)), n.deps.home, V.interpreter);
                if (L !== undefined && !w && K === undefined) {
                    K = {
                        kind: "held",
                        reason: "loads_from_reach",
                        notice: `${y}: its script may load files the cloud session can change. ${L.replace(/^it /, "The script ")}.${k}`
                    };
                } else if (L !== undefined && w) {
                    F = true;
                }
            }
            if (w && n.opts.optInPins !== undefined) {
                let L = `${V.pinnedTarget.realPath}\x00${V.pinnedTarget.sha256}`;
                let ee = n.opts.optInPins.get(V.pinnedTarget.path);
                if (ee === undefined || !te && ee !== L) {
                    n.opts.optInPins.set(V.pinnedTarget.path, L);
                } else if (ee !== L) {
                    x = {
                        kind: "held",
                        reason: "unverifiable_target",
                        notice: `${y}: its script changed and the cloud session can write to it. Check the file, then restart claude --cloud.`
                    };
                    pinnedTarget = undefined;
                    F = false;
                }
            }
            let Y = s ? undefined : (n.deps.findTemplateByDigest ?? S0o)(V.pinnedTarget.sha256);
            let J = w && !S ? undefined : Y;
            if (w && Y !== undefined && hook.args === undefined && !hook.if && !hook.async && !hook.asyncRewake && !hook.once && Co(hook.command, V.interpreter)) {
                templateTwinId = Y.template.id;
            }
            if (J) {
                let { template, label } = J;
                let re = (n.opts.refusedTemplateIds ?? []).includes(template.id);
                let ie = !re && (n.opts.enabledTemplateIds ?? b0o()).includes(template.id);
                if (re) {
                    z = S ? `${template.filename} is an after-edit hook, so it is not forwarded either: it does not run for this cloud session, only in local ones.` : undefined;
                } else if (!ie) {
                    z = S ? `${template.filename} is not run in the cloud in this version, and as an after-edit hook it is not forwarded either, so it only runs in local sessions.` : `${template.filename} is not run in the cloud in this version; it runs on this machine instead.`;
                } else if (template.event !== site.event) {
                    z = `${template.filename} is configured on ${site.event}; the cloud runs it only on ${template.event}, so it runs on this machine instead.`;
                } else if (label === "legacy" && !n.opts.allowLegacyTemplateDigests) {
                    z = `${template.filename} is an older copy of ${template.id}; the cloud will not run it. Update it.`;
                } else if (hook.args !== undefined || hook.if || hook.async || hook.asyncRewake || hook.once || !Co(hook.command, V.interpreter)) {
                    z = `${template.filename} is run in a way the cloud cannot reproduce (arguments, a condition, async or once), so it runs on this machine instead.`;
                } else if (site.matcher !== undefined && !BVe(site.matcher) && (!To(site.matcher) || !i0e.test(site.matcher))) {
                    z = undefined;
                } else if (!Vcr(site.matcher, template.matcher)) {
                    z = `${template.filename} is configured with the matcher "${ei(site.matcher ?? "", {
                        maxCodeUnits: 200
                    })}" and the cloud runs it on "${template.matcher}", so it runs on this machine instead.`;
                } else {
                    let ae = Do(hook.timeout);
                    N = {
                        entry: {
                            wire: {
                                template: template.id,
                                digest: V.pinnedTarget.sha256,
                                event: site.event,
                                ...!BVe(site.matcher) && {
                                    matcher: site.matcher
                                },
                                ...ae !== undefined && {
                                    timeout_s: ae
                                }
                            },
                            local: {
                                templateId: template.id,
                                label,
                                scriptRealPath: V.pinnedTarget.realPath,
                                bytes: V.bytes,
                                userMatcher: site.matcher,
                                source: site.source.source
                            }
                        },
                        ...label === "legacy" && {
                            legacyNotice: `${template.filename} is an older copy of ${template.id}; the cloud will run that copy. Update it to get fixes.`
                        },
                        ...site.matcher !== undefined && !BVe(site.matcher) && !Vcr(template.matcher, site.matcher) && {
                            narrowNotice: `${template.filename} is configured with the matcher "${ei(site.matcher, {
                                maxCodeUnits: 200
                            })}"; in the cloud it runs on "${template.matcher}" only.`
                        }
                    };
                }
                if (N === undefined && S && ie) {
                    z = `${(z ?? `${template.filename} cannot move to the cloud here.`).replace(/(?:, so|; it) (?:it )?runs on this machine instead\.$/, ".").replace(/\.$/, "")}, and as an after-edit hook it is not forwarded either: it runs in local sessions only.`;
                }
            }
        }
    }
    if (N !== undefined) {
        let V = [
            N.legacyNotice,
            N.narrowNotice
        ].filter((te)=>te !== undefined).join(" ");
        return {
            kind: "template",
            entry: N.entry,
            event: site.event,
            hook,
            ...V !== "" && {
                notice: V
            }
        };
    }
    if (S) {
        return {
            kind: "held",
            reason: "after_edit",
            ...z !== undefined && {
                notice: z
            }
        };
    }
    if (x !== undefined) {
        return x;
    }
    if (site.matcher !== undefined && !To(site.matcher)) {
        return {
            kind: "held",
            reason: "over_cap"
        };
    }
    if (site.matcher !== undefined && !BVe(site.matcher) && !i0e.test(site.matcher)) {
        return {
            kind: "held",
            reason: "pattern_matcher",
            notice: `"${Te(hook)}" does not run for cloud work: cloud sessions cannot take the pattern matcher "${ei(site.matcher, {
                maxCodeUnits: 200
            })}".${h ? "" : ` List the names to match${pkn.has(site.event) ? `, such as ${Be}|${rt}` : ""}.`}`
        };
    }
    if (K !== undefined) {
        return K;
    }
    if (hook.type === "command" && !G) {
        if (!w) {
            return {
                kind: "held",
                reason: "unpinned_command",
                notice: I ? `${y}: it would run through your CLAUDE_CODE_SHELL_PREFIX, which this machine cannot verify.${site.source.source === "user" ? ' Marked "cloud": "device", it runs on this machine, unverified, when the cloud session asks.' : ""}${k}` : W ? `${y}: its script is in a dot-folder this machine does not read hooks from.${A}${k}` : `${y}: this machine cannot verify what the command runs.${hooksFolderInReach || H || h ? "" : " Put the command in one script in ~/.claude/hooks."}${k}`,
                ...I ? {
                    cause: "shell_prefix"
                } : W && {
                    cause: "dot_folder"
                },
                ...(hooksFolderInReach || H) && {
                    noRemedy: true
                }
            };
        }
        F = true;
    }
    return {
        kind: "forward",
        event: site.event,
        hook,
        ...pinnedTarget !== undefined && {
            pinnedTarget
        },
        ...F && {
            authorOptIn: true
        },
        ...w && {
            cloudDevice: true
        },
        ...templateTwinId !== undefined && {
            templateTwinId
        },
        ...z !== undefined && {
            notice: z
        }
    };
}
function To(matcher) {
    return matcher.length <= Xi && !/[\p{Cc}\p{Cf}]/u.test(matcher);
}
function Io(templateId) {
    return `${templateId} is configured more than once; the cloud runs it once.`;
}
function ss() {
    return {
        forwarded: [],
        templates: [],
        held: [],
        heldCounts: {
            after_edit: 0,
            kind_unsupported: 0,
            plugin: 0,
            managed: 0,
            other: 0
        },
        notices: []
    };
}
async function Oqn(e, n, deps) {
    let s = ss();
    if (e.kind === "none") {
        return s;
    }
    let roots = {
        launchDirReal: await Pt(deps, n.launchDir),
        projectDirReal: await Pt(deps, n.projectDir),
        configHomeReal: await Pt(deps, n.configHome),
        extraReach: D((await Promise.all([
            ...n.repoRoot !== undefined ? [
                n.repoRoot
            ] : [],
            ...n.extraReachRoots ?? []
        ].map(async (H)=>{
            let F = await a0e(await l0e(H, n.launchDir), n.launchDir, qle());
            if (F.verdict === "local") {
                return [
                    H,
                    await Pt(deps, F.spelling)
                ];
            }
            if (F.verdict === "foreign") {
                return [
                    F.spelling
                ];
            }
            return [
                H,
                ...c0e(F, n.launchDir)
            ];
        }))).flat())
    };
    let reach = {
        launchDir: n.launchDir,
        launchDirReal: roots.launchDirReal,
        configHomeReal: roots.configHomeReal,
        projectDir: n.projectDir,
        projectDirReal: roots.projectDirReal,
        ...n.sync !== undefined && {
            sync: n.sync
        },
        extraReach: roots.extraReach
    };
    let w = {
        opts: n,
        deps,
        roots,
        reach,
        resolved: new Map,
        hooksFolderInReach: mt([
            posix.join(deps.home, ".claude", "hooks")
        ], reach)
    };
    let k = (H, F, { cause, noRemedy } = {})=>{
        s.held.push({
            event: H.event,
            ...H.matcher !== undefined && {
                matcher: ei(H.matcher, {
                    maxCodeUnits: 200
                })
            },
            source: H.source.source,
            command: Te(H.hook),
            reason: F,
            ...cause !== undefined && {
                cause
            },
            ...(noRemedy || Po(H.source.source) || F === "after_edit" && !n.inRepository) && {
                noRemedy: true
            }
        });
        if (F === "after_edit") {
            s.heldCounts.after_edit += 1;
        } else if (F === "kind_unsupported") {
            s.heldCounts.kind_unsupported += 1;
        } else {
            s.heldCounts.other += 1;
        }
    };
    let y = new Set;
    let S = (H)=>{
        if (H !== undefined && !y.has(H)) {
            y.add(H);
            s.notices.push(H);
        }
    };
    let C = (H)=>{
        if (y.delete(H)) {
            s.notices = s.notices.filter((F)=>F !== H);
        }
    };
    let A = new Map;
    let R = new Map;
    let x = new Map;
    let K = new Set;
    let G = new Set;
    let W = new Map;
    if ([
        n.launchDir,
        n.configHome,
        n.sync?.rootReal,
        n.sync?.root,
        ...n.extraReachRoots ?? []
    ].some((H)=>H !== undefined && !tR(H))) {
        S("Hooks stay on this machine: its launch, config or sync directory is not an absolute path this version can place, so none are offered to the cloud session.");
        for (let H of e.sources){
            for (let F of xo(H)){
                k(F, "unverifiable_target");
            }
        }
        return s;
    }
    for (let H of e.sources){
        let F = await ts(H, w);
        let P = xo(H);
        if (F !== null && P.length > 0) {
            S(`Hooks from ${ei(H.settingsFile ?? "", {
                maxCodeUnits: 200
            })} are not offered to the cloud session: ${F.cause}.`);
        }
        for (let site of P){
            let z = await Ao(site, w, F !== null);
            if (F !== null) {
                k(site, z.kind === "held" && (z.reason.startsWith("event_") || z.reason === "kind_unsupported" || z.reason === "after_edit") ? z.reason : F.reason, {
                    noRemedy: true
                });
                continue;
            }
            if (z.kind === "held") {
                S(z.notice);
                k(site, z.reason, z);
                continue;
            }
            let V = z;
            if (V.kind === "template") {
                let { entry } = V;
                let ae = dn(site, V.hook, deps.defaultShell);
                let ne = W.get(entry.local.templateId);
                let se = R.get(ae);
                let j = ne !== undefined && (ne.site.matcher ?? "") === (site.matcher ?? "");
                let X = ne !== undefined ? j : s.templates.length < ln;
                if (se !== undefined && X) {
                    k(se.site, "duplicate");
                    K.add(se.index);
                    if (se.notice !== undefined) {
                        C(se.notice);
                    }
                    R.delete(ae);
                }
                if (ne !== undefined && !j) {
                    V = await Ao(site, w, false, true);
                    if (V.kind === "held") {
                        k(site, V.reason, V);
                        S(V.notice);
                        continue;
                    }
                } else if (ne !== undefined) {
                    k(ne.site, "duplicate");
                    let le = dn(ne.site, ne.hook, deps.defaultShell);
                    if (le !== ae) {
                        x.delete(le);
                    }
                    x.set(ae, {
                        index: ne.index,
                        templateId: entry.local.templateId
                    });
                    s.templates[ne.index] = entry;
                    if (ne.notice !== undefined) {
                        C(ne.notice);
                    }
                    W.set(entry.local.templateId, {
                        index: ne.index,
                        site,
                        hook: V.hook,
                        ...V.notice !== undefined && {
                            notice: V.notice
                        }
                    });
                    S(Io(entry.local.templateId));
                    S(V.notice);
                    continue;
                } else if (s.templates.length >= ln) {
                    k(site, "over_cap");
                    S(`Only ${ln} templates can run in the cloud session; the rest stay on this machine.`);
                    continue;
                } else {
                    W.set(entry.local.templateId, {
                        index: s.templates.length,
                        site,
                        hook: V.hook,
                        ...V.notice !== undefined && {
                            notice: V.notice
                        }
                    });
                    x.set(ae, {
                        index: s.templates.length,
                        templateId: entry.local.templateId
                    });
                    s.templates.push(entry);
                    S(V.notice);
                    continue;
                }
            }
            if (V.kind !== "forward") {
                continue;
            }
            let te = V;
            let Z = Do(te.hook.timeout);
            let M = {
                wire: {
                    id: "",
                    event: site.event,
                    ...!BVe(site.matcher) && {
                        matcher: site.matcher
                    },
                    kind: te.hook.type,
                    ...Z !== undefined && {
                        timeout_s: Z
                    },
                    source: H.source,
                    ...te.hook.if && {
                        has_condition: true
                    },
                    ...te.pinnedTarget !== undefined && {
                        target_pinned: true
                    },
                    ...(te.authorOptIn || te.cloudDevice && te.hook.type === "command") && {
                        author_opt_in: true
                    }
                },
                local: {
                    hook: te.hook,
                    matcher: site.matcher,
                    event: te.event,
                    source: H.source,
                    ...te.pinnedTarget !== undefined && {
                        pinnedTarget: te.pinnedTarget
                    },
                    ...te.cloudDevice && {
                        cloudOptIn: true
                    },
                    ...te.templateTwinId !== undefined && {
                        templateTwinId: te.templateTwinId
                    }
                }
            };
            let B = dn(site, te.hook, deps.defaultShell);
            let Y = x.get(B);
            let J = (A.get(site.event) ?? 0) < Eo;
            let L = R.has(B) || s.forwarded.length < an && J;
            if (Y !== undefined && L) {
                let ie = W.get(Y.templateId);
                if (ie !== undefined && ie.index === Y.index) {
                    k(ie.site, "duplicate");
                    if (ie.notice !== undefined) {
                        C(ie.notice);
                    }
                    C(Io(Y.templateId));
                    W.delete(Y.templateId);
                }
                G.add(Y.index);
                x.delete(B);
            }
            let ee = R.get(B);
            if (ee !== undefined) {
                k(ee.site, "duplicate");
                let id = s.forwarded[ee.index].wire.id;
                s.forwarded[ee.index] = {
                    ...M,
                    wire: {
                        ...M.wire,
                        id
                    }
                };
                if (ee.notice !== undefined) {
                    C(ee.notice);
                }
                R.set(B, {
                    index: ee.index,
                    site,
                    ...te.notice !== undefined && {
                        notice: te.notice
                    }
                });
                S(te.notice);
                continue;
            }
            if (s.forwarded.length >= an) {
                k(site, "over_cap");
                S(`Only the first ${an} hooks are offered to the cloud session; the rest stay on this machine.`);
                continue;
            }
            if (!J) {
                k(site, "over_cap");
                S(`Only the first ${Eo} ${site.event} hooks are offered to the cloud session; the rest stay on this machine.`);
                continue;
            }
            let re = A.get(site.event) ?? 0;
            A.set(site.event, re + 1);
            R.set(B, {
                index: s.forwarded.length,
                site,
                ...te.notice !== undefined && {
                    notice: te.notice
                }
            });
            S(te.notice);
            s.forwarded.push({
                ...M,
                wire: {
                    ...M.wire,
                    id: v0o(n.instanceId, site.event, re)
                }
            });
        }
    }
    s.forwarded = s.forwarded.filter((H, F)=>!K.has(F));
    s.templates = s.templates.filter((H, F)=>!G.has(F));
    let I = new Map(s.templates.map((H)=>[
            `${H.wire.template}\x00${H.wire.event}`,
            H.wire.template
        ]));
    s.forwarded = s.forwarded.filter((H)=>{
        let templateTwinId = H.local.templateTwinId;
        let P = templateTwinId === undefined ? undefined : I.get(`${templateTwinId}\x00${H.wire.event}`);
        if (templateTwinId === undefined || P === undefined || !Vcr(G9e(templateTwinId)?.matcher ?? "", H.local.matcher ?? "*")) {
            return true;
        }
        s.held.push({
            event: H.wire.event,
            ...H.local.matcher !== undefined && {
                matcher: ei(H.local.matcher, {
                    maxCodeUnits: 200
                })
            },
            source: H.local.source,
            command: Te(H.local.hook),
            reason: "duplicate"
        });
        s.heldCounts.other += 1;
        S(`"${Te(H.local.hook)}" is the same script the cloud already runs as ${P}; it is not also run on this machine.`);
        return false;
    });
    return s;
}
function judgeSender(e) {
    let attestation = NIe(e);
    if (attestation === undefined) {
        return undefined;
    }
    return {
        attestation,
        heldBack: Ije(attestation)
    };
}
function ls(e) {
    let n = e.forwarded + e.templateNames.length;
    return `${n === 1 ? "One of your hooks" : `${n} of your hooks`} could run for cloud sessions started from this machine \u2014 run /hooks to decide (nothing from this machine runs for them until you do).`;
}
function Mqn(e) {
    return e.CLAUDE_CODE_SHELL_PREFIX?.trim() || undefined;
}
const $o = 30000;
function ds(path, n, r = async (s)=>({
        real: await realpath(s),
        aliased: await _nr(s)
    })) {
    let s = {
        path,
        real: null,
        env: n === undefined ? undefined : {
            ...n
        },
        locate: ()=>{
            s.retryAt = undefined;
            r(path).then(({ real, aliased })=>{
                s.real = aliased ? "unresolvable" : real;
                if (aliased) {
                    s.retryAt = Date.now() + $o;
                }
            }, (u)=>{
                s.real = "unresolvable";
                if (u?.code !== "ENOENT" && u?.code !== "ENOTDIR") {
                    s.retryAt = Date.now() + $o;
                }
            });
        }
    };
    s.locate();
    return s;
}
function cs(legacyConfigFile, n = Date.now()) {
    if (legacyConfigFile.retryAt !== undefined && n >= legacyConfigFile.retryAt) {
        legacyConfigFile.locate?.();
    }
}
function SLt(e) {
    e.legacyConfigFile ??= ds(Bl(), h9o(e, XQ()));
    cs(e.legacyConfigFile);
    return e.legacyConfigFile;
}
function Hqn(e, n, r = (s)=>fe(s)?.env) {
    let s = (h)=>e.pinnedScopes.has(h) || h === "userSettings" && e.everInReach.has("user") || h === "flagSettings" && e.everInReach.has("flag");
    let u = n.env !== undefined && typeof n.real === "string" && n.real !== "unresolvable" && isAbsolute(n.path) && !n_([
        n.path,
        n.real
    ], [
        ...e.stickyRoots
    ]);
    return Object.assign({}, u ? n.env : {}, ...ws.filter((h)=>!Cp.has(h) && !s(h)).map((h)=>YNe(r(h), h) ?? {}));
}
function Dqn(e) {
    return Kr() ?? e;
}
function Lqn(e, n) {
    let r = setTimeout(e, n);
    r.unref();
    return {
        clear: ()=>clearTimeout(r)
    };
}
function Yan() {
    if (!(O() !== "windows" && xf() && cSr() && !a.CLAUDE_CODE_DISABLE_HOOK_FORWARDING)) {
        return false;
    }
    if (xje()) {
        return true;
    }
    i("tengu_device_hooks_kept_back", {
        flag: d(Sve),
        own_flags_loaded: ya()
    });
    return false;
}
function us(e) {
    let n = null;
    let r = false;
    let s = new Set;
    return {
        state: ()=>n,
        setState (u) {
            n = r ? null : u;
        },
        async handleForwardedHook (u) {
            if (r) {
                return;
            }
            try {
                let h = await e.servicer.serve(u, n);
                if (r) {
                    return;
                }
                if (h.kind === "silent") {
                    if (h.reason === "not_mine" || h.reason === "no_state" || h.reason === "withdrawn") {
                        e.release(u.requestId);
                    }
                    return;
                }
                e.respond(u.requestId, h.answer);
            } catch (error) {
                e.logError(error);
                if (yfe(u.callbackId)?.event === "PreToolUse" && !r) {
                    try {
                        e.respond(u.requestId, {
                            hookSpecificOutput: {
                                hookEventName: "PreToolUse",
                                permissionDecision: "deny",
                                permissionDecisionReason: "A hook on your machine could not be run for this call (internal error); retry"
                            }
                        });
                    } catch  {}
                }
            }
        },
        handleCancelled (u, h) {
            if (r || !e.servicer.cancel(u, h) || h !== "worker") {
                return;
            }
            for (let w of s){
                w();
            }
        },
        onStoppedWhileRunning (u) {
            s.add(u);
            return ()=>s.delete(u);
        },
        async dispose () {
            r = true;
            n = null;
            s.clear();
            e.servicer.cancelAll();
            await e.staging.dispose();
        }
    };
}
function Ho({ launchDir, memory, getTools, respond, release, onLine, trustAccepted = lO, isMuted }) {
    let y = ()=>null;
    let staging = D9o(L9o(), ()=>[
            ...y()?.cloudWritableRoots ?? [
                launchDir
            ],
            ...n6t(launchDir)
        ]);
    let C = St(()=>staging.dispose());
    let projectDir = Dqn(launchDir);
    let hookCwd = projectDir;
    realpath(projectDir).then((H)=>{
        hookCwd = H;
    }, ()=>{});
    let x = {
        ...bs()
    };
    YEn(memory, SLt(memory).env);
    let K = memory.senderFor(launchDir);
    let hostEnv = ()=>{
        let H = bs();
        return met({
            attached: x,
            beforeSettings: Qg(),
            ownEnv: Hqn(K, SLt(memory)),
            childrenSee: (F)=>Object.hasOwn(H, F)
        });
    };
    let servicer = Qn({
        memory: memory.servicerFor(launchDir),
        now: Date.now,
        setTimer: Lqn,
        trustAccepted,
        ...isMuted && {
            isMuted
        },
        judgeSender,
        pin: wet(),
        staging,
        run: (H, F, P)=>Wm(F.launchDir, ()=>Nn(H, F, Hn, P)),
        evaluateCondition: (H, F)=>IXr(H, F, getTools(), F.cwd),
        parseTarget: (H)=>{
            let F = hostEnv();
            return gLe(H, {
                home: bHe(F),
                hookCwd,
                projectDir,
                defaultShell: uV(),
                shellPrefix: Mqn(F)
            });
        },
        emptyTranscriptPath: ()=>staging.placeholder("cloud-transcript.jsonl"),
        defaultTimeoutMs,
        onLine: (line, level)=>onLine({
                line,
                level
            }),
        telemetry: (H)=>{
            let F = hs(H.outcome);
            if (F === "ok") {
                g("device_hooks_serve");
            } else if (F === "sad") {
                f("device_hooks_serve", H.outcome);
            } else if (F === "bad") {
                m("device_hooks_serve", H.outcome);
            }
            i("tengu_device_hook_served", {
                event: pe(H.event),
                kind: pe(H.kind),
                outcome: d(H.outcome),
                exit_class: pe(H.exitClass),
                duration_ms: H.durationMs,
                translated_paths: H.translatedPaths,
                replay: H.replay,
                blocked: H.blocked,
                staged: H.staged,
                project_frame: H.projectFrame,
                repinned: H.repinned,
                waited_ms: H.waitedMs,
                ...H.attestation !== undefined && {
                    attestation_mode: d(H.attestation.mode),
                    request_attestation: d(H.attestation.status),
                    attestation_verdict: d(H.attestation.verdict)
                }
            });
        },
        debug: (H)=>t(H),
        logError,
        extraWritableRoots: ()=>n6t(launchDir),
        hostEnv,
        childEnvironment: (H, F)=>ynr(H, F, bs()),
        placePath: Vge,
        resolveProgram: het,
        defaultShell: ()=>uV()
    });
    let I = us({
        servicer,
        staging: {
            dispose: ()=>{
                C();
                return staging.dispose();
            }
        },
        respond,
        release,
        logError: (H)=>{
            logError(H);
            m("device_hooks_serve", "serve_threw");
        }
    });
    y = I.state;
    t("[deviceHooks] device hook session created for this attach");
    return I;
}
const servicerDefaults = {
    stageVerifiedBytes: "always",
    unmarkedStartFolder: "private",
    repinChangedScripts: false,
    wireLabel: "basename",
    denyUnjudgeablePaths: false,
    runWithUntranslatedPaths: false,
    timeoutFailsClosed: false
};
function No({ launchDir, memory, cloudSessionId, session, sendControlRequest, syncRoot, servingMuted, onLine, storageV5 }) {
    let openNoFollow = wet().openNoFollow;
    let C = realpath(launchDir).catch(()=>launchDir);
    let projectDir = Dqn(launchDir);
    let R = repoRootOf(launchDir);
    let x = R ?? launchDir;
    let K = memory.senderFor(launchDir);
    let G = {
        ...bs()
    };
    YEn(memory, SLt(memory).env);
    let W = ()=>{
        let I = bs();
        return met({
            attached: G,
            beforeSettings: Qg(),
            ownEnv: Hqn(K, SLt(memory)),
            childrenSee: (H)=>Object.hasOwn(I, H)
        });
    };
    return Zrs({
        memory: K,
        now: Date.now,
        setTimer: Lqn,
        hookFlags: Ln(),
        capture: ()=>Vxn(qxn()),
        buildInventory: ({ captured, instanceId, syncRoot, reachRoots, withoutTemplates })=>{
            let z = W();
            return Oqn(captured, {
                instanceId,
                launchDir,
                projectDir,
                configHome: configHome(),
                ...syncRoot !== null && {
                    sync: {
                        rootReal: syncRoot.real,
                        root: syncRoot.root
                    }
                },
                inRepository: R !== null,
                ...x !== launchDir && {
                    repoRoot: x
                },
                extraReachRoots: reachRoots,
                allowLegacyTemplateDigests: true,
                refusedTemplateIds: [
                    ...withoutTemplates
                ],
                optInPins: K.optInPins,
                reachMemory: K,
                localSettingsLocation: K.localSettingsLocation
            }, {
                realpath,
                open: openNoFollow,
                home: bHe(z),
                defaultShell: uV(),
                shellPrefix: Mqn(z)
            });
        },
        mintInstanceId: ()=>w0o(),
        displayName: Uft(),
        cloudSessionId,
        launchDir,
        launchDirReal: ()=>C,
        realpath,
        projectRoot: x,
        syncRoot: async ()=>{
            let I = syncRoot();
            if (I === null) {
                return null;
            }
            return {
                root: I,
                real: await realpath(I).catch(()=>I)
            };
        },
        servingMuted,
        commonWriteRoots: ()=>DTe(launchDir),
        scopeWriteRoots: (I, H)=>Yle(launchDir, I, H),
        scopeWriteEntries: (I)=>Kle(I, launchDir),
        scopeSettingsFile: (I)=>yn(I) ?? null,
        sendRequest: async (I, { timeoutMs, onEchoed })=>{
            try {
                return await sendControlRequest(I, {
                    timeoutMs,
                    background: true,
                    ...onEchoed && {
                        onEchoed
                    }
                });
            } catch (error) {
                let N = T2(error);
                if (N === "timeout" || N === "aborted") {
                    throw Error("timeout: no answer from the cloud worker in time");
                }
                if (N === "disconnected" || N === "not_connected") {
                    throw Error("disconnected: the session stream is not connected");
                }
                throw error;
            }
        },
        ensureConsent: Qrs({
            deps: NTe(storageV5),
            pin: memory.consentPin,
            onNotAsked: (I)=>{
                i("tengu_device_hooks_consent_notice", {});
                onLine({
                    line: ls(I),
                    level: "info"
                });
            },
            isStoreInReach: (I)=>Ukt(LTe(), I, realpath),
            onUntrustedStore: (I)=>{
                let H = $n(LTe());
                onLine({
                    line: I === "writable" ? `The saved answer about this machine's hooks is ignored here: this cloud session can itself write ${H}. Decide for it in /hooks.` : `The saved answer about this machine's hooks is ignored here: ${H} could not be located to check who can write it. Decide for this session in /hooks.`,
                    level: "warning"
                });
            }
        }),
        arm: (I)=>session.setState(I),
        onLine,
        telemetry: (I)=>{
            if (I.trigger === "renewal" && I.outcome === "registered") {
                return;
            }
            let H = {
                held_after_edit: I.heldAfterEdit,
                held_kind_unsupported: I.heldByReason.kind_unsupported ?? 0,
                held_event_runs_locally: I.heldByReason.event_runs_locally ?? 0,
                held_event_later: I.heldByReason.event_later ?? 0,
                held_event_low_value: I.heldByReason.event_low_value ?? 0,
                held_event_container_internal: I.heldByReason.event_container_internal ?? 0,
                held_source_in_sync_root: I.heldByReason.source_in_sync_root ?? 0,
                held_sync_root_is_config_dir: I.heldByReason.sync_root_is_config_dir ?? 0,
                held_unverifiable_target: I.heldByReason.unverifiable_target ?? 0,
                held_in_reach: I.heldByReason.in_reach ?? 0,
                held_interpreter_unvouched: I.heldByReason.interpreter_unvouched ?? 0,
                held_loads_from_reach: I.heldByReason.loads_from_reach ?? 0,
                held_unpinned_command: I.heldByReason.unpinned_command ?? 0,
                held_author_skip: I.heldByReason.author_skip ?? 0,
                held_duplicate: I.heldByReason.duplicate ?? 0,
                held_over_cap: I.heldByReason.over_cap ?? 0,
                held_pattern_matcher: I.heldByReason.pattern_matcher ?? 0
            };
            i("tengu_device_hooks_client_register", {
                outcome: d(I.outcome),
                trigger: d(I.trigger),
                forwarded: I.forwarded,
                templates: I.templates,
                ...H,
                held_other: I.heldOther,
                accepted: I.accepted,
                ignored: I.ignored,
                attempt: I.attempt,
                after_flags_unanswered: I.afterFlagsUnanswered
            });
            switch(I.outcome){
                case "registered":
                case "unregistered":
                case "nothing_to_offer":
                case "dormant":
                case "no_consent":
                case "muted":
                case "flag_off":
                    g("device_hooks_client_register", {
                        forwarded: I.forwarded
                    });
                    break;
                case "not_ready":
                case "stale_epoch":
                case "superseded":
                case "failed":
                case "consent_distrusted":
                case "flag_unanswered":
                    f("device_hooks_client_register", I.outcome);
                    break;
                default:
                    m("device_hooks_client_register", I.outcome);
            }
        },
        lapseTelemetry: (I)=>i("tengu_device_hooks_lapse_line", {
                kind: d(I)
            }),
        reachPinnedTelemetry: (I)=>i("tengu_device_hooks_reach_pinned", {
                source: d(I)
            }),
        sourcePinnedTelemetry: (I)=>i("tengu_device_hooks_source_pinned", {
                source: d(I.source),
                changed: I.changed,
                appeared: I.appeared,
                vanished: I.vanished
            }),
        servicerDefaults
    });
}
function hs(outcome) {
    switch(outcome){
        case "answered":
        case "event_mismatch":
        case "condition_false":
        case "cancelled":
        case "muted":
            return "ok";
        case "not_mine":
        case "cached":
        case "withdrawn_replay":
        case "same_invocation":
            return null;
        case "unknown_id":
        case "replay_mismatch":
        case "event_name_mismatch":
        case "input_too_large":
        case "overloaded":
        case "stale":
        case "invalid_input":
        case "unsupported_kind":
        case "no_roots":
        case "untrusted":
        case "in_reach_refused":
        case "pin_refused":
        case "pin_changed":
        case "pin_unreadable":
        case "untranslated_skipped":
        case "condition_error":
        case "no_slot":
        case "too_late":
        case "run_error":
        case "unattested":
            return "sad";
        case "staging_failed":
        case "decide_error":
            return "bad";
        default:
            return outcome;
    }
}
const ps = /^[0-9a-f]{64}$/;
function Xan({ description, input }) {
    let s = Object.keys(input);
    let input_content_digest = input.content_digest;
    return description !== undefined && description.length <= AV && oF(description) && s.length === 1 && typeof input_content_digest === "string" && ps.test(input_content_digest);
}
function Jan(e) {
    let n = {
        realpath,
        repoRootOf,
        consentPath: cIe,
        configHome,
        ...e.deps
    };
    let { launchDir, memory } = e;
    let u = null;
    let h = ()=>u ??= (async ()=>{
            let w = (R)=>n.realpath(R).catch(()=>R);
            let k = await w(launchDir);
            let y = D([
                launchDir,
                k
            ].map((R)=>n.repoRootOf(R)).filter((R)=>R !== null));
            let repoRoots = D((await Promise.all(y.map(w))).concat(y));
            let [repoRoot = null] = y;
            return {
                tracker: En({
                    launchDir,
                    projectDir: launchDir,
                    repoRoot,
                    configHome: n.configHome(),
                    syncRoot: e.syncRoot,
                    memory,
                    ...n.tracker !== undefined && {
                        deps: n.tracker
                    }
                }),
                launchRoots: D([
                    launchDir,
                    k,
                    ...repoRoots
                ]),
                repoRoots
            };
        })();
    return {
        async judge () {
            try {
                let { tracker, launchRoots, repoRoots } = await h();
                let S = await tracker.current();
                if (e.syncElsewhere !== false) {
                    return "unknown";
                }
                let C = [
                    ...ze(S),
                    ...repoRoots
                ];
                if (C.some((K)=>K === NL || !tR(K))) {
                    return "unknown";
                }
                let A = n.consentPath();
                if (!A.startsWith("/")) {
                    return "unknown";
                }
                let R = await Ukt(A, C, n.realpath);
                if (R === false) {
                    return "outside";
                }
                if (R === "unresolvable") {
                    return "unknown";
                }
                let x = [
                    A,
                    await n.realpath(A).catch(()=>A)
                ];
                if (n_(x, launchRoots)) {
                    return "in_launch_dir";
                }
                if (n_(x, [
                    ...memory.syncRoots
                ])) {
                    return "in_sync_root";
                }
                return "in_other_root";
            } catch  {
                return "unknown";
            }
        }
    };
}
const gs = new Set([
    "userSettings",
    "localSettings",
    "flagSettings",
    "projectSettings",
    "policySettings"
]);
function Zan(e) {
    let n = e.createSession ?? Ho;
    let r = e.createSender ?? No;
    let s = e.isServingMuted ?? jle;
    let servingMuted = s();
    let session = n({
        launchDir: e.launchDir,
        memory: e.memory,
        getTools: e.getTools,
        respond: (W, I)=>e.manager()?.respondToForwardedHook(W, I) ?? false,
        release: (W)=>e.manager()?.releaseForwardedHook(W),
        onLine: e.onLine,
        ...e.trustAccepted && {
            trustAccepted: e.trustAccepted
        },
        isMuted: ()=>servingMuted
    });
    let w = r({
        launchDir: e.launchDir,
        memory: e.memory,
        cloudSessionId: e.cloudSessionId,
        session,
        sendControlRequest: (W, I)=>{
            let H = e.manager();
            if (H === null) {
                return Promise.reject(Error("[RemoteSessionManager] Cannot send: not connected"));
            }
            return H.sendControlRequest(W, I);
        },
        syncRoot: e.syncRoot,
        servingMuted,
        onLine: e.onLine,
        storageV5: e.storageV5
    });
    let k = (e.onServingMuteRecheck ?? $J)(()=>{
        try {
            let W = s();
            if (W === servingMuted) {
                return;
            }
            if (W) {
                servingMuted = true;
                w.servingMute(true);
            } else {
                w.servingMute(false);
                servingMuted = false;
            }
        } catch (error) {
            logError(error);
        }
    });
    let y = e.registerCleanup(()=>w.unregister(Bkt));
    let S = e.subscribeSettingsChanges((W)=>{
        if (gs.has(W)) {
            w.settingsChanged();
        }
    });
    let C = session.onStoppedWhileRunning(()=>w.requestRegistration("stopped_while_running"));
    let R = (e.subscribeConsent ?? ((W)=>Jrs(e.memory.consentAnnounced, W)))((W)=>w.consentDecided(W));
    let x = (W)=>()=>{
            try {
                w.requestRegistration(W);
            } catch (error) {
                logError(error);
            }
        };
    let K = e.memory.noteAttached(e.launchDir);
    let G = false;
    return {
        callbacks: {
            onForwardedHookCallback: (W)=>{
                session.handleForwardedHook(W);
                let I = yfe(W.callbackId)?.instanceId;
                let { registeredInstanceId, instanceId } = w.snapshot();
                if (I !== undefined && (I === registeredInstanceId || I === instanceId)) {
                    w.activity();
                }
            },
            onForwardedHookCancelled: (W, I)=>{
                session.handleCancelled(W, I);
            }
        },
        onStreamConnected: x("connected"),
        onWorkerInit: x("init"),
        onWorkerUp: x("worker_up"),
        onTurnInFlight: ()=>w.turnInFlight(),
        onTurnEnded: ()=>w.turnEnded(),
        beforeSend: ()=>w.ensureRegistered(),
        snapshot: ()=>w.snapshot(),
        dispose: ()=>{
            if (G) {
                return;
            }
            G = true;
            K();
            k();
            S();
            C();
            R();
            y();
            let W = w.unregister(Bkt);
            w.dispose();
            let I = e.registerCleanup(()=>W);
            W.then(I, I);
            session.dispose();
        }
    };
}
const ks = [
    400,
    1200
];
const _s = 5000;
const qOr = "Switch permission modes away and back once to keep this session's mode: it couldn't be saved on the server, so the session may fall back to default after idling.";
const vs = "Switch permission modes away and back once: this session's mode couldn't be saved on the server.";
const ys = "This session's permission mode couldn't be saved: the server says the session isn't active. Switch modes away and back once it is.";
function Ss(result) {
    return result.outcome === "failed" && (result.cause === "network" || result.cause === "http" && (result.status >= 500 || result.status === 429));
}
function eln({ manager, mode, surface, sessionId, superseded, observedMode, seededModeReported, onRefused, onGaveUp, onTaken, linkDown }) {
    let A = (G)=>{
        i("tengu_remote_create_permission_mode_push", {
            surface: d(surface),
            mode: d(mode),
            kind: d(G.kind),
            posted_mode: d(G.postedMode),
            outcome: d(G.outcome),
            ..."cause" in G && {
                cause: d(G.cause)
            },
            ..."status" in G && {
                status: G.status
            },
            ...G.attempt !== undefined && {
                attempt: G.attempt
            },
            session_id: ye(sessionId)
        });
    };
    let R = ()=>{
        let G = observedMode?.();
        return superseded() || G !== undefined && G !== mode && (G !== "default" || (seededModeReported?.() ?? false));
    };
    let x = async (G, kind, I = Date.now(), H = 1)=>{
        let F = new AbortController;
        let P = manager.postControlRequest({
            subtype: "set_permission_mode",
            mode: G
        }, {
            answerExpected: false,
            background: true,
            timeoutMs: Nqn,
            signal: F.signal
        });
        P.response.catch(()=>{});
        let result = await P.posted;
        A({
            ...result,
            kind,
            postedMode: G,
            attempt: H
        });
        if (result.outcome === "accepted") {
            return {
                result,
                response: P.response
            };
        }
        F.abort();
        if (R()) {
            A({
                kind,
                postedMode: G,
                outcome: "superseded"
            });
            return {
                result,
                response: null
            };
        }
        let z = ks[H - 1];
        if (z !== undefined && Ss(result) && Date.now() - I < _s) {
            await Q(z);
            if (!R()) {
                return x(G, kind, I, H + 1);
            }
            A({
                kind,
                postedMode: G,
                outcome: "superseded"
            });
            return {
                result,
                response: null
            };
        }
        A({
            kind,
            postedMode: G,
            outcome: "gave_up"
        });
        m("remote_create_mode_push", `${kind}_gave_up`);
        if (!(result.outcome === "failed" && result.cause === "closed")) {
            onGaveUp?.(result.outcome === "session_inactive" ? ys : kind === "push" ? qOr : vs);
        }
        return {
            result,
            response: null
        };
    };
    let K = (G)=>{
        G.then(()=>{
            A({
                kind: "push",
                postedMode: mode,
                outcome: "taken"
            });
            onTaken?.();
            g("remote_create_mode_push");
            t(`[remote] The session took its create's ${mode} permission mode as a live request`);
        }, (W)=>{
            let I = T2(W);
            t(`[remote] The create's ${mode} permission mode push was not taken (${I}): ${ei(l(W), {
                maxCodeUnits: 200
            })}`);
            if (!(I === "server_error" || (I === "disconnected" || I === "not_connected") && linkDown !== undefined && !linkDown())) {
                A({
                    kind: "push",
                    postedMode: mode,
                    outcome: "unanswered"
                });
                f("remote_create_mode_push", "unanswered");
                return;
            }
            A({
                kind: "push",
                postedMode: mode,
                outcome: "refused"
            });
            f("remote_create_mode_push", "refused");
            if (R() || mode === "default") {
                return;
            }
            let F = x("default", "converge");
            F.then(({ response })=>response?.catch((N)=>{
                    t(`[remote] The default mode sent after that refusal was not taken either: ${ei(l(N), {
                        maxCodeUnits: 200
                    })}`);
                }));
            onRefused?.(F.then(({ result })=>result));
        });
    };
    return x(mode, "push").then(({ result, response })=>{
        if (response !== null) {
            K(response);
        }
        return result;
    });
}
function $Ho({ posted, mode, latch, retire, now = Date.now }) {
    let h = posted.then((w)=>w.outcome === "accepted", ()=>false);
    h.then((w)=>{
        if (w) {
            retire();
        } else {
            latch.notTakenAtMs ??= now();
        }
    });
    return async ({ submittedAtMs })=>{
        let k = submittedAtMs ?? now();
        if (await h) {
            return;
        }
        if (k - (latch.notTakenAtMs ?? k) < UHo) {
            return {
                go: false,
                reason: `the session's ${mode} permission mode couldn't be saved on the server first`
            };
        }
        retire();
    };
}
const Rs = 60000;
const Es = 180000;
const tln = "Cloud session may be unresponsive. Attempting to reconnect…";
const nln = "Claude is waiting for you to answer its request and will continue with this message once you do.";
function rln(e) {
    if (e) {
        return Es;
    }
    return Rs;
}
class vLt {
    holdsWhileAsked;
    openRequests = new Set;
    watched = null;
    watch(onSilent, schedule) {
        let r = this.holds();
        if (r) {
            this.clear();
        }
        let s = {
            onSilent,
            schedule,
            cancel: null
        };
        this.watched = s;
        if (r && this.openRequests.size > 0) {
            g("remote_response_watch_hold");
            return false;
        }
        this.start(s);
        return true;
    }
    clear() {
        this.watched?.cancel?.();
        this.watched = null;
    }
    requestOpened(e) {
        this.openRequests.add(e);
        if (this.holds() && this.watched?.cancel) {
            this.watched.cancel();
            this.watched.cancel = null;
            g("remote_response_watch_hold");
        }
    }
    requestClosed(e) {
        this.openRequests.delete(e);
        if (this.openRequests.size === 0 && this.watched?.cancel === null) {
            this.start(this.watched);
        }
    }
    holds() {
        this.holdsWhileAsked ??= lun();
        return this.holdsWhileAsked;
    }
    start(e) {
        e.cancel = e.schedule(()=>{
            if (this.watched === e) {
                this.watched = null;
            }
            e.onSilent();
        });
    }
}
export { R9e, Oqn, Mqn, SLt, Hqn, Dqn, Lqn, Yan, Xan, Jan, Qan, Zan, Lwe, wLt, qOr, eln, $Ho, tln, nln, rln, vLt };
