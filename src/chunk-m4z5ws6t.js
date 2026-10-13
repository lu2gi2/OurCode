import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { v, z, ti } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { TC } from "/$bunfs/root/chunk-xgw72tt1.js";
import { XF } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { jJ, dqe } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { z7e } from "/$bunfs/root/chunk-sdbat3z2.js";
import { Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { Oh } from "/$bunfs/root/chunk-1qq5kpcj.js";
import { constants } from "fs";
import { link, lstat, mkdir, open, readdir, realpath, rename, unlink, writeFile } from "fs/promises";
import { posix } from "path";
const C7n = 384;
const { basename, dirname, isAbsolute, join, normalize, relative, sep } = posix;
const Tzt = "/mnt/user-data/working";
const Wze = "/working";
const vSn = `${Wze}/${jJ} is reserved`;
const Lj = 26214400;
const ce = 4096;
const be = 4;
const timeout = 30000;
const ie = 5000;
const Fe = 120000;
const ve = 5;
const Te = 2000;
const Oe = 3;
const Ne = 600000;
const xe = ce;
class de {
    seenState = new Map;
    evictedEtag = new Map;
    lastSeenMtime = new Map;
    terminalRejects = new Map;
    inFlight = Oh();
    retryableTransportFailures = 0;
    sessionTerminalRejects = 0;
    syncer = null;
    lateStartRoot = null;
    startInFlight = null;
    recordSeen(e, etag, localHash) {
        this.seenState.set(e, {
            etag,
            localHash
        });
        this.evictedEtag.delete(e);
    }
    forgetSeen(e) {
        this.seenState.delete(e);
        this.evictedEtag.delete(e);
    }
    recordEvictedEtag(e, t) {
        if (t === undefined) {
            return;
        }
        this.evictedEtag.delete(e);
        this.evictedEtag.set(e, t);
        if (this.evictedEtag.size > xe) {
            let r = this.evictedEtag.keys().next().value;
            if (r !== undefined) {
                this.evictedEtag.delete(r);
            }
        }
    }
    evictDeleted(e) {
        this.recordEvictedEtag(e, this.seenState.get(e)?.etag);
        this.seenState.delete(e);
    }
    recordSettledMtime(e, t) {
        this.lastSeenMtime.set(e, t);
    }
    reopenMtimeGate(e) {
        this.lastSeenMtime.delete(e);
    }
    recordTerminalReject(e) {
        let t = this.terminalRejects.get(e) ?? {
            consecutive: 0,
            latchedUntilMs: 0,
            suppressed: 0
        };
        t.consecutive++;
        this.terminalRejects.set(e, t);
        if (t.consecutive >= Oe) {
            t.latchedUntilMs = Date.now() + Ne;
            m("ccr_synced_file_push", "push_parked_terminal", {
                consecutive_rejects: t.consecutive,
                suppressed_pushes: t.suppressed
            });
            t.suppressed = 0;
            J("warn", "working_push_parked", {
                consecutive: t.consecutive
            });
        }
    }
    resetTerminalRejectStreak(e) {
        let t = this.terminalRejects.get(e);
        if (t === undefined) {
            return;
        }
        if (t.suppressed === 0) {
            this.terminalRejects.delete(e);
            return;
        }
        t.consecutive = 0;
        t.latchedUntilMs = 0;
    }
    forgetTerminalReject(e) {
        this.terminalRejects.delete(e);
    }
    get transportFailureSeq() {
        return this.retryableTransportFailures;
    }
    get sessionTerminalRejectSeq() {
        return this.sessionTerminalRejects;
    }
    noteRetryableTransportFailure() {
        this.retryableTransportFailures++;
    }
    noteSessionTerminalReject() {
        this.sessionTerminalRejects++;
    }
    get activeSyncer() {
        return this.syncer;
    }
    syncerStarted(e) {
        this.syncer = e;
    }
    syncerStopped(e) {
        if (this.syncer === e) {
            this.syncer = null;
        }
    }
    armLateStart(e) {
        this.lateStartRoot = e;
    }
    async flush() {
        if (this.syncer === null) {
            if (this.lateStartRoot !== null && this.startInFlight === null) {
                let e = NDs(this.lateStartRoot);
                this.startInFlight = e;
                e.finally(()=>{
                    if (this.startInFlight === e) {
                        this.startInFlight = null;
                    }
                }).catch(()=>{});
            }
            await this.startInFlight?.catch(()=>{});
        }
        await this.syncer?.flush();
    }
    reset() {
        this.seenState.clear();
        this.lastSeenMtime.clear();
        this.evictedEtag.clear();
        this.terminalRejects.clear();
        this.lateStartRoot = null;
        this.startInFlight = null;
    }
}
var Pe = new q(()=>new de);
function O() {
    return Pe.of(B().host);
}
function M(e, t, r) {
    O().recordSeen(e, t, r);
}
function Z(e) {
    return O().seenState.get(e);
}
function ee(e, t) {
    return O().inFlight.run(e, t);
}
function R7n(e, t) {
    if (!isAbsolute(e)) {
        throw Error("syncDir must be absolute");
    }
    if (t.includes("\x00")) {
        throw Error("path contains null bytes");
    }
    if (!isAbsolute(t)) {
        throw Error("path must be absolute");
    }
    let r = relative(e, normalize(t));
    if (r === "" || r === "." || D(r)) {
        throw Error("path must be under the working sync dir");
    }
    return r;
}
function D(e) {
    return isAbsolute(e) || e.split(sep).includes("..");
}
function iae(e) {
    for (let t of e.split(sep)){
        if (t.startsWith(".") || t.endsWith("~") || t.endsWith(".swp") || t.endsWith(".tmp")) {
            return true;
        }
    }
    return false;
}
const _Vr = "synced_file_lane_denied";
var Me = p(()=>u({
        error: u({
            reason: o().optional(),
            resource: o().optional()
        })
    }));
var Ie = p(()=>u({
        error: u({
            type: o().optional(),
            resource_type: o().optional()
        })
    }));
function Le(kind, status) {
    if (kind === "timeout" || kind === "network") {
        return true;
    }
    if (kind === "auth" || kind === "other") {
        return false;
    }
    if (status === undefined) {
        return true;
    }
    return status === 408 || status === 429 || status >= 500;
}
function ue(e, error) {
    let r = O();
    let { kind, status } = ti(error);
    let retryable = Le(kind, status);
    if (retryable) {
        r.noteRetryableTransportFailure();
    } else if (kind === "auth") {
        r.noteSessionTerminalReject();
    }
    let h = status === 400 || status === 403 ? je(error) : undefined;
    let laneReason = status === 400 ? h?.reason : undefined;
    let refusedResource = status === 403 ? h?.resource : undefined;
    return {
        kind: "error",
        message: `${e} failed: ${kind}${status ? ` ${status}` : ""}`,
        retryable,
        errorKind: kind,
        status,
        ...laneReason !== undefined && {
            laneReason
        },
        ...refusedResource !== undefined && {
            refusedResource
        }
    };
}
function je(e) {
    let t = e?.response?.data;
    return Me().safeParse(t).data?.error;
}
function Ae(e) {
    if (e.errorKind === "gated") {
        return `put_gated_${(e.gateReason ?? "unknown").replaceAll("-", "_")}`;
    }
    if (e.status !== undefined) {
        return `put_rejected_${e.status}`;
    }
    return `put_rejected_${e.errorKind}`;
}
async function nbt(e, t, if_match_sha256) {
    let l = O();
    try {
        let s = await Gt.put("/worker/synced_file", {
            path: `${Wze}/${e}`,
            content: t.toString("base64"),
            ...if_match_sha256 && {
                if_match_sha256
            },
            worker_epoch: a.CLAUDE_CODE_WORKER_EPOCH ?? 0
        }, {
            auth: "session-jwt",
            host: "ccr-session",
            headers: {
                "anthropic-version": "2023-06-01"
            },
            timeout,
            validateStatus: (d)=>d >= 200 && d < 300 || d === 409,
            maxBodyLength: Math.ceil(Lj * 4 / 3) + 1024
        });
        if (!s.ok) {
            l.noteSessionTerminalReject();
            return {
                kind: "error",
                message: `put gated: ${s.reason}`,
                retryable: false,
                errorKind: "gated",
                status: undefined,
                gateReason: s.reason
            };
        }
        if (s.status === 409) {
            return {
                kind: "conflict"
            };
        }
        return {
            kind: "ok",
            content_sha256: s.data.content_sha256
        };
    } catch (error) {
        return ue("put", error);
    }
}
async function DEe(e) {
    let t = O();
    try {
        let r = await Gt.get(`/worker/synced_file?path=${encodeURIComponent(`${Wze}/${e}`)}`, {
            auth: "session-jwt",
            host: "ccr-session",
            headers: {
                "anthropic-version": "2023-06-01"
            },
            timeout,
            maxContentLength: Math.ceil(Lj * 4 / 3) + 1024,
            validateStatus: (l)=>l >= 200 && l < 300 || l === 404
        });
        if (!r.ok) {
            t.noteSessionTerminalReject();
            return {
                kind: "error",
                message: `get gated: ${r.reason}`,
                retryable: false,
                errorKind: "gated",
                status: undefined,
                gateReason: r.reason
            };
        }
        if (r.status === 404) {
            let l = Ie().safeParse(r.data);
            return {
                kind: "not_found",
                ...l.success && {
                    body: l.data.error
                }
            };
        }
        return {
            kind: "ok",
            buf: Buffer.from(r.data.content, "base64"),
            content_sha256: r.data.content_sha256
        };
    } catch (error) {
        return ue("get", error);
    }
}
async function te(e, t, r) {
    fe(e, t);
    let l = await realpath(e);
    let s = await realpath(dirname(t));
    let d = relative(l, s);
    if (D(d)) {
        let c = Error("dest parent escaped working sync dir");
        c.code = "WORKING_PARENT_ESCAPE";
        throw c;
    }
    let h = d === "" ? basename(t) : join(d, basename(t));
    if (iae(h)) {
        let c = Error("dest resolves into an ignored path");
        c.code = "WORKING_DEST_IGNORED";
        throw c;
    }
    if (r?.(h)) {
        let c = Error("dest resolves onto a path the caller refuses");
        c.code = "WORKING_DEST_REFUSED";
        throw c;
    }
    try {
        if ((await lstat(t)).isSymbolicLink()) {
            let _ = Error("dest is a symlink");
            _.code = "WORKING_DEST_SYMLINK";
            throw _;
        }
    } catch (error) {
        if (!z(error)) {
            throw error;
        }
    }
}
function fe(e, t) {
    if (TC(e) || TC(dirname(t))) {
        let r = Error("a folder on the way to dest has a backslash in its name");
        r.code = "WORKING_PATH_MISREAD";
        throw r;
    }
}
async function rbt(e, t, r, l = "replace", s) {
    fe(e, t);
    await mkdir(e).catch((_)=>{
        if (v(_) !== "EEXIST") {
            throw _;
        }
    });
    let d = await realpath(e);
    let h = dirname(t);
    while(true){
        try {
            let _ = await realpath(h);
            let y = relative(d, _);
            if (D(y)) {
                let k = Error("dest ancestor escaped working sync dir");
                k.code = "WORKING_PARENT_ESCAPE";
                throw k;
            }
            if (iae(y)) {
                let k = Error("dest ancestor resolves into an ignored path");
                k.code = "WORKING_DEST_IGNORED";
                throw k;
            }
            if (s?.(join(y, relative(h, t))) === true) {
                let k = Error("dest resolves onto a path the caller refuses");
                k.code = "WORKING_DEST_REFUSED";
                throw k;
            }
            break;
        } catch (error) {
            if (!z(error)) {
                throw error;
            }
            let y = dirname(h);
            if (y === h) {
                break;
            }
            h = y;
        }
    }
    await mkdir(dirname(t), {
        recursive: true
    });
    await te(e, t, s);
    let c = `${t}.${process.hrtime.bigint().toString(36)}.tmp`;
    try {
        await XF(c);
    } catch (error) {
        se(error);
        throw error;
    }
    try {
        await writeFile(c, r, {
            mode: C7n,
            flag: "wx"
        });
    } catch (error) {
        se(error);
        await unlink(c).catch(()=>{});
        throw error;
    }
    try {
        if (l === "create_only") {
            await link(c, t);
            await unlink(c);
        } else {
            await rename(c, t);
        }
    } catch (error) {
        await unlink(c).catch(()=>{});
        throw error;
    }
}
function se(cause) {
    if (v(cause) !== "EEXIST") {
        return;
    }
    let t = Error("sibling tempfile name already taken", {
        cause
    });
    t.code = "WORKING_TMP_TAKEN";
    throw t;
}
async function $js(e, t, r) {
    let l;
    try {
        l = R7n(r, e.mount_path);
    } catch (error) {
        m("ccr_synced_file_stage", "bad_mount_path");
        return {
            ok: false,
            error: error instanceof Error ? error.message : String(error)
        };
    }
    if (dqe(l)) {
        z7e.emit(l, "stored");
        return {
            ok: true,
            noop: "dir_sync_lane_row"
        };
    }
    if (iae(l)) {
        m("ccr_synced_file_stage", "ignored_path");
        return {
            ok: false,
            error: "mount_path is an ignored path"
        };
    }
    let s = join(r, l);
    return ee(l, async ()=>{
        let d;
        let h;
        try {
            try {
                await te(r, s);
            } catch (error) {
                if (!z(error)) {
                    m("ccr_synced_file_stage", v(error) === "WORKING_PATH_MISREAD" ? "backslash_in_path" : "containment_failed");
                    return {
                        ok: false,
                        error: `mount_path failed containment: ${v(error) ?? "unknown"}`
                    };
                }
            }
            let c = null;
            try {
                let n = await open(s, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
                try {
                    let i = await n.stat();
                    if (i.isFile()) {
                        if (i.size > Lj) {
                            m("ccr_synced_file_stage", "too_large");
                            return {
                                ok: false,
                                error: "local file too large to reconcile"
                            };
                        }
                        c = await n.readFile();
                    }
                } finally{
                    await n.close();
                }
            } catch (error) {
                let i = v(error);
                if (i !== "ENOENT" && i !== "ELOOP" && i !== "EMLINK") {
                    throw error;
                }
            }
            let _ = c ? at(c) : undefined;
            let y = Z(s);
            if (_ && y && y.localHash === _ && e.content_sha256 !== undefined && y.etag === e.content_sha256) {
                g("ccr_synced_file_stage");
                return {
                    ok: true,
                    noop: "already_present"
                };
            }
            let k = e.expected_local_sha256 || undefined;
            let F = y && y.localHash === _ && (k === undefined || y.etag === k);
            if (c && !F) {
                let n = await nbt(l, c, k);
                if (n.kind === "error") {
                    m("ccr_synced_file_stage", "push_failed");
                    return {
                        ok: false,
                        error: n.message
                    };
                }
                let i = await DEe(l);
                if (i.kind !== "ok") {
                    m("ccr_synced_file_stage", "reget_failed");
                    return {
                        ok: false,
                        error: i.kind === "error" ? i.message : "get not_found after put"
                    };
                }
                d = i.buf;
                h = i.content_sha256;
                J("info", "working_stage_reconciled", {
                    conflict: n.kind === "conflict"
                });
            } else {
                let n = await t(e.filestore_path);
                if (!n.ok) {
                    m("ccr_synced_file_stage", "fetch_failed");
                    return {
                        ok: false,
                        error: n.error
                    };
                }
                if (n.buf.length > Lj) {
                    m("ccr_synced_file_stage", "too_large");
                    return {
                        ok: false,
                        error: "staged content too large"
                    };
                }
                d = n.buf;
                h = e.content_sha256;
            }
            let S = null;
            try {
                let n = await open(s, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
                try {
                    let i = await n.stat();
                    if (i.isFile()) {
                        if (i.size > Lj) {
                            m("ccr_synced_file_stage", "too_large");
                            return {
                                ok: false,
                                error: "local file too large to reconcile"
                            };
                        }
                        S = await n.readFile();
                    }
                } finally{
                    await n.close();
                }
            } catch (error) {
                let i = v(error);
                if (i !== "ENOENT" && i !== "ELOOP" && i !== "EMLINK") {
                    throw error;
                }
            }
            if (S && at(S) !== _) {
                let n = await nbt(l, S, h);
                if (n.kind === "error") {
                    m("ccr_synced_file_stage", "push_failed");
                    return {
                        ok: false,
                        error: n.message
                    };
                }
                let i = await DEe(l);
                if (i.kind !== "ok") {
                    m("ccr_synced_file_stage", "reget_failed");
                    return {
                        ok: false,
                        error: i.kind === "error" ? i.message : "get not_found after put"
                    };
                }
                d = i.buf;
                h = i.content_sha256;
                J("info", "working_stage_reconciled", {
                    conflict: n.kind === "conflict",
                    mid_window: true
                });
            }
        } catch (error) {
            m("ccr_synced_file_stage", "reconcile_threw");
            return {
                ok: false,
                error: `reconcile failed: ${v(error) ?? "unknown"}`
            };
        }
        try {
            await rbt(r, s, d);
        } catch (error) {
            m("ccr_synced_file_stage", "write_failed");
            return {
                ok: false,
                error: `write failed: ${v(error) ?? "unknown"}`
            };
        }
        M(s, h, at(d));
        g("ccr_synced_file_stage");
        J("info", "working_stage_ok", {
            bytes: d.length
        });
        return {
            ok: true
        };
    });
}
async function Ke(e, t) {
    let r = O();
    if (dqe(t)) {
        f("ccr_synced_file_push", "lane_path_reserved");
        return true;
    }
    let l = r.terminalRejects.get(t);
    if (l !== undefined && l.latchedUntilMs !== 0) {
        if (Date.now() < l.latchedUntilMs) {
            l.suppressed++;
            return true;
        }
        l.latchedUntilMs = 0;
    }
    let s = join(e, t);
    if (TC(s)) {
        f("ccr_synced_file_push", "backslash_in_path");
        return true;
    }
    let d;
    try {
        d = await realpath(s);
    } catch (error) {
        if (z(error)) {
            return true;
        }
        throw error;
    }
    let h;
    try {
        h = await realpath(e);
    } catch  {
        return false;
    }
    let c = relative(h, d);
    if (c !== t && (c === "" || D(c))) {
        f("ccr_synced_file_push", "symlink_escape");
        return true;
    }
    let _;
    try {
        let i = await open(s, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
        try {
            let T = await i.stat();
            if (!T.isFile()) {
                return true;
            }
            if (T.size > Lj) {
                f("ccr_synced_file_push", "too_large");
                return true;
            }
            _ = await i.readFile();
        } finally{
            await i.close();
        }
    } catch (error) {
        let T = v(error);
        if (T === "ELOOP" || T === "EMLINK") {
            f("ccr_synced_file_push", "symlink_escape");
            return true;
        }
        m("ccr_synced_file_push", "read_failed");
        return false;
    }
    let y = at(_);
    let k = Z(s);
    if (y === k?.localHash) {
        return true;
    }
    let F = k === undefined ? r.evictedEtag.get(s) : undefined;
    if (k === undefined && F === undefined) {
        let i = await DEe(t);
        if (i.kind === "error") {
            m("ccr_synced_file_push", "seed_get_failed");
            if (!i.retryable) {
                r.recordTerminalReject(t);
            }
            return !i.retryable;
        }
        if (i.kind === "ok") {
            r.resetTerminalRejectStreak(t);
            let T = at(i.buf);
            if (T === y) {
                M(s, i.content_sha256, y);
                return true;
            }
            try {
                await rbt(e, s, i.buf);
            } catch  {
                m("ccr_synced_file_push", "write_failed");
                return false;
            }
            M(s, i.content_sha256, T);
            f("ccr_synced_file_push", "cold_renderer_wins");
            return true;
        }
    }
    let S = await nbt(t, _, k?.etag ?? F);
    if (S.kind === "ok") {
        r.resetTerminalRejectStreak(t);
        M(s, S.content_sha256, y);
        g("ccr_synced_file_push");
        return true;
    }
    if (S.kind === "error") {
        if (S.retryable) {
            r.resetTerminalRejectStreak(t);
            m("ccr_synced_file_push", "put_failed");
        } else {
            m("ccr_synced_file_push", Ae(S));
            r.recordTerminalReject(t);
        }
        J("warn", "working_push_failed", {
            reason: S.message,
            retryable: S.retryable
        });
        return !S.retryable;
    }
    r.resetTerminalRejectStreak(t);
    let n = await DEe(t);
    if (n.kind === "error") {
        m("ccr_synced_file_push", "reget_failed");
        if (!n.retryable) {
            r.recordTerminalReject(t);
        }
        return !n.retryable;
    }
    if (n.kind === "not_found") {
        r.forgetSeen(s);
        m("ccr_synced_file_push", "reget_failed");
        return false;
    }
    try {
        await rbt(e, s, n.buf);
    } catch  {
        m("ccr_synced_file_push", "write_failed");
        return false;
    }
    M(s, n.content_sha256, at(n.buf));
    f("ccr_synced_file_push", "conflict_overwritten");
    return true;
}
function LDs() {
    return O().flush();
}
async function Fjs() {
    let e = O();
    await LDs();
    while(true){
        if (e.inFlight.size === 0 && (e.activeSyncer?.pendingCount() ?? 0) === 0) {
            return;
        }
        await e.inFlight.settle();
        await new Promise((resolve)=>setImmediate(resolve));
    }
}
async function NDs(e) {
    let t = O();
    t.armLateStart(null);
    for(let E = 1;; E++){
        try {
            await mkdir(e);
            break;
        } catch (error) {
            let N = v(error);
            if (N === "EEXIST") {
                break;
            }
            if (N === "ENOENT") {
                if (E < ve) {
                    await Q(Te);
                    continue;
                }
                J("info", "working_sync_parent_absent", {});
                t.armLateStart(e);
                return null;
            }
            f("ccr_synced_file_push", "sync_start_failed");
            J("warn", "working_sync_start_failed", {
                code: N ?? "unknown"
            });
            return null;
        }
    }
    let r = 0;
    let l = [];
    let s = ()=>{
        if (r < be) {
            r++;
            return Promise.resolve();
        }
        return new Promise((resolve)=>l.push(resolve));
    };
    let d = ()=>{
        let E = l.shift();
        if (E) {
            E();
        } else {
            r--;
        }
    };
    let h = new Set;
    let c = false;
    let _ = false;
    let y = 0;
    let k = 0;
    let F = async ()=>{
        let E = [];
        let j = [
            ""
        ];
        let N = new Set;
        let _e = [
            ...t.seenState.keys()
        ];
        let { transportFailureSeq, sessionTerminalRejectSeq } = t;
        let he = 0;
        let re = false;
        let ne = false;
        e: while(j.length && !c){
            let A = j.shift();
            let R;
            try {
                R = await readdir(join(e, A), {
                    withFileTypes: true
                });
            } catch (error) {
                J("warn", "working_scan_readdir_failed", {
                    code: v(error) ?? "unknown"
                });
                ne = true;
                continue;
            }
            for (let P of R){
                if (++he > ce) {
                    re = true;
                    if (!_) {
                        f("ccr_synced_file_push", "scan_cap_reached");
                        _ = true;
                    }
                    break e;
                }
                let w = A ? join(A, P.name) : P.name;
                N.add(w);
                if (iae(w) || dqe(w)) {
                    continue;
                }
                if (P.isDirectory()) {
                    j.push(w);
                    continue;
                }
                if (!P.isFile()) {
                    continue;
                }
                let U;
                try {
                    U = (await lstat(join(e, w))).mtimeMs;
                } catch  {
                    continue;
                }
                let H = t.terminalRejects.get(w);
                if (H !== undefined && H.latchedUntilMs !== 0 && Date.now() >= H.latchedUntilMs) {
                    t.reopenMtimeGate(w);
                }
                if (U === t.lastSeenMtime.get(w)) {
                    continue;
                }
                if (h.has(w) || t.inFlight.has(w)) {
                    continue;
                }
                h.add(w);
                E.push((async ()=>{
                    await s();
                    try {
                        if (await ee(w, ()=>Ke(e, w))) {
                            t.recordSettledMtime(w, U);
                        }
                    } finally{
                        h.delete(w);
                        d();
                    }
                })().catch((ye)=>J("warn", "working_push_threw", {
                        code: v(ye) ?? "unknown"
                    })));
            }
        }
        if (!re && !ne && !c) {
            for (let R of t.lastSeenMtime.keys()){
                if (!N.has(R)) {
                    t.reopenMtimeGate(R);
                }
            }
            for (let R of t.terminalRejects.keys()){
                if (!N.has(R)) {
                    t.forgetTerminalReject(R);
                }
            }
            let A = e.endsWith(sep) ? e : e + sep;
            for (let R of _e){
                if (R.startsWith(A) && !N.has(relative(e, R))) {
                    t.evictDeleted(R);
                }
            }
        }
        await Promise.allSettled(E);
        if (t.transportFailureSeq > transportFailureSeq || t.sessionTerminalRejectSeq > sessionTerminalRejectSeq) {
            y = y === 0 ? 2 * ie : Math.min(y * 2, Fe);
            k = Date.now() + y;
        } else if (h.size === 0) {
            y = 0;
            k = 0;
        }
    };
    let S = 0;
    let flush = async ()=>{
        S++;
        try {
            await F();
        } finally{
            S--;
        }
    };
    let initialReconcile = flush();
    let T = setInterval(()=>{
        if (S > 0 || Date.now() < k) {
            return;
        }
        flush().catch((E)=>J("warn", "working_push_threw", {
                code: v(E) ?? "unknown"
            }));
    }, ie);
    T.unref?.();
    J("info", "working_sync_started", {});
    let G = {
        initialReconcile,
        flush,
        pendingCount: ()=>h.size,
        pollBackoffUntilForTest: ()=>k,
        stop () {
            c = true;
            clearInterval(T);
            t.syncerStopped(G);
        }
    };
    t.syncerStarted(G);
    return G;
}
async function bVr(e) {
    if (dqe(e)) {
        return {
            kind: "error",
            message: vSn,
            retryable: false,
            errorKind: "other",
            status: undefined
        };
    }
    return DEe(e);
}
async function SVr(e, t, r, l) {
    let s = O();
    if (dqe(t)) {
        return {
            ok: false,
            reason: "put_failed",
            error: vSn,
            retryable: false
        };
    }
    if (r.length > Lj) {
        return {
            ok: false,
            reason: "too_large",
            error: "content too large"
        };
    }
    if (l !== undefined && l.length === 0) {
        return {
            ok: false,
            reason: "put_failed",
            error: "empty if_match",
            retryable: false
        };
    }
    return ee(t, async ()=>{
        let d = await nbt(t, r, l);
        if (d.kind === "conflict") {
            if (l !== undefined) {
                return {
                    ok: false,
                    reason: "conflict",
                    error: "lane row changed since if_match",
                    retryable: false
                };
            }
            return {
                ok: false,
                reason: "put_failed",
                error: "put rejected (409 without if_match)",
                retryable: true
            };
        }
        if (d.kind === "error") {
            return {
                ok: false,
                reason: "put_failed",
                error: d.message,
                retryable: d.retryable
            };
        }
        if (!iae(t)) {
            let h = join(e, t);
            let c = Z(h);
            let _ = false;
            try {
                await te(e, h);
                let y = await open(h, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
                try {
                    let k = await y.stat();
                    if (k.isFile() && k.size <= Lj && c !== undefined) {
                        let F = Number(k.size);
                        let S = Buffer.allocUnsafe(F + 1);
                        let n = 0;
                        while(true){
                            let { bytesRead } = await y.read(S, n, F + 1 - n, n);
                            if (bytesRead === 0) {
                                break;
                            }
                            n += bytesRead;
                            if (n > F) {
                                break;
                            }
                        }
                        _ = n <= F && c.localHash === at(S.subarray(0, n));
                    }
                } finally{
                    await y.close();
                }
            } catch (error) {
                _ = z(error);
            }
            if (!_) {
                s.recordEvictedEtag(h, d.content_sha256);
                J("info", "worker_lane_mirror_skipped");
                return {
                    ok: true,
                    etag: d.content_sha256
                };
            }
            try {
                await rbt(e, h, r);
            } catch (error) {
                s.recordEvictedEtag(h, d.content_sha256);
                J("warn", "worker_lane_mirror_skipped", {
                    code: v(error) ?? "unknown"
                });
                return {
                    ok: true,
                    etag: d.content_sha256
                };
            }
            M(h, d.content_sha256, at(r));
        }
        return {
            ok: true,
            etag: d.content_sha256
        };
    });
}
export { C7n, Tzt, Wze, vSn, Lj, R7n, iae, _Vr, nbt, DEe, rbt, $js, LDs, Fjs, NDs, bVr, SVr };
