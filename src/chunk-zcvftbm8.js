import { Ye, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Hg, _, Dh, c2n, mf, _o, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne, Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Rg } from "/$bunfs/root/chunk-sfgejbsr.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { tC, Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Oa } from "/$bunfs/root/chunk-9fa34ggx.js";
import { mq, AO } from "/$bunfs/root/chunk-xbsy70c7.js";
import { Wa } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { gm, rr } from "/$bunfs/root/chunk-k3tkc302.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { IZe, OZe, Bj, fI, KX, kGe, vvn, lSt, i$, YX, Ate, TGe, jYr, MZe, JEe, $er, zYr, S2t } from "/$bunfs/root/chunk-qv4dnw41.js";
import { JQ, rF, R$n, Rat, xat, QQ } from "/$bunfs/root/chunk-1eajkkr7.js";
import { Tge, Ete } from "/$bunfs/root/chunk-gs3dthpm.js";
import { tYe, Jg, IE, Xre, PJt } from "/$bunfs/root/chunk-8yfbbt6t.js";
import { HM, Bd } from "/$bunfs/root/chunk-0sswwkdg.js";
import { lGe, hx, NC, CK, gGe, NGt, $Gt, FGt, UGt, hGe, BGt, jGt, vZe } from "/$bunfs/root/chunk-sqysdndt.js";
import { PCe, Sxt, Qit } from "/$bunfs/root/chunk-0vgmtssp.js";
import { tvn } from "/$bunfs/root/chunk-q3gfgn6s.js";
import { me, hn, Uo, ir, bt, Tp } from "/$bunfs/root/chunk-55p8dvkx.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { closeSync, constants, fstatSync, lstatSync, openSync, read, realpathSync } from "fs";
import { extname } from "path";
import { promisify } from "util";
function tGt() {
    return a.CLAUDE_CODE_ARTIFACT_ASSETS ?? (kGe() || (tvn().capabilities?.includes("assets") ?? false));
}
function p6o() {
    if (a.CLAUDE_CODE_ARTIFACT_ASSETS !== undefined) {
        return "env";
    }
    if (kGe()) {
        return "agent";
    }
    return tvn().source;
}
const U = "image/svg+xml";
const we = 2097152;
function Sbt(e) {
    if (e === U) {
        return we;
    }
    return HM;
}
const G = new Map([
    [
        ".png",
        "image/png"
    ],
    [
        ".jpg",
        "image/jpeg"
    ],
    [
        ".jpeg",
        "image/jpeg"
    ],
    [
        ".gif",
        "image/gif"
    ],
    [
        ".webp",
        "image/webp"
    ],
    [
        ".svg",
        U
    ],
    [
        ".mp4",
        "video/mp4"
    ],
    [
        ".webm",
        "video/webm"
    ],
    [
        ".pdf",
        "application/pdf"
    ],
    [
        ".woff2",
        "font/woff2"
    ],
    [
        ".woff",
        "font/woff"
    ],
    [
        ".ttf",
        "font/ttf"
    ],
    [
        ".otf",
        "font/otf"
    ],
    [
        ".csv",
        "text/csv"
    ],
    [
        ".md",
        "text/markdown"
    ],
    [
        ".markdown",
        "text/markdown"
    ],
    [
        ".json",
        "application/json"
    ],
    [
        ".txt",
        "text/plain"
    ],
    [
        ".ts",
        "text/plain"
    ],
    [
        ".css",
        "text/css"
    ],
    [
        ".js",
        "text/javascript"
    ],
    [
        ".mjs",
        "text/javascript"
    ],
    [
        ".cjs",
        "text/javascript"
    ]
]);
const f6o = D(G.values()).flatMap((e)=>uZn(e) ?? []);
const wbt = [
    ...G.keys()
].map((e)=>e.slice(1)).join(", ");
function jEe(e) {
    return G.get(extname(e).toLowerCase());
}
const ve = new Set([
    "text/csv",
    "text/markdown",
    "application/json",
    "text/plain"
]);
function vbt(e) {
    return e !== undefined && ve.has(e);
}
const C = "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) — retry the upload so it is checked again";
const ue = "reading where file_path resolves is blocked by a Read permission rule — the upload was not attempted";
const le = "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking — upload the file by its resolved path, or copy it under the working directory first";
const nGt = "file_path must name a regular file to upload";
const rGt = "the file is empty — nothing to upload";
function oGt(e, r) {
    return `too large: ${Math.ceil(Number(e) * 10 / 1024 / 1024) / 10}MB (max ${r / 1024 / 1024}MB)`;
}
const iwn = "file_path is on a volume that reports no usable file identity (some network, FUSE, and virtual-disk mounts), so the approved file cannot be told apart from a replacement — copy it to an ordinary local directory and upload the copy";
function B(error) {
    if (z(error)) {
        return {
            kind: "missing"
        };
    }
    let errnoCode = v(error);
    return {
        kind: "error",
        reason: "read_error",
        message: `cannot read file_path (${errnoCode ?? "unexpected error"})`,
        errnoCode
    };
}
function oZe(e) {
    return `${e.dev}:${e.ino}:${e.size}:${e.mtimeNs}`;
}
function m6o(e) {
    let r = e.split(":");
    if (r.length !== 4 || !r.every((s)=>/^\d+$/.test(s))) {
        return;
    }
    return Number(r[2]);
}
const sGt = "upload_asset reads only local files — file_path names a network path (UNC share, /net automount, or device-style path), reaches one through a link on the way, or has a directory or link on the way that could not be examined; if the file is on a network location, copy it onto a local disk first";
function $U(e) {
    if (lGe(e)) {
        return {
            kind: "network"
        };
    }
    let r = mf(ie(), e);
    if (r === Dh) {
        return {
            kind: "unresolved",
            error: c2n(e)
        };
    }
    if (r !== undefined && lGe(r) || hx(e)) {
        return {
            kind: "network"
        };
    }
    let s;
    try {
        s = realpathSync(e);
    } catch (error) {
        return {
            kind: "unresolved",
            error
        };
    }
    if (lGe(s)) {
        return {
            kind: "network"
        };
    }
    return {
        kind: "resolved",
        real: s
    };
}
function sZe(e) {
    try {
        let r = lstatSync(e, {
            bigint: true
        });
        return {
            real: e,
            identity: oZe(r),
            ...r.isFile() && r.nlink > 1n && {
                linked: true
            }
        };
    } catch  {
        return {
            real: e,
            identity: null
        };
    }
}
function awn(e, r = $U(e), s = r.kind !== "network" && xe(e)) {
    return vbt(jEe(e)) || r.kind === "resolved" && vbt(jEe(r.real)) || s;
}
function xe(e) {
    return WEe(e).link;
}
function WEe(e) {
    try {
        return {
            link: lstatSync(e).isSymbolicLink(),
            unreadable: null
        };
    } catch (error) {
        return {
            link: true,
            unreadable: v(error) ?? "unexpected error"
        };
    }
}
const ce = promisify(read);
function Fqr(e, r, s, d) {
    let n = r;
    let l = typeof n === "object" && n !== null && typeof n.real === "string" ? {
        real: n.real,
        identity: typeof n.identity === "string" && (n.digest === undefined || typeof n.digest === "string") ? n.identity : null,
        ...typeof n.digest === "string" && {
            digest: n.digest
        }
    } : undefined;
    let o = $U(e);
    if (o.kind === "network") {
        return {
            kind: "error",
            reason: "network",
            message: sGt
        };
    }
    if (o.kind === "unresolved") {
        if (l !== undefined && l.identity !== null) {
            return {
                kind: "error",
                reason: "changed",
                message: C
            };
        }
        let h = _o(e).slice(1).map(s);
        if (h.includes("deny")) {
            return {
                kind: "error",
                reason: "read_denied",
                message: ue
            };
        }
        if (h.some((b)=>b !== "allow")) {
            return {
                kind: "error",
                reason: "via_link",
                message: le
            };
        }
        return B(o.error);
    }
    let { real } = o;
    let u = real === e ? undefined : s(real);
    if (u === "deny") {
        return {
            kind: "error",
            reason: "read_denied",
            message: ue
        };
    }
    if (l !== undefined) {
        if (real !== l.real) {
            return {
                kind: "error",
                reason: "changed",
                message: C
            };
        }
    } else if (u !== undefined && u !== "allow") {
        return {
            kind: "error",
            reason: "via_link",
            message: le
        };
    }
    let w;
    try {
        w = lstatSync(real, {
            bigint: true
        });
    } catch (error) {
        if (l !== undefined && z(error)) {
            return {
                kind: "error",
                reason: "changed",
                message: C
            };
        }
        return B(error);
    }
    if (w.isSymbolicLink()) {
        return {
            kind: "error",
            reason: "changed",
            message: C
        };
    }
    if (!w.isFile()) {
        return {
            kind: "error",
            reason: "not_a_file",
            message: nGt
        };
    }
    if (l === undefined && w.nlink > 1n) {
        return {
            kind: "error",
            reason: "hard_link",
            message: "file_path is one of several hard links to its file, and this approval did not examine that — copy the file to a fresh path under the working directory and upload the copy"
        };
    }
    let c = constants.O_NOFOLLOW | constants.O_NONBLOCK;
    let fd;
    try {
        fd = openSync(real, constants.O_RDONLY | c);
    } catch (error) {
        if (v(error) === "ELOOP") {
            return {
                kind: "error",
                reason: "changed",
                message: C
            };
        }
        return B(error);
    }
    let R = false;
    try {
        let h = fstatSync(fd, {
            bigint: true
        });
        if (!h.isFile()) {
            return {
                kind: "error",
                reason: "not_a_file",
                message: nGt
            };
        }
        if (Hg(h.ino)) {
            return {
                kind: "error",
                reason: "no_identity",
                message: iwn
            };
        }
        if (oZe(h) !== (l !== undefined ? l.identity : oZe(w))) {
            return {
                kind: "error",
                reason: "changed",
                message: C
            };
        }
        {
            let O = null;
            try {
                O = realpathSync(`/proc/self/fd/${fd}`);
            } catch  {}
            if (O !== null && O !== real) {
                return {
                    kind: "error",
                    reason: "changed",
                    message: C
                };
            }
        }
        try {
            let O = $U(e);
            if (O.kind !== "resolved" || O.real !== real) {
                return {
                    kind: "error",
                    reason: "changed",
                    message: C
                };
            }
            let L = lstatSync(real, {
                bigint: true
            });
            if (L.dev !== h.dev || L.ino !== h.ino) {
                return {
                    kind: "error",
                    reason: "changed",
                    message: C
                };
            }
        } catch  {
            return {
                kind: "error",
                reason: "changed",
                message: C
            };
        }
        let b = Number(h.size);
        if (b === 0 || b > d) {
            return {
                kind: "error",
                reason: "size",
                message: b === 0 ? rGt : oGt(b, d),
                sizeBytes: b
            };
        }
        R = true;
        return {
            kind: "opened",
            fd,
            size: b,
            real,
            identity: oZe(h),
            digest: l?.digest
        };
    } catch (error) {
        return B(error);
    } finally{
        if (!R) {
            closeSync(fd);
        }
    }
}
async function Uqr({ fd, size, identity, digest }) {
    try {
        if (oZe(fstatSync(fd, {
            bigint: true
        })) !== identity) {
            return {
                kind: "error",
                reason: "changed",
                message: C
            };
        }
        let l = Buffer.allocUnsafe(size);
        let o = 0;
        while(o < size){
            let { bytesRead: bytesRead_1 } = await ce(fd, l, o, size - o, o);
            if (bytesRead_1 === 0) {
                break;
            }
            o += bytesRead_1;
        }
        let { bytesRead } = await ce(fd, Buffer.alloc(1), 0, 1, size);
        if (o !== size || bytesRead !== 0) {
            return {
                kind: "error",
                reason: "changed",
                message: C
            };
        }
        if (digest !== undefined && at(l) !== digest) {
            return {
                kind: "error",
                reason: "changed",
                message: C
            };
        }
        return {
            kind: "ok",
            bytes: l
        };
    } catch (error) {
        return B(error);
    } finally{
        closeSync(fd);
    }
}
function Bqr(e) {
    try {
        closeSync(e.fd);
    } catch  {}
}
async function Ebt(e, r, s, d) {
    let n = Fqr(e, r, s, d);
    if (n.kind === "opened") {
        return Uqr(n);
    }
    return n;
}
const Ee = new Set([
    "invalid_request",
    "too_large",
    "unsupported_type",
    "quota_or_state",
    "rate_limited",
    "capability_disabled",
    "store_unavailable",
    "upstream_error",
    "credential_rejected",
    "not_found",
    "asset_not_found",
    "not_copyable"
]);
const dae = /^\/?_blob\/[0-9a-f]{32}$/;
function re(opaque_id, url) {
    if (url === `_blob/${opaque_id}` || url === `/_blob/${opaque_id}`) {
        return url;
    }
    return `/_blob/${opaque_id}`;
}
const lD = /^[0-9a-f]{64}$/;
const limit = 50;
const lwn = 40;
const UX = /^[A-Za-z0-9_=-]{1,4096}$/;
const jqr = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/;
const gx = /^[a-z0-9]{1,24}\/[a-z0-9.+-]{1,80}$/;
const _te = 10;
const uI = 25;
const uae = 1024;
const ge = p(()=>bt({
        opaque_id: me().regex(gm),
        url: me().optional().catch(undefined),
        size_bytes: hn().int().nonnegative(),
        content_type: me().regex(gx),
        sha256: me().regex(lD).optional()
    }));
