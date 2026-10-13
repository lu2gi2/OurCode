import { we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { mi } from "/$bunfs/root/chunk-0ycjphb5.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { M4 } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { d_ } from "/$bunfs/root/chunk-y9c4grt0.js";
import { qNr } from "/$bunfs/root/chunk-fb10rkea.js";
import { _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { mkdir, readFile, stat, unlink, utimes, writeFile } from "fs/promises";
import { join } from "path";
const g = ".consolidate-lock";
const y = 3600000;
function s(e) {
    return join(e, g);
}
function c(e) {
    let n = M4(e);
    if (n === undefined) {
        return undefined;
    }
    return $e.memory(n, [
        g
    ]);
}
function b(e, mtimeMs) {
    let [a = "", r = ""] = e.split(`
`);
    let o = parseInt(a.trim(), 10);
    let i = r.trim() === "" ? NaN : Number(r.trim());
    return {
        holderPid: Number.isFinite(o) ? o : undefined,
        lastConsolidatedAt: Number.isFinite(i) ? i : mtimeMs
    };
}
function h(e, n) {
    return `${e ?? ""}
${n}`;
}
async function AJe(e = mi(), n) {
    let a = j() && n !== undefined ? c(e) : undefined;
    if (n && a) {
        let r = await n.readText([
            a
        ]);
        if (!r.ok || !r.value.items[0].found) {
            return 0;
        }
        let { value, mtimeMs } = r.value.items[0];
        return b(value, mtimeMs).lastConsolidatedAt;
    }
    try {
        return (await stat(s(e))).mtimeMs;
    } catch  {
        return 0;
    }
}
async function nBo(e) {
    return L(mi(), e);
}
async function L(e, n) {
    let a = j() && n !== undefined ? c(e) : undefined;
    if (n && a) {
        return S(n, a);
    }
    let r = s(e);
    let o;
    let i;
    try {
        let [u, w] = await Promise.all([
            stat(r),
            readFile(r, "utf8")
        ]);
        o = u.mtimeMs;
        let m = parseInt(w.trim(), 10);
        i = Number.isFinite(m) ? m : undefined;
    } catch  {}
    if (o !== undefined && Date.now() - o < y) {
        if (i !== undefined && _a(i)) {
            t(`[autoDream] lock held by live PID ${i} (mtime ${Math.round((Date.now() - o) / 1000)}s ago)`);
            return null;
        }
    }
    await mkdir(e, {
        recursive: true
    });
    await writeFile(r, String(process.pid));
    let d;
    try {
        d = await readFile(r, "utf8");
    } catch  {
        return null;
    }
    if (parseInt(d.trim(), 10) !== process.pid) {
        return null;
    }
    return o ?? 0;
}
async function $gt(e, n) {
    return C(mi(), e, n);
}
async function C(e, n, a) {
    let r = j() && a !== undefined ? c(e) : undefined;
    if (a && r) {
        return x(a, r, n);
    }
    let o = s(e);
    try {
        if (n === 0) {
            await unlink(o);
            return;
        }
        await writeFile(o, "");
        let i = n / 1000;
        await utimes(o, i, i);
    } catch (error) {
        t(`[autoDream] rollback failed: ${l(error)} \u2014 next trigger delayed to minHours`);
    }
}
async function S(e, n) {
    let a = await e.readText([
        n
    ]);
    let r = a.ok ? a.value.items[0] : undefined;
    let o = r?.found ? r.version : undefined;
    let i = r?.found ? b(r.value, r.mtimeMs) : undefined;
    if (i !== undefined && Date.now() - i.lastConsolidatedAt < y) {
        if (i.holderPid !== undefined && _a(i.holderPid)) {
            t(`[autoDream] lock held by live PID ${i.holderPid} (acquired ${Math.round((Date.now() - i.lastConsolidatedAt) / 1000)}s ago)`);
            return null;
        }
    }
    let d = await e.updateText(n, (u)=>{
        if ((u?.version ?? undefined) === o) {
            return {
                write: h(process.pid, Date.now()),
                result: true
            };
        }
        return {
            skip: true,
            result: false
        };
    }, r?.found ? {
        publishDiscipline: "inPlace"
    } : undefined);
    if (!d.ok || d.value.result !== true) {
        return null;
    }
    return i?.lastConsolidatedAt ?? 0;
}
async function x(e, n, a) {
    let r = a === 0 ? await e.delete(n) : await e.updateText(n, ()=>({
            write: h(undefined, a)
        }), {
        publishDiscipline: "inPlace"
    });
    if (!r.ok) {
        t(`[autoDream] rollback failed: ${r.error.code} \u2014 next trigger delayed to minHours`);
    }
}
async function rBo(e, n) {
    let a = d_(we());
    return (await qNr(a, true, undefined, n)).filter((o)=>o.mtime > e).map((o)=>o.sessionId);
}
export { AJe, nBo, $gt, rBo };
