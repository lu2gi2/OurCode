import { I9, Jt } from "/$bunfs/root/chunk-dn762950.js";
import { K, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { x, l, v, efe } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ep } from "/$bunfs/root/chunk-y9c4grt0.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { yo, _o, ie, mBe, oA, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { zn, Ob } from "/$bunfs/root/chunk-0ycjphb5.js";
import { BHt, zY, M5e, Fb } from "/$bunfs/root/chunk-2d9a83dh.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { _g } from "/$bunfs/root/chunk-3yz9zdww.js";
import { to } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { Tf, Vx } from "/$bunfs/root/chunk-4r6b8efh.js";
import { uO } from "/$bunfs/root/chunk-f0v3xmb1.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { randomBytes } from "crypto";
import { constants, fstat } from "fs";
import { lstat, mkdir, open, readdir, readlink, realpath, symlink, unlink } from "fs/promises";
import { basename, dirname, isAbsolute, join, resolve, sep } from "path";
function B(e) {
    if (!I9(e)) {
        return false;
    }
    if (Jt(e)) {
        return true;
    }
    return /^[A-Za-z0-9][A-Za-z0-9_]*$/.test(e) && uO(e) !== undefined;
}
function CDn(e, n = {}) {
    if (n.acceptCustomIds) {
        return I9(e);
    }
    return B(e);
}
function FLe(adoptedSessionId, n, i = {}) {
    if (n) {
        return {
            adoptedSessionId: null,
            effectiveFork: true
        };
    }
    if (adoptedSessionId === undefined) {
        return {
            adoptedSessionId: null,
            effectiveFork: false
        };
    }
    if (CDn(adoptedSessionId, i)) {
        return {
            adoptedSessionId,
            effectiveFork: false
        };
    }
    t(`resume: transcript session id (${typeof adoptedSessionId}) rejected by the adoption gate; continuing as a fork under the fresh session id`);
    f("session_resume", "unadoptable_session_id");
    return {
        adoptedSessionId: null,
        effectiveFork: true
    };
}
const A = constants.O_NOFOLLOW ?? 0;
const yt = 8388608;
const PCt = 5368709120;
const Dgr = "5GB";
const A_e = 67108864;
function m9t() {
    return Tf();
}
function ICt() {
    let e = Ob()?.adoptShellOutputRoot;
    if (e !== undefined) {
        return join(e, K(), "tasks");
    }
    let n = zn();
    if (n.outputDir === undefined || Ce()) {
        n.outputDir = join(Vx(), K(), "tasks");
    }
    return n.outputDir;
}
function wlo(e) {
    return join(Vx(), e, "tasks");
}
function vlo() {
    if (Ob()?.adoptShellOutputRoot !== undefined) {
        return ICt();
    }
    return (Ce() ? undefined : zn().outputDir) ?? join(Vx(), K(), "tasks");
}
function Ot() {
    let e = zn();
    if (e.outputDir === undefined) {
        if (Ob() !== null) {
            return join(Vx(), K(), "tasks");
        }
        e.outputDir = join(Vx(), K(), "tasks");
    }
    return e.outputDir;
}
function g9t(e) {
    if (Ce()) {
        throw Error("Task output is not written to disk in a diskless session");
    }
    let n = zn().outputPathBindings.get(e);
    if (n !== undefined) {
        return n;
    }
    let i = join(ICt(), `${e}.output`);
    zn().outputPathBindings.set(e, i);
    return i;
}
function Ru(e) {
    if (Ce()) {
        throw Error("Task output has no file in a diskless session");
    }
    let n = zn().outputPathBindings.get(e);
    if (n !== undefined) {
        return n;
    }
    return join(Ot(), `${e}.output`);
}
function Y(e) {
    let pendingOutputOps = zn().pendingOutputOps;
    pendingOutputOps.add(e);
    e.finally(()=>pendingOutputOps.delete(e)).catch(()=>{});
    return e;
}
const Tt = 16777216;
const U = `
[output omitted: it could not be written to disk]
`;
class RDn {
    #c;
    #n = null;
    #t = [];
    #d = 0;
    #s = false;
    #e = 0;
    #o = 0;
    #i = false;
    #a = new Set;
    #l = false;
    #r = null;
    #u = null;
    constructor(e, n){
        this.#c = n ?? g9t(e);
    }
    append(e) {
        if (this.#s) {
            return;
        }
        this.#d += e.length;
        if (this.#d > PCt) {
            this.#s = true;
        }
        let n = this.#s ? `
[output truncated: exceeded ${Dgr} disk cap]
` : e;
        this.#t.push(n);
        this.#e += n.length;
        if (!this.#r) {
            this.#r = new Promise((resolvePromise)=>{
                this.#u = resolvePromise;
            });
            Y(this.#g());
        }
    }
    flush() {
        return this.#r ?? Promise.resolve();
    }
    get failing() {
        return this.#i;
    }
    get lostOutput() {
        return this.#l;
    }
    get unwrittenChars() {
        return this.#e;
    }
    cancel() {
        this.#o += 1;
        this.#t.length = 0;
        this.#e = 0;
    }
    async #f() {
        while(true){
            try {
                if (!this.#n) {
                    this.#n = await MCt(this.#c);
                }
                while(true){
                    let e = this.#o;
                    try {
                        await this.#w();
                    } catch (error) {
                        if (this.#o === e) {
                            this.#l = true;
                            this.#t.unshift(U);
                            this.#e += U.length;
                        }
                        throw error;
                    }
                    if (this.#t.length === 0) {
                        break;
                    }
                }
            } finally{
                if (this.#n) {
                    let e = this.#n;
                    this.#n = null;
                    await e.close();
                }
            }
            if (this.#t.length) {
                continue;
            }
            break;
        }
    }
    #w() {
        return this.#n.appendFile(this.#h());
    }
    #h() {
        let e = this.#t.splice(0, this.#t.length);
        this.#e = 0;
        let n = 0;
        for (let r of e){
            n += Buffer.byteLength(r, "utf8");
        }
        let i = Buffer.allocUnsafe(n);
        let s = 0;
        for (let r of e){
            s += i.write(r, s, "utf8");
        }
        return i;
    }
    async #g() {
        try {
            await this.#f();
            this.#p();
        } catch (error) {
            if (!this.#i) {
                this.#i = true;
                t(`Task output drain failed (will retry once): ${error}`, {
                    level: "error"
                });
            }
            if (this.#t.length > 0) {
                try {
                    await this.#f();
                    this.#p();
                } catch (err) {
                    this.#k(err);
                }
            }
        } finally{
            let e = this.#u;
            this.#r = null;
            this.#u = null;
            e();
        }
    }
    #p() {
        this.#i = false;
        this.#a.clear();
    }
    #k(e) {
        let n = v(e);
        let i = n !== undefined && efe.has(n) ? "exhaustion" : "unexpected";
        let s = `${i}:${n ?? "no errno"}`;
        if (!this.#a.has(s)) {
            this.#a.add(s);
            switch(i){
                case "exhaustion":
                    t(`Task output drain retry failed (${n}): ${e}`, {
                        level: "error"
                    });
                    break;
                case "unexpected":
                    c(e);
                    break;
            }
        }
        if (this.#e > Tt) {
            t(`Task output still cannot be written (${n ?? "no errno"}); dropped ${this.#e} chars of unwritten output`, {
                level: "error"
            });
            this.#l = true;
            this.#t.length = 0;
            this.#t.push(U);
            this.#e = U.length;
        }
    }
}
function Et(e) {
    let n = zn().diskOutputs.get(e);
    if (!n) {
        n = new RDn(e);
        zn().diskOutputs.set(e, n);
    }
    return n;
}
function ULe(e, n) {
    Et(e).append(n);
}
function Zp(e) {
    return Y((async ()=>{
        let n = zn();
        let i = n.diskOutputs.get(e);
        if (i) {
            await i.flush();
            if (i.failing && i.unwrittenChars > 0) {
                t(`Task output writer evicted while failing; discarded ${i.unwrittenChars} chars of unwritten output`, {
                    level: "error"
                });
            }
            n.diskOutputs.delete(e);
        }
        h9t(e);
    })());
}
function h9t(e) {
    let n = zn().outputPathBindings.get(e);
    if (n !== undefined && Ob() === null && n === join(ICt(), `${e}.output`)) {
        zn().outputPathBindings.delete(e);
    }
}
async function Elo(e, newOffset, i = yt) {
    try {
        let s = await C_e(Ru(e));
        if (!s) {
            return {
                content: "",
                newOffset
            };
        }
        let r;
        try {
            r = await mBe(s, newOffset, i);
        } finally{
            await s.close();
        }
        if (!r) {
            return {
                content: "",
                newOffset
            };
        }
        return {
            content: r.content,
            newOffset: newOffset + r.bytesRead
        };
    } catch (error) {
        let r = v(error);
        if (r === "ENOENT" || Ost(error)) {
            return {
                content: "",
                newOffset
            };
        }
        if (r && efe.has(r)) {
            t(`getTaskOutputDelta failed (${r}): ${error}`, {
                level: "error"
            });
        } else {
            c(error);
        }
        return {
            content: "",
            newOffset
        };
    }
}
async function OCt(e) {
    try {
        let n = await C_e(Ru(e));
        if (!n) {
            return 0;
        }
        try {
            return (await n.stat()).size;
        } finally{
            await n.close();
        }
    } catch (error) {
        if (Ost(error)) {
            throw error;
        }
        let i = v(error);
        if (i === "ENOENT") {
            return 0;
        }
        if (i === "EACCES" || i === "EPERM") {
            let s = await lstat(Ru(e)).catch(()=>null);
            if (s !== null && s.isFile() && (s.mode & 256) === 0) {
                return s.size;
            }
            g(Ru(e), `output no longer measurable (${i})`);
        }
        if (i && efe.has(i)) {
            t(`getTaskOutputSize failed (${i}): ${error}`, {
                level: "error"
            });
        } else {
            c(error);
        }
        return 0;
    }
}
async function vzs(e, n) {
    if (Ce()) {
        return;
    }
    let i = zn();
    let s = D([
        ...i.outputDir !== undefined ? [
            i.outputDir
        ] : [],
        ...[
            ...i.outputPathBindings.values()
        ].map((o)=>dirname(o))
    ]);
    if (s.length === 0) {
        return;
    }
    let r = e + sep;
    for (let o of s){
        let u;
        try {
            u = await readdir(o);
        } catch (error) {
            let p = v(error);
            if (p !== "ENOENT") {
                if (p && efe.has(p)) {
                    t(`repointTaskOutputSymlinks readdir failed (${p}): ${error}`, {
                        level: "error"
                    });
                } else {
                    c(error);
                }
            }
            continue;
        }
        await vt(o, u, r, e, n);
    }
}
async function vt(e, n, i, s, r) {
    let linkedOutputs = zn().linkedOutputs;
    for (let u of n){
        if (!u.endsWith(".output")) {
            continue;
        }
        let a = join(e, u);
        let p = linkedOutputs.get(a);
        let d;
        try {
            d = O() === "windows" ? undefined : await C(a, {
                replaceLeaf: true
            });
            let w = d?.ioPath ?? a;
            if (p === undefined && e === zn().outputDir) {
                p = await readlink(w).then((h)=>ct(a, w, h)).catch(()=>{});
            }
            if (p === undefined || !p.startsWith(i)) {
                continue;
            }
            let k = r + p.slice(s.length);
            let T = await Q(w);
            if (T === null) {
                continue;
            }
            if (T !== p) {
                g(a, "output symlink was re-pointed");
            }
            await d?.recheckBeforeWrite();
            await unlink(w);
            if (linkedOutputs.get(a) === p) {
                await nt(a, k);
            }
            try {
                await d?.recheckBeforeWrite();
                await symlink(k, w).catch(async (h)=>{
                    if (v(h) !== "EEXIST") {
                        throw h;
                    }
                    let S = await readlink(w).catch(()=>{});
                    if (S !== k && S !== linkedOutputs.get(a)) {
                        throw h;
                    }
                });
            } catch (error) {
                if (linkedOutputs.get(a) === k) {
                    linkedOutputs.delete(a);
                }
                throw error;
            }
            if (await readlink(w).catch(()=>{}) === k) {
                linkedOutputs.set(a, k);
            }
        } catch (error) {
            if (v(error) !== "ENOENT" && !Ost(error)) {
                c(error);
            }
        } finally{
            await d?.close();
        }
    }
}
async function _(e, n, i = 0) {
    if (Ce()) {
        throw Error("Task output is not written to disk in a diskless session");
    }
    if (O() === "windows") {
        await mkdir(dirname(e), {
            recursive: true
        });
        return open(e, n.windowsFlags);
    }
    let s = await C(e, {
        replaceLeaf: true
    });
    try {
        let r = await tt(s.ioPath);
        if (r?.isSymbolicLink()) {
            let a = await J(e, s.ioPath);
            if (a === null) {
                if (n.relooked) {
                    g(e, "output leaf changed during open");
                }
                await s.close();
                return _(e, {
                    ...n,
                    relooked: true
                }, i);
            }
            if (n.exclusive || i > 0 || !L(a)) {
                g(e, "output link is not appendable");
            }
            return await _(a, {
                exclusive: n.exclusive,
                windowsFlags: n.windowsFlags
            }, i + 1);
        }
        if (r !== null && (!r.isFile() || r.nlink !== 1 && i === 0)) {
            g(e, "existing output is not a plain file");
        }
        await s.recheckBeforeWrite();
        let o = n.exclusive || r === null;
        let u;
        try {
            u = await zY(s.ioPath, constants.O_WRONLY | constants.O_APPEND | (o ? constants.O_CREAT | constants.O_EXCL : 0) | A | (constants.O_NONBLOCK ?? 0), O());
        } catch (error) {
            if (!n.exclusive && v(error) === "EEXIST" && !n.retried) {
                await s.close();
                return _(e, {
                    ...n,
                    retried: true
                }, i);
            }
            throw error;
        }
        if (i > 0 && r === null) {
            let a = await u.stat();
            j.set(e, {
                dev: a.dev,
                ino: a.ino
            });
        }
        try {
            await et(u, r, e, {
                registeredIdentity: i > 0 ? dt(e) : undefined
            });
        } catch (error) {
            await u.close().catch(()=>{});
            throw error;
        }
        return u;
    } catch (error) {
        throw G(error, e);
    } finally{
        await s.close();
    }
}
async function C_e(e, n = 0, i = false) {
    if (O() === "windows") {
        let r = await tt(e);
        if (r === null) {
            return null;
        }
        if (r.isSymbolicLink()) {
            let u = await J(e, e);
            if (u === null) {
                if (i) {
                    g(e, "output leaf changed during open");
                }
                return C_e(e, n, true);
            }
            return lt(u, n, e);
        }
        if (!r.isFile()) {
            g(e, "not a regular file");
        }
        let o = await open(e, "r");
        await et(o, r, e, {
            anyLinkCount: true
        });
        return o;
    }
    let s;
    try {
        s = await C(e, {
            replaceLeaf: true,
            create: false
        });
    } catch (error) {
        if (v(error) === "ENOENT") {
            return null;
        }
        throw error;
    }
    try {
        let r = await tt(s.ioPath);
        if (r === null) {
            return null;
        }
        if (r.isSymbolicLink()) {
            let u = await J(e, s.ioPath);
            if (u === null) {
                if (i) {
                    g(e, "output leaf changed during open");
                }
                await s.close();
                return C_e(e, n, true);
            }
            return await lt(u, n, e);
        }
        if (n === 0 && r.isFile() && r.nlink === 0) {
            return null;
        }
        if (!r.isFile() || r.nlink !== 1 && n === 0) {
            g(e, "not a regular nlink-1 file");
        }
        await s.recheckBeforeWrite();
        let o = await zY(s.ioPath, constants.O_RDONLY | A | (constants.O_NONBLOCK ?? 0), O());
        try {
            if (await et(o, r, e, {
                registeredIdentity: n > 0 ? dt(e) : undefined,
                unlinkedIsGone: n === 0
            }) === "gone") {
                return null;
            }
        } catch (error) {
            await o.close().catch(()=>{});
            throw error;
        }
        return o;
    } catch (error) {
        if (v(error) === "ENOENT") {
            return null;
        }
        throw G(error, e);
    } finally{
        await s.close();
    }
}
async function ct(e, n, i) {
    let s = isAbsolute(i) && resolve(i).startsWith(resolve(Ep()) + sep);
    if (!isAbsolute(i) || !L(i) && !s) {
        return g(e, "output is an unregistered symlink of a shape this session does not create");
    }
    let r = await lstat(n);
    if (!r.isSymbolicLink() || r.ctimeMs >= zn().linksInheritedBeforeFor(dirname(e))) {
        return g(e, "output is an unregistered symlink made during this session");
    }
    await nt(e, i);
    return i;
}
async function J(e, n) {
    let i = zn().linkedOutputs.get(e);
    if (i === undefined) {
        if (!y9t(e)) {
            return g(e, "output is an unregistered symlink outside any tasks directory");
        }
        let r = await Q(n);
        if (r === null) {
            return null;
        }
        i = await ct(e, n, r);
    }
    let s = await Q(n);
    if (s === null) {
        return null;
    }
    if (s !== i) {
        return g(e, "output symlink was re-pointed");
    }
    return i;
}
async function Q(e) {
    try {
        return await readlink(e);
    } catch (error) {
        if (v(error) === "EINVAL") {
            return null;
        }
        throw error;
    }
}
async function lt(e, n, i) {
    if (L(e)) {
        if (n > 0) {
            return g(i, "output links chain");
        }
        return C_e(e, n + 1);
    }
    let s;
    let r;
    try {
        let o = await realpath(e);
        if (L(o)) {
            return g(i, "output link leads back into the tasks tree");
        }
        r = await lstat(o);
        s = await zY(o, constants.O_RDONLY | A | (constants.O_NONBLOCK ?? 0), O());
    } catch (error) {
        if (Ost(error)) {
            throw error;
        }
        if (v(error) === "ENOENT") {
            return null;
        }
        throw G(error, i);
    }
    try {
        let o = await s.stat();
        if (!o.isFile() || o.ino !== r.ino || o.dev !== r.dev) {
            g(i, "link target is not a regular file");
        }
    } catch (error) {
        await s.close().catch(()=>{});
        throw error;
    }
    return s;
}
function L(e) {
    let n = Tf();
    return e === n || e.startsWith(n.endsWith(sep) ? n : n + sep);
}
async function tt(e) {
    try {
        return await lstat(e);
    } catch (error) {
        if (v(error) === "ENOENT") {
            return null;
        }
        throw error;
    }
}
var j = new Map;
function dt(e) {
    let n = j.get(e);
    if (n === undefined) {
        return g(e, "link target identity was never recorded");
    }
    return n;
}
async function nt(e, n) {
    if (L(n)) {
        await ft(n);
    }
    zn().linkedOutputs.set(e, n);
}
async function ft(e) {
    let n = await C(e, {
        replaceLeaf: true,
        create: false
    });
    try {
        let i = await zY(n.ioPath, constants.O_RDONLY | A | (constants.O_NONBLOCK ?? 0), O()).catch((s)=>{
            throw G(s, e);
        });
        try {
            let s = await i.stat();
            if (!s.isFile() || s.nlink !== 1) {
                g(e, "link target is not a regular single-link file");
            }
            j.set(e, {
                dev: s.dev,
                ino: s.ino
            });
        } finally{
            await i.close();
        }
    } finally{
        await n.close();
    }
}
async function et(e, n, i, s) {
    try {
        let r = await e.stat();
        let o = s?.registeredIdentity;
        if (s?.unlinkedIsGone && o === undefined && !s.anyLinkCount && n !== null && r.isFile() && r.nlink === 0 && r.ino === n.ino && r.dev === n.dev) {
            await e.close().catch(()=>{});
            return "gone";
        }
        if (!r.isFile() || (o !== undefined ? r.ino !== o.ino || r.dev !== o.dev : !s?.anyLinkCount && r.nlink !== 1) || n !== null && (r.ino !== n.ino || r.dev !== n.dev)) {
            g(i, "output file identity changed");
        }
        return "same";
    } catch (error) {
        await e.close().catch(()=>{});
        throw error;
    }
}
function G(e, n) {
    let i = v(e);
    if (i === "ELOOP" || i === "EISDIR" || i === "ENOTDIR" || i === "ENXIO" || i === "EOPNOTSUPP" || i === "ENOTSUP") {
        try {
            g(n, `open refused a swapped leaf (${i})`);
        } catch (error) {
            return error;
        }
    }
    return e;
}
function bt(canonicalPath) {
    let n = it();
    let i = resolve(canonicalPath);
    if (i.startsWith(n + sep)) {
        return i;
    }
    let s = ie();
    let r = dirname(dirname(dirname(dirname(i))));
    let { resolvedPath } = yo(s, r);
    if (to(resolvedPath) === to(n)) {
        return join(n, i.slice(r.length + 1));
    }
    return i;
}
function it() {
    return dirname(dirname(dirname(resolve(ICt()))));
}
function y9t(e) {
    let n = it();
    let i = ie();
    let s = new Set([
        n,
        yo(i, n).resolvedPath
    ].map((r)=>to(r)));
    return _o(e).some((r)=>{
        let o = dirname(resolve(r));
        return to(basename(o)) === "tasks" && pt(basename(dirname(o))) && s.has(to(dirname(dirname(dirname(o)))));
    });
}
function q() {
    let e = [
        "????????-????-????-????-????????????",
        "session_*",
        "cse_*"
    ];
    let n = K();
    if (!B(n) && /^[A-Za-z0-9._-]+$/.test(n)) {
        e.push(n);
    }
    return e;
}
function pt(e) {
    return B(e) || e === K();
}
function klo(e) {
    let n = it();
    let i = ie();
    let s = D([
        n,
        yo(i, n).resolvedPath
    ]);
    let r = new Set;
    let o = (a, p)=>{
        let d = a.endsWith(sep) ? a : a + sep;
        if (to(p).startsWith(to(d))) {
            return p.slice(d.length);
        }
        return null;
    };
    let u = (a)=>a.replaceAll("\\", "/");
    for (let a of _o(e)){
        let p = resolve(a);
        for (let d of s){
            let w = basename(d);
            if (to(p) === to(d)) {
                for (let h of q()){
                    r.add(`!/*/${h}/tasks/**`);
                    r.add(`!**/${w}/*/${h}/tasks/**`);
                }
                continue;
            }
            let k = o(p, d);
            if (k !== null) {
                for (let h of q()){
                    r.add(`!/${u(k)}/*/${h}/tasks/**`);
                    r.add(`!**/${w}/*/${h}/tasks/**`);
                }
                continue;
            }
            let T = o(d, p);
            if (T !== null) {
                let h = T.split(sep);
                if (h.length === 1) {
                    for (let S of q()){
                        r.add(`!/${S}/tasks/**`);
                        r.add(`!**/${w}/${u(T)}/${S}/tasks/**`);
                    }
                } else if (!pt(h[1] ?? "")) ;
                else if (h.length === 2) {
                    r.add("!/tasks/**");
                    r.add(`!**/${w}/${u(T)}/tasks/**`);
                } else if (to(h[2] ?? "") === "tasks") {
                    r.add("!**");
                }
            }
        }
    }
    return [
        ...r
    ];
}
async function xDn(canonicalPath) {
    canonicalPath = bt(canonicalPath);
    let n = await C_e(canonicalPath);
    if (n === null) {
        await lstat(canonicalPath);
        throw new x(`task output ${canonicalPath} is no longer available (the file it pointed to was removed)`, "task output link target removed");
    }
    let i = O();
    return {
        ioPath: (i === "linux" || i === "wsl") && await readlink(`/proc/self/fd/${n.fd}`).then(()=>true, ()=>false) ? BHt(n.fd) : i === "macos" ? `/dev/fd/${n.fd}` : canonicalPath,
        canonicalPath,
        handle: n,
        close: ()=>n.close()
    };
}
const Lgr = 8192;
async function e4e(e) {
    return t4e(Ru(e), Lgr);
}
async function t4e(e, n) {
    let i = await C_e(e);
    if (i === null) {
        return {
            content: "",
            bytesRead: 0,
            bytesTotal: 0
        };
    }
    try {
        return await oA(i, n);
    } finally{
        await i.close();
    }
}
async function _9t(e) {
    let n = zn().linkedOutputs.get(e);
    zn().linkedOutputs.delete(e);
    if (n !== undefined) {
        j.delete(n);
    }
    if (O() === "windows") {
        await unlink(e);
        return;
    }
    let i;
    try {
        i = await C(e, {
            replaceLeaf: true,
            create: false
        });
    } catch (error) {
        if (v(error) === "ENOENT") {
            return;
        }
        throw error;
    }
    try {
        await i.recheckBeforeWrite();
        await unlink(i.ioPath);
    } finally{
        await i.close();
    }
}
const St = new Uint8Array([
    10
]);
async function Tlo(e) {
    let n = `${e}.${randomBytes(6).toString("hex")}.probe`;
    try {
        let i;
        try {
            i = await _(n, {
                exclusive: true,
                windowsFlags: "wx"
            });
        } catch  {
            return null;
        }
        try {
            await i.write(St);
        } finally{
            await i.close();
        }
        return null;
    } catch (error) {
        return v(error) ?? null;
    } finally{
        await _9t(n).catch((i)=>{
            t(`probeTaskOutputWrite: could not delete ${n}: ${l(i)}`);
        });
    }
}
async function Alo(e, n) {
    let i = await _(e, {
        exclusive: false,
        windowsFlags: "w"
    });
    try {
        await i.truncate(0);
        await i.writeFile(n);
    } finally{
        await i.close();
    }
}
async function C(e, n) {
    let i = dirname(e);
    let s = basename(e);
    let r = E.get(i);
    if (r !== undefined) {
        let d = await r.catch(()=>null);
        if (d !== null) {
            let k = await Promise.all([
                d.handleStat(),
                lstat(i)
            ]).then(([T, h])=>T.nlink > 0 && h.isDirectory() && h.ino === T.ino && h.dev === T.dev, ()=>false) ? d.viewFor(s) : null;
            if (k !== null) {
                return k;
            }
            if (E.get(i) === r) {
                E.delete(i);
            }
            await d.release();
        } else if (E.get(i) === r) {
            E.delete(i);
        }
    }
    let o = E.get(i);
    if (o !== undefined && o !== r) {
        return C(e, n);
    }
    let u = (async ()=>{
        let d;
        try {
            d = await Fb(e, [
                e
            ], {
                createParents: n?.create ?? true,
                ...n?.replaceLeaf && {
                    leaf: "replace"
                }
            });
        } catch (error) {
            if (error instanceof _g) {
                if (!await Pt()) {
                    if (n?.create ?? true) {
                        await mkdir(dirname(e), {
                            recursive: true,
                            mode: 448
                        });
                    }
                    return {
                        ioPath: e,
                        canonicalPath: e,
                        readExisting: ()=>Promise.resolve(null),
                        recheckBeforeWrite: ()=>{},
                        close: async ()=>{}
                    };
                }
                t(`task output: pin of ${dirname(e)} refused: ${l(error)}`, {
                    level: "warn"
                });
                g(e, "tasks dir moved or linked", `restart Claude Code with CLAUDE_CODE_TMPDIR set to a fresh directory; or, if ${Vx().replace(/[\\/]+$/, "")} is a stray directory or a symbolic link that should not be there, remove that entry itself (not what it points to) and restart`);
            }
            throw error;
        }
        let w = /^\/proc\/self\/fd\/(\d+)\//.exec(d.ioPath);
        if (w === null) {
            return d;
        }
        let k = d.ioPath.slice(0, d.ioPath.length - s.length - 1);
        let T = Number(w[1]);
        let h = 0;
        let S = false;
        let rt = false;
        let st = async ()=>{
            if (S && h === 0 && !rt) {
                rt = true;
                await d.close();
            }
        };
        return {
            handleStat: ()=>Ft(T),
            release: ()=>{
                S = true;
                return st();
            },
            viewFor: (P)=>{
                if (S) {
                    return null;
                }
                h++;
                let ot = false;
                return {
                    ioPath: `${k}/${P}`,
                    canonicalPath: join(i, P),
                    readExisting: (ht)=>M5e(`${k}/${P}`, join(i, P), O(), ht),
                    recheckBeforeWrite: ()=>{},
                    close: async ()=>{
                        if (!ot) {
                            ot = true;
                            h--;
                            await st();
                        }
                    }
                };
            }
        };
    })();
    let a = u.then((d)=>{
        if ("viewFor" in d) {
            return d;
        }
        return Promise.reject(Error("not held"));
    });
    a.catch(()=>{});
    E.set(i, a);
    let p;
    try {
        p = await u;
    } catch (error) {
        if (E.get(i) === a) {
            E.delete(i);
        }
        throw error;
    }
    if (!("viewFor" in p)) {
        if (E.get(i) === a) {
            E.delete(i);
        }
        return p;
    }
    if (E.size > Nt) {
        for (let [d, w] of E){
            if (d !== i) {
                E.delete(d);
                w.then((k)=>k.release(), ()=>{});
                break;
            }
        }
    }
    return p.viewFor(s) ?? Promise.reject(Error("unreachable: fresh hold retired"));
}
let V;
async function Pt() {
    let root = Tf();
    if (V?.root === root) {
        return V.ok;
    }
    let n = await realpath(root).then(()=>true, (i)=>v(i) !== "EPERM");
    if (n) {
        V = {
            root,
            ok: Promise.resolve(true)
        };
    }
    return n;
}
var E = new Map;
function Ft(e) {
    return new Promise((resolvePromise, rejectPromise)=>fstat(e, (s, r)=>{
            if (s) {
                return rejectPromise(s);
            }
            return resolvePromise(r);
        }));
}
var Nt = 8;
function MCt(e, windowsFlags = "a") {
    return _(e, {
        exclusive: false,
        windowsFlags
    });
}
function Ist(e) {
    return Y((async ()=>{
        let n = g9t(e);
        await (await _(n, {
            exclusive: true,
            windowsFlags: "wx"
        })).close();
        return n;
    })());
}
const wt = Symbol("taskOutputSwapRefused");
function Ost(e) {
    return e instanceof Error && wt in e;
}
function g(e, n, i) {
    let s = `task output swap refused (${n}): ${e}` + (i === undefined ? "" : `. To recover: ${i}.`);
    let r = Object.assign(new x(s, `task output swap refused (${n})`), {
        [wt]: true
    });
    t(s, {
        level: "error"
    });
    let o = `${n}\x00${e}`;
    if (!H.has(o)) {
        if (H.size >= $t) {
            H.clear();
        }
        H.add(o);
        c(r);
    }
    throw r;
}
var H = new Set;
var $t = 256;
async function PDn(e, n) {
    let i;
    try {
        i = await lstat(e);
    } catch (error) {
        let a = v(error);
        if (a === "ELOOP" || a === "ENOTDIR") {
            g(e, `lstat refused a swapped path (${a})`);
        }
        throw error;
    }
    if (!i.isFile() || i.nlink !== 1) {
        g(e, "not a regular nlink-1 file");
    }
    let s = false;
    let r = i.size > n;
    let o;
    try {
        o = await open(e, s ? r ? "r+" : "r" : (r ? constants.O_RDWR : constants.O_RDONLY) | A | (constants.O_NONBLOCK ?? 0));
    } catch (error) {
        let a = v(error);
        if (a === "ELOOP" || a === "EISDIR" || a === "ENOTDIR" || a === "ENXIO" || a === "EOPNOTSUPP" || a === "ENOTSUP") {
            g(e, `open refused a swapped path (${a})`);
        }
        throw error;
    }
    try {
        let u = await o.stat();
        if (!u.isFile() || u.dev !== i.dev || u.ino !== i.ino || u.nlink !== 1) {
            g(e, "file changed between lstat and open");
        }
        if (r && u.size > n) {
            await o.truncate(n);
        }
        return {
            handle: o,
            size: u.size
        };
    } catch (error) {
        await o.close();
        throw error;
    }
}
async function n4e(e, n) {
    let i;
    try {
        i = await PDn(Ru(e), PCt);
    } catch (error) {
        if (v(error) === "ENOENT") {
            return {
                content: "",
                omittedBytes: 0
            };
        }
        throw error;
    }
    let { handle } = i;
    let r = Math.min(i.size, PCt);
    try {
        let o = Math.max(0, r - n);
        let u = Buffer.allocUnsafe(r - o);
        let a = 0;
        while(a < u.length){
            let { bytesRead } = await handle.read(u, a, u.length - a, o + a);
            if (bytesRead === 0) {
                break;
            }
            a += bytesRead;
        }
        let p = 0;
        while(o > 0 && p < a && (u[p] & 192) === 128){
            p++;
        }
        return {
            content: u.toString("utf8", p, a),
            omittedBytes: o + p
        };
    } finally{
        await handle.close();
    }
}
async function b9t(e, n, i) {
    let { handle, size } = await PDn(e, i);
    try {
        let u = await open(n, constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | A);
        try {
            let a = Buffer.alloc(1048576);
            let p = 0;
            while(p < i){
                let d = Math.min(a.length, i - p);
                let { bytesRead } = await handle.read(a, 0, d, p);
                if (bytesRead === 0) {
                    break;
                }
                let k = 0;
                while(k < bytesRead){
                    let { bytesWritten } = await u.write(a, k, bytesRead - k, p + k);
                    k += bytesWritten;
                }
                p += bytesRead;
            }
        } finally{
            await u.close();
        }
        return size;
    } finally{
        await handle.close();
    }
}
async function Rt(e, n, i = e) {
    if (e === n) {
        return true;
    }
    try {
        if (!(await lstat(i)).isFile()) {
            return false;
        }
        return await realpath(i) === await realpath(n);
    } catch  {
        return false;
    }
}
function S9t(e, n, i) {
    return Y((async ()=>{
        try {
            let s = g9t(e);
            let r = await C(s, {
                replaceLeaf: true
            });
            try {
                if (await Rt(s, n, r.ioPath)) {
                    let u = await readlink(r.ioPath).catch(()=>n);
                    await nt(s, L(u) ? u : n);
                    i?.("noop");
                    return s;
                }
                if (L(n)) {
                    await ft(n);
                }
                let o = zn().linkedOutputs;
                await r.recheckBeforeWrite();
                await unlink(r.ioPath).catch((u)=>{
                    if (v(u) !== "ENOENT") {
                        throw u;
                    }
                });
                o.set(s, n);
                try {
                    try {
                        await r.recheckBeforeWrite();
                        await symlink(n, r.ioPath);
                    } catch (error) {
                        if (v(error) !== "EEXIST") {
                            throw error;
                        }
                        await r.recheckBeforeWrite();
                        await unlink(r.ioPath).catch((a)=>{
                            if (v(a) !== "ENOENT") {
                                throw a;
                            }
                        });
                        await r.recheckBeforeWrite();
                        await symlink(n, r.ioPath);
                    }
                } catch (error) {
                    if (o.get(s) === n) {
                        o.delete(s);
                    }
                    throw error;
                }
                if (await readlink(r.ioPath).catch(()=>{}) === n) {
                    o.set(s, n);
                }
            } finally{
                await r.close();
            }
            i?.("symlink");
            return s;
        } catch (error) {
            let r = v(error);
            if (r && efe.has(r) || r === "EROFS") {
                t(`initTaskOutputAsSymlink failed (${r}): ${error}`, {
                    level: "error"
                });
            } else if (!Ost(error)) {
                c(error);
            }
            return Ist(e);
        }
    })());
}
export { CDn, FLe, PCt, Dgr, A_e, m9t, ICt, wlo, vlo, g9t, Ru, RDn, ULe, Zp, h9t, Elo, OCt, vzs, C_e, y9t, klo, xDn, Lgr, e4e, t4e, _9t, Tlo, Alo, MCt, Ist, Ost, PDn, n4e, b9t, S9t };
