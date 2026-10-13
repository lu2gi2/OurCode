import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, v, aj } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { tb, Q, YR } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _, yo, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Tt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { KE, UHt } from "/$bunfs/root/chunk-2d9a83dh.js";
import { no } from "/$bunfs/root/chunk-c56kpkt7.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { NRe, JBn, wZt, Nyo, jks } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Hue } from "/$bunfs/root/chunk-ph7a449e.js";
import { $ce, Ck, CT } from "/$bunfs/root/chunk-0xbdwcqr.js";
import { Oat } from "/$bunfs/root/chunk-sfgejbsr.js";
import { nf, Fp } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { BA } from "/$bunfs/root/chunk-msy0phy0.js";
import { qg, O4, xCt } from "/$bunfs/root/chunk-cwfjj64b.js";
import { I4, Rst, EDn, plo, Ogr, wB, DLe, LLe } from "/$bunfs/root/chunk-6fb685xp.js";
import { T5 } from "/$bunfs/root/chunk-qnrk8yjg.js";
import { Xps } from "/$bunfs/root/chunk-0w84e1m6.js";
import { o, E, oe, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { Ko } from "/$bunfs/root/chunk-7qc48pza.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { randomUUID } from "crypto";
import { constants } from "fs";
import { readlink } from "fs/promises";
import { basename, extname } from "path";
const K = 20971520;
const ce = /^[^\\/\p{Cc}\p{Cf}\uFE00-\uFE0F]{1,255}$/u;
const me = 40000000;
function ge(e) {
    switch(e){
        case "image/png":
            return "png";
        case "image/jpeg":
            return "jpeg";
        case "image/webp":
            return "webp";
        default:
            return;
    }
}
function _e(e) {
    return ge(e) !== undefined;
}
function V(e) {
    let n = O4(e);
    return n !== undefined && (n.width > I4 || n.height > I4);
}
async function re(e, n, r, signal) {
    let h = ge(n);
    if (h === undefined || xCt(e)) {
        return;
    }
    let m = O4(e);
    if (m === undefined || !V(e) || m.width * m.height > me) {
        return;
    }
    let s = await no().imageScaleLock.acquire();
    try {
        return await Fe(e, h, r, signal);
    } finally{
        s();
    }
}
async function Fe(e, n, r, i) {
    if (i?.aborted) {
        return;
    }
    try {
        let h = await wB();
        let m = await h(e).metadata();
        if (m.width * m.height > me) {
            return;
        }
        let buffer = await h(e).resize(I4, I4, {
            fit: "inside",
            withoutEnlargement: true
        })[n]().toBuffer();
        let y = O4(buffer);
        if (y === undefined || V(buffer) || buffer.length > r) {
            return;
        }
        return {
            buffer,
            width: y.width,
            height: y.height,
            originalWidth: m.width,
            originalHeight: m.height
        };
    } catch (error) {
        t(`[brief:upload] could not scale an oversize image, sending it unscaled: ${error}`);
        if (LLe(DLe(error))) {
            c(error);
        }
        return;
    }
}
function Re(e) {
    return e.replace(/[\r\n]/g, "").replaceAll("\\", "\\\\").replaceAll('"', "\\\"");
}
function q(e, n) {
    let boundary = `----FormBoundary${randomUUID()}`;
    return {
        boundary,
        head: Buffer.from(`--${boundary}\r
Content-Disposition: form-data; name="file"; filename="${Re(e)}"\r
Content-Type: ${n}\r
\r
`),
        tail: Buffer.from(`\r
--${boundary}--\r
`)
    };
}
class W extends Error {
    constructor(e, n){
        super(e, n);
        this.name = "UploadSourceError";
    }
}
function he(buffer, n, r) {
    let { boundary, head, tail } = q(n, r);
    async function* s() {
        yield head;
        for(let y = 0; y < buffer.length; y += NRe){
            yield buffer.subarray(y, y + NRe);
        }
        yield tail;
    }
    return {
        boundary,
        contentLength: head.length + buffer.length + tail.length,
        slices: s(),
        finished: ()=>Promise.resolve()
    };
}
function ye(handle, size, r, i) {
    let { boundary, head, tail } = q(r, i);
    let y = false;
    let w = ()=>{};
    let b = new Promise((resolve)=>{
        w = resolve;
    });
    async function* A() {
        y = true;
        try {
            yield head;
            let U = 0;
            while(U < size){
                let S = Buffer.allocUnsafe(Math.min(NRe, size - U));
                let B;
                try {
                    B = (await handle.read(S, 0, S.length, U)).bytesRead;
                } catch (cause) {
                    throw new W(`could not read file (${l(cause)})`, {
                        cause
                    });
                }
                if (B === 0) {
                    throw new W("the file became shorter while it was being uploaded");
                }
                U += B;
                yield B === S.length ? S : S.subarray(0, B);
            }
            yield tail;
        } finally{
            w();
        }
    }
    return {
        boundary,
        contentLength: head.length + size + tail.length,
        slices: A(),
        finished: ()=>{
            if (y) {
                return b;
            }
            return Promise.resolve();
        }
    };
}
const M = 1048576;
const L = T5;
const be = 500 * M;
const De = M;
const Ne = 600000;
const je = 4 * NRe;
function ae(e) {
    return `${(e / M).toFixed(1)} MiB`;
}
function H(e, n) {
    if (n === undefined) {
        return `${ae(e)} exceeds the upload limit`;
    }
    return `${ae(e)} exceeds the ${plo(n)} upload limit`;
}
const timeout = 35000;
const ze = [
    "network_error",
    "connection_lost",
    "http_5xx"
];
const He = new Set([
    502,
    503,
    504
]);
const Ee = new Set([
    "ENOTFOUND",
    "ERR_INVALID_URL",
    ...Hue
]);
const Ye = 2;
const We = 30 * M;
const floorMs = 250;
const baseMs = 1000;
const Je = 40000;
const Ke = 3;
const Ve = 60000;
const qe = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp"
};
function G(e) {
    let n = extname(e).toLowerCase();
    return qe[n] ?? "application/octet-stream";
}
const Se = {
    ".bmp": "png",
    ".tif": "png",
    ".tiff": "png",
    ".heic": "jpeg",
    ".heif": "jpeg",
    ".avif": "jpeg"
};
const quality = 90;
const Ze = new Set([
    "http_413",
    "http_5xx",
    "network_error"
]);
function er(e) {
    return e.includes("urn:mpeg:hevc:2015:auxid:1") || e.includes("urn:mpeg:avc:2015:auxid:1") || e.includes("urn:mpeg:mpegB:cicp:systems:auxiliary:alpha");
}
function rr(e) {
    if (e.length < 30 || e[0] !== 66 || e[1] !== 77) {
        return false;
    }
    let n = e.readUInt32LE(14);
    let r = n === 12;
    if (!r && (n < 40 || n === 64 || e.length < 34)) {
        return false;
    }
    let i = Math.abs(r ? e.readUInt16LE(18) : e.readInt32LE(18));
    let h = Math.abs(r ? e.readUInt16LE(20) : e.readInt32LE(22));
    let m = e.readUInt16LE(r ? 24 : 28);
    let s = r ? 0 : e.readUInt32LE(30);
    let y = e.length - e.readUInt32LE(10);
    if (s === 1 || s === 2) {
        return i * h > 127.5 * y;
    }
    if (s !== 0 && s !== 3 && s !== 6) {
        return false;
    }
    let w = Math.floor((i * m + 31) / 32) * 4;
    let b = Math.ceil(i * m / 8);
    return h > 0 && w * (h - 1) + b > y;
}
function N(e, n, r, i) {
    let h = [];
    let m = n;
    while(m + 8 <= r){
        let s = e.readUInt32BE(m);
        let y = 8;
        if (s === 1) {
            if (m + 16 > r) {
                break;
            }
            s = Number(e.readBigUInt64BE(m + 8));
            y = 16;
        } else if (s === 0) {
            s = r - m;
        }
        if (s < y || m + s > r) {
            break;
        }
        let w = {
            type: e.toString("latin1", m + 4, m + 8),
            start: m + y,
            end: m + s
        };
        if (i === undefined) {
            h.push(w);
        } else if (w.type === i) {
            return [
                w
            ];
        }
        m += s;
    }
    return h;
}
function tr(e) {
    let [n] = N(e, 0, e.length, "meta");
    if (n === undefined) {
        return;
    }
    let [r] = N(e, n.start + 4, n.end, "pitm");
    let [i] = N(e, n.start + 4, n.end, "iprp");
    if (r === undefined || i === undefined) {
        return;
    }
    let h = e[r.start] === 0;
    if (r.start + (h ? 6 : 8) > r.end) {
        return;
    }
    let m = h ? e.readUInt16BE(r.start + 4) : e.readUInt32BE(r.start + 4);
    let [s] = N(e, i.start, i.end, "ipco");
    let [y] = N(e, i.start, i.end, "ipma");
    if (s === undefined || y === undefined) {
        return;
    }
    let w = N(e, s.start, s.end);
    let b = e[y.start];
    let A = (e[y.start + 3] & 1) === 1;
    let U = b < 1 ? 2 : 4;
    let S = A ? 2 : 1;
    let B = y.start + 4;
    if (B + 4 > y.end) {
        return;
    }
    let C = e.readUInt32BE(B);
    B += 4;
    let clockwise = 0;
    let mirrored = false;
    for(let P = 0; P < C; P++){
        if (B + U + 1 > y.end) {
            return;
        }
        let x = U === 2 ? e.readUInt16BE(B) : e.readUInt32BE(B);
        let F = e[B + U];
        B += U + 1;
        for(let z = 0; z < F; z++){
            if (B + S > y.end) {
                return;
            }
            let D = S === 2 ? e.readUInt16BE(B) & 32767 : e[B] & 127;
            B += S;
            if (x !== m || D === 0) {
                continue;
            }
            let R = w[D - 1];
            if (R === undefined) {
                return;
            }
            if (R.type === "imir") {
                mirrored = true;
            } else if (R.type === "irot" && R.start < R.end) {
                clockwise = (4 - (e[R.start] & 3)) % 4 * 90;
            }
        }
    }
    return {
        clockwise,
        mirrored
    };
}
function nr(e) {
    if (e.length < 8) {
        return false;
    }
    let n = e[0] === 73 && e[1] === 73;
    if (!n && !(e[0] === 77 && e[1] === 77)) {
        return false;
    }
    let r = new DataView(e.buffer, e.byteOffset, e.byteLength);
    if (r.getUint16(2, n) !== 42) {
        return false;
    }
    let i = r.getUint32(4, n);
    if (i + 2 > e.length) {
        return false;
    }
    let h = i + 2 + r.getUint16(i, n) * 12;
    return h + 4 <= e.length && r.getUint32(h, n) !== 0;
}
async function or(e, n, signal, i, copyLock) {
    let m = Se[extname(n).toLowerCase()];
    if (e.length === 0 || m === undefined || qg(e) !== null) {
        return;
    }
    let format = m === "jpeg" && er(e) ? "png" : m;
    if (nr(e)) {
        f("bridge_attachment_preview_copy", "multi_page", i);
        return;
    }
    if (rr(e)) {
        f("bridge_attachment_preview_copy", "truncated", i);
        return;
    }
    let y = 0;
    if (e.toString("latin1", 4, 8) === "ftyp") {
        let [b] = N(e, 0, e.length, "ftyp");
        let A = b === undefined ? "" : e.toString("latin1", b.start, Math.min(b.start + 4, b.end)) + e.toString("latin1", b.start + 8, b.end);
        let U = /avi[fs]/.test(A);
        let S;
        try {
            S = tr(e);
        } catch  {
            S = undefined;
        }
        if (S === undefined || S.mirrored || S.clockwise !== 0 && (U || O() !== "macos")) {
            f("bridge_attachment_preview_copy", S === undefined ? "unreadable_properties" : "turned_or_mirrored", i);
            return;
        }
        y = S.clockwise;
    }
    if (signal?.aborted) {
        return;
    }
    let w = await copyLock.acquire();
    try {
        if (signal?.aborted) {
            return;
        }
        let b = await wB();
        let { width, height } = await b(e).metadata();
        if (width > I4 || height > I4) {
            T(`${n} is ${width}x${height} pixels, over the ${I4}-pixel side the server previews; uploading the original, not a preview copy`);
            f("bridge_attachment_preview_copy", "over_preview_size", i);
            return;
        }
        let S = y === 0 ? b(e) : b(e).rotate(y);
        let bytes = await (format === "png" ? S.png() : S.jpeg({
            quality
        })).toBuffer();
        if (bytes.length > L) {
            T(`the copy of ${n} is ${bytes.length} bytes, over the ${L}-byte limit for a copy; uploading the original`);
            f("bridge_attachment_preview_copy", "copy_over_upload_limit", i);
            return;
        }
        return {
            bytes,
            format
        };
    } catch (error) {
        T(`could not make a preview copy of ${n} (${l(error)}); uploading the original`);
        if (LLe(DLe(error))) {
            c(error);
        }
        let A = v(error);
        f("bridge_attachment_preview_copy", A?.startsWith("ERR_IMAGE_") ? A.toLowerCase() : "convert_failed", i);
        return;
    } finally{
        w();
    }
}
function T(e) {
    t(`[brief:upload] ${e}`);
}
function Y(e) {
    if (Ie() !== "firstParty") {
        f("bridge_attachment_upload", "not_first_party", e);
        return {
            error: "upload disabled: uploading file contents to Anthropic servers is not permitted on this API provider"
        };
    }
    if (Tt()) {
        f("bridge_attachment_upload", "essential_traffic", e);
        return {
            error: "upload disabled: uploading file contents to Anthropic servers is not permitted under this privacy configuration"
        };
    }
    let n = Fp("allow_send_file");
    if (n !== null) {
        BA("allow_send_file", "tool");
        f("bridge_attachment_upload", n === "org_denied" ? "policy_denied" : `policy_${n}`, e);
        return {
            error: `upload disabled: ${nf("allow_send_file", "File upload", "is")}`
        };
    }
    return null;
}
function Be() {
    return $ce() ?? a.ANTHROPIC_BASE_URL ?? dn().BASE_API_URL;
}
function ir(status) {
    if (status === 401 || status === 403 || status === 413) {
        return `http_${status}`;
    }
    if (status >= 500) {
        return "http_5xx";
    }
    if (status >= 400) {
        return "http_4xx";
    }
    return "http_other";
}
const ar = p(()=>u({
        file_uuid: o(),
        file_kind: oe().optional()
    }));
