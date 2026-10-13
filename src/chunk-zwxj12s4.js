import { q, B, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { x, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ze, Bn, fa, ll, ks, $H } from "/$bunfs/root/chunk-xgw72tt1.js";
import { mf, yo, uwe, ie, APe, Dse, IDt, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { _q, nr, _C, ho } from "/$bunfs/root/chunk-wew3321y.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { uPe, fRr, twe } from "/$bunfs/root/chunk-yngqe5v3.js";
import { closeSync, constants, fstatSync, lstatSync, openSync, readlinkSync, readSync, statSync, fchmodSync, mkdirSync } from "fs";
import { open } from "fs/promises";
import { dirname, resolve, join } from "path";
import { createHash, randomUUID } from "crypto";
import { tmpdir } from "os";
function Spe(e) {
    let n = _C(e);
    if (ho(n)) {
        return nr;
    }
    return n;
}
function $rn(e) {
    let n = IDt(e);
    return n.includes("\\") || /%[0-9A-Fa-f]{2}/.test(n) || n.split(/[/?#]/).some((r)=>r === "." || r === "..");
}
function dAo(e) {
    let n = e.trimStart();
    let r = /^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(n);
    if (r === null || /^https?$/i.test(r[1] ?? "")) {
        return APe(n);
    }
    return APe(r[0] + IDt(n.slice(r[0].length)));
}
function qY(e) {
    if (e.includes("%00") || e.includes("\x00")) {
        return true;
    }
    if (_q(e)) {
        return true;
    }
    let n = [
        Dse(e)?.host,
        Dse(e, {
            asRewritten: true
        })?.host
    ];
    if (e.includes("://")) {
        n.push(APe(e.trimStart())?.hostname || undefined, dAo(e)?.hostname || undefined);
    }
    let r = n.map((o)=>{
        if (o === undefined) {
            return null;
        }
        return Spe(o);
    });
    return r.some((o)=>o !== r[0]);
}
const ai = 524288;
const U5e = 0;
const qSe = 2097152;
const Nut = 536870912;
const f = ze({
    noFollowAny: "untried",
    localVolumes: undefined
}, (e)=>{
    e.noFollowAny = "untried";
    e.localVolumes = undefined;
});
const Q = [
    "/",
    "/System/Volumes/Data"
];
function F() {
    if (f.localVolumes !== undefined) {
        return f.localVolumes;
    }
    let e = true;
    let n = Q.flatMap((o)=>{
        try {
            return [
                statSync(o).dev
            ];
        } catch (error) {
            if (v(error) !== "ENOENT") {
                e = false;
            }
            return [];
        }
    });
    let r = new Set(n);
    if (e) {
        f.localVolumes = r;
    }
    return r;
}
function I(e) {
    if (ee() === "rejected") {
        return "unsupported";
    }
    let n;
    try {
        n = L(dirname(e));
    } catch (error) {
        let o = v(error);
        if (o === "ELOOP") {
            return "link";
        }
        if (o === "EINVAL") {
            return "elsewhere";
        }
        if (o === "EACCES" || o === "EPERM") {
            return P(dirname(e));
        }
        throw error;
    }
    try {
        if (F().has(fstatSync(n).dev)) {
            return "local";
        }
        return "elsewhere";
    } finally{
        closeSync(n);
    }
}
function P(e) {
    let n = F();
    let r = dirname(e);
    if (r === e) {
        return "elsewhere";
    }
    let o;
    try {
        o = L(r);
    } catch (error) {
        let s = v(error);
        if (s === "ELOOP") {
            return "link";
        }
        if (s === "EACCES" || s === "EPERM") {
            let c = P(r);
            if (c === "local" && !n.has(C(e))) {
                return "elsewhere";
            }
            return c;
        }
        if (s === "EINVAL") {
            return "elsewhere";
        }
        throw error;
    }
    try {
        let i = fstatSync(o).dev;
        if (n.has(i) && n.has(C(e))) {
            return "local";
        }
        return "elsewhere";
    } finally{
        closeSync(o);
    }
}
function C(e) {
    try {
        return lstatSync(e).dev;
    } catch  {
        return Number.NaN;
    }
}
function L(e) {
    return openSync(e, constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NONBLOCK | Nut | ai);
}
async function rGn() {
    if (f.noFollowAny === "untried") {
        try {
            await (await open("/", constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NONBLOCK | Nut | ai)).close();
            f.noFollowAny = "works";
        } catch (error) {
            f.noFollowAny = v(error) === "EINVAL" ? "rejected" : "works";
        }
    }
    return f.noFollowAny === "rejected";
}
function ee() {
    if (f.noFollowAny === "untried") {
        try {
            closeSync(L("/"));
            f.noFollowAny = "works";
        } catch (error) {
            f.noFollowAny = v(error) === "EINVAL" ? "rejected" : "works";
        }
    }
    if (f.noFollowAny === "rejected") {
        return "rejected";
    }
    return "works";
}
function $ut(e, n) {
    return n === "windows" && Bn(e) && !ll(e) || fa(e);
}
function B5e(e) {
    return $H(e) || fa(e);
}
function E(e) {
    let n = ie();
    return !ks(e) && !fa(e) && mf(n, e, {
        unreadableAncestry: "unverified",
        surfaceNetworkRaw: true,
        launchAncestry: uwe(n)
    }) === undefined;
}
function ne() {
    return "linux";
}
const re = 65536;
function Frn(e, n, r, o, i) {
    let s = ne();
    let c = ai | (s === "windows" ? constants.O_RDONLY : constants.O_RDONLY | constants.O_NONBLOCK | constants.O_NOCTTY);
    let d = !n && $ut(e, s) ? se(e, c, s, r) : ce(e, n, o, c, s, r);
    if (d === null) {
        return null;
    }
    try {
        if (i === undefined) {
            uPe(fstatSync(d), e, r);
        } else {
            let u = fstatSync(d, {
                bigint: true
            });
            if (u.ino !== i.ino || u.ctimeNs !== i.ctimeNs || s !== "windows" && u.dev !== i.dev) {
                return p(e, "the file was replaced or changed after its path was checked");
            }
            uPe({
                isDirectory: ()=>u.isDirectory(),
                isFile: ()=>u.isFile(),
                size: Number(u.size)
            }, e, r);
        }
        return twe(te(d, e, r));
    } finally{
        closeSync(d);
    }
}
function te(e, n, r) {
    let o = [];
    let i = 0;
    while(i <= r){
        let s = Buffer.allocUnsafe(Math.min(re, r + 1 - i));
        let c = readSync(e, s, 0, s.length, i);
        if (c === 0) {
            break;
        }
        o.push(s.subarray(0, c));
        i += c;
    }
    fRr(i, n, r);
    return Buffer.concat(o, i);
}
function H(e, n, r) {
    if (r === "macos" && f.noFollowAny !== "rejected") {
        return {
            fd: openSync(e, n | Nut),
            everyComponent: true
        };
    }
    return {
        fd: openSync(e, r === "windows" ? n : n | constants.O_NOFOLLOW),
        everyComponent: false
    };
}
const _ = Symbol("no procfs");
const oe = Symbol("descriptor path unreadable");
function U(e, n) {
    if (n !== "linux") {
        return _;
    }
    try {
        return readlinkSync(`/proc/self/fd/${e}`);
    } catch  {
        try {
            lstatSync("/proc/self/fd");
        } catch  {
            return _;
        }
        return oe;
    }
}
function se(e, n, r, o) {
    if (r === "macos" && I(e) === "link") {
        return p(e, "a link stands above the spelled name");
    }
    let i = lstatSync(e);
    if (i.isSymbolicLink()) {
        M(e);
        return p(e, "a link stands at the spelled name");
    }
    uPe(i, e, o);
    let s;
    try {
        s = H(e, n, r).fd;
    } catch (error) {
        if (v(error) !== "ELOOP") {
            throw error;
        }
        return p(e, "a link stands on the spelled route");
    }
    let c = U(s, r);
    if (c === _ || c === e) {
        return s;
    }
    return w(s, e, `the descriptor is on ${String(c)}`);
}
function ce(e, n, r, o, i, s) {
    if (!n && !E(e)) {
        return p(e, "its route could not be examined");
    }
    let c = false;
    if (i === "macos") {
        let l = I(e);
        if (l === "link") {
            return R(e, n);
        }
        c = l === "local" && !r;
    }
    if (!c) {
        let l = lstatSync(e);
        if (!l.isSymbolicLink()) {
            uPe(l, e, s);
        } else if (i === "windows") {
            return R(e, n);
        }
    }
    let d;
    try {
        d = H(e, o, i);
    } catch (error) {
        if (v(error) !== "ELOOP") {
            throw error;
        }
        return R(e, n);
    }
    let { fd, everyComponent } = d;
    try {
        if (everyComponent) {
            return fd;
        }
        let l = U(fd, i);
        if (l !== _) {
            if (l === e) {
                return fd;
            }
            return w(fd, e, `the descriptor is on ${String(l)}`);
        }
        let D = yo(ie(), e);
        if (!D.isSymlink && D.resolvedPath === e && (D.isCanonical || !n && E(e))) {
            return fd;
        }
        return w(fd, e, "the route no longer resolves to it");
    } catch (error) {
        w(fd, e, "the binding check threw");
        throw error;
    }
}
function R(e, n) {
    if (!n && E(e)) {
        M(e);
    }
    return p(e, "a link appeared on the route");
}
function M(e) {
    if (!lstatSync(e).isSymbolicLink()) {
        return;
    }
    let n = resolve(dirname(e), readlinkSync(e));
    if (!E(n)) {
        return;
    }
    try {
        lstatSync(n);
    } catch (error) {
        let o = v(error);
        if ((o === "ENOENT" || o === "ENOTDIR") && typeof error === "object" && error !== null) {
            Object.defineProperty(error, V, {
                value: true
            });
        }
        throw error;
    }
}
var V = Symbol("boundRead.linkToNothing");
function rIs(e) {
    return typeof e === "object" && e !== null && V in e;
}
function w(e, n, r) {
    closeSync(e);
    return p(n, r);
}
function p(e, n) {
    t(`boundRead: not reading ${e}: ${n}`, {
        level: "warn"
    });
    return null;
}
function ym() {
    let a_CLAUDE_CODE_TMPDIR = a.CLAUDE_CODE_TMPDIR;
    if (a_CLAUDE_CODE_TMPDIR) {
        return a_CLAUDE_CODE_TMPDIR;
    }
    return tmpdir();
}
const jCr = 44;
const oGn = "claude-pdf-";
const sGn = "claude-preview-";
function Qxe(e) {
    let n = process.getuid?.();
    if (n === undefined) {
        return;
    }
    let r = e.replace(/[\/]+$/, "") || e;
    let o = "Set CLAUDE_CODE_TMPDIR to a directory you control, or ask an administrator to remove it.";
    let i;
    try {
        i = openSync(r, constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW);
    } catch (error) {
        let c = v(error);
        if (c === "ELOOP" || c === "ENOTDIR") {
            throw Error(`Temp directory ${e} is not a directory (may be an attacker-planted symlink). Refusing to use it. ${o}`);
        }
        if (c === "EACCES") {
            let d;
            try {
                let u = lstatSync(r);
                if (u.uid !== n) {
                    d = u.uid;
                }
            } catch  {}
            if (d !== undefined) {
                throw new x(`Temp directory ${e} is owned by uid ${d}, expected ${n}. Refusing to use it \u2014 another user may have pre-created it. ${o}`, "temp dir owned by another uid (EACCES at open); refusing to use it");
            }
            throw new x(`Temp directory ${e} is not readable (its mode may have been altered, or a path component denies search). Refusing to use it \u2014 restore its permissions (chmod 0700) or remove it. ${o}`, "temp dir unreadable (owner-read or path search bit missing); refusing to use it");
        }
        throw error;
    }
    try {
        let s = fstatSync(i);
        if (s.uid !== n) {
            if (n === 0 && a.CLAUDE_CODE_CONTAINER_ID) {
                J("warn", "tempdir_owner_mismatch", {
                    observed_uid: s.uid
                });
                return;
            }
            throw Error(`Temp directory ${e} is owned by uid ${s.uid}, expected ${n}. Refusing to use it \u2014 another user may have pre-created it. ${o}`);
        }
        if ((s.mode & 511) !== 448) {
            fchmodSync(i, 448);
        }
    } finally{
        closeSync(i);
    }
}
class j {
    ensured = undefined;
    childProcessTmpDirMemo = undefined;
    markEnsured(e) {
        this.ensured = e;
    }
    setChildProcessTmpDirMemo(e) {
        this.childProcessTmpDirMemo = e;
    }
}
const Y = new q(()=>new j);
function iGn() {
    return `claude-${process.getuid?.() ?? 0}`;
}
function tc() {
    return G(Y.of(B().host));
}
function G(e) {
    if (Ce()) {
        throw Error("The temp directory is unavailable in a diskless session: nothing is created, verified or written under the shared per-uid temp root");
    }
    let n = join(ym(), iGn());
    if (n !== e.ensured) {
        if (typeof process.getuid === "function") {
            mkdirSync(n, {
                recursive: true,
                mode: 448
            });
            Qxe(n);
        } else {
            try {
                mkdirSync(n, {
                    recursive: true,
                    mode: 448
                });
            } catch  {}
        }
        e.markEnsured(n);
    }
    return n;
}
function Zxe() {
    let e = tc();
    mkdirSync(e, {
        recursive: true,
        mode: 448
    });
    Qxe(e);
    let n = join(e, "plugin-tool-staging");
    mkdirSync(n, {
        recursive: true,
        mode: 448
    });
    Qxe(n);
    return n;
}
function ePe() {
    let e = Y.of(B().host);
    let forDir = G(e);
    if (Buffer.byteLength(forDir) <= jCr) {
        return forDir;
    }
    let r = tmpdir();
    let e_childProcessTmpDirMemo = e.childProcessTmpDirMemo;
    if (e_childProcessTmpDirMemo?.forDir === forDir) {
        return e_childProcessTmpDirMemo.result;
    }
    let i = join(r, iGn());
    let result = i;
    try {
        mkdirSync(i, {
            recursive: true,
            mode: 448
        });
        Qxe(i);
    } catch  {
        result = forDir;
    }
    e.setChildProcessTmpDirMemo({
        forDir,
        result
    });
    return result;
}
function oIs() {
    let e = ym();
    if (Buffer.byteLength(e) <= jCr) {
        return e;
    }
    return tmpdir();
}
function tPe(e = "claude-prompt", n = ".md", r) {
    let o = r?.contentHash ? createHash("sha256").update(r.contentHash).digest("hex").slice(0, 16) : randomUUID();
    return join(tc(), `${e}-${o}${n}`);
}
export { Spe, $rn, dAo, qY, ai, U5e, qSe, Nut, rGn, $ut, B5e, Frn, rIs, ym, jCr, oGn, sGn, Qxe, iGn, tc, Zxe, ePe, oIs, tPe };
