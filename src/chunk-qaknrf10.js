import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, v, Jc } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Za } from "/$bunfs/root/chunk-xgw72tt1.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { rs } from "/$bunfs/root/chunk-6dwnw6av.js";
import { wo } from "/$bunfs/root/chunk-6s83kxfy.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { stat } from "fs/promises";
import { homedir } from "os";
import { join, isAbsolute, relative, sep } from "path";
import { lstatSync } from "fs";
function B() {
    switch("linux"){
        case "darwin":
            return [
                "Google Chrome.app/Contents/MacOS/Google Chrome",
                "Chromium.app/Contents/MacOS/Chromium",
                "Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
                "Brave Browser.app/Contents/MacOS/Brave Browser"
            ].flatMap((r)=>[
                    join("/Applications", r),
                    join(homedir(), "Applications", r)
                ]);
        case "win32":
            return [
                "C:\\Program Files",
                "C:\\Program Files (x86)",
                join(homedir(), "AppData", "Local")
            ].flatMap((r)=>[
                    join(r, "Google", "Chrome", "Application", "chrome.exe"),
                    join(r, "Chromium", "Application", "chrome.exe"),
                    join(r, "Microsoft", "Edge", "Application", "msedge.exe")
                ]);
        default:
            return [
                "/usr/bin/google-chrome-stable",
                "/usr/bin/google-chrome",
                "/usr/bin/chromium-browser",
                "/usr/bin/chromium",
                "/usr/local/bin/chromium",
                "/opt/google/chrome/chrome"
            ];
    }
}
async function T(e, r) {
    try {
        let o = await stat(e);
        return o.isFile() && (o.mode & 73) !== 0;
    } catch (error) {
        if (r && !Jc(error)) {
            throw error;
        }
        return false;
    }
}
async function _(e) {
    let r = [];
    for (let o of B()){
        if (Za(o)) {
            continue;
        }
        if (await T(o, e?.strict === true)) {
            r.push(o);
        }
    }
    return r;
}
const base = "/mnt/skills";
const y = "examples/artifact-emulator";
const rKr = "scripts/bootstrap.py";
const L = "tengu_cobalt_plinth_hornbeam";
const f = {
    base,
    ownerUid: 0
};
function ywn() {
    return join(f.base, y);
}
function oKr(e) {
    let r = relative(f.base, e);
    if (r === "" || r === ".." || r.startsWith(`..${sep}`) || isAbsolute(r)) {
        return "outside_mount";
    }
    let o = r.split(sep);
    let f_base = f.base;
    for(let c = 0; c <= o.length; c++){
        if (c > 0) {
            f_base = join(f_base, o[c - 1]);
        }
        let n;
        try {
            n = lstatSync(f_base);
        } catch (error) {
            let w = v(error);
            if (w === "ENOENT" || w === "ENOTDIR") {
                return "missing";
            }
            return "unreadable";
        }
        if (n.isSymbolicLink()) {
            return "link";
        }
        if (c === o.length ? !n.isFile() : !n.isDirectory()) {
            return "wrong_type";
        }
        if (n.uid !== f.ownerUid) {
            return "wrong_owner";
        }
        if ((n.mode & 18) !== 0) {
            return "writable";
        }
    }
}
function M() {
    if (!rs()) {
        return "not_hosted";
    }
    return oKr(join(ywn(), rKr));
}
function P() {
    return U().on;
}
function U() {
    let e = wo();
    if (e.artifactPreviewEmulator === undefined) {
        e.artifactPreviewEmulator = I();
        i("tengu_artifact_preview_emulator_gate", {
            on: e.artifactPreviewEmulator.on,
            reason: d(e.artifactPreviewEmulator.reason)
        });
    }
    return e.artifactPreviewEmulator;
}
function I() {
    let a_CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR = a.CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR;
    if (a_CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR === false) {
        return {
            on: false,
            reason: "pinned_off"
        };
    }
    let reason;
    try {
        reason = M();
    } catch (error) {
        t(`Artifact preview: could not check the emulator skill's files, so the emulator stays off: ${l(error)}`);
        reason = "unreadable";
    }
    if (reason !== undefined) {
        return {
            on: false,
            reason
        };
    }
    if (a_CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR === true) {
        return {
            on: true,
            reason: "pinned_on"
        };
    }
    if (k(L, false) === true) {
        return {
            on: true,
            reason: "flag_on"
        };
    }
    return {
        on: false,
        reason: "flag_off"
    };
}
const u = null;
function g() {
    return u !== null && true;
}
function GEe() {
    if (a.CLAUDE_CODE_ARTIFACT_PREVIEW === false) {
        return false;
    }
    if (sL() === "emulator") {
        return true;
    }
    if (!V()) {
        return false;
    }
    if (a.CLAUDE_CODE_ARTIFACT_PREVIEW === true) {
        return true;
    }
    return W() !== "none";
}
const F = {
    on: false
};
function sL() {
    let e = wo();
    e.artifactPreviewEngine ??= a.CLAUDE_CODE_ARTIFACT_PREVIEW !== false && F.on && H() ? "emulator" : "local_chrome";
    return e.artifactPreviewEngine;
}
function H() {
    return a.CLAUDE_CODE_REMOTE === true && P();
}
function V() {
    if (a.CLAUDE_CODE_REMOTE || !g()) {
        return false;
    }
    return a.CLAUDE_CODE_ARTIFACT_PREVIEW ?? k("tengu_cobalt_plinth_aspen", false);
}
function PZn() {
    if (u === null) {
        throw Error("artifact preview is not compiled into this build");
    }
    let { findPlaywrightChromes } = u;
    let chromeCandidates = async (o)=>{
        if (a.BUN_CHROME_PATH) {
            return [
                a.BUN_CHROME_PATH
            ];
        }
        return D([
            ...await findPlaywrightChromes(o),
            ...await _(o)
        ]);
    };
    return {
        chromeCandidates,
        resolveChrome: async ()=>(await chromeCandidates())[0],
        noSandbox: u.needsNoSandbox,
        installHint: u.chromeInstallHint,
        installDir: u.chromeInstallDir
    };
}
function b() {
    return `${a.BUN_CHROME_PATH ?? ""}
${a.PLAYWRIGHT_BROWSERS_PATH ?? ""}`;
}
async function oWs() {
    let e;
    try {
        if (a.CLAUDE_CODE_ARTIFACT_PREVIEW !== undefined || a.CLAUDE_CODE_REMOTE || !g()) {
            return;
        }
        let r = wo();
        if (r.artifactPreviewBrowserSearch !== undefined) {
            return;
        }
        e = {
            env: b(),
            state: "pending"
        };
        r.artifactPreviewBrowserSearch = e;
    } catch (error) {
        t(`Artifact preview: could not start the browser search: ${l(error)}`);
        return;
    }
    try {
        let r = await PZn().chromeCandidates({
            strict: true
        });
        e.state = r.length > 0 ? "found" : "none";
    } catch (error) {
        e.state = "error";
        t(`Artifact preview: the startup browser search failed: ${l(error)}`);
    }
}
function W() {
    let e = wo();
    if (e.artifactPreviewBrowser === undefined) {
        e.artifactPreviewBrowser = G(e.artifactPreviewBrowserSearch);
        i("tengu_artifact_preview_browser", {
            verdict: d(e.artifactPreviewBrowser.verdict),
            source: d(e.artifactPreviewBrowser.source)
        });
    }
    return e.artifactPreviewBrowser.verdict;
}
function sKr() {
    return wo().artifactPreviewBrowser;
}
function G(artifactPreviewBrowserSearch) {
    if (artifactPreviewBrowserSearch === undefined) {
        return {
            verdict: "unknown",
            source: "not_started"
        };
    }
    if (artifactPreviewBrowserSearch.env !== b()) {
        return {
            verdict: "unknown",
            source: "stale_env"
        };
    }
    if (artifactPreviewBrowserSearch.state === "pending" || artifactPreviewBrowserSearch.state === "error") {
        return {
            verdict: "unknown",
            source: artifactPreviewBrowserSearch.state
        };
    }
    return {
        verdict: artifactPreviewBrowserSearch.state,
        source: "session"
    };
}
export { rKr, ywn, oKr, GEe, sL, PZn, oWs, sKr };
