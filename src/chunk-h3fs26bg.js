import { pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { v, QZ, ti } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ze, TC } from "/$bunfs/root/chunk-xgw72tt1.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { SC } from "/$bunfs/root/chunk-x47nahfr.js";
import { _4e, b4e, hRt, WD, PQ, lCe, IQ, Y9t, jL } from "/$bunfs/root/chunk-38fr02qr.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { d1n, Kks, Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { KE, Crn } from "/$bunfs/root/chunk-2d9a83dh.js";
import { Hve, Dve, PJe } from "/$bunfs/root/chunk-wce3cykr.js";
import { rl } from "/$bunfs/root/chunk-w6rkdzfe.js";
import { o, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { createWriteStream } from "fs";
import { chmod, lstat, mkdir, readdir, realpath, rename, stat, unlink } from "fs/promises";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
import { posix } from "path";
const j = 1048576;
async function G(dest, t, n) {
    try {
        let r = await lstat(dest);
        if (!r.isFile()) {
            return "not_a_file";
        }
        if (r.size !== n) {
            return "different_contents";
        }
        if (n > j) {
            return "same_size_not_compared";
        }
        let [l, E] = await Promise.all([
            z(dest),
            z(t)
        ]);
        if (l === null || E === null) {
            return "unknown";
        }
        if (l.equals(E)) {
            return "same_contents";
        }
        return "different_contents";
    } catch (err) {
        if (v(err) === "ENOENT") {
            return "nothing";
        }
        return "unknown";
    }
}
async function z(e) {
    let t = await Crn(e);
    try {
        let n = await t.stat();
        if (!n.isFile()) {
            return null;
        }
        let r = await KE(t, j, n.size);
        if (r.overLimit) {
            return null;
        }
        return r.bytes;
    } finally{
        await t.close().catch(()=>{});
    }
}
const { basename, dirname, isAbsolute, join, normalize, relative, sep } = posix;
const Y = PQ();
const X = lCe();
const V = IQ();
const Se = 67108864;
const timeout = 30000;
const Fe = 16;
const stall_ms = 60000;
const Re = 500;
const ae = "STAGE_PARENT_ESCAPE";
const I = new Set([
    "ENAMETOOLONG",
    "ENOSPC",
    "EDQUOT",
    "EFBIG",
    "EISDIR",
    "ENOTDIR",
    "EINVAL",
    "ELOOP",
    "ENOTEMPTY",
    ae
]);
function H(status) {
    return status < 500 && status !== 408 && status !== 429;
}
function CUs(e) {
    if (e.noop === undefined) {
        return {
            ok: true
        };
    }
    return {
        ok: true,
        noop: e.noop
    };
}
function L(e, t) {
    let n = relative(e, t);
    if (n === "" || n === "." || n.split(sep).includes("..") || isAbsolute(n)) {
        return null;
    }
    return n;
}
function ie(e, t = false) {
    if (e.includes("\x00")) {
        throw Error("mount_path contains null bytes");
    }
    if (!isAbsolute(e)) {
        throw Error("mount_path must be absolute");
    }
    if (e.split(sep).includes("..")) {
        throw Error('mount_path must not contain ".." segments');
    }
    let n = normalize(e);
    let r = L(b4e, n);
    if (r !== null && SC() && jL(t ? "vouched" : a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND)) {
        let _ = Hve(r);
        if (_ !== undefined) {
            throw new U(_);
        }
        return {
            dest: join(V, r),
            root: V,
            readOnly: false,
            neverReplace: true
        };
    }
    if (basename(n).startsWith(WD)) {
        throw Error("mount_path names a reserved temporary-file name");
    }
    let l = L(_4e, n);
    if (l !== null) {
        return {
            dest: join(Y, l),
            root: Y,
            readOnly: true,
            neverReplace: false
        };
    }
    let E = L(hRt, n);
    if (E !== null) {
        if (!jL(t ? "vouched" : a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND)) {
            let _ = Error("staging under /outputs/ is only supported on managed remote sessions");
            _.code = "STAGE_OUTPUTS_UNSUPPORTED_RUNNER";
            throw _;
        }
        return {
            dest: join(X, E),
            root: X,
            readOnly: false,
            neverReplace: false
        };
    }
    throw Error("mount_path must be under /uploads/ or /outputs/");
}
class U extends Error {
    refusal;
    constructor(e){
        super("mount_path names a file that may not be written to the home directory");
        this.refusal = e;
    }
}
function RUs(e) {
    let t;
    try {
        t = ie(e);
    } catch (err) {
        if (v(err) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER") {
            throw Error("add_directory mount_path must be under /uploads/");
        }
        if (!(err instanceof U)) {
            throw err;
        }
    }
    if (!t?.readOnly) {
        throw Error("add_directory mount_path must be under /uploads/ and not under /uploads/.home/");
    }
    return t.dest;
}
function be(e, t) {
    if (!Y9t(e, t)) {
        throw ue("dest parent escaped stage root");
    }
}
function Te(root, dest) {
    if (TC(root) || TC(dirname(dest))) {
        throw ue("a folder on the way to dest has a backslash in its name");
    }
}
function ue(e) {
    let t = Error(e);
    t.code = ae;
    return t;
}
function Uin(e) {
    return `${WD}${at(basename(e)).slice(0, 16)}.`;
}
async function g9e(e, t) {
    let n = Date.now() - 2 * stall_ms;
    let r;
    try {
        r = await readdir(e);
    } catch  {
        return;
    }
    await Promise.all(r.filter((l)=>l.startsWith(t)).map(async (l)=>{
        let E = join(e, l);
        try {
            if ((await stat(E)).mtimeMs < n) {
                await unlink(E);
            }
        } catch  {}
    }));
}
function Oe(e, t) {
    return e !== null && e.isFile() && (e.mtimeMs >= t || e.ctimeMs >= t);
}
function K(err) {
    return typeof err === "object" && err !== null && err.code === "EROFS";
}
function C(e, err) {
    let { kind, status } = ti(err);
    return {
        kind,
        status,
        message: `${e} failed: ${kind}${status ? ` ${status}` : ""}`,
        ...kind === "http" && status !== undefined && H(status) && {
            permanent: true
        }
    };
}
async function xUs(e, t, n = "off") {
    if (t === undefined && !a.CLAUDE_CODE_REMOTE_SESSION_ID) {
        return {
            ok: false,
            error: "CLAUDE_CODE_REMOTE_SESSION_ID unset",
            permanent: true
        };
    }
    if (t !== undefined && e.filestore_path) {
        return {
            ok: false,
            error: "synced documents are not staged here"
        };
    }
    if (e.filestore_path) {
        if (a.CLAUDE_CODE_ENVIRONMENT_KIND !== undefined) {
            m("ccr_synced_file_stage", "unsupported_runner_kind");
            i("tengu_stage_file_completed", {
                ok: false,
                synced_unsupported_runner_kind: true,
                duration_ms: 0
            });
            return {
                ok: false,
                error: "synced-file staging not supported on this runner kind"
            };
        }
        let { stageSyncedFile, SYNCED_FILE_ROOT } = await import("/$bunfs/root/chunk-f7gmfqbe.js");
        return stageSyncedFile({
            mount_path: e.mount_path,
            filestore_path: e.filestore_path,
            content_sha256: e.content_sha256,
            expected_local_sha256: e.expected_local_sha256
        }, $Ms, SYNCED_FILE_ROOT);
    }
    let r;
    try {
        r = ie(e.mount_path, t !== undefined);
    } catch (err) {
        if (v(err) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER") {
            m("ccr_stage_file_outputs", "unsupported_runner_kind");
            i("tengu_stage_file_completed", {
                ok: false,
                outputs_unsupported_runner_kind: true,
                duration_ms: 0
            });
        }
        if (err instanceof U) {
            b("refused_name", {
                refusal: err.refusal
            });
            return {
                ok: true,
                noop: "refused_name"
            };
        }
        return {
            ok: false,
            error: err instanceof Error ? err.message : String(err),
            permanent: true
        };
    }
    if (r.neverReplace && n === "off") {
        b("home_files_off", {});
        return {
            ok: true,
            noop: "home_files_off"
        };
    }
    if (r.neverReplace && e.resync !== undefined) {
        b("resent_announcement", {});
        return {
            ok: true,
            noop: "resent_announcement"
        };
    }
    if (r.neverReplace && e.force !== false) {
        b("unchecked_announcement", {});
        return {
            ok: true,
            noop: "unchecked_announcement"
        };
    }
    if (r.neverReplace && n === "not_loaded") {
        b("flag_not_loaded", {});
        return {
            ok: false,
            error: "the flag for home files has not loaded"
        };
    }
    let l = r.readOnly ? {} : {
        outputPath: r.dest
    };
    if (!e.force && !r.neverReplace) {
        try {
            if ((await stat(r.dest)).isFile()) {
                J("debug", "stage_file_noop_already_present", {});
                i("tengu_stage_file_completed", {
                    ok: true,
                    noop_already_present: true,
                    duration_ms: 0
                });
                return {
                    ok: true,
                    noop: "already_present",
                    ...l
                };
            }
        } catch  {}
    }
    let E = Date.now();
    return Pe(e.mount_path, r, E, t);
}
const Z = ze(new Map, (e)=>e.clear());
function Pe(mount_path, t, n, r) {
    let l = Z.get(t.root);
    if (l === undefined) {
        l = rl(Fe, Ae);
        Z.set(t.root, l);
    }
    return l(mount_path, t, n, r);
}
function Ae(...e) {
    if (e[1].neverReplace) {
        return Me(...e);
    }
    return De(...e);
}
async function De(e, { dest, root, readOnly }, l, E) {
    let _ = performance.now();
    let w = Math.max(0, Date.now() - l);
    let h = ()=>Math.round(performance.now() - _);
    let F = Uin(dest);
    let d = join(dirname(dest), `${F}${Date.now()}.${Math.random().toString(36).slice(2)}`);
    try {
        Te(root, dest);
        await mkdir(dirname(dest), {
            recursive: true
        });
        let y = await realpath(root);
        let R = await realpath(dirname(dest));
        be(y, R);
        await lstat(dest).catch((D)=>{
            if (v(D) === "ENAMETOOLONG") {
                throw D;
            }
        });
        await g9e(dirname(dest), F);
    } catch (err) {
        let R = typeof err === "object" && err !== null && "code" in err ? String(err.code) : "unknown";
        if (readOnly && K(err) && !a.CLAUDE_STAGE_FILE_ROOT) {
            i("tengu_stage_file_completed", {
                ok: true,
                noop: true,
                duration_ms: h(),
                queued_ms: w,
                bytes: 0
            });
            J("debug", "stage_file_noop_readonly_mount", {
                duration_ms: h()
            });
            return {
                ok: true,
                noop: "readonly_mount"
            };
        }
        i("tengu_stage_file_completed", {
            ok: false,
            duration_ms: h(),
            queued_ms: w
        });
        J("warn", "stage_file_mkdir_failed", {
            code: R,
            duration_ms: h(),
            queued_ms: w
        });
        if (!readOnly) {
            m("ccr_stage_file_outputs", "mkdir_failed");
        }
        return {
            ok: false,
            error: `mkdir failed: ${R}`,
            ...I.has(R) && {
                permanent: true
            }
        };
    }
    let k = await B(e, d, E);
    if (!k.ok) {
        await unlink(d).catch(()=>{});
        if (readOnly && k.errno === "EROFS" && !a.CLAUDE_STAGE_FILE_ROOT) {
            i("tengu_stage_file_completed", {
                ok: true,
                noop: true,
                duration_ms: h(),
                queued_ms: w,
                bytes: 0
            });
            J("debug", "stage_file_noop_readonly_mount", {
                duration_ms: h()
            });
            return {
                ok: true,
                noop: "readonly_mount"
            };
        }
        i("tengu_stage_file_completed", {
            ok: false,
            gated: k.gated,
            duration_ms: h(),
            queued_ms: w
        });
        if (!readOnly) {
            m("ccr_stage_file_outputs", "fetch_failed");
        }
        return {
            ok: false,
            error: k.error,
            ...(k.permanent === true || k.gated === true || k.errno !== undefined && I.has(k.errno)) && {
                permanent: true
            }
        };
    }
    let k_bytes = k.bytes;
    let fetch_ms = h();
    let replaced = readOnly ? await G(dest, d, k_bytes) : undefined;
    try {
        if (!readOnly) {
            let y = await stat(dest).catch(()=>null);
            if (Oe(y, l)) {
                await unlink(d).catch(()=>{});
                i("tengu_stage_file_completed", {
                    ok: true,
                    noop: true,
                    duration_ms: h(),
                    queued_ms: w,
                    bytes: 0,
                    outputs_root: true
                });
                J("info", "stage_file_noop_newer_local", {
                    duration_ms: h()
                });
                g("ccr_stage_file_outputs");
                return {
                    ok: true,
                    noop: "newer_local"
                };
            }
        }
        await chmod(d, readOnly ? 292 : 420);
        await rename(d, dest);
    } catch (err) {
        await unlink(d).catch(()=>{});
        if (readOnly && K(err) && !a.CLAUDE_STAGE_FILE_ROOT) {
            i("tengu_stage_file_completed", {
                ok: true,
                noop: true,
                fetch_ms,
                duration_ms: h(),
                queued_ms: w,
                bytes: 0
            });
            J("debug", "stage_file_noop_readonly_mount", {
                duration_ms: h()
            });
            return {
                ok: true,
                noop: "readonly_mount"
            };
        }
        let R = typeof err === "object" && err !== null && "code" in err ? String(err.code) : "unknown";
        i("tengu_stage_file_completed", {
            ok: false,
            fetch_ms,
            duration_ms: h(),
            queued_ms: w,
            bytes: k_bytes
        });
        J("warn", "stage_file_write_failed", {
            code: R,
            duration_ms: h(),
            queued_ms: w
        });
        if (!readOnly) {
            m("ccr_stage_file_outputs", "write_failed");
        }
        return {
            ok: false,
            error: `write failed: ${R}`,
            ...I.has(R) && {
                permanent: true
            }
        };
    }
    i("tengu_stage_file_completed", {
        ok: true,
        fetch_ms,
        duration_ms: h(),
        queued_ms: w,
        bytes: k_bytes,
        outputs_root: !readOnly,
        replaced: pe(replaced)
    });
    if (!readOnly) {
        g("ccr_stage_file_outputs");
    }
    J(replaced === "different_contents" ? "warn" : "info", "stage_file_ok", {
        bytes: k_bytes,
        fetch_ms,
        duration_ms: h(),
        queued_ms: w,
        root: readOnly ? "uploads" : "outputs",
        ...replaced !== undefined && {
            replaced
        }
    });
    return {
        ok: true,
        ...readOnly ? {} : {
            outputPath: dest
        }
    };
}
function b(outcome, t) {
    let n = outcome === "flag_not_loaded" || outcome === "probe_failed" || outcome === "fetch_failed" || outcome === "place_failed";
    J(n ? "warn" : "info", "stage_file_home", {
        outcome,
        ...t
    });
    i("tengu_stage_file_completed", {
        ok: !n,
        noop: !n && outcome !== "placed",
        home_root: true,
        bytes: t.bytes ?? 0,
        duration_ms: t.duration_ms ?? 0,
        queued_ms: t.queued_ms ?? 0
    });
    if (n) {
        m("ccr_stage_file_home", outcome);
    } else if (outcome === "placed" || outcome === "already_present") {
        g("ccr_stage_file_home");
    } else {
        f("ccr_stage_file_home", outcome);
    }
}
function ee(e, outputPath, n) {
    switch(e.outcome){
        case "placed":
            b(e.outcome, n);
            return {
                ok: true,
                outputPath
            };
        case "already_present":
        case "path_occupied":
            b(e.outcome, n);
            return {
                ok: true,
                noop: e.outcome
            };
        case "refused_name":
            b(e.outcome, {
                refusal: e.refusal,
                ...n
            });
            return {
                ok: true,
                noop: e.outcome
            };
    }
}
async function Me(e, { dest, root }, r, l) {
    let E = performance.now();
    let _ = Math.max(0, Date.now() - r);
    let w = ()=>({
            duration_ms: Math.round(performance.now() - E),
            queued_ms: _
        });
    let h = relative(root, dest);
    let F = join(root, `${Uin(dest)}${Date.now()}.${Math.random().toString(36).slice(2)}`);
    try {
        let d = await Dve(root, h);
        await g9e(root, WD);
        if (d !== undefined) {
            return ee(d, dest, w());
        }
    } catch (err) {
        let k = v(err) ?? "unknown";
        b("probe_failed", {
            code: k,
            ...w()
        });
        return {
            ok: false,
            error: `mkdir failed: ${k}`
        };
    }
    try {
        let d = await B(e, F, l);
        if (!d.ok && !d.gated && l === undefined) {
            await unlink(F).catch(()=>{});
            await Q(Re);
            d = await B(e, F, l);
        }
        if (!d.ok) {
            b("fetch_failed", {
                code: d.errno,
                ...w()
            });
            return {
                ok: false,
                error: d.error
            };
        }
        return ee(await PJe(F, root, h), dest, {
            bytes: d.bytes,
            ...w()
        });
    } catch (err) {
        let k = v(err) ?? "unknown";
        b("place_failed", {
            code: k,
            ...w()
        });
        return {
            ok: false,
            error: `write failed: ${k}`
        };
    } finally{
        await unlink(F).catch(()=>{});
    }
}
const error = "read failed: credential expired";
function Ce(e) {
    let t = false;
    return async ()=>{
        if (t) {
            return {
                ok: false,
                error
            };
        }
        t = true;
        return le(e);
    };
}
function le(e) {
    let { filestore_jwt, filesystem_id } = e;
    if (!filestore_jwt || !filesystem_id) {
        return {
            ok: false,
            error: "list returned incomplete credential",
            permanent: true
        };
    }
    let filestoreUrl = d1n(e.filestore_url);
    if (e.filestore_url && !filestoreUrl) {
        J("warn", "stage_file_filestore_url_rejected", {
            reason: Kks(e.filestore_url)
        });
    }
    return {
        ok: true,
        cred: {
            filestoreJwt: filestore_jwt,
            filesystemId: filesystem_id,
            filestoreUrl
        }
    };
}
async function de(e) {
    let t = await xe(e);
    if (t.ok) {
        return le(t.data);
    }
    return t;
}
async function xe(signal) {
    let t = performance.now();
    let n = ()=>Math.round(performance.now() - t);
    try {
        let r = await Gt.get("/worker/files", {
            auth: "session-jwt",
            host: "ccr-session",
            headers: {
                "anthropic-version": "2023-06-01"
            },
            timeout,
            signal
        });
        if (!r.ok) {
            J("warn", "stage_file_list_gated", {
                reason: r.reason,
                duration_ms: n()
            });
            return {
                ok: false,
                error: `list gated: ${r.reason}`,
                gated: true,
                permanent: true
            };
        }
        if (r.status < 200 || r.status >= 300) {
            J("warn", "stage_file_list_failed", {
                kind: "http",
                status: r.status,
                duration_ms: n()
            });
            return {
                ok: false,
                error: `list failed: http ${r.status}`,
                status: r.status,
                ...H(r.status) && {
                    permanent: true
                }
            };
        }
        let { filestore_jwt, filesystem_id, filestore_url } = r.data;
        return {
            ok: true,
            data: {
                filestore_jwt,
                filesystem_id,
                filestore_url
            }
        };
    } catch (err) {
        let { kind, status, message, permanent } = C("list", err);
        J("warn", "stage_file_list_failed", {
            kind,
            status,
            duration_ms: n()
        });
        return {
            ok: false,
            error: message,
            status,
            permanent
        };
    }
}
async function B(e, t, n) {
    let r = performance.now();
    let l = ()=>Math.round(performance.now() - r);
    let E = n === undefined ? de : Ce(n);
    let _ = await E();
    if (!_.ok) {
        return _;
    }
    let __cred = _.cred;
    for(let h = 0; h <= 1; h++){
        let F = new AbortController;
        let d;
        let k = ()=>{
            if (d) {
                d.refresh();
            } else {
                d = setTimeout((s)=>s.abort(Error("readFile stall: no bytes for 60s")), stall_ms, F);
            }
        };
        k();
        try {
            let s = await Gt.post("/v1/filestore/fs/readFile", {
                filesystem_id: __cred.filesystemId,
                path: e
            }, {
                auth: "none",
                host: "api",
                baseUrl: __cred.filestoreUrl,
                headers: {
                    Authorization: `Bearer ${__cred.filestoreJwt}`
                },
                responseType: "stream",
                timeout: 0,
                signal: F.signal,
                validateStatus: ()=>true
            });
            if (!s.ok) {
                clearTimeout(d);
                J("warn", "stage_file_read_gated", {
                    reason: s.reason,
                    duration_ms: l()
                });
                return {
                    ok: false,
                    error: `read gated: ${s.reason}`,
                    gated: true
                };
            }
            if (s.status === 401 && h === 0) {
                clearTimeout(d);
                if (s.data instanceof Readable) {
                    s.data.destroy();
                }
                J("info", "stage_file_read_remint_jwt", {
                    duration_ms: l()
                });
                _ = await E();
                if (!_.ok) {
                    return _;
                }
                __cred = _.cred;
                continue;
            }
            if (s.status < 200 || s.status >= 300) {
                clearTimeout(d);
                if (s.data instanceof Readable) {
                    s.data.destroy();
                }
                J("warn", "stage_file_read_failed", {
                    kind: "http",
                    status: s.status,
                    duration_ms: l()
                });
                return {
                    ok: false,
                    error: `read failed: http ${s.status}`,
                    ...H(s.status) && {
                        permanent: true
                    }
                };
            }
            let expected = Number(s.response?.headers["content-length"] ?? -1);
            s.data.on("data", k);
            await pipeline(s.data, createWriteStream(t, {
                flags: "wx"
            }));
            clearTimeout(d);
            let S = await stat(t);
            if (expected >= 0 && S.size !== expected) {
                J("warn", "stage_file_read_truncated", {
                    expected,
                    got: S.size,
                    duration_ms: l()
                });
                return {
                    ok: false,
                    error: `read truncated: got ${S.size} of ${expected} bytes`
                };
            }
            return {
                ok: true,
                bytes: S.size
            };
        } catch (err) {
            clearTimeout(d);
            let c = typeof err === "object" && err !== null && "code" in err ? String(err.code) : undefined;
            if (c && !("isAxiosError" in err)) {
                J("warn", "stage_file_write_failed", {
                    code: c,
                    duration_ms: l()
                });
                return {
                    ok: false,
                    error: `write failed: ${c}`,
                    errno: c
                };
            }
            if (F.signal.aborted) {
                J("warn", "stage_file_read_stalled", {
                    stall_ms,
                    duration_ms: l()
                });
                return {
                    ok: false,
                    error: `read stalled: no bytes for ${stall_ms}ms`
                };
            }
            let { kind, status, message, permanent } = C("read", err);
            J("warn", "stage_file_read_failed", {
                kind,
                status,
                duration_ms: l()
            });
            return {
                ok: false,
                error: message,
                permanent
            };
        }
    }
    J("warn", "stage_file_read_failed", {
        kind: "http",
        status: 401,
        duration_ms: l()
    });
    return {
        ok: false,
        error: "read failed: http 401"
    };
}
const maxContentLength = 1048576;
async function Ie(e) {
    let t = await de(e);
    if (!t.ok) {
        return t;
    }
    let { filestoreJwt, filesystemId, filestoreUrl } = t.cred;
    let E = {
        auth: "none",
        host: "api",
        baseUrl: filestoreUrl,
        headers: {
            Authorization: `Bearer ${filestoreJwt}`
        },
        timeout
    };
    async function readBytes(h, { maxBytes, signal } = {}) {
        let k = performance.now();
        let s = ()=>Math.round(performance.now() - k);
        try {
            let c = await Gt.post("/v1/filestore/fs/readFile", {
                filesystem_id: filesystemId,
                path: h
            }, {
                ...E,
                responseType: "arraybuffer",
                maxContentLength: maxBytes ?? Se,
                signal
            });
            if (!c.ok) {
                J("warn", "stage_file_read_gated", {
                    reason: c.reason,
                    duration_ms: s()
                });
                return {
                    ok: false,
                    error: `read gated: ${c.reason}`,
                    gated: true
                };
            }
            if (c.status < 200 || c.status >= 300) {
                J("warn", "stage_file_read_failed", {
                    kind: "http",
                    status: c.status,
                    duration_ms: s()
                });
                return {
                    ok: false,
                    error: `read failed: http ${c.status}`,
                    status: c.status,
                    ...c.status === 404 && {
                        notFound: true
                    }
                };
            }
            return {
                ok: true,
                buf: Buffer.from(c.data)
            };
        } catch (err) {
            let { kind, status, message } = C("read", err);
            J("warn", "stage_file_read_failed", {
                kind,
                status,
                duration_ms: s()
            });
            return {
                ok: false,
                error: message,
                status,
                ...status === 404 && {
                    notFound: true
                },
                ...QZ(err) && {
                    tooLarge: true
                }
            };
        }
    }
    async function listDirectory(h, { limit, signal }) {
        let k = performance.now();
        try {
            let s = await Gt.post("/v1/filestore/fs/listDirectory", {
                filesystem_id: filesystemId,
                path: h,
                limit
            }, {
                ...E,
                maxContentLength,
                signal
            });
            if (!s.ok) {
                M("gated", undefined, k);
                return {
                    ok: false,
                    error: `directory listing gated: ${s.reason}`,
                    gated: true
                };
            }
            if (s.status < 200 || s.status >= 300) {
                M("http", s.status, k);
                return {
                    ok: false,
                    error: `directory listing failed: http ${s.status}`,
                    status: s.status,
                    ...s.status === 404 && {
                        notFound: true
                    }
                };
            }
            let c = Le().safeParse(s.data);
            if (!c.success) {
                M("shape", s.status, k);
                return {
                    ok: false,
                    error: "directory listing failed: unexpected answer",
                    status: s.status
                };
            }
            let S = c.data.entries ?? [];
            let y = S.slice(0, limit);
            return {
                ok: true,
                files: y.flatMap((R)=>R.file?.path ?? []),
                directories: y.flatMap((R)=>R.directory?.path ?? []),
                more: S.length > limit || (c.data.cursor ?? "") !== ""
            };
        } catch (err) {
            let { kind, status, message } = C("directory listing", err);
            M(kind, status, k);
            return {
                ok: false,
                error: message,
                status,
                ...status === 404 && {
                    notFound: true
                }
            };
        }
    }
    return {
        ok: true,
        reader: {
            readBytes,
            listDirectory
        }
    };
}
function M(kind, status, n) {
    J(status === 404 ? "info" : "warn", "stage_file_directory_failed", {
        kind,
        status,
        duration_ms: Math.round(performance.now() - n)
    });
}
var Le = p(()=>u({
        entries: T(u({
            file: u({
                path: o()
            }).optional(),
            directory: u({
                path: o()
            }).optional()
        })).optional(),
        cursor: o().optional()
    }));
async function $Ms(e, t = {}) {
    let n = await Ie(t.signal);
    if (n.ok) {
        return n.reader.readBytes(e, t);
    }
    return n;
}
export { CUs, RUs, Uin, g9e, xUs, $Ms };
