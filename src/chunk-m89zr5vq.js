import { we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, v, cA, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { On, Bn, Qa, Gi, Va } from "/$bunfs/root/chunk-xgw72tt1.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _, X, Dh, HN, ie, ps, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, Qe, Nr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Mg, e9, ur, Orn, Ot } from "/$bunfs/root/chunk-2d9a83dh.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { An, Cs, it, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { N1, Ub, XE, wZ } from "/$bunfs/root/chunk-223dyewd.js";
import { qz, ss, En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { j1 } from "/$bunfs/root/chunk-3yz9zdww.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ec } from "/$bunfs/root/chunk-r3z1chqx.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { wn, Qu } from "/$bunfs/root/chunk-6dwnw6av.js";
import { X_, Ny, Fl } from "/$bunfs/root/chunk-t0b6khh6.js";
import { Ba } from "/$bunfs/root/chunk-6g4165br.js";
import { tm, Dle, lye } from "/$bunfs/root/chunk-n4gsaesa.js";
import { xXe } from "/$bunfs/root/chunk-dv374jbr.js";
import { vht } from "/$bunfs/root/chunk-ezr23nse.js";
import { G0r, bNo, eJe, Ymt, Q$t, Oee, Wdn } from "/$bunfs/root/chunk-066dgc2r.js";
import { dw } from "/$bunfs/root/chunk-46as0mn8.js";
import { TU, nK, nJe, VH, qH, Xdn } from "/$bunfs/root/chunk-avb6ma1z.js";
import { exn } from "/$bunfs/root/chunk-j9ep7722.js";
import { B0, U0o, iIe, oXe, pee, Bq, W0o, o4n, xNt } from "/$bunfs/root/chunk-6s0c3g6w.js";
import { EE, $Ae, YMn, Cce, s_e, kE, J2 } from "/$bunfs/root/chunk-fff9dfxd.js";
import { $c as proto, wM, zJ, wIn, rno, Irt, sno, ETt, kTt, ATt, w0e, hqe, CTt, yqe, RTt, _qe, xTt, xD, GJ, TIn, X6t, EM, Yr, ic, cl, Bf, ro, e3t, LA, HI, Ra, wk, Frt } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { Jm } from "/$bunfs/root/chunk-6y5cf93g.js";
import { INt, j1e } from "/$bunfs/root/chunk-3yartt6z.js";
import { Ef, Ud } from "/$bunfs/root/chunk-twpzaz8r.js";
import { YTn, qqt, S2e, She, eDe, E2e, Jqt, jor, JTn, QTn, sne, Qqt, Wor, kZo } from "/$bunfs/root/chunk-kasbfbhj.js";
import { M8t, _Q } from "/$bunfs/root/chunk-xyr83dxa.js";
import { D0r, JXe, z0r } from "/$bunfs/root/chunk-4nfvaqps.js";
import { OS } from "/$bunfs/root/chunk-wtmtca98.js";
import { CG, Wgt } from "/$bunfs/root/chunk-p3ysjv2a.js";
import { MKo } from "/$bunfs/root/chunk-gw1f0xa7.js";
import { Ku } from "/$bunfs/root/chunk-jn6evvyh.js";
import { _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { me, hn, ir, bt } from "/$bunfs/root/chunk-55p8dvkx.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { Oh } from "/$bunfs/root/chunk-1qq5kpcj.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { randomUUID } from "crypto";
import { lstat, readdir, realpath, rm, unlink, writeFile, readFile, mkdir, rename } from "fs/promises";
import { isAbsolute, join, normalize, relative } from "path";
import { connect } from "net";
const Wr = 250;
const Jr = 604800000;
const Hr = 256;
const Gr = p(()=>bt({
        writtenAtMs: hn().optional(),
        shells: ir(bt({
            pid: hn().int().positive(),
            procStart: me().optional(),
            startTimeTicks: hn().int().optional()
        })).catch([])
    }));
async function Yt(e, r = {}) {
    let o = join(e, "adopt.json");
    let n = `${o}.reap.${process.pid}`;
    let u = Date.now() + (r.waitMs ?? 0);
    while(true){
        try {
            await ss(o, n);
            break;
        } catch (error) {
            if (Date.now() >= u) {
                if (!z(error)) {
                    t(`[adopt] reap claim failed: ${error}`, {
                        level: "warn"
                    });
                }
                return {
                    found: false,
                    reaped: 0
                };
            }
            await Q(Wr);
        }
    }
    try {
        let s = Gr().safeParse(X(await readFile(n, "utf-8")));
        if (!s.success) {
            return {
                found: true,
                reaped: 0
            };
        }
        let { writtenAtMs, shells } = s.data;
        let w = writtenAtMs !== undefined ? Date.now() - writtenAtMs : undefined;
        if (w !== undefined && w > Jr || shells.length > Hr) {
            t(`[adopt] reap skipped: implausible payload (age ${w ?? "?"}ms, ${shells.length} entries)`, {
                level: "warn"
            });
            return {
                found: true,
                reaped: 0
            };
        }
        await Promise.all(shells.map((A)=>xXe(A.pid, A.startTimeTicks, A.procStart)));
        if (shells.length > 0) {
            i("tengu_adopt_exit_reap", {
                reaped_shells: shells.length
            });
        }
        return {
            found: true,
            reaped: shells.length
        };
    } catch (error) {
        t(`[adopt] reap read/parse failed: ${error}`, {
            level: "warn"
        });
        return {
            found: true,
            reaped: 0
        };
    } finally{
        await unlink(n).catch(()=>{});
    }
}
const Qt = 900000;
const kt = 86400000;
function We(mtimeMs, r) {
    return r - mtimeMs >= kt || mtimeMs > r + 60000;
}
const er = /^[A-Za-z0-9-]{1,64}$/;
function ot(e) {
    return join(Cce(), `${e}.json`);
}
const nt = 8192;
function Ue(e) {
    return $e.daemon([
        YMn,
        e
    ]);
}
function wt(e) {
    return Ue(`${e}.json`);
}
const tr = Oh();
function st(e, r) {
    return tr.run(`g:${e}`, r).catch(()=>{});
}
async function U1e(gestureId, surface, o) {
    if (!er.test(gestureId)) {
        return;
    }
    let n = {
        gestureId,
        surface,
        startedAtEpochMs: Date.now(),
        attempt: 0
    };
    B0().ownedBeacons.set(gestureId, n);
    await st(gestureId, async ()=>{
        n.pid = process.pid;
        n.procStart = await Ny();
        if (o) {
            if (!await St(o, gestureId, n, true)) {
                B0().ownedBeacons.delete(gestureId);
            }
            return;
        }
        await mkdir(Cce(), {
            recursive: true,
            mode: 448
        });
        if (!await Ee()) {
            B0().ownedBeacons.delete(gestureId);
            return;
        }
        if (B0().ownedBeacons.get(gestureId) !== n) {
            return;
        }
        await En(ot(gestureId), _(n), 384);
    });
    await Zr(o);
}
async function St(e, r, o, n = false) {
    if (!await Ee(n)) {
        return false;
    }
    if (B0().ownedBeacons.get(r) === o) {
        await e.write(wt(r), _(o));
    }
    return true;
}
function rr(gestureId, attempt, storageV5) {
    let n = B0().ownedBeacons.get(gestureId);
    if (!n || !Number.isInteger(attempt) || attempt <= (n.attempt ?? 0)) {
        return;
    }
    n.attempt = attempt;
    st(gestureId, async ()=>{
        n.procStart ??= await Ny();
        if (storageV5) {
            await St(storageV5, gestureId, n);
            return;
        }
        if (!await Ee()) {
            return;
        }
        if (B0().ownedBeacons.get(gestureId) !== n) {
            return;
        }
        await En(ot(gestureId), _(n), 384);
    });
}
function Jft(e, r, o) {
    let n = B0().ownedBeacons.get(e);
    if (!n) {
        return;
    }
    if (r.marksExpected !== undefined) {
        n.marksExpected = n.marksExpected === true || r.marksExpected;
    }
    if (r.daemonBooted !== undefined) {
        n.daemonBooted = n.daemonBooted === true || r.daemonBooted;
    }
    if (r.interactiveReached) {
        n.interactiveReached = true;
    }
    if (r.attachMs !== undefined) {
        n.attachMs ??= r.attachMs;
    }
    if (r.msgsLoaded !== undefined) {
        n.msgsLoaded ??= r.msgsLoaded;
    }
    if (r.msgsInJsonl !== undefined) {
        n.msgsInJsonl ??= r.msgsInJsonl;
    }
    if (r.msgsRenderedAtFirstPaint !== undefined) {
        n.msgsRenderedAtFirstPaint ??= r.msgsRenderedAtFirstPaint;
    }
    if (r.attachCold !== undefined && n.interactiveReached !== true) {
        n.attachCold = r.attachCold;
    }
    if (r.via !== undefined && n.interactiveReached !== true) {
        n.via = r.via;
    }
    st(e, async ()=>{
        n.procStart ??= await Ny();
        if (o) {
            await St(o, e, n);
            return;
        }
        if (!await Ee()) {
            return;
        }
        if (B0().ownedBeacons.get(e) !== n) {
            return;
        }
        await En(ot(e), _(n), 384);
    });
}
async function WN(e, r) {
    if (!er.test(e)) {
        return;
    }
    B0().ownedBeacons.delete(e);
    await st(e, async ()=>{
        if (r) {
            if (!await Ee()) {
                return;
            }
            let n = false;
            for(let u = 0;; u++){
                let s = await r.delete(wt(e));
                if (s.ok) {
                    return;
                }
                let h = "telemetryCode" in s.error ? s.error.telemetryCode : undefined;
                n = h !== undefined && qz.has(h);
                if (n && O() === "windows" && u < qt - 1) {
                    await Q(Xt);
                    continue;
                }
                break;
            }
            if (!n) {
                return;
            }
            await r.write(wt(e), "{}");
            return;
        }
        let o = ot(e);
        if (!await Ee()) {
            return;
        }
        for(let n = 0;; n++){
            try {
                await unlink(o);
                return;
            } catch (error) {
                let s = v(error);
                if (s === "ENOENT") {
                    return;
                }
                if (O() === "windows" && s !== undefined && qz.has(s) && n < qt - 1) {
                    await Q(Xt);
                    continue;
                }
                break;
            }
        }
        await rename(o, `${o}.${process.pid}.cleared`).catch(()=>{});
    });
}
var qt = 4;
var Xt = 50;
async function Ee(e = false) {
    try {
        return (await lstat(Cce())).isDirectory();
    } catch (error) {
        return e && v(error) === "ENOENT";
    }
}
async function zr(e) {
    try {
        let r = await Ba(join(Cce(), e), nt);
        if (r === null) {
            return null;
        }
        return nr(r);
    } catch  {
        return null;
    }
}
async function qr(e, file) {
    let o = Ue(file);
    let n = await e.statMeta(o);
    if (!n.ok || n.value.size > nt) {
        return null;
    }
    let u = await e.read([
        o
    ]);
    if (!u.ok) {
        return null;
    }
    let s = u.value.items[0];
    if (!s.found || s.totalBytes > nt) {
        return null;
    }
    let entry = nr(Buffer.from(s.value).toString("utf8"));
    if (entry === null) {
        return null;
    }
    return {
        entry,
        version: s.version,
        mtimeMs: s.mtimeMs
    };
}
function nr(e) {
    try {
        let r = X(e);
        if (!!r && typeof r === "object" && typeof r.gestureId === "string" && typeof r.startedAtEpochMs === "number" && Number.isFinite(r.startedAtEpochMs) && r.startedAtEpochMs <= Date.now() + 60000) {
            return r;
        }
        return null;
    } catch  {
        return null;
    }
}
async function or(e) {
    if (typeof e.pid !== "number" || !Number.isInteger(e.pid) || e.pid <= 0) {
        return false;
    }
    if (!_a(e.pid)) {
        return true;
    }
    if (e.procStart === undefined) {
        return false;
    }
    let r = await Fl(e.pid);
    return r !== undefined && r !== e.procStart;
}
async function Xr(e, r) {
    try {
        let o = await lstat(join(Cce(), e));
        return We(o.mtimeMs, r);
    } catch  {
        return false;
    }
}
function Zr(e) {
    return tr.run("reconcile", ()=>Qr(e));
}
async function Qr(e) {
    if (e) {
        return en(e);
    }
    if (!await Ee()) {
        return [];
    }
    let r;
    try {
        r = await readdir(Cce());
    } catch  {
        return [];
    }
    let o = Date.now();
    let n = [];
    for (let u of r){
        if (!u.endsWith(".json")) {
            try {
                let k = await lstat(join(Cce(), u));
                if (We(k.mtimeMs, o)) {
                    await unlink(join(Cce(), u));
                }
            } catch  {}
            continue;
        }
        let s = await zr(u);
        if (s === null) {
            try {
                let k = await lstat(join(Cce(), u));
                if (We(k.mtimeMs, o)) {
                    await unlink(join(Cce(), u));
                }
            } catch  {}
            continue;
        }
        let h = o - s.startedAtEpochMs;
        if (!(typeof s.pid === "number" && Number.isInteger(s.pid) && s.pid > 0 ? h >= Qt && (await or(s) || s.procStart === undefined && await Xr(u, o)) : h >= kt)) {
            n.push(s);
            continue;
        }
        let A = join(Cce(), `${u}.${process.pid}.claimed`);
        try {
            await rename(join(Cce(), u), A);
        } catch  {
            continue;
        }
        await unlink(A).catch(()=>{});
        ar(s);
    }
    return n;
}
function ar(e) {
    let r = e.interactiveReached === true;
    let o = !r && e.marksExpected === false;
    let n = r && typeof e.attachMs === "number" && Number.isFinite(e.attachMs) && e.attachMs >= 0 && e.attachMs < 86400000 ? Math.round(e.attachMs) : undefined;
    i("tengu_bg_attach_outcome", {
        outcome: d(r || o ? "detached" : "error"),
        got_ack: r || typeof e.marksExpected === "boolean",
        got_first_frame: r ? true : o ? undefined : false,
        synthetic: true,
        apc_detach: false,
        timed_out: r || o ? undefined : true,
        journal_recovered: true,
        attach_ms: n,
        first_frame_kind: pe(r ? "real" : undefined),
        marks_expected: r ? true : typeof e.marksExpected === "boolean" ? e.marksExpected : undefined,
        attempt: typeof e.attempt === "number" && Number.isInteger(e.attempt) && e.attempt >= 0 && e.attempt < 1000000 ? e.attempt + 1 : 0,
        gesture_id: ye(e.gestureId),
        surface: pe(e.surface === "fleet" || e.surface === "bg_cli" ? e.surface : undefined),
        daemon_booted: typeof e.daemonBooted === "boolean" ? e.daemonBooted : undefined,
        attach_cold: typeof e.attachCold === "boolean" ? e.attachCold : undefined,
        via: pe(Wgt(e.via)),
        msgs_loaded: r ? Irt(e.msgsLoaded) : undefined,
        msgs_in_jsonl: r ? Irt(e.msgsInJsonl) : undefined,
        msgs_rendered_at_first_paint: r ? Irt(e.msgsRenderedAtFirstPaint) : undefined
    });
}
async function en(e) {
    if (!await Ee()) {
        return [];
    }
    let r = [];
    let cursor;
    do {
        let s = await e.listEntries({
            namespace: "daemon",
            relPath: [
                YMn
            ]
        }, cursor === undefined ? undefined : {
            cursor
        });
        if (!s.ok) {
            return [];
        }
        for (let h of s.value.items){
            if (h.kind !== "key" || h.key.namespace !== "daemon" || h.key.relPath.length !== 2 || h.key.relPath[0] !== YMn) {
                continue;
            }
            let file_1 = h.key.relPath[1];
            if (file_1 !== undefined) {
                r.push({
                    file: file_1,
                    size: h.size,
                    mtimeMs: h.mtimeMs
                });
            }
        }
        cursor = s.value.cursor;
    }while (cursor !== undefined)
    let n = Date.now();
    let u = [];
    for (let { file, size, mtimeMs } of r){
        let w = mtimeMs !== undefined && We(mtimeMs, n);
        if (!file.endsWith(".json")) {
            if (w) {
                await e.delete(Ue(file));
            }
            continue;
        }
        let A = size !== undefined && size > nt ? null : await qr(e, file);
        if (A === null) {
            if (w) {
                await e.delete(Ue(file));
            }
            continue;
        }
        let k = A.entry;
        let S = n - k.startedAtEpochMs;
        if (!(typeof k.pid === "number" && Number.isInteger(k.pid) && k.pid > 0 ? S >= Qt && (await or(k) || k.procStart === undefined && We(A.mtimeMs, n)) : S >= kt)) {
            u.push(k);
            continue;
        }
        let L = await e.delete(Ue(file), {
            precondition: {
                type: "ifMatch",
                version: A.version
            }
        });
        if (!L.ok || !L.value.existed) {
            continue;
        }
        ar(k);
    }
    return u;
}
const nn = 10000;
const ccn = "ENORESPONSE";
const Qft = "Session isn't responding";
const sr = {
    ENOJOB: "enojob",
    ETIMEOUT: "etimeout",
    ECWDGONE: "ecwdgone",
    EUNKNOWN: "eunknown",
    ENOREPLY: "enoreply",
    ERESPAWNING: "erespawning",
    ESTALE: "estale",
    EALIVE: "ealive",
    ESTARTING: "estarting",
    EPEERUID: "epeeruid",
    ETOOLARGE: "etoolarge",
    EUNVERIFIED: "eunverified",
    EAUTH: "eauth",
    EPROTO: "eproto",
    EHOSTDEAD: "ehostdead",
    ESKEW: "eskew"
};
function on(code) {
    if (Object.hasOwn(sr, code)) {
        return sr[code];
    }
    return "unknown_code";
}
function an(e) {
    if (e === undefined || e === "") {
        return;
    }
    if (_qe.test(e)) {
        return "ekicked";
    }
    if (e.includes("ERESPAWNING")) {
        return "erespawning";
    }
    if (e.includes("ESTARTING")) {
        return "estarting";
    }
    if (e.includes("ESTALLED")) {
        return "estalled";
    }
    if (e.includes("EUNVERIFIED")) {
        return "eunverified";
    }
    if (e.includes("EHOSTDEAD")) {
        return "ehostdead";
    }
    if (xTt.test(e)) {
        return "unknown_code";
    }
    return "worker_detach";
}
function Uq(e, r, o) {
    if (!e) {
        return;
    }
    let n = e.interactive?.reached;
    let u = r === "detached" ? e.interactive?.marksExpected : undefined;
    let s = r === "detached" && n === undefined && u === true;
    let h = s && e.t0 !== undefined ? Math.round(performance.now() - e.t0) : undefined;
    i("tengu_bg_attach_outcome", {
        outcome: d(r),
        got_ack: false,
        got_first_frame: false,
        synthetic: true,
        apc_detach: false,
        failure_class: pe(r === "error" ? o ?? "daemon_unavailable" : undefined),
        gesture_id: ye(e.gestureId),
        attempt: ++e.attempt,
        surface: pe(e.surface),
        daemon_booted: e.daemonBooted,
        via: pe(e.interactive?.via),
        attach_cold: e.interactive?.attachCold,
        attach_ms: n !== undefined ? n.attachMs : h,
        content_paint_ms: n !== undefined ? Math.round(n.contentPaintMs) : undefined,
        prompt_idle_ms: n !== undefined ? Math.round(n.promptIdleMs) : undefined,
        msgs_loaded: n?.msgsLoaded,
        msgs_in_jsonl: n?.msgsInJsonl,
        msgs_rendered_at_first_paint: n?.msgsRenderedAtFirstPaint,
        first_frame_kind: pe(n !== undefined ? "real" : undefined),
        marks_expected: n !== undefined ? true : u,
        attach_censored: s ? true : undefined
    });
}
async function dcn(e) {
    let r = await Jm({
        proto,
        op: "has",
        short: e
    });
    return r.ok && r.op === "has" && r.present === false;
}
const vt = 2;
const lr = 26;
const fr = 100;
const sn = 8;
const dn = Buffer.from([
    127
]);
const mr = 98;
const pr = 122;
const dt = Buffer.from("\x1B[27;5;98~", "latin1");
const hr = Buffer.from("\x1B[27;5;122~", "latin1");
const cn = Buffer.from("\x1B[27u", "latin1");
const ln = Buffer.from("\x1B[27;1u", "latin1");
const un = 3;
const fn = 99;
const mn = Buffer.from("\x1B[27;5;99~", "latin1");
const dr = Buffer.from(zJ, "ascii");
const Et = Buffer.from(wIn, "ascii");
const cr = Buffer.from("\x1B_cc-d", "ascii");
const Je = Buffer.from("\x1B[?9001", "ascii");
const pn = 100;
function Te(e, r, o) {
    return e.length - r >= o.length && e.compare(o, 0, o.length, r, r + o.length) === 0;
}
function He(e, r, o) {
    if (e[r] !== 27 || e[r + 1] !== 91) {
        return 0;
    }
    let n = r + 2;
    let u = ()=>{
        let w = -1;
        for(let A = 0; A < 8 && n < e.length; A++){
            let k = e[n];
            if (k < 48 || k > 57) {
                break;
            }
            w = (w < 0 ? 0 : w) * 10 + (k - 48);
            n++;
        }
        return w;
    };
    let s = u();
    if (s < 0) {
        return 0;
    }
    let h = -1;
    if (e[n] === 58) {
        n++;
        u();
        if (e[n] === 58) {
            n++;
            h = u();
        }
    }
    if (e[n] !== 59 || e[n + 1] !== 53 || e[n + 2] !== 117) {
        return 0;
    }
    if ((s > 127 && h >= 0 ? h : s) === o) {
        return n + 3 - r;
    }
    return 0;
}
function xe(e, r) {
    let o = Math.min(e.length, r.length - 1);
    e: for(let n = o; n > 0; n--){
        let u = e.length - n;
        for(let s = 0; s < n; s++){
            if (e[u + s] !== r[s]) {
                continue e;
            }
        }
        return n;
    }
    return 0;
}
const q = Buffer.alloc(0);
function gr(e, prefixArmed) {
    for(let o = 0; o < e.length; o++){
        let n = e[o];
        if (prefixArmed) {
            prefixArmed = false;
            if (n === fr) {
                return {
                    matched: true,
                    prefixArmed: false
                };
            }
            continue;
        }
        if (n === lr || n === un || He(e, o, pr) || Te(e, o, hr) || He(e, o, fn) || Te(e, o, mn)) {
            return {
                matched: true,
                prefixArmed: false
            };
        }
        let u = n === vt ? 1 : He(e, o, mr) || (Te(e, o, dt) ? dt.length : 0);
        if (u) {
            o += u - 1;
            prefixArmed = true;
        }
    }
    return {
        matched: false,
        prefixArmed
    };
}
function _r(stdin) {
    let r = false;
    let o = false;
    let n;
    let promise = new Promise((resolve)=>{
        n = resolve;
    });
    let s = ()=>{
        if (r) {
            return;
        }
        let h;
        while((h = stdin.read()) !== null){
            let T = typeof h === "string" ? Buffer.from(h, "utf8") : h;
            let w = gr(T, o);
            o = w.prefixArmed;
            if (w.matched) {
                r = true;
                n();
                return;
            }
        }
    };
    stdin.on("readable", s);
    if ("resume" in stdin && "pause" in stdin) {
        stdin.resume();
        stdin.pause();
    }
    s();
    return {
        promise,
        cancel: ()=>{
            r = true;
            stdin.removeListener("readable", s);
        }
    };
}
function ucn(e) {
    return gr(e, false).matched;
}
async function XKn(e, r = {}) {
    let o = r.stdin ?? process.stdin;
    let n = r.stdout ?? process.stdout;
    let u = "columns" in n ? n.columns || 120 : 120;
    let s = "rows" in n ? n.rows || 30 : 30;
    let h = u;
    let T = s;
    let attachId = randomUUID();
    let auth = await $Ae();
    let k = Date.now();
    let S = performance.now();
    let F = r.telemetry?.t0;
    let H = F !== undefined && Number.isFinite(F) && F >= 0 && F <= S && S - F < 86400000 ? F : S;
    if (r.telemetry?.gestureId !== undefined) {
        rr(r.telemetry.gestureId, r.telemetry.attempt, r.telemetry.storageV5);
    }
    let contentPaintMs;
    let promptIdleMs;
    let msgsLoaded;
    let msgsInJsonl;
    let msgsRenderedAtFirstPaint;
    let N = q;
    let P = r.telemetry?.interactive?.reached;
    let _e = false;
    let Ne;
    let be = setTimeout(()=>{
        if (P === undefined && (contentPaintMs === undefined || promptIdleMs === undefined)) {
            _e = true;
            Ne = performance.now() - H;
        }
    }, Math.max(0, 30000 - (S - H)));
    let Ce = false;
    let ack_ms;
    let via;
    let le;
    let De;
    let ke;
    let stale;
    let ve;
    let cached;
    let requireNonce;
    let got_first_frame = false;
    let meaningful_ms;
    function Ve(meaningful) {
        let ms = Date.now() - k;
        if (meaningful && meaningful_ms === undefined) {
            meaningful_ms = ms;
        }
        if (got_first_frame) {
            return;
        }
        got_first_frame = true;
        Ce = !meaningful;
        i("tengu_bg_attach_first_frame", {
            ms,
            meaningful_ms,
            ack_ms,
            gesture_id: ye(r.telemetry?.gestureId),
            attempt: r.telemetry?.attempt,
            via: pe(via),
            tempo: pe(De),
            stale,
            state: CG(ke),
            cached
        });
    }
    let ze;
    let Oe = new Promise((resolve)=>{
        ze = resolve;
    });
    let Y = false;
    let got_ack = false;
    let de;
    let Z = false;
    let oe;
    let xt = u;
    let It = s;
    let Ye = INt();
    let Nt = ()=>Ymt({
            legacyKitty: ve !== ({
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
    let Cr = O() === "windows" && !D0r();
    let Or = r.holdScreenOnDisconnect && O() === "windows" ? true : "isRaw" in o ? Boolean(o.isRaw) : false;
    let pt = O() === "windows";
    let Be = Buffer.from(VH, "ascii");
    let Br = Buffer.from(qH, "ascii");
    let Dt = pt && z0r();
    let Ft = false;
    let ht;
    let ce;
    try {
        ce = connect(J2());
    } catch (error) {
        let R = r.telemetry?.interactive?.reached;
        let E = typeof r.telemetry?.interactive?.marksExpected === "boolean" ? r.telemetry.interactive.marksExpected : undefined;
        i("tengu_bg_attach_outcome", {
            outcome: d("error"),
            got_ack: false,
            got_first_frame: false,
            ms: Date.now() - k,
            apc_detach: false,
            failure_class: d("connect_throw"),
            gesture_id: ye(r.telemetry?.gestureId),
            attempt: r.telemetry?.attempt,
            surface: pe(r.telemetry?.surface),
            daemon_booted: r.telemetry?.daemonBooted,
            attach_ms: R !== undefined ? R.attachMs : E === true ? Math.round(performance.now() - H) : undefined,
            content_paint_ms: R !== undefined ? Math.round(R.contentPaintMs) : undefined,
            prompt_idle_ms: R !== undefined ? Math.round(R.promptIdleMs) : undefined,
            msgs_loaded: R?.msgsLoaded,
            msgs_in_jsonl: R?.msgsInJsonl,
            msgs_rendered_at_first_paint: R?.msgsRenderedAtFirstPaint,
            first_frame_kind: pe(R !== undefined ? "real" : undefined),
            marks_expected: R !== undefined ? true : E,
            attach_censored: R === undefined && E === true ? true : undefined,
            via: pe(r.telemetry?.interactive?.via),
            attach_cold: r.telemetry?.interactive?.attachCold
        });
        clearTimeout(be);
        return {
            outcome: "error",
            msg: EE(l(error))
        };
    }
    ce.setTimeout(10000, ()=>{
        if (!got_ack) {
            re("error", `${tm()} did not respond \u2014 it may be stalled${lye("restart")}`, {
                failureClass: "ack_timeout"
            });
        }
    });
    function re(outcome, R, E) {
        if (Y) {
            return;
        }
        let { viaApc, beforeFirstFrame, failureClass } = E ?? {};
        Y = true;
        clearTimeout(ht);
        clearTimeout(be);
        clearTimeout(de);
        let D = Math.round(performance.now() - H);
        let x = contentPaintMs !== undefined && promptIdleMs !== undefined ? Math.round(Math.max(contentPaintMs, promptIdleMs)) : undefined;
        let J = requireNonce !== undefined || r.telemetry?.interactive?.marksExpected === true;
        let timed_out = P === undefined && J && _e && x === undefined;
        let attach_censored = P === undefined && J && !timed_out && x === undefined;
        let Dr = P !== undefined ? P.attachMs : timed_out ? Math.round(Ne ?? D) : attach_censored ? D : x;
        let Fr = P !== undefined ? "real" : x !== undefined ? "real" : got_first_frame ? Ce && meaningful_ms === undefined ? "dimhint" : "unknown" : undefined;
        i("tengu_bg_attach_outcome", {
            outcome: d(outcome),
            got_ack,
            got_first_frame,
            ms: Date.now() - k,
            gesture_id: ye(r.telemetry?.gestureId),
            attempt: r.telemetry?.attempt,
            via: pe(r.telemetry?.interactive?.via ?? via),
            tempo: pe(De),
            apc_detach: viaApc === true,
            failure_class: pe(failureClass),
            state: CG(ke),
            cached,
            meaningful_ms,
            input_accepted_ms: qe,
            input_delivered_ms: qe,
            keys_dropped,
            attach_ms: Dr,
            content_paint_ms: P !== undefined ? Math.round(P.contentPaintMs) : contentPaintMs !== undefined ? Math.round(contentPaintMs) : undefined,
            prompt_idle_ms: P !== undefined ? Math.round(P.promptIdleMs) : promptIdleMs !== undefined ? Math.round(promptIdleMs) : undefined,
            timed_out,
            attach_censored,
            marks_expected: P !== undefined ? true : got_ack || typeof r.telemetry?.interactive?.marksExpected === "boolean" ? J : undefined,
            attach_cold: r.telemetry?.interactive?.attachCold ?? (via !== undefined ? via === "cold" && (le ?? true) : undefined),
            daemon_booted: r.telemetry?.daemonBooted,
            surface: pe(r.telemetry?.surface),
            first_frame_kind: pe(Fr),
            msgs_loaded: P?.msgsLoaded ?? msgsLoaded,
            msgs_in_jsonl: P?.msgsInJsonl ?? msgsInJsonl,
            msgs_rendered_at_first_paint: P?.msgsRenderedAtFirstPaint ?? msgsRenderedAtFirstPaint
        });
        if (got_ack) {
            let jr = r.alreadyInAlt || outcome === "disconnected" && r.holdScreenOnDisconnect;
            n.write(`${nJe + Ye.snapshot().map(nK).reverse().join("") + VH + (O() === "windows" ? Xdn : "")}[0m7${wZ}8${eJe() ? exn : ""}${jr ? "" : Oee()}`);
        }
        if (!Or) {
            OS(o, false);
        }
        o.removeListener("readable", _t);
        o.removeListener("end", Wt);
        if ("removeListener" in n) {
            n.removeListener("resize", gt);
        }
        clearTimeout(oe);
        ce.destroy();
        ze({
            outcome,
            msg: R,
            viaApc,
            beforeFirstFrame
        });
    }
    function Pr() {
        re("error", `${ccn}: ${Qft}`, {
            failureClass: "no_response"
        });
    }
    function gt() {
        if (Y) {
            return;
        }
        if (oe === undefined) {
            xt = h;
            It = T;
        }
        h = "columns" in n ? n.columns || u : u;
        T = "rows" in n ? n.rows || s : s;
        clearTimeout(oe);
        oe = setTimeout(()=>{
            oe = undefined;
            if (Y) {
                return;
            }
            if (h < xt || T < It) {
                n.write(XE + Ub);
            }
            Lt();
            Jm({
                proto,
                op: "resize",
                short: e,
                cols: h,
                rows: T,
                attachId
            });
        }, 50);
    }
    let jt = performance.now();
    function Lt() {
        let B = Ye.snapshot();
        if (!B.includes(1004)) {
            return;
        }
        n.write(Nt() + B.map(TU).join(""));
    }
    let Ut = r.gateStdinUntilFirstFrame === true && "isTTY" in o && o.isTTY === true;
    let qe;
    let keys_dropped = 0;
    let Mr = U0o();
    function Re(B) {
        let R = ()=>Mr(B.toString("latin1"));
        if (!Ut || got_first_frame) {
            if (qe === undefined && !R()) {
                qe = Date.now() - k;
            }
            ce.write(B);
        } else if (!R()) {
            keys_dropped++;
        }
    }
    function xr(B) {
        if (Y) {
            return;
        }
        let R = typeof B === "string" ? Buffer.from(B, "utf8") : B;
        let E = 0;
        for(let M = 0; M < R.length; M++){
            let y = R[M];
            if (Z) {
                Z = false;
                if (M > E) {
                    Re(R.subarray(E, M));
                }
                if (y === fr) {
                    return re("detached");
                }
                Re(Buffer.from([
                    vt,
                    y
                ]));
                E = M + 1;
                continue;
            }
            if (Ut && !got_first_frame && (y === 27 && R.length === 1 || Te(R, M, cn) || Te(R, M, ln))) {
                return re("detached", undefined, {
                    beforeFirstFrame: true
                });
            }
            if (y === lr || He(R, M, pr) || Te(R, M, hr)) {
                if (M > E) {
                    Re(R.subarray(E, M));
                }
                return re("detached");
            }
            if (Cr && y === sn) {
                if (M > E) {
                    Re(R.subarray(E, M));
                }
                Re(dn);
                E = M + 1;
                continue;
            }
            let U = y === vt ? 1 : He(R, M, mr) || (Te(R, M, dt) ? dt.length : 0);
            if (U) {
                if (M > E) {
                    Re(R.subarray(E, M));
                }
                M += U - 1;
                E = M + 1;
                Z = true;
            }
        }
        if (E < R.length) {
            Re(R.subarray(E));
        }
    }
    function _t() {
        let B = performance.now();
        if (B - jt > Wdn) {
            Lt();
        }
        jt = B;
        let R;
        while((R = o.read()) !== null){
            xr(R);
        }
    }
    function Wt() {
        re("detached");
    }
    let Le = q;
    let Xe = q;
    let Pe = q;
    let Ae = q;
    function Jt(B) {
        if (!pt) {
            return B;
        }
        let R = Pe.length > 0;
        let E = R ? Buffer.concat([
            Pe,
            B
        ]) : B;
        if (R) {
            Pe = q;
        }
        if (Dt) {
            let G = E.lastIndexOf(Be);
            let Se = E.lastIndexOf(Br);
            if (G !== Se) {
                Ft = G > Se;
            }
        }
        let M = E.indexOf(Be);
        if (M < 0) {
            let G = xe(E, Be);
            if (G === 0) {
                return E;
            }
            Pe = Buffer.from(E.subarray(E.length - G));
            return E.subarray(0, E.length - G);
        }
        let y = [];
        let U = 0;
        let D = M;
        while(true){
            if (D > U) {
                y.push(E.subarray(U, D));
            }
            U = D + Be.length;
            D = E.indexOf(Be, U);
            if (D < 0) {
                break;
            }
        }
        let x = E.subarray(U);
        let J = xe(x, Be);
        if (J > 0) {
            Pe = Buffer.from(x.subarray(x.length - J));
        }
        if (x.length > J) {
            y.push(x.subarray(0, x.length - J));
        }
        if (y.length === 0) {
            return q;
        }
        if (y.length === 1) {
            return y[0];
        }
        return Buffer.concat(y);
    }
    function Ht(B) {
        let R = Ae.length > 0;
        let E = R ? Buffer.concat([
            Ae,
            B
        ]) : B;
        if (R) {
            Ae = q;
        }
        let M = E.indexOf(Je);
        if (M < 0) {
            let x = xe(E, Je);
            if (x === 0) {
                return E;
            }
            Ae = Buffer.from(E.subarray(E.length - x));
            return E.subarray(0, E.length - x);
        }
        let y = [];
        let U = 0;
        let D = M;
        while(D >= 0){
            let x = D + Je.length;
            if (x >= E.length) {
                if (D > U) {
                    y.push(E.subarray(U, D));
                }
                Ae = Buffer.from(E.subarray(D));
                U = E.length;
                break;
            }
            let J = E[x];
            if (J === 104 || J === 108) {
                if (D > U) {
                    y.push(E.subarray(U, D));
                }
                U = x + 1;
            }
            D = E.indexOf(Je, Math.max(U, D + 1));
        }
        if (U < E.length) {
            let x = E.subarray(U);
            let J = xe(x, Je);
            if (J > 0) {
                Ae = Buffer.from(x.subarray(x.length - J));
            }
            if (x.length > J) {
                y.push(x.subarray(0, x.length - J));
            }
        }
        if (y.length === 0) {
            return q;
        }
        if (y.length === 1) {
            return y[0];
        }
        return Buffer.concat(y);
    }
    let Gt = r.alreadyInAlt && !r.holdingFrame;
    function Kt(B) {
        let { out, meaningful, renders } = Ir(B);
        if (out.length === 0) {
            return;
        }
        if (!renders) {
            n.write(out);
            return;
        }
        if (Gt) {
            Gt = false;
            n.write(XE + Ub);
        }
        n.write(out);
        Ye.feed(out.toString("latin1"), (y)=>{
            if (y === 1004) {
                let U = Nt();
                if (U) {
                    n.write(U);
                }
            }
        });
        Ve(meaningful);
    }
    let Ze = q;
    let et = false;
    let Me = false;
    let yt = false;
    function Vt(B) {
        let R = false;
        let E = 0;
        if (yt) {
            yt = false;
            Me = false;
            if (B[0] === 92) {
                E = 1;
            }
        }
        while(E < B.length){
            if (Me) {
                let y = E;
                while(y < B.length && B[y] !== 27 && B[y] !== 24 && B[y] !== 26){
                    y++;
                }
                if (y >= B.length) {
                    return R;
                }
                if (B[y] !== 27) {
                    Me = false;
                    E = y + 1;
                    continue;
                }
                if (y === B.length - 1) {
                    yt = true;
                    return R;
                }
                if (B[y + 1] === 92) {
                    Me = false;
                    E = y + 2;
                    continue;
                }
                Me = false;
                E = y;
                continue;
            }
            let M = B.indexOf(cr, E);
            if (M < 0) {
                return true;
            }
            R ||= M > E;
            Me = true;
            E = M + cr.length;
        }
        return R;
    }
    function Ir(B) {
        let R = Ze.length > 0 ? Buffer.concat([
            Ze,
            B
        ]) : B;
        Ze = q;
        let meaningful = false;
        let M = false;
        let y = [];
        let U = 0;
        while(true){
            let G = R.indexOf(Et, U);
            if (G < 0) {
                break;
            }
            if (G > U) {
                let Se = R.subarray(U, G);
                y.push(Se);
                if (!et) {
                    meaningful = Vt(Se) || meaningful;
                } else {
                    M = true;
                }
            }
            et = !et;
            U = G + Et.length;
        }
        let D = R.subarray(U);
        let x = xe(D, Et);
        if (x > 0) {
            Ze = Buffer.from(D.subarray(D.length - x));
            D = D.subarray(0, D.length - x);
        }
        if (D.length > 0) {
            y.push(D);
            if (!et) {
                meaningful = Vt(D) || meaningful;
            } else {
                M = true;
            }
        }
        return {
            out: y.length === 0 ? q : y.length === 1 ? y[0] : Buffer.concat(y),
            meaningful,
            renders: meaningful || M
        };
    }
    function zt(B) {
        if (Y) {
            return;
        }
        let R = requireNonce !== undefined && P === undefined && (contentPaintMs === undefined || promptIdleMs === undefined);
        let E = rno(N, B, {
            requireNonce
        });
        N = E.carry;
        let E_cleaned = E.cleaned;
        if (R) {
            for (let x of E.marks){
                let J = performance.now() - H;
                if (x.kind === "content_paint" && contentPaintMs === undefined) {
                    contentPaintMs = J;
                    msgsLoaded = x.msgsLoaded;
                    msgsInJsonl = x.msgsInJsonl;
                    msgsRenderedAtFirstPaint = x.msgsRenderedAtFirstPaint;
                } else if (x.kind === "prompt_idle" && promptIdleMs === undefined) {
                    promptIdleMs = J;
                }
                if (contentPaintMs !== undefined && promptIdleMs !== undefined) {
                    clearTimeout(be);
                    let attachMs = Math.round(Math.max(contentPaintMs, promptIdleMs));
                    if (r.telemetry?.interactive !== undefined) {
                        r.telemetry.interactive.reached = {
                            attachMs,
                            contentPaintMs,
                            promptIdleMs,
                            msgsLoaded,
                            msgsInJsonl,
                            msgsRenderedAtFirstPaint
                        };
                    }
                    if (r.telemetry?.gestureId !== undefined) {
                        Jft(r.telemetry.gestureId, {
                            interactiveReached: true,
                            attachMs,
                            msgsLoaded,
                            msgsInJsonl,
                            msgsRenderedAtFirstPaint
                        }, r.telemetry.storageV5);
                    }
                }
            }
        }
        let y = Xe.length > 0 ? Buffer.concat([
            Xe,
            E_cleaned
        ]) : E_cleaned;
        let U = y.indexOf(dr);
        if (U >= 0) {
            let x = y.subarray(0, U);
            if (U > 0) {
                let G = Ht(Jt(x));
                if (G.length > 0) {
                    Kt(G);
                }
            }
            Xe = q;
            Pe = q;
            Ae = q;
            let J = sno(x);
            return re("detached", J, {
                viaApc: true,
                failureClass: an(J)
            });
        }
        let D = xe(y, dr);
        if (y.length > D) {
            let x = y.subarray(0, y.length - D);
            let J = Ht(Jt(x));
            if (J.length > 0) {
                Kt(J);
            }
        }
        Xe = D > 0 ? Buffer.from(y.subarray(y.length - D)) : q;
        if (Dt) {
            clearTimeout(ht);
            ht = setTimeout(()=>{
                if (!Y && Ft) {
                    n.write(VH);
                }
            }, pn);
        }
    }
    ce.on("data", (B)=>{
        if (Y) {
            return;
        }
        if (got_ack) {
            clearTimeout(de);
            zt(B);
            return;
        }
        Le = Buffer.concat([
            Le,
            B
        ]);
        let R = Le.indexOf(10);
        if (R < 0) {
            return;
        }
        let E = Le.subarray(0, R).toString("utf8");
        let M = Le.subarray(R + 1);
        let y;
        try {
            y = X(E);
        } catch (error) {
            return re("error", `bad ack: ${l(error)}`, {
                failureClass: "bad_ack"
            });
        }
        if (typeof y !== "object" || y === null) {
            return re("error", "bad ack: non-object ack line", {
                failureClass: "bad_ack"
            });
        }
        if (!y.ok) {
            return re("error", `${y.code}: ${y.error}`, {
                failureClass: on(y.code)
            });
        }
        got_ack = true;
        ce.setTimeout(0);
        if (!r.holdingFrame && M.length === 0) {
            de = setTimeout(Pr, nn);
        }
        ack_ms = Date.now() - k;
        via = y.op === "attach" ? Wgt(y.via) : undefined;
        le = y.op === "attach" && typeof y.booting === "boolean" ? y.booting : undefined;
        requireNonce = y.op === "attach" && typeof y.imarkNonce === "string" ? y.imarkNonce : undefined;
        if (r.telemetry?.gestureId !== undefined) {
            Jft(r.telemetry.gestureId, {
                marksExpected: requireNonce !== undefined,
                daemonBooted: typeof r.telemetry.daemonBooted === "boolean" ? r.telemetry.daemonBooted : undefined,
                attachCold: via !== undefined ? via === "cold" && (le ?? true) : undefined,
                via
            }, r.telemetry.storageV5);
        }
        if (r.telemetry?.interactive !== undefined) {
            r.telemetry.interactive.marksExpected = r.telemetry.interactive.marksExpected === true || requireNonce !== undefined;
            if (via !== undefined && r.telemetry.interactive.reached === undefined) {
                r.telemetry.interactive.attachCold = via === "cold" && (le ?? true);
                r.telemetry.interactive.via = via;
            }
        }
        De = y.op === "attach" ? y.tempo : undefined;
        ke = y.op === "attach" ? y.state : undefined;
        stale = y.op === "attach" ? y.stale : undefined;
        ve = y.op === "attach" ? y.workerCliVersion : undefined;
        cached = y.op === "attach" ? y.cached : undefined;
        if (a.TMUX && !B0().tmuxRgbApplied) {
            B0().tmuxRgbApplied = true;
            it("tmux", [
                "set",
                "-as",
                "terminal-features",
                ",*:RGB"
            ]);
        }
        let D = ((y.op === "attach" ? y.decModes : undefined) ?? []).map(TU).join("");
        Ye.feed(D);
        if ("ref" in o) {
            o.ref();
        }
        OS(o, true);
        let legacyKitty = ve !== ({
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
        n.write(r.alreadyInAlt ? qH + Ymt({
            legacyKitty
        }) + D : Q$t({
            legacyKitty
        }) + D + (pt ? qH : "") + `
  \x1B[2mAttaching\u2026\x1B[0m
`);
        if ("on" in n) {
            n.on("resize", gt);
        }
        if ("columns" in n && (n.columns || u) !== u || "rows" in n && (n.rows || s) !== s) {
            gt();
        }
        o.on("readable", _t);
        if ("resume" in o && "pause" in o) {
            o.resume();
            o.pause();
        }
        o.once("end", Wt);
        _t();
        if (M.length) {
            zt(M);
        }
    });
    ce.on("error", (B)=>re("error", EE(l(B)), {
            failureClass: "socket_error"
        }));
    ce.once("close", ()=>{
        if (!Y) {
            re(got_ack ? "disconnected" : "error", "control socket closed", {
                failureClass: "socket_closed"
            });
        }
    });
    ce.once("connect", ()=>{
        ce.write(_({
            proto,
            op: "attach",
            short: e,
            auth,
            cols: u,
            rows: s,
            attachId,
            caps: {
                ...gn(),
                ...r.sessionTabs !== undefined && {
                    sessionTabs: r.sessionTabs,
                    ...r.tabsLanding && {
                        tabsLanding: r.tabsLanding
                    }
                }
            },
            ...r.holdingFrame && {
                holdingFrame: true
            }
        }) + `
`);
    });
    return Oe;
}
function gn() {
    return {
        imark: true,
        terminal: a.terminal,
        mux: a.TMUX ? "tmux" : process.env.ZELLIJ != null ? "zellij" : a.STY ? "screen" : null,
        ssh: a.isSSH(),
        wheelFlood: G0r(),
        hyperlinks: dw(),
        progressReporting: eJe(),
        wtSession: !!a.WT_SESSION,
        isVscodeTerm: a.TERM_PROGRAM === "vscode",
        keyDialect: vht(a.TERM),
        browser: a.BROWSER ?? null,
        colorLevel: ge.level,
        syncOutput: bNo(),
        editor: a.VISUAL || a.EDITOR || null,
        systemTheme: MKo(),
        ...a.TMUX && {
            tmuxSocket: Qe(a.TMUX, ",")
        }
    };
}
const _n = 7;
const bn = {
    head: 40,
    tail: 20
};
const yn = {
    head: 50,
    tail: 30
};
const br = 1000;
const maxBuffer = 1000000;
async function lt(e) {
    let [r, o] = await Promise.all([
        Rt(e, [
            "log",
            "--no-show-signature",
            `--max-count=${br}`,
            "--format=%H%x00%s",
            "HEAD",
            "--not",
            "--remotes"
        ]),
        Rt(e, [
            "symbolic-ref",
            "-q",
            "--short",
            "HEAD"
        ])
    ]);
    if (r.code !== 0) {
        return;
    }
    let n = r.stdout.split(`
`).map((s)=>s.split("\x00")).filter((s)=>s.length === 2 && s[0] !== "");
    let u = n[0];
    if (u === undefined || !e9(u[0])) {
        return;
    }
    return {
        branch: o.code === 0 ? ec(o.stdout, yn) || null : null,
        count: n.length,
        headSha: u[0],
        shortSha: u[0].slice(0, _n),
        subject: ec(u[1], bn)
    };
}
function vHr(e) {
    return `${e.count}${yr(e)} unpushed ${I(e.count, "commit")} on ${e.branch ?? "detached HEAD"}`;
}
function F0o(e) {
    let r = e.count > 1 ? ` and ${e.count - 1}${yr(e)} more` : "";
    return `${vHr(e)}: ${[
        e.shortSha,
        e.subject
    ].filter(Boolean).join(" ")}${r}`;
}
async function At(e, headSha) {
    if (!e9(headSha)) {
        return false;
    }
    let o = await Rt(e, [
        "rev-parse",
        "HEAD"
    ]);
    return o.code === 0 && o.stdout.trim() === headSha;
}
async function Rt(cwd, r) {
    return ct(Ot(), [
        ...An,
        ...r
    ], {
        cwd,
        env: Cs(),
        maxBuffer
    });
}
function yr(e) {
    if (e.count >= br) {
        return "+";
    }
    return "";
}
const kNt = "recap.trigger";
function In(e, storageV5) {
    if (j() && storageV5 !== undefined) {
        let o = $e.job(e, [
            kNt
        ]);
        if (Mg(o) === undefined) {
            storageV5.write(o, "", {
                publishDiscipline: "inPlace"
            }).catch(()=>{});
            return;
        }
    }
    writeFile(join(Yr(e), kNt), "").catch(()=>{});
}
async function Kwe(e, r, o, n) {
    if (r?.backend === "peer") {
        return {
            confirmed: true
        };
    }
    let handoff = o?.handoff ? true : undefined;
    let evict = o?.evict ? true : undefined;
    let h = o?.knownGone ? {
        ok: false,
        code: "ENOJOB",
        error: "job already gone (caller-verified)"
    } : await Jm({
        proto,
        op: "kill",
        short: e,
        handoff,
        evict
    });
    for(let T = 0; !h.ok && h.code === "ESTARTING" && T < 10; T++){
        await Q(200);
        h = await Jm({
            proto,
            op: "kill",
            short: e,
            handoff,
            evict
        });
    }
    if (h.ok) {
        return {
            confirmed: true
        };
    }
    if (h.code === "ENOJOB" || h.code === "ENOCONN" || h.code === "ETIMEOUT") {
        let T = await JKn(e, n);
        if (T.anyMatch && h.code === "ENOJOB") {
            return {
                confirmed: T.confirmed
            };
        }
        let w = false;
        if (h.code === "ENOCONN" || h.code === "ETIMEOUT") {
            let A;
            if (T.anyMatch) {
                A = T.confirmed;
            } else {
                let k = await xD({
                    silent: true
                }, n);
                let S = k.workers[e];
                if (S !== undefined) {
                    let F = await TIn(S.pid, S.procStart);
                    if (F === "zombie") {
                        if (S.procStart !== undefined && await X_(S.pid, S.procStart) === true) {
                            try {
                                process.kill(-S.pid, "SIGKILL");
                            } catch  {
                                try {
                                    process.kill(S.pid, "SIGKILL");
                                } catch  {}
                            }
                            A = true;
                        } else {
                            A = false;
                        }
                    } else {
                        A = F !== "live";
                    }
                } else {
                    w = h.code === "ENOCONN" && !T.scanFailed && !k.parseFailed && r?.state !== undefined && Ra({
                        state: r.state,
                        tempo: r.tempo
                    });
                    A = w;
                }
            }
            if (evict && A && h.code === "ENOCONN" && !w) {
                await GJ((k)=>{
                    delete k.workers[e];
                }, n).catch((k)=>c(k));
            }
            return {
                confirmed: A
            };
        }
        return {
            confirmed: true
        };
    }
    return {
        confirmed: false,
        error: h.error
    };
}
async function JKn(e, r) {
    let ctrlSent = await j1e(kE(e));
    let anyMatch = false;
    let u = true;
    let scanFailed = false;
    let h = await _Q(r).catch(()=>{
        scanFailed = true;
        return [];
    });
    for (let T of h){
        if (T.kind === "bg" && (T.jobId === e || T.sessionId?.startsWith(e))) {
            anyMatch = true;
            if (!ctrlSent) {
                try {
                    process.kill(T.pid, "SIGTERM");
                } catch  {}
            }
            let w = Date.now() + 3000;
            let A = true;
            while((A = await X6t(T.pid, T.procStart)) && Date.now() < w){
                await Q(100);
            }
            if (A) {
                i("tengu_bg_killjob_ctrl_fallback", {
                    ctrlSent
                });
                try {
                    process.kill(T.pid, "SIGTERM");
                } catch  {}
                let k = Date.now() + 500;
                while((A = await X6t(T.pid, T.procStart)) && Date.now() < k){
                    await Q(100);
                }
            }
            if (A) {
                u = false;
            }
        }
    }
    return {
        confirmed: u,
        anyMatch,
        scanFailed
    };
}
async function TNt(e) {
    let r = await Jm({
        proto,
        op: "list"
    });
    if (r.ok && r.op === "list") {
        return {
            shorts: new Set(r.jobs.map((s)=>s.short)),
            records: r.jobs.filter((s)=>!s.outcome)
        };
    }
    let o = await xD({
        silent: true
    }, e);
    let n = Object.entries(o.workers);
    let u = await Promise.all(n.map(([, s])=>X6t(s.pid, s.procStart)));
    return {
        shorts: new Set(n.filter((s, h)=>u[h]).map(([s])=>s)),
        records: []
    };
}
async function pcn(e, r) {
    let o = await Jm({
        proto,
        op: "has",
        short: e
    });
    if (o.ok && o.op === "has") {
        return {
            alive: o.alive,
            present: o.present ?? o.alive,
            daemonUp: true
        };
    }
    let n = (await xD({
        silent: true
    }, r)).workers[e];
    let u = n !== undefined && await X6t(n.pid, n.procStart);
    return {
        alive: u,
        present: u,
        daemonUp: false
    };
}
async function EHr(e) {
    let r = await Jm({
        proto,
        op: "has",
        short: e
    });
    if (r.ok && r.op === "has") {
        return r.present ?? r.alive;
    }
    return false;
}
function nXe(e, r) {
    let o = e.tempo === "blocked" && e.state !== "blocked" && e.block === undefined && kZo(e.needs);
    return {
        ...e,
        ...Frt(e) && {
            state: "working"
        },
        detail: Ud(ps(r).replace(/\s+/g, " ").trim(), Ef),
        ...!o && {
            tempo: "active",
            needs: undefined,
            block: undefined
        },
        suggestedReply: undefined,
        output: null,
        updatedAt: new Date().toISOString()
    };
}
const sIe = "That session isn't running — respawn it first";
const QKn = "Can't send — that session is running in another terminal";
function Er() {
    return `Couldn't reach the ${tm()} \u2014 it may be restarting. Press Enter to retry`;
}
function kHr(e) {
    return e.startsWith(Er());
}
const Tt = " — your message was saved and will be sent when you next restart this session";
async function wr(e, text, o) {
    Bf(e);
    let n = await ro(e, o);
    if (!n || iIe(text, n)) {
        return false;
    }
    let u = oXe(n);
    if (u !== undefined) {
        return u === text;
    }
    return pee(e, n, text, o);
}
async function rXe(e, text, o, n, u, s, { nextTurn = false } = {}) {
    let T = Date.now();
    let w = (N, P, _e)=>{
        i("tengu_bg_reply_outcome", {
            ms: Date.now() - T,
            outcome: d(N),
            error_code: pe(P),
            errno: cA(_e)
        });
    };
    if (o?.backend === "peer") {
        if (!o.sock) {
            g("job_reply");
            w("ok");
            return {
                err: QKn
            };
        }
        try {
            await M8t(o.sock, text, s);
            g("job_reply");
            w("ok");
            return null;
        } catch (error) {
            m("job_reply", "job_reply_peer_send_failed");
            w("bad", "job_reply_peer_send_failed");
            return {
                err: `Couldn't send to that session \u2014 ${l(error)}`
            };
        }
    }
    let A = Yr(e);
    let k = n ?? await ro(A, s);
    let auth = await $Ae();
    let F = false;
    let H = false;
    let L = async ()=>{
        if (nextTurn) {
            let P = await Jm({
                proto,
                op: "ping"
            });
            if (!P.ok) {
                return P;
            }
            if (P.op !== "ping" || P.version !== ({
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
                H = true;
                return {
                    ok: false,
                    error: "its supervisor runs a different Claude Code build",
                    code: "ESKEW"
                };
            }
        }
        let N = await Jm({
            proto,
            op: "reply",
            short: e,
            text,
            auth,
            ...nextTurn && {
                nextTurn
            }
        });
        if (!N.ok && "connected" in N && N.connected === true) {
            F = true;
        }
        return N;
    };
    let C = await L();
    let V = async ()=>{
        let N = 10;
        for(let P = 0; !C.ok && (C.code === "ESTARTING" || C.code === "ENOREPLY" || C.code === "ERESPAWNING") && P < N; P++){
            if (C.code === "ERESPAWNING") {
                N = 60;
            }
            await Q(200);
            C = await L();
        }
    };
    await V();
    if (!C.ok && C.code === "EAUTH") {
        let N = await $Ae();
        if (N && N !== auth) {
            auth = N;
            C = await L();
        }
    }
    let ensure_failed = false;
    if (!C.ok && (C.code === "ENOCONN" || C.code === "ETIMEOUT") && !(nextTurn && F)) {
        let N = await Bq({
            forceTransient: true
        }, s);
        ensure_failed = !N.ok;
        if (N.ok) {
            auth = await $Ae() ?? auth;
            C = await L();
            await V();
        }
    }
    if (C.ok) {
        if (k && !n) {
            Bf(A);
            let N = await ro(A, s) ?? k;
            let P = nXe(N, text);
            if (P.queuedPrompt === text) {
                P.queuedPrompt = undefined;
            }
            ic(A, P, s).catch(cl);
        }
        if (!n) {
            i("tengu_bg_agent_action", {
                action: b("reply"),
                wasTerminal: k ? HI(k.state) : false,
                daemon: true,
                jobSessionId: ye(o?.sessionId ?? k?.sessionId),
                ...u?.()
            });
            g("job_reply");
            w("ok");
        }
        return null;
    }
    if (C.code === "ESKEW") {
        let N = H ? "job_reply_daemon_skewed" : "job_reply_worker_skewed";
        m("job_reply", N);
        w("bad", N);
        return {
            err: C.error,
            code: C.code
        };
    }
    if (C.code === "ENOJOB") {
        if (!n) {
            f("job_reply", "job_reply_not_running");
            w("sad", "job_reply_not_running");
        }
        return {
            err: sIe,
            code: C.code
        };
    }
    if (C.code === "ENOCONN" || C.code === "ETIMEOUT") {
        if (!n && C.code === "ENOCONN") {
            let P = (await xD({
                silent: true
            }, s)).workers[k?.daemonShort ?? e];
            if (P && !await X6t(P.pid, P.procStart)) {
                f("job_reply", "job_reply_not_running");
                w("sad", "job_reply_not_running");
                return {
                    err: sIe,
                    code: "ENOJOB"
                };
            }
        }
        if (!n) {
            m("job_reply", "job_reply_daemon_unreachable", {
                errno: d(C.code),
                ensure_failed
            });
            w("bad", "job_reply_daemon_unreachable");
        }
        let N = !n && C.code === "ENOCONN" && !C.connected && !F && await wr(A, text, s);
        if (nextTurn && !F) {
            return {
                err: `its supervisor did not answer${N ? Tt : ""}`,
                code: "EUNREACHABLE",
                queued: N
            };
        }
        return {
            err: Er() + (N ? Tt : ""),
            code: C.code,
            queued: N
        };
    }
    if (!n) {
        m("job_reply", "job_reply_send_failed");
        w("bad", "job_reply_send_failed", C.code);
    }
    let K = !n && !F && await wr(A, text, s);
    return {
        err: `Couldn't send your message \u2014 ${C.error}` + (K ? Tt : ""),
        code: C.code,
        queued: K
    };
}
async function kr(e, r, storageV5) {
    let n = await e3t(Yr(e), storageV5);
    if (n === null) {
        g("job_attach");
        Uq(r, "detached");
        return {
            kind: "error",
            ended: true,
            msg: "That session was removed — back to the list"
        };
    }
    if (n.state === "done" || n.state === "stopped" || n.state === "blocked") {
        g("job_attach");
        Uq(r, "detached");
        return {
            kind: "error",
            ended: true,
            msg: n.state === "stopped" ? "That session was stopped — back to the list" : n.state === "blocked" ? "That session is blocked — back to the list" : "That session ended — back to the list"
        };
    }
    if (n.state === "failed") {
        if (n.detail === w0e || n.detail === CTt) {
            m("job_attach", "job_attach_host_dead");
            Uq(r, "error");
            return {
                kind: "error",
                msg: n.detail === CTt ? yqe : `${hqe} \u2014 press Enter to restart it`
            };
        }
        let u = n.detail.includes("before init");
        f("job_attach", u ? "job_attach_pre_init_crash" : "job_attach_crash_loop");
        return {
            kind: "error",
            ended: true,
            crashed: true,
            msg: `Session can't start \u2014 ${n.detail.replace(/^.*?before init(?: \u2014 )?/, "").replace(/^Error:\s*/, "") || n.detail || "it crashed repeatedly"}`
        };
    }
}
const Ct = {
    forceTransient: true,
    standsDownAtExit: true
};
async function THr(e, r = {}) {
    return await Nn(e, r, {
        overStream: false,
        onlyToRetry: false
    });
}
async function Nn(e, r, o) {
    In(e, r.storageV5);
    t("[PERF:bg-attach-start]");
    JXe();
    let n = kTt;
    let sessionTabs;
    let s = ETt;
    let h = {
        holdScreenOnDisconnect: true,
        alreadyInAlt: r.alreadyInAlt,
        gateStdinUntilFirstFrame: r.gateStdinUntilFirstFrame,
        sessionTabs,
        tabsLanding: r.tabsLanding
    };
    let T = {
        ...h,
        holdingFrame: true,
        gateStdinUntilFirstFrame: false,
        tabsLanding: undefined
    };
    let w = r.gesture ?? {
        gestureId: randomUUID(),
        attempt: 0,
        interactive: {}
    };
    let A = !r.alreadyInAlt;
    let k = await Ge(e, o, {
        ...h,
        telemetry: {
            gestureId: w.gestureId,
            attempt: ++w.attempt,
            t0: w.t0,
            surface: w.surface,
            daemonBooted: w.daemonBooted,
            interactive: w.interactive,
            storageV5: r.storageV5
        }
    });
    let S;
    if (k.outcome === "error" && k.msg && n.test(k.msg)) {
        S = await Bq(Ct, r.storageV5);
        if (S.ok) {
            k = await Ge(e, o, {
                ...h,
                telemetry: {
                    gestureId: w.gestureId,
                    attempt: ++w.attempt,
                    t0: w.t0,
                    surface: w.surface,
                    daemonBooted: w.daemonBooted,
                    interactive: w.interactive,
                    storageV5: r.storageV5
                }
            });
        }
    }
    for(let H = 0; k.msg && s.test(k.msg) && H < 20; H++){
        await Q(500);
        k = await Ge(e, o, {
            ...h,
            telemetry: {
                gestureId: w.gestureId,
                attempt: ++w.attempt,
                t0: w.t0,
                surface: w.surface,
                daemonBooted: w.daemonBooted,
                interactive: w.interactive,
                storageV5: r.storageV5
            }
        });
    }
    let F = async ()=>{
        if (A) {
            process.stdout.write(Oee());
        }
        let H = await kr(e, w, r.storageV5);
        if (H) {
            return H;
        }
        f("job_attach", "job_attach_crashed");
        return {
            kind: "error",
            orphaned: true,
            msg: "Session crashed — press Enter to respawn"
        };
    };
    while(k.outcome === "disconnected"){
        if (wn()) {
            if (A) {
                process.stdout.write(Oee());
            }
            return Bt("loop_head", r);
        }
        let H = " Reconnecting… ";
        let L = Math.max(1, (process.stdout.columns ?? 80) - H.length);
        process.stdout.write(`\x1B7${N1(1, L)}\x1B[2;7m${H}\x1B[0m\x1B8`);
        let C;
        if (process.stdin.isTTY) {
            let K = "isRaw" in process.stdin ? Boolean(process.stdin.isRaw) : false;
            if (!K) {
                OS(process.stdin, true);
            }
            let N = _r(process.stdin);
            try {
                C = await Promise.race([
                    Bq(Ct, r.storageV5),
                    N.promise.then(()=>"detach")
                ]);
            } finally{
                N.cancel();
                if (!K) {
                    OS(process.stdin, false);
                }
            }
        } else {
            C = await Bq(Ct, r.storageV5);
        }
        if (C === "detach") {
            if (A) {
                process.stdout.write(Oee());
            }
            t("[PERF:bg-attach-end]");
            g("job_attach");
            Uq(w, "detached");
            return {
                kind: "detached"
            };
        }
        let V = C;
        if (!V.ok) {
            if (A) {
                process.stdout.write(Oee());
            }
            if (V.stoodDown) {
                return Bt("reconnect", r, V);
            }
            m("job_attach", `job_attach_daemon_start_failed_${V.causeCode}`);
            Uq(w, "error");
            return {
                kind: "error",
                msg: `Couldn't restart the ${tm()} \u2014 ${V.reason}`
            };
        }
        let ee = JXe();
        if (ee && ucn(ee)) {
            if (A) {
                process.stdout.write(Oee());
            }
            t("[PERF:bg-attach-end]");
            g("job_attach");
            Uq(w, "detached");
            return {
                kind: "detached"
            };
        }
        if (await dcn(e)) {
            t(`[bg-attach] worker gone on reconnect probe short=${e} \u2014 settled while attached`);
            return F();
        }
        k = await Ge(e, o, {
            ...T,
            telemetry: {
                gestureId: w.gestureId,
                attempt: ++w.attempt,
                t0: w.t0,
                surface: w.surface,
                daemonBooted: w.daemonBooted,
                interactive: w.interactive,
                storageV5: r.storageV5
            }
        });
        for(let K = 0; k.msg && s.test(k.msg) && K < 10; K++){
            await Q(200);
            k = await Ge(e, o, {
                ...T,
                telemetry: {
                    gestureId: w.gestureId,
                    attempt: ++w.attempt,
                    t0: w.t0,
                    surface: w.surface,
                    daemonBooted: w.daemonBooted,
                    interactive: w.interactive,
                    storageV5: r.storageV5
                }
            });
        }
        if (k.msg?.includes("ENOJOB")) {
            t(`[bg-attach] ENOJOB on reconnect short=${e} \u2014 daemon has no handle (or it's killing/settled)`);
            return F();
        }
        if (k.outcome === "error" && A) {
            process.stdout.write(Oee());
        }
    }
    if (k.outcome === "detached" && k.msg && !o.onlyToRetry && (RTt.test(k.msg) || s.test(k.msg))) {
        if (A) {
            process.stdout.write(Oee());
        }
        m("job_attach", "job_attach_stalled");
        return {
            kind: "error",
            msg: k.msg.replace(/^E(STALLED|RESPAWNING|STARTING):\s*/, "")
        };
    }
    if (k.outcome === "error") {
        if (k.msg?.startsWith(`${ATt}:`)) {
            m("job_attach", "job_attach_host_dead");
            let L = await ro(Yr(e), r.storageV5).catch(()=>null);
            let C = k.msg.slice(ATt.length + 1).trim();
            return {
                kind: "error",
                msg: L !== null && wk(L) ? C : `${C} \u2014 press Enter to restart it`
            };
        }
        if (k.msg?.startsWith(`${ccn}:`)) {
            m("job_attach", "job_attach_no_response");
            let L = await ro(Yr(e), r.storageV5).catch(()=>null);
            if (L !== null && wk(L)) {
                return {
                    kind: "error",
                    msg: `${Qft} \u2014 it runs a shell command, which is never run again for you; ctrl+x stops it`
                };
            }
            return {
                kind: "error",
                notResponding: true,
                msg: `${Qft} \u2014 press Enter again to restart it (the conversation is saved)`
            };
        }
        if (k.msg?.includes("ENOJOB")) {
            t(`[bg-attach] ENOJOB on first attach short=${e} \u2014 daemon has no handle (or it's killing/settled)`);
            let L = await kr(e, undefined, r.storageV5);
            if (L) {
                return L;
            }
            f("job_attach", "job_attach_orphaned");
            return {
                kind: "error",
                orphaned: true,
                msg: `${Dle()} lost track of this job \u2014 press Enter to respawn it`
            };
        }
        if (S && !S.ok) {
            if (S.stoodDown) {
                return Bt("first_attach", r, S);
            }
            m("job_attach", `job_attach_daemon_start_failed_${S.causeCode}`);
            Uq(w, "error");
            return {
                kind: "error",
                msg: `Couldn't start the ${tm()} \u2014 ${S.reason}`
            };
        }
        let H = k.msg && s.test(k.msg) ? `${Dle()} is still starting \u2014 try again in a moment` : k.msg && n.test(k.msg) ? `${Dle()} didn't respond after starting \u2014 try again in a moment` : k.msg ? `Couldn't attach \u2014 ${k.msg}` : "Couldn't attach to that session";
        m("job_attach", "job_attach_failed");
        return {
            kind: "error",
            msg: H
        };
    }
    t("[PERF:bg-attach-end]");
    g("job_attach");
    if (k.msg && _qe.test(k.msg)) {
        return {
            kind: "detached",
            msg: k.msg.replace(_qe, "")
        };
    }
    if (k.beforeFirstFrame) {
        return {
            kind: "detached",
            beforeFirstFrame: true
        };
    }
    return {
        kind: "detached"
    };
}
const Dn = "Background sessions still running will stop in about a minute. Run 'claude agents' to keep them.";
async function Bt(e, r, o) {
    let n = O();
    let [u, s] = o ? [
        undefined,
        o.viaService === true && n !== "macos"
    ] : await Promise.all([
        Jm({
            proto,
            op: "ping"
        }, {
            timeoutMs: 300
        }),
        W0o()
    ]);
    let daemon_up = u !== undefined && (u.ok || u.code === "ETIMEOUT");
    let T = !daemon_up && !s && n !== "windows" && process.stdout.isTTY ? `${Dn}
` : "";
    t(`[bg-attach] held: this process is exiting (${e})`);
    i("tengu_bg_attach_held_at_exit", {
        loop_head: e === "loop_head",
        first_attach: e === "first_attach",
        daemon_up,
        service_restart: s,
        notice: T !== ""
    });
    if (r.alreadyInAlt) {
        r.onExitNotice?.(T);
    } else if (T) {
        process.stdout.write(T);
    }
    return Qu();
}
const vr = 32;
const Fn = {
    head: 50,
    tail: 30
};
const jn = {
    head: 60,
    tail: 100
};
const ZKn = new RegExp(`^[0-9a-f]{${vr}}$`);
function Ln(e) {
    return at(e).slice(0, vr);
}
async function cie(e, r = {}, storageV5) {
    let n = await ro(Yr(e), storageV5);
    let u = n?.worktreePath ? await _Q(storageV5).catch(()=>[]) : [];
    let s = new Set;
    for (let S of u){
        if (S.kind === "bg" && (S.jobId === e || S.sessionId?.startsWith(e))) {
            s.add(S.pid);
        }
    }
    let h = await Kwe(e, n ?? undefined, {
        knownGone: r.knownGone,
        evict: true
    }, storageV5).catch((S)=>({
            confirmed: false,
            error: l(S)
        }));
    if (!h.confirmed) {
        t(`deleteJob: kill unconfirmed for ${e} \u2014 skipping jobdir/worktree removal to avoid stranding a live worker`, {
            level: "warn"
        });
        if (!r.internal) {
            m("job_delete", "kill_unconfirmed", {
                had_worktree: Boolean(n?.worktreePath)
            });
        }
        return {
            removed: false,
            error: h.error,
            errorCode: "kill_unconfirmed"
        };
    }
    let leftWorktreeDir;
    let forcedWorktreeRemoval;
    let A = false;
    if (n?.worktreePath) {
        let S = n.worktreePath;
        let keptReason;
        let cause;
        let forceRemoveWithheld;
        let C = null;
        let V = "present";
        let ee = false;
        let keptErrorSummary;
        let keptUnpushed;
        let P;
        let { dirty, trackedChanges, gitError, submoduleWork } = await eDe(S, undefined);
        let te = YTn(S, n.originCwd) ?? undefined;
        let W = await realpath(S).catch(()=>S);
        let worktreeDigest = Ln(W);
        A = r.discardUnpushed !== undefined && !gitError && r.discardUnpushed.worktreeDigest === worktreeDigest && await At(W, r.discardUnpushed.headSha);
        let De = !gitError && te ? await She(te).catch(()=>null) : null;
        let ke;
        let Fe = false;
        for (let [ne, de] of (De ?? []).entries()){
            if (await realpath(de.worktreePath).catch(()=>de.worktreePath) === W) {
                ke = de;
                Fe = ne > 0 && !de.prunable;
                break;
            }
        }
        let ve = jor(W);
        let je = te !== undefined && ve !== null && await realpath(ve).catch(()=>ve) === await realpath(te).catch(()=>te);
        let ae = Fe && je ? submoduleWork?.kind === "unverifiable" ? "submodule" : trackedChanges ? "tracked_changes" : undefined : te !== undefined && await JTn(W, te) ? undefined : "not_registered";
        let forceRemoveRequested = r.forceRemoveWorktree !== undefined && r.forceRemoveWorktree === worktreeDigest;
        let fe = forceRemoveRequested && ae === undefined && QTn(W);
        let Ve = fe ? "job_delete_force_remove" : r.force === true || A ? "job_delete_force" : "job_delete";
        let ze = Jqt(Ve);
        let Oe = qqt(ke?.lockReason);
        let Y;
        if ((Y = await Un(e, W, S, storageV5)) !== null) {
            keptReason = "in_use";
            keptErrorSummary = Y.verified && wM.test(Y.jobId) ? Y.jobId : undefined;
            t(`deleteJob: ${S} is claimed by running job ${Y.jobId}'s state.json (${Y.verified ? "verified" : "unverifiable claim"}) \u2014 not ours to remove`, {
                level: "warn"
            });
        } else if (((ee = await Orn(S) === null) || A || fe) && (V = await j1(S)) !== "gone" && (C = V === "unreadable" ? "unreadable" : await Pt(e, W, S, {
            includeUnsettled: A || fe
        }, storageV5)) !== null) {
            if (C === "claimed" && !ee && A) {
                keptReason = "unpushed_shared";
                keptUnpushed = await lt(S).catch(()=>{});
            } else {
                keptReason = C === "claimed" ? "shared_record" : "records_unreadable";
            }
            t(C === "claimed" ? `deleteJob: ${S} is also recorded by another settled job's state.json \u2014 not removing another session's output` : `deleteJob: could not verify ${S} against sibling records \u2014 refusing until records are readable`, {
                level: "warn"
            });
        } else if (!await S2e(ke?.lockReason) && !(Oe !== null && s.has(Oe))) {
            keptReason = "live_lock";
            keptErrorSummary = Oe !== null ? `pid ${Oe}` : undefined;
            t(`deleteJob: ${S} is locked by a live Claude Code process, or with a reason we did not write (${ke?.lockReason}) \u2014 not ours to remove`, {
                level: "warn"
            });
        } else if ((P = await $n(u, e, s, W, S)) !== undefined && await j1(S) !== "gone") {
            keptReason = "occupied";
            keptErrorSummary = P.pid === process.pid ? `${typeof P.parkedJobId === "string" && wM.test(P.parkedJobId) ? `session ${P.parkedJobId},` : "a session"} moved to the background from this window, pid ${P.pid}` : P.kind === "bg" && typeof P.jobId === "string" && wM.test(P.jobId) ? `background session ${P.jobId}, pid ${P.pid}` : `pid ${P.pid}, ${P.kind}`;
            t(`deleteJob: ${S} is the working directory of a live session (pid ${P.pid}, ${P.kind}) \u2014 not ours to remove`, {
                level: "warn"
            });
        } else if (dirty && !gitError && !ze) {
            keptReason = "dirty";
            t(`deleteJob: worktree has uncommitted changes, kept ${S}`, {
                level: "warn"
            });
        } else if (!gitError && te && !A && !await Wor(S, await Qqt(te), {
            primaryCheckoutVouches: true
        })) {
            if (await Pt(e, W, S, {
                includeUnsettled: false
            }, storageV5) === "claimed") {
                keptReason = "unpushed_shared";
                t(`deleteJob: ${S} has unpushed commits and is also recorded by another settled job's state.json \u2014 not offering a discard`, {
                    level: "warn"
                });
            } else {
                keptReason = "unpushed";
                t(`deleteJob: ${S} has commits that are on no remote, kept`, {
                    level: "warn"
                });
            }
            keptUnpushed = await lt(S).catch(()=>{});
        } else if (A && r.discardUnpushed !== undefined && !await At(W, r.discardUnpushed.headSha)) {
            keptReason = "unpushed";
            t(`deleteJob: ${S} HEAD moved past the confirmed discard pin, kept`, {
                level: "warn"
            });
            keptUnpushed = await lt(S).catch(()=>{});
        } else {
            let ne = YTn(S, n.originCwd) ?? undefined;
            let de = (n.originCwd ? ur(n.originCwd) : null) ?? undefined;
            let Z = await sne(S, n.worktreeBranch, ne, n.worktreeHookBased, Ve, W, de, {
                storageV5,
                forceRemoveRequested
            }).catch((oe)=>{
                t(`deleteJob: removeAgentWorktree threw for ${S}: ${l(oe)}`, {
                    level: "error"
                });
                return {
                    outcome: "failed",
                    errorSummary: `the removal failed unexpectedly (${ec(l(oe), jn)})`
                };
            });
            if (Z.outcome === "failed") {
                keptReason = Z.needsForce ? "unverified" : Z.errorSummary === E2e ? "identity_changed" : "remove_failed";
                keptErrorSummary = Z.needsForce ? undefined : Z.errorSummary;
                if (Z.forceRemovable !== undefined && QTn(W)) {
                    if (ae !== undefined) {
                        forceRemoveWithheld = ae;
                    } else if (await Pt(e, W, S, {
                        includeUnsettled: false
                    }, storageV5) === "claimed") {
                        forceRemoveWithheld = "shared_record";
                    } else {
                        cause = Z.forceRemovable;
                    }
                }
            } else if (Z.outcome === "left_in_place") {
                leftWorktreeDir = ec(S);
            } else if (Z.forcedDirectoryRemoval) {
                let { keptBranch } = Z.forcedDirectoryRemoval;
                forcedWorktreeRemoval = {
                    worktree: ec(W),
                    ...keptBranch !== undefined && {
                        keptBranch: ec(keptBranch, Fn)
                    }
                };
            }
        }
        if (keptReason) {
            if (!r.internal) {
                f("job_delete", `worktree_kept_${keptReason}`, {
                    had_worktree: true
                });
            }
            return {
                removed: false,
                keptWorktree: ec(W),
                keptReason,
                ...keptErrorSummary !== undefined && {
                    keptErrorSummary
                },
                ...keptUnpushed !== undefined && {
                    keptUnpushed
                },
                ...keptReason === "unpushed" && keptUnpushed !== undefined ? {
                    discardUnpushed: {
                        headSha: keptUnpushed.headSha,
                        worktreeDigest
                    }
                } : cause !== undefined && A && r.discardUnpushed !== undefined && {
                    discardUnpushed: r.discardUnpushed
                },
                ...cause !== undefined && {
                    forceRemoveWorktree: {
                        worktreeDigest,
                        cause
                    }
                },
                ...forceRemoveWithheld !== undefined && {
                    forceRemoveWithheld
                },
                ...submoduleWork !== undefined && (keptReason === "dirty" || keptReason === "remove_failed") && {
                    submoduleWork
                }
            };
        }
    }
    let k = n?.fan?.some((S)=>S.kind === "shell" && S.doneAt === undefined) ?? false;
    await Yt(Yr(e), {
        waitMs: k ? 4000 : 0
    });
    try {
        await rm(Yr(e), {
            recursive: true,
            force: true
        });
    } catch (error) {
        Bf(Yr(e));
        t(`deleteJob: failed to remove job dir for ${e}: ${l(error)}`, {
            level: "warn"
        });
        if (!r.internal) {
            m("job_delete", "jobdir_rm_failed", {
                had_worktree: Boolean(n?.worktreePath)
            });
        }
        return {
            removed: false,
            error: `couldn't remove the session's state directory (${Nr(l(error))})`,
            errorCode: "jobdir_rm_failed"
        };
    }
    if (j() && storageV5 !== undefined && Mg(o4n(e)) === undefined) {
        await xNt(storageV5, e);
    } else {
        await unlink(s_e(e)).catch(()=>{});
    }
    Bf(Yr(e));
    if (!r.internal) {
        if (leftWorktreeDir) {
            f("job_delete", "worktree_left_in_place", {
                had_worktree: true,
                discard_confirmed: A
            });
        } else if (forcedWorktreeRemoval) {
            f("job_delete", "worktree_force_removed", {
                had_worktree: true,
                discard_confirmed: A
            });
        } else {
            g("job_delete", {
                had_worktree: Boolean(n?.worktreePath),
                discard_confirmed: A
            });
        }
    }
    return {
        removed: true,
        discardConfirmed: A,
        ...leftWorktreeDir && {
            leftWorktreeDir
        },
        ...forcedWorktreeRemoval && {
            forcedWorktreeRemoval
        }
    };
}
async function Un(e, r, o, storageV5) {
    for (let u of (await LA(undefined, storageV5).catch(()=>[]))){
        if (u.id === e || !u.state.worktreePath || Ra(u.state)) {
            continue;
        }
        let s = Rr(u.state.worktreePath, r, o);
        if (s === "match") {
            return {
                jobId: u.id,
                verified: true
            };
        }
        if (s === "unverifiable") {
            return {
                jobId: u.id,
                verified: false
            };
        }
        let h = await Ar(u.state.worktreePath, o);
        if (Ie(h, r)) {
            return {
                jobId: u.id,
                verified: true
            };
        }
    }
    return null;
}
function Rr(worktreePath, r, o) {
    if (Ie(worktreePath, o) || Ie(worktreePath, r)) {
        return "match";
    }
    if (!Qa(worktreePath)) {
        return "no_match";
    }
    let n = normalize(worktreePath);
    if (Ie(n, o) || Ie(n, r)) {
        return "match";
    }
    if (isAbsolute(worktreePath) && !Bn(worktreePath) && !Va(worktreePath)) {
        return "unverifiable";
    }
    return "no_match";
}
function Ie(e, r) {
    return ft(e) === ft(r);
}
function ft(e) {
    return Ku(On(e));
}
function Sr(e, r) {
    let o = relative(ft(r), ft(e));
    return o.split(/[/\\]/, 1)[0] !== ".." && !isAbsolute(o);
}
async function $n(e, r, o, n, u) {
    for (let s of e){
        if (s.kind !== "interactive" && s.kind !== "bg") {
            continue;
        }
        if (o.has(s.pid) || s.parkedJobId === r) {
            continue;
        }
        if (s.pid === process.pid && s.parkedJobId === undefined) {
            continue;
        }
        let h = s.pid === process.pid ? we() : s.cwd;
        if (typeof h !== "string" || !isAbsolute(h)) {
            continue;
        }
        if (!Sr(h, n) && !Sr(h, u)) {
            continue;
        }
        if (s.kind === "bg" && typeof s.jobId === "string" && wM.test(s.jobId)) {
            if (await Tr(Yr(s.jobId)) === "missing") {
                continue;
            }
        }
        return s;
    }
}
function Ar(worktreePath, r) {
    let o = se();
    if (!isAbsolute(worktreePath) || Qa(worktreePath) || Gi(worktreePath, o) && Gi(worktreePath, r)) {
        return worktreePath;
    }
    let n = HN(ie(), worktreePath, {
        surfaceNetworkRaw: true,
        anchors: [
            o,
            r
        ]
    });
    if (n === Dh) {
        return worktreePath;
    }
    if (n !== undefined && (Qa(n) || Gi(n, o) && Gi(n, r))) {
        return worktreePath;
    }
    return realpath(worktreePath).catch(()=>worktreePath);
}
async function Tr(e) {
    return lstat(join(e, "state.json")).then(()=>"present", (r)=>{
        if (z(r)) {
            return "missing";
        }
        return "unreadable";
    });
}
async function Pt(e, r, o, { includeUnsettled }, storageV5) {
    let s;
    try {
        s = await readdir(EM(), {
            withFileTypes: true
        });
    } catch (error) {
        if (z(error)) {
            return null;
        }
        return "unreadable";
    }
    for (let h of s){
        if (!h.isDirectory() || h.name === e) {
            continue;
        }
        let T = join(EM(), h.name);
        let w = await ro(T, storageV5);
        if (w === null) {
            if (await Tr(T) === "missing") {
                continue;
            }
            return "unreadable";
        }
        if (!w.worktreePath || !includeUnsettled && !Ra(w)) {
            continue;
        }
        let A = Rr(w.worktreePath, r, o);
        if (A === "match") {
            return "claimed";
        }
        if (A === "unverifiable") {
            return "unreadable";
        }
        let k = await Ar(w.worktreePath, o);
        if (Ie(k, r)) {
            return "claimed";
        }
    }
    return null;
}
async function Ge(e, r, o) {
    return await XKn(e, o);
}
export { U1e, Jft, WN, ccn, Qft, Uq, dcn, ucn, XKn, vHr, F0o, kNt, Kwe, JKn, TNt, pcn, EHr, nXe, sIe, QKn, kHr, rXe, THr, ZKn, cie };
