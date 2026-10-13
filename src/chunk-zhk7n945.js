import { Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { it, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { g_e, HHn, bre, TLe, w5, cCt } from "/$bunfs/root/chunk-wvhw7yw5.js";
import { Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Oxt } from "/$bunfs/root/chunk-0ssjd960.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { homedir } from "os";
async function Rvn() {
    if ((await it("which", [
        "uv"
    ])).code === 0) {
        t("[it2Setup] Found uv (will use uv tool install)");
        return "uvx";
    }
    if ((await it("which", [
        "pipx"
    ])).code === 0) {
        t("[it2Setup] Found pipx package manager");
        return "pipx";
    }
    if ((await it("which", [
        "pip"
    ])).code === 0) {
        t("[it2Setup] Found pip package manager");
        return "pip";
    }
    if ((await it("which", [
        "pip3"
    ])).code === 0) {
        t("[it2Setup] Found pip3 package manager");
        return "pip";
    }
    t("[it2Setup] No Python package manager found");
    return null;
}
async function k() {
    return (await it("which", [
        "it2"
    ])).code === 0;
}
async function ZYr(packageManager) {
    t(`[it2Setup] Installing it2 using ${packageManager}`);
    let n;
    switch(packageManager){
        case "uvx":
            n = await ct("uv", [
                "tool",
                "install",
                "it2"
            ], {
                cwd: homedir()
            });
            break;
        case "pipx":
            n = await ct("pipx", [
                "install",
                "it2"
            ], {
                cwd: homedir()
            });
            break;
        case "pip":
            n = await ct("pip", [
                "install",
                "--user",
                "it2"
            ], {
                cwd: homedir()
            });
            if (n.code !== 0) {
                n = await ct("pip3", [
                    "install",
                    "--user",
                    "it2"
                ], {
                    cwd: homedir()
                });
            }
            break;
    }
    if (n.code !== 0) {
        let error = n.stderr || "Unknown installation error";
        t(`[it2Setup] Failed to install it2: ${error}`, {
            level: "error"
        });
        m("swarm_iterm2_it2_install", `${packageManager}_install_failed`);
        return {
            success: false,
            error,
            packageManager
        };
    }
    t("[it2Setup] it2 installed successfully");
    g("swarm_iterm2_it2_install");
    return {
        success: true,
        packageManager
    };
}
async function e6r() {
    t("[it2Setup] Verifying it2 setup...");
    if (!await k()) {
        m("swarm_iterm2_it2_verify", "not_installed");
        return {
            success: false,
            error: "it2 CLI is not installed or not in PATH"
        };
    }
    let n = await it("it2", [
        "session",
        "list"
    ]);
    if (n.code !== 0) {
        let a = n.stderr.toLowerCase();
        if (a.includes("api") || a.includes("python") || a.includes("connection refused") || a.includes("not enabled")) {
            t("[it2Setup] Python API not enabled in iTerm2");
            f("swarm_iterm2_it2_verify", "python_api_not_enabled");
            return {
                success: false,
                error: "Python API not enabled in iTerm2 preferences",
                needsPythonApiEnabled: true
            };
        }
        m("swarm_iterm2_it2_verify", "communication_failed");
        return {
            success: false,
            error: n.stderr || "Failed to communicate with iTerm2"
        };
    }
    t("[it2Setup] it2 setup verified successfully");
    g("swarm_iterm2_it2_verify");
    return {
        success: true
    };
}
function t6r() {
    return [
        "Almost done! Enable the Python API in iTerm2:",
        "",
        "  iTerm2 → Settings → General → Magic → Enable Python API",
        "",
        "After enabling, you may need to restart iTerm2."
    ];
}
function n6r(e) {
    if (ce().iterm2It2SetupComplete !== true) {
        Ae((a)=>({
                ...a,
                iterm2It2SetupComplete: true
            }), e);
        t("[it2Setup] Marked it2 setup as complete");
    }
}
function r6r(preferTmuxOverIterm2, n) {
    if (ce().preferTmuxOverIterm2 !== preferTmuxOverIterm2) {
        Ae((s)=>({
                ...s,
                preferTmuxOverIterm2
            }), n);
        t(`[it2Setup] Set preferTmuxOverIterm2 = ${preferTmuxOverIterm2}`);
    }
}
function d() {
    return ce().preferTmuxOverIterm2 === true;
}
async function qer(e = g_e) {
    if (e.backendsRegistered) {
        return;
    }
    let { TmuxBackend } = await import("/$bunfs/root/chunk-e6cw5c40.js");
    let { ITermBackend } = await import("/$bunfs/root/chunk-d57bgcq7.js");
    e.TmuxBackendClass = TmuxBackend;
    e.ITermBackendClass = ITermBackend;
    e.backendsRegistered = true;
}
function c(e) {
    if (e.tmuxBackend) {
        return e.tmuxBackend;
    }
    if (!e.TmuxBackendClass) {
        throw Error("TmuxBackend not registered. Import TmuxBackend.ts before using the registry.");
    }
    e.tmuxBackend = new e.TmuxBackendClass;
    return e.tmuxBackend;
}
function u(e) {
    if (e.itermBackend) {
        return e.itermBackend;
    }
    if (!e.ITermBackendClass) {
        throw Error("ITermBackend not registered. Import ITermBackend.ts before using the registry.");
    }
    e.itermBackend = new e.ITermBackendClass;
    return e.itermBackend;
}
async function xvn(e = g_e) {
    await qer(e);
    if (e.cachedDetectionResult) {
        t(`[BackendRegistry] Using cached backend: ${e.cachedDetectionResult.backend.type}`);
        return e.cachedDetectionResult;
    }
    t("[BackendRegistry] Starting backend detection...");
    if (Oxt() === "iterm2") {
        if (!w5(e)) {
            m("swarm_backend_detect", "iterm2_explicit_not_in_iterm2");
            throw Error('teammateMode is set to "iterm2" but this session is not running inside iTerm2. Launch Claude from iTerm2, or change teammateMode in settings.');
        }
        if (!await cCt(e)) {
            m("swarm_backend_detect", "iterm2_explicit_no_it2");
            throw Error('teammateMode is set to "iterm2" but the it2 CLI is not reachable. Install it with `pip install it2` and enable the Python API in iTerm2 (Preferences > General > Magic > Enable Python API).');
        }
        t("[BackendRegistry] Selected: iterm2 (explicit teammateMode)");
        let i = u(e);
        e.cachedDetectionResult = {
            backend: i,
            isNative: true,
            needsIt2Setup: false
        };
        g("swarm_backend_detect");
        return e.cachedDetectionResult;
    }
    let n = await bre();
    let a = w5(e);
    t(`[BackendRegistry] Environment: insideTmux=${n}, inITerm2=${a}`);
    if (n) {
        t("[BackendRegistry] Selected: tmux (running inside tmux session)");
        let i = c(e);
        e.cachedDetectionResult = {
            backend: i,
            isNative: true,
            needsIt2Setup: false
        };
        g("swarm_backend_detect");
        return e.cachedDetectionResult;
    }
    if (a) {
        let i = d();
        if (i) {
            t("[BackendRegistry] User prefers tmux over iTerm2, skipping iTerm2 detection");
        } else {
            let r = await cCt(e);
            t(`[BackendRegistry] iTerm2 detected, it2 CLI available: ${r}`);
            if (r) {
                t("[BackendRegistry] Selected: iterm2 (native iTerm2 with it2 CLI)");
                let p = u(e);
                e.cachedDetectionResult = {
                    backend: p,
                    isNative: true,
                    needsIt2Setup: false
                };
                g("swarm_backend_detect");
                return e.cachedDetectionResult;
            }
        }
        let l = await TLe();
        t(`[BackendRegistry] it2 not available, tmux available: ${l}`);
        if (l) {
            t("[BackendRegistry] Selected: tmux (fallback in iTerm2, it2 setup recommended)");
            let r = c(e);
            e.cachedDetectionResult = {
                backend: r,
                isNative: false,
                needsIt2Setup: !i
            };
            f("swarm_backend_detect", i ? "fallback_to_tmux" : "needs_it2_setup");
            return e.cachedDetectionResult;
        }
        t("[BackendRegistry] ERROR: iTerm2 detected but no it2 CLI and no tmux");
        m("swarm_backend_detect", "iterm2_no_it2_no_tmux");
        throw Error("iTerm2 detected but it2 CLI not installed. Install it2 with: pip install it2");
    }
    let s = await TLe();
    t(`[BackendRegistry] Not in tmux or iTerm2, tmux available: ${s}`);
    if (s) {
        t("[BackendRegistry] Selected: tmux (external session mode)");
        let i = c(e);
        e.cachedDetectionResult = {
            backend: i,
            isNative: false,
            needsIt2Setup: false
        };
        g("swarm_backend_detect");
        return e.cachedDetectionResult;
    }
    t("[BackendRegistry] ERROR: No pane backend available");
    m("swarm_backend_detect", "no_backend_available");
    throw Error(x());
}
function x() {
    switch(O()){
        case "macos":
            return `To use agent swarms, install tmux:
  brew install tmux
Then start a tmux session with: tmux new-session -s claude`;
        case "linux":
        case "wsl":
            return `To use agent swarms, install tmux:
  sudo apt install tmux    # Ubuntu/Debian
  sudo dnf install tmux    # Fedora/RHEL
Then start a tmux session with: tmux new-session -s claude`;
        case "windows":
            return `To use agent swarms, you need tmux which requires WSL (Windows Subsystem for Linux).
Install WSL first, then inside WSL run:
  sudo apt install tmux
Then start a tmux session with: tmux new-session -s claude`;
        default:
            return `To use agent swarms, install tmux using your system's package manager.
Then start a tmux session with: tmux new-session -s claude`;
    }
}
function w2t(e, n = g_e) {
    switch(e){
        case "tmux":
            return c(n);
        case "iterm2":
            return u(n);
    }
}
function o6r(e = g_e) {
    return e.cachedDetectionResult;
}
function s6r(e = g_e) {
    t("[BackendRegistry] Marking in-process fallback as active");
    e.inProcessFallbackActive = true;
}
function w() {
    return Oxt();
}
function v2t(e = g_e) {
    if (Ee()) {
        t("[BackendRegistry] isInProcessEnabled: true (non-interactive session)");
        return true;
    }
    let n = w();
    let a;
    if (n === "in-process") {
        a = true;
    } else if (n === "tmux" || n === "iterm2") {
        a = false;
    } else {
        if (e.inProcessFallbackActive) {
            t("[BackendRegistry] isInProcessEnabled: true (fallback after pane backend unavailable)");
            return true;
        }
        let s = HHn();
        let i = w5(e);
        a = !s && !i;
    }
    t(`[BackendRegistry] isInProcessEnabled: ${a} (mode=${n}, insideTmux=${HHn()}, inITerm2=${w5(e)})`);
    return a;
}
function E2t(e = g_e) {
    e.cachedDetectionResult = null;
    e.backendsRegistered = false;
    e.inProcessFallbackActive = false;
}
export { Rvn, ZYr, e6r, t6r, n6r, r6r, qer, xvn, w2t, o6r, s6r, v2t, E2t };
