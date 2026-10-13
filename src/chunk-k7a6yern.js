import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Td } from "/$bunfs/root/chunk-4521ay78.js";
import { HAe, sLe, DAe, bb } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { fn, vn, NT } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { gNe } from "/$bunfs/root/chunk-9fvky64k.js";
import { aet, Nte, j8o, zKt, _De, Ay, Dl, cv, QZo, qtt, Ys } from "/$bunfs/root/chunk-kasbfbhj.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
async function LGo(a, r) {
    if (a.some((n)=>n.endsWith(`@${fn}`))) {
        return QZo(r);
    }
    return "not_needed";
}
const M = [
    "user",
    "project",
    "local"
];
async function Xee(a, storageV5) {
    let n = new Map;
    for (let e of a){
        if (e.type !== "dependency-unsatisfied" || e.reason !== "not-found") {
            continue;
        }
        let c = n.get(e.dependency);
        if (!c) {
            c = new Set;
            n.set(e.dependency, c);
        }
        c.add(e.source);
    }
    if (n.size === 0) {
        return {
            installed: [],
            stillUnresolved: [],
            marketplaceMissing: []
        };
    }
    let i = await Dl(storageV5);
    let f = M.map((e)=>[
            e,
            aet(NT(e))
        ]);
    let installed = [];
    let stillUnresolved = [];
    let marketplaceMissing = [];
    for (let [e, c] of n){
        let u = vn(e).marketplace;
        let k = u ? Ay(i, u) : undefined;
        if (!u || !k) {
            stillUnresolved.push(e);
            marketplaceMissing.push(e);
            continue;
        }
        if (!Td(k.source)) {
            t(`resolveMissingDependencies: skipping "${e}" \u2014 marketplace "${u}" is blocked by enterprise policy`);
            stillUnresolved.push(e);
            continue;
        }
        let y = false;
        for (let o of c){
            let d = vn(o).marketplace;
            if (d === u) {
                y = true;
                break;
            }
            if (!d) {
                continue;
            }
            if ((await cv(d, storageV5))?.allowCrossMarketplaceDependenciesOn?.includes(u)) {
                y = true;
                break;
            }
        }
        if (!y) {
            t(`resolveMissingDependencies: skipping "${e}" \u2014 cross-marketplace dependency not in any declaring marketplace's allowlist`);
            stillUnresolved.push(e);
            continue;
        }
        try {
            let o = await qtt(e, storageV5, "install");
            if (!o) {
                stillUnresolved.push(e);
                continue;
            }
            let d = o.entry.source;
            if (typeof d === "object" && d.source === "archive" && HAe(sLe({
                entry: o.entry,
                archiveUrl: d.url,
                marketplaceSource: DAe(e, i),
                trustedSettingsEntryAuth: _De(bb(e), o.entry.name)
            }).entry)) {
                t(`resolveMissingDependencies: skipping "${e}" \u2014 it fetches its archive through an entry headersHelper, which only an explicit install from /plugin may run`);
                stillUnresolved.push(e);
                continue;
            }
            let m = v(c, f);
            let h = await zKt({
                pluginId: e,
                entry: o.entry,
                scope: m ?? "user",
                marketplaceInstallLocation: o.marketplaceInstallLocation,
                trigger: "dependency-resolution",
                explicit: false,
                auto: m !== undefined,
                requiredByEnabledDependent: true,
                storageV5
            });
            if (h.ok) {
                for (let S of h.closure){
                    if (!installed.includes(S)) {
                        installed.push(S);
                    }
                }
            } else {
                t(`resolveMissingDependencies: install of "${e}" did not complete (${h.reason})`, {
                    level: "warn"
                });
                stillUnresolved.push(e);
            }
        } catch (error) {
            t(`resolveMissingDependencies: install of "${e}" threw: ${l(error)}`, {
                level: "warn"
            });
            stillUnresolved.push(e);
        }
    }
    return {
        installed,
        stillUnresolved,
        marketplaceMissing
    };
}
async function vjr(a, r) {
    let { errors } = await Ys(r);
    return errors.filter(gNe).filter((i)=>i.source === a);
}
async function yyt(a, r) {
    let n = await vjr(a, r);
    if (n.length === 0) {
        return null;
    }
    let { installed, marketplaceMissing } = await Xee(n, r);
    let g = new Set(installed);
    let s = D(n.map((p)=>p.dependency)).filter((p)=>!g.has(p));
    return {
        suffix: `${Nte(installed)}${j8o(s, marketplaceMissing)}`,
        changed: installed.length > 0
    };
}
function v(a, r) {
    for (let [n, i] of r){
        for (let f of a){
            if (i.has(f)) {
                return n;
            }
        }
    }
}
export { LGo, Xee, vjr, yyt };