const dr = p(()=>u({
        error: u({
            details: u({
                max_bytes: E().int().positive()
            })
        })
    }));
export async function uploadBytesToBridgeStore(e, n, r, i, h, m) {
    let s = await ee(e, n, r, i, h, m);
    if ("error" in s) {
        return s;
    }
    return s.file_uuid;
}
function Z(e, n, r) {
    f("bridge_attachment_upload", e, r === undefined ? n : {
        ...n,
        server_error_code: d(r)
    });
}
function Ae(e, n, r, i, h) {
    if (e.status === 201) {
        let b = ar().safeParse(e.data);
        if (!b.success) {
            T(`unexpected response shape for ${n}: ${b.error.message}`);
            h("bad_response");
            return {
                error: "upload failed: unexpected server response"
            };
        }
        T(`uploaded ${n} \u2192 ${b.data.file_uuid} (${r} bytes)`);
        g("bridge_attachment_upload", i);
        return b.data;
    }
    T(`upload failed for ${n}: status=${e.status} body=${_(e.data ?? null).slice(0, 200)}`);
    let m = Oat(e.data);
    let errorCode = Rst(m);
    let y = m === "upload_busy" || m === "upload_timeout" || e.status === 529 || typeof e.headers === "object" && e.headers !== null && "retry-after" in e.headers;
    h(ir(e.status), errorCode, e.status < 500 ? undefined : y ? "any_post" : m !== undefined ? "reason_not_temporary" : He.has(e.status) ? undefined : "status_not_temporary");
    let w = (error)=>({
            error,
            ...errorCode !== undefined && {
                errorCode
            }
        });
    if (e.status === 413) {
        let b = dr().safeParse(e.data);
        let A = b.success ? b.data.error.details : undefined;
        if (m === "image_too_large") {
            return w(`${H(r, A?.max_bytes)} for images`);
        }
        if (A !== undefined) {
            no().uploadLimitTold = {
                maxBytes: A.max_bytes,
                atMs: Date.now()
            };
        }
        return w(H(r, A?.max_bytes));
    }
    return w(`upload failed: server returned ${e.status}`);
}
async function ee(e, n, r, i, h, m, s = (y, w)=>Z(y, h, w)) {
    let y = Y(h);
    if (y) {
        T(`skip ${n}: policy/provider gate denied`);
        return y;
    }
    if (e.length > L) {
        T(`skip ${n}: ${e.length} bytes exceeds ${L} limit`);
        s("too_large");
        return {
            error: H(e.length, L)
        };
    }
    let w = j() && m !== undefined ? await CT(m) : Ck();
    if (!w) {
        T("skip: no oauth token");
        s("no_token");
        return {
            error: "upload failed: no OAuth token available"
        };
    }
    let { boundary, head, tail } = q(n, r);
    let S = Buffer.concat([
        head,
        e,
        tail
    ]);
    let B = new AbortController;
    let C = Nyo(B, timeout);
    try {
        let I = `${Be()}/api/oauth/file_upload`;
        let k = await At.post(I, S, {
            headers: {
                "User-Agent": Ko(),
                Authorization: `Bearer ${w}`,
                "Content-Type": `multipart/form-data; boundary=${boundary}`,
                "Content-Length": S.length.toString()
            },
            timeout,
            signal: i === undefined ? B.signal : AbortSignal.any([
                i,
                B.signal
            ]),
            validateStatus: ()=>true,
            maxRedirects: 0
        });
        return Ae(k, n, e.length, h, s);
    } catch (error) {
        T(`upload threw for ${n}: ${error}`);
        let k = C.fired() && i?.aborted !== true;
        let P = !k && At.isCancel(error);
        s(P ? "aborted" : "network_error", undefined, Ee.has(v(error)) ? "cause_not_temporary" : undefined);
        return {
            error: P ? "upload aborted" : `upload failed: network error (${k ? `timeout of ${timeout}ms exceeded` : l(error)})`
        };
    } finally{
        C.clear();
    }
}
function Ue(e) {
    e.made++;
    e.firstAtMs ??= e.clock.monotonicNow();
}
function we(e) {
    let { underWay, lastFailedAtMs } = no().uploadResends;
    let i = e.clock.monotonicNow();
    if (i > e.firstAtMs + Je) {
        return "past_deadline";
    }
    if (lastFailedAtMs !== undefined && i - lastFailedAtMs < Ve) {
        return "cooling_down";
    }
    if (underWay >= Ke) {
        return "too_many_at_once";
    }
}
async function sr(e, signal) {
    let r = we(e);
    if (r !== undefined) {
        return r;
    }
    await Q(YR({
        baseMs,
        attempt: e.made - 1,
        floorMs
    }), signal, {
        clock: e.clock
    });
    if (signal?.aborted) {
        return "aborted";
    }
    let i = we(e);
    if (i !== undefined) {
        return i;
    }
    let uploadResends = no().uploadResends;
    uploadResends.underWay++;
    return ()=>{
        uploadResends.underWay--;
    };
}
async function se(e, n, r, signal, h) {
    let m = h;
    let s;
    while(true){
        let y;
        let w;
        try {
            Ue(r);
            w = await e(m, (code_1, serverCode_1, bars_1, bytesHanded_1)=>{
                y = {
                    code: code_1,
                    serverCode: serverCode_1,
                    bars: bars_1,
                    bytesHanded: bytesHanded_1
                };
            });
        } finally{
            s?.();
            s = undefined;
        }
        if (y === undefined) {
            return w;
        }
        let { code, serverCode, bars, bytesHanded } = y;
        let B = ze.find((I)=>I === code);
        let C = B === undefined || bars === "any_post" || r.made >= r.max ? undefined : bars ?? (n.size > We ? "over_size_limit" : await sr(r, signal));
        if (typeof C === "function") {
            s = C;
            T(`posting ${n.filename} again after ${code} (post ${r.made + 1} of at most ${r.max})`);
            m = {
                ...h,
                post_number: r.made + 1,
                failed_before: pe(B)
            };
            continue;
        }
        if (C === "aborted") {
            Z("aborted", {
                ...m,
                failed_before: pe(B)
            }, undefined);
            return {
                error: "upload aborted"
            };
        }
        if (r.max > 1 && r.made > 1 && B !== undefined) {
            no().uploadResends.lastFailedAtMs = r.clock.monotonicNow();
        }
        Z(code, {
            ...m,
            ...C !== undefined && {
                resend_withheld: d(C)
            },
            ..."error" in w && ke(code, bars, bytesHanded) && Ogr(w.error, w.errorCode) && {
                answer_may_be_lost: true
            },
            ...bytesHanded !== undefined && {
                bytes_handed: bytesHanded
            }
        }, serverCode);
        return w;
    }
}
const lr = "/mnt/project-files";
export async function writeAttachmentToProjectFolder(e, n, door, i) {
    let { telemetry } = i;
    let m = Y(telemetry);
    if (m) {
        T(`skip ${e}: policy/provider gate denied`);
        return m;
    }
    if (n > K) {
        f("bridge_attachment_upload", "too_large", telemetry);
        return {
            error: `${ae(n)} exceeds the ${K / 1048576} MiB limit for the project folder`
        };
    }
    let s = i.filename ?? basename(e);
    if (!ce.test(s) || s === "..") {
        f("bridge_attachment_upload", "project_name_rejected", telemetry);
        return {
            error: `not sent: the file name '${s}' cannot be placed in the project folder`
        };
    }
    let content;
    try {
        content = await fr(e, i.identity, i.signal, K, i.waitForTurn);
    } catch (error) {
        f("bridge_attachment_upload", "read_failed", telemetry);
        return {
            error: `upload failed: could not read file (${error instanceof Error ? error.message : error})`
        };
    }
    let w = Y(telemetry);
    if (w) {
        T(`skip ${e}: policy/provider gate denied after the wait for a turn`);
        return w;
    }
    for (let b of [
        s,
        cr(s)
    ]){
        if (i.signal?.aborted) {
            f("bridge_attachment_upload", "aborted", telemetry);
            return {
                error: "upload aborted"
            };
        }
        let A = await Xps({
            door,
            items: [
                {
                    path: `/${b}`,
                    content
                }
            ],
            signal: i.signal
        });
        if (!A.ok) {
            f("bridge_attachment_upload", A.reason, telemetry);
            switch(A.reason){
                case "aborted":
                    return {
                        error: "upload aborted"
                    };
                case "http_error":
                    return {
                        error: `upload failed: the project folder refused the file (${(A.code ?? `status ${A.status}`).replaceAll("_", " ")})`
                    };
                case "no_token":
                    return {
                        error: "upload failed: this session has no credential to send with"
                    };
                case "invalid_channel":
                case "bad_response":
                case "request_failed":
                    return {
                        error: "upload failed: the request to the project folder did not complete; try again"
                    };
            }
        }
        let U = A.results.length === 1 ? A.results[0] : undefined;
        if (U === undefined) {
            f("bridge_attachment_upload", "bad_response", telemetry);
            return {
                error: "upload failed: the project folder gave no answer for the file"
            };
        }
        let S = U.error_reason;
        if (S === undefined) {
            g("bridge_attachment_upload", telemetry);
            return `${lr}/${b}`;
        }
        if (S !== "project_file_write_rejected") {
            f("bridge_attachment_upload", "project_write_refused", telemetry);
            return {
                error: `upload failed: the project folder refused the file (${S.replaceAll("_", " ")})`
            };
        }
    }
    f("bridge_attachment_upload", "project_name_taken", telemetry);
    return {
        error: `upload failed: a file named ${s} is already in the project folder`
    };
}
async function $e(e, identity, signal) {
    if (identity === null) {
        throw Error("the file at this path could not be vouched for");
    }
    let i = O();
    let h = i === "windows" ? constants.O_RDONLY : constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK | (constants.O_NOCTTY ?? 0);
    let m = identity !== undefined;
    let handle = await UHt(e, h, i, m, signal);
    try {
        let y = await handle.stat({
            bigint: true
        });
        if (!y.isFile()) {
            throw Error("not a regular file");
        }
        if (identity && (y.dev !== identity.dev || y.ino !== identity.ino)) {
            throw Error("the file at this path is not the one approved");
        }
        let w = m && (i === "linux" || i === "wsl") ? await readlink(`/proc/self/fd/${handle.fd}`).catch(()=>{}) : undefined;
        if (w !== undefined && w !== e) {
            throw Error("it opened at a different path than approved");
        }
        if (m && w === undefined) {
            let b = yo(ie(), e);
            if (!b.isCanonical || b.resolvedPath !== e) {
                throw Error("it re-resolved elsewhere once opened");
            }
        }
        return {
            handle,
            size: Number(y.size)
        };
    } catch (error) {
        await handle.close();
        throw error;
    }
}
const ur = 65536;
async function Te(handle) {
    return Number((await handle.stat({
        bigint: true
    })).size);
}
async function ve({ handle, size }, r) {
    let i = size > r ? undefined : await KE(handle, r, Math.max(size, ur));
    if (i === undefined || i.overLimit) {
        throw Error("the file is over the size limit");
    }
    return i.bytes;
}
async function fr(e, identity, signal, i, waitForTurn) {
    let m = await $e(e, identity, signal);
    try {
        await waitForTurn();
        signal?.throwIfAborted();
        m.size = await Te(m.handle);
        return await ve(m, i);
    } finally{
        await m.handle.close();
    }
}
function cr(e) {
    let n = extname(e);
    let r = n ? e.slice(0, -n.length) : e;
    let i = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15);
    return `${r}-${i}-${randomUUID().slice(0, 4)}${n}`;
}
const pr = 524288;
async function mr(e, n, signal) {
    if (!_e(n) || e.size > L) {
        return;
    }
    try {
        let { bytes } = await KE(e.handle, Math.min(e.size, pr));
        if (!V(bytes)) {
            return;
        }
        let h = bytes.length === e.size ? bytes : (await KE(e.handle, e.size)).bytes;
        return await re(h, n, L, signal);
    } catch (error) {
        T(`could not read ${e.size} bytes to scale an image: ${error}`);
        return;
    }
}
async function Ce(e, n, r, i, h) {
    let m = G(n);
    let s = await se((U, S)=>{
        if (JBn()) {
            return Le(he(e.buffer, n, m), e.buffer.length, n, r, U, S);
        }
        return ee(e.buffer, n, m, r.signal, U, r.credentials, S);
    }, {
        filename: n,
        size: e.buffer.length
    }, h, r.signal, {
        ...i,
        image_scaled: true
    });
    if ("error" in s) {
        return s;
    }
    let { width, height, originalWidth, originalHeight } = e;
    T(`sent ${n} scaled to ${width}x${height} from ${originalWidth}x${originalHeight}`);
    return {
        file_uuid: s.file_uuid,
        scaled: {
            width,
            height,
            original_width: originalWidth,
            original_height: originalHeight
        }
    };
}
export async function uploadBriefAttachment(e, n, r) {
    let i = {
        upload_lane: d(r.lane),
        size_bucket: d(n <= M ? "le_1m" : n <= 30 * M ? "le_30m" : n <= 100 * M ? "le_100m" : n <= 400 * M ? "le_400m" : "gt_400m"),
        server_max_known: ne() !== undefined
    };
    let h = Y(i);
    if (h) {
        T(`skip ${e}: policy/provider gate denied`);
        return h;
    }
    if (r.signal?.aborted) {
        f("bridge_attachment_upload", "aborted", i);
        return {
            error: "upload aborted"
        };
    }
    if (!(j() && r.credentials !== undefined ? await CT(r.credentials) : Ck())) {
        T("skip: no oauth token");
        f("bridge_attachment_upload", "no_token", i);
        return {
            error: "upload failed: no OAuth token available"
        };
    }
    let s = r.filename ?? basename(e);
    let y = {
        made: 0,
        max: Number.isInteger(r.maxPosts) ? Math.min(Math.max(r.maxPosts, 1), Ye) : 1,
        firstAtMs: undefined,
        clock: r.clock ?? tb
    };
    let w = !r.originalsOnly && !r.noPreviewCopies && Se[extname(s).toLowerCase()] !== undefined;
    let b = n <= L;
    let A = JBn();
    if (w && !b && A) {
        f("bridge_attachment_preview_copy", "original_over_copy_limit", i);
    }
    let U = !A || n <= De || w && b;
    if (U && !b) {
        T(`skip ${e}: ${n} bytes exceeds ${L} limit`);
        f("bridge_attachment_upload", "too_large", i);
        return {
            error: H(n, L)
        };
    }
    let S;
    try {
        S = await $e(e, r.identity, r.signal);
    } catch (error) {
        T(`open failed for ${e}: ${error}`);
        let C = r.signal?.aborted === true;
        f("bridge_attachment_upload", C ? "aborted" : "read_failed", i);
        return {
            error: C ? "upload aborted" : `upload failed: could not read file (${l(error)})`
        };
    }
    try {
        await r.waitForTurn();
        let B = ne();
        i = {
            ...i,
            server_max_known: B !== undefined
        };
        let C = Y(i);
        if (C) {
            T(`skip ${e}: policy/provider gate denied after the wait for a turn`);
            return C;
        }
        if (r.signal?.aborted) {
            f("bridge_attachment_upload", "aborted", i);
            return {
                error: "upload aborted"
            };
        }
        let I;
        try {
            S.size = await Te(S.handle);
            if (U) {
                I = await ve(S, L);
            }
        } catch (error) {
            T(`read failed for ${e}: ${error}`);
            f("bridge_attachment_upload", "read_failed", i);
            return {
                error: `upload failed: could not read file (${l(error)})`
            };
        }
        if (I !== undefined) {
            return await gr(I, s, r, i, y);
        }
        let k = Math.min(be, B ?? be);
        if (S.size > k) {
            T(`skip ${e}: ${S.size} bytes exceeds the ${k} limit ${k === B ? "the store reported" : "of this client"}`);
            f("bridge_attachment_upload", "too_large", i);
            return {
                error: H(S.size, k)
            };
        }
        let P = r.originalsOnly || r.noScaledCopies ? undefined : await mr(S, G(s), r.signal);
        if (P !== undefined) {
            return await Ce(P, s, r, i, y);
        }
        let x = false;
        let F = await se((D, R)=>{
            x = false;
            return Le(ye(S.handle, S.size, s, G(s)), S.size, s, r, D, (le, Pe, ue, fe)=>{
                x = ke(le, ue, fe);
                R(le, Pe, ue, fe);
            });
        }, {
            filename: s,
            size: S.size
        }, y, r.signal, i);
        if (!("error" in F)) {
            return {
                file_uuid: F.file_uuid
            };
        }
        if (!x || !Ogr(F.error, F.errorCode)) {
            return F;
        }
        let z = ne() ?? B;
        if (z !== undefined) {
            if (S.size > z) {
                return {
                    error: H(S.size, z)
                };
            }
            return F;
        }
        if (S.size > EDn) {
            return {
                ...F,
                suspectedLimitBytes: EDn
            };
        }
        return F;
    } finally{
        await S.handle.close().catch((B)=>{
            T(`close failed for ${e}: ${B}`);
        });
    }
}
function ke(e, n, r) {
    if (e === "http_5xx") {
        return n !== "any_post" && n !== "reason_not_temporary";
    }
    return r !== undefined && r > je;
}
function ne() {
    let uploadLimitTold = no().uploadLimitTold;
    if (uploadLimitTold !== undefined && Date.now() - uploadLimitTold.atMs < Ne) {
        return uploadLimitTold.maxBytes;
    }
}
async function gr(e, n, r, i, h) {
    let m = r.originalsOnly || r.noPreviewCopies ? undefined : await or(e, n, r.signal, i, r.copyLock);
    if (m !== undefined) {
        let w;
        let b;
        let A;
        Ue(h);
        let U = await ee(m.bytes, `${basename(n, extname(n))}.${m.format === "png" ? "png" : "jpg"}`, "application/octet-stream", r.signal, i, r.credentials, (S, B, C)=>{
            w = S;
            b = B;
            A = C;
        });
        if (!("error" in U)) {
            let isImage = U.file_kind === "image";
            if (isImage) {
                g("bridge_attachment_preview_copy", i);
            } else {
                f("bridge_attachment_preview_copy", "no_preview", i);
            }
            return {
                file_uuid: U.file_uuid,
                copy: {
                    isImage,
                    mediaType: m.format === "png" ? "image/png" : "image/jpeg"
                }
            };
        }
        if (w === undefined || !Ze.has(w) || h.max > 1 && A === "any_post") {
            if (w !== undefined) {
                Z(w, i, b);
            }
            return U;
        }
        T(`upload of the copy of ${n} failed (${w}); uploading the original`);
        f("bridge_attachment_preview_copy", `upload_failed_${w}`, i);
    }
    let s = r.originalsOnly || r.noScaledCopies ? undefined : await re(e, G(n), L, r.signal);
    if (s !== undefined) {
        return Ce(s, n, r, i, h);
    }
    let y = await se((w, b)=>ee(e, n, G(n), r.signal, w, r.credentials, b), {
        filename: n,
        size: e.length
    }, h, r.signal, i);
    if ("error" in y) {
        return y;
    }
    return {
        file_uuid: y.file_uuid
    };
}
async function Le(e, n, filename, i, telemetry, logSad) {
    let s = j() && i.credentials !== undefined ? await CT(i.credentials) : Ck();
    if (!s) {
        T("skip: no oauth token");
        logSad("no_token");
        return {
            error: "upload failed: no OAuth token available"
        };
    }
    return _r(e, n, s, {
        filename,
        signal: i.signal,
        telemetry,
        logSad
    });
}
async function _r(e, n, r, { filename, signal, telemetry, logSad }) {
    let y = Y(telemetry);
    if (y) {
        T(`skip ${filename}: policy/provider gate denied`);
        return y;
    }
    let w = jks(e.slices, e.contentLength, {
        signal
    });
    try {
        let b = await At.post(`${Be()}/api/oauth/file_upload`, w.body, {
            headers: {
                "User-Agent": Ko(),
                Authorization: `Bearer ${r}`,
                "Content-Type": `multipart/form-data; boundary=${e.boundary}`,
                "Content-Length": e.contentLength.toString()
            },
            timeout: 0,
            signal: w.signal,
            validateStatus: ()=>true,
            maxRedirects: 0
        });
        return Ae(b, filename, n, telemetry, logSad);
    } catch (error) {
        T(`upload threw for ${filename}: ${error}`);
        let A = hr(error, w, signal?.aborted === true);
        logSad(A.code, undefined, A.code === "network_error" && Ee.has(v(error)) ? "cause_not_temporary" : undefined, w.seen().bytes_handed);
        return {
            error: A.error
        };
    } finally{
        w.dispose();
        w.body.on("error", ()=>{});
        w.body.destroy(Error("the upload has already been answered"));
        await e.finished();
    }
}
function hr(error, n, r) {
    if (r) {
        return {
            code: "aborted",
            error: "upload aborted"
        };
    }
    let reason = n.signal.reason;
    if (reason instanceof wZt) {
        let s = n.seen();
        let y = Math.round(reason.waitedMs / 1000);
        return {
            code: "stalled",
            error: s.bytes_handed === s.body_bytes ? `upload failed: the server did not answer within ${y} seconds of receiving the file` : `upload failed: the transfer stalled (nothing moved for ${y} seconds)`
        };
    }
    let h = aj(error, (s)=>s instanceof W);
    if (h) {
        return {
            code: "read_failed",
            error: `upload failed: ${h.message}`
        };
    }
    let m = v(error);
    if (m === "ECONNRESET" || m === "EPIPE" || m === "ERR_STREAM_PREMATURE_CLOSE") {
        return {
            code: "connection_lost",
            error: "upload failed: the connection closed before the server answered"
        };
    }
    return {
        code: "network_error",
        error: `upload failed: network error (${l(error)})`
    };
}
