import { Ce, sd } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, v, xs } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Bn, Za, Xy } from "/$bunfs/root/chunk-xgw72tt1.js";
import { no } from "/$bunfs/root/chunk-c56kpkt7.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { yo, _o, ie, Hd, su } from "/$bunfs/root/chunk-bd805sh6.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { up } from "/$bunfs/root/chunk-x47nahfr.js";
import { ype } from "/$bunfs/root/chunk-2d9a83dh.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { sPe, Tse } from "/$bunfs/root/chunk-3yz9zdww.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { YRe } from "/$bunfs/root/chunk-6dwnw6av.js";
import { bw } from "/$bunfs/root/chunk-18a8x2hz.js";
import { I4, ulo } from "/$bunfs/root/chunk-6fb685xp.js";
import { oCe, Kg } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { Gbt } from "/$bunfs/root/chunk-t1d2nw6r.js";
import { rl, jps } from "/$bunfs/root/chunk-w6rkdzfe.js";
import { xse } from "/$bunfs/root/chunk-1qq5kpcj.js";
import { stat } from "fs/promises";
import { basename, extname, isAbsolute, join } from "path";
const Y = 3;
const G = 32;
function Kwn(n) {
    if (n.replBridgeEnabled) {
        return "repl";
    }
    if (a.CLAUDE_CODE_BRIEF_UPLOAD) {
        return "env_brief_upload";
    }
    if (a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE) {
        return "env_ccr";
    }
    if (a.CLAUDE_CODE_REMOTE) {
        return "env_byoc";
    }
    if (bw() !== null && sd()) {
        if (k("tengu_async_goblet", true)) {
            return "sdk_hosted";
        }
        return "sdk_hosted_disabled";
    }
    return "none";
}
function Ywn(n) {
    return n === "sdk_hosted" && up();
}
const J = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".bmp": "image/bmp",
    ".ico": "image/x-icon",
    ".heic": "image/heic",
    ".heif": "image/heif",
    ".avif": "image/avif",
    ".tif": "image/tiff",
    ".tiff": "image/tiff",
    ".mp4": "video/mp4",
    ".m4v": "video/x-m4v",
    ".mov": "video/quicktime",
    ".webm": "video/webm",
    ".avi": "video/x-msvideo",
    ".mkv": "video/x-matroska",
    ".mp3": "audio/mpeg",
    ".m4a": "audio/mp4",
    ".wav": "audio/wav",
    ".ogg": "audio/ogg",
    ".aac": "audio/aac",
    ".flac": "audio/flac",
    ".pdf": "application/pdf",
    ".txt": "text/plain",
    ".log": "text/plain",
    ".md": "text/markdown",
    ".json": "application/json",
    ".csv": "text/csv",
    ".html": "text/html",
    ".htm": "text/html",
    ".xml": "application/xml",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ".zip": "application/zip"
};
function kZe(n) {
    return J[extname(n).toLowerCase()];
}
function L4r(n) {
    return n.pathValidated === true && n.file_uuid !== undefined && (n.media_type === "image/png" || n.media_type === "image/jpeg") && n.media_type !== kZe(n.path);
}
function O(n) {
    return typeof n !== "string";
}
async function q(n, e, t) {
    let r = await Tse(e);
    if (r) {
        return r;
    }
    if (!isAbsolute(n)) {
        let [o, ...c] = n.split(/[\\/]+/);
        if (o === basename(t) && c.length > 0) {
            let p = join(t, ...c);
            try {
                if ((await stat(p)).isFile()) {
                    return c.join("/");
                }
            } catch  {}
        }
    }
    return await sPe(e);
}
function N4r(n) {
    let e = su(n);
    if (/^[a-z][a-z0-9+.-]+:\/\//i.test(n)) {
        return {
            result: false,
            message: `Attachment "${e}" looks like a URL, not a local file path. This tool can only send files that exist on the local filesystem \u2014 download or write the content to a local file first, then pass that path.`,
            errorCode: 1
        };
    }
    let t = et(n);
    if (Bn(t)) {
        return {
            result: false,
            message: `Attachment "${e}" is a UNC network path, which is not supported.`,
            errorCode: 1
        };
    }
    if (Xy(t)) {
        return {
            result: false,
            message: `Attachment "${e}" is under /net, /Network, /.vol, /.file, /.nofollow or /.resolve, which could trigger a network mount, so it is not supported. Copy the file to an ordinary local path and pass that path instead.`,
            errorCode: 1
        };
    }
}
const message = "A file path cannot be attached here: this tool cannot read files in this session.";
function Xwn(n, e) {
    return j(n, e, undefined);
}
async function m3o(n, e) {
    if (!e.restricted && e.blockReadsOutsideWorkingDirectories !== true) {
        return {
            verdict: await j(n, e, undefined),
            judged: undefined
        };
    }
    let paths = [];
    let identities = new Map;
    return {
        verdict: await j(n, e, {
            paths,
            identities
        }),
        judged: {
            paths,
            identities,
            doorChannel: undefined
        }
    };
}
async function j(n, e, t) {
    let r = se();
    for (let o of n){
        if (O(o)) {
            continue;
        }
        if (Ce()) {
            return {
                result: false,
                message,
                errorCode: 1
            };
        }
        let c = N4r(o);
        if (c !== undefined) {
            return c;
        }
        let p = su(o);
        let f = et(o);
        let g = t !== undefined || e.restricted || e.blockReadsOutsideWorkingDirectories === true ? _o(f) : undefined;
        if (e.restricted && !Kg(f, e, g)) {
            return {
                result: false,
                message: `Attachment "${p}" is outside the working directory; --restricted only sends files from inside it.`,
                errorCode: 1
            };
        }
        if (oCe(f, e, g)) {
            return {
                result: false,
                message: `Attachment "${p}" is outside the working directories; reads outside them are blocked (permissions.blockReadsOutsideWorkingDirectories).`,
                errorCode: 1
            };
        }
        try {
            if (!(await stat(f)).isFile()) {
                return {
                    result: false,
                    message: `Attachment "${p}" is not a regular file.`,
                    errorCode: 1
                };
            }
        } catch (error) {
            let P = v(error);
            if (P === "ENOENT") {
                let w = await q(o, f, r);
                let b = su(w);
                return {
                    result: false,
                    message: `Attachment "${p}" does not exist. Current working directory: ${su(r)}.` + (w && b === w ? ` Did you mean "${b}"?` : ""),
                    errorCode: 1
                };
            }
            if (xs(error)) {
                return {
                    result: false,
                    message: `Attachment "${p}" is not accessible (${P}).`,
                    errorCode: 1
                };
            }
            throw error;
        }
        if (t !== undefined && g !== undefined) {
            t.paths.push(...g);
            t.identities.set(f, await ype(g));
        }
    }
    return {
        result: true
    };
}
async function Jwn(n, e) {
    let t = [];
    let r = [];
    for (let s of n){
        if (O(s)) {
            t.push({
                path: s.file_name,
                size: s.size,
                isImage: s.is_image,
                file_uuid: s.file_uuid,
                media_type: s.media_type ?? kZe(s.file_name),
                pathValidated: false
            });
            continue;
        }
        if (Ce()) {
            throw new x(message, "attachment path refused in a diskless session");
        }
        let path = et(s);
        if (Za(path)) {
            throw Error(`Attachment "${su(s)}" is a network path (UNC or /net autofs), which is not supported.`);
        }
        let m = await stat(path).catch((i)=>{
            if (i instanceof Error) {
                i.message = su(i.message);
            }
            throw i;
        });
        r.push(t.length);
        t.push({
            path,
            size: m.size,
            isImage: Gbt.test(path),
            media_type: kZe(path),
            pathValidated: true
        });
    }
    let { lane } = e;
    let c = no().projectFilesDoor?.() ?? null;
    let p = c !== null && c.channelId === e.projectFilesChannel ? c : null;
    let f = lane !== "none" && lane !== "sdk_hosted_disabled";
    if (r.length === 0 || p === null && !f) {
        if (YRe()) {
            for (let s of r){
                t[s] = {
                    ...t[s],
                    upload_error: c === null ? "not delivered: this session is not on a project thread, so it has nowhere to place a file" : "not delivered: the project folder is not written in plan mode until the plan is approved"
                };
            }
        }
        return t;
    }
    let { uploadBriefAttachment, writeAttachmentToProjectFolder } = await import("/$bunfs/root/chunk-6k6xj82c.js");
    let copyLock = xse();
    let telemetry = {
        upload_lane: d(lane)
    };
    let noPreviewCopies = !k("tengu_playful_panda", true);
    let noScaledCopies = !k("tengu_level_wren", true);
    let maxPosts = k("tengu_zany_flask", 2);
    let z = jps(Y);
    let C = ()=>{};
    let M = new Promise((resolve)=>{
        C = resolve;
    });
    e.signal?.addEventListener("abort", C, {
        once: true
    });
    let V = rl(G, async (s)=>{
        let { path, size } = t[s];
        let i = K(path, e.judged?.paths);
        if (typeof i !== "string") {
            return {
                folder: {
                    error: i.error
                },
                chat: undefined
            };
        }
        let filename = basename(path);
        let y = e.judged?.identities;
        let identity = y === undefined || y.has(path) ? y?.get(path) : null;
        let h;
        let waitForTurn = async ()=>{
            await Promise.race([
                h ??= z.acquire(),
                M
            ]);
        };
        try {
            let [E, R] = await Promise.allSettled([
                p ? writeAttachmentToProjectFolder(i, size, p, {
                    filename,
                    identity,
                    signal: e.signal,
                    telemetry,
                    waitForTurn
                }) : undefined,
                f ? uploadBriefAttachment(i, size, {
                    lane,
                    filename,
                    identity,
                    signal: e.signal,
                    credentials: e.credentials,
                    copyLock,
                    waitForTurn,
                    originalsOnly: e.originalsOnly,
                    noPreviewCopies,
                    noScaledCopies,
                    maxPosts
                }) : undefined
            ]);
            if (E.status === "rejected") {
                throw E.reason;
            }
            if (R.status === "rejected") {
                throw R.reason;
            }
            return {
                folder: E.value,
                chat: R.value
            };
        } finally{
            h?.then((E)=>E());
        }
    });
    let T = r.map(V);
    Promise.allSettled(T).then(()=>e.signal?.removeEventListener("abort", C));
    let H = await Promise.all(T);
    r.forEach((s, u)=>{
        let { folder, chat } = H[u];
        let l = {
            ...t[s]
        };
        if (typeof folder === "string") {
            l.project_path = folder;
        }
        if (chat !== undefined && !("error" in chat)) {
            l.file_uuid = chat.file_uuid;
            if (chat.copy !== undefined) {
                l.isImage = chat.copy.isImage;
                l.media_type = chat.copy.mediaType;
            }
            if (chat.scaled !== undefined) {
                l.scaled = chat.scaled;
            }
        }
        let y = folder !== undefined && typeof folder !== "string";
        let A = chat !== undefined && "error" in chat;
        if (l.project_path === undefined && l.file_uuid === undefined) {
            let h = y ? folder : A ? chat : undefined;
            if (h !== undefined) {
                l.upload_error = h.error;
                if (h.errorCode !== undefined) {
                    l.upload_error_code = h.errorCode;
                }
                if (h.suspectedLimitBytes !== undefined) {
                    l.upload_suspected_limit_bytes = h.suspectedLimitBytes;
                }
            }
        } else if (y) {
            l.partial_error = `not placed in the project folder (${folder.error})`;
        } else if (A) {
            l.partial_error = `not sent to the chat viewers (${ulo(chat.error, chat.errorCode, true)})`;
        }
        t[s] = l;
    });
    return t;
}
function K(path, e) {
    let { resolvedPath } = yo(ie(), path);
    if (e === undefined) {
        return resolvedPath;
    }
    if (e.includes(resolvedPath)) {
        return resolvedPath;
    }
    return {
        error: "not sent: it now resolves to what was not approved"
    };
}
function Qwn(n) {
    let e = n.flatMap(({ path, scaled, project_path })=>{
        if (scaled === undefined) {
            return [];
        }
        return [
            {
                path: Hd(path),
                scaled,
                inFolder: project_path !== undefined
            }
        ];
    });
    let e_length = e.length;
    if (e_length === 0) {
        return;
    }
    return `${e_length} ${I(e_length, "image was sent to the chat as a scaled-down copy", "images were sent to the chat as scaled-down copies")}, because the server accepts images at most ${I4} pixels wide or tall:
` + e.map(({ path, scaled, inFolder })=>`  ${path}: sent at ${scaled.width}\xD7${scaled.height} pixels; the original (${scaled.original_width}\xD7${scaled.original_height}) is ${inFolder ? "in the project folder" : "unchanged on disk"}`).join(`
`) + `
Tell the user they are seeing ${I(e_length, "a scaled-down copy", "scaled-down copies")}; ` + (e.every((r)=>r.inFolder) ? `the project folder has ${I(e_length, "the full-size original", "the full-size originals")}.` : `if they need ${I(e_length, "the full-size original", "a full-size original")}, offer to send it inside a .zip.`);
}
export { Kwn, Ywn, kZe, L4r, N4r, Xwn, m3o, Jwn, Qwn };
