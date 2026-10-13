import { Ip, Op, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, xs } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { rut, Mxe } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { Et } from "/$bunfs/root/chunk-r3z1chqx.js";
import { Mt } from "/$bunfs/root/chunk-7mawjt4q.js";
import { Fa, fn, vn } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { qoe } from "/$bunfs/root/chunk-0ycjphb5.js";
import { xAt, OAt, IL, Jl } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { kf, zx, cit, RB, Td } from "/$bunfs/root/chunk-4521ay78.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
import { dNe } from "/$bunfs/root/chunk-ye049grx.js";
import { n2, eW, bL, Qke, Nc, Dl, cv, g2, wm, Tu, OJ, Ys, H_, Dar } from "/$bunfs/root/chunk-kasbfbhj.js";
import { w4 } from "/$bunfs/root/chunk-a5rabwn2.js";
import { eQ, jqe } from "/$bunfs/root/chunk-yzy8cpa4.js";
import { iNr } from "/$bunfs/root/chunk-qyt69pyr.js";
import { JNo } from "/$bunfs/root/chunk-44qj2kay.js";
import { itr } from "/$bunfs/root/chunk-e6p3g23d.js";
import { sge, BVr, jVr, WVr } from "/$bunfs/root/chunk-8v56bfnx.js";
import { NHo } from "/$bunfs/root/chunk-4r90r5as.js";
import { z9e } from "/$bunfs/root/chunk-6pj667f1.js";
import { BWe } from "/$bunfs/root/chunk-kg0rshpy.js";
import { Xee } from "/$bunfs/root/chunk-k7a6yern.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { stat, writeFile } from "fs/promises";
import { join } from "path";
const I = 600000;
function LHo(n) {
    let o = st();
    o.autoUpdateListener = n;
    if (o.pendingAutoUpdateNotification !== null) {
        n(o.pendingAutoUpdateNotification.updated, o.pendingAutoUpdateNotification.blocked, o.pendingAutoUpdateNotification.reresolved, o.pendingAutoUpdateNotification.announce);
        o.pendingAutoUpdateNotification = null;
    }
    return ()=>{
        o.autoUpdateListener = null;
    };
}
async function B(n) {
    let o = await Nc(n);
    let u = bL();
    let a = new Set;
    for (let [s, r] of Object.entries(o)){
        if (!Td(r.source)) {
            continue;
        }
        if (n2(r.source) && !xAt()) {
            continue;
        }
        if (Mxe(s, r, Qke(s, u))) {
            a.add(s.toLowerCase());
        }
    }
    if (!a.has(fn) && !Object.hasOwn(o, fn) && eW() && Td({
        source: "pluginDirectory"
    })) {
        if (Object.keys((j() && n !== undefined ? await Tu(n) : wm()).plugins).some((r)=>r.endsWith(`@${fn}`))) {
            a.add(fn);
        }
    }
    return a;
}
async function T(source, o, u, a, s) {
    let r = false;
    let failed = false;
    let C = null;
    let h = null;
    let _ = false;
    let directoryIdentityChanged = false;
    let S = false;
    let y = false;
    for (let { scope } of o){
        try {
            let e = await z9e(source, scope, a ?? {}, s);
            switch(e.outcome){
                case "updated":
                    r = true;
                    t(`Plugin autoupdate: updated ${source} from ${e.oldVersion} to ${e.newVersion}`);
                    break;
                case "skipped":
                    {
                        t(`Plugin autoupdate: ${source} ${e.message}`);
                        if (e.skipReason === "entry_helper_deferred") {
                            h = {
                                type: "autoupdate-deferred-entry-helper",
                                source,
                                plugin: vn(source).name,
                                message: e.message
                            };
                        } else if (e.blockedBy && e.blockedBy.length > 0) {
                            let blockedBy = e.blockedBy.map((P)=>vn(P).name);
                            let disabledPinners = e.blockedBy.filter((P)=>u.has(P)).map((P)=>vn(P).name);
                            h = {
                                type: "autoupdate-blocked-by-pinner",
                                source,
                                plugin: vn(source).name,
                                heldAt: e.oldVersion,
                                blockedBy,
                                disabledPinners
                            };
                        }
                        break;
                    }
                case "failed":
                    _ = e.failureCode === "not_found" || e.failureCode === "not_cached";
                    directoryIdentityChanged ||= e.failureCode === "directory_identity_changed";
                    S ||= e.failureCode === "directory_listing_not_installable";
                    y ||= e.failureCode === "directory_unavailable" || e.failureCode === "marketplace_policy_blocked" || e.failureCode === "directory_binding_unreadable";
                    if (e.failureCode === "command_source_skipped") {
                        C = source;
                    } else if (e.failureCode === "entry_helper_disabled_by_policy" || e.failureCode === "entry_helper_remote_policy_unconsented" || e.failureCode === "plugin_policy_blocked" || e.failureCode === "command_source_refused" && (zx() || !cit())) {
                        h = {
                            type: "autoupdate-disabled-by-policy",
                            source,
                            plugin: vn(source).name,
                            message: e.message
                        };
                    } else if (e.failureCode === "entry_helper_not_inlined") {
                        h = {
                            type: "generic-error",
                            source,
                            plugin: vn(source).name,
                            error: e.message
                        };
                        failed = true;
                    } else if (e.failureCode !== "command_source_inactive") {
                        failed = true;
                    }
                    t(`Plugin autoupdate: failed to update ${source}: ${e.message}`, {
                        level: "warn"
                    });
                    break;
                case "up_to_date":
                    break;
            }
        } catch (error) {
            failed = true;
            t(`Plugin autoupdate: error updating ${source}: ${l(error)}`, {
                level: "warn"
            });
        }
    }
    let directoryStuck = failed && !_ && !directoryIdentityChanged && !S && !y && h === null && source.endsWith(`@${fn}`);
    if (directoryStuck) {
        h = {
            type: "generic-error",
            source,
            plugin: vn(source).name,
            error: 'The Anthropic Directory lists a different commit, but the background update failed, so this plugin is still on the old one. Choose "Update now" in /plugin → Installed to retry and see the error'
        };
    }
    return {
        updated: r ? source : null,
        blocked: h,
        failed,
        directoryStuck,
        directoryIdentityChanged,
        commandSourceSkipped: C
    };
}
async function WOr(n, o = new Set, { skipCommandSources = false } = {}, a) {
    let s = j() && a !== undefined ? await Tu(a) : wm();
    let r = Object.keys(s.plugins);
    if (r.length === 0) {
        return {
            updated: [],
            blocked: [],
            updateFailedCount: 0,
            commandSourceSkipped: [],
            directory: {
                updated: 0,
                updateFailed: 0,
                stuck: 0,
                identityChanged: 0
            }
        };
    }
    let { disabled } = await Ys(a);
    let C = new Set(disabled.map((m)=>m.source));
    if (n.has(fn)) {
        await jqe(Object.entries(s.plugins));
    }
    let h = await Promise.allSettled(r.map(async (m)=>{
        let { marketplace } = vn(m);
        if (!marketplace || !n.has(marketplace.toLowerCase())) {
            return null;
        }
        if (o.has(m)) {
            return null;
        }
        let g = s.plugins[m];
        if (!g || g.length === 0) {
            return null;
        }
        let R = OJ(g);
        if (R.length === 0) {
            return null;
        }
        return T(m, R, C, skipCommandSources ? {
            skipCommandSources: true
        } : undefined, a);
    }));
    let updated = [];
    let k = [];
    let S = [];
    let updateFailedCount = 0;
    let directory = {
        updated: 0,
        updateFailed: 0,
        stuck: 0,
        identityChanged: 0
    };
    for (let [m, e] of h.entries()){
        if (e.status !== "fulfilled" || e.value === null) {
            continue;
        }
        let g = eQ(r[m] ?? "");
        if (e.value.updated !== null) {
            updated.push(e.value.updated);
            if (g) {
                directory.updated++;
            }
        }
        if (e.value.blocked !== null) {
            k.push(e.value.blocked);
        }
        if (e.value.failed) {
            updateFailedCount++;
            if (g) {
                directory.updateFailed++;
            }
        }
        if (e.value.directoryStuck) {
            directory.stuck++;
        }
        if (e.value.directoryIdentityChanged) {
            directory.identityChanged++;
        }
        if (e.value.commandSourceSkipped !== null) {
            S.push(e.value.commandSourceSkipped);
        }
    }
    return {
        updated,
        blocked: k,
        updateFailedCount,
        commandSourceSkipped: S,
        directory
    };
}
async function x(n) {
    let o = {
        attemptedCount: 0,
        commandSourced: new Set,
        updated: [],
        blocked: [],
        failedCount: 0
    };
    let u = zx();
    let a = !OAt();
    if (u || a) {
        t(u ? "Plugin autoupdate: command-source refresh disabled by managed settings (still excluding command-sourced plugins from the regular pass)" : "Plugin autoupdate: command-source refresh disabled by tengu_plugin_command_source_refresh (still excluding command-sourced plugins from the regular pass)");
    }
    try {
        let s = j() && n !== undefined ? await Tu(n) : wm();
        let r = new Map;
        for (let [_, k] of Object.entries(s.plugins)){
            let installations = OJ(k ?? []);
            let { name, marketplace } = vn(_);
            if (installations.length === 0 || !name || !marketplace) {
                continue;
            }
            let m = r.get(marketplace) ?? [];
            m.push({
                pluginId: _,
                name,
                installations
            });
            r.set(marketplace, m);
        }
        let f;
        let C = new Set;
        let h = r.size > 0 ? await Dl(n) : {};
        for (let [_, k] of r){
            let S = h[_];
            if (RB(S?.source)) {
                for (let { pluginId, installations } of k){
                    if (installations.some((e)=>e.sourceCommand !== undefined)) {
                        o.commandSourced.add(pluginId);
                    }
                }
                continue;
            }
            let y = await cv(_, n);
            if (!y) {
                continue;
            }
            for (let { pluginId, name, installations } of k){
                let g = y.plugins.find((w)=>w.name === name);
                if (!g || typeof g.source === "string" || g.source.source !== "command") {
                    continue;
                }
                o.commandSourced.add(pluginId);
                if (u || a) {
                    continue;
                }
                if (!f) {
                    f = new Set(await BWe());
                    C = new Set((await Ys(n)).disabled.map((w)=>w.source));
                }
                if (!f.has(pluginId) || kf(pluginId)) {
                    t(`Plugin autoupdate: not re-resolving ${pluginId} (disabled or blocked by policy)`);
                    continue;
                }
                let R = IL(g.source);
                let P = installations.filter((w)=>w.sourceCommand !== R);
                if (P.length > 0) {
                    let w = P.every((v)=>v.sourceCommand === undefined);
                    let M = D(P.map((v)=>v.scope)).map((v)=>Fa("plugin update", pluginId, `--scope ${v}`)).filter((v)=>v !== null).map((v)=>`\`${v}\``);
                    t(`Plugin autoupdate: not re-resolving ${pluginId}: marketplace command differs from the accepted one`, {
                        level: "warn"
                    });
                    o.blocked.push({
                        type: "generic-error",
                        source: pluginId,
                        plugin: name,
                        error: (w ? `${Et(name, 200)}'s marketplace entry now installs it by running a command` : `${Et(name, 200)}'s marketplace entry changed the command it runs`) + ` (\`${Et(g.source.command, rut)}${g.source.mode === "link" ? " [mode: link]" : ""}\`). It was not re-run in the background; ${M.length > 0 ? `run ${M.join(" and ")}` : "an explicit per-scope plugin update is needed"} to review and accept it.`
                    });
                }
                let U = installations.filter((w)=>w.sourceCommand === R);
                if (U.length === 0) {
                    continue;
                }
                o.attemptedCount++;
                t(`Plugin autoupdate: re-resolving command-sourced plugin ${pluginId}`);
                let E = await T(pluginId, U, C, {
                    skipMarketplaceRefresh: true
                }, n);
                if (E.updated !== null) {
                    o.updated.push(E.updated);
                }
                if (E.blocked !== null) {
                    o.blocked.push(E.blocked);
                }
                if (E.failed) {
                    o.failedCount++;
                }
            }
        }
    } catch (error) {
        t(`Plugin autoupdate: command-source refresh failed: ${l(error)}`, {
            level: "warn"
        });
    }
    return o;
}
function Iqn(n, o, u = [], { announce = true } = {}) {
    if (n.length === 0 && o.length === 0) {
        return;
    }
    let s = st();
    if (s.autoUpdateListener) {
        s.autoUpdateListener(n, o, u, announce);
    } else {
        let r = s.pendingAutoUpdateNotification;
        s.pendingAutoUpdateNotification = {
            updated: D([
                ...r?.updated ?? [],
                ...n
            ]),
            blocked: [
                ...r?.blocked ?? [],
                ...o
            ],
            reresolved: D([
                ...r?.reresolved ?? [],
                ...u
            ]),
            announce: (r?.announce ?? false) || announce
        };
    }
}
function H() {
    return {
        attemptedCount: 0,
        commandSourced: new Set,
        updated: [],
        blocked: [],
        failedCount: 0
    };
}
function zOr(n) {
    let o = st();
    o.commandSourceReresolve ??= (async ()=>{
        if (Mt()) {
            return H();
        }
        let u = await x(n);
        if (u.attemptedCount > 0) {
            dNe();
        }
        try {
            Iqn(u.updated, u.blocked, u.updated);
        } catch (error) {
            c(error);
        }
        return u;
    })();
    return o.commandSourceReresolve;
}
function O(n) {
    return (async ()=>{
        let o = await zOr(n);
        let u = Date.now();
        let a = {
            marketplaces_refreshed: 0,
            marketplace_refresh_failed: 0,
            marketplace_refresh_policy_skipped: 0,
            plugins_updated: 0,
            plugin_update_failed: 0,
            plugins_blocked_by_pin: 0,
            plugins_helper_deferred: 0,
            plugins_policy_blocked: 0,
            command_plugins_refreshed: o.attemptedCount,
            command_plugin_refresh_failed: o.failedCount
        };
        let s = {};
        s = {
            directory_updated: 0,
            directory_update_failed: 0,
            directory_update_stuck: 0,
            directory_identity_changed: 0
        };
        let r = ()=>{
            if (o.attemptedCount > 0 || o.failedCount > 0) {
                i("tengu_plugin_autoupdate_pass", {
                    outcome: b("skipped"),
                    ...a,
                    ...s,
                    duration_ms: Date.now() - u
                });
            }
        };
        if (qoe()) {
            t("Plugin autoupdate: skipped (auto-updater disabled)");
            r();
            return;
        }
        try {
            let f = await B(n);
            if (f.size === 0) {
                r();
                return;
            }
            let C = Math.floor(Math.random() * I);
            await Q(C, undefined, {
                unref: true
            });
            u = Date.now();
            let h = await Promise.allSettled(Array.from(f).map(async (e)=>{
                try {
                    await g2(e, n, undefined, {
                        isBackground: true
                    });
                    return "refreshed";
                } catch (error) {
                    if (error instanceof Jl) {
                        t(`Plugin autoupdate: marketplace ${e} not refreshed (managed policy): ${l(error)}`);
                        return "policy";
                    }
                    t(`Plugin autoupdate: failed to refresh marketplace ${e}: ${l(error)}`, {
                        level: "warn"
                    });
                    return "failed";
                }
            }));
            a.marketplace_refresh_failed = F(h, (e)=>e.status === "fulfilled" && e.value === "failed");
            a.marketplace_refresh_policy_skipped = F(h, (e)=>e.status === "fulfilled" && e.value === "policy");
            a.marketplaces_refreshed = f.size - a.marketplace_refresh_failed - a.marketplace_refresh_policy_skipped;
            t("Plugin autoupdate: checking installed plugins");
            let { updated, blocked, updateFailedCount, directory } = await WOr(f, o.commandSourced, {
                skipCommandSources: true
            }, n);
            a.plugins_updated = updated.length;
            a.plugin_update_failed = updateFailedCount;
            s = {
                directory_updated: directory.updated,
                directory_update_failed: directory.updateFailed,
                directory_update_stuck: directory.stuck,
                directory_identity_changed: directory.identityChanged
            };
            a.plugins_blocked_by_pin = F(blocked, (e)=>e.type === "autoupdate-blocked-by-pinner");
            a.plugins_helper_deferred = F(blocked, (e)=>e.type === "autoupdate-deferred-entry-helper");
            a.plugins_policy_blocked = F(blocked, (e)=>e.type === "autoupdate-disabled-by-policy");
            if (updated.length > 0) {
                H_("autoupdate dep-resolution");
            }
            let { errors } = await Ys(n);
            let m = await Xee(errors.filter((e)=>{
                if (e.type !== "dependency-unsatisfied") {
                    return false;
                }
                let marketplace = vn(e.source).marketplace;
                return marketplace !== undefined && f.has(marketplace.toLowerCase());
            }), n);
            if (m.installed.length > 0) {
                t(`Plugin autoupdate: resolved ${m.installed.length} missing plugin dependencies: ${m.installed.join(", ")}`);
                updated.push(...m.installed);
            }
            Iqn(updated, blocked);
            i("tengu_plugin_autoupdate_pass", {
                outcome: a.marketplace_refresh_failed > 0 || a.plugin_update_failed > 0 ? b("partial") : b("ok"),
                ...a,
                ...s,
                duration_ms: Date.now() - u
            });
        } catch (error) {
            t(`Plugin autoupdate: failed: ${l(error)}`, {
                level: "error"
            });
            i("tengu_plugin_autoupdate_pass", {
                outcome: b("failed"),
                error_kind: d(w4(error)),
                ...a,
                ...s,
                duration_ms: Date.now() - u
            });
        }
    })();
}
const L = 86400000;
const GOr = 600000;
const XMs = 5000;
const JMs = 3600000;
async function QMs(n) {
    if (j() && n !== undefined) {
        let o = await n.statMeta($e.state("last-cleanup"));
        return o.ok && Date.now() - o.value.mtimeMs < L;
    }
    try {
        let o = await stat(join(ve(), ".last-cleanup"));
        return Date.now() - o.mtimeMs < L;
    } catch  {
        return false;
    }
}
async function VOr(n, o) {
    if (Ce()) {
        return;
    }
    if (!n.backgroundHousekeeping.claim()) {
        return;
    }
    iNr(n);
    JNo(n);
    O(o);
    if (Op()) {
        NHo(o);
        Dar(o);
        setInterval(Dar, JMs, o).unref();
    }
    let u = "sentinel-unchecked";
    async function a() {
        if (Op() && Ip() > Date.now() - 60000) {
            setTimeout(s, GOr).unref();
            return;
        }
        if (u !== "done") {
            if (u === "sentinel-unchecked") {
                u = "sweep-due";
                if (await QMs(o)) {
                    setTimeout(s, GOr).unref();
                    return;
                }
            }
            u = "done";
            await WVr(o);
            if (j() && o !== undefined) {
                await jVr(ve(), n.backgroundHousekeeping);
                await BVr(o);
                let r = await o.write($e.state("last-cleanup"), new Date().toISOString(), {
                    publishDiscipline: "inPlace"
                });
                if (!r.ok) {
                    t(`.last-cleanup write failed: ${r.error.code}`, {
                        level: "error"
                    });
                }
            } else {
                await writeFile(join(ve(), ".last-cleanup"), new Date().toISOString()).catch((r)=>{
                    if (xs(r)) {
                        return t(`.last-cleanup write failed: ${r.code} ${r.message}`, {
                            level: "error"
                        });
                    }
                    return c(r);
                });
            }
        }
        if (Op() && Ip() > Date.now() - 60000) {
            setTimeout(s, GOr).unref();
            return;
        }
        await itr();
    }
    function s() {
        return a().catch((r)=>{
            if (sge(r)) {
                return t(`background housekeeping failed: ${r.message}`, {
                    level: "error"
                });
            }
            return c(r);
        });
    }
    setTimeout(s, XMs).unref();
}
export { LHo, WOr, Iqn, zOr, GOr, XMs, JMs, QMs, VOr };
