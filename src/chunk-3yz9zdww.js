import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, $8e, B, CS } from "/$bunfs/root/chunk-ctt36bn8.js";
import { x, l, v, z, H9, jt, hy } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { df, se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { sh, yo, _o, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { yC, CGn, DAo, ss, ron, QUe, XF, GIs } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { hC } from "/$bunfs/root/chunk-w1n7t02f.js";
import { OAo } from "/$bunfs/root/chunk-yngqe5v3.js";
import { Oh } from "/$bunfs/root/chunk-1qq5kpcj.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { randomBytes } from "crypto";
import { closeSync, fchmodSync, constants, fstatSync, writeFileSync, fsyncSync, ftruncateSync, openSync, readSync } from "fs";
import { lstat, open, readlink, realpath, stat } from "fs/promises";
import { homedir } from "os";
import { basename, dirname, extname, isAbsolute, join, normalize, parse, relative, resolve, sep } from "path";
class ne {
    identities = new Map;
    record(e, dev, ino, fd) {
        let u = X(e);
        let i = this.identities.get(u);
        if (i) {
            try {
                closeSync(i.fd);
            } catch  {}
        }
        this.identities.set(u, {
            dev,
            ino,
            fd
        });
    }
    identity(e) {
        return this.identities.get(X(e));
    }
    reset() {
        for (let { fd } of this.identities.values()){
            try {
                closeSync(fd);
            } catch  {}
        }
        this.identities.clear();
    }
}
const pe = new q(()=>new ne);
function K() {
    return pe.of(B().host);
}
function X(e) {
    return resolve(e);
}
function IIs(e, n, r, s) {
    K().record(e, n, r, s);
}
function oDt(e) {
    if (!e) {
        return;
    }
    let n = K().identity(e);
    if (!n) {
        return;
    }
    let r;
    try {
        r = openSync(e, constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW);
    } catch (error) {
        let u = v(error);
        if (u === "ENOENT" || u === "ENOTDIR" || u === "ELOOP" || u === "EACCES") {
            Vut(`Staging dir ${e} was established for a sandboxed command but is now unopenable (${u}) \u2014 refusing atomic write`);
        }
        throw error;
    }
    try {
        let s = fstatSync(r);
        if (s.dev !== n.dev || s.ino !== n.ino) {
            Vut(`Staging dir ${e} identity changed (expected ${n.dev}/${n.ino}, found ${s.dev}/${s.ino}) \u2014 refusing atomic write`);
        }
    } finally{
        closeSync(r);
    }
}
function tRr(e, n, r, s) {
    let u = `${n}${r}`;
    if (!e) {
        return u;
    }
    let i = K().identity(e);
    if (s && dirname(n) !== dirname(e)) {
        oDt(e);
        return u;
    }
    let o = constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW;
    try {
        closeSync(openSync(dirname(e), o));
    } catch (error) {
        let h = v(error);
        if (h === "ELOOP" || h === "ENOTDIR") {
            if (i) {
                Vut(`Staging dir parent ${dirname(e)} is ${h} but a sandboxed command established ${e} \u2014 refusing sibling fallback`);
            }
            if (s) {
                return u;
            }
            throw new _g(`Refusing to stage atomic write under non-directory parent: ${dirname(e)}`);
        }
        if (!z(error)) {
            throw error;
        }
        if (i) {
            Vut(`Staging dir parent ${dirname(e)} is absent but a sandboxed command established ${e} \u2014 refusing sibling fallback`);
        }
        return u;
    }
    let f;
    try {
        f = openSync(e, o);
    } catch (error) {
        let h = v(error);
        if (h === "ENOENT" || h === "ENOTDIR" || h === "ELOOP") {
            if (i) {
                Vut(`Staging dir ${e} is ${h} but a sandboxed command established it \u2014 refusing sibling fallback`);
            }
            return u;
        }
        throw error;
    }
    try {
        if (i) {
            let y = fstatSync(f);
            if (y.dev !== i.dev || y.ino !== i.ino) {
                Vut(`Staging dir ${e} identity changed (expected ${i.dev}/${i.ino}, found ${y.dev}/${y.ino}) \u2014 refusing atomic write`);
            }
        }
    } finally{
        closeSync(f);
    }
    return join(e, `${basename(n)}${r}`);
}
class _g extends Error {
    constructor(e){
        super(e);
        this.name = "SymlinkWriteRefusedError";
    }
}
class _Gn extends _g {
    constructor(e, n){
        super(DAo(e, n));
        this.name = "HardLinkWriteRefusedError";
    }
}
function re(e) {
    return {
        flags: constants.O_WRONLY | constants.O_CREAT | e,
        flagsIfMissing: undefined
    };
}
class s9 extends Error {
    constructor(e){
        super(e);
        this.name = "SymlinkReadRefusedError";
    }
}
async function Gut(e, n) {
    let r = relative(e, n);
    if (r === "" || r.startsWith("..") || isAbsolute(r)) {
        throw new x(`assertDirChainReal: dir must be strictly inside base (rel: ${r})`, "assertDirChainReal: dir must be strictly inside base");
    }
    let s = e;
    for (let u of r.split(sep)){
        s = join(s, u);
        try {
            await (await open(s, constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW)).close();
        } catch (error) {
            let o = v(error);
            if (o === "ELOOP" || o === "ENOTDIR") {
                throw new _g(`Refusing to write under symlinked or non-directory path: ${s}`);
            }
            if (o === "ENOENT") {
                return;
            }
            throw error;
        }
    }
}
class nRr extends Error {
    constructor(e){
        super(e);
        this.name = "StagingDirTamperedError";
    }
}
function Vut(e) {
    m("sandbox_exec", "atomic_write_staging_dir_tampered");
    throw new nRr(e);
}
function i9(e, n, r = "write") {
    let s = e.session.writePermissionStash.consume(e.toolUseId, n, r);
    if (s === $8e) {
        throw new (r === "read" ? s9 : _g)(`Refusing to ${r === "read" ? "read" : "write"} ${n}: its permission check expired before it ran (too many concurrent file operations). Retry.`);
    }
    if (s !== undefined) {
        return s;
    }
    if (e.toolUseId) {
        t(`takeApprovedPathsForWrite: no check-time stash for toolUseId=${e.toolUseId}; using fresh resolution`);
    }
    return _o(n);
}
function K5e(e, n) {
    return i9(e, n, "read");
}
async function Md(e) {
    try {
        await stat(e);
        return true;
    } catch  {
        return false;
    }
}
async function j1(e) {
    return lstat(e).then(()=>"present", (n)=>{
        if (z(n) || v(n) === "ENOTDIR") {
            return "gone";
        }
        return "unreadable";
    });
}
const Y5e = 262144;
function X5e(e, { maxBytes, symlinkAtPath = "follow", regularFileOnly = symlinkAtPath === "refuse" }) {
    using u = sh`fs.readBoundedSync(${e}, max ${maxBytes} bytes)`;
    let i = "r";
    if (symlinkAtPath === "refuse") {
        i = constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK;
    } else if (regularFileOnly) {
        i = constants.O_RDONLY | constants.O_NONBLOCK;
    }
    let o = openSync(e, i);
    try {
        if (regularFileOnly) {
            if (!fstatSync(o).isFile()) {
                throw Object.assign(Error("EINVAL: not a regular file"), {
                    code: "EINVAL"
                });
            }
        }
        return oe(o, e, maxBytes);
    } finally{
        closeSync(o);
    }
}
function OIs(e, { maxBytes }) {
    using r = sh`fs.readInheritedFdSync(fd ${e}, max ${maxBytes} bytes)`;
    let s = fstatSync(e);
    if (!s.isSocket() && !s.isFIFO()) {
        throw new x(`refusing to read fd ${e}: not a pipe or socket`, "readInheritedFdSync: descriptor is not a pipe or socket");
    }
    return he(e, maxBytes);
}
function rRr(e) {
    try {
        return fstatSync(e).isSocket();
    } catch  {
        return false;
    }
}
function he(e, maxBytes) {
    try {
        return oe(e, `fd ${e}`, maxBytes, {
            untilNewline: true
        });
    } finally{
        closeSync(e);
    }
}
function oe(e, n, maxBytes, { untilNewline = false } = {}) {
    let u = [];
    let i = 0;
    let o = Buffer.alloc(8192);
    while(true){
        let f = readSync(e, o, 0, o.length, null);
        if (f === 0) {
            return Buffer.concat(u).toString("utf8");
        }
        i += f;
        if (i > maxBytes) {
            throw new x(`refusing to read ${n}: content exceeds ${maxBytes} byte limit`, "readBoundedSync: content exceeds byte limit");
        }
        let y = untilNewline ? o.subarray(0, f).indexOf(10) : -1;
        u.push(Buffer.from(o.subarray(0, y === -1 ? f : y + 1)));
        if (y !== -1) {
            return Buffer.concat(u).toString("utf8");
        }
    }
}
function MIs(e) {
    let n = ie();
    return Math.floor(n.statSync(e).mtimeMs);
}
async function Wv(e) {
    let n = await ie().stat(e);
    return Math.floor(n.mtimeMs);
}
function EAo() {
    return Ne(a.CLAUDE_CODE_PERFORCE_MODE);
}
const Xrn = "File is read-only — it has not been opened for edit in Perforce. Run `p4 edit <file>` to check it out, then retry. Do not chmod the file writable; that bypasses Perforce tracking.";
function Jrn(e) {
    return EAo() && (e & 128) === 0;
}
const ge = Oh();
function kse(e, n) {
    return ge.run(e, n);
}
function J5e(e, n) {
    if (n !== "CRLF") {
        return e;
    }
    return e.replaceAll(`\r
`, `
`).split(`
`).join(`\r
`);
}
async function oPe(e, n, encoding, s) {
    let u = J5e(n, s);
    await nA(e, u, {
        encoding
    });
    let i = Buffer.byteLength(u, encoding);
    let o = await ie().stat(e);
    if (o.size !== i) {
        throw new x(`Write verification failed: ${e} is ${o.size} bytes on disk, expected ${i}. The filesystem may have silently truncated the write (network drive / cloud sync).`, "writeTextContent: on-disk size mismatch after write");
    }
    return Math.floor(o.mtimeMs);
}
function HIs(e) {
    try {
        let n = ie();
        let { resolvedPath } = yo(n, e);
        return OAo(resolvedPath);
    } catch (error) {
        if (jt(error) || H9(error) || hy(error)) {
            t(`detectFileEncoding failed for expected reason: ${v(error)}`, {
                level: "debug"
            });
        } else {
            c(error);
        }
        return "utf8";
    }
}
function xN(e) {
    if (!e.includes("\t")) {
        return e;
    }
    return e.replace(/^\t+/gm, (n)=>"  ".repeat(n.length));
}
function we(e) {
    let absolutePath = e ? hC(e) ?? undefined : undefined;
    let r = absolutePath ? df() : null;
    let relativePath = absolutePath && r !== null ? relative(r, absolutePath) : undefined;
    return {
        absolutePath,
        relativePath
    };
}
const oRr = "Path hidden (unsupported characters)";
function os(e) {
    if (e.includes("\x00")) {
        return oRr;
    }
    let { relativePath } = we(e);
    if (relativePath && !relativePath.startsWith("..")) {
        return relativePath;
    }
    if (CS()) {
        return e;
    }
    let r = homedir();
    if (e.startsWith(r + sep)) {
        return `~${e.slice(r.length)}`;
    }
    return e;
}
const ye = /^(\.[\p{L}\p{N}_+~#-]{1,32})?$/u;
async function sPe(e) {
    let n = ie();
    try {
        let r = dirname(e);
        let s = basename(e, extname(e));
        let o = (await n.readdir(r)).filter((f)=>ye.test(extname(f.name).normalize("NFC")) && basename(f.name, extname(f.name)) === s && join(r, f.name) !== e)[0];
        if (o) {
            return o.name;
        }
        return;
    } catch (error) {
        if (!z(error)) {
            t(`findSimilarFile failed for ${e}: ${error}`, {
                level: "error"
            });
        }
        return;
    }
}
const W1 = "Note: your current working directory is";
async function Tse(e) {
    let n = se();
    let r = dirname(n);
    let s = e;
    try {
        let F = await realpath(dirname(e));
        s = join(F, basename(e));
    } catch  {}
    let u = r === sep ? sep : r + sep;
    let o = O() === "windows" ? (F)=>F.toLowerCase() : (F)=>F;
    let f = o(s);
    if (!f.startsWith(o(u)) || f.startsWith(o(n + sep)) || f === o(n)) {
        return;
    }
    let y = relative(r, s);
    let h = join(n, y);
    try {
        await stat(h);
        return h;
    } catch  {
        return;
    }
}
function Q5e({ content, startLine, tabAwareSeparator = false }) {
    if (!content) {
        return "";
    }
    let s = tabAwareSeparator && (content.startsWith("\t") || content.includes(`
	`)) ? ":" : "\t";
    let u = [];
    let i = startLine;
    let o = 0;
    let f = content.indexOf(`
`);
    while(f !== -1){
        u.push(sRr(content.slice(o, f), i++, s));
        o = f + 1;
        f = content.indexOf(`
`, o);
    }
    u.push(sRr(content.slice(o), i, s));
    return u.join(`
`);
}
function sRr(e, n, r) {
    let s = e.endsWith("\r") ? e.slice(0, -1) : e;
    return `${n}${r}${s}`;
}
function bGn(e) {
    return e.match(/^\s*\d+[\u2192\t:](.*)$/)?.[1] ?? e;
}
function M(err, error) {
    if (err instanceof Error && !(err instanceof _g) && err !== error) {
        try {
            if (err.cause === undefined) {
                err.message += ` (atomic write failed first: ${l(error)})`;
                Object.defineProperty(err, "cause", {
                    value: error,
                    writable: true,
                    configurable: true,
                    enumerable: false
                });
            }
        } catch  {}
    }
    throw err;
}
function ae(e) {
    if (e === undefined) {
        return undefined;
    }
    return e & 511 | 128;
}
function kAo(e, n, r = {
    encoding: "utf-8"
}) {
    let s = ie();
    let u = r.allowSymlink ? 0 : constants.O_NOFOLLOW;
    let i = e;
    let o;
    let f = false;
    if (r.allowSymlink) {
        try {
            let d = s.readlinkSync(e);
            i = isAbsolute(d) ? d : resolve(yo(s, dirname(e)).resolvedPath, d);
            t(`Writing through symlink: ${e} -> ${i}`);
        } catch  {}
    } else {
        if (r.checkParentDir) {
            try {
                closeSync(openSync(dirname(e), constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW));
            } catch (error) {
                let b = v(error);
                if (b === "ELOOP" || b === "ENOTDIR") {
                    throw new _g(`Refusing to write into symlinked directory: ${dirname(e)}`);
                }
            }
        }
        try {
            let d = s.lstatSync(e);
            if (d.isSymbolicLink()) {
                throw new _g(`Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`);
            }
            o = d.mode;
            f = true;
        } catch (error) {
            if (!z(error)) {
                throw error;
            }
        }
    }
    let y = `.tmp.${process.pid}.${randomBytes(6).toString("hex")}`;
    let h = tRr(r.stagingDir, i, y, r.allowSymlink ?? false);
    let F = false;
    if (r.allowSymlink && !f) {
        try {
            o = s.statSync(i).mode;
            f = true;
        } catch (error) {
            if (!z(error)) {
                throw error;
            }
        }
    }
    if (f && o !== undefined) {
        t(`Preserving file permissions: ${o.toString(8)}`);
    } else if (r.mode !== undefined) {
        o = r.mode;
        t(`Setting permissions for new file: ${o.toString(8)}`);
    }
    try {
        t(`Writing to temp file: ${h}`);
        let d = openSync(h, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | u, f ? ae(o) : r.mode);
        let b = false;
        let N;
        try {
            if (dirname(h) !== dirname(i)) {
                oDt(r.stagingDir);
            }
            writeFileSync(d, n, {
                encoding: r.encoding
            });
            if (f && o !== undefined) {
                try {
                    fchmodSync(d, o);
                    t("Applied original permissions to temp file");
                } catch (error) {
                    if (!QUe(error)) {
                        throw error;
                    }
                    t(`fchmod unsupported on this filesystem: ${error}`);
                }
            }
            try {
                fsyncSync(d);
            } catch (error) {
                if (!QUe(error)) {
                    throw error;
                }
                t(`fsync unsupported on this filesystem: ${error}`);
            }
            F = true;
        } catch (error) {
            b = true;
            N = error;
        }
        try {
            closeSync(d);
        } catch (error) {
            if (!b) {
                throw error;
            }
            t(`closeSync also failed after temp write error: ${error}`, {
                level: "error"
            });
        }
        if (b) {
            throw N;
        }
        t(`Temp file written successfully, size: ${n.length} bytes`);
        if (dirname(h) !== dirname(i)) {
            oDt(r.stagingDir);
        }
        t(`Renaming ${h} to ${i}`);
        ron(h, i, (g, k)=>s.renameSync(g, k));
        t(`File ${i} written atomically`);
    } catch (error) {
        t(`Failed to write file atomically: ${error}`, {
            level: "error"
        });
        let b = v(error);
        if (F && b !== undefined && yC.has(b) || !F && f && b === "EACCES") {
            let { flags, flagsIfMissing } = re(u);
            let C = !f && r.mode !== undefined ? r.mode : undefined;
            let S;
            try {
                try {
                    S = openSync(i, flags, C);
                } catch (err) {
                    if (flagsIfMissing === undefined || !z(err)) {
                        throw err;
                    }
                    GIs(i);
                    S = openSync(i, flagsIfMissing, C);
                }
            } catch (err) {
                try {
                    s.unlinkSync(h);
                } catch (error_1) {
                    t(`Failed to clean up temp file: ${error_1}`);
                }
                if (v(err) === "ELOOP") {
                    throw new _g(`Refusing to write through symlink: ${i} (O_NOFOLLOW)`);
                }
                throw error;
            }
            try {
                let p = fstatSync(S);
                if (p.nlink > 1 && (r.refuseHardLinkedInPlace ?? CGn())) {
                    throw new _Gn(i, p.nlink);
                }
                if (p.isFile()) {
                    ftruncateSync(S, 0);
                }
            } catch (err) {
                try {
                    closeSync(S);
                } catch  {}
                try {
                    s.unlinkSync(h);
                } catch (error_1) {
                    t(`Failed to clean up temp file: ${error_1}`);
                }
                M(err, error);
            }
            try {
                writeFileSync(S, n, {
                    encoding: r.encoding
                });
                try {
                    fsyncSync(S);
                } catch (err) {
                    if (!QUe(err)) {
                        throw err;
                    }
                    t(`fsync unsupported on this filesystem: ${err}`);
                }
                closeSync(S);
                try {
                    s.unlinkSync(h);
                } catch (err) {
                    t(`Failed to clean up temp file: ${err}`);
                }
                t(`File ${i} written via in-place fallback`);
                return;
            } catch (err) {
                try {
                    closeSync(S);
                } catch  {}
                try {
                    s.unlinkSync(i);
                } catch  {}
                if (F) {
                    throw new x(`Write to ${i} failed (${v(err) ?? err}) after the target was truncated. The new content was preserved at ${h}.`, "writeFileSyncAndFlush: in-place fallback write failed; content preserved at temp path");
                }
                M(err, error);
            }
        }
        try {
            s.unlinkSync(h);
        } catch (err) {
            t(`Failed to clean up temp file: ${err}`);
        }
        throw error;
    }
}
async function nA(e, n, r = {
    encoding: "utf-8"
}) {
    let s = ie();
    let u = r.allowSymlink ? 0 : constants.O_NOFOLLOW;
    let i = e;
    let o;
    let f = false;
    if (r.allowSymlink) {
        try {
            let d = await readlink(e);
            i = isAbsolute(d) ? d : resolve(await realpath(dirname(e)), d);
            t(`Writing through symlink: ${e} -> ${i}`);
        } catch  {}
    } else {
        if (r.checkParentDir) {
            try {
                await (await open(dirname(e), constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW)).close();
            } catch (error) {
                let b = v(error);
                if (b === "ELOOP" || b === "ENOTDIR") {
                    throw new _g(`Refusing to write into symlinked directory: ${dirname(e)}`);
                }
            }
        }
        try {
            let d = await lstat(e);
            if (d.isSymbolicLink()) {
                throw new _g(`Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`);
            }
            o = d.mode;
            f = true;
        } catch (error) {
            if (!z(error)) {
                throw error;
            }
        }
    }
    let y = `.tmp.${process.pid}.${randomBytes(6).toString("hex")}`;
    let h = tRr(r.stagingDir, i, y, r.allowSymlink ?? false);
    let F = false;
    if (r.allowSymlink && !f) {
        try {
            o = (await s.stat(i)).mode;
            f = true;
        } catch (error) {
            if (!z(error)) {
                throw error;
            }
        }
    }
    if (f && o !== undefined) {
        t(`Preserving file permissions: ${o.toString(8)}`);
    } else if (r.mode !== undefined) {
        o = r.mode;
        t(`Setting permissions for new file: ${o.toString(8)}`);
    }
    try {
        t(`Writing to temp file: ${h}`);
        let d = await open(h, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | u, f ? ae(o) : r.mode);
        let b = false;
        let N;
        try {
            if (dirname(h) !== dirname(i)) {
                oDt(r.stagingDir);
            }
            await d.writeFile(n, {
                encoding: r.encoding
            });
            if (f && o !== undefined) {
                try {
                    await d.chmod(o);
                    t("Applied original permissions to temp file");
                } catch (error) {
                    if (!QUe(error)) {
                        throw error;
                    }
                    t(`fchmod unsupported on this filesystem: ${error}`);
                }
            }
            try {
                await d.sync();
            } catch (error) {
                if (!QUe(error)) {
                    throw error;
                }
                t(`fsync unsupported on this filesystem: ${error}`);
            }
            F = true;
        } catch (error) {
            b = true;
            N = error;
        }
        try {
            await d.close();
        } catch (error) {
            if (!b) {
                throw error;
            }
            t(`close also failed after temp write error: ${error}`, {
                level: "error"
            });
        }
        if (b) {
            throw N;
        }
        t(`Temp file written successfully, size: ${n.length} bytes`);
        if (dirname(h) !== dirname(i)) {
            oDt(r.stagingDir);
        }
        t(`Renaming ${h} to ${i}`);
        await ss(h, i, (g, k)=>s.rename(g, k));
        t(`File ${i} written atomically`);
    } catch (error) {
        t(`Failed to write file atomically: ${error}`, {
            level: "error"
        });
        let b = v(error);
        if (F && b !== undefined && yC.has(b) || !F && f && b === "EACCES") {
            let { flags, flagsIfMissing } = re(u);
            let C = !f && r.mode !== undefined ? r.mode : undefined;
            let S;
            try {
                try {
                    S = await open(i, flags, C);
                } catch (err) {
                    if (flagsIfMissing === undefined || !z(err)) {
                        throw err;
                    }
                    await XF(i);
                    S = await open(i, flagsIfMissing, C);
                }
            } catch (err) {
                try {
                    await s.unlink(h);
                } catch (error_1) {
                    t(`Failed to clean up temp file: ${error_1}`);
                }
                if (v(err) === "ELOOP") {
                    throw new _g(`Refusing to write through symlink: ${i} (O_NOFOLLOW)`);
                }
                throw error;
            }
            try {
                let p = await S.stat();
                if (p.nlink > 1 && (r.refuseHardLinkedInPlace ?? CGn())) {
                    throw new _Gn(i, p.nlink);
                }
                if (p.isFile()) {
                    await S.truncate(0);
                }
            } catch (err) {
                await S.close().catch(()=>{});
                try {
                    await s.unlink(h);
                } catch (error_1) {
                    t(`Failed to clean up temp file: ${error_1}`);
                }
                M(err, error);
            }
            try {
                await S.writeFile(n, {
                    encoding: r.encoding
                });
                try {
                    await S.sync();
                } catch (err) {
                    if (!QUe(err)) {
                        throw err;
                    }
                    t(`fsync unsupported on this filesystem: ${err}`);
                }
                await S.close();
                try {
                    await s.unlink(h);
                } catch (err) {
                    t(`Failed to clean up temp file: ${err}`);
                }
                t(`File ${i} written via in-place fallback`);
                return;
            } catch (err) {
                try {
                    await S.close();
                } catch  {}
                try {
                    await s.unlink(i);
                } catch  {}
                if (F) {
                    throw new x(`Write to ${i} failed (${v(err) ?? err}) after the target was truncated. The new content was preserved at ${h}.`, "writeFileAndFlush: in-place fallback write failed; content preserved at temp path");
                }
                M(err, error);
            }
        }
        try {
            await s.unlink(h);
        } catch (err) {
            t(`Failed to clean up temp file: ${err}`);
        }
        throw error;
    }
}
const Oe = new Set([
    "Public",
    "Default",
    "Default User",
    "All Users"
]);
async function DIs() {
    let e = O();
    let n = homedir();
    let r = ie();
    if (e === "macos") {
        return join(n, "Desktop");
    }
    if (e === "windows") {
        let u = a.USERPROFILE ? a.USERPROFILE.replaceAll("\\", "/") : null;
        if (u) {
            let o = `/mnt/c${u.replace(/^[A-Z]:/, "")}/Desktop`;
            if (await Md(o)) {
                return o;
            }
        }
        try {
            let o = await r.readdir("/mnt/c/Users");
            for (let f of o){
                if (Oe.has(f.name)) {
                    continue;
                }
                let y = join("/mnt/c/Users", f.name, "Desktop");
                if (await Md(y)) {
                    return y;
                }
            }
        } catch (error) {
            t(`Failed to enumerate /mnt/c/Users for Windows desktop path: ${error}`, {
                level: "error"
            });
        }
    }
    let s = join(n, "Desktop");
    if (await Md(s)) {
        return s;
    }
    return n;
}
async function SGn(e, n = Y5e) {
    try {
        return (await ie().stat(e)).size <= n;
    } catch  {
        return false;
    }
}
function ep(e) {
    let n = O() === "windows";
    let r = normalize(e);
    let s = n ? /[\\/]+$/ : /\/+$/;
    let u = r.length > parse(r).root.length ? r.replace(s, "") : r;
    if (n) {
        return u.replaceAll("/", "\\").toLowerCase();
    }
    return u;
}
function v0(e, n) {
    return ep(e) === ep(n);
}
export { IIs, oDt, tRr, _g, _Gn, s9, Gut, nRr, Vut, i9, K5e, Md, j1, Y5e, X5e, OIs, rRr, MIs, Wv, EAo, Xrn, Jrn, kse, J5e, oPe, HIs, xN, oRr, os, sPe, W1, Tse, Q5e, sRr, bGn, kAo, nA, DIs, SGn, ep, v0 };
