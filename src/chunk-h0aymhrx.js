import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { _, X, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Fut } from "/$bunfs/root/chunk-tchztk88.js";
import { aut } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { rUn } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
import { l3, vEn, t3r, k8o, T8o, Wtr, C8o, R8o, B2e, bL, Dl, bCn, _le, IJ, ble, Ys, H_, q2e } from "/$bunfs/root/chunk-kasbfbhj.js";
import { qan, Kan } from "/$bunfs/root/chunk-86n581zj.js";
import { readFile } from "fs/promises";
import { join } from "path";
async function M() {
    try {
        let a = await readFile(t3r(), "utf-8");
        let e = aut().safeParse(X(a));
        if (!e.success) {
            t(`Invalid known_marketplaces.json in zip cache: ${e.error.message}`, {
                level: "error"
            });
            return {};
        }
        return e.data;
    } catch  {
        return {};
    }
}
async function S(a) {
    await Wtr(t3r(), _(a, null, 2));
}
async function F(a, installLocation) {
    let s = vEn();
    if (!s) {
        return;
    }
    let o = await I(installLocation);
    if (o !== null) {
        let c = C8o(a);
        await Wtr(join(s, c), o);
    }
}
async function I(installLocation) {
    let e = [
        join(installLocation, ".claude-plugin", "marketplace.json"),
        join(installLocation, "marketplace.json"),
        installLocation
    ];
    for (let s of e){
        try {
            return await readFile(s, "utf-8");
        } catch  {}
    }
    return null;
}
async function w(storageV5) {
    let e = await Dl(storageV5);
    let s = Object.entries(rUn(e)).filter(([r, d])=>_le(r, d) === null && !IJ(r, d));
    for (let [r, d] of s){
        if (!d.installLocation) {
            continue;
        }
        try {
            await F(r, d.installLocation);
        } catch (error) {
            t(`Failed to save marketplace JSON for ${r}: ${error}`);
        }
    }
    let c = {
        ...await M(),
        ...Object.fromEntries(s)
    };
    await S(c);
}
function nft(a, e, s) {
    let o = st();
    let c = (o.headlessInstallPass ?? Promise.resolve()).then(()=>v(a, e, s));
    o.headlessInstallPass = c.then(()=>{}, ()=>{});
    return c;
}
async function v(a, storageV5, s) {
    let o = l3();
    t(`installPluginsForHeadless: starting${o ? " (zip cache mode)" : ""}`);
    let c = await bCn();
    let r;
    let d = ()=>r !== undefined && st().pluginLoadCacheOnly === r;
    if (c) {
        B2e();
        H_("headlessPluginInstall: seed marketplaces registered");
        r = q2e(storageV5, "headlessPluginInstall");
    }
    if (o) {
        await ie().mkdir(k8o());
        await ie().mkdir(T8o());
    }
    let length = Object.keys(bL()).length;
    let g = {
        marketplaces_installed: 0,
        delisted_count: 0
    };
    let p = c;
    try {
        if (length === 0) {
            t("installPluginsForHeadless: no marketplaces declared");
        } else {
            let u = await Fut("headless_marketplace_reconcile", ()=>qan({
                    skip: o ? (n, C)=>!R8o(C) : undefined,
                    onProgress: (n)=>{
                        if (n.type === "installed") {
                            a?.({
                                status: "installed",
                                name: n.name
                            });
                            t(`installPluginsForHeadless: installed marketplace ${n.name}`);
                        } else if (n.type === "failed") {
                            a?.({
                                status: "failed",
                                name: n.name,
                                error: n.error
                            });
                            t(`installPluginsForHeadless: failed to install marketplace ${n.name}: ${n.error}`);
                        }
                    },
                    storageV5
                }), (n)=>({
                    installed_count: n.installed.length,
                    updated_count: n.updated.length,
                    failed_count: n.failed.length,
                    skipped_count: n.skipped.length
                }));
            if (u.skipped.length > 0) {
                t(`installPluginsForHeadless: skipped ${u.skipped.length} marketplace(s) unsupported by zip cache: ${u.skipped.join(", ")}`);
            }
            let k = u.installed.length + u.updated.length;
            if (k > 0) {
                B2e();
                H_("headlessPluginInstall: marketplaces reconciled");
                r = q2e(storageV5, "headlessPluginInstall");
                p = true;
            }
            g.marketplaces_installed = k;
        }
        if (o) {
            r = undefined;
            await w(storageV5);
        }
        let m = await Kan(storageV5);
        g.delisted_count = m.length;
        if (m.length > 0) {
            p = true;
            r = undefined;
        }
        if (p && !d()) {
            H_("headlessPluginInstall: plugins changed");
            q2e(storageV5, "headlessPluginInstall");
        }
        y(storageV5, s);
        return p;
    } catch (error) {
        t(`installPluginsForHeadless: failed: ${l(error)}`, {
            level: "error"
        });
        if (p && !d()) {
            if (j() && storageV5 !== undefined) {
                H_("headlessPluginInstall: pass failed after a change");
            }
            q2e(storageV5, "headlessPluginInstall");
        }
        y(storageV5, s);
        return false;
    } finally{
        i("tengu_headless_plugin_install", g);
    }
}
function y(storageV5, e) {
    if (ble(e)) {
        Ys(storageV5, e).catch(()=>{});
    }
}
export { nft };
