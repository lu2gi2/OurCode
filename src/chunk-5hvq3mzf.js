import { TH } from "/$bunfs/root/chunk-2d9a83dh.js";
import { Tt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { tde } from "/$bunfs/root/chunk-7y9jhgf9.js";
import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { K, pRo, zon, MBe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { Q, YR } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Fn, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { fr, $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { na } from "/$bunfs/root/chunk-55x53sfe.js";
import { ADn, kQ, Gps } from "/$bunfs/root/chunk-cwfjj64b.js";
import { HLe, Nps } from "/$bunfs/root/chunk-6fb685xp.js";
import { T5, vQ } from "/$bunfs/root/chunk-qnrk8yjg.js";
import { yGe, Gwn, Vwn, qwn, ler, zX, cer } from "/$bunfs/root/chunk-z085q3gs.js";
import { Ck, CT, UD } from "/$bunfs/root/chunk-0xbdwcqr.js";
import { xte, p5o } from "/$bunfs/root/chunk-qfg5yea5.js";
import { v6r } from "/$bunfs/root/chunk-kqhagdjn.js";
import { Wj } from "/$bunfs/root/chunk-g6gppm1v.js";
import { $L, xHn, xus } from "/$bunfs/root/chunk-gsr2devr.js";
import { rl } from "/$bunfs/root/chunk-w6rkdzfe.js";
import { uen, Tct } from "/$bunfs/root/chunk-xx1j2680.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { Ko } from "/$bunfs/root/chunk-7qc48pza.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { randomUUID } from "crypto";
import { lstat, mkdir, realpath } from "fs/promises";
import { dirname, join, extname } from "path";
function aer(e) {
    let image_ext_file_count = 0;
    let pdf_file_count = 0;
    let binary_ext_file_count = 0;
    let text_like_file_count = 0;
    let s = 0;
    let l = 0;
    for (let b of e){
        if (b.is_image === true) {
            continue;
        }
        let y = xHn("", yGe(b.file_name));
        let i = b.sha256 === undefined;
        if (uen.has(extname(y).toLowerCase().slice(1))) {
            image_ext_file_count++;
        } else if (Tct(y)) {
            pdf_file_count++;
            if (i) {
                l++;
            }
        } else if (HLe(y)) {
            binary_ext_file_count++;
            if (i) {
                s++;
                l++;
            }
        } else {
            text_like_file_count++;
        }
    }
    let u = e.length > 0;
    return {
        binary_ext_file_count,
        pdf_file_count,
        text_like_file_count,
        image_ext_file_count,
        all_files_binary_ext_no_sha256: u && s === e.length ? 1 : 0,
        all_files_binary_ext_or_pdf_no_sha256: u && l === e.length ? 1 : 0
    };
}
const Ce = 30000;
const ge = {
    startsTurn: 3,
    noTurn: 2
};
const headersWithinMs = 10000;
const floorMs = 250;
const baseMs = 1000;
const Fe = 25000;
const pe = 16;
const Le = 20;
const je = 64;
const ze = 16;
const Ee = 67108864;
const _e = 300000;
const be = {
    min: 15000,
    max: _e
};
const Ye = 3;
const Je = "x-anthropic-attachment-prefetch";
const we = {
    name: "x-anthropic-attachment-prefetch-seen",
    value: "1"
};
const Xe = 409;
const Ge = 64;
const Ve = 300000;
const qe = 32;
const Ke = 60000;
const Ze = {
    no_token: "failed_no_token_count",
    http_status: "failed_http_status_count",
    too_large: "failed_too_large_count",
    held_limit: "failed_held_limit_count",
    stalled: "failed_stalled_count",
    stopped: "failed_stopped_count",
    error: "failed_error_count"
};
const Qe = {
    override: true,
    payload: true,
    disk: true,
    disabled: false,
    fallback: false
};
const et = {
    no_token: 1,
    http_status: 2,
    too_large: 3,
    held_limit: 4,
    stalled: 5,
    stopped: 6,
    error: 7
};
const failure_code = 8;
const nt = 9;
function B(e) {
    t(`[bridge:inbound-attach] ${e}`);
}
async function rt(path, r) {
    try {
        let o = await lstat(path);
        if (!o.isFile()) {
            return "absent";
        }
        if (o.size !== r.length) {
            return "changed";
        }
    } catch (error) {
        let n = v(error);
        if (n === "ENOENT" || n === "ENOTDIR") {
            return "absent";
        }
        return "changed";
    }
    if ((await zX(path, r.length))?.equals(r)) {
        return "same";
    }
    return "changed";
}
async function it(e, r, o, n, d, s, l, u, b, y = false, i) {
    let a = u?.accessToken ?? (j() && l !== undefined ? await CT(l) : Ck());
    if (!a) {
        B("skip: no oauth token");
        return ee(n, "no_token", 0);
    }
    let _;
    let sha256;
    let M;
    let F = false;
    let E = 0;
    let w = d;
    try {
        if (typeof e.file_size === "number" && e.file_size > T5) {
            return ee(n, "too_large", 0);
        }
        let T = fe(u);
        let O = EZe(e.file_uuid, u);
        if (T !== undefined && O !== undefined && O.bearer === at(a) && (e.sha256 === undefined || e.sha256 === O.sha256)) {
            let U = await zX(O.path, O.size);
            if (U !== null && at(U) === O.sha256) {
                _ = U;
                sha256 = O.sha256;
                M = O.path;
                n.reusedFileCount++;
            } else if (T.get(G(e.file_uuid)) === O) {
                T.delete(G(e.file_uuid));
            }
        }
        let Y = zon();
        let D = G(e.file_uuid);
        Y.refusedEarly?.delete(D);
        let N = _ === undefined && u === undefined && i === undefined ? Y.byFileUuid.get(D) : undefined;
        while(N !== undefined){
            let U = performance.now();
            let h = mt(N, U, at(a));
            let inFlight = N.settledAt === undefined;
            let P = N.startedBy === "prefetch";
            let x = await N.bytes;
            let waitedMs = performance.now() - U;
            E += waitedMs;
            if (P && inFlight) {
                n.joinedInFlightCount++;
                n.slowestJoinWaitMs = Math.max(n.slowestJoinWaitMs, waitedMs);
                if (N.headersTimedOut) {
                    w = Math.max(1, d - 1);
                }
            }
            let sameBearer = N.bearer === at(a);
            let passes = x !== null && sameBearer && (typeof e.sha256 !== "string" || qwn(x, {
                sha256: e.sha256,
                file_size: e.file_size
            }));
            if (passes) {
                _ = x;
                F = true;
            } else if (x === null && inFlight && sameBearer && Pe(N, U)) {
                return ee(n, N.failure ?? "error", N.receivedBytes);
            }
            if (P && x !== null) {
                if (passes) {
                    n.prefetchedFileCount++;
                }
                if (h) {
                    ht(N, x, {
                        inFlight,
                        passes,
                        sameBearer,
                        waitedMs
                    });
                }
            }
            let ae = _ === undefined ? Y.byFileUuid.get(D) : undefined;
            N = ae !== N && ae?.startedBy === "message" && ae.bearer === at(a) ? ae : undefined;
        }
        if (_ === undefined) {
            let U = new AbortController;
            let h = ()=>U.abort();
            i?.addEventListener("abort", h, {
                once: true
            });
            if (i?.aborted) {
                h();
            }
            let R;
            let P = 0;
            let x = pt(w, E, U, n, {
                fileUuid: e.file_uuid,
                baseUrl: u?.baseUrl,
                forPrefetch: false,
                token: ()=>a,
                admitBytes: (Z)=>{
                    P = Z;
                    if (R !== undefined) {
                        R.receivedBytes = Z;
                    }
                    return true;
                }
            });
            if (u === undefined && i === undefined && Te().value) {
                R = Be("message", U, x, at(a));
                Y.byFileUuid.set(D, R);
            }
            let X = await x;
            i?.removeEventListener("abort", h);
            if ("failure" in X) {
                return ee(n, X.failure, P, X.httpStatus);
            }
            _ = X.data;
        }
    } catch (error) {
        B(`fetch ${e.file_uuid} threw: ${error}`);
        return ee(n, "error", 0);
    }
    if (typeof e.sha256 === "string" && !F && !qwn(_, {
        sha256: e.sha256,
        file_size: e.file_size
    })) {
        B(`fetch ${e.file_uuid} failed integrity verification`);
        return {
            failure: "digest_mismatch"
        };
    }
    let timings = {
        resizeMs: 0,
        pngPaletteMs: 0,
        byteBudgetMs: 0
    };
    let V = performance.now();
    let imageBlock = o && e.is_image === true && e.sha256 === undefined ? await Nps(_, TH, {
        timings
    }).catch((T)=>{
        B(`inline ${e.file_uuid} threw: ${T}`);
        return null;
    }) : null;
    n.slowestInlineImageBuildMs = Math.max(n.slowestInlineImageBuildMs, performance.now() - V);
    n.slowestInlineImageResizeMs = Math.max(n.slowestInlineImageResizeMs, timings.resizeMs);
    n.slowestInlineImagePngPaletteMs = Math.max(n.slowestInlineImagePngPaletteMs, timings.pngPaletteMs);
    n.slowestInlineImageByteBudgetMs = Math.max(n.slowestInlineImageByteBudgetMs, timings.byteBudgetMs);
    let C = imageBlock ? `image.${ADn[kQ(_)]}` : yGe(e.file_name);
    let W = (imageBlock ? randomUUID().slice(0, 8) : e.file_uuid.slice(0, 8) || randomUUID().slice(0, 8)).replace(/[^a-zA-Z0-9_-]/g, "_");
    let L = b ?? $L();
    let z = xHn(W, C);
    let path = join(L, z);
    let ne = K();
    let re = !y || e.sha256 !== undefined ? "absent" : M === path ? "same" : MBe() === null ? await rt(path, _) : "absent";
    if (i?.aborted) {
        return ee(n, "stopped", 0);
    }
    let te = performance.now();
    let q;
    if (re === "same") {
        n.unchangedOnDiskCount++;
    } else if (re === "changed") {
        n.keptChangedFileCount++;
    } else if (j() && s !== undefined && fr(ne) && fr(z) && (b === undefined || b === $L())) {
        let T = await s.write($e.userConfigDir("uploads", [
            ne,
            z
        ]), _, {
            mode: 384
        });
        if (!T.ok) {
            q = gt(T.error);
        }
    } else {
        try {
            await mkdir(L, {
                recursive: true,
                mode: 448
            });
            if (i?.aborted) {
                return ee(n, "stopped", 0);
            }
            await En(path, _, 384);
        } catch (error) {
            q = `${error}`;
        }
    }
    n.slowestWriteMs = Math.max(n.slowestWriteMs, performance.now() - te);
    if (q !== undefined) {
        B(`write ${path} failed: ${q}`);
        n.failedWriteCount++;
        return {
            failure: "write"
        };
    }
    let ie = performance.now();
    sha256 ??= at(_);
    n.slowestHashAfterWriteMs = Math.max(n.slowestHashAfterWriteMs, performance.now() - ie);
    if (r && e.sha256 === undefined) {
        try {
            xus(await realpath(path), sha256);
        } catch  {
            B(`registration skipped for ${path}`);
        }
    }
    let H = fe(u);
    if (H !== undefined) {
        H.delete(G(e.file_uuid));
        if (H.size >= je) {
            let T = H.keys().next().value;
            if (T !== undefined) {
                H.delete(T);
            }
        }
        H.set(G(e.file_uuid), {
            path,
            size: _.length,
            sha256,
            bearer: at(a)
        });
    }
    B(`resolved ${e.file_uuid} \u2192 ${path} (${_.length} bytes)`);
    if (imageBlock) {
        if (kQ(_) === "image/png") {
            n.inlinedPngSourceCount++;
            if (Gps(_)) {
                n.inlinedPngSourceMaybeTransparentCount++;
            }
            if (imageBlock.source.type === "base64" && imageBlock.source.media_type === "image/jpeg") {
                n.inlinedPngSourceSentAsJpegCount++;
            }
        }
        B(`inlined ${e.file_uuid} (${_.length} bytes)`);
        return {
            imageBlock,
            path
        };
    }
    if (o && e.is_image === true && e.sha256 === undefined) {
        B(`inline ${e.file_uuid} fell back to @path ref`);
        return {
            path,
            inlineFellBack: true
        };
    }
    return {
        path
    };
}
const ot = {
    download: "it could not be downloaded",
    digest_mismatch: "it failed integrity verification",
    write: "it could not be written to the uploads directory"
};
async function GDs(e, r, o, n, d, s, should_query, u, b, y) {
    if (e.length === 0) {
        return {
            prefix: "",
            imageBlocks: [],
            inlinedImagePaths: [],
            deliveredCount: 0
        };
    }
    B(`resolving ${e.length} attachment(s)`);
    let refusedEarly = zon().refusedEarly;
    if (refusedEarly !== undefined && refusedEarly.size > 0) {
        for (let h of e){
            refusedEarly.delete(G(h.file_uuid));
        }
    }
    let a = performance.now();
    let _ = {
        slowestTimeToHeadersMs: 0,
        slowestDownloadMs: 0,
        slowestJoinWaitMs: 0,
        slowestInlineImageBuildMs: 0,
        slowestInlineImageResizeMs: 0,
        slowestInlineImagePngPaletteMs: 0,
        slowestInlineImageByteBudgetMs: 0,
        slowestWriteMs: 0,
        slowestHashAfterWriteMs: 0,
        downloadedBytes: 0,
        downloadTryCount: 0,
        recoveredFileCount: 0,
        failedWriteCount: 0,
        unchangedOnDiskCount: 0,
        keptChangedFileCount: 0,
        reusedFileCount: 0,
        prefetchedFileCount: 0,
        joinedInFlightCount: 0,
        inlinedPngSourceCount: 0,
        inlinedPngSourceMaybeTransparentCount: 0,
        inlinedPngSourceSentAsJpegCount: 0,
        failedDownloads: {}
    };
    let p = e.filter((h)=>typeof h.sha256 === "string");
    let M = Se(e);
    if (!(s?.accessToken ?? (j() && d !== undefined ? await CT(d) : Ck()))) {
        B("skip: no oauth token");
        let h = {
            ...Ie(e.slice(0, M), 0, 0, _, a),
            ...Ae(b, u)
        };
        f("bridge_attachment_resolve", "no_token", h);
        J("warn", "bridge_attachment_download_timing", {
            outcome: "no_token",
            should_query,
            ...h
        });
        let R = Wwn(e.filter((P)=>typeof P.sha256 !== "string"), "no_token");
        if (p.length > 0) {
            let P = p.length - vQ;
            let x = P > 0 ? p.slice(0, vQ) : p;
            ler("bridge", x.length, 0);
            let X = P > 0 ? ` ${Vwn(P)}` : "";
            return {
                prefix: `${x.map((oe)=>Gwn(oe.file_name, "it could not be downloaded (not signed in)")).join(" ") + X + (R.length > 0 ? ` ${ue(R.length, R.length)}` : "")} `,
                imageBlocks: [],
                inlinedImagePaths: [],
                deliveredCount: 0,
                ...R.length > 0 && {
                    missingFiles: R
                }
            };
        }
        return {
            prefix: `${ue(R.length, R.length)} `,
            imageBlocks: [],
            inlinedImagePaths: [],
            deliveredCount: 0,
            missingFiles: R
        };
    }
    let E = [];
    let w = e;
    let I = w.length > M;
    if (I) {
        B(`dropping ${w.length - M} attachment(s) over the ${M} cap`);
        if (p.length > 0) {
            E.push(Vwn(w.length - M));
        }
        w = w.slice(0, M);
    }
    let V = r && o;
    let A = s === undefined && y === undefined;
    let C = A && w.length > pe;
    let W = rl(pe, (h)=>it(h, r, V, _, should_query === false ? ge.noTurn : ge.startsTurn, n, d, s, u, should_query === false, y).finally(()=>{
            if (C) {
                ye(h);
            }
        }));
    let L;
    try {
        L = await Promise.all(w.map((h)=>W(h)));
    } finally{
        for (let h of A ? w : []){
            ye(h);
        }
    }
    let z = [];
    let imageBlocks = [];
    let inlinedImagePaths = [];
    let re = 0;
    let te = 0;
    let q = 0;
    let ie = false;
    let H = [];
    let writtenFiles = [];
    L.forEach((h, R)=>{
        let P = w[R];
        let x = typeof P.sha256 === "string";
        if (x) {
            te++;
        }
        if ("path" in h) {
            writtenFiles.push({
                file_uuid: P.file_uuid,
                path: h.path
            });
        }
        if ("imageBlock" in h) {
            imageBlocks.push(h.imageBlock);
            inlinedImagePaths.push(h.path);
        } else if ("path" in h) {
            z.push(`@"${h.path}"`);
            if (h.inlineFellBack) {
                re++;
            }
            if (x) {
                q++;
            }
        } else {
            if (h.failure === "digest_mismatch") {
                ie = true;
            }
            if (x) {
                E.push(Gwn(P.file_name, ot[h.failure]));
            } else {
                H.push({
                    file_uuid: P.file_uuid,
                    reason: h.failure === "write" ? "write" : h.cause ?? "download"
                });
            }
        }
    });
    if (H.length > 0) {
        let h = p.length === 0 ? e.slice(M) : [];
        H.push(...Wwn(h, "count_cap"));
        E.push(ue(H.length, w.length - te + h.length));
    }
    if (te > 0) {
        ler("bridge", te, q);
    }
    let deliveredCount = z.length + imageBlocks.length;
    let Y = {
        ...Ie(w, deliveredCount, imageBlocks.length, _, a),
        ...Ae(b, u)
    };
    let outcome;
    if (deliveredCount === 0) {
        outcome = ie ? "digest_mismatch" : "all_failed";
        m("bridge_attachment_resolve", outcome, Y);
    } else if (deliveredCount < w.length) {
        outcome = ie ? "digest_mismatch" : "partial_failed";
        f("bridge_attachment_resolve", outcome, Y);
    } else if (I) {
        outcome = "over_count_cap";
        f("bridge_attachment_resolve", outcome, Y);
    } else {
        outcome = "ok";
        g("bridge_attachment_resolve", Y);
    }
    J(outcome !== "ok" && outcome !== "over_count_cap" ? "warn" : "info", "bridge_attachment_download_timing", {
        outcome,
        should_query,
        ...Y
    });
    if (re > 0) {
        f("bridge_attachment_inline_image", "fallback_path_ref");
    } else if (imageBlocks.length > 0) {
        g("bridge_attachment_inline_image");
    }
    let U = [
        ...z,
        ...E
    ];
    return {
        prefix: U.length > 0 ? `${U.join(" ")} ` : "",
        imageBlocks,
        inlinedImagePaths,
        deliveredCount,
        ...H.length > 0 && {
            missingFiles: H
        },
        ...writtenFiles.length > 0 && {
            writtenFiles
        }
    };
}
function ke(e, r) {
    if (!r) {
        return e;
    }
    if (typeof e === "string") {
        return cer(e, r);
    }
    let o = e.findLastIndex((n)=>n.type === "text");
    if (o !== -1) {
        let n = e[o];
        if (n.type === "text") {
            return [
                ...e.slice(0, o),
                {
                    ...n,
                    text: cer(n.text, r)
                },
                ...e.slice(o + 1)
            ];
        }
    }
    return [
        ...e,
        {
            type: "text",
            text: r.trimEnd()
        }
    ];
}
function st(text, imageBlocks) {
    if (imageBlocks.length === 0) {
        return text;
    }
    let o = typeof text === "string" ? text.trim() === "" ? [] : [
        {
            type: "text",
            text
        }
    ] : v6r(text);
    return [
        ...imageBlocks,
        ...o
    ];
}
function Wwn(e, reason) {
    return e.map((o)=>({
            file_uuid: o.file_uuid,
            reason
        }));
}
function I4r(e, r, o) {
    let n = xte(e);
    if (n.length === 0 || n.length > Se(n)) {
        return;
    }
    let paths = [];
    for (let l of n){
        let u = l.file_uuid.slice(0, 8).replace(/[^a-zA-Z0-9_-]/g, "_");
        if (u === "") {
            return;
        }
        let b = xHn(u, yGe(l.file_name));
        paths.push(join(o, b));
    }
    let refs = paths.map((l)=>`@"${l}"`);
    return {
        content: ke(r ?? "", `${refs.join(" ")} `),
        refs,
        paths
    };
}
async function zwn(e, r, o, n, d, s, l) {
    let content = r ?? "";
    let b = xte(e);
    if (b.length === 0) {
        return {
            content,
            inlinedImagePaths: []
        };
    }
    let y = o && !(typeof content === "string" && tde(content));
    let { prefix, imageBlocks, deliveredCount, ...rest } = await GDs(b, o, y, n, d, undefined, p5o(e), s, l);
    if (deliveredCount === 0 && typeof content === "string" && content.trim() === "") {
        return {
            content: prefix.trimEnd(),
            ...rest
        };
    }
    return {
        content: st(ke(content, prefix), imageBlocks),
        ...rest
    };
}
function ye(e) {
    let r = zon();
    let o = G(e.file_uuid);
    let n = r.byFileUuid.get(o);
    if (n?.taken !== undefined && n.settledAt !== undefined) {
        r.byFileUuid.delete(o);
    }
}
function Se(e) {
    if (e.every((r)=>r.sha256 === undefined)) {
        return Le;
    }
    return vQ;
}
function O4r(e) {
    if (!e || k("tengu_amber_ferry", false) !== true) {
        return "off";
    }
    if (k("tengu_slate_marten", false) === true) {
        return "on_with_pdfs";
    }
    return "on";
}
function Ae(e, r) {
    if (e === undefined) {
        return {};
    }
    return {
        ahead_of_files_flag_on: e === "off" ? 0 : 1,
        ahead_of_files_on_with_pdfs: e === "on_with_pdfs" ? 1 : 0,
        queued_ahead_of_files: r === undefined ? 0 : 1
    };
}
function Ie(e, resolved_count, inlined_image_count, n, d) {
    return {
        file_count: e.length,
        resolved_count,
        download_try_count: n.downloadTryCount,
        recovered_file_count: n.recoveredFileCount,
        reused_file_count: n.reusedFileCount,
        prefetched_file_count: n.prefetchedFileCount,
        joined_in_flight_count: n.joinedInFlightCount,
        inlined_image_count,
        ...aer(e),
        inlined_png_source_count: n.inlinedPngSourceCount,
        inlined_png_source_maybe_transparent_count: n.inlinedPngSourceMaybeTransparentCount,
        inlined_png_source_sent_as_jpeg_count: n.inlinedPngSourceSentAsJpegCount,
        approx_downloaded_bytes: Number(n.downloadedBytes.toPrecision(2)),
        duration_ms: Math.round(performance.now() - d),
        slowest_time_to_headers_ms: Math.round(n.slowestTimeToHeadersMs),
        slowest_download_ms: Math.round(n.slowestDownloadMs),
        slowest_join_wait_ms: Math.round(n.slowestJoinWaitMs),
        slowest_inline_image_build_ms: Math.round(n.slowestInlineImageBuildMs),
        slowest_inline_image_resize_ms: Math.round(n.slowestInlineImageResizeMs),
        slowest_inline_image_png_palette_ms: Math.round(n.slowestInlineImagePngPaletteMs),
        slowest_inline_image_byte_budget_ms: Math.round(n.slowestInlineImageByteBudgetMs),
        slowest_write_ms: Math.round(n.slowestWriteMs),
        slowest_hash_after_write_ms: Math.round(n.slowestHashAfterWriteMs),
        ...n.failedDownloads,
        ...n.failedWriteCount > 0 && {
            failed_write_count: n.failedWriteCount
        },
        ...n.unchangedOnDiskCount > 0 && {
            unchanged_on_disk_count: n.unchangedOnDiskCount
        },
        ...n.keptChangedFileCount > 0 && {
            kept_changed_file_count: n.keptChangedFileCount
        }
    };
}
const dt = new Set([
    404,
    410
]);
function ee({ failedDownloads }, cause, o, n) {
    let s = Ze[cause];
    failedDownloads[s] = (failedDownloads[s] ?? 0) + 1;
    if (o > 0) {
        failedDownloads.partway_failed_count = (failedDownloads.partway_failed_count ?? 0) + 1;
    }
    if (n !== undefined) {
        failedDownloads.last_failed_http_status = n;
    }
    if (cause === "too_large" || cause === "no_token") {
        return {
            failure: "download",
            cause
        };
    }
    return {
        failure: "download",
        ...cause === "http_status" && dt.has(n) && {
            cause: "not_found"
        }
    };
}
function fe(e) {
    if (e === undefined && MBe() === null) {
        return pRo();
    }
}
function EZe(e, r) {
    let o = fe(r)?.get(G(e));
    if (o !== undefined && dirname(o.path) === $L()) {
        return o;
    }
}
function G(e) {
    if (Jt(e) === null) {
        return e;
    }
    return e.toLowerCase();
}
function Te() {
    return Fn("tengu_dapper_brooks", false);
}
function Re() {
    return k("tengu_twinkling_hoare", false) === true;
}
function lt() {
    let e = k("tengu_hazel_lantern", 0);
    if (typeof e !== "number" || !(e > 0)) {
        return {
            ms: _e,
            repeatRenews: false
        };
    }
    return {
        ms: Math.min(be.max, Math.max(be.min, Math.round(e * 1000))),
        repeatRenews: true
    };
}
function M4r(e, { issuedAt, credentials, onlyThese = false }) {
    if (Tt()) {
        return 0;
    }
    let d = Te();
    if (!d.value) {
        Ege("bridge_attachment_prefetch_flag_off", {
            file_count: e.length,
            flag_served: Qe[d.source]
        });
        return 0;
    }
    let s = zon();
    let l = lt();
    let u = {
        file_count: e.length,
        started_count: 0,
        already_present_count: 0,
        held_limit_count: 0,
        start_budget_count: 0,
        skipped_count: 0
    };
    let refreshed_count = 0;
    let dropped_count = 0;
    let refused_before_count = 0;
    let early_reads_stopped_count = 0;
    if (s.earlyReadsStopped === true && !Re()) {
        s.earlyReadsStopped = undefined;
        s.earlyReadsStopReported = undefined;
    }
    let _ = s.earlyReadsStopped === true;
    let p = new Set;
    let M = Date.now() - issuedAt;
    let stale = M > Math.max(Ye * l.ms, _e);
    let E = stale ? [] : e.slice(0, vQ);
    u.skipped_count = e.length - E.length;
    if (onlyThese && !stale) {
        let A = new Set(e.map((C)=>G(C.file_uuid)));
        for (let [C, W] of s.byFileUuid){
            if (!A.has(C) && W.release !== undefined && !W.taken) {
                W.release("dropped_unused");
                dropped_count++;
            }
        }
    }
    for (let A of E){
        let C = G(A.file_uuid);
        if (Jt(A.file_uuid) === null || A.file_size !== undefined && A.file_size > T5) {
            u.skipped_count++;
            continue;
        }
        let W = s.refusedEarly?.get(C);
        if (W !== undefined) {
            if (performance.now() - W < Ve) {
                refused_before_count++;
                continue;
            }
            s.refusedEarly?.delete(C);
        }
        let L = s.byFileUuid.get(C);
        if (L !== undefined || EZe(A.file_uuid, undefined) !== undefined) {
            u.already_present_count++;
            if (l.repeatRenews && L?.release !== undefined && !L.taken && !p.has(C)) {
                de(L, l.ms);
                p.add(C);
                refreshed_count++;
            }
            continue;
        }
        if (_) {
            early_reads_stopped_count++;
            continue;
        }
        let z = ut(A.file_size);
        let S = ct(s, z);
        if (S === "held_limit") {
            u.held_limit_count++;
        } else if (S === "start_budget") {
            u.start_budget_count++;
        } else {
            _t(s, C, A.file_uuid, z, credentials, l.ms, l.repeatRenews);
            p.add(C);
            u.started_count++;
        }
    }
    let w = me(s);
    let I = {
        ...u,
        age_ms: Math.round(M),
        held_file_count: w.count,
        approx_held_bytes: Number(w.bytes.toPrecision(2)),
        ...l.repeatRenews && {
            hold_ms: l.ms,
            refreshed_count,
            renewed_since_last_report: s.renewalsNotYetReported ?? 0
        },
        ...onlyThese && {
            only_these: true,
            dropped_count
        },
        ...refused_before_count > 0 && {
            refused_before_count
        },
        ...early_reads_stopped_count > 0 && {
            early_reads_stopped_count
        }
    };
    let V = s.earlyReadsStopReported === true ? early_reads_stopped_count : 0;
    if (refreshed_count + refused_before_count + V > 0 && refreshed_count === u.already_present_count && u.file_count === refreshed_count + refused_before_count + V && dropped_count === 0) {
        s.renewalsNotYetReported = (s.renewalsNotYetReported ?? 0) + refreshed_count;
        return 0;
    }
    s.renewalsNotYetReported = 0;
    if (early_reads_stopped_count > 0) {
        s.earlyReadsStopReported = true;
    }
    if (stale) {
        f("bridge_attachment_prefetch", "stale", I);
    } else if (early_reads_stopped_count > 0) {
        f("bridge_attachment_prefetch", "mark_unseen_stop", I);
    } else if (u.held_limit_count > 0) {
        f("bridge_attachment_prefetch", "held_limit", I);
    } else if (u.start_budget_count > 0) {
        f("bridge_attachment_prefetch", "start_budget", I);
    } else {
        g("bridge_attachment_prefetch", I);
    }
    Ege(u.started_count > 0 ? "bridge_attachment_prefetch_started" : "bridge_attachment_prefetch_not_started", {
        ...I,
        stale
    });
    return u.started_count;
}
function Ege(e, r) {
    J("info", e, r);
}
function ut(file_size) {
    if (file_size !== undefined && file_size > 0) {
        return file_size;
    }
    return 0;
}
function ct(e, r) {
    let o = performance.now();
    let e_recentPrefetchStarts = e.recentPrefetchStarts;
    while(e_recentPrefetchStarts.length > 0 && o - e_recentPrefetchStarts[0] >= Ke){
        e_recentPrefetchStarts.shift();
    }
    let d = me(e);
    if (d.count >= ze || d.bytes + r > Ee) {
        return "held_limit";
    }
    if (e_recentPrefetchStarts.length < qe) {
        return "ok";
    }
    return "start_budget";
}
function me(e) {
    let count = 0;
    let bytes = 0;
    for (let n of e.byFileUuid.values()){
        if (n.startedBy === "prefetch" && !n.taken) {
            count++;
            bytes += n.settledAt === undefined ? Math.max(n.receivedBytes, n.statedBytes) : n.receivedBytes;
        }
    }
    return {
        count,
        bytes
    };
}
function ft(e) {
    e.release?.("expired_unused");
}
function de(e, r) {
    clearTimeout(e.expiry);
    e.expiry = setTimeout(ft.bind(undefined, e), r);
    e.expiry.unref();
}
function _t(e, r, fileUuid, n, credentials, s, repeatRenews) {
    let u = new AbortController;
    let b = false;
    let y = ve({
        fileUuid,
        baseUrl: undefined,
        forPrefetch: true,
        headersWithinMs,
        token: async ()=>{
            let a = await CT(credentials);
            if (a) {
                i.bearer = at(a);
            }
            return a;
        },
        abort: u,
        totals: undefined,
        onServed: (mark_seen)=>{
            let stops_early_reads = !mark_seen && Re();
            if (stops_early_reads) {
                e.earlyReadsStopped = true;
            }
            Ege("bridge_attachment_prefetch_served", {
                mark_seen,
                ...!mark_seen && {
                    stops_early_reads
                }
            });
        },
        admitBytes: (a)=>{
            i.receivedBytes = a;
            if (i.taken || me(e).bytes <= Ee) {
                return true;
            }
            i.receivedBytes = 0;
            i.statedBytes = 0;
            return false;
        }
    });
    let i = Be("prefetch", u, y, undefined);
    i.statedBytes = n;
    i.release = (a)=>{
        if (e.byFileUuid.get(r) !== i || i.taken) {
            return;
        }
        if (a === "expired_unused" && repeatRenews && i.settledAt === undefined) {
            de(i, s);
            return;
        }
        b = true;
        clearTimeout(i.expiry);
        e.byFileUuid.delete(r);
        u.abort();
        let _ = {
            download_finished: i.settledAt !== undefined,
            approx_bytes: Number(i.receivedBytes.toPrecision(2)),
            ...a === "dropped_unused" && {
                held_for_ms: Math.round(performance.now() - i.startedAt)
            }
        };
        f("bridge_attachment_prefetch_download", a, _);
        Ege(`bridge_attachment_prefetch_${a}`, _);
    };
    de(i, s);
    e.recentPrefetchStarts.push(i.startedAt);
    e.byFileUuid.set(r, i);
    y.then((a)=>{
        if (!("failure" in a)) {
            if (repeatRenews && e.byFileUuid.get(r) === i && !i.taken) {
                de(i, s);
            }
            return;
        }
        if (e.byFileUuid.get(r) === i && !i.taken) {
            e.byFileUuid.delete(r);
            clearTimeout(i.expiry);
        }
        let _ = a.failure === "http_status" && a.httpStatus === Xe;
        if (_ && !i.taken) {
            let I = e.refusedEarly ??= new Map;
            I.delete(r);
            if (I.size >= Ge) {
                I.delete(I.keys().next().value ?? r);
            }
            I.set(r, performance.now());
        }
        if (b) {
            return;
        }
        let p = {
            duration_ms: Math.round(performance.now() - i.startedAt),
            ...a.httpStatus !== undefined && {
                http_status: a.httpStatus
            }
        };
        let M = xe(a);
        let F = M ? "no_answer" : a.failure;
        if (_) {
            f("bridge_attachment_prefetch_download", "refused_early", p);
            Ege("bridge_attachment_prefetch_failed", {
                ...p,
                failure_code
            });
            return;
        }
        let i_taken = i.taken;
        let w = i_taken?.by === "joiner" && i_taken.bearer === i.bearer && Pe(i, i_taken.at);
        if (w) {
            m("bridge_attachment_prefetch_download", F, p);
        } else {
            f("bridge_attachment_prefetch_download", F, p);
        }
        Ege(w ? "bridge_attachment_prefetch_failed_file_lost" : "bridge_attachment_prefetch_failed", {
            ...p,
            failure_code: M ? nt : et[a.failure]
        });
    }).catch(c);
}
function Be(startedBy, abort, o, n) {
    let d = {
        startedBy,
        bytes: o.then((s)=>{
            d.settledAt = performance.now();
            if ("failure" in s) {
                d.failure = s.failure;
                d.headersTimedOut = xe(s);
                return null;
            }
            return s.data;
        }),
        startedAt: performance.now(),
        settledAt: undefined,
        failure: undefined,
        headersTimedOut: false,
        receivedBytes: 0,
        statedBytes: 0,
        abort,
        taken: startedBy === "message" ? {
            by: "starter"
        } : undefined,
        expiry: undefined,
        bearer: n
    };
    return d;
}
function Pe(e, r) {
    let o = (e.settledAt ?? performance.now()) - r;
    return e.startedBy !== "prefetch" || e.failure === "too_large" || e.receivedBytes > 0 && o > Fe;
}
function mt(e, at_1, o) {
    if (e.taken) {
        return false;
    }
    e.taken = {
        by: "joiner",
        at: at_1,
        bearer: o
    };
    clearTimeout(e.expiry);
    return true;
}
function ht(e, r, { inFlight, passes, sameBearer, waitedMs }) {
    let l = {
        in_flight: inFlight,
        waited_ms: Math.round(waitedMs),
        download_ms: Math.round((e.settledAt ?? performance.now()) - e.startedAt),
        approx_bytes: Number(r.length.toPrecision(2))
    };
    if (passes) {
        g("bridge_attachment_prefetch_download", l);
        Ege(inFlight ? "bridge_attachment_prefetch_used_joined" : "bridge_attachment_prefetch_used_ready", l);
    } else {
        f("bridge_attachment_prefetch_download", sameBearer ? "attestation_mismatch" : "bearer_changed", l);
        Ege(sameBearer ? "bridge_attachment_prefetch_attestation_mismatch" : "bridge_attachment_prefetch_bearer_changed", l);
    }
}
async function pt(e, r, o, totals, d) {
    let s = performance.now() - r + Fe;
    for(let attempt = 0;; attempt++){
        let u = new AbortController;
        let b = ()=>u.abort();
        o.signal.addEventListener("abort", b, {
            once: true
        });
        if (o.signal.aborted) {
            u.abort();
        }
        totals.downloadTryCount++;
        d.admitBytes(0);
        let y = attempt + 1 < e && performance.now() + headersWithinMs + floorMs <= s;
        let i = await ve({
            ...d,
            totals,
            abort: u,
            headersWithinMs: y ? headersWithinMs : Ce
        });
        o.signal.removeEventListener("abort", b);
        if (!("failure" in i)) {
            if (attempt > 0) {
                totals.recoveredFileCount++;
            }
            return i;
        }
        let a = i.httpStatus ?? 0;
        let _ = i.failure === "stalled" || i.failure === "error" && i.final !== true || i.failure === "http_status" && (a >= 500 || a === 408 || a === 429);
        let p = performance.now();
        let M = s - p;
        let F = Math.min(YR({
            baseMs,
            attempt,
            floorMs
        }), Math.max(floorMs, M));
        let E = y && i.failure === "stalled" && i.beforeHeaders;
        if (_ && attempt + 1 < e && (E || M >= floorMs)) {
            await Q(F, o.signal);
            if (!o.signal.aborted) {
                continue;
            }
        }
        return i;
    }
}
async function ve({ fileUuid, baseUrl, forPrefetch, token, abort, headersWithinMs, totals, onServed, admitBytes }) {
    let y = forPrefetch ? "of a prefetched file" : fileUuid;
    let i = false;
    let a = false;
    let _ = ()=>{
        i = true;
        abort.abort();
    };
    let p = setTimeout(_, headersWithinMs);
    let M = performance.now();
    try {
        let F = await Promise.race([
            token(),
            bt(abort.signal)
        ]);
        if (abort.signal.aborted) {
            if (i) {
                return le(a);
            }
            return {
                failure: "stopped"
            };
        }
        if (!F) {
            return {
                failure: "no_token"
            };
        }
        let url;
        try {
            url = `${baseUrl ?? UD()}/api/oauth/files/${encodeURIComponent(fileUuid)}/content`;
        } catch (error) {
            B(`fetch ${y} has no URL: ${forPrefetch ? error instanceof Error ? error.name : "a non-Error" : error}`);
            return {
                failure: "error",
                final: true
            };
        }
        let w = await fetch(url, {
            headers: {
                Authorization: `Bearer ${F}`,
                "User-Agent": Ko(),
                ...forPrefetch && {
                    [Je]: "1"
                }
            },
            ...forPrefetch && {
                cache: "no-store"
            },
            signal: abort.signal,
            ...na({
                url
            })
        });
        a = true;
        clearTimeout(p);
        p = setTimeout(_, Ce);
        if (totals !== undefined) {
            totals.slowestTimeToHeadersMs = Math.max(totals.slowestTimeToHeadersMs, performance.now() - M);
        }
        if (w.status !== 200) {
            B(`fetch ${y} failed: status=${w.status}`);
            await Wj(w);
            if (i) {
                return le(a);
            }
            return {
                failure: "http_status",
                httpStatus: w.status
            };
        }
        onServed?.(w.headers.get(we.name)?.trim() === we.value);
        let I = w.body?.getReader();
        let V = [];
        let A = 0;
        while(I !== undefined){
            let { done, value } = await I.read();
            if (done) {
                break;
            }
            p.refresh();
            A += value.byteLength;
            if (A > T5) {
                B(`fetch ${y} over size cap (${A} bytes so far)`);
                abort.abort();
                return {
                    failure: "too_large"
                };
            }
            if (!admitBytes(A)) {
                B(`fetch ${y} stopped: unused prefetched files would exceed 64 MiB in memory`);
                abort.abort();
                return {
                    failure: "held_limit"
                };
            }
            V.push(value);
        }
        if (totals !== undefined) {
            totals.downloadedBytes += A;
        }
        return {
            data: Buffer.concat(V, A)
        };
    } catch (error) {
        B(`fetch ${y} threw: ${forPrefetch ? error instanceof Error ? error.name : "a non-Error" : error}`);
        if (i) {
            return le(a);
        }
        return {
            failure: abort.signal.aborted ? "stopped" : "error"
        };
    } finally{
        clearTimeout(p);
        if (totals !== undefined) {
            totals.slowestDownloadMs = Math.max(totals.slowestDownloadMs, performance.now() - M);
        }
    }
}
function xe(e) {
    return "failure" in e && e.failure === "stalled" && e.beforeHeaders;
}
function le(e) {
    return {
        failure: "stalled",
        beforeHeaders: !e
    };
}
function bt(signal) {
    return new Promise((resolve)=>{
        if (signal.aborted) {
            resolve(undefined);
            return;
        }
        signal.addEventListener("abort", ()=>resolve(undefined), {
            once: true
        });
    });
}
function ue(e, r) {
    if (r === 1) {
        return "[attachment did not arrive]";
    }
    if (e === r) {
        return `[${r} attachments did not arrive]`;
    }
    return `[${e} of ${r} attachments did not arrive]`;
}
export { aer, GDs, Wwn, I4r, zwn, O4r, EZe, M4r, Ege };
