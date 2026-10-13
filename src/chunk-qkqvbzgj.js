import { l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Hzt, Dzt } from "/$bunfs/root/chunk-me4tj4a2.js";
import { rl } from "/$bunfs/root/chunk-w6rkdzfe.js";
import { c0 } from "/$bunfs/root/chunk-v214ecah.js";
import { ai } from "/$bunfs/root/chunk-zwxj12s4.js";
import { Le } from "/$bunfs/root/chunk-cj4xndke.js";
import { close, constants, fchmod, fchown, fstat, fsync, open, writeFile } from "fs";
import { lstat, mkdtemp, rm, symlink } from "fs/promises";
import { tmpdir } from "os";
import { getSystemErrorName, promisify } from "util";
class QVr extends Error {
    code;
    constructor(cause){
        super("the new file could not be given its owner", {
            cause
        });
        this.code = v(cause);
    }
}
const $Ds = [
    "unsupported_platform",
    "no_procfs",
    "no_ffi",
    "nofollow_any_unenforced",
    "remote_volume",
    "unstable_identity",
    "bring_up_failed"
];
function Bjs(e) {
    return $Ds.includes(e);
}
function dr(e) {
    switch(e){
        case "WORKING_PARENT_NOT_DIRECTORY":
            return Error("a destination ancestor is a symlink or not a directory");
        case "WORKING_NAME_NOT_PLAIN":
            return Error("not a plain file name here");
        case "WORKING_FILE_HELD":
            return Error("another program holds the file");
        case "WORKING_LIST_UNSUPPORTED":
            return Error("this backend cannot list a held directory, or cannot stop at the bound that was set");
        case "WORKING_LIST_TOO_LONG":
            return Error("the directory holds more names than may be listed");
        case "WORKING_DIRECTORY_MOVED":
            return Error("the operation succeeded, but a directory that it used may have been moved meanwhile: what it made or moved may lie outside the tree, or have come from outside it");
        case "WORKING_DIRECTORY_MOVED_UNDONE":
            return Error("a directory may have been moved, so the operation made nothing, or what it made was removed again");
        case "WORKING_LINK_UNSUPPORTED":
            return Error("this backend cannot make or read a symbolic link in a held directory");
    }
}
function ur() {
    let e = Error("tree anchor root is not a canonical path");
    e.code = "WORKING_ROOT_NOT_CANONICAL";
    return e;
}
function X(e) {
    let n = dr(e);
    n.code = e;
    return n;
}
const Ve = Symbol("createsInHeldDirectoryCheckedByPath");
const Oe = 536870912;
const fr = 2097152;
const mr = 128;
const yr = 4096;
const K = constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW | ai;
const ae = constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | ai;
const hr = 511;
const gr = 10000000;
const Dr = 512;
const wr = 3;
const br = 16;
const xe = Error("removeTree stopped after a failure");
function ce(e, sep) {
    let s = e.split("/");
    if (e.includes("\x00") || s.some((y)=>y === "" || y === "." || y === ".." || sep !== "/" && y.includes(sep))) {
        throw Error("anchored path must be relative, of plain segments");
    }
    return s;
}
function me(e, sep) {
    let s = ce(e, sep);
    return {
        dirs: s.slice(0, -1),
        leaf: s.at(-1) ?? ""
    };
}
function Me(e) {
    if ((e & constants.O_CREAT) !== 0) {
        throw Error("anchored open never creates");
    }
    return e;
}
function J(e) {
    let n = v(e);
    if (n === "ENOTDIR" || n === "ELOOP") {
        return X("WORKING_PARENT_NOT_DIRECTORY");
    }
    return e;
}
const ie = {
    found: "same"
};
function Ee(e, n) {
    return e.ino !== 0n && e.dev === n.dev && e.ino === n.ino;
}
async function pr(e, n, s, y, h) {
    let r = null;
    try {
        for (let [D, b] of y.entries()){
            let i = r ?? e.getHeldDir(s);
            let d = await (D < y.length - 1 && e.openDirToPass !== undefined ? e.openDirToPass(i, b, h) : e.openDir(i, b, h));
            if (r !== null) {
                await e.closeDir(r);
            }
            r = d;
        }
    } catch  {
        if (r !== null) {
            await e.closeDir(r);
        }
        return null;
    } finally{
        await s.close();
    }
    if (r === null) {
        return null;
    }
    return e.holdOpenedDir(r, n.path.join(s.realPath, ...y));
}
function N7n(backend, n, s, y, realRoot, r, D = [], b) {
    let { sep } = n.path;
    let A = null;
    let w = ()=>A ??= s.close();
    let E = new WeakMap;
    let holdOutside = async (o, a, u = false)=>{
        let g = a === "" ? [] : ce(a, sep);
        let _ = await r.hold(o);
        let R = _ === null || g.length === 0 ? _ : await pr(r, n, _, g, u);
        if (R === null) {
            return null;
        }
        let T = null;
        let W = ()=>T ??= R.close();
        let x = {
            realPath: R.realPath,
            get closed () {
                return T !== null;
            },
            stat: async ()=>{
                if (T !== null) {
                    throw Error("held directory is closed");
                }
                return R.stat();
            },
            close: W,
            [Symbol.asyncDispose]: W
        };
        E.set(x, R);
        return x;
    };
    let B = (o)=>{
        let a = E.get(o);
        if (a === undefined) {
            throw Error("held directory belongs to another anchor");
        }
        if (o.closed) {
            throw Error("held directory is closed");
        }
        return a;
    };
    let k = (o)=>{
        if (o === y) {
            return Promise.resolve();
        }
        return r.closeDir(o);
    };
    let m = async (o, a, u, g)=>{
        try {
            return await r.openDir(o, a);
        } catch (error) {
            if (u === null || !z(error)) {
                throw J(error);
            }
            if (await r.mkdir(o, a, u).then(()=>true, (T)=>{
                if (v(T) !== "EEXIST") {
                    throw T;
                }
                return false;
            })) {
                await V("mkdir", {
                    to: {
                        dir: o,
                        dirs: g
                    }
                }, ()=>r.rmdir(o, a));
            }
            return r.openDir(o, a).catch((T)=>{
                throw J(T);
            });
        }
    };
    let f = ()=>{
        if (A !== null) {
            throw Error("tree anchor is closed");
        }
    };
    let O = async (o, a)=>{
        if (r.list === undefined) {
            throw X("WORKING_LIST_UNSUPPORTED");
        }
        let u = await r.list(o, a);
        if (a !== undefined && !(u.length <= a)) {
            throw X("WORKING_LIST_TOO_LONG");
        }
        return _r(u, sep);
    };
    let N = async (o, a)=>{
        f();
        let u = y;
        try {
            for (let [g, _] of o.entries()){
                f();
                let R = await m(u, _, a, o.slice(0, g));
                await k(u);
                u = R;
            }
            return u;
        } catch (error) {
            await k(u);
            throw error;
        }
    };
    let I = async (o, a)=>{
        let { dirs, leaf } = me(o, sep);
        let _ = await N(dirs, null);
        try {
            f();
            return await a(_, leaf, dirs);
        } finally{
            await k(_);
        }
    };
    let L = async (o, a, u)=>{
        let g = me(a, sep);
        if (me(o, sep).dirs.join("/") === g.dirs.join("/")) {
            return I(o, (_, R, T)=>u({
                    dir: _,
                    leaf: R,
                    dirs: T
                }, {
                    dir: _,
                    leaf: g.leaf,
                    dirs: T
                }));
        }
        return I(o, (_, R, T)=>I(a, (W, x, Z)=>u({
                    dir: _,
                    leaf: R,
                    dirs: T
                }, {
                    dir: W,
                    leaf: x,
                    dirs: Z
                })));
    };
    let Q = (checkError)=>{
        if (z(checkError)) {
            return {
                found: "missing"
            };
        }
        if (v(checkError) === "WORKING_PARENT_NOT_DIRECTORY") {
            return {
                found: "replaced"
            };
        }
        return {
            found: "check_failed",
            checkError
        };
    };
    let de = async (dirs, a)=>{
        let u = await N(dirs, null).then((now)=>({
                now
            }), Q);
        if (!("now" in u)) {
            return u;
        }
        try {
            return await a(u.now);
        } catch (error) {
            return Q(error);
        } finally{
            await k(u.now).catch(()=>{});
        }
    };
    let ge = (o)=>r.holdOpenedDir(o, "").stat();
    let Pe = (o, a)=>{
        if (o.dev !== a.dev) {
            return {
                found: "replaced",
                differs: "device"
            };
        }
        if (o.ino !== a.ino) {
            return {
                found: "replaced",
                differs: "inode"
            };
        }
        return ie;
    };
    let Ie = async ({ dir, dirs })=>{
        if (dirs.length === 0) {
            return ie;
        }
        return de(dirs, async (u)=>Pe(await ge(dir), await ge(u)));
    };
    let ke = async ({ dir, dirs })=>ie;
    let Ze = async ({ to, from })=>null;
    let De = (operation, a, u)=>{
        try {
            undefined?.({
                operation,
                ...a,
                outcome: u ? "undone" : "not_undone"
            });
        } catch (error) {
            c(error);
        }
        return X(u ? "WORKING_DIRECTORY_MOVED_UNDONE" : "WORKING_DIRECTORY_MOVED");
    };
    let zr = async (o)=>{};
    let V = async (o, a, u)=>{
        let g = await Ze(a);
        if (g === null) {
            return;
        }
        throw De(o, g, u !== undefined && await u(g.side).then(()=>true, ()=>false));
    };
    let Ne = async ({ dir, leaf }, u)=>{
        if (!Ee(await r.lstat(dir, leaf), await u())) {
            throw Error("another file has the name");
        }
        await r.unlink(dir, leaf);
    };
    let ve = (o, a, u, g, _)=>I(o, async (R, T, W)=>{
            let x = null;
            let Z = false;
            let ue = async (ee)=>{};
            await r.create(R, T, [
                ...D,
                ...W
            ], a, u, g, _, ue).catch(async (ee)=>{
                throw x === null ? ee : De("create", x, Z && await r.lstat(R, T).then(()=>false, z));
            });
        });
    let Re = (o)=>async (a, u)=>{
            await r.link(a.dir, a.leaf, u.dir, u.leaf);
            await V("link", {
                to: u,
                from: a
            }, async (g)=>{
                let _ = Ne(u, ()=>r.lstat(a.dir, a.leaf));
                await _.catch(()=>{});
                if (o && g !== "destination") {
                    await r.unlink(a.dir, a.leaf);
                }
                await _;
            });
        };
    let linkIn = (o, a, u)=>I(u, async (g, _, R)=>{
            await r.linkIn(B(o), G(a), g, _);
            await V("link", {
                to: {
                    dir: g,
                    dirs: R
                }
            }, ()=>Ne({
                    dir: g,
                    leaf: _,
                    dirs: R
                }, ()=>r.statIn(B(o), G(a))));
        });
    let Be = (o)=>async (a, u)=>{
            await o(a.dir, a.leaf, u.dir, u.leaf);
            await V("rename", {
                to: u,
                from: a
            });
        };
    return {
        backend,
        realRoot,
        createsInHeldDirectory: r.createsInHeldDirectory !== false,
        heldCreateRefusal: r.heldCreateRefusal ?? null,
        mkdirp: async (o, a = hr)=>k(await N(ce(o, sep), a)),
        create: (o, a, u)=>ve(o, a, u, false),
        createSynced: (o, a, u, g)=>ve(o, a, u, true, g),
        createAndOpen: (o, a)=>I(o, (u, g, _)=>r.createAndOpen(u, g, [
                    ...D,
                    ..._
                ], a)),
        link: (o, a)=>L(o, a, Re(false)),
        rename: (o, a)=>L(o, a, Be(r.rename)),
        placeCreated: (o, a)=>L(o, a, r.renameNoReplace === undefined ? Re(true) : Be(r.renameNoReplace)),
        symlink: (o, a)=>I(a, (u, g)=>r.symlink(o, u, g)),
        readlink: (o)=>I(o, r.readlink),
        unlink: (o)=>I(o, r.unlink),
        rmdir: (o)=>I(o, r.rmdir),
        list: async (o, a)=>{
            let u = o === "" ? [] : ce(o, sep);
            let g = await N(u, null);
            try {
                f();
                return await O(g, a);
            } finally{
                await k(g);
            }
        },
        removeTree: (o, { keep, onDeleted } = {})=>I(o, async (g, _, R)=>{
                if (keep !== undefined) {
                    G(keep);
                }
                let T = keep === undefined ? null : Buffer.from(keep);
                let W = (S)=>T !== null && (typeof S === "string" ? S === keep : S.equals(T));
                let { bytes } = r;
                let Z = (S, F)=>{
                    if (typeof F === "string") {
                        return r.unlink(S, F);
                    }
                    return bytes.unlink(S, F);
                };
                let ue = (S, F)=>{
                    if (typeof F === "string") {
                        return r.rmdir(S, F);
                    }
                    return bytes.rmdir(S, F);
                };
                let ee = (S, F)=>{
                    if (typeof F === "string") {
                        return r.openDir(S, F);
                    }
                    return bytes.openDir(S, F);
                };
                let fe = async (S)=>{
                    if (bytes === undefined) {
                        return O(S);
                    }
                    return Or(await bytes.list(S), sep);
                };
                let re = async (S, F)=>{
                    try {
                        await Z(S, F);
                    } catch (error) {
                        let te = v(error);
                        if (te === "ENOENT") {
                            return "gone";
                        }
                        if (te === "EISDIR" || te === "EPERM") {
                            return "directory";
                        }
                        throw error;
                    }
                    onDeleted?.();
                    return "gone";
                };
                let se = gr;
                let ne = async (S, F, Y, te, Se = false)=>{
                    for(let Te = 0;; Te++){
                        f();
                        let be = (await fe(Y)).filter((C)=>!(Se && W(C)));
                        se -= be.length;
                        if (se < 0) {
                            throw Object.assign(Error("directory too large to remove: too many entries"), {
                                code: "E2BIG"
                            });
                        }
                        if (te.length >= Dr) {
                            throw Object.assign(Error("directory too deep to remove"), {
                                code: "ENAMETOOLONG"
                            });
                        }
                        let Ce = false;
                        let er = rl(br, async (C)=>{
                            if (Ce) {
                                throw xe;
                            }
                            f();
                            try {
                                return await re(Y, C);
                            } catch (error) {
                                Ce = true;
                                throw error;
                            }
                        });
                        let He = await Promise.allSettled(be.map((C)=>er(C)));
                        let pe = He.filter((C)=>C.status === "rejected");
                        if (pe.length > 0) {
                            throw (pe.find((C)=>C.reason !== xe) ?? pe[0]).reason;
                        }
                        let rr = be.filter((C, U)=>{
                            let Fe = He[U];
                            return Fe?.status === "fulfilled" && Fe.value === "directory";
                        });
                        for (let C of rr){
                            let U = await ee(Y, C).catch(()=>null);
                            if (U === null) {
                                if (await re(Y, C) === "directory") {
                                    await ue(Y, C);
                                    onDeleted?.();
                                }
                                continue;
                            }
                            try {
                                await ne(Y, C, U, [
                                    ...te,
                                    C
                                ]);
                            } finally{
                                await r.closeDir(U);
                            }
                        }
                        if (Se && T !== null) {
                            return;
                        }
                        try {
                            await ue(S, F);
                            onDeleted?.();
                            return;
                        } catch (error) {
                            let U = v(error);
                            if (U === "ENOENT") {
                                return;
                            }
                            if (U !== "ENOTEMPTY" || Te >= wr) {
                                throw error;
                            }
                        }
                    }
                };
                let we = await r.openDir(g, _).catch(async (S)=>{
                    if (z(S)) {
                        return null;
                    }
                    if (T !== null) {
                        throw J(S);
                    }
                    if (await re(g, _) === "gone") {
                        return null;
                    }
                    throw J(S);
                });
                if (we === null) {
                    return;
                }
                try {
                    await ne(g, _, we, [
                        ...R,
                        _
                    ], true);
                } finally{
                    await r.closeDir(we);
                }
            }),
        lstat: async (o)=>{
            if (o !== "") {
                return I(o, r.lstat);
            }
            f();
            return s.stat();
        },
        open: async (o, a)=>{
            let u = Me(a);
            if (r.openBeneath !== undefined) {
                let { dirs, leaf } = me(o, sep);
                f();
                return r.openBeneath([
                    ...D,
                    ...dirs
                ], leaf, u);
            }
            return I(o, (g, _, R)=>r.open(g, _, [
                    ...D,
                    ...R
                ], u));
        },
        anchorBeneath: async (o)=>{
            let a = ce(o, sep);
            let u = r.holdOpenedDir(await N(a, null), n.path.join(realRoot, ...a));
            return N7n(backend, n, u, r.getHeldDir(u), u.realPath, r.forAnchorBeneath ?? r, [
                ...D,
                ...a
            ], b);
        },
        holdOutside,
        moveOut: (o, a, u)=>I(o, async (g, _, R)=>{
                await r.renameOut(g, _, B(a), G(u));
                await V("rename", {
                    from: {
                        dir: g,
                        dirs: R
                    }
                });
            }),
        moveIn: (o, a, u)=>I(u, async (g, _, R)=>{
                await r.renameIn(B(o), G(a), g, _);
                await V("rename", {
                    to: {
                        dir: g,
                        dirs: R
                    }
                });
            }),
        linkIn,
        placeCreatedIn: (o, a, u)=>{
            if (r.renameInNoReplace === undefined) {
                return linkIn(o, a, u);
            }
            return I(u, async (g, _, R)=>{
                await r.renameInNoReplace(B(o), G(a), g, _);
                await V("rename", {
                    to: {
                        dir: g,
                        dirs: R
                    }
                });
            });
        },
        statIn: async (o, a)=>r.statIn(B(o), G(a)),
        openIn: async (o, a, u)=>r.openIn(B(o), G(a), Me(u)),
        unlinkIn: async (o, a)=>r.unlinkIn(B(o), G(a)),
        close: w,
        [Symbol.asyncDispose]: w
    };
}
function _r(e, sep) {
    return e.filter((s)=>ze(s, sep));
}
function Or(e, sep) {
    return e.filter((s)=>ze(s.toString("latin1"), sep));
}
function ze(e, sep) {
    return e !== "" && e !== "." && e !== ".." && !e.includes("/") && !e.includes(sep) && !e.includes("\x00");
}
function G(e) {
    if (e === "" || e === "." || e === ".." || e.includes("/") || e.includes("\\") || e.includes("\x00")) {
        throw Error("a held-directory leaf must be one plain name");
    }
    return e;
}
async function Je({ fs }, n) {
    let y = await fs.realpath(n).catch(()=>null);
    if (y === null) {
        return null;
    }
    let h = await fs.open(y, K).catch(()=>null);
    if (h === null) {
        return null;
    }
    try {
        let [r, D] = await Promise.all([
            h.stat({
                bigint: true
            }),
            fs.lstat(y, {
                bigint: true
            })
        ]);
        if (!r.isDirectory() || !D.isDirectory() || r.ino === 0n || r.dev !== D.dev || r.ino !== D.ino) {
            await h.close().catch(()=>{});
            return null;
        }
    } catch  {
        await h.close().catch(()=>{});
        return null;
    }
    return {
        realPath: y,
        dir: h,
        stat: ()=>h.stat({
                bigint: true
            }),
        close: ()=>h.close()
    };
}
function Xe(e) {
    return {
        stat: ()=>e.stat({
                bigint: true
            }),
        close: ()=>e.close()
    };
}
async function Er(e, n, s, y, h, r, D) {
    let b = (uid, gid)=>e.chown(uid, gid).catch((p)=>{
            throw new QVr(p);
        });
    try {
        await e.writeFile(n);
        if (r !== undefined && r.to.gid !== r.from.gid) {
            await b(r.from.uid, r.to.gid);
        }
        await e.chmod(s);
        if (r !== undefined && r.to.uid !== r.from.uid) {
            await b(r.to.uid, r.to.gid);
        }
        if (y) {
            await e.sync();
        }
        await D();
    } catch (error) {
        await h().catch(()=>{});
        await e.close().catch(()=>{});
        throw error;
    }
    try {
        await e.close();
    } catch (error) {
        await h().catch(()=>{});
        throw error;
    }
}
const qe = (e, n)=>{
    if (n === undefined) {
        return e;
    }
    return e & 448;
};
async function IYo(e, n, s, y, h, r = false, D, b = ()=>Promise.resolve()) {
    let { made, lookError } = await e.stat({
        bigint: true
    }).then((made_1)=>({
            made: made_1,
            lookError: undefined
        }), (lookError_1)=>({
            made: null,
            lookError: lookError_1
        }));
    let p = async ()=>{
        let w = await y();
        if (made !== null && made.ino !== 0n && w !== null && w.dev === made.dev && w.ino === made.ino) {
            await h();
        }
    };
    if (D !== undefined && made === null) {
        await e.close().catch(()=>{});
        throw new QVr(lookError);
    }
    let A = made && {
        uid: Number(made.uid),
        gid: Number(made.gid)
    };
    return Er(e, n, s, r, p, D === undefined || A === null ? undefined : {
        from: A,
        to: {
            ...A,
            ...D
        }
    }, ()=>b(made));
}
async function We(e, n, realRoot) {
    let [y, h] = await Promise.all([
        e.fs.lstat(realRoot, {
            bigint: true
        }),
        n.stat({
            bigint: true
        })
    ]);
    return y.dev === h.dev && y.ino === h.ino && h.ino !== 0n;
}
async function Pr(e, n) {
    try {
        let [s, y] = await Promise.all([
            e.fs.lstat(`/proc/self/fd/${n.fd}/.`, {
                bigint: true
            }),
            n.stat({
                bigint: true
            })
        ]);
        return s.dev === y.dev && s.ino === y.ino && y.ino !== 0n;
    } catch (error) {
        let y = v(error);
        if (y === "ENOENT" || y === "EACCES" || y === "EPERM") {
            return false;
        }
        throw error;
    }
}
function Ir(e, n, { realRoot, directoryCheck }) {
    let { fs } = e;
    let r = (i, d)=>`/proc/self/fd/${i.fd}/${d}`;
    let D = (i, d)=>Buffer.concat([
            Buffer.from(`/proc/self/fd/${i.fd}/`),
            d
        ]);
    let b = {
        openDir: (i, d)=>fs.open(r(i, d), K),
        mkdir: async (i, d, mode)=>{
            await fs.mkdir(r(i, d), {
                mode
            });
        },
        closeDir: (i)=>i.close(),
        create: async (i, d, p, A, w, E, P, B)=>{
            await IYo(await fs.open(r(i, d), ae | constants.O_NOFOLLOW, qe(w, P)), A, w, ()=>fs.lstat(r(i, d), {
                    bigint: true
                }).catch(()=>null), ()=>fs.unlink(r(i, d)), E, P, B);
            if (E) {
                await i.sync().catch(()=>{});
            }
        },
        createAndOpen: (i, d, p, A)=>fs.open(r(i, d), ae | constants.O_NOFOLLOW, A),
        link: (i, d, p, A)=>fs.link(r(i, d), r(p, A)),
        rename: (i, d, p, A)=>fs.rename(r(i, d), r(p, A)),
        symlink: (i, d, p)=>fs.symlink(i, r(d, p)),
        readlink: (i, d)=>fs.readlink(r(i, d)),
        unlink: (i, d)=>fs.unlink(r(i, d)),
        rmdir: (i, d)=>fs.rmdir(r(i, d)),
        list: async (i, d)=>{
            if (d === undefined) {
                return fs.readdir(`/proc/self/fd/${i.fd}`);
            }
            throw X("WORKING_LIST_UNSUPPORTED");
        },
        bytes: {
            list: (i)=>fs.readdir(`/proc/self/fd/${i.fd}`, {
                    encoding: "buffer"
                }),
            openDir: (i, d)=>fs.open(D(i, d), K),
            unlink: (i, d)=>fs.unlink(D(i, d)),
            rmdir: (i, d)=>fs.rmdir(D(i, d))
        },
        lstat: (i, d)=>fs.lstat(r(i, d), {
                bigint: true
            }),
        open: (i, d, p, A)=>fs.open(r(i, d), A | constants.O_NOFOLLOW | ai),
        hold: (i)=>Je(e, i),
        getHeldDir: (i)=>i.dir,
        holdOpenedDir: (i, d)=>({
                realPath: d,
                dir: i,
                stat: ()=>i.stat({
                        bigint: true
                    }),
                close: ()=>i.close()
            }),
        renameOut: (i, d, p, A)=>fs.rename(r(i, d), r(p.dir, A)),
        renameIn: (i, d, p, A)=>fs.rename(r(i.dir, d), r(p, A)),
        linkIn: (i, d, p, A)=>fs.link(r(i.dir, d), r(p, A)),
        statIn: (i, d)=>fs.lstat(r(i.dir, d), {
                bigint: true
            }),
        openIn: (i, d, p)=>fs.open(r(i.dir, d), p | constants.O_NOFOLLOW | ai),
        unlinkIn: (i, d)=>fs.unlink(r(i.dir, d))
    };
    return N7n("linux_procfd", e, Xe(n), n, realRoot, b, [], directoryCheck);
}
const kr = /^\S+ ..x. \S+ \S+ \S+ +(\/.*\/(?:libc\.so\.6|libc-2\.\d+\.so|ld-musl-\w+\.so\.1))$/;
function FDs(e) {
    let [n, ...s] = new Set(e.split(`
`).flatMap((y)=>kr.exec(y)?.[1] ?? []));
    if (n === undefined || s.length > 0) {
        return null;
    }
    return n;
}
async function jjs(e) {
    if (e.linuxDirectoryStream === undefined) {
        let s = "";
        try {
            await using y = await e.fs.open("/proc/self/maps", constants.O_RDONLY | ai);
            s = await y.readFile({
                encoding: "utf8"
            });
        } catch (error) {
            if (!z(error)) {
                throw error;
            }
        }
        e.linuxDirectoryStream ??= Nr(s);
    }
    let e_linuxDirectoryStream = e.linuxDirectoryStream;
    try {
        return await e_linuxDirectoryStream;
    } catch (error) {
        if (e.linuxDirectoryStream === e_linuxDirectoryStream) {
            e.linuxDirectoryStream = undefined;
        }
        t(`anchor: libc directory streams unavailable, so a bounded listing is refused (${l(error)})`, {
            level: "warn"
        });
        return null;
    }
}
async function Nr(e) {
    let n = FDs(e);
    if (n === null) {
        throw Error("not exactly one glibc or musl is mapped as code in this process");
    }
    let s = await import("bun:ffi");
    let { symbols } = s.dlopen(n, {
        fdopendir: {
            args: [
                "i32"
            ],
            returns: "ptr"
        },
        readdir: {
            args: [
                "ptr"
            ],
            returns: "ptr"
        },
        closedir: {
            args: [
                "ptr"
            ],
            returns: "i32"
        },
        __errno_location: {
            args: [],
            returns: "ptr"
        }
    });
    let h = symbols.__errno_location();
    let r = h === null ? null : new Int32Array(s.toArrayBuffer(h, 0, 4));
    t("anchor: libc directory streams loaded through bun:ffi");
    return {
        fdopendir: symbols.fdopendir,
        readdir: symbols.readdir,
        closedir: symbols.closedir,
        readName: (D)=>{
            let b = Buffer.from(s.toArrayBuffer(D, 19, s.read.u16(D, 16) - 19));
            return b.toString("utf8", 0, b.indexOf(0));
        },
        clearErrno: ()=>{
            r?.fill(0);
        },
        readErrno: ()=>r?.[0] ?? -1
    };
}
function Ue(syscall, n) {
    return Object.assign(Error("libc call failed"), {
        errno: n,
        code: n <= 0 ? "EUNKNOWN" : getSystemErrorName(-n),
        syscall
    });
}
async function Wjs(e, n, s) {
    e.clearErrno();
    let y = e.fdopendir(n);
    if (y === null) {
        let h = e.readErrno();
        await oe(n);
        throw Ue("fdopendir", h);
    }
    try {
        let h = [];
        while(h.length <= s){
            e.clearErrno();
            let r = e.readdir(y);
            if (r === null) {
                let b = e.readErrno();
                if (b !== 0) {
                    throw Ue("readdir", b);
                }
                return h;
            }
            let D = e.readName(r);
            if (D !== "." && D !== "..") {
                h.push(D);
            }
        }
        return h;
    } finally{
        e.closedir(y);
    }
}
const vr = 0o170000n;
const Rr = 0o010000n;
const Ar = 0o020000n;
const Br = 0o040000n;
const Sr = 0o060000n;
const Tr = 0o100000n;
const Cr = 0o120000n;
const Hr = 0o140000n;
function zjs(e) {
    let mode = BigInt(e.readUInt16LE(4));
    let s = (i)=>()=>(mode & vr) === i;
    let y = (i)=>{
        let ns = e.readBigInt64LE(i) * 1000000000n + e.readBigInt64LE(i + 8);
        return {
            ns,
            ms: ns / 1000000n,
            date: new Date(Number(ns / 1000000n))
        };
    };
    let h = y(32);
    let r = y(48);
    let D = y(64);
    let b = y(80);
    return {
        dev: BigInt(e.readInt32LE(0)),
        mode,
        nlink: BigInt(e.readUInt16LE(6)),
        ino: e.readBigUInt64LE(8),
        uid: BigInt(e.readUInt32LE(16)),
        gid: BigInt(e.readUInt32LE(20)),
        rdev: BigInt(e.readInt32LE(24)),
        size: e.readBigInt64LE(96),
        blocks: e.readBigInt64LE(104),
        blksize: BigInt(e.readInt32LE(112)),
        atimeNs: h.ns,
        mtimeNs: r.ns,
        ctimeNs: D.ns,
        birthtimeNs: b.ns,
        atimeMs: h.ms,
        mtimeMs: r.ms,
        ctimeMs: D.ms,
        birthtimeMs: b.ms,
        atime: h.date,
        mtime: r.date,
        ctime: D.date,
        birthtime: b.date,
        isFile: s(Tr),
        isDirectory: s(Br),
        isSymbolicLink: s(Cr),
        isFIFO: s(Rr),
        isSocket: s(Hr),
        isBlockDevice: s(Sr),
        isCharacterDevice: s(Ar)
    };
}
const Fr = [
    "dev",
    "ino",
    "mode",
    "nlink",
    "uid",
    "gid",
    "rdev",
    "size",
    "blocks",
    "blksize",
    "mtimeNs",
    "ctimeNs",
    "birthtimeNs",
    "mtimeMs",
    "ctimeMs",
    "birthtimeMs"
];
function Gjs(e, n) {
    return Fr.filter((s)=>e[s] !== n[s]);
}
function Vjs(e, n) {}
const he = promisify(fstat);
var oe = promisify(close);
const Ke = promisify(open);
const Qe = promisify(fsync);
const Lr = promisify(fchmod);
const xr = promisify(fchown);
const Mr = promisify(writeFile);
function Wr(e) {
    return {
        stat: (n)=>he(e, n),
        writeFile: (n)=>Mr(e, n),
        chown: (n, s)=>xr(e, n, s),
        chmod: (n)=>Lr(e, n),
        sync: ()=>Qe(e),
        close: ()=>oe(e)
    };
}
let le;
const Ur = Buffer.from(".");
const Kr = Buffer.from("..");
function M(e) {
    return Buffer.concat([
        typeof e === "string" ? Buffer.from(e) : e,
        Buffer.from([
            0
        ])
    ]);
}
function UDs() {
    if (le !== undefined) {
        return le;
    }
    try {
        let e = Le("bun:ffi");
        let n = e.dlopen("/usr/lib/libSystem.B.dylib", {
            openat: {
                args: [
                    "i32",
                    "ptr",
                    "i32"
                ],
                returns: "i32"
            },
            mkdirat: {
                args: [
                    "i32",
                    "ptr",
                    "u32"
                ],
                returns: "i32"
            },
            renameat: {
                args: [
                    "i32",
                    "ptr",
                    "i32",
                    "ptr"
                ],
                returns: "i32"
            },
            linkat: {
                args: [
                    "i32",
                    "ptr",
                    "i32",
                    "ptr",
                    "i32"
                ],
                returns: "i32"
            },
            unlinkat: {
                args: [
                    "i32",
                    "ptr",
                    "i32"
                ],
                returns: "i32"
            },
            __error: {
                args: [],
                returns: "ptr"
            }
        });
        let s = true;
        let y = "fdopendir$INODE64";
        let h = "readdir$INODE64";
        let r = null;
        try {
            r = e.dlopen("/usr/lib/libSystem.B.dylib", {
                fdopendir$INODE64: {
                    args: [
                        "i32"
                    ],
                    returns: "ptr"
                },
                readdir$INODE64: {
                    args: [
                        "ptr"
                    ],
                    returns: "ptr"
                },
                closedir: {
                    args: [
                        "ptr"
                    ],
                    returns: "i32"
                }
            }).symbols;
        } catch (error) {
            t(`anchor: fdopendir, readdir or closedir could not be loaded, so held directories cannot be listed (${l(error)})`, {
                level: "warn"
            });
        }
        let D = null;
        try {
            D = e.dlopen("/usr/lib/libSystem.B.dylib", {
                symlinkat: {
                    args: [
                        "ptr",
                        "i32",
                        "ptr"
                    ],
                    returns: "i32"
                },
                readlinkat: {
                    args: [
                        "i32",
                        "ptr",
                        "ptr",
                        "u64"
                    ],
                    returns: "i32"
                }
            }).symbols;
        } catch (error) {
            t(`anchor: symlinkat or readlinkat could not be loaded, so no symbolic link can be made or read in a held directory (${l(error)})`, {
                level: "warn"
            });
        }
        let b = D;
        let getBeneath = c0(()=>{
            try {
                return;
            } catch (error) {
                t(`anchor: openat could not be loaded to create, so files are created by full path (${l(error)})`, {
                    level: "warn"
                });
                return;
            }
        });
        let d = n.symbols;
        let p = (w, E)=>{
            if (E >= 0) {
                return E;
            }
            let P = d.__error();
            let B = P === null ? 0 : e.read.i32(P, 0);
            let k = Error("libSystem call failed");
            k.errno = B;
            k.code = B === 0 ? "EUNKNOWN" : getSystemErrorName(-B);
            k.syscall = w;
            throw k;
        };
        let A = r === null ? null : (w, E)=>{
            let P = r;
            let B = p("openat", d.openat(w, M("."), K));
            let k = P.fdopendir$INODE64(B);
            if (k === null) {
                let m = d.__error();
                let f = m === null ? 0 : e.read.i32(m, 0);
                close(B, ()=>{});
                throw Object.assign(Error("libSystem call failed"), {
                    errno: f,
                    code: f === 0 ? "EUNKNOWN" : getSystemErrorName(-f),
                    syscall: "fdopendir"
                });
            }
            try {
                let m = [];
                while(true){
                    let f = d.__error();
                    if (f !== null) {
                        new Int32Array(e.toArrayBuffer(f, 0, 4))[0] = 0;
                    }
                    let O = P.readdir$INODE64(k);
                    if (O === null) {
                        let L = f === null ? -1 : e.read.i32(f, 0);
                        if (L !== 0) {
                            throw Object.assign(Error("libSystem call failed"), {
                                errno: L,
                                code: L === -1 ? "EUNKNOWN" : getSystemErrorName(-L),
                                syscall: "readdir"
                            });
                        }
                        return m;
                    }
                    let N = e.read.u16(O, 18);
                    let I = Buffer.from(new Uint8Array(e.toArrayBuffer(O, 21, N)));
                    if (!I.equals(Ur) && !I.equals(Kr)) {
                        m.push(I);
                    }
                    if (E !== undefined && !(m.length <= E)) {
                        return m;
                    }
                }
            } finally{
                P.closedir(k);
            }
        };
        le = {
            openat: (w, E, P)=>p("openat", d.openat(w, M(E), P)),
            getBeneath,
            mkdirat: (w, E, P)=>{
                p("mkdirat", d.mkdirat(w, M(E), P));
            },
            renameat: (w, E, P, B)=>{
                p("renameat", d.renameat(w, M(E), P, M(B)));
            },
            linkat: (w, E, P, B)=>{
                p("linkat", d.linkat(w, M(E), P, M(B), 0));
            },
            ...b !== null && {
                symlinkat: (w, E, P)=>{
                    p("symlinkat", b.symlinkat(M(w), E, M(P)));
                },
                readlinkat: (w, E)=>{
                    let P = Buffer.alloc(yr);
                    let B = p("readlinkat", b.readlinkat(w, M(E), P, P.length));
                    if (B >= P.length) {
                        throw Object.assign(Error("symbolic link target too long"), {
                            code: "ENAMETOOLONG",
                            syscall: "readlinkat"
                        });
                    }
                    return P.toString("utf8", 0, B);
                }
            },
            unlinkat: (w, E)=>{
                p("unlinkat", d.unlinkat(w, M(E), 0));
            },
            rmdirat: (w, E)=>{
                p("unlinkat", d.unlinkat(w, M(E), mr));
            },
            ...r !== null && {
                listDirectory: (w, E)=>A(w, E).map((P)=>P.toString("utf8")),
                listDirectoryBytes: (w)=>A(w)
            }
        };
        t("anchor: libSystem *at loaded through bun:ffi");
    } catch (error) {
        t(`anchor: bun:ffi unavailable (${l(error)})`, {
            level: "warn"
        });
        le = null;
    }
    return le;
}
function BDs(e) {
    return e.noFollowAnyEnforced ??= Yr(e);
}
async function Yr({ fs, path }) {
    let y = null;
    try {
        y = await fs.realpath(await mkdtemp(path.join(tmpdir(), "claude-nfa-")));
        await fs.mkdir(path.join(y, "d"));
        await symlink(path.join(y, "d"), path.join(y, "l"));
        let h = ae | Oe;
        try {
            await (await fs.open(path.join(y, "d", "control"), h, 384)).close();
        } catch (error) {
            if (v(error) === "EINVAL") {
                return false;
            }
            throw error;
        }
        try {
            await (await fs.open(path.join(y, "l", "probe"), h, 384)).close();
            return false;
        } catch (error) {
            if (v(error) === "ELOOP") {
                return true;
            }
            throw error;
        }
    } catch (error) {
        t(`anchor: O_NOFOLLOW_ANY probe not run (${v(error) ?? "not an errno"})`);
        return true;
    } finally{
        if (y !== null) {
            await rm(y, {
                recursive: true,
                force: true
            }).catch(()=>{});
        }
    }
}
async function Gr(e, n) {
    let s = n.getBeneath?.();
    if (s === undefined) {
        return "not_bound";
    }
    return await jDs(e, s) ?? ((y, h, r)=>s.create(y, [
            h
        ], r & 511));
}
function jDs(e, n) {
    return e.heldCreateProbed ??= jr(n).then((s)=>{
        if (s === "probe_not_run" || s === "probe_create_failed") {
            e.heldCreateProbed = undefined;
        }
        return s;
    });
}
async function jr(e) {
    let n = (r, D)=>t(`anchor: the probe of the create in a held directory ${r}, so this ${D} creates by full path`);
    let s = null;
    let y = [];
    let h = (r)=>{
        y.push(r);
        return he(r, {
            bigint: true
        });
    };
    try {
        s = await mkdtemp(`${tmpdir()}/claude-held-`);
        let r = await Ke(s, K);
        y.push(r);
        let D = await h(await Ke(`${s}/by-path`, ae, 384));
        let b;
        try {
            b = await h(e.create(r, [
                "held"
            ], 384));
        } catch (error) {
            n(`failed (${v(error) ?? "not an errno"})`, "anchor");
            return "probe_create_failed";
        }
        if (b.mode !== D.mode) {
            n(`made a file of mode ${b.mode.toString(8)} where node made one of ${D.mode.toString(8)}`, "host");
            return "probe_wrong_mode";
        }
        let i = await lstat(`${s}/held`, {
            bigint: true
        }).catch((d)=>{
            if (z(d)) {
                return null;
            }
            throw d;
        });
        if (i === null || !Ee(b, i)) {
            n("made a file that is not seen at its name", "host");
            return "probe_wrong_place";
        }
        return null;
    } catch (error) {
        n(`could not be staged (${v(error) ?? "not an errno"})`, "anchor");
        return "probe_not_run";
    } finally{
        await Promise.all(y.map((r)=>oe(r).catch(()=>{})));
        if (s !== null) {
            await rm(s, {
                recursive: true,
                force: true
            }).catch(()=>{});
        }
    }
}
const _e = constants.O_RDONLY | fr | constants.O_NONBLOCK;
function $r(e, n, s, { realRoot, directoryCheck }, heldCreateRefusal, D) {
    let { fs, path } = e;
    let d = (k, m, f, O)=>fs.open(path.join(realRoot, ...k, m), f & ~constants.O_NOFOLLOW | Oe | ai, O);
    let lstat_1 = async (k, m)=>{
        let f = n.fstatat?.(k, m);
        if (f !== undefined && f.dev >= 0n && f.ino < 2n ** 63n) {
            return f;
        }
        return A(k, m, _e);
    };
    let A = async (k, m, f)=>{
        let O = n.openat(k, m, f | ai);
        try {
            return await he(O, {
                bigint: true
            });
        } finally{
            await oe(O);
        }
    };
    let w = async (k, m, f, O, N)=>{
        try {
            if (k === null) {
                return await d(O, f, ae, N);
            }
            return Wr(k(m, f, N));
        } catch (error) {
            throw J(error);
        }
    };
    let { listDirectory, listDirectoryBytes } = n;
    let B = (k)=>({
            ...listDirectoryBytes !== undefined && {
                bytes: {
                    list: async (m)=>listDirectoryBytes(m),
                    openDir: async (m, f)=>n.openat(m, f, K),
                    unlink: async (m, f)=>n.unlinkat(m, f),
                    rmdir: async (m, f)=>n.rmdirat(m, f)
                }
            },
            openDir: async (m, f)=>n.openat(m, f, K),
            mkdir: async (m, f, O)=>n.mkdirat(m, f, O),
            closeDir: (m)=>oe(m),
            createsInHeldDirectory: k !== null,
            ...k !== null && {
                statDirectoryByPath: async (m)=>{
                    let f = await d(m, "", K | constants.O_NONBLOCK).catch((O)=>{
                        throw J(O);
                    });
                    try {
                        return await f.stat({
                            bigint: true
                        });
                    } finally{
                        await f.close();
                    }
                }
            },
            create: async (m, f, O, N, I, L, Q, de)=>{
                await IYo(await w(k, m, f, O, qe(I, Q)), N, I, ()=>A(m, f, _e).catch(()=>null), ()=>n.unlinkat(m, f), L, Q, de);
                if (L) {
                    await Qe(m).catch(()=>{});
                }
            },
            createAndOpen: (m, f, O, N)=>d(O, f, ae, N).catch((I)=>{
                    throw J(I);
                }),
            link: async (m, f, O, N)=>n.linkat(m, f, O, N),
            rename: async (m, f, O, N)=>n.renameat(m, f, O, N),
            symlink: async (m, f, O)=>{
                if (n.symlinkat === undefined) {
                    throw X("WORKING_LINK_UNSUPPORTED");
                }
                n.symlinkat(m, f, O);
            },
            readlink: async (m, f)=>{
                if (n.readlinkat === undefined) {
                    throw X("WORKING_LINK_UNSUPPORTED");
                }
                return n.readlinkat(m, f);
            },
            unlink: async (m, f)=>n.unlinkat(m, f),
            rmdir: async (m, f)=>n.rmdirat(m, f),
            ...listDirectory !== undefined && {
                list: async (m, f)=>listDirectory(m, f)
            },
            lstat: lstat_1,
            open: (m, f, O, N)=>d(O, f, N),
            openBeneath: (m, f, O)=>d(m, f, O),
            hold: (m)=>Je(e, m),
            getHeldDir: (m)=>m.dir.fd,
            holdOpenedDir: (fd, f)=>({
                    realPath: f,
                    dir: {
                        fd
                    },
                    stat: ()=>he(fd, {
                            bigint: true
                        }),
                    close: ()=>oe(fd)
                }),
            renameOut: async (m, f, O, N)=>n.renameat(m, f, O.dir.fd, N),
            renameIn: async (m, f, O, N)=>n.renameat(m.dir.fd, f, O, N),
            linkIn: async (m, f, O, N)=>n.linkat(m.dir.fd, f, O, N),
            statIn: (m, f)=>lstat_1(m.dir.fd, f),
            openIn: async (m, f, O)=>{
                let N = await fs.open(path.join(m.realPath, f), O & ~constants.O_NOFOLLOW | Oe | ai);
                try {
                    let [I, L] = await Promise.all([
                        N.stat({
                            bigint: true
                        }),
                        A(m.dir.fd, f, _e)
                    ]);
                    if (I.dev !== L.dev || I.ino !== L.ino) {
                        throw Object.assign(Error("not the file the held directory names"), {
                            code: "ELOOP"
                        });
                    }
                    return N;
                } catch (error) {
                    await N.close().catch(()=>{});
                    throw error;
                }
            },
            unlinkIn: async (m, f)=>n.unlinkat(m.dir.fd, f)
        });
    return N7n("darwin_at", e, Xe(s), s.fd, realRoot, {
        ...B(typeof heldCreateRefusal === "function" ? heldCreateRefusal : null),
        ...typeof heldCreateRefusal === "string" && {
            heldCreateRefusal
        },
        ...!D && {
            forAnchorBeneath: B(null)
        }
    }, [], directoryCheck);
}
function qjs(e, n, { createsInHeldDirectoryCheckedByPath = false } = {}) {
    return OSn(e, {
        gitRoot: n,
        realRoot: n,
        isRootNameExchangeable: true,
        ...createsInHeldDirectoryCheckedByPath && {
            [Ve]: true
        }
    });
}
async function OSn(e, { [Ve]: s, ...rest }) {
    let r = false;
    let D = {
        ...rest,
        directoryCheck: undefined
    };
    switch(e.platform()){
        case "windows":
            {
                let { loadNt } = await import("/$bunfs/root/chunk-b0zt2ntz.js");
                let i = loadNt();
                if (i === null) {
                    return {
                        unavailable: "no_ffi"
                    };
                }
                let { openWin32Backend } = await import("/$bunfs/root/chunk-1shbvepv.js");
                let p = await openWin32Backend(e, i, D);
                if ("unanchored" in p) {
                    return {
                        unavailable: p.unanchored
                    };
                }
                return N7n("win32_handle", e, p.root, p.held, D.realRoot, p.ops);
            }
        case "linux":
        case "wsl":
            {
                let b = await e.fs.open(D.realRoot, K);
                try {
                    if (!await We(e, b, D.realRoot)) {
                        await b.close();
                        return {
                            unavailable: "unstable_identity"
                        };
                    }
                    if (await Pr(e, b)) {
                        return Ir(e, b, D);
                    }
                    await b.close();
                    return {
                        unavailable: "no_procfs"
                    };
                } catch (error) {
                    await b.close().catch(()=>{});
                    throw error;
                }
            }
        case "macos":
            {
                let b = e.darwinAt ?? UDs();
                if (b === null) {
                    return {
                        unavailable: "no_ffi"
                    };
                }
                if (!await BDs(e)) {
                    return {
                        unavailable: "nofollow_any_unenforced"
                    };
                }
                let i = await e.fs.open(D.realRoot, K);
                try {
                    if (await Dzt(e, D) !== D.realRoot) {
                        throw ur();
                    }
                    if (!await We(e, i, D.realRoot)) {
                        await i.close();
                        return {
                            unavailable: "unstable_identity"
                        };
                    }
                    return $r(e, b, i, D, undefined?.createsInHeldDirectory === true ? await Gr(e, b) : null, false);
                } catch (error) {
                    await i.close().catch(()=>{});
                    throw error;
                }
            }
        case "unknown":
            return {
                unavailable: "unsupported_platform"
            };
    }
}
function Kjs(e) {
    if (e.kind === "unavailable") {
        return e.reason;
    }
    return null;
}
async function Yjs(e, { host = Hzt(), now = ()=>performance.now() } = {}) {
    let y = now();
    return {
        ...await Vr(host, e).catch((r)=>({
                kind: "threw"
            })),
        elapsedMs: Math.round(now() - y)
    };
}
async function Vr(host, gitRoot) {
    let s = await OSn(host, {
        gitRoot,
        realRoot: await host.fs.realpath(gitRoot)
    });
    if ("unavailable" in s) {
        return {
            kind: "unavailable",
            reason: s.unavailable
        };
    }
    await s.close().catch(()=>{});
    return {
        kind: "available"
    };
}
export { QVr, $Ds, Bjs, N7n, IYo, FDs, jjs, Wjs, zjs, Gjs, Vjs, UDs, BDs, jDs, qjs, OSn, Kjs, Yjs };
