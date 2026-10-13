import "/$bunfs/root/chunk-wkmq9ht0.js";
import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import { Xv } from "/$bunfs/root/chunk-xgw72tt1.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-etbngzss.js";
import { E0 } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { Dzt } from "/$bunfs/root/chunk-me4tj4a2.js";
import { ub, M7n, ISn, NEe, aD, cI, H7n, D7n, EMe, Mzt, L7n } from "/$bunfs/root/chunk-qnp4k2tq.js";
import { $so, Y5t } from "/$bunfs/root/chunk-6z3pawfc.js";
import "/$bunfs/root/chunk-79wfew46.js";
import { constants } from "fs";
const W = ub.FILE_LIST_DIRECTORY | ub.FILE_TRAVERSE | ub.FILE_READ_ATTRIBUTES | ub.SYNCHRONIZE;
const re = ub.FILE_TRAVERSE | ub.FILE_READ_ATTRIBUTES | ub.SYNCHRONIZE;
const F = aD.FILE_DIRECTORY_FILE | aD.FILE_OPEN_REPARSE_POINT | aD.FILE_SYNCHRONOUS_IO_NONALERT;
const b = aD.FILE_OPEN_REPARSE_POINT | aD.FILE_SYNCHRONOUS_IO_NONALERT;
const ie = 4096;
const se = 4194304;
const oe = new Set([
    2147483693,
    3221226763
]);
function z(attributes) {
    return (attributes & se) !== 0 || (attributes & ie) !== 0 && (attributes & cI.REPARSE_POINT) !== 0;
}
const ae = /[. ]+$/;
const g = ub.FILE_READ_ATTRIBUTES | ub.SYNCHRONIZE;
const P = 1048576;
const Z = 262144;
const ce = constants.O_WRONLY | constants.O_RDWR | constants.O_APPEND | constants.O_TRUNC;
const le = (constants.O_NOFOLLOW ?? 0) | (constants.O_NONBLOCK ?? 0);
const J = 116444736000000000n;
function Ee(i) {
    switch(i){
        case "EBADF":
            return Error("the file is closed");
        case "EEXIST":
            return Error("the name is taken");
        case "WORKING_NAME_NOT_PLAIN":
            return Error("not a plain file name here");
        case "WORKING_FILE_HELD":
            return Error("another program holds the file");
        case "ELOOP":
            return Error("a link stands at the name");
        case "EISDIR":
            return Error("a directory stands at the name");
        case "ENOTDIR":
            return Error("a link stands where a directory should be");
        case "WORKING_ROOT_NOT_CANONICAL":
            return Error("tree anchor root is not a canonical path");
        case "WORKING_FILE_NOT_SERVED":
            return Error("this file is stored through a Windows storage feature (cloud sync, deduplication) and could not be reopened to read its real contents; it is skipped this round");
        case "WORKING_FILE_OFFLINE":
            return Error("this file is online-only (its data is not on this machine); it is not downloaded, so it is skipped this round");
    }
}
function I(i) {
    let e = Ee(i);
    e.code = i;
    return e;
}
function h(i, e = false) {
    if (i === "" || i === "." || i === ".." || /[\\/:*?"<>|\x00-\x1f]/.test(i) || ae.test(i) || Xv(i) || $so(i) || !e && Y5t(i)) {
        throw I("WORKING_NAME_NOT_PLAIN");
    }
    return i;
}
function w(i) {
    return (i - J) * 100n;
}
function X(i) {
    return BigInt(Math.round(i * 1000000)) * 10n + J;
}
function de(dev, e, c, allocationSize) {
    let _ = (e.attributes & cI.REPARSE_POINT) !== 0 && D7n(e.reparseTag);
    let u = !_ && (e.attributes & cI.DIRECTORY) !== 0;
    let O = _ ? 0o120000n : u ? 0o040000n : 0o100000n;
    let A = (e.attributes & cI.READONLY) !== 0 ? 0o444n : 0o666n;
    let m = (L)=>L / 1000000n;
    let f = (L)=>new Date(Number(L / 1000000n));
    return {
        dev,
        ino: e.ino,
        mode: O | A,
        nlink: e.nlink,
        uid: 0n,
        gid: 0n,
        rdev: 0n,
        size: u ? 0n : e.size,
        blksize: 4096n,
        blocks: allocationSize / 512n,
        atimeMs: m(c.atimeNs),
        mtimeMs: m(e.mtimeNs),
        ctimeMs: m(e.ctimeNs),
        birthtimeMs: m(c.birthtimeNs),
        atimeNs: c.atimeNs,
        mtimeNs: e.mtimeNs,
        ctimeNs: e.ctimeNs,
        birthtimeNs: c.birthtimeNs,
        atime: f(c.atimeNs),
        mtime: f(e.mtimeNs),
        ctime: f(e.ctimeNs),
        birthtime: f(c.birthtimeNs),
        isFile: ()=>!_ && !u,
        isDirectory: ()=>u,
        isSymbolicLink: ()=>_,
        isBlockDevice: ()=>false,
        isCharacterDevice: ()=>false,
        isFIFO: ()=>false,
        isSocket: ()=>false
    };
}
function Ne(i) {
    let e = (c)=>Number(c);
    return {
        dev: e(i.dev),
        ino: e(i.ino),
        mode: e(i.mode),
        nlink: e(i.nlink),
        uid: 0,
        gid: 0,
        rdev: 0,
        size: e(i.size),
        blksize: e(i.blksize),
        blocks: e(i.blocks),
        atimeMs: e(i.atimeNs) / 1000000,
        mtimeMs: e(i.mtimeNs) / 1000000,
        ctimeMs: e(i.ctimeNs) / 1000000,
        birthtimeMs: e(i.birthtimeNs) / 1000000,
        atime: i.atime,
        mtime: i.mtime,
        ctime: i.ctime,
        birthtime: i.birthtime,
        isFile: ()=>i.isFile(),
        isDirectory: ()=>i.isDirectory(),
        isSymbolicLink: ()=>i.isSymbolicLink(),
        isBlockDevice: ()=>false,
        isCharacterDevice: ()=>false,
        isFIFO: ()=>false,
        isSocket: ()=>false
    };
}
function S(i, e) {
    let c = i.queryInformation(e);
    let reparseTag = (c.attributes & cI.REPARSE_POINT) !== 0 ? i.queryAttributeTag(e).reparseTag : 0;
    let _ = i.queryId(e);
    let u = i.queryVolume(e);
    let O = {
        dev32: BigInt(u.serialNumber),
        dev64: _?.volumeSerialNumber ?? null,
        ino: c.indexNumber,
        size: c.size,
        nlink: BigInt(c.numberOfLinks),
        mtimeNs: w(c.lastWriteTime),
        ctimeNs: w(c.changeTime),
        attributes: c.attributes,
        reparseTag
    };
    let A = {
        atimeNs: w(c.lastAccessTime),
        birthtimeNs: w(c.creationTime)
    };
    return {
        ...O,
        stats: (m)=>de(m === "serial64" && O.dev64 !== null ? O.dev64 : O.dev32, O, A, c.allocationSize)
    };
}
function y(i) {
    return (i.attributes & cI.REPARSE_POINT) !== 0 && D7n(i.reparseTag);
}
function H(i, e) {
    let attributes = i.queryAttributes(e);
    if ((attributes & cI.REPARSE_POINT) !== 0) {
        return i.queryAttributeTag(e);
    }
    return {
        attributes,
        reparseTag: 0
    };
}
function ue(i, e) {
    let c = (_)=>_ !== null && e.ino !== 0n && e.dev === _ && e.ino === i.ino;
    let T = c(i.dev32) ? "serial32" : c(i.dev64) ? "serial64" : null;
    t(`anchor (win32): identity bridge ${T ?? "none"} \u2014 bun dev=${e.dev} ino=${e.ino}; nt serial32=${i.dev32} serial64=${i.dev64 ?? "n/a"} index=${i.ino}`);
    return T;
}
function j(i) {
    return /^\\\\\?\\UNC\\/i.test(i) || i.startsWith("\\\\") && !i.startsWith("\\\\?\\") && !i.startsWith("\\\\.\\");
}
export async function openWin32Backend(i, e, c) {
    let { fs } = i;
    let { realRoot } = c;
    if (j(realRoot)) {
        t("anchor (win32): the root is on a network share: no anchored backend here");
        return {
            unanchored: "remote_volume"
        };
    }
    let held = 0;
    let O;
    try {
        held = e.open(0, Mzt(realRoot), {
            access: W,
            disposition: NEe.FILE_OPEN,
            options: F
        });
        if ((e.queryDevice(held).characteristics & H7n) !== 0) {
            e.close(held);
            t("anchor (win32): the root is on a remote volume: no anchored backend here");
            return {
                unanchored: "remote_volume"
            };
        }
        let r = S(e, held);
        if (y(r)) {
            throw I("ELOOP");
        }
        if (await Dzt(i, c) !== realRoot) {
            throw I("WORKING_ROOT_NOT_CANONICAL");
        }
        let n = ue(r, await fs.lstat(realRoot, {
            bigint: true
        }));
        if (n === null) {
            e.close(held);
            return {
                unanchored: "unstable_identity"
            };
        }
        O = n;
    } catch (error) {
        if (held !== 0) {
            e.close(held);
        }
        let n = v(error);
        if (n === "ENOENT" || n === "ENOTDIR" || n === "ELOOP" || n === "EPERM" || n === "WORKING_ROOT_NOT_CANONICAL" || n === "EBUSY" || n === "EMFILE" || n === "ENFILE" || n === "ENOMEM" || n === "EAGAIN" || n === "ETIMEDOUT" || n === "EIO") {
            throw error;
        }
        t(`anchor (win32): bring-up failed (${n ?? "no code"}, status 0x${(EMe(error) ?? 0).toString(16)}): no anchored backend here`, {
            level: "warn"
        });
        return {
            unanchored: "bring_up_failed"
        };
    }
    let A = (r, n, s, o, a = false)=>e.open(r, h(n, a), {
            access: s,
            disposition: NEe.FILE_OPEN,
            options: o
        });
    let m = async (r, n, s, o, a)=>{
        let E = A(r, n, s, o);
        try {
            return await a(E);
        } finally{
            e.close(E);
        }
    };
    let lstat = (r, n)=>m(r, n, g, b, (s)=>S(e, s).stats(O));
    let L = async (r, n, s)=>{
        if ((s & ~le & ce) !== 0) {
            throw Error("anchored open never writes on this backend");
        }
        let o = U(r, n, b, false);
        try {
            let a = H(e, o);
            if (y(a)) {
                throw I("ELOOP");
            }
            if ((a.attributes & cI.DIRECTORY) !== 0) {
                throw I("EISDIR");
            }
            if (z(a.attributes)) {
                throw I("WORKING_FILE_OFFLINE");
            }
            if ((a.attributes & cI.REPARSE_POINT) === 0) {
                return G(o);
            }
        } catch (error) {
            e.close(o);
            throw error;
        }
        return G(Q(r, n, o));
    };
    let U = (r, n, s, dontReparse)=>{
        let a = (E)=>e.open(r, h(n), {
                access: E,
                disposition: NEe.FILE_OPEN,
                options: s,
                dontReparse
            });
        try {
            return a(M7n | ub.FILE_WRITE_ATTRIBUTES);
        } catch (error) {
            let N = v(error);
            if (N !== "EPERM" && N !== "EROFS") {
                throw error;
            }
            return a(M7n);
        }
    };
    let Q = (r, n, s)=>{
        try {
            let o;
            try {
                o = U(r, n, aD.FILE_SYNCHRONOUS_IO_NONALERT, true);
            } catch (error) {
                if (oe.has(EMe(error) ?? 0)) {
                    t(`anchor (win32): a filter-served file's second open met a link refusal (status 0x${(EMe(error) ?? 0).toString(16)}); reported as a link`);
                    throw error;
                }
                t(`anchor (win32): a filter-served file could not be reopened for its bytes (${v(error) ?? "no code"}, status 0x${(EMe(error) ?? 0).toString(16)}); unreadable this round`);
                throw I("WORKING_FILE_NOT_SERVED");
            }
            try {
                let a = e.queryInformation(o);
                if (z(a.attributes)) {
                    throw I("WORKING_FILE_OFFLINE");
                }
                if (a.indexNumber !== e.queryInformation(s).indexNumber || e.queryVolume(o).serialNumber !== e.queryVolume(s).serialNumber) {
                    t("anchor (win32): a filter-served file reopened as another file; unreadable this round");
                    throw I("WORKING_FILE_NOT_SERVED");
                }
                return o;
            } catch (error) {
                e.close(o);
                throw error;
            }
        } finally{
            e.close(s);
        }
    };
    let G = (r)=>{
        let n = false;
        let s = ()=>{
            if (n) {
                throw I("EBADF");
            }
            return r;
        };
        let o = ()=>S(e, s()).stats(O);
        async function stat(l) {
            if (l?.bigint === true) {
                return o();
            }
            return Ne(o());
        }
        let E = (l, d)=>e.read(s(), l, BigInt(d));
        async function* N() {
            for(let l = 0;;){
                let d = Buffer.allocUnsafe(Z);
                let R = E(d, l);
                if (R === 0) {
                    return;
                }
                l += R;
                yield d.subarray(0, R);
                await new Promise((resolve)=>setImmediate(resolve));
            }
        }
        return {
            stat,
            read: async (l, d, R, B)=>{
                let bytesRead = E(l.subarray(d, d + Math.min(R, Z)), B);
                await new Promise((resolve)=>setImmediate(resolve));
                return {
                    bytesRead
                };
            },
            readFile: async ()=>{
                let l = [];
                for await (let d of N()){
                    l.push(d);
                }
                return Buffer.concat(l);
            },
            createReadStream: ()=>N(),
            chmod: async (l)=>{
                let d = e.queryAttributes(s());
                let R = (l & 128) === 0 ? d | cI.READONLY : d & ~cI.READONLY;
                if (R !== d) {
                    e.setAttributes(s(), R === 0 ? cI.NORMAL : R);
                }
            },
            close: async ()=>{
                if (!n) {
                    n = true;
                    e.close(r);
                }
            }
        };
    };
    let Y = async (r)=>{
        try {
            await r();
        } catch (cause) {
            throw v(cause) === "EBUSY" ? Object.assign(I("WORKING_FILE_HELD"), {
                cause
            }) : cause;
        }
    };
    let C = (r)=>Y(async ()=>{
            await E0(r);
        });
    let D = (r, n, s, o, a)=>(a ? Y : C)(()=>m(r, n, ub.DELETE | g, b, (E)=>e.renameByHandle(E, s, h(o), a)));
    let link = (r, n, s, o)=>C(()=>m(r, n, ub.FILE_WRITE_ATTRIBUTES | ub.SYNCHRONIZE, b, (a)=>e.linkByHandle(a, s, h(o))));
    let x = ub.DELETE | ub.FILE_WRITE_ATTRIBUTES | g;
    let unlink = (r, n)=>C(()=>m(r, n, x, b, (s)=>{
                let o = H(e, s);
                if ((o.attributes & cI.DIRECTORY) !== 0 && !y(o)) {
                    throw I("EISDIR");
                }
                e.deleteByHandle(s);
            }));
    let q = (r, n, s, o = false)=>{
        let a = A(r, n, s, F, o);
        try {
            if (y(H(e, a))) {
                throw I("ENOTDIR");
            }
            return a;
        } catch (error) {
            e.close(a);
            throw error;
        }
    };
    let ops = {
        openDir: async (r, n, s)=>q(r, n, W, s),
        openDirToPass: async (r, n, s)=>q(r, n, re, s),
        mkdir: async (r, n)=>{
            e.close(e.open(r, h(n), {
                access: g,
                disposition: NEe.FILE_CREATE,
                options: F,
                attributes: cI.NORMAL
            }));
        },
        closeDir: async (r)=>e.close(r),
        create: async (r, n, s, o, a, E)=>{
            let N = e.open(r, h(n), {
                access: ISn | ub.FILE_READ_ATTRIBUTES | ub.DELETE,
                disposition: NEe.FILE_CREATE,
                options: aD.FILE_NON_DIRECTORY_FILE | aD.FILE_OPEN_REPARSE_POINT | aD.FILE_SYNCHRONOUS_IO_NONALERT | (E ? aD.FILE_WRITE_THROUGH : 0),
                attributes: (a & 128) === 0 ? cI.READONLY : cI.NORMAL
            });
            try {
                for(let l = 0; l < o.length; l += P){
                    e.write(N, o.subarray(l, l + P), BigInt(l));
                    if (l + P < o.length) {
                        await new Promise((resolve)=>setImmediate(resolve));
                    }
                }
            } catch (error) {
                try {
                    e.deleteByHandle(N);
                } catch  {}
                e.close(N);
                throw error;
            }
            e.close(N);
        },
        createAndOpen: async (r, n, s, o)=>{
            let a = e.open(r, h(n), {
                access: ISn | ub.FILE_READ_ATTRIBUTES,
                disposition: NEe.FILE_CREATE,
                options: aD.FILE_NON_DIRECTORY_FILE | aD.FILE_OPEN_REPARSE_POINT | aD.FILE_SYNCHRONOUS_IO_NONALERT | aD.FILE_WRITE_THROUGH,
                attributes: (o & 128) === 0 ? cI.READONLY : cI.NORMAL
            });
            let E = false;
            let N = ()=>{
                if (E) {
                    throw I("EBADF");
                }
                return a;
            };
            return {
                stat: async ()=>S(e, N()).stats(O),
                writeFile: async (l)=>{
                    for(let d = 0; d < l.length; d += P){
                        e.write(N(), l.subarray(d, d + P), BigInt(d));
                        await new Promise((resolve)=>setImmediate(resolve));
                    }
                },
                utimes: async (l, d)=>e.setTimes(N(), X(l), X(d)),
                sync: async ()=>{},
                close: async ()=>{
                    if (!E) {
                        E = true;
                        e.close(a);
                    }
                }
            };
        },
        link,
        rename: (r, n, s, o)=>D(r, n, s, o, true),
        renameNoReplace: (r, n, s, o)=>D(r, n, s, o, false),
        symlink: async (r, n, s)=>{
            L7n(r);
            let o;
            try {
                o = e.open(n, h(s), {
                    access: ISn | ub.FILE_READ_ATTRIBUTES | ub.DELETE,
                    disposition: NEe.FILE_CREATE,
                    options: aD.FILE_NON_DIRECTORY_FILE | aD.FILE_OPEN_REPARSE_POINT | aD.FILE_SYNCHRONOUS_IO_NONALERT,
                    attributes: cI.NORMAL
                });
            } catch (error) {
                throw v(error) === "EISDIR" ? I("EEXIST") : error;
            }
            try {
                e.setSymlink(o, r);
            } catch (error) {
                try {
                    e.deleteByHandle(o);
                } catch  {}
                e.close(o);
                throw error;
            }
            e.close(o);
        },
        readlink: (r, n)=>m(r, n, g, b, (s)=>e.readSymlink(s)),
        unlink,
        rmdir: (r, n)=>m(r, n, x, F, (s)=>{
                if (y(H(e, s))) {
                    throw I("ENOTDIR");
                }
                e.deleteByHandle(s);
            }),
        list: async (r, n)=>e.listDirectory(r, n),
        lstat,
        open: (r, n, s, o)=>L(r, n, o),
        hold: async (r)=>{
            let n = await fs.realpath(r).catch(()=>null);
            let s = n !== null && /^[a-zA-Z]:$/.test(n) ? `${n}\\` : n;
            if (s === null || j(s)) {
                return null;
            }
            let o;
            try {
                o = e.open(0, Mzt(s), {
                    access: W,
                    disposition: NEe.FILE_OPEN,
                    options: F
                });
            } catch  {
                return null;
            }
            try {
                if ((e.queryDevice(o).characteristics & H7n) !== 0) {
                    e.close(o);
                    return null;
                }
                let [a, E] = await Promise.all([
                    S(e, o),
                    fs.lstat(s, {
                        bigint: true
                    })
                ]);
                let N = a.stats(O);
                if (y(a) || !N.isDirectory() || !E.isDirectory() || N.ino === 0n || N.dev !== E.dev || N.ino !== E.ino) {
                    e.close(o);
                    return null;
                }
            } catch  {
                e.close(o);
                return null;
            }
            return ops.holdOpenedDir(o, s);
        },
        getHeldDir: (r)=>r.dir,
        holdOpenedDir: (dir, realPath)=>{
            let s = false;
            return {
                realPath,
                dir,
                stat: async ()=>S(e, dir).stats(O),
                close: async ()=>{
                    if (!s) {
                        s = true;
                        e.close(dir);
                    }
                }
            };
        },
        renameOut: (r, n, s, o)=>D(r, n, s.dir, o, true),
        renameIn: (r, n, s, o)=>D(r.dir, n, s, o, true),
        linkIn: (r, n, s, o)=>link(r.dir, n, s, o),
        renameInNoReplace: (r, n, s, o)=>D(r.dir, n, s, o, false),
        statIn: (r, n)=>lstat(r.dir, n),
        openIn: (r, n, s)=>L(r.dir, n, s),
        unlinkIn: (r, n)=>unlink(r.dir, n)
    };
    let k = false;
    let root = {
        stat: async ()=>{
            if (k) {
                throw I("EBADF");
            }
            return S(e, held).stats(O);
        },
        close: async ()=>{
            if (!k) {
                k = true;
                e.close(held);
            }
        }
    };
    t("anchor (win32): held-handle backend up");
    return {
        root,
        held,
        ops
    };
}
