import { x, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { constants, createWriteStream, closeSync, fchmodSync, fstatSync, ftruncateSync, lstatSync, openSync, readFileSync, renameSync, unlinkSync, writeFileSync } from "fs";
import { copyFile, lstat, open, readlink, rename, stat, unlink, writeFile } from "fs/promises";
import { join, basename } from "path";
import { pipeline } from "stream/promises";
import { randomBytes } from "crypto";
async function JUe(e, t, n) {
    let constants_O_NOFOLLOW = constants.O_NOFOLLOW;
    if (constants_O_NOFOLLOW === undefined || O() === "windows") {
        if (!(await lstat(e)).isFile()) {
            throw mRr(e);
        }
        await copyFile(e, t, n?.exclusive ? constants.COPYFILE_EXCL : 0);
        return;
    }
    let o = await open(e, constants.O_RDONLY | constants_O_NOFOLLOW | (n?.nonBlocking ? constants.O_NONBLOCK ?? 0 : 0));
    try {
        let i = await o.stat();
        if (!i.isFile()) {
            throw mRr(e);
        }
        if (n?.exactMode) {
            let s = await open(t, n.exclusive ? "wx" : "w", i.mode);
            try {
                await pipeline(o.createReadStream(), createWriteStream(t, {
                    fd: s.fd,
                    autoClose: false
                }));
                await s.chmod(i.mode & 4095);
            } finally{
                await s.close();
            }
        } else {
            await pipeline(o.createReadStream(), createWriteStream(t, {
                mode: i.mode,
                flags: n?.exclusive ? "wx" : "w"
            }));
        }
    } finally{
        await o.close();
    }
}
function mRr(e) {
    return new x(`Refusing to copy ${e}: it is no longer a regular file (swapped during the copy).`, "plugin copy source swapped for a non-regular file mid-copy");
}
const Ne = new Set([
    "ENOENT",
    "ENOTDIR",
    "ELOOP",
    "EMLINK",
    "EFTYPE",
    "EISDIR",
    "ENAMETOOLONG",
    "EINVAL"
]);
async function o8e(e, t, n) {
    let r = (c)=>{
        let g = v(c);
        if (n?.throwTransient && (g === undefined || !Ne.has(g))) {
            throw c;
        }
        return null;
    };
    let o = O() === "windows";
    let i = o ? undefined : constants.O_NOFOLLOW;
    let s = o ? 0 : constants.O_NONBLOCK ?? 0;
    if (i === undefined) {
        let c = await lstat(e).catch(r);
        if (c === null || !c.isFile()) {
            return null;
        }
    }
    let f;
    try {
        f = await open(e, constants.O_RDONLY | (i ?? 0) | s);
    } catch (error) {
        return r(error);
    }
    try {
        let c = await f.stat();
        if (!c.isFile() || c.size > t) {
            return null;
        }
        let { buffer, bytesRead } = await f.read(Buffer.alloc(t + 1), 0, t + 1, 0);
        if (bytesRead > t) {
            return null;
        }
        return buffer.subarray(0, bytesRead).toString("utf-8");
    } catch (error) {
        return r(error);
    } finally{
        await f.close();
    }
}
async function KF(e, t) {
    let n = join(e, t);
    try {
        await readlink(n);
        return false;
    } catch (error) {
        if (v(error) === "EINVAL") {
            return !(await lstat(n)).isSymbolicLink();
        }
        throw error;
    }
}
let te = false;
function BIs() {
    te = true;
}
function ne() {
    return te;
}
function be() {
    return false;
}
function gRr({ served }) {
    if (!ne()) {
        return false;
    }
    if (served) {
        return false;
    }
    return be();
}
const YF = ".cc-writes";
const yC = new Set([
    "EXDEV",
    "EPERM",
    "EEXIST",
    "EBUSY"
]);
function CGn() {
    return gRr({
        served: false
    });
}
function DAo(e, t) {
    return `Could not rewrite ${e} in place: this file has other names on disk (it is hard-linked, ${t} names in all), and writing it in place would change the file under every one of those names. Remove the extra links, then try again.`;
}
function ae(e, nlink) {
    return Object.assign(new x(DAo(e, nlink), "in-place write refused: the target has other names (a hard link)"), {
        code: "EMLINK",
        path: e
    });
}
const qz = new Set([
    "EPERM",
    "EBUSY",
    "EACCES"
]);
function LR(e) {
    return `${e}.tmp.${randomBytes(4).toString("hex")}`;
}
function HP(e, t) {
    let n = `${t}.tmp.`;
    return e.startsWith(n) && /^[0-9a-f]{8}$/.test(e.slice(n.length));
}
function RGn(e) {
    return /\.tmp\.(?:[0-9a-f]{8}|\d+\.[0-9a-f]{12})$/.test(e);
}
const se = 4;
const ce = 50;
const ke = Array.from({
    length: se - 1
}, ()=>ce);
const hRr = [
    100,
    500,
    2000
];
const Ae = new Int32Array(new SharedArrayBuffer(4));
function Le(e) {
    Atomics.wait(Ae, 0, 0, e);
}
function le(e, t, n = se - 1) {
    return false;
}
const ue = 128;
async function Ce(e) {
    try {
        return ((await lstat(e)).mode & ue) === 0;
    } catch  {
        return false;
    }
}
async function E0(e, t, n = ke) {
    let r = false;
    for(let o = 0;; o++){
        try {
            await e();
            return r;
        } catch (error) {
            if (le(error, o, n.length)) {
                if (o === 0 && t !== undefined && await Ce(t)) {
                    throw error;
                }
                r = true;
                await Q(n[o]);
                continue;
            }
            throw error;
        }
    }
}
function ss(e, t, n = rename) {
    return E0(()=>n(e, t), t);
}
function Kut(e, t, n = rename) {
    return E0(()=>n(e, t), t, hRr);
}
function Ie(e) {
    try {
        return (lstatSync(e).mode & ue) === 0;
    } catch  {
        return false;
    }
}
function ron(e, t, n = renameSync) {
    let r = false;
    for(let o = 0;; o++){
        try {
            n(e, t);
            return r;
        } catch (error) {
            if (le(error, o)) {
                if (o === 0 && Ie(t)) {
                    throw error;
                }
                r = true;
                Le(ce);
                continue;
            }
            throw error;
        }
    }
}
const jIs = new Set([
    "ENOSPC",
    "EIO",
    "EDQUOT",
    "EFBIG"
]);
const fe = 67108864;
const Cse = constants.O_NONBLOCK;
async function de(e, t, n = "linux") {
    return (await We(e, t, n)).kind === "pass";
}
async function We(e, t, n = "linux") {
    if (n !== "win32") {
        return {
            kind: "pass"
        };
    }
    try {
        return {
            kind: (await lstat(e)).isFile() ? "pass" : "refuse"
        };
    } catch (error) {
        if (v(error) === "ENOENT") {
            return {
                kind: t ? "pass" : "refuse"
            };
        }
        return {
            kind: "failed",
            error
        };
    }
}
function we(e, t, n = "linux") {
    if (n !== "win32") {
        return true;
    }
    try {
        return lstatSync(e).isFile();
    } catch (error) {
        return t && v(error) === "ENOENT";
    }
}
async function Me(e, t = false) {
    if (!t && !await de(e, true)) {
        return {
            kind: "unavailable"
        };
    }
    let n;
    try {
        n = await open(e, constants.O_RDONLY | (t ? 0 : constants.O_NOFOLLOW) | Cse);
    } catch (error) {
        if (v(error) === "ENOENT") {
            return {
                kind: "absent"
            };
        }
        return {
            kind: "unavailable"
        };
    }
    try {
        let r = await n.stat();
        if (!r.isFile() || r.size > fe) {
            return {
                kind: "unavailable"
            };
        }
        return {
            kind: "snapshot",
            bytes: new Uint8Array(await n.readFile()),
            mode: r.mode & 4095
        };
    } catch  {
        return {
            kind: "unavailable"
        };
    } finally{
        await n.close().catch(()=>{});
    }
}
async function Ye(e, t, n = false) {
    if (!n && !await de(e, true)) {
        return false;
    }
    let r;
    try {
        r = await open(e, constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | (n ? 0 : constants.O_NOFOLLOW) | Cse, t.mode);
    } catch  {
        return false;
    }
    try {
        if (!(await r.stat()).isFile()) {
            await r.close().catch(()=>{});
            return false;
        }
        await r.writeFile(t.bytes);
        await r.chmod(t.mode).catch(()=>{});
        await r.close();
        return true;
    } catch  {
        await r.close().catch(()=>{});
        return false;
    }
}
function R(e, preservedTmp, targetOutcome) {
    try {
        if (e instanceof Error) {
            e.message = `${e.message}; ${preservedTmp !== undefined ? `new contents preserved at ${preservedTmp}; ` : ""}${targetOutcome === "restored" ? "original target restored" : targetOutcome === "removed" ? "partial target removed" : targetOutcome === "untouched" ? "target untouched" : "target left partial — treat contents as torn"}`;
            Object.assign(e, {
                ...preservedTmp !== undefined && {
                    preservedTmp
                },
                targetOutcome
            });
        }
    } catch  {}
    return e;
}
function QUe(e) {
    let t = v(e);
    return t === "EINVAL" || t === "ENOTSUP" || t === "EPERM" || t === "ENOSYS";
}
class xGn extends Error {
    target;
    constructor(e){
        super("beforePublish refused the write; nothing was published");
        this.target = e;
        this.name = "PublishRefusedError";
    }
}
async function De(e, stagingDir) {
    if (stagingDir === undefined) {
        return e;
    }
    try {
        await (await open(stagingDir, constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW)).close();
    } catch (error) {
        switch(v(error)){
            case "ENOENT":
            case "ELOOP":
            case "ENOTDIR":
                return e;
            case "EACCES":
            case "EPERM":
                if (await Ue(stagingDir)) {
                    return e;
                }
                throw error;
            default:
                throw error;
        }
    }
    return join(stagingDir, basename(e));
}
async function Ue(stagingDir) {
    let t = process.getuid?.();
    if (t === undefined) {
        return false;
    }
    try {
        return (await lstat(stagingDir)).uid !== t;
    } catch  {
        return false;
    }
}
const C = 3;
async function me(e, t) {
    if (t !== "win32") {
        return false;
    }
    try {
        await lstat(e);
        return true;
    } catch (error) {
        if (v(error) === "ENOENT") {
            return false;
        }
        return {
            cause: error
        };
    }
}
function W(path, t) {
    return Object.assign(Error("EEXIST: name already taken (exclusive create)", typeof t === "object" ? {
        cause: t.cause
    } : undefined), {
        code: "EEXIST",
        syscall: "lstat",
        path
    });
}
async function j(e, t, n) {
    for(let r = 1;; r++){
        let o = LR(e);
        let i = await me(o, t);
        if (i !== false) {
            if (r < C) {
                continue;
            }
            throw W(o, i);
        }
        try {
            return await n(o);
        } catch (error) {
            if (v(error) === "EEXIST" && r < C) {
                continue;
            }
            throw error;
        }
    }
}
async function k0(e, t, n, r = "linux") {
    return j(e, r, async (o)=>{
        try {
            await writeFile(o, t, {
                encoding: "utf8",
                mode: n,
                flag: "wx"
            });
            return o;
        } catch (error) {
            if (v(error) !== "EEXIST") {
                await unlink(o).catch(()=>{});
            }
            throw error;
        }
    });
}
const he = {
    exclusive: true,
    exactMode: false,
    nonBlocking: true
};
async function WIs(e, t, n = "linux") {
    return j(t, n, async (r)=>{
        try {
            await JUe(e, r, he);
            return r;
        } catch (error) {
            if (v(error) !== "EEXIST") {
                await unlink(r).catch(()=>{});
            }
            throw error;
        }
    });
}
async function Be(e, t, n = "linux") {
    return j(e, n, async (tmp)=>({
            fh: await open(tmp, n === "win32" ? "wx" : constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL, t),
            tmp
        }));
}
async function Kz(e, t, n, r = "linux") {
    await XF(e, r);
    await writeFile(e, t, {
        encoding: "utf8",
        mode: n,
        flag: "wx"
    });
}
async function zIs(e, t, n = "linux") {
    await XF(t, n);
    await JUe(e, t, he);
}
async function XF(e, t = "linux") {
    let n = await me(e, t);
    if (n === true) {
        throw W(e, n);
    }
    if (n !== false) {
        throw n.cause;
    }
}
async function En(e, t, n, renameFn) {
    return Ape(e, t, {
        mode: n,
        renameFn
    });
}
async function Ape(e, t, { mode, createMode, exactMode, flush, followSymlinks, inPlaceOnTempCreateRefused, stagingDir, renameFn, beforePublish }) {
    let F = mode ?? createMode;
    let k = ()=>{
        if (beforePublish !== undefined && !beforePublish()) {
            throw new xGn(e);
        }
    };
    let E = await De(e, stagingDir);
    let A = followSymlinks === true ? 0 : constants.O_NOFOLLOW;
    let m;
    let b = false;
    let M = false;
    let G = async (p)=>{
        let l = await Me(e, followSymlinks === true);
        let h = l.kind === "snapshot" ? l : undefined;
        k();
        let u = await open(e, constants.O_WRONLY | constants.O_CREAT | A | Cse, exactMode ?? F);
        let S;
        try {
            S = await u.stat();
        } catch (error) {
            await u.close().catch(()=>{});
            b = p !== undefined;
            throw R(error, p, "untouched");
        }
        let d = S.isCharacterDevice();
        if (!S.isFile() && !d) {
            await u.close().catch(()=>{});
            throw Object.assign(Error("refusing the in-place arm on a non-regular target"), {
                code: "ENXIO",
                path: e
            });
        }
        if (!d && S.nlink > 1 && CGn()) {
            await u.close().catch(()=>{});
            throw ae(e, S.nlink);
        }
        if (beforePublish !== undefined && !beforePublish()) {
            await u.close().catch(()=>{});
            if (l.kind === "absent" && S.size === 0 && !d) {
                await unlink(e).catch(()=>{});
            }
            throw new xGn(e);
        }
        let z = false;
        try {
            if (!d) {
                await u.truncate(0);
                z = true;
            }
            await u.writeFile(t, {
                encoding: "utf8"
            });
            let T = d ? undefined : exactMode ?? (l.kind !== "absent" ? mode : undefined);
            if (T !== undefined) {
                await u.chmod(T).catch(()=>{});
            }
            if (flush === true) {
                try {
                    await u.sync();
                } catch (error) {
                    if (!QUe(error)) {
                        throw error;
                    }
                }
            }
            await u.close();
        } catch (error) {
            await u.close().catch(()=>{});
            if (!z) {
                b = p !== undefined;
                throw R(error, p, "untouched");
            }
            b = p !== undefined;
            let Ee = h !== undefined && await Ye(e, h, followSymlinks === true) ? "restored" : await unlink(e).then(()=>true, (ye)=>v(ye) === "ENOENT") ? "removed" : "partial";
            throw R(error, p, Ee);
        }
        let q = p ?? m;
        if (q !== undefined) {
            await unlink(q).catch(()=>{});
        }
    };
    try {
        try {
            if (exactMode !== undefined || flush === true) {
                let l = await Be(E, exactMode ?? F);
                let h = l.fh;
                m = l.tmp;
                let u = false;
                let S;
                try {
                    await h.writeFile(t, {
                        encoding: "utf8"
                    });
                    if (exactMode !== undefined) {
                        try {
                            await h.chmod(exactMode);
                        } catch (error) {
                            if (!QUe(error)) {
                                throw error;
                            }
                        }
                    }
                    if (flush === true) {
                        try {
                            await h.sync();
                        } catch (error) {
                            if (!QUe(error)) {
                                throw error;
                            }
                        }
                    }
                } catch (error) {
                    u = true;
                    S = error;
                }
                if (!u) {
                    M = true;
                }
                try {
                    await h.close();
                } catch (error) {
                    if (!u) {
                        b = true;
                        throw R(error, m, "untouched");
                    }
                }
                if (u) {
                    throw S;
                }
            } else {
                m = await k0(E, t, F);
                M = true;
            }
        } catch (error) {
            if (inPlaceOnTempCreateRefused !== true) {
                throw error;
            }
            if (M) {
                throw error;
            }
            if (v(error) !== "EACCES") {
                throw error;
            }
            if (!await stat(e).then(()=>true, ()=>false)) {
                throw error;
            }
            await G(undefined);
            return;
        }
        if (m === undefined) {
            throw Error("staging block exited without a staging file");
        }
        let p = m;
        try {
            let l = renameFn ?? rename;
            await ss(p, e, (h, u)=>{
                k();
                return l(h, u);
            });
        } catch (error) {
            let h = v(error);
            if (h === undefined || !yC.has(h)) {
                throw error;
            }
            await G(p);
        }
    } catch (error) {
        if (m !== undefined && !b) {
            await unlink(m).catch(()=>{});
        }
        throw error;
    }
}
function B(e) {
    try {
        unlinkSync(e);
    } catch  {}
}
function Je(e) {
    if (!we(e, true)) {
        return {
            kind: "unavailable"
        };
    }
    let t;
    try {
        t = openSync(e, constants.O_RDONLY | constants.O_NOFOLLOW | Cse);
    } catch (error) {
        if (v(error) === "ENOENT") {
            return {
                kind: "absent"
            };
        }
        return {
            kind: "unavailable"
        };
    }
    try {
        let n = fstatSync(t);
        if (!n.isFile() || n.size > fe) {
            return {
                kind: "unavailable"
            };
        }
        return {
            kind: "snapshot",
            bytes: new Uint8Array(readFileSync(t)),
            mode: n.mode & 4095
        };
    } catch  {
        return {
            kind: "unavailable"
        };
    } finally{
        try {
            closeSync(t);
        } catch  {}
    }
}
function Xe(e, t) {
    if (!we(e, true)) {
        return false;
    }
    let n;
    try {
        n = openSync(e, constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | constants.O_NOFOLLOW | Cse, t.mode);
    } catch  {
        return false;
    }
    let r = false;
    try {
        if (!fstatSync(n).isFile()) {
            r = true;
            closeSync(n);
            return false;
        }
        writeFileSync(n, t.bytes);
        try {
            fchmodSync(n, t.mode);
        } catch  {}
        r = true;
        closeSync(n);
        return true;
    } catch  {
        if (!r) {
            try {
                closeSync(n);
            } catch  {}
        }
        return false;
    }
}
function pe(e, t) {
    if (t !== "win32") {
        return false;
    }
    try {
        lstatSync(e);
        return true;
    } catch (error) {
        if (v(error) === "ENOENT") {
            return false;
        }
        return {
            cause: error
        };
    }
}
function GIs(e, t = "linux") {
    let n = pe(e, t);
    if (n === true) {
        throw W(e, n);
    }
    if (n !== false) {
        throw n.cause;
    }
}
function $e(e, t, n, r = "linux") {
    for(let o = 1;; o++){
        let i = LR(e);
        let s = pe(i, r);
        if (s !== false) {
            if (o < C) {
                continue;
            }
            throw W(i, s);
        }
        try {
            writeFileSync(i, t, {
                encoding: "utf8",
                mode: n,
                flag: "wx"
            });
            return i;
        } catch (error) {
            if (v(error) === "EEXIST") {
                if (o < C) {
                    continue;
                }
                throw error;
            }
            B(i);
            throw error;
        }
    }
}
function xH(e, t, n, r) {
    let o = false;
    let i;
    try {
        i = $e(e, t, n);
        try {
            ron(i, e, r);
        } catch (error) {
            let f = v(error);
            if (f === undefined || !yC.has(f)) {
                throw error;
            }
            let c = Je(e);
            let g = c.kind === "snapshot" ? c : undefined;
            let w = openSync(e, constants.O_WRONLY | constants.O_CREAT | constants.O_NOFOLLOW | Cse, n);
            let y = false;
            {
                let E;
                try {
                    E = fstatSync(w);
                } catch (err) {
                    try {
                        closeSync(w);
                    } catch  {}
                    o = true;
                    throw R(err, i, "untouched");
                }
                y = E.isCharacterDevice();
                if (!E.isFile() && !y) {
                    try {
                        closeSync(w);
                    } catch  {}
                    throw Object.assign(Error("refusing the in-place arm on a non-regular target"), {
                        code: "ENXIO",
                        path: e
                    });
                }
                if (!y && E.nlink > 1 && CGn()) {
                    try {
                        closeSync(w);
                    } catch  {}
                    throw ae(e, E.nlink);
                }
            }
            let F = false;
            let k = false;
            try {
                if (!y) {
                    ftruncateSync(w, 0);
                    k = true;
                }
                writeFileSync(w, t, {
                    encoding: "utf8"
                });
                if (n !== undefined && c.kind !== "absent" && !y) {
                    try {
                        fchmodSync(w, n);
                    } catch  {}
                }
                F = true;
                closeSync(w);
            } catch (err) {
                if (!F) {
                    try {
                        closeSync(w);
                    } catch  {}
                }
                if (!k) {
                    o = true;
                    throw R(err, i, "untouched");
                }
                o = true;
                let A = g !== undefined && Xe(e, g);
                let m = "partial";
                if (A) {
                    m = "restored";
                } else {
                    try {
                        unlinkSync(e);
                        m = "removed";
                    } catch (error_1) {
                        m = v(error_1) === "ENOENT" ? "removed" : "partial";
                    }
                }
                throw R(err, i, m);
            }
            B(i);
        }
    } catch (error) {
        if (i !== undefined && !o) {
            B(i);
        }
        throw error;
    }
}
export { JUe, mRr, o8e, KF, BIs, gRr, YF, yC, CGn, DAo, qz, LR, HP, RGn, hRr, E0, ss, Kut, ron, jIs, Cse, QUe, xGn, k0, WIs, Kz, zIs, XF, En, Ape, GIs, xH };
