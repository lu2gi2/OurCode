import { Sw } from "/$bunfs/root/chunk-rjfz3g63.js";
import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Vn, oo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { _ie } from "/$bunfs/root/chunk-zzaag9x2.js";
import { Sje, Zmt } from "/$bunfs/root/chunk-8q10swh6.js";
import { oI } from "/$bunfs/root/chunk-5an6yk4w.js";
import { o, T, u, Ue } from "/$bunfs/root/chunk-smx21d0k.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { stat } from "fs/promises";
import { basename, dirname, normalize } from "path";
function x(r) {
    return Ue([
        r,
        T(r)
    ]).optional().transform((n)=>{
        if (n === undefined) {
            return [];
        }
        if (Array.isArray(n)) {
            return n;
        }
        return [
            n
        ];
    });
}
const g = p(()=>{
    let r = oo(_ie, (n)=>x(n.schema()));
    return u({
        $schema: o().optional(),
        ...r
    });
});
function Kqn() {
    return g().parse({});
}
async function _1e(r, n) {
    let i;
    if (j() && n !== undefined && r === oI()) {
        let e = await D(n, r);
        if (!e.ok) {
            return e.result;
        }
        i = e.raw;
    } else {
        try {
            let e = await stat(r).catch((d)=>{
                if (v(d) === "ENOENT") {
                    return null;
                }
                return Promise.reject(d);
            });
            if (e && (!e.isFile() || e.size > Sje)) {
                return {
                    ok: false,
                    error: `${r} is not a regular file (or exceeds 1MiB)`
                };
            }
            i = await mn().read(r);
        } catch (error) {
            if (v(error) === "ENOENT") {
                return {
                    ok: true,
                    config: Kqn(),
                    unknownKeys: []
                };
            }
            return {
                ok: false,
                error: `failed to read ${r}: ${l(error)}`
            };
        }
    }
    let s = mt(i, false);
    if (s === null) {
        return {
            ok: false,
            error: `failed to parse ${r} as JSON`
        };
    }
    let f = g().safeParse(s);
    if (!f.success) {
        return {
            ok: false,
            error: `config validation failed: ${f.error.message}`
        };
    }
    let a = new Set(Object.keys(g().shape));
    let unknownKeys = typeof s === "object" && s !== null ? Object.keys(s).filter((e)=>!a.has(e)) : [];
    return {
        ok: true,
        config: f.data,
        unknownKeys
    };
}
async function D(r, n) {
    let i = await Zmt(r);
    switch(i.kind){
        case "text":
            return {
                ok: true,
                raw: i.text
            };
        case "absent":
            return {
                ok: false,
                result: {
                    ok: true,
                    config: Kqn(),
                    unknownKeys: []
                }
            };
        case "refused":
            return {
                ok: false,
                result: {
                    ok: false,
                    error: `${n} is not a regular file (or exceeds 1MiB)`
                }
            };
        case "failed":
            return {
                ok: false,
                result: {
                    ok: false,
                    error: `failed to read ${n}: ${i.error.code}`
                }
            };
        case "threw":
            return {
                ok: false,
                result: {
                    ok: false,
                    error: `failed to read ${n}: ${l(i.error)}`
                }
            };
    }
}
function Yqn(r, n) {
    let i = dirname(r);
    let s = normalize(i);
    let f = basename(r);
    let a = Sw.watch(i, {
        persistent: true,
        ignoreInitial: true,
        depth: 0,
        usePolling: O() === "macos",
        interval: 100,
        ignored: (c)=>{
            let e = normalize(c);
            return e !== s && basename(e) !== f;
        },
        awaitWriteFinish: {
            stabilityThreshold: 300,
            pollInterval: 100
        },
        atomic: true,
        ignorePermissionErrors: true
    });
    a.on("add", n);
    a.on("change", n);
    a.on("unlink", n);
    a.on("error", (c)=>t(`[daemon-config] watcher error: ${l(c)}`, {
            level: "warn"
        }));
    return ()=>void a.close().catch(()=>{});
}
function _Do(r, n) {
    let i = {
        stop: [],
        start: [],
        restart: []
    };
    for (let kind of Object.keys(_ie)){
        let f = r[kind] ?? [];
        let a = n[kind] ?? [];
        let c = Math.max(f.length, a.length);
        for(let e = 0; e < c; e++){
            let id = `${kind}:${e}`;
            let previousConfig = f[e];
            let config = a[e];
            if (previousConfig !== undefined && config === undefined) {
                i.stop.push({
                    id,
                    kind,
                    previousConfig
                });
            } else if (previousConfig === undefined && config !== undefined) {
                i.start.push({
                    id,
                    kind,
                    config
                });
            } else if (!Vn(previousConfig, config)) {
                i.restart.push({
                    id,
                    kind,
                    config,
                    previousConfig
                });
            }
        }
    }
    return i;
}
export { Kqn, _1e, Yqn, _Do };
