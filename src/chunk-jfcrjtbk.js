import { q, B, ksn, Asn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { iut } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { QAo } from "/$bunfs/root/chunk-x47nahfr.js";
import { rl } from "/$bunfs/root/chunk-w6rkdzfe.js";
import { zde } from "/$bunfs/root/chunk-qhgrdyz1.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { constants } from "fs";
import { lstat, open, realpath } from "fs/promises";
import { join } from "path";
const sg = 1000000;
function Cu() {
    return constants.O_RDONLY | LAe();
}
function LAe() {
    if (O() === "windows") {
        return 0;
    }
    return constants.O_NOFOLLOW | constants.O_NONBLOCK;
}
const bds = [
    "aarch64-apple-darwin",
    "x86_64-apple-darwin",
    "aarch64-unknown-linux-musl",
    "x86_64-unknown-linux-musl"
];
function H(t, n) {
    let e = n === "arm64" ? "aarch64" : n === "x64" ? "x86_64" : undefined;
    if (e === undefined) {
        return;
    }
    switch(t){
        case "macos":
            return `${e}-apple-darwin`;
        case "linux":
        case "wsl":
            return `${e}-unknown-linux-musl`;
        case "windows":
        case "unknown":
            return;
    }
}
const Hfr = 268435456;
function Dfr() {
    return H(O(), "x64");
}
function Not(t, n) {
    if (t.endsWith(`-${n}`)) {
        let e = t.slice(0, -(n.length + 1));
        if (iut.test(e)) {
            return e;
        }
        return undefined;
    }
    if (t.endsWith(`-${n}.exe`)) {
        let e = t.slice(0, -(n.length + 5));
        if (iut.test(e)) {
            return `${e}.exe`;
        }
        return undefined;
    }
}
class u {
    texts = new Map;
    readingForCalls = new Map;
    lastReadForCalls = Promise.resolve(undefined);
}
class _ {
    syncPromise = null;
    firstSyncPromise = null;
    firstListDeferred = null;
    firstRoundSettled = false;
    firstRoundEmitted = false;
    resyncTimer = null;
    resyncRunRound = null;
    resyncArmed = null;
    stopAwaitingActivity = null;
    consecutiveFailedRounds = 0;
    lostRowsRecheckMs = 100;
    bucketGeneration = null;
    pendingDownloads = new Map;
    placeholders = new Map;
    listedSkills = new Map;
    listedOwnerships = new Map;
    listedSkillsAnswer = "none_yet";
    listNeverStarted = false;
    hostMountKinds = new Map;
    hostMountWorkOutstanding = null;
    hostMountWorkStartedAt = 0;
    hostMountWorkIsCatalogs = false;
    hostCatalog = new u;
    missingSkillResyncAt = -Infinity;
    missingSkillResync = null;
    reset() {
        this.syncPromise = null;
        this.firstSyncPromise = null;
        this.firstListDeferred = null;
        this.firstRoundEmitted = false;
        this.firstRoundSettled = false;
        Asn(false);
        ksn(false);
        if (this.resyncTimer) {
            clearTimeout(this.resyncTimer);
            this.resyncTimer = null;
        }
        this.resyncRunRound = null;
        this.resyncArmed = null;
        this.stopAwaitingActivity?.();
        this.consecutiveFailedRounds = 0;
        this.lostRowsRecheckMs = 100;
        this.bucketGeneration = null;
        this.listedSkills.clear();
        this.listedOwnerships.clear();
        this.listedSkillsAnswer = "none_yet";
        this.listNeverStarted = false;
        this.hostMountKinds.clear();
        this.hostMountWorkOutstanding = null;
        this.hostMountWorkStartedAt = 0;
        this.hostMountWorkIsCatalogs = false;
        this.hostCatalog = new u;
        this.pendingDownloads.clear();
        this.placeholders.clear();
        this.missingSkillResyncAt = -Infinity;
        this.missingSkillResync = null;
    }
}
const P = new q(()=>new _);
function Gu() {
    return P.of(B().host);
}
function Lfr(t) {
    return t.length >= 2 && t[0] === 80 && t[1] === 75;
}
const z5t = "/mnt/skills";
const f = {
    public: "anthropic",
    examples: "anthropic-example"
};
const NAt = "public";
const M = 3000;
const C = 33554432;
const N = 600000;
const A = /^\d{4}-\d\d-\d\dT.*(?:Z|[+-]\d\d:\d\d)$/;
function xso(kind, n, e) {
    e.set(n.reason, (e.get(n.reason) ?? 0) + 1);
    J("info", "skills_sync_host_mount_miss", {
        kind,
        ...n
    });
}
function WMn(t) {
    return Object.fromEntries(Array.from(t, ([n, e])=>[
            `mount_miss_${n}`,
            e
        ]));
}
function I(t) {
    if (t.creator_type !== "anthropic" || t.id !== t.name || !zde(t.name)) {
        return;
    }
    if (t.source === f.public) {
        return "public";
    }
    if (t.source === f.examples && t.is_public_provisioned === true) {
        return "examples";
    }
}
function Sds(t) {
    let { hostMountKinds } = Gu();
    hostMountKinds.clear();
    for (let e of t){
        let o = I(e);
        if (o !== undefined) {
            hostMountKinds.set(e.id, o);
        }
    }
}
function y() {
    return QAo() && LAe() !== 0;
}
function wds(t) {
    let n = Gu().hostMountKinds.get(t.skillId);
    if (n !== undefined && y() && t.name === t.skillId && t.source === f[n] && t.requestedVersion === undefined) {
        return n;
    }
}
async function vds(t, n) {
    if (!y()) {
        return null;
    }
    let e = {
        deadline: performance.now() + M,
        spentMs: 0,
        waitedMs: 0
    };
    let o = await g(e, ()=>x(t));
    let i = rl(1, (s, r, a)=>g(e, ()=>F(s, r, a)));
    return {
        async readZip (s, r) {
            let a = "reason" in o ? o : o.get(s) ?? d;
            let l = "reason" in a ? a : await i(join(z5t, s, `${r.name}.skill`), r.updatedAt, a.device);
            if ("zip" in l) {
                return l.zip;
            }
            xso(s, l, n);
        },
        spentMs: ()=>Math.round(e.spentMs),
        waitedMs: ()=>Math.round(e.waitedMs)
    };
}
async function g(t, n) {
    let e = Gu();
    while(e.hostMountWorkOutstanding !== null && e.hostMountWorkIsCatalogs){
        let r = e.hostMountWorkOutstanding;
        let a = performance.now();
        let l = Math.min(t.deadline, e.hostMountWorkStartedAt + M) - a;
        if (l > 0) {
            await Ge(r.catch(()=>{}), l);
            t.waitedMs += performance.now() - a;
        }
        if (e.hostMountWorkOutstanding === r) {
            break;
        }
    }
    let o = performance.now();
    if (e.hostMountWorkOutstanding !== null) {
        return {
            reason: "earlier_work_outstanding"
        };
    }
    if (o >= t.deadline) {
        return {
            reason: "budget_spent"
        };
    }
    let i = k(e, n, o, false);
    let s = await Ge(i, t.deadline - o);
    t.spentMs += performance.now() - o;
    return s ?? {
        reason: "timed_out"
    };
}
async function Pso(t) {
    let n = Gu();
    while(n.hostMountWorkOutstanding !== null){
        let e = n.hostMountWorkOutstanding;
        await e.catch(()=>{});
        if (n.hostMountWorkOutstanding === e) {
            n.hostMountWorkOutstanding = null;
        }
    }
    return k(n, t, performance.now(), true);
}
function Eds() {
    let t = Gu();
    return t.hostMountWorkOutstanding !== null && performance.now() - t.hostMountWorkStartedAt >= M;
}
function k(t, n, e, o) {
    let i = n();
    t.hostMountWorkOutstanding = i;
    t.hostMountWorkStartedAt = e;
    t.hostMountWorkIsCatalogs = o;
    let s = ()=>{
        if (t.hostMountWorkOutstanding === i) {
            t.hostMountWorkOutstanding = null;
        }
    };
    i.then(s, s);
    return i;
}
var d = {
    reason: "not_a_mount"
};
async function x(t) {
    let n = await lstat(z5t).catch(p);
    let e = "reason" in n || n.isDirectory() ? n : d;
    let o = new Map;
    for (let i of t){
        if ("reason" in e) {
            o.set(i, e);
            continue;
        }
        let s = await lstat(join(z5t, i)).catch(p);
        o.set(i, "reason" in s ? s : s.isDirectory() && s.dev !== e.dev ? {
            device: s.dev
        } : d);
    }
    return o;
}
function p(t) {
    let n = v(t);
    if (n === "ENOENT") {
        return {
            reason: "no_mount"
        };
    }
    return {
        reason: "probe_failed",
        code: n ?? "unknown"
    };
}
function F(t, n, e) {
    return T(t, e, C, async (o, i)=>{
        let s = n !== null && A.test(n) ? Date.parse(n) : Number.NaN;
        if (Number.isNaN(s)) {
            return {
                reason: "row_date_unreadable"
            };
        }
        if (i.mtimeMs <= s + N) {
            return {
                reason: "not_newer_than_row"
            };
        }
        let zip = await o.readFile();
        if (Lfr(zip)) {
            return {
                zip
            };
        }
        return {
            reason: "not_zip"
        };
    });
}
async function Iso(t) {
    return (await x(new Set([
        t
    ]))).get(t) ?? d;
}
async function kds() {
    let t = await Iso(NAt);
    let n = "reason" in t ? t : await realpath(join(z5t, NAt)).then((root)=>({
            device: t.device,
            root
        }), p);
    if ("reason" in n) {
        J("warn", "skill_host_catalog_not_read", n);
    }
    return n;
}
async function Tds(t, n, e) {
    let filePath = join(t, n, "SKILL.md");
    let i = await S(filePath) ?? await Oso(filePath, e, sg);
    if ("reason" in i) {
        return i;
    }
    return await S(filePath) ?? {
        text: i.text,
        filePath
    };
}
async function S(filePath) {
    try {
        if (await realpath(filePath) === filePath) {
            return undefined;
        }
        return {
            reason: "file_is_link"
        };
    } catch (error) {
        return b(error);
    }
}
function Oso(t, n, e) {
    return T(t, n, e, async (o)=>({
            text: await o.readFile({
                encoding: "utf-8"
            })
        }));
}
async function T(t, n, e, o) {
    let i;
    try {
        i = await open(t, Cu());
        let s = await i.stat();
        if (s.dev !== n) {
            return {
                reason: "file_on_other_device"
            };
        }
        if (!s.isFile()) {
            return {
                reason: "not_a_file"
            };
        }
        if (s.size > e) {
            return {
                reason: "too_large"
            };
        }
        return await o(i, s);
    } catch (error) {
        return b(error);
    } finally{
        await i?.close().catch(()=>{});
    }
}
function b(error) {
    let n = v(error);
    switch(n){
        case "ENOENT":
            return {
                reason: "file_absent"
            };
        case "ELOOP":
            return {
                reason: "file_is_link"
            };
        default:
            return {
                reason: "read_failed",
                code: n ?? "unknown"
            };
    }
}
export { sg, Cu, LAe, bds, Hfr, Dfr, Not, Lfr, Gu, z5t, NAt, xso, WMn, Sds, wds, vds, Pso, Eds, Iso, kds, Tds, Oso };
