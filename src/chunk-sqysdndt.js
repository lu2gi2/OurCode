import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ye, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Gi, fa, NH, ks } from "/$bunfs/root/chunk-xgw72tt1.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { _, i6, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ml, Yc, Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { rpt, EOs, kOs, TOs, AOs, COs, ROs, xOs, POs, IOs, OOs, cBe, r6 } from "/$bunfs/root/chunk-etbngzss.js";
import { Po, g1, gn, rxe, rr, Kbo, Vt, hN, xn, dl, nSo } from "/$bunfs/root/chunk-k3tkc302.js";
import { QY, e6, u8e } from "/$bunfs/root/chunk-x47nahfr.js";
import { S1 } from "/$bunfs/root/chunk-1ej05ybf.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { rs, A8, cH } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Oa, dd } from "/$bunfs/root/chunk-9fa34ggx.js";
import { mq, AO } from "/$bunfs/root/chunk-xbsy70c7.js";
import { tC, lvs, cvs, Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { fZ, Wa } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { cL, n2t, bae, SGe, ber, GX, Sf, fYr, mYr, Sae, tSt, xZe, BMe, ver, n3, rSt, mvn, Tte } from "/$bunfs/root/chunk-gs3dthpm.js";
import { Y4, Cf, oJt } from "/$bunfs/root/chunk-y9ay3abt.js";
import { Rg } from "/$bunfs/root/chunk-sfgejbsr.js";
import { $3o, r3, F3o, IZe, OZe, qX, dL, KX, i$, YX, Ner, Ate, TGe, MZe, JEe, $C, md } from "/$bunfs/root/chunk-qv4dnw41.js";
import { Ier } from "/$bunfs/root/chunk-440b8y7g.js";
import { tYe, Jg, IE, Xre, Lk, VQ } from "/$bunfs/root/chunk-8yfbbt6t.js";
import { HM, Bd, eV } from "/$bunfs/root/chunk-0sswwkdg.js";
import { yxt, PCe, ICe, h_r, FNe, vt, CJt, Sxt, Vuo, quo, y_r, Qit, J_e, wxt, FB, vxt, Q_e, Zit, VL } from "/$bunfs/root/chunk-0vgmtssp.js";
import { JQ, rF, lbe, _fo, Rat, xat, QQ } from "/$bunfs/root/chunk-1eajkkr7.js";
import { RHn } from "/$bunfs/root/chunk-zz7dyws3.js";
import { lL } from "/$bunfs/root/chunk-acvzmakd.js";
import { o, M, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { lstat, open, readlink, realpath, stat } from "fs/promises";
import { constants } from "fs";
import { dirname, isAbsolute, join, normalize, relative, sep } from "path";
const Ie = {
    chat: {
        family: "chat",
        needsId: true
    },
    share: {
        family: "share",
        needsId: true
    },
    task: {
        family: "task",
        needsId: true
    },
    cowork: {
        family: "cowork",
        needsId: true
    },
    "cowork-artifact": {
        family: "cowork_artifact",
        needsId: true
    },
    project: {
        family: "project",
        needsId: true
    },
    design: {
        family: "design",
        needsId: false
    },
    settings: {
        family: "settings",
        needsId: false
    },
    api: {
        family: "api",
        needsId: false
    }
};
const ft = {
    chat: "chat",
    share: "shared chat",
    task: "task",
    cowork: "task",
    code_session: "session",
    epitaxy: "session",
    project: "project"
};
function lt([n, r, s]) {
    if (n === undefined) {
        return "other";
    }
    if (n === "artifact") {
        if (r === undefined) {
            return "artifact_bare";
        }
        return "artifact";
    }
    if (n === "artifacts") {
        if (r === undefined || r === "design") {
            return "artifacts_gallery";
        }
        return "chat_artifact";
    }
    if (n === "public" && r === "artifacts") {
        return "chat_artifact";
    }
    if (n === "code") {
        if (r === "artifact" || r === "frame") {
            if (s === undefined) {
                return "artifact_bare";
            }
            return "artifact";
        }
        if (r === "artifacts") {
            return "artifacts_gallery";
        }
        if (r === undefined) {
            return "other";
        }
        return "code_session";
    }
    if (n === "epitaxy") {
        if (r === "artifact") {
            return "epitaxy_artifact";
        }
        if (r === undefined) {
            return "other";
        }
        return "epitaxy";
    }
    let i = Object.hasOwn(Ie, n) ? Ie[n] : undefined;
    if (i === undefined || i.needsId && r === undefined) {
        return "other";
    }
    return i.family;
}
function h4r(e) {
    let n = hN(e);
    let env = Kbo(n);
    if (env === null) {
        return null;
    }
    let s;
    try {
        s = new URL(n);
    } catch  {
        return null;
    }
    let i = s.searchParams.get("artifact") || s.searchParams.get("frame");
    let l = null;
    if (i !== null) {
        let c = i.toLowerCase();
        l = rr.test(c) ? c : g1(i);
    }
    return {
        family: lt(s.pathname.split("/").filter((c)=>c !== "")),
        env,
        artifact: l === null ? null : {
            slug: l
        }
    };
}
function JZn(e, n = {}) {
    let r = `not an artifact URL: ${e} \u2014`;
    let s = h4r(e);
    let i = s === null ? undefined : ft[s.family];
    if (s !== null && i !== undefined && s.artifact !== null) {
        let b = xn({
            slug: s.artifact.slug,
            env: s.env
        });
        return `${r} that is a claude.ai ${i} link; pass the artifact's own URL (${b}) as \`${n.field ?? "url"}\`.`;
    }
    if (s?.family === "design") {
        let b = n.designToolName === undefined ? "" : `; use the ${n.designToolName} tool`;
        return `${r} that is a Claude Design link, which the ${gn} tool cannot open${b}.`;
    }
    if (s?.family === "chat_artifact" || /^https:\/\/(?:www\.)?claude\.site(?:[/?#]|$)/.test(hN(e.trim()))) {
        return `${r} that is an artifact from a claude.ai chat (the chat's artifact panel or its public page), which is separate from artifacts published with this tool and has no ${rxe()} link, so this tool cannot read it. If the user wants its content used here, ask them to paste it or save it to a file in this session; if they meant one of their published artifacts, action: "list" shows those.`;
    }
    if (i !== undefined) {
        return `${r} that is a claude.ai ${i} link, not a published artifact, and this tool cannot read a ${i}. If the user meant an artifact shown in that ${i}, ask them for the artifact's own ${rxe()} link or find it with action: "list"; otherwise ask them to paste the content they want used.`;
    }
    let c = e.trim();
    let y = rr.test(c.toLowerCase()) ? c.toLowerCase() : g1(c);
    if (s === null && y !== null) {
        return `${r} that looks like an artifact id on its own; if it is one, pass the full link ${xn({
            slug: y,
            env: Po()
        })} as \`${n.field ?? "url"}\`.`;
    }
    return `${r} pass the artifact's ${rxe()} link (action: "list" shows them).`;
}
async function AK(e, n) {
    let r = Buffer.alloc(n + 1);
    let s = 0;
    while(s < r.length){
        let { bytesRead } = await e.read(r, s, r.length - s, s);
        if (bytesRead === 0) {
            break;
        }
        s += bytesRead;
    }
    if (s === n) {
        return r.subarray(0, n);
    }
    return null;
}
function lGe(e) {
    return ks(e) || fa(e) || NH(e);
}
function hx(e) {
    if (lGe(e)) {
        return true;
    }
    let { paths, vetted } = i6(e);
    return !vetted || paths.some(lGe);
}
function ie(e) {
    return ks(e) || fa(e) || NH(e);
}
const dT = 512;
const pI = 255;
const Dwn = mvn - 1;
const hae = pI + 1;
function xe(e, n) {
    if (e.length === 0) {
        return {
            errMsg: `${n} may not be empty`
        };
    }
    if (e.length > dT) {
        return {
            errMsg: `${n} is longer than ${dT} characters`
        };
    }
    let nfc = e.normalize("NFC");
    if (/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(nfc) || !Yc(nfc)) {
        return {
            errMsg: `${n} ${Cf(e)} contains control, formatting, line-separator, or private-use characters, or a malformed one`
        };
    }
    if (nfc.includes("\\")) {
        return {
            errMsg: `${n} ${Cf(e)} contains a backslash \u2014 published paths use forward slashes on every platform`
        };
    }
    if (/[?#%]/.test(nfc)) {
        return {
            errMsg: `${n} ${Cf(e)} contains characters that cannot appear in a served URL path ("?", "#", "%")`
        };
    }
    if (nfc.startsWith("/")) {
        return {
            errMsg: `${n} ${Cf(e)} is absolute \u2014 published paths are relative to the artifact root`
        };
    }
    let s = nfc.split("/");
    if (s.some((i)=>i === "")) {
        return {
            errMsg: `${n} ${Cf(e)} has an empty path segment`
        };
    }
    if (s.some((i)=>i === "." || i === "..")) {
        return {
            errMsg: `${n} ${Cf(e)} contains "." or ".." segments \u2014 pass the plain served path`
        };
    }
    if (s.some((i)=>i === "__proto__" || i === "constructor" || i === "prototype")) {
        return {
            errMsg: `${n} ${Cf(e)} contains a reserved name ("__proto__", "constructor", "prototype")`
        };
    }
    if (/[:;]/.test(nfc)) {
        return {
            errMsg: `${n} ${Cf(e)} contains ":" or ";", which no published path may`
        };
    }
    return {
        nfc
    };
}
function Lwn(e, { removal = false } = {}) {
    let r = xe(e, "files: published path");
    if ("errMsg" in r) {
        return r;
    }
    let { nfc } = r;
    if (nfc === "index.html") {
        return {
            errMsg: 'files: "index.html" cannot be a published path — the `html` argument is always the index. Pass that file\'s content as `html` and remove the "index.html" mapping.'
        };
    }
    if (nfc.startsWith("_")) {
        return {
            errMsg: `files: published path ${Cf(e)} starts with "_", which the artifact service reserves for its own names \u2014 rename the file or its top-level directory`
        };
    }
    if (!removal && QZn(nfc)) {
        return {
            errMsg: `files: published path ${Cf(e)} is a name the artifact service answers with one of its own views, so the file could never be read back \u2014 rename it`
        };
    }
    return {
        key: nfc
    };
}
function QZn(e) {
    return e.startsWith("_") || e === "index.html.json" || e === ".json";
}
function JG(e) {
    let n = xe(e, "path");
    if ("errMsg" in n) {
        return n;
    }
    let { nfc } = n;
    if (QZn(nfc)) {
        return {
            errMsg: `path ${Cf(e)} names one of the artifact service's own views, not a published file; list_files shows the readable paths`
        };
    }
    return {
        key: nfc
    };
}
const Y6o = 1048576;
const yt = /\.(?:png|jpe?g)$/i;
function X6o(e) {
    let n = xe(e, "thumbnail href");
    if ("errMsg" in n) {
        return n;
    }
    if (!yt.test(n.nfc)) {
        return {
            errMsg: `thumbnail href ${JSON.stringify(e)} is not a .png, .jpg or .jpeg file \u2014 custom thumbnails are PNG or JPEG images`
        };
    }
    return {
        rel: n.nfc
    };
}
function cGe(e, n, r) {
    return e === n || e.startsWith(n + sep) || e === r || e.startsWith(r + sep);
}
function y4r(e, n, r) {
    let s = dGe(normalize(n));
    if (s === r) {
        return e;
    }
    if (e === s) {
        return r;
    }
    if (e.startsWith(s + sep)) {
        return r + e.slice(s.length);
    }
    return e;
}
function dGe(e) {
    let n = e.replace(/\/+$/, "");
    if (n === "") {
        return e;
    }
    return n;
}
function uGe(e, n) {
    if (ie(e)) {
        return null;
    }
    if (e === "~" || e.startsWith(`~${sep}`) || e.startsWith("~/")) {
        return null;
    }
    if (isAbsolute(e)) {
        let s = normalize(e);
        if (ie(s)) {
            return null;
        }
        return s;
    }
    let r = normalize(e);
    if (r === ".." || r.startsWith(`..${sep}`)) {
        return null;
    }
    return join(n, r);
}
function _4r(e) {
    return `files: ${JSON.stringify(e)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 list the link's target path instead`;
}
async function e3(e) {
    let n = dGe(e);
    for(let r = 0; r < 40; r++){
        let s;
        try {
            s = await readlink(n);
        } catch  {
            return false;
        }
        if (Gi(s, dirname(n))) {
            return true;
        }
        if (s.split(/\/+/).includes("..")) {
            return true;
        }
        n = dGe(isAbsolute(s) ? normalize(s) : join(dirname(n), s));
        if (ie(n)) {
            return true;
        }
    }
    return true;
}
function _t(e, anchors) {
    return anchors.some((r)=>cGe(e, r.lex, r.real));
}
function Ae(e, n) {
    return n.some((r)=>e === r.real || e.startsWith(r.real + sep));
}
function Re(e) {
    return !e.isSymbolicLink() && e.isDirectory();
}
async function bt(e) {
    if (e === undefined || !isAbsolute(e)) {
        return [];
    }
    let n = dGe(normalize(e));
    let r;
    try {
        r = await lstat(n);
    } catch (error) {
        if (z(error)) {
            return [
                {
                    kind: "scratchpad",
                    lex: n,
                    real: n
                }
            ];
        }
        return [];
    }
    if (!Re(r) || await e3(n)) {
        return [];
    }
    let real = await realpath(n).catch(()=>n);
    let i = await lstat(n).catch(()=>{});
    if (i !== undefined && Re(i) && i.ino === r.ino && i.dev === r.dev) {
        return [
            {
                kind: "scratchpad",
                lex: n,
                real
            }
        ];
    }
    return [];
}
async function b4r(e, n) {
    let r = [];
    for (let s of e ?? []){
        if (!isAbsolute(s) || ie(s)) {
            continue;
        }
        let i = dGe(normalize(s));
        if (i === n.lex || i === n.real) {
            continue;
        }
        try {
            let l = await lstat(i);
            if (!Re(l) || await e3(i)) {
                continue;
            }
            if (a.CLAUDE_CODE_EVAL_CONFINED && i === we()) {
                r.push({
                    kind: "dir",
                    lex: i,
                    real: i
                });
                continue;
            }
            let real = await realpath(i);
            if (ie(real)) {
                continue;
            }
            let y = await lstat(i);
            if (Re(y) && y.ino === l.ino && y.dev === l.dev) {
                r.push({
                    kind: "dir",
                    lex: i,
                    real
                });
            }
        } catch  {}
    }
    return r;
}
function De(anchors) {
    let n = anchors.filter((i)=>i.kind !== "scratchpad");
    let r = n.map((i)=>_(i.lex)).join(", ");
    let s = anchors.some((i)=>i.kind === "scratchpad") ? " or your scratchpad directory" : "";
    if (n.length > 1) {
        return {
            where: `the session's working directories (${r})${s}`,
            under: "a path under one of them"
        };
    }
    return {
        where: `the working directory (${r})${s}`,
        under: s === "" ? "a path under it" : "a path under one of them"
    };
}
function Le(e) {
    if (e.kind === "scratchpad") {
        return "your scratchpad directory";
    }
    if (e.kind === "cwd") {
        return `the working directory (${_(e.lex)})`;
    }
    return `${_(e.lex)} (one of the session's working directories)`;
}
async function wt(e, n, r) {
    let s = await realpath(e);
    let i = {
        kind: "cwd",
        lex: dGe(normalize(e)),
        real: s
    };
    let anchors = [
        i,
        ...await b4r(r?.workingDirs, i),
        ...await bt(r?.scratchpadDir)
    ];
    let { where, under } = De(anchors);
    if (n === undefined) {
        return {
            anchors,
            realRoot: s,
            lexRoot: normalize(e)
        };
    }
    if (ie(n)) {
        return {
            errMsg: `root: ${JSON.stringify(n)} is a network path \u2014 the publish base must lie within ${where}`
        };
    }
    let b = normalize(n);
    if (!isAbsolute(b) && (b === ".." || b.startsWith(`..${sep}`))) {
        return {
            errMsg: `${`root: ${JSON.stringify(n)} escapes the working directory \u2014 `}a relative publish base must lie within it`
        };
    }
    let v = isAbsolute(b) ? anchors.find((T)=>cGe(b, T.lex, T.real)) : anchors[0];
    if (v === undefined) {
        return {
            errMsg: `root: ${JSON.stringify(n)} is outside ${where} \u2014 pass ${under}`
        };
    }
    let P = isAbsolute(b) ? b : join(s, b);
    let S = r?.denyPath?.(P, false, n);
    if (S !== undefined) {
        return {
            errMsg: S
        };
    }
    if (hx(P) || await e3(P)) {
        return {
            errMsg: `root: ${JSON.stringify(n)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 pass the target directory itself`
        };
    }
    let realRoot;
    try {
        realRoot = await realpath(P);
    } catch  {
        return {
            errMsg: `root: ${JSON.stringify(n)} not found`
        };
    }
    if (ie(realRoot)) {
        return {
            errMsg: `root: ${JSON.stringify(n)} resolves to a network path \u2014 the publish base must lie within ${where}`
        };
    }
    if (!Ae(realRoot, [
        v
    ])) {
        return {
            errMsg: Ae(realRoot, anchors) ? `root: ${_(n)} is a link from ${Le(v)} into ${Le(anchors.find((T)=>Ae(realRoot, [
                    T
                ])) ?? v)} \u2014 pass the directory it points to instead` : `root: ${JSON.stringify(n)} resolves outside ${where} \u2014 the publish base must lie within it`
        };
    }
    let k;
    try {
        k = await stat(realRoot);
    } catch  {
        return {
            errMsg: `root: ${JSON.stringify(n)} not found`
        };
    }
    if (!k.isDirectory()) {
        return {
            errMsg: `root: ${JSON.stringify(n)} is not a directory`
        };
    }
    let lexRoot = dGe(isAbsolute(b) ? b : join(normalize(e), b));
    return {
        anchors,
        realRoot,
        lexRoot
    };
}
async function S4r(e, n, r, s) {
    let i = await wt(n, r, s);
    if ("errMsg" in i) {
        return i;
    }
    let { anchors, realRoot, lexRoot } = i;
    let { where, under } = De(anchors);
    if (s?.expectedRealRoot !== undefined && s.expectedRealRoot !== realRoot) {
        return {
            errMsg: "root: the publish base resolves to a different location than " + "was approved — it changed between approval and publishing; " + "retry the publish"
        };
    }
    if (e.length === 0) {
        return {
            errMsg: "files: the file map is empty — list at least one file"
        };
    }
    if (e.length > pI) {
        return {
            errMsg: `files: ${e.length} files + index.html exceeds the ${pI + 1} entries one publish may name; send at most ${pI} now and the rest in another publish to the same url`
        };
    }
    let files = [];
    let S = new Set;
    let N = 0;
    for (let k of e){
        let W = Lwn(k.to);
        if ("errMsg" in W) {
            return W;
        }
        let T = W.key;
        if (S.has(T)) {
            return {
                errMsg: `files: published path ${Cf(T)} appears more than once`
            };
        }
        S.add(T);
        let R = k.from;
        if (ie(R)) {
            return {
                errMsg: `files: ${JSON.stringify(R)} is a network path \u2014 only files under ${where} can be published`
            };
        }
        if (R === "~" || R.startsWith(`~${sep}`) || R.startsWith("~/")) {
            return {
                errMsg: `files: ${JSON.stringify(R)} \u2014 "~" is not expanded here; pass a base-relative or absolute path`
            };
        }
        let K = isAbsolute(R) ? undefined : normalize(R);
        if (K !== undefined && (K === ".." || K.startsWith(`..${sep}`))) {
            return {
                errMsg: `files: ${JSON.stringify(R)} escapes the publish base \u2014 ` + `only files under ${where} can be published`
            };
        }
        let L = uGe(R, realRoot);
        if (L === null) {
            return {
                errMsg: `files: ${JSON.stringify(R)} cannot be resolved`
            };
        }
        if (isAbsolute(R) && !_t(L, anchors)) {
            return {
                errMsg: `files: ${JSON.stringify(R)} is outside ${where} \u2014 pass ${under}`
            };
        }
        let E = s?.denyPath?.(L, false, R);
        if (E !== undefined) {
            return {
                errMsg: E
            };
        }
        if (lexRoot !== realRoot) {
            let x = K ?? (L.startsWith(realRoot + sep) ? relative(realRoot, L) : undefined);
            if (x !== undefined) {
                let I = s?.denyPath?.(join(lexRoot, x), true, R);
                if (I !== undefined) {
                    return {
                        errMsg: I
                    };
                }
            }
        }
        if (hx(L) || await e3(L)) {
            return {
                errMsg: _4r(R)
            };
        }
        let U;
        try {
            U = await realpath(L);
        } catch (error) {
            return {
                errMsg: `files: ${JSON.stringify(R)} not found`,
                ...z(error) && {
                    missing: true
                }
            };
        }
        if (ie(U)) {
            return {
                errMsg: `files: ${JSON.stringify(R)} resolves to a network path \u2014 only files under ${where} can be published`
            };
        }
        if (!Ae(U, anchors)) {
            return {
                errMsg: `files: ${JSON.stringify(R)} resolves outside ${where} (symlink?) \u2014 only files under it can be published`
            };
        }
        if (U !== L) {
            let x = s?.denyPath?.(U, true, R);
            if (x !== undefined) {
                return {
                    errMsg: x
                };
            }
        }
        try {
            let x = await lstat(U);
            if (x.isSymbolicLink()) {
                return {
                    errMsg: `files: ${JSON.stringify(R)} changed to a symlink after it was checked \u2014 retry the publish`
                };
            }
            if (!x.isFile()) {
                return {
                    errMsg: `files: ${JSON.stringify(R)} is not a regular file`
                };
            }
        } catch (error) {
            return {
                errMsg: `files: ${JSON.stringify(R)} not found`,
                ...z(error) && {
                    missing: true
                }
            };
        }
        let A;
        try {
            A = await open(U, constants.O_RDONLY | (constants.O_NOFOLLOW | constants.O_NONBLOCK));
        } catch (error) {
            if (error?.code === "ELOOP") {
                return {
                    errMsg: `files: ${JSON.stringify(R)} changed to a symlink after it was checked \u2014 retry the publish`
                };
            }
            return {
                errMsg: `files: ${JSON.stringify(R)} not found`,
                ...z(error) && {
                    missing: true
                }
            };
        }
        let content;
        let H;
        try {
            try {
                if ((await lstat(U)).isSymbolicLink()) {
                    return {
                        errMsg: `files: ${JSON.stringify(R)} changed to a symlink after it was checked \u2014 retry the publish`
                    };
                }
            } catch (error) {
                return {
                    errMsg: `files: ${JSON.stringify(R)} not found`,
                    ...z(error) && {
                        missing: true
                    }
                };
            }
            let x = await A.stat();
            if (!x.isFile()) {
                return {
                    errMsg: `files: ${JSON.stringify(R)} is not a regular file`
                };
            }
            if (a.CLAUDE_CODE_EVAL_CONFINED && x.nlink > 1) {
                return {
                    errMsg: `files: ${JSON.stringify(R)} has more than one hard link`
                };
            }
            if (x.size > Sf) {
                return {
                    errMsg: `files: ${JSON.stringify(R)} is ${Math.ceil(x.size / 1024 / 1024)}MB (per-file max ${Sf / 1024 / 1024}MB)`,
                    tooLarge: true
                };
            }
            N += x.size;
            if (N > n3) {
                return {
                    errMsg: `files: total content exceeds ${n3 / 1024 / 1024}MB at ${JSON.stringify(R)} \u2014 the most one publish sends; publish the files up to it now and the rest in another publish to the same url (a version may total ${rSt / 1024 / 1024}MB)`
                };
            }
            H = k.contentType ?? Y4(T);
            if (H === undefined) {
                return {
                    errMsg: oJt("files", T),
                    notServedPath: T
                };
            }
            try {
                let I = await AK(A, x.size);
                if (I === null) {
                    return {
                        errMsg: `files: ${JSON.stringify(R)} changed while it was read \u2014 retry the publish`
                    };
                }
                content = I;
            } catch  {
                return {
                    errMsg: `files: ${JSON.stringify(R)} could not be read`
                };
            }
            files.push({
                path: T,
                content,
                contentType: H,
                ...k.live !== undefined && {
                    live: k.live
                },
                ...k.reseed === true && {
                    reseed: true
                }
            });
        } finally{
            await A.close();
        }
    }
    return {
        files
    };
}
async function J6o(e, from, r, s) {
    let i = /\.png$/i.test(from) ? ".png" : ".jpg";
    let l = await S4r([
        {
            to: `thumbnail${i}`,
            from
        }
    ], r, undefined, s);
    if ("errMsg" in l) {
        return {
            errMsg: `thumbnail ${JSON.stringify(e)}: ${l.errMsg.replace(/^files: /, "")}`,
            missing: l.missing === true,
            tooLarge: l.tooLarge === true
        };
    }
    let content = l.files[0].content;
    return {
        content: typeof content === "string" ? Buffer.from(content) : content
    };
}
const Wbt = "passive";
const At = 600000;
const Ue = /^(\d{1,15})-/;
function ke(e) {
    let n = e === undefined ? undefined : Ue.exec(e)?.[1];
    if (n !== undefined && Number(n) * 1000 <= Date.now() + At) {
        return e;
    }
}
function w4r(e, n) {
    let { live } = ee();
    if (ke(n) === undefined) {
        if (!live.heardAheadOfClockReported && Ue.test(n)) {
            live.heardAheadOfClockReported = true;
            f("artifact_live_subscribe", "heard_version_skipped_ahead_of_clock");
        }
        return;
    }
    let s = live.heardVersions.get(e);
    let i = s === undefined ? 1 : cL(n, s.ver);
    if (i !== null && i > 0) {
        live.heardVersions.set(e, {
            ver: n,
            toldTo: new Set
        });
    }
}
function HGt(e, n) {
    let { supervisors, heardVersions } = ee().live;
    let i = supervisors.get(e);
    if (i === undefined || n === undefined) {
        return {
            behind: false
        };
    }
    let liveVer = Rt(ke(heardVersions.get(e)?.ver), ke(i.carriedVer));
    if (liveVer === undefined || SGe(i.ownPublishes, e) || n2t(i.ownPublishes, e, liveVer)) {
        return {
            behind: false
        };
    }
    let c = cL(liveVer, n);
    if (c !== null && c > 0) {
        return {
            behind: true,
            liveVer
        };
    }
    return {
        behind: false
    };
}
function Q6o(e, n, r) {
    let s = HGt(e, n);
    if (!s.behind) {
        return;
    }
    let i = ee().live.heardVersions.get(e);
    if (i?.ver === s.liveVer && i.toldTo.has(r ?? "main")) {
        return undefined;
    }
    return {
        liveVer: s.liveVer
    };
}
function Z6o(e, n, r) {
    if (ke(n) === undefined) {
        return;
    }
    let heardVersions = ee().live.heardVersions;
    let i = heardVersions.get(e);
    let l = r ?? "main";
    if (i?.ver === n) {
        i.toldTo.add(l);
        return;
    }
    let c = i === undefined ? -1 : cL(i.ver, n);
    if (c !== null && c < 0) {
        heardVersions.set(e, {
            ver: n,
            toldTo: new Set([
                l
            ])
        });
    }
}
function Nwn(e, n) {
    let heardVersions = ee().live.heardVersions;
    if (n === undefined || heardVersions.get(e)?.ver === n) {
        heardVersions.delete(e);
    }
}
function Rt(e, n) {
    if (e === undefined || n === undefined) {
        return e ?? n;
    }
    let r = cL(e, n);
    if (r !== null && r < 0) {
        return n;
    }
    return e;
}
const e3o = [
    "org_pinned_instance",
    "pipeline_instance",
    "template_instance"
];
const He = {
    first_party_type: 0,
    org_pinned_instance: 1,
    pipeline_instance: 2,
    template_instance: 3
};
function DGt(e, kind, issuedAt) {
    if (VL(issuedAt)) {
        return;
    }
    let { attestedTypeArtifacts } = ee();
    let i = attestedTypeArtifacts.get(e) ?? {};
    let l = i.revokedAt?.[kind];
    if (l !== undefined && issuedAt <= l) {
        return;
    }
    let i_mark = i.mark;
    if (i_mark === undefined || issuedAt > i_mark.issuedAt || issuedAt === i_mark.issuedAt && He[kind] < He[i_mark.kind]) {
        attestedTypeArtifacts.set(e, {
            ...i,
            mark: {
                kind,
                issuedAt
            }
        });
    }
}
function ZZn(e, n, r) {
    if (VL(r)) {
        return;
    }
    let { attestedTypeArtifacts } = ee();
    let i = attestedTypeArtifacts.get(e) ?? {};
    let revokedAt = {
        ...i.revokedAt
    };
    for (let b of n){
        revokedAt[b] = Math.max(revokedAt[b] ?? r, r);
    }
    let i_mark = i.mark;
    let mark = i_mark !== undefined && !(n.includes(i_mark.kind) && i_mark.issuedAt <= r) ? i_mark : undefined;
    attestedTypeArtifacts.set(e, {
        ...mark && {
            mark
        },
        revokedAt
    });
}
const kt = p(()=>u({
        firstPartyType: M().optional(),
        typeFirstParty: M().optional(),
        template: M().optional()
    }));
function Ve(slug, typeFacts, r, s, i) {
    if (typeFacts === undefined) {
        return;
    }
    let l = kt().safeParse(typeFacts);
    if (!l.success) {
        return;
    }
    let l_data = l.data;
    let i_external = i.external;
    if (l_data.firstPartyType === true) {
        if (!i_external) {
            DGt(slug, "first_party_type", s);
        }
        return;
    }
    if (l_data.typeFirstParty !== true) {
        return;
    }
    if (r !== undefined && rr.test(r)) {
        DGt(r, "first_party_type", s);
    }
    if (i_external) {
        return;
    }
    if (l_data.template === true) {
        DGt(slug, "template_instance", s);
    } else {
        ZZn(slug, [
            "template_instance"
        ], s);
    }
}
function pb(e) {
    return ee().attestedTypeArtifacts.get(e)?.mark?.kind;
}
function t3o(e) {
    return pb(e) !== undefined;
}
function v4r(e) {
    switch(e){
        case "first_party_type":
            return "a published first-party Artifact type";
        case "org_pinned_instance":
            return "an Artifact the organization's admins pinned for its type (its design system or template)";
        case "pipeline_instance":
            return "a template the organization's publishing pipeline owns";
        case "template_instance":
            return "a design system (an Artifact made from a template Artifact type) in the user's organization";
    }
}
function bZe(e) {
    let n = pb(e);
    if (n === undefined) {
        return "";
    }
    return ` [attested: ${v4r(n)}]`;
}
const Et = 600000;
function Ke(env, setting) {
    let r = ee();
    if (setting === undefined) {
        if (r.sandboxEgress.delete(env)) {
            t(`[artifact] sandbox egress setting for ${env} withdrawn`);
        }
        return;
    }
    r.sandboxEgress.set(env, {
        setting,
        at: Date.now()
    });
    t(`[artifact] sandbox egress setting for ${env}: ${setting}`);
}
function n3o(e = Po()) {
    if (!A8()) {
        if (a.CLAUDE_CODE_REMOTE === true && !cH()) {
            return undefined;
        }
        return false;
    }
    let n = ee().sandboxEgress.get(e);
    if (n === undefined || Date.now() - n.at >= Et) {
        return;
    }
    return n.setting === "disabled";
}
const r3o = "what the artifact is for and the key decisions; the repo, branch, and commit it was built from; data sources used (MCP servers, load-bearing files); whether embedded data is a snapshot and as of when; known limitations and suggested next steps";
const St = 16384;
const Yn = `
[prompt truncated: exceeded ${St / 1024}KB]`;
const Tt = /^[\w.:@+-]{1,56}(?:\[[A-Za-z0-9]{1,6}\])?$/;
const xt = p(()=>{
    let e = o().refine((r)=>r.trim() !== "").optional().catch(undefined);
    let n = o().trim().regex(Tt).optional().catch(undefined);
    return u({
        prompt: e,
        context: e,
        model: n,
        client_version: n
    });
});
function Ge(origin_metadata) {
    let n = xt().safeParse(origin_metadata);
    if (!n.success) {
        return;
    }
    let { prompt, context, model, client_version } = n.data;
    let c = {
        ...prompt !== undefined && {
            prompt
        },
        ...context !== undefined && {
            context
        },
        ...model !== undefined && {
            model
        },
        ...client_version !== undefined && {
            clientVersion: client_version
        }
    };
    if (Object.keys(c).length > 0) {
        return c;
    }
}
const Ot = 2000;
const Ct = 6000;
function $t(e) {
    return {
        prompt: Math.min(Ot, Math.floor(e / 16)),
        context: Math.min(Ct, Math.floor(3 * e / 16))
    };
}
function je(e, n, r) {
    let s = e.trim();
    let i = Array.from(s);
    if (i.length <= n) {
        return s;
    }
    return `${i.slice(0, n).join("")}
[${r} truncated after ${n} characters]`;
}
function E4r(e, n) {
    return "";
}
const Mt = /[\x00-\x08\x0b-\x1f\x7f-\x9f\u2028\u2029]+/g;
function k4r(e) {
    return dl(S1(cBe, e.replace(Mt, " ")));
}
const T4r = 4194304;
const ze = 3149824;
function Je(e) {
    let e_length = e.length;
    while(e_length > 0 && ` 	\r
`.includes(e[e_length - 1])){
        e_length--;
    }
    let r = e.slice(0, e_length);
    if (!r.endsWith("</script>")) {
        return e;
    }
    let s = r.slice(0, r.length - 9);
    let i = s.lastIndexOf('<script type="application/json" id="__frame_comments__">');
    if (i === -1) {
        return e;
    }
    let l = s.slice(i + 56);
    if (l.includes("<")) {
        return e;
    }
    let c;
    try {
        c = JSON.parse(l);
    } catch  {
        return e;
    }
    if (typeof c !== "object" || c === null || Array.isArray(c)) {
        return e;
    }
    let y = c;
    if (typeof y.mac !== "string" || y.mac.length === 0) {
        return e;
    }
    if (!Object.hasOwn(c, "payload")) {
        return e;
    }
    let b = s.slice(0, i);
    if (b.endsWith(`
`)) {
        b = b.slice(0, -1);
    }
    return b;
}
function WX(e) {
    return eer(e) || e.outsideOrg === true;
}
function $wn(e) {
    return eer(e) || e.outsideWriter === true;
}
function eer(e) {
    return e.authoredByOthers === true || e.role !== "owner" || e.publicRead || e.cowritten || e.typeLocked;
}
function Pt(files) {
    if (!Array.isArray(files)) {
        return;
    }
    let manifest = {};
    for (let s of files){
        if (typeof s !== "object" || s === null || typeof s.path !== "string") {
            return;
        }
        manifest[s.path] = s;
    }
    let r = tSt({
        manifest
    });
    if (r !== undefined && r.type.length > 0) {
        return r;
    }
}
const Bt = /^[a-z][a-z0-9_-]{0,63}$/;
const Xe = [
    "users",
    "org",
    "public"
];
function Nt(dbUsage) {
    let n = dbUsage?.documents;
    if (typeof n === "number" && Number.isSafeInteger(n) && n >= 0) {
        return n;
    }
}
const LMe = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/;
const It = new RegExp(LMe, "g");
function Fwn(e) {
    return e.replace(It, "");
}
function nt(e, n, r, workshopPage, i) {
    let ownVersion = bae(n, r, e.ver);
    let ownBytesPage = !e.typeLocked && !e.publicRead && !workshopPage && !i;
    let plainOwner = ownBytesPage && !WX(e);
    return {
        workshopPage,
        ownVersion,
        ownBytesPage,
        plainOwner,
        vouchedOwn: plainOwner && ownVersion
    };
}
async function o3o(e, n, r, s = {}) {
    let island = await lL(e.html, "ws-decisions");
    return {
        ...nt(e, n, r, island !== null, s.savedInPage === true),
        island
    };
}
async function s3o(e, n, r) {
    return nt(e, n, r, false, false).vouchedOwn && await lL(e.html, "ws-decisions") === null;
}
function ter(e) {
    if (e.publicRead || e.offOrgRamp === true || e.external === true || e.role === "owner") {
        return null;
    }
    if (e.role === "writer" && e.sameChannel === true && fYr()) {
        return "channel";
    }
    if (mYr()) {
        return "shared";
    }
    return null;
}
function Uwn(e) {
    let otherWriters = e.role !== "owner" || e.cowritten || e.typeLocked === true || e.outsideOrg === true;
    let body = aL(e.html, "page");
    let head = (i)=>Bwn(body, i, "page");
    if (otherWriters || !e.vouchedOwn) {
        let [i, l] = otherWriters && e.sameChannel === true ? [
            COs,
            ROs
        ] : e.typeLocked ? [
            xOs,
            POs
        ] : e.role === "owner" && e.outsideOrg === true ? [
            TOs,
            AOs
        ] : otherWriters ? [
            EOs,
            kOs
        ] : [
            IOs,
            OOs
        ];
        return {
            enveloped: true,
            otherWriters,
            lead: `${i}
<${rpt}>
`,
            body,
            tail: `
</${rpt}>

${l}`,
            head
        };
    }
    return {
        enveloped: false,
        otherWriters: false,
        lead: "",
        body,
        tail: "",
        head
    };
}
function ner(e) {
    return RHn(e, r6);
}
function aL(e, n = "all") {
    return ner(dl(e, n));
}
function Bwn(e, n, r = "all") {
    if (n <= 0) {
        return "";
    }
    for(let s = n;; s--){
        let i = ner(nSo(e, s, r));
        if (i.length <= n) {
            return i;
        }
    }
}
function rer(e) {
    if (!Sae()) {
        return;
    }
    if (e.syncClient === true) {
        if (typeof e.syncToken === "string" && e.syncToken !== "") {
            return {
                transport: "sync",
                token: e.syncToken
            };
        }
        return undefined;
    }
    if (e.subscriptionToken) {
        return {
            transport: "live",
            token: e.subscriptionToken
        };
    }
}
function uE(e, n = {}) {
    let parsed = Vt(e);
    if (parsed === null) {
        return {
            ok: false,
            message: n.notUrlMessage ?? JZn(e, {
                field: n.field
            }),
            errorCode: 4
        };
    }
    let s = Po();
    if (parsed.env !== s) {
        let i = n.envHint ? ` \u2014 ${n.envHint(s)}` : "";
        return {
            ok: false,
            message: `that artifact URL is for ${parsed.env}, but this session targets ${s} claude.ai${i}`,
            errorCode: 5
        };
    }
    return {
        ok: true,
        parsed
    };
}
const rt = 60000;
function vte(e) {
    return e.gone === true;
}
function pGe(e) {
    return e.neverPublished === true;
}
function Fj(e) {
    return e.otherOrg === true;
}
function Ft(data) {
    return typeof data === "object" && data !== null && Tte(data)?.reason === "org_mismatch" && "owner_org" in data && typeof data.owner_org === "string" && Jt(data.owner_org) !== null;
}
const fGe = "this Artifact is in another of the user's organizations, not the one this session is signed in to";
const mGe = "the user runs /login and signs in to that organization";
const LGt = "this is a public artifact from outside the user's organization: it can be read, but not watched";
const err = `${fGe} \u2014 it opens here only after ${mGe}`;
const ot = "If it was shared with you by email, accept the invitation in a browser first, and check that Claude Code is signed in to the invited account";
const Oe = "If this was shared with you from another organization, open it in Claude Code on your computer or in a Claude Code on the web session";
const Dt = new Set([
    Zit,
    "boot_403_agent_not_added",
    "boot_403_agent_owned",
    "boot_403_request_access"
]);
const i3o = "Do not retry this read; tell the user now that the artifact could not be read, then go on without it.";
function a3o(e) {
    return vte(e) || e.errorCode !== undefined && Dt.has(e.errorCode);
}
function l3o(e) {
    return e.replace(`. ${ot}`, "").replace(`. ${Oe}`, "");
}
const Ut = p(()=>u({
        request_access: M(),
        reason: o().optional()
    }));
const oer = 15000;
async function jwn({ slug, env, sk, vanity }, i, { kind = "probe", relayOnly = false, agentPeer = false, actorId = false, syncLive = false, watchBoot = false, readBack = false, lean, pastVer, credentials }) {
    let T = Po();
    if (env !== T) {
        return {
            err: `that artifact URL is for ${env} claude.ai, but this session targets ${T}`,
            errorCode: "env_mismatch"
        };
    }
    let R = `via=model_read${kind === "probe" ? "&bk=probe" : ""}${kind === "probe" && lean !== undefined ? `&lean=${encodeURIComponent(lean)}` : ""}${agentPeer ? "&peer=agent" : ""}${actorId ? "&actor=id" : ""}${syncLive ? "&live=sync" : ""}${watchBoot || agentPeer || syncLive ? `&vn=${Wbt}` : ""}${readBack ? "&readback=1" : ""}${pastVer !== undefined ? `&ver=${encodeURIComponent(pastVer)}` : ""}`;
    let K = sk === undefined ? "" : `&sk=${encodeURIComponent(sk)}`;
    let L = vanity === undefined ? "" : `&vanity=${encodeURIComponent(vanity)}`;
    let E = `/api/frame/${slug}?${R}${K}${L}`;
    let U = {
        refreshOAuth: true,
        credentials,
        headers: Bd(),
        timeout: oer,
        signal: i
    };
    let A;
    let j = Date.now();
    let H = performance.now();
    try {
        A = relayOnly || dL() ? await md.getRelayOnly(E, U) : await md.get(E, U);
    } catch (error) {
        if (Oa(error)) {
            throw error;
        }
        return {
            err: "artifact read failed (network error)",
            errorCode: "boot_request_error",
            ...fZ(error) && {
                transient: true
            },
            request: {
                ...GX(error, H),
                wall_elapsed_ms: Date.now() - j,
                ...$C(error) && {
                    relay: true
                }
            }
        };
    }
    Ke(env, $3o(A));
    if (!A.ok) {
        if (A.reason === "relay-unavailable") {
            return {
                err: `artifact read failed (relay unavailable${A.status ? `, HTTP ${A.status}` : ""})`,
                ...A.status !== 0 && {
                    status: A.status
                },
                errorCode: "boot_relay_error"
            };
        }
        if (A.reason === "relay-not-served") {
            return {
                err: "artifact read failed (the session gateway does not serve this session)",
                errorCode: "boot_relay_not_served"
            };
        }
        return {
            err: A.reason === "no-auth" ? Jg(A.detail) : `artifact read unavailable: ${A.reason}`,
            errorCode: A.reason.replace(/-/g, "_")
        };
    }
    if (!A.fromFrame) {
        return {
            err: `artifact read failed (relay HTTP ${A.status})`,
            status: A.status,
            errorCode: "boot_relay_error"
        };
    }
    let x = e6() ? "Slack" : u8e() ? "Teams" : undefined;
    let I = `${x ?? "chat"} channel`;
    let fe = `add this ${I} (under "Add people, groups, or Claude Tags", paste the channel ID)`;
    let le = `sharing with a person or service account does not reach a ${I}'s Claude \u2014 ask the owner to open Share and ${fe}, or widen General access to the organization`;
    let ye = `${le}.`;
    if (A.status === 404) {
        let F = F3o(A.data);
        let Y = rs() && A.route === "direct";
        return {
            err: F ? "this artifact exists but nothing has been published to it yet, so there is nothing to read" : `artifact not found \u2014 it may have been deleted, or it has not been shared with you${x === undefined ? Y ? `. ${Oe}` : `. ${ot}` : `. If it is restricted to specific people, ${le}${Y ? `. ${Oe}` : ""}`}`,
            status: 404,
            ...r3(A.data) && {
                gone: true
            },
            ...F && {
                neverPublished: true
            },
            errorCode: "boot_404"
        };
    }
    if (A.status === 403 && Ft(A.data)) {
        return {
            err,
            status: 403,
            otherOrg: true,
            errorCode: Zit
        };
    }
    if (A.status === 403) {
        let F = Ut().safeParse(A.data);
        if (F.success && F.data.reason === "agent_not_added") {
            return {
                err: `this artifact is restricted to specific people, and this ${I}'s Claude is not one of them: ${ye}`,
                status: 403,
                errorCode: "boot_403_agent_not_added"
            };
        }
        if (F.success && F.data.reason === "agent_owned") {
            return {
                err: x === undefined ? "this artifact belongs to a chat channel's Claude and has not been shared with you — ask someone in the channel it was published from to open Share on it and add you." : `this artifact belongs to another ${I}'s Claude and has not been shared with this one \u2014 ask someone in the channel it was published from to open Share on it and ${fe}.`,
                status: 403,
                errorCode: "boot_403_agent_owned"
            };
        }
        if (F.success && F.data.request_access) {
            return {
                err: "you do not have access to this artifact. Open the link in a browser to request access from the owner.",
                status: 403,
                errorCode: "boot_403_request_access"
            };
        }
    }
    if (A.status === 400 && pastVer !== undefined) {
        return {
            err: "the server refused that version id (HTTP 400). Most likely it is not among the ones kept for this artifact: list its versions for the ids that are.",
            status: 400,
            errorCode: "boot_unknown_ver"
        };
    }
    if (A.status < 200 || A.status >= 300) {
        return {
            err: `artifact read failed (HTTP ${A.status})`,
            status: A.status,
            errorCode: "boot_failed"
        };
    }
    let B = A.data ?? {};
    let { ver, assetToken } = B;
    let re = B.mode === "public" || B.kind === "public";
    if (!ver || !assetToken && !re) {
        return {
            err: "artifact read failed: incomplete boot response",
            errorCode: "boot_incomplete"
        };
    }
    if (!eV.test(ver)) {
        return {
            err: "artifact read failed: malformed boot response",
            errorCode: "boot_bad_ver"
        };
    }
    if (pastVer !== undefined) {
        Sxt(slug, B.cowritten);
        y_r(slug, B.authoredByOthers);
        if (B.outsideWriter === true) {
            Qit(slug, true);
        }
        if (ver !== pastVer) {
            return {
                err: "artifact read failed: the server served a different version from the one asked for, so nothing was read. It does that for an account that cannot edit the artifact; for one that can, the server ignored the version asked for.",
                errorCode: "boot_past_ver_ignored"
            };
        }
        return {
            err: null,
            data: B,
            ver,
            assetToken: assetToken || undefined,
            route: A.route
        };
    }
    CJt(slug, B.artifactKind);
    vxt(slug, ber(B), j);
    Sxt(slug, B.cowritten);
    y_r(slug, B.authoredByOthers);
    Qit(slug, B.outsideWriter);
    let oe = B.lean === true;
    let external = B.mode === "external";
    if (!oe) {
        quo(slug, external);
    }
    if (IE()) {
        Vuo(slug, !assetToken);
    }
    wxt(slug, B.type);
    let { probeBoots } = ee().shareStatus;
    let _e = probeBoots.get(slug);
    if (_e !== undefined && _e.boot.ver !== ver) {
        probeBoots.delete(slug);
    }
    if (!oe && !re && (!external || B.perm?.role === "writer")) {
        Ve(slug, B.typeFacts, FB(vt(slug)), j, {
            external
        });
    }
    return {
        err: null,
        data: B,
        ver,
        assetToken: assetToken || undefined,
        route: A.route
    };
}
async function NC(e, n, r, { kind = "probe", gatePublicRead = true, relayOnly = false, agentPeer = false, actorId = false, syncLive = false, watchBoot = false, lean, speculative = false, readBack = false, pastVer, credentials, probeToolUseId }) {
    let R = speculative ? f : m;
    let K;
    if (probeToolUseId !== undefined && !agentPeer && !actorId && !syncLive && !watchBoot && lean === undefined && pastVer === undefined && !speculative) {
        let { probeBoots } = ee().shareStatus;
        let j = Date.now();
        for (let [x, I] of probeBoots){
            if (j - I.issuedAt > rt) {
                probeBoots.delete(x);
            }
        }
        let H = probeBoots.get(e.slug);
        if (H !== undefined && H.toolUseId === probeToolUseId && (kind === "probe" || H.boot.data.typeInstance === false) && !(relayOnly && rs() && H.boot.route !== "relay") && !HGt(e.slug, H.boot.ver).behind) {
            K = {
                ...H.boot,
                reused: true
            };
            t(`[artifact] ${n}: ${kind}-kind boot served from this tool use's share probe (probe issued ${j - H.issuedAt}ms ago) slug=${e.slug}`);
        }
    }
    let L = {
        kind,
        relayOnly,
        agentPeer,
        actorId,
        syncLive,
        watchBoot,
        readBack,
        pastVer,
        credentials
    };
    let E = K ?? await jwn(e, r, {
        ...L,
        lean: lean?.version
    });
    if (lean !== undefined && (E.err === null ? E.data.lean === true && !lean.mustCarry(E.data) : E.errorCode === "boot_incomplete")) {
        f(n, "lean_boot_incomplete");
        t(`[artifact] ${n}: the answer to a lean boot request was incomplete; booting in full slug=${e.slug}`);
        E = await jwn(e, r, L);
    }
    if (E.err !== null) {
        let A = E.errorCode === "boot_request_error" || E.errorCode === "boot_failed" ? {
            ...E.request,
            ...E.status !== undefined && {
                http_status: E.status
            },
            ...syncLive && {
                sync_live: true
            },
            ...agentPeer && {
                agent_peer: true
            },
            ...relayOnly && {
                relay_only: true
            }
        } : undefined;
        if (A !== undefined) {
            R(n, E.errorCode, A);
        } else {
            R(n, E.errorCode);
        }
        return {
            err: E.err,
            ...E.status !== undefined && {
                status: E.status
            },
            ...E.gone && {
                gone: true
            },
            ...E.neverPublished && {
                neverPublished: true
            },
            ...E.otherOrg && {
                otherOrg: true
            },
            ...E.transient && {
                transient: true
            },
            errorCode: E.errorCode
        };
    }
    let U = E;
    if (gatePublicRead && U.assetToken === undefined && !IE()) {
        R(n, "public_read_disabled");
        return {
            err: "artifact read failed: this artifact is served to you as a public (non-member) reader, and reading public artifacts that way is not enabled yet",
            errorCode: "public_read_disabled"
        };
    }
    return U;
}
async function c3o(e, n, r, { syncLive = false, lean } = {}) {
    let env = Po();
    let c = await NC({
        slug: e,
        env
    }, "artifact_live_subscribe", n, {
        agentPeer: syncLive,
        syncLive,
        watchBoot: true,
        ...lean !== undefined && {
            lean: {
                version: lean,
                mustCarry: (v)=>"subscriptionToken" in v && "syncToken" in v && "syncClient" in v && "subscriptionTokenExp" in v && "watchTokenRenewEnabled" in v && "perm" in v
            }
        },
        credentials: r
    });
    if (c.err !== null) {
        return {
            err: c.err,
            ...c.status && {
                status: c.status
            },
            ...c.otherOrg && {
                otherOrg: true
            },
            ...CK(c.status) && {
                unavailable: true
            },
            ...c.errorCode === "boot_request_error" && {
                noAnswer: true
            }
        };
    }
    if (c.assetToken === undefined) {
        return {
            err: LGt,
            publicOutsideOrg: true
        };
    }
    let y = rer(c.data);
    let b = c.data.syncClient === true;
    return {
        err: null,
        token: y?.token,
        transport: y?.transport ?? (b ? "sync" : "live"),
        ver: c.ver,
        editor: Ht(c),
        tokenExp: b ? undefined : st(c.data.subscriptionTokenExp),
        renewable: y?.transport === "live" && c.data.watchTokenRenewEnabled === true,
        ...typeof c.data.title === "string" && {
            title: c.data.title
        }
    };
}
function st(subscriptionTokenExp) {
    if (typeof subscriptionTokenExp === "number" && Number.isFinite(subscriptionTokenExp)) {
        return subscriptionTokenExp;
    }
}
function CK(e) {
    return e !== undefined && (e >= 500 || e === 429 || e === 408);
}
async function d3o(e, n, r) {
    let s;
    try {
        s = await md.post(`/api/frame/watch-token/${e}?vn=${Wbt}`, {}, {
            refreshOAuth: true,
            credentials: r,
            headers: Bd(),
            timeout: oer,
            signal: n
        });
    } catch (error) {
        if (Oa(error)) {
            throw error;
        }
        return {
            err: "renew_miss"
        };
    }
    if (!s.ok || !s.fromFrame || s.status < 200 || s.status >= 300) {
        return {
            err: "renew_miss",
            ...s.ok && {
                status: s.status
            }
        };
    }
    let i = s.data ?? {};
    let l = rer(i);
    let token = l?.transport === "live" ? l.token : undefined;
    if (!i.ver || !eV.test(i.ver) || token === undefined) {
        return {
            err: "renew_miss",
            status: s.status
        };
    }
    return {
        err: null,
        token,
        transport: "live",
        ver: i.ver,
        editor: undefined,
        tokenExp: st(i.subscriptionTokenExp),
        renewable: true
    };
}
function Ht(e) {
    return e.assetToken !== undefined && yae(e.data.perm?.role);
}
function yae(e) {
    return e === "owner" || e === "writer";
}
function A4r(e) {
    return e === "reader" || e === "viewer" || e === "commenter";
}
async function SZe(e, n, r, s) {
    let boot = await jwn(e, n, {
        readBack: s?.readBack === true,
        credentials: r
    });
    if (boot.err !== null) {
        return {
            err: boot.err,
            errorCode: boot.errorCode,
            ...boot.gone && {
                gone: true
            }
        };
    }
    let outsideOrgReader = boot.assetToken === undefined;
    let c = boot.data.perm?.role;
    let y = ICe(boot.data.outsideWriter);
    let b = $e(boot.data);
    return {
        err: null,
        mode: outsideOrgReader ? "public" : boot.data.perm?.mode ?? boot.data.mode,
        shared: boot.data.shared,
        role: outsideOrgReader && c === "owner" ? undefined : c,
        outsideOrgReader,
        cowritten: boot.data.cowritten === true,
        ...y !== undefined && {
            outsideWriter: y
        },
        ...typeof boot.data.title === "string" && {
            title: boot.data.title
        },
        ...b !== undefined && {
            readBack: b
        },
        boot
    };
}
function $e(data) {
    if (data.readback === undefined || typeof data.typeInstance !== "boolean") {
        return;
    }
    let n = ver(data.readback);
    if (n === undefined) {
        return;
    }
    let r = data.typeInstance || xZe(data.type) !== undefined;
    let n_typeLock = n.typeLock;
    if (r && n_typeLock === undefined) {
        return;
    }
    if (n_typeLock?.latest !== undefined && n_typeLock.latest !== n_typeLock.current) {
        return;
    }
    return n;
}
function zbt(e, n) {
    if (n === undefined) {
        return;
    }
    let r = ee().shareStatus.probeBoots.get(e);
    if (r !== undefined && r.toolUseId === n && Date.now() - r.issuedAt <= rt && !HGt(e, r.boot.ver).behind) {
        return $e(r.boot.data);
    }
}
const Ce = Sf + BMe + ze + 65536;
const vge = HM + BMe + 1;
const qe = {
    relayed: false,
    why: "the session gateway declined an artifact read a few minutes ago, so this read did not retry it",
    code: "declined"
};
const Wt = 5000;
const Kt = 1000;
function gGe() {
    return {
        remaining: 1
    };
}
function NGt(e) {
    return `the session gateway could not serve this read just now (HTTP ${e}, after one retry); this is transient \u2014 retry shortly`;
}
async function $Gt(e, n, r) {
    let s = ()=>Gt.get(lvs(e, n), {
            host: "ccr-gateway",
            auth: "session-jwt",
            headers: cvs(r.token),
            timeout: r.timeout,
            responseType: "arraybuffer",
            maxRedirects: 0,
            maxContentLength: r.maxContentLength,
            validateStatus: ()=>true,
            signal: r.signal
        });
    let i = await s();
    if (!i.ok || !CK(i.status) || r.retryBudget.remaining < 1) {
        return i;
    }
    r.retryBudget.remaining--;
    let l = i.response.headers?.["retry-after"];
    let c = Math.min(Rg(typeof l === "string" ? l : undefined) ?? Kt, Wt);
    t(`[artifact] mount answered HTTP ${i.status}; retrying once in ${c}ms slug=${e}`);
    await Q(c, r.signal, {
        abortError: ()=>new Ye
    });
    return s();
}
function FGt(e) {
    return e.contentVia === "frame" && !a.CLAUDE_CODE_REMOTE;
}
const jt = "x-frame-content-route";
const zt = 3;
const Yt = 10000;
async function UGt(e, n, r) {
    let s = `/api/frame/content/${encodeURIComponent(e)}${n}`;
    let i = Date.now() + r.timeout;
    let l = false;
    let c = 0;
    while(true){
        let y;
        try {
            y = await md.get(s, {
                headers: {
                    ...Bd(),
                    "x-frame-asset-token": r.token
                },
                credentials: r.credentials,
                recoverOAuth401: true,
                responseType: "arraybuffer",
                timeout: Math.max(i - Date.now(), 1),
                maxContentLength: r.maxContentLength,
                signal: r.signal
            });
        } catch (error) {
            if (Oa(error) || error instanceof Ye || l || !fZ(error) || Date.now() >= i) {
                throw error;
            }
            l = true;
            continue;
        }
        if (!y.ok) {
            return {
                kind: "declined"
            };
        }
        let headers = y.response.headers;
        if ((y.status === 429 || y.status === 503) && c < zt) {
            let v = headers?.["retry-after"];
            let P = Math.min(Rg(typeof v === "string" ? v : undefined) ?? 500 * 2 ** c, Yt);
            if (Date.now() + P + 1000 < i) {
                c++;
                await Q(P, r.signal, {
                    abortError: ()=>new Ye
                });
                continue;
            }
        }
        if (headers?.[jt] !== "served") {
            return {
                kind: "declined"
            };
        }
        return {
            kind: "answer",
            status: y.status,
            headers,
            data: y.data
        };
    }
}
function hGe(e) {
    let n = e;
    return n?.["x-frame-asset-content-type"] ?? n?.["content-type"];
}
async function Xt(e, n) {
    let retryBudget = gGe();
    let s = (c)=>$Gt(e.slug, c, {
            token: e.token,
            timeout: 30000,
            maxContentLength: e.fileRead ? vge : Ce,
            signal: e.signal,
            retryBudget
        });
    if (e.source !== undefined && !e.source.fellBack) {
        let c;
        try {
            c = await s(e.source.path);
        } catch (error) {
            if (Oa(error) || error instanceof Ye) {
                throw error;
            }
        }
        if (c?.ok && c.status === 200) {
            Ate(tC);
            return {
                relayed: true,
                result: n(Buffer.from(c.data ?? new ArrayBuffer(0)), hGe(c.response.headers), true)
            };
        }
        e.source.fellBack = c?.ok ? c.status : 0;
        t(`[artifact] stored-source read via the gateway fell back (${e.source.fellBack}) slug=${e.slug}`);
    }
    let i = (why, code, status)=>{
        if (status === 404 && !e.fileRead && !Ner(tC) && (KX() || !TGe(tC))) {
            YX(tC);
        }
        return {
            relayed: false,
            why,
            code,
            ...status !== undefined && {
                status
            }
        };
    };
    let l;
    try {
        l = await s(e.servedPath);
    } catch (error) {
        if (Oa(error) || error instanceof Ye) {
            throw error;
        }
        JEe();
        return i("the gateway request failed in transport", "request_error");
    }
    if (!l.ok) {
        if (l.reason === "no-auth") {
            return i(tYe(), "no_auth");
        }
        return i(`the gateway request was skipped (${l.reason})`, "client_policy");
    }
    if (MZe(l.status)) {
        return i("artifact reads through the session gateway are not enabled for this session", "not_served", l.status);
    }
    if (l.status === 404 && e.fileRead) {
        m(e.feature, "asset_file_not_found", {
            relay: true
        });
        return {
            relayed: true,
            result: {
                err: "no file is published at that path in the served version — or artifact reads through the session gateway are not enabled for this session",
                status: 404,
                ...Ner(tC) && yxt(l.response.headers, JQ(l.response.headers, l.data, (y)=>vZe(y, e.token))) && {
                    missingFile: true
                }
            }
        };
    }
    if (l.status === 404) {
        return i("artifact reads through the session gateway are not enabled for this session, or the artifact service no longer serves this version", "not_served", 404);
    }
    if (OZe(l.status, l.data)) {
        return i(IZe, "network_off", 403);
    }
    if (CK(l.status)) {
        return i(`temporarily unable: HTTP ${l.status} after one retry, so a later read may succeed`, "unavailable", l.status);
    }
    if (l.status < 200 || l.status >= 300) {
        JEe(l.status);
        return i(`the gateway refused the relay with HTTP ${l.status}`, "http", l.status);
    }
    Ate(tC);
    return {
        relayed: true,
        result: n(Buffer.from(l.data ?? new ArrayBuffer(0)), hGe(l.response.headers), false)
    };
}
function qt(e) {
    if (e === undefined) {
        return "";
    }
    if (!Yc(e) || Buffer.byteLength(e, "utf8") > 512) {
        return;
    }
    let n = e.split("/");
    for (let r of n){
        if (r === "" || r === "." || r === ".." || /[\\%\x00-\x1f\x7f]/.test(r)) {
            return;
        }
    }
    return n.map(encodeURIComponent).join("/");
}
function ser(e) {
    return e.servedAudienceVersion === true || e.audience === "owner" || e.audienceView === "live" || e.audienceView === "pinned-current";
}
const Zt = "_src";
function C4r(e) {
    return e.assetToken !== undefined && (e.data.mode !== "external" || e.data.perm?.role === "writer");
}
function R4r(e) {
    let { mode, perm } = e.data;
    if (mode === "external") {
        return "external";
    }
    if (e.assetToken === undefined) {
        return "public";
    }
    if (mode !== undefined) {
        return "unproven";
    }
    if (perm?.role === "owner") {
        return "own";
    }
    if (typeof perm?.mode === "string" && perm.mode !== "") {
        return "same";
    }
    return "unproven";
}
function x4r(e) {
    return e !== "own" && e !== "same";
}
function P4r(e, n) {
    return `/_f/${e}/${Zt}/${n === "" ? "index.html" : n}`;
}
const ier = 30000;
function BGt(e) {
    let host = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`;
    return {
        host,
        base: `https://${host}`
    };
}
function it(e) {
    if (e === "staging") {
        return "*.frame.staging.claudeusercontent.com";
    }
    return "*.frame.claudeusercontent.com";
}
function jGt(e) {
    let n = it(e);
    if (QY()) {
        return Ier(n);
    }
    if (rs()) {
        return `To allow direct artifact reads here, add ${n} to the environment's allowed domains: environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access.`;
    }
    if (a.CLAUDE_CODE_REMOTE) {
        return `To allow artifact reads here, add ${n} to the network allowlist of the environment this remote session runs in.`;
    }
    return `To allow artifact reads here, add ${n} to the network allowlist this session runs behind \u2014 the sandbox's allowed domains, or the Claude desktop app's network settings (Settings \u2192 Capabilities; a workspace admin can add it on Team/Enterprise).`;
}
function EA(e, n, r, s = "artifact_webfetch_read", i = "probe", l, c, y = false) {
    return Me(e, n, s, e.file, r, i, l, c, y);
}
async function wZe(e, n, r, s, i = "artifact_webfetch_read", l) {
    let c = JG(n);
    if ("errMsg" in c) {
        m(i, "invalid_path");
        return {
            err: `artifact read failed: ${c.errMsg}`
        };
    }
    return Me(e, r, i, c.key, s, "probe", undefined, l);
}
function u3o(e, n, r, s, i) {
    return Me(e, r, i, undefined, s, "probe", undefined, undefined, false, n);
}
async function Me(e, n, feature, s, i, kind, c, probeToolUseId, readBack = false, pastVer) {
    let P = qt(s);
    if (P === undefined) {
        m(feature, "invalid_file_path");
        return {
            err: "artifact file path is not a clean relative path"
        };
    }
    let S = await NC(e, feature, n, {
        kind,
        readBack,
        pastVer,
        credentials: i,
        probeToolUseId
    });
    if (S.err !== null) {
        return S;
    }
    let { ver, assetToken } = S;
    if (s !== undefined && assetToken === undefined) {
        m(feature, "public_file");
        return {
            err: "the files of a public artifact read from outside its organization are not readable this way",
            status: 403,
            publicFile: true
        };
    }
    if (assetToken === undefined && c?.() !== true) {
        f(feature, Xre);
        return {
            err: "this is a public artifact from outside your organization; its page is fetched only on a read the user approved, and this call carries no such approval — nothing was fetched",
            status: 403,
            publicUnasked: true
        };
    }
    let servedPath = `/_f/${ver}/${P}`;
    let source = C4r(S) ? {
        path: P4r(ver, P)
    } : undefined;
    let R = (h)=>{
        let w = {
            ...h && {
                source: true
            },
            ...!h && source?.fellBack !== undefined && {
                source_fallback_status: source.fellBack
            },
            ...S.reused && {
                boot_reused: true
            }
        };
        if (Object.keys(w).length > 0) {
            return w;
        }
    };
    let { title, favicon, perm, cowritten } = S.data;
    let A = S.data.artifactKind === Lk || vt(e.slug)?.artifactKind === Lk;
    let j = assetToken === undefined ? "public" : perm?.mode;
    let H = R4r(S);
    let role = perm?.role === "owner" ? "owner" : perm?.role === "writer" ? "writer" : "reader";
    let I = perm?.assignableReadModes;
    let shareMenu = role === "owner" && Array.isArray(I) && I.every((h)=>h === "owner" || Xe.some((w)=>w === h)) ? {
        modes: Xe.filter((h)=>I.includes(h) && !(A && h === "public")),
        ...typeof perm?.externalSharingEnabled === "boolean" && {
            externalSharing: perm.externalSharingEnabled
        },
        ...typeof perm?.externalInvitesEnabled === "boolean" && {
            externalInvites: perm.externalInvitesEnabled
        }
    } : undefined;
    let origin = Ge(S.data.origin_metadata);
    let ye = $e(S.data);
    let manifestPaths = Pt(S.data.files);
    let storeDocuments = Nt(S.data.dbUsage);
    let contentStore = typeof S.data.contentStore === "string" && Bt.test(S.data.contentStore) ? S.data.contentStore : undefined;
    let re = (raw, w, O, X = ()=>g(feature, R(O)))=>{
        X();
        let C = s === undefined ? "text/html" : typeof w === "string" ? Qe(w, ";").trim().toLowerCase() : "";
        let G = raw.toString("utf-8");
        let html = C === "text/html" ? Je(G) : G;
        let pe = ICe(S.data.outsideWriter);
        let q = h_r(pe, vt(e.slug)?.outsideWriter);
        return {
            err: null,
            html,
            contentType: C,
            raw,
            role,
            ...O && {
                source: true
            },
            cowritten: cowritten === true || A || vt(e.slug)?.cowritten === true,
            publicRead: assetToken === undefined,
            ...A4r(perm?.role) && {
                servedAudienceVersion: true
            },
            sameChannel: perm?.sameChannel === true && role === "writer",
            ...H === "external" && {
                external: true
            },
            ...x4r(H) && {
                offOrgRamp: true
            },
            typeLocked: J_e(e.slug, S.data.type),
            ...(S.data.authoredByOthers === true || vt(e.slug)?.authoredByOthers === true) && {
                authoredByOthers: true
            },
            ...FNe(role === "owner" && assetToken !== undefined, pe, q) && {
                outsideOrg: true
            },
            ...q !== undefined && {
                outsideWriter: q
            },
            ...shareMenu !== undefined && {
                shareMenu
            },
            ...j !== undefined && (()=>{
                let V = Q_e(j, S.data.shared);
                let dt = yae(perm?.role);
                let { live, shared } = S.data;
                let ut = typeof live === "string" && eV.test(live);
                let Se = typeof shared === "string" && eV.test(shared) ? shared : undefined;
                let ct = ut && (shared === undefined || shared === "") || Se !== undefined;
                return {
                    audience: V.mode,
                    ...dt && ct && V.mode !== "owner" && {
                        audienceView: Se === undefined ? "live" : Se === ver ? "pinned-current" : "pinned-earlier"
                    }
                };
            })(),
            bytes: C === "text/html" ? Buffer.byteLength(html, "utf8") : raw.length,
            title: typeof title === "string" ? title : "",
            ...favicon !== undefined && {
                favicon
            },
            ver,
            ...typeof S.data.fileCount === "number" && Number.isSafeInteger(S.data.fileCount) && S.data.fileCount > 0 && {
                fileCount: S.data.fileCount
            },
            ...manifestPaths !== undefined && {
                manifestPaths
            },
            ...storeDocuments !== undefined && {
                storeDocuments
            },
            ...contentStore !== undefined && {
                contentStore
            },
            ...origin !== undefined && {
                origin
            },
            ...ye !== undefined && {
                readBack: ye
            }
        };
    };
    if (A && s === undefined && pastVer === undefined) {
        let h = await ee().liveReplicas.renderLevel?.(e.slug, VQ, S.data.headSeq, n);
        if (h !== undefined) {
            t(`[artifact] read served from the local replica at seq ${h.head} slug=${e.slug}`);
            let w = re(Buffer.from(h.html, "utf8"), "text/html", false);
            if (w.err === null) {
                return {
                    ...w,
                    localReplica: {
                        head: h.head
                    }
                };
            }
            return w;
        }
    }
    let oe = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`;
    let de = jGt(e.env);
    let ue = (h, w)=>{
        if (h.code === "unavailable" && h.status !== undefined) {
            m(feature, "asset_relay_unavailable", {
                relay_status: h.status
            });
            return {
                err: `${NGt(h.status)}. Your access to the artifact itself is fine (the permission check passed); this environment cannot reach ${oe} directly, so its reads go through the gateway.`,
                status: h.status
            };
        }
        m(feature, "asset_egress_blocked", {
            relay: d(h.code),
            ...h.status !== undefined && {
                relay_status: h.status
            },
            ...!w && {
                connect: true
            }
        });
        return {
            err: `this environment's network allowlist blocks ${oe}, and the session gateway could not serve the read either (${h.why}); your access to the artifact itself is fine (the permission check passed). ${de}`,
            status: 403,
            ...w && {
                deterministic: "egress-blocked"
            }
        };
    };
    let _e = async (assetToken)=>{
        let w = (C)=>UGt(e.slug, C, {
                token: assetToken,
                timeout: ier,
                maxContentLength: s === undefined ? Ce : vge,
                signal: n,
                credentials: i
            });
        let O;
        try {
            if (source !== undefined && source.fellBack === undefined) {
                let C = await w(source.path).catch((G)=>{
                    if (Oa(G) || G instanceof Ye) {
                        throw G;
                    }
                    return {
                        kind: "answer",
                        status: 0,
                        headers: undefined,
                        data: undefined
                    };
                });
                if (C.kind === "answer" && C.status === 200) {
                    return re(Buffer.from(C.data ?? new ArrayBuffer(0)), hGe(C.headers), true, ()=>g(feature, {
                            ...R(true),
                            frame_content: true
                        }));
                }
                if (C.kind === "answer") {
                    source.fellBack = C.status;
                }
            }
            O = await w(servedPath);
        } catch (error) {
            if (Oa(error) || error instanceof Ye) {
                throw error;
            }
            m(feature, "asset_request_error", {
                frame_content: true
            });
            let G = fZ(error);
            let se = dd(error) && /^[A-Z][A-Z0-9_]{1,48}$/.test(error.code ?? "") ? ` ${error.code}` : "";
            return {
                err: `artifact content fetch failed (${G ? `network error${se} reaching the artifact service` : "read failed"})`,
                ...G && {
                    transient: true
                }
            };
        }
        if (O.kind === "declined") {
            if (source !== undefined) {
                source.fellBack = undefined;
            }
            return;
        }
        if (O.status >= 200 && O.status < 300) {
            return re(Buffer.from(O.data ?? new ArrayBuffer(0)), hGe(O.headers), false, ()=>g(feature, {
                    ...R(false),
                    frame_content: true
                }));
        }
        let X = JQ(O.headers, O.data, (C)=>vZe(C, assetToken));
        if (O.status === 404 && P !== "" && yxt(O.headers, X)) {
            f(feature, "file_not_in_manifest");
            return {
                err: "this version of the artifact has no file at that path",
                status: 404,
                missingFile: true
            };
        }
        m(feature, "asset_failed", {
            frame_content: true
        });
        return {
            err: `artifact content fetch failed (${Ze(O.status, O.headers, X)})`,
            status: O.status,
            respondent: true
        };
    };
    let F = (token, w)=>Xt({
            slug: e.slug,
            servedPath,
            fileRead: s !== undefined,
            feature,
            token,
            signal: n,
            ...source !== undefined && {
                source
            }
        }, (O, X, C)=>re(O, X, C, ()=>f(feature, w, R(C))));
    if (assetToken !== undefined && FGt(S.data)) {
        let h = await _e(assetToken);
        if (h !== undefined) {
            return h;
        }
    }
    let Y;
    if (assetToken !== undefined && ee().contentHostEgressDenied.has(e.env) && qX() && !i$(tC)) {
        let h = await F(assetToken, "asset_egress_relayed");
        if (h.relayed) {
            return h.result;
        }
        Y = h;
    }
    let Pe;
    let Ee = Pe ?? `https://${oe}`;
    let at = assetToken === undefined ? `${Ee}${servedPath}` : `${Ee}${servedPath}?__frame_t=${encodeURIComponent(assetToken)}`;
    let be = async (h)=>{
        ee().contentHostEgressDenied.add(e.env);
        let w = qX();
        if (assetToken !== undefined && w) {
            if (Y !== undefined) {
                return ue(Y, h);
            }
            if (i$(tC)) {
                return ue(qe, h);
            }
            let O = await F(assetToken, "asset_egress_relayed");
            if (O.relayed) {
                return O.result;
            }
            return ue(O, h);
        }
        m(feature, "asset_egress_blocked", {
            ...!h && {
                connect: true
            }
        });
        return {
            err: assetToken === undefined && w ? `this environment's network allowlist blocks ${oe}, and public (tokenless) artifacts are not served through the session gateway, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${de}` : `this environment's network allowlist blocks ${oe}, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${de}`,
            status: 403,
            ...h && {
                deterministic: "egress-blocked"
            }
        };
    };
    let Be = (h)=>Wa.get(h, {
            signal: n,
            timeout: ier,
            responseType: "arraybuffer",
            maxRedirects: 0,
            maxContentLength: s === undefined ? Ce : vge,
            validateStatus: ()=>true,
            ...Pe && {
                headers: {
                    Host: `${e.slug}.frame.localhost`
                }
            }
        });
    if (source !== undefined && assetToken !== undefined && source.fellBack === undefined && !ee().contentHostEgressDenied.has(e.env)) {
        let h;
        try {
            h = await Be(`${Ee}${source.path}?__frame_t=${encodeURIComponent(assetToken)}`);
        } catch (error) {
            if (Oa(error)) {
                throw error;
            }
            if (lbe(error)) {
                return be(false);
            }
        }
        if (h !== undefined && rF(h.status, h.headers)) {
            return be(true);
        }
        if (h !== undefined && h.status === 200) {
            return re(Buffer.from(h.data), h.headers?.["content-type"], true);
        }
        source.fellBack = h?.status ?? 0;
        t(`[artifact] stored-source read fell back (${source.fellBack}) slug=${e.slug}`);
    }
    let D;
    try {
        D = await Be(at);
    } catch (error) {
        if (Oa(error)) {
            throw error;
        }
        if (lbe(error)) {
            return be(false);
        }
        let w = AO(error);
        let O = w === undefined ? undefined : xat(w.headers) ?? QQ(w.headers);
        let X = fZ(error);
        let C = dd(error) && /^[A-Z][A-Z0-9_]{1,48}$/.test(error.code ?? "") ? ` ${error.code}` : "";
        let G = w !== undefined ? `proxy refused the connection: ${mq(w.connectStatus)}${O === undefined ? "" : `, ${O}`}` : X ? `network error${C}: could not connect to ${oe} on port 443 \u2014 the machine running Claude Code needs outbound HTTPS to ${it(e.env)} when the Artifact tool is enabled` : "read failed";
        let se = (V)=>{
            if (V === undefined) {
                return "";
            }
            return `, and the session gateway could not serve the read either (${V.why})`;
        };
        let pe = (V)=>V !== undefined && {
                relay: d(V.code),
                ...V.status !== undefined && {
                    relay_status: V.status
                }
            };
        if (w !== undefined && w.connectStatus === 407) {
            m(feature, "asset_proxy_refused", {
                status: w.connectStatus,
                ...pe(Y)
            });
            return {
                err: `artifact content fetch failed (${G})${se(Y)}`,
                status: w.connectStatus,
                ...O !== undefined && {
                    respondent: true,
                    safeErr: `artifact content fetch failed (proxy refused the connection: ${mq(w.connectStatus)})${se(Y)}`
                }
            };
        }
        let q = Y;
        if (assetToken !== undefined && q === undefined && X && qX()) {
            if (i$(tC)) {
                q = qe;
            } else {
                let V = await F(assetToken, "asset_unreachable_relayed");
                if (V.relayed) {
                    return V.result;
                }
                q = V;
            }
        }
        m(feature, "asset_request_error", {
            ...w !== undefined && {
                status: w.connectStatus
            },
            ...pe(q)
        });
        return {
            err: `artifact content fetch failed (${G})${se(q)}`,
            ...X && w === undefined && {
                transient: true
            },
            ...w !== undefined && w.connectStatus !== 0 && {
                status: w.connectStatus
            },
            ...w !== undefined && O !== undefined && {
                respondent: true,
                safeErr: `artifact content fetch failed (proxy refused the connection: ${mq(w.connectStatus)})${se(q)}`
            }
        };
    }
    if (rF(D.status, D.headers)) {
        return be(true);
    }
    ee().contentHostEgressDenied.delete(e.env);
    if (D.status < 200 || D.status >= 300) {
        let h = JQ(D.headers, D.data, (O)=>vZe(O, assetToken));
        if (D.status === 403 && assetToken === undefined && PCe(D.headers, h)) {
            m(feature, "public_asset_forbidden");
            return {
                err: "artifact is not publicly readable at this version",
                status: 403
            };
        }
        if (D.status === 404 && P !== "" && assetToken !== undefined && yxt(D.headers, h)) {
            f(feature, "file_not_in_manifest");
            return {
                err: "this version of the artifact has no file at that path",
                status: 404,
                missingFile: true
            };
        }
        let proxyDeny = _fo(D.status, h);
        m(feature, proxyDeny ?? "asset_failed");
        return {
            err: `artifact content fetch failed (${Ze(D.status, D.headers, h)})`,
            status: D.status,
            respondent: true,
            ...proxyDeny !== undefined && {
                safeErr: Rat[proxyDeny],
                proxyDeny
            }
        };
    }
    return re(Buffer.from(D.data), D.headers?.["content-type"], false);
}
function Ze(status, headers, r) {
    let s = [
        `HTTP ${status}`
    ];
    let i = QQ(headers);
    if (i === undefined && r.reason !== undefined) {
        s.push(`response body: "${dl(r.reason.replaceAll('"', "'"))}"`);
    } else if (i !== undefined) {
        s.push(`the environment's egress proxy reported: ${i}`);
    } else if (r.proxyError !== undefined) {
        s.push(`x-proxy-error header: "${dl(r.proxyError.replaceAll('"', "'"))}"`);
    }
    if (r.requestId !== undefined) {
        s.push(`x-request-id: ${r.requestId}`);
    }
    return s.join("; ");
}
function RK(e) {
    if (e.respondent) {
        return e.safeErr ?? `artifact content fetch failed (HTTP ${e.status ?? "error"})`;
    }
    return e.err;
}
function vZe(e, n) {
    let r = e.replace(/(?:_|%(?:25)*5f){2}frame(?:_|%(?:25)*5f)t(?:=|%(?:25)*3d)["']?[^\s&"'<>]*/gi, "__frame_t=[redacted]");
    if (n !== undefined && n !== "") {
        r = tt(r, n, "g");
        let s = encodeURIComponent(n);
        if (s !== n) {
            r = tt(r, s, "gi");
        }
    }
    return r;
}
const ve = 16;
const et = /[A-Za-z0-9._~%-]/;
function tt(e, n, r) {
    if (n.length <= ve) {
        return e.replaceAll(n, "[redacted]");
    }
    let s = new Set;
    for(let y = 0; y + ve <= n.length; y++){
        s.add(ml(n.slice(y, y + ve)));
    }
    let i = new RegExp(`(?:${[
        ...s
    ].join("|")})${et.source}*`, r);
    let l = "";
    let c = 0;
    for (let y of e.matchAll(i)){
        let b = y.index;
        while(b > c && et.test(e.charAt(b - 1))){
            b--;
        }
        l += `${e.slice(c, b)}[redacted]`;
        c = y.index + y[0].length;
    }
    return l + e.slice(c);
}
function p3o(e, html) {
    let r = Object.freeze({
        slug: e,
        html
    });
    ee().mintedStoredPageProbes.add(r);
    return r;
}
function f3o(e) {
    return typeof e === "object" && e !== null && ee().mintedStoredPageProbes.has(e);
}
export { h4r, JZn, AK, lGe, hx, dT, pI, Dwn, hae, Lwn, QZn, JG, Y6o, X6o, cGe, y4r, dGe, uGe, _4r, e3, b4r, S4r, J6o, Wbt, w4r, HGt, Q6o, Z6o, Nwn, e3o, DGt, ZZn, pb, t3o, v4r, bZe, n3o, r3o, E4r, k4r, T4r, WX, $wn, eer, LMe, Fwn, o3o, s3o, ter, Uwn, ner, aL, Bwn, rer, uE, vte, pGe, Fj, fGe, mGe, LGt, i3o, a3o, l3o, oer, jwn, NC, c3o, CK, d3o, yae, A4r, SZe, zbt, vge, gGe, NGt, $Gt, FGt, UGt, hGe, ser, C4r, R4r, x4r, P4r, ier, BGt, jGt, EA, wZe, u3o, RK, vZe, p3o, f3o };
