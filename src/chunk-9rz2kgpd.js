import N from "process";
import { Buffer } from "buffer";
import z from "path";
import { fileURLToPath } from "url";
import { promisify } from "util";
import D, { execFile, execFileSync } from "child_process";
import he, { constants } from "fs/promises";
import Y from "os";
import j from "fs";
let h;
function G() {
    try {
        j.statSync("/.dockerenv");
        return true;
    } catch  {
        return false;
    }
}
function X() {
    try {
        return j.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
    } catch  {
        return false;
    }
}
function x() {
    if (h === undefined) {
        h = G() || X();
    }
    return h;
}
let y;
const q = ()=>{
    try {
        j.statSync("/run/.containerenv");
        return true;
    } catch  {
        return false;
    }
};
function p() {
    if (y === undefined) {
        y = q() || x();
    }
    return y;
}
const L = ()=>{
    if (N.platform !== "linux") {
        return false;
    }
    if (Y.release().toLowerCase().includes("microsoft")) {
        if (p()) {
            return false;
        }
        return true;
    }
    try {
        if (j.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft")) {
            return !p();
        }
        return false;
    } catch  {
        return false;
    }
};
const c = N.env.__IS_WSL_TEST__ ? L : L();
const Q = (()=>{
    let r;
    return async ()=>{
        if (r) {
            return r;
        }
        let o = "/etc/wsl.conf";
        let n = false;
        try {
            await he.access(o, constants.F_OK);
            n = true;
        } catch  {}
        if (!n) {
            return "/mnt/";
        }
        let t = await he.readFile(o, {
            encoding: "utf8"
        });
        let s = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(t);
        if (!s) {
            return "/mnt/";
        }
        r = s.groups.mountPoint.trim();
        r = r.endsWith("/") ? r : `${r}/`;
        return r;
    };
})();
const V = async ()=>`${await Q()}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`;
const v = async ()=>{
    if (c) {
        return V();
    }
    return `${N.env.SYSTEMROOT || N.env.windir || String.raw`C:\Windows`}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`;
};
function m(e, r, o) {
    let n = (value)=>Object.defineProperty(e, r, {
            value,
            enumerable: true,
            writable: true
        });
    Object.defineProperty(e, r, {
        configurable: true,
        enumerable: true,
        get () {
            let t = o();
            n(t);
            return t;
        },
        set (t) {
            n(t);
        }
    });
    return e;
}
const oe = promisify(execFile);
async function S() {
    if (N.platform !== "darwin") {
        throw Error("macOS only");
    }
    let { stdout } = await oe("defaults", [
        "read",
        "com.apple.LaunchServices/com.apple.launchservices.secure",
        "LSHandlers"
    ]);
    return /LSHandlerRoleAll = "(?!-)(?<id>[^"]+?)";\s+?LSHandlerURLScheme = (?:http|https);/.exec(stdout)?.groups.id ?? "com.apple.Safari";
}
const se = promisify(execFile);
async function W(e, { humanReadableOutput = true, signal } = {}) {
    if (N.platform !== "darwin") {
        throw Error("macOS only");
    }
    let n = humanReadableOutput ? [] : [
        "-ss"
    ];
    let t = {};
    if (signal) {
        t.signal = signal;
    }
    let { stdout } = await se("osascript", [
        "-e",
        e,
        n
    ], t);
    return stdout.trim();
}
async function P(e) {
    return W(`tell application "Finder" to set app_path to application file id "${e}" as string
tell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")`);
}
const me = promisify(execFile);
const fe = {
    AppXq0fevzme2pys62n3e0fbqa7peapykr8v: {
        name: "Edge",
        id: "com.microsoft.edge.old"
    },
    MSEdgeDHTML: {
        name: "Edge",
        id: "com.microsoft.edge"
    },
    MSEdgeHTM: {
        name: "Edge",
        id: "com.microsoft.edge"
    },
    "IE.HTTP": {
        name: "Internet Explorer",
        id: "com.microsoft.ie"
    },
    FirefoxURL: {
        name: "Firefox",
        id: "org.mozilla.firefox"
    },
    ChromeHTML: {
        name: "Chrome",
        id: "com.google.chrome"
    },
    BraveHTML: {
        name: "Brave",
        id: "com.brave.Browser"
    },
    BraveBHTML: {
        name: "Brave Beta",
        id: "com.brave.Browser.beta"
    },
    BraveSSHTM: {
        name: "Brave Nightly",
        id: "com.brave.Browser.nightly"
    }
};
class b extends Error {
}
async function A(e = me) {
    let { stdout } = await e("reg", [
        "QUERY",
        " HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice",
        "/v",
        "ProgId"
    ]);
    let o = /ProgId\s*REG_SZ\s*(?<id>\S+)/.exec(stdout);
    if (!o) {
        throw new b(`Cannot find Windows browser in stdout: ${JSON.stringify(stdout)}`);
    }
    let { id } = o.groups;
    let t = fe[id];
    if (!t) {
        throw new b(`Unknown browser ID: ${id}`);
    }
    return t;
}
const ue = promisify(execFile);
const de = (e)=>e.toLowerCase().replaceAll(/(?:^|\s|-)\S/g, (r)=>r.toUpperCase());
async function B() {
    if (N.platform === "darwin") {
        let e = await S();
        return {
            name: await P(e),
            id: e
        };
    }
    if (N.platform === "linux") {
        let { stdout } = await ue("xdg-mime", [
            "query",
            "default",
            "x-scheme-handler/http"
        ]);
        let r = stdout.trim();
        return {
            name: de(r.replace(/.desktop$/, "").replace("-", " ")),
            id: r
        };
    }
    if (N.platform === "win32") {
        return A();
    }
    throw Error("Only macOS, Linux, and Windows are supported");
}
const ye = promisify(D.execFile);
const F = z.dirname(fileURLToPath(import.meta.url));
const k = z.join(F, "xdg-open");
const { platform, arch } = N;
async function ve() {
    let e = await v();
    let r = String.raw`(Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\Shell\Associations\UrlAssociations\http\UserChoice").ProgId`;
    let o = Buffer.from(r, "utf16le").toString("base64");
    let { stdout } = await ye(e, [
        "-NoProfile",
        "-NonInteractive",
        "-ExecutionPolicy",
        "Bypass",
        "-EncodedCommand",
        o
    ], {
        encoding: "utf8"
    });
    let t = stdout.trim();
    let s = {
        ChromeHTML: "com.google.chrome",
        BraveHTML: "com.brave.Browser",
        MSEdgeHTM: "com.microsoft.edge",
        FirefoxURL: "org.mozilla.firefox"
    };
    if (s[t]) {
        return {
            id: s[t]
        };
    }
    return {};
}
const _ = async (e, r)=>{
    let o;
    for (let n of e){
        try {
            return await r(n);
        } catch (error) {
            o = error;
        }
    }
    throw o;
};
const w = async (e)=>{
    e = {
        wait: false,
        background: false,
        newInstance: false,
        allowNonzeroExitCode: false,
        ...e
    };
    if (Array.isArray(e.app)) {
        return _(e.app, (app)=>w({
                ...e,
                app
            }));
    }
    let { name, arguments: _arguments = [] } = e.app ?? {};
    _arguments = [
        ..._arguments
    ];
    if (Array.isArray(name)) {
        return _(name, (name_1)=>w({
                ...e,
                app: {
                    name: name_1,
                    arguments: _arguments
                }
            }));
    }
    if (name === "browser" || name === "browserPrivate") {
        let i = {
            "com.google.chrome": "chrome",
            "google-chrome.desktop": "chrome",
            "com.brave.Browser": "brave",
            "org.mozilla.firefox": "firefox",
            "firefox.desktop": "firefox",
            "com.microsoft.msedge": "edge",
            "com.microsoft.edge": "edge",
            "com.microsoft.edgemac": "edge",
            "microsoft-edge.desktop": "edge"
        };
        let a = {
            chrome: "--incognito",
            brave: "--incognito",
            firefox: "--private-window",
            edge: "--inPrivate"
        };
        let f = c ? await ve() : await B();
        if (f.id in i) {
            let C = i[f.id];
            if (name === "browserPrivate") {
                _arguments.push(a[C]);
            }
            return w({
                ...e,
                app: {
                    name: l[C],
                    arguments: _arguments
                }
            });
        }
        throw Error(`${f.name} is not supported as a default browser`);
    }
    let n;
    let t = [];
    let s = {};
    if (platform === "darwin") {
        n = "open";
        if (e.wait) {
            t.push("--wait-apps");
        }
        if (e.background) {
            t.push("--background");
        }
        if (e.newInstance) {
            t.push("--new");
        }
        if (name) {
            t.push("-a", name);
        }
    } else if (platform === "win32" || c && !p() && !name) {
        n = await v();
        t.push("-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand");
        if (!c) {
            s.windowsVerbatimArguments = true;
        }
        let i = [
            "Start"
        ];
        if (e.wait) {
            i.push("-Wait");
        }
        if (name) {
            i.push(`"\`"${name}\`""`);
            if (e.target) {
                _arguments.push(e.target);
            }
        } else if (e.target) {
            i.push(`"${e.target}"`);
        }
        if (_arguments.length > 0) {
            _arguments = _arguments.map((a)=>`"\`"${a}\`""`);
            i.push("-ArgumentList", _arguments.join(","));
        }
        e.target = Buffer.from(i.join(" "), "utf16le").toString("base64");
    } else {
        if (name) {
            n = name;
        } else {
            let i = !F || F === "/";
            let a = false;
            try {
                await he.access(k, constants.X_OK);
                a = true;
            } catch  {}
            n = N.versions.electron ?? (platform === "android" || i || !a) ? "xdg-open" : k;
        }
        if (_arguments.length > 0) {
            t.push(..._arguments);
        }
        if (!e.wait) {
            s.stdio = "ignore";
            s.detached = true;
        }
    }
    if (platform === "darwin" && _arguments.length > 0) {
        t.push("--args", ..._arguments);
    }
    if (e.target) {
        t.push(e.target);
    }
    let d = D.spawn(n, t, s);
    if (e.wait) {
        return new Promise((resolve, reject)=>{
            d.once("error", reject);
            d.once("close", (f)=>{
                if (!e.allowNonzeroExitCode && f > 0) {
                    reject(Error(`Exited with code ${f}`));
                    return;
                }
                resolve(d);
            });
        });
    }
    d.unref();
    return d;
};
const Se = (target, r)=>{
    if (typeof target !== "string") {
        throw TypeError("Expected a `target`");
    }
    return w({
        ...r,
        target
    });
};
function U(e) {
    if (typeof e === "string" || Array.isArray(e)) {
        return e;
    }
    let { [arch]: r } = e;
    if (!r) {
        throw Error(`${arch} is not supported`);
    }
    return r;
}
function g({ [platform]: e }, { wsl }) {
    if (wsl && c) {
        return U(wsl);
    }
    if (!e) {
        throw Error(`${platform} is not supported`);
    }
    return U(e);
}
var l = {};
m(l, "chrome", ()=>g({
        darwin: "google chrome",
        win32: "chrome",
        linux: [
            "google-chrome",
            "google-chrome-stable",
            "chromium"
        ]
    }, {
        wsl: {
            ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
            x64: [
                "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe",
                "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"
            ]
        }
    }));
m(l, "brave", ()=>g({
        darwin: "brave browser",
        win32: "brave",
        linux: [
            "brave-browser",
            "brave"
        ]
    }, {
        wsl: {
            ia32: "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe",
            x64: [
                "/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe",
                "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe"
            ]
        }
    }));
m(l, "firefox", ()=>g({
        darwin: "firefox",
        win32: String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`,
        linux: "firefox"
    }, {
        wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe"
    }));
m(l, "edge", ()=>g({
        darwin: "microsoft edge",
        win32: "msedge",
        linux: [
            "microsoft-edge",
            "microsoft-edge-dev"
        ]
    }, {
        wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
    }));
m(l, "browser", ()=>"browser");
m(l, "browserPrivate", ()=>"browserPrivate");
const hr = Se;
export { hr as default };
