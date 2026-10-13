import { kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { my, JZ, rVn, Cwe } from "/$bunfs/root/chunk-xgw72tt1.js";
import { kPe, ie } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { t6 } from "/$bunfs/root/chunk-x0qpydt2.js";
import { SMs, H } from "/$bunfs/root/chunk-s7bhz6qz.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
import { lstat, rmdir, unlink, open, readdir, access, readFile, readlink } from "fs/promises";
import { constants } from "fs";
import { join, delimiter, isAbsolute, resolve } from "path";
import { homedir } from "os";
function isRunningWithBun() {
    return true;
}
function $u() {
    return typeof Bun !== "undefined" && Bun.isStandaloneExecutable === true;
}
function fOs() {
    if (!isRunningWithBun() || $u()) {
        return false;
    }
    let Bun_main = Bun.main;
    if (/^(?:\/\$bunfs\/|B:[\\/]~BUN[\\/])/.test(Bun_main)) {
        return false;
    }
    return /\.[cm]?tsx?$/.test(Bun_main);
}
async function jw(t) {
    try {
        await unlink(t);
        return "removed";
    } catch (error) {
        if (v(error) === "ENOENT") {
            return "absent";
        }
        try {
            await rmdir(t);
            return "removed";
        } catch (err) {
            let E = v(err);
            if (E === "ENOTEMPTY" || E === "EEXIST") {
                return "directory";
            }
            if (E === "ENOENT") {
                if (await lstat(t).then(()=>false, (r)=>v(r) === "ENOENT")) {
                    return "absent";
                }
                throw error;
            }
            throw E === "ENOTDIR" ? error : err;
        }
    }
}
function zGn(t) {
    return !t.isDirectory() && !t.isFile() && !t.isSymbolicLink() && !t.isFIFO() && !t.isSocket() && !t.isBlockDevice() && !t.isCharacterDevice();
}
async function oBe(t, o) {
    let _;
    if (!zGn(o)) {
        _ = {
            isDirectory: o.isDirectory(),
            isFile: o.isFile(),
            isSymbolicLink: o.isSymbolicLink()
        };
    } else {
        let E = await lstat(join(t, o.name));
        _ = {
            isDirectory: E.isDirectory(),
            isFile: E.isFile(),
            isSymbolicLink: E.isSymbolicLink(),
            size: E.size
        };
    }
    if (_.isDirectory && O() === "windows") {
        let E = await Cwe(join(t, o.name));
        switch(E.kind){
            case "junction":
                return {
                    isDirectory: false,
                    isFile: false,
                    isSymbolicLink: true,
                    linkTarget: E.target
                };
            case "directory":
                break;
            case "absent":
                break;
            case "error":
                throw E.error;
        }
    }
    return _;
}
async function p8e(t, o) {
    try {
        return await oBe(t, o);
    } catch (error) {
        if (z(error)) {
            return;
        }
        throw error;
    }
}
async function f8e(t) {
    let o;
    try {
        o = await lstat(t);
    } catch (error) {
        if (v(error) !== "ENOENT") {
            throw error;
        }
        return;
    }
    if (o.isFile()) {
        if (o.nlink > 1) {
            await unlink(t);
        }
        return;
    }
    if (o.isSymbolicLink()) {
        await unlink(t);
        return;
    }
    await Aa(t);
}
const f = 16;
async function Aa(path) {
    if (await jw(path) !== "directory") {
        return;
    }
    let _;
    try {
        _ = await lstat(path);
    } catch (error) {
        if (v(error) === "ENOENT") {
            return;
        }
        throw error;
    }
    if (!_.isDirectory() || _.isSymbolicLink() || O() === "windows" && await _t(path)) {
        await jw(path);
        return;
    }
    let E;
    try {
        E = await readdir(path);
    } catch (error) {
        let e = v(error);
        if (e === "ENOENT" || e === "ENOTDIR") {
            return;
        }
        throw error;
    }
    for(let r = 0; r < E.length; r += f){
        await Promise.all(E.slice(r, r + f).map((e)=>Aa(join(path, e))));
    }
    if (await jw(path) === "directory") {
        throw Object.assign(Error("directory refilled during removal"), {
            code: "ENOTEMPTY",
            path
        });
    }
}
async function HRr(t, o) {
    let _ = O() === "windows" ? 0 : constants.O_NOFOLLOW | constants.O_NONBLOCK;
    let E = await open(t, constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | _, 438);
    try {
        await E.writeFile(o, "utf-8");
    } finally{
        await E.close();
    }
}
async function _t(path) {
    let o = await Cwe(path);
    if (o.kind === "error") {
        throw o.error;
    }
    return o.kind === "junction";
}
function rt(t) {
    let o = process.cwd();
    return t.filter((_)=>!rVn(_, o));
}
function W(t) {
    return Y(t, Bun.which(t));
}
function Y(t, o) {
    return o;
}
const yc = async (t)=>W(t);
const PN = W;
function xpe(t, o) {
    let _ = gon(o);
    if (_ === "") {
        return null;
    }
    return oCo(t, _);
}
function gon(t) {
    return t.split(delimiter).map((o)=>GGn(o)).filter((o)=>st(o)).join(delimiter);
}
function GGn(t, o = "linux") {
    if (o === "win32") {
        return t.replaceAll('"', "");
    }
    return t;
}
function st(t) {
    if (!isAbsolute(t)) {
        return false;
    }
    return true;
}
function oCo(t, PATH) {
    return Y(t, Bun.which(t, {
        PATH
    }));
}
function wslInteropExistsSync() {
    return ie().existsSync("/proc/sys/fs/binfmt_misc/WSLInterop");
}
function readHypervisorUuidSync() {
    try {
        return ie().readFileSync("/sys/hypervisor/uuid", {
            encoding: "utf8"
        }).trim().toLowerCase();
    } catch  {
        return;
    }
}
function dockerenvExistsSync() {
    return ie().existsSync("/.dockerenv");
}
function Tt() {
    if (ie().existsSync(join(ve(), ".config.json"))) {
        return join(ve(), ".config.json");
    }
    return DRr();
}
function DRr() {
    let t = `.claude${t6()}.json`;
    return join(process.env.CLAUDE_CONFIG_DIR || homedir(), t);
}
function Bl() {
    return C().getGlobalClaudeFile();
}
async function probeInternalNetworkAccess() {
    return null;
}
async function L(t) {
    try {
        return !!await yc(t);
    } catch  {
        return false;
    }
}
async function ct() {
    let t = [];
    if (await L("npm")) {
        t.push("npm");
    }
    if (await L("yarn")) {
        t.push("yarn");
    }
    if (await L("pnpm")) {
        t.push("pnpm");
    }
    return t;
}
async function pt() {
    let t = [];
    if (await L("bun")) {
        t.push("bun");
    }
    if (await L("deno")) {
        t.push("deno");
    }
    if (await L("node")) {
        t.push("node");
    }
    return t;
}
const LRr = [
    "git",
    "node",
    "npm",
    "npx",
    "yarn",
    "pnpm",
    "bun",
    "deno",
    "tsc",
    "python",
    "python3",
    "py",
    "pip",
    "uv",
    "poetry",
    "ruby",
    "gem",
    "bundle",
    "rake",
    "dotnet",
    "msbuild",
    "nuget",
    "cl",
    "nmake",
    "cmake",
    "ninja",
    "make",
    "gcc",
    "g++",
    "clang",
    "cargo",
    "rustc",
    "go",
    "java",
    "javac",
    "mvn",
    "gradle",
    "docker"
];
const Rt = 1000;
async function St(t) {
    try {
        return /appinstaller/i.test(await readlink(t));
    } catch  {
        return false;
    }
}
async function sCo(t) {
    if (t === "" || JZ(t) || my(t)) {
        return false;
    }
    return !await kPe(resolve(t));
}
async function hon(t, o) {
    let _ = O() === "windows";
    let E = new Set(t);
    let r = _ ? (process.env.PATHEXT ?? ".COM;.EXE;.BAT;.CMD").toLowerCase().split(";").filter(Boolean) : [];
    let e = D((process.env.PATH ?? "").split(delimiter).map((s)=>s.replace(/^"|"$/g, "")).filter(Boolean));
    await Promise.all(e.map(async (s)=>{
        if (!await sCo(s)) {
            return;
        }
        let n;
        try {
            n = await readdir(s, {
                withFileTypes: true
            });
        } catch  {
            return;
        }
        let p = _ && /[\\/]microsoft[\\/]windowsapps[\\/]?$/i.test(s);
        for (let A of n){
            if (A.isDirectory()) {
                continue;
            }
            let R = A.name;
            if (_) {
                let T = R.toLowerCase();
                let U = T.lastIndexOf(".");
                if (U <= 0 || !r.includes(T.slice(U))) {
                    continue;
                }
                R = T.slice(0, U);
            }
            if (!E.has(R) || o.has(R)) {
                continue;
            }
            if (_) {
                if (p && await St(join(s, A.name))) {
                    continue;
                }
            } else {
                let T = join(s, A.name);
                if ((A.isSymbolicLink() || zGn(A)) && await kPe(resolve(T))) {
                    continue;
                }
                try {
                    await access(T, constants.X_OK);
                } catch  {
                    continue;
                }
            }
            o.add(R);
        }
    }));
}
async function It() {
    let t = new Set;
    try {
        await Ut(hon(LRr, t), Rt, "build tool PATH scan timed out");
    } catch  {}
    return LRr.filter((o)=>t.has(o));
}
function mOs() {
    return C().getDetectedBuildTools();
}
function it(t) {
    try {
        if (!t.isWslEnvironment()) {
            return false;
        }
        let o = PN("npm");
        if (o === null) {
            return false;
        }
        return o.startsWith("/mnt/c/");
    } catch (o) {
        return false;
    }
}
function isConductor() {
    return process.env.__CFBundleIdentifier === "com.conductor.app";
}
const Ise = [
    "pycharm",
    "intellij",
    "webstorm",
    "phpstorm",
    "rubymine",
    "clion",
    "goland",
    "rider",
    "datagrip",
    "appcode",
    "dataspell",
    "aqua",
    "gateway",
    "fleet",
    "jetbrains",
    "androidstudio"
];
function iCo(t) {
    let o = t.toLowerCase();
    return o.includes("windsurf") || o.includes("devin.app") || o.includes("devin desktop") || o.includes("devin-desktop") || /appdata[\\/]local[\\/](programs[\\/])?devin[\\/]/.test(o);
}
function Nt() {
    if (process.env.CURSOR_TRACE_ID) {
        return "cursor";
    }
    let t = process.env.VSCODE_GIT_ASKPASS_MAIN?.toLowerCase() ?? "";
    if (t.includes("cursor")) {
        return "cursor";
    }
    if (iCo(t)) {
        return "windsurf";
    }
    if (t.includes("antigravity")) {
        return "antigravity";
    }
    let o = process.env.__CFBundleIdentifier?.toLowerCase();
    if (o?.includes("vscodium")) {
        return "codium";
    }
    if (o?.includes("windsurf") || o?.includes("devin")) {
        return "windsurf";
    }
    if (o?.includes("com.google.android.studio")) {
        return "androidstudio";
    }
    if (o) {
        for (let _ of Ise){
            if (o.includes(_)) {
                return _;
            }
        }
    }
    if (process.env.VisualStudioVersion) {
        return "visualstudio";
    }
    if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
        return "pycharm";
    }
    if (process.env.TERM === "xterm-ghostty") {
        return "ghostty";
    }
    if (process.env.TERM?.includes("kitty")) {
        return "kitty";
    }
    if (process.env.TERM_PROGRAM) {
        if (/^devin([ -]desktop)?$/i.test(process.env.TERM_PROGRAM)) {
            return "windsurf";
        }
        return process.env.TERM_PROGRAM;
    }
    if (process.env.TMUX) {
        return "tmux";
    }
    if (process.env.STY) {
        return "screen";
    }
    if (process.env.KONSOLE_VERSION) {
        return "konsole";
    }
    if (process.env.GNOME_TERMINAL_SERVICE) {
        return "gnome-terminal";
    }
    if (process.env.XTERM_VERSION) {
        return "xterm";
    }
    if (process.env.VTE_VERSION) {
        return "vte-based";
    }
    if (process.env.TERMINATOR_UUID) {
        return "terminator";
    }
    if (process.env.KITTY_WINDOW_ID) {
        return "kitty";
    }
    if (process.env.ALACRITTY_LOG) {
        return "alacritty";
    }
    if (process.env.TILIX_ID) {
        return "tilix";
    }
    if (process.env.WT_SESSION) {
        return "windows-terminal";
    }
    if (process.env.SESSIONNAME && process.env.TERM === "cygwin") {
        return "cygwin";
    }
    if (process.env.MSYSTEM) {
        return process.env.MSYSTEM.toLowerCase();
    }
    if (process.env.ConEmuANSI || process.env.ConEmuPID || process.env.ConEmuTask) {
        return "conemu";
    }
    if (process.env.WSL_DISTRO_NAME) {
        return `wsl-${process.env.WSL_DISTRO_NAME}`;
    }
    if (isSSH()) {
        return "ssh-session";
    }
    if (process.env.TERM) {
        let _ = process.env.TERM;
        if (_.includes("alacritty")) {
            return "alacritty";
        }
        if (_.includes("rxvt")) {
            return "rxvt";
        }
        if (_.includes("termite")) {
            return "termite";
        }
        return process.env.TERM;
    }
    if (!process.stdout.isTTY) {
        return "non-interactive";
    }
    return null;
}
class h {
    sources;
    globalClaudeFile;
    packageManagers;
    runtimes;
    detectedBuildTools;
    wslEnvironment;
    npmFromWindowsPath;
    deploymentEnvironment;
    primedWslInteropExists;
    primedHypervisorUuid;
    primedDockerenvExists;
    fallbackWslInteropExists;
    fallbackHypervisorUuid;
    fallbackDockerenvExists;
    constructor(t){
        this.sources = t;
    }
    getGlobalClaudeFile() {
        return this.globalClaudeFile ??= Tt();
    }
    seedGlobalClaudeFile(t) {
        if (this.globalClaudeFile === undefined) {
            this.globalClaudeFile = t;
            return "seeded";
        }
        if (this.globalClaudeFile === t) {
            return "unchanged";
        }
        return "conflict";
    }
    getPackageManagers() {
        return this.packageManagers ??= ct();
    }
    getRuntimes() {
        return this.runtimes ??= pt();
    }
    getDetectedBuildTools() {
        return this.detectedBuildTools ??= It();
    }
    isWslEnvironment() {
        return this.wslEnvironment ??= this.primedWslInteropExists ?? (this.fallbackWslInteropExists ??= this.sources.wslInteropExistsSync());
    }
    isNpmFromWindowsPath() {
        return this.npmFromWindowsPath ??= it(this);
    }
    hypervisorUuid() {
        return this.primedHypervisorUuid ?? (this.fallbackHypervisorUuid ??= this.sources.readHypervisorUuidSync() ?? "");
    }
    isDockerenvPresent() {
        return this.primedDockerenvExists ?? (this.fallbackDockerenvExists ??= this.sources.dockerenvExistsSync());
    }
    detectDeploymentEnvironment() {
        return this.deploymentEnvironment ??= Pt(this);
    }
    async prime() {
        if (this.primedWslInteropExists !== undefined) {
            return;
        }
        let [t, o, _] = await Promise.all([
            access("/proc/sys/fs/binfmt_misc/WSLInterop").then(()=>true, ()=>false),
            readFile("/sys/hypervisor/uuid", {
                encoding: "utf8"
            }).then((E)=>E.trim().toLowerCase(), ()=>{}),
            access("/.dockerenv").then(()=>true, ()=>false)
        ]);
        this.primedWslInteropExists = t;
        this.primedHypervisorUuid = o ?? "";
        this.primedDockerenvExists = _;
        this.wslEnvironment = undefined;
        this.npmFromWindowsPath = undefined;
        this.deploymentEnvironment = undefined;
    }
}
const lt = new q(()=>new h({
        wslInteropExistsSync,
        readHypervisorUuidSync,
        dockerenvExistsSync
    }));
