import { m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { Oa } from "/$bunfs/root/chunk-9fa34ggx.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { GE } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { hc } from "/$bunfs/root/chunk-223dyewd.js";
import { gn, gm, rxe, He, Vt, mSe, Ua, xn, hO, yN, kkr, dl, y1, y_, Men } from "/$bunfs/root/chunk-k3tkc302.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { Sm } from "/$bunfs/root/chunk-gs3dthpm.js";
import { Y4, GD, ruo, ixt, rJt, ouo } from "/$bunfs/root/chunk-y9ay3abt.js";
import { md } from "/$bunfs/root/chunk-qv4dnw41.js";
import { Xre, xxt, Cg } from "/$bunfs/root/chunk-8yfbbt6t.js";
import { Bd } from "/$bunfs/root/chunk-0sswwkdg.js";
import { im, OE } from "/$bunfs/root/chunk-ezbcjpga.js";
import { uE } from "/$bunfs/root/chunk-sqysdndt.js";
import { vt, _xt, Q4, Pu, Q4e, OT, wc } from "/$bunfs/root/chunk-0vgmtssp.js";
import { cg, Eb, Xg, de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { iGt, w6o } from "/$bunfs/root/chunk-zs8skt49.js";
import { s$, uGt } from "/$bunfs/root/chunk-ngnr7vez.js";
import { wte, HS, YEe, TK, _Ze } from "/$bunfs/root/chunk-krjtgnpw.js";
import { W5, qD } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { U_t, bK, DU, V6, r$, dte, _p, dE } from "/$bunfs/root/chunk-cyq0svt5.js";
import { HU, N_t } from "/$bunfs/root/chunk-tkmyd255.js";
import { iD, xEe } from "/$bunfs/root/chunk-zan77tdd.js";
import { l2r, cE, Aze } from "/$bunfs/root/chunk-37qzy58m.js";
import { Fbt, CKr, RKr, xKr, dk, TGt, AGt } from "/$bunfs/root/chunk-vn24m8wp.js";
import { Xzt, LC, Qf, cae, pge } from "/$bunfs/root/chunk-b099rff3.js";
import { nX } from "/$bunfs/root/chunk-3jkdngg3.js";
import { hW, TM } from "/$bunfs/root/chunk-1k3a7x55.js";
import { pr } from "/$bunfs/root/chunk-e00q6jpd.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { join } from "path";
const w = null;
function H1o(e, t) {
    return e.getAppState().frameUrls[t];
}
function nht(e, reason) {
    if (e) {
        return {
            type: "safetyCheck",
            reason,
            classifierApprovable: false
        };
    }
    return {
        type: "other",
        reason
    };
}
function tg(e, t) {
    let title = y1(vt(e.slug)?.title || TM(t.getAppState().frameUrls).find(([, r])=>r.title && Ua(r.url) === e.slug)?.[1].title);
    return {
        url: xn(e),
        ...title && {
            title
        }
    };
}
function D1o(e, t, n) {
    let r = `${hW}${t.slug}`;
    let rowKey = r;
    let alreadyShown = false;
    let lastOpenFailed = false;
    e.setAppState((o)=>{
        let [l, u] = Object.entries(o.frameUrls).find(([, d])=>Ua(d.url) === t.slug) ?? [];
        alreadyShown = l !== undefined && u?.dismissed !== true;
        rowKey = l !== undefined && l !== r ? l : r;
        lastOpenFailed = o.frameOpenFailedPath === rowKey;
        if (l !== undefined && u?.dismissed === true) {
            let { dismissed, ...rest_1 } = u;
            return {
                ...o,
                frameUrls: {
                    ...o.frameUrls,
                    [l]: rest_1
                }
            };
        }
        if (alreadyShown && o.frameUrls[r] === undefined) {
            return o;
        }
        let { [r]: p, ...rest } = o.frameUrls;
        return {
            ...o,
            frameUrls: {
                ...rest,
                [r]: {
                    url: xn(t),
                    updatedAt: Date.now(),
                    ...(n ?? p?.title) !== undefined && {
                        title: n ?? p?.title
                    }
                }
            }
        };
    });
    return {
        rowKey,
        alreadyShown,
        lastOpenFailed
    };
}
function bfn(e, frameOpenFailedPath, n) {
    e.setAppState((r)=>{
        if (n) {
            if (r.frameOpenFailedPath === frameOpenFailedPath) {
                return {
                    ...r,
                    frameOpenFailedPath: null
                };
            }
            return r;
        }
        if (r.frameOpenFailedPath === frameOpenFailedPath) {
            return r;
        }
        return {
            ...r,
            frameOpenFailedPath,
            frameOpenFailedSeen: false
        };
    });
}
function jJe(e, t) {
    if (wc(e) && DU(e) && !r$(e)) {
        return " (yours; a co-writer has also published to it)";
    }
    if (t === "files" && wc(e) && V6(e)) {
        return " (yours; its files come from an Artifact type its publisher wrote)";
    }
    return Pu(e);
}
function P5n(e, t) {
    if (wc(e) && DU(e) && !r$(e)) {
        return " [ownership: yours, co-written: a non-owner has also published to it]";
    }
    if (t === "files" && wc(e) && V6(e)) {
        return Men;
    }
    return `${OT(e)}${Q4(e)}`;
}
function P(e) {
    return _([
        e.path,
        e.from.slug,
        e.from.path,
        e.from.ver ?? ""
    ]);
}
function VFr(e) {
    return D(e.map(P)).sort().join(`
`);
}
function I5n(e, t) {
    return (e ?? "") === VFr(t);
}
function WJe(e, t) {
    let { mode, modeBeforeRewrite } = de(e);
    if (mode === "auto" || modeBeforeRewrite === "auto") {
        return false;
    }
    return W5(e.getAppState(), mode === "plan" ? "artifactAssetUploadHumanConsentSlugs" : "artifactAssetUploadConsentSlugs", t);
}
function O5n(e, t, n, r, i, a, s = false) {
    let o = i && !r$(vt(n.slug));
    if (HU(t) && (o || s) && r && !bK(e, t) && !xEe(t, n, wc(vt(n.slug))) && (cg(t) || Eb(t) || iD(t))) {
        m("artifact_cowritten_consent", "refused_unasked", {
            assets: a === "assets",
            ...!o && {
                from_type: true
            }
        });
        throw new He(o ? `a co-writer has published to this artifact, so its ${a} are someone else's content \u2014 nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)` : `this artifact was created from an Artifact type, so its ${a} are the type publisher's content \u2014 nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)`, `${a === "files" ? "file" : "asset"}_${o ? "cowritten" : "from_type"}_unasked`);
    }
}
function TUt(e, t, retryUrl) {
    m("artifact_outside_org_consent", "refused_unasked", {
        assets: t === "asset_copy"
    });
    return new He(N_t(e, true, t === "file_copy" ? {
        retryUrl
    } : undefined), `${t}_outside_org_unasked`);
}
function Sfn(e, t, n) {
    if (e === Xre) {
        T(t, n);
    }
}
function T(e, t) {
    m("artifact_outside_org_consent", "refused_unasked", {
        assets: t !== "files"
    });
    throw new He(N_t(e), `${t === "files" ? "file" : "asset"}_outside_org_unasked`);
}
function Qje(e) {
    let { assetId, outDir } = dte(e);
    if (assetId === undefined || !gm.test(assetId)) {
        return;
    }
    let r;
    let i = false;
    try {
        if (outDir === undefined || outDir === "") {
            let { url } = e;
            let s = typeof url === "string" ? Vt(url) : null;
            let o = s !== null ? nX(s.slug) : null;
            i = o !== null;
            r = o ?? se();
        } else {
            r = et(outDir);
        }
    } catch  {
        return;
    }
    return {
        stem: join(r, assetId),
        ...i && {
            defaultDir: true
        }
    };
}
function bA(e, t = "", n = "url") {
    if (mSe(e) === undefined) {
        return;
    }
    let r = Vt(e);
    let i = r !== null ? ` (${xn(r)})` : "";
    return {
        result: false,
        message: `\`${n}\` names a path inside the artifact \u2014 pass the artifact's own URL${i} as \`${n}\`${t}.`,
        errorCode: 4
    };
}
function RG(e) {
    let t = (l)=>{
        let u = e[l];
        if (typeof u === "string") {
            return u;
        }
    };
    let e_data = e.data;
    let data = e_data !== null && typeof e_data === "object" && !Array.isArray(e_data) ? e_data : undefined;
    let { replace_all, if_version, query } = e;
    let query_1 = query !== null && typeof query === "object" && !Array.isArray(query) ? query : undefined;
    return {
        dbOp: t("db_op"),
        collection: t("collection"),
        docId: t("doc_id"),
        data,
        query: query_1,
        outDir: t("out_dir"),
        filePath: t("file_path"),
        strReplace: {
            field: t("field"),
            oldStr: t("old_str"),
            newStr: t("new_str"),
            replaceAll: replace_all === undefined ? undefined : GE(replace_all) === true
        },
        ifVersion: M5n(if_version) ? if_version : undefined
    };
}
function M5n(e) {
    return typeof e === "number" && Number.isSafeInteger(e) && e >= 1;
}
const qFr = [
    "set",
    "update",
    HS,
    "delete"
];
function iK(e) {
    let t = KFr(e);
    if (t === im) {
        return [];
    }
    return t;
}
function KFr(e) {
    let t = OE(e.writes);
    if (t === undefined || t === im) {
        return t ?? [];
    }
    return t.map((n)=>{
        let r = (f)=>{
            if (n !== null && typeof n === "object") {
                return n[f];
            }
        };
        let i = {
            db_op: r("op"),
            collection: r("collection"),
            doc_id: r("doc_id"),
            data: r("data"),
            file_path: r("file_path"),
            if_version: r("if_version")
        };
        let { dbOp, collection, docId, data, filePath, ifVersion } = RG(i);
        return {
            op: dbOp,
            collection,
            docId,
            data,
            filePath,
            ifVersion,
            ifVersionGiven: i.if_version !== undefined
        };
    });
}
function x(e) {
    if (e.db_op === dk) {
        return iK(e).map((t)=>t.ifVersion);
    }
    return [];
}
function YFr(e) {
    return RG(e).ifVersion !== undefined || x(e).some((t)=>t !== undefined);
}
function H5n(e) {
    return typeof e === "object" && e !== null && e.action === "write_db" && e.db_op === dk;
}
function AUt(e) {
    return kkr(dl(Cg(e.ruleValue.ruleContent ?? "", {
        max: 1024
    }).replace(y_, " ")));
}
function nv(e) {
    let t = e?.type_url;
    if (typeof t === "string") {
        return t;
    }
}
function zJe(e) {
    let t = e?.type;
    if (typeof t === "string") {
        return t;
    }
}
function D5n(e) {
    return `type_url: not an Artifact type's link: ${e} \u2014 pass a ${rxe()} link from a list_types result`;
}
function L5n(e) {
    if (e.auto_open === "after_first_write") {
        return "after_first_write";
    }
    return "at_create";
}
function Fve(e) {
    let { outDir, collection } = RG(e);
    if (outDir === undefined) {
        return {
            kind: "inline"
        };
    }
    let outDir_1;
    try {
        outDir_1 = et(outDir === "" ? se() : outDir);
    } catch  {
        return {
            kind: "unresolvable"
        };
    }
    let dir = collection !== undefined && wte.test(collection) ? join(outDir_1, ...collection.split("/").map(XFr)) : outDir_1;
    return {
        kind: "dir",
        outDir: outDir_1,
        dir
    };
}
function XFr(e) {
    let t = e.replaceAll("~", "@");
    let n = O();
    if (n === "windows" || n === "wsl") {
        return t.replaceAll(":", "%3A");
    }
    return t;
}
function JFr(e, t) {
    return `${e}\x00${_n(t)}`;
}
const L1o = {
    changed: "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) — retry the write so it is checked again",
    via_link: "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking — pass the resolved path, or copy the file under the working directory first",
    hard_link: "file_path is one of several hard links to its file, and this approval did not examine that — copy the file to a fresh path under the working directory and pass the copy",
    read_denied: "reading where file_path resolves is blocked by a Read permission rule — the write was not attempted",
    no_identity: AGt,
    not_a_file: TGt,
    size: `file_path is empty or larger than ${_Ze} bytes \u2014 write_db reads at most that much JSON, and the document must serialize to ${TK} bytes or fewer`
};
function GJe(e) {
    return typeof e === "object" && e !== null && e.action === "read_db" && typeof e.out_dir === "string";
}
function rht(e) {
    if (typeof e !== "object" || e === null || e.action !== "write_db") {
        return false;
    }
    if (typeof e.file_path === "string") {
        return true;
    }
    return iK(e).some((t)=>t.filePath !== undefined);
}
const QFr = 3000;
function N5n(e) {
    try {
        return Buffer.byteLength(_(e), "utf8");
    } catch  {
        return null;
    }
}
const F = 1024;
const N1o = 49152;
const I = /data:[a-z0-9.+-]+\/[a-z0-9.+-]+(?:;[a-z0-9=.+-]+)*;base64,[A-Za-z0-9+/_-]{1000,}/gi;
const R = /^[A-Za-z0-9+/_-]+$/;
const A = /^[A-Za-z0-9+/_-]+={0,2}$/;
const v = new Set([
    60,
    64,
    76
]);
function N(e) {
    let t = e.trim();
    let n = t.indexOf(`
`);
    let r = t.slice(n + 1, n + 513);
    if (!/[A-Z]/.test(r) || !/[a-z]/.test(r) || !/[0-9]/.test(r)) {
        return false;
    }
    if (n === -1) {
        return A.test(t);
    }
    let i = t.slice(0, n).replace(/\r$/, "");
    if (!R.test(i)) {
        return false;
    }
    let a = t.slice(n + 1).replaceAll(`\r
`, `
`).split(`
`);
    let s = a.pop() ?? "";
    let o = a[0]?.length ?? i.length;
    return v.has(o) && i.length <= o && s.length <= o && A.test(s) && a.every((l)=>l.length === o && R.test(l));
}
function U(e) {
    if (N(e)) {
        return e.length;
    }
    let t = 0;
    for (let n of e.matchAll(I)){
        t += n[0].length;
    }
    return t;
}
function $1o(e) {
    let strings = 0;
    let chars = 0;
    let r = [
        ...e
    ];
    while(r.length > 0){
        let i = r.pop();
        if (typeof i === "string") {
            let a = i.length >= F ? U(i) : 0;
            if (a > 0) {
                strings++;
                chars += a;
            }
        } else if (typeof i === "object" && i !== null) {
            for (let a of Object.values(i)){
                r.push(a);
            }
        }
    }
    return {
        strings,
        chars
    };
}
function F1o(e, t, n, r, i, a) {
    let s = s$(e, n);
    let o = i.get(e);
    let l = `${o ?? "viewer"}${!s && a.has(e) ? ", outside your organization" : ""} ${e.slice(0, 8)}`;
    let u = t === "assistant" ? s ? "Claude (via the user)" : `Claude (via ${l})` : t !== undefined && t !== "" ? `viewer ${e.slice(0, 8)} (unverified lane)` : s ? o !== undefined ? `the user (${o})` : "the user" : l;
    if (r) {
        return `${u}, posted by the artifact`;
    }
    return u;
}
const U1o = 5;
const ZFr = 10;
function $5n(e, t) {
    let n = e.length > t ? ` and ${e.length - t} more` : "";
    return `${e.slice(0, t).join(", ")}${n}`;
}
const h = (e)=>e.outsideAsk || e.flaggedOutside;
function wfn(e) {
    let [t] = e;
    if (e.length === 1 && t !== undefined) {
        let s = [];
        if (h(t)) {
            s.push(t.resolvesOutside ? "reaches, through a symbolic link, a file outside the folders this session can read" : "is outside the folders this session can read");
        }
        if (t.linkNote !== "" && !h(t)) {
            s.push("is a hard link to a file that may also live elsewhere on this machine");
        }
        if (s.length === 0) {
            return "";
        }
        return ` The local file "${hc(t.askPath, 256)}" ${s.join(" and ")}.`;
    }
    let n = (group)=>` (${$5n(group.map((o)=>`"${hc(o.askPath, 256)}"`), ZFr)})`;
    let r = [
        {
            group: e.filter((s)=>h(s) && !s.resolvesOutside),
            one: "is outside the folders this session can read",
            many: "are outside the folders this session can read"
        },
        {
            group: e.filter((s)=>s.resolvesOutside),
            one: "reaches, through a symbolic link, a file outside the folders this session can read",
            many: "reach, through symbolic links, files outside the folders this session can read"
        },
        {
            group: e.filter((s)=>s.linkNote !== "" && !h(s)),
            one: "is a hard link to a file that may also live elsewhere on this machine",
            many: "are hard links to files that may also live elsewhere on this machine"
        }
    ].filter((s)=>s.group.length > 0);
    let [i] = r;
    if (i === undefined) {
        return "";
    }
    if (r.length === 1 && i.group.length === e.length) {
        return ` ${e.length === 2 ? "Both" : `All ${e.length}`} local files being copied ${i.many}${n(i.group)}.`;
    }
    let a = r.map((s)=>`${s.group.length} ${s.group.length === 1 ? s.one : s.many}${n(s.group)}`);
    return ` Of the ${e.length} local files being copied, ${a.join("; ")}.`;
}
function Rie(e) {
    if (e === undefined) {
        return "";
    }
    try {
        let t = _(e);
        return `${Cg(t, {
            max: 300
        }).replace(y_, " ")}${vfn(t, 300)}`;
    } catch  {
        return "(unserializable payload)";
    }
}
function vfn(e, t) {
    if (Array.from(e.slice(0, 2 * t + 2)).length <= t) {
        return "";
    }
    return `\u2026 [truncated \u2014 ${Buffer.byteLength(e, "utf8")} bytes total]`;
}
function B1o({ field, oldStr, newStr, replaceAll }) {
    let i = (a, max)=>{
        if (a === undefined) {
            return "(missing)";
        }
        let o = _(a);
        return `${Cg(o, {
            max
        }).replace(y_, " ").replace(hO, "'").replace(yN, "'")}${vfn(o, max)}`;
    };
    return `field ${i(field, YEe)}: replace ${replaceAll === true ? "every " : ""}${i(oldStr, 200)} with ${i(newStr, 200)}`;
}
function eUr(e) {
    return e !== null && typeof e === "object" && e.live === false && Object.keys(e).length === 1;
}
const k = new Set([
    ...ixt,
    ...rJt
]);
function g(e, t) {
    if (typeof t === "string") {
        return k.has(GD(t));
    }
    return typeof e === "string" && k.has(Y4(e) ?? "");
}
function tUr(e) {
    if (typeof e !== "object" || e === null) {
        return 0;
    }
    let { file_path, files } = e;
    let r = g(file_path) ? 1 : 0;
    let i = OE(files);
    if (i === im) {
        return im;
    }
    if (i !== undefined) {
        for (let a of i){
            r += g(typeof a === "string" ? a : a?.path, a?.contentType) ? 1 : 0;
        }
    } else if (files !== null && typeof files === "object") {
        for (let [a, s] of Object.entries(files)){
            if (s === null || eUr(s)) {
                continue;
            }
            let o = typeof s === "object" && typeof s.artifact === "string" ? s.path : undefined;
            r += (o !== undefined ? g(a) || g(o) : g(a, s?.contentType)) ? 1 : 0;
        }
    }
    return r;
}
const j = new Set([
    ...ouo,
    ...ruo
]);
function c(e, t, n) {
    if (typeof e !== "string") {
        return false;
    }
    let r = Y4(e);
    if (r === undefined || !n.has(GD(r))) {
        return false;
    }
    return t === undefined || typeof t === "string" && n.has(GD(t));
}
function B(e, path, n) {
    return c(e, undefined, n) && c(path, undefined, n);
}
function S(e) {
    return e.live !== undefined || e.reseed !== undefined;
}
function j1o(e) {
    return e !== null && typeof e === "object" && Object.hasOwn(e, "mcp");
}
function nUr(e, t) {
    if (typeof e !== "object" || e === null) {
        return false;
    }
    let n = t.documents ? j : ouo;
    let { file_path, files } = e;
    if (S(e) || !c(file_path, undefined, n)) {
        return false;
    }
    if (files === undefined) {
        return true;
    }
    let a = OE(files);
    if (a === im) {
        return false;
    }
    if (a !== undefined) {
        return a.every((s)=>{
            if (typeof s === "string") {
                return c(s, undefined, n);
            }
            return s !== null && typeof s === "object" && !S(s) && c(s.path, s.contentType, n);
        });
    }
    if (files === null || typeof files !== "object") {
        return false;
    }
    return Object.entries(files).every(([s, o])=>{
        if (o === null) {
            return true;
        }
        if (typeof o === "string") {
            return c(s, undefined, n);
        }
        if (typeof o !== "object" || Array.isArray(o)) {
            return false;
        }
        if (S(o)) {
            return false;
        }
        let l = o;
        if (typeof l.from === "string" && l.artifact !== undefined) {
            return false;
        }
        if (typeof l.artifact === "string") {
            return B(s, o.path, n);
        }
        return c(s, o.contentType, n);
    });
}
function rUr() {
    return pge(LC().shape.action, "read_file");
}
function oUr() {
    return pge(LC().shape.action, "delete");
}
function VJe() {
    return pge(LC().shape.action, "open");
}
function oht() {
    return pge(LC().shape.action, "pin");
}
function CUt() {
    return pge(LC().shape.action, "share");
}
function sUr() {
    return "version" in LC().shape;
}
function W1o(e, t) {
    if (e?.title === undefined) {
        return;
    }
    if (t === undefined) {
        return e.title;
    }
    let n = Ua(t);
    if (n !== null && Ua(e.url) === n) {
        return e.title;
    }
}
const z1o = new Set([
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".svg",
    ".webp"
]);
function Zje(e) {
    if (de(e).mode === "plan") {
        return "plan";
    }
    if (iD(e)) {
        return "cowork_no_surface";
    }
    if (Xg(e)) {
        return "no_surface";
    }
    return null;
}
function C(e, t, n) {
    let r = n ? "Copying from this artifact is" : e.ruleValue.toolName === pr ? "Artifact reads are" : "Reading this artifact is";
    let i = t === "" ? "" : ` \u2014 ${t}`;
    return `${r} blocked by ${Aze(e)}${i}`;
}
function IC(e, t = "", n = false) {
    return {
        behavior: "deny",
        message: `${C(e, t, n)}.`,
        decisionReason: {
            type: "rule",
            rule: e
        }
    };
}
function xG(e, t, n, r, i) {
    let a = cE(de(e), t, n, "deny", i);
    if (a === null) {
        return undefined;
    }
    return new He(C(a, r, i.copySource === true), "read_denied");
}
function tX(e) {
    if (e.ruleValue.toolName === pr) {
        return ` (your ${pr} ask rule covers artifact reads)`;
    }
    return ` (your ${e.ruleValue.toolName} ask rule covers this url)`;
}
function RUt(e) {
    if (!cae() || e === null || e === undefined) {
        return false;
    }
    if (e.action !== undefined && e.action !== "publish") {
        return false;
    }
    let t = xxt(e);
    if (t !== undefined) {
        return L(t) && t.room !== undefined;
    }
    let n = nv(e);
    if (n !== undefined) {
        let a = Vt(n);
        return a !== null && U_t(a.slug);
    }
    let r = typeof e.url === "string" ? Vt(e.url) : null;
    let i;
    try {
        i = r !== null ? vt(r.slug) : typeof e.file_path === "string" ? _xt(et(e.file_path)) : undefined;
    } catch  {
        i = undefined;
    }
    return i?.capabilities?.room !== undefined;
}
const F5n = {
    threadIds: new Set,
    commentIds: new Set
};
function iUr(e) {
    return {
        url: Sm(e.slug),
        release: e.current
    };
}
function JO(e) {
    let t = typeof e === "string" ? Vt(e) : null;
    if (!t) {
        throw new He(`not an artifact URL: ${String(e)}`, "invalid_url");
    }
    return t;
}
function Efn(e, t, n, r) {
    if (typeof n !== "object" || n === null || !H5n(n)) {
        return;
    }
    let { writes, ...rest } = n;
    for (let [index, o] of iK(n).entries()){
        let l = l2r(t, e, {
            ...rest,
            db_op: o.op,
            collection: o.collection,
            doc_id: o.docId,
            ...o.data !== undefined && {
                data: o.data
            },
            ...o.filePath !== undefined && {
                file_path: o.filePath
            }
        }, r);
        if (l) {
            return {
                index,
                rule: l
            };
        }
    }
}
function U5n(e, t, n, r) {
    if (typeof n !== "object" || n === null || n.db_op !== HS) {
        return;
    }
    return l2r(t, e, {
        ...n,
        db_op: "update"
    }, r) ?? undefined;
}
function JH(e) {
    if (e.ruleValue.ruleContent === undefined) {
        return e.ruleValue.toolName;
    }
    return `${e.ruleValue.toolName}(${AUt(e)})`;
}
function kfn(e, t, n) {
    let r = Efn(e, t, n, "deny");
    if (r === undefined) {
        return undefined;
    }
    return {
        behavior: "deny",
        message: `Permission to use ${gn} has been denied by your rule ${JH(r.rule)} (writes[${r.index}] of this batch matches it), so nothing in the batch was written.`,
        decisionReason: {
            type: "rule",
            rule: r.rule
        }
    };
}
function G1o(e, t, n) {
    let r = U5n(e, t, n, "deny");
    if (r === undefined) {
        return undefined;
    }
    return {
        behavior: "deny",
        message: `Permission to use ${gn} has been denied by your rule ${JH(r)} (a str_replace is an update of one field), so nothing was written.`,
        decisionReason: {
            type: "rule",
            rule: r
        }
    };
}
function V1o(e, t, n, r) {
    let i = Efn(e, n, r, "ask");
    if (i === undefined || typeof r !== "object" || r === null) {
        return;
    }
    let a = Reflect.get(r, "url");
    let s = typeof a === "string" ? Vt(a) : null;
    return {
        behavior: "ask",
        message: `Claude wants to write a batch to this artifact's database, and writes[${i.index}] matches your ask rule ${JH(i.rule)} \u2014 the full permission check could not complete, so approving covers only this call.`,
        updatedInput: {
            ...r,
            [_p]: false,
            [dE]: s === null ? null : tg(s, t)
        },
        suppressAlwaysAllowRule: true,
        decisionReason: {
            type: "rule",
            rule: i.rule
        }
    };
}
function sk(e, t) {
    if (!Q4e(vt(e.slug))) {
        return null;
    }
    return {
        behavior: "deny",
        message: `${xn(e)}: ${Fbt}. ${t}; tell the user.`,
        decisionReason: {
            type: "other",
            reason: CKr
        }
    };
}
function aUr(e, t) {
    let n = sk(e, t);
    if (n !== null) {
        return n;
    }
    if (!qD(vt(e.slug))) {
        return null;
    }
    return {
        behavior: "deny",
        message: `${xn(e)}: ${RKr}. ${t}; tell the user.`,
        decisionReason: {
            type: "other",
            reason: xKr
        }
    };
}
function xUt(e, t, n) {
    let r = e === "watch" && Qf();
    if (r && t.path !== undefined && w?.livePathFrom(t) === undefined) {
        return {
            result: false,
            message: w?.LIVE_PATH_INVALID ?? "invalid path",
            errorCode: 8
        };
    }
    let i = Object.keys(t).filter((o)=>o !== "action" && o !== "url" && !(e === "read_page_data" && o === "schema") && !(r && o === "path") && t[o] !== undefined);
    if (i.length > 0) {
        return {
            result: false,
            message: `action "${e}" takes only ${e === "read_page_data" ? "`url` and `schema`" : r ? "`url` (and `path`)" : "`url`"} \u2014 remove ${i.join(", ")}.`,
            errorCode: 8
        };
    }
    if (e === "read_page_data") {
        let o = t.schema;
        let l = ee().frozenReadPageDataSchemaNames;
        if (o === undefined) {
            return {
                result: false,
                message: `action "read_page_data" requires \`schema\` \u2014 the registered interaction schema to validate against${l?.size ? ` (e.g. "${[
                    ...l
                ][0]}")` : ""}.`,
                errorCode: 7
            };
        }
        if (!Xzt(o)) {
            return {
                result: false,
                message: `interaction schema "${Cg(o)}" is not available in this session. Available schemas: ${[
                    ...l ?? []
                ].join(", ") || "(none)"}.`,
                errorCode: 8
            };
        }
        let u = iGt(o);
        if (!u.ok) {
            return {
                result: false,
                message: u.reason === "unknown" ? `unknown interaction schema "${o}" \u2014 registered schemas: ${w6o().join(", ") || "(none)"}.` : `interaction schema "${o}" failed validation in this build \u2014 report this; nothing can be read against it.`,
                errorCode: 8
            };
        }
    }
    if (n === undefined) {
        if (e === "status") {
            return {
                result: true
            };
        }
        if (e === "verify") {
            return {
                result: true
            };
        }
        return {
            result: false,
            message: `action "${e}" requires \`url\` \u2014 the artifact's claude.ai URL (find it with action: "list" or action: "status").`,
            errorCode: 7
        };
    }
    let a = bA(n);
    if (a) {
        return a;
    }
    let s = uE(n);
    if (!s.ok) {
        return {
            result: false,
            message: s.message,
            errorCode: s.errorCode
        };
    }
    return {
        result: true
    };
}
const qJe = 64;
const timeout = 15000;
const maxContentLength = 65536;
async function q1o(e, ids, signal, credentials) {
    let i = ee();
    let i_accountEpoch = i.accountEpoch;
    let s = i.profileIdsForgets.get(e) ?? 0;
    let o;
    try {
        o = await md.postRelayBound(`/api/frame/user/profiles/${encodeURIComponent(e)}`, {
            ids
        }, {
            refreshOAuth: true,
            credentials,
            headers: Bd(),
            timeout,
            maxContentLength,
            signal
        });
    } catch (error) {
        if (Oa(error)) {
            throw error;
        }
        return {
            ok: false
        };
    }
    if (!o.ok) {
        return {
            ok: false
        };
    }
    let l = ()=>ee() === i && i.accountEpoch === i_accountEpoch && (i.profileIdsForgets.get(e) ?? 0) === s;
    if (!o.fromFrame || o.status < 200 || o.status >= 300) {
        if (o.fromFrame && l() && o.status === 403 && L(o.data) && o.data.error === "not_declared") {
            i.profileIdsServed.set(e, false);
        }
        return {
            ok: false,
            status: o.status
        };
    }
    let u = L(o.data) ? o.data.profiles : undefined;
    if (!L(u)) {
        return {
            ok: false,
            status: o.status
        };
    }
    let p = new Set(ids);
    let profiles = {};
    for (let [d, y] of Object.entries(u)){
        if (!p.has(d)) {
            continue;
        }
        let b = lUr(y);
        if (b.name !== undefined || b.guest === true) {
            profiles[d] = b;
        }
    }
    if (l()) {
        i.profileIdsServed.set(e, true);
        W(e, {
            ...Object.fromEntries(ids.map((d)=>[
                    d,
                    {}
                ])),
            ...profiles
        });
    }
    return {
        ok: true,
        profiles
    };
}
function lUr(e) {
    if (!L(e)) {
        return {};
    }
    let t = uGt(e.name);
    return {
        ...t !== undefined && {
            name: t
        },
        ...e.guest === true && {
            guest: true
        }
    };
}
const V = 512;
function G(e, t) {
    return `${e}\x00${t}`;
}
function W(e, t) {
    let profileNames = ee().profileNames;
    for (let [r, i] of Object.entries(t)){
        let a = G(e, r);
        profileNames.delete(a);
        profileNames.set(a, i.name === undefined ? {
            ...i,
            at: Date.now()
        } : i);
    }
    while(profileNames.size > V){
        let r = profileNames.keys().next().value;
        if (r === undefined) {
            break;
        }
        profileNames.delete(r);
    }
}
export { H1o, nht, tg, D1o, bfn, jJe, P5n, VFr, I5n, WJe, O5n, TUt, Sfn, Qje, bA, RG, M5n, qFr, iK, KFr, YFr, H5n, AUt, nv, zJe, D5n, L5n, Fve, XFr, JFr, L1o, GJe, rht, QFr, N5n, N1o, $1o, F1o, U1o, ZFr, $5n, wfn, Rie, vfn, B1o, eUr, tUr, j1o, nUr, rUr, oUr, VJe, oht, CUt, sUr, W1o, z1o, Zje, IC, xG, tX, RUt, F5n, iUr, JO, Efn, U5n, JH, kfn, G1o, V1o, sk, aUr, xUt, qJe, q1o, lUr };
