import { fr } from "/$bunfs/root/chunk-se8vehhp.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { MP, YUe } from "/$bunfs/root/chunk-3fj60qgx.js";
import { DW } from "/$bunfs/root/chunk-y9c4grt0.js";
import { cxn, FYt } from "/$bunfs/root/chunk-6xvcnbea.js";
import { Xp, pv } from "/$bunfs/root/chunk-4m0tjfqq.js";
import { Wi } from "/$bunfs/root/chunk-f6bzd9ck.js";
import { readdir, stat } from "fs/promises";
import { basename, join } from "path";
function S(s) {
    let e = DW(s);
    if (e !== undefined && fr(e)) {
        return e;
    }
}
async function qNr(s, e, projectPath, d, budget, ownWorktrees) {
    let projectKey = j() && d !== undefined ? S(s) : undefined;
    if (d !== undefined && projectKey !== undefined) {
        let i = new Map;
        try {
            await Wi((cursor)=>d.listEntries({
                    namespace: "transcript",
                    projectKey
                }, {
                    skipScopeStats: true,
                    ...e ? {} : {
                        skipKeyStats: true
                    },
                    ...cursor !== undefined && {
                        cursor
                    }
                }), (r)=>{
                for (let t of r){
                    if (t.kind !== "key" || t.key.namespace !== "transcript") {
                        continue;
                    }
                    let l = MP(t.key.sessionId);
                    if (!l) {
                        continue;
                    }
                    if (e && t.mtimeMs === undefined) {
                        continue;
                    }
                    let mtime = e ? Math.trunc(t.mtimeMs ?? 0) : 0;
                    let p = i.get(l);
                    if (p !== undefined) {
                        if (mtime > p.mtime) {
                            p.mtime = mtime;
                        }
                        continue;
                    }
                    i.set(l, {
                        sessionId: l,
                        filePath: join(s, `${t.key.sessionId}.jsonl`),
                        mtime,
                        projectPath,
                        ownWorktrees
                    });
                }
            }, budget !== undefined ? {
                budget
            } : undefined);
        } catch  {}
        return [
            ...i.values()
        ];
    }
    let n;
    try {
        n = await readdir(s);
    } catch  {
        return [];
    }
    return (await Promise.all(n.map(async (i)=>{
        if (!i.endsWith(".jsonl")) {
            return null;
        }
        let r = MP(i.slice(0, -6));
        if (!r) {
            return null;
        }
        let filePath = join(s, i);
        if (!e) {
            return {
                sessionId: r,
                filePath,
                mtime: 0,
                projectPath,
                ownWorktrees
            };
        }
        try {
            let l = await stat(filePath);
            return {
                sessionId: r,
                filePath,
                mtime: l.mtime.getTime(),
                projectPath,
                ownWorktrees
            };
        } catch  {
            return null;
        }
    }))).filter((i)=>i !== null);
}
const h = 32;
async function aBo(s, e, o) {
    let d = await qNr(s, false, undefined, o);
    for(let a = 0; a < d.length; a += h){
        let f = (await Promise.all(d.slice(a, a + h).map(async (n)=>{
            let c = await YUe(n.filePath, pv(Xp(n.filePath, o)));
            if (c !== null && cxn(c.tail) === e && await FYt(n.filePath, c.head, c.tail, c.size, o)) {
                return n.filePath;
            }
        }))).find((n)=>n !== undefined);
        if (f !== undefined) {
            return f;
        }
    }
}
export { qNr, aBo };
