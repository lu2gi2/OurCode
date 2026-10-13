import { Zh, QS, oO, Zwr, UE, Ci, gz, Ea, k, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ne, vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, qR, W, l, v, Ym, xs, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { St, _, X, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { xH } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ja, lPs } from "/$bunfs/root/chunk-hz24p3zh.js";
import { ty } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Oa, dd } from "/$bunfs/root/chunk-9fa34ggx.js";
import { HF, kz, $m } from "/$bunfs/root/chunk-ph7a449e.js";
import { O1, Wa } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { NSo } from "/$bunfs/root/chunk-t0b6khh6.js";
import { Dkt, DVe } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { ltr, WZe, MGe, ctr, qvn, dtr, eHe, HGe, DGe } from "/$bunfs/root/chunk-7kwdaan6.js";
import { QMe } from "/$bunfs/root/chunk-t98dpkx7.js";
import { K2 } from "/$bunfs/root/chunk-pp9kr3hb.js";
import { Mbs, Hbs, QJt, aY } from "/$bunfs/root/chunk-4n16n64p.js";
import { o, E, u, _t, ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { constants, createReadStream, createWriteStream } from "fs";
import { access, chmod, copyFile, mkdir, readdir, readlink, realpath, rename, rm, rmdir, stat, symlink, unlink, utimes, writeFile, lstat } from "fs/promises";
import { homedir } from "os";
import { randomBytes, createHash, createPublicKey, verify } from "crypto";
import { basename, delimiter, dirname, join, resolve } from "path";
import { Readable, Transform } from "stream";
import { pipeline } from "stream/promises";
import { createZstdDecompress } from "zlib";
const $t = Se(ty(), 1);
function Be() {
    return `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixB
UZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncr
mYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7
ro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmV
NX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y
0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAs
IdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAi
p5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81Iw
H6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw
1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0
lC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3Zp
IgmI+CePUPB1pDf+lhPkU1MCAwEAAQ==
-----END PUBLIC KEY-----
`;
}
const Ue = Buffer.from("claude-code-manifest-v1\x00");
const Re = "2.1.207";
const je = "flag";
const Dt = 1;
const Lt = "RSASSA-PKCS1-v1_5-SHA512";
const Nt = p(()=>u({
        schema: A(Dt),
        algorithm: A(Lt),
        signature: o().min(1),
        publicKeySha256: o().regex(/^[0-9a-f]{64}$/)
    }));
const Te = p(()=>_t({
        version: o(),
        manifestSignatureEnforcement: o().optional(),
        platforms: ue(o(), _t({
            checksum: o(),
            size: E().optional(),
            binary: o().optional()
        }))
    }));
class aM extends x {
    reason;
    constructor(e, n){
        super(`Release verification failed for Claude Code ${e} (${n}). The update was not installed.`, "Release manifest signature verification failed", n);
        this.name = "ManifestSignatureError";
        this.reason = n;
    }
}
function We({ manifestBytes, sidecar, expectedVersion, publicKeyPem }) {
    let h = Nt().safeParse(sidecar);
    if (!h.success) {
        throw new aM(expectedVersion, "sidecar_malformed");
    }
    let { signature, publicKeySha256 } = h.data;
    if (Buffer.from(signature, "base64").toString("base64") !== signature) {
        throw new aM(expectedVersion, "sidecar_malformed");
    }
    let y;
    try {
        y = createPublicKey(publicKeyPem);
    } catch  {
        throw new aM(expectedVersion, "key_mismatch");
    }
    let S = createHash("sha256").update(y.export({
        type: "spki",
        format: "der"
    })).digest("hex");
    if (publicKeySha256 !== S) {
        throw new aM(expectedVersion, "key_mismatch");
    }
    let R = false;
    try {
        R = verify("sha512", Buffer.concat([
            Ue,
            manifestBytes
        ]), y, Buffer.from(signature, "base64"));
    } catch  {
        R = false;
    }
    if (!R) {
        throw new aM(expectedVersion, "signature_invalid");
    }
    let F;
    try {
        let M = Te().safeParse(X(manifestBytes.toString("utf8")));
        F = M.success ? M.data : undefined;
    } catch  {
        F = undefined;
    }
    if (!F || F.version !== expectedVersion) {
        throw new aM(expectedVersion, "version_mismatch");
    }
    return F;
}
const Ie = "https://downloads.claude.ai/claude-code-releases";
function Me(e, n) {
    if (O1(e)) {
        return K2.get(e, n);
    }
    return Wa.get(e, n);
}
const Ge = 30000;
const He = 3;
async function qt(e = "latest", n, r) {
    let s = Date.now();
    let h = 0;
    let w;
    try {
        w = await ltr((signal)=>{
            h++;
            return Me(`${n}/${e}`, {
                timeout: Ge,
                responseType: "text",
                signal,
                ...r
            });
        }, {
            attempts: He,
            timeoutMs: Ge,
            onRetry: (R, F)=>{
                t(`Version check failed on attempt ${R}/${He}, retrying: ${F instanceof Error ? F.message : String(F)}`);
            }
        });
    } catch (error) {
        let F = Date.now() - s;
        let M = error instanceof Error ? error.message : String(error);
        let http_status = ge(error);
        m("update_check", "update_check_binary_repo_failed");
        i("tengu_version_check_failure", {
            latency_ms: F,
            http_status,
            is_timeout: ve(error),
            attempt: h,
            platform: gz(an()),
            channel: d(e)
        });
        let N = new x(`Failed to fetch version from ${n}/${e} after ${h} attempt(s): ${M}`, "Failed to fetch version from binary repo");
        t(`Failed to fetch version from ${n}/${e} after ${h} attempt(s): ${M}`, {
            level: "error"
        });
        throw N;
    }
    let b = Date.now() - s;
    let y = w.data.trim();
    let y_length = y.length;
    if (!Zwr(y)) {
        m("update_check", "update_check_binary_repo_invalid_response");
        throw new x(`Version pointer for ${e} did not return a version (got ${y_length} bytes)`, "Version pointer returned a non-version body");
    }
    i("tengu_version_check_success", {
        latency_ms: b,
        attempt: h
    });
    if (h > 1) {
        f("update_check", "update_check_binary_repo_retry");
    } else {
        g("update_check");
    }
    return y;
}
async function zvn(e) {
    if (/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e)) {
        let r = e.startsWith("v") ? e.slice(1) : e;
        if (/^99\.99\./.test(r)) {
            throw new x(`Version ${r} is not available for installation. Use 'stable' or 'latest'.`, "Test-fixture version rejected outside test builds");
        }
        return r;
    }
    let n = e;
    if (n !== "stable" && n !== "latest" && n !== "rc") {
        throw new x(`Invalid channel: ${e}. Use 'latest' or 'stable'`, "Invalid release channel");
    }
    if (n === "rc") {
        throw new x(`Invalid channel: ${e}. Use 'stable' or 'latest'`, "Invalid release channel");
    }
    return qt(n, Ie);
}
const Cr = p(()=>u({
        dist: u({
            integrity: o().min(1),
            tarball: o().min(1).optional()
        })
    }));
