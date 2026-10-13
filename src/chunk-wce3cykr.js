import { oa } from "/$bunfs/root/chunk-223dyewd.js";
import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { X2n, J2n } from "/$bunfs/root/chunk-xgw72tt1.js";
import { Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { qns } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { ul } from "/$bunfs/root/chunk-fnj5y75n.js";
import { UW } from "/$bunfs/root/chunk-80q4zjq4.js";
import { ai } from "/$bunfs/root/chunk-zwxj12s4.js";
import { MW } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { Y9t } from "/$bunfs/root/chunk-38fr02qr.js";
import { Ghn } from "/$bunfs/root/chunk-xfhaw2ha.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { constants } from "fs";
import { link, lstat, mkdir, open, readlink, realpath, stat, unlink } from "fs/promises";
import { posix } from "path";
import { pipeline } from "stream/promises";
const { basename, dirname, join, relative, sep } = posix;
const U = new Set([
    "claude.md",
    "claude.local.md",
    "agent.md"
]);
const G = new Set([
    "head",
    "commondir",
    "node_modules",
    "site-packages",
    "dist-packages",
    "__pycache__"
]);
const X = new Set([
    "config",
    "config.worktree"
]);
const W = new Set([
    "sitecustomize",
    "usercustomize"
]);
const Y = /^-|\s-\S|[^\P{ASCII}\w .()+,=@#%[\]-]/u;
const B = /[\p{Cc}\p{Zl}\p{Zp}]|(?![\u200c\u200d])\p{Cf}|(?:^|\p{ASCII})[\u200c\u200d]/u;
const Ypn = 255;
function z(e, t) {
    let n = ul(e);
    if (n.startsWith(".")) {
        return "dot_name";
    }
    if (U.has(n) || Ghn.has(n)) {
        return "instruction_file";
    }
    if (G.has(n) || W.has(Qe(n, ".")) || t && (UW.has(n) || X.has(n))) {
        return "unsafe_name";
    }
    if (J2n(e) || X2n.test(e) || Y.test(e) || B.test(e)) {
        return "odd_spelling";
    }
}
function Hve(e) {
    let t = e.split(sep);
    for (let [n, r] of t.entries()){
        let i = z(r, n === t.length - 1);
        if (i !== undefined) {
            return i;
        }
    }
}
async function N(e) {
    try {
        return await realpath(e);
    } catch (error) {
        if (v(error) !== "ENOENT" || dirname(e) === e) {
            throw error;
        }
        return join(await N(dirname(e)), basename(e));
    }
}
function _(e, t, n) {
    if (!Y9t(e, t)) {
        return "outside_home";
    }
    let r = join(t, basename(n));
    return Hve(relative(e, r)) ?? (MW(n, [
        n,
        r
    ]).safe ? undefined : "write_would_ask");
}
const J = new Set([
    "EEXIST",
    "ENOTDIR",
    "ENOENT"
]);
async function I(e) {
    try {
        return {
            outcome: (await lstat(e)).isFile() ? "already_present" : "path_occupied"
        };
    } catch (error) {
        if (v(error) === "ENOENT") {
            return;
        }
        throw error;
    }
}
async function Dve(e, t) {
    let n = join(e, t);
    let r = await realpath(e);
    try {
        let i = Hve(t) ?? _(r, await N(dirname(n)), n);
        if (i === undefined) {
            return await I(n);
        }
        return {
            outcome: "refused_name",
            refusal: i
        };
    } catch (error) {
        if (v(error) === "ENOTDIR") {
            return {
                outcome: "path_occupied"
            };
        }
        throw error;
    }
}
async function Z(e, t, n, r) {
    try {
        await link(e, n);
    } catch (error) {
        if (v(error) === "EEXIST") {
            return;
        }
        if (!qns(error) && v(error) !== "EXDEV") {
            throw error;
        }
        return await j(t, n, r);
    }
    let [i, o] = await Promise.all([
        t.stat(),
        lstat(n)
    ]);
    if (E(o, i)) {
        return i;
    }
    let a = await S(lstat(e));
    if (E(a, i)) {
        return;
    }
    for (let s of [
        a,
        await S(stat(e))
    ]){
        if (s !== undefined && await xJe(n, s)) {
            break;
        }
    }
    let f = Error("the source of a home file was exchanged while it was published");
    f.code = "HOME_SOURCE_EXCHANGED";
    throw f;
}
function E(e, t) {
    return e?.ino === t.ino && e.dev === t.dev;
}
async function S(e) {
    try {
        return await e;
    } catch (error) {
        if (v(error) === "ENOENT") {
            return;
        }
        throw error;
    }
}
async function xJe(e, t) {
    try {
        if (!E(await S(lstat(e)), t)) {
            return false;
        }
        await unlink(e);
        return true;
    } catch (error) {
        if (v(error) !== "ENOENT") {
            c(error);
        }
        return false;
    }
}
async function j(e, t, n) {
    let r;
    try {
        r = await open(t, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | ai, n);
    } catch (error) {
        if (v(error) === "EEXIST") {
            return;
        }
        throw error;
    }
    let i;
    try {
        i = await r.stat();
        await r.chmod(n);
        await pipeline(e.createReadStream({
            start: 0,
            autoClose: false
        }), r.createWriteStream());
        if (E(await lstat(t), i)) {
            return i;
        }
        return undefined;
    } catch (error) {
        await r.close().catch(()=>{});
        await (i === undefined ? unlink(t).catch(()=>{}) : xJe(t, i));
        throw error;
    }
}
async function K(e, t) {
    if (O() !== "linux") {
        return t(e, ()=>realpath(e));
    }
    let n = await open(e, constants.O_RDONLY | constants.O_DIRECTORY | ai);
    try {
        let r = `/proc/self/fd/${n.fd}`;
        return await t(r, ()=>readlink(r));
    } finally{
        await n.close();
    }
}
const P = 420;
async function PJe(e, t, n) {
    let r = join(t, n);
    let i = await realpath(t);
    let madeDirectory;
    try {
        let a = Hve(n) ?? _(i, await N(dirname(r)), r);
        if (a !== undefined) {
            return {
                outcome: "refused_name",
                refusal: a
            };
        }
        madeDirectory = await mkdir(dirname(r), {
            recursive: true
        });
    } catch (error) {
        if (J.has(v(error))) {
            return {
                outcome: "path_occupied"
            };
        }
        throw error;
    }
    return await K(dirname(r), async (a, f)=>{
        let s = _(i, await f(), r);
        if (s !== undefined) {
            return {
                outcome: "refused_name",
                refusal: s
            };
        }
        let p = await open(e, oa | ai);
        try {
            if (!(await p.stat()).isFile()) {
                let F = Error("the source of a home file is not a regular file");
                F.code = "HOME_SOURCE_NOT_REGULAR";
                throw F;
            }
            await p.chmod(P);
            let h = join(a, basename(r));
            let y = await Z(e, p, h, P);
            if (y === undefined) {
                return await I(h) ?? {
                    outcome: "path_occupied"
                };
            }
            let T = _(i, await f(), r);
            if (T !== undefined) {
                await xJe(h, y);
                return {
                    outcome: "refused_name",
                    refusal: T
                };
            }
            return {
                outcome: "placed",
                ...madeDirectory !== undefined && {
                    madeDirectory
                }
            };
        } finally{
            await p.close();
        }
    });
}
export { Ypn, Hve, Dve, xJe, PJe };
