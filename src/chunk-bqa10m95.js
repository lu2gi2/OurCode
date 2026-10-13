import { fr, $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { iDt, Df, zv } from "/$bunfs/root/chunk-3fj60qgx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { G1 } from "/$bunfs/root/chunk-c56kpkt7.js";
import { o9t } from "/$bunfs/root/chunk-2ya7enrh.js";
import { o, E, T, u, Ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { mkdir, readFile, stat, unlink } from "fs/promises";
import { dirname, join } from "path";
const h = 50;
const OHs = 14400000;
const b = 604800000;
function k(e, r, n) {
    return o9t() && Boolean(e?.length) && r !== undefined && DHs(r, n, b);
}
function MHs(e, r) {
    if (k(e.projectThreadSessionIds, e.projectThreadSessionIdsPersistedAt, r)) {
        return e.projectThreadSessionIds;
    }
}
function HHs(e, r) {
    if (k(e.parkedProjectThreadSessionIds, e.parkedProjectThreadSessionIdsPersistedAt, r)) {
        return e.parkedProjectThreadSessionIds ?? [];
    }
    return [];
}
function R(data, r, n) {
    if (r?.projectThreadResume && (MHs(data, n) !== undefined || HHs(data, n).length > 0)) {
        return b;
    }
    return OHs;
}
const DBs = 900000;
const v = 120000;
function DHs(e, r, n) {
    return r - e <= n && e - r <= v;
}
const kgt = 64;
const f = p(()=>o().max(256).refine(G1));
const O = p(()=>u({
        sessionId: Ue([
            A(""),
            f()
        ]),
        environmentId: f(),
        source: U([
            "standalone",
            "repl"
        ]),
        pid: E().optional(),
        procStart: o().optional(),
        activeSessionIds: T(f()).max(kgt).optional(),
        activeSessionIdsPersistedAt: E().int().min(0).max(8640000000000000).optional(),
        projectThreadSessionIds: T(f()).max(kgt).optional(),
        parkedProjectThreadSessionIds: T(f()).max(kgt).optional(),
        parkedProjectThreadSessionIdsPersistedAt: E().int().min(0).max(8640000000000000).optional(),
        projectThreadSessionIdsPersistedAt: E().int().min(0).max(8640000000000000).optional()
    }));
function P(e) {
    return join(Df(), zv(e), "bridge-pointer.json");
}
function S(e) {
    let r = zv(e);
    if (fr(r)) {
        return $e.bridgePointer(r);
    }
    return null;
}
async function LBs(e, r, n) {
    let s = P(e);
    let i = j() && n !== undefined ? S(e) : null;
    if (j() && n !== undefined && i) {
        let d = await n.write(i, _(r), {
            mode: 438 & ~process.umask()
        });
        if (!d.ok) {
            t(`[bridge:pointer] write failed: ${gt(d.error)}`, {
                level: "warn"
            });
            return false;
        }
        t(`[bridge:pointer] wrote ${s}`);
        return true;
    }
    try {
        await mkdir(dirname(s), {
            recursive: true
        });
        await En(s, _(r));
        t(`[bridge:pointer] wrote ${s}`);
        return true;
    } catch (error) {
        t(`[bridge:pointer] write failed: ${error}`, {
            level: "warn"
        });
        return false;
    }
}
function NBs() {
    let e = Promise.resolve();
    return (r)=>{
        e = e.then(r, r);
        return e;
    };
}
async function GFo(e, r, n) {
    let s = P(e);
    let i;
    let d;
    let g = n ? S(e) : null;
    if (n && g) {
        let l = await n.read([
            g
        ]);
        if (!l.ok || !l.value.items[0].found) {
            return null;
        }
        d = l.value.items[0].mtimeMs;
        i = Buffer.from(l.value.items[0].value).toString("utf8");
    } else {
        try {
            d = (await stat(s)).mtimeMs;
            i = await readFile(s, "utf8");
        } catch  {
            return null;
        }
    }
    let m = O().safeParse(D(i));
    if (!m.success) {
        if (!r?.noClear) {
            t(`[bridge:pointer] invalid schema, clearing: ${s}`);
            await VFo(e, n);
        }
        return null;
    }
    let c = Date.now();
    let ageMs = Math.max(0, c - d);
    if (!r?.ignoreTtl && ageMs > R(m.data, r, c)) {
        if (!r?.noClear) {
            t(`[bridge:pointer] stale mtime, clearing: ${s}`);
            await VFo(e, n);
        }
        return null;
    }
    return {
        ...m.data,
        ageMs
    };
}
async function $Bs(e, r, n) {
    let s = await GFo(e, n, r);
    if (s) {
        return {
            pointer: s,
            dir: e
        };
    }
    let i = await iDt(e);
    if (i.length <= 1) {
        return null;
    }
    if (i.length > h) {
        t(`[bridge:pointer] ${i.length} worktrees exceeds fanout cap ${h}, skipping`);
        return null;
    }
    let d = zv(e);
    let g = i.filter((a)=>zv(a) !== d);
    let m = await Promise.all(g.map(async (a)=>{
        let l = await GFo(a, undefined, r);
        if (l) {
            return {
                pointer: l,
                dir: a
            };
        }
        return null;
    }));
    let c = null;
    for (let a of m){
        if (a && (!c || a.pointer.ageMs < c.pointer.ageMs)) {
            c = a;
        }
    }
    if (c) {
        t(`[bridge:pointer] fanout found pointer in worktree ${c.dir} (ageMs=${c.pointer.ageMs})`);
    }
    return c;
}
async function VFo(e, r) {
    let n = P(e);
    let s = r ? S(e) : null;
    if (r && s) {
        let i = await r.delete(s);
        if (i.ok || i.error.code === "NotFound") {
            t(`[bridge:pointer] cleared ${n}`);
        } else {
            t(`[bridge:pointer] clear failed: ${gt(i.error)}`, {
                level: "warn"
            });
        }
        return;
    }
    try {
        await unlink(n);
        t(`[bridge:pointer] cleared ${n}`);
    } catch (error) {
        if (!z(error)) {
            t(`[bridge:pointer] clear failed: ${error}`, {
                level: "warn"
            });
        }
    }
}
function D(e) {
    try {
        return X(e);
    } catch  {
        return null;
    }
}
export { OHs, MHs, HHs, DBs, DHs, kgt, LBs, NBs, GFo, $Bs, VFo };