function C() {
    return lt.of(B().host);
}
function gOs() {
    return C().prime();
}
function VGn() {
    return C().isDockerenvPresent();
}
function detectDeploymentEnvironment() {
    return C().detectDeploymentEnvironment();
}
function Pt(t) {
    if (Ne(process.env.CODESPACES)) {
        return "codespaces";
    }
    if (process.env.GITPOD_WORKSPACE_ID) {
        return "gitpod";
    }
    if (Ne(process.env.CODER) || process.env.CODER_WORKSPACE_NAME) {
        return "coder";
    }
    if (Ne(process.env.DEVPOD) || process.env.DEVPOD_WORKSPACE_UID) {
        return "devpod";
    }
    if (process.env.DAYTONA_WS_ID) {
        return "daytona";
    }
    if (Ne(process.env.GOOGLE_CLOUD_WORKSTATIONS)) {
        return "gcp-cloud-workstations";
    }
    if (process.env.C9_PID || process.env.C9_USER) {
        return "aws-cloud9";
    }
    if (process.env.REPL_ID || process.env.REPL_SLUG) {
        return "replit";
    }
    if (process.env.PROJECT_DOMAIN) {
        return "glitch";
    }
    if (Ne(process.env.VERCEL)) {
        return "vercel";
    }
    if (process.env.RAILWAY_ENVIRONMENT_NAME || process.env.RAILWAY_SERVICE_NAME) {
        return "railway";
    }
    if (Ne(process.env.RENDER)) {
        return "render";
    }
    if (Ne(process.env.NETLIFY)) {
        return "netlify";
    }
    if (process.env.DYNO) {
        return "heroku";
    }
    if (process.env.FLY_APP_NAME || process.env.FLY_MACHINE_ID) {
        return "fly.io";
    }
    if (Ne(process.env.CF_PAGES)) {
        return "cloudflare-pages";
    }
    if (process.env.DENO_DEPLOYMENT_ID) {
        return "deno-deploy";
    }
    if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
        return "aws-lambda";
    }
    if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_FARGATE") {
        return "aws-fargate";
    }
    if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_EC2") {
        return "aws-ecs";
    }
    if (t.hypervisorUuid().startsWith("ec2")) {
        return "aws-ec2";
    }
    if (process.env.K_SERVICE) {
        return "gcp-cloud-run";
    }
    if (process.env.GOOGLE_CLOUD_PROJECT) {
        return "gcp";
    }
    if (process.env.WEBSITE_SITE_NAME || process.env.WEBSITE_SKU) {
        return "azure-app-service";
    }
    if (process.env.AZURE_FUNCTIONS_ENVIRONMENT) {
        return "azure-functions";
    }
    if (process.env.APP_URL?.includes("ondigitalocean.app")) {
        return "digitalocean-app-platform";
    }
    if (process.env.SPACE_CREATOR_USER_ID) {
        return "huggingface-spaces";
    }
    if (Ne(process.env.GITHUB_ACTIONS)) {
        return "github-actions";
    }
    if (Ne(process.env.GITLAB_CI)) {
        return "gitlab-ci";
    }
    if (process.env.CIRCLECI) {
        return "circleci";
    }
    if (process.env.BUILDKITE) {
        return "buildkite";
    }
    if (Ne(false)) {
        return "ci";
    }
    if (process.env.KUBERNETES_SERVICE_HOST) {
        return "kubernetes";
    }
    if (t.isDockerenvPresent()) {
        return "docker";
    }
    if (c.platform === "darwin") {
        return "unknown-darwin";
    }
    if (c.platform === "linux") {
        return "unknown-linux";
    }
    if (c.platform === "win32") {
        return "unknown-win32";
    }
    return "unknown";
}
function isSSH() {
    return !!(process.env.SSH_CONNECTION || process.env.SSH_CLIENT || process.env.SSH_TTY);
}
var c = {
    probeInternalNetworkAccess,
    isCI: Ne(false),
    platform: [
        "win32",
        "darwin"
    ].includes("linux") ? "linux" : "linux",
    arch: "x64",
    nodeVersion: process.version,
    terminal: Nt(),
    isSSH,
    getPackageManagers () {
        return C().getPackageManagers();
    },
    getRuntimes () {
        return C().getRuntimes();
    },
    isRunningWithBun,
    isWslEnvironment () {
        return C().isWslEnvironment();
    },
    isNpmFromWindowsPath () {
        return C().isNpmFromWindowsPath();
    },
    isConductor,
    detectDeploymentEnvironment
};
function yon() {
    let CLAUDE_CODE_HOST_PLATFORM = process.env.CLAUDE_CODE_HOST_PLATFORM;
    if (CLAUDE_CODE_HOST_PLATFORM === "win32" || CLAUDE_CODE_HOST_PLATFORM === "darwin" || CLAUDE_CODE_HOST_PLATFORM === "linux") {
        return CLAUDE_CODE_HOST_PLATFORM;
    }
    return c.platform;
}
const Mt = new Set([
    "zsh",
    "bash",
    "fish",
    "sh",
    "dash",
    "ash",
    "ksh",
    "tcsh",
    "csh",
    "nu",
    "nushell",
    "pwsh",
    "powershell",
    "cmd",
    "elvish",
    "xonsh",
    "ion"
]);
function qGn(t) {
    if (!t) {
        return kn("none");
    }
    let o = t.split(/[/\\]/).pop().toLowerCase().replace(/\.exe$/, "");
    return kn(Mt.has(o) ? o : "other");
}
function NRr() {
    return qGn(process.env.SHELL || process.env.COMSPEC || "");
}
const Ose = [
    "us",
    "eu",
    "apac",
    "jp",
    "au",
    "us-gov",
    "global"
];
const Z = [
    "us",
    "eu",
    "apac",
    "jp",
    "au",
    "global"
];
const l = {};
Mr(l, {
    AGENT_PROXY_AUTH_TOKEN: ()=>Yt,
    ANTHROPIC_API_KEY: ()=>at,
    ANTHROPIC_AUTH_TOKEN: ()=>Bt,
    ANTHROPIC_AWS_API_KEY: ()=>Ht,
    ANTHROPIC_FEDERATION_RULE_ID: ()=>Po,
    ANTHROPIC_FOUNDRY_API_KEY: ()=>Gt,
    ANTHROPIC_FOUNDRY_AUTH_TOKEN: ()=>mt,
    ANTHROPIC_ORGANIZATION_ID: ()=>ao,
    ANTHROPIC_PROFILE: ()=>uo,
    ANTHROPIC_WORKSPACE_ID: ()=>Bo,
    AWS_BEARER_TOKEN_BEDROCK: ()=>bt,
    AWS_CONTAINER_CREDENTIALS_FULL_URI: ()=>Kt,
    AWS_CONTAINER_CREDENTIALS_RELATIVE_URI: ()=>ft,
    AWS_ROLE_ARN: ()=>dt,
    AWS_WEB_IDENTITY_TOKEN_FILE: ()=>Ft,
    CLAUDE_CODE_ACCOUNT_TAGGED_ID: ()=>Ho,
    CLAUDE_CODE_ACCOUNT_UUID: ()=>bo,
    CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR: ()=>wt,
    CLAUDE_CODE_API_KEY_HELPER_TTL_MS: ()=>Lo,
    CLAUDE_CODE_AUTH_FAIL_EXIT_MS: ()=>To,
    CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS: ()=>lo,
    CLAUDE_CODE_CUSTOM_OAUTH_URL: ()=>$t,
    CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID: ()=>Qt,
    CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER: ()=>co,
    CLAUDE_CODE_FEDERATION_CACHE_DIR: ()=>Mo,
    CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR: ()=>Xt,
    CLAUDE_CODE_HFI_BEARER_TOKEN: ()=>vt,
    CLAUDE_CODE_HOST_AUTH_ENV_VAR: ()=>_o,
    CLAUDE_CODE_HOST_AUTH_REFRESH_TIMEOUT_MS: ()=>oo,
    CLAUDE_CODE_HOST_CREDS_FILE: ()=>Eo,
    CLAUDE_CODE_OAUTH_401_WAIT_MS: ()=>Oo,
    CLAUDE_CODE_OAUTH_CLIENT_ID: ()=>Jt,
    CLAUDE_CODE_OAUTH_REFRESH_TOKEN: ()=>jt,
    CLAUDE_CODE_OAUTH_SCOPES: ()=>zt,
    CLAUDE_CODE_OAUTH_TOKEN: ()=>ut,
    CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR: ()=>ht,
    CLAUDE_CODE_ORGANIZATION_UUID: ()=>Go,
    CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS: ()=>po,
    CLAUDE_CODE_RATE_LIMIT_TIER: ()=>fo,
    CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH: ()=>to,
    CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH: ()=>qt,
    CLAUDE_CODE_SESSION_ACCESS_TOKEN: ()=>ro,
    CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH: ()=>Uo,
    CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH: ()=>io,
    CLAUDE_CODE_SKIP_AWS_CRED_CACHE: ()=>No,
    CLAUDE_CODE_SKIP_BEDROCK_AUTH: ()=>Ro,
    CLAUDE_CODE_SKIP_FOUNDRY_AUTH: ()=>Io,
    CLAUDE_CODE_SKIP_MANTLE_AUTH: ()=>xo,
    CLAUDE_CODE_SKIP_VERTEX_AUTH: ()=>So,
    CLAUDE_CODE_SUBSCRIPTION_TYPE: ()=>Fo,
    CLAUDE_CODE_USER_EMAIL: ()=>mo,
    CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR: ()=>kt,
    CLAUDE_LOCAL_OAUTH_API_BASE: ()=>Co,
    CLAUDE_LOCAL_OAUTH_APPS_BASE: ()=>Do,
    CLAUDE_LOCAL_OAUTH_CONSOLE_BASE: ()=>Ao,
    CLAUDE_SESSION_INGRESS_TOKEN_FILE: ()=>Zt,
    CLAUDE_TRUSTED_DEVICE_TOKEN: ()=>so,
    CLOUDSDK_AUTH_ACCESS_TOKEN: ()=>Wt,
    ENVIRONMENT_SERVICE_KEY: ()=>gt,
    MCP_CLIENT_SECRET: ()=>yt,
    MCP_XAA_IDP_CLIENT_SECRET: ()=>Vt,
    USE_LOCAL_OAUTH: ()=>eo,
    USE_STAGING_OAUTH: ()=>no
});
var at = H.str();
var Bt = H.str();
var ut = H.str();
var bt = H.str();
var Ht = H.str();
var Gt = H.str();
var mt = H.str();
var Ft = H.str();
var dt = H.str();
var ft = H.str();
var Kt = H.str();
var Wt = H.str();
var vt = H.str();
var Yt = H.str();
var gt = H.str();
var yt = H.str();
var Vt = H.str();
var wt = H.str();
var ht = H.str();
var Xt = H.str();
var kt = H.str();
var Zt = H.str();
var jt = H.str();
var Jt = H.str();
var Qt = H.str();
var zt = H.str();
var $t = H.str();
var qt = H.bool();
var to = H.bool();
var oo = H.int({
    min: 1
});
var _o = H.str();
var Eo = H.str();
var ro = H.str();
var so = H.str();
var eo = H.bool();
var no = H.bool();
var Co = H.str();
var Do = H.str();
var Ao = H.str();
var Oo = H.int({
    min: 0
});
var To = H.int({
    min: 0
});
var Lo = H.int();
var co = H.bool();
var po = H.int();
var Ro = H.bool();
var So = H.bool();
var Io = H.bool();
var Uo = H.bool();
var io = H.bool();
var xo = H.bool();
var No = H.bool();
var lo = H.int({
    min: 1,
    max: 2147483647
});
var Po = H.str();
var Mo = H.str();
var ao = H.str();
var Bo = H.str();
var uo = H.str();
var bo = H.str();
var Ho = H.str();
var Go = H.str();
var mo = H.str();
var Fo = H.str();
var fo = H.str();
const P = {};
Mr(P, {
    ANT_CLAUDE_CODE_METRICS_ENDPOINT: ()=>X_,
    ANT_OTEL_EXPORTER_OTLP_ENDPOINT: ()=>v_,
    ANT_OTEL_EXPORTER_OTLP_HEADERS: ()=>Y_,
    ANT_OTEL_EXPORTER_OTLP_PROTOCOL: ()=>g_,
    ANT_OTEL_LOGS_EXPORTER: ()=>y_,
    ANT_OTEL_METRICS_EXPORTER: ()=>V_,
    ANT_OTEL_RESOURCE_ATTRIBUTES: ()=>h_,
    ANT_OTEL_TRACES_EXPORTER: ()=>w_,
    BETA_TRACING_ENDPOINT: ()=>k_,
    CLAUDE_CODE_BENCH_LIVE_COUNTS: ()=>qo,
    CLAUDE_CODE_BYOC_ENABLE_DATADOG: ()=>e_,
    CLAUDE_CODE_DATADOG_FLUSH_INTERVAL_MS: ()=>r_,
    CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS: ()=>s_,
    CLAUDE_CODE_DEBUG_LOGS_DIR: ()=>Yo,
    CLAUDE_CODE_DEBUG_LOG_LEVEL: ()=>vo,
    CLAUDE_CODE_DEBUG_REPAINTS: ()=>go,
    CLAUDE_CODE_DIAGNOSTICS_FILE: ()=>yo,
    CLAUDE_CODE_ENHANCED_TELEMETRY_BETA: ()=>t_,
    CLAUDE_CODE_FRAME_TIMING_LOG: ()=>Zo,
    CLAUDE_CODE_FRAME_TIMING_SAMPLE_EVERY: ()=>jo,
    CLAUDE_CODE_OTEL_CONTENT_MAX_LENGTH: ()=>G_,
    CLAUDE_CODE_OTEL_DIAG_STDERR: ()=>n_,
    CLAUDE_CODE_OTEL_FLUSH_TIMEOUT_MS: ()=>o_,
    CLAUDE_CODE_OTEL_HEADERS_HELPER_DEBOUNCE_MS: ()=>E_,
    CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS: ()=>__,
    CLAUDE_CODE_PERFETTO_TRACE: ()=>Xo,
    CLAUDE_CODE_PERFETTO_WRITE_INTERVAL_S: ()=>ko,
    CLAUDE_CODE_PROFILE_STARTUP: ()=>ho,
    CLAUDE_CODE_SESSION_LOG: ()=>Jo,
    CLAUDE_CODE_TEE_SDK_STDOUT: ()=>$o,
    CLAUDE_CODE_TERMINAL_RECORDING: ()=>zo,
    CLAUDE_DEBUG: ()=>Ko,
    CLAUDE_PTY_RECORD: ()=>Qo,
    DEBUG: ()=>Wo,
    DEBUG_CLAUDE_AGENT_SDK: ()=>Vo,
    DEBUG_SDK: ()=>wo,
    OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: ()=>u_,
    OTEL_EXPORTER_OTLP_ENDPOINT: ()=>O_,
    OTEL_EXPORTER_OTLP_HEADERS: ()=>T_,
    OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: ()=>c_,
    OTEL_EXPORTER_OTLP_LOGS_HEADERS: ()=>p_,
    OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: ()=>R_,
    OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: ()=>S_,
    OTEL_EXPORTER_OTLP_METRICS_HEADERS: ()=>I_,
    OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: ()=>U_,
    OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: ()=>i_,
    OTEL_EXPORTER_OTLP_PROTOCOL: ()=>L_,
    OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: ()=>x_,
    OTEL_EXPORTER_OTLP_TRACES_HEADERS: ()=>N_,
    OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: ()=>l_,
    OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: ()=>b_,
    OTEL_LOGS_EXPORTER: ()=>D_,
    OTEL_LOGS_EXPORT_INTERVAL: ()=>M_,
    OTEL_LOG_ASSISTANT_RESPONSES: ()=>F_,
    OTEL_LOG_MANAGED_SETTINGS: ()=>K_,
    OTEL_LOG_RAW_API_BODIES: ()=>W_,
    OTEL_LOG_TOOL_CONTENT: ()=>d_,
    OTEL_LOG_TOOL_DETAILS: ()=>f_,
    OTEL_LOG_USER_PROMPTS: ()=>m_,
    OTEL_METRICS_EXPORTER: ()=>C_,
    OTEL_METRIC_EXPORT_INTERVAL: ()=>P_,
    OTEL_RESOURCE_ATTRIBUTES: ()=>B_,
    OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: ()=>H_,
    OTEL_TRACES_EXPORTER: ()=>A_,
    OTEL_TRACES_EXPORT_INTERVAL: ()=>a_
});
var Ko = H.bool();
var Wo = H.str();
var vo = H.str();
var Yo = H.str();
var go = H.bool();
var yo = H.str();
var Vo = H.bool();
var wo = H.bool();
var ho = H.bool();
var Xo = H.str();
var ko = H.int();
var Zo = H.str();
var jo = H.int();
var Jo = H.str();
var Qo = H.str();
var zo = H.str();
var $o = H.bool();
var qo = H.bool();
var t_ = H.bool();
var o_ = H.int();
var __ = H.int();
var E_ = H.int();
var r_ = H.int({
    min: 1
});
var s_ = H.int({
    min: 1
});
var e_ = H.bool();
var n_ = H.bool();
var C_ = H.str();
var D_ = H.str();
var A_ = H.str();
var O_ = H.str();
var T_ = H.str();
var L_ = H.str();
var c_ = H.str();
var p_ = H.str();
var R_ = H.str();
var S_ = H.str();
var I_ = H.str();
var U_ = H.str();
var i_ = H.str();
var x_ = H.str();
var N_ = H.str();
var l_ = H.str();
var P_ = H.int();
var M_ = H.int();
var a_ = H.int();
var B_ = H.str();
var u_ = H.int({
    min: 0
});
var b_ = H.int({
    min: 0
});
var H_ = H.int({
    min: 0
});
var G_ = H.int({
    min: 1,
    digitsOnly: true
});
var m_ = H.bool();
var F_ = H.triBool();
var d_ = H.bool();
var f_ = H.bool();
var K_ = H.bool();
var W_ = H.bool();
var v_ = H.str();
var Y_ = H.str();
var g_ = H.str();
var y_ = H.str();
var V_ = H.str();
var w_ = H.str();
var h_ = H.str();
var X_ = H.str();
var k_ = H.str();
const M = {};
Mr(M, {
    CLAUDE_AX_ANNOUNCEMENT_HOLD_MS: ()=>Q_,
    CLAUDE_AX_PREPARK_MS: ()=>J_,
    CLAUDE_AX_REWRITE_HELD_ANNOUNCEMENT: ()=>z_,
    CLAUDE_AX_SCREEN_READER: ()=>Z_,
    CLAUDE_AX_STARTUP_QUIET_MS: ()=>j_,
    CLAUDE_CHROME_CLASSIFIER_FLOOR: ()=>$_,
    CLAUDE_CODE_ACCESSIBILITY: ()=>Gs,
    CLAUDE_CODE_ACT_DONT_REDERIVE: ()=>ms,
    CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT: ()=>tE,
    CLAUDE_CODE_AMBER_ASTROLABE: ()=>os,
    CLAUDE_CODE_ARTIFACT_ASSETS: ()=>se,
    CLAUDE_CODE_ARTIFACT_COMMENTS: ()=>Vs,
    CLAUDE_CODE_ARTIFACT_COMMENTS_AUTOREACT: ()=>ws,
    CLAUDE_CODE_ARTIFACT_COMMENT_FAST_ACK: ()=>Xs,
    CLAUDE_CODE_ARTIFACT_COMMENT_FAST_ACK_FIXED: ()=>ks,
    CLAUDE_CODE_ARTIFACT_COMMENT_RESPONDER: ()=>hs,
    CLAUDE_CODE_ARTIFACT_DB: ()=>Zs,
    CLAUDE_CODE_ARTIFACT_DB_STR_REPLACE: ()=>js,
    CLAUDE_CODE_ARTIFACT_DELETE: ()=>Qs,
    CLAUDE_CODE_ARTIFACT_FRESH_READ: ()=>Le,
    CLAUDE_CODE_ARTIFACT_HOT: ()=>ne,
    CLAUDE_CODE_ARTIFACT_MULTI_FILE: ()=>ee,
    CLAUDE_CODE_ARTIFACT_OPENING_PREFETCH: ()=>ce,
    CLAUDE_CODE_ARTIFACT_OPEN_ACTION: ()=>qs,
    CLAUDE_CODE_ARTIFACT_PATH_PIN: ()=>Ce,
    CLAUDE_CODE_ARTIFACT_PIN: ()=>te,
    CLAUDE_CODE_ARTIFACT_PRESENCE: ()=>re,
    CLAUDE_CODE_ARTIFACT_PREVIEW: ()=>zs,
    CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR: ()=>$s,
    CLAUDE_CODE_ARTIFACT_QUICKSTART: ()=>Te,
    CLAUDE_CODE_ARTIFACT_REPL: ()=>Js,
    CLAUDE_CODE_ARTIFACT_ROOM: ()=>Ee,
    CLAUDE_CODE_ARTIFACT_SHARE: ()=>oe,
    CLAUDE_CODE_ARTIFACT_START_KIT: ()=>pe,
    CLAUDE_CODE_ARTIFACT_TOOLSET: ()=>De,
    CLAUDE_CODE_ARTIFACT_TYPES: ()=>Ae,
    CLAUDE_CODE_ARTIFACT_TYPE_CATALOG: ()=>Oe,
    CLAUDE_CODE_ARTIFACT_TYPE_CLOUD_CREATE: ()=>Re,
    CLAUDE_CODE_ARTIFACT_VERIFY: ()=>Se,
    CLAUDE_CODE_ARTIFACT_VERSIONS: ()=>_e,
    CLAUDE_CODE_ATTRIBUTION_ANNOUNCEMENT: ()=>Fs,
    CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST: ()=>VC,
    CLAUDE_CODE_AUTO_CONNECT_IDE: ()=>Ie,
    CLAUDE_CODE_AUTO_MODE_SERVER: ()=>Ue,
    CLAUDE_CODE_BASALT_COVE: ()=>CE,
    CLAUDE_CODE_BASH_EDIT_DIFF: ()=>sE,
    CLAUDE_CODE_BASH_OUTPUT_AUDIENCE_NOTE: ()=>gs,
    CLAUDE_CODE_BASH_SANDBOX_SHOW_INDICATOR: ()=>xe,
    CLAUDE_CODE_BG_TASKS_REPORT_RUNNING: ()=>iE,
    CLAUDE_CODE_BISON_CAIRN: ()=>_s,
    CLAUDE_CODE_BREEZY_HORIZON: ()=>DE,
    CLAUDE_CODE_BUBBLEWRAP: ()=>le,
    CLAUDE_CODE_CALM_MOCHI: ()=>Ms,
    CLAUDE_CODE_CCR_EARLY_HYDRATE_PREFETCH: ()=>Pe,
    CLAUDE_CODE_CCR_EARLY_PLUGINS_SYNC: ()=>ue,
    CLAUDE_CODE_CCR_EARLY_REMOTE_CONNECT: ()=>Me,
    CLAUDE_CODE_CCR_EARLY_SKILLS_SYNC: ()=>be,
    CLAUDE_CODE_CCR_FOLD_FIRST_TURN_RESCAN: ()=>He,
    CLAUDE_CODE_CCR_SKIP_FRESH_MIGRATIONS: ()=>Ge,
    CLAUDE_CODE_CHILD_SESSION: ()=>Fe,
    CLAUDE_CODE_CHROME_MCP_ORG_DENIED: ()=>fe,
    CLAUDE_CODE_COLD_COMPACT: ()=>Ke,
    CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL: ()=>xE,
    CLAUDE_CODE_COWORK_FRAME_ARTIFACTS: ()=>PE,
    CLAUDE_CODE_COZY_TEAPOT: ()=>eE,
    CLAUDE_CODE_CURRIED_TRINKET: ()=>nE,
    CLAUDE_CODE_DESKTOP_SKILL_SWITCHES: ()=>aE,
    CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING: ()=>GE,
    CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION: ()=>bE,
    CLAUDE_CODE_DISABLE_ADVISOR_TOOL: ()=>mE,
    CLAUDE_CODE_DISABLE_AGENT_VIEW: ()=>FE,
    CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN: ()=>dE,
    CLAUDE_CODE_DISABLE_ARTIFACT: ()=>fE,
    CLAUDE_CODE_DISABLE_ATTACHMENTS: ()=>KE,
    CLAUDE_CODE_DISABLE_ATTRIBUTION_CROSS_REPO: ()=>WE,
    CLAUDE_CODE_DISABLE_AUTH_REFRESH_LOCK: ()=>vE,
    CLAUDE_CODE_DISABLE_AUTO_MEMORY: ()=>YE,
    CLAUDE_CODE_DISABLE_AWAITING_USER_IDLE: ()=>gE,
    CLAUDE_CODE_DISABLE_BACKGROUND_TASKS: ()=>yE,
    CLAUDE_CODE_DISABLE_BEDROCK_CONTENT_TYPE_DEFAULT: ()=>wE,
    CLAUDE_CODE_DISABLE_BEDROCK_CONTENT_TYPE_GUARD: ()=>hE,
    CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF: ()=>XE,
    CLAUDE_CODE_DISABLE_BG_STABLE_PATH: ()=>kE,
    CLAUDE_CODE_DISABLE_BUNDLED_SKILLS: ()=>ZE,
    CLAUDE_CODE_DISABLE_CFC_PROMPT: ()=>jE,
    CLAUDE_CODE_DISABLE_CLAUDE_API_SKILL: ()=>JE,
    CLAUDE_CODE_DISABLE_CLAUDE_CODE_SKILL: ()=>QE,
    CLAUDE_CODE_DISABLE_CLAUDE_MDS: ()=>zE,
    CLAUDE_CODE_DISABLE_CRON: ()=>$E,
    CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT: ()=>qE,
    CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS: ()=>tr,
    CLAUDE_CODE_DISABLE_EXPLORE_PLAN_AGENTS: ()=>_r,
    CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY: ()=>Er,
    CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING: ()=>rr,
    CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS: ()=>sr,
    CLAUDE_CODE_DISABLE_INLINE_SHELL_RM_PROMPT: ()=>Fr,
    CLAUDE_CODE_DISABLE_LAUNCH_COMPOSER: ()=>er,
    CLAUDE_CODE_DISABLE_MCP_TASK_BACKGROUND: ()=>VE,
    CLAUDE_CODE_DISABLE_MEMORY_BULK_INFLATE: ()=>nr,
    CLAUDE_CODE_DISABLE_MEMORY_MASS_DELETE_HOLD: ()=>Cr,
    CLAUDE_CODE_DISABLE_MEMORY_PERIODIC_RESYNC: ()=>Dr,
    CLAUDE_CODE_DISABLE_MEMORY_RO_UNSAVED_NOTICE: ()=>Ar,
    CLAUDE_CODE_DISABLE_MEMORY_STREAM_LIST: ()=>Or,
    CLAUDE_CODE_DISABLE_MOUSE: ()=>cr,
    CLAUDE_CODE_DISABLE_MOUSE_CLICKS: ()=>pr,
    CLAUDE_CODE_DISABLE_NESTED_CHAIN_IDLE: ()=>Rr,
    CLAUDE_CODE_DISABLE_NESTED_USER_REPAIR: ()=>Sr,
    CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: ()=>Ir,
    CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK: ()=>Ur,
    CLAUDE_CODE_DISABLE_NOTIFICATION_PRESENCE_CHECK: ()=>ir,
    CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL: ()=>xr,
    CLAUDE_CODE_DISABLE_ORG_MEMORY: ()=>Nr,
    CLAUDE_CODE_DISABLE_PERMISSION_PROMPT_NOTIFY_HOOKS: ()=>Tr,
    CLAUDE_CODE_DISABLE_POLICY_SKILLS: ()=>lr,
    CLAUDE_CODE_DISABLE_POWERSHELL_CMD_RM_DENY: ()=>Pr,
    CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP: ()=>ar,
    CLAUDE_CODE_DISABLE_PROACTIVITY: ()=>Br,
    CLAUDE_CODE_DISABLE_REFUSAL_FALLBACK: ()=>ur,
    CLAUDE_CODE_DISABLE_REFUSAL_RETRY: ()=>br,
    CLAUDE_CODE_DISABLE_STARTUP_WORK_GATE: ()=>dr,
    CLAUDE_CODE_DISABLE_STRUCTURED_OUTPUTS: ()=>or,
    CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT: ()=>mr,
    CLAUDE_CODE_DISABLE_TERMINAL_TITLE: ()=>fr,
    CLAUDE_CODE_DISABLE_THINKING: ()=>Wr,
    CLAUDE_CODE_DISABLE_VIRTUAL_SCROLL: ()=>vr,
    CLAUDE_CODE_DISABLE_WEB_FETCH: ()=>Yr,
    CLAUDE_CODE_DISABLE_WINDOWS_SHELL_LAUNCHER: ()=>hn,
    CLAUDE_CODE_DISABLE_WORKFLOWS: ()=>gr,
    CLAUDE_CODE_EDITOR_CODELIVERY: ()=>NE,
    CLAUDE_CODE_ELEGANT_MEADOW: ()=>UE,
    CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT: ()=>Vr,
    CLAUDE_CODE_ENABLE_AWAY_SUMMARY: ()=>wr,
    CLAUDE_CODE_ENABLE_BACKGROUND_PLUGIN_REFRESH: ()=>hr,
    CLAUDE_CODE_ENABLE_CFC: ()=>Xr,
    CLAUDE_CODE_ENABLE_DESIGN_SYNC: ()=>kr,
    CLAUDE_CODE_ENABLE_EXPERIMENTAL_ADVISOR_TOOL: ()=>Zr,
    CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL: ()=>jr,
    CLAUDE_CODE_ENABLE_FINE_GRAINED_TOOL_STREAMING: ()=>Jr,
    CLAUDE_CODE_ENABLE_LAUNCH_COMPOSER: ()=>Qr,
    CLAUDE_CODE_ENABLE_MENU_KIND_LANES: ()=>zr,
    CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION: ()=>Cs,
    CLAUDE_CODE_ENABLE_REFRESH_MCP_TOOLS: ()=>Ds,
    CLAUDE_CODE_ENABLE_REMOTE_RECAP: ()=>As,
    CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING: ()=>Os,
    CLAUDE_CODE_ENABLE_TASKS: ()=>Ts,
    CLAUDE_CODE_ENABLE_TODO_TOOLS: ()=>Ls,
    CLAUDE_CODE_ENABLE_TOKEN_USAGE_ATTACHMENT: ()=>cs,
    CLAUDE_CODE_ENABLE_XAA: ()=>ps,
    CLAUDE_CODE_EVAL_INTERVIEW_SESSION: ()=>un,
    CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS: ()=>We,
    CLAUDE_CODE_EXPERIMENTAL_OBSERVER_AGENTS: ()=>Ye,
    CLAUDE_CODE_FLEETVIEW_SIMPLE: ()=>$r,
    CLAUDE_CODE_FORCE_MID_CONVERSATION_SYSTEM: ()=>Ze,
    CLAUDE_CODE_FORCE_SESSION_PERSISTENCE: ()=>he,
    CLAUDE_CODE_FORCE_STRIKETHROUGH: ()=>Xe,
    CLAUDE_CODE_FORCE_TERMINAL_IMAGES: ()=>ke,
    CLAUDE_CODE_FORCE_WINDOWS_CREDMAN: ()=>Je,
    CLAUDE_CODE_FORK_SUBAGENT: ()=>ge,
    CLAUDE_CODE_FORWARD_SUBAGENT_TEXT: ()=>Qe,
    CLAUDE_CODE_FORWARD_USER_INTENT: ()=>lE,
    CLAUDE_CODE_GATEWAY_HINT_HEADERS: ()=>Zn,
    CLAUDE_CODE_GB_DISK_CACHE_WHEN_TELEMETRY_OFF: ()=>qr,
    CLAUDE_CODE_GENTLE_PARASOL: ()=>EE,
    CLAUDE_CODE_GLOB_HIDDEN: ()=>ye,
    CLAUDE_CODE_GLOB_NO_IGNORE: ()=>Ve,
    CLAUDE_CODE_GORSE_PLOVER: ()=>rs,
    CLAUDE_CODE_GROWTHBOOK_KICK_FROM_INIT: ()=>ae,
    CLAUDE_CODE_GROWTHBOOK_KICK_ON_WARM_CACHE: ()=>Be,
    CLAUDE_CODE_HARBOR_KITE: ()=>Rs,
    CLAUDE_CODE_HARBOR_KITE_CLOUD: ()=>Is,
    CLAUDE_CODE_HARBOR_KITE_PACING_OFF: ()=>Ss,
    CLAUDE_CODE_HARMONIC_RIDDLE: ()=>Ps,
    CLAUDE_CODE_HIDE_CWD: ()=>we,
    CLAUDE_CODE_HOOKS_SAME_THREAD: ()=>jC,
    CLAUDE_CODE_HOST_SCHEDULED_RUN: ()=>ME,
    CLAUDE_CODE_HOVER_REST: ()=>ts,
    CLAUDE_CODE_HUMBLE_HAMMOCK: ()=>LE,
    CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL: ()=>ze,
    CLAUDE_CODE_IDE_SKIP_VALID_CHECK: ()=>$e,
    CLAUDE_CODE_INCLUDE_PARTIAL_MESSAGES: ()=>qe,
    CLAUDE_CODE_INLINE_TOOLS: ()=>je,
    CLAUDE_CODE_JUNIPER_SUNDIAL: ()=>ns,
    CLAUDE_CODE_KB_COHESION_FIXES: ()=>Hs,
    CLAUDE_CODE_LANTERN_PRISM: ()=>Us,
    CLAUDE_CODE_LARCH_CISTERN: ()=>Es,
    CLAUDE_CODE_MANAGED_CONFIG_PREFETCH: ()=>me,
    CLAUDE_CODE_MEMORY_PUSH_DELETE_MODE: ()=>Lr,
    CLAUDE_CODE_MODEL_CAPABILITIES: ()=>ds,
    CLAUDE_CODE_NANKEEN_KESTREL: ()=>HE,
    CLAUDE_CODE_NATIVE_CURSOR: ()=>tn,
    CLAUDE_CODE_NEW_INIT: ()=>on,
    CLAUDE_CODE_NONBLOCKING_STDOUT: ()=>En,
    CLAUDE_CODE_NO_FLICKER: ()=>_n,
    CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE: ()=>rn,
    CLAUDE_CODE_PARSED_WILLOW: ()=>RE,
    CLAUDE_CODE_PEWTER_OWL: ()=>jn,
    CLAUDE_CODE_PEWTER_OWL_TOOL: ()=>Jn,
    CLAUDE_CODE_PLAN_MODE_REQUIRED: ()=>sn,
    CLAUDE_CODE_PLUGIN_BINARY_ASSETS: ()=>gn,
    CLAUDE_CODE_PLUGIN_DIRS: ()=>QC,
    CLAUDE_CODE_PLUGIN_DIR_WATCH: ()=>JC,
    CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE: ()=>vn,
    CLAUDE_CODE_PLUGIN_PREFER_HTTPS: ()=>Vn,
    CLAUDE_CODE_PLUGIN_USE_ZIP_CACHE: ()=>yn,
    CLAUDE_CODE_POLISHED_DEWDROP: ()=>OE,
    CLAUDE_CODE_POLL_EVENTS: ()=>en,
    CLAUDE_CODE_POLL_EVENT_DECLARATIONS: ()=>nn,
    CLAUDE_CODE_POWERSHELL_RESPECT_EXECUTION_POLICY: ()=>wn,
    CLAUDE_CODE_PROACTIVE: ()=>Cn,
    CLAUDE_CODE_PROJECTS_SESSION: ()=>Wn,
    CLAUDE_CODE_PROMPT_CACHE_TTL: ()=>KC,
    CLAUDE_CODE_PROPAGATE_TRACEPARENT: ()=>Xn,
    CLAUDE_CODE_REFUSAL_FALLBACK_CATCH_ALL: ()=>Hr,
    CLAUDE_CODE_REMOTE_TOOLS_FORWARD: ()=>zC,
    CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED: ()=>uE,
    CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN: ()=>BE,
    CLAUDE_CODE_REMOVE_PROMPT_STRINGS: ()=>ss,
    CLAUDE_CODE_REPORT_FINDINGS: ()=>Gr,
    CLAUDE_CODE_RIPPLING_TULIP: ()=>ls,
    CLAUDE_CODE_RUSTLING_PIXEL: ()=>TE,
    CLAUDE_CODE_SEND_FEEDBACK: ()=>Kr,
    CLAUDE_CODE_SESSION_ATTENDED: ()=>de,
    CLAUDE_CODE_SILENT_TURN_REMINDER: ()=>Ks,
    CLAUDE_CODE_SILENT_TURN_REMINDER_SECONDS: ()=>vs,
    CLAUDE_CODE_SILENT_TURN_REMINDER_TEXT: ()=>Ys,
    CLAUDE_CODE_SILENT_TURN_REMINDER_TURNS: ()=>Ws,
    CLAUDE_CODE_SKILL_PROPOSALS: ()=>Dn,
    CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS: ()=>An,
    CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS_EXCEPT: ()=>On,
    CLAUDE_CODE_SKIP_PROJECT_BACKFILL: ()=>Tn,
    CLAUDE_CODE_SKIP_PROMPT_HISTORY: ()=>Ln,
    CLAUDE_CODE_SKIP_REPO_UPLOAD: ()=>cn,
    CLAUDE_CODE_SNAPPY_PELICAN: ()=>AE,
    CLAUDE_CODE_SQUISHY_NEWT: ()=>IE,
    CLAUDE_CODE_STELLAR_DRIFT: ()=>cE,
    CLAUDE_CODE_STREAMED_BUMBLEBEE: ()=>as,
    CLAUDE_CODE_STREAMED_BUMBLEBEE_TEXT: ()=>Bs,
    CLAUDE_CODE_SUBAGENT_CACHE_EVICT: ()=>pn,
    CLAUDE_CODE_SUBAGENT_CONFIG_WARNING: ()=>us,
    CLAUDE_CODE_SUBAGENT_PROMPT_CACHE_TTL: ()=>WC,
    CLAUDE_CODE_SUBAGENT_PROMPT_SNAPSHOT: ()=>Rn,
    CLAUDE_CODE_SUPPRESS_SESSION_ATTRIBUTION: ()=>Sn,
    CLAUDE_CODE_SYNC_PLUGINS: ()=>Un,
    CLAUDE_CODE_SYNC_PLUGIN_INSTALL: ()=>In,
    CLAUDE_CODE_SYNC_SKILLS: ()=>xn,
    CLAUDE_CODE_TAG_ISMETA_MESSAGES: ()=>Nn,
    CLAUDE_CODE_THINKING_DISPLAY_UPDATES: ()=>ys,
    CLAUDE_CODE_THISTLE_GREBE: ()=>oE,
    CLAUDE_CODE_THRIFTY_SONIC: ()=>rE,
    CLAUDE_CODE_TOASTY_THIMBLE: ()=>_E,
    CLAUDE_CODE_TODO_REMINDER_MODE: ()=>is,
    CLAUDE_CODE_TOTAL_TOKENS_REMINDER: ()=>xs,
    CLAUDE_CODE_TOTAL_TOKENS_REMINDER_AFTER_USER_TURN: ()=>bs,
    CLAUDE_CODE_TOTAL_TOKENS_REMINDER_BUDGET: ()=>Ns,
    CLAUDE_CODE_TRANSCRIPT_LOCAL_GC: ()=>ln,
    CLAUDE_CODE_TURN_UPDATES: ()=>fs,
    CLAUDE_CODE_TWO_STAGE_CLASSIFIER: ()=>Pn,
    CLAUDE_CODE_USE_COWORK_PLUGINS: ()=>Mn,
    CLAUDE_CODE_USE_NATIVE_FILE_SEARCH: ()=>an,
    CLAUDE_CODE_USE_POWERSHELL_TOOL: ()=>Bn,
    CLAUDE_CODE_WEBFETCH_CACHE_TTL_MS: ()=>Hn,
    CLAUDE_CODE_WEBFETCH_DEADLINE_MS: ()=>Gn,
    CLAUDE_CODE_WEBFETCH_USE_CCR_PROXY: ()=>mn,
    CLAUDE_CODE_WEBSEARCH_CITATIONS: ()=>dn,
    CLAUDE_CODE_WEBSEARCH_CITATIONS_DECLARED: ()=>fn,
    CLAUDE_CODE_WEBSEARCH_USE_CCR_PROXY: ()=>Fn,
    CLAUDE_CODE_WEB_FETCH_AGENT: ()=>bn,
    CLAUDE_CODE_WEB_SEARCH_FAST_ARG: ()=>Kn,
    CLAUDE_CODE_WHIMSICAL_ELEPHANT: ()=>SE,
    CLAUDE_CODE_WILLOW_TERN: ()=>es,
    CLAUDE_CODE_WISE_COMET: ()=>pE,
    CLAUDE_CODE_WORKFLOWS: ()=>yr,
    CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS: ()=>EC,
    CLAUDE_CODE_WORKFLOW_PREFIX_STAGGER_MS: ()=>_C,
    CLAUDE_CODE_WORKFLOW_SIZE_WARNING_AGENTS: ()=>tC,
    CLAUDE_CODE_WORKFLOW_SIZE_WARNING_TOKENS: ()=>oC,
    CLAUDE_DISABLE_ADOPT: ()=>Qn,
    CLAUDE_IMPORT_CONVERSATIONS: ()=>zn,
    CLAUDE_RUNNER_DISABLE_AWAITING_ACTION_OVERRIDE: ()=>$n,
    CLAUDE_WORKFLOW_NAME_ONLY: ()=>qn,
    DISABLE_AUTOUPDATER: ()=>sC,
    DISABLE_AUTO_COMPACT: ()=>rC,
    DISABLE_BRIEF_MODE_STOP_HOOK: ()=>eC,
    DISABLE_BUG_COMMAND: ()=>nC,
    DISABLE_COST_WARNINGS: ()=>CC,
    DISABLE_DOCTOR_COMMAND: ()=>DC,
    DISABLE_ERROR_REPORTING: ()=>AC,
    DISABLE_EXTRA_USAGE_COMMAND: ()=>OC,
    DISABLE_FEEDBACK_COMMAND: ()=>TC,
    DISABLE_GROWTHBOOK: ()=>LC,
    DISABLE_INSTALL_GITHUB_APP_COMMAND: ()=>cC,
    DISABLE_INTERLEAVED_THINKING: ()=>pC,
    DISABLE_LOGIN_COMMAND: ()=>RC,
    DISABLE_LOGOUT_COMMAND: ()=>SC,
    DISABLE_PROMPT_CACHING: ()=>IC,
    DISABLE_PROMPT_CACHING_FABLE: ()=>NC,
    DISABLE_PROMPT_CACHING_HAIKU: ()=>UC,
    DISABLE_PROMPT_CACHING_MYTHOS: ()=>lC,
    DISABLE_PROMPT_CACHING_OPUS: ()=>iC,
    DISABLE_PROMPT_CACHING_SONNET: ()=>xC,
    DISABLE_TELEMETRY: ()=>PC,
    DISABLE_UPDATES: ()=>MC,
    DISABLE_UPGRADE_COMMAND: ()=>aC,
    EMBEDDED_SEARCH_TOOLS: ()=>kC,
    ENABLE_BETA_TRACING_DETAILED: ()=>BC,
    ENABLE_CLAUDEAI_MCP_SERVERS: ()=>uC,
    ENABLE_ENHANCED_TELEMETRY_BETA: ()=>bC,
    ENABLE_LOCKLESS_UPDATES: ()=>HC,
    ENABLE_LSP_TOOL: ()=>GC,
    ENABLE_MCP_LARGE_OUTPUT_FILES: ()=>mC,
    ENABLE_PID_BASED_VERSION_LOCKING: ()=>FC,
    ENABLE_PROMPT_CACHING_1H: ()=>dC,
    ENABLE_PROMPT_CACHING_1H_BEDROCK: ()=>fC,
    ENABLE_SESSION_BACKGROUNDING: ()=>vC,
    ENABLE_SESSION_PERSISTENCE: ()=>YC,
    ENABLE_TOOL_SEARCH: ()=>gC,
    FORCE_AUTOUPDATE_PLUGINS: ()=>yC,
    FORCE_CODE_TERMINAL: ()=>wC,
    FORCE_PROMPT_CACHING_5M: ()=>hC,
    FORCE_VCR: ()=>XC,
    INK_SCREEN_READER: ()=>q_,
    USE_API_CONTEXT_MANAGEMENT: ()=>ZC
});
const m8e = [
    "5m",
    "1h"
];
var Z_ = H.triBool();
var j_ = H.int({
    min: 0
});
var J_ = H.int({
    min: 0
});
var Q_ = H.int({
    min: 0
});
var z_ = H.triBool();
var $_ = H.triBool();
var q_ = H.bool();
var tE = H.bool();
var oE = H.str();
var _E = H.str();
var EE = H.str();
var rE = H.triBool();
var sE = H.triBool();
var eE = H.enum([
    "strict",
    "relaxed"
]);
var nE = H.enum([
    "control",
    "lean",
    "short",
    "short_v2",
    "capped"
]);
var CE = H.bool();
var DE = H.str();
var AE = H.triBool();
var OE = H.enum([
    "drop",
    "block",
    "off"
]);
var TE = H.str();
var LE = H.triBool();
var cE = H.triBool();
var pE = H.triBool();
var RE = H.triBool();
var SE = H.triBool();
var IE = H.triBool();
var UE = H.triBool();
var iE = H.triBool();
var xE = H.bool();
var NE = H.bool();
var lE = H.bool();
var PE = H.bool();
var ME = H.bool();
var aE = H.bool();
var BE = H.bool();
var uE = H.str();
var bE = H.bool();
var HE = H.bool();
var GE = H.bool();
var mE = H.bool();
var FE = H.bool();
var dE = H.bool();
var fE = H.bool();
var KE = H.bool();
var WE = H.bool();
var vE = H.bool();
var YE = H.bool();
var gE = H.bool();
var yE = H.bool();
var VE = H.bool();
var wE = H.bool();
var hE = H.bool();
var XE = H.bool();
var kE = H.bool();
var ZE = H.bool();
var jE = H.bool();
var JE = H.bool();
var QE = H.bool();
var zE = H.bool();
var $E = H.bool();
var qE = H.bool();
var tr = H.bool();
var or = H.bool();
var _r = H.bool();
var Er = H.bool();
var rr = H.bool();
var sr = H.triBool();
var er = H.bool();
var nr = H.bool();
var Cr = H.bool();
var Dr = H.bool();
var Ar = H.bool();
var Or = H.bool();
var Tr = H.bool();
var Lr = H.enum([
    "corroborate",
    "immediate",
    "never"
]);
var cr = H.triBool();
var pr = H.triBool();
var Rr = H.bool();
var Sr = H.bool();
var Ir = H.bool();
var Ur = H.bool();
var ir = H.bool();
var xr = H.bool();
var Nr = H.bool();
var lr = H.bool();
var Pr = H.bool();
var ar = H.bool();
var Br = H.bool();
var ur = H.bool();
var br = H.bool();
var Hr = H.triBool();
var Gr = H.bool();
var mr = H.bool();
var Fr = H.bool();
var dr = H.bool();
var fr = H.bool();
var Kr = H.triBool();
var Wr = H.bool();
var vr = H.bool();
var Yr = H.bool();
var gr = H.bool();
var yr = H.triBool();
var Vr = H.bool();
var wr = H.bool();
var hr = H.bool();
var Xr = H.triBool();
var kr = H.bool();
var Zr = H.bool();
var jr = H.bool();
var Jr = H.triBool();
var Qr = H.bool();
var zr = H.bool();
var $r = H.bool();
var qr = H.bool();
var ts = H.triBool();
var os = H.bool();
var _s = H.triBool();
var Es = H.bool();
var rs = H.bool();
var ss = H.str();
var es = H.bool();
var ns = H.int({
    min: 1,
    digitsOnly: true
});
var Cs = H.triBool();
var Ds = H.bool();
var As = H.triBool();
var Os = H.bool();
var Ts = H.triBool();
var Ls = H.bool();
var cs = H.bool();
var ps = H.bool();
var Rs = H.str();
var Ss = H.bool();
var Is = H.bool();
var Us = H.bool();
var is = H.enum([
    "baseline",
    "off"
]);
var xs = H.str();
var Ns = H.int();
var ls = H.str();
var Ps = H.str();
var Ms = H.str();
var as = H.triBool();
var Bs = H.str();
var us = H.triBool();
var bs = H.triBool();
var Hs = H.bool();
var Gs = H.bool();
var ms = H.triBool();
var Fs = H.triBool();
var ds = H.str();
var fs = H.triBool();
var Ks = H.triBool();
var Ws = H.int({
    min: 1
});
var vs = H.int({
    min: 1,
    wholeValue: true
});
var Ys = H.str();
var gs = H.triBool();
var ys = H.triBool();
var Vs = H.triBool();
var ws = H.triBool();
var hs = H.triBool();
var Xs = H.triBool();
var ks = H.triBool();
var Zs = H.triBool();
var js = H.triBool();
var Js = H.triBool();
var Qs = H.triBool();
var zs = H.triBool();
var $s = H.triBool();
var qs = H.triBool();
var te = H.triBool();
var oe = H.triBool();
var _e = H.bool();
var Ee = H.triBool();
var re = H.triBool();
var se = H.triBool();
var ee = H.triBool();
var ne = H.triBool();
var Ce = H.triBool();
var De = H.triBool();
var Ae = H.triBool();
var Oe = H.triBool();
var Te = H.triBool();
var Le = H.triBool();
var ce = H.triBool();
var pe = H.triBool();
var Re = H.triBool();
var Se = H.triBool();
var Ie = H.triBool();
var Ue = H.str();
var xe = H.bool();
var le = H.bool();
var Pe = H.bool();
var Me = H.bool();
var ae = H.bool();
var Be = H.bool();
var ue = H.bool();
var be = H.bool();
var He = H.bool();
var Ge = H.bool();
var me = H.triBool();
var Fe = H.bool();
var de = H.triBool();
var fe = H.bool();
var Ke = H.bool();
var We = H.bool();
var Ye = H.bool();
var ge = H.triBool();
var ye = H.bool();
var Ve = H.bool();
var we = H.bool();
var he = H.bool();
var Xe = H.bool();
var ke = H.bool();
var Ze = H.bool();
var je = H.triBool();
var Je = H.str();
var Qe = H.bool();
var ze = H.bool();
var $e = H.bool();
var qe = H.bool();
var tn = H.bool();
var on = H.bool();
var _n = H.triBool();
var En = H.triBool();
var rn = H.bool();
var sn = H.bool();
var en = H.bool();
var nn = H.str();
var Cn = H.bool();
var Dn = H.bool();
var An = H.bool();
var On = H.str();
var Tn = H.bool();
var Ln = H.bool();
var cn = H.bool();
var pn = H.bool();
var Rn = H.bool();
var Sn = H.bool();
var In = H.bool();
var Un = H.bool();
var xn = H.bool();
var Nn = H.bool();
var ln = H.triBool();
var Pn = H.bool();
var Mn = H.bool();
var an = H.bool();
var Bn = H.triBool();
var un = H.bool();
var bn = H.triBool();
var Hn = H.int({
    min: 1,
    digitsOnly: true
});
var Gn = H.int({
    min: 0,
    digitsOnly: true
});
var mn = H.bool();
var Fn = H.bool();
var dn = H.bool();
var fn = H.bool();
var Kn = H.triBool();
var Wn = H.bool();
var vn = H.bool();
var gn = H.bool();
var yn = H.bool();
var Vn = H.bool();
var wn = H.bool();
var hn = H.bool();
var Xn = H.bool();
var Zn = H.triBool();
var jn = H.triBool();
var Jn = H.triBool();
var Qn = H.bool();
var zn = H.bool();
var $n = H.bool();
var qn = H.bool();
var tC = H.int({
    min: 1
});
var oC = H.int({
    min: 1
});
var _C = H.int({
    min: 0
});
var EC = H.int({
    min: 1,
    max: 256,
    digitsOnly: true
});
var rC = H.bool();
var sC = H.bool();
var eC = H.bool();
var nC = H.bool();
var CC = H.bool();
var DC = H.bool();
var AC = H.bool();
var OC = H.bool();
var TC = H.bool();
var LC = H.bool();
var cC = H.bool();
var pC = H.bool();
var RC = H.bool();
var SC = H.bool();
var IC = H.bool();
var UC = H.bool();
var iC = H.bool();
var xC = H.bool();
var NC = H.bool();
var lC = H.bool();
var PC = H.bool();
var MC = H.bool();
var aC = H.bool();
var BC = H.bool();
var uC = H.triBool();
var bC = H.bool();
var HC = H.bool();
var GC = H.bool();
var mC = H.triBool();
var FC = H.triBool();
var dC = H.bool();
var fC = H.bool();
var KC = H.enum(m8e);
var WC = H.enum(m8e);
var vC = H.bool();
var YC = H.bool();
var gC = H.str();
var yC = H.bool();
var VC = H.bool();
var wC = H.bool();
var hC = H.bool();
var XC = H.bool();
var kC = H.bool();
var ZC = H.bool();
var jC = H.bool();
var JC = H.triBool();
var QC = H.str();
var zC = H.bool();
const u = {};
Mr(u, {
    ALACRITTY_LOG: ()=>vA,
    ALACRITTY_WINDOW_ID: ()=>YA,
    ALLUSERSPROFILE: ()=>gD,
    ANDROID_HOME: ()=>RA,
    ANDROID_SDK_ROOT: ()=>SA,
    APPDATA: ()=>HD,
    APP_URL: ()=>IT,
    AWS_CA_BUNDLE: ()=>EA,
    AWS_EXECUTION_ENV: ()=>rT,
    AWS_LAMBDA_FUNCTION_NAME: ()=>ET,
    AZURE_FUNCTIONS_ENVIRONMENT: ()=>ST,
    BAT_THEME: ()=>lT,
    BROWSER: ()=>RD,
    BUILDKITE: ()=>vO,
    BUN_CHROME_PATH: ()=>NT,
    BUN_INSTALL: ()=>xT,
    CARGO_HTTP_CAINFO: ()=>sA,
    CDPATH: ()=>tD,
    CF_PAGES: ()=>oT,
    CIRCLECI: ()=>WO,
    CLOUDSDK_ACTIVE_CONFIG_NAME: ()=>cT,
    CLOUDSDK_CONFIG: ()=>LT,
    CLOUDSDK_CORE_CUSTOM_CA_CERTS_FILE: ()=>oA,
    CODER: ()=>wO,
    CODER_WORKSPACE_NAME: ()=>hO,
    CODESPACES: ()=>VO,
    COLORFGBG: ()=>xA,
    COLORTERM: ()=>iA,
    COMPUTERNAME: ()=>BD,
    COMSPEC: ()=>nD,
    CONTAINER_SANDBOX_MOUNT_POINT: ()=>uD,
    CURL_CA_BUNDLE: ()=>tA,
    CURSOR_TRACE_ID: ()=>rO,
    ComSpec: ()=>DD,
    ConEmuANSI: ()=>zA,
    ConEmuPID: ()=>$A,
    ConEmuTask: ()=>qA,
    DAYTONA_WS_ID: ()=>ZO,
    DEMO_VERSION: ()=>bT,
    DENO_CERT: ()=>rA,
    DENO_DEPLOYMENT_ID: ()=>_T,
    DISPLAY: ()=>SD,
    DO_NOT_TRACK: ()=>NA,
    DYNO: ()=>tT,
    EDITOR: ()=>cD,
    FORCE_COLOR: ()=>UA,
    GCLOUD_PROJECT: ()=>CT,
    GCM_INTERACTIVE: ()=>TO,
    GH_CONFIG_DIR: ()=>pO,
    GH_ENTERPRISE_TOKEN: ()=>xO,
    GH_HOST: ()=>UO,
    GH_REPO: ()=>iO,
    GH_TOKEN: ()=>IO,
    GITHUB_ACTIONS: ()=>aO,
    GITHUB_ACTION_INPUTS: ()=>BO,
    GITHUB_ACTION_PATH: ()=>uO,
    GITHUB_ACTOR: ()=>bO,
    GITHUB_ACTOR_ID: ()=>HO,
    GITHUB_ENTERPRISE_TOKEN: ()=>lO,
    GITHUB_ENV: ()=>PO,
    GITHUB_EVENT_NAME: ()=>GO,
    GITHUB_EVENT_PATH: ()=>mO,
    GITHUB_REPOSITORY: ()=>FO,
    GITHUB_REPOSITORY_ID: ()=>dO,
    GITHUB_REPOSITORY_OWNER: ()=>fO,
    GITHUB_REPOSITORY_OWNER_ID: ()=>KO,
    GITHUB_TOKEN: ()=>NO,
    GITHUB_WORKSPACE: ()=>MO,
    GITLAB_CI: ()=>YO,
    GITPOD_WORKSPACE_ID: ()=>XO,
    GIT_ASKPASS: ()=>OO,
    GIT_CONFIG_COUNT: ()=>LO,
    GIT_CONFIG_GLOBAL: ()=>cO,
    GIT_CONFIG_NOSYSTEM: ()=>OA,
    GIT_SSH_COMMAND: ()=>DO,
    GIT_SSL_CAINFO: ()=>AA,
    GIT_SSL_CAPATH: ()=>TA,
    GIT_TERMINAL_PROMPT: ()=>AO,
    GNOME_TERMINAL_SERVICE: ()=>KA,
    GOOGLE_APPLICATION_CREDENTIALS: ()=>DT,
    GOOGLE_CLOUD_PROJECT: ()=>nT,
    GOOGLE_CLOUD_WORKSTATIONS: ()=>kO,
    GRPC_DEFAULT_SSL_ROOTS_FILE_PATH: ()=>nA,
    HEX_CACERTS_PATH: ()=>DA,
    HISTFILE: ()=>ZD,
    HOME: ()=>$C,
    HOMEDRIVE: ()=>fD,
    HOMEPATH: ()=>KD,
    HOMESHARE: ()=>WD,
    HTTPLIB2_CA_CERTS: ()=>_A,
    HUB_CONFIG: ()=>RO,
    INTELLIJ_TERMINAL_COMMAND_BLOCKS: ()=>tO,
    INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED: ()=>oO,
    IS_DEMO: ()=>uT,
    IS_SANDBOX: ()=>BT,
    ITERM_SESSION_ID: ()=>mA,
    JAVA_HOME: ()=>cA,
    JAVA_TOOL_OPTIONS: ()=>pA,
    KITTY_WINDOW_ID: ()=>FA,
    KONSOLE_VERSION: ()=>dA,
    KUBERNETES_SERVICE_HOST: ()=>iT,
    K_SERVICE: ()=>sT,
    LANG: ()=>UD,
    LC_ALL: ()=>iD,
    LC_TERMINAL: ()=>aA,
    LC_TIME: ()=>xD,
    LOCALAPPDATA: ()=>GD,
    MSYSTEM: ()=>QA,
    NETLIFY: ()=>qO,
    NIX_SSL_CERT_FILE: ()=>CA,
    NODE_EXTRA_CA_CERTS: ()=>QD,
    NODE_OPTIONS: ()=>jD,
    NODE_PATH: ()=>JD,
    NO_COLOR: ()=>IA,
    NoDefaultCurrentDirectoryInExePath: ()=>LD,
    OneDrive: ()=>mD,
    OneDriveCommercial: ()=>dD,
    OneDriveConsumer: ()=>FD,
    P4PORT: ()=>PT,
    PATH: ()=>qC,
    PATHEXT: ()=>TD,
    PIP_CERT: ()=>eA,
    PLAYWRIGHT_BROWSERS_PATH: ()=>MT,
    PREFIX: ()=>_D,
    PROGRAMDATA: ()=>YD,
    PROJECT_DOMAIN: ()=>QO,
    PWD: ()=>oD,
    ProgramData: ()=>vD,
    ProgramFiles: ()=>OD,
    RENDER: ()=>$O,
    REPL_ID: ()=>jO,
    REPL_SLUG: ()=>JO,
    REQUESTS_CA_BUNDLE: ()=>qD,
    RUNNER_ENVIRONMENT: ()=>yO,
    RUNNER_OS: ()=>gO,
    SAFEUSER: ()=>yD,
    SESSIONNAME: ()=>VA,
    SHELL: ()=>eD,
    SPACE_CREATOR_USER_ID: ()=>UT,
    SSH_AUTH_SOCK: ()=>CO,
    SSH_CLIENT: ()=>sO,
    SSH_CONNECTION: ()=>eO,
    SSH_TTY: ()=>nO,
    SSL_CERT_DIR: ()=>$D,
    SSL_CERT_FILE: ()=>zD,
    STY: ()=>wA,
    SUDO_GID: ()=>PD,
    SUDO_UID: ()=>lD,
    SUDO_USER: ()=>MD,
    SYSTEMROOT: ()=>CD,
    SystemRoot: ()=>AD,
    TEMP: ()=>sD,
    TERM: ()=>lA,
    TERMINAL: ()=>BA,
    TERMINAL_EMULATOR: ()=>uA,
    TERMINATOR_UUID: ()=>bA,
    TERMUX_VERSION: ()=>HA,
    TERM_PROGRAM: ()=>PA,
    TERM_PROGRAM_VERSION: ()=>MA,
    TILIX_ID: ()=>GA,
    TMP: ()=>rD,
    TMPDIR: ()=>ED,
    TMUX: ()=>hA,
    TMUX_PANE: ()=>XA,
    TRACEPARENT: ()=>HT,
    TRACESTATE: ()=>GT,
    USER: ()=>ND,
    USERNAME: ()=>aD,
    USERPROFILE: ()=>bD,
    USE_BUILTIN_RIPGREP: ()=>aT,
    UV_THREADPOOL_SIZE: ()=>LA,
    VERCEL: ()=>zO,
    VISUAL: ()=>pD,
    VSCODE_GIT_ASKPASS_MAIN: ()=>EO,
    VTE_VERSION: ()=>WA,
    WAYLAND_DISPLAY: ()=>ID,
    WEBSITE_SITE_NAME: ()=>pT,
    WEBSITE_SKU: ()=>RT,
    WEZTERM_PANE: ()=>gA,
    WSL_DISTRO_NAME: ()=>jA,
    WSL_INTEROP: ()=>JA,
    WT_SESSION: ()=>yA,
    XDG_CACHE_HOME: ()=>XD,
    XDG_CONFIG_HOME: ()=>wD,
    XDG_DATA_HOME: ()=>hD,
    XDG_RUNTIME_DIR: ()=>VD,
    XDG_STATE_HOME: ()=>kD,
    XTERM_VERSION: ()=>fA,
    ZDOTDIR: ()=>SO,
    ZED_TERM: ()=>ZA,
    ZELLIJ: ()=>kA,
    __CFBundleIdentifier: ()=>_O,
    gcloud_project: ()=>AT,
    google_application_credentials: ()=>TT,
    google_cloud_project: ()=>OT
});
var $C = H.str();
var qC = H.str();
var tD = H.str();
var oD = H.str();
var _D = H.str();
var ED = H.str();
var rD = H.str();
var sD = H.str();
var eD = H.str();
var nD = H.str();
var CD = H.str();
var DD = H.str();
var AD = H.str();
var OD = H.str();
var TD = H.str();
var LD = H.str();
var cD = H.str();
var pD = H.str();
var RD = H.str();
var SD = H.str();
var ID = H.str();
var UD = H.str();
var iD = H.str();
var xD = H.str();
var ND = H.str();
var lD = H.int({
    min: 0,
    digitsOnly: true
});
var PD = H.int({
    min: 0,
    digitsOnly: true
});
var MD = H.str();
var aD = H.str();
var BD = H.str();
var uD = H.str();
var bD = H.str();
var HD = H.str();
var GD = H.str();
var mD = H.str();
var FD = H.str();
var dD = H.str();
var fD = H.str();
var KD = H.str();
var WD = H.str();
var vD = H.str();
var YD = H.str();
var gD = H.str();
var yD = H.str();
var VD = H.str();
var wD = H.str();
var hD = H.str();
var XD = H.str();
var kD = H.str();
var ZD = H.str();
var jD = H.str();
var JD = H.str();
var QD = H.str();
var zD = H.str();
var $D = H.str();
var qD = H.str();
var tA = H.str();
var oA = H.str();
var _A = H.str();
var EA = H.str();
var rA = H.str();
var sA = H.str();
var eA = H.str();
var nA = H.str();
var CA = H.str();
var DA = H.str();
var AA = H.str();
var OA = H.str();
var TA = H.str();
var LA = H.str();
var cA = H.str();
var pA = H.str();
var RA = H.str();
var SA = H.str();
var IA = H.rawStr();
var UA = H.rawStr();
var iA = H.str();
var xA = H.str();
var NA = H.str();
var lA = H.str();
var PA = H.str();
var MA = H.str();
var aA = H.str();
var BA = H.str();
var uA = H.str();
var bA = H.str();
var HA = H.str();
var GA = H.str();
var mA = H.str();
var FA = H.str();
var dA = H.str();
var fA = H.str();
var KA = H.str();
var WA = H.str();
var vA = H.str();
var YA = H.str();
var gA = H.str();
var yA = H.str();
var VA = H.str();
var wA = H.str();
var hA = H.str();
var XA = H.str();
var kA = H.str();
var ZA = H.str();
var jA = H.str();
var JA = H.str();
var QA = H.str();
var zA = H.str();
var $A = H.str();
var qA = H.str();
var tO = H.str();
var oO = H.str();
var _O = H.str();
var EO = H.str();
var rO = H.rawStr();
var sO = H.str();
var eO = H.str();
var nO = H.str();
var CO = H.str();
var DO = H.str();
var AO = H.str();
var OO = H.str();
var TO = H.str();
var LO = H.str();
var cO = H.str();
var pO = H.str();
var RO = H.str();
var SO = H.str();
var IO = H.str();
var UO = H.str();
var iO = H.str();
var xO = H.str();
var NO = H.str();
var lO = H.str();
var PO = H.str();
var MO = H.str();
var aO = H.str();
var BO = H.rawStr();
var uO = H.str();
var bO = H.str();
var HO = H.str();
var GO = H.str();
var mO = H.str();
var FO = H.str();
var dO = H.str();
var fO = H.str();
var KO = H.str();
var WO = H.str();
var vO = H.str();
var YO = H.str();
var gO = H.str();
var yO = H.str();
var VO = H.str();
var wO = H.str();
var hO = H.str();
var XO = H.str();
var kO = H.str();
var ZO = H.str();
var jO = H.str();
var JO = H.str();
var QO = H.str();
var zO = H.str();
var $O = H.str();
var qO = H.str();
var tT = H.str();
var oT = H.str();
var _T = H.str();
var ET = H.str();
var rT = H.str();
var sT = H.str();
var nT = H.str();
var CT = H.str();
var DT = H.str();
var AT = H.str();
var OT = H.str();
var TT = H.str();
var LT = H.str();
var cT = H.str();
var pT = H.str();
var RT = H.str();
var ST = H.str();
var IT = H.str();
var UT = H.str();
var iT = H.str();
var xT = H.str();
var NT = H.str();
var lT = H.str();
var PT = H.str();
var MT = H.str();
var aT = H.str();
var BT = H.str();
var uT = H.str();
var bT = H.str();
var HT = H.str();
var GT = H.str();
const b = {};
Mr(b, {
    AI_AGENT: ()=>oR,
    ALLOW_ANT_COMPUTER_USE_MCP: ()=>_R,
    ANTHROPIC_CONFIG_DIR: ()=>mT,
    BASH_MAX_OUTPUT_LENGTH: ()=>dS,
    CCR_SESSION_PROFILE: ()=>ER,
    CLAUBBIT: ()=>rR,
    CLAUDECODE: ()=>sR,
    CLAUDE_AFK_COUNTDOWN_MS: ()=>fS,
    CLAUDE_AFK_TIMEOUT_MS: ()=>KS,
    CLAUDE_AFTER_LAST_COMPACT: ()=>FT,
    CLAUDE_AGENTS_SELECT: ()=>dT,
    CLAUDE_AGENT_SDK_CLIENT_APP: ()=>fT,
    CLAUDE_AGENT_SDK_DISABLE_BUILTIN_AGENTS: ()=>eR,
    CLAUDE_AGENT_SDK_DISABLE_MCP_MANIFESTS: ()=>nR,
    CLAUDE_AGENT_SDK_MCP_NO_PREFIX: ()=>CR,
    CLAUDE_AGENT_SDK_VERSION: ()=>KT,
    CLAUDE_ARTIFACT_HOST_GRANT: ()=>WT,
    CLAUDE_ASYNC_AGENT_STALL_TIMEOUT_MS: ()=>WS,
    CLAUDE_AUTOCOMPACT_PCT_OVERRIDE: ()=>vT,
    CLAUDE_AUTO_BACKGROUND_TASKS: ()=>DR,
    CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR: ()=>AR,
    CLAUDE_BG_AUTH_SNAPSHOT_PATH: ()=>YT,
    CLAUDE_BG_AUTO_MEMORY_OFF: ()=>kT,
    CLAUDE_BG_BACKEND: ()=>gT,
    CLAUDE_BG_CARRIED_PROMPTS_SHA256: ()=>_L,
    CLAUDE_BG_CLAIM_AUTH: ()=>yT,
    CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER: ()=>VT,
    CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE: ()=>wT,
    CLAUDE_BG_ISOLATION: ()=>hT,
    CLAUDE_BG_MEMORY_TOGGLED_OFF: ()=>XT,
    CLAUDE_BG_POST_CLEAR_RESPAWN: ()=>ZT,
    CLAUDE_BG_PTY_AUTH: ()=>jT,
    CLAUDE_BG_RENDEZVOUS_SOCK: ()=>JT,
    CLAUDE_BG_RV_AUTH: ()=>QT,
    CLAUDE_BG_SESSION_PERMISSION_RULES: ()=>zT,
    CLAUDE_BG_SOCKET_TOKENS_PATH: ()=>$T,
    CLAUDE_BG_SOURCE: ()=>qT,
    CLAUDE_BG_STARTUP_WEDGE_MS: ()=>vS,
    CLAUDE_BG_TCC_DISCLAIMED: ()=>tL,
    CLAUDE_BG_WORKSPACE_TRUSTED: ()=>oL,
    CLAUDE_BRIDGE_BASE_URL: ()=>EL,
    CLAUDE_BRIDGE_OAUTH_TOKEN: ()=>rL,
    CLAUDE_BRIDGE_REATTACH_GROUPING: ()=>sL,
    CLAUDE_BRIDGE_REATTACH_NO_BACKFILL: ()=>OR,
    CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY: ()=>TR,
    CLAUDE_BRIDGE_REATTACH_OWNER_ACCT: ()=>eL,
    CLAUDE_BRIDGE_REATTACH_OWNER_ORG: ()=>nL,
    CLAUDE_BRIDGE_REATTACH_SEQ: ()=>YS,
    CLAUDE_BRIDGE_REATTACH_SESSION: ()=>CL,
    CLAUDE_BRIDGE_SESSION_INGRESS_URL: ()=>DL,
    CLAUDE_CHROME_PAIRED_DEVICE_ID: ()=>AL,
    CLAUDE_CHROME_PERMISSION_MODE: ()=>OL,
    CLAUDE_CHROME_TAB_GROUP_KEY: ()=>TL,
    CLAUDE_CLIENT_PRESENCE_FILE: ()=>LL,
    CLAUDE_CODE_ACTION: ()=>cL,
    CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD: ()=>pL,
    CLAUDE_CODE_ADDITIONAL_PROTECTION: ()=>LR,
    CLAUDE_CODE_ADOPT_UNDERIVABLE_PARKED_PERMISSION: ()=>DS,
    CLAUDE_CODE_AGENT: ()=>RL,
    CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES: ()=>SL,
    CLAUDE_CODE_APPEND_PROMPT_HEAD: ()=>IL,
    CLAUDE_CODE_ARTIFACT: ()=>UL,
    CLAUDE_CODE_ARTIFACTS_API_BASE_URL: ()=>xL,
    CLAUDE_CODE_ARTIFACTS_API_TOKEN: ()=>NL,
    CLAUDE_CODE_ARTIFACT_ASSET_BASE_URL: ()=>lL,
    CLAUDE_CODE_ARTIFACT_AUTO_OPEN: ()=>iL,
    CLAUDE_CODE_ARTIFACT_LIVE_BASE_URL: ()=>PL,
    CLAUDE_CODE_ARTIFACT_SYNC_BASE_URL: ()=>ML,
    CLAUDE_CODE_ARTIFACT_VIEWER_BASE_URL: ()=>aL,
    CLAUDE_CODE_ATTRIBUTION_STATUS_TIMEOUT_MS: ()=>BL,
    CLAUDE_CODE_AUTO_COMPACT_WINDOW: ()=>bL,
    CLAUDE_CODE_AUTO_MODE_EXTERNAL_PERMISSIONS: ()=>cR,
    CLAUDE_CODE_AUTO_MODE_TIER: ()=>pR,
    CLAUDE_CODE_BASE_REF: ()=>HL,
    CLAUDE_CODE_BASE_REFS: ()=>GL,
    CLAUDE_CODE_BLOCKING_LIMIT_OVERRIDE: ()=>mL,
    CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT: ()=>oc,
    CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT: ()=>tc,
    CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS: ()=>_c,
    CLAUDE_CODE_BRIDGE_MCP_CARRIER: ()=>FL,
    CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID: ()=>dL,
    CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID: ()=>fL,
    CLAUDE_CODE_BRIDGE_PROMPT_SHA256: ()=>WL,
    CLAUDE_CODE_BRIDGE_SESSION_ID: ()=>vL,
    CLAUDE_CODE_BRIDGE_SOURCE_DIR: ()=>KL,
    CLAUDE_CODE_BRIEF: ()=>RR,
    CLAUDE_CODE_BRIEF_UPLOAD: ()=>SR,
    CLAUDE_CODE_CCR_SURFACE: ()=>sS,
    CLAUDE_CODE_CLASSIFIER_SUMMARY: ()=>gL,
    CLAUDE_CODE_CONFIG_PROBE: ()=>Ec,
    CLAUDE_CODE_CONFIG_WATCH_EVENTS: ()=>rc,
    CLAUDE_CODE_CONTAINER_ID: ()=>yL,
    CLAUDE_CODE_COORDINATOR_SKILL_GUIDANCE: ()=>IR,
    CLAUDE_CODE_DAEMON_COLD_START: ()=>UR,
    CLAUDE_CODE_DECSTBM: ()=>VL,
    CLAUDE_CODE_DESKTOP_APP_VERSION: ()=>wL,
    CLAUDE_CODE_DEV_RAW_CHANGELOG_URL: ()=>hL,
    CLAUDE_CODE_DISABLE_ATTRIBUTION_BASELINE_REUSE: ()=>uL,
    CLAUDE_CODE_DISABLE_BG_SHELL_PRESSURE_REAP: ()=>iR,
    CLAUDE_CODE_DISABLE_HOOK_FORWARDING: ()=>kL,
    CLAUDE_CODE_DISABLE_PLUGIN_FORWARDING: ()=>ZL,
    CLAUDE_CODE_DISABLE_TURN_HANDOFF: ()=>jL,
    CLAUDE_CODE_DISABLE_VITALS_EMITTER: ()=>JL,
    CLAUDE_CODE_DISABLE_WORKING_SYNC: ()=>QL,
    CLAUDE_CODE_DONT_INHERIT_ENV: ()=>xR,
    CLAUDE_CODE_DOWNLOAD_DEADLINE_MS_FOR_TESTING: ()=>zL,
    CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS: ()=>NR,
    CLAUDE_CODE_EMIT_STARTUP_TIMING: ()=>PR,
    CLAUDE_CODE_EMIT_TOOL_USE_SUMMARIES: ()=>MR,
    CLAUDE_CODE_ENTRYPOINT: ()=>$L,
    CLAUDE_CODE_ENVIRONMENT_KIND: ()=>qL,
    CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION: ()=>sc,
    CLAUDE_CODE_EVAL_CONFINED: ()=>qR,
    CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER: ()=>aR,
    CLAUDE_CODE_EXIT_AFTER_STOP_DELAY: ()=>gS,
    CLAUDE_CODE_FLAG_FETCH_WAIT_MS: ()=>BR,
    CLAUDE_CODE_FOOTER_INDICATOR: ()=>ec,
    CLAUDE_CODE_FORCE_BRIDGE: ()=>uR,
    CLAUDE_CODE_FORCE_EVALUATE_MEMORY: ()=>bR,
    CLAUDE_CODE_FORCE_FULLSCREEN_UPSELL: ()=>HR,
    CLAUDE_CODE_FORCE_MEMORY_SURVEY: ()=>GR,
    CLAUDE_CODE_FORCE_TIP_ID: ()=>nc,
    CLAUDE_CODE_GIT_BASH_PATH: ()=>Cc,
    CLAUDE_CODE_GLOB_TIMEOUT_SECONDS: ()=>yS,
    CLAUDE_CODE_GOAL_CHECKIN_MINUTES: ()=>VS,
    CLAUDE_CODE_HIDE_SETTINGS_HINT: ()=>Dc,
    CLAUDE_CODE_HOLD_REPORT_PARK_AT_INIT: ()=>cS,
    CLAUDE_CODE_HOME_SEED_HOLD_TIMEOUT_MS: ()=>Ac,
    CLAUDE_CODE_HOME_SEED_VERDICT_TIMEOUT_MS: ()=>Oc,
    CLAUDE_CODE_HOSTED_DESKTOP: ()=>FR,
    CLAUDE_CODE_HOST_PLATFORM: ()=>Tc,
    CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD: ()=>mR,
    CLAUDE_CODE_HOST_SESSION_ID: ()=>Lc,
    CLAUDE_CODE_HOST_SKILL_CATALOG: ()=>cc,
    CLAUDE_CODE_HOST_WORKTREE: ()=>pc,
    CLAUDE_CODE_HOST_WORKTREE_FENCE: ()=>Rc,
    CLAUDE_CODE_IDE_HOST_OVERRIDE: ()=>Sc,
    CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS: ()=>Ic,
    CLAUDE_CODE_IDLE_THRESHOLD_MINUTES: ()=>wS,
    CLAUDE_CODE_IDLE_TOKEN_THRESHOLD: ()=>hS,
    CLAUDE_CODE_IS_COWORK: ()=>dR,
    CLAUDE_CODE_LEGACY_BUNDLE: ()=>XL,
    CLAUDE_CODE_LOOP_KEEPALIVE: ()=>fR,
    CLAUDE_CODE_LOOP_PERSISTENT: ()=>KR,
    CLAUDE_CODE_MANAGED_SETTINGS_PATH: ()=>Uc,
    CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS: ()=>XS,
    CLAUDE_CODE_MAX_MCP_DESCRIPTION_LENGTH: ()=>YI,
    CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH: ()=>kS,
    CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION: ()=>ZS,
    CLAUDE_CODE_MCP_ALLOWLIST_ENV: ()=>ic,
    CLAUDE_CODE_MCP_APPS_HOST: ()=>vI,
    CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS: ()=>FI,
    CLAUDE_CODE_MCP_CONNECTOR_PREWAIT_MS: ()=>dI,
    CLAUDE_CODE_MCP_MEMORY_CGROUP: ()=>MS,
    CLAUDE_CODE_MCP_PREWAIT_SERVERS: ()=>KI,
    CLAUDE_CODE_MCP_PREWAIT_SERVERS_MS: ()=>WI,
    CLAUDE_CODE_MCP_STARTUP_WAIT_MS: ()=>fI,
    CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT: ()=>mI,
    CLAUDE_CODE_MEMORY_SUBAGENT_APPEND: ()=>zp,
    CLAUDE_CODE_MOCK_REMOTE_SETTINGS: ()=>WR,
    CLAUDE_CODE_MOCK_TRIAL: ()=>vR,
    CLAUDE_CODE_OVERRIDE_DATE: ()=>xc,
    CLAUDE_CODE_PARKED_PERMISSION_WAIT_MS: ()=>CS,
    CLAUDE_CODE_PARKED_RUN_BEFORE_CLEAR: ()=>LS,
    CLAUDE_CODE_PARKED_STOP_RETIRES: ()=>TS,
    CLAUDE_CODE_PERFORCE_MODE: ()=>lc,
    CLAUDE_CODE_PLAN_V2_AGENT_COUNT: ()=>JS,
    CLAUDE_CODE_PLAN_V2_EXPLORE_AGENT_COUNT: ()=>QS,
    CLAUDE_CODE_PLUGIN_ATTRIBUTION: ()=>Pc,
    CLAUDE_CODE_PLUGIN_CACHE_DIR: ()=>Mc,
    CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS: ()=>zS,
    CLAUDE_CODE_PLUGIN_SEED_DIR: ()=>ac,
    CLAUDE_CODE_POST_TURN_MEMORY: ()=>YR,
    CLAUDE_CODE_POST_TURN_MEMORY_CONFIG: ()=>Bc,
    CLAUDE_CODE_POST_TURN_MEMORY_SYNC: ()=>gR,
    CLAUDE_CODE_POWERUP_ONBOARDING: ()=>uc,
    CLAUDE_CODE_PROJECT_DIR_NAME: ()=>bc,
    CLAUDE_CODE_PWSH_PARSE_TIMEOUT_MS: ()=>$S,
    CLAUDE_CODE_QUESTION_EXTENDED: ()=>Gc,
    CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS: ()=>mc,
    CLAUDE_CODE_QUESTION_PREVIEW_FORMAT: ()=>Hc,
    CLAUDE_CODE_RELAUNCH_HOME_TRUST: ()=>Fc,
    CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE: ()=>dc,
    CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED: ()=>fc,
    CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON: ()=>Kc,
    CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL: ()=>Wc,
    CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE: ()=>vc,
    CLAUDE_CODE_REMOTE: ()=>yR,
    CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE: ()=>Yc,
    CLAUDE_CODE_REMOTE_HERMETIC_MODE: ()=>VR,
    CLAUDE_CODE_REMOTE_MEMORY_DIR: ()=>gc,
    CLAUDE_CODE_REMOTE_RAW_EVENTS_FILE: ()=>Vc,
    CLAUDE_CODE_REMOTE_SDK_URL: ()=>wc,
    CLAUDE_CODE_REMOTE_SEND_KEEPALIVES: ()=>wR,
    CLAUDE_CODE_REMOTE_SESSION_ID: ()=>hc,
    CLAUDE_CODE_REMOTE_SESSION_ORIGIN: ()=>Xc,
    CLAUDE_CODE_REMOTE_SETTINGS_PATH: ()=>kc,
    CLAUDE_CODE_REMOTE_SETTINGS_POLL_MS: ()=>qS,
    CLAUDE_CODE_REPL: ()=>hR,
    CLAUDE_CODE_REPO_CHECKOUTS: ()=>Zc,
    CLAUDE_CODE_RESTRICTED: ()=>XR,
    CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG: ()=>kR,
    CLAUDE_CODE_RESULT_NONCE: ()=>YL,
    CLAUDE_CODE_RESUME_FROM_SESSION: ()=>jc,
    CLAUDE_CODE_RESUME_INTERRUPTED_TURN: ()=>ZR,
    CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS: ()=>JR,
    CLAUDE_CODE_RESUME_PROMPT: ()=>Jc,
    CLAUDE_CODE_RESUME_REASON: ()=>zR,
    CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS: ()=>QR,
    CLAUDE_CODE_RESUME_SOURCE_ALIVE: ()=>jR,
    CLAUDE_CODE_RESUME_THRESHOLD_MINUTES: ()=>tI,
    CLAUDE_CODE_RESUME_TOKEN_THRESHOLD: ()=>oI,
    CLAUDE_CODE_RESUME_TOLERATES_CONTEXT_APPENDS: ()=>AS,
    CLAUDE_CODE_RESUME_TOLERATES_CONTEXT_SEEDS: ()=>OS,
    CLAUDE_CODE_SAFE_MODE: ()=>$R,
    CLAUDE_CODE_SANDBOXED: ()=>tS,
    CLAUDE_CODE_SCRIPT_CAPS: ()=>_I,
    CLAUDE_CODE_SCROLL_SPEED: ()=>Qc,
    CLAUDE_CODE_SDK_READS_SESSION_STATE: ()=>lR,
    CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS: ()=>EI,
    CLAUDE_CODE_SESSION_ID: ()=>zc,
    CLAUDE_CODE_SESSION_KIND: ()=>$c,
    CLAUDE_CODE_SESSION_NAME: ()=>qc,
    CLAUDE_CODE_SESSION_ORIGIN: ()=>tp,
    CLAUDE_CODE_SESSION_START_ANNOUNCEMENTS_BEFORE_PROMPT: ()=>oS,
    CLAUDE_CODE_SHELL: ()=>op,
    CLAUDE_CODE_SHELL_PREFIX: ()=>_p,
    CLAUDE_CODE_SIMPLE: ()=>_S,
    CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT: ()=>Ep,
    CLAUDE_CODE_SKILL_ATTRIBUTION: ()=>rp,
    CLAUDE_CODE_SLEEP_COMPACT: ()=>sp,
    CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS: ()=>ep,
    CLAUDE_CODE_SPAWN_TIMESTAMP_MS: ()=>rI,
    CLAUDE_CODE_SSE_PORT: ()=>sI,
    CLAUDE_CODE_STALL_TIMEOUT_MS_FOR_TESTING: ()=>np,
    CLAUDE_CODE_STARTUP_FAILURE_RESULTS: ()=>Nc,
    CLAUDE_CODE_STOP_HOOK_BLOCK_CAP: ()=>eI,
    CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: ()=>ES,
    CLAUDE_CODE_SUPERVISED: ()=>rS,
    CLAUDE_CODE_SYNC_PLUGINS_BUFFERED_DOWNLOAD: ()=>eS,
    CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS: ()=>nS,
    CLAUDE_CODE_SYNC_PLUGINS_INSTALL_TIMEOUT_MS: ()=>CI,
    CLAUDE_CODE_SYNC_PLUGINS_MCP_TIMEOUT_MS: ()=>DI,
    CLAUDE_CODE_SYNC_PLUGIN_INSTALL_TIMEOUT_MS: ()=>nI,
    CLAUDE_CODE_SYNC_REUSE_WITHIN_MS: ()=>AI,
    CLAUDE_CODE_SYNC_SESSION_REFS: ()=>pS,
    CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS: ()=>OI,
    CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS: ()=>TI,
    CLAUDE_CODE_SYNTAX_HIGHLIGHT: ()=>RS,
    CLAUDE_CODE_SYSTEM_PROMPT_GB_FEATURE: ()=>Cp,
    CLAUDE_CODE_TAGS: ()=>Dp,
    CLAUDE_CODE_TASK_LIST_ID: ()=>Op,
    CLAUDE_CODE_TEAM_TEARDOWN_PARK_TIMEOUT_MS: ()=>LI,
    CLAUDE_CODE_TERMINAL_MCP_TOOLS: ()=>Ap,
    CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK: ()=>SS,
    CLAUDE_CODE_TEST_FIXTURES_ROOT: ()=>Tp,
    CLAUDE_CODE_TEST_FORCE_DENY: ()=>IS,
    CLAUDE_CODE_TEST_NO_GIT_BASH: ()=>US,
    CLAUDE_CODE_TEST_NO_PWSH: ()=>iS,
    CLAUDE_CODE_TMPDIR: ()=>Lp,
    CLAUDE_CODE_TMUX_PREFIX: ()=>cp,
    CLAUDE_CODE_TMUX_PREFIX_CONFLICTS: ()=>xS,
    CLAUDE_CODE_TMUX_SESSION: ()=>pp,
    CLAUDE_CODE_TMUX_TRUECOLOR: ()=>NS,
    CLAUDE_CODE_TOOL_MEMORY_CGROUP_EXCLUDE: ()=>lS,
    CLAUDE_CODE_TOOL_MEMORY_LIMIT: ()=>PS,
    CLAUDE_CODE_TRIGGER_ID: ()=>Rp,
    CLAUDE_CODE_TUI_JUST_SWITCHED: ()=>aS,
    CLAUDE_CODE_TUI_TRIAL: ()=>BS,
    CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE: ()=>Sp,
    CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE: ()=>Ip,
    CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS: ()=>cI,
    CLAUDE_CODE_VOICE_FORWARD_INTERIMS_TYPED: ()=>uS,
    CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR: ()=>jS,
    CLAUDE_CODE_WORKER_CHECKIN_SCHEDULE: ()=>Up,
    CLAUDE_CODE_WORKER_EPOCH: ()=>pI,
    CLAUDE_CODE_WORKSPACE_HOST_PATHS: ()=>ip,
    CLAUDE_CONFIG_DIR: ()=>xp,
    CLAUDE_COWORK_MEMORY_EXTRA_GUIDELINES: ()=>Np,
    CLAUDE_COWORK_MEMORY_GUIDELINES: ()=>lp,
    CLAUDE_COWORK_MEMORY_INDEX_CONTENT: ()=>Pp,
    CLAUDE_COWORK_MEMORY_PATH_OVERRIDE: ()=>Mp,
    CLAUDE_ENV_FILE: ()=>ap,
    CLAUDE_FORCE_DISPLAY_SURVEY: ()=>bS,
    CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME: ()=>Bp,
    CLAUDE_INTERNAL_FC_OVERRIDES: ()=>up,
    CLAUDE_JOB_DIR: ()=>bp,
    CLAUDE_MEMORY_STORES: ()=>Hp,
    CLAUDE_PROJECT_UUID: ()=>Gp,
    CLAUDE_PTY_HEARTBEAT_MS: ()=>RI,
    CLAUDE_PTY_HOST_EXEC: ()=>mp,
    CLAUDE_PTY_HOST_NO_STABLE_PATH: ()=>Fp,
    CLAUDE_PTY_ORPHAN_CHECK_MS: ()=>SI,
    CLAUDE_RELAUNCH_SESSION_ADD_DIRS: ()=>dp,
    CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX: ()=>fp,
    CLAUDE_REMOTE_WORKFLOW_ARGS: ()=>Kp,
    CLAUDE_REMOTE_WORKFLOW_SCRIPT: ()=>Wp,
    CLAUDE_RUNNER_ACTIVITY_FD: ()=>II,
    CLAUDE_RUNNER_FETCH_DEPTH: ()=>vp,
    CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS: ()=>Yp,
    CLAUDE_SECURESTORAGE_CONFIG_DIR: ()=>gp,
    CLAUDE_SERVE_DRAIN_TIMEOUT_MS: ()=>UI,
    CLAUDE_SNIP: ()=>yp,
    CLAUDE_SSH_LOCAL_BINARY: ()=>Vp,
    CLAUDE_SSH_VERSION: ()=>wp,
    CLAUDE_STAGE_FILE_ROOT: ()=>hp,
    CLAUDE_TMPDIR: ()=>Xp,
    LOCAL_BRIDGE: ()=>HS,
    MCP_CONNECTION_NONBLOCKING: ()=>GS,
    MCP_CONNECT_TIMEOUT_MS: ()=>iI,
    MCP_DISCOVERY_CACHE: ()=>xI,
    MCP_DISCOVERY_CACHE_MAX_STALE_S: ()=>NI,
    MCP_DISCOVERY_CACHE_STRIKES: ()=>lI,
    MCP_DISCOVERY_CACHE_TTL_S: ()=>PI,
    MCP_OAUTH_CALLBACK_PORT: ()=>MI,
    MCP_OAUTH_CLIENT_METADATA_URL: ()=>kp,
    MCP_PROTOCOL_NEGOTIATION: ()=>aI,
    MCP_REMOTE_SERVER_CONNECTION_BATCH_SIZE: ()=>BI,
    MCP_SDK_GENERATION: ()=>bI,
    MCP_SERVER_CONNECTION_BATCH_SIZE: ()=>uI,
    MCP_TIMEOUT: ()=>HI,
    MCP_TOOL_TIMEOUT: ()=>GI,
    MCP_TRUNCATION_PROMPT_OVERRIDE: ()=>Zp,
    SDK_NATIVE_BIN: ()=>jp,
    SESSION_INGRESS_URL: ()=>Jp,
    SLASH_COMMAND_TOOL_CHAR_BUDGET: ()=>gI,
    SYSTEM_REMINDER_MEMORY_CONTEXT: ()=>Qp,
    TEST_ENABLE_SESSION_PERSISTENCE: ()=>mS,
    ULTRAPLAN_PROMPT_FILE: ()=>$p,
    VCR_RECORD: ()=>FS,
    VITALS_EMITTER_BIN: ()=>qp,
    VOICE_STREAM_BASE_URL: ()=>tR
});
var mT = H.str();
var FT = H.str();
var dT = H.str();
var fT = H.str();
var KT = H.str();
var WT = H.rawStr();
var vT = H.str();
var YT = H.str();
var gT = H.str();
var yT = H.str();
var VT = H.str();
var wT = H.str();
var hT = H.str();
var XT = H.str();
var kT = H.str();
var ZT = H.bool();
var jT = H.str();
var JT = H.str();
var QT = H.str();
var zT = H.str();
var $T = H.str();
var qT = H.str();
var tL = H.str();
var oL = H.bool();
var _L = H.str();
var EL = H.str();
var rL = H.str();
var sL = H.str();
var eL = H.str();
var nL = H.str();
var CL = H.str();
var DL = H.str();
var AL = H.str();
var OL = H.str();
var TL = H.str();
var LL = H.str();
var cL = H.str();
var pL = H.str();
var RL = H.str();
var SL = H.bool();
var IL = H.str();
var UL = H.str();
var iL = H.str();
var xL = H.str();
var NL = H.str();
var lL = H.str();
var PL = H.str();
var ML = H.str();
var aL = H.str();
var BL = H.int({
    min: 0
});
var uL = H.bool();
var bL = H.str();
var HL = H.str();
var GL = H.str();
var mL = H.str();
var FL = H.enum([
    "1",
    "spent"
]);
var dL = H.str();
var fL = H.str();
var KL = H.str();
var WL = H.str();
var vL = H.str();
var YL = H.str();
var gL = H.str();
var yL = H.str();
var VL = H.str();
var wL = H.str();
var hL = H.str();
var XL = H.bool();
var kL = H.bool();
var ZL = H.bool();
var jL = H.bool();
var JL = H.bool();
var QL = H.bool();
var zL = H.str();
var $L = H.str();
var qL = H.str();
var tc = H.bool();
var oc = H.bool();
var _c = H.bool();
var Ec = H.bool();
var rc = H.bool();
var sc = H.str();
var ec = H.str();
var nc = H.str();
var Cc = H.str();
var Dc = H.str();
var Ac = H.int({
    min: 0
});
var Oc = H.int({
    min: 0
});
var Tc = H.str();
var Lc = H.str();
var cc = H.str();
var pc = H.str();
var Rc = H.str();
var Sc = H.str();
var Ic = H.int({
    min: 1,
    wholeValue: true
});
var Uc = H.str();
var ic = H.str();
var xc = H.str();
var Nc = H.bool();
var lc = H.str();
var Pc = H.str();
var Mc = H.str();
var ac = H.str();
var Bc = H.str();
var uc = H.str();
var bc = H.str();
var Hc = H.str();
var Gc = H.bool();
var mc = H.bool();
var Fc = H.str();
var dc = H.str();
var fc = H.str();
var Kc = H.str();
var Wc = H.str();
var vc = H.str();
var Yc = H.str();
var gc = H.str();
var Vc = H.str();
var wc = H.str();
var hc = H.str();
var Xc = H.str();
var kc = H.str();
var Zc = H.str();
var jc = H.str();
var Jc = H.str();
var Qc = H.str();
var zc = H.str();
var $c = H.str();
var qc = H.str();
var tp = H.enum([
    "claude_ai_chat"
]);
var op = H.str();
var _p = H.str();
var Ep = H.str();
var rp = H.str();
var sp = H.bool();
var ep = H.int({
    min: 1,
    wholeValue: true
});
var np = H.str();
var Cp = H.str();
var Dp = H.str();
var Ap = H.str();
var Op = H.str();
var Tp = H.str();
var Lp = H.str();
var cp = H.str();
var pp = H.str();
var Rp = H.str();
var Sp = H.str();
var Ip = H.str();
var Up = H.str();
var ip = H.str();
var xp = H.str();
var Np = H.str();
var lp = H.str();
var Pp = H.str();
var Mp = H.str();
var ap = H.str();
var Bp = H.str();
var up = H.str();
var bp = H.str();
var Hp = H.str();
var Gp = H.str();
var mp = H.str();
var Fp = H.str();
var dp = H.str();
var fp = H.str();
var Kp = H.str();
var Wp = H.str();
var vp = H.str();
var Yp = H.str();
var gp = H.str();
var yp = H.str();
var Vp = H.str();
var wp = H.str();
var hp = H.str();
var Xp = H.str();
var kp = H.str();
var Zp = H.str();
var jp = H.str();
var Jp = H.str();
var Qp = H.bool();
var zp = H.bool();
var $p = H.str();
var qp = H.str();
var tR = H.str();
var oR = H.bool();
var _R = H.bool();
var ER = H.bool();
var rR = H.bool();
var sR = H.bool();
var eR = H.bool();
var nR = H.bool();
var CR = H.bool();
var DR = H.bool();
var AR = H.bool();
var OR = H.bool();
var TR = H.bool();
var LR = H.bool();
var cR = H.bool();
var pR = H.rawStr();
var RR = H.bool();
var SR = H.bool();
var IR = H.bool();
var UR = H.bool();
var iR = H.bool();
var xR = H.bool();
var NR = H.bool();
var lR = H.bool();
var PR = H.bool();
var MR = H.bool();
var aR = H.bool();
var BR = H.int({
    min: 0
});
var uR = H.bool();
var bR = H.bool();
var HR = H.bool();
var GR = H.bool();
var mR = H.bool();
var FR = H.bool();
var dR = H.bool();
var fR = H.triBool();
var KR = H.bool();
var WR = H.str();
var vR = H.bool();
var YR = H.bool();
var gR = H.bool();
var yR = H.bool();
var VR = H.bool();
var wR = H.bool();
var hR = H.triBool();
var XR = H.bool();
var kR = H.bool();
var ZR = H.bool();
var jR = H.str();
var JR = H.str();
var QR = H.int({
    min: 1,
    max: 2147483647,
    wholeValue: true
});
var zR = H.str();
var $R = H.bool();
var qR = H.bool();
var tS = H.bool();
var oS = H.bool();
var _S = H.bool();
var ES = H.triBool();
var rS = H.bool();
var sS = H.str();
var eS = H.bool();
var nS = H.int({
    min: 1
});
var CS = H.int({
    min: 0
});
var DS = H.bool();
var AS = H.bool();
var OS = H.bool();
var TS = H.bool();
var LS = H.bool();
var cS = H.bool();
var pS = H.bool();
var RS = H.str();
var SS = H.bool();
var IS = H.rawStr();
var US = H.str();
var iS = H.str();
var xS = H.bool();
var NS = H.rawStr();
var lS = H.str();
var PS = H.str();
var MS = H.str();
var aS = H.str();
var BS = H.str();
var uS = H.bool();
var bS = H.bool();
var HS = H.bool();
var GS = H.triBool();
var mS = H.bool();
var FS = H.bool();
var dS = H.int();
var fS = H.int();
var KS = H.int();
var WS = H.int({
    min: 1,
    max: 2147483647,
    digitsOnly: true
});
var vS = H.int();
var YS = H.int();
var gS = H.int();
var yS = H.int({
    min: 1
});
var VS = H.int({
    min: 0,
    max: 10080,
    digitsOnly: true
});
var wS = H.int();
var hS = H.int();
var XS = H.int({
    min: 1,
    digitsOnly: true
});
var kS = H.int({
    min: 1,
    digitsOnly: true
});
var ZS = H.int({
    min: 1,
    digitsOnly: true
});
var jS = H.int({
    min: 0,
    digitsOnly: true
});
var JS = H.int();
var QS = H.int();
var zS = H.int();
var $S = H.int();
var qS = H.int();
var tI = H.int();
var oI = H.int();
var _I = H.int();
var EI = H.int({
    min: 1
});
var rI = H.int();
var sI = H.int();
var eI = H.int();
var nI = H.int({
    min: 1
});
var CI = H.int({
    min: 1
});
var DI = H.int({
    min: 0
});
var AI = H.int({
    min: 0,
    max: 86400000
});
var OI = H.int();
var TI = H.int();
var LI = H.int({
    min: 1000,
    max: 60000
});
var cI = H.int({
    wholeValue: true
});
var pI = H.int();
var RI = H.int({
    min: 1
});
var SI = H.int({
    min: 1
});
var II = H.int({
    min: 3
});
var UI = H.int({
    min: 1
});
var iI = H.int();
var xI = H.triBool();
var NI = H.int({
    min: 1
});
var lI = H.int({
    min: 1
});
var PI = H.int({
    min: 1
});
var MI = H.int({
    min: 1
});
var aI = H.str();
var BI = H.int({
    min: 1
});
var uI = H.int({
    min: 1
});
var bI = H.str();
var HI = H.int();
var GI = H.int({
    min: 1
});
var mI = H.int();
var FI = H.int();
var dI = H.int({
    min: 1
});
var fI = H.int({
    min: 0
});
var KI = H.str();
var WI = H.int({
    min: 0,
    digitsOnly: true
});
var vI = H.bool();
var YI = H.int({
    min: 1,
    digitsOnly: true
});
var gI = H.int({
    min: 1
});
const G = {};
Mr(G, {
    ANTHROPIC_CUSTOM_MODEL_OPTION: ()=>CU,
    ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION: ()=>AU,
    ANTHROPIC_CUSTOM_MODEL_OPTION_NAME: ()=>DU,
    ANTHROPIC_DEFAULT_FABLE_MODEL: ()=>hI,
    ANTHROPIC_DEFAULT_FABLE_MODEL_DESCRIPTION: ()=>kI,
    ANTHROPIC_DEFAULT_FABLE_MODEL_NAME: ()=>XI,
    ANTHROPIC_DEFAULT_HAIKU_MODEL: ()=>qI,
    ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION: ()=>oU,
    ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME: ()=>tU,
    ANTHROPIC_DEFAULT_MODEL: ()=>VI,
    ANTHROPIC_DEFAULT_OPUS_MODEL: ()=>ZI,
    ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION: ()=>JI,
    ANTHROPIC_DEFAULT_OPUS_MODEL_NAME: ()=>jI,
    ANTHROPIC_DEFAULT_SONNET_MODEL: ()=>QI,
    ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION: ()=>$I,
    ANTHROPIC_DEFAULT_SONNET_MODEL_NAME: ()=>zI,
    ANTHROPIC_MODEL: ()=>yI,
    ANTHROPIC_SMALL_FAST_MODEL: ()=>wI,
    CLAUDE_CODE_3P_PROBE_WROTE_HAIKU_DEFAULT: ()=>rU,
    CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT: ()=>EU,
    CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT: ()=>_U,
    CLAUDE_CODE_3P_SEEDED_OPUS_DEFAULT: ()=>eU,
    CLAUDE_CODE_3P_SEEDED_SONNET_DEFAULT: ()=>sU,
    CLAUDE_CODE_ALWAYS_ENABLE_EFFORT: ()=>NU,
    CLAUDE_CODE_AUTO_MODE_MODEL: ()=>cU,
    CLAUDE_CODE_BG_CLASSIFIER_MODEL: ()=>pU,
    CLAUDE_CODE_CLIENT_DATA_URL: ()=>GU,
    CLAUDE_CODE_DISABLE_1M_CONTEXT: ()=>BU,
    CLAUDE_CODE_DISABLE_EXPLORE_INHERIT_CAP: ()=>UU,
    CLAUDE_CODE_DISABLE_FAST_MODE: ()=>PU,
    CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP: ()=>iU,
    CLAUDE_CODE_DISABLE_MODEL_ACCESS_FALLBACK: ()=>IU,
    CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT: ()=>uU,
    CLAUDE_CODE_EFFORT_LEVEL: ()=>xU,
    CLAUDE_CODE_MAX_EFFORT_REMINDER: ()=>lU,
    CLAUDE_CODE_MODEL_CATALOG: ()=>bU,
    CLAUDE_CODE_MODEL_CATALOG_URL: ()=>HU,
    CLAUDE_CODE_NO_MODEL_FALLBACK: ()=>SU,
    CLAUDE_CODE_SKIP_FAST_MODE_NETWORK_ERRORS: ()=>MU,
    CLAUDE_CODE_SKIP_FAST_MODE_ORG_CHECK: ()=>aU,
    CLAUDE_CODE_SKIP_MODEL_ACCESS_MEMORY: ()=>nU,
    CLAUDE_CODE_SUBAGENT_MODEL: ()=>OU,
    CLAUDE_CODE_SUBAGENT_MODEL_FORCE: ()=>TU,
    CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL: ()=>LU,
    FALLBACK_FOR_ALL_PRIMARY_MODELS: ()=>RU
});
var yI = H.str();
var VI = H.str();
var wI = H.str();
var hI = H.str();
var XI = H.str();
var kI = H.str();
var ZI = H.str();
var jI = H.str();
var JI = H.str();
var QI = H.str();
var zI = H.str();
var $I = H.str();
var qI = H.str();
var tU = H.str();
var oU = H.str();
var _U = H.str();
var EU = H.str();
var rU = H.str();
var sU = H.str();
var eU = H.str();
var nU = H.bool();
var CU = H.str();
var DU = H.str();
var AU = H.str();
var OU = H.str();
var TU = H.bool();
var LU = H.str();
var cU = H.str();
var pU = H.str();
var RU = H.str();
var SU = H.bool();
var IU = H.bool();
var UU = H.bool();
var iU = H.bool();
var xU = H.str();
var NU = H.bool();
var lU = H.triBool();
var PU = H.bool();
var MU = H.bool();
var aU = H.bool();
var BU = H.bool();
var uU = H.bool();
var bU = H.str();
var HU = H.str();
var GU = H.str();
const m = {};
Mr(m, {
    ALL_PROXY: ()=>vU,
    ANTHROPIC_BETAS: ()=>XU,
    ANTHROPIC_CUSTOM_HEADERS: ()=>kU,
    API_FORCE_IDLE_TIMEOUT: ()=>Di,
    API_TIMEOUT_MS: ()=>si,
    CLAUDE_BYTE_STREAM_IDLE_TIMEOUT_MS: ()=>Ui,
    CLAUDE_CODE_ATTRIBUTION_HEADER: ()=>JU,
    CLAUDE_CODE_CERT_STORE: ()=>hU,
    CLAUDE_CODE_CLIENT_CERT: ()=>gU,
    CLAUDE_CODE_CLIENT_KEY: ()=>yU,
    CLAUDE_CODE_CLIENT_KEY_PASSPHRASE: ()=>VU,
    CLAUDE_CODE_DISABLE_MTLS_RELOAD_ON_STALE_CONNECTION: ()=>wU,
    CLAUDE_CODE_EAGER_FLUSH: ()=>Pi,
    CLAUDE_CODE_EXTRA_BODY: ()=>ZU,
    CLAUDE_CODE_EXTRA_METADATA: ()=>jU,
    CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS: ()=>qU,
    CLAUDE_CODE_FORCE_SYNC_OUTPUT: ()=>Mi,
    CLAUDE_CODE_GZIP_CCR_REQUEST_BODIES: ()=>ci,
    CLAUDE_CODE_GZIP_DATADOG_LOGS: ()=>pi,
    CLAUDE_CODE_GZIP_REQUEST_BODIES: ()=>Li,
    CLAUDE_CODE_GZIP_REQUEST_BODY_BLOCKS: ()=>Si,
    CLAUDE_CODE_GZIP_REQUEST_BODY_LEVEL: ()=>Ri,
    CLAUDE_CODE_MAX_CONTEXT_TOKENS: ()=>$U,
    CLAUDE_CODE_MAX_OUTPUT_TOKENS: ()=>zU,
    CLAUDE_CODE_MAX_RETRIES: ()=>QU,
    CLAUDE_CODE_MAX_TOOL_USE_CONCURRENCY: ()=>ti,
    CLAUDE_CODE_MAX_TURNS: ()=>oi,
    CLAUDE_CODE_NONSTREAMING_TIMEOUT_RETRIES: ()=>ei,
    CLAUDE_CODE_OVERLOADED_RETRY_BASE_DELAY_MS: ()=>ni,
    CLAUDE_CODE_OVERLOADED_RETRY_MAX_DELAY_MS: ()=>Ci,
    CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS: ()=>ui,
    CLAUDE_CODE_RETRY_WATCHDOG: ()=>Ni,
    CLAUDE_CODE_RETRY_WATCHDOG_MAX_WAIT_MS: ()=>li,
    CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS: ()=>Bi,
    CLAUDE_ENABLE_BYTE_WATCHDOG: ()=>Ai,
    CLAUDE_ENABLE_BYTE_WATCHDOG_BEDROCK: ()=>Oi,
    CLAUDE_ENABLE_STREAM_WATCHDOG: ()=>Ti,
    CLAUDE_MOCK_HEADERLESS_429: ()=>ai,
    CLAUDE_SLOW_FIRST_BYTE_MS: ()=>xi,
    CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS: ()=>ii,
    CLAUDE_STREAM_IDLE_TIMEOUT_MS: ()=>Ii,
    HTTPS_PROXY: ()=>FU,
    HTTP_PROXY: ()=>mU,
    MAX_MCP_OUTPUT_TOKENS: ()=>ri,
    MAX_STRUCTURED_OUTPUT_RETRIES: ()=>Ei,
    MAX_THINKING_TOKENS: ()=>_i,
    NO_PROXY: ()=>dU,
    all_proxy: ()=>YU,
    http_proxy: ()=>fU,
    https_proxy: ()=>KU,
    no_proxy: ()=>WU
});
var mU = H.str();
var FU = H.str();
var dU = H.str();
var fU = H.str();
var KU = H.str();
var WU = H.str();
var vU = H.str();
var YU = H.str();
var gU = H.str();
var yU = H.str();
var VU = H.str();
var wU = H.bool();
var hU = H.str();
var XU = H.str();
var kU = H.str();
var ZU = H.str();
var jU = H.str();
var JU = H.str();
var QU = H.int();
var zU = H.int();
var $U = H.int();
var qU = H.int();
var ti = H.int({
    min: 1
});
var oi = H.str();
var _i = H.int();
var Ei = H.int();
var ri = H.int();
var si = H.int();
var ei = H.int({
    min: 0,
    digitsOnly: true
});
var ni = H.int({
    min: 500,
    max: 32000,
    digitsOnly: true
});
var Ci = H.int({
    min: 32000,
    max: 64000,
    digitsOnly: true
});
var Di = H.int();
var Ai = H.triBool();
var Oi = H.bool();
var Ti = H.triBool();
var Li = H.triBool();
var ci = H.triBool();
var pi = H.triBool();
var Ri = H.int({
    min: 0,
    max: 9,
    digitsOnly: true
});
var Si = H.int({
    min: 0,
    max: 2,
    digitsOnly: true
});
var Ii = H.int({
    min: 1
});
var Ui = H.int({
    min: 1
});
var ii = H.int({
    min: 1
});
var xi = H.int({
    min: 1
});
var Ni = H.bool();
var li = H.int({
    min: 1,
    digitsOnly: true
});
var Pi = H.bool();
var Mi = H.bool();
var ai = H.bool();
var Bi = H.int();
var ui = H.int({
    min: 0
});
const F = {};
Mr(F, {
    AGENT_PROXY_URL: ()=>Vx,
    ANTHROPIC_AWS_BASE_URL: ()=>Vi,
    ANTHROPIC_AWS_WORKSPACE_ID: ()=>wi,
    ANTHROPIC_BASE_URL: ()=>fi,
    ANTHROPIC_BEDROCK_BASE_URL: ()=>vi,
    ANTHROPIC_BEDROCK_MANTLE_BASE_URL: ()=>yi,
    ANTHROPIC_BEDROCK_REGION_PREFIX: ()=>Yi,
    ANTHROPIC_BEDROCK_SERVICE_TIER: ()=>gi,
    ANTHROPIC_FOUNDRY_BASE_URL: ()=>zi,
    ANTHROPIC_FOUNDRY_RESOURCE: ()=>$i,
    ANTHROPIC_GOOGLE_CLOUD_BASE_URL: ()=>Zi,
    ANTHROPIC_GOOGLE_CLOUD_LOCATION: ()=>Xi,
    ANTHROPIC_GOOGLE_CLOUD_PROJECT: ()=>hi,
    ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID: ()=>ki,
    ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION: ()=>Tx,
    ANTHROPIC_UNIX_SOCKET: ()=>Lx,
    ANTHROPIC_VERTEX_BASE_URL: ()=>ji,
    ANTHROPIC_VERTEX_PROJECT_ID: ()=>Ji,
    AWS_ACCESS_KEY_ID: ()=>rx,
    AWS_CONFIG_FILE: ()=>_x,
    AWS_DEFAULT_REGION: ()=>tx,
    AWS_ENDPOINT_URL: ()=>nx,
    AWS_ENDPOINT_URL_BEDROCK: ()=>Cx,
    AWS_ENDPOINT_URL_BEDROCK_RUNTIME: ()=>Dx,
    AWS_ENDPOINT_URL_STS: ()=>Ax,
    AWS_PROFILE: ()=>ox,
    AWS_REGION: ()=>qi,
    AWS_SECRET_ACCESS_KEY: ()=>sx,
    AWS_SESSION_TOKEN: ()=>ex,
    AWS_SHARED_CREDENTIALS_FILE: ()=>Ex,
    AWS_USE_FIPS_ENDPOINT: ()=>Ox,
    CCR_AGENT_PROXY_CA_CERT_B64: ()=>Kx,
    CCR_AGENT_PROXY_CA_WATCH_ENABLED: ()=>Wx,
    CCR_AGENT_PROXY_ENABLED: ()=>Bx,
    CCR_AGENT_PROXY_FRAME_HOSTS: ()=>vx,
    CCR_AGENT_PROXY_INCLUDE_HOSTS: ()=>mx,
    CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY: ()=>fx,
    CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED: ()=>Fx,
    CCR_AGENT_PROXY_RELAY_MODE: ()=>Gx,
    CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED: ()=>dx,
    CCR_ENABLE_BUNDLE: ()=>Yx,
    CCR_FORCE_BUNDLE: ()=>gx,
    CCR_ON_BRANCH_DEFAULT_GUARD: ()=>yx,
    CLAUDE_CODE_AGENT_PROXY_GH_SHIM: ()=>bx,
    CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG: ()=>ux,
    CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS: ()=>Hx,
    CLAUDE_CODE_API_BASE_URL: ()=>Wi,
    CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY: ()=>lx,
    CLAUDE_CODE_GATEWAY_MODEL_DISCOVERY_TIMEOUT_MS: ()=>Px,
    CLAUDE_CODE_GB_BASE_URL: ()=>Mx,
    CLAUDE_CODE_GB_REFRESH_INTERVAL_MS: ()=>ax,
    CLAUDE_CODE_HOST_GATEWAY_LINEAGE: ()=>px,
    CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST: ()=>cx,
    CLAUDE_CODE_PROXY_RESOLVES_HOSTS: ()=>Sx,
    CLAUDE_CODE_SIMULATE_PROXY_USAGE: ()=>Rx,
    CLAUDE_CODE_SKIP_HFI_VERSION_CHECK: ()=>wx,
    CLAUDE_CODE_USE_ANTHROPIC_AWS: ()=>mi,
    CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: ()=>Fi,
    CLAUDE_CODE_USE_BEDROCK: ()=>bi,
    CLAUDE_CODE_USE_FOUNDRY: ()=>Gi,
    CLAUDE_CODE_USE_GATEWAY: ()=>Ix,
    CLAUDE_CODE_USE_MANTLE: ()=>di,
    CLAUDE_CODE_USE_VERTEX: ()=>Hi,
    CLAUDE_GATEWAY_ALLOW_LOOPBACK: ()=>Ux,
    CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS: ()=>Nx,
    CLAUDE_GATEWAY_LOG_LEVEL: ()=>xx,
    CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY: ()=>ix,
    CLOUD_ML_REGION: ()=>Qi,
    _CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL: ()=>Ki
});
var bi = H.bool();
var Hi = H.bool();
var Gi = H.bool();
var mi = H.bool();
var Fi = H.bool();
var di = H.bool();
var fi = H.str();
var Ki = H.triBool();
var Wi = H.str();
var vi = H.str();
var Yi = H.enum(Z);
var gi = H.str();
var yi = H.str();
var Vi = H.str();
var wi = H.str();
var hi = H.str();
var Xi = H.str();
var ki = H.str();
var Zi = H.str();
var ji = H.str();
var Ji = H.str();
var Qi = H.str();
var zi = H.str();
var $i = H.str();
var qi = H.str();
var tx = H.str();
var ox = H.str();
var _x = H.str();
var Ex = H.str();
var rx = H.str();
var sx = H.str();
var ex = H.str();
var nx = H.str();
var Cx = H.str();
var Dx = H.str();
var Ax = H.str();
var Ox = H.str();
var Tx = H.str();
var Lx = H.str();
var cx = H.bool();
var px = H.bool();
var Rx = H.bool();
var Sx = H.bool();
var Ix = H.bool();
var Ux = H.bool();
var ix = H.bool();
var xx = H.str();
var Nx = H.int({
    min: 1,
    max: 2147000000,
    digitsOnly: true
});
var lx = H.bool();
var Px = H.int({
    min: 1,
    max: 2147483647,
    digitsOnly: true
});
var Mx = H.str();
var ax = H.int();
var Bx = H.bool();
var ux = H.bool();
var bx = H.bool();
var Hx = H.str();
var Gx = H.str();
var mx = H.str();
var Fx = H.bool();
var dx = H.bool();
var fx = H.bool();
var Kx = H.str();
var Wx = H.bool();
var vx = H.str();
var Yx = H.bool();
var gx = H.bool();
var yx = H.enum([
    "enforce",
    "observe",
    "off"
]);
var Vx = H.str();
var wx = H.bool();
const Xx = {
    ...l,
    ...F,
    ...G,
    ...M,
    ...m,
    ...u,
    ...P,
    ...b
};
function SPe(t, o) {
    let _ = Object.create(o);
    for (let [E, r] of Object.entries(t)){
        let e = _;
        let s;
        Object.defineProperty(_, E, {
            get: ()=>{
                let n = process.env[E];
                if (n !== e) {
                    s = r.parse(n);
                    e = n;
                }
                return s;
            },
            enumerable: true,
            configurable: true
        });
    }
    Object.defineProperties(_, {
        set: {
            value: (E, r)=>{
                process.env[E] = SMs(r);
            }
        },
        unset: {
            value: (E)=>{
                delete process.env[E];
            }
        }
    });
    return _;
}
const a = SPe(Xx, c);
const kx = {};
const Yn = SPe(kx, null);
const udsInboxShape = import.meta.require("/$bunfs/root/chunk-c2sb13hd.js").udsInboxShape;
const eT = SPe(udsInboxShape, null);
export { isRunningWithBun as Zk, $u, fOs, jw, zGn, oBe, p8e, f8e, Aa, HRr, yc, PN, xpe, gon, GGn, oCo, DRr, Bl, LRr, sCo, hon, mOs, Ise, iCo, gOs, VGn, yon, qGn, NRr, m8e, Ose, SPe, a, Yn, eT };
