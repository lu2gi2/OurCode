import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { v, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { yc, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { it, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { ka } from "/$bunfs/root/chunk-5mfg4ngf.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { readdir, stat, lstat } from "fs/promises";
import { homedir, platform, userInfo } from "os";
import { join, dirname, win32 } from "path";
import { spawn } from "child_process";
const I = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths";
const timeout = 10000;
const L = 5000;
function K() {
    if (!a.LOCALAPPDATA) {
        return;
    }
    let e = a.LOCALAPPDATA.replace(/[\\/]+$/, "");
    return win32.normalize(`${e}\\Microsoft\\WindowsApps\\`).toLowerCase();
}
function w() {
    return a.SYSTEMROOT || a.SystemRoot || "C:\\Windows";
}
function F(stdout) {
    for (let s of stdout.split(/\r?\n/)){
        let o = s.match(/^\s+.+?\s+REG_(?:EXPAND_)?SZ\s+(.+)$/i);
        if (o && o[1]) {
            let n = o[1].trim();
            if (n.length >= 2 && n.startsWith('"') && n.endsWith('"')) {
                n = n.slice(1, -1);
            }
            return n;
        }
    }
    return null;
}
function W(e, s = process.env) {
    let o = new Map;
    for (let [n, r] of Object.entries(s)){
        if (r !== undefined) {
            o.set(n.toLowerCase(), r);
        }
    }
    return e.replace(/%([^%]+)%/g, (n, r)=>o.get(r.toLowerCase()) ?? n);
}
async function x(e, s = L) {
    let cwd = w();
    let n = `${cwd}\\System32\\reg.exe`;
    for (let r of [
        "HKCU",
        "HKLM"
    ]){
        let c = await ct(n, [
            "query",
            `${r}\\${I}\\${e}`,
            "/ve"
        ], {
            timeout,
            cwd
        });
        if (c.code !== 0) {
            if (c.exitCode === undefined) {
                t(`[Claude in Chrome] ${r} App Paths query for ${e} did not run to completion: ${c.error ?? `killed at the ${timeout}ms bound, or reg.exe failed to spawn`}`);
            }
            continue;
        }
        let i = F(c.stdout);
        if (!i) {
            t(`[Claude in Chrome] ${r} App Paths value for ${e} had no parseable string default; skipping`);
            continue;
        }
        let u = W(i);
        if (!/^(?:[a-zA-Z]:[\\/]|\\\\)/.test(u)) {
            t(`[Claude in Chrome] Skipping ${r} App Paths candidate for ${e}: not a fully qualified path`);
            continue;
        }
        try {
            let f = lstat(u);
            f.catch(()=>{});
            let p = await Ge(f, s);
            if (p === undefined) {
                t(`[Claude in Chrome] Skipping ${r} App Paths candidate for ${e}: existence check exceeded ${s}ms`);
                continue;
            }
            if (!p.isDirectory()) {
                t(`[Claude in Chrome] Resolved ${e} via ${r} App Paths`);
                return u;
            }
            t(`[Claude in Chrome] Skipping ${r} App Paths candidate for ${e}: resolves to a directory`);
        } catch (error) {
            let p = v(error);
            let P = K();
            if (P !== undefined && win32.normalize(u).toLowerCase().startsWith(P) && p !== "ENOENT" && p !== "ENOTDIR") {
                t(`[Claude in Chrome] Resolved ${e} via ${r} App Paths (stat-odd: ${p ?? String(error)})`);
                return u;
            }
            t(`[Claude in Chrome] Skipping ${r} App Paths candidate for ${e}: ${p ?? String(error)}`);
        }
    }
    return null;
}
function M(e, s) {
    return new Promise((resolve)=>{
        let n;
        try {
            n = spawn(e, s, {
                cwd: dirname(e),
                detached: true,
                stdio: "ignore",
                windowsHide: false
            });
        } catch (error) {
            t(`[Claude in Chrome] Detached launch of ${e} failed: ${v(error) ?? String(error)}`, {
                level: "error"
            });
            resolve(false);
            return;
        }
        n.once("spawn", ()=>resolve(true));
        n.once("error", (r)=>{
            t(`[Claude in Chrome] Detached launch of ${e} failed: ${v(r) ?? r.message}`, {
                level: "error"
            });
            resolve(false);
        });
        n.unref();
    });
}
class A {
    bridgeBinding = undefined;
    browserHints = undefined;
    lastSentPreferredDeviceId = undefined;
    resolvedHostByToolUseId = new Map;
    shouldAutoEnable = undefined;
    wiredThisSession = false;
    attachedInstructions = "";
    installUpsellResolution = undefined;
    installUpsellBypassSuppressionCounted = false;
    trackedTabIds = new Set;
    tabGroupCleanupRegistered = false;
    unsubscribeSessionSwitch = undefined;
    unregisterExitCleanup = undefined;
    closesInFlight = new Map;
    lastExecutedTabUrlByScope = new Map;
    resolvedUrlByToolUseId = new Map;
    disconnectedAnswerCount = 0;
    disconnectedAnswerTexts = new Set;
    notConnectedSeenByPriorWorker = false;
    notConnectedMirrored = false;
    chromeSetupOfferArm = undefined;
    chromeSetupOfferArmMirrored = false;
    chromeSetupOfferStateUnread = false;
    lastTurnClientPlatform = undefined;
    reset() {
        this.bridgeBinding = undefined;
        this.browserHints = undefined;
        this.lastSentPreferredDeviceId = undefined;
        this.resolvedHostByToolUseId = new Map;
        this.shouldAutoEnable = undefined;
        this.wiredThisSession = false;
        this.attachedInstructions = "";
        this.installUpsellResolution = undefined;
        this.installUpsellBypassSuppressionCounted = false;
        this.trackedTabIds = new Set;
        this.tabGroupCleanupRegistered = false;
        this.unsubscribeSessionSwitch?.();
        this.unsubscribeSessionSwitch = undefined;
        this.unregisterExitCleanup?.();
        this.unregisterExitCleanup = undefined;
        this.closesInFlight = new Map;
        this.lastExecutedTabUrlByScope = new Map;
        this.resolvedUrlByToolUseId = new Map;
        this.disconnectedAnswerCount = 0;
        this.notConnectedSeenByPriorWorker = false;
        this.notConnectedMirrored = false;
        this.chromeSetupOfferArm = undefined;
        this.chromeSetupOfferArmMirrored = false;
        this.chromeSetupOfferStateUnread = false;
        this.lastTurnClientPlatform = undefined;
        this.disconnectedAnswerTexts = new Set;
    }
}
const wpr = new q(()=>new A);
function tl() {
    return wpr.of(B().host);
}
function Zis(e) {
    let s = tl().resolvedHostByToolUseId.get(e);
    if (s !== undefined) {
        s.keepHostPin = true;
    }
}
const OD = `mcp__${ka}__`;
const F2 = "ClaudeInChromeDomain";
const h = {
    chrome: {
        name: "Google Chrome",
        macos: {
            appName: "Google Chrome",
            nativeMessagingPath: [
                "Library",
                "Application Support",
                "Google",
                "Chrome",
                "NativeMessagingHosts"
            ]
        },
        linux: {
            binaries: [
                "google-chrome",
                "google-chrome-stable"
            ],
            nativeMessagingPath: [
                ".config",
                "google-chrome",
                "NativeMessagingHosts"
            ]
        },
        windows: {
            dataPath: [
                "Google",
                "Chrome",
                "User Data"
            ],
            registryKey: "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts",
            appPathsExe: "chrome.exe"
        }
    },
    brave: {
        name: "Brave",
        macos: {
            appName: "Brave Browser",
            nativeMessagingPath: [
                "Library",
                "Application Support",
                "BraveSoftware",
                "Brave-Browser",
                "NativeMessagingHosts"
            ]
        },
        linux: {
            binaries: [
                "brave-browser",
                "brave"
            ],
            nativeMessagingPath: [
                ".config",
                "BraveSoftware",
                "Brave-Browser",
                "NativeMessagingHosts"
            ]
        },
        windows: {
            dataPath: [
                "BraveSoftware",
                "Brave-Browser",
                "User Data"
            ],
            registryKey: "HKCU\\Software\\BraveSoftware\\Brave-Browser\\NativeMessagingHosts",
            appPathsExe: "brave.exe"
        }
    },
    arc: {
        name: "Arc",
        macos: {
            appName: "Arc",
            nativeMessagingPath: [
                "Library",
                "Application Support",
                "Arc",
                "User Data",
                "NativeMessagingHosts"
            ]
        },
        linux: {
            binaries: [],
            nativeMessagingPath: []
        },
        windows: {
            dataPath: [
                "Arc",
                "User Data"
            ],
            registryKey: "HKCU\\Software\\ArcBrowser\\Arc\\NativeMessagingHosts"
        }
    },
    chromium: {
        name: "Chromium",
        macos: {
            appName: "Chromium",
            nativeMessagingPath: [
                "Library",
                "Application Support",
                "Chromium",
                "NativeMessagingHosts"
            ]
        },
        linux: {
            binaries: [
                "chromium",
                "chromium-browser"
            ],
            nativeMessagingPath: [
                ".config",
                "chromium",
                "NativeMessagingHosts"
            ]
        },
        windows: {
            dataPath: [
                "Chromium",
                "User Data"
            ],
            registryKey: "HKCU\\Software\\Chromium\\NativeMessagingHosts"
        }
    },
    edge: {
        name: "Microsoft Edge",
        macos: {
            appName: "Microsoft Edge",
            nativeMessagingPath: [
                "Library",
                "Application Support",
                "Microsoft Edge",
                "NativeMessagingHosts"
            ]
        },
        linux: {
            binaries: [
                "microsoft-edge",
                "microsoft-edge-stable"
            ],
            nativeMessagingPath: [
                ".config",
                "microsoft-edge",
                "NativeMessagingHosts"
            ]
        },
        windows: {
            dataPath: [
                "Microsoft",
                "Edge",
                "User Data"
            ],
            registryKey: "HKCU\\Software\\Microsoft\\Edge\\NativeMessagingHosts",
            appPathsExe: "msedge.exe"
        }
    },
    vivaldi: {
        name: "Vivaldi",
        macos: {
            appName: "Vivaldi",
            nativeMessagingPath: [
                "Library",
                "Application Support",
                "Vivaldi",
                "NativeMessagingHosts"
            ]
        },
        linux: {
            binaries: [
                "vivaldi",
                "vivaldi-stable"
            ],
            nativeMessagingPath: [
                ".config",
                "vivaldi",
                "NativeMessagingHosts"
            ]
        },
        windows: {
            dataPath: [
                "Vivaldi",
                "User Data"
            ],
            registryKey: "HKCU\\Software\\Vivaldi\\NativeMessagingHosts",
            appPathsExe: "vivaldi.exe"
        }
    },
    opera: {
        name: "Opera",
        macos: {
            appName: "Opera",
            nativeMessagingPath: [
                "Library",
                "Application Support",
                "com.operasoftware.Opera",
                "NativeMessagingHosts"
            ]
        },
        linux: {
            binaries: [
                "opera"
            ],
            nativeMessagingPath: [
                ".config",
                "opera",
                "NativeMessagingHosts"
            ]
        },
        windows: {
            dataPath: [
                "Opera Software",
                "Opera Stable"
            ],
            registryKey: "HKCU\\Software\\Opera Software\\Opera Stable\\NativeMessagingHosts",
            useRoaming: true,
            appPathsExe: "opera.exe"
        }
    }
};
const S = [
    "chrome",
    "brave",
    "arc",
    "edge",
    "chromium",
    "vivaldi",
    "opera"
];
function fro() {
    let e = O();
    let s = homedir();
    let o = [];
    for (let n of S){
        let r = h[n];
        switch(e){
            case "macos":
                if (r.macos.nativeMessagingPath.length > 0) {
                    o.push({
                        browser: n,
                        path: join(s, ...r.macos.nativeMessagingPath)
                    });
                }
                break;
            case "linux":
            case "wsl":
                if (r.linux.nativeMessagingPath.length > 0) {
                    o.push({
                        browser: n,
                        path: join(s, ...r.linux.nativeMessagingPath)
                    });
                }
                break;
            case "windows":
                break;
        }
    }
    return o;
}
function mro() {
    let e = [];
    for (let s of S){
        let o = h[s];
        if (o.windows.registryKey) {
            e.push({
                browser: s,
                key: o.windows.registryKey
            });
        }
    }
    return e;
}
async function vpr() {
    let e = O();
    for (let s of S){
        let o = h[s];
        switch(e){
            case "macos":
                {
                    let n = `/Applications/${o.macos.appName}.app`;
                    try {
                        if ((await stat(n)).isDirectory()) {
                            t(`[Claude in Chrome] Detected browser: ${o.name}`);
                            return s;
                        }
                    } catch (error) {
                        if (!jt(error)) {
                            throw error;
                        }
                    }
                    break;
                }
            case "wsl":
            case "linux":
                {
                    for (let n of o.linux.binaries){
                        if (await yc(n).catch(()=>null)) {
                            t(`[Claude in Chrome] Detected browser: ${o.name}`);
                            return s;
                        }
                    }
                    break;
                }
            case "windows":
                {
                    let n = homedir();
                    if (o.windows.dataPath.length > 0) {
                        let r = o.windows.useRoaming ? join(n, "AppData", "Roaming") : join(n, "AppData", "Local");
                        let c = join(r, ...o.windows.dataPath);
                        try {
                            if ((await stat(c)).isDirectory()) {
                                t(`[Claude in Chrome] Detected browser: ${o.name}`);
                                return s;
                            }
                        } catch (error) {
                            if (!jt(error)) {
                                throw error;
                            }
                        }
                    }
                    break;
                }
        }
    }
    return null;
}
const z = 200;
function gro(e) {
    let trackedTabIds = tl().trackedTabIds;
    if (trackedTabIds.size >= z && !trackedTabIds.has(e)) {
        trackedTabIds.clear();
    }
    trackedTabIds.add(e);
}
function hro(e) {
    return tl().trackedTabIds.has(e);
}
function C(e) {
    return {
        exec_exit_code: e.code,
        exec_failure_kind: e.exitCode !== undefined ? b("nonzero_exit") : e.code === 127 ? b("not_found") : b("spawn_failed_or_killed")
    };
}
async function D0e(e) {
    if (!/^https?:\/\//i.test(e)) {
        m("chrome_open_url", "invalid_url");
        return false;
    }
    let s = O();
    let o = await vpr();
    if (!o) {
        t("[Claude in Chrome] No compatible browser found");
        m("chrome_open_url", "no_browser");
        return false;
    }
    let n = h[o];
    switch(s){
        case "macos":
            {
                let r = await it("open", [
                    "-a",
                    n.macos.appName,
                    e
                ]);
                if (r.code === 0) {
                    g("chrome_open_url");
                    return true;
                }
                m("chrome_open_url", "exec_failed", C(r));
                return false;
            }
        case "windows":
            {
                let r = n.windows.appPathsExe;
                let c = false;
                if (r) {
                    let u = await x(r);
                    if (u) {
                        if (await M(u, [
                            e
                        ])) {
                            g("chrome_open_url", {
                                open_method: b("app_paths"),
                                browser: d(o)
                            });
                            return true;
                        }
                        c = true;
                    }
                }
                let i = await ct("rundll32", [
                    "url,OpenURL",
                    e
                ], {
                    cwd: w()
                });
                if (i.code === 0) {
                    g("chrome_open_url", {
                        open_method: c ? b("rundll32_after_spawn_fail") : r ? b("rundll32") : b("rundll32_no_app_paths_support"),
                        browser: d(o)
                    });
                    return true;
                }
                m("chrome_open_url", "exec_failed", {
                    ...C(i),
                    ...c && {
                        app_paths_spawn_failed: true
                    },
                    browser: d(o)
                });
                return false;
            }
        case "wsl":
        case "linux":
            {
                let r;
                for (let c of n.linux.binaries){
                    let i = await it(c, [
                        e
                    ], {
                        useCwd: true,
                        useToolMemoryCgroup: false
                    });
                    if (i.code === 0) {
                        g("chrome_open_url");
                        return true;
                    }
                    if (r?.exitCode === undefined || i.exitCode !== undefined) {
                        r = i;
                    }
                }
                m("chrome_open_url", "exec_failed", r ? C(r) : undefined);
                return false;
            }
        default:
            m("chrome_open_url", "exec_failed");
            return false;
    }
}
function N3t() {
    return `/tmp/claude-mcp-browser-bridge-${k()}`;
}
function $3t() {
    if (platform() === "win32") {
        return `\\\\.\\pipe\\${T()}`;
    }
    return join(N3t(), `${process.pid}.sock`);
}
async function yro() {
    if (platform() === "win32") {
        return [
            `\\\\.\\pipe\\${T()}`
        ];
    }
    let e = [];
    let s = N3t();
    try {
        let o = await readdir(s);
        for (let n of o){
            if (n.endsWith(".sock")) {
                e.push(join(s, n));
            }
        }
    } catch  {}
    return e;
}
function T() {
    return `claude-mcp-browser-bridge-${k()}`;
}
function k() {
    try {
        return userInfo().username || "default";
    } catch  {
        return a.USER || a.USERNAME || "default";
    }
}
export { wpr, tl, Zis, OD, F2, fro, mro, vpr, gro, hro, D0e, N3t, $3t, yro };
