import { Vn, we, Csn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { x, l, v, z, jt, lj } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { TC, Qa, FN, GR, Va, y0t, Ld, tin, sT, Qse, M9, Ypt, sVn, iVn, aVn, Jv, _0t, Qv, ih, ij } from "/$bunfs/root/chunk-xgw72tt1.js";
import { dC } from "/$bunfs/root/chunk-pp3y3t61.js";
import { PO, $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { ff, ie, Dse, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { Ca, I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { fnn, hEo, eh, $Se, ynn, pAr, fAr, vEo, ZWn, ezn, EEo, _nn, mAr, Q3e, lf, epe, pse, xh, cHt } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Et, Js } from "/$bunfs/root/chunk-r3z1chqx.js";
import { nr, bq } from "/$bunfs/root/chunk-wew3321y.js";
import { sUn, vn, _r } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { mNe, Kco, MRt, jhr } from "/$bunfs/root/chunk-9fvky64k.js";
import { HP } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { Md, j1 } from "/$bunfs/root/chunk-3yz9zdww.js";
import { Spe, qY } from "/$bunfs/root/chunk-zwxj12s4.js";
import { fe, HSe, kP } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { vl, fg, qf } from "/$bunfs/root/chunk-0ycjphb5.js";
import { hY } from "/$bunfs/root/chunk-pjqd7qee.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { yrn } from "/$bunfs/root/chunk-tfc1vf2h.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { lstat, realpath, stat, readdir, rm } from "fs/promises";
import { basename, dirname, isAbsolute, join, resolve, relative, sep, normalize, parse, delimiter } from "path";
function qh(e, r, n) {
    let i = relative(e, r);
    if (i === "") {
        return n;
    }
    return i !== ".." && !i.startsWith(`..${sep}`) && !isAbsolute(i);
}
function He(e) {
    if (isAbsolute(e)) {
        return ff.workspace(e);
    }
    return ff.workspace(O() === "windows" ? resolve(e) : ie().cwd() + sep + e);
}
function re(e) {
    return Object.assign(new x(`ENOENT: no such file or directory, stat '${e}'`, "ENOENT: no such file or directory"), {
        code: "ENOENT",
        syscall: "stat",
        path: e
    });
}
function nXt(e) {
    return Object.assign(new x(`ENOENT: no such file or directory, open '${e}'`, "ENOENT: no such file or directory"), {
        code: "ENOENT",
        syscall: "open",
        path: e
    });
}
function oe(error) {
    if (error.code === "Failed" && (lj(error.telemetryCode) !== undefined || /^ERR_/.test(error.telemetryCode ?? "")) && error.cause instanceof Error) {
        return error.cause;
    }
}
function T(e, r) {
    if (e === "workspace") {
        return He(r);
    }
    return ff.system(resolve(r));
}
async function khr(e, r, n = "workspace") {
    if (!j() || e === undefined) {
        return stat(r);
    }
    if (r === "") {
        throw re(r);
    }
    let i = await e.hostFiles.stat(T(n, r), {
        follow: true
    });
    if (!i.ok) {
        throw oe(i.error) ?? Object.assign(new x(`Failed to probe the local marketplace path ${r}: ${gt(i.error)}`, "failed to probe a local marketplace path (v5 backend error)"), {
            cause: i.error
        });
    }
    if (i.value.kind === "absent") {
        throw re(r);
    }
    let s = i.value.kind === "directory";
    return {
        isDirectory: ()=>s
    };
}
async function bRt(e, r, n) {
    if (n === "") {
        return {
            absent: "ENOENT"
        };
    }
    let i = await e.hostFiles.readText(T(r, n));
    if (!i.ok) {
        throw oe(i.error) ?? Object.assign(new x(`Failed to read the marketplace file ${n}: ${gt(i.error)}`, "failed to read a local marketplace file (v5 backend error)"), {
            cause: i.error
        });
    }
    if (i.value.found) {
        return {
            text: i.value.value
        };
    }
    return {
        absent: "ENOENT"
    };
}
async function Lco(e, r, n = "workspace") {
    if (!j() || e === undefined) {
        return Md(r);
    }
    if (r === "") {
        return false;
    }
    let i = await e.hostFiles.stat(T(n, r), {
        follow: true
    });
    return i.ok && i.value.kind !== "absent";
}
const rit = ".claude-plugin-link";
const Thr = p(()=>u({
        target: o().min(1).max(4096).refine((e)=>isAbsolute(e), {
            message: "must be an absolute path"
        }).refine((e)=>!ij(e) && !Va(e), {
            message: "must be a local path"
        }).refine((e)=>!FN(e), {
            message: "must be canonical"
        })
    }));
const rXt = `
[mode: link]`;
function K() {
    return join(ve(), "skills");
}
function We(e) {
    let r = relative(K(), e);
    return r !== "" && r !== ".." && !r.startsWith(`..${sep}`) && !isAbsolute(r);
}
function ue(e) {
    if (!We(e)) {
        return null;
    }
    let r = relative(K(), e).split(sep);
    if (PO(r) && join(K(), ...r) === e) {
        return r;
    }
    return null;
}
function Ahr(e) {
    let r = ue(e);
    if (r === null) {
        return null;
    }
    return $e.userConfigDir("skills", r);
}
function Qfs(e) {
    let relPath = ue(e);
    if (relPath === null) {
        return null;
    }
    return {
        namespace: "userConfigDir",
        dir: "skills",
        relPath
    };
}
const CB = ".orphaned_at";
const Wf = ".in_use";
const oit = ".gcs-sha";
const G$ = ".links_materialized";
function B() {
    return join(ve(), "plugins", "cache");
}
function H(e, r) {
    let n = B();
    if (r !== n) {
        return null;
    }
    let i = relative(n, e);
    if (i === "" || i === ".." || i.startsWith(`..${sep}`) || isAbsolute(i)) {
        return null;
    }
    let s = i.split(sep);
    if (join(n, ...s) === e) {
        return s;
    }
    return null;
}
function G(e) {
    return e.endsWith(".zip");
}
function U4(e, r) {
    let n = H(e, r);
    if (n === null || n.length !== 3 || !PO(n) || G(n[2])) {
        return null;
    }
    let [i, plugin, version] = n;
    return {
        marketplace: i,
        plugin,
        version
    };
}
function Zfs(e) {
    return e.namespace === "pluginCache" && e.marketplace !== undefined && e.plugin !== undefined && e.version !== undefined && e.relPath === undefined;
}
function SRt(e, r) {
    let n = U4(e, r);
    if (n === null) {
        return null;
    }
    return {
        namespace: "pluginCache",
        ...n
    };
}
function ems(e, r) {
    let n = [
        e.marketplace,
        e.plugin,
        e.version
    ];
    if (r !== B() || !PO(n) || G(e.version)) {
        return null;
    }
    return join(r, ...n);
}
function je(e, r) {
    let n = H(e, r);
    if (n === null || n.length < 4 || !PO(n) || G(n[2])) {
        return null;
    }
    let [i, s, d, ...c] = n;
    return $e.pluginCache(i, s, d, c);
}
function oXt(e, r) {
    return je(e, r) ?? Ahr(e);
}
function F_e(e, r) {
    if (W(r)) {
        return $e.pluginRegistry(e);
    }
    return null;
}
function Chr(e, r, n) {
    if (W(n) && PO([
        e
    ])) {
        return $e.marketplaceCache(e, r);
    }
    return null;
}
function W(e) {
    return e === join(ve(), "plugins");
}
function Ve(e, r) {
    if (!W(r)) {
        return null;
    }
    let n = join(r, "marketplaces");
    let i = relative(n, e);
    if (i === "" || i === ".." || i.startsWith(`..${sep}`) || isAbsolute(i)) {
        return null;
    }
    let s = i.split(sep);
    if (join(n, ...s) === e) {
        return s;
    }
    return null;
}
function sXt(e, r) {
    let n = Ve(e, r);
    if (n === null || n.length < 2 || !PO(n)) {
        return null;
    }
    return $e.marketplaceTree(n[0], n.slice(1));
}
function tms(e) {
    if (e === join(ve(), "plugins", "asset-cache")) {
        return {
            namespace: "pluginAssetCache"
        };
    }
    return null;
}
function x0n(e, r) {
    if (e === r) {
        if (r === B()) {
            return {
                namespace: "pluginCache"
            };
        }
        return null;
    }
    let n = H(e, r);
    if (n === null || n.length > 2 || !PO(n)) {
        return null;
    }
    let [i, s] = n;
    if (s === undefined) {
        return {
            namespace: "pluginCache",
            marketplace: i
        };
    }
    return {
        namespace: "pluginCache",
        marketplace: i,
        plugin: s
    };
}
const wRt = new Set([
    rit,
    Wf,
    CB
]);
function zD(e) {
    return GR(e).replace(/[. ]+$/, "");
}
function iXt(e, r) {
    let n = zD(e);
    if (r.has(n)) {
        return true;
    }
    for (let i of r){
        if (HP(n, i)) {
            return true;
        }
    }
    return false;
}
function sit(e) {
    return zD(e) === "node_modules";
}
const ge = "plugins";
const V = "cowork_plugins";
function Y() {
    if (Csn()) {
        return V;
    }
    if (a.CLAUDE_CODE_USE_COWORK_PLUGINS) {
        return V;
    }
    return ge;
}
function P0n() {
    return Y() === ge && !a.CLAUDE_CODE_PLUGIN_CACHE_DIR;
}
function Rhr() {
    return Y() === V;
}
function bl() {
    let a_CLAUDE_CODE_PLUGIN_CACHE_DIR = a.CLAUDE_CODE_PLUGIN_CACHE_DIR;
    if (a_CLAUDE_CODE_PLUGIN_CACHE_DIR) {
        return Ld(a_CLAUDE_CODE_PLUGIN_CACHE_DIR);
    }
    return join(ve(), Y());
}
function FM() {
    let a_CLAUDE_CODE_PLUGIN_SEED_DIR = a.CLAUDE_CODE_PLUGIN_SEED_DIR;
    if (!a_CLAUDE_CODE_PLUGIN_SEED_DIR) {
        return [];
    }
    return a_CLAUDE_CODE_PLUGIN_SEED_DIR.split(delimiter).filter(Boolean).map(Ld);
}
function vRt(e) {
    return e.replace(/[^a-zA-Z0-9\-_]/g, "-");
}
function Bre(e) {
    return vRt(e).toLowerCase();
}
function iit(e) {
    let r = zD(e.normalize("NFKC"));
    return r.startsWith(pse) || vRt(r).toLowerCase().startsWith(pse);
}
function I0n(e) {
    return vRt(zD(e.normalize("NFKC"))).toLowerCase();
}
function Nco(e) {
    return e.replace(/[^a-z0-9-]/gu, (r)=>{
        let n = r.codePointAt(0) ?? 0;
        if (n <= 255) {
            return `_${n.toString(16).padStart(2, "0")}`;
        }
        return `__${n.toString(16)}_`;
    });
}
function A(e) {
    if (epe(e)) {
        let r = e.slice(0, e.lastIndexOf("@"));
        return `${Nco(r)}-${eh}`;
    }
    return vRt(e);
}
function O0n(e, r) {
    return A(e).toLowerCase() === A(r).toLowerCase();
}
function nms(e, r) {
    return `installed_plugins.set-aside.${e.toISOString().slice(0, 10)}.${r}.json`;
}
function M0n(e) {
    return /^installed_plugins\.set-aside\.\d{4}-\d{2}-\d{2}\.[0-9a-f]{12}\.json$/.test(e);
}
function rms(e, r) {
    return `installed_plugins.unreadable.${e.toISOString().slice(0, 10)}.${r}.kept`;
}
function H0n(e) {
    return /^installed_plugins\.unreadable\.\d{4}-\d{2}-\d{2}\.[0-9a-f]{12}\.kept$/.test(e);
}
function wh(e) {
    return join(bl(), "data", A(e));
}
function uNe(e) {
    let r = wh(e);
    ie().mkdirSync(r);
    return r;
}
async function D0n(e, { throwIfUnreadable = false } = {}) {
    let n = wh(e);
    let bytes = 0;
    let s = async (d)=>{
        for (let c of (await readdir(d, {
            withFileTypes: true
        }))){
            let f = join(d, c.name);
            if (c.isDirectory()) {
                await s(f);
            } else {
                try {
                    bytes += (await stat(f)).size;
                } catch  {}
            }
        }
    };
    try {
        await s(n);
    } catch (error) {
        if (throwIfUnreadable) {
            if (await j1(n) === "gone") {
                return null;
            }
            throw error;
        }
        if (jt(error)) {
            return null;
        }
        throw error;
    }
    if (bytes === 0) {
        return null;
    }
    return {
        bytes,
        human: Qt(bytes)
    };
}
async function aXt(e) {
    let r = wh(e);
    try {
        await rm(r, {
            recursive: true
        });
        return "removed";
    } catch (error) {
        if (z(error)) {
            return "absent";
        }
        t(`Failed to delete plugin data dir ${r}: ${l(error)}`, {
            level: "warn"
        });
        return "failed";
    }
}
async function oms(e) {
    let r = join(bl(), "data");
    let n = A(e).toLowerCase();
    try {
        return (await readdir(r)).filter((i)=>i.toLowerCase() === n).map((i)=>join(r, i));
    } catch (error) {
        if (z(error) || v(error) === "ENOTDIR") {
            return [];
        }
        return undefined;
    }
}
async function L0n(e) {
    return await j1(wh(e)) === "gone";
}
const E4e = `is on a network drive, has "." or ".." in its path, or couldn't be checked`;
function oR(e, { trustedRoots = [] } = {}) {
    let n = et(e, trustedRoots);
    let { absolute, root, tail } = n;
    if (n.dotSegmentInTail) {
        return {
            absolute,
            suspect: true
        };
    }
    if (root !== undefined) {
        let f = resolve(we(), root);
        return {
            absolute,
            suspect: _0t(f, tail)
        };
    }
    let suspect = n.networkShapedUnvouched || M9(absolute);
    return {
        absolute,
        suspect
    };
}
function et(e, trustedRoots) {
    if (e.trim() === "") {
        return {
            absolute: e,
            root: undefined,
            tail: e,
            dotSegmentInTail: false,
            networkShapedUnvouched: true
        };
    }
    let absolute = resolve(we(), e);
    let { root, tail } = rt(e, trustedRoots);
    return {
        absolute,
        root,
        tail,
        dotSegmentInTail: FN(tail),
        networkShapedUnvouched: root === undefined && (Jv(e) || Jv(absolute))
    };
}
function tt(e) {
    return [
        bl(),
        ...FM(),
        ...e
    ];
}
function rt(e, trustedRoots) {
    let n = Ypt(e);
    let i;
    for (let root of tt(trustedRoots)){
        for (let d of [
            root,
            normalize(root)
        ]){
            let c = Ypt(d.replace(/[\\/]+$/, ""));
            if (c === "" || c === ".") {
                continue;
            }
            let f;
            if (n === c) {
                f = "";
            } else if (n.startsWith(c + sep) || n.startsWith(`${c}/`)) {
                f = e.slice(e.length - (n.length - c.length));
            }
            if (f !== undefined && (i === undefined || f.length < i.tail.length)) {
                i = {
                    root,
                    tail: f
                };
            }
        }
    }
    return i ?? {
        root: undefined,
        tail: e
    };
}
function lV(e) {
    switch(O()){
        case "windows":
            return GR(Ypt(e));
        case "macos":
            return GR(e);
        default:
            return e;
    }
}
function ERt(e) {
    if (e.trim() === "") {
        return;
    }
    return lV(Qv(resolve(we(), e), {
        foldCase: true
    }));
}
function $co(e) {
    if (O() !== "windows") {
        return;
    }
    let root = parse(e).root;
    let n = (s)=>y0t(sT(s));
    let i = n(root);
    if (i === undefined) {
        let s = Qse(root);
        if (s === null) {
            return "undeterminable";
        }
        i = n(s);
    }
    if (i === undefined) {
        return undefined;
    }
    return {
        walkRoot: root,
        ...i
    };
}
function xhr(e) {
    let r = $co(e);
    if (r === undefined || r === "undeterminable") {
        return r;
    }
    return {
        walkRoot: r.walkRoot,
        distroDir: r.rest.replace(/[\\/]+$/, "").replace(/[\\/]+/g, "/")
    };
}
function Phr(e, r) {
    return aVn(e, {
        exactDots: true
    }) ?? iVn(e, {
        exactDots: true
    }) ?? (r === undefined ? undefined : sVn(e, r.walkRoot, r.distroDir));
}
function N0n(e) {
    if (!isAbsolute(e)) {
        return false;
    }
    return O() !== "windows" || /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(e);
}
function $0n(e, r) {
    if (!lf(e)) {
        return e;
    }
    let n = r === undefined ? Ld(e.path) : tin(e.path, r);
    let i = N0n(n) ? resolve(n) : n;
    if (i === e.path) {
        return e;
    }
    return {
        ...e,
        path: i
    };
}
function J(e, r) {
    let n = Ihr(e);
    if (n === undefined || e === undefined || !lf(e)) {
        return [];
    }
    if (!(r !== undefined && r.source === e.source && "path" in r && r.path === e.path) || !N0n(n) || Qa(n)) {
        return [];
    }
    return [
        n
    ];
}
function Ihr(e) {
    switch(e?.source){
        case "directory":
            return e.path;
        case "file":
            if (basename(dirname(e.path)) === ".claude-plugin") {
                return dirname(dirname(e.path));
            }
            return undefined;
        default:
            return;
    }
}
async function sms(e, { entrySource, marketplaceLocation, pluginPath }) {
    let s = Ihr(e);
    if (s === undefined || typeof entrySource !== "string" || !N0n(s) || resolve(marketplaceLocation) !== resolve(s) || !qh(resolve(s), resolve(pluginPath), true) || [
        s,
        pluginPath
    ].some((f)=>TC(f) || Qa(f))) {
        return false;
    }
    let [d, c] = await Promise.all([
        realpath(s).catch(()=>{}),
        realpath(pluginPath).catch(()=>{})
    ]);
    return d !== undefined && c !== undefined && qh(d, c, true);
}
function U_e(e, r, n) {
    let i = ke(e, r, n);
    if (i === undefined) {
        return [];
    }
    return J(i.marketplaceSource, i.corroboratingSource);
}
function Fco(e, r, n) {
    let { absolute, suspect } = oR(e, {
        trustedRoots: J(r, n)
    });
    if (suspect) {
        return undefined;
    }
    return absolute;
}
function it(e) {
    return `Marketplace directory refused: its recorded location ${Js(e)} ${E4e}. ${Ca(mNe["network-location"])}.`;
}
const F0n = /^\.(?:[\\/]+|$)/;
function U0n(e) {
    let r = e.replace(F0n, "");
    return r !== "" && (isAbsolute(r) || FN(r) || Jv(r) || TC(r));
}
function st(marketplaceDir, r) {
    let n = r.replace(F0n, "");
    if (n === "") {
        return marketplaceDir;
    }
    if (U0n(r) || _0t(marketplaceDir, n)) {
        return;
    }
    return join(marketplaceDir, n);
}
function at(e) {
    return `Plugin source path refused: ${Et(e, 300)} does not stay inside its marketplace directory. Check that the marketplace entry has a plain relative path.`;
}
async function Ohr(e, r, { marketplaceSource, corroboratingSource, storageV5, localMarketplaceSpace = "workspace" }) {
    let c = Fco(e, marketplaceSource, corroboratingSource);
    if (c === undefined) {
        return {
            kind: "location-refused"
        };
    }
    let f;
    let error;
    try {
        f = (marketplaceSource !== undefined && lf(marketplaceSource) ? await khr(storageV5, c, localMarketplaceSpace) : await stat(c)).isDirectory();
    } catch (err) {
        error = err;
    }
    let marketplaceDir = dt(c, marketplaceSource, f);
    if (marketplaceDir === undefined) {
        return {
            kind: "entry-refused",
            marketplaceDir: dirname(c)
        };
    }
    let entryPath = st(marketplaceDir, r);
    if (f === undefined) {
        let y = v(error);
        if (y === "ENOENT" || y === "ENOTDIR") {
            return {
                kind: "location-missing",
                error,
                marketplaceDir,
                entryPath
            };
        }
        return {
            kind: "location-error",
            error,
            marketplaceDir,
            entryPath,
            entryRefusedLexically: U0n(r)
        };
    }
    if (entryPath === undefined) {
        return {
            kind: "entry-refused",
            marketplaceDir
        };
    }
    let b = await me(marketplaceDir);
    let te = false;
    if (!b) {
        for (let y of J(marketplaceSource, corroboratingSource)){
            if (ih(y, marketplaceDir) && !await me(y)) {
                te = true;
                break;
            }
        }
    }
    if (!te) {
        if (b) {
            if (!await lt(marketplaceDir, r)) {
                return {
                    kind: "entry-refused",
                    marketplaceDir,
                    cause: "plain-directory-walk"
                };
            }
        } else if (!ih(marketplaceDir, entryPath) || !await ut(marketplaceDir, entryPath)) {
            return {
                kind: "entry-refused",
                marketplaceDir
            };
        }
    }
    return {
        kind: "ok",
        marketplaceDir,
        entryPath
    };
}
async function me(e) {
    if (O() === "windows") {
        return false;
    }
    if (TC(e)) {
        return true;
    }
    let r;
    try {
        r = await stat(e, {
            bigint: true
        });
    } catch  {
        return false;
    }
    if (!r.isDirectory()) {
        return false;
    }
    if (r.ino === 0n) {
        return true;
    }
    let n;
    try {
        n = await realpath(e);
    } catch  {
        return true;
    }
    try {
        let i = await stat(n, {
            bigint: true
        });
        return i.ino === 0n || i.dev !== r.dev || i.ino !== r.ino;
    } catch  {
        return true;
    }
}
async function lt(marketplaceDir, r) {
    if (U0n(r)) {
        return false;
    }
    let n = r.replace(F0n, "");
    let i = marketplaceDir;
    for (let s of n.split("/").filter(Boolean)){
        i = join(i, s);
        let d;
        try {
            d = await lstat(i);
        } catch (error) {
            let f = v(error);
            if (f === "ENOENT" || f === "ENOTDIR") {
                return true;
            }
            t(`Marketplace entry ${Js(i)} refused: lstat failed (${v(error) ?? Et(l(error), 160)}) while walking a tree realpath cannot judge`);
            return false;
        }
        if (!d.isDirectory()) {
            t(`Marketplace entry ${Js(i)} refused: ${d.isSymbolicLink() ? "a symlink" : "not a directory"} under a marketplace directory realpath cannot judge; only plain directories are allowed there`);
            return false;
        }
    }
    return true;
}
async function ut(marketplaceDir, entryPath) {
    if (O() === "windows") {
        return true;
    }
    let n = (m)=>{
        t(`Marketplace entry ${Js(entryPath)} refused: ${m} (its declared spelling does not provably open inside ${Js(marketplaceDir)})`);
        return false;
    };
    let i = (m)=>v(m) ?? Et(l(m), 160);
    let s;
    try {
        s = await realpath(entryPath);
    } catch (error) {
        let g = v(error);
        if (g !== "ENOENT" && g !== "ENOTDIR") {
            return n(`realpath failed (${i(error)})`);
        }
        try {
            await stat(entryPath);
        } catch (err) {
            let b = v(err);
            if (b === "ENOENT" || b === "ENOTDIR") {
                return true;
            }
            return n(`stat failed (${i(err)})`);
        }
        return n("it exists but realpath cannot resolve it as spelled");
    }
    let d;
    try {
        d = await Promise.all([
            stat(entryPath, {
                bigint: true
            }),
            stat(s, {
                bigint: true
            })
        ]);
    } catch (error) {
        return n(`stat failed (${i(error)})`);
    }
    let [c, f] = d;
    if (c.ino === 0n || f.ino === 0n) {
        return n("the filesystem reports no inode number");
    }
    if (c.dev !== f.dev || c.ino !== f.ino) {
        return n(`its spelling opens a different file from the one realpath names (${Js(s)})`);
    }
    if (!ih(marketplaceDir, s)) {
        return n(`it opens ${Js(s)}, outside the marketplace directory`);
    }
    return true;
}
function N(e) {
    if (e === "location-refused") {
        return `its marketplace's recorded location ${E4e}`;
    }
    return "its marketplace entry path does not stay inside the marketplace directory (an absolute, climbing, network-shaped, backslash-containing or link-traversing entry, an entry of a fetched marketplace that resolves or opens outside its tree — or a relative entry in a url-catalog marketplace, which has no local directory)";
}
function ims(e) {
    switch(e.kind){
        case "ok":
        case "location-missing":
            if (e.entryPath === undefined) {
                return {
                    entryPath: undefined,
                    reason: N("entry-refused")
                };
            }
            return {
                entryPath: e.entryPath
            };
        case "location-error":
            if (e.entryPath !== undefined) {
                return {
                    entryPath: e.entryPath
                };
            }
            if (e.entryRefusedLexically) {
                return {
                    entryPath: undefined,
                    reason: N("entry-refused")
                };
            }
            return {
                entryPath: undefined,
                reason: `its marketplace directory could not be examined (${v(e.error) ?? "unknown error"})`
            };
        case "location-refused":
        case "entry-refused":
            return {
                entryPath: undefined,
                reason: N(e.kind)
            };
    }
}
function pNe(e) {
    switch(e.kind){
        case "ok":
            return {
                entryPath: e.entryPath
            };
        case "location-missing":
            return {
                entryPath: undefined,
                reason: "its marketplace directory does not exist"
            };
        case "location-error":
            return {
                entryPath: undefined,
                reason: `its marketplace directory could not be examined (${v(e.error) ?? "unknown error"})`
            };
        case "location-refused":
        case "entry-refused":
            return {
                entryPath: undefined,
                reason: N(e.kind)
            };
    }
}
async function HW(e, r, n, i, s, storageV5, localMarketplaceSpace) {
    return Ohr(r, n, {
        ...ke(e, i, s) ?? {
            marketplaceSource: undefined,
            corroboratingSource: undefined
        },
        storageV5,
        localMarketplaceSpace
    });
}
function ke(e, r, n) {
    let { marketplace } = vn(e);
    if (!marketplace) {
        return;
    }
    let corroboratingSource = Object.hasOwn(n, marketplace) ? n[marketplace]?.source : undefined;
    return {
        marketplaceSource: (r !== undefined && Object.hasOwn(r, marketplace) ? r[marketplace]?.source : undefined) ?? corroboratingSource,
        corroboratingSource
    };
}
const ct = /[\\/]marketplace\.json$/i;
function dt(e, marketplaceSource, n) {
    if (n === true) {
        return e;
    }
    if (marketplaceSource?.source === "url" || marketplaceSource === undefined && /\.json$/i.test(e)) {
        if (n === false) {
            return undefined;
        }
        return e;
    }
    if (n === false || ct.test(e)) {
        return dirname(e);
    }
    return e;
}
function k4e(e, r, n) {
    switch(e.kind){
        case "location-refused":
            return {
                code: "marketplace_location_refused",
                message: it(r)
            };
        case "location-missing":
            return {
                code: "marketplace_dir_missing",
                message: `Marketplace directory not found at path: ${Js(r)}`
            };
        case "location-error":
            return {
                code: "marketplace_dir_unreadable",
                message: `Marketplace directory could not be read at path: ${Js(r)} (${v(e.error) ?? "unknown error"})`
            };
        case "entry-refused":
            return {
                code: "marketplace_entry_path_refused",
                message: at(n) + (e.cause === "plain-directory-walk" ? ft : "")
            };
    }
}
var ft = " The marketplace directory's own path cannot be resolved reliably on this platform (for example, a backslash in one of its components), so only plain directories are accepted as entries there (no links); move the marketplace (or the plugins directory) to a plain path to lift that.";
function w(e) {
    if (e !== undefined && MRt(e)) {
        return e;
    }
    return null;
}
function pt() {
    return w(a.CLAUDE_CODE_ORGANIZATION_UUID ?? qf()?.organizationUuid);
}
function Se() {
    return w(qf()?.organizationUuid);
}
async function $M(e) {
    let r = pt();
    if (r === null) {
        return null;
    }
    switch(await fg(e)){
        case "store":
            return _Rt();
        case "none":
            if (vl().source === "claude.ai") {
                return null;
            }
            return jhr(r, w(a.CLAUDE_CODE_ACCOUNT_UUID) ?? undefined);
        case "env":
        case "fd":
            return jhr(r, w(a.CLAUDE_CODE_ACCOUNT_UUID) ?? undefined);
    }
}
function _Rt() {
    let e = qf();
    let r = w(a.CLAUDE_CODE_ORGANIZATION_UUID ?? e?.organizationUuid);
    let n = w(e?.accountUuid);
    if (r === null || n === null) {
        return null;
    }
    return jhr(r, n);
}
function Jfs() {
    if (vl().source === "claude.ai") {
        return _Rt();
    }
    return null;
}
function tXt() {
    let e = qf();
    return `${a.CLAUDE_CODE_ORGANIZATION_UUID ?? e?.organizationUuid ?? ""}_${e?.accountUuid ?? a.CLAUDE_CODE_ACCOUNT_UUID ?? ""}`;
}
const Pe = {
    source: "pluginDirectory"
};
function kf(e) {
    let r = fe("policySettings")?.enabledPlugins;
    return [
        e,
        sUn(e) ?? e
    ].some((n)=>hY(r, n) === false);
}
function UM() {
    let e = fe("policySettings");
    if (!e?.strictKnownMarketplaces) {
        return null;
    }
    return e.strictKnownMarketplaces;
}
function MQ() {
    if (D()?.some((r)=>r.source === "skills-dir")) {
        return false;
    }
    let e = UM();
    return e === null || e.some((r)=>r.source === "skills-dir");
}
function lXt(e) {
    return `Plugins from ${e}/ are blocked by your organization's managed settings (strictKnownMarketplaces or blockedMarketplaces). Ask your administrator to add {"source":"skills-dir"} to strictKnownMarketplaces, or remove it from blockedMarketplaces.`;
}
function HQ() {
    return fe("policySettings")?.disableSideloadFlags === true;
}
function zx() {
    let e = fe("policySettings");
    if (e?.disableCommandPluginSources !== undefined) {
        return e.disableCommandPluginSources === true;
    }
    return e?.allowManagedHooksOnly === true;
}
function B0n() {
    {
        let e = fe("policySettings")?.disablePluginDirectory;
        return e !== undefined && e !== false;
    }
    return false;
}
function c_() {
    {
        if (B0n()) {
            return "managed_setting";
        }
        if (ARt(Pe)) {
            return "blocklist";
        }
        if (!Td(Pe)) {
            return "allowlist";
        }
        let e = dC("allow_plugin_directory_search");
        if (e === "org_denied" || e === "latched") {
            return "policy_limit";
        }
        return null;
    }
    return null;
}
function WL() {
    let e = c_();
    if (e === null) {
        return "";
    }
    return Kco(e);
}
function ait(url) {
    let r = (D() ?? []).filter(q);
    let n = (UM() ?? []).filter(q);
    if (r.length === 0 && n.length === 0) {
        return false;
    }
    if (url === undefined) {
        return true;
    }
    let i = {
        source: "git",
        url
    };
    let s = De(i);
    if (ynn(url) || bq(url) || C(url) || s === null || s === "") {
        return true;
    }
    if (r.some((c)=>!_e(c.hostPattern) || Q(i, c, {
            blocklistDirection: true
        }))) {
        return true;
    }
    let d = /^https:\/\//i.test(url);
    return n.length > 0 && !(d && s !== "" && n.some((c)=>Oe(s, c.hostPattern)));
}
function cit() {
    return kP() !== "remote" || cHt();
}
const j0n = "it is declared by remotely managed settings that this session could not verify with the server, or that have not been approved on this machine yet — make sure Claude Code can reach your managed-settings server, and approve the managed-settings dialog once in an interactive session (or ask your admin)";
function cCe(e, r) {
    if (!zx()) {
        return null;
    }
    if (e === undefined) {
        return "lockdown";
    }
    if (!cit()) {
        return "remote_policy_unconsented";
    }
    let n = fe("policySettings")?.extraKnownMarketplaces ?? {};
    if (e.source === "settings" && r !== undefined) {
        if ((Object.hasOwn(n, r) ? n[r] : undefined)?.source.source !== "settings") {
            return "lockdown";
        }
        return null;
    }
    if (Object.values(n).some((i)=>F(e, i.source))) {
        return null;
    }
    return "lockdown";
}
function Uco(e, r) {
    return cCe(e, r) !== null;
}
function cXt(e, r = []) {
    let n = r.length > 0 ? `: ${r.map((i)=>xh(i)).join(", ")}` : "";
    return `${e} ${I(e, "marketplace")} not updated (managed policy) \u2014 ask your admin${n}`;
}
const P5 = "Command-sourced plugins are disabled by your organization's managed settings (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and its command was not run.";
const Mhr = "disabled by your organization's managed settings (disableSideloadFlags)";
function fNe(e) {
    return `${e.join(", ")} ${e.length === 1 ? "is" : "are"} ${Mhr}. Plugins, custom agents, and MCP servers can only be loaded from sources your administrator has approved. Ask your administrator to remove disableSideloadFlags from managed settings, or use an approved marketplace / settings file instead.`;
}
function D() {
    let e = fe("policySettings");
    if (!e?.blockedMarketplaces) {
        return null;
    }
    return e.blockedMarketplaces;
}
function dCe() {
    let e = D();
    return UM() !== null || e !== null && e.some((r)=>r.source !== "skills-dir" && r.source !== "pluginDirectory");
}
function RB(e) {
    if (e === undefined) {
        return dCe();
    }
    return !Td(e);
}
function Hhr() {
    return fe("policySettings")?.pluginTrustMessage;
}
function dXt() {
    return fe("policySettings")?.pluginSuggestionMarketplaces ?? [];
}
function uXt(e, r) {
    let n = HSe();
    let i = n?.extraKnownMarketplaces?.[e]?.source;
    if (i && F(r, i)) {
        return true;
    }
    return n?.strictKnownMarketplaces?.some((s)=>ee(r, s)) ?? false;
}
function Bco(e, r) {
    let n = _r(e);
    return Object.keys(r?.extraKnownMarketplaces ?? {}).some((i)=>_r(i) === n);
}
function kRt(e, r, n) {
    if (e.source === "claudeai") {
        let f = Se();
        return f !== null && e.organizationUuid.toLowerCase() === f.toLowerCase() && (e.scope === "org" || e.scope === "default");
    }
    let i = n ? n.policySettings : HSe();
    let s = n?.declaredUnder;
    let d = i?.extraKnownMarketplaces;
    let c = Q3e(e);
    if (c === null) {
        return false;
    }
    if (c.source === "npm" && (c.registry === undefined || !$Se(c.package))) {
        return false;
    }
    if (c.source === "settings" && c.plugins.some((f)=>{
        if (typeof f.source !== "object") {
            return true;
        }
        switch(f.source.source){
            case "npm":
                return f.source.registry === undefined || !$Se(f.source.package);
            case "url":
            case "github":
            case "git-subdir":
            case "archive":
                return false;
            default:
                return true;
        }
    })) {
        return false;
    }
    if (d !== undefined && Object.entries(d).some(([f, m])=>{
        if (s !== undefined && _r(f) !== _r(s)) {
            return false;
        }
        let g = $0n(m.source, r);
        let h = Q3e(g);
        return h !== null && F(c, h) && be(c, h);
    })) {
        return true;
    }
    if (s !== undefined) {
        return false;
    }
    return i?.strictKnownMarketplaces?.some((f)=>{
        if (f.source === "hostPattern" || f.source === "pathPattern" || f.source === "pluginDirectory") {
            return false;
        }
        if (c.source === "github" && f.source === "github" && (f.path || undefined) !== (c.path || undefined)) {
            return false;
        }
        let m = $0n(f, r);
        let g = Q3e(m);
        return g !== null && ee(c, g) && be(c, g);
    }) ?? false;
}
function be(e, r) {
    if (e.source !== "npm") {
        return true;
    }
    if (r.source !== "npm" || e.registry === undefined || r.registry === undefined) {
        return false;
    }
    let n = xe(e.registry);
    let i = xe(r.registry);
    return n !== null && n === i;
}
function xe(registry) {
    let r;
    try {
        r = new URL(registry);
    } catch  {
        return null;
    }
    r.hostname = Spe(r.hostname);
    if (!r.pathname.endsWith("/")) {
        r.pathname = `${r.pathname}/`;
    }
    return r.toString();
}
function jco(e) {
    let r = HSe()?.strictKnownMarketplaces;
    if (!r) {
        return false;
    }
    let n;
    try {
        n = new URL(e.tarballUrl);
    } catch  {
        return false;
    }
    let i = Ne(n);
    if (i === null) {
        return false;
    }
    return r.some((s)=>s.source === "npm" && s.registry !== undefined && Ie(s, e.packageName, n, i, "allow"));
}
function pXt(e) {
    if (e.source !== "github" && e.source !== "git") {
        return false;
    }
    if (e.source === "git") {
        if (e.url.includes("://")) {
            let r;
            try {
                r = new URL(e.url).protocol;
            } catch  {
                r = null;
            }
            if (r === null || !ht.has(r)) {
                return false;
            }
        } else if (yrn(e.url) === null) {
            return false;
        }
    }
    return hEo(e) && (e.ref || undefined) === undefined && (e.path || undefined) === undefined;
}
var ht = new Set([
    "https:",
    "ssh:",
    "git+https:",
    "git+ssh:"
]);
function F(e, r) {
    if (e.source !== r.source) {
        return false;
    }
    switch(e.source){
        case "url":
            return Kce(e.url) === Kce(r.url);
        case "github":
            return e.repo.toLowerCase() === r.repo.toLowerCase() && (e.ref || undefined) === (r.ref || undefined) && (e.path || undefined) === (r.path || undefined);
        case "git":
            {
                let n = r.url;
                return (C(e.url) || C(n) ? e.url === n : mAr(e.url) === mAr(n)) && (e.ref || undefined) === (r.ref || undefined) && (e.path || undefined) === (r.path || undefined);
            }
        case "npm":
            return e.package === r.package;
        case "file":
            return e.path === r.path;
        case "directory":
            return e.path === r.path;
        case "settings":
            return e.name === r.name && Vn(e.plugins, r.plugins);
        case "pluginDirectory":
            return true;
        default:
            return false;
    }
}
function TRt(e) {
    let r = yt(e);
    if (r === null) {
        return null;
    }
    return Spe(r);
}
function yt(e) {
    let r = Ce(e);
    if (r !== null && X(r)) {
        return null;
    }
    return r;
}
function X(e) {
    return e.startsWith("[") && e.endsWith("]") && fnn(e.slice(1, -1));
}
function C(e) {
    return qY(e);
}
function Ce(e) {
    switch(e.source){
        case "github":
            return nr;
        case "git":
            {
                if (ynn(e.url)) {
                    return null;
                }
                return Dse(e.url)?.host ?? null;
            }
        case "url":
            try {
                return new URL(e.url).hostname;
            } catch  {
                return null;
            }
        case "claudeai":
            return "claude.ai";
        default:
            return null;
    }
}
function De(e) {
    if (e.source === "git" && !e.url.includes("://")) {
        let r = yrn(e.url);
        if (r) {
            return Spe(r.host);
        }
        return null;
    }
    return TRt(e);
}
function Q(e, r, n) {
    let i = n?.blocklistDirection ? TRt(e) : De(e);
    if (!i) {
        return false;
    }
    let s = n?.blocklistDirection && i === pAr ? [
        i,
        nr
    ] : [
        i
    ];
    try {
        let d = new RegExp(r.hostPattern);
        return s.some((c)=>d.test(c));
    } catch  {
        t(`Invalid hostPattern regex in policy settings: ${r.hostPattern}`, {
            level: "error"
        });
        return false;
    }
}
function _e(hostPattern) {
    try {
        new RegExp(hostPattern);
        return true;
    } catch  {
        t(`Invalid hostPattern regex in policy settings: ${hostPattern}`, {
            level: "error"
        });
        return false;
    }
}
function Oe(e, hostPattern) {
    if (!_e(hostPattern)) {
        return false;
    }
    try {
        return new RegExp(`^(?:${hostPattern})$`).test(e);
    } catch  {
        return false;
    }
}
function Ae(e, r) {
    if (e.source !== "file" && e.source !== "directory") {
        return false;
    }
    try {
        return new RegExp(r.pathPattern).test(e.path);
    } catch  {
        t(`Invalid pathPattern regex in policy settings strictKnownMarketplaces: ${r.pathPattern}`, {
            level: "error"
        });
        return false;
    }
}
function Wco() {
    let e = UM();
    if (!e) {
        return [];
    }
    return e.filter(q).map((r)=>r.hostPattern);
}
function q(e) {
    return e.source === "hostPattern";
}
function Ee(url) {
    let r = fAr(url);
    if (r !== null && r.includes("*")) {
        t(`Invalid owner-wildcard url in policy settings blockedMarketplaces: ${url} (wildcards are only supported in github-form entries, as "<owner>/*"); entry does not match github.com sources`, {
            level: "error"
        });
        return null;
    }
    return r;
}
function Kce(e) {
    try {
        let r = new URL(e);
        r.hostname = Spe(r.hostname);
        return r.toString();
    } catch  {
        return e;
    }
}
function kt(repo, r) {
    let n = repo.split("/");
    if (n.length !== 2) {
        return false;
    }
    let [i, s] = n;
    if (i === undefined || s === undefined || !ZWn(i) || !ZWn(s)) {
        return false;
    }
    return i === r;
}
function L(e, r) {
    let n = EEo(r);
    let i = ezn(e);
    if (i === null) {
        if (e.includes("*")) {
            t(`Invalid owner-wildcard repo in policy settings blockedMarketplaces: ${e} (only "<owner>/*" is supported); entry only matches a literally identical repo string`, {
                level: "error"
            });
        }
        return n === e || r === e;
    }
    let s = n.split("/");
    if (s.length !== 2) {
        return false;
    }
    let [d, c] = s;
    if (d === undefined || c === undefined || !ZWn(d) || !vEo.test(c)) {
        return false;
    }
    return d.toLowerCase() === i.toLowerCase();
}
function Re(path) {
    if (path.startsWith("/") || path.startsWith("\\") || /^[A-Za-z]:/.test(path)) {
        return false;
    }
    return !path.split(/[\\/]/).some((r)=>r === "..");
}
function k(e, r) {
    if (!e) {
        return true;
    }
    return e === (r || undefined);
}
function St(e, r) {
    if (e.source === r.source) {
        switch(e.source){
            case "github":
                {
                    let n = r;
                    if (!L(n.repo, e.repo)) {
                        return false;
                    }
                    return k(n.ref, e.ref) && k(n.path, e.path);
                }
            case "git":
                {
                    let n = r;
                    let i = Ee(n.url);
                    let s = i === null ? null : fAr(e.url);
                    if (!(i !== null && s !== null ? L(i, s) : _nn(e.url) === _nn(n.url))) {
                        return false;
                    }
                    return k(n.ref, e.ref) && k(n.path, e.path);
                }
            case "url":
                return Kce(e.url) === Kce(r.url);
            case "npm":
                return e.package === r.package;
            case "file":
                return e.path === r.path;
            case "directory":
                return e.path === r.path;
            case "settings":
                return e.name === r.name;
            case "pluginDirectory":
                return true;
            default:
                return false;
        }
    }
    if (e.source === "git" && r.source === "github") {
        let n = fAr(e.url);
        if (n !== null && L(r.repo, n)) {
            return k(r.ref, e.ref) && k(r.path, e.path);
        }
    }
    if (e.source === "github" && r.source === "git") {
        let n = Ee(r.url);
        if (n !== null && L(n, e.repo)) {
            return k(r.ref, e.ref) && k(r.path, e.path);
        }
    }
    if (e.source === "git" && r.source === "url") {
        if (!e.url.includes("://")) {
            return false;
        }
        let n = {
            stripDotGit: true
        };
        return _nn(e.url, n) === _nn(r.url, n);
    }
    return false;
}
function ARt(e) {
    let r = D();
    if (r === null) {
        return false;
    }
    return r.some((n)=>{
        if (n.source === "hostPattern") {
            return Q(e, n, {
                blocklistDirection: true
            });
        }
        if (n.source === "pathPattern") {
            return Ae(e, n);
        }
        return St(e, n);
    });
}
function Td(e) {
    if (e.source === "git" && (ynn(e.url) || C(e.url)) && dCe()) {
        return false;
    }
    let r = Ce(e);
    if (r !== null && X(r) && dCe()) {
        return false;
    }
    if (e.source === "pluginDirectory" && B0n()) {
        return false;
    }
    if (ARt(e)) {
        return false;
    }
    let n = UM();
    if (n === null) {
        return true;
    }
    return n.some((i)=>ee(e, i));
}
function W0n(e) {
    let r = D();
    let n = UM();
    if (r === null && n === null) {
        return null;
    }
    let i;
    try {
        i = new URL(e.tarballUrl);
    } catch  {
        i = null;
    }
    let s = xh(e.packageName);
    if (i === null) {
        return `${s} cannot be used: the registry answered with a download URL that could not be parsed, and your organization restricts plugin sources`;
    }
    let d = Spe(i.hostname);
    let c = i.port ? `${d}:${i.port}` : d;
    let f = Ne(i);
    if (f === null) {
        return `${s} cannot be used: the registry answered with a download URL whose path climbs or cannot be decoded, and your organization restricts plugin sources`;
    }
    if (X(i.hostname) && dCe()) {
        return `${s} cannot be used: it downloads from ${c}, an IPv6 spelling of an IPv4 address, which your organization's plugin source rules cannot check. Ask whoever runs the registry to serve it from a hostname or an IPv4 address.`;
    }
    let m = (g)=>(h)=>{
            switch(h.source){
                case "npm":
                    return Ie(h, e.packageName, i, f, g);
                case "hostPattern":
                    try {
                        if (g === "block") {
                            return new RegExp(h.hostPattern).test(d);
                        }
                        return Oe(d, h.hostPattern) && i.protocol === "https:";
                    } catch  {
                        t(`Invalid hostPattern regex in policy settings: ${h.hostPattern}`, {
                            level: "error"
                        });
                        return g === "block";
                    }
                default:
                    return false;
            }
        };
    if (r?.some(m("block"))) {
        return `${s} cannot be used: it resolves to ${c}, which your organization's managed settings block (blockedMarketplaces)`;
    }
    if (n !== null && !n.some(m("allow"))) {
        return `${s} cannot be used: it resolves to ${c}, which is not among the plugin sources your organization allows (strictKnownMarketplaces). Ask your administrator to add an npm or hostPattern entry for it.`;
    }
    return null;
}
function Ie(e, packageName, n, i, s) {
    return Pt(e.package, packageName) && (e.registry === undefined || (wt(n, i, e.registry) ?? s === "block"));
}
function Pt(e, packageName) {
    if (e.endsWith("/*") && e.startsWith("@")) {
        return packageName.startsWith(e.slice(0, -1));
    }
    return e === packageName;
}
function Ne(e) {
    let r;
    try {
        r = decodeURIComponent(e.pathname);
    } catch  {
        return null;
    }
    if (r.includes("\\") || /(^|\/)\.\.?(\/|$)/.test(r)) {
        return null;
    }
    return r;
}
function wt(e, r, registry) {
    let i;
    try {
        i = new URL(registry);
    } catch  {
        return null;
    }
    if (e.protocol !== i.protocol || Spe(e.hostname) !== Spe(i.hostname) || (e.port || Me(e.protocol)) !== (i.port || Me(i.protocol))) {
        return false;
    }
    let s;
    try {
        s = decodeURIComponent(i.pathname);
    } catch  {
        return null;
    }
    if (!s.endsWith("/")) {
        s = `${s}/`;
    }
    return r.startsWith(s);
}
function Me(protocol) {
    switch(protocol){
        case "https:":
            return "443";
        case "http:":
            return "80";
        default:
            return "";
    }
}
function ee(e, r) {
    if (e.source === "git" && (bq(e.url) || C(e.url))) {
        return false;
    }
    if (r.source === "hostPattern") {
        if ((e.source === "github" || e.source === "git") && e.path && !Re(e.path)) {
            return false;
        }
        if (e.source === "claudeai" && e.scope !== "org" && e.scope !== "default") {
            return false;
        }
        return Q(e, r);
    }
    if (r.source === "pathPattern") {
        return Ae(e, r);
    }
    if (e.source === "github" && r.source === "github") {
        let n = ezn(r.repo);
        if (n === null && r.repo.includes("*")) {
            t(`Invalid owner-wildcard repo in policy settings strictKnownMarketplaces: ${r.repo} (only "<owner>/*" is supported); entry only matches a literally identical repo string`, {
                level: "error"
            });
        }
        if (n !== null) {
            return kt(e.repo, n) && (r.ref || undefined) === (e.ref || undefined) && (r.path ? r.path === (e.path || undefined) : !e.path || Re(e.path));
        }
    }
    if (r.source === "skills-dir") {
        return false;
    }
    return F(e, r);
}
export { $M, _Rt, Jfs, tXt, qh, nXt, khr, bRt, Lco, rit, Thr, rXt, Ahr, Qfs, CB, Wf, oit, G$, U4, Zfs, SRt, ems, oXt, F_e, Chr, sXt, tms, x0n, wRt, zD, iXt, sit, P0n, Rhr, bl, FM, vRt, Bre, iit, I0n, Nco, O0n, nms, M0n, rms, H0n, wh, uNe, D0n, aXt, oms, L0n, E4e, oR, lV, ERt, $co, xhr, Phr, N0n, $0n, Ihr, sms, U_e, Fco, F0n, U0n, Ohr, ims, pNe, HW, k4e, kf, UM, MQ, lXt, HQ, zx, B0n, c_, WL, ait, cit, j0n, cCe, Uco, cXt, P5, Mhr, fNe, dCe, RB, Hhr, dXt, uXt, Bco, kRt, jco, pXt, TRt, Wco, Kce, ARt, Td, W0n };
