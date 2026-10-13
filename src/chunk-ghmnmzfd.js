import { b, d, pe, gl, kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, ot, W, l, v, Vr, Ym, efe, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ks, AC } from "/$bunfs/root/chunk-xgw72tt1.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { q, oo, B, K, Xc, nj, oG, Xxo, Wse, Km, i0t, Msn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { _, X, Dg, ypt, ps, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne, eG } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ois, sis, Wur, JTe, XJ } from "/$bunfs/root/chunk-j8rm3ydc.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { u0 } from "/$bunfs/root/chunk-6g4165br.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { ss, k0, Kz, En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { fr, $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { X2, FAe } from "/$bunfs/root/chunk-fff9dfxd.js";
import { d4 } from "/$bunfs/root/chunk-twpzaz8r.js";
import { S3e, Hw } from "/$bunfs/root/chunk-t0b6khh6.js";
import { uLe } from "/$bunfs/root/chunk-gc4z3rgw.js";
import { dPe } from "/$bunfs/root/chunk-3fj60qgx.js";
import { Wue } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { o3t } from "/$bunfs/root/chunk-c60vk2cz.js";
import { u7, Dt, Jyo, gEr, Ob } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Lu } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { ja } from "/$bunfs/root/chunk-hz24p3zh.js";
import { ci } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Uit } from "/$bunfs/root/chunk-tf8026s8.js";
import { qat, koe } from "/$bunfs/root/chunk-d4n0kkf1.js";
import { _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { Vue } from "/$bunfs/root/chunk-77t63btp.js";
import { E5e, o, E, M, oe, T, u, _t, Ue, Wr, ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { Oh } from "/$bunfs/root/chunk-1qq5kpcj.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { Vm, gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { delimiter, isAbsolute, dirname, basename, join, relative } from "path";
import { lstat, mkdir, readFile, rename, rm, readdir, stat } from "fs/promises";
const _e = [
    "shell",
    "slash",
    "fleet",
    "spare",
    "respawn"
];
function Yss(e) {
    return _e.includes(e);
}
const proto_1 = 1;
const K6t = 1;
const wM = /^[a-f0-9]{8}$/;
const Xss = /^[a-f0-9]{32}$/;
const ft = [
    "failed",
    "taken",
    "ended"
];
const mt = /^(?:cse|session)_[A-Za-z0-9_-]{1,128}$/;
function De(e) {
    return !eG.test(e);
}
const zJ = "\x1B_cc-daemon-detach\x1B\\";
const ae = "\x1B\\";
const ze = "\x1B_cc-detach-msg;";
const wIn = "\x1B_cc-daemon-hint\x1B\\";
function Prt(e) {
    return wIn + e + wIn;
}
const fe = "\x1B_cc-d-imark;";
const ht = Buffer.from(fe, "latin1");
function Dur(e) {
    return fe + _(e) + ae;
}
function rno(e, n, r) {
    let s = r?.maxPayload ?? 512;
    let f = e.length > 0 ? Buffer.concat([
        e,
        n
    ]) : n;
    let marks = [];
    let g = [];
    let S = 0;
    let y = 0;
    let h = -1;
    let w = false;
    while(true){
        let R = f.indexOf(fe, y);
        if (R < 0) {
            break;
        }
        let N = R + fe.length;
        let k = w ? -1 : h >= N ? h : h = f.indexOf(ae, N);
        if (k < 0) {
            w = true;
            let J = f.subarray(R);
            if (J.length > fe.length + s) {
                y = N;
                continue;
            }
            let H = false;
            for(let ie = N; ie < f.length; ie++){
                let Re = f[ie];
                if (Re === 24 || Re === 26 || Re === 27 && ie < f.length - 1) {
                    H = true;
                    break;
                }
            }
            if (H) {
                y = N;
                continue;
            }
            g.push(f.subarray(S, R));
            return {
                marks,
                carry: Buffer.from(J),
                cleaned: g.length === 1 ? g[0] : Buffer.concat(g)
            };
        }
        let L = false;
        if (k - N <= s) {
            try {
                let J = X(f.subarray(N, k).toString("utf8"));
                if (J !== null && typeof J === "object" && (J.kind === "content_paint" || J.kind === "prompt_idle")) {
                    L = true;
                    if (r?.requireNonce === undefined || J.nonce === r.requireNonce) {
                        marks.push({
                            kind: J.kind,
                            msgsLoaded: Irt(J.msgsLoaded),
                            msgsInJsonl: Irt(J.msgsInJsonl),
                            msgsRenderedAtFirstPaint: Irt(J.msgsRenderedAtFirstPaint)
                        });
                    }
                }
            } catch  {}
        }
        if (L) {
            g.push(f.subarray(S, R));
            S = k + ae.length;
        }
        y = L ? k + ae.length : N;
    }
    let C = f.subarray(y);
    let F = ht;
    let I = 0;
    let P = Math.min(C.length, F.length - 1);
    e: for(let R = P; R > 0; R--){
        let N = C.length - R;
        for(let k = 0; k < R; k++){
            if (C[N + k] !== F[k]) {
                continue e;
            }
        }
        I = R;
        break;
    }
    g.push(f.subarray(S, f.length - I));
    return {
        marks,
        carry: I > 0 ? Buffer.from(C.subarray(C.length - I)) : Buffer.alloc(0),
        cleaned: g.length === 1 ? g[0] : Buffer.concat(g)
    };
}
function Irt(e) {
    if (typeof e === "number" && Number.isInteger(e) && e >= 0 && e <= Le) {
        return e;
    }
}
var Le = 1000000000;
const se = ()=>E().int().nonnegative().max(Le).optional();
const bt = p(()=>u({
        kind: U([
            "content_paint",
            "prompt_idle"
        ]),
        msgsLoaded: se(),
        msgsInJsonl: se(),
        msgsRenderedAtFirstPaint: se()
    }));
const St = p(()=>_t({
        kind: U([
            "content_paint",
            "prompt_idle"
        ]),
        msgsLoaded: se(),
        msgsInJsonl: se(),
        msgsRenderedAtFirstPaint: se()
    }));
function ono(e) {
    let n = St().safeParse(e);
    if (!n.success) {
        return null;
    }
    return {
        kind: n.data.kind,
        msgsLoaded: n.data.msgsLoaded,
        msgsInJsonl: n.data.msgsInJsonl,
        msgsRenderedAtFirstPaint: n.data.msgsRenderedAtFirstPaint
    };
}
function Dne(e) {
    if (!e) {
        return zJ;
    }
    return ze + e + ae + zJ;
}
function sno(e) {
    let n = e.indexOf(ze);
    if (n < 0) {
        return;
    }
    let r = n + ze.length;
    let s = e.indexOf(ae, r);
    if (s < 0) {
        return;
    }
    return e.subarray(r, s).toString("utf8");
}
function Be(e, n) {
    let r = {};
    for (let [s, f] of Object.entries(Wur(e, n))){
        r[s] = s.toUpperCase() === "CLAUDE_CODE_PLUGIN_DIRS" ? f.split(delimiter).map((m)=>AC(m.trim())).join(delimiter) : f;
    }
    return r;
}
const vIn = p(()=>u({
        proto: E().int().min(K6t).max(proto_1),
        short: o().regex(wM),
        nonce: o().regex(wM).optional(),
        sessionId: o().transform(AC),
        createdAt: E(),
        source: U(_e).catch("fleet"),
        cwd: o().transform(AC),
        launch: Wr("mode", [
            u({
                mode: A("prompt"),
                args: T(o()).transform(XJ),
                restoresTranscript: M().optional()
            }),
            u({
                mode: A("resume"),
                sessionId: o().transform(AC),
                transcriptPath: o().transform(AC).optional(),
                fork: M(),
                flagArgs: T(o()).transform(XJ),
                restoresTranscript: M().optional()
            }),
            u({
                mode: A("exec"),
                cmd: o().transform(AC),
                args: T(o()).transform((e)=>e.map(AC))
            })
        ]),
        env: ue(o(), o()).default({}).transform((e)=>Be(e, "the background job's launch request")),
        reattachEnv: ue(o(), o()).transform((e)=>Be(e, "the launch request's reattach values")).optional(),
        worktree: u({
            path: o().transform(AC),
            ownershipToken: o()
        }).optional(),
        isolation: U([
            "none",
            "worktree"
        ]).default("none"),
        respawnFlags: T(o()).default([]).transform(XJ),
        attachStallRespawns: E().int().optional(),
        agent: o().optional(),
        routine: o().optional(),
        seed: u({
            intent: o(),
            name: o().optional()
        }).optional(),
        cols: E().int().positive().max(FAe).optional(),
        rows: E().int().positive().max(FAe).optional()
    }));
const ETt = /ERESPAWNING|ESTARTING/;
const kTt = /\bE(?:NOENT|CONNREFUSED|CONNRESET)\b|control socket closed/;
const Ort = "ERESPAWNING";
const TTt = "updated Claude Code";
const gqe = "stalled";
const Y6t = "legacy";
const ATt = "EHOSTDEAD";
const w0e = "terminal host process died — press Enter to restart";
const hqe = "This session's terminal host process died (the conversation is saved)";
const CTt = "terminal host process died — its output is gone; the command was not run again";
const yqe = "This command's terminal host process died — its output is gone and the command was not run again";
const RTt = /ESTALLED|EUNVERIFIED|EHOSTDEAD/;
const _qe = /^EKICKED:\s*/;
const ino = "Session opened in another window";
function EIn(e, n, r) {
    if (n !== undefined && Xss.test(n)) {
        return `${e}:${n}: ${r}`;
    }
    return `${e}: ${r}`;
}
const xTt = /^E[A-Z]+:/;
function be() {
    return o().refine(u0, "remote IPC path");
}
const Me = p(()=>_t({
        pid: E(),
        procStart: o().optional(),
        sessionId: o().transform(AC),
        rendezvousSock: be(),
        ptySock: be().optional(),
        messagingSock: be().optional(),
        cliVersion: o().optional(),
        startedAt: E(),
        attempt: E(),
        cwd: o().transform(AC),
        worktreePath: o().transform(AC).optional(),
        dispatch: vIn(),
        pendingRespawn: A("upgrade").optional(),
        decModes: T(E()).optional(),
        firedInteractiveMarks: T(oe()).transform((e)=>{
            let n = [];
            for (let r of e){
                let s = bt().safeParse(r);
                if (s.success) {
                    n.push(s.data);
                }
            }
            return n.slice(0, 2);
        }).optional().catch(undefined),
        rvAuth: o().optional(),
        ptyAuth: o().optional(),
        replPid: E().optional(),
        replProcStart: o().optional()
    }));
function Lur(e) {
    let shape = Me().shape;
    let r = {};
    for (let [s, f] of Object.entries(e)){
        if (!(s in shape)) {
            r[s] = f;
        }
    }
    return r;
}
const Jss = p(()=>_t({
        proto: E().int().min(K6t).max(proto_1),
        supervisorPid: E().catch(0),
        updatedAt: E().catch(0),
        workers: ue(o().regex(wM), Me())
    }));
const ano = p(()=>{
    let short = o().regex(wM);
    let proto = E().int().min(K6t).max(proto_1);
    return Wr("op", [
        u({
            proto,
            op: A("ping")
        }),
        u({
            proto,
            op: A("nudge")
        }),
        u({
            proto,
            op: A("yield")
        }),
        u({
            proto,
            op: A("lease"),
            client: v0e().optional()
        }),
        u({
            proto,
            op: A("leases")
        }),
        u({
            proto,
            op: A("await-ack"),
            short,
            nonce: short.optional(),
            timeoutMs: E()
        }),
        u({
            proto,
            op: A("dispatch"),
            d: vIn(),
            timeoutMs: E(),
            auth: o().optional()
        }),
        u({
            proto,
            op: A("list")
        }),
        u({
            proto,
            op: A("has"),
            short
        }),
        u({
            proto,
            op: A("kill"),
            short,
            signal: U([
                "SIGTERM",
                "SIGKILL"
            ]).optional(),
            handoff: M().optional(),
            evict: M().optional()
        }),
        u({
            proto,
            op: A("reply"),
            short,
            text: o(),
            auth: o().optional(),
            nextTurn: M().optional()
        }),
        u({
            proto,
            op: A("subscribe"),
            short,
            tail: E().optional()
        }),
        u({
            proto,
            op: A("attach"),
            short,
            auth: o().optional(),
            cols: E().int().min(1).max(FAe),
            rows: E().int().min(1).max(FAe),
            attachId: o().optional(),
            caps: u({
                imark: M().optional(),
                terminal: o().nullable(),
                mux: U([
                    "tmux",
                    "screen",
                    "zellij"
                ]).nullable(),
                ssh: M(),
                wheelFlood: M().optional(),
                hyperlinks: M().optional(),
                progressReporting: M().optional(),
                wtSession: M().optional(),
                isVscodeTerm: M().optional(),
                keyDialect: U([
                    "st",
                    "rxvt"
                ]).nullable().optional().catch(undefined),
                browser: o().nullable().optional(),
                colorLevel: Ue([
                    A(0),
                    A(1),
                    A(2),
                    A(3)
                ]).optional(),
                syncOutput: M().optional(),
                editor: o().nullable().optional(),
                systemTheme: U([
                    "dark",
                    "light"
                ]).optional(),
                tmuxSocket: be().refine(isAbsolute).optional().catch(undefined),
                sessionTabs: o().regex(Xss).optional().catch(undefined),
                tabsLanding: u({
                    why: U(ft),
                    from: o().regex(wM)
                }).optional().catch(undefined)
            }).optional(),
            holdingFrame: M().optional()
        }),
        u({
            proto,
            op: A("resize"),
            short,
            cols: E().int().min(1).max(FAe),
            rows: E().int().min(1).max(FAe),
            attachId: o().optional()
        }),
        u({
            proto,
            op: A("ensure-spare"),
            cwd: o()
        }),
        u({
            proto,
            op: A("permission-response"),
            short,
            requestId: o(),
            allow: M(),
            auth: o().optional()
        }),
        u({
            proto,
            op: A("respawn-stale"),
            short
        }),
        u({
            proto,
            op: A("shutdown"),
            reapWorkers: M().optional()
        })
    ]);
});
var v0e = p(()=>u({
        label: o().max(64).refine(De),
        cwd: o().max(4096).refine(De).catch("(not shown)"),
        pid: E().int().positive().catch(0),
        cloudSessionId: o().regex(mt).optional().catch(undefined)
    }));
const lno = p(()=>u({
        ok: A(true),
        op: A("lease")
    }));
const yt = [
    "upgrade",
    "service_recall",
    "displaced",
    "yield",
    "shutdown_op",
    "idle_exit",
    "bg_manager_failed",
    "signal",
    "unknown"
];
const cno = p(()=>u({
        op: A("lease"),
        closing: U(yt)
    }));
const bqe = "cloud session";
const kIn = [
    "cli-bg-dispatch",
    "claude agents",
    bqe
];
function je(e) {
    return e;
}
function Je(e) {
    return je(new Set(e));
}
function Kss(e) {
    let n = new Set;
    let r = (s)=>{
        if (Array.isArray(s)) {
            s.forEach(r);
        } else if (typeof s === "object" && s !== null) {
            let { properties } = s;
            if (typeof properties === "object" && properties !== null) {
                for (let m of Object.keys(properties)){
                    n.add(m);
                }
            }
            Object.values(s).forEach(r);
        }
    };
    try {
        r(E5e(e, {
            unrepresentable: "any"
        }));
    } catch  {}
    return je(n);
}
function Hur(e, n) {
    let r;
    return kn((e ?? []).map((s)=>{
        if (typeof s === "number" || typeof s === "string" && (r ??= n()).has(s)) {
            return String(s);
        }
        return "*";
    }).join("."));
}
async function Nur(e) {
    try {
        let n = await lstat(e);
        if (n.isFile()) {
            return {
                kind: "proceed"
            };
        }
        return {
            kind: "refused",
            symlink: n.isSymbolicLink()
        };
    } catch (error) {
        if (z(error)) {
            return {
                kind: "proceed"
            };
        }
        return {
            kind: "error",
            error
        };
    }
}
function $ur(e) {
    return e?.code === "Failed" && (e.telemetryCode === "ENXIO" || e.telemetryCode === "EFBIG" || e.telemetryCode === "ELOOP" || e.telemetryCode === "ENAMETOOLONG");
}
const vt = Je([
    "proto",
    "supervisorPid",
    "updatedAt",
    "workers",
    "pid",
    "procStart",
    "sessionId",
    "rendezvousSock",
    "ptySock",
    "messagingSock",
    "rvAuth",
    "ptyAuth",
    "replPid",
    "replProcStart",
    "cliVersion",
    "startedAt",
    "attempt",
    "cwd",
    "worktreePath",
    "dispatch",
    "pendingRespawn",
    "decModes",
    "firedInteractiveMarks",
    "kind",
    "msgsLoaded",
    "msgsInJsonl",
    "msgsRenderedAtFirstPaint",
    "short",
    "restoresTranscript",
    "nonce",
    "createdAt",
    "cols",
    "rows",
    "source",
    "launch",
    "mode",
    "args",
    "fork",
    "flagArgs",
    "cmd",
    "env",
    "reattachEnv",
    "worktree",
    "path",
    "ownershipToken",
    "isolation",
    "respawnFlags",
    "seed",
    "intent",
    "name",
    "agent",
    "routine",
    "attachStallRespawns"
]);
const ve = 8388608;
function PTt() {
    return $e.daemon([
        "roster.json"
    ]);
}
function Z() {
    return {
        proto: proto_1,
        supervisorPid: process.pid,
        updatedAt: Date.now(),
        workers: {}
    };
}
async function xD(e, n) {
    if (n) {
        let { roster, inspectFailed } = await Ye(n, e);
        if (inspectFailed) {
            return {
                ...roster,
                inspectFailed: true
            };
        }
        return roster;
    }
    let r;
    try {
        let s = await lstat(X2());
        if (!s.isFile() || s.size > ve) {
            if (!e?.silent) {
                c(Error(`roster.json ${s.isFile() ? `too large (${s.size} bytes) \u2014 quarantining` : "is not a regular file — removing"}`));
                i("tengu_bg_roster_parse_failed", {
                    orphaned: -1,
                    quarantined: 1,
                    errCode: s.isFile() ? b("E2BIG") : b("EFTYPE")
                });
                if (s.isFile()) {
                    await me(undefined);
                } else {
                    await rm(X2(), {
                        recursive: true,
                        force: true
                    }).catch((f)=>c(f));
                }
            }
            return {
                ...Z(),
                parseFailed: true
            };
        }
        r = X(await readFile(X2(), "utf8"));
    } catch (error) {
        if (z(error)) {
            return Z();
        }
        if (!e?.silent) {
            c(ot(W(error), "bg roster.json read/parse failed"));
            i("tengu_bg_roster_parse_failed", {
                orphaned: -1,
                quarantined: 1,
                errCode: Ym(error)
            });
            await me(undefined);
        }
        return {
            ...Z(),
            parseFailed: true
        };
    }
    return qe(r, e, undefined);
}
async function qe(e, n, r) {
    let s;
    try {
        s = Jss().safeParse(e);
    } catch (error) {
        if (!n?.silent) {
            c(error);
            i("tengu_bg_roster_parse_failed", {
                orphaned: He(e),
                quarantined: 1,
                errCode: Ym(error)
            });
            await me(r);
        }
        return {
            ...Z(),
            parseFailed: true
        };
    }
    if (s.success) {
        delete s.data.parseFailed;
        delete s.data.inspectFailed;
        let f = e;
        let m = [
            "supervisorPid",
            "updatedAt"
        ].filter((g)=>!Number.isFinite(f[g]));
        if (m.length > 0 && !n?.silent) {
            t(`[daemon] roster.json stamp field(s) healed on read: ${m.join(", ")}`, {
                level: "warn"
            });
            i("tengu_bg_roster_parse_failed", {
                orphaned: 0,
                quarantined: 0,
                issuePath: gl(m),
                issueCode: b("healed_stamp")
            });
        }
        return s.data;
    }
    if (!n?.silent) {
        let orphaned = He(e);
        let m = s.error.issues[0];
        c(Error(`roster.json parse failed at ${Ge(m?.path) || "<root>"} (orphaning ${orphaned} worker(s)): ${m?.message}`));
        i("tengu_bg_roster_parse_failed", {
            orphaned,
            quarantined: 1,
            issuePath: Ge(m?.path),
            issueCode: pe(m?.code)
        });
        await me(r);
    }
    return {
        ...Z(),
        parseFailed: true
    };
}
async function me(e) {
    if (!e) {
        await rename(X2(), `${X2()}.corrupt.${Date.now()}`).catch((r)=>c(r));
        return;
    }
    let n = await e.move(PTt(), $e.daemon([
        `roster.json.corrupt.${Date.now()}`
    ])).catch(()=>{});
    if (n === undefined || !n.ok) {
        c(new x(`roster quarantine v5 move failed: ${n === undefined ? "threw" : gt(n.error)}`, "roster quarantine v5 move failed"));
    }
}
async function Ot(e) {
    await rm(e, {
        recursive: true,
        force: true
    }).catch((n)=>c(n));
}
async function We(e, n, r, s) {
    if (!n?.silent) {
        c(r);
        i("tengu_bg_roster_parse_failed", {
            orphaned: -1,
            quarantined: 1,
            errCode: b(s)
        });
        await Tt(e);
    }
    return {
        ...Z(),
        parseFailed: true
    };
}
async function Ye(e, n) {
    let r = await Nur(X2());
    if (r.kind === "refused") {
        if (!n?.silent) {
            c(Error("roster.json is not a regular file — removing"));
            i("tengu_bg_roster_parse_failed", {
                orphaned: -1,
                quarantined: 1,
                errCode: b("EFTYPE")
            });
            await Ot(X2());
        }
        return {
            roster: {
                ...Z(),
                parseFailed: true
            },
            inspectFailed: false
        };
    }
    if (r.kind === "error") {
        return Ve(n, ot(W(r.error), "bg roster.json read/parse failed"), Ym(r.error));
    }
    return Pt(e, n);
}
function Ve(e, n, errCode) {
    if (!e?.silent) {
        c(n);
        i("tengu_bg_roster_parse_failed", {
            orphaned: -1,
            quarantined: 0,
            errCode
        });
    }
    return {
        roster: {
            ...Z(),
            parseFailed: true
        },
        inspectFailed: true
    };
}
async function Pt(e, n) {
    let r = await e.read([
        {
            key: PTt(),
            offset: 0,
            length: ve + 1
        }
    ]).catch(()=>{});
    if (r === undefined || !r.ok) {
        if (r !== undefined && $ur(r.error)) {
            return {
                roster: await We(e, n, new x(`bg roster.json v5 read refused: ${r.error.telemetryCode} \u2014 removing`, "bg roster.json v5 read refused — removing"), "EV5READ"),
                inspectFailed: false
            };
        }
        return Ve(n, new x(`bg roster.json v5 read failed: ${r?.error.code ?? "threw"}`, "bg roster.json v5 read failed"), b("EV5READ"));
    }
    let s = r.value.items[0];
    if (!s.found) {
        return {
            roster: Z(),
            inspectFailed: false
        };
    }
    if (s.totalBytes > ve) {
        return {
            roster: await We(e, n, new x(`roster.json too large (${s.totalBytes} bytes) \u2014 removing`, "roster.json too large — removing"), "E2BIG"),
            inspectFailed: false
        };
    }
    let f;
    try {
        f = X(Buffer.from(s.value).toString("utf8"));
    } catch (error) {
        if (!n?.silent) {
            c(ot(W(error), "bg roster.json read/parse failed"));
            i("tengu_bg_roster_parse_failed", {
                orphaned: -1,
                quarantined: 1,
                errCode: Ym(error)
            });
            await me(e);
        }
        return {
            roster: {
                ...Z(),
                parseFailed: true
            },
            inspectFailed: false
        };
    }
    return {
        roster: await qe(f, n, e),
        inspectFailed: false
    };
}
async function Tt(e) {
    let n = await e.delete(PTt()).catch(()=>{});
    if (n === undefined || !n.ok) {
        c(new x(`roster quarantine v5 delete failed: ${n?.error.code ?? "threw"}`, "roster quarantine v5 delete failed"));
    }
}
function Ge(e) {
    return Hur(e, ()=>vt);
}
function HA(e) {
    if (wM.test(e)) {
        return kn(e);
    }
    return b("invalid");
}
function He(e) {
    let n = e !== null && typeof e === "object" ? e.workers : undefined;
    if (n !== null && typeof n === "object" && !Array.isArray(n)) {
        return Object.keys(n).length;
    }
    return 0;
}
async function xt({ parseFailed, inspectFailed, ...rest }, n) {
    if (n) {
        let g = await n.write(PTt(), _(rest, null, 2), {
            mode: 384
        });
        if (!g.ok) {
            let S = g.error;
            let y = "telemetryCode" in S ? S.telemetryCode : undefined;
            if (y !== undefined && efe.has(y)) {
                t(`[daemon] roster write failed: ${y}`, {
                    level: "error"
                });
                return;
            }
            throw new x(`roster v5 write failed: ${S.code}`, "roster v5 write failed");
        }
        return;
    }
    let m = X2();
    await mkdir(dirname(m), {
        recursive: true,
        mode: 448
    }).catch(()=>{});
    await En(m, _(rest, null, 2), 384).catch((g)=>{
        let S = v(g);
        if (S && efe.has(S)) {
            t(`[daemon] roster write failed: ${S}`, {
                level: "error"
            });
            return;
        }
        throw g;
    });
}
const It = Oh();
function GJ(e, n) {
    return It.run("roster", async ()=>{
        let r = await Ct(n);
        let s = e(r) ?? r;
        s.supervisorPid = process.pid;
        s.updatedAt = Date.now();
        await xt(s, n);
    });
}
async function Ct(e) {
    if (!e) {
        return xD();
    }
    let n = await Ye(e);
    if (n.inspectFailed) {
        throw new x("bg roster.json update skipped: the file could not be inspected", "bg roster.json update skipped: the file could not be inspected");
    }
    return n.roster;
}
function Xe(inFlight) {
    if (inFlight === undefined || !inFlight.kinds.includes("session_cron")) {
        return false;
    }
    let e_wake = inFlight.wake;
    if (e_wake === undefined) {
        return true;
    }
    return e_wake.fires >= 1 && e_wake.keepalive !== true;
}
function mqe(e) {
    if (!e || e.length === 0) {
        return "";
    }
    return e.map((n)=>{
        let r = `${n.id ?? n.label}:${n.doneAt ?? "-"}:${n.failed ? "x" : ""}`;
        if (n.kind === "todo") {
            return `${r}:${n.startedAt ?? "-"}`;
        }
        return r;
    }).join("|");
}
function vTt() {
    let { tasks, queued, kinds, drainableMonitors, wake } = xrt();
    return {
        tasks,
        queued,
        kinds,
        ...drainableMonitors !== undefined && {
            drainableMonitors
        },
        ...wake !== undefined && {
            wake
        }
    };
}
function nno(e) {
    d4().publishInFlightSnapshot(e);
}
function xrt() {
    let inFlightSnapshot = d4().inFlightSnapshot;
    let length = Km().length;
    if (length === 0) {
        return {
            ...inFlightSnapshot
        };
    }
    let wake = Ft();
    return {
        ...inFlightSnapshot,
        tasks: inFlightSnapshot.tasks + length,
        kinds: [
            ...inFlightSnapshot.kinds,
            "session_cron"
        ],
        ...wake !== undefined && {
            wake
        }
    };
}
function Ft() {
    let e = Km().find((n)=>n.kind === "loop");
    if (e === undefined) {
        return;
    }
    return {
        at: e.scheduledFor,
        reason: e.reason,
        fires: i0t(),
        ...e.keepalive && {
            keepalive: true
        }
    };
}
function qss(e) {
    let n = d4().inFlightSnapshotChanged.subscribe(e);
    let r = Msn(()=>{
        try {
            e();
        } catch  {}
    });
    return ()=>{
        n();
        r();
    };
}
async function TIn(e, n) {
    if (!_a(e)) {
        return "dead_pid";
    }
    if (!await Hw(e, n)) {
        return "procstart_mismatch";
    }
    if (await S3e(e)) {
        return "zombie";
    }
    return "live";
}
async function X6t(e, n) {
    return await TIn(e, n) === "live";
}
const Bt = /^-|^[A-Za-z][A-Za-z0-9+.-]+:\/\//;
function VJ(e) {
    return !Bt.test(e) && !e.includes("\x00");
}
function dno() {
    let e = Xc();
    if (e === undefined || Ie() === "mantle") {
        return;
    }
    if (e === null) {
        return "default";
    }
    if (!e) {
        return;
    }
    if (u7(Dt(e))) {
        return;
    }
    if (nj()?.fallbackModel === e) {
        return;
    }
    if (!VJ(e)) {
        return;
    }
    return e;
}
function Ze(e) {
    let n = e.trim().toLowerCase();
    return n === "default" || Vue(n);
}
function Qss() {
    return oG().includes("--restricted");
}
function oce(e, n, { carryModel = true } = {}) {
    let s = Se(e.additionalWorkingDirectories, [
        "cliArg"
    ]);
    let f = [];
    let m = oG();
    for(let F = 0; F < m.length; F++){
        let I = m[F];
        if (I === "--add-dir") {
            F++;
        } else if (!carryModel && I === "--fallback-model") {
            let P = (m[F + 1] ?? "").split(",").map((R)=>R.trim()).filter((R)=>Ze(R));
            F++;
            if (P.length > 0) {
                f.push("--fallback-model", P.join(","));
            }
        } else if (I !== undefined) {
            f.push(I);
        }
    }
    let g = Uit(n);
    let S = dno();
    let y = S !== undefined && (carryModel || Ze(S)) ? S : undefined;
    let h = e.isBypassPermissionsModeAvailable && !f.includes("--allow-dangerously-skip-permissions");
    let w = Xxo();
    let C = Wse();
    return [
        ...[],
        ...[],
        ...f,
        ...C === undefined ? [] : [
            C ? "--chrome" : "--no-chrome"
        ],
        ...h ? [
            "--allow-dangerously-skip-permissions"
        ] : [],
        ...s.flatMap((F)=>[
                "--add-dir",
                F
            ]),
        ...y !== undefined ? [
            "--model",
            y
        ] : [],
        ...g !== undefined ? [
            "--effort",
            g
        ] : [],
        "--permission-mode",
        e.mode
    ];
}
function uno(e) {
    let n = Lu([
        e
    ]);
    return n.length === 1 && n[0] === e && VJ(e);
}
function qJ(e, n) {
    return [
        ...n ? [
            `launch flags: ${o3t}`
        ] : [],
        ...(e.alwaysDenyRules.session ?? []).length > 0 || (e.alwaysAskRules.session ?? []).length > 0 ? [
            "permission rules set for this session only"
        ] : [],
        ...(e.alwaysAskRules.cliArg ?? []).length > 0 ? [
            "ask-before-running rules with no command-line form"
        ] : [],
        ...[
            ...e.alwaysAllowRules.cliArg ?? [],
            ...e.alwaysDenyRules.cliArg ?? []
        ].some((r)=>!uno(r)) ? [
            "permission rules a command line cannot carry intact"
        ] : [],
        ...Se(e.additionalWorkingDirectories, [
            "cliArg"
        ]).some((r)=>!VJ(r)) ? [
            "added directories a command line cannot carry intact"
        ] : []
    ];
}
function sce(e, n) {
    return [
        ...(e.alwaysAllowRules.cliArg ?? []).flatMap((r)=>[
                "--allowed-tools",
                r
            ]),
        ...(e.alwaysDenyRules.cliArg ?? []).flatMap((r)=>[
                "--disallowed-tools",
                r
            ]),
        ...SE("--agent", n.agent),
        ...SE("--agents", n.agents),
        ...SE("--append-system-prompt", n.appendSystemPrompt),
        ...SE("--system-prompt-snapshot", pno(n.systemPromptSnapshot))
    ];
}
function SE(e, n) {
    if (!n) {
        return [];
    }
    if (VJ(n)) {
        return [
            e,
            n
        ];
    }
    return [
        `${e}=${n}`
    ];
}
function pno(e) {
    if (e === undefined) {
        return undefined;
    }
    if (e) {
        return "on";
    }
    return "off";
}
function Se(e, n) {
    return Array.from(e.values()).filter((r)=>n.includes(r.source)).filter((r)=>!ks(r.path)).map((r)=>r.path);
}
function J6t(e) {
    return koe({
        ...qat(oG()).config,
        addDir: Qe(e),
        settingSources: Wue()
    });
}
function Zss(e, n) {
    return [
        ...Nt(e),
        ...Qe(n).flatMap((r)=>[
                "--add-dir",
                r
            ])
    ];
}
function Nt(e) {
    let n = [];
    let r = false;
    for (let s of e){
        if (r) {
            r = false;
        } else if (s === "--add-dir") {
            r = true;
        } else {
            n.push(s);
        }
    }
    return n;
}
function Qe(e) {
    return Se(e, [
        "cliArg"
    ]).filter(VJ);
}
function AIn(e) {
    return Se(e, [
        "session"
    ]).filter(VJ);
}
const fno = "CLAUDE_RELAUNCH_SESSION_ADD_DIRS";
function Mrt(e) {
    let n = AIn(e);
    if (n.length > 0) {
        return {
            [fno]: _(n)
        };
    }
    return {};
}
function eis(e) {
    let n = [];
    for(let r = 0; r < e.length; r++){
        let s = e[r];
        if (s === "--channels") {
            r++;
            continue;
        }
        if (s.startsWith("--channels=")) {
            continue;
        }
        n.push(s);
    }
    return n;
}
const Lt = new Set([
    "EBUSY",
    "EMFILE",
    "ENFILE",
    "EAGAIN",
    "EINTR"
]);
function KJ(e) {
    if (e === undefined) {
        return false;
    }
    return Lt.has(e) || e === "EPERM" && O() === "windows";
}
function Fur(e) {
    return e.code === "Unavailable" || "telemetryCode" in e && KJ(e.telemetryCode);
}
const vM = "(ungrouped)";
const DA = "(earlier)";
const Mt = 64;
const jt = new Set([
    "pinned",
    "ungrouped",
    vM,
    "past",
    DA
]);
function Q6t(e) {
    return jt.has(e.toLowerCase());
}
function Uur(e) {
    return Dg(e).slice(0, Mt);
}
function ye(e) {
    if (e === undefined) {
        return;
    }
    let n = Uur(e);
    if (n && !Q6t(n)) {
        return n;
    }
}
class et {
    #e = new Map;
    #t = new Set;
    #n = new Set;
    #r = new Set;
    #o = new Set;
    peek(e) {
        return this.#e.get(e);
    }
    invalidate(e) {
        this.#e.delete(e);
    }
    noteAbsent(e) {
        this.#e.delete(e);
        this.#t.delete(e);
    }
    noteRejected(e, n) {
        this.#e.set(e, {
            mtimeKey: n,
            state: null
        });
    }
    noteParsed(e, n, state) {
        if (this.#e.size > 1000) {
            this.#e.clear();
        }
        this.#e.set(e, {
            mtimeKey: n,
            state
        });
        this.#t.delete(e);
    }
    noteHit(e) {
        this.#t.delete(e);
    }
    shouldReportTransient(e) {
        if (this.#t.has(e)) {
            return false;
        }
        this.#t.add(e);
        return true;
    }
    shouldReportRecovered(e) {
        if (this.#n.has(e)) {
            return false;
        }
        this.#n.add(e);
        return true;
    }
    noteCleanRead(e) {
        this.#n.delete(e);
    }
    shouldReportPruned(e) {
        if (this.#r.has(e)) {
            return false;
        }
        this.#r.add(e);
        return true;
    }
    notePruneCandidateLive(e) {
        this.#r.delete(e);
    }
    shouldLogSidecarFallback(e) {
        if (this.#o.has(e)) {
            return false;
        }
        this.#o.add(e);
        return true;
    }
}
const tt = new q(()=>new et);
class nt {
    drafts = new Map;
    pins = new Map;
}
const Our = new q(()=>new nt);
async function Mur(e, n, { cap, screens, screenKey, heal }) {
    if (screens.get(screenKey) !== "ok") {
        let y = await e.statMeta(n);
        if (!y.ok) {
            if (y.error.code !== "NotFound") {
                screens.set(screenKey, "refused");
                await heal?.();
            }
            return null;
        }
        if (y.value.size > cap) {
            screens.set(screenKey, "refused");
            return null;
        }
        screens.set(screenKey, "ok");
    }
    let g = await e.readText([
        {
            key: n,
            offset: 0,
            length: cap + 1
        }
    ]);
    if (!g.ok) {
        screens.delete(screenKey);
        await heal?.();
        return null;
    }
    let S = g.value.items[0];
    if (!S.found) {
        return null;
    }
    if (S.totalBytes > cap) {
        screens.set(screenKey, "refused");
        return null;
    }
    return S.value;
}
const de = ()=>o().transform(AC);
const at = /^[a-f0-9]{8}$/;
const Gt = /^(cse_|session_)[A-Za-z0-9_-]{1,128}$/;
function le(e, n) {
    return (r)=>{
        if (n(r)) {
            return r;
        }
        t(`[jobs] dropped malformed ${e} from persisted job state`, {
            level: "warn"
        });
    };
}
const we = p(()=>u({
        state: o(),
        detail: o(),
        tempo: U([
            "active",
            "idle",
            "blocked"
        ]).optional().catch(undefined),
        inFlight: u({
            tasks: E(),
            queued: E(),
            kinds: T(o()),
            drainableMonitors: E().int().nonnegative().optional(),
            wake: u({
                at: E().optional(),
                reason: o().optional(),
                fires: E().int().nonnegative(),
                keepalive: A(true).optional()
            }).optional().catch(undefined)
        }).optional(),
        selfWake: M().optional().catch(undefined),
        fan: T(u({
            id: o().optional(),
            kind: U([
                "agent",
                "workflow",
                "shell",
                "monitor",
                "mcp",
                "todo"
            ]).optional().catch(undefined),
            label: o(),
            startedAt: E().optional(),
            doneAt: E().optional(),
            failed: M().optional(),
            group: o().optional()
        })).optional(),
        tokens: E().optional(),
        needs_you: M().optional(),
        needs: o().optional(),
        block: u({
            questions: T(u({
                question: o(),
                options: T(u({
                    label: o(),
                    description: o()
                }))
            }))
        }).optional(),
        suggestedReply: o().optional(),
        needsOverlay: o().optional(),
        output: ue(o(), o()).nullable().default(null),
        structuredResult: ue(o(), oe()).optional(),
        children: T(u({
            id: o(),
            href: o(),
            kind: U([
                "pr",
                "frame"
            ]).optional().catch(undefined),
            title: o().optional().catch(undefined)
        })).nullable().default(null),
        linkScanOffset: E().default(0),
        linkScanPath: de().transform(le("linkScanPath", (e)=>isAbsolute(e) && e.endsWith(".jsonl") && Jt(basename(e, ".jsonl")) !== null)).optional(),
        template: o(),
        routine: o().optional(),
        respawnFlags: T(o()).default([]).transform((e)=>XJ(JTe(e))),
        bgIsolation: U([
            "none",
            "worktree"
        ]).optional().catch(undefined),
        providerEnv: ue(o(), o()).transform((e)=>{
            let n = sis(oo(e, AC));
            return n && Wur(n, "the saved job state (state.json providerEnv)");
        }).optional(),
        sessionPermissionRules: u({
            allow: T(o()),
            deny: T(o()),
            addDirs: T(de()).optional()
        }).optional(),
        memoryToggledOff: M().optional(),
        autoMemoryOffThisSession: M().optional(),
        forkSourceAlive: M().optional(),
        forkBoundaryAt: o().optional(),
        forkSessionId: o().optional(),
        forkParentSessionId: o().optional(),
        interactiveLineage: M().optional(),
        intent: o(),
        displayIntent: o().optional(),
        initialPrompt: o().optional(),
        queuedPrompt: o().optional(),
        name: o().optional(),
        nameSource: U([
            "user",
            "auto",
            "collision"
        ]).optional().catch(undefined),
        color: o().optional(),
        sessionId: de(),
        resumeSessionId: o().transform(le("resumeSessionId", (e)=>Jt(e) !== null)).optional(),
        daemonShort: o().transform(le("daemonShort", (e)=>at.test(e))).optional(),
        cliVersion: o().optional(),
        cwd: de(),
        createdAt: o(),
        updatedAt: o(),
        firstTerminalAt: o().nullable().default(null),
        lastTerminalAt: o().optional(),
        worktreePath: de().optional(),
        worktreeBranch: o().optional(),
        worktreeHookBased: M().optional(),
        originCwd: de().optional(),
        bridgeSessionId: o().transform(le("bridgeSessionId", (e)=>Gt.test(e))).optional(),
        bridgeOwnerAccountUuid: o().optional(),
        bridgeOwnerOrganizationUuid: o().optional(),
        bridgeNoHistoryBackfill: M().optional(),
        bridgeOutboundOnly: M().optional(),
        bridgeSessionGroupingId: o().transform(le("bridgeSessionGroupingId", (e)=>/^sgrp_[A-Za-z0-9_]{1,128}$/.test(e))).optional(),
        bridgeSessionSeq: E().transform(le("bridgeSessionSeq", (e)=>Number.isInteger(e) && e >= 0)).optional(),
        backend: U([
            "daemon",
            "peer",
            "remote"
        ]).catch("daemon").default("daemon").transform((e)=>{
            if (e === "daemon") {
                return e;
            }
            t(`[jobs] coerced persisted backend '${e}' to 'daemon' \u2014 peer/remote rows are never written to disk`, {
                level: "warn"
            });
            return "daemon";
        }),
        sock: o().optional(),
        pid: E().optional(),
        sortOrder: E().optional(),
        stateSortOrder: E().optional(),
        group: o().optional(),
        pinned: M().optional(),
        reapedMidWorkAt: o().optional(),
        reapedUnsettledAt: o().optional(),
        deadEpochReapedAt: o().optional(),
        sessionIdTaken: M().optional().catch(undefined)
    }).transform(({ needs_you, ...rest })=>{
        let r = rest.bridgeOwnerAccountUuid !== undefined && !dPe(rest.bridgeOwnerAccountUuid) || rest.bridgeOwnerOrganizationUuid !== undefined && !dPe(rest.bridgeOwnerOrganizationUuid);
        let tempo = rest.tempo ?? (needs_you ? "blocked" : "idle");
        return {
            ...rest,
            ...r && {
                bridgeOwnerAccountUuid: undefined,
                bridgeOwnerOrganizationUuid: undefined
            },
            tempo,
            ...rest.lastTerminalAt === undefined && o_(rest.state) !== null && tempo !== "active" && {
                lastTerminalAt: rest.firstTerminalAt || rest.updatedAt
            }
        };
    }));