const Te = p(()=>bt({
        assets: ir(bt({
            opaque_id: me().regex(gm),
            url: me().optional().catch(undefined),
            content_type: me().regex(gx).max(lwn),
            size_bytes: hn().int().nonnegative().max(HM),
            sha256: me().regex(lD).optional(),
            created_at: me().regex(jqr).max(lwn)
        })).max(1000),
        usage: bt({
            files: hn().int().nonnegative(),
            bytes: hn().int().nonnegative(),
            max_files: hn().int().nonnegative(),
            max_bytes: hn().int().nonnegative()
        }),
        next: me().regex(UX).or(Tp("")).nullish().transform((e)=>e || undefined),
        cowritten: Tp(true).optional().catch(undefined),
        outside_writer: Uo().optional().catch(undefined)
    }));
const Fe = p(()=>bt({
        deleted: Uo()
    }));
const $e = p(()=>bt({
        error: bt({
            code: me(),
            message: me().optional()
        })
    }));
const Oe = p(()=>bt({
        error: me(),
        reason: me()
    }));
const Ce = 20000;
const se = 30000;
const Le = 90000;
function De(slug) {
    return `/api/frame/blob/${slug}/agent-upload`;
}
function _e(slug) {
    return `/api/frame/blob/${slug}/agent-list`;
}
function Me(slug, r) {
    return `/api/frame/blob/${slug}/${r}/agent-delete`;
}
function Pe(slug) {
    return `/api/frame/blob/${slug}/agent-copy`;
}
function H(e, data) {
    let s = $e().safeParse(data);
    if (s.success) {
        let d = s.data.error.code;
        if (Ee.has(d)) {
            let detail = s.data.error.message && J(s.data.error.message);
            return {
                code: d,
                reason: d,
                ...detail && {
                    detail
                }
            };
        }
        return {
            code: "upstream_error",
            reason: "unknown_code"
        };
    }
    if (e === 403 || e === 503) {
        let d = Oe().safeParse(data);
        if (d.success) {
            return {
                code: "policy_denied",
                reason: "policy_denied",
                detail: J(d.data.error)
            };
        }
    }
    if (e === 403) {
        if (typeof data === "string" && data.trim() === "not a writer") {
            return {
                code: "not_writer",
                reason: "not_writer"
            };
        }
        if (typeof data === "string" && /^\s*</.test(data)) {
            return {
                code: "upstream_error",
                reason: "http_403_page"
            };
        }
        return {
            code: "credential_rejected",
            reason: "http_403"
        };
    }
    if (e === 404) {
        if (typeof data === "string" && data.trim() === "not found") {
            return {
                code: "not_found",
                reason: "http_404"
            };
        }
        return {
            code: "store_unavailable",
            reason: "unrouted",
            detail: "this asset route is not served on this path yet (an older deployment, or a cloud session whose gateway does not relay it) — nothing changed; retry later"
        };
    }
    if (e === 401) {
        return {
            code: "upstream_auth",
            reason: "http_401"
        };
    }
    if (e === 409) {
        return {
            code: "quota_or_state",
            reason: "http_409"
        };
    }
    if (e === 413) {
        return {
            code: "too_large",
            reason: "http_413"
        };
    }
    if (e === 415) {
        return {
            code: "unsupported_type",
            reason: "http_415"
        };
    }
    if (e === 429) {
        return {
            code: "rate_limited",
            reason: "http_429"
        };
    }
    if (e === 502 || e === 503 || e === 504) {
        return {
            code: "store_unavailable",
            reason: `http_${e}`
        };
    }
    return {
        code: "upstream_error",
        reason: `http_${e}`
    };
}
function J(e) {
    return ne(e.replace(/[\p{Cc}\p{Cf}\p{Co}]/gu, " "), 200);
}
function Be(code, r, s = "upload", d) {
    let n = `asset ${s} failed (${code})`;
    switch(code){
        case "invalid_request":
            return `${n}: ${r ?? "the server could not accept the request as shaped"}`;
        case "too_large":
            return `${n}: ${r ?? "rejected as too large by the server or an intermediary although under the client limit — compress or split it"}`;
        case "unsupported_type":
            return `${n}: ${r ?? `only these file types are accepted: ${wbt}`}`;
        case "quota_or_state":
            return `${n}: ${r ?? (s === "upload" || s === "copy" ? "the Artifact cannot take uploads right now — it is a live document, unpublished, retired, being deleted, or over its asset storage quota" : "the Artifact has no asset store right now — it is a live document, unpublished, retired, or being deleted")}`;
        case "rate_limited":
            return `${n}: calling too often \u2014 wait${r ? ` ${r}` : ""} before retrying, and never loop`;
        case "upstream_auth":
            return `${n}: could not authenticate \u2014 the session's credential may need a refresh; try again`;
        case "capability_disabled":
            return `${n}: the Artifact's published version does not declare the assets capability \u2014 republish it with assets: {} added to its declared capabilities, then retry`;
        case "store_unavailable":
            return `${n}: ${r ?? `the asset store is unavailable right now \u2014 retry once after a short wait${s === "upload" ? " (an upload that timed out upstream may already be stored; a duplicate costs only quota)" : ""}`}`;
        case "upstream_error":
            return `${n}: unexpected answer from the server${r ? ` (${r})` : ""}`;
        case "not_found":
            if (s === "copy" && d === "not_found") {
                return `${n}: the SOURCE Artifact (from_url) does not exist, is not one this session can open, or cannot be copied from \u2014 the cases are deliberately indistinguishable; check from_url with action "list", scope "shared"`;
            }
            return `${n}: no such Artifact, or artifact assets are not available to this account or Artifact \u2014 the cases are deliberately indistinguishable; check the url with action "list"`;
        case "asset_not_found":
            return `${n}: ${r ?? "the source Artifact holds no asset with one of the given ids"} \u2014 run action "list_assets" on from_url for its current ids; nothing was copied`;
        case "not_copyable":
            return `${n}: ${r ?? "this source cannot be copied from"}; nothing was copied`;
        case "not_writer":
            return `${n}: this account can open the Artifact but not edit it \u2014 only writers can ${s === "copy" ? "copy assets into it" : `${s} assets`}`;
        case "credential_rejected":
            return `${n}: the server refused this session's credential at the asset door \u2014 not an access or existence answer; report this as a client/server integration fault${r ? ` (${r})` : ""}`;
        case "policy_denied":
            return `${n}: ${r ?? "blocked by the organization's artifact policy"}`;
        case "unavailable_to_account":
            return `${n}: artifact assets are not available to this account`;
    }
}
function Y(e, r) {
    return (code, d, n)=>{
        e(d);
        return {
            kind: "error",
            code,
            message: Be(code, n, r, d),
            reason: d
        };
    };
}
const Ne = "asset uploads, copies, listing, and deletes from an agent session (one with no user account) aren't enabled on the server for this organization; retrying from here will not help";
async function V(e, r) {
    let { verb, route, body, contentType, marks, fail } = e;
    let u = (failure)=>({
            replied: false,
            failure
        });
    let w = kGe();
    if (w) {
        marks.agent_direct = true;
    }
    let c = S2t() || KX() && lSt(Bj);
    let E = !w && c && !i$(Bj);
    let R = !w && !c && KX() || E;
    let h = ()=>u(fail("store_unavailable", "relay_unavailable", "asset uploads, copies, listing, and deletes run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help"));
    if (!R && !w && a.CLAUDE_CODE_REMOTE) {
        return h();
    }
    if (R && !fI(Bj)) {
        return u(fail("store_unavailable", "relay_not_served", "asset uploads, copies, listing, and deletes aren't available from this kind of session; retrying from here will not help"));
    }
    let session = ee();
    if (!session.assetsOnRoster) {
        let epoch = session.accountEpoch;
        let x = session.roster === undefined;
        let roster = session.roster ?? await Ete({
            timeoutMs: 5000,
            signal: r,
            credentials: e.credentials
        });
        if ("err" in roster) {
            marks[`roster_${roster.cause}`] = true;
        } else if (x && !Tge({
            session,
            epoch,
            roster,
            storageV5: undefined
        }).adopted) {
            marks.roster_outlived = true;
        } else if (!roster.capabilities.includes("assets")) {
            if (!R) {
                return u(fail("unavailable_to_account", "roster_no_assets"));
            } else {
                marks.roster_no_assets = true;
            }
        }
    }
    let O = {
        maxRedirects: 0,
        headers: {
            ...Bd(),
            "Content-Type": contentType,
            Accept: "application/json"
        },
        ...e.verb === "upload" ? {
            streamUpload: {
                tailFloorMs: ()=>Le,
                onSettled: (F)=>{
                    if (F.stalled) {
                        marks.stalled = true;
                    }
                }
            }
        } : {
            timeout: e.timeoutMs
        },
        ...e.maxBodyLength !== undefined && {
            maxBodyLength: e.maxBodyLength
        },
        maxContentLength: 262144,
        validateStatus: ()=>true,
        signal: r
    };
    let L = async ()=>{
        if (R) {
            return (await $er("POST", route, body, O, Bj)).res;
        }
        return Gt.post(route, body, {
            ...O,
            host: "frame",
            auth: "claude-ai-oauth",
            refreshOAuth: true,
            credentials: e.credentials
        });
    };
    let k;
    try {
        if (E && e.verb === "upload" && !TGe(Bj)) {
            let x;
            try {
                x = (await $er("POST", e.probeRoute, _({
                    limit: 1
                }), {
                    maxRedirects: 0,
                    headers: {
                        ...Bd(),
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    timeout: se,
                    maxContentLength: 262144,
                    validateStatus: ()=>true,
                    signal: r
                }, Bj)).res;
            } catch (error) {
                if (Oa(error) || error instanceof Ye) {
                    throw error;
                }
                YX(Bj, true);
                return u(fail("store_unavailable", "probe_request_error", "the session gateway did not answer; nothing was uploaded — one retry is safe"));
            }
            let T = zYr(x);
            if (T.refused) {
                YX(Bj);
                return h();
            }
            if (!T.vouched) {
                if (!x.ok || x.status >= 500 || x.status === 499) {
                    YX(Bj, true);
                }
                return u(fail("store_unavailable", "probe_unvouched", "the session gateway could not confirm the asset route; nothing was uploaded — retry later"));
            }
            Ate(Bj);
        }
        let F = (x)=>{
            if (!E) {
                return false;
            }
            let T = zYr(x);
            if (T.refused && !(x.ok && x.status === 413)) {
                YX(Bj);
                jYr(Bj);
                return true;
            }
            if (T.vouched) {
                Ate(Bj);
            } else if (!TGe(Bj) && (!x.ok || x.status >= 500 || x.status === 499)) {
                YX(Bj, true);
            }
            return false;
        };
        k = await L();
        if (F(k)) {
            return h();
        }
        if (k.ok && (k.status === 429 || k.status === 503) && H(k.status, k.data).code !== "policy_denied") {
            let x = k.response.headers?.["retry-after"];
            let T = Rg(typeof x === "string" ? x : undefined);
            if (T !== undefined && T <= Ce) {
                await Q(T, r);
                if (r.aborted) {
                    throw new Ye;
                }
                marks.retried = true;
                k = await L();
                if (F(k)) {
                    return h();
                }
            }
        }
    } catch (error) {
        if (Oa(error) || error instanceof Ye) {
            throw error;
        }
        if (E && !TGe(Bj)) {
            YX(Bj, true);
        }
        if (AO(error) !== undefined) {
            return u(fail("store_unavailable", "proxy_refused", "a network proxy refused the connection; nothing was sent — one retry is safe"));
        }
        return u(fail("store_unavailable", "request_error", verb === "upload" ? "the request failed in transit or timed out — a timed-out upload may already be stored; one retry is safe (a duplicate costs only quota)" : verb === "copy" ? 'the request failed in transit or timed out — a timed-out copy may already have landed; run action "list_assets" on the destination before retrying, or the assets may be copied twice' : "the request failed in transit or timed out — one retry is safe"));
    }
    if (!k.ok) {
        return u({
            ...fail("store_unavailable", k.reason.replace(/-/g, "_")),
            message: k.reason === "no-auth" ? R ? tYe(k.detail) : Jg(k.detail) : `asset ${verb} unavailable: ${k.reason}`
        });
    }
    if (w && k.status === 403 && H(k.status, k.data).reason === "credential_rejected") {
        return u({
            ...fail("credential_rejected", "agent_not_enabled"),
            message: `asset ${verb} failed (credential_rejected): ${Ne}`
        });
    }
    return {
        replied: true,
        status: k.status,
        data: k.data,
        retryAfter: k.response.headers?.["retry-after"]
    };
}
function W(e, r) {
    let { code, reason, detail } = H(e.status, e.data);
    let l = Rg(e.retryAfter);
    return r(code, reason, code === "rate_limited" ? l !== undefined ? `${Math.max(1, Math.ceil(l / 1000))}s` : undefined : code === "upstream_error" && detail === undefined ? `HTTP ${e.status}` : detail);
}
async function dZn(e, r) {
    let { slug, bytes, contentType } = e;
    let l = {};
    let o = Y((E)=>m("artifact_asset_upload", E, l), "upload");
    if (!rr.test(slug)) {
        return o("invalid_request", "invalid_slug", "not a valid artifact id");
    }
    let i = Sbt(contentType);
    if (bytes.length === 0 || bytes.length > i) {
        if (bytes.length === 0) {
            return o("invalid_request", "size", "the file is empty");
        }
        return o("too_large", "size", contentType === U ? `the SVG exceeds the ${i >> 20} MiB limit for SVG assets \u2014 simplify or rasterize it` : `the file exceeds the ${i >> 20} MiB per-asset limit \u2014 compress or split it`);
    }
    let u = await V({
        verb: "upload",
        route: De(slug),
        probeRoute: _e(slug),
        body: bytes,
        contentType,
        maxBodyLength: HM + 4096,
        marks: l,
        fail: o,
        credentials: e.credentials
    }, r);
    let w = (E)=>{
        if (l.retried === true) {
            return {
                ...E,
                resent: true
            };
        }
        return E;
    };
    if (!u.replied) {
        return w(u.failure);
    }
    if (u.status !== 200) {
        return w(W(u, o));
    }
    let c = ge().safeParse(u.data);
    if (!c.success || c.data.content_type !== contentType || (contentType === U ? c.data.size_bytes === 0 || c.data.size_bytes > HM : c.data.size_bytes !== bytes.length)) {
        return w(o("upstream_error", "malformed_echo", "the upload probably succeeded but the reply was unreadable — retry at most once; if it repeats, stop and report it"));
    }
    ee().assetsOnRoster = true;
    g("artifact_asset_upload", {
        ...l,
        size_bytes: c.data.size_bytes
    });
    return {
        kind: "ok",
        id: c.data.opaque_id,
        url: re(c.data.opaque_id, c.data.url),
        sizeBytes: c.data.size_bytes,
        contentType: c.data.content_type,
        ...c.data.sha256 !== undefined && {
            sha256: c.data.sha256
        },
        ...l.retried === true && {
            resent: true
        }
    };
}
async function g6o(e, r) {
    let { slug, after } = e;
    let n = {};
    let l = Y((u)=>m("artifact_asset_list", u, n), "list");
    if (!rr.test(slug)) {
        return l("invalid_request", "invalid_slug", "not a valid artifact id");
    }
    if (after !== undefined && !UX.test(after)) {
        return l("invalid_request", "invalid_cursor", "after must be the next value from an earlier list_assets result");
    }
    let o = await V({
        verb: "list",
        route: _e(slug),
        body: _({
            ...after !== undefined && {
                after
            },
            limit
        }),
        contentType: "application/json",
        timeoutMs: se,
        marks: n,
        fail: l,
        credentials: e.credentials
    }, r);
    if (!o.replied) {
        return o.failure;
    }
    if (o.status !== 200) {
        return W(o, l);
    }
    let i = Te().safeParse(o.data);
    if (!i.success) {
        return l("upstream_error", "malformed_reply", "the listing was unreadable");
    }
    ee().assetsOnRoster = true;
    Sxt(slug, i.data.cowritten);
    Qit(slug, i.data.outside_writer);
    g("artifact_asset_list", {
        ...n,
        count: i.data.assets.length
    });
    return {
        kind: "ok",
        assets: i.data.assets.map((u)=>({
                id: u.opaque_id,
                url: re(u.opaque_id, u.url),
                contentType: u.content_type,
                sizeBytes: u.size_bytes,
                ...u.sha256 !== undefined && {
                    sha256: u.sha256
                },
                createdAt: J(u.created_at)
            })),
        usage: {
            files: i.data.usage.files,
            bytes: i.data.usage.bytes,
            maxFiles: i.data.usage.max_files,
            maxBytes: i.data.usage.max_bytes
        },
        ...i.data.next !== undefined && {
            next: i.data.next
        },
        ...i.data.cowritten && {
            cowritten: true
        },
        ...i.data.outside_writer !== undefined && {
            outsideWriter: i.data.outside_writer
        }
    };
}
async function h6o(e, r) {
    let { slug, id } = e;
    let n = {};
    let l = Y((u)=>m("artifact_asset_delete", u, n), "delete");
    if (!rr.test(slug)) {
        return l("invalid_request", "invalid_slug", "not a valid artifact id");
    }
    if (!gm.test(id)) {
        return l("invalid_request", "invalid_id", "not a valid asset id");
    }
    let o = await V({
        verb: "delete",
        route: Me(slug, id),
        body: "{}",
        contentType: "application/json",
        timeoutMs: se,
        marks: n,
        fail: l,
        credentials: e.credentials
    }, r);
    if (!o.replied) {
        return o.failure;
    }
    if (o.status !== 200) {
        return W(o, l);
    }
    let i = Fe().safeParse(o.data);
    if (!i.success) {
        return l("upstream_error", "malformed_reply", "the delete may have succeeded but the reply was unreadable — list the assets to check");
    }
    ee().assetsOnRoster = true;
    g("artifact_asset_delete", {
        ...n,
        deleted: i.data.deleted
    });
    return {
        kind: "ok",
        deleted: i.data.deleted
    };
}
const Ie = p(()=>bt({
        assets: ir(ge().extend({
            from_id: me().regex(gm)
        })).max(_te)
    }));
const timeoutMs = 120000;
async function y6o(e, r) {
    let { slug, fromSlug, ids } = e;
    let l = e.crossOrgOk === true;
    let o = {};
    let i = Y((c)=>m("artifact_asset_copy", c, o), "copy");
    if (!rr.test(slug) || !rr.test(fromSlug)) {
        return i("invalid_request", "invalid_slug", "not a valid artifact id");
    }
    if (slug === fromSlug) {
        return i("invalid_request", "same_artifact", "from_url names the destination itself — its assets are already there");
    }
    if (ids.length === 0 || ids.length > _te || !ids.every((c)=>gm.test(c)) || new Set(ids).size !== ids.length) {
        return i("invalid_request", "invalid_ids", `asset_ids must be 1\u2013${_te} distinct asset ids`);
    }
    let u = await V({
        verb: "copy",
        route: Pe(slug),
        body: _({
            from: fromSlug,
            ids,
            ...l && {
                cross_org_ok: true
            }
        }),
        contentType: "application/json",
        timeoutMs,
        marks: o,
        fail: i,
        credentials: e.credentials
    }, r);
    if (!u.replied) {
        return u.failure;
    }
    if (u.status !== 200) {
        if (l && u.status === 400 && H(400, u.data).detail === "invalid request body") {
            return i("not_copyable", "predates_cross_org", "this server doesn't support copying from another organization's artifact yet, so don't retry the copy, and tell the user cross-organization copies aren't supported yet");
        }
        return W(u, i);
    }
    let w = Ie().safeParse(u.data);
    if (!w.success || w.data.assets.length !== ids.length || w.data.assets.some((c, E)=>c.from_id !== ids[E])) {
        return i("upstream_error", "malformed_reply", 'the copy probably succeeded but the reply was unreadable — run action "list_assets" on the destination before retrying, or the assets may be copied twice');
    }
    ee().assetsOnRoster = true;
    g("artifact_asset_copy", {
        ...o,
        count: ids.length
    });
    return {
        kind: "ok",
        assets: w.data.assets.map((c)=>({
                fromId: c.from_id,
                id: c.opaque_id,
                url: re(c.opaque_id, c.url),
                sizeBytes: c.size_bytes,
                contentType: c.content_type,
                ...c.sha256 !== undefined && {
                    sha256: c.sha256
                }
            }))
    };
}
const timeout = 90000;
function uZn(e) {
    for (let [r, s] of G){
        if (s === e) {
            return r;
        }
    }
}
const fe = "asset reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help";
async function _6o(e, r, s, credentials, { admitPublicRead, probeToolUseId } = {}) {
    let o = (y, S)=>{
        m("artifact_asset_read", y);
        return {
            kind: "error",
            message: `asset read failed: ${S}`,
            reason: y
        };
    };
    if (!rr.test(e.slug)) {
        return o("invalid_slug", "not a valid artifact id");
    }
    if (!gm.test(r)) {
        return o("invalid_id", "not a valid asset id");
    }
    let i = vvn();
    let agentDirect = kGe();
    let w = !i && (KX() || S2t() && !i$(tC));
    if (!w && !i && a.CLAUDE_CODE_REMOTE) {
        return o("relay_unavailable", fe);
    }
    let c = await NC(e, "artifact_asset_read", s, {
        gatePublicRead: false,
        credentials,
        probeToolUseId
    });
    if (c.err !== null) {
        return {
            kind: "error",
            message: c.err.replace(/^artifact read/, "asset read"),
            reason: c.status === 404 ? "boot_404" : "boot"
        };
    }
    let { ver, assetToken } = c;
    let publicRead = assetToken === undefined;
    if (publicRead && !IE()) {
        return o("tokenless", "this artifact is served to you as a public (non-member) reader, and assets are not readable that way");
    }
    if (publicRead && admitPublicRead?.() !== true) {
        f("artifact_asset_read", Xre);
        return {
            kind: "error",
            reason: Xre,
            message: `asset read failed: ${PJt}`
        };
    }
    let relay = w && !publicRead;
    let O = `/_f/${ver}/_blob/${r}`;
    let L = `frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`;
    let { host, base, headers } = BGt(e);
    let T = ()=>{
        ee().contentHostEgressDenied.add(e.env);
        return o("egress_blocked", `this environment's network allowlist blocks ${host}, so the asset cannot be fetched (access to the artifact itself is fine). ${publicRead ? `Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${jGt(e.env)}` : a.CLAUDE_CODE_REMOTE ? "This is a restriction of where this session runs; retrying from here will not help." : `To allow it, add *.${L} to the network allowlist this session runs behind (the sandbox's allowed domains, or the Claude desktop app's network settings).`}`);
    };
    let M = (y, S)=>{
        t(`[artifact] asset fetch: egress proxy denied (${S})`);
        return o("egress_denied", `artifact content fetch refused by the environment's egress proxy (${mq(y)})`);
    };
    let ye = (connectStatus, S)=>{
        if (S !== undefined) {
            t(`[artifact] asset fetch: proxy refused, marker ${S}`);
        }
        return o("proxy_refused", `the proxy refused the connection to the artifact's content host (${mq(connectStatus)})`);
    };
    let N = false;
    let I;
    if (!relay && assetToken !== undefined && FGt(c.data)) {
        try {
            I = await UGt(e.slug, O, {
                token: assetToken,
                timeout,
                maxContentLength: HM + 1,
                signal: s,
                credentials
            });
        } catch (error) {
            if (Oa(error) || error instanceof Ye) {
                throw error;
            }
            return o("request_error", `the content fetch failed in transit, timed out, or exceeded the ${HM >> 20} MiB limit`);
        }
        N = I.kind === "answer";
    }
    let A;
    try {
        if (I?.kind === "answer") {
            A = I;
        } else if (relay) {
            if (assetToken === undefined) {
                return o("internal", "internal error: a public artifact read was routed where it cannot be served — this is a bug in this build; do not retry");
            }
            let y = await $Gt(e.slug, O, {
                token: assetToken,
                timeout,
                maxContentLength: HM + 1,
                signal: s,
                retryBudget: gGe()
            });
            if (!y.ok) {
                return o(y.reason.replace(/-/g, "_"), y.reason === "no-auth" ? tYe(y.detail) : `artifact content is unreachable from this session (${y.reason})`);
            }
            A = {
                status: y.status,
                headers: y.response.headers,
                data: y.data
            };
        } else {
            let y = assetToken === undefined ? "" : `?__frame_t=${encodeURIComponent(assetToken)}`;
            let S = await Wa.get(`${base}${O}${y}`, {
                signal: s,
                timeout,
                responseType: "arraybuffer",
                maxRedirects: 0,
                maxContentLength: HM + 1,
                validateStatus: ()=>true,
                ...headers && {
                    headers
                }
            });
            if (rF(S.status, S.headers)) {
                return T();
            }
            let P = QQ(S.headers);
            if (P !== undefined && (S.status < 200 || S.status >= 300)) {
                return M(S.status, P);
            }
            ee().contentHostEgressDenied.delete(e.env);
            A = {
                status: S.status,
                headers: S.headers,
                data: S.data
            };
        }
    } catch (error) {
        if (Oa(error) || error instanceof Ye) {
            throw error;
        }
        if (relay) {
            JEe();
        }
        let S = relay ? undefined : AO(error);
        if (S !== undefined) {
            if (rF(S.connectStatus, S.headers)) {
                return T();
            }
            let P = QQ(S.headers);
            if (P !== undefined) {
                return M(S.connectStatus, P);
            }
            return ye(S.connectStatus, xat(S.headers));
        }
        return o("request_error", `the content fetch failed in transit, timed out, or exceeded the ${HM >> 20} MiB limit`);
    }
    if (relay && MZe(A.status)) {
        return o("relay_unavailable", fe);
    }
    if (relay && OZe(A.status, A.data)) {
        return o("network_off", `${IZe}; retrying from here will not help`);
    }
    if (relay && CK(A.status)) {
        return o(`http_${A.status}`, NGt(A.status));
    }
    if (relay) {
        JEe(A.status);
    }
    if (A.status === 404) {
        return o("http_404", relay ? `not found through this cloud session's artifact mount \u2014 no asset has that id, or asset reads are not enabled for this session yet; a writer of the artifact can tell which with action "list_assets"` : 'no asset with that id in this artifact (it may have been deleted) — a writer of the artifact can check the id with action "list_assets"');
    }
    if (publicRead && A.status === 403 && PCe(A.headers, JQ(A.headers, A.data, (y)=>y))) {
        return o("public_refused", "this public artifact serves no asset with that id to readers outside its organization, or it is no longer public");
    }
    let X = relay ? undefined : R$n({
        status: A.status,
        headers: A.headers,
        data: A.data,
        redact: (y)=>vZe(y, assetToken),
        label: "[artifact] asset fetch"
    });
    if (X !== undefined) {
        return o(X, Rat[X]);
    }
    if (A.status === 401 || A.status === 403) {
        return o(`http_${A.status}`, relay ? "the cloud session's artifact mount refused the read — asset reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused — the artifact may have been unshared or taken down since the id was listed");
    }
    if (A.status !== 200) {
        return o(`http_${A.status}`, `unexpected answer from the ${N ? "artifact service" : "content host"} (HTTP ${A.status})`);
    }
    if (relay) {
        Ate(tC);
    }
    let A_headers = A.headers;
    let oe = relay || N ? hGe(A_headers) : A_headers?.["content-type"];
    let contentType = typeof oe === "string" ? Qe(oe, ";").trim().toLowerCase() : "";
    if (uZn(contentType) === undefined) {
        return o("unexpected_type", `the ${N ? "artifact service" : "content host"} served a type this tool does not save`);
    }
    let j = Buffer.from(A.data ?? new ArrayBuffer(0));
    if (j.length === 0 || j.length > HM) {
        return o("size", j.length === 0 ? "the asset is empty" : `the asset exceeds the ${HM >> 20} MiB limit`);
    }
    return {
        kind: "ok",
        bytes: j,
        contentType,
        relay,
        agentDirect,
        publicRead
    };
}
export { tGt, p6o, Sbt, f6o, wbt, jEe, vbt, nGt, rGt, oGt, iwn, oZe, m6o, sGt, $U, sZe, awn, WEe, Fqr, Uqr, Bqr, Ebt, dae, lD, lwn, UX, jqr, gx, _te, uI, uae, dZn, g6o, h6o, y6o, uZn, _6o };
