import { Ye } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Yc, Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { mq, AO } from "/$bunfs/root/chunk-xbsy70c7.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { JQ, rF, R$n, Rat, xat, QQ } from "/$bunfs/root/chunk-1eajkkr7.js";
import { Oa } from "/$bunfs/root/chunk-9fa34ggx.js";
import { Wa } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { rr } from "/$bunfs/root/chunk-k3tkc302.js";
import { rs } from "/$bunfs/root/chunk-6dwnw6av.js";
import { tC } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { lvn, c2t, n3 } from "/$bunfs/root/chunk-gs3dthpm.js";
import { r3, IZe, OZe, Ler, fI, KX, kGe, vvn, i$, Ate, MZe, JEe, S2t } from "/$bunfs/root/chunk-qv4dnw41.js";
import { tYe, IE, Xre, PJt, Lk } from "/$bunfs/root/chunk-8yfbbt6t.js";
import { HM } from "/$bunfs/root/chunk-0sswwkdg.js";
import { dT, QZn, JG, NC, CK, yae, vge, gGe, NGt, $Gt, FGt, UGt, hGe, C4r, R4r, x4r, P4r, ier, BGt, jGt, vZe } from "/$bunfs/root/chunk-sqysdndt.js";
import { PCe, ICe, FNe, vt, J_e } from "/$bunfs/root/chunk-0vgmtssp.js";
import { lD, gx } from "/$bunfs/root/chunk-zcvftbm8.js";
import { me, hn, Uo, bt, hg } from "/$bunfs/root/chunk-55p8dvkx.js";
import { createHash } from "crypto";
const K = "_files.json";
const bbt = 4096;
const $qr = HM;
const Q = 16777216;
const timeout = 90000;
const Z = "x-frame-doc-sha256";
const J = "x-frame-doc-seq";
const te = p(()=>bt({
        ver: me(),
        files: hg(bt({
            sha256: me().regex(lD),
            size: hn().int().nonnegative().max($qr),
            contentType: me().regex(gx)
        })),
        narrowed: Uo().optional()
    }));
