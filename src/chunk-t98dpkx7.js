import { z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { _, X, ie, Rn, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { Cq, h2n } from "/$bunfs/root/chunk-qch5xj2a.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Ih, DP } from "/$bunfs/root/chunk-z0brrd3r.js";
import { rwe, se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { $u, yc, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { it as execFileNoThrow } from "/$bunfs/root/chunk-h7cbghgp.js";
import { fZt, ce, WZt, VRe } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Tz } from "/$bunfs/root/chunk-vpp1psvz.js";
import { Dkt, DVe } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Xds, yre, qe } from "/$bunfs/root/chunk-46dhek9m.js";
import { f5o, ZMe, WZe, MGe, A6r, m5o, y5o } from "/$bunfs/root/chunk-7kwdaan6.js";
import { aY } from "/$bunfs/root/chunk-4n16n64p.js";
import { YB } from "/$bunfs/root/chunk-d4n0kkf1.js";
import { me, bt, Vc } from "/$bunfs/root/chunk-55p8dvkx.js";
import { O as platform } from "/$bunfs/root/chunk-79wfew46.js";
import { join, delimiter, posix, win32 } from "path";
import { readFile, lstat, realpath } from "fs/promises";
import { homedir } from "os";
import { stripVTControlCharacters } from "util";
const Q = p(()=>bt({
        timestamp: me(),
        path: Vc([
            "npm-global",
            "npm-local",
            "native"
        ]),
        outcome: Vc([
            "success",
            "failed"
        ]),
        status: me(),
        version_from: me(),
        version_to: me().nullable(),
        error_code: me().nullable()
    }));
function S() {
    return join(ve(), ".last-update-result.json");
}
function I() {
    return $e.state("last-update-result");
}
async function OGe(e, n) {
    if (j() && n) {
        let i = await n.write(I(), _(e), {
            mode: 438 & ~process.umask()
        });
        if (!i.ok) {
            t(`Failed to record update result: ${i.error.code}`, {
                level: "error"
            });
        }
        return;
    }
    try {
        await mn().atomicWrite(S(), _(e));
    } catch (error) {
        t(`Failed to record update result: ${error}`, {
            level: "error"
        });
    }
}
async function atr(e) {
    let n;
    if (j() && e) {
        let i = await e.read([
            I()
        ]);
        if (!i.ok) {
            t(`Failed to read update result: ${i.error.code}`, {
                level: "error"
            });
            return null;
        }
        let s = i.value.items[0];
        if (!s.found) {
            return null;
        }
        n = Buffer.from(s.value).toString("utf8");
    } else {
        try {
            n = await mn().read(S());
        } catch (error) {
            if (!z(error)) {
                t(`Failed to read update result: ${error}`, {
                    level: "error"
                });
            }
            return null;
        }
    }
    try {
        let i = Q().safeParse(X(n));
        if (i.success) {
            return i.data;
        }
        return null;
    } catch  {
        return null;
    }
}
function Z(e, n) {
    return n.includes(e.id) || e.idLike.some((i)=>n.includes(i));
}
class L {
    sources;
    osRelease;
    pacman;
    deb;
    rpm;
    apk;
    packageManager;
    constructor(e){
        this.sources = e;
    }
    getOsRelease() {
        return this.osRelease ??= this.sources.readOsRelease().then((e)=>{
            let n = e.match(/^ID=["']?(\S+?)["']?\s*$/m);
            let i = e.match(/^ID_LIKE=["']?(.+?)["']?\s*$/m);
            return {
                id: n?.[1] ?? "",
                idLike: i?.[1]?.split(" ") ?? []
            };
        }, ()=>null);
    }
    detectPacman() {
        return this.pacman ??= this.ownsExecutable([
            "arch"
        ], "pacman", [
            "-Qo"
        ]);
    }
    detectDeb() {
        return this.deb ??= this.ownsExecutable([
            "debian"
        ], "dpkg", [
            "-S"
        ]);
    }
    detectRpm() {
        return this.rpm ??= this.ownsExecutable([
            "fedora",
            "rhel",
            "suse"
        ], "rpm", [
            "-qf"
        ]);
    }
    detectApk() {
        return this.apk ??= this.ownsExecutable([
            "alpine"
        ], "apk", [
            "info",
            "--who-owns"
        ]);
    }
    async ownsExecutable(e, n, i) {
        if (this.sources.platform() !== "linux") {
            return false;
        }
        let s = await this.getOsRelease();
        if (s && !Z(s, e)) {
            return false;
        }
        let o = await this.sources.execFileNoThrow(n, [
            ...i,
            this.sources.execPath()
        ], {
            timeout: 5000,
            useCwd: false,
            useToolMemoryCgroup: false
        });
        if (o.code === 0 && o.stdout) {
            t(`Detected ${n} installation: ${o.stdout.trim()}`);
            return true;
        }
        return false;
    }
    detectHomebrew() {
        let e = this.sources.platform();
        if (e !== "macos" && e !== "linux" && e !== "wsl") {
            return false;
        }
        let n = this.sources.execPath();
        if (n.includes("/Caskroom/")) {
            t(`Detected Homebrew cask installation: ${n}`);
            return true;
        }
        return false;
    }
    getHomebrewCaskName() {
        return this.sources.execPath().match(/\/Caskroom\/([^/]+)\//)?.[1] ?? null;
    }
    detectWinget() {
        if (this.sources.platform() !== "windows") {
            return false;
        }
        let e = this.sources.execPath();
        for (let n of [
            /Microsoft[/\\]WinGet[/\\]Packages/i,
            /Microsoft[/\\]WinGet[/\\]Links/i
        ]){
            if (n.test(e)) {
                t(`Detected winget installation: ${e}`);
                return true;
            }
        }
        return false;
    }
    detectMise() {
        let e = this.sources.execPath();
        if (/[/\\]mise[/\\]installs[/\\]/i.test(e)) {
            t(`Detected mise installation: ${e}`);
            return true;
        }
        return false;
    }
    detectAsdf() {
        let e = this.sources.execPath();
        if (/[/\\]\.?asdf[/\\]installs[/\\]/i.test(e)) {
            t(`Detected asdf installation: ${e}`);
            return true;
        }
        return false;
    }
    getPackageManager() {
        return this.packageManager ??= this.detectPackageManager();
    }
    async detectPackageManager() {
        if (this.detectHomebrew()) {
            return "homebrew";
        }
        if (this.detectWinget()) {
            return "winget";
        }
        if (this.detectMise()) {
            return "mise";
        }
        if (this.detectAsdf()) {
            return "asdf";
        }
        if (await this.detectPacman()) {
            return "pacman";
        }
        if (await this.detectApk()) {
            return "apk";
        }
        if (await this.detectDeb()) {
            return "deb";
        }
        if (await this.detectRpm()) {
            return "rpm";
        }
        return "unknown";
    }
}
const ee = new q(()=>new L({
        platform,
        readOsRelease: ()=>readFile("/etc/os-release", "utf8"),
        execFileNoThrow,
        execPath: ()=>process.execPath || process.argv[0] || ""
    }));
function b() {
    return ee.of(B().host);
}
function D() {
    return b().detectPacman();
}
function E() {
    return b().detectDeb();
}
function T() {
    return b().detectRpm();
}
function H() {
    return b().detectApk();
}
function Vvn() {
    return b().detectHomebrew();
}
function UZe() {
    return b().getHomebrewCaskName();
}
function U() {
    return b().detectWinget();
}
function W() {
    return b().detectMise();
}
function N() {
    return b().detectAsdf();
}
function JMe() {
    return b().getPackageManager();
}
function oe() {
    let e = process.argv[1] || "";
    let n = process.execPath || process.argv[0] || "";
    if (platform() === "windows") {
        e = e.split(win32.sep).join(posix.sep);
        n = n.split(win32.sep).join(posix.sep);
    }
    return [
        e,
        n
    ];
}
async function re() {
    let [e, n] = oe();
    if ($u()) {
        let l = `${ve().replace(/\\/g, "/").replace(/\/+$/, "")}/local/node_modules/`;
        if (n.startsWith(l)) {
            return "npm-local";
        }
        if (n.includes("/node_modules/@anthropic-ai/")) {
            return "npm-global";
        }
        if (Vvn() || U() || W() || N() || await D() || await E() || await T() || await H()) {
            return "package-manager";
        }
        return "native";
    }
    if (f5o()) {
        return "npm-local";
    }
    if ([
        "/usr/local/lib/node_modules",
        "/usr/lib/node_modules",
        "/opt/homebrew/lib/node_modules",
        "/opt/homebrew/bin",
        "/usr/local/bin",
        "/.nvm/versions/node/"
    ].some((l)=>e.includes(l))) {
        return "npm-global";
    }
    if (e.includes("/npm/") || e.includes("/nvm/")) {
        return "npm-global";
    }
    let s = await DP("npm config get prefix", {
        reject: false
    });
    let o = s.exitCode === 0 ? s.stdout.trim() : null;
    if (o && e.startsWith(o)) {
        return "npm-global";
    }
    return "unknown";
}
class G {
    attempted = false;
}
const K = new q(()=>new G);
function T6r() {
    return K.of(B().host).attempted;
}
async function QMe() {
    K.of(B().host).attempted = true;
    return await re();
}
async function le() {
    if ($u()) {
        try {
            return await realpath(process.execPath);
        } catch  {}
        try {
            let e = await yc("claude");
            if (e) {
                return e;
            }
        } catch  {}
        try {
            await ie().stat(join(homedir(), ".local/bin/claude"));
            return join(homedir(), ".local/bin/claude");
        } catch  {}
        return "native";
    }
    try {
        return process.argv[0] || "unknown";
    } catch  {
        return "unknown";
    }
}
function ue() {
    try {
        if ($u()) {
            return process.execPath || "unknown";
        }
        return process.argv[1] || "unknown";
    } catch  {
        return "unknown";
    }
}
async function de() {
    let e = ie();
    let n = [];
    let path = join(homedir(), ".claude", "local");
    if (await ZMe()) {
        n.push({
            type: "npm-local",
            path
        });
    }
    let s = [
        "@anthropic-ai/claude-code"
    ];
    if (({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).PACKAGE_URL && ({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).PACKAGE_URL !== "@anthropic-ai/claude-code") {
        s.push({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.PACKAGE_URL);
    }
    let o = await execFileNoThrow("npm", [
        "-g",
        "config",
        "get",
        "prefix"
    ], {
        cwd: rwe(se(), homedir())
    });
    if (o.code === 0 && o.stdout) {
        let r = o.stdout.trim();
        let h = platform() === "windows";
        let w = h ? join(r, "claude") : join(r, "bin", "claude");
        let k = false;
        try {
            await e.stat(w);
            k = true;
        } catch  {}
        if (k) {
            let d = false;
            try {
                if ((await realpath(w)).includes("/Caskroom/")) {
                    d = Vvn();
                }
            } catch  {}
            if (!d) {
                let f = false;
                for (let x of s){
                    let P = h ? join(r, "node_modules", x) : join(r, "lib", "node_modules", x);
                    try {
                        await e.stat(P);
                        f = true;
                        break;
                    } catch  {}
                }
                if (f) {
                    n.push({
                        type: "npm-global",
                        path: w
                    });
                }
            }
        } else {
            for (let d of s){
                let f = h ? join(r, "node_modules", d) : join(r, "lib", "node_modules", d);
                try {
                    await e.stat(f);
                    n.push({
                        type: "npm-global-orphan",
                        path: f
                    });
                } catch  {}
            }
        }
    }
    let l = join(homedir(), ".local", "bin", "claude");
    try {
        await e.stat(l);
        n.push({
            type: "native",
            path: l
        });
    } catch  {}
    if (ce().installMethod === "native") {
        let r = join(homedir(), ".local", "share", "claude");
        try {
            await e.stat(r);
            if (!n.some((h)=>h.type === "native")) {
                n.push({
                    type: "native",
                    path: r
                });
            }
        } catch  {}
    }
    return n;
}
function pe(e, n) {
    let i = platform() === "windows";
    let s = n;
    if (i) {
        s = n.split(win32.sep).join(posix.sep).toLowerCase();
    }
    return e.some((o)=>{
        let l = o;
        if (i) {
            l = o.split(win32.sep).join(posix.sep).toLowerCase();
        }
        let c = l.replace(/\/+$/, "");
        let r = o.replace(/[/\\]+$/, "");
        return c === s || r === "~/.local/bin" || r === "$HOME/.local/bin";
    });
}
async function fe(installationType) {
    let n = [];
    let i = fZt();
    if (i) {
        n.push({
            issue: `otelHeadersHelper is configured but its last invocation failed: ${Cq(i, h2n)}`,
            fix: "Run the configured helper manually and confirm it prints a JSON object of string header values. If the value is a file path, confirm the file exists and is executable."
        });
    }
    let s = ce();
    if (installationType === "development") {
        return n;
    }
    if (installationType === "native") {
        let c = (a.PATH || "").split(delimiter);
        let r = homedir();
        let h = join(r, ".local", "bin");
        let w = join(aY(), "claude");
        if (!await Dkt(w) && !await DVe(w).catch(()=>false)) {
            n.push({
                issue: `${w} was not created by the native installer (it is not a symlink into the versions/ directory), so auto-update leaves it untouched.`,
                fix: `If you put a launcher wrapper there on purpose, this is expected \u2014 new versions still install under $XDG_DATA_HOME/claude/versions, your launcher decides what runs, and automatic version cleanup is disabled on this machine (the installer cannot tell which version your launcher needs, so it keeps them all). To let Claude Code manage the launcher again, remove ${w} and run \`claude update\`.`
            });
        }
        if (!pe(c, h)) {
            if (platform() === "windows") {
                let d = h.split(posix.sep).join(win32.sep);
                n.push({
                    issue: `Native installation exists but ${d} is not in your PATH`,
                    fix: "Add it by opening: System Properties → Environment Variables → Edit User PATH → New → Add the path above. Then restart your terminal."
                });
            } else {
                let d = WZe();
                let x = MGe()[d];
                let P = x ? x.replace(homedir(), "~") : "your shell config file";
                n.push({
                    issue: "Native installation exists but ~/.local/bin is not in your PATH",
                    fix: `Run: echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${P} then open a new terminal or run: source ${P}`
                });
            }
        }
    }
    if (!Ne(process.env.DISABLE_INSTALLATION_CHECKS)) {
        if (installationType === "npm-local" && s.installMethod !== "local") {
            n.push({
                issue: `Running from local installation but config install method is '${s.installMethod ?? "not set"}'`,
                fix: "Consider using native installation: `claude install`"
            });
        }
        if (installationType === "native" && s.installMethod !== "native") {
            n.push({
                issue: `Running native installation but config install method is '${s.installMethod ?? "not set"}'`,
                fix: "Run `claude install` to update configuration"
            });
        }
    }
    if (installationType === "npm-global" && await ZMe()) {
        n.push({
            issue: "Local installation exists but not being used",
            fix: "Consider using native installation: `claude install`"
        });
    }
    let o = await A6r();
    let l = await m5o();
    if (installationType === "npm-local") {
        if (!await yc("claude") && !l) {
            if (o) {
                n.push({
                    issue: "Local installation not accessible",
                    fix: `Alias exists but points to invalid target: ${o}. Update alias: alias claude="~/.claude/local/claude"`
                });
            } else {
                n.push({
                    issue: "Local installation not accessible",
                    fix: 'Create alias: alias claude="~/.claude/local/claude"'
                });
            }
        }
    }
    return n;
}
async function ge() {
    return null;
}
function he() {
    if (!qe.isSandboxingEnabled()) {
        return [];
    }
    if (qe.canMaskCredentialWarningFire()) {
        qe.checkDependencies();
    }
    let e = qe.getMaskCredentialWarning();
    if (!e) {
        return [];
    }
    return e.split(" · ").map((n)=>{
        if (n.includes("have an empty injectHosts")) {
            return {
                issue: n.replace(/\.\s*If the adapter forced this.*$/, ""),
                fix: "If the adapter forced this (a filesystem.allowRead entry re-opened a denied credential path), remove the conflicting allowRead entry or the deny; if a parent/managed settings tier supplied this mask, sentinel-only is its intended posture (that channel cannot grant injection, so an injectHosts set there is stripped on load) and the entry can only be removed in the parent settings; otherwise set injectHosts or remove the entry"
            };
        }
        if (n.includes("degrade to deny on macOS")) {
            return {
                issue: n.replace(/\.\s*Note that switching them.*$/, ""),
                fix: "Set sandbox.filesystem.disabled: false in user or managed settings (overrides the GrowthBook policy; ignored if managed settings pin the filesystem layer), or remove the mask entries — a deny provides no protection while the relaxed filesystem policy is active"
            };
        }
        return {
            issue: n.replace(/\s*Enable sandbox\.network\.tlsTerminate.*$/, ""),
            fix: yre() ? "Set sandbox.enabled: true plus sandbox.network.tlsTerminate, or remove the mask entries — TLS termination is never enabled in scrub-only mode" : "Enable sandbox.network.tlsTerminate (or remove the mask entries)"
        };
    });
}
function be() {
    if (platform() !== "linux") {
        return [];
    }
    let e = [];
    let n = qe.getLinuxGlobPatternWarnings();
    if (n.length > 0) {
        let i = A(n);
        e.push({
            issue: "Glob patterns in sandbox permission rules are not fully supported on Linux",
            fix: `Found ${n.length} pattern(s): ${i}. On Linux, glob patterns in Edit/Read rules will be ignored.`
        });
    }
    return e;
}
function A(e) {
    let n = e.map((o)=>Rn(stripVTControlCharacters(o)).trim());
    let i = n.slice(0, 3).join(", ");
    let s = n.length - 3;
    if (s > 0) {
        return `${i} (${s} more)`;
    }
    return i;
}
async function we() {
    let e = platform();
    if (e !== "linux" && e !== "wsl") {
        return [];
    }
    if (!qe.isSandboxingEnabled()) {
        return [];
    }
    let n = qe.getConfig();
    if (n === undefined || n.filesystem.disabled) {
        return [];
    }
    let { denyWithinAllow } = qe.getFsWriteConfig();
    let s = await Promise.all(denyWithinAllow.map(async (l)=>{
        try {
            let c = await lstat(l);
            return c.isFile() && c.size === 0 && (c.mode & 146) === 0;
        } catch  {
            return false;
        }
    }));
    let o = new Set(denyWithinAllow.filter((l, c)=>s[c]));
    if (o.size === 0) {
        return [];
    }
    return [
        {
            issue: `Stale sandbox mask files left by a killed session: ${A([
                ...o
            ])}`,
            fix: 'Remove each with `rm <path>` while no other Claude Code session is running in that project — a 0-byte read-only file where a settings file belongs makes "Yes, and don\'t ask again" fail to save, and the sandbox binds it read-only again on every start'
        }
    ];
}
function ye() {
    let e = qe.getUnbracketedIpv6DomainWarnings();
    if (e.length === 0) {
        return [];
    }
    return [
        {
            issue: "Sandbox network domain entries have unreliable spellings",
            fix: `Found: ${A(e)}. IPv6 literals must be bracketed, with any port 1-65535 and no leading zeros ("[::1]", "[::1]:443"); non-IPv6 entries must not contain wildcards in brackets, extra colons, "@", or path/query characters, and must use their canonical spelling (lowercase, no trailing dot, punycode). Until fixed, enforcement is conservative: a denied entry denies at least what any parseable reading denies (an entry with no parseable reading denies nothing); an allowed entry never allows more than written and may be removed entirely; bracketed IPv6-glob entries apply to in-process checks only, not the sandbox proxy.`
        }
    ];
}
function xe() {
    let e = qe.getUnbracketedIpv6InjectHostWarnings();
    if (e.length === 0) {
        return [];
    }
    return [
        {
            issue: "Sandbox credential injectHosts entries can never match their destination",
            fix: `Found: ${A(e)}. Credential injection matches the bare, canonically-compressed destination address exactly and ignores ports \u2014 rewrite each entry as that bare form (e.g. "::1", "2001:db8::1"). Bracketed, zone-id, or non-canonical IPv6 spellings never match, so the credential is never injected there.`
        }
    ];
}
async function BZe({ probeKeychain = false, storageV5 } = {}) {
    let installationType = await QMe();
    let version = typeof {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    } !== "undefined" && ({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION ? `${({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION}${YB()}` : "unknown";
    let installationPath = await le();
    let invokedBinary = ue();
    let multipleInstallations = await de();
    let warnings = await fe(installationType);
    let { checkInstall } = await import("/$bunfs/root/chunk-8bvgm220.js");
    for (let g of (await checkInstall())){
        if (g.type === "error") {
            warnings.push({
                issue: g.message,
                fix: "Run claude install to repair the installation."
            });
        }
    }
    warnings.push(...be());
    warnings.push(...ye());
    warnings.push(...xe());
    warnings.push(...he());
    warnings.push(...await we());
    if (probeKeychain) {
        let g = await ge();
        if (g) {
            warnings.push(g);
        }
    }
    if (installationType === "native") {
        let g = multipleInstallations.filter((u)=>u.type === "npm-global" || u.type === "npm-global-orphan" || u.type === "npm-local");
        let C = platform() === "windows";
        for (let u of g){
            if (u.type === "npm-global") {
                let M = "npm -g uninstall @anthropic-ai/claude-code";
                if (({
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://code.claude.com/docs/en/overview",
                    VERSION: "2.1.296",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                    BUILD_TIME: "2026-10-09T01:31:52Z",
                    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                    DD_SOURCEMAP_GROUP: "default"
                }).PACKAGE_URL && ({
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://code.claude.com/docs/en/overview",
                    VERSION: "2.1.296",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                    BUILD_TIME: "2026-10-09T01:31:52Z",
                    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                    DD_SOURCEMAP_GROUP: "default"
                }).PACKAGE_URL !== "@anthropic-ai/claude-code") {
                    M += ` && npm -g uninstall ${({
                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://code.claude.com/docs/en/overview",
                        VERSION: "2.1.296",
                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                        BUILD_TIME: "2026-10-09T01:31:52Z",
                        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                        DD_SOURCEMAP_GROUP: "default"
                    }).PACKAGE_URL}`;
                }
                warnings.push({
                    issue: `Leftover npm global installation at ${u.path}`,
                    fix: `Run: ${M}`
                });
            } else if (u.type === "npm-global-orphan") {
                warnings.push({
                    issue: `Orphaned npm global package at ${u.path}`,
                    fix: C ? `Run: rmdir /s /q "${u.path}"` : `Run: rm -rf ${u.path}`
                });
            } else if (u.type === "npm-local") {
                warnings.push({
                    issue: `Leftover npm local installation at ${u.path}`,
                    fix: C ? `Run: rmdir /s /q "${u.path}"` : `Run: rm -rf ${u.path}`
                });
            }
        }
    }
    let configInstallMethod = ce().installMethod || "not set";
    let hasUpdatePermissions = null;
    if (installationType === "npm-global") {
        hasUpdatePermissions = (await y5o()).hasPermissions;
        if (!hasUpdatePermissions && !VRe()) {
            warnings.push({
                issue: "Can't auto-update: npm global folder isn't writable",
                fix: "Run `claude install` to switch to the native installer (no sudo)\nOr reinstall with a sudo-free npm (e.g. via nvm)\nOr `npm config set prefix ~/.npm-global`, add ~/.npm-global/bin to PATH, then reinstall"
            });
        }
    }
    let f = Xds();
    let ripgrepStatus = {
        working: f.working ?? true,
        mode: f.mode,
        systemPath: f.mode === "system" ? f.path : null
    };
    let packageManager = installationType === "package-manager" ? await JMe() : undefined;
    let lastUpdateResult = await atr(storageV5);
    return {
        installationType,
        version,
        installationPath,
        invokedBinary,
        configInstallMethod,
        autoUpdates: (()=>{
            let g = VRe();
            if (g) {
                return `disabled (${WZt(g)})`;
            }
            return "enabled";
        })(),
        hasUpdatePermissions,
        lastUpdateResult,
        multipleInstallations,
        warnings,
        packageManager,
        ripgrepStatus
    };
}
export { OGe, atr, Vvn, UZe, JMe, T6r, QMe, BZe };
