import { B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _, X } from "/$bunfs/root/chunk-bd805sh6.js";
import { En, xH } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { Our, Mur, EM } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { Ba } from "/$bunfs/root/chunk-6g4165br.js";
import { o, E, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { createHash } from "crypto";
import { mkdir, readdir, rm, unlink } from "fs/promises";
import { join } from "path";
const l = 86400000;
const cap = 8388608;
function c(t) {
    return createHash("sha256").update(t).digest("hex").slice(0, 8);
}
function n(t) {
    return join(EM(), `.draft-${c(t)}`);
}
function f(t) {
    return _({
        ...t,
        ts: Date.now()
    });
}
async function Izt(t, r, e) {
    await O7n(t, r, e);
}
async function O7n(t, r, e) {
    if (j() && e) {
        return (await e.write($e.jobDraft(c(t)), f(r), {
            publishDiscipline: "atomic",
            mode: 438 & ~process.umask()
        }).catch(()=>{}))?.ok === true;
    }
    try {
        await mkdir(EM(), {
            recursive: true
        });
        await En(n(t), f(r));
        return true;
    } catch  {
        return false;
    }
}
function zVr(t, r) {
    try {
        xH(n(t), f(r));
    } catch  {}
}
async function GVr(t, r) {
    if (r) {
        await r.delete($e.jobDraft(c(t))).catch(()=>{});
        return;
    }
    await unlink(n(t)).catch(()=>{});
}
const g = p(()=>u({
        q: o(),
        collapsed: T(o()).optional(),
        ts: E()
    }));
async function TYo(t, r) {
    let e = r ? await k(r, t) : await Ba(n(t), cap);
    if (e === null) {
        return;
    }
    let a;
    try {
        a = g().safeParse(X(e));
    } catch  {
        return;
    }
    if (!a.success) {
        return;
    }
    let { q, collapsed, ts } = a.data;
    if (Date.now() - ts > l) {
        return;
    }
    return {
        q,
        collapsed: collapsed ?? []
    };
}
async function k(t, r) {
    return Mur(t, $e.jobDraft(c(r)), {
        cap,
        screens: P(),
        screenKey: n(r)
    });
}
function P() {
    return Our.of(B().host).drafts;
}
async function CSn() {
    return Zr("job_sweep_drafts", async ()=>{
        let t;
        try {
            t = await readdir(EM());
        } catch  {
            return;
        }
        let r = Date.now();
        await Promise.all(t.filter((e)=>e.startsWith(".draft-")).map(async (e)=>{
            let a = join(EM(), e);
            let i = await Ba(a, cap);
            if (i !== null) {
                try {
                    let s = g().safeParse(X(i));
                    if (s.success && r - s.data.ts <= l) {
                        return;
                    }
                } catch  {}
            }
            await rm(a, {
                recursive: true,
                force: true
            }).catch(()=>{});
        }));
    });
}
export { Izt, O7n, zVr, GVr, TYo, CSn };
