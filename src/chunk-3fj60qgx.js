import { On, JZ } from "/$bunfs/root/chunk-xgw72tt1.js";
import { ve, Xsn } from "/$bunfs/root/chunk-6kc68p18.js";
import { V1 } from "/$bunfs/root/chunk-h6pppnx2.js";
import { Wi } from "/$bunfs/root/chunk-f6bzd9ck.js";
import { r8e } from "/$bunfs/root/chunk-nnawdxg4.js";
import { Mse } from "/$bunfs/root/chunk-m007m726.js";
import { ODt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { randomUUID } from "crypto";
import { once } from "events";
import { constants, createWriteStream } from "fs";
import { lstat, open, readdir, realpath, rename, stat } from "fs/promises";
import { basename, dirname, isAbsolute, join } from "path";
import { createInterface } from "readline";
import { execFile } from "child_process";
import { promisify } from "util";
const se = promisify(execFile);
async function iDt(cwd) {
    let n = V1("git");
    if (n === null) {
        return [];
    }
    try {
        let { stdout } = await se(n, [
            "-c",
            "core.hooksPath=/dev/null",
            "-c",
            "core.fsmonitor=",
            "worktree",
            "list",
            "--porcelain"
        ], {
            cwd,
            timeout: 5000,
            windowsHide: true
        });
        if (!stdout) {
            return [];
        }
        return stdout.split(`
`).filter((t)=>t.startsWith("worktree ")).map((t)=>On(t.slice(9)));
    } catch  {
        return [];
    }
}
const rw = 65536;
const Zrn = new Set([
    "sdk-cli",
    "sdk-ts",
    "sdk-py"
]);
function J2s(e, n) {
    let r = aPe(e, "entrypoint") ?? KY(n, "entrypoint");
    if (r && Zrn.has(r)) {
        return true;
    }
    let t = e.split(`
`).find((a)=>a.includes('"parentUuid":')) ?? e;
    let i = aPe(t, "sessionKind");
    return i === "daemon" || i === "daemon-worker";
}
const ye = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function MP(e) {
    if (typeof e !== "string") {
        return null;
    }
    if (ye.test(e)) {
        return e;
    }
    return null;
}
function G(e) {
    if (!e.includes("\\")) {
        return e;
    }
    try {
        return JSON.parse(`"${e}"`);
    } catch  {
        return e;
    }
}
function aPe(e, n) {
    let r = [
        `"${n}":"`,
        `"${n}": "`
    ];
    for (let t of r){
        let i = e.indexOf(t);
        if (i < 0) {
            continue;
        }
        let a = i + t.length;
        let o = a;
        while(o < e.length){
            if (e[o] === "\\") {
                o += 2;
                continue;
            }
            if (e[o] === '"') {
                return G(e.slice(a, o));
            }
            o++;
        }
    }
}
function KY(e, n) {
    let r = [
        `"${n}":"`,
        `"${n}": "`
    ];
    let t;
    let i = -1;
    for (let a of r){
        let o = 0;
        while(true){
            let u = e.indexOf(a, o);
            if (u < 0) {
                break;
            }
            let c = u + a.length;
            let s = c;
            while(s < e.length){
                if (e[s] === "\\") {
                    s += 2;
                    continue;
                }
                if (e[s] === '"') {
                    if (u > i) {
                        t = G(e.slice(c, s));
                        i = u;
                    }
                    break;
                }
                s++;
            }
            o = s + 1;
        }
    }
    return t;
}
function Z5e(e, n, r) {
    return q(e, r, n);
}
function q(e, n, r) {
    let t = r === undefined ? undefined : `"type":"${r}"`;
    let i = `"${n}":`;
    let e_length = e.length;
    while(e_length > 0){
        let o = e.lastIndexOf(`
`, e_length - 1);
        let u = e.slice(o + 1, e_length);
        e_length = o;
        if (u.includes(i) && (t === undefined || u.includes(t))) {
            try {
                let c = JSON.parse(u);
                if (typeof c === "object" && c !== null && (r === undefined || c.type === r)) {
                    let s = c[n];
                    if (typeof s === "string") {
                        return s;
                    }
                }
            } catch  {}
        }
        if (o < 0) {
            break;
        }
    }
}
function lPe(e, n) {
    let r = `"${n}":`;
    let t = 0;
    while(t < e.length){
        let i = e.indexOf(`
`, t);
        let a = i < 0 ? e.slice(t) : e.slice(t, i);
        t = i < 0 ? e.length : i + 1;
        if (a.includes(r)) {
            try {
                let o = JSON.parse(a);
                if (typeof o === "object" && o !== null) {
                    let u = o[n];
                    if (typeof u === "string") {
                        return u;
                    }
                }
            } catch  {}
        }
    }
}
function aRr(e, n) {
    return q(e, n);
}
function LIs(e, hoverRestOn) {
    if (e?.realWorkspacePath === undefined) {
        return undefined;
    }
    return {
        hoverRestOn,
        realPath: e.realWorkspacePath
    };
}
async function qUe(e, n, r) {
    return Z(e, n, "w", r);
}
async function TAo(e, n, r) {
    return Z(e, n, "a", r);
}
async function Z(e, n, flags, t) {
    if (t !== undefined && t.hoverRestOn && (flags === "w" || n.length > 0)) {
        return me(t.source, n, flags);
    }
    let i = createWriteStream(e, {
        mode: 384,
        flags
    });
    try {
        for (let a of n){
            if (!i.write(JSON.stringify(a) + `
`)) {
                await once(i, "drain");
            }
        }
        i.end();
        await once(i, "finish");
    } catch (error) {
        i.destroy();
        throw error;
    }
}
async function me({ backend, key }, n, flags) {
    let a = n.map((u)=>({
            data: JSON.stringify(u) + `
`
        }));
    if (flags === "w") {
        let u = await backend.replaceRecords(key, a, {
            publishDiscipline: "inPlace",
            mode: 384
        });
        if (!u.ok) {
            throw Error("transcript stream replace failed", {
                cause: u.error
            });
        }
        return;
    }
    let o = await backend.append(key, a);
    if (!o.ok) {
        throw Error("transcript stream append failed", {
            cause: o.error
        });
    }
}
function Q2s(e) {
    let n = 0;
    let r = {
        commandFallback: ""
    };
    while(n < e.length){
        let t = e.indexOf(`
`, n);
        let i = t >= 0 ? e.slice(n, t) : e.slice(n);
        n = t >= 0 ? t + 1 : e.length;
        if (!i.includes('"type":"user"') && !i.includes('"type": "user"')) {
            continue;
        }
        if (i.includes('"tool_result"')) {
            continue;
        }
        if (i.includes('"isMeta":true') || i.includes('"isMeta": true')) {
            continue;
        }
        if (i.includes('"isCompactSummary":true') || i.includes('"isCompactSummary": true')) {
            continue;
        }
        try {
            let a = JSON.parse(i);
            let o = r8e(a, r);
            if (o !== undefined) {
                return o;
            }
        } catch  {
            continue;
        }
    }
    return r.commandFallback;
}
function Z2s(e) {
    let n = 0;
    while(n < e.length){
        let r = e.indexOf(`
`, n);
        let t = r >= 0 ? e.slice(n, r) : e.slice(n);
        n = r >= 0 ? r + 1 : e.length;
        if (!t.includes('"type":"user"') && !t.includes('"type": "user"')) {
            continue;
        }
        if (t.includes('"tool_result"')) {
            continue;
        }
        if (t.includes('"isMeta":true') || t.includes('"isMeta": true')) {
            continue;
        }
        if (t.includes('"type":"image"') || t.includes('"type": "image"')) {
            return "Image";
        }
        if (t.includes('"type":"document"') || t.includes('"type": "document"')) {
            return "Document";
        }
    }
    return "";
}
function eVs(e) {
    let n = {
        commandFallback: ""
    };
    for (let r of e){
        if (typeof r !== "object" || r === null) {
            continue;
        }
        let t = r8e(r, n);
        if (t !== undefined) {
            return t;
        }
    }
    return n.commandFallback;
}
const T = constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK;
async function eon(e, n, r, t) {
    if (t !== undefined && t.hoverRestOn) {
        return ge(t.source);
    }
    try {
        if (T === constants.O_RDONLY) {
            if (!(await lstat(e)).isFile()) {
                return {
                    head: "",
                    tail: ""
                };
            }
        }
        let i = await open(e, T);
        try {
            if (!(await i.stat()).isFile()) {
                return {
                    head: "",
                    tail: ""
                };
            }
            let a = await i.read(r, 0, rw, 0);
            if (a.bytesRead === 0) {
                return {
                    head: "",
                    tail: ""
                };
            }
            let o = r.toString("utf8", 0, a.bytesRead);
            let u = Math.max(0, n - rw);
            let c = o;
            if (u > 0) {
                let s = await i.read(r, 0, rw, u);
                c = r.toString("utf8", 0, s.bytesRead);
            }
            return {
                head: o,
                tail: c
            };
        } finally{
            await i.close();
        }
    } catch  {
        return {
            head: "",
            tail: ""
        };
    }
}
async function ge(source) {
    let n = await X(source);
    if (n === null) {
        return {
            head: "",
            tail: ""
        };
    }
    return {
        head: n.head,
        tail: n.tail
    };
}
function AAo(e) {
    let n = e.indexOf(`
`);
    if (n >= 0) {
        return e.slice(n + 1);
    }
    return "";
}
async function X({ backend, key }) {
    try {
        let t = await backend.read([
            {
                key,
                offset: 0,
                length: rw
            },
            {
                key,
                tail: rw
            }
        ]);
        if (!t.ok) {
            return null;
        }
        let [i, a] = t.value.items;
        if (!i.found || i.value.length === 0) {
            return null;
        }
        let o = H(i.value);
        let tail = a.found && a.value.length > 0 ? H(a.value) : o;
        return {
            head: o,
            tail,
            mtimeMs: i.mtimeMs,
            totalBytes: i.totalBytes
        };
    } catch  {
        return null;
    }
}
function H(e) {
    return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
}
async function N(e, n) {
    return await M(e, n) !== "none";
}
async function M(e, n) {
    if (n !== undefined && n.hoverRestOn) {
        return j(n.source);
    }
    try {
        if (!(await lstat(e)).isFile()) {
            return "none";
        }
    } catch (error) {
        if (x(error)) {
            return "none";
        }
        return "unknown";
    }
    let r;
    try {
        r = await open(e, "r");
    } catch (error) {
        if (x(error)) {
            return "none";
        }
        return "unknown";
    }
    try {
        let t = createInterface({
            input: r.createReadStream()
        });
        for await (let i of t){
            if (i.includes('"type":"user"') || i.includes('"type":"assistant"')) {
                t.close();
                return "has";
            }
        }
        return "none";
    } catch  {
        return "unknown";
    } finally{
        await r.close().catch(()=>{});
    }
}
const Se = 65536;
const he = 4194304;
const we = Buffer.from('"type":"user"');
const be = Buffer.from('"type":"assistant"');
const lRr = 10000;
function ZSe(e, n) {
    if (e.kind !== "scope" || e.scope.namespace !== "transcript" || e.scope.projectKey === undefined || e.scope.sessionId !== undefined || !n(e.scope.projectKey)) {
        return;
    }
    return e.scope.projectKey;
}
async function j({ backend, key }) {
    let t;
    let i = false;
    let a = 0;
    let o = 0;
    try {
        while(true){
            if (++o > lRr) {
                return "unknown";
            }
            let u = await backend.readRecords(key, {
                order: "forward",
                maxBytes: t === undefined ? Se : he,
                ...t !== undefined && {
                    fromSeq: t
                }
            });
            if (!u.ok) {
                if (u.error.code === "NotFound") {
                    return "none";
                }
                return "unknown";
            }
            a += u.value.items.length;
            for (let s of u.value.items){
                let p = Buffer.from(s.data.buffer, s.data.byteOffset, s.data.byteLength);
                if (p.includes(we) || p.includes(be)) {
                    return "has";
                }
                if (s.truncated === true) {
                    i = true;
                }
            }
            let c = u.value.nextSeq;
            if (c === undefined) {
                if (i) {
                    return "unknown";
                }
                if (u.value.items.length === 0 && t !== undefined) {
                    return "unknown";
                }
                let s = await backend.statStream(key);
                if (!s.ok) {
                    if (s.error.code === "NotFound") {
                        return "none";
                    }
                    return "unknown";
                }
                if (s.value.recordCount > a) {
                    return "unknown";
                }
                return "none";
            }
            if (t !== undefined && c <= t) {
                return "unknown";
            }
            t = c;
        }
    } catch  {
        return "unknown";
    }
}
async function KUe(e, n) {
    let r = `orphaned-${Date.now()}-${randomUUID().slice(0, 8)}`;
    let t = n !== undefined && n.hoverRestOn ? n.source : undefined;
    let i = t !== undefined && e.endsWith(".jsonl") ? Q(e, basename(e, ".jsonl"), t) : undefined;
    if (i !== undefined && t !== undefined) {
        let { key } = i;
        if (key.namespace !== "transcript") {
            return false;
        }
        try {
            return (await i.backend.move(key, t.transcriptKey(key.projectKey, `${key.sessionId}.${r}`))).ok;
        } catch  {
            return false;
        }
    }
    let a = `${e.endsWith(".jsonl") ? e.slice(0, -6) : e}.${r}.jsonl`;
    try {
        await rename(e, a);
        return true;
    } catch  {
        return false;
    }
}
function cPe(e) {
    return isAbsolute(e) && e.endsWith(".jsonl");
}
async function Ase(e, n, r, t, i) {
    let a = await Wy(n, LIs(i?.source, i?.hoverRestOn === true));
    if (MP(e) === null) {
        return {
            path: join(Ph(a), "invalid-resume-id.jsonl"),
            hasMessages: false,
            via: "computed"
        };
    }
    let path = join(Ph(a), `${e}.jsonl`);
    let u = [];
    if (r !== undefined) {
        u.push(r.endsWith(`${e}.jsonl`) ? {
            path: r,
            via: "linkScanPath"
        } : {
            path: join(dirname(r), `${e}.jsonl`),
            via: "linkScanDir"
        });
    }
    let c = i !== undefined && i.hoverRestOn ? {
        ...i,
        source: NIs(i.source)
    } : undefined;
    for (let f of (await ewe(a, c))){
        u.push({
            path: join(f, `${e}.jsonl`),
            via: "projectDir"
        });
    }
    u.push({
        path,
        via: "computed"
    });
    let s = new Set;
    let p = (f)=>ke(f, e, c);
    let l;
    for (let f of u){
        if (s.has(f.path)) {
            continue;
        }
        s.add(f.path);
        let d = await p(f.path);
        if (d === "has") {
            return {
                ...f,
                hasMessages: true
            };
        }
        if (d === "unverifiable" && l === undefined) {
            l = f;
        }
    }
    if (t?.crossWorktree !== false) {
        for (let { projectDir } of (await te(a, c))){
            let d = join(projectDir, `${e}.jsonl`);
            if (c !== undefined) {
                if (s.has(d)) {
                    continue;
                }
                s.add(d);
            }
            let y = await p(d);
            if (y === "has") {
                return {
                    path: d,
                    via: "worktreeProjectDir",
                    hasMessages: true
                };
            }
            if (y === "unverifiable" && l === undefined) {
                l = {
                    path: d,
                    via: "worktreeProjectDir"
                };
            }
        }
    }
    if (t?.crossWorktree !== false) {
        let f = await cRr(e, s, c);
        if (f !== null) {
            return {
                path: f,
                via: "projectsScan",
                hasMessages: true
            };
        }
    }
    if (l !== undefined) {
        return {
            ...l,
            hasMessages: true,
            unverifiable: true
        };
    }
    return {
        ...u[0],
        hasMessages: false
    };
}
function Q(e, n, r) {
    let t = CAo(dirname(e), r.isKeySegment);
    if (t === undefined || basename(e) !== `${n}.jsonl` || !r.isKeySegment(n)) {
        return;
    }
    return {
        backend: r.backend,
        key: r.transcriptKey(t, n)
    };
}
async function ke(e, n, r) {
    let t = r !== undefined && r.hoverRestOn ? Q(e, n, r.source) : undefined;
    if (t === undefined) {
        if (await N(e)) {
            return "has";
        }
        return "none";
    }
    let i = await j(t);
    if (i === "has") {
        return "has";
    }
    try {
        if (!(await lstat(e)).isFile()) {
            return "none";
        }
    } catch (error) {
        if (!x(error)) {
            return "has";
        }
        if (i === "unknown") {
            return "unverifiable";
        }
        return "none";
    }
    if (await N(e)) {
        return "has";
    }
    return "none";
}
function x(error) {
    return error !== null && typeof error === "object" && "code" in error && error.code === "ENOENT";
}
function C(e) {
    return {
        skipScopeStats: true,
        skipKeyStats: true,
        ...e !== undefined && {
            cursor: e
        }
    };
}
function NIs(e) {
    let n = new Map;
    let backend = new Proxy(e.backend, {
        get (t, i, a) {
            let o = Reflect.get(t, i, a);
            if (i !== "listEntries") {
                if (typeof o === "function") {
                    return o.bind(t);
                }
                return o;
            }
            return (c, s)=>{
                if (!(c.namespace === "transcript" && !("projectKey" in c) && Object.keys(s ?? {}).every((d)=>d === "cursor" || d === "skipScopeStats" || d === "skipKeyStats"))) {
                    return t.listEntries(c, s);
                }
                let l = [
                    s?.cursor ?? "",
                    s?.skipScopeStats,
                    s?.skipKeyStats
                ].map(String).join("\x00");
                let f = n.get(l);
                if (f === undefined) {
                    f = t.listEntries(c, s);
                    n.set(l, f);
                    let d = ()=>{
                        n.delete(l);
                    };
                    f.then((y)=>{
                        if (!y.ok) {
                            d();
                        }
                    }, d);
                }
                return f;
            };
        }
    });
    return {
        ...e,
        backend
    };
}
async function cRr(e, n = new Set, r) {
    if (MP(e) === null) {
        return null;
    }
    if (r !== undefined && r.hoverRestOn && r.source.isKeySegment(e)) {
        return Pe(e, n, r.source);
    }
    let t = Df();
    let i = null;
    try {
        for (let a of (await readdir(t, {
            withFileTypes: true
        }))){
            if (!a.isDirectory()) {
                continue;
            }
            let o = join(t, a.name, `${e}.jsonl`);
            if (n.has(o)) {
                continue;
            }
            if (await M(o) !== "has") {
                continue;
            }
            if (i !== null) {
                return null;
            }
            i = o;
        }
    } catch  {
        return null;
    }
    return i;
}
async function Pe(e, n, { backend, transcriptKey, isKeySegment }) {
    let o = Df();
    let u = null;
    let c = false;
    let s = new Set;
    try {
        let p = await Wi((l)=>backend.listEntries({
                namespace: "transcript"
            }, C(l)), async (l)=>{
            for (let f of l){
                let d = ZSe(f, isKeySegment);
                if (d === undefined) {
                    continue;
                }
                let y = join(o, d, `${e}.jsonl`);
                if (s.has(y) || n.has(y)) {
                    continue;
                }
                s.add(y);
                let m = await j({
                    backend,
                    key: transcriptKey(d, e)
                });
                if (m === "unknown") {
                    try {
                        m = (await lstat(y)).isFile() ? await M(y) : "none";
                    } catch  {}
                }
                if (m !== "has") {
                    continue;
                }
                if (u !== null) {
                    c = true;
                    return;
                }
                u = y;
            }
        }, {
            until: ()=>c
        });
        if (c || p.status !== "done") {
            return null;
        }
    } catch  {
        return null;
    }
    return u;
}
async function YUe(e, n) {
    if (n !== undefined && n.hoverRestOn) {
        return ee(n.source);
    }
    try {
        if (T === constants.O_RDONLY) {
            if (!(await lstat(e)).isFile()) {
                return null;
            }
        }
        let r = await open(e, T);
        try {
            let t = await r.stat();
            if (!t.isFile()) {
                return null;
            }
            let i = Buffer.allocUnsafe(rw);
            let a = await r.read(i, 0, rw, 0);
            if (a.bytesRead === 0) {
                return null;
            }
            let o = i.toString("utf8", 0, a.bytesRead);
            let u = Math.max(0, t.size - rw);
            let c = o;
            if (u > 0) {
                let s = await r.read(i, 0, rw, u);
                c = i.toString("utf8", 0, s.bytesRead);
            }
            return {
                mtime: t.mtime.getTime(),
                size: t.size,
                head: o,
                tail: c
            };
        } finally{
            await r.close();
        }
    } catch  {
        return null;
    }
}
async function ee(e) {
    let n = await X(e);
    if (n === null) {
        return null;
    }
    return {
        mtime: Math.trunc(n.mtimeMs),
        size: n.totalBytes,
        head: n.head,
        tail: n.tail
    };
}
const Tpe = 200;
function Le(e) {
    return Math.abs(Mse(e)).toString(36);
}
function k(e) {
    return e.replace(/[^a-zA-Z0-9]/g, "-");
}
function OO(e) {
    let n = k(e);
    if (n.length <= Tpe) {
        return n;
    }
    return `${n.slice(0, Tpe)}-${Le(e)}`;
}
function XUe(e, n) {
    let r = e.replaceAll("\\", "/");
    if (n) {
        return r.toLowerCase();
    }
    return r;
}
function A(e, n, r) {
    let t = On(e);
    let i = On(n);
    let a = (o)=>{
        if (r) {
            return o.toLowerCase();
        }
        return o;
    };
    if (a(k(t)) !== a(k(i))) {
        return false;
    }
    return XUe(t, r) !== XUe(i, r);
}
async function dRr(e, n, r, t, i) {
    if (!A(e, n, r)) {
        return false;
    }
    if (JZ(e) || JZ(n)) {
        return false;
    }
    if (await t(e) || await t(n)) {
        return false;
    }
    let a;
    try {
        if (i !== undefined && i.hoverRestOn) {
            let u = await i.realPath(e);
            if (!u.ok || !u.value.found) {
                return false;
            }
            a = On(u.value.path);
        } else {
            a = On(await realpath(e));
        }
    } catch  {
        return false;
    }
    let o = await Wy(n, i);
    return A(a, o, r);
}
function uRr(e, n, r) {
    if (n === undefined) {
        return false;
    }
    let t = XUe(On(e), r);
    return n.some((i)=>{
        let a = XUe(On(i), r);
        return t === a || t.startsWith(a.endsWith("/") ? a : `${a}/`);
    });
}
function e8e() {
    return false;
}
function Df() {
    return join(ve(), "projects");
}
function zv(e) {
    return Xsn() ?? OO(e);
}
function ton(e) {
    let n = OO(e);
    if (n === zv(e)) {
        return undefined;
    }
    return n;
}
function Ph(e, n = Df()) {
    return join(n, zv(e));
}
function t8e() {
    let e = Xsn();
    if (e === undefined) {
        return null;
    }
    return join(Df(), e);
}
function CAo(e, n) {
    let r = basename(e);
    if (dirname(e) === Df() && n(r)) {
        return r;
    }
}
async function Wy(e, n) {
    try {
        if (n !== undefined && n.hoverRestOn) {
            let r = await n.realPath(e);
            return On(r.ok && r.value.found ? r.value.path : e);
        }
        return On(await realpath(e));
    } catch  {
        return On(e);
    }
}
function HFs(e, n) {
    return [
        n
    ];
}
async function non(e, n, r, t) {
    let i = t !== undefined && t.hoverRestOn ? t.source : undefined;
    let a = i === undefined ? undefined : CAo(e, i.isKeySegment);
    if (i !== undefined && a !== undefined) {
        let c = await Te(a, n, r, i);
        if (c !== undefined) {
            return c;
        }
    }
    let o = k(n);
    let u;
    try {
        u = await readdir(e, {
            withFileTypes: true
        });
    } catch  {
        return false;
    }
    for (let c of u){
        if (!c.isFile() || !c.name.endsWith(".jsonl")) {
            continue;
        }
        let s = await YUe(join(e, c.name));
        if (s === null) {
            continue;
        }
        if (ne(s, o, r)) {
            return true;
        }
    }
    return false;
}
function ne(e, n, r) {
    let t = Z5e(e.tail, "relocated", "relocatedCwd") ?? lPe(e.head, "cwd");
    if (t === undefined) {
        return false;
    }
    let i = k(On(t));
    if (r) {
        return i.toLowerCase() === n.toLowerCase();
    }
    return i === n;
}
async function Te(e, n, r, { backend, transcriptKey, isKeySegment }) {
    let u = k(n);
    let c = false;
    let s = new Set;
    try {
        let p = await Wi((l)=>backend.listEntries({
                namespace: "transcript",
                projectKey: e
            }, C(l)), async (l)=>{
            for (let f of l){
                if (f.kind !== "key" || f.key.namespace !== "transcript" || f.key.projectKey !== e || f.key.agentId !== undefined || !isKeySegment(f.key.sessionId) || s.has(f.key.sessionId)) {
                    continue;
                }
                let d = f.key.sessionId;
                let y = await ee({
                    backend,
                    key: transcriptKey(e, d)
                });
                if (y === null) {
                    continue;
                }
                s.add(d);
                if (ne(y, u, r)) {
                    c = true;
                    return;
                }
            }
        }, {
            until: ()=>c
        });
        if (c) {
            return true;
        }
        if (p.status !== "done") {
            return;
        }
    } catch  {
        return;
    }
    return false;
}
async function ewe(e, n, r = Df()) {
    if (n !== undefined && n.hoverRestOn) {
        return Oe(e, n);
    }
    let t = Ph(e, r);
    let i = [];
    try {
        await readdir(t);
        i.push(t);
    } catch  {}
    let a = ton(e);
    if (a !== undefined) {
        let l = join(r, a);
        try {
            await readdir(l);
            i.push(l);
        } catch  {}
        return i;
    }
    let o = OO(e);
    if (o.length <= Tpe) {
        return i;
    }
    let u = false;
    let c = (l)=>{
        if (u) {
            return l.toLowerCase();
        }
        return l;
    };
    let s = c(`${o.slice(0, Tpe)}-`);
    let p = c(t);
    try {
        for (let l of (await readdir(r, {
            withFileTypes: true
        }))){
            if (!l.isDirectory() || !c(l.name).startsWith(s)) {
                continue;
            }
            let f = join(r, l.name);
            if (c(f) !== p && await non(f, e, u)) {
                i.push(f);
            }
        }
    } catch  {}
    return i;
}
async function Oe(e, n) {
    let r = await DFs(n.source);
    if (r === null) {
        let t = ton(e);
        return [
            Ph(e),
            ...t !== undefined ? [
                join(Df(), t)
            ] : []
        ];
    }
    return LFs(e, r, false, n);
}
async function DFs({ backend, isKeySegment }) {
    let t = [];
    let i = new Set;
    let a = 0;
    try {
        if ((await Wi((u)=>backend.listEntries({
                namespace: "transcript"
            }, C(u)), (u)=>{
            for (let c of u){
                let s = ZSe(c, isKeySegment);
                if (s !== undefined && !i.has(s)) {
                    i.add(s);
                    t.push(s);
                }
            }
            a++;
        })).status === "error") {
            if (a === 0) {
                return null;
            }
            return t;
        }
    } catch  {
        if (a === 0) {
            return null;
        }
        return t;
    }
    return t;
}
async function LFs(e, n, r, t) {
    let i = zv(e);
    let a = Ph(e);
    let o = ton(e);
    let u = o === undefined && i.length > Tpe ? `${i.slice(0, Tpe)}-` : undefined;
    let c = Df();
    let s = (g)=>{
        if (r) {
            return g.toLowerCase();
        }
        return g;
    };
    let p = u !== undefined ? s(u) : undefined;
    let l = s(i);
    let f = false;
    let d;
    let y = [];
    let m = new Set;
    for (let g of n){
        if (g === i) {
            f = true;
        } else if (o !== undefined) {
            if (d === undefined && s(g) === s(o)) {
                d = join(c, g);
            }
        } else if (p !== undefined && s(g).startsWith(p) && s(g) !== l && !m.has(s(g))) {
            m.add(s(g));
            y.push(g);
        }
    }
    let h = [];
    for (let g of y){
        let K = join(c, g);
        if (await non(K, e, r, t)) {
            h.push(K);
        }
    }
    return [
        ...f ? [
            a
        ] : [],
        ...d !== undefined ? [
            d
        ] : [],
        ...h
    ];
}
async function RAo(e, n) {
    return (await ewe(e, n))[0];
}
async function te(e, n, r = Df()) {
    let t = [];
    for (let worktreePath of (await iDt(e))){
        if (worktreePath === e) {
            continue;
        }
        let a = await ewe(worktreePath, n, r);
        if (n !== undefined && n.hoverRestOn) {
            let o = Ph(worktreePath);
            if (!a.includes(o)) {
                a.push(o);
            }
        }
        for (let projectDir of a){
            t.push({
                worktreePath,
                projectDir
            });
        }
    }
    return t;
}
async function pRr(e, n, r, hoverRestOn, i = Df()) {
    let a = `${e}.jsonl`;
    let source = hoverRestOn && r !== undefined && r.isKeySegment(e) ? NIs(r) : undefined;
    let u = source === undefined ? undefined : {
        source,
        hoverRestOn
    };
    async function c(p, projectPath) {
        let filePath = join(p, a);
        if (source) {
            let d = CAo(p, source.isKeySegment);
            if (d !== undefined) {
                try {
                    let y = await source.backend.stat(source.transcriptKey(d, e));
                    if (y.ok) {
                        let fileSize = y.value.storedBytes ?? y.value.size;
                        if (fileSize > 0) {
                            return {
                                filePath,
                                projectPath,
                                fileSize
                            };
                        }
                    }
                } catch  {}
                return;
            }
        }
        try {
            let d = await stat(filePath);
            if (d.size > 0) {
                return {
                    filePath,
                    projectPath,
                    fileSize: d.size
                };
            }
        } catch  {}
    }
    if (n) {
        let p = await Wy(n, LIs(r, hoverRestOn));
        let l = new Set;
        for (let f of HFs(n, p)){
            for (let d of (await ewe(f, u, i))){
                let y = d;
                if (l.has(y)) {
                    continue;
                }
                l.add(y);
                let m = await c(d, f);
                if (m) {
                    return m;
                }
            }
        }
        for (let { worktreePath, projectDir } of (await te(p, u, i))){
            let y = await c(projectDir, worktreePath);
            if (y) {
                return y;
            }
        }
        return;
    }
    if (source) {
        let p = new Map;
        try {
            if ((await Wi((d)=>source.backend.listEntries({
                    namespace: "transcript"
                }, d !== undefined ? {
                    cursor: d
                } : undefined), (d)=>{
                for (let y of d){
                    let m = ZSe(y, source.isKeySegment);
                    if (m === undefined) {
                        continue;
                    }
                    let mtimeMs = y.kind === "scope" && y.mtimeMs !== undefined ? y.mtimeMs : Number.NEGATIVE_INFINITY;
                    let g = p.get(m);
                    if (g === undefined) {
                        p.set(m, {
                            projectKey: m,
                            mtimeMs
                        });
                    } else if (mtimeMs > g.mtimeMs) {
                        g.mtimeMs = mtimeMs;
                    }
                }
            })).status === "error") {
                return;
            }
        } catch  {
            return;
        }
        let l = [
            ...p.values()
        ];
        l.sort((f, d)=>{
            if (f.mtimeMs !== d.mtimeMs) {
                return d.mtimeMs - f.mtimeMs;
            }
            if (f.projectKey < d.projectKey) {
                return -1;
            }
            if (f.projectKey > d.projectKey) {
                return 1;
            }
            return 0;
        });
        for (let { projectKey } of l){
            let d = await c(join(i, projectKey), undefined);
            if (d) {
                return d;
            }
        }
        return;
    }
    let s;
    try {
        s = await readdir(i);
    } catch  {
        return;
    }
    for (let p of s){
        let l = await c(join(i, p), undefined);
        if (l) {
            return l;
        }
    }
}
const maxBytes = 1048576;
const kZ = 5242880;
const re = Buffer.from('"compact_boundary"');
async function xAo(e, n) {
    let r = re;
    let t = Math.min(maxBytes, Math.max(n, 1));
    let i = Buffer.allocUnsafe(t);
    let a = r.length - 1;
    let o = await open(e, "r");
    try {
        let u = 0;
        let c = 0;
        while(u < n){
            let { bytesRead } = await o.read(i, c, Math.min(t - c, n - u), u);
            if (bytesRead === 0) {
                break;
            }
            u += bytesRead;
            let p = c + bytesRead;
            if (i.subarray(0, p).includes(r)) {
                return true;
            }
            c = Math.min(a, p);
            i.copy(i, 0, p - c, p);
        }
        return false;
    } finally{
        await o.close().catch(()=>{});
    }
}
function ie(e) {
    try {
        let n = JSON.parse(e);
        if (n.type !== "system" || n.subtype !== "compact_boundary") {
            return null;
        }
        return {
            hasPreservedSegment: Boolean(n.compactMetadata?.preservedSegment || n.compactMetadata?.preservedMessages)
        };
    } catch  {
        return null;
    }
}
function w(out, n, r, t) {
    let i = t - r;
    if (i <= 0) {
        return;
    }
    if (out.len + i > out.buf.length) {
        let a = Buffer.allocUnsafe(Math.min(Math.max(out.buf.length * 2, out.len + i), out.cap));
        out.buf.copy(a, 0, 0, out.len);
        out.buf = a;
    }
    n.copy(out.buf, out.len, r, t);
    out.len += i;
}
function O(e, n, r, t) {
    return t - r >= n.length && e.compare(n, 0, n.length, r, r + n.length) === 0;
}
const B = Buffer.from('{"type":"attribution-snapshot"');
const Be = Buffer.from('{"type":"system"');
const v = 10;
const xe = Buffer.from([
    v
]);
const Re = 256;
function D(e, n, r) {
    e.straddleSnapCarryLen = 0;
    e.straddleSnapTailEnd = 0;
    if (e.carryLen === 0) {
        return 0;
    }
    let e_carryBuf = e.carryBuf;
    let i = n.indexOf(v);
    if (i === -1 || i >= r) {
        return 0;
    }
    let a = i + 1;
    if (O(e_carryBuf, B, 0, e.carryLen)) {
        e.straddleSnapCarryLen = e.carryLen;
        e.straddleSnapTailEnd = a;
        e.lastSnapSrc = null;
    } else if (e.carryLen < B.length) {
        return 0;
    } else {
        if (O(e_carryBuf, Be, 0, e.carryLen)) {
            let o = ie(e_carryBuf.toString("utf-8", 0, e.carryLen) + n.toString("utf-8", 0, i));
            if (o?.hasPreservedSegment) {
                e.hasPreservedSegment = true;
            } else if (o) {
                e.out.len = 0;
                e.boundaryStartOffset = e.bufFileOff;
                e.hasPreservedSegment = false;
                e.lastSnapSrc = null;
            }
        }
        w(e.out, e_carryBuf, 0, e.carryLen);
        w(e.out, n, 0, a);
    }
    e.bufFileOff += e.carryLen + a;
    e.carryLen = 0;
    return a;
}
function W(e, n, r) {
    let t = n.indexOf(r);
    let i = 0;
    let trailStart = 0;
    let lastSnapStart = -1;
    let lastSnapEnd = -1;
    let c = n.indexOf(v);
    while(c !== -1){
        let s = c + 1;
        if (t !== -1 && t < trailStart) {
            t = n.indexOf(r, trailStart);
        }
        if (O(n, B, trailStart, s)) {
            w(e.out, n, i, trailStart);
            lastSnapStart = trailStart;
            lastSnapEnd = s;
            i = s;
        } else if (t >= trailStart && t < Math.min(trailStart + Re, s)) {
            let p = ie(n.toString("utf-8", trailStart, c));
            if (p?.hasPreservedSegment) {
                e.hasPreservedSegment = true;
            } else if (p) {
                e.out.len = 0;
                e.boundaryStartOffset = e.bufFileOff + trailStart;
                e.hasPreservedSegment = false;
                e.lastSnapSrc = null;
                lastSnapStart = -1;
                e.straddleSnapCarryLen = 0;
                i = trailStart;
            }
            t = n.indexOf(r, t + r.length);
        }
        trailStart = s;
        c = n.indexOf(v, trailStart);
    }
    w(e.out, n, i, trailStart);
    return {
        lastSnapStart,
        lastSnapEnd,
        trailStart
    };
}
function U(e, n, r, lastSnapStart, lastSnapEnd) {
    if (lastSnapStart !== -1) {
        e.lastSnapLen = lastSnapEnd - lastSnapStart;
        if (e.lastSnapBuf === undefined || e.lastSnapLen > e.lastSnapBuf.length) {
            e.lastSnapBuf = Buffer.allocUnsafe(e.lastSnapLen);
        }
        n.copy(e.lastSnapBuf, 0, lastSnapStart, lastSnapEnd);
        e.lastSnapSrc = e.lastSnapBuf;
    } else if (e.straddleSnapCarryLen > 0) {
        e.lastSnapLen = e.straddleSnapCarryLen + e.straddleSnapTailEnd;
        if (e.lastSnapBuf === undefined || e.lastSnapLen > e.lastSnapBuf.length) {
            e.lastSnapBuf = Buffer.allocUnsafe(e.lastSnapLen);
        }
        e.carryBuf.copy(e.lastSnapBuf, 0, 0, e.straddleSnapCarryLen);
        r.copy(e.lastSnapBuf, e.straddleSnapCarryLen, 0, e.straddleSnapTailEnd);
        e.lastSnapSrc = e.lastSnapBuf;
    }
}
function V(e, n, trailStart) {
    e.carryLen = n.length - trailStart;
    if (e.carryLen > 0) {
        if (e.carryBuf === undefined || e.carryLen > e.carryBuf.length) {
            e.carryBuf = Buffer.allocUnsafe(e.carryLen);
        }
        n.copy(e.carryBuf, 0, trailStart, n.length);
    }
}
function J(e) {
    if (e.carryLen > 0) {
        let n = e.carryBuf;
        if (O(n, B, 0, e.carryLen)) {
            e.lastSnapSrc = n;
            e.lastSnapLen = e.carryLen;
        } else {
            w(e.out, n, 0, e.carryLen);
        }
    }
    if (e.lastSnapSrc) {
        if (e.out.len > 0 && e.out.buf[e.out.len - 1] !== v) {
            w(e.out, xe, 0, 1);
        }
        w(e.out, e.lastSnapSrc, 0, e.lastSnapLen);
    }
}
async function Ee(backend, key, r, t) {
    let i = 0;
    let a;
    while(i < r){
        let o = await backend.readRecords(key, {
            order: "forward",
            maxBytes,
            ...a !== undefined && {
                fromSeq: a
            }
        });
        if (!o.ok) {
            throw Error("transcript record page failed during load", {
                cause: o.error
            });
        }
        let u = [];
        let c = 0;
        for (let p of o.value.items){
            if (i + c + p.data.byteLength > r) {
                break;
            }
            u.push(p.data);
            c += p.data.byteLength;
        }
        if (c > 0) {
            t(Buffer.concat(u, c));
            i += c;
        }
        let s = o.value.nextSeq;
        if (s === undefined || u.length < o.value.items.length) {
            return;
        }
        if (a !== undefined && s <= a) {
            throw Error("transcript record cursor did not advance during load");
        }
        a = s;
    }
}
async function PAo(e, n, r) {
    let t = re;
    let i = maxBytes;
    let a = {
        out: {
            buf: Buffer.allocUnsafe(Math.min(n, 8388608)),
            len: 0,
            cap: n + 1
        },
        boundaryStartOffset: 0,
        hasPreservedSegment: false,
        lastSnapSrc: null,
        lastSnapLen: 0,
        lastSnapBuf: undefined,
        bufFileOff: 0,
        carryLen: 0,
        carryBuf: undefined,
        straddleSnapCarryLen: 0,
        straddleSnapTailEnd: 0
    };
    if (r !== undefined && r.hoverRestOn) {
        let { backend, key } = r.source;
        let offset = 0;
        let l = (f)=>{
            let f_length = f.length;
            offset += f_length;
            let y = D(a, f, f_length);
            let m;
            if (a.carryLen > 0) {
                let g = a.carryLen + (f_length - y);
                m = Buffer.allocUnsafe(g);
                a.carryBuf.copy(m, 0, 0, a.carryLen);
                f.copy(m, a.carryLen, y, f_length);
            } else {
                m = f.subarray(y, f_length);
            }
            let h = W(a, m, t);
            U(a, m, f, h.lastSnapStart, h.lastSnapEnd);
            V(a, m, h.trailStart);
            a.bufFileOff += h.trailStart;
        };
        while(offset < n){
            let f = await backend.read([
                {
                    key,
                    offset,
                    length: Math.min(i, n - offset)
                }
            ]);
            if (!f.ok) {
                if (offset === 0 && ODt(f.error)) {
                    await Ee(backend, key, n, l);
                    break;
                }
                throw Error("transcript ranged read failed", {
                    cause: f.error
                });
            }
            let [d] = f.value.items;
            if (!d.found) {
                throw Error("transcript stream absent during load");
            }
            if (d.value.length === 0) {
                break;
            }
            l(Buffer.from(d.value.buffer, d.value.byteOffset, d.value.length));
        }
        J(a);
        return {
            boundaryStartOffset: a.boundaryStartOffset,
            postBoundaryBuf: a.out.buf.subarray(0, a.out.len),
            hasPreservedSegment: a.hasPreservedSegment
        };
    }
    let o = Buffer.allocUnsafe(i);
    let u = await open(e, "r");
    try {
        let c = 0;
        while(c < n){
            let { bytesRead } = await u.read(o, 0, Math.min(i, n - c), c);
            if (bytesRead === 0) {
                break;
            }
            c += bytesRead;
            let p = D(a, o, bytesRead);
            let l;
            if (a.carryLen > 0) {
                let d = a.carryLen + (bytesRead - p);
                l = Buffer.allocUnsafe(d);
                a.carryBuf.copy(l, 0, 0, a.carryLen);
                o.copy(l, a.carryLen, p, bytesRead);
            } else {
                l = o.subarray(p, bytesRead);
            }
            let f = W(a, l, t);
            U(a, l, o, f.lastSnapStart, f.lastSnapEnd);
            V(a, l, f.trailStart);
            a.bufFileOff += f.trailStart;
        }
        J(a);
    } finally{
        await u.close();
    }
    return {
        boundaryStartOffset: a.boundaryStartOffset,
        postBoundaryBuf: a.out.buf.subarray(0, a.out.len),
        hasPreservedSegment: a.hasPreservedSegment
    };
}
const aDt = /^[0-9a-f]{16}(?:[0-9a-f]{48})?@v\d+$/;
function dPe(e) {
    return MP(e) !== null;
}
function n8e(sessionId, cause, vetoedAgainstAccountUuid) {
    return {
        type: "history-suppression",
        sessionId,
        cause,
        ...vetoedAgainstAccountUuid && {
            vetoedAgainstAccountUuid
        },
        ts: new Date().toISOString()
    };
}
export { iDt, rw, Zrn, J2s, MP, aPe, KY, Z5e, lPe, aRr, LIs, qUe, TAo, Q2s, Z2s, eVs, eon, AAo, lRr, ZSe, KUe, cPe, Ase, NIs, cRr, YUe, Tpe, OO, XUe, dRr, uRr, e8e, Df, zv, ton, Ph, t8e, CAo, Wy, HFs, non, ewe, DFs, LFs, RAo, pRr, kZ, xAo, PAo, aDt, dPe, n8e };
