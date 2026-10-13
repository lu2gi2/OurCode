import { bu } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Za } from "/$bunfs/root/chunk-xgw72tt1.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { _ot } from "/$bunfs/root/chunk-mb842220.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { fileURLToPath, pathToFileURL } from "url";
function s(r, e) {
    if (r === "macos") {
        return {
            command: "open",
            args: [
                "-R",
                "--",
                e
            ]
        };
    }
    if (r === "windows") {
        return {
            command: "explorer",
            args: [
                `/select,${e}`
            ]
        };
    }
    return {
        command: "dbus-send",
        args: [
            "--session",
            "--print-reply",
            "--dest=org.freedesktop.FileManager1",
            "--type=method_call",
            "/org/freedesktop/FileManager1",
            "org.freedesktop.FileManager1.ShowItems",
            `array:string:${pathToFileURL(e).href.replaceAll(",", "%2C")}`,
            "string:"
        ]
    };
}
const f = {
    useCwd: true,
    useToolMemoryCgroup: false
};
const mWr = new Set([
    "https:",
    "http:",
    "vscode:",
    "vscode-insiders:",
    "cursor:",
    "windsurf:",
    "zed:",
    "jetbrains:",
    "idea:",
    "slack:",
    "linear:",
    "notion:",
    "figma:"
]);
function g(r) {
    let e;
    try {
        e = new URL(r);
    } catch (o) {
        throw Error(`Invalid URL format: ${r}`);
    }
    if (e.protocol !== "http:" && e.protocol !== "https:") {
        throw Error(`Invalid URL protocol: must use http:// or https://, got ${e.protocol}`);
    }
}
async function Ajt(r) {
    try {
        let o = "xdg-open";
        let { code } = await it(o, [
            r
        ], f);
        return code === 0;
    } catch (e) {
        return false;
    }
}
async function h(r) {
    try {
        let e = O();
        if (e === "macos") {
            let { command: command_1, args: args_1 } = s("macos", r);
            let { code: code_1 } = await it(command_1, args_1);
            return code_1 === 0;
        }
        if (e === "windows") {
            let { command: command_1, args: args_1 } = s("windows", r);
            let { exitCode } = await it(command_1, args_1);
            return exitCode !== undefined;
        }
        let { command, args } = s("linux", r);
        let { code } = await it(command, args);
        return code === 0;
    } catch (e) {
        return false;
    }
}
async function Cjt(r) {
    let e;
    try {
        e = new URL(r);
    } catch  {
        return false;
    }
    let e_protocol = e.protocol;
    if (e_protocol === "file:") {
        if (e.host !== "") {
            return false;
        }
        try {
            let n = fileURLToPath(r);
            if (Za(n) || _ot(n)) {
                return false;
            }
            return await h(n);
        } catch  {
            return false;
        }
    }
    if (!mWr.has(e_protocol)) {
        t(`[hyperlink] refusing to dispatch clicked link with non-allowlisted scheme ${e_protocol}`, {
            level: "warn"
        });
        return false;
    }
    return (await m(r)).ok;
}
function xj() {
    if (!process.stdout.isTTY) {
        return true;
    }
    if (a.BROWSER && a.BROWSER !== "true") {
        return false;
    }
    if (a.SSH_CONNECTION) {
        return true;
    }
    return p();
}
function p() {
    return O() === "linux" && !a.DISPLAY && !a.WAYLAND_DISPLAY;
}
async function Rjt(r) {
    try {
        g(r);
    } catch (error) {
        return {
            ok: false,
            reason: "invalid_url",
            detail: error instanceof Error ? error.message : String(error)
        };
    }
    return m(r);
}
async function Fs(r) {
    return (await Rjt(r)).ok;
}
async function m(r) {
    try {
        let e = bu()?.browser;
        let o = e !== undefined ? e ?? undefined : a.BROWSER;
        let n = "linux";
        if (!o && p()) {
            return {
                ok: false,
                reason: "no_display"
            };
        }
        return y(await it(o || "xdg-open", [
            r
        ], f));
    } catch (error) {
        return {
            ok: false,
            reason: "unknown",
            detail: error instanceof Error ? error.message : String(error)
        };
    }
}
function y(r) {
    if (r.code === 0) {
        return {
            ok: true
        };
    }
    let e = r.error ?? "";
    let detail = r.stderr || e || `exit ${r.code}`;
    if (r.code === 127 || e.includes("ENOENT")) {
        return {
            ok: false,
            reason: "opener_missing",
            detail
        };
    }
    if (e.includes("ETIMEDOUT") || e.includes("timed out")) {
        return {
            ok: false,
            reason: "timeout",
            detail
        };
    }
    if (e.includes("EACCES") || e.includes("EPERM")) {
        return {
            ok: false,
            reason: "spawn_error",
            detail
        };
    }
    if (r.code > 0) {
        return {
            ok: false,
            reason: "nonzero_exit",
            detail
        };
    }
    return {
        ok: false,
        reason: "unknown",
        detail
    };
}
export { mWr, Ajt, Cjt, xj, Rjt, Fs };