const te = "state.json";
const cap = 8388608;
function EM() {
    return Jyo();
}
function Yr(e) {
    return join(EM(), e);
}
function nm() {
    let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (a_CLAUDE_JOB_DIR) {
        return basename(a_CLAUDE_JOB_DIR);
    }
    let n = Ob();
    if (n) {
        return basename(n.jobDir);
    }
    return K().slice(0, 8);
}
function st(e, n) {
    if (fr(e)) {
        return $e.job(e, n);
    }
}
function Hrt(e, n) {
    return gEr(e, n);
}
function Drt(e) {
    return $e.job(e, [
        te
    ]);
}
function mno(e, n) {
    let r = join(Yr(e), te);
    let s = false;
    let Number_NaN = Number.NaN;
    function m(w) {
        if (s) {
            return;
        }
        if (Number.isNaN(Number_NaN)) {
            Number_NaN = w;
            return;
        }
        if (w === Number_NaN) {
            return;
        }
        h();
        n();
    }
    function g() {
        lstat(r).then((w)=>m(w.mtimeMs), ()=>m(-1));
    }
    g();
    let S = setInterval(g, 200);
    let y = setTimeout(h, 10000);
    function h() {
        if (s) {
            return;
        }
        s = true;
        clearInterval(S);
        clearTimeout(y);
    }
    return h;
}
function Bur() {
    return d4().ownStateWriteDepth > 0;
}
async function ic(e, n, r) {
    let s = n.inFlight?.kinds.includes("session_cron") === true;
    let f = s && !n.selfWake && Xe(n.inFlight) ? {
        ...n,
        selfWake: true
    } : !s && n.selfWake && Ra(n) ? {
        ...n,
        selfWake: undefined
    } : n;
    let g = Ra(f) ? f.lastTerminalAt ? f : {
        ...f,
        lastTerminalAt: f.updatedAt
    } : f.lastTerminalAt !== undefined ? {
        ...f,
        lastTerminalAt: undefined
    } : f;
    let { pinned, sortOrder, stateSortOrder, group, ...rest } = g;
    let F = r ? Hrt(e, [
        te
    ]) : undefined;
    let I = d4();
    I.ownStateWriteDepth++;
    try {
        if (r && F) {
            let P = await r.write(F, _(rest, null, 2), {
                mode: 384,
                parent: "mustExist"
            });
            if (!P.ok) {
                let R = Vm(P.error);
                throw Object.assign(new x(`[jobs] v5 state write failed: ${gt(P.error)}`, "[jobs] v5 state write failed"), R !== undefined ? {
                    code: R
                } : {});
            }
        } else {
            await En(join(e, te), _(rest, null, 2), 384);
        }
    } finally{
        I.ownStateWriteDepth--;
        Bf(e);
    }
}
function cl(e) {
    let n = v(e);
    if (n && (efe.has(n) || n === "ENOENT")) {
        t(`[jobs] state write failed (${n}): ${l(e)}`, {
            level: "error"
        });
        return;
    }
    c(e);
}
function Z6t(e, n) {
    let r = n !== undefined && n.id === e?.bridgeSessionId;
    return {
        ownerAccountUuid: r ? n.ownerAccountUuid : undefined,
        ownerOrganizationUuid: r ? n.ownerOrganizationUuid : undefined,
        noHistoryBackfill: e?.noHistoryBackfill || (n !== undefined && !r ? true : n?.noHistoryBackfill)
    };
}
function Lne(CLAUDE_BRIDGE_REATTACH_SESSION, n, r, s, f) {
    if (!CLAUDE_BRIDGE_REATTACH_SESSION) {
        return;
    }
    let m = {
        CLAUDE_BRIDGE_REATTACH_SESSION
    };
    if (n !== undefined && n > 0) {
        m.CLAUDE_BRIDGE_REATTACH_SEQ = String(n);
    }
    if (s) {
        m.CLAUDE_BRIDGE_REATTACH_GROUPING = s;
    }
    if (f?.ownerAccountUuid) {
        m.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT = f.ownerAccountUuid;
    }
    if (f?.ownerOrganizationUuid) {
        m.CLAUDE_BRIDGE_REATTACH_OWNER_ORG = f.ownerOrganizationUuid;
    }
    if (f?.noHistoryBackfill) {
        m.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL = "1";
    }
    if (r !== false) {
        m.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY = "1";
    }
    return m;
}
function D() {
    return tt.of(B().host);
}
function ke(e, n) {
    if (n?.onReadFailure === "null") {
        return null;
    }
    return e?.state ?? null;
}
const Ht = [
    15,
    45
];
const Kt = new Set([
    "ELOOP",
    "ENXIO",
    "EISDIR"
]);
function Ee(error) {
    if (error.code !== "Failed" || error.telemetryCode === undefined) {
        return;
    }
    if (error.telemetryCode === "EFBIG") {
        return "oversize";
    }
    if (Kt.has(error.telemetryCode)) {
        return "non-regular";
    }
}
function dt(error) {
    return error.code === "Failed" && error.key !== undefined && error.key.namespace === "job" && error.key.relPath[0] !== te;
}
const qt = new Set([
    "invariant",
    "permission",
    "environment"
]);
function Yt(error) {
    if (error.code === "Unavailable") {
        return true;
    }
    return error.code === "Failed" && !qt.has(error.failureClass) && Ee(error) === undefined && !dt(error);
}
async function Vt(e, n) {
    let r = await n();
    let attempts = 1;
    for (let f of Ht){
        if (r.ok || !Yt(r.error)) {
            break;
        }
        await Q(f);
        r = await n();
        attempts++;
    }
    if (r.ok) {
        if (attempts === 1) {
            D().noteCleanRead(e);
        } else if (D().shouldReportRecovered(e)) {
            i("tengu_bg_state_read_recovered", {
                attempts
            });
        }
    }
    return r;
}
function rt(e, n, r) {
    let s = D().peek(e);
    if (!(s?.mtimeKey.startsWith("rejected:") && s.state === null)) {
        t(`[jobs] skipping ${basename(e)}: state.json is ${r}`, {
            level: "warn"
        });
    }
    D().noteRejected(e, `rejected:${n}`);
    return null;
}
function Bf(e) {
    D().invalidate(e);
}
async function Xt(e, n, r) {
    let s = basename(n);
    let f = D().peek(n);
    if (f === undefined || f.mtimeKey.startsWith("rejected:")) {
        let k = await e.statMeta(Drt(s));
        if (!k.ok) {
            if (k.error.code === "NotFound") {
                return Ae(n, r);
            }
            let L = Ee(k.error);
            if (L !== undefined) {
                return rt(n, L, L === "oversize" ? "too large" : "not a regular file");
            }
        } else if (k.value.size > cap) {
            let L = `rejected:${k.value.mtimeMs}:${k.value.size}`;
            if (D().peek(n)?.mtimeKey !== L) {
                t(`[jobs] skipping ${basename(n)}: state.json is too large (${k.value.size} bytes)`, {
                    level: "warn"
                });
                D().noteRejected(n, L);
            }
            return null;
        }
    }
    let m = Drt(s);
    let S = await Vt(n, ()=>e.read([
            m,
            $e.job(s, [
                "order"
            ]),
            $e.job(s, [
                "stateOrder"
            ]),
            $e.job(s, [
                "group"
            ])
        ]));
    if (!S.ok && dt(S.error)) {
        if (D().shouldLogSidecarFallback(n)) {
            t(`[jobs] ${basename(n)}: a sidecar could not be read as a regular file; using state.json alone`);
        }
        let k = await e.read([
            m
        ]);
        S = k.ok ? {
            ok: true,
            value: {
                items: [
                    k.value.items[0],
                    {
                        found: false
                    },
                    {
                        found: false
                    },
                    {
                        found: false
                    }
                ]
            }
        } : k;
    }
    let y = D().peek(n);
    if (!S.ok) {
        let k = Ee(S.error);
        if (k !== undefined) {
            return rt(n, k, k === "oversize" ? "too large" : "not a regular file");
        }
        t(`[jobs] ${basename(n)}: v5 state read failed \u2014 ${S.error.code}`, {
            level: "warn"
        });
        if (D().shouldReportTransient(n)) {
            i("tengu_bg_state_read_transient", {
                errno: d(S.error.code),
                had_cache: y !== undefined
            });
        }
        return ke(y, r);
    }
    let [h, w, C, F] = S.value.items;
    if (!h.found) {
        return Ae(n, r);
    }
    if (h.totalBytes > cap) {
        let k = `rejected:${h.mtimeMs}:${h.totalBytes}`;
        if (y?.mtimeKey === k) {
            return null;
        }
        t(`[jobs] skipping ${basename(n)}: state.json is too large (${h.totalBytes} bytes)`, {
            level: "warn"
        });
        D().noteRejected(n, k);
        return null;
    }
    let I = (k)=>Buffer.from(k.value.buffer, k.value.byteOffset, k.value.byteLength).toString("utf-8");
    let P = (k)=>{
        if (k.found && k.totalBytes <= cap) {
            return I(k);
        }
        return null;
    };
    let R = (k)=>{
        if (k.found && k.totalBytes <= cap) {
            return k.version;
        }
        return 0;
    };
    let N = `v5:${h.version}:${R(w)}:${R(C)}:${R(F)}`;
    if (y?.mtimeKey === N) {
        D().noteHit(n);
        return y.state;
    }
    return Zt(n, N, I(h), P(w), P(C), P(F), y, r);
}
function Zt(e, n, r, s, f, m, g, S) {
    try {
        let y = X(r);
        let h = we().safeParse(y);
        if (!h.success) {
            t(`[jobs] skipping ${basename(e)}: state.json schema validation failed \u2014 ${h.error.message}`, {
                level: "warn"
            });
            D().noteRejected(e, n);
            return null;
        }
        let w = s !== null ? Number(s) : undefined;
        let C = f !== null ? Number(f) : undefined;
        let F = we().in.shape;
        let I = y !== null && typeof y === "object" ? Object.entries(y).filter(([R])=>!Object.hasOwn(F, R)) : [];
        let P = {
            ...Object.fromEntries(I),
            ...h.data
        };
        if (Number.isFinite(w)) {
            P = {
                ...P,
                sortOrder: w
            };
        }
        if (Number.isFinite(C)) {
            P = {
                ...P,
                stateSortOrder: C
            };
        }
        if (m !== null && m.trim()) {
            P = {
                ...P,
                group: m.trim()
            };
        }
        if (P.group !== undefined) {
            P = {
                ...P,
                group: ye(P.group)
            };
        }
        D().noteParsed(e, n, P);
        return P;
    } catch (error) {
        t(`[jobs] ${basename(e)}: state.json read/parse failed \u2014 ${error instanceof Error ? error.message : String(error)}`, {
            level: "warn"
        });
        if (D().shouldReportTransient(e)) {
            i("tengu_bg_state_read_transient", {
                errno: Vr(error) ?? b("unknown"),
                had_cache: g !== undefined
            });
        }
        return ke(g, S);
    }
}
function Ae(e, n) {
    D().noteAbsent(e);
    n?.onAbsent?.();
    return null;
}
async function gno(e, n) {
    return Pe(e, n, {
        onReadFailure: "null"
    });
}
async function ro(e, n) {
    return Pe(e, n, undefined);
}
async function hno(e, n) {
    let r = {
        absent: false
    };
    let s = await Pe(e, n, {
        onAbsent: ()=>{
            r.absent = true;
        }
    });
    if (r.absent) {
        return "absent";
    }
    return s;
}
async function Pe(e, n, r) {
    if (n !== undefined && Hrt(e, [
        te
    ]) !== undefined) {
        return Xt(n, e, r);
    }
    let s = join(e, te);
    let f = join(e, "order");
    let m = join(e, "stateOrder");
    let g = join(e, "group");
    let S;
    let y;
    try {
        let [w, C, F, I] = await Promise.all([
            lstat(s),
            lstat(f).catch(()=>null),
            lstat(m).catch(()=>null),
            lstat(g).catch(()=>null)
        ]);
        if (!w.isFile() || w.size > cap) {
            let R = `rejected:${w.mtimeMs}:${w.size}`;
            if (D().peek(e)?.mtimeKey === R) {
                return null;
            }
            t(`[jobs] skipping ${basename(e)}: state.json is ${w.isFile() ? `too large (${w.size} bytes)` : "not a regular file"}`, {
                level: "warn"
            });
            D().noteRejected(e, R);
            return null;
        }
        let P = (R)=>R !== null && R.isFile() && R.size <= cap;
        y = {
            order: P(C),
            stateOrder: P(F),
            group: P(I)
        };
        S = `${w.mtimeMs}:${y.order ? C.mtimeMs : 0}:${y.stateOrder ? F.mtimeMs : 0}:${y.group ? I.mtimeMs : 0}`;
    } catch (error) {
        if (z(error)) {
            return Ae(e, r);
        }
        t(`[jobs] ${basename(e)}: state.json stat failed \u2014 ${error instanceof Error ? error.message : String(error)}`, {
            level: "warn"
        });
        let C = D().peek(e);
        if (D().shouldReportTransient(e)) {
            i("tengu_bg_state_read_transient", {
                errno: Vr(error) ?? b("unknown"),
                had_cache: C !== undefined
            });
        }
        return ke(C, r);
    }
    let h = D().peek(e);
    if (h?.mtimeKey === S) {
        D().noteHit(e);
        return h.state;
    }
    try {
        let [w, C, F, I] = await Promise.all([
            readFile(s, "utf-8"),
            y.order ? readFile(f, "utf-8").catch(()=>null) : Promise.resolve(null),
            y.stateOrder ? readFile(m, "utf-8").catch(()=>null) : Promise.resolve(null),
            y.group ? readFile(g, "utf-8").catch(()=>null) : Promise.resolve(null)
        ]);
        let P = X(w);
        let R = we().safeParse(P);
        if (!R.success) {
            t(`[jobs] skipping ${basename(e)}: state.json schema validation failed \u2014 ${R.error.message}`, {
                level: "warn"
            });
            D().noteRejected(e, S);
            return null;
        }
        let N = C !== null ? Number(C) : undefined;
        let k = F !== null ? Number(F) : undefined;
        let L = we().in.shape;
        let J = P !== null && typeof P === "object" ? Object.entries(P).filter(([ie])=>!Object.hasOwn(L, ie)) : [];
        let H = {
            ...Object.fromEntries(J),
            ...R.data
        };
        if (Number.isFinite(N)) {
            H = {
                ...H,
                sortOrder: N
            };
        }
        if (Number.isFinite(k)) {
            H = {
                ...H,
                stateSortOrder: k
            };
        }
        if (I !== null && I.trim()) {
            H = {
                ...H,
                group: I.trim()
            };
        }
        if (H.group !== undefined) {
            H = {
                ...H,
                group: ye(H.group)
            };
        }
        D().noteParsed(e, S, H);
        return H;
    } catch (error) {
        if (z(error)) {
            return Ae(e, r);
        }
        t(`[jobs] ${basename(e)}: state.json read/parse failed \u2014 ${error instanceof Error ? error.message : String(error)}`, {
            level: "warn"
        });
        if (D().shouldReportTransient(e)) {
            i("tengu_bg_state_read_transient", {
                errno: Vr(error) ?? b("unknown"),
                had_cache: h !== undefined
            });
        }
        return ke(h, r);
    }
}
async function e3t(e, n) {
    Bf(e);
    let r = await ro(e, n).catch(()=>null);
    if (r !== null && r.state !== "done" && r.state !== "stopped" && r.state !== "blocked" && r.state !== "failed") {
        await Q(50);
        Bf(e);
        r = await ro(e, n).catch(()=>null) ?? r;
    }
    return r;
}
function ee() {
    return join(EM(), "pins.json");
}
const stale = 5000;
async function Sqe(e) {
    if (e) {
        return en(e);
    }
    try {
        let n = await lstat(ee());
        if (!n.isFile() || n.size > cap) {
            if (!n.isFile()) {
                await heal();
            }
            return new Set;
        }
        return Te(await readFile(ee(), "utf-8"));
    } catch (error) {
        if (z(error)) {
            await En(ee(), _([])).catch((r)=>{
                if (!z(r)) {
                    cl(r);
                }
            });
            return new Set;
        }
        return new Set;
    }
}
async function en(e) {
    let n = await Mur(e, $e.jobPins(), {
        cap,
        screens: lt(),
        screenKey: ee(),
        heal
    });
    return Te(n ?? undefined);
}
function lt() {
    return Our.of(B().host).pins;
}
function Te(e) {
    if (e === undefined || e.length > cap) {
        return new Set;
    }
    let n;
    try {
        n = X(e);
    } catch  {
        return new Set;
    }
    if (!Array.isArray(n)) {
        return new Set;
    }
    return new Set(n.filter((r)=>typeof r === "string"));
}
async function heal(e) {
    let n = await lstat(ee()).catch(()=>{});
    if (n === undefined || n.isFile() && !(e?.evenRegular && n.size > cap)) {
        return false;
    }
    await rm(ee(), {
        recursive: true,
        force: true
    }).catch(()=>{});
    return true;
}
async function YJ(e, n, nameSource, s, f) {
    let m = Yr(e);
    let g = await ro(m, s);
    if (!g) {
        return false;
    }
    if (g.name === n) {
        return true;
    }
    Bf(m);
    let S = await ro(m, s) ?? g;
    if (S.name === n || nameSource === "auto" && S.name) {
        return true;
    }
    if (!ut(S, f)) {
        return false;
    }
    return ic(m, {
        ...S,
        name: n,
        nameSource,
        updatedAt: new Date().toISOString()
    }, s).then(()=>true, (y)=>{
        if (!z(y)) {
            cl(y);
        }
        return false;
    });
}
async function t3t(e, color, r) {
    let s = Yr(e);
    let f = await ro(s, r);
    if (!f) {
        return false;
    }
    if (f.color === color) {
        return true;
    }
    Bf(s);
    let m = await ro(s, r) ?? f;
    if (m.color === color) {
        return true;
    }
    return ic(s, {
        ...m,
        color,
        updatedAt: new Date().toISOString()
    }, r).then(()=>true, (g)=>{
        if (!z(g)) {
            cl(g);
        }
        return false;
    });
}
function jur() {
    return d4().relocatedCwd;
}
async function n3t(cwd, n) {
    let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!a_CLAUDE_JOB_DIR || a.CLAUDE_CODE_SESSION_KIND !== "bg") {
        return;
    }
    d4().relocatedCwd = cwd;
    Bf(a_CLAUDE_JOB_DIR);
    let s = await ro(a_CLAUDE_JOB_DIR, n);
    let f = s?.worktreePath ? s.originCwd : cwd;
    if (!s || s.cwd === cwd && s.originCwd === f) {
        return;
    }
    Bf(a_CLAUDE_JOB_DIR);
    let m = await ro(a_CLAUDE_JOB_DIR, n) ?? s;
    await ic(a_CLAUDE_JOB_DIR, {
        ...m,
        cwd,
        originCwd: m.worktreePath ? m.originCwd : cwd,
        updatedAt: new Date().toISOString()
    }, n).catch((g)=>{
        if (!z(g)) {
            cl(g);
        }
    });
}
async function yno(resumeSessionId, linkScanPath, r) {
    let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!a_CLAUDE_JOB_DIR || a.CLAUDE_CODE_SESSION_KIND !== "bg") {
        return;
    }
    Bf(a_CLAUDE_JOB_DIR);
    let f = await ro(a_CLAUDE_JOB_DIR, r);
    if (!f || f.resumeSessionId === resumeSessionId && f.linkScanPath === linkScanPath) {
        return;
    }
    Bf(a_CLAUDE_JOB_DIR);
    let m = await ro(a_CLAUDE_JOB_DIR, r) ?? f;
    await ic(a_CLAUDE_JOB_DIR, {
        ...m,
        resumeSessionId,
        linkScanPath,
        linkScanOffset: 0,
        updatedAt: new Date().toISOString()
    }, r).catch((g)=>{
        if (!z(g)) {
            cl(g);
        }
    });
}
async function E0e(e, n, { includeSettled = false } = {}) {
    let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!a_CLAUDE_JOB_DIR || a.CLAUDE_CODE_SESSION_KIND !== "bg") {
        return;
    }
    await Lrt(async ()=>{
        Bf(a_CLAUDE_JOB_DIR);
        let f = await ro(a_CLAUDE_JOB_DIR, n);
        if (!f?.inFlight || Ra(f) && !includeSettled || f.tempo === "active") {
            return;
        }
        let f_inFlight = f.inFlight;
        if (e.count === f_inFlight.tasks && (e.drainableMonitors ?? 0) === (f_inFlight.drainableMonitors ?? 0) && e.kinds.length === f_inFlight.kinds.length && e.kinds.every((g)=>f_inFlight.kinds.includes(g))) {
            return;
        }
        await ic(a_CLAUDE_JOB_DIR, {
            ...f,
            inFlight: {
                tasks: e.count,
                queued: f_inFlight.queued,
                kinds: [
                    ...e.kinds
                ],
                ...e.drainableMonitors !== undefined && e.drainableMonitors > 0 && {
                    drainableMonitors: e.drainableMonitors
                },
                ...f_inFlight.wake !== undefined && {
                    wake: f_inFlight.wake
                }
            },
            updatedAt: new Date().toISOString()
        }, n).catch((g)=>{
            if (!z(g)) {
                cl(g);
            }
        });
    });
}
function ut(e, n) {
    if (n === undefined || !e.name) {
        return true;
    }
    if (e.nameSource === "auto" || e.nameSource === "collision") {
        return true;
    }
    return n.includes(ci(e.name));
}
async function PD(e, n, r, s, f, m, g) {
    let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!a_CLAUDE_JOB_DIR || a.CLAUDE_CODE_SESSION_KIND !== "bg") {
        return;
    }
    await Lrt(async ()=>{
        Bf(a_CLAUDE_JOB_DIR);
        let y = await ro(a_CLAUDE_JOB_DIR, f);
        if (!y?.respawnFlags) {
            return;
        }
        if (g && !g(y.respawnFlags)) {
            return;
        }
        let h = [
            e,
            ...n
        ];
        let w = (R)=>{
            let N = [];
            for(let k = 0; k < R.length; k++){
                let L = R[k];
                if (h.some((J)=>L === J || L.startsWith(`${J}=`))) {
                    if (L.indexOf("=") === -1 && R[k + 1] !== undefined) {
                        k++;
                    }
                    continue;
                }
                N.push(L);
            }
            if (r === null) {
                return N;
            }
            return [
                ...N,
                ...SE(e, r)
            ];
        };
        let C = w(y.respawnFlags);
        if (C.length === y.respawnFlags.length && C.every((R, N)=>R === y.respawnFlags[N])) {
            return;
        }
        Bf(a_CLAUDE_JOB_DIR);
        let F = await ro(a_CLAUDE_JOB_DIR, f) ?? y;
        let I = F.respawnFlags ?? y.respawnFlags;
        if (g && !g(I)) {
            return;
        }
        let P = ut(F, m);
        await ic(a_CLAUDE_JOB_DIR, {
            ...F,
            ...P ? s : {},
            respawnFlags: w(I),
            updatedAt: new Date().toISOString()
        }, f).catch((R)=>{
            if (!z(R)) {
                cl(R);
            }
        });
    });
}
async function _no(e, n, r) {
    let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!a_CLAUDE_JOB_DIR || a.CLAUDE_CODE_SESSION_KIND !== "bg") {
        return;
    }
    await Lrt(async ()=>{
        Bf(a_CLAUDE_JOB_DIR);
        let f = await ro(a_CLAUDE_JOB_DIR, r);
        if (!f?.respawnFlags) {
            return;
        }
        let m = SE(e, n);
        for(let S = 0; S <= f.respawnFlags.length - m.length; S++){
            if (m.every((y, h)=>f.respawnFlags[S + h] === y)) {
                return;
            }
        }
        Bf(a_CLAUDE_JOB_DIR);
        let g = await ro(a_CLAUDE_JOB_DIR, r) ?? f;
        await ic(a_CLAUDE_JOB_DIR, {
            ...g,
            respawnFlags: [
                ...g.respawnFlags ?? [],
                ...m
            ],
            updatedAt: new Date().toISOString()
        }, r).catch((S)=>{
            if (!z(S)) {
                cl(S);
            }
        });
    });
}
async function xe(e, n) {
    await rm(e, {
        force: true
    });
    let r = await k0(e, n);
    try {
        await ss(r, e);
    } catch (error) {
        await rm(r, {
            force: true
        }).catch(()=>{});
        throw error;
    }
}
async function Ce(e, n, r) {
    let s = await e.write(n, r, {
        parent: "mustExist",
        mode: 438 & ~process.umask()
    });
    if (!s.ok) {
        let f = Vm(s.error);
        throw Object.assign(new x(`[jobs] v5 sidecar write failed: ${gt(s.error)}`, "[jobs] v5 sidecar write failed"), f !== undefined ? {
            code: f
        } : {});
    }
}
async function bno(e, n, r) {
    let s = j() && r ? Hrt(e, [
        "order"
    ]) : undefined;
    if (r && s) {
        await Ce(r, s, String(n));
    } else {
        await xe(join(e, "order"), String(n));
    }
    Bf(e);
}
async function Sno(e, n, r) {
    let s = j() && r ? Hrt(e, [
        "stateOrder"
    ]) : undefined;
    if (r && s) {
        await Ce(r, s, String(n));
    } else {
        await xe(join(e, "stateOrder"), String(n));
    }
    Bf(e);
}
async function CIn(e, n, r) {
    let s = join(e, "group");
    let f = ye(n);
    let m = j() && r ? Hrt(e, [
        "group"
    ]) : undefined;
    if (r && m) {
        if (f) {
            await Ce(r, m, f);
        } else {
            let g = await r.delete(m);
            if (!g.ok) {
                throw new x(`[jobs] v5 sidecar delete failed: ${g.error.code}`, "[jobs] v5 sidecar delete failed");
            }
        }
    } else if (f) {
        await xe(s, f);
    } else {
        await rm(s, {
            force: true
        });
    }
    Bf(e);
}
async function wno(e) {
    let n = join(EM(), ".order");
    await mkdir(EM(), {
        recursive: true
    });
    await using r = await ja(n, {
        realpath: false,
        stale: 5000,
        retries: {
            retries: 5,
            minTimeout: 20
        },
        onCompromised: (s)=>t(`jobs/.order lock compromised (likely process suspend or slow fs): ${s}`, {
                level: "error"
            })
    });
    return await e();
}
const ct = Oh();
function Lrt(e) {
    return ct.run("own-state.json", e);
}
function RIn(e, n, r) {
    return ct.run("pins.json", async ()=>{
        if (j() && r) {
            return tn(e, n, r);
        }
        let s = ee();
        await mkdir(dirname(s), {
            recursive: true
        });
        await using f = await ja(s, {
            realpath: false,
            stale,
            retries: {
                retries: 5,
                minTimeout: 20
            },
            onCompromised: (g)=>t(`pins.json lock compromised (likely process suspend or slow fs): ${g}`, {
                    level: "error"
                })
        });
        let m = await Sqe();
        if (n ? m.has(e) : !m.has(e)) {
            return;
        }
        if (n) {
            m.add(e);
        } else {
            m.delete(e);
            await rm(join(Yr(e), "order")).catch((g)=>{
                if (!z(g)) {
                    throw g;
                }
            });
            Bf(Yr(e));
        }
        await En(s, _([
            ...m
        ], null, 2));
    });
}
async function tn(e, n, r) {
    let s = (y)=>{
        let h = Te(y?.value);
        if (n ? h.has(e) : !h.has(e)) {
            return {
                skip: true,
                result: false
            };
        }
        if (n) {
            h.add(e);
        } else {
            h.delete(e);
        }
        return {
            write: _([
                ...h
            ], null, 2),
            result: true
        };
    };
    let f = lt();
    let m = await r.statMeta($e.jobPins());
    if (m.ok && m.value.size > cap) {
        await heal({
            evenRegular: true
        });
        f.delete(ee());
    } else if (!m.ok && Ee(m.error) !== undefined) {
        await heal();
        f.delete(ee());
    }
    let g = {
        publishDiscipline: "atomic",
        mode: 438 & ~process.umask()
    };
    let S = await r.updateText($e.jobPins(), s, g);
    if (!S.ok && await heal()) {
        S = await r.updateText($e.jobPins(), s, g);
    }
    if (!S.ok) {
        throw new x(`[jobs] v5 pins update failed: ${S.error.code}`, "[jobs] v5 pins update failed");
    }
    if (!n && S.value.result === true) {
        let y = st(e, [
            "order"
        ]);
        if (y) {
            let h = await r.delete(y);
            if (!h.ok) {
                t(`[jobs] v5 order sidecar release failed after unpin: ${h.error.code}`, {
                    level: "warn"
                });
            }
        } else {
            await rm(join(Yr(e), "order")).catch((h)=>{
                if (!z(h)) {
                    t(`[jobs] order sidecar release failed after unpin: ${l(h)}`, {
                        level: "warn"
                    });
                }
            });
        }
        Bf(Yr(e));
    }
}
async function LA(e, n, r) {
    if (n) {
        return rn(n, e, r);
    }
    let s;
    try {
        s = await readdir(EM(), {
            withFileTypes: true
        });
    } catch (error) {
        if (KJ(v(error))) {
            r?.();
        }
        return [];
    }
    let [f, m] = await Promise.all([
        Sqe(),
        Promise.all(s.filter((S)=>S.isDirectory()).map(async (S)=>{
            let y = await ro(join(EM(), S.name));
            if (y) {
                return {
                    id: S.name,
                    state: y
                };
            }
            return null;
        }))
    ]);
    let g = m.filter((S)=>S !== null).map((S)=>{
        if (f.has(S.id)) {
            return {
                ...S,
                state: {
                    ...S.state,
                    pinned: true
                }
            };
        }
        return S;
    });
    if (e) {
        return Nrt(g, e);
    }
    return g;
}
async function nn(e) {
    let ids = [];
    let cursor;
    do {
        let s = await e.listEntries({
            namespace: "job"
        }, cursor === undefined ? {
            skipScopeStats: true
        } : {
            cursor,
            skipScopeStats: true
        });
        if (!s.ok) {
            return {
                ok: false,
                error: s.error
            };
        }
        for (let f of s.value.items){
            if (f.kind === "scope" && f.scope.namespace === "job" && f.scope.jobId !== undefined && f.scope.relPath === undefined && fr(f.scope.jobId)) {
                ids.push(f.scope.jobId);
            }
        }
        cursor = s.value.cursor;
    }while (cursor !== undefined)
    return {
        ok: true,
        ids
    };
}
async function rn(e, n, r) {
    let s = await nn(e);
    if (!s.ok) {
        if (Fur(s.error)) {
            r?.();
        }
        return [];
    }
    let s_ids = s.ids;
    let [m, g] = await Promise.all([
        Sqe(e),
        Promise.all(s_ids.map(async (id)=>{
            let h = await ro(Yr(id), e);
            if (h) {
                return {
                    id,
                    state: h
                };
            }
            return null;
        }))
    ]);
    let S = g.filter((y)=>y !== null).map((y)=>{
        if (m.has(y.id)) {
            return {
                ...y,
                state: {
                    ...y.state,
                    pinned: true
                }
            };
        }
        return y;
    });
    if (n) {
        return Nrt(S, n);
    }
    return S;
}
function Nrt(e, n) {
    let r = Date.now();
    return e.map((s)=>{
        if (Ra(s.state)) {
            return s;
        }
        if (n.has(s.id)) {
            return s;
        }
        if (r - Date.parse(s.state.createdAt) < on) {
            return s;
        }
        return {
            ...s,
            state: an(s.state)
        };
    });
}
var on = 5000;
function an(state) {
    if (Frt(state)) {
        return {
            ...state,
            tempo: "blocked",
            inFlight: undefined
        };
    }
    return {
        ...state,
        state: "failed",
        tempo: "idle",
        needs: undefined,
        block: undefined,
        inFlight: undefined,
        detail: state.detail.replace(/; respawning$/, "")
    };
}
const k0e = "starting…";
const needs = "send a prompt to start";
function $rt(e) {
    return e.needs !== undefined && e.needsOverlay === e.needs;
}
const wqe = `(idle \u2014 ${needs})`;
const T0e = [
    "starting",
    "resuming",
    "adopted",
    "crashed"
];
const ITt = 172800000;
const sn = "ended while the background service was off";
function Pye(e) {
    let n = new Date().toISOString();
    return {
        state: "working",
        detail: e.detail !== undefined ? ps(e.detail) : k0e,
        tempo: e.tempo ?? "active",
        needs: e.needs,
        inFlight: e.inFlight,
        output: null,
        children: null,
        linkScanOffset: 0,
        linkScanPath: e.linkScanPath,
        template: e.template.name,
        routine: e.routine,
        respawnFlags: e.respawnFlags ?? [],
        bgIsolation: e.bgIsolation,
        providerEnv: e.providerEnv && ois(e.providerEnv, e.cwd),
        sessionPermissionRules: e.sessionPermissionRules,
        memoryToggledOff: e.memoryToggledOff,
        autoMemoryOffThisSession: e.autoMemoryOffThisSession,
        forkSourceAlive: e.forkSourceAlive,
        forkBoundaryAt: e.forkBoundaryAt,
        forkSessionId: e.forkSessionId,
        forkParentSessionId: e.forkParentSessionId,
        interactiveLineage: e.interactiveLineage,
        intent: e.intent,
        displayIntent: e.displayIntent,
        name: e.name,
        nameSource: e.nameSource,
        color: uLe({
            userOverride: e.color,
            agentDefinitionColor: e.template.color
        }),
        initialPrompt: e.template.initialPrompt,
        sessionId: e.sessionId,
        resumeSessionId: e.sessionId,
        daemonShort: e.sessionId.slice(0, 8),
        cwd: e.cwd,
        createdAt: n,
        updatedAt: n,
        firstTerminalAt: null,
        worktreePath: e.worktreePath,
        worktreeBranch: e.worktreeBranch,
        worktreeHookBased: e.worktreeHookBased,
        originCwd: e.originCwd,
        backend: "daemon"
    };
}
async function vno(e, n, r) {
    if (n.length === 0) {
        return e;
    }
    let s = new Set(e.map((h)=>h.id));
    let f = n.filter((h)=>at.test(h.short) && !s.has(h.short) && h.source !== "spare" && !h.dying);
    if (f.length === 0) {
        return e;
    }
    let m = await xD({
        silent: true
    }, r);
    let g = await Promise.all(f.map((h)=>{
        let w = m.workers[h.short];
        return TIn(h.pid, w?.pid === h.pid ? w.procStart : undefined);
    }));
    for (let [h, w] of f.entries()){
        if (g[h] !== "live") {
            t(`[adoptRosterOrphans] pruned dead record ${w.short} (${g[h]})`);
            if (D().shouldReportPruned(w.short)) {
                i("tengu_bg_roster_orphan_pruned", {
                    reason: d(g[h] ?? "dead_pid")
                });
            }
        } else {
            D().notePruneCandidateLive(w.short);
        }
    }
    let S = f.filter((h, w)=>g[w] === "live");
    if (S.length === 0) {
        return e;
    }
    let y = S.map((h)=>{
        let w = {
            ...Pye({
                template: {
                    name: h.agent ?? "bg",
                    description: ""
                },
                routine: h.routine,
                intent: h.intent,
                name: h.name,
                detail: h.detail,
                ...h.tempo === "active" && (h.state === "running" || T0e.includes(h.state)) ? h.routine ? {
                    tempo: "idle"
                } : {
                    tempo: "blocked",
                    needs
                } : {
                    tempo: h.tempo,
                    needs: h.needs
                },
                sessionId: AC(h.sessionId),
                cwd: AC(h.cwd),
                worktreePath: h.worktreePath === undefined ? undefined : AC(h.worktreePath)
            }),
            createdAt: new Date(h.createdAt ?? h.startedAt).toISOString(),
            daemonShort: h.short,
            state: T0e.includes(h.state) ? "working" : h.state,
            ...HI(h.state) && {
                inFlight: {
                    tasks: 0,
                    queued: 0,
                    kinds: []
                }
            }
        };
        let C = Yr(h.short);
        let F = r ? st(h.short, [
            te
        ]) : undefined;
        if (r && F) {
            r.write(F, _(w), {
                precondition: {
                    type: "ifAbsent"
                },
                mode: 384
            }).then((I)=>{
                if (I.ok) {
                    i("tengu_bg_roster_orphan_adopted", {});
                } else if (I.error.code !== "AlreadyExists") {
                    cl(new x(`[jobs] v5 orphan seed write failed: ${I.error.code}`, "[jobs] v5 orphan seed write failed"));
                }
            });
        } else {
            mkdir(C, {
                recursive: true
            }).then(()=>Kz(join(C, "state.json"), _(w), 384)).then(()=>i("tengu_bg_roster_orphan_adopted", {})).catch((I)=>{
                if (v(I) !== "EEXIST") {
                    cl(I);
                }
            });
        }
        return {
            id: h.short,
            state: w
        };
    });
    return [
        ...e,
        ...y
    ];
}
function o_(e) {
    if (e === "done") {
        return "success";
    }
    if (e === "failed") {
        return "failure";
    }
    if (e === "stopped") {
        return "stopped";
    }
    return null;
}
function HI(e) {
    return o_(e) !== null;
}
function Ra(e) {
    return HI(e.state) && e.tempo !== "active";
}
function wk(e) {
    return e.template === "exec" && e.respawnFlags.length === 0;
}
function Frt(e) {
    return e.state === "blocked" && !wk(e);
}
function OTt(e) {
    return e.backend === "daemon" && !wk(e);
}
function Nne(e) {
    let n = e.originCwd || (e.cwd.match(/^(.+?)[/\\]\.claude[/\\]worktrees[/\\]/)?.[1] ?? e.cwd);
    return AC(n);
}
function r3t(e, n) {
    if (e.backend === "remote") {
        return true;
    }
    let r = relative(n, Nne(e));
    return r.split(/[/\\]/, 1)[0] !== ".." && !isAbsolute(r);
}
function Urt(e) {
    let n = (r)=>r?.trim().toLowerCase().startsWith("/loop") ?? false;
    return n(e.intent) || n(e.initialPrompt);
}
function y4(e) {
    return e.routine !== undefined || e.selfWake === true || (e.inFlight?.kinds.includes("session_cron") ?? false) || Urt(e);
}
function vqe(e, n, r, s, f) {
    let m = Yr(e);
    return ro(m, f).then(async (g)=>{
        if (!g || Ra(g) || n === "failed" && Frt(g)) {
            return "none";
        }
        let S = Date.now();
        let y = new Date(S).toISOString();
        let h = s?.resumable === "auto-resume" && n === "failed" && !wk(g) && S - Date.parse(g.updatedAt) > ITt;
        await ic(m, {
            ...g,
            state: h ? "stopped" : n === "crashed" ? "failed" : n,
            detail: h ? sn : n === "stopped" ? "stopped" : n === "failed" ? (g.detail || r).replace(/; respawning$/, "") : r,
            tempo: "idle",
            inFlight: undefined,
            needs: undefined,
            updatedAt: y,
            firstTerminalAt: g.firstTerminalAt ?? (h ? g.updatedAt : y),
            lastTerminalAt: h ? g.updatedAt : y,
            ...s?.resumable === "auto-resume" && n === "failed" && (h ? {
                deadEpochReapedAt: y
            } : {
                reapedMidWorkAt: g.updatedAt
            }),
            ...s?.resumable === "wake-only" && n === "failed" && {
                reapedUnsettledAt: g.updatedAt
            }
        }, f);
        if (h) {
            return "dead-epoch";
        }
        return "settled";
    }).catch((g)=>{
        cl(g);
        return "none";
    });
}
const ln = "To reattach to a cloud session, pass its id: `claude --cloud <session-id>` (find IDs at claude.ai/code).";
function tis() {
    return false;
}
function Eno(e) {
    let n = "Error: ";
    let r = "--cloud";
    let s = `
${ln}`;
    if (e.hasPool || e.hasEnvironmentQuery) {
        let f = Eqe(e.isChosenByNoMonorepo === true);
        n = f.prefix;
        r = f.flag;
        s = "";
    }
    if (e.print && !e.hasPool && !e.isCloudAttach && !e.headlessCloudPrint) {
        if (e.loneWordValue !== undefined) {
            return `Error: --cloud ${MTt(e.loneWordValue)} is not a cloud session ID or URL.
With --print, --cloud sends the prompt to an existing cloud session: pass its ID (session_... or cse_...) or its claude.ai/code URL. To start a new cloud session from a description instead, drop --print.`;
        }
        return `Error: ${r} cannot be combined with --print.
Starting a new cloud session with ${r} is interactive only: drop --print, or drop ${r} to run locally. To message an existing cloud session instead, pass its ID: \`claude -p "message" --cloud <session-id>\` (find IDs at claude.ai/code).`;
    }
    if (e.nonInteractive && !e.hasPool && !e.isCloudAttach && !e.headlessCloud && !e.headlessCloudPrint) {
        if (e.loneWordValue !== undefined) {
            return `Error: --cloud ${MTt(e.loneWordValue)} is not a cloud session ID or URL.
Without an interactive terminal, --cloud can only send the prompt to an existing cloud session: pass its ID (session_... or cse_...) or its claude.ai/code URL. To start a new cloud session, run from a TTY.`;
        }
        return `Error: ${r} requires an interactive terminal.
Non-interactive invocations (piped stdout, --init-only, --sdk-url) run locally and would silently ignore ${r}. Drop ${r}, or run from a TTY.`;
    }
    if (e.continue) {
        return `${n}${r} cannot be combined with --continue.${s}`;
    }
    if (e.hasConnect || e.hasSSH || e.hasAssistant || e.hasTeleport) {
        let f = e.hasConnect ? "a cc:// connect URL" : e.hasSSH ? "`claude ssh`" : e.hasAssistant ? "`claude assistant`" : "--teleport";
        return `${n}${r} cannot be combined with ${f} \u2014 both select a remote backend; pick one.`;
    }
    if (e.resume || e.fromPr) {
        let f = e.resume ? "--resume" : "--from-pr";
        return `${n}${r} cannot be combined with ${f}.${s}`;
    }
    return null;
}
function nis(e) {
    return !e.print && !e.initOnly && e.nonInteractive && !e.hasSdkUrl && e.inputFormat === "stream-json" && e.outputFormat === "stream-json";
}
function ris(e) {
    return e.print && !e.initOnly && !e.hasSdkUrl && e.outputFormat !== "stream-json";
}
function kno(e) {
    if (e.some((n)=>n === "--environment" || n.startsWith("--environment=") || n === "--pool" || n.startsWith("--pool="))) {
        return "--bg and --environment are different backends. Use `claude -p '<task>' --environment <id>` directly to start a session on the environment.";
    }
    return "--bg and --cloud are different backends. Use `claude --cloud '<task>'` directly to start a cloud session.";
}
function Eqe(e) {
    return {
        prefix: "Error: ",
        flag: "--environment"
    };
}
function Tno(e) {
    if (e.some((n)=>n === "--environment" || n.startsWith("--environment=") || n === "--pool" || n.startsWith("--pool="))) {
        return true;
    }
    return e.some((n)=>n === "--cloud" || n.startsWith("--cloud=") || n === "--remote" || n.startsWith("--remote="));
}
function Brt(e) {
    let n = [];
    for(let r = 0; r < e.length; r++){
        let s = e[r];
        if (s === "--") {
            for(let f = r; f < e.length; f++){
                n.push(e[f]);
            }
            break;
        }
        if (s.startsWith("--environment=") || s.startsWith("--pool=")) {
            continue;
        }
        if (s === "--environment" || s === "--pool") {
            if (e[r + 1] !== undefined && !e[r + 1].startsWith("-")) {
                r++;
            }
            continue;
        }
        n.push(s);
    }
    return n;
}
const un = 100;
function MTt(e) {
    let n = ne(e, un);
    return ypt(_(n.length < e.length ? `${n}\u2026` : n));
}
export { Our, Mur, mqe, vTt, nno, xrt, qss, Kss, Hur, Yss, proto_1 as $c, K6t, wM, Xss, zJ, wIn, Prt, Dur, rno, Irt, ono, Dne, sno, vIn, ETt, kTt, Ort, TTt, gqe, Y6t, ATt, w0e, hqe, CTt, yqe, RTt, _qe, ino, EIn, xTt, Lur, Jss, ano, v0e, lno, cno, bqe, kIn, Nur, $ur, PTt, xD, HA, GJ, TIn, X6t, VJ, dno, Qss, oce, uno, qJ, sce, SE, pno, J6t, Zss, AIn, fno, Mrt, eis, KJ, Fur, vM, DA, Q6t, Uur, EM, Yr, nm, Hrt, Drt, mno, Bur, ic, cl, Z6t, Lne, Bf, gno, ro, hno, e3t, Sqe, YJ, t3t, jur, n3t, yno, E0e, PD, _no, bno, Sno, CIn, wno, Lrt, RIn, LA, Nrt, k0e, needs as yb, $rt, wqe, T0e, ITt, Pye, vno, o_, HI, Ra, wk, Frt, OTt, Nne, r3t, Urt, y4, vqe, tis, Eno, nis, ris, kno, Eqe, Tno, Brt, MTt };
