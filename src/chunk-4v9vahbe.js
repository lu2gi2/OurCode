import { ar } from "/$bunfs/root/chunk-c56kpkt7.js";
import { lH, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { o, E, T, u, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { createHash } from "crypto";
const f = 64;
const c = p(()=>u({
        generation: E().int().min(1),
        etag: o().optional(),
        allow: T(o()),
        at: E(),
        tried: A(true).optional()
    }));
function dVr(n) {
    return createHash("sha256").update(n, "utf8").digest("hex").slice(0, 32);
}
function m(n) {
    return ar(n);
}
function Szt(n) {
    let e = ce().remoteHomeSettingsSent?.[m(n)];
    if (e === undefined) {
        return;
    }
    let r = c().safeParse(e);
    if (r.success) {
        return r.data;
    }
}
function oYo(n) {
    let e = Szt(n);
    return e !== undefined && e.tried !== true;
}
async function E7n(n, e, r) {
    let s = m(n);
    if (!await lH((d)=>({
            ...d,
            remoteHomeSettingsSent: w({
                ...d.remoteHomeSettingsSent,
                [s]: S(d.remoteHomeSettingsSent?.[s], e)
            })
        }), r)) {
        i("tengu_home_seed_record_unwritten", {});
        t("home settings: the record of what was sent could not be written", {
            level: "warn"
        });
    }
}
function S(n, e) {
    let data = c().safeParse(n).data;
    let { tried, ...rest } = e;
    let d = !e.etag && (data ? data.tried : e.tried);
    return {
        ...rest,
        ...d && {
            tried: true
        },
        generation: Math.max(e.generation, data?.generation ?? 0),
        allow: e.allow.filter((g)=>e.etag || !data || data.allow.includes(g))
    };
}
function w(n) {
    let e = Object.entries(n).flatMap(([r, s])=>{
        let a = c().safeParse(s);
        if (a.success && Number.isFinite(a.data.at)) {
            return [
                [
                    r,
                    a.data
                ]
            ];
        }
        return [];
    });
    return Object.fromEntries(e.toSorted(([, r], [, s])=>s.at - r.at).slice(0, f));
}
export { dVr, Szt, oYo, E7n };
