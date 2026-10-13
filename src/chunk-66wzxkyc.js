import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, ot, W, l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { _, X, OH, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ar } from "/$bunfs/root/chunk-24agvrd9.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Et, Js, je } from "/$bunfs/root/chunk-r3z1chqx.js";
import { G8, Nn, gc, o5e, $v } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { i, js } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Ur, Ft, za } from "/$bunfs/root/chunk-04d4ftnx.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Io } from "/$bunfs/root/chunk-63xa24b4.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { Ot } from "/$bunfs/root/chunk-2d9a83dh.js";
import { JSe, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { yn, Hv } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { oit, zx, P5, RB } from "/$bunfs/root/chunk-4521ay78.js";
import { Ci } from "/$bunfs/root/chunk-0ycjphb5.js";
import { _s } from "/$bunfs/root/chunk-231n9cft.js";
import { Pg, e8, vn, A$e, NT } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { I3t, Bne, JTt, w4 } from "/$bunfs/root/chunk-a5rabwn2.js";
import { xB, DRt, B4, cV } from "/$bunfs/root/chunk-9fvky64k.js";
import { k3t, s_, wT, uce, Une } from "/$bunfs/root/chunk-yzy8cpa4.js";
import { AM, kis, Mye, qrt, n5, Hqe, rm, Krt, ZTe, eAe } from "/$bunfs/root/chunk-7xekr000.js";
import { wKe, MAt, IL, N5t, Jl, are, vKe } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { Yu } from "/$bunfs/root/chunk-tsfvfcsw.js";
import { $kt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { ZL } from "/$bunfs/root/chunk-26fc80cv.js";
import { Sx, FC, U8o, B8o, z8o, Gsr, Att, G7o, BAn, xtt, sc, Ay, Dl, jh, m2, wm, Tu, par, eS, Ys, Zn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Wu } from "/$bunfs/root/chunk-jc71z2z2.js";
import { Av } from "/$bunfs/root/chunk-fzmwt34b.js";
import { Lft, Wwe, u0o, p0o, WMr, j9e, iie, W9e, f0o, z9e, Fft, RKn, xKn } from "/$bunfs/root/chunk-6pj667f1.js";
import { lWe } from "/$bunfs/root/chunk-9jpxkq0t.js";
import { hfe } from "/$bunfs/root/chunk-76vcfzrt.js";
import { bJe, Lje } from "/$bunfs/root/chunk-ramdyx3e.js";
import { mze } from "/$bunfs/root/chunk-nye35vx4.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { basename, join, dirname, relative, resolve, sep } from "path";
import { createHash, randomUUID } from "crypto";
import { readFile, stat, mkdir, writeFile } from "fs/promises";
function vin(e, n) {
    let r = iIr(n);
    if (r === null) {
        return e;
    }
    return `${e}
${te.warning} ${r}`;
}
function iIr(e) {
    try {
        if (e === undefined || e === "managed") {
            return null;
        }
        let n = NT(e);
        let r = yn(n);
        if (r === undefined || n === "userSettings" && basename(r) === $v.cowork) {
            return null;
        }
        if (Att(n) || n !== "userSettings" && Gsr(r)) {
            return null;
        }
        let p = Hv(n).filter((u)=>u.file === r && u.severity !== "warning");
        let [f] = p;
        if (f === undefined) {
            return null;
        }
        let o = p.length - 1;
        let m = f.path !== "" ? `its "${je(f.path, 80)}" ${o > 0 ? `and ${o} other ${I(o, "value")} are` : "is"} not valid` : f.errorClass === "unreadable" ? "it could not be read" : "it is not a JSON object";
        return `${Js(r)} does not load (${m}), so Claude Code ignores the whole file, including anything this command wrote there. Fix the file, then run this command again if its change is missing. If a newer Claude Code wrote the file, update Claude Code instead.`;
    } catch (error) {
        t(`settings file check after a plugin command skipped: ${l(error)}`, {
            level: "warn"
        });
        return null;
    }
}
function Z(e) {
    let mcpServers = e.manifest.mcpServers;
    let r = (typeof mcpServers === "string" ? [
        mcpServers
    ] : Array.isArray(mcpServers) ? mcpServers : []).filter((f)=>typeof f === "string" && AM(f));
    let local = r.filter((f)=>kis(f));
    return {
        local,
        remoteCount: r.length - local.length
    };
}
async function Q(e, local, r) {
    let p = await Promise.all(local.map(async (spec_1)=>{
        try {
            let result_1 = await Hqe(spec_1, e.path, e.repository, undefined, undefined, true, r);
            return {
                spec: spec_1,
                result: result_1
            };
        } catch (error) {
            t(`post-install bundle read failed for ${spec_1}: ${l(error)}`, {
                level: "warn"
            });
            return {
                spec: spec_1,
                result: undefined
            };
        }
    }));
    let f = new Map;
    let unreadable = [];
    for (let { spec, result } of p){
        if (!result) {
            unreadable.push(spec);
        } else if ("status" in result) {
            f.set(result.manifest.name, {
                serverName: result.manifest.name,
                schema: result.configSchema,
                existingConfig: result.existingConfig
            });
        }
    }
    return {
        bundles: [
            ...f.values()
        ],
        unreadable
    };
}
function M(e) {
    let n = e.indexOf("=");
    if (n <= 0) {
        throw new x(`--config expects KEY=VALUE, got "${e}". Use --config key=value (repeatable).`, "--config pair has no key");
    }
    return {
        key: e.slice(0, n),
        raw: e.slice(n + 1)
    };
}
function V(e, n, bundles, p) {
    let pluginPairs = [];
    let bundlePairs = new Map;
    for (let m of e){
        let { key, raw } = M(m);
        if (n && Object.hasOwn(n, key)) {
            pluginPairs.push(m);
            continue;
        }
        let s = bundles.flatMap(({ serverName, schema })=>{
            let C = [];
            let k = `${serverName}.`;
            if (key.startsWith(k) && Object.hasOwn(schema, key.slice(k.length))) {
                C.push({
                    serverName,
                    field: key.slice(k.length),
                    bare: false
                });
            }
            if (Object.hasOwn(schema, key)) {
                C.push({
                    serverName,
                    field: key,
                    bare: true
                });
            }
            return C;
        });
        let [h, ...S] = s;
        if (h && S.length === 0) {
            if (h.bare && p.unreadable.length + p.remoteCount > 0) {
                throw new x(`--config key "${key}" must name its server, because a bundled MCP server whose keys are unknown may declare it too; use ${Et(`${h.serverName}.${h.field}`)}.` + L(p), "--config bare key with an unread bundled server");
            }
            let y = bundlePairs.get(h.serverName) ?? [];
            y.push(`${h.field}=${raw}`);
            bundlePairs.set(h.serverName, y);
            continue;
        }
        if (h) {
            throw new x(`--config key "${key}" is declared by more than one bundled MCP server; use ${s.map((y)=>Et(`${y.serverName}.${y.field}`)).join(" or ")}.`, "--config key is ambiguous between bundled servers");
        }
        let w = [
            ...Object.keys(n ?? {}),
            ...bundles.flatMap(({ serverName, schema })=>Object.keys(schema).map((C)=>Et(`${serverName}.${C}`)))
        ];
        throw new x(`--config key "${key}" isn't declared in this plugin's userConfig` + (bundles.length > 0 ? " or by its bundled MCP servers." : ".") + (w.length > 0 ? ` Known keys: ${w.join(", ")}.` : "") + L(p), "--config key is not declared");
    }
    return {
        pluginPairs,
        bundlePairs
    };
}
function L({ unreadable, remoteCount }) {
    let r = [];
    if (unreadable.length > 0) {
        r.push(`the bundled ${unreadable.map((f)=>je(f)).join(", ")} could not be read, so its keys are unknown \u2014 re-run with --debug-file <path> to log why`);
    }
    if (remoteCount > 0) {
        r.push(`${remoteCount} bundled ${I(remoteCount, "server is", "servers are")} fetched from a URL at session start and can only be configured in Claude Code (/plugin \u2192 Installed \u2192 Configure)`);
    }
    let p = r.join("; ");
    if (p) {
        return ` (${p[0].toUpperCase()}${p.slice(1)}.)`;
    }
    return "";
}
function ee(e, name) {
    let r = n5(e.existingConfig, e.schema);
    if (r.valid) {
        return;
    }
    let p = Et(e.serverName);
    let f = Object.entries(e.schema).filter(([m, u])=>{
        let g = _s(e.existingConfig, m);
        return u.required === true && (g === undefined || g === "");
    }).map(([m])=>Et(`${p}.${m}`));
    let o = f.length > 0 ? `set ${f.join(", ")} with --config KEY=VALUE` : `${r.errors.map((m)=>Et(m)).join("; ")} \u2014 fix it with --config ${p}.KEY=VALUE`;
    return `MCP server "${je(e.serverName)}" needs configuration before it can start: ${o}, or in Claude Code run /plugin, select "${je(name)}" in the Installed tab, and choose Configure.`;
}
class nee extends x {
    result;
    pluginCommandErrorCategory;
    constructor(e, n = {}){
        super(e, "plugin operation returned a failure result");
        this.name = "PluginOperationFailedError";
        this.result = n;
        if (n.failureCode === "invalid_plugin_id" || n.failureCode === "plugin_folder_held" || n.failureCode === "install_records_unreadable" || n.failureCode === "directory_identity_changed" || n.failureCode === "directory_binding_unreadable" || n.failureCode === "directory_loaded") {
            this.pluginCommandErrorCategory = "validation";
        }
    }
}
function oe(e) {
    let n = e.kind === "command_source" ? [
        e.kind,
        e.pluginId,
        e.command,
        e.mode,
        e.catalogRevision
    ] : [
        e.kind,
        e.pluginId,
        e.command,
        e.archiveUrl,
        e.catalogRevision
    ];
    return createHash("sha256").update(_(n), "utf8").digest("hex");
}
function aIr(e) {
    return {
        ...e,
        sha256: oe(e)
    };
}
function q(e, acceptCommand) {
    if (acceptCommand === undefined) {
        return e;
    }
    return {
        ...e,
        acceptCommandMatched: Y(acceptCommand, e)
    };
}
async function ae(e, n, r) {
    return {
        kind: "entry_helper",
        pluginId: n,
        command: e.command,
        archiveUrl: o5e(e).destination,
        catalogRevision: await se(n, r)
    };
}
async function se(e, n) {
    let r = `unreadable:${randomUUID()}`;
    if (j() && n !== undefined) {
        return r;
    }
    let { marketplace } = vn(e);
    let f = marketplace === undefined ? undefined : Ay(await Dl(n), marketplace);
    if (f === undefined) {
        return r;
    }
    if (f.source.source === "claudeai") {
        return r;
    }
    let f_installLocation = f.installLocation;
    try {
        if (f.source.source === "github" || f.source.source === "git") {
            if (await stat(join(f_installLocation, ".git")).then(()=>true, ()=>false)) {
                let u = JSe(f_installLocation, {});
                let g = await ct(Ot(), [
                    ...u.inCheckoutArgs,
                    "rev-parse",
                    "HEAD"
                ], {
                    cwd: f_installLocation,
                    env: u.env,
                    stdin: "ignore"
                });
                if (g.code === 0) {
                    return `git:${g.stdout.trim()}`;
                }
                return r;
            }
            if (jh(f_installLocation) === undefined) {
                let u = (await readFile(join(f_installLocation, oit), "utf8")).trim();
                if (/^(?:[0-9a-f]{40}|[0-9a-f]{64})$/i.test(u)) {
                    return `gcs:${u}`;
                }
                return r;
            }
        }
        if (f.source.source === "settings") {
            return `settings:${Se([
                await ne(f_installLocation),
                A(f.source)
            ])}`;
        }
        return `sha256:${await ne(f_installLocation)}`;
    } catch  {
        return r;
    }
}
async function ne(e) {
    let n = (o)=>[
            "ENOENT",
            "ENOTDIR"
        ].includes(v(o) ?? "");
    let r;
    let p = true;
    try {
        r = await readFile(join(e, ".claude-plugin", "marketplace.json"), "utf8");
    } catch (error) {
        if (!n(error)) {
            throw error;
        }
        r = await readFile(e, "utf8");
        p = false;
    }
    let f = p ? await readFile(join(e, "package.json"), "utf8").catch((o)=>{
        if (n(o)) {
            return null;
        }
        throw o;
    }) : null;
    return createHash("sha256").update(_([
        A(X(Io(r))),
        f === null ? null : A(X(Io(f)))
    ]), "utf8").digest("hex");
}
function Se(e) {
    return createHash("sha256").update(_(e), "utf8").digest("hex");
}
function A(e) {
    if (Array.isArray(e)) {
        return [
            "[",
            ...e.map(A)
        ];
    }
    if (e !== null && typeof e === "object") {
        return [
            "{",
            ...Object.keys(e).sort().map((n)=>[
                    n,
                    A(e[n])
                ])
        ];
    }
    return e;
}
function Y(acceptCommand, n) {
    return acceptCommand !== undefined && acceptCommand.trim().toLowerCase() === oe(n);
}
async function rfe(e) {
    let n = e.failureCode !== undefined && be.has(e.failureCode) ? e : {
        ...e,
        shownCommand: undefined
    };
    await Yu(OH(_({
        ...n,
        nonce: J.value
    })) + `
`);
}
var J = ze({
    value: undefined
}, (e)=>{
    e.value = undefined;
});
function $Oo() {
    return J.value;
}
function FOo() {
    J.value = a.CLAUDE_CODE_RESULT_NONCE || undefined;
    a.unset("CLAUDE_CODE_RESULT_NONCE");
}
var be = new Set([
    "command_source_refused",
    "command_source_declined",
    "entry_helper_unconfirmed",
    "entry_helper_declined"
]);
function ie(e, n) {
    if (e instanceof nee) {
        return e.result.failureCode ?? "op_failed";
    }
    if (e instanceof Jl && n === "update") {
        let r = e.telemetryMessage;
        if (r.startsWith(I3t)) {
            return r.slice(I3t.length);
        }
    }
    return lIr(e);
}
function lIr(e) {
    if (e instanceof Jl) {
        return vKe(e).code;
    }
    if (e instanceof Sx) {
        return `claudeai_${e.code}`;
    }
    return `error_${le(w4(e))}`;
}
function le(e) {
    return e.replaceAll("-", "_");
}
const _e = {
    invalid_plugin_id: "validation",
    plugin_folder_held: "validation",
    marketplace_policy_blocked: "policy",
    plugin_policy_blocked: "policy",
    dependency_policy_blocked: "policy",
    directory_unavailable: "network",
    directory_off: "validation",
    directory_not_in_session: "validation",
    installed_from_other_marketplace: "validation",
    dependency_pinned_version_unsatisfied: "validation",
    directory_listing_not_installable: "validation",
    directory_identity_changed: "validation",
    directory_binding_unreadable: "validation",
    replace_unavailable: "validation",
    replace_needs_full_id: "validation",
    replace_needs_fresh_listing: "network",
    install_records_unreadable: "validation",
    not_installed: "validation",
    not_installed_at_scope: "validation",
    already_in_goal_state: "validation",
    settings_still_on: "validation"
};
const ke = {
    install: "claude plugin install failed with an unclassified error",
    uninstall: "claude plugin uninstall failed with an unclassified error",
    enable: "claude plugin enable failed with an unclassified error",
    disable: "claude plugin disable failed with an unclassified error",
    "disable-all": "claude plugin disable --all failed with an unclassified error",
    update: "claude plugin update failed with an unclassified error",
    prune: "claude plugin prune failed with an unclassified error"
};
function G(e, n) {
    if (n.length === 0) {
        return e;
    }
    return [
        e.trimEnd(),
        ...n
    ].join(`
`);
}
async function XBe(e, n, r, p, f, o, m = []) {
    let u = e instanceof nee ? e.result.failureCode : undefined;
    let g = w4(e);
    let s = g === "unknown" && u !== undefined ? _e[u] ?? g : g;
    let command = n === "disable-all" ? "disable" : n === "prune" ? undefined : n;
    if (f && command) {
        let C = e instanceof nee ? e.result : {};
        await rfe({
            command,
            outcome: "failed",
            ...n === "disable-all" ? {
                all: true
            } : {
                plugin: r
            },
            pluginId: C.pluginId ?? f.pluginId ?? o,
            scope: f.scope,
            message: gc(G(l(e), m)),
            failureCode: ie(e, n),
            alreadyInGoalState: C.alreadyInGoalState,
            installedScope: C.installedScope,
            reverseDependents: C.reverseDependents,
            dependencies: C.dependencies,
            disableFirst: C.disableFirst,
            governingScope: C.governingScope,
            shownCommand: f.shownCommand && aIr(f.shownCommand)
        });
    }
    if (e instanceof Jl && (n === "install" || n === "update")) {
        console.error(gc(G(l(e), m)));
        if (n === "install") {
            let { code, kind } = vKe(e);
            if (kind === "bad") {
                await Ft("cli_plugin_install", code);
            } else {
                await za("cli_plugin_install", code);
            }
        } else if (n === "update") {
            await za("cli_plugin_update", ie(e, "update"));
        }
        await ZL();
        process.exit(1);
    }
    let S = e instanceof Sx ? `claudeai_${e.code}` : undefined;
    if (s === "unknown" && !(e instanceof nee) && S === undefined) {
        c(ot(W(e), ke[n]));
    } else {
        t(`Plugin command "${n}" failed: ${l(e)}`, {
            level: "error"
        });
    }
    let w = r ? `${n} plugin "${r}"` : n === "disable-all" ? "disable all plugins" : `${n} plugins`;
    console.error(gc(G(`${te.cross} Failed to ${w}: ${l(e)}`, m)));
    let y = S ?? (u !== undefined && (g === "unknown" || u === "not_installed") ? u : le(s));
    switch(n){
        case "install":
            await Ft("cli_plugin_install", y);
            break;
        case "uninstall":
            await Ft("cli_plugin_uninstall", y);
            break;
        case "update":
            await Ft("cli_plugin_update", y);
            break;
        case "enable":
            await Ft("cli_plugin_enable", "cli_plugin_enable_failed");
            break;
        default:
            break;
    }
    let P = r ? await hfe(o ?? r, Wu(), p) : {};
    await js("tengu_plugin_command_failed", {
        command: d(n),
        error_category: d(s),
        ...{
            failure_code: pe(u)
        },
        ...P,
        ...o !== undefined ? {
            aliased_id: true
        } : {}
    });
    await ZL();
    process.exit(1);
}
function re(e, n, r = "") {
    let p = {};
    for (let m of e){
        let { key, raw } = M(m);
        let s = Et(`${r}${key}`);
        let h = (raw.split(/\r\n|\r|\n/, 1)[0] ?? "").trim();
        let S = Object.hasOwn(n, key) ? n[key] : undefined;
        if (!S) {
            let w = Object.keys(n).map((y)=>Et(`${r}${y}`));
            throw Error(`--config key "${s}" isn't declared in this plugin's userConfig.` + (w.length > 0 ? ` Known keys: ${w.join(", ")}.` : ""));
        }
        if (h === "") {
            throw Error(`--config ${s}: value is empty. Omit the flag to leave "${s}" unset.`);
        }
        if (S.type === "number") {
            let w = Number(h);
            if (Number.isNaN(w)) {
                throw Error(`--config ${s}: "${h}" is not a number`);
            }
            p[key] = w;
        } else if (S.type === "boolean") {
            let w = mze(h);
            if (w === undefined) {
                throw Error(`--config ${s}: "${h}" is not a boolean (use true/false, 1/0, yes/no, on/off)`);
            }
            p[key] = w;
        } else {
            p[key] = h;
        }
    }
    let f = Av(n, (m, u)=>Object.hasOwn(p, u));
    let o = n5(p, f);
    if (!o.valid) {
        throw Error(`--config validation failed: ${o.errors.map((m)=>Et(m)).join("; ")}`);
    }
    return p;
}
async function ve(e, n, r) {
    sc(r);
    let { enabled, disabled } = await eS(r);
    let o = Krt([
        ...enabled,
        ...disabled
    ], e);
    let m = n ?? [];
    let u = m.length > 0;
    if (!o) {
        if (u) {
            throw Error(`--config was given but plugin "${e}" failed to load after install \u2014 run \`claude plugin list\` to see why.`);
        }
        return "";
    }
    let userConfig = o.manifest.userConfig;
    let s = userConfig && Object.keys(userConfig).length > 0 ? userConfig : undefined;
    let h = m.map(M).some(({ key })=>!(s && Object.hasOwn(s, key)));
    let { local, remoteCount } = Z(o);
    let { bundles, unreadable } = local.length > 0 && (o.enabled || h) ? await Q(o, local, r) : {
        bundles: [],
        unreadable: []
    };
    let C = {
        unreadable,
        remoteCount
    };
    if (u) {
        if (!s && bundles.length === 0) {
            throw Error(`--config was given but plugin "${e}" declares no userConfig options` + (local.length > unreadable.length ? " and its bundled MCP servers declare no user_config." : ".") + L(C));
        }
        let { pluginPairs, bundlePairs } = V(m, s, bundles, C);
        let U = s && pluginPairs.length > 0 ? re(pluginPairs, s) : undefined;
        let he = bundles.flatMap((bundle_1)=>{
            let F = bundlePairs.get(bundle_1.serverName);
            if (F) {
                return [
                    {
                        bundle: bundle_1,
                        values: re(F, bundle_1.schema, `${bundle_1.serverName}.`)
                    }
                ];
            }
            return [];
        });
        if (s && U) {
            await ZTe(rm(o), U, s, r);
        }
        for (let { bundle, values } of he){
            await qrt(o.repository, bundle.serverName, values, bundle.schema, r);
            bundle.existingConfig = await Mye(o.repository, bundle.serverName) ?? {};
        }
    }
    let k = [];
    if (s) {
        let R = Object.keys(await eAe(o));
        if (R.length > 0) {
            let T = R.filter((U)=>s[U]?.required === true);
            k.push(`${R.length} userConfig ${I(R.length, "option")} not yet set` + (T.length > 0 ? ` (${T.length} required)` : "") + ` \u2014 run /plugin configure ${e} in Claude Code, or pass --config KEY=VALUE.`);
        }
    }
    if (o.enabled) {
        for (let R of bundles){
            let T = ee(R, o.name);
            if (T) {
                k.push(T);
            }
        }
    }
    return k.join(`
`);
}
async function de(e, n, { yes = false, acceptedCommand, acceptCommand, onShown, storageV5 } = {}) {
    if (typeof n.source !== "object" || n.source.source !== "command") {
        return;
    }
    if (zx()) {
        Ar(`${P5}
`);
        return;
    }
    if (n.source.mode === "link" && O() === "windows") {
        Ar(`${MAt}
`);
        return;
    }
    let command = n.source.command;
    let g = IL(n.source);
    if (acceptedCommand === g && !wKe()) {
        return;
    }
    let s = {
        kind: "command_source",
        pluginId: e,
        command,
        mode: n.source.mode === "link" ? "link" : "copy",
        catalogRevision: await se(e, storageV5)
    };
    onShown?.({
        ...q(s, acceptCommand),
        ...acceptedCommand !== undefined && {
            previousAcceptance: acceptedCommand !== g ? "changed" : "unreliable"
        }
    });
    let { name, marketplace } = vn(e);
    let w = Et(name ?? "", 200);
    let y = Et(marketplace ?? "", 200);
    let P = `"${w}" is installed by running a command from marketplace "${y}" on this machine` + (acceptedCommand === undefined ? "" : acceptedCommand !== g ? " — and that command (or how its output is used) CHANGED since you accepted it" : " — your earlier acceptance is recorded where it cannot be relied on (a plugins root inside a workspace, on a network location, or one that could not be resolved), so please confirm it again") + `:
  ${command}
  (${N5t(n.source)})
`;
    Ar(P);
    let C = await z({
        yes,
        acceptCommand,
        shown: s,
        disclosure: P
    });
    switch(C){
        case "accepted":
            return {
                kind: "accepted",
                grantKey: g
            };
        case "declined":
            return {
                kind: "declined"
            };
        default:
            return undefined;
    }
}
async function z({ yes = false, acceptCommand, shown, disclosure = "" }) {
    let f = process.stdout.isTTY && process.stdin.isTTY;
    if (yes || shown !== undefined && Y(acceptCommand, shown)) {
        if (!$kt()) {
            return "accepted";
        }
        if (!f) {
            Ar(`${yes ? "-y/--yes" : "--accept-command"} is ignored inside a Claude Code session: run this in your own terminal to accept the command shown above.
`);
            return "unconfirmed";
        }
    }
    if (!f && acceptCommand !== undefined && shown !== undefined && !Y(acceptCommand, shown)) {
        Ar(`--accept-command does not name the command shown above (it may have changed since it was shown), so it was not run. Show it to the person again before accepting it.
`);
        return "unconfirmed";
    }
    if (!f) {
        Ar($kt() ? `Not an interactive terminal, so the command was only displayed, not accepted. Run this in your own terminal (outside the Claude Code session) to confirm the command shown above.
` : `Not an interactive terminal, so the command was only displayed, not accepted. Re-run in a terminal to confirm it, or pass -y/--yes to accept the command shown above.
`);
        return "unconfirmed";
    }
    if (await Lje("Run this command now?", process.stdin, {
        ignoreAnswersWithinMs: bJe,
        reaskPreamble: disclosure
    })) {
        return "accepted";
    }
    return "declined";
}
async function UOo(e, n = {}, r) {
    if (A$e(e) !== null) {
        return null;
    }
    let { name, marketplace } = vn(e);
    if (!name) {
        return null;
    }
    let o = marketplace ?? n.resolvedMarketplace;
    if (!o) {
        try {
            o = (await xKn(name, r))?.marketplace;
        } catch (error) {
            if (error instanceof Jl) {
                return null;
            }
            throw error;
        }
    }
    if (!o) {
        return null;
    }
    let m = `${name}@${o}`;
    if (await WMr(m, n.scope ?? "user", r)) {
        return null;
    }
    let u = await Fft(m, undefined, r);
    if (u === null) {
        return null;
    }
    let g = `${RKn(u)}
`;
    Ar(g);
    let s = await ae(u, m, r);
    n.onShown?.(q(s, n.acceptCommand));
    let h = await z({
        yes: n.yes,
        acceptCommand: n.acceptCommand,
        shown: s,
        disclosure: g
    });
    if (h === "accepted") {
        return u;
    }
    return h;
}
async function BOo(e, n = {}, r) {
    if (A$e(e) !== null) {
        return;
    }
    let { name, marketplace } = vn(e);
    if (!name) {
        return;
    }
    let o = await Dl(r);
    let m = marketplace;
    let entry;
    if (!m) {
        let k;
        try {
            k = await xKn(name, r);
        } catch (error) {
            if (error instanceof Jl) {
                return;
            }
            throw error;
        }
        if (!k) {
            return;
        }
        m = k.marketplace;
        entry = k.entry;
        n.onResolvedMarketplace?.(m);
    }
    let g = Ay(o, m);
    if (RB(g?.source)) {
        return;
    }
    let s = `${name}@${m}`;
    let h = entry && n.acceptCommand === undefined ? {
        entry
    } : undefined;
    if (!h) {
        let k = await Lft(m, g, r);
        n.onMarketplaceRefreshResult?.(k);
        try {
            h = await m2(s, r);
        } catch (error) {
            if (error instanceof Jl) {
                return;
            }
            throw error;
        }
    }
    let S = h ? are(h.entry.source) : undefined;
    if (!h || !S) {
        return;
    }
    let w = (j() && r !== undefined ? await Tu(r) : wm()).plugins[s] ?? [];
    let y = IL(S);
    let P = !wKe();
    let C = P && w.some((k)=>k.sourceCommand === y);
    if (await BAn(s, n.scope ?? "user", r)) {
        if (!C) {
            let k = w.every((R)=>R.sourceCommand === undefined);
            Ar(`"${Et(vn(s).name ?? "", 200)}" is already installed, and its marketplace ` + (k ? "entry now installs it by running a command on this machine that has not been reviewed yet." : "has since changed the command that installs it (or how its output is used).") + ` Review and accept it: ${Pg("plugin update", s, {
                extra: (n.scope ?? "user") === "user" ? undefined : `--scope ${n.scope}`,
                fallback: "an explicit plugin update reviews it"
            })}.
`);
        }
        return;
    }
    if (C) {
        return {
            kind: "accepted",
            grantKey: y
        };
    }
    return de(s, h.entry, {
        yes: n.yes,
        acceptedCommand: P ? w.find((k)=>k.sourceCommand !== undefined)?.sourceCommand : undefined,
        acceptCommand: n.acceptCommand,
        onShown: n.onShown,
        storageV5: r
    });
}
async function jOo(e, n = "user", r, shownSourceCommand, shownEntryHelper, o, announceRefreshResult, u = {}) {
    let g = [];
    try {
        let s = await j9e(u.resolvedPlugin ?? e, n, {
            shownSourceCommand,
            shownEntryHelper,
            announceRefreshResult,
            replaceInstalledCopy: u.replaceInstalledCopy,
            npmRegistry: u.npmRegistry,
            gitHubHttpsFallback: z8o((C)=>{
                g.push(C);
            })
        }, o);
        if (!s.success) {
            throw new nee(s.message, s);
        }
        let h = s.pluginId || e;
        let S = s.scope || n;
        i("tengu_plugin_installed_cli", {
            ...await hfe(h, Wu(), o),
            plugin_id: Bne(h),
            scope: d(S),
            install_source: b("cli-explicit"),
            ...JTt(h, par(h, {
                scope: S
            })),
            ...k3t({
                pluginId: h,
                surface: "cli",
                replaced: s.switched !== undefined
            }),
            ...s.aliasedId ? {
                aliased_id: true,
                ...s.reenabled && {
                    reenabled: true
                }
            } : {}
        });
        let w = "";
        let configApplied = r && r.length > 0 ? true : undefined;
        try {
            if (s.nothingWritten) {
                if (configApplied) {
                    w = `${te.warning} --config values were not saved, because this command changed nothing. To set them, run /plugin configure ${s.pluginId || e} in Claude Code.`;
                    configApplied = false;
                }
            } else {
                w = await ve(s.pluginId || e, r, o);
            }
        } catch (error) {
            let k = l(error);
            t(`post-install userConfig step failed: ${k}`, {
                level: "warn"
            });
            if (r && r.length > 0) {
                w = `${te.warning} Installed, but --config not applied: ${k}`;
                configApplied = false;
            }
        }
        let P = vin([
            s.message,
            ...g,
            ...w ? [
                w
            ] : []
        ].join(`
`), s.scope ?? n);
        if (u.json) {
            await rfe({
                command: "install",
                outcome: "ok",
                plugin: e,
                pluginId: s.pluginId,
                scope: s.scope || n,
                message: gc(P),
                configApplied,
                installedVersion: s.installedVersion,
                availableVersion: s.availableVersion
            });
        }
        return P;
    } catch (error) {
        return XBe(error, "install", e, o, u.json ? {
            scope: n,
            shownCommand: u.shownCommand
        } : undefined, error instanceof nee && error.result.aliasedId ? error.result.pluginId : undefined, g);
    }
}
async function ue(e, n) {
    let r = Wwe(e);
    let { enabled, disabled } = await Ys(j() ? n : undefined);
    return U8o((j() && n !== undefined ? await Tu(n) : wm()).plugins, [
        ...enabled,
        ...disabled
    ], e, r);
}
async function H0t(e, n, r, { unlessNamedInSettings = false, unlessDirectoryNameHeld = false } = {}) {
    {
        let o = await xtt(e, r);
        if (o && !(unlessNamedInSettings && p0o(e))) {
            if (unlessDirectoryNameHeld && s_(e)) {
                let u = await Une().catch(()=>{});
                if (u === undefined || uce(u) || wT(u.keys(), e).length > 0) {
                    return {
                        plugin: e,
                        aliased: false
                    };
                }
            }
            let m = o.installed.pluginId;
            if (!n) {
                Ar(`${Nn(`"${je(e, 120)}" is installed as ${m} (the same plugin from ${e8(vn(m).marketplace ?? "")}).`)}
`);
            }
            return {
                plugin: m,
                aliased: true
            };
        }
    }
    return {
        plugin: e,
        aliased: false
    };
}
async function WOo(e, n = "user", r = false, p = false, yes = false, o, m = {}) {
    let u = {
        plugin: e,
        aliased: false
    };
    try {
        u = await H0t(e, m.json, o, {
            unlessDirectoryNameHeld: true
        });
        let g = await iie(u.plugin, n, !r, o);
        if (!g.success) {
            throw new nee(g.message, g);
        }
        await js("tengu_plugin_uninstalled_cli", {
            ...await hfe(g.pluginId || u.plugin, Wu(), o),
            scope: d(g.scope || n),
            ...u.aliased ? {
                aliased_id: true
            } : {},
            ...g.savedKept !== undefined && {
                saved_kept: true
            }
        });
        let s = false;
        let h = async (S)=>{
            if (m.json) {
                await rfe({
                    command: "uninstall",
                    outcome: "ok",
                    plugin: e,
                    pluginId: g.pluginId,
                    scope: g.scope || n,
                    keptData: g.dataDirKept ?? r,
                    ...g.savedKept !== undefined && {
                        savedKept: g.savedKept.reason
                    },
                    message: gc(S)
                });
            }
            return S;
        };
        try {
            let S = await ue(n, o);
            if (p) {
                Ar(`${te.tick} ${Nn(g.message)}
`);
                s = true;
                return await ce(S, n, {
                    dryRun: false,
                    yes,
                    deleteDataDir: !r
                }, o);
            }
            return h(g.message + B8o(S.orphans, n));
        } catch (error) {
            c(ot(W(error), "claude plugin uninstall: post-uninstall orphan scan or prune failed"));
            let y = `(${p ? "prune" : "orphan scan"} failed: ${l(error)})`;
            if (s) {
                return y;
            }
            let P = p ? `${te.tick} ${g.message}` : g.message;
            return h(`${P}
${y}`);
        }
    } catch (error) {
        return XBe(error, "uninstall", e, o, m.json ? {
            scope: n
        } : undefined, u.aliased ? u.plugin : undefined);
    }
}
async function zOo(e = "user", { dryRun = false, yes = false } = {}, p) {
    try {
        let f = await ue(e, p);
        return await ce(f, e, {
            dryRun,
            yes,
            deleteDataDir: true
        }, p);
    } catch (error) {
        return XBe(error, "prune");
    }
}
async function ce(e, n, r, p) {
    if (e.unloadable.length > 0) {
        return `Skipped \u2014 cannot determine orphans: ${e.unloadable.map(Nn).join(", ")} failed to load. Fix or uninstall, then retry.`;
    }
    if (e.orphans.size === 0) {
        if (e.autoCount === 0) {
            return `Nothing to prune (no auto-installed plugins at ${n} scope).`;
        }
        return `Nothing to prune (${e.autoCount} auto-installed ${I(e.autoCount, "plugin", "plugins")} at ${n} scope, all still needed).`;
    }
    let plugins = (j() && p !== undefined ? await Tu(p) : wm()).plugins;
    let o = Wwe(n);
    let m = [
        ...e.orphans
    ].map((s)=>{
        let h = FC(plugins[s], n, o);
        return `  ${Nn(s)}${h?.version ? ` (${Nn(h.version)})` : ""}`;
    });
    let u = `${e.orphans.size} auto-installed ${I(e.orphans.size, "plugin", "plugins")} no longer needed at ${n} scope:
${m.join(`
`)}`;
    if (r.dryRun) {
        return `${u}
(dry run \u2014 nothing removed)`;
    }
    if (!r.yes) {
        if (!process.stdin.isTTY || !process.stdout.isTTY) {
            let h = n === "user" ? "" : ` --scope ${n}`;
            return `${u}
Not a TTY \u2014 run \`claude plugin prune${h} -y\` to remove.`;
        }
        Ar(`${u}
`);
        if (!await Lje("Remove?")) {
            return "Aborted.";
        }
    }
    let g = await G7o(e.orphans, n, o, {
        deleteDataDir: r.deleteDataDir
    }, p);
    await js("tengu_plugin_prune_cli", {
        scope: d(n),
        removed_count: g.length
    });
    return `Removed ${g.length} auto-installed ${I(g.length, "plugin", "plugins")}: ${g.map((s)=>Nn(vn(s).name)).join(", ")}`;
}
async function GOo(e, n, r, p = {}) {
    let f = {
        plugin: e,
        aliased: false
    };
    try {
        f = await H0t(e, p.json, r, {
            unlessNamedInSettings: true
        });
        let o = await W9e(f.plugin, n, r);
        if (!o.success) {
            throw new nee(o.message, o);
        }
        await js("tengu_plugin_disabled_cli", {
            ...await hfe(o.pluginId || f.plugin, Wu(), r),
            scope: pe(o.scope),
            ...f.aliased ? {
                aliased_id: true
            } : {}
        });
        let m = vin(o.message, o.scope ?? n);
        if (p.json) {
            await rfe({
                command: "disable",
                outcome: "ok",
                plugin: e,
                pluginId: o.pluginId,
                scope: o.scope ?? n,
                message: gc(m)
            });
        }
        return `${te.tick} ${m}`;
    } catch (error) {
        return XBe(error, "disable", e, r, p.json ? {
            scope: n
        } : undefined, f.aliased ? f.plugin : undefined);
    }
}
async function VOo(e, n = {}) {
    try {
        let r = await f0o(e);
        if (!r.success) {
            throw new nee(r.message, r);
        }
        await js("tengu_plugin_disabled_all_cli", {});
        if (n.json) {
            await rfe({
                command: "disable",
                outcome: "ok",
                all: true,
                message: gc(r.message)
            });
        }
        return `${te.tick} ${r.message}`;
    } catch (error) {
        return XBe(error, "disable-all", undefined, undefined, n.json ? {} : undefined);
    }
}
async function qOo(e, n, { yes = false, json = false, acceptCommand } = {}, o) {
    let m;
    let shownCommand;
    let g = {
        plugin: e,
        aliased: false
    };
    try {
        g = await H0t(e, json, o);
        if (!json) {
            Ar(`${Nn(`Checking for updates for plugin "${g.plugin}"${n ? ` at ${n} scope` : ""}\u2026`)}
`);
        }
        let s = await z9e(g.plugin, n, {
            explicit: true,
            onEntryHelperDisclosure: async (w, y, P)=>{
                Ar(`${w}
`);
                let C = await ae(y, P, o);
                let k = await z({
                    yes,
                    acceptCommand,
                    shown: C,
                    disclosure: `${w}
`
                });
                shownCommand = k === "accepted" ? undefined : q(C, acceptCommand);
                return k;
            },
            announceCommandSource: async (w, y, acceptedCommand)=>{
                let C = await de(w, y, {
                    yes,
                    acceptedCommand,
                    acceptCommand,
                    onShown: (k)=>{
                        shownCommand = k;
                    },
                    storageV5: o
                });
                if (C?.kind === "accepted") {
                    shownCommand = undefined;
                }
                if (C?.kind === "declined") {
                    throw new Jl("Aborted — the command was not run.", "plugin command source declined at the prompt");
                }
                return C?.grantKey;
            }
        }, o);
        let message = Nn(s.message);
        m = s.pluginId;
        let { outcome } = s;
        if (outcome === "failed") {
            if (s.failureCode !== undefined && u0o(s.failureCode)) {
                throw new Jl(message, `${I3t}${s.failureCode}`);
            }
            throw new nee(message, {
                failureCode: s.failureCode,
                pluginId: s.pluginId
            });
        }
        if (json) {
            await rfe({
                command: "update",
                outcome: "ok",
                plugin: e,
                pluginId: s.pluginId,
                scope: s.scope ?? n,
                message,
                updateOutcome: outcome,
                oldVersion: s.oldVersion,
                newVersion: s.newVersion,
                skipReason: s.skipReason,
                blockedBy: s.blockedBy,
                refreshFailed: s.refreshFailed,
                refreshRefusedByPolicy: s.refreshRefusedByPolicy
            });
        } else {
            if (s.folderNote !== undefined) {
                Ar(`${Nn(s.folderNote)}
`);
            }
            Ar(`${te.tick} ${message}
`);
        }
        if (s.outcome === "updated") {
            let w = s.pluginId || g.plugin;
            i("tengu_plugin_updated_cli", {
                ...await hfe(w, Wu(), o),
                old_version: Ci(s.oldVersion),
                new_version: Ci(s.newVersion),
                ...JTt(w, s.gitCommitSha),
                ...g.aliased ? {
                    aliased_id: true
                } : {}
            });
        }
        if (g.aliased) {
            await Ur("cli_plugin_update", {
                aliased_id: true
            });
        } else {
            await Ur("cli_plugin_update");
        }
        await Zn(0);
    } catch (error) {
        return XBe(error, "update", e, o, json ? {
            scope: n,
            pluginId: m,
            shownCommand
        } : undefined, g.aliased ? g.plugin : undefined);
    }
}
const $schema = "https://anthropic.com/claude-code/plugin.schema.json";
const D0t = [
    "skills",
    "agents",
    "hooks",
    "mcp",
    "lsp",
    "output-style",
    "channel"
];
function KOo(e) {
    let n = G8().shape.name.safeParse(e);
    if (!n.success) {
        return n.error.issues[0]?.message ?? null;
    }
    if (e.includes("/") || e.includes("\\") || e.includes("..") || e === ".") {
        return 'Plugin name cannot contain path separators (/ or \\), ".." sequences, or be "."';
    }
    if (!DRt(e) || cV(e) || B4(e)) {
        return `Plugin name cannot be "${xB}" or start with "." \u2014 those directories are never loaded as plugin adoptions`;
    }
    let p = lWe(e);
    if (p?.severity === "error") {
        return p.message;
    }
    return null;
}
function YOo(e) {
    let { name, description, author } = e;
    let f = e.with ?? [];
    let o = [];
    let m = {
        $schema,
        name,
        version: "0.1.0",
        description: description ?? "TODO: describe what this plugin provides"
    };
    if (author) {
        m.author = author;
    }
    m.skills = [
        "./"
    ];
    o.push({
        relPath: join(".claude-plugin", "plugin.json"),
        contents: _(m, null, 2) + `
`
    });
    o.push({
        relPath: "SKILL.md",
        contents: ge(name)
    });
    if (f.includes("skills")) {
        o.push({
            relPath: join("skills", "example", "SKILL.md"),
            contents: ge("example")
        });
    }
    if (f.includes("agents")) {
        o.push({
            relPath: join("agents", "example.md"),
            contents: Oe()
        });
    }
    if (f.includes("hooks")) {
        o.push({
            relPath: join("hooks", "hooks.json"),
            contents: Ne()
        }, {
            relPath: join("hooks-handlers", "on-session-start.ts"),
            contents: De(),
            mode: 493
        });
    }
    if (f.includes("mcp") && !f.includes("channel")) {
        o.push({
            relPath: ".mcp.json",
            contents: xe()
        });
    }
    if (f.includes("lsp")) {
        o.push({
            relPath: ".lsp.json",
            contents: Te()
        });
    }
    if (f.includes("output-style")) {
        o.push({
            relPath: join("output-styles", `${name}.md`),
            contents: Ae(name)
        });
    }
    if (f.includes("channel")) {
        m.channels = [
            {
                server: name,
                displayName: name
            }
        ];
        o.push({
            relPath: ".mcp.json",
            contents: Ue(name)
        }, {
            relPath: "server.ts",
            contents: Le(name)
        }, {
            relPath: "package.json",
            contents: Fe(name)
        });
    }
    o[0].contents = _(m, null, 2) + `
`;
    return o;
}
async function XOo(e, n, r) {
    let p = resolve(e);
    if (!r.force) {
        try {
            await mkdir(join(p, ".claude-plugin"));
        } catch (error) {
            if (v(error) === "EEXIST") {
                return {
                    ok: false,
                    error: `${join(p, ".claude-plugin")} already exists. Use --force to overwrite.`
                };
            }
            if (v(error) !== "ENOENT") {
                throw error;
            }
        }
    }
    let skipped = [];
    for (let o of n){
        let m = resolve(p, o.relPath);
        let u = relative(p, m);
        if (u.startsWith(`..${sep}`) || u === "..") {
            return {
                ok: false,
                error: `Refusing to write outside ${p}: ${o.relPath}`
            };
        }
        await mkdir(dirname(m), {
            recursive: true
        });
        if (r.force) {
            await En(m, o.contents, o.mode);
        } else {
            try {
                await writeFile(m, o.contents, {
                    flag: "wx",
                    mode: o.mode
                });
            } catch (error) {
                if (v(error) !== "EEXIST") {
                    throw error;
                }
                skipped.push(o.relPath);
            }
        }
    }
    return {
        ok: true,
        skipped
    };
}
function ge(e) {
    return `---
name: ${e}
description: TODO \u2014 describe WHEN Claude should use this. Include trigger phrases users
  might say ("do X", "set up Y", "review Z"). Be specific; this string is what Claude
  matches the user's request against.
---

# ${e}

TODO: what this skill does, and the steps Claude should take.
`;
}
function Oe() {
    return `---
name: example
description: TODO \u2014 when should Claude delegate to this subagent?
tools:
  - Read
  - Grep
---

TODO: system prompt for the subagent.
`;
}
function Ne() {
    return _({
        hooks: {
            SessionStart: [
                {
                    hooks: [
                        {
                            type: "command",
                            command: 'bun "${CLAUDE_PLUGIN_ROOT}/hooks-handlers/on-session-start.ts"'
                        }
                    ]
                }
            ]
        }
    }, null, 2) + `
`;
}
function De() {
    return `#!/usr/bin/env bun
// SessionStart hook handler. Reads the event from stdin, writes a JSON result
// to stdout. Swap "bun" for "node" or "python3" in hooks/hooks.json if your
// users' environment lacks bun.
const input = await new Response(Bun.stdin.stream()).text()
const event = JSON.parse(input)
process.stdout.write(JSON.stringify({}))
`;
}
function xe() {
    return _({
        mcpServers: {
            "example-remote": {
                type: "http",
                url: "https://example.com/mcp"
            },
            "example-local": {
                command: "npx",
                args: [
                    "<your-mcp-server-package>"
                ]
            }
        }
    }, null, 2) + `
`;
}
function Te() {
    return _({
        example: {
            command: "example-language-server",
            args: [
                "--stdio"
            ],
            extensionToLanguage: {
                ".example": "example"
            }
        }
    }, null, 2) + `
`;
}
function Ae(name) {
    return `---
name: ${name}
description: TODO \u2014 one line shown in the Output style picker in /config
force-for-plugin: true
keep-coding-instructions: true
---

TODO: the style prompt. This is appended to Claude's system prompt while the
style is active. With force-for-plugin: true, the style applies automatically
when this plugin is enabled.
`;
}
function Ue(name) {
    return _({
        mcpServers: {
            [name]: {
                command: "bun",
                args: [
                    "run",
                    "--cwd",
                    "${CLAUDE_PLUGIN_ROOT}",
                    "--shell=bun",
                    "--silent",
                    "start"
                ]
            }
        }
    }, null, 2) + `
`;
}
function Fe(name) {
    return _({
        name: `claude-channel-${name}`,
        version: "0.1.0",
        type: "module",
        scripts: {
            start: "bun install --no-summary && bun server.ts"
        },
        dependencies: {
            "@modelcontextprotocol/sdk": "^1.0.0"
        }
    }, null, 2) + `
`;
}
function Le(name) {
    return `#!/usr/bin/env bun
/**
 * ${name} channel server \u2014 stdio MCP server implementing the channel contract.
 * See https://code.claude.com/docs/en/channels-reference.
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

const mcp = new Server(
  { name: '${name}', version: '0.1.0' },
  {
    capabilities: {
      tools: {},
      // Required: presence of this key registers the channel notification
      // listener on Claude's side.
      experimental: { 'claude/channel': {} },
    },
    instructions:
      "Events from ${name} arrive as <channel source=\\"${name}\\" ...>. Anything " +
      "you want the sender to see must go through the reply tool \u2014 your " +
      "transcript output never reaches the channel.",
  },
)

mcp.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'reply',
      description: 'Send a message back to the ${name} channel.',
      inputSchema: {
        type: 'object',
        properties: { text: { type: 'string' } },
        required: ['text'],
      },
    },
  ],
}))

mcp.setRequestHandler(CallToolRequestSchema, async req => {
  const args = (req.params.arguments ?? {}) as Record<string, unknown>
  if (req.params.name === 'reply') {
    // TODO: deliver args.text to the external service.
    return { content: [{ type: 'text', text: 'sent' }] }
  }
  return { content: [{ type: 'text', text: 'unknown tool' }], isError: true }
})

// TODO: when the external service has an inbound event, push it to Claude:
//
//   await mcp.notification({
//     method: 'notifications/claude/channel',
//     params: {
//       content: 'the event body',
//       meta: { chat_id: '...', sender: '...' },
//     },
//   })
//
// Each meta key becomes an attribute on the <channel> tag. Keys must be
// identifiers (letters/digits/underscores) \u2014 others are silently dropped.

await mcp.connect(new StdioServerTransport())
`;
}
export { vin, iIr, nee, aIr, rfe, $Oo, FOo, lIr, XBe, UOo, BOo, jOo, H0t, WOo, zOo, GOo, VOo, qOo, D0t, KOo, YOo, XOo };
