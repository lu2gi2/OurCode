import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, l, v, Vr, FH } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { qg, kQ, O4, ylo, Wps, zps, Vps, xCt, _lo, qps, Kps } from "/$bunfs/root/chunk-cwfjj64b.js";
import { mZ } from "/$bunfs/root/chunk-2d9a83dh.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Ta } from "/$bunfs/root/chunk-nj0630nv.js";
import { rl } from "/$bunfs/root/chunk-w6rkdzfe.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
const me = new Set([
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".bmp",
    ".ico",
    ".webp",
    ".tiff",
    ".tif",
    ".mp4",
    ".mov",
    ".avi",
    ".mkv",
    ".webm",
    ".wmv",
    ".flv",
    ".m4v",
    ".mpeg",
    ".mpg",
    ".mp3",
    ".wav",
    ".ogg",
    ".flac",
    ".aac",
    ".m4a",
    ".wma",
    ".aiff",
    ".opus",
    ".zip",
    ".tar",
    ".gz",
    ".bz2",
    ".7z",
    ".rar",
    ".xz",
    ".z",
    ".tgz",
    ".iso",
    ".exe",
    ".dll",
    ".so",
    ".dylib",
    ".bin",
    ".o",
    ".a",
    ".obj",
    ".lib",
    ".app",
    ".msi",
    ".deb",
    ".rpm",
    ".pdf",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".odt",
    ".ods",
    ".odp",
    ".ttf",
    ".otf",
    ".woff",
    ".woff2",
    ".eot",
    ".pyc",
    ".pyo",
    ".class",
    ".jar",
    ".war",
    ".ear",
    ".node",
    ".wasm",
    ".rlib",
    ".sqlite",
    ".sqlite3",
    ".db",
    ".mdb",
    ".idx",
    ".psd",
    ".ai",
    ".eps",
    ".sketch",
    ".fig",
    ".xd",
    ".blend",
    ".3ds",
    ".max",
    ".swf",
    ".fla",
    ".lockb",
    ".dat",
    ".data"
]);
function HLe(e) {
    let n = e.slice(e.lastIndexOf(".")).toLowerCase();
    return me.has(n);
}
const pe = [
    "image_dimensions_too_large",
    "image_processing_failed",
    "unsupported_file_format",
    "image_format_mismatch",
    "image_too_large",
    "file_too_large",
    "file_limit_exceeded",
    "upload_busy",
    "upload_timeout"
];
const I4 = 8000;
function ge(e) {
    return pe.some((n)=>n === e);
}
function Rst(e) {
    if (ge(e)) {
        return e;
    }
}
function V(e) {
    switch(e){
        case "image_dimensions_too_large":
            return {
                cause: `the image is more than ${I4} pixels wide or tall`,
                remedy: `send a copy scaled to at most ${I4} pixels on its longer side, or send it in a non-image format such as a .zip`
            };
        case "image_processing_failed":
            return {
                cause: "the server could not process this image (it may be damaged, truncated, not an image format it can decode, or took too long to convert)",
                remedy: "re-export it as PNG or JPEG, or send it inside a .zip"
            };
        case "unsupported_file_format":
            return {
                cause: "the file's contents are an image format the server does not accept, whatever its extension says (it accepts PNG, JPEG, GIF and WebP)",
                remedy: "convert it to one of those or send it inside a .zip"
            };
        case "image_format_mismatch":
            return {
                cause: "the image's contents do not match its file extension (for example JPEG data in a .png file)",
                remedy: "rename or re-export it so the two agree"
            };
        case "image_too_large":
            return {
                cause: "images have a lower size limit than other files",
                remedy: "reduce this image's file size, or send it in a non-image format such as a .zip"
            };
        case "file_too_large":
            return {
                cause: "the file is larger than the server's upload size limit",
                remedy: "send a smaller or compressed copy"
            };
        case "file_limit_exceeded":
            return {
                cause: "this account has uploaded as many files as it is allowed for now (a count of files, not a size)",
                remedy: "sending again, even a smaller file, will fail the same way until the allowance resets, so tell the user instead of retrying",
                stop: true
            };
        case "upload_busy":
            return {
                cause: "the server is busy with other large uploads",
                remedy: "try again shortly",
                passes: true
            };
        case "upload_timeout":
            return {
                cause: "the server timed out receiving the file",
                remedy: "try again",
                passes: true
            };
    }
}
const H = /^upload failed: server returned (\d+)$/;
const Q = /^upload failed: (?:network error \(|the connection closed before the server answered$|the server did not answer within \d|the transfer stalled \()/;
const Z = /\bInvalid URL\b|certificate/i;
const he = new Set([
    429,
    500,
    502,
    503,
    504,
    520,
    521,
    522,
    523,
    524,
    529
]);
function ulo(e, n, o = false) {
    let r = Rst(n);
    if (r === undefined) {
        return e;
    }
    let { cause, remedy, stop } = V(r);
    let p = [
        ...H.test(e) ? [
            cause
        ] : [],
        ...o && !stop ? [] : [
            remedy
        ]
    ];
    if (p.length === 0) {
        return e;
    }
    return `${e} \u2014 ${p.join("; ")}`;
}
const EDn = 31457280;
function plo(e) {
    let n = e / 1048576;
    return `${Number.isInteger(n) ? n : n.toFixed(1)} MiB`;
}
const _e = new Set([
    502,
    503,
    504,
    520,
    524
]);
function Ogr(e, n) {
    if (Rst(n) !== undefined) {
        return false;
    }
    return _e.has(Number(H.exec(e)?.[1])) || Q.test(e) && !Z.test(e);
}
function flo(e) {
    return typeof e === "number" && Number.isSafeInteger(e) && e > 0;
}
function be(e) {
    return flo(e.upload_suspected_limit_bytes) && e.size > EDn && Ogr(e.upload_error, e.upload_error_code);
}
function kDn(e) {
    if (be(e)) {
        return `${e.upload_error} \u2014 the cause is unknown and may pass. If the same file fails like this again, it may be over the upload limit that applies to this session, which was not named and is never under ${plo(EDn)}`;
    }
    return ulo(e.upload_error, e.upload_error_code);
}
function we(upload_error, upload_error_code) {
    let o = Rst(upload_error_code);
    if (o !== undefined) {
        return V(o).passes === true;
    }
    return he.has(Number(H.exec(upload_error)?.[1])) || Q.test(upload_error) && !Z.test(upload_error);
}
function RCt(e) {
    let n = e.filter((s)=>we(s.upload_error, s.upload_error_code));
    if (n.length === 0) {
        return "";
    }
    let o = I(n.length, "failure");
    let r = `also tell the user they can ask you to send ${I(n.length, "it", "them")} again in a few minutes.`;
    if (n.length === e.length) {
        return ` The ${o} may be temporary, so ${r}`;
    }
    return ` For ${new Intl.ListFormat("en", {
        type: "conjunction"
    }).format(n.map((s)=>s.path))}, whose ${o} may be temporary, ${r}`;
}
const maxPixels = I4 * I4;
const Ee = 4;
const Ie = rl(Ee, (e)=>e.toBuffer());
const ee = 100;
const te = new WeakMap;
function ne() {
    return Promise.reject(Object.assign(Error("Image is too costly to decode"), {
        code: "ERR_IMAGE_DECODE_FAILED"
    }));
}
function z(e) {
    return {
        metadata: ()=>e.metadata(),
        resize: (n, o, r)=>z(e.resize(n, o, r)),
        rotate: (n)=>z(e.rotate(n)),
        jpeg: (n)=>z(e.jpeg(n)),
        png: (n)=>z(e.png(n)),
        webp: (n)=>z(e.webp(n)),
        toBuffer: ()=>Ie(e)
    };
}
function A() {
    return {
        metadata: ne,
        resize: A,
        rotate: A,
        jpeg: A,
        png: A,
        webp: A,
        toBuffer: ne
    };
}
function xe(e) {
    let n = Kps(e) ?? e;
    if (!Ce()) {
        return new Bun.Image(n);
    }
    let o = te.get(n);
    if (o === undefined) {
        o = Wps(n, ee) > ee ? null : zps(n);
        te.set(n, o);
    }
    if (o === null) {
        return A();
    }
    return z(new Bun.Image(o, {
        maxPixels
    }));
}
function wB() {
    return Promise.resolve(xe);
}
const Igr = "[Image: ";
const CCt = "[Image source: ";
const Se = 2;
const ie = 3;
const Pe = 4;
const Be = 5;
const Re = 8;
const Te = 9;
const q = 10;
const ze = "tengu_parsed_eagle";
const ae = new Set([
    "png",
    "jpeg",
    "gif",
    "webp"
]);
function se(e) {
    switch(e){
        case "jpeg":
        case "jpg":
            return "jpeg";
        case "webp":
            return "webp";
        default:
            return "png";
    }
}
class FL extends Error {
    constructor(e){
        super(e);
        this.name = "ImageResizeError";
    }
}
function ue(e) {
    if (ylo(e) === 4) {
        return {
            reason: "it is a CMYK JPEG, which Claude Code cannot decode",
            advice: "Re-save it as an RGB PNG or JPEG and try again."
        };
    }
    if (xCt(e)) {
        return {
            reason: "it is an animated WebP whose first frame Claude Code cannot decode",
            advice: "Save its first frame as a PNG or JPEG and try again."
        };
    }
    return {
        reason: "its pixels could not be decoded (the file may be damaged, or use an encoding Claude Code cannot read)",
        advice: "Re-save it as a PNG or JPEG and try again."
    };
}
function DLe(e) {
    switch(v(e)){
        case "ERR_IMAGE_DECODE_FAILED":
            return q;
        case "ERR_IMAGE_UNKNOWN_FORMAT":
            return Se;
        case "ERR_IMAGE_TOO_MANY_PIXELS":
            return Pe;
        case "ERR_IMAGE_FORMAT_UNSUPPORTED":
            return Te;
        case "EACCES":
        case "EPERM":
            return Re;
        case "ENOMEM":
            return Be;
        default:
            return ie;
    }
}
function LLe(e) {
    return e === ie;
}
function le(error) {
    if (!(error instanceof Error)) {
        return {
            error_name: d(typeof error),
            error_code: b("")
        };
    }
    return {
        error_name: FH(error.name !== "Error" ? error.name : error.constructor?.name) ?? b("Error"),
        error_code: Vr(error) ?? b("")
    };
}
function fe(e) {
    let n = qg(e);
    return {
        ...n === "image/jpeg" && {
            jpeg_components: ylo(e)
        },
        ...n === "image/webp" && {
            webp_animated: xCt(e)
        }
    };
}
function de(e) {
    let n = 5381;
    for(let o = 0; o < e.length; o++){
        n = (n << 5) + n + e.charCodeAt(o) | 0;
    }
    return n >>> 0;
}
function N(e) {
    return {
        rejectMaxWidth: e.rejectMaxWidth ?? e.maxWidth,
        rejectMaxHeight: e.rejectMaxHeight ?? e.maxHeight
    };
}
async function QKe(e, n, o, r, { timings, directWebpMaxBytes } = {}) {
    if (e.length === 0) {
        throw new FL("Image file is empty (0 bytes)");
    }
    try {
        let a = await wB();
        let p = await a(e).metadata();
        let _ = p.format ?? o;
        let E = _ === "jpg" ? "jpeg" : _;
        let m = e;
        let P = n;
        if (!ae.has(E)) {
            let B = (p.width ?? Infinity) <= r.maxWidth && (p.height ?? Infinity) <= r.maxHeight ? (await oe(()=>a(e), directWebpMaxBytes)).webp : undefined;
            m = B ?? await a(e).png().toBuffer();
            P = m.length;
            p = await a(m).metadata();
            E = B ? "webp" : "png";
        }
        if (!p.width || !p.height) {
            let B = O4(m);
            let { rejectMaxWidth, rejectMaxHeight } = N(r);
            if (B === undefined || B.width > rejectMaxWidth || B.height > rejectMaxHeight) {
                throw new FL(`Unable to resize image \u2014 could not verify image dimensions are within the ${rejectMaxWidth}x${rejectMaxHeight}px API limit.`);
            }
            if (P > r.targetRawSize) {
                i("tengu_image_resize", {
                    over_byte_limit: true,
                    over_dimension_limit: false,
                    original_size_bytes: P
                });
                return {
                    buffer: await a(m).jpeg({
                        quality: 80
                    }).toBuffer(),
                    mediaType: "jpeg"
                };
            }
            return {
                buffer: m,
                mediaType: E
            };
        }
        let h = p.width;
        let S = p.height;
        let w = h;
        let y = S;
        if (P <= r.targetRawSize && w <= r.maxWidth && y <= r.maxHeight) {
            return {
                buffer: m,
                mediaType: E,
                dimensions: {
                    originalWidth: h,
                    originalHeight: S,
                    displayWidth: w,
                    displayHeight: y
                }
            };
        }
        let over_dimension_limit = w > r.maxWidth || y > r.maxHeight;
        let D = E === "png";
        i("tengu_image_resize", {
            over_byte_limit: P > r.targetRawSize,
            over_dimension_limit,
            original_size_bytes: P,
            original_width: h,
            original_height: S
        });
        if (!over_dimension_limit && P > r.targetRawSize) {
            if (D) {
                let B = await re(()=>a(m).png({
                        compressionLevel: 9,
                        palette: true
                    }).toBuffer(), timings);
                if (B.length <= r.targetRawSize) {
                    return {
                        buffer: B,
                        mediaType: "png",
                        dimensions: {
                            originalWidth: h,
                            originalHeight: S,
                            displayWidth: w,
                            displayHeight: y
                        }
                    };
                }
            }
            for (let B of [
                80,
                60,
                40,
                20
            ]){
                let T = await a(m).jpeg({
                    quality: B
                }).toBuffer();
                if (T.length <= r.targetRawSize) {
                    return {
                        buffer: T,
                        mediaType: "jpeg",
                        dimensions: {
                            originalWidth: h,
                            originalHeight: S,
                            displayWidth: w,
                            displayHeight: y
                        }
                    };
                }
            }
        }
        if (w > r.maxWidth) {
            y = Math.round(y * r.maxWidth / w);
            w = r.maxWidth;
        }
        if (y > r.maxHeight) {
            w = Math.round(w * r.maxHeight / y);
            y = r.maxHeight;
        }
        t(`Resizing to ${w}x${y}`);
        let M = over_dimension_limit && directWebpMaxBytes !== undefined && h <= N(r).rejectMaxWidth && S <= N(r).rejectMaxHeight && _lo(m) ? "png" : se(E);
        let U = a(m).resize(w, y, {
            fit: "inside",
            withoutEnlargement: true
        });
        if (M !== E) {
            U = U.png();
        }
        let G = M === "png" ? await oe(()=>a(m).resize(w, y, {
                fit: "inside",
                withoutEnlargement: true
            }), directWebpMaxBytes) : {};
        let X = G.webp ?? await U.toBuffer();
        if (X.length > r.targetRawSize) {
            if (D) {
                let j = await re(()=>a(m).resize(w, y, {
                        fit: "inside",
                        withoutEnlargement: true
                    }).png({
                        compressionLevel: 9,
                        palette: true
                    }).toBuffer(), timings);
                if (j.length <= r.targetRawSize) {
                    return {
                        buffer: j,
                        mediaType: "png",
                        dimensions: {
                            originalWidth: h,
                            originalHeight: S,
                            displayWidth: w,
                            displayHeight: y
                        }
                    };
                }
            }
            for (let j of [
                80,
                60,
                40,
                20
            ]){
                let K = await a(m).resize(w, y, {
                    fit: "inside",
                    withoutEnlargement: true
                }).jpeg({
                    quality: j
                }).toBuffer();
                if (K.length <= r.targetRawSize) {
                    return {
                        buffer: K,
                        mediaType: "jpeg",
                        dimensions: {
                            originalWidth: h,
                            originalHeight: S,
                            displayWidth: w,
                            displayHeight: y
                        }
                    };
                }
            }
            let B = Math.min(w, 1000);
            let T = Math.round(y * B / Math.max(w, 1));
            t("Still too large, compressing with JPEG");
            let C = await a(m).resize(B, T, {
                fit: "inside",
                withoutEnlargement: true
            }).jpeg({
                quality: 20
            }).toBuffer();
            t(`JPEG compressed buffer size: ${C.length}`);
            return {
                buffer: C,
                mediaType: "jpeg",
                dimensions: {
                    originalWidth: h,
                    originalHeight: S,
                    displayWidth: B,
                    displayHeight: T
                }
            };
        }
        return {
            buffer: X,
            mediaType: G.webp ? "webp" : M,
            dimensions: {
                originalWidth: h,
                originalHeight: S,
                displayWidth: w,
                displayHeight: y
            },
            losslessWebp: G.lossless
        };
    } catch (error) {
        if (error instanceof FL) {
            throw error;
        }
        let p = DLe(error);
        let _ = l(error);
        if (LLe(p)) {
            c(error);
        } else {
            t(`Image resize failed: ${_}`, {
                level: "error"
            });
        }
        i("tengu_image_resize_failed", {
            original_size_bytes: n,
            error_type: p,
            error_message_hash: de(_),
            ...le(error),
            ...fe(e)
        });
        let m = kQ(e).slice(6);
        let base64_size_bytes = Math.ceil(n * 4 / 3);
        let h = O4(e);
        if (h === undefined) {
            throw new FL("Unable to resize image — image processing is unavailable and dimensions could not be read from the file header. " + "Please convert the image to PNG, JPEG, GIF, or WebP.");
        }
        let { rejectMaxWidth, rejectMaxHeight } = N(r);
        let y = h.width > rejectMaxWidth || h.height > rejectMaxHeight;
        if (base64_size_bytes <= r.maxBase64Size && !y) {
            i("tengu_image_resize_fallback", {
                original_size_bytes: n,
                base64_size_bytes,
                error_type: p
            });
            return {
                buffer: e,
                mediaType: m
            };
        }
        if (p === q) {
            let { reason, advice } = ue(e);
            let M = y ? `at ${h.width}x${h.height}px it is over the ${rejectMaxWidth}x${rejectMaxHeight}px limit` : `it is over the ${Qt(r.maxBase64Size)} API limit (${Qt(n)} raw, ${Qt(base64_size_bytes)} base64)`;
            throw new FL(`Unable to resize image \u2014 ${reason}, and ${M}, so it cannot be sent. ${advice}`);
        }
        throw new FL(y ? `Unable to resize image \u2014 dimensions exceed the ${rejectMaxWidth}x${rejectMaxHeight}px limit and image processing failed. Please resize the image to reduce its pixel dimensions.` : `Unable to resize image (${Qt(n)} raw, ${Qt(base64_size_bytes)} base64). The image exceeds the ${Qt(r.maxBase64Size)} API limit and compression failed. Please resize the image manually or use a smaller image.`);
    }
}
async function re(e, timings) {
    let o = performance.now();
    try {
        return await e();
    } finally{
        if (timings !== undefined) {
            timings.pngPaletteMs += performance.now() - o;
        }
    }
}
async function mlo(e, n, o) {
    let r = await wB();
    let u = (m)=>r(e).jpeg({
            quality: m
        }).toBuffer();
    let s = e;
    let a = 90;
    if (!/jpe?g/i.test(o)) {
        let m = await u(90);
        if (m.length < s.length) {
            s = m;
        }
        if (m.length <= n) {
            return m;
        }
        a = 89;
    }
    let _ = 1;
    let E;
    for(let m = 0; m < 5; m++){
        let P = Math.floor((_ + a) / 2);
        let h = await u(P);
        if (h.length < s.length) {
            s = h;
        }
        if (h.length <= n) {
            E = h;
            _ = P + 1;
        } else {
            a = P - 1;
        }
        if (_ > a) {
            break;
        }
    }
    return E ?? s;
}
async function iS({ data, mediaType, limits, timings, allowWebp = true }) {
    let s = Buffer.isBuffer(data) ? data : Buffer.from(data, "base64");
    let a = allowWebp && limits.allowWebp !== false;
    let p = mediaType?.includes("/") ? mediaType.split("/")[1] || "png" : mediaType || "png";
    let _;
    let E = performance.now();
    try {
        _ = await QKe(s, s.length, p, limits, {
            timings,
            directWebpMaxBytes: a ? u9t(mZ) : undefined
        });
    } catch (error) {
        if (error instanceof FL) {
            return O(error.message, "resize_error");
        }
        throw error;
    } finally{
        if (timings !== undefined) {
            timings.resizeMs = performance.now() - E;
        }
    }
    let __buffer = _.buffer;
    if (__buffer.length > mZ) {
        let h = performance.now();
        try {
            __buffer = await mlo(_.buffer, mZ, _.mediaType);
        } catch (error) {
            t(`Image byte-budget compression failed, passing through unbudgeted: ${l(error)}`, {
                level: "error"
            });
        }
        if (timings !== undefined) {
            timings.byteBudgetMs = performance.now() - h;
        }
    }
    __buffer = await glo(s, _.buffer, __buffer, mZ, a, _.losslessWebp);
    return {
        block: {
            type: "image",
            source: {
                type: "base64",
                media_type: kQ(__buffer),
                data: __buffer.toString("base64")
            }
        },
        dimensions: _.dimensions
    };
}
function Y() {
    if (Ce()) {
        return "off";
    }
    let e = Ta() ? k(ze, "off") : "off";
    if (e === "lossless" || e === "all") {
        return e;
    }
    return "off";
}
function u9t(e) {
    if (Y() === "off") {
        return undefined;
    }
    return e;
}
async function F(e) {
    try {
        return await e();
    } catch (error) {
        if (LLe(DLe(error))) {
            c(error);
        } else {
            t(`WebP step: an encode failed: ${l(error)}`, {
                level: "error"
            });
        }
        return;
    }
}
function J(e, n) {
    return F(async ()=>{
        let o = await (await e()).webp(n).toBuffer();
        if (n.lossless && !_lo(o)) {
            throw Error("a lossless WebP encode wrote a file that is not lossless");
        }
        return o;
    });
}
async function ce(e) {
    let n = await J(e, {
        lossless: true
    });
    if (n === undefined || !qps(n)) {
        return n;
    }
    let o = await e();
    let r = o === await e() ? undefined : {
        compressionLevel: 0
    };
    let u = await wB();
    let [s, a] = await Promise.all([
        F(()=>o.png(r).toBuffer()),
        F(()=>u(n).png(r).toBuffer())
    ]);
    if (s === undefined || a === undefined) {
        return;
    }
    if (a.equals(s)) {
        return n;
    }
    return "not_exact";
}
async function Ae(e, n, directWebpMaxBytes, r) {
    if (n.length <= directWebpMaxBytes / 2) {
        return {
            result: "lossless",
            webp: n
        };
    }
    if (r !== "all") {
        return {
            result: "too_large"
        };
    }
    let u = await J(e, {
        lossless: false,
        quality: 90
    });
    if (u === undefined) {
        return {
            result: "failed"
        };
    }
    if (u.length > directWebpMaxBytes) {
        return {
            result: "too_large"
        };
    }
    let s = await F(()=>e().jpeg({
            quality: 90
        }).toBuffer());
    if (s === undefined) {
        return {
            result: "failed"
        };
    }
    if (s.length > directWebpMaxBytes) {
        return {
            result: "no_yardstick"
        };
    }
    if (u.length >= s.length) {
        return {
            result: "not_smaller"
        };
    }
    if (n.length <= u.length) {
        return {
            result: "lossless",
            webp: n
        };
    }
    return {
        result: "lossy",
        webp: u
    };
}
async function oe(e, directWebpMaxBytes) {
    let o = Y();
    if (directWebpMaxBytes === undefined || o === "off") {
        return {};
    }
    let r = performance.now();
    let u = await ce(e);
    let { result, webp } = u === undefined ? {
        result: "failed",
        webp: undefined
    } : u === "not_exact" ? {
        result: u,
        webp: undefined
    } : await Ae(e, u, directWebpMaxBytes, o);
    i("tengu_image_webp_direct", {
        mode: d(o),
        result: d(result),
        ...webp !== undefined && {
            sent_size_bytes: webp.length
        },
        encode_ms: Math.round(performance.now() - r)
    });
    if (webp === undefined) {
        return {
            lossless: u
        };
    }
    g("input_image_webp");
    return {
        webp
    };
}
async function glo(e, n, o, r, u, s) {
    let a = Y();
    let p = kQ(n);
    let _ = p === "image/webp" && kQ(e) !== "image/webp";
    let E = n.length > r;
    let m = u && p === "image/png" && (E ? a === "all" : a !== "off") && !Vps(n);
    let P = performance.now();
    let h = async ()=>(await wB())(n);
    let S = !m ? undefined : E ? await J(h, {
        lossless: false,
        quality: 90
    }) : s ?? await ce(h);
    let w = S === "not_exact" ? undefined : S;
    let y = w !== undefined && w.length < o.length ? w : o;
    let R = S === "not_exact" ? S : w === undefined ? "failed" : "not_smaller";
    if (y === w) {
        g("input_image_webp");
    } else if (m) {
        f("input_image_webp", R === "failed" ? "encode_failed" : R);
    }
    i("tengu_image_output", {
        mode: d(a),
        webp_try: d(_ ? "direct" : !m ? "none" : E ? "lossy" : "lossless"),
        ...!_ && {
            resized_format: d(p),
            resized_size_bytes: n.length,
            without_webp_size_bytes: o.length
        },
        sent_format: d(kQ(y)),
        sent_size_bytes: y.length,
        ...m && {
            webp_result: d(y === w ? "sent" : R),
            webp_encode_ms: Math.round(performance.now() - P)
        }
    });
    return y;
}
async function Nps(e, n, { timings } = {}) {
    let r = qg(e);
    if (r === null) {
        return null;
    }
    try {
        let { block } = await iS({
            data: e,
            mediaType: r,
            limits: n,
            timings
        });
        if (block.type === "image") {
            return block;
        }
        return null;
    } catch  {
        return null;
    }
}
async function $ps(block, n) {
    if (!L(block.source)) {
        if (block.source == null) {
            return O("image block has no source object", "no_source");
        }
        return O("image block source must be an object", "malformed_source");
    }
    if (block.source.type !== "base64") {
        return {
            block
        };
    }
    let media_type = block.source.media_type;
    if (media_type != null && typeof media_type !== "string") {
        return O("base64 image media_type must be a string", "malformed_source");
    }
    let r = typeof media_type === "string" ? media_type : undefined;
    let data = block.source.data;
    let s;
    try {
        s = Buffer.isBuffer(data) ? data : Buffer.from(data, "base64");
    } catch (error) {
        return O(l(error), "malformed_source");
    }
    return iS({
        data: s,
        mediaType: r,
        limits: n
    });
}
function O(e, n) {
    i("tengu_image_resize_degraded", {
        reason: d(n)
    });
    return {
        block: {
            type: "text",
            text: `[Image could not be processed: ${e}]`
        }
    };
}
async function Mgr(e, n, o) {
    let r = o?.split("/")[1] || "jpeg";
    let u = r === "jpg" ? "jpeg" : r;
    try {
        let s = await wB();
        let metadata = await s(e).metadata();
        let format = metadata.format || u;
        let originalSize = e.length;
        let imageBuffer = e;
        if (!ae.has(format === "jpg" ? "jpeg" : format)) {
            imageBuffer = await s(e).png().toBuffer();
            metadata = await s(imageBuffer).metadata();
            format = "png";
        }
        let m = {
            imageBuffer,
            metadata,
            format,
            maxBytes: n,
            originalSize
        };
        if (imageBuffer.length <= n) {
            return W(imageBuffer, format, originalSize);
        }
        let P = await Me(m, s);
        if (P) {
            return P;
        }
        if (format === "png") {
            let S = await ve(m, s);
            if (S) {
                return S;
            }
        }
        let h = await Oe(m, 50, s);
        if (h) {
            return h;
        }
        return await $e(m, s);
    } catch (error) {
        let a = DLe(error);
        let p = l(error);
        if (LLe(a)) {
            c(error);
        } else {
            t(`Image compression failed: ${p}`, {
                level: "error"
            });
        }
        i("tengu_image_compress_failed", {
            original_size_bytes: e.length,
            max_bytes: n,
            error_type: a,
            error_message_hash: de(p),
            ...le(error),
            ...fe(e)
        });
        if (e.length <= n) {
            let _ = kQ(e);
            return {
                base64: e.toString("base64"),
                mediaType: _,
                originalSize: e.length
            };
        }
        if (a === q) {
            let { reason, advice } = ue(e);
            throw new FL(`Unable to compress image (${Qt(e.length)}) to fit within ${Qt(n)} \u2014 ${reason}. ${advice}`);
        }
        throw new FL(`Unable to compress image (${Qt(e.length)}) to fit within ${Qt(n)}. Please use a smaller image.`);
    }
}
async function Fps(e, n, o) {
    let r = Math.floor(n / 0.125);
    let u = Math.floor(r * 0.75);
    return Mgr(e, u, o);
}
async function Ups(e, n) {
    if (e.source.type !== "base64") {
        return e;
    }
    let o = Buffer.from(e.source.data, "base64");
    if (o.length <= n) {
        return e;
    }
    let r = await Mgr(o, n);
    return {
        type: "image",
        source: {
            type: "base64",
            media_type: r.mediaType,
            data: r.base64
        }
    };
}
function W(e, n, originalSize) {
    let r = n === "jpg" ? "jpeg" : n;
    return {
        base64: e.toString("base64"),
        mediaType: `image/${r}`,
        originalSize
    };
}
async function Me(e, n) {
    let o = [
        1,
        0.75,
        0.5,
        0.25
    ];
    for (let r of o){
        let u = Math.round((e.metadata.width || 2000) * r);
        let s = Math.round((e.metadata.height || 2000) * r);
        let a = n(e.imageBuffer).resize(u, s, {
            fit: "inside",
            withoutEnlargement: true
        });
        let p = se(e.format);
        a = je(a, p);
        let _ = await a.toBuffer();
        if (_.length <= e.maxBytes) {
            return W(_, p, e.originalSize);
        }
    }
    return null;
}
function je(e, n) {
    switch(n){
        case "png":
            return e.png({
                compressionLevel: 9,
                palette: true
            });
        case "jpeg":
            return e.jpeg({
                quality: 80
            });
        case "webp":
            return e.webp({
                quality: 80
            });
    }
}
async function ve(e, n) {
    let o = await n(e.imageBuffer).resize(800, 800, {
        fit: "inside",
        withoutEnlargement: true
    }).png({
        compressionLevel: 9,
        palette: true,
        colors: 64
    }).toBuffer();
    if (o.length <= e.maxBytes) {
        return W(o, "png", e.originalSize);
    }
    return null;
}
async function Oe(e, n, o) {
    let r = await o(e.imageBuffer).resize(600, 600, {
        fit: "inside",
        withoutEnlargement: true
    }).jpeg({
        quality: n
    }).toBuffer();
    if (r.length <= e.maxBytes) {
        return W(r, "jpeg", e.originalSize);
    }
    return null;
}
async function $e(e, n) {
    let o = await n(e.imageBuffer).resize(400, 400, {
        fit: "inside",
        withoutEnlargement: true
    }).jpeg({
        quality: 20
    }).toBuffer();
    return W(o, "jpeg", e.originalSize);
}
function EQ({ originalWidth, originalHeight, displayWidth, displayHeight }, n) {
    if (!originalWidth || !originalHeight || !displayWidth || !displayHeight || displayWidth <= 0 || displayHeight <= 0) {
        if (n) {
            return `${CCt}${n}]`;
        }
        return null;
    }
    let a = originalWidth !== displayWidth || originalHeight !== displayHeight;
    if (!a && !n) {
        return null;
    }
    let p = [];
    if (n) {
        p.push(`source: ${n}`);
    }
    if (a) {
        let _ = originalWidth / displayWidth;
        p.push(`original ${originalWidth}x${originalHeight}, displayed at ${displayWidth}x${displayHeight}. Multiply coordinates by ${_.toFixed(2)} to map to original image.`);
    }
    return `${Igr}${p.join(", ")}]`;
}
const We = /[\u2018-\u201F]/;
function TDn(e, n = "value") {
    let o = We.exec(e);
    if (o) {
        let r = (o[0].codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, "0");
        throw new x(`Cannot safely quote ${n} in a PowerShell single-quoted string literal: it contains U+${r}, which PowerShell's tokenizer treats as a quote delimiter`, "psSingleQuotedLiteral: rejected a PowerShell quote-variant codepoint (U+2018..U+201F)");
    }
    return `'${e.replaceAll("'", "''")}'`;
}
export { Igr, CCt, HLe, I4, Rst, ulo, EDn, plo, Ogr, flo, kDn, RCt, wB, FL, DLe, LLe, QKe, mlo, iS, u9t, glo, Nps, $ps, Mgr, Fps, Ups, EQ, TDn };