function x(e) {
    if (e === "file list") {
        return "artifact_file_list";
    }
    return "artifact_file_read";
}
function v(e, reason, c, h = true) {
    if (h) {
        m(x(e), reason);
    }
    return {
        kind: "error",
        message: `${e} failed: ${c}`,
        reason
    };
}
function M(e) {
    let n = e - 1;
    if (n >= 1048576) {
        return `${n >> 20} MiB`;
    }
    return `${n >> 10} KiB`;
}
const W = "published-file reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help";
const re = "published-file reads aren't available from this kind of session; retrying from here will not help";
async function N(target, n, c, credentials, { admitPublicRead, probeToolUseId }) {
    if (!rr.test(target.slug)) {
        return v(n, "invalid_slug", "not a valid artifact id");
    }
    let l = vvn();
    let F = !l && (KX() || S2t() && !i$(tC));
    if (!F && !l && a.CLAUDE_CODE_REMOTE) {
        return v(n, "relay_unavailable", W);
    }
    let agentDirect = l || rs() && kGe();
    if (F && !fI(Ler) && !agentDirect) {
        return v(n, "relay_not_served", re);
    }
    let i = await NC(target, x(n), c, {
        gatePublicRead: false,
        relayOnly: !agentDirect,
        credentials,
        probeToolUseId
    });
    if (i.err !== null) {
        let w = i.errorCode === "boot_relay_error";
        if (w && (i.status === 403 || i.status === 404)) {
            return {
                kind: "error",
                reason: "relay_refused",
                message: `${n} failed: published-file reads from a cloud session go through the session gateway's artifact relay, which is not enabled for this session yet; retrying from here will not help`
            };
        }
        if (w && i.status === 401) {
            return {
                kind: "error",
                reason: "relay_unauthorized",
                message: `${n} failed: the session gateway did not accept this session's credential for the artifact relay; retrying from here will not help`
            };
        }
        return {
            kind: "error",
            message: i.err.replace(/^artifact read/, n),
            reason: i.errorCode
        };
    }
    let publicRead = i.assetToken === undefined;
    if (publicRead && !IE()) {
        return v(n, "tokenless", "this artifact is served to you as a public (non-member) reader, and its files are not readable that way");
    }
    if (publicRead && admitPublicRead?.() !== true) {
        f(x(n), Xre);
        return v(n, Xre, PJt, false);
    }
    let R = i.data.cowritten === true || i.data.artifactKind === Lk || vt(target.slug)?.cowritten === true || vt(target.slug)?.artifactKind === Lk;
    let typeLocked = J_e(target.slug, i.data.type);
    let outsideOrg = FNe(i.data.perm?.role === "owner", ICe(i.data.outsideWriter), vt(target.slug)?.outsideWriter);
    return {
        kind: "ok",
        target,
        ver: i.ver,
        assetToken: i.assetToken,
        publicRead,
        relay: F && !publicRead,
        frameContent: !F && !publicRead && FGt(i.data),
        credentials,
        agentDirect,
        cowritten: R,
        typeLocked,
        writerClass: yae(i.data.perm?.role),
        foreign: i.data.authoredByOthers === true || vt(target.slug)?.authoredByOthers === true || i.data.perm?.role !== "owner" || R || typeLocked || outsideOrg,
        outsideOrg,
        orgRelation: R4r(i),
        livePaths: lvn(i.data).map((w)=>w.path),
        source: C4r(i),
        ...typeof i.data.title === "string" && {
            title: i.data.title
        },
        ...i.data.favicon !== undefined && {
            favicon: i.data.favicon
        },
        ...i.data.publishPreconditions === true && {
            publishPreconditions: true
        },
        filesCounted: typeof i.data.fileCount === "number" && Number.isSafeInteger(i.data.fileCount) && i.data.fileCount > 0,
        reused: i.reused === true
    };
}
async function I(e, n, c, maxContentLength, r, retryBudget, l = true, F = false) {
    let s = (u, _)=>v(c, u, _, l);
    let i = (status)=>({
            kind: "status",
            status
        });
    let { target, assetToken, relay } = e;
    let { host, base, headers } = BGt(target);
    let B = ()=>{
        ee().contentHostEgressDenied.add(target.env);
        return s("egress_blocked", `this environment's network allowlist blocks ${host}, so the file cannot be fetched (access to the artifact itself is fine). ${e.publicRead ? `Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${jGt(target.env)}` : a.CLAUDE_CODE_REMOTE ? "This is a restriction of where this session runs; retrying from here will not help." : `To allow it, add *.frame.${target.env === "staging" ? "staging." : ""}claudeusercontent.com to the environment's allowed domains.`}`);
    };
    let L = (u, _)=>{
        t(`[artifact] ${c}: egress proxy denied (${_})`);
        return s("egress_denied", `artifact content fetch refused by the environment's egress proxy (${u})`);
    };
    let A = false;
    let S;
    if (e.frameContent && assetToken !== undefined) {
        try {
            S = await UGt(target.slug, n, {
                token: assetToken,
                timeout,
                maxContentLength,
                signal: r,
                credentials: e.credentials
            });
        } catch (error) {
            if (Oa(error) || error instanceof Ye) {
                throw error;
            }
            if (F) {
                return i(0);
            }
            return s("request_error", `the content fetch failed in transit, timed out, or exceeded the ${M(maxContentLength)} limit`);
        }
        A = S.kind === "answer";
    }
    let o;
    try {
        if (S?.kind === "answer") {
            o = S;
        } else if (relay) {
            if (assetToken === undefined) {
                return s("internal", "internal error: a public artifact read was routed where it cannot be served — this is a bug in this build; do not retry");
            }
            let u = await $Gt(target.slug, n, {
                token: assetToken,
                timeout,
                maxContentLength,
                signal: r,
                retryBudget
            });
            if (!u.ok) {
                return s(u.reason.replace(/-/g, "_"), u.reason === "no-auth" ? tYe(u.detail) : `artifact content is unreachable from this session (${u.reason})`);
            }
            o = {
                status: u.status,
                headers: u.response.headers,
                data: u.data
            };
        } else {
            let u = assetToken === undefined ? "" : `?__frame_t=${encodeURIComponent(assetToken)}`;
            let _ = await Wa.get(`${base}${n}${u}`, {
                signal: r,
                timeout,
                responseType: "arraybuffer",
                maxRedirects: 0,
                maxContentLength,
                validateStatus: ()=>true,
                ...headers && {
                    headers
                }
            });
            if (rF(_.status, _.headers)) {
                return B();
            }
            let C = QQ(_.headers);
            if (C !== undefined && (_.status < 200 || _.status >= 300)) {
                return L(`HTTP ${_.status}`, C);
            }
            o = {
                status: _.status,
                headers: _.headers,
                data: _.data
            };
        }
    } catch (error) {
        if (Oa(error) || error instanceof Ye) {
            throw error;
        }
        if (relay && !F) {
            JEe();
        }
        let _ = relay ? undefined : AO(error);
        if (_ !== undefined) {
            if (rF(_.connectStatus, _.headers)) {
                return B();
            }
            let C = QQ(_.headers);
            if (C !== undefined) {
                return L(mq(_.connectStatus), C);
            }
            let q = xat(_.headers);
            if (q !== undefined) {
                t(`[artifact] ${c}: proxy refused, marker ${q}`);
            }
            if (F) {
                return i(0);
            }
            return s("proxy_refused", `the proxy refused the connection to the artifact's content host (${mq(_.connectStatus)})`);
        }
        if (F) {
            return i(0);
        }
        return s("request_error", `the content fetch failed in transit, timed out, or exceeded the ${M(maxContentLength)} limit`);
    }
    if (F && o.status !== 200) {
        return i(o.status);
    }
    if (!relay && !A) {
        ee().contentHostEgressDenied.delete(target.env);
    }
    if (relay && MZe(o.status)) {
        return s("relay_unavailable", W);
    }
    if (relay && OZe(o.status, o.data)) {
        return s("network_off", `${IZe}; retrying from here will not help`);
    }
    if (relay && CK(o.status)) {
        return s(`http_${o.status}`, NGt(o.status));
    }
    if (relay) {
        JEe(o.status);
    }
    if (o.status === 404) {
        return {
            kind: "status",
            status: 404,
            frameNotFound: o.data !== undefined && o.data.byteLength <= 256 && r3(Buffer.from(o.data).toString("utf8"))
        };
    }
    if (assetToken === undefined && o.status === 403 && PCe(o.headers, JQ(o.headers, o.data, (u)=>u))) {
        return {
            kind: "status",
            status: 403
        };
    }
    let E = relay ? undefined : R$n({
        status: o.status,
        headers: o.headers,
        data: o.data,
        redact: (u)=>vZe(u, assetToken),
        label: `[artifact] ${c}`
    });
    if (E !== undefined) {
        return s(E, Rat[E]);
    }
    if (o.status === 401 || o.status === 403) {
        return s(`http_${o.status}`, relay ? "the cloud session's artifact mount refused the read — file reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused — the artifact may have been unshared or taken down");
    }
    if (o.status !== 200) {
        return s(`http_${o.status}`, `unexpected answer from the ${A ? "artifact service" : "content host"} (HTTP ${o.status})`);
    }
    if (relay) {
        Ate(tC);
    }
    let o_headers = o.headers;
    let O = relay || A ? hGe(o_headers) : o_headers?.["content-type"];
    let docSha256 = String(o_headers?.[Z] ?? "").toLowerCase();
    let Y = String(o_headers?.[J] ?? "");
    return {
        kind: "ok",
        status: 200,
        bytes: Buffer.from(o.data ?? new ArrayBuffer(0)),
        contentType: typeof O === "string" ? Qe(O, ";").trim().toLowerCase() : "",
        ...lD.test(docSha256) && {
            docSha256
        },
        .../^\d{1,15}$/.test(Y) && {
            docSeq: Number(Y)
        }
    };
}
async function H(e, n, c, h, r = true) {
    let d = await I(e, `/_f/${e.ver}/${K}`, n, Q + 1, c, h, r);
    if (d.kind !== "ok") {
        return d;
    }
    let l;
    try {
        l = te().safeParse(X(d.bytes.toString("utf8")));
    } catch  {
        return v(n, "bad_json", "the artifact service answered with something other than a file list", r);
    }
    if (!l.success || l.data.ver !== e.ver) {
        return v(n, "bad_shape", "the artifact service answered with a file list this version of the tool cannot read", r);
    }
    let F = Object.entries(l.data.files);
    if (F.length > bbt) {
        return v(n, "too_many", `the file list names more than ${bbt} files`, r);
    }
    return {
        kind: "ok",
        files: F.filter(([i])=>i.length <= dT && !/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(i) && Yc(i) && !QZn(i)).map(([path, y])=>({
                path,
                contentType: y.contentType,
                sizeBytes: y.size,
                sha256: y.sha256
            })).sort((i, y)=>{
            if (i.path < y.path) {
                return -1;
            }
            if (i.path > y.path) {
                return 1;
            }
            return 0;
        }),
        narrowed: l.data.narrowed === true
    };
}
async function yte(e, n, c, h = {}) {
    let r = await N(e, "file list", n, c, h);
    if (r.kind === "error") {
        return r;
    }
    let d = await H(r, "file list", n, gGe());
    if (d.kind === "error") {
        return d;
    }
    if (d.kind === "status") {
        if (d.status === 404 && !r.filesCounted && (!r.relay || d.frameNotFound === true)) {
            f("artifact_file_list", "single_page");
            return {
                kind: "error",
                reason: "single_page",
                message: "this artifact is a single page with no separately published files, so there is no file list; read the page itself",
                ver: r.ver,
                cowritten: r.cowritten,
                typeLocked: r.typeLocked
            };
        }
        if (r.publicRead && d.status === 403) {
            if (await ie(r, n)) {
                f("artifact_file_list", "single_page");
                return {
                    kind: "error",
                    reason: "single_page",
                    message: "this public artifact is a single page with no separately published files, so there is no file list; read the page itself",
                    ver: r.ver,
                    cowritten: r.cowritten,
                    typeLocked: r.typeLocked
                };
            }
            return v("file list", "public_refused", "this public artifact's files are not available to readers outside its organization right now — it may no longer be public, or it was taken down");
        }
        m("artifact_file_list", `http_${d.status}`);
        return v("file list", `http_${d.status}`, r.relay ? "not found through this cloud session's artifact mount — this artifact is a single page with no separate files, or file reads are not enabled for this session yet" : "the artifact has published files, but the artifact service does not offer their list yet; retrying from here will not help", false);
    }
    g("artifact_file_list", {
        relay: r.relay,
        files: d.files.length,
        ...r.agentDirect && {
            agent_direct: true
        },
        ...r.publicRead && {
            public: true
        },
        ...r.reused && {
            boot_reused: true
        }
    });
    return {
        kind: "ok",
        ver: r.ver,
        files: d.files.map((l)=>{
            if (r.livePaths.includes(l.path)) {
                return {
                    ...l,
                    live: true
                };
            }
            return l;
        }),
        relay: r.relay,
        agentDirect: r.agentDirect,
        cowritten: r.cowritten,
        typeLocked: r.typeLocked,
        writerClass: r.writerClass,
        foreign: r.foreign,
        outsideOrg: r.outsideOrg,
        publicRead: r.publicRead,
        narrowed: r.publicRead && d.narrowed,
        ...r.title !== undefined && {
            title: r.title
        },
        ...r.favicon !== undefined && {
            favicon: r.favicon
        },
        ...r.publishPreconditions === true && {
            publishPreconditions: true
        }
    };
}
function z(e) {
    return {
        ver: e.ver,
        relay: e.relay,
        agentDirect: e.agentDirect,
        cowritten: e.cowritten,
        typeLocked: e.typeLocked,
        writerClass: e.writerClass,
        foreign: e.foreign,
        outsideOrg: e.outsideOrg,
        ...e.orgRelation === "external" && {
            external: true
        },
        offOrgRamp: x4r(e.orgRelation),
        publicRead: e.publicRead,
        ...e.title !== undefined && {
            title: e.title
        }
    };
}
function G(e, status, c = true) {
    return v("file read", `http_${status}`, e.relay ? `not found through this cloud session's artifact mount \u2014 no file is published at that path in the served version, or file reads are not enabled for this session yet; action "list_files" shows the paths` : e.publicRead ? 'this public artifact serves no file at that path to readers outside its organization — action "list_files" shows the paths it does serve (or the artifact is no longer public)' : 'no file is published at that path in the served version — action "list_files" shows the paths', c);
}
async function ie(e, n) {
    let { base, headers } = BGt(e.target);
    try {
        return (await Wa.head(`${base}/_f/${e.ver}/`, {
            signal: n,
            timeout: ier,
            maxRedirects: 0,
            validateStatus: ()=>true,
            ...headers && {
                headers
            }
        })).status === 200;
    } catch (error) {
        if (Oa(error) || error instanceof Ye) {
            throw error;
        }
        return false;
    }
}
async function V(e, key, c, h, r, d = true) {
    let l = key.split("/").map(encodeURIComponent).join("/");
    let F = e.source ? await I(e, P4r(e.ver, l), "file read", vge, c, h, d, true) : undefined;
    if (F?.kind === "error") {
        return F;
    }
    let s = F?.kind === "ok" ? F : await I(e, `/_f/${e.ver}/${l}`, "file read", vge, c, h, d);
    let i = s === F;
    if (s.kind !== "ok") {
        return s;
    }
    if (!gx.test(s.contentType)) {
        return v("file read", "unexpected_type", "the content host served the file with a type this tool does not save", d);
    }
    if (s.bytes.length >= vge) {
        return v("file read", "size", `the file exceeds the ${M(vge)} limit`, d);
    }
    let y = (S)=>createHash("sha256").update(S).digest("hex");
    let s_bytes = s.bytes;
    let sha256 = y(s_bytes);
    let asPublished = true;
    let listing = "unused";
    let docVerified = false;
    let docSeq;
    let listedSha256;
    let A = e.livePaths.includes(key);
    if (s.contentType === "text/html") {
        let S = await r();
        let o = S.kind === "ok" ? S.files.find((E)=>E.path === key)?.sha256 : undefined;
        listedSha256 = o;
        if (o === undefined) {
            listing = A ? "live" : "missing";
            asPublished = false;
        } else if (sha256 === o) {
            listing = "verified";
        } else {
            let E = i ? undefined : c2t(s.bytes, (T)=>y(T) === o);
            if (E !== undefined) {
                s_bytes = E;
                sha256 = o;
                listing = "verified";
            } else {
                listing = A ? "live" : "unverified";
                asPublished = false;
            }
        }
    }
    return {
        kind: "ok",
        path: key,
        bytes: s_bytes,
        contentType: s.contentType,
        sha256,
        asPublished,
        listing,
        ...listedSha256 !== undefined && {
            listedSha256
        },
        docVerified,
        ...docSeq !== undefined && {
            docSeq
        },
        ...i && {
            source: true
        }
    };
}
async function eGt(e, n, c, h, r = {}) {
    let d = JG(n);
    if ("errMsg" in d) {
        return v("file read", "invalid_path", d.errMsg);
    }
    let l = await N(e, "file read", c, h, r);
    if (l.kind === "error") {
        return l;
    }
    let F = gGe();
    let s = await V(l, d.key, c, F, ()=>H(l, "file read", c, F, false));
    if (s.kind === "error") {
        return s;
    }
    if (s.kind === "status") {
        return G(l, s.status);
    }
    return {
        ...s,
        ...z(l)
    };
}
const ne = 4;
const se = n3;
async function u6o(e, n, c, h, { byteBudget = se, ...rest } = {}) {
    let l = await N(e, "file read", c, h, rest);
    if (l.kind === "error") {
        return l;
    }
    let F = gGe();
    let s;
    let i = ()=>s ??= H(l, "file read", c, F, false).then((b)=>{
            if (b.kind !== "ok") {
                s = undefined;
            }
            return b;
        });
    let y = 0;
    return {
        kind: "ok",
        files: await ae(n, ne, async (path)=>{
            let k = JG(path);
            if ("errMsg" in k) {
                return {
                    ...v("file read", "invalid_path", k.errMsg, false),
                    path
                };
            }
            if (y >= byteBudget) {
                return {
                    kind: "error",
                    reason: "batch_budget",
                    message: `not fetched: the files read before it in this call already hold ${Math.floor(byteBudget / 1048576)}MB, the most one read carries \u2014 read it, and any after it, in another call`,
                    path: k.key
                };
            }
            if (l.livePaths.includes(k.key)) {
                return {
                    kind: "error",
                    reason: "live_path",
                    message: "this is a live file: read it by itself with `path`, which returns its current state",
                    path: k.key
                };
            }
            let w = await V(l, k.key, c, gGe(), i, false);
            if (w.kind === "status") {
                return {
                    ...G(l, w.status, false),
                    path: k.key
                };
            }
            if (w.kind === "ok") {
                y += w.bytes.length;
            }
            if (w.kind === "error") {
                return {
                    ...w,
                    path: k.key
                };
            }
            return w;
        }),
        ...z(l)
    };
}
async function ae(e, n, c) {
    let h = Array(e.length);
    let r = 0;
    let d = async ()=>{
        while(r < e.length){
            let l = r++;
            h[l] = await c(e[l]);
        }
    };
    await Promise.all(Array.from({
        length: Math.min(n, e.length)
    }, ()=>d()));
    return h;
}
export { bbt, $qr, yte, eGt, u6o };
