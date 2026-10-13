import { Cn, he, Hxt, Dxt, Xh, nY, am, fpo, R_r, DJt } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Rmo, Gat, IYe, ip, dSr, xmo } from "/$bunfs/root/chunk-0b96c6p1.js";
import { Xn } from "/$bunfs/root/chunk-m1rt7wpr.js";
import * as w from "fs/promises";
import * as Z from "fs";
import * as g from "path";
import * as ke from "child_process";
import * as rt from "crypto";
import * as it from "readline";
function R(r) {
    if (r.inputSchema.type !== "object") {
        throw Error(`JSON schema for tool "${r.name}" must be an object, but got ${r.inputSchema.type}`);
    }
    return {
        type: "custom",
        name: r.name,
        input_schema: r.inputSchema,
        description: r.description,
        run: r.run,
        parse: (e)=>e,
        ...r.close ? {
            close: r.close
        } : {}
    };
}
const IYe_promises = IYe.promises;
const z = 448;
const dt = 384;
function te(r, e) {
    let t = ip.relative(r, e);
    return t === "" || !t.startsWith(`..${ip.sep}`) && t !== ".." && !ip.isAbsolute(t);
}
async function pe(r, e) {
    for (let t of r){
        if (te(await q(ip.resolve(t)), e)) {
            return t;
        }
    }
}
const ht = 40;
function G(r) {
    let e = r?.code;
    if (typeof e === "string") {
        return e;
    }
}
async function q(r) {
    let e = [];
    let t = r;
    let n = 0;
    while(true){
        let i;
        try {
            i = await IYe_promises.realpath(t);
        } catch (error) {
            let s;
            try {
                s = (await IYe_promises.lstat(t)).isSymbolicLink();
            } catch (err) {
                let l = G(err);
                if (l !== "ENOENT" && l !== "ENOTDIR") {
                    throw err;
                }
                let f = ip.dirname(t);
                if (f === t) {
                    throw err;
                }
                e.push(ip.basename(t));
                t = f;
                continue;
            }
            if (!s) {
                throw error;
            }
            if (++n > ht) {
                throw Object.assign(Error("too many levels of symbolic links"), {
                    code: "ELOOP"
                });
            }
            t = ip.resolve(ip.dirname(t), await IYe_promises.readlink(t));
            continue;
        }
        if (e.length) {
            return ip.join(i, ...e.reverse());
        }
        return i;
    }
}
async function Ie(workdir, e, t) {
    let n = t?.allowedRoots ?? [];
    let i = await q(ip.resolve(workdir));
    let o;
    try {
        o = await q(ip.resolve(i, e));
    } catch (error) {
        throw new am(P(error, `path ${JSON.stringify(e)}`));
    }
    if (te(i, o) || await pe(n, o) !== undefined) {
        return o;
    }
    let s = n.length ? "the session's working directory and its other permitted directories" : "the session's working directory";
    throw new am(`path ${JSON.stringify(e)} is outside ${s}`);
}
async function ye(r, e) {
    let t = ip.dirname(r);
    let n = ip.join(t, `.tmp-${process.pid}-${Gat.randomUUID()}`);
    let i = await IYe_promises.stat(r).then((s)=>s.mode & 511, ()=>{});
    let o;
    try {
        o = await IYe_promises.open(n, "wx", dt);
        if (i !== undefined) {
            await o.chmod(i);
        }
        await o.writeFile(e, "utf-8");
        await o.sync();
        await o.close();
        o = undefined;
        await IYe_promises.rename(n, r);
    } catch (error) {
        if (o) {
            await o.close().catch(()=>{});
        }
        await IYe_promises.unlink(n).catch(()=>{});
        throw error;
    }
}
function P(error, e) {
    let t = G(error);
    switch(t){
        case "ENOENT":
            return `${e}: no such file or directory`;
        case "EACCES":
        case "EPERM":
            return `${e}: permission denied`;
        case "ENOTDIR":
            return `${e}: not a directory`;
        case "EISDIR":
            return `${e}: is a directory`;
        case "ELOOP":
            return `${e}: too many levels of symbolic links`;
        case "ENAMETOOLONG":
            return `${e}: file name too long`;
        case "ENOSPC":
            return `${e}: no space left on device`;
        case "EMFILE":
        case "ENFILE":
            return `${e}: too many open files`;
        default:
            return `${e}: ${t !== undefined ? `i/o error (${t})` : "i/o error"}`;
    }
}
const IYe_promises_1 = IYe.promises;
const mt = xmo.promisify(Rmo.execFile);
export async function setupSkills(r) {
    let { client, sessionId } = r;
    if (!client) {
        return async ()=>{};
    }
    let n = Xh(client);
    let r_session = r.session;
    if (!r_session) {
        if (sessionId === undefined) {
            return async ()=>{};
        }
        n.warn("AgentToolContext.sessionId is deprecated and costs an extra session fetch; fetch the session once and set `session` instead", {
            component: "agent-tool-context"
        });
        r_session = await client.beta.sessions.retrieve(sessionId);
    }
    let o = ip.resolve(r.workdir, "skills");
    let s = [];
    for (let a of r_session.agent.skills){
        try {
            let l = await client.beta.skills.versions.retrieve(a.version, {
                skill_id: a.skill_id
            });
            let f = ip.basename(l.name.trim());
            if (f === "" || f === "." || f === "..") {
                f = a.skill_id;
            }
            let c = ip.resolve(o, f);
            if (c !== o && !c.startsWith(o + ip.sep)) {
                n.warn("skill name escapes the skills dir; skipping", {
                    component: "agent-tool-context",
                    name: l.name
                });
                continue;
            }
            let h = await client.beta.skills.versions.download(l.id, {
                skill_id: a.skill_id
            });
            await IYe_promises_1.rm(c, {
                recursive: true,
                force: true
            });
            await IYe_promises_1.mkdir(c, {
                recursive: true,
                mode: z
            });
            s.push(c);
            await Te(h, c);
            n.info("downloaded skill", {
                component: "agent-tool-context",
                skill_id: a.skill_id,
                version: l.id,
                dest: c
            });
        } catch (error) {
            n.warn("failed to download skill", {
                component: "agent-tool-context",
                skill_id: a.skill_id,
                error: String(error)
            });
        }
    }
    return async ()=>{
        for (let a of s){
            await IYe_promises_1.rm(a, {
                recursive: true,
                force: true
            }).catch((l)=>{
                n.warn("failed to clean up skill", {
                    component: "agent-tool-context",
                    dest: a,
                    error: String(l)
                });
            });
        }
    };
}
function pt(r) {
    for (let e of r){
        let t = e.trim();
        if (!t) {
            continue;
        }
        if (ip.isAbsolute(t) || t.split(/[\\/]/).includes("..")) {
            throw new Xn(`refusing to extract unsafe archive member: ${t}`);
        }
    }
}
const _e = "skill archive listing is inconsistent; refusing to extract";
const yt = {
    unzip: new Set([
        "-",
        "d",
        "?"
    ]),
    tar: new Set([
        "-",
        "d",
        "C"
    ])
};
function Ne(r) {
    let e = r.split(`
`);
    if (e[e.length - 1] === "") {
        e.pop();
    }
    return e;
}
function wt(r, e) {
    return /^[\x20-\x7E]+$/.test(e) && !/[\\^#]/.test(e) && !(r === "unzip" && e.startsWith("-"));
}
function _t(r, e, t) {
    let n = Ne(e);
    let i = Ne(t);
    if (n.length !== i.length) {
        throw new Xn(_e);
    }
    let plain = [];
    let special = [];
    n.forEach((a, l)=>{
        if (yt[r].has(i[l].charAt(0))) {
            plain.push(a);
            return;
        }
        if (!wt(r, a)) {
            throw new Xn(`refusing to extract archive: cannot safely exclude member ${JSON.stringify(a)}`);
        }
        special.push(a);
    });
    return {
        plain,
        special
    };
}
async function Re(r) {
    for (let e of (await IYe_promises_1.readdir(r, {
        withFileTypes: true
    }))){
        if (e.isDirectory()) {
            await Re(ip.join(r, e.name));
        } else if (!e.isFile()) {
            throw new Xn(_e);
        }
    }
}
async function we(r, e) {
    try {
        let { stdout } = await mt(r, e);
        return stdout;
    } catch (error) {
        if (G(error) === "ENOENT") {
            throw new Xn(`skill extraction requires the \`${r}\` command, but it was not found on PATH`);
        }
        throw error;
    }
}
function gt(plain) {
    let e;
    let t = false;
    for (let n of plain){
        let i = n.trim().split("/").filter((s)=>s !== "" && s !== ".");
        if (i.length === 0) {
            continue;
        }
        let o = i[0];
        if (e === undefined) {
            e = o;
        } else if (o !== e) {
            return "";
        }
        if (i.length > 1) {
            t = true;
        }
    }
    if (e !== undefined && t) {
        return e;
    }
    return "";
}
async function Te(r, e) {
    let t = ip.join(e, `.skill-archive-${process.pid}-${Date.now()}`);
    if (!r.body) {
        throw new Xn("skill download response had no body");
    }
    await dSr.promises.pipeline(dSr.Readable.fromWeb(r.body), IYe.createWriteStream(t));
    let n = ip.join(ip.dirname(e), `.skill-stage-${process.pid}-${Date.now()}`);
    let i = ip.join(ip.dirname(e), `.skill-exclude-${process.pid}-${Date.now()}`);
    try {
        let o = await Et(t, 4);
        let s = o.length >= 4 && o[0] === 80 && o[1] === 75 && o[2] === 3 && o[3] === 4;
        let a = s ? "unzip" : "tar";
        let l = await we(a, s ? [
            "-Z1",
            t
        ] : [
            "-tf",
            t
        ]);
        let f = await we(a, s ? [
            "-Z",
            "--h",
            "--t",
            t
        ] : [
            "-tvf",
            t
        ]);
        let { plain, special } = _t(a, l, f);
        pt([
            ...plain,
            ...special
        ]);
        let y = gt(plain);
        await IYe_promises_1.mkdir(n, {
            recursive: true,
            mode: z
        });
        if (plain.length > 0) {
            await we(a, await St(a, t, n, special, i));
        }
        await Re(n);
        let O = y ? ip.join(n, y) : n;
        let v = await IYe_promises_1.readdir(O).catch((M)=>{
            throw G(M) === "ENOENT" ? new Xn(_e) : M;
        });
        for (let M of v){
            await IYe_promises_1.rename(ip.join(O, M), ip.join(e, M));
        }
    } finally{
        await IYe_promises_1.rm(t, {
            force: true
        });
        await IYe_promises_1.rm(i, {
            force: true
        });
        await IYe_promises_1.rm(n, {
            recursive: true,
            force: true
        });
    }
}
async function St(r, e, t, special, i) {
    let o = special.map((s)=>s.replace(/[*?[\\]/g, "\\$&"));
    if (r === "unzip") {
        return [
            "-oq",
            e,
            "-d",
            t,
            ...o.length > 0 ? [
                "-x",
                ...o
            ] : []
        ];
    }
    if (o.length === 0) {
        return [
            "-xf",
            e,
            "-C",
            t
        ];
    }
    await IYe_promises_1.writeFile(i, o.join(`
`) + `
`, {
        flag: "wx",
        mode: 384
    });
    return [
        "-xf",
        e,
        "-C",
        t,
        "-X",
        i
    ];
}
async function Et(r, e) {
    let t = await IYe_promises_1.open(r, "r");
    try {
        let n = Buffer.alloc(e);
        let { bytesRead } = await t.read(n, 0, e, 0);
        return n.subarray(0, bytesRead);
    } finally{
        await t.close();
    }
}
const { promises, constants } = IYe;
const xe = 448;
const bt = 384;
const Ot = 448;
const Se = constants.O_NOFOLLOW ?? 0;
const Mt = constants.O_NONBLOCK ?? 0;
const m = (()=>{
    class r extends Error {
        constructor(e, t){
            super(`path ${JSON.stringify(t)} ${e}`);
            this.name = "FileStoreError";
            this.reason = e;
            this.relPath = t;
        }
    }
    r.ESCAPES_ROOT = "escapes the store root";
    r.IS_A_SYMLINK = "is a symlink";
    r.NOT_A_FILE = "is not a regular file";
    r.NOT_A_DIRECTORY = "is not a directory";
    r.NOT_UTF8 = "is not valid utf-8";
    r.MOVE_DESTINATION_EXISTS = "already exists";
    return r;
})();
function Ee(r) {
    return r.startsWith("/") && !r.split("/").includes("..");
}
const ge = (()=>{
    class r {
        constructor(e, t, n = false){
            this.hashes = new Map;
            this.rootPath = e;
            this.removedOnDispose = t;
            this.decoder = n ? new TextDecoder("utf-8", {
                fatal: true
            }) : undefined;
        }
        static async open(e, t) {
            if (!vt()) {
                throw Error("FileStore requires O_NOFOLLOW support on this platform");
            }
            let n = false;
            try {
                await promises.lstat(e);
            } catch (error) {
                if (error.code !== "ENOENT") {
                    throw error;
                }
                n = true;
            }
            return new r(ip.resolve(e), n, t?.utf8 ?? false);
        }
        async createRoot() {
            await kt(this.rootPath);
        }
        root() {
            return {
                path: this.rootPath,
                removedOnDispose: this.removedOnDispose
            };
        }
        async dispose() {
            if (!this.removedOnDispose) {
                return;
            }
            await promises.rm(this.rootPath, {
                recursive: true,
                force: true
            });
        }
        async put(e, t, n) {
            let i = e.replace(/\\/g, "/");
            if (i.endsWith("/") || i.endsWith("/.") || i === "" || i === ".") {
                throw new m(m.NOT_A_FILE, e);
            }
            let o = this.resolveUnderRoot(e);
            let s = typeof t === "string" ? Hxt(t) : t;
            this.requireUtf8(e, s);
            await Le(this.rootPath, ip.dirname(o));
            await It(o, s, n?.executable ?? false);
        }
        async get(e) {
            let t = this.resolveUnderRoot(e);
            let n;
            try {
                n = await De(e, t);
            } catch (error) {
                if (error.code === "ENOENT") {
                    return null;
                }
                throw error;
            }
            let i;
            try {
                let o = await n.readFile();
                i = new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
            } finally{
                await n.close();
            }
            this.requireUtf8(e, i);
            return i;
        }
        async ls(e = "/") {
            let t = this.resolveUnderRoot(e);
            return new Set((await $e(this.rootPath, e, t)).map(([n])=>n));
        }
        async findSymlinks(e = "/") {
            let t = this.resolveUnderRoot(e);
            return Rt(this.rootPath, e, t);
        }
        async hashtree(e = "/") {
            let t = this.resolveUnderRoot(e);
            let n = re.nowNs();
            let i = Object.create(null);
            for (let [o, s] of (await $e(this.rootPath, e, t))){
                let a = await this.hashViaCache(o, s, n);
                if (a !== null) {
                    i[o] = a;
                }
            }
            return i;
        }
        async hashFile(e) {
            let t = this.resolveUnderRoot(e);
            let n;
            try {
                n = await promises.lstat(t, {
                    bigint: true
                });
            } catch (error) {
                if (error.code === "ENOENT") {
                    return null;
                }
                throw error;
            }
            if (n.isSymbolicLink()) {
                throw new m(m.IS_A_SYMLINK, e);
            }
            if (!n.isFile()) {
                throw new m(m.NOT_A_FILE, e);
            }
            let i = ip.relative(this.rootPath, t).split(ip.sep).join("/");
            return this.hashViaCache(i, t, re.nowNs());
        }
        async move(e, t) {
            let n = this.resolveUnderRoot(e);
            let i = this.resolveUnderRoot(t);
            if (n === this.rootPath || i === this.rootPath) {
                return;
            }
            if (await promises.stat(i).then(()=>true, ()=>false)) {
                throw new m(m.MOVE_DESTINATION_EXISTS, t);
            }
            await Le(this.rootPath, ip.dirname(i));
            await promises.rename(n, i);
        }
        async remove(e) {
            let t = this.resolveUnderRoot(e);
            if (t === this.rootPath) {
                return;
            }
            let n;
            try {
                n = await promises.lstat(t, {
                    bigint: true
                });
            } catch (error) {
                if (error.code === "ENOENT") {
                    return;
                }
                throw error;
            }
            if (n.isDirectory()) {
                await promises.rm(t, {
                    recursive: true,
                    force: true
                });
            } else {
                try {
                    await promises.unlink(t);
                } catch (error) {
                    if (error.code !== "ENOENT") {
                        throw error;
                    }
                }
            }
        }
        resolveUnderRoot(e) {
            let t = e.replace(/\\/g, "/").replace(/^\/+/, "");
            let n = t.split("/").filter((i)=>i !== "" && i !== ".");
            if (ip.posix.isAbsolute(t) || n.includes("..")) {
                throw new m(m.ESCAPES_ROOT, e);
            }
            if (n.length === 0) {
                return this.rootPath;
            }
            return ip.join(this.rootPath, ...n);
        }
        requireUtf8(e, t) {
            if (!this.decoder) {
                return;
            }
            try {
                this.decoder.decode(t);
            } catch  {
                throw new m(m.NOT_UTF8, e);
            }
        }
        async hashViaCache(e, t, n) {
            let i;
            try {
                i = await promises.lstat(t, {
                    bigint: true
                });
            } catch (error) {
                if (error.code === "ENOENT") {
                    return null;
                }
                throw error;
            }
            if (!i.isFile()) {
                return null;
            }
            let o = this.hashes.get(e);
            let sha;
            if (o !== undefined && Lt(o, i)) {
                sha = o.sha;
            } else {
                try {
                    sha = await re.hashFile(t);
                } catch (error) {
                    let l = error.code;
                    if (l === "ENOENT" || error instanceof m) {
                        return null;
                    }
                    if (l === "ELOOP" || l === "EMLINK") {
                        return null;
                    }
                    throw error;
                }
            }
            if ($t(i, n)) {
                this.hashes.set(e, {
                    mtimeNs: i.mtimeNs,
                    ctimeNs: i.ctimeNs,
                    size: i.size,
                    sha
                });
            }
            return sha;
        }
    }
    r.isPathLegal = Ee;
    return r;
})();
function vt() {
    return Se !== 0;
}
async function kt(rootPath) {
    let e = [];
    let t = rootPath;
    while(true){
        try {
            await promises.stat(t);
            break;
        } catch (error) {
            let o = error.code;
            if (o !== "ENOENT" && o !== "ENOTDIR" && o !== "ELOOP") {
                throw error;
            }
        }
        e.push(t);
        let n = ip.dirname(t);
        if (n === t) {
            break;
        }
        t = n;
    }
    for (let n of e.reverse()){
        try {
            await promises.mkdir(n, {
                mode: xe
            });
        } catch (error) {
            if (error.code !== "EEXIST") {
                throw error;
            }
        }
    }
}
async function Le(rootPath, e) {
    let t = ip.relative(rootPath, e);
    if (t === "") {
        return;
    }
    let n = rootPath;
    for (let i of t.split(ip.sep)){
        n = ip.join(n, i);
        try {
            await promises.mkdir(n, {
                mode: xe
            });
        } catch (error) {
            if (error.code !== "EEXIST") {
                throw error;
            }
        }
    }
}
async function It(r, e, t) {
    let n = t ? Ot : bt;
    let i = ip.join(ip.dirname(r), `.fs-${Gat.randomBytes(8).toString("hex")}.tmp`);
    let o;
    try {
        o = await promises.open(i, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | Se, n);
        await o.writeFile(e);
        await o.close();
        o = undefined;
        await promises.rename(i, r);
    } catch (error) {
        if (o) {
            await o.close().catch(()=>{});
        }
        await promises.unlink(i).catch(()=>{});
        throw error;
    }
}
async function De(r, e) {
    let t;
    try {
        t = await promises.open(e, constants.O_RDONLY | Se | Mt);
    } catch (error) {
        let i = error.code;
        if (i === "ELOOP" || i === "EMLINK") {
            throw new m(m.IS_A_SYMLINK, r);
        }
        throw error;
    }
    try {
        if (!(await t.stat()).isFile()) {
            throw new m(m.NOT_A_FILE, r);
        }
    } catch (error) {
        await t.close().catch(()=>{});
        throw error;
    }
    return t;
}
async function hashFile(r) {
    let e = Gat.createHash("sha256");
    let t = await De(ip.basename(r), r);
    let n = new Uint8Array(1048576);
    try {
        while(true){
            let { bytesRead } = await t.read(n, 0, n.length);
            if (bytesRead === 0) {
                break;
            }
            e.update(n.subarray(0, bytesRead));
        }
    } finally{
        await t.close();
    }
    return e.digest("hex");
}
async function $e(rootPath, e, t) {
    if (!await Tt(e, t)) {
        return [];
    }
    let n = [];
    await Ce(t, (i, o)=>{
        if (o.isFile()) {
            n.push([
                ip.relative(rootPath, i).split(ip.sep).join("/"),
                i
            ]);
        }
    });
    n.sort();
    return n;
}
async function Rt(rootPath, e, t) {
    let n = (s)=>ip.relative(rootPath, s).split(ip.sep).join("/");
    let i;
    try {
        i = await promises.lstat(t, {
            bigint: true
        });
    } catch (error) {
        let a = error.code;
        if (a === "ENOENT" || a === "ENOTDIR") {
            return new Set;
        }
        throw error;
    }
    if (i.isSymbolicLink()) {
        return new Set([
            n(t)
        ]);
    }
    if (!i.isDirectory()) {
        throw new m(m.NOT_A_DIRECTORY, e);
    }
    let o = new Set;
    await Ce(t, (s, a)=>{
        if (a.isSymbolicLink()) {
            o.add(n(s));
        }
    });
    return o;
}
async function Tt(r, e) {
    let t;
    try {
        t = await promises.lstat(e, {
            bigint: true
        });
    } catch (error) {
        let i = error.code;
        if (i === "ENOENT" || i === "ENOTDIR") {
            return false;
        }
        throw error;
    }
    if (!t.isDirectory()) {
        throw new m(m.NOT_A_DIRECTORY, r);
    }
    return true;
}
async function Ce(r, e) {
    let t = [
        r
    ];
    while(t.length){
        let n = t.pop();
        let i;
        try {
            i = await promises.readdir(n, {
                withFileTypes: true
            });
        } catch (error) {
            if (error.code === "ENOENT") {
                continue;
            }
            throw error;
        }
        for (let o of i){
            let s = ip.join(n, o.name);
            e(s, o);
            if (o.isDirectory() && !o.isSymbolicLink()) {
                t.push(s);
            }
        }
    }
}
function Lt(r, e) {
    return e.mtimeNs === r.mtimeNs && e.ctimeNs === r.ctimeNs && e.size === r.size;
}
function $t(r, e) {
    return (r.mtimeNs > r.ctimeNs ? r.mtimeNs : r.ctimeNs) < e - re.timestampTrustMarginNs;
}
const timestampTrustMarginNs = 2000000000n;
var re = {
    hashFile,
    timestampTrustMarginNs,
    nowNs: ()=>BigInt(Date.now()) * 1000000n
};
const Fe = ge;
if (Symbol.asyncDispose) {
    Object.defineProperty(ge.prototype, Symbol.asyncDispose, {
        value: ge.prototype.dispose,
        configurable: true,
        writable: true
    });
}
let u;
let I;
let ae;
let H;
let ce;
let d;
let U;
let oe;
let k;
let ze;
let se;
let Ge;
let He;
let be;
let Me;
let Pe;
let We;
let Oe;
let Ue;
let je;
let ie;
let ne;
let Be;
let Ye;
export const MEMORY_FLUSH_TIMEOUT_MS = 30000;
const j = ".anthropic-memory-store";
const Ke = 1;
function qe(memoryStoreId) {
    return Gat.createHash("sha256").update(`version ${Ke}
${memoryStoreId}`, "utf-8").digest("hex");
}
const Dt = 30000;
const Ct = 100;
const Ft = 20;
const Pt = 16;
const Wt = 32;
const Ut = 8;
const jt = 50;
export class SessionMemoryError extends Xn {
    constructor(r, e){
        super(r);
        this.name = "SessionMemoryError";
        if (e !== undefined) {
            this.cause = e;
        }
    }
}
class Ve {
    constructor(r, e, t){
        this.mode = r;
        this.cap = e;
        this.waiveWindow = t;
        this.attempted = 0;
        this.capped = 0;
        this.suppressed = 0;
    }
    takeSlot() {
        if (this.attempted >= this.cap) {
            this.capped++;
            return false;
        }
        this.attempted++;
        return true;
    }
}
export class SessionMemoryStores {
    constructor(r, e){
        u.add(this);
        I.set(this, undefined);
        ae.set(this, undefined);
        H.set(this, undefined);
        ce.set(this, undefined);
        d.set(this, undefined);
        U.set(this, undefined);
        oe.set(this, false);
        k.set(this, []);
        Cn(this, I, r, "f");
        Cn(this, ae, e.workdir, "f");
        Cn(this, H, e.syncIntervalMs ?? fpo, "f");
        R_r(he(this, H, "f"), "syncIntervalMs");
        Cn(this, ce, e.syncDeletions ?? "enabled", "f");
        Cn(this, d, Xh(r), "f");
        Cn(this, U, Date.now(), "f");
    }
    get roots() {
        return he(this, k, "f").map((r)=>r.files.root().path);
    }
    get readOnlyRoots() {
        return he(this, k, "f").filter((r)=>r.readOnly).map((r)=>r.files.root().path);
    }
    async download(r) {
        for (let e of r.resources){
            if (e.type !== "memory_store") {
                continue;
            }
            let t = he(this, u, "m", ze).call(this, e);
            let n;
            try {
                n = {
                    memoryStoreId: e.memory_store_id,
                    files: await Fe.open(t, {
                        utf8: true
                    }),
                    readOnly: e.access === "read_only",
                    baseline: new Map,
                    refusedShas: new Map,
                    pendingDeletes: new Map
                };
                if (!n.files.root().removedOnDispose) {
                    throw new SessionMemoryError(`something already exists at the memory store's path: ${t} (memory_store_id=${e.memory_store_id}); it must not exist when the session starts`);
                }
                try {
                    await n.files.createRoot();
                } catch (error) {
                    if (!B(error)) {
                        throw error;
                    }
                    throw new SessionMemoryError(`cannot create the memory store's folder: ${t} (memory_store_id=${e.memory_store_id}): ${error}; the worker host must make this mount path writable`, error);
                }
                await he(this, u, "m", Me).call(this, n);
                he(this, d, "f").info("downloaded memories", {
                    count: n.baseline.size,
                    memory_store_id: n.memoryStoreId,
                    dest: n.files.root().path
                });
                he(this, k, "f").push(n);
            } catch (error) {
                if (n) {
                    await n.files.dispose().catch(()=>{});
                }
                if (error instanceof SessionMemoryError) {
                    throw error;
                }
                throw new SessionMemoryError(`failed to download memory store memory_store_id=${e.memory_store_id}: ${error}`, error);
            }
        }
        Cn(this, U, Date.now(), "f");
    }
    async finish() {
        if (he(this, oe, "f")) {
            throw new Xn("finish() was already called: it is the session's last sync and runs once");
        }
        Cn(this, oe, true, "f");
        await this.syncAll(true);
    }
    async syncAll(r) {
        await Promise.all(he(this, k, "f").map((e)=>he(this, u, "m", Ge).call(this, e, r)));
        Cn(this, U, Date.now(), "f");
    }
    async syncIfDue() {
        if (Date.now() - he(this, U, "f") < he(this, H, "f")) {
            return;
        }
        await this.syncAll(false);
    }
    async flushWrites(r) {
        await Promise.all(he(this, k, "f").map((e)=>he(this, u, "m", He).call(this, e, r)));
    }
    async dispose() {
        for (let r of he(this, k, "f")){
            let e = r.files.root();
            try {
                let t = await he(this, u, "m", se).call(this, r);
                if (!t.markerOk && Object.keys(t.files).length > 0) {
                    he(this, d, "f").warn(`${t.distrustReason}; leaving the memory store folder on disk`, {
                        root: e.path,
                        memory_store_id: r.memoryStoreId
                    });
                    continue;
                }
                await r.files.dispose();
            } catch (error) {
                if (!(error instanceof m) && !B(error)) {
                    throw error;
                }
                he(this, d, "f").warn("failed to remove the memory store folder", {
                    root: r.files.root().path,
                    memory_store_id: r.memoryStoreId,
                    error: String(error)
                });
                continue;
            }
            if (e.removedOnDispose) {
                he(this, d, "f").info("removed memory store dir", {
                    dest: e.path,
                    memory_store_id: r.memoryStoreId
                });
            }
        }
    }
}
I = new WeakMap;
ae = new WeakMap;
H = new WeakMap;
ce = new WeakMap;
d = new WeakMap;
U = new WeakMap;
oe = new WeakMap;
k = new WeakMap;
u = new WeakSet;
ze = function(e) {
    if (e.mount_path) {
        if (!Ee(e.mount_path)) {
            throw new SessionMemoryError(`memory store mount_path is not a clean absolute path: ${JSON.stringify(e.mount_path)} (memory_store_id=${e.memory_store_id})`);
        }
        return e.mount_path;
    }
    return ip.join(he(this, ae, "f"), "memory", e.name || e.memory_store_id);
};
se = async (e)=>{
    let files = await e.files.hashtree();
    let n = files[j];
    delete files[j];
    if (n === qe(e.memoryStoreId)) {
        return {
            files,
            markerOk: true,
            distrustReason: null
        };
    }
    return {
        files,
        markerOk: false,
        distrustReason: n !== undefined ? "the marker file does not match this store" : "the marker file is gone"
    };
};
Ge = async function(e, t) {
    try {
        let n = await he(this, u, "m", se).call(this, e);
        let i = n.files;
        if (!n.markerOk) {
            if (Object.keys(i).length > 0) {
                he(this, d, "f").warn(`${n.distrustReason}; leaving the memory store folder as found and not syncing`, {
                    root: e.files.root().path,
                    memory_store_id: e.memoryStoreId
                });
                return;
            }
            await he(this, u, "m", be).call(this, e, "the folder or its marker is gone");
            return;
        }
        if (Object.keys(i).length === 0 && e.baseline.size > 1) {
            await he(this, u, "m", be).call(this, e, "every memory file is gone at once");
            return;
        }
        let o = new Map;
        for await (let [c, h] of he(this, u, "m", ie).call(this, e.memoryStoreId)){
            o.set(c, h);
        }
        let s = new Ve(he(this, ce, "f"), Math.max(Ut, Math.min(jt, Math.floor(e.baseline.size / 4))), t);
        let a = [];
        let l = new Map;
        let f = [
            ...new Set([
                ...o.keys(),
                ...Object.keys(i),
                ...e.baseline.keys()
            ])
        ].sort();
        for (let c of f){
            let h = o.get(c);
            let y = i[c];
            let O = e.baseline.get(c);
            let v;
            if (y === undefined && O !== undefined && h !== undefined && h.content_sha256 === O && !e.readOnly) {
                v = await he(this, u, "m", Be).call(this, e, c, h, O, s);
            } else {
                v = await he(this, u, "m", Pe).call(this, e, c, h, y, a);
            }
            if (v !== undefined) {
                l.set(c, v);
            }
        }
        e.baseline = l;
        await he(this, u, "m", Ue).call(this, e, a);
        if (s.suppressed > 0) {
            he(this, d, "f").debug("remote deletes are disabled; locally deleted memories stay on the server", {
                count: s.suppressed,
                memory_store_id: e.memoryStoreId
            });
        }
        if (s.capped > 0) {
            he(this, d, "f").warn(`delete cap reached: ${s.mode === "log_only" ? "would send" : "sent"} ${s.attempted} deletes, held ${s.capped} for later syncs`, {
                memory_store_id: e.memoryStoreId
            });
        }
    } catch (error) {
        he(this, d, "f").warn("memory sync failed", {
            memory_store_id: e.memoryStoreId,
            error: String(error)
        });
    }
};
He = async function(e, t) {
    let n = new Map;
    let i = new Set;
    let o = async ()=>{
        if (e.readOnly) {
            return;
        }
        let s = await he(this, u, "m", se).call(this, e);
        if (!s.markerOk) {
            he(this, d, "f").warn(`${s.distrustReason}; not uploading anything from the memory store folder`, {
                root: e.files.root().path,
                memory_store_id: e.memoryStoreId
            });
            return;
        }
        for (let [f, c] of Object.entries(s.files)){
            if (c !== e.baseline.get(f) && e.refusedShas.get(f) !== c) {
                n.set(f, c);
                i.add(f);
            }
        }
        if (n.size === 0 || t?.aborted) {
            return;
        }
        let a = new Map;
        for await (let [f, c] of he(this, u, "m", ie).call(this, e.memoryStoreId)){
            if (t?.aborted) {
                return;
            }
            a.set(f, c);
        }
        let l = [];
        for (let f of [
            ...n.keys()
        ].sort()){
            let c = n.get(f);
            let h = e.baseline.get(f);
            let y = a.get(f);
            if (y !== undefined && y.content_sha256 === c) {
                e.baseline.set(f, y.content_sha256);
                i.delete(f);
                continue;
            }
            if (y !== undefined && y.content_sha256 !== h) {
                he(this, d, "f").warn("memory changed both locally and remotely; the flush leaves the remote version", {
                    path: f,
                    memory_store_id: e.memoryStoreId
                });
                i.delete(f);
                continue;
            }
            l.push([
                f,
                c,
                y
            ]);
        }
        await he(this, u, "m", je).call(this, e, l, i, t);
    };
    try {
        await Bt(o(), t);
        if (t?.aborted && i.size > 0) {
            he(this, d, "f").warn(`memory flush cut off part-way; ${i.size} of ${n.size} changed files had not finished uploading`, {
                memory_store_id: e.memoryStoreId
            });
        }
    } catch (error) {
        he(this, d, "f").warn("memory flush failed", {
            memory_store_id: e.memoryStoreId,
            error: String(error)
        });
    }
};
be = async function(e, t) {
    he(this, d, "f").warn(`${t}; re-downloading the memory store folder instead of syncing`, {
        root: e.files.root().path,
        memory_store_id: e.memoryStoreId
    });
    await e.files.createRoot();
    await he(this, u, "m", Me).call(this, e);
};
Me = async function(e) {
    e.baseline = new Map;
    e.pendingDeletes.clear();
    await e.files.put(j, `version ${Ke}
${e.memoryStoreId}`);
    for await (let [t, n] of he(this, u, "m", ie).call(this, e.memoryStoreId, "full")){
        if (await he(this, u, "m", Oe).call(this, e, t, n.content ?? "")) {
            e.baseline.set(t, n.content_sha256);
        }
    }
};
Pe = async function(e, t, n, i, o) {
    let s = e.baseline.get(t);
    if (i !== undefined) {
        e.pendingDeletes.delete(t);
    }
    if (!n) {
        if (i === undefined) {
            e.pendingDeletes.delete(t);
            return;
        }
        if (s !== undefined) {
            if (i === s) {
                let h = await he(this, u, "m", We).call(this, e, t, s);
                if (h === undefined) {
                    return;
                }
                if (h === s) {
                    return s;
                }
                i = h;
            }
            if (e.readOnly) {
                he(this, d, "f").warn("memory deleted remotely but edited locally; keeping the file, which a read-only store cannot push", {
                    path: t,
                    memory_store_id: e.memoryStoreId
                });
            } else if (e.refusedShas.get(t) !== i) {
                he(this, d, "f").info("memory deleted remotely but edited locally; re-creating it from the file", {
                    path: t,
                    memory_store_id: e.memoryStoreId
                });
            }
        }
        if (e.readOnly) {
            return;
        }
        if (e.refusedShas.get(t) === i) {
            return;
        }
        return await he(this, u, "m", ne).call(this, e, t, i, undefined);
    }
    let n_content_sha256 = n.content_sha256;
    let l = n_content_sha256 !== s;
    let f = i !== undefined && i !== s && i !== n_content_sha256;
    let c = !e.readOnly && f;
    if (i === undefined && s !== undefined) {
        if (l) {
            he(this, d, "f").warn("memory deleted locally but changed remotely; restoring the remote version", {
                path: t,
                memory_store_id: e.memoryStoreId
            });
            e.pendingDeletes.delete(t);
            o.push([
                t,
                n
            ]);
        }
        return s;
    }
    if (l) {
        if (i === n_content_sha256) {
            return n_content_sha256;
        }
        if (f) {
            he(this, d, "f").warn("memory changed both locally and remotely; keeping the remote version", {
                path: t,
                memory_store_id: e.memoryStoreId
            });
        }
        o.push([
            t,
            n
        ]);
        return s;
    }
    if (c) {
        if (e.refusedShas.get(t) === i) {
            return n_content_sha256;
        }
        return await he(this, u, "m", ne).call(this, e, t, i, n) ?? n_content_sha256;
    }
    return n_content_sha256;
};
We = async function(e, t, n) {
    let i;
    try {
        i = await e.files.hashFile(t);
    } catch (error) {
        if (!(error instanceof m) && !B(error)) {
            throw error;
        }
        return n;
    }
    if (i === null) {
        return;
    }
    if (i !== n) {
        return i;
    }
    try {
        await e.files.remove(t);
    } catch (error) {
        if (!(error instanceof m) && !B(error)) {
            throw error;
        }
        he(this, d, "f").warn("failed to remove memory deleted remotely", {
            path: t,
            memory_store_id: e.memoryStoreId,
            error: String(error)
        });
        return n;
    }
};
Oe = async function(e, t, n) {
    try {
        await e.files.put(t, n);
    } catch (error) {
        if (!(error instanceof m) && !B(error)) {
            throw error;
        }
        he(this, d, "f").warn("failed to write memory", {
            path: t,
            memory_store_id: e.memoryStoreId,
            error: String(error)
        });
        return false;
    }
    return true;
};
Ue = async function(e, t) {
    if (t.length === 0) {
        return;
    }
    let n = async (s, a)=>{
        let l;
        try {
            l = await he(this, I, "f").beta.memoryStores.memories.retrieve(a.id, {
                memory_store_id: e.memoryStoreId,
                view: "full"
            });
        } catch (error) {
            if (nY(error, 404)) {
                return;
            }
            he(this, d, "f").warn("failed to fetch memory content", {
                path: s,
                memory_store_id: e.memoryStoreId,
                error: String(error)
            });
            return;
        }
        if (await he(this, u, "m", Oe).call(this, e, s, l.content ?? "")) {
            e.baseline.set(s, l.content_sha256);
        }
    };
    let i = t[Symbol.iterator]();
    let o = async ()=>{
        for (let [s, a] of i){
            await n(s, a);
        }
    };
    await Promise.all(Array.from({
        length: Math.min(Pt, t.length)
    }, o));
};
je = async function(e, t, n, i) {
    let o = t[Symbol.iterator]();
    let s = async ()=>{
        for (let [a, l, f] of o){
            if (i?.aborted) {
                return;
            }
            let c = await he(this, u, "m", ne).call(this, e, a, l, f);
            n.delete(a);
            if (c !== undefined) {
                e.baseline.set(a, c);
            }
        }
    };
    await Promise.all(Array.from({
        length: Math.min(Wt, t.length)
    }, s));
};
ie = async function*(memory_store_id, view = "basic") {
    let limit = view === "basic" ? Ct : Ft;
    for await (let i of he(this, I, "f").beta.memoryStores.memories.list(memory_store_id, {
        view,
        limit
    })){
        if (i.type !== "memory") {
            continue;
        }
        let o = i.path.replace(/^\/+/, "");
        if (o === j) {
            he(this, d, "f").warn("the server listed the reserved marker path; skipping", {
                path: i.path,
                memory_store_id
            });
            continue;
        }
        yield [
            o,
            i
        ];
    }
};
ne = async function r(e, t, n, i) {
    try {
        let o = await e.files.get(t);
        if (o === null) {
            return;
        }
        let content = Dxt(o);
        let a = i ? await he(this, I, "f").beta.memoryStores.memories.update(i.id, {
            memory_store_id: e.memoryStoreId,
            content,
            precondition: {
                type: "content_sha256",
                content_sha256: i.content_sha256
            }
        }) : await he(this, I, "f").beta.memoryStores.memories.create(e.memoryStoreId, {
            path: `/${t}`,
            content
        });
        e.refusedShas.delete(t);
        return a.content_sha256;
    } catch (error) {
        if (i && nY(error, 404)) {
            return await he(this, u, "m", r).call(this, e, t, n, undefined);
        }
        let s = error instanceof m || nY(error, 400) || nY(error, 413);
        if (i && nY(error, 409)) {
            he(this, d, "f").warn("memory changed both locally and remotely; the upload was refused and the local edit loses", {
                path: t,
                memory_store_id: e.memoryStoreId
            });
        } else if (s && n !== undefined) {
            e.refusedShas.set(t, n);
            he(this, d, "f").warn("the server rejected this memory file, so it stays un-synced until its content changes", {
                path: t,
                memory_store_id: e.memoryStoreId,
                rejection: String(error)
            });
        } else {
            he(this, d, "f").warn("failed to upload memory", {
                path: t,
                memory_store_id: e.memoryStoreId,
                error: String(error)
            });
        }
        return;
    }
};
Be = async function(e, t, n, i, o) {
    if (o.mode === "disabled") {
        o.suppressed++;
        return i;
    }
    let s = e.pendingDeletes.get(t);
    if (s === undefined) {
        s = Date.now();
        e.pendingDeletes.set(t, s);
    }
    if (!o.waiveWindow && Date.now() - s < Dt) {
        return i;
    }
    let a;
    let l;
    try {
        a = await e.files.hashFile(j) === qe(e.memoryStoreId);
        l = await e.files.hashFile(t) === null;
    } catch (error) {
        if (!(error instanceof m) && !B(error)) {
            throw error;
        }
        l = false;
        a = false;
    }
    if (!a) {
        return i;
    }
    if (!l) {
        e.pendingDeletes.delete(t);
        return i;
    }
    if (!o.takeSlot()) {
        return i;
    }
    if (o.mode === "log_only") {
        he(this, d, "f").info("log-only: sync would delete this memory on the server", {
            path: t,
            memory_store_id: e.memoryStoreId
        });
        return i;
    }
    let f = await he(this, u, "m", Ye).call(this, e, t, n, i);
    if (f === undefined) {
        e.pendingDeletes.delete(t);
    }
    return f;
};
Ye = async function(e, path, n, expected_content_sha256) {
    try {
        await he(this, I, "f").beta.memoryStores.memories.delete(n.id, {
            memory_store_id: e.memoryStoreId,
            expected_content_sha256
        });
    } catch (error) {
        if (nY(error, 404)) {
            return;
        }
        if (nY(error, 409) || nY(error, 412)) {
            he(this, d, "f").warn("memory deleted locally but changed remotely; keeping the remote version", {
                path,
                memory_store_id: e.memoryStoreId
            });
        } else {
            he(this, d, "f").warn("failed to delete memory", {
                path,
                memory_store_id: e.memoryStoreId,
                error: String(error)
            });
        }
        return expected_content_sha256;
    }
    he(this, d, "f").info("propagated local deletion", {
        path,
        memory_store_id: e.memoryStoreId
    });
};
function B(error) {
    return typeof error === "object" && error !== null && typeof error.code === "string";
}
async function Bt(r, e) {
    if (!e) {
        await r;
        return;
    }
    let t;
    let n = new Promise((resolve)=>{
        t = resolve;
        if (e.aborted) {
            resolve();
        }
    });
    e.addEventListener("abort", t, {
        once: true
    });
    try {
        await Promise.race([
            r,
            n
        ]);
    } finally{
        e.removeEventListener("abort", t);
    }
}
let le;
let _;
let S;
let K;
let A;
let b;
let ve;
let fe;
let V;
let de;
let me;
let D;
let C;
let Y;
let x;
let X;
let N;
let tt;
let Je;
const Ze = 102400;
const nt = 120000;
const Yt = 262144;
const highWaterMark = 65536;
const Qe = Buffer.from(`
`);
const J = 102400;
const zt = 2000;
const Gt = 200;
class ot extends Xn {
    constructor(r){
        super(`bash command timed out after ${r}ms`);
        this.name = "BashTimeoutError";
        this.timeoutMs = r;
    }
}
const Ht = /\x1b\[[0-9;?]*[ -/]*[@-~]/g;
const w_glob = w.glob;
function st(maxFileBytes) {
    if (maxFileBytes === undefined) {
        return Yt;
    }
    return maxFileBytes;
}
function F(unrestrictedPaths) {
    if (unrestrictedPaths === undefined) {
        return;
    }
    throw new Xn("The `unrestrictedPaths` option you passed to the agent toolset (AgentToolContext) is no longer supported. The toolset's file tools (read, write, edit, glob, grep) are now always confined to the working directory plus the directories listed in `allowedRoots`. Remove `unrestrictedPaths` from your context; to let the file tools reach any other directory, add it to `allowedRoots`.");
}
export function betaAgentToolset20260401(r) {
    return [
        Jt(r),
        Zt(r),
        er(r),
        tr(r),
        ir(r),
        nr(r)
    ];
}
async function Q(r, e) {
    F(r.unrestrictedPaths);
    return Ie(r.workdir, e, {
        allowedRoots: r.allowedRoots ?? []
    });
}
function at(r, e) {
    return pe(r.readOnlyRoots ?? [], e);
}
function Vt() {
    let r = {};
    for (let [e, t] of Object.entries(process.env)){
        if (e.startsWith("ANTHROPIC_")) {
            continue;
        }
        r[e] = t;
    }
    return r;
}
const Xt = (()=>{
    class r {
        constructor(cwd, t = Vt()){
            le.add(this);
            _.set(this, undefined);
            S.set(this, "");
            K.set(this, false);
            A.set(this, false);
            b.set(this, null);
            Cn(this, _, ke.spawn("/bin/bash", [
                "--noprofile",
                "--norc"
            ], {
                cwd,
                env: {
                    ...t,
                    PS1: "",
                    PS2: "",
                    TERM: "dumb"
                },
                stdio: [
                    "pipe",
                    "pipe",
                    "pipe"
                ],
                detached: true
            }), "f");
            he(this, _, "f").stdout.setEncoding("utf8");
            he(this, _, "f").stderr.setEncoding("utf8");
            he(this, _, "f").stdout.on("data", (n)=>he(this, le, "m", ve).call(this, n));
            he(this, _, "f").stderr.on("data", (n)=>he(this, le, "m", ve).call(this, n));
            he(this, _, "f").once("close", ()=>{
                Cn(this, A, true, "f");
                let n = he(this, b, "f");
                Cn(this, b, null, "f");
                n?.resolve();
            });
        }
        get closed() {
            return he(this, A, "f");
        }
        async exec(e, t = {}) {
            if (he(this, A, "f")) {
                throw new Xn("bash session terminated");
            }
            let n = t.timeoutMs ?? nt;
            let t_signal = t.signal;
            t_signal?.throwIfAborted();
            Cn(this, S, "", "f");
            Cn(this, K, false, "f");
            let sentinel = `__ANT_CMD_${rt.randomUUID()}_DONE__`;
            let s = `${sentinel.slice(0, 8)}''${sentinel.slice(8)}`;
            let a = `{ ${e}
} </dev/null 2>&1; printf '\\n${s}%d\\n' $?
`;
            he(this, _, "f").stdin.write(a);
            if (he(this, S, "f").indexOf(sentinel) < 0) {
                let { promise, resolve } = DJt();
                Cn(this, b, {
                    sentinel,
                    resolve
                }, "f");
                let M;
                let ee;
                try {
                    await Promise.race([
                        promise,
                        new Promise((resolvePromise, rejectPromise)=>{
                            M = setTimeout(()=>rejectPromise(new ot(n)), n);
                        }),
                        new Promise((resolvePromise, rejectPromise)=>{
                            if (!t_signal) {
                                return;
                            }
                            ee = ()=>rejectPromise(t_signal.reason);
                            t_signal.addEventListener("abort", ee, {
                                once: true
                            });
                        })
                    ]);
                } finally{
                    if (M) {
                        clearTimeout(M);
                    }
                    if (ee && t_signal) {
                        t_signal.removeEventListener("abort", ee);
                    }
                    Cn(this, b, null, "f");
                }
            }
            let l = he(this, S, "f").indexOf(sentinel);
            if (l < 0) {
                throw new Xn("bash session terminated");
            }
            let c = he(this, S, "f").slice(l + sentinel.length).match(/^(-?\d+)/);
            let exitCode = c ? parseInt(c[1], 10) : -1;
            let output = he(this, S, "f").slice(0, l).replace(Ht, "").replace(/\n+$/, "");
            if (he(this, K, "f")) {
                output = `[output truncated]
${output}`;
            }
            return {
                output,
                exitCode
            };
        }
        close() {
            if (he(this, A, "f")) {
                return;
            }
            Cn(this, A, true, "f");
            let e = he(this, b, "f");
            Cn(this, b, null, "f");
            e?.resolve();
            he(this, _, "f").stdout.destroy();
            he(this, _, "f").stderr.destroy();
            he(this, _, "f").stdin.destroy();
            try {
                process.kill(-he(this, _, "f").pid, "SIGKILL");
            } catch  {
                he(this, _, "f").kill("SIGKILL");
            }
            he(this, _, "f").unref();
        }
    }
    _ = new WeakMap;
    S = new WeakMap;
    K = new WeakMap;
    A = new WeakMap;
    b = new WeakMap;
    le = new WeakSet;
    ve = function(t) {
        Cn(this, S, he(this, S, "f") + t, "f");
        if (he(this, S, "f").length > Ze) {
            Cn(this, S, he(this, S, "f").slice(he(this, S, "f").length - Ze), "f");
            Cn(this, K, true, "f");
        }
        if (he(this, b, "f") && he(this, S, "f").indexOf(he(this, b, "f").sentinel) >= 0) {
            let n = he(this, b, "f");
            Cn(this, b, null, "f");
            n.resolve();
        }
    };
    return r;
})();
function Jt(r) {
    F(r.unrestrictedPaths);
    let e;
    let t = Promise.resolve();
    return R({
        name: "bash",
        description: "Run a bash command in a persistent shell. State (cwd, env vars) persists across calls.",
        inputSchema: {
            type: "object",
            properties: {
                command: {
                    type: "string",
                    description: "The command to run"
                },
                restart: {
                    type: "boolean",
                    description: "Restart the persistent shell before running"
                },
                timeout_ms: {
                    type: "integer",
                    description: "Per-call timeout in milliseconds"
                }
            }
        },
        run: async ({ command, restart, timeout_ms }, s)=>{
            let a = t;
            let l = DJt();
            t = l.promise;
            try {
                await a;
            } catch  {}
            try {
                if (restart) {
                    e?.close();
                    e = undefined;
                }
                if (!command) {
                    if (restart) {
                        return "bash session restarted";
                    }
                    throw new am("bash: command is required");
                }
                e ??= new Xt(r.workdir, r.env);
                try {
                    let { output, exitCode } = await e.exec(command, {
                        timeoutMs: timeout_ms ?? nt,
                        signal: s?.signal
                    });
                    if (exitCode !== 0) {
                        throw new am(output || `exit ${exitCode}`);
                    }
                    return output;
                } catch (error) {
                    if (error instanceof am) {
                        throw error;
                    }
                    e.close();
                    e = undefined;
                    throw new am(`bash: ${error instanceof Error ? error.message : String(error)}`);
                }
            } finally{
                l.resolve();
            }
        },
        close: ()=>{
            e?.close();
            e = undefined;
        }
    });
}
function Zt(r) {
    F(r.unrestrictedPaths);
    return R({
        name: "read",
        description: "Read a UTF-8 text file relative to the workdir.",
        inputSchema: {
            type: "object",
            properties: {
                file_path: {
                    type: "string"
                },
                view_range: {
                    type: "array",
                    items: {
                        type: "integer"
                    },
                    description: "[start_line, end_line] 1-indexed inclusive"
                }
            },
            required: [
                "file_path"
            ]
        },
        run: async ({ file_path, view_range })=>{
            if (!file_path) {
                throw new am("read: file_path is required");
            }
            let n = await Q(r, file_path);
            if (view_range?.length && view_range.length !== 2) {
                throw new am("read: view_range must be [start_line, end_line]");
            }
            let i;
            try {
                let c = await w.stat(n);
                if (!c.isFile()) {
                    throw new am(`read: ${file_path} is not a regular file`);
                }
                let h = st(r.maxFileBytes);
                if (h !== null && c.size > h) {
                    if (!view_range?.length) {
                        throw new am(`read: ${file_path} is ${c.size} bytes, exceeds ${h}-byte limit. Use the view_range parameter to read specific line ranges, e.g. view_range: [1, 500].`);
                    }
                    let [y, O] = view_range;
                    return await Qt(n, file_path, y, O, h);
                }
                i = await w.readFile(n, "utf8");
            } catch (error) {
                if (error instanceof am) {
                    throw error;
                }
                throw new am(`read: ${P(error, file_path)}`);
            }
            if (!view_range?.length) {
                return i;
            }
            let [o, s] = view_range;
            let a = i.split(`
`);
            let l = Math.max(0, o - 1);
            let f = s > 0 ? s : a.length;
            return a.slice(l, f).join(`
`);
        }
    });
}
async function Qt(r, file_path, t, n, i) {
    let o = new ct(file_path, t, n, i);
    if (o.rangeIsEmpty()) {
        return "";
    }
    let s = Z.createReadStream(r, {
        highWaterMark
    });
    try {
        for await (let a of s){
            o.collectFrom(a);
            if (o.rangeIsCollected()) {
                break;
            }
        }
    } finally{
        s.destroy();
    }
    return o.text();
}
class ct {
    constructor(r, e, t, n){
        fe.add(this);
        V.set(this, undefined);
        de.set(this, undefined);
        me.set(this, undefined);
        D.set(this, undefined);
        C.set(this, undefined);
        Y.set(this, undefined);
        x.set(this, 0);
        X.set(this, []);
        N.set(this, 0);
        Cn(this, V, r, "f");
        Cn(this, de, e, "f");
        Cn(this, me, t, "f");
        Cn(this, D, Math.max(0, e - 1), "f");
        Cn(this, C, t > 0 ? t : Infinity, "f");
        Cn(this, Y, n, "f");
    }
    rangeIsEmpty() {
        return he(this, C, "f") <= he(this, D, "f");
    }
    rangeIsCollected() {
        return he(this, x, "f") >= he(this, C, "f");
    }
    collectFrom(r) {
        let e;
        let t = 0;
        while(t < r.length && !this.rangeIsCollected()){
            let n = r.indexOf(10, t);
            let i = n < 0 ? r.length : n;
            if (he(this, x, "f") >= he(this, D, "f")) {
                he(this, fe, "m", tt).call(this, r.subarray(t, i), n >= 0);
            }
            if (n < 0) {
                break;
            }
            Cn(this, x, (e = he(this, x, "f"), e++, e), "f");
            t = n + 1;
        }
    }
    text() {
        return Buffer.concat(he(this, X, "f"), he(this, N, "f")).toString("utf8");
    }
}
V = new WeakMap;
de = new WeakMap;
me = new WeakMap;
D = new WeakMap;
C = new WeakMap;
Y = new WeakMap;
x = new WeakMap;
X = new WeakMap;
N = new WeakMap;
fe = new WeakSet;
tt = function(e, t) {
    he(this, X, "f").push(e);
    Cn(this, N, he(this, N, "f") + e.length, "f");
    if (t && he(this, x, "f") + 1 < he(this, C, "f")) {
        he(this, X, "f").push(Qe);
        Cn(this, N, he(this, N, "f") + Qe.length, "f");
    }
    if (he(this, N, "f") > he(this, Y, "f")) {
        throw he(this, fe, "m", Je).call(this);
    }
};
Je = function() {
    if (he(this, C, "f") - he(this, D, "f") === 1) {
        return new am(`read: line ${he(this, D, "f") + 1} of ${he(this, V, "f")} alone exceeds ${he(this, Y, "f")}-byte limit. The read tool cannot return part of a line, so view_range cannot narrow this further.`);
    }
    return new am(`read: view_range [${he(this, de, "f")}, ${he(this, me, "f")}] of ${he(this, V, "f")} exceeds ${he(this, Y, "f")}-byte limit. Narrow the view_range to read a smaller portion.`);
};
function er(r) {
    F(r.unrestrictedPaths);
    return R({
        name: "write",
        description: "Write a UTF-8 text file relative to the workdir, creating parent directories as needed.",
        inputSchema: {
            type: "object",
            properties: {
                file_path: {
                    type: "string"
                },
                content: {
                    type: "string"
                }
            },
            required: [
                "file_path",
                "content"
            ]
        },
        run: async ({ file_path, content })=>{
            if (!file_path) {
                throw new am("write: file_path is required");
            }
            let n = await Q(r, file_path);
            let i = await at(r, n);
            if (i !== undefined) {
                throw new am(`write: ${file_path} is inside read-only directory ${i}`);
            }
            try {
                await w.mkdir(g.dirname(n), {
                    recursive: true,
                    mode: z
                });
                await ye(n, content ?? "");
            } catch (error) {
                throw new am(`write: ${P(error, file_path)}`);
            }
            return `wrote ${Buffer.byteLength(content ?? "")} bytes to ${file_path}`;
        }
    });
}
function tr(r) {
    F(r.unrestrictedPaths);
    return R({
        name: "edit",
        description: "Replace old_string with new_string in a file. old_string must be unique unless replace_all.",
        inputSchema: {
            type: "object",
            properties: {
                file_path: {
                    type: "string"
                },
                old_string: {
                    type: "string"
                },
                new_string: {
                    type: "string"
                },
                replace_all: {
                    type: "boolean"
                }
            },
            required: [
                "file_path",
                "old_string",
                "new_string"
            ]
        },
        run: async ({ file_path, old_string, new_string, replace_all })=>{
            if (!file_path) {
                throw new am("edit: file_path is required");
            }
            if (!old_string) {
                throw new am("edit: old_string is required");
            }
            let o = await Q(r, file_path);
            let s = await at(r, o);
            if (s !== undefined) {
                throw new am(`edit: ${file_path} is inside read-only directory ${s}`);
            }
            let a;
            try {
                let c = await w.stat(o);
                if (!c.isFile()) {
                    throw new am(`edit: ${file_path} is not a regular file`);
                }
                let h = st(r.maxFileBytes);
                if (h !== null && c.size > h) {
                    throw new am(`edit: ${file_path} is ${c.size} bytes, exceeds ${h}-byte limit. The edit tool loads the whole file and cannot modify a file this large.`);
                }
                a = await w.readFile(o, "utf8");
            } catch (error) {
                if (error instanceof am) {
                    throw error;
                }
                throw new am(`edit: ${P(error, file_path)}`);
            }
            let l = a.split(old_string).length - 1;
            if (l === 0) {
                throw new am(`edit: old_string not found in ${file_path}`);
            }
            let f;
            if (replace_all) {
                f = a.split(old_string).join(new_string);
            } else {
                if (l > 1) {
                    throw new am(`edit: old_string appears ${l} times in ${file_path} (must be unique)`);
                }
                f = a.replace(old_string, ()=>new_string);
            }
            try {
                await ye(o, f);
            } catch (error) {
                throw new am(`edit: write: ${P(error, file_path)}`);
            }
            return `edited ${file_path} (${replace_all ? l : 1} replacement(s))`;
        }
    });
}
function rr(pattern) {
    return pattern.split(/[\\/{},]/).includes("..");
}
function ir(r) {
    F(r.unrestrictedPaths);
    return R({
        name: "glob",
        description: "Match files under the workdir against a glob pattern. Results are mtime-sorted, newest first.",
        inputSchema: {
            type: "object",
            properties: {
                pattern: {
                    type: "string"
                },
                path: {
                    type: "string",
                    description: "Directory to search in. Defaults to the workdir."
                }
            },
            required: [
                "pattern"
            ]
        },
        run: async ({ pattern, path })=>{
            if (!pattern) {
                throw new am("glob: pattern is required");
            }
            if (g.isAbsolute(pattern)) {
                throw new am("glob: absolute pattern not permitted; pass a relative pattern (and optionally path)");
            }
            if (rr(pattern)) {
                throw new am('glob: ".." is not permitted in the pattern');
            }
            let cwd = path ? await Q(r, path) : g.resolve(r.workdir);
            let i = path ? cwd : await q(cwd);
            let o = [];
            let s = lt;
            try {
                for await (let a of w_glob(pattern, {
                    cwd,
                    withFileTypes: true,
                    exclude: (l)=>l.name === ".git" || l.name === "node_modules"
                })){
                    if (s-- <= 0) {
                        break;
                    }
                    if (!a.isFile()) {
                        continue;
                    }
                    let l = g.join(a.parentPath, a.name);
                    let f;
                    try {
                        f = await w.realpath(l);
                    } catch  {
                        continue;
                    }
                    if (!te(i, f)) {
                        continue;
                    }
                    let mtime = 0;
                    try {
                        mtime = (await w.stat(l)).mtimeMs;
                    } catch  {}
                    o.push({
                        path: l,
                        mtime
                    });
                }
            } catch (error) {
                throw new am(`glob: ${error instanceof Error ? error.message : String(error)}`);
            }
            if (o.length === 0) {
                return "no matches";
            }
            o.sort((a, l)=>l.mtime - a.mtime);
            return o.slice(0, Gt).map((a)=>a.path).join(`
`);
        }
    });
}
function nr(r) {
    F(r.unrestrictedPaths);
    return R({
        name: "grep",
        description: "Search file contents for a regex. Uses ripgrep if available, otherwise a built-in walker.",
        inputSchema: {
            type: "object",
            properties: {
                pattern: {
                    type: "string"
                },
                path: {
                    type: "string"
                }
            },
            required: [
                "pattern"
            ]
        },
        run: async ({ pattern, path }, n)=>{
            if (!pattern) {
                throw new am("grep: pattern is required");
            }
            let i = g.resolve(r.workdir);
            if (path) {
                i = await Q(r, path);
            }
            let o = await lr();
            if (o) {
                return or(o, pattern, i, n?.signal);
            }
            return sr(pattern, i, n?.signal);
        }
    });
}
function or(r, pattern, t, signal) {
    return new Promise((resolve, reject)=>{
        let s = ke.spawn(r, [
            "-n",
            "--no-heading",
            "-e",
            pattern,
            "--",
            t
        ], {
            ...signal ? {
                signal
            } : {}
        });
        let a = "";
        let l = "";
        let f = false;
        s.stdout.on("data", (c)=>{
            if (f) {
                return;
            }
            a += c;
            if (a.length > J) {
                f = true;
                a = a.slice(0, J);
                s.kill("SIGKILL");
            }
        });
        s.stderr.on("data", (c)=>l += c);
        s.on("close", (c)=>{
            if (signal?.aborted) {
                return reject(new am("grep: aborted"));
            }
            if (f) {
                return resolve(a + `
[output truncated at ${J} bytes]`);
            }
            if (c === 0) {
                return resolve(a);
            }
            if (c === 1) {
                return resolve("no matches");
            }
            reject(new am(`grep: rg failed: ${l || `exit ${c}`}`));
        });
        s.on("error", (c)=>{
            if (signal?.aborted) {
                return reject(new am("grep: aborted"));
            }
            reject(new am(`grep: rg failed: ${c.message}`));
        });
    });
}
async function sr(pattern, e, t) {
    let n;
    try {
        n = new RegExp(pattern);
    } catch (error) {
        throw new am(`grep: invalid regex: ${error instanceof Error ? error.message : String(error)}`);
    }
    let i = [];
    let o = J;
    let s = (l)=>{
        o -= l.length + 1;
        if (o < 0) {
            i.push(`[output truncated at ${J} bytes]`);
            return false;
        }
        i.push(l);
        return true;
    };
    if ((await w.stat(e).catch(()=>null))?.isFile()) {
        await et(e, n, s);
    } else {
        await cr(e, "", (l)=>et(g.join(e, l), n, s), t);
    }
    if (t?.aborted) {
        throw new am("grep: aborted");
    }
    if (i.length === 0) {
        return "no matches";
    }
    return i.join(`
`);
}
async function et(r, e, t) {
    let input = Z.createReadStream(r, {
        encoding: "utf8"
    });
    let i = it.createInterface({
        input,
        crlfDelay: Infinity
    });
    let o = 0;
    try {
        for await (let s of i){
            o++;
            if (s.length > zt) {
                continue;
            }
            if (e.test(s) && !t(`${r}:${o}:${s}`)) {
                return false;
            }
        }
    } catch  {} finally{
        input.destroy();
    }
    return true;
}
const ar = 40;
var lt = 50000;
async function cr(r, e, t, n) {
    let i = lt;
    async function o(s, a) {
        if (a > ar) {
            return true;
        }
        if (n?.aborted) {
            return false;
        }
        let l;
        try {
            l = await w.readdir(g.join(r, s), {
                withFileTypes: true
            });
        } catch  {
            return true;
        }
        for (let f of l){
            if (f.name === ".git" || f.name === "node_modules") {
                continue;
            }
            if (i-- <= 0) {
                return false;
            }
            if (n?.aborted) {
                return false;
            }
            let c = s ? g.join(s, f.name) : f.name;
            if (f.isDirectory()) {
                if (!await o(c, a + 1)) {
                    return false;
                }
            } else if (f.isFile()) {
                if (await t(c) === false) {
                    return false;
                }
            }
        }
        return true;
    }
    await o(e, 0);
}
async function lr() {
    let r = (process.env.PATH ?? "").split(g.delimiter);
    for (let e of r){
        let t = g.join(e, "rg");
        try {
            await w.access(t, Z.constants.X_OK);
            return t;
        } catch  {}
    }
    return null;
}
