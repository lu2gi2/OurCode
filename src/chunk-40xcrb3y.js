import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W, T_ } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Trn, gZ, GSe, kS, gq, S0, wse } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { N_, q0e } from "/$bunfs/root/chunk-ba34fvgp.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { pH, ejn, t3e, fSe, ven, Een, ken, Ten, He } from "/$bunfs/root/chunk-k3tkc302.js";
import { D$e } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { dirname, basename, join } from "path";
import { STATUS_CODES } from "http";
const voo = 150000;
const rfr = 30000;
function aKe() {
    return T(ft().bashOutputMaxChars) ?? rfr;
}
function lQ() {
    let e = T(ft().bashOutputMaxChars);
    if (e !== undefined) {
        return e;
    }
    return D$e("BASH_MAX_OUTPUT_LENGTH", process.env.BASH_MAX_OUTPUT_LENGTH, rfr, voo).effective;
}
function T(bashOutputMaxChars) {
    if (bashOutputMaxChars === undefined) {
        return;
    }
    return Math.min(Math.max(bashOutputMaxChars, ejn), t3e);
}
function wce() {
    if (N_() !== undefined) {
        return {
            dirs: [],
            paths: []
        };
    }
    return {
        dirs: [
            kS()
        ],
        paths: []
    };
}
function h5t(e, r) {
    if (!e) {
        return;
    }
    let n = dirname(r);
    if (!e.dirs.includes(n)) {
        e.dirs.push(n);
    }
    if (!e.paths.includes(r)) {
        e.paths.push(r);
    }
}
function Wls(e, r) {
    if (!e) {
        return;
    }
    e.paths = e.paths.filter((n)=>n !== r);
}
function sfr(e, r, n, o) {
    let webFetchSavedFiles = C(e.webFetchSavedFiles, r);
    let a = webFetchSavedFiles === e.webFetchSavedFiles ? e : {
        ...e,
        webFetchSavedFiles
    };
    if (n) {
        return a;
    }
    return o(a);
}
function C(webFetchSavedFiles, r) {
    if (!r) {
        return webFetchSavedFiles;
    }
    if (webFetchSavedFiles && r.dirs.every((n)=>webFetchSavedFiles.dirs.includes(n)) && r.paths.every((n)=>webFetchSavedFiles.paths.includes(n))) {
        return webFetchSavedFiles;
    }
    return {
        dirs: D([
            ...webFetchSavedFiles?.dirs ?? [],
            ...r.dirs
        ]),
        paths: D([
            ...webFetchSavedFiles?.paths ?? [],
            ...r.paths
        ])
    };
}
const S = Buffer.from("%PDF-");
function ofr(e) {
    return e.subarray(0, S.length).equals(S);
}
function BOn(e) {
    if (!e) {
        return "bin";
    }
    switch(Qe(e, ";").trim().toLowerCase()){
        case "application/pdf":
            return "pdf";
        case "application/json":
            return "json";
        case "text/csv":
            return "csv";
        case "text/plain":
            return "txt";
        case "text/html":
            return "html";
        case "text/markdown":
            return "md";
        case "application/zip":
            return "zip";
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            return "docx";
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            return "xlsx";
        case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
            return "pptx";
        case "application/msword":
            return "doc";
        case "application/vnd.ms-excel":
            return "xls";
        case "audio/mpeg":
            return "mp3";
        case "audio/wav":
            return "wav";
        case "audio/ogg":
            return "ogg";
        case "video/mp4":
            return "mp4";
        case "video/webm":
            return "webm";
        case "image/png":
            return "png";
        case "image/jpeg":
            return "jpg";
        case "image/gif":
            return "gif";
        case "image/webp":
            return "webp";
        case "image/svg+xml":
            return "svg";
        case "image/x-icon":
        case "image/vnd.microsoft.icon":
            return "ico";
        case "text/css":
            return "css";
        case "text/javascript":
        case "application/javascript":
            return "js";
        case "application/xml":
        case "text/xml":
            return "xml";
        case "application/manifest+json":
            return "webmanifest";
        case "font/woff2":
        case "application/font-woff2":
            return "woff2";
        case "font/woff":
        case "application/font-woff":
            return "woff";
        case "font/ttf":
            return "ttf";
        case "font/otf":
            return "otf";
        case "application/wasm":
            return "wasm";
        default:
            return "bin";
    }
}
const lKe = Trn;
async function vk(e, r, n, o, s) {
    if (e.length > lKe) {
        return {
            error: `content is ${e.length} bytes, over the ${lKe} byte persist limit`
        };
    }
    let a = N_();
    if (a !== undefined) {
        let l = BOn(r);
        let f = e.length > a.maxBytes ? null : await q0e(a, {
            leafName: `${n}.${l}`,
            data: e
        });
        if (f === null) {
            return {
                error: "binary content was not saved"
            };
        }
        h5t(o, f.path);
        i("tengu_binary_content_persisted", {
            sizeBytes: e.length,
            ext: d(l)
        });
        return {
            filepath: f.path,
            size: e.length,
            ext: l
        };
    }
    let u = kS();
    if (j() && s !== undefined) {
        let l = await k(s, u, e, r, n, o);
        if (l !== undefined) {
            return l;
        }
    }
    await S0(u, s);
    let c = BOn(r);
    let p = join(u, `${n}.${c}`);
    try {
        await wse(p, e);
    } catch (error) {
        let f = W(error);
        t(`Failed to persist binary content to ${p}: ${f.message}`, {
            level: "error"
        });
        return {
            error: f.message
        };
    }
    h5t(o, p);
    i("tengu_binary_content_persisted", {
        sizeBytes: e.length,
        ext: d(c)
    });
    return {
        filepath: p,
        size: e.length,
        ext: c
    };
}
function cKe(e, r) {
    let n = (o)=>o.replace(/[^\w-]/g, "");
    return `artifact-${n(e).slice(0, 8)}-${n(r)}`;
}
function zls(e) {
    return basename(e).toLowerCase().startsWith("artifact-") && basename(dirname(e)).toLowerCase() === GSe;
}
async function k(e, r, n, o, s, a) {
    let u = BOn(o);
    let c = `${s}.${u}`;
    let p = gq(r, c);
    if (p === undefined) {
        return;
    }
    let l = join(r, c);
    let f = await e.write(p, n, {
        mode: 438 & ~process.umask()
    });
    if (!f.ok) {
        let x = gt(f.error);
        t(`Failed to persist binary content to ${l}: ${x}`, {
            level: "error"
        });
        return {
            error: `storage write failed (${x})`
        };
    }
    h5t(a, l);
    i("tengu_binary_content_persisted", {
        sizeBytes: n.length,
        ext: d(u)
    });
    return {
        filepath: l,
        size: n.length,
        ext: u
    };
}
function Jne(e, r, n, o) {
    return `${o}Binary content (${r || "unknown type"}, ${Qt(n)}) saved to ${e}`;
}
function jOn(e, r, n) {
    let o = N_();
    if (Qe(r ?? "", ";").trim().toLowerCase() !== "application/pdf" || !ofr(e)) {
        return;
    }
    if (e.length > (o?.inlinePdfBytes?.(n) ?? 0)) {
        if (o?.servesTheModelsFiles?.(n) === true) {
            return {
                type: "text",
                text: N(e.length)
            };
        }
        return undefined;
    }
    return {
        type: "document",
        source: {
            type: "base64",
            media_type: "application/pdf",
            data: e.toString("base64")
        }
    };
}
function N(e) {
    return `[This PDF (${Qt(e)}) cannot be shown whole in this session. Read it again with the pages parameter, for example pages: "1-5", at most ${gZ} pages per call.]`;
}
const text = "[Another PDF in this result was left out: only the first is shown.]";
function WOn(e) {
    if (!Array.isArray(e) || F(e, (n)=>n.type === "document") < 2) {
        return e;
    }
    let r = false;
    return e.map((n)=>{
        if (n.type !== "document" || !r) {
            r ||= n.type === "document";
            return n;
        }
        return {
            type: "text",
            text
        };
    });
}
function Qne(e, r) {
    let n = Qe(e ?? "", ";").trim();
    return `[Binary content (${n.length <= 100 && /^[\w.+-]+\/[\w.+-]+$/.test(n) ? n : "application/octet-stream"}, ${Qt(r)}) was not kept: it could not be saved.]`;
}
const zOn = "[The portion truncated above was not kept: it could not be saved.]";
const U = 64;
function Gls(e) {
    let { staged, chainPublishIds, chainPublishSlots } = ee().autoEditAttribution;
    let s = {
        ...e,
        consumed: false
    };
    staged.set(e.slug, s);
    chainPublishSlots.set(e.expectedToolUseId, s);
    chainPublishIds.add(e.expectedToolUseId);
    if (chainPublishIds.size > U) {
        let a = chainPublishIds.values().next().value;
        if (a !== undefined) {
            chainPublishIds.delete(a);
        }
    }
    return s;
}
function y5t(e) {
    return e !== undefined && ee().autoEditAttribution.chainPublishIds.has(e);
}
function A(e) {
    if (e === undefined) {
        return;
    }
    return ee().autoEditAttribution.chainPublishSlots.get(e);
}
function Vls(e) {
    return A(e) !== undefined;
}
function qls(e) {
    let r = A(e);
    let n = {
        storedProbe: r?.storedProbe,
        roundTrip: r?.roundTrip
    };
    if (r !== undefined) {
        r.storedProbe = undefined;
        r.roundTrip = undefined;
    }
    return n;
}
function Eoo(e, r) {
    let n = ee().autoEditAttribution.staged.get(e);
    if (n === undefined || n.consumed || r === undefined || n.expectedToolUseId !== r) {
        return null;
    }
    return n.baseVersion;
}
function Kls(e, r, n) {
    let o = ee().autoEditAttribution.staged.get(e);
    if (o === undefined || o.consumed || r === undefined || o.expectedToolUseId !== r || o.slug !== e) {
        return null;
    }
    let s = Object.keys(n);
    let a = Object.keys(o.input);
    if (s.length !== a.length || !a.every((u)=>n[u] === o.input[u])) {
        return null;
    }
    return {
        contentSha256: o.contentSha256
    };
}
function Yls(e, r) {
    let n = ee().autoEditAttribution.staged.get(e);
    if (n === undefined || n.consumed || r === undefined || n.expectedToolUseId !== r) {
        return null;
    }
    n.consumed = true;
    return {
        threadId: n.threadId,
        commentId: n.commentId,
        recordVersionEcho: (o)=>{
            n.versionEcho = o;
        }
    };
}
function Xls(e) {
    let { staged, chainPublishSlots } = ee().autoEditAttribution;
    if (staged.get(e.slug) === e) {
        staged.delete(e.slug);
    }
    if (chainPublishSlots.get(e.expectedToolUseId) === e) {
        chainPublishSlots.delete(e.expectedToolUseId);
    }
}
function Jls(e) {
    let r = {
        ...e,
        consumed: false
    };
    ee().pipelineReplyOrigins.set(e.expectedToolUseId, r);
    return r;
}
function Qls(e, r, n) {
    let o = n === undefined ? undefined : ee().pipelineReplyOrigins.get(n);
    if (o === undefined || o.consumed || o.slug !== e || o.threadId !== r) {
        return false;
    }
    o.consumed = true;
    return true;
}
function P(toolUseId) {
    return toolUseId !== undefined && ee().pipelineReplyOrigins.has(toolUseId);
}
function Zls(e) {
    let pipelineReplyOrigins = ee().pipelineReplyOrigins;
    if (pipelineReplyOrigins.get(e.expectedToolUseId) === e) {
        pipelineReplyOrigins.delete(e.expectedToolUseId);
    }
}
const m = 3;
const L = 1024;
const H = new Set(Object.values(fSe));
const z = new Set([
    `ec_${ven}`,
    Een,
    `ec_${ken}`,
    "policy_fetch_failed",
    "policy_route_missing",
    ...Object.values(Ten)
]);
function g(e) {
    if (typeof e === "string") {
        return e.slice(0, L);
    }
    return "";
}
function V(e) {
    if (typeof e !== "object" || e === null) {
        return "publish\x00\x00\x00";
    }
    let r = "action" in e ? g(e.action) : "";
    let n = "file_path" in e ? g(e.file_path) : "";
    let o = "url" in e ? g(e.url) : "";
    let s = "thread_id" in e ? g(e.thread_id) : "";
    return `${r || "publish"}\x00${n}\x00${o}\x00${s}`;
}
function y(e, reason, fingerprint) {
    let rejectBreaker = ee().rejectBreaker;
    let s = V(e);
    let a = rejectBreaker.get(s);
    let count = a !== undefined && a.reason === reason && a.fingerprint === fingerprint ? a.count + 1 : 1;
    rejectBreaker.set(s, {
        count,
        reason,
        fingerprint
    });
    if (count === m) {
        i("tengu_artifact_reject_breaker", {
            reason: T_(reason)
        });
    }
    return count >= m;
}
const w = `IMPORTANT: Artifact calls for this target have now been rejected ${m} or more times in this session for the same reason.`;
const h = `${w} Do not send the same call again: either make the specific change the error describes, or stop calling Artifact for this target and tell the user what is failing and why.`;
const R = `${w} Stop calling Artifact for this target and tell the user the artifact could not be published and why \u2014 do not try to work around this refusal.`;
const GOn = Math.max(h.length, R.length) + 2;
function I(e) {
    if (H.has(e)) {
        return R;
    }
    return h;
}
function bot(e) {
    for (let r of [
        h,
        R
    ]){
        if (e.startsWith(`${r}

`)) {
            return e.slice(r.length + 2);
        }
    }
    return e;
}
const X = "live_edit_conflict";
function ifr(e, r, n) {
    let o = bot(r);
    let s = n === X ? ln(o + G(e, o)) : ln(o);
    if (y(e, n, s) && !z.has(n)) {
        return `${I(n)}

${o}`;
    }
    return o;
}
function G(e, r) {
    if (typeof e !== "object" || e === null || !("action" in e) || e.action !== "live-edit" || !("ops" in e) || !Array.isArray(e.ops)) {
        return "";
    }
    let n = /\bops\[(\d+)\]/.exec(r);
    let o = n === null ? e.ops : [
        e.ops[Number.parseInt(n[1], 10)]
    ];
    let s = new Set;
    for (let a of o){
        if (typeof a !== "object" || a === null) {
            continue;
        }
        for (let u of [
            "target",
            "before",
            "after",
            "parent"
        ]){
            if (u in a) {
                let c = g(a[u]);
                if (c !== "") {
                    s.add(c);
                }
            }
        }
    }
    if (s.size === 0) {
        return "";
    }
    return `\x00${[
        ...s
    ].sort().join("\x00")}`;
}
const E = "schema";
function K(e) {
    if (e === undefined) {
        return "";
    }
    return e.issues.map((r)=>{
        let n = r.code === "unrecognized_keys" ? [
            ...r.keys
        ].sort().join(",") : "";
        return `${r.code}:${r.path.map(String).join(".")}:${n}`;
    }).sort().join("|");
}
function v(e) {
    return P(e.toolUseId) || y5t(e.toolUseId);
}
function ecs(e, r = {}) {
    let { validationErrorSteer, validateInput, call } = e;
    let a = {
        validationErrorSteer: (u, c)=>Y(u, c, r.schemaSteerOverride?.(u) ?? null, validationErrorSteer?.(u, c) ?? null),
        ...validateInput !== undefined && {
            validateInput: Z(validateInput, r.onValidateReject)
        },
        call: q(call)
    };
    return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(a));
}
function Y(e, r, n, o) {
    let s = (n !== null ? "override|" : "") + K(r);
    let a = y(e, E, s);
    if (n !== null) {
        return n;
    }
    let c = [
        a ? I(E) : null,
        o
    ].filter((p)=>p !== null).join(`

`);
    if (c === "") {
        return null;
    }
    return c;
}
function Z(validateInput, onValidateReject) {
    return async (n, o)=>{
        let s = await validateInput(n, o);
        if (s.result) {
            return s;
        }
        let unattended = v(o);
        try {
            onValidateReject?.(n, {
                ...s
            }, {
                unattended
            });
        } catch (error) {
            t(`artifact reject observer threw: ${error instanceof Error ? error.message : typeof error}`, {
                level: "error"
            });
        }
        if (unattended) {
            return s;
        }
        return {
            ...s,
            message: ifr(n, s.message, `ec_${s.errorCode}`)
        };
    };
}
function q(e) {
    return async (r, n, ...o)=>{
        if (v(n)) {
            return e(r, n, ...o);
        }
        let s;
        try {
            s = await e(r, n, ...o);
        } catch (error) {
            if (error instanceof He) {
                error.message = ifr(r, error.message, error.reasonCode ?? "unknown");
            }
            throw error;
        }
        J();
        return s;
    };
}
function J() {
    ee().rejectBreaker.clear();
}
const VOn = 100000;
const _5t = pH - 2000;
function cQ(e) {
    return STATUS_CODES[e] ?? "Unknown Status";
}
export { voo, rfr, aKe, lQ, ofr, wce, h5t, Wls, sfr, BOn, lKe, vk, cKe, zls, Jne, jOn, WOn, Qne, zOn, Gls, y5t, Vls, qls, Eoo, Kls, Yls, Xls, Jls, Qls, Zls, GOn, bot, ifr, ecs, VOn, _5t, cQ };
