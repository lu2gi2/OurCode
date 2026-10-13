import { lFe, jT, cFe, DZt, LZt, eu, Ea, k, UV, x7 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b, d, Br, Nd } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, W, l, v, Vr, xs, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, Ut, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { _, X, Gm, un, qy, OH, a6, ps, Tq, VCo, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, ne, Nr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f, Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Al } from "/$bunfs/root/chunk-z0brrd3r.js";
import { fr, $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { ES } from "/$bunfs/root/chunk-55x53sfe.js";
import { kSe, Tue, p0, B7, Fl } from "/$bunfs/root/chunk-t0b6khh6.js";
import { Ba } from "/$bunfs/root/chunk-6g4165br.js";
import { fkt, mkt, EVe, V3, kVe, D7r, tm, TVe } from "/$bunfs/root/chunk-n4gsaesa.js";
import { JNe, ePt } from "/$bunfs/root/chunk-j5p659br.js";
import { oX } from "/$bunfs/root/chunk-kgqhamy6.js";
import { OG } from "/$bunfs/root/chunk-wa3pv8cd.js";
import { hYe, $p, tf, JD, yYe, GB } from "/$bunfs/root/chunk-9xenmz7v.js";
import { Sw } from "/$bunfs/root/chunk-rjfz3g63.js";
import { NAe, EE, FAt, Mds, J5t, Dds, Ace, jso, Wfr, Uot, Q5t, s_e, Bot, jot, kE, kKe, Rce, kk, PM, m5, J2 } from "/$bunfs/root/chunk-fff9dfxd.js";
import { s5, uu, E4, tAt } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { JTe } from "/$bunfs/root/chunk-j8rm3ydc.js";
import { $c as proto, vIn, v0e, bqe, Nur, $ur, xD, HA, GJ, Yr, ic, ro, Sqe, ITt, Ra, vqe } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { Mge } from "/$bunfs/root/chunk-e6p3g23d.js";
import { ME } from "/$bunfs/root/chunk-va6abnm5.js";
import { E$n } from "/$bunfs/root/chunk-h5mv3w61.js";
import { Jm } from "/$bunfs/root/chunk-6y5cf93g.js";
import { iXe, G0o, tmt, i4n, RHr, xHr, ONt, PHr, j1e, gcn, IHr } from "/$bunfs/root/chunk-3yartt6z.js";
import { ZO, Djo, Ljo, aK, b8n, Njo, Xfn, nQe, S8n, bBt, Jfn, Sht, $jo, lw, SBt, aOe, Qfn } from "/$bunfs/root/chunk-zfnrt9d9.js";
import { B1e, AHr, ANt, Zft, e4n, CNt, B0o, t4n, $9, n4n, j0o, hG, emt, r4n, RNt, fcn, mcn, xNt } from "/$bunfs/root/chunk-6s0c3g6w.js";
import { ggt, tNr, Dje } from "/$bunfs/root/chunk-7n5kjzjd.js";
import { bHr, bfe, SHr } from "/$bunfs/root/chunk-6c9jy00t.js";
import { JPr, QPr, VBe, min, tie, ZPr, eIr, tIr } from "/$bunfs/root/chunk-vnj4en5e.js";
import { BNo, _ie, rJe } from "/$bunfs/root/chunk-zzaag9x2.js";
import { Kqn, _1e, Yqn, _Do } from "/$bunfs/root/chunk-b17642vr.js";
import { rBr, oBr, _8n } from "/$bunfs/root/chunk-n2qyz1vj.js";
import { oI, Iie } from "/$bunfs/root/chunk-5an6yk4w.js";
import { Cj } from "/$bunfs/root/chunk-b2398mm3.js";
import { _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { E1, vxe } from "/$bunfs/root/chunk-381737m9.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { spawn } from "child_process";
import { open, rm, rename, stat, unlink, realpath, access, lstat, mkdir, readdir, writeFile, readFile } from "fs/promises";
import { homedir, freemem } from "os";
import { dirname, resolve, basename, join } from "path";
import { createWriteStream } from "fs";
import { once } from "events";
import { createInterface } from "readline";
const it = 10485760;
const zt = new RegExp(`[${qy}]`, "gu");
function Yt(r) {
    let e = ps(r).trimEnd();
    if (e.includes(`
`)) {
        return OH(_(e));
    }
    return e.replace(zt, a6);
}
async function Le(r) {
    let isTTY = process.stdout.isTTY;
    let o = await stat(r).then((u)=>u.size).catch(()=>0);
    if (o > it) {
        await dt(r);
        o = 0;
    }
    let n = at(r);
    let a = null;
    let w = null;
    let S = false;
    return {
        write (u, y) {
            let R = `[${new Date().toISOString()}] [${u}] ${Yt(y)}
`;
            if (isTTY) {
                process.stdout.write(R);
            }
            if (S) {
                return;
            }
            o += Buffer.byteLength(R);
            if (w) {
                w.push(R);
            } else {
                n.write(R);
            }
            if (o > it && !a) {
                let E = n;
                let L = [];
                w = L;
                a = (async ()=>{
                    try {
                        await st(E);
                        await dt(r);
                        n = at(r);
                        o = 0;
                        for (let P of L){
                            o += Buffer.byteLength(P);
                            n.write(P);
                        }
                    } catch  {} finally{
                        w = null;
                        a = null;
                    }
                })();
            }
        },
        async close () {
            S = true;
            await a;
            await st(n);
        }
    };
}
function at(r) {
    let e = createWriteStream(r, {
        flags: "a"
    });
    e.on("error", ()=>{});
    return e;
}
function st(r) {
    return new Promise((resolvePromise)=>{
        if (r.closed) {
            resolvePromise();
            return;
        }
        r.once("close", ()=>resolvePromise());
        r.end();
    });
}
async function dt(r) {
    let e = `${r}.1`;
    try {
        await rename(r, e);
    } catch (error) {
        if (z(error)) {
            return;
        }
        await unlink(e).catch(()=>{});
        await rename(r, e).catch(()=>unlink(r).catch(()=>{}));
    }
}
const er = 86400000;
const Xe = 262144;
async function Me(r, e) {
    await mkdir(jso(), {
        recursive: true,
        mode: 448
    }).catch(()=>{});
    await rename(r, join(jso(), basename(r))).catch(()=>unlink(r).catch(()=>{}));
    Ie(basename(r), e);
}
function Ie(r, reason) {
    t(`[bg-dispatch] rejected ${r}: ${reason}`, {
        level: "warn"
    });
    i("tengu_bg_dispatch_rejected", {
        reason
    });
}
function pt(r) {
    return Nd(b("oversized ("), Br(r), b(" bytes)"));
}
async function ft(r, e) {
    let o;
    try {
        o = await lstat(r);
    } catch (error) {
        if (z(error)) {
            return;
        }
        m("daemon_bg_dispatch_ingest", "read_failed");
        return Me(r, Vr(error) ?? b("unknown"));
    }
    if (o.isSymbolicLink()) {
        m("daemon_bg_dispatch_ingest", "symlink");
        return Me(r, b("symlink"));
    }
    if (!o.isFile()) {
        m("daemon_bg_dispatch_ingest", "not_a_file");
        t(`[bg-dispatch] removed non-regular ${basename(r)}`, {
            level: "warn"
        });
        await rm(r, {
            recursive: true,
            force: true
        }).catch(()=>{});
        return;
    }
    if (o.size > Xe) {
        m("daemon_bg_dispatch_ingest", "oversized");
        return Me(r, pt(o.size));
    }
    let n;
    try {
        n = await readFile(r, "utf8");
    } catch (error) {
        if (z(error)) {
            return;
        }
        m("daemon_bg_dispatch_ingest", "read_failed");
        return Me(r, Vr(error) ?? b("unknown"));
    }
    let a = wt(n);
    if (!a.ok) {
        return Me(r, a.reason);
    }
    e(a.dispatch);
    g("daemon_bg_dispatch_ingest");
    await unlink(r).catch(()=>{});
}
const ht = {
    namespace: "daemon",
    relPath: [
        "dispatch"
    ]
};
async function tr(r) {
    if (j() && r !== undefined) {
        await r.ensureScope(ht).catch(()=>{});
        return;
    }
    await mkdir(Ace(), {
        recursive: true,
        mode: 448
    }).catch(()=>{});
}
function wt(r) {
    let e;
    let o = true;
    try {
        e = X(r);
    } catch  {
        e = undefined;
        o = false;
    }
    let n;
    try {
        n = vIn().safeParse(e);
    } catch  {
        m("daemon_bg_dispatch_ingest", "transform_throw");
        return {
            ok: false,
            reason: b("transform_throw")
        };
    }
    if (!n.success) {
        m("daemon_bg_dispatch_ingest", o ? "schema" : "bad_json");
        return {
            ok: false,
            reason: b("schema")
        };
    }
    if (Date.now() - n.data.createdAt > er) {
        m("daemon_bg_dispatch_ingest", "stale");
        return {
            ok: false,
            reason: b("stale")
        };
    }
    let { env, reattachEnv } = n.data;
    return {
        ok: true,
        dispatch: {
            ...n.data,
            env: Dje(env, tNr),
            reattachEnv: reattachEnv && Dje(reattachEnv, ggt)
        }
    };
}
async function qe(r) {
    await rm(join(Ace(), r), {
        recursive: true,
        force: true
    }).catch(()=>{});
}
async function _t(r) {
    m("daemon_bg_dispatch_ingest", "not_a_file");
    t(`[bg-dispatch] removed non-regular ${r}`, {
        level: "warn"
    });
    await qe(r);
}
async function Ye(r, e, o, n) {
    if (n !== undefined) {
        await r.write($e.daemon([
            "dispatch",
            "rejected",
            e
        ]), n).catch(()=>{});
    }
    await r.delete($e.daemon([
        "dispatch",
        e
    ])).catch(()=>{});
    Ie(e, o);
}
async function kt(r, e, o) {
    let n = $e.daemon([
        "dispatch",
        e
    ]);
    let a = await Nur(join(Ace(), e));
    if (a.kind === "refused") {
        if (a.symlink) {
            m("daemon_bg_dispatch_ingest", "symlink");
            await qe(e);
            Ie(e, b("symlink"));
            return;
        }
        await _t(e);
        return;
    }
    if (a.kind === "error") {
        m("daemon_bg_dispatch_ingest", "read_failed");
        Ie(e, Vr(a.error) ?? b("unknown"));
        return;
    }
    let w = await r.read([
        {
            key: n,
            offset: 0,
            length: Xe + 1
        }
    ]).catch(()=>{});
    if (w === undefined || !w.ok) {
        m("daemon_bg_dispatch_ingest", "read_failed");
        if (w !== undefined && $ur(w.error)) {
            return Ye(r, e, b("v5_read_failed"), undefined);
        }
        Ie(e, b("v5_read_failed"));
        return;
    }
    let S = w.value.items[0];
    if (!S.found) {
        return;
    }
    if (S.totalBytes > Xe) {
        m("daemon_bg_dispatch_ingest", "oversized");
        return Ye(r, e, pt(S.totalBytes), undefined);
    }
    let u = wt(Buffer.from(S.value).toString("utf8"));
    if (!u.ok) {
        return Ye(r, e, u.reason, S.value);
    }
    o(u.dispatch);
    g("daemon_bg_dispatch_ingest");
    await r.delete(n).catch(()=>{});
}
async function rr(r, e, o) {
    if (!fr(e)) {
        m("daemon_bg_dispatch_ingest", "bad_name");
        Ie(e, b("bad_name"));
        await qe(e);
        return;
    }
    await kt(r, e, o);
}
async function nr(r, e) {
    if (j() && e !== undefined) {
        let cursor;
        let a = [];
        let w = [];
        do {
            let S = await e.listEntries(ht, {
                cursor,
                skipKeyStats: true,
                skipScopeStats: true
            });
            if (!S.ok) {
                throw new x(`dispatch drain v5 list failed: ${S.error.code}`, "dispatch drain v5 list failed");
            }
            for (let u of S.value.items){
                let y = u.kind === "key" ? u.key : u.scope;
                if (y.namespace !== "daemon" || y.relPath?.length !== 2) {
                    continue;
                }
                let R = y.relPath[1];
                if (R === undefined || !fr(R)) {
                    continue;
                }
                if (u.kind === "key") {
                    a.push(R);
                } else {
                    w.push(R);
                }
            }
            cursor = S.value.cursor;
        }while (cursor !== undefined)
        for (let S of w){
            if (Je(S)) {
                continue;
            }
            await _t(S);
        }
        for (let S of a){
            if (Je(S)) {
                continue;
            }
            await kt(e, S, r);
        }
        return;
    }
    let o;
    try {
        o = await readdir(Ace());
    } catch (error) {
        if (z(error)) {
            return;
        }
        throw error;
    }
    for (let n of o){
        if (Je(n)) {
            continue;
        }
        await ft(join(Ace(), n), r);
    }
}
function vt(r) {
    return r.endsWith(".tmp") || r.includes(".tmp.");
}
function Je(r) {
    return r.startsWith(".") || vt(r) || r === "rejected";
}
async function St(r, storageV5) {
    return Zr("daemon_bg_watcher_start", ()=>or(r, storageV5));
}
async function or(r, storageV5) {
    await tr(storageV5);
    let o = O();
    let usePolling = o === "macos";
    let a = Sw.watch(Ace(), {
        ignoreInitial: true,
        depth: 0,
        usePolling,
        interval: 100,
        ignored: (w)=>vt(basename(w)) || basename(w) === "rejected",
        ...o === "windows" && {
            awaitWriteFinish: {
                stabilityThreshold: 50,
                pollInterval: 20
            }
        }
    });
    a.on("add", (w)=>{
        (j() && storageV5 !== undefined ? rr(storageV5, basename(w), r) : ft(w, r)).catch((S)=>t(`[bg-dispatch] ${S}`, {
                level: "error"
            }));
    });
    a.on("error", (w)=>{
        t(`[bg-dispatch] watcher error: ${w}`, {
            level: "error"
        });
        i("tengu_bg_dispatch_watcher_failed", {
            errno: Vr(w) ?? b("unknown")
        });
    });
    await Ut(once(a, "ready"), 5000, "chokidar ready").catch((w)=>t(`[bg-dispatch] watcher ready wait: ${w}`));
    await nr(r, storageV5).catch((w)=>{
        t(`[bg-dispatch] cold-start drain: ${w}`, {
            level: "error"
        });
        i("tengu_bg_dispatch_watcher_failed", {
            errno: Vr(w) ?? b("unknown")
        });
    });
    return {
        close: ()=>a.close()
    };
}
const lr = 3600000;
const Qe = 60000;
const bt = 28800000;
const cr = 28800000;
const xe = 60000;
const ur = 2000;
const pr = 300000;
const mr = 2000;
const yt = 1000;
const gr = new Set;
function Ze(storageV5) {
    return Sqe(storageV5).catch((e)=>{
        c(e);
        return new Set;
    });
}
async function Pt(log, e = {}) {
    let o;
    let n;
    let handles = new Map;
    let w = async ()=>{
        let S = new Set;
        let u = e.spawnPty ?? QPr();
        let y = e.onKeepAliveChange ?? (()=>{});
        let noteSettled = (h, A, Y)=>o?.noteSettledDispatch(h, A, Y);
        let E = false;
        let L = false;
        let P = Promise.withResolvers();
        let D = null;
        let p = false;
        let launcherNotRunnableEpisode = {
            logged: false
        };
        let H = false;
        let q = false;
        let le = e.spawnPty === undefined;
        let oe = ()=>{
            if (!k("tengu_bg_spare_enable", true)) {
                if (D) {
                    D.dispose();
                    D = null;
                }
                return;
            }
            if (bfe()) {
                if (D) {
                    D.dispose();
                    D = null;
                }
                return;
            }
            if (!q || D || H || p || E || !L || !u || !le || O() === "windows") {
                return;
            }
            H = true;
            let h = null;
            let A = false;
            ZPr({
                log,
                launcherNotRunnableEpisode,
                credentials: e.credentials,
                onExit: (Y)=>{
                    if (Y) {
                        p = true;
                    }
                    if (h === null) {
                        A = true;
                        return;
                    }
                    if (D === h) {
                        D = null;
                        let ee = $p().length > 0 ? hYe : mr;
                        if (Date.now() - h.startedAt >= ee) {
                            oe();
                        }
                    }
                }
            }).then((Y)=>{
                h = Y;
                if (!Y || E || A) {
                    Y?.dispose();
                    return;
                }
                D = Y;
                i("tengu_bg_spare_spawn", {});
            }).catch((Y)=>{
                if (xs(Y)) {
                    t(`bg-spare spawn failed: ${v(Y)} ${Y.message}`, {
                        level: "warn"
                    });
                    return;
                }
                c(Y);
            }).finally(()=>{
                H = false;
            });
        };
        let ue = Date.now();
        let re = async (h, A = 0, afterUpgrade, ee = false)=>{
            if (E) {
                return "closed";
            }
            q = true;
            let fe = ee;
            if (A === 0 && !afterUpgrade) {
                try {
                    await Ut(access(h.cwd), yt, `bg: cwd probe timed out for ${h.short}`);
                } catch (error) {
                    fe = z(error);
                }
                if (E) {
                    return "closed";
                }
            }
            if (fe && !handles.has(h.short) && A > 0) {
                try {
                    await Ut(access(h.cwd), yt, `bg: cwd re-probe timed out for ${h.short}`);
                    fe = false;
                } catch (error) {
                    fe = z(error);
                }
                if (E) {
                    return "closed";
                }
            }
            if (fe && !handles.has(h.short)) {
                let s = JPr(h.cwd);
                log(`bg refused ${h.short} (${h.source}): ${s}`);
                i("tengu_bg_spawn_cwd_gone", {
                    short: HA(h.short),
                    attempt: 0,
                    via: d("dispatch")
                });
                f("daemon_bg_session_create", "cwd_gone");
                if (h.nonce) {
                    noteSettled(h.short, h.nonce, s);
                }
                return "refused";
            }
            let me = false;
            if (VBe(h) && !handles.has(h.short)) {
                try {
                    await _r(e.storageV5);
                    let s = RNt(h.env);
                    if (e.storageV5) {
                        await mcn(e.storageV5, h.short, s);
                    } else {
                        await writeFile(s_e(h.short), s);
                    }
                    me = true;
                } catch (error) {
                    c(error);
                    m("daemon_bg_session_create", "host_tombstone_write");
                    return "dropped";
                }
            }
            let ce = handles.get(h.short);
            if (ce) {
                if ((ce.isKilling || ce.isRetiring || ce.record.outcome) && A < 30) {
                    if (A === 15 && (ce.isKilling || ce.isRetiring)) {
                        i("tengu_bg_dispatch_sigkill_escalate", {});
                        ce.kill("SIGKILL");
                    }
                    await Q(100);
                    return re(h, A + 1, afterUpgrade, fe);
                }
                let s = ce.isKilling || ce.isRetiring || ce.record.outcome;
                if (me && !VBe(ce.dispatch)) {
                    if (e.storageV5) {
                        await xNt(e.storageV5, h.short);
                    } else {
                        await unlink(s_e(h.short)).catch(()=>{});
                    }
                }
                log(s ? `bg: dispatch ${h.short} dropped \u2014 retry budget exhausted (handle still settling)` : `bg: dup dispatch ${h.short} dropped (existing handle still live)`);
                if (s) {
                    m("daemon_bg_session_create", "dup_retry_exhausted");
                    return "dropped";
                }
                g("daemon_bg_session_create");
                return "dup-live";
            }
            if (!VBe(h)) {
                if (e.storageV5) {
                    xNt(e.storageV5, h.short);
                } else {
                    unlink(s_e(h.short)).catch(()=>{});
                }
            }
            let { lowMem, level } = bHr();
            if (lowMem && handles.size > 0) {
                let s = Date.now() - ue;
                if (s > xe * 2) {
                    log(`bg: low memory but sweep anchor is ${Math.round(s / 1000)}s stale (host slept?) \u2014 deferring eager retire to the next sweep tick`);
                } else {
                    let free_mb = Math.round(freemem() / 1024 / 1024);
                    log(`bg: low memory (${level !== undefined ? `macOS memorystatus pressure level ${level}` : `${free_mb}MB free`}) \u2014 retiring settled workers before spawning ${h.short}`);
                    i("tengu_bg_dispatch_low_mem", {
                        free_mb,
                        handles: handles.size,
                        pressure_level: level
                    });
                    Ze(e.storageV5).then((G)=>{
                        for (let ae of handles.values()){
                            ae.retireIfSettled(Qe, G).then((ve)=>Ve(log, ae, ve, "low memory")).catch((ve)=>c(ve));
                        }
                    });
                }
            }
            if (h.source === "spare" && lowMem) {
                log(`bg: low memory \u2014 skipping spare dispatch ${h.short}`);
                return "dropped";
            }
            if (D && !afterUpgrade && h.launch.mode !== "exec" && D.cliVersion === ({
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }).VERSION && k("tengu_bg_spare_enable", true)) {
                let s = D;
                D = null;
                try {
                    let C = eIr(h, s, u, e.getAuthSnapshot, e.storageV5, e.credentials);
                    handles.set(h.short, C);
                    et(handles, C, y, S, log, {
                        storageV5: e.storageV5,
                        credentials: e.credentials,
                        noteSettled
                    });
                    ge(S, GJ((G)=>{
                        G.workers[h.short] = C.rosterEntry();
                    }, e.storageV5).catch((G)=>c(G)));
                    y();
                    i("tengu_bg_spare_claim", {
                        age_ms: Date.now() - s.startedAt
                    });
                    log(`bg claimed-spare ${h.short} (${h.source})`);
                    g("daemon_bg_session_create");
                    oe();
                    return "claimed";
                } catch (error) {
                    let G = v(error);
                    let ae = G === "ENOENT" ? "enoent" : G === "ECONNREFUSED" ? "econnrefused" : error instanceof Error ? "error" : "unknown";
                    i("tengu_bg_spare_claim_fail", {
                        reason: d(ae)
                    });
                    s.dispose();
                }
            }
            let Pe = tie.spawn(h, u, e.getAuthSnapshot, afterUpgrade ? {
                afterUpgrade
            } : undefined, e.storageV5, e.credentials);
            handles.set(h.short, Pe);
            et(handles, Pe, y, S, log, {
                storageV5: e.storageV5,
                credentials: e.credentials,
                noteSettled
            });
            y();
            oe();
            log(`bg spawned ${h.short} (${h.source})`);
            g("daemon_bg_session_create");
            return "spawned";
        };
        let killAll = (h = "SIGTERM")=>{
            let A = 0;
            for (let Y of handles.values()){
                if (!Y.record.outcome) {
                    Y.kill(h);
                    A++;
                }
            }
            return A;
        };
        await J5t();
        await Mds();
        let K = await j0o(handles, re, e.onNudge ?? (async ()=>({
                restarting: false,
                upgradePending: false
            })), (h)=>{
            let A = h ? killAll("SIGTERM") : 0;
            e.onShutdown?.();
            return A;
        }, ()=>L, e.onYield ?? (()=>false), P.promise, e.storageV5);
        o = K;
        log(`bg: control socket bound at ${EE(J2())}`);
        K.onLeaseChange.subscribe(y);
        K.onLeaseChange.subscribe(({ op, client })=>{
            if (client?.label === bqe) {
                log(`bg lease ${op}: ${client.label} ${client.cloudSessionId ?? "(no session id)"} pid=${client.pid} (leases=${K.leaseCount()})`);
                return;
            }
            if (K.leaseCount() > 0 && !q) {
                q = true;
                oe();
            }
        });
        await Promise.all(O() === "windows" ? [
            kr(e.storageV5)
        ] : [
            mkdir(Wfr(), {
                recursive: true,
                mode: 448
            }).catch(()=>{}),
            mkdir(jot(), {
                recursive: true,
                mode: 448
            }).catch(()=>{})
        ]);
        Dds();
        let B = await xD(undefined, e.storageV5);
        let adopted = 0;
        let dead = 0;
        let dead_epoch = 0;
        let upgrade_skipped = 0;
        let be = 0;
        let N = 0;
        let we = B.updatedAt > 0 && Date.now() - B.updatedAt > ITt;
        await Promise.all(Object.entries(B.workers).map(async ([h, A])=>{
            let Y;
            try {
                Y = await tie.adopt(h, A, u, e.getAuthSnapshot, e.storageV5, e.credentials);
            } catch (error) {
                c(FAt(error));
                dead++;
                return;
            }
            if (!Y && A.procStart === undefined && A.ptySock && await gcn(A.ptySock)) {
                A.procStart = await Fl(A.pid);
                try {
                    Y = await tie.adopt(h, A, u, e.getAuthSnapshot, e.storageV5, e.credentials);
                } catch (error) {
                    c(FAt(error));
                    Y = null;
                }
                Y ??= tie.unverified(h, A, e.storageV5, e.credentials);
            }
            if (Y) {
                handles.set(h, Y);
                et(handles, Y, y, S, log, {
                    storageV5: e.storageV5,
                    credentials: e.credentials,
                    noteSettled
                });
                adopted++;
            } else if (A.pendingRespawn === "upgrade" && !iXe(A.cliVersion, {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION) && !we) {
                N++;
                i("tengu_bg_adopt_upgrade_respawn", {});
                re(A.dispatch, 0, true).catch((ee)=>c(ee));
            } else {
                dead++;
                let ee = false;
                if (A.pendingRespawn === "upgrade" && we) {
                    upgrade_skipped++;
                    ee = true;
                }
                let fe = await i4n(A.ptySock, A.dispatch);
                let me = fe ?? {
                    state: "failed",
                    detail: "process gone while supervisor was down"
                };
                if (await vqe(h, me.state, me.detail, {
                    resumable: fe ? undefined : "auto-resume"
                }, e.storageV5) === "dead-epoch") {
                    dead_epoch++;
                    ee = true;
                }
                if (ee) {
                    be++;
                }
                if (e.credentials) {
                    e.credentials.discardSpentCredentialFile(Bot(h)).catch(()=>{});
                } else {
                    unlink(Bot(h)).catch(()=>{});
                }
                if (O() === "windows") {
                    if (e.storageV5) {
                        rt(e.storageV5, h, A.ptySock);
                    } else {
                        unlink(Rce(h)).catch(()=>{});
                        unlink(kk(kE(h))).catch(()=>{});
                        unlink(PM(kE(h))).catch(()=>{});
                        unlink(m5(A.ptySock ?? kE(h))).catch(()=>{});
                    }
                } else {
                    if (e.credentials) {
                        e.credentials.discardSpentCredentialFile(Uot(h)).catch(()=>{});
                    } else {
                        unlink(Uot(h)).catch(()=>{});
                    }
                    unlink(A.rendezvousSock).catch(()=>{});
                    if (A.ptySock) {
                        unlink(A.ptySock).catch(()=>{});
                        unlink(kk(A.ptySock)).catch(()=>{});
                        unlink(PM(A.ptySock)).catch(()=>{});
                        unlink(m5(A.ptySock)).catch(()=>{});
                        await Tue(A.replPid, A.replProcStart);
                        try {
                            process.kill(A.pid, 0);
                        } catch  {
                            kSe([
                                -A.pid
                            ]);
                        }
                    }
                }
            }
        }));
        if (adopted + dead + N > 0) {
            log(`bg adopt: adopted=${adopted} respawned=${N} dead=${dead}` + (dead_epoch > 0 ? ` dead_epoch=${dead_epoch}` : "") + (upgrade_skipped > 0 ? ` upgrade_skipped=${upgrade_skipped} (previous roster written ${Math.round((Date.now() - B.updatedAt) / 86400000)}d ago)` : ""));
            i("tengu_bg_adopt", {
                adopted,
                respawned: N,
                dead,
                dead_epoch,
                upgrade_skipped
            });
            if (dead - be === 0) {
                g("daemon_bg_adopt");
            } else if (adopted > 0 || N > 0) {
                f("daemon_bg_adopt", "partial");
            } else {
                m("daemon_bg_adopt", "all_workers_dead");
            }
        }
        let se = await aK(e.storageV5).catch(()=>null);
        let ie = se?.pid === process.pid;
        let ke = !(se !== null && se.pid !== process.pid) && !(e.isShuttingDown?.() ?? false);
        if (!ie) {
            log(`bg: skipped post-adopt sweeps + roster rewrite \u2014 daemon.lock is ${se ? `held by pid ${se.pid}` : "absent"} (yield/handover in flight)`);
        }
        if (ie && !B.parseFailed) {
            hr(handles, log, {
                storageV5: e.storageV5
            });
        }
        if (ie && !B.parseFailed) {
            await tIr(handles, log);
        }
        if (ie && !B.inspectFailed) {
            await GJ((h)=>{
                h.workers = {};
                for (let [A, Y] of handles){
                    h.workers[A] = Y.rosterEntry();
                }
            }, e.storageV5).catch((h)=>c(h));
        }
        let Ee = ke ? await St((h)=>void re(h).catch((A)=>c(A)), e.storageV5) : null;
        n = Ee ?? undefined;
        L = ke;
        if (ke) {
            P.resolve();
        }
        y();
        if (ke && handles.size > 0) {
            q = true;
        }
        oe();
        if (ke) {
            Oe().catch((h)=>c(h));
        }
        ue = Date.now();
        let Ae = false;
        let De = setInterval(async (h, A)=>{
            if (Ae) {
                return;
            }
            Ae = true;
            try {
                await ze(h, A);
            } finally{
                Ae = false;
            }
        }, xe, handles, oe);
        async function ze(h, A) {
            {
                let Y = Date.now();
                let ee = Y - ue - xe;
                ue = Y;
                if (ee > xe) {
                    for (let s of h.values()){
                        s.shiftGraceClocksForward(ee);
                    }
                    A();
                    return;
                }
                let fe = bfe();
                let me = fe ? Qe : lr;
                let ce = fe ? Qe : cr;
                let _e = await Ze(e.storageV5);
                for (let s of h.values()){
                    if (_e.has(s.dispatch.short)) {
                        s.respawnIfIdleStale(_e).catch((C)=>c(C));
                    }
                }
                let Re = await Promise.all([
                    ...h.values()
                ].map((s)=>s.retireIfSettled(me, _e, ce).then((C)=>Ve(log, s, C, fe ? "low memory" : "")).catch((C)=>{
                        c(C);
                        return false;
                    })));
                let Pe = F(Re, (s)=>s);
                if (fe && Pe === 0 && bfe()) {
                    let s = await Promise.all([
                        ...h.values()
                    ].map((C)=>C.retireIfSettled(bt, _e, bt, {
                            shedMonitoringOnly: true
                        }).then((G)=>Ve(log, C, G, "low memory, monitoring only")).catch((G)=>{
                            c(G);
                            return false;
                        })));
                    Pe += F(s, (C)=>C);
                }
                if (fe && Pe === 0 && bfe()) {
                    let s = [
                        ...h.values()
                    ].filter((C)=>_e.has(C.dispatch.short));
                    if (s.length > 0) {
                        log("bg: low memory persists after shedding non-pinned — retiring pinned settled workers as a last resort");
                        i("tengu_bg_retire_pinned_low_mem", {});
                        for (let C of s){
                            C.retireIfSettled(me, gr, ce).then((G)=>Ve(log, C, G, "low memory, pinned")).catch((G)=>c(G));
                        }
                    }
                }
                if (!fe && SHr()) {
                    let s = k("tengu_bg_prewarm_per_sweep", 3);
                    let C = 12;
                    for (let G of h.values()){
                        if (s <= 0 || C <= 0) {
                            break;
                        }
                        if (_e.has(G.dispatch.short)) {
                            continue;
                        }
                        if (G.isUnverified) {
                            continue;
                        }
                        if (G.isBooting) {
                            s--;
                            continue;
                        }
                        if (!G.isVersionStale) {
                            continue;
                        }
                        if (G.dispatch.launch.mode === "exec") {
                            continue;
                        }
                        if (iXe(G.record.cliVersion, {
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
                            continue;
                        }
                        if (G.record.cliVersion && tmt(G.record.cliVersion, {
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
                            G.noteDowngradeRefused("prewarm");
                            continue;
                        }
                        if ((await G.respawnIfIdleStale(undefined, "prewarm").catch((ve)=>{
                            c(ve);
                            return {
                                respawned: false
                            };
                        })).respawned) {
                            s--;
                        } else {
                            C--;
                        }
                    }
                }
                A();
            }
        }
        De.unref();
        async function Oe() {
            let h = k("tengu_bg_prewarm_burst_delay_ms", 15000);
            await Q(h, undefined, {
                unref: true
            });
            if (E) {
                return;
            }
            let A = k("tengu_bg_prewarm_burst_concurrency", 3);
            if (A <= 0 || !SHr()) {
                return;
            }
            let Y = await Ze(e.storageV5);
            let ee = new Set([
                ...handles.values()
            ].filter((G)=>!G.record.outcome && !G.isUnverified && G.isVersionStale && G.dispatch.launch.mode !== "exec" && !Y.has(G.dispatch.short)));
            if (ee.size === 0) {
                return;
            }
            let ee_size = ee.size;
            let me = Date.now();
            let ce = 0;
            let refused = 0;
            let alreadyBooting = 0;
            let lowMemStop = false;
            let sweepStaleStop = false;
            let C = me + pr;
            while(ee.size > 0 && Date.now() < C && !E){
                if (Date.now() - ue > xe * 2) {
                    sweepStaleStop = true;
                    break;
                }
                if (bfe()) {
                    lowMemStop = true;
                    break;
                }
                let G = A - F([
                    ...handles.values()
                ], (ae)=>ae.isBooting && !ae.isUnverified);
                for (let ae of ee){
                    if (G <= 0) {
                        break;
                    }
                    ee.delete(ae);
                    if (ae.isBooting) {
                        alreadyBooting++;
                        continue;
                    }
                    if ((await ae.respawnIfIdleStale(undefined, "burst").catch((Gt)=>{
                        c(Gt);
                        return {
                            respawned: false
                        };
                    })).respawned) {
                        ce++;
                        G--;
                    } else {
                        refused++;
                    }
                }
                if (ee.size === 0) {
                    break;
                }
                await Q(ur, undefined, {
                    unref: true
                });
            }
            log(`bg: post-takeover prewarm burst \u2014 respawned ${ce}/${ee_size} stale workers` + (refused > 0 ? `, ${refused} refused` : "") + (lowMemStop ? `, stopped on low memory (${ee.size} left)` : "") + (sweepStaleStop ? `, deferred to sweep on stale anchor \u2014 host slept? (${ee.size} left)` : "") + ` in ${Math.round((Date.now() - me) / 1000)}s`);
            i("tengu_bg_prewarm_burst", {
                candidates: ee_size,
                respawned: ce,
                refused,
                alreadyBooting,
                remaining: ee.size,
                lowMemStop,
                sweepStaleStop,
                durationMs: Date.now() - me
            });
        }
        return {
            handles,
            dispatch: (h)=>void re(h).catch((A)=>c(A)),
            leaseCount: K.leaseCount,
            announceExit: K.announceExit,
            liveHandleCount: ()=>{
                let h = 0;
                for (let A of handles.values()){
                    if (!A.record.outcome) {
                        h++;
                    }
                }
                return h;
            },
            snapshotConsumerCount: ()=>{
                let h = 0;
                for (let A of handles.values()){
                    if (!A.record.outcome && min(A.dispatch)) {
                        h++;
                    }
                }
                return h;
            },
            pendingSettleWrites: ()=>S.size,
            killAll,
            close: async (h)=>{
                let A = h?.displaced ?? false;
                E = true;
                clearInterval(De);
                if (D) {
                    D.dispose();
                    D = null;
                }
                await Promise.all([
                    Ee?.close().catch(()=>{}),
                    K.close({
                        skipUnlink: A || h?.skipPathCleanup
                    }).catch(()=>{})
                ]);
                for (let Y of handles.values()){
                    Y.stop();
                }
                await Promise.allSettled([
                    ...S
                ]);
                if (!A && handles.size === 0 && !B.parseFailed && !h?.skipPathCleanup && O() !== "windows") {
                    await rm(NAe(), {
                        recursive: true,
                        force: true
                    }).catch(()=>{});
                }
            }
        };
    };
    try {
        return await Zr("daemon_bg_manager_start", w, (S)=>Vr(S)?.toLowerCase() ?? "error");
    } catch (error) {
        for (let y of handles.values()){
            y.stop();
        }
        await n?.close().catch(()=>{});
        let u = await aK(e.storageV5).catch(()=>null);
        await o?.close(u?.pid === process.pid ? undefined : {
            skipUnlink: true
        }).catch(()=>{});
        throw error;
    }
}
function et(handles, e, o, n, log, w) {
    e.onSettle.subscribe((S)=>{
        let u = Yr(e.record.short);
        let y = S === "done" ? "done" : S === "killed" ? "stopped" : "failed";
        let detail = e.record.detail;
        let e_sessionIdTaken = e.sessionIdTaken;
        let L = S === "crashed" && detail ? EE(detail.replace(/; respawning$/, "")).replace(/\s*\n\s*/g, " · ") : "";
        log(`bg settled ${e.record.short} (${S})${L ? `: ${L}` : ""}`);
        if (e.shouldDeleteJobDir) {
            ge(n, w.storageV5 && u === Yr(e.record.short) ? Et(w.storageV5, e.record.short, u, (D)=>c(new x(`jobdir retire deleteScope: ${D}`, "jobdir retire deleteScope failed"))).catch((D)=>c(D)) : rm(u, {
                recursive: true,
                force: true
            }).catch((D)=>c(D)));
        } else if (S === "killed" && e.isHandoffKill) {
            i("tengu_bg_handoff_settle", {
                jobSessionId: ye(e.record.sessionId)
            });
        } else {
            ge(n, ro(u, w.storageV5).then((D)=>{
                if (D ? Ra(D) && !(S === "crashed" && D.state === "failed") || S === "done" && D.state === "blocked" && e.dispatch.launch.mode !== "exec" : S !== "crashed" || e.dispatch.source === "spare") {
                    if (!D && e.dispatch.source === "spare") {
                        if (w.storageV5 && u === Yr(e.record.short)) {
                            return w.storageV5.statMeta($e.job(e.record.short, [
                                "state.json"
                            ])).then((H)=>{
                                if (!H.ok && H.error.code === "NotFound") {
                                    return Et(w.storageV5, e.record.short, u, (q)=>c(new x(`spare-sweep deleteScope: ${q}`, "spare-sweep deleteScope failed"))).catch((q)=>c(q));
                                }
                            }, ()=>{});
                        }
                        return access(join(u, "state.json")).then(()=>{}, (H)=>{
                            if (v(H) === "ENOENT") {
                                return rm(u, {
                                    recursive: true,
                                    force: true
                                }).catch((q)=>c(q));
                            }
                        });
                    }
                    return;
                }
                let updatedAt = new Date().toISOString();
                let T = D ?? {
                    state: "working",
                    detail: "",
                    tempo: "active",
                    output: null,
                    children: null,
                    linkScanOffset: 0,
                    template: e.dispatch.launch.mode === "exec" ? "exec" : e.dispatch.agent ?? e.dispatch.routine ?? "bg",
                    routine: e.dispatch.routine,
                    respawnFlags: JTe([
                        ...e.dispatch.respawnFlags
                    ]),
                    intent: e.record.intent,
                    name: e.record.name,
                    sessionId: e.record.sessionId,
                    cwd: e.record.cwd,
                    worktreePath: e.dispatch.worktree?.path ?? e.record.worktreePath,
                    createdAt: new Date(e.dispatch.createdAt).toISOString(),
                    updatedAt,
                    firstTerminalAt: null,
                    backend: "daemon"
                };
                return ic(u, {
                    ...T,
                    state: y,
                    detail: y === "stopped" ? "stopped" : (detail || T.detail).replace(/; respawning$/, ""),
                    tempo: "idle",
                    inFlight: undefined,
                    needs: undefined,
                    block: undefined,
                    ...e_sessionIdTaken && {
                        sessionIdTaken: true
                    },
                    updatedAt,
                    firstTerminalAt: T.firstTerminalAt ?? updatedAt
                }, w.storageV5);
            }).catch((D)=>c(D)));
        }
        ge(n, GJ((D)=>{
            delete D.workers[e.record.short];
        }, w.storageV5).catch((D)=>c(D)));
        if (w.credentials) {
            ge(n, w.credentials.discardSpentCredentialFile(Bot(e.record.short)).catch(()=>{}));
        } else {
            ge(n, unlink(Bot(e.record.short)).catch(()=>{}));
        }
        let P = e.rosterEntry();
        if (O() === "windows") {
            if (w.storageV5) {
                ge(n, rt(w.storageV5, e.record.short, P.ptySock));
            } else {
                ge(n, unlink(Rce(e.record.short)).catch(()=>{}));
                ge(n, unlink(kk(kE(e.record.short))).catch(()=>{}));
                ge(n, unlink(PM(kE(e.record.short))).catch(()=>{}));
                ge(n, unlink(m5(P.ptySock ?? kE(e.record.short))).catch(()=>{}));
            }
        } else {
            if (w.credentials) {
                ge(n, w.credentials.discardSpentCredentialFile(Uot(e.record.short)).catch(()=>{}));
            } else {
                ge(n, unlink(Uot(e.record.short)).catch(()=>{}));
            }
            ge(n, unlink(P.rendezvousSock).catch(()=>{}));
            if (P.ptySock) {
                ge(n, unlink(P.ptySock).catch(()=>{}));
                ge(n, unlink(kk(P.ptySock)).catch(()=>{}));
                ge(n, unlink(PM(P.ptySock)).catch(()=>{}));
                ge(n, unlink(m5(P.ptySock)).catch(()=>{}));
            }
        }
        if (e.dispatch.launch.mode === "exec" && S !== "killed") {
            o();
            setTimeout((p, T, H)=>{
                if (p.get(T) === H) {
                    p.delete(T);
                }
            }, 300000, handles, e.record.short, e).unref();
            return;
        }
        if (e.record.nonce) {
            w.noteSettled(e.record.short, e.record.nonce);
        }
        handles.delete(e.record.short);
        o();
    });
    e.onState.subscribe((S)=>{
        if (S.pid) {
            ge(n, GJ((u)=>{
                u.workers[e.record.short] = e.rosterEntry();
            }, w.storageV5).catch((u)=>c(u)));
        }
        if (S.state === "crashed" || S.state === "resuming") {
            let u = S.state;
            let detail = e.record.detail;
            let tempo = u === "crashed" ? "idle" : "active";
            let E = Yr(e.record.short);
            let L = ro(E, w.storageV5).then((P)=>{
                if (e.record.outcome || !P || Ra(P) || P.state === "blocked" || P.tempo === "blocked") {
                    return;
                }
                if (u === "resuming" && P.state !== "crashed") {
                    return;
                }
                return ic(E, {
                    ...P,
                    state: u,
                    detail,
                    tempo,
                    inFlight: undefined,
                    updatedAt: new Date().toISOString()
                }, w.storageV5);
            }).catch((P)=>c(P));
            ge(n, L);
        }
    });
}
async function hr(handles, log, o = {}) {
    let n = O() === "windows";
    let [a, w] = n ? [
        kKe(),
        ".pid"
    ] : [
        jot(),
        ".sock"
    ];
    let S = n && o.storageV5 ? await xHr(o.storageV5) : await readdir(a).catch(()=>[]);
    let u = new Set(S.filter((R)=>R.endsWith(w)));
    let reaped = 0;
    for (let R of S){
        if (!R.endsWith(w)) {
            let D = (n ? [
                ".err",
                ".late",
                ".err.read"
            ] : [
                ".err",
                ".late",
                ".exec-exit",
                ".err.read"
            ]).find((p)=>R.endsWith(n ? p : `.sock${p}`));
            if (D) {
                let p = R.slice(0, -D.length);
                let T = n ? p.lastIndexOf("-pty-") : -1;
                let H = n ? T >= 0 ? `${p.slice(T + 5)}.pid` : "" : p;
                if (H && !u.has(H)) {
                    if (n && o.storageV5) {
                        o.storageV5.delete($e.daemon([
                            "pty-pids",
                            R
                        ])).catch(()=>{});
                    } else {
                        unlink(join(a, R)).catch(()=>{});
                    }
                }
            }
            continue;
        }
        let E = R.slice(0, -w.length);
        if (handles.has(E)) {
            continue;
        }
        reaped++;
        let L = Rce(E);
        j1e(kE(E), o.storageV5).then((P)=>{
            let D = kk(kE(E));
            let p = PM(kE(E));
            let T = m5(kE(E));
            if (!n) {
                vqe(E, "failed", "reaped (roster gap)", {
                    resumable: "wake-only"
                }, o.storageV5);
                unlink(p).catch(()=>{});
                unlink(T).catch(()=>{});
                return;
            }
            let H = ()=>{
                if (o.storageV5) {
                    rt(o.storageV5, E, undefined);
                } else {
                    unlink(L).catch(()=>{});
                    unlink(D).catch(()=>{});
                    unlink(p).catch(()=>{});
                    unlink(T).catch(()=>{});
                }
            };
            if (P) {
                vqe(E, "failed", "reaped (roster gap)", {
                    resumable: "wake-only"
                }, o.storageV5);
                H();
                return;
            }
            (o.storageV5 ? PHr(o.storageV5, E) : Ba(L, ONt)).then((q)=>{
                if (q === null) {
                    return;
                }
                if (!_a(Number(q))) {
                    vqe(E, "failed", "reaped (roster gap)", {
                        resumable: "wake-only"
                    }, o.storageV5);
                    H();
                }
            }).catch(()=>{});
        });
    }
    if (reaped) {
        log(`bg orphan-reap: ${reaped} roster-less pty host(s)`);
        i("tengu_bg_orphan_reap", {
            reaped
        });
    }
}
const wr = {
    namespace: "daemon",
    relPath: [
        "pty-pids"
    ]
};
async function _r(storageV5) {
    if (j() && storageV5 !== undefined) {
        await fcn(storageV5);
        return;
    }
    await mkdir(Q5t(), {
        recursive: true,
        mode: 448
    });
}
async function kr(storageV5) {
    if (j() && storageV5 !== undefined) {
        await storageV5.ensureScope(wr).catch(()=>{});
        return;
    }
    await mkdir(kKe(), {
        recursive: true
    }).catch(()=>{});
}
async function rt(storageV5, e, o) {
    for (let n of [
        basename(Rce(e)),
        basename(kk(kE(e))),
        basename(PM(kE(e))),
        basename(m5(o ?? kE(e)))
    ]){
        await storageV5.delete($e.daemon([
            "pty-pids",
            n
        ])).catch(()=>{});
    }
}
async function vr(r) {
    let e = await lstat(r).catch(()=>null);
    if (e === null || e.isDirectory()) {
        return false;
    }
    await rm(r, {
        recursive: true,
        force: true
    });
    return true;
}
async function Et(storageV5, jobId, o, n) {
    if (await vr(o)) {
        return;
    }
    let a = await storageV5.deleteScope({
        namespace: "job",
        jobId
    });
    if (!a.ok) {
        n(a.error.code);
    }
}
const Sr = /^[0-9A-Za-z.+_-]{1,100}$/;
function Ve(log, e, o, n) {
    if (!o.retired) {
        return false;
    }
    let a = Math.round(o.idleMs / 60000);
    let w = a >= 120 ? `${Math.round(a / 60)}h` : `${a}m`;
    let S = e.record.cliVersion && Sr.test(e.record.cliVersion) ? e.record.cliVersion : "unrecognized";
    let u = e.isVersionStale ? `, worker ${S} (daemon ${({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION})` : "";
    log(`bg retire ${e.record.short}: ${o.cause}, idle ${w}${u}${n ? ` [${n}]` : ""}`);
    return true;
}
function ge(r, e) {
    r.add(e);
    e.finally(()=>r.delete(e));
}
const Er = 60000;
const $r = 5000;
const Pr = 300000;
const Dr = 30000;
const Rr = 60000;
const Ue = 2000;
const Ar = 300000;
function Rt(r) {
    return Math.round(r * (0.5 + Math.random()));
}
function Cr(consecutiveCrashes) {
    return Rt(Math.min(1000 * 2 ** consecutiveCrashes, Pr));
}
const He = new WeakMap;
class Ke {
    id;
    kind;
    config;
    invocation;
    logger;
    authManager;
    onStateChange;
    child = null;
    spawnedAt = 0;
    stopping = false;
    consecutiveCrashes = 0;
    temporaryEndsInARow = 0;
    backoffTimer = null;
    wrapperParkLogged = false;
    exitPromise = null;
    lastBusy = false;
    lastBusyAt = 0;
    constructor(r, e, o, n, a, w, S){
        this.id = r;
        this.kind = e;
        this.config = o;
        this.invocation = n;
        this.logger = a;
        this.authManager = w;
        this.onStateChange = S;
    }
    get status() {
        let pid = this.child?.pid;
        if (pid === undefined) {
            return null;
        }
        let e = {
            pid,
            startedAt: this.spawnedAt
        };
        let dir = Be(this.config);
        let sessions = He.get(this) ?? 0;
        if (sessions > 0 && dir !== undefined) {
            e.servedFolder = {
                dir,
                sessions
            };
        }
        return e;
    }
    isBusy() {
        return this.lastBusy && this.child !== null && Date.now() - this.lastBusyAt < Ar;
    }
    start(r = 0) {
        this.stopping = false;
        if (r > 0) {
            this.scheduleRespawn(r);
        } else {
            this.spawn();
        }
    }
    updateConfig(r) {
        this.config = r;
    }
    async stop(cause) {
        this.stopping = true;
        this.temporaryEndsInARow = 0;
        if (this.backoffTimer) {
            clearTimeout(this.backoffTimer);
            this.backoffTimer = null;
        }
        let child = this.child;
        if (!child) {
            return;
        }
        let exitPromise = this.exitPromise;
        let n = false;
        if (typeof child.send === "function") {
            try {
                n = child.send(cause !== undefined ? {
                    type: "shutdown",
                    cause
                } : {
                    type: "shutdown"
                });
            } catch  {}
        }
        if (O() !== "windows" || !n) {
            child.kill("SIGTERM");
        }
        let a = setTimeout((w)=>w.kill("SIGKILL"), $r, child);
        a.unref();
        if (exitPromise) {
            await exitPromise;
        }
        clearTimeout(a);
    }
    spawn() {
        let r = tf();
        if (r) {
            this.logger.write(this.id, `not started: ${r}`);
            if (!this.wrapperParkLogged) {
                this.wrapperParkLogged = true;
                m("agent_launcher", "registry_worker_refused");
            }
            this.scheduleRespawn(Rr);
            return;
        }
        let e = Date.now();
        this.spawnedAt = e;
        let o = E4(this.invocation);
        let n = spawn(o.cmd, [
            ...o.prefixArgs,
            "--daemon-worker",
            this.kind,
            ...this.temporaryEndsInARow > 0 ? [
                String(this.temporaryEndsInARow)
            ] : []
        ], {
            stdio: this.authManager ? [
                "pipe",
                "pipe",
                "pipe",
                "ipc"
            ] : [
                "pipe",
                "pipe",
                "pipe"
            ],
            windowsHide: true
        });
        this.child = n;
        this.onStateChange?.();
        n.stdin.on("error", (u)=>{
            this.logger.write(this.id, `stdin write error: ${u.message}`);
        });
        n.stdin.write(_({
            config: this.config,
            initialAccessToken: this.authManager?.getAccessToken()
        }) + `
`);
        n.stdin.end();
        if (this.authManager) {
            this.authManager.attachWorker(n);
        }
        n.on("message", (u)=>{
            if (this.child === n && typeof u === "object" && u !== null && "type" in u && u.type === "rc_busy" && "busy" in u && typeof u.busy === "boolean") {
                this.lastBusy = u.busy;
                this.lastBusyAt = Date.now();
            }
            if (this.child === n && this.kind === "remoteControl" && typeof u === "object" && u !== null && "type" in u && u.type === "rc_serving_tools" && "count" in u && typeof u.count === "number" && Number.isInteger(u.count) && u.count >= 0 && u.count <= _8n && u.count !== (He.get(this) ?? 0)) {
                He.set(this, u.count);
                this.onStateChange?.();
            }
        });
        let a = createInterface({
            input: n.stdout
        });
        a.on("line", (u)=>this.logger.write(this.id, u));
        let w = createInterface({
            input: n.stderr
        });
        w.on("line", (u)=>this.logger.write(this.id, u));
        n.on("spawn", ()=>{
            this.wrapperParkLogged = false;
            g("daemon_worker_spawn");
        });
        let S = false;
        this.exitPromise = new Promise((resolvePromise)=>{
            let y = (R, E)=>{
                if (S) {
                    return;
                }
                S = true;
                a.close();
                w.close();
                this.child = null;
                this.lastBusy = false;
                He.delete(this);
                this.onStateChange?.();
                if (this.authManager) {
                    this.authManager.detachWorker(n);
                }
                this.exitPromise = null;
                this.onExit(R, E, e);
                resolvePromise();
            };
            n.on("exit", y);
            n.on("error", (R)=>{
                this.logger.write(this.id, `spawn error: ${R.message}`);
                m("daemon_worker_spawn", z(R) ? "daemon_worker_spawn_enoent" : "daemon_worker_spawn_error");
                let E = $p()[0];
                let L = v(R);
                if (E && (z(R) || L === "EACCES" || L === "EPERM")) {
                    this.logger.write(this.id, z(R) ? `not started: launcher \`${E}\` was deleted or moved (ENOENT) \u2014 fix CLAUDE_CODE_PROCESS_WRAPPER; retrying in the background` : `not started: launcher \`${E}\` cannot be executed (${L}) \u2014 fix CLAUDE_CODE_PROCESS_WRAPPER or the launcher's permissions; retrying in the background`);
                    if (!this.wrapperParkLogged) {
                        this.wrapperParkLogged = true;
                        m("agent_launcher", "registry_worker_refused");
                    }
                    y(vxe, null);
                    return;
                }
                if (!z(R)) {
                    y(null, null);
                    return;
                }
                tAt().then((P)=>{
                    if (P && P !== this.invocation.target) {
                        this.logger.write(this.id, `execPath gone (version GC?) \u2014 re-resolved to ${P}`);
                        this.invocation = E4({
                            cmd: P,
                            prefixArgs: [],
                            target: P
                        });
                        this.consecutiveCrashes = 0;
                    }
                    y(null, null);
                });
            });
        });
    }
    onExit(r, e, o) {
        if (this.stopping) {
            return;
        }
        let n = Date.now() - o;
        this.temporaryEndsInARow = r === vxe ? this.temporaryEndsInARow + 1 : 0;
        if (r === vxe) {
            let w = Rt(Dr);
            this.logger.write(this.id, `exited tempfail code=${r} uptime=${n}ms \u2014 retry in ${w}ms`);
            this.scheduleRespawn(w);
            return;
        }
        if (r === E1) {
            this.logger.write(this.id, `exited permanently code=${r} uptime=${n}ms \u2014 will not respawn`);
            i("tengu_daemon_worker_permanent_exit", {
                exit_code: r ?? undefined,
                uptime_ms: n,
                worker_kind: d(this.kind)
            });
            return;
        }
        if (r === 0 && n < hYe && $p().length > 0) {
            this.logger.write(this.id, `not started: launcher \`${$p()[0]}\` exited ${n}ms after spawn, before ${this.kind} started \u2014 it must exec its arguments, not daemonize; will not respawn until the launcher is fixed and the daemon restarts`);
            if (!this.wrapperParkLogged) {
                this.wrapperParkLogged = true;
                m("agent_launcher", "registry_worker_launcher_forked");
            }
            i("tengu_daemon_worker_permanent_exit", {
                exit_code: r ?? undefined,
                uptime_ms: n,
                worker_kind: d(this.kind)
            });
            return;
        }
        if (r !== 0 || n < Er) {
            this.consecutiveCrashes++;
            if ($p().length > 0) {
                access(this.invocation.target).catch(()=>tAt()).then((S)=>{
                    if (typeof S === "string" && S && S !== this.invocation.target) {
                        this.logger.write(this.id, `target \`${this.invocation.target}\` is gone (version GC?) \u2014 re-resolved to ${S}`);
                        this.invocation = E4({
                            cmd: S,
                            prefixArgs: [],
                            target: S
                        });
                        this.consecutiveCrashes = 0;
                    }
                }).catch(()=>{});
            }
            let w = Cr(this.consecutiveCrashes);
            this.logger.write(this.id, `exited code=${r} sig=${e} uptime=${n}ms consecutive=${this.consecutiveCrashes} backoff=${w}ms`);
            i("tengu_daemon_worker_crash", {
                consecutive: this.consecutiveCrashes,
                exit_code: r ?? undefined,
                uptime_ms: n,
                worker_kind: d(this.kind)
            });
            this.scheduleRespawn(w);
        } else {
            this.consecutiveCrashes = 0;
            this.logger.write(this.id, `exited code=${r} sig=${e} uptime=${n}ms (clean) \u2014 respawning`);
            this.spawn();
        }
    }
    scheduleRespawn(r) {
        if (this.backoffTimer) {
            clearTimeout(this.backoffTimer);
        }
        this.backoffTimer = setTimeout(()=>{
            this.backoffTimer = null;
            if (!this.stopping) {
                this.spawn();
            }
        }, r);
        this.backoffTimer.unref();
    }
}
function Be(r) {
    if (typeof r !== "object" || r === null || !("dir" in r)) {
        return;
    }
    let { dir } = r;
    if (typeof dir === "string") {
        return dir;
    }
}
const Tr = 1000;
const Ir = 5000;
function At(r) {
    return rJe(r);
}
function Mr(r) {
    let e = 0;
    for (let o of Object.keys(_ie)){
        e += (r[o] ?? []).length;
    }
    return e;
}
async function Ct({ jsonPath, invocation, logger, authManager, watch = Yqn, storageV5, onFlagsRefreshed = eu }) {
    let y = new Map;
    let R = Kqn();
    let E = Promise.resolve();
    let L = false;
    let P;
    let D = false;
    let p = false;
    function T() {
        if (L || p) {
            return;
        }
        clearTimeout(P);
        P = undefined;
        L = true;
        E = E.then(async ()=>{
            L = false;
            if (p) {
                return;
            }
            let M = {};
            for (let [V, Z] of y){
                let pe = Z.status;
                if (pe) {
                    M[V] = pe;
                }
            }
            if (await rBr(M, storageV5)) {
                D = false;
            } else if (!D) {
                D = true;
                P = setTimeout(T, Ir);
                P.unref();
            }
        }).catch((M)=>c(M));
    }
    let H = await _1e(jsonPath, storageV5);
    if (H.ok) {
        R = H.config;
        for (let M of H.unknownKeys){
            logger.write("supervisor", `unknown config key '${M}' \u2014 upgrade claude?`);
        }
    } else {
        logger.write("supervisor", `config load failed: ${H.error} \u2014 idling`);
    }
    await authManager.ready;
    let q = new Set;
    function le() {
        let M = 0;
        for (let V of Object.keys(_ie)){
            let Z = R[V] ?? [];
            if (!At(V)) {
                if (Z.length > 0 && !q.has(V)) {
                    q.add(V);
                    logger.write("supervisor", `not starting ${Z.length} ${V} worker(s): not available for this account`);
                }
                continue;
            }
            q.delete(V);
            for(let pe = 0; pe < Z.length; pe++){
                let be = `${V}:${pe}`;
                if (y.has(be)) {
                    continue;
                }
                let N = new Ke(be, V, Z[pe], invocation, logger, authManager, T);
                y.set(be, N);
                N.start(M++ * Ue);
                logger.write("supervisor", `spawned ${be}`);
            }
        }
    }
    le();
    T();
    let oe = async ()=>{
        let M = await _1e(jsonPath, storageV5);
        if (!M.ok) {
            logger.write("supervisor", `config reload failed: ${M.error} \u2014 keeping last-good config`);
            return;
        }
        for (let N of M.unknownKeys){
            logger.write("supervisor", `unknown config key '${N}' \u2014 upgrade claude?`);
        }
        let V = _Do(R, M.config);
        R = M.config;
        let Z = new Set((M.config.remoteControl ?? []).map(Be));
        for (let { id, kind, previousConfig } of V.stop){
            let ie = y.get(id);
            if (ie) {
                let Se = Be(previousConfig);
                let ke = kind === "remoteControl" && Se !== undefined && Z.has(Se);
                await ie.stop(ke ? "reload" : undefined);
                y.delete(id);
                logger.write("supervisor", `stopped ${id}`);
            }
        }
        for (let { id, kind, previousConfig } of V.restart){
            let ie = y.get(id);
            if (ie) {
                let Se = Be(previousConfig);
                let ke = kind !== "remoteControl" || Se !== undefined && Z.has(Se);
                await ie.stop(ke ? "reload" : undefined);
            }
        }
        let pe = 0;
        for (let { id, config } of V.restart){
            let se = y.get(id);
            if (se) {
                se.updateConfig(config);
                se.start(pe++ * Ue);
                logger.write("supervisor", `restarted ${id}`);
            }
        }
        let be = 0;
        for (let { id, kind, config } of V.start){
            if (!At(kind)) {
                continue;
            }
            let ie = new Ke(id, kind, config, invocation, logger, authManager, T);
            y.set(id, ie);
            ie.start(be++ * Ue);
            logger.write("supervisor", `spawned ${id}`);
        }
        if (V.stop.length + V.start.length + V.restart.length > 0) {
            logger.write("supervisor", `reload: stopped=${V.stop.length} started=${V.start.length} restarted=${V.restart.length}`);
            i("tengu_daemon_config_reload", {
                stopped: V.stop.length,
                started: V.start.length,
                restarted: V.restart.length
            });
        }
    };
    let ue = Promise.resolve();
    let re = watch(jsonPath, ()=>{
        ue = ue.then(oe).catch((M)=>c(M));
    });
    let he = false;
    let K = ()=>{};
    function disposeWatcher() {
        if (he) {
            return;
        }
        he = true;
        re();
        K();
    }
    K = onFlagsRefreshed(()=>{
        ue = ue.then(()=>{
            if (!he) {
                le();
                T();
            }
        }).catch((M)=>c(M));
    });
    return {
        workerCount: ()=>Mr(R),
        hasOAuthConsumer: ()=>{
            for (let M of y.values()){
                if (_ie[M.kind].needsOAuth) {
                    return true;
                }
            }
            return false;
        },
        busyWorkerCount: ()=>{
            let M = 0;
            for (let V of y.values()){
                if (V.isBusy()) {
                    M++;
                }
            }
            return M;
        },
        disposeWatcher,
        drainReloads: ()=>ue,
        stop: async (M)=>{
            disposeWatcher();
            await ue;
            await Promise.all(Array.from(y.values()).map((V)=>V.stop(M)));
            p = true;
            clearTimeout(P);
            await Ge(E, Tr);
            await oBr(storageV5);
        }
    };
}
const Lr = 60000;
const Wr = 100;
const It = 5000;
const Fr = 1800000;
const jr = hG + It;
async function Tt(r) {
    try {
        let target = await realpath(r);
        let o = await stat(target);
        return {
            target,
            mtimeMs: o.mtimeMs
        };
    } catch (error) {
        if (z(error)) {
            return null;
        }
        throw error;
    }
}
function Gr(r, e) {
    if (r.target !== e.target) {
        return true;
    }
    return !s5() && r.mtimeMs !== e.mtimeMs;
}
function Hr(r) {
    if (xs(r) && r.syscall === "listen" && (r.code === "EADDRINUSE" || r.code === "EACCES")) {
        t(`bg manager start failed (listen): ${r.code} ${r.message}`, {
            level: "warn"
        });
        return;
    }
    c(r);
}
async function Mt({ jsonPath, logPath, origin, spawnedBy, signal, watch = Yqn, createAuth = BNo, staleCheckIntervalMs = Lr, idleGraceMs = It, startupIdleGraceMs = jr, upgradeBusyDeferCapMs = Fr, storageV5 }) {
    let D = ME(storageV5);
    let logger = await Le(logPath);
    logger.write("supervisor", `\u2500\u2500\u2500 daemon start \u2500\u2500\u2500 version=${{
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }.VERSION} pid=${process.pid} origin=${origin}`);
    Ea();
    let T = await lw(nQe, storageV5);
    let H = false;
    if (T && T.origin === "transient" && origin !== "transient") {
        H = true;
        logger.write("supervisor", `transient daemon running (pid=${T.pid}, origin=transient) \u2014 asking it to yield to origin=${origin}`);
        let s = await Jm({
            proto,
            op: "yield"
        });
        if (s.ok && s.op === "yield" && s.yielding) {
            let C = Date.now() + 5000;
            while(T && Date.now() < C){
                await Q(100);
                T = await lw(nQe, storageV5);
            }
            i("tengu_daemon_yield_takeover", {
                ok: !T,
                new_origin: d(origin)
            });
            if (T) {
                logger.write("supervisor", "yield acked but lock still held after 5s — refusing to start");
            }
        } else {
            logger.write("supervisor", s.ok ? "existing daemon refused to yield (it reports origin!=transient)" : `existing daemon unreachable on control socket (${EE(s.error)}); not taking over`);
        }
    }
    if (T) {
        let s = H ? `origin=${T.origin ?? "unknown"}; asked it to yield but the handover failed (see above)` : origin === "transient" ? `origin=${T.origin ?? "unknown"}; an on-demand daemon never displaces a running one` : `origin=${T.origin ?? "unknown"}; only a transient daemon can be displaced`;
        let C = O() === "windows" ? `Stop it with \`taskkill /PID ${T.pid}\`, then retry.` : "Run `claude daemon stop` to stop it, then retry.";
        logger.write("supervisor", `another daemon is already running (pid=${T.pid}, version=${T.version}, ${s}). ${C}`);
        if (H) {
            f("daemon_start", "daemon_start_yield_failed");
        } else {
            g("daemon_start");
        }
        await logger.close();
        return {
            upgradeDetected: false,
            exitCode: 1
        };
    }
    let invocation = uu({
        pinToCurrentBinary: true
    });
    let le = s5() ? AHr() : invocation.target;
    let oe = await Tt(le).catch((s)=>{
        if (xs(s)) {
            t(`binaryIdentity(${le}) failed at startup: ${s.code}`, {
                level: "error"
            });
        } else {
            c(s);
        }
        return null;
    });
    let ue = await Fl(process.pid);
    if (ue === undefined) {
        await Q(S8n);
        ue = await Fl(process.pid, {
            skipCache: true
        });
        if (ue === undefined) {
            logger.write("supervisor", "own process start-time probe failed twice — writing a procStart-less lock; kill paths will refuse to signal this daemon");
        }
    }
    let re = {
        pid: process.pid,
        version: {
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
        jsonPath,
        logPath,
        startedAt: Date.now(),
        origin,
        spawnedBy,
        ...B7(ue),
        launchTarget: oe?.target,
        processWrapper: GB()
    };
    let acquired = await Djo(re, storageV5);
    if (!acquired) {
        let s = await aK(storageV5);
        if (s) {
            let G = false;
            let ae = null;
            try {
                process.kill(s.pid, 0);
                G = await Xfn(s.pid) && await bBt(s.pid, p0(s), nQe);
            } catch (error) {
                if (v(error) !== "ESRCH") {
                    ae = await Jfn(s);
                    G = ae === null;
                    if (ae !== null) {
                        logger.write("supervisor", `daemon.lock names pid=${s.pid}, which this user cannot signal, but ${ae === "predates_boot" ? "the lock predates this boot" : "that pid now belongs to another process"} \u2014 replacing the stale lock`);
                    }
                }
            }
            if (G) {
                logger.write("supervisor", `another daemon won the lock race (pid=${s.pid}) \u2014 exiting`);
                g("daemon_start");
                await logger.close();
                return {
                    upgradeDetected: false,
                    exitCode: 1
                };
            }
            acquired = await b8n(re, storageV5);
            if (ae !== null) {
                i("tengu_daemon_stale_lock_replaced", {
                    proof: ae === "predates_boot" ? b("predates_boot") : b("pid_recycled"),
                    acquired,
                    holder_age_ms: Math.max(0, Date.now() - s.startedAt),
                    holder_version_skew: s.version !== ({
                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://code.claude.com/docs/en/overview",
                        VERSION: "2.1.296",
                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                        BUILD_TIME: "2026-10-09T01:31:52Z",
                        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                        DD_SOURCEMAP_GROUP: "default"
                    }).VERSION
                });
            }
        } else {
            acquired = await b8n(re, storageV5);
        }
        if (!acquired) {
            logger.write("supervisor", "another daemon won the lock race — exiting");
            g("daemon_start");
            await logger.close();
            return {
                upgradeDetected: false,
                exitCode: 1
            };
        }
        await Q(Wr);
        let C = await aK(storageV5).catch(()=>re);
        if (!C || C.pid !== re.pid || C.startedAt !== re.startedAt) {
            logger.write("supervisor", `another daemon won the lock race (lock now ${C ? `held by pid=${C.pid}` : "gone"}) \u2014 exiting`);
            if (C) {
                g("daemon_start");
            } else {
                f("daemon_start", "lock_vanished_after_replace");
            }
            await logger.close();
            return {
                upgradeDetected: false,
                exitCode: 1
            };
        }
    }
    let K = async ()=>{
        for(let s = 0;; s++){
            try {
                let C = await lw(nQe, storageV5);
                if (C !== null && C.pid !== re.pid) {
                    return C.pid;
                }
                return null;
            } catch (error) {
                if (s === 0) {
                    await Q(S8n);
                    continue;
                }
                t(`daemon displacement probe: daemon.lock read failed twice (${error instanceof Error ? error.message : String(error)}) \u2014 treating as non-displaced`, {
                    level: "warn"
                });
                return null;
            }
        }
    };
    let B = null;
    let M = {
        manager: null
    };
    let authManager = createAuth(signal, (s)=>logger.write("supervisor", s), ()=>B?.hasOAuthConsumer() ?? false, storageV5, D, ()=>origin === "service" && O() === "macos" && (M.manager?.snapshotConsumerCount() ?? 0) > 0);
    let upgradeDetected = false;
    let pe = null;
    let be = false;
    let N = null;
    let we = false;
    let se = false;
    let ie = false;
    let Se = false;
    let ke = false;
    let displaced = false;
    let isShuttingDown = ()=>signal.aborted || ie || we || ke || upgradeDetected || se || Se || displaced;
    let De = null;
    let onYield = ()=>{
        if (origin !== "transient") {
            return false;
        }
        if (!ie) {
            ie = true;
            logger.write("supervisor", "yielding to a foreground/service daemon — bg workers will be re-adopted");
            i("tengu_daemon_yield", {});
            De?.();
        }
        return true;
    };
    let Oe = async ()=>{
        if (upgradeDetected || !oe) {
            return upgradeDetected;
        }
        if (isShuttingDown()) {
            return false;
        }
        let s;
        try {
            s = await Tt(le);
        } catch (error) {
            if (xs(error)) {
                t(`binaryIdentity(${le}) poll failed: ${error.code}`, {
                    level: "error"
                });
            } else {
                c(error);
            }
            if (N !== null) {
                if ((B?.busyWorkerCount() ?? 0) === 0) {
                    if (!N.capExpiredEmitted) {
                        i("tengu_daemon_upgrade_deferred_busy", {
                            busy_workers: 0,
                            deferred_ms: (N.suspendedAt ?? Date.now()) - N.start,
                            cap_expired: false,
                            phase: b("resolved")
                        });
                    }
                    N = null;
                } else if (N.suspendedAt === null) {
                    N.suspendedAt = Date.now();
                }
            }
            return false;
        }
        if (isShuttingDown()) {
            return false;
        }
        if (N !== null && N.suspendedAt !== null) {
            N.start += Date.now() - N.suspendedAt;
            N.suspendedAt = null;
        }
        if (s !== null && !Gr(oe, s)) {
            pe = null;
            N = null;
            return false;
        }
        if (s !== null && G0o(oe.target, s.target) && k("tengu_daemon_refuse_stale_upgrade", true)) {
            N = null;
            if (pe !== s.target) {
                pe = s.target;
                logger.write("supervisor", `binary at ${le} changed to an OLDER build (${oe.target} \u2192 ${s.target}) \u2014 refusing self-restart for upgrade; keeping the running build (\`claude daemon stop --any\` to override)`);
                i("tengu_daemon_upgrade_refused_stale_binary", {});
            }
            return false;
        }
        let C = tf();
        let G = $p();
        if (origin !== "service" && (G.length > 0 || C !== null)) {
            if (!await JD()) {
                if (!be) {
                    be = true;
                    logger.write("supervisor", C !== null ? `binary at ${le} changed but CLAUDE_CODE_PROCESS_WRAPPER cannot be used (${C}) \u2014 deferring the upgrade restart until it is fixed (re-checked every poll)` : `binary at ${le} changed but launcher \`${G[0]}\` is not runnable right now \u2014 deferring the upgrade restart until it is (re-checked every poll)`);
                    f("agent_launcher", "upgrade_deferred_launcher_unrunnable");
                }
                N = null;
                return false;
            }
            be = false;
        }
        let busy_workers = B?.busyWorkerCount() ?? 0;
        if (busy_workers > 0 && s !== null && k("tengu_daemon_upgrade_defer_busy", true)) {
            if (N === null) {
                N = {
                    target: s.target,
                    start: Date.now(),
                    logged: false,
                    suspendedAt: null,
                    capExpiredEmitted: false
                };
            } else if (N.target !== s.target) {
                N.target = s.target;
                N.logged = false;
            }
            if (Date.now() - N.start < upgradeBusyDeferCapMs) {
                if (!N.logged) {
                    N.logged = true;
                    logger.write("supervisor", `binary at ${le} changed but ${busy_workers} registry worker(s) report a mid-turn session \u2014 deferring the upgrade restart until idle (re-checked every poll, capped at ${Math.round(upgradeBusyDeferCapMs / 60000)}m)`);
                    i("tengu_daemon_upgrade_deferred_busy", {
                        busy_workers,
                        cap_expired: false,
                        phase: b("start")
                    });
                }
                return false;
            }
            if (!N.capExpiredEmitted) {
                N.capExpiredEmitted = true;
                logger.write("supervisor", `busy-worker upgrade defer cap reached \u2014 proceeding with the restart while ${busy_workers} worker(s) are still busy`);
                i("tengu_daemon_upgrade_deferred_busy", {
                    busy_workers,
                    deferred_ms: Date.now() - N.start,
                    cap_expired: true,
                    phase: b("cap_expired")
                });
            }
        } else {
            if (N !== null) {
                i("tengu_daemon_upgrade_deferred_busy", {
                    busy_workers,
                    deferred_ms: Date.now() - N.start,
                    cap_expired: false,
                    phase: b("resolved")
                });
            }
            N = null;
        }
        if (isShuttingDown()) {
            return false;
        }
        upgradeDetected = true;
        if (s === null) {
            logger.write("supervisor", `binary at ${le} was deleted (was ${oe.target}) \u2014 exiting for upgrade`);
        } else {
            let ve = oe.target === s.target ? "mtime changed" : `${oe.target} \u2192 ${s.target}`;
            logger.write("supervisor", `binary at ${le} changed (${ve}) \u2014 self-restarting for upgrade`);
        }
        De?.();
        return true;
    };
    let h = null;
    let ever_had_keep_alive = false;
    let Y = ()=>(M.manager?.leaseCount() ?? 0) + (M.manager?.liveHandleCount() ?? 0);
    let onKeepAliveChange = ()=>{
        if (origin !== "transient") {
            return;
        }
        if (ke || upgradeDetected || we || ie || Se || signal.aborted) {
            return;
        }
        if (Y() > 0) {
            ever_had_keep_alive = true;
            if (h) {
                clearTimeout(h);
                h = null;
            }
            return;
        }
        if (h) {
            return;
        }
        let grace_ms = ever_had_keep_alive ? idleGraceMs : startupIdleGraceMs;
        h = setTimeout(()=>{
            h = null;
            if (Y() > 0) {
                ever_had_keep_alive = true;
                return;
            }
            if (signal.aborted || upgradeDetected) {
                return;
            }
            if (N !== null) {
                onKeepAliveChange();
                return;
            }
            ke = true;
            let cfg_workers = B?.workerCount() ?? 0;
            logger.write("supervisor", `idle ${Math.round(grace_ms / 1000)}s with no clients \u2014 exiting` + (cfg_workers > 0 ? ` (stopping ${cfg_workers} configured workers)` : ""));
            i("tengu_daemon_idle_exit", {
                grace_ms,
                never_had_client: !ever_had_keep_alive,
                cfg_workers
            });
            De?.();
        }, grace_ms);
    };
    authManager.ready.then(()=>Pt((s)=>logger.write("bg", s), {
            getAuthSnapshot: origin === "service" ? ()=>authManager.getAuthSnapshot() : undefined,
            onNudge: async ()=>({
                    restarting: await Oe(),
                    upgradePending: N !== null
                }),
            onShutdown: ()=>{
                we = true;
                logger.write("supervisor", "shutdown requested via control socket");
                De?.();
            },
            onYield,
            onKeepAliveChange,
            storageV5,
            credentials: D,
            isShuttingDown
        })).then((s)=>{
        if (isShuttingDown()) {
            return void (async ()=>{
                if (se && !displaced && await K() === null) {
                    s.killAll("SIGTERM");
                }
                await s.close({
                    skipPathCleanup: true
                });
            })().catch((G)=>c(FAt(G)));
        }
        M.manager = s;
        onKeepAliveChange();
    }).catch((s)=>{
        Hr(FAt(s));
        if (isShuttingDown()) {
            return;
        }
        let C = v(s);
        let G = `${C ? `[${C}] ` : ""}${EE(W(s).message.replace(/\s*\n\s*/g, " "))}`;
        if (origin === "service") {
            logger.write("supervisor", `bg manager failed to start: ${G} \u2014 control pipe unavailable; bg sessions disabled (registry workers keep running)`);
            Ljo(re, storageV5).catch(c);
            return;
        }
        logger.write("supervisor", `bg manager failed to start: ${G} \u2014 control pipe unavailable; exiting`);
        process.stderr.write(`bg manager failed to start: ${G}
`);
        Se = true;
        De?.();
    });
    B = await Ct({
        jsonPath,
        invocation,
        logger,
        authManager,
        watch,
        storageV5
    });
    let worker_count = B.workerCount();
    logger.write("supervisor", `workers=${worker_count}`);
    if (worker_count > 0) {
        logger.write("supervisor", "daemon.json has configured workers but they do not pin the supervisor — they stop when the last client lease and bg job are gone");
    }
    i("tengu_daemon_start", {
        worker_kinds: Object.keys(_ie).length,
        worker_count,
        origin: d(origin)
    });
    g("daemon_start");
    onKeepAliveChange();
    let me = null;
    try {
        await new Promise((resolvePromise)=>{
            De = resolvePromise;
            if (signal.aborted || upgradeDetected || ke || we || ie || Se) {
                return void resolvePromise();
            }
            signal.addEventListener("abort", ()=>resolvePromise(), {
                once: true
            });
            if (!oe) {
                logger.write("supervisor", `binary identity unresolvable at ${le}; upgrade polling disabled`);
            }
            me = setInterval(()=>{
                if (signal.aborted || upgradeDetected || se || ie) {
                    if (me) {
                        clearInterval(me);
                        me = null;
                    }
                    return;
                }
                Oe();
                if (origin === "service" && D7r()) {
                    se = true;
                    logger.write("supervisor", "service recall flag set — draining workers and uninstalling service");
                    De?.();
                }
                if (origin === "transient" && !ie) {
                    K().then((displaced_by_pid)=>{
                        if (displaced_by_pid !== null && !ie && !signal.aborted) {
                            displaced = true;
                            ie = true;
                            logger.write("supervisor", `lockfile now held by pid=${displaced_by_pid} \u2014 displaced, yielding`);
                            i("tengu_daemon_yield", {
                                displaced: true,
                                displaced_by_pid
                            });
                            De?.();
                        }
                    }).catch((C)=>c(FAt(C)));
                }
            }, staleCheckIntervalMs);
        });
    } finally{
        De = null;
        if (me) {
            clearInterval(me);
            me = null;
        }
        if (h) {
            clearTimeout(h);
            h = null;
        }
    }
    if (upgradeDetected) {
        i("tengu_daemon_self_restart_on_upgrade", {});
    }
    if (se) {
        i("tengu_copper_lantern", {});
    }
    B.disposeWatcher();
    await B.drainReloads();
    if (!displaced) {
        let s = await K();
        if (s !== null) {
            displaced = true;
            logger.write("supervisor", `lockfile now held by pid=${s} \u2014 displaced; leaving successor's control.sock in place`);
        }
    }
    let ce = upgradeDetected && !displaced ? "upgrade" : se ? "service_recall" : displaced ? "displaced" : ie ? "yield" : we ? "shutdown_op" : ke ? "idle_exit" : Se ? "bg_manager_failed" : signal.aborted ? "signal" : "unknown";
    let _e = Date.now() - re.startedAt;
    logger.write("supervisor", `shutting down (cause=${ce}, uptime=${Math.round(_e / 1000)}s, leases=${M.manager?.leaseCount() ?? -1}, live_workers=${M.manager?.liveHandleCount() ?? -1})`);
    i("tengu_daemon_exit", {
        cause: d(ce),
        uptime_ms: _e,
        lease_count: M.manager?.leaseCount() ?? -1,
        live_handles: M.manager?.liveHandleCount() ?? -1,
        ever_had_keep_alive,
        origin: d(origin)
    });
    M.manager?.announceExit(ce);
    let Re = false;
    let Pe = async ()=>{
        if (Re) {
            return;
        }
        Re = true;
        let s = await aK(storageV5);
        if (s && s.pid === re.pid && s.startedAt === re.startedAt) {
            await Njo(storageV5);
        }
    };
    if (ie) {
        await M.manager?.close({
            displaced
        });
        M.manager = null;
    }
    if (ke || se || ie || Se) {
        await Pe();
        if (se && !displaced) {
            M.manager?.killAll("SIGTERM");
            if (!M.manager) {
                let s = await xD({
                    silent: true
                }, storageV5).catch(()=>null);
                for (let C of Object.values(s?.workers ?? {})){
                    if (C.pid > 0) {
                        await IHr(C.pid, C.procStart).catch(()=>false);
                        await Tue(C.replPid, C.replProcStart).catch(()=>false);
                    }
                }
            }
        }
    }
    await Promise.all([
        M.manager?.close({
            displaced
        }),
        B.stop(ce === "upgrade" ? "upgrade" : ce === "yield" ? "yield" : undefined)
    ]);
    await Pe();
    if (se) {
        await Zft();
    }
    await logger.close();
    authManager.dispose();
    return {
        upgradeDetected,
        exitCode: Se ? 1 : 0
    };
}
const qr = 70;
const Qr = `Usage: claude daemon [subcommand] [options]

Service lifecycle:
  run [json-path]   Run the supervisor in the foreground (default when piped)
  status            Show daemon pid, version, uptime
  logs              Tail the daemon log (Ctrl-C to stop)
  uninstall         Remove the background service (launchctl/systemd)
  stop              Shut down the supervisor and terminate background sessions
                      --any           also stop a transient (non-service) daemon
                      --keep-workers  leave detached sessions running
`;
const en = `  install           Install as a launchctl/systemd service (persists across reboot)
  start             Start the installed service
  restart           Restart the installed service
`;
const tn = `
  Service install is disabled in this version \u2014 the daemon runs on demand
  and exits when the last client disconnects.
`;
const rn = `  remote-control list [--json]              List remote-control servers
  remote-control add [--dir <path>] [--name <n>]
                     [--spawn-mode same-dir|worktree]
  remote-control remove <name-or-dir>
`;
const nn = "";
const on = `
Remote Control servers (add/remove require the service to be installed):
${rn}`;
const an = `
Options:
  --json-path <p>   Config file (default: ~/.claude/daemon.json)
  --log-file <p>    Log file (default: ~/.claude/daemon.log)
  --help, -h        Show this help
`;
const sn = new Set([
    "list",
    "scheduled",
    "remote-control",
    "hub"
]);
const jt = new Set([
    "status",
    "stop",
    "uninstall"
]);
const dn = new Set([
    "run",
    ...jt
]);
function Bt() {
    return Qr + (kVe() ? en : tn) + (V3() ? nn : rJe("remoteControl") ? on : "") + an;
}
function ln(r) {
    let e = oI();
    let o = false;
    let n = Iie();
    let a;
    let spawnedBy;
    let S = new Set;
    for(let p = 0; p < r.length; p++){
        let T = r[p];
        if (T === "--json-path" && r[p + 1]) {
            S.add(p);
            S.add(++p);
            e = r[p];
            o = true;
        } else if (T.startsWith("--json-path=")) {
            S.add(p);
            e = T.slice(12);
            o = true;
        } else if (T === "--log-file" && r[p + 1]) {
            S.add(p);
            S.add(++p);
            n = r[p];
        } else if (T.startsWith("--log-file=")) {
            S.add(p);
            n = T.slice(11);
        } else if (T === "--origin" && r[p + 1]) {
            S.add(p);
            S.add(++p);
            a = Ot(r[p]);
        } else if (T.startsWith("--origin=")) {
            S.add(p);
            a = Ot(T.slice(9));
        } else if (T === "--spawned-by" && r[p + 1]) {
            S.add(p);
            S.add(++p);
            spawnedBy = pn(r[p]);
        }
    }
    let u = [];
    for(let p = 0; p < r.length; p++){
        if (!S.has(p)) {
            u.push(r[p]);
        }
    }
    let y = new Set([
        "run",
        "install",
        "uninstall",
        "start",
        "stop",
        "restart",
        "status",
        "logs",
        "log",
        "list",
        "scheduled",
        "remote-control",
        "hub"
    ]);
    let sub = process.stdin.isTTY ? "hub" : "run";
    let E = -1;
    for(let p = 0; p < u.length; p++){
        if (!u[p].startsWith("-")) {
            E = p;
            break;
        }
    }
    if (E === -1) {
        return {
            sub,
            jsonPath: e,
            logPath: n,
            origin: a,
            spawnedBy,
            rest: u
        };
    }
    let L = u[E];
    if (!y.has(L)) {
        if (!/[./\\~]/.test(L)) {
            return {
                sub: L,
                jsonPath: e,
                logPath: n,
                origin: a,
                spawnedBy,
                rest: []
            };
        }
        return {
            sub: "run",
            jsonPath: o ? e : L,
            logPath: n,
            origin: a,
            spawnedBy,
            rest: []
        };
    }
    let P = [
        ...u.slice(0, E),
        ...u.slice(E + 1)
    ];
    let D = L;
    if (D === "run" && !o) {
        let p = P.find((T)=>!T.startsWith("-"));
        if (p) {
            e = p;
        }
    }
    return {
        sub: D,
        jsonPath: e,
        logPath: n,
        origin: a,
        spawnedBy,
        rest: P
    };
}
function Ot(r) {
    if (r === "service" || r === "transient" || r === "foreground") {
        return r;
    }
    if (r === "auto") {
        return "transient";
    }
}
function cn(r) {
    let e = r.origin ?? "unknown";
    if (e !== "transient" && e !== "auto") {
        return e;
    }
    let data = v0e().safeParse(r.spawnedBy).data;
    if (!data) {
        return "transient — started on-demand by a client";
    }
    return `transient \u2014 started on-demand by \`${data.label}\` (pid ${data.pid}) in ${data.cwd}`;
}
function pn(r) {
    let e = mt(r, false);
    if (e === null || typeof e !== "object") {
        return;
    }
    let o = e;
    if (typeof o.label === "string" && typeof o.cwd === "string" && typeof o.pid === "number") {
        return {
            label: o.label,
            cwd: o.cwd,
            pid: o.pid
        };
    }
}
function U(r) {
    process.stdout.write(r + `
`);
}
function J(r) {
    process.stderr.write(r + `
`);
}
function Ce(rest, e) {
    let o = [];
    for(let n = 0; n < rest.length; n++){
        let a = rest[n];
        if (e.includes(a)) {
            continue;
        }
        if (a === "--debug" || a === "-d" || a === "--debug-to-stderr" || a === "-d2e" || a.startsWith("--debug=") || a.startsWith("--debug-file=")) {
            continue;
        }
        if (a === "--debug-file" && n + 1 < rest.length) {
            n++;
            continue;
        }
        o.push(a);
    }
    if (o.length > 0) {
        J(`warning: extra arguments ignored: ${o.join(" ")}`);
    }
}
function Lt(r, pid) {
    return `${r} refused: a foreground daemon (pid ${pid}, started with \`claude daemon run\`) holds the daemon lock \u2014 stop it first (Ctrl-C in its terminal or \`claude daemon stop\`)`;
}
function Nt(r, e) {
    let o;
    switch(e.outcome){
        case "eperm":
            o = "Stop it from the account that owns it";
            break;
        case "unverified":
            o = $jo();
            break;
        case "timed-out":
            o = `Wait for it to exit (or kill pid ${e.pid})`;
            break;
    }
    return `${r} refused: ${aOe(e)} \u2014 a freshly started service would lose the lockfile race to it and crash-loop. ${o}, then retry.`;
}
function Wt(r, pid) {
    return `${r} refused: ${Qfn(pid)}. Stop it (\`claude daemon stop\`) and retry.`;
}
function Vt(r) {
    return `warning: the service manager accepted the ${r}, but the installed daemon is not reachable after ${hG / 1000}s \u2014 the first start after an update can be slow. Check \`claude daemon status\` and \`claude daemon logs\`; if the service file points at a binary or launcher that no longer exists, \`claude daemon install\` rewrites it from the current settings.`;
}
async function de(r) {
    await Promise.race([
        Promise.all([
            lFe(),
            JNe()
        ]),
        Q(500, undefined, {
            unref: true
        })
    ]).catch(()=>{});
    process.exit(r);
}
export async function daemonMain(r, e) {
    await mkt({
        kickGrowthBook: false
    });
    if (r.includes("--help") || r.includes("-h")) {
        if (!EVe()) {
            return TVe("daemon");
        }
        U(Bt());
        return;
    }
    let o = ln(r);
    let { jsonPath, logPath, origin, spawnedBy, rest } = o;
    let y = o.sub === "hub" && !V3() ? "status" : o.sub;
    if (!dn.has(y)) {
        let E = await E$n();
        if (E) {
            process.stderr.write(`${E}
`);
            process.exit(1);
        }
        if (!EVe()) {
            return TVe("daemon");
        }
    } else if (y === "run" || y === "status") {
        let E = await E$n();
        if (E) {
            t(`daemon ${y}: policy helper failed (continuing on static managed settings): ${E}`, {
                level: "warn"
            });
        }
    }
    if (sn.has(y) && !(y === "remote-control" ? rJe("remoteControl") : V3())) {
        return TVe(`daemon ${y}`);
    }
    try {
        let { restoreGatewayAuthForFastPath } = await import("/$bunfs/root/chunk-vm76d7e6.js");
        await restoreGatewayAuthForFastPath();
    } catch (error) {
        t(`daemon ${y}: could not load the Cloud gateway sign-in, so this daemon runs as if it were not signed in to the gateway, until it restarts. Fix this error: ${l(error)}`, {
            level: "warn"
        });
    }
    ES();
    oX();
    if (!jt.has(y)) {
        Ea().catch(()=>{});
    }
    let storageV5 = OG(e);
    if (j() && storageV5 !== undefined) {
        Tq({
            storageV5
        });
        UV(storageV5);
        let [{ composePolicyLimitsClient, primePolicyLimitsCache }, { primeFastPathCredentials }] = await Promise.all([
            import("/$bunfs/root/chunk-z4ckrxvt.js"),
            import("/$bunfs/root/chunk-dmt3qh13.js")
        ]);
        let D = ME(storageV5);
        DZt(D);
        LZt(storageV5);
        composePolicyLimitsClient({
            storageV5,
            credentials: D
        });
        await primeFastPathCredentials(D);
        await primePolicyLimitsCache(storageV5);
        await x7(storageV5);
    }
    cFe(storageV5);
    switch(y){
        case "list":
            {
                Ce(rest, [
                    "--json"
                ]);
                let { handleListAllKinds } = await import("/$bunfs/root/chunk-w1gabs4r.js");
                await handleListAllKinds(rest.includes("--json"), jsonPath, storageV5);
                return;
            }
        case "scheduled":
        case "remote-control":
            {
                let { handleCliKind } = await import("/$bunfs/root/chunk-w1gabs4r.js");
                await handleCliKind(y, rest, jsonPath, storageV5);
                return;
            }
        case "hub":
            {
                Ce(rest, []);
                if (!process.stdin.isTTY || !process.stdout.isTTY) {
                    U("Interactive hub requires a TTY. See `claude daemon --help`.");
                    return;
                }
                let { renderDaemonHubStandalone } = await import("/$bunfs/root/chunk-txqxaad7.js");
                await renderDaemonHubStandalone(storageV5);
                return process.exit(0);
            }
        case "run":
            {
                if (fkt()) {
                    J("claude daemon: background agents disabled (3P/opt-out)");
                    return process.exit(0);
                }
                process.title = "claude daemon";
                let E = resolve(jsonPath);
                let L = resolve(logPath);
                VCo();
                try {
                    Gm(homedir());
                } catch  {}
                Mge();
                let P = new AbortController;
                let D = false;
                let p = ()=>{
                    if (D) {
                        J("forced shutdown");
                        process.exit(1);
                    }
                    D = true;
                    P.abort();
                };
                process.on("SIGINT", p);
                process.on("SIGTERM", p);
                let T = origin ?? "foreground";
                let H;
                let q;
                try {
                    ({ upgradeDetected: H, exitCode: q } = await Mt({
                        jsonPath: E,
                        logPath: L,
                        origin: T,
                        spawnedBy,
                        signal: P.signal,
                        storageV5
                    }));
                } catch (error) {
                    c(error);
                    m("daemon_start", "daemon_start_crash");
                    await Promise.all([
                        jT("tengu_daemon_startup_crash", {}),
                        ePt("tengu_daemon_startup_crash", {})
                    ]);
                    return de(1);
                }
                if (H) {
                    if (T === "service") {
                        return de(qr);
                    }
                    await fn(E, L, T, spawnedBy);
                }
                return de(q);
            }
        case "install":
            {
                Ce(rest, []);
                if (!kVe()) {
                    J(`\`claude daemon ${y}\` is disabled in this version \u2014 the daemon runs on demand and exits when the last client disconnects.`);
                    await jT("tengu_daemon_install", {
                        ok: false,
                        disabled: true
                    });
                    return de(1);
                }
                if (!await B1e()) {
                    J(`Service install isn't available on ${"linux"} \u2014 the daemon still runs on demand when a client connects.`);
                    m("daemon_service_install", "daemon_service_install_unsupported");
                    return de(1);
                }
                if (process.env.CLAUDE_CONFIG_DIR) {
                    J("service install only supports the default config dir — the launchd/systemd unit is a per-user singleton");
                    m("daemon_service_install", "daemon_service_install_config_dir");
                    return de(1);
                }
                let E = await yYe();
                if (E) {
                    m("daemon_service_install", "daemon_service_install_launcher");
                    await jT("tengu_daemon_install", {
                        ok: false,
                        launcher: true
                    });
                    J(`install refused: ${E}`);
                    return de(1);
                }
                let L = await SBt(storageV5);
                if (L.kind === "foreground") {
                    m("daemon_service_install", "daemon_service_install_foreground");
                    await jT("tengu_daemon_install", {
                        ok: false,
                        foreground: true
                    });
                    J(Lt("install", L.lock.pid));
                    return de(1);
                }
                if (L.kind === "not-stopped") {
                    m("daemon_service_install", L.outcome === "unverified" ? "daemon_service_install_holder_unverified" : "daemon_service_install_holder_alive");
                    await jT("tengu_daemon_install", {
                        ok: false,
                        holderAlive: true,
                        holderUnverified: L.outcome === "unverified"
                    });
                    J(Nt("install", L));
                    return de(1);
                }
                if (L.kind === "unknown-origin") {
                    m("daemon_service_install", "daemon_service_install_holder_unknown_origin");
                    await jT("tengu_daemon_install", {
                        ok: false,
                        holderAlive: true,
                        holderUnknownOrigin: true
                    });
                    J(Wt("install", L.lock.pid));
                    return de(1);
                }
                if (L.kind === "stopped") {
                    U(`stopped detached daemon (pid ${L.pid})`);
                }
                let P = await ANt({
                    jsonPath,
                    logPath
                });
                if (!P.ok) {
                    await jT("tengu_daemon_install", {
                        ok: false
                    });
                    m("daemon_service_install", "daemon_service_install_failed");
                    J(`install failed: ${P.error}`);
                    if (P.servicePath) {
                        J(`  (service file was written to ${P.servicePath})`);
                    }
                    return de(1);
                }
                g("daemon_service_install");
                U(`installed: ${P.servicePath}`);
                let D = await r4n(hG, storageV5);
                await jT("tengu_daemon_install", {
                    ok: true,
                    reachable: D !== null
                });
                if (D) {
                    U(`running: pid=${D.pid} origin=${D.origin} (managed by ${O() === "macos" ? "launchd" : "systemd"})`);
                } else {
                    J(`warning: service installed but the daemon is not running as the installed service within ${hG / 1000}s \u2014 check \`claude daemon logs\``);
                }
                return de(0);
            }
        case "start":
        case "restart":
            {
                Ce(rest, []);
                if (!kVe()) {
                    J(`\`claude daemon ${y}\` is disabled in this version \u2014 the daemon runs on demand and exits when the last client disconnects.`);
                    await jT("tengu_daemon_install", {
                        ok: false,
                        disabled: true
                    });
                    return de(1);
                }
                if (!await B1e()) {
                    J(`\`claude daemon ${y}\` isn't available on ${"linux"} (no launchd/systemd) \u2014 the daemon runs on demand instead.`);
                    process.exit(1);
                }
                if (process.env.CLAUDE_CONFIG_DIR) {
                    J("the launchd/systemd unit is a per-user singleton for the default config dir");
                    process.exit(1);
                }
                if (!await $9()) {
                    J("service not installed — run `claude daemon install` first");
                    process.exit(1);
                }
                let E = await yYe();
                if (E) {
                    m("daemon_service_install", "daemon_service_install_launcher");
                    await jT("tengu_daemon_control", {
                        op_start: y === "start",
                        op_restart: y === "restart",
                        ok: false,
                        launcher: true
                    });
                    J(`${y} refused: ${E}`);
                    return de(1);
                }
                let L = await SBt(storageV5);
                if (L.kind === "foreground") {
                    m("daemon_service_install", "daemon_service_install_foreground");
                    await jT("tengu_daemon_control", {
                        op_start: y === "start",
                        op_restart: y === "restart",
                        ok: false,
                        foreground: true
                    });
                    J(Lt(y, L.lock.pid));
                    return de(1);
                }
                if (L.kind === "not-stopped") {
                    m("daemon_service_install", L.outcome === "unverified" ? "daemon_service_install_holder_unverified" : "daemon_service_install_holder_alive");
                    await jT("tengu_daemon_control", {
                        op_start: y === "start",
                        op_restart: y === "restart",
                        holderUnverified: L.outcome === "unverified",
                        ok: false,
                        holderAlive: true
                    });
                    J(Nt(y, L));
                    return de(1);
                }
                if (L.kind === "unknown-origin") {
                    m("daemon_service_install", "daemon_service_install_holder_unknown_origin");
                    await jT("tengu_daemon_control", {
                        op_start: y === "start",
                        op_restart: y === "restart",
                        ok: false,
                        holderAlive: true,
                        holderUnknownOrigin: true
                    });
                    J(Wt(y, L.lock.pid));
                    return de(1);
                }
                if (L.kind === "stopped") {
                    U(`stopped detached daemon (pid ${L.pid})`);
                }
                let P = await t4n();
                if (P.execPathStale || P.launcherPrefixDead) {
                    U(P.execPathStale ? "service binary missing — regenerating service file" : "installed service starts through a launcher that was deleted or is no longer executable — regenerating the service file from the current settings");
                    let T = await ANt({
                        jsonPath,
                        logPath
                    });
                    let H = T.ok && await r4n(hG, storageV5) !== null;
                    await jT("tengu_daemon_control", {
                        op_start: y === "start",
                        op_restart: y === "restart",
                        ok: T.ok,
                        regenerated: true,
                        reachable: H
                    });
                    if (T.ok && H) {
                        U(y === "start" ? "started" : "restarted");
                    } else if (T.ok) {
                        J(Vt(y));
                    } else {
                        J(`regenerate failed: ${T.error}`);
                    }
                    return de(T.ok ? 0 : 1);
                }
                let D = await (y === "start" ? e4n() : B0o());
                if (!D.ok) {
                    await jT("tengu_daemon_control", {
                        op_start: y === "start",
                        op_restart: y === "restart",
                        ok: false
                    });
                    J(`${y} failed: ${D.error}`);
                    return de(1);
                }
                let p = await r4n(hG, storageV5) !== null;
                await jT("tengu_daemon_control", {
                    op_start: y === "start",
                    op_restart: y === "restart",
                    ok: true,
                    reachable: p
                });
                if (p) {
                    U(y === "start" ? "started" : "restarted");
                } else {
                    J(Vt(y));
                }
                return de(0);
            }
        case "uninstall":
            {
                Ce(rest, []);
                let E = await Zft();
                await jT("tengu_daemon_control", {
                    op_uninstall: true,
                    ok: E.ok
                });
                if (E.ok) {
                    g("daemon_service_uninstall");
                    U("uninstalled");
                } else {
                    m("daemon_service_uninstall", "daemon_service_uninstall_failed");
                    J(`uninstall failed: ${E.error}`);
                }
                return de(E.ok ? 0 : 1);
            }
        case "stop":
            {
                let E = rest.includes("--keep-workers");
                Ce(rest, [
                    "--keep-workers",
                    "--any"
                ]);
                let L = (B)=>{
                    if (E || B === 0) {
                        return "stopped";
                    }
                    return `stopped (terminated ${B} ${I(B, "background session")})`;
                };
                let P = (kept)=>{
                    if (kept > 0) {
                        J(`note: ${kept} background ${I(kept, "session")} could not be verified as still ours and ${kept === 1 ? "was" : "were"} left running (records kept). Re-run \`claude daemon stop\` to retry.`);
                    }
                };
                let D = async (ok, reaped, V = "daemon_stop_failed")=>{
                    if (ok) {
                        g("daemon_stop");
                    } else {
                        m("daemon_stop", V);
                    }
                    await jT("tengu_daemon_control", {
                        op_stop: true,
                        ok,
                        reaped,
                        holderUnverified: V === "daemon_stop_holder_unverified"
                    });
                    return de(ok ? 0 : 1);
                };
                let p = await $9();
                let T = await lw(1, storageV5);
                let H = T && Sht(T) ? T : null;
                let q = T;
                let le;
                if (!q) {
                    let B = await aK(storageV5);
                    if (B && _a(B.pid)) {
                        let M = await Xfn(B.pid);
                        let V = M ? await Fl(B.pid, {
                            skipCache: true
                        }) : undefined;
                        let Z = p0(B);
                        let pe = Z !== undefined && V !== undefined;
                        if (!M || pe && V !== Z) {
                            le = B.pid;
                        } else if (pe) {
                            H = B;
                            q = B;
                        } else {
                            q = B;
                        }
                    }
                }
                if (!p && q && !rest.includes("--any")) {
                    J(H ? `no background service is installed, but a daemon is running (pid=${q.pid}, origin=${q.origin ?? "unknown"}). Run \`claude daemon stop --any\` to stop it.` : `no background service is installed, but pid=${q.pid} is holding the daemon lock. Run \`claude daemon stop --any\` to stop any background sessions and report on the holder.`);
                    return de(1);
                }
                let oe = "";
                if (q && Cj()) {
                    let [{ readServedFolders }, { servedBackgroundShellsIn }] = await Promise.all([
                        import("/$bunfs/root/chunk-reaab6vk.js"),
                        import("/$bunfs/root/chunk-vv3x8cjh.js")
                    ]);
                    let V = await Ge(readServedFolders(q.pid, storageV5).then((Z)=>servedBackgroundShellsIn(Z.map((pe)=>pe.dir))), 2000);
                    if (V) {
                        oe = `
note: cloud sessions had ${V} background ${I(V, "command")} running in the folders this daemon served; the ones it was serving are stopped too`;
                    }
                }
                let ue = await Jm({
                    proto,
                    op: "shutdown",
                    reapWorkers: !E
                });
                if (ue.ok && ue.op === "shutdown") {
                    let B = E ? {
                        reaped: 0,
                        kept: 0
                    } : await RHr({
                        supervisorKilledAll: true
                    }, storageV5);
                    P(B.kept);
                    let M = Math.max(ue.reaped, B.reaped);
                    if (p) {
                        let V = await CNt();
                        if (!V.ok) {
                            J(`stop failed: ${V.error}`);
                            return D(false, M);
                        }
                    }
                    U(L(M) + oe);
                    if (!p) {
                        U("note: the next `claude agents` or `claude --bg` will start a new one");
                    }
                    return D(true, M);
                }
                let re = false;
                if (p) {
                    let B = await CNt();
                    if (!B.ok) {
                        J(`stop failed: ${B.error}`);
                        return D(false, 0);
                    }
                    re = true;
                } else if (H && O() !== "windows") {
                    try {
                        process.kill(H.pid, "SIGTERM");
                        re = true;
                    } catch (error) {
                        if (v(error) === "ESRCH") {
                            re = true;
                        } else {
                            let M = v(error) === "EPERM" ? " (running as another user — try with elevated privileges)" : "";
                            J(`could not stop daemon (pid=${H.pid}): ${l(error)}${M}`);
                            return D(false, 0);
                        }
                    }
                }
                let he = E ? {
                    reaped: 0,
                    kept: 0
                } : await RHr({}, storageV5);
                let K = he.reaped;
                P(he.kept);
                if (H && !re && O() === "windows") {
                    J((K > 0 ? `terminated ${K} background session(s); ` : "") + `supervisor (pid=${H.pid}) is still running \u2014 stop it with ` + `\`taskkill /PID ${H.pid}\` or close the terminal it was started in.`);
                    return D(false, K);
                }
                if (!re && !H && q) {
                    J((K > 0 ? `terminated ${K} background ${I(K, "session")}; ` : "") + `the daemon was not stopped: pid=${q.pid} is holding ${ZO()} but could not be verified as the daemon, so it was not signalled. If no daemon is running, delete that file; if pid ${q.pid} is a live process you own, stop it yourself.`);
                    return D(false, K, "daemon_stop_holder_unverified");
                }
                if (le !== undefined) {
                    J(`note: ${ZO()} is stale (pid=${le} is not the daemon). The next daemon start reclaims it automatically.`);
                }
                if (!re && !H && K === 0) {
                    U("no daemon running");
                } else {
                    U(L(K) + oe);
                    if (!p && H) {
                        U("note: the next `claude agents` or `claude --bg` will start a new one");
                    }
                }
                return D(true, K);
            }
        case "status":
            {
                Ce(rest, []);
                let E = await lw(1, storageV5);
                if (!E) {
                    U("not running");
                    let K = tf();
                    if (K) {
                        U(`warning: ${K} \u2014 background sessions will refuse to start rather than run unwrapped`);
                    } else if (GB()) {
                        U(`launcher: (none running) \u2014 this claude resolves \`${GB()}\` and will start the next ${tm()} through it`);
                    }
                    let { getBgDaemonStatus: getBgDaemonStatus_1, formatBgDaemonStatus: formatBgDaemonStatus_1 } = await import("/$bunfs/root/chunk-m8qxxw22.js");
                    U(formatBgDaemonStatus_1(await getBgDaemonStatus_1(storageV5)));
                    await Ft();
                    return de(1);
                }
                let L = Math.floor((Date.now() - E.startedAt) / 1000);
                U(`pid:     ${E.pid}`);
                U(`version: ${E.version}`);
                U(`uptime:  ${L}s`);
                U(`origin:  ${cn(E)}`);
                U(`config:  ${E.jsonPath}`);
                U(`log:     ${E.logPath}`);
                let P = tf();
                let D = GB();
                let p = E.processWrapper ?? "";
                let T = "";
                if (P || D || p) {
                    let K = await Jm({
                        proto,
                        op: "nudge"
                    }).catch(()=>null);
                    T = K?.ok && K.op === "nudge" ? K.processWrapper ?? "" : p;
                }
                let H = ne(Nr(un(T)), 200);
                if (P || T || D) {
                    U(`launcher: ${H || "(none)"}`);
                    if (E.origin === "service" && (D || T)) {
                        U("  note: the installed service process itself runs outside the launcher; the sessions it spawns are covered — a launcher-aware `claude daemon install` closes this");
                    }
                    if (P) {
                        U("");
                        U(`warning: ${P} \u2014 background sessions will refuse to start rather than run unwrapped`);
                        if (T) {
                            U(`  the running ${tm()} still launches sessions via \`${H}\`; do NOT restart it until this is fixed, or no daemon will start at all`);
                        }
                    } else if (T !== D) {
                        U("");
                        U(`warning: the running ${tm()} launches sessions via \`${H || "(no launcher)"}\`, but this claude resolves \`${D || "(no launcher)"}\``);
                        U("  restart it — and your running claude sessions — to apply the current CLAUDE_CODE_PROCESS_WRAPPER");
                    }
                }
                let { getBgDaemonStatus, formatBgDaemonStatus } = await import("/$bunfs/root/chunk-m8qxxw22.js");
                let oe = await getBgDaemonStatus(storageV5);
                U(formatBgDaemonStatus(oe));
                let { readServedFolders, servingToolsLines } = await import("/$bunfs/root/chunk-reaab6vk.js");
                for (let K of servingToolsLines(await readServedFolders(E.pid, storageV5))){
                    U(K);
                }
                await Ft();
                let he = E.origin;
                if (he === "transient" || he === "auto") {
                    U("");
                    let K = oe.workersLive ?? 0;
                    let B = oe.leaseClients;
                    if (K > 0 || B.length > 0) {
                        U("holding this daemon open:");
                        if (K > 0) {
                            U(`  ${K} ${I(K, "bg worker")} running (daemon waits for them to settle)`);
                        }
                        for (let M of B){
                            U(`  \`${M.label}\`${M.cloudSessionId ? ` ${M.cloudSessionId}` : ""} (pid ${M.pid}) in ${M.cwd}`);
                        }
                        U("");
                        U(`to let it idle-exit: wait for (or cancel) bg workers and close any \`claude agents\`${B.some((M)=>M.label === bqe) ? " and the `cloud session` clients listed above" : ""}`);
                    } else if (oe.workersLive === 0) {
                        U("nothing holding this daemon open — will idle-exit shortly");
                    }
                }
                if (E.version !== ({
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://code.claude.com/docs/en/overview",
                    VERSION: "2.1.296",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                    BUILD_TIME: "2026-10-09T01:31:52Z",
                    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                    DD_SOURCEMAP_GROUP: "default"
                }).VERSION) {
                    U("");
                    U(`warning: running daemon is ${E.version}, but this claude is ${{
                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://code.claude.com/docs/en/overview",
                        VERSION: "2.1.296",
                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                        BUILD_TIME: "2026-10-09T01:31:52Z",
                        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                        DD_SOURCEMAP_GROUP: "default"
                    }.VERSION}`);
                    let K = await $9() ? "claude daemon stop" : "claude daemon stop --any";
                    U(`  run \`${K}\` to pick up the new version`);
                }
                return de(0);
            }
        case "logs":
        case "log":
            {
                Ce(rest, []);
                await mn(logPath, storageV5);
                return;
            }
        default:
            J(`unknown subcommand: ${y}`);
            J("");
            J(Bt());
            process.exit(1);
    }
}
async function Ft() {
    if (!Cj()) {
        return;
    }
    let { readServedBackgroundShells, servedBackgroundShellLines } = await import("/$bunfs/root/chunk-vv3x8cjh.js");
    for (let o of servedBackgroundShellLines(await readServedBackgroundShells(), {
        now: Date.now(),
        stopHint: EVe() && rJe("remoteControl")
    })){
        U(o);
    }
}
async function fn(r, e, o, spawnedBy) {
    let { err, stderrPath } = await n4n([
        "daemon",
        "run",
        "--json-path",
        r,
        "--log-file",
        e,
        "--origin",
        o,
        ...spawnedBy ? [
            "--spawned-by",
            _(spawnedBy)
        ] : []
    ]);
    let S = err ? `failed to spawn: ${l(err)}` : await emt(hG) ? null : `spawned but never became reachable within ${hG / 1000}s`;
    if (S !== null) {
        let u = stderrPath ? EE((await Ba(stderrPath, 1048576) ?? "").trim()).slice(-2000) : "";
        let y = await Le(e).catch(()=>null);
        y?.write("supervisor", `upgrade self-respawn ${S} \u2014 bg workers may be orphan-reaped ~60s after this process exits unless a client restarts the daemon (run \`claude agents\`)` + (u ? `; successor stderr: ${u}` : ""));
        await y?.close();
        if (!err) {
            await jT("tengu_daemon_upgrade_respawn_unreachable", {
                stderr_captured: u.length > 0
            });
        }
    }
    if (stderrPath) {
        rm(dirname(stderrPath), {
            recursive: true,
            force: true
        }).catch(()=>{});
    }
    if (err) {
        c(`daemon: upgrade self-respawn failed: ${l(err)}`);
        await jT("tengu_bg_daemon_spawn_failed", {
            respawn: true,
            errno_enoent: v(err) === "ENOENT",
            errno_eacces: v(err) === "EACCES",
            errno: Vr(err) ?? b("unknown")
        });
    }
}
async function mn(logPath, storageV5) {
    {
        let S = spawn("tail", [
            "-f",
            logPath
        ], {
            stdio: "inherit",
            ...Al("helper")
        });
        await new Promise((resolvePromise)=>{
            S.on("exit", (y)=>{
                if (y) {
                    process.exitCode = y;
                }
                resolvePromise();
            });
            S.on("error", (y)=>{
                J(`tail failed: ${y.message}`);
                process.exit(1);
            });
        });
        return;
    }
    if (j() && storageV5 !== undefined && logPath === Iie()) {
        await gn(logPath, storageV5);
        return;
    }
    let o;
    try {
        o = await open(logPath, "r");
    } catch (error) {
        J(`cannot open ${logPath}: ${l(error)}`);
        process.exit(1);
    }
    let size = (await o.stat()).size;
    let a = Buffer.alloc(65536);
    let w = false;
    process.on("SIGINT", ()=>{
        w = true;
    });
    while(!w){
        if ((await o.stat()).size < size) {
            size = 0;
        }
        let { bytesRead } = await o.read(a, 0, a.length, size);
        if (bytesRead > 0) {
            process.stdout.write(a.subarray(0, bytesRead));
            size += bytesRead;
        } else {
            await Q(500);
        }
    }
    await o.close();
}
async function gn(logPath, storageV5) {
    let key = $e.state("daemon-log");
    let n = await storageV5.read([
        {
            key,
            offset: 0,
            length: 0
        }
    ]);
    if (!n.ok || !n.value.items[0].found) {
        J(`cannot open ${logPath}: ${n.ok ? "no such file or directory" : gt(n.error)}`);
        process.exit(1);
    }
    let totalBytes = n.value.items[0].totalBytes;
    let w = false;
    process.on("SIGINT", ()=>{
        w = true;
    });
    let S = false;
    while(!w){
        let u = await storageV5.read([
            {
                key,
                offset: totalBytes,
                length: 65536
            }
        ]);
        if (!u.ok) {
            if (u.error.code === "Unavailable" || u.error.code === "Failed" && u.error.failureClass === "permission") {
                if (!S) {
                    J(`cannot read ${logPath}: ${gt(u.error)}; retrying`);
                    S = true;
                }
                await Q(500);
                continue;
            }
            J(`cannot read ${logPath}: ${gt(u.error)}`);
            process.exit(1);
        }
        let y = u.value.items[0];
        if (!y.found) {
            if (!S) {
                J(`cannot read ${logPath}: no such file or directory; retrying`);
                S = true;
            }
            await Q(500);
            continue;
        }
        S = false;
        if (y.totalBytes < totalBytes) {
            totalBytes = 0;
            continue;
        }
        if (y.value.length > 0) {
            process.stdout.write(y.value);
            totalBytes += y.value.length;
        } else {
            await Q(500);
        }
    }
}
