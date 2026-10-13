import { we, Kr, BO, ek, Ce, Gse, od } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ke, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Bn, TC, fa, ll, ks } from "/$bunfs/root/chunk-xgw72tt1.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { _, DO, ppt, yo, ie, Rn, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, Yc, Qe, Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { et, Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { Pr, ws as sources, Lo, cn, Cp } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { HY, mFe } from "/$bunfs/root/chunk-0ycjphb5.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { ep } from "/$bunfs/root/chunk-3yz9zdww.js";
import { ul } from "/$bunfs/root/chunk-fnj5y75n.js";
import { xR } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { VE, Tut } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { yn, Hv, ry, fe, yg } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { oN, qB } from "/$bunfs/root/chunk-md7g8y4m.js";
import { wxn, m4, bT } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { oRt } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { RE } from "/$bunfs/root/chunk-pfdtn0nk.js";
import { gu, ha, Ki, _r } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { xB } from "/$bunfs/root/chunk-9fvky64k.js";
import { Inr, VU, Uae, sTn, oor, Tqt, ott, Hke, MXr, HXr, Nhe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { br, kT } from "/$bunfs/root/chunk-ytkshq2j.js";
import { Cu } from "/$bunfs/root/chunk-jfcrjtbk.js";
import { aYo, lYo, Z_t, oge, wSn, gVr } from "/$bunfs/root/chunk-gvnqty6z.js";
import { Lj, iae } from "/$bunfs/root/chunk-m4z5ws6t.js";
import { Bze, fte, Ezt, NX, MEe, jze, kzt, HEe, W7e } from "/$bunfs/root/chunk-f3nx7zc0.js";
import { sM } from "/$bunfs/root/chunk-g0e9c50d.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { lstat, readdir, readlink, realpath, stat, open } from "fs/promises";
import { dirname, extname, join, posix, relative, resolve, sep, win32, isAbsolute } from "path";
function tt(e, n = Lj) {
    if (e.isSymbolicLink()) {
        return "symlink";
    }
    if (!e.isFile()) {
        return "not_regular_file";
    }
    if (e.nlink > 1) {
        return "hard_link";
    }
    if (e.size > n) {
        return "too_large";
    }
    return null;
}
function an(e) {
    return e === "" || e === ".." || e.startsWith(`..${sep}`) || isAbsolute(e);
}
async function ln(e, n) {
    let r = Buffer.allocUnsafe(n);
    let o = 0;
    while(o < n){
        let { bytesRead } = await e.read(r, o, n - o, o);
        if (bytesRead === 0) {
            break;
        }
        o += bytesRead;
    }
    return r.subarray(0, o);
}
async function nt(e, n, r) {
    let o = await ln(e, Number(n.size));
    if (BigInt(o.length) < n.size) {
        t(`working file ${r}: ${o.length} of the ${n.size} bytes that its stat promised came, with no error; skipped as changed`);
        return {
            kind: "skip",
            skipped: {
                path: r,
                reason: "changed"
            }
        };
    }
    return {
        kind: "read",
        content: o,
        mode: Number(n.mode) & 511
    };
}
async function rt(realConfigHome, n, nativeRel, o = null, s = Lj) {
    try {
        if (o !== null) {
            return await un(o, nativeRel, s);
        }
        let a = join(realConfigHome, nativeRel);
        let l = await lstat(a, {
            bigint: true
        });
        let u = tt(l, s);
        if (u !== null) {
            return {
                kind: "skip",
                skipped: {
                    path: nativeRel,
                    reason: u
                }
            };
        }
        if (TC(a)) {
            return {
                kind: "skip",
                skipped: {
                    path: nativeRel,
                    reason: "unreadable"
                }
            };
        }
        if (an(relative(n, await realpath(a)))) {
            return {
                kind: "skip",
                skipped: {
                    path: nativeRel,
                    reason: "outside_root"
                }
            };
        }
        let f = await open(a, Cu());
        try {
            let p = await f.stat({
                bigint: true
            });
            if (p.dev !== l.dev || p.ino !== l.ino) {
                return {
                    kind: "skip",
                    skipped: {
                        path: nativeRel,
                        reason: "changed"
                    }
                };
            }
            if (p.size > s) {
                return {
                    kind: "skip",
                    skipped: {
                        path: nativeRel,
                        reason: "too_large"
                    }
                };
            }
            return await nt(f, p, nativeRel);
        } finally{
            await f.close();
        }
    } catch (error) {
        let errnoCode = v(error);
        let u = errnoCode === "ELOOP" || errnoCode === "EMLINK" || errnoCode === "WORKING_PARENT_NOT_DIRECTORY" ? "symlink" : "unreadable";
        return {
            kind: "skip",
            skipped: {
                path: nativeRel,
                reason: u
            },
            ...u === "unreadable" && errnoCode !== undefined && {
                errnoCode
            }
        };
    }
}
async function un(e, nativeRel, r) {
    let o = await e.open(nativeRel, Cu());
    try {
        let s = await o.stat({
            bigint: true
        });
        let a = tt(s, r);
        if (a !== null) {
            return {
                kind: "skip",
                skipped: {
                    path: nativeRel,
                    reason: a
                }
            };
        }
        return await nt(o, s, nativeRel);
    } finally{
        await o.close();
    }
}
const He = /(^|[\s\][])@(?=((?:[^\s\\]|\\ )+))/g;
function Le(e, n = re, r) {
    let o = e.replace(/\r\n?/g, `
`);
    let s = r === undefined ? n : (l)=>{
        let u = n(l);
        if (!u) {
            r.push(l);
        }
        return u;
    };
    let a = lt(o, new bT({
        gfm: false
    }).lex(o), ut, s);
    if (Fe(a, n)) {
        return ee(a);
    }
    return a;
}
var re = ()=>false;
function dn(e, n) {
    if (e.type === "code" || e.type === "codespan" || e.type === "escape") {
        return e.raw;
    }
    if (e.type === "html") {
        return fn(e.raw, n);
    }
    let r = [
        ...e.tokens ?? [],
        ...e.items ?? []
    ];
    if (r.length === 0) {
        if (e.type === "text") {
            return ot(e.raw, n);
        }
        return e.raw;
    }
    let o = lt(e.raw, r, (s)=>s, n);
    if (e.type === "text") {
        return ot(o, n);
    }
    return o;
}
function lt(e, n, r, o) {
    let s = "";
    let a = 0;
    for (let l of n){
        let u = e.indexOf(l.raw, a);
        if (u === -1) {
            return s + ut(e.slice(a));
        }
        s += r(e.slice(a, u)) + dn(l, o);
        a = u + l.raw.length;
    }
    return s + r(e.slice(a));
}
function ot(e, n) {
    return e.replace(He, (r, o, s)=>{
        if (n(pe(s))) {
            return r;
        }
        return `${o}\\@`;
    });
}
function pe(e) {
    return Qe(e, "#").replaceAll("\\ ", " ");
}
function fn(raw, n) {
    let r = raw.trimStart();
    if (!(r.startsWith("<!--") && r.includes("-->"))) {
        return raw;
    }
    let o = [];
    let s = "";
    let rawStart = 0;
    for (let u of raw.matchAll(/<!--[\s\S]*?-->/g)){
        o.push({
            rawStart,
            residueStart: s.length
        });
        s += raw.slice(rawStart, u.index);
        rawStart = u.index + u[0].length;
    }
    o.push({
        rawStart,
        residueStart: s.length
    });
    s += raw.slice(rawStart);
    return [
        ...s.matchAll(He)
    ].filter((u)=>!n(pe(u[2] ?? ""))).map((u)=>{
        let f = u.index + (u[1] ?? "").length;
        let { rawStart, residueStart } = o.findLast((y)=>y.residueStart <= f) ?? {
            rawStart: 0,
            residueStart: 0
        };
        return rawStart + (f - residueStart);
    }).reduceRight((acc, item)=>`${acc.slice(0, item)}\\${acc.slice(item)}`, raw);
}
function ut(e) {
    let n = null;
    return e.split(`
`).map((r)=>{
        let o = /^[\s>]*(`{3,}|~{3,})/.exec(r)?.[1] ?? null;
        if (n === null) {
            if (o === null) {
                return pn(r);
            }
            n = o;
            return r;
        }
        if (o !== null && o[0] === n[0] && o.length >= n.length && /^[\s>]*[`~]+\s*$/.test(r)) {
            n = null;
        }
        return r;
    }).join(`
`);
}
function pn(e) {
    return e.replace(/@/g, (n, r)=>{
        if (Pe(e, r) || /[\p{L}\p{N}]/u.test(e[r - 1] ?? "")) {
            return n;
        }
        return "\\@";
    });
}
function dt(body) {
    return Object.keys(new bT({
        gfm: false
    }).lex(body).links).length > 0;
}
function ee(e) {
    return e.replace(/@/g, (n, r)=>{
        if (Pe(e, r)) {
            return n;
        }
        return "\\@";
    });
}
function Pe(e, n) {
    let r = 0;
    while(e[n - 1 - r] === "\\"){
        r++;
    }
    return r % 2 === 1;
}
const be = {
    vettable: false
};
function Ee(e, n) {
    let r = new bT({
        gfm: false
    }).lex(n);
    let s = [
        ...D(D([
            n,
            e
        ]).flatMap((l)=>[
                l,
                l.replace(/\\([[\]])/g, "$1")
            ])).map((l)=>it(l, "as_loader")),
        ...mn(r).map((l)=>it(l, "every_at"))
    ];
    let spellings = D([
        ...ft(r),
        ...s.flatMap((l)=>{
            if (l.vettable) {
                return l.spellings;
            }
            return [];
        })
    ]);
    if (s.every((l)=>l.vettable) && spellings.length <= hn) {
        return {
            vettable: true,
            spellings
        };
    }
    return be;
}
function mn(e) {
    let n = (r)=>r.flatMap((o)=>{
            if (o.type === "code" || o.type === "codespan") {
                return [];
            }
            if (o.type === "html") {
                let s = o.raw.trimStart();
                if (s.startsWith("<!--") && s.includes("-->")) {
                    return [
                        o.raw.replace(/<!--[\s\S]*?-->/g, "")
                    ];
                }
                return [];
            }
            return n([
                ...o.tokens ?? [],
                ...o.items ?? []
            ]);
        });
    return n(e);
}
const ct = 4096;
const gn = 64;
var hn = 4096;
const Sn = 1048576;
const _n = /@(?!@)(?=[^\s\\]|\\ )/g;
const kn = new RegExp(String.raw`(?:[^\s\\]|\\ ){1,${ct + 1}}`, "y");
const Re = /[\p{L}\p{N}]/u;
const bn = /[*_[\]!<`]/g;
function it(e, n) {
    let r = [];
    let o = 0;
    let s = new RegExp(kn);
    for (let a of e.matchAll(_n)){
        if (n === "as_loader" && (Re.test(e[a.index - 1] ?? "") || Pe(e, a.index))) {
            continue;
        }
        s.lastIndex = a.index + 1;
        let run = s.exec(e)?.[0] ?? "";
        o += run.length;
        if (run.length > ct || o > Sn) {
            return be;
        }
        let closers = wn(run);
        if (closers.length > gn) {
            return be;
        }
        r.push({
            run,
            closers
        });
    }
    return {
        vettable: true,
        spellings: r.flatMap(({ run, closers })=>D([
                run,
                ...closers.map((u)=>run.slice(0, u))
            ]).flatMap((u)=>{
                let f = pe(u);
                if (f === "" || f.startsWith("@")) {
                    return [];
                }
                return [
                    f
                ];
            }))
    };
}
function wn(run) {
    return [
        ...run.matchAll(bn)
    ].filter((n)=>n.index > 0 && !vn(run, n)).map((n)=>n.index);
}
function vn(run, n) {
    return n[0] === "_" && Re.test(run[n.index - 1] ?? "") && Re.test(run[n.index + 1] ?? "");
}
function Fe(e, n = re) {
    return Te(e).some((r)=>!n(r));
}
function Te(e) {
    return ft(new bT({
        gfm: false
    }).lex(e));
}
function ft(e) {
    let n = (r)=>r.flatMap((o)=>{
            if (o.type === "code" || o.type === "codespan") {
                return [];
            }
            if (o.type === "html") {
                let s = o.raw.trimStart();
                if (s.startsWith("<!--") && s.includes("-->")) {
                    return st(o.raw.replace(/<!--[\s\S]*?-->/g, ""));
                }
                return [];
            }
            return [
                ...o.type === "text" ? st(o.text ?? o.raw) : [],
                ...n([
                    ...o.tokens ?? [],
                    ...o.items ?? []
                ])
            ];
        });
    return n(e);
}
function st(e) {
    return [
        ...e.matchAll(He)
    ].flatMap((n)=>{
        let r = pe(n[2] ?? "");
        if (r.startsWith("./") || r.startsWith("~/") || r.startsWith("/") && r !== "/" || !r.startsWith("@") && !/^[#%^&*()]+/.test(r) && /^[a-zA-Z0-9._-]/.test(r)) {
            return [
                r
            ];
        }
        return [];
    });
}
function Ie(body) {
    let o = new bT({
        gfm: false
    }).lex(`${body}

<!-- ccr-home-probe -->
`).findLast((s)=>s.type !== "space");
    return !(o?.type === "html" && o.raw.trim() === "<!-- ccr-home-probe -->");
}
function pt(rel) {
    return `

<!-- inlined import: ${encodeURI(rel)} -->

`;
}
const gt = 4096;
const includeExternal = true;
async function ht(configHome, signal) {
    if (Ce()) {
        t("home inventory: memory files not read in a diskless session; nothing is sent");
        return null;
    }
    let r = {
        reads: 0
    };
    let o = await Hn(configHome, r, signal);
    if (o === null) {
        return null;
    }
    let s = new Map;
    for(let a = o.pop(); a !== undefined; a = o.pop()){
        let l = `${a.type}\x00${ep(a.path)}`;
        if (s.has(l)) {
            continue;
        }
        if (signal?.aborted) {
            return null;
        }
        s.set(l, a);
        let u = await VU(a.path, a.type, new Set, includeExternal, Inr - 2);
        r.reads += u.length;
        if (r.reads > gt) {
            return null;
        }
        o.push(...u.filter((f)=>f.path !== a.path));
    }
    return [
        ...s.values()
    ];
}
async function Hn(configHome, n, signal) {
    let o = (u, f)=>()=>VU(u, f, new Set, includeExternal, f === "User" ? 0 : Inr - 1);
    let s = (rulesDir, type)=>async ()=>[
                ...await Uae({
                    rulesDir,
                    type,
                    processedPaths: new Set,
                    includeExternal,
                    conditionalRule: false
                }),
                ...await Uae({
                    rulesDir,
                    type,
                    processedPaths: new Set,
                    includeExternal,
                    conditionalRule: true
                })
            ];
    let a = [
        o(HY("Managed"), "Managed"),
        s(mFe(), "Managed"),
        o(join(configHome, NX), "User"),
        s(join(configHome, MEe), "User")
    ];
    let l = [];
    for (let u of a){
        if (signal?.aborted) {
            return null;
        }
        let f = await u();
        n.reads += f.length;
        if (n.reads > gt) {
            return null;
        }
        l.push(...f);
    }
    return l;
}
const oe = ".md";
const Fn = 50000;
const Ht = sep === win32.sep ? win32 : posix;
const Tn = sep === win32.sep ? /[\\/]+/ : /\/+/;
function de(e, sep) {
    return (sep === "/" ? e : e.split(sep).join("/")).normalize("NFC");
}
function G(e, n = Ht) {
    return e === ".." || e.startsWith(`..${n.sep}`) || n.isAbsolute(e);
}
function In(configHome, n, r = Ht) {
    let o = r.relative(configHome, n);
    if (r.isAbsolute(o)) {
        return null;
    }
    let s = r.resolve(configHome, o);
    let a = r.resolve(n);
    if (r === win32 ? s.toLowerCase() === a.toLowerCase() : s === a) {
        return o;
    }
    return null;
}
async function W(e) {
    if (TC(e)) {
        throw Error("realpath would misread a backslash in the path");
    }
    return realpath(e);
}
function yt(resolvedPath) {
    if (TC(resolvedPath)) {
        return {
            resolvedPath,
            isSymlink: false,
            isCanonical: false
        };
    }
    return yo(ie(), resolvedPath);
}
const xn = 4096;
async function $e(e, n, r, o) {
    let realPath;
    try {
        realPath = await W(n);
    } catch  {
        return "unresolvable";
    }
    let nativeRel = relative(e.realConfigHome, realPath);
    if (nativeRel === "" || G(nativeRel)) {
        return "outside";
    }
    let rel = de(nativeRel, sep);
    return {
        realPath,
        nativeRel,
        rel,
        lexicalRel: r ?? rel,
        rawRels: D([
            Pt(nativeRel),
            ...o === null ? [] : [
                o
            ]
        ])
    };
}
async function An(e, n) {
    try {
        let r = await W(n);
        return ye(e, r) || !G(relative(e.realConfigHome, r));
    } catch  {
        return true;
    }
}
function ye(e, n) {
    return !G(relative(n, e.realConfigHome));
}
function Pt(e) {
    if (sep === "/") {
        return e;
    }
    return e.split(sep).join("/");
}
function Et(e, n) {
    let r = [
        e.configHome,
        e.realConfigHome
    ].map((o)=>relative(o, n)).find((o)=>o !== "" && !G(o));
    if (r === undefined) {
        return null;
    }
    return {
        rel: de(r, sep),
        raw: Pt(r)
    };
}
function je(e) {
    let n = ul(Qe(e, "/"));
    return Yc(e) && e.includes("/") && extname(e).toLowerCase() === oe && !iae(e) && !Cn.test(e) && !sTn.has(n) && !n.startsWith("agent-memory") && !Mn(e) && !Ft(e);
}
function Ft(e) {
    let n = ul(Qe(e, "/"));
    return n === ul(MEe) || n === ul(jze);
}
function Mn(e) {
    let [n, r] = e.split("/");
    return ul(n ?? "") === "skills" && ul(r ?? "") === xB;
}
var Cn = /~\d/;
const Un = 32;
async function On(e) {
    let n = e;
    let r = new Set;
    for(let o = 0; o < Un; o += 1){
        if (r.has(n)) {
            return false;
        }
        r.add(n);
        let s;
        try {
            s = await readlink(n);
        } catch (error) {
            return St(error);
        }
        if (s.includes("\uFFFD")) {
            throw Error("link body is not valid UTF-8");
        }
        let a;
        try {
            a = resolve(await W(dirname(n)), s);
        } catch (error) {
            if (v(error) === "ENAMETOOLONG") {
                throw error;
            }
            return St(error);
        }
        if ($n(s)) {
            throw Error("link body climbs out of a directory it entered");
        }
        if (ks(s) || DO(a)) {
            return true;
        }
        try {
            if (!(await lstat(a)).isSymbolicLink()) {
                return false;
            }
        } catch (error) {
            if (!O(error) || v(error) === "ENAMETOOLONG" && !Dn(s)) {
                throw error;
            }
            return false;
        }
        n = a;
    }
    throw Error("link chain too long to vet");
}
function St(error) {
    if (O(error) || v(error) === "EINVAL") {
        return true;
    }
    throw error;
}
function O(e) {
    let n = v(e);
    return n === "ENOENT" || n === "ENOTDIR" || n === "ELOOP" || n === "ENAMETOOLONG";
}
function Dn(e) {
    return e.split(/[\\/]/).some((n)=>[
            ...n
        ].length > 255);
}
async function Tt(e) {
    try {
        await stat(e);
        return false;
    } catch (error) {
        return O(error);
    }
}
async function Nn(e) {
    try {
        return !(await stat(e)).isDirectory();
    } catch (error) {
        return O(error);
    }
}
function $n(e) {
    let n = false;
    for (let r of e.split(Tn)){
        if (r === "..") {
            if (n) {
                return true;
            }
        } else if (r !== "" && r !== ".") {
            n = true;
        }
    }
    return false;
}
const le = {
    ok: false,
    reason: "aborted"
};
async function It({ configHome, isUserSettingsFileSendable, readRules, createFilter, signal, aliasDirectories = xn, settingsToCloud = oN }) {
    if (Ce()) {
        return {
            ok: false,
            reason: "diskless"
        };
    }
    if (!await settingsToCloud().catch(()=>false)) {
        return {
            ok: false,
            reason: "flag_off"
        };
    }
    try {
        if (!isUserSettingsFileSendable || !readRules.complete) {
            return xe({
                rulesUnreadable: true
            });
        }
        if (!cn("userSettings")) {
            return xe({
                rulesUnreadable: false
            });
        }
        let u;
        try {
            u = await W(configHome);
        } catch (error) {
            if (O(error) && await Tt(configHome)) {
                return xe({
                    rulesUnreadable: false
                });
            }
            return {
                ok: false,
                reason: "alias_unreadable"
            };
        }
        let f = {
            configHome,
            realConfigHome: u,
            aliasBudget: {
                left: aliasDirectories
            },
            giveUp: null,
            topLevelLinks: []
        };
        f.topLevelLinks = await Gn(f);
        let p = createFilter(configHome, {
            realRoot: u,
            readRules
        });
        let g = {
            held: new Map
        };
        let y = new Set;
        let S = new Set;
        let E = new Map;
        let H = new Map;
        let P = kT() ? {
            files: [],
            leftBehind: []
        } : await jn(f);
        if (f.giveUp === null) {
            let R = await ht(configHome, signal);
            if (sM(signal)) {
                return le;
            }
            if (R === null) {
                return {
                    ok: false,
                    reason: "too_many_links"
                };
            }
            for (let T of R){
                if (sM(signal)) {
                    return le;
                }
                await ze(f, p, T, H);
            }
        }
        let A = await Vn(f, p, P.files, g, y, S, E, H, signal);
        if (A === null) {
            return le;
        }
        let x = br("outputStyles") ? {
            files: [],
            leftBehind: []
        } : await At(f, jze);
        let h = await Jn(f, p, x.files, g, y, S, H);
        if (f.giveUp !== null) {
            return {
                ok: false,
                reason: f.giveUp
            };
        }
        let m = [
            ...g.held.values()
        ];
        let U = new Set;
        let k = new Map;
        for (let R of [
            ...m.filter((T)=>T.kind === "output_style"),
            ...m.filter((T)=>T.kind !== "output_style")
        ]){
            if (sM(signal)) {
                return le;
            }
            let T = await qn(f, p, R, H, U, S);
            if (T.entry === null) {
                U.add(R.location.realPath);
            }
            k.set(R, T);
        }
        let w = m.flatMap((R)=>k.get(R) ?? []);
        let { kept, droppedOverCap } = lYo(w.flatMap(({ entry, foldedIncludes })=>{
            if (entry === null) {
                return [];
            }
            return [
                {
                    content: entry.content,
                    entry,
                    foldedIncludes
                }
            ];
        }).toSorted((R, T)=>Kn(R.entry, T.entry)));
        let N = [
            ...E
        ].filter(([R])=>!y.has(R) && !S.has(R)).map(([R, T])=>H.get(R) ?? T);
        let X = [
            ...P.leftBehind,
            ...A,
            ...N,
            ...x.leftBehind,
            ...h,
            ...w.flatMap((R)=>R.leftBehind),
            ...droppedOverCap.flatMap(({ entry, foldedIncludes })=>[
                    {
                        path: entry.path,
                        reason: "over_cap"
                    },
                    ...foldedIncludes.map((ae)=>({
                            path: ae,
                            reason: "include_not_sent"
                        }))
                ])
        ];
        let entries = kept.map(({ entry })=>entry);
        return {
            ok: true,
            inventory: {
                entries,
                summary: xt(entries, X),
                leftBehind: X
            }
        };
    } catch (error) {
        if (sM(signal)) {
            return le;
        }
        t(`home inventory: gave the run up \u2014 ${error instanceof Error ? error.message : String(error)}`);
        return {
            ok: false,
            reason: "alias_unreadable"
        };
    }
}
function xe({ rulesUnreadable }) {
    return {
        ok: true,
        inventory: {
            entries: [],
            summary: {
                ...xt([], []),
                rulesUnreadable
            },
            leftBehind: []
        }
    };
}
function xt(e, n) {
    return {
        withheldSensitive: Y(n, "sensitive"),
        withheldReadDenied: Y(n, "read_denied"),
        rulesUnreadable: false,
        includesNotSent: Y(n, "include_not_sent"),
        symlinksNotSent: Y(n, "symlink_not_sent"),
        notDestinations: Y(n, "not_destination"),
        unreadable: Y(n, "unreadable"),
        overCap: Y(n, "over_cap"),
        undefusable: Y(n, "undefusable"),
        inlinedImports: e.reduce((acc, item)=>acc + item.folded.length, 0),
        defusedImports: e.reduce((acc, item)=>acc + item.defused, 0)
    };
}
function Y(e, n) {
    return F(e, (r)=>r.reason === n);
}
const _t = {
    claude_md: 0,
    rule: 1,
    output_style: 2
};
function Kn(entry, n) {
    return _t[entry.kind] - _t[n.kind] || entry.content.length - n.content.length || (entry.path < n.path ? -1 : entry.path > n.path ? 1 : 0);
}
async function jn(e) {
    let n = join(e.configHome, NX);
    let r = await Mt(e, n);
    let o = await At(e, MEe);
    if (r === null) {
        return o;
    }
    let s = r.isSymlink ? await ce(e, n) : undefined;
    if (s?.isDirectory() === true && await An(e, n)) {
        e.giveUp ??= "alias_unreadable";
    }
    if (s === null || s !== undefined && !s.isFile()) {
        return {
            files: o.files,
            leftBehind: [
                {
                    path: NX,
                    reason: "symlink_not_sent"
                },
                ...o.leftBehind
            ]
        };
    }
    return {
        files: [
            {
                path: n,
                lexicalRel: NX,
                rawLexicalRel: NX,
                viaSymlink: r.isSymlink,
                aliasOnly: false
            },
            ...o.files
        ],
        leftBehind: o.leftBehind
    };
}
async function At(e, n) {
    let r = join(e.configHome, n);
    let o = await Mt(e, r);
    if (o === null) {
        return {
            files: [],
            leftBehind: []
        };
    }
    if (o.isSymlink) {
        let s = await ce(e, r);
        if (s === null || !s.isDirectory()) {
            return {
                files: s !== null && s.isFile() ? [
                    {
                        path: r,
                        lexicalRel: n,
                        rawLexicalRel: n,
                        viaSymlink: true,
                        aliasOnly: true
                    }
                ] : [],
                leftBehind: [
                    {
                        path: n,
                        reason: "symlink_not_sent"
                    }
                ]
            };
        }
    }
    return Ct(e, r, [
        n
    ], o.isSymlink, new Set);
}
async function Gn(e) {
    let n;
    try {
        n = await readdir(e.configHome, {
            withFileTypes: true
        });
    } catch (error) {
        if (!O(error)) {
            e.giveUp ??= "alias_unreadable";
        }
        return [];
    }
    let r = [];
    for (let o of n){
        let s = join(e.configHome, o.name);
        let a = await Ge(e, s, o);
        if (a === null || !a.isSymbolicLink()) {
            continue;
        }
        if (await ce(e, s) === null) {
            continue;
        }
        let l;
        try {
            l = await W(s);
        } catch  {
            e.giveUp ??= "alias_unreadable";
            continue;
        }
        if (ye(e, l)) {
            e.giveUp ??= "alias_unreadable";
            continue;
        }
        let u = relative(e.realConfigHome, l);
        if (!G(u)) {
            r.push({
                name: o.name.normalize("NFC"),
                targetRel: de(u, sep)
            });
        }
    }
    return r;
}
function Wn(e, n) {
    return e.topLevelLinks.flatMap(({ name, targetRel })=>{
        if (n === targetRel) {
            return [
                name
            ];
        }
        if (n.startsWith(`${targetRel}/`)) {
            return [
                `${name}/${n.slice(targetRel.length + 1)}`
            ];
        }
        return [];
    });
}
async function Mt(e, n) {
    try {
        return {
            isSymlink: (await lstat(n)).isSymbolicLink()
        };
    } catch (error) {
        if (!O(error)) {
            e.giveUp ??= "alias_unreadable";
        }
        return null;
    }
}
async function Ct(e, n, r, o, s) {
    let a = r.join("/").normalize("NFC");
    let l = {
        files: [],
        leftBehind: [
            {
                path: a,
                reason: "symlink_not_sent"
            }
        ]
    };
    let u;
    try {
        let g = await W(n);
        if (s.has(g)) {
            return {
                files: await Ue(e, n, r, new Set([
                    g
                ])),
                leftBehind: []
            };
        }
        let y = relative(e.realConfigHome, g);
        if (ye(e, g)) {
            e.giveUp ??= "alias_unreadable";
            return l;
        }
        if (G(y)) {
            return l;
        }
        let S = `${de(y, sep)}/x.md`;
        if (o && HEe(S) === null) {
            return {
                files: je(S) ? await Ue(e, n, r, new Set([
                    g
                ])) : [],
                leftBehind: l.leftBehind
            };
        }
        s.add(g);
        u = await readdir(n, {
            withFileTypes: true
        });
    } catch (error) {
        if (o || !O(error) || !await Nn(n)) {
            e.giveUp ??= "alias_unreadable";
        }
        return {
            files: [],
            leftBehind: []
        };
    }
    let files = [];
    let p = [];
    for (let g of u.toSorted(Ut)){
        let y = join(n, g.name);
        let S = [
            ...r,
            g.name
        ].join("/");
        let E = S.normalize("NFC");
        let H = await Ge(e, y, g);
        if (H === null) {
            continue;
        }
        let P = H.isSymbolicLink();
        let A = g.name.endsWith(oe);
        let x = P ? await ce(e, y) : H;
        if (x === null) {
            if (extname(g.name).toLowerCase() === oe) {
                p.push({
                    path: E,
                    reason: "symlink_not_sent"
                });
            }
        } else if (x.isDirectory()) {
            let h = await Ct(e, y, [
                ...r,
                g.name
            ], o || P, s);
            files.push(...h.files);
            p.push(...h.leftBehind);
        } else if (x.isFile() && (A || P || o && extname(g.name).toLowerCase() === oe)) {
            files.push({
                path: y,
                lexicalRel: E,
                rawLexicalRel: S,
                viaSymlink: o || P,
                aliasOnly: !A
            });
        }
    }
    return {
        files,
        leftBehind: p
    };
}
async function Ue(e, n, r, o) {
    let s;
    try {
        s = await readdir(n, {
            withFileTypes: true
        });
    } catch  {
        e.giveUp ??= "alias_unreadable";
        return [];
    }
    let a = [];
    for (let l of s.toSorted(Ut)){
        let u = join(n, l.name);
        let f = [
            ...r,
            l.name
        ].join("/");
        let p = await Ge(e, u, l);
        if (p === null) {
            continue;
        }
        let viaSymlink = p.isSymbolicLink();
        let y = viaSymlink ? await ce(e, u) : p;
        if (y === null) {
            continue;
        }
        if (y.isDirectory()) {
            let S = await zn(e, u, o);
            if (S !== null) {
                a.push(...await Ue(e, u, [
                    ...r,
                    l.name
                ], new Set([
                    ...o,
                    S
                ])));
            }
        } else if (y.isFile() && (viaSymlink || extname(l.name).toLowerCase() === oe)) {
            a.push({
                path: u,
                lexicalRel: f.normalize("NFC"),
                rawLexicalRel: f,
                viaSymlink,
                aliasOnly: true
            });
        }
    }
    return a;
}
async function zn(e, n, r) {
    let o;
    try {
        o = await W(n);
    } catch  {
        e.giveUp ??= "alias_unreadable";
        return null;
    }
    let s = relative(e.realConfigHome, o);
    if (ye(e, o)) {
        e.giveUp ??= "alias_unreadable";
        return null;
    }
    if (r.has(o) || G(s)) {
        return null;
    }
    let a = `${de(s, sep)}/x.md`;
    if (HEe(a) === null && !je(a)) {
        return null;
    }
    if (e.aliasBudget.left <= 0) {
        e.giveUp ??= "too_many_links";
        return null;
    }
    e.aliasBudget.left -= 1;
    return o;
}
async function Ge(e, n, r) {
    if (r.isSymbolicLink() || r.isFile() || r.isDirectory() || r.isFIFO() || r.isSocket() || r.isCharacterDevice() || r.isBlockDevice()) {
        return r;
    }
    try {
        return await lstat(n);
    } catch (error) {
        if (!O(error)) {
            e.giveUp ??= "alias_unreadable";
        }
        return null;
    }
}
async function ce(e, n) {
    let r;
    try {
        r = await On(n);
    } catch  {
        e.giveUp ??= "alias_unreadable";
        return null;
    }
    if (r) {
        return null;
    }
    try {
        return await stat(n);
    } catch (error) {
        if (!O(error)) {
            e.giveUp ??= "alias_unreadable";
        }
        return null;
    }
}
function Ut(e, n) {
    if (e.name < n.name) {
        return -1;
    }
    if (e.name > n.name) {
        return 1;
    }
    return 0;
}
function q(e, n, r) {
    if (r !== null || !e.has(n)) {
        e.set(n, r);
    }
}
async function Bt(e, n, r, o, s, a) {
    let l = await $e(e, r.path, r.lexicalRel, r.rawLexicalRel);
    if (r.aliasOnly) {
        if (l === "unresolvable") {
            e.giveUp ??= "alias_unreadable";
        } else if (l !== "outside") {
            let p = Z(e, n, l, r.lexicalRel);
            if (p !== null) {
                q(a, l.realPath, p);
            }
        }
        return {
            kind: "attributed"
        };
    }
    if (l === "unresolvable") {
        if (r.viaSymlink) {
            e.giveUp ??= "alias_unreadable";
        }
        return Ae(r, r.viaSymlink ? "symlink_not_sent" : "unreadable");
    }
    if (l === "outside") {
        return Ae(r, "symlink_not_sent");
    }
    let u = r.viaSymlink ? l.rel : r.lexicalRel;
    let f = W7e(u);
    if (f === null) {
        let left = r.viaSymlink ? Z(e, n, l, r.lexicalRel) : null;
        if (!r.viaSymlink || left !== null) {
            q(a, l.realPath, left);
        }
        if (s.has(l.realPath)) {
            return {
                kind: "attributed"
            };
        }
        s.add(l.realPath);
        if (left === null) {
            return Ae(r, r.viaSymlink ? "symlink_not_sent" : "not_destination");
        }
        return {
            kind: "refused",
            left
        };
    }
    if (o.has(l.realPath)) {
        let p = Z(e, n, l, r.lexicalRel);
        if (p !== null) {
            q(a, l.realPath, p);
        }
        return {
            kind: "attributed"
        };
    }
    return {
        kind: "candidate",
        candidate: {
            ...f,
            location: l,
            imports: [],
            styleVia: new Map
        }
    };
}
function Ae(e, n) {
    return {
        kind: "refused",
        left: {
            path: e.lexicalRel,
            reason: n
        }
    };
}
function We(e, n) {
    let r = kzt(n.destination);
    if (e.held.has(r)) {
        return null;
    }
    e.held.set(r, n);
    return n;
}
async function Vn(e, n, files, o, s, a, l, u, signal) {
    let p = [];
    for (let g of files){
        if (sM(signal)) {
            return null;
        }
        let y = await Bt(e, n, g, s, a, u);
        if (y.kind === "refused") {
            p.push(y.left);
        }
        if (y.kind !== "candidate") {
            continue;
        }
        let { candidate } = y;
        let E = g.lexicalRel === NX ? g.path : candidate.location.realPath;
        let H = await VU(E, "User", new Set, true);
        if (H.length === 0) {
            let P = await Be(e, candidate.location);
            if (P.kind === "read" && P.content.includes(0)) {
                p.push({
                    path: g.lexicalRel,
                    reason: "unreadable"
                });
            }
            continue;
        }
        if (We(o, candidate) === null) {
            for (let P of H){
                await ze(e, n, P, u);
            }
            p.push({
                path: g.lexicalRel,
                reason: "not_destination"
            });
            continue;
        }
        s.add(candidate.location.realPath);
        p.push(...await Xn(e, n, candidate, H, o, s, a, l, u));
    }
    return p;
}
function Me(e) {
    if (e.globs === undefined) {
        return "";
    }
    return _(e.globs.toSorted());
}
async function Xn(e, n, r, o, s, a, l, u, f) {
    let p = [];
    let g = o.find((h)=>h.parent === undefined);
    let y = o.filter((h)=>h !== g);
    let S = new Map;
    let E = (candidate, m)=>({
            candidate,
            isStyle: candidate.kind === "output_style",
            withheld: kt(e, n, candidate.location) !== null || f.get(candidate.location.realPath) != null,
            scope: Me(m)
        });
    let H = new Map(g === undefined ? [] : [
        [
            g.path,
            E(r, g)
        ]
    ]);
    let P = new Map;
    let A = (h, m)=>{
        if (!l.has(h)) {
            l.add(h);
            P.set(h, p.push(m) - 1);
        }
    };
    let x = (realPath, m)=>{
        let U = P.get(realPath);
        if (U === undefined) {
            A(realPath, m);
        } else {
            p[U] = m;
        }
    };
    for (let h of o){
        await ze(e, n, h, f);
    }
    for (let h of y){
        let m = H.get(h.parent ?? "");
        if (m === undefined) {
            continue;
        }
        let U = Et(e, h.path);
        let k = await $e(e, h.path, U?.rel ?? null, U?.raw ?? null);
        if (k === "outside" || k === "unresolvable") {
            A(h.path, {
                path: U?.rel ?? h.path,
                reason: "include_not_sent"
            });
            continue;
        }
        if (a.has(k.realPath) || f.has(k.realPath)) {
            let M = f.get(k.realPath) ?? Z(e, n, k, k.lexicalRel);
            if (M !== null) {
                q(f, k.realPath, M);
                x(k.realPath, M);
            }
            continue;
        }
        let w = W7e(k.rel);
        if (w !== null) {
            let M = We(s, {
                ...w,
                location: k,
                imports: [],
                styleVia: new Map
            });
            if (M === null) {
                A(k.realPath, {
                    path: k.lexicalRel,
                    reason: "not_destination"
                });
                continue;
            }
            a.add(k.realPath);
            if (M.kind === "output_style") {
                S.set(h.path, k.realPath);
                let R = h.parent === undefined ? undefined : S.get(h.parent);
                if (R !== undefined) {
                    m.candidate.styleVia.set(k.realPath, R);
                }
                if (!m.withheld && !m.isStyle && m.scope === Me(h)) {
                    m.candidate.imports.push({
                        location: k,
                        via: R ?? null,
                        asStyle: true
                    });
                }
            }
            H.set(h.path, M.kind === "output_style" ? {
                ...m,
                withheld: m.withheld || kt(e, n, M.location) !== null
            } : E(M, h));
            continue;
        }
        if (m.withheld) {
            continue;
        }
        let C = D([
            k.rel,
            k.lexicalRel,
            ...k.rawRels
        ]).every(je);
        let B = C ? Z(e, n, k, k.lexicalRel) : null;
        let N = B?.reason ?? null;
        let X = Ft(k.rel) && extname(k.rel).toLowerCase() === oe;
        if (B !== null || X) {
            q(f, k.realPath, B);
        }
        if (!C || N !== null) {
            A(k.realPath, {
                path: k.lexicalRel,
                reason: N ?? (X ? "not_destination" : "include_not_sent")
            });
            continue;
        }
        if (m.isStyle || m.scope !== Me(h)) {
            u.set(k.realPath, {
                path: k.lexicalRel,
                reason: "include_not_sent"
            });
            continue;
        }
        m.candidate.imports.push({
            location: k,
            via: h.parent === undefined ? null : S.get(h.parent) ?? null
        });
        S.set(h.path, k.realPath);
        a.add(k.realPath);
        H.set(h.path, m);
    }
    return p;
}
async function ze(e, n, r, o) {
    if (TC(r.path)) {
        e.giveUp ??= "alias_unreadable";
        return;
    }
    let s = dirname(yt(r.path).resolvedPath);
    let a = Ee(r.content, Q(r.rawContent ?? r.content).body);
    if (!a.vettable) {
        e.giveUp ??= "alias_unreadable";
        return;
    }
    for (let l of a.spellings){
        if (l.includes("\x00")) {
            continue;
        }
        let u = et(l, s);
        if ((Bn(l) || Bn(u)) && G(relative(e.configHome, u))) {
            continue;
        }
        let f = yt(u);
        if (!f.isCanonical) {
            if (!f.isSymlink && !await Yn(u)) {
                e.giveUp ??= "alias_unreadable";
            }
            continue;
        }
        let p = Et(e, u);
        if (p === null) {
            let S = f.resolvedPath;
            if (o.get(S) != null || G(relative(e.realConfigHome, S))) {
                continue;
            }
            let E = In(e.configHome, u);
            if (E === null) {
                e.giveUp ??= "alias_unreadable";
                continue;
            }
            switch(wxn(u) || wxn(S) ? "sensitive" : n(E, true)){
                case "sensitive":
                case "sensitive_tracked":
                case "host_config":
                    q(o, S, {
                        path: l,
                        reason: "sensitive"
                    });
                    break;
                case "read_denied":
                case "rules_unreadable":
                    q(o, S, {
                        path: l,
                        reason: "read_denied"
                    });
                    break;
                case "content_filter":
                case null:
                    break;
            }
            continue;
        }
        let g = await $e(e, u, p.rel, p.raw);
        if (g === "unresolvable") {
            e.giveUp ??= "alias_unreadable";
            continue;
        }
        if (g === "outside" || o.get(g.realPath) != null) {
            continue;
        }
        let y = Z(e, n, g, g.lexicalRel);
        if (y !== null) {
            q(o, g.realPath, y);
        }
    }
}
async function Yn(e) {
    if (Bn(e) && !ll(e) || fa(e)) {
        return true;
    }
    try {
        await W(e);
        return false;
    } catch (error) {
        return O(error) && await Tt(e);
    }
}
async function Jn(e, n, files, o, s, a, l) {
    let u = [];
    for (let f of files){
        let p = await Bt(e, n, f, s, a, l);
        if (p.kind === "refused") {
            u.push(p.left);
        } else if (p.kind === "candidate") {
            if (p.candidate.kind !== "output_style") {
                u.push({
                    path: f.lexicalRel,
                    reason: "symlink_not_sent"
                });
            } else if (We(o, p.candidate) === null) {
                u.push({
                    path: f.lexicalRel,
                    reason: "not_destination"
                });
            } else {
                s.add(p.candidate.location.realPath);
            }
        }
    }
    return u;
}
function kt(e, n, location) {
    return Ot(e, n, location)?.reason ?? null;
}
function Z(e, n, r, o) {
    let s = Ot(e, n, r);
    if (s === null) {
        return null;
    }
    return {
        path: s.alias ?? o,
        reason: s.reason
    };
}
function Ot(e, n, r) {
    let o = D([
        r.lexicalRel,
        r.rel,
        ...r.rawRels
    ]);
    let s = D(o.flatMap((u)=>Wn(e, u))).filter((u)=>!o.includes(u));
    let a = [
        ...o,
        ...s
    ];
    if ([
        ...a,
        ...a.map((u)=>join(e.configHome, ...u.split("/"))),
        r.realPath
    ].some((u)=>wxn(u))) {
        return {
            reason: "sensitive",
            alias: null
        };
    }
    for (let u of a){
        let alias = s.includes(u) ? u : null;
        switch(n(u, false)){
            case "sensitive":
            case "sensitive_tracked":
            case "host_config":
                return {
                    reason: "sensitive",
                    alias
                };
            case "read_denied":
            case "rules_unreadable":
                return {
                    reason: "read_denied",
                    alias
                };
            case "content_filter":
            case null:
                break;
        }
    }
    return null;
}
async function qn(e, n, r, o, s, a) {
    let l = Z(e, n, r.location, r.destination);
    let u = o.get(r.location.realPath) ?? null;
    if (l !== null) {
        return J(r, l.reason, a, l.path);
    }
    if (u !== null) {
        return J(r, u.reason, a, u.path);
    }
    if (!await wt(e, r.location)) {
        return J(r, "unreadable", a);
    }
    let f = await Be(e, r.location);
    if (f.kind === "skip") {
        return J(r, nr(f.skipped.reason), a);
    }
    if (f.content.length > fte) {
        return J(r, "over_cap", a);
    }
    let p = f.content.toString("utf8");
    if (oge(p)) {
        let w = J(r, "credential", a);
        return {
            ...w,
            leftBehind: w.leftBehind.map((C)=>{
                if (C.reason === "credential") {
                    return {
                        ...C,
                        ...Rt(p, 0)
                    };
                }
                return C;
            })
        };
    }
    let g = r.kind === "output_style" ? {
        content: f.content,
        defusedPaths: []
    } : Zn(r.destination, f.content, r.imports.length > 0);
    let y = [
        g.content
    ];
    let folded = [];
    let foldedIncludes = [];
    let length = g.content.length;
    let P = [];
    let A = r.imports.length > 0 && Ie(Q(g.content.toString("utf8")).body);
    let x = new Set(s);
    for (let { location, via, asStyle } of r.imports){
        let N = (qt)=>{
            if (!asStyle) {
                P.push(qt);
            }
        };
        let X = Z(e, n, location, location.lexicalRel);
        if (X !== null || o.has(location.realPath) || x.has(location.realPath) || via !== null && tr(via, x, r.styleVia) || A) {
            x.add(location.realPath);
            if (!a.has(location.realPath)) {
                a.add(location.realPath);
                N(X ?? o.get(location.realPath) ?? {
                    path: location.lexicalRel,
                    reason: "include_not_sent"
                });
            }
            continue;
        }
        let M = await wt(e, location) ? await Be(e, location) : null;
        if (M === null || M.kind === "skip") {
            x.add(location.realPath);
            N({
                path: location.lexicalRel,
                reason: "include_not_sent"
            });
            continue;
        }
        let { head, body } = Q(M.content.toString("utf8"));
        if (Ie(body) || dt(body)) {
            x.add(location.realPath);
            N({
                path: location.lexicalRel,
                reason: "include_not_sent"
            });
            continue;
        }
        let ae = Buffer.from(pt(location.rel) + Le(body));
        if (length + ae.length > fte) {
            x.add(location.realPath);
            N({
                path: location.lexicalRel,
                reason: "over_cap"
            });
            continue;
        }
        if (oge(body)) {
            x.add(location.realPath);
            N({
                path: location.lexicalRel,
                reason: "credential",
                ...Rt(body, Lt(head, `
`))
            });
            continue;
        }
        y.push(ae);
        folded.push(location.lexicalRel);
        if (!asStyle) {
            foldedIncludes.push(location.lexicalRel);
        }
        length += ae.length;
    }
    let h = Buffer.concat(y);
    let m = r.kind !== "output_style" && y.length > 1 && Qn(g.content, h, r.destination) ? er(h) : h;
    if (r.kind !== "output_style" && m !== h && he(m, re)) {
        return J(r, "undefusable", a);
    }
    if (!m.equals(f.content) && oge(m.toString("utf8"))) {
        let w = J(r, "credential", a);
        let C = new Set(P.map((B)=>B.path));
        return {
            ...w,
            leftBehind: [
                ...w.leftBehind.filter((B)=>!C.has(B.path)),
                ...P
            ]
        };
    }
    let U = new Set(folded);
    let defused = F(g.defusedPaths, (w)=>!U.has(posix.normalize(posix.join(posix.dirname(r.destination), w)).normalize("NFC")));
    return {
        entry: {
            path: r.destination,
            kind: r.kind,
            content: m,
            sha256: at(m),
            folded,
            defused
        },
        foldedIncludes,
        leftBehind: P
    };
}
function Zn(destination, content, r) {
    let o = (A)=>Dt(destination, A);
    let s = content.toString("utf8").replace(/\r\n?/g, `
`);
    let a = Q(s);
    let a_head = a.head;
    let u = a_head !== "" && s.startsWith("\uFEFF") ? "\uFEFF" : "";
    let f = r && a_head === "" && /^\uFEFF?---\s*\n/.test(s) ? `
` : "";
    let p = f + u + a_head;
    let a_body = a.body;
    let defusedPaths_1 = [];
    let S = Le(a_body, o, defusedPaths_1);
    let E = S === a_body && f === "" ? {
        content,
        defusedPaths: []
    } : {
        content: Buffer.from(p + S),
        defusedPaths: defusedPaths_1
    };
    if (E.content !== content && Q(content.toString("utf8")).head === "" !== (a_head === "")) {
        return {
            content: Buffer.from(ee(s)),
            defusedPaths: bt(a_body, o)
        };
    }
    if (!he(E.content, o)) {
        return E;
    }
    let defusedPaths = bt(a_body, o);
    let P = Buffer.from(p + ee(a_body));
    if (he(P, re)) {
        return {
            content: Buffer.from(f + ee(s)),
            defusedPaths
        };
    }
    return {
        content: P,
        defusedPaths
    };
}
function bt(e, n) {
    let r = Ee(e, e);
    if (r.vettable) {
        return r.spellings.filter((o)=>!n(o));
    }
    return [];
}
function Qn(content, n, destination) {
    let o = (l)=>Dt(destination, l);
    let s = (l)=>Te(Q(l.toString("utf8")).body);
    let a = s(n);
    return a.some((l)=>!o(l)) || F(a, o) > F(s(content), o);
}
function er(e) {
    let n = e.toString("utf8");
    let { head, body } = Q(n);
    let s = head !== "" && n.startsWith("\uFEFF") ? "\uFEFF" : "";
    let a = Buffer.from(s + head + ee(body));
    if (he(a, re)) {
        return Buffer.from(ee(n));
    }
    return a;
}
function he(e, n) {
    return Fe(Q(e.toString("utf8")).body, n);
}
function Q(body) {
    let n = body.startsWith("\uFEFF") ? body.slice(1) : body;
    let head = RE.exec(n)?.[0];
    if (head === undefined) {
        return {
            head: "",
            body
        };
    }
    return {
        head,
        body: n.slice(head.length)
    };
}
function Dt(destination, n) {
    if (n.startsWith("/") || n.startsWith("~")) {
        return false;
    }
    let r = posix.normalize(posix.join(posix.dirname(destination), n));
    let o = r.startsWith("../") ? null : HEe(r);
    return o === "claude_md" || o === "rule";
}
function tr(via, n, styleVia) {
    let o = new Set;
    for(let s = via; s !== undefined && !o.has(s); s = styleVia.get(s)){
        if (n.has(s)) {
            return true;
        }
        o.add(s);
    }
    return false;
}
async function wt(e, location) {
    try {
        return await W(join(e.realConfigHome, location.nativeRel)) === location.realPath;
    } catch  {
        return false;
    }
}
function Rt(e, n) {
    let r = e.split(`
`);
    let o = r.length > Fn ? -1 : r.findIndex((s)=>oge(s));
    if (o === -1) {
        return {};
    }
    return {
        line: n + o + 1
    };
}
function J(e, n, r, o = e.destination) {
    let s = [
        {
            realPath: e.location.realPath,
            row: {
                path: o,
                reason: n
            }
        },
        ...e.imports.filter((l)=>!l.asStyle).map(({ location })=>({
                realPath: location.realPath,
                row: {
                    path: location.lexicalRel,
                    reason: "include_not_sent"
                }
            }))
    ];
    let a = [];
    for (let { realPath, row } of s){
        if (!r.has(realPath)) {
            r.add(realPath);
            a.push(row);
        }
    }
    return {
        entry: null,
        foldedIncludes: [],
        leftBehind: a
    };
}
function Be(e, location) {
    return rt(e.realConfigHome, e.realConfigHome, location.nativeRel);
}
function nr(reason) {
    switch(reason){
        case "symlink":
        case "hard_link":
            return "symlink_not_sent";
        case "too_large":
            return "over_cap";
        case "sensitive":
        case "sensitive_tracked":
        case "host_config":
            return "sensitive";
        case "read_denied":
        case "rules_unreadable":
            return "read_denied";
        case "content_filter":
        case "filtered":
        case "dependency_dir":
        case "outside_root":
        case "changed":
        case "not_regular_file":
        case "lane_path":
        case "over_budget":
        case "left_behind":
        case "unreadable":
        case "upload_failed":
        case "unpushed_only":
        case "ignored":
            return "unreadable";
    }
}
const z = {
    covers: "all"
};
function Se(e) {
    if (!gVr(e)) {
        return {
            covers: "matchers",
            matchers: []
        };
    }
    let n = jt(e);
    if (!Array.isArray(n)) {
        return z;
    }
    let matchers = [];
    for (let o of n){
        let s = L(o) ? o.matcher : undefined;
        if (typeof s !== "string") {
            return z;
        }
        if (s.trim() === "" || s === "*" || s === ".*") {
            return z;
        }
        matchers.push(s);
    }
    return {
        covers: "matchers",
        matchers
    };
}
function Kt(e) {
    if (e.covers === "all") {
        return true;
    }
    let e_matchers = e.matchers;
    if (e_matchers.length === 0) {
        return false;
    }
    return (r)=>{
        if (VE(r)) {
            return e_matchers.some((o)=>{
                let s = HXr(o);
                return s === undefined || s.some((a)=>Tut(r, a));
            });
        }
        return e_matchers.some((o)=>MXr(o, r));
    };
}
function ar(e) {
    let n = e.filter(gVr);
    if (n.length === 0) {
        return;
    }
    let r = n.map(jt);
    return n.find((s, a)=>!Array.isArray(r[a])) ?? {
        PreToolUse: r.flatMap((s)=>{
            if (Array.isArray(s)) {
                return s;
            }
            return [];
        })
    };
}
function jt(e) {
    if (L(e) && Object.hasOwn(e, "PreToolUse")) {
        return e.PreToolUse;
    }
}
function Gt(e, n) {
    if (e.covers === "all" || n.covers === "all") {
        return z;
    }
    return {
        covers: "matchers",
        matchers: D([
            ...e.matchers,
            ...n.matchers
        ])
    };
}
function lr({ sources, sourcesIncomplete, processGuard, plugins, repoEnabledPluginKeys }) {
    if (sourcesIncomplete || sources.some((u)=>!u.read) || plugins === null || plugins.errors.length > 0 || plugins.warnings.some((u)=>u.type === "project-scope-suppressed-untrusted") || plugins.warnings.some((u)=>u.type === "plugin-renamed" && (repoEnabledPluginKeys === undefined || repoEnabledPluginKeys.has(_r(u.source)))) || plugins === null) {
        return z;
    }
    let l = plugins.enabled.filter((u)=>u.scope === "project" || Ki(u.source) === ha || u.scope !== "user" && (repoEnabledPluginKeys === undefined || repoEnabledPluginKeys.has(_r(u.source))));
    if (l.some((u)=>u.hooksConfig === undefined && u.manifest.hooks !== undefined)) {
        return z;
    }
    return [
        processGuard,
        ...sources.map((u)=>{
            if (u.read) {
                return Se(u.hooks);
            }
            return z;
        }),
        ...l.map((u)=>Se(u.hooksConfig))
    ].reduce(Gt, {
        covers: "matchers",
        matchers: []
    });
}
function Ve(errors) {
    return errors.some((n)=>n.severity !== "warning" || n.path === "hooks" || n.path.startsWith("hooks."));
}
function Wt(storageV5, sessionPreToolUse, settingsToCloud = oN) {
    return {
        sources,
        hooksOf: (o)=>{
            if (o === "userSettings" || o === "flagSettings") {
                return;
            }
            if (o === "policySettings") {
                return fe(o)?.hooks;
            }
            let s = Je(o).map(ke);
            return ar([
                ...s.map((a)=>a?.hooks),
                fe(o)?.hooks
            ]);
        },
        sourcesIncomplete: ()=>Ve(yg().errors) || Xe().some((o)=>Ve(zt(o).errors)) || _e.some((o)=>!cn(o)) && dr(),
        processGuard: ()=>{
            let o = cr();
            let PreToolUse = (sessionPreToolUse() ?? []).filter((a)=>a.hooks.length > 0 && !fr(a.skillRoot, o));
            return Gt(Se(Gse()), Se({
                PreToolUse
            }));
        },
        loadPlugins: async ()=>{
            if ((await Promise.all(Xe().map(ppt))).some(Boolean)) {
                throw Error("an --add-dir settings file names another host");
            }
            let [o, s] = await Promise.all([
                Nhe(storageV5),
                cn("projectSettings") ? 0 : ur()
            ]);
            let a = s === 0 ? o : {
                ...o,
                warnings: [
                    ...o.warnings,
                    {
                        type: "project-scope-suppressed-untrusted",
                        source: `(unlisted)@${gu}`,
                        count: s,
                        warning: "project skill directories on disk were not loaded: the project settings source is off for this process"
                    }
                ]
            };
            let l = new Set(Ye({
                enabledPlugins: {
                    ...m4(),
                    ...yg().settings?.enabledPlugins ?? {}
                }
            }));
            let u = $t().filter((p)=>!l.has(p));
            let f = _e.some((p)=>!cn(p)) ? a.enabled.filter((p)=>p.settings?.agent !== undefined) : [];
            if (u.length === 0 && f.length === 0) {
                return a;
            }
            return {
                ...a,
                errors: [
                    ...a.errors,
                    ...u.map((source)=>({
                            type: "generic-error",
                            source,
                            error: "enabled in a settings file this process did not load"
                        })),
                    ...f.map((p)=>({
                            type: "generic-error",
                            source: p.source,
                            error: "names a main-thread agent this process did not resolve"
                        }))
                ]
            };
        },
        repoEnabledPluginKeys: ()=>new Set([
                ...$t(),
                ...Ye(fe("policySettings"))
            ].map(_r)),
        settingsToCloud
    };
}
async function ur() {
    let e = join(Kr() ?? we(), ".claude", "skills");
    if (e === join(ve(), "skills")) {
        return 0;
    }
    if (await ppt(e)) {
        return 1;
    }
    return readdir(e, {
        withFileTypes: true
    }).then((n)=>F(n, (r)=>r.isDirectory() || r.isSymbolicLink()), (n)=>{
        if ([
            "ENOENT",
            "ENOTDIR"
        ].includes(v(n) ?? "")) {
            return 0;
        }
        return 1;
    });
}
function dr() {
    return yg().settings?.agent !== undefined || _e.flatMap((e)=>Je(e).map(ke)).some((e)=>e?.agent !== undefined);
}
var _e = sources.filter((e)=>e !== "policySettings" && Cp.has(e));
function cr() {
    let e = join(ve(), "skills");
    return {
        own: [
            e,
            join(ve(), "commands"),
            oRt()
        ],
        synced: join(e, xB)
    };
}
function fr(skillRoot, n) {
    return skillRoot !== undefined && !Nt(n.synced, skillRoot) && n.own.some((r)=>Nt(r, skillRoot));
}
function Nt(e, skillRoot) {
    let r = relative(e, skillRoot);
    return r !== "" && r.split(sep)[0] !== ".." && !isAbsolute(r);
}
function Je(e) {
    return [
        yn(e),
        e === "localSettings" ? ry() : undefined
    ].filter((n)=>n !== undefined);
}
function Xe() {
    return od().flatMap((e)=>[
            "settings.json",
            "settings.local.json"
        ].map((n)=>join(e, ".claude", n)));
}
function ke(e) {
    let { settings, errors } = zt(e);
    if (Ve(errors)) {
        throw Error("a settings file could not be read");
    }
    return settings;
}
function zt(e) {
    if (DO(e)) {
        throw Error("a settings file names another host");
    }
    return xR(e);
}
function $t() {
    return [
        ..._e.flatMap((n)=>Je(n).map(ke)),
        ...Xe().map(ke)
    ].flatMap(Ye);
}
function Ye(e) {
    return Object.entries(e?.enabledPlugins ?? {}).filter(([, n])=>n !== false).map(([n])=>n);
}
async function Vt(e) {
    if (!await Promise.resolve().then(e.settingsToCloud).catch(()=>false)) {
        return z;
    }
    let sources = e.sources.map((l)=>{
        try {
            return {
                read: true,
                hooks: e.hooksOf(l)
            };
        } catch  {
            return {
                read: false
            };
        }
    });
    let sourcesIncomplete;
    try {
        sourcesIncomplete = e.sourcesIncomplete();
    } catch  {
        sourcesIncomplete = true;
    }
    let processGuard;
    try {
        processGuard = e.processGuard();
    } catch  {
        processGuard = z;
    }
    let plugins;
    try {
        plugins = await e.loadPlugins();
    } catch  {
        plugins = null;
    }
    let repoEnabledPluginKeys;
    try {
        repoEnabledPluginKeys = e.repoEnabledPluginKeys?.();
    } catch  {
        repoEnabledPluginKeys = undefined;
    }
    return lr({
        sources,
        sourcesIncomplete,
        processGuard,
        plugins,
        repoEnabledPluginKeys
    });
}
async function Xt() {
    Pr();
    let e = Hv("userSettings");
    let n = fe("userSettings");
    if (e.some(pr) || n === null && await mr(yn("userSettings"))) {
        return {
            kind: "broken"
        };
    }
    return {
        kind: "sendable",
        settings: n ?? {},
        hasLostAnAllowEntry: e.some(Yt)
    };
}
function pr(e) {
    return e.severity !== "warning" || e.path === "permissions" || e.path.startsWith("permissions.") && !Yt(e);
}
function Yt({ path }) {
    return path.startsWith("permissions.allow");
}
async function mr(e) {
    try {
        return e !== undefined && (await ie().lstat(e)).isSymbolicLink();
    } catch  {
        return false;
    }
}
const gr = 3;
const writtenAtMs = 0;
async function uVr({ signal, storageV5, sessionPreToolUse = ()=>{}, launchConsent, now = Date.now, hookGuardHere = ()=>Vt(Wt(storageV5, sessionPreToolUse, ott(launchConsent).enabled)) } = {}) {
    let l = ott(launchConsent);
    if (!qB(l.enabledNow())) {
        return {
            kind: "none",
            reason: "flag_off"
        };
    }
    let u = now();
    let f = await yr(signal, hookGuardHere, launchConsent, l).catch((p)=>{
        if (Ke(p) || sM(signal)) {
            return {
                kind: "none",
                reason: "aborted"
            };
        }
        c(p);
        return {
            kind: "none",
            reason: "failed"
        };
    });
    vr(f, now() - u);
    return f;
}
async function yr(signal, hookGuardHere, launchConsent, o) {
    if (!Hke(launchConsent)) {
        return {
            kind: "none",
            reason: "no_consent"
        };
    }
    if (!Lo().includes("userSettings")) {
        return {
            kind: "none",
            reason: "user_settings_disabled"
        };
    }
    let configHome = ve();
    let a = await Xt();
    let l = a.kind === "sendable" ? a : null;
    let readRules = Tqt();
    let [f, p] = await Promise.all([
        It({
            configHome,
            isUserSettingsFileSendable: l !== null,
            readRules,
            createFilter: oor,
            signal,
            settingsToCloud: o.enabled
        }),
        hookGuardHere().catch(()=>({
                covers: "all"
            }))
    ]);
    i("tengu_home_seed_hook_guard", {
        kind: b(p.covers === "all" ? "all" : p.matchers.length > 0 ? "matchers" : "none"),
        matcher_count: p.covers === "all" ? 0 : p.matchers.length,
        allow_entry_lost_at_parse: l?.hasLostAnAllowEntry ?? false
    });
    if (sM(signal) || !f.ok && f.reason === "aborted") {
        return {
            kind: "none",
            reason: "aborted"
        };
    }
    if (!f.ok) {
        if (f.reason === "flag_off") {
            return {
                kind: "none",
                reason: "flag_off"
            };
        }
        return {
            kind: "none",
            reason: "home_unvettable",
            cause: f.reason === "too_many_links" ? f.reason : "alias_unreadable",
            configHome
        };
    }
    let settings = wSn(l?.settings ?? null, {
        preToolUseHookActiveHere: Kt(p),
        hasLostAnAllowEntryAtParse: l?.hasLostAnAllowEntry ?? false,
        settingsToCloud: o.enabledNow
    });
    return Sr({
        inventory: f.inventory,
        settings,
        configHome,
        unreadableSettingsFiles: (readRules.unreadableSettingsFiles ?? []).map((y)=>{
            if (ek() !== undefined && y === BO()) {
                return "--settings (inline JSON)";
            }
            return y;
        }),
        writtenAtMs
    });
}
function Sr({ inventory, settings, configHome, unreadableSettingsFiles, writtenAtMs }) {
    let settings_document = settings.document;
    let summary = Rr(inventory, settings);
    let u = {
        summary,
        leftBehind: inventory.leftBehind,
        unreadable: inventory.summary.unreadable,
        settings: settings_document === null ? settings.reason : "sent",
        configHome
    };
    if (inventory.summary.rulesUnreadable) {
        return {
            kind: "empty",
            reason: "rules_unreadable",
            unreadableSettingsFiles,
            ...u,
            settings: settings_document === null ? settings.reason : "nothing_to_send"
        };
    }
    if (inventory.entries.length === 0 && settings_document === null) {
        return {
            kind: "empty",
            reason: "nothing_to_send",
            ...u
        };
    }
    return {
        kind: "ready",
        pack: Z_t({
            generation: 1,
            writtenAtMs,
            files: inventory.entries.map((p)=>aYo(p.path, p.content)),
            settings: settings_document,
            summary
        }),
        description: kr(inventory, settings_document),
        ...u
    };
}
function kr(inventory, settings_document) {
    return {
        claudeMd: inventory.entries.some((r)=>r.kind === "claude_md"),
        rules: F(inventory.entries, (r)=>r.kind === "rule"),
        outputStyles: F(inventory.entries, (r)=>r.kind === "output_style"),
        inlinedImports: inventory.summary.inlinedImports,
        settingsKeys: settings_document === null ? [] : wr(settings_document),
        permissionRules: (settings_document?.permissions?.allow?.length ?? 0) + (settings_document?.permissions?.deny?.length ?? 0) + (settings_document?.permissions?.ask?.length ?? 0)
    };
}
function wr(settings_document) {
    return Object.keys(Jt).filter((n)=>settings_document[n] !== undefined);
}
function Rr(inventory, { counts }) {
    return {
        withheldSensitive: inventory.summary.withheldSensitive,
        withheldReadDenied: inventory.summary.withheldReadDenied,
        rulesUnreadable: inventory.summary.rulesUnreadable,
        includesNotSent: inventory.summary.includesNotSent,
        symlinksNotSent: inventory.summary.symlinksNotSent,
        notDestinations: inventory.summary.notDestinations,
        overCap: inventory.summary.overCap,
        unreadable: inventory.summary.unreadable,
        settingsKeysWithheld: counts.withheldKeys,
        credentialTextsWithheld: counts.withheldCredentialTexts,
        rulesCoveringDeviceTools: counts.rules.coveringDeviceTools,
        droppedRules: {
            rooted: counts.rules.droppedRooted,
            device: counts.rules.droppedDevice,
            invalid: counts.rules.droppedInvalid,
            guarded: counts.rules.droppedGuarded,
            overCap: counts.rules.droppedOverCap,
            credential: counts.rules.droppedCredential,
            credentialRestrictions: counts.rules.droppedCredentialRestrictions
        }
    };
}
function vr(e, duration_ms) {
    if (e.kind === "none") {
        i("tengu_home_seed_plan", {
            outcome: d(e.reason),
            cause: e.reason === "home_unvettable" ? d(e.cause) : undefined,
            duration_ms
        });
        return;
    }
    let { summary } = e;
    let o = T7n(e.leftBehind);
    let s = {
        settings_keys_withheld: summary.settingsKeysWithheld,
        credential_texts_withheld: summary.credentialTextsWithheld,
        rules_dropped_rooted: summary.droppedRules.rooted,
        rules_dropped_device: summary.droppedRules.device,
        rules_dropped_invalid: summary.droppedRules.invalid,
        rules_dropped_over_cap: summary.droppedRules.overCap,
        rules_dropped_credential: summary.droppedRules.credential,
        restrictions_dropped_credential: summary.droppedRules.credentialRestrictions,
        rules_dropped_guarded: summary.droppedRules.guarded,
        rules_covering_device_tools: summary.rulesCoveringDeviceTools,
        withheld_sensitive: summary.withheldSensitive,
        withheld_read_denied: summary.withheldReadDenied,
        withheld_credential: o.others + (o.claudeMd ? 1 : 0),
        claude_md_withheld_credential: o.claudeMd,
        includes_not_sent: summary.includesNotSent,
        symlinks_not_sent: summary.symlinksNotSent,
        claude_md_link_not_sent: e.leftBehind.some((l)=>l.reason === "symlink_not_sent" && l.path === NX),
        not_destinations: summary.notDestinations,
        over_cap: summary.overCap,
        unreadable: e.unreadable,
        duration_ms
    };
    if (e.kind === "empty") {
        i("tengu_home_seed_plan", {
            outcome: d(e.reason),
            settings: d(e.settings),
            settings_files_in_error: e.reason === "rules_unreadable" ? e.unreadableSettingsFiles.length : undefined,
            ...s
        });
        return;
    }
    let { description } = e;
    i("tengu_home_seed_plan", {
        outcome: b("ready"),
        settings: d(e.settings),
        files: description.rules + description.outputStyles + (description.claudeMd ? 1 : 0),
        pack_bytes: e.pack.length,
        settings_keys: description.settingsKeys.length,
        rules_kept: description.permissionRules,
        includes_inlined: description.inlinedImports,
        ...s
    });
}
var Jt = {
    language: "language",
    outputStyle: "output style",
    attribution: "attribution",
    includeCoAuthoredBy: "co-author preference",
    includeGitInstructions: "git-instructions preference",
    alwaysThinkingEnabled: "thinking preference",
    showThinkingSummaries: "thinking-summary preference",
    permissions: "permission rules"
};
function pVr(e) {
    let n = [
        ...e.claudeMd ? [
            "CLAUDE.md"
        ] : [],
        ...qe(e.rules, "rules file"),
        ...qe(e.outputStyles, "output-style file"),
        ...qe(e.permissionRules, "permission rule"),
        ...e.settingsKeys.flatMap((r)=>{
            if (r === "permissions") {
                return [];
            }
            return [
                Jt[r]
            ];
        }),
        ...e.inlinedImports > 0 ? [
            `${e.inlinedImports} @${I(e.inlinedImports, "import")} folded in`
        ] : []
    ];
    if (n.length === 0) {
        return "Sent settings from this machine to the cloud session: only the narrowed permission allow list";
    }
    return `Sent settings from this machine to the cloud session: ${n.join(", ")}`;
}
function qe(e, n) {
    if (e > 0) {
        return [
            `${e} ${I(e, n)}`
        ];
    }
    return [];
}
const ySn = "Your deny and ask rules are not in force in the cloud session";
const _Sn = "The cloud session's settings stay as they were";
const bSn = "Your deny and ask rules may not be in force in the cloud session";
function k7n({ summary, leftBehind, unreadable, settings, configHome }, { launch, settingsFile }) {
    let u = Rs(configHome);
    let f = [
        V(leftBehind, "symlink_not_sent", summary.symlinksNotSent, (m)=>`${m} linked ${I(m, "file")} (links are not followed)`),
        V(leftBehind, "include_not_sent", summary.includesNotSent, (m)=>`${m} @${I(m, "import")} outside ${u} or not markdown`),
        V(leftBehind, "sensitive", summary.withheldSensitive, (m)=>`${m} ${I(m, "file")} named like credentials`),
        V(leftBehind, "read_denied", summary.withheldReadDenied, (m)=>`${m} ${I(m, "file")} your Read rules or sandbox settings cover`),
        V(leftBehind, "not_destination", summary.notDestinations, (m)=>`${m} ${I(m, "file")} with ${I(m, "a name", "names")} the cloud session cannot create`),
        V(leftBehind, "over_cap", summary.overCap, (m)=>`${m} ${I(m, "file")} over a limit of ${Bze} files, ${Qt(fte)} per file or ${Qt(Ezt)} in total`),
        V(leftBehind, "unreadable", unreadable, (m)=>`${m} ${I(m, "file")} that changed while being read`),
        V(leftBehind, "undefusable", F(leftBehind, (m)=>m.reason === "undefusable"), (m)=>`${m} ${I(m, "file")} whose @imports could not be made safe`),
        V(leftBehind, "credential", F(leftBehind, (m)=>m.reason === "credential"), (m)=>`${m} ${I(m, "file")} ${Ze(m)}`)
    ].flatMap((m)=>{
        if (m === null) {
            return [];
        }
        return [
            m
        ];
    });
    let p = summary.droppedRules.rooted + summary.droppedRules.device + summary.droppedRules.invalid + summary.droppedRules.overCap;
    let credentialRestrictions = summary.droppedRules.credentialRestrictions;
    let y = summary.droppedRules.credential - credentialRestrictions;
    let summary_credentialTextsWithheld = summary.credentialTextsWithheld;
    let guarded = summary.droppedRules.guarded;
    let H = settings === "schema_rejected" ? "failed validation" : settings === "settings_too_large" ? "is over the size limit" : settings === "settings_unreadable" ? "could not be read" : null;
    let P = [
        ...summary.settingsKeysWithheld > 0 ? [
            `${summary.settingsKeysWithheld} ${I(summary.settingsKeysWithheld, "key")} (hooks, env and the like are never sent)`
        ] : [],
        ...p > 0 ? [
            `${p} permission ${I(p, "rule")} that ${I(p, "names", "name")} a path or device tool on this machine or could not be read`
        ] : [],
        ...y > 0 ? [
            `${y} allow ${I(y, "rule")} ${Ze(y)}`
        ] : [],
        ...summary_credentialTextsWithheld > 0 ? [
            `${summary_credentialTextsWithheld} ${I(summary_credentialTextsWithheld, "text")} (attribution, language, output style) ${Ze(summary_credentialTextsWithheld)}`
        ] : [],
        ...guarded > 0 ? [
            `${guarded} allow ${I(guarded, "rule")} that stayed because a hook, a plugin or a rule that was not sent may guard ${I(guarded, "it", "them")}`
        ] : []
    ];
    let A = f.length > 0 ? [
        `Not sent from ${u}: ${f.join("; ")}`
    ] : [];
    if (H !== null) {
        return [
            launch === "reopen_sent_nothing" ? `${_Sn}: ${settingsFile} ${H}` : `${ySn}: ${settingsFile} ${H}; ${settings === "settings_too_large" ? "make it smaller" : "fix it"} and ${launch === "reopen_sent" ? "re-open the session" : "start a new cloud session"}`,
            ...A
        ].join(". ");
    }
    let x = P.length > 0 ? [
        `Settings kept on this machine: ${P.join("; ")}`
    ] : [];
    let h = credentialRestrictions > 0 ? [
        `${credentialRestrictions} deny or ask ${I(credentialRestrictions, "rule is", "rules are")} not in force in the cloud session: ${I(credentialRestrictions, "it looks like it holds", "they look like they hold")} a credential (reword ${I(credentialRestrictions, "it", "them")} in ${settingsFile})`,
        ...x,
        ...A
    ] : [
        ...A,
        ...x
    ];
    if (h.length === 0) {
        return null;
    }
    return h.join(". ");
}
function T7n(e) {
    let n = e.filter((r)=>r.reason === "credential").map((r)=>r.path);
    return {
        claudeMd: n.includes(NX),
        others: F(n, (r)=>r !== NX)
    };
}
function fVr(e) {
    let n = e.filter((o)=>o.reason === "symlink_not_sent").map((o)=>o.path);
    let names = [
        ...n.filter((o)=>o === NX),
        ...n.filter((o)=>o !== NX)
    ].slice(0, 2).map((o)=>{
        if (o === MEe || o === jze) {
            return `${o}/`;
        }
        return Rn(o);
    });
    return {
        names,
        more: n.length - names.length
    };
}
function Ze(e) {
    return `that ${I(e, "looks", "look")} like ${I(e, "it holds", "they hold")} a credential`;
}
function V(leftBehind, n, r, o) {
    if (r === 0) {
        return null;
    }
    let s = leftBehind.filter((f)=>f.reason === n).map((f)=>Rn(f.path) + (f.line === undefined ? "" : `:${f.line}`));
    let a = s.slice(0, gr);
    let l = s.length - a.length;
    let u = a.length === 0 ? "" : ` (${a.join(", ")}${l > 0 ? ` and ${l} more` : ""})`;
    return o(r) + u;
}
export { uVr, pVr, ySn, _Sn, bSn, k7n, T7n, fVr };
