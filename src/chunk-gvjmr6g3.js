import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ke, x, l, QZ } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ca, I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { rh, Gl, ar } from "/$bunfs/root/chunk-c56kpkt7.js";
import { yn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { cz, Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ea } from "/$bunfs/root/chunk-75wzvwyz.js";
import { qB } from "/$bunfs/root/chunk-md7g8y4m.js";
import { jJ, WJ, vrt, bss } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { kMe, Q6 } from "/$bunfs/root/chunk-pyer8nyr.js";
import { jzt } from "/$bunfs/root/chunk-0vg21mj4.js";
import { wde, eQt } from "/$bunfs/root/chunk-78511nt1.js";
import { Rb, uoe, rN, VCe } from "/$bunfs/root/chunk-5s4qvyjz.js";
import { Wze, Lj, _Vr } from "/$bunfs/root/chunk-m4z5ws6t.js";
import { r8r, oQo, pD, ott, Hke } from "/$bunfs/root/chunk-kasbfbhj.js";
import { A7n, Z_t, rge, cYo } from "/$bunfs/root/chunk-gvnqty6z.js";
import { gSn } from "/$bunfs/root/chunk-gtsztadj.js";
import { dVr, Szt, E7n } from "/$bunfs/root/chunk-4v9vahbe.js";
import { pVr, ySn, _Sn as otherwise, bSn, k7n, T7n, fVr } from "/$bunfs/root/chunk-arv47k92.js";
import { SMe } from "/$bunfs/root/chunk-th83s3jq.js";
import { hSn } from "/$bunfs/root/chunk-pw6t5pp4.js";
import { wzt, iYo } from "/$bunfs/root/chunk-0rhn2wtx.js";
import { sM } from "/$bunfs/root/chunk-g0e9c50d.js";
import { lae } from "/$bunfs/root/chunk-nc91yayz.js";
import { uO } from "/$bunfs/root/chunk-f0v3xmb1.js";
import { o, oe, T, u, _t } from "/$bunfs/root/chunk-smx21d0k.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { createHash } from "crypto";
import { posix } from "path";
const qe = Buffer.from("anthropic.ccr.session_synced_file_put.v1", "utf8");
const Ye = Buffer.from("anthropic.ccr.session_synced_file_upload_begin.v1", "utf8");
const We = Buffer.from("anthropic.ccr.session_synced_file_upload_commit.v1", "utf8");
const ge = Buffer.from([
    0
]);
const Ve = 32;
function Xe({ sessionUuid, boundDeviceUuid, issuedAtMs, contentSha256, path, ifMatchSha256 }) {
    if (contentSha256.length !== Ve) {
        throw Error("syncedFileRequestSigner: the content hash is not 32 bytes");
    }
    return ee(qe, {
        sessionUuid,
        boundDeviceUuid,
        issuedAtMs,
        fixed: [
            contentSha256
        ],
        strings: [
            path,
            ifMatchSha256 ?? ""
        ]
    });
}
function Qe({ sessionUuid, boundDeviceUuid, issuedAtMs, sizeBytes, path, ifMatchSha256 }) {
    if (!Number.isSafeInteger(sizeBytes) || sizeBytes < 0) {
        throw Error("syncedFileRequestSigner: the size is not a byte count");
    }
    return ee(Ye, {
        sessionUuid,
        boundDeviceUuid,
        issuedAtMs,
        fixed: [
            _e(sizeBytes)
        ],
        strings: [
            path,
            ifMatchSha256 ?? ""
        ]
    });
}
function Ze({ sessionUuid, boundDeviceUuid, issuedAtMs, path, uploadPath, contentSha256, ifMatchSha256 }) {
    return ee(We, {
        sessionUuid,
        boundDeviceUuid,
        issuedAtMs,
        fixed: [],
        strings: [
            path,
            uploadPath,
            contentSha256,
            ifMatchSha256 ?? ""
        ]
    });
}
function ee(e, { sessionUuid, boundDeviceUuid, issuedAtMs, fixed, strings }) {
    if (strings.some((h)=>h.includes("\x00"))) {
        throw Error("syncedFileRequestSigner: NUL in a signed field");
    }
    return Buffer.concat([
        e,
        ge,
        Q6(sessionUuid),
        Q6(boundDeviceUuid),
        _e(issuedAtMs),
        ...fixed,
        ...strings.flatMap((h)=>[
                Buffer.from(h, "utf8"),
                ge
            ])
    ]);
}
function _e(e) {
    let n = Buffer.alloc(8);
    n.writeBigUInt64BE(BigInt(e));
    return n;
}
function Je({ sessionUuid, deviceUuid, key, now = Date.now }) {
    let kid = kMe + deviceUuid;
    let _ = async (S)=>{
        let b = now();
        let y = await key.sign(S(b));
        return {
            device_attestation: {
                kid,
                signature: y.toString("base64")
            },
            device_attestation_issued_at: new Date(b).toISOString()
        };
    };
    let h = {
        sessionUuid,
        boundDeviceUuid: deviceUuid
    };
    return {
        sign: ({ content, path, ifMatchSha256 })=>_((k)=>Xe({
                    ...h,
                    issuedAtMs: k,
                    contentSha256: createHash("sha256").update(content).digest(),
                    path,
                    ifMatchSha256
                })),
        signBegin: ({ path, sizeBytes, ifMatchSha256 })=>_((k)=>Qe({
                    ...h,
                    issuedAtMs: k,
                    sizeBytes,
                    path,
                    ifMatchSha256
                })),
        signCommit: ({ path, uploadPath, contentSha256, ifMatchSha256 })=>_((A)=>Ze({
                    ...h,
                    issuedAtMs: A,
                    path,
                    uploadPath,
                    contentSha256,
                    ifMatchSha256
                }))
    };
}
async function he({ sessionId, boundDeviceUuid, credentials, held }) {
    let sessionUuid = uO(sessionId);
    if (sessionUuid === undefined) {
        return q("bad_session_id");
    }
    let _ = await lae(credentials).catch(()=>{});
    if (_?.status !== "resolved") {
        return q("no_account");
    }
    let deviceUuid = boundDeviceUuid.toLowerCase();
    let S = await jzt(_.accountUuid, credentials, held?.rowPk.toLowerCase() === deviceUuid ? held : undefined);
    if (S.status !== "loaded") {
        return q(S.status);
    }
    if (S.rowPk.toLowerCase() !== deviceUuid) {
        return q("bound_elsewhere");
    }
    g("client_request_signer");
    return Je({
        sessionUuid,
        deviceUuid,
        key: S.key
    });
}
function q(e) {
    f("client_request_signer", e);
}
const K = 30000;
const ye = "synced_file_limit_exceeded";
const et = "synced_file_too_large_inline";
const te = p(()=>u({
        error: u({
            type: o().optional(),
            reason: o().optional(),
            resource: o().optional(),
            sub_reason: oe().optional()
        })
    }));
function tt(e) {
    if (e !== posix.normalize(e) || e.includes("\\") || e.includes("\x00")) {
        return false;
    }
    return !posix.isAbsolute(e) && (e === jJ || e.startsWith(`${jJ}/`));
}
function ne(e) {
    if (tt(e)) {
        return false;
    }
    c(new x(`lane path escapes the lane root: ${e}`, "lane path escapes the lane root"));
    return true;
}
function Y(e) {
    return `${Wze}/${e}`;
}
function re(status) {
    return status >= 200 && status < 300;
}
function ie(e, status) {
    if (e.kind === "failed") {
        return {
            ...e,
            status
        };
    }
    return e;
}
function nt(e) {
    return e === "compliance_restricted" || e === "zdr_restricted";
}
function j(e) {
    if (e === "aborted") {
        return {
            kind: "aborted"
        };
    }
    if (e === "failed") {
        return {
            kind: "failed"
        };
    }
    if (e === "timed_out") {
        return {
            kind: "failed",
            timedOut: true
        };
    }
    if (e === "too_large") {
        return {
            kind: "failed",
            tooLarge: true
        };
    }
    if (e === "gated") {
        return {
            kind: "lane_unavailable"
        };
    }
    if (e === "no_auth") {
        return {
            kind: "unauthorized"
        };
    }
    if (e === "unsigned") {
        return {
            kind: "lane_unavailable",
            cause: "device_key_unavailable"
        };
    }
    if (e.status === 501 || e.status === 404) {
        return {
            kind: "lane_unavailable"
        };
    }
    let n = te().safeParse(e.data).data?.error;
    if (e.status === 400 && n?.reason === _Vr) {
        return {
            kind: "lane_unavailable",
            cause: "switched_off_by_anthropic"
        };
    }
    if (e.status === 400 && n?.reason === et) {
        return {
            kind: "failed",
            tooLarge: true
        };
    }
    if (e.status === 403 && nt(n?.resource)) {
        return {
            kind: "lane_unavailable",
            cause: "compliance_restricted"
        };
    }
    if (e.status === 403 && n?.resource === "untrusted_device" && n.sub_reason === "synced_file_write_unsigned") {
        return {
            kind: "unauthorized",
            cause: "write_signature_refused"
        };
    }
    if (e.status === 401 || e.status === 403) {
        return {
            kind: "unauthorized"
        };
    }
    return {
        kind: "failed"
    };
}
const ae = 3;
const rt = 300;
const ot = 4;
const it = 131072;
const at = 100000;
function ke(e) {
    let n = it / ot;
    return Math.min(at, Math.max(K, Math.ceil(e / n * 1000)));
}
const maxBodyLength = 67108864;
function dt(e) {
    return Math.ceil(e * 4 / 3) + 1024;
}
const ut = {
    beginUpload: async ()=>({
            kind: "lane_unavailable"
        }),
    commitUpload: async ()=>({
            kind: "lane_unavailable"
        }),
    getDownload: async ()=>({
            kind: "lane_unavailable"
        })
};
class W extends Error {
    constructor(){
        super("this machine cannot sign the request as the bound device");
    }
}
const Pe = 64;
const ct = p(()=>u({
        content_sha256: o().length(Pe)
    }));
const lt = p(()=>u({
        content: o(),
        content_sha256: o().length(Pe)
    }));
function we(error) {
    return typeof error === "object" && error !== null && "code" in error && error.code === "ECONNABORTED";
}
function ft(e, n) {
    if (ne(e)) {
        return "failed";
    }
    if (Array.from(Y(e)).length > bss) {
        return "path_too_long";
    }
    if (n.length > Lj) {
        return "too_large";
    }
    return null;
}
function Ee({ sessionId, credentials, signer, signedOnly = false }) {
    rh(sessionId, "seed upload session id");
    let session_id = Gl(sessionId);
    let _ = null;
    let h;
    function S(w) {
        _ ??= VCe(w).then((v)=>{
            if (v !== undefined) {
                h = v;
            }
            return v;
        }, ()=>{}).finally(()=>{
            _ = null;
        });
        return _;
    }
    let b = false;
    async function y(w) {
        let v = await signer?.catch(()=>{});
        if (v === undefined) {
            if (signedOnly) {
                throw new W;
            }
            return;
        }
        try {
            return await w(v);
        } catch (error) {
            if (!b) {
                b = true;
                t(`lane: request not signed: ${l(error)}`, {
                    level: "warn"
                });
                f("client_request_signer", "sign_failed");
            }
            if (signedOnly) {
                throw new W;
            }
            return;
        }
    }
    async function k(w, v, { retryTimeouts = false, attempts = ae } = {}) {
        let L = false;
        for(let C = 0;; C++){
            if (sM(v)) {
                return "aborted";
            }
            h ??= await Rb().catch(()=>{});
            let E = h;
            let O;
            try {
                O = await w(E === undefined ? {} : {
                    "X-Trusted-Device-Token": E
                });
            } catch (error) {
                if (error instanceof W) {
                    return "unsigned";
                }
                if (sM(v)) {
                    return "aborted";
                }
                if (await cz(credentials)) {
                    return "no_auth";
                }
                if (QZ(error)) {
                    t("lane: the response is larger than this request accepts; not retried", {
                        level: "warn"
                    });
                    return "too_large";
                }
                if ((retryTimeouts || !we(error)) && C + 1 < attempts) {
                    await Re(C, v);
                    continue;
                }
                if (we(error)) {
                    t("lane: request timed out", {
                        level: "warn"
                    });
                    return "timed_out";
                }
                c(error);
                return "failed";
            }
            if (!O.ok) {
                if (O.reason === "no-auth") {
                    return "no_auth";
                }
                return "gated";
            }
            if ((O.status === 429 || O.status >= 500 && O.status !== 501) && C + 1 < attempts) {
                await Re(C, v);
                continue;
            }
            let B = O.status === 403 && !L ? wde(O.data) : undefined;
            if (B !== undefined && eQt(B)) {
                L = true;
                let P = await S(E);
                if (P !== undefined && P !== E) {
                    continue;
                }
            } else if (B !== undefined) {
                uoe("lane:", B);
                h = undefined;
                rN();
            }
            return {
                status: O.status,
                data: O.data
            };
        }
    }
    async function putStoreRow(w, v, { ifMatchSha256, signal, shouldAttemptOnceIfLong = false } = {}) {
        let kind = ft(w, v);
        if (kind !== null) {
            return {
                kind
            };
        }
        if (ifMatchSha256 === "") {
            return {
                kind: "failed"
            };
        }
        let E = ke(ve(v.length));
        return mt(await U(w, v, ifMatchSha256, signal, shouldAttemptOnceIfLong && E > K ? 1 : ae, E));
    }
    function U(w, v, ifMatchSha256, signal, attempts, timeout) {
        let path = Y(w);
        return k(async (O)=>Gt.put(`/v1/code/sessions/${session_id}/synced_file`, {
                session_id,
                path,
                content: v.toString("base64"),
                ...ifMatchSha256 !== undefined && {
                    if_match_sha256: ifMatchSha256
                },
                ...await y((R)=>R.sign({
                        content: v,
                        path,
                        ifMatchSha256
                    }))
            }, {
                auth: "teleport-org",
                credentials,
                headers: O,
                timeout,
                validateStatus: ()=>true,
                signal,
                maxBodyLength
            }), signal, {
            attempts
        });
    }
    async function getStoreRow(w, v, H = 0, D = Lj) {
        if (ne(w)) {
            return {
                kind: "failed"
            };
        }
        let L = new URLSearchParams({
            path: Y(w)
        });
        let timeout = ke(ve(H));
        let E = await k((O)=>Gt.get(`/v1/code/sessions/${session_id}/file?${L.toString()}`, {
                auth: "teleport-org",
                credentials,
                headers: O,
                timeout,
                validateStatus: ()=>true,
                signal: v,
                maxContentLength: dt(D)
            }), v, {
            attempts: timeout > K ? 1 : ae
        });
        if (typeof E === "string") {
            return j(E);
        }
        if (re(E.status)) {
            let O = lt().safeParse(E.data);
            if (!O.success) {
                return {
                    kind: "failed",
                    status: E.status
                };
            }
            let R = Buffer.from(O.data.content, "base64");
            if (R.length > D) {
                return {
                    kind: "failed",
                    status: E.status,
                    tooLarge: true
                };
            }
            return {
                kind: "ok",
                content: R,
                etag: O.data.content_sha256
            };
        }
        if (E.status === 404) {
            return {
                kind: "not_found"
            };
        }
        return ie(j(E), E.status);
    }
    return {
        putStoreRow,
        getStoreRow,
        ...ut
    };
}
function mt(e) {
    if (typeof e === "string") {
        return j(e);
    }
    if (re(e.status)) {
        let n = ct().safeParse(e.data);
        if (n.success) {
            return {
                kind: "ok",
                etag: n.data.content_sha256
            };
        }
        return {
            kind: "failed",
            status: e.status
        };
    }
    if (e.status === 409) {
        return {
            kind: "conflict"
        };
    }
    if (e.status === 400) {
        let n = te().safeParse(e.data);
        let { type, reason } = n.success ? n.data.error : {
            type: undefined,
            reason: undefined
        };
        t(`lane: put rejected (400): type=${type} reason=${reason}`);
        if (reason === ye) {
            return {
                kind: "lane_full"
            };
        }
    }
    return ie(j(e), e.status);
}
function ve(e) {
    return Math.ceil(e / 3) * 4;
}
function Re(e, n) {
    let r = rt * 2 ** e * (0.5 + Math.random() / 2);
    return Q(r, n);
}
const pt = 10000;
async function se(launchConsent, isProjectStillSynced) {
    return qB(ott(launchConsent).enabledNow()) && Hke(launchConsent) && (!pD(launchConsent) || await Promise.resolve().then(()=>isProjectStillSynced?.() ?? false).catch(()=>false));
}
async function Oe({ client, pack, generation, uploaded, status, launchConsent, isProjectStillSynced, signal, onReadBack, deadlineMs = pt }) {
    if (uploaded.kind !== "uploaded" || !yt(uploaded.outcome) || sM(signal) || !await se(launchConsent, isProjectStillSynced)) {
        return "skipped";
    }
    let k = new AbortController;
    let A = ()=>k.abort();
    signal?.addEventListener("abort", A, {
        once: true
    });
    try {
        let U;
        let w = await Ge(gt({
            client,
            pack,
            generation,
            uploaded: uploaded.outcome,
            signal: k.signal,
            onRead: (D)=>{
                U = D;
            }
        }), deadlineMs) ?? U ?? {
            verdict: "unreadable",
            heal: "none",
            got: "deadline",
            ready: null
        };
        if (sM(signal) || w.got === "aborted") {
            return "skipped";
        }
        i("tengu_home_seed_ready_seen", {
            outcome: d(w.verdict),
            got: d(w.got),
            heal: d(w.heal),
            ready_outcome: d(w.ready?.outcome ?? "none"),
            generation
        });
        let v = w.verdict === "applied_before_first_ask" || w.verdict === "applied_late" ? {
            verdict: w.verdict,
            left: kt(w.ready, St(pack))
        } : {
            verdict: w.verdict,
            left: null
        };
        onReadBack?.(v);
        let H = wt(w.verdict, uploaded.outcome, v.left, uploaded.settingsRefused !== undefined);
        if (H !== null) {
            status.publish(H.text, H.level);
        }
        return w.verdict;
    } catch (error) {
        if (Ke(error) || sM(signal)) {
            return "skipped";
        }
        c(error);
        return "unreadable";
    } finally{
        k.abort();
        signal?.removeEventListener("abort", A);
    }
}
async function gt({ client, pack, generation, uploaded, signal, onRead }) {
    let h = ht(await client.getStoreRow(vrt, signal));
    switch(h.kind){
        case "aborted":
            return {
                verdict: "unreadable",
                got: "aborted",
                heal: "none",
                ready: null
            };
        case "unreadable":
            return {
                verdict: "unreadable",
                got: h.got,
                heal: "none",
                ready: null
            };
        case "ready":
            return {
                verdict: h.ready.generation < generation ? uploaded === "deadline" ? "not_seen" : "behind" : h.ready.generation !== generation ? "stale" : bt(h.ready) ? "not_applied" : h.ready.appliedBeforeFirstAsk ? "applied_before_first_ask" : "applied_late",
                got: "ready",
                heal: "none",
                ready: h.ready
            };
        case "absent":
            {
                if (uploaded === "deadline") {
                    return {
                        verdict: "not_seen",
                        got: "absent",
                        heal: "none",
                        ready: null
                    };
                }
                onRead({
                    verdict: "not_seen",
                    got: "absent",
                    heal: "failed",
                    ready: null
                });
                return {
                    verdict: "not_seen",
                    got: "absent",
                    heal: (await client.putStoreRow(WJ, pack, {
                        signal
                    })).kind === "ok" ? "ok" : "failed",
                    ready: null
                };
            }
    }
}
function ht(e) {
    switch(e.kind){
        case "ok":
            {
                let n = gSn(e.content);
                if (n.ok) {
                    return {
                        kind: "ready",
                        ready: n.ready
                    };
                }
                return {
                    kind: "unreadable",
                    got: n.reason
                };
            }
        case "not_found":
            return {
                kind: "absent"
            };
        case "aborted":
            return {
                kind: "aborted"
            };
        case "failed":
        case "lane_unavailable":
        case "unauthorized":
            return {
                kind: "unreadable",
                got: e.kind
            };
    }
}
function St(pack) {
    let n = rge(pack);
    return n.ok && n.pack.settings !== null;
}
function bt(ready) {
    return ready.outcome === "partial" && ready.filesApplied === 0 && !ready.settingsWritten;
}
function yt(outcome) {
    switch(outcome){
        case "sent":
        case "unchanged":
        case "conflict_resolved":
        case "deadline":
            return true;
        case "raced":
        case "not_forwarded_at_create":
        case "lane_full":
        case "unavailable":
        case "unauthorized":
        case "failed":
        case "aborted":
            return false;
    }
}
function kt(ready, n) {
    if (ready === null || ready.outcome !== "partial") {
        return null;
    }
    if (ready.filesRefused > 0) {
        return "files";
    }
    if (n && !ready.settingsWritten) {
        return "settings";
    }
    return "part";
}
function wt(verdict, outcome, left, a) {
    let s = a ? "the rest of your settings" : "your settings";
    let _ = left === null ? "" : ` (${hSn[left]})`;
    switch(verdict){
        case "applied_before_first_ask":
            return {
                text: `The cloud session applied ${s} before its first reply${_}`,
                level: left !== null || outcome === "deadline" ? "info" : "debug"
            };
        case "applied_late":
            return {
                text: `${Ca(s)} reached the cloud session after its first reply${_}; they apply from the next turn (no /clear needed)`,
                level: "info"
            };
        case "not_applied":
            return {
                text: `The cloud session could not apply ${s} (everything it was sent was skipped there)`,
                level: "warning"
            };
        case "not_seen":
            if (outcome === "deadline") {
                return {
                    text: `The cloud session has not confirmed ${s} (the upload may not have reached it in time)`,
                    level: "warning"
                };
            }
            return {
                text: `The cloud session has not confirmed ${s} and may be running without them`,
                level: "info"
            };
        case "behind":
            return {
                text: "The cloud session still ran with the settings it had for this reply; the ones just sent apply from the next turn (no /clear needed)",
                level: "info"
            };
        case "stale":
            return {
                text: `The cloud session confirmed a different copy of ${s} than the one just sent`,
                level: "warning"
            };
        case "unreadable":
            return {
                text: `The cloud session's answer about ${s} could not be read`,
                level: "warning"
            };
    }
}
const vt = 15000;
const Rt = 30000;
function lVr(e) {
    return Pt(e).pendingSeed(Promise.resolve());
}
function Pt({ sessionId, plan, bound, boundDeviceUuid, held, trigger, launchConsent, isProjectStillSynced, signal, credentials, storageV5, client, deadlineMs = vt, planDeadlineMs = Rt }) {
    let status = SMe();
    let v = Promise.resolve(boundDeviceUuid).catch(()=>{});
    let H = client === undefined ? undefined : Promise.resolve(client);
    let getStoreClient = ()=>H ??= v.then((boundDeviceUuid_1)=>Ee({
                sessionId,
                credentials,
                ...boundDeviceUuid_1 !== undefined && {
                    signer: he({
                        sessionId,
                        boundDeviceUuid: boundDeviceUuid_1,
                        credentials,
                        ...held !== undefined && {
                            held
                        }
                    }),
                    signedOnly: true
                }
            }));
    let L = Ge(Promise.resolve(plan).catch((R)=>{
        if (!Ke(R)) {
            c(R);
        }
        return {
            kind: "none",
            reason: Ke(R) ? "aborted" : "failed"
        };
    }), planDeadlineMs).then((R)=>R ?? {
            kind: "none",
            reason: "too_slow"
        });
    let C;
    L.then((R)=>{
        C = R.kind === "ready" ? R.description : null;
    });
    let E = L.then((plan_1)=>{
        if (plan_1.kind === "ready") {
            return {
                plan: plan_1,
                attempts: Et({
                    sessionId,
                    storageV5,
                    plan: plan_1,
                    bound,
                    trigger,
                    signal,
                    getStoreClient,
                    deadlineMs
                }, ()=>se(launchConsent, isProjectStillSynced))
            };
        }
        return {
            plan: plan_1,
            attempts: null
        };
    });
    return {
        ensureUploaded: (R)=>E.then(({ attempts })=>attempts?.ensureUploaded(R) ?? "done"),
        pendingSeed: (R)=>{
            let B = E.then(({ plan, attempts })=>(attempts === null ? Promise.resolve().then(()=>{
                    for (let M of zt(plan, trigger, planDeadlineMs)){
                        status.publish(M, Nt(plan));
                    }
                    de(Ht(plan.reason, trigger), trigger, "plan_");
                    return {
                        outcome: {
                            kind: "none",
                            reason: plan.reason,
                            ...V(plan)
                        },
                        written: null
                    };
                }) : attempts.endedOnce(R).then((M)=>At(status, {
                        sessionId,
                        plan,
                        bound,
                        trigger
                    }, M))).catch((M)=>{
                    c(M);
                    de({
                        is: "bad",
                        code: "unexpected"
                    }, trigger, "");
                    return {
                        outcome: plan.kind === "ready" ? {
                            kind: "uploaded",
                            outcome: "failed",
                            summary: plan.summary,
                            bound,
                            ...Te(plan),
                            ...V(plan)
                        } : {
                            kind: "none",
                            reason: plan.reason,
                            ...V(plan)
                        },
                        written: null
                    };
                }));
            return iYo({
                completion: B.then(({ outcome })=>outcome),
                status,
                description: ()=>C,
                afterFirstReply: (P, onReadBack)=>B.then(({ outcome, written })=>{
                        if (written === null) {
                            return "skipped";
                        }
                        return getStoreClient().then((client_1)=>Oe({
                                client: client_1,
                                pack: written.pack,
                                generation: written.generation,
                                uploaded: outcome,
                                status,
                                launchConsent,
                                isProjectStillSynced,
                                signal: P,
                                onReadBack
                            }));
                    })
            });
        }
    };
}
function Et(packUpload, mayStillForwardNow) {
    let latest = Le(packUpload, 1);
    let a = {
        packUpload,
        mayStillForwardNow,
        ended: Promise.withResolvers(),
        isEnded: false,
        attemptsMade: 1,
        latest,
        call: undefined
    };
    a.ended.promise.catch(()=>{});
    Ce(a, latest, null);
    return {
        endedOnce: (s)=>{
            s.then(()=>{
                a.isEnded = true;
                return a.latest;
            }).then((_)=>le(a, _), (_)=>fe(a, _));
            return a.ended.promise;
        },
        ensureUploaded: (s)=>a.call ??= Ot(a, s).finally(()=>{
                a.call = undefined;
            })
    };
}
function le(e, n) {
    e.isEnded = true;
    e.ended.resolve(n);
}
function fe(e, n) {
    e.isEnded = true;
    e.ended.reject(n);
}
function Ce(e, n, r) {
    n.then((a)=>{
        if (!Fe(a)) {
            le(e, De(r, a));
        }
    }, (a)=>fe(e, a));
}
function De(e, n) {
    if (e !== null && e.written !== null && n.written === null && n.outcome !== "raced") {
        return e;
    }
    return n;
}
async function Ot(e, n) {
    try {
        let r = await e.latest;
        if (e.isEnded) {
            return "done";
        }
        let a = await e.mayStillForwardNow().catch((h)=>{
            c(h);
            return false;
        });
        if (e.isEnded) {
            return "done";
        }
        if (!a) {
            i("tengu_home_seed_upload_no_longer_allowed", {
                trigger: d(e.packUpload.trigger),
                attempts_made: e.attemptsMade
            });
            le(e, r);
            return "done";
        }
        if (n.aborted) {
            return Ae(r);
        }
        e.attemptsMade += 1;
        let s = Le({
            ...e.packUpload,
            cut: n
        }, e.attemptsMade);
        Ce(e, s, r);
        e.latest = s.then((h)=>De(r, h));
        e.latest.catch(()=>{});
        let _ = await s;
        if (Fe(_)) {
            return Ae(_);
        }
        return "done";
    } catch (error) {
        fe(e, error);
        return "done";
    }
}
function Ae({ outcome, cause, httpStatus }) {
    return {
        kind: "failed",
        ...httpStatus !== undefined && httpStatus >= 400 && {
            httpStatus
        },
        ...outcome === "unauthorized" && {
            remedy: cause === "write_signature_refused" ? "clock" : "login"
        }
    };
}
function Fe({ outcome, cause, isRefusedAsSent }) {
    switch(outcome){
        case "deadline":
        case "unauthorized":
            return true;
        case "unavailable":
            return cause === undefined;
        case "failed":
            return isRefusedAsSent !== true;
        case "sent":
        case "unchanged":
        case "conflict_resolved":
        case "raced":
        case "not_forwarded_at_create":
        case "lane_full":
        case "aborted":
            return false;
    }
}
async function Le({ sessionId, storageV5, plan, bound, trigger, signal, cut, getStoreClient, deadlineMs }, attempt) {
    let k = Date.now();
    let after_failed_create = (attempt === 1 || trigger !== "create") && Szt(sessionId)?.tried === true;
    let U = await Ct(getStoreClient, plan.pack, trigger, {
        sessionId,
        storageV5
    }, signal, cut, deadlineMs);
    i("tengu_home_seed_upload", {
        trigger: d(trigger),
        outcome: d(U.outcome),
        attempt,
        bytes: U.written?.pack.length ?? plan.pack.length,
        generation: U.generation,
        bound,
        row_standing: U.standing === true,
        allow_rules_cut: U.allowRulesCut ?? 0,
        allow_rules_recorded: Szt(sessionId)?.allow.length ?? 0,
        after_failed_create,
        cause: pe(U.cause),
        duration_ms: Date.now() - k
    });
    return U;
}
function At(status, { sessionId, plan, bound, trigger }, { outcome, written, standing, allowRulesCut, cause }) {
    de(Ut(outcome, cause), trigger, "");
    let k = Szt(sessionId);
    xt(status, plan, outcome, {
        sessionId,
        trigger,
        bound,
        didCreateCarryAllowRules: (k?.allow.length ?? 0) > 0
    }, k?.tried === true && standing !== true ? false : standing ?? false, allowRulesCut ?? 0, cause);
    return {
        outcome: {
            kind: "uploaded",
            outcome,
            summary: plan.summary,
            bound,
            ...Te(plan),
            ...V(plan)
        },
        written
    };
}
function V(plan) {
    if (plan.kind === "none") {
        return {};
    }
    let keptForCredential = T7n(plan.leftBehind);
    let keptAsLinks = fVr(plan.leftBehind);
    return {
        ...(keptForCredential.claudeMd || keptForCredential.others > 0) && {
            keptForCredential
        },
        ...keptAsLinks.names.length > 0 && {
            keptAsLinks
        }
    };
}
function Te({ settings }) {
    if (settings === "schema_rejected" || settings === "settings_too_large" || settings === "settings_unreadable") {
        return {
            settingsRefused: settings
        };
    }
    return {};
}
function Ht(reason, n) {
    switch(reason){
        case "failed":
        case "home_unvettable":
        case "rules_unreadable":
            return {
                is: "bad",
                code: reason
            };
        case "nothing_to_send":
        case "too_slow":
            return {
                is: "sad",
                code: reason
            };
        case "unbound":
        case "flag_off":
        case "no_consent":
        case "user_settings_disabled":
        case "aborted":
            return null;
        case "no_project_files":
            return null;
    }
}
function Ut(outcome, cause) {
    switch(outcome){
        case "sent":
        case "unchanged":
        case "conflict_resolved":
            return {
                is: "ok"
            };
        case "aborted":
        case "not_forwarded_at_create":
            return null;
        case "unavailable":
            return {
                is: "sad",
                code: cause ?? outcome
            };
        case "lane_full":
        case "unauthorized":
        case "deadline":
        case "raced":
            return {
                is: "sad",
                code: outcome
            };
        case "failed":
            return {
                is: "bad",
                code: outcome
            };
    }
}
function de(e, trigger, r) {
    if (e === null) {
        return;
    }
    let a = trigger === "create";
    switch(e.is){
        case "ok":
            g("ccr_home_seed");
            if (a) {
                g("ccr_home_seed_create_upload");
            }
            return;
        case "sad":
            f("ccr_home_seed", e.code);
            if (a) {
                f("ccr_home_seed_create_upload", `${r}${e.code}`);
            }
            return;
        case "bad":
            m("ccr_home_seed", e.code);
            if (a) {
                m("ccr_home_seed_create_upload", `${r}${e.code}`);
            }
            return;
    }
}
async function Ct(getStoreClient, pack, trigger, a, signal, cut, deadlineMs) {
    if (sM(signal)) {
        return {
            outcome: "aborted",
            generation: 0,
            written: null
        };
    }
    let S = new AbortController;
    let b = ()=>S.abort();
    signal?.addEventListener("abort", b, {
        once: true
    });
    cut?.addEventListener("abort", b, {
        once: true
    });
    try {
        let y = await Ge(getStoreClient().then((k)=>Dt(k, pack, trigger, a, S.signal)), deadlineMs);
        if (y === undefined || y.outcome === "aborted") {
            if (sM(signal)) {
                return {
                    outcome: "aborted",
                    generation: 0,
                    written: null
                };
            }
            if (trigger === "create") {
                X(a, pack, 1, undefined);
                return {
                    outcome: "deadline",
                    generation: 0,
                    written: {
                        pack,
                        generation: 1
                    }
                };
            }
            return {
                outcome: "deadline",
                generation: 0,
                written: null,
                standing: "unknown"
            };
        }
        return y;
    } finally{
        S.abort();
        signal?.removeEventListener("abort", b);
        cut?.removeEventListener("abort", b);
    }
}
async function Dt(e, pack, trigger, a, signal) {
    if (trigger !== "create") {
        let h = Szt(a.sessionId);
        if (h === undefined) {
            return {
                outcome: "not_forwarded_at_create",
                generation: 0,
                written: null
            };
        }
        let S = await e.getStoreRow(WJ, signal);
        if (S.kind !== "ok" && S.kind !== "not_found") {
            return {
                outcome: Ie(S),
                generation: 0,
                written: null,
                standing: "unknown",
                ...Z(S)
            };
        }
        let b = Ft(pack, h);
        let y = (A)=>E7n(a.sessionId, {
                ...h,
                generation: A,
                etag: undefined,
                at: Date.now()
            }, a.storageV5);
        let k = S.kind === "ok" ? await Be(e, b.pack, S, signal, y) : {
            ...await He(e, xe(b.pack, h.generation), signal, y),
            standing: "gone"
        };
        if (S.kind === "not_found") {
            i("tengu_home_seed_stored_pack_gone", {
                outcome: d(k.outcome),
                generation: k.generation,
                record_generation: h.generation,
                after_failed_create: h.tried === true
            });
        }
        if (k.written !== null) {
            E7n(a.sessionId, {
                ...h,
                generation: k.generation,
                etag: k.etag,
                at: Date.now()
            }, a.storageV5);
        }
        if (b.cut === 0) {
            return k;
        }
        return {
            ...k,
            allowRulesCut: b.cut
        };
    }
    let _ = await He(e, {
        pack,
        generation: 1
    }, signal, async (h)=>{
        if (h > 1) {
            X(a, pack, h, undefined);
        }
    });
    if (_.written !== null) {
        X(a, _.written.pack, _.generation, _.etag);
    } else if (_.outcome in ze) {
        X(a, pack, 1, undefined, {
            tried: true
        });
    }
    return _;
}
async function He(e, { pack, generation }, signal, s) {
    await s?.(generation);
    let _ = await e.putStoreRow(WJ, pack, {
        signal
    });
    if (_.kind !== "conflict") {
        if (_.kind !== "ok") {
            return {
                outcome: Me(_, "sent"),
                generation: 0,
                written: null,
                ...Z(_)
            };
        }
        return {
            outcome: "sent",
            generation,
            written: {
                pack,
                generation
            },
            etag: _.etag
        };
    }
    let h = await e.getStoreRow(WJ, signal);
    if (h.kind !== "ok") {
        return {
            outcome: Ie(h),
            generation: 0,
            written: null,
            standing: true,
            ...Z(h)
        };
    }
    return Be(e, pack, h, signal, s);
}
function X(e, n, r, etag, s = {}) {
    let _ = rge(n);
    let h = _.ok ? Lt(_.pack.settings) ?? [] : [];
    E7n(e.sessionId, {
        generation: r,
        ...etag !== undefined && {
            etag
        },
        ...s,
        allow: h.map(dVr),
        at: Date.now()
    }, e.storageV5);
}
async function Be(e, pack, r, a, s) {
    let _ = Bt(pack, r.content);
    await s?.(_.generation);
    let h = await e.putStoreRow(WJ, _.pack, {
        ifMatchSha256: r.etag,
        signal: a
    });
    let outcome = h.kind === "conflict" ? "raced" : Me(h, _.unchanged ? "unchanged" : "conflict_resolved");
    if (h.kind === "ok") {
        return {
            outcome,
            generation: _.generation,
            written: {
                pack: _.pack,
                generation: _.generation
            },
            standing: true,
            ...h.etag !== undefined && {
                etag: h.etag
            }
        };
    }
    return {
        outcome,
        generation: 0,
        written: null,
        standing: true,
        ...Z(h)
    };
}
function Z(e) {
    switch(e.kind){
        case "lane_unavailable":
        case "unauthorized":
            if (e.cause !== undefined) {
                return {
                    cause: e.cause
                };
            }
            return {};
        case "path_too_long":
        case "too_large":
            return {
                isRefusedAsSent: true
            };
        case "failed":
            if (e.status === undefined) {
                return {};
            }
            return {
                httpStatus: e.status,
                ...e.status >= 400 && e.status < 500 && e.status !== 429 && {
                    isRefusedAsSent: true
                }
            };
        default:
            return {};
    }
}
function Ft(e, n) {
    let r = rge(e);
    if (!r.ok) {
        throw Error("the settings pack to re-send does not parse");
    }
    if (r.pack.settings === null || r.pack.settings.permissions === undefined) {
        return {
            pack: e,
            cut: 0
        };
    }
    let a = me().safeParse(r.pack.settings.permissions);
    if (!a.success) {
        throw Error("the settings pack to re-send carries permissions of an unknown shape");
    }
    let allow = a.data.allow;
    if (allow === undefined) {
        return {
            pack: e,
            cut: 0
        };
    }
    let _ = new Set(n.allow);
    let h = allow.filter((b)=>_.has(dVr(b)));
    let S = allow.length - h.length;
    if (S === 0) {
        return {
            pack: e,
            cut: S
        };
    }
    return {
        pack: Z_t({
            ...r.pack,
            settings: Tt(r.pack.settings, h)
        }),
        cut: S
    };
}
var me = p(()=>_t({
        allow: T(o()).optional()
    }));
function Lt(settings) {
    let n = me().safeParse(settings?.permissions);
    if (n.success) {
        return n.data.allow;
    }
}
function Tt(settings, n) {
    let r = me().safeParse(settings.permissions);
    return {
        ...settings,
        permissions: {
            ...r.success ? r.data : {},
            allow: [
                ...n
            ]
        }
    };
}
function Bt(pack, content) {
    let r = rge(pack);
    let a = rge(content);
    if (r.ok && a.ok) {
        if (Z_t({
            ...r.pack,
            generation: a.pack.generation
        }).equals(content)) {
            return {
                pack: content,
                generation: a.pack.generation,
                unchanged: true
            };
        }
    }
    if (content.equals(pack)) {
        return {
            pack: content,
            generation: 1,
            unchanged: true
        };
    }
    return {
        ...xe(pack, cYo(content) ?? 0),
        unchanged: false
    };
}
function xe(e, n) {
    let r = rge(e);
    if (!r.ok) {
        return {
            pack: e,
            generation: 1
        };
    }
    let a = Math.min(n + 1, A7n);
    return {
        pack: Z_t({
            ...r.pack,
            generation: a
        }),
        generation: a
    };
}
function Me(e, n) {
    switch(e.kind){
        case "ok":
            return n;
        case "conflict":
        case "path_too_long":
        case "too_large":
        case "failed":
            return "failed";
        case "lane_full":
            return "lane_full";
        case "aborted":
            return "aborted";
        case "lane_unavailable":
            return "unavailable";
        case "unauthorized":
            return "unauthorized";
    }
}
function Ie(e) {
    switch(e.kind){
        case "not_found":
        case "failed":
            return "failed";
        case "aborted":
            return "aborted";
        case "lane_unavailable":
            return "unavailable";
        case "unauthorized":
            return "unauthorized";
    }
}
function xt(e, plan, outcome, { sessionId, trigger, bound, didCreateCarryAllowRules }, S, b, cause) {
    let wayOut = outcome === "unavailable" && cause !== "device_key_unavailable" ? "" : ue;
    switch(outcome){
        case "sent":
        case "unchanged":
        case "conflict_resolved":
            {
                e.publish(outcome === "unchanged" && trigger !== "create" ? "Settings from this machine are already in this session" : pVr({
                    ...plan.description,
                    permissionRules: plan.description.permissionRules - b
                }) + (bound ? "" : " (this session cannot run commands on this machine)"), "debug");
                if (b > 0) {
                    e.publish(`${b} ${I(b, "permission allow rule")} ${b === 1 ? "stays" : "stay"} on this machine, because ${b === 1 ? "it was" : "they were"} not in the settings prepared when this cloud session was created; a new session takes ${b === 1 ? "it" : "them"}`, "debug");
                }
                let A = k7n(plan, {
                    launch: trigger === "create" ? "create" : didCreateCarryAllowRules ? "reopen_sent" : "reopen_sent_no_allow_recorded",
                    settingsFile: ce(plan.configHome)
                });
                if (A !== null) {
                    e.publish(A, Ne(plan));
                }
                return;
            }
        case "aborted":
            return;
        case "deadline":
            e.publish(Ue(S, {
                ifNoneStood: bSn,
                otherwise: "The cloud session may not have your latest settings",
                why: "sending your settings took too long",
                wayOut
            }), "warning");
            return;
        case "raced":
            e.publish(`${bSn}: another launch of this session, or the session itself, wrote its settings first`, "warning");
            return;
        case "not_forwarded_at_create":
            if (!ea().claim(`home_seed_not_sent_again:${ar(sessionId)}`)) {
                return;
            }
            e.publish("Settings from this machine were not sent again: this machine has no record of sending them when this session was created (a session started without them, from another machine, by an earlier build, or older than this machine still tracks)", "debug");
            return;
        case "lane_full":
        case "unavailable":
        case "unauthorized":
        case "failed":
            {
                let why = cause === "write_signature_refused" ? Mt : outcome === "unavailable" && cause !== undefined ? It[cause] : ze[outcome];
                e.publish(Ue(S, {
                    ifNoneStood: ySn,
                    otherwise,
                    why,
                    wayOut
                }), "warning");
                return;
            }
    }
}
function Ne(plan) {
    let n = plan.summary.overCap + plan.unreadable + F(plan.leftBehind, (s)=>s.reason === "undefusable");
    let r = plan.settings === "schema_rejected" || plan.settings === "settings_too_large" || plan.settings === "settings_unreadable";
    let a = plan.summary.droppedRules.credentialRestrictions > 0;
    if (n > 0 || r || a) {
        return "warning";
    }
    return "debug";
}
var ue = "; start a new cloud session to try again";
function ce(configHome) {
    return Rs(yn("userSettings") ?? configHome);
}
function Ue(e, { ifNoneStood, otherwise, why, wayOut }) {
    if (e === false) {
        return `${ifNoneStood}: ${why}${wayOut}`;
    }
    return `${e === "gone" ? bSn : otherwise}: ${why}`;
}
function N(trigger, n, r) {
    return [
        trigger === "create" ? `${ySn}: ${n}${r}` : `${otherwise}: ${n}`
    ];
}
var ze = {
    lane_full: "the session has reached its limit of uploaded files",
    unavailable: "sending your settings is not available",
    unauthorized: wzt,
    failed: "sending your settings failed"
};
var Mt = "the cloud could not confirm where your settings came from (this machine's clock may be wrong)";
var It = {
    device_key_unavailable: "this machine could not prove it is the computer the session is bound to (you are signed out, or its device key is missing or unreadable)",
    compliance_restricted: "your organization's compliance policy does not allow sending your settings",
    switched_off_by_anthropic: "sending your settings was turned off by Anthropic for now",
    direct_sync_off: "sending your settings is turned off for your organization"
};
function Nt(plan) {
    if (plan.kind === "empty" && plan.reason === "nothing_to_send") {
        return Ne(plan);
    }
    if (plan.reason === "user_settings_disabled") {
        return "debug";
    }
    return "warning";
}
function zt(plan, trigger, planDeadlineMs) {
    let a = Math.ceil(planDeadlineMs / 1000);
    switch(plan.reason){
        case "unbound":
            return [];
        case "rules_unreadable":
            {
                if (plan.settings === "settings_unreadable") {
                    return N(trigger, `${ce(plan.configHome)} has errors (see /status) or links to a missing file`, "; fix it and start a new cloud session");
                }
                let s = plan.unreadableSettingsFiles.length;
                let _ = r8r(plan.unreadableSettingsFiles);
                if (_ === "") {
                    return N(trigger, oQo([], ""), "");
                }
                return N(trigger, `${_} ${I(s, "has", "have")} errors`, `; once ${I(s, "it is", "they are")} fixed, start a new cloud session`);
            }
        case "failed":
            return N(trigger, "preparing your settings failed (see the debug log)", ue);
        case "too_slow":
            return N(trigger, `preparing your settings took over ${a} ${I(a, "second")}`, ue);
        case "home_unvettable":
            if (plan.cause === "too_many_links") {
                return N(trigger, `your memory files and what they @import, or the links under ${Rs(plan.configHome)}, are too many to check`, "; remove some and start a new cloud session");
            }
            return N(trigger, `a link, an unreadable folder or an @import under ${Rs(plan.configHome)} could not be checked`, "");
        case "nothing_to_send":
            {
                let s = plan.kind === "empty" ? k7n(plan, {
                    launch: trigger === "create" ? "create" : "reopen_sent_nothing",
                    settingsFile: ce(plan.configHome)
                }) : null;
                if (s === null) {
                    return [];
                }
                return [
                    s
                ];
            }
        case "user_settings_disabled":
            return [
                "Settings from this machine were not sent to the cloud session: this launch does not load your user settings (--setting-sources, or an SDK settingSources list, without user)"
            ];
        case "flag_off":
        case "no_consent":
        case "aborted":
        case "no_project_files":
            return [];
    }
}
export { lVr };
