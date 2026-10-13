import { FUe, oa, ae, YSe, mn } from "/$bunfs/root/chunk-223dyewd.js";
import { oh, mp, ff, St, Hg, PDt, yo, uwe, di, ie, qy, gf, nU, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Ye, x, l, v, Vr, z, Jc, Nf } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { qa } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { On, Bn, UN, Gi, fa, Za, zO, NH, Zsn, ll, ih } from "/$bunfs/root/chunk-xgw72tt1.js";
import { XR, Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, bo, lt, B, K, we, Vl, Zon, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { Mt, df, se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { yc, PN, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Df, zv, Ph, t8e, aDt } from "/$bunfs/root/chunk-3fj60qgx.js";
import { yC, qz, ss } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { $rn, qY, ai, Nut, rGn, $ut, ym as scratchRoot, oGn } from "/$bunfs/root/chunk-zwxj12s4.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _g, s9 } from "/$bunfs/root/chunk-3yz9zdww.js";
import { An, Q_, Cs, it, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { fr, PO, Vrn, o9, $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { Sq } from "/$bunfs/root/chunk-c56kpkt7.js";
import { nr, ho } from "/$bunfs/root/chunk-wew3321y.js";
import { ra } from "/$bunfs/root/chunk-98pm569t.js";
import { Wi } from "/$bunfs/root/chunk-f6bzd9ck.js";
import { nwe } from "/$bunfs/root/chunk-yngqe5v3.js";
import { Kc } from "/$bunfs/root/chunk-svqqgdca.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { Ga, Pon, Ion, Oon, aMs } from "/$bunfs/root/chunk-c7x4m87m.js";
import { constants, closeSync, fstatSync, lstatSync, openSync, readlinkSync, readSync, realpathSync, statSync, unwatchFile, accessSync, readFileSync, watchFile } from "fs";
import { lstat, open, readlink, realpath, stat, readdir, readFile, copyFile, mkdir, mkdtemp, rm, link, unlink } from "fs/promises";
import * as ge from "fs/promises";
import { randomUUID, createHash } from "crypto";
import { basename, dirname, join, win32, isAbsolute, relative, sep, parse, resolve } from "path";
import { homedir } from "os";
const Yxe = 8;
const br = /(\t|\n)/;
const wr = /[\x1b\x9b]/g;
const Er = /[\x90\x98\x9d-\x9f]/g;
const Sr = /[\x1b\x90\x98\x9b\x9d-\x9f]/;
const Rr = /^\x1b[P\]X^_k]/;
const _r = /^\x1b[P_].*\x07$|\x9c/s;
function hpe(e, n = Yxe) {
    if (e.includes("\t") || $To([
        e
    ])) {
        return NTo([
            e
        ], n).join("");
    }
    return e;
}
function NTo(e, n = Yxe) {
    let r = 0;
    let i = "";
    return e.map((o, s)=>{
        if (!Jzn(o) && !o.includes("\t")) {
            let d = o.lastIndexOf(`
`) + 1;
            if (d > 0) {
                r = 0;
                i = "";
            }
            i += d > 0 ? o.slice(d) : o;
            return o;
        }
        let u = "";
        for (let d of mt(o, s === e.length - 1)){
            let p = ht(d);
            if (p === undefined) {
                u += d.value;
                i += d.value;
                continue;
            }
            for (let h of p.split(br)){
                if (h === "\t") {
                    r += ae(i);
                    let S = n - r % n;
                    u += " ".repeat(S);
                    r += S;
                    i = "";
                } else if (h === `
`) {
                    u += h;
                    r = 0;
                    i = "";
                } else {
                    u += h;
                    i += h;
                }
            }
        }
        return u;
    });
}
function Jzn(e) {
    return Sr.test(e);
}
function $To(e) {
    return e.some((n, r)=>Jzn(n) && mt(n, r === e.length - 1).some((i)=>(ht(i) ?? i.value) !== i.value));
}
function mt(e, n) {
    if (!Jzn(e)) {
        return [
            {
                type: "text",
                value: e
            }
        ];
    }
    let r = YSe();
    let i = r.feed(e);
    let o = r.buffer();
    if (o !== "") {
        i.push({
            type: n && !Rr.test(o) ? "sequence" : "text",
            value: o
        });
    }
    return i;
}
function ht(e) {
    if (e.type === "text" || e.value.includes(`
`) || _r.test(e.value)) {
        return pt(e.value.replace(wr, "\x18"));
    }
    if (e.value.startsWith("\x1Bk")) {
        return pt(e.value.replace(/\x9b/g, "\x18"));
    }
}
function pt(e) {
    return e.replace(Er, "\uFFFD");
}
function wt(e) {
    if (e === 9 || e === 10) {
        return false;
    }
    return e < 32 || e >= 127 && e <= 159;
}
function Et(e) {
    return e === 1564 || e >= 8234 && e <= 8238 || e >= 8294 && e <= 8297;
}
function kr(e) {
    return e === 65038 || e === 65039;
}
function Pr(e) {
    return e >= 55296 && e <= 57343;
}
function Rt(segment) {
    let n = segment.codePointAt(0);
    if (segment.length === 1) {
        if (n <= 31) {
            return 0;
        }
        if (Et(n)) {
            return 1;
        }
    }
    let r = ae(segment);
    switch(r){
        case 0:
            return 0;
        case 1:
            return 1;
        default:
            return r;
    }
}
const Ae = 4096;
const Xxe = /\u2026 \[\+\d+ graphemes\]/;
const xr = 4064;
const Ir = 256;
function XPs(e) {
    if (e.length <= Ae) {
        return e;
    }
    return e.split(`
`).map((n)=>{
        if (n.length <= Ae) {
            return n;
        }
        let r = [];
        let i = "";
        for (let { segment } of ra().segment(n)){
            if (i.length > 0 && i.length + segment.length > Ir) {
                r.push(i);
                i = segment;
            } else {
                i += segment;
            }
        }
        if (i.length > 0) {
            r.push(i);
        }
        return r.join(`
`);
    }).join(`
`);
}
function yt(e) {
    let n = "";
    let r = 0;
    for (let { segment } of ra().segment(e)){
        n += segment;
        let o = ae(n);
        let s = o - r;
        r = o;
        if (s !== Rt(segment)) {
            return false;
        }
    }
    return true;
}
function Cr(e) {
    let n = "";
    let r = "";
    let i = 0;
    for (let { segment } of ra().segment(e)){
        r += segment;
        let s = ae(r);
        let u = s - i;
        i = s;
        n += u === Rt(segment) ? segment : "\uFFFD";
    }
    return n;
}
function bt(e) {
    let n = e;
    for(let r = 0; r < 16; r++){
        if (yt(n)) {
            return n;
        }
        let i = Cr(n);
        if (i === n) {
            break;
        }
        n = i;
    }
    if (yt(n)) {
        return n;
    }
    return [
        ...ra().segment(n)
    ].map(()=>"\uFFFD").join("");
}
function vr(e, n) {
    let r = "";
    for (let { segment } of ra().segment(e)){
        if (r.length + segment.length > n) {
            break;
        }
        r += segment;
    }
    return r;
}
function Ar(e) {
    return _t(e, xr);
}
function _t(e, n) {
    let r = vr(e, n);
    if (r.length > 0) {
        return r;
    }
    let i = Math.min(n, e.length);
    let o = e.charCodeAt(i - 1);
    if (o >= 55296 && o <= 56319) {
        i -= 1;
    }
    return e.slice(0, i);
}
const Or = 4 * Ae * Ae;
const Ze = 1024;
const Lr = 64 * Ze * Ze;
function Fr(e) {
    let n = Or;
    let r = Lr;
    let i = (o)=>[
            ...ra().segment(o)
        ].length;
    return e.split(`
`).map((o)=>{
        if (o === "") {
            return o;
        }
        if (/^\u2026 \[\+\d+ graphemes\]$/.test(o)) {
            return o;
        }
        let s = o.match(/\u2026 \[\+\d+ graphemes\]$/);
        let u = s ? s[0] : "";
        let d = s ? o.slice(0, o.length - u.length) : o;
        let p = d.length > Ae;
        let h = p ? Ar(d) : d;
        let S = p ? `\u2026 [+${i(d.slice(h.length))} graphemes]` : "";
        let w = h.length + S.length + u.length;
        let y = w * w;
        if (y <= n) {
            n -= y;
            return bt(h) + S + u;
        }
        let b = _t(d, Ze);
        let C = b.length < d.length ? `\u2026 [+${i(d.slice(b.length))} graphemes]` : "";
        let P = b.length + C.length + u.length;
        let _ = P * P;
        if (b.length > 0 && _ <= r) {
            r -= _;
            return bt(b) + C + u;
        }
        return `\u2026 [+${i(d)} graphemes]` + u;
    }).join(`
`);
}
function MR(e) {
    for(let n = 0; n < e.length; n++){
        if (wt(e.charCodeAt(n))) {
            return false;
        }
    }
    return true;
}
function Qs(e) {
    return kt(e, true);
}
function kt(e, n) {
    let r = "";
    for (let o of e){
        let s = o.codePointAt(0);
        if (kr(s)) {
            continue;
        }
        r += wt(s) || Et(s) || Pr(s) ? "\uFFFD" : o;
    }
    let i = hpe(r);
    if (n) {
        return Fr(i);
    }
    return i;
}
const Dr = /\p{DI}/gu;
function O5e(e) {
    return e.replace(Dr, "");
}
function TCr(e) {
    return FTo(e) === undefined;
}
function FTo(e) {
    let n = Tr.exec(e);
    if (n !== null) {
        return n[0].codePointAt(0);
    }
    if (jr.test(e)) {
        return;
    }
    for (let { segment } of ra().segment(e)){
        if (Nr.test(segment)) {
            continue;
        }
        let i = ae(segment);
        if (i === 0) {
            return segment.codePointAt(0);
        }
        if (i > 2 && segment.length > 1) {
            for (let o of segment){
                if (ae(o) === 0) {
                    return o.codePointAt(0);
                }
            }
        }
    }
}
var Tr = new RegExp(`(?![\\t\\n\\r])[${qy}]`, "u");
var Nr = /^[\t\n\r]+$/;
var jr = /^[\t\n\r\x20-\x7e]*$/;
function zSe(e) {
    return kt(O5e(gf(e)), false);
}
function UTo(e, n = "linux") {
    return Zsn(e) || NH(e, n);
}
async function KE(e, n, r) {
    let i = n + 1;
    let o = Buffer.alloc(r === undefined ? i : Math.min(Math.max(Number(r) + 1, 1), i));
    let s = 0;
    while(s < i){
        if (s === o.length) {
            let d = Buffer.alloc(i);
            o.copy(d);
            o = d;
        }
        let { bytesRead } = await e.read(o, s, o.length - s, s);
        if (bytesRead === 0) {
            break;
        }
        s += bytesRead;
    }
    return {
        bytes: o.subarray(0, Math.min(s, n)),
        overLimit: s > n
    };
}
const Gr = {
    realpath,
    lstat,
    readlink
};
async function Arn(e, n, r, i = Gr) {
    let o;
    try {
        o = await i.lstat(r, {
            bigint: true
        });
    } catch  {
        return;
    }
    if (o.dev !== n.dev || o.ino !== n.ino) {
        return;
    }
    try {
        let s = await i.readlink(`/proc/self/fd/${e.fd}`);
        if (!s.startsWith("/") || s.endsWith(" (deleted)")) {
            return;
        }
        let u = await i.lstat(s, {
            bigint: true
        });
        if (u.dev !== n.dev || u.ino !== n.ino) {
            return;
        }
        return s;
    } catch  {
        return;
    }
    try {
        if (await i.realpath(r) !== r) {
            return;
        }
    } catch  {
        return;
    }
    return r;
}
async function Crn(e) {
    return open(e, constants.O_RDONLY | constants.O_NONBLOCK | ai);
}
const BPs = 10485760;
const mZ = 512000;
const xt = {
    imageMaxRawBytes: 307200,
    wholePdfMaxRawBytes: 0,
    pdfMaxPagesPerRead: 3
};
const $r = {
    imageMaxRawBytes: 512000,
    wholePdfMaxRawBytes: 2500000,
    pdfMaxPagesPerRead: 6
};
function vCr(e) {
    switch(e){
        case "session":
        case "relay":
            return $r;
        case "bridge":
        case "direct":
            return xt;
        default:
            {
                let n = e;
                return xt;
            }
    }
}
const It = 28;
function ECr(e, n) {
    if (e <= 0 || n <= 0) {
        return 0;
    }
    return Math.ceil(e / It) * Math.ceil(n / It);
}
const TH = {
    maxWidth: 2000,
    maxHeight: 2000,
    maxBase64Size: 5242880,
    targetRawSize: 3932160
};
const I5e = 33554432;
const $Ht = 20971520;
const jPs = 100;
const WPs = 3145728;
const Trn = 104857600;
const gZ = 20;
const FHt = 10;
const zPs = 100;
const GPs = 600;
const LTo = 20;
const VPs = [
    510,
    255,
    127
];
const qPs = 78643200;
const KPs = I5e - 8388608;
const YPs = 10485760;
const kCr = 64000;
async function UHt(e, n, r, i, o) {
    o?.throwIfAborted();
    let s = i ? zY(e, n, r) : open(e, n | ai);
    if (!o) {
        return s;
    }
    let u;
    let d = new Promise((resolvePromise, rejectPromise)=>{
        u = ()=>rejectPromise(o.reason ?? Error("aborted"));
        o.addEventListener("abort", u, {
            once: true
        });
    });
    try {
        return await Promise.race([
            s,
            d
        ]);
    } catch (error) {
        s.then((h)=>h.close(), ()=>{});
        throw error;
    } finally{
        if (u) {
            o.removeEventListener("abort", u);
        }
    }
}
const Yr = /^(?:\/dev\/(?:stdin|stdout|stderr|fd\/\d+)|\/proc\/self\/fd\/\d+)$/;
function Tt(e) {
    return Yr.test(e) || /^\/proc\/\d+\/fd\/\d+$/.test(e) && e.startsWith(`/proc/${process.pid}/fd/`);
}
function BHt(e) {
    return `/proc/${process.pid}/fd/${e}`;
}
const zr = 2097152;
async function zY(e, n, r) {
    if (r !== "macos" || await rGn()) {
        return open(e, n | ai);
    }
    return open(e, n & ~constants.O_NOFOLLOW | Nut | ai);
}
async function Ct(e, n, r) {
    if (r !== "macos") {
        return false;
    }
    for(let o = e;; o = dirname(o)){
        try {
            if (!(await lstat(o)).isDirectory()) {
                return false;
            }
        } catch  {
            return false;
        }
        if (dirname(o) === o) {
            break;
        }
    }
    let i;
    try {
        i = await open(e, constants.O_RDONLY | constants.O_DIRECTORY | Nut | ai);
    } catch  {
        return false;
    }
    try {
        let [o, s] = await Promise.all([
            i.stat({
                bigint: true
            }),
            n.stat({
                bigint: true
            })
        ]);
        return o.ino === s.ino && o.dev === s.dev;
    } catch  {
        return false;
    } finally{
        await i.close();
    }
}
const Xr = {
    chain: "a link on the way now leads somewhere the check did not see",
    networkLink: "a link now stands at the network path",
    junction: "the junction no longer leads to the approved share",
    unrenderable: "its real path can no longer be determined",
    rendering: "it now resolves to a path the check did not see",
    linkOnApproved: "a link now stands on the approved path",
    openedElsewhere: "it opened at a different path than approved",
    afterOpen: "it re-resolved elsewhere once opened"
};
async function ACr(e) {
    try {
        return await readlink(`/proc/self/fd/${e}`);
    } catch (error) {
        if (Jc(error)) {
            return;
        }
        throw error;
    }
}
async function vt(e, n, r) {
    try {
        return await ACr(e.fd);
    } catch (error) {
        if (r === "by-spelling") {
            return;
        }
        throw new s9(`Refusing to read ${n}: the system would not say where it was opened (reading /proc/self/fd failed with ${v(error) ?? "an error"}), so it cannot be told apart from a path this session may not read.`);
    }
}
function le(e, n) {
    return new s9(`Refusing to read ${e}: its symlink resolution changed after permission was checked (${Xr[n]}). If a link in the working directory is being rewritten concurrently, stop that and retry.`);
}
const Nt = false;
async function Rrn(e) {
    let n = [];
    for(let u = e;; u = dirname(u)){
        n.unshift(u);
        if (dirname(u) === u) {
            break;
        }
    }
    let r = ie();
    let i;
    let o = [];
    let s = [];
    for (let u of n){
        try {
            let d = await lstat(u, {
                bigint: true
            });
            if (!(u === e ? d.isFile() : d.isDirectory())) {
                return;
            }
            o.push(d);
            s.push("lstat");
            continue;
        } catch (error) {
            let p = v(error);
            if (u === e || p !== "EPERM" && p !== "EACCES") {
                return;
            }
        }
        {
            let d = await At(u);
            if (d === undefined) {
                return;
            }
            o.push(d);
            s.push("open");
            continue;
        }
        i ??= uwe(r);
        if (i !== null && s.slice(1).every((d)=>d === "passed") && PDt(u, i)) {
            o.push(undefined);
            s.push("passed");
            continue;
        }
        return;
    }
    for(let u = 0; u < n.length - 1; u++){
        let d = o[u];
        if (d === undefined) {
            continue;
        }
        let p;
        try {
            p = s[u] === "open" ? await At(n[u]) : await lstat(n[u], {
                bigint: true
            });
        } catch  {
            return;
        }
        if (p === undefined || !p.isDirectory() || p.dev !== d.dev || p.ino !== d.ino) {
            return;
        }
    }
    return o.at(-1);
}
async function At(e) {
    let n;
    try {
        n = await open(e, constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW | ai);
    } catch  {
        return;
    }
    try {
        let r = await n.stat({
            bigint: true
        });
        if (r.isDirectory()) {
            return r;
        }
        return undefined;
    } catch  {
        return;
    } finally{
        await n.close().catch(()=>{});
    }
}
function qe(e) {
    return isAbsolute(e) && !Za(e) && !Tt(e);
}
async function ype(e) {
    for(let n = e.length - 1; n >= 0; n--){
        let r = e[n];
        if (!qe(r)) {
            continue;
        }
        let i = await Rrn(r);
        if (i) {
            return {
                dev: i.dev,
                ino: i.ino
            };
        }
    }
    return null;
}
async function Lt(e, n, r, i, o) {
    if (o == null) {
        return;
    }
    for(let s = n.length - 1; s >= 0; s--){
        let u = n[s];
        if (!qe(u) || !Nt && !await Rrn(u)) {
            continue;
        }
        let d;
        try {
            d = await UHt(u, r & ~constants.O_NOFOLLOW | Nut | constants.O_NONBLOCK, "macos", false, i);
        } catch (error) {
            if (i?.aborted) {
                throw i.reason ?? error;
            }
            continue;
        }
        let p = await d.stat({
            bigint: true
        }).catch(()=>{});
        if (p?.isFile() && p.dev === o.dev && p.ino === o.ino) {
            t(`openReadBoundToApproval: the fresh resolution of ${e} is not verbatim what the check approved (or realpath could not render it); reading approved ${u}, opened link-free`);
            return {
                canonicalPath: u,
                ioPath: u,
                handle: d,
                close: ()=>d.close()
            };
        }
        await d.close().catch(()=>{});
    }
}
async function jHt(e, n, r, i, o = "by-spelling") {
    let s = new Set(n);
    let u = O();
    let d = u === "windows" ? constants.O_RDONLY : constants.O_RDONLY | constants.O_NOCTTY;
    let p = u === "windows" ? d : d | constants.O_NOFOLLOW;
    let h = yo(ie(), e);
    let S = (k)=>i != null && k.isFile() && k.dev === i.dev && k.ino === i.ino;
    let w = async (k = h)=>{
        let k_resolvedPath = k.resolvedPath;
        if (i == null || !k.isCanonical || !qe(k_resolvedPath) || k_resolvedPath.startsWith("/dev/")) {
            return false;
        }
        if (!Nt) {
            let A = await Rrn(k_resolvedPath);
            return A !== undefined && S(A);
        }
        let E;
        try {
            E = await UHt(k_resolvedPath, p & ~constants.O_NOFOLLOW | Nut | constants.O_NONBLOCK, "macos", false, r);
        } catch (error) {
            if (r?.aborted) {
                throw r.reason ?? error;
            }
            return false;
        }
        try {
            return await E.stat({
                bigint: true
            }).then(S, ()=>false);
        } finally{
            await E.close().catch(()=>{});
        }
    };
    let y = async (k)=>{
        if (u === "macos" && await w()) {
            let H = await Lt(e, n, p, r, i);
            if (H) {
                return H;
            }
        }
        throw le(e, k);
    };
    let b = di(e);
    if (b.unresolved) {
        throw le(e, "unrenderable");
    }
    for (let k of b.spellings){
        if (!s.has(k)) {
            return y(h.isCanonical && k === h.resolvedPath ? "rendering" : "chain");
        }
    }
    let C = async (k, H)=>{
        if ((await lstat(k)).isSymbolicLink()) {
            throw le(e, "networkLink");
        }
        let E = await UHt(k, p, u, !H, r);
        if (u === "linux" || u === "wsl") {
            let A = await vt(E, e, o).catch(async (R)=>{
                await E.close().catch(()=>{});
                throw R;
            });
            if (A !== undefined && A !== k && !s.has(A)) {
                await E.close().catch(()=>{});
                throw le(e, "openedElsewhere");
            }
            if (A !== undefined) {
                return {
                    ioPath: BHt(E.fd),
                    canonicalPath: k,
                    handle: E,
                    close: ()=>E.close()
                };
            }
        }
        return {
            ioPath: k,
            canonicalPath: k,
            handle: E,
            close: ()=>E.close()
        };
    };
    if ($ut(e, u)) {
        return C(e, false);
    }
    let P = Tt(e) && !isAbsolute(h.resolvedPath) && /^(?:pipe|socket|anon_inode):\[/.test(h.resolvedPath) && basename(b.landing) === h.resolvedPath;
    if (!h.isCanonical && !P) {
        if (h.isSymlink || h.resolvedPath !== e) {
            if (s.has(h.resolvedPath) && $ut(h.resolvedPath, u)) {
                let E = u === "macos" ? await C(h.resolvedPath, false) : await C(e, true);
                let A = yo(ie(), e);
                if (A.isCanonical || A.resolvedPath !== h.resolvedPath) {
                    await E.close().catch(()=>{});
                    throw le(e, "junction");
                }
                return E;
            }
            throw le(e, "junction");
        }
        let k = await UHt(e, u === "macos" ? d | constants.O_NONBLOCK : d, u, false, r);
        let H = u === "macos" && i != null ? await k.stat({
            bigint: true
        }).catch(()=>{}) : undefined;
        await k.close().catch(()=>{});
        if (H && S(H)) {
            let E = await Lt(e, n, p, r, i);
            if (E) {
                return E;
            }
        }
        throw le(e, "unrenderable");
    }
    if (!P && !s.has(h.resolvedPath)) {
        return y("rendering");
    }
    let canonicalPath = P ? e : h.resolvedPath;
    let D;
    try {
        D = await UHt(canonicalPath, P ? p & ~constants.O_NOFOLLOW : p, u, !P, r);
    } catch (error) {
        if (v(error) === "ELOOP") {
            throw le(e, "linkOnApproved");
        }
        throw error;
    }
    try {
        let k = canonicalPath;
        if (u === "linux" || u === "wsl") {
            let E = await vt(D, e, o);
            if (E !== undefined) {
                if (E !== (P ? h.resolvedPath : canonicalPath)) {
                    throw le(e, "openedElsewhere");
                }
                k = BHt(D.fd);
            }
        }
        if (k === canonicalPath) {
            let E = di(e);
            if (E.unresolved) {
                throw le(e, "afterOpen");
            }
            for (let A of E.spellings){
                if (!s.has(A)) {
                    if (u === "macos" && await w(yo(ie(), e)) && await D.stat({
                        bigint: true
                    }).then(S, ()=>false)) {
                        break;
                    }
                    throw le(e, "afterOpen");
                }
            }
        }
        let H = D;
        return {
            canonicalPath,
            ioPath: k,
            handle: H,
            close: ()=>H.close()
        };
    } catch (error) {
        await D.close().catch(()=>{});
        throw error;
    }
}
class Fe extends Error {
    dir;
    reported;
    constructor(e, n){
        super("held directory vanished");
        this.dir = e;
        this.reported = n;
    }
}
const Ft = 3;
function ee(e) {
    return new _g(`Refusing to write ${e}: its parent-directory symlink resolution changed after permission was checked.`);
}
async function M5e(e, n, r, i, o = false) {
    let s = ()=>new _g(`Refusing to write ${n}: it is a symbolic link. Write to the link's target path instead.`);
    if (r === "windows") {
        try {
            if ((await lstat(e)).isSymbolicLink()) {
                throw s();
            }
        } catch (error) {
            if (v(error) === "ENOENT") {
                return null;
            }
            throw error;
        }
    }
    let u = r === "windows" ? constants.O_RDONLY : constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK | (constants.O_NOCTTY ?? 0);
    let d;
    try {
        d = o ? await open(e, u | ai) : await zY(e, u, r);
    } catch (error) {
        let h = v(error);
        if (h === "ENOENT") {
            return null;
        }
        if (h === "ELOOP" || h === "EMLINK" || h === "EFTYPE") {
            throw s();
        }
        throw error;
    }
    try {
        return await nwe(d, n, i);
    } finally{
        await d.close();
    }
}
async function Fb(e, n, r) {
    for(let i = 1;; i++){
        try {
            return await Jr(e, n, r);
        } catch (error) {
            if (!(error instanceof Fe)) {
                throw error;
            }
            t(`pinWriteTarget: ${error.dir} was removed while held (attempt ${i}); ${i < Ft ? "taking the pin again" : "refusing"}`, {
                level: "warn"
            });
            if (i >= Ft) {
                throw error.reported ?? ee(e);
            }
        }
    }
}
async function Jr(e, n, r) {
    let i = new Set(n);
    let o = basename(e);
    let s = O();
    let u = ()=>{
        let E = di(r?.leaf === "replace" ? dirname(e) : e);
        let A = r?.leaf === "replace" ? E.spellings.map((R)=>join(R, o)) : E.spellings;
        return !E.unresolved && A.every((R)=>i.has(R));
    };
    let d = ()=>{
        if (!u()) {
            throw ee(e);
        }
    };
    let p = u();
    if (!p && !(s === "macos" && !$ut(e, s))) {
        throw ee(e);
    }
    let h = async (E, A, R)=>{
        if (!await Ct(E, R, s)) {
            t(`pinWriteTarget: ${E} resolves to ${A}: not the same directory by a link-free route; refused`, {
                level: "warn"
            });
            return false;
        }
        t(`pinWriteTarget: ${E} is rendered ${A} by realpath; same directory (device and inode), treated as an alias`);
        return true;
    };
    let S = (E)=>i.has(join(E, o));
    let w = (E)=>{
        let A = yo(ie(), E);
        if (!A.isCanonical) {
            throw ee(e);
        }
        return A.resolvedPath;
    };
    let y = (E)=>{
        let A = yo(ie(), E);
        if (A.isCanonical) {
            return A.resolvedPath;
        }
        return E;
    };
    if ($ut(e, s) && s !== "linux" && s !== "wsl") {
        let E = async (R)=>{
            if (s !== "macos") {
                return;
            }
            for(let G = R;; G = dirname(G)){
                try {
                    await (await zY(G, constants.O_RDONLY | constants.O_DIRECTORY, s)).close();
                    return;
                } catch (error) {
                    let X = v(error);
                    if (X === "ELOOP") {
                        throw ee(e);
                    }
                    if (X !== "ENOENT" || dirname(G) === G) {
                        throw error;
                    }
                }
            }
        };
        await E(dirname(e));
        if (r?.createParents) {
            await ie().mkdir(dirname(e));
            await E(dirname(e));
        }
        let A = async ()=>{
            d();
            if (s !== "macos") {
                return;
            }
            try {
                await (await zY(dirname(e), constants.O_RDONLY | constants.O_DIRECTORY, s)).close();
            } catch (error) {
                throw v(error) === "ELOOP" ? ee(e) : error;
            }
        };
        return {
            ioPath: e,
            canonicalPath: e,
            readExisting: async (R)=>{
                await A();
                let G = await M5e(e, e, s, R, false);
                await A();
                return G;
            },
            recheckBeforeWrite: A,
            close: async ()=>{}
        };
    }
    let b = async ()=>{
        if (r?.createParents) {
            await ie().mkdir(dirname(e));
            d();
        }
        let E = yo(ie(), dirname(e));
        if (!E.isCanonical && !(E.isSymlink && S(E.resolvedPath) && $ut(join(E.resolvedPath, o), s))) {
            if (!E.isSymlink) {
                await lstat(dirname(e));
            }
            throw ee(e);
        }
        let A = !E.isCanonical;
        let E_resolvedPath = E.resolvedPath;
        if (!S(E_resolvedPath)) {
            throw ee(e);
        }
        return {
            ioPath: e,
            canonicalPath: join(E_resolvedPath, o),
            readExisting: async (G)=>{
                d();
                let W = await M5e(e, e, s, G, A);
                d();
                if (A && yo(ie(), dirname(e)).resolvedPath !== E_resolvedPath) {
                    throw ee(e);
                }
                return W;
            },
            recheckBeforeWrite: d,
            close: async ()=>{}
        };
    };
    if (s === "windows") {
        return b();
    }
    let P = s === "linux" || s === "wsl" ? zr | constants.O_DIRECTORY : constants.O_RDONLY | constants.O_DIRECTORY;
    let _ = dirname(e);
    let D = [];
    let k;
    let H = "";
    while(true){
        try {
            H = s === "macos" ? y(_) : _;
            k = await zY(H, P, s);
            break;
        } catch (error) {
            let A = v(error);
            let R = dirname(_);
            let G = A === "ELOOP" && s === "macos" && H === _ && !yo(ie(), _).isCanonical;
            if (A === "ELOOP" && !G) {
                let W = yo(ie(), dirname(e));
                if (p && !W.isCanonical && W.isSymlink && S(W.resolvedPath) && $ut(join(W.resolvedPath, o), s)) {
                    return b();
                }
                throw ee(e);
            }
            if (G && !r?.createParents) {
                let W = [
                    basename(_)
                ];
                for(let X = R;; X = dirname(X)){
                    let N = yo(ie(), X);
                    if (N.isCanonical) {
                        await lstat(join(N.resolvedPath, W[0]));
                        break;
                    }
                    if (dirname(X) === X) {
                        break;
                    }
                    W.unshift(basename(X));
                }
                throw ee(e);
            }
            if ((A === "ENOENT" || G) && r?.createParents && R !== _) {
                D.unshift(basename(_));
                _ = R;
                continue;
            }
            throw error;
        }
    }
    try {
        let E = false;
        let A = async (N, Y)=>{
            let Z = s === "linux" || s === "wsl" ? await ACr(N.fd).catch(()=>{}) : undefined;
            if (Z === undefined) {
                return w(Y);
            }
            E = true;
            if (Z.endsWith(" (deleted)")) {
                throw new Fe(Y);
            }
            return Z;
        };
        let R = await A(k, _);
        if (!E && R !== _ && !S(join(R, ...D)) && S(join(_, ...D)) && await h(_, R, k)) {
            R = _;
        }
        let G = join(R, ...D);
        if (!S(G)) {
            if (D.length === 0 && await lstat(join(E ? `/proc/self/fd/${k.fd}` : R, o)).then((Y)=>Y.isSymbolicLink(), ()=>false)) {
                throw new _g(`Refusing to write ${e}: it is a symbolic link. Write to the link's target path instead.`);
            }
            throw ee(e);
        }
        for (let N of D){
            let Y = E ? `/proc/self/fd/${k.fd}` : R;
            let Z = null;
            try {
                await mkdir(join(Y, N));
            } catch (error) {
                Z = error;
                if (v(error) === "ENOENT") {
                    throw new Fe(R);
                }
                if (v(error) !== "EEXIST") {
                    _pe(error, {
                        ioPath: join(Y, N),
                        canonicalPath: join(R, N)
                    }, join(R, N));
                }
            }
            let oe;
            try {
                oe = await zY(join(Y, N), P | constants.O_NOFOLLOW, s);
            } catch (error) {
                if (v(error) === "ELOOP" || v(error) === "ENOTDIR") {
                    throw ee(e);
                }
                if (v(error) === "ENOENT") {
                    let ve;
                    if (Z !== null) {
                        try {
                            _pe(Z, {
                                ioPath: join(Y, N),
                                canonicalPath: join(R, N)
                            }, join(R, N));
                        } catch (err) {
                            ve = err;
                        }
                    }
                    throw new Fe(join(R, N), ve);
                }
                _pe(Z !== null ? Z : error, {
                    ioPath: join(Y, N),
                    canonicalPath: join(R, N)
                }, join(R, N));
            }
            await k.close();
            k = oe;
            let fe = join(R, N);
            R = await A(k, fe);
            if (R !== fe) {
                if (E || !await h(fe, R, k)) {
                    throw ee(e);
                }
                R = fe;
            }
        }
        if (!E) {
            let N = k;
            let Y = async ()=>{
                if (u()) {
                    return;
                }
                if (!await Ct(G, N, s)) {
                    throw ee(e);
                }
                if (r?.leaf !== "replace" && await lstat(join(G, o)).then((oe)=>oe.isSymbolicLink(), (oe)=>v(oe) !== "ENOENT")) {
                    throw ee(e);
                }
            };
            await Y();
            let Z = join(G, o);
            return {
                ioPath: Z,
                canonicalPath: Z,
                readExisting: async (oe)=>{
                    await Y();
                    let fe = await M5e(Z, e, s, oe);
                    await Y();
                    return fe;
                },
                recheckBeforeWrite: Y,
                close: ()=>N.close()
            };
        }
        let W = k;
        let X = `/proc/self/fd/${W.fd}/${o}`;
        return {
            ioPath: X,
            canonicalPath: join(G, o),
            readExisting: (N)=>M5e(X, e, s, N),
            recheckBeforeWrite: ()=>{},
            close: ()=>W.close()
        };
    } catch (error) {
        await k.close().catch(()=>{});
        throw error;
    }
}
function _pe(e, n, r) {
    if (e instanceof Error) {
        let i = e.message;
        for (let o of [
            n.ioPath,
            n.canonicalPath
        ]){
            if (o !== r) {
                i = i.split(o).join(r);
            }
        }
        if (i !== e.message) {
            e.message = i;
        }
    }
    throw e;
}
const Zr = new Set([
    "ENOENT",
    "ENOTDIR"
]);
const Qr = new Set([
    "EAGAIN",
    "EBUSY",
    "EMFILE",
    "ENFILE",
    "ENOSPC",
    "EDQUOT",
    "ENOMEM"
]);
function qr(error) {
    let n = v(error);
    return n !== undefined && Zr.has(n);
}
function Hut(e, n) {
    return v(e) === n;
}
function Kzn(e) {
    let n = v(e);
    return n !== undefined && Qr.has(n);
}
function ei(error) {
    if (qr(error)) {
        return {
            kind: "absent"
        };
    }
    return {
        kind: "fs",
        error
    };
}
function OPs(e) {
    if (e.kind === "fs") {
        return v(e.error) ?? "unknown";
    }
    return e.kind;
}
async function V(e) {
    try {
        return oh(await e);
    } catch (error) {
        return mp(ei(error));
    }
}
const SCr = 384;
async function si(e, n, r = SCr) {
    let i = await V(lstat(e));
    if (!i.ok && i.error.kind !== "absent") {
        return mp(i.error);
    }
    if (i.ok && !i.value.isFile()) {
        return mp(ci(e, i.value));
    }
    return V(open(e, n | oa, r));
}
async function CO(e) {
    if (oa === 0) {
        return si(e, constants.O_RDONLY);
    }
    return li(e, await V(open(e, constants.O_RDONLY | oa)));
}
function li(e, n) {
    if (!n.ok && n.error.kind === "fs" && Hut(n.error.error, "ELOOP")) {
        return mp({
            kind: "fs",
            error: Ht(e, "ELOOP")
        });
    }
    return n;
}
function Ht(path, code_1) {
    return Object.assign(ui(code_1), {
        code: code_1,
        path
    });
}
function ci(e, n) {
    return {
        kind: "fs",
        error: Ht(e, n.isSymbolicLink() ? "ELOOP" : "ENXIO")
    };
}
function ui(code) {
    switch(code){
        case "ELOOP":
            return Error("refusing a symlinked path");
        case "ENXIO":
            return Error("refusing a non-regular file");
        case "EISDIR":
            return Error("refusing a directory at the leaf");
        case "ENOTDIR":
            return Error("refusing a non-directory node on a write path");
        case "EFBIG":
            return Error("refusing a file over the size cap");
        case Ion:
            return Error("refusing a value that has a second name (hard link)");
        case Oon:
            return Error("refusing a value whose opened object is no longer at its key");
        case aMs:
            return Error("refusing a hardened read the host cannot verify");
    }
}
async function MPs(e, n) {
    let r = await gi();
    if (!r.ok) {
        return r;
    }
    if (r.value) {
        let h = await V(readlink(`/proc/self/fd/${e.fd}`));
        if (h.ok) {
            return oh(!h.value.endsWith(" (deleted)") && h.value === n);
        }
        if (h.error.kind === "fs" && Kzn(h.error.error)) {
            return h;
        }
        if (h.error.kind === "fs" && Hut(h.error.error, "ENAMETOOLONG")) {
            return oh(false);
        }
        return oh("unavailable");
    }
    pi();
    let [i, o] = await Promise.all([
        V(lstat(n, {
            bigint: true
        })),
        V(e.stat({
            bigint: true
        }))
    ]);
    if (!o.ok) {
        return o;
    }
    let s = Bt(i, o.value);
    if (!s.ok || s.value !== true) {
        return s;
    }
    let u = await V(realpath(dirname(n)));
    if (!u.ok) {
        if (u.error.kind === "absent") {
            return oh(false);
        }
        return u;
    }
    if (u.value !== dirname(n)) {
        return oh(false);
    }
    let d = await V(lstat(n, {
        bigint: true
    }));
    let p = Bt(d, o.value);
    if (!p.ok || p.value !== true) {
        return p;
    }
    if (i.ok && i.value.nlink > 1n || d.ok && d.value.nlink > 1n || o.value.nlink > 1n) {
        return oh("otherNames");
    }
    return oh(true);
}
function Bt(e, n) {
    if (!e.ok) {
        if (e.error.kind === "absent") {
            return oh(false);
        }
        return e;
    }
    if (!e.value.isFile()) {
        return oh(false);
    }
    if (!bse(n.ino) || !bse(e.value.ino) || n.nlink === 0n || e.value.nlink === 0n) {
        return oh("unavailable");
    }
    return oh(e.value.ino === n.ino && e.value.dev === n.dev);
}
class Kt {
    available = undefined;
    probing = undefined;
    procUnreadableLogged = false;
}
const fi = new q(()=>new Kt);
function Gt() {
    return fi.of(B().host);
}
async function gi() {
    let e = Gt();
    if (e.available !== undefined) {
        return oh(e.available);
    }
    e.probing ??= V(lstat("/proc/self/fd")).then((n)=>{
        e.probing = undefined;
        if (!n.ok && n.error.kind === "fs" && Kzn(n.error.error)) {
            return n;
        }
        e.available = n.ok;
        return oh(e.available);
    });
    return e.probing;
}
function pi() {
    let e = Gt();
    if (e.procUnreadableLogged) {
        return;
    }
    e.procUnreadableLogged = true;
    t("storage: /proc descriptor record unreadable for hardened reads on this host; using the post-open recheck");
}
function bse(e) {
    return !Hg(e);
}
const xTo = "LinkMisdirected";
const Yzn = "LinkUnverified";
async function HPs(e, n, r) {
    if (!bse(n.inode)) {
        return mp({
            kind: "classified",
            error: Pon("unknown", {
                telemetryCode: Yzn
            })
        });
    }
    let i = await V(link(e, r));
    if (!i.ok) {
        return i;
    }
    let o = await V(lstat(r, {
        bigint: true
    }));
    if (!o.ok) {
        if (o.error.kind === "absent") {
            return mp({
                kind: "classified",
                error: Pon("unknown", {
                    telemetryCode: Yzn
                })
            });
        }
        return o;
    }
    if (!bse(o.value.ino)) {
        return mp({
            kind: "classified",
            error: Pon("unknown", {
                telemetryCode: Yzn
            })
        });
    }
    if (De(o.value, n) || await mi(r, n)) {
        return oh(undefined);
    }
    let s = {
        device: o.value.dev,
        inode: o.value.ino
    };
    let [u, d] = await Promise.all([
        V(lstat(e, {
            bigint: true
        })),
        V(stat(e, {
            bigint: true
        }))
    ]);
    let p = u.ok && De(u.value, s) || d.ok && De(d.value, s);
    t(`storage: a link publish landed on another object (expected ${n.device}:${n.inode}, found ${s.device}:${s.inode}, ${o.value.isSymbolicLink() ? "a symlink" : `nlink ${o.value.nlink}`}); ${p ? "the staged name was swapped — removing the entry" : "leaving the entry"}`, {
        level: "warn"
    });
    if (p) {
        let h = await V(lstat(r, {
            bigint: true
        }));
        if (h.ok && De(h.value, s)) {
            await V(unlink(r));
        }
    }
    return mp({
        kind: "classified",
        error: Pon("unknown", {
            telemetryCode: xTo
        })
    });
}
async function mi(e, n) {
    let r = await V(open(e, constants.O_RDONLY | oa));
    if (!r.ok) {
        return false;
    }
    try {
        let i = await V(r.value.stat({
            bigint: true
        }));
        return i.ok && De(i.value, n);
    } finally{
        await V(r.value.close());
    }
}
function De(e, n) {
    return bse(e.ino) && e.dev === n.device && e.ino === n.inode;
}
function hi(e) {
    return Ga(e, "expected a segment that is not empty or made only of dots and spaces, with no path separator, NUL or set-aside shape");
}
function Mg(e) {
    if (typeof e !== "object" || e === null) {
        return Ga("key", "expected a key object");
    }
    let n = xi(e);
    if (n !== undefined) {
        return n;
    }
    let r = qi(e);
    if (r === undefined) {
        return Ga("key", `${e.namespace} is not a storage namespace`);
    }
    return Wt("key", r);
}
function Wt(e, n) {
    for (let [r, i, o] of n){
        let s = `${e}.${r}`;
        if (i === undefined) {
            if (o !== "optional") {
                return Ga(s, "required");
            }
        } else if (yi(r)) {
            if (!(e === "scope" && r === "agentRelPath" && Array.isArray(i) && i.length === 0) && (!Array.isArray(i) || !PO(i))) {
                return Ga(s, "expected a non-empty array of segments, none empty or made only of dots and spaces, with no path separator, NUL or set-aside shape");
            }
        } else if (typeof i !== "string" || !fr(i)) {
            return hi(s);
        }
    }
}
function yi(e) {
    return e === "relPath" || e === "agentRelPath";
}
const Ut = [
    "commands",
    "agents",
    "output-styles",
    "skills",
    "workflows",
    "routines",
    "themes",
    "rules",
    "session-env",
    "uploads",
    "mcp-skill-archives",
    "usage-data",
    "mcp-discovery-cache"
];
const Yt = new Set(Ut);
const zt = `must be one of the userConfigDir directory names (${Ut.join(", ")})`;
const Vt = [
    "installed",
    "marketplaces",
    "flagged",
    "catalog",
    "inUseSweep"
];
const bi = new Set(Vt);
const wi = `must be one of the pluginRegistry files (${Vt.join(", ")})`;
const Xt = [
    "manifest",
    "catalog"
];
const Ei = new Set(Xt);
const Si = `must be one of the marketplaceCache forms (${Xt.join(", ")})`;
const Jt = [
    "world"
];
const Ri = new Set(Jt);
const _i = `must be one of the session journal names (${Jt.join(", ")})`;
function ki(sessionJournal) {
    return Ri.has(sessionJournal);
}
function Pi(digest) {
    return typeof digest === "string" && /^[0-9a-f]{64}$/.test(digest);
}
function xi(e) {
    if (e.namespace === "transcript") {
        return vi(e);
    }
    if (e.namespace === "pluginAssetCache" && !Pi(e.digest)) {
        return Ga("key.digest", "must be a SHA-256 digest: 64 lowercase hexadecimal characters");
    }
    if (e.namespace === "globalConfig" && "kind" in e) {
        if (!tn(e.kind)) {
            return Ga("key.kind", en);
        }
        if (typeof e.stamp !== "string") {
            return Ga("key.stamp", "a recovery copy key carries its stamp");
        }
    }
    if (e.namespace === "task") {
        return $i(e);
    }
    if (e.namespace === "sidecar") {
        let n = Be("key.sessionId", e.sessionId);
        if (n !== undefined) {
            return n;
        }
        if (He(e.relPath)) {
            return Ga("key.relPath", Te);
        }
        if (sn(e.relPath)) {
            return Ga("key.relPath", rn);
        }
        return undefined;
    }
    if (e.namespace === "recording") {
        return Be("key.sessionId", e.sessionId) ?? (on(e.stamp) ? undefined : Ga("key.stamp", Oi));
    }
    if (e.namespace === "jobsRoot") {
        return Ui(e);
    }
    if (e.namespace === "userConfigDir" && !Yt.has(e.dir)) {
        return Ga("key.dir", zt);
    }
    if (e.namespace === "fileHistory") {
        return Ii(e);
    }
    if (e.namespace === "settings" && !Hi(e.layer)) {
        return Ga("key.layer", "must be user, project or local");
    }
    if (e.namespace === "log") {
        return Ki(e);
    }
    if (e.namespace === "job" && pn(e.relPath)) {
        return Ga("key.relPath", gn);
    }
    if (e.namespace === "sessionLog") {
        return hn("key", e) ?? (Ji(e.logName) ? undefined : Ga("key.logName", "must be the session-log stem <sessionId8>[-<title-slug>]: up to eight word characters, then lower-case a-z / 0-9 runs joined by single hyphens; not a bare device name"));
    }
    if (e.namespace === "pluginRegistry" && !bi.has(e.file)) {
        return Ga("key.file", wi);
    }
    if (e.namespace === "marketplaceCache") {
        if (!("relPath" in e)) {
            if (Ei.has(e.form)) {
                return undefined;
            }
            return Ga("key.form", Si);
        }
        if (e.form === undefined) {
            return undefined;
        }
        return Ga("key.form", "a tree file key carries relPath, not form");
    }
    if (e.namespace !== "agentMemory") {
        return;
    }
    if (!Zt(e.layer)) {
        return Ga("key.layer", "must be user, project or local");
    }
    if (e.layer === "user" && "projectKey" in e) {
        return Ga("key.projectKey", "the user layer is not keyed by project");
    }
    if (e.layer !== "user" && typeof e.projectKey !== "string") {
        return Ga("key.projectKey", "required for the project and local layers");
    }
    if (typeof e.agentType === "string") {
        return undefined;
    }
    return Ga("key.agentType", "an agent memory key names its agent");
}
function Ii(e) {
    if (typeof e.backupFileName !== "string" || !aDt.test(e.backupFileName)) {
        return Ga("key.backupFileName", "must be a backup file name the engine has ever written (hex hash @v version)");
    }
}
function Zt(layer) {
    return layer === "user" || layer === "project" || layer === "local";
}
const qt = [
    "backup",
    "corrupted"
];
const Ci = new Set(qt);
var en = `must be one of the global-config copy kinds (${qt.join(", ")})`;
function tn(kind) {
    return Ci.has(kind);
}
function vi(e) {
    let n = Be("key.sessionId", e.sessionId);
    if (n !== undefined) {
        return n;
    }
    if (He(e.agentRelPath)) {
        return Ga("key.agentRelPath", Te);
    }
    if ("sessionJournal" in e) {
        if (typeof e.sessionJournal !== "string" || !ki(e.sessionJournal)) {
            return Ga("key.sessionJournal", _i);
        }
        if (e.agentId === undefined && e.agentRelPath === undefined && !("journal" in e)) {
            return undefined;
        }
        return Ga("key.sessionJournal", "a session journal key names the session's own journal: no agentId, agentRelPath or run journal");
    }
    if ("journal" in e) {
        if (e.journal !== true) {
            return Ga("key.journal", "must be true");
        }
        if (!Array.isArray(e.agentRelPath)) {
            return Ga("key.agentRelPath", "a run journal key carries its run directory");
        }
        if (e.agentId === undefined) {
            return undefined;
        }
        return Ga("key.agentId", "a transcript key names an agent transcript or the run journal, never both");
    }
    if (e.agentRelPath !== undefined && e.agentId === undefined) {
        return Ga("key.agentRelPath", "requires agentId or journal");
    }
}
const NHt = "cloud-snapshots";
const Xzn = "side.git";
const DPs = "archive-sync";
const LPs = "folder-sync";
const PTo = "steps-under-way";
const nn = new Set([
    "memory",
    "tiny_memory",
    "bagel",
    NHt,
    "bridge-pointer.json",
    ".session-aliases"
]);
const Ai = /^[0-9]{1,16}$/;
var Oi = "must be the recording stamp: 1 to 16 decimal digits (epoch milliseconds)";
const Me = ".cast";
var rn = `<stamp>${Me} inside a session's folder is that session's terminal recording stream: address it as keys.recording(projectKey, sessionId, stamp)`;
function on(e) {
    return typeof e === "string" && Ai.test(e);
}
function sn(relPath) {
    return Array.isArray(relPath) && typeof relPath[0] === "string" && o9(relPath[0]).some((n)=>ITo(n) !== undefined);
}
function ITo(e) {
    if (!e.endsWith(Me)) {
        return;
    }
    let n = e.slice(0, -Me.length);
    if (on(n)) {
        return n;
    }
}
const an = [
    ".ccr-tip.json",
    ".precompact.json",
    Me
];
const Li = `must not end with ${an.join(", ")}: those name a session's project-level sibling files`;
function ln(e) {
    return o9(e).some((n)=>an.some((r)=>n.endsWith(r)));
}
const wCr = ".dir-sync.json";
const Fi = `must not end with ${wCr}: that name is reserved for a cloud session's record at the project level`;
function Di(sessionId) {
    return o9(sessionId).some((n)=>n.endsWith(wCr));
}
const Ti = `${[
    ...nn
].join(", ")} are reserved: they name project-level entries, not sessions`;
function cn(e) {
    return o9(e).some((n)=>nn.has(n));
}
function NPs(e) {
    return !cn(e) && !Vrn(e) && !ln(e);
}
function Be(e, sessionId) {
    if (typeof sessionId !== "string") {
        return;
    }
    if (cn(sessionId)) {
        return Ga(e, Ti);
    }
    if (ln(sessionId)) {
        return Ga(e, Li);
    }
    if (Di(sessionId)) {
        return Ga(e, Fi);
    }
    if (Vrn(sessionId)) {
        return Ga(e, Te);
    }
}
const Ni = ".meta.json";
const ji = ".meta is reserved for the list metadata key, under every spelling that opens its file";
function Mi(taskId) {
    return Bi(`${taskId}.json`);
}
function Bi(e) {
    return o9(e).includes(Ni);
}
var Te = "names a .jsonl stream, which only a transcript key addresses";
function He(e) {
    return Array.isArray(e) && e.some((n)=>typeof n === "string" && Vrn(n));
}
function Hi(layer) {
    return layer === "user" || layer === "project" || layer === "local";
}
const un = "must be debug, telemetry or apiDump";
function dn(channel) {
    return channel === "debug" || channel === "telemetry" || channel === "apiDump";
}
function Ki(e) {
    if (!dn(e.channel)) {
        return Ga("key.channel", un);
    }
    if (e.channel !== "apiDump") {
        return;
    }
    for (let n of [
        "agentId",
        "runId"
    ]){
        if (n in e && e[n] !== undefined) {
            return Ga(`key.${n}`, "an apiDump key names its dump by one id — the agent's for a subagent's requests, else the session's (today's dump-prompts/<id>.jsonl); agentId and runId nest nothing on this channel");
        }
    }
}
function $i(e) {
    if ("taskId" in e && ("meta" in e || "highWaterMark" in e)) {
        return Ga("key.taskId", "a task key names an item, the list metadata or the list high-water mark, never more than one");
    }
    if ("meta" in e && "highWaterMark" in e) {
        return Ga("key.highWaterMark", "a task key names an item, the list metadata or the list high-water mark, never more than one");
    }
    if ("meta" in e && e.meta !== true) {
        return Ga("key.meta", "must be true");
    }
    if ("highWaterMark" in e && e.highWaterMark !== true) {
        return Ga("key.highWaterMark", "must be true");
    }
    if (typeof e.listId !== "string") {
        return Ga("key.listId", "a task key carries its listId");
    }
    if ("meta" in e || "highWaterMark" in e) {
        return;
    }
    if (typeof e.taskId !== "string") {
        return Ga("key.taskId", "a task item key carries its taskId");
    }
    if (Mi(e.taskId)) {
        return Ga("key.taskId", ji);
    }
}
function Ui(e) {
    if ("file" in e && "draftKey" in e) {
        return Ga("key.draftKey", "a jobs-root key names the pins file or one draft, never both");
    }
    if ("file" in e) {
        if (e.file === "pins") {
            return undefined;
        }
        return Ga("key.file", "must be pins");
    }
    if (typeof e.draftKey !== "string") {
        return Ga("key.draftKey", "a jobs-root draft key carries its draftKey");
    }
    if (Qi.test(e.draftKey)) {
        return undefined;
    }
    return Ga("key.draftKey", "must be 8 lowercase hex characters");
}
const fn = "timeline.jsonl";
var gn = `${fn} is the job's timeline stream: address it as keys.jobTimeline(jobId)`;
function pn(relPath) {
    return Array.isArray(relPath) && typeof relPath[0] === "string" && o9(relPath[0]).includes(fn);
}
const Yi = /^\d{4}$/;
const $t = /^\d{2}$/;
const zi = /^[A-Za-z0-9_-]{1,8}(?:-[a-z0-9]+)*$/;
const Vi = 128;
const Xi = /^(?:con|prn|aux|nul|com\d|lpt\d)$/i;
function Ji(logName) {
    return typeof logName === "string" && logName.length <= Vi && zi.test(logName) && !Xi.test(logName);
}
function hn(e, n) {
    if (n.year !== undefined && !nt(Yi, n.year)) {
        return Ga(`${e}.year`, "must be four digits (YYYY)");
    }
    if (n.month !== undefined && !nt($t, n.month)) {
        return Ga(`${e}.month`, "must be two digits (MM)");
    }
    if (n.day !== undefined && !nt($t, n.day)) {
        return Ga(`${e}.day`, "must be two digits (DD)");
    }
}
function nt(e, n) {
    return typeof n === "string" && e.test(n);
}
function Zi(e) {
    if (e.year !== undefined && e.projectKey === undefined) {
        return Ga("scope.projectKey", "required when year is given");
    }
    if (e.month !== undefined && e.year === undefined) {
        return Ga("scope.year", "required when month is given");
    }
    if (e.day !== undefined && e.month === undefined) {
        return Ga("scope.month", "required when day is given");
    }
    return hn("scope", e);
}
var Qi = /^[0-9a-f]{8}$/;
function qi(e) {
    switch(e.namespace){
        case "transcript":
            return [
                [
                    "projectKey",
                    e.projectKey
                ],
                [
                    "sessionId",
                    e.sessionId
                ],
                [
                    "agentId",
                    e.agentId,
                    "optional"
                ],
                [
                    "agentRelPath",
                    e.agentRelPath,
                    "optional"
                ]
            ];
        case "history":
        case "identity":
            return [];
        case "globalConfig":
            if ("kind" in e) {
                return [
                    [
                        "stamp",
                        e.stamp
                    ]
                ];
            }
            return [];
        case "settings":
            if (e.layer === "user") {
                return [];
            }
            if (e.layer === "project") {
                return [
                    [
                        "projectKey",
                        e.projectKey
                    ]
                ];
            }
            return [
                [
                    "consentRootKey",
                    e.consentRootKey
                ]
            ];
        case "task":
            if ("taskId" in e) {
                return [
                    [
                        "listId",
                        e.listId
                    ],
                    [
                        "taskId",
                        e.taskId
                    ]
                ];
            }
            return [
                [
                    "listId",
                    e.listId
                ]
            ];
        case "memory":
            return [
                [
                    "projectKey",
                    e.projectKey
                ],
                [
                    "relPath",
                    e.relPath
                ]
            ];
        case "pluginRegistry":
            return [];
        case "marketplaceCache":
            if ("relPath" in e) {
                return [
                    [
                        "marketplace",
                        e.marketplace
                    ],
                    [
                        "relPath",
                        e.relPath
                    ]
                ];
            }
            return [
                [
                    "marketplace",
                    e.marketplace
                ]
            ];
        case "pluginCache":
            return [
                [
                    "marketplace",
                    e.marketplace
                ],
                [
                    "plugin",
                    e.plugin
                ],
                [
                    "version",
                    e.version
                ],
                [
                    "relPath",
                    e.relPath
                ]
            ];
        case "cache":
            return [
                [
                    "store",
                    e.store
                ],
                [
                    "id",
                    e.id
                ]
            ];
        case "paste":
            return [
                [
                    "id",
                    e.id
                ]
            ];
        case "pluginAssetCache":
            return [
                [
                    "digest",
                    e.digest
                ]
            ];
        case "state":
            return [
                [
                    "id",
                    e.id
                ]
            ];
        case "plan":
            return [
                [
                    "name",
                    e.name
                ]
            ];
        case "feedbackDraft":
            return [
                [
                    "draftId",
                    e.draftId
                ]
            ];
        case "agentMemory":
            return [
                ...e.layer === "user" ? [] : [
                    [
                        "projectKey",
                        e.projectKey
                    ]
                ],
                [
                    "agentType",
                    e.agentType
                ],
                [
                    "relPath",
                    e.relPath
                ]
            ];
        case "team":
            return [
                [
                    "team",
                    e.team
                ]
            ];
        case "sidecar":
            return [
                [
                    "projectKey",
                    e.projectKey
                ],
                [
                    "sessionId",
                    e.sessionId
                ],
                [
                    "relPath",
                    e.relPath
                ]
            ];
        case "scratch":
            return [
                [
                    "sessionId",
                    e.sessionId
                ],
                [
                    "relPath",
                    e.relPath
                ]
            ];
        case "userConfigDir":
            return [
                [
                    "relPath",
                    e.relPath
                ]
            ];
        case "fileHistory":
            return [
                [
                    "sessionId",
                    e.sessionId
                ],
                [
                    "backupFileName",
                    e.backupFileName
                ]
            ];
        case "job":
            return [
                [
                    "jobId",
                    e.jobId
                ],
                [
                    "relPath",
                    e.relPath
                ]
            ];
        case "daemon":
            return [
                [
                    "relPath",
                    e.relPath
                ]
            ];
        case "jobsRoot":
            if ("file" in e) {
                return [];
            }
            return [
                [
                    "draftKey",
                    e.draftKey
                ]
            ];
        case "session":
            return [
                [
                    "file",
                    e.file
                ]
            ];
        case "bridgePointer":
        case "sessionAliases":
            return [
                [
                    "projectKey",
                    e.projectKey
                ]
            ];
        case "dirSyncRecord":
            return [
                [
                    "projectKey",
                    e.projectKey
                ],
                [
                    "sessionId",
                    e.sessionId
                ]
            ];
        case "mailbox":
            return [
                [
                    "team",
                    e.team
                ],
                [
                    "teammate",
                    e.teammate
                ]
            ];
        case "log":
            return [
                [
                    "sessionId",
                    e.sessionId
                ],
                [
                    "agentId",
                    e.agentId,
                    "optional"
                ],
                [
                    "runId",
                    e.runId,
                    "optional"
                ]
            ];
        case "jobTimeline":
            return [
                [
                    "jobId",
                    e.jobId
                ]
            ];
        case "recording":
            return [
                [
                    "projectKey",
                    e.projectKey
                ],
                [
                    "sessionId",
                    e.sessionId
                ],
                [
                    "stamp",
                    e.stamp
                ]
            ];
        case "sessionLog":
            return [
                [
                    "projectKey",
                    e.projectKey
                ],
                [
                    "year",
                    e.year
                ],
                [
                    "month",
                    e.month
                ],
                [
                    "day",
                    e.day
                ],
                [
                    "logName",
                    e.logName
                ]
            ];
    }
}
function OTo(e) {
    if (typeof e !== "object" || e === null) {
        return Ga("scope", "expected a scope object");
    }
    let n = ro(e);
    if (n === undefined) {
        return Ga("scope", `${String(e.namespace)} is not a listable namespace`);
    }
    return to(e) ?? Wt("scope", n);
}
const eo = {
    transcript: [
        [
            "agentId",
            "names one agent transcript, a stream key, not a scope: narrow a scope with agentRelPath"
        ],
        [
            "journal",
            "names a run journal, a stream key, not a scope: narrow a scope with agentRelPath"
        ],
        [
            "sessionJournal",
            "names a session's own journal, a stream key, not a scope: the session scope lists it"
        ]
    ],
    log: [
        [
            "agentId",
            "names one log stream, a stream key, not a scope"
        ],
        [
            "runId",
            "names one log stream, a stream key, not a scope"
        ]
    ],
    sessionLog: [
        [
            "logName",
            "names one session's log, a stream key, not a scope: a day scope lists its logs"
        ]
    ],
    task: [
        [
            "taskId",
            "names one task value, a key, not a scope: a list scope narrows with listId only"
        ],
        [
            "meta",
            "names one task value, a key, not a scope: a list scope narrows with listId only"
        ],
        [
            "highWaterMark",
            "names one task value, a key, not a scope: a list scope narrows with listId only"
        ]
    ],
    mailbox: [
        [
            "teammate",
            "names one inbox, a key, not a scope"
        ]
    ],
    cache: [
        [
            "id",
            "names one cached value, a key, not a scope: a cache scope narrows with store only"
        ]
    ],
    pluginAssetCache: [
        [
            "digest",
            "names one cached asset, a key, not a scope"
        ]
    ],
    fileHistory: [
        [
            "backupFileName",
            "names one backup, a key, not a scope: a file-history scope narrows with sessionId only"
        ]
    ],
    state: [
        [
            "id",
            "names one value, a key, not a scope"
        ]
    ],
    feedbackDraft: [
        [
            "draftId",
            "names one draft, a key, not a scope"
        ]
    ],
    jobsRoot: [
        [
            "file",
            "names one value, a key, not a scope"
        ],
        [
            "draftKey",
            "names one value, a key, not a scope"
        ]
    ],
    plan: [
        [
            "name",
            "names one plan, a key, not a scope"
        ]
    ],
    paste: [
        [
            "id",
            "names one paste, a key, not a scope"
        ]
    ],
    session: [
        [
            "file",
            "names one value, a key, not a scope"
        ]
    ],
    globalConfig: [
        [
            "stamp",
            "names one recovery copy, a key, not a scope: the scope narrows with kind only"
        ]
    ],
    marketplaceCache: [
        [
            "form",
            "names one of the marketplace's two engine-written files, a key, not a scope: the tree narrows with relPath only"
        ]
    ],
    memory: [],
    pluginCache: [],
    daemon: [],
    sidecar: [],
    agentMemory: [],
    scratch: [],
    userConfigDir: [],
    job: [],
    bridgeSpawn: []
};
function to(e) {
    let n = e.namespace === "agentMemory" ? no(e) : undefined;
    if (n !== undefined) {
        return n;
    }
    if (e.namespace === "transcript" || e.namespace === "sidecar") {
        let i = Be("scope.sessionId", e.sessionId);
        if (i !== undefined) {
            return i;
        }
    }
    for (let [i, o] of eo[e.namespace]){
        if (i in e && e[i] !== undefined) {
            return Ga(`scope.${i}`, o);
        }
    }
    if (e.namespace === "sidecar" && He(e.relPath)) {
        return Ga("scope.relPath", Te);
    }
    if (e.namespace === "sidecar" && sn(e.relPath)) {
        return Ga("scope.relPath", rn);
    }
    if (e.namespace === "log" && e.channel !== undefined && !dn(e.channel)) {
        return Ga("scope.channel", un);
    }
    if (e.namespace === "job" && pn(e.relPath)) {
        return Ga("scope.relPath", gn);
    }
    let r = e.namespace === "sessionLog" ? Zi(e) : undefined;
    if (r !== undefined) {
        return r;
    }
    if (e.namespace === "scratch" && e.sessionId === undefined && e.relPath !== undefined) {
        return Ga("scope.relPath", "requires scope.sessionId: a scratch relPath narrows one session directory, and no cross-session prefix filter exists");
    }
    if (e.namespace === "userConfigDir" && !Yt.has(e.dir)) {
        return Ga("scope.dir", zt);
    }
    if (e.namespace === "transcript" && e.agentRelPath !== undefined && (e.projectKey === undefined || e.sessionId === undefined)) {
        return Ga("scope.agentRelPath", "requires scope.projectKey and scope.sessionId: an agentRelPath narrows the subagents/ tree of one session directory");
    }
    if (e.namespace === "transcript" && He(e.agentRelPath)) {
        return Ga("scope.agentRelPath", Te);
    }
    if (e.namespace === "pluginCache") {
        if (e.marketplace === undefined && e.plugin !== undefined) {
            return Ga("scope.plugin", "requires scope.marketplace: a plugin narrows one marketplace folder");
        }
        if (e.plugin === undefined && e.version !== undefined) {
            return Ga("scope.version", "requires scope.plugin: a version narrows one plugin folder");
        }
        if (e.version === undefined && e.relPath !== undefined) {
            return Ga("scope.relPath", "requires scope.version: a relPath narrows one version folder");
        }
    }
    if (e.namespace === "job" && e.jobId === undefined && e.relPath !== undefined) {
        return Ga("scope.relPath", "requires scope.jobId: a job relPath narrows one job directory, and no cross-job prefix filter exists");
    }
    if (e.namespace === "transcript" && e.projectKey === undefined && e.sessionId !== undefined) {
        return Ga("scope.sessionId", "requires scope.projectKey: a session narrows one project folder, and no cross-project session filter exists");
    }
    if (e.namespace === "globalConfig" && e.kind !== undefined && !tn(e.kind)) {
        return Ga("scope.kind", en);
    }
}
function no(e) {
    if (!Zt(e.layer)) {
        return Ga("scope.layer", "must be user, project or local");
    }
    if (e.layer === "user" && "projectKey" in e) {
        return Ga("scope.projectKey", "the user layer is not keyed by project");
    }
    if (e.layer !== "user" && typeof e.projectKey !== "string") {
        return Ga("scope.projectKey", "required for the project and local layers");
    }
    if (e.agentType === undefined && e.relPath !== undefined) {
        return Ga("scope.relPath", "requires scope.agentType: an agent-memory relPath narrows one agent directory");
    }
}
function ro(e) {
    switch(e.namespace){
        case "transcript":
            return [
                [
                    "projectKey",
                    e.projectKey,
                    "optional"
                ],
                [
                    "sessionId",
                    e.sessionId,
                    "optional"
                ],
                [
                    "agentRelPath",
                    e.agentRelPath,
                    "optional"
                ]
            ];
        case "task":
            return [
                [
                    "listId",
                    e.listId,
                    "optional"
                ]
            ];
        case "mailbox":
            return [
                [
                    "team",
                    e.team,
                    "optional"
                ]
            ];
        case "memory":
            return [
                [
                    "projectKey",
                    e.projectKey
                ],
                [
                    "relPath",
                    e.relPath,
                    "optional"
                ]
            ];
        case "pluginCache":
            return [
                [
                    "marketplace",
                    e.marketplace,
                    "optional"
                ],
                [
                    "plugin",
                    e.plugin,
                    "optional"
                ],
                [
                    "version",
                    e.version,
                    "optional"
                ],
                [
                    "relPath",
                    e.relPath,
                    "optional"
                ]
            ];
        case "marketplaceCache":
            return [
                [
                    "marketplace",
                    e.marketplace
                ],
                [
                    "relPath",
                    e.relPath,
                    "optional"
                ]
            ];
        case "cache":
            return [
                [
                    "store",
                    e.store
                ]
            ];
        case "state":
        case "plan":
        case "paste":
        case "pluginAssetCache":
        case "feedbackDraft":
            return [];
        case "sidecar":
            return [
                [
                    "projectKey",
                    e.projectKey
                ],
                [
                    "sessionId",
                    e.sessionId
                ],
                [
                    "relPath",
                    e.relPath,
                    "optional"
                ]
            ];
        case "agentMemory":
            return [
                [
                    "projectKey",
                    e.layer === "user" ? undefined : e.projectKey,
                    "optional"
                ],
                [
                    "agentType",
                    e.agentType,
                    "optional"
                ],
                [
                    "relPath",
                    e.relPath,
                    "optional"
                ]
            ];
        case "scratch":
            return [
                [
                    "sessionId",
                    e.sessionId,
                    "optional"
                ],
                [
                    "relPath",
                    e.relPath,
                    "optional"
                ]
            ];
        case "userConfigDir":
            return [
                [
                    "relPath",
                    e.relPath,
                    "optional"
                ]
            ];
        case "fileHistory":
            return [
                [
                    "sessionId",
                    e.sessionId,
                    "optional"
                ]
            ];
        case "job":
            return [
                [
                    "jobId",
                    e.jobId,
                    "optional"
                ],
                [
                    "relPath",
                    e.relPath,
                    "optional"
                ]
            ];
        case "daemon":
            return [
                [
                    "relPath",
                    e.relPath,
                    "optional"
                ]
            ];
        case "jobsRoot":
        case "session":
            return [];
        case "bridgeSpawn":
            return [
                [
                    "dir",
                    e.dir,
                    "optional"
                ]
            ];
        case "globalConfig":
            return [
                [
                    "kind",
                    e.kind,
                    "optional"
                ]
            ];
        case "log":
            return [
                [
                    "sessionId",
                    e.sessionId,
                    "optional"
                ]
            ];
        case "sessionLog":
            return [
                [
                    "projectKey",
                    e.projectKey,
                    "optional"
                ],
                [
                    "year",
                    e.year,
                    "optional"
                ],
                [
                    "month",
                    e.month,
                    "optional"
                ],
                [
                    "day",
                    e.day,
                    "optional"
                ]
            ];
    }
}
const io = 6;
function xrn(e) {
    if (e.endsWith(".meta.json")) {
        return eA(e);
    }
}
function eA(e) {
    let n = basename(e);
    if (Vrn(n)) {
        return;
    }
    let r = Df();
    let i = [
        n
    ];
    let o = dirname(e);
    while(o !== r && i.length <= io + 1){
        let h = dirname(o);
        if (h === o) {
            return;
        }
        i.unshift(basename(o));
        o = h;
    }
    if (o !== r || i.length < 3) {
        return;
    }
    let [s, u, ...d] = i;
    if (!fr(s) || !fr(u) || d.length === 0 || !d.every(fr)) {
        return;
    }
    let p = $e.sidecar(s, u, d);
    if (Mg(p) === undefined) {
        return p;
    }
}
const GSe = "tool-results";
function nh(e) {
    return En(e.root.id, ()=>bo(e.root).originalCwd);
}
function kS() {
    return En(K(), we);
}
function En(e, n) {
    return join(t8e() ?? Ph(n()), e, GSe);
}
function gq(e, n) {
    if (basename(e) !== GSe || !fr(n)) {
        return;
    }
    return eA(join(e, n));
}
function co(e) {
    let n = gq(e, "probe");
    if (n === undefined || n.namespace !== "sidecar") {
        return;
    }
    return {
        namespace: "sidecar",
        projectKey: n.projectKey,
        sessionId: n.sessionId,
        relPath: n.relPath.slice(0, -1)
    };
}
async function S0(e, n) {
    if (j() && n !== undefined) {
        let o = co(e);
        if (o !== undefined) {
            try {
                if ((await n.ensureScope(o)).ok) {
                    return;
                }
            } catch  {}
        }
    }
    if (Ce()) {
        t("tool-results folder not made: diskless session");
        return;
    }
    let r = mn();
    let i = false;
    try {
        i = await fo(r, e);
    } catch  {}
    if (!i) {
        return;
    }
    try {
        await r.mkdir(e);
    } catch  {}
}
const uo = 3;
async function fo(e, n) {
    return await Sn(e, n) === undefined;
}
async function Sn(e, n) {
    let r = Df();
    let i = relative(r, n);
    if (i === "" || i === ".." || i.startsWith(`..${sep}`) || isAbsolute(i)) {
        return;
    }
    let o = r;
    for (let s of i.split(sep)){
        o = join(o, s);
        let u = await e.lstat(o);
        if (u === undefined) {
            return;
        }
        if (u.isSymbolicLink || !u.isDirectory) {
            return o;
        }
    }
}
async function BTo(e, n) {
    if (Ce()) {
        throw new x("tool-results file refused: this session keeps no files on this machine");
    }
    let r = await Sn(n, e);
    if (r !== undefined) {
        throw new x(`tool-results path refused: ${r} is a link or not a directory`, "tool-results path refused: a directory on the way is a link or not a directory");
    }
}
async function wse(e, n, r) {
    let i = mn();
    await BTo(dirname(e), i);
    for(let o = 1;; o++){
        if (o > 1) {
            await Rn(i, e);
        } else {
            await jTo(e, i);
        }
        try {
            await i.writeBytesExclusive(e, n, r);
            return;
        } catch (error) {
            if (v(error) !== "EEXIST" || o >= uo) {
                throw error;
            }
        }
    }
}
async function jTo(e, n) {
    if ((await n.lstat(e))?.isSymbolicLink) {
        await Rn(n, e);
    }
}
async function Rn(e, n) {
    try {
        await e.delete(n);
    } catch (error) {
        if (v(error) !== "ENOENT") {
            throw error;
        }
    }
}
function ko(e) {
    let { firstPage, lastPage } = e ?? {};
    if (firstPage === undefined) {
        return "page range";
    }
    if (lastPage === undefined || lastPage === Infinity) {
        return `pages ${firstPage}-`;
    }
    if (firstPage === lastPage) {
        return `page ${firstPage}`;
    }
    return `pages ${firstPage}-${lastPage}`;
}
async function JPs(e, n) {
    try {
        let i = (await e.stat()).size;
        if (i === 0) {
            return {
                success: false,
                error: {
                    reason: "empty",
                    message: `PDF file is empty: ${n}`
                }
            };
        }
        if (i > $Ht) {
            return {
                success: false,
                error: {
                    reason: "too_large",
                    message: `PDF file exceeds maximum allowed size of ${Qt($Ht)}.`
                }
            };
        }
        let { bytes } = await KE(e, i, i);
        if (!bytes.subarray(0, 5).toString("ascii").startsWith("%PDF-")) {
            return {
                success: false,
                error: {
                    reason: "corrupted",
                    message: `File is not a valid PDF (missing %PDF- header): ${n}`
                }
            };
        }
        let base64 = bytes.toString("base64");
        return {
            success: true,
            data: {
                type: "pdf",
                file: {
                    filePath: n,
                    base64,
                    originalSize: i
                }
            }
        };
    } catch (error) {
        if (Nf(error)) {
            throw error;
        }
        return {
            success: false,
            error: {
                reason: "unknown",
                message: l(error),
                category: Ke(error),
                site: "read"
            }
        };
    }
}
async function CCr(e, n, r = "linux") {
    if (n === undefined || e === BHt(n.handle.fd)) {
        return Pn(Nn(e, r), undefined);
    }
    if (await yc("pdfinfo").catch(()=>null) === null) {
        return {
            pageCount: null,
            pdfinfoFailure: {
                reason: "not_found"
            }
        };
    }
    if (n.size > Trn) {
        return {
            pageCount: null,
            pdfinfoFailure: {
                reason: "not_run"
            }
        };
    }
    try {
        return await Pn(Dn, {
            input: await Tn(n.handle, n.size, AbortSignal.any([
                n.signal,
                AbortSignal.timeout(timeout)
            ])),
            abortSignal: n.signal
        });
    } catch (error) {
        if (error instanceof Ye || Nf(error)) {
            t(`PDF page count: the open file was not read for pdfinfo (${v(error) ?? l(error)}); going without a count`, {
                level: "warn"
            });
        } else {
            c(error);
        }
        return {
            pageCount: null,
            pdfinfoFailure: {
                reason: "not_run"
            }
        };
    }
}
async function Pn(e, n) {
    let { code, stdout, exitCode, timedOut } = await it("pdfinfo", [
        e
    ], {
        timeout,
        useCwd: false,
        ...n
    });
    if (code === 0) {
        let p = /^Pages:\s+(\d+)/m.exec(stdout);
        if (p) {
            return {
                pageCount: parseInt(p[1], 10)
            };
        }
        return {
            pageCount: null,
            pdfinfoFailure: {
                reason: "no_page_count"
            }
        };
    }
    if (timedOut) {
        return {
            pageCount: null,
            pdfinfoFailure: {
                reason: "timeout"
            }
        };
    }
    if (exitCode !== undefined) {
        return {
            pageCount: null,
            pdfinfoFailure: {
                reason: "nonzero_exit",
                exitCode
            }
        };
    }
    return {
        pageCount: null,
        pdfinfoFailure: {
            reason: await yc("pdfinfo").catch(()=>null) === null ? "not_found" : "no_exit_status"
        }
    };
}
function QPs(e) {
    switch(e.reason){
        case "timeout":
            return "pdfinfo timed out";
        case "not_found":
            return "pdfinfo was not found";
        case "no_exit_status":
            return "pdfinfo did not run to completion";
        case "nonzero_exit":
            return `pdfinfo failed (exit code ${e.exitCode})`;
        case "no_page_count":
            return "pdfinfo did not report a page count";
        case "not_run":
            return "pdfinfo was not run";
    }
}
function ot(e) {
    let n = e === "win32" ? 0 : constants.O_NONBLOCK ?? 0;
    return constants.O_RDONLY | n;
}
const Ln = 259;
var timeout = 10000;
var Dn = "-";
const Po = 1048576;
async function Tn(e, n, r) {
    let i = Buffer.allocUnsafe(n);
    let o = 0;
    while(o < n){
        let s = e.read(i, o, Math.min(Po, n - o), o);
        let { bytesRead } = r === undefined ? await s : await qa(s, r, ()=>new Ye);
        if (bytesRead === 0) {
            break;
        }
        o += bytesRead;
    }
    return i.subarray(0, o);
}
const length = String(2147483647).length;
function Nn(e, n) {
    if (n !== "win32" || e.length <= Ln || !win32.isAbsolute(e)) {
        return e;
    }
    return win32.toNamespacedPath(e);
}
async function Io(outputDir, { platform, scratchRoot }) {
    let i = {
        prefix: join(outputDir, "page"),
        collect: ()=>Promise.resolve(),
        [Symbol.asyncDispose]: ()=>Promise.resolve()
    };
    let o = i.prefix.length + 1 + length + 4;
    if (platform !== "win32" || o <= Ln) {
        return i;
    }
    let s;
    try {
        s = await mkdtemp(join(scratchRoot(), oGn));
    } catch (error) {
        t(`PDF extraction: could not create a scratch directory under the temp dir (${v(error) ?? l(error)}); rendering page images directly into the tool-results directory`, {
            level: "warn"
        });
        return i;
    }
    let u = ()=>rm(s, {
            recursive: true,
            force: true
        });
    let d = St(u);
    return {
        prefix: join(s, "p"),
        collect: ()=>Co(s, outputDir),
        [Symbol.asyncDispose]: ()=>u().then(d, (p)=>t(`PDF extraction: scratch directory not removed (${v(p) ?? l(p)}); removal is retried at exit`, {
                    level: "warn"
                }))
    };
}
async function Co(e, outputDir) {
    let r = await readdir(e);
    let o = (await Promise.allSettled(r.filter((s)=>/^p-\d+\.jpg$/.test(s)).map((s)=>vo(join(e, s), join(outputDir, `page${s.slice(1)}`))))).find((s)=>s.status === "rejected");
    if (o !== undefined) {
        throw o.reason;
    }
}
async function vo(e, n) {
    try {
        await ss(e, n);
    } catch (error) {
        let i = v(error);
        if (i === undefined || !(yC.has(i) || qz.has(i))) {
            throw error;
        }
        await copyFile(e, n);
    }
}
class jn {
    available = undefined;
    markAvailable() {
        this.available = true;
    }
    reset() {
        this.available = undefined;
    }
}
const Ao = new q(()=>new jn);
function Oo() {
    return Ao.of(B().host);
}
async function WTo() {
    let e = Oo();
    if (e.available !== undefined) {
        return e.available;
    }
    let { code, stderr } = await it("pdftoppm", [
        "-v"
    ], {
        timeout: 5000,
        useCwd: false
    });
    let i = code === 0 || code !== 127 && stderr.length > 0;
    if (i) {
        e.markAvailable();
    }
    return i;
}
async function zTo(e, n, r, i = {
    platform: "linux",
    scratchRoot
}) {
    try {
        let o = n?.held === undefined || e === BHt(n.held.fd) ? undefined : n.held;
        let s = o ?? await open(e, ot("linux"));
        let u = await s.stat().finally(()=>{
            if (s === o) {
                return undefined;
            }
            return s.close();
        });
        if (!u.isFile()) {
            return {
                success: false,
                error: {
                    reason: "corrupted",
                    message: `Path is not a regular file: ${e}`
                }
            };
        }
        let d = u.size;
        if (d === 0) {
            return {
                success: false,
                error: {
                    reason: "empty",
                    message: `PDF file is empty: ${e}`
                }
            };
        }
        if (d > Trn) {
            return {
                success: false,
                error: {
                    reason: "too_large",
                    message: `PDF file exceeds maximum allowed size for text extraction (${Qt(Trn)}).`
                }
            };
        }
        if (n?.signal?.aborted) {
            throw new Ye;
        }
        if (!await WTo()) {
            return {
                success: false,
                error: {
                    reason: "unavailable",
                    message: "pdftoppm is not installed. Install poppler-utils (e.g. `brew install poppler` or `apt-get install poppler-utils`) to enable PDF page rendering."
                }
            };
        }
        let input = o === undefined ? undefined : await Tn(o, d, n?.signal);
        let S = randomUUID();
        let outputDir = join(kS(), `pdf-${S}`);
        let y = r === undefined ? undefined : Hn(outputDir);
        await mkdir(outputDir, {
            recursive: true
        });
        await using b = await Io(outputDir, i);
        let C = Nn(e, i.platform);
        let P = [
            "-jpeg",
            "-r",
            "100"
        ];
        if (n?.firstPage) {
            P.push("-f", String(n.firstPage));
        }
        if (n?.lastPage && n.lastPage !== Infinity) {
            P.push("-l", String(n.lastPage));
        }
        P.push(input === undefined ? C : Dn, b.prefix);
        let { code, stderr, exitCode } = await it("pdftoppm", P, {
            timeout: 120000,
            abortSignal: n?.signal,
            waitForExitAfterKill: true,
            useCwd: false,
            ...input !== undefined && {
                input
            }
        });
        if (code !== 0) {
            if (n?.signal?.aborted && exitCode === undefined) {
                throw new Ye;
            }
            let R = In(C);
            let G = stderr.replaceAll(R, ()=>e).replaceAll(C, ()=>e);
            let W = (category)=>({
                    success: false,
                    error: {
                        reason: "unknown",
                        message: `pdftoppm failed: ${G}`,
                        category,
                        site: "extract",
                        exitCode
                    }
                });
            let X = stderr.split(/\r?\n/);
            if (X.some((Q)=>Mn.test(Q))) {
                return W(xn(stderr));
            }
            let N = `I/O Error: Couldn't open file '${R}'`;
            let Y = X.find((Q)=>{
                let _e = Q.trimEnd();
                return _e === N || _e.startsWith(`${N}: `) && !_e.endsWith("'") && !_e.slice(N.length + 2).includes("': ");
            });
            let Z = X.filter((Q)=>Q !== Y).join(`
`).replaceAll(R, " ").replaceAll(C, " ").replaceAll(In(b.prefix), " ").replaceAll(b.prefix, " ");
            if (/password/i.test(Z)) {
                return {
                    success: false,
                    error: {
                        reason: "password_protected",
                        message: "PDF is password-protected. Please provide an unprotected version."
                    }
                };
            }
            let oe = /Wrong page range given.*last page \((\d+)\)/i.exec(Z);
            if (oe) {
                let Q = Number(oe[1]);
                if (Q === 0) {
                    return {
                        success: false,
                        error: {
                            reason: "corrupted",
                            message: "PDF reports 0 pages (empty page tree). The PDF may be invalid."
                        }
                    };
                }
                let _e = Math.min(Q, gZ);
                return {
                    success: false,
                    error: {
                        reason: "page_out_of_range",
                        message: `Requested ${ko(n)} is outside the document (PDF has ${Q} ${I(Q, "page")}). Use a range within 1-${Q}, maximum ${gZ} pages per request (e.g. pages: "1-${_e}").`
                    }
                };
            }
            let fe = /Syntax Error(?: \(\d+\))?: Couldn't (?:find trailer dictionary|read xref table)/i;
            if (/damaged|corrupt|invalid/i.test(Z) || fe.test(Z)) {
                return {
                    success: false,
                    error: {
                        reason: "corrupted",
                        message: "PDF file is corrupted or invalid."
                    }
                };
            }
            let ne = X[0] ?? "";
            let ve = X.some((Q)=>/^(Command Line Error|Internal Error)(?: \(\d+\))?: /.test(Q));
            if (!ve && Y !== undefined && exitCode === 1) {
                if (C !== e) {
                    return W("rewritten_input_unopenable");
                }
                return {
                    success: false,
                    error: {
                        reason: "pdftoppm_input_error",
                        message: `Could not render PDF: ${Y.replaceAll(R, ()=>e)}`
                    }
                };
            }
            if (!ve && ne.startsWith("Permission Error: ")) {
                return {
                    success: false,
                    error: {
                        reason: "pdftoppm_input_error",
                        message: `Could not render PDF: ${ne}`
                    }
                };
            }
            return W(xn(stderr));
        }
        try {
            await b.collect();
        } catch (error) {
            return {
                success: false,
                error: {
                    reason: "unknown",
                    message: `Could not move the rendered PDF pages into ${outputDir} (${v(error) ?? "no error code"})`,
                    category: Ke(error),
                    site: "extract",
                    exitCode
                }
            };
        }
        let pageNames;
        if (r !== undefined) {
            let R = await GTo(r, outputDir, y);
            if (!R.ok) {
                return {
                    success: false,
                    error: {
                        reason: "unknown",
                        message: `Failed to list extracted PDF pages: ${R.code}`,
                        category: `storage_list_${R.code}`,
                        site: "extract"
                    }
                };
            }
            if (R.names.length === 0 && !R.directoryExists) {
                return {
                    success: false,
                    error: {
                        reason: "unknown",
                        message: `Extraction directory missing after pdftoppm ran: ${outputDir}`,
                        category: Ke({
                            code: "ENOENT"
                        }),
                        site: "extract"
                    }
                };
            }
            pageNames = R.names;
        } else {
            pageNames = (await readdir(outputDir)).filter((G)=>G.endsWith(".jpg")).sort();
        }
        if (pageNames.length === 0) {
            return {
                success: false,
                error: {
                    reason: "corrupted",
                    message: "pdftoppm produced no output pages. The PDF may be invalid."
                }
            };
        }
        let count = pageNames.length;
        return {
            success: true,
            data: {
                type: "parts",
                file: {
                    filePath: e,
                    originalSize: d,
                    outputDir,
                    count
                },
                ...y !== undefined && {
                    v5SidecarScope: {
                        ...y,
                        pageNames
                    }
                }
            }
        };
    } catch (error) {
        let s = error && typeof error === "object" && "path" in error ? error.path : undefined;
        if (error instanceof Ye || Nf(error) && (s === e || s === undefined)) {
            throw error;
        }
        return {
            success: false,
            error: {
                reason: "unknown",
                message: l(error),
                category: Ke(error),
                site: "extract"
            }
        };
    }
}
var Mn = /^Could not write image to [\s\S]*; exiting\s*$/;
const Lo = [
    [
        /^Internal Error(?: \(\d+\))?: /,
        "internal_error"
    ],
    [
        /^Command Line Error(?: \(\d+\))?: /,
        "command_line_error"
    ],
    [
        Mn,
        "output_write_failed"
    ],
    [
        /^Config Error(?: \(\d+\))?: /,
        "config_error"
    ],
    [
        /^Unimplemented Feature(?: \(\d+\))?: /,
        "unimplemented_feature"
    ],
    [
        /^I\/O Error(?: \(\d+\))?: /,
        "io_output"
    ],
    [
        /^Syntax (?:Error|Warning)(?: \(\d+\))?: /,
        "syntax_diagnostics"
    ]
];
function xn(stderr) {
    if (stderr.trim() === "") {
        return "empty_stderr";
    }
    let n = stderr.split(/\r?\n/);
    return Lo.find(([i])=>n.some((o)=>i.test(o)))?.[1] ?? "other";
}
function In(e) {
    return Array.from(Buffer.from(e, "utf8"), (n)=>{
        if (n < 32 || n >= 127) {
            return `<${n.toString(16).padStart(2, "0")}>`;
        }
        return String.fromCharCode(n);
    }).join("");
}
function Ke(e) {
    return `fs_wrapped_${Vr(e) ?? "none"}`;
}
const code = "ListCapExceeded";
function Hn(e) {
    let n = kS();
    if (dirname(e) !== n) {
        throw new x(`PDF extraction directory is outside the session tool-results store: ${e}`, "pdf extraction dir outside tool-results");
    }
    return {
        projectKey: zv(we()),
        sessionId: K(),
        relPath: [
            GSe,
            basename(e)
        ]
    };
}
async function GTo(e, n, r) {
    let scope = r ?? Hn(n);
    let { projectKey, sessionId, relPath } = scope;
    let names = [];
    let p = await Wi((S)=>e.listEntries({
            namespace: "sidecar",
            projectKey,
            sessionId,
            relPath
        }, {
            cursor: S,
            skipKeyStats: true,
            skipScopeStats: true
        }), (S)=>{
        for (let w of S){
            if (w.kind !== "key" || w.key.namespace !== "sidecar") {
                continue;
            }
            let y = w.key.relPath.at(-1);
            if (y === undefined || w.key.relPath.length !== relPath.length + 1) {
                continue;
            }
            if (!y.endsWith(".jpg")) {
                continue;
            }
            names.push(y);
        }
    });
    switch(p.status){
        case "done":
            break;
        case "error":
            return {
                ok: false,
                code: p.error.code
            };
        case "capped":
            return {
                ok: false,
                code
            };
    }
    names.sort();
    let directoryExists = true;
    if (names.length === 0) {
        directoryExists = false;
        let suffix = relPath.at(-1);
        let w = await Wi((y)=>e.listEntries({
                namespace: "sidecar",
                projectKey,
                sessionId,
                relPath: relPath.slice(0, -1)
            }, {
                suffix,
                cursor: y,
                skipScopeStats: true
            }), (y)=>{
            directoryExists ||= y.some((b)=>b.kind === "scope" && b.scope.namespace === "sidecar" && (b.scope.relPath ?? []).length === relPath.length && b.scope.relPath?.at(-1) === suffix);
        }, {
            until: ()=>directoryExists
        });
        switch(w.status){
            case "done":
                break;
            case "error":
                return {
                    ok: false,
                    code: w.error.code
                };
            case "capped":
                return {
                    ok: false,
                    code
                };
        }
    }
    return {
        ok: true,
        names,
        directoryExists,
        scope
    };
}
async function OP(e, n, r) {
    let i = r?.fromTail === true ? "unreadable" : null;
    let o;
    try {
        let s = r?.noFollow ? constants.O_NOFOLLOW ?? 0 : 0;
        o = await ge.open(e, ot("linux") | s);
        let u = await o.stat();
        if (!u.isFile()) {
            return i;
        }
        if (r?.requireNlink1 && u.nlink !== 1) {
            return i;
        }
        if (r?.verifyHandlePath) {
            let w = null;
            w = await ge.readlink(`/proc/self/fd/${o.fd}`).catch(()=>null);
            if (w !== null && w.endsWith(" (deleted)")) {
                return i;
            }
            if (w === null) {
                w = await ge.realpath(e);
                let y = await ge.stat(w);
                if (y.dev !== u.dev || y.ino !== u.ino) {
                    return i;
                }
            }
            if (!r.verifyHandlePath(w)) {
                return i;
            }
        }
        if (r?.fromTail === true) {
            let w = u.size > n ? u.size - n : 0;
            let y = Buffer.alloc(u.size - w);
            let b = await Kn(o, y, w);
            let C = st(y.subarray(0, b), r.sniffEncoding);
            let end = w + b;
            if (w === 0) {
                return {
                    content: C,
                    truncated: false,
                    end
                };
            }
            let _ = C.indexOf(`
`);
            return {
                content: _ === -1 ? "" : C.slice(_ + 1),
                truncated: true,
                end
            };
        }
        let d = Math.min(u.size, n + 1);
        let p = Buffer.alloc(d);
        let h = await Kn(o, p, 0);
        if (r?.sniffEncoding === true) {
            let w = u.size > n ? Math.min(h, n) : h;
            let bytes = p.subarray(0, w);
            let b = st(bytes, true);
            let truncated = u.size > n;
            let P = truncated ? `${b}
\u2026[truncated at ${n} bytes of ${u.size} bytes]` : b;
            if (r.withBytes === true) {
                return {
                    content: P,
                    bytes,
                    truncated
                };
            }
            return P;
        }
        let S = st(p.subarray(0, h), false);
        if (S.length > n) {
            return `${S.slice(0, n)}
\u2026[truncated at ${n} chars of ${u.size} bytes]`;
        }
        return S;
    } catch (error) {
        if (H5e(error)) {
            return null;
        }
        return i;
    } finally{
        await o?.close().catch(()=>{});
    }
}
function H5e(e) {
    let n = v(e);
    return n === "ENOENT" || n === "ENOTDIR";
}
async function Kn(e, n, r) {
    let i = 0;
    while(i < n.length){
        let { bytesRead } = await e.read(n, i, n.length - i, r + i);
        if (bytesRead === 0) {
            break;
        }
        i += bytesRead;
    }
    return i;
}
function st(e, n) {
    if (n !== true) {
        return e.toString("utf8");
    }
    if (e.length >= 2 && e[0] === 255 && e[1] === 254) {
        return e.subarray(2).toString("utf16le");
    }
    if (e.length >= 3 && e[0] === 239 && e[1] === 187 && e[2] === 191) {
        return e.subarray(3).toString("utf8");
    }
    let r = e.subarray(0, Math.min(e.length, 512));
    let i = 0;
    let o = 0;
    for(let s = 0; s < r.length; s++){
        if (r[s] === 0) {
            if (s % 2 === 0) {
                i++;
            } else {
                o++;
            }
        }
    }
    if (r.length >= 8 && (i + o) * 4 > r.length) {
        return e.subarray(i > o ? 1 : 0).toString("utf16le");
    }
    return e.toString("utf8");
}
function NUe(e) {
    return e.flatMap((n)=>[
            `Bash(${n})`,
            `PowerShell(${n})`
        ]);
}
function Gn(e) {
    return e.filter((n)=>n !== "PowerShell(git checkout -b *)");
}
const _rn = [
    "git commit *--fil*",
    "git commit * -F*",
    "git commit *--te*",
    "git commit * -t*",
    "git commit *--pathspec-fr*",
    "git commit *--no-veri*",
    "git commit *--no-g*",
    "git commit *--am*",
    "git commit *--allow-empty*",
    "git commit *--reu*",
    "git commit *--ree*"
];
const brn = [
    "git push *--force*",
    "git push * -f*",
    "git push *--de*",
    "git push * -d*",
    "git push * :**",
    'git push *":**',
    "git push *':**",
    "git push * +*",
    'git push *"+*',
    "git push *'+*",
    "git push *--pu*",
    "git push * -o*",
    "git push *--m*",
    "git push *--pru*",
    "git push *--no-veri*",
    "git push *--rece*",
    "git push *--e*"
];
const Srn = [
    "gh pr create *--repo*",
    "gh pr create * -R*",
    "gh pr create *--body-file*",
    "gh pr create * -F*",
    "gh pr create *--head*",
    "gh pr create * -H*",
    "gh pr create *--recover*"
];
const wrn = [
    "gh pr create *--base*",
    "gh pr create * -B*"
];
const MTo = [
    "git *--output*"
];
const vrn = [
    "git checkout *--f*",
    "git checkout * -f*"
];
const Ern = [
    "git add --f*",
    "git add * --f*",
    "git add -f*",
    "git add * -f*",
    "git add --c*",
    "git add * --c*"
];
const HTo = [
    "gh pr edit *--repo*",
    "gh pr edit -R*",
    "gh pr edit * -R*",
    "gh pr edit *--body-file*",
    "gh pr edit -F*",
    "gh pr edit * -F*",
    "gh pr edit *--base*",
    "gh pr edit -B*",
    "gh pr edit * -B*",
    "gh pr edit http*"
];
const pe = "A skill active in this turn";
const xe = "The match is on the raw command text (case-insensitive in PowerShell, so a lowercase short flag can trip an uppercase one), so message, body or path text that merely contains one of these fragments trips it too; reword that text if so.";
const Ee = "If the user explicitly asked for the refused form, say it cannot run inside this skill instead of substituting something else or routing it through another tool.";
const Do = `${pe} refuses \`git commit\` options that read the message from a file or template, skip hooks, amend, reuse a message or allow an empty commit (tokens starting \`--fil\`, \`--te\`, \`--pathspec-fr\`, \`--no-veri\`, \`--no-g\`, \`--am\`, \`--allow-empty\`, \`--reu\`, \`--ree\`, \` -F\`, \` -t\`). The option is refused, not the commit: pass the message inline with \`-m\` as the skill's example shows. ${xe} ${Ee}`;
const To = `${pe} refuses \`git push\` forms that force, delete, mirror or prune refs, set push options, skip the pre-push hook or name a receive-pack (tokens starting \`--force\`, \` -f\`, \` +\`, \`--de\`, \` -d\`, \` :\`, \`--m\`, \`--pru\`, \`--pu\`, \` -o\`, \`--no-veri\`, \`--rece\`, \`--e\`). A plain push of the branch to the configured remote is fine. The match is on the raw command text, so a ref name containing one of these fragments trips it too; tell the user rather than rewriting the command to slip past. ${Ee}`;
const No = `${pe} runs \`gh pr create\` only in its instructed form and refuses \`--repo\`/\`-R\`, \`--head\`/\`-H\`, \`--body-file\`/\`-F\` and \`--recover\` on it. The option is refused, not opening the pull request: re-run it with the title and body passed inline as the skill's example shows; that retry is the intended fix, not a workaround. ${xe} ${Ee}`;
const jo = `${pe} refuses \`--base\`/\`-B\` on \`gh pr create\` in PowerShell, where the \`-b\` short form of \`--body\` trips it too: spell it \`--body\`. The option is refused, not opening the pull request: if the default branch is the intended target, re-run it without \`--base\`, with the title and body passed inline as the skill's example shows, and the pull request opens against it. ${xe} ${Ee}`;
const Mo = `${pe} refuses \`gh pr edit\` with \`--repo\`/\`-R\`, \`--body-file\`/\`-F\`, \`--base\`/\`-B\` or a URL selector: edit the current branch's PR with the title and body passed inline and no selector. ${xe} ${Ee}`;
const Bo = `${pe} refuses \`--output\` on git commands (it writes to an arbitrary path): drop it and read stdout. ${xe}`;
const Ho = `${pe} refuses \`git checkout\` with \`--force\`/\`-f\` (tokens starting \`--f\` or \` -f\`): create the branch with a plain \`git checkout -b\`. The match is on the raw command text, so a branch name containing \`--f\` trips it too. ${Ee}`;
const Ko = `${pe} refuses \`git add\` with \`--force\`/\`-f\` (it stages ignored files such as \`.env\`) or \`--chmod\` (tokens starting \`--f\`, \`-f\`, \`--c\`): stage the paths by name without the option. ${xe} ${Ee}`;
function be(e, n) {
    return NUe(e).map((r)=>[
            r,
            n
        ]);
}
const $Ps = Object.fromEntries([
    ...be(_rn, Do),
    ...be(brn, To),
    ...be(Srn, No),
    ...wrn.map((e)=>[
            `PowerShell(${e})`,
            jo
        ]),
    ...be(HTo, Mo),
    ...be(MTo, Bo),
    ...be(vrn, Ho),
    ...be(Ern, Ko)
]);
function Sse(e) {
    return e.includes("\x00");
}
async function krn(e, n, r, i) {
    let o = await Wo(e);
    if (o.ok) {
        return P5e(o.text, n, r, i);
    }
    return null;
}
async function Wo(e) {
    try {
        let n = await open(join(e, "config"), "r");
        try {
            let i = Buffer.allocUnsafe(1000000);
            let o = 0;
            while(o < 1000000){
                let { bytesRead } = await n.read(i, o, 1000000 - o, o);
                if (bytesRead === 0) {
                    break;
                }
                o += bytesRead;
            }
            let s = false;
            if (o === 1000000) {
                let d = Buffer.allocUnsafe(1);
                let { bytesRead } = await n.read(d, 0, 1, o);
                s = bytesRead > 0;
            }
            let u = i.subarray(0, o).toString("utf-8");
            if (s) {
                let d = u.lastIndexOf(`
`);
                u = d === -1 ? "" : u.slice(0, d);
            }
            if (Sse(u)) {
                return {
                    ok: false,
                    cause: "nul_byte"
                };
            }
            return {
                ok: true,
                text: u
            };
        } finally{
            await n.close();
        }
    } catch  {
        return {
            ok: false,
            cause: "read_failed"
        };
    }
}
function P5e(e, n, r, i) {
    for (let o of ut(e, n, r, i)){
        return o;
    }
    return null;
}
function DTo(e, n, r, i) {
    return [
        ...ut(e, n, r, i)
    ];
}
function FPs(e, n, r, i) {
    return [
        ...ut(e, n, r, i, "true")
    ];
}
const Uo = /^([A-Za-z][A-Za-z0-9-]*)\s*(?:[#;].*)?$/;
function* ut(e, n, r, i, o) {
    let s = e.split(`
`);
    let u = n.toLowerCase();
    let d = i.toLowerCase();
    let p = false;
    for (let h of s){
        let S = h.trim();
        if (S.length === 0 || S[0] === "#" || S[0] === ";") {
            continue;
        }
        if (S[0] === "[") {
            p = at(S, u, r);
            continue;
        }
        if (!p) {
            continue;
        }
        let w = $n(S);
        if (w && w.key.toLowerCase() === d) {
            yield w.value;
        } else if (o !== undefined && Uo.exec(S)?.[1]?.toLowerCase() === d) {
            yield o;
        }
    }
}
function UPs(e) {
    let includes = [];
    let files = [];
    let i = null;
    for (let o of e.split(`
`)){
        let s = o.trim();
        if (s.length === 0 || s[0] === "#" || s[0] === ";") {
            continue;
        }
        if (s[0] === "[") {
            i = at(s, "include", null) || Yo.test(s) ? "include" : at(s, "core", null) ? "core" : null;
            continue;
        }
        let u = i === null ? null : $n(s);
        if (!u || u.value.length === 0) {
            continue;
        }
        let d = u.key.toLowerCase();
        if (i === "include" && d === "path") {
            includes.push(u.value);
        } else if (i === "core" && (d === "excludesfile" || d === "attributesfile")) {
            files.push(u.value);
        }
    }
    return {
        includes,
        files
    };
}
var Yo = /^\[includeif[ \t]*"(?:[^"\\]|\\.)*"\]/i;
function $n(e) {
    let n = 0;
    while(n < e.length && Jo(e[n])){
        n++;
    }
    if (n === 0) {
        return null;
    }
    let key = e.slice(0, n);
    while(n < e.length && (e[n] === " " || e[n] === "\t")){
        n++;
    }
    if (n >= e.length || e[n] !== "=") {
        return null;
    }
    n++;
    while(n < e.length && (e[n] === " " || e[n] === "\t")){
        n++;
    }
    let value = zo(e, n);
    return {
        key,
        value
    };
}
function zo(e, n) {
    let r = "";
    let i = false;
    let o = n;
    while(o < e.length){
        let s = e[o];
        if (!i && (s === "#" || s === ";")) {
            break;
        }
        if (s === '"') {
            i = !i;
            o++;
            continue;
        }
        if (s === "\\" && o + 1 < e.length) {
            let u = e[o + 1];
            if (i) {
                switch(u){
                    case "n":
                        r += `
`;
                        break;
                    case "t":
                        r += "\t";
                        break;
                    case "b":
                        r += "\b";
                        break;
                    case '"':
                        r += '"';
                        break;
                    case "\\":
                        r += "\\";
                        break;
                    default:
                        r += u;
                        break;
                }
                o += 2;
                continue;
            }
            if (u === "\\") {
                r += "\\";
                o += 2;
                continue;
            }
        }
        r += s;
        o++;
    }
    if (!i) {
        r = Vo(r);
    }
    return r;
}
function Vo(e) {
    let e_length = e.length;
    while(e_length > 0 && (e[e_length - 1] === " " || e[e_length - 1] === "\t")){
        e_length--;
    }
    return e.slice(0, e_length);
}
function at(e, n, r) {
    let i = Xo(e);
    return i !== null && i.sectionLower === n && i.subsection === r;
}
function Xo(e) {
    let n = 1;
    while(n < e.length && e[n] !== "]" && e[n] !== " " && e[n] !== "\t" && e[n] !== '"'){
        n++;
    }
    let sectionLower = e.slice(1, n).toLowerCase();
    if (n < e.length && e[n] === "]") {
        return {
            sectionLower,
            subsection: null
        };
    }
    while(n < e.length && (e[n] === " " || e[n] === "\t")){
        n++;
    }
    if (n >= e.length || e[n] !== '"') {
        return null;
    }
    n++;
    let subsection = "";
    while(n < e.length && e[n] !== '"'){
        if (e[n] === "\\" && n + 1 < e.length) {
            let o = e[n + 1];
            if (o === "\\" || o === '"') {
                subsection += o;
                n += 2;
                continue;
            }
            subsection += o;
            n += 2;
            continue;
        }
        subsection += e[n];
        n++;
    }
    if (n >= e.length || e[n] !== '"') {
        return null;
    }
    n++;
    if (n >= e.length || e[n] !== "]") {
        return null;
    }
    return {
        sectionLower,
        subsection
    };
}
function Jo(e) {
    return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "-";
}
const Z8 = Symbol("git-repo-negative-result");
const Ie = Symbol("git-repo-unreadable-result");
class Wn {
    rootByPath = new Kc({
        max: 50
    });
    canonicalRootByRoot = new Kc({
        max: 50
    });
    remoteSlugByRoot = new Kc({
        max: 50
    });
    monorepoRuledOutByRoot = new Kc({
        max: 50
    });
    monorepoVerdictByDir = new Kc({
        max: 50
    });
    gitDirByCwd = new Map;
    linkedFromRootByPin = new Kc({
        max: 64
    });
    hostWorktreeReport;
    markersByRoot = new Kc({
        max: 50
    });
    repositoryByCwd = new Map;
    remoteHostByCwd = new Map;
    repoClassByCanonicalRoot = new Map;
    linguistGeneratedByPath = new Map;
    wcRootByPath = new Kc({
        max: 50
    });
    wcTrunkByRoot = new Map;
    wcWorktreesByRoot = new Kc({
        max: 50,
        ttl: 60000
    });
    wcRemoteHashByRoot = new Kc({
        max: 50
    });
    wcHeadByRoot = new Map;
    sessionRepoNameByCwd = new Kc({
        max: 50
    });
    diffCheckoutIsRepo = new Map;
    gitExecutable = null;
    reportedHookInstallSkips = new Set;
    clear() {
        this.rootByPath.clear();
        this.canonicalRootByRoot.clear();
        this.remoteSlugByRoot.clear();
        this.monorepoRuledOutByRoot.clear();
        this.monorepoVerdictByDir.clear();
        this.gitDirByCwd.clear();
        this.linkedFromRootByPin.clear();
        this.hostWorktreeReport = undefined;
        this.markersByRoot.clear();
        this.repositoryByCwd.clear();
        this.remoteHostByCwd.clear();
        this.repoClassByCanonicalRoot.clear();
        this.linguistGeneratedByPath.clear();
        this.wcRootByPath.clear();
        this.wcTrunkByRoot.clear();
        this.wcWorktreesByRoot.clear();
        this.wcRemoteHashByRoot.clear();
        this.wcHeadByRoot.clear();
        this.sessionRepoNameByCwd.clear();
        this.diffCheckoutIsRepo.clear();
        this.gitExecutable = null;
        this.reportedHookInstallSkips.clear();
    }
}
function LUe(e, n, r) {
    let i = e.get(n);
    if (i !== undefined) {
        return i;
    }
    let o = r(n);
    e.set(n, o);
    return o;
}
const Zo = new q(()=>new Wn);
function Pp() {
    return Zo.of(B().host);
}
function We(e, n) {
    try {
        let r = lstatSync(e);
        if (r.isSymbolicLink()) {
            let i = zHt(e);
            if (i === null) {
                return false;
            }
            if (Gi(i, n)) {
                return false;
            }
            if (v_(i, n)) {
                return false;
            }
            let o = statSync(e);
            return o.isDirectory() || o.isFile();
        }
        return r.isDirectory() || r.isFile();
    } catch  {
        return false;
    }
}
function Xn(e) {
    if (Ce()) {
        return Z8;
    }
    let n = Date.now();
    J("info", "find_git_root_started");
    let r = resolve(e);
    let i = r.substring(0, r.indexOf(sep) + 1) || sep;
    let stat_count = 0;
    while(r !== i){
        let s = join(r, ".git");
        stat_count++;
        if (We(s, r)) {
            J("info", "find_git_root_completed", {
                duration_ms: Date.now() - n,
                stat_count,
                found: true
            });
            return On(r);
        }
        let u = dirname(r);
        if (u === r) {
            break;
        }
        r = u;
    }
    stat_count++;
    if (We(join(i, ".git"), i)) {
        J("info", "find_git_root_completed", {
            duration_ms: Date.now() - n,
            stat_count,
            found: true
        });
        return On(i);
    }
    J("info", "find_git_root_completed", {
        duration_ms: Date.now() - n,
        stat_count,
        found: false
    });
    return Z8;
}
function ur(e) {
    let n = LUe(Pp().rootByPath, e, Xn);
    if (n === Z8) {
        return null;
    }
    return n;
}
function cy(e) {
    let n = Xn(e);
    if (n === Z8) {
        return null;
    }
    return n;
}
async function OCr(e, n) {
    if (Ce()) {
        return {
            gitRoot: null
        };
    }
    let r = resolve(n);
    let i = r.substring(0, r.indexOf(sep) + 1) || sep;
    while(true){
        let o = await e.stat(ff.workspace(join(r, ".git")), {
            follow: false
        });
        if (!o.ok || o.value.kind === "link") {
            return;
        }
        if (o.value.kind === "directory" || o.value.kind === "file") {
            return {
                gitRoot: On(r),
                entry: o.value.kind
            };
        }
        if (r === i) {
            return {
                gitRoot: null
            };
        }
        let s = dirname(r);
        r = s === r ? i : s;
    }
}
function J_(e) {
    let rootByPath = Pp().rootByPath;
    if (rootByPath.peek(e) === Z8) {
        rootByPath.delete(e);
    }
    return ur(e);
}
async function Orn(e) {
    let n = J_(e);
    if (n === null) {
        return null;
    }
    try {
        await lstat(join(n, ".git"));
        return n;
    } catch (error) {
        let i = error?.code;
        if (i !== "ENOENT" && i !== "ENOTDIR") {
            return n;
        }
        Pp().rootByPath.delete(e);
        return J_(e);
    }
}
function Dut(e) {
    let n = On(resolve(e));
    let r = Pp();
    for (let i of [
        r.rootByPath,
        r.canonicalRootByRoot,
        r.remoteSlugByRoot,
        r.monorepoRuledOutByRoot,
        r.monorepoVerdictByDir,
        r.gitDirByCwd,
        r.markersByRoot,
        r.repositoryByCwd,
        r.repoClassByCanonicalRoot,
        r.wcRootByPath,
        r.wcWorktreesByRoot
    ]){
        for (let o of [
            ...i.keys()
        ]){
            if (ih(n, On(resolve(o)))) {
                i.delete(o);
            }
        }
    }
}
function ft(e) {
    try {
        return Jn(e, readFileSync(join(e, ".git"), "utf-8"));
    } catch  {
        return e;
    }
}
function Jn(e, n) {
    try {
        let r = n.trim();
        if (!r.startsWith("gitdir:")) {
            return e;
        }
        let i = r.slice(7).trim();
        if (Gi(i, e)) {
            return e;
        }
        if (v_(i, e)) {
            return e;
        }
        let o = resolve(e, i);
        if (VF(join(o, "commondir"), o)) {
            return e;
        }
        let s = readFileSync(join(o, "commondir"), "utf-8").trim();
        if (Gi(s, o)) {
            return e;
        }
        if (v_(s, o)) {
            return e;
        }
        let u = resolve(o, s);
        if (resolve(dirname(o)) !== join(u, "worktrees")) {
            return e;
        }
        if (VF(join(o, "gitdir"), o)) {
            return e;
        }
        let d = readFileSync(join(o, "gitdir"), "utf-8").trim();
        if (Gi(d, e)) {
            return e;
        }
        if (v_(d, o, e)) {
            return e;
        }
        if (realpathSync(resolve(o, d)) !== join(realpathSync(e), ".git")) {
            return e;
        }
        if (basename(u) !== ".git") {
            if (We(join(u, ".git"), u)) {
                return e;
            }
            return On(u);
        }
        return On(dirname(u));
    } catch  {
        return e;
    }
}
async function is(hostFiles, gitRoot) {
    let r = await hostFiles.readText(ff.workspace(join(gitRoot, ".git")));
    if (!r.ok || !r.value.found) {
        return;
    }
    return Jn(gitRoot, r.value.value);
}
function $s(e) {
    let n = ur(e);
    if (!n) {
        return null;
    }
    return LUe(Pp().canonicalRootByRoot, n, ft);
}
function w0(e) {
    let n = cy(e);
    if (!n) {
        return null;
    }
    return ft(n);
}
async function nAo(e, n) {
    if (e.hostFiles.serving("workspace") !== "host") {
        return;
    }
    let r = Pp();
    let i = r.rootByPath.peek(n);
    if (i !== undefined) {
        let gitRoot = i === Z8 ? null : i;
        return {
            gitRoot,
            canonicalRoot: gitRoot === null ? null : r.canonicalRootByRoot.peek(gitRoot)
        };
    }
    let o = await OCr(e.hostFiles, n);
    if (o === undefined) {
        return;
    }
    let s = o.gitRoot === null ? {
        gitRoot: null,
        canonicalRoot: null
    } : {
        gitRoot: o.gitRoot,
        canonicalRoot: o.entry === "directory" ? o.gitRoot : await is(e.hostFiles, o.gitRoot)
    };
    MCr(n, s.gitRoot, s.canonicalRoot);
    return s;
}
function MCr(e, n, r) {
    let i = Pp();
    let o = n ?? Z8;
    let s = i.rootByPath.peek(e);
    if (s === undefined) {
        i.rootByPath.set(e, o);
    } else if (s !== o) {
        t("git root prime: findGitRoot already holds a different answer for the start path; keeping the first", {
            level: "warn"
        });
        return;
    }
    if (n === null || r === undefined || r === null) {
        return;
    }
    let u = i.canonicalRootByRoot.peek(n);
    if (u === undefined) {
        i.canonicalRootByRoot.set(n, r);
    } else if (u !== r) {
        t("git root prime: findCanonicalGitRoot already holds a different answer for the root; keeping the first", {
            level: "warn"
        });
    }
}
function zz(e) {
    let n = ur(e);
    return n !== null && $s(e) !== n;
}
function rAo(e) {
    let n = cy(e);
    return n !== null && ft(n) !== n;
}
async function oAo(e) {
    if (Mt()) {
        return null;
    }
    let n = await gC(e);
    if (!n || basename(n) === ".git" || basename(dirname(n)) !== "worktrees") {
        return null;
    }
    return basename(n);
}
const VHt = [
    "--no-ext-diff",
    "--no-textconv"
];
const sAo = [
    "--no-color",
    "--src-prefix=a/",
    "--dst-prefix=b/",
    "--submodule=short"
];
function Ot() {
    let e = Pp();
    e.gitExecutable ??= PN("git") || "git";
    return e.gitExecutable;
}
const Zn = new lt(()=>new Map);
async function os() {
    let e = Date.now();
    J("info", "is_git_check_started");
    let n = df();
    let is_git = n !== null && ur(n) !== null;
    J("info", "is_git_check_completed", {
        duration_ms: Date.now() - e,
        is_git
    });
    return is_git;
}
function Qn() {
    return B();
}
function RO() {
    let e = Zn.of(Qn());
    let n = K();
    let r = e.get(n);
    if (r !== undefined) {
        return r;
    }
    let i = os();
    e.set(n, i);
    return i;
}
function qHt(e) {
    Zn.of(e).clear();
    Pp().diffCheckoutIsRepo.clear();
}
function HCr() {
    qHt(Qn());
}
function VY(e) {
    return gC(e);
}
const iAo = async (e)=>ur(e) !== null;
const KHt = async ()=>eGn();
const Od = async (e, n = {
    env: Cs()
})=>{
    if (e === undefined) {
        return ZPs();
    }
    let { stdout, code } = await ct(Ot(), [
        ...An,
        "rev-parse",
        "--abbrev-ref",
        "HEAD"
    ], {
        cwd: e,
        preserveOutputOnError: false,
        ...n
    });
    if (code === 0) {
        return stdout.trim() || "HEAD";
    }
    return "HEAD";
};
async function Mrn(e, n) {
    return (await ct(Ot(), [
        ...An,
        "show-ref",
        "--verify",
        "--quiet",
        `refs/remotes/origin/${e}`
    ], {
        cwd: n ?? se(),
        preserveOutputOnError: false,
        env: Cs()
    })).code === 0;
}
const HR = async (e, n = {
    env: Cs()
})=>{
    if (e === undefined) {
        return eIs();
    }
    let r = await DCr(e, n);
    if (r) {
        return r;
    }
    for (let i of VTo){
        if ((await ct(Ot(), [
            ...An,
            "show-ref",
            "--verify",
            "--quiet",
            `refs/remotes/origin/${i}`
        ], {
            cwd: e,
            preserveOutputOnError: false,
            ...n
        })).code === 0) {
            return i;
        }
    }
    return "main";
};
var DCr = async (e, n = {
    env: Cs()
})=>{
    let { stdout, code } = await ct(Ot(), [
        ...An,
        "symbolic-ref",
        "--short",
        "refs/remotes/origin/HEAD"
    ], {
        cwd: e ?? se(),
        preserveOutputOnError: false,
        ...n
    });
    if (code !== 0) {
        return null;
    }
    let o = stdout.trim().replace(/^origin\//, "");
    if (!o) {
        return null;
    }
    if ((await ct(Ot(), [
        ...An,
        "show-ref",
        "--verify",
        "--quiet",
        `refs/remotes/origin/${o}`
    ], {
        cwd: e ?? se(),
        preserveOutputOnError: false,
        ...n
    })).code === 0) {
        return o;
    }
    return null;
};
const as = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
async function nGn(e) {
    let { stdout, code } = await it(Ot(), [
        ...An,
        "config",
        "--get",
        e
    ], {
        preserveOutputOnError: false,
        useCwd: true,
        env: Cs()
    });
    if (code !== 0) {
        return null;
    }
    let i = stdout.trim();
    if (i.length > 0) {
        return i;
    }
    return null;
}
async function ls(e) {
    let n = await nGn("remote.pushDefault");
    if (n && e.includes(n)) {
        return n;
    }
    if (e.length === 1) {
        return e[0] ?? null;
    }
    return null;
}
async function Hrn() {
    let { stdout, code } = await it(Ot(), [
        ...An,
        "remote"
    ], {
        preserveOutputOnError: false,
        useCwd: true,
        env: Cs()
    });
    if (code !== 0) {
        return [];
    }
    let r = stdout.split(`
`).map((s)=>s.trim()).filter(Boolean);
    let i = new Set;
    if (r.includes("origin")) {
        i.add("origin");
    }
    let o = await ls(r);
    if (o && as.test(o)) {
        i.add(o);
    }
    return [
        ...i
    ];
}
function Drn(e) {
    return e.flatMap((n)=>[
            `git push ${n} *`,
            `git push -u ${n} *`
        ]);
}
function Jxe(e) {
    return Gn(NUe(e)).filter((n)=>n.startsWith("PowerShell("));
}
const bpe = async ()=>qTo();
const LCr = async ()=>{
    let e = df();
    let n = e === null ? null : ur(e);
    if (n === null || await NCr(n)) {
        return null;
    }
    return qTo();
};
async function NCr(e) {
    let n;
    try {
        n = homedir();
    } catch  {
        return false;
    }
    if (!n) {
        return false;
    }
    if (e === On(resolve(n))) {
        return true;
    }
    let r = await realpath(n).then((i)=>On(i), ()=>null);
    return r !== null && e === r;
}
const N5e = async ()=>{
    let [branch, gitRepoUrl, defaultBranch] = await Promise.all([
        Od(),
        LCr(),
        tIs()
    ]);
    return {
        branch,
        gitRepoUrl,
        defaultBranch
    };
};
function $Ue(e) {
    if (e == null) {
        return e;
    }
    return e.replace(/:\/\/[^/]*@/, "://***@");
}
function t9(e) {
    let n = e.trim();
    if (!n || nU(n) || qY(n)) {
        return null;
    }
    let r = n.match(/^git@([^:/@]+):(.+?)(?:\.git)?$/);
    if (r && r[1] && r[2]) {
        if ($rn(r[2])) {
            return null;
        }
        return `${r[1]}/${r[2]}`.toLowerCase();
    }
    let i = n.match(/^(?:https?|ssh):\/\/(?:[^@/?#]*@)?([^/?#@]+)\/(.+?)(?:\.git)?$/);
    if (i && i[1] && i[2]) {
        let o = i[1];
        let s = i[2];
        if ($rn(s)) {
            return null;
        }
        if (UCr() && BCr(o) && s.startsWith("git/")) {
            let u = s.slice(4);
            let d = u.split("/");
            if (d.length >= 3 && d[0].includes(".")) {
                return u.toLowerCase();
            }
            return `github.com/${u}`.toLowerCase();
        }
        return `${o}/${s}`.toLowerCase();
    }
    return null;
}
function cs(e) {
    let n = e ? Qe(e, ":").toLowerCase() : null;
    if (!n) {
        return "none";
    }
    if (ho(n) || n.endsWith(`.${nr}`)) {
        return "github";
    }
    if (n.endsWith(".ghe.com") || n.includes("github")) {
        return "ghe";
    }
    if (n === "gitlab.com" || n.includes("gitlab")) {
        return "gitlab";
    }
    if (n === "bitbucket.org" || n.includes("bitbucket")) {
        return "bitbucket";
    }
    if (n === "dev.azure.com" || n === "ssh.dev.azure.com" || n.endsWith(".visualstudio.com") || n.endsWith(".azure.com")) {
        return "azure";
    }
    return "other";
}
async function aAo() {
    if (Mt()) {
        return null;
    }
    let [is_git, n] = await Promise.all([
        RO(),
        bpe()
    ]).catch(()=>[
            false,
            null
        ]);
    let r = n ? t9(n) : null;
    return {
        is_git,
        has_remote: r !== null,
        remote_host_class: cs(r ? Qe(r, "/") : null)
    };
}
function us(e) {
    try {
        let n = We(join(e, ".git"), e);
        let r = join(n ? join(e, ".git") : e, "config");
        if (H1(r, e)) {
            return Ie;
        }
        let i = readFileSync(r, "utf-8");
        if (Sse(i)) {
            return Ie;
        }
        return i;
    } catch (error) {
        if (Jc(error)) {
            return Z8;
        }
        return Ie;
    }
}
function ds(e) {
    let n = us(e);
    if (n === Ie) {
        t(`[git] could not read the git config of ${e} (a NUL byte, an unsafe path or a read error), so its origin is unknown`);
    }
    if (typeof n !== "string") {
        return n;
    }
    let r = (i)=>{
        let o = P5e(n, "remote", "origin", i);
        if (o) {
            return t9(o);
        }
        return null;
    };
    return r("pushurl") ?? r("url") ?? Z8;
}
function qn(e) {
    return LUe(Pp().remoteSlugByRoot, e, ds);
}
function Lut(e) {
    let n = qn(e);
    if (typeof n === "string") {
        return n;
    }
    return null;
}
function Y2s(e) {
    return qn(e) === Ie;
}
const fs = 128000;
function MFs(e, n) {
    try {
        let r = true;
        try {
            if (lstatSync(join(e, ".git")).isFile()) {
                return {
                    ok: false,
                    cause: "pointer_file"
                };
            }
        } catch (error) {
            if (!z(error)) {
                return {
                    ok: false,
                    cause: "read_failed"
                };
            }
            r = false;
        }
        let i = r ? join(e, ".git") : e;
        let o = gs(join(i, "config"), e, n);
        if (o.ok) {
            return {
                ...o,
                gitDir: i
            };
        }
        return o;
    } catch  {
        return {
            ok: false,
            cause: "read_failed"
        };
    }
}
function gs(e, n, r) {
    if (H1(e, n)) {
        return {
            ok: false,
            cause: "unsafe_path"
        };
    }
    let i = statSync(e);
    if (!i.isFile()) {
        return {
            ok: false,
            cause: "not_a_file"
        };
    }
    if (i.size > r) {
        return {
            ok: false,
            cause: "oversize"
        };
    }
    let o = readFileSync(e, "utf-8");
    if (Sse(o)) {
        return {
            ok: false,
            cause: "nul_byte"
        };
    }
    return {
        ok: true,
        text: o
    };
}
function X2s(e) {
    let n = MFs(e, fs);
    if (n.ok && !n.text.includes("\x00")) {
        return n.text;
    }
    return null;
}
async function lAo() {
    let e = await bpe();
    if (!e) {
        return null;
    }
    let n = t9(e);
    if (!n) {
        return null;
    }
    return createHash("sha256").update(n).digest("hex").substring(0, 16);
}
const $Cr = async ()=>{
    let { code } = await it(Ot(), [
        ...An,
        "rev-parse",
        "@{u}"
    ], {
        preserveOutputOnError: false,
        env: Cs()
    });
    return code === 0;
};
const Lrn = async (cwd)=>{
    let { stdout, code } = await ct(Ot(), [
        ...An,
        "rev-list",
        "--count",
        "@{u}..HEAD"
    ], {
        cwd,
        preserveOutputOnError: false,
        env: Cs()
    });
    return code === 0 && parseInt(stdout.trim(), 10) > 0;
};
const $5e = async (e)=>{
    let n = [
        ...An,
        "--no-optional-locks",
        "status",
        "--porcelain",
        Q_
    ];
    if (e?.ignoreUntracked) {
        n.push("-uno");
    }
    let { stdout } = await it(Ot(), n, {
        preserveOutputOnError: false,
        env: Cs()
    });
    return stdout.trim().length === 0;
};
const Nrn = async (e, env = Cs())=>{
    let r = [
        ...An,
        "--no-optional-locks",
        "status",
        "--porcelain",
        Q_
    ];
    let { stdout } = e === undefined ? await it(Ot(), r, {
        preserveOutputOnError: false,
        env
    }) : await ct(Ot(), r, {
        cwd: e,
        preserveOutputOnError: false,
        env
    });
    let tracked = [];
    let untracked = [];
    stdout.trim().split(`
`).filter((u)=>u.length > 0).forEach((u)=>{
        let d = u.substring(0, 2);
        let p = u.substring(2).trim();
        if (d === "??") {
            untracked.push(p);
        } else if (p) {
            tracked.push(p);
        }
    });
    return {
        tracked,
        untracked
    };
};
const YHt = async ()=>nIs();
async function FCr() {
    try {
        let [commitHash, branchName, remoteUrl, isHeadOnRemote, isClean, worktreeCount] = await Promise.all([
            KHt(),
            Od(),
            bpe(),
            $Cr(),
            $5e(),
            YHt()
        ]);
        g("git_status_fetch");
        return {
            commitHash,
            branchName,
            remoteUrl,
            isHeadOnRemote,
            isClean,
            worktreeCount
        };
    } catch (e) {
        m("git_status_fetch", "git_status_fetch_failed");
        return null;
    }
}
async function cAo() {
    let { parseGitRemote } = await import("/$bunfs/root/chunk-1abjsa9q.js");
    let n = await bpe();
    if (!n) {
        t("Local GitHub repo: unknown");
        return null;
    }
    let r = parseGitRemote(n);
    if (r && ho(r.host)) {
        let i = `${r.owner}/${r.name}`;
        t(`Local GitHub repo: ${i}`);
        return i;
    }
    t("Local GitHub repo: unknown");
    return null;
}
function UCr() {
    return a.CLAUDE_CODE_REMOTE || Sq(a.CLAUDE_CODE_REMOTE_SESSION_ID ?? "") && a.CLAUDE_CODE_ENVIRONMENT_KIND === undefined;
}
function BCr(e) {
    let n = e.indexOf(":");
    let r = n === -1 ? e : e.slice(0, n);
    let i = n === -1 ? "" : e.slice(n + 1);
    if (i !== "" && !/^\d+$/.test(i)) {
        return false;
    }
    return r === "localhost" || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(r);
}
const ps = 4096;
function Yn(e, n, r) {
    let i = /\/+/;
    let o = n.split(i);
    let s = o[0] === "" ? sep : o[0] + sep;
    let u = 0;
    for(let d = 1; d < o.length; d++){
        let p = o[d];
        if (p === "" || p === ".") {
            continue;
        }
        if (p === "..") {
            s = dirname(s);
            continue;
        }
        let h = s.endsWith(sep) ? s + p : s + sep + p;
        if (r !== undefined ? UN(h, r) : fa(h)) {
            return null;
        }
        let S;
        try {
            S = e.lstatSync(h);
        } catch  {
            return null;
        }
        if (!S.isSymbolicLink()) {
            s = h;
            continue;
        }
        if (++u > 64) {
            return null;
        }
        let w;
        try {
            w = e.readlinkSync(h);
        } catch  {
            return null;
        }
        if (Bn(w)) {
            return null;
        }
        if (r !== undefined ? UN(w, r) : fa(w)) {
            return null;
        }
        let y = w.split(i);
        if (isAbsolute(w)) {
            o.splice(0, d + 1, ...y);
            s = y[0] === "" ? sep : y[0] + sep;
            d = 0;
        } else {
            o.splice(d, 1, ...y);
            d--;
        }
    }
    return s;
}
function F5e() {
    let e = ie();
    let n = se();
    let r = Yn(e, n, n) ?? n;
    r = r.normalize("NFC").toLowerCase();
    let i = r.endsWith(sep) ? r : r + sep;
    let o = (canonical)=>{
        let b = canonical.toLowerCase();
        return b === r || b.startsWith(i);
    };
    function s(y) {
        if (UN(y, n)) {
            return null;
        }
        if (Bn(y)) {
            if (!ll(y)) {
                return null;
            }
            if (!Bn(n)) {
                return {
                    canonical: y.normalize("NFC"),
                    crossOs: true
                };
            }
        }
        let b = Yn(e, y, n);
        if (b === null) {
            return null;
        }
        return {
            canonical: b.normalize("NFC"),
            crossOs: false
        };
    }
    function u(canonical, crossOs) {
        if (!crossOs && o(canonical)) {
            return true;
        }
        for (let C of canonical.split(crossOs ? /[\\/]+/ : sep)){
            if (C.toLowerCase() === ".git") {
                return false;
            }
        }
        return true;
    }
    function d(canonical) {
        try {
            let b = e.lstatSync(join(canonical, "HEAD"));
            if (!b.isFile() || b.size > 4096) {
                return false;
            }
            let C = readFileSync(join(canonical, "HEAD"), "utf8").slice(0, 255);
            return /^ref:[ \t]*refs\//.test(C) || /^[0-9a-f]{40}([0-9a-f]{24})?[ \t\n\r]*$/.test(C);
        } catch  {
            return false;
        }
    }
    function p(y) {
        try {
            let b = join(y, "HEAD");
            let C = e.lstatSync(b);
            if (!C.isFile() || C.size > 4096) {
                return false;
            }
            let P = readFileSync(b, "utf8").slice(0, 255);
            if (!/^ref:[ \t]*refs\//.test(P) && !/^[0-9a-f]{40}([0-9a-f]{24})?[ \t\n\r]*$/.test(P)) {
                return false;
            }
            for (let _ of [
                "objects",
                "refs"
            ]){
                let D = join(y, _);
                if (!e.statSync(D).isDirectory()) {
                    return false;
                }
                accessSync(D, constants.X_OK);
            }
            try {
                e.statSync(join(y, "commondir"));
                return false;
            } catch  {}
            return true;
        } catch  {
            return false;
        }
    }
    function h(y) {
        try {
            let b = e.lstatSync(join(y, "HEAD"));
            if (b.isFile() || b.isSymbolicLink()) {
                return true;
            }
        } catch  {}
        for (let b of [
            "objects",
            "refs"
        ]){
            try {
                e.statSync(join(y, b));
                return true;
            } catch  {}
        }
        return false;
    }
    function S(y) {
        let b = (C)=>{
            let P = s(C);
            if (P === null) {
                f("git_bare_repo_gate", "gitdir_target_uncanonical");
                return "plantable";
            }
            if (u(P.canonical, P.crossOs)) {
                f("git_bare_repo_gate", "gitdir_target_plantable");
                return "plantable";
            }
            if (d(P.canonical)) {
                return "trusted";
            }
            return "none";
        };
        try {
            let C = e.lstatSync(join(y, ".git"));
            if (C.isSymbolicLink()) {
                let P;
                try {
                    P = e.readlinkSync(join(y, ".git"));
                } catch  {
                    return "plantable";
                }
                return b(isAbsolute(P) ? P : y + sep + P);
            }
            if (C.isFile()) {
                if (C.size > ps) {
                    return "oversized";
                }
                try {
                    let P = readFileSync(join(y, ".git"), "utf8");
                    if (P.includes("\x00")) {
                        return "plantable";
                    }
                    if (!P.startsWith("gitdir: ")) {
                        return "none";
                    }
                    let _ = P.slice(8).replace(/[\r\n]+$/, "");
                    return b(isAbsolute(_) ? _ : y + sep + _);
                } catch  {
                    return "none";
                }
            }
            if (C.isDirectory()) {
                if (p(join(y, ".git"))) {
                    return "trusted";
                }
                return "none";
            }
        } catch  {}
        return "none";
    }
    switch(S(n)){
        case "plantable":
            return "gitdir-redirect-plantable";
        case "oversized":
            return "gitdir-file-oversized";
        case "trusted":
            g("git_bare_repo_gate");
            return false;
        case "none":
            break;
    }
    let w = n;
    while(true){
        if (h(w)) {
            f("git_bare_repo_gate", "bare_indicators");
            return "bare-indicators";
        }
        let y = dirname(w);
        if (y === w) {
            break;
        }
        switch(S(y)){
            case "trusted":
                g("git_bare_repo_gate");
                return false;
            case "plantable":
                return "gitdir-redirect-plantable";
            case "oversized":
                return "gitdir-file-oversized";
            case "none":
                break;
        }
        w = y;
    }
    g("git_bare_repo_gate");
    return false;
}
function WHt(e, n, r) {
    let i = (o, s)=>{
        try {
            r(o, s);
        } catch (error) {
            c(error);
        }
    };
    try {
        watchFile(e, n, i);
    } catch (error) {
        c(error);
    }
    return i;
}
var er = 65536;
var bs = 4096;
var Re = 10;
var ws = 32;
var tr = 94;
var Es = 35;
var Ss = /^[0-9a-f]+$/;
async function rr(e, n) {
    let r = Buffer.from(n, "utf-8");
    let r_length = r.length;
    let o = Buffer.allocUnsafe(er + 1);
    let s;
    let u = 0;
    let d = 0;
    let p = 0;
    let h = 0;
    let S = 0;
    let w = 0;
    let y = 0;
    let b = 0;
    let C = 0;
    let P = 0;
    let _ = 0;
    let D = 0;
    let k;
    try {
        s = await open(join(e, "packed-refs"), "r");
        u = (await s.stat()).size;
        p = u;
        while(d < p){
            h = d + Math.floor((p - d) / 2);
            w = Math.max(d, h - bs);
            y = (await s.read(o, 0, Math.min(er, u - w), w)).bytesRead;
            S = h - w;
            if (S >= y) {
                return null;
            }
            o[y] = Re;
            b = S > 0 ? o.lastIndexOf(Re, S - 1) + 1 : 0;
            if (b > 1 && o[b] === tr) {
                b = o.lastIndexOf(Re, b - 2) + 1;
            }
            if (o[b] === Es) {
                _ = o.indexOf(Re, b);
                d = w + (_ < 0 || _ >= y ? y : _ + 1);
                continue;
            }
            if (C === 0) {
                C = b + 40 < y && o[b + 40] === ws ? 40 : 64;
            }
            P = b + C + 1;
            if (P >= y) {
                return null;
            }
            D = o.compare(r, 0, r_length, P, Math.min(P + r_length, y));
            if (D === 0) {
                if (P + r_length < y && o[P + r_length] !== Re) {
                    p = w + b;
                    continue;
                }
                k = o.toString("ascii", b, b + C);
                if (Ss.test(k)) {
                    return k;
                }
                return null;
            }
            if (D < 0) {
                _ = o.indexOf(Re, S);
                if (_ < 0 || _ >= y) {
                    _ = y - 1;
                }
                if (_ + 1 < y && o[_ + 1] === tr) {
                    _ = o.indexOf(Re, _ + 1);
                    if (_ < 0 || _ >= y) {
                        _ = y - 1;
                    }
                }
                d = w + _ + 1;
            } else {
                p = w + b;
            }
        }
        return null;
    } catch  {
        return null;
    } finally{
        await s?.close();
    }
}
function Prn() {
    Pp().gitDirByCwd.clear();
}
async function gC(e) {
    let n = e ?? (Mt() ? Vl() : df());
    if (n === null) {
        return null;
    }
    let r = resolve(n);
    let i = Pp().gitDirByCwd.get(r);
    if (i !== undefined) {
        return i;
    }
    return gr(r, ur(r));
}
async function Irn(e) {
    let n = resolve(e);
    return gr(n, cy(n));
}
async function gr(e, n) {
    let gitDirByCwd = Pp().gitDirByCwd;
    if (!n) {
        gitDirByCwd.set(e, null);
        return null;
    }
    let i = join(n, ".git");
    try {
        if ((await stat(i)).isFile()) {
            let s = await OP(i, D5e, {
                sniffEncoding: true,
                withBytes: true
            });
            if (s === null || s.truncated) {
                gitDirByCwd.set(e, null);
                return null;
            }
            let u = s.content.trim();
            if (u.startsWith("gitdir:")) {
                let d = u.slice(7).trim();
                if (Gi(d, n)) {
                    gitDirByCwd.set(e, null);
                    return null;
                }
                let p = resolve(n, d);
                if (he(d, n)) {
                    gitDirByCwd.set(e, null);
                    return null;
                }
                gitDirByCwd.set(e, p);
                return p;
            }
        }
        gitDirByCwd.set(e, i);
        return i;
    } catch  {
        gitDirByCwd.set(e, null);
        return null;
    }
}
function gt(e) {
    try {
        let n = lstatSync(e);
        if (n.isSymbolicLink()) {
            return "symlink";
        }
        if (n.isFile()) {
            return "file";
        }
        if (n.isDirectory()) {
            return "dir";
        }
        return "special";
    } catch (error) {
        let r = v(error);
        if (r === "ENOENT" || r === "ENOTDIR") {
            return "absent";
        }
        return "other";
    }
}
function zHt(e) {
    try {
        let n = readlinkSync(e, {
            encoding: "buffer"
        });
        let r = n.toString("utf-8");
        if (r.includes("\x00") || !Buffer.from(r, "utf-8").equals(n)) {
            return null;
        }
        return r;
    } catch  {
        return null;
    }
}
function VF(e, n) {
    if (!je(e, n)) {
        return true;
    }
    let r = gt(e);
    return r === "symlink" || r === "special" || r === "other";
}
function js(e, n) {
    let r = relative(n, e);
    return !(r === "" || r.startsWith("..") || isAbsolute(r));
}
function H1(e, n) {
    if (!js(e, n)) {
        return true;
    }
    return !je(e, n);
}
function Ms(e, n) {
    return Gi(e, n);
}
var Bs = /\/+/;
var Hs = /\/$/;
var pr = /^\//;
var Ks = /^\//;
function je(e, n, r = 40, i = n, o = false, s, u = Number.POSITIVE_INFINITY, d) {
    if (r <= 0) {
        return false;
    }
    let p = Ks.exec(e);
    let h = p ? p[0] : "";
    let S = e.slice(h.length).split(Bs);
    let w = Math.min(u, S.length);
    for(let y = 0; y < S.length; y++){
        let b = S[y];
        if (b === "" || b === ".") {
            continue;
        }
        if (b === "..") {
            h = dirname(h);
            if (s && y >= S.length - w) {
                s.missingTail = null;
            }
            continue;
        }
        h = join(h, b);
        if (UN(h, i) || zO(h)) {
            return false;
        }
        let kind = d ? ir(d.kinds, h, gt) : gt(h);
        if (s && s.stoppedAt === undefined && (kind === "absent" || kind === "other" || kind === "special" && !o)) {
            s.stoppedAt = {
                path: h,
                kind
            };
        }
        if (kind === "other" || kind === "special" && !o) {
            return false;
        }
        if (kind === "absent" && s && s.missingTail === undefined) {
            s.missingTail = y >= S.length - w ? S.length - y : null;
        }
        if (kind === "symlink") {
            if (s) {
                s.throughLink = true;
            }
            let P = d ? ir(d.linkTexts, h, zHt) : zHt(h);
            if (P === null) {
                return false;
            }
            if (Ms(P, dirname(h))) {
                return false;
            }
            let _ = pr.test(P) ? P : dirname(h) + sep + P;
            let D = S.slice(y + 1).join(sep);
            let k = D ? Hs.test(_) ? _ + D : _ + sep + D : _;
            return je(k, n, r - 1, i, o, s, Math.min(w, S.length - y - 1), d);
        }
    }
    if (s && s.missingTail === undefined) {
        s.missingTail = 0;
    }
    return true;
}
function Qzn() {
    return {
        kinds: new Map,
        linkTexts: new Map
    };
}
function ir(e, n, r) {
    let i = e.get(n);
    if (i === undefined && !e.has(n)) {
        i = r(n);
        e.set(n, i);
    }
    return i;
}
function he(e, n, r = n, i = false, o, s) {
    let u = pr.test(e) ? e : n + sep + e;
    let d = resolve(n, e);
    let p = d === u ? o : undefined;
    if (o && !p) {
        o.throughLink = true;
    }
    if (!je(u, n, undefined, r, i, p, undefined, s)) {
        if (o) {
            o.missingTail = null;
        }
        return true;
    }
    if (d === u) {
        return false;
    }
    if (o) {
        o.missingTail = null;
    }
    return !je(d, n, undefined, r, i, undefined, undefined, s);
}
function v_(e, n, r = n) {
    return he(e, n, r);
}
function Zzn(e, n, r) {
    let i = {
        missingTail: undefined
    };
    return {
        unsafe: he(e, n, n, false, i, r),
        missingTail: i.missingTail ?? null,
        stoppedAt: i.stoppedAt,
        throughLink: i.throughLink ?? false
    };
}
function RCr(e, n) {
    return he(e, n, n, true);
}
function e9(e) {
    return /^[0-9a-f]{40}$/.test(e) || /^[0-9a-f]{64}$/.test(e);
}
async function hZ(e) {
    try {
        if (H1(join(e, "HEAD"), e)) {
            return null;
        }
        let n = (await readFile(join(e, "HEAD"), "utf-8")).trim();
        if (n.startsWith("ref:")) {
            let r = n.slice(4).trim();
            if (r.startsWith("refs/heads/")) {
                let o = r.slice(11);
                if (!XR(o)) {
                    return null;
                }
                return {
                    type: "branch",
                    name: o
                };
            }
            if (!XR(r)) {
                return null;
            }
            let i = await GY(e, r);
            if (i) {
                return {
                    type: "detached",
                    sha: i
                };
            }
            return {
                type: "detached",
                sha: ""
            };
        }
        if (!e9(n)) {
            return null;
        }
        return {
            type: "detached",
            sha: n
        };
    } catch  {
        return null;
    }
}
async function GY(e, n, r = 5) {
    if (r <= 0) {
        return null;
    }
    let i = await or(e, n, r);
    if (i) {
        return i;
    }
    let o = await hq(e);
    if (o && o !== e) {
        return or(o, n, r);
    }
    return null;
}
async function or(e, n, r) {
    try {
        if (H1(join(e, n), e)) {
            return null;
        }
        let i = (await readFile(join(e, n), "utf-8")).trim();
        if (i.startsWith("ref:")) {
            let o = i.slice(4).trim();
            if (!XR(o)) {
                return null;
            }
            return GY(e, o, r - 1);
        }
        if (!e9(i)) {
            return null;
        }
        return i;
    } catch  {}
    if (H1(join(e, "packed-refs"), e)) {
        return null;
    }
    return rr(e, n);
}
var D5e = 65536;
async function hq(e) {
    try {
        if (VF(join(e, "commondir"), e)) {
            return null;
        }
        let n = await OP(join(e, "commondir"), D5e, {
            sniffEncoding: true,
            withBytes: true
        });
        if (n === null || n.truncated) {
            return null;
        }
        let r = n.content.trim();
        if (Gi(r, e)) {
            return null;
        }
        if (he(r, e)) {
            return null;
        }
        return resolve(e, r);
    } catch  {
        return null;
    }
}
async function mr(e, n, r) {
    try {
        if (H1(join(e, n), e)) {
            return null;
        }
        let i = (await readFile(join(e, n), "utf-8")).trim();
        if (i.startsWith("ref:")) {
            let o = i.slice(4).trim();
            if (o.startsWith(r)) {
                let s = o.slice(r.length);
                if (!XR(s)) {
                    return null;
                }
                return s;
            }
        }
    } catch  {}
    return null;
}
const interval = 1000;
class hr {
    gitDir = null;
    commonDir = null;
    initialized = false;
    initPromise = null;
    watchedFiles = [];
    branchRefPath = null;
    generation = 0;
    cache = new Map;
    stateChanged = Oe();
    repoBranches = new Map;
    repoWatchers = new Map;
    repoBranchListeners = [];
    async ensureStarted() {
        if (this.initialized) {
            return;
        }
        if (this.initPromise) {
            return this.initPromise;
        }
        this.initPromise = this.start();
        return this.initPromise;
    }
    cleanupHandle = null;
    async start() {
        let generation = this.generation;
        if (Mt()) {
            this.gitDir = null;
            this.initialized = true;
            return;
        }
        let n = await gC();
        if (generation !== this.generation) {
            return;
        }
        this.gitDir = n;
        this.initialized = true;
        if (!this.cleanupHandle) {
            this.cleanupHandle = St(async ()=>{
                this.stopWatching();
            });
        }
        if (!this.gitDir) {
            return;
        }
        let r = await hq(this.gitDir);
        if (generation !== this.generation) {
            return;
        }
        this.commonDir = r;
        this.watchPath(join(this.gitDir, "HEAD"), this.gitDir, ()=>{
            this.onHeadChanged();
        });
        this.watchPath(join(this.commonDir ?? this.gitDir, "config"), this.commonDir ?? this.gitDir, ()=>{
            this.invalidate();
        });
        this.watchPath(join(this.commonDir ?? this.gitDir, "refs", "remotes", "origin", "HEAD"), this.commonDir ?? this.gitDir, ()=>{
            this.invalidate();
        });
        await this.watchCurrentBranchRef();
    }
    watchPath(e, n, r) {
        if (H1(e, n)) {
            return;
        }
        let i = WHt(e, {
            interval
        }, r);
        this.watchedFiles.push({
            path: e,
            listener: i
        });
    }
    async watchCurrentBranchRef() {
        if (!this.gitDir) {
            return;
        }
        let generation = this.generation;
        let n = await hZ(this.gitDir);
        if (generation !== this.generation) {
            return;
        }
        let r = this.commonDir ?? this.gitDir;
        let i = n?.type === "branch" ? join(r, "refs", "heads", n.name) : null;
        if (i === this.branchRefPath) {
            return;
        }
        if (this.branchRefPath) {
            for (let { path, listener } of this.watchedFiles){
                if (path === this.branchRefPath) {
                    unwatchFile(path, listener);
                }
            }
            this.watchedFiles = this.watchedFiles.filter((o)=>o.path !== this.branchRefPath);
        }
        this.branchRefPath = i;
        if (!i) {
            return;
        }
        this.watchPath(i, r, ()=>{
            this.invalidate();
        });
    }
    async onHeadChanged() {
        this.invalidate();
        await Zon();
        await this.watchCurrentBranchRef();
    }
    invalidate() {
        for (let e of this.cache.values()){
            e.dirty = true;
        }
        this.stateChanged.emit();
    }
    onStateChange(e) {
        return this.stateChanged.subscribe(e);
    }
    stopWatching() {
        for (let { path, listener } of this.watchedFiles){
            unwatchFile(path, listener);
        }
        for (let { headPath, listener } of this.repoWatchers.values()){
            unwatchFile(headPath, listener);
        }
        this.watchedFiles = [];
        this.branchRefPath = null;
    }
    async get(e, n) {
        while(true){
            let r = this.generation;
            await this.ensureStarted();
            let i = this.cache.get(e);
            if (i && !i.dirty) {
                return i.value;
            }
            if (i) {
                i.dirty = false;
            }
            let o = await n();
            if (r !== this.generation) {
                continue;
            }
            let s = this.cache.get(e);
            if (s && !s.dirty) {
                s.value = o;
            }
            if (!s) {
                this.cache.set(e, {
                    value: o,
                    dirty: false
                });
            }
            return o;
        }
    }
    async getDefaultBranchIfKnownAnchored() {
        let e = await this.get("defaultBranchIfKnown", this.computeDefaultBranchIfKnownAnchored);
        if (e === null) {
            return e;
        }
        let n = this.commonDir ?? this.gitDir;
        if (n && await GY(n, `refs/remotes/origin/${e}`)) {
            return e;
        }
        let r = this.cache.get("defaultBranchIfKnown");
        if (r) {
            r.dirty = true;
        }
        return this.get("defaultBranchIfKnown", this.computeDefaultBranchIfKnownAnchored);
    }
    computeDefaultBranchIfKnownAnchored = async ()=>{
        let gitDir = this.gitDir;
        if (!gitDir) {
            return null;
        }
        let n = this.commonDir ?? gitDir;
        let r = await mr(n, "refs/remotes/origin/HEAD", "refs/remotes/origin/");
        if (r && await GY(n, `refs/remotes/origin/${r}`)) {
            return r;
        }
        return null;
    };
    async addRepo(e) {
        if (this.repoWatchers.has(e)) {
            return;
        }
        let n = await gC(e);
        if (!n) {
            return;
        }
        if (this.repoWatchers.has(e)) {
            return;
        }
        let headPath = join(n, "HEAD");
        if (H1(headPath, n)) {
            return;
        }
        let i = WHt(headPath, {
            interval
        }, ()=>{
            this.repoBranches.delete(e);
            for (let o of this.repoBranchListeners){
                o();
            }
        });
        this.repoWatchers.set(e, {
            gitDir: n,
            headPath,
            listener: i
        });
    }
    removeRepo(e) {
        let n = this.repoWatchers.get(e);
        if (!n) {
            return;
        }
        unwatchFile(n.headPath, n.listener);
        this.repoWatchers.delete(e);
        this.repoBranches.delete(e);
    }
    onRepoBranchChange(e) {
        this.repoBranchListeners.push(e);
        return ()=>{
            let n = this.repoBranchListeners.indexOf(e);
            if (n !== -1) {
                this.repoBranchListeners.splice(n, 1);
            }
        };
    }
    async getBranchForRepo(e) {
        if (this.repoBranches.has(e)) {
            return this.repoBranches.get(e);
        }
        let n = this.repoWatchers.get(e)?.gitDir;
        if (!n) {
            return;
        }
        let r = await hZ(n);
        let i = r?.type === "branch" ? r.name : null;
        this.repoBranches.set(e, i);
        return i;
    }
    reset() {
        this.generation++;
        this.stopWatching();
        this.cleanupHandle?.();
        this.cleanupHandle = null;
        this.cache.clear();
        this.stateChanged.clear();
        this.repoBranches.clear();
        this.repoWatchers.clear();
        this.repoBranchListeners = [];
        this.initialized = false;
        this.initPromise = null;
        this.gitDir = null;
        this.commonDir = null;
    }
    reanchor() {
        this.generation++;
        for (let { path, listener } of this.watchedFiles){
            unwatchFile(path, listener);
        }
        this.watchedFiles = [];
        this.branchRefPath = null;
        this.cache.clear();
        this.initialized = false;
        this.initPromise = null;
        this.gitDir = null;
        this.commonDir = null;
    }
}
var Gs = new q(()=>new hr);
function re() {
    return Gs.of(B().host);
}
async function Ws() {
    let e = await gC();
    if (!e) {
        return "HEAD";
    }
    let n = await hZ(e);
    if (!n) {
        return "HEAD";
    }
    if (n.type === "branch") {
        return n.name;
    }
    return "HEAD";
}
async function Us() {
    let e = await gC();
    if (!e) {
        return "";
    }
    let n = await hZ(e);
    if (!n) {
        return "";
    }
    if (n.type === "branch") {
        return await GY(e, `refs/heads/${n.name}`) ?? "";
    }
    return n.sha;
}
async function Ve(e) {
    if (H1(join(e, "config"), e)) {
        return null;
    }
    return await krn(e, "remote", "origin", "pushurl") || await krn(e, "remote", "origin", "url");
}
async function Ys() {
    let e = await gC();
    if (!e) {
        return null;
    }
    let n = await Ve(e);
    if (n) {
        return n;
    }
    let r = await hq(e);
    if (r && r !== e) {
        return Ve(r);
    }
    return null;
}
var VTo = [
    "main",
    "master"
];
async function zs() {
    let e = await gC();
    if (!e) {
        return "main";
    }
    let n = await hq(e) ?? e;
    let r = await mr(n, "refs/remotes/origin/HEAD", "refs/remotes/origin/");
    if (r && await GY(n, `refs/remotes/origin/${r}`)) {
        return r;
    }
    for (let i of VTo){
        if (await GY(n, `refs/remotes/origin/${i}`)) {
            return i;
        }
    }
    return "main";
}
function ZPs() {
    return re().get("branch", Ws);
}
function eGn() {
    return re().get("head", Us);
}
function qTo() {
    return re().get("remoteUrl", Ys);
}
function eIs() {
    return re().get("defaultBranch", zs);
}
function tIs() {
    return re().getDefaultBranchIfKnownAnchored();
}
function KTo(e) {
    return re().addRepo(e);
}
function q2s(e) {
    re().removeRepo(e);
}
function YTo(e) {
    return re().onRepoBranchChange(e);
}
function XTo(e) {
    let n = re();
    n.ensureStarted();
    return n.onStateChange(e);
}
function JTo(e) {
    return re().getBranchForRepo(e);
}
function QTo() {
    re().reset();
}
function yZ() {
    re().reanchor();
}
async function xCr(e) {
    let n = await gC(e);
    if (!n) {
        return null;
    }
    let r = await hZ(n);
    if (!r) {
        return null;
    }
    if (r.type === "branch") {
        return GY(n, `refs/heads/${r.name}`);
    }
    return r.sha;
}
const Xe = new Map;
const Vs = 4096;
const Xs = /^commit(?: \((?:amend|initial|merge|cherry-pick|rebase)\))?: /;
async function Js(e) {
    if (H1(join(e, "logs", "HEAD"), e)) {
        return null;
    }
    try {
        let n = await lstat(join(e, "logs", "HEAD"));
        if (n.isFile()) {
            return n.size;
        }
        return null;
    } catch (error) {
        let r = v(error);
        if (r === "ENOENT" || r === "ENOTDIR") {
            return 0;
        }
        return null;
    }
}
async function ZTo(e) {
    if (Mt()) {
        return;
    }
    let n;
    try {
        let r = await gC(e);
        if (r === null) {
            return;
        }
        if (RCr(r, e)) {
            return;
        }
        let realGitDir = realpathSync(r);
        let o = Xe.get(realGitDir) ?? new Set;
        n = {
            gitDir: r,
            realGitDir,
            size: 0,
            overlapped: o.size > 0
        };
        for (let u of o){
            u.overlapped = true;
        }
        Xe.set(realGitDir, o.add(n));
        let s = await Js(r);
        if (s === null) {
            tGn(n);
            return;
        }
        n.size = s;
        return n;
    } catch  {
        if (n !== undefined) {
            tGn(n);
        }
        return;
    }
}
function tGn(e) {
    for (let [n, r] of Xe){
        if (r.delete(e)) {
            if (r.size === 0) {
                Xe.delete(n);
            }
            return;
        }
    }
}
async function eAo(e) {
    let n = join(e.gitDir, "logs", "HEAD");
    if (e.overlapped || H1(n, e.gitDir)) {
        return;
    }
    let r = await OP(n, Vs, {
        noFollow: true,
        fromTail: true,
        requireNlink1: true,
        verifyHandlePath: (S)=>S === join(e.realGitDir, "logs", "HEAD")
    });
    if (r === null || r === "unreadable" || r.end <= e.size || !r.content.endsWith(`
`)) {
        return;
    }
    let i = r.content.slice(0, -1);
    let o = i.slice(i.lastIndexOf(`
`) + 1);
    if (o.includes("\uFFFD") || r.end - Buffer.byteLength(o) - 1 !== e.size) {
        return;
    }
    let s = o.indexOf("\t");
    if (s === -1) {
        return;
    }
    let [u = "", d = ""] = o.slice(0, s).split(" ");
    if (!e9(u) || !e9(d) || u === d || !Xs.test(o.slice(s + 1))) {
        return;
    }
    let p = await hZ(e.gitDir);
    if ((p?.type === "branch" ? await GY(e.gitDir, `refs/heads/${p.name}`) : p?.sha) !== d || e.overlapped) {
        return;
    }
    return {
        commitId: d,
        ...p?.type === "branch" && {
            branch: p.name
        }
    };
}
async function tAo(e, n) {
    if (Ce()) {
        return {
            repo: true,
            sha: null
        };
    }
    let r = resolve(e);
    let i = ur(r);
    let o = On(resolve(n));
    if (i === null || !ih(o, i, {
        alreadyComparable: true
    })) {
        if (await ar(r, o)) {
            return {
                repo: false
            };
        }
        return {
            repo: true,
            sha: null
        };
    }
    let [s, u] = await Promise.all([
        lr(o),
        lr(i)
    ]);
    if (s === null || u === null || !ih(s, u, {
        alreadyComparable: true
    })) {
        return {
            repo: true,
            sha: null
        };
    }
    let d = await gC(r);
    if (d !== null && await yr(join(d, "HEAD"))) {
        if (await ar(r, o, i)) {
            return {
                repo: false
            };
        }
        return {
            repo: true,
            sha: null
        };
    }
    return {
        repo: true,
        sha: await xCr(r)
    };
}
async function ar(e, n, r) {
    let i = e;
    while(true){
        let o = On(i);
        if (o !== r && !await yr(join(i, ".git"))) {
            return false;
        }
        let s = dirname(i);
        if (o === n || s === i) {
            return true;
        }
        i = s;
    }
}
async function yr(e) {
    try {
        await lstat(e);
        return false;
    } catch (error) {
        let r = v(error);
        return r === "ENOENT" || r === "ENOTDIR";
    }
}
async function lr(e) {
    try {
        return On(await realpath(e));
    } catch  {
        return null;
    }
}
async function PCr(e) {
    let n;
    try {
        if (VF(join(e, ".git"), e)) {
            return null;
        }
        let i = (await readFile(join(e, ".git"), "utf-8")).trim();
        if (!i.startsWith("gitdir:")) {
            return null;
        }
        let o = i.slice(7).trim();
        if (Gi(o, e)) {
            return null;
        }
        if (he(o, e)) {
            return null;
        }
        n = resolve(e, o);
    } catch  {
        return null;
    }
    let r = await hZ(n);
    if (!r) {
        return null;
    }
    if (r.type === "branch") {
        return GY(n, `refs/heads/${r.name}`);
    }
    return r.sha;
}
async function VSe(e) {
    let n = await gC(e);
    if (!n) {
        return null;
    }
    return ICr(n);
}
async function ICr(e, n) {
    let r = await Ve(e);
    if (r) {
        return r;
    }
    let i = n ?? await hq(e);
    if (i && i !== e) {
        return Ve(i);
    }
    return null;
}
function K2s(e) {
    let n = Zs(e);
    if (!n) {
        return null;
    }
    let r = cr(n);
    if (r) {
        return r;
    }
    let i = qs(n);
    if (i && i !== n) {
        return cr(i);
    }
    return null;
}
function Zs(e) {
    let n = resolve(e);
    let r = Pp().gitDirByCwd.get(n);
    if (r !== undefined) {
        return r;
    }
    let i = ur(n);
    if (!i) {
        return null;
    }
    let o = join(i, ".git");
    try {
        if (!statSync(o).isFile()) {
            return o;
        }
        let s = L5e(o, D5e)?.trim();
        if (s === undefined || !s.startsWith("gitdir:")) {
            if (s === undefined) {
                return null;
            }
            return o;
        }
        let u = s.slice(7).trim();
        if (Gi(u, i) || he(u, i)) {
            return null;
        }
        return resolve(i, u);
    } catch  {
        return null;
    }
}
function qs(e) {
    try {
        if (VF(join(e, "commondir"), e)) {
            return null;
        }
        let n = L5e(join(e, "commondir"), D5e)?.trim();
        if (n === undefined || Gi(n, e) || he(n, e)) {
            return null;
        }
        return resolve(e, n);
    } catch  {
        return null;
    }
}
const GHt = 1000000;
function cr(e) {
    let n = join(e, "config");
    if (H1(n, e)) {
        return null;
    }
    let r = L5e(n, GHt);
    if (r === undefined || Sse(r)) {
        return null;
    }
    return P5e(r, "remote", "origin", "pushurl") || P5e(r, "remote", "origin", "url");
}
function L5e(e, n) {
    let r;
    try {
        r = openSync(e, constants.O_RDONLY | FUe);
        let i = fstatSync(r);
        if (!i.isFile() || i.size > n) {
            return;
        }
        let o = Buffer.allocUnsafe(n + 1);
        let s = 0;
        while(s < o.length){
            let u = readSync(r, o, s, o.length - s, s);
            if (u === 0) {
                break;
            }
            s += u;
        }
        if (s > n) {
            return undefined;
        }
        return o.toString("utf-8", 0, s);
    } catch  {
        return;
    } finally{
        if (r !== undefined) {
            closeSync(r);
        }
    }
}
async function nIs() {
    try {
        let e = await gC();
        if (!e) {
            return 0;
        }
        let n = await hq(e) ?? e;
        if (H1(join(n, "worktrees"), n)) {
            return 1;
        }
        return (await readdir(join(n, "worktrees"))).length + 1;
    } catch  {
        return 1;
    }
}
export { Hut, Kzn, OPs, SCr, CO, MPs, bse, xTo, Yzn, HPs, Mg, NHt, Xzn, DPs, LPs, PTo, ITo, wCr, NPs, OTo, Z8, LUe, Pp, NUe, _rn, brn, Srn, wrn, MTo, vrn, Ern, HTo, $Ps, Sse, krn, P5e, DTo, FPs, UPs, BPs, mZ, vCr, ECr, TH, I5e, $Ht, jPs, WPs, Trn, gZ, FHt, zPs, GPs, LTo, VPs, qPs, KPs, YPs, kCr, Yxe, hpe, NTo, Jzn, $To, Xxe, XPs, MR, Qs, O5e, TCr, FTo, zSe, UTo, KE, Arn, Crn, UHt, BHt, zY, ACr, Rrn, ype, jHt, M5e, Fb, _pe, xrn, eA, GSe, nh, kS, gq, S0, BTo, wse, jTo, JPs, CCr, QPs, WTo, zTo, GTo, OP, H5e, WHt, Prn, gC, Irn, zHt, VF, H1, Qzn, v_, Zzn, RCr, e9, hZ, GY, D5e, hq, VTo, ZPs, eGn, qTo, eIs, tIs, KTo, q2s, YTo, XTo, JTo, QTo, yZ, xCr, ZTo, tGn, eAo, tAo, PCr, VSe, ICr, K2s, GHt, L5e, nIs, ur, cy, OCr, J_, Orn, Dut, $s, w0, nAo, MCr, zz, rAo, oAo, VHt, sAo, Ot, RO, qHt, HCr, VY, iAo, KHt, Od, Mrn, HR, DCr, nGn, Hrn, Drn, Jxe, bpe, LCr, NCr, N5e, $Ue, t9, aAo, Lut, Y2s, MFs, X2s, lAo, $Cr, Lrn, $5e, Nrn, YHt, FCr, cAo, UCr, BCr, F5e };
