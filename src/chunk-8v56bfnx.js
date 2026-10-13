import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, z, jt, hy } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { X, $o, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve, Z8e } from "/$bunfs/root/chunk-6kc68p18.js";
import { Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { ipt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { HP, RGn, Ape } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { rw, lPe, aRr, eon, AAo } from "/$bunfs/root/chunk-3fj60qgx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { $M, _Rt, bl, M0n, H0n } from "/$bunfs/root/chunk-4521ay78.js";
import { AIs, fr, o9, $e, xIs } from "/$bunfs/root/chunk-se8vehhp.js";
import { $xe, gut } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { c_e, fmr, fLe, pHn, bmr, JAt, QAt, Zds, eus, fio, wmr } from "/$bunfs/root/chunk-46dhek9m.js";
import { ym, oGn, sGn, tc } from "/$bunfs/root/chunk-zwxj12s4.js";
import { lyr } from "/$bunfs/root/chunk-4r6b8efh.js";
import { gno, Sqe, Ra } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { Hw } from "/$bunfs/root/chunk-t0b6khh6.js";
import { cn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Dyo, iH, k, MY, mi } from "/$bunfs/root/chunk-0ycjphb5.js";
import { NHt, Xzn, DPs, LPs, PTo, ITo, NPs, GSe } from "/$bunfs/root/chunk-2d9a83dh.js";
import { fon } from "/$bunfs/root/chunk-x47nahfr.js";
import { fe, Qn, bvo, Dv, TP, eUe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { ja, Um } from "/$bunfs/root/chunk-hz24p3zh.js";
import { sl } from "/$bunfs/root/chunk-pp3y3t61.js";
import { CSn } from "/$bunfs/root/chunk-ed1ys28d.js";
import { BM, I5, yNe, dV, R4e, eLn, dms, PB, _Ne, ums } from "/$bunfs/root/chunk-9fvky64k.js";
import { yoo } from "/$bunfs/root/chunk-53bavyda.js";
import { lbt, YVr } from "/$bunfs/root/chunk-865ywm15.js";
import { Ore, aCe, oi } from "/$bunfs/root/chunk-pfdtn0nk.js";
import { NJ, iZr, HVe, Mkt, GZr, Hrs, gye, Aos } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { JVr } from "/$bunfs/root/chunk-cgerwwzw.js";
import { GSn, BYo } from "/$bunfs/root/chunk-zsdche9n.js";
import { zj, Pae, s3, vSt, fL, W8r, z8r } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Ep } from "/$bunfs/root/chunk-y9c4grt0.js";
import { J9t } from "/$bunfs/root/chunk-38fr02qr.js";
import { QHn, ZHn, eDn, tDn } from "/$bunfs/root/chunk-ypkrahyx.js";
import { Pts } from "/$bunfs/root/chunk-em70188r.js";
import { vDn } from "/$bunfs/root/chunk-qnrk8yjg.js";
import { WGt } from "/$bunfs/root/chunk-z085q3gs.js";
import { ige } from "/$bunfs/root/chunk-62d2d3kv.js";
import { AYo } from "/$bunfs/root/chunk-p7g4jxq3.js";
import { _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { o, E, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import * as x from "fs/promises";
import { homedir, tmpdir } from "os";
import { basename, dirname, join } from "path";
const ke = "image-cache";
async function ce() {
    let e = ie();
    let r = join(ve(), ke);
    let s = K();
    try {
        let n;
        try {
            n = await e.readdir(r);
        } catch  {
            return;
        }
        for (let f of n){
            if (f.name === s) {
                continue;
            }
            let a = join(r, f.name);
            try {
                await e.rm(a, {
                    recursive: true,
                    force: true
                });
                t(`Cleaned up old image cache: ${a}`);
            } catch  {}
        }
        try {
            if ((await e.lstat(r)).isDirectory()) {
                await e.rmdir(r);
            }
        } catch  {}
    } catch  {}
}
const mr = p(()=>u({
        key: o(),
        integrity: o().nullable(),
        time: E()
    }));
const Ee = 0;
const Ce = [
    "ccr-tip.json",
    "custom-title.json",
    "precompact.json",
    "sent-prefix.json",
    QHn
];
function ue(e) {
    let r = o9(e);
    return fr(e) && r.length === 1 && r[0] === e.toLowerCase() && NPs(e);
}
function Oe(name) {
    return Ce.some((r)=>name === r || HP(name, r)) || name.startsWith(ZHn) && (name.endsWith(".json") || name.includes(".json.tmp.")) || name.startsWith(eDn) && name.endsWith(".md");
}
async function ASn(e) {
    if (!cn("userSettings") && Qn()?.cleanupPeriodDays === undefined) {
        t("Skipping retention cleanup: userSettings source is disabled (--setting-sources) and no enabled source provides cleanupPeriodDays.");
        return "user_source_disabled";
    }
    if (fe("policySettings")?.cleanupPeriodDays !== undefined) {
        return null;
    }
    if (ige().errors.filter((s)=>!s.mcpErrorMetadata && s.severity !== "warning").length > 0) {
        for (let s of gut){
            let n = await eUe(s, e, s === "desktopSessionCleanupPeriodDays" ? {
                presenceSources: [
                    "userSettings",
                    "flagSettings"
                ]
            } : undefined);
            if (n === "unknowable") {
                t(`Skipping cleanup: a settings file could not be read or parsed, so ${s} may be set to a value that cannot be seen. Fix the settings file (see /doctor) to re-enable cleanup.`);
                return "settings_unknowable";
            }
            if (n === "present") {
                t(`Skipping cleanup: settings have validation errors but ${s} was explicitly set. Fix settings errors to enable cleanup.`);
                return "settings_invalid_key_set";
            }
        }
    }
    return null;
}
async function UVr(e) {
    return await ASn(e) === null;
}
function db(e) {
    let s = (Qn() || {}).cleanupPeriodDays ?? QAt;
    if (s === 0) {
        return null;
    }
    if (e !== undefined && e < s) {
        s = e;
    }
    let n = s * 24 * 60 * 60 * 1000;
    return new Date(Date.now() - n);
}
const Z = ".desktop-released.json";
const be = 4096;
function ee(e) {
    return e.slice(0, -6) + Z;
}
const Fe = p(()=>u({
        reason: o().optional()
    }));
async function le(e, r, s) {
    let n = await r.readFileFdGated(e, be);
    if (n === null) {
        return "none";
    }
    let f;
    try {
        let a = Fe().safeParse(X(n.content));
        f = a.success ? a.data.reason : undefined;
    } catch  {
        return "none";
    }
    if (f === "delete") {
        return "release-now";
    }
    if (f === "archive") {
        if (n.stats.mtime < s) {
            return "release-now";
        }
        return "grace";
    }
    return "none";
}
function Ie(e) {
    return /^[0-9A-Za-z_-]{1,64}$/.test(e);
}
function Te() {
    return re("desktopSessionCleanupPeriodDays", Ee);
}
function re(e, r) {
    let s = TP(e)[0] ?? r;
    if (s === 0) {
        return null;
    }
    return new Date(Date.now() - s * 24 * 60 * 60 * 1000);
}
function Ae() {
    if (fe("policySettings")?.cleanupPeriodDays !== undefined) {
        return true;
    }
    if (bvo()) {
        return true;
    }
    return Dv().some((e)=>e.file !== $xe && (gut.some((r)=>r === e.path) || e.severity !== "warning"));
}
function kYo() {
    return Ae() || sl("hipaa") || sl("zdr");
}
function C() {
    return {
        messages: 0,
        errors: 0,
        filesRetainedFresh: 0,
        filesPastCutoff: 0
    };
}
function M(e, r) {
    return {
        messages: e.messages + r.messages,
        errors: e.errors + r.errors,
        filesRetainedFresh: e.filesRetainedFresh + r.filesRetainedFresh,
        filesPastCutoff: e.filesPastCutoff + r.filesPastCutoff
    };
}
function xe(name) {
    let r = Qe(name, ".").replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
    return new Date(r);
}
function sge(e) {
    return jt(e) || hy(e);
}
async function de(e, r, s) {
    let n = C();
    try {
        let f = await ie().readdir(e);
        for (let a of f){
            try {
                if (xe(a.name) < r) {
                    await ie().unlink(join(e, a.name));
                    if (s) {
                        n.messages++;
                    } else {
                        n.errors++;
                    }
                }
            } catch (error) {
                t(`Failed to clean up file ${a.name} in ${e}: ${error}`, {
                    level: "error"
                });
            }
        }
    } catch (error) {
        if (z(error)) ;
        else if (sge(error)) {
            t(`cleanup readdir ${e} failed: ${error.code}`, {
                level: "error"
            });
        } else {
            c(error);
        }
    }
    return n;
}
async function je() {
    let e = ie();
    let r = db();
    if (r === null) {
        return C();
    }
    let s = ipt.errors();
    let n = ipt.baseLogs();
    let f = await de(s, r, false);
    try {
        let a;
        try {
            a = await e.readdir(n);
        } catch  {
            return f;
        }
        let w = a.filter((S)=>S.isDirectory() && S.name.startsWith("mcp-logs-")).map((S)=>join(n, S.name));
        for (let S of w){
            f = M(f, await de(S, r, true));
            await T(S, e);
        }
    } catch (error) {
        if (z(error)) ;
        else if (sge(error)) {
            t(`cleanup mcp-logs scan failed: ${error.code}`, {
                level: "error"
            });
        } else {
            c(error);
        }
    }
    return f;
}
async function A(e, r, s, n, f = r, a) {
    let w;
    try {
        w = await s.stat(e);
    } catch (error) {
        if (z(error)) {
            return false;
        }
        throw error;
    }
    if (!(w.mtime < r)) {
        n.filesRetainedFresh++;
        return false;
    }
    if (a !== undefined && await a(e, w)) {
        return false;
    }
    try {
        await s.unlink(e);
    } catch (error) {
        if (z(error)) {
            return false;
        }
        if (w.mtime < f) {
            n.filesPastCutoff++;
        }
        throw error;
    }
    return true;
}
async function T(e, r) {
    if (!await Y(e, r)) {
        return;
    }
    try {
        await r.rmdir(e);
    } catch  {}
}
const te = [
    DPs,
    LPs
];
async function Ne(e, r, s, n) {
    try {
        for (let m of te){
            await we(join(e, m), r, s, n);
        }
        let f = false;
        try {
            let { sweepCheckoutSessionTrash } = await import("/$bunfs/root/chunk-zj7gday3.js");
            let g = await sweepCheckoutSessionTrash(e, r.getTime());
            n.messages += g.removed;
            n.errors += g.errors;
            f = g.newestKeptMs !== null;
        } catch  {
            n.errors++;
            f = true;
        }
        let a = (await s.readdir(e)).filter((m)=>!te.includes(m.name));
        let w = null;
        for (let m of a){
            let g = join(e, m.name);
            let P = await ne(m, g, s) === "directory" ? await J(g, s, {
                requireCompleteWalk: true
            }) : (await s.lstat(g)).mtimeMs;
            if (P !== null) {
                w = Math.max(w ?? -Infinity, P);
            }
        }
        if (!((w ?? await ye(e, s)) < r.getTime())) {
            return;
        }
        let y = (await Promise.all(te.map((m)=>s.lstat(join(e, m)).then((g)=>g.isDirectory(), (g)=>{
                if (z(g)) {
                    return false;
                }
                throw g;
            })))).includes(true);
        let D = a.toSorted((m, g)=>Number(m.name === PTo) - Number(g.name === PTo));
        if (y || f) {
            let m = false;
            for (let g of D){
                if (f && g.name === Xzn) {
                    m = await Be(join(e, g.name), s) || m;
                    continue;
                }
                await s.rm(join(e, g.name), {
                    recursive: true,
                    force: true
                });
                m = true;
            }
            if (m) {
                n.messages++;
            }
            return;
        }
        for (let m of D.slice(0, -1)){
            await s.rm(join(e, m.name), {
                recursive: true,
                force: true
            });
        }
        await s.rm(e, {
            recursive: true,
            force: true
        });
        n.messages++;
    } catch (error) {
        if (!z(error)) {
            n.errors++;
        }
    }
}
async function we(e, r, s, n) {
    if (!await Y(e, s)) {
        return;
    }
    let f = await s.readdir(e).catch(()=>[]);
    for (let a of f){
        let w = await ne(a, join(e, a.name), s).catch((y)=>{
            if (!z(y)) {
                n.errors++;
            }
            return "other";
        });
        if (w === "file") {
            try {
                if (await A(join(e, a.name), r, s, n)) {
                    n.messages++;
                }
            } catch  {
                n.errors++;
            }
            continue;
        }
        if (w !== "directory") {
            continue;
        }
        let S = join(e, a.name);
        try {
            if ((await J(S, s, {
                requireCompleteWalk: true
            }) ?? await ye(S, s)) < r.getTime()) {
                await s.rm(S, {
                    recursive: true,
                    force: true
                });
                n.messages++;
            }
        } catch (error) {
            if (!z(error)) {
                n.errors++;
            }
        }
    }
    await T(e, s);
}
async function ne(e, r, s) {
    if (e.isDirectory()) {
        return "directory";
    }
    if (e.isFile()) {
        return "file";
    }
    if (e.isSymbolicLink() || e.isFIFO() || e.isSocket() || e.isBlockDevice() || e.isCharacterDevice()) {
        return "other";
    }
    let n = await s.lstat(r);
    if (n.isDirectory()) {
        return "directory";
    }
    if (n.isFile()) {
        return "file";
    }
    return "other";
}
async function ye(e, r) {
    return (await r.lstat(e)).mtimeMs;
}
async function Me(e) {
    let r = db();
    let s = C();
    if (r === null) {
        return s;
    }
    let n = Ep();
    let f = ie();
    for (let a of (await f.readdir(n).catch(()=>[]))){
        let w = join(n, a.name);
        let S = join(w, NHt);
        if (a.isDirectory() && await Y(S, f)) {
            await Ne(S, r, f, s);
            await T(w, f);
        }
    }
    return s;
}
async function Be(e, r) {
    let s = e;
    let n = false;
    for (let f of [
        "objects",
        "info",
        "alternates"
    ]){
        if (!(await r.lstat(s)).isDirectory()) {
            await r.rm(s, {
                recursive: true,
                force: true
            });
            return true;
        }
        for (let a of (await r.readdir(s))){
            if (a.name !== f) {
                await r.rm(join(s, a.name), {
                    recursive: true,
                    force: true
                });
                n = true;
            }
        }
        s = join(s, f);
    }
    return n;
}
async function Y(e, r) {
    try {
        return (await r.lstat(e)).isDirectory();
    } catch  {
        return false;
    }
}
async function Q(e, r, s, n, f = {}) {
    let { entryMatcher } = f;
    let w = await s.readdir(e).catch((S)=>{
        if (f.countEnumerationFailures === true && !z(S)) {
            n.errors++;
        }
        return [];
    });
    for (let S of w){
        let y = join(e, S.name);
        if (S.isDirectory()) {
            await Q(y, r, s, n, f);
        } else if (entryMatcher !== undefined && !entryMatcher(S.name)) ;
        else if (S.isFile()) {
            try {
                if (await A(y, r, s, n)) {
                    n.messages++;
                }
            } catch  {
                n.errors++;
            }
        } else {
            try {
                if ((await s.lstat(y)).mtime < r) {
                    await s.unlink(y);
                    n.messages++;
                }
            } catch  {
                n.errors++;
            }
        }
    }
    await T(e, s);
}
async function J(e, r, { requireCompleteWalk = false } = {}) {
    let n = -Infinity;
    let f = await r.readdir(e).catch((a)=>{
        if (requireCompleteWalk && !z(a)) {
            throw a;
        }
        return [];
    });
    for (let a of f){
        let w = join(e, a.name);
        let S = requireCompleteWalk ? await ne(a, w, r).catch((y)=>{
            if (z(y)) {
                return "other";
            }
            throw y;
        }) : a.isDirectory() ? "directory" : a.isFile() ? "file" : "other";
        if (S === "directory") {
            let y = await J(w, r, {
                requireCompleteWalk
            });
            if (y !== null) {
                n = Math.max(n, y);
            }
        } else if (S === "file") {
            try {
                let { mtimeMs } = await r.stat(w);
                n = Math.max(n, mtimeMs);
            } catch (error) {
                if (requireCompleteWalk && !z(error)) {
                    throw error;
                }
            }
        }
    }
    if (n === -Infinity) {
        return null;
    }
    return n;
}
async function Le() {
    let e = db();
    let r = {
        ...C(),
        transcripts: 0,
        transcriptsExemptedDesktop: 0
    };
    if (e === null) {
        return r;
    }
    let s = Ep();
    let n = ie();
    let f;
    try {
        f = await n.readdir(s);
    } catch  {
        return r;
    }
    let a;
    try {
        a = tc();
        if (!(await n.lstat(a)).isDirectory()) {
            a = null;
        }
    } catch  {
        a = null;
    }
    let w = kYo();
    let S = Te();
    let y = null;
    let D = w ? undefined : async (m, g)=>{
        if (sl("hipaa") || sl("zdr")) {
            return false;
        }
        if (S !== null && g.mtime < S) {
            return false;
        }
        let P = await le(ee(m), n, e);
        if (P === "release-now") {
            return false;
        }
        if (P === "grace") {
            r.transcriptsExemptedDesktop++;
            return true;
        }
        if (g.size === 0) {
            if (!await n.stat(m.slice(0, -6)).then((I)=>I.isDirectory(), ()=>false)) {
                r.transcriptsExemptedDesktop++;
                return true;
            }
        }
        y ??= Buffer.allocUnsafe(rw);
        let { head, tail } = await eon(m, g.size, y);
        if (head === "" && g.size > 0) {
            await n.stat(m);
            throw Error("transient read failure while classifying a transcript for the desktop retention exemption");
        }
        let F = g.size > rw ? AAo(tail) : tail;
        let R = lPe(head, "entrypoint");
        let N = aRr(F, "entrypoint");
        if (!(R !== undefined && fon(R) || N !== undefined && fon(N))) {
            return false;
        }
        let U = basename(m).startsWith("agent-") ? lPe(head, "sessionId") ?? aRr(F, "sessionId") : undefined;
        if (U !== undefined && Ie(U)) {
            let W = join(dirname(m), `${U}${Z}`);
            if (W !== ee(m)) {
                if (await le(W, n, e) === "release-now") {
                    return false;
                }
            }
        }
        r.transcriptsExemptedDesktop++;
        return true;
    };
    for (let m of f){
        if (!m.isDirectory()) {
            continue;
        }
        let g = join(s, m.name);
        let P;
        try {
            P = await n.readdir(g);
        } catch  {
            r.errors++;
            continue;
        }
        P.sort((R, N)=>Number(N.isDirectory()) - Number(R.isDirectory()));
        let _ = [];
        let O = null;
        let F = new Set(P.filter((R)=>R.isFile() && R.name.endsWith(".jsonl")).map((R)=>R.name.slice(0, -6)));
        for (let R of P){
            if (O === null && !R.isDirectory()) {
                O = r.errors;
            }
            if (R.isFile()) {
                if (R.name.endsWith(Z) && F.has(R.name.slice(0, -Z.length))) {
                    continue;
                }
                if (!R.name.endsWith(".jsonl") && !R.name.endsWith(".cast") && !R.name.endsWith(".ccr-tip.json") && !R.name.endsWith(".precompact.json") && !R.name.endsWith(Z) && !R.name.includes(".desktop-released.json.tmp") && !R.name.endsWith(".dir-sync.json") && !R.name.endsWith(".dir-sync-empty.json") && !R.name.endsWith(".cloud-worktrees.json") && !R.name.includes(".ccr-tip.json.tmp.") && !R.name.includes(".precompact.json.tmp.") && !R.name.includes(".dir-sync.json.tmp.") && !R.name.includes(".dir-sync-empty.json.tmp.") && !R.name.includes(".cloud-worktrees.json.tmp.") && !R.name.includes(".jsonl.compact.tmp.") && !R.name.includes(".jsonl.superseded-")) {
                    continue;
                }
                let N = join(g, R.name);
                try {
                    if (await A(N, e, n, r, undefined, R.name.endsWith(".jsonl") ? D : undefined)) {
                        r.messages++;
                        if (R.name.endsWith(".jsonl")) {
                            r.transcripts++;
                            let L = R.name.slice(0, -6);
                            if (ue(L)) {
                                await n.unlink(join(g, `${L}.ccr-tip.json`)).catch(()=>{});
                                await n.unlink(join(g, `${L}.precompact.json`)).catch(()=>{});
                                _.push(ee(N));
                                await n.rm(join(g, L), {
                                    recursive: true,
                                    force: true
                                }).catch(()=>{
                                    r.errors++;
                                });
                                if (a !== null) {
                                    let U = join(a, m.name);
                                    let W = await n.lstat(U).catch(()=>null);
                                    if (W?.isDirectory()) {
                                        await n.rm(join(U, L), {
                                            recursive: true,
                                            force: true
                                        }).catch(()=>{
                                            r.errors++;
                                        });
                                        if (W.mtime < e) {
                                            await T(U, n);
                                        }
                                    }
                                }
                            }
                        }
                    }
                } catch (error) {
                    if (!z(error)) {
                        r.errors++;
                    }
                }
            } else if (R.isDirectory()) {
                let N = join(g, R.name);
                if (R.name === "bagel") {
                    let I = await J(N, n);
                    if (I !== null && I < e.getTime()) {
                        try {
                            await n.rm(N, {
                                recursive: true,
                                force: true
                            });
                            r.messages++;
                        } catch  {
                            r.errors++;
                        }
                    }
                    continue;
                }
                if (R.name === NHt) {
                    continue;
                }
                if (!ue(R.name)) {
                    let I = await n.lstat(N).catch(()=>null);
                    if (I !== null && I.mtime < e) {
                        await T(N, n);
                    }
                    continue;
                }
                let L = join(N, GSe);
                if (await Y(L, n)) {
                    let I = await n.readdir(L).catch(()=>[]);
                    for (let H of I){
                        if (H.isFile()) {
                            try {
                                if (await A(join(L, H.name), e, n, r)) {
                                    r.messages++;
                                }
                            } catch  {
                                r.errors++;
                            }
                        } else if (H.isDirectory()) {
                            let V = join(L, H.name);
                            let se;
                            try {
                                se = await n.readdir(V);
                            } catch  {
                                continue;
                            }
                            for (let ae of se){
                                if (!ae.isFile()) {
                                    continue;
                                }
                                try {
                                    if (await A(join(V, ae.name), e, n, r)) {
                                        r.messages++;
                                    }
                                } catch  {
                                    r.errors++;
                                }
                            }
                            await T(V, n);
                        }
                    }
                    await T(L, n);
                }
                let U = await n.readdir(N).catch(()=>[]);
                for (let I of U){
                    if (!I.isFile() || !(Oe(I.name) || ITo(I.name) !== undefined)) {
                        continue;
                    }
                    if (I.name === "custom-title.json" && F.has(R.name)) {
                        continue;
                    }
                    try {
                        if (await A(join(N, I.name), e, n, r)) {
                            r.messages++;
                        }
                    } catch  {
                        r.errors++;
                    }
                }
                let W = join(N, "mcp-tasks");
                if (await Y(W, n)) {
                    for (let I of (await n.readdir(W).catch(()=>[]))){
                        let H = I.name.endsWith(".json") || I.name.includes(".json.tmp.");
                        if (!I.isFile() || !H) {
                            continue;
                        }
                        try {
                            if (await A(join(W, I.name), e, n, r)) {
                                r.messages++;
                            }
                        } catch  {
                            r.errors++;
                        }
                    }
                    await T(W, n);
                }
                if (!F.has(R.name)) {
                    for (let I of [
                        "subagents",
                        "workflows",
                        "remote-agents"
                    ]){
                        let H = join(N, I);
                        if (await Y(H, n)) {
                            await Q(H, e, n, r);
                        }
                    }
                }
                await T(N, n);
            }
        }
        if (O !== null && r.errors > O) {
            _.length = 0;
        }
        for (let R of _){
            await n.unlink(R).catch(()=>{});
        }
        await T(g, n);
    }
    return r;
}
async function v(e, r, s = true, n, f) {
    let a = f === undefined ? db(n) : f;
    let w = C();
    if (a === null) {
        return w;
    }
    let S = f !== undefined || n === undefined ? a : db() ?? a;
    let y = typeof r === "string" ? (g)=>g.endsWith(r) : r;
    let D = ie();
    let m;
    try {
        m = await D.readdir(e);
    } catch  {
        return w;
    }
    for (let g of m){
        if (!g.isFile() || !y(g.name)) {
            continue;
        }
        try {
            if (await A(join(e, g.name), a, D, w, S)) {
                w.messages++;
            }
        } catch  {
            w.errors++;
        }
    }
    if (s) {
        await T(e, D);
    }
    return w;
}
async function We() {
    let e = C();
    let r = db();
    if (r === null) {
        return e;
    }
    let s = join(ve(), "hfi-auth.json");
    try {
        if (await A(s, r, ie(), e)) {
            e.messages++;
        }
    } catch (error) {
        if (!z(error)) {
            t(`Failed to clean up HFI auth file: ${error}`, {
                level: "error"
            });
            e.errors++;
        }
    }
    return e;
}
async function He() {
    let e = C();
    let r = db();
    if (r === null) {
        return e;
    }
    let s = join(ve(), "cache", "team-discovery.json");
    try {
        if (await A(s, r, ie(), e)) {
            e.messages++;
        }
    } catch (error) {
        if (!z(error)) {
            e.errors++;
            if (sge(error)) {
                t(`cleanup team-discovery-cache failed: ${error.code}`, {
                    level: "error"
                });
            } else {
                c(error);
            }
        }
    }
    return e;
}
async function Ue() {
    let e = C();
    let r = db();
    if (r === null) {
        return e;
    }
    for (let s of [
        GSn(),
        BYo()
    ]){
        try {
            if (await A(s, r, ie(), e)) {
                e.messages++;
            }
        } catch (error) {
            if (!z(error)) {
                e.errors++;
                if (sge(error)) {
                    t(`cleanup model-access memory failed: ${error.code}`, {
                        level: "error"
                    });
                } else {
                    c(error);
                }
            }
        }
    }
    return e;
}
async function Ye() {
    return v(iH(), (e)=>e !== Dyo && e !== JVr && (e.endsWith(".json") || e.includes(".json.tmp.")));
}
async function Ge() {
    let e = C();
    let r = db();
    if (r === null) {
        return e;
    }
    let s = join(ve(), "mcp-needs-auth-cache.json");
    try {
        if (await A(s, r, ie(), e)) {
            e.messages++;
        }
    } catch (error) {
        if (!z(error)) {
            e.errors++;
            if (sge(error)) {
                t(`cleanup mcp-auth-cache failed: ${error.code}`, {
                    level: "error"
                });
            } else {
                c(error);
            }
        }
    }
    return e;
}
async function ze() {
    let e = C();
    let r = db();
    if (r === null) {
        return e;
    }
    let s = join(ve(), "state", "device-unbound-creates.json");
    try {
        if (await A(s, r, ie(), e)) {
            e.messages++;
        }
    } catch (error) {
        if (!z(error)) {
            e.errors++;
            if (sge(error)) {
                t(`cleanup device-unbound-creates failed: ${error.code}`, {
                    level: "error"
                });
            } else {
                c(error);
            }
        }
    }
    return e;
}
async function Ke() {
    let e = C();
    let r = db();
    if (r === null) {
        return e;
    }
    let s = join(ve(), "state", "mcp-discover-verdicts.json");
    try {
        if (await A(s, r, ie(), e)) {
            e.messages++;
        }
    } catch (error) {
        if (!z(error)) {
            e.errors++;
            if (sge(error)) {
                t(`cleanup mcp-discover-verdicts failed: ${error.code}`, {
                    level: "error"
                });
            } else {
                c(error);
            }
        }
    }
    return e;
}
async function Xe(e = join(homedir(), ".claude", "state", "served-calls")) {
    return v(e, (r)=>r.endsWith(".jsonl") || r.includes(".jsonl.tmp."), true, undefined, re("cleanupPeriodDays", QAt));
}
async function Je(e = join(homedir(), ".claude", "state", "unattended-serving-runs")) {
    return v(e, (r)=>{
        let s = /^([1-9][0-9]{0,9})\.json$/.exec(r)?.[1];
        if (s === undefined) {
            return r.includes(".json.tmp.");
        }
        return !_a(Number(s));
    }, true, undefined, re("cleanupPeriodDays", QAt));
}
async function Ze(e) {
    let r = C();
    let s = db();
    if (s === null) {
        return r;
    }
    try {
        r.messages += await Pts(s, e);
    } catch (error) {
        r.errors++;
        if (sge(error)) {
            t(`cleanup settings-review store failed: ${error.code}`, {
                level: "error"
            });
        } else {
            c(error);
        }
    }
    return r;
}
function qe(e) {
    if (!e) {
        return false;
    }
    try {
        let r = $o(e);
        if (typeof r !== "object" || r === null) {
            return true;
        }
        if (!("timestamp" in r)) {
            return true;
        }
        let { timestamp } = r;
        return typeof timestamp !== "number" || !Number.isFinite(timestamp);
    } catch  {
        return true;
    }
}
function Ve(e, r) {
    if (!e) {
        return false;
    }
    try {
        let s = $o(e);
        if (typeof s !== "object" || s === null || !("timestamp" in s)) {
            return false;
        }
        let { timestamp } = s;
        return typeof timestamp === "number" && Number.isFinite(timestamp) && timestamp < r;
    } catch  {
        return false;
    }
}
async function et(e, r) {
    let s;
    try {
        s = await x.readdir(e);
    } catch  {
        return;
    }
    let n = r.getTime();
    await Promise.all(s.filter((f)=>HP(f, "history.jsonl") || NJ(f)).map(async (f)=>{
        let a = join(e, f);
        try {
            let w = await x.lstat(a);
            if (w.isFile() && w.mtimeMs < n) {
                await x.unlink(a);
            }
        } catch  {}
    }));
}
async function tt(e) {
    let r = join(ve(), "history.jsonl");
    let s = e.getTime();
    let n = (y)=>Ve(y, s) || qe(y);
    let f;
    let a;
    try {
        f = await x.lstat(r);
        if (!f.isFile()) {
            t("History retention prune skipped: history.jsonl is not a regular file", {
                level: "error"
            });
            return {
                entriesPruned: 0,
                errors: 1
            };
        }
        a = await GZr(r, n, {
            start: 0,
            end: f.size,
            tail: "defer",
            expect: {
                ino: f.ino,
                birthtimeMs: f.birthtimeMs
            }
        });
    } catch (error) {
        if (z(error)) {
            return {
                entriesPruned: 0,
                errors: 0
            };
        }
        if (error instanceof Mkt) {
            t("History retention prune deferred: history.jsonl changed under the scan");
            return {
                entriesPruned: 0,
                errors: 0
            };
        }
        t(`History retention prune failed: ${error}`, {
            level: "error"
        });
        return {
            entriesPruned: 0,
            errors: 1
        };
    }
    if (a.dropped === 0 && a.consumed === f.size) {
        return {
            entriesPruned: 0,
            errors: 0
        };
    }
    let w;
    let S = false;
    try {
        w = await ja(r, {
            ...HVe,
            onCompromised: (y)=>{
                S = true;
                t(`History retention lock compromised: ${y}`, {
                    level: "error"
                });
            }
        });
    } catch (error) {
        if (z(error)) {
            return {
                entriesPruned: 0,
                errors: 0
            };
        }
        t(`History retention prune failed: ${error}`, {
            level: "error"
        });
        return {
            entriesPruned: 0,
            errors: 1
        };
    }
    try {
        let y = await x.lstat(r);
        if (!y.isFile() || y.size < a.consumed || f.ino !== 0 && y.ino !== f.ino || y.birthtimeMs !== f.birthtimeMs) {
            t("History retention prune deferred: history.jsonl changed under the scan");
            return {
                entriesPruned: 0,
                errors: 0
            };
        }
        let D = await GZr(r, n, {
            start: a.consumed,
            end: y.size,
            tail: "judge",
            expect: {
                ino: y.ino,
                birthtimeMs: y.birthtimeMs
            },
            verifiedHead: {
                bytes: a.consumed,
                digest: a.digest
            },
            residueBytes: f.size - a.consumed
        });
        let entriesPruned = a.dropped + D.dropped;
        if (S) {
            throw Error("history lock compromised before the rewrite");
        }
        if (entriesPruned === 0 && D.terminated && !D.split) {
            return {
                entriesPruned: 0,
                errors: 0
            };
        }
        let g = a.kept.concat(D.kept);
        await Ape(r, g.length ? `${g.join(`
`)}
` : "", {
            exactMode: y.mode & 511
        });
        return {
            entriesPruned,
            errors: 0
        };
    } catch (error) {
        if (error instanceof Mkt) {
            t("History retention prune deferred: history.jsonl changed under the scan");
            return {
                entriesPruned: 0,
                errors: 0
            };
        }
        t(`History retention prune failed: ${error}`, {
            level: "error"
        });
        return {
            entriesPruned: 0,
            errors: 1
        };
    } finally{
        await Um(w, "history retention");
    }
}
async function rt() {
    let e = join(ve(), "mcp-discovery-cache");
    let r = await v(e, (a)=>a.endsWith(".json") || a.includes(".json.tmp."), false);
    let s = db();
    if (s === null) {
        return r;
    }
    let n = ie();
    let f;
    try {
        f = await n.readdir(e);
    } catch  {
        return r;
    }
    for (let a of f){
        if (!a.isDirectory() || !a.name.endsWith(".json.lock")) {
            continue;
        }
        let w = join(e, a.name);
        try {
            if ((await n.stat(w)).mtime < s) {
                await n.rmdir(w);
                r.messages++;
            }
        } catch  {
            r.errors++;
        }
    }
    await T(e, n);
    return r;
}
async function nt(e) {
    let r = join(ve(), "plans");
    try {
        if (e !== undefined) {
            return await v(r, (s)=>s.endsWith(".md") || s.includes(".md.tmp."));
        }
        return await v(r, ".md");
    } finally{
        J9t();
    }
}
async function B(e, { exclude, skipIf, refuseRedirectedRoot = false, removeEmptyBaseDir = true, maxAgeDays, baseDir, storageV5 } = {}) {
    let y = db(maxAgeDays);
    let D = C();
    if (y === null) {
        return D;
    }
    let m = ie();
    let g = ve();
    let P = baseDir ?? join(g, e);
    if (refuseRedirectedRoot) {
        if (await zj(P, g, {
            event: "cleanup_sweep_root_refused",
            phase: "sweep",
            rootLabel: e
        }, {
            storageV5
        }) !== "real") {
            return D;
        }
    }
    let _;
    try {
        _ = await m.readdir(P);
    } catch  {
        return D;
    }
    for (let O of _){
        if (!O.isDirectory() || exclude?.has(O.name)) {
            continue;
        }
        let F = join(P, O.name);
        try {
            if ((await m.stat(F)).mtime < y) {
                if (await skipIf?.(F)) {
                    continue;
                }
                await m.rm(F, {
                    recursive: true,
                    force: true
                });
                D.messages++;
            }
        } catch  {
            D.errors++;
        }
    }
    if (removeEmptyBaseDir) {
        await T(P, m);
    }
    return D;
}
function st() {
    return B("file-history");
}
function it() {
    return B("session-env");
}
function at() {
    return B("tasks");
}
function ot() {
    return B("uploads");
}
function ct() {
    let e = fL.get()?.folder;
    let r = db();
    return B("dev-mods", {
        exclude: new Set([
            K(),
            ...e === undefined ? [] : [
                basename(e)
            ]
        ]),
        skipIf: (s)=>Re(s, r, ut)
    });
}
var ut = 3;
const maxAgeDays = 2;
async function ft() {
    let e = fLe();
    let r = await c_e(e).catch(()=>null);
    if (!r) {
        return C();
    }
    return B(fmr, {
        removeEmptyBaseDir: false,
        maxAgeDays,
        baseDir: e,
        skipIf: async (s)=>!await pHn(s, r)
    });
}
async function dt() {
    try {
        return await Aos();
    } catch (error) {
        if (sge(error)) {
            t(`[cleanup] the sweep of seed-admin did not run: ${error.code}`, {
                level: "warn"
            });
        } else {
            c(error);
        }
        return {
            removed: 0,
            errors: 1,
            held: 0,
            refused: "no"
        };
    }
}
async function pt(e) {
    if (j() && e !== undefined) {
        let n = await mt(e);
        if (n !== "unaddressed") {
            return n;
        }
    }
    let r = JAt();
    let s = await c_e(r).catch(()=>null);
    if (!s) {
        return C();
    }
    return B(bmr, {
        removeEmptyBaseDir: false,
        maxAgeDays: fio,
        baseDir: r,
        skipIf: async (n)=>{
            let f = await c_e(r);
            return f?.ino !== s.ino || f.dev !== s.dev || await c_e(n) === null || await x.realpath(n) !== join(await x.realpath(dirname(r)), bmr, basename(n));
        }
    });
}
async function mt(e) {
    let r = C();
    let s = xIs();
    let n = await e.scopeKind(s);
    if (!n.ok) {
        if (n.error.code === "InvalidArgument") {
            return "unaddressed";
        }
        return r;
    }
    if (n.value.kind !== "directory" || n.value.object === undefined || n.value.owner === "other") {
        return r;
    }
    let f = db(fio);
    if (f === null) {
        return r;
    }
    let a = await e.deleteScope(s, {
        olderThanMs: Math.max(0, Date.now() - f.getTime())
    });
    if (!a.ok) {
        return r;
    }
    r.messages += a.value.deleted;
    r.errors += a.value.failed ?? 0;
    return r;
}
function ht() {
    return v(WGt(), "", false, vDn);
}
async function wt(e) {
    return M(M(await B(eLn, {
        refuseRedirectedRoot: true,
        storageV5: e
    }), await B(dms, {
        refuseRedirectedRoot: true,
        storageV5: e
    })), await ge(dV, e));
}
async function ge(e, r) {
    let s = C();
    if (db() === null) {
        return s;
    }
    let n = ve();
    let f = join(n, e);
    if (await zj(f, n, {
        event: "cleanup_sweep_root_refused",
        phase: "sweep",
        rootLabel: e
    }, {
        storageV5: r
    }) !== "real") {
        return s;
    }
    let w;
    try {
        w = await ie().readdir(f);
    } catch  {
        return s;
    }
    for (let S of w){
        if (!S.isDirectory() || !yNe(S.name)) {
            continue;
        }
        s = M(s, await B(join(e, "*", I5), {
            baseDir: join(f, S.name, I5),
            refuseRedirectedRoot: true,
            storageV5: r
        }));
    }
    return s;
}
function yt(e) {
    return B(R4e, {
        refuseRedirectedRoot: true,
        storageV5: e
    });
}
async function Se(e, r, failureEvent, n) {
    let f = C();
    let a = db();
    if (a === null) {
        return f;
    }
    let w = await $M().catch((_)=>{
        c(_);
    });
    if (w === undefined) {
        return f;
    }
    let S = w ?? _Rt();
    let configHome = ve();
    let D = join(configHome, e);
    if (await zj(D, configHome, {
        event: "cleanup_sweep_root_refused",
        phase: "sweep",
        rootLabel: e
    }, {
        storageV5: n
    }) !== "real") {
        return f;
    }
    let g = ie();
    let P;
    try {
        P = await g.readdir(D);
    } catch  {
        return f;
    }
    for (let _ of P){
        if (!_.isDirectory() || !yNe(_.name) || _.name === S || !await s3(D, _.name)) {
            continue;
        }
        let dir = join(D, _.name);
        let F;
        try {
            F = (await g.lstat(join(dir, BM)).catch(()=>g.lstat(dir))).mtime;
        } catch  {
            continue;
        }
        if (F >= a) {
            f.filesRetainedFresh++;
            continue;
        }
        f.filesPastCutoff++;
        if (await Pae({
            dir,
            trashRoot: join(configHome, r),
            configHome,
            failureEvent,
            storageV5: n
        })) {
            await vSt(D, _.name).catch(()=>{});
            f.messages++;
        } else {
            f.errors++;
        }
    }
    return f;
}
function St(e) {
    return Se(PB, _Ne, "plugins_sync_trash_move_failed", e);
}
function Dt(e) {
    return Se(dV, R4e, "skills_sync_trash_move_failed", e);
}
function Rt(e) {
    return B(_Ne, {
        refuseRedirectedRoot: true,
        storageV5: e
    });
}
async function kt(e) {
    return M(await B(ums, {
        refuseRedirectedRoot: true,
        storageV5: e
    }), await ge(PB, e));
}
async function Pt() {
    let e = join(bl(), "store");
    let r = await v(e, (n)=>n.endsWith(".json") || n.includes(".json.tmp."), false);
    let s = db();
    if (s !== null) {
        await we(e, s, ie(), r);
    }
    return r;
}
function _t() {
    return v(bl(), (e)=>M0n(e) || H0n(e), false);
}
async function Et() {
    let e = db();
    let r = C();
    if (e === null) {
        return r;
    }
    let s = ie();
    let n = join(ve(), lbt);
    let f;
    try {
        f = await s.readdir(n);
    } catch  {
        return r;
    }
    for (let a of f){
        if (!a.isDirectory()) {
            continue;
        }
        let w = join(n, a.name);
        let S = (await YVr(w))?.cacheKey ?? null;
        let y;
        try {
            y = await s.readdir(w);
        } catch  {
            r.errors++;
            continue;
        }
        for (let D of y){
            if (!D.isDirectory() || D.name === S) {
                continue;
            }
            let m = join(w, D.name);
            try {
                if ((await s.stat(m)).mtime < e) {
                    await s.rm(m, {
                        recursive: true,
                        force: true
                    });
                    r.messages++;
                }
            } catch  {
                r.errors++;
            }
        }
        try {
            if ((await s.stat(w)).mtime < e) {
                await s.rm(w, {
                    recursive: true,
                    force: true
                });
                r.messages++;
            }
        } catch  {
            r.errors++;
        }
    }
    await T(n, s);
    return r;
}
async function Ct() {
    let e = join(ve(), "usage-data");
    let r = await v(join(e, "facets"), (s)=>s.endsWith(".json") || s.includes(".json.tmp."));
    r = M(r, await v(join(e, "session-meta"), (s)=>s.endsWith(".json") || s.includes(".json.tmp.")));
    r = M(r, await v(e, (s)=>s.endsWith(".html") || AIs(s), false));
    await T(e, ie());
    return r;
}
async function vt() {
    let e = db();
    let r = C();
    if (e === null) {
        return r;
    }
    let s = ie();
    let n;
    try {
        n = tc();
    } catch  {
        return r;
    }
    let f;
    try {
        f = await s.readdir(n);
    } catch  {
        return r;
    }
    for (let a of f){
        let w = a.name.startsWith("cc-transcript-") && a.name.endsWith(".txt");
        let S = a.name.startsWith(tDn) && a.name.endsWith(".md");
        let y = a.name.startsWith(lyr) && (a.name.endsWith(".json") || a.name.endsWith(".diff"));
        let D = false;
        if (!a.isFile() || !w && !S && !y && true) {
            continue;
        }
        try {
            if (await A(join(n, a.name), e, s, r)) {
                r.messages++;
            }
        } catch  {
            r.errors++;
        }
    }
    return r;
}
async function Ot() {
    let e = C();
    let r = db(eus);
    if (r === null) {
        return e;
    }
    let s = ie();
    let n;
    try {
        n = tc();
        if (!(await s.lstat(n)).isDirectory()) {
            return e;
        }
    } catch  {
        return e;
    }
    let f = join(n, "speculation");
    let a;
    try {
        a = await s.lstat(f);
    } catch  {
        return e;
    }
    if (!a.isDirectory()) {
        return e;
    }
    try {
        if ((await J(f, s, {
            requireCompleteWalk: true
        }) ?? a.mtimeMs) < r.getTime()) {
            await s.rm(f, {
                recursive: true,
                force: true
            });
            e.messages++;
            return e;
        }
    } catch  {
        e.errors++;
    }
    await T(f, s);
    return e;
}
async function bt() {
    let e = join(ve(), "shares");
    let r = await B("shares");
    r = M(r, await v(e, (s)=>s.endsWith(".zip") || s.includes(".zip.tmp.") && RGn(s), false));
    await T(e, ie());
    return r;
}
async function Ft() {
    let e = join(ve(), "telemetry");
    let r = await v(e, ".json", false);
    let s = db();
    if (s === null) {
        return r;
    }
    let n = join(e, "runs");
    let f = ie();
    if (await Y(e, f) && await Y(n, f)) {
        await Q(n, s, f, r, {
            entryMatcher: (a)=>a.endsWith(".json")
        });
    }
    await T(e, ie());
    return r;
}
function It() {
    return v(join(ve(), "dump-prompts"), ".jsonl", true, Zds);
}
function Tt() {
    return v(join(ve(), "shell-snapshots"), ".sh", false);
}
async function At() {
    let e = db();
    let r = C();
    if (e === null) {
        return r;
    }
    let s = ie();
    let n = Z8e();
    for (let f of (await s.readdir(n).catch(()=>[]))){
        if (!f.isDirectory()) {
            continue;
        }
        let a = join(n, f.name, "inboxes");
        if (await Y(a, s)) {
            for (let w of (await s.readdir(a).catch(()=>[]))){
                if (!w.isFile() || !w.name.endsWith(".json")) {
                    continue;
                }
                try {
                    if (await A(join(a, w.name), e, s, r)) {
                        r.messages++;
                    }
                } catch  {
                    r.errors++;
                }
            }
            await T(a, s);
        }
        await T(join(n, f.name), s);
    }
    return r;
}
async function xt(cutoff, r = tmpdir()) {
    let s = C();
    let n = ie();
    let f = process.getuid?.();
    let a;
    try {
        a = await n.readdir(r);
    } catch (error) {
        if (!z(error)) {
            s.errors++;
        }
        return s;
    }
    for (let w of a){
        if (!w.name.startsWith("cc-daemon-")) {
            continue;
        }
        let S = w.name.slice(10);
        if (/^\d+$/.test(S) || f !== undefined && S === String(f) || /^[0-9a-f]{16}$/.test(S)) {
            continue;
        }
        let y = join(r, w.name);
        try {
            let D = await c_e(y);
            if (D === null) {
                continue;
            }
            let m = await n.readdir(y);
            if (m.length !== 1 || m[0].name !== "stderr.log") {
                continue;
            }
            let g = join(y, "stderr.log");
            let P = await n.lstat(g);
            if (!P.isFile()) {
                continue;
            }
            if (!(P.mtime < cutoff)) {
                s.filesRetainedFresh++;
                continue;
            }
            let _ = await c_e(y);
            if (_ === null || _.dev !== D.dev || _.ino !== D.ino) {
                continue;
            }
            try {
                await n.unlink(g);
            } catch (error) {
                if (z(error)) {
                    continue;
                }
                s.filesPastCutoff++;
                throw error;
            }
            s.messages++;
            await T(y, n);
        } catch (error) {
            if (!z(error)) {
                s.errors++;
            }
        }
    }
    return s;
}
const $n = new RegExp(`^${oGn}[A-Za-z0-9]{6}$`);
const Nt = new RegExp(`^${sGn}[A-Za-z0-9]{6}$`);
async function Mt(e = db(), r = ym()) {
    let s = C();
    if (e === null) {
        return s;
    }
    let n = ie();
    let f;
    try {
        f = await n.readdir(r);
    } catch (error) {
        if (!z(error)) {
            s.errors++;
        }
        return s;
    }
    for (let a of f){
        if (!Nt.test(a.name)) {
            continue;
        }
        let w = join(r, a.name);
        try {
            let S = await c_e(w);
            if (S === null) {
                continue;
            }
            if (!((await J(w, n, {
                requireCompleteWalk: true
            }) ?? S.mtimeMs) < e.getTime())) {
                s.filesRetainedFresh++;
                continue;
            }
            let D = await c_e(w);
            if (D === null || D.dev !== S.dev || D.ino !== S.ino) {
                continue;
            }
            await n.rm(w, {
                recursive: true,
                force: true
            });
            s.messages++;
        } catch (error) {
            if (!z(error)) {
                s.errors++;
            }
        }
    }
    return s;
}
async function Bt(e, r) {
    let s = ve();
    let n = await v(join(s, "jobs", "settled"), ".json");
    n = M(n, await v(join(s, "daemon", "dispatch", "rejected"), ".json"));
    n = M(n, await v(join(s, "daemon", "dispatch"), ".json", false));
    n = M(n, await v(join(s, "daemon", "auth"), ".json"));
    try {
        let D = join(s, "daemon", "host-managed");
        let m = ie();
        let g = db();
        if (g) {
            for (let P of (await m.readdir(D))){
                if (!P.isFile()) {
                    continue;
                }
                try {
                    await m.lstat(join(s, "jobs", P.name));
                } catch (error) {
                    if (!z(error)) {
                        n.errors++;
                        continue;
                    }
                    try {
                        if (await A(join(D, P.name), g, m, n)) {
                            n.messages++;
                        }
                    } catch (err) {
                        if (!z(err)) {
                            n.errors++;
                        }
                    }
                }
            }
        }
    } catch (error) {
        if (!z(error)) {
            n.errors++;
        }
    }
    let f = kYo();
    let cutoff = db();
    let exclude = new Set;
    if (!f) {
        for (let D of (await Sqe(e))){
            exclude.add(D);
        }
    }
    let S = false;
    let y = false;
    try {
        let D = join(s, "daemon", "roster.json");
        let m = await ie().lstat(D);
        if (!m.isFile() || m.size > 8388608) {
            throw Error("not a regular file");
        }
        let g = await ie().readFile(D, {
            encoding: "utf-8"
        });
        let P = X(g);
        if (P !== null && typeof P === "object" && "workers" in P) {
            let _ = P.workers;
            if (_ !== null && typeof _ === "object") {
                S = true;
                for (let [O, F] of Object.entries(_)){
                    if (F !== null && typeof F === "object" && "pid" in F && typeof F.pid === "number" && _a(F.pid) && await Hw(F.pid, "procStart" in F && typeof F.procStart === "string" ? F.procStart : undefined)) {
                        exclude.add(O);
                        y = true;
                    }
                }
            }
        }
    } catch  {}
    n = M(n, await B("jobs", {
        exclude,
        skipIf: async (D)=>{
            let m;
            try {
                m = await gno(D, e);
            } catch (error) {
                c(error);
                t(`[cleanup] jobs/${basename(D)}: job state read threw \u2014 keeping the folder (${l(error)})`, {
                    level: "error"
                });
                throw error;
            }
            if (!f && (m === null || !Ra(m))) {
                return true;
            }
            if (m?.worktreePath && Ra(m) && cutoff) {
                let g = await z8r({
                    worktreePath: m.worktreePath,
                    worktreeBranch: m.worktreeBranch,
                    originCwd: m.originCwd,
                    hookBased: m.worktreeHookBased,
                    cutoff,
                    ...{}
                }).catch((P)=>{
                    c(P);
                    return false;
                });
            }
            return false;
        }
    }));
    if (cutoff !== null) {
        n = M(n, await xt(cutoff));
        let D = ie();
        for (let g of [
            join(s, "daemon.log"),
            join(s, "daemon.log.1")
        ]){
            try {
                if (await A(g, cutoff, D, n)) {
                    n.messages++;
                }
            } catch (error) {
                if (!z(error)) {
                    n.errors++;
                }
            }
        }
        let m = join(s, "daemon", "roster.json");
        try {
            if ((await D.lstat(m)).mtime < cutoff && !y && (S || f)) {
                await D.unlink(m);
                n.messages++;
            }
        } catch (error) {
            if (!z(error)) {
                n.errors++;
            }
        }
        for (let g of (await D.readdir(join(s, "daemon")).catch(()=>[]))){
            if (!g.isFile() || !g.name.startsWith("roster.json.corrupt.")) {
                continue;
            }
            try {
                if (await A(join(s, "daemon", g.name), cutoff, D, n)) {
                    n.messages++;
                }
            } catch  {
                n.errors++;
            }
        }
    }
    await CSn();
    return n;
}
function Lt() {
    return v(join(ve(), "backups"), "", false);
}
async function Wt() {
    let e = db();
    let r = C();
    if (e === null) {
        return r;
    }
    let s = ie();
    let n = join(ve(), "debug");
    let f;
    try {
        f = await s.readdir(n);
    } catch  {
        return r;
    }
    for (let a of f){
        if (a.name === "latest" || !a.isFile()) {
            continue;
        }
        try {
            if (await A(join(n, a.name), e, s, r)) {
                r.messages++;
            }
        } catch  {
            r.errors++;
        }
    }
    return r;
}
async function Ht() {
    return v(join(ve(), "feedback-bundles"), ".zip");
}
async function $t() {
    return v(join(ve(), "feedback", "drafts"), (e)=>e.endsWith(".json") || e.includes(".json.tmp."), true, 30);
}
async function Ut() {
    let e = join(ve(), "remote-control", "fork-seeds");
    let r = await v(e, (f)=>f.endsWith(".json") || f.includes(".json.tmp."));
    if (db() === null) {
        return r;
    }
    let s = new Date;
    let n = ie();
    for (let f of (await n.readdir(e).catch(()=>[]))){
        try {
            let a = join(e, f.name);
            if (f.isFile() && (await n.stat(a)).mtime > s) {
                await x.lutimes(a, s, s);
            }
        } catch  {
            r.errors++;
        }
    }
    return r;
}
async function Yt() {
    let e = await v(join(ve(), "traces"), ".json");
    let r = await v(join(ve(), "startup-perf"), ".txt");
    let s = await v(join(ve(), "startup-perf"), ".json");
    return M(M(e, r), s);
}
const Gt = 86400000;
const iZr_1 = iZr;
function zt(e) {
    if (e === undefined) {
        return b("none");
    }
    if (!iZr_1.has(e)) {
        return b("other");
    }
    switch(e){
        case "ELOOP":
            return b("ELOOP");
        case "EISDIR":
            return b("EISDIR");
        default:
            return b("ENXIO");
    }
}
function Kt(error) {
    return error.code === "Failed" && error.telemetryCode !== undefined && iZr_1.has(error.telemetryCode);
}
function Xt(e) {
    if (e.ok) {
        return "removed it";
    }
    if (("telemetryCode" in e.error ? e.error.telemetryCode : undefined) === "EISDIR") {
        return "could not remove it (EISDIR): a directory at the marker path stays and the marker write will keep failing";
    }
    return `could not remove it (${e.error.code})`;
}
async function BVr(e) {
    let r = await e.statMeta($e.state("last-cleanup"));
    if (r.ok || r.error.code === "NotFound" || !Kt(r.error)) {
        return;
    }
    i("tengu_cleanup_throttle_marker", {
        marker: b("last-cleanup"),
        verdict: b("not_regular_rerun"),
        code: d(r.error.code),
        errno: zt("telemetryCode" in r.error ? r.error.telemetryCode : undefined)
    });
    let s = await e.delete($e.state("last-cleanup"));
    t(`.last-cleanup: sentinel is not a regular file (${gt(r.error)}) \u2014 ${Xt(s)}; rewriting`, {
        level: "warn"
    });
}
const Jt = [
    ".npm-cache-cleanup",
    ".version-cleanup",
    ".last-cleanup",
    ".deep-link-register-failed"
];
async function jVr(e, r) {
    if (!r.claimStagingReap()) {
        return;
    }
    let s;
    try {
        s = await x.readdir(e);
    } catch  {
        return;
    }
    let n = Date.now() - Gt;
    await Promise.all(s.filter((f)=>Jt.some((a)=>HP(f, a))).map(async (f)=>{
        let a = join(e, f);
        try {
            let w = await x.lstat(a);
            if (w.isFile() && w.mtimeMs < n) {
                await x.unlink(a);
            }
        } catch  {}
    }));
}
async function Zt() {
    let e = db();
    let r = C();
    if (e === null) {
        return r;
    }
    let s = ie();
    for (let n of wmr){
        let f = join(ve(), n);
        let a = await s.lstat(f).catch((y)=>{
            if (!z(y)) {
                r.errors++;
            }
            return null;
        });
        if (a === null || !a.isDirectory()) {
            continue;
        }
        let w;
        try {
            w = await s.readdir(f);
        } catch  {
            continue;
        }
        let S = false;
        for (let y of w){
            let D = join(f, y.name);
            try {
                if (!((await s.stat(D)).mtime < e)) {
                    continue;
                }
                let g = await s.lstat(f).catch(()=>null);
                if (g === null || !g.isDirectory() || g.dev !== a.dev || g.ino !== a.ino) {
                    S = true;
                    break;
                }
                if (y.isDirectory()) {
                    await s.rm(D, {
                        recursive: true,
                        force: true
                    });
                } else {
                    await s.unlink(D);
                }
                r.messages++;
            } catch  {
                r.errors++;
            }
        }
        if (!S) {
            await T(f, s);
        }
    }
    return r;
}
async function qt() {
    let e = C();
    let r = db();
    if (r === null) {
        return e;
    }
    let s = join(MY(), "projects");
    let n = ie();
    let f = await n.lstat(s).catch((w)=>{
        if (!z(w)) {
            e.errors++;
        }
        return null;
    });
    if (f === null || !f.isDirectory()) {
        return e;
    }
    let a = await n.readdir(s).catch((w)=>{
        if (!z(w)) {
            e.errors++;
        }
        return [];
    });
    for (let w of a){
        if (!w.isDirectory()) {
            continue;
        }
        let S = join(s, w.name, "tiny_memory");
        let y = await n.lstat(S).catch((D)=>{
            if (!z(D)) {
                e.errors++;
            }
            return null;
        });
        if (y === null || !y.isDirectory()) {
            continue;
        }
        await Q(S, r, n, e, {
            countEnumerationFailures: true
        });
    }
    return e;
}
async function Qt() {
    let r = C();
    let s = db();
    if (s === null) {
        return r;
    }
    let n = join(MY(), "projects");
    let f = ie();
    let a = await f.readdir(n).catch(()=>[]);
    for (let w of a){
        if (!w.isDirectory()) {
            continue;
        }
        r = M(r, await pe(join(n, w.name, "memory", "proposals"), s, f));
    }
    return M(r, await pe(join(mi(), "proposals"), s, f));
}
const Vt = "skill-proposal";
async function pe(e, r, s) {
    let n = C();
    try {
        if ((await s.lstat(e)).isSymbolicLink()) {
            return n;
        }
    } catch (error) {
        if (!jt(error)) {
            n.errors++;
        }
        return n;
    }
    let f = await s.readdir(e).catch((a)=>{
        if (!z(a)) {
            n.errors++;
        }
        return [];
    });
    for (let a of f){
        if (!a.isFile() || !a.name.endsWith(".md")) {
            continue;
        }
        let w = join(e, a.name);
        try {
            let { content, mtimeMs } = await gye(w, 0, Ore, aCe, undefined, {
                truncateOnByteLimit: true
            });
            if (!(mtimeMs < r.getTime())) {
                continue;
            }
            if (oi(content, w).frontmatter.type !== Vt) {
                continue;
            }
            await s.unlink(w);
            n.messages++;
        } catch (error) {
            if (!z(error)) {
                n.errors++;
            }
        }
    }
    await T(e, s);
    return n;
}
async function WVr(e) {
    await ce();
    let r = await dt();
    let s = {
        seedAdminRemoved: r.removed,
        seedAdminErrors: r.errors,
        seedAdminHeld: r.held,
        seedAdminRefused: d(r.refused)
    };
    let skipReason = await ASn(e);
    let f = Qn()?.cleanupPeriodDays;
    if (skipReason !== null) {
        i("tengu_retention_sweep", {
            skipped: true,
            skipReason: d(skipReason),
            ...s
        });
        yoo({
            result: "skipped",
            skipReason,
            periodDays: f ?? QAt,
            usedDefault: f === undefined
        });
        return;
    }
    i("tengu_retention_sweep", {
        phase: b("start"),
        ...s
    });
    let a;
    let w;
    let S = ()=>w ??= Me(a);
    await using y = {
        [Symbol.asyncDispose]: ()=>S().then(()=>{}, ()=>{})
    };
    await je();
    let D = await Le();
    let m = [
        D
    ];
    m.push(await nt(e));
    m.push(await st());
    m.push(await it());
    m.push(await at());
    m.push(await ot());
    m.push(await ct());
    m.push(await pt(e));
    m.push(await ft());
    m.push(await ht());
    m.push(await Ct());
    m.push(await wt(e));
    m.push(await kt(e));
    m.push(await Dt(e));
    m.push(await St(e));
    m.push(await yt(e));
    m.push(await Rt(e));
    m.push(await Pt());
    m.push(await _t());
    m.push(await Et());
    m.push(await vt());
    m.push(await Mt());
    m.push(await Ot());
    m.push(await bt());
    m.push(await Ft());
    m.push(await Wt());
    m.push(await Ht());
    m.push(await $t());
    m.push(await Ut());
    m.push(await Yt());
    m.push(await It());
    m.push(await Tt());
    m.push(await At());
    m.push(await Bt(e, a));
    m.push(await Lt());
    m.push(await We());
    m.push(await Ge());
    m.push(await ze());
    m.push(await Ke());
    m.push(await Xe());
    m.push(await Je());
    m.push(await Ze());
    m.push(await rt());
    m.push(await He());
    m.push(await Ue());
    m.push(await Ye());
    m.push(await Zt());
    m.push(await qt());
    m.push(await Qt());
    let g = {
        entriesPruned: 0,
        errors: 0
    };
    let P = db();
    if (P !== null) {
        await Hrs(P, e);
        let O = await AYo(P);
        m.push({
            ...C(),
            messages: O.removed,
            errors: O.errors
        });
        let removed = await W8r(P, a);
        if (removed > 0) {
            i("tengu_worktree_cleanup", {
                removed
            });
        }
        await et(ve(), P);
        if (sl("hipaa") && k("tengu_hipaa_history_retention_prune", true)) {
            g = await tt(P);
            m.push({
                ...C(),
                errors: g.errors
            });
        }
    }
    m.push(await S());
    let _ = m.reduce(M, C());
    i("tengu_retention_sweep", {
        phase: b("complete"),
        skipped: false,
        transcriptsDeleted: D.transcripts,
        transcriptsExemptedDesktop: D.transcriptsExemptedDesktop,
        sessionFilesDeleted: D.messages,
        artifactsDeleted: _.messages,
        filesRetainedFresh: _.filesRetainedFresh,
        filesPastCutoff: _.filesPastCutoff,
        errors: _.errors,
        historyEntriesPruned: g.entriesPruned,
        periodDays: f ?? QAt,
        usedDefault: f === undefined
    });
    yoo({
        result: "complete",
        periodDays: f ?? QAt,
        usedDefault: f === undefined,
        transcriptsDeleted: D.transcripts,
        transcriptsExemptedDesktop: D.transcriptsExemptedDesktop,
        sessionFilesDeleted: D.messages,
        artifactsDeleted: _.messages,
        filesRetainedFresh: _.filesRetainedFresh,
        filesPastCutoff: _.filesPastCutoff,
        errorCount: _.errors,
        historyEntriesPruned: g.entriesPruned
    });
}
async function Re(e, r, s) {
    if (r === null) {
        return true;
    }
    let n = await x.readdir(e, {
        withFileTypes: true
    }).catch(()=>[]);
    for (let f of n){
        let a = join(e, f.name);
        let w = await x.lstat(a).catch(()=>null);
        if (w !== null && w.mtime > r) {
            return true;
        }
        if (s > 1 && f.isDirectory() && await Re(a, r, s - 1)) {
            return true;
        }
    }
    return false;
}
export { ASn, UVr, db, kYo, sge, BVr, jVr, WVr };
