import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, v, Vr, cA, ah, gOo, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ne, Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { AC } from "/$bunfs/root/chunk-xgw72tt1.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { m, Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _, X, un, ps, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { qZ } from "/$bunfs/root/chunk-6kc68p18.js";
import { Don, Yy, eRo, tRo } from "/$bunfs/root/chunk-24agvrd9.js";
import { Nr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { iq, FF, V3e, rUe, UF, $Wn, jMt, WMt, BWn, q3e, zMt, B8 } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { MT, hYe, $p, tf, JD } from "/$bunfs/root/chunk-9xenmz7v.js";
import { uu } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { Al, XIs } from "/$bunfs/root/chunk-z0brrd3r.js";
import { xno, XJ } from "/$bunfs/root/chunk-j8rm3ydc.js";
import { Ci, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { QHt, ZHt } from "/$bunfs/root/chunk-223dyewd.js";
import { KUe, cPe, Ase } from "/$bunfs/root/chunk-3fj60qgx.js";
import { ci } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Bkr, kSe, Tue, IFe, kjn, Fl, OFe } from "/$bunfs/root/chunk-t0b6khh6.js";
import { ndt } from "/$bunfs/root/chunk-74djrymf.js";
import { Zu } from "/$bunfs/root/chunk-peahjaep.js";
import { Ba } from "/$bunfs/root/chunk-6g4165br.js";
import { O6, vve, J9, W6n, hgt, UFo, z6n, BFo, Dje, nNr } from "/$bunfs/root/chunk-7n5kjzjd.js";
import { Ef, Ud } from "/$bunfs/root/chunk-twpzaz8r.js";
import { jfr, Hds, Fot, Uot, Bot, Z5t, kE, cre, Lds, Nds, Rce, kk, PM, Wot, e8t, t8t, n8t, OL, JMn } from "/$bunfs/root/chunk-fff9dfxd.js";
import { $c as proto, zJ, Prt, Dur, ono, Dne, w0e, CTt, Lur, HA, Yr, ic, Lne, ro, yb, ITt, o_, Ra, Brt } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { iXe, tmt, s4n, INt, j1e, gcn } from "/$bunfs/root/chunk-3yartt6z.js";
import { bfe } from "/$bunfs/root/chunk-6c9jy00t.js";
import { gin, hin } from "/$bunfs/root/chunk-d0zc1hr1.js";
import { QNt } from "/$bunfs/root/chunk-h6wjhsam.js";
import { oLr } from "/$bunfs/root/chunk-fbwezhm9.js";
import { VIe } from "/$bunfs/root/chunk-9wgccj06.js";
import { CG } from "/$bunfs/root/chunk-p3ysjv2a.js";
import { uW, pv } from "/$bunfs/root/chunk-4m0tjfqq.js";
import { _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { d9 } from "/$bunfs/root/chunk-ev7h5vhm.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { randomBytes } from "crypto";
import { unlinkSync, statSync } from "fs";
import { mkdir, open, readdir, unlink, access, writeFile, rename } from "fs/promises";
import { connect, Socket } from "net";
import { join, basename, dirname, isAbsolute } from "path";
import { StringDecoder } from "string_decoder";
const Pe = 2000;
const ne = Ef;
const st = /\x1b\[\d*D/g;
function ke(e, storageV5) {
    let s = "";
    let h = "";
    let n = true;
    let p = 0;
    let o = "";
    let u = false;
    function g(state, tempo) {
        let S = Ud(ps(h), ne);
        let y = `${state}|${tempo}|${S}`;
        if (y === o) {
            return;
        }
        o = y;
        ro(e, storageV5).then((R)=>{
            if (R && !u) {
                return ic(e, {
                    ...R,
                    state,
                    tempo,
                    detail: S,
                    updatedAt: new Date().toISOString()
                }, storageV5);
            }
        }).catch(c);
    }
    let f = setInterval(()=>{
        if (p > 0 && Date.now() - p < Pe) {
            g("working", "active");
        } else if (!n && h) {
            g("blocked", "blocked");
        } else {
            g("working", "idle");
        }
    }, Pe);
    f.unref();
    return {
        feed (E) {
            let w = un(E.replace(st, "\x00")).replace(/\r\n?/g, `
`).replace(/\0+$/, "").replace(/\0/g, `
`);
            if (!w) {
                return;
            }
            p = Date.now();
            s += w;
            let S = s.split(`
`);
            s = S.pop() ?? "";
            n = s === "";
            h = s.trim() || S.findLast((R)=>R.trim())?.trim() || h;
            if (s.length > ne * 2) {
                s = s.slice(-ne);
            }
            if (o.startsWith("blocked|")) {
                g("working", "active");
            }
        },
        dispose () {
            u = true;
            clearInterval(f);
        },
        get lastLine () {
            return Ud(ps(h), ne);
        }
    };
}
const Ie = [
    50,
    100,
    250,
    500,
    1000,
    2000
];
const Le = 30;
const dt = 4;
const ct = 10000;
const xe = 8 * t8t;
const ht = 50;
function ae(e, pid, s) {
    let { procStart, short, hostProc, auth, onAuthRequired } = s ?? {};
    let g = Oe();
    let f = Oe();
    let E;
    let w = new StringDecoder("utf8");
    let S;
    let y = false;
    let R = false;
    let L = 0;
    let I = 0;
    let M;
    let U;
    let D;
    let T;
    let C = 0;
    let H;
    let G;
    let W;
    let hadHello = false;
    let se = false;
    let fe = false;
    let ee = "";
    let Te = false;
    let q = procStart;
    if (q === undefined) {
        Fl(pid, {
            skipCache: true
        }).then((A)=>{
            q = A;
        });
    }
    let Ce = [];
    let ge = 0;
    function Z(A) {
        if (S) {
            if (S.destroyed) {
                return false;
            }
            if (!S.write(A)) {
                if (!D) {
                    D = setTimeout(()=>{
                        D = undefined;
                        S?.destroy();
                    }, ct);
                    D.unref();
                }
                if (!T && S.writableLength > xe) {
                    T = setTimeout(()=>{
                        T = undefined;
                        if (S && !S.destroyed && S.writableLength > xe) {
                            ie();
                            S.destroy();
                        }
                    }, ht);
                    T.unref();
                }
            }
            return true;
        }
        if (ge < 2 * t8t) {
            Ce.push(A);
            ge += A.length;
        }
        return false;
    }
    function ie() {
        if (D) {
            clearTimeout(D);
            D = undefined;
        }
        if (T) {
            clearTimeout(T);
            T = undefined;
        }
    }
    function K(exitCode, signal, hostStderr) {
        if (R) {
            return;
        }
        R = true;
        y = true;
        if (U) {
            clearTimeout(U);
            U = undefined;
        }
        ie();
        S?.destroy();
        S = undefined;
        let x = w.end();
        if (x) {
            g.emit(x);
        }
        f.emit({
            exitCode,
            signal,
            hostStderr
        });
    }
    function me(A) {
        let P = Ba(kk(e), 1048576).then((V)=>V ?? "").catch(()=>"");
        P.then((V)=>{
            let B = V.slice(0, 2000).trim();
            if (B.length > 0) {
                t(`[bg-pty] host crash: ${B}`, {
                    level: "warn"
                });
            }
            let J = [
                ...B.matchAll(/\bE[A-Z]{2,14}\b/g)
            ].find((Se)=>!"/\\".includes(B[Se.index - 1] ?? "."))?.[0];
            i("tengu_bg_ptyhost_crash", {
                hadBreadcrumb: B.length > 0,
                hadHello,
                via: d(A),
                short: short === undefined ? undefined : HA(short),
                stderr_errno: cA(J)
            });
        });
        kSe(C ? [
            -pid,
            C
        ] : [
            -pid
        ], A !== "hung" ? undefined : q);
        Tue(C, H);
        let N = $p().length > 0;
        let x = N ? (V, B)=>void P.then((J)=>K(V, B, Me(J)), ()=>K(V, B)) : K;
        if (hostProc) {
            let V = null;
            hostProc.exited.then((B)=>{
                V = {
                    code: B,
                    signal: hostProc.signalCode ?? undefined
                };
                x(B, V.signal);
            }, ()=>x(-1));
            setTimeout(()=>K(V ? V.code : -1, V?.signal), 1000).unref();
            return;
        }
        x(-1);
        if (N) {
            setTimeout(K, 1000, -1).unref();
        }
    }
    function rt(A) {
        if (A.kind === Wot) {
            if (!se) {
                let P = w.write(A.payload);
                if (fe) {
                    g.emit(P);
                } else if (P.length > 0) {
                    let N = (ee + P).replaceAll(zJ, "");
                    let x = lt(N);
                    ee = x > 0 ? N.slice(N.length - x) : "";
                    let V = x > 0 ? N.slice(0, N.length - x) : N;
                    if (V.length > 0) {
                        g.emit(V);
                    }
                }
            }
        } else if (A.ctrl.t === "hello") {
            if (hadHello) {
                se = true;
                w.end();
                ee = "";
            } else {
                unlink(PM(e)).catch(()=>{});
            }
            hadHello = true;
            C = A.ctrl.replPid;
            W = A.ctrl.version;
            H = undefined;
            if (C > 1 && O() !== "windows") {
                let P = C;
                OFe(P).then((N)=>{
                    if (C !== P || R || y || N === undefined) {
                        return;
                    }
                    H = N;
                    G?.(C, N);
                });
            }
        } else if (A.ctrl.t === "live") {
            if (!fe) {
                fe = true;
                if (ee.length > 0) {
                    g.emit(ee);
                    ee = "";
                }
            }
            if (se) {
                se = false;
                E?.();
            }
        } else if (A.ctrl.t === "exit") {
            K(A.ctrl.code, A.ctrl.signal);
        } else if (A.ctrl.t === "ping") {
            Z(OL({
                t: "pong"
            }));
        } else if (A.ctrl.t === "auth-required") {
            if (auth) {
                t(`[bg-pty] ${short ?? e}: host rejected auth token \u2014 roster ptyAuth poisoned; input is dead until the worker is re-keyed`, {
                    level: "warn"
                });
                onAuthRequired?.();
            } else {
                t(`[bg-pty] ${short ?? e}: host dropped input \u2014 DATA auth token missing (version skew; respawn the worker to re-key)`, {
                    level: "warn"
                });
            }
        }
    }
    function De() {
        if (y) {
            return;
        }
        let A = new Socket;
        let P = false;
        A.on("error", (N)=>{
            Te = v(N) === "ENOENT";
            _e();
        });
        A.once("close", ()=>{
            if (S === A) {
                S = undefined;
                ie();
            }
            if (y) {
                return;
            }
            if (P && !R) {
                try {
                    process.kill(pid, 0);
                    t("[bg-pty] dropped by host; reconnecting", {
                        level: "debug"
                    });
                    I = dt;
                    L = 0;
                    _e();
                    return;
                } catch  {}
                me("close");
                return;
            }
            _e();
        });
        A.once("connect", ()=>{
            P = true;
            L = 0;
            I = 0;
            S = A;
            A.on("drain", ie);
            let N = kk(e);
            let x = `${N}.read`;
            rename(N, x).then(()=>Ba(x, 1048576)).then((B)=>{
                let J = (B ?? "").slice(0, 2000).trim();
                if (J.length > 0) {
                    t(`[bg-pty] pre-connect stderr:
${J}`, {
                        level: "warn"
                    });
                }
            }).catch(()=>{}).finally(()=>unlink(x).catch(()=>{}));
            Z(OL({
                t: "pong"
            }));
            if (auth) {
                Z(OL({
                    t: "auth",
                    token: auth
                }));
            }
            for (let B of Ce.splice(0)){
                Z(B);
            }
            ge = 0;
            let V = JMn(rt, (B)=>{
                t(`[bg-pty] frame error: ${B}`, {
                    level: "warn"
                });
                A.destroy();
            });
            A.on("data", V);
        });
        A.connect(e);
    }
    function _e() {
        if (y || M) {
            return;
        }
        try {
            process.kill(pid, 0);
        } catch  {
            y = true;
            Ba(PM(e), 8388608).then((P)=>P ?? "").then((P)=>{
                if (!hadHello && P.length > 0) {
                    g.emit(P.replaceAll(zJ, ""));
                }
                unlink(PM(e)).catch(()=>{});
                me("connect");
            });
            return;
        }
        if (I > 0 && --I === 0) {
            me("hung");
            return;
        }
        if (procStart !== undefined && Te && L >= 3) {
            t(`[bg-pty] ${e}: ENOENT on adopt \u2014 sock file externally deleted; respawning`, {
                level: "warn"
            });
            i("tengu_bg_adopt_sock_unlinked", {});
            L = Le;
        }
        if (L >= Le) {
            t(`[bg-pty] ${e}: ${L} connect attempts failed; treating host as dead`, {
                level: "warn"
            });
            let P = q && IFe(pid);
            if (pid > 1 && (!q || !P || q === P)) {
                try {
                    process.kill(-pid, "SIGKILL");
                } catch  {
                    try {
                        process.kill(pid, "SIGKILL");
                    } catch  {}
                }
            }
            y = true;
            Ba(PM(e), 8388608).then((N)=>N ?? "").then((N)=>{
                if (!hadHello && N.length > 0) {
                    g.emit(N.replaceAll(zJ, ""));
                }
                unlink(PM(e)).catch(()=>{});
                let x = $p().length > 0;
                let V = (B, J)=>{
                    if (!x) {
                        K(B, J);
                        return;
                    }
                    Ba(kk(e), 1048576).then((Se)=>K(B, J, Me(Se ?? "")), ()=>K(B, J));
                };
                if (hostProc) {
                    let B = null;
                    hostProc.exited.then((J)=>{
                        B = {
                            code: J,
                            signal: hostProc.signalCode ?? undefined
                        };
                        V(J, B.signal);
                    }, ()=>V(-1));
                    setTimeout(()=>K(B ? B.code : -1, B?.signal), 1000).unref();
                } else {
                    V(-1);
                    if (x) {
                        setTimeout(K, 1000, -1).unref();
                    }
                }
            });
            return;
        }
        let A = Ie[Math.min(L, Ie.length - 1)];
        L++;
        M = setTimeout(()=>{
            M = undefined;
            De();
        }, A);
        M.unref();
    }
    De();
    return {
        pid,
        replPid: ()=>C,
        replVersion: ()=>W,
        onRepl: (A)=>{
            G = A;
            if (C > 1 && H !== undefined) {
                A(C, H);
            }
        },
        onResume: (A)=>{
            E = A;
        },
        write: (A)=>{
            if (R) {
                return;
            }
            let P = Buffer.from(A, "utf8");
            let N = t8t - 1;
            for(let x = 0; x < P.length; x += N){
                Z(n8t(P.subarray(x, x + N)));
            }
        },
        resize: (A, P)=>Z(OL({
                t: "resize",
                cols: A,
                rows: P
            })),
        kill: (A)=>{
            let sig = A === "SIGKILL" ? "SIGKILL" : "SIGTERM";
            let N = Z(OL({
                t: "kill",
                sig
            }));
            if (pid <= 1) {
                return;
            }
            if (O() === "windows" && sig === "SIGTERM" && N) {
                if (U) {
                    clearTimeout(U);
                }
                U = setTimeout((x, V)=>{
                    if (!kjn(x, q)) {
                        V(-1);
                        return;
                    }
                    try {
                        process.kill(x, "SIGKILL");
                    } catch  {
                        V(-1);
                    }
                }, 5000, pid, K);
                U.unref();
                return;
            }
            try {
                process.kill(-pid, sig);
            } catch  {
                try {
                    process.kill(pid, sig);
                } catch  {
                    K(-1);
                }
            }
            Tue(C, H, sig);
            if (sig === "SIGTERM" && !R) {
                if (U) {
                    clearTimeout(U);
                }
                U = setTimeout((x, V)=>{
                    if (!kjn(x, q)) {
                        V(-1);
                        return;
                    }
                    Tue(C, H, "SIGKILL");
                    try {
                        process.kill(-x, "SIGKILL");
                    } catch  {
                        try {
                            process.kill(x, "SIGKILL");
                        } catch  {
                            V(-1);
                        }
                    }
                }, 5000, pid, K);
                U.unref();
            }
        },
        dispose: ()=>{
            y = true;
            if (M) {
                clearTimeout(M);
                M = undefined;
            }
            if (U) {
                clearTimeout(U);
                U = undefined;
            }
            ie();
            S?.destroy();
            S = undefined;
        },
        onData: (A)=>({
                dispose: g.subscribe(A)
            }),
        onExit: (A)=>({
                dispose: f.subscribe(A)
            })
    };
}
function Me(e) {
    return e.slice(0, 2000).split(/\r?\n/).map((r)=>r.trim()).find((r)=>r.length > 0);
}
function lt(e) {
    let r = Math.min(zJ.length - 1, e.length);
    for(let s = r; s > 0; s--){
        if (e.endsWith(zJ.slice(0, s))) {
            return s;
        }
    }
    return 0;
}
const Ve = [
    100,
    250,
    500,
    1000,
    2000
];
const Be = 30;
function Ue(e, r, s, h, rvAuth) {
    let p;
    let o = false;
    let attempts = 0;
    let g = false;
    let f;
    function E() {
        if (o) {
            return;
        }
        let S = new Socket;
        let y = false;
        S.on("error", ()=>w());
        S.once("close", ()=>{
            if (p === S) {
                p = undefined;
            }
            if (o) {
                return;
            }
            if (y) {
                s();
            }
            w();
        });
        S.once("connect", ()=>{
            y = true;
            attempts = 0;
            g = false;
            p = S;
            S.write(_({
                proto,
                role: "supervisor",
                supervisorPid: process.pid,
                auth: rvAuth
            }) + `
`);
            h?.();
            QNt(S, (R)=>{
                let L;
                try {
                    L = X(R);
                } catch  {
                    return;
                }
                if (L && typeof L === "object" && "type" in L) {
                    r(L);
                }
            });
        });
        S.connect(e);
    }
    function w() {
        if (o || f || g) {
            return;
        }
        if (attempts >= Be) {
            g = true;
            t(`[bg-rv] ${e}: ${attempts} connect attempts failed \u2014 giving up (pid-poll is liveness backstop)`, {
                level: "warn"
            });
            i("tengu_bg_rv_connect_exhausted", {
                attempts
            });
            return;
        }
        let S = Ve[Math.min(attempts, Ve.length - 1)];
        attempts++;
        f = setTimeout(()=>{
            f = undefined;
            E();
        }, S);
        f.unref();
    }
    E();
    return {
        send (S) {
            if (!p || p.destroyed) {
                if (attempts >= Be) {
                    attempts = 0;
                    g = false;
                    w();
                }
                return false;
            }
            try {
                p.write(_(S) + `
`);
                return true;
            } catch (error) {
                t(`[bg-rv] send failed: ${String(error)}`);
                return false;
            }
        },
        close () {
            o = true;
            if (f) {
                clearTimeout(f);
            }
            p?.destroy();
            p = undefined;
        }
    };
}
const _t = 10000;
const Fe = 20;
const St = new Set([
    129,
    143
]);
function $e() {
    return k("tengu_bg_revival_guard", true);
}
function kt() {
    return k("tengu_greedy_crane", true) !== false;
}
function vt() {
    return k("tengu_cosmic_cookie", false) === true;
}
const Et = "Continue from where you left off. Note: this session was automatically restarted after its process exited unexpectedly; the user has not sent a new message since the restart. Re-verify anything time-sensitive (branch state, running processes, prior partial work) before continuing.";
const wt = 3600000;
const At = 3;
const Ge = 5000;
const yt = 300000;
const Rt = 60000;
const he = 200;
const We = "session ID already belongs to another conversation — open again to start with a new ID";
function JPr(e) {
    return `working directory no longer exists or is not accessible: ${e}`;
}
const ve = 5000;
const Ke = ve * 3;
const bt = 120000;
const ze = 120000;
const Tt = 300000;
const Je = {
    release: "2.1.213",
    commitMs: Date.UTC(2026, 6, 16, 18, 0, 5)
};
const Ct = {
    release: "2.1.287",
    commitMs: Date.UTC(2026, 8, 30, 14, 52, 7)
};
const tt = [
    "local_bash",
    "in_process_teammate",
    "dream",
    "auto_mode_scan",
    "local_memory_import"
];
const Dt = 3600000;
const je = 4096;
function QPr() {
    return (e, r, s)=>{
        let { cmd, prefixArgs } = uu({
            pinToCurrentBinary: true
        });
        let p = [
            cmd,
            ...prefixArgs,
            "--bg-pty-host",
            s.ptySock,
            String(s.cols),
            String(s.rows),
            "--",
            e,
            ...r
        ];
        let o = {
            cwd: s.cwd,
            env: s.env,
            detached: true,
            windowsHide: true,
            ...Al("agent"),
            ...O() !== "windows" && {
                argv0: "claude bg-pty-host"
            }
        };
        let hostProc;
        try {
            hostProc = Bun.spawn(p, {
                ...o,
                stdio: [
                    "ignore",
                    "ignore",
                    Bun.file(kk(s.ptySock))
                ]
            });
        } catch (error) {
            let f = v(error);
            if (f !== "ENOENT" && f !== "ENOSPC" && f !== "EACCES" && f !== "EROFS") {
                throw error;
            }
            t(`bg: ptyHost stderr breadcrumb open failed (${f}) at ${kk(s.ptySock)} \u2014 spawning with stderr discarded (crash diagnostics degraded): ${l(error)}`, {
                level: "warn"
            });
            let { cgroup, ...rest } = o;
            if (cgroup !== undefined) {
                t(`bg: retrying ptyHost spawn without tool cgroup placement (${cgroup})`, {
                    level: "warn"
                });
            }
            hostProc = Bun.spawn(p, {
                ...rest,
                stdio: [
                    "ignore",
                    "ignore",
                    "ignore"
                ]
            });
        }
        hostProc.unref();
        return ae(s.ptySock, hostProc.pid, {
            short: s.short,
            hostProc,
            auth: s.ptyAuth
        });
    };
}
function Ye(e, r, s, h, n, respawnFlags) {
    if (e.launch.mode === "exec") {
        return e.launch.args.map(AC);
    }
    if (r > 1 && s) {
        return XJ([
            "--resume",
            n ?? h,
            ...Brt(respawnFlags)
        ]);
    }
    if (r > 1 && h !== e.sessionId) {
        return XJ([
            "--session-id",
            h,
            ...Brt(respawnFlags)
        ]);
    }
    if (e.launch.mode === "resume") {
        return XJ([
            ...e.launch.fork ? [
                "--session-id",
                e.sessionId,
                "--fork-session"
            ] : [],
            "--resume",
            e.launch.transcriptPath ?? e.launch.sessionId,
            ...Brt(e.launch.flagArgs)
        ]);
    }
    return XJ(Brt(e.launch.args));
}
function qe(e, CLAUDE_JOB_DIR, CLAUDE_BG_AUTH_SNAPSHOT_PATH, CLAUDE_BG_RENDEZVOUS_SOCK, n) {
    let p = {
        ...process.env
    };
    te(p);
    if (e.env) {
        te(e.env);
    }
    let o = {
        ...p,
        ...CLAUDE_BG_AUTH_SNAPSHOT_PATH && {
            CLAUDE_BG_AUTH_SNAPSHOT_PATH
        },
        ...j() && k("tengu_hover_rest", false) && {
            CLAUDE_CODE_HOVER_REST: "1"
        },
        ...O() === "windows" && {
            CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT: "1"
        },
        ...e.env,
        CLAUDE_CODE_SESSION_KIND: "bg",
        CLAUDE_BG_BACKEND: "daemon",
        CLAUDE_BG_SOURCE: e.source,
        CLAUDE_JOB_DIR,
        CLAUDE_CODE_SESSION_NAME: ci(e.seed?.name || e.seed?.intent || e.short),
        CLAUDE_BG_RENDEZVOUS_SOCK,
        FORCE_COLOR: "3",
        COLORTERM: "truecolor",
        BROWSER: "true"
    };
    let u = Object.hasOwn(p, "PATH") ? "PATH" : Object.keys(p).find((f)=>f.toUpperCase() === "PATH");
    let g = e.env?.PATH || (u ? p[u] : undefined);
    for (let f of Object.keys(o)){
        if (f.toUpperCase() === "PATH") {
            delete o[f];
        }
    }
    if (g) {
        o[u ?? "PATH"] = g;
    }
    if (process.env.CLAUDE_CONFIG_DIR) {
        o.CLAUDE_CONFIG_DIR = process.env.CLAUDE_CONFIG_DIR;
    } else if (o.CLAUDE_CONFIG_DIR !== undefined && (!isAbsolute(o.CLAUDE_CONFIG_DIR) || o.CLAUDE_CONFIG_DIR.split(/[\\/]/).includes("..") || !qZ(o.CLAUDE_CONFIG_DIR))) {
        t(`bg spawn ${e.short}: dropped dispatch CLAUDE_CONFIG_DIR \u2014 not an absolute, dot-dot-free spelling of this daemon's config home`, {
            level: "warn"
        });
        delete o.CLAUDE_CONFIG_DIR;
    }
    for (let f of vve){
        if (!e.env?.[f]) {
            delete o[f];
        }
    }
    J9(o);
    hgt(o);
    UFo(o, p);
    if (!e.env?.CLAUDE_CODE_ENTRYPOINT) {
        O6(o);
    }
    if (e.isolation === "worktree") {
        o.CLAUDE_BG_ISOLATION = "worktree";
    }
    for (let f of le){
        if (!e.env?.[f]) {
            delete o[f];
        }
    }
    for (let f of Object.keys(o)){
        if (BWn.some((E)=>f.startsWith(E)) && !e.env?.[f]) {
            delete o[f];
        }
    }
    if (zMt(p) || VBe(e)) {
        for (let w of UF){
            delete o[w];
        }
        if (VBe(e) || Ne(p.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
            WMt(o, e.env);
        }
        let f = B8(p);
        if (f) {
            te(o, [
                f
            ]);
            delete o[f];
        }
        let E = e.env?.CLAUDE_CODE_HOST_CREDS_FILE ?? (VBe(e) ? p.CLAUDE_CODE_HOST_CREDS_FILE : undefined);
        if (E) {
            o.CLAUDE_CODE_HOST_CREDS_FILE = E;
        }
        for (let w of rUe){
            delete o[w];
        }
    } else {
        let f = new Set;
        let E = new Set;
        let w = new Set;
        let S = false;
        let y = false;
        for (let R of V3e){
            let L = R.selection === undefined || Ne(o[R.selection]);
            if (o[R.endpoint] === p[R.endpoint] && (!o[R.endpoint] || L) && R.companions.every((M)=>!$Wn.includes(M) || Ne(o[M]) === Ne(p[M]))) {
                if (o[R.endpoint]) {
                    for (let M of R.companions){
                        f.add(M);
                    }
                    S ||= re(p, R);
                }
                continue;
            }
            for (let M of [
                R.endpoint,
                ...R.companions
            ]){
                E.add(M);
                if (o[R.endpoint] && o[M] !== p[M]) {
                    w.add(M);
                }
            }
            if (R.endpoint === "ANTHROPIC_BASE_URL" && p.ANTHROPIC_BASE_URL) {
                delete o.ANTHROPIC_AUTH_TOKEN;
            } else {
                y ||= re(p, R);
            }
        }
        for (let R of E){
            if (!f.has(R) || w.has(R)) {
                delete o[R];
            }
        }
        if (y && !S) {
            delete o.ANTHROPIC_AUTH_TOKEN;
        }
    }
    if (n) {
        o.CLAUDE_BG_RV_AUTH = n.rvAuth;
        o.CLAUDE_BG_PTY_AUTH = n.ptyAuth;
    }
    if (CLAUDE_BG_AUTH_SNAPSHOT_PATH) {
        delete o.CLAUDE_CODE_OAUTH_TOKEN;
    }
    if (e.launch.mode === "exec") {
        let f = V3e.some((E)=>re(o, E));
        for (let E of Object.keys(o)){
            if (E.startsWith("CLAUDE_") && E !== "CLAUDE_JOB_DIR" && E !== "CLAUDE_CONFIG_DIR" && E !== "CLAUDE_BG_PTY_AUTH" || E.startsWith("OTEL_")) {
                delete o[E];
            }
        }
        delete o.BROWSER;
        if (f) {
            delete o.ANTHROPIC_AUTH_TOKEN;
        }
        for (let E of rUe){
            delete o[E];
        }
        o.CLAUDE_PTY_HOST_EXEC = "1";
    }
    return o;
}
function Xe(e, r) {
    let s = process.env[MT];
    if (r.launch.mode === "exec" || s === undefined) {
        delete e[MT];
    } else {
        e[MT] = s;
    }
}
async function we(short, r) {
    if (!r || O() !== "macos") {
        return;
    }
    let s = Uot(short);
    try {
        await mkdir(Fot(), {
            recursive: true,
            mode: 448
        });
        await writeFile(s, JSON.stringify(r), {
            mode: 384
        });
        return s;
    } catch (error) {
        t(`writeAuthSnapshot failed: ${l(error)}`, {
            level: "warn"
        });
        return;
    }
}
async function Ae(e, r) {
    if (O() === "windows") {
        return;
    }
    let s = Bot(e);
    try {
        await mkdir(Fot(), {
            recursive: true,
            mode: 448
        });
        await writeFile(s, JSON.stringify(r), {
            mode: 384
        });
        return s;
    } catch (error) {
        t(`writeSocketTokensFile failed: ${l(error)}`, {
            level: "warn"
        });
        return;
    }
}
var le = [
    ...xno,
    "CLAUDE_CODE_CLIENT_DATA_URL",
    "CLAUDE_CODE_REMOVE_PROMPT_STRINGS",
    ...iq,
    "CLAUDE_CODE_EXTRA_BODY",
    ...FF,
    ...$Wn,
    "ANTHROPIC_CUSTOM_HEADERS",
    ...q3e,
    "CLAUDE_CODE_HOST_GATEWAY_LINEAGE",
    "CLAUDE_CODE_HOST_CREDS_FILE"
];
var VBe = (e)=>Ne(e.env?.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST);
const min = (e)=>e.launch.mode !== "exec" && !VBe(e);
const Pt = new Map([
    "CLAUDE_CONFIG_DIR",
    ...vve,
    ...W6n,
    ...le,
    ...rUe,
    ...UF,
    ...jMt
].map((e)=>[
        e.toUpperCase(),
        e
    ]));
function te(e, r = []) {
    if (O() !== "windows") {
        return;
    }
    let s = new Map(r.map((h)=>[
            h.toUpperCase(),
            h
        ]));
    for (let h of Object.keys(e)){
        let n = h.toUpperCase();
        let p = Pt.get(n) ?? s.get(n);
        if (p === undefined || p === h) {
            continue;
        }
        if (e[p] === undefined) {
            e[p] = e[h];
        }
        delete e[h];
    }
}
function re(e, r) {
    return !!e[r.endpoint] && (r.endpoint === "ANTHROPIC_BASE_URL" || r.companions.some((s)=>$Wn.includes(s) && Ne(e[s])));
}
function ye(e) {
    let r = (e.inFlight?.kinds ?? []).filter((n)=>n !== "artifact_watch" || !(e.inFlight?.drainableMonitors ?? 0));
    let s = Ra(e) && r.length > 0 && r.every((n)=>tt.includes(n));
    let h = (e.inFlight?.tasks ?? 0) - (e.inFlight?.drainableMonitors ?? 0);
    return (e.inFlight?.queued ?? 0) > 0 || h > 0 && !s || r.includes("session_cron");
}
function It(e) {
    if (!e) {
        return null;
    }
    if (Ra(e)) {
        return "settled";
    }
    if (e.tempo === "active") {
        return "active";
    }
    if (ye(e)) {
        return "inflight";
    }
    return null;
}
function Qe(e, r) {
    let s = It(e);
    if (s === "settled" && r !== "missing-at-adopt") {
        if (e && ye(e)) {
            return "inflight";
        }
        return null;
    }
    return s;
}
function Ze(e) {
    if (e.kind === "retiring") {
        return `retiring:${e.reason}`;
    }
    if (e.kind === "retired") {
        return `retired:${e.outcome}`;
    }
    return e.kind;
}
function Ot(phase, r) {
    if (phase.kind === "retired") {
        return false;
    }
    switch(r.kind){
        case "spawning":
            return phase.kind === "upgrading" || phase.kind === "running";
        case "running":
            return phase.kind === "spawning";
        case "upgrading":
            return phase.kind === "running";
        case "retiring":
            return true;
        case "retired":
            return true;
    }
}
class tie {
    dispatch;
    spawnPty;
    getAuthSnapshot;
    via;
    storageV5;
    credentials;
    record;
    onStream = Oe();
    onState = Oe();
    onSettle = Oe();
    onRepaintDone = Oe();
    attachers = new Map;
    lastInputAttacher;
    pty;
    procStart;
    replPid = 0;
    replProcStart;
    ptyCols = 200;
    ptyRows = 50;
    decModes = INt();
    execTracker;
    execLastLine;
    offData;
    offExit;
    ring = [];
    ringBytes = 0;
    ringSpawnMark = 0;
    attempt = 0;
    lastSpawnAt = 0;
    fastCrashStreak = 0;
    lastExitCause;
    lastExitExternalStop = false;
    effectiveCwd;
    liveTranscriptPath;
    hostWokeAt;
    backoffTimer = null;
    pidPoll = null;
    rv;
    rvRejected = false;
    rvSockPath;
    ptySockPath;
    rvAuth = randomBytes(16).toString("hex");
    ptyAuth = randomBytes(16).toString("hex");
    authRekeyFired = false;
    authRekeyCount = 0;
    pendingAuthRekey;
    rosterExtras = {};
    unverifiedSock;
    phase = {
        kind: "spawning"
    };
    workerReady = false;
    sessionIdTakenLatch = false;
    firedInteractiveMarks = [];
    bootedViaResume = false;
    resizeDeferred = false;
    lastInputAt;
    downgradeRefusalLogged = false;
    deleteJobDirOnSettle = false;
    get shouldDeleteJobDir() {
        return this.deleteJobDirOnSettle;
    }
    adoptedAt;
    lastRvHeartbeat;
    stalledLogged = false;
    lastCheckPidAt = Date.now();
    replyChain = Promise.resolve();
    killOutcome = "killed";
    handoffKill = false;
    get isKilling() {
        return this.phase.kind === "retiring" && this.phase.reason === "reap";
    }
    get isHandoffKill() {
        return this.handoffKill;
    }
    get isRetiring() {
        return this.phase.kind === "retiring" && this.phase.reason === "grace";
    }
    get isUpgrading() {
        return this.phase.kind === "upgrading";
    }
    get isBooting() {
        return !this.record.outcome && (this.phase.kind === "upgrading" || !this.workerReady);
    }
    get isSpawnPending() {
        return this.phase.kind === "spawning";
    }
    get isReplyQueueOnly() {
        return this.dispatch.launch.mode !== "exec" && kt() && s4n(this.record.cliVersion, Ct, {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION);
    }
    replayInteractiveMarksTo(e) {
        let r = this.attachers.get(e);
        if (!r || r.caps?.imark !== true) {
            return;
        }
        for (let s of this.firedInteractiveMarks){
            r.deliver(Dur({
                ...s,
                nonce: r.imarkNonce
            }));
        }
    }
    get isVersionStale() {
        return !!this.record.cliVersion && this.record.cliVersion !== ({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }).VERSION;
    }
    get marksCapable() {
        if (this.isVersionStale) {
            return false;
        }
        return this.bootedViaResume || this.firedInteractiveMarks.length > 0;
    }
    get bootingForAttachMetrics() {
        return this.isBooting || this.marksCapable && this.firedInteractiveMarks.length === 0;
    }
    get isUnverified() {
        return this.unverifiedSock !== undefined;
    }
    getPhase() {
        return this.phase;
    }
    get isTransitioning() {
        return this.phase.kind !== "running" || !this.pty || this.record.pid === 0;
    }
    get isDetached() {
        return this.phase.kind === "retiring" && this.phase.reason === "stop";
    }
    transitionTo(e) {
        if (!Ot(this.phase, e)) {
            t(`[bg] illegal worker-phase transition ${Ze(this.phase)} \u2192 ${Ze(e)} for ${this.record.short}`, {
                level: "warn"
            });
            i("tengu_bg_phase_illegal", {});
            return false;
        }
        this.phase = e;
        return true;
    }
    shutdownWorker() {
        let e = this.rv?.send({
            type: "shutdown"
        }) ?? false;
        if (!e) {
            this.sigtermWorker();
        } else {
            setTimeout((r)=>{
                let r_phase = r.phase;
                if ((r_phase.kind === "upgrading" || r_phase.kind === "retiring" && r_phase.reason === "grace") && !r.record.outcome) {
                    r.sigtermWorker();
                }
            }, 5000, this).unref();
        }
        return e;
    }
    noteDowngradeRefused(e) {
        if (this.downgradeRefusalLogged || !this.record.cliVersion) {
            return;
        }
        this.downgradeRefusalLogged = true;
        i("tengu_bg_respawn_downgrade_refused", {
            short: HA(this.dispatch.short),
            trigger: d(e),
            worker_cli_version: Ci(this.record.cliVersion)
        });
    }
    async respawnIfIdleStale(e, r = "sweep") {
        if (this.dispatch.launch.mode === "exec") {
            return {
                respawned: false,
                reason: "not-stale"
            };
        }
        if (this.isTransitioning) {
            return {
                respawned: false,
                reason: "in-progress"
            };
        }
        if (this.record.outcome) {
            return {
                respawned: false,
                reason: "no-state"
            };
        }
        if (this.record.cliVersion && tmt(this.record.cliVersion, {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION)) {
            this.noteDowngradeRefused(r);
            return {
                respawned: false,
                reason: "not-stale"
            };
        }
        if (iXe(this.record.cliVersion, {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION)) {
            return {
                respawned: false,
                reason: "not-stale"
            };
        }
        if (this.attachers.size > 0) {
            return {
                respawned: false,
                reason: "attached"
            };
        }
        if (!this.isVersionStale) {
            return {
                respawned: false,
                reason: "not-stale"
            };
        }
        if (r !== "attach" && this.lastInputAt && Date.now() - this.lastInputAt < Dt) {
            return {
                respawned: false,
                reason: "busy"
            };
        }
        let s = Date.now();
        let h = await ro(Yr(this.dispatch.short), this.storageV5);
        if (this.isTransitioning) {
            return {
                respawned: false,
                reason: "in-progress"
            };
        }
        if (this.record.outcome) {
            return {
                respawned: false,
                reason: "no-state"
            };
        }
        if (this.attachers.size > 0) {
            return {
                respawned: false,
                reason: "attached"
            };
        }
        if (this.lastInputAt && this.lastInputAt >= s) {
            return {
                respawned: false,
                reason: "busy"
            };
        }
        if (!h) {
            return {
                respawned: false,
                reason: "no-state"
            };
        }
        if (r !== "attach" && !Ra(h) && this.adoptedAt && Date.now() - this.adoptedAt < ze) {
            return {
                respawned: false,
                reason: "busy"
            };
        }
        if (Ra(h) && r === "sweep" && !e?.has(this.dispatch.short)) {
            return {
                respawned: false,
                reason: "settled"
            };
        }
        if (!Ra(h) && h.tempo !== "idle" && !(this.isParkedIdleFork(h) && h.inFlight !== undefined)) {
            return {
                respawned: false,
                reason: "busy"
            };
        }
        if (ye(h)) {
            return {
                respawned: false,
                reason: "inflight"
            };
        }
        if (!this.transitionTo({
            kind: "upgrading"
        })) {
            return {
                respawned: false,
                reason: "in-progress"
            };
        }
        this.onState.emit({
            pid: this.record.pid
        });
        i("tengu_bg_respawn_stale", {
            short: HA(this.dispatch.short),
            rvSent: this.shutdownWorker(),
            trigger: d(r),
            worker_cli_version: Ci(this.record.cliVersion)
        });
        return {
            respawned: true
        };
    }
    isParkedIdleFork(e) {
        return (s4n(this.record.cliVersion, Je, {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION) || e.inFlight?.drainableMonitors !== undefined) && e.state === "working" && e.tempo === "blocked" && e.needs === yb && e.interactiveLineage === true;
    }
    async retireIfSettled(e, r, s = e, { shedMonitoringOnly = false } = {}) {
        if (this.isTransitioning) {
            return {
                retired: false,
                reason: "in-progress"
            };
        }
        if (this.record.outcome) {
            return {
                retired: false,
                reason: "no-state"
            };
        }
        if (this.attachers.size > 0) {
            return {
                retired: false,
                reason: "attached"
            };
        }
        if (VBe(this.dispatch)) {
            return {
                retired: false,
                reason: "host-managed"
            };
        }
        if (r?.has(this.dispatch.short)) {
            return {
                retired: false,
                reason: "pinned"
            };
        }
        if (this.adoptedAt && Date.now() - this.adoptedAt < ze) {
            return {
                retired: false,
                reason: "recent-adopt"
            };
        }
        if (this.lastInputAt && Date.now() - this.lastInputAt < e) {
            return {
                retired: false,
                reason: "recent-input"
            };
        }
        let n = await ro(Yr(this.dispatch.short), this.storageV5);
        if (this.isTransitioning || this.attachers.size > 0) {
            return {
                retired: false,
                reason: "in-progress"
            };
        }
        if (this.lastInputAt && Date.now() - this.lastInputAt < e) {
            return {
                retired: false,
                reason: "recent-input"
            };
        }
        if (!n) {
            if (this.dispatch.source === "spare" && Date.now() - this.dispatch.createdAt > e) {
                if (!this.transitionTo({
                    kind: "retiring",
                    reason: "grace"
                })) {
                    return {
                        retired: false,
                        reason: "in-progress"
                    };
                }
                let D = Date.now() - this.dispatch.createdAt;
                i("tengu_bg_retired", {
                    short: HA(this.dispatch.short),
                    rvSent: this.shutdownWorker(),
                    settledForMs: D,
                    state: b("stale-spare"),
                    cause: b("stale-spare"),
                    worker_cli_version: Ci(this.record.cliVersion)
                });
                return {
                    retired: true,
                    cause: "stale-spare",
                    idleMs: D
                };
            }
            return {
                retired: false,
                reason: "no-state"
            };
        }
        if (this.dispatch.source !== "shell" && !n.name && !n.intent && !n.worktreePath && n.template === "bg" && n.state === "working" && n.tempo === "blocked" && !((n.inFlight?.tasks ?? 0) > 0)) {
            let D = Date.parse(n.createdAt);
            let T = Date.parse(n.updatedAt);
            let C = Date.now() - (T > D ? T : D);
            if (C < Tt) {
                return {
                    retired: false,
                    reason: "empty-idle-grace"
                };
            }
            if (!this.transitionTo({
                kind: "retiring",
                reason: "grace"
            })) {
                return {
                    retired: false,
                    reason: "in-progress"
                };
            }
            this.deleteJobDirOnSettle = true;
            i("tengu_bg_retired", {
                short: HA(this.dispatch.short),
                rvSent: this.shutdownWorker(),
                settledForMs: C,
                state: b("empty-idle"),
                cause: b("empty-idle"),
                worker_cli_version: Ci(this.record.cliVersion)
            });
            return {
                retired: true,
                cause: "empty-idle",
                idleMs: C
            };
        }
        let p = this.isParkedIdleFork(n);
        let o = Ra(n) || this.dispatch.launch.mode !== "exec" && (n.tempo === "idle" || n.state === "blocked" && n.tempo === "blocked" || p);
        let u = Date.parse(n.updatedAt);
        let g = n.tempo === "blocked" && n.state !== "blocked" && n.needs !== undefined && n.needs !== yb;
        let f = this.isVersionStale && !(this.record.cliVersion && tmt(this.record.cliVersion, {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION)) && !iXe(this.record.cliVersion, {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION) && this.dispatch.launch.mode !== "exec" && n.tempo !== "active" && !g && !n.routine && (n.inFlight?.tasks ?? 0) - (n.inFlight?.drainableMonitors ?? 0) === 0 && (n.inFlight?.queued ?? 0) === 0 && !(n.inFlight?.kinds ?? []).includes("session_cron") && u < Date.now() - ITt;
        if (!o && !f) {
            return {
                retired: false,
                reason: "not-settled"
            };
        }
        let E = shedMonitoringOnly || f ? n.inFlight?.drainableMonitors ?? 0 : 0;
        let w = (n.inFlight?.kinds ?? []).filter((D)=>D !== "artifact_watch" || E === 0);
        let detritusOnly = Ra(n) && w.length > 0 && w.every((D)=>tt.includes(D));
        let y = n.interactiveLineage === true && s4n(this.record.cliVersion, Je, {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION);
        let R = f && !y ? 0 : 1;
        if ((n.inFlight?.queued ?? R) > 0 || (n.inFlight?.tasks ?? R) - E > 0 && !detritusOnly) {
            return {
                retired: false,
                reason: "inflight"
            };
        }
        if (w.includes("session_cron")) {
            return {
                retired: false,
                reason: "session-cron"
            };
        }
        if (n.routine) {
            return {
                retired: false,
                reason: "routine"
            };
        }
        let L = n.bridgeSessionId ? Math.max(e, s) : e;
        let I = n.updatedAt && Date.now() - Date.parse(n.updatedAt);
        if (!I || I < L) {
            return {
                retired: false,
                reason: "grace"
            };
        }
        if (!this.transitionTo({
            kind: "retiring",
            reason: "grace"
        })) {
            return {
                retired: false,
                reason: "in-progress"
            };
        }
        let M = n.inFlight?.tasks !== undefined && n.inFlight.queued !== undefined;
        let cause = !o || !M || !shedMonitoringOnly && E > 0 ? "abandoned-stale" : Ra(n) ? "settled" : "idle-prompt";
        i("tengu_bg_retired", {
            short: HA(this.dispatch.short),
            rvSent: this.shutdownWorker(),
            settledForMs: I,
            bridged: !!n.bridgeSessionId,
            detritusOnly,
            state: CG(n.state),
            cause: d(cause),
            worker_cli_version: Ci(this.record.cliVersion)
        });
        return {
            retired: true,
            cause,
            idleMs: I
        };
    }
    sigtermWorker() {
        try {
            this.pty?.kill("SIGTERM");
        } catch  {}
    }
    onPtyAuthRequired() {
        let mode = this.dispatch.launch.mode;
        i("tengu_bg_pty_auth_mismatch", {
            mode: d(mode)
        });
        if (mode === "exec") {
            t(`[bg] exec worker ${this.dispatch.short}: ptyHost rejected auth token \u2014 roster ptyAuth poisoned; input is dead until re-dispatch (exec workers are never auto-respawned)`, {
                level: "warn"
            });
            return;
        }
        this.rekeyForAuthMismatch("pty-auth-required");
    }
    rekeyForAuthMismatch(e) {
        if (this.authRekeyFired || this.authRekeyCount >= At || this.phase.kind !== "running" || this.record.outcome || this.dispatch.launch.mode === "exec") {
            t(`[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 not re-keying ` + `(via=${this.via} phase=${this.phase.kind} mode=${this.dispatch.launch.mode} fired=${this.authRekeyFired} count=${this.authRekeyCount})`, {
                level: "warn"
            });
            return;
        }
        this.authRekeyFired = true;
        ro(Yr(this.dispatch.short), this.storageV5).then((r)=>{
            let s = Qe(r, e);
            if (s === "settled") {
                this.authRekeyFired = false;
                i("tengu_bg_adopt_token_lost_respawn", {
                    source: d(e),
                    deferred: false,
                    skipped: b("settled")
                });
                t(`[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 worker already settled; leaving to retireIfSettled`, {
                    level: "warn"
                });
                return;
            }
            if (s !== null) {
                i("tengu_bg_adopt_token_lost_respawn", {
                    source: d(e),
                    deferred: true,
                    reason: d(s)
                });
                t(`${`[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 ` + (s === "active" ? "worker is mid-turn" : "worker has non-resumable in-flight work")}; deferring re-key respawn until safe`, {
                    level: "warn"
                });
                this.pendingAuthRekey = e;
                return;
            }
            i("tengu_bg_adopt_token_lost_respawn", {
                source: d(e),
                deferred: false
            });
            t(`[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 respawning to re-key (--resume preserves the session)`, {
                level: "warn"
            });
            this.fireAuthRekey();
        });
    }
    fireAuthRekey() {
        this.pendingAuthRekey = undefined;
        if (this.phase.kind !== "running" || this.record.outcome) {
            return;
        }
        if (!this.transitionTo({
            kind: "upgrading"
        })) {
            return;
        }
        this.authRekeyCount++;
        this.onState.emit({
            pid: this.record.pid
        });
        this.sigtermWorker();
    }
    constructor(e, r, s, h, n, p, o){
        this.dispatch = e;
        this.spawnPty = r;
        this.getAuthSnapshot = s;
        this.via = h;
        this.storageV5 = p;
        this.credentials = o;
        this.record = {
            short: e.short,
            nonce: e.nonce,
            sessionId: e.sessionId,
            pid: 0,
            attempt: 0,
            startedAt: Date.now(),
            createdAt: e.createdAt,
            cwd: e.cwd,
            backend: "daemon",
            tempo: "active",
            state: "starting",
            detail: "",
            intent: e.seed?.intent ?? "",
            name: e.seed?.name,
            agent: e.agent,
            routine: e.routine,
            worktreePath: e.worktree?.path,
            cliVersion: ({
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }).VERSION,
            source: e.source,
            ...n
        };
        if (e.cols) {
            this.ptyCols = e.cols;
        }
        if (e.rows) {
            this.ptyRows = e.rows;
        }
    }
    static spawn(e, r, s, h, n, p) {
        let o = new tie(e, r ?? QPr(), s, "cold", undefined, n, p);
        if (h?.afterUpgrade) {
            o.attempt = 1;
            o.buildBridgeReattachEnvFromState().then((u)=>o.doSpawn(u, true)).catch(c);
            return o;
        }
        o.doSpawn(e.reattachEnv).catch(c);
        return o;
    }
    static claim(e, r) {
        let s = new tie(e, r.spawnPty, r.getAuthSnapshot, "spare", {
            pid: r.pid,
            attempt: 1,
            state: "running",
            cliVersion: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION
        }, r.storageV5, r.credentials);
        s.attempt = 1;
        s.bootedViaResume = e.launch.mode !== "exec" && (e.launch.restoresTranscript ?? e.launch.mode === "resume");
        s.ptySockPath = r.ptySockPath;
        s.rvSockPath = Z5t(e.short);
        if (r.ptyAuth) {
            s.ptyAuth = r.ptyAuth;
        }
        s.wirePty(ae(r.ptySockPath, r.pid, {
            short: e.short,
            auth: s.ptyAuth
        }));
        s.resize(e.cols ?? 200, e.rows ?? 50);
        s.connectRv();
        Fl(r.pid, {
            skipCache: true
        }).then((h)=>{
            if (s.record.pid !== r.pid || s.isDetached || s.record.outcome) {
                return;
            }
            if (h) {
                s.procStart = h;
            }
            s.patch({
                pid: r.pid
            });
        });
        return s;
    }
    socketAuth() {
        this.rvAuth ??= randomBytes(16).toString("hex");
        this.ptyAuth ??= randomBytes(16).toString("hex");
        return {
            rvAuth: this.rvAuth,
            ptyAuth: this.ptyAuth
        };
    }
    static buildClaimFrame(e, r, s) {
        let h = Yr(e.short);
        let n = qe(e, h, r, Z5t(e.short), s);
        delete n.CLAUDE_BG_PTY_AUTH;
        nNr(n, e.reattachEnv);
        J9(n);
        Xe(n, e);
        delete n.CLAUDE_PTY_HOST_NO_STABLE_PATH;
        let argv = Ye(e, 1, false, e.sessionId, undefined, e.respawnFlags);
        return {
            env: n,
            argv
        };
    }
    static async adopt(e, r, s, h, n, p) {
        if (r.dispatch.env) {
            r.dispatch.env = Dje(r.dispatch.env, BFo);
        }
        delete r.dispatch.reattachEnv;
        if (!_a(r.pid)) {
            return null;
        }
        let o = await Fl(r.pid, {
            skipCache: true
        });
        if (o && r.procStart !== o) {
            return null;
        }
        let u = new tie(r.dispatch, s, h, "adopted", {
            pid: r.pid,
            attempt: r.attempt,
            startedAt: r.startedAt,
            messagingSock: r.messagingSock,
            state: "adopted",
            detail: "adopted from previous supervisor",
            cliVersion: r.cliVersion,
            ...r.ptySock ? {} : {
                legacy: true
            }
        }, n, p);
        u.attempt = r.attempt;
        u.procStart = r.procStart;
        u.rosterExtras = Lur(r);
        u.workerReady = true;
        u.adoptedAt = Date.now();
        u.rvSockPath = r.rendezvousSock;
        u.ptySockPath = r.ptySock;
        u.rvAuth = r.rvAuth;
        u.ptyAuth = r.ptyAuth;
        if (u.dispatch.launch.mode === "exec") {
            u.execTracker = ke(Yr(u.dispatch.short), u.storageV5);
            u.workerReady = true;
        }
        if (r.ptySock) {
            u.wirePty(ae(r.ptySock, r.pid, {
                procStart: u.procStart,
                short: u.dispatch.short,
                auth: u.ptyAuth,
                onAuthRequired: ()=>u.onPtyAuthRequired()
            }));
            u.ptyCols = 0;
            u.seedFocus(false);
        }
        if (r.decModes) {
            u.decModes.seed(r.decModes);
        }
        if (r.firedInteractiveMarks) {
            u.firedInteractiveMarks = r.firedInteractiveMarks.slice(0, 2);
        }
        u.replPid = r.replPid ?? 0;
        u.replProcStart = r.replProcStart;
        u.bootedViaResume = r.dispatch.launch.mode !== "exec" && (r.dispatch.launch.restoresTranscript ?? r.dispatch.launch.mode === "resume");
        u.connectRv();
        if (r.pendingRespawn === "upgrade" && !(r.cliVersion && tmt(r.cliVersion, {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION)) && !iXe(r.cliVersion, {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION)) {
            u.transitionTo({
                kind: "upgrading"
            });
            setTimeout((g)=>{
                if (g.phase.kind === "upgrading" && !g.record.outcome) {
                    g.sigtermWorker();
                }
            }, 5000, u).unref();
        }
        if (u.dispatch.launch.mode !== "exec" && r.ptySock && r.cliVersion && (r.rvAuth === undefined || r.ptyAuth === undefined)) {
            t(`[bg] adopt ${u.dispatch.short}: roster rvAuth/ptyAuth missing for token-era worker \u2014 schema-skewed daemon stripped them`, {
                level: "warn"
            });
            u.rekeyForAuthMismatch("missing-at-adopt");
            return u;
        }
        return u;
    }
    static unverified(e, r, s, h) {
        let n = new tie(r.dispatch, undefined, undefined, "adopted", {
            pid: r.pid,
            attempt: r.attempt,
            startedAt: r.startedAt,
            messagingSock: r.messagingSock,
            state: "adopted",
            detail: "adopted (pid unverifiable; tracking via pty.sock)",
            cliVersion: r.cliVersion
        }, s, h);
        n.attempt = r.attempt;
        n.procStart = r.procStart;
        n.rosterExtras = Lur(r);
        if (r.firedInteractiveMarks) {
            n.firedInteractiveMarks = r.firedInteractiveMarks.slice(0, 2);
        }
        n.replPid = r.replPid ?? 0;
        n.replProcStart = r.replProcStart;
        n.bootedViaResume = r.dispatch.launch.mode !== "exec" && (r.dispatch.launch.restoresTranscript ?? r.dispatch.launch.mode === "resume");
        n.rvSockPath = r.rendezvousSock;
        n.ptySockPath = r.ptySock;
        n.rvAuth = r.rvAuth;
        n.ptyAuth = r.ptyAuth;
        n.unverifiedSock = r.ptySock;
        n.lastInputAt = Date.now();
        n.pidPoll = setInterval((p)=>{
            if (p.record.outcome || !p.unverifiedSock) {
                return;
            }
            gcn(p.unverifiedSock).then((o)=>{
                if (o || p.record.outcome || p.phase.kind !== "spawning") {
                    return;
                }
                p.settle("crashed");
            });
        }, ve, n);
        n.pidPoll.unref();
        i("tengu_bg_adopt_unverified", {
            short: HA(e)
        });
        return n;
    }
    tail(e) {
        if (e > 0) {
            return this.ring.slice(-e);
        }
        return [];
    }
    ringSnapshot() {
        return this.ring;
    }
    get sessionIdTaken() {
        return this.sessionIdTakenLatch;
    }
    preInitErrorTail() {
        let e = un(this.ring.slice(this.ringSpawnMark).join("")).replace(/\s+/g, " ").trim();
        if (!e) {
            return;
        }
        if (e.length > he) {
            return `\u2026${e.slice(-he)}`;
        }
        return e;
    }
    decModeSnapshot() {
        return this.decModes.snapshot();
    }
    write(e) {
        this.lastInputAt = Date.now();
        this.pty?.write(e);
    }
    noteActivity() {
        this.lastInputAt = Date.now();
    }
    shiftGraceClocksForward(e) {
        if (e <= 0) {
            return;
        }
        this.hostWokeAt = Date.now();
        if (this.adoptedAt !== undefined) {
            this.adoptedAt += e;
        }
        if (this.lastInputAt !== undefined) {
            this.lastInputAt += e;
        }
    }
    seedFocus(e) {
        if (this.dispatch.launch.mode === "exec") {
            return;
        }
        this.pty?.write(e ? QHt : ZHt);
    }
    resize(e, r) {
        this.ptyCols = e;
        this.ptyRows = r;
        if (O() === "windows" && !this.workerReady) {
            this.resizeDeferred = true;
            return;
        }
        try {
            this.pty?.resize(e, r);
        } catch  {}
    }
    signalPtyPgrp() {
        if (O() === "windows" || !this.record.pid) {
            return;
        }
        setTimeout((e)=>{
            try {
                process.kill(-e, "SIGWINCH");
            } catch  {}
        }, 15, this.record.pid);
    }
    resizeForRepaint(e, r) {
        if (e !== this.ptyCols || r !== this.ptyRows) {
            this.resize(e, r);
            this.signalPtyPgrp();
            this.rv?.send({
                type: "repaint"
            });
            return ()=>{};
        }
        let s = this.rv?.send({
            type: "repaint"
        }) === true;
        let h = ()=>{};
        let n = setTimeout((p, o)=>{
            h();
            if (this.ptyCols !== p || this.ptyRows !== o) {
                return;
            }
            let u = Math.max(2, p - 1);
            this.resize(u, o);
            this.signalPtyPgrp();
            setTimeout((g, f, E)=>{
                if (this.ptyCols === E && this.ptyRows === f) {
                    this.resize(g, f);
                    this.signalPtyPgrp();
                }
            }, 30, p, o, u);
        }, s ? 50 : 0, e, r);
        if (s) {
            h = this.onRepaintDone.subscribe(()=>{
                h();
                clearTimeout(n);
            });
        }
        return ()=>{
            h();
            clearTimeout(n);
        };
    }
    rosterEntry() {
        return {
            ...this.rosterExtras,
            pid: this.record.pid,
            procStart: this.procStart,
            sessionId: this.record.sessionId,
            rendezvousSock: this.rvSockPath ?? Z5t(this.dispatch.short),
            ptySock: this.record.legacy ? undefined : this.ptySockPath ?? kE(this.dispatch.short),
            messagingSock: this.record.messagingSock,
            cliVersion: this.record.cliVersion,
            startedAt: this.record.startedAt,
            attempt: this.attempt,
            cwd: this.dispatch.cwd,
            worktreePath: this.dispatch.worktree?.path,
            dispatch: this.cappedDispatch(),
            pendingRespawn: this.phase.kind === "upgrading" ? "upgrade" : undefined,
            decModes: this.decModes.snapshot(),
            firedInteractiveMarks: this.firedInteractiveMarks.length > 0 ? this.firedInteractiveMarks.slice(0, 2) : undefined,
            rvAuth: this.rvAuth,
            ptyAuth: this.ptyAuth,
            replPid: this.replPid > 1 ? this.replPid : undefined,
            replProcStart: this.replPid > 1 ? this.replProcStart : undefined
        };
    }
    cappedDispatch() {
        return JSON.parse(JSON.stringify(this.dispatch, (e, r)=>{
            let s = e.toUpperCase();
            if (e === "reattachEnv" || e === "attachStallRespawns" || z6n.includes(s === "PATH" ? e : s)) {
                return;
            }
            if (typeof r === "string" && r.length > je) {
                return r.slice(0, je);
            }
            return r;
        }));
    }
    async reply(text, { nextTurn = false } = {}) {
        this.lastInputAt = Date.now();
        this.lastInputAttacher = undefined;
        if (this.isReplyQueueOnly) {
            let p;
            if (this.rvRejected) {
                p = "the worker rejected the rendezvous token";
            } else if (!this.rv) {
                p = "no rendezvous client";
            } else if (!this.rv.send({
                type: "reply",
                text,
                ...nextTurn && {
                    nextTurn
                }
            })) {
                p = "the rendezvous is not connected";
            }
            if (p) {
                t(`[bg] ${this.record.short}: reply refused: ${p}`);
            }
            return !p;
        }
        let s = await ro(Yr(this.dispatch.short), this.storageV5);
        let n = s?.tempo === "blocked" || await this.isReplWaiting() || this.record.tempo === "blocked";
        if ((!s || n || nextTurn) && this.rv?.send({
            type: "reply",
            text,
            ...nextTurn && {
                nextTurn
            }
        })) {
            return true;
        }
        if (nextTurn || n && this.dispatch.launch.mode !== "exec") {
            return false;
        }
        if (this.pty) {
            let p = this.dispatch.launch.mode !== "exec";
            this.replyChain = this.replyChain.then(()=>new Promise((resolve)=>{
                    this.pty?.write(p ? `\x1B[200~${text}\x1B[201~` : text);
                    setTimeout((u)=>{
                        this.pty?.write("\r");
                        u();
                    }, 10, resolve);
                }));
            return true;
        }
        return this.rv?.send({
            type: "reply",
            text
        }) ?? false;
    }
    async isReplWaiting() {
        if (this.replPid <= 1 || this.dispatch.launch.mode === "exec") {
            return false;
        }
        try {
            let { liveStatusOfJob } = await import("/$bunfs/root/chunk-p30zpwzv.js");
            return await liveStatusOfJob(this.replPid, this.dispatch.short) === "waiting";
        } catch (error) {
            t(`[bg] ${this.dispatch.short}: live status unreadable (${v(error) ?? l(error)}), treating as waiting`);
            return true;
        }
    }
    sendAttacherCaps(caps) {
        return this.rv?.send({
            type: "attacher-caps",
            caps
        }) ?? false;
    }
    kill(e = "SIGTERM", r = "killed", s) {
        if (this.phase.kind === "retired") {
            return;
        }
        this.killOutcome = r === "failed" ? "failed" : "killed";
        this.handoffKill = this.handoffKill || r === "handoff";
        if (s) {
            this.patch({
                detail: s
            });
        }
        this.transitionTo({
            kind: "retiring",
            reason: "reap"
        });
        if (this.backoffTimer) {
            clearTimeout(this.backoffTimer);
            this.backoffTimer = null;
        }
        if (this.unverifiedSock) {
            j1e(this.unverifiedSock, this.storageV5).finally(()=>this.settle(this.killOutcome));
            return;
        }
        if (this.pty) {
            try {
                this.pty.kill(e);
            } catch  {}
        } else if (this.record.pid && !this.pidRecycled()) {
            try {
                process.kill(-this.record.pid, e);
            } catch  {
                try {
                    process.kill(this.record.pid, e);
                } catch  {}
            }
        }
        if (!this.pty) {
            this.settle(this.killOutcome);
        }
    }
    stop() {
        if (this.phase.kind === "retiring" && this.phase.reason === "reap") {
            this.settle(this.killOutcome);
        } else if (this.phase.kind === "retiring" && this.phase.reason === "grace") {
            this.settle("done");
        } else if (this.phase.kind !== "retired") {
            this.transitionTo({
                kind: "retiring",
                reason: "stop"
            });
        }
        if (this.backoffTimer) {
            clearTimeout(this.backoffTimer);
            this.backoffTimer = null;
        }
        this.clearLiveness();
        this.offData?.dispose();
        this.offExit?.dispose();
        this.execTracker?.dispose();
        this.execTracker = undefined;
        this.pty?.dispose();
        this.pty = undefined;
    }
    async doSpawn(e, r = false) {
        this.attempt++;
        this.authRekeyFired = false;
        this.pendingAuthRekey = undefined;
        this.workerReady = false;
        this.firedInteractiveMarks = [];
        if (this.attempt > 1) {
            this.liveTranscriptPath = null;
        }
        this.resizeDeferred = false;
        this.ringSpawnMark = this.ring.length;
        this.lastSpawnAt = Date.now();
        this.lastExitExternalStop = false;
        let dispatch = this.dispatch;
        let h = Yr(dispatch.short);
        await VIe(dispatch.short, this.storageV5).catch(()=>{});
        let n = tf();
        if (n) {
            i("tengu_bg_launcher_worker_refused", {
                attempt: this.attempt
            });
            m("agent_launcher", "worker_refused");
            this.patch({
                state: "crashed",
                detail: n
            });
            let T = this.dimNotice(n);
            this.pushRing(T);
            this.onStream.emit(T);
            return this.settle("crashed");
        }
        let p = min(dispatch) ? await we(dispatch.short, this.getAuthSnapshot?.()) : undefined;
        let o = await Ae(dispatch.short, dispatch.launch.mode === "exec" ? {
            ptyAuth: this.socketAuth().ptyAuth
        } : this.socketAuth());
        try {
            await Hds(dirname(kk(this.ptySockPath ?? kE(dispatch.short))));
        } catch (error) {
            if (this.credentials) {
                await Promise.all([
                    o ? this.credentials.discardSpentCredentialFile(o).catch(()=>{}) : undefined,
                    p ? this.credentials.discardSpentCredentialFile(p).catch(()=>{}) : undefined
                ]);
            } else {
                await Promise.all([
                    o ? unlink(o).catch(()=>{}) : undefined,
                    p ? unlink(p).catch(()=>{}) : undefined
                ]);
            }
            if (this.record.outcome) {
                return;
            }
            if (v(error) === jfr) {
                let C = `worker socket directory is not owned by this user \u2014 ${l(error)}`;
                this.patch({
                    state: "crashed",
                    detail: C
                });
                let H = this.dimNotice(C);
                this.pushRing(H);
                this.onStream.emit(H);
                return this.settle("crashed");
            }
            return this.scheduleRespawn(l(error));
        }
        await unlink(kk(this.ptySockPath ?? kE(dispatch.short))).catch(()=>{});
        let u = dispatch.launch.mode === "resume" ? dispatch.launch.sessionId : undefined;
        let g = false;
        let f = false;
        let s_sessionId = dispatch.sessionId;
        let w;
        let { respawnFlags, cwd } = dispatch;
        let R = false;
        if (this.attempt > 1) {
            let T = await ro(h, this.storageV5);
            s_sessionId = T?.resumeSessionId ?? dispatch.sessionId;
            respawnFlags = T?.respawnFlags ?? dispatch.respawnFlags;
            cwd = T?.cwd ?? dispatch.cwd;
            R = T?.interactiveLineage === true;
            let C = pv(uW(this.storageV5));
            let H = await Ase(s_sessionId, cwd, T?.linkScanPath, undefined, C);
            g = H.hasMessages;
            if (g) {
                w = H.path;
                this.liveTranscriptPath = H.path;
            }
            let G = u !== undefined && cPe(u);
            f = !g && u !== undefined && !(await Ase(G ? basename(u, ".jsonl") : u, cwd, G ? u : undefined, undefined, C)).hasMessages;
            if (!g) {
                await KUe(H.path, C);
            }
        }
        this.effectiveCwd = cwd;
        if (this.phase.kind === "retiring" || this.phase.kind === "retired" || this.record.outcome) {
            if (o) {
                if (this.credentials) {
                    this.credentials.discardSpentCredentialFile(o).catch(()=>{});
                } else {
                    unlink(o).catch(()=>{});
                }
            }
            return;
        }
        if (f) {
            this.patch({
                state: "crashed",
                detail: `source session ${u} not found`
            });
            return this.settle("crashed");
        }
        if (!this.spawnPty) {
            this.patch({
                state: "crashed",
                detail: "Bun.Terminal unavailable (running under Node?)"
            });
            i("tengu_bg_pty_unavailable", {
                short: HA(this.dispatch.short)
            });
            return this.settle("crashed");
        }
        let L = Ye(dispatch, this.attempt, g, s_sessionId, w, respawnFlags);
        this.bootedViaResume = (dispatch.launch.mode === "prompt" || dispatch.launch.mode === "resume") && (this.attempt === 1 || !g && s_sessionId === dispatch.sessionId) ? dispatch.launch.restoresTranscript ?? L.includes("--resume") : L.includes("--resume");
        let I = qe(dispatch, h, p, this.rvSockPath ?? Z5t(dispatch.short), this.socketAuth());
        if (this.attempt > 1 && g && !r) {
            I.CLAUDE_CODE_RESUME_INTERRUPTED_TURN = "1";
            if ($e()) {
                I.CLAUDE_CODE_RESUME_PROMPT ??= Et;
                if (R) {
                    I.CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS ??= String(wt);
                }
            }
        }
        if (this.attempt > 1 && !g && s_sessionId !== dispatch.sessionId) {
            I.CLAUDE_BG_POST_CLEAR_RESPAWN = "1";
        }
        nNr(I, e);
        if (o) {
            delete I.CLAUDE_BG_RV_AUTH;
            delete I.CLAUDE_BG_PTY_AUTH;
            I.CLAUDE_BG_SOCKET_TOKENS_PATH = o;
        }
        J9(I);
        Xe(I, dispatch);
        if (O() === "macos" && oLr() && vt()) {
            I.CLAUDE_PTY_HOST_NO_STABLE_PATH = "1";
        } else {
            delete I.CLAUDE_PTY_HOST_NO_STABLE_PATH;
        }
        delete I.CLAUDE_CODE_DISABLE_BG_STABLE_PATH;
        let M = this.ptyCols || (dispatch.cols ?? 200);
        let U = this.ptyRows || (dispatch.rows ?? 50);
        let D;
        try {
            let { cmd, prefixArgs } = dispatch.launch.mode === "exec" ? {
                cmd: AC(dispatch.launch.cmd),
                prefixArgs: []
            } : uu({
                pinToCurrentBinary: true
            });
            D = this.spawnPty(cmd, [
                ...prefixArgs,
                ...L
            ], {
                cols: M,
                rows: U,
                cwd,
                env: I,
                ptySock: this.ptySockPath ?? kE(dispatch.short),
                short: dispatch.short,
                ptyAuth: this.ptyAuth
            });
        } catch (error) {
            let C = v(error);
            let H = $p()[0];
            if (z(error)) {
                let G = await access(cwd).then(()=>true, ()=>false);
                if (this.record.outcome) {
                    return;
                }
                if (!G) {
                    return this.settleCwdGone("cold", cwd);
                }
                let W = H ? `launcher \`${H}\` was deleted or moved (ENOENT) \u2014 fix CLAUDE_CODE_PROCESS_WRAPPER, then run your command again` : dispatch.launch.mode === "exec" ? `${dispatch.launch.cmd}: command not found` : "daemon binary was deleted (upgrade in progress) — run your command again to use the new version";
                if (H) {
                    i("tengu_bg_launcher_worker_refused", {
                        attempt: this.attempt
                    });
                    m("agent_launcher", "worker_launcher_enoent");
                } else {
                    i("tengu_bg_spawn_binary_gone", {
                        short: HA(this.dispatch.short),
                        attempt: this.attempt
                    });
                }
                this.patch({
                    state: "crashed",
                    detail: W
                });
                let F = this.dimNotice(W);
                this.pushRing(F);
                this.onStream.emit(F);
                return this.settle("crashed");
            }
            if (H && (C === "EACCES" || C === "EPERM")) {
                if (this.record.outcome) {
                    return;
                }
                let G = `launcher \`${H}\` could not be executed (${C})`;
                i("tengu_bg_launcher_worker_refused", {
                    attempt: this.attempt
                });
                m("agent_launcher", C === "EACCES" ? "worker_launcher_eacces" : "worker_launcher_eperm");
                this.patch({
                    state: "crashed",
                    detail: G
                });
                let W = this.dimNotice(G);
                this.pushRing(W);
                this.onStream.emit(W);
                return this.settle("crashed");
            }
            return this.scheduleRespawn(l(error));
        }
        if (dispatch.launch.mode === "exec") {
            this.execTracker?.dispose();
            this.execTracker = ke(h, this.storageV5);
            this.workerReady = true;
        }
        if (O() === "windows") {
            writeFile(Rce(dispatch.short), String(D.pid)).catch(()=>{});
        }
        this.wirePty(D);
        this.rv?.close();
        this.rv = undefined;
        this.lastRvHeartbeat = undefined;
        this.stalledLogged = false;
        this.connectRv();
        this.patch({
            pid: D.pid,
            attempt: this.attempt,
            state: this.attempt > 1 ? "resuming" : "running",
            detail: "",
            cliVersion: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION
        });
        i("tengu_bg_worker_spawn", {
            short: HA(this.dispatch.short),
            attempt: this.attempt,
            source: d(this.dispatch.source),
            launch_mode: d(this.dispatch.launch.mode)
        });
        Fl(D.pid, {
            skipCache: true
        }).then((T)=>{
            if (!T || this.record.pid !== D.pid || this.isDetached || this.record.outcome) {
                return;
            }
            this.procStart = T;
            this.patch({
                pid: D.pid
            });
        });
    }
    wirePty(e) {
        this.pty = e;
        this.transitionTo({
            kind: "running"
        });
        this.decModes = INt();
        e.onResume?.(()=>{
            this.rv?.send({
                type: "repaint"
            });
        });
        e.onRepl?.((s, h)=>{
            if (!this.record.pid || this.record.outcome || this.isDetached) {
                return;
            }
            this.replPid = s;
            this.replProcStart = h;
            this.onState.emit({
                pid: this.record.pid
            });
        });
        this.offData = e.onData((s)=>{
            if (this.decModes.feed(s) && this.record.pid) {
                this.onState.emit({
                    pid: this.record.pid
                });
            }
            this.execTracker?.feed(s);
            this.pushRing(s.includes(zJ) ? s.replaceAll(zJ, "") : s);
            this.onStream.emit(s);
        });
        let r = false;
        this.offExit = e.onExit(({ exitCode, signal, hostStderr })=>{
            if (r) {
                return;
            }
            r = true;
            this.offData?.dispose();
            this.execLastLine = this.execTracker?.lastLine;
            this.execTracker?.dispose();
            this.execTracker = undefined;
            this.pty = undefined;
            this.onExit(exitCode, signal, hostStderr);
        });
    }
    dimNotice(e) {
        return Prt(`\r
\x1B[2m[${e}]\x1B[0m\r
`);
    }
    pushRing(e) {
        this.ring.push(e);
        this.ringBytes += e.length;
        if (this.ringBytes > e8t * 1.25 && this.ring.length > 1) {
            let r = 0;
            let s = 0;
            while(this.ringBytes - s > e8t && r < this.ring.length - 1){
                s += this.ring[r].length;
                r++;
            }
            this.ring.splice(0, r);
            this.ringBytes -= s;
            this.ringSpawnMark = Math.max(0, this.ringSpawnMark - r);
        }
    }
    patch(e) {
        Object.assign(this.record, e);
        this.onState.emit(e);
        if (this.pendingAuthRekey !== undefined && e.tempo !== undefined && e.tempo !== "active") {
            let r = this.pendingAuthRekey;
            ro(Yr(this.dispatch.short), this.storageV5).then((s)=>{
                if (this.pendingAuthRekey !== r) {
                    return;
                }
                let h = Qe(s, r);
                if (h === "settled") {
                    this.pendingAuthRekey = undefined;
                    this.authRekeyFired = false;
                    t(`[bg] worker ${this.dispatch.short}: deferred auth-mismatch re-key (${r}) dropped \u2014 worker settled; leaving to retireIfSettled`, {
                        level: "warn"
                    });
                    return;
                }
                if (h !== null) {
                    return;
                }
                t(`[bg] worker ${this.dispatch.short}: deferred auth-mismatch re-key (${r}) firing on tempo='${e.tempo}'`, {
                    level: "warn"
                });
                this.fireAuthRekey();
            });
        }
    }
    onExit(e, r, s) {
        if (this.isDetached) {
            return;
        }
        if (this.phase.kind === "retired") {
            return;
        }
        let procUptimeMs = this.lastSpawnAt ? Date.now() - this.lastSpawnAt : undefined;
        if (Date.now() - this.lastCheckPidAt > Ke) {
            this.hostWokeAt = Date.now();
        }
        let n = this.hostWokeAt !== undefined && Date.now() - this.hostWokeAt < Rt;
        let p = !n && procUptimeMs !== undefined && procUptimeMs < Ge && e !== 0;
        if (p) {
            this.fastCrashStreak++;
        } else {
            this.fastCrashStreak = 0;
        }
        let o = this.fastCrashStreak >= 3;
        let u = this.workerReady && procUptimeMs !== undefined && procUptimeMs >= yt;
        this.lastExitExternalStop = (r !== undefined || St.has(e ?? -1)) && !n;
        let g = this.workerReady ? undefined : this.preInitErrorTail();
        let f = $p()[0];
        let E = s ? Ud(Nr(un(s)), he) || undefined : undefined;
        let w = f && !this.workerReady && !g && E ? `(launch command: \`${f}\` \u2026): ${E}` : undefined;
        let S = !!f && e === 0 && !this.workerReady && procUptimeMs !== undefined && procUptimeMs < hYe;
        let y = e !== 0 ? eRo(Yr(this.dispatch.short)) : undefined;
        let R = y ? tRo(Yr(this.dispatch.short), y) : undefined;
        let L = R ? Ud(Nr(un(R)), he) || undefined : undefined;
        let I = !g && L ? `: ${L}` : "";
        let M = p && !!y && y === this.lastExitCause;
        this.lastExitCause = p ? y : undefined;
        let U = !this.workerReady && y === Don;
        let D = g ? ` \u2014 ${g}` : w ? ` \u2014 ${w}` : y ? ` \u2014 ${y}` : "";
        let T = this.effectiveCwd ?? this.dispatch.cwd;
        let C = false;
        if (y === "setcwd") {
            try {
                C = !statSync(T).isDirectory();
            } catch  {
                C = true;
            }
        }
        let H = this.dispatch.launch.mode === "exec" && (r === "SIGINT" || r === "SIGQUIT");
        let G;
        if (this.phase.kind === "retiring" && this.phase.reason === "reap") {
            G = this.killOutcome;
        } else if (this.phase.kind === "retiring" && this.phase.reason === "grace") {
            G = "done";
        } else if (this.phase.kind === "upgrading") {
            G = undefined;
        } else if (S) {
            G = "crashed";
        } else if (e === 0) {
            G = "done";
        } else if (this.dispatch.launch.mode === "exec") {
            G = H ? "killed" : "crashed";
        } else if (C || U || !this.workerReady && (this.attempt >= 2 || g || w) || o || M || !u && this.attempt >= Fe) {
            G = "crashed";
        }
        i("tengu_bg_worker_exit", {
            short: HA(this.dispatch.short),
            code: e ?? undefined,
            signal: pe(r),
            attempt: this.attempt,
            procUptimeMs,
            source: d(this.dispatch.source),
            launch_mode: d(this.dispatch.launch.mode),
            outcome: pe(G),
            exitCause: gOo(y),
            worker_cli_version: Ci(this.record.cliVersion),
            worker_stale: this.isVersionStale
        });
        if (this.phase.kind === "retiring") {
            return this.settle(this.phase.reason === "reap" ? this.killOutcome : "done");
        }
        if (this.phase.kind === "upgrading") {
            this.transitionTo({
                kind: "spawning"
            });
            this.attempt = 1;
            this.fastCrashStreak = 0;
            this.lastExitCause = undefined;
            this.patch({
                pid: 0,
                state: "starting",
                detail: "upgrading"
            });
            this.procStart = undefined;
            this.buildBridgeReattachEnvFromState().then((F)=>this.doSpawn(F, true)).catch(c);
            return;
        }
        if (S) {
            let detail = `the launcher exited before Claude Code started \u2014 \`${f}\` must exec, not daemonize${w ? ` \u2014 ${w}` : ""}`;
            i("tengu_bg_launcher_fork_and_exit", {
                attempt: this.attempt
            });
            m("agent_launcher", "worker_fork_and_exit");
            this.patch({
                state: "crashed",
                detail
            });
            return this.settle("crashed");
        }
        if (e === 0) {
            if (this.dispatch.launch.mode === "exec") {
                if (!this.execLastLine && this.ringBytes > 0) {
                    i("tengu_bg_exec_no_lastline", {
                        ring_bytes: this.ringBytes
                    });
                }
                this.patch({
                    detail: this.execLastLine || "(no output)"
                });
            }
            return this.settle("done");
        }
        let W = r ? `${r} (${e})` : `exit ${e}`;
        if (this.dispatch.launch.mode === "exec") {
            let F = this.execLastLine;
            this.patch({
                state: H ? "stopped" : "crashed",
                detail: F ? `${W} \u2014 ${F}` : `${W}${D}`
            });
            return this.settle(H ? "killed" : "crashed");
        }
        if (U) {
            this.sessionIdTakenLatch = true;
            i("tengu_bg_session_id_taken", {
                short: HA(this.dispatch.short),
                attempt: this.attempt,
                via: d(this.via),
                launch_mode: d(this.dispatch.launch.mode)
            });
            this.patch({
                state: "crashed",
                detail: We
            });
            let F = this.dimNotice(We);
            this.pushRing(F);
            this.onStream.emit(F);
            return this.settle("crashed");
        }
        if (!this.workerReady && y?.startsWith("spare_postclaim:")) {
            try {
                if (!statSync(this.dispatch.cwd).isDirectory()) {
                    return this.settleCwdGone("spare");
                }
            } catch  {
                return this.settleCwdGone("spare");
            }
        }
        if (C) {
            return this.settleCwdGone("boot", T);
        }
        if (!this.workerReady && (this.attempt >= 2 || g || w)) {
            let F = !r && bfe() ? " — possibly low memory — free some up and retry" : "";
            this.patch({
                state: "crashed",
                detail: `${W} before init${D || F}`
            });
            return this.settle("crashed");
        }
        if (o || M) {
            this.patch({
                state: "crashed",
                detail: M ? `${W} \xD7${this.attempt}${D}${I}` : `${W} within ${Ge / 1000}s of spawn \xD7${this.fastCrashStreak}${D}${I}`
            });
            return this.settle("crashed");
        }
        if (u) {
            this.attempt = 1;
        }
        this.scheduleRespawn(`${W}${D}${I}`);
    }
    async doSpawnUnlessSettledOnDisk() {
        let e = $e() ? await ro(Yr(this.dispatch.short), this.storageV5).catch(()=>{}) : undefined;
        if (this.record.outcome || this.phase.kind === "retiring" || this.phase.kind === "retired") {
            return;
        }
        if (e && Ra(e) && !e.queuedPrompt) {
            i("tengu_bg_respawn_suppressed", {
                short: HA(this.dispatch.short),
                reason: b("settled_on_disk")
            });
            let r = o_(e.state);
            return this.settle(r === "success" ? "done" : r === "failure" ? "failed" : "killed");
        }
        if (e?.interactiveLineage && this.lastExitExternalStop) {
            i("tengu_bg_respawn_suppressed", {
                short: HA(this.dispatch.short),
                reason: b("no_task_contract")
            });
            this.patch({
                state: "stopped",
                detail: "stopped by an external signal"
            });
            return this.settle("killed");
        }
        return this.doSpawn();
    }
    settleCwdGone(e, r = this.dispatch.cwd) {
        let s = JPr(r);
        i("tengu_bg_spawn_cwd_gone", {
            short: HA(this.dispatch.short),
            attempt: this.attempt,
            via: d(e)
        });
        this.patch({
            state: "crashed",
            detail: s
        });
        let h = this.dimNotice(`${s} \u2014 this job cannot be respawned`);
        this.pushRing(h);
        this.onStream.emit(h);
        this.settle("crashed");
    }
    async buildBridgeReattachEnvFromState() {
        let e = await ro(Yr(this.dispatch.short), this.storageV5).catch(()=>null);
        if (!e) {
            return;
        }
        return Lne(e.bridgeSessionId, e.bridgeSessionSeq, e.bridgeOutboundOnly, e.bridgeSessionGroupingId, {
            ownerAccountUuid: e.bridgeOwnerAccountUuid,
            ownerOrganizationUuid: e.bridgeOwnerOrganizationUuid,
            noHistoryBackfill: e.bridgeNoHistoryBackfill
        });
    }
    scheduleRespawn(e) {
        if (this.attempt >= Fe) {
            i("tengu_bg_respawn_exhausted", {
                short: HA(this.dispatch.short),
                attempts: this.attempt
            });
            this.patch({
                state: "crashed",
                detail: e
            });
            return this.settle("crashed");
        }
        if (this.phase.kind === "running") {
            this.transitionTo({
                kind: "spawning"
            });
        }
        this.patch({
            pid: 0,
            state: "crashed",
            detail: `${e}; respawning`
        });
        this.procStart = undefined;
        let r = this.dimNotice(`worker crashed (${e}) \u2014 respawning\u2026`);
        this.pushRing(r);
        this.onStream.emit(r);
        this.backoffTimer = setTimeout(()=>{
            this.backoffTimer = null;
            if (this.phase.kind !== "retiring" && this.phase.kind !== "retired") {
                this.doSpawnUnlessSettledOnDisk().catch(c);
            }
        }, _t);
        this.backoffTimer.unref();
    }
    settle(outcome) {
        if (this.record.outcome) {
            return;
        }
        i("tengu_bg_settle", {
            short: HA(this.dispatch.short),
            outcome: d(outcome),
            uptimeMs: Date.now() - this.record.startedAt,
            attempt: this.attempt,
            worker_cli_version: Ci(this.record.cliVersion),
            worker_stale: this.isVersionStale
        });
        this.transitionTo({
            kind: "retired",
            outcome
        });
        this.clearLiveness();
        this.patch({
            outcome,
            settledAt: Date.now(),
            tempo: "idle"
        });
        this.onSettle.emit(outcome);
    }
    connectRv() {
        if (this.rv || this.isDetached || this.record.outcome) {
            return;
        }
        if (this.dispatch.launch.mode === "exec") {
            this.startPidPoll();
            return;
        }
        this.rv = Ue(this.rvSockPath ?? Z5t(this.dispatch.short), (e)=>{
            if (e.type === "heartbeat") {
                this.lastRvHeartbeat = Date.now();
            } else if (e.type === "auth-rejected" || e.type === "reply-rejected") {
                this.rvRejected = true;
                i(e.type === "auth-rejected" ? "tengu_bg_rv_auth_mismatch" : "tengu_bg_rv_reply_rejected", {});
                this.rekeyForAuthMismatch(e.type === "auth-rejected" ? "rv-auth-rejected" : "rv-reply-rejected");
            } else if (e.type === "done") {
                this.settle(e.outcome);
            } else if (e.type === "state") {
                this.patch(e.patch);
            } else if (e.type === "detach-request") {
                let r = Dne(e.msg);
                let s = this.attachers.get(this.lastInputAttacher);
                if (!e.broadcast && s) {
                    s.deliver(r);
                } else if (this.attachers.size > 0) {
                    for (let h of this.attachers.values()){
                        h.deliver(r);
                    }
                } else {
                    this.onStream.emit(r);
                }
            } else if (e.type === "repaint-done") {
                this.onRepaintDone.emit();
            } else if (e.type === "interactive-mark") {
                let r = ono(e);
                if (!r) {
                    t(`[bg ${this.record.short}] dropped malformed rv interactive-mark frame`, {
                        level: "warn"
                    });
                    i("tengu_bg_imark_malformed", {});
                    return;
                }
                if (this.firedInteractiveMarks.length < 2 && !this.firedInteractiveMarks.some((s)=>s.kind === r.kind)) {
                    this.firedInteractiveMarks.push(r);
                    if (this.record.pid) {
                        this.onState.emit({
                            pid: this.record.pid
                        });
                    }
                }
                for (let s of this.attachers.values()){
                    if (s.caps?.imark === true) {
                        s.deliver(Dur({
                            ...r,
                            nonce: s.imarkNonce
                        }));
                    }
                }
            }
        }, ()=>void this.checkPid(), ()=>{
            this.workerReady = true;
            this.rvRejected = false;
            if (this.resizeDeferred) {
                this.resizeDeferred = false;
                this.resize(this.ptyCols, this.ptyRows);
            }
            if (this.attachers.size > 0) {
                let e = [
                    ...this.attachers.values()
                ].at(-1);
                this.sendAttacherCaps(e.caps ?? null);
            } else {
                this.sendAttacherCaps(null);
            }
        }, this.rvAuth);
        this.startPidPoll();
    }
    startPidPoll() {
        if (this.pidPoll) {
            return;
        }
        this.lastCheckPidAt = Date.now();
        this.pidPoll = setInterval(()=>void this.checkPid(true), ve);
        this.pidPoll.unref();
    }
    pidRecycled() {
        if (!this.procStart || !this.record.pid) {
            return false;
        }
        let e = IFe(this.record.pid);
        return e !== undefined && e !== this.procStart;
    }
    async pidRecycledAsync() {
        if (!this.procStart || !this.record.pid) {
            return false;
        }
        let e = await Fl(this.record.pid);
        return e !== undefined && e !== this.procStart;
    }
    async failIfHostExited(e) {
        let pid = this.record.pid;
        if (!pid || this.record.outcome || this.isKilling || !this.pty) {
            return false;
        }
        let s = await Bkr(pid);
        if (!d9(s)) {
            return false;
        }
        if (this.record.outcome || this.isKilling || !this.pty || this.record.pid !== pid) {
            return false;
        }
        t(`bg: ${this.dispatch.short} pty host pid=${pid} has exited but is unreaped (state ${s}) via=${e} \u2014 reaping it and marking the session failed`, {
            level: "warn"
        });
        i("tengu_bg_ptyhost_zombie", {
            short: HA(this.dispatch.short),
            via: d(e),
            state: d(s === "Z" ? "Z" : "X"),
            uptimeMs: Date.now() - this.record.startedAt,
            attachers: this.attachers.size
        });
        this.kill("SIGKILL", "failed", this.dispatch.launch.mode === "exec" ? CTt : w0e);
        return true;
    }
    pidPollTick = 0;
    async checkPid(e = false) {
        let r = Date.now() - this.lastCheckPidAt;
        this.lastCheckPidAt = Date.now();
        let s = r > Ke;
        if (s) {
            this.hostWokeAt = Date.now();
        }
        if (this.record.outcome || !this.record.pid) {
            return;
        }
        if (s && this.lastRvHeartbeat !== undefined) {
            this.lastRvHeartbeat = Date.now();
        }
        if (!this.pty) {
            try {
                process.kill(this.record.pid, 0);
            } catch (error) {
                let p = v(error);
                if (p === "ESRCH" || p === "EPERM") {
                    this.logVanished(false, e);
                    this.settle(this.isKilling ? "killed" : "crashed");
                }
                return;
            }
        }
        let lastRvHeartbeat = this.lastRvHeartbeat;
        if (!s && !this.stalledLogged && lastRvHeartbeat !== undefined && Date.now() - lastRvHeartbeat > bt) {
            let n = await ro(Yr(this.dispatch.short), this.storageV5);
            if (!this.stalledLogged && (n?.tempo ?? this.record.tempo) === "active") {
                this.stalledLogged = true;
                i("tengu_bg_worker_stalled", {
                    short: HA(this.dispatch.short),
                    sinceMs: Date.now() - lastRvHeartbeat
                });
            }
        }
        if (this.pty) {
            await this.failIfHostExited("poll");
            return;
        }
        if (e && this.pidPollTick++ % 12 !== 0) {
            return;
        }
        if (await this.pidRecycledAsync()) {
            if (this.record.outcome || this.pty) {
                return;
            }
            this.logVanished(true, e);
            this.settle(this.isKilling ? "killed" : "crashed");
        }
    }
    logVanished(recycled, fromPoll) {
        if (this.isKilling) {
            return;
        }
        i("tengu_bg_worker_vanished", {
            short: HA(this.dispatch.short),
            recycled,
            fromPoll,
            uptimeMs: Date.now() - this.record.startedAt,
            worker_cli_version: Ci(this.record.cliVersion),
            worker_stale: this.isVersionStale
        });
    }
    clearLiveness() {
        if (this.pidPoll) {
            clearInterval(this.pidPoll);
            this.pidPoll = null;
        }
        this.rv?.close();
        this.rv = undefined;
        this.lastRvHeartbeat = undefined;
        this.stalledLogged = false;
    }
}
async function VFs([r]) {
    if (!r) {
        process.stderr.write(`[bg-spare] missing claim sock path
`);
        process.exit(2);
    }
    let s = await Vt();
    let h = import("/$bunfs/root/chunk-ha9v64hy.js");
    import("/$bunfs/root/chunk-8d6fg9f4.js").catch(()=>{});
    import("/$bunfs/root/chunk-s4rz1z86.js").catch(()=>{});
    let n = ()=>{
        try {
            unlinkSync(r);
        } catch  {}
    };
    let p = ()=>{
        n();
        process.exit(0);
    };
    let o = (w)=>{
        n();
        process.stderr.write(`[bg-spare] uncaughtException: ${l(w)}
`);
        Yy("spare_uncaught");
        process.exit(1);
    };
    let process_ppid = process.ppid;
    let g = setInterval((w, S)=>{
        if (process.ppid !== w) {
            S();
            process.exit(0);
        }
    }, 2000, process_ppid, n);
    g.unref();
    for (let w of [
        "SIGTERM",
        "SIGHUP",
        "SIGINT"
    ]){
        process.on(w, p);
    }
    process.on("uncaughtException", o);
    let f = ()=>{
        clearInterval(g);
        for (let w of [
            "SIGTERM",
            "SIGHUP",
            "SIGINT"
        ]){
            process.off(w, p);
        }
        process.off("uncaughtException", o);
    };
    let E;
    try {
        E = await gin(r, undefined, s);
    } catch (error) {
        n();
        process.stderr.write(`[bg-spare] claim recv failed: ${l(error)}
`);
        Yy("spare_claim_recv");
        process.exit(1);
    }
    f();
    try {
        await h;
        await hin(E, h);
    } catch (error) {
        let S = Vr(error) ?? ah(error) ?? "Error";
        Yy(`spare_postclaim:${S}`, E.env.CLAUDE_JOB_DIR);
        process.stderr.write(`[bg-spare] post-claim init failed: ${l(error)}
`);
        throw error;
    }
}
async function Vt() {
    let a_CLAUDE_BG_CLAIM_AUTH = a.CLAUDE_BG_CLAIM_AUTH;
    delete process.env.CLAUDE_BG_CLAIM_AUTH;
    let a_CLAUDE_BG_SOCKET_TOKENS_PATH = a.CLAUDE_BG_SOCKET_TOKENS_PATH;
    delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH;
    if (!a_CLAUDE_BG_SOCKET_TOKENS_PATH) {
        return a_CLAUDE_BG_CLAIM_AUTH;
    }
    let s = await ndt(a_CLAUDE_BG_SOCKET_TOKENS_PATH);
    await unlink(a_CLAUDE_BG_SOCKET_TOKENS_PATH).catch(()=>{});
    if (!s?.claimAuth) {
        t("[bg-spare] tokens file unreadable; claim gate degraded", {
            level: "warn"
        });
    }
    return s?.claimAuth ?? a_CLAUDE_BG_CLAIM_AUTH;
}
const Bt = 2000;
async function ZPr(e) {
    if (O() === "windows") {
        return null;
    }
    if (tf()) {
        return null;
    }
    if (!await JD()) {
        if (!e.launcherNotRunnableEpisode.logged) {
            e.launcherNotRunnableEpisode.logged = true;
            m("agent_launcher", "spare_launcher_not_runnable");
            t(`bg spare: launcher \`${$p()[0]}\` was deleted or is not executable \u2014 not minting a warm spare until it is restored`, {
                level: "warn"
            });
        }
        return null;
    }
    e.launcherNotRunnableEpisode.logged = false;
    return Zr("daemon_bg_spare_refill", async ()=>{
        let r = randomBytes(4).toString("hex");
        let ptySock = Lds(r);
        let claimSock = Nds(r);
        let ptyAuth = randomBytes(16).toString("hex");
        let claimAuth = randomBytes(16).toString("hex");
        await mkdir(cre(), {
            recursive: true,
            mode: 448
        }).catch(()=>{});
        let tokensPath = await Ae(`spare-${r}`, {
            ptyAuth,
            claimAuth
        });
        await unlink(ptySock).catch(()=>{});
        await unlink(claimSock).catch(()=>{});
        let { cmd, prefixArgs } = uu({
            pinToCurrentBinary: true
        });
        let f = await open(kk(ptySock), "w").catch(()=>null);
        let E = XIs("agent");
        let w = E?.();
        let S;
        try {
            S = Bun.spawn([
                cmd,
                ...prefixArgs,
                "--bg-pty-host",
                ptySock,
                "200",
                "50",
                "--",
                cmd,
                ...prefixArgs,
                "--bg-spare",
                claimSock
            ], {
                cwd: cre(),
                env: Ut(tokensPath ? {
                    tokensPath
                } : {
                    ptyAuth,
                    claimAuth
                }),
                stdio: [
                    "ignore",
                    "ignore",
                    f?.fd ?? "ignore"
                ],
                detached: true,
                windowsHide: true,
                ...Al("agent"),
                argv0: "claude bg-pty-host"
            });
            S.unref();
        } catch (error) {
            if (tokensPath) {
                if (j() && e.credentials !== undefined) {
                    e.credentials.discardSpentCredentialFile(tokensPath).catch(()=>{});
                } else {
                    unlink(tokensPath).catch(()=>{});
                }
            }
            throw error;
        } finally{
            await f?.close().catch(()=>{});
        }
        let y = {
            hostPid: S.pid,
            ptySock,
            claimSock,
            ptyAuth,
            claimAuth,
            startedAt: Date.now(),
            cliVersion: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION,
            claimed: false,
            dispose () {
                R = true;
                try {
                    S.kill("SIGTERM");
                } catch  {}
            }
        };
        let R = false;
        S.exited.then(async (L)=>{
            let I = Date.now();
            let M = E?.();
            let U = L !== 0 && w !== undefined && M !== undefined && M > w;
            unlink(ptySock).catch(()=>{});
            unlink(claimSock).catch(()=>{});
            if (tokensPath) {
                if (j() && e.credentials !== undefined) {
                    e.credentials.discardSpentCredentialFile(tokensPath).catch(()=>{});
                } else {
                    unlink(tokensPath).catch(()=>{});
                }
            }
            let D = (await Ba(kk(ptySock), 1048576) ?? "").slice(0, 2000).trim();
            if (D.length > 0) {
                t(`bg spare host pid=${S.pid} exit stderr:
${D}`, {
                    level: "warn"
                });
            }
            unlink(kk(ptySock)).catch(()=>{});
            unlink(PM(ptySock)).catch(()=>{});
            let T = I - y.startedAt;
            let C = !R && !y.claimed && !U && $p().length > 0 && (T < Bt || L === 0 && T < hYe);
            if (U && !y.claimed && !R) {
                t(`bg spare: host pid=${S.pid} died ${T}ms after spawn while the tool memory cgroup OOM-killed a member \u2014 not attributed to the launcher`, {
                    level: "warn"
                });
            }
            if (C) {
                kSe([
                    -S.pid
                ]);
                m("agent_launcher", "spare_fork_or_crash");
                t(`bg spare: launcher \`${$p()[0]}\` exited ${T}ms after spawn \u2014 it either daemonized instead of calling \`exec\` (launcher contract #1) or crashed at startup. Warm spares are disabled until the background service restarts; sessions still start, without the warm-attach shortcut.`, {
                    level: "warn"
                });
            }
            e.onExit(C);
        });
        e.log(`bg spare spawned host pid=${S.pid}`);
        return y;
    });
}
function Ut(e) {
    let r = {
        ...process.env
    };
    te(r);
    for (let s of vve){
        delete r[s];
    }
    J9(r);
    hgt(r);
    O6(r);
    if (zMt(r)) {
        let s = B8(r);
        if (s) {
            te(r, [
                s
            ]);
            delete r[s];
        }
        for (let h of UF){
            delete r[h];
        }
        if (Ne(r.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
            WMt(r);
        }
    } else if (V3e.some((s)=>re(r, s))) {
        delete r.ANTHROPIC_AUTH_TOKEN;
    }
    for (let s of le){
        delete r[s];
    }
    for (let s of Object.keys(r)){
        if (BWn.some((h)=>s.startsWith(h))) {
            delete r[s];
        }
    }
    if (O() === "macos") {
        delete r.CLAUDE_CODE_OAUTH_TOKEN;
    }
    Object.assign(r, {
        CLAUDE_CODE_SESSION_KIND: "bg",
        CLAUDE_BG_BACKEND: "daemon",
        FORCE_COLOR: "3",
        COLORTERM: "truecolor",
        BROWSER: "true",
        ..."tokensPath" in e ? {
            CLAUDE_BG_SOCKET_TOKENS_PATH: e.tokensPath
        } : {
            CLAUDE_BG_PTY_AUTH: e.ptyAuth,
            CLAUDE_BG_CLAIM_AUTH: e.claimAuth
        }
    });
    return r;
}
function eIr(e, r, spawnPty, getAuthSnapshot, storageV5, credentials) {
    r.claimed = true;
    let o = tie.claim(e, {
        pid: r.hostPid,
        ptySockPath: r.ptySock,
        spawnPty,
        getAuthSnapshot,
        ptyAuth: r.ptyAuth,
        storageV5,
        credentials
    });
    we(e.short, min(e) ? getAuthSnapshot?.() : undefined).then((u)=>Ft(r.claimSock, Ht(e, u, o.socketAuth(), r.claimAuth))).catch((u)=>{
        i("tengu_bg_sendclaim_failed", {
            short: HA(e.short),
            errno: Vr(u),
            ...Zu(u)
        });
        t(`[bg-spare] send-claim failed: ${l(u)}`, {
            level: "warn"
        });
        let g = connect(r.ptySock);
        g.on("error", ()=>{});
        g.once("connect", ()=>{
            g.write(OL({
                t: "kill",
                sig: "SIGTERM"
            }));
            g.end();
        });
    });
    return o;
}
function Ht(e, r, s, claimAuth) {
    let { env, argv } = tie.buildClaimFrame(e, r, s);
    return {
        cwd: e.cwd,
        env,
        argv,
        sessionId: e.sessionId,
        auth: claimAuth
    };
}
const it = [
    50,
    100,
    150,
    200,
    250,
    300,
    400,
    500,
    500,
    500
];
async function Ft(claimSock, r) {
    let s = Date.now();
    let h = 5000;
    for(let n = 0;; n++){
        if (Date.now() - s > 5000) {
            throw Error("send-claim timeout");
        }
        try {
            await $t(claimSock, r);
            return;
        } catch (error) {
            let o = v(error);
            if (!(o === "ENOENT" || o === "ECONNREFUSED") || n >= it.length) {
                throw error;
            }
            await Q(it[n] ?? 500);
        }
    }
}
function $t(claimSock, r) {
    return new Promise((resolve, reject)=>{
        let n = connect(claimSock);
        n.once("error", reject);
        n.once("connect", ()=>{
            n.end(_(r) + `
`, ()=>resolve());
        });
    });
}
async function tIr(e, r) {
    if (O() === "windows") {
        return;
    }
    let s = new Set;
    for (let p of e.values()){
        let o = p.rosterEntry().ptySock;
        if (o) {
            s.add(o);
        }
    }
    let h = await readdir(cre()).catch(()=>[]);
    let n = 0;
    for (let p of h){
        if (!p.endsWith(".pty.sock")) {
            continue;
        }
        let o = join(cre(), p);
        if (s.has(o)) {
            continue;
        }
        n++;
        let u = connect(o);
        u.on("error", ()=>{
            unlink(o).catch(()=>{});
        });
        u.once("connect", ()=>{
            u.resume();
            u.write(OL({
                t: "kill",
                sig: "SIGTERM"
            }));
            u.end();
            setTimeout((g)=>g.destroy(), 2000, u).unref();
        });
    }
    for (let p of h){
        let o = [
            ".err",
            ".late",
            ".err.read"
        ].find((u)=>p.endsWith(`.pty.sock${u}`));
        if (o) {
            let u = p.slice(0, -o.length);
            if (!h.includes(u)) {
                unlink(join(cre(), p)).catch(()=>{});
            }
        }
        if (p.endsWith(".claim.sock")) {
            let u = join(cre(), `${p.slice(0, -11)}.pty.sock`);
            if (!s.has(u)) {
                unlink(join(cre(), p)).catch(()=>{});
            }
        }
    }
    if (n) {
        r(`bg orphan-spare reap: ${n}`);
    }
}
export { JPr, QPr, VBe, min, tie, VFs, ZPr, eIr, tIr };
