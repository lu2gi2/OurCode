import { Vn, we, Kr } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, X, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { Md } from "/$bunfs/root/chunk-3yz9zdww.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { eh, lf, pse } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { EP } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { NE, yr, Ude, rf, wl } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { F_e, bl, iit } from "/$bunfs/root/chunk-4521ay78.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
import { FI, w4 } from "/$bunfs/root/chunk-a5rabwn2.js";
import { Ay, bL, s4t, XZo, Nc, Dl, pne, sJr, aEt, cv, nB, tes, Ac, h2, dEt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Wu } from "/$bunfs/root/chunk-jc71z2z2.js";
import { iie } from "/$bunfs/root/chunk-6pj667f1.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { isAbsolute, resolve, join } from "path";
import { readFile } from "fs/promises";
function BOr(e, r, s) {
    let missing = [];
    let sourceChanged = [];
    let upToDate = [];
    for (let [u, f] of Object.entries(e)){
        let P = Ay(r, u);
        let declaredSource = w(f.source, s?.projectRoot);
        if (!P) {
            missing.push(u);
        } else if (f.sourceIsFallback) {
            upToDate.push(u);
        } else if (!Vn(declaredSource, P.source)) {
            sourceChanged.push({
                name: u,
                declaredSource,
                materializedSource: P.source
            });
        } else {
            upToDate.push(u);
        }
    }
    return {
        missing,
        sourceChanged,
        upToDate
    };
}
async function qan(e) {
    let r = bL();
    if (Object.keys(r).length === 0) {
        return {
            installed: [],
            updated: [],
            failed: [],
            upToDate: [],
            skipped: []
        };
    }
    let s = e?.storageV5;
    let g;
    try {
        g = await Nc(s);
    } catch (error) {
        t(`reconciler: failed to load known_marketplaces.json, treating as empty: ${l(error)}`, {
            level: "error"
        });
        g = {};
    }
    let o = BOr(r, g, {
        projectRoot: we()
    });
    let n = [
        ...o.missing.map((a)=>({
                name: a,
                source: w(r[a].source),
                action: "install"
            })),
        ...o.sourceChanged.map(({ name, declaredSource })=>({
                name,
                source: declaredSource,
                action: "update"
            }))
    ];
    let skipped = [];
    let f = [];
    let failed = [];
    for (let a of n){
        if (XZo(a.name)) {
            t(`[reconcile] '${a.name}' is the built-in ${yr}'s name: a settings entry under it adds no marketplace. Only an autoUpdate from ${s4t} counts, and only while the Directory is turned on.`);
            skipped.push(a.name);
            continue;
        }
        let p = aEt(a.name);
        if (NE(a.name) || p !== undefined) {
            let y = `${p === undefined ? Ude(a.name) : sJr(a.name, p)} This marketplace was not added. Remove it from extraKnownMarketplaces in settings.`;
            t(`[reconcile] '${a.name}' ${y}`, {
                level: "warn"
            });
            failed.push({
                name: a.name,
                error: y
            });
            e?.onProgress?.({
                type: "failed",
                name: a.name,
                error: y
            });
            continue;
        }
        if (e?.skip?.(a.name, a.source)) {
            skipped.push(a.name);
            continue;
        }
        if (iit(a.name)) {
            let k = `not materialized: names starting with "${pse}" are reserved for marketplaces hosted on claude.ai \u2014 rename the declaration`;
            t(`[reconcile] '${a.name}' ${k}`, {
                level: "warn"
            });
            failed.push({
                name: a.name,
                error: k
            });
            e?.onProgress?.({
                type: "failed",
                name: a.name,
                error: k
            });
            continue;
        }
        if (a.action === "update" && lf(a.source) && !await Md(a.source.path)) {
            t(`[reconcile] '${a.name}' declared path does not exist; keeping materialized entry`);
            skipped.push(a.name);
            continue;
        }
        f.push(a);
    }
    let installed = [];
    let updated = [];
    if (f.length > 0) {
        t(`[reconcile] ${f.length} marketplace(s): ${f.map((a)=>`${a.name}(${a.action})`).join(", ")}`);
        for(let a = 0; a < f.length; a++){
            let { name, source, action } = f[a];
            e?.onProgress?.({
                type: "installing",
                name,
                action,
                index: a + 1,
                total: f.length
            });
            try {
                let h = await pne(source, undefined, s, name);
                if (action === "install") {
                    installed.push(name);
                } else {
                    updated.push(name);
                }
                e?.onProgress?.({
                    type: "installed",
                    name,
                    alreadyMaterialized: h.alreadyMaterialized
                });
            } catch (error) {
                let I = l(error);
                failed.push({
                    name,
                    error: I
                });
                e?.onProgress?.({
                    type: "failed",
                    name,
                    error: I
                });
                t(`[reconcile] failed to ${action} marketplace '${name}': ${I}`, {
                    level: "error"
                });
            }
        }
    }
    await tes(s);
    return {
        installed,
        updated,
        failed,
        upToDate: o.upToDate,
        skipped
    };
}
function w(source, r) {
    if ((source.source === "directory" || source.source === "file") && !isAbsolute(source.path)) {
        let s = Kr();
        let g = s ?? r ?? we();
        let o = s === null ? EP(g) : null;
        return {
            ...source,
            path: resolve(o ?? g, source.path)
        };
    }
    return source;
}
const G = "flagged-plugins.json";
const z = 172800000;
function F() {
    return join(bl(), G);
}
function D(e) {
    let r = X(e);
    if (typeof r !== "object" || r === null || !("plugins" in r) || typeof r.plugins !== "object" || r.plugins === null) {
        return {};
    }
    let r_plugins = r.plugins;
    let g = {};
    for (let [o, n] of Object.entries(r_plugins)){
        if (n && typeof n === "object" && "flaggedAt" in n && typeof n.flaggedAt === "string") {
            let u = {
                flaggedAt: n.flaggedAt
            };
            if ("seenAt" in n && typeof n.seenAt === "string") {
                u.seenAt = n.seenAt;
            }
            g[o] = u;
        }
    }
    return g;
}
const A = new Set([
    "ENOSPC",
    "EROFS",
    "EACCES",
    "ENOENT",
    "ENOTDIR"
]);
const K = new Set([
    ...A,
    "EEXIST",
    "EISDIR",
    "AbsentParent",
    "UnexpectedAbsent"
]);
function M(e) {
    if (j() && e !== undefined && F_e("flagged", bl()) !== null) {
        return e;
    }
}
async function R(e) {
    let r = F();
    let s = M(e);
    if (s) {
        let g = await s.read([
            $e.pluginRegistry("flagged")
        ]);
        let o = g.ok ? g.value.items[0] : undefined;
        if (!o?.found) {
            return {};
        }
        let n = o.value;
        try {
            return D(Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString("utf-8"));
        } catch  {
            return {};
        }
    }
    try {
        let g = await readFile(r, {
            encoding: "utf-8"
        });
        return D(g);
    } catch  {
        return {};
    }
}
async function E(plugins, r) {
    let s = F();
    let g = M(r);
    if (g) {
        let o = await g.write($e.pluginRegistry("flagged"), _({
            plugins
        }, null, 2));
        if (o.ok) {
            st().flaggedPlugins = plugins;
            return;
        }
        let n = "telemetryCode" in o.error ? o.error.telemetryCode : undefined;
        if (n !== undefined && K.has(n)) {
            t(`Failed to persist flagged plugins: ${gt(o.error)}`, {
                level: "error"
            });
        } else {
            c(new x(`Failed to persist flagged plugins: ${o.error.code}${n === undefined ? "" : ` ${n}`}`, "flagged plugins v5 write failed"));
        }
        return;
    }
    try {
        await ie().mkdir(bl());
        let o = _({
            plugins
        }, null, 2);
        await En(s, o, 384);
        st().flaggedPlugins = plugins;
    } catch (error) {
        let n = v(error);
        if (n !== undefined && A.has(n)) {
            t(`Failed to persist flagged plugins: ${error}`, {
                level: "error"
            });
        } else {
            c(error);
        }
    }
}
async function T(e) {
    let r = await R(e);
    let s = Date.now();
    let g = false;
    for (let [o, n] of Object.entries(r)){
        if (n.seenAt && s - new Date(n.seenAt).getTime() >= z) {
            delete r[o];
            g = true;
        }
    }
    st().flaggedPlugins = r;
    if (g) {
        await E(r, e);
    }
}
function vft() {
    return st().flaggedPlugins ?? {};
}
async function O(e, r) {
    let s = st();
    if (s.flaggedPlugins === null) {
        s.flaggedPlugins = await R(r);
    }
    let g = {
        ...s.flaggedPlugins,
        [e]: {
            flaggedAt: new Date().toISOString()
        }
    };
    await E(g, r);
    t(`Flagged plugin: ${e}`);
}
async function HHo(e, r) {
    let s = st();
    if (s.flaggedPlugins === null) {
        s.flaggedPlugins = await R(r);
    }
    let seenAt = new Date().toISOString();
    let o = false;
    let n = {
        ...s.flaggedPlugins
    };
    for (let u of e){
        let f = n[u];
        if (f && !f.seenAt) {
            n[u] = {
                ...f,
                seenAt
            };
            o = true;
        }
    }
    if (o) {
        await E(n, r);
    }
}
async function DHo(e, r) {
    let s = st();
    if (s.flaggedPlugins === null) {
        s.flaggedPlugins = await R(r);
    }
    if (!(e in s.flaggedPlugins)) {
        return;
    }
    let { [e]: g, ...rest } = s.flaggedPlugins;
    s.flaggedPlugins = rest;
    await E(rest, r);
}
function W(e, r, s) {
    let g = new Set(r.plugins.map((u)=>u.name));
    let o = `@${s}`;
    let n = [];
    for (let u of Object.keys(e.plugins)){
        if (!u.endsWith(o)) {
            continue;
        }
        let f = u.slice(0, -o.length);
        let P = r.renames && dEt(f, r.renames, g)?.kind === "renamed";
        if (!g.has(f) && !P) {
            n.push(u);
        }
    }
    return n;
}
async function Kan(e) {
    await T(e);
    let r = j() && e !== undefined ? await h2(e) : Ac();
    let s = vft();
    let g = await Dl(e);
    let o = [];
    for (let [n, u] of Object.entries(g)){
        try {
            if (n.toLowerCase() === eh) {
                continue;
            }
            if (rf(u.source) && !Object.keys(r.plugins).some((m)=>m.endsWith(`@${n}`))) {
                continue;
            }
            let f = rf(u.source) ? await cv(n, e, {
                registryEntry: u
            }) : await nB(n, e);
            if (f === null) {
                if (Object.keys(r.plugins).some((m)=>m.endsWith(`@${n}`))) {
                    i("tengu_plugin_delisted_enforcement", {
                        outcome: b("scan-skipped-no-catalog"),
                        is_official_marketplace: false
                    });
                }
                continue;
            }
            if (!f.forceRemoveDeletedPlugins) {
                continue;
            }
            let P = W(r, f, n);
            for (let m of P){
                if (m in s) {
                    continue;
                }
                let S = r.plugins[m] ?? [];
                if (!S.some((p)=>p.scope === "user" || p.scope === "project" || p.scope === "local")) {
                    continue;
                }
                for (let p of S){
                    let { scope } = p;
                    if (scope !== "user" && scope !== "project" && scope !== "local") {
                        continue;
                    }
                    try {
                        let y = await iie(m, scope, true, e, {
                            settingsStillOn: "remove-anyway"
                        });
                        i("tengu_plugin_delisted_enforcement", {
                            outcome: y.success ? b("uninstalled") : b("uninstall-failed"),
                            scope: d(scope),
                            ...!y.success && {
                                error_kind: d(w4(y.message))
                            },
                            ...FI(m, Wu())
                        });
                    } catch (error) {
                        t(`Failed to auto-uninstall delisted plugin ${m} from ${scope}: ${l(error)}`, {
                            level: "error"
                        });
                        i("tengu_plugin_delisted_enforcement", {
                            outcome: b("uninstall-failed"),
                            scope: d(scope),
                            error_kind: d(w4(error)),
                            ...FI(m, Wu())
                        });
                    }
                }
                await O(m, e);
                o.push(m);
            }
        } catch (error) {
            t(`Failed to check for delisted plugins in "${n}": ${l(error)}`, {
                level: "warn"
            });
            i("tengu_plugin_delisted_enforcement", {
                outcome: b("scan-failed"),
                error_kind: d(w4(error)),
                _PROTO_marketplace_name: n,
                is_official_marketplace: wl(n)
            });
        }
    }
    return o;
}
export { vft, HHo, DHo, BOr, qan, Kan };
