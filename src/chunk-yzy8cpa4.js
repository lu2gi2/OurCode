import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, W, l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { FN, Jv } from "/$bunfs/root/chunk-xgw72tt1.js";
import { _, X, ie, R0, nU, tT, hf, Ron, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Et, ec } from "/$bunfs/root/chunk-r3z1chqx.js";
import { Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _q } from "/$bunfs/root/chunk-wew3321y.js";
import { oa } from "/$bunfs/root/chunk-223dyewd.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { ai } from "/$bunfs/root/chunk-zwxj12s4.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { fn, zc } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { bl, O0n, c_ } from "/$bunfs/root/chunk-4521ay78.js";
import { gv, YIn, M3t, FI } from "/$bunfs/root/chunk-a5rabwn2.js";
import { rS } from "/$bunfs/root/chunk-ahdcxwvk.js";
import { o, u, ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { constants } from "fs";
import { lstat, open } from "fs/promises";
import { join } from "path";
const L = "https, http, ssh (also written git+ssh or ssh+git), user@host:path, or a local file:// address with no host. git:// isn't supported because it isn't encrypted.";
const V = /^(?!-)[A-Za-z0-9._-]+@(?:(?!-)[A-Za-z0-9._-]+|\[[0-9A-Fa-f:.]+\]):(?!\/\/)/;
const Z = /^(?:(?!-)[A-Za-z0-9._-]+|\[[0-9A-Fa-f:.]+\])$/;
const J = /^(?!-)[A-Za-z0-9._-]+$/;
function k(e) {
    if (e === tT) {
        return e;
    }
    return ec(Et(e, 200)) || "“”";
}
function fpr(e) {
    if (/[\u0000-\u001f\u007f]/.test(e)) {
        throw new x(`Invalid git URL: ${k(hf(e))} \u2014 control characters are not allowed`, "git URL contains control characters");
    }
    if (e.includes("%00")) {
        throw new x(`Invalid git URL: ${k(hf(e))} \u2014 "%00" in a git address means different things to different versions of git, so it is not allowed. Remove it.`, "git URL contains %00");
    }
    if (nU(e)) {
        throw new x(`Invalid git URL: ${k(hf(e))} \u2014 git can read a square bracket (also written %5B or %5D) as marking a server name or where a local path starts, so it could connect to a different server or open a different folder than this address names. In a server address, brackets may only surround an IPv6 address, as in git@[2001:db8::1]:repo.git. Remove them, or rename the folder whose name has them.`, "git URL has a square bracket that git could read as the host");
    }
    if (V.test(e)) {
        if (!e.includes("://")) {
            return e;
        }
        throw new x(`Invalid git URL: an address written as user@host:path can't contain "://", because git then reads the text before "://" as a protocol name, as in https://. Remove the "://".`, "scp-like git URL contains ://");
    }
    let r;
    try {
        r = new URL(e);
    } catch  {
        throw new x(`Invalid git URL: ${k(hf(e))} (it could not be read as a URL). Supported: ${L}`, "Invalid git URL");
    }
    if (![
        "https:",
        "http:",
        "ssh:",
        "file:",
        "git+ssh:",
        "ssh+git:"
    ].includes(r.protocol)) {
        let n = hf(e);
        let a = e.slice(0, e.indexOf(":") + 1).toLowerCase();
        throw new x(n === e ? `Invalid git URL protocol: ${ec(Et(r.protocol, 40))}. Supported: ${L}` : a !== "" && n.toLowerCase().startsWith(a) ? `Invalid git URL: ${k(n)}. Supported: ${L}` : `Invalid git URL. Supported: ${L}`, "Invalid git URL protocol");
    }
    if ((r.protocol === "https:" || r.protocol === "http:") && _q(e)) {
        throw new x(`Invalid git URL: ${k(hf(e))} \u2014 a backslash before the first "/" can make git connect to a different server than this address names. Remove it, or write it as %5C if it is part of a user name.`, "git URL has a backslash in its authority");
    }
    if ([
        "ssh:",
        "git+ssh:",
        "ssh+git:"
    ].includes(r.protocol)) {
        let n = /^[a-z][a-z0-9+.-]*:\/\/([^/]*)/i.exec(e)?.[1] ?? "";
        let a = n.lastIndexOf("@");
        let s = a === -1 ? undefined : n.slice(0, a);
        let c = a === -1 ? n : n.slice(a + 1);
        let h = /^(.*?)(?::([0-9]{1,5}))?$/.exec(c)?.[1] ?? c;
        if (/[?#]/.test(e) || !Z.test(h) || s !== undefined && !J.test(s)) {
            let b = /^[\u0000-\u0020]*[a-z][a-z0-9+.-]*:(?:\/\/)?([^/?#]*)/i.exec(e);
            let w = b?.[1] ?? "";
            let E = (b?.[0].length ?? 0) - w.length;
            let S = w.slice(0, Math.max(0, w.lastIndexOf("@")));
            let O = S.search(Ron);
            let Y = O !== -1 ? e.slice(0, E) + `${S.slice(0, O)}:***` + e.slice(E + S.length) : e;
            let C = b?.[0].includes("//") === true;
            let K = C && w !== "" && !/:(?!\d+$)|%3a/i.test(w);
            let j = e.includes("@") && !w.includes("@") && !K || w.includes("@") && e.includes("@", E + w.length);
            let H = /%40/i.test(e) || hf(e) === tT ? tT : j || !C ? hf(e) : Y.replace(/[?#][\s\S]*$/, (q)=>`${q[0]}***`);
            throw new x(`Invalid ssh git URL: the host must be a hostname or bracketed IPv6 literal (optionally :port), the user a plain name, and the URL may not carry ? or # (${k(H)})`, "ssh git URL host or user has disallowed characters");
        }
    }
    if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(e)) {
        throw new x(`Invalid git URL: ${k(hf(e))} \u2014 a scheme URL must be spelled scheme://\u2026`, "git URL scheme without //");
    }
    if (r.protocol === "file:" && (FN(Q(e)) || r.host !== "" || /^file:\/\/[^/\\]/i.test(e) || /^file:[\\/]*[\\]/i.test(e) || Jv(ee(r)))) {
        throw new x(`Refusing git URL ${k(hf(e))}: a file: URL must name a local path (no host, no network-shaped path).${/^file:\/\/[a-z]:/i.test(e) ? " A drive letter such as C: counts as a local path only on Windows." : ""}`, "file git URL names a host or network path");
    }
    return e;
}
function Q(e) {
    try {
        return decodeURIComponent(e.replace(/^file:\/\//i, ""));
    } catch  {
        return "/../malformed-percent-encoding";
    }
}
function ee(e) {
    try {
        return decodeURIComponent(e.pathname);
    } catch  {
        return "//malformed-percent-encoding/";
    }
}
function Nqe(e) {
    try {
        fpr(e);
        return null;
    } catch (error) {
        return W(error);
    }
}
function Jrt(e) {
    return Nqe(e) === null;
}
function eQ(e) {
    return YIn(zc(e).marketplace);
}
function k3t({ pluginId, surface, replaced }) {
    return {
        ...surface !== undefined && {
            surface: d(surface)
        },
        replaced,
        is_directory: eQ(pluginId)
    };
}
function Fis(e) {
    i("tengu_plugin_directory_catalog_load", {
        outcome: d(e.outcome),
        trigger: d(e.trigger),
        pages: e.pages,
        listing_count: e.listingCount,
        installable_count: e.tally.installable,
        skipped_unparseable: e.tally.unparseable,
        skipped_other_surface: e.tally.skipped.other_surface,
        skipped_no_pin: e.tally.skipped.no_pin,
        skipped_bad_url: e.tally.skipped.bad_url,
        skipped_bad_path: e.tally.skipped.bad_path,
        name_clashes: e.tally.nameClashes,
        ...e.namesRepaired !== undefined && {
            names_repaired: e.namesRepaired
        },
        duration_ms: e.durationMs,
        ...e.cacheAgeMin !== undefined && {
            cache_age_min: e.cacheAgeMin
        },
        ...e.outcome === "stale_failed" && {
            incomplete_walk: e.incompleteWalk
        },
        ...e.outcome === "refused" && {
            refusal: d(e.refusal)
        }
    });
    switch(e.outcome){
        case "fresh_cache":
        case "walked":
            g("plugin_directory_catalog");
            return;
        case "walked_names_only":
        case "walked_not_written":
        case "stale_failed":
        case "stale_empty":
        case "stale_duplicate_id":
        case "backoff":
            f("plugin_directory_catalog", e.outcome);
            return;
        case "incomplete":
        case "duplicate_id":
        case "backoff_cold":
            m("plugin_directory_catalog", e.outcome);
            return;
        case "refused":
            switch(e.refusal){
                case "not-served":
                case "failed":
                    m("plugin_directory_catalog", e.refusal);
                    return;
                case "policy":
                    if (!e.blockedByOrganization) {
                        f("plugin_directory_catalog", "policy_not_loaded");
                    }
                    return;
            }
    }
}
function Uis({ directoryRows, totalRows, foldedRows, loadMs, entry, directoryState, knownMarketplaceCount }) {
    i("tengu_plugin_discover_shown", {
        directory_rows: directoryRows,
        total_rows: totalRows,
        folded_rows: foldedRows,
        load_ms: loadMs,
        entry: d(entry),
        directory_state: d(directoryState),
        known_marketplace_count: knownMarketplaceCount
    });
}
function $qe({ fromPluginId, toPluginId, surface, managedNames, result }) {
    {
        let c = {
            surface: d(surface),
            from_is_directory: eQ(fromPluginId),
            to_is_directory: eQ(toPluginId)
        };
        if (result.outcome === "bad") {
            m("plugin_directory_switch", result.code, c);
            return;
        }
        if (result.isPrimary) {
            if (result.outcome === "sad") {
                f("plugin_directory_switch", result.code, c);
            } else {
                g("plugin_directory_switch", c);
            }
        }
        let y = zc(fromPluginId);
        let h = M3t(y.name, y.marketplace, managedNames);
        i("tengu_plugin_marketplace_switched", {
            ...c,
            scope_changed: result.scopeChanged,
            stayed_disabled: result.stayedDisabled,
            data_dir_carried: result.dataDirCarried,
            pin_changed: result.pinChanged,
            replaced_count: result.replacedCount,
            is_primary: result.isPrimary,
            from_plugin_id_hash: h.plugin_id_hash,
            from_plugin_scope: h.plugin_scope,
            from_plugin_name_redacted: h.plugin_name_redacted,
            from_marketplace_name_redacted: h.marketplace_name_redacted,
            ...FI(toPluginId, managedNames)
        });
    }
}
function iAe({ enabled, surface, failure }) {
    {
        let a = {
            enabled,
            surface: d(surface)
        };
        if (failure !== undefined) {
            m("plugin_directory_toggle", failure, a);
            return;
        }
        g("plugin_directory_toggle", a);
        i("tengu_plugin_directory_toggled", a);
    }
}
function Fqe(e) {
    {
        let r = gv();
        if (r.blockedLogged.has(e)) {
            return;
        }
        r.blockedLogged.add(e);
        i("tengu_plugin_directory_blocked", {
            by: d(e)
        });
    }
}
function T3t({ reason, sourceKind, surface }) {
    i("tengu_marketplace_add_failed", {
        reason: d(reason),
        source_kind: d(sourceKind === "github" || sourceKind === "git" || sourceKind === "url" ? sourceKind : sourceKind === "file" || sourceKind === "directory" ? "local" : "other"),
        surface: d(surface)
    });
}
async function Uqe(e, r, n) {
    if (Ce()) {
        return {
            state: "absent"
        };
    }
    let a = n === "plugin catalog cache" ? "Plugin catalog cache" : `Plugin directory ${n}`;
    try {
        if (oa === 0 && (await lstat(e)).isSymbolicLink()) {
            t(`${a} is a symbolic link; ignoring it`, {
                level: "warn"
            });
            return {
                state: "unusable",
                readFailed: false
            };
        }
        await using s = await open(e, constants.O_RDONLY | oa | ai);
        if (!(await s.stat()).isFile()) {
            t(`${a} is not a file; ignoring it`, {
                level: "warn"
            });
            return {
                state: "unusable",
                readFailed: false
            };
        }
        let c = await R0(s, r + 1, "file");
        if (c.length > r) {
            t(`${a} is too large; ignoring it`, {
                level: "warn"
            });
            return {
                state: "unusable",
                readFailed: false
            };
        }
        return {
            state: "read",
            json: X(c.toString("utf-8"))
        };
    } catch (error) {
        if (z(error)) {
            return {
                state: "absent"
            };
        }
        let c = v(error);
        if (c === "ELOOP" || c === "EMLINK") {
            t(`${a} is a symbolic link; ignoring it`, {
                level: "warn"
            });
            return {
                state: "unusable",
                readFailed: false
            };
        }
        t(`${a} could not be read: ${l(error)}`);
        return {
            state: "unusable",
            readFailed: !(error instanceof SyntaxError)
        };
    }
}
const T = "plugin-directory-bindings.json";
const schemaVersion = 1;
const M = 1048576;
const A3t = 4096;
const ne = p(()=>u({
        schemaVersion: A(schemaVersion),
        bindings: ue(o(), u({
            repositoryKey: o().min(1).max(A3t)
        }).optional().catch(undefined))
    }));
function s_(e) {
    let r = e.split("@");
    return r.length === 2 && r[1] === fn;
}
function wT(e, r) {
    if (!s_(r)) {
        return [];
    }
    let n = [
        ...e
    ].filter((a)=>s_(a) && O0n(a, r));
    return [
        ...n.filter((a)=>a === r),
        ...n.filter((a)=>a !== r)
    ];
}
const U = new WeakSet;
function uce(e) {
    return U.has(e);
}
async function Une() {
    let e = await G();
    if (e.readFailed) {
        U.add(e.bindings);
    }
    return e.bindings;
}
async function qIn(e, r, n) {
    if (!s_(e)) {
        return;
    }
    if (r !== undefined && !B()) {
        return;
    }
    await I((a)=>{
        if (r === undefined) {
            for (let s of wT(a.keys(), e)){
                a.delete(s);
            }
        } else if (!(n?.keepExisting === true && wT(a.keys(), e).length > 0)) {
            a.set(e, r);
        }
    });
}
async function C3t(e, r) {
    if (!s_(e)) {
        return "none";
    }
    if (!r) {
        let n = await I(()=>{});
        if (uce(n)) {
            return "unreadable";
        }
        if (wT(n.keys(), e).length > 0) {
            return "held";
        }
        return "none";
    }
    await qIn(e, undefined);
    return "none";
}
async function Bqe(e, r) {
    return jqe([
        [
            e,
            r ?? []
        ]
    ]);
}
async function jqe(e) {
    {
        let r = false;
        let n = new Map;
        for (let [a, s] of e){
            if (!s_(a)) {
                continue;
            }
            r = true;
            let c = s.find((y)=>y.directoryRepositoryKey !== undefined)?.directoryRepositoryKey;
            if (c !== undefined) {
                n.set(a, c);
            }
        }
        if (!r) {
            return new Map;
        }
        if (n.size === 0 || !B()) {
            return Une();
        }
        return I((a)=>{
            for (let [s, c] of n){
                if (wT(a.keys(), s).length === 0) {
                    a.set(s, c);
                }
            }
        });
    }
    return new Map;
}
function KTt(e) {
    return Boolean(e.directoryRepositoryKey);
}
async function Qrt(e, r) {
    {
        if (!s_(e)) {
            return "not-directory";
        }
        let n = (r ?? []).find((y)=>y.directoryRepositoryKey)?.directoryRepositoryKey;
        let a = (y)=>y.has(e) || wT(y.keys(), e).some((h)=>y.get(h) === n);
        await I((y)=>{
            if (n !== undefined && !a(y)) {
                y.set(e, n);
            }
        });
        let s = await I(()=>{});
        let c = !uce(s);
        if (c && (n === undefined ? wT(s.keys(), e).length > 0 : a(s))) {
            return "held";
        }
        if (n === undefined) {
            return "no-key";
        }
        if (c && e.length > 1024) {
            return "cannot-hold";
        }
        return "not-persisted";
    }
    return "not-directory";
}
async function mpr(e, r, n) {
    if (!s_(e)) {
        return true;
    }
    if (!n.some(KTt)) {
        return await Qrt(e, r) !== "not-persisted";
    }
    await Bqe(e, r);
    return true;
}
function B() {
    return rS() && c_() === null;
}
async function G() {
    let bindings = new Map;
    {
        let r = await Uqe(join(bl(), T), M, "bindings file");
        let n = r.state === "read" ? ne().safeParse(r.json) : undefined;
        if (n?.success) {
            for (let [a, s] of Object.entries(n.data.bindings)){
                if (s !== undefined && a.length <= 1024) {
                    bindings.set(a, s.repositoryKey);
                }
            }
        }
        return {
            bindings,
            readFailed: r.state === "unusable" || r.state === "read" && n?.success !== true
        };
    }
    return {
        bindings,
        readFailed: false
    };
}
async function I(e) {
    let r = new Map;
    {
        let n = gv();
        let a = n.bindingsWriteTail;
        let { promise, resolve } = Promise.withResolvers();
        n.bindingsWriteTail = promise;
        await a;
        try {
            let y = await G();
            if (y.readFailed) {
                U.add(r);
            }
            for (let [R, b] of y.bindings){
                r.set(R, b);
            }
            e(r);
            for (let [R, b] of [
                ...r
            ]){
                if (R.length > 1024 || b === "") {
                    r.delete(R);
                }
            }
            let h = r.size !== y.bindings.size || [
                ...r
            ].some(([R, b])=>y.bindings.get(R) !== b);
            if (h && y.readFailed) {
                t("Plugin directory bindings file could not be used; leaving it as it is", {
                    level: "warn"
                });
            } else if (h && Ce()) {
                t("Plugin directory bindings file not written: this session saves nothing to disk");
            } else if (h) {
                let R = _({
                    schemaVersion,
                    bindings: Object.fromEntries([
                        ...r
                    ].map(([b, repositoryKey])=>[
                            b,
                            {
                                repositoryKey
                            }
                        ]))
                });
                if (Buffer.byteLength(R) > M) {
                    t("Plugin directory bindings file would grow past 1 MB, the most that is read back; leaving it as it is", {
                        level: "warn"
                    });
                } else {
                    await ie().mkdir(bl());
                    await En(join(bl(), T), R, 384);
                }
            }
        } catch (error) {
            t(`Failed to update plugin directory bindings file: ${l(error)}`, {
                level: "warn"
            });
        } finally{
            resolve();
        }
    }
    return r;
}
export { fpr, Nqe, Jrt, eQ, k3t, Fis, Uis, $qe, iAe, Fqe, T3t, Uqe, A3t, s_, wT, uce, Une, qIn, C3t, Bqe, jqe, KTt, Qrt, mpr };
