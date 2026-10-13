import { b, d, kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { VPe, ot, l, v, Vr, Ym, z, H9, jt, hy, Nf } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { q, B, K, Ip, Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Zh, QS, oO, _Re, Ci, gz, c1, Ae } from "/$bunfs/root/chunk-0ycjphb5.js";
import { _, ie, OH, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { Ar } from "/$bunfs/root/chunk-24agvrd9.js";
import { Tt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { $u, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { wn, T8, ty } from "/$bunfs/root/chunk-6dwnw6av.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { yC, ss, jIs } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { fe, ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Wa } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { tHe } from "/$bunfs/root/chunk-w02k0xx9.js";
import { ERr, nBe, mDt } from "/$bunfs/root/chunk-mj96b6xe.js";
import { an as hard } from "/$bunfs/root/chunk-tsfvfcsw.js";
import { w2, Zn, Ps } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Rqe, R0e } from "/$bunfs/root/chunk-t3a00vfa.js";
import { L2t, N2t } from "/$bunfs/root/chunk-7rmjr2jx.js";
import { K2 } from "/$bunfs/root/chunk-pp9kr3hb.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { access, chmod, writeFile, open, readFile, stat, copyFile, readdir, rename, rm, unlink } from "fs/promises";
import { join, basename, dirname } from "path";
import { existsSync, constants } from "fs";
import { homedir } from "os";
import { randomBytes } from "crypto";
function G() {
    return join(ve(), "local");
}
function de() {
    return join(G(), "claude");
}
function f5o() {
    return (process.argv[1] || "").includes("/.claude/local/node_modules/");
}
async function ue(e, r, mode) {
    try {
        await writeFile(e, r, {
            encoding: "utf8",
            flag: "wx",
            mode
        });
        return true;
    } catch (error) {
        if (v(error) === "EEXIST") {
            return false;
        }
        throw error;
    }
}
async function Xe() {
    try {
        let e = G();
        await ie().mkdir(e);
        await ue(join(e, "package.json"), _({
            name: "claude-local",
            version: "0.0.1",
            private: true
        }, null, 2));
        let r = join(e, "claude");
        if (await ue(r, `#!/bin/sh
exec "${e}/node_modules/.bin/claude" "$@"`, 493)) {
            await chmod(r, 493);
        }
        return true;
    } catch (error) {
        t(`Failed to set up local package environment: ${error}`, {
            level: "error"
        });
        return false;
    }
}
async function jZe(e, r, n) {
    try {
        if (!await Xe()) {
            m("update_apply", "update_apply_env_setup_failed");
            return "install_failed";
        }
        let o = r ? r : e === "stable" ? "stable" : "latest";
        let s = await ct("npm", [
            "install",
            `${{
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.PACKAGE_URL}@${o}`
        ], {
            cwd: G(),
            maxBuffer: 1000000,
            useToolMemoryCgroup: false
        });
        if (s.code !== 0) {
            m("update_apply", "update_apply_local_npm_failed");
            t(`Failed to install Claude CLI package: ${s.stderr}`, {
                level: "error"
            });
            if (s.code === 190) {
                return "in_progress";
            }
            return "install_failed";
        }
        await Ae((u)=>({
                ...u,
                installMethod: "local"
            }), n);
        g("update_apply");
        return "success";
    } catch (error) {
        m("update_apply", "update_apply_local_exception");
        c(error);
        return "install_failed";
    }
}
async function ZMe() {
    try {
        await access(join(G(), "node_modules", ".bin", "claude"));
        return true;
    } catch  {
        return false;
    }
}
function WZe() {
    let e = a.SHELL || "";
    if (e.includes("zsh")) {
        return "zsh";
    }
    if (e.includes("bash")) {
        return "bash";
    }
    if (e.includes("fish")) {
        return "fish";
    }
    return "unknown";
}
const me = /^\s*alias\s+claude\s*=/;
function MGe(e) {
    let r = e?.homedir ?? homedir();
    let n = e?.env ?? process.env;
    let o = e?.platform ?? "linux";
    let s = e?.fileExists ?? existsSync;
    let u = n.ZDOTDIR || r;
    let k = o === "darwin" ? [
        ".bash_profile",
        ".bash_login",
        ".profile"
    ].find((p)=>s(join(r, p))) ?? ".bash_profile" : ".bashrc";
    return {
        zsh: join(u, ".zshrc"),
        bash: join(r, k),
        ...o === "darwin" && {
            bashrc: join(r, ".bashrc")
        },
        fish: join(r, ".config/fish/config.fish")
    };
}
function ctr(e) {
    let hadAlias = false;
    return {
        filtered: e.filter((o)=>{
            if (me.test(o)) {
                let s = o.match(/alias\s+claude\s*=\s*["']([^"']+)["']/);
                if (!s) {
                    s = o.match(/alias\s+claude\s*=\s*([^#\n]+)/);
                }
                if (s && s[1]) {
                    if (s[1].trim() === de()) {
                        hadAlias = true;
                        return false;
                    }
                }
            }
            return true;
        }),
        hadAlias
    };
}
async function qvn(e) {
    try {
        return (await readFile(e, {
            encoding: "utf8"
        })).split(`
`);
    } catch (error) {
        if (jt(error)) {
            return null;
        }
        if (H9(error)) {
            t(`Skipping ${e}: path is a directory`, {
                level: "warn"
            });
            return null;
        }
        throw error;
    }
}
async function dtr(e, r) {
    let n = await open(e, "w");
    try {
        await n.writeFile(r.join(`
`), {
            encoding: "utf8"
        });
        await n.datasync();
    } finally{
        await n.close();
    }
}
const rt = new Set([
    "EBUSY",
    "EOPNOTSUPP",
    "ENOTSUP",
    "ENOMEM",
    "ERR_FS_FILE_TOO_LARGE",
    "ENOTCONN",
    "EHOSTDOWN",
    "EHOSTUNREACH",
    "ETIMEDOUT"
]);
async function A6r(e) {
    let r = MGe(e);
    for (let n of Object.values(r)){
        let o = await qvn(n).catch((s)=>{
            if (Nf(s) || hy(s) || rt.has(v(s) ?? "")) {
                t(`Skipping unreadable shell config ${n} during alias scan: ${l(s)}`, {
                    level: "warn"
                });
                return null;
            }
            throw s;
        });
        if (!o) {
            continue;
        }
        for (let s of o){
            if (me.test(s)) {
                let u = s.match(/alias\s+claude=["']?([^"'\s]+)/);
                if (u && u[1]) {
                    return u[1];
                }
            }
        }
    }
    return null;
}
async function m5o(e) {
    let r = await A6r(e);
    if (!r) {
        return null;
    }
    let n = e?.homedir ?? homedir();
    let o = r.startsWith("~") ? r.replace("~", n) : r;
    try {
        let s = await stat(o);
        if (s.isFile() || s.isSymbolicLink()) {
            return r;
        }
    } catch  {}
    return null;
}
const C = Se(ty(), 1);
function nt(e) {
    if (Rqe(e)) {
        return e.over.promise;
    }
    return Promise.resolve();
}
const he = 2000;
const H = ()=>Math.max(he - (Date.now() - Ip()), 0);
const _e = ()=>H() > 0 || tHe();
const we = 1000;
const ye = ()=>{
    if (tHe()) {
        return Math.max(H(), we);
    }
    return H();
};
async function be() {
    while(_e()){
        await Q(ye());
    }
}
async function xe(e) {
    await be();
    if (wn()) {
        return;
    }
    e.say();
    await e.shutDown().catch((n)=>t(`refusal after the flag fetch hold failed (${l(n)})`, {
            level: "error"
        }));
    e.hard();
}
function mt(e, r, n) {
    if (e.hasHeld && !Ee()) {
        return void xe(n);
    }
    return r();
}
const gt = (e)=>e;
const ke = 1;
async function ltr(e, r) {
    let n;
    for(let o = 1; o <= r.attempts; o++){
        try {
            return await e(AbortSignal.timeout(r.timeoutMs));
        } catch (error) {
            n = error;
            if (o >= r.attempts) {
                break;
            }
            r.onRetry?.(o, error);
            let u = 500 * 3 ** (o - 1);
            await Q(u * (0.75 + Math.random() * 0.5));
        }
    }
    throw n;
}
const wt = "https://downloads.claude.ai/claude-code-releases";
class De extends VPe {
}
function H2t(e) {
    switch(e){
        case "windows_running_exe_lock":
            return "update_apply_exe_locked";
        case "native_binary_missing":
            return "update_apply_native_binary_missing";
        case undefined:
            return null;
    }
}
async function g5o() {
    try {
        let e = R0e();
        await nt(e);
        let r = await c1("tengu_version_config", {
            minVersion: "0.0.0"
        });
        if (r.minVersion && oO({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION, r.minVersion)) {
            let n = He({
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION, r.minVersion);
            mt(e, ()=>yt(r.minVersion), gt({
                say: ()=>{
                    T8();
                    w2(n);
                },
                shutDown: ()=>Zn(ke),
                hard
            }));
        }
    } catch (error) {
        c(error);
    }
}
function yt(minVersion) {
    let message = He({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }.VERSION, minVersion);
    console.error(`
${message}
`);
    if (nBe() && ERr()) {
        try {
            Ar(_(mDt({
                sessionId: K(),
                message,
                reason: "cli_version_too_old",
                resultIndex: null
            })) + `
`);
        } catch (error) {
            t(`[assertMinVersion] startup failure result not written: ${l(error)}`, {
                level: "error"
            });
        }
    }
    Ps(ke);
}
function He(VERSION, minVersion) {
    return `It looks like your version of Claude Code (${VERSION}) needs an update.
A newer version (${minVersion} or higher) is required to continue.

To update, please run:
    claude update

This will ensure you have access to the latest features and improvements.`;
}
const bt = 300000;
class Ve {
    lastAutoUpdateCheckAt = 0;
    updateRestoreFailure = null;
    mintedPreservedInodes = new Set;
}
const vt = new q(()=>new Ve);
function ne() {
    return vt.of(B().host);
}
const xt = 10000;
function C6r() {
    return Math.max(0, xt - process.uptime() * 1000);
}
function zZe() {
    let e = ne();
    let r = Date.now();
    if (r - e.lastAutoUpdateCheckAt < bt) {
        t(`auto-update check throttled (last check ${Math.round((r - e.lastAutoUpdateCheckAt) / 1000)}s ago)`);
        return true;
    }
    e.lastAutoUpdateCheckAt = r;
    return false;
}
async function Kvn() {
    return (await eHe()).maxVersion;
}
async function eHe() {
    let e = await Be();
    let r = false;
    let n = e.external || undefined;
    let maxVersion = n ? C.parse(n)?.version ?? undefined : undefined;
    if (n && !maxVersion) {
        t(`tengu_max_version_config has invalid version '${n}' \u2014 ignoring`, {
            level: "error"
        });
        i("tengu_max_version_config_invalid", {
            raw_value: Ci(n)
        });
    }
    return {
        maxVersion,
        forceDowngradeEnabled: e.external_force_downgrade === true
    };
}
function HGe(e, r, n) {
    let o = n === "native_update" ? "Native installer" : "AutoUpdater";
    let s = C.parse(e);
    if (s && s.compare(r) > 0) {
        t(`${o}: force-downgrade active \u2014 moving from ${e} to ${r}`);
        return true;
    }
    t(`${o}: force-downgrade flag set but current ${e} is not above ${r} \u2014 taking normal upgrade path`);
    return false;
}
async function h5o() {
    return (await Be()).external_message || undefined;
}
async function Be() {
    try {
        return await c1("tengu_max_version_config", {});
    } catch (error) {
        c(error);
        return {};
    }
}
function utr(e) {
    if (!C.parse(e)) {
        t("update target is not a valid semver version — skip checks constrain nothing", {
            level: "error"
        });
        t(`update target (first 300 chars, JSON-encoded): ${OH(JSON.stringify(e.slice(0, 300)))}`);
        return null;
    }
    let r = ft()?.minimumVersion;
    if (r) {
        let o = C.parse(r)?.version;
        if (!o) {
            t(`minimumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${OH(JSON.stringify(r.slice(0, 300)))}`, {
                level: "error"
            });
        } else if (!QS(e, o)) {
            return `below your minimumVersion setting (${r})`;
        }
    }
    let n = fe("policySettings")?.requiredMaximumVersion;
    if (n) {
        let o = C.parse(n)?.version;
        if (!o) {
            t(`requiredMaximumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${OH(JSON.stringify(n.slice(0, 300)))}`, {
                level: "error"
            });
        } else if (!_Re(e, o)) {
            return `above your organization's requiredMaximumVersion (${n})`;
        }
    }
    return null;
}
function DGe(e) {
    let r = utr(e);
    if (r) {
        t(`Skipping update to ${e}: ${r}`);
    }
    return r !== null;
}
const Y = 300000;
function We() {
    return join(ve(), ".update.lock");
}
function ee() {
    return $e.state("update-lock");
}
async function Et(e) {
    let r = ee();
    let n = await e.statMeta(r);
    if (n.ok) {
        if (Date.now() - n.value.mtimeMs < Y) {
            return false;
        }
        let u = await e.statMeta(r);
        if (u.ok) {
            if (Date.now() - u.value.mtimeMs < Y) {
                return false;
            }
            let k = await e.delete(r);
            if (!k.ok) {
                t(`AutoUpdater: failed to remove stale update lock: ${k.error.code}`, {
                    level: "error"
                });
                return false;
            }
        } else if (u.error.code !== "NotFound") {
            t(`AutoUpdater: failed to re-stat stale update lock: ${u.error.code}`, {
                level: "error"
            });
            return false;
        }
    } else if (n.error.code !== "NotFound") {
        t(`AutoUpdater: failed to stat update lock: ${n.error.code}`, {
            level: "error"
        });
        return false;
    }
    let o = await e.write(r, `${process.pid}`, {
        precondition: {
            type: "ifAbsent"
        },
        mode: 438 & ~process.umask()
    });
    if (o.ok) {
        return true;
    }
    if (o.error.code === "AlreadyExists") {
        return false;
    }
    t(`AutoUpdater: failed to create update lock: ${o.error.code}`, {
        level: "error"
    });
    return false;
}
async function Pt(e) {
    if (j() && e) {
        return Et(e);
    }
    let r = ie();
    let n = We();
    try {
        let o = await r.stat(n);
        if (Date.now() - o.mtimeMs < Y) {
            return false;
        }
        try {
            let u = await r.stat(n);
            if (Date.now() - u.mtimeMs < Y) {
                return false;
            }
            await r.unlink(n);
        } catch (error) {
            if (!z(error)) {
                c(error);
                return false;
            }
        }
    } catch (error) {
        if (!z(error)) {
            c(error);
            return false;
        }
    }
    try {
        await writeFile(n, `${process.pid}`, {
            encoding: "utf8",
            flag: "wx"
        });
        return true;
    } catch (error) {
        let s = v(error);
        if (s === "EEXIST") {
            return false;
        }
        if (s === "ENOENT") {
            try {
                await r.mkdir(ve());
                await writeFile(n, `${process.pid}`, {
                    encoding: "utf8",
                    flag: "wx"
                });
                return true;
            } catch (err) {
                if (v(err) === "EEXIST") {
                    return false;
                }
                t(`Failed to create config dir or update lock file: ${err}`, {
                    level: "error"
                });
                return false;
            }
        }
        t(`AutoUpdater: failed to create update lock file ${n}: ${error}`, {
            level: "error"
        });
        return false;
    }
}
async function St(e) {
    if (j() && e) {
        let o = await e.read([
            ee()
        ]);
        if (!o.ok) {
            t(`AutoUpdater: failed to release update lock: ${o.error.code}`, {
                level: "error"
            });
            return;
        }
        let s = o.value.items[0];
        if (!s.found) {
            return;
        }
        if (Buffer.from(s.value).toString("utf8") === `${process.pid}`) {
            let u = await e.delete(ee());
            if (!u.ok) {
                t(`AutoUpdater: failed to release update lock: ${u.error.code}`, {
                    level: "error"
                });
            }
        }
        return;
    }
    let r = ie();
    let n = We();
    try {
        if (await r.readFile(n, {
            encoding: "utf8"
        }) === `${process.pid}`) {
            await r.unlink(n);
        }
    } catch (error) {
        if (z(error)) {
            return;
        }
        t(`AutoUpdater: failed to release update lock file ${n}: ${error}`, {
            level: "error"
        });
    }
}
function oe() {
    let e = process.execPath.replace(/\\/g, "/");
    let r = (a.BUN_INSTALL ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
    if (e.includes("/.bun/install/global/") || r && e.startsWith(`${r}/install/global/`)) {
        return "bun";
    }
    if (a.isRunningWithBun() && !$u()) {
        return "bun";
    }
    return "npm";
}
async function Ke() {
    let e = oe() === "bun";
    let r = null;
    if (e) {
        r = await ct("bun", [
            "pm",
            "bin",
            "-g"
        ], {
            cwd: homedir(),
            useToolMemoryCgroup: false
        });
    } else {
        r = await ct("npm", [
            "-g",
            "config",
            "get",
            "prefix"
        ], {
            cwd: homedir(),
            useToolMemoryCgroup: false
        });
    }
    if (r.code !== 0) {
        t(`Failed to check ${e ? "bun" : "npm"} permissions (exit ${r.code}): ${r.stderr.trim()}`, {
            level: "error"
        });
        return null;
    }
    return r.stdout.trim() || null;
}
async function Rt() {
    let e = await Ke();
    if (!e) {
        return null;
    }
    if (oe() === "bun") {
        let n = join(e, "claude");
        return {
            execPaths: [
                n
            ],
            imagePath: n
        };
    }
    if (O() === "windows") {
        return {
            execPaths: [
                join(e, "claude.cmd"),
                join(e, "claude.exe")
            ],
            imagePath: join(e, "node_modules", {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.PACKAGE_URL, "bin", "claude.exe")
        };
    }
    let r = join(e, "bin", "claude");
    return {
        execPaths: [
            r
        ],
        imagePath: r
    };
}
async function Oe(e) {
    let r = Date.now();
    let n = await Rt();
    let o = e ? C.parse(e)?.version : undefined;
    let s = false;
    let u = false;
    for (let p of n?.execPaths ?? []){
        let w = await ct(p, [
            "--version"
        ], {
            abortSignal: AbortSignal.timeout(45000),
            cwd: homedir(),
            useToolMemoryCgroup: false
        });
        let version = C.parse(w.stdout.trim().split(/\s+/)[0])?.version;
        if (w.code === 0 && version != null && (o != null ? version === o : Zh(version, {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION))) {
            return {
                outcome: "landed",
                version,
                durationMs: Date.now() - r
            };
        }
        if (w.code !== 0) {
            s = true;
            u ||= `${w.stdout}
${w.stderr}`.includes(N2t);
        }
    }
    return {
        outcome: u || s && n !== null && await stat(n.imagePath).then((p)=>p.isFile() && p.size < L2t, ()=>false) ? "placeholder_stub" : "inconclusive",
        durationMs: Date.now() - r
    };
}
async function y5o() {
    try {
        let npmPrefix = await Ke();
        if (!npmPrefix) {
            return {
                hasPermissions: false,
                npmPrefix: null
            };
        }
        try {
            await access(npmPrefix, constants.W_OK);
            return {
                hasPermissions: true,
                npmPrefix
            };
        } catch  {
            t("Insufficient permissions for global npm install.", {
                level: "error"
            });
            return {
                hasPermissions: false,
                npmPrefix
            };
        }
    } catch (error) {
        c(error);
        return {
            hasPermissions: false,
            npmPrefix: null
        };
    }
}
async function GZe(e) {
    let r = e === "stable" ? "stable" : "latest";
    let n = await ct("npm", [
        "view",
        `${{
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.PACKAGE_URL}@${r}`,
        "version",
        "--prefer-online"
    ], {
        abortSignal: AbortSignal.timeout(5000),
        cwd: homedir(),
        useToolMemoryCgroup: false
    });
    if (n.code !== 0) {
        let s = n.stdout.trim();
        if (s && C.parse(s)) {
            f("update_check", "update_check_npm_view_stderr_warning");
            t(`npm view exited ${n.code} but printed a valid version (${s}) \u2014 treating stderr as a warning`);
            if (n.stderr) {
                t(`npm stderr: ${n.stderr.trim()}`);
            }
            return s;
        }
        m("update_check", "update_check_npm_view_failed");
        t(`npm view failed with code ${n.code}`);
        if (n.stderr) {
            t(`npm stderr: ${n.stderr.trim()}`);
        } else {
            t("npm stderr: (empty)");
        }
        if (n.stdout) {
            t(`npm stdout (first 300 chars, JSON-encoded): ${OH(JSON.stringify(n.stdout.trim().slice(0, 300)))}`);
        }
        return null;
    }
    let o = n.stdout.trim();
    if (o && !C.parse(o)) {
        m("update_check", "update_check_npm_view_invalid_stdout");
        t("npm view exited 0 but stdout is not a valid semver version — treating as no result");
        t(`npm stdout (first 300 chars, JSON-encoded): ${OH(JSON.stringify(o.slice(0, 300)))}`);
        return null;
    }
    g("update_check");
    return o || null;
}
const Ie = 5000;
const attempts = 3;
async function ptr(e) {
    if (Tt()) {
        return null;
    }
    let r = 0;
    try {
        let o = (await ltr((signal)=>{
            r++;
            return K2.get(`${wt}/${e}`, {
                timeout: Ie,
                responseType: "text",
                signal
            });
        }, {
            attempts,
            timeoutMs: Ie,
            onRetry: (s, u)=>{
                t(`Failed to fetch ${e} from GCS on attempt ${s}/${attempts}, retrying: ${u}`);
            }
        })).data.trim();
        if (!C.parse(o)) {
            m("update_check", "update_check_gcs_invalid_response");
            t(`GCS ${e} version response is not a valid semver version \u2014 treating as no result`);
            t(`GCS response body (first 300 chars, JSON-encoded): ${OH(JSON.stringify(o.slice(0, 300)))}`);
            return null;
        }
        if (r > 1) {
            f("update_check", "update_check_gcs_retry");
        } else {
            g("update_check");
        }
        return o;
    } catch (error) {
        m("update_check", "update_check_gcs_failed");
        t(`Failed to fetch ${e} from GCS after ${r} attempt(s): ${error}`);
        return null;
    }
}
async function kt(e) {
    if (Tt()) {
        return null;
    }
    try {
        let r = await Wa.get(`https://formulae.brew.sh/api/cask/${e}.json`, {
            timeout: 5000,
            responseType: "json"
        });
        let n = r.data?.version;
        let o = typeof n === "string" ? n.trim() : null;
        if (!o || !C.parse(o)) {
            m("update_check", "update_check_homebrew_invalid_version");
            t(`formulae.brew.sh ${e} version is not a valid semver version \u2014 treating as no result`);
            let s = typeof r.data === "string" ? r.data : String(_(r.data));
            t(`brew response (first 300 chars, JSON-encoded): ${OH(JSON.stringify(s.slice(0, 300)))}`);
            return null;
        }
        g("update_check");
        return o;
    } catch (error) {
        m("update_check", "update_check_homebrew_failed");
        t(`Failed to fetch ${e} from formulae.brew.sh: ${error}`);
        return null;
    }
}
async function D2t(e, r) {
    let [n, o] = await Promise.all([
        kt(e),
        ptr(r)
    ]);
    return n ?? o;
}
function LGe() {
    return ne().updateRestoreFailure;
}
async function $t(e) {
    if (!e.updateRestoreFailure) {
        return;
    }
    if (await ae(e.updateRestoreFailure.originalPath)) {
        e.updateRestoreFailure = null;
        return;
    }
    if (e.updateRestoreFailure.preservedPath !== null) {
        e.updateRestoreFailure = {
            originalPath: e.updateRestoreFailure.originalPath,
            preservedPath: await je(e, e.updateRestoreFailure.preservedPath)
        };
    }
}
function ae(e) {
    return access(e, constants.F_OK).then(()=>true, ()=>false);
}
function Ge() {
    let e = join(dirname(process.execPath), "..", "..");
    return [
        join(e, ".."),
        e
    ];
}
async function Je() {
    return (await Promise.all(Ge().map((r)=>readdir(r, {
            withFileTypes: true
        }).then((n)=>n.filter((o)=>o.isDirectory() && o.name.startsWith(".")).map((o)=>join(r, o.name))).catch(()=>[])))).flat();
}
async function te(e, r) {
    let n = await stat(r, {
        bigint: true
    }).then((o)=>o.ino, ()=>0n);
    return n !== 0n && e.mintedPreservedInodes.has(n);
}
async function je(e, r) {
    if (await te(e, r)) {
        return r;
    }
    let n = basename(r);
    let o = (await Je()).flatMap((s)=>[
            join(s, n),
            join(s, "bin", n)
        ]);
    for (let s of o){
        if (await te(e, s)) {
            return s;
        }
    }
    return null;
}
async function re(e, r) {
    await ie().mkdir(dirname(r));
    try {
        let o = dirname(r);
        let s = `${basename(r)}.restoring.`;
        for (let u of (await readdir(o))){
            if (u.startsWith(s)) {
                await unlink(join(o, u)).catch(()=>{});
            }
        }
    } catch  {}
    let n = `${r}.restoring.${randomBytes(4).toString("hex")}`;
    try {
        await copyFile(e, n);
        try {
            await ss(n, r);
        } catch (error) {
            let s = v(error);
            if (s === undefined || !yC.has(s)) {
                throw error;
            }
            if (!await ae(r)) {
                throw error;
            }
            try {
                await copyFile(n, r);
            } catch (err) {
                if (jIs.has(v(err) ?? "")) {
                    await unlink(r).catch(()=>{});
                }
                throw err;
            }
            await unlink(n).catch(()=>{});
        }
    } catch (error) {
        await unlink(n).catch(()=>{});
        throw error;
    }
}
async function Ct(e, r) {
    let n = basename(process.execPath).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let o = new RegExp(`^${n}\\.old\\.(\\d+)$`);
    let s = (await Promise.all(r.flatMap((p)=>[
            p,
            join(p, "bin")
        ].map(async (w)=>(await readdir(w).catch(()=>[])).map((P)=>o.exec(P)).filter((P)=>P !== null).map((P)=>({
                    path: join(w, P[0]),
                    ts: Number(P[1])
                })))))).flat();
    let k = (await Promise.all(s.map(async (p)=>{
        if (await te(e, p.path)) {
            return [
                p
            ];
        }
        return [];
    }))).flat().reduce((acc, item)=>{
        if (acc === null || item.ts > acc.ts) {
            return item;
        }
        return acc;
    }, null);
    if (!k) {
        t(`No preserved ${basename(process.execPath)}.old.<ts> found in ${r.length} retired dir(s) \u2014 sweep restore skipped`);
        return;
    }
    try {
        await re(k.path, process.execPath);
        g("update_apply_heal", {
            heal_kind: b("sweep")
        });
        t(`Restored missing ${process.execPath} from preserved copy ${k.path} before update attempt`);
    } catch (error) {
        let err_code = Ym(error);
        m("update_apply_heal", "sweep_restore_failed", {
            ...err_code && {
                err_code
            },
            heal_kind: b("sweep")
        });
        t(`Failed to restore missing ${process.execPath} from preserved copy ${k.path}: ${error}`);
    }
}
async function VZe(e, r) {
    let n = ne();
    if (!await Pt(r)) {
        f("update_apply", "update_apply_lock_contention");
        t("Another process is currently installing an update", {
            level: "error"
        });
        i("tengu_auto_updater_lock_contention", {
            pid: process.pid,
            currentVersion: Ci({
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION)
        });
        return {
            status: "in_progress"
        };
    }
    let n_updateRestoreFailure = n.updateRestoreFailure;
    try {
        await Ft();
        let s = oe();
        if (s === "npm" && a.isNpmFromWindowsPath()) {
            m("update_apply", "update_apply_wsl_windows_npm");
            t("Windows NPM detected in WSL environment", {
                level: "error"
            });
            i("tengu_auto_updater_windows_npm_in_wsl", {
                currentVersion: Ci({
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://code.claude.com/docs/en/overview",
                    VERSION: "2.1.296",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                    BUILD_TIME: "2026-10-09T01:31:52Z",
                    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                    DD_SOURCEMAP_GROUP: "default"
                }.VERSION)
            });
            console.error(`
Error: Windows NPM detected in WSL

You're running Claude Code in WSL but using the Windows NPM installation from /mnt/c/.
This configuration is not supported for updates.

To fix this issue:
  1. Install Node.js within your Linux distribution: e.g. sudo apt install nodejs npm
  2. Make sure Linux NPM is in your PATH before the Windows version
  3. Try updating again with 'claude update'
`);
            return {
                status: "install_failed"
            };
        }
        let u = e ? `${({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }).PACKAGE_URL}@${e}` : ({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }).PACKAGE_URL;
        let k = O() === "windows" && $u() && process.execPath.replace(/\\/g, "/").includes("/node_modules/@anthropic-ai/");
        let p = [];
        if (k) {
            let [, y] = Ge();
            let x = (await Promise.all((await Je()).map(async (h)=>{
                if (await Promise.all([
                    readdir(h).catch(()=>[]),
                    readdir(join(h, "bin")).catch(()=>[])
                ]).then(([M, A])=>[
                        ...M,
                        ...A
                    ].some((I)=>/\.exe\.old\.\d+$/.test(I)))) {
                    return [
                        h
                    ];
                }
                return [];
            }))).flat();
            if (x.length > 0) {
                if (await ae(process.execPath)) {
                    await Promise.all(x.map((h)=>rm(h, {
                            recursive: true,
                            force: true
                        }).catch((S)=>t(`retired-dir cleanup failed: ${S}`))));
                } else {
                    await Ct(n, x);
                }
            }
            let F = Date.now();
            let T = await stat(process.execPath, {
                bigint: true
            }).then((h)=>h.ino).catch(()=>0n);
            let R = [
                process.execPath
            ];
            for (let h of (await readdir(y).catch(()=>[]))){
                for (let S of [
                    "claude.exe",
                    "cli.exe"
                ]){
                    let M = join(y, h, S);
                    if (M === process.execPath) {
                        continue;
                    }
                    let A = await stat(M, {
                        bigint: true
                    }).then((I)=>I.ino).catch(()=>-1n);
                    if (T && A === T) {
                        R.push(M);
                    }
                }
            }
            for (let h of R){
                let S = `${h}.old.${F}`;
                try {
                    await rename(h, S);
                } catch  {
                    continue;
                }
                p.push([
                    h,
                    S
                ]);
                let M = await stat(S, {
                    bigint: true
                }).then((A)=>A.ino, ()=>0n);
                if (M !== 0n) {
                    n.mintedPreservedInodes.add(M);
                }
            }
        }
        let w = await ct(s, [
            "install",
            "-g",
            u
        ], {
            cwd: homedir(),
            useToolMemoryCgroup: false
        });
        let P = 0;
        let se = 0;
        let X = [];
        if (p.length && w.code !== 0) {
            for (let [x, F] of p){
                try {
                    await rename(F, x);
                } catch (error) {
                    try {
                        await re(F, x);
                        t(`Restored ${x} by copy after rename failed: ${error}`);
                        await unlink(F).catch((R)=>t(`Failed to remove ${F} after copy-restore: ${R}`));
                    } catch (err) {
                        let preservedPath = await je(n, F);
                        let S;
                        if (preservedPath !== null && preservedPath !== F) {
                            try {
                                await re(preservedPath, x);
                                se++;
                                t(`Restored ${x} from retired-dir copy ${preservedPath} after rename (${error}) and copy (${err}) both failed`);
                                continue;
                            } catch (error_1) {
                                S = error_1;
                                t(`Failed to restore ${x} from retired-dir copy ${preservedPath}: ${error_1}`);
                            }
                        }
                        let preserved_state = preservedPath === null ? b("gone") : preservedPath === F ? b("original_dir") : b("retired_dir");
                        P++;
                        if (X.length === 0) {
                            let rename_err_code = Ym(error);
                            let copy_err_code = Ym(err);
                            let relocate_err_code = S === undefined ? undefined : Ym(S);
                            m("update_apply", "update_apply_restore_failed", {
                                ...rename_err_code && {
                                    rename_err_code
                                },
                                ...copy_err_code && {
                                    copy_err_code
                                },
                                ...relocate_err_code && {
                                    relocate_err_code
                                },
                                preserved_state
                            });
                        }
                        X.push({
                            originalPath: x,
                            preservedPath
                        });
                        c(ot(new De(`Failed to restore ${x} after install failure: rename: ${error}; copy: ${err}; preserved copy: ${preservedPath ?? "not found"}`), `Failed to restore executable after install failure: rename=${Vr(error) ?? "unknown"} copy=${Vr(err) ?? "unknown"} relocate=${S === undefined ? preservedPath === null ? "not_found" : "skipped" : Vr(S) ?? "unknown"}`));
                    }
                }
            }
            if (se > 0 && P === 0) {
                g("update_apply_heal", {
                    heal_kind: b("relocate")
                });
            }
            let y = new Set(p.map(([x])=>x));
            n.updateRestoreFailure = X[0] ?? (n.updateRestoreFailure && !y.has(n.updateRestoreFailure.originalPath) ? n.updateRestoreFailure : null);
        }
        if (w.code !== 0) {
            let y = `${w.stdout} ${w.stderr}`;
            let x = At(y);
            let F = p.length === 0 ? "not_attempted" : P === 0 ? "restored" : "partial";
            if (x === "warning_only") {
                let R = await Oe(e);
                if (R.outcome === "landed") {
                    await Ae((h)=>({
                            ...h,
                            installMethod: "global"
                        }), r);
                    n.updateRestoreFailure = null;
                    f("update_apply", "update_apply_npm_install_stderr_warning");
                    t(`npm/bun exited ${w.code} with only warnings on stderr but the install-prefix re-probe confirms the install landed (now ${R.version}): ${y}`);
                    return {
                        status: "success",
                        probeDurationMs: R.durationMs
                    };
                }
            }
            i("tengu_auto_updater_npm_failure", {
                npm_exit_code: w.code,
                package_manager: d(s),
                is_bundled_mode: $u(),
                platform: gz(O()),
                windows_self_rename: d(F),
                stderr_signature: d(x),
                npm_error_code: Mt(y) ?? b("none")
            });
            if (O() === "windows" && /\b(?:claude|cli)\.exe\b/i.test(y) && (/\bEBUSY\b|resource busy or locked/i.test(y) || /\bEPERM\b|operation not permitted/i.test(y) && (p.length > 0 || /\b(?:rename|copyfile|unlink)\b[^\r\n]*\b(?:claude|cli)\.exe\b/i.test(y)))) {
                m("update_apply", "update_apply_exe_locked");
                t(`Failed to install new version of claude (running executable is locked): ${y}`, {
                    level: "error"
                });
                return {
                    status: "install_failed",
                    failureHint: "windows_running_exe_lock"
                };
            }
            if (/\b(EACCES|EPERM|permission denied)\b/i.test(y)) {
                m("update_apply", "update_apply_no_permissions");
                t("Insufficient permissions for global npm install.", {
                    level: "error"
                });
                return {
                    status: "no_permissions"
                };
            }
            if (x === "native_package_missing") {
                m("update_apply", "update_apply_native_binary_missing");
                t(`Failed to install new version of claude (platform-native package missing; npm should have restored the previous version): ${y}`, {
                    level: "error"
                });
                return {
                    status: "install_failed",
                    failureHint: "native_binary_missing"
                };
            }
            if (x === "warning_only") {
                m("update_apply", "update_apply_npm_install_stderr_warning");
                t(`npm/bun exited ${w.code} with only warnings on stderr but the re-probe did not confirm an advance: ${y}`, {
                    level: "error"
                });
                return {
                    status: "install_failed"
                };
            }
            m("update_apply", "update_apply_npm_install_failed");
            t(`Failed to install new version of claude: ${y}`, {
                level: "error"
            });
            return {
                status: "install_failed"
            };
        }
        let le = await Oe(e);
        switch(le.outcome){
            case "placeholder_stub":
                {
                    let y = s === "npm" ? await ct("npm", [
                        "config",
                        "get",
                        "ignore-scripts"
                    ], {
                        abortSignal: AbortSignal.timeout(10000),
                        cwd: homedir(),
                        useToolMemoryCgroup: false
                    }) : null;
                    if (y?.code === 0 && y.stdout.trim() === "true") {
                        t(`${s} exited 0 and the installed claude is the placeholder stub, but npm install scripts are disabled on purpose; trusting the exit code`);
                        break;
                    }
                    m("update_apply", "update_apply_native_binary_missing");
                    t(`${s} exited 0 but the installed claude is still the placeholder stub: the platform-native package was not installed`, {
                        level: "error"
                    });
                    return {
                        status: "install_failed",
                        failureHint: "native_binary_missing"
                    };
                }
            case "inconclusive":
                t(`${s} exited 0; the install-prefix --version probe was inconclusive, trusting the exit code`);
                break;
            case "landed":
                break;
        }
        await Ae((y)=>({
                ...y,
                installMethod: "global"
            }), r);
        n.updateRestoreFailure = null;
        g("update_apply");
        return {
            status: "success",
            probeDurationMs: le.durationMs
        };
    } finally{
        if (n.updateRestoreFailure !== null && n.updateRestoreFailure === n_updateRestoreFailure) {
            await $t(n);
        }
        await St(r);
    }
}
async function Ft() {
    let e = MGe();
    for (let [, r] of Object.entries(e)){
        try {
            let n = await qvn(r);
            if (!n) {
                continue;
            }
            let { filtered, hadAlias } = ctr(n);
            if (hadAlias) {
                await dtr(r, filtered);
                t(`Removed claude alias from ${r}`);
            }
        } catch (error) {
            t(`Failed to remove alias from ${r}: ${error}`, {
                level: "error"
            });
        }
    }
}
function At(e) {
    if (/\b(EACCES|EPERM|permission denied)\b/i.test(e)) {
        return "eacces_eperm";
    }
    if (/postinstall\] Native package "[^"]*" not found/.test(e)) {
        return "native_package_missing";
    }
    if (/\bENOTEMPTY\b/i.test(e)) {
        return "enotempty";
    }
    if (/\bETARGET\b/i.test(e)) {
        return "etarget";
    }
    if (/\bE403\b/i.test(e) || /\b403 forbidden\b/i.test(e)) {
        return "e403_forbidden";
    }
    if (/\bENOENT\b/i.test(e)) {
        return "enoent";
    }
    if (/\bE5\d\d\b/i.test(e) || /\b5\d\d\s+(internal server error|bad gateway|service unavailable|gateway time-?out)\b/i.test(e)) {
        return "registry_5xx";
    }
    if (/\b(ETIMEDOUT|ESOCKETTIMEDOUT)\b/i.test(e) || /\btimed[\s-]?out\b/i.test(e) || /\btimeout\b/i.test(e)) {
        return "network_timeout";
    }
    if (/\bENOSPC\b/i.test(e)) {
        return "disk_full";
    }
    if (/\bEBUSY\b/i.test(e) || /\bresource busy or locked\b/i.test(e)) {
        return "ebusy";
    }
    let r = /npm warn/i.test(e) || /unknown user config/i.test(e) || /npm notice/i.test(e);
    let n = /npm err/i.test(e) || /\b(EACCES|EPERM|ETARGET)\b/i.test(e) || /code E/i.test(e);
    if (r && !n) {
        return "warning_only";
    }
    return "unknown";
}
function Mt(e) {
    let r = /\bnpm (?:ERR!|error) code\s+([A-Z][A-Z0-9_]{1,29})(?![A-Za-z0-9_])/.exec(e)?.[1];
    if (r === undefined) {
        return undefined;
    }
    return kn(r);
}
export { ltr, f5o, jZe, ZMe, WZe, MGe, ctr, qvn, dtr, A6r, m5o, H2t, g5o, C6r, zZe, Kvn, eHe, HGe, h5o, utr, DGe, y5o, GZe, ptr, D2t, LGe, VZe };