const Gt = 120000;
const oe = 3;
const Xe = 600000;
const ye = 10000;
const Ze = 1000;
const Qe = oe * (ye + Ze);
const Ht = 2 * Qe;
function Kt() {
    return Number(a.CLAUDE_CODE_STALL_TIMEOUT_MS_FOR_TESTING) || Gt;
}
function Yt() {
    return Number(a.CLAUDE_CODE_DOWNLOAD_DEADLINE_MS_FOR_TESTING) || Xe;
}
class O2t extends Error {
    constructor(){
        super("Download stalled: no data received for 120 seconds");
        this.name = "StallTimeoutError";
    }
}
function Je(e) {
    if (dd(e) && e.response) {
        return false;
    }
    let n = $m(e)?.code;
    if (n === "ECONNABORTED" || n === "ETIMEDOUT") {
        return false;
    }
    if (n !== undefined && (kz.has(n) || HF.has(n))) {
        return true;
    }
    return qR(e, "aborted");
}
async function Ke(e, n, r, s = {}, h) {
    let w;
    let checksumRetried = false;
    let y = false;
    for(let S = 1; S <= oe; S++){
        let R = new AbortController;
        let F = false;
        let M = false;
        let L;
        let N;
        let D;
        let C = ()=>{
            if (L) {
                clearTimeout(L);
                L = undefined;
            }
            if (N) {
                clearTimeout(N);
                N = undefined;
            }
        };
        let P = ()=>{
            if (L) {
                L.refresh();
            } else {
                L = setTimeout((T)=>T.abort("stall"), Kt(), R);
            }
        };
        try {
            P();
            N = setTimeout((G)=>G.abort("deadline"), Yt(), R);
            let T = await Me(e, {
                timeout: Xe,
                responseType: "stream",
                signal: R.signal,
                ...s
            });
            let I = createHash("sha256");
            let V = h ? createHash("sha256") : undefined;
            let O = V ?? I;
            let H = new Transform({
                transform (G, U, K) {
                    P();
                    O.update(G);
                    K(null, G);
                }
            });
            D = createWriteStream(r, {
                highWaterMark: 4194304
            });
            D.on("drain", P);
            if (h) {
                let G = 0;
                let U = new Transform({
                    transform (K, ee, ae) {
                        G += K.length;
                        if (G > h.decompressedSize) {
                            ae(new x(`Decompressed binary exceeds the manifest size of ${h.decompressedSize} bytes`, "Decompressed binary larger than manifest size"));
                            return;
                        }
                        I.update(K);
                        ae(null, K);
                    }
                });
                await pipeline(T.data, H, createZstdDecompress(), U, D, {
                    signal: R.signal
                });
            } else {
                await pipeline(T.data, H, D, {
                    signal: R.signal
                });
            }
            F = true;
            C();
            if (h) {
                let G = V?.digest("hex");
                if (G !== h.checksum) {
                    throw new x(`Checksum mismatch: expected ${h.checksum}, got ${G} (compressed)`, "Checksum mismatch during compressed binary download");
                }
            }
            let Z = I.digest("hex");
            if (Z !== n) {
                throw Object.assign(new x(`Checksum mismatch: expected ${n}, got ${Z}`, "Checksum mismatch during binary download"), {
                    deterministic: h !== undefined
                });
            }
            M = true;
            await chmod(r, 493);
            return {
                checksumRetried,
                dropRetried: y
            };
        } catch (error) {
            C();
            let I = Jt(error) ? Object.assign(new x(`Checksum mismatch: zstd decoder rejected the frame (${v(error)})`, "zstd decoder rejected the frame"), {
                cause: error
            }) : error;
            if (dd(I) && I.response?.data instanceof Readable) {
                I.response.data.destroy();
            }
            if (D && !M) {
                let K = D;
                await new Promise((resolvePromise)=>K.close(()=>resolvePromise()));
                await rm(r, {
                    force: true
                }).catch((ee)=>t(`Failed to remove partial download: ${ee instanceof Error ? ee.message : String(ee)}`, {
                        level: "error"
                    }));
            }
            let V = R.signal.aborted ? R.signal.reason : undefined;
            let O = V === "deadline";
            let H = !O && (V === "stall" || Oa(I));
            if (O) {
                throw Object.assign(new x("Download timed out: exceeded the total deadline"), {
                    attempt: S
                });
            }
            let Z = I instanceof Error && I.message.includes("Checksum mismatch");
            let G = !F && (Je(I) || $m(I)?.code === "ERR_STREAM_PREMATURE_CLOSE");
            let cause = H ? new O2t : W(I);
            w = cause;
            if ((H || Z || G) && !tn(I) && S < oe) {
                if (Z) {
                    checksumRetried = true;
                } else if (G) {
                    y = true;
                }
                t(`Download ${Z ? "checksum mismatch" : H ? "stalled" : "connection dropped"} on attempt ${S}/${oe}, retrying...`);
                await Q(1000);
                continue;
            }
            if (G) {
                let code = v(cause);
                throw Object.assign(new x(`The connection dropped while downloading the update (attempt ${S}/${oe}: ${cause.message}). Check your network \u2014 proxies sometimes cut off large downloads.`, "Connection dropped repeatedly during binary download"), {
                    attempt: S,
                    connectionDrop: true,
                    cause,
                    ...code && {
                        code
                    }
                });
            }
            throw Object.assign(cause, {
                attempt: S
            });
        }
    }
    throw w ?? Error("Download failed after all retries");
}
function et() {
    return k("tengu_elegant_pancake", null);
}
function Fe(e, n = et()) {
    if (e === "always") {
        return n !== false;
    }
    return n === true;
}
function tt() {
    return je;
}
function Xt() {
    return Fe(tt());
}
function Zt(manifestSignatureEnforcement, flag) {
    return manifestSignatureEnforcement === "always" || manifestSignatureEnforcement === "flag" && Fe("flag", flag);
}
async function nt(e, expectedVersion, { authConfig, signaturePolicy, platform, startTime, purpose = "download" }) {
    let y = purpose === "download";
    let manifestBytes;
    let manifest;
    let metadataDropRetried = false;
    let M = Gvn(platform);
    try {
        let D = await Pe(`${e}/${expectedVersion}/manifest.json`, {
            timeout: ye,
            ...authConfig,
            responseType: "arraybuffer",
            maxContentLength: 1048576
        });
        metadataDropRetried = D.dropRetried;
        manifestBytes = Buffer.from(D.data);
        let C = Te().safeParse(X(manifestBytes.toString("utf8")));
        if (!C.success) {
            throw new x(`Manifest for ${expectedVersion} is not a valid release manifest`, "Release manifest failed schema validation");
        }
        manifest = C.data;
    } catch (error) {
        let C = Date.now() - startTime;
        let P = error instanceof Error ? error.message : String(error);
        if (y) {
            m("update_download", "update_download_manifest_failed");
        }
        i("tengu_binary_manifest_fetch_failure", {
            latency_ms: C,
            http_status: ge(error),
            is_timeout: ve(error),
            platform: gz(platform)
        });
        t(`Failed to fetch manifest from ${e}/${expectedVersion}/manifest.json: ${P}`, {
            level: "error"
        });
        throw error;
    }
    let manifestAuthenticated = false;
    let signatureVerified = false;
    if (signaturePolicy !== "skip") {
        let D = `${e}/${expectedVersion}/manifest.json.raw-sig.json`;
        let C = Date.now();
        let http_status;
        let T;
        try {
            let sidecar;
            let V = false;
            try {
                let O = await Pe(D, {
                    timeout: ye,
                    ...authConfig,
                    responseType: "json",
                    maxContentLength: 65536,
                    signal: AbortSignal.timeout(Qe)
                });
                metadataDropRetried ||= O.dropRetried;
                sidecar = O.data;
            } catch (error) {
                http_status = ge(error);
                if (http_status !== 404) {
                    throw new aM(expectedVersion, http_status !== undefined ? "sidecar_fetch_http_error" : Date.now() - C > Ht ? "sidecar_fetch_interrupted" : ve(error) ? "sidecar_fetch_timeout" : "sidecar_fetch_connection_error");
                }
                if (signaturePolicy !== "allow-unsigned-legacy") {
                    throw new aM(expectedVersion, "sidecar_missing");
                }
                V = true;
            }
            if (V) {
                f("update_manifest_signature", "unsigned_legacy");
                t(`No manifest signature published for ${expectedVersion} (predates ${Re}); continuing with checksum-only verification`, {
                    level: "warn"
                });
            } else {
                let O = We({
                    manifestBytes,
                    sidecar,
                    expectedVersion,
                    publicKeyPem: Be()
                });
                t(`Verified manifest signature for ${expectedVersion}`);
                let H = O.platforms[platform];
                if (H && H.binary !== M) {
                    throw new aM(expectedVersion, "binary_name_mismatch");
                }
                manifest = O;
                manifestAuthenticated = true;
                if (signaturePolicy === "require-enforcing-release") {
                    await Ea().catch(()=>null);
                    T = {
                        flag: et()
                    };
                    if (!Zt(O.manifestSignatureEnforcement, T.flag)) {
                        throw new aM(expectedVersion, "release_predates_enforcement");
                    }
                }
                signatureVerified = true;
                g("update_manifest_signature");
            }
        } catch (error) {
            if (!(error instanceof aM)) {
                throw error;
            }
            let V = Date.now() - C;
            await Ea().catch(()=>null);
            let enforced = T ? Fe(tt(), T.flag) : Xt();
            i("tengu_binary_manifest_signature_failed", {
                reason: d(error.reason),
                http_status,
                enforced,
                platform: gz(platform),
                latency_ms: V
            });
            if (enforced) {
                if (error.reason === "release_predates_enforcement") {
                    f("update_manifest_signature", error.reason);
                    t(`${expectedVersion} is signed but predates manifest-signature enforcement; not eligible as a channel target for this client`, {
                        level: "warn"
                    });
                } else if (error.reason === "sidecar_fetch_interrupted") {
                    f("update_manifest_signature", error.reason);
                    t(`Signature sidecar fetch for ${expectedVersion} was interrupted (process suspended mid-request); will retry on the next update check`, {
                        level: "warn"
                    });
                } else {
                    m("update_manifest_signature", error.reason);
                    if (y) {
                        m("update_download", "update_download_manifest_signature");
                    }
                    t(`Manifest signature check failed for ${D}: ${error.reason}`, {
                        level: "error"
                    });
                }
                throw error;
            }
            f("update_manifest_signature", error.reason);
            t(`Manifest signature check failed for ${D}: ${error.reason} (enforcement disabled; continuing)`, {
                level: "warn"
            });
        }
    }
    return {
        manifest,
        manifestAuthenticated,
        signatureVerified,
        metadataDropRetried
    };
}
async function Qt(e, n, r, { authConfig, signaturePolicy }) {
    let w = ie();
    await w.rm(n, {
        recursive: true,
        force: true
    });
    let b = Oge();
    let y = Gvn(b);
    let startTime = Date.now();
    i("tengu_binary_download_attempt", {});
    let [R, F] = await Promise.all([
        nt(r, e, {
            authConfig,
            signaturePolicy,
            platform: b,
            startTime
        }),
        Pe(`${r}/${e}/manifest.zst.json`, {
            timeout: ye,
            ...authConfig,
            responseType: "json",
            maxContentLength: 1048576
        }).catch((U)=>{
            t(`No compressed manifest for ${e}: ${l(U)}`);
        })
    ]);
    let { manifest, signatureVerified } = R;
    let N = F?.data;
    let D = R.metadataDropRetried || F?.dropRetried === true;
    let C = manifest.platforms[b];
    if (!C) {
        m("update_download", "update_download_platform_not_found");
        i("tengu_binary_platform_not_found", {});
        throw new x(`Native binaries for ${b} are not available on this release channel (version ${e} ships: ${Object.keys(manifest.platforms).sort().join(", ")}).`, "Native binaries not available for platform on this channel");
    }
    let C_checksum = C.checksum;
    let checksum = N?.platforms?.[b]?.checksum;
    let C_size = C.size;
    let V = checksum !== undefined && /^[a-f0-9]{64}$/.test(checksum) && C_size !== undefined && Number.isInteger(C_size) && C_size > 0 ? {
        checksum,
        decompressedSize: C_size
    } : undefined;
    let O = `${r}/${e}/${b}/${y}`;
    await w.mkdir(n);
    let H = join(n, y);
    let compressed = V !== undefined;
    let G = compressed ? `${O}.zst` : O;
    try {
        let U;
        if (V) {
            try {
                U = await Ke(G, C_checksum, H, authConfig || {}, V);
            } catch (error) {
                if (ge(error) === undefined && !en(error)) {
                    throw error;
                }
                compressed = false;
                G = O;
                t(`Compressed binary unusable (${error instanceof Error ? error.message : String(error)}), falling back to ${O}`);
            }
        }
        let { checksumRetried, dropRetried } = U ?? await Ke(G, C_checksum, H, authConfig || {});
        let ae = Date.now() - startTime;
        if (V && !compressed) {
            f("update_download", "update_download_zst_fallback");
        } else if (checksumRetried) {
            f("update_download", "update_download_checksum_retry");
        } else if (dropRetried || D) {
            f("update_download", "update_download_drop_retry");
        } else {
            g("update_download");
        }
        i("tengu_binary_download_success", {
            latency_ms: ae,
            compressed
        });
        return {
            signatureVerified,
            expectedChecksum: C_checksum
        };
    } catch (error) {
        let K = Date.now() - startTime;
        let ee = error instanceof Error ? error.message : String(error);
        let is_checksum_mismatch = ee.includes("Checksum mismatch");
        if (is_checksum_mismatch) {
            m("update_download", "update_download_checksum_mismatch");
        } else if (error instanceof O2t) {
            m("update_download", "update_download_stall_timeout");
        } else if (nn(error)) {
            m("update_download", "update_download_connection_drop");
        } else {
            m("update_download", "update_download_binary_failed");
        }
        i("tengu_binary_download_failure", {
            latency_ms: K,
            http_status: ge(error),
            is_timeout: ve(error),
            is_checksum_mismatch,
            attempt: rn(error),
            platform: gz(b),
            compressed
        });
        t(`Failed to download binary from ${G}: ${ee}`, {
            level: "error"
        });
        throw error;
    }
}
function rt(e, { explicitVersionRequested, requireEnforcingRelease }) {
    if (requireEnforcingRelease) {
        return "require-enforcing-release";
    }
    if (explicitVersionRequested && oO(e, Re)) {
        return "allow-unsigned-legacy";
    }
    return "require";
}
async function it(latestVersion, installPath, r) {
    let s = Oge();
    let { manifest, manifestAuthenticated, signatureVerified } = await nt(Ie, latestVersion, {
        signaturePolicy: rt(latestVersion, r),
        platform: s,
        startTime: Date.now(),
        purpose: "reverify"
    });
    if (!manifestAuthenticated) {
        t(`Manifest for retained ${latestVersion} is unauthenticated; activating the retained copy without a checksum comparison`, {
            level: "warn"
        });
        return {
            signatureVerified: false,
            binaryMatches: true,
            expectedChecksum: undefined
        };
    }
    let expectedChecksum = manifest.platforms[s]?.checksum;
    let binaryMatches = expectedChecksum !== undefined && await ke(installPath, expectedChecksum);
    if (!binaryMatches) {
        t(`Retained ${latestVersion} does not match its signed manifest checksum; re-downloading`);
    }
    return {
        signatureVerified,
        binaryMatches,
        expectedChecksum
    };
}
function at(error) {
    if (!dd(error) || error.response) {
        return false;
    }
    let n = $m(error)?.code;
    return n !== undefined && (HF.has(n) || n === "ETIMEDOUT");
}
async function be(e) {
    let n = createHash("sha256");
    await pipeline(createReadStream(e), n);
    return n.digest("hex");
}
async function ke(e, n) {
    try {
        return await be(e) === n;
    } catch (error) {
        t(`Could not hash ${e} (${v(error) ?? W(error).name}); treating as mismatched`);
        return false;
    }
}
async function ot(latestVersion, n, { explicitVersionRequested, requireEnforcingRelease }) {
    let { signatureVerified, expectedChecksum } = await Qt(latestVersion, n, Ie, {
        signaturePolicy: rt(latestVersion, {
            explicitVersionRequested,
            requireEnforcingRelease
        })
    });
    return {
        downloadType: "binary",
        signatureVerified,
        expectedChecksum
    };
}
function ge(error) {
    if (dd(error) && error.response) {
        return error.response.status;
    }
}
function ve(error) {
    if (error instanceof O2t) {
        return true;
    }
    if (Oa(error)) {
        return true;
    }
    if (dd(error) && (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT")) {
        return true;
    }
    if (error !== null && typeof error === "object" && "code" in error && error.code === "ETIMEDOUT") {
        return true;
    }
    let n = (error instanceof Error ? error.message : String(error)).toLowerCase();
    return n.includes("timeout") || n.includes("timed out");
}
function Jt(error) {
    return v(error)?.startsWith("ZSTD_error_") === true;
}
function en(error) {
    let n = error instanceof Error ? error.message : String(error);
    return n.includes("Checksum mismatch") || n.includes("exceeds the manifest size");
}
function tn(e) {
    return e !== null && typeof e === "object" && "deterministic" in e && e.deterministic === true;
}
function nn(error) {
    return error !== null && typeof error === "object" && "connectionDrop" in error && error.connectionDrop === true;
}
function rn(error) {
    if (error !== null && typeof error === "object" && "attempt" in error && typeof error.attempt === "number") {
        return error.attempt;
    }
}
function an() {
    try {
        return Oge();
    } catch  {
        return "unknown";
    }
}
async function Pe(e, n) {
    let r = false;
    for(let s = 1;; s++){
        try {
            return {
                data: (await Me(e, n)).data,
                dropRetried: r
            };
        } catch (error) {
            if (s >= oe || !Je(error)) {
                throw error;
            }
            r = true;
            t(`Fetch of ${e} connection dropped on attempt ${s}/${oe}, retrying...`);
            await Q(Ze);
        }
    }
}
function me() {
    return !vs(undefined);
}
const un = 7200000;
function De(pid) {
    if (pid <= 1) {
        return false;
    }
    try {
        process.kill(pid, 0);
        return true;
    } catch  {
        return false;
    }
}
function dn(pid, execPath) {
    if (!De(pid)) {
        return false;
    }
    if (pid === process.pid) {
        return true;
    }
    try {
        let r = NSo(pid);
        if (!r) {
            return true;
        }
        let s = r.toLowerCase();
        let h = execPath.toLowerCase();
        return s.includes("claude") || s.includes(h);
    } catch  {
        return true;
    }
}
function fe(e) {
    let n = ie();
    try {
        let r = n.readFileSync(e, {
            encoding: "utf8"
        });
        if (!r || r.trim() === "") {
            return null;
        }
        let s = X(r);
        if (typeof s.pid !== "number" || !s.version || !s.execPath) {
            return null;
        }
        return s;
    } catch  {
        return null;
    }
}
function _e(e) {
    let n = fe(e);
    if (!n) {
        return false;
    }
    let { pid, execPath } = n;
    if (!De(pid)) {
        return false;
    }
    if (!dn(pid, execPath)) {
        t(`Lock PID ${pid} is running but does not appear to be Claude - treating as stale`);
        return false;
    }
    let h = ie();
    try {
        let w = h.statSync(e);
        if (Date.now() - w.mtimeMs > un) {
            if (!De(pid)) {
                return false;
            }
        }
    } catch  {}
    return true;
}
function fn(e, n) {
    xH(e, _(n, null, 2));
}
async function st(e, n) {
    let r = ie();
    let version = basename(e);
    if (_e(n)) {
        let w = fe(n);
        t(`Cannot acquire lock for ${version} - held by PID ${w?.pid}`);
        return null;
    }
    let h = {
        pid: process.pid,
        version,
        execPath: process.execPath,
        acquiredAt: Date.now()
    };
    try {
        fn(n, h);
        if (fe(n)?.pid !== process.pid) {
            return null;
        }
        t(`Acquired PID lock for ${version} (PID ${process.pid})`);
        return ()=>{
            try {
                if (fe(n)?.pid === process.pid) {
                    r.unlinkSync(n);
                    t(`Released PID lock for ${version}`);
                }
            } catch (error) {
                t(`Failed to release lock for ${version}: ${error}`);
            }
        };
    } catch (error) {
        t(`Failed to acquire lock for ${version}: ${error}`);
        return null;
    }
}
async function lt(e, n) {
    let r = await st(e, n);
    if (!r) {
        return false;
    }
    let s = ()=>{
        try {
            r();
        } catch  {}
    };
    process.on("exit", s);
    process.on("SIGINT", s);
    process.on("SIGTERM", s);
    return true;
}
async function ut(e, n, r) {
    let s = await st(e, n);
    if (!s) {
        return false;
    }
    try {
        await r();
        return true;
    } finally{
        s();
    }
}
async function dt(locks) {
    let n = ie();
    let r = 0;
    let s;
    try {
        s = (await readdir(locks)).filter((h)=>h.endsWith(".lock"));
    } catch (error) {
        if (z(error)) {
            return 0;
        }
        t(`Failed to readdir locks directory: ${W(error).message}`, {
            level: "error"
        });
        return 0;
    }
    for (let h of s){
        let w = join(locks, h);
        try {
            if ((await lstat(w)).isDirectory()) {
                n.rmSync(w, {
                    recursive: true,
                    force: true
                });
                r++;
                t(`Cleaned up legacy directory lock: ${h}`);
            } else if (!_e(w)) {
                n.unlinkSync(w);
                r++;
                t(`Cleaned up stale lock: ${h}`);
            }
        } catch  {}
        await new Promise((resolvePromise)=>setImmediate(resolvePromise));
    }
    return r;
}
const retained_count = 2;
const stale = 604800000;
const vn = false;
function Oge() {
    let a_platform = a.platform;
    let n = "x64";
    if (!n) {
        let r = Error("Unsupported architecture: x64");
        t("Native installer does not support architecture: x64", {
            level: "error"
        });
        throw r;
    }
    if (vn) {
        n = "arm64";
    }
    if (a_platform === "linux") {
        if (UE.isAndroidEnvironment()) {
            return `linux-${n}-android`;
        }
        if (UE.isMuslEnvironment()) {
            return `linux-${n}-musl`;
        }
    }
    return `${a_platform}-${n}`;
}
function Gvn(e) {
    if (e.startsWith("win32")) {
        return "claude.exe";
    }
    return "claude";
}
function J() {
    let e = Oge();
    let n = Gvn(e);
    return {
        versions: QJt(),
        staging: join(Hbs(), "claude", "staging"),
        locks: join(Mbs(), "claude", "locks"),
        executable: join(aY(), n)
    };
}
async function Et(e) {
    return stat(e).then((n)=>n.isFile() && n.size > 0, ()=>false);
}
async function bn(e, n) {
    for (let r of e){
        if (await Et(n(r))) {
            return r;
        }
    }
}
function kn(executable) {
    return `${executable}.old.${Date.now()}.${process.pid}`;
}
const $n = 2592000000;
function En(file, n) {
    if (!file.toLowerCase().startsWith(`${n.toLowerCase()}.`)) {
        return;
    }
    let r = /^(?:old\.(\d+)(?:\.(\d+))?|new\.\d+\.(\d+)\.[0-9a-f]+)$/i.exec(file.slice(n.length + 1));
    if (r === null) {
        return undefined;
    }
    if (r[1] !== undefined) {
        return {
            kind: "backup",
            stampedMs: Number(r[1]),
            ownerPid: r[2] === undefined ? undefined : Number(r[2])
        };
    }
    return {
        kind: "staged",
        stampedMs: Number(r[3])
    };
}
async function re(e) {
    try {
        let n = await stat(e);
        if (!n.isFile() || n.size === 0) {
            return false;
        }
        return (n.mode & constants.S_IXUSR) !== 0;
    } catch  {
        return false;
    }
}
async function ze(e) {
    let n = J();
    let r = [
        n.versions,
        n.staging,
        n.locks
    ];
    await Promise.all(r.map((w)=>mkdir(w, {
            recursive: true
        })));
    let s = dirname(n.executable);
    await mkdir(s, {
        recursive: true
    });
    if (!/^[a-zA-Z0-9._+-]+$/.test(e) || e.includes("..") || e === ".") {
        throw Error(`Invalid version string "${e}": contains path-unsafe characters`);
    }
    let installPath = join(n.versions, e);
    try {
        await writeFile(installPath, "", {
            encoding: "utf8",
            flag: "wx"
        });
    } catch (error) {
        if (v(error) !== "EEXIST") {
            throw error;
        }
        try {
            if ((await stat(installPath)).size === 0) {
                let b = new Date;
                await utimes(installPath, b, b);
            }
        } catch  {}
    }
    return {
        stagingPath: join(n.staging, e),
        installPath
    };
}
async function Rt(e, n, retries = 0) {
    let s = J();
    let h = we(s, e);
    await mkdir(s.locks, {
        recursive: true
    });
    if (me()) {
        let b = 0;
        let y = retries + 1;
        let S = retries > 0 ? 1000 : 100;
        let R = retries > 0 ? 5000 : 500;
        while(b < y){
            if (await ut(e, h, async ()=>{
                try {
                    await n();
                } catch (error) {
                    t(`Native installer version-lock callback failed: ${error}`, {
                        level: "error"
                    });
                    throw error;
                }
            })) {
                i("tengu_version_lock_acquired", {
                    is_pid_based: true,
                    is_lifetime_lock: false,
                    attempts: b + 1
                });
                return true;
            }
            b++;
            if (b < y) {
                let M = Math.min(S * 2 ** (b - 1), R);
                await Q(M);
            }
        }
        i("tengu_version_lock_failed", {
            is_pid_based: true,
            is_lifetime_lock: false,
            attempts: y
        });
        Ee(e, Error("Lock held by another process"));
        return false;
    }
    let w = null;
    try {
        try {
            w = await ja(e, {
                stale,
                retries: {
                    retries,
                    minTimeout: retries > 0 ? 1000 : 100,
                    maxTimeout: retries > 0 ? 5000 : 500
                },
                lockfilePath: h,
                onCompromised: (b)=>{
                    t(`NON-FATAL: Version lock was compromised during operation: ${b.message}`, {
                        level: "info"
                    });
                }
            });
        } catch (error) {
            i("tengu_version_lock_failed", {
                is_pid_based: false,
                is_lifetime_lock: false
            });
            Ee(e, error);
            return false;
        }
        try {
            await n();
            i("tengu_version_lock_acquired", {
                is_pid_based: false,
                is_lifetime_lock: false
            });
            return true;
        } catch (error) {
            t(`tryWithVersionLock: callback failed under version lock: ${l(error)}`, {
                level: "error"
            });
            throw error;
        }
    } finally{
        if (w) {
            await w();
        }
    }
}
const pt = [
    100,
    500,
    2000
];
class M2t extends x {
    constructor(){
        super("Staged binary no longer matches the verified checksum; refusing to install", "Staged binary checksum mismatch at install");
    }
}
async function Tt(e, n, r) {
    await mkdir(dirname(n), {
        recursive: true
    });
    let s;
    for(let h = 1; h <= pt.length + 1; h++){
        let w = `${n}.tmp.${process.pid}.${Date.now()}.${h}`;
        try {
            await copyFile(e, w);
            await chmod(w, 493);
            if (r !== undefined && await be(w) !== r) {
                throw new M2t;
            }
            await rename(w, n);
            t(`Atomically installed binary to ${n}` + (h > 1 ? ` (attempt ${h})` : ""));
            return {
                attempts: h
            };
        } catch (error) {
            s = error;
            try {
                await unlink(w);
            } catch  {}
            let y = v(error);
            let S = y === "EBUSY" || y === "EPERM" && false;
            let R = pt[h - 1];
            if (!S || R === undefined) {
                throw error;
            }
            t(`atomicMoveToInstallPath attempt ${h} failed with ${y}; retrying in ${R}ms`);
            await Q(R);
        }
    }
    throw s;
}
async function Sn(e, installPath, r) {
    try {
        let s = join(e, "node_modules", "@anthropic-ai");
        let w = (await readdir(s)).find((S)=>S.startsWith("claude-cli-native-"));
        if (!w) {
            i("tengu_native_install_package_failure", {
                stage_find_package: true,
                error_package_not_found: true
            });
            throw Error("Could not find platform-specific native package");
        }
        let b = join(s, w, "cli");
        try {
            await stat(b);
        } catch  {
            i("tengu_native_install_package_failure", {
                stage_binary_exists: true,
                error_binary_not_found: true
            });
            throw Error("Native binary not found in staged package");
        }
        let { attempts } = await Tt(b, installPath, r);
        await rm(e, {
            recursive: true,
            force: true
        });
        i("tengu_native_install_package_success", {
            install_attempts: attempts
        });
        return {
            moveRetried: attempts > 1
        };
    } catch (error) {
        let h = l(error);
        if (!(h.includes("Could not find platform-specific") || h.includes("Native binary not found"))) {
            i("tengu_native_install_package_failure", {
                stage_atomic_move: true,
                error_move_failed: true
            });
            m("update_apply", "update_apply_native_move_failed");
            if (xs(error)) {
                t(`installVersionFromPackage: atomic move failed: ${h}`, {
                    level: "error"
                });
            } else {
                c(W(error));
            }
        } else {
            m("update_apply", "update_apply_native_staging_missing");
            t(`installVersionFromPackage: ${h}`, {
                level: "error"
            });
        }
        throw error;
    }
}
async function Rn(e, installPath, r) {
    try {
        let s = Oge();
        let h = Gvn(s);
        let w = join(e, h);
        try {
            await stat(w);
        } catch (error) {
            i("tengu_native_install_binary_failure", {
                stage_binary_exists: true,
                error_binary_not_found: true,
                error_code: Ym(error)
            });
            throw Error("Staged binary not found");
        }
        let { attempts } = await Tt(w, installPath, r);
        await rm(e, {
            recursive: true,
            force: true
        });
        i("tengu_native_install_binary_success", {
            install_attempts: attempts
        });
        return {
            moveRetried: attempts > 1
        };
    } catch (error) {
        if (error instanceof M2t) {
            i("tengu_native_install_binary_failure", {
                stage_atomic_move: true,
                error_checksum_mismatch: true
            });
            m("update_apply", "update_apply_staged_checksum_mismatch");
        } else if (!l(error).includes("Staged binary not found")) {
            i("tengu_native_install_binary_failure", {
                stage_atomic_move: true,
                error_move_failed: true,
                error_code: Ym(error)
            });
            m("update_apply", "update_apply_native_move_failed");
        } else {
            m("update_apply", "update_apply_native_staging_missing");
        }
        if (xs(error)) {
            t(`installVersionFromBinary: atomic move failed: ${l(error)}`, {
                level: "error"
            });
        } else {
            c(W(error));
        }
        throw error;
    }
}
async function Tn(e, installPath, r, s) {
    if (r === "npm") {
        return Sn(e, installPath, s);
    }
    return Rn(e, installPath, s);
}
const xn = new q(()=>new Map);
async function gt(latestVersion, { forceReinstall, explicitVersionRequested, requireEnforcingRelease }) {
    let { stagingPath, installPath } = await ze(latestVersion);
    let { executable } = J();
    let y = Ne("true");
    let S = y ? `${stagingPath}.${process.pid}.${Date.now()}.${randomBytes(4).toString("hex")}` : stagingPath;
    let R = xn.of(B().host);
    let F = R.get(latestVersion);
    let M = !(F && (F.enforcingRelease || !requireEnforcingRelease));
    let L = {
        wasNewInstall: false,
        moveRetried: false,
        activationFailed: false,
        activationRefused: false,
        skippedUnverifiedRelease: true
    };
    let N = M ? undefined : F?.checksum;
    let wasNewInstall = forceReinstall || !await xt(latestVersion);
    if (!wasNewInstall && M) {
        try {
            let T = await it(latestVersion, installPath, {
                explicitVersionRequested,
                requireEnforcingRelease
            });
            N = T.expectedChecksum;
            if (!T.binaryMatches) {
                wasNewInstall = true;
            } else if (T.signatureVerified) {
                R.set(latestVersion, {
                    enforcingRelease: requireEnforcingRelease,
                    checksum: N
                });
            }
        } catch (error) {
            if (error instanceof aM) {
                if (requireEnforcingRelease && error.reason === "release_predates_enforcement") {
                    return L;
                }
                throw error;
            }
            if (!explicitVersionRequested || requireEnforcingRelease || !at(error)) {
                throw error;
            }
            t(`Could not re-verify retained ${latestVersion} (${W(error).name}); offline, activating as requested`, {
                level: "warn"
            });
        }
    } else if (!wasNewInstall && F?.checksum !== undefined) {
        if (!await ke(installPath, F.checksum)) {
            t(`Retained ${latestVersion} no longer matches the checksum verified earlier in this process; re-downloading`, {
                level: "warn"
            });
            R.delete(latestVersion);
            wasNewInstall = true;
        }
    }
    let moveRetried = false;
    if (wasNewInstall) {
        t(forceReinstall ? `Force reinstalling native installer version ${latestVersion}` : `Downloading native installer version ${latestVersion}`);
        await At(dirname(S));
        let T;
        let I;
        try {
            ({ downloadType: T, signatureVerified: I, expectedChecksum: N } = await ot(latestVersion, S, {
                explicitVersionRequested,
                requireEnforcingRelease
            }));
            ({ moveRetried } = await Tn(S, installPath, T, N));
        } catch (error) {
            if (requireEnforcingRelease && error instanceof aM && error.reason === "release_predates_enforcement") {
                return L;
            }
            throw error;
        } finally{
            if (y) {
                await rm(S, {
                    recursive: true,
                    force: true
                }).catch((V)=>t(`Could not remove the update staging directory (a later update removes it after one hour): ${l(V)}`, {
                        level: "warn"
                    }));
            }
        }
        if (I) {
            R.set(latestVersion, {
                enforcingRelease: requireEnforcingRelease,
                checksum: N
            });
        }
    } else {
        t(`Version ${latestVersion} already installed, updating symlink`);
    }
    await Fn(executable);
    let P = await Dn(executable, installPath, {
        expectedChecksum: N
    });
    if (P !== "updated" && !await re(executable)) {
        let T = false;
        try {
            await stat(installPath);
            T = true;
        } catch  {}
        m("update_apply", "update_apply_native_symlink_failed");
        throw Error(`Failed to create executable at ${executable}. Source file exists: ${T}. Either ${executable} is not writable, or the existing file there was not created by the native installer and is not a working launcher \u2014 the updater will not overwrite a launcher it does not own. Remove it and re-run the update.`);
    }
    return {
        wasNewInstall,
        moveRetried,
        activationFailed: P === "failed",
        activationRefused: P === "refused",
        skippedUnverifiedRelease: false
    };
}
async function xt(latestVersion) {
    let { installPath } = await ze(latestVersion);
    return re(installPath);
}
async function Cn() {
    if (await An()) {
        return true;
    }
    let { executable } = J();
    return await re(executable) && !await DVe(executable).catch(()=>false);
}
async function An() {
    let { versions, executable } = J();
    let r = false;
    let s = [
        {
            versions,
            executable
        }
    ];
    let [h, w] = await Promise.all([
        realpath(versions).catch(()=>versions),
        realpath(dirname(executable)).catch(()=>dirname(executable))
    ]);
    let executable_1 = join(w, basename(executable));
    if (h !== versions || executable_1 !== executable) {
        s.push({
            versions: h,
            executable: executable_1
        });
    }
    return s.some((y)=>Pn(process.execPath, {
            ...y,
            isWindows: false
        }));
}
function Pn(execPath, { versions, executable, isWindows }) {
    let h = (y)=>{
        if (isWindows) {
            return y.replaceAll("\\", "/").toLowerCase();
        }
        return y;
    };
    let w = h(execPath);
    let b = `${h(versions).replace(/\/+$/, "")}/`;
    return w.startsWith(b) || w === h(executable);
}
function In() {
    try {
        let e = k("tengu_canary", {});
        return typeof e.external === "string" && $t.valid(e.external) || null;
    } catch (error) {
        t(`getCanaryVersion: GB read failed, falling through: ${l(error)}`);
        return null;
    }
}
async function Mn(e, n = false) {
    let r = Date.now();
    let { executable } = J();
    let h = !/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e);
    let { maxVersion, forceDowngradeEnabled } = await eHe();
    let y = forceDowngradeEnabled && !n && h && !!maxVersion && HGe({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }.VERSION, maxVersion, "native_update");
    let latestVersion = y ? maxVersion : await zvn(e);
    let S_length = latestVersion.length;
    if (!Zwr(latestVersion)) {
        throw new x(`Invalid version string from ${h ? "version pointer" : "argument"}: not a well-formed version (${S_length} characters)`, "Invalid version string: not a well-formed version");
    }
    t(`Checking for native installer update to version ${latestVersion}`);
    let requireEnforcingRelease = h && await Cn();
    if (e === "latest" && !y) {
        let T = In();
        let I = T && maxVersion && Zh(T, maxVersion);
        if (T && Zh(T, latestVersion) && !I) {
            t(`Native installer: canary ${T} active, overriding ${latestVersion}`);
            latestVersion = T;
        } else if (I) {
            t(`Native installer: canary ${T} exceeds maxVersion ${maxVersion}, not applying`);
        }
    }
    if (!y && !n && maxVersion && Zh(latestVersion, maxVersion)) {
        t(`Native installer: maxVersion ${maxVersion} is set, capping update from ${latestVersion} to ${maxVersion}`);
        if (QS({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION, maxVersion)) {
            t(`Native installer: current version ${{
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION} is already at or above maxVersion ${maxVersion}, skipping update`);
            i("tengu_native_update_skipped_max_version", {
                latency_ms: Date.now() - r,
                max_version: Ci(maxVersion),
                available_version: Ci(latestVersion)
            });
            return {
                success: true,
                wasSkipped: true,
                latestVersion
            };
        }
        latestVersion = maxVersion;
    }
    if (!n && latestVersion === ({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION && await xt(latestVersion) && await re(executable)) {
        t(`Found ${latestVersion} at ${executable}, skipping install`);
        i("tengu_native_update_complete", {
            latency_ms: Date.now() - r,
            was_new_install: false,
            was_force_reinstall: false,
            was_already_running: true
        });
        return {
            success: true,
            wasSkipped: true,
            latestVersion
        };
    }
    if (!n && DGe(latestVersion)) {
        i("tengu_native_update_skipped_minimum_version", {
            latency_ms: Date.now() - r,
            target_version: Ci(latestVersion)
        });
        return {
            success: true,
            wasSkipped: true,
            latestVersion
        };
    }
    if (y) {
        i("tengu_native_update_forced_downgrade", {
            from_version: Ci({
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION),
            to_version: Ci(latestVersion)
        });
    }
    let was_new_install = false;
    let L = false;
    let N = false;
    let D = false;
    let C = false;
    let P;
    if (Ne("true")) {
        ({ wasNewInstall: was_new_install, moveRetried: L, activationFailed: N, activationRefused: D, skippedUnverifiedRelease: C } = await gt(latestVersion, {
            forceReinstall: n,
            explicitVersionRequested: !h,
            requireEnforcingRelease
        }));
        P = Date.now() - r;
    } else {
        let { installPath } = await ze(latestVersion);
        if (n) {
            await On(installPath);
        }
        let I = await Rt(installPath, async ()=>{
            ({ wasNewInstall: was_new_install, moveRetried: L, activationFailed: N, activationRefused: D, skippedUnverifiedRelease: C } = await gt(latestVersion, {
                forceReinstall: n,
                explicitVersionRequested: !h,
                requireEnforcingRelease
            }));
        }, 3);
        P = Date.now() - r;
        if (!I) {
            let V = J();
            let O;
            if (me()) {
                let H = we(V, installPath);
                if (_e(H)) {
                    O = fe(H)?.pid;
                }
            }
            f("update_apply", "update_apply_native_lock_failed");
            i("tengu_native_update_lock_failed", {
                latency_ms: P,
                lock_holder_pid: O
            });
            return {
                success: false,
                latestVersion,
                lockFailed: true,
                lockHolderPid: O
            };
        }
    }
    if (C) {
        i("tengu_native_update_skipped_unverified_release", {
            latency_ms: P,
            target_version: Ci(latestVersion)
        });
        t(`Native installer: resolved ${latestVersion} predates manifest signature enforcement; staying on ${{
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION}`, {
            level: "warn"
        });
        return {
            success: true,
            wasSkipped: true,
            skippedUnverifiedRelease: true,
            latestVersion
        };
    }
    if (N) {
        f("update_apply", "update_apply_native_activation_failed_old_binary_kept");
    } else if (D) {
        f("update_apply", "update_apply_native_activation_refused_external_launcher");
    } else if (L) {
        f("update_apply", "update_apply_native_move_retry");
    } else {
        g("update_apply");
    }
    i("tengu_native_update_complete", {
        latency_ms: P,
        was_new_install,
        was_force_reinstall: n
    });
    t(`Successfully updated to version ${latestVersion}`);
    return {
        success: true,
        latestVersion
    };
}
async function Fn(executable) {
    try {
        await rmdir(executable);
        t(`Removed empty directory at ${executable}`);
    } catch (error) {
        let r = v(error);
        if (r !== "ENOTDIR" && r !== "ENOENT" && r !== "ENOTEMPTY") {
            t(`Could not remove directory at ${executable}: ${error}`);
        }
    }
}
async function Dn(executable, installPath, { expectedChecksum } = {}) {
    if (Oge().startsWith("win32")) {
        try {
            let y = dirname(executable);
            await mkdir(y, {
                recursive: true
            });
            let S;
            try {
                S = await stat(executable);
            } catch  {}
            if (S) {
                try {
                    let M = await stat(installPath);
                    if (S.size === M.size && (expectedChecksum === undefined || await ke(executable, expectedChecksum))) {
                        return "noop";
                    }
                } catch  {}
            }
            let R = `${executable}.new.${process.pid}.${Date.now()}.${randomBytes(4).toString("hex")}`;
            try {
                await copyFile(installPath, R);
            } catch (error) {
                if (z(error)) {
                    throw Error(`Source file does not exist: ${installPath}`);
                }
                throw error;
            }
            let F;
            try {
                F = expectedChecksum === undefined || await be(R) === expectedChecksum;
            } catch (error) {
                await unlink(R).catch(()=>{});
                throw error;
            }
            if (!F) {
                await unlink(R).catch(()=>{});
                t(`Refusing to install a launcher copy of ${installPath} that does not match its signed checksum`, {
                    level: "error"
                });
                return "failed";
            }
            try {
                let M = S !== undefined;
                if (!M) {
                    try {
                        await rename(R, executable);
                    } catch (error) {
                        let N = v(error);
                        if (N !== "EEXIST" && N !== "EPERM" && N !== "EBUSY") {
                            throw error;
                        }
                        M = true;
                    }
                }
                if (M) {
                    let L = kn(executable);
                    await rename(executable, L);
                    try {
                        await rename(R, executable);
                    } catch (error) {
                        try {
                            await rename(L, executable);
                        } catch (err) {
                            let C = Error(`Failed to restore old executable: ${err}`, {
                                cause: error
                            });
                            c(C);
                            throw C;
                        }
                        throw error;
                    }
                }
            } catch (error) {
                await unlink(R).catch(()=>{});
                throw error;
            }
            return "updated";
        } catch (error) {
            t(`Failed to copy executable from ${installPath} to ${executable}: ${error}`, {
                level: "error"
            });
            return "failed";
        }
    }
    let w = dirname(executable);
    try {
        await mkdir(w, {
            recursive: true
        });
        t(`Created directory ${w} for symlink`);
    } catch (error) {
        t(`Failed to create directory ${w}: ${error}`, {
            level: "error"
        });
        return "failed";
    }
    try {
        await symlink(installPath, executable);
        t(`Created symlink ${executable} -> ${installPath}`);
        return "updated";
    } catch (error) {
        if (v(error) !== "EEXIST") {
            t(`Failed to create symlink from ${executable} to ${installPath}: ${error}`, {
                level: "error"
            });
            return "failed";
        }
    }
    if (!await Dkt(executable) && !await DVe(executable).catch(()=>false)) {
        t(`Not replacing ${executable}: it was not created by the native installer (not a symlink into a claude/versions/ directory) and is not an npm shim, so this update will not overwrite it. New versions still install under the versions/ directory; remove ${executable} and re-run the update to let the installer manage the launcher again.`, {
            level: "warn"
        });
        return "refused";
    }
    let b = `${executable}.tmp.${process.pid}.${Date.now()}`;
    try {
        await symlink(installPath, b);
        await rename(b, executable);
        t(`Atomically updated symlink ${executable} -> ${installPath}`);
        return "updated";
    } catch (error) {
        try {
            await unlink(b);
        } catch  {}
        t(`Failed to create symlink from ${executable} to ${installPath}: ${error}`, {
            level: "error"
        });
        return "failed";
    }
}
async function PGe(e = false) {
    if (Ne(process.env.DISABLE_INSTALLATION_CHECKS)) {
        return [];
    }
    let n = await QMe();
    if (n === "development") {
        return [];
    }
    let r = ce();
    if (!(e || n === "native" || r.installMethod === "native")) {
        return [];
    }
    let h = J();
    let w = [];
    let b = [];
    let y = dirname(h.executable);
    let S = resolve(y);
    let F = Oge().startsWith("win32");
    try {
        await access(y);
    } catch  {
        w.push({
            message: `claude command at ${h.executable} missing or broken (${y} does not exist)`,
            userActionRequired: true,
            type: "error"
        });
        b.push("bin_dir_missing");
    }
    if (F) {
        if (!await re(h.executable)) {
            w.push({
                message: `claude command at ${h.executable} missing or broken`,
                userActionRequired: true,
                type: "error"
            });
            b.push("executable_missing");
        }
    } else {
        try {
            let L = await readlink(h.executable);
            let N = resolve(dirname(h.executable), L);
            if (!await re(N)) {
                w.push({
                    message: `claude command at ${h.executable} missing or broken (symlink points to ${L})`,
                    userActionRequired: true,
                    type: "error"
                });
                b.push("executable_invalid");
            }
        } catch (error) {
            if (z(error)) {
                w.push({
                    message: `claude command at ${h.executable} missing or broken`,
                    userActionRequired: true,
                    type: "error"
                });
                b.push("executable_missing");
            } else if (!await re(h.executable)) {
                w.push({
                    message: `claude command at ${h.executable} missing or broken (not a valid Claude binary)`,
                    userActionRequired: true,
                    type: "error"
                });
                b.push("executable_invalid");
            }
        }
    }
    if (!(a.PATH || "").split(delimiter).some((L)=>{
        try {
            let N = resolve(L);
            if (F) {
                return N.toLowerCase() === S.toLowerCase();
            }
            return N === S;
        } catch  {
            return false;
        }
    })) {
        b.push("not_in_path");
        if (F) {
            let L = y.replaceAll("/", "\\");
            w.push({
                message: `Native installation exists but ${L} is not in your PATH. Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal.`,
                userActionRequired: true,
                type: "path"
            });
        } else {
            let L = WZe();
            let D = MGe()[L];
            let C = D ? D.replace(homedir(), "~") : "your shell config file";
            w.push({
                message: `Native installation exists but ~/.local/bin is not in your PATH. Run:

echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${C} && source ${C}`,
                userActionRequired: true,
                type: "path"
            });
        }
    }
    if (b.length === 0) {
        g("native_check_install");
    } else {
        f("native_check_install", b[0]);
    }
    return w;
}
class Ct {
    inFlight = null;
    begin(e) {
        this.inFlight = e;
    }
    reset() {
        this.inFlight = null;
    }
}
const Ln = new q(()=>new Ct);
function IGe(e, n = false, r) {
    if (n) {
        return ht(e, n, r);
    }
    let s = Ln.of(B().host);
    if (s.inFlight) {
        t("installLatest: joining in-flight call");
        return s.inFlight;
    }
    let h = ht(e, n, r);
    s.begin(h);
    let w = ()=>{
        s.reset();
    };
    h.then(w, w);
    return h;
}
async function ht(e, n = false, r) {
    let s = await Mn(e, n);
    if (!s.success) {
        return {
            latestVersion: null,
            wasUpdated: false,
            lockFailed: s.lockFailed,
            lockHolderPid: s.lockHolderPid
        };
    }
    if (s.skippedUnverifiedRelease) {
        return {
            latestVersion: s.latestVersion,
            wasUpdated: false,
            wasSkipped: true,
            skippedUnverifiedRelease: true,
            lockFailed: false
        };
    }
    if (ce().installMethod !== "native") {
        await Ae((w)=>({
                ...w,
                installMethod: "native",
                autoUpdates: false,
                autoUpdatesProtectedForNative: true
            }), r);
        t('Native installer: Set installMethod to "native" and disabled legacy auto-updater for protection');
    }
    itr();
    return {
        latestVersion: s.latestVersion,
        wasUpdated: s.success && !s.wasSkipped,
        wasSkipped: s.wasSkipped,
        lockFailed: false
    };
}
async function Nn(executable) {
    try {
        let n = await readlink(executable);
        let r = resolve(dirname(executable), n);
        if (await re(r)) {
            return r;
        }
    } catch  {}
    return null;
}
function we(e, n) {
    let r = basename(n);
    return join(e.locks, `${r}.lock`);
}
async function Mge() {
    let e = J();
    if (!process.execPath.includes(e.versions)) {
        return;
    }
    let n = resolve(process.execPath);
    try {
        let r = we(e, n);
        await mkdir(e.locks, {
            recursive: true
        });
        if (me()) {
            if (!await lt(n, r)) {
                i("tengu_version_lock_failed", {
                    is_pid_based: true,
                    is_lifetime_lock: true
                });
                Ee(n, Error("Lock already held by another process"));
                return;
            }
            i("tengu_version_lock_acquired", {
                is_pid_based: true,
                is_lifetime_lock: true
            });
            t(`Acquired PID lock on running version: ${n}`);
        } else {
            let s;
            try {
                s = await ja(n, {
                    stale,
                    retries: 0,
                    lockfilePath: r,
                    onCompromised: (h)=>{
                        t(`NON-FATAL: Lock on running version was compromised: ${h.message}`, {
                            level: "info"
                        });
                    }
                });
                i("tengu_version_lock_acquired", {
                    is_pid_based: false,
                    is_lifetime_lock: true
                });
                t(`Acquired mtime-based lock on running version: ${n}`);
                St(async ()=>{
                    try {
                        await s?.();
                    } catch  {}
                });
            } catch (error) {
                if (z(error)) {
                    t(`Cannot lock current version - file does not exist: ${n}`, {
                        level: "info"
                    });
                    return;
                }
                i("tengu_version_lock_failed", {
                    is_pid_based: false,
                    is_lifetime_lock: true
                });
                Ee(n, error);
                return;
            }
        }
    } catch (error) {
        if (z(error)) {
            t(`Cannot lock current version - file does not exist: ${n}`, {
                level: "info"
            });
            return;
        }
        t(`NON-FATAL: Failed to lock current version during execution ${l(error)}`, {
            level: "info"
        });
    }
}
function Ee(e, n) {
    t(`NON-FATAL: Lock acquisition failed for ${e} (expected in multi-process scenarios): ${l(n)}`, {
        level: "error"
    });
}
async function On(installPath) {
    let n = J();
    let r = we(n, installPath);
    try {
        await unlink(r);
        t(`Force-removed lock file at ${r}`);
    } catch (error) {
        t(`Failed to force-remove lock file: ${l(error)}`);
    }
}
const Vn = 3600000;
async function At(e) {
    let n = Date.now() - Vn;
    try {
        let r = await readdir(e);
        let s = 0;
        for (let h of r){
            let w = join(e, h);
            try {
                if ((await stat(w)).mtime.getTime() < n) {
                    await rm(w, {
                        recursive: true,
                        force: true
                    });
                    s++;
                    t(`Cleaned up old staging directory: ${h}`);
                }
            } catch  {}
        }
        if (s > 0) {
            t(`Cleaned up ${s} orphaned staging directories`);
            i("tengu_native_staging_cleanup", {
                cleaned_count: s
            });
        }
    } catch (error) {
        if (!z(error)) {
            t(`Failed to clean up staging directories: ${error}`);
        }
    }
}
async function itr() {
    await Promise.resolve();
    let e = J();
    let n = Date.now() - 3600000;
    let r = Date.now() - 1209600000;
    let s = Date.now() - $n;
    if (Oge().startsWith("win32")) {
        let y = dirname(e.executable);
        let S = basename(e.executable);
        try {
            let R = await readdir(y);
            let F = R.flatMap((file)=>{
                let T = En(file, S);
                if (T === undefined) {
                    return [];
                }
                return [
                    {
                        file,
                        ...T
                    }
                ];
            });
            let M = F.filter((P)=>P.kind === "backup").sort((P, T)=>T.stampedMs - P.stampedMs);
            let L = R.find((P)=>P.toLowerCase() === S.toLowerCase());
            let N = M.length > 0 && !(L !== undefined && await Et(join(y, L)));
            let D = N ? await bn(M, (P)=>join(y, P.file)) : undefined;
            let C = 0;
            for (let P of F){
                if (P.kind === "backup" && N && (P === D && P.stampedMs >= s || P.stampedMs >= r)) {
                    continue;
                }
                try {
                    let T = join(y, P.file);
                    if (P.stampedMs >= n || (await stat(T)).mtime.getTime() >= n) {
                        continue;
                    }
                    await unlink(T);
                    C++;
                } catch  {}
            }
            if (C > 0) {
                t(`Cleaned up ${C} old Windows executables on startup`);
            }
        } catch (error) {
            if (!z(error)) {
                t(`Failed to clean up old Windows executables: ${error}`);
            }
        }
    }
    await At(e.staging);
    if (me()) {
        let y = await dt(e.locks);
        if (y > 0) {
            t(`Cleaned up ${y} stale version locks`);
            i("tengu_native_stale_locks_cleanup", {
                cleaned_count: y
            });
        }
    }
    let h;
    try {
        h = await readdir(e.versions);
    } catch (error) {
        if (!z(error)) {
            t(`Failed to readdir versions directory: ${error}`);
            f("native_cleanup_versions", "readdir_failed");
        } else {
            g("native_cleanup_versions");
        }
        return;
    }
    let w = [];
    let b = 0;
    for (let y of h){
        let path = join(e.versions, y);
        if (/\.tmp\.\d+\.\d+(\.\d+)?$/.test(y)) {
            try {
                if ((await stat(path)).mtime.getTime() < n) {
                    await unlink(path);
                    b++;
                    t(`Cleaned up orphaned temp install file: ${y}`);
                }
            } catch  {}
            continue;
        }
        try {
            let R = await stat(path);
            if (!R.isFile()) {
                continue;
            }
            if (R.size > 0 && (R.mode & 73) === 0) {
                continue;
            }
            w.push({
                name: y,
                path,
                resolvedPath: resolve(path),
                mtime: R.mtime,
                size: R.size
            });
        } catch  {}
    }
    if (b > 0) {
        t(`Cleaned up ${b} orphaned temp install files`);
        i("tengu_native_temp_files_cleanup", {
            cleaned_count: b
        });
    }
    if (w.length === 0) {
        g("native_cleanup_versions");
        return;
    }
    if (!await Dkt(e.executable) && !await DVe(e.executable).catch(()=>false)) {
        t(`Skipping native version cleanup: the launcher at ${e.executable} is externally managed, so the version(s) it needs cannot be determined`);
        f("native_cleanup_versions", "skipped_external_launcher");
        return;
    }
    try {
        let y = process.execPath;
        let S = new Set;
        if (y && y.includes(e.versions)) {
            S.add(resolve(y));
        }
        let R = await Nn(e.executable);
        if (R) {
            S.add(R);
        } else if (Oge().startsWith("win32")) {
            try {
                let C = await stat(e.executable);
                for (let P of w){
                    if (P.size === C.size) {
                        S.add(P.resolvedPath);
                    }
                }
            } catch  {}
        }
        for (let C of w){
            if (S.has(C.resolvedPath)) {
                continue;
            }
            let P = we(e, C.resolvedPath);
            let T = false;
            if (me()) {
                T = _e(P);
            } else {
                try {
                    T = await lPs(C.resolvedPath, {
                        stale,
                        lockfilePath: P
                    });
                } catch  {
                    T = false;
                }
            }
            if (T) {
                S.add(C.resolvedPath);
                t(`Protecting locked version from cleanup: ${C.name}`);
            }
            await new Promise((resolvePromise)=>setImmediate(resolvePromise));
        }
        let F = w.filter((C)=>!S.has(C.resolvedPath)).sort((C, P)=>P.mtime.getTime() - C.mtime.getTime());
        let M = [
            ...F.filter((C)=>C.size > 0).slice(retained_count),
            ...F.filter((C)=>C.size === 0 && C.mtime.getTime() < n)
        ];
        if (M.length === 0) {
            i("tengu_native_version_cleanup", {
                total_count: w.length,
                deleted_count: 0,
                protected_count: S.size,
                retained_count,
                lock_failed_count: 0,
                error_count: 0
            });
            g("native_cleanup_versions");
            return;
        }
        let deleted_count = 0;
        let lock_failed_count = 0;
        let error_count = 0;
        await Promise.all(M.map(async (C)=>{
            try {
                let P = true;
                let T = await Rt(C.path, async ()=>{
                    if (C.size === 0) {
                        let I = await stat(C.path);
                        if (I.size > 0 || I.mtime.getTime() >= n) {
                            P = false;
                            return;
                        }
                    }
                    await unlink(C.path);
                });
                if (T && P) {
                    deleted_count++;
                } else if (!T) {
                    lock_failed_count++;
                    t(`Skipping deletion of ${C.name} - locked by another process`);
                }
            } catch (error) {
                error_count++;
                t(`Failed to delete version ${C.name}: ${error}`, {
                    level: "error"
                });
            }
        }));
        i("tengu_native_version_cleanup", {
            total_count: w.length,
            deleted_count,
            protected_count: S.size,
            retained_count,
            lock_failed_count,
            error_count
        });
        if (error_count > 0) {
            f("native_cleanup_versions", "delete_errors");
        } else if (lock_failed_count > 0) {
            f("native_cleanup_versions", "lock_failed");
        } else {
            g("native_cleanup_versions");
        }
    } catch (error) {
        if (!z(error)) {
            c(Error(`Version cleanup failed: ${error}`));
            f("native_cleanup_versions", "unexpected_error");
        } else {
            g("native_cleanup_versions");
        }
    }
}
async function hSt() {
    let e = J();
    try {
        if (await DVe(e.executable).catch((n)=>{
            if (z(n)) {
                return false;
            }
            throw n;
        })) {
            t(`Skipping removal of ${e.executable} - appears to be npm-managed`);
            g("native_remove_symlink");
            return;
        }
        if (!await Dkt(e.executable)) {
            t(`Skipping removal of ${e.executable} - not created by the native installer`);
            g("native_remove_symlink");
            return;
        }
        await unlink(e.executable);
        t(`Removed claude symlink at ${e.executable}`);
        g("native_remove_symlink");
    } catch (error) {
        if (z(error)) {
            g("native_remove_symlink");
            return;
        }
        t(`Failed to remove claude symlink: ${error}`, {
            level: "error"
        });
        m("native_remove_symlink", "unlink_failed");
    }
}
async function E6r() {
    let e = [];
    let n = MGe();
    let r = false;
    for (let [s, h] of Object.entries(n)){
        try {
            let w = await qvn(h);
            if (!w) {
                continue;
            }
            let { filtered, hadAlias } = ctr(w);
            if (hadAlias) {
                await dtr(h, filtered);
                e.push({
                    message: `Removed claude alias from ${h}. Run: unalias claude`,
                    userActionRequired: true,
                    type: "alias"
                });
                t(`Cleaned up claude alias from ${s} config`);
            }
        } catch (error) {
            r = true;
            t(`Failed to clean up claude alias from ${h}: ${error}`, {
                level: "error"
            });
            e.push({
                message: `Failed to clean up ${h}: ${error}`,
                userActionRequired: false,
                type: "error"
            });
        }
    }
    if (r) {
        f("native_cleanup_aliases", "config_write_failed");
    } else {
        g("native_cleanup_aliases");
    }
    return e;
}
async function zn(e) {
    try {
        let n = await ct("npm", [
            "config",
            "get",
            "prefix"
        ], {
            useToolMemoryCgroup: false
        });
        if (n.code !== 0 || !n.stdout) {
            return {
                success: false,
                error: "Failed to get npm global prefix"
            };
        }
        let r = n.stdout.trim();
        let s = false;
        async function h(w, b) {
            try {
                await unlink(w);
                t(`Manually removed ${b}: ${w}`);
                return true;
            } catch  {
                return false;
            }
        }
        if (Oge().startsWith("win32")) {
            let w = join(r, "claude.cmd");
            let b = join(r, "claude.ps1");
            let y = join(r, "claude");
            if (await h(w, "bin script")) {
                s = true;
            }
            if (await h(b, "PowerShell script")) {
                s = true;
            }
            if (await h(y, "bin executable")) {
                s = true;
            }
        } else {
            let w = join(r, "bin", "claude");
            if (await h(w, "bin symlink")) {
                s = true;
            }
        }
        if (s) {
            t(`Successfully removed ${e} manually`);
            let w = Oge().startsWith("win32") ? join(r, "node_modules", e) : join(r, "lib", "node_modules", e);
            return {
                success: true,
                warning: `${e} executables removed, but node_modules directory was left intact for safety. You may manually delete it later at: ${w}`
            };
        } else {
            return {
                success: false
            };
        }
    } catch (error) {
        t(`Manual removal failed: ${error}`, {
            level: "error"
        });
        return {
            success: false,
            error: `Manual removal failed: ${error}`
        };
    }
}
async function wt(e) {
    let { code, stderr } = await ct("npm", [
        "uninstall",
        "-g",
        e
    ], {
        cwd: process.cwd(),
        useToolMemoryCgroup: false
    });
    if (code === 0) {
        t(`Removed global npm installation of ${e}`);
        return {
            success: true
        };
    } else if (stderr && !stderr.includes("npm ERR! code E404")) {
        if (stderr.includes("npm error code ENOTEMPTY")) {
            t(`Failed to uninstall global npm package ${e}: ${stderr}`, {
                level: "error"
            });
            t("Attempting manual removal due to ENOTEMPTY error");
            let s = await zn(e);
            if (s.success) {
                return {
                    success: true,
                    warning: s.warning
                };
            } else if (s.error) {
                return {
                    success: false,
                    error: `Failed to remove global npm installation of ${e}: ${stderr}. Manual removal also failed: ${s.error}`
                };
            }
        }
        t(`Failed to uninstall global npm package ${e}: ${stderr}`, {
            level: "error"
        });
        return {
            success: false,
            error: `Failed to remove global npm installation of ${e}: ${stderr}`
        };
    }
    return {
        success: false
    };
}
async function k6r() {
    let errors = [];
    let warnings = [];
    let removed = 0;
    let s = false;
    let h = false;
    let w = await wt("@anthropic-ai/claude-code");
    if (w.success) {
        removed++;
        if (w.warning) {
            warnings.push(w.warning);
        }
    } else if (w.error) {
        errors.push(w.error);
        s = true;
    }
    if (({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).PACKAGE_URL && ({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).PACKAGE_URL !== "@anthropic-ai/claude-code") {
        let y = await wt({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.PACKAGE_URL);
        if (y.success) {
            removed++;
            if (y.warning) {
                warnings.push(y.warning);
            }
        } else if (y.error) {
            errors.push(y.error);
            s = true;
        }
    }
    let b = join(homedir(), ".claude", "local");
    try {
        await rm(b, {
            recursive: true
        });
        removed++;
        t(`Removed local installation at ${b}`);
    } catch (error) {
        if (!z(error)) {
            errors.push(`Failed to remove ${b}: ${error}`);
            t(`Failed to remove local installation: ${error}`, {
                level: "error"
            });
            h = true;
        }
    }
    if (errors.length === 0) {
        g("native_cleanup_npm");
    } else if (removed > 0) {
        f("native_cleanup_npm", "partial_errors");
    } else if (s && !h) {
        m("native_cleanup_npm", "npm_uninstall_failed");
    } else if (h && !s) {
        m("native_cleanup_npm", "local_install_remove_failed");
    } else {
        m("native_cleanup_npm", "npm_uninstall_failed");
    }
    return {
        removed,
        errors,
        warnings
    };
}
export { aM, zvn, O2t, Oge, Gvn, M2t, PGe, IGe, Mge, itr, hSt, E6r, k6r };
